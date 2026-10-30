// Synced from cheneygross-afk/lengo:src/lib/lessons/c2-reinforcement.ts by scripts/sync-content.mjs -- edit it there, not here.
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
        [
          "Recuerda la regla: el texto jurídico y el lenguaje claro dicen lo mismo con piezas distintas. Pasar de uno a otro es hacer tres cambios mecánicos: la tercera persona formal («el suscrito declara») vuelve a la primera («declaro»); cada locución fija se cambia por su equivalente sencillo («a tenor de lo dispuesto en» → «según»; «a la mayor brevedad» → «cuanto antes»); y el futuro de obligación («deberá abonar») pasa a «tiene que pagar». En sentido inverso se aplican los mismos cambios al revés.",
          "Lo que nunca cambia es el contenido: «sin perjuicio de» significa «sin que eso impida», no «sin causar daño», y «dar fe» es certificar, no creer. El lenguaje claro no elimina las fórmulas por capricho: las traduce para el ciudadano sin perder precisión.",
        ],
        [
          ["El suscrito declara… → Yo, quien firma, declaro…", "The undersigned declares… → I, the signatory, declare… (tercera persona → primera)"],
          ["A tenor de lo dispuesto en el artículo 5… → Según el artículo 5…", "Pursuant to article 5… → According to article 5… (locución → preposición simple)"],
          ["El comprador deberá abonar el importe. → El comprador tiene que pagar el importe.", "The buyer shall pay the amount. → The buyer has to pay the amount. (futuro de obligación → tener que)"],
        ],
        [
          toEs("A tenor de lo dispuesto en la ordenanza, los vecinos deberán retirar sus vehículos.", "Según la ordenanza, los vecinos tienen que retirar sus vehículos.", "Dos cambios: la locución «a tenor de lo dispuesto en» se reduce a «según», y el futuro de obligación «deberán» pasa a «tienen que». El contenido (quién debe hacer qué) no cambia.", ["Según la ordenanza, los vecinos deben retirar sus vehículos.", "Según lo que dice la ordenanza, los vecinos tienen que retirar sus vehículos.", "Según lo que dice la ordenanza, los vecinos deben retirar sus vehículos.", "Según la ordenanza, los vecinos tienen que quitar sus vehículos."], "Reescribe en lenguaje claro."),
          mc(
            "«Sin perjuicio de las acciones legales que procedan» significa…",
            ["sin que esto impida emprender acciones legales", "sin causar ningún daño legal", "sin acciones legales", "con perjuicio legal"],
            0,
            "«Sin perjuicio de» significa dejando a salvo, sin excluir: no impide emprender acciones legales. No tiene que ver con causar daño («perjuicio» en sentido común), no significa que no haya acciones y «con perjuicio» invierte el sentido."
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
        "Cada fórmula jurídica tiene un equivalente claro de una o dos palabras: la locución se reduce a una preposición («según»), a un verbo común («certificar»), a una perífrasis con la primera persona («quien firma») o a un adverbio («cuanto antes»)."
      ),
      fb("Traduce a lenguaje jurídico.", "Según lo que dice la ley… → A ___ de lo dispuesto en la ley…", "tenor", "«Según lo que dice» sube de registro con la locución fija «a tenor de lo dispuesto en»: «tenor» es el contenido literal de la norma."),
      fb("Traduce a lenguaje jurídico.", "Yo, quien firma abajo… → El ___…", "suscrito", "En lenguaje jurídico, quien firma un escrito se presenta como «el suscrito» (o «la suscrita»)."),
      { ...fb("Traduce a lenguaje claro.", "En virtud del contrato… → ___ el contrato…", "Según", "En virtud de = según / de acuerdo con."), altAnswers: ["De acuerdo con", "Conforme a"] },
      mc(
        "¿Qué significa «El notario da fe de que el documento es auténtico»?",
        ["El notario certifica que el documento es auténtico.", "El notario tiene fe en el documento.", "El notario duda del documento.", "El notario regala el documento."],
        0,
        "«Dar fe» significa certificar oficialmente que algo es verdadero o auténtico. No significa confiar en el documento («tener fe»), ni dudar de él, ni regalarlo."
      ),
      toEs("Pursuant to article 12, the tenant must pay the deposit.", "A tenor de lo dispuesto en el artículo 12, el arrendatario deberá abonar la fianza.", "«A tenor de lo dispuesto en» es la fórmula jurídica para «pursuant to»; el futuro («deberá») expresa obligación.", ["Según el artículo 12, el arrendatario deberá pagar la fianza.", "Conforme al artículo 12, el arrendatario deberá abonar la fianza.", "En virtud del artículo 12, el arrendatario deberá abonar la fianza."]),
      wo("Sin perjuicio de lo anterior, ambas partes podrán rescindir el contrato.", "«Sin perjuicio de lo anterior» introduce una salvedad: lo dicho antes sigue vigente. «Rescindir» es dejar sin efecto el contrato.", "Without prejudice to the foregoing, both parties may terminate the contract."),
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
        [
          "Recuerda la regla: para saber cómo se llama cada persona, pregúntate primero en qué escenario está, porque cada escenario tiene su propio reparto. En un documento notarial hay otorgante (quien concede, p. ej., un poder), apoderado (quien lo recibe) y compareciente (quien se presenta ante el notario). En un juicio civil, dos particulares discuten un interés privado: demandante y demandado, sin fiscal. En un juicio penal se persigue un delito y por eso interviene el Estado: el fiscal (Ministerio Público) acusa, junto a la acusación particular si la hay, y la persona perseguida es el acusado, nunca el demandado.",
          "En todos los escenarios, el letrado (o la letrada) es el abogado, y el procurador representa a la parte ante el tribunal. Fíjate en el género: las formas en -nte no cambian (la otorgante), las formas en -do sí (la apoderada, la acusada).",
        ],
        [
          ["El otorgante confiere poder al apoderado.", "The grantor gives power of attorney to the agent."],
          ["El demandado interpuso recurso contra la sentencia.", "The defendant filed an appeal against the ruling. (juicio civil)"],
          ["La fiscal pidió tres años de prisión para la acusada.", "The prosecutor asked for three years in prison for the accused woman. (juicio penal: hay delito)"],
        ],
        [
          mc(
            "En un poder notarial, quien recibe las facultades es…",
            ["el apoderado", "el otorgante", "el demandante", "el fiscal"],
            0,
            "Quien recibe las facultades en un poder es el apoderado, que actúa como representante. El otorgante es quien las concede, el demandante inicia un pleito y el fiscal ejerce la acusación pública."
          ),
          mc(
            "Un conductor causa un accidente bajo los efectos del alcohol y lo juzgan por un delito contra la seguridad vial. ¿Cómo se le llama en el juicio?",
            ["el acusado", "el demandado", "el otorgante", "el demandante"],
            0,
            "Hay un delito, así que el escenario es penal: la persona juzgada es el acusado y el fiscal sostiene la acusación. «Demandado» corresponde a un juicio civil entre particulares; otorgante y demandante designan a quien concede un poder o inicia una demanda."
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
        "Cada figura se define por su función: el demandante inicia la acción civil, el fiscal acusa en nombre del Estado en lo penal, el letrado defiende como abogado y el compareciente es quien se presenta ante la autoridad."
      ),
      fb("Completa.", "La empresa ___ alegó que no había recibido la notificación. (quien recibe la demanda)", "demandada", "La parte contra la que se dirige una demanda es la demandada."),
      fb("Completa.", "El ___ firmó el poder a favor de su hija. (quien concede)", "otorgante", "El otorgante es quien concede el poder, en este caso a favor de su hija."),
      mc(
        "¿Quién representa a una parte ante el tribunal en España, además del abogado?",
        ["el procurador", "el notario", "el fiscal", "el apoderado general"],
        0,
        "En España, el procurador de los tribunales representa a la parte ante el juzgado, junto al abogado que la defiende. El notario da fe de actos, el fiscal acusa en nombre del Estado y el apoderado general actúa fuera del proceso."
      ),
      ms(
        "¿Qué figuras pertenecen al proceso penal?",
        ["el acusado", "el fiscal", "la acusación particular", "el arrendatario"],
        [0, 1, 2],
        "El acusado, el fiscal y la acusación particular son figuras del proceso penal. El arrendatario pertenece al ámbito contractual (quien alquila)."
      ),
      toEs("The plaintiff's lawyer requested a postponement.", "El letrado del demandante solicitó un aplazamiento.", "En el lenguaje jurídico español, «letrado» es el término técnico para «abogado».", ["El abogado del demandante solicitó un aplazamiento.", "La letrada del demandante solicitó un aplazamiento.", "El abogado de la parte demandante solicitó un aplazamiento."]),
      wo("Compareció ante el juez acompañado de su letrada.", "«Comparecer» rige «ante» (comparecer ante el juez); «acompañado de» concuerda con el sujeto y va detrás del complemento.", "He appeared before the judge accompanied by his female lawyer."),
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
        [
          "Recuerda la regla: «resolución» es el término general y los demás son tipos que se distinguen por lo que deciden. Pregúntate qué resuelve el juez: si solo ordena el trámite (fijar una fecha, unir un documento), es una providencia, que no necesita motivación; si decide una cuestión incidental durante el proceso (una medida cautelar, la admisión de una prueba), es un auto, siempre motivado; si decide el fondo y pone fin al proceso, es una sentencia. El fallo no es otra resolución: es la parte dispositiva de la sentencia, lo que finalmente se decide.",
          "Por qué importa: el tipo de resolución determina qué recurso cabe y qué efectos tiene. Por eso cada uno tiene sus verbos: el juez dicta sentencias, autos y providencias; las partes interponen recursos; el tribunal los estima (da la razón) o los desestima. Una sentencia es firme cuando ya no cabe recurso contra ella.",
        ],
        [
          ["La sentencia es firme; no cabe recurso.", "The judgment is final; there is no appeal."],
          ["El juez dictó auto de prisión provisional.", "The judge issued an order for provisional detention. (cuestión incidental: auto)"],
          ["La jueza dictó una providencia que señala la vista para el 3 de mayo.", "The judge issued a procedural order setting the hearing for 3 May. (mero trámite: providencia)"],
        ],
        [
          mc(
            "Una sentencia contra la que ya no cabe recurso es…",
            ["firme", "provisional", "cautelar", "nula"],
            0,
            "Una sentencia firme es la que ya no admite recurso. Una resolución provisional o cautelar puede cambiar, y una sentencia nula carece de efectos, que es algo distinto."
          ),
          mc(
            "Durante el juicio, la jueza decide, razonando su decisión, que no admite el informe pericial que presentó una de las partes. ¿Qué resolución dicta?",
            ["un auto", "una providencia", "una sentencia", "un fallo"],
            0,
            "Decidir si se admite una prueba es una cuestión incidental, y se hace con una resolución motivada: un auto. La providencia solo ordena el trámite, la sentencia resuelve el fondo y el fallo es la parte dispositiva de la sentencia, no una resolución aparte."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "El juez ___ sentencia absolutoria. (verbo técnico, pretérito)", "dictó", "La colocación técnica es «dictar sentencia»: el juez dicta, no «hace» ni «da»."),
      fb("Completa.", "La parte condenada ___ recurso de apelación. (verbo técnico, pretérito)", "interpuso", "La colocación técnica es «interponer un recurso»."),
      fb("Completa.", "El tribunal ___ el recurso por falta de fundamento. (rechazar, término técnico)", "desestimó", "«Desestimar» es el verbo técnico para rechazar un recurso o una pretensión."),
      mt(
        "Relaciona el término con su definición.",
        [
          ["auto", "resolución motivada sobre incidencias"],
          ["providencia", "resolución de trámite"],
          ["fallo", "parte dispositiva de la sentencia"],
        ],
        "Las resoluciones se distinguen por lo que deciden: el auto resuelve incidencias de forma motivada, la providencia solo ordena el trámite y el fallo es la parte de la sentencia que contiene la decisión."
      ),
      mc(
        "Si el tribunal da la razón al recurrente, se dice que…",
        ["estima el recurso", "desestima el recurso", "archiva el recurso", "prescribe el recurso"],
        0,
        "Cuando el tribunal da la razón al recurrente, «estima el recurso». «Desestimar» es rechazarlo, «archivar» es cerrar un expediente y «prescribir» es extinguirse un derecho por el paso del tiempo."
      ),
      ms(
        "¿Qué verbos colocan con «recurso»?",
        ["interponer", "estimar", "desestimar", "dictar"],
        [0, 1, 2],
        "Con «recurso» se usan «interponer», «estimar» y «desestimar». «Dictar» se usa con una sentencia o un auto, no con un recurso."
      ),
      toEs("The court upheld the appeal.", "El tribunal estimó el recurso.", "«Estimar el recurso» significa darle la razón al recurrente («uphold»).", ["El tribunal estimó el recurso de apelación.", "El tribunal admitió y estimó el recurso."]),
    ]
  ),
  L(
    "legal-administrative-spanish-part-1-mastery-check",
    "c2r-mission-instancia",
    "Misión real: redactar una instancia",
    "Redacta una instancia al ayuntamiento (licencia de obras o de terraza) con el formato clásico EXPONE / SOLICITA.",
    "8 min",
    [
      sec(
        "La estructura de la instancia",
        [
          "Recuerda la regla: cada «Que» de la instancia depende del verbo en mayúsculas que lo encabeza, y ese verbo decide el modo. EXPONE significa «declara», y lo que se declara son hechos: «Que es propietario…», «Que las obras durarán…», en indicativo. SOLICITA significa «pide», y tras un verbo de petición va el subjuntivo: «Que se le conceda…», «Que se le autorice…». Todo el escrito va en tercera persona, porque habla el solicitante identificado en el encabezamiento, no un «yo».",
          "Estructura: encabezamiento («D./D.ª [nombre], con DNI…, y domicilio a efectos de notificaciones en…»); EXPONE con los hechos numerados; SOLICITA con la petición («Que, previos los trámites oportunos, se le conceda…»); cierre con lugar y fecha («En Toledo, a 3 de mayo»), firma y destinatario («SR./SRA. ALCALDE/SA-PRESIDENTE/A DEL AYUNTAMIENTO DE…»).",
        ],
        [
          ["EXPONE: Que es titular de la vivienda sita en la calle Mayor, 3.", "STATES: That he is the owner of the dwelling located at 3 Calle Mayor."],
          ["SOLICITA: Que se le conceda licencia de obra menor.", "REQUESTS: That he be granted a minor works permit. (pedir → subjuntivo)"],
          ["EXPONE: Que el local cuenta con salida de humos homologada.", "STATES: That the premises have an approved smoke outlet. (declarar un hecho → indicativo)"],
        ],
        [
          mc(
            "Las oraciones del EXPONE empiezan tradicionalmente por…",
            ["Que", "Yo", "Hola", "Porque"],
            0,
            "En una instancia, las oraciones del EXPONE empiezan tradicionalmente por «Que», en tercera persona. «Yo» rompe esa convención, «Hola» es informal y «Porque» no introduce la exposición."
          ),
          mc(
            "Una inquilina pide al ayuntamiento que le devuelva la fianza. ¿Qué punto del SOLICITA es correcto?",
            ["Que se le devuelva la fianza depositada.", "Que se le devuelve la fianza depositada.", "Que me devuelvan la fianza depositada.", "Que se le devolverá la fianza depositada."],
            0,
            "SOLICITA es un verbo de petición, así que el «Que» va con subjuntivo («se le devuelva») y en tercera persona. «Se le devuelve» y «se le devolverá» son indicativos, propios del EXPONE; «me devuelvan» rompe la tercera persona."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "Con domicilio a ___ de notificaciones en la calle Luna, 8.", "efectos", "La fórmula administrativa es «a efectos de notificaciones» (el domicilio que se da para recibirlas)."),
      fb("Completa.", "Que es propietaria de la vivienda ___ en la avenida del Mar, 12. (situada, término jurídico)", "sita", "«Sito/sita» es el término jurídico para «situado/situada»."),
      fb("Completa.", "Que, previos los trámites ___, se le conceda la licencia.", "oportunos", "«Previos los trámites oportunos» es una fórmula fija de las instancias."),
      mc(
        "¿En qué persona se redacta la instancia clásica?",
        ["en tercera persona", "en primera persona del plural", "en segunda persona", "en voseo"],
        0,
        "La instancia clásica se redacta en tercera persona («Que es propietario…», «que se le conceda…»). No usa el «nosotros», la segunda persona ni el voseo."
      ),
      mc(
        "¿Qué sección contiene la petición concreta?",
        ["SOLICITA", "EXPONE", "el encabezamiento", "la firma"],
        0,
        "La petición concreta va en SOLICITA. EXPONE recoge los hechos, el encabezamiento identifica al solicitante y la firma cierra el escrito."
      ),
      toEs("That he be granted the requested permit.", "Que se le conceda la licencia solicitada.", "La petición se formula con «que» + subjuntivo: «que se le conceda».", ["Que se le conceda el permiso solicitado.", "Que le sea concedida la licencia solicitada."]),
      wo("Que, previos los trámites oportunos, se le conceda la licencia solicitada.", "El SOLICITA empieza por «Que» + subjuntivo («se le conceda»); «previos los trámites oportunos» va entre comas como inciso antes del verbo.", "That, after the appropriate procedures, the requested permit be granted."),
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
        [
          "Recuerda la regla: una cláusula está bien redactada cuando un juez puede aplicarla sin preguntar qué quisieron decir las partes. Para eso necesita cuatro piezas: un sujeto técnico (el arrendador, el arrendatario, la parte contratante; nunca «el dueño» o «el inquilino»), un verbo de obligación en futuro deóntico (abonará, podrá, se compromete a), una obligación medible (plazo, cantidad y forma) y cero coloquialismos.",
          "Al cazar errores, revisa cada pieza por separado: ¿quién?, ¿qué verbo?, ¿cuándo y cuánto?, ¿qué registro? Ambigüedad típica: «Se pagará pronto» → «Se abonará dentro de los cinco primeros días de cada mes».",
        ],
        [
          ["✗ El inquilino pagará cuando pueda. → ✓ El arrendatario abonará la renta dentro de los cinco primeros días de cada mes.", "The tenant shall pay the rent within the first five days of each month. (sujeto técnico + futuro deóntico + plazo)"],
          ["✗ Si hay problemas, se arreglará. → ✓ Cualquier controversia se someterá a los tribunales de Zaragoza.", "Any dispute shall be submitted to the courts of Zaragoza. (la vaguedad se sustituye por un procedimiento)"],
        ],
        [
          mc(
            "¿Qué cláusula es precisa?",
            ["La renta se abonará mediante transferencia antes del día 5 de cada mes.", "La renta se pagará más o menos a principios de mes.", "El inquilino pagará como siempre.", "Se paga la renta, ya se sabe cuándo."],
            0,
            "Una cláusula precisa fija la forma y el plazo exactos: «mediante transferencia antes del día 5». «Más o menos», «como siempre» y «ya se sabe cuándo» son vaguedades inaceptables en un contrato."
          ),
          ms(
            "¿Qué piezas fallan en «El casero podrá subir el alquiler cuando le parezca bien»?",
            ["el sujeto: «casero» es coloquial", "la condición: «cuando le parezca bien» no fija nada", "el verbo: «podrá» no es contractual", "falta indicar cuánto puede subir"],
            [0, 1, 3],
            "Fallan el sujeto (debe ser «el arrendador»), la condición (vaga) y la medida (no dice cuánto). «Podrá» sí es correcto: es el futuro deóntico que expresa lo que el contrato permite."
          ),
        ]
      ),
    ],
    [
      fb("Corrige el registro.", "El ___ se compromete a mantener el inmueble en buen estado. (el alumno puso: inquilino)", "arrendatario", "En un contrato de alquiler se dice «arrendatario»; «inquilino» es la palabra corriente."),
      fb("Corrige la imprecisión.", "El contrato tendrá una ___ de doce meses. (el alumno puso: vida)", "duración", "En un contrato se habla de «duración»; «vida» es impreciso y coloquial."),
      fb("Corrige el verbo.", "El incumplimiento de esta cláusula será causa de ___ del contrato. (el alumno puso: romper)", "resolución", "El término técnico es «resolución del contrato», su extinción por incumplimiento."),
      ms(
        "¿Qué problemas tiene «El dueño puede echar al inquilino si hace cosas raras»?",
        ["léxico coloquial (dueño, echar)", "condición imprecisa (cosas raras)", "falta de procedimiento", "exceso de tecnicismos"],
        [0, 1, 2],
        "La frase tiene léxico coloquial («dueño», «echar»), una condición imprecisa («cosas raras») y ningún procedimiento. No le sobran tecnicismos: le faltan."
      ),
      mc(
        "Versión jurídica de «si alguno no cumple»:",
        ["en caso de incumplimiento por cualquiera de las partes", "si alguien pasa del contrato", "si no se hace", "si la cosa sale mal"],
        0,
        "«En caso de incumplimiento por cualquiera de las partes» es la fórmula contractual. «Si alguien pasa del contrato» es coloquial, y «si no se hace» o «si la cosa sale mal» son vagos."
      ),
      toEs("Either party may terminate the contract with two months' notice.", "Cualquiera de las partes podrá rescindir el contrato con un preaviso de dos meses.", "El futuro deóntico («podrá») expresa lo que el contrato permite; «rescindir» es dejar sin efecto el contrato.", ["Cualquiera de las partes podrá resolver el contrato con un preaviso de dos meses.", "Cualquiera de las partes podrá rescindir el contrato con dos meses de preaviso."]),
      wo("El arrendatario abonará la renta dentro de los cinco primeros días de cada mes.", "Cláusula precisa: sujeto técnico («el arrendatario»), futuro con valor de obligación («abonará») y plazo exacto, sin ambigüedad posible.", "The tenant shall pay the rent within the first five days of each month."),
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
        [
          "Recuerda la regla: para elegir entre solidaria y mancomunada, pregúntate cuánto puede pedir el acreedor a cada deudor. Si puede exigir la totalidad a cualquiera, la obligación es solidaria; si solo puede pedir a cada uno su parte, es mancomunada. Por eso el avalista solidario asume un gran riesgo: puede acabar pagándolo todo y luego tener que reclamar a los demás su cuota.",
          "La misma lógica sirve para los verbos que ponen fin a un contrato: el verbo nombra la causa. Si el contrato tenía un vicio de origen (engaño, amenaza, falta de consentimiento), se anula y es nulo; si una parte no cumple, se resuelve por incumplimiento; si se da una causa prevista en el propio contrato, se rescinde; y si pasa el tiempo sin reclamar, el derecho prescribe.",
        ],
        [
          ["Los dos socios responden solidariamente de la deuda.", "Both partners are jointly and severally liable for the debt."],
          ["Cada codeudor responde mancomunadamente, en proporción a su cuota.", "Each co-debtor is liable only in proportion to their share. (cada uno, su parte)"],
          ["El juez anuló el préstamo porque la firma se obtuvo bajo amenaza.", "The judge annulled the loan because the signature was obtained under threat. (vicio de origen → anular)"],
        ],
        [
          mc(
            "Si la responsabilidad es solidaria, el banco puede reclamar…",
            ["toda la deuda a cualquiera de los deudores", "solo la mitad a cada uno", "nada hasta que paguen todos", "solo al primero que firmó"],
            0,
            "En la responsabilidad solidaria cada deudor responde por el todo: el banco puede reclamar toda la deuda a cualquiera. Reclamar solo la mitad a cada uno sería mancomunada, y no tiene que esperar a nadie ni limitarse al primero que firmó."
          ),
          mc(
            "El contrato de una agencia permite a cualquiera de las partes darlo por terminado si la otra traslada su sede al extranjero. La agencia se traslada a Lisboa y el cliente pone fin al contrato. ¿Qué ha hecho el cliente?",
            ["rescindir el contrato", "anular el contrato", "resolver el contrato por incumplimiento", "dejar prescribir el contrato"],
            0,
            "La causa estaba prevista en el propio contrato, y eso es rescindir. No hay vicio de origen (anular), la agencia no ha incumplido ninguna obligación (resolver) y no se trata del paso del tiempo (prescribir)."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "Como avalista ___, tuvo que pagar la deuda entera de su hermano.", "solidario", "El avalista solidario responde por la totalidad de la deuda, no solo por una parte."),
      fb("Completa.", "En la obligación ___, cada deudor paga solo su parte.", "mancomunada", "En la obligación mancomunada, cada deudor responde solo de su parte."),
      fb("Completa.", "El juez declaró ___ el contrato por falta de consentimiento. (sin validez jurídica)", "nulo", "Un contrato sin consentimiento válido es «nulo»: no produce efectos jurídicos."),
      mc(
        "Un contrato se extingue porque una parte no cumple. Se habla de…",
        ["resolución por incumplimiento", "nulidad de pleno derecho", "prescripción", "usufructo"],
        0,
        "Cuando una parte no cumple, se habla de «resolución por incumplimiento». La nulidad de pleno derecho se debe a un vicio de origen, la prescripción al paso del tiempo y el usufructo es un derecho de uso y disfrute."
      ),
      mt(
        "Relaciona cada término con su definición.",
        [
          ["rescindir", "dejar sin efecto por causa prevista"],
          ["anular", "declarar nulo por un vicio"],
          ["resolver", "extinguir por incumplimiento"],
          ["solidaria", "se puede exigir el total a cualquiera"],
        ],
        "Cada verbo nombra la causa de la extinción: causa prevista (rescindir), vicio de origen (anular), incumplimiento (resolver); y «solidaria» responde a la pregunta de cuánto se puede pedir a cada deudor: todo."
      ),
      toEs("The debt is time-barred; it can no longer be claimed.", "La deuda ha prescrito; ya no puede reclamarse.", "«Prescribir» significa que un derecho se extingue por el paso del tiempo.", ["La deuda ha prescrito y ya no se puede reclamar.", "La deuda prescribió; ya no puede reclamarse."]),
      wo("Ambos firmantes responderán solidariamente de las obligaciones contraídas.", "«Responder solidariamente de» = cada firmante puede ser obligado a pagar el total; el futuro «responderán» expresa obligación contractual.", "Both signatories shall be jointly and severally liable for the obligations incurred."),
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
        [
          "Recuerda la regla: toda notificación administrativa sigue el mismo esqueleto, y leerla es buscar cinco piezas: qué se le notifica (con «se» impersonal: se le notifica, se han detectado); el plazo (cuánto, desde cuándo y si son días hábiles); qué debe hacer usted (subsanar, aportar, alegar); qué pasa si no lo hace (se le tendrá por desistido, se archivará); y las salvedades («sin perjuicio de…»). El participio absoluto («examinada su declaración», «transcurrido dicho plazo») concuerda con su sustantivo y marca lo que ya ha ocurrido antes de la acción principal.",
          "«Por medio de la presente se le notifica que, examinada su declaración, se han detectado defectos subsanables. Dispone de un plazo de diez días hábiles, a contar desde el día siguiente a la recepción de esta notificación, para subsanarlos. Transcurrido dicho plazo sin que se haya producido la subsanación, se le tendrá por desistido de su solicitud, sin perjuicio de las sanciones que pudieran corresponder.»",
        ],
        [
          ["Defectos subsanables.", "Errors that can be corrected."],
          ["Se le tendrá por desistido.", "You will be deemed to have withdrawn. (consecuencia si no actúa)"],
          ["Examinadas las alegaciones, se confirma la sanción.", "Having examined the submissions, the penalty is confirmed. (examinadas concuerda con alegaciones)"],
        ],
        [
          mc(
            "¿Cuánto tiempo tiene el ciudadano?",
            ["diez días hábiles desde el día siguiente a recibirla", "diez días naturales desde la fecha del documento", "un mes", "hasta que quiera"],
            0,
            "El plazo son diez días hábiles, contados desde el día siguiente a la recepción. No son naturales ni se cuentan desde la fecha del documento, no es un mes y, desde luego, no es ilimitado."
          ),
          mc(
            "Otra notificación dice: «Notificada la presente resolución, podrá interponer recurso de reposición en el plazo de un mes, a contar desde el día siguiente a su recepción». ¿Qué pieza del esqueleto es «podrá interponer recurso de reposición»?",
            ["lo que el interesado puede hacer", "la consecuencia de no actuar", "una salvedad con «sin perjuicio de»", "el cómputo del plazo"],
            0,
            "«Podrá interponer recurso» indica la actuación que se ofrece al interesado. La consecuencia de no actuar aparecería como «se le tendrá por…» o «se archivará», la salvedad empezaría por «sin perjuicio de» y el cómputo del plazo es «a contar desde el día siguiente»."
          ),
        ]
      ),
    ],
    [
      mc(
        "¿Qué pasa si no corrige los defectos a tiempo?",
        ["Se considera que renuncia a su solicitud.", "Se le concede lo solicitado.", "Se amplía el plazo automáticamente.", "No pasa nada."],
        0,
        "«Tener por desistido» significa considerar que el solicitante renuncia a su solicitud. No se le concede lo pedido, el plazo no se amplía automáticamente y sí tiene consecuencias."
      ),
      mc(
        "«Días hábiles» excluye…",
        ["sábados, domingos y festivos", "solo los domingos", "los lunes", "ningún día"],
        0,
        "En el procedimiento administrativo español, los días hábiles excluyen sábados, domingos y festivos. No excluyen solo los domingos ni los lunes, y sí excluyen días."
      ),
      fb("Completa.", "Los defectos son ___: pueden corregirse.", "subsanables", "«Subsanable» significa que un defecto puede corregirse."),
      fb("Completa.", "El plazo es de diez días hábiles, a ___ desde el día siguiente.", "contar", "«A contar desde» fija el inicio del cómputo de un plazo."),
      mc(
        "«Sin perjuicio de las sanciones que pudieran corresponder» implica que…",
        ["además podría haber sanciones", "no habrá sanciones", "las sanciones sustituyen el plazo", "la sanción ya está decidida"],
        0,
        "«Sin perjuicio de» deja abierta la posibilidad de sancionar además. No excluye las sanciones, no las pone en lugar del plazo y no las da por decididas («pudieran» expresa posibilidad)."
      ),
      ms(
        "¿Qué rasgos del estilo administrativo aparecen?",
        ["se impersonal (se le notifica)", "participio absoluto (examinada su declaración)", "subjuntivo en fórmula (pudieran corresponder)", "voseo"],
        [0, 1, 2],
        "Aparecen el «se» impersonal, el participio absoluto y el subjuntivo en fórmula fija. No hay voseo, impropio del estilo administrativo."
      ),
      wo("Transcurrido dicho plazo, se le tendrá por desistido de su solicitud.", "«Transcurrido dicho plazo» es un participio absoluto (= cuando haya transcurrido) y «se le tendrá por desistido» es la fórmula administrativa de «you will be deemed to have withdrawn».", "Once this period has elapsed, you will be deemed to have withdrawn your application."),
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
        [
          "Recuerda la regla: en la notaría se habla de usted y se pide con condicional de cortesía («¿Podría explicarme…?», «¿Sería posible…?»). Y para entender lo que firmas, distingue dos tipos de facultades: las de administración permiten gestionar los bienes (cobrar, pagar, contratar suministros); las de disposición permiten venderlos o gravarlos (hipotecarlos). Un poder de mera administración no permite vender. Todo poder es revocable, pero se revoca con otra escritura, no de palabra.",
          "—Notario: Usted, como otorgante, confiere a su hijo poder general para administrar sus bienes. ¿Comprende el alcance? —Cliente: ¿Podría revocarlo más adelante? —Notario: Sí, el poder es revocable en cualquier momento mediante nueva escritura. —Cliente: ¿Y mi hijo podría vender la casa? —Notario: Solo si el poder incluye facultades de disposición; este es de mera administración.",
        ],
        [
          ["El poder es revocable.", "The power of attorney can be revoked."],
          ["Facultades de disposición.", "Powers to sell or dispose of property. (vender, hipotecar)"],
          ["¿Sería posible añadir la facultad de hipotecar?", "Would it be possible to add the power to mortgage? (condicional de cortesía)"],
        ],
        [
          mc(
            "¿Puede el hijo vender la casa con este poder?",
            ["No, es un poder de mera administración.", "Sí, siempre.", "Solo con el permiso del notario.", "Sí, si la vende barata."],
            0,
            "No: un poder de mera administración no permite vender; para eso hace falta facultad de disposición. No depende de un permiso del notario ni del precio de venta."
          ),
          mc(
            "El notario pregunta: «¿Desea que el poder incluya también la facultad de hipotecar sus inmuebles?». La clienta no quiere. ¿Qué responde?",
            ["No, preferiría que se limitara a la administración de mis bienes.", "No, que no hipoteque nada, ¿vale?", "No, prefiero que se limita a la administración.", "Sí, pero que no venda nada."],
            0,
            "Hipotecar es una facultad de disposición, así que la clienta pide limitar el poder a la administración, con un registro formal y el subjuntivo que exige «preferir que» («se limitara»). La segunda respuesta es coloquial, la tercera usa indicativo tras «preferir que» y la cuarta acepta lo que no quiere."
          ),
        ]
      ),
    ],
    [
      { ...fb("Completa.", "El poder puede ___ en cualquier momento. (dejar sin efecto, infinitivo)", "revocarse", "«Revocar» un poder es dejarlo sin efecto; aquí, con «se» pasivo: «revocarse». También vale «ser revocado»."), altAnswers: ["ser revocado"] },
      { ...fb("Completa.", "Usted ___ poder a su hijo. (conceder, término notarial)", "confiere", "En lenguaje notarial se «confiere» u «otorga» poder a alguien."), altAnswers: ["otorga"] },
      mc(
        "¿Qué pregunta es adecuada ante el notario?",
        ["¿Podría explicarme el alcance de estas facultades?", "¿Esto qué es, tío?", "Venga, ¿dónde firmo y me piro?", "¿Me lo resumes rapidito?"],
        0,
        "Ante un notario corresponde el registro formal: «¿Podría explicarme…?». «Tío», «me piro» y «rapidito» son coloquiales, y el tuteo resulta inadecuado."
      ),
      mc(
        "«Escritura pública» es…",
        ["un documento autorizado por notario", "cualquier texto escrito", "un correo electrónico", "una carta privada"],
        0,
        "Una escritura pública es un documento autorizado por notario. No es cualquier texto escrito, ni un correo, ni una carta privada."
      ),
      mt(
        "Relaciona el término con su significado.",
        [
          ["otorgar", "conceder formalmente"],
          ["revocar", "anular una concesión"],
          ["facultad", "capacidad jurídica para actuar"],
        ],
        "En la notaría, «otorgar» es conceder formalmente un poder, «revocar» es dejarlo sin efecto mediante nueva escritura y las «facultades» son lo que el poder permite hacer, ni más ni menos."
      ),
      toEs("Si luego me arrepiento, ¿le puedo quitar el poder a mi hijo?", "Si más adelante cambio de opinión, ¿podría revocar el poder?", "Ante el notario, la pregunta se suaviza con el condicional de cortesía («¿podría…?») y se usa el verbo técnico: un poder no se «quita», se revoca.", ["Si cambio de opinión más adelante, ¿podría revocar el poder?", "Si más adelante me arrepiento, ¿podría revocar el poder?", "Si me arrepiento más adelante, ¿podría revocar el poder?", "Si más adelante cambio de opinión, ¿podría revocarle el poder a mi hijo?", "Si más adelante cambio de opinión, ¿podría revocar el poder de mi hijo?", "Si luego cambio de opinión, ¿podría revocar el poder?", "Si luego me arrepiento, ¿podría revocar el poder?"], "Reescribe la pregunta en registro formal."),
      wo("El poder podrá revocarse en cualquier momento mediante nueva escritura.", "«Podrá revocarse» es el verbo «poder» en futuro + infinitivo con «se» pasivo (= podrá ser revocado); el poder se revoca con otra escritura, no de palabra.", "The power of attorney may be revoked at any time by a new deed."),
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
        [
          "Recuerda la regla: el texto legal busca dos cosas, economía e impersonalidad, y cuatro estructuras del C1 le sirven para eso. El participio absoluto condensa una subordinada temporal y concuerda con su sustantivo («Leída la presente…», «Vencido el plazo…»). El futuro deóntico formula obligaciones sin verbo modal («El arrendatario abonará…» = deberá abonar). Las condiciones hipotéticas van en subjuntivo («En caso de que alguna de las partes incumpla…»); el futuro de subjuntivo («incumpliere») sobrevive casi solo en textos jurídicos antiguos y en fórmulas fijas como «sea como fuere». Y el «se» impersonal borra al autor («Se hace constar que…»).",
          "Al leer, cada estructura te dice algo: el participio absoluto, qué ocurrió antes; el futuro, qué es obligatorio; el subjuntivo, qué es solo una posibilidad.",
        ],
        [
          ["Leído el presente documento, las partes lo firman.", "Having read this document, the parties sign it."],
          ["En caso de que el comprador no abone el precio…", "Should the buyer fail to pay the price… (condición hipotética: subjuntivo)"],
          ["Vencida la hipoteca, el banco podrá ejecutar la garantía.", "Once the mortgage falls due, the bank may enforce the guarantee. (vencida concuerda con hipoteca)"],
        ],
        [
          mc(
            "«En caso de que el inquilino ___ la fianza…» (forma general moderna)",
            ["no abone", "no abona", "no abonará", "no abonaba"],
            0,
            "«En caso de que» exige subjuntivo, y en la forma moderna, presente: «no abone». «Abona» y «abonará» son indicativo, y «abonaba» no concuerda con una condición futura."
          ),
          mc(
            "«___ las alegaciones, el tribunal desestimó el recurso.» (estudiar)",
            ["Estudiadas", "Estudiado", "Estudiados", "Estudiando"],
            0,
            "El participio absoluto concuerda en género y número con su sustantivo: «las alegaciones» es femenino plural, así que «estudiadas». El gerundio «estudiando» no expresa una acción ya concluida antes de la principal."
          ),
        ]
      ),
    ],
    [
      fb("Participio absoluto.", "___ el plazo, no se admitirán reclamaciones. (vencer)", "Vencido", "El participio absoluto concuerda con su sujeto y expresa una acción ya concluida: «vencido el plazo»."),
      { ...fb("Futuro deóntico.", "El comprador ___ el precio en el acto de la firma. (pagar)", "pagará", "En los contratos, el futuro expresa obligación: «el comprador pagará» (o «abonará»)."), altAnswers: ["abonará"] },
      fb("Completa la fórmula notarial.", "___ hace constar que el inmueble está libre de cargas.", "Se", "«Se hace constar que» es una fórmula notarial impersonal."),
      mc(
        "Futuro de subjuntivo propio de textos legales: «El que ___ daño a otro estará obligado a repararlo.»",
        ["hiciere", "hiciera", "haga", "hace"],
        0,
        "El futuro de subjuntivo («hiciere») sobrevive casi solo en textos jurídicos antiguos o solemnes. Hoy lo sustituye el presente de subjuntivo («haga»), o el imperfecto («hiciera») en contextos de pasado, pero ninguno de los dos es futuro de subjuntivo, y «hace» es indicativo."
      ),
      mc(
        "¿Qué frase es propia de un contrato?",
        ["Firmado el acuerdo, ambas partes quedan obligadas.", "Una vez que firmamos, ya está.", "Firmamos y listo.", "Cuando firmemos, pues ya veremos."],
        0,
        "El participio absoluto («Firmado el acuerdo») es propio del registro contractual. «Ya está», «y listo» y «pues ya veremos» son coloquiales."
      ),
      toEs("Once the documentation has been examined, the request is approved.", "Examinada la documentación, se aprueba la solicitud.", "Participio absoluto («examinada la documentación») + «se» impersonal: estilo administrativo.", ["Una vez examinada la documentación, se aprueba la solicitud.", "Examinada la documentación, se estima la solicitud."]),
      wo("Leído el presente contrato, las partes lo firman por duplicado.", "El participio absoluto va al principio y concuerda con su sustantivo («leído el contrato»): expresa una acción anterior a la principal.", "Having read this contract, the parties sign it in duplicate."),
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
        [
          "Recuerda la regla: cada descriptor del dolor pertenece a un solo eje, y una buena descripción toma una palabra de cada eje sin mezclar opuestos del mismo. Cualidad (¿cómo es?): sordo (continuo y poco intenso), punzante (como pinchazos), opresivo (como un peso), lancinante (agudo y desgarrador), urente (quemazón). Localización (¿dónde?): localizado, difuso, irradiado (se extiende: «irradia al brazo izquierdo»). Inicio (¿cómo empezó?): súbito o insidioso. Patrón y evolución (¿cómo se comporta?): continuo, intermitente, progresivo.",
          "Así detectas incoherencias: un dolor no puede ser a la vez localizado y difuso, ni de inicio súbito si el paciente no sabe cuándo empezó. Y cada imagen del paciente apunta a una cualidad: «agujas» → punzante, «un peso» → opresivo, «fuego» → urente.",
        ],
        [
          ["Un dolor opresivo en el pecho que irradia al brazo izquierdo.", "A crushing chest pain radiating to the left arm."],
          ["Un dolor sordo y continuo en la zona lumbar.", "A dull, constant pain in the lower back. (cualidad + patrón + localización)"],
          ["Un dolor lancinante de inicio súbito en la cabeza.", "An excruciating headache of sudden onset. (cualidad + inicio)"],
        ],
        [
          mc(
            "Un dolor «como si me clavaran agujas» es…",
            ["punzante", "sordo", "opresivo", "difuso"],
            0,
            "Un dolor «como si me clavaran agujas» es punzante. El sordo es continuo y poco intenso, el opresivo da sensación de peso o presión y el difuso no se localiza bien."
          ),
          mc(
            "Un paciente dice: «Me duele la muela, pero el dolor me sube hasta el oído». ¿Qué descriptor de localización corresponde?",
            ["irradiado", "difuso", "insidioso", "urente"],
            0,
            "El dolor nace en un punto (la muela) y se extiende a otra zona (el oído): es irradiado. «Difuso» sería un dolor sin punto claro, «insidioso» describe un inicio gradual y «urente» es una cualidad (quemazón), no una localización."
          ),
        ]
      ),
    ],
    [
      mt(
        "Relaciona el descriptor con su definición.",
        [
          ["dolor sordo", "continuo y poco intenso"],
          ["opresivo", "como un peso encima"],
          ["urente", "con sensación de quemazón"],
          ["irradiado", "se extiende a otra zona"],
        ],
        "Cada descriptor pertenece a un eje: sordo, opresivo y urente describen la cualidad; irradiado describe la localización, porque el dolor se extiende a otra zona."
      ),
      fb("Completa.", "El dolor empezó de golpe: fue de inicio ___.", "súbito", "Un inicio súbito es repentino; lo contrario sería «insidioso» (gradual, poco a poco)."),
      fb("Completa.", "Va y viene: es un dolor ___.", "intermitente", "Un dolor intermitente aparece y desaparece; lo contrario es «continuo»."),
      fb("Completa.", "El dolor de la ciática ___ por toda la pierna. (extenderse, término clínico)", "irradia", "En lenguaje clínico, el dolor «irradia» cuando se extiende desde su origen a otra zona."),
      mc(
        "¿Qué descripción es más útil para el médico?",
        ["Dolor punzante en el costado derecho desde hace tres días, que empeora al respirar.", "Me duele mucho por aquí.", "Me encuentro fatal.", "Tengo un dolor raro."],
        0,
        "La descripción útil combina cualidad, localización, duración y factor agravante. «Me duele mucho por aquí», «Me encuentro fatal» y «un dolor raro» no dan datos concretos."
      ),
      toEs("I have a dull pain in my lower back that gets worse when I sit.", "Tengo un dolor sordo en la zona lumbar que empeora al sentarme.", "Un dolor sordo es continuo y poco intenso; «zona lumbar» es la parte baja de la espalda.", ["Tengo un dolor sordo en la zona lumbar que empeora cuando me siento.", "Tengo un dolor sordo en la parte baja de la espalda que empeora al sentarme."]),
      wo("El dolor es de inicio insidioso y ha ido empeorando progresivamente.", "«De inicio insidioso» = de comienzo gradual; «ir + gerundio» («ha ido empeorando») expresa un cambio progresivo.", "The pain has a gradual onset and has been getting progressively worse."),
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
        [
          "Recuerda la regla: la médica pregunta siempre en el mismo orden (motivo de consulta, enfermedad actual, antecedentes personales y familiares, alergias, medicación habitual, hábitos), y cada pregunta pide un dato de una casilla concreta. Responde solo a esa casilla y elige el tiempo verbal según el tipo de dato: lo que empezó y sigue, con «desde hace» o «llevar» + tiempo («Llevo tres días con fiebre»); un hecho cerrado del pasado, en pretérito («Me operaron en 2015»); un hábito antiguo, en imperfecto («Fumaba mucho»); una enfermedad crónica, en presente («Padezco asma»).",
          "Preguntas típicas: «¿Qué le trae por aquí?», «¿Desde cuándo…? ¿Ha tomado algo?», «¿Padece alguna enfermedad crónica? ¿Le han operado alguna vez?», «¿Hay casos de… en su familia?», «¿Es alérgico a algún medicamento?», «¿Fuma? ¿Bebe alcohol?».",
        ],
        [
          ["—¿Es alérgico a algún medicamento? —Sí, a la penicilina.", "—Are you allergic to any medication? —Yes, to penicillin."],
          ["—¿Toma alguna medicación de forma habitual? —Un antihipertensivo.", "—Do you take any regular medication? —A blood pressure drug."],
          ["—¿Desde cuándo tiene la tos? —Desde hace diez días; empezó con un catarro.", "—How long have you had the cough? —For ten days; it started with a cold. (desde hace: empezó y sigue)"],
        ],
        [
          mc(
            "«¿Qué le trae por aquí?» pregunta por…",
            ["el motivo de consulta", "los antecedentes familiares", "las alergias", "la dirección"],
            0,
            "«¿Qué le trae por aquí?» pregunta por el motivo de consulta. Los antecedentes familiares, las alergias o la dirección se preguntan con otras fórmulas."
          ),
          mc(
            "La médica pregunta: «¿Ha tenido alguna vez una crisis parecida?». El paciente tuvo una igual en 2019. ¿Qué responde?",
            ["Sí, tuve una igual en 2019.", "Sí, tengo una igual desde 2019.", "Sí, tenía una igual en 2019.", "Sí, llevo una igual desde 2019."],
            0,
            "Es un hecho cerrado y fechado del pasado, así que va en pretérito: «tuve». «Tengo desde» y «llevo» dirían que la crisis sigue desde 2019, y el imperfecto «tenía» describiría una situación o un hábito, no un episodio concreto."
          ),
        ]
      ),
    ],
    [
      mc(
        "«¿Hay antecedentes de diabetes en su familia?» Respuesta adecuada:",
        ["Sí, mi padre y mi abuela eran diabéticos.", "Sí, soy alérgico al polen.", "No, no fumo.", "Desde hace dos días."],
        0,
        "La pregunta es por antecedentes familiares, así que se responde con familiares diabéticos. La alergia al polen, el tabaco o el tiempo que lleva el síntoma responden a otras preguntas de la anamnesis."
      ),
      fb("Completa.", "Me ___ de apendicitis hace diez años. (operar, ellos)", "operaron", "La tercera persona del plural impersonal («me operaron») sirve para contar antecedentes quirúrgicos sin nombrar al cirujano."),
      fb("Completa.", "___ de hipertensión desde los cuarenta. (sufrir una enfermedad crónica, yo, presente)", "Padezco", "«Padecer» es el verbo culto para sufrir una enfermedad, a menudo crónica: «padezco de hipertensión»."),
      fb("Completa.", "No, no tengo ___ hábito tóxico: ni fumo ni bebo.", "ningún", "Ante sustantivo masculino singular, «ninguno» se apocopa: «ningún hábito»."),
      mt(
        "Relaciona la pregunta con la sección del historial.",
        [
          ["¿Le han operado alguna vez?", "antecedentes quirúrgicos"],
          ["¿Fuma usted?", "hábitos tóxicos"],
          ["¿Algún familiar ha tenido cáncer?", "antecedentes familiares"],
        ],
        "Cada pregunta pide una casilla del historial: las operaciones son antecedentes quirúrgicos, el tabaco es un hábito tóxico y las enfermedades de los familiares son antecedentes familiares."
      ),
      toEs("I'm allergic to penicillin and I take medication for blood pressure.", "Soy alérgico a la penicilina y tomo medicación para la tensión.", "«Ser alérgico a» + sustancia; «la tensión» es la forma habitual de España para la presión arterial.", ["Soy alérgica a la penicilina y tomo medicación para la tensión.", "Soy alérgico a la penicilina y tomo medicación para la presión arterial.", "Soy alérgico a la penicilina y tomo pastillas para la tensión."]),
      wo("¿Desde cuándo tiene usted estas molestias?", "«¿Desde cuándo + presente?» pregunta por algo que empezó y continúa (en inglés, «have you had»); el médico trata al paciente de usted.", "How long have you had these complaints?"),
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
        "La idea: cada síntoma tiene dos nombres, y el registro lo elige el destinatario",
        [
          "La regla: el mismo síntoma tiene un nombre técnico y uno de la calle, y se elige según quién va a leer o escuchar. En el informe clínico, para otro profesional: cefalea, disnea, astenia, prurito, pirosis, epistaxis, febrícula, hipertensión. Con el paciente: dolor de cabeza, falta de aire (ahogo), cansancio, picor, ardor de estómago, sangrado de nariz, unas décimas, tensión alta. El informe tiene además su sintaxis: sujeto omitido y verbos como «refiere» (lo que el paciente cuenta) y «presenta» (lo que se observa).",
          "Por qué funciona: el término técnico es preciso y breve para el colega, y el coloquial es comprensible para el paciente. Por eso traducir es cambiar palabra y sintaxis a la vez («Me arde el estómago» → «Refiere pirosis»), pero sin cambiar el dato: la febrícula son unas décimas, no fiebre alta. Un buen comunicador sanitario traduce sin condescendencia.",
        ],
        [
          ["Presenta astenia y febrícula. → Está muy cansado y tiene unas décimas.", "He presents asthenia and low-grade fever."],
          ["Refiere pirosis tras las comidas. → Dice que le arde el estómago después de comer.", "She reports heartburn after meals."],
          ["Me pica mucho la piel. → Refiere prurito intenso.", "My skin itches a lot. → Reports intense pruritus. (paciente → informe: término y sintaxis)"],
        ],
        [
          mc(
            "«Epistaxis» es…",
            ["sangrado por la nariz", "dolor de oído", "pérdida de visión", "tos seca"],
            0,
            "La epistaxis es la hemorragia nasal. El dolor de oído es la otalgia, la pérdida de visión se llama ceguera o amaurosis y la tos seca es tos no productiva."
          ),
          mc(
            "Una paciente le dice al médico: «Me cuesta respirar cuando subo las escaleras». ¿Cómo lo anota en el informe?",
            ["Refiere disnea de esfuerzo.", "Presenta cefalea de esfuerzo.", "Dice que se ahoga en las escaleras.", "Refiere pirosis al subir escaleras."],
            0,
            "Para el informe se usa el término técnico y la sintaxis clínica: la dificultad para respirar es disnea, «al subir escaleras» es un esfuerzo, y lo que cuenta el paciente se introduce con «refiere». «Dice que se ahoga» es correcto pero coloquial, y cefalea y pirosis son otros síntomas."
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
        "Cada término técnico tiene su equivalente coloquial: cefalea es dolor de cabeza, disnea es falta de aire, prurito es picor y pirosis es ardor de estómago."
      ),
      fb("Traduce al registro técnico.", "Tiene unas décimas. → Presenta ___.", "febrícula", "«Febrícula» es el término técnico para la fiebre ligera («unas décimas»)."),
      fb("Traduce al registro técnico.", "Está siempre muy cansado. → Refiere ___.", "astenia", "«Astenia» es el término clínico para el cansancio o la debilidad generalizada."),
      { ...fb("Traduce al registro claro.", "Presenta hipertensión arterial. → Tiene la ___ alta.", "tensión", "En lenguaje claro, la hipertensión arterial es «tener la tensión alta» (en América, «la presión alta»)."), altAnswers: ["presión"] },
      mc(
        "En el informe médico, «refiere» significa…",
        ["el paciente dice / cuenta", "el médico deriva", "se repite", "se refiere a otro paciente"],
        0,
        "En un informe médico, «refiere» significa que el paciente dice o cuenta algo. No es que el médico lo derive a otro especialista, ni que algo se repita, ni que se hable de otro paciente."
      ),
      toEs("The patient reports shortness of breath on exertion.", "El paciente refiere disnea de esfuerzo.", "En registro clínico: «refiere» (el paciente dice) y «disnea» (dificultad para respirar).", ["El paciente refiere disnea al esfuerzo.", "La paciente refiere disnea de esfuerzo."]),
      wo("Refiere cefalea intensa desde hace dos días.", "Registro clínico: se omite el sujeto, «refiere» (el paciente cuenta) va primero, luego el término técnico («cefalea») y «desde hace» para la duración.", "Reports a severe headache for two days."),
    ]
  ),
  L(
    "medical-health-spanish-4",
    "c2r-mission-posology",
    "Misión real: explicar la posología",
    "Aprende a dar y entender instrucciones de posología con el imperativo de usted: dosis, frecuencia (cada ocho horas), relación con las comidas, duración y advertencias.",
    "7 min",
    [
      sec(
        "La idea: una pauta completa tiene cinco datos y se da en imperativo de usted",
        [
          "La regla: una instrucción de posología es segura solo si responde a cinco preguntas. ¿Cuánto? La dosis (un comprimido de 500 mg). ¿Cada cuánto? La frecuencia (cada ocho horas, dos veces al día). ¿Cuándo respecto a la comida? En ayunas, con las comidas o después de comer. ¿Durante cuánto tiempo? La duración (durante siete días, aunque se encuentre mejor). ¿Qué vigilar? Las advertencias (puede producir somnolencia; no combinar con alcohol). Las formas farmacéuticas (comprimido, cápsula, jarabe, sobre, gotas, pomada) deciden el verbo: se toma un comprimido, se aplica una pomada, se disuelve un sobre.",
          "Al paciente se le habla en imperativo de usted, que usa las formas del subjuntivo. En la orden afirmativa el pronombre va pegado al verbo (tómeselo, bébalo); en la negativa va delante (no lo combine). El prospecto escrito usa a menudo infinitivos (agitar antes de usar), pero cuando le hablas al paciente los conviertes en imperativos (agite el frasco). Y lo hipotético va con subjuntivo: aunque se encuentre mejor, mientras dure el tratamiento.",
        ],
        [
          ["Tómese un comprimido cada ocho horas durante siete días.", "Take one tablet every eight hours for seven days."],
          ["No lo combine con alcohol mientras dure el tratamiento.", "Don't combine it with alcohol while the treatment lasts. (negativa: pronombre delante)"],
          ["Aplíquese la crema y extiéndala bien sobre la piel.", "Apply the cream and spread it well over the skin. (afirmativa: pronombre pegado)"],
        ],
        [
          mc(
            "«En ayunas» significa…",
            ["sin haber comido nada antes", "después de cenar", "con mucha agua", "por la noche"],
            0,
            "«En ayunas» significa con el estómago vacío, sin haber comido nada antes. No significa después de cenar, con mucha agua ni por la noche."
          ),
          mc(
            "¿Qué advertencia está bien formulada para un paciente al que trata de usted?",
            ["No lo mezcle con alcohol.", "No mézclelo con alcohol.", "No lo mezcles con alcohol.", "Lo no mezcle con alcohol."],
            0,
            "En el imperativo negativo de usted el pronombre va delante del verbo: «no lo mezcle». «Mézclelo» solo vale en la orden afirmativa, «mezcles» es el trato de tú y el pronombre nunca va antes de «no»."
          ),
          mc(
            "Una receta dice: «Ibuprofeno 600 mg, un comprimido cada ocho horas, con las comidas». ¿Qué dato falta para que la pauta sea completa?",
            ["la duración del tratamiento", "la dosis", "la frecuencia", "la relación con las comidas"],
            0,
            "Están la dosis (un comprimido de 600 mg), la frecuencia (cada ocho horas) y la relación con las comidas (con las comidas). Falta cuánto tiempo hay que tomarlo: «durante cinco días», por ejemplo."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "Tómese una cápsula ___ ocho horas.", "cada", "«Cada» + intervalo expresa la frecuencia: «cada ocho horas»."),
      fb("Completa.", "No interrumpa el tratamiento aunque se ___ mejor. (encontrar, usted)", "encuentre", "«Aunque» + subjuntivo presenta la mejoría como una hipótesis: «aunque se encuentre mejor»."),
      fb("Completa.", "Este medicamento puede producir ___: no conduzca. (sueño, término técnico)", "somnolencia", "«Somnolencia» es el término técnico para la sensación de sueño."),
      mc(
        "¿Qué instrucción es completa?",
        ["Un sobre disuelto en agua cada doce horas, durante cinco días, después de las comidas.", "Tómeselo cuando quiera.", "Un sobre, ya sabe.", "Tómese muchos sobres."],
        0,
        "Una instrucción completa indica dosis, frecuencia, duración y relación con las comidas. «Cuando quiera», «ya sabe» y «muchos sobres» no dan una pauta segura."
      ),
      ms(
        "¿Qué son formas farmacéuticas?",
        ["comprimido", "jarabe", "pomada", "posología"],
        [0, 1, 2],
        "El comprimido, el jarabe y la pomada son formas farmacéuticas (cómo se presenta el medicamento). La posología es la pauta de dosificación, no una forma."
      ),
      toEs("Take this on an empty stomach, half an hour before breakfast.", "Tómeselo en ayunas, media hora antes del desayuno.", "Imperativo de usted con pronombres unidos: «tómeselo»; «en ayunas» = con el estómago vacío.", ["Tómelo en ayunas, media hora antes del desayuno.", "Tómeselo en ayunas, media hora antes de desayunar."]),
      wo("Evite el alcohol mientras dure el tratamiento.", "«Mientras» referido a un periodo futuro va con subjuntivo: «mientras dure el tratamiento».", "Avoid alcohol for as long as the treatment lasts."),
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
        "La idea: el informe de alta tiene un orden fijo y un estilo nominal",
        [
          "La regla: todo informe de alta sigue el mismo recorrido, y si conoces el orden sabes dónde buscar cada dato. Motivo de consulta (quién acude y por qué) → antecedentes → pruebas realizadas → diagnóstico → tratamiento y evolución → tratamiento al alta → recomendaciones y seguimiento. Así, para saber qué debe hacer el paciente en casa no lees el diagnóstico, sino el final.",
          "El estilo también es fijo, porque el informe busca brevedad: omite artículos y verbos («Evolución favorable»), usa la pasiva refleja en presente («se realiza analítica», «se inicia tratamiento»), mide la duración con «de X de evolución» y redacta las recomendaciones con sustantivos («abandono del tabaco», no «deje de fumar»). Para leerlo, devuelve mentalmente los verbos: «abandono del tabaco» = debe dejar de fumar.",
        ],
        [
          ["Mujer de 34 años que acude por cefalea de cinco días de evolución.", "A 34-year-old woman presenting with a headache of five days' duration. (motivo de consulta)"],
          ["Se inicia antibioterapia, con buena respuesta.", "Antibiotic treatment is started, with a good response. (pasiva refleja, sin artículo)"],
        ],
        [
          mc(
            "En un informe leemos: «Recomendaciones: reducción del consumo de sal y control de tensión en su centro de salud». ¿Qué debe hacer el paciente?",
            ["tomar menos sal y medirse la tensión en su centro de salud", "dejar la sal por completo y no volver al médico", "operarse en el centro de salud", "subir el consumo de sal hasta el próximo control"],
            0,
            "Las recomendaciones están en estilo nominal: «reducción del consumo de sal» equivale a «reduzca la sal», y «control de tensión en su centro de salud» indica dónde se hará el seguimiento. Reducir no es eliminar, y nada habla de operar."
          ),
        ]
      ),
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
            "El informe da como diagnóstico un infarto agudo de miocardio. La hipertensión, la neumonía o la ansiedad no aparecen como diagnóstico."
          ),
          mc(
            "¿En qué parte del informe aparece que el paciente fuma?",
            ["en los antecedentes", "en el diagnóstico", "en el tratamiento al alta", "en la evolución"],
            0,
            "Los hábitos y enfermedades previas del paciente van en los antecedentes: «hipertensión y tabaquismo activo». Por eso el abandono del tabaco reaparece al final, en las recomendaciones."
          ),
        ]
      ),
    ],
    [
      mc(
        "¿Qué factor de riesgo debe eliminar el paciente?",
        ["el tabaco", "el ejercicio", "el agua", "el sueño"],
        0,
        "El informe señala tabaquismo activo, así que debe dejar el tabaco. El ejercicio, el agua y el sueño son hábitos saludables, no factores de riesgo."
      ),
      mc(
        "«Evolución favorable» significa que…",
        ["el paciente ha mejorado", "el paciente ha empeorado", "hay que operar otra vez", "no hay cambios"],
        0,
        "«Evolución favorable» significa que el paciente ha mejorado. No indica empeoramiento, ni una nueva operación, ni ausencia de cambios."
      ),
      ms(
        "¿Qué pruebas se hicieron?",
        ["electrocardiograma", "analítica", "cateterismo", "resonancia magnética"],
        [0, 1, 2],
        "Se hicieron un electrocardiograma, una analítica y un cateterismo. El informe no menciona ninguna resonancia magnética."
      ),
      fb("Completa.", "El paciente ___ a Urgencias por dolor torácico. (llegar, término del informe, presente)", "acude", "En los informes médicos, «acudir» es el verbo habitual para ir a un servicio: «acude a Urgencias»."),
      { ...fb("Completa.", "Se ___ cateterismo con implantación de stent. (sinónimo técnico de «realizar»)", "practica", "En los informes médicos, las pruebas «se practican» (= se realizan)."), altAnswers: ["efectúa"] },
      mc(
        "¿Quién hará el seguimiento?",
        ["Cardiología, en un mes", "Urgencias, mañana", "el médico de familia, en un año", "nadie"],
        0,
        "El seguimiento lo hará Cardiología dentro de un mes. No lo hará Urgencias al día siguiente, ni el médico de familia en un año, y sí hay seguimiento."
      ),
      wo("Se recomienda control por su médico de familia en quince días.", "Fórmula típica de las recomendaciones de un informe: «se recomienda» (se impersonal) + «control por» + profesional + plazo («en quince días»).", "Follow-up with the family doctor in two weeks is recommended."),
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
        "Recuerda la regla: atenuar sin mentir",
        [
          "Recuerda la regla: una mala noticia se da con tacto, pero sin ocultar el dato, y cada paso tiene su recurso gramatical. Preparar con el condicional de cortesía: «Me gustaría hablar con usted de los resultados». Anunciar con «me temo que» o «lamento decirle que», que van en indicativo porque el hecho es cierto. Atenuar negando la expectativa en vez de afirmar lo malo: «no son todo lo buenos que esperábamos». Elegir el eufemismo neutro: «ha fallecido», «pronóstico reservado».",
          "Acompañar es cosa del subjuntivo, que aquí no indica duda sino valoración, deseo o finalidad: «Es normal que se sienta así», «¿Quiere que se lo explique?», «Haremos todo lo posible para que esté cómodo». Y explicar sin tecnicismos, abriendo espacio a preguntas.",
        ],
        [
          ["Es normal que tenga miedo.", "It's normal for you to be afraid."],
          ["Los resultados no son todo lo buenos que esperábamos.", "The results are not as good as we had hoped."],
          ["Lamento decirle que la operación no ha sido posible.", "I regret to tell you that the operation was not possible. (anuncio: indicativo)"],
        ],
        [
          mc(
            "¿Qué frase es más compasiva?",
            ["Me temo que los resultados no son los que esperábamos.", "Tiene usted cáncer, siguiente.", "Esto pinta fatal.", "No hay nada que hacer."],
            0,
            "«Me temo que…» atenúa la mala noticia con empatía. «Tiene usted cáncer, siguiente» es brutal, «Esto pinta fatal» es coloquial y «No hay nada que hacer» quita toda esperanza."
          ),
          mc(
            "«Lamento decirle que la biopsia ___ un tumor maligno.»",
            ["ha confirmado", "haya confirmado", "confirme", "confirmara"],
            0,
            "«Lamento decirle que» introduce un hecho que el médico comunica como cierto, así que va en indicativo: «ha confirmado». El subjuntivo aparece tras valoraciones y deseos («es normal que», «quiero que»), no tras el verbo que comunica la noticia."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "Es comprensible que ___ preocupado. (estar, usted)", "esté", "Una valoración («es comprensible que») lleva subjuntivo: «que esté»."),
      fb("Completa.", "Haremos todo lo posible para que no ___ dolor. (tener, usted)", "tenga", "«Para que» con sujeto distinto exige subjuntivo: «para que no tenga»."),
      fb("Completa.", "Me ___ que tengo que darle una mala noticia. (temer)", "temo", "«Me temo que» anuncia con suavidad una mala noticia; no expresa miedo real."),
      mc(
        "Forma atenuada con la que el médico comunica un estado muy grave y de evolución incierta:",
        ["Su pronóstico es reservado.", "Se va a morir pronto.", "Ya no hay remedio, lo siento.", "Esto se acaba."],
        0,
        "«Pronóstico reservado» es el eufemismo sanitario para un estado muy grave. «Se va a morir pronto» es la versión directa, y «Ya no hay remedio» o «Esto se acaba» son igual de crudas."
      ),
      mc(
        "«¿Quiere que se lo ___ a su familia?»",
        ["expliquemos", "explicamos", "explicaremos", "explicar"],
        0,
        "«Querer que» con sujetos distintos exige subjuntivo: «que se lo expliquemos». «Explicamos» y «explicaremos» son indicativo, y el infinitivo no va tras «que»."
      ),
      toEs("It's normal for you to feel overwhelmed.", "Es normal que se sienta abrumado.", "«Es normal que» valora un hecho y exige subjuntivo: «que se sienta».", ["Es normal que se sienta abrumada.", "Es normal que te sientas abrumado."]),
      wo("Vamos a hacer todo lo posible para que se encuentre bien.", "«Para que» con sujeto distinto (nosotros hacemos / usted se encuentra) exige subjuntivo: «se encuentre».", "We're going to do everything we can so that you feel well."),
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
        "La idea: la imagen del modismo sigue una lógica",
        [
          "La regla: los modismos se agrupan por familias de imágenes, y dentro de cada familia la imagen tiene una lógica que te permite adivinar el sentido. Lo que no vale nada (un pimiento, un comino) mide lo poco que algo importa: importar un pimiento. Una parte del cuerpo entregada como pago mide lo caro que es algo: costar un riñón, un ojo de la cara. Lo que ya está hecho o comido no cuesta esfuerzo: ser pan comido. Y el animal que se comporta de forma imprevisible sirve para la locura: estar como una cabra.",
          "Otros ejemplos de la red. Cuerpo: tomar el pelo (burlarse), no tener pelos en la lengua (hablar sin rodeos), echar una mano (ayudar). Comida: dar calabazas (rechazar a un pretendiente). Animales: buscarle tres pies al gato (complicar las cosas). Ojo: las palabras de cada modismo son fijas, y muchos son coloquiales y propios de España.",
        ],
        [
          ["Ese examen fue pan comido.", "That exam was a piece of cake."],
          ["No tiene pelos en la lengua.", "She doesn't mince words."],
          ["Me importa un comino lo que digan.", "I couldn't care less what they say. (lo que no vale nada → no importar)"],
        ],
        [
          mc(
            "«Me estás tomando el pelo» significa…",
            ["te estás burlando de mí", "me estás cortando el pelo", "me estás ayudando", "me estás engañando con dinero"],
            0,
            "«Tomar el pelo» significa burlarse de alguien. No tiene nada que ver con cortar el pelo, no es ayudar y no implica un engaño con dinero."
          ),
          mc(
            "Nunca has oído «me importa un rábano». Por la lógica de su imagen, ¿qué significa?",
            ["no me importa nada", "me encanta", "me preocupa mucho", "me cuesta muy caro"],
            0,
            "El rábano, como el pimiento o el comino, es algo de muy poco valor: medir la importancia de algo con él significa que no importa nada. Es la misma familia que «importar un pimiento»."
          ),
          mc(
            "¿Qué otro modismo significa, como «ser pan comido», que algo es muy fácil?",
            ["ser coser y cantar", "importar un pimiento", "dar calabazas", "estar como una cabra"],
            0,
            "«Ser coser y cantar» presenta la tarea como algo que se hace sin esfuerzo, casi jugando: significa ser muy fácil. «Importar un pimiento» es no importar nada y «dar calabazas», rechazar."
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
        "Cada imagen tiene su lógica: las calabazas se dan para rechazar a un pretendiente, la cabra es el animal imprevisible (estar loco), la mano se echa para ayudar y el pimiento, de poco valor, mide lo que no importa nada."
      ),
      fb("Completa.", "No le busques tres pies al ___: es más sencillo de lo que parece.", "gato", "«Buscarle tres pies al gato» es complicar innecesariamente algo sencillo."),
      fb("Completa.", "Este bolso me ha costado un ___.", "riñón", "Costar un riñón = ser carísimo."),
      fb("Completa.", "Para ella, aprobar fue pan ___.", "comido", "«Ser pan comido» significa ser muy fácil."),
      mc(
        "¿Qué modismo describe a alguien muy directo?",
        ["no tener pelos en la lengua", "tomar el pelo", "estar como una cabra", "dar calabazas"],
        0,
        "«No tener pelos en la lengua» es hablar sin rodeos. «Tomar el pelo» es burlarse, «estar como una cabra» es estar loco y «dar calabazas» es rechazar a un pretendiente (o suspender)."
      ),
      toEs("Can you give me a hand with the boxes?", "¿Me echas una mano con las cajas?", "«Echar una mano» significa ayudar; en pregunta informal: «¿me echas una mano?».", ["¿Me puedes echar una mano con las cajas?", "¿Me echas una mano con estas cajas?"]),
      wo("Le dio calabazas delante de todos sus amigos.", "«Dar calabazas a alguien» = rechazarlo como pretendiente; el pronombre «le» señala a quien recibe el rechazo.", "She turned him down in front of all his friends."),
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
        "La idea: cada modismo tiene su escalón de registro",
        [
          "La regla: antes de usar un modismo, pregúntate en qué escalón de registro está, porque eso decide dónde cabe. Coloquiales neutros: valen casi siempre entre conocidos, incluso con un compañero de trabajo (echar una mano, ser pan comido). Coloquiales marcados: solo con confianza, porque suenan bruscos o vulgares fuera de ella (mandar a freír espárragos, ponerse las botas). Aptos para el registro culto: funcionan en un informe, una reunión o la prensa (poner los puntos sobre las íes, llevar la voz cantante, a grandes rasgos, poner en tela de juicio).",
          "Por qué importa: un modismo en el escalón equivocado no es un error de significado, sino de pertinencia, y dice mucho de quien lo usa. Y la forma es fija en todos los escalones: se pone en tela de juicio, se lleva la voz cantante, se ponen los puntos sobre las íes.",
        ],
        [
          ["Conviene poner los puntos sobre las íes antes de firmar.", "We should make everything perfectly clear before signing."],
          ["Su honestidad nunca se ha puesto en tela de juicio.", "Her honesty has never been called into question."],
        ],
        [
          mc(
            "¿Qué modismo encaja en un informe formal?",
            ["poner en tela de juicio", "mandar a freír espárragos", "ponerse las botas", "estar como una cabra"],
            0,
            "«Poner en tela de juicio» (cuestionar) es un modismo culto, apto para un informe. «Mandar a freír espárragos», «ponerse las botas» y «estar como una cabra» son coloquiales."
          ),
          mc(
            "Nota de prensa del ayuntamiento: «El pleno ___ ayer al nuevo plan de movilidad». ¿Qué modismo encaja en ese registro?",
            ["dio luz verde", "se puso las botas con", "mandó a freír espárragos", "le tomó el pelo"],
            0,
            "«Dar luz verde» (autorizar) es un modismo apto para la prensa y el registro formal. «Ponerse las botas» y «mandar a freír espárragos» son coloquiales marcados, y «tomar el pelo» es coloquial y significa burlarse."
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
        "«Mandar a freír espárragos» es coloquial y algo brusco: inadecuado en un correo a un cliente. Con tu hermana, con amigos o en una charla informal es natural."
      ),
      ms(
        "¿Qué modismos son aptos para un registro formal?",
        ["poner los puntos sobre las íes", "en tela de juicio", "a grandes rasgos", "ponerse las botas"],
        [0, 1, 2],
        "«Poner los puntos sobre las íes», «en tela de juicio» y «a grandes rasgos» son aptos para el registro formal. «Ponerse las botas» (darse un atracón o aprovecharse) es coloquial."
      ),
      toEs("His version was called into question.", "Su versión fue puesta en tela de juicio.", "«Poner en tela de juicio» traduce «call into question»; en pasiva, «fue puesta en tela de juicio».", ["Su versión se puso en tela de juicio.", "Pusieron en tela de juicio su versión."]),
      wo("En estas reuniones quien lleva la voz cantante es la directora financiera.", "«Llevar la voz cantante» (dirigir, tener la iniciativa) es apto para el registro culto; la relativa «quien lleva la voz cantante» funciona como sujeto de «es».", "In these meetings the one who calls the shots is the finance director."),
    ]
  ),
  L(
    "everyday-idioms-2",
    "c2r-idioms-error-hunt-mixed",
    "Caza de errores: modismos cruzados y calcos",
    "«Llover gatos y perros», «matar dos pájaros con una piedra», «costar un brazo y una pierna»: repara las mezclas y calcos.",
    "7 min",
    [
      sec(
        "La idea: calco, cruce o coincidencia legítima",
        [
          "La regla: cuando un modismo te suena raro, pregúntate cuál de estos tres casos es. Calco: la imagen inglesa traducida palabra por palabra, que en español no existe (✗ llover gatos y perros → ✓ llover a cántaros). Cruce: dos modismos españoles mezclados en uno (✗ coger el toro por las astas y los cuernos → ✓ coger el toro por los cuernos, o por las astas). Coincidencia legítima: la imagen es la misma en las dos lenguas y es correcta (romper el hielo, tirar la toalla).",
          "Por qué importa: no todo parecido con el inglés es un error, así que no basta con desconfiar de lo que se parece. Hay que comprobar si el bloque existe tal cual en español; y si existe, no se toca ni una pieza (✗ matar dos pájaros con una piedra → ✓ de un tiro).",
        ],
        [
          ["Anoche llovió a cántaros en toda la costa.", "Last night it poured all along the coast. (calco corregido)"],
          ["Mataremos dos pájaros de un tiro.", "We'll kill two birds with one stone."],
        ],
        [
          mc(
            "Forma correcta:",
            ["matar dos pájaros de un tiro", "matar dos pájaros con una piedra", "matar dos pájaros en un tiro", "matar pájaros de dos tiros"],
            0,
            "La forma fija es «matar dos pájaros de un tiro». «Con una piedra» es un calco del inglés, «en un tiro» cambia la preposición y «pájaros de dos tiros» desordena la expresión."
          ),
          mc(
            "Un compañero escribe: «La dirección ha dado luz verde al proyecto». ¿Hay que corregirlo?",
            ["No: «dar luz verde» existe en español y es correcto.", "Sí: es un calco y hay que decir «dar luz roja».", "Sí: es un cruce y hay que decir «dar el visto verde».", "Sí: en español solo puede decirse «autorizar»."],
            0,
            "Es una coincidencia legítima, como «romper el hielo»: «dar luz verde» (autorizar) existe en español y se usa incluso en la prensa. Parecerse al inglés no lo convierte en calco; «el visto verde» sí sería un cruce con «dar el visto bueno»."
          ),
        ]
      ),
    ],
    [
      fb("Corrige.", "Está lloviendo a ___. (el alumno puso: gatos y perros)", "cántaros", "En español se dice «llover a cántaros»; «gatos y perros» es un calco del inglés."),
      fb("Corrige.", "Hay que coger el toro por los ___. (el alumno puso: pies)", "cuernos", "La forma fija es «coger (o agarrar) el toro por los cuernos», o bien «por las astas» (con artículo femenino); «por los pies» no existe."),
      fb("Corrige.", "Esto no es mi taza de té → Esto no es lo ___. (calco de «not my cup of tea»)", "mío", "«No es lo mío» es el equivalente español de «not my cup of tea»."),
      mc(
        "«Estar en la luna» significa…",
        ["estar distraído", "estar muy feliz", "ser astronauta", "estar lejos"],
        0,
        "«Estar en la luna» significa estar distraído o despistado. No expresa felicidad, no tiene que ver con ser astronauta ni con estar lejos."
      ),
      ms(
        "¿Cuáles son calcos incorrectos en español?",
        ["llover gatos y perros", "es un pedazo de pastel (= muy fácil)", "romper el hielo", "costar un brazo y una pierna"],
        [0, 1, 3],
        "«Llover gatos y perros», «es un pedazo de pastel» y «costar un brazo y una pierna» son calcos del inglés (aunque «costar un brazo» se oye en algunos países, lo habitual es «costar un ojo de la cara»); en español: «llover a cántaros», «ser pan comido» y «costar un ojo de la cara». «Romper el hielo» sí existe en español."
      ),
      toEs("That's not really my thing.", "Eso no es lo mío.", "«No ser lo mío» expresa que algo no va con uno; traduce «not my thing».", ["Eso no es muy lo mío.", "No es lo mío."]),
      wo("Aprovechando el viaje, mataremos dos pájaros de un tiro.", "En español es «de un tiro», no «con una piedra» (calco del inglés); el gerundio «aprovechando el viaje» va primero como circunstancia.", "Taking advantage of the trip, we'll kill two birds with one stone."),
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
        "La idea: en la charla, cada modismo cumple una función",
        [
          "La regla: en una conversación real los modismos no se eligen por su significado suelto, sino por lo que hacen en tu turno. Para disculparte de un olvido: se me fue el santo al cielo. Para quejarte de alguien: me tienes hasta la coronilla (tú me tienes harto); si hablas solo de ti, estoy hasta la coronilla. Para quitar hierro: no es para tanto. Para avisar de una regañina: te leo la cartilla. Así, ante cada frase del otro, pregúntate qué necesitas hacer: disculparte, quejarte, calmar o advertir.",
          "Escucha la conversación: «—Oye, ¿has pagado la luz? —Uy, se me fue el santo al cielo. —Siempre igual, ¡me tienes hasta la coronilla! —Perdona, mañana sin falta. No te pongas así, que no es para tanto. —Vale, pero a la próxima te leo la cartilla.»",
        ],
        [
          ["A mi madre se le fue el santo al cielo y no vino a recogerme.", "It completely slipped my mother's mind and she didn't come to pick me up. (olvido: el pronombre marca a quién se le olvida)"],
          ["Me tienes hasta la coronilla.", "I'm fed up with you."],
        ],
        [
          mc(
            "«Leerle la cartilla a alguien» significa…",
            ["regañarle seriamente", "enseñarle a leer", "leerle un cuento", "darle un regalo"],
            0,
            "«Leerle la cartilla a alguien» es regañarle seriamente. No tiene que ver con enseñar a leer, con leer un cuento ni con hacer un regalo."
          ),
          mc(
            "Tu compañera de piso te dice: «¡Otra vez has dejado los platos sin fregar!». Reconoces que se te olvidó. ¿Qué respondes?",
            ["Tienes razón, perdona: se me fue el santo al cielo.", "Pues me tienes hasta la coronilla.", "Como sigas así, te leo la cartilla.", "Estoy como pez en el agua."],
            0,
            "Tu turno pide una disculpa por un olvido, y esa es la función de «se me fue el santo al cielo». «Me tienes hasta la coronilla» es una queja y «te leo la cartilla» una advertencia, las dos impropias de quien tiene la culpa; «estar como pez en el agua» es sentirse cómodo."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "Perdona, se me fue el santo al ___.", "cielo", "Irse el santo al cielo = olvidar."),
      fb("Completa.", "Estoy hasta la ___ de tanto ruido.", "coronilla", "«Estar hasta la coronilla» significa estar harto."),
      mc(
        "«—Te has comido mi yogur. —Bueno, ___.» (quitar importancia)",
        ["no es para tanto", "me tienes hasta la coronilla", "te leo la cartilla", "se me fue el santo al cielo"],
        0,
        "«No es para tanto» quita importancia. «Me tienes hasta la coronilla» expresa hartazgo, «te leo la cartilla» es regañar y «se me fue el santo al cielo» es olvidarse de algo."
      ),
      mc(
        "«Me quedé de piedra» expresa…",
        ["sorpresa enorme", "cansancio", "frío", "aburrimiento"],
        0,
        "«Quedarse de piedra» expresa una sorpresa enorme que deja paralizado. No se refiere al cansancio, al frío ni al aburrimiento."
      ),
      mt(
        "Relaciona el modismo con su sentido.",
        [
          ["meter la pata", "equivocarse"],
          ["dar la lata (España, México)", "molestar"],
          ["hacer la vista gorda", "fingir no ver"],
        ],
        "Cada modismo tiene su sentido fijo: meter la pata es equivocarse de forma embarazosa, dar la lata es molestar con insistencia y hacer la vista gorda es fingir que no se ve algo."
      ),
      toEs("Perdona, me olvidé por completo de pagar la luz.", "Perdona, se me fue el santo al cielo y no pagué la luz.", "Para disculparse por un olvido total, el modismo es «írsele el santo al cielo a alguien»: el pronombre «me» marca a quién se le olvida.", ["Perdona, se me fue el santo al cielo y no he pagado la luz.", "Perdona, se me fue el santo al cielo con lo de la luz.", "Perdona, se me fue el santo al cielo y no pagué el recibo de la luz.", "Perdona, se me fue el santo al cielo con la luz."], "Reescribe la disculpa con el modismo del olvido."),
      wo("El jefe hizo la vista gorda con el retraso de ayer.", "«Hacer la vista gorda» (fingir no ver algo indebido) es fijo: solo se conjuga el verbo («hizo»), y lo tolerado va con «con» o «ante».", "The boss turned a blind eye to yesterday's delay."),
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
        [
          "Recuerda la regla: el refrán típico tiene dos mitades que se responden por rima (ladrador / mordedor), por paralelismo (quien… / quien…) o por oposición (mucho / poco). Por eso la primera mitad «pide» la segunda: si conoces el molde, puedes reconstruir el final aunque no lo hayas oído nunca.",
          "Ejemplos del molde: «A quien madruga, / Dios le ayuda». «Perro ladrador, / poco mordedor». «Dime con quién andas / y te diré quién eres». En la conversación, a menudo basta con decir la primera mitad («Ya sabes: perro ladrador…»), y el oyente completa el resto. El refrán no se adapta a quien habla: si hablas de usted, cambia tu frase, no el refrán.",
        ],
        [
          ["Más vale pájaro en mano que ciento volando.", "A bird in the hand is worth two in the bush."],
          ["No por mucho madrugar amanece más temprano.", "Getting up early won't make the sun rise sooner."],
        ],
        [
          mc(
            "Aplica el molde de dos mitades paralelas: «Ojo por ojo…»",
            ["…diente por diente.", "…mano a mano.", "…cara a cara.", "…poco a poco."],
            0,
            "«Ojo por ojo, diente por diente» repite exactamente el molde de la primera mitad (sustantivo + por + el mismo sustantivo) con otra parte del cuerpo: es la ley del talión, devolver el daño en la misma medida. «Mano a mano» y «cara a cara» existen, pero son locuciones con «a», no la segunda mitad de este refrán."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "Dime con quién andas y te diré quién ___.", "eres", "«Dime con quién andas y te diré quién eres»: las compañías reflejan cómo es uno."),
      fb("Completa.", "Camarón que se duerme, se lo lleva la ___.", "corriente", "«Camarón que se duerme, se lo lleva la corriente»: quien se descuida pierde oportunidades."),
      fb("Completa.", "Al mal tiempo, buena ___.", "cara", "«Al mal tiempo, buena cara» aconseja afrontar las dificultades con optimismo."),
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
        "El refrán critica que falte algo justo donde debería abundar (el herrero no tiene cuchillo de hierro). No critica a los herreros, ni a la madera, ni la pobreza en general."
      ),
      toEs("Birds of a feather flock together.", "Dios los cría y ellos se juntan.", "«Dios los cría y ellos se juntan» es el refrán equivalente a «Birds of a feather flock together».", ["Cada oveja con su pareja."]),
      wo("Quien siembra vientos recoge tempestades.", "Refrán bimembre (siembra/recoge, vientos/tempestades): quien provoca conflictos acaba sufriendo consecuencias mucho mayores.", "Sow the wind and reap the whirlwind."),
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
        [
          "Recuerda la regla: el refrán no es una verdad universal, sino un argumento para un caso. Por eso existen pares opuestos, y eliges uno u otro según lo que quieras conseguir: animar o frenar, acompañar o apartarse, darse prisa o tener paciencia.",
          "Pares opuestos: esfuerzo temprano (A quien madruga, Dios le ayuda) / no forzar (No por mucho madrugar amanece más temprano). Precaución (Más vale prevenir que curar) / audacia (Quien no se arriesga no cruza el río). Soledad (Más vale solo que mal acompañado) / compañía (Dos cabezas piensan mejor que una). Ante un refrán nuevo, pregúntate: ¿empuja a actuar o a contenerse?",
        ],
        [
          ["Quien no se arriesga no cruza el río.", "Nothing ventured, nothing gained."],
          ["Más vale prevenir que curar.", "Better safe than sorry."],
        ],
        [
          mc(
            "Un amigo duda si montar su empresa. Para animarlo:",
            ["Quien no se arriesga no cruza el río.", "Más vale prevenir que curar.", "Más vale pájaro en mano que ciento volando.", "Zapatero, a tus zapatos."],
            0,
            "Para animar a arriesgarse sirve «Quien no se arriesga no cruza el río». «Más vale prevenir…» y «Más vale pájaro en mano…» aconsejan prudencia, y «Zapatero, a tus zapatos» pide no salirse de lo propio."
          ),
        ]
      ),
    ],
    [
      mc(
        "Tu hermana quiere dejar un trabajo estable por una promesa incierta. Para frenarla:",
        ["Más vale pájaro en mano que ciento volando.", "Quien no se arriesga no cruza el río.", "A quien madruga, Dios le ayuda.", "Dos cabezas piensan mejor que una."],
        0,
        "Para frenar a alguien se usa un refrán de prudencia: «Más vale pájaro en mano que ciento volando». «Quien no se arriesga…» la animaría a lanzarse, «A quien madruga…» habla de diligencia y «Dos cabezas…» de colaboración."
      ),
      mc(
        "Alguien acaba de romper una relación tóxica:",
        ["Más vale solo que mal acompañado.", "Dos cabezas piensan mejor que una.", "El que la sigue la consigue.", "Perro ladrador, poco mordedor."],
        0,
        "«Más vale solo que mal acompañado» justifica la ruptura. «Dos cabezas piensan mejor que una» elogia la colaboración, «El que la sigue la consigue» habla de perseverancia y «Perro ladrador…» de amenazas vacías."
      ),
      fb("Completa el refrán de la prudencia.", "Revisa los frenos antes del viaje: más vale ___ que curar.", "prevenir", "«Más vale prevenir que curar» aconseja anticiparse a los problemas: es el refrán que eliges para frenar a alguien imprudente, frente a «quien no se arriesga no cruza el río»."),
      fb("Completa el refrán de la colaboración.", "Pidamos opinión al equipo antes de decidir: dos cabezas piensan mejor que ___.", "una", "«Dos cabezas piensan mejor que una» elogia la colaboración; «una» concuerda con «cabeza», sustantivo femenino sobrentendido. Su opuesto es «más vale solo que mal acompañado»."),
      mt(
        "Relaciona cada refrán con su opuesto.",
        [
          ["A quien madruga, Dios le ayuda.", "No por mucho madrugar amanece más temprano."],
          ["Más vale solo que mal acompañado.", "Dos cabezas piensan mejor que una."],
          ["Más vale prevenir que curar.", "Quien no se arriesga no cruza el río."],
        ],
        "Refranes contradictorios."
      ),
      toEs("Me ofrecen un puesto en otra ciudad. ¿Me voy? Quien no se arriesga no cruza el río.", "Me ofrecen un puesto en otra ciudad. ¿Me voy? Más vale pájaro en mano que ciento volando.", "Para cambiar el sentido del consejo hay que cambiar de refrán: «quien no se arriesga no cruza el río» empuja a irse; «más vale pájaro en mano que ciento volando» aconseja quedarse con lo seguro. La pregunta libre no cambia.", ["Me ofrecen un puesto en otra ciudad. ¿Me voy? Más vale prevenir que curar."], "Cambia el refrán por uno que aconseje lo contrario: quedarse."),
      wo("Tranquilo, que no por mucho madrugar amanece más temprano", "«No por + infinitivo» niega que esa causa produzca el efecto: forzar las cosas no las adelanta. Es el contrapunto de «A quien madruga, Dios le ayuda», y aquí sirve para calmar a alguien impaciente.", "Relax, getting up early won't make the sun rise sooner"),
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
        [
          "Recuerda la regla: un refrán se cita, no se afirma. Por eso suele llevar un introductor que cede la palabra a la voz popular (como dice el refrán, ya lo dice el refrán, ya sabes lo que dicen, como decía mi abuela). El imperfecto «decía» presenta la cita como costumbre de esa persona; «dicen» es impersonal (la gente).",
          "Truncamiento: basta con la primera mitad («Bueno, a caballo regalado…») porque el oyente completa el molde. Uso irónico: «Dime con quién andas…» dicho con retintín. Lo que nunca cambia es el refrán; lo que eliges es el introductor y cuánto del refrán dices.",
        ],
        [
          ["—He conseguido entradas porque fui el primero en la cola. —Bueno, a quien madruga…", "—I got tickets because I was first in line. —Well, the early bird…"],
          ["Ya lo dice el refrán: más vale tarde que nunca.", "As the saying goes: better late than never."],
        ],
        [
          mc(
            "¿Qué inserción suena más natural en una conversación?",
            ["Ya sabes lo que dicen: ojos que no ven…", "Procedo a citar el siguiente refrán tradicional:", "Refrán número tres:", "Según el diccionario de refranes…"],
            0,
            "En la conversación, el refrán se introduce con naturalidad («Ya sabes lo que dicen») y a menudo se deja a medias. «Procedo a citar…», «Refrán número tres» y «Según el diccionario…» suenan artificiales o académicos."
          ),
        ]
      ),
    ],
    [
      fb("Completa el introductor.", "Como ___ el refrán, no hay mal que por bien no venga.", "dice", "«Como dice el refrán» es el introductor habitual para citar un refrán."),
      fb("Completa el refrán.", "Cuando el río suena, agua ___.", "lleva", "Si se rumorea algo, algo de verdad habrá."),
      mc(
        "«—Mi vecino amenaza con demandarme cada semana. —Tranquilo: ___»",
        ["perro ladrador…", "a quien madruga…", "más vale prevenir…", "en casa de herrero…"],
        0,
        "«Perro ladrador, poco mordedor»: quien amenaza mucho rara vez actúa. «A quien madruga…» habla de diligencia, «Más vale prevenir…» de anticiparse y «En casa de herrero…» de lo que falta donde debería sobrar."
      ),
      mc(
        "«—Perdí el tren y conocí a mi pareja en la estación. —¡___!»",
        ["No hay mal que por bien no venga", "Más vale prevenir que curar", "Perro ladrador, poco mordedor", "Zapatero, a tus zapatos"],
        0,
        "«No hay mal que por bien no venga»: algo malo (perder el tren) trajo algo bueno. «Más vale prevenir…» aconseja cautela, «Perro ladrador…» habla de amenazas vacías y «Zapatero, a tus zapatos» pide no meterse en lo ajeno."
      ),
      mc(
        "¿Por qué los hablantes a menudo dicen solo la mitad del refrán?",
        ["Porque el oyente la completa mentalmente.", "Porque la segunda parte es vulgar.", "Porque no la saben.", "Porque es obligatorio."],
        0,
        "Se dice solo la mitad porque el oyente la completa mentalmente: es conocimiento compartido. No es que la segunda parte sea vulgar, ni que no la sepan, ni es obligatorio."
      ),
      toEs("Actions speak louder than words.", "Obras son amores, que no buenas razones.", "«Obras son amores, que no buenas razones» es el refrán equivalente a «Actions speak louder than words».", ["Obras son amores y no buenas razones."]),
      wo("Ya lo decía mi abuela: el que la sigue la consigue.", "«Ya lo decía mi abuela:» introduce el refrán con naturalidad; «el que la sigue la consigue» significa que perseverar da resultado.", "As my grandmother used to say: if at first you don't succeed, try again."),
    ]
  ),
  L(
    "proverbs-sayings-3",
    "c2r-proverbs-mission-advice",
    "Misión real: aconsejar con refranes",
    "Elige el refrán adecuado para cada situación (la pintora entrometida, el procrastinador, el regalo feo, las malas compañías) y úsalos para aconsejar con argumentos.",
    "7 min",
    [
      sec(
        "Casos",
        [
          "Recuerda la regla: para aconsejar con un refrán, primero identificas el problema (¿se entromete?, ¿pospone?, ¿critica un regalo?, ¿elige mal sus compañías?) y después eliges el refrán que empuja en la dirección que quieres. El consejo se construye así: vocativo + tu observación + refrán, que cierra el argumento.",
          "Marta quiere opinar sobre fontanería aunque es pintora (Zapatero, a tus zapatos). Luis siempre deja todo para el final (No dejes para mañana lo que puedas hacer hoy). Sara duda de aceptar un regalo algo feo (A caballo regalado no le mires el diente). Carlos presume de amigos poco recomendables (Dime con quién andas y te diré quién eres).",
        ],
        [
          ["Zapatero, a tus zapatos.", "Stick to what you know."],
          ["No dejes para mañana lo que puedas hacer hoy.", "Don't put off till tomorrow what you can do today."],
        ],
        [
          mc(
            "Caso nuevo: Elena se empeña en arreglar sola la instalación eléctrica de su casa, aunque es abogada. ¿Qué consejo le das?",
            ["Elena, zapatero, a tus zapatos: llama a un electricista.", "Elena, no dejes para mañana lo que puedas hacer hoy.", "Elena, a caballo regalado no le mires el diente.", "Elena, más vale solo que mal acompañado."],
            0,
            "Elena tiene el mismo problema que Marta: se mete en un oficio que no domina. «Zapatero, a tus zapatos» le pide ocuparse de lo suyo. Animarla a no posponer el arreglo («no dejes para mañana…») la empujaría justo hacia el riesgo, y los otros dos refranes hablan de regalos y de compañías."
          ),
        ]
      ),
    ],
    [
      fb("Completa el consejo a Marta.", "Marta, tú pinta tus cuadros y deja la fontanería a los fontaneros: zapatero, a tus ___.", "zapatos", "«Zapatero, a tus zapatos» aconseja que cada uno se ocupe de lo suyo; el posesivo «tus» concuerda con «zapatos» y se dirige al zapatero imaginario, no a Marta."),
      fb("Completa el consejo a Luis (subjuntivo).", "Luis, la matrícula cierra el viernes: no dejes para mañana lo que ___ hacer hoy. (poder, tú)", "puedas", "La relativa con valor hipotético («lo que puedas», todo lo que sea posible) va en subjuntivo; «lo que puedes» afirmaría algo concreto y rompe la forma fija."),
      mc(
        "¿Qué refrán le conviene a Carlos?",
        ["Dime con quién andas y te diré quién eres.", "Más vale tarde que nunca.", "Perro ladrador, poco mordedor.", "No hay mal que por bien no venga."],
        0,
        "El problema de Carlos son sus compañías: «Dime con quién andas y te diré quién eres». «Más vale tarde que nunca» trata de la tardanza, «Perro ladrador…» de amenazas vacías y «No hay mal…» de sacar algo bueno de una desgracia."
      ),
      mc(
        "Explicación adecuada de «A caballo regalado no le mires el diente»:",
        ["Si te regalan algo, no le busques defectos.", "No aceptes regalos de desconocidos.", "Revisa bien lo que compras.", "Los caballos son caros."],
        0,
        "«A caballo regalado no le mires el diente» significa que no hay que buscar defectos a un regalo. No trata de desconfiar de desconocidos, ni de revisar compras, ni del precio de los caballos."
      ),
      ms(
        "¿Qué refranes aconsejan prudencia o reflexión?",
        ["Más vale prevenir que curar.", "Antes de que te cases, mira lo que haces.", "Quien no se arriesga no cruza el río.", "Del dicho al hecho hay mucho trecho."],
        [0, 1],
        "«Más vale prevenir que curar» y «Antes de que te cases, mira lo que haces» aconsejan prudencia o reflexión; «Del dicho al hecho hay mucho trecho» habla de lo fácil que es prometer y lo difícil que es cumplir. «Quien no se arriesga no cruza el río» anima, al contrario, a la audacia."
      ),
      toEs("Luis, no dejes por mañana lo que puedas hacer hoy: paga el alquiler ya.", "Luis, no dejes para mañana lo que puedas hacer hoy: paga el alquiler ya.", "«Dejar algo para + momento» indica el plazo al que se aplaza: «para mañana», «para el lunes». «Por mañana» sería una referencia vaga (hacia mañana) y no forma el refrán.", ["Luis, no dejes para mañana lo que puedas hacer hoy, paga el alquiler ya."], "Corrige la frase."),
      wo("Prometes mucho, pero del dicho al hecho hay mucho trecho", "Refrán con rima (hecho/trecho): decir o prometer algo es fácil; hacerlo, no. Aquí cierra la objeción que va delante con «pero».", "You promise a lot, but it's easier said than done"),
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
        [
          "Recuerda la regla: el doble sentido necesita un punto de cruce, una palabra o un sonido que sirva para dos lecturas a la vez. Para analizar un chiste, busca ese punto y pregúntate de qué tipo es: ¿dos palabras que suenan parecido?, ¿una palabra con dos significados?, ¿dos palabras que suenan igual?",
          "Paronomasia: parecido fónico entre dos palabras («—¿Qué le dice una iguana a su hermana gemela? —Somos iguanitas» → iguanas + igualitas). Polisemia: una palabra con dos sentidos («Tengo muchos problemas»: ejercicios de matemáticas y preocupaciones). Homonimia y homofonía: «vaca / baca», «hola / ola». Dilogía en titulares: «El alcalde se queda sin banco» (entidad financiera / asiento). La gracia nace de activar ambas lecturas; si sustituyes la palabra de cruce por un sinónimo, el chiste desaparece.",
        ],
        [
          ["—Papá, ¿qué se siente tener un hijo tan guapo? —No sé, pregúntale a tu abuelo.", "—Dad, how does it feel to have such a handsome son? —I don't know, ask your grandfather."],
        ],
        [
          mc(
            "Chiste nuevo: «—¿Qué le dijo un techo a otro? —Techo de menos.» ¿Qué dos cosas suenan a la vez en «techo»?",
            ["«techo» y «te echo» (de echar de menos)", "«techo» y «tejado»", "«techo» y «hecho»", "«techo» y «menos»"],
            0,
            "Es una paronomasia, como «iguanitas»: «techo» y «te echo» se pronuncian casi igual, y «te echo de menos» (te extraño) completa la frase. «Tejado» es un sinónimo, sin juego sonoro, y «hecho» no encaja con «de menos»."
          ),
        ]
      ),
    ],
    [
      mc(
        "«El ministro de Pesca, en el ojo del huracán tras la subida del pescado.» ¿Dónde está el juego de palabras, si es que lo hay?",
        ["No hay juego: es una metáfora periodística habitual.", "En «pesca»: deporte y ministerio.", "En «huracán»: viento y equipo.", "En «subida»: escalera y precio."],
        0,
        "No hay juego de palabras: «en el ojo del huracán» es una metáfora periodística habitual para estar en el centro de la polémica. «Pesca», «huracán» y «subida» no se usan aquí con doble sentido."
      ),
      mc(
        "«—¿Por qué el libro de matemáticas está triste? —Porque tiene muchos problemas.» El juego está en…",
        ["«problemas»: ejercicios y preocupaciones", "«libro»: objeto y persona", "«triste»: color y ánimo", "«matemáticas»: ciencia y deporte"],
        0,
        "El chiste juega con la polisemia de «problemas»: ejercicios de matemáticas y preocupaciones. «Libro», «triste» y «matemáticas» no tienen aquí un segundo sentido."
      ),
      mc(
        "«—Camarero, hay una mosca en mi sopa. —Tranquilo, no se la va a comer toda.» El humor es…",
        ["absurdo: inversión de la lógica esperada", "de doble sentido léxico", "irónico por antífrasis", "un refrán"],
        0,
        "Es humor absurdo: la respuesta invierte la preocupación lógica del cliente. No hay doble sentido léxico, no es ironía por antífrasis y no es un refrán."
      ),
      fb("Completa el juego.", "Hola / ___: una se dice, la otra moja. (homófonos)", "ola", "«Hola» (saludo) y «ola» (del mar) son homófonos: suenan igual y se escriben distinto."),
      ms(
        "¿Qué mecanismos producen doble sentido?",
        ["polisemia", "homofonía", "dilogía", "sinónimos exactos"],
        [0, 1, 2],
        "La polisemia, la homofonía y la dilogía (una palabra con dos sentidos a la vez) producen doble sentido. Los sinónimos exactos no crean ambigüedad."
      ),
      toEn("Tiene muchos problemas, como mi libro de matemáticas.", "He has a lot of problems, like my math book.", "«Problems» mantiene en inglés el doble sentido de ejercicios y preocupaciones, así que el juego se conserva.", ["He's got a lot of problems, like my maths book.", "She has a lot of problems, like my math book.", "She's got a lot of problems, like my maths book."]),
      wo("La gracia del chiste está en que la palabra tiene dos sentidos.", "«La gracia está en que…» es la fórmula para explicar un chiste; «sentido» equivale aquí a acepción o significado.", "The joke works because the word has two meanings."),
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
        [
          "Recuerda la regla: para distinguir los tres registros, haz dos preguntas. ¿Lo dicho choca con la realidad? Si es así, hay ironía. ¿Busca herir a alguien? Entonces es sarcasmo. Si no hay choque con la realidad sino con la lógica misma, contado con seriedad, es humor absurdo.",
          "Ironía (antífrasis): decir lo contrario de lo que se piensa, con complicidad («¡Qué puntual!» a quien llega tarde). Sarcasmo: ironía con intención de herir («Brillante idea, como todas las tuyas»). Absurdo: romper la lógica con total seriedad. Marcadores de ironía en español: «¡Qué bien!», «Menudo + sustantivo» (concuerda: menuda suerte), «Vaya…», «Para + infinitivo, …» (para ser experto, sabes poco).",
        ],
        [
          ["¡Menudo día de playa! (bajo una tormenta)", "What a beach day! (in a storm)"],
          ["Genial, otra reunión de tres horas.", "Great, another three-hour meeting."],
        ],
        [
          mc(
            "«¡Vaya, qué madrugador!» dicho a alguien que se levanta a mediodía es…",
            ["ironía", "un elogio sincero", "humor absurdo", "un refrán"],
            0,
            "Es ironía (antífrasis): se dice lo contrario de lo que se piensa. No es un elogio sincero, no es humor absurdo y no es un refrán."
          ),
        ]
      ),
    ],
    [
      mc(
        "«Tu presentación ha sido tan brillante como todas tus ideas: ninguna.» Es…",
        ["sarcasmo", "ironía amable", "humor absurdo", "un eufemismo"],
        0,
        "Es sarcasmo: una ironía que busca herir («ninguna»). La ironía amable no hiere, el humor absurdo invierte la lógica y un eufemismo suaviza, no ataca."
      ),
      mc(
        "«Mi perro es tan listo que me corrige la declaración de la renta.» Es…",
        ["hipérbole con tono absurdo", "sarcasmo", "eufemismo", "un dato"],
        0,
        "Es una hipérbole de tono absurdo: una exageración disparatada. No hay intención de herir (sarcasmo), no suaviza nada (eufemismo) y, desde luego, no es un dato real."
      ),
      { ...fb("Completa con un intensificador irónico.", "¡___ suerte la mía! Otra vez me ha tocado guardia en Navidad.", "Menuda", "«Menudo/a» + sustantivo expresa ironía o énfasis: aquí la «suerte» es en realidad mala suerte. «¡Vaya suerte la mía!» también vale."), altAnswers: ["Vaya", "Qué"] },
      fb("Completa (ironía).", "¡Qué ___! Has llegado solo una hora tarde. (que llega a la hora)", "puntual", "La antífrasis dice lo contrario de lo que se piensa: «¡Qué puntual!» a quien llega una hora tarde."),
      ms(
        "¿Qué pistas ayudan a detectar la ironía?",
        ["contradicción con la situación", "entonación marcada", "exclamaciones como «¡Qué bien!»", "la presencia de subjuntivo"],
        [0, 1, 2],
        "La contradicción con la situación, la entonación marcada y exclamaciones como «¡Qué bien!» delatan la ironía. El subjuntivo es un modo verbal y no tiene relación con ella."
      ),
      toEs("Great, just what I needed: another bill.", "Genial, justo lo que necesitaba: otra factura.", "Se dice «genial» o «estupendo» cuando es lo contrario: ironía; «lo que me faltaba» es una fórmula típica.", ["Estupendo, justo lo que me faltaba: otra factura.", "Genial, lo que me faltaba: otra factura."]),
      wo("¡Menudo favor me has hecho contándoselo a todos!", "«¡Menudo/a + sustantivo!» suele ser irónico: aquí el «favor» es en realidad un perjuicio; el gerundio «contándoselo» explica cómo.", "Some favor you did me telling everyone!"),
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
        [
          "Recuerda la regla: cada estilo se define por dos rasgos, si dice lo contrario o algo ambiguo (ironía) y si lo hace con cara seria o con risa abierta. Y fíjate en cómo se forman estas palabras: muchos sustantivos de burla salen de un verbo en -ear(se) cambiando la terminación por -eo: chotearse → choteo. El mismo molde da cachondearse → cachondeo o cotillear → cotilleo, así que puedes deducir sustantivos que no has visto.",
          "Retranca (Galicia): ironía socarrona y ambigua, nunca se sabe si hablan en serio. Choteo (Cuba): burla desenfadada de todo, incluso de lo solemne. Albur (México): juego de doble sentido, a menudo picante, como duelo verbal (de ahí el verbo alburear). Humor seco o socarrón (Castilla): serio en apariencia. Tomadura de pelo (de tomar el pelo): broma para engañar a alguien.",
        ],
        [
          ["—¿Va a llover? —Depende. (retranca)", "—Is it going to rain? —It depends."],
        ],
        [
          mc(
            "Aplica el molde -ear(se) → -eo: ¿qué sustantivo sale de «pitorrearse» (burlarse de alguien)?",
            ["pitorreo", "pitorrada", "pitorreamiento", "pitorrería"],
            0,
            "Como chotearse → choteo y cachondearse → cachondeo, pitorrearse da «pitorreo» («estar de pitorreo», «tomarse algo a pitorreo»). Las otras formas siguen sufijos reales del español (-ada, -miento, -ería), pero no son las que usa esta palabra."
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
        "El albur mexicano se basa en el doble sentido, a menudo picante, en forma de duelo verbal. No se basa en la exageración, ni en la seriedad, ni en los refranes."
      ),
      mc(
        "«Tomarle el pelo a alguien» es…",
        ["gastarle una broma haciéndole creer algo falso", "cortarle el pelo", "darle un consejo", "felicitarle"],
        0,
        "«Tomarle el pelo a alguien» es gastarle una broma haciéndole creer algo falso. No tiene que ver con cortar el pelo, dar consejos o felicitar."
      ),
      fb("Completa.", "Nunca sé si habla en serio: tiene mucha ___. (ironía gallega)", "retranca", "«Retranca» es la ironía socarrona, típica del humor gallego, que hace dudar de si alguien habla en serio."),
      fb("Completa.", "Se lo dijo con una sonrisa ___, medio en broma medio en serio. (irónica y astuta)", "socarrona", "«Socarrón/socarrona» describe a quien se burla con disimulo, medio en broma medio en serio."),
      toEs("Are you pulling my leg?", "¿Me estás tomando el pelo?", "«Tomar el pelo» equivale a «pull someone's leg».", ["¿Me tomas el pelo?"]),
      wo("En Cuba el choteo convierte en broma hasta lo más solemne.", "«Convertir algo en broma»; «hasta» significa aquí «incluso» y va delante de lo que sorprende («lo más solemne»).", "In Cuba, choteo turns even the most solemn things into a joke."),
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
        [
          "Recuerda la regla: ante una broma, primero decides qué quieres hacer (seguirla, devolverla, reconocer que no la entiendes, reírte, cortarla o suavizarla) y luego eliges la fórmula. Cada fórmula sirve para una sola intención: si usas «mira quién habla» cuando querías reírte, el otro entenderá que lo atacas.",
          "Seguir la broma: «Sí, y yo soy la reina de Inglaterra» (un absurdo equivalente). Devolverla: «Mira quién habla». Confesar que no la pillas: «Perdona, no la he pillado» (la = la broma). Reírse: «¡Qué bueno!», «Me parto». Cortar: «Ya, muy gracioso, pero hablemos en serio». Suavizar tras una broma pesada: «Era broma, hombre», «No te lo tomes a mal».",
        ],
        [
          ["Mira quién habla.", "Look who's talking."],
          ["Perdona, no la he pillado.", "Sorry, I didn't get it."],
        ],
        [
          mc(
            "«—Tú cocinas fatal. —___» (devolver la broma a quien también cocina mal)",
            ["Mira quién habla.", "Me parto.", "No la he pillado.", "Era broma, hombre."],
            0,
            "«Mira quién habla» devuelve la crítica a quien comete el mismo fallo. «Me parto» expresa risa, «No la he pillado» dice que no entiendes la broma y «Era broma, hombre» reconoce que era una broma."
          ),
        ]
      ),
    ],
    [
      mc(
        "«—Mañana llego a las seis de la mañana, puntualísimo. —___» (incredulidad burlona)",
        ["Sí, y yo soy astronauta.", "Mira quién habla.", "Era broma, hombre.", "No es para tanto."],
        0,
        "«Sí, y yo soy astronauta» sigue la broma con incredulidad burlona. «Mira quién habla» devuelve una crítica, «Era broma» se retracta y «No es para tanto» quita importancia."
      ),
      mc(
        "Alguien se ofende por una broma tuya. Respondes:",
        ["Perdona, era broma, no quería molestarte.", "Me parto de risa.", "Sí, y yo soy la reina.", "Mira quién habla."],
        0,
        "Si alguien se ofende, hay que reparar la relación: «Perdona, era broma, no quería molestarte». Reírse más, seguir con ironía («Sí, y yo soy la reina») o contraatacar («Mira quién habla») empeora las cosas."
      ),
      fb("Completa.", "¡Qué bueno! Me ___ de risa. (partir)", "parto", "«Partirse de risa» es reírse muchísimo (coloquial): «me parto»."),
      fb("Completa.", "Perdona, no la he ___. (entender la broma, coloquial)", "pillado", "«Pillar» una broma es entenderla, en registro coloquial de España."),
      mc(
        "«Ya, muy gracioso, pero ahora hablemos en serio» sirve para…",
        ["cortar la broma y volver al tema", "reírse mucho", "hacer otra broma", "pedir perdón"],
        0,
        "La frase corta la broma y vuelve al tema serio. No sirve para reírse, ni para hacer otra broma, ni para pedir perdón."
      ),
      toEs("I'm cracking up!", "¡Me parto!", "«¡Me parto!» (o «¡Me troncho!») es la expresión coloquial de España para reírse muchísimo.", ["¡Me parto de risa!", "¡Me muero de risa!", "¡Me troncho!"]),
      wo("No te lo tomes a mal, solo era una broma.", "«Tomarse algo a mal» = ofenderse; el imperativo negativo usa el subjuntivo y los pronombres van delante: «no te lo tomes a mal».", "Don't take it the wrong way, it was just a joke."),
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
        [
          "Recuerda la regla: el símil y la metáfora usan la misma imagen; lo que cambia es cuánto se explicita la relación. Quita el nexo y tendrás una metáfora; añádelo y tendrás un símil. Si además desaparece el término real, queda una metáfora pura.",
          "Símil: nexo comparativo (como, cual, parecido a): «Tu risa es como una fuente». Metáfora: identidad directa («Tu risa es una fuente»). Metáfora pura (sin término real): «Las perlas de tu boca» por los dientes. Cuanto menos explícito el vínculo, más intensidad y más esfuerzo interpretativo.",
        ],
        [
          ["Su voz era como terciopelo. → Su voz era terciopelo.", "Her voice was like velvet. → Her voice was velvet."],
          ["Nuestras vidas son los ríos que van a dar en la mar. (Jorge Manrique)", "Our lives are the rivers that flow into the sea."],
        ],
        [
          mc(
            "«El tiempo es oro» es…",
            ["una metáfora", "un símil", "una hipérbole", "una personificación"],
            0,
            "Es una metáfora: identifica «tiempo» y «oro» sin nexo comparativo. Un símil usaría «como», la hipérbole exagera y la personificación da rasgos humanos a algo que no lo es."
          ),
        ]
      ),
    ],
    [
      fb("Transforma en metáfora.", "Su mirada era como un cuchillo. → Su mirada ___ un cuchillo.", "era", "Para pasar de símil a metáfora se elimina el nexo «como»: «Su mirada era un cuchillo»."),
      fb("Transforma en símil.", "La ciudad es un hormiguero. → La ciudad es ___ un hormiguero.", "como", "Para pasar de metáfora a símil se añade el nexo «como»: «es como un hormiguero»."),
      mc(
        "«Las perlas de su boca» (por los dientes) es…",
        ["una metáfora pura", "un símil", "una comparación literal", "una metonimia"],
        0,
        "Es una metáfora pura: solo aparece el término imaginario («perlas») en lugar del real («dientes»). Un símil llevaría «como», no es una comparación literal y no hay relación de contigüidad (metonimia), sino de parecido."
      ),
      mc(
        "¿Cuál es un símil?",
        ["Duerme como un tronco.", "Es un tronco.", "El tronco de la conversación.", "Troncos de silencio."],
        0,
        "El símil compara con un nexo: «Duerme como un tronco». «Es un tronco», «el tronco de la conversación» y «troncos de silencio» son metáforas, sin «como»."
      ),
      ms(
        "¿Qué frases contienen metáfora?",
        ["Mi jefe es un ogro.", "La vida es sueño.", "Corre como el viento.", "Este mes voy a la playa."],
        [0, 1],
        "«Mi jefe es un ogro» y «La vida es sueño» identifican dos términos sin nexo: son metáforas. «Corre como el viento» es un símil y «Este mes voy a la playa» es literal."
      ),
      toEs("His words were a slap in the face.", "Sus palabras fueron una bofetada.", "Metáfora: las palabras «fueron» una bofetada, sin nexo comparativo.", ["Sus palabras fueron una bofetada en la cara.", "Sus palabras fueron como una bofetada."]),
      wo("La noticia cayó como un jarro de agua fría.", "Símil lexicalizado: «caer como un jarro de agua fría» es una comparación fija con «como» para una decepción repentina.", "The news came as a bucket of cold water."),
    ]
  ),
  L(
    "figurative-language-2",
    "c2r-figurative-metonymy-synecdoche",
    "Contraste: metonimia y sinécdoque",
    "«Tomarse un rioja», «leer a Cervantes», «cien cabezas de ganado»: nombrar algo por lo que está junto a ello o por una parte.",
    "7 min",
    [
      sec(
        "Contigüidad frente a inclusión",
        [
          "Recuerda la regla: haz una sola pregunta, ¿lo que se nombra es una parte de lo que se quiere decir? Si la respuesta es sí (la cabeza es parte del animal), es sinécdoque. Si solo está al lado o relacionado (el vaso no es parte de la leche, el autor no es parte del cuadro), es metonimia.",
          "Metonimia (relación de contigüidad): autor por obra («Leí a Borges», con «a» personal), lugar por producto («un rioja», con minúscula), continente por contenido («tomarse un vaso»), lugar por institución («La Moncloa anunció…»). Sinécdoque (parte-todo): «cien cabezas de ganado», «tiene cuatro bocas que alimentar», «los mortales» por los humanos.",
        ],
        [
          ["La Casa Blanca ha respondido.", "The White House has responded."],
          ["Hay cuatro bocas que alimentar.", "There are four mouths to feed."],
        ],
        [
          mc(
            "«Me tomé dos copas» (por el vino que contienen) es…",
            ["metonimia continente por contenido", "sinécdoque parte-todo", "metáfora", "hipérbole"],
            0,
            "Es una metonimia de continente por contenido: las copas por el vino. No es sinécdoque (la parte por el todo), ni metáfora (no hay parecido) ni hipérbole."
          ),
        ]
      ),
    ],
    [
      mc(
        "«Escuchamos a Mozart toda la tarde.»",
        ["metonimia autor por obra", "sinécdoque", "símil", "personificación"],
        0,
        "Es una metonimia de autor por obra: Mozart por su música. No es sinécdoque, ni símil (no hay «como»), ni personificación."
      ),
      mc(
        "«La empresa contrató a diez nuevos brazos para la cosecha.»",
        ["sinécdoque parte por todo", "metonimia lugar por producto", "metáfora pura", "ironía"],
        0,
        "Es una sinécdoque de la parte por el todo: «brazos» por trabajadores. No es metonimia de lugar por producto, ni metáfora pura, ni ironía."
      ),
      mc(
        "«Bruselas impone nuevas normas.»",
        ["metonimia lugar por institución", "sinécdoque", "hipérbole", "eufemismo"],
        0,
        "Es una metonimia de lugar por institución: Bruselas por la Unión Europea. No es sinécdoque, ni hipérbole, ni eufemismo."
      ),
      fb("Completa (lugar por producto).", "Pidió un ___ para el aperitivo. (vino típico de Jerez de la Frontera)", "jerez", "«Un jerez» es una metonimia de lugar por producto: el nombre de la ciudad (Jerez) designa el vino que se elabora allí, y por eso se escribe con minúscula."),
      mt(
        "Relaciona cada expresión con su referente real.",
        [
          ["la Moncloa", "el Gobierno de España"],
          ["un Picasso", "un cuadro de Picasso"],
          ["cien cabezas", "cien animales"],
        ],
        "Metonimia y sinécdoque."
      ),
      toEs("Washington has not responded yet.", "Washington todavía no ha respondido.", "Metonimia de lugar por institución: «Washington» = el gobierno de EE. UU.", ["Washington aún no ha respondido.", "Washington no ha respondido todavía."]),
      wo("En el museo había un Goya que nadie había visto antes.", "Metonimia de autor por obra: «un Goya» = un cuadro de Goya; el artículo indefinido convierte el nombre propio en nombre de objeto.", "In the museum there was a Goya nobody had seen before."),
    ]
  ),
  L(
    "figurative-language-2",
    "c2r-figurative-hyperbole-personification",
    "Taller de estilo: hipérbole y personificación",
    "Aprende a reconocer y emplear la hipérbole y la personificación para dar intensidad y vida a una descripción.",
    "7 min",
    [
      sec(
        "Dos recursos de intensidad",
        [
          "Recuerda la regla: la hipérbole intensifica la cantidad (mil veces, una tonelada, tan… que no cabía un alfiler); la personificación intensifica la vida, dando a una cosa un verbo de persona (la puerta gime, el sol castiga). Para personificar basta con elegir un verbo humano para un sujeto inanimado.",
          "Hipérbole: exageración evidente, no se toma literalmente («Te lo he dicho mil veces», «Me muero de hambre»). Personificación: atribuir cualidades humanas a lo inanimado («El viento susurraba», «La ciudad dormía»); si además lo inanimado habla, es una prosopopeya. En la escritura creativa, dosificarlas evita el efecto recargado.",
        ],
        [
          ["La casa lloraba por todas sus grietas.", "The house wept through all its cracks."],
          ["Hace un siglo que no te veo.", "I haven't seen you in ages."],
        ],
        [
          mc(
            "«El reloj nos miraba impaciente desde la pared.»",
            ["personificación", "hipérbole", "sinécdoque", "símil"],
            0,
            "Es una personificación: atribuye rasgos humanos (mirar, impacientarse) a un objeto. No exagera (hipérbole), no toma la parte por el todo (sinécdoque) y no compara con «como» (símil)."
          ),
        ]
      ),
    ],
    [
      fb("Hipérbole.", "Había ___ de gente en el concierto. (exageración coloquial con «mar»)", "un mar", "«Un mar de gente» es una hipérbole coloquial para muchísima gente."),
      fb("Personificación.", "La luna ___ sobre los tejados dormidos. (velar, imperfecto)", "velaba", "Personificación: un verbo humano («velar», cuidar sin dormir) aplicado a la luna, en imperfecto descriptivo."),
      mc(
        "Reescritura expresiva de «Hacía mucho calor»:",
        ["El sol mordía la piel de los transeúntes.", "Hacía bastante calor.", "La temperatura era alta.", "Había calor."],
        0,
        "«El sol mordía la piel» personifica el sol y hace expresiva la frase. «Bastante calor», «La temperatura era alta» y «Había calor» son formulaciones planas."
      ),
      mc(
        "¿Qué frase NO contiene hipérbole?",
        ["Tardó veinte minutos en llegar.", "Estoy muerto de cansancio.", "Tengo un millón de cosas que hacer.", "Te he llamado cien veces."],
        0,
        "«Tardó veinte minutos en llegar» es un dato literal, sin hipérbole. «Muerto de cansancio», «un millón de cosas» y «cien veces» son exageraciones."
      ),
      ms(
        "¿Cuáles son personificaciones?",
        ["El mar rugía.", "Las hojas bailaban con el viento.", "Llovía mucho.", "La ciudad se despertaba lentamente."],
        [0, 1, 3],
        "«El mar rugía», «Las hojas bailaban» y «La ciudad se despertaba» atribuyen acciones humanas o animales a lo inanimado. «Llovía mucho» es literal."
      ),
      toEs("I've told you a thousand times.", "Te lo he dicho mil veces.", "Hipérbole: «mil veces» exagera el número de veces, igual que «a thousand times».", ["Te lo he dicho mil veces ya.", "Te lo he repetido mil veces."]),
      wo("El viejo tren protestaba en cada curva.", "Personificación: «protestar» es una acción humana atribuida al tren; el imperfecto describe una acción repetida («en cada curva»).", "The old train complained at every bend."),
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
        [
          "Recuerda la regla: un buen comentario tiene tres pasos, figura + verbo crítico + efecto. «Hay una hipérbole» solo nombra; «La hipérbole enfatiza la desesperación del hablante» comenta. Cada verbo crítico tiene su construcción fija: sugerir que + indicativo (sugiere que la vida es…), dotar de vida a, contraponer una idea a otra o con otra, valerse de un recurso para + infinitivo.",
          "No basta con nombrar la figura: hay que explicar su efecto. Vocabulario útil: «La metáfora sugiere…», «La personificación dota de vida a…», «La hipérbole enfatiza…», «La antítesis contrapone…». Antítesis: oposición de ideas en una misma frase («Reía por fuera y lloraba por dentro»). Oxímoron: contradicción en una misma expresión («fuego helado»).",
        ],
        [
          ["Es hielo abrasador, es fuego helado. (Quevedo)", "It is burning ice, it is frozen fire."],
          ["Volverán las oscuras golondrinas… (Bécquer)", "The dark swallows will return…"],
        ],
        [
          mc(
            "Lorca escribe «La luna vino a la fragua». ¿Qué comentario sigue los tres pasos?",
            ["La personificación dota de vida a la luna, que llega como una visitante.", "Hay una personificación en el verso.", "La luna es una figura.", "El verso contiene una luna personificada."],
            0,
            "Solo la primera opción une figura (personificación), verbo crítico (dota de vida a) y efecto (la luna se presenta como una visitante). Las demás se quedan en el primer paso: nombran o describen, pero no explican qué consigue el recurso."
          ),
        ]
      ),
    ],
    [
      mc(
        "«Nuestras vidas son los ríos / que van a dar en la mar, / que es el morir» (Manrique). La metáfora sugiere que…",
        ["la vida fluye inevitablemente hacia la muerte", "los ríos son peligrosos", "el mar es la vida", "hay que viajar"],
        0,
        "En Manrique, los ríos son las vidas y el mar es la muerte: la vida fluye inevitablemente hacia su fin. No habla de ríos peligrosos, el mar no es la vida y no se trata de viajar."
      ),
      mc(
        "«Yo soy un hombre sincero / de donde crece la palma» (Martí). «Donde crece la palma» alude a…",
        ["Cuba (metonimia/perífrasis)", "un desierto", "una iglesia", "el mar"],
        0,
        "«Donde crece la palma» es una perífrasis para aludir a Cuba, la patria de Martí. No alude a un desierto, a una iglesia ni al mar."
      ),
      fb("Completa el comentario.", "La antítesis ___ dos ideas opuestas: amor y dolor. (contraponer)", "contrapone", "En un comentario crítico, la antítesis «contrapone» dos ideas opuestas."),
      fb("Completa el comentario.", "La hipérbole ___ la intensidad del sufrimiento. (subrayar)", "subraya", "«Subrayar» es un verbo crítico para decir que un recurso destaca o intensifica algo."),
      mt(
        "Relaciona la figura con su efecto típico.",
        [
          ["hipérbole", "intensificar"],
          ["antítesis", "contrastar"],
          ["personificación", "dar vida a lo inerte"],
        ],
        "Figuras y efectos."
      ),
      toEs("The metaphor suggests that life is a journey.", "La metáfora sugiere que la vida es un viaje.", "En un comentario crítico, «la metáfora sugiere que…» presenta la interpretación.", ["La metáfora sugiere que la vida es un camino."]),
      wo("El poeta dota de vida al paisaje mediante la personificación.", "Comentario crítico.", "The poet brings the landscape to life through personification."),
    ]
  ),
  L(
    "euphemisms-indirect-1",
    "c2r-euphemism-decode",
    "Detective de textos: descifrar el eufemismo",
    "«Nos ha dejado», «persona de edad avanzada», «crecimiento negativo»: traduce el eufemismo a lo que realmente dice.",
    "7 min",
    [
      sec(
        "Tres ámbitos del eufemismo",
        [
          "Recuerda la regla: para descifrar un eufemismo, primero identifica el ámbito (muerte, edad y cuerpo, dinero) y luego sustituye la expresión por la palabra directa adaptando la gramática. «Nos dejó» → «murió»: el pronombre «nos» desaparece, porque «morir» no lleva complemento. «Ha aplicado un ajuste de precios» → «ha subido los precios»: el sustantivo abstracto vuelve a ser un verbo. Lo mismo al revés: para eufemizar, «viejos» → «personas mayores», con el sustantivo «personas» como núcleo.",
          "Muerte: fallecer, dejarnos, irse, pasar a mejor vida, descansar en paz. Edad y cuerpo: persona mayor / de edad avanzada / de la tercera edad; entrado en carnes; con sobrepeso. Dinero y economía: desaceleración (crisis), crecimiento negativo (caída), ajuste de precios (subida), personas en situación de vulnerabilidad económica (pobres).",
        ],
        [
          ["Nuestro compañero nos dejó el pasado martes.", "Our colleague passed away last Tuesday."],
          ["La economía registra un crecimiento negativo.", "The economy is shrinking."],
        ],
        [
          mc(
            "Aplica la regla a un eufemismo que no está en la lista: «El ayuntamiento ayudará a las familias con escasos recursos». ¿Qué dice en lenguaje directo?",
            ["El ayuntamiento ayudará a las familias pobres.", "El ayuntamiento ayudará a las familias poco numerosas.", "El ayuntamiento ayudará a las familias ahorradoras.", "El ayuntamiento ayudará a las familias mayores."],
            0,
            "Ámbito: dinero. «Con escasos recursos» es un término abstracto que suaviza «pobres», igual que «en situación de vulnerabilidad económica». No habla del número de miembros (poco numerosas), ni de quien ahorra, ni de la edad: los recursos son el dinero."
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
      fb("Traduce al lenguaje directo.", "Su padre falleció ayer. → Su padre ___ ayer.", "murió", "«Fallecer» es la variante formal y eufemística; en lenguaje directo se dice «morir»: murió."),
      fb("Eufemiza.", "Es pobre. → Está en situación de ___ económica.", "vulnerabilidad", "Eufemismo institucional: «situación de vulnerabilidad económica» evita decir «pobre» en informes y textos oficiales."),
      mc(
        "«Desaceleración económica» suele ocultar…",
        ["una crisis o recesión incipiente", "un crecimiento rápido", "una mejora", "una subida de salarios"],
        0,
        "Eufemismo económico: «desaceleración» presenta como un simple frenazo lo que suele ser una crisis o recesión incipiente. No indica «un crecimiento rápido», «una mejora» ni «una subida de salarios», sino todo lo contrario."
      ),
      ms(
        "¿Qué expresiones son eufemismos de «morir»?",
        ["descansar en paz", "irse", "dejarnos", "despertar"],
        [0, 1, 2],
        "«Descansar en paz», «irse» y «dejarnos» suavizan la idea de morir. «Despertar» expresa lo contrario (volver a la consciencia) y no se usa como eufemismo de la muerte."
      ),
      toEs("Her grandmother passed away last year.", "Su abuela falleció el año pasado.", "«Fallecer» es el equivalente formal de «pass away»; «nos dejó» es aún más afectivo y «murió» es la versión directa.", ["Su abuela nos dejó el año pasado.", "Su abuela murió el año pasado."]),
      wo("La empresa atraviesa un periodo de desaceleración.", "Eufemismo económico.", "The company is going through a slowdown."),
    ]
  ),
  L(
    "euphemisms-indirect-2",
    "c2r-euphemism-corporate-rewrite",
    "Taller de estilo: el comunicado corporativo",
    "Reescribe un anuncio de despidos en lenguaje corporativo… y luego descodifícalo para los trabajadores.",
    "8 min",
    [
      sec(
        "El diccionario corporativo",
        [
          "Recuerda la regla: el comunicado corporativo se construye con tres operaciones. Primero, el verbo de la acción se convierte en sustantivo (bajar sueldos → moderación salarial; despedir → ajuste de plantilla). Segundo, el agente desaparece con «se» o con un verbo comodín (se llevará a cabo, se procederá a). Tercero, las personas pasan a ser abstracciones (trabajadores → plantilla, recursos humanos; despedir a alguien → prescindir de sus servicios). Para descodificar, se deshacen las tres: un verbo concreto, un sujeto que actúa y personas.",
          "Despido masivo → expediente de regulación de empleo (ERE), reestructuración, ajuste de plantilla, optimización de recursos. Despedir → prescindir de los servicios de, desvincular. Recortar salarios → moderación salarial. Cerrar una planta → reorganizar la capacidad productiva. El eufemismo protege la imagen de la empresa, pero puede percibirse como opaco o cínico.",
        ],
        [
          ["La empresa ha decidido prescindir de sus servicios.", "The company has decided to let you go."],
          ["Se llevará a cabo un ajuste de plantilla.", "There will be layoffs."],
        ],
        [
          mc(
            "Una cadena quiere anunciar «Cerraremos veinte tiendas». ¿Qué versión aplica las tres operaciones del comunicado corporativo?",
            ["Se procederá a una racionalización de la red comercial.", "Cerraremos, con mucha pena, veinte tiendas.", "Nuestras veinte tiendas cerrarán pronto.", "Hemos decidido cerrar veinte tiendas."],
            0,
            "Solo la primera nominaliza la acción (racionalización), borra el agente (se procederá a) y convierte las tiendas en una abstracción (la red comercial). Las otras tres mantienen el verbo «cerrar» y dicen claramente qué ocurre: son versiones transparentes, no corporativas."
          ),
        ]
      ),
    ],
    [
      { ...fb("Eufemiza.", "Vamos a despedir a 200 personas. → Vamos a llevar a cabo un ___ de plantilla.", "ajuste", "«Ajuste de plantilla» (o «reajuste») es la fórmula corporativa que maquilla un despido colectivo."), altAnswers: ["reajuste"] },
      fb("Eufemiza.", "Bajaremos los sueldos. → Aplicaremos una ___ salarial.", "moderación", "«Moderación salarial» es el eufemismo empresarial y político para congelar o bajar sueldos."),
      { ...fb("Descodifica.", "Optimización de recursos humanos. → ___ de trabajadores.", "Despido", "Lectura directa: «optimizar los recursos humanos» suele significar despedir trabajadores."), altAnswers: ["Despidos"] },
      mc(
        "¿Qué versión es la más transparente para los empleados?",
        ["Lamentablemente, 200 personas perderán su empleo en marzo.", "Se procederá a una optimización de la estructura.", "Se reorganizará la capacidad productiva.", "Habrá una reestructuración de recursos."],
        0,
        "La versión transparente dice qué pasa, a cuántos afecta y cuándo, con un tono respetuoso («Lamentablemente»). «Optimización de la estructura», «reorganizar la capacidad productiva» y «reestructuración de recursos» son eufemismos que ocultan que habrá despidos."
      ),
      ms(
        "¿Qué expresiones son eufemismos de despedir?",
        ["desvincular", "prescindir de los servicios", "ajustar la plantilla", "contratar"],
        [0, 1, 2],
        "«Desvincular», «prescindir de los servicios» y «ajustar la plantilla» son eufemismos de despedir. «Contratar» es justo lo contrario, así que no puede serlo."
      ),
      toEs("The company has announced a restructuring.", "La empresa ha anunciado una reestructuración.", "«Reestructuración» es el eufemismo corporativo estándar; «empresa» y «compañía» son intercambiables.", ["La compañía ha anunciado una reestructuración.", "La empresa anunció una reestructuración."]),
      wo("La dirección ha decidido reorganizar la capacidad productiva de la planta.", "«Reorganizar la capacidad productiva» suele encubrir el cierre total o parcial de una planta sin decir «cerrar».", "Management has decided to reorganize the plant's production capacity."),
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
        [
          "Recuerda la regla: una petición se vuelve indirecta alejándola de la orden con la gramática. Hay cuatro recursos: pregunta negativa con futuro (¿No tendrás…?), imperfecto de cortesía (Quería pedirte…), condicional + infinitivo (¿Te importaría bajar…?) y condicional + que + imperfecto de subjuntivo (Sería estupendo que estuviera…; ¿Le importaría que abriera…?). Cuanto más lejos del imperativo y del presente, más cortés suena. El que escucha hace el camino inverso: busca qué acción se le pide en realidad.",
          "Petición indirecta: «¿No tendrás un bolígrafo?» (= préstame uno). Rechazo indirecto: «Ya veremos», «Me lo pienso», «Es complicado» (= probablemente no). Crítica indirecta: «Interesante propuesta…» (con entonación dubitativa = no me convence). La interpretación depende del contexto y de la entonación.",
        ],
        [
          ["—¿Vienes el sábado? —Uf, ya veremos.", "—Are you coming Saturday? —Ugh, we'll see."],
          ["¿No tendrás un cargador por ahí?", "You wouldn't have a charger, would you?"],
        ],
        [
          mc(
            "«—¿Me ayudas con la mudanza? —Es que este finde lo tengo complicado.» Significa…",
            ["probablemente no", "sí, con gusto", "quizá el domingo seguro", "no entiende la pregunta"],
            0,
            "«Es que…» + una dificultad es un rechazo indirecto y cortés: probablemente no. No es «sí, con gusto», no promete nada para el domingo y sí ha entendido la pregunta; simplemente evita decir «no» a secas."
          ),
          mc(
            "Quieres pedir a tu vecino, con cortesía, permiso para aparcar delante de su garaje un momento. ¿Qué frase está bien construida?",
            ["¿Le importaría que aparcara aquí un momento?", "¿Le importaría que aparco aquí un momento?", "¿Le importaría que aparque aquí un momento?", "¿Le importaría aparcar aquí un momento?"],
            0,
            "Con dos sujetos distintos (a usted le importa / yo aparco), el condicional «importaría» pide «que» + imperfecto de subjuntivo: aparcara o aparcase. El indicativo «aparco» es incorrecto; «aparque» (presente) choca con el condicional; y «¿Le importaría aparcar…?» pediría que aparcara el vecino, no tú."
          ),
        ]
      ),
    ],
    [
      mc(
        "«Uy, qué tarde se ha hecho…» dicho por el anfitrión a medianoche significa…",
        ["que los invitados deberían irse", "que quiere más café", "que el reloj va mal", "que está muy contento"],
        0,
        "Implicatura: el anfitrión comenta la hora para invitar, sin decirlo, a que los invitados se vayan. No habla de café ni del reloj, y el «uy» no expresa alegría sino una indirecta."
      ),
      mc(
        "«Tu informe es… interesante.» (con pausa) probablemente significa…",
        ["que no le ha convencido", "que le ha encantado", "que no lo ha leído", "que es perfecto"],
        0,
        "La pausa y el adjetivo neutro «interesante» son una crítica velada: no le ha convencido. Si le hubiera encantado o le pareciera perfecto lo diría sin titubear, y la pausa no indica que no lo haya leído."
      ),
      { ...fb("Petición indirecta.", "¿No ___ un paraguas de sobra? (tener, tú, futuro de cortesía)", "tendrás", "Futuro en pregunta negativa = petición suave (también vale «tendrías»)."), altAnswers: ["tendrías"] },
      { ...fb("Rechazo indirecto.", "—¿Te apuntas? —Me lo ___ y te digo. (pensar)", "pienso", "«Me lo pienso y te digo» (pensárselo) aplaza la respuesta y a menudo es un rechazo suave. También vale el futuro: «Me lo pensaré y te digo»."), altAnswers: ["pensaré"] },
      ms(
        "¿Qué respuestas suelen ser rechazos indirectos?",
        ["Ya veremos.", "Es complicado.", "Me lo pienso.", "¡Claro que sí!"],
        [0, 1, 2],
        "«Ya veremos», «Es complicado» y «Me lo pienso» evitan el «no» directo y suelen ser rechazos. «¡Claro que sí!» es una aceptación clara, no un rechazo indirecto."
      ),
      toEs("You wouldn't have a stamp, would you?", "¿No tendrás un sello?", "Petición indirecta: la pregunta negativa con futuro («¿No tendrás…?») suaviza la petición, porque pregunta si el otro tiene algo en vez de ordenarle que lo dé. Con «usted» sería «¿No tendrá…?».", ["¿No tendrías un sello?", "¿No tendrás un sello por ahí?"]),
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
        [
          "Recuerda la regla: el tacto se consigue con la gramática, no borrando el mensaje. En el pésame, «sentir» expresa emoción y por eso pide subjuntivo cuando lleva «que» (siento que hayas pasado por esto), y la ayuda se ofrece con un relativo en subjuntivo porque no se sabe qué hará falta (para lo que necesites). En la crítica, el condicional aleja la orden (convendría mejorar, me gustaría que revisáramos), pero el contenido sigue siendo concreto: qué hay que mejorar y cuándo.",
          "Pésame: «Te acompaño en el sentimiento», «Siento mucho tu pérdida», «Mi más sentido pésame», «Aquí me tienes para lo que necesites». Crítica profesional: «Hay aspectos que convendría mejorar», «Me gustaría que revisáramos juntos…», «Sé que puedes dar más». Evita el eufemismo que oculta el mensaje: tacto no es vaguedad.",
        ],
        [
          ["Mi más sentido pésame por la pérdida de tu madre.", "My deepest condolences on the loss of your mother."],
          ["Hay algunos aspectos que convendría mejorar.", "There are some aspects that would be worth improving."],
        ],
        [
          mc(
            "Un amigo acaba de perder su trabajo y su perro el mismo mes. ¿Qué frase aplica la regla?",
            ["Siento mucho que tengas que pasar por todo esto.", "Siento mucho que tienes que pasar por todo esto.", "Siento mucho de que tengas que pasar por todo esto.", "Bueno, así es la vida."],
            0,
            "«Sentir que» expresa una emoción y exige subjuntivo: tengas. El indicativo «tienes» lo convierte en una información, no en una condolencia; «sentir de que» es dequeísmo; y «así es la vida» quita importancia al dolor."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "Te acompaño en el ___.", "sentimiento", "«Te acompaño en el sentimiento» es una fórmula fija de pésame, muy usada en España."),
      fb("Completa.", "Aquí me tienes para lo que ___. (necesitar, tú)", "necesites", "Relativo con antecedente no concreto (lo que sea que necesites): va en subjuntivo, necesites."),
      fb("Completa.", "Me gustaría que ___ juntos tus objetivos. (revisar, nosotros)", "revisáramos", "«Me gustaría que» (condicional de deseo) exige imperfecto de subjuntivo: revisáramos."),
      mc(
        "¿Qué crítica tiene tacto y es clara?",
        ["Los tres últimos informes llegaron tarde; me gustaría que habláramos de cómo evitarlo.", "Todo bien, sigue así.", "Eres un desastre.", "Hay cositas por ahí que, bueno, ya sabes."],
        0,
        "La crítica eficaz da un hecho concreto y propone una solución. «Todo bien, sigue así» no critica nada, «Eres un desastre» ataca a la persona y «Hay cositas por ahí…» es tan vaga que no sirve."
      ),
      mc(
        "¿Qué frase evitar en un pésame?",
        ["Al menos vivió muchos años.", "Siento mucho tu pérdida.", "Pienso en ti y en tu familia.", "Cuenta conmigo para lo que sea."],
        0,
        "«Al menos vivió muchos años» minimiza el dolor ajeno y conviene evitarla. «Siento mucho tu pérdida», «Pienso en ti…» y «Cuenta conmigo…» son fórmulas de apoyo adecuadas."
      ),
      toEs("I'm very sorry for your loss.", "Siento mucho tu pérdida.", "Fórmula de pésame: «Siento mucho tu/su pérdida»; «lamento» es algo más formal.", ["Siento mucho su pérdida.", "Lamento mucho tu pérdida."]),
      wo("Pienso mucho en ti y en tu familia en estos momentos tan difíciles.", "Fórmula de apoyo: «pensar en alguien» (con «en») y «en estos momentos tan difíciles» aluden a la pérdida sin nombrarla.", "I'm thinking of you and your family at this very difficult time."),
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
        "Cinco familias",
        [
          "Recuerda la regla: para clasificar una exclamación, pregúntate qué hace el hablante con lo que acaba de oír. Si lo rechaza, es negación (las fórmulas con «ni» son tajantes; «¡qué va!», ligera). Si reacciona ante una novedad, es sorpresa. Si lo confirma, es refuerzo. Si acepta algo malo que no puede cambiar, es resignación; si protesta porque un problema se suma a otro, es fastidio. La diferencia entre las dos últimas es la actitud: la resignación acepta, el fastidio se queja.",
          "Negar con fuerza: ¡Ni hablar!, ¡Ni loco!, ¡Ni de broma!, ¡Ni en sueños! (¡Qué va! niega con más ligereza). Sorpresa: ¡No me digas!, ¡Anda!, ¡Hala!, ¡Madre mía!, ¡No puede ser! Reforzar: ¡Y tanto!, ¡Ya lo creo!, ¡Claro que sí!, ¡Por supuesto! Resignación: ¡Qué le vamos a hacer!, ¡Vaya por Dios!, ¡Paciencia! Fastidio: ¡Lo que faltaba!",
        ],
        [
          ["—¿Te presto dinero para la moto? —¡Ni loca!", "—Shall I lend you money for the motorbike? —No way!"],
          ["—¿Estás cansado? —¡Y tanto!", "—Are you tired? —You bet!"],
        ],
        [
          mc(
            "«—Se ha vuelto a estropear la lavadora. —¡___!» (fastidio)",
            ["Lo que faltaba", "Y tanto", "No me digas que sí", "Ni en sueños"],
            0,
            "«¡Lo que faltaba!» expresa fastidio ante un problema que se suma a otros. «Y tanto» es afirmación enfática, «Ni en sueños» es negación y «No me digas que sí» no es una fórmula fija."
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
        "«¡Ni en sueños!» es una negación enfática: jamás. «Y tanto» sería un sí rotundo, «Vaya por Dios» expresa contrariedad y «Anda» expresa sorpresa, no rechazo."
      ),
      mc(
        "«—Me han dado el Erasmus en Roma. —¡___! ¡Enhorabuena!»",
        ["Anda", "Ni hablar", "Lo que faltaba", "Qué le vamos a hacer"],
        0,
        "«¡Anda!» expresa sorpresa, aquí positiva, y encaja con «¡Enhorabuena!». «Ni hablar» es negación, «Lo que faltaba» es fastidio y «Qué le vamos a hacer» es resignación."
      ),
      fb("Completa.", "—¿Te gustó la película? —¡Ya lo ___! La vería otra vez.", "creo", "«¡Ya lo creo!» es una afirmación enfática: sí, muchísimo."),
      fb("Completa.", "Se ha cancelado el vuelo. Bueno, ¡qué le ___ a hacer!", "vamos", "«¡Qué le vamos a hacer!» expresa resignación ante lo que no se puede cambiar."),
      toEs("—Are you coming? —You bet!", "—¿Vienes? —¡Y tanto!", "«¡Y tanto!» y «¡Ya lo creo!» son síes enfáticos coloquiales, como «You bet!».", ["—¿Vienes? —¡Ya lo creo!", "—¿Vienes? —¡Claro que sí!", "—¿Vienes? —¡Por supuesto!"]),
      wo("¡Vaya por Dios, otra vez se ha ido la luz!", "«¡Vaya por Dios!» expresa resignación ante un contratiempo menor; «irse la luz» = cortarse la electricidad.", "Oh great, the power's gone out again!"),
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
        [
          "Recuerda la regla: el grado de la negativa depende de dos preguntas. ¿Qué niego? Una oferta amable se rechaza con el «no» neutro (No, gracias); una suposición, con un no suave (Qué va, Para nada); una petición o propuesta que no voy a aceptar, con un no enfático (Ni hablar). ¿A quién? Con usted o en el trabajo, De ninguna manera o En absoluto; entre amigos, Ni loco o Ni muerto, que concuerdan con quien habla (ni loca, ni muerta). Un grado de más suena desproporcionado; uno de menos, tibio.",
          "Neutro: No, gracias. Coloquial suave: Qué va / Para nada (también niega una suposición: «—¿Estás enfadado? —Qué va»). Enfático: Ni hablar / De ninguna manera / En absoluto. Muy enfático y coloquial: Ni loco / Ni muerto / Ni de coña (vulgar, España). Con usted o en el trabajo: De ninguna manera / En absoluto.",
        ],
        [
          ["—¿Te molesta que abra la ventana? —Para nada.", "—Do you mind if I open the window? —Not at all."],
          ["De ninguna manera vamos a aceptar esas condiciones.", "We will by no means accept those conditions."],
        ],
        [
          mc(
            "En una reunión de trabajo, rechazo firme y adecuado:",
            ["De ninguna manera.", "Ni de coña.", "Ni muerto.", "Qué va, tío."],
            0,
            "«De ninguna manera» es enfático pero formal, apto para una reunión. «Ni de coña» es vulgar, «Ni muerto» es hiperbólico y coloquial, y «Qué va, tío» es demasiado informal."
          ),
          mc(
            "Tu amiga Lucía te propone pasar la Nochevieja en el aeropuerto para coger un vuelo barato. Respondes tú, que eres mujer, con el grado más enfático entre amigas:",
            ["¡Ni muerta!", "¡Ni muerto!", "No, gracias.", "En absoluto."],
            0,
            "Es una propuesta que no aceptarías nunca y hablas con una amiga: grado máximo y coloquial. «Ni muerto/muerta» concuerda con quien habla, así que una mujer dice «¡Ni muerta!». «No, gracias» es tibio para algo tan absurdo y «En absoluto» suena formal."
          ),
        ]
      ),
    ],
    [
      mc(
        "«—¿Te he despertado? —___, ya estaba levantada.» (niega la suposición sin dramatismo)",
        ["Qué va", "Ni muerta", "De ninguna manera", "Lo que faltaba"],
        0,
        "«Qué va» niega la suposición de forma suave y coloquial. «Ni muerta» y «De ninguna manera» son rechazos tajantes, desproporcionados aquí, y «Lo que faltaba» expresa fastidio."
      ),
      mc(
        "«—¿Le importa que me siente aquí? —___»",
        ["En absoluto, siéntese.", "Ni loco.", "Ni de broma.", "Ni hablar, tío."],
        0,
        "«En absoluto» responde con cortesía a «¿Le importa…?»: no me importa nada. «Ni loco» y «Ni de broma» dirían que no puede sentarse y además son coloquiales, y «Ni hablar, tío» es brusco e informal para un «usted»."
      ),
      { ...fb("Completa.", "—¿Vas a hacer puenting? —¡Ni ___! Me dan pánico las alturas.", "loco", "«¡Ni loco/loca!» es una negación enfática y coloquial: por nada del mundo."), altAnswers: ["loca", "muerto", "muerta"] },
      fb("Completa.", "De ninguna ___ pienso firmar ese documento.", "manera", "«De ninguna manera» es una negación enfática válida en registro formal."),
      mc(
        "Ordena de menos a más enfático: (a) Ni muerto (b) No (c) Ni hablar",
        ["b, c, a", "a, b, c", "c, a, b", "b, a, c"],
        0,
        "Escala: «No» es neutro, «Ni hablar» ya es enfático y «Ni muerto» es hiperbólico, el más fuerte. Las demás ordenaciones colocan «Ni muerto» antes que alguna de las formas más suaves."
      ),
      toEs("—Do you mind? —Not at all.", "—¿Te importa? —Para nada.", "«Para nada» y «En absoluto» responden negativamente a «¿Te importa?», es decir, dan permiso.", ["—¿Te importa? —En absoluto.", "—¿Le importa? —En absoluto.", "—¿Te molesta? —Para nada."]),
      wo("En absoluto, puede usted quedarse el tiempo que quiera.", "«En absoluto» niega con cortesía (= no me molesta nada) y es apto con usted; «el tiempo que quiera» va en subjuntivo porque esa duración no está determinada.", "Not at all, you can stay as long as you like."),
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
        [
          "Recuerda la regla: una buena reacción tiene dos partes. Primero, la exclamación que corresponde a la emoción que provoca la noticia (buena noticia → alegría; mala para quien habla → empatía; injusta → indignación; inevitable → resignación). Segundo, una continuación que demuestra interés: una pregunta (¿Qué le pasa?) o un comentario. Si la continuación expresa un sentimiento con «que», va en subjuntivo: me alegro de que hayas aprobado, espero que se recupere, qué pena que no puedas venir.",
          "En español, el oyente reacciona constantemente: sorpresa (¿En serio?, ¡No me digas!), empatía (¡Qué pena!, ¡Pobre!), alegría (¡Qué bien!, ¡Genial!), indignación (¡Qué fuerte!, ¡Qué morro!), resignación (Paciencia, Qué se le va a hacer). No reaccionar suena frío o desinteresado.",
        ],
        [
          ["—Me han robado la bici. —¡Qué rabia! ¿Dónde?", "—My bike got stolen. —That's so annoying! Where?"],
          ["—Se coló delante de todos. —¡Qué morro!", "—He cut in front of everyone. —What nerve!"],
        ],
        [
          mc(
            "«—Mi jefe se lleva el mérito de mi trabajo. —¡___!»",
            ["Qué morro tiene", "Qué bien", "Y tanto", "Ni en sueños"],
            0,
            "«¡Qué morro tiene!» critica el descaro de quien se aprovecha de otros (coloquial, España). «Qué bien» sería celebrarlo, «Y tanto» es afirmación y «Ni en sueños» es negación, que no encajan aquí."
          ),
          mc(
            "«—Al final no puedo ir a tu cumpleaños, tengo que trabajar. —¡Vaya! ___»",
            ["Qué pena que no puedas venir.", "Qué pena que no puedes venir.", "Qué bien que no puedas venir.", "Qué morro que no puedas venir."],
            0,
            "La noticia es mala para quien escucha: empatía (qué pena). Y como la continuación expresa un sentimiento con «que», el verbo va en subjuntivo: puedas. «Puedes» rompe esa regla; «qué bien» celebraría la ausencia y «qué morro» acusaría de descaro a quien solo tiene que trabajar."
          ),
        ]
      ),
    ],
    [
      mc(
        "«—Mi abuelo está en el hospital. —___»",
        ["¡Vaya, lo siento! ¿Cómo está?", "¡Qué fuerte, jaja!", "¡Y tanto!", "¡Ni hablar!"],
        0,
        "Ante una mala noticia se muestra empatía e interés: «¡Vaya, lo siento! ¿Cómo está?». «¡Qué fuerte, jaja!» frivoliza, y «¡Y tanto!» y «¡Ni hablar!» no tienen sentido como reacción."
      ),
      mc(
        "«—¡Nos casamos en junio! —___»",
        ["¡Qué alegría! ¡Enhorabuena!", "¡Qué rabia!", "¡Lo que faltaba!", "¡Qué le vamos a hacer!"],
        0,
        "Una boda se celebra con «¡Qué alegría! ¡Enhorabuena!». «¡Qué rabia!» y «¡Lo que faltaba!» expresan enfado y «¡Qué le vamos a hacer!» es resignación: todas serían reacciones ofensivas."
      ),
      mc(
        "«—Han subido el alquiler un 30 %. —___»",
        ["¡Qué fuerte! ¡Es un abuso!", "¡Qué bien!", "¡Ya lo creo!", "¡Anda, qué suerte!"],
        0,
        "Una subida abusiva provoca indignación: «¡Qué fuerte! ¡Es un abuso!». «¡Qué bien!» y «¡Anda, qué suerte!» la celebrarían, y «¡Ya lo creo!» es una afirmación sin sentido aquí."
      ),
      fb("Completa.", "—He perdido el tren. —Bueno, ___ se le va a hacer.", "qué", "«Qué se le va a hacer» es una fórmula de resignación con «qué» interrogativo-exclamativo."),
      fb("Completa.", "—Me ha tocado la lotería. —¿En ___? ¡No me lo creo!", "serio", "«¿En serio?» expresa sorpresa o incredulidad ante una noticia."),
      toEs("What nerve!", "¡Qué morro!", "«¡Qué morro!» y «¡Qué cara!» critican el descaro (coloquial, España); «¡Qué descaro!» es neutro.", ["¡Qué cara!", "¡Qué cara más dura!", "¡Qué descaro!"]),
      wo("¡No me digas que has vuelto a perder las llaves!", "«¡No me digas que + indicativo!» expresa sorpresa con reproche; «volver a + infinitivo» = hacer algo otra vez.", "Don't tell me you've lost your keys again!"),
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
        [
          "Recuerda la regla: el valor del diminutivo se deduce de las pistas del contexto, no del sufijo. Un vocativo cariñoso o un niño (cariño, mi abuelita) → afecto. Una petición (¿me haces un favorcito?) → cortesía. Una cantidad o un problema que se quiere quitar de en medio (un dolorcillo, nada grave) → minimizar. Una contradicción entre la palabra y la realidad (un chaletito de ocho habitaciones) → ironía. Una persona o profesión criticada (ese periodistilla) → desprecio. Y con adverbios (cerquita, tempranito), el diminutivo intensifica en lugar de reducir.",
          "Afectivo: «mi abuelita», «¿Quieres un cafecito?». Atenuador/cortés: «Espere un momentito», «¿Me hace un favorcito?». Minimizador: «un trabajillo», «un problemilla». Despectivo o irónico: «Vaya pisito se ha comprado» (puede ser admiración irónica), «el abogadillo ese». Intensivo en América: «ahorita» (ahora mismo o dentro de un rato, según el país), «cerquita».",
        ],
        [
          ["¿Me esperas un momentito?", "Can you wait just a moment?"],
          ["Tengo un problemilla con el ordenador.", "I've got a little problem with the computer."],
        ],
        [
          mc(
            "Un cliente muy enfadado dice: «Ese abogaducho no ha leído ni el contrato». ¿Qué pista decide el valor de «abogaducho»?",
            ["Se critica a una persona por su profesión: valor despectivo", "Hay una petición: valor cortés", "Hay un vocativo cariñoso: valor afectivo", "La palabra contradice la realidad: valor irónico"], 0,
            "La pista es la crítica a una persona por cómo ejerce su profesión («no ha leído ni el contrato»): el sufijo -ucho, como -illo en «abogadillo», es despectivo. No hay petición ni cariño, y no se trata de un abogado brillante llamado así por ironía."
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
      fb("Suaviza.", "¿Me haces un favor? → ¿Me haces un ___?", "favorcito", "El diminutivo cortés «favorcito» suaviza la petición y resta importancia al favor."),
      { ...fb("Minimiza.", "Tengo una duda. → Tengo una ___. (diminutivo minimizador)", "dudilla", "«Dudilla» (o «dudita») minimiza la duda para no parecer que se molesta demasiado."), altAnswers: ["dudita"] },
      mc(
        "«Se ha comprado un cochecito…» (dicho de un deportivo carísimo) es…",
        ["ironía", "tamaño real", "desprecio literal", "afecto infantil"],
        0,
        "Diminutivo irónico: llamar «cochecito» a un deportivo carísimo resalta, por contraste, lo contrario. No describe el tamaño real, no es desprecio literal ni afecto infantil."
      ),
      mc(
        "En México, «ahorita» puede significar…",
        ["ahora mismo o dentro de un rato", "nunca", "ayer", "muy tarde"],
        0,
        "En México, «ahorita» depende del contexto: puede significar «ahora mismo» o «dentro de un rato» (a veces largo). No significa «nunca», «ayer» ni «muy tarde» de forma literal."
      ),
      toEs("Would you like a little glass of wine? (affectionate)", "¿Quieres un vinito?", "Diminutivo afectivo y hospitalario: «vinito» no habla del tamaño de la copa, sino de la cordialidad de la invitación. La pista es que se ofrece algo a un invitado.", ["¿Te apetece un vinito?", "¿Quiere un vinito?"]),
      wo("Tengo un trabajillo los sábados para sacarme un dinerillo.", "«Trabajillo» y «dinerillo» (-illo) restan importancia: un trabajo menor y una cantidad modesta; «sacarse un dinero» = ganarlo.", "I have a little job on Saturdays to earn a bit of money."),
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
        "La regla: el aumentativo no solo «agranda»; su valor depende de la base. Si la base es algo con lo que se golpea (puerta, codo, martillo, balón), -azo nombra el golpe: portazo, codazo, martillazo. Si la base es algo que se valora, -azo/-aza expresa tamaño o admiración: cochazo, casaza. Si la base es un verbo, -ón/-ona crea a la persona que hace algo en exceso: mirar → mirón, llorar → llorón, comer → comilón. -ote/-ota agranda con matiz despectivo o cariñoso (librote, grandote). Y -ísimo no va con nombres: es el superlativo absoluto del adjetivo (carísimo, rapidísimo). Por qué importa: «un balonazo» no es un balón grande sino un golpe, y «muy carísimo» sobra, porque -ísimo ya es el grado máximo. Ortografía: el sonido se conserva (rico → riquísimo, largo → larguísimo, feliz → felicísimo).",
        [
          ["Dio un portazo y se fue.", "He slammed the door and left. (puerta + -azo: el golpe, no una puerta grande)"],
          ["¡Menudo cochazo se ha comprado!", "What a car he's bought! (coche + -azo: admiración por el coche)"],
          ["Su hijo es un dormilón: nunca se levanta antes de las doce.", "Their son is a sleepyhead: he never gets up before twelve. (dormir + -ón: quien lo hace en exceso)"],
          ["El examen fue facilísimo.", "The exam was dead easy. (-ísimo: grado máximo de un adjetivo)"],
        ],
        [
          mc(
            "«Un sartenazo» es…",
            ["un golpe dado con una sartén", "una sartén enorme", "una persona que cocina mucho", "una sartén muy cara"],
            0,
            "La sartén es un objeto con el que se puede golpear, así que -azo nombra el golpe, como portazo o martillazo. «Una sartén enorme» sería el valor de tamaño, que con esta base no es el habitual; la persona que hace algo en exceso se forma con -ón sobre un verbo, no con -azo."
          ),
          mc(
            "Alguien que se queja por todo es un…",
            ["quejón", "quejazo", "quejote", "quejísimo"],
            0,
            "La base es un verbo (quejarse), y -ón sobre un verbo crea a la persona que lo hace en exceso: quejón, como llorón o preguntón. -azo daría un golpe, -ote un tamaño con matiz, y -ísimo solo se une a adjetivos."
          ),
        ]
      ),
    ],
    [
      mc(
        "«Un frenazo» es…",
        ["una frenada brusca", "un freno grande", "un freno roto", "una marca de frenos"],
        0,
        "Con verbos o acciones, -azo indica la acción brusca: un frenazo es una frenada repentina. No es «un freno grande» (el valor de tamaño no encaja aquí), ni un freno roto ni una marca."
      ),
      mt(
        "Relaciona la palabra con su significado.",
        [
          ["codazo", "golpe con el codo"],
          ["mirón", "persona que mira con curiosidad"],
          ["comilón", "persona que come mucho"],
          ["grandote", "muy grande (afectivo)"],
        ],
        "Cada sufijo aporta un valor distinto: codazo (-azo sobre algo con lo que se golpea: el golpe), mirón y comilón (-ón sobre un verbo: quien lo hace en exceso), grandote (-ote: tamaño con matiz afectivo)."
      ),
      fb("Completa.", "Se enfadó y dio un ___. (golpe de puerta)", "portazo", "Puerta + -azo = portazo, el golpe fuerte que se da al cerrar una puerta."),
      fb("Completa.", "Mi sobrino es un ___: pregunta por todo. (sufijo de persona que hace algo en exceso)", "preguntón", "El sufijo -ón con verbos forma adjetivos de persona que hace algo en exceso: preguntón."),
      fb("Completa.", "Esta chaqueta es ___: cuesta 800 euros. (caro, superlativo)", "carísima", "Superlativo absoluto con -ísimo: caro → carísima, en femenino porque concuerda con «chaqueta»."),
      ms(
        "¿Qué palabras en -azo indican un golpe?",
        ["martillazo", "puñetazo", "cochazo", "balonazo"],
        [0, 1, 3],
        "«Martillazo», «puñetazo» y «balonazo» son golpes dados con el martillo, el puño o el balón. «Cochazo» usa -azo como aumentativo valorativo (un coche impresionante), no como golpe."
      ),
      toEs("He slammed on the brakes.", "Dio un frenazo.", "«Dar/pegar un frenazo»: -azo expresa la acción brusca de frenar.", ["Pegó un frenazo.", "Dio un frenazo en seco."]),
      wo("El bebé es un comilón y un llorón, pero es un encanto.", "Con -ón, el verbo forma un sustantivo de persona que hace algo en exceso: comer → comilón, llorar → llorón.", "The baby eats a lot and cries a lot, but he's a delight."),
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
        ["Dos ideas distintas. 1) La variante regional no cambia el significado, solo delata el origen: -ito es la forma general; -ico aparece en Aragón, Murcia y Navarra y, tras una raíz en -t-, en Costa Rica, Colombia, Venezuela o Cuba (rato → ratico, momento → momentico); -ín es la de Asturias y León (guapín, pequeñín); -ete es más productivo en Cataluña y Levante, aunque «amiguete» se oye en toda España. En México y los Andes -ito se usa con especial intensidad, hasta en adverbios (ahorita, ahoritita).", "2) Un diminutivo está lexicalizado cuando ya nombra otra cosa. La prueba: ¿puedes cambiarlo por «X pequeño»? Una ventanilla no es una ventana pequeña, un bolsillo no es una bolsa pequeña, un pañuelo no es un paño pequeño: son palabras nuevas, como mesilla, cigarrillo, panecillo, bocadillo o zapatilla. Por qué importa: si lo lees como diminutivo, entiendes mal la frase; y si dices «la bolsa pequeña del abrigo» en lugar de «el bolsillo», no suenas natural."],
        [
          ["Pura vida, mae, espéreme un momentico. (Costa Rica)", "All good, man, just give me a moment. (momento: raíz en -t-, así que -ico)"],
          ["¡Qué pequeñín está el bebé! (Asturias)", "The baby is so tiny! (-ín: mismo valor que -ito, otro origen)"],
          ["¿Dónde dejé el cargador? En la mesilla.", "Where did I leave the charger? On the nightstand. (lexicalizado: un mueble concreto, no una mesa pequeña)"],
        ],
        [
          mc(
            "¿En qué frase el diminutivo está lexicalizado?",
            ["Se ha fundido la bombilla del pasillo.", "Tráele una sillita al bebé.", "Me tomé un cafecito con ella.", "Vive en una casita junto al río."],
            0,
            "Aplica la prueba: una bombilla no es «una bomba pequeña», sino un objeto distinto, así que está lexicalizada. Una sillita, un cafecito y una casita sí son «una silla, un café, una casa» pequeños o queridos: diminutivos vivos."
          ),
          mc(
            "Un hablante dice: «Estoy cansadico, me voy a dormir». ¿De dónde es probablemente?",
            ["de Aragón o Murcia", "de Buenos Aires", "de Asturias", "de Madrid"],
            0,
            "-ico tras una raíz sin -t- (cansad-ico) es típico de Aragón, Murcia y Navarra. En Asturias se diría «cansadín», y en Buenos Aires o Madrid lo normal es «cansadito»."
          ),
        ]
      ),
    ],
    [
      mc(
        "Los costarricenses son llamados «ticos» por…",
        ["su uso frecuente del diminutivo -ico", "su capital", "un plato típico", "su bandera"],
        0,
        "A los costarricenses los llaman «ticos» por su uso frecuente del diminutivo -ico tras -t- (chiquitico, momentico). El apodo no viene de su capital, de un plato ni de la bandera."
      ),
      mc(
        "¿Qué palabra está lexicalizada (ya no significa «pequeño»)?",
        ["ventanilla", "casita", "perrito", "gatito"],
        0,
        "«Ventanilla» está lexicalizada: designa la ventana de un vehículo o de atención al público, no una ventana pequeña. «Casita», «perrito» y «gatito» siguen siendo diminutivos con valor de tamaño o afecto."
      ),
      mc(
        "«Qué guapín vas hoy» suena típico de…",
        ["Asturias", "Argentina", "México", "Canarias"],
        0,
        "El diminutivo -ín (guapín, pequeñín) es típico de Asturias. En Argentina y Canarias domina -ito y en México -ito/-ita; ninguno de esos lugares usa -ín como rasgo característico."
      ),
      fb("Completa (lexicalizado).", "Guarda el móvil en el ___ del pantalón.", "bolsillo", "«Bolsillo» nació como diminutivo de «bolsa», pero hoy es una palabra independiente."),
      fb("Completa (lexicalizado).", "Me he comprado unas ___ para correr.", "zapatillas", "Lexicalizado: una zapatilla es un calzado deportivo o de casa, no un zapato pequeño."),
      ms(
        "¿Qué palabras son diminutivos lexicalizados?",
        ["cigarrillo", "bocadillo", "pañuelo", "gatito"],
        [0, 1, 2],
        "«Cigarrillo», «bocadillo» y «pañuelo» ya son palabras independientes, no versiones pequeñas de cigarro, bocado o paño. «Gatito» sigue siendo un diminutivo productivo (gato pequeño)."
      ),
      mc(
        "«Espérame un momentico» es típico de…",
        ["Colombia o Costa Rica", "Argentina", "España central", "Chile"],
        0,
        "El diminutivo -ico tras t (momentico) es típico de Colombia, Costa Rica, Venezuela y Cuba. En Argentina, España central y Chile se diría «momentito»."
      ),
      wo("Tengo un amiguete que te puede echar una mano.", "«Amiguete» (-ete) es un diminutivo coloquial con matiz jocoso o de camaradería; «echar una mano» = ayudar.", "I've got a mate who can give you a hand."),
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
        ["Recuerda la regla: en una reunión cada modismo resume una postura (rendirse, recortar, arriesgarse, aprobar) y su forma es fija: se conjuga el verbo, pero no se cambian el sustantivo ni el artículo (dar luz verde, no «dar la luz verde»). Cuando se propone algo en grupo, el verbo va en subjuntivo de «nosotros»: pongamos, no tiremos, no nos andemos.", "Lee la reunión y fíjate en qué propone cada persona: —Directora: Vamos al grano: el proyecto está en números rojos. —Director financiero: Propongo cortar por lo sano y cerrar la línea. —Jefa de producto: No tiremos la toalla todavía; pongamos las cartas sobre la mesa con el cliente. —Directora: De acuerdo. Si en un mes no hay mejora, nos apretaremos el cinturón."],
        [
          ["Estar en números rojos.", "To be in the red."],
          ["Cortar por lo sano.", "To take drastic action to stop a problem."],
          ["Tener la sartén por el mango.", "To have the upper hand."],
          ["Lanzarse a la piscina.", "To take the plunge."],
          ["Dar luz verde.", "To give the green light."],
          ["No andarse por las ramas.", "Not to beat about the bush."],
        ],
        [
          mc(
            "«Vamos al grano» significa…",
            ["hablemos directamente de lo importante", "vamos al campo", "hagamos una pausa", "vamos a comer"],
            0,
            "«Ir al grano» es hablar directamente de lo esencial sin rodeos. No tiene que ver con ir al campo, hacer una pausa ni comer: el «grano» es lo importante frente a la paja."
          ),
          mc(
            "En la reunión, ¿qué postura defiende la jefa de producto?",
            ["seguir intentándolo y hablar con franqueza con el cliente", "cerrar la línea cuanto antes", "recortar gastos de inmediato", "esperar sin hacer nada"],
            0,
            "«No tiremos la toalla» = no nos rindamos, y «pongamos las cartas sobre la mesa» = seamos transparentes con el cliente. Cerrar la línea es lo que propone el director financiero («cortar por lo sano») y recortar gastos es el plan B de la directora («nos apretaremos el cinturón»)."
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
        "Tirar la toalla = rendirse (como en el boxeo); apretarse el cinturón = gastar menos; poner las cartas sobre la mesa = ser transparente; números rojos = pérdidas."
      ),
      fb("Completa.", "El consejo dio ___ verde al proyecto. (aprobar)", "luz", "«Dar luz verde» a algo es aprobarlo o autorizarlo, como el semáforo que permite avanzar."),
      fb("Completa.", "Si no funciona, cortaremos por lo ___.", "sano", "«Cortar por lo sano» es tomar una medida drástica para acabar de raíz con un problema."),
      mc(
        "¿Quién «tiene la sartén por el mango» en una negociación?",
        ["quien tiene el control", "quien cocina", "quien pierde", "quien llega tarde"],
        0,
        "«Tener la sartén por el mango» es tener el control de la situación. No se refiere a quien cocina de verdad, y es lo contrario de quien pierde; llegar tarde no tiene nada que ver."
      ),
      mc(
        "«Nos hemos lanzado a la piscina con este mercado» significa…",
        ["nos hemos arriesgado", "hemos fracasado", "hemos ganado mucho", "hemos ido de vacaciones"],
        0,
        "«Lanzarse a la piscina» es arriesgarse, dar un paso atrevido sin garantías. No dice si el resultado ha sido un fracaso o un gran beneficio, ni habla de vacaciones."
      ),
      toEs("Let's get straight to the point.", "Vayamos al grano.", "«Ir al grano»: «vamos» es la forma exhortativa habitual de «ir»; «vayamos» suena algo más formal.", ["Vamos al grano.", "Vayamos directamente al grano."]),
      wo("La junta ha dado luz verde a la ampliación del almacén.", "«Dar luz verde a algo» = aprobarlo: «ha dado» + «luz verde» (sin artículo) + «a» + lo aprobado.", "The board has given the green light to the warehouse expansion."),
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
        ["La regla: el modismo funciona en el pasillo porque evoca una imagen; el informe necesita lo contrario, precisión y distancia. Para pasar del uno al otro: 1) quita la imagen y di lo que significa (salvar los muebles → evitar pérdidas mayores); 2) cambia el «nosotros» por la empresa o por una forma impersonal (se ha producido, conviene); 3) usa sustantivos y verbos exactos (atravesar dificultades, fuente de ingresos). Del informe al pasillo se hace al revés: busca el modismo cuya imagen resume la idea.", "«Hemos dado un giro de 180 grados» → «Se ha producido un cambio radical de estrategia». «Hay que hacer borrón y cuenta nueva» → «Conviene empezar de cero, dejando atrás los errores». «Nos ha salvado los muebles» → «Ha evitado pérdidas mayores». «Ese producto es la gallina de los huevos de oro» → «Es nuestra principal fuente de ingresos»."],
        [
          ["Salvar los muebles.", "To save what can be saved. (informe: evitar pérdidas mayores)"],
          ["Dar un giro de 180 grados.", "To do a U-turn. (informe: un cambio radical de estrategia)"],
        ],
        [
          mc(
            "Un modismo nuevo. Versión de informe de «Con la crisis, el proyecto se fue a pique»:",
            ["La crisis provocó el fracaso del proyecto.", "Con la crisis, el proyecto se hundió en el mar.", "Con la crisis, el proyecto se nos fue de las manos, jefe.", "La crisis dio un empujón al proyecto."],
            0,
            "«Irse a pique» (la imagen del barco que se hunde) significa fracasar. El informe quita la imagen y usa un sustantivo preciso con la causa como sujeto: «provocó el fracaso». «Se hundió en el mar» es la lectura literal, la tercera opción sigue siendo coloquial y la cuarta dice lo contrario."
          ),
        ]
      ),
    ],
    [
      mc(
        "Versión de informe de «Estamos con el agua al cuello»:",
        ["La empresa atraviesa graves dificultades financieras.", "Estamos mojados.", "Nos ahogamos, jefe.", "Tenemos problemas de fontanería."],
        0,
        "En un informe, el modismo «con el agua al cuello» se traduce a registro ejecutivo: «graves dificultades financieras», con la empresa como sujeto. «Estamos mojados» y «problemas de fontanería» son lecturas literales, y «Nos ahogamos, jefe» es coloquial."
      ),
      fb("Completa el modismo.", "Hicimos borrón y cuenta ___. → Empezamos de cero.", "nueva", "«Hacer borrón y cuenta nueva» es olvidar lo pasado y empezar de cero."),
      fb("Completa el modismo.", "La campaña salvó los ___. → Evitó pérdidas mayores.", "muebles", "«Salvar los muebles» es rescatar lo esencial de un desastre y evitar pérdidas mayores."),
      fb("Pásalo a registro de pasillo (coloquial).", "Es nuestra principal fuente de ingresos. → Es la gallina de los huevos de ___.", "oro", "«La gallina de los huevos de oro» es la fuente de beneficios que hay que cuidar (registro coloquial, de pasillo)."),
      mc(
        "«Sacar las castañas del fuego a alguien» significa…",
        ["resolverle un problema que no es tuyo", "cocinar para alguien", "despedir a alguien", "ganar dinero rápido"],
        0,
        "«Sacarle a alguien las castañas del fuego» es resolverle un problema que no es tuyo, a menudo con riesgo propio. No es cocinar para alguien, despedirlo ni ganar dinero rápido."
      ),
      mc(
        "«Ser un pez gordo» significa…",
        ["ser una persona importante e influyente", "estar gordo", "ser pescador", "ser un mal jefe"],
        0,
        "«Un pez gordo» es una persona importante e influyente. No se refiere al peso («estar gordo»), a un pescador ni a que sea mal jefe."
      ),
      toEs("The company has made a U-turn in its strategy.", "La empresa ha dado un giro de 180 grados en su estrategia.", "«Dar un giro de 180 grados» es cambiar radicalmente de rumbo, como «make a U-turn».", ["La empresa ha dado un giro radical en su estrategia.", "La compañía ha dado un giro de 180 grados en su estrategia."]),
      wo("Nuestro socio nos sacó las castañas del fuego con ese contrato.", "«Sacarle a alguien las castañas del fuego» = resolverle un problema; el pronombre (nos) va delante del verbo conjugado.", "Our partner got us out of trouble with that contract."),
    ]
  ),
  L(
    "business-idioms-2",
    "c2r-business-idioms-error-hunt",
    "Caza de errores: modismos de empresa mal usados",
    "«Dar luz blanca», «tirar la servilleta», «estar en números verdes»: repara los modismos alterados.",
    "6 min",
    [
      sec(
        "Formas fijas",
        ["Recuerda la regla: un modismo es una pieza fija. Se conjuga el verbo y concuerda lo que tiene que concordar (nos apretamos, se apretarán), pero no se cambian el sustantivo, el color, el objeto ni la preposición, porque la imagen solo funciona entera: dar luz verde (no «luz blanca»), tirar la toalla (no «la servilleta»), apretarse el cinturón (no «los pantalones»).", "Por qué se equivoca uno: por analogía o por calco. Lo contrario de «números rojos» no es «números verdes», sino «tener beneficios» o «estar en positivo»; y el inglés «in the black» tampoco da «números negros». Un hablante nativo detecta enseguida el cambio, y el modismo alterado suena a chiste o a error."],
        [
          ["✗ Tiramos la servilleta. → ✓ Tiramos la toalla.", "We threw in the towel. (cambiar el objeto rompe la imagen del boxeo)"],
          ["✗ Este año estamos en números verdes. → ✓ Este año tenemos beneficios.", "This year we're making a profit. (no existe el contrario «en color»)"],
        ],
        [
          mc(
            "Lo contrario de «estar en números rojos»:",
            ["tener beneficios (estar en positivo)", "estar en números verdes", "estar en números azules", "tener números blancos"],
            0,
            "Lo contrario de estar en números rojos (con pérdidas) es tener beneficios. «Números verdes», «azules» o «blancos» no son modismos fijos, y «estar en positivo» es una alternativa coloquial igualmente válida."
          ),
          mc(
            "Un modismo que no está en la lección: «En la rueda de prensa, el director no contestó: se dedicó a echar ___ fuera».",
            ["balones", "pelotas", "bolas", "globos"],
            0,
            "«Echar balones fuera» (eludir una pregunta o una responsabilidad, como el defensa que despeja el balón) es una forma fija: aunque «pelotas» o «bolas» se parezcan, cambian la pieza y el modismo deja de reconocerse."
          ),
        ]
      ),
    ],
    [
      fb("Corrige.", "La dirección dio luz ___ al proyecto. (el alumno puso: blanca)", "verde", "La expresión fija es «dar luz verde» (aprobar), no «luz blanca»."),
      fb("Corrige.", "No podemos tirar la ___ ahora. (el alumno puso: servilleta)", "toalla", "La expresión fija es «tirar la toalla» (rendirse, como en el boxeo), no «la servilleta»."),
      fb("Corrige.", "Toca apretarse el ___. (el alumno puso: pantalón)", "cinturón", "La expresión fija es «apretarse el cinturón» (reducir gastos), no «el pantalón» ni «los pantalones»."),
      fb("Corrige.", "Hay que poner las ___ sobre la mesa. (el alumno puso: fichas)", "cartas", "La forma fija es «poner las cartas sobre la mesa» (ser transparente en una negociación); no se dice «las fichas»."),
      mc(
        "¿Cuál es correcto?",
        ["ir al grano", "ir a la semilla", "ir al trigo", "ir al granito"],
        0,
        "La forma fija es «ir al grano». «Ir a la semilla», «al trigo» o «al granito» cambian una palabra de la locución y dejan de ser idiomáticas."
      ),
      ms(
        "¿Qué modismos están bien formados?",
        ["cortar por lo sano", "tener la sartén por el mango", "lanzarse a la bañera", "salvar los muebles"],
        [0, 1, 3],
        "«Cortar por lo sano», «tener la sartén por el mango» y «salvar los muebles» están bien formados. «Lanzarse a la bañera» no existe: el modismo es «lanzarse a la piscina»."
      ),
      wo("Tras dos años en números rojos, la empresa por fin tiene beneficios.", "«Estar en números rojos» = tener pérdidas; lo contrario, en registro neutro, es «tener beneficios» (no «números verdes»).", "After two years in the red, the company is finally making a profit."),
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
        ["Recuerda la regla: una palabra desconocida casi nunca está sola. Busca cuatro pistas: su función en la frase (nombre, verbo, adjetivo), su forma (des- 'lo contrario', in- 'no', -ble 'que se puede', -azo 'golpe', -ción 'acción'), las señales de contraste o de paráfrasis que la rodean («sino», «lejos de», «es decir», «o sea», los dos puntos) y lo que sabes del mundo.", "Por qué funcionan las señales: «sino» y «lejos de» anuncian lo contrario de lo que se niega, así que la palabra nueva significa lo opuesto; «es decir» y los dos puntos anuncian lo mismo con otras palabras. Ejemplo: «El guiso estaba tan desabrido que tuvimos que echarle sal» → si hubo que añadir sal, desabrido = sin sabor."],
        [
          ["Estaba tan desabrido que tuvimos que echarle sal.", "It was so bland we had to add salt. (la consecuencia revela el sentido)"],
          ["No era un simple enfado, sino una auténtica inquina.", "It wasn't just anger, but real animosity. (sino: algo más fuerte que el enfado)"],
          ["Una mancha indeleble: ni con lejía se fue.", "An indelible stain: not even bleach got it out. (in- 'no' + -ble 'que se puede')"],
        ],
        [
          mc(
            "«Era un hombre tan pusilánime que no se atrevía ni a devolver un plato frío.» Pusilánime =",
            ["cobarde, falto de ánimo", "valiente", "hambriento", "maleducado"],
            0,
            "El contexto (no se atreve ni a devolver un plato frío) describe falta de valor: pusilánime = cobarde. «Valiente» es lo contrario, y nada sugiere que tenga hambre o sea maleducado."
          ),
        ]
      ),
    ],
    [
      mc(
        "«La reunión fue un galimatías: nadie entendía qué se proponía.» Galimatías =",
        ["discurso confuso e incomprensible", "fiesta", "acuerdo claro", "pelea física"],
        0,
        "Tras los dos puntos, la segunda parte (nadie entendía nada) explica la primera: un galimatías es un discurso confuso. No es una fiesta, un acuerdo claro ni una pelea física."
      ),
      mc(
        "«Tras la riada, el pueblo quedó anegado durante días.» Anegado =",
        ["inundado", "seco", "abandonado", "quemado"],
        0,
        "«Riada» (crecida de un río) anticipa agua: anegado = inundado. «Seco» sería lo contrario, y ni «abandonado» ni «quemado» encajan con una riada."
      ),
      mc(
        "«Lejos de ser un vago, era un hombre diligente que nunca dejaba nada a medias.» Diligente =",
        ["trabajador y cuidadoso", "perezoso", "rico", "distraído"],
        0,
        "«Lejos de ser un vago» anuncia lo contrario de la pereza: diligente = trabajador y cuidadoso. «Perezoso» es justo lo que se niega, y «rico» o «distraído» no encajan con «nunca dejaba nada a medias»."
      ),
      mc(
        "«Su tono displicente, casi de desprecio, molestó a todos.» Displicente =",
        ["desdeñoso, indiferente", "alegre", "tímido", "amable"],
        0,
        "La paráfrasis «casi de desprecio» aclara el sentido: displicente = desdeñoso, indiferente. «Alegre», «tímido» y «amable» no molestarían a nadie ni se parecen al desprecio."
      ),
      ms(
        "¿Qué pistas son útiles para inferir significados?",
        ["los conectores de contraste", "los prefijos y sufijos", "las paráfrasis cercanas", "el número de sílabas"],
        [0, 1, 2],
        "Los conectores de contraste, los prefijos y sufijos y las paráfrasis cercanas dan pistas sobre el significado. El número de sílabas no dice nada del sentido de una palabra."
      ),
      fb("Deduce por morfología.", "Algo que no se puede creer es ___. (in- + creer + -ble)", "increíble", "in- (negación) + cre(er) + -ible (que se puede): increíble, con tilde en la í del hiato."),
      wo("No era timidez, sino una profunda desconfianza hacia los desconocidos.", "«No era X, sino Y»: «sino» corrige la negación y la segunda parte aclara el sentido de la primera; «hacia» introduce a quién se dirige el sentimiento (desconfianza hacia los desconocidos).", "It wasn't shyness but a deep mistrust of strangers."),
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
        ["La regla: el registro habitual entre dos personas es la línea de base, y lo que comunica es el desvío. Subir el registro (del tú al usted, del nombre a «señor + apellido») crea distancia: enfado, frialdad, autoridad. Bajarlo (de lo formal a lo coloquial, «entre nosotros») crea cercanía: complicidad, sinceridad. Y un registro desproporcionado para la situación («Su Excelencia» para un adolescente) produce ironía. Por qué se nota tanto en español: el trato no está solo en el pronombre, sino en el verbo, los posesivos y los imperativos (mira / mire, te / le, tu / su), así que el cambio afecta a toda la frase.", "Ejemplos: «Mire usted, no le consiento…» (enfado y distancia); «Entre nosotros, esto es un marrón» (complicidad); «Su Excelencia ha decidido levantarse» (ironía)."],
        [
          ["—Oye, Luis… —Perdone, ¿desde cuándo nos tuteamos?", "—Hey, Luis… —Excuse me, since when are we on first-name terms?"],
          ["Entre tú y yo, el informe es un churro.", "Between you and me, the report is a mess."],
        ],
        [
          mc(
            "Una madre que suele tutear a su hijo le dice: «Usted se va a su cuarto ahora mismo.» Comunica…",
            ["enfado y autoridad", "respeto cariñoso", "que no lo conoce", "una broma sin importancia"],
            0,
            "Pasar del tú al usted con un hijo marca distancia y comunica enfado y autoridad. No es respeto cariñoso, evidentemente lo conoce, y el tono del imperativo no es de broma."
          ),
        ]
      ),
    ],
    [
      mc(
        "«Su Majestad ha decidido por fin levantarse», dicho a un adolescente, es…",
        ["irónico", "respetuoso", "formal y serio", "un error de registro"],
        0,
        "Usar un tratamiento solemne con un adolescente que se levanta tarde es irónico: registro elevado con intención burlona. No es respetuoso ni serio, y el cambio de registro es intencionado, no un error."
      ),
      mc(
        "En una reunión formal, alguien dice: «Bueno, entre nosotros, esto es un marrón». Busca…",
        ["complicidad y sinceridad", "ofender", "cerrar la reunión", "cambiar de idioma"],
        0,
        "Pasar a un registro coloquial («entre nosotros», «un marrón») en una reunión formal busca complicidad y sinceridad. No pretende ofender, cerrar la reunión ni cambiar de idioma."
      ),
      fb("Completa.", "Mire ___, no le consiento que me hable así.", "usted", "En plena discusión, pasar a «usted» («Mire usted…») marca distancia y enfado."),
      { ...fb("Completa (coloquial).", "Entre tú y yo, ese informe es un ___. (algo mal hecho; coloquial, España)", "churro", "«Un churro» es, en España coloquial, algo mal hecho, una chapuza."), altAnswers: ["desastre", "mamarracho"] },
      ms(
        "¿Qué puede indicar un cambio repentino de registro?",
        ["enfado o distancia", "complicidad", "ironía", "un cambio de idioma"],
        [0, 1, 2],
        "Un cambio repentino de registro puede indicar enfado o distancia, complicidad o ironía. Cambiar de registro no implica cambiar de idioma."
      ),
      toEs("Since when are we on first-name terms?", "¿Desde cuándo nos tuteamos?", "«Tutearse» es tratarse de tú; la pregunta irónica rechaza una confianza que no se ha concedido.", ["¿Desde cuándo nos tuteamos usted y yo?"]),
      wo("Cuando se enfada con su hermano, de repente empieza a hablarle de usted.", "«Hablarle de usted» (le = a su hermano) marca distancia; «empezar a» + infinitivo, y «de repente» suele ir antes del verbo.", "When she gets angry with her brother, she suddenly starts using usted with him."),
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
        ["La regla: dos frases seguidas sin conector no son dos datos sueltos; el lector tiene que reponer la relación, y la pista está en lo que esperaríamos. Si la segunda frase cumple lo esperable a partir de la primera, la relación es de causa y consecuencia (como…, así que…, por tanto). Si lo contradice, es concesión o contraste (aunque…, sin embargo, aun así). Si compara dos sujetos, es contraste (mientras que, en cambio).", "Los buenos ensayistas yuxtaponen: «Llovía a mares. El partido se jugó» (lo esperable era suspenderlo: concesión, aunque llovía). «Había perdido el trabajo. Vendió el coche» (lo esperable: causa-consecuencia, como / así que). «Unos trabajan; otros cobran» (contraste: mientras que). Ojo con el orden: la causa antepuesta va con «como»; pospuesta, con «porque», «ya que» o «puesto que»."],
        [
          ["Llovía a mares. El partido se jugó. → Aunque llovía a mares, el partido se jugó.", "Although it was pouring, the match was played."],
          ["No había estudiado. Suspendió. → Como no había estudiado, suspendió.", "Since he hadn't studied, he failed."],
        ],
        [
          mc(
            "«La empresa ganó millones. Despidió a cien empleados.» Relación implícita:",
            ["concesión/contraste (a pesar de ganar, despidió)", "causa", "finalidad", "condición"],
            0,
            "Ganar millones y despedir a cien empleados es una paradoja: la relación es concesiva (a pesar de ganar, despidió). No es causa ni finalidad (los beneficios no motivan el despido) ni una condición."
          ),
        ]
      ),
    ],
    [
      { ...fb("Explicita.", "Tenía fiebre. Fue a trabajar. → ___ tenía fiebre, fue a trabajar.", "Aunque", "Concesión: «Aunque» + indicativo presenta un hecho real (tenía fiebre) que no impide la acción principal; «A pesar de que» y «Pese a que» también valen."), altAnswers: ["A pesar de que", "Pese a que", "Aun cuando"] },
      { ...fb("Explicita.", "Se quedó sin batería. No pudo avisarnos. → Se quedó sin batería, ___ que no pudo avisarnos.", "así", "Consecuencia: «así que» introduce el resultado de lo anterior (se quedó sin batería)."), altAnswers: ["de modo", "de manera"] },
      fb("Explicita.", "Unos se esfuerzan; otros se llevan el mérito. → Unos se esfuerzan, ___ que otros se llevan el mérito.", "mientras", "Contraste: «mientras que» opone dos situaciones simultáneas."),
      mc(
        "«Nadie contestó al teléfono. La oficina estaba cerrada.» La segunda frase…",
        ["explica la causa de la primera", "es una consecuencia", "contradice la primera", "es una condición"],
        0,
        "La oficina cerrada explica por qué nadie contestó: es la causa implícita, aunque aparezca después. No es una consecuencia ni una condición, y no contradice la primera frase, sino que la justifica."
      ),
      mc(
        "«Prometió cambiar. Tres semanas después, volvió a las andadas.» Conector implícito:",
        ["sin embargo", "por eso", "es decir", "además"],
        0,
        "Entre la promesa de cambiar y volver a las andadas hay contraste: sin embargo. «Por eso» indicaría causa, «es decir» una reformulación y «además» una suma, y ninguno refleja la contradicción."
      ),
      toEs("Although he had a fever, he went to work.", "Aunque tenía fiebre, fue a trabajar.", "Concesión explícita: «Aunque» o «A pesar de que» + verbo conjugado, o «Pese a» + infinitivo.", ["A pesar de que tenía fiebre, fue a trabajar.", "Pese a tener fiebre, fue a trabajar."]),
      wo("Como nadie había reservado mesa, acabamos cenando en casa.", "«Como» introduce la causa y va al principio de la oración: Como nadie había reservado…, acabamos…", "Since nobody had booked a table, we ended up having dinner at home."),
    ]
  ),
  L(
    "listening-reading-strategies-4",
    "c2r-strategy-fast-speech",
    "Clasificación: el habla rápida real",
    "«Pa' que», «to' el mundo», «cansao», «¿cómo estás?» → «¿cómo ehtá?»: reconoce las reducciones del español hablado.",
    "7 min",
    [
      sec(
        "Fenómenos del habla espontánea",
        ["La regla: al hablar deprisa se debilita lo que menos información aporta. Cae la -d- entre vocales, sobre todo en -ado (cansado → cansao, nada → na); se acortan palabras muy frecuentes (para → pa, todo → to); en muchas zonas (Andalucía, Canarias, el Caribe, el Cono Sur) la -s final de sílaba se aspira o se pierde (¿cómo estás? → ¿cómo ehtá?); y las palabras se funden cuando chocan vocales (para el → pal, para allá → pallá).", "Para entender, repón mentalmente lo que falta: la gramática no cambia (pa' que vivas sigue llevando subjuntivo). Para escribir, recupera siempre la forma plena, salvo en un chat o en un diálogo coloquial. Y cuidado con la ultracorrección: por miedo al «-ao», hay quien añade una -d- que no existe (bacalado por bacalao)."],
        [
          ["Estoy cansao, no quiero na.", "I'm tired, I don't want anything."],
          ["Vamos pal centro.", "Let's go downtown."],
        ],
        [
          mc(
            "«Pa' que lo sepas» es…",
            ["para que lo sepas", "papá que lo sepas", "pasa que lo sepas", "pan que lo sepas"],
            0,
            "«Pa'» es la apócope coloquial de «para», muy frecuente en el habla rápida. Nada tiene que ver con «papá», «pasa» o «pan», que solo se le parecen en el sonido."
          ),
          mc(
            "Un amigo andaluz te dice: «Ehto ya ehtá terminao». ¿Qué ha dicho?",
            ["Esto ya está terminado.", "Esto ya está terminando.", "Este ya está terminado.", "Esto ya estaba terminado."],
            0,
            "Repón lo que falta: la -s aspirada (ehto → esto, ehtá → está) y la -d- caída de -ado (terminao → terminado). «Terminando» sería un gerundio, que no se reduce así, y «estaba» cambiaría el tiempo: la reducción no altera la gramática."
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
        "«To'» = todo, «na» = nada (caída de la -d-), «pal» = para + el, «mojao» = mojado (caída de la -d- en -ado)."
      ),
      fb("Restituye.", "Me he quedao dormío. → Me he quedado ___.", "dormido", "En el habla coloquial se pierde la -d- intervocálica (quedao, dormío); la forma plena es dormido."),
      fb("Restituye.", "Vente pa'cá. → Vente para ___.", "acá", "«Pa'cá» es la contracción coloquial de «para acá»."),
      mc(
        "«¿Ehtá bien?» refleja…",
        ["aspiración de la -s", "error ortográfico", "voseo", "leísmo"],
        0,
        "«Ehtá» refleja la aspiración de la -s final de sílaba, típica de Andalucía, Canarias y el Caribe. No es un error ortográfico sino una transcripción fonética, y no tiene relación con el voseo ni con el leísmo."
      ),
      mc(
        "¿En qué contexto conviene evitar escribir «cansao»?",
        ["en un correo profesional", "en un chat con amigos", "al transcribir un diálogo coloquial en una novela", "en un meme"],
        0,
        "En un correo profesional se escribe la forma plena, «cansado». En un chat con amigos, un meme o un diálogo coloquial de novela, «cansao» es aceptable para reflejar el habla."
      ),
      ms(
        "¿Qué formas son reducciones habituales del habla?",
        ["pa'", "na", "to'", "pasé"],
        [0, 1, 2],
        "«Pa'» (para), «na» (nada) y «to'» (todo) son reducciones típicas del habla rápida. «Pasé» es la forma estándar, no una reducción."
      ),
      wo("No te preocupes, no ha pasado nada.", "Versión estándar de «no ha pasao na».", "Don't worry, nothing happened."),
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
        ["La regla para escuchar una entrevista: separa tres capas. El dato se puede comprobar y suele traer su fuente («los datos muestran», una cifra, un estudio). La opinión es una valoración, y se delata con «creo», «yo diría», el condicional o un adjetivo valorativo. Y la actitud de quien pregunta: una pregunta puede llevar dentro un prejuicio («¿por qué ha fracasado…?» da por hecho el fracaso), y el entrevistado lo acepta o lo corrige. Por qué importa: una opinión dicha con aplomo suena a dato, y un condicional cortés («yo no hablaría de…») puede esconder un desacuerdo rotundo. La idea principal suele estar justo en la respuesta que corrige la premisa de la pregunta.", "Locutora: ¿Los jóvenes hablan peor que antes? — Socióloga: Hablan distinto, que no es lo mismo. Cada generación crea su jerga para diferenciarse; lo que hoy nos escandaliza, mañana estará en el diccionario. Los datos muestran que los adolescentes cambian de registro con enorme facilidad: hablan de una manera con sus amigos y de otra en un examen oral. — Locutora: Entonces, ¿no hay motivo de alarma? — Socióloga: Yo no hablaría de alarma. Hablaría, eso sí, de acompañarlos en la lectura."],
        [
          ["Hablan distinto, que no es lo mismo.", "They speak differently, which is not the same thing."],
          ["Yo no hablaría de alarma.", "I wouldn't call it cause for alarm."],
        ],
        [
          mc(
            "Idea principal de la socióloga:",
            ["Los jóvenes no hablan peor, sino de otra manera.", "Los jóvenes hablan fatal.", "Hay que prohibir la jerga.", "Los diccionarios están mal."],
            0,
            "La socióloga sostiene que los jóvenes hablan «distinto, que no es lo mismo» que peor. No dice que hablen fatal, no propone prohibir la jerga ni critica los diccionarios."
          ),
          mc(
            "Otra entrevista. Periodista: «¿No es una locura subir el billete de metro?». Concejala: «Locura, no. Los costes de la energía han subido un 30 % en dos años». ¿Qué hace la concejala?",
            ["Rechaza la premisa de la pregunta y la sustituye por un dato", "Acepta que la subida es una locura", "Da solo una opinión sin apoyo", "Cambia de tema para no contestar"],
            0,
            "«Locura, no» corrige el prejuicio que trae la pregunta, y la cifra con su fuente implícita (los costes de la energía) es un dato comprobable, no una valoración. No acepta la premisa ni se va a otro tema."
          ),
        ]
      ),
    ],
    [
      mc(
        "¿Qué enunciado presenta un dato y no una opinión?",
        ["Los adolescentes cambian de registro con facilidad, según los datos.", "Yo no hablaría de alarma.", "Hablaría de acompañarlos.", "Hablan distinto."],
        0,
        "Solo la frase que se apoya en «los datos» presenta un dato. «Yo no hablaría de alarma», «Hablaría de acompañarlos» y «Hablan distinto» son valoraciones u opiniones de la hablante."
      ),
      mc(
        "«Yo no hablaría de alarma» es una forma de…",
        ["discrepar con atenuación", "aceptar la pregunta", "cambiar de tema", "hacer una broma"],
        0,
        "El condicional «no hablaría» atenúa la discrepancia: rechaza la palabra «alarma» con cortesía. No acepta el planteamiento, no cambia de tema ni es una broma."
      ),
      mc(
        "La pregunta «¿Los jóvenes hablan peor que antes?» refleja…",
        ["un prejuicio frecuente que la entrevistadora plantea", "la opinión de la socióloga", "un dato", "una conclusión"],
        0,
        "La entrevistadora plantea un prejuicio frecuente para provocar la respuesta. No es la opinión de la socióloga (que lo desmiente), ni un dato ni una conclusión."
      ),
      fb("Completa según el texto.", "Lo que hoy nos escandaliza, mañana ___ en el diccionario. (estar)", "estará", "El futuro simple (estará) expresa una predicción, en contraste con el presente «escandaliza»."),
      fb("Completa según el texto.", "Hablaría, eso ___, de acompañarlos en la lectura.", "sí", "«Eso sí» introduce un matiz restrictivo o una salvedad a lo dicho."),
      ms(
        "¿Qué recursos usa la socióloga para matizar o rebatir sin confrontar?",
        ["condicional (no hablaría)", "eso sí", "reformulación (distinto, que no es lo mismo)", "insultos"],
        [0, 1, 2],
        "El condicional «no hablaría» atenúa, el matiz «eso sí» introduce una salvedad y la reformulación «distinto, que no es lo mismo» corrige la premisa sin confrontar. Los insultos serían lo contrario, y la socióloga no insulta."
      ),
      wo("Cada generación crea su propia jerga para diferenciarse de la anterior.", "«Diferenciarse de» es pronominal y rige «de»; «la anterior» retoma «generación» sin repetirla.", "Each generation creates its own slang to set itself apart from the previous one."),
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
        ["La regla: el modo de leer lo decide el objetivo, no el texto. Si quieres saber de qué trata o si te sirve, haz una lectura global (skimming): título, primer y último párrafo y oraciones temáticas, que es donde el autor pone la tesis y la conclusión. Si buscas un dato concreto (una fecha, una cifra, un nombre), haz una lectura selectiva (scanning): recorre el texto con la vista hasta dar con él, sin leer el resto. Si tienes que analizar estilo, estructura, matices o traducir, haz una lectura intensiva, palabra por palabra.", "Por qué importa: leerlo todo con la misma atención es lento y, paradójicamente, peor; la lectura intensiva de un horario hace perder tiempo, y la global de un contrato hace perder los matices. El lector experto alterna los modos: primero global para decidir, luego selectiva o intensiva donde hace falta."],
        [
          ["Para saber de qué trata el informe, leo la introducción y la conclusión.", "To know what the report is about, I read the introduction and conclusion."],
          ["Busco solo la fecha límite en el reglamento.", "I'm only looking for the deadline in the regulations."],
        ],
        [
          mc(
            "Buscas el horario de un museo en una web larga. Estrategia:",
            ["lectura selectiva", "lectura intensiva", "lectura global", "lectura en voz alta"],
            0,
            "Para buscar un dato concreto (el horario) se usa la lectura selectiva, saltando el resto. La lectura intensiva o la global serían más lentas de lo necesario, y leer en voz alta no ayuda a localizar."
          ),
          mc(
            "Tienes tres minutos para decidir cuáles de cinco artículos tratan de energía solar. Estrategia:",
            ["lectura global de títulos y primeros párrafos", "lectura intensiva de los cinco artículos", "lectura selectiva de las cifras", "leer solo las notas al pie"],
            0,
            "Decidir de qué trata un texto es el objetivo de la lectura global: el título y el primer párrafo bastan. La intensiva no cabe en tres minutos, y las cifras o las notas no dicen de qué trata el artículo."
          ),
        ]
      ),
    ],
    [
      mc(
        "Tienes que comentar el estilo de un poema. ¿Qué tipo de lectura necesitas?",
        ["lectura intensiva", "lectura selectiva", "lectura global", "leer solo el título"],
        0,
        "Analizar el estilo exige lectura intensiva, palabra por palabra. La lectura selectiva o la global se quedan en datos o ideas generales, y el título solo no basta."
      ),
      mc(
        "Decides si un artículo te sirve para tu trabajo. ¿Qué tipo de lectura usas?",
        ["lectura global", "lectura intensiva", "traducción completa", "lectura selectiva de cifras"],
        0,
        "Para decidir si un artículo te sirve basta una lectura global, que capta la idea general. La lectura intensiva o traducirlo entero sería excesivo, y leer solo cifras no da una visión de conjunto."
      ),
      mt(
        "Relaciona la estrategia con su objetivo.",
        [
          ["global", "captar la idea general"],
          ["selectiva", "localizar un dato"],
          ["intensiva", "analizar el detalle"],
        ],
        "Global = idea general (título, primer y último párrafo); selectiva = un dato concreto; intensiva = análisis detallado."
      ),
      fb("Completa.", "La oración ___ suele resumir el contenido del párrafo. (del tema)", "temática", "La oración temática es la que resume la idea principal del párrafo, a menudo al principio."),
      fb("Completa.", "Para una lectura global, conviene mirar primero el título y los ___ párrafos. (inicial y final)", "primeros", "En la lectura global se miran el título, los primeros párrafos y los últimos, donde suelen estar la tesis y las conclusiones."),
      toEs("I skimmed the article to get the general idea.", "Hice una lectura global del artículo para captar la idea general.", "«Leer por encima» o «echar un vistazo» es la lectura global (skim); «lectura global» es el término técnico.", ["Leí el artículo por encima para captar la idea general.", "Hojeé el artículo para captar la idea general.", "Eché un vistazo al artículo para captar la idea general."]),
      wo("Una lectura selectiva basta para encontrar la fecha de entrega.", "Lectura selectiva (scanning): buscar un dato concreto, como una fecha, sin leer todo el texto; «bastar para» + infinitivo.", "Scanning is enough to find the due date."),
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
        ["La regla: no anotes lo que oyes, anota la estructura. El ponente te la da con marcadores, y cada tipo pide un gesto distinto en las notas. Los de orden y cambio de punto («En primer lugar…», «Paso ahora a…») abren un apartado nuevo y numerado. Los de idea clave («Lo fundamental es…», «Conviene subrayar…») llevan asterisco. Los de contraste («Ahora bien», «Sin embargo») se marcan con ≠ o «pero». Los de reformulación («Es decir», «Dicho de otro modo») no abren nada nuevo: repiten lo anterior. Los de digresión («Por cierto», «A propósito») se pueden saltar, y los de cierre («En resumen», «En definitiva») anuncian la conclusión. Por qué: al oído no hay párrafos ni negritas, así que estos marcadores son la única señal de lo que importa.", "Para escribir rápido, palabras clave y símbolos, no frases completas: q (que), xq / pq (porque), tb (también), = (igual), → (produce), ≠ (distinto), ↑ / ↓ (sube / baja), ej. (ejemplo), s. (siglo)."],
        [
          ["«Lo fundamental es que…» → anotar con asterisco.", "Key point marker."],
          ["La inflación → ↓ poder adquisitivo.", "Inflation reduces purchasing power."],
        ],
        [
          mc(
            "¿Qué marcador anuncia una idea clave?",
            ["Lo fundamental es…", "Por cierto…", "Bueno…", "¿Me oyen bien?"],
            0,
            "«Lo fundamental es…» señala explícitamente una idea clave. «Por cierto» introduce una digresión, «Bueno» es una muletilla y «¿Me oyen bien?» solo comprueba el sonido."
          ),
          mc(
            "La ponente dice: «El teletrabajo ahorra costes. Ahora bien, aísla a los empleados más jóvenes». ¿Cómo lo anotas?",
            ["teletrabajo → ↓ costes ≠ aísla a jóvenes", "teletrabajo → ↓ costes = aísla a jóvenes", "teletrabajo: solo ventajas", "No lo anoto: es una digresión"],
            0,
            "«Ahora bien» introduce un contraste: la segunda idea limita la primera, así que se marca con ≠ (o «pero»). El signo = indicaría equivalencia, y no es una digresión como «por cierto»: es parte del argumento."
          ),
        ]
      ),
    ],
    [
      mc(
        "El ponente dice «Paso ahora al segundo punto». ¿Qué haces en tus notas?",
        ["Empiezo un nuevo apartado (2.)", "Dejo de escribir", "Lo copio literal", "Tacho lo anterior"],
        0,
        "«Paso ahora al segundo punto» es una señal de estructura: abre un nuevo apartado en las notas. No indica que haya que dejar de escribir, copiar literal ni tachar lo anterior."
      ),
      mc(
        "Mejor nota para «El aumento de las temperaturas provoca una reducción de las cosechas»:",
        ["↑ temp. → ↓ cosechas", "El aumento de las temperaturas provoca una reducción de las cosechas", "temperaturas cosechas", "calor malo"],
        0,
        "Las buenas notas combinan símbolos y palabras clave: ↑ temp. → ↓ cosechas. Copiar la frase entera es lento, «temperaturas cosechas» pierde la relación causal y «calor malo» es demasiado vago."
      ),
      fb("Completa.", "«En ___», dijo el ponente antes de sintetizar las ideas.", "resumen", "«En resumen» es un marcador que anuncia la síntesis o las conclusiones."),
      { ...fb("Completa.", "La abreviatura «xq» significa ___.", "porque", "«xq» es una abreviatura informal de «porque» (o «por qué»), propia de chats y notas."), altAnswers: ["por qué"] },
      ms(
        "¿Qué conviene anotar?",
        ["palabras clave", "cifras y fechas", "la estructura anunciada", "todas las muletillas del ponente"],
        [0, 1, 2],
        "Conviene anotar palabras clave, cifras y fechas, y la estructura anunciada. Las muletillas del ponente no aportan contenido."
      ),
      toEs("Now I'll move on to the second point.", "Paso ahora al segundo punto.", "«Paso ahora a…» es un marcador de estructura para cambiar de punto en una exposición.", ["Paso ahora al segundo apartado.", "Ahora paso al segundo punto."]),
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
            "El texto opone una promesa (ciudad sostenible) a la realidad (grúas en el parque): es un contraste implícito. No hay causa, finalidad ni ejemplo entre ambas frases, sino una contradicción."
          ),
        ]
      ),
    ],
    [
      mc(
        "«Consistorio» significa aquí…",
        ["el ayuntamiento", "una iglesia", "un tribunal", "un partido político"],
        0,
        "El contexto (alcalde, obra municipal) permite inferir que «consistorio» es el ayuntamiento. No es una iglesia, un tribunal ni un partido político, aunque en otros contextos se use para órganos eclesiásticos."
      ),
      mc(
        "«Lejos de resignarse» indica que los vecinos…",
        ["protestaron activamente", "aceptaron la obra", "se mudaron", "no se enteraron"],
        0,
        "«Lejos de + infinitivo» anuncia lo contrario: en vez de resignarse, protestaron activamente. «Aceptaron la obra» sería justo resignarse, y nada dice que se mudaran o no se enteraran."
      ),
      mc(
        "La cita de la jubilada introduce…",
        ["un cambio a registro coloquial", "un dato estadístico", "una cita académica", "un tecnicismo"],
        0,
        "La cita «Vamos, que nos han tomado el pelo» introduce un registro coloquial en un texto periodístico. No es un dato estadístico, una cita académica ni un tecnicismo."
      ),
      mc(
        "Las comillas en «estrictamente provisional» sugieren…",
        ["distancia irónica del periodista", "una cita científica", "un título de libro", "énfasis positivo"],
        0,
        "Las comillas de distanciamiento muestran que el periodista no se cree lo de «estrictamente provisional»: ironía. No marcan una cita científica, un título ni un énfasis positivo."
      ),
      fb("Completa.", "Una ___ es una protesta en la que los manifestantes se sientan en el suelo.", "sentada", "Inferencia morfológica: sentarse + -ada (acción) = sentada, una protesta sentados en el suelo."),
      ms(
        "¿Qué estrategias has aplicado?",
        ["inferir palabras por el contexto", "reponer conexiones implícitas", "detectar el cambio de registro", "buscar cada palabra en el diccionario"],
        [0, 1, 2],
        "Inferir por el contexto, reponer conexiones implícitas y detectar el cambio de registro son las estrategias del texto. Buscar cada palabra en el diccionario es justo lo que estas estrategias evitan."
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
        ["La regla de la transformación: una refutación brusca («Eso es falso») se convierte en réplica en tres pasos. Primero concedes lo que haya de verdad, luego giras y por último refutas solo la parte débil. La gramática acompaña: las fórmulas que admiten un hecho (es cierto que, admito que, no le falta razón en que) van con indicativo; las que niegan la consecuencia (eso no implica que, no significa que, no quiere decir que, no digo que) exigen subjuntivo, porque lo que introducen se rechaza. El error típico es el indicativo después de «no implica que». Por qué funciona: el rival se siente escuchado y el público percibe equilibrio, así que tu refutación gana autoridad.", "Concesión: «Es cierto que…», «No le falta razón en que…», «Admito que…», «Nadie discute que…». Giro: «sin embargo», «ahora bien», «pero», «no obstante». Refutación: «…lo que no se sostiene es…», «…eso no implica que…» (+ subjuntivo)."],
        [
          ["Es cierto que la medida es cara; ahora bien, el coste de no aplicarla sería mayor.", "It's true the measure is expensive; however, the cost of not applying it would be greater."],
          ["Nadie discute que haya problemas, pero eso no implica que haya que cerrar el centro.", "No one disputes there are problems, but that doesn't mean the center should close."],
        ],
        [
          mc(
            "¿Qué réplica concede antes de refutar?",
            ["No le falta razón en que es caro; sin embargo, es rentable a largo plazo.", "Está usted equivocado.", "Eso es mentira.", "No tiene ni idea."],
            0,
            "La réplica eficaz concede («No le falta razón en que es caro»), gira («sin embargo») y refuta. «Está usted equivocado», «Eso es mentira» y «No tiene ni idea» refutan sin conceder nada, y las dos últimas son ataques."
          ),
          mc(
            "Transforma la réplica brusca «¡Eso de que el turismo da empleo es mentira!». ¿Qué versión es correcta?",
            ["Es cierto que el turismo crea empleo; ahora bien, eso no implica que sea un empleo estable.", "Es cierto que el turismo crea empleo; ahora bien, eso no implica que es un empleo estable.", "El turismo no crea empleo, y punto.", "Admito que el turismo crea empleo."],
            0,
            "Solo la primera completa los tres pasos con la gramática correcta: concede (indicativo, crea), gira (ahora bien) y refuta con «no implica que» + subjuntivo (sea). La segunda falla en el modo, la tercera no concede y la cuarta concede sin refutar."
          ),
        ]
      ),
    ],
    [
      fb("Completa (concesión).", "Nadie ___ que el problema exista; lo que discutimos es la solución.", "discute", "«Nadie discute que…» concede algo evidente antes del giro; el verbo principal va en indicativo y la subordinada en subjuntivo (exista)."),
      { ...fb("Completa (subjuntivo).", "Eso no implica que ___ que renunciar al proyecto. (haber)", "haya", "«No implicar que» niega la consecuencia, por lo que exige subjuntivo: haya (también «tengamos que renunciar»)."), altAnswers: ["tengamos"] },
      fb("Completa (giro).", "Admito que el plan tiene riesgos. ___ bien, los beneficios los superan.", "Ahora", "«Ahora bien» es el conector que gira tras la concesión para introducir el contraargumento."),
      mc(
        "Transforma «Su propuesta es absurda» en una réplica concesiva:",
        ["Entiendo la intención de su propuesta, pero dudo de su viabilidad.", "Su propuesta es muy absurda.", "No me gusta nada su propuesta.", "Su propuesta no vale."],
        0,
        "La réplica concesiva reconoce algo del rival (la intención) y luego cuestiona (la viabilidad). «Muy absurda», «No me gusta nada» y «no vale» siguen descalificando sin conceder nada."
      ),
      ms(
        "¿Qué fórmulas sirven para conceder?",
        ["Es cierto que…", "Admito que…", "No le falta razón en…", "Es absurdo que…"],
        [0, 1, 2],
        "«Es cierto que…», «Admito que…» y «No le falta razón en…» reconocen algo al rival antes de rebatir. «Es absurdo que…» descalifica, no concede."
      ),
      toEs("It is true that the plan is ambitious; however, it is feasible.", "Es cierto que el plan es ambicioso; sin embargo, es viable.", "Estructura concesión + refutación: «Es cierto que…; sin embargo / no obstante / ahora bien…».", ["Es verdad que el plan es ambicioso; no obstante, es viable.", "Es cierto que el plan es ambicioso; ahora bien, es viable."]),
      wo("Admito que tiene parte de razón, pero su conclusión no se sostiene.", "Concede con «tiene parte de razón» y refuta con «no se sostiene»; con usted, el posesivo es «su» (su conclusión).", "I admit you're partly right, but your conclusion doesn't hold up."),
    ]
  ),
  L(
    "debate-persuasion-2",
    "c2r-debate-concession-dialogue",
    "Laboratorio de diálogo: el turno de réplica",
    "Aprende las fases del debate y las fórmulas de la réplica: resumir con justicia al rival, conceder, refutar con evidencia y defender tu turno con cortesía.",
    "7 min",
    [
      sec(
        "Turnos del debate",
        ["La regla de la réplica: cuatro movimientos y en este orden. Resume con justicia la postura del rival («Si no le he entendido mal, usted sostiene que…»): si la deformas, refutas una caricatura y el público lo nota. Concede lo que sea válido, refuta lo que no y aporta evidencia (un dato más reciente, una fuente mejor, un contraejemplo). Para defender tu turno, firmeza cortés con usted: imperativo formal (permítame, déjeme), pregunta cortés (¿me permite terminar?) o deseo atenuado (me gustaría que me dejara terminar). La gramática que acompaña: «antes de que», «hasta que» y «en cuanto» llevan subjuntivo cuando el hecho aún no ha ocurrido (antes de que usted responda).", "Fases del debate: exposición inicial → turno de réplica → contrarréplica → conclusión."],
        [
          ["Si no le he entendido mal, usted sostiene que…", "If I understood you correctly, you maintain that…"],
          ["Permítame terminar, por favor.", "Please let me finish."],
        ],
        [
          mc(
            "El rival le interrumpe. Usted dice:",
            ["Permítame terminar, por favor.", "¡Cállese ya!", "Qué pesado es usted.", "Vale, lo que usted diga."],
            0,
            "«Permítame terminar, por favor» defiende el turno con firmeza cortés. «¡Cállese ya!» y «Qué pesado es usted» son agresivos, y «Vale, lo que usted diga» cede el turno y la discusión."
          ),
          mc(
            "Su rival ha dicho que la energía nuclear es demasiado arriesgada. ¿Qué resumen es justo antes de replicar?",
            ["Si no le he entendido mal, usted sostiene que los riesgos de la nuclear superan sus beneficios.", "O sea, que usted quiere que volvamos a alumbrarnos con velas.", "Usted no sabe de qué habla.", "Si no le he entendido mal, usted sostiene que la nuclear es la mejor energía."], 0,
            "Resumir con justicia es reformular la tesis del rival en su versión más fiel. Lo de las velas es una caricatura (refutarla sería atacar un hombre de paja), «no sabe de qué habla» es un ataque y la última opción le atribuye lo contrario de lo que dijo."
          ),
        ]
      ),
    ],
    [
      mc(
        "Mejor forma de empezar una réplica:",
        ["Si no le he entendido mal, usted defiende que…", "Usted no se entera.", "Eso que dice es ridículo.", "Bueno, paso de contestar."],
        0,
        "Reformular con justicia la postura del rival («Si no le he entendido mal…») antes de replicar da credibilidad. «Usted no se entera» y «es ridículo» son descalificaciones, y «paso de contestar» es coloquial y evasivo."
      ),
      fb("Completa.", "Si me ___ acabar, le explicaré por qué no estoy de acuerdo. (dejar, usted)", "deja", "Condición real y posible: si + presente de indicativo (deja), con futuro en la principal."),
      fb("Completa.", "Si no le he ___ mal, usted sostiene que…", "entendido", "«Si no le he entendido mal» es una fórmula cortés para reformular la postura del otro."),
      mc(
        "«Los datos que usted cita son de 2010; los actuales dicen lo contrario.» Esta réplica refuta mediante…",
        ["la actualización de la evidencia", "un ataque personal", "una pregunta retórica", "una concesión"],
        0,
        "La réplica refuta con contraevidencia: datos más actuales. No ataca a la persona, no es una pregunta retórica y no concede nada al rival."
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
      toEs("Please let me finish.", "Permítame terminar, por favor.", "«Permítame / Déjeme terminar» con usted: firmeza cortés en un debate formal.", ["Permítame acabar, por favor.", "Déjeme terminar, por favor."]),
      wo("Con todo respeto, los datos que usted menciona están desactualizados.", "«Con todo respeto» suaviza la réplica; «los datos» es plural, por eso el verbo y el adjetivo también lo son («están desactualizados»).", "With all due respect, the data you mention is out of date."),
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
        ["La regla para cazar la falacia: separa la conclusión de lo que se ofrece como apoyo y pregúntate qué relación hay entre ambos. Si el apoyo es un rasgo de la persona, es ad hominem; si es una versión deformada de lo que dijo el rival, hombre de paja; si solo se ofrecen dos salidas, falso dilema; si es una cadena de consecuencias sin pruebas, pendiente resbaladiza; si son unos pocos casos, generalización apresurada; si es solo el orden en el tiempo, falsa causa (post hoc). Ojo con las parejas que se confunden: la falsa causa se basa en el «antes y después», y la generalización, en el número de casos; el hombre de paja deforma lo que el otro ya dijo, y la pendiente inventa lo que pasará.", "Ad hominem: atacar a la persona, no al argumento. Hombre de paja: deformar el argumento del rival para rebatirlo fácilmente. Falso dilema: presentar solo dos opciones cuando hay más. Pendiente resbaladiza: suponer una cadena de consecuencias catastróficas sin pruebas. Generalización apresurada: concluir a partir de pocos casos. Falsa causa (post hoc): «ocurrió después, luego fue por eso»."],
        [
          ["¿Cómo va a saber de economía alguien que ni terminó la carrera?", "Ad hominem."],
          ["O estás con nosotros o estás contra nosotros.", "False dilemma."],
        ],
        [
          mc(
            "«Si permitimos que los alumnos usen el móvil en clase, pronto dejarán de leer, luego de escribir y acabarán sin saber pensar.»",
            ["pendiente resbaladiza", "ad hominem", "hombre de paja", "argumento de autoridad"],
            0,
            "Encadenar consecuencias cada vez más graves sin pruebas es la pendiente resbaladiza. No ataca a la persona (ad hominem), no deforma la tesis del rival (hombre de paja) ni cita a una autoridad."
          ),
          mc(
            "«Desde que mi hija va a clases de ajedrez, saca mejores notas en matemáticas; está claro que el ajedrez mejora las notas.»",
            ["falsa causa (post hoc)", "generalización apresurada", "hombre de paja", "falso dilema"],
            0,
            "El único apoyo es el orden temporal (desde que… saca mejores notas): eso es la falsa causa. Podría parecer una generalización apresurada por basarse en un solo caso, pero lo decisivo es que confunde «después» con «a causa de». No hay rival deformado ni dos opciones."
          ),
        ]
      ),
    ],
    [
      mc(
        "«Mi rival quiere subir los impuestos para que nadie pueda llegar a fin de mes.» (el rival propuso subir un 1 % a las grandes fortunas)",
        ["hombre de paja", "falso dilema", "generalización apresurada", "post hoc"],
        0,
        "Deformar la propuesta del rival (del 1 % a las grandes fortunas a arruinar a todos) para atacarla es un hombre de paja. No plantea solo dos opciones (falso dilema), no generaliza desde pocos casos ni confunde sucesión con causa (post hoc)."
      ),
      mc(
        "«En Lima me robaron dos veces; los limeños son unos ladrones.»",
        ["generalización apresurada", "ad hominem", "pendiente resbaladiza", "falso dilema"],
        0,
        "Sacar una conclusión sobre todos los limeños a partir de dos casos es una generalización apresurada. No ataca a un rival (ad hominem), no encadena consecuencias (pendiente resbaladiza) ni reduce a dos opciones (falso dilema)."
      ),
      mc(
        "«Desde que se instaló la antena, me duele la cabeza; la antena causa migrañas.»",
        ["falsa causa (post hoc)", "hombre de paja", "falso dilema", "ad hominem"],
        0,
        "Que algo ocurra después no prueba que sea su causa: es la falsa causa (post hoc). No deforma ningún argumento (hombre de paja), no presenta dos opciones (falso dilema) ni ataca a nadie (ad hominem)."
      ),
      mc(
        "«O cerramos la fábrica o la empresa quiebra.» (existen otras opciones)",
        ["falso dilema", "generalización", "ad hominem", "argumento de autoridad"],
        0,
        "Presentar solo dos opciones cuando existen otras es un falso dilema. No generaliza desde casos concretos, no ataca a la persona ni se apoya en una autoridad."
      ),
      fb("Completa.", "Atacar a la persona en lugar de su argumento es una falacia ___ hominem.", "ad", "«Ad hominem» (latín, «contra la persona») ataca a quien argumenta, no a su argumento."),
      mt(
        "Relaciona la falacia con su definición.",
        [
          ["hombre de paja", "deformar el argumento ajeno"],
          ["falso dilema", "reducir las opciones a dos"],
          ["ad hominem", "atacar a la persona"],
        ],
        "Hombre de paja: deformar la tesis ajena; falso dilema: solo dos opciones cuando hay más; ad hominem: atacar a la persona y no al argumento."
      ),
      wo("Su argumento es una falacia porque ataca a la persona y no a la idea.", "«Atacar a la persona y no a la idea» define el ad hominem; «porque» (una palabra) introduce la causa.", "Your argument is a fallacy because it attacks the person and not the idea."),
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
        ["La regla para desactivar una falacia en directo: nombra el mecanismo, no a la persona («eso no responde a mi argumento», nunca «usted es un tramposo»), y en la misma frase devuelve el debate a su sitio. Tres piezas gramaticales sostienen esas réplicas: «Le agradecería que» + imperfecto de subjuntivo (discutiéramos, se atuviera); «No he dicho que» + subjuntivo, seguido de «lo que he dicho es que» + indicativo; y «No hay prueba de que» o «Nada demuestra que» + subjuntivo. Por qué funciona: si respondes con otro ataque, el público ve dos falacias; si señalas el fallo con calma, queda mal quien lo cometió.", "Contra el ad hominem: «Le agradecería que discutiéramos las ideas y no las personas». Contra el hombre de paja: «Yo no he dicho eso; lo que he propuesto es…». Contra el falso dilema: «Existen más alternativas que esas dos». Contra la pendiente resbaladiza: «No hay ninguna prueba de que una cosa lleve a la otra»."],
        [
          ["Yo no he dicho eso; lo que he propuesto es…", "I didn't say that; what I proposed is…"],
          ["Existen más alternativas que esas dos.", "There are more alternatives than those two."],
        ],
        [
          mc(
            "El rival deforma su propuesta. Usted responde:",
            ["Yo no he dicho eso; lo que he propuesto es un aumento del 1 % para rentas altas.", "Usted miente siempre.", "Pues sí, tiene razón.", "Paso de responder."],
            0,
            "Contra el hombre de paja, se niega la deformación y se restablece la propuesta real. «Usted miente siempre» es un ad hominem, «Pues sí, tiene razón» acepta la distorsión y «Paso de responder» es evasivo."
          ),
          mc(
            "Su rival dice: «Usted defiende el teletrabajo porque vive lejos de la oficina». ¿Qué réplica desactiva la falacia?",
            ["Dónde viva yo no cambia lo que muestran los datos de productividad.", "¡Y usted vive al lado y tampoco trabaja!", "Bueno, quizá tenga usted razón.", "Yo no he dicho eso; lo que he propuesto es otra cosa."],
            0,
            "Es un ad hominem (ataca una circunstancia personal), y se desactiva separando a la persona de los datos. Contraatacar es otra falacia, ceder da por bueno el ataque, y «Yo no he dicho eso» es la fórmula contra el hombre de paja, que aquí no hay."
          ),
        ]
      ),
    ],
    [
      fb("Contra el ad hominem.", "Le agradecería que ___ las ideas y no las personas. (discutir, nosotros)", "discutiéramos", "Agradecería que + imperfecto de subjuntivo."),
      fb("Contra el falso dilema.", "Existen más ___ que esas dos.", "alternativas", "Contra el falso dilema se muestra que existen más alternativas que las dos planteadas."),
      fb("Contra la pendiente resbaladiza.", "No hay ninguna prueba de que una cosa ___ a la otra. (llevar)", "lleve", "Tras «no hay ninguna prueba de que» va subjuntivo (lleve), porque se niega la existencia de esa relación."),
      mc(
        "«Usted no puede opinar de educación porque no tiene hijos.» Respuesta adecuada:",
        ["Mis circunstancias personales no invalidan los datos que he presentado.", "¡Y usted es un maleducado!", "Tiene razón, me callo.", "Pues yo tengo tres perros."],
        0,
        "Ante un ad hominem se separa la persona del argumento: tus circunstancias no invalidan los datos. Responder con otro insulto, darle la razón o salir con los perros no desmonta la falacia."
      ),
      mc(
        "«Todos los expertos dicen que…» sin citar ninguno es un argumento…",
        ["de autoridad vago", "sólido", "estadístico", "concesivo"],
        0,
        "Invocar a «todos los expertos» sin citar a ninguno es un argumento de autoridad vago (falacia). No es sólido ni estadístico, porque no hay fuente ni cifras, y tampoco concede nada."
      ),
      toEs("I did not say that; what I said is quite different.", "Yo no he dicho eso; lo que he dicho es muy distinto.", "Contra el hombre de paja: «Yo no he dicho eso; lo que he dicho es…» (el pronombre «yo» añade énfasis).", ["Yo no dije eso; lo que dije es muy diferente.", "No he dicho eso; lo que he dicho es bastante distinto."]),
      wo("No hay ninguna prueba de que esta medida vaya a provocar un desastre.", "«No hay ninguna prueba de que» niega la existencia de pruebas, por eso lleva subjuntivo: «vaya a provocar».", "There's no evidence this measure will cause a disaster."),
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
        ["La regla: el grado del desacuerdo tiene que ser proporcional al fallo. Tres recursos lo gradúan: el condicional atenúa (matizaría, yo no diría), los limitadores acotan (del todo, hasta cierto punto, en parte) y los intensificadores endurecen (rotundamente, sencillamente, no puedo estar más…). Por qué importa: un desacuerdo fuerte ante un fallo menor suena agresivo y te resta credibilidad; uno suave ante un error grave parece complicidad. Para subir o bajar un grado basta con cambiar el recurso: «No estoy de acuerdo» → «No estoy del todo de acuerdo» (baja) → «No puedo estar más en desacuerdo» (sube).", "Suave: «Yo matizaría…», «No estoy del todo de acuerdo», «Hasta cierto punto…». Medio: «No comparto esa opinión», «Me permito discrepar». Fuerte: «Discrepo rotundamente», «No puedo estar más en desacuerdo», «Eso no se sostiene». Con valoración del otro: «Respeto su postura, pero…»."],
        [
          ["Yo matizaría esa afirmación.", "I would qualify that statement."],
          ["Discrepo rotundamente de lo que acaba de decir.", "I strongly disagree with what you've just said."],
        ],
        [
          mc(
            "La forma más suave de desacuerdo:",
            ["Yo matizaría un poco esa idea.", "Discrepo rotundamente.", "Eso no se sostiene.", "No puedo estar más en desacuerdo."],
            0,
            "«Yo matizaría un poco esa idea» expresa un desacuerdo parcial y suave. «Discrepo rotundamente», «Eso no se sostiene» y «No puedo estar más en desacuerdo» son desacuerdos totales."
          ),
          mc(
            "Una compañera calcula que la obra costará 10 000 euros; a ti te salen 12 000. ¿Qué respuesta es proporcional?",
            ["Yo matizaría la cifra: a mí me salen unos 12 000.", "Eso no se sostiene en absoluto.", "No puedo estar más en desacuerdo.", "Discrepo rotundamente de tu cálculo."],
            0,
            "La diferencia es moderada y la base del cálculo es la misma, así que corresponde el grado suave: el condicional «matizaría» precisa sin rechazar. Las otras tres son fórmulas del grado fuerte y suenan desproporcionadas."
          ),
        ]
      ),
    ],
    [
      mc(
        "Ordena de más suave a más fuerte: (a) No comparto esa opinión (b) Discrepo rotundamente (c) Hasta cierto punto",
        ["c, a, b", "a, b, c", "b, a, c", "c, b, a"],
        0,
        "«Hasta cierto punto» es un desacuerdo parcial, «No comparto esa opinión» uno claro pero neutro y «Discrepo rotundamente» uno total. Las otras ordenaciones sitúan «rotundamente» antes de alguna forma más suave."
      ),
      fb("Completa.", "Me ___ discrepar de su análisis. (permitir, yo)", "permito", "«Me permito discrepar» es una fórmula formal y cortés de desacuerdo."),
      fb("Completa.", "No ___ esa opinión, aunque la respeto. (compartir, yo)", "comparto", "«No comparto esa opinión» expresa desacuerdo sin agresividad, sobre todo con «aunque la respeto»."),
      fb("Completa.", "Estoy de acuerdo hasta cierto ___.", "punto", "«Hasta cierto punto» limita el acuerdo: expresa un desacuerdo parcial."),
      ms(
        "¿Qué fórmulas expresan desacuerdo total?",
        ["Discrepo rotundamente.", "No puedo estar más en desacuerdo.", "Eso no se sostiene.", "Yo lo matizaría."],
        [0, 1, 2],
        "«Discrepo rotundamente», «No puedo estar más en desacuerdo» y «Eso no se sostiene» expresan desacuerdo total. «Yo lo matizaría» es un desacuerdo parcial y suave."
      ),
      toEs("I respect your position, but I don't share it.", "Respeto su postura, pero no la comparto.", "Desacuerdo respetuoso: «Respeto su postura, pero no la comparto» (usted o tú según el registro).", ["Respeto tu postura, pero no la comparto.", "Respeto su posición, pero no la comparto."]),
      wo("Respeto su punto de vista, pero me permito discrepar.", "«Me permito + infinitivo» es la fórmula formal y cortés para discrepar; «su punto de vista» usa el posesivo de usted.", "I respect your point of view, but I beg to differ."),
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
        ["La regla del taller: cada recurso tiene una forma, y si la rompes deja de funcionar. Analogía: «A es como B», con un B familiar que comparta la estructura de A. Tríada: tres elementos con el mismo molde gramatical (más + sustantivo; sustantivo + más + adjetivo) y, si hay «y», solo antes del último. Anáfora: la misma palabra al principio de frases seguidas. Pregunta retórica: formulada para que la única respuesta posible sea la tuya («¿Quién no querría…?», «¿Acaso hay alguien que…?», con subjuntivo). Ejemplo concreto: nombre, edad y circunstancia. Por qué importa la forma: si rompes el paralelismo (más empleo, formar mejor y que haya futuro), se pierde el ritmo y el recurso suena torpe en lugar de convincente.", "Analogía: «Reducir la inversión en educación es como dejar de regar un árbol esperando frutos». Tríada: «Más empleo, más formación, más futuro». Anáfora: repetición al inicio («Hablamos de niños… Hablamos de familias… Hablamos de futuro»). Pregunta retórica: «¿Quién puede estar en contra de la salud pública?». Ejemplo concreto: un caso real que hace tangible el dato."],
        [
          ["Más empleo, más formación, más futuro.", "More jobs, more training, more future."],
          ["¿Acaso alguien cree que esto se arreglará solo?", "Does anyone really believe this will fix itself?"],
        ],
        [
          mc(
            "«Recortar en sanidad es como quitarle el paraguas a alguien en plena tormenta.»",
            ["analogía", "anáfora", "tríada", "pregunta retórica"],
            0,
            "Comparar los recortes con quitar el paraguas en una tormenta traslada la idea a un terreno familiar: es una analogía. No repite palabras al inicio (anáfora), no enumera tres elementos (tríada) ni es una pregunta."
          ),
          mc(
            "¿Qué tríada respeta el paralelismo?",
            ["Mejores sueldos, mejores horarios, mejores contratos.", "Mejores sueldos, trabajar menos horas y contratos.", "Sueldos mejores, mejores horarios y que haya contratos.", "Mejores sueldos y horarios."],
            0,
            "La tríada funciona cuando los tres elementos repiten el mismo molde (mejores + sustantivo). Las otras mezclan un infinitivo, una oración o un orden distinto, o se quedan en dos elementos."
          ),
        ]
      ),
    ],
    [
      mc(
        "«Queremos calles seguras. Queremos escuelas dignas. Queremos hospitales abiertos.»",
        ["anáfora", "analogía", "hipérbole", "falacia"],
        0,
        "Repetir «Queremos» al inicio de cada frase es una anáfora. No compara (analogía), no exagera (hipérbole) ni es un razonamiento falaz."
      ),
      mc(
        "«Igualdad, justicia y libertad.»",
        ["tríada", "anáfora", "analogía", "metonimia"],
        0,
        "Enumerar tres elementos con ritmo es una tríada. No hay repetición inicial (anáfora), comparación (analogía) ni sustitución de una cosa por otra relacionada (metonimia)."
      ),
      { ...fb("Completa la pregunta retórica.", "¿___ alguien cree que el problema desaparecerá solo?", "Acaso", "«¿Acaso…?» refuerza la pregunta retórica y sugiere que la respuesta es «no»."), altAnswers: ["De verdad"] },
      fb("Completa la analogía.", "Invertir en ciencia es ___ sembrar para las próximas generaciones.", "como", "«Es como» introduce la analogía entre invertir en ciencia y sembrar."),
      mc(
        "¿Qué recurso hace tangible una estadística?",
        ["un ejemplo concreto con nombre y circunstancias", "una falacia", "un insulto", "un tecnicismo"],
        0,
        "Un ejemplo concreto (una persona, su situación) hace tangible una estadística abstracta. Una falacia o un insulto restan credibilidad, y un tecnicismo la haría aún más abstracta."
      ),
      toEs("Who could be against clean air?", "¿Quién puede estar en contra del aire limpio?", "Pregunta retórica: la respuesta implícita es «nadie»; «¿Acaso…?» la refuerza.", ["¿Quién podría estar en contra del aire limpio?", "¿Acaso alguien puede estar en contra del aire limpio?"]),
      wo("Más inversión, más empleo y más oportunidades para todos.", "Tres elementos paralelos (más inversión, más empleo, más oportunidades) con «y» solo antes del último.", "More investment, more jobs and more opportunities for everyone."),
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
        ["La regla: la conclusión no añade, condensa. Por eso no puede traer argumentos nuevos (el rival ya no tendría turno para replicarlos) y por eso se apoya en moldes fáciles de recordar: la tríada para la síntesis, el paralelismo «Frente a…, (nosotros) proponemos…» para el contraste, y «no es…, sino…» o una pregunta retórica para el llamamiento final. La gramática del cierre también trabaja: el imperativo de nosotros (recordemos, elijamos, salgamos) implica al público en la decisión, y tras una negación se corrige con «sino», nunca con «pero».", "1) Anuncio: «Para concluir…», «Llegamos al final de este debate». 2) Síntesis de los propios argumentos (en tríada si es posible). 3) Contraste con el rival: «Frente a…, nosotros proponemos…». 4) Llamamiento final: pregunta retórica o imagen potente. No se introducen argumentos nuevos."],
        [
          ["Frente al miedo, proponemos información; frente a la prohibición, educación.", "Against fear, we propose information; against prohibition, education."],
          ["La pregunta no es si podemos permitírnoslo, sino si podemos permitirnos no hacerlo.", "The question is not whether we can afford it, but whether we can afford not to."],
        ],
        [
          mc(
            "¿Qué NO debe hacerse en la conclusión?",
            ["introducir un argumento nuevo", "sintetizar", "contrastar con el rival", "cerrar con fuerza"],
            0,
            "La conclusión recapitula y no introduce argumentos nuevos, que ya no se podrían desarrollar. Sintetizar, contrastar con el rival y cerrar con fuerza son justo lo que debe hacerse."
          ),
          mc(
            "Ordena esta conclusión: (a) Frente a su pesimismo, proponemos un plan. (b) Para concluir… (c) ¿Quién querría quedarse de brazos cruzados? (d) Hemos demostrado que el plan es viable, barato y justo.",
            ["b, d, a, c", "d, b, c, a", "a, b, d, c", "b, a, c, d"],
            0,
            "Primero el anuncio (b), luego la síntesis en tríada (d), después el contraste con el rival (a) y por último el llamamiento final, aquí una pregunta retórica (c). Cerrar con la síntesis o abrir con el contraste rompe la anatomía."
          ),
        ]
      ),
    ],
    [
      fb("Completa el anuncio.", "Para ___, repasemos lo que hemos demostrado.", "concluir", "«Para concluir» anuncia la conclusión, como «En conclusión» o «Para terminar»."),
      fb("Completa el contraste.", "___ a la prohibición, nosotros proponemos educación.", "Frente", "Frente a = en oposición a."),
      fb("Completa el contraste final.", "La pregunta no es si podemos hacerlo, ___ si podemos permitirnos no hacerlo.", "sino", "Estructura adversativa «no es… sino…»: «sino» corrige tras una negación (no «si no»)."),
      mc(
        "Mejor cierre:",
        ["La pregunta no es cuánto cuesta actuar, sino cuánto nos costará no hacerlo.", "Bueno, eso es todo, gracias.", "Y ya está, no sé qué más decir.", "Es todo lo que tengo, más o menos."],
        0,
        "El mejor cierre es memorable y usa un contraste (cuánto cuesta actuar / no hacerlo). «Eso es todo», «Y ya está» y «más o menos» terminan sin fuerza e incluso restan credibilidad."
      ),
      ms(
        "¿Qué elementos debe tener la conclusión?",
        ["síntesis de argumentos", "contraste con la postura rival", "llamamiento final", "datos nuevos sin explicar"],
        [0, 1, 2],
        "La conclusión sintetiza los argumentos, contrasta con la postura rival y termina con un llamamiento. Los datos nuevos sin explicar no caben en el cierre."
      ),
      toEs("To conclude, let's recall three key ideas.", "Para concluir, recordemos tres ideas clave.", "Anuncio de conclusión: «Para concluir» o «En conclusión» + imperativo de primera persona del plural (recordemos).", ["Para concluir, recordemos tres ideas fundamentales.", "En conclusión, recordemos tres ideas clave."]),
      wo("Frente al miedo, proponemos información y diálogo.", "«Frente a» + sustantivo contrapone dos posturas; el sujeto «nosotros» va implícito en «proponemos».", "Against fear, we propose information and dialogue."),
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
        ["La regla de la red: cada verbo va con su sustantivo y su régimen. Se sostiene o se defiende una postura o una tesis; se esgrime o se aduce un argumento; se rebate o se refuta un argumento (y, con «a» personal, a una persona: refutar al adversario); se matiza una afirmación; y de unas premisas se extrae, se sigue o se deriva una conclusión. Cuidado con los irregulares: «aducir» se conjuga como «conducir» (adujo, adujeron) y «sostener» como «tener» (sostuvo). Y la diferencia que más pesa en un debate: sostener no es demostrar, y rebatir exige razones; negar no basta.", "Sostener / defender una postura. Esgrimir / aducir un argumento (presentarlo). Rebatir / refutar (demostrar que es falso). Matizar (precisar). Premisa (punto de partida) → conclusión. Tesis / antítesis. Contrincante / adversario / interlocutor. Moderador/a (dirige los turnos)."],
        [
          ["Esgrimió argumentos económicos para defender su postura.", "He wielded economic arguments to defend his position."],
          ["Rebatió punto por punto las tesis del adversario.", "She refuted the opponent's theses point by point."],
        ],
        [
          mc(
            "«Aducir un argumento» significa…",
            ["presentarlo como razón", "rechazarlo", "olvidarlo", "copiarlo"],
            0,
            "«Aducir» es presentar algo como razón o prueba (alegar). No significa rechazar, olvidar ni copiar: se aduce un argumento a favor de la propia postura."
          ),
          mc(
            "«El ministro ___ problemas técnicos para justificar el retraso.»",
            ["adujo", "aducó", "refutó", "matizó"],
            0,
            "Presentar algo como razón es «aducir», y su pretérito es irregular, como el de «conducir»: adujo. «Aducó» no existe; «refutó» sería demostrar que algo es falso y «matizó», precisar, que no encajan con «para justificar»."
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
      fb("Completa.", "El ___ dio la palabra al siguiente participante. (quien dirige el debate)", "moderador", "El moderador o la moderadora dirige el debate y da la palabra a los participantes."),
      fb("Completa.", "Si la ___ es falsa, la conclusión no se sostiene. (punto de partida lógico)", "premisa", "La premisa es el punto de partida de un razonamiento; si es falsa, la conclusión cae."),
      fb("Completa.", "Rebatió las tesis de su ___ una por una. (rival)", "contrincante", "Contrincante: rival en un debate o competición (sinónimos: adversario, oponente)."),
      ms(
        "¿Qué verbos significan «demostrar que un argumento es falso»?",
        ["refutar", "rebatir", "desmontar", "sostener"],
        [0, 1, 2],
        "«Refutar», «rebatir» y «desmontar» significan demostrar que un argumento es falso. «Sostener» no encaja: significa mantener o defender una idea."
      ),
      toEs("She refuted each of her opponent's arguments.", "Rebatió cada uno de los argumentos de su contrincante.", "Léxico del debate: «rebatir» o «refutar» los argumentos del «contrincante» o «adversario».", ["Refutó cada uno de los argumentos de su adversario.", "Rebatió uno por uno los argumentos de su rival."]),
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
        "La regla: subjuntivo cuando no afirmas",
        [
          "En un debate, el modo verbal revela tu actitud ante lo que dices. El indicativo afirma un hecho («Creo que es así»); el subjuntivo presenta el contenido sin hacerlo tuyo: lo niegas («No creo que sea así»), lo valoras («Es inaceptable que se oculten los datos»), lo concedes sin admitirlo («Por muy convincente que parezca») o lo imaginas («Si hubiéramos actuado antes…»).",
          "Por eso el mismo verbo cambia de modo según la postura: «Creo que tiene razón» frente a «No creo que tenga razón»; «Aunque está cansado» (lo sé) frente a «Aunque esté cansado» (no lo afirmo). La condicional irreal del pasado sigue el esquema si + pluscuamperfecto de subjuntivo + condicional compuesto (o simple, si la consecuencia es presente). Nunca va condicional detrás de «si».",
        ],
        [
          ["No creo que esa medida resuelva el problema.", "I don't think that measure will solve the problem. (opinión negada → subjuntivo)"],
          ["Es lamentable que nadie haya pedido perdón.", "It's regrettable that nobody has apologised. (valoración → subjuntivo)"],
          ["Por muy convincente que parezca, el argumento tiene un fallo.", "However convincing it may seem, the argument has a flaw. (concesiva intensiva)"],
          ["Si hubiéramos actuado antes, no estaríamos en esta situación.", "If we had acted sooner, we wouldn't be in this situation. (pasado irreal → consecuencia presente)"],
        ],
        [
          mc(
            "«No creo que esa medida ___ eficaz.»",
            ["sea", "es", "será", "fue"],
            0,
            "«No creo que» niega una opinión y exige subjuntivo: sea. «Es», «será» y «fue» (indicativo) solo son posibles con «Creo que», en afirmativa."
          ),
          mc(
            "«Es absurdo que el ministro no ___ los datos.» (conocer)",
            ["conozca", "conoce", "conocerá", "conocía"],
            0,
            "«Es absurdo que» es una valoración: no informa de un hecho, lo juzga, y por eso pide subjuntivo (conozca). Las otras tres opciones son indicativo, que solo aparecería tras un verbo que afirma («Es evidente que no conoce…»)."
          ),
        ]
      ),
      sec(
        "Focalizar: hendidas y «no es que»",
        [
          "La oración hendida separa lo que quieres destacar: «Lo que está en juego es la credibilidad» pone el foco al final, donde el oyente lo recuerda. El verbo de «lo que» va en singular y concuerda con «lo»; «ser» puede concordar con el elemento destacado si es plural («Lo que me preocupa son los plazos»).",
          "«No es que + subjuntivo, es que + indicativo» descarta una explicación y da la verdadera: la que rechazas no se afirma (subjuntivo); la que defiendes, sí (indicativo).",
        ],
        [
          ["Lo que realmente está en juego es la confianza de los ciudadanos.", "What's really at stake is citizens' trust."],
          ["No es que el plan sea caro, es que no sirve.", "It's not that the plan is expensive, it's that it doesn't work."],
        ],
        [
          mc(
            "«No es que no ___ los riesgos, es que los aceptamos.»",
            ["veamos", "vemos", "veremos", "vimos"],
            0,
            "La explicación que se descarta con «No es que» va en subjuntivo (veamos); la verdadera, tras «es que», en indicativo (aceptamos)."
          ),
        ]
      ),
    ],
    [
      fb("Concesiva.", "Por muy razonable que ___ su propuesta, es inviable. (parecer)", "parezca", "La concesiva intensiva «Por muy + adjetivo + que» va con subjuntivo: parezca."),
      fb("Condicional irreal.", "Si ___ escuchado a los expertos, habríamos evitado la crisis. (haber, nosotros)", "hubiéramos", "Condicional irreal del pasado: si + pluscuamperfecto de subjuntivo (hubiéramos escuchado) + condicional compuesto."),
      fb("Valoración.", "Es inaceptable que se ___ los datos. (ocultar)", "oculten", "Una valoración («Es inaceptable que») exige subjuntivo; «se oculten» concuerda con «los datos»."),
      fb("Completa la oración hendida.", "___ que está en juego es la credibilidad de la institución.", "Lo", "La hendida de cosa usa «Lo que + verbo + es…»: el neutro «lo» recoge una idea, no un sustantivo concreto, y el elemento destacado (la credibilidad) queda al final, donde pesa más."),
      mc(
        "«Aunque los datos ___ a su favor, la conclusión sería la misma.» (hipótesis irreal)",
        ["estuvieran", "están", "estén", "estarán"],
        0,
        "«Aunque» + imperfecto de subjuntivo plantea una hipótesis irreal, y concuerda con el condicional «sería». «Están» afirma un hecho real, «estén» una hipótesis posible y «estarán» no se usa tras «aunque» en este sentido."
      ),
      ms(
        "¿Qué inicios exigen subjuntivo en la frase que sigue?",
        ["No niego que…", "Es evidente que…", "Dudo que…", "Es una vergüenza que…", "Está claro que…"],
        [0, 2, 3],
        "Llevan subjuntivo los que no afirman el contenido: «No niego que» (concede sin afirmar), «Dudo que» (lo pone en duda) y «Es una vergüenza que» (lo valora). «Es evidente que» y «Está claro que» afirman una certeza y van con indicativo."
      ),
      toEs(
        "Creo que la reforma reducirá el paro.",
        "No creo que la reforma reduzca el paro.",
        "Al negar el verbo de opinión, el hablante deja de afirmar el contenido: el futuro de indicativo (reducirá) pasa a presente de subjuntivo (reduzca), que también expresa futuro.",
        ["No creo que la reforma vaya a reducir el paro.", "No creo que la reforma reduzca el desempleo."],
        "Cambia a la forma negativa: «No creo que…»."
      ),
      toEs(
        "Si invertimos en prevención, no tendremos que pagar después.",
        "Si hubiéramos invertido en prevención, no habríamos tenido que pagar después.",
        "La condición real (si + presente, futuro) pasa a irreal del pasado: si + pluscuamperfecto de subjuntivo (hubiéramos invertido) y condicional compuesto (habríamos tenido). El condicional nunca va detrás de «si».",
        ["Si hubiésemos invertido en prevención, no habríamos tenido que pagar después.", "Si hubiéramos invertido en prevención, no hubiéramos tenido que pagar después.", "Si hubiéramos invertido en prevención, no habríamos tenido que pagar luego."],
        "Pasa a condicional irreal del pasado."
      ),
      toEs(
        "La falta de transparencia me preocupa.",
        "Lo que me preocupa es la falta de transparencia.",
        "La hendida «Lo que + verbo + es + elemento destacado» lleva al final la información nueva: la falta de transparencia queda en posición de foco.",
        ["Lo que me preocupa es la ausencia de transparencia.", "Lo que a mí me preocupa es la falta de transparencia."],
        "Transforma en oración hendida con «Lo que…»."
      ),
      toEs(
        "No creo que el Gobierno sabe lo que hace.",
        "No creo que el Gobierno sepa lo que hace.",
        "«No creo que» niega la opinión y exige subjuntivo: sepa (saber es irregular). «Lo que hace» sigue en indicativo porque es una relativa que se refiere a algo real.",
        ["No creo que el gobierno sepa lo que hace."],
        "Corrige la frase."
      ),
      toEs(
        "Si habríamos escuchado a los técnicos, no estaríamos aquí.",
        "Si hubiéramos escuchado a los técnicos, no estaríamos aquí.",
        "Tras «si» condicional nunca va condicional: el pasado irreal se expresa con pluscuamperfecto de subjuntivo (hubiéramos/hubiésemos escuchado). La consecuencia presente sí va en condicional (estaríamos).",
        ["Si hubiésemos escuchado a los técnicos, no estaríamos aquí."],
        "Corrige la frase."
      ),
      toEs(
        "Es lamentable que la oposición no tiene un plan alternativo.",
        "Es lamentable que la oposición no tenga un plan alternativo.",
        "«Es lamentable que» valora un hecho y exige subjuntivo: tenga. Que el hecho sea cierto no cambia el modo: lo decide la valoración.",
        [],
        "Corrige la frase."
      ),
      toEs("It is outrageous that the report has been published without verified data.", "Es indignante que se haya publicado el informe sin datos contrastados.", "La valoración «Es indignante que» exige subjuntivo; como el hecho ya ha ocurrido, va en pretérito perfecto de subjuntivo (se haya publicado). Error frecuente: «se ha publicado», en indicativo.", ["Es indignante que el informe se haya publicado sin datos contrastados.", "Es indignante que se haya publicado el informe sin datos verificados.", "Resulta indignante que se haya publicado el informe sin datos contrastados.", "Es escandaloso que se haya publicado el informe sin datos contrastados."]),
      wo("Lo que más nos debería preocupar es la desigualdad", "Hendida: «Lo que + verbo» en singular recoge una idea, y «es» presenta el elemento destacado al final de la frase.", "What should worry us most is inequality."),
    ]
  ),
  L(
    "presentations-negotiation-1",
    "c2r-present-openings",
    "Contraste: aperturas que enganchan y aperturas que aburren",
    "Pregunta, dato sorprendente, anécdota o cita: elige el gancho adecuado para cada público.",
    "8 min",
    [
      sec(
        "La regla: el gancho abre una pregunta en la cabeza del público",
        [
          "En los primeros treinta segundos el público decide si va a escuchar. Un buen gancho funciona porque crea una pequeña tensión que solo el resto de la charla resuelve: una pregunta al público («¿Cuántos de ustedes han…?»), un dato sorprendente («Cada minuto se pierden…»), una anécdota breve, una cita pertinente o una hipótesis («Imaginen que…»).",
          "Las aperturas débiles hacen lo contrario: rebajan las expectativas. Disculparse («Perdón, no soy muy buen orador»), leer el índice sin más o empezar con problemas técnicos le dicen al público que no merece la pena atender. Tras el gancho, y no antes, se presentan el hilo conductor y la estructura. El gancho se elige según el público: a un auditorio técnico y escéptico lo convence un dato verificable; a uno general, una anécdota o una pregunta.",
          "Gramática del gancho: al público se le habla de ustedes, con el verbo en tercera persona del plural (¿Cuántos de ustedes han…?, Imaginen…, les voy a contar…).",
        ],
        [
          ["¿Cuántos de ustedes han perdido un vuelo por un error informático?", "How many of you have missed a flight due to a computer error? (pregunta al público)"],
          ["Cada minuto se tiran a la basura 2.000 kilos de comida en este país.", "Every minute, 2,000 kilos of food are thrown away in this country. (dato sorprendente)"],
          ["Imaginen por un momento que mañana no hubiera internet.", "Imagine for a moment that tomorrow there were no internet. (hipótesis: imperfecto de subjuntivo)"],
        ],
        [
          mc(
            "¿Qué apertura resta credibilidad?",
            ["Perdonen, no he preparado mucho esto.", "¿Cuántos de ustedes usan el móvil antes de dormir?", "Les voy a contar lo que me pasó el martes.", "En España se tiran 1.300 millones de kilos de comida al año."],
            0,
            "Disculparse por no haberse preparado resta credibilidad desde el principio. La pregunta al público, la anécdota personal y el dato impactante son aperturas eficaces."
          ),
          mc(
            "Vas a hablar a un congreso de ingenieros sobre el coste de las averías. ¿Qué gancho elegirías?",
            ["«Una avería de una hora le cuesta a una planta media 40.000 euros.»", "«Perdonen, los números no son lo mío.»", "«Les voy a leer el índice de la charla.»", "«Antes de empezar, ¿alguien sabe si funciona el micrófono?»"],
            0,
            "Ante un público técnico, un dato concreto y verificable crea tensión (¿cómo se evita esa pérdida?) y da credibilidad. Las otras opciones rebajan las expectativas: una disculpa, un índice leído y un problema técnico."
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
        "Cada gancho crea tensión de un modo: la pregunta implica al público, el dato sorprende y la anécdota abre una historia que el oyente quiere ver terminar."
      ),
      fb("Completa (estructura).", "Mi presentación consta de tres ___: el problema, la causa y la solución.", "partes", "Anunciar la estructura orienta al público: «consta de tres partes» (constar de + número de partes)."),
      fb("Completa (idea que une la presentación).", "El hilo ___ de hoy será una sola pregunta: ¿qué harían ustedes?", "conductor", "El hilo conductor es la idea o pregunta que une toda la presentación."),
      mc(
        "Tras el gancho, lo siguiente es…",
        ["anunciar el objetivo y la estructura", "enseñar la bibliografía", "despedirse", "hacer un descanso"],
        0,
        "Tras el gancho se orienta al público anunciando el objetivo y la estructura. La bibliografía va al final, despedirse sería cerrar antes de empezar y un descanso no tiene sentido tras la apertura."
      ),
      mc(
        "Para un público técnico y escéptico, el gancho más eficaz suele ser…",
        ["un dato contundente y verificable", "un chiste largo", "una disculpa", "una canción"],
        0,
        "Ante un público técnico y escéptico, un dato contundente y verificable da credibilidad. Un chiste largo o una canción restan seriedad, y una disculpa debilita desde el principio."
      ),
      toEs("How many of you have ever missed a flight?", "¿Cuántos de ustedes han perdido alguna vez un vuelo?", "Pregunta al público con «ustedes» + tercera persona del plural (han), registro de presentación formal.", ["¿Cuántos de ustedes alguna vez han perdido un vuelo?"]),
      toEs(
        "Muchos de ustedes han olvidado alguna vez una contraseña.",
        "¿Cuántos de ustedes han olvidado alguna vez una contraseña?",
        "Convertir una afirmación en pregunta al público implica al oyente: cada uno se responde mentalmente. «¿Cuántos de ustedes…?» mantiene el verbo en tercera persona del plural (han).",
        ["¿Alguno de ustedes ha olvidado alguna vez una contraseña?", "¿Quién de ustedes ha olvidado alguna vez una contraseña?", "¿Cuántos de ustedes han olvidado una contraseña alguna vez?"],
        "Transforma la afirmación en una pregunta al público con «¿Cuántos de ustedes…?»."
      ),
      toEs(
        "Imagina por un momento que mañana cerraran todos los hospitales.",
        "Imaginen por un momento que mañana cerraran todos los hospitales.",
        "Ante un auditorio, el imperativo va en la forma de ustedes: imagina (tú) → imaginen. La hipótesis sigue en imperfecto de subjuntivo (cerraran).",
        ["Imaginen por un momento que mañana cerrasen todos los hospitales."],
        "Cambia a la forma de ustedes: hablas a un auditorio."
      ),
      toEs(
        "¿Cuántos de ustedes habéis llegado tarde a una entrevista de trabajo?",
        "¿Cuántos de ustedes han llegado tarde a una entrevista de trabajo?",
        "«Ustedes» se construye con la tercera persona del plural (han), también en España: «ustedes habéis» mezcla dos tratamientos. Con «vosotros» sería «¿Cuántos de vosotros habéis…?».",
        ["¿Cuántos de vosotros habéis llegado tarde a una entrevista de trabajo?"],
        "Corrige la frase."
      ),
      wo("Hoy quiero hablarles de algo que nos afecta a todos.", "«Hablar de» + tema (hablarles de algo); «les» se refiere al público (ustedes) y «nos» incluye al hablante.", "Today I want to talk to you about something that affects us all."),
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
        "La regla: cerrar lo anterior y abrir lo siguiente",
        [
          "Una transición hace dos cosas a la vez: confirma que una parte ha terminado y anuncia la siguiente. Así el oyente, que no ve los títulos, sabe en qué punto del guion está. Fórmulas: pasar de sección («Una vez visto el problema, pasemos a sus causas»), retomar («Como decía hace un momento…»), resumir lo parcial («Recapitulando…»), anunciar un ejemplo («Veámoslo con un caso concreto»), remitir a la diapositiva («Como pueden ver en este gráfico…») y anunciar el final («Y para terminar…»).",
          "Dos piezas de gramática sostienen estas fórmulas. El participio absoluto («Una vez + participio + sustantivo») concuerda con el sustantivo: visto el problema, vistas las causas, analizados los datos. El imperativo de nosotros (pasemos, veamos, detengámonos) incluye al público en el recorrido; con pronombre, el pronombre va pegado: veámoslo.",
        ],
        [
          ["Una vez visto el diagnóstico, pasemos a las soluciones.", "Having seen the diagnosis, let's move on to the solutions. (visto: el diagnóstico, masc. sing.)"],
          ["Una vez analizadas las cifras, detengámonos en una de ellas.", "Having analysed the figures, let's stop at one of them. (analizadas: las cifras, fem. pl.)"],
          ["Como pueden observar en este gráfico…", "As you can see in this chart… (remitir a la diapositiva)"],
        ],
        [
          mc(
            "Fórmula para pasar a la siguiente sección:",
            ["Una vez analizado el problema, pasemos a las causas.", "Bueno, y ahora otra cosa.", "Esto ya está.", "Siguiente."],
            0,
            "Una transición formal cierra una sección y abre otra: participio absoluto («Una vez analizado») + «pasemos a». «Bueno, y ahora otra cosa», «Esto ya está» y «Siguiente» suenan improvisados y no orientan al público."
          ),
          mc(
            "«Una vez ___ las propuestas, pasemos a votar.» (presentar)",
            ["presentadas", "presentado", "presentados", "presentando"],
            0,
            "El participio absoluto concuerda con su sustantivo: «las propuestas» es femenino plural, así que presentadas. «Presentado» sería para un sustantivo masculino singular y «presentando» es gerundio, que no admite «una vez»."
          ),
        ]
      ),
    ],
    [
      { ...fb("Transición.", "Una vez ___ el contexto, pasemos a los datos. (ver)", "visto", "Participio absoluto: «Una vez visto el contexto» (participio concordado con «el contexto»)."), altAnswers: ["analizado", "estudiado"] },
      { ...fb("Remisión.", "Como pueden ___ en esta diapositiva, las ventas crecieron. (ver con atención, infinitivo)", "observar", "«Como pueden observar» remite al público a la diapositiva; poder + infinitivo."), altAnswers: ["ver", "apreciar"] },
      fb("Recapitulación.", "___, hemos visto tres causas principales. (resumiendo, gerundio de recapitular)", "Recapitulando", "El gerundio «Recapitulando» introduce un resumen de lo visto hasta ahora."),
      mc(
        "«Veámoslo con un caso concreto» anuncia…",
        ["un ejemplo", "el final", "una pausa", "una pregunta del público"],
        0,
        "«Veámoslo con un caso concreto» anuncia un ejemplo. No indica el final, una pausa ni el turno de preguntas del público."
      ),
      mc(
        "«Como decía hace un momento…» sirve para…",
        ["retomar una idea anterior", "terminar", "cambiar de tema radicalmente", "saludar"],
        0,
        "«Como decía hace un momento…» retoma una idea anterior para enlazarla. No sirve para terminar, cambiar radicalmente de tema ni saludar."
      ),
      toEs("Having seen the causes, let's move on to the solutions.", "Una vez vistas las causas, pasemos a las soluciones.", "Transición con participio absoluto concordado: «Una vez vistas las causas» (femenino plural), + «pasemos a».", ["Vistas las causas, pasemos a las soluciones.", "Una vez analizadas las causas, pasemos a las soluciones."]),
      toEs(
        "Ya hemos analizado los costes. Ahora vamos a ver los beneficios.",
        "Una vez analizados los costes, pasemos a los beneficios.",
        "Las dos frases sueltas se funden en una transición: participio absoluto concordado con «los costes» (analizados, masculino plural) + imperativo de nosotros (pasemos a).",
        ["Una vez analizados los costes, veamos los beneficios.", "Analizados los costes, pasemos a los beneficios.", "Una vez analizados los costes, pasemos ahora a los beneficios."],
        "Une las dos frases en una transición con «Una vez + participio» y «pasemos a»."
      ),
      toEs(
        "Vamos a verlo con un ejemplo.",
        "Veámoslo con un ejemplo.",
        "El imperativo de nosotros (veamos) sustituye a «vamos a + infinitivo» en el registro de la exposición; el pronombre se pega al verbo y la -s final se mantiene ante «lo»: veámoslo, con tilde.",
        ["Veámoslo con un caso concreto."],
        "Transforma con el imperativo de nosotros."
      ),
      toEs(
        "Una vez explicado la metodología, pasemos a los resultados.",
        "Una vez explicada la metodología, pasemos a los resultados.",
        "El participio absoluto concuerda con su sustantivo: «la metodología» es femenino singular, así que explicada.",
        [],
        "Corrige la frase."
      ),
      wo("Y para terminar, me gustaría dejarles una pregunta.", "«Y para terminar» avisa del cierre; «dejarles» lleva «les» = al público, y «me gustaría» es condicional de cortesía.", "And to finish, I'd like to leave you with a question."),
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
        "La regla: agradecer, justificar, condicionar",
        [
          "Ante una oferta insuficiente, la respuesta eficaz sigue un orden fijo, y cada paso tiene su razón. Agradecer («Le agradezco la propuesta») protege la relación: rechazas la cifra, no a la persona. Justificar («Sin embargo, teniendo en cuenta el volumen del pedido…») da un motivo objetivo, que es más difícil de discutir que un simple «no». Contraofertar con condición («Estaríamos dispuestos a aceptar si…», «¿Qué le parecería…?») mantiene abierto el margen de maniobra sin regalar nada.",
          "La gramática hace el trabajo diplomático: el condicional (estaríamos, podríamos, querríamos) presenta la propuesta como posibilidad, no como exigencia; «siempre que / siempre y cuando / con la condición de que» + subjuntivo marca lo que pides a cambio; y «¿Qué le parecería que + imperfecto de subjuntivo?» propone sin imponer.",
        ],
        [
          ["Estaríamos dispuestos a bajar el precio siempre y cuando el pedido sea anual.", "We'd be willing to lower the price provided the order is annual."],
          ["¿Qué le parecería un descuento del 5 % a cambio de pago anticipado?", "How about a 5% discount in exchange for payment in advance?"],
        ],
        [
          mc(
            "¿Qué respuesta condiciona la concesión?",
            ["Podemos rebajar un 3 %, siempre que se comprometan a dos años.", "Vale, lo que usted diga.", "Ni hablar.", "Rebajamos un 10 % sin más."],
            0,
            "En negociación, cada concesión se condiciona a algo a cambio: «siempre que se comprometan a dos años». «Vale, lo que usted diga» y «Rebajamos un 10 % sin más» ceden sin obtener nada, y «Ni hablar» bloquea."
          ),
          mc(
            "Un proveedor te ofrece un precio demasiado alto. ¿Qué respuesta sigue el orden agradecer → justificar → condicionar?",
            ["«Gracias por la oferta. Dado que el pedido es para tres años, ¿qué le parecería un 6 % menos si pagamos por trimestres?»", "«Es carísimo. Bájelo.»", "«¿Un 6 % menos? Si no, nos vamos.»", "«Gracias. De acuerdo con todo.»"],
            0,
            "La primera agradece, justifica con un dato objetivo (tres años) y condiciona la rebaja a algo a cambio (pago trimestral), en condicional. Las demás exigen, amenazan o ceden sin negociar."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "Estaríamos dispuestos a aceptar siempre y cuando el plazo ___ de 60 días. (ser)", "sea", "«Siempre y cuando» es condicional y exige subjuntivo: sea."),
      fb("Completa.", "¿Qué le ___ un descuento a cambio de exclusividad? (parecer, condicional)", "parecería", "El condicional «¿Qué le parecería…?» suaviza la propuesta y la hace más negociable."),
      fb("Completa.", "Le ___ la propuesta, pero no se ajusta a nuestro presupuesto. (agradecer, yo)", "agradezco", "Agradecer antes de rechazar («Le agradezco la propuesta, pero…») suaviza la negativa."),
      mc(
        "«Margen de maniobra» es…",
        ["el espacio para ceder o ajustar la postura", "el beneficio final", "un plazo de pago", "el contrato firmado"],
        0,
        "El «margen de maniobra» es el espacio que tienes para ceder o ajustar tu postura. No es el beneficio final, un plazo de pago ni el contrato firmado."
      ),
      ms(
        "¿Qué frases condicionan una concesión?",
        ["siempre que…", "a cambio de…", "con la condición de que…", "porque sí"],
        [0, 1, 2],
        "«Siempre que», «a cambio de» y «con la condición de que» condicionan una concesión. «Porque sí» no pone ninguna condición: es una justificación arbitraria."
      ),
      toEs("We could extend the deadline, provided that you pay in advance.", "Podríamos ampliar el plazo, siempre y cuando paguen por adelantado.", "Concesión condicionada: «siempre y cuando / siempre que» + subjuntivo (paguen).", ["Podríamos ampliar el plazo siempre que paguen por adelantado.", "Podríamos ampliar el plazo, siempre y cuando pague por adelantado.", "Podríamos ampliar el plazo, siempre y cuando pagues por adelantado.", "Podríamos ampliar el plazo, siempre y cuando paguéis por adelantado."]),
      toEs(
        "Queremos un descuento del 8 % y el envío gratuito.",
        "Querríamos un descuento del 8 % y el envío gratuito.",
        "El condicional de cortesía (querríamos) convierte una exigencia en una propuesta negociable. También vale el imperfecto de subjuntivo «quisiéramos».",
        ["Quisiéramos un descuento del 8 % y el envío gratuito.", "Nos gustaría un descuento del 8 % y el envío gratuito.", "Querríamos un descuento del 8 % y envío gratuito."],
        "Cambia el verbo al condicional de cortesía."
      ),
      toEs(
        "Ampliamos el plazo de pago a 90 días.",
        "Ampliaríamos el plazo de pago a 90 días, siempre que el pedido sea anual.",
        "Una concesión nunca va gratis: se pasa al condicional (ampliaríamos) y se condiciona con «siempre que» + subjuntivo (sea).",
        ["Ampliaríamos el plazo de pago a 90 días siempre que el pedido sea anual.", "Ampliaríamos el plazo de pago a 90 días, siempre y cuando el pedido sea anual.", "Podríamos ampliar el plazo de pago a 90 días, siempre que el pedido sea anual."],
        "Transforma la frase en una concesión condicionada: condicional + «siempre que el pedido sea anual»."
      ),
      toEs(
        "¿Qué le parecería que firmamos el contrato por tres años?",
        "¿Qué le parecería que firmáramos el contrato por tres años?",
        "«¿Qué le parecería que…?» presenta una hipótesis con el verbo principal en condicional, y la subordinada va en imperfecto de subjuntivo (firmáramos o firmásemos), nunca en indicativo.",
        ["¿Qué le parecería que firmásemos el contrato por tres años?"],
        "Corrige la frase."
      ),
      toEs(
        "Estaríamos dispuestos a aceptar con la condición de que el pedido es anual.",
        "Estaríamos dispuestos a aceptar con la condición de que el pedido sea anual.",
        "«Con la condición de que» introduce algo que todavía no se ha cumplido y exige subjuntivo: sea.",
        ["Estaríamos dispuestos a aceptar siempre que el pedido sea anual."],
        "Corrige la frase."
      ),
      wo("A cambio de un compromiso de dos años, podríamos mejorar las condiciones.", "«A cambio de» + sustantivo condiciona la concesión; «podríamos» (condicional) la presenta como una posibilidad cortés.", "In exchange for a two-year commitment, we could improve the terms."),
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
        "La regla: cambiar el terreno de la discusión",
        [
          "Un punto muerto no se rompe empujando más fuerte, sino cambiando de terreno. Resumir los acuerdos parciales («Hemos avanzado en X e Y; solo nos queda Z») recuerda que el atasco es pequeño. Pasar de posiciones a intereses («¿Qué es lo que realmente les preocupa?») descubre el motivo que hay detrás de la exigencia. Ampliar el pastel añade variables nuevas (plazos, volumen, servicios) para que ambos ganen. Y una pausa estratégica («Propongo que lo consultemos y lo retomemos mañana») enfría los ánimos.",
          "La gramática de la misión: la hipótesis «¿Y si + imperfecto de subjuntivo?» (¿Y si dividiéramos…?) propone sin comprometer; con presente de indicativo (¿Y si dividimos…?) es igual de correcta y más directa. «Propongo que» va siempre con subjuntivo, porque propone una acción que aún no existe. El balance se hace en pretérito perfecto: hemos avanzado, hemos cerrado.",
        ],
        [
          ["¿Y si dividiéramos el pago en tres plazos?", "What if we split the payment into three installments?"],
          ["¿Qué es lo que realmente les preocupa de esta cláusula?", "What really worries you about this clause?"],
        ],
        [
          mc(
            "¿Qué pregunta busca los intereses de fondo?",
            ["¿Qué es lo que realmente les preocupa?", "¿Firman o no firman?", "¿Por qué son tan tozudos?", "¿Lo dejamos?"],
            0,
            "«¿Qué es lo que realmente les preocupa?» busca los intereses de fondo, no las posiciones. «¿Firman o no firman?» presiona, «¿Por qué son tan tozudos?» ataca y «¿Lo dejamos?» abandona la negociación."
          ),
          mc(
            "Negociáis el precio de un software y nadie se mueve. ¿Qué propuesta «amplía el pastel»?",
            ["«¿Y si incluyéramos la formación del personal y un año de soporte?»", "«O bajan el precio o nos vamos.»", "«Repitamos nuestras cifras.»", "«Dividamos la diferencia y en paz.»"],
            0,
            "Ampliar el pastel es añadir variables nuevas (formación, soporte) con las que ambas partes pueden ganar algo. El ultimátum bloquea, repetir cifras no cambia el terreno y partir la diferencia reparte el mismo pastel sin ampliarlo."
          ),
        ]
      ),
    ],
    [
      fb("Hipótesis.", "¿Y si ___ el plazo de entrega a cambio de un precio menor? (ampliar, nosotros)", "ampliáramos", "¿Y si + imperfecto de subjuntivo? suena más hipotético y cortés; ¿Y si + presente (ampliamos)? también es correcto y más directo."),
      fb("Resumen.", "Hemos ___ mucho; solo nos queda cerrar el precio. (avanzar)", "avanzado", "Pretérito perfecto (hemos avanzado) para hacer balance de lo logrado hasta ahora."),
      fb("Pausa.", "Propongo que lo ___ con nuestros equipos y lo retomemos mañana. (consultar, nosotros)", "consultemos", "«Proponer que» (proponer una acción) va siempre con subjuntivo: consultemos."),
      mc(
        "«Ampliar el pastel» significa…",
        ["introducir nuevas variables para que ambos ganen", "comer más", "subir el precio", "romper la negociación"],
        0,
        "«Ampliar el pastel» es introducir nuevas variables para que ambas partes ganen (crear valor). No significa comer más, subir el precio ni romper la negociación."
      ),
      mc(
        "«Estamos en un punto muerto» significa que…",
        ["la negociación no avanza", "alguien ha muerto", "hay acuerdo", "falta un documento"],
        0,
        "«Estar en un punto muerto» es estar estancado: la negociación no avanza. No tiene nada que ver con una muerte, no hay acuerdo y no falta ningún documento."
      ),
      toEs("What if we met halfway?", "¿Y si nos encontráramos a medio camino?", "Hipótesis negociadora con «¿Y si…?» + imperfecto de subjuntivo: «¿Y si nos encontráramos a medio camino?». Con presente de indicativo («¿Y si nos encontramos…?») es igual de correcto y más directo.", ["¿Y si llegáramos a un punto intermedio?", "¿Y si partiéramos la diferencia?", "¿Y si nos encontramos a medio camino?"]),
      toEs(
        "Podemos alargar el contrato a cambio de un precio menor.",
        "¿Y si alargáramos el contrato a cambio de un precio menor?",
        "La hipótesis «¿Y si + imperfecto de subjuntivo?» convierte una afirmación en una propuesta exploratoria, sin comprometerse todavía. Con presente («¿Y si alargamos…?») también es correcto, más directo.",
        ["¿Y si alargásemos el contrato a cambio de un precio menor?", "¿Y si alargamos el contrato a cambio de un precio menor?"],
        "Transforma la afirmación en una hipótesis con «¿Y si…?»."
      ),
      toEs(
        "Propongo que hacemos una pausa de diez minutos.",
        "Propongo que hagamos una pausa de diez minutos.",
        "«Proponer que» introduce una acción todavía no realizada y exige subjuntivo: hagamos (hacer es irregular). «Hacemos» es indicativo.",
        [],
        "Corrige la frase."
      ),
      { ...fb("Completa con el verbo adecuado.", "Lo que piden es un descuento, pero lo que les ___ en realidad es la liquidez de este trimestre. (preocupar)", "preocupa", "Separar la posición (el descuento) del interés (la liquidez) es la clave para desbloquear. «Lo que les preocupa» va en singular porque concuerda con «lo que»."), altAnswers: ["inquieta"] },
      wo("Hemos avanzado mucho; solo nos falta acordar el calendario.", "«Hemos avanzado mucho» (pretérito perfecto) hace balance hasta ahora; «solo nos falta + infinitivo» señala lo pendiente.", "We've made a lot of progress; we only need to agree on the schedule."),
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
        "La regla: gestos que abren y gestos que cierran",
        "El público interpreta el cuerpo antes que las palabras. Abren (transmiten seguridad y sinceridad): recorrer la sala con la mirada, esperar a que se haga silencio antes de hablar, las palmas abiertas, las pausas deliberadas. Cierran (delatan inseguridad o defensa): cruzarse de brazos, mirar al suelo, la voz apresurada. Para leer una crónica como detective, separa lo que el orador hace por costumbre (imperfecto: hablaba, gesticulaba) de lo que cambia en un momento concreto (indefinido: se cruzó de brazos). Ese cambio es lo que revela su estado de ánimo.",
        [
          ["Esperó a que el público se callara.", "She waited for the audience to fall silent. (esperar a que + subjuntivo)"],
          ["Hablaba despacio, pero al final se cruzó de brazos.", "She spoke slowly, but at the end she crossed her arms. (costumbre / cambio puntual)"],
        ],
        [
          mc(
            "Aplica la regla a otra escena: «El ministro respondía con calma, pero cuando le preguntaron por la deuda, se tocó la nariz y apartó la mirada.» ¿Qué revela?",
            ["Que la pregunta sobre la deuda le incomodó", "Que estaba seguro de su respuesta", "Que quería terminar ya por cansancio", "Nada: es un gesto habitual"],
            0,
            "El imperfecto (respondía) describe su actitud habitual; el indefinido (se tocó, apartó) marca un cambio puntual justo con la pregunta incómoda, y apartar la mirada es un gesto que cierra."
          ),
        ]
      ),
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
            "Gesticular con las palmas abiertas transmite apertura y sinceridad. Cruzarse de brazos es una barrera, mirar al suelo transmite inseguridad y hablar apresuradamente, nervios."
          ),
        ]
      ),
    ],
    [
      ms(
        "¿Qué señales delatan inseguridad al final?",
        ["cruzarse de brazos", "mirar al suelo", "voz apresurada", "pausas deliberadas"],
        [0, 1, 2],
        "Cruzarse de brazos, mirar al suelo y la voz apresurada delatan inseguridad. Las pausas deliberadas, en cambio, transmiten control."
      ),
      mc(
        "«Esperó a que se hiciera silencio» indica…",
        ["control de la situación", "nerviosismo", "falta de preparación", "enfado"],
        0,
        "Esperar a que se haga silencio antes de hablar muestra control de la situación. El nerviosismo o la falta de preparación harían empezar precipitadamente, y nada indica enfado."
      ),
      fb("Completa según el texto.", "Recorrió la sala con la ___.", "mirada", "«Recorrer la sala con la mirada» es establecer contacto visual con todo el público."),
      { ...fb("Completa (subjuntivo).", "Esperó a que ___ silencio. (hacerse)", "se hiciera", "«Esperar a que» + subjuntivo; en pasado, imperfecto: se hiciera."), altAnswers: ["hubiera"] },
      mc(
        "¿Qué habría sido más eficaz ante la pregunta incómoda?",
        ["mantener la mirada y agradecer la pregunta", "cruzarse de brazos", "cambiar de tema sin responder", "salir de la sala"],
        0,
        "Ante una pregunta incómoda conviene mantener la mirada y la postura abierta y agradecer la pregunta. Cruzarse de brazos, cambiar de tema o salir de la sala muestran inseguridad o evasión."
      ),
      toEs("She waited for silence before starting.", "Esperó a que se hiciera silencio antes de empezar.", "«Esperar a que» + imperfecto de subjuntivo en pasado: se hiciera / hubiera silencio.", ["Esperó a que hubiera silencio antes de empezar."]),
      toEs(
        "El orador espera a que el público deje de hablar.",
        "El orador esperó a que el público dejara de hablar.",
        "«Esperar a que» va siempre con subjuntivo; si el verbo principal pasa al pasado (esperó), el subjuntivo pasa al imperfecto (dejara o dejase).",
        ["El orador esperó a que el público dejase de hablar.", "El orador esperaba a que el público dejara de hablar."],
        "Pasa la frase al pasado (indefinido)."
      ),
      toEs(
        "Antes de seguir, esperó a que el técnico pudo arreglar el proyector.",
        "Antes de seguir, esperó a que el técnico pudiera arreglar el proyector.",
        "«Esperar a que» introduce algo que todavía no había ocurrido en ese momento y exige subjuntivo: pudiera (o pudiese), no el indicativo «pudo».",
        ["Antes de seguir, esperó a que el técnico pudiese arreglar el proyector."],
        "Corrige la frase."
      ),
      toEs(
        "Cruzarse de brazos ante una pregunta transmite apertura.",
        "Cruzarse de brazos ante una pregunta transmite inseguridad.",
        "Cruzarse de brazos levanta una barrera: es un gesto que cierra y delata inseguridad o actitud defensiva. La apertura se transmite con las palmas abiertas.",
        ["Cruzarse de brazos ante una pregunta transmite una actitud defensiva.", "Cruzarse de brazos ante una pregunta transmite nerviosismo."],
        "Corrige la frase."
      ),
      wo("Hablaba despacio y hacía pausas para subrayar las ideas clave.", "El imperfecto («hablaba», «hacía») describe cómo actuaba la ponente en la escena; «para + infinitivo» expresa la finalidad de las pausas.", "She spoke slowly and paused to highlight key ideas."),
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
        "La regla: en el turno de preguntas no se juzga si sabes todo, sino si eres fiable. Por eso cada fórmula protege la credibilidad: agradecer valida a quien pregunta, ganar tiempo evita improvisar, reformular comprueba que respondes a lo que te preguntan, reconocer límites (y comprometerse) es mejor que inventar, y redirigir sin evadir contesta primero lo que te toca. Gramática: al público se le trata de usted (le he entendido, me pregunta), y los pronombres se combinan con «se» delante de lo/la (se lo haré llegar, se la agradezco). Agradecer: «Gracias por la pregunta, es muy pertinente». Ganar tiempo: «Déjeme pensarlo un segundo». Reformular: «Si le he entendido bien, me pregunta si…». Reconocer límites: «No dispongo de ese dato ahora mismo, pero se lo haré llegar». Redirigir sin evadir: «Es una cuestión importante; permítame responder primero a la parte que me toca».",
        [
          ["No dispongo de ese dato ahora, pero se lo haré llegar.", "I don't have that figure right now, but I'll send it to you."],
          ["Si le he entendido bien, me pregunta si…", "If I've understood correctly, you're asking whether…"],
        ],
        [
          mc(
            "No sabes la respuesta. Lo más profesional es:",
            ["Reconocerlo y comprometerse a enviar la información.", "Inventarse un dato.", "Ignorar la pregunta.", "Criticar a quien pregunta."],
            0,
            "Lo profesional es reconocer que no lo sabes y comprometerte a enviar la información. Inventarse un dato destruye la credibilidad, e ignorar o criticar a quien pregunta es descortés."
          ),
          mc(
            "Te hacen una pregunta larga y confusa con dos partes. ¿Qué haces primero?",
            ["Reformularla: «Si le he entendido bien, me pregunta dos cosas…»", "Responder solo la parte que te conviene", "Decir que la pregunta no se entiende", "Pasar a la siguiente pregunta"],
            0,
            "Reformular comprueba que has entendido, ordena la respuesta y te da tiempo. Responder solo lo que conviene es evadir; descalificar la pregunta o saltarla daña tu credibilidad."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "No ___ de ese dato ahora mismo. (disponer, yo)", "dispongo", "«Disponer de» algo es tenerlo a mano; registro formal: no dispongo de ese dato."),
      fb("Completa.", "Se lo haré ___ esta misma semana. (enviar, perífrasis con hacer)", "llegar", "«Hacer llegar» algo a alguien es enviárselo (registro formal): se lo haré llegar."),
      fb("Completa.", "Gracias por la pregunta; es muy ___. (oportuna y relevante)", "pertinente", "«Pertinente» significa oportuno y relevante, un elogio habitual a una pregunta."),
      mc(
        "«Déjeme pensarlo un segundo» sirve para…",
        ["ganar tiempo", "terminar la charla", "rechazar la pregunta", "cambiar de idioma"],
        0,
        "«Déjeme pensarlo un segundo» sirve para ganar tiempo antes de responder. No termina la charla, no rechaza la pregunta ni cambia de idioma."
      ),
      mc(
        "Alguien hace una pregunta hostil. La mejor respuesta empieza por…",
        ["Entiendo su preocupación; déjeme explicarle…", "Esa pregunta es estúpida.", "No pienso responder.", "Siguiente pregunta."],
        0,
        "Ante una pregunta hostil se valida la preocupación y luego se responde. Descalificar la pregunta, negarse a responder o pasar a la siguiente muestran debilidad o descortesía."
      ),
      toEs("If I've understood you correctly, you're asking whether…", "Si le he entendido bien, me pregunta si…", "Reformular la pregunta: «Si le he entendido bien, me pregunta si…» (usted, registro formal).", ["Si le entiendo bien, me pregunta si…", "Si no le he entendido mal, me pregunta si…"]),
      toEs(
        "Si te he entendido bien, me preguntas si el proyecto es viable.",
        "Si le he entendido bien, me pregunta si el proyecto es viable.",
        "En el turno de preguntas se trata al público de usted: te → le, preguntas → pregunta (tercera persona).",
        ["Si la he entendido bien, me pregunta si el proyecto es viable.", "Si le he entendido bien, usted me pregunta si el proyecto es viable."],
        "Cambia a la forma de usted."
      ),
      toEs(
        "Le haré llegar el informe mañana.",
        "Se lo haré llegar mañana.",
        "Al sustituir «el informe» por «lo», el pronombre «le» se convierte en «se» delante de lo/la: se lo haré llegar (nunca «le lo»).",
        ["Mañana se lo haré llegar.", "Se lo haré llegar a usted mañana."],
        "Sustituye «el informe» por un pronombre."
      ),
      toEs(
        "Ahora mismo no dispongo con esa cifra, pero se la enviaré esta tarde.",
        "Ahora mismo no dispongo de esa cifra, pero se la enviaré esta tarde.",
        "«Disponer» con el sentido de «tener a mano» rige la preposición «de»: disponer de un dato, de tiempo, de recursos.",
        [],
        "Corrige la frase."
      ),
      wo("Es una cuestión muy pertinente y se la agradezco.", "«Agradecer algo a alguien»: «la» (la pregunta) es el complemento directo y «se» (= le) el indirecto, de ahí «se la agradezco».", "It's a very relevant question and I appreciate it."),
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
        "La regla: lo que no está escrito, no está acordado",
        [
          "Tras una negociación oral, cada parte recuerda lo que le conviene. El correo de cierre deja constancia y evita malentendidos con cuatro piezas: el resumen numerado de lo acordado («Tal como acordamos: 1)… 2)…»), los compromisos de cada parte, los plazos concretos y los próximos pasos.",
          "Su gramática es la del registro comercial: futuro y pasiva refleja para los compromisos (el pago se efectuará, el envío se realizará), «rogar que» + subjuntivo para pedir con cortesía (Le ruego que me confirme…), y el participio absoluto para encadenar pasos (Una vez recibida su confirmación, le enviaremos…).",
        ],
        [
          ["La mercancía se entregará en el almacén de Valencia.", "The goods will be delivered to the Valencia warehouse. (futuro + pasiva refleja)"],
          ["Una vez firmado el contrato, les enviaremos el calendario.", "Once the contract is signed, we will send you the schedule. (participio absoluto)"],
        ],
        [
          mc(
            "¿Qué frase convierte «ya hablaremos del transporte» en un próximo paso concreto?",
            ["«El lunes 3 le enviaré dos presupuestos de transporte para que elija uno.»", "«Del transporte ya se verá.»", "«El transporte, cuando sea.»", "«Hablamos.»"],
            0,
            "Un próximo paso concreto dice quién hace qué y cuándo (el lunes 3, yo, dos presupuestos). Las otras opciones dejan el asunto abierto, que es justo lo que el correo de cierre debe evitar."
          ),
        ]
      ),
      sec(
        "El correo de cierre",
        "«Estimado señor Durán: Le agradezco la reunión de ayer. Tal como acordamos: 1) el precio unitario será de 12 €; 2) el primer envío se realizará el 1 de marzo; 3) el pago se efectuará a 30 días. Le ruego que me confirme estos puntos para poder preparar el contrato. Quedo a la espera de su respuesta.»",
        [
          ["Tal como acordamos…", "As we agreed…"],
          ["Quedo a la espera de su respuesta.", "I look forward to your reply."],
        ],
        [
          mc(
            "¿Por qué enumerar los acuerdos?",
            ["para evitar malentendidos y dejar constancia", "para alargar el correo", "porque es obligatorio por ley", "para cambiar las condiciones"],
            0,
            "Enumerar los acuerdos evita malentendidos y deja constancia por escrito. No sirve para alargar el correo ni cambiar las condiciones, y no es una obligación legal."
          ),
        ]
      ),
    ],
    [
      { ...fb("Completa.", "Tal como ___ en la reunión, el plazo será de 30 días. (acordar, nosotros)", "acordamos", "«Tal como acordamos» remite a lo pactado; pretérito indefinido para una reunión concreta ya terminada."), altAnswers: ["quedamos", "convinimos"] },
      fb("Completa.", "Le ruego que me ___ estos puntos. (confirmar)", "confirme", "«Rogar que» + subjuntivo (petición formal): le ruego que me confirme."),
      fb("Completa.", "El pago se ___ a 30 días. (efectuar, futuro)", "efectuará", "Futuro formal en pasiva refleja: el pago se efectuará (registro de contratos y correos comerciales)."),
      mc(
        "Frase adecuada para próximos pasos:",
        ["Una vez recibida su confirmación, le enviaremos el borrador del contrato.", "Ya veremos qué pasa.", "Hablamos cuando sea.", "Bueno, ya está."],
        0,
        "La frase adecuada concreta el próximo paso: participio absoluto («Una vez recibida su confirmación») + futuro. «Ya veremos qué pasa», «Hablamos cuando sea» y «Bueno, ya está» son vagas y coloquiales."
      ),
      ms(
        "¿Qué debe incluir el correo de cierre?",
        ["resumen de los acuerdos", "plazos", "próximos pasos", "críticas al negociador rival"],
        [0, 1, 2],
        "El correo de cierre resume los acuerdos, fija plazos y define los próximos pasos. Criticar al negociador rival estropearía la relación recién construida."
      ),
      toEs("As agreed, the first shipment will be on March 1.", "Tal como acordamos, el primer envío será el 1 de marzo.", "Confirmación de lo pactado: «Tal (y) como acordamos» o «Según lo acordado».", ["Según lo acordado, el primer envío será el 1 de marzo.", "Tal y como acordamos, el primer envío será el 1 de marzo."]),
      toEs(
        "Mándame el contrato firmado antes del viernes, por favor.",
        "Le ruego que me envíe el contrato firmado antes del viernes.",
        "En un correo de cierre formal, la petición se hace con «rogar que» + subjuntivo y trato de usted: le ruego que me envíe (o me remita).",
        ["Le ruego que me remita el contrato firmado antes del viernes.", "Le ruego me envíe el contrato firmado antes del viernes.", "Le ruego que me mande el contrato firmado antes del viernes."],
        "Cambia la petición al registro formal con «Le ruego que…»."
      ),
      toEs(
        "Pagaremos la factura a 60 días.",
        "La factura se pagará a 60 días.",
        "La pasiva refleja en futuro (se pagará) presenta el compromiso de forma objetiva, como en un contrato; el verbo concuerda con «la factura».",
        ["La factura se abonará a 60 días.", "El pago de la factura se efectuará a 60 días."],
        "Transforma la frase en pasiva refleja."
      ),
      toEs(
        "Le ruego que me hace llegar el contrato antes del viernes.",
        "Le ruego que me haga llegar el contrato antes del viernes.",
        "«Rogar que» es una petición y exige subjuntivo: haga (hacer es irregular). «Hace» es indicativo.",
        [],
        "Corrige la frase."
      ),
      wo("Una vez recibida su confirmación, prepararemos el contrato.", "«Una vez recibida su confirmación» es un participio absoluto: concuerda en género y número con «confirmación» (recibida).", "Once we receive your confirmation, we'll prepare the contract."),
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
        "La regla: en la mesa de negociación, la cortesía se hace con los tiempos verbales, no con el contenido. Alejar el verbo del presente (al condicional o al imperfecto) o del hablante (impersonal) suaviza la petición sin rebajar lo que pides: «Nos gustaría…» pide lo mismo que «Queremos…», pero sin imponer. Condicional de cortesía: «Nos gustaría», «Sería conveniente». Imperfecto de cortesía: «Queríamos proponerles…». Condiciones: «En el supuesto de que…», «A no ser que…» (+ subjuntivo). Eufemismo: «un ajuste de precio» (subida). Atenuación: «quizá», «en cierta medida».",
        [
          ["Queríamos proponerles una revisión de las condiciones.", "We wanted to propose a review of the terms."],
          ["A no ser que mejoren la oferta, tendremos que buscar otro proveedor.", "Unless you improve the offer, we'll have to look for another supplier."],
        ],
        [
          mc(
            "«A no ser que ___ el precio, no firmaremos.»",
            ["rebajen", "rebajan", "rebajarán", "rebajaron"],
            0,
            "«A no ser que» es condicional negativa y siempre exige subjuntivo: rebajen. «Rebajan», «rebajarán» y «rebajaron» son formas de indicativo, imposibles tras este conector."
          ),
          mc(
            "¿Qué versión pide lo mismo, pero con más diplomacia?",
            ["Querríamos que revisaran el plazo de entrega.", "Revisen el plazo de entrega.", "Tienen que revisar el plazo de entrega.", "El plazo de entrega está mal."],
            0,
            "El condicional (querríamos) + imperfecto de subjuntivo (revisaran) mantiene la petición intacta pero la presenta como deseo. Las otras tres son una orden, una obligación y una crítica."
          ),
        ]
      ),
    ],
    [
      fb("Imperfecto de cortesía.", "___ plantearles una pequeña modificación. (querer, nosotros)", "Queríamos", "El imperfecto de cortesía («Queríamos») suaviza la petición, aunque se refiere al presente."),
      fb("Condicional.", "En el supuesto de que no ___ acuerdo, cada parte asumirá sus costes. (haber)", "haya", "En el supuesto de que + subjuntivo."),
      fb("Eufemismo.", "Nos vemos obligados a aplicar un ___ de tarifas. (subida, eufemismo)", "ajuste", "Eufemismo comercial: «ajuste de tarifas» suaviza lo que en realidad es una subida."),
      mc(
        "¿Qué versión es más diplomática?",
        ["Sería conveniente revisar el calendario de pagos.", "Tienen que cambiar los pagos.", "Los pagos están mal.", "Cambien los pagos ya."],
        0,
        "La versión diplomática usa condicional impersonal: «Sería conveniente revisar…». «Tienen que cambiar», «Los pagos están mal» y «Cambien los pagos ya» son órdenes o críticas directas."
      ),
      mc(
        "«Nos gustaría que ___ la posibilidad de un descuento.»",
        ["valoraran", "valoran", "valorarán", "valorar"],
        0,
        "«Nos gustaría que» (condicional de deseo) exige imperfecto de subjuntivo: valoraran. «Valoran» y «valorarán» son indicativo, y «valorar» solo sirve cuando el sujeto no cambia («Nos gustaría valorar»)."
      ),
      toEs("Unless you improve the offer, we won't be able to accept.", "A no ser que mejoren la oferta, no podremos aceptar.", "A no ser que + subjuntivo.", ["A menos que mejoren la oferta, no podremos aceptar.", "Salvo que mejoren la oferta, no podremos aceptar."]),
      toEs(
        "Queremos pedirles un aplazamiento del primer pago.",
        "Queríamos pedirles un aplazamiento del primer pago.",
        "El imperfecto de cortesía (queríamos) se refiere al presente, pero al alejar el verbo suaviza la petición. También vale el condicional: querríamos.",
        ["Querríamos pedirles un aplazamiento del primer pago.", "Quisiéramos pedirles un aplazamiento del primer pago."],
        "Cambia el verbo al imperfecto de cortesía."
      ),
      toEs(
        "Tienen que revisar el contrato.",
        "Sería conveniente revisar el contrato.",
        "La obligación directa («tienen que») se atenúa con una construcción impersonal en condicional: sería conveniente + infinitivo. Se pide lo mismo sin señalar a nadie.",
        ["Sería conveniente que revisaran el contrato.", "Convendría revisar el contrato.", "Sería aconsejable revisar el contrato."],
        "Transforma la orden en una sugerencia impersonal con «Sería conveniente…»."
      ),
      toEs(
        "A no ser que nos hacen un descuento, buscaremos otro proveedor.",
        "A no ser que nos hagan un descuento, buscaremos otro proveedor.",
        "«A no ser que» es una condicional negativa y siempre exige subjuntivo: hagan (hacer es irregular), nunca el indicativo «hacen».",
        [],
        "Corrige la frase."
      ),
      wo("Nos gustaría que valoraran la posibilidad de ampliar el plazo.", "«Nos gustaría que» + imperfecto de subjuntivo («valoraran»), porque cambia el sujeto; «valorar la posibilidad de» suaviza la petición.", "We would like you to consider extending the deadline."),
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
        "La regla: al pasar a cita indirecta, todo se mide desde quien cita",
        "En la cita textual hablan las palabras del autor tal cual; en la indirecta hablas tú, y por eso todo lo que dependía del autor se reajusta a tu punto de vista: la primera persona pasa a tercera (estoy → está, nuestros → sus), y si el verbo introductor va en pasado, los tiempos retroceden (es → era, ha publicado → había publicado, publicará → publicaría). Con el verbo introductor en presente (afirma, sostiene) los tiempos no cambian. Cita textual: palabras exactas entre comillas, con página si procede: Según Pérez (2019), «la lengua es un organismo vivo» (p. 12). Cita indirecta o paráfrasis: se reformula con palabras propias y se atribuye: Pérez (2019) sostiene que la lengua evoluciona como un organismo. En la cita indirecta se ajustan los tiempos y los pronombres.",
        [
          ["«El cambio lingüístico es inevitable» (Gómez, 2020, p. 5).", "Direct quote."],
          ["Gómez (2020) afirma que el cambio lingüístico resulta inevitable.", "Indirect quote."],
        ],
        [
          mc(
            "¿Cuál es una cita indirecta?",
            ["Ruiz (2018) señala que la migración transformó el léxico urbano.", "«La migración transformó el léxico urbano» (Ruiz, 2018).", "Ruiz dijo: «La migración…».", "«…» (p. 34)."],
            0,
            "La cita indirecta parafrasea y atribuye la idea sin comillas: «Ruiz (2018) señala que…». Las opciones con comillas son citas textuales, aunque cambie la forma de indicar la fuente."
          ),
        ]
      ),
    ],
    [
      fb("A indirecta.", "Castro afirma: «Estoy convencida de ello». → Castro afirma que ___ convencida de ello.", "está", "Al pasar a estilo indirecto, la primera persona pasa a tercera: «estoy» → «está»."),
      { ...fb("A indirecta (pasado).", "Martín escribió: «Nuestros datos son provisionales». → Martín escribió que sus datos ___ provisionales.", "eran", "Con verbo introductor en pasado, el presente pasa a imperfecto: «son» → «eran». «Son» también vale si los datos siguen siendo provisionales."), altAnswers: ["son"] },
      fb("A indirecta.", "Luna advierte: «No hay que confiar en una sola fuente». → Luna advierte que no ___ que confiar en una sola fuente.", "hay", "Presente se mantiene con verbo introductor en presente."),
      mc(
        "En una cita textual larga (más de 40 palabras) se suele usar…",
        ["un bloque sangrado sin comillas", "comillas triples", "cursiva total", "negrita"],
        0,
        "Convención académica: una cita textual larga va en bloque sangrado, sin comillas. Las comillas triples no existen en español, y la cursiva o la negrita total no son la norma."
      ),
      ms(
        "¿Qué exige una cita textual?",
        ["reproducir las palabras exactas", "comillas o bloque sangrado", "indicar la fuente", "cambiar los tiempos verbales"],
        [0, 1, 2],
        "Una cita textual reproduce las palabras exactas, entre comillas o en bloque sangrado, y con la fuente. Cambiar los tiempos verbales solo ocurre en la cita indirecta."
      ),
      toEs("The author argues that the data are inconclusive.", "El autor sostiene que los datos no son concluyentes.", "Cita indirecta con verbo introductor (sostener, argumentar) + que + paráfrasis.", ["El autor sostiene que los datos no son concluyentes todavía.", "El autor argumenta que los datos no son concluyentes."]),
      toEs(
        "Ortega escribió: «Mi hipótesis es arriesgada».",
        "Ortega escribió que su hipótesis era arriesgada.",
        "Dos ajustes: la primera persona pasa a tercera (mi → su) y, como el verbo introductor está en pasado, el presente retrocede a imperfecto (es → era).",
        ["Ortega escribió que su hipótesis resultaba arriesgada."],
        "Pasa a cita indirecta."
      ),
      toEs(
        "Vidal afirma: «Publicaremos los datos el año que viene».",
        "Vidal afirma que publicarán los datos el año que viene.",
        "Con el verbo introductor en presente (afirma) el tiempo no cambia: solo la persona (publicaremos → publicarán).",
        ["Vidal afirma que publicarán los datos al año siguiente."],
        "Pasa a cita indirecta."
      ),
      toEs(
        "Ríos escribió que mis resultados eran preliminares.",
        "Ríos escribió que sus resultados eran preliminares.",
        "En la cita indirecta, el posesivo del autor citado (mis) se ajusta a quien cita: sus resultados. «Mis» haría pensar que los resultados son de quien escribe la cita.",
        [],
        "Corrige la cita indirecta del original de Ríos «Mis resultados son preliminares»."
      ),
      wo("Según la autora, el fenómeno se remonta al siglo XVIII.", "«Según la autora» atribuye la información sin verbo introductor; «remontarse a» exige la preposición «a» (se remonta al siglo XVIII).", "According to the author, the phenomenon dates back to the 18th century."),
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
        "La regla: el verbo de atribución también opina",
        "Al citar no existe el verbo neutro perfecto: cada verbo de atribución dice cómo presenta el autor su idea (con firmeza, con cautela, como advertencia, como concesión) y, a veces, qué piensas tú de ella. Elegir «alega» en lugar de «demuestra» es tomar distancia sin decirlo. Neutros: afirma, señala, indica, explica. De firmeza: sostiene, defiende, insiste en. De cautela: sugiere, apunta, plantea. De advertencia: advierte, alerta. De concesión: reconoce, admite. Con distancia del citador: alega, asegura, «pretende hacernos creer que» (pueden sugerir escepticismo). Fórmulas: según X, en palabras de X, a juicio de X, tal como señala X.",
        [
          ["López sugiere que podría existir una relación.", "López suggests there might be a relationship."],
          ["El autor alega que los datos fueron manipulados.", "The author claims the data were manipulated."],
        ],
        [
          mc(
            "¿Qué verbo expresa cautela?",
            ["sugiere", "sostiene", "demuestra", "insiste"],
            0,
            "«Sugiere» presenta la idea con cautela y reservas. «Sostiene» e «insiste» afirman con firmeza, y «demuestra» presenta la idea como probada."
          ),
          mc(
            "Un estudio dice que sus resultados «podrían indicar» una relación, pero que hace falta más investigación. ¿Qué verbo lo refleja con fidelidad?",
            ["El estudio apunta que podría haber una relación.", "El estudio demuestra que hay una relación.", "El estudio insiste en que hay una relación.", "El estudio pretende hacernos creer que hay una relación."],
            0,
            "«Apunta» (como «sugiere») mantiene la cautela del original. «Demuestra» e «insiste» le añaden una firmeza que el estudio no tiene, y «pretende hacernos creer» le añade un escepticismo tuyo."
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
      fb("Completa.", "En ___ de Octavio Paz, «la poesía es memoria hecha imagen».", "palabras", "«En palabras de» + autor introduce una cita textual entre comillas."),
      fb("Completa.", "A ___ de la autora, el modelo es insuficiente. (en opinión de)", "juicio", "«A juicio de» + persona equivale a «en opinión de», registro académico."),
      mc(
        "«El ministro pretende hacernos creer que la crisis ha terminado.» El citador…",
        ["muestra escepticismo", "está de acuerdo", "es neutral", "admira al ministro"],
        0,
        "«Pretender hacernos creer que» presenta la afirmación como infundada: el citador muestra escepticismo. Si estuviera de acuerdo, fuera neutral o lo admirara usaría «afirma», «señala» o «según el ministro»."
      ),
      mc(
        "Para citar con neutralidad:",
        ["Según el informe…", "El informe pretende hacernos creer…", "El informe alega…", "El informe se inventa…"],
        0,
        "«Según el informe…» cita con neutralidad. «Pretende hacernos creer» y «alega» sugieren duda sobre lo dicho, y «se inventa» es una acusación directa."
      ),
      toEs("The study warns that sea levels could rise by a meter.", "El estudio advierte que el nivel del mar podría subir un metro.", "«Advertir (de) que» presenta un riesgo; la RAE admite ambas construcciones con este sentido.", ["El estudio advierte de que el nivel del mar podría subir un metro.", "El estudio alerta de que el nivel del mar podría subir un metro."]),
      toEs(
        "El informe afirma que el sistema es seguro.",
        "El informe alega que el sistema es seguro.",
        "Cambiar el verbo de atribución cambia tu postura: «alega» presenta la afirmación como algo que dice el informe, pero que tú no das por bueno.",
        ["El informe asegura que el sistema es seguro."],
        "Cambia el verbo para mostrar distancia escéptica ante lo que dice el informe."
      ),
      toEs(
        "La autora demuestra que quizá exista una relación entre ambos factores.",
        "La autora sugiere que quizá exista una relación entre ambos factores.",
        "«Demostrar» presenta algo como probado y choca con «quizá». Para una idea presentada con cautela, el verbo es «sugiere» (o «apunta», «plantea»).",
        ["La autora apunta que quizá exista una relación entre ambos factores.", "La autora plantea que quizá exista una relación entre ambos factores."],
        "Corrige la frase."
      ),
      wo("La investigadora reconoce que la muestra es limitada.", "«Reconocer que» + indicativo introduce una concesión del propio autor: la muestra es limitada.", "The researcher acknowledges the sample is limited."),
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
        "La regla: el latín abreviado ahorra repetir",
        "El aparato crítico usa abreviaturas latinas para no repetir referencias. Todas responden a una pregunta: ¿la misma obra que acabo de citar? → ibid.; ¿una obra de este autor citada antes, pero no justo antes? → op. cit.; ¿quiero que el lector compare con otro pasaje? → cf.; ¿hay varios autores? → et al.; ¿el error está en el original y no es mío? → [sic]; ¿he quitado un trozo? → […]. Ibid. (ibidem): la misma obra citada inmediatamente antes. Op. cit. (opere citato): obra ya citada del mismo autor. Cf. (confer): compárese, véase. [sic]: así en el original (se reproduce un error tal cual). […] o (…): omisión de un fragmento en la cita. et al.: y otros (autores). Fuente primaria (documento original) frente a fuente secundaria (estudio sobre ella).",
        [
          ["«Los ciudadanos […] exigieron justicia.»", "Omission in a quote."],
          ["«Hubieron [sic] muchos heridos.»", "Error reproduced as in the original."],
        ],
        [
          mc(
            "«[sic]» indica que…",
            ["el error está en el original", "hay una omisión", "es una traducción", "es la misma obra"],
            0,
            "«[sic]» («así» en latín) indica que el error está en el original y se reproduce tal cual. Una omisión se marca con […], una traducción no se señala así, y la misma obra es «ibid.»."
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
        "Ibid. = la obra recién citada; op. cit. = obra ya citada antes; cf. = compárese; et al. = y otros autores."
      ),
      mc(
        "Para omitir parte de una cita se usa…",
        ["[…]", "[sic]", "ibid.", "et al."],
        0,
        "Para omitir parte de una cita se usan corchetes con puntos suspensivos: […]. «[sic]» señala un error del original, «ibid.» remite a la obra anterior y «et al.» abrevia varios autores."
      ),
      mc(
        "Una carta original de Bolívar es una fuente…",
        ["primaria", "secundaria", "terciaria", "digital"],
        0,
        "Una carta original de Bolívar es un documento de la época, es decir, una fuente primaria. Una fuente secundaria es un estudio sobre ella, una terciaria es una obra de consulta (enciclopedia) y «digital» es un soporte, no un tipo de fuente."
      ),
      fb("Completa.", "García ___ al. (2021) analizan 500 casos.", "et", "«Et al.» (latín et alii, «y otros») abrevia la lista de coautores."),
      fb("Completa.", "Una biografía sobre Bolívar es una fuente ___.", "secundaria", "Una biografía estudia e interpreta las fuentes originales, así que es una fuente secundaria."),
      toEs("Compare with the previous chapter.", "Cf. el capítulo anterior.", "«Cf.» (del latín confer, «compárese») remite a otro pasaje para compararlo.", ["Compárese con el capítulo anterior.", "Véase el capítulo anterior."]),
      mc(
        "Nota 7: Pérez, «La memoria urbana», p. 40. La nota 8 remite exactamente a la misma obra, p. 52. ¿Cómo se escribe la nota 8?",
        ["Ibid., p. 52.", "Op. cit., p. 52.", "Cf., p. 52.", "Et al., p. 52."],
        0,
        "La obra es la citada inmediatamente antes: ibid. (ibidem, «en el mismo lugar»). Op. cit. se usa cuando entre medias se han citado otras obras; cf. remite a comparar y et al. abrevia coautores."
      ),
      toEs(
        "Como señalan García, López, Ruiz y Martín (2021), la muestra es representativa.",
        "Como señalan García et al. (2021), la muestra es representativa.",
        "Con muchos autores se cita el primero seguido de «et al.» (y otros). El verbo sigue en plural (señalan), porque los autores siguen siendo varios.",
        [],
        "Sustituye la lista de coautores por la abreviatura adecuada."
      ),
      toEs(
        "García et al. (2021) analiza 500 casos de bilingüismo.",
        "García et al. (2021) analizan 500 casos de bilingüismo.",
        "«Et al.» significa «y otros»: el sujeto es plural (García y otros), así que el verbo va en plural: analizan.",
        [],
        "Corrige la frase."
      ),
      wo("La cita reproduce el error original, marcado con sic entre corchetes.", "[sic] (del latín, «así») avisa al lector de que el error ya estaba en el original y no es del citador.", "The quotation reproduces the original error, marked with sic in brackets."),
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
        "La regla: una paráfrasis legítima cambia el léxico Y la estructura, y siempre cita; con que falte una de las tres cosas, es plagio (aunque no haya mala intención). Original (Vidal, 2017): «La expansión de las ciudades durante el siglo XX no solo transformó el paisaje, sino que alteró de forma irreversible las relaciones vecinales.» Paráfrasis legítima: reformula la estructura y el léxico y cita la fuente. Plagio: copiar o cambiar solo algunas palabras sin citar, o citar pero conservar casi toda la frase sin comillas.",
        [
          ["Vidal (2017) sostiene que el crecimiento urbano del siglo pasado modificó para siempre la convivencia entre vecinos.", "Legitimate paraphrase."],
        ],
        [
          mc(
            "«La expansión de las ciudades en el siglo XX no solo cambió el paisaje, sino que alteró irreversiblemente las relaciones vecinales.» (sin cita)",
            ["plagio", "paráfrasis legítima", "cita textual correcta", "resumen original"],
            0,
            "La frase copia casi literalmente el original, con cambios mínimos y sin atribución: es plagio. No es paráfrasis legítima (no reformula ni cita), ni cita textual (faltan comillas y fuente), ni un resumen propio."
          ),
        ]
      ),
    ],
    [
      mc(
        "«Según Vidal (2017), el crecimiento urbano del siglo pasado cambió para siempre la manera de convivir en los barrios.»",
        ["paráfrasis legítima", "plagio", "cita textual", "falacia"],
        0,
        "Cambia léxico y estructura y además atribuye la idea (Vidal, 2017): es paráfrasis legítima. No es plagio porque cita, ni cita textual porque no reproduce las palabras exactas, y no hay ninguna falacia."
      ),
      mc(
        "«La expansión de las ciudades durante el siglo XX no solo transformó el paisaje (Vidal, 2017).» (sin comillas)",
        ["plagio: texto literal sin comillas aunque se cite", "paráfrasis legítima", "cita indirecta correcta", "resumen propio"],
        0,
        "Copiar el texto literal sin comillas es plagio aunque se añada la referencia. Para ser cita correcta necesitaría comillas, y no es paráfrasis porque las palabras son las del original."
      ),
      fb("Completa.", "Una paráfrasis debe cambiar tanto el léxico como la ___ de la frase.", "estructura", "Parafrasear bien exige cambiar el léxico y también la estructura de la frase."),
      fb("Completa.", "Aunque se reformule, siempre hay que ___ la fuente. (atribuir)", "citar", "Aunque se reformule la idea, siempre hay que citar la fuente: la idea sigue siendo ajena."),
      ms(
        "¿Qué prácticas son plagio?",
        ["copiar sin comillas ni cita", "cambiar solo algunos sinónimos y no citar", "presentar ideas ajenas como propias", "parafrasear a fondo citando la fuente"],
        [0, 1, 2],
        "Copiar sin comillas ni cita, cambiar solo algunos sinónimos sin citar y presentar ideas ajenas como propias son plagio. Parafrasear a fondo citando la fuente es una práctica legítima."
      ),
      toEs("Even when paraphrasing, the source must be cited.", "Incluso al parafrasear, hay que citar la fuente.", "Norma académica: «hay que» o «se debe» + infinitivo para expresar la obligación impersonal.", ["Aunque se parafrasee, hay que citar la fuente.", "Incluso cuando se parafrasea, se debe citar la fuente."]),
      mc(
        "Nuevo original (Soto, 2020): «El teletrabajo ha difuminado la frontera entre la vida laboral y la personal.» ¿Qué versión es una paráfrasis legítima?",
        ["Para Soto (2020), trabajar desde casa ha hecho cada vez más difícil separar el empleo de la vida privada.", "El teletrabajo ha difuminado la frontera entre la vida laboral y la privada.", "El teletrabajo ha difuminado la frontera entre la vida laboral y la personal (Soto, 2020).", "El trabajo a distancia ha borrado el límite entre la vida laboral y la personal."],
        0,
        "Solo la primera cambia léxico y estructura y además cita. La segunda y la cuarta cambian una o dos palabras y no citan (plagio); la tercera copia literalmente sin comillas, que es plagio aunque lleve la referencia."
      ),
      toEs(
        "Vidal (2017) sostiene que la expansión de las ciudades durante el siglo XX no solo transformó el paisaje.",
        "Vidal (2017) sostiene que el crecimiento urbano del siglo pasado no se limitó a cambiar el paisaje.",
        "Aunque cite la fuente, la frase copia literalmente el original sin comillas. Para que sea paráfrasis hay que cambiar el léxico (crecimiento urbano, siglo pasado) y la estructura (no se limitó a…).",
        ["Vidal (2017) sostiene que el crecimiento urbano del siglo pasado no solo cambió el paisaje.", "Según Vidal (2017), el crecimiento urbano del siglo pasado no se limitó a cambiar el paisaje."],
        "Corrige la paráfrasis, que copia el original: usa «el crecimiento urbano del siglo pasado» y «no se limitó a cambiar el paisaje»."
      ),
      wo("La paráfrasis reformula la idea con palabras propias y cita la fuente.", "Esta es la regla completa: cambiar el léxico y la estructura (reformular con palabras propias) y además atribuir la idea (citar la fuente).", "Paraphrase restates the idea in your own words and cites the source."),
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
            "«Queda por explorar…» señala lo que falta por estudiar: el hueco de investigación. «Tanto X como Y coinciden» marca acuerdo, «Según Díaz» atribuye y «Soto matiza» introduce un matiz; ninguna señala un vacío."
          ),
        ]
      ),
    ],
    [
      { ...fb("Coincidencia.", "Tanto Pérez como Ruiz ___ en que el efecto es positivo. (coincidir)", "coinciden", "«Coincidir en que» + indicativo; con «tanto… como…» el verbo va en plural: coinciden."), altAnswers: ["concuerdan"] },
      fb("Matiz.", "Vega, por su ___, matiza que el efecto es temporal.", "parte", "«Por su parte» introduce la aportación de otro autor en una revisión bibliográfica."),
      fb("Discrepancia.", "___ a esta postura, Ortiz sostiene lo contrario.", "Frente", "«Frente a» introduce una postura opuesta a la ya expuesta."),
      fb("Hueco.", "Sin embargo, ___ de estos estudios aborda a la población infantil.", "ninguno", "«Ninguno de» + plural lleva el verbo en singular: ninguno de estos estudios aborda."),
      mc(
        "¿Para qué sirve señalar el hueco?",
        ["para justificar la investigación propia", "para criticar a los autores", "para rellenar espacio", "para terminar el trabajo"],
        0,
        "Señalar el hueco justifica la investigación propia: muestra qué falta por estudiar. No sirve para criticar a los autores, rellenar espacio ni terminar el trabajo."
      ),
      toEs("Both authors agree that the effect is positive.", "Ambos autores coinciden en que el efecto es positivo.", "Coincidencia entre autores: «coincidir / concordar en que» + indicativo.", ["Los dos autores coinciden en que el efecto es positivo.", "Ambos autores concuerdan en que el efecto es positivo."]),
      wo("Queda por explorar la influencia de la edad en estos resultados.", "«Queda por + infinitivo» señala lo que falta por hacer; «la influencia de la edad» es el sujeto, por eso va después del verbo.", "The influence of age on these results remains to be explored."),
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
        "La regla: citar en indirecto es mover el reloj y el modo",
        "Una cita indirecta no es más que estilo indirecto en registro académico, así que valen las reglas del C1, por una razón: lo que el autor dijo queda situado en el momento en que lo dijo, no en el tuyo. Si el verbo introductor está en pasado, los tiempos suelen retroceder (aunque puede mantenerse el presente si lo dicho sigue vigente): «Los datos confirman…» → El autor afirmó que los datos confirmaban… Si el verbo es de influencia (recomendar, pedir, advertir que como consejo), la orden pasa a subjuntivo: «Revisen la metodología» → El autor recomendó que se revisara la metodología. Con verbo en presente, no hay retroceso: El autor afirma que los datos confirman… está en pasado, los tiempos suelen retroceder (aunque puede mantenerse el presente si lo dicho sigue vigente): «Los datos confirman…» → El autor afirmó que los datos confirmaban… Si el verbo es de influencia, subjuntivo: «Revisen la metodología» → El autor recomendó que se revisara la metodología. Con verbo en presente, no hay retroceso: El autor afirma que los datos confirman…",
        [
          ["Sánchez recomendó que se ampliara la muestra.", "Sánchez recommended that the sample be expanded."],
          ["La autora afirmó que el fenómeno había comenzado antes.", "The author stated that the phenomenon had begun earlier."],
        ],
        [
          mc(
            "«Amplíen la muestra.» → El autor recomendó que se ___ la muestra.",
            ["ampliara", "amplía", "ampliará", "amplió"],
            0,
            "Un imperativo citado con verbo de influencia en pasado (recomendó) pasa a imperfecto de subjuntivo: ampliara. «Amplía», «ampliará» y «amplió» son indicativo, imposibles tras un verbo de influencia."
          ),
        ]
      ),
    ],
    [
      fb("Retroceso temporal.", "«El método es fiable.» → Afirmó que el método ___ fiable.", "era", "Con verbo introductor en pasado, el presente suele pasar a imperfecto: «es» → «era». También se acepta «es» si lo dicho sigue vigente."),
      fb("Retroceso temporal.", "«Hemos encontrado pruebas.» → Declararon que ___ encontrado pruebas.", "habían", "Con verbo introductor en pasado, el perfecto pasa a pluscuamperfecto: «hemos encontrado» → «habían encontrado»."),
      mc(
        "«Se necesita más investigación.» → La autora señala que…",
        ["se necesita más investigación.", "se necesitaba más investigación.", "se necesitara más investigación.", "se necesitaría más investigación."],
        0,
        "Con verbo introductor en presente (señala) no hay retroceso temporal: se mantiene «se necesita». «Se necesitaba» exigiría un introductor en pasado, «necesitara» es subjuntivo sin justificación y «necesitaría» cambia el sentido a hipótesis."
      ),
      fb("Influencia.", "«No generalicen.» → Advirtió que no ___. (generalizar, nosotros)", "generalizáramos", "«Advertir que» con valor de orden o consejo va con subjuntivo; en pasado, imperfecto: generalizáramos."),
      mc(
        "«Publicaremos los resultados.» → Anunciaron que ___ los resultados.",
        ["publicarían", "publicaron", "publicaran", "publicaban"],
        0,
        "Con verbo introductor en pasado, el futuro pasa a condicional: publicarían. «Publicaron» es un pasado, no expresa futuro; «publicaran» es subjuntivo y «publicaban» cambia el sentido."
      ),
      toEs("The authors stated that they had found no evidence.", "Los autores afirmaron que no habían encontrado pruebas.", "Estilo indirecto en pasado: «no hemos encontrado» → «no habían encontrado» (pluscuamperfecto).", ["Los autores declararon que no habían encontrado pruebas.", "Los autores afirmaron que no habían encontrado ninguna prueba."]),
      toEs(
        "La autora escribió: «Los resultados contradicen la hipótesis inicial».",
        "La autora escribió que los resultados contradecían la hipótesis inicial.",
        "Verbo introductor en pasado (escribió): el presente retrocede a imperfecto, contradicen → contradecían. Si quieres subrayar que sigue siendo cierto, también se admite el presente.",
        ["La autora escribió que los resultados contradicen la hipótesis inicial."],
        "Pasa a cita indirecta."
      ),
      toEs(
        "El revisor pidió: «Citen la fuente original».",
        "El revisor pidió que citaran la fuente original.",
        "«Pedir» es un verbo de influencia: la orden citada pasa a «que» + subjuntivo, y con el verbo en pasado, imperfecto: citen → citaran (o citasen).",
        ["El revisor pidió que se citara la fuente original.", "El revisor pidió que citasen la fuente original."],
        "Pasa a estilo indirecto."
      ),
      toEs(
        "Los autores dijeron: «Lo publicaremos el año que viene». → Los autores dijeron que lo publicarían el año anterior.",
        "Los autores dijeron que lo publicarían el año siguiente.",
        "En estilo indirecto, las referencias temporales se miden desde el momento en que se dijo: «el año que viene» pasa a «el año siguiente» (o «al año siguiente»). «El año anterior» invierte el sentido.",
        ["Los autores dijeron que lo publicarían al año siguiente."],
        "Corrige la frase."
      ),
      wo("El comité recomendó que se repitiera el experimento.", "«Recomendar» es un verbo de influencia: lo recomendado va en subjuntivo, y con el verbo en pasado, en imperfecto (repitiera).", "The committee recommended that the experiment be repeated."),
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
        "La regla para clasificar: pregúntate si quien habla espera de verdad una respuesta. Si no la espera, la pregunta es retórica y equivale a una afirmación de signo contrario, que puedes reconstruir invirtiendo la polaridad. La pregunta retórica equivale a una afirmación de signo contrario: «¿Acaso no lo sabíamos?» = Lo sabíamos. «¿Quién no ha dudado alguna vez?» = Todos hemos dudado. «¿Cómo iba a saberlo yo?» = No podía saberlo. Marcas: acaso, cómo va/iba a, quién no, es que, a quién se le ocurre.",
        [
          ["¿Acaso alguien lo dudaba?", "Did anyone really doubt it? (= Nobody doubted it.)"],
          ["¿A quién se le ocurre salir sin paraguas?", "Who would think of going out without an umbrella? (= What a silly idea.)"],
        ],
        [
          mc(
            "«¿Cómo iba a imaginarme algo así?» equivale a…",
            ["No podía imaginármelo.", "Me lo imaginaba.", "¿Me lo imaginé?", "Quiero imaginarlo."],
            0,
            "«¿Cómo iba a…?» es una pregunta retórica con negación implícita: no podía imaginármelo. «Me lo imaginaba» dice lo contrario, «¿Me lo imaginé?» es una pregunta real y «Quiero imaginarlo» cambia el sentido."
          ),
        ]
      ),
    ],
    [
      mc(
        "«¿A qué hora sale el tren a Toledo?»",
        ["pregunta real", "pregunta retórica", "hipófora", "anáfora"],
        0,
        "Pedir la hora de un tren busca información: es una pregunta real. No es retórica (no implica respuesta), no es hipófora (el hablante no se responde) ni anáfora (no repite nada)."
      ),
      mc(
        "«¿Es que nadie piensa en los niños?»",
        ["pregunta retórica de reproche", "pregunta real", "petición de datos", "saludo"],
        0,
        "«¿Es que nadie…?» expresa indignación: es una pregunta retórica de reproche. No espera respuesta ni datos, y evidentemente no es un saludo."
      ),
      mc(
        "«¿Quién no ha sentido miedo alguna vez?» equivale a…",
        ["Todos hemos sentido miedo.", "Nadie ha sentido miedo.", "¿Quién ha sentido miedo?", "Algunos no sienten miedo."],
        0,
        "«¿Quién no…?» implica que todos: todos hemos sentido miedo. «Nadie ha sentido miedo» invierte el sentido, «¿Quién ha sentido miedo?» es otra pregunta y «Algunos no sienten miedo» contradice la idea."
      ),
      { ...fb("Completa (retórica).", "¿___ alguien puede negar la evidencia?", "Acaso", "«¿Acaso…?» marca una pregunta retórica que espera un «no» como respuesta."), altAnswers: ["De verdad", "Realmente"] },
      fb("Completa (retórica).", "¿Cómo ___ a saberlo si nadie me avisó? (ir, yo, imperfecto)", "iba", "«¿Cómo iba a + infinitivo?» es una pregunta retórica que niega la posibilidad: no podía saberlo."),
      ms(
        "¿Qué marcas suelen introducir preguntas retóricas?",
        ["acaso", "quién no", "cómo va a", "a qué hora"],
        [0, 1, 2],
        "«Acaso», «quién no» y «cómo va a» suelen introducir preguntas retóricas. «A qué hora» suele pedir información real."
      ),
      toEs(
        "Todos hemos llegado tarde alguna vez.",
        "¿Quién no ha llegado tarde alguna vez?",
        "«Todos» se convierte en «¿Quién no…?»: la pregunta retórica invierte la polaridad de la afirmación que esconde.",
        ["¿Quién no ha llegado tarde nunca?", "¿Quién no ha llegado alguna vez tarde?"],
        "Transforma la afirmación en pregunta retórica con «¿Quién no…?»."
      ),
      toEs(
        "No podía saber que la tienda estaba cerrada.",
        "¿Cómo iba a saber que la tienda estaba cerrada?",
        "«¿Cómo iba a + infinitivo?» niega la posibilidad sin decir «no»: el «no podía» desaparece porque la pregunta ya lo contiene.",
        ["¿Cómo iba yo a saber que la tienda estaba cerrada?", "¿Cómo podía saber que la tienda estaba cerrada?"],
        "Transforma la afirmación en pregunta retórica con «¿Cómo iba a…?»."
      ),
      toEs(
        "¿Cómo iba a saberlo si nadie no me avisó?",
        "¿Cómo iba a saberlo si nadie me avisó?",
        "Cuando «nadie» va delante del verbo, ya niega por sí solo: «nadie no me avisó» es incorrecto. Solo detrás del verbo se dobla la negación: «no me avisó nadie».",
        ["¿Cómo iba a saberlo si no me avisó nadie?"],
        "Corrige la frase."
      ),
      wo("¿A quién se le ocurre dejar la puerta abierta en pleno invierno?", "«¿A quién se le ocurre + infinitivo?» es una pregunta retórica de reproche: equivale a «es absurdo hacerlo».", "Who would think of leaving the door open in the middle of winter?"),
    ]
  ),
  L(
    "rhetorical-questions-2",
    "c2r-rhetorical-hypophora",
    "Transformaciones: afirmación → hipófora",
    "Convierte afirmaciones planas en hipóforas (me pregunto y me respondo) para ganar atención.",
    "7 min",
    [
      sec(
        "Preguntar para responder",
        "La regla: la hipófora adelanta la pregunta que el público se haría y la contesta antes de que la formule, así que la respuesta llega cuando el oyente ya la está esperando. La forma de la respuesta depende de la pregunta: «¿Por qué…?» → «Porque…»; «¿Y qué ocurrió?» → «Que…»; «¿El resultado? / ¿La razón?» → un sintagma breve, sin verbo. La hipófora plantea una pregunta y la responde el propio hablante: «¿Por qué fracasó el plan? Porque nadie escuchó a los vecinos». Estructura el discurso, anticipa la duda del público y crea expectación. Fórmulas: «¿Y qué ocurrió? Que…», «¿La razón? Muy sencilla:…», «¿El resultado? …».",
        [
          ["¿El resultado? Tres años perdidos.", "The result? Three wasted years."],
          ["¿Por qué importa esto? Porque afecta a todos.", "Why does this matter? Because it affects everyone."],
        ],
        [
          mc(
            "¿Cuál es una hipófora?",
            ["¿Y qué pasó? Que nadie se presentó.", "¿Qué hora es?", "¿Acaso no lo sabías?", "¿Quién no ha llorado?"],
            0,
            "La hipófora es una pregunta que el propio hablante responde: «¿Y qué pasó? Que nadie se presentó». «¿Qué hora es?» es una pregunta real, y «¿Acaso no lo sabías?» y «¿Quién no ha llorado?» son retóricas sin respuesta propia."
          ),
        ]
      ),
    ],
    [
      fb("Completa la hipófora.", "¿Por qué fracasó el proyecto? ___ nadie escuchó a los vecinos.", "Porque", "Hipófora causal: el orador responde a su propio «¿Por qué…?» con «Porque…»."),
      toEs("Why did it fail? Because nobody listened.", "¿Por qué fracasó? Porque nadie escuchó.", "Hipófora: pregunta con «¿Por qué…?» y respuesta propia con «Porque…» (en una sola palabra y sin tilde, porque expresa causa).", ["¿Por qué fracasó? Porque nadie hizo caso.", "¿Por qué salió mal? Porque nadie escuchó."]),
      fb("Transforma.", "Ocurrió que nadie se presentó. → ¿Y qué ocurrió? ___ nadie se presentó.", "Que", "En la hipófora coloquial, la respuesta se introduce con «Que…» tras «¿Y qué ocurrió?»."),
      mc(
        "¿Qué efecto busca la hipófora?",
        ["crear expectación y ordenar el discurso", "obtener información del público", "cambiar de tema", "terminar el discurso"],
        0,
        "La hipófora crea expectación y ordena el discurso. No pretende obtener información del público (el orador ya se responde), ni cambiar de tema ni terminar."
      ),
      mc(
        "Hipófora eficaz para abrir un informe oral:",
        ["¿Qué ha cambiado en diez años? Casi todo.", "¿Alguien tiene un bolígrafo?", "¿Me oyen?", "¿Empiezo?"],
        0,
        "«¿Qué ha cambiado en diez años? Casi todo.» es una hipófora: pregunta más respuesta contundente. «¿Alguien tiene un bolígrafo?», «¿Me oyen?» y «¿Empiezo?» son preguntas reales y logísticas."
      ),
      toEs("The result? Three years lost.", "¿El resultado? Tres años perdidos.", "Hipófora nominal: «¿El resultado?» + respuesta breve sin verbo, muy expresiva.", ["¿El resultado? Tres años desperdiciados."]),
      toEs(
        "El resultado fue que cerraron tres fábricas.",
        "¿El resultado? Tres fábricas cerradas.",
        "La hipófora nominal separa el tema en una pregunta mínima («¿El resultado?») y lo responde con un sintagma breve, sin verbo conjugado: más expresivo que la frase plana.",
        ["¿El resultado? Cerraron tres fábricas.", "¿El resultado? Tres fábricas cerraron."],
        "Transforma la afirmación en una hipófora nominal con «¿El resultado?»."
      ),
      toEs(
        "La razón es muy sencilla: no había presupuesto.",
        "¿La razón? Muy sencilla: no había presupuesto.",
        "Se convierte el sujeto («la razón») en pregunta y se elimina el verbo «es»: la respuesta llega cuando el oyente ya la espera.",
        ["¿La razón? Muy simple: no había presupuesto.", "¿Y la razón? Muy sencilla: no había presupuesto."],
        "Transforma la afirmación en una hipófora con «¿La razón?»."
      ),
      toEs(
        "¿Y qué ocurrió? Porque nadie se presentó a la reunión.",
        "¿Y qué ocurrió? Que nadie se presentó a la reunión.",
        "La respuesta debe encajar con la pregunta: «¿Qué ocurrió?» se responde con «Que…» (lo que ocurrió); «Porque…» respondería a un «¿Por qué…?».",
        [],
        "Corrige la frase."
      ),
      wo("¿Y qué hicimos entonces? Empezar de nuevo.", "En la hipófora el orador pregunta y responde él mismo; la respuesta puede ser un infinitivo breve («Empezar de nuevo»).", "And what did we do then? Start again."),
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
        "La regla: la anáfora interrogativa repite el mismo arranque al principio de cada pregunta, y la repetición es lo que crea el ritmo; si cambias el arranque a mitad de serie, el eco se rompe. Las palabras que varían deben concordar con su sustantivo (¿Cuántos jóvenes…? ¿Cuántas familias…?). La anáfora interrogativa repite el inicio de varias preguntas: «¿Cuántos jóvenes más tendrán que emigrar? ¿Cuántas familias más tendrán que separarse? ¿Cuántos años más vamos a esperar?». Funciona mejor en series de tres, con intensidad creciente, y seguida de una respuesta o llamamiento.",
        [
          ["¿Hasta cuándo vamos a mirar hacia otro lado? ¿Hasta cuándo vamos a callar?", "How long will we look the other way? How long will we stay silent?"],
        ],
        [
          mc(
            "¿Qué serie usa anáfora interrogativa?",
            ["¿Quién lo vio? ¿Quién lo denunció? ¿Quién hizo algo?", "¿Qué hora es? ¿Dónde vives?", "¿Vienes? No sé.", "¿Por qué? Porque sí."],
            0,
            "La anáfora interrogativa repite el mismo inicio: «¿Quién…? ¿Quién…? ¿Quién…?». Las demás series son preguntas sin repetición o un intercambio de pregunta y respuesta."
          ),
        ]
      ),
    ],
    [
      fb("Completa la serie.", "¿Cuántos jóvenes más ___ que emigrar? (tener, futuro)", "tendrán", "El futuro en la pregunta retórica (tendrán) proyecta la indignación hacia lo que seguirá pasando."),
      fb("Completa la serie.", "¿Hasta cuándo ___ a tolerar estos abusos? (ir, nosotros)", "vamos", "«¿Hasta cuándo vamos a + infinitivo?» es una pregunta retórica de reproche: el hablante se incluye (nosotros) para implicar al público."),
      mc(
        "¿Cuántos elementos suele tener una serie anafórica eficaz?",
        ["tres", "uno", "diez", "veinte"],
        0,
        "La tríada (tres elementos) da ritmo y sensación de cierre. Con uno no hay serie, y diez o veinte cansan al público."
      ),
      mc(
        "Tras la serie interrogativa, lo más eficaz es…",
        ["una respuesta o llamamiento contundente", "cambiar de tema", "pedir perdón", "leer una lista de datos"],
        0,
        "Tras la serie interrogativa se cierra con una respuesta o un llamamiento contundente. Cambiar de tema, pedir perdón o leer datos desinfla la tensión creada."
      ),
      ms(
        "¿Qué rasgos tiene una buena serie anafórica?",
        ["repetición inicial", "intensidad creciente", "ritmo ternario", "preguntas sin relación entre sí"],
        [0, 1, 2],
        "Una buena serie anafórica repite el inicio, crece en intensidad y tiene ritmo ternario. Las preguntas deben estar relacionadas; sin relación entre sí no forman serie."
      ),
      toEs("How much longer will we wait?", "¿Cuánto tiempo más vamos a esperar?", "Pregunta retórica de impaciencia: «¿Cuánto tiempo más / Hasta cuándo vamos a esperar?».", ["¿Cuánto más vamos a esperar?", "¿Hasta cuándo vamos a esperar?"]),
      toEs(
        "Han cerrado escuelas, hospitales y bibliotecas.",
        "¿Cuántas escuelas más? ¿Cuántos hospitales más? ¿Cuántas bibliotecas más?",
        "La serie anafórica repite «¿Cuántos/as… más?» con cada sustantivo, y el interrogativo concuerda en género con él: cuántas escuelas, cuántos hospitales, cuántas bibliotecas.",
        ["¿Cuántas escuelas más tienen que cerrar? ¿Cuántos hospitales más? ¿Cuántas bibliotecas más?"],
        "Transforma la afirmación en una serie anafórica con «¿Cuántos/as… más?»."
      ),
      toEs(
        "¿Dónde estaba el alcalde? ¿Dónde estaba la policía? ¿Y los bomberos, qué hacían?",
        "¿Dónde estaba el alcalde? ¿Dónde estaba la policía? ¿Dónde estaban los bomberos?",
        "La tercera pregunta rompe la anáfora: cambia el arranque y el eco se pierde justo en el clímax. Hay que repetir «¿Dónde estaba(n)…?», con el verbo en plural porque concuerda con «los bomberos».",
        [],
        "Corrige la serie: la tercera pregunta rompe la anáfora."
      ),
      wo("¿Cuántas veces más tendremos que repetir lo mismo?", "«¿Cuántas veces más…?» es un arranque típico de serie anafórica: «cuántas» concuerda con «veces» y «más» subraya la repetición que se denuncia.", "How many more times will we have to say the same thing?"),
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
        [
          "Las tres tienen forma de pregunta, pero cada una hace algo distinto. Para distinguirlas, pregúntate a quién se dirige y qué espera el orador.",
          "Interpelación (apóstrofe): se dirige a un destinatario concreto, presente o ausente, nombrado con un vocativo entre comas: «Y ustedes, señores del consejo, ¿dónde estaban?». Lo hace responsable. Duda fingida (dubitación): el orador simula no encontrar la palabra, con infinitivo interrogativo y candidatos: «¿Cómo calificar semejante actitud? ¿Negligencia? ¿Desprecio?». Sugiere la palabra dura sin asumirla. Pregunta retórica: no se dirige a nadie en concreto ni busca palabras; es una afirmación encubierta («¿Acaso importa?» = no importa).",
        ],
        [
          ["¿Cómo calificar esta decisión? ¿Error? ¿Temeridad?", "How to describe this decision? A mistake? Recklessness? (duda fingida)"],
          ["Y usted, señora alcaldesa, ¿qué piensa hacer?", "And you, Madam Mayor, what do you intend to do? (interpelación: vocativo + usted)"],
          ["¿Quién se va a creer esa excusa?", "Who's going to believe that excuse? (pregunta retórica: = nadie)"],
        ],
        [
          mc(
            "«¿Cómo describir lo que sentí? ¿Alivio? ¿Rabia? Quizá las dos cosas.»",
            ["duda fingida", "interpelación", "pregunta real", "hipófora simple"],
            0,
            "El orador simula buscar la palabra (¿Alivio? ¿Rabia?): es duda fingida. No se dirige a nadie (interpelación), no espera respuesta real, y es más que una hipófora simple porque escenifica la vacilación."
          ),
        ]
      ),
    ],
    [
      mc(
        "«Y tú, conciencia, ¿por qué callas?»",
        ["interpelación (apóstrofe)", "duda fingida", "pregunta real", "anáfora"],
        0,
        "Dirigirse a algo o alguien ausente («Y tú, conciencia…») es una interpelación o apóstrofe. No simula dudar, no es una pregunta real y no repite ningún inicio (anáfora)."
      ),
      mc(
        "«¿Acaso importa lo que opinen?»",
        ["pregunta retórica", "interpelación", "duda fingida", "hipófora"],
        0,
        "«¿Acaso importa…?» equivale a «No importa»: pregunta retórica. No se dirige a nadie (interpelación), no finge buscar una palabra (duda fingida) ni se responde (hipófora)."
      ),
      { ...fb("Completa (duda fingida).", "¿Cómo ___ semejante despropósito? ¿Error? ¿Mala fe? (dar un nombre o adjetivo a algo, infinitivo)", "calificar", "La duda fingida usa «¿Cómo + infinitivo?» (calificar) y luego tantea opciones."), altAnswers: ["describir", "definir"] },
      fb("Completa (interpelación).", "Y ___, señores del jurado, ¿qué habrían hecho en su lugar?", "ustedes", "Interpelación: el pronombre «ustedes» + vocativo se dirige directamente al jurado."),
      mt(
        "Relaciona la figura con su definición.",
        [
          ["interpelación", "dirigirse directamente a alguien"],
          ["duda fingida", "simular no saber cómo decir algo"],
          ["pregunta retórica", "afirmación en forma de pregunta"],
        ],
        "La interpelación tiene destinatario (un vocativo); la duda fingida busca en voz alta la palabra justa (¿Cómo llamar…?); la pregunta retórica, sin destinatario ni búsqueda, afirma lo contrario de lo que pregunta."
      ),
      toEs("How can one describe such cruelty?", "¿Cómo describir semejante crueldad?", "Duda fingida con infinitivo: «¿Cómo describir / calificar semejante crueldad?».", ["¿Cómo calificar semejante crueldad?", "¿Cómo describir tanta crueldad?"]),
      wo("Y ustedes, señores diputados, ¿dónde estaban cuando se tomó la decisión?", "Interpelación: vocativo entre comas («señores diputados») y pregunta dirigida a ellos con «ustedes».", "And you, members of parliament, where were you when the decision was taken?"),
      toEs(
        "¿Acaso alguien ha leído el informe?",
        "Y usted, señor consejero, ¿ha leído el informe?",
        "Para pasar de pregunta retórica a interpelación se nombra al destinatario con un vocativo entre comas y se le dirige la pregunta en la persona de «usted» (ha leído). Ya no es una afirmación general («nadie lo ha leído»): ahora señala a un responsable.",
        ["Y usted, señor consejero, ¿ha leído el informe?", "Y usted, señor consejero, ¿ha leído usted el informe?"],
        "Transforma la pregunta retórica en una interpelación al consejero (usted)."
      ),
      toEs(
        "Su comportamiento fue una falta de respeto.",
        "¿Cómo calificar su comportamiento? ¿Falta de respeto?",
        "La duda fingida convierte la afirmación en búsqueda aparente: infinitivo interrogativo («¿Cómo calificar…?») y el término duro como candidato en pregunta elíptica. El oyente llega solo a la conclusión.",
        ["¿Cómo calificar su comportamiento? ¿Una falta de respeto?", "¿Cómo describir su comportamiento? ¿Falta de respeto?", "¿Cómo describir su comportamiento? ¿Una falta de respeto?", "¿Cómo llamar a su comportamiento? ¿Falta de respeto?"],
        "Transforma la afirmación en duda fingida (¿Cómo calificar…?)."
      ),
      toEs(
        "Y usted, señora alcaldesa, ¿qué vas a hacer con el centro de salud?",
        "Y usted, señora alcaldesa, ¿qué va a hacer con el centro de salud?",
        "La interpelación con «usted» exige el verbo en tercera persona: «va a hacer». «Vas» corresponde a «tú» y rompe la concordancia y el registro formal.",
        [],
        "Corrige la frase."
      ),
      toEs(
        "¿Cómo calificaré semejante despropósito? ¿Error? ¿Mala fe?",
        "¿Cómo calificar semejante despropósito? ¿Error? ¿Mala fe?",
        "La duda fingida usa el infinitivo interrogativo («¿Cómo calificar…?»): plantea la pregunta en abstracto, como si el orador buscara la palabra en voz alta. El futuro («calificaré») la convierte en una pregunta sobre lo que hará el hablante.",
        ["¿Cómo describir semejante despropósito? ¿Error? ¿Mala fe?"],
        "Corrige la frase."
      ),
      mc(
        "«Y vosotros, que me votasteis, ¿os sentís engañados?» ¿Qué recurso es y por qué?",
        [
          "interpelación: nombra a un destinatario concreto y le exige una respuesta",
          "duda fingida: busca la palabra para describir el engaño",
          "pregunta retórica general: no se dirige a nadie",
          "hipófora: el orador se responde a sí mismo",
        ],
        0,
        "Hay un destinatario concreto («vosotros, que me votasteis») al que se interpela. No hay candidatos ni «¿Cómo llamar…?» (duda fingida), sí hay alguien a quien se dirige (no es una retórica general) y el orador no se contesta (hipófora)."
      ),
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
        [
          "Una pregunta retórica esconde una afirmación y, como no la formula, la protege de la discusión: «¿Quién va a querer vivir en un barrio así?» afirma que nadie quiere, sin demostrarlo. Si callas, la das por buena. Para desactivarla hay que sacar a la luz esa afirmación.",
          "Tres estrategias: contestarla literalmente, como si fuera una pregunta real («Pues, según las encuestas, el 60 % de los vecinos»); desvelar la afirmación implícita con «Usted da por hecho / da por sentado que…» (sin «de»: ✗ «da por hecho de que»); o reconducirla con «La pregunta no es X, sino Y», donde «sino» (no «pero») sustituye lo negado.",
        ],
        [
          ["Usted da por hecho que…, pero los datos dicen otra cosa.", "You take it for granted that…, but the data say otherwise. (desvelar)"],
          ["La pregunta no es esa, sino…", "That's not the question; the question is… (reconducir: no… sino)"],
          ["Pues mire, lo apoya el 55 % de los encuestados.", "Well, 55% of those surveyed support it. (contestar literalmente)"],
        ],
        [
          mc(
            "«¿Quién en su sano juicio apoyaría esta ley?» Respuesta que la desactiva:",
            ["Según la última encuesta, más de la mitad de la población.", "Nadie, tiene usted razón.", "¡Qué pregunta tan tonta!", "No sé."],
            0,
            "Se desactiva la pregunta retórica respondiéndola literalmente con datos (más de la mitad). «Nadie, tiene usted razón» le da la razón, «¡Qué pregunta tan tonta!» es un ataque y «No sé» la deja sin respuesta."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "Usted da ___ hecho que nadie la apoya.", "por", "«Dar por hecho» algo es suponerlo sin haberlo demostrado."),
      fb("Completa.", "La pregunta no es cuánto cuesta, ___ cuánto nos ahorra.", "sino", "Estructura adversativa «no es… sino…»: «sino» corrige tras la negación."),
      mc(
        "«¿Acaso no es obvio que la privatización mejora todo?» Respuesta que desvela la premisa:",
        ["Esa pregunta presupone algo que habría que demostrar.", "Sí, es obvio.", "Me da igual.", "¿Y usted qué sabe?"],
        0,
        "Desvelar la presuposición («Esa pregunta presupone algo…») desmonta la trampa. «Sí, es obvio» la acepta, «Me da igual» abandona el debate y «¿Y usted qué sabe?» es un ataque personal."
      ),
      mc(
        "¿Cuál es la respuesta menos eficaz?",
        ["Quedarse callado dando por buena la afirmación implícita.", "Responder con datos.", "Desvelar la presuposición.", "Reformular la pregunta."],
        0,
        "Callarse da por buena la afirmación implícita: el silencio concede. Responder con datos, desvelar la presuposición o reformular la pregunta son respuestas eficaces."
      ),
      ms(
        "¿Qué estrategias desactivan una pregunta retórica tramposa?",
        ["contestarla literalmente con datos", "desvelar la afirmación implícita", "reformular la pregunta", "insultar al interlocutor"],
        [0, 1, 2],
        "Contestarla literalmente con datos, desvelar la afirmación implícita y reformularla la desactivan. Insultar al interlocutor desacredita a quien lo hace."
      ),
      toEs("That question takes for granted something that needs proving.", "Esa pregunta da por hecho algo que habría que demostrar.", "«Dar por hecho / dar por sentado / presuponer» algo = tomarlo como cierto sin demostrarlo.", ["Esa pregunta presupone algo que habría que demostrar.", "Esa pregunta da por sentado algo que habría que demostrar."]),
      wo("La cuestión no es quién tiene la culpa, sino cómo lo solucionamos.", "«No es X, sino Y» corrige la pregunta de partida; tras «sino», el verbo se conjuga normalmente («cómo lo solucionamos»).", "The issue is not who's to blame, but how we fix it."),
      toEs(
        "¿Quién va a querer pagar más impuestos?",
        "Usted da por hecho que nadie quiere pagar más impuestos.",
        "Para desvelar la pregunta retórica, se formula la afirmación que esconde («nadie quiere…») y se presenta como una suposición del otro con «Usted da por hecho que…». Así queda expuesta a la discusión.",
        ["Usted da por sentado que nadie quiere pagar más impuestos.", "Usted da por hecho que nadie va a querer pagar más impuestos.", "Usted da por sentado que nadie va a querer pagar más impuestos.", "Usted presupone que nadie quiere pagar más impuestos."],
        "Transforma la pregunta retórica en la afirmación que esconde, empezando por «Usted da por hecho que…»."
      ),
      toEs(
        "¿Cuánto nos va a costar el nuevo tranvía?",
        "La pregunta no es cuánto nos va a costar el nuevo tranvía, sino cuánto nos va a ahorrar.",
        "Reconducir: «La pregunta no es X, sino Y». La pregunta original pasa a interrogativa indirecta (cuánto nos va a costar, con tilde) y «sino» introduce la pregunta que de verdad interesa.",
        ["La pregunta no es cuánto nos va a costar el nuevo tranvía, sino cuánto nos ahorrará.", "La pregunta no es cuánto nos costará el nuevo tranvía, sino cuánto nos ahorrará.", "La pregunta no es cuánto nos costará el nuevo tranvía, sino cuánto nos va a ahorrar.", "La pregunta no es cuánto cuesta el nuevo tranvía, sino cuánto nos ahorra."],
        "Reescribe la respuesta para reconducir la pregunta con «La pregunta no es…, sino…» hacia cuánto nos va a ahorrar."
      ),
      toEs(
        "La pregunta no es quién empezó, pero cómo salimos de esto.",
        "La pregunta no es quién empezó, sino cómo salimos de esto.",
        "Tras una negación, lo que sustituye a lo negado va con «sino», no con «pero». «Pero» añade una objeción («No es caro, pero no me gusta»); «sino» corrige: no es X, es Y.",
        [],
        "Corrige la frase."
      ),
      toEs(
        "Usted da por hecho de que la reforma va a fracasar.",
        "Usted da por hecho que la reforma va a fracasar.",
        "«Dar por hecho algo» lleva complemento directo, así que la subordinada va sin preposición: «da por hecho que…». «Da por hecho de que» es dequeísmo.",
        ["Usted da por sentado que la reforma va a fracasar.", "Usted da por hecho que la reforma fracasará."],
        "Corrige la frase."
      ),
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
        [
          "Un discurso de un minuto convence si cada recurso tiene una función: la hipófora abre (planteas la pregunta que el público se hace y la respondes tú), la anáfora interrogativa implica al auditorio («¿Cuántos de ustedes…? ¿Cuántos…?»), la interpelación señala a quien decide («Y usted, señor concejal, ¿…?») y la oración hendida cierra destacando lo esencial («Lo que está en juego no es X: es Y»).",
          "Cuida la gramática que los sostiene: con «ustedes» y «usted», verbo en tercera persona (aprendieron, cree); la hendida se construye con «lo que» (no «lo cual») + «es».",
          "«¿Qué es una biblioteca? ¿Un edificio con libros? No: es el único lugar del barrio donde un niño puede estudiar en silencio. ¿Cuántos de ustedes aprendieron a leer aquí? ¿Cuántos encontraron aquí su primer trabajo? Y usted, señor concejal, ¿de verdad cree que esto es un gasto? Lo que está en juego no es un presupuesto: es el futuro de nuestros hijos.»",
        ],
        [
          ["Lo que está en juego no es un presupuesto: es el futuro.", "What's at stake isn't a budget: it's the future. (hendida para el cierre)"],
          ["¿Qué pedimos? ¿Privilegios? No: pedimos lo mismo que los demás barrios.", "What are we asking for? Privileges? No: we're asking for the same as other neighbourhoods. (hipófora)"],
        ],
        [
          ms(
            "¿Qué recursos aparecen en el modelo?",
            ["hipófora", "anáfora interrogativa", "interpelación", "hendida", "metonimia", "hipérbole"],
            [0, 1, 2, 3],
            "El modelo usa cuatro recursos: hipófora, anáfora interrogativa, interpelación y oración hendida; no hay metonimia ni hipérbole."
          ),
        ]
      ),
    ],
    [
      fb("Completa la hipófora.", "¿Qué es una biblioteca? ¿Un edificio con libros? ___: es un refugio.", "No", "Hipófora: el orador rechaza su propia respuesta provisional con «No» y da la verdadera."),
      fb("Completa la anáfora.", "¿Cuántos de ustedes ___ aquí su primer libro? (leer, pretérito)", "leyeron", "Pretérito indefinido de «leer» con ustedes: leyeron (la i entre vocales pasa a y)."),
      fb("Completa la interpelación.", "Y ___, señor concejal, ¿qué propone?", "usted", "Interpelación directa: «usted» + vocativo («señor concejal»)."),
      fb("Completa la hendida.", "Lo que está en ___ es el futuro de nuestros hijos.", "juego", "«Estar en juego» significa estar en riesgo; la hendida «Lo que… es…» lo destaca."),
      mc(
        "Mejor final para el discurso:",
        ["Salvemos la biblioteca: salvemos el barrio.", "Bueno, pues eso.", "Gracias por nada.", "No sé, ya veremos."],
        0,
        "El mejor final es un llamamiento con paralelismo: «Salvemos la biblioteca: salvemos el barrio». «Bueno, pues eso» y «No sé, ya veremos» se desinflan, y «Gracias por nada» es ofensivo."
      ),
      toEs("What's at stake is our children's future.", "Lo que está en juego es el futuro de nuestros hijos.", "Oración hendida «Lo que está en juego es…» para destacar lo que se arriesga.", ["Lo que está en juego es el porvenir de nuestros hijos."]),
      wo("¿Cuántos de ustedes aprendieron a leer en esta biblioteca?", "Anáfora interrogativa dirigida al público: «¿Cuántos de ustedes…?» + verbo en tercera persona del plural (aprendieron).", "How many of you learned to read in this library?"),
      toEs(
        "Está en juego la salud de nuestros mayores.",
        "Lo que está en juego es la salud de nuestros mayores.",
        "La oración hendida «Lo que… es…» saca el elemento importante al final, donde recae el énfasis: el público espera la respuesta tras «es».",
        ["Lo que está en juego es la salud de nuestros ancianos."],
        "Transforma la frase en una oración hendida con «Lo que está en juego es…»."
      ),
      toEs(
        "Y usted, señor concejal, ¿de verdad cree que el centro cultural es un gasto?",
        "Y ustedes, señores concejales, ¿de verdad creen que el centro cultural es un gasto?",
        "Al pasar la interpelación al plural cambian el pronombre (ustedes), el vocativo (señores concejales) y el verbo, que sigue en tercera persona: «creen».",
        ["Y ustedes, señoras y señores concejales, ¿de verdad creen que el centro cultural es un gasto?"],
        "Cambia la interpelación al plural: dirígete a todos los concejales."
      ),
      toEs(
        "¿Cuántos de ustedes aprendisteis a nadar en esta piscina?",
        "¿Cuántos de ustedes aprendieron a nadar en esta piscina?",
        "«Ustedes» concuerda con el verbo en tercera persona del plural (aprendieron), también en España. «Aprendisteis» es la forma de «vosotros» y mezcla dos tratamientos en la misma pregunta.",
        [],
        "Corrige la frase."
      ),
      toEs(
        "Lo cual está en juego no es un edificio: es la memoria del barrio.",
        "Lo que está en juego no es un edificio: es la memoria del barrio.",
        "La oración hendida se construye con «lo que». «Lo cual» solo funciona como relativo que remite a una frase anterior («…, lo cual me sorprendió»), nunca para abrir una hendida.",
        [],
        "Corrige la frase."
      ),
      mc(
        "En el pleno, el concejal responde: «Es que no hay dinero para todo». ¿Qué réplica usa mejor los recursos del discurso?",
        [
          "¿No hay dinero? Lo hubo para la nueva rotonda. Lo que falta no es dinero: es voluntad.",
          "Vale, si no hay dinero, no hay nada que hacer.",
          "¡Eso es mentira y usted lo sabe!",
          "¿Cuánto dinero hay exactamente?",
        ],
        0,
        "La mejor réplica retoma su frase en forma de pregunta ecoica («¿No hay dinero?»), la rebate con un dato y cierra con una hendida («Lo que falta no es…: es…»). Aceptar la excusa abandona la causa, el insulto resta credibilidad y la pregunta literal le cede la palabra sin argumento.",
      ),
    ]
  ),
  L(
    "rhetorical-questions-7",
    "c2r-rhetorical-vocab-spiral",
    "Repaso en espiral: figuras retóricas del nivel Profesional y Académico",
    "Metáfora, hipérbole, anáfora, hipófora, interpelación, antítesis: identifica cada figura en un fragmento breve.",
    "7 min",
    [
      sec(
        "Mapa de figuras",
        [
          "Recuerda: cada figura se reconoce por lo que hace, no por su tema. De pensamiento (juegan con la idea): pregunta retórica, hipófora, interpelación, duda fingida, antítesis, hipérbole. De repetición (juegan con la forma): anáfora, paralelismo. De acumulación: tríada. De significado (cambian el sentido de una palabra): metáfora, metonimia, sinécdoque.",
          "Pistas rápidas: si se repite el comienzo, anáfora; si dos ideas opuestas van en moldes paralelos, antítesis; si la cifra es imposible, hipérbole; si el orador se pregunta y se contesta, hipófora; si nombra a alguien con un vocativo, interpelación.",
        ],
        [
          ["Unos trabajan de sol a sol; otros viven de las rentas.", "Some work from dawn to dusk; others live off their income. (antítesis: ideas opuestas, molde paralelo)"],
          ["Esta ciudad tiene corazón.", "This city has a heart. (metáfora: corazón = generosidad)"],
          ["Lo he repetido mil veces.", "I've said it a thousand times. (hipérbole)"],
        ],
        [
          mc(
            "«Unos lo tienen todo; otros, nada.»",
            ["antítesis", "hipérbole", "metonimia", "hipófora"],
            0,
            "Contraponer ideas opuestas (todo / nada) es una antítesis. No exagera (hipérbole), no sustituye un término por otro relacionado (metonimia) ni se pregunta y responde (hipófora)."
          ),
        ]
      ),
    ],
    [
      mc(
        "«Te he llamado un millón de veces.»",
        ["hipérbole", "antítesis", "interpelación", "anáfora"],
        0,
        "«Un millón de veces» es una exageración evidente: hipérbole. No opone ideas (antítesis), no se dirige a nadie de forma retórica (interpelación) ni repite inicios (anáfora)."
      ),
      mc(
        "«¿Qué nos queda? La esperanza.»",
        ["hipófora", "metáfora", "tríada", "interpelación"],
        0,
        "El hablante se pregunta y se responde: hipófora. No hay imagen (metáfora), ni tres elementos (tríada), ni se dirige a nadie (interpelación)."
      ),
      mc(
        "«Queremos pan. Queremos trabajo. Queremos dignidad.»",
        ["anáfora", "antítesis", "metonimia", "duda fingida"],
        0,
        "Repetir «Queremos» al inicio de cada frase es una anáfora. No opone ideas (antítesis), no sustituye términos (metonimia) ni finge dudar."
      ),
      mc(
        "«Oh, Madrid, ¿por qué me tratas así?»",
        ["interpelación (apóstrofe)", "hipófora", "sinécdoque", "tríada"],
        0,
        "Dirigirse a la ciudad como si fuera una persona es una interpelación o apóstrofe. No se responde a sí mismo (hipófora), no toma la parte por el todo (sinécdoque) ni enumera tres elementos (tríada)."
      ),
      mt(
        "Relaciona la figura con su tipo.",
        [
          ["anáfora", "repetición"],
          ["metáfora", "significado"],
          ["hipófora", "pensamiento"],
        ],
        "Anáfora: figura de repetición; metáfora: de significado; hipófora (pregunta que el orador responde): de pensamiento."
      ),
      fb("Completa.", "La ___ contrapone dos ideas opuestas.", "antítesis", "La antítesis contrapone dos ideas opuestas en una misma frase."),
      wo("Unos construyen puentes mientras otros levantan muros.", "La antítesis opone dos ideas con estructura paralela (construir puentes / levantar muros); «mientras» une los contrastes.", "Some build bridges while others raise walls."),
      toEs(
        "Pedimos aulas, profesores y tiempo.",
        "Pedimos aulas. Pedimos profesores. Pedimos tiempo.",
        "La anáfora repite la misma palabra al comienzo de frases sucesivas. Al separar la enumeración en tres frases con «Pedimos», cada reivindicación gana peso propio: anáfora y tríada a la vez.",
        ["Pedimos aulas, pedimos profesores, pedimos tiempo."],
        "Transforma la enumeración en una anáfora repitiendo «Pedimos»."
      ),
      toEs(
        "Lo que necesita este barrio es un parque.",
        "¿Qué necesita este barrio? Un parque.",
        "La hipófora formula la pregunta que el público se hace y la responde enseguida: la respuesta breve, tras la pausa, queda destacada.",
        ["¿Qué necesita este barrio? Necesita un parque.", "¿Qué necesita este barrio? Pues un parque."],
        "Transforma la frase en una hipófora (pregunta y respuesta)."
      ),
      toEs(
        "«Unos ríen; otros lloran» es una anáfora.",
        "«Unos ríen; otros lloran» es una antítesis.",
        "Opone dos ideas contrarias (reír / llorar) en un molde paralelo: es una antítesis. No hay anáfora porque las dos partes no empiezan con la misma palabra (unos / otros).",
        [],
        "Corrige la frase."
      ),
      toEs(
        "«Te lo he dicho un millón de veces» es una metáfora.",
        "«Te lo he dicho un millón de veces» es una hipérbole.",
        "La cifra imposible («un millón de veces») exagera para enfatizar: hipérbole. En una metáfora una cosa se nombra con la imagen de otra, y aquí no hay ninguna imagen.",
        [],
        "Corrige la frase."
      ),
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
        [
          "Fanfarronería: «Soy el mejor en todo». Falsa modestia: «Bueno, no sé, no destaco en nada». Equilibrio: nombrar la fortaleza + evidencia concreta + beneficio para la empresa: «Diría que destaco en la organización: en mi último puesto reduje los plazos de entrega un 20 %».",
          "Por qué funciona: el condicional «Diría que» atenúa la autopromoción (no lo afirmas como verdad absoluta, lo ofreces como valoración), y la evidencia hace que no tengas que exagerar: el dato habla por ti. Las fórmulas tienen su gramática: «destacar EN» + ámbito, «tener facilidad PARA» + algo, y «se me da bien» concuerda con lo que se da bien (se me dan bien los números; se me da bien negociar, con el infinitivo siempre en singular).",
        ],
        [
          ["Diría que destaco en la resolución de problemas.", "I'd say I stand out at problem-solving."],
          ["Se me da bien trabajar bajo presión.", "I'm good at working under pressure."],
          ["Tengo facilidad para los idiomas: hablo cuatro.", "I have a flair for languages: I speak four. (facilidad para + prueba)"],
        ],
        [
          mc(
            "¿Qué respuesta es equilibrada?",
            ["Tengo facilidad para negociar: cerré tres acuerdos clave el año pasado.", "Soy perfecto para este puesto y para cualquier otro.", "No sé, la verdad es que no tengo fortalezas.", "Todo se me da genial."],
            0,
            "Una respuesta equilibrada nombra una fortaleza y la apoya con una evidencia concreta. «Soy perfecto…» y «Todo se me da genial» son arrogantes y vacías, y «no tengo fortalezas» es una falsa modestia que perjudica."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "Diría que ___ en la gestión de equipos. (sobresalir, verbo con «en»)", "destaco", "«Destacar en» algo es sobresalir; el condicional «Diría que» atenúa la autopromoción."),
      fb("Completa.", "Se me ___ bien comunicar ideas complejas. (dar)", "da", "«Dársele bien algo a alguien»: el verbo concuerda con lo que se da bien (comunicar), en singular."),
      { ...fb("Completa.", "Tengo ___ para los idiomas. (habilidad natural)", "facilidad", "«Tener facilidad para» algo expresa una habilidad natural."), altAnswers: ["talento"] },
      mc(
        "¿Qué añade credibilidad a una fortaleza?",
        ["un ejemplo cuantificable", "un adjetivo más", "repetirla tres veces", "decir que es innata"],
        0,
        "Un ejemplo cuantificable añade credibilidad a una fortaleza. Un adjetivo más o repetirla no aporta pruebas, y decir que es innata no demuestra nada."
      ),
      ms(
        "¿Qué respuestas suenan a fanfarronería?",
        ["Nadie trabaja mejor que yo.", "Soy un genio de la informática.", "Se me da bien analizar datos; mi último informe se adoptó como modelo.", "No tengo ningún defecto."],
        [0, 1, 3],
        "«Se me da bien analizar datos; mi último informe se adoptó como modelo» es la única que equilibra fortaleza y prueba."
      ),
      toEs("I'd say my main strength is adaptability.", "Diría que mi principal fortaleza es la capacidad de adaptación.", "El condicional «Diría que» atenúa la autopromoción y suena más modesto.", ["Diría que mi mayor fortaleza es la adaptabilidad.", "Diría que mi principal fortaleza es la adaptabilidad."]),
      wo("En mi último puesto coordiné un equipo de ocho personas.", "Evidencia concreta: el indefinido (coordiné) presenta un logro cerrado y la cifra (ocho personas) lo hace verificable; el complemento de lugar abre la frase.", "In my last job I coordinated a team of eight people."),
      toEs(
        "Soy el mejor negociador que conozco.",
        "Diría que destaco en la negociación.",
        "«Diría que» convierte la afirmación absoluta en una valoración prudente, y «destacar en» + sustantivo nombra el ámbito sin compararte con nadie. Después llegaría la prueba.",
        ["Diría que destaco en negociar.", "Diría que destaco negociando."],
        "Cambia la respuesta fanfarrona por una equilibrada, atenuada con «Diría que destaco en…»."
      ),
      toEs(
        "Bueno, no sé, supongo que no hablo mal en público.",
        "Se me da bien hablar en público.",
        "La falsa modestia esconde la fortaleza detrás de dudas y negaciones. «Se me da bien» + infinitivo la nombra con naturalidad, sin exagerar.",
        ["Diría que se me da bien hablar en público."],
        "Cambia la falsa modestia por una fortaleza con «se me da bien» + infinitivo."
      ),
      toEs(
        "Se me dan bien coordinar equipos.",
        "Se me da bien coordinar equipos.",
        "Con «darse bien», el sujeto es lo que se da bien. Un infinitivo (coordinar) siempre concuerda en singular, aunque su complemento sea plural (equipos).",
        [],
        "Corrige la frase."
      ),
      toEs(
        "Tengo facilidad en los idiomas.",
        "Tengo facilidad para los idiomas.",
        "La expresión es «tener facilidad PARA algo». «En» es la preposición de «destacar en», no la de «facilidad».",
        ["Tengo facilidad con los idiomas."],
        "Corrige la frase."
      ),
      mc(
        "Te presentas a un puesto de profesor. ¿Qué respuesta a «¿Cuál es su mayor fortaleza?» está en el punto justo?",
        ["Diría que se me da bien explicar lo difícil: el curso pasado mis alumnos aprobaron el examen oficial con la mejor nota del centro.", "Soy el profesor que todo colegio querría tener.", "No sé, supongo que explico normal.", "Se me da todo bien, sinceramente."],
        0,
        "Nombra la fortaleza con atenuación («Diría que se me da bien»), la respalda con un resultado concreto y la vincula al puesto. Las demás son fanfarronería («el profesor que todo colegio querría», «todo bien») o falsa modestia («explico normal»)."
      ),
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
        [
          "1) Nombrar un punto de mejora real pero no crítico para el puesto. 2) Contexto: cuándo se notó. 3) Acción: qué se está haciendo para mejorar. 4) Resultado. Ejemplo: «Me costaba delegar. Al asumir la coordinación me di cuenta de que me sobrecargaba, así que empecé a asignar tareas con plazos claros y ahora el equipo es más autónomo». Evitar: «Soy demasiado perfeccionista» (tópico) o «No tengo debilidades».",
          "Los tiempos verbales cuentan la mejora por ti: la dificultad, en imperfecto (me costaba: era así antes); la acción, en indefinido (empecé, me apunté: un paso concreto); el progreso, en perfecto o con «seguir + gerundio» (he aprendido, sigo trabajando en ello). Si todo va en presente («me cuesta delegar»), el entrevistador oye un defecto, no una evolución.",
        ],
        [
          ["Me costaba hablar en público, así que me apunté a un curso.", "Public speaking was hard for me, so I signed up for a course."],
          ["Me costaba priorizar; desde que planifico los lunes, cumplo todos los plazos.", "I used to find it hard to prioritise; since I started planning on Mondays, I meet every deadline. (dificultad pasada + acción + resultado)"],
        ],
        [
          mc(
            "¿Qué respuesta es la más creíble?",
            ["Me costaba delegar; ahora planifico con el equipo y reparto tareas desde el principio.", "Soy demasiado perfeccionista.", "No tengo ninguna debilidad.", "Llego tarde a menudo."],
            0,
            "Lo más creíble es un punto de mejora real acompañado de una acción concreta. «Soy demasiado perfeccionista» es un tópico, «No tengo ninguna debilidad» no es creíble y «Llego tarde a menudo» es un defecto grave sin solución."
          ),
        ]
      ),
    ],
    [
      { ...fb("Completa.", "Me ___ organizar mi tiempo cuando empecé a trabajar. (costar, imperfecto)", "costaba", "«Costarle algo a alguien» = resultarle difícil; imperfecto para una dificultad pasada y habitual. También es correcto el indefinido «me costó», que presenta esa etapa como cerrada."), altAnswers: ["costó"] },
      fb("Completa.", "Para mejorarlo, me ___ a un curso de oratoria. (apuntarse, pretérito)", "apunté", "Pretérito indefinido (me apunté) para una acción concreta de mejora ya realizada."),
      fb("Completa.", "Es un aspecto en el que sigo ___. (trabajar, gerundio)", "trabajando", "«Seguir + gerundio» expresa que la acción continúa: sigo trabajando."),
      mc(
        "¿Por qué evitar «Soy demasiado perfeccionista»?",
        ["porque es un tópico que suena preparado", "porque es un insulto", "porque es gramaticalmente incorrecto", "porque es demasiado honesto"],
        0,
        "«Soy demasiado perfeccionista» es un tópico que suena preparado y resta credibilidad. No es un insulto ni es incorrecto gramaticalmente, y su problema no es un exceso de honestidad sino todo lo contrario."
      ),
      mc(
        "¿Qué punto de mejora es arriesgado para un puesto de atención al cliente?",
        ["Me pongo nervioso cuando trato con clientes.", "Me cuesta delegar.", "Me costaba usar hojas de cálculo avanzadas.", "Hablaba poco en reuniones grandes."],
        0,
        "En atención al cliente, ponerse nervioso con los clientes afecta a la competencia central del puesto. Delegar, las hojas de cálculo o hablar en reuniones grandes son aspectos secundarios para ese puesto."
      ),
      toEs("It used to be hard for me to say no, but I've learned to prioritize.", "Me costaba decir que no, pero he aprendido a priorizar.", "«Me costaba» (imperfecto) para la dificultad pasada + «he aprendido» (perfecto) para el cambio logrado.", ["Antes me costaba decir que no, pero he aprendido a priorizar.", "Me resultaba difícil decir que no, pero he aprendido a priorizar."]),
      wo("Es un aspecto que he mejorado mucho en los últimos dos años.", "Mostrar evolución: el pretérito perfecto (he mejorado) conecta el progreso con el presente, reforzado por «en los últimos dos años».", "It's something I've improved a lot over the last two years."),
      toEs(
        "Me cuesta pedir ayuda.",
        "Me costaba pedir ayuda, pero he aprendido a hacerlo.",
        "El imperfecto sitúa la dificultad en el pasado y el perfecto «he aprendido» trae el cambio hasta hoy: el mismo defecto se convierte en una historia de progreso.",
        ["Antes me costaba pedir ayuda, pero he aprendido a hacerlo.", "Me costaba pedir ayuda, pero he aprendido a pedirla."],
        "Cambia «me cuesta» al imperfecto y añade «pero he aprendido a hacerlo»."
      ),
      toEs(
        "Todavía trabajo en ello.",
        "Sigo trabajando en ello.",
        "«Seguir + gerundio» presenta la mejora como un proceso en marcha: más activo que «todavía trabajo», que suena a tarea pendiente.",
        [],
        "Transforma la frase con «seguir + gerundio»."
      ),
      toEs(
        "Me costaba delegar, así que empezaba a asignar tareas con plazos claros.",
        "Me costaba delegar, así que empecé a asignar tareas con plazos claros.",
        "La dificultad es el fondo (imperfecto: me costaba), pero la decisión que tomaste es una acción concreta y puntual: indefinido, «empecé».",
        [],
        "Corrige la frase."
      ),
      toEs(
        "Es un aspecto en el que sigo trabajar.",
        "Es un aspecto en el que sigo trabajando.",
        "La perífrasis de continuidad es «seguir + gerundio»: sigo trabajando. Con infinitivo no existe.",
        [],
        "Corrige la frase."
      ),
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
        [
          "Situación: «En mi anterior empresa, un cliente importante amenazó con rescindir el contrato». Tarea: «Me encargaron recuperar su confianza». Acción: «Organicé reuniones semanales y rediseñé el servicio». Resultado: «Renovó por tres años y amplió el pedido un 15 %».",
          "Por qué este orden: el entrevistador necesita el contexto para valorar la acción, y la acción para creerse el resultado. Los tiempos verbales lo marcan: imperfecto para describir el contexto (estaba, había, se acumulaban), indefinido para los hechos que hacen avanzar el relato (amenazó, organicé, renovó). La tarea suele ir con «Me encargaron + infinitivo» o «Mi tarea era + infinitivo».",
        ],
        [
          ["Me encargaron recuperar la relación con el cliente.", "I was tasked with rebuilding the client relationship."],
          ["Como resultado, el cliente renovó el contrato.", "As a result, the client renewed the contract."],
        ],
        [
          mc(
            "«Organicé reuniones semanales con el cliente» corresponde a…",
            ["la acción", "la situación", "la tarea", "el resultado"],
            0,
            "«Organicé reuniones» describe lo que hiciste: la acción. La situación es el contexto, la tarea es el objetivo encomendado y el resultado es lo que se consiguió."
          ),
        ]
      ),
    ],
    [
      mc(
        "¿A qué parte del relato STAR corresponde «El equipo estaba desmotivado y los plazos se acumulaban»?",
        ["situación", "acción", "resultado", "tarea"],
        0,
        "Describir el estado de cosas en imperfecto (estaba desmotivado, se acumulaban) es la situación. No hay ninguna acción del candidato, ni resultado, ni una tarea encomendada."
      ),
      mc(
        "¿A qué parte del relato STAR corresponde «Al final, entregamos el proyecto con una semana de antelación»?",
        ["resultado", "situación", "tarea", "acción"],
        0,
        "«Al final, entregamos…» es el desenlace: el resultado. La situación es el contexto inicial, la tarea el objetivo y la acción lo que hiciste para lograrlo."
      ),
      fb("Completa (contexto).", "Cuando entré en la empresa, el departamento ___ sin dirección. (estar)", "estaba", "El imperfecto (estaba) describe la situación o el contexto de partida."),
      fb("Completa (acción).", "___ un nuevo sistema de seguimiento. (implantar, yo)", "Implanté", "El pretérito indefinido (implanté) narra la acción concreta que realizaste."),
      { ...fb("Completa (conector de consecuencia).", "Como ___, las ventas aumentaron un 20 %.", "resultado", "«Como resultado» introduce la consecuencia o el desenlace del relato."), altAnswers: ["consecuencia"] },
      mc(
        "Orden correcto del relato:",
        ["situación → tarea → acción → resultado", "resultado → acción → tarea → situación", "acción → situación → resultado", "tarea → resultado → situación"],
        0,
        "El método STAR sigue el orden lógico: situación → tarea → acción → resultado. Las demás ordenaciones empiezan por el final o por la acción, lo que desorienta al entrevistador."
      ),
      wo("Me encargaron reducir los costes sin despedir a nadie.", "Tarea: «Me encargaron + infinitivo» (3.ª persona del plural impersonal) presenta el objetivo asignado; «sin + infinitivo» añade la condición, y «nadie» va tras el verbo negado.", "I was tasked with cutting costs without laying anyone off."),
      toEs(
        "Las ventas caen y propongo una campaña nueva.",
        "Las ventas caían y propuse una campaña nueva.",
        "«Caían» describe el fondo (imperfecto) y «propuse» es la acción concreta que lo cambia (indefinido). Con los dos en imperfecto, tu acción se perdería en el decorado.",
        ["Las ventas estaban cayendo y propuse una campaña nueva."],
        "Cambia el relato al pasado: imperfecto para la situación, indefinido para tu acción."
      ),
      toEs(
        "Tenía que reducir los costes del almacén.",
        "Me encargaron reducir los costes del almacén.",
        "«Me encargaron + infinitivo» (tercera persona del plural impersonal) presenta la tarea como un objetivo asignado, lo que hace más visible tu responsabilidad.",
        [],
        "Transforma la frase en la tarea del relato con «Me encargaron + infinitivo»."
      ),
      toEs(
        "Cuando llegué, los clientes se quejaban y en un mes yo rediseñaba el servicio.",
        "Cuando llegué, los clientes se quejaban y en un mes yo rediseñé el servicio.",
        "«En un mes» delimita una acción concreta y terminada: indefinido (rediseñé). «Se quejaban» sí va en imperfecto, porque es la situación de fondo.",
        ["Cuando llegué, los clientes se quejaban y en un mes rediseñé el servicio."],
        "Corrige la frase."
      ),
      toEs(
        "Como resultado, el cliente renovaba el contrato por tres años.",
        "Como resultado, el cliente renovó el contrato por tres años.",
        "El resultado es un hecho único y cerrado: indefinido (renovó). El imperfecto lo convertiría en algo habitual o en un fondo sin desenlace.",
        [],
        "Corrige la frase."
      ),
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
        [
          "Preguntas del candidato: «¿Cómo sería un día típico en este puesto?», «¿Qué retos tiene el equipo a corto plazo?», «¿Cuáles son los próximos pasos del proceso?». Salario: dar una horquilla basada en el mercado: «Según mi experiencia y el mercado, mis expectativas se sitúan entre 38.000 y 42.000 euros brutos anuales, aunque estoy abierto a valorar el paquete completo».",
          "Por qué así: el condicional («¿Cómo sería…?», «¿Sería posible…?») plantea la pregunta como hipótesis y suena cortés, no exigente. La horquilla demuestra que conoces el mercado y deja margen para negociar; una cifra única cierra la puerta, y «lo que ustedes consideren» transmite inseguridad. Ojo a las preposiciones fijas: abierto A valorar, situarse ENTRE X Y Z.",
        ],
        [
          ["¿Cuáles son los próximos pasos del proceso?", "What are the next steps in the process?"],
          ["Mis expectativas se sitúan en una horquilla de…", "My expectations are in a range of…"],
        ],
        [
          mc(
            "Pregunta que demuestra interés real:",
            ["¿Qué retos principales tiene el equipo este año?", "¿Cuántas vacaciones hay?", "¿Puedo salir antes los viernes?", "No tengo preguntas."],
            0,
            "Preguntar por los retos del equipo demuestra interés por el trabajo en sí. Preguntar por vacaciones o salir antes se centra en tus ventajas, y «No tengo preguntas» desaprovecha la ocasión."
          ),
        ]
      ),
    ],
    [
      { ...fb("Completa.", "Mis expectativas se ___ entre 35.000 y 40.000 euros brutos. (situar)", "sitúan", "«Situarse entre» X e Y expresa un rango; el verbo concuerda con «expectativas»: sitúan."), altAnswers: ["encuentran", "mueven", "ubican"] },
      fb("Completa.", "Estoy abierto a ___ el paquete completo. (considerar)", "valorar", "«Valorar» = considerar o sopesar; «estar abierto a» + infinitivo."),
      fb("Completa.", "¿Cómo ___ la formación durante el primer mes? (ser, condicional)", "sería", "El condicional de cortesía (sería) plantea la pregunta como hipótesis y la suaviza: el candidato aún no tiene el puesto."),
      mc(
        "«Horquilla salarial» significa…",
        ["un rango entre un mínimo y un máximo", "una cifra exacta", "un bonus", "un impuesto"],
        0,
        "Una horquilla salarial es un rango entre un sueldo mínimo y uno máximo. No es una cifra exacta, un bonus ni un impuesto."
      ),
      mc(
        "¿Qué respuesta a «¿Tiene alguna pregunta?» es la peor?",
        ["No, ninguna.", "¿Cuáles son los próximos pasos?", "¿Cómo se mide el éxito en este puesto?", "¿Qué valoran más en su equipo?"],
        0,
        "«No, ninguna» desaprovecha la oportunidad de mostrar interés. Preguntar por los próximos pasos, cómo se mide el éxito o qué valoran en el equipo son buenas respuestas."
      ),
      toEs("What would a typical day look like in this role?", "¿Cómo sería un día típico en este puesto?", "El condicional (sería) plantea la pregunta de forma cortés e hipotética.", ["¿Cómo sería un día normal en este puesto?", "¿Cómo es un día típico en este puesto?"]),
      wo("Según mi experiencia, mis expectativas se sitúan en torno a los cuarenta mil euros.", "«Situarse en torno a» + cantidad da una cifra aproximada; «Según mi experiencia» la justifica, como pide una respuesta salarial bien fundamentada.", "Based on my experience, my expectations are around forty thousand euros."),
      toEs(
        "¿Puedo teletrabajar algún día a la semana?",
        "¿Sería posible teletrabajar algún día a la semana?",
        "«¿Sería posible + infinitivo?» convierte la petición en una consulta hipotética: el candidato pregunta sin exigir.",
        ["¿Sería posible teletrabajar algún día por semana?"],
        "Cambia la pregunta directa al condicional de cortesía con «¿Sería posible…?»."
      ),
      toEs(
        "Quiero cobrar 35.000 euros brutos anuales.",
        "Mis expectativas se sitúan entre 33.000 y 37.000 euros brutos anuales.",
        "La horquilla («situarse entre X y Y») muestra que conoces el mercado y deja margen para negociar; «quiero cobrar» suena a exigencia cerrada.",
        ["Mis expectativas salariales se sitúan entre 33.000 y 37.000 euros brutos anuales.", "Mis expectativas están entre 33.000 y 37.000 euros brutos anuales."],
        "Reescribe la cifra exacta como horquilla entre 33.000 y 37.000 euros."
      ),
      toEs(
        "Estoy abierta de negociar la fecha de incorporación.",
        "Estoy abierta a negociar la fecha de incorporación.",
        "«Estar abierto» rige la preposición «a»: abierto a valorar, abierto a negociar, abierto a cambios.",
        [],
        "Corrige la frase."
      ),
      toEs(
        "¿Cuál son las condiciones del periodo de prueba?",
        "¿Cuáles son las condiciones del periodo de prueba?",
        "El interrogativo concuerda con lo que se pregunta: «las condiciones» es plural, así que «¿Cuáles son…?».",
        [],
        "Corrige la frase."
      ),
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
        [
          "Criticar a la empresa anterior: ✗ «Mi jefe era un inútil» → ✓ «Buscaba un entorno con más oportunidades de desarrollo». Vaguedad: ✗ «Hice muchas cosas» → ✓ ejemplos concretos. Registro coloquial: ✗ «Pues nada, currando por ahí» → ✓ «He trabajado en…». Tutear sin invitación en una entrevista formal.",
          "La regla que hay detrás: el entrevistador se imagina cómo hablarás de su empresa y con sus clientes. Por eso se habla en positivo de lo que buscas (no de lo que huyes), se concreta con un verbo de responsabilidad (encargarse de, coordinar, gestionar) y se trata de usted mientras no te inviten a tutear.",
        ],
        [
          ["Buscaba un entorno con más proyección.", "I was looking for an environment with more growth."],
        ],
        [
          mc(
            "¿Cómo explicar que dejaste tu trabajo por un mal ambiente?",
            ["Buscaba un entorno más colaborativo.", "Mi jefe era insoportable.", "Todos eran unos vagos.", "Me echaron por nada."],
            0,
            "Enfoque positivo: «Buscaba un entorno más colaborativo» explica el motivo sin criticar. Hablar mal del jefe o de los compañeros («insoportable», «unos vagos») o decir «Me echaron por nada» te perjudica."
          ),
        ]
      ),
    ],
    [
      { ...fb("Reformula.", "✗ Allí no aprendía nada. → ✓ Buscaba nuevos ___ profesionales.", "retos", "Enfoque positivo: hablar de lo que buscas (nuevos retos) en vez de criticar lo que dejaste."), altAnswers: ["desafíos"] },
      fb("Reformula el registro.", "✗ Estuve currando en una tienda. → ✓ ___ en una tienda. (trabajar, pretérito)", "Trabajé", "«Currar» es coloquial; en una entrevista se usa el registro neutro: trabajé."),
      fb("Reformula.", "✗ Hice cosas de marketing. → ✓ Me ___ de las campañas en redes sociales. (encargarse, pretérito)", "encargué", "«Encargarse de» algo concreta tu responsabilidad, más preciso que «hice cosas»."),
      ms(
        "¿Qué frases conviene evitar?",
        ["Mi anterior empresa era un desastre.", "Pues, no sé, lo que surja.", "Tío, ¿y cuánto se cobra aquí?", "Me motiva especialmente el proyecto de expansión."],
        [0, 1, 2],
        "«Me motiva especialmente el proyecto de expansión» es la única adecuada: muestra interés; las demás critican, suenan vagas o demasiado informales."
      ),
      mc(
        "¿Qué respuesta a «¿Por qué quiere trabajar aquí?» es mejor?",
        ["Me atrae su apuesta por la innovación y creo que mi experiencia en datos puede aportar valor.", "Porque necesito dinero.", "Me pilla cerca de casa.", "Porque no me cogieron en otro sitio."],
        0,
        "La mejor respuesta muestra encaje con la empresa: qué te atrae y qué puedes aportar. Necesitar dinero, la cercanía a casa o no haber entrado en otro sitio son motivos que no convencen."
      ),
      toEs("I was looking for new professional challenges.", "Buscaba nuevos retos profesionales.", "Motivo positivo: «Buscaba nuevos retos / desafíos profesionales» (imperfecto que describe el motivo).", ["Buscaba nuevos desafíos profesionales.", "Estaba buscando nuevos retos profesionales."]),
      wo("Creo que mi experiencia encaja perfectamente con lo que buscan.", "Encaje: «encajar con» + «lo que buscan» (relativo neutro; ustedes) vincula tu perfil con lo que necesita la empresa.", "I think my experience fits perfectly with what you're looking for."),
      toEs(
        "Allí curraba un montón de horas.",
        "Allí trabajaba muchas horas.",
        "«Currar» y «un montón de» son coloquiales; en una entrevista se usan sus equivalentes neutros: trabajar, muchas.",
        ["Allí trabajaba muchísimas horas.", "Allí trabajaba muchas horas al día."],
        "Reescribe la frase en registro formal."
      ),
      toEs(
        "Me fui porque mi jefe no me dejaba proponer nada.",
        "Buscaba un entorno donde pudiera proponer ideas.",
        "Hablar de lo que buscas, y no de lo que te molestaba, transmite la misma información sin criticar. Tras «donde» con un antecedente buscado, el verbo va en subjuntivo (pudiera).",
        ["Buscaba un entorno en el que pudiera proponer ideas.", "Buscaba un puesto donde pudiera proponer ideas.", "Buscaba un entorno donde pudiera aportar ideas.", "Buscaba un puesto en el que pudiera proponer ideas."],
        "Transforma la crítica en un motivo positivo que empiece por «Buscaba»."
      ),
      toEs(
        "¿Y tú qué valoras más en tu equipo?",
        "¿Y usted qué valora más en su equipo?",
        "En una entrevista formal se trata de usted mientras el entrevistador no invite a tutear: verbo en tercera persona (valora) y posesivo «su».",
        ["¿Y ustedes qué valoran más en su equipo?", "¿Qué valora usted más en su equipo?"],
        "Corrige la frase."
      ),
      toEs(
        "Mis compañeros eran unos vagos, por eso busco nuevos retos profesionales.",
        "Busco nuevos retos profesionales.",
        "Criticar a los antiguos compañeros resta credibilidad: el motivo positivo («Busco nuevos retos profesionales») funciona solo, sin la queja.",
        ["Busco nuevos desafíos profesionales."],
        "Corrige la frase."
      ),
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
        [
          "Trayectoria profesional (recorrido laboral). Perfil (conjunto de rasgos del candidato). Competencias (capacidades demostrables): trabajo en equipo, liderazgo, orientación a resultados. Candidatura (solicitud). Proceso de selección. Incorporación inmediata (empezar ya). Periodo de prueba. Jornada completa / parcial. Retribución (salario).",
          "Casi todo este léxico sale de verbos o nombres conocidos con sufijos regulares, y eso permite deducirlo: verbo → -ción (incorporarse → incorporación, retribuir → retribución, seleccionar → selección); persona → -ura para su solicitud (candidato → candidatura); trayecto → trayectoria. El registro formal prefiere estos sustantivos: «¿Cuál sería su fecha de incorporación?» en lugar de «¿Cuándo empieza?».",
        ],
        [
          ["Cuento con una sólida trayectoria en el sector.", "I have a solid track record in the sector."],
          ["Tengo disponibilidad de incorporación inmediata.", "I'm available to start immediately."],
        ],
        [
          mc(
            "«Incorporación inmediata» significa…",
            ["poder empezar a trabajar enseguida", "un contrato indefinido", "un ascenso", "un despido"],
            0,
            "«Incorporación inmediata» es poder empezar a trabajar enseguida. No se refiere al tipo de contrato (indefinido), a un ascenso ni a un despido."
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
        "La trayectoria es el recorrido profesional, la retribución es el salario, la candidatura es la solicitud a un puesto y el periodo de prueba es la fase inicial en que ambas partes se evalúan."
      ),
      fb("Completa.", "Mi ___ encaja con los requisitos de la oferta. (conjunto de rasgos profesionales)", "perfil", "El perfil es el conjunto de rasgos profesionales (formación, experiencia, competencias) de un candidato."),
      { ...fb("Completa.", "Cuento con una amplia ___ en el sector financiero.", "trayectoria", "La trayectoria es el recorrido profesional acumulado a lo largo de los años."), altAnswers: ["experiencia"] },
      { ...fb("Completa.", "Le agradezco que haya tenido en cuenta mi ___.", "candidatura", "La candidatura es la solicitud o presentación a un puesto."), altAnswers: ["solicitud"] },
      ms(
        "¿Qué son competencias?",
        ["trabajo en equipo", "orientación a resultados", "liderazgo", "jornada parcial"],
        [0, 1, 2],
        "Trabajo en equipo, orientación a resultados y liderazgo son competencias (capacidades). La jornada parcial es una condición laboral, no una competencia."
      ),
      toEs("I could start next month if you need me to.", "Podría incorporarme el mes que viene si lo necesitan.", "«Incorporarse» (a un puesto) es el verbo formal para «empezar a trabajar»; el condicional «podría» suena más cortés que «puedo».", ["Podría incorporarme el próximo mes si lo necesitan.", "Podría incorporarme el mes que viene si me necesitan.", "Podría empezar el mes que viene si lo necesitan.", "Puedo incorporarme el mes que viene si lo necesitan."]),
      wo("El proceso de selección consta de tres entrevistas y una prueba práctica.", "«Constar de» (no «consistir de» ni «constar en») introduce las partes de un todo: el proceso consta de tres entrevistas y una prueba.", "The selection process consists of three interviews and a practical test."),
      toEs(
        "¿Cuándo se incorporaría usted?",
        "¿Cuál sería su fecha de incorporación?",
        "Incorporarse → la incorporación (-ción). El registro de selección prefiere el sustantivo: «fecha de incorporación», «incorporación inmediata».",
        ["¿Cuál sería su fecha de incorporación al puesto?"],
        "Convierte el verbo en sustantivo: usa «fecha de incorporación»."
      ),
      toEs(
        "El salario se pagará en catorce pagas.",
        "La retribución se pagará en catorce pagas.",
        "«Retribución» (de retribuir) es el término formal de las ofertas y los contratos; es femenino, así que el artículo cambia a «la».",
        [],
        "Sustituye «salario» por el término formal de la lección."
      ),
      toEs(
        "El proceso de selección consiste de tres entrevistas.",
        "El proceso de selección consta de tres entrevistas.",
        "Para enumerar las partes de un todo se usa «constar de». «Consistir» se construye con «en» (consiste en tres entrevistas); «consistir de» es un calco del inglés.",
        ["El proceso de selección consiste en tres entrevistas."],
        "Corrige la frase."
      ),
      toEs(
        "Presenté mi candidato al puesto de jefa de ventas.",
        "Presenté mi candidatura al puesto de jefa de ventas.",
        "La solicitud es la candidatura (candidato + -ura). El candidato es la persona, que no se presenta como un objeto propio.",
        [],
        "Corrige la frase."
      ),
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
        [
          "Recuerda la regla: cada pregunta tiene su jugada. 1) «Hábleme de usted» → trayectoria en 60 segundos, del pasado al presente y al puesto. 2) «¿Por qué este puesto?» → encaje. 3) «Una fortaleza» → fortaleza + evidencia. 4) «Un punto de mejora» → real + acción. 5) «¿Alguna pregunta?» → pregunta inteligente. Registro: usted, condicional de cortesía, sin coloquialismos.",
          "Herramientas gramaticales: «llevar + tiempo + gerundio» para la trayectoria que sigue hasta hoy (llevo seis años trabajando), «me atrae / me motiva» como «gustar» para el encaje, «destacar en» para la fortaleza, «me costaba» + indefinido para la mejora.",
        ],
        [
          ["Soy ingeniera industrial y llevo seis años en logística.", "I'm an industrial engineer and I've spent six years in logistics."],
        ],
        [
          mc(
            "«Hábleme de usted» se responde mejor con…",
            ["un resumen profesional orientado al puesto", "la historia de tu infancia", "tus aficiones solamente", "tu salario actual"],
            0,
            "«Hábleme de usted» pide un resumen profesional orientado al puesto. La infancia o solo las aficiones se alejan del objetivo, y el salario actual no se menciona sin que lo pregunten."
          ),
        ]
      ),
    ],
    [
      fb("Presentación.", "___ seis años trabajando en el sector logístico. (llevar, yo)", "Llevo", "«Llevar + tiempo + gerundio» expresa una acción que dura hasta hoy: llevo seis años trabajando."),
      fb("Encaje.", "Me ___ especialmente su apuesta por la sostenibilidad. (atraer)", "atrae", "«Atraer» funciona como «gustar»: me atrae + lo que atrae (su apuesta)."),
      fb("Fortaleza.", "Diría que ___ en la planificación. (sobresalir)", "destaco", "«Destacar en» algo es sobresalir en ello; «Diría que» atenúa."),
      fb("Mejora.", "Antes me ___ delegar, pero he aprendido a confiar en el equipo. (costar)", "costaba", "«Costarle algo a alguien» = resultarle difícil; imperfecto para la dificultad pasada."),
      mc(
        "Pregunta final adecuada:",
        ["¿Cómo se mide el éxito en este puesto durante el primer año?", "¿Hay cafetería?", "¿Esto es todo?", "¿Cuándo cobro?"],
        0,
        "Preguntar cómo se mide el éxito en el puesto muestra interés profesional. «¿Hay cafetería?» es trivial, «¿Esto es todo?» suena impaciente y «¿Cuándo cobro?» se centra solo en el dinero."
      ),
      toEs("I've been working in logistics for six years.", "Llevo seis años trabajando en logística.", "«Llevar + tiempo + gerundio» o «Hace + tiempo + que + presente» para acciones que continúan.", ["Llevo seis años en el sector de la logística.", "Hace seis años que trabajo en logística.", "Trabajo en logística desde hace seis años.", "Llevo seis años trabajando en el sector de la logística."]),
      wo("Muchas gracias por su tiempo; quedo a la espera de sus noticias.", "Cierre formal: «quedo a la espera de sus noticias» es la fórmula cortés (usted) para indicar que esperas su respuesta.", "Thank you very much for your time; I look forward to hearing from you."),
      mc(
        "El entrevistador pregunta: «¿Por qué este puesto?». ¿Qué respuesta muestra encaje?",
        ["Me atrae su expansión en Latinoamérica, y llevo cinco años abriendo mercados nuevos.", "Porque está cerca de mi casa.", "Porque pagan mejor que en mi empresa actual.", "Me da igual el puesto, lo que quiero es entrar en la empresa."],
        0,
        "El encaje une lo que ofrece la empresa (su expansión) con lo que aportas tú (cinco años abriendo mercados). La cercanía o el sueldo son motivos personales que no convencen, y decir que da igual el puesto transmite falta de interés."
      ),
      toEs(
        "Hace ocho años que trabajo en recursos humanos.",
        "Llevo ocho años trabajando en recursos humanos.",
        "«Llevar + tiempo + gerundio» expresa una acción que empezó en el pasado y sigue hoy, igual que «Hace + tiempo + que + presente», pero pone a la persona como sujeto: suena más directo en una presentación.",
        [],
        "Cambia «Hace… que» por la perífrasis «llevar + gerundio»."
      ),
      toEs(
        "Me atraen especialmente su apuesta por la sostenibilidad.",
        "Me atrae especialmente su apuesta por la sostenibilidad.",
        "«Atraer» funciona como «gustar»: concuerda con lo que atrae. «Su apuesta» es singular, así que «atrae».",
        [],
        "Corrige la frase."
      ),
      toEs(
        "Llevo cuatro años dirigido un equipo comercial.",
        "Llevo cuatro años dirigiendo un equipo comercial.",
        "La perífrasis de duración es «llevar + tiempo + gerundio» (dirigiendo). Con participio («llevo dirigido») cambiaría el sentido y aquí no es gramatical.",
        [],
        "Corrige la frase."
      ),
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
        [
          "Frases que escalan: «Tú siempre…», «Nunca…», «Es que eres…», «¡Cálmate!». Frases que desactivan: mensaje en primera persona («Me siento… cuando… porque…»), validar la emoción («Entiendo que estés molesto»), bajar el ritmo («Vamos a hablarlo con calma»), pedir en positivo («Me ayudaría que…»).",
          "Por qué funciona: «tú siempre» y «eres» etiquetan a la persona, y quien se siente etiquetado se defiende en lugar de escuchar. «Me siento… cuando…» habla de tu experiencia, que el otro no puede discutir, y de una conducta concreta, que sí puede cambiar. La gramática acompaña: «cuando» + indicativo para lo que pasa habitualmente (cuando no me consultas), y «Me ayudaría que» + imperfecto de subjuntivo, porque el condicional pide el subjuntivo en pasado (me ayudaría que me avisaras).",
        ],
        [
          ["Tú nunca me escuchas. → Me siento ignorada cuando hablo y miras el móvil.", "You never listen to me. → I feel ignored when I talk and you look at your phone."],
          ["¡Cálmate! → Entiendo que estés enfadado; vamos a hablarlo.", "Calm down! → I understand you're angry; let's talk about it."],
        ],
        [
          mc(
            "¿Qué frase desactiva la tensión?",
            ["Entiendo que estés frustrado; ¿lo hablamos con calma?", "¡Siempre haces lo mismo!", "Cálmate ya.", "Eres imposible."],
            0,
            "Validar la emoción y proponer hablar con calma desactiva la tensión. «¡Siempre haces lo mismo!» y «Eres imposible» atacan, y «Cálmate ya» invalida lo que siente el otro."
          ),
        ]
      ),
    ],
    [
      { ...fb("Valida la emoción.", "Entiendo que ___ molesto. (estar, tú)", "estés", "«Entender que» con valor de aceptar o comprender un sentimiento va con subjuntivo: estés (con indicativo, «estás», constatas un hecho)."), altAnswers: ["estás"] },
      fb("Pide en positivo.", "Me ayudaría que me ___ antes de cambiar el plan. (avisar, tú)", "avisaras", "«Me ayudaría que» (condicional) exige imperfecto de subjuntivo: avisaras."),
      fb("Primera persona.", "Me siento ___ cuando no me consultas. (apartar, participio)", "apartado", "El mensaje en primera persona («Me siento apartado») expresa cómo te afecta, sin acusar."),
      mc(
        "Transforma «Eres un desordenado»:",
        ["Me agobia ver la cocina así; ¿podemos organizarnos?", "Eres un desastre total.", "Siempre lo dejas todo tirado.", "Nunca cambiarás."],
        0,
        "Mensaje en primera persona (me agobia) + propuesta (¿podemos organizarnos?) critica sin atacar. «Eres un desastre total», «Siempre lo dejas todo tirado» y «Nunca cambiarás» siguen etiquetando a la persona."
      ),
      ms(
        "¿Qué expresiones suelen escalar un conflicto?",
        ["Tú siempre…", "Nunca…", "Cálmate.", "Entiendo lo que dices."],
        [0, 1, 2],
        "«Entiendo lo que dices» valida al otro y desescala; las generalizaciones (tú siempre, nunca) y el «cálmate» suelen encender más el conflicto."
      ),
      toEs("I feel frustrated when plans change at the last minute.", "Me siento frustrado cuando los planes cambian en el último momento.", "Mensaje yo: «Me siento frustrado/a cuando…» (indicativo) o «Me frustra que…» (subjuntivo).", ["Me siento frustrado cuando los planes cambian a última hora.", "Me siento frustrada cuando los planes cambian a última hora.", "Me siento frustrada cuando los planes cambian en el último momento.", "Me frustra que los planes cambien a última hora.", "Me frustra que los planes cambien en el último momento."]),
      wo("Vamos a tomarnos un momento y hablarlo con calma.", "Bajar el ritmo: «vamos a + infinitivo» propone algo en primera persona del plural, y los pronombres van unidos al infinitivo (tomarnos, hablarlo).", "Let's take a moment and talk about it calmly."),
      toEs(
        "Tú nunca me avisas de los cambios.",
        "Me siento descolocada cuando no me avisas de los cambios.",
        "El mensaje en primera persona sustituye la generalización («nunca») por una conducta concreta (no me avisas) y su efecto en ti. «Cuando» + indicativo, porque describe lo que ocurre habitualmente.",
        [],
        "Transforma la acusación en un mensaje en primera persona que empiece por «Me siento descolocada cuando…»."
      ),
      toEs(
        "¡Deja de interrumpirme!",
        "Me ayudaría que me dejaras terminar.",
        "Pedir en positivo dice lo que necesitas en vez de prohibir. Tras el condicional «me ayudaría que», el verbo va en imperfecto de subjuntivo (dejaras / dejases).",
        ["Me ayudaría que me dejases terminar.", "Me ayudaría que no me interrumpieras.", "Me ayudaría que no me interrumpieses."],
        "Cambia la orden por una petición en positivo con «Me ayudaría que…»."
      ),
      toEs(
        "Me ayudaría que me consultas antes de decidir.",
        "Me ayudaría que me consultaras antes de decidir.",
        "«Me ayudaría que» expresa un deseo y va en condicional, así que exige imperfecto de subjuntivo: consultaras (o consultases). El indicativo «consultas» no es posible tras esta estructura.",
        ["Me ayudaría que me consultases antes de decidir."],
        "Corrige la frase."
      ),
      toEs(
        "Me siento apartado cuando no me consultes.",
        "Me siento apartado cuando no me consultas.",
        "En el mensaje en primera persona, «cuando» describe algo que ya pasa habitualmente: indicativo (consultas). El subjuntivo tras «cuando» solo se usa para el futuro (cuando me consultes, te diré).",
        ["Me siento apartada cuando no me consultas."],
        "Corrige la frase."
      ),
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
        [
          "Fórmulas: «Entiendo que desde tu posición lo veas así», «Tiene sentido que te moleste», «Entiendo tu punto de vista; al mismo tiempo, para mí es importante…», «Los dos queremos lo mismo: …». Evitar el «pero» que anula todo lo anterior; mejor «y», «al mismo tiempo», «a la vez».",
          "La clave gramatical: cuando validas el sentimiento del otro («Entiendo que…», «Tiene sentido que…», «Es lógico que…»), no informas de un hecho, lo valoras; por eso va en subjuntivo (lo veas, te moleste, estés cansado). Y «pero» introduce lo que de verdad cuenta, así que borra lo anterior; «al mismo tiempo» pone las dos posturas al mismo nivel.",
        ],
        [
          ["Entiendo que desde tu lugar lo veas así; al mismo tiempo, yo necesito…", "I understand that from where you stand you see it that way; at the same time, I need…"],
          ["Los dos queremos que el proyecto salga bien.", "We both want the project to succeed."],
        ],
        [
          mc(
            "¿Qué frase reconoce sin ceder?",
            ["Tiene sentido que te preocupe el presupuesto; a la vez, necesitamos cumplir el plazo.", "Tienes razón, lo que tú digas.", "No tienes razón en nada.", "Pero eso da igual."],
            0,
            "Reconocer la preocupación del otro y, «a la vez», mantener tu postura. «Tienes razón, lo que tú digas» cede, y «No tienes razón en nada» o «eso da igual» ignoran su perspectiva."
          ),
        ]
      ),
    ],
    [
      { ...fb("Completa.", "Entiendo que desde tu posición lo ___ así. (ver, tú)", "veas", "«Entender que» con valor de aceptar el punto de vista ajeno lleva subjuntivo: veas (con indicativo, «ves», constatas un hecho)."), altAnswers: ["ves"] },
      fb("Completa.", "Tiene sentido que te ___ esta decisión. (molestar)", "moleste", "«Tener sentido que» es una valoración y exige subjuntivo: moleste."),
      fb("Completa.", "Entiendo tu punto de vista; al ___ tiempo, para mí es clave la calidad.", "mismo", "«Al mismo tiempo» añade tu postura sin anular la del otro, a diferencia de «pero»."),
      mc(
        "¿Por qué evitar «Te entiendo, pero…»?",
        ["porque el «pero» suele anular el reconocimiento", "porque «pero» solo se usa en registro escrito", "porque obliga a dar la razón al otro", "porque suena demasiado informal"],
        0,
        "El «pero» suele anular lo que se reconoce antes; mejor «y» o «al mismo tiempo». «Pero» se usa en cualquier registro, no obliga a dar la razón (más bien la retira) y no es informal."
      ),
      mc(
        "«Los dos queremos lo mismo: que el equipo funcione.» Esta frase busca…",
        ["un interés común", "cerrar la conversación", "culpar al otro", "cambiar de tema"],
        0,
        "Señalar que ambos quieren lo mismo busca un interés común, un terreno compartido. No cierra la conversación, no culpa al otro ni cambia de tema."
      ),
      toEs("I see your point, and at the same time I need you to see mine.", "Entiendo tu punto de vista y, al mismo tiempo, necesito que entiendas el mío.", "Reconocer sin ceder: «y, al mismo tiempo» en lugar de «pero», + «necesito que» + subjuntivo.", ["Veo tu punto y, al mismo tiempo, necesito que veas el mío.", "Entiendo tu punto de vista y a la vez necesito que entiendas el mío."]),
      wo("Tiene sentido que te sientas así después de lo que pasó.", "«Tener sentido que» es una valoración y exige subjuntivo (te sientas); el pronombre reflexivo «te» va delante del verbo conjugado.", "It makes sense that you feel that way after what happened."),
      toEs(
        "Entiendo que te preocupe el coste, pero necesitamos el nuevo equipo.",
        "Entiendo que te preocupe el coste; al mismo tiempo, necesitamos el nuevo equipo.",
        "Con «pero», el oyente solo retiene la segunda parte. «Al mismo tiempo» (o «a la vez», «y») suma tu postura sin anular su preocupación.",
        ["Entiendo que te preocupe el coste y, al mismo tiempo, necesitamos el nuevo equipo.", "Entiendo que te preocupe el coste; a la vez, necesitamos el nuevo equipo.", "Entiendo que te preocupe el coste, al mismo tiempo necesitamos el nuevo equipo."],
        "Sustituye «pero» por «al mismo tiempo» para no anular el reconocimiento."
      ),
      toEs(
        "Tiene sentido que te moleste el retraso.",
        "Tiene sentido que le moleste el retraso.",
        "Con usted, el pronombre de «molestar» (que funciona como «gustar») pasa de «te» a «le»; el subjuntivo se mantiene porque sigue siendo una valoración.",
        [],
        "Cambia la frase a la forma de usted."
      ),
      toEs(
        "Es lógico que estás cansado después de tantas horas.",
        "Es lógico que estés cansado después de tantas horas.",
        "«Es lógico que» valora una situación y exige subjuntivo (estés), como «es normal que» o «tiene sentido que».",
        ["Es lógico que estés cansada después de tantas horas."],
        "Corrige la frase."
      ),
      toEs(
        "Comprendo tu postura, y a la vez necesito que respetas la mía.",
        "Comprendo tu postura, y a la vez necesito que respetes la mía.",
        "«Necesitar que» con otro sujeto expresa una petición y exige subjuntivo: respetes.",
        [],
        "Corrige la frase."
      ),
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
        [
          "Recuerda la regla: se negocia sobre intereses, no sobre posiciones. La posición es lo que cada uno exige («que deje de tocar»); el interés es lo que necesita de verdad (descansar). Dos posiciones pueden ser incompatibles; dos intereses casi nunca lo son.",
          "1) Escuchar a cada parte sin interrumpir. 2) Reformular sus necesidades: «Si le entiendo bien, usted necesita descansar por las mañanas». 3) Separar posiciones de intereses. 4) Proponer opciones en condicional, para que suenen a sugerencia y no a imposición: «¿Qué le parecería…?», «¿Y si + imperfecto de subjuntivo?». 5) Concretar el acuerdo: quién, qué, cuándo, con «Queda acordado que» + futuro.",
        ],
        [
          ["Si le entiendo bien, usted necesita descansar de 8 a 14 h.", "If I understand correctly, you need to rest from 8 to 2."],
          ["¿Qué le parecería tocar solo por las tardes?", "How would you feel about only playing in the afternoons?"],
        ],
        [
          mc(
            "¿Cuál es el interés de la vecina, más allá de su posición?",
            ["poder dormir por la mañana", "que el vecino se mude", "que venda la batería", "denunciarlo"],
            0,
            "La posición de la vecina es quejarse del ruido; su interés de fondo es poder dormir por la mañana. Que el vecino se mude, que venda la batería o denunciarlo son posiciones o medidas, no la necesidad real."
          ),
        ]
      ),
    ],
    [
      fb("Reformula.", "Si le ___ bien, usted solo puede ensayar en casa. (entender, yo)", "entiendo", "«Si le entiendo bien» (presente) reformula lo que dice el otro para comprobarlo."),
      { ...fb("Propón.", "¿Qué le ___ ensayar solo de 17 a 20 h? (parecer, condicional)", "parecería", "El condicional «¿Qué le parecería…?» suaviza la propuesta del mediador."), altAnswers: ["parece"] },
      fb("Concreta.", "Queda acordado que el señor Ruiz ___ solo por las tardes. (tocar, futuro)", "tocará", "El futuro (tocará) fija con claridad lo que se ha acordado para después."),
      mc(
        "¿Qué opción es un término medio?",
        ["Tocar por las tardes y colocar paneles aislantes.", "Prohibir la batería.", "Tocar cuando quiera.", "Que la vecina se mude."],
        0,
        "Un término medio exige que ambas partes cedan algo: tocar solo por las tardes y aislar el ruido. Prohibir la batería, tocar cuando quiera o que la vecina se mude dan la razón a una sola parte."
      ),
      ms(
        "¿Qué hace un buen mediador?",
        ["escucha a ambas partes", "reformula necesidades", "propone opciones", "decide quién tiene razón"],
        [0, 1, 2],
        "Un buen mediador escucha a ambas partes, reformula sus necesidades y propone opciones. No decide quién tiene razón: eso es propio de un juez, no de un mediador."
      ),
      toEs("What if we looked for a solution that works for both of you?", "¿Y si buscamos una solución que les sirva a los dos?", "Propuesta de mediación: «¿Y si + presente de indicativo (buscamos) o imperfecto de subjuntivo (buscáramos)…?» + «que les sirva a los dos» (con «buscáramos», «que les sirviera»).", ["¿Y si buscáramos una solución que les sirviera a ambos?", "¿Y si buscáramos una solución que les sirviera a los dos?", "¿Y si buscamos una solución que funcione para los dos?", "¿Y si buscamos una solución que os sirva a los dos?", "¿Y si buscamos una solución que os sirva a ambos?", "¿Y si buscáramos una solución que os sirviera a los dos?"]),
      wo("Queda acordado que el ensayo terminará cada día a las ocho.", "Para concretar el acuerdo se usa «Queda acordado que» + futuro de indicativo (terminará): fija qué se hará y cuándo.", "It is agreed that rehearsal will end at eight every day."),
      mc(
        "La vecina dice: «Ese hombre es un egoísta y no piensa en nadie». ¿Qué responde el mediador?",
        ["Si la entiendo bien, lo que usted necesita es poder dormir por las mañanas.", "Tiene razón, es un egoísta.", "No diga eso, que él también tiene derecho a tocar.", "Bueno, cálmese, que no es para tanto."],
        0,
        "El mediador reformula la queja en términos de interés (poder dormir), sin repetir la etiqueta. Darle la razón o quitársela toma partido, y «cálmese, que no es para tanto» invalida lo que siente."
      ),
      toEs(
        "¡Que deje de tocar la batería de una vez!",
        "Si le entiendo bien, usted necesita descansar.",
        "La posición («que deje de tocar») enfrenta a las partes; el interés (descansar) abre opciones: horarios, aislamiento, avisos. «Si le entiendo bien» comprueba la interpretación sin imponerla.",
        ["Si la entiendo bien, usted necesita descansar.", "Si le entiendo bien, usted necesita poder descansar.", "Si la entiendo bien, usted necesita poder descansar.", "Si le entiendo bien, usted necesita dormir.", "Si la entiendo bien, usted necesita dormir."],
        "Reformula la posición como interés con «Si le entiendo bien, usted necesita…»."
      ),
      toEs(
        "Instale paneles aislantes en la habitación.",
        "¿Qué le parecería instalar paneles aislantes en la habitación?",
        "«¿Qué le parecería + infinitivo?» convierte la imposición en una opción que la otra parte puede aceptar: el condicional la suaviza.",
        [],
        "Cambia la orden por una propuesta en condicional con «¿Qué le parecería…?»."
      ),
      toEs(
        "¿Qué le parecería que ensaya solo de cinco a ocho?",
        "¿Qué le parecería que ensayara solo de cinco a ocho?",
        "Con «parecer que» + otro sujeto, la propuesta valorativa va en subjuntivo; como el verbo principal está en condicional (parecería), el subjuntivo va en imperfecto: ensayara (o ensayase).",
        ["¿Qué le parecería que ensayase solo de cinco a ocho?"],
        "Corrige la frase."
      ),
      toEs(
        "¿Y si pondríamos un horario de ensayo?",
        "¿Y si pusiéramos un horario de ensayo?",
        "Tras «si» condicional nunca va el condicional. La propuesta «¿Y si…?» lleva imperfecto de subjuntivo (pusiéramos) o, más directo, presente de indicativo (ponemos).",
        ["¿Y si ponemos un horario de ensayo?", "¿Y si pusiésemos un horario de ensayo?"],
        "Corrige la frase."
      ),
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
        [
          "Sincera: asumir («Me equivoqué»), nombrar el daño («Sé que te hice sentir…»), reparar («¿Qué puedo hacer para arreglarlo?»), comprometerse («No volverá a ocurrir»). Falsa: trasladar la culpa («Siento que te hayas ofendido», «Si te has sentido mal, lo siento»), justificarse («Lo siento, pero es que tú…»).",
          "La diferencia está en la gramática. «Siento + haber + participio» tiene el mismo sujeto que «siento»: yo lamento lo que yo hice (siento haberte ofendido). «Siento que + subjuntivo» cambia de sujeto: lamento lo que te pasó a ti (siento que te hayas ofendido), y mi acto desaparece. Los pronombres van pegados a «haber»: haberte, habértelo, haberle.",
        ],
        [
          ["Siento haberte gritado; no estuvo bien.", "I'm sorry I shouted at you; it wasn't right."],
          ["✗ Siento que te lo hayas tomado así.", "✗ I'm sorry you took it that way."],
        ],
        [
          mc(
            "¿Cuál asume la responsabilidad?",
            ["Siento haberte hablado así; fue injusto.", "Siento que te hayas molestado.", "Si te ofendí, perdona, pero…", "Lo siento, pero tú empezaste."],
            0,
            "«Siento + haber + participio» asume el acto propio y lo valora («fue injusto»). «Siento que te hayas molestado» se centra en la reacción del otro, «Si te ofendí…, pero» la condiciona y «tú empezaste» traslada la culpa."
          ),
        ]
      ),
    ],
    [
      fb("Asume.", "Siento ___ olvidado tu cumpleaños. (haber)", "haber", "«Sentir + haber + participio» (infinitivo compuesto) asume la responsabilidad de algo ya hecho."),
      fb("Nombra el daño.", "Sé que te ___ sentir fuera de lugar. (hacer, pretérito)", "hice", "Nombrar el daño concreto («Sé que te hice sentir…») hace creíble la disculpa; indefinido de hacer: hice."),
      fb("Repara.", "¿Qué puedo hacer para ___? (reparar, coloquial)", "arreglarlo", "Ofrecer reparación: «¿Qué puedo hacer para arreglarlo?» (arreglar + lo)."),
      mc(
        "«Lo siento, pero es que tú también…» es una disculpa…",
        ["falsa: se justifica y traslada la culpa", "sincera", "muy formal", "reparadora"],
        0,
        "El «pero es que tú también…» justifica al que se disculpa y traslada la culpa: es una disculpa falsa. No es sincera ni reparadora, y tampoco especialmente formal."
      ),
      mc(
        "¿Qué diferencia hay entre «Siento que te hayas ofendido» y «Siento haberte ofendido»?",
        ["La primera se centra en la reacción del otro; la segunda asume el acto propio.", "Son idénticas.", "La primera es más sincera.", "La segunda es incorrecta."],
        0,
        "«Siento que te hayas ofendido» se centra en la reacción del otro; «Siento haberte ofendido» asume el acto propio. No son idénticas, la primera no es más sincera y la segunda es perfectamente correcta."
      ),
      toEs("I'm sorry I didn't tell you in time.", "Siento no habértelo dicho a tiempo.", "Disculpa sincera: «Siento / Lamento no haber + participio» con los pronombres enclíticos (habértelo).", ["Siento no habértelo contado a tiempo.", "Lamento no habértelo dicho a tiempo."]),
      wo("Me equivoqué y te pido perdón; no volverá a ocurrir.", "Disculpa completa: asumir (me equivoqué), pedir perdón (te pido perdón) y comprometerse («volver a + infinitivo» en futuro: no volverá a ocurrir).", "I was wrong and I apologize; it won't happen again."),
      toEs(
        "Siento que te hayas sentido ofendido.",
        "Siento haberte ofendido.",
        "Con «Siento que te hayas sentido…» el sujeto del daño eres tú; con «Siento haberte ofendido» el sujeto es quien se disculpa: asume el acto. El pronombre va pegado a «haber».",
        ["Siento haberte ofendido de verdad.", "Lamento haberte ofendido."],
        "Transforma la falsa disculpa en una sincera con «Siento + haber + participio»."
      ),
      toEs(
        "Siento haberte hecho esperar.",
        "Siento haberle hecho esperar.",
        "Con usted, el pronombre pasa a «le» (o «lo / la» como complemento directo de «hacer esperar»), y sigue unido al infinitivo «haber».",
        ["Siento haberlo hecho esperar.", "Siento haberla hecho esperar.", "Lamento haberle hecho esperar."],
        "Cambia la disculpa a la forma de usted."
      ),
      toEs(
        "Siento te haber interrumpido en la reunión.",
        "Siento haberte interrumpido en la reunión.",
        "Con el infinitivo compuesto, el pronombre átono va detrás de «haber», unido a él: haberte interrumpido. Delante solo puede ir con un verbo conjugado (te interrumpí).",
        ["Siento haberte interrumpido durante la reunión."],
        "Corrige la frase."
      ),
      toEs(
        "Te pido perdón; no volverá pasar.",
        "Te pido perdón; no volverá a pasar.",
        "El compromiso usa la perífrasis «volver a + infinitivo» (repetirse algo): no volverá a pasar. Sin «a», la perífrasis no existe.",
        ["Te pido perdón; no volverá a ocurrir."],
        "Corrige la frase."
      ),
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
        [
          "Recuerda la regla: la mediadora no decide quién tiene razón; pone normas, reformula lo que cada uno siente («Si te entiendo bien, lo que te duele es…») y busca el interés común antes de pedir propuestas. Al leer, fíjate en qué técnica hay detrás de cada frase.",
          "Mediadora: Gracias a los dos por venir. Primero, cada uno contará cómo lo vive, sin interrupciones. — Ana: Siento que mi trabajo no se reconoce. — Mediadora: Si te entiendo bien, lo que te duele es no ver tu nombre en el informe. — Pablo: Yo no lo hice con mala intención; simplemente no pensé en ello. — Mediadora: Entonces, los dos queréis un reparto justo del reconocimiento. ¿Qué proponéis?",
        ],
        [
          ["Cada uno contará cómo lo vive, sin interrupciones.", "Each of you will say how you see it, without interruptions."],
          ["Los dos queréis un reparto justo.", "You both want a fair distribution."],
        ],
        [
          mc(
            "¿Qué hace la mediadora al principio?",
            ["establece reglas: hablar sin interrupciones", "da la razón a Ana", "sanciona a Pablo", "termina la sesión"],
            0,
            "La mediadora empieza estableciendo normas: hablar sin interrupciones. No da la razón a nadie, no sanciona a Pablo y, evidentemente, no termina la sesión al principio."
          ),
        ]
      ),
    ],
    [
      mc(
        "«Si te entiendo bien, lo que te duele es…» es una técnica de…",
        ["reformulación", "acusación", "evasión", "interrupción"],
        0,
        "«Si te entiendo bien, lo que te duele es…» es una reformulación que comprueba lo que siente el otro. No acusa, no evade el tema ni interrumpe."
      ),
      mc(
        "«Los dos queréis un reparto justo» busca…",
        ["un interés común", "culpar a Pablo", "cerrar el debate", "cambiar de tema"],
        0,
        "«Los dos queréis un reparto justo» busca un interés común, un terreno compartido. No culpa a Pablo, no cierra el debate ni cambia de tema."
      ),
      mc(
        "«¿Qué proponéis?» traslada…",
        ["la búsqueda de soluciones a las partes", "la culpa a Ana", "la decisión a la empresa", "el problema a otro día"],
        0,
        "«¿Qué proponéis?» traslada a las partes la búsqueda de soluciones. No culpa a Ana, no deja la decisión a la empresa ni aplaza el problema."
      ),
      fb("Completa según el texto.", "Siento que mi trabajo no se ___. (reconocer)", "reconoce", "«Sentir que» con valor de percibir (no de lamentar) lleva indicativo: se reconoce."),
      fb("Completa según el texto.", "No lo hice con mala ___.", "intención", "«Con mala intención» = queriendo hacer daño; «No lo hice con mala intención» es una disculpa habitual."),
      ms(
        "¿Qué técnicas de mediación aparecen?",
        ["establecer normas", "reformular", "identificar el interés común", "imponer una sanción"],
        [0, 1, 2],
        "Aparecen el establecimiento de normas, la reformulación y la identificación del interés común. Imponer una sanción no forma parte de la mediación y no ocurre en el texto."
      ),
      wo("Si te entiendo bien, lo que te preocupa es no sentirte valorada.", "Reformulación: «Si te entiendo bien» comprueba tu interpretación y «lo que te preocupa es + infinitivo» resume la necesidad del otro sin juzgarla.", "If I understand you correctly, what worries you is not feeling valued."),
      toEs(
        "Si te entiendo bien, lo que te duele es no ver tu nombre en el informe.",
        "Si le entiendo bien, lo que le duele es no ver su nombre en el informe.",
        "Con usted cambian los dos pronombres (te → le) y el posesivo (tu → su); la estructura de la reformulación se mantiene.",
        ["Si la entiendo bien, lo que le duele es no ver su nombre en el informe."],
        "Cambia la reformulación de «tú» a «usted»."
      ),
      toEs(
        "Los dos queréis un reparto justo. ¿Qué proponéis?",
        "Los dos quieren un reparto justo. ¿Qué proponen?",
        "En gran parte de América y en Canarias, «ustedes» sustituye a «vosotros» también entre compañeros: los verbos pasan a la tercera persona del plural (quieren, proponen).",
        [],
        "Cambia «vosotros» por «ustedes»."
      ),
      toEs(
        "Si te entenderé bien, lo que te preocupa es el plazo.",
        "Si te entiendo bien, lo que te preocupa es el plazo.",
        "Tras «si» condicional no va el futuro: «si te entiendo bien» (presente). Es la fórmula fija de la reformulación.",
        [],
        "Corrige la frase."
      ),
      toEs(
        "Propongo que ponemos los dos nombres en el informe.",
        "Propongo que pongamos los dos nombres en el informe.",
        "«Proponer que» introduce una propuesta para otra persona (o para nosotros) y exige subjuntivo: pongamos.",
        [],
        "Corrige la frase."
      ),
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
        [
          "Conflicto: desavenencia (desacuerdo), rencilla (disputa menor y repetida), roce (fricción), malentendido. Emociones: rencor, resentimiento, agravio (ofensa). Resolución: mediar, zanjar (cerrar definitivamente), limar asperezas (suavizar diferencias), hacer las paces, tender la mano, llegar a un entendimiento, tregua.",
          "Muchas palabras se entienden por su forma: «des-» niega (desavenencia = no avenirse, no ponerse de acuerdo), «mal-» indica que algo salió mal (malentendido = entendido mal) y varias expresiones son imágenes físicas (un roce, limar asperezas, tender la mano). Las locuciones son fijas y no admiten cambios: hacer LAS PACES (en plural), guardar rencor (sin artículo), tender LA mano.",
        ],
        [
          ["Decidieron zanjar la discusión y seguir adelante.", "They decided to settle the argument and move on."],
          ["Una cena sirvió para limar asperezas.", "A dinner helped smooth things over."],
        ],
        [
          mc(
            "«Limar asperezas» significa…",
            ["suavizar diferencias", "pulir madera", "discutir más", "romper la relación"],
            0,
            "«Limar asperezas» es suavizar diferencias y reducir tensiones. Aunque «limar» se aplique a la madera, aquí no es literal, y no significa discutir más ni romper la relación."
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
        "«Zanjar» cierra un asunto de forma definitiva; una «rencilla» es una riña menor que se repite; un «agravio» es una ofensa; una «tregua» es una pausa temporal, no el fin del conflicto."
      ),
      fb("Completa.", "Todo fue un ___: nadie quiso ofender a nadie.", "malentendido", "Un malentendido es un error de interpretación, sin intención de ofender."),
      fb("Completa.", "Tras años sin hablarse, por fin hicieron las ___.", "paces", "«Hacer las paces» es reconciliarse (plural fijo: las paces)."),
      fb("Completa.", "Todavía le guarda ___ por aquella traición.", "rencor", "«Guardar rencor» a alguien es mantener el resentimiento por una ofensa."),
      ms(
        "¿Qué expresiones indican reconciliación?",
        ["tender la mano", "hacer las paces", "limar asperezas", "guardar rencor"],
        [0, 1, 2],
        "«Tender la mano», «hacer las paces» y «limar asperezas» indican reconciliación. «Guardar rencor» es lo contrario: mantener el resentimiento."
      ),
      toEs("They decided to bury the hatchet.", "Decidieron hacer las paces.", "«Bury the hatchet» equivale a «hacer las paces»; «enterrar el hacha de guerra» también existe en español.", ["Decidieron enterrar el hacha de guerra.", "Decidieron hacer las paces de una vez."]),
      wo("Una conversación sincera bastó para limar asperezas.", "«Bastar para + infinitivo»: el sujeto (Una conversación sincera) va delante del verbo, y la locución fija «limar asperezas» cierra la frase.", "A sincere conversation was enough to smooth things over."),
      toEs(
        "Con esa reunión resolvieron definitivamente el asunto.",
        "Con esa reunión zanjaron el asunto.",
        "«Zanjar» significa resolver un asunto de forma definitiva, cerrarlo: incluye ya la idea de «definitivamente».",
        [],
        "Sustituye «resolvieron definitivamente» por el verbo de la lección."
      ),
      toEs(
        "Al final se reconciliaron.",
        "Al final hicieron las paces.",
        "«Hacer las paces» equivale a reconciliarse; la locución lleva siempre el artículo y el plural: las paces.",
        [],
        "Cambia «se reconciliaron» por la locución con «paces»."
      ),
      toEs(
        "Hicieron la paz después de diez años sin hablarse.",
        "Hicieron las paces después de diez años sin hablarse.",
        "Entre personas, la locución es «hacer las paces», en plural. «Hacer la paz» se dice de países o bandos que acaban una guerra.",
        [],
        "Corrige la frase."
      ),
      toEs(
        "Le guarda rencilla desde aquella discusión.",
        "Le guarda rencor desde aquella discusión.",
        "Lo que se «guarda» es el rencor, el resentimiento. Una rencilla es una riña menor: se tiene o se arrastra, pero no se guarda.",
        [],
        "Corrige la frase."
      ),
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
        [
          "Recuerda la regla: la mediación habla de lo que no es un hecho (lo que se valora, se propone, se desea o se pone como condición), y por eso vive en subjuntivo. Valorar emociones: «Es normal que te sientas así». Proponer: «¿Y si probáramos…?», «Propongo que cada uno…». Condicionar: «Siempre que los dos estéis de acuerdo…». Deseo de futuro: «Ojalá podamos…».",
          "La excepción útil: disculparse por lo que uno mismo hizo lleva infinitivo compuesto, porque no cambia el sujeto: «Siento haber…».",
        ],
        [
          ["Propongo que cada uno exponga su punto de vista.", "I suggest each of you set out your point of view."],
          ["Ojalá podamos dejar esto atrás.", "I hope we can put this behind us."],
        ],
        [
          mc(
            "«Propongo que cada uno ___ su versión.»",
            ["cuente", "cuenta", "contará", "contar"],
            0,
            "«Proponer que» con cambio de sujeto exige subjuntivo: cuente. «Cuenta» y «contará» son indicativo, y «contar» solo iría sin «que» y sin cambio de sujeto."
          ),
        ]
      ),
    ],
    [
      fb("Valoración.", "Es normal que ___ enfadados. (estar, vosotros)", "estéis", "Las valoraciones como «Es normal que» exigen subjuntivo: estéis."),
      { ...fb("Hipótesis.", "¿Y si ___ a hablar por turnos? (probar, nosotros)", "probáramos", "«¿Y si + imperfecto de subjuntivo?» (probáramos) o, más directo, «¿Y si + presente de indicativo?» (probamos)."), altAnswers: ["probásemos", "probamos"] },
      fb("Deseo.", "Ojalá ___ llegar a un acuerdo hoy. (poder, nosotros)", "podamos", "«Ojalá» + presente de subjuntivo expresa un deseo posible: podamos."),
      fb("Condición.", "Siempre que los dos ___ de acuerdo, lo firmamos. (estar, vosotros)", "estéis", "«Siempre que» con valor condicional exige subjuntivo: estéis."),
      mc(
        "«Siento no ___ antes.» (escucharte)",
        ["haberte escuchado", "que te escuché", "escucharte habido", "te haber escuchado"],
        0,
        "«Sentir + no + infinitivo compuesto»: siento no haberte escuchado (pronombre enclítico en «haber»). «Que te escuché» cambia la estructura y el modo, y «escucharte habido» o «te haber escuchado» son agramaticales."
      ),
      toEs("I hope you two can work together again.", "Ojalá podáis volver a trabajar juntos.", "«Ojalá» o «Espero que» + subjuntivo para un deseo sobre el futuro; «volver a + infinitivo» expresa la repetición.", ["Ojalá puedan volver a trabajar juntos.", "Espero que podáis volver a trabajar juntos.", "Espero que puedan volver a trabajar juntos.", "Ojalá los dos podáis volver a trabajar juntos."]),
      wo("Es normal que os sintáis así después de tanta tensión.", "Valoración: «Es normal que» + subjuntivo (os sintáis); con vosotros, el pronombre «os» va delante del verbo conjugado.", "It's normal for you to feel this way after so much tension."),
      toEs(
        "Hagamos una pausa de diez minutos.",
        "¿Y si hiciéramos una pausa de diez minutos?",
        "«¿Y si + imperfecto de subjuntivo?» presenta la propuesta como una posibilidad que los demás pueden aceptar o no: más suave que el imperativo «hagamos».",
        ["¿Y si hiciésemos una pausa de diez minutos?", "¿Y si hacemos una pausa de diez minutos?"],
        "Transforma la propuesta en una hipótesis con «¿Y si…?» + imperfecto de subjuntivo."
      ),
      toEs(
        "Si los dos cumplís el horario, no habrá más quejas.",
        "Siempre que los dos cumpláis el horario, no habrá más quejas.",
        "«Siempre que» con valor condicional (= con tal de que) exige subjuntivo: cumpláis. Con «si», en cambio, el presente va en indicativo.",
        [],
        "Cambia «si» por «siempre que» y ajusta el modo del verbo."
      ),
      toEs(
        "Es lógico que tenéis dudas.",
        "Es lógico que tengáis dudas.",
        "Las valoraciones («es lógico / normal / comprensible que») exigen subjuntivo: tengáis.",
        [],
        "Corrige la frase."
      ),
      toEs(
        "Ojalá podemos olvidar esto pronto.",
        "Ojalá podamos olvidar esto pronto.",
        "«Ojalá» siempre va con subjuntivo: presente (podamos) para un deseo posible sobre el futuro.",
        [],
        "Corrige la frase."
      ),
    ]
  ),
  L(
    "historical-narrative-1",
    "c2r-history-preterite-imperfect",
    "Contraste: un mismo hecho en cuatro géneros",
    "La muerte de un rey contada en una cronología, un manual, una crónica periodística y una novela: qué tiempo verbal elige cada género y por qué.",
    "8 min",
    [
      sec(
        "Cada género, su tiempo",
        [
          "Cronología: presente de cronología («1598: muere Felipe II en El Escorial»). Manual o ensayo: indefinido neutro («Felipe II murió en El Escorial en 1598»). Crónica o divulgación con intención dramática: imperfecto narrativo («El 13 de septiembre de 1598 moría en El Escorial Felipe II») o presente histórico («…muere Felipe II»). Novela histórica: indefinido e imperfecto de fondo, a menudo con estilo indirecto libre («El rey miraba el altar desde su lecho. Ya no vería otro verano»).",
          "El hecho es el mismo; cambia la distancia entre el narrador y el lector. Elegir el tiempo según el género es una destreza de nivel C2.",
        ],
        [
          ["1598: muere Felipe II en El Escorial.", "1598: Philip II dies at El Escorial."],
          ["El 13 de septiembre de 1598 moría en El Escorial Felipe II.", "On 13 September 1598 Philip II died at El Escorial."],
          ["El rey miraba el altar desde su lecho. Ya no vería otro verano.", "The king gazed at the altar from his bed. He would not see another summer."],
        ],
        [
          mc(
            "¿Qué versión es propia de un manual universitario?",
            ["Felipe II murió en El Escorial en 1598.", "1598: muere Felipe II.", "El rey miraba el altar desde su lecho. Ya no vería otro verano.", "¡Y aquel 13 de septiembre moría el rey!"],
            0,
            "El manual prefiere el indefinido neutro. El presente de cronología es propio de tablas, el estilo indirecto libre de la novela y la exclamación con imperfecto narrativo de una crónica dramatizada.",
          ),
        ]
      ),
    ],
    [
      mt(
        "Relaciona cada versión con su género.",
        [
          ["1598: muere Felipe II.", "cronología"],
          ["Felipe II murió en 1598.", "manual"],
          ["Aquel 13 de septiembre moría el rey.", "crónica divulgativa"],
          ["Ya no vería otro verano.", "novela"],
        ],
        "El tiempo verbal señala la distancia del narrador respecto al hecho.",
      ),
      { ...fb("Reescribe la frase del manual como entrada de cronología.", "Felipe II murió en 1598. → 1598: ___ Felipe II.", "muere", "La cronología usa el presente, casi nominal, para enunciar hechos fechados."), en: "1598: Philip II [dies]." },
      { ...fb("Reescribe con imperfecto narrativo para una crónica.", "El 6 de diciembre de 1978 los españoles ___ la Constitución en referéndum. (aprobar)", "aprobaban", "Imperfecto narrativo: un hecho puntual con fecha, contado en imperfecto para situar al lector en el momento. «Aprobaron» también sería correcto, pero más neutro, propio de un manual."), en: "On 6 December 1978 the Spanish people [approved] the Constitution in a referendum." },
      mc(
        "«El rey miraba el altar desde su lecho. Ya no vería otro verano.» ¿Qué expresa «vería»?",
        ["el pensamiento del personaje en estilo indirecto libre", "una hipótesis irreal", "una cortesía", "una acción habitual"],
        0,
        "El condicional recoge, sin verbo introductor, lo que piensa el rey (o lo que el narrador sabe que le espera): estilo indirecto libre y futuro del pasado. No es una condición irreal, ni cortesía, ni hábito.",
      ),
      mc(
        "¿En qué género resultaría extraño el presente histórico?",
        ["en un acta notarial que da fe de hechos pasados", "en un documental", "en una biografía divulgativa", "en una cronología escolar"],
        0,
        "El acta notarial exige precisión temporal y usa el pasado (o fórmulas fijas). El presente histórico es natural en documentales, biografías y cronologías.",
      ),
      toEs("On 20 July 1969 two astronauts set foot on the Moon. (narrative imperfect)", "El 20 de julio de 1969 dos astronautas pisaban la Luna.", "Imperfecto narrativo con fecha precisa. El indefinido «pisaron» también sería correcto, pero más neutro; aquí se pide el imperfecto narrativo.", ["El 20 de julio de 1969, dos astronautas pisaban la Luna."]),
      wo("En 1492 los Reyes Católicos entraban en Granada.", "Imperfecto narrativo con fecha, típico de la divulgación histórica.", "In 1492 the Catholic Monarchs entered Granada."),
      toEs(
        "1969: el hombre llega a la Luna.",
        "El hombre llegó a la Luna en 1969.",
        "El manual narra con distancia: indefinido neutro y la fecha integrada en la frase. El presente de cronología es casi un titular.",
        ["En 1969 el hombre llegó a la Luna.", "En 1969, el hombre llegó a la Luna."],
        "Cambia la entrada de cronología por la versión de un manual (indefinido neutro)."
      ),
      toEs(
        "Cervantes publicó la primera parte del Quijote en 1605.",
        "1605: Cervantes publica la primera parte del Quijote.",
        "La cronología pone la fecha delante y el verbo en presente, como en una tabla: «1605: publica…».",
        ["1605: publica Cervantes la primera parte del Quijote."],
        "Reescribe la frase del manual como entrada de cronología."
      ),
      toEs(
        "La reina contemplaba el mar desde la torre. Nunca volverá a Castilla.",
        "La reina contemplaba el mar desde la torre. Nunca volvería a Castilla.",
        "En una novela narrada en pasado, lo que todavía no ha ocurrido desde el punto de vista del personaje va en condicional (futuro del pasado): «volvería». El futuro «volverá» rompe la perspectiva del relato.",
        [],
        "Corrige la frase."
      ),
      toEs(
        "Tabla cronológica: «1588: fue derrotada la Armada Invencible».",
        "Tabla cronológica: «1588: es derrotada la Armada Invencible».",
        "En una cronología el verbo va en presente (presente de cronología), también en pasiva: «es derrotada». El indefinido es propio del manual, no de la tabla.",
        ["Tabla cronológica: «1588: derrotan a la Armada Invencible».", "Tabla cronológica: «1588: derrota de la Armada Invencible»."],
        "Corrige la frase."
      ),
    ]
  ),
  L(
    "historical-narrative-2",
    "c2r-history-error-hunt-tenses",
    "Caza de errores: tiempos y registro en un texto historiográfico",
    "Un párrafo de un trabajo universitario con errores de C2: pretérito anterior mal usado, presente histórico incoherente, condicional de rumor y «efeméride» mal empleada.",
    "9 min",
    [
      sec(
        "La regla: cada tiempo tiene un trabajo, y el registro exige precisión",
        [
          "Recuerda la regla: en un texto historiográfico cada tiempo cumple una función fija. El indefinido cuenta los hechos, el pluscuamperfecto lo anterior a ellos y el presente histórico, si se elige, se convierte en el eje de todo el hilo (lo posterior va en futuro). Y como el texto académico responde de lo que afirma, la duda se marca con léxico («al parecer», «podría haber»), no con el condicional de rumor de la prensa.",
          "Errores típicos: 1) pretérito anterior sin inmediatez: ✗ «Cuando hubo vuelto, el país estaba cambiado» (→ «volvió» o «había vuelto»; «hubo vuelto» solo cabe tras «apenas», «en cuanto», «nada más»); 2) presente histórico que se rompe: ✗ «En 1812 se aprueba la Constitución y dos años después el rey la anuló»; 3) condicional de rumor: ✗ «Según el cronista, el virrey habría ordenado la ejecución»; 4) «efeméride» por «acontecimiento efímero»; 5) «el que fuese presidente» con valor de pasado (solo vale «el que fuera»: la forma en -ra conserva el antiguo valor de pluscuamperfecto de indicativo, la forma en -se no).",
        ],
        [
          ["Cuando volvió del exilio, el país estaba cambiado. (indefinido: no hay inmediatez que justifique «hubo vuelto»)", "When he returned from exile, the country had changed."],
          ["En 1812 se aprueba la Constitución y dos años después el rey la anulará. (eje presente → posterioridad en futuro)", "In 1812 the Constitution is passed, and two years later the king will annul it."],
          ["Al parecer, el virrey ordenó la ejecución. (duda con léxico, no con condicional)", "The viceroy apparently ordered the execution."],
        ],
        [
          mc(
            "Corrige para un artículo académico: «Según el cronista, el virrey habría ordenado la ejecución».",
            ["Según el cronista, el virrey ordenó la ejecución.", "Según el cronista, el virrey ordenaría la ejecución.", "Según el cronista, el virrey hubo ordenado la ejecución.", "No hay error."],
            0,
            "En un texto académico se evita el condicional de rumor: se atribuye con «según» y se usa el indicativo (o «podría haber ordenado» si se quiere marcar duda). «Ordenaría» es otro condicional de rumor y «hubo ordenado» es un pretérito anterior sin conector de inmediatez.",
          ),
          toEs(
            "En 1492 Colón llega a América y, catorce años después, murió en Valladolid.",
            "En 1492 Colón llega a América y, catorce años después, morirá en Valladolid.",
            "El hilo arranca en presente histórico (llega), así que lo posterior va en futuro de posterioridad (morirá) o sigue en presente (muere). El indefinido «murió» devuelve el relato al pasado a mitad de frase. La otra solución coherente es pasarlo todo al pasado: «llegó… murió».",
            ["En 1492 Colón llega a América y, catorce años después, muere en Valladolid.", "En 1492 Colón llegó a América y, catorce años después, murió en Valladolid."],
            "Corrige la frase: mantén la coherencia del presente histórico."
          ),
        ]
      ),
    ],
    [
      mc(
        "Corrige: «Cuando hubo vuelto del exilio, el país estaba irreconocible».",
        ["Cuando volvió del exilio, el país estaba irreconocible.", "Cuando haya vuelto del exilio, el país estaba irreconocible.", "Cuando volvía del exilio, el país estuvo irreconocible.", "No hay error."],
        0,
        "Con «cuando» y sin idea de inmediatez, el pretérito anterior resulta forzado: basta el indefinido. «Haya vuelto» es perfecto de subjuntivo, incompatible con «estaba», y la tercera opción invierte las funciones de fondo y acción.",
      ),
      { ...fb("Mantén la coherencia del presente histórico.", "En 1873 se proclama la Primera República y, menos de dos años después, ___ la monarquía. (volver)", "volverá", "Con eje en presente histórico (se proclama), un hecho posterior va en futuro de posterioridad (volverá) o sigue en presente (vuelve). «Volvió» rompería el eje sin cambiar el resto del hilo."), altAnswers: ["vuelve"], en: "In 1873 the First Republic is proclaimed and, less than two years later, the monarchy [will return]." },
      mc(
        "¿Qué frase usa bien «efeméride»?",
        ["El 12 de octubre es una efeméride que se conmemora en varios países.", "Su gobierno fue una efeméride: duró tres meses.", "Aquel éxito efeméride se olvidó pronto.", "La efeméride del ministro fue breve."],
        0,
        "«Efeméride» es el acontecimiento que se recuerda en su aniversario. No significa «efímero»: las otras frases lo usan con ese sentido erróneo.",
      ),
      toEs(
        "Su mandato fue una efeméride: apenas duró tres meses.",
        "Su mandato fue efímero: apenas duró tres meses.",
        "«Efeméride» es un aniversario o el hecho que se conmemora en él; lo que dura poco es «efímero». Confundirlos por el parecido es el error clásico.",
        ["Su mandato fue breve: apenas duró tres meses.", "Su mandato fue fugaz: apenas duró tres meses."],
        "Corrige la frase."
      ),
      { ...fb("Completa con la forma en -ra con valor de pluscuamperfecto.", "Murió en el palacio que ___ residencia de los virreyes. (ser, valor de «había sido»)", "fuera", "Solo la forma en -ra conserva el valor de pluscuamperfecto de indicativo en el registro culto: «que fuera residencia». «Fuese» no tiene este valor."), en: "He died in the palace that [had been] the viceroys' residence.", altAnswers: ["había sido", "fue"] },
      toEs(
        "Hoy ha muerto en Lima quien fuese presidente del país durante la crisis.",
        "Hoy ha muerto en Lima quien fuera presidente del país durante la crisis.",
        "Con valor de pasado de indicativo («quien había sido»), solo sirve la forma en -ra, heredera del pluscuamperfecto latino. La forma en -se solo es imperfecto de subjuntivo. En un registro neutro, «quien fue» o «quien había sido» son igual de correctos.",
        ["Hoy ha muerto en Lima quien fue presidente del país durante la crisis.", "Hoy ha muerto en Lima quien había sido presidente del país durante la crisis."],
        "Corrige la frase."
      ),
      ms(
        "¿Qué frases son correctas en un texto académico?",
        ["Apenas hubo firmado el tratado, el rey partió hacia Lisboa.", "Según las actas, el concejo votó en contra.", "El general habría huido, según fuentes no confirmadas.", "En 1605 se publica el Quijote y en 1615 se publicará la segunda parte.", "En 1605 se publica el Quijote y en 1615 se publicaba la segunda parte."],
        [0, 1, 3],
        "El pretérito anterior tras «apenas» es correcto (aunque literario), la atribución con «según» es precisa y el presente histórico con futuro es coherente. El condicional de rumor se evita en textos cuidados, y la última frase rompe el eje con un imperfecto.",
      ),
      toEs(
        "Según algunos testigos, la reina habría firmado el decreto en secreto.",
        "Según algunos testigos, la reina firmó el decreto en secreto.",
        "El texto académico atribuye la información («según algunos testigos») y la da en indicativo. Si quieres conservar la duda, hazlo con léxico: «al parecer firmó», «podría haber firmado». El condicional de rumor es un rasgo de la prensa que la RAE y la Fundéu desaconsejan en textos cuidados.",
        ["Según algunos testigos, la reina podría haber firmado el decreto en secreto.", "Según algunos testigos, al parecer la reina firmó el decreto en secreto.", "Según algunos testigos, la reina firmó en secreto el decreto."],
        "Reescribe la frase para un artículo académico, sin condicional de rumor."
      ),
      toEs("Once he had returned from exile, he founded a newspaper. (modern style)", "Nada más volver del exilio, fundó un periódico.", "«Nada más + infinitivo» o «en cuanto volvió» sustituyen hoy al pretérito anterior («Apenas hubo vuelto…»).", ["En cuanto volvió del exilio, fundó un periódico.", "Tras volver del exilio, fundó un periódico.", "Una vez que volvió del exilio, fundó un periódico.", "Nada más regresar del exilio, fundó un periódico."]),
      wo("Según las actas, el concejo votó en contra de la reforma.", "Atribución precisa sin condicional de rumor: la fuente («según las actas») va delante y el hecho, en indicativo (votó).", "According to the minutes, the town council voted against the reform."),
    ]
  ),
  L(
    "historical-narrative-3",
    "c2r-history-pluperfect-depth",
    "Laboratorio de textos: profundidad temporal con el pluscuamperfecto",
    "Inserta antecedentes en un relato: lo que ya había ocurrido antes del momento principal.",
    "8 min",
    [
      sec(
        "Mirar hacia atrás desde el pasado",
        [
          "La regla: el relato histórico tiene un momento principal en indefinido («En 1936 estalló la guerra»). Todo lo que ya había ocurrido antes de ese momento va en pluscuamperfecto («La República había aprobado reformas que habían dividido al país»). ¿Por qué? Porque el indefinido coloca los hechos en orden sucesivo: si dices «aprobó reformas», el lector entiende que vinieron después o a la vez; «había aprobado» las sitúa detrás del momento principal y da profundidad al relato.",
          "Marcadores que lo acompañan: ya, antes, previamente, hasta entonces, para entonces. «Hacía + tiempo + que» va con imperfecto («Hacía diez años que no llovía»). El pretérito anterior (hubo + participio) expresa anterioridad inmediata tras «apenas», «en cuanto» o «nada más», y hoy es casi exclusivo de la lengua literaria: «Apenas hubo terminado el discurso, estalló el aplauso».",
        ],
        [
          ["Cuando estalló la guerra, el país ya había vivido años de tensión. (los años de tensión, antes del estallido)", "When the war broke out, the country had already lived through years of tension."],
          ["Hacía un siglo que la ciudad no sufría una inundación así. (hacía + tiempo + que + imperfecto)", "The city hadn't suffered a flood like that for a century."],
          ["Apenas hubo firmado el tratado, se retiró. (pretérito anterior: inmediatez, registro literario)", "No sooner had he signed the treaty than he withdrew."],
        ],
        [
          mc(
            "«Cuando llegaron los refuerzos, la ciudad ya ___.» (rendirse)",
            ["se había rendido", "se rindió", "se rendía", "se rendirá"],
            0,
            "Una acción anterior a otra pasada (llegaron) va en pluscuamperfecto: se había rendido. «Se rindió» la haría posterior o simultánea, «se rendía» la presentaría en curso y «se rendirá» es futuro."
          ),
          toEs(
            "Cuando el ejército entró en la capital, el gobierno huyó dos días antes.",
            "Cuando el ejército entró en la capital, el gobierno había huido dos días antes.",
            "«Dos días antes» sitúa la huida detrás del momento principal (entró): anterioridad respecto a un pasado = pluscuamperfecto. Con «huyó» los dos hechos quedan en el mismo plano y el marcador «antes» choca con el tiempo verbal.",
            [],
            "Corrige la frase."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "Hasta entonces, nadie ___ cuestionado la autoridad del rey. (haber)", "había", "«Hasta entonces» mira hacia atrás desde un punto del pasado: pluscuamperfecto (había cuestionado) para una situación anterior al momento de referencia."),
      fb("Completa.", "Hacía diez años que el país no ___ elecciones libres. (celebrar, imperfecto)", "celebraba", "«Hacía + tiempo + que» va con imperfecto: la situación seguía vigente en el momento pasado de referencia."),
      { ...fb("Completa (pretérito anterior).", "Apenas ___ terminado la batalla, comenzó el saqueo. (haber, pretérito anterior)", "hubo", "Pretérito anterior (hubo + participio) tras «apenas»: anterioridad inmediata, registro culto; hoy es habitual también «había terminado»."), altAnswers: ["había"] },
      toEs(
        "En 1914 estalló la guerra. Europa vivió cuatro décadas de paz armada.",
        "En 1914 estalló la guerra. Europa había vivido cuatro décadas de paz armada.",
        "El momento principal es 1914 (estalló). Las cuatro décadas de paz armada son el antecedente, así que van en pluscuamperfecto: «había vivido». En indefinido parecerían venir después de la guerra.",
        ["En 1914 estalló la guerra. Europa había vivido cuatro décadas de paz armada antes."],
        "Transforma la segunda frase en antecedente de la primera (pluscuamperfecto)."
      ),
      mc(
        "El pretérito anterior (hubo llegado) aparece sobre todo en…",
        ["textos literarios o muy formales", "conversaciones informales", "mensajes de texto", "el habla infantil"],
        0,
        "El pretérito anterior es de uso culto: aparece sobre todo en textos literarios o muy formales. En conversaciones, mensajes o el habla infantil se usa el indefinido o el pluscuamperfecto."
      ),
      ms(
        "¿Qué marcadores acompañan al pluscuamperfecto?",
        ["ya", "previamente", "hasta entonces", "mañana"],
        [0, 1, 2],
        "«Ya», «previamente» y «hasta entonces» suelen acompañar al pluscuamperfecto porque miran hacia atrás desde un punto del pasado. «Mañana» apunta al futuro, no a un pasado anterior."
      ),
      toEs(
        "Nada más acabar el discurso, estalló el aplauso.",
        "Apenas hubo acabado el discurso, estalló el aplauso.",
        "El pretérito anterior (hubo acabado) expresa anterioridad inmediata y pide un conector como «apenas», «en cuanto» o «no bien». Es la versión literaria de «nada más + infinitivo».",
        ["En cuanto hubo acabado el discurso, estalló el aplauso.", "No bien hubo acabado el discurso, estalló el aplauso.", "Apenas hubo terminado el discurso, estalló el aplauso."],
        "Reescribe la frase en registro literario, con pretérito anterior."
      ),
      toEs("By then, the king had already abdicated.", "Para entonces, el rey ya había abdicado.", "Pluscuamperfecto (ya había abdicado) con «para entonces» para una acción anterior al momento de referencia.", ["Para entonces el rey ya había abdicado.", "En aquel momento, el rey ya había abdicado."]),
      toEs("The rebels surrendered because they had run out of ammunition.", "Los rebeldes se rindieron porque se habían quedado sin munición.", "La causa ocurrió antes que la rendición: el efecto va en indefinido (se rindieron) y la causa anterior, en pluscuamperfecto (se habían quedado).", ["Los rebeldes se rindieron porque se les había acabado la munición.", "Los sublevados se rindieron porque se habían quedado sin munición.", "Los rebeldes se rindieron porque habían agotado la munición."]),
      wo("Cuando se firmó la paz, miles de personas ya habían abandonado el país.", "Profundidad temporal: el hecho principal va en indefinido (se firmó) y lo que ya había ocurrido antes, en pluscuamperfecto con «ya» (habían abandonado).", "When peace was signed, thousands had already left the country."),
    ]
  ),
  L(
    "historical-narrative-4",
    "c2r-history-historical-present",
    "Contraste: el presente histórico",
    "«En 1492 Colón llega a América»: el presente que acerca el pasado. Cuándo se usa y cómo mantener la coherencia.",
    "8 min",
    [
      sec(
        "Acercar el pasado",
        [
          "La regla: el presente histórico narra hechos pasados en presente para darles viveza, como si ocurrieran ante el lector: «En 1519 Cortés desembarca en Veracruz». Es frecuente en cronologías, documentales, divulgación y biografías; en un acta o un informe, que exigen precisión temporal, resultaría extraño.",
          "Por qué exige coherencia: al elegir el presente, ese presente se convierte en el «ahora» del relato y todo el sistema se reordena alrededor de él. Lo anterior va en pretérito perfecto o indefinido («que ha perdido a sus hombres») y lo posterior en futuro («llegará meses después»). Volver al indefinido a mitad del hilo («estalla… y huyó») descoloca al lector, que ya no sabe cuál es el eje.",
        ],
        [
          ["En 1605 se publica la primera parte del Quijote. (presente: el hecho, en primer plano)", "In 1605 the first part of Don Quixote is published."],
          ["Cervantes, que ha combatido en Lepanto, escribirá su obra maestra años después. (anterior → perfecto; posterior → futuro)", "Cervantes, who has fought at Lepanto, will write his masterpiece years later."],
        ],
        [
          mc(
            "Con presente histórico, un hecho posterior se expresa en…",
            ["futuro", "pluscuamperfecto", "imperfecto", "presente de subjuntivo"],
            0,
            "Si se narra en presente histórico, un hecho posterior se expresa en futuro (el futuro de posterioridad). El pluscuamperfecto y el imperfecto romperían la coherencia temporal, y el subjuntivo no expresa posterioridad."
          ),
          toEs(
            "En 1789 los parisinos toman la Bastilla y en 1793 ejecutaron al rey.",
            "En 1789 los parisinos toman la Bastilla y en 1793 ejecutarán al rey.",
            "El eje es el presente histórico (toman): lo posterior va en futuro (ejecutarán) o sigue en presente (ejecutan). «Ejecutaron» vuelve al pasado sin motivo y rompe el hilo.",
            ["En 1789 los parisinos toman la Bastilla y en 1793 ejecutan al rey.", "En 1789 los parisinos tomaron la Bastilla y en 1793 ejecutaron al rey."],
            "Corrige la frase."
          ),
        ]
      ),
    ],
    [
      fb("Presente histórico.", "En 1969 el ser humano ___ a la Luna. (llegar)", "llega", "El presente histórico (llega) narra hechos pasados con viveza, como si ocurrieran ahora."),
      fb("Posterioridad.", "Frida Kahlo, que sufre un grave accidente en 1925, ___ a pintar durante su convalecencia. (empezar, futuro)", "empezará", "En un relato en presente histórico, un hecho posterior al eje va en futuro: empezará."),
      fb("Anterioridad.", "Simón Bolívar, que ___ estudiado en Europa, regresa a Venezuela. (haber, presente)", "ha", "Con eje en presente, lo anterior va en pretérito perfecto (ha estudiado): es el «pasado» de ese presente narrativo."),
      toEs(
        "En 1936 estalló la guerra y el Gobierno se trasladó a Valencia.",
        "En 1936 estalla la guerra y el Gobierno se traslada a Valencia.",
        "Al pasar al presente histórico cambian todos los verbos del hilo, no solo el primero: estalla, se traslada. Dejar uno en indefinido crearía la incoherencia típica.",
        [],
        "Cambia el fragmento al presente histórico."
      ),
      mc(
        "¿Dónde es más frecuente el presente histórico?",
        ["cronologías y textos divulgativos", "contratos", "recetas", "cartas de reclamación"],
        0,
        "El presente histórico es frecuente en cronologías y textos divulgativos por su viveza narrativa. Los contratos, las recetas y las cartas de reclamación no narran hechos históricos."
      ),
      mc(
        "¿Qué fragmento es incoherente?",
        ["En 1810 estalla la revolución y el virrey huyó.", "En 1810 estalla la revolución y el virrey huye.", "En 1810 estalló la revolución y el virrey huyó.", "En 1810 estalla la revolución; el virrey huirá días después."],
        0,
        "Mezclar presente histórico (estalla) e indefinido (huyó) sin motivo es incoherente. Todo en presente, todo en indefinido o presente + futuro de posterioridad son combinaciones coherentes."
      ),
      toEs(
        "Marie Curie llega a París en 1891; doce años después recibe el Nobel.",
        "Marie Curie llega a París en 1891; doce años después recibirá el Nobel.",
        "«Doce años después» señala un hecho posterior al eje (llega). En presente histórico, la posterioridad se marca con futuro: «recibirá». El presente también es posible, pero el futuro subraya la perspectiva del narrador que conoce el desenlace.",
        ["Marie Curie llega a París en 1891; doce años más tarde recibirá el Nobel.", "Marie Curie llega a París en 1891; doce años después recibirá el Premio Nobel."],
        "Cambia el segundo verbo a futuro de posterioridad."
      ),
      toEs("In 1936 the war breaks out. (historical present)", "En 1936 estalla la guerra.", "Presente histórico: «estalla / comienza» para narrar un hecho pasado con viveza.", ["En 1936 comienza la guerra."]),
      wo("En 1914 un atentado en Sarajevo desencadena la Primera Guerra Mundial.", "Presente histórico de divulgación: la fecha abre la frase y el verbo en presente (desencadena) pone el hecho ante los ojos del lector.", "In 1914 an assassination in Sarajevo triggers the First World War."),
    ]
  ),
  L(
    "historical-narrative-5",
    "c2r-history-simultaneous-lines",
    "Taller de estilo: narrar líneas temporales simultáneas",
    "Mientras en Madrid…, en Buenos Aires…: organiza hechos paralelos en distintos lugares con marcadores precisos.",
    "9 min",
    [
      sec(
        "Marcadores de simultaneidad y cambio de escenario",
        [
          "La regla: el texto es lineal, pero la historia no; cuando dos cosas ocurren a la vez en lugares distintos, el lector necesita señales para saber si avanzas en el tiempo o solo cambias de escenario. Esas señales son los marcadores. Simultaneidad: mientras (tanto), entretanto, al mismo tiempo, paralelamente, simultáneamente. Cambio de escenario: al otro lado del Atlántico, en la metrópoli, entretanto en… Retomar un hilo: volviendo a…, de regreso a… Secuencia o causa: poco después, a raíz de, a partir de entonces.",
          "El tiempo verbal ayuda: dos situaciones simultáneas de fondo van en imperfecto («Mientras en Cádiz se redactaba…, en América estallaban…»). Si usas «mientras» con dos indefinidos, el lector entiende dos hechos cerrados, no dos procesos paralelos.",
        ],
        [
          ["Mientras en Cádiz se redactaba la Constitución, en América estallaban las revueltas. (dos procesos paralelos: imperfecto)", "While the Constitution was being drafted in Cádiz, revolts broke out in America."],
          ["Entretanto, al otro lado del Atlántico, el virrey reunía tropas. (simultaneidad + cambio de escenario)", "Meanwhile, across the Atlantic, the viceroy was gathering troops."],
          ["Volviendo a Lima, la noticia tardó meses en llegar. (retomar un hilo)", "Back in Lima, the news took months to arrive."],
        ],
        [
          mc(
            "Marcador para cambiar de escenario:",
            ["Al otro lado del Atlántico,", "Por consiguiente,", "Es decir,", "En resumen,"],
            0,
            "«Al otro lado del Atlántico» cambia de escenario en un relato histórico. «Por consiguiente» indica consecuencia, «Es decir» reformula y «En resumen» sintetiza."
          ),
          toEs(
            "A raíz de que en Londres se debatía el tratado, en París se preparaba la guerra.",
            "Mientras en Londres se debatía el tratado, en París se preparaba la guerra.",
            "Los dos hechos son simultáneos y no hay relación causa-efecto entre ellos: pide un marcador de simultaneidad (mientras, al tiempo que). «A raíz de» expresa causa y origen, y además va con sustantivo («a raíz de la derrota»).",
            ["Al tiempo que en Londres se debatía el tratado, en París se preparaba la guerra.", "Mientras que en Londres se debatía el tratado, en París se preparaba la guerra."],
            "Corrige el conector."
          ),
        ]
      ),
    ],
    [
      fb("Simultaneidad.", "___ en Europa estallaba la guerra, América vivía un periodo de expansión.", "Mientras", "«Mientras» + imperfecto presenta dos situaciones simultáneas en escenarios distintos."),
      fb("Simultaneidad.", "Entre___, el Gobierno negociaba en secreto.", "tanto", "«Entretanto» (en una palabra) = mientras tanto; introduce una acción simultánea."),
      { ...fb("Retomar.", "___ a Madrid, la situación se había vuelto insostenible.", "Volviendo", "«Volviendo a» + lugar retoma una línea narrativa que se había dejado."), altAnswers: ["De regreso", "Regresando"] },
      mc(
        "«A raíz de la derrota, el rey convocó las Cortes.» «A raíz de» indica…",
        ["causa y origen temporal", "simultaneidad", "contraste", "finalidad"],
        0,
        "«A raíz de» indica causa y origen temporal: como consecuencia de la derrota. No expresa simultaneidad, contraste ni finalidad."
      ),
      ms(
        "¿Qué marcadores expresan simultaneidad?",
        ["paralelamente", "al mismo tiempo", "entretanto", "a raíz de"],
        [0, 1, 2],
        "«Paralelamente», «al mismo tiempo» y «entretanto» expresan simultaneidad. «A raíz de» expresa causa u origen, no simultaneidad."
      ),
      toEs(
        "En Viena los diplomáticos negociaron la paz. En los Balcanes los ejércitos se rearmaron.",
        "Mientras en Viena los diplomáticos negociaban la paz, en los Balcanes los ejércitos se rearmaban.",
        "Para presentar dos procesos paralelos, únelos con «mientras» y pasa ambos verbos a imperfecto: el imperfecto los muestra en curso a la vez. Con indefinido serían dos hechos cerrados, uno detrás de otro.",
        ["Mientras los diplomáticos negociaban la paz en Viena, en los Balcanes los ejércitos se rearmaban.", "Mientras en Viena los diplomáticos negociaban la paz, los ejércitos se rearmaban en los Balcanes.", "Mientras que en Viena los diplomáticos negociaban la paz, en los Balcanes los ejércitos se rearmaban."],
        "Transforma las dos frases en una sola con «mientras» para mostrar simultaneidad."
      ),
      toEs("Meanwhile, on the other side of the Atlantic, the colonies were rebelling.", "Entretanto, al otro lado del Atlántico, las colonias se sublevaban.", "«Entretanto / Mientras tanto» (simultaneidad) + «al otro lado del Atlántico» (cambio de escenario).", ["Mientras tanto, al otro lado del Atlántico, las colonias se rebelaban.", "Entretanto, al otro lado del Atlántico, las colonias se rebelaban.", "Mientras tanto, al otro lado del Atlántico, las colonias se sublevaban."]),
      { ...fb("¿Cómo se dicen en español las palabras en negrita?", "___, en las provincias del norte la cosecha se perdía por la sequía.", "Paralelamente", "Marcador de simultaneidad al comienzo de párrafo: abre una segunda línea del relato que transcurre a la vez que la anterior."), en: "[At the same time], in the northern provinces the harvest was being lost to drought.", altAnswers: ["Al mismo tiempo", "Mientras tanto", "Entretanto", "Simultáneamente"] },
      wo("Paralelamente, en la capital crecía el descontento popular.", "«Paralelamente» abre la frase y marca que esto ocurre a la vez que otra línea del relato; el imperfecto (crecía) va delante del sujeto (el descontento popular), un orden habitual en la prosa histórica.", "In parallel, popular discontent was growing in the capital."),
    ]
  ),
  L(
    "historical-narrative-6",
    "c2r-history-timeline-mission",
    "Misión real: de la cronología al relato",
    "Practica los conectores de causa y contraste, el pluscuamperfecto y los tiempos del pasado que necesitas para convertir una cronología en un relato histórico.",
    "9 min",
    [
      sec(
        "La cronología",
        [
          "Recuerda la regla: una cronología solo enumera fechas; un relato las relaciona. Para pasar de una a otro necesitas tres herramientas: conectores que digan la relación (a raíz de = causa; sin embargo = contraste; mientras = simultaneidad), el indefinido para los hechos que hacen avanzar la historia y el pluscuamperfecto para lo que ya había pasado antes del momento que narras.",
          "Tu cronología: 1808: invasión napoleónica de España. 1810: comienzan los movimientos de independencia en América. 1812: se aprueba la Constitución de Cádiz. 1814: Fernando VII regresa y la anula. 1824: batalla de Ayacucho, fin del dominio español en Sudamérica. Tarea: escribe el relato para la exposición de un museo.",
        ],
        [
          ["A raíz de la invasión napoleónica, estallaron movimientos independentistas. (1808 → 1810: causa)", "As a result of the Napoleonic invasion, independence movements broke out."],
          ["Sin embargo, el rey anuló la Constitución a su regreso. (1812 → 1814: contraste)", "However, the king annulled the Constitution on his return."],
        ],
        [
          mc(
            "¿Qué relación hay entre 1808 y 1810?",
            ["causa-efecto", "simultaneidad", "contraste", "ninguna"],
            0,
            "La invasión de 1808 creó un vacío de poder que favoreció los movimientos de 1810: causa-efecto. No son hechos simultáneos ni opuestos, y sí están relacionados."
          ),
          toEs(
            "1814: Fernando VII regresa y anula la Constitución.",
            "En 1814 Fernando VII regresó y anuló la Constitución.",
            "La cronología usa un presente casi nominal; el relato del panel narra en pasado, así que los hechos que hacen avanzar la historia van en indefinido: regresó, anuló.",
            ["En 1814, Fernando VII regresó y anuló la Constitución.", "En 1814 Fernando VII volvió y anuló la Constitución.", "En 1814 Fernando VII regresó y derogó la Constitución."],
            "Convierte la entrada de la cronología en una frase de relato en pasado."
          ),
        ]
      ),
    ],
    [
      fb("Relato.", "Cuando Fernando VII regresó en 1814, las Cortes ya ___ aprobado la Constitución. (haber)", "habían", "Anterioridad respecto a otro pasado (regresó): pluscuamperfecto, habían aprobado."),
      fb("Relato.", "___ de la invasión de 1808, se produjo un vacío de poder. (como consecuencia, dos palabras)", "A raíz", "«A raíz de» = como consecuencia de; indica causa y origen temporal."),
      fb("Relato.", "Diez años después, en Ayacucho, ___ el dominio español en Sudamérica. (terminar, indefinido)", "terminó", "Hecho puntual y concluido que cierra el relato: indefinido, terminó."),
      mc(
        "¿Qué conector enlaza 1812 y 1814 mostrando contraste?",
        ["Sin embargo, apenas dos años después, el rey la anuló.", "Por ejemplo, el rey la anuló.", "Es decir, el rey la anuló.", "Asimismo, el rey la anuló."],
        0,
        "La anulación contradice lo aprobado en 1812, así que el conector adecuado es de contraste: «Sin embargo». «Por ejemplo» ejemplifica, «Es decir» reformula y «Asimismo» añade, y ninguno refleja la oposición."
      ),
      toEs(
        "Por consiguiente, en 1812 las Cortes de Cádiz aprobaron la primera constitución liberal de España, y en América continuaba la guerra.",
        "Mientras en 1812 las Cortes de Cádiz aprobaban la primera constitución liberal de España, en América continuaba la guerra.",
        "El borrador presenta como consecuencia («por consiguiente») dos hechos que solo coinciden en el tiempo. La relación es de simultaneidad: «mientras» + imperfecto en las dos partes (aprobaban, continuaba).",
        ["Mientras las Cortes de Cádiz aprobaban en 1812 la primera constitución liberal de España, en América continuaba la guerra.", "Mientras en 1812 las Cortes de Cádiz aprobaban la primera Constitución liberal de España, en América continuaba la guerra."],
        "Corrige el borrador del panel: la relación entre los dos hechos es de simultaneidad."
      ),
      mc(
        "Mejor frase de cierre del relato:",
        ["La batalla de Ayacucho puso fin, en 1824, a tres siglos de dominio español en Sudamérica.", "Y así fue todo.", "Luego pasaron más cosas.", "Ayacucho, 1824, fin."],
        0,
        "El mejor cierre sitúa el hecho con perspectiva (fecha y alcance histórico). «Y así fue todo», «Luego pasaron más cosas» y «Ayacucho, 1824, fin» son vagos o telegráficos."
      ),
      toEs(
        "En 1824 la batalla de Ayacucho terminó con el dominio español. En 1808 Napoleón invadió España.",
        "Cuando en 1824 la batalla de Ayacucho terminó con el dominio español, Napoleón había invadido España dieciséis años antes.",
        "Para mirar hacia atrás desde 1824, el hecho anterior pasa a pluscuamperfecto (había invadido) y se ancla con un marcador de distancia (dieciséis años antes).",
        ["Cuando la batalla de Ayacucho terminó con el dominio español en 1824, Napoleón había invadido España dieciséis años antes.", "Cuando en 1824 la batalla de Ayacucho puso fin al dominio español, Napoleón había invadido España dieciséis años antes."],
        "Transforma las dos frases en una sola, con 1824 como momento principal (usa el pluscuamperfecto)."
      ),
      toEs("Barely two years later, the king annulled it.", "Apenas dos años después, el rey la anuló.", "«Apenas / solo + tiempo + después» subraya lo poco que duró algo; «derogar» es el término jurídico preciso.", ["Apenas dos años más tarde, el rey la anuló.", "Solo dos años después, el rey la derogó.", "Apenas dos años después, el rey la derogó."]),
      wo("La invasión napoleónica provocó un vacío de poder en las colonias.", "Causa-efecto con un verbo causal: sujeto-causa (La invasión napoleónica) + «provocó» + efecto (un vacío de poder) + lugar.", "The Napoleonic invasion caused a power vacuum in the colonies."),
    ]
  ),
  L(
    "historical-narrative-7",
    "c2r-history-hindsight-perspective",
    "Contraste: la perspectiva del historiador",
    "«Aquel día, sin saberlo, firmaba su sentencia»: el narrador que conoce el desenlace. Futuro del pasado, anticipación y valoración.",
    "8 min",
    [
      sec(
        "Narrar sabiendo el final",
        [
          "La regla: el historiador escribe después de los hechos y conoce el desenlace que sus protagonistas ignoraban. Para anticiparlo sin salir del pasado usa el futuro del pasado: el condicional («Aquella decisión le costaría el trono») o «iba a + infinitivo» («Nadie imaginaba que aquella guerra iba a durar tres años»). Funcionan porque miran hacia delante desde un punto del pasado, igual que el futuro mira hacia delante desde el presente.",
          "Contraste clave: «le costó el trono» solo informa; «le costaría el trono» crea perspectiva y tensión, porque el lector sabe lo que el personaje no sabe. A esto se suman los marcadores de valoración: «paradójicamente», «a la postre» (al final), «como se vería más tarde», «sin saberlo».",
        ],
        [
          ["Aquella decisión le costaría el trono. (condicional = futuro visto desde el pasado)", "That decision would cost him the throne."],
          ["Nadie imaginaba que aquella guerra iba a durar tres años. (iba a: la ignorancia de los protagonistas)", "Nobody imagined that war would last three years."],
          ["A la postre, la reforma fracasó. (valoración final del historiador)", "In the end, the reform failed."],
        ],
        [
          mc(
            "«Nadie sabía entonces que aquella tregua ___ solo un mes.»",
            ["duraría", "duró antes", "dura", "durase ya"],
            0,
            "El futuro visto desde el pasado (nadie sabía entonces) se expresa en condicional: duraría. «Duró antes» es incoherente, «dura» es presente y «durase ya» es un subjuntivo sin justificación."
          ),
          toEs(
            "En 1931 nadie sospechaba que aquella república va a durar solo ocho años.",
            "En 1931 nadie sospechaba que aquella república duraría solo ocho años.",
            "El verbo principal está en pasado (sospechaba), así que lo posterior a ese momento se expresa con el futuro del pasado: el condicional «duraría» o «iba a durar». «Va a durar» solo mira hacia delante desde el presente: la perífrasis también tiene que pasar al pasado (iba a durar).",
            ["En 1931 nadie sospechaba que aquella república iba a durar solo ocho años."],
            "Corrige la frase."
          ),
        ]
      ),
    ],
    [
      fb("Anticipación.", "Aquel error le ___ la vida. (costar, condicional)", "costaría", "Condicional de posterioridad (costaría): el historiador anticipa lo que pasaría después."),
      fb("Anticipación.", "Nadie imaginaba que la guerra ___ a durar tanto. (ir, imperfecto)", "iba", "«Iba a + infinitivo» expresa el futuro visto desde el pasado, como el condicional."),
      toEs(
        "El joven oficial llegó a la corte en 1799. Se convirtió en emperador cinco años después.",
        "El joven oficial llegó a la corte en 1799; cinco años después se convertiría en emperador.",
        "Al pasar el segundo hecho a condicional (se convertiría), el narrador lo anticipa desde 1799 en lugar de contarlo como un hecho más. Es la prolepsis típica del historiador que conoce el desenlace.",
        ["El joven oficial llegó a la corte en 1799; cinco años más tarde se convertiría en emperador.", "El joven oficial llegó a la corte en 1799 y cinco años después se convertiría en emperador.", "El joven oficial llegó a la corte en 1799; cinco años después iba a convertirse en emperador."],
        "Transforma la segunda frase en una anticipación con condicional."
      ),
      fb("Valoración.", "A la ___, la reforma resultó un fracaso.", "postre", "«A la postre» (culto) = al final, en último término: presenta el desenlace visto con perspectiva y suele cerrar el relato."),
      mc(
        "«Paradójicamente, el tratado de paz sembró la semilla de la siguiente guerra.» El adverbio expresa…",
        ["una valoración del historiador", "una fecha", "un lugar", "una cita"],
        0,
        "«Paradójicamente» es una valoración del historiador que aporta perspectiva. No indica una fecha, un lugar ni una cita."
      ),
      mc(
        "«Como se vería más tarde» introduce…",
        ["una anticipación de hechos posteriores", "un recuerdo del pasado", "una hipótesis irreal", "una cita textual"],
        0,
        "«Como se vería más tarde» anticipa hechos posteriores (prolepsis). No es un recuerdo del pasado, ni una hipótesis irreal a pesar del condicional, ni una cita textual."
      ),
      toEs(
        "A la postre, aquel pacto va a ser el origen de la ruina de la dinastía.",
        "A la postre, aquel pacto sería el origen de la ruina de la dinastía.",
        "El relato está en pasado («aquel pacto»), así que la consecuencia posterior se anticipa con condicional (sería) o se cuenta en indefinido (fue). «Va a ser» solo encajaría en un relato en presente histórico; desde el pasado, la perífrasis es «iba a ser».",
        ["A la postre, aquel pacto fue el origen de la ruina de la dinastía.", "A la postre, aquel pacto iba a ser el origen de la ruina de la dinastía."],
        "Corrige la frase."
      ),
      toEs("Years later, he would admit it in his memoirs.", "Años después, lo reconocería en sus memorias.", "Condicional de posterioridad (reconocería): un hecho futuro respecto al momento narrado.", ["Años más tarde, lo admitiría en sus memorias.", "Años después lo reconocería en sus memorias.", "Años más tarde, lo reconocería en sus memorias."]),
      wo("Aquel día, sin saberlo, estaba firmando su propia sentencia.", "«Sin saberlo» marca que el narrador sabe más que el personaje: el imperfecto progresivo (estaba firmando) muestra la acción en curso, y el historiador ya conoce su desenlace.", "That day, without knowing it, he was signing his own sentence."),
    ]
  ),
  L(
    "historical-narrative-8",
    "c2r-history-story-detective",
    "Detective de textos: análisis de un fragmento historiográfico",
    "Lee un fragmento y analiza la función de cada tiempo verbal y la postura del historiador.",
    "9 min",
    [
      sec(
        "El fragmento",
        [
          "Recuerda la regla: en la prosa histórica cada tiempo tiene una función. Imperfecto = marco o fondo (y, a veces, imperfecto narrativo que dramatiza un hecho puntual); indefinido = hechos que hacen avanzar la historia; pluscuamperfecto = lo anterior al momento narrado; condicional = anticipación desde la perspectiva del historiador. Detectar esas funciones permite leer también la postura del autor.",
          "«La ciudad vivía un periodo de calma aparente cuando, en la primavera de 1871, estalló la epidemia. Las autoridades, que habían ignorado los informes médicos durante meses, reaccionaron tarde. En pocas semanas, un tercio de la población abandonaba la capital. Nadie podía prever entonces que aquella crisis transformaría para siempre el urbanismo de la ciudad.»",
        ],
        [
          ["La ciudad vivía un periodo de calma aparente. (imperfecto de marco)", "The city was living through a period of apparent calm."],
          ["Aquella crisis transformaría para siempre el urbanismo. (condicional de anticipación)", "That crisis would transform urban planning forever."],
        ],
        [
          mc(
            "«Vivía» cumple la función de…",
            ["marco o fondo", "hecho puntual", "anticipación", "anterioridad"],
            0,
            "«Vivía» describe la situación de partida en imperfecto: marco o fondo. No es un hecho puntual (indefinido), ni anticipación (condicional), ni anterioridad (pluscuamperfecto)."
          ),
          mc(
            "En otro texto: «El puerto dormía bajo la niebla cuando atracó el primer vapor». ¿Qué función tiene «atracó»?",
            ["hecho puntual que irrumpe en el marco", "marco o fondo", "anterioridad", "anticipación"],
            0,
            "Mismo esquema que «vivía… cuando estalló»: el imperfecto (dormía) pinta el fondo y el indefinido (atracó) es el hecho puntual que lo interrumpe. No es anterior al marco ni una anticipación."
          ),
        ]
      ),
    ],
    [
      mc(
        "«Habían ignorado» expresa…",
        ["anterioridad respecto al estallido", "posterioridad", "simultaneidad", "hipótesis"],
        0,
        "El pluscuamperfecto «habían ignorado» expresa anterioridad respecto al estallido. No indica posterioridad, simultaneidad ni hipótesis."
      ),
      mc(
        "«Un tercio de la población abandonaba la capital» es…",
        ["un imperfecto narrativo que dramatiza", "un marco descriptivo neutro", "una costumbre", "un error"],
        0,
        "Es un imperfecto narrativo: presenta un hecho puntual con dramatismo. No es un marco neutro ni una costumbre, y no es un error sino un recurso estilístico."
      ),
      mc(
        "«Transformaría» indica…",
        ["anticipación desde la perspectiva del historiador", "cortesía", "condición", "probabilidad presente"],
        0,
        "«Transformaría» es el condicional de posterioridad: el historiador anticipa lo que pasaría después. No es de cortesía, condición ni probabilidad en el presente."
      ),
      mc(
        "¿Qué critica implícitamente el historiador?",
        ["la tardanza de las autoridades", "a los médicos", "a los ciudadanos que huyeron", "el urbanismo moderno"],
        0,
        "El historiador critica la tardanza de las autoridades: «habían ignorado los informes… reaccionaron tarde». No culpa a los médicos, a quienes huyeron ni al urbanismo moderno."
      ),
      toEs(
        "Aquella misma noche, miles de familias huyeron hacia el campo.",
        "Aquella misma noche, miles de familias huían hacia el campo.",
        "El hecho es puntual («aquella misma noche»), pero el imperfecto narrativo lo dramatiza: lo muestra «en marcha», como una escena que el lector ve ocurrir, igual que «abandonaba» en el fragmento. El indefinido es igual de correcto, pero más neutro.",
        [],
        "Transforma el indefinido en un imperfecto narrativo, como «abandonaba» en el fragmento."
      ),
      ms(
        "¿Qué tiempos aparecen y con qué función?",
        ["imperfecto de marco", "indefinido de acción", "pluscuamperfecto de anterioridad", "futuro de subjuntivo"],
        [0, 1, 2],
        "El texto usa el imperfecto de marco, el indefinido de acción y el pluscuamperfecto de anterioridad. El futuro de subjuntivo, arcaico y propio de textos jurídicos, no aparece."
      ),
      toEs(
        "Los médicos, que advirtieron del peligro meses antes, no fueron escuchados.",
        "Los médicos, que habían advertido del peligro meses antes, no fueron escuchados.",
        "«Meses antes» sitúa la advertencia antes del momento narrado (no fueron escuchados): anterioridad respecto a un pasado = pluscuamperfecto, como «habían ignorado» en el fragmento.",
        ["Los médicos, que habían advertido del peligro meses atrás, no fueron escuchados."],
        "Corrige la frase."
      ),
      toEs(
        "Nobody could foresee then that the epidemic would change the city forever.",
        "Nadie podía prever entonces que la epidemia cambiaría la ciudad para siempre.",
        "Futuro visto desde el pasado (podía prever entonces): condicional «cambiaría» o «iba a cambiar», como «transformaría» en el fragmento.",
        ["Nadie podía prever entonces que la epidemia iba a cambiar la ciudad para siempre.", "Entonces nadie podía prever que la epidemia cambiaría la ciudad para siempre.", "Nadie podía prever entonces que la epidemia cambiaría para siempre la ciudad."]
      ),
      wo("Los vecinos, que habían soportado meses de escasez, se lanzaron a la calle.", "Mismo patrón que el fragmento: relativa explicativa entre comas con pluscuamperfecto (habían soportado, lo anterior) y verbo principal en indefinido (se lanzaron, el hecho).", "The residents, who had endured months of shortages, took to the streets."),
    ]
  ),
  L(
    "historical-narrative-9",
    "c2r-history-vocab-web",
    "Red de palabras: el léxico de la historia",
    "Auge, declive, apogeo, ocaso, sublevación, abdicación, tratado, hegemonía: organiza el vocabulario de los procesos históricos.",
    "9 min",
    [
      sec(
        "Procesos y acontecimientos",
        [
          "El vocabulario histórico se organiza en redes: Ciclo: surgimiento → auge → apogeo → declive → ocaso / caída. Conflicto: sublevación, levantamiento, insurrección, golpe de Estado, contienda. Poder: hegemonía, dinastía, abdicación, sucesión, regencia. Paz: tratado, armisticio, tregua, capitulación. Cambio: reforma, ruptura, transición.",
          "El patrón que multiplica la red: muchos de estos sustantivos salen de un verbo con dos sufijos. -ción / -sión forma sustantivos femeninos (sublevar → la sublevación, abdicar → la abdicación, capitular → la capitulación, invadir → la invasión); -miento forma sustantivos masculinos (levantar → el levantamiento, alzar → el alzamiento). Si conoces el verbo, puedes nombrar el hecho, y el sufijo te dice el género. No hay regla para saber cuál de los dos toma cada verbo, pero cada uno conserva siempre su género.",
        ],
        [
          ["El imperio alcanzó su apogeo en el siglo XVI.", "The empire reached its peak in the 16th century."],
          ["Tras la derrota, el ejército firmó la capitulación. (capitular → la capitulación)", "After the defeat, the army signed the surrender."],
          ["El levantamiento campesino se extendió por la comarca. (levantar → el levantamiento)", "The peasant uprising spread through the region."],
        ],
        [
          mc(
            "El momento de máximo esplendor es el…",
            ["apogeo", "ocaso", "declive", "armisticio"],
            0,
            "El apogeo es el momento de máximo esplendor. El ocaso y el declive son la decadencia, y un armisticio es un alto el fuego."
          ),
          fb("Forma el sustantivo a partir del verbo «derrocar» (con su artículo).", "___ del dictador puso fin a cuarenta años de régimen.", "El derrocamiento", "Derrocar → el derrocamiento: el sufijo -miento forma sustantivos masculinos de acción, como levantar → el levantamiento. Es una palabra que la sección no mostraba: el patrón basta para formarla."),
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
        "La abdicación es renunciar al trono, el armisticio suspende los combates, la hegemonía es la supremacía de un Estado y el ocaso es la decadencia final de un poder."
      ),
      fb("Completa.", "Tras siglos de esplendor, comenzó el lento ___ del imperio. (decadencia)", "declive", "El declive es la decadencia progresiva tras el esplendor: viene después del apogeo y antes del ocaso."),
      fb("Completa.", "El ___ de Versalles puso fin a la Primera Guerra Mundial. (acuerdo de paz)", "tratado", "Un tratado es un acuerdo formal entre Estados, como el de paz de Versalles."),
      fb("Completa.", "La ___ militar fracasó en pocas horas. (levantamiento armado)", "sublevación", "Una sublevación es un levantamiento armado contra la autoridad (sublevar → la sublevación)."),
      toEs(
        "El sublevamiento de la guarnición fracasó en pocas horas.",
        "La sublevación de la guarnición fracasó en pocas horas.",
        "«Sublevar» forma su sustantivo con -ción, no con -miento, y los sustantivos en -ción son femeninos: la sublevación. Cada verbo toma un sufijo fijo (levantar → el levantamiento, pero sublevar → la sublevación).",
        ["El levantamiento de la guarnición fracasó en pocas horas."],
        "Corrige la frase."
      ),
      mc(
        "Ordena: (a) apogeo (b) surgimiento (c) ocaso (d) auge",
        ["b, d, a, c", "a, b, c, d", "d, a, b, c", "c, a, d, b"],
        0,
        "El ciclo histórico va del surgimiento al auge, luego al apogeo (el punto máximo) y al ocaso. Las demás ordenaciones empiezan por la cumbre o la decadencia, lo que rompe la secuencia lógica."
      ),
      toEs(
        "Cuando el rey abdicó, se abrió una grave crisis sucesoria.",
        "La abdicación del rey abrió una grave crisis sucesoria.",
        "Nominalizar condensa: el verbo «abdicar» se convierte en el sustantivo «la abdicación», que pasa a ser el sujeto de un verbo de consecuencia (abrió). Es el estilo habitual de la prosa histórica.",
        ["La abdicación del rey provocó una grave crisis sucesoria.", "La abdicación del rey desencadenó una grave crisis sucesoria.", "Con la abdicación del rey se abrió una grave crisis sucesoria."],
        "Transforma la frase usando el sustantivo derivado de «abdicar» como sujeto."
      ),
      mc(
        "¿Qué sustantivo derivado está bien formado?",
        ["la coronación (de coronar)", "el coronamiento de un rey", "la invadición (de invadir)", "la alzación (de alzar)"],
        0,
        "Coronar → la coronación (-ción, femenino). Para un rey se dice «coronación»; «coronamiento» se usa para el remate de una obra o un edificio. Invadir forma «la invasión» y alzar forma «el alzamiento»: cada verbo tiene su sufijo fijo."
      ),
      toEs("The kingdom reached its peak under Philip II.", "El reino alcanzó su apogeo bajo Felipe II.", "«Alcanzar su apogeo / su máximo esplendor» marca el punto culminante de un periodo; «bajo + nombre del monarca» sitúa la época.", ["El reino alcanzó su máximo esplendor bajo Felipe II.", "El reino llegó a su apogeo bajo Felipe II.", "El reino alcanzó su apogeo con Felipe II.", "El reino alcanzó su apogeo durante el reinado de Felipe II."]),
      wo("Tras la abdicación del rey, se abrió un periodo de regencia.", "Cuando abdica un rey cuyo heredero es menor de edad, otra persona gobierna en su nombre: es la regencia. «Abrirse un periodo» es la colocación habitual.", "After the king's abdication, a period of regency began."),
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
        "Participio absoluto: «Firmada la paz, las tropas regresaron». Pasiva de acción: «La ciudad fue tomada en 1492». Pasiva refleja: «Se decretó el estado de sitio». Estilo indirecto: «El general declaró que no se rendiría». Anticipación: «Aquella promesa no se cumpliría jamás».",
        [
          ["Firmada la paz, las tropas regresaron a sus cuarteles.", "Once peace was signed, the troops returned to their barracks."],
          ["El general declaró que no se rendiría.", "The general declared that he would not surrender."],
        ],
        [
          mc(
            "«___ la paz, comenzó la reconstrucción.» (firmar)",
            ["Firmada", "Firmando", "Firmó", "Firmaba"],
            0,
            "El participio absoluto concuerda con el sustantivo (la paz → firmada) y expresa una acción anterior. «Firmando» sería simultáneo, y «Firmó» o «Firmaba» son verbos conjugados que exigirían otro sujeto y un nexo."
          ),
        ]
      ),
    ],
    [
      fb("Pasiva.", "Granada ___ tomada por los Reyes Católicos en 1492.", "fue", "Pasiva perifrástica: ser (fue) + participio concordado con el sujeto (Granada → tomada)."),
      fb("Pasiva refleja.", "Se ___ el toque de queda en toda la ciudad. (decretar, indefinido)", "decretó", "Pasiva refleja con «se» + verbo en tercera persona concordado con «el toque de queda»: decretó."),
      fb("Estilo indirecto.", "«No me rendiré.» → Declaró que no se ___.", "rendiría", "Con introductor en pasado (declaró), el futuro pasa a condicional: «rendiré» → «rendiría»."),
      fb("Anticipación.", "Aquella promesa no se ___ jamás. (cumplir, condicional)", "cumpliría", "Condicional como futuro del pasado: el historiador anticipa que la promesa no se cumpliría."),
      mc(
        "«Derrotado el ejército, el rey huyó.» equivale a…",
        ["Una vez que el ejército fue derrotado, el rey huyó.", "El rey derrotó al ejército y huyó.", "El ejército huyó del rey.", "El rey fue derrotado por el ejército."],
        0,
        "El participio absoluto equivale a «Una vez que el ejército fue derrotado». Las demás cambian quién derrota o huye: el rey no derrotó al ejército, el ejército no huyó del rey y el rey no fue derrotado por su propio ejército."
      ),
      toEs("Once the treaty was signed, the war ended.", "Firmado el tratado, la guerra terminó.", "Participio absoluto (Firmado el tratado) o «Una vez firmado» para una acción anterior.", ["Una vez firmado el tratado, la guerra terminó.", "Firmado el tratado, terminó la guerra."]),
      wo("Tomada la capital, los rebeldes proclamaron la república.", "Participio absoluto: el participio va primero y concuerda con su sujeto (la capital → tomada); equivale a «una vez tomada la capital» y expresa anterioridad.", "Once the capital was taken, the rebels proclaimed the republic."),
    ]
  ),
  L(
    "science-technology-spanish-1",
    "c2r-science-hypothesis-language",
    "Transformaciones: el lenguaje de la hipótesis",
    "Convierte afirmaciones categóricas en hipótesis falsables y resultados con la cautela propia de la ciencia.",
    "8 min",
    [
      sec(
        "Formular, contrastar, concluir",
        [
          "La regla: en ciencia nada se da por demostrado del todo, así que el lenguaje gradúa la certeza en cada fase. Hipótesis: «Se plantea la hipótesis de que…», «Cabe suponer que…» (+ indicativo), «Si X, entonces cabría esperar Y» (el condicional predice sin afirmar). Contraste: «Los datos corroboran / refutan / no permiten descartar que…» (descartar que + subjuntivo). Conclusión cautelosa: «Los resultados apuntan a…», «sugieren que…», «Se requieren estudios adicionales».",
          "Por qué: una hipótesis solo es científica si es falsable, es decir, si existe un resultado posible que la demostraría falsa. Por eso se formula como predicción concreta, y por eso las conclusiones no dicen «demuestra» sino «apunta a».",
        ],
        [
          ["Se plantea la hipótesis de que el compuesto reduce la inflamación.", "It is hypothesized that the compound reduces inflammation."],
          ["Los datos no permiten descartar un efecto placebo.", "The data do not rule out a placebo effect."],
          ["Los resultados apuntan a una posible relación entre el sueño y la memoria. (conclusión cautelosa)", "The results point to a possible link between sleep and memory."],
        ],
        [
          mc(
            "¿Qué enunciado es una hipótesis falsable?",
            ["Si el fármaco es eficaz, el grupo tratado mostrará menos síntomas que el grupo control.", "El fármaco es mágico.", "La ciencia lo sabe todo.", "Quizá algo pase algún día."],
            0,
            "Una hipótesis falsable predice un resultado contrastable, que podría resultar falso. «El fármaco es mágico», «La ciencia lo sabe todo» y «Quizá algo pase algún día» no se pueden comprobar ni refutar."
          ),
          toEs(
            "Una hipótesis que ningún experimento podría refutar es la más científica.",
            "Una hipótesis que ningún experimento podría refutar no es científica.",
            "Según el criterio de falsabilidad, una hipótesis es científica precisamente porque algún resultado podría refutarla. Si nada puede refutarla, no es más sólida: queda fuera de la ciencia.",
            ["Una hipótesis que ningún experimento podría refutar es la menos científica."],
            "Corrige la frase según el criterio de falsabilidad."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "Los resultados ___ la hipótesis inicial. (confirmar, término científico)", "corroboran", "«Corroborar» es el término científico para confirmar una hipótesis con nuevos datos."),
      fb("Completa.", "Los datos no permiten ___ otras explicaciones. (excluir)", "descartar", "«Descartar» = excluir una posibilidad; «no permitir descartar» expresa cautela."),
      fb("Completa.", "Cabe ___ que el efecto es mayor en pacientes jóvenes. (pensar como hipótesis)", "suponer", "«Cabe suponer que» presenta una hipótesis con cautela; como «suponer» es un verbo de creencia en forma afirmativa, va con indicativo: es."),
      toEs(
        "Los nuevos datos corroboran la teoría.",
        "Los nuevos datos refutan la teoría.",
        "«Corroborar» confirma; su opuesto en el lenguaje científico es «refutar» (demostrar que es falsa). «Rebatir» se usa más para argumentos, y «desmentir» para noticias.",
        [],
        "Cambia el verbo por el de significado contrario."
      ),
      toEs(
        "Los datos no permiten descartar que el efecto es casual.",
        "Los datos no permiten descartar que el efecto sea casual.",
        "«Descartar que» presenta algo como posibilidad no confirmada y exige subjuntivo, también en negativa: no permiten descartar que sea. El indicativo lo daría por hecho.",
        ["Los datos no permiten descartar que el efecto se deba al azar."],
        "Corrige la frase."
      ),
      mc(
        "Transforma «Este gen causa la enfermedad» en conclusión cautelosa:",
        ["Los resultados apuntan a una posible relación entre este gen y la enfermedad.", "Este gen causa la enfermedad seguro.", "Está clarísimo que es el gen.", "El gen es culpable."],
        0,
        "Una conclusión cautelosa atenúa: «apuntan a una posible relación». «Seguro», «clarísimo» y «es culpable» presentan como certeza lo que los datos solo sugieren."
      ),
      toEs(
        "El ejercicio regular reduce el riesgo de depresión.",
        "Los datos sugieren que el ejercicio regular reduciría el riesgo de depresión.",
        "Para pasar de afirmación categórica a conclusión cautelosa se atribuye la idea a los datos («Los datos sugieren que…») y se atenúa el verbo con condicional (reduciría) o con «podría reducir». El indicativo («reduce») tras «sugieren que» también es posible, pero menos prudente.",
        ["Los datos sugieren que el ejercicio regular podría reducir el riesgo de depresión.", "Los datos sugieren que el ejercicio regular reduce el riesgo de depresión."],
        "Reescribe la afirmación como conclusión cautelosa, empezando por «Los datos sugieren que»."
      ),
      mt(
        "Relaciona el verbo con su sentido.",
        [
          ["corroborar", "confirmar"],
          ["refutar", "demostrar que es falso"],
          ["replicar", "repetir un experimento"],
        ],
        "«Corroborar» es confirmar una hipótesis con nuevos datos; «refutar», demostrar que es falsa; «replicar» un experimento, repetirlo de forma independiente para ver si se obtiene el mismo resultado."
      ),
      toEs("Further studies are required to confirm these results.", "Se requieren estudios adicionales para confirmar estos resultados.", "Cautela científica: «Se requieren / Son necesarios estudios adicionales para…».", ["Se necesitan más estudios para confirmar estos resultados.", "Son necesarios estudios adicionales para confirmar estos resultados.", "Se requieren más estudios para confirmar estos resultados."]),
      wo("Si la hipótesis es correcta, cabría esperar una reducción de los síntomas.", "Predicción cautelosa: «si» + presente de indicativo (es correcta) en la condición y condicional (cabría esperar) en la consecuencia, para atenuar lo que se predice.", "If the hypothesis is correct, a reduction in symptoms would be expected."),
    ]
  ),
  L(
    "science-technology-spanish-2",
    "c2r-tech-disruption-vocab",
    "Red de palabras: innovación y disrupción",
    "Disruptivo, obsolescencia, escalable, prototipo, brecha digital, algoritmo: organiza el léxico de la tecnología.",
    "8 min",
    [
      sec(
        "Palabras de la innovación",
        [
          "La red: innovación incremental (mejora) frente a disruptiva (cambia las reglas del mercado). Obsolescencia (programada): envejecimiento de un producto (provocado). Escalable: que puede crecer sin perder eficiencia. Prototipo, versión beta. Brecha digital: desigualdad en el acceso a la tecnología. Algoritmo, inteligencia artificial, aprendizaje automático, macrodatos.",
          "El patrón: el español técnico prefiere un equivalente propio al anglicismo cuando existe uno claro (es la recomendación de la RAE y la Fundéu). Big data → macrodatos; machine learning → aprendizaje automático; startup → empresa emergente; feedback → retroalimentación; smartphone → teléfono inteligente. En un texto cuidado, busca primero la palabra española; el anglicismo crudo suena a jerga de oficina.",
        ],
        [
          ["La plataforma es fácilmente escalable.", "The platform is easily scalable."],
          ["La brecha digital afecta sobre todo a las personas mayores.", "The digital divide mainly affects older people."],
          ["La empresa emergente analiza macrodatos de tráfico. (startup, big data)", "The startup analyses big data on traffic."],
        ],
        [
          mc(
            "Una innovación que redefine las reglas de un sector es…",
            ["disruptiva", "incremental", "obsoleta", "escalable"],
            0,
            "Una innovación que redefine las reglas de un sector es disruptiva. La incremental solo mejora lo existente, lo obsoleto está anticuado y lo escalable puede crecer, pero ninguna implica romper las reglas."
          ),
          toEs(
            "Necesitamos más feedback de los usuarios antes de lanzar la aplicación.",
            "Necesitamos más retroalimentación de los usuarios antes de lanzar la aplicación.",
            "Para «feedback» el español tiene «retroalimentación» (o, según el contexto, «comentarios», «opiniones», «valoraciones»). En un texto cuidado se prefiere el equivalente propio.",
            ["Necesitamos más comentarios de los usuarios antes de lanzar la aplicación.", "Necesitamos más opiniones de los usuarios antes de lanzar la aplicación.", "Necesitamos más valoraciones de los usuarios antes de lanzar la aplicación."],
            "Sustituye el anglicismo por su equivalente en español."
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
        "La obsolescencia programada limita a propósito la vida útil, lo escalable crece sin perder eficiencia, la brecha digital es la desigualdad de acceso y el prototipo es el primer modelo de prueba."
      ),
      fb("Completa.", "El móvil dejó de funcionar a los dos años: sospecho de la obsolescencia ___.", "programada", "La obsolescencia programada es diseñar un producto para que deje de funcionar pasado un tiempo."),
      { ...fb("Completa.", "Los ___ (grandes volúmenes de datos) permiten predecir tendencias de consumo.", "macrodatos", "«Macrodatos» es la alternativa recomendada en español a «big data»."), altAnswers: ["datos masivos"] },
      fb("Completa.", "El aprendizaje ___ permite a las máquinas mejorar con la experiencia.", "automático", "«Aprendizaje automático» es el equivalente español de «machine learning»."),
      toEs(
        "La startup ha cerrado una nueva ronda de financiación.",
        "La empresa emergente ha cerrado una nueva ronda de financiación.",
        "«Startup» tiene en español el equivalente «empresa emergente», recomendado en textos cuidados; también se usa «empresa incipiente».",
        ["La empresa incipiente ha cerrado una nueva ronda de financiación."],
        "Sustituye el anglicismo por su equivalente en español."
      ),
      mc(
        "¿Qué innovación es incremental?",
        ["una batería que dura un 10 % más", "el primer teléfono inteligente", "internet", "la imprenta"],
        0,
        "Una batería que dura un 10 % más mejora lo existente: innovación incremental. El primer teléfono inteligente, internet y la imprenta cambiaron las reglas: son disruptivas."
      ),
      toEs(
        "Mi impresora dejó de funcionar justo cuando acabó la garantía: es un caso claro de brecha digital.",
        "Mi impresora dejó de funcionar justo cuando acabó la garantía: es un caso claro de obsolescencia programada.",
        "Que un aparato falle justo al terminar la garantía apunta a una vida útil limitada a propósito: obsolescencia programada. La brecha digital es otra cosa: la desigualdad en el acceso a la tecnología.",
        [],
        "Corrige la frase: el término no corresponde a la situación."
      ),
      { ...fb("¿Cómo se dicen en español las palabras en negrita?", "El modelo de negocio es ___: puede crecer sin perder eficiencia.", "escalable", "«Escalable»: capaz de crecer manteniendo la eficiencia (escalar → escalable → la escalabilidad)."), en: "The business model is [scalable]: it can grow without losing efficiency." },
      toEs("Artificial intelligence could widen the digital divide.", "La inteligencia artificial podría ampliar la brecha digital.", "La «brecha digital» es la desigualdad en el acceso a la tecnología; «podría» expresa posibilidad.", ["La inteligencia artificial podría agrandar la brecha digital.", "La IA podría ampliar la brecha digital."]),
      wo("La empresa lanzó una versión beta para probar el prototipo con usuarios reales.", "«Lanzar una versión beta» (una versión de prueba abierta a usuarios) + «para» + infinitivo de finalidad (probar el prototipo).", "The company launched a beta version to test the prototype with real users."),
    ]
  ),
  L(
    "science-technology-spanish-3",
    "c2r-science-popularize",
    "Taller de estilo: divulgar sin simplificar en exceso",
    "Traduce un resumen técnico a un texto divulgativo para el gran público sin traicionar el contenido.",
    "9 min",
    [
      sec(
        "Del paper al periódico",
        [
          "La regla: divulgar es cambiar el registro, no el contenido. Se sustituyen los tecnicismos por palabras comunes, se pasa de la pasiva impersonal («se observó») a la voz activa con sujeto humano («los investigadores comprobaron»), se usan analogías y se añade el «para qué sirve». Lo que no se toca es el grado de certeza: si el estudio dice «sugiere», el divulgador no puede escribir «demuestra».",
          "Técnico: «Se observó una reducción estadísticamente significativa de la expresión génica asociada a la senescencia celular». Divulgativo: «Los investigadores comprobaron que ciertos genes relacionados con el envejecimiento de las células se activaban menos».",
        ],
        [
          ["Senescencia celular → envejecimiento de las células.", "Cellular senescence → cell ageing."],
          ["Estadísticamente significativo → es muy poco probable que se deba al azar.", "Statistically significant → very unlikely to be due to chance."],
          ["Se administró el compuesto → Los científicos dieron el compuesto a los ratones. (voz activa, sujeto humano)", "The compound was administered → The scientists gave the compound to the mice."],
        ],
        [
          mc(
            "Versión divulgativa de «in vitro»:",
            ["en el laboratorio, fuera de un organismo vivo", "en el cuerpo humano", "en la naturaleza", "en un ordenador"],
            0,
            "Divulgar «in vitro» es explicarlo con palabras llanas: en el laboratorio, fuera de un organismo vivo. «En el cuerpo humano» sería in vivo, y «en la naturaleza» o «en un ordenador» (in silico) no corresponden."
          ),
          toEs(
            "El fármaco alivia la cefalea en la mayoría de los pacientes.",
            "El fármaco alivia el dolor de cabeza en la mayoría de los pacientes.",
            "Divulgar es sustituir el tecnicismo por la palabra común sin cambiar el contenido: cefalea → dolor de cabeza. El resto de la frase (el grado de certeza, «la mayoría») se mantiene.",
            [],
            "Sustituye el tecnicismo por una expresión divulgativa."
          ),
        ]
      ),
    ],
    [
      fb("Divulga.", "Metaanálisis → un estudio que reúne los resultados de muchos ___ anteriores.", "estudios", "Divulgar un tecnicismo es definirlo con palabras comunes: un metaanálisis combina los resultados de muchos estudios previos para obtener una conclusión más sólida."),
      fb("Divulga.", "Se observó una reducción → Los investigadores ___ que había menos… (comprobar, indefinido)", "comprobaron", "Divulgar implica pasar a voz activa con sujeto humano: los investigadores comprobaron."),
      toEs(
        "Se detectó una disminución de la actividad cerebral en los participantes.",
        "Los investigadores detectaron una disminución de la actividad cerebral en los participantes.",
        "La pasiva refleja impersonal («se detectó») es típica del artículo científico; el texto divulgativo prefiere la voz activa con un sujeto humano que el lector pueda imaginar: los investigadores detectaron.",
        ["Los científicos detectaron una disminución de la actividad cerebral en los participantes.", "Los investigadores detectaron que la actividad cerebral de los participantes disminuía."],
        "Reescribe la frase en voz activa, con «los investigadores» como sujeto."
      ),
      mc(
        "¿Qué analogía divulga bien el sistema inmunitario?",
        ["un ejército que defiende el cuerpo de invasores", "una cuenta bancaria", "un poema", "un mapa de carreteras"],
        0,
        "El ejército que defiende el cuerpo de invasores es una analogía clara y fiel. Una cuenta bancaria, un poema o un mapa de carreteras no reflejan la función de defensa."
      ),
      mc(
        "¿Qué error debe evitar el divulgador?",
        ["convertir un resultado preliminar en una cura milagrosa", "usar ejemplos", "explicar tecnicismos", "citar la fuente"],
        0,
        "El divulgador debe evitar el sensacionalismo: convertir un resultado preliminar en cura milagrosa. Usar ejemplos, explicar tecnicismos y citar la fuente son buenas prácticas."
      ),
      toEs(
        "Los científicos comprobaron que los ratones tratados duerman más horas.",
        "Los científicos comprobaron que los ratones tratados dormían más horas.",
        "«Comprobar que» presenta un hecho constatado y va con indicativo (dormían). El subjuntivo solo aparecería con el verbo negado o con verbos de duda o deseo.",
        ["Los científicos comprobaron que los ratones tratados dormían durante más horas."],
        "Corrige la frase."
      ),
      ms(
        "¿Qué recursos ayudan a divulgar?",
        ["analogías", "voz activa", "explicar para qué sirve", "acumular siglas sin explicar"],
        [0, 1, 2],
        "Las analogías, la voz activa y explicar para qué sirve algo acercan la ciencia al lector. Acumular siglas sin explicar lo aleja."
      ),
      toEs("Researchers found that these genes were less active.", "Los investigadores comprobaron que estos genes estaban menos activos.", "Divulgación en voz activa: «Los investigadores comprobaron / descubrieron que…».", ["Los investigadores descubrieron que estos genes se activaban menos.", "Los investigadores comprobaron que estos genes se activaban menos.", "Los investigadores descubrieron que estos genes estaban menos activos."]),
      wo("El hallazgo es prometedor, pero todavía queda mucho por investigar.", "Cautela divulgativa: «quedar mucho por + infinitivo» indica lo que aún falta y matiza el «prometedor».", "The finding is promising, but there is still much to research."),
    ]
  ),
  L(
    "science-technology-spanish-3",
    "c2r-science-dialogue-interview",
    "Laboratorio de diálogo: entrevista a una científica",
    "Formula preguntas de periodista científico y comprende respuestas matizadas.",
    "8 min",
    [
      sec(
        "Preguntas de periodista",
        [
          "Recuerda la regla: en una entrevista científica cada parte tiene su lenguaje. La periodista pregunta en usted y con fórmulas que ordenan la conversación: contexto («¿En qué consiste exactamente su hallazgo?»), relevancia («¿Qué implicaciones podría tener?»), límites («¿Qué no dice este estudio?»), futuro («¿Cuáles son los próximos pasos?»). Suaviza con preguntas indirectas: «¿Podría explicarnos…?».",
          "La científica matiza para no crear falsas expectativas: «Todavía es pronto para hablar de…», «Hay que ser prudentes», «En modelos animales, sí; en humanos, está por ver». Y cuando habla del futuro con «cuando», «hasta que» o «en cuanto», el verbo va en subjuntivo: «Cuando tengamos datos en humanos, sabremos más».",
        ],
        [
          ["Todavía es pronto para hablar de aplicaciones clínicas.", "It's still too early to talk about clinical applications."],
          ["En humanos, está por ver.", "In humans, it remains to be seen."],
          ["¿Podría explicarnos qué no dice este estudio? (pregunta indirecta, más cortés)", "Could you explain to us what this study doesn't show?"],
        ],
        [
          mc(
            "Pregunta que aborda los límites del estudio:",
            ["¿Qué no dice este estudio?", "¿Cuáles son los próximos pasos?", "¿Qué implicaciones podría tener?", "¿En qué consiste exactamente su hallazgo?"],
            0,
            "«¿Qué no dice este estudio?» aborda sus límites. Las otras son buenas preguntas de entrevista, pero piden los próximos pasos, las implicaciones o una explicación del hallazgo, no sus límites."
          ),
          toEs(
            "¿En qué consiste su hallazgo?",
            "¿Podría explicarnos en qué consiste su hallazgo?",
            "La pregunta indirecta («¿Podría explicarnos…?») suaviza la petición. La pregunta original queda subordinada sin cambiar el orden ni la tilde de «qué»: en qué consiste.",
            ["¿Nos podría explicar en qué consiste su hallazgo?", "¿Podría explicarnos en qué consiste exactamente su hallazgo?"],
            "Transforma la pregunta en una pregunta indirecta que empiece por «¿Podría explicarnos…?»."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "¿Qué ___ podría tener este hallazgo para los pacientes? (consecuencias)", "implicaciones", "Las implicaciones son las consecuencias o repercusiones posibles de un hallazgo."),
      fb("Completa.", "En ratones funciona; en humanos, está por ___.", "ver", "«Estar por ver» = no se sabe aún: la científica separa lo comprobado (en ratones) de lo pendiente (en humanos)."),
      fb("Completa.", "Todavía es ___ para hablar de un tratamiento.", "pronto", "«Es pronto para» + infinitivo expresa cautela: aún no hay datos suficientes."),
      toEs(
        "Cuando tendremos datos en humanos, hablaremos de aplicaciones.",
        "Cuando tengamos datos en humanos, hablaremos de aplicaciones.",
        "Con «cuando» referido al futuro, el verbo de la subordinada va en presente de subjuntivo (tengamos), nunca en futuro. El futuro aparece solo en la principal (hablaremos).",
        [],
        "Corrige la respuesta de la científica."
      ),
      mc(
        "«Hay que ser prudentes» busca…",
        ["evitar falsas expectativas", "negar el estudio", "promocionar un producto", "cambiar de tema"],
        0,
        "«Hay que ser prudentes» busca evitar falsas expectativas. No niega el estudio, no promociona un producto ni cambia de tema."
      ),
      mc(
        "La periodista pregunta: «¿Cuándo podremos comprarlo en la farmacia?». ¿Qué respuesta es la más propia de una científica rigurosa?",
        ["Hasta que no se hagan ensayos clínicos en personas, no lo sabremos.", "El año que viene, seguro.", "Ya está a la venta en internet.", "Eso da igual, lo importante es el titular."],
        0,
        "La respuesta rigurosa condiciona el futuro a los ensayos clínicos («hasta que no se hagan», con subjuntivo). Las demás dan una fecha sin base, inventan un producto o desprecian el rigor."
      ),
      mc(
        "¿Qué titular respeta las palabras de la científica?",
        ["Un estudio en ratones abre una nueva vía contra el envejecimiento celular", "Descubierta la cura del envejecimiento", "Ya podemos vivir 200 años", "Los científicos no saben nada"],
        0,
        "El titular riguroso matiza (estudio en ratones, «abre una nueva vía»). «Descubierta la cura», «vivir 200 años» exageran y «no saben nada» tergiversa lo dicho."
      ),
      toEs("What are the next steps of your research?", "¿Cuáles son los próximos pasos de su investigación?", "Pregunta periodística formal (usted): «¿Cuáles son los próximos / siguientes pasos de su investigación?».", ["¿Cuáles son los siguientes pasos de su investigación?"]),
      wo("Es pronto para hablar de aplicaciones clínicas, pero los resultados son alentadores.", "Respuesta matizada: «Es pronto para + infinitivo» frena las expectativas y «pero» introduce la valoración positiva (alentadores).", "It's too early to talk about clinical applications, but the results are encouraging."),
    ]
  ),
  L(
    "environment-politics-spanish-1",
    "c2r-climate-vocab-web",
    "Red de palabras: clima y responsabilidad",
    "Mitigación, adaptación, huella de carbono, emisiones netas cero, transición justa: organiza el léxico ambiental.",
    "8 min",
    [
      sec(
        "Conceptos clave",
        [
          "La clave que ordena esta red es la pregunta «¿actúa sobre la causa o sobre los efectos?». Mitigación: reducir las causas (emisiones). Adaptación: prepararse para los efectos (diques, cultivos resistentes). Con esa pregunta puedes clasificar cualquier medida nueva. El resto de la red: huella de carbono (emisiones asociadas a una actividad); emisiones netas cero (equilibrio entre lo emitido y lo absorbido); transición justa (cambio de modelo sin dejar atrás a trabajadores y regiones); responsabilidad común pero diferenciada (todos deben actuar, pero no en igual medida).",
          "El patrón de formación: casi todos los procesos se nombran con -ción a partir de un verbo: mitigar → la mitigación, adaptar → la adaptación, y los verbos en -izar dan -ización: descarbonizar → la descarbonización, electrificar → la electrificación. Así puedes nominalizar: «hay que mitigar las emisiones» → «la mitigación de las emisiones».",
        ],
        [
          ["La mitigación exige reducir drásticamente las emisiones. (actúa sobre la causa)", "Mitigation requires drastically reducing emissions."],
          ["Las regiones mineras reclaman una transición justa.", "Mining regions demand a just transition."],
          ["Elevar las viviendas en zonas inundables es una medida de adaptación. (actúa sobre los efectos)", "Raising homes in flood-prone areas is an adaptation measure."],
        ],
        [
          mc(
            "Construir diques contra la subida del mar es una medida de…",
            ["adaptación", "mitigación", "emisión", "compensación fiscal"],
            0,
            "Construir diques prepara para los efectos del cambio climático: es adaptación. La mitigación reduce emisiones, la emisión es la causa del problema y la compensación fiscal es otra cosa."
          ),
          mc(
            "Aplica la pregunta «¿causa o efecto?»: instalar sistemas de alerta ante olas de calor es…",
            ["adaptación", "mitigación", "descarbonización", "huella de carbono"],
            0,
            "Una alerta ante olas de calor no reduce emisiones: protege a la población de un efecto del cambio climático. Por tanto es adaptación. Mitigar y descarbonizar actúan sobre la causa."
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
        "Mitigar es reducir las emisiones (la causa); adaptarse es prepararse para los efectos; la huella mide las emisiones de una actividad; y la transición justa no deja atrás a trabajadores ni regiones."
      ),
      fb("Completa.", "El objetivo es alcanzar las emisiones netas ___ en 2050.", "cero", "«Emisiones netas cero»: se emite tanto como se absorbe."),
      fb("Completa.", "Los países ricos tienen una responsabilidad común pero ___.", "diferenciada", "«Responsabilidad común pero diferenciada» es un principio de la diplomacia climática: todos responden, pero no por igual."),
      fb("Completa.", "Volar a menudo aumenta mucho tu ___ de carbono.", "huella", "La huella de carbono es la cantidad de gases de efecto invernadero que genera una persona o actividad."),
      toEs(
        "Plantar cultivos resistentes a la sequía es una medida de mitigación.",
        "Plantar cultivos resistentes a la sequía es una medida de adaptación.",
        "Los cultivos resistentes no reducen las emisiones: preparan la agricultura para un efecto del cambio climático, la sequía. Actúan sobre el efecto, así que es adaptación.",
        [],
        "Corrige la frase."
      ),
      mc(
        "¿Qué medida es de mitigación?",
        ["sustituir centrales de carbón por energía solar", "construir diques", "plantar cultivos resistentes a la sequía", "trasladar poblaciones costeras"],
        0,
        "Sustituir el carbón por energía solar reduce emisiones: es mitigación. Construir diques, cultivos resistentes a la sequía y trasladar poblaciones son medidas de adaptación a los efectos."
      ),
      toEs(
        "Es urgente descarbonizar el transporte de mercancías.",
        "La descarbonización del transporte de mercancías es urgente.",
        "Descarbonizar → la descarbonización (-izar → -ización). El sustantivo pasa a ser el sujeto y su complemento se une con «de».",
        [],
        "Transforma la frase con el sustantivo derivado del verbo como sujeto."
      ),
      toEs(
        "La ciudad quiere llegar en 2040 a un equilibrio entre lo que emite y lo que absorbe.",
        "La ciudad quiere alcanzar las emisiones netas cero en 2040.",
        "«Emisiones netas cero» es el término técnico para el equilibrio entre lo emitido y lo absorbido; con él se condensa toda la explicación.",
        ["La ciudad quiere llegar a las emisiones netas cero en 2040.", "La ciudad quiere alcanzar en 2040 las emisiones netas cero."],
        "Sustituye la explicación por el término técnico."
      ),
      toEs("Rich countries should bear a greater share of the responsibility.", "Los países ricos deberían asumir una mayor parte de la responsabilidad.", "«Asumir / cargar con una mayor parte de la responsabilidad»; el condicional «deberían» expresa recomendación.", ["Los países ricos deberían asumir una parte mayor de la responsabilidad.", "Los países ricos deberían cargar con una mayor parte de la responsabilidad."]),
      wo("La transición energética no puede dejar atrás a las regiones mineras.", "Transición justa: «dejar atrás a» alguien es abandonarlo en un cambio; «no puede» expresa una exigencia, no una imposibilidad.", "The energy transition cannot leave mining regions behind."),
    ]
  ),
  L(
    "environment-politics-spanish-2",
    "c2r-politics-polarization-register",
    "Contraste: lenguaje polarizado y lenguaje deliberativo",
    "«Los otros quieren destruir el país» frente a «Discrepamos en el diagnóstico»: detecta y neutraliza el discurso polarizador.",
    "8 min",
    [
      sec(
        "Marcas de polarización",
        [
          "La regla: el discurso polarizado ataca a las personas; el deliberativo discute las ideas. Marcas de polarización: nosotros/ellos absoluto, deshumanización del adversario, atribución de malas intenciones («quieren arruinarnos»), léxico bélico («enemigos», «traidores») y generalizaciones («todos los de ese partido»).",
          "Lenguaje deliberativo: separar ideas de personas, reconocer objetivos compartidos y precisar el desacuerdo («Coincidimos en el objetivo; discrepamos en los medios»). La gramática ayuda: «a nuestro juicio» marca opinión; el condicional («tendría efectos») presenta la crítica como previsión, no como acusación; y «no creemos que» + subjuntivo discrepa sin descalificar.",
        ],
        [
          ["Coincidimos en el objetivo; discrepamos en los medios.", "We agree on the goal; we disagree on the means."],
          ["✗ Son unos traidores a la patria.", "✗ They're traitors to the country."],
          ["No creemos que esta reforma resuelva el problema. (discrepar con subjuntivo, sin atacar)", "We don't believe this reform will solve the problem."],
        ],
        [
          mc(
            "¿Qué frase es deliberativa?",
            ["Compartimos la preocupación por el empleo, pero proponemos otra vía.", "Ellos quieren hundir el país.", "Son todos unos corruptos.", "El enemigo está en el Parlamento."],
            0,
            "El discurso deliberativo reconoce el objetivo compartido y discrepa en los medios. «Quieren hundir el país», «Son todos unos corruptos» y «El enemigo está en el Parlamento» atribuyen malas intenciones y polarizan."
          ),
          toEs(
            "Nuestros enemigos en el Parlamento votaron en contra de la ley.",
            "Nuestros adversarios en el Parlamento votaron en contra de la ley.",
            "«Enemigos» es léxico bélico: convierte un desacuerdo político en una guerra. «Adversarios» o «rivales» nombran a quien compite contigo sin deshumanizarlo.",
            ["Nuestros rivales en el Parlamento votaron en contra de la ley.", "Nuestros oponentes en el Parlamento votaron en contra de la ley."],
            "Cambia la etiqueta bélica por un término neutro."
          ),
        ]
      ),
    ],
    [
      fb("Neutraliza.", "Todos queremos un aire más limpio; donde no coincidimos es en los ___ para lograrlo.", "medios", "Separar fines y medios: reconocer el objetivo compartido (un aire más limpio) y situar el desacuerdo en cómo alcanzarlo."),
      { ...fb("Neutraliza.", "✗ Quieren arruinarnos. → ✓ Su propuesta, a nuestro ___, tendría efectos negativos.", "juicio", "«A nuestro juicio» presenta la crítica como opinión y no como juicio de intenciones."), altAnswers: ["parecer", "entender", "criterio"] },
      mc(
        "¿Qué rasgo es típico del discurso polarizador?",
        ["atribuir malas intenciones al adversario", "citar datos", "reconocer matices", "proponer alternativas"],
        0,
        "El discurso polarizador atribuye malas intenciones al adversario. Citar datos, reconocer matices y proponer alternativas son rasgos del discurso deliberativo."
      ),
      toEs(
        "El Gobierno quiere arruinar a los agricultores con esta ley.",
        "A nuestro juicio, esta ley perjudicaría a los agricultores.",
        "Se pasa de juzgar intenciones («quiere arruinar») a valorar efectos: «a nuestro juicio» marca opinión, el sujeto pasa a ser la ley (no las personas) y el condicional (perjudicaría) presenta la crítica como previsión.",
        ["A nuestro juicio, esta ley perjudicará a los agricultores.", "A nuestro juicio, esta ley tendría efectos negativos para los agricultores.", "A nuestro juicio, esta ley podría perjudicar a los agricultores."],
        "Reescribe la frase en lenguaje deliberativo, empezando por «A nuestro juicio»."
      ),
      ms(
        "¿Qué expresiones polarizan?",
        ["los enemigos del pueblo", "todos los de ese partido son iguales", "traidores", "discrepamos respetuosamente"],
        [0, 1, 2],
        "«Los enemigos del pueblo», «todos los de ese partido son iguales» y «traidores» etiquetan y polarizan. «Discrepamos respetuosamente» es una fórmula deliberativa, no polarizadora."
      ),
      toEs(
        "No creemos que su propuesta va a resolver el problema de la vivienda.",
        "No creemos que su propuesta vaya a resolver el problema de la vivienda.",
        "«No creer que» niega una creencia y exige subjuntivo: vaya a resolver. Es la fórmula deliberativa para discrepar: niega la eficacia de la propuesta, no la buena fe de quien la hace.",
        ["No creemos que su propuesta resuelva el problema de la vivienda."],
        "Corrige la frase."
      ),
      mc(
        "«El electorado se agrupa en bandos cada vez más cerrados» describe…",
        ["la polarización", "el consenso", "la abstención", "la mayoría absoluta"],
        0,
        "Que el electorado se agrupe en bandos cada vez más cerrados es la polarización. El consenso es lo contrario, la abstención es no votar y la mayoría absoluta es un resultado electoral."
      ),
      toEs("We share the goal, but we propose a different path.", "Compartimos el objetivo, pero proponemos otro camino.", "Lenguaje deliberativo: compartir el objetivo y proponer otro camino u otra vía.", ["Compartimos el objetivo, aunque proponemos otro camino.", "Compartimos el objetivo, pero proponemos una vía distinta.", "Compartimos el objetivo, pero proponemos otra vía."]),
      wo("A nuestro juicio, esa medida tendría consecuencias no deseadas.", "«A nuestro juicio» presenta la crítica como opinión, y el condicional (tendría) la formula como previsión, no como acusación.", "In our view, that measure would have unintended consequences."),
    ]
  ),
  L(
    "environment-politics-spanish-3",
    "c2r-politics-opinion-column",
    "Misión real: una columna de opinión equilibrada",
    "Escribe una columna sobre una ley de emisiones que afecta a una región minera: tesis, concesión, propuesta.",
    "9 min",
    [
      sec(
        "Estructura de la columna",
        [
          "Recuerda la regla: una columna convence cuando el lector siente que el autor ha pensado también en los argumentos contrarios. Por eso se construye así: titular con tesis; entrada con un caso humano («En Villablino, Juan lleva treinta años en la mina…»); tesis matizada («La descarbonización es inevitable, pero no puede hacerse a costa de…»); concesión al otro bando; datos; propuesta concreta (formación, inversión, plazos); cierre con imagen o pregunta.",
          "La gramática de cada pieza: la concesión afirma con indicativo («Es cierto que / Es innegable que las ayudas existen»), la propuesta pide con subjuntivo («Propongo / Exijo que se destine…»), y la tesis matizada une las dos caras con «pero» o «ahora bien».",
        ],
        [
          ["La descarbonización es inevitable, pero no puede hacerse a costa de los de siempre.", "Decarbonization is inevitable, but it cannot be done at the expense of the people who always pay."],
          ["Es cierto que el Gobierno ha previsto ayudas; ahora bien, un subsidio no es un proyecto de vida. (concesión + objeción)", "It's true the government has planned aid; that said, a subsidy is not a life plan."],
        ],
        [
          mc(
            "¿Qué entrada engancha más al lector?",
            ["Juan lleva treinta años bajando a la mina y teme que su hijo no pueda hacerlo.", "La ley 7/2024 regula las emisiones.", "Hoy hablaré de una ley.", "Hay muchas leyes en este país."],
            0,
            "Un caso humano concreto (Juan, la mina, su hijo) engancha al lector. Citar la ley por su número es árido, «Hoy hablaré de una ley» es plano y «Hay muchas leyes» no dice nada."
          ),
          toEs(
            "Las ayudas existen. No bastan para mantener vivos los pueblos.",
            "Es cierto que las ayudas existen, pero no bastan para mantener vivos los pueblos.",
            "La concesión reconoce el argumento contrario con «Es cierto que» + indicativo (existen) y «pero» introduce la objeción del columnista. Así la tesis gana credibilidad.",
            ["Es cierto que existen ayudas, pero no bastan para mantener vivos los pueblos.", "Es cierto que las ayudas existen; ahora bien, no bastan para mantener vivos los pueblos."],
            "Transforma las dos frases en una concesión con «Es cierto que…, pero…»."
          ),
        ]
      ),
    ],
    [
      fb("Tesis.", "Modernizar el puerto es necesario, pero no puede hacerse a ___ de los vecinos.", "costa", "«A costa de» = a expensas de, perjudicando a alguien. Es la bisagra de la tesis matizada: sí al objetivo, no a cualquier precio."),
      fb("Concesión.", "Es innegable que la ley ___ necesaria. (ser)", "es", "«Es innegable que» afirma una certeza, así que va con indicativo: es."),
      fb("Propuesta.", "Propongo que parte de los fondos se ___ a formar a los mineros. (destinar)", "destine", "«Proponer que» + subjuntivo; pasiva refleja concordada con «parte de los fondos»: se destine."),
      toEs(
        "Exijo que el Gobierno publica un calendario de cierre con plazos verificables.",
        "Exijo que el Gobierno publique un calendario de cierre con plazos verificables.",
        "«Exigir que» expresa una petición sobre otro sujeto y exige subjuntivo: publique. La propuesta de la columna siempre va en subjuntivo, la concesión en indicativo.",
        [],
        "Corrige la frase."
      ),
      mc(
        "¿Qué cierre es más eficaz?",
        ["¿Qué país queremos: uno que cierra minas o uno que abre futuros?", "Bueno, eso es todo.", "Ya veremos qué pasa.", "Fin de la columna."],
        0,
        "Un cierre eficaz deja una pregunta retórica con antítesis (cierra minas / abre futuros). «Bueno, eso es todo», «Ya veremos qué pasa» y «Fin de la columna» terminan sin fuerza."
      ),
      toEs(
        "Es innegable que la medida sea impopular en la comarca.",
        "Es innegable que la medida es impopular en la comarca.",
        "«Es innegable que» afirma una certeza y va con indicativo (es). El subjuntivo aparecería solo si se negara: «No es innegable que…» o con valoraciones como «Es lógico que sea…».",
        [],
        "Corrige la frase."
      ),
      ms(
        "¿Qué elementos tiene una columna equilibrada?",
        ["tesis clara", "concesión al otro punto de vista", "propuesta concreta", "insultos al Gobierno"],
        [0, 1, 2],
        "Una columna equilibrada tiene una tesis clara, concede algo al otro punto de vista y hace una propuesta concreta. Los insultos al Gobierno restan credibilidad."
      ),
      toEs("It is undeniable that the law is necessary, but it must be fair.", "Es innegable que la ley es necesaria, pero debe ser justa.", "Concesión («Es innegable que» + indicativo) + tesis introducida por «pero» o «aunque».", ["Es indudable que la ley es necesaria, pero tiene que ser justa.", "Es innegable que la ley es necesaria, aunque debe ser justa.", "Es innegable que la ley es necesaria, pero tiene que ser justa."]),
      wo("Propongo que parte de los fondos se destine a la formación de los trabajadores.", "«Proponer que» + subjuntivo (se destine); en la pasiva refleja el verbo concuerda con el núcleo «parte», en singular.", "I propose that part of the funds go to training workers."),
    ]
  ),
  L(
    "environment-politics-spanish-3",
    "c2r-politics-spiral-grammar",
    "Repaso en espiral: gramática del discurso político",
    "Pasiva refleja, subjuntivo de valoración, condicional de rumor y nominalización en noticias políticas.",
    "8 min",
    [
      sec(
        "Recursos del periodismo político",
        [
          "Recuerda las reglas que ya conoces, ahora al servicio de la noticia política. Condicional de rumor para lo no confirmado (frecuente en prensa, pero la RAE y la Fundéu lo desaconsejan en textos cuidados): «El ministro habría dimitido esta mañana». Pasiva refleja, que concuerda con el sujeto: «Se aprobó la ley», «Se aprobaron las medidas». Nominalización, que condensa: «Cuando se aprobó la reforma…» → «Tras la aprobación de la reforma…».",
          "Valoración con subjuntivo: «Es preocupante que se reduzca…». Estilo indirecto, que retrocede los tiempos cuando el verbo introductor está en pasado: «No habrá recortes» → «La portavoz aseguró que no habría recortes».",
        ],
        [
          ["Según fuentes del partido, el líder habría presentado su dimisión.", "According to party sources, the leader has reportedly resigned."],
          ["Es preocupante que se reduzca la inversión en ciencia.", "It is worrying that investment in science is being cut."],
          ["Se aprobaron los presupuestos por un solo voto. (pasiva refleja en plural)", "The budget was passed by a single vote."],
        ],
        [
          mc(
            "«El ministro habría dimitido» significa…",
            ["según se dice, sin confirmar, ha dimitido", "el ministro dimitiría si pudiera", "el ministro dimitió seguro", "el ministro no dimitirá"],
            0,
            "El condicional compuesto de rumor presenta un hecho no confirmado: según se dice, ha dimitido. No expresa un deseo o una hipótesis («dimitiría si pudiera»), ni certeza («seguro»), ni futuro."
          ),
          toEs(
            "Se aprobó las nuevas medidas por amplia mayoría.",
            "Se aprobaron las nuevas medidas por amplia mayoría.",
            "En la pasiva refleja el verbo concuerda con el sujeto paciente, que aquí es plural (las nuevas medidas): se aprobaron. El singular solo vale con un sujeto singular: «se aprobó la ley».",
            ["Las nuevas medidas se aprobaron por amplia mayoría."],
            "Corrige la frase."
          ),
        ]
      ),
    ],
    [
      { ...fb("Rumor.", "Según fuentes no oficiales, el Gobierno ___ un acuerdo. (alcanzar, condicional compuesto)", "habría alcanzado", "El condicional de rumor (habría alcanzado) presenta un dato no confirmado, típico de la prensa; en textos cuidados se prefiere «ha alcanzado» con «según fuentes»."), altAnswers: ["ha alcanzado"] },
      fb("Valoración.", "Es preocupante que ___ la abstención. (aumentar)", "aumente", "Una valoración («Es preocupante que») exige subjuntivo: aumente."),
      fb("Estilo indirecto.", "«No habrá recortes.» → Aseguró que no ___ recortes.", "habría", "Con introductor en pasado, el futuro pasa a condicional: «habrá» → «habría»."),
      toEs(
        "«Bajaremos los impuestos a las familias.»",
        "La portavoz aseguró que bajarían los impuestos a las familias.",
        "Con el verbo introductor en pasado (aseguró), el futuro del estilo directo pasa a condicional (bajaremos → bajarían) y la primera persona del plural pasa a tercera.",
        ["La portavoz aseguró que iban a bajar los impuestos a las familias."],
        "Cambia la cita a estilo indirecto, empezando por «La portavoz aseguró que…»."
      ),
      fb("Nominalización.", "Cuando se aprobó la ley… → Tras la ___ de la ley…", "aprobación", "Nominalización del verbo aprobar: «tras la aprobación» condensa «cuando se aprobó»."),
      toEs(
        "Cuando se cerró la central térmica, cientos de personas perdieron su empleo.",
        "El cierre de la central térmica dejó a cientos de personas sin empleo.",
        "Nominalizar condensa: «cuando se cerró» → «el cierre», que pasa a ser sujeto de un verbo de consecuencia (dejó a… sin empleo). Es el estilo habitual del titular y la entradilla.",
        ["El cierre de la central térmica provocó la pérdida de cientos de empleos.", "El cierre de la central térmica supuso la pérdida de cientos de empleos.", "Con el cierre de la central térmica, cientos de personas perdieron su empleo."],
        "Transforma la frase con una nominalización como sujeto."
      ),
      mc(
        "¿Por qué usa el periodista el condicional de rumor?",
        ["para no presentar como seguro un dato no confirmado", "por cortesía", "por error", "para expresar deseo"],
        0,
        "El condicional de rumor evita presentar como seguro un dato no confirmado: es habitual en la prensa, aunque la RAE y la Fundéu lo desaconsejan en textos cuidados. No es cortesía, ni un error, ni expresa deseo."
      ),
      toEs(
        "Es preocupante que los jóvenes no van a votar.",
        "Es preocupante que los jóvenes no vayan a votar.",
        "Las valoraciones («es preocupante que», «es lamentable que») exigen subjuntivo aunque el hecho sea real: no vayan a votar.",
        [],
        "Corrige la frase."
      ),
      toEs("The minister has reportedly resigned.", "El ministro habría dimitido.", "Condicional de rumor (habría dimitido) o «Al parecer» + indicativo: dato no confirmado.", ["Al parecer, el ministro ha dimitido.", "Según fuentes, el ministro habría dimitido."]),
      wo("Según fuentes del Gobierno, la reforma se aprobaría antes del verano.", "Condicional de rumor (se aprobaría): presenta como no confirmado lo que dicen las fuentes; frecuente en prensa, pero se evita en textos cuidados («al parecer, se aprobará»).", "According to government sources, the reform would be approved before summer."),
    ]
  ),
  L(
    "philosophy-abstract-concepts-1",
    "c2r-philosophy-free-will-debate",
    "Laboratorio de diálogo: libre albedrío y determinismo",
    "Dos amigos debaten si somos responsables de nuestros actos: comprende los argumentos y responde con precisión conceptual.",
    "8 min",
    [
      sec(
        "Posturas",
        [
          "Recuerda las posturas: determinismo (todo suceso es efecto necesario de causas anteriores); libre albedrío (capacidad de elegir entre alternativas); compatibilismo (libertad y determinismo son compatibles si actuamos según nuestros deseos sin coacción); incompatibilismo (si todo está determinado, no hay libertad real). Lo que está en juego es la responsabilidad moral.",
          "La gramática del debate: concede con «aunque» + subjuntivo («Aunque nuestras decisiones tengan causas, …»), argumenta sobre hipótesis con «si» + imperfecto de subjuntivo («Si todo estuviera determinado, …») y corrige una interpretación con «No es que» + subjuntivo, «es que» + indicativo («No es que niegue tu libertad; es que dudo de que exista»).",
        ],
        [
          ["Si todo está determinado, ¿puede alguien ser responsable de sus actos?", "If everything is determined, can anyone be responsible for their actions?"],
          ["Para el compatibilismo, ser libre es actuar sin coacción.", "For compatibilism, being free means acting without coercion."],
          ["No es que justifique lo que hizo; es que intento entenderlo. (no es que + subjuntivo)", "It's not that I'm justifying what he did; I'm trying to understand it."],
        ],
        [
          mc(
            "«Somos libres si actuamos según nuestros deseos, aunque estos estén causados.» Es la postura…",
            ["compatibilista", "incompatibilista", "idealista", "nihilista"],
            0,
            "Defender que somos libres aunque nuestros deseos tengan causas es la postura compatibilista. El incompatibilismo niega esa compatibilidad, y el idealismo y el nihilismo tratan otras cuestiones."
          ),
          toEs(
            "No es que niego tu libertad; es que dudo de que exista.",
            "No es que niegue tu libertad; es que dudo de que exista.",
            "«No es que» rechaza una interpretación y exige subjuntivo (niegue); la parte que corrige, «es que», va en indicativo (dudo).",
            [],
            "Corrige la frase."
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
        "El determinismo afirma que todo tiene una causa necesaria, el libre albedrío que podemos elegir y el compatibilismo concilia ambos: somos libres si actuamos sin coacción aunque haya causas."
      ),
      fb("Completa.", "Si todo estuviera determinado, nadie ___ responsable de nada. (ser, condicional)", "sería", "Condicional irreal: «Si + imperfecto de subjuntivo, condicional» (sería)."),
      fb("Completa.", "La ___ (fuerza externa que obliga) anula la libertad.", "coacción", "La coacción es la presión o fuerza externa que obliga a actuar y anula la libertad."),
      mc(
        "«—Mi crianza lo explica todo. —Explicar no es lo mismo que justificar.» La segunda réplica…",
        ["distingue causa y responsabilidad moral", "acepta el determinismo total", "cambia de tema", "es una falacia"],
        0,
        "La réplica distingue entre explicar (la causa) y justificar (la responsabilidad moral). No acepta el determinismo total, no cambia de tema y no es una falacia, sino una distinción conceptual."
      ),
      toEs(
        "Su infancia fue muy dura. Eso no justifica lo que hizo.",
        "Aunque su infancia fuera muy dura, eso no justifica lo que hizo.",
        "«Aunque» + subjuntivo concede el hecho pero le quita peso en el argumento: aunque fuera dura, no justifica. Con indicativo (aunque fue) se afirma el hecho como información nueva; también es correcto, pero menos propio de la réplica filosófica.",
        ["Aunque su infancia fuese muy dura, eso no justifica lo que hizo.", "Aunque su infancia haya sido muy dura, eso no justifica lo que hizo.", "Aunque su infancia fue muy dura, eso no justifica lo que hizo."],
        "Transforma las dos frases en una concesión con «aunque»."
      ),
      mc(
        "Laura dice: «Si todo está determinado, castigar a alguien no tiene ningún sentido». ¿Qué respuesta daría un compatibilista?",
        ["Tiene sentido si la persona actuó por su propia voluntad y sin coacción, aunque su voluntad tenga causas.", "Tienes razón: nadie debería responder de nada.", "Las causas no existen, así que todos somos libres.", "Castigar siempre tiene sentido, haya o no libertad."],
        0,
        "El compatibilista mantiene la responsabilidad porque la libertad, para él, es actuar sin coacción. Darle la razón a Laura es incompatibilismo; negar las causas o defender el castigo sin libertad no responde a su argumento."
      ),
      ms(
        "¿Qué términos pertenecen a este debate?",
        ["causalidad", "responsabilidad moral", "coacción", "inflación"],
        [0, 1, 2],
        "Causalidad, responsabilidad moral y coacción son términos del debate sobre el libre albedrío. La inflación pertenece a la economía."
      ),
      toEs("Explaining an action is not the same as justifying it.", "Explicar una acción no es lo mismo que justificarla.", "Distinción filosófica: «Explicar no es lo mismo que justificar»; el pronombre concuerda (acción → justificarla).", ["Explicar un acto no es lo mismo que justificarlo."]),
      wo("Aunque nuestras decisiones tengan causas, seguimos siendo responsables de ellas.", "«Aunque» + subjuntivo (tengan) concede algo sin darlo por relevante; «seguir + gerundio» (seguimos siendo) expresa que la responsabilidad continúa. Es la tesis compatibilista.", "Even if our decisions have causes, we are still responsible for them."),
    ]
  ),
  L(
    "philosophy-abstract-concepts-2",
    "c2r-philosophy-abstract-nouns",
    "Red de palabras: sustantivos abstractos",
    "Esencia, apariencia, sustancia, trascendencia, inmanencia, a priori, a posteriori: el léxico de la filosofía.",
    "8 min",
    [
      sec(
        "Pares conceptuales",
        [
          "Los pares: esencia (lo que algo es) / accidente (lo que puede variar). Apariencia / realidad. Idealismo (la realidad depende de la mente) / materialismo (la realidad es materia). A priori (independiente de la experiencia) / a posteriori (basado en la experiencia). Inmanente (dentro del mundo) / trascendente (más allá). Ontología (estudio del ser), epistemología (del conocimiento), ética.",
          "El patrón que fabrica los sustantivos abstractos: adjetivo en -ente / -ante → sustantivo en -encia / -ancia (trascendente → la trascendencia; contingente → la contingencia; relevante → la relevancia); adjetivo en -ivo / -al → sustantivo en -idad (subjetivo → la subjetividad; causal → la causalidad); y -logía significa «estudio de» (ontología, epistemología, teleología). Con estos sufijos puedes nombrar la cualidad de casi cualquier adjetivo.",
        ],
        [
          ["Las matemáticas se consideran un conocimiento a priori.", "Mathematics is considered a priori knowledge."],
          ["La epistemología estudia cómo conocemos.", "Epistemology studies how we know."],
          ["La contingencia de un hecho significa que podría no haber ocurrido. (contingente → contingencia)", "The contingency of an event means it might not have happened."],
        ],
        [
          mc(
            "«Ningún soltero está casado» es un conocimiento…",
            ["a priori", "a posteriori", "empírico", "sensorial"],
            0,
            "«Ningún soltero está casado» es verdadero por definición, sin necesidad de experiencia: a priori. «A posteriori», «empírico» y «sensorial» se refieren al conocimiento basado en la experiencia."
          ),
          mc(
            "Con el patrón -logía («estudio de»), ¿qué estudia la teleología (del griego telos, «fin»)?",
            ["los fines o propósitos hacia los que tiende algo", "las telecomunicaciones", "los orígenes del universo", "la conducta moral"],
            0,
            "-logía = estudio de; telos = fin: la teleología estudia los fines o propósitos. No tiene que ver con las telecomunicaciones (tele- = lejos), ni con el origen del universo (cosmología), ni con la moral (ética)."
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
        "Cada rama tiene su objeto: la ontología estudia el ser, la epistemología el conocimiento, la ética la conducta moral y la estética la belleza y el arte."
      ),
      fb("Completa.", "Para el ___, la realidad última es la materia.", "materialismo", "Para el materialismo, la realidad última es la materia (frente al idealismo)."),
      fb("Completa.", "Saber que llueve mirando por la ventana es un conocimiento a ___.", "posteriori", "Un conocimiento basado en la experiencia es a posteriori; lo contrario es a priori."),
      toEs(
        "Saber que el agua hierve a cien grados porque lo hemos medido es un conocimiento a priori.",
        "Saber que el agua hierve a cien grados porque lo hemos medido es un conocimiento a posteriori.",
        "Si el conocimiento procede de una medición, depende de la experiencia: es a posteriori. A priori es lo que se sabe sin experiencia, por la sola razón o por definición.",
        [],
        "Corrige la frase."
      ),
      { ...fb("Completa.", "No confundas la apariencia con la ___.", "realidad", "Apariencia / realidad es un par clásico de la filosofía: lo que parece frente a lo que es. También vale el par apariencia / esencia."), en: "Don't confuse appearance with [reality].", altAnswers: ["esencia"] },
      toEs(
        "Le preocupa que el juicio del tribunal no sea objetivo.",
        "Le preocupa la falta de objetividad del juicio del tribunal.",
        "Adjetivo en -ivo → sustantivo en -idad: objetivo → la objetividad. Al nominalizar, «que no sea objetivo» se convierte en «la falta de objetividad» y la subordinada desaparece.",
        ["Le preocupa la falta de objetividad en el juicio del tribunal."],
        "Transforma la frase con el sustantivo abstracto derivado de «objetivo»."
      ),
      mc(
        "En filosofía, «lo trascendente» se refiere a…",
        ["lo que está más allá del mundo sensible", "lo que es muy importante", "lo que ocurre a diario", "lo material"],
        0,
        "En sentido filosófico, lo trascendente está más allá del mundo sensible. No es lo que es muy importante (sentido coloquial de «trascendental»), ni lo cotidiano, ni lo material."
      ),
      toEs(
        "Para la teología clásica, Dios es trascendente al mundo.",
        "La teología clásica afirma la trascendencia de Dios respecto al mundo.",
        "Adjetivo en -ente → sustantivo en -encia: trascendente → la trascendencia. Nominalizar permite convertir la propiedad en el objeto de un verbo de pensamiento (afirmar, defender, negar).",
        ["La teología clásica afirma la trascendencia de Dios con respecto al mundo.", "La teología clásica defiende la trascendencia de Dios respecto al mundo."],
        "Transforma la frase con el sustantivo abstracto, empezando por «La teología clásica afirma…»."
      ),
      toEs("Epistemology studies the limits of knowledge.", "La epistemología estudia los límites del conocimiento.", "La epistemología es la rama de la filosofía que estudia el conocimiento y sus límites.", ["La epistemología estudia los límites del saber."]),
      wo("Para el idealismo, la realidad depende de la mente que la percibe.", "Idealismo: la realidad «depende de» la mente; el pronombre «la» (la percibe) retoma «la realidad» y va delante del verbo conjugado.", "For idealism, reality depends on the mind that perceives it."),
    ]
  ),
  L(
    "philosophy-abstract-concepts-3",
    "c2r-philosophy-argument-analysis",
    "Detective de textos: analizar un argumento filosófico",
    "Identifica premisas, conclusión y posibles objeciones en un breve razonamiento.",
    "9 min",
    [
      sec(
        "El argumento",
        [
          "Recuerda la regla: para analizar un argumento, busca primero la conclusión (suele ir tras un conector como «por tanto», «en consecuencia», «luego»); lo que la sostiene son las premisas. Luego pregunta si las premisas son verdaderas y si la conclusión se sigue de ellas: ahí se encuentran las objeciones. Las premisas hipotéticas se formulan con condicional irreal: si + imperfecto de subjuntivo, condicional.",
          "«Si nuestras decisiones fueran completamente aleatorias, no serían nuestras. Si estuvieran completamente determinadas, tampoco lo serían. Por tanto, la libertad no puede consistir ni en el azar ni en la necesidad absoluta.» Premisa 1, premisa 2, conclusión. Objeción posible: ¿existen otras opciones además del azar y la necesidad?",
        ],
        [
          ["Por tanto, la libertad no puede consistir ni en el azar ni en la necesidad. (conclusión)", "Therefore, freedom cannot consist in either chance or necessity."],
        ],
        [
          mc(
            "¿Cuál es la conclusión?",
            ["La libertad no consiste ni en el azar ni en la necesidad absoluta.", "Las decisiones son aleatorias.", "Todo está determinado.", "No existe la libertad."],
            0,
            "La conclusión la introduce «por tanto»: la libertad no es ni azar ni necesidad absoluta. «Las decisiones son aleatorias» y «Todo está determinado» son las opciones que el argumento rechaza, y «No existe la libertad» lo contradice."
          ),
          mc(
            "Otro argumento: «Todo lo que se puede predecir está determinado; la conducta humana se puede predecir; luego la conducta humana está determinada». ¿Qué parte es la conclusión?",
            ["la conducta humana está determinada", "todo lo que se puede predecir está determinado", "la conducta humana se puede predecir", "no tiene conclusión"],
            0,
            "«Luego» introduce la conclusión, como «por tanto». Las dos primeras oraciones son las premisas que la sostienen."
          ),
        ]
      ),
    ],
    [
      mc(
        "«Si nuestras decisiones fueran aleatorias, no serían nuestras» es…",
        ["una premisa condicional", "la conclusión", "una objeción", "un ejemplo"],
        0,
        "«Si… fueran aleatorias, no serían nuestras» es una premisa condicional que apoya la conclusión. No es la conclusión (no va tras «por tanto»), ni una objeción, ni un ejemplo."
      ),
      mc(
        "La objeción «¿existen otras opciones?» acusa al argumento de…",
        ["posible falso dilema", "ad hominem", "circularidad", "argumento de autoridad"],
        0,
        "Preguntar si existen otras opciones sugiere que el argumento solo contempla dos: posible falso dilema. No ataca a la persona (ad hominem), no denuncia circularidad ni se apoya en una autoridad."
      ),
      toEs(
        "El argumento comete un ad hominem, porque solo contempla dos opciones: el azar o la necesidad.",
        "El argumento comete un falso dilema, porque solo contempla dos opciones: el azar o la necesidad.",
        "Reducir las posibilidades a dos cuando podría haber más es un falso dilema. El ad hominem es otra falacia: atacar a la persona en lugar de sus razones.",
        ["El argumento incurre en un falso dilema, porque solo contempla dos opciones: el azar o la necesidad."],
        "Corrige el análisis."
      ),
      fb("Completa (condicional irreal).", "Si nuestras decisiones ___ aleatorias, no serían nuestras. (ser)", "fueran", "Condicional irreal: si + imperfecto de subjuntivo (fueran) + condicional (serían)."),
      fb("Completa (conector).", "Por ___, la libertad no puede ser puro azar.", "tanto", "«Por tanto» introduce la conclusión de un razonamiento."),
      toEs(
        "Nadie elige sus propios deseos; sin embargo, nadie es plenamente libre.",
        "Nadie elige sus propios deseos; por tanto, nadie es plenamente libre.",
        "La segunda parte se deduce de la primera, así que pide un conector de conclusión (por tanto, en consecuencia, por consiguiente). «Sin embargo» indica contraste y rompe la lógica del razonamiento.",
        ["Nadie elige sus propios deseos; en consecuencia, nadie es plenamente libre.", "Nadie elige sus propios deseos; por consiguiente, nadie es plenamente libre.", "Nadie elige sus propios deseos; luego nadie es plenamente libre.", "Nadie elige sus propios deseos; por lo tanto, nadie es plenamente libre."],
        "Cambia el conector: la segunda parte es la conclusión de la primera."
      ),
      ms(
        "¿Qué conectores introducen una conclusión?",
        ["por tanto", "en consecuencia", "luego", "sin embargo"],
        [0, 1, 2],
        "«Por tanto», «en consecuencia» y «luego» introducen una conclusión. «Sin embargo» expresa contraste."
      ),
      toEs("If everything were chance, nobody could plan anything.", "Si todo fuera azar, nadie podría planear nada.", "Premisa hipotética con condicional irreal: si + imperfecto de subjuntivo (fuera / fuese) + condicional (podría). La doble negación (nadie… nada) es obligatoria en español.", ["Si todo fuese azar, nadie podría planear nada.", "Si todo fuera azar, nadie podría planificar nada.", "Si todo fuese azar, nadie podría planificar nada."]),
      wo("Por tanto, la libertad requiere algo más que la simple ausencia de causas.", "«Por tanto» introduce la conclusión del razonamiento y suele ir seguido de coma; «luego» también puede ser consecutivo («pienso, luego existo»), pero es menos habitual a principio de oración.", "Therefore freedom requires more than the mere absence of causes."),
    ]
  ),
  L(
    "philosophy-abstract-concepts-3",
    "c2r-philosophy-mission-essay-paragraph",
    "Misión real: un párrafo de ensayo filosófico",
    "Escribe un párrafo sobre si la tecnología nos hace más libres: tesis, distinción conceptual, ejemplo y objeción.",
    "9 min",
    [
      sec(
        "El párrafo filosófico",
        [
          "Recuerda la regla: un párrafo filosófico avanza en cuatro movimientos, y cada uno tiene su fórmula. Tesis o pregunta: «Cabe preguntarse si…» (interrogativa indirecta con si + indicativo). Distinción conceptual: «Conviene distinguir entre A y B». Ejemplo que ilustra la distinción. Objeción y respuesta: «Podría objetarse que…; sin embargo, …».",
          "Tu tema: ¿la tecnología amplía nuestra libertad o solo nuestras opciones? Una distinción útil: libertad negativa (ausencia de obstáculos) frente a libertad positiva (capacidad de autodeterminarse).",
        ],
        [
          ["Conviene distinguir entre tener opciones y ser libre.", "It's worth distinguishing between having options and being free."],
          ["Podría objetarse que nadie nos obliga a usar el móvil; sin embargo, … (objeción + respuesta)", "It could be objected that nobody forces us to use our phones; however, …"],
        ],
        [
          mc(
            "«Libertad negativa» significa…",
            ["ausencia de obstáculos externos", "libertad mala", "falta de libertad", "libertad de expresión"],
            0,
            "En la distinción clásica de Berlin, la libertad negativa es la ausencia de obstáculos externos. No es una libertad «mala», ni la falta de libertad, ni la libertad de expresión en concreto."
          ),
          toEs(
            "Cabe preguntarse si la tecnología nos haga más libres.",
            "Cabe preguntarse si la tecnología nos hace más libres.",
            "Tras «preguntarse si» va una interrogativa indirecta, que se construye con indicativo: nos hace. El subjuntivo no aparece detrás de este «si».",
            ["Cabe preguntarse si la tecnología nos vuelve más libres."],
            "Corrige la frase."
          ),
        ]
      ),
    ],
    [
      fb("Tesis.", "Cabe ___ si las redes sociales amplían de verdad nuestra libertad.", "preguntarse", "«Cabe preguntarse si» plantea la cuestión del párrafo en registro académico, sin afirmar todavía la tesis."),
      fb("Distinción.", "Conviene ___ entre libertad negativa y positiva.", "distinguir", "«Distinguir entre» dos conceptos; «conviene» + infinitivo es una recomendación académica."),
      fb("Objeción.", "Podría ___ que los algoritmos solo nos ayudan a elegir.", "objetarse", "«Podría objetarse que» anticipa una objeción con se impersonal y condicional."),
      mc(
        "Ejemplo que ilustra la tesis:",
        ["Un algoritmo que decide qué noticias vemos amplía opciones, pero puede reducir nuestra autonomía.", "Los móviles actuales tienen más memoria que los ordenadores de hace veinte años.", "La tecnología avanza cada año más deprisa.", "Muchas personas usan el móvil antes de dormir."],
        0,
        "El algoritmo que amplía opciones pero reduce la autonomía ilustra la tesis sobre tecnología y libertad. Las otras frases hablan de tecnología, pero no dicen nada sobre la libertad: la memoria de los móviles, la velocidad del progreso o un hábito nocturno."
      ),
      toEs(
        "Algunos dirán que las redes sociales nos conectan. En realidad, a menudo nos aíslan.",
        "Podría objetarse que las redes sociales nos conectan; sin embargo, a menudo nos aíslan.",
        "La fórmula del ensayo convierte la voz ajena en objeción impersonal («Podría objetarse que» + indicativo) y responde con un conector de contraste («sin embargo»).",
        ["Podría objetarse que las redes sociales nos conectan; no obstante, a menudo nos aíslan.", "Podría objetarse que las redes sociales nos conectan; sin embargo, en realidad a menudo nos aíslan."],
        "Transforma las dos frases con la fórmula «Podría objetarse que…; sin embargo, …»."
      ),
      mc(
        "¿Qué conector responde a la objeción?",
        ["sin embargo", "asimismo", "por ejemplo", "en primer lugar"],
        0,
        "Responder a una objeción exige un conector de contraste: «sin embargo». «Asimismo» añade, «por ejemplo» ejemplifica y «en primer lugar» ordena."
      ),
      toEs("It is worth distinguishing between information and knowledge.", "Conviene distinguir entre información y conocimiento.", "Distinción conceptual: «Conviene / Cabe distinguir entre A y B», la misma fórmula sirve para cualquier par de conceptos.", ["Conviene diferenciar entre información y conocimiento.", "Cabe distinguir entre información y conocimiento.", "Conviene distinguir entre la información y el conocimiento."]),
      { ...fb("¿Cómo se dicen en español las palabras en negrita?", "Tener acceso a todos los datos no ___ necesariamente comprenderlos.", "implica", "«No implica necesariamente» niega una consecuencia automática sin descartarla: es la forma de matizar una tesis."), en: "Having access to all the data doesn't necessarily [mean] understanding it.", altAnswers: ["supone", "significa", "equivale a"] },
      wo("Tener más opciones no implica necesariamente ser más libre.", "Tesis matizada: «no implica necesariamente» niega una relación automática entre opciones y libertad sin descartarla del todo; los infinitivos funcionan como sustantivos.", "Having more options does not necessarily mean being freer."),
    ]
  ),
  L(
    "psychology-emotions-1",
    "c2r-psych-ambivalence-dissonance",
    "Contraste: ambivalencia y disonancia cognitiva",
    "Querer y odiar a la vez frente a pensar una cosa y hacer otra: dos conceptos que el hablante culto distingue.",
    "8 min",
    [
      sec(
        "La regla: sentimientos contra sentimientos, o creencias contra actos",
        [
          "Ambivalencia: coexisten sentimientos opuestos hacia lo mismo («Siento admiración y resentimiento hacia mi hermana»). No hay nada que justificar: los dos sentimientos son verdaderos. Disonancia cognitiva: lo que uno cree choca con lo que hace, y ese malestar empuja a justificarse («Sé que fumar mata, pero mi abuelo fumó y vivió 90 años»). Por eso la disonancia viene acompañada de mecanismos de defensa: racionalización, negación, proyección.",
          "La racionalización tiene una fórmula muy reconocible: «No es que + subjuntivo, es que + indicativo». La explicación que se rechaza va en subjuntivo porque no se afirma; la excusa que se ofrece, en indicativo, porque se presenta como un hecho.",
        ],
        [
          ["Siento una mezcla de alivio y culpa.", "I feel a mixture of relief and guilt. (dos sentimientos → ambivalencia)"],
          ["Se justificaba para reducir la disonancia.", "He justified himself to reduce the dissonance. (creencia contra acto → justificación)"],
          ["No es que sea perezoso, es que no tengo tiempo.", "It's not that I'm lazy, it's that I don't have time. (racionalización: sea / tengo)"],
        ],
        [
          mc(
            "«Sé que debería ahorrar, pero me lo merezco» ilustra…",
            ["disonancia cognitiva y racionalización", "ambivalencia afectiva", "melancolía", "nostalgia"],
            0,
            "Justificar una conducta que contradice lo que uno sabe («me lo merezco») es disonancia cognitiva con racionalización. No hay sentimientos opuestos hacia algo (ambivalencia), ni melancolía ni nostalgia."
          ),
          mc(
            "Aplica la regla. Un médico que recomienda dormir ocho horas trabaja hasta las tres de la madrugada y se dice que «los médicos aguantamos más». ¿Qué es?",
            ["disonancia cognitiva, reducida con una excusa", "ambivalencia hacia su profesión", "proyección", "nostalgia de su juventud"],
            0,
            "Choca lo que cree (hay que dormir) con lo que hace (no duerme), y la excusa reduce el malestar: disonancia. No es ambivalencia, porque no hay dos sentimientos opuestos hacia algo, ni proyección, porque no atribuye nada propio a otro."
          ),
        ]
      ),
    ],
    [
      mc(
        "«Echo de menos a mi ex y a la vez me alegro de que se fuera» es…",
        ["ambivalencia", "disonancia", "negación", "proyección"],
        0,
        "Sentir a la vez emociones opuestas hacia alguien es ambivalencia. La disonancia es un conflicto entre creencias y actos, la negación rechaza la realidad y la proyección atribuye a otros lo propio."
      ),
      fb("Completa.", "Buscar excusas razonables para una conducta es ___. (racionalizar, sustantivo)", "racionalización", "La racionalización es buscar razones aceptables para justificar una conducta: el verbo racionalizar da el sustantivo en -ción, que nombra el proceso."),
      fb("Completa.", "Atribuir a otros los propios sentimientos se llama ___.", "proyección", "La proyección es atribuir a otros los propios sentimientos o deseos: proyectar → proyección."),
      fb("Completa.", "El día de su boda sintió una extraña ___ de alegría y pena por su padre ausente.", "mezcla", "«Una mezcla de» + dos emociones opuestas es la forma natural de nombrar la ambivalencia sin tecnicismos."),
      mt(
        "Relaciona el mecanismo con su definición.",
        [
          ["negación", "no reconocer una realidad dolorosa"],
          ["racionalización", "justificar con razones aparentes"],
          ["proyección", "atribuir a otros lo propio"],
        ],
        "La negación rechaza la realidad dolorosa, la racionalización la justifica con razones aparentes y la proyección atribuye a otros lo que es propio."
      ),
      toEs(
        "No me falta fuerza de voluntad; el trabajo me estresa demasiado.",
        "No es que me falte fuerza de voluntad, es que el trabajo me estresa demasiado.",
        "La fórmula de la racionalización: la explicación rechazada va en subjuntivo tras «No es que» (falte), porque no se afirma; la excusa va en indicativo tras «es que» (estresa).",
        ["No es que me falte fuerza de voluntad; es que el trabajo me estresa demasiado.", "No es que me falte voluntad, es que el trabajo me estresa demasiado."],
        "Transforma con «No es que…, es que…»."
      ),
      toEs(
        "No es que no la quiero, es que necesito espacio.",
        "No es que no la quiera, es que necesito espacio.",
        "Lo que se descarta con «No es que» no se afirma y va en subjuntivo: quiera. La razón verdadera, tras «es que», sí va en indicativo (necesito).",
        [],
        "Corrige la frase."
      ),
      toEs(
        "Sabe que mentir está mal, pero se justifica diciendo que todos lo hacen: un caso claro de ambivalencia.",
        "Sabe que mentir está mal, pero se justifica diciendo que todos lo hacen: un caso claro de disonancia cognitiva.",
        "Una creencia (mentir está mal) choca con una conducta (miente) y la persona se justifica: disonancia cognitiva. La ambivalencia sería sentir a la vez dos emociones opuestas hacia algo, sin necesidad de excusas.",
        ["Sabe que mentir está mal, pero se justifica diciendo que todos lo hacen: un caso claro de disonancia."],
        "Corrige la frase."
      ),
      mc(
        "«Si suspendí no fue por no estudiar: el profesor me tiene manía.» ¿Qué mecanismos combina?",
        ["negación de la causa y proyección", "ambivalencia y nostalgia", "represión y desapego", "resiliencia y sanación"],
        0,
        "Niega la causa real (no estudió) y coloca en otro una hostilidad que puede ser suya (el profesor «me tiene manía»): negación y proyección. Ninguna de las otras parejas describe una defensa frente a la disonancia."
      ),
      toEs("On her first day in the new job she felt a mixture of pride and vertigo.", "El primer día en el nuevo trabajo sintió una mezcla de orgullo y vértigo.", "Ambivalencia sin tecnicismos: «sentir una mezcla de» + dos emociones. El indefinido (sintió) narra una reacción puntual de ese día.", ["En su primer día en el nuevo trabajo sintió una mezcla de orgullo y vértigo.", "El primer día en el trabajo nuevo sintió una mezcla de orgullo y vértigo.", "En su primer día en el nuevo empleo sintió una mezcla de orgullo y vértigo."]),
      wo("Para reducir la disonancia, se convenció de que no había otra opción.", "Racionalización: «convencerse de que» + indicativo (había) muestra cómo la persona se justifica para reducir la disonancia.", "To reduce the dissonance, he convinced himself there was no other option."),
    ]
  ),
  L(
    "psychology-emotions-2",
    "c2r-psych-nuanced-emotions",
    "Red de palabras: matices de la tristeza y el anhelo",
    "Melancolía, nostalgia, añoranza, morriña, desazón, pesadumbre, anhelo: elige la palabra exacta.",
    "8 min",
    [
      sec(
        "Una emoción, muchos matices",
        [
          "Tristeza: general. Melancolía: tristeza difusa y persistente, sin causa clara. Nostalgia: tristeza por un tiempo pasado. Añoranza: pena por la ausencia de alguien o algo. Morriña (Galicia, coloquial): nostalgia de la tierra. Desazón: inquietud, malestar indefinido. Pesadumbre: tristeza pesada por un hecho. Anhelo: deseo intenso de algo.",
          "Cada sustantivo tiene familia, y la familia cambia la construcción. El sustantivo lleva «de» (añoranza de su tierra, anhelo de paz), pero el verbo es transitivo y la pierde: añorar su tierra, anhelar la paz. Los estados se dicen con adjetivo: melancólico, nostálgico, apesadumbrado, desasosegado. Saber la familia te permite variar la frase sin perder precisión.",
        ],
        [
          ["Siento nostalgia de los veranos de mi infancia.", "I feel nostalgic for the summers of my childhood. (sustantivo + de)"],
          ["Una desazón que no sabía explicar.", "An unease she couldn't explain."],
          ["Añora su pueblo; anhela volver.", "He misses his village; he longs to go back. (verbos transitivos, sin «de»)"],
        ],
        [
          mc(
            "Tristeza por un tiempo pasado que no volverá:",
            ["nostalgia", "desazón", "anhelo", "euforia"],
            0,
            "La nostalgia es la tristeza por un tiempo pasado que no volverá. La desazón es inquietud, el anhelo es un deseo intenso y la euforia es una alegría desbordante."
          ),
          mc(
            "Aplica la familia. ¿Qué adjetivo describe a alguien que siente pesadumbre?",
            ["apesadumbrado", "pesado", "pesaroso de", "pesadumbroso"],
            0,
            "De pesadumbre sale «apesadumbrado» (con a- y el sufijo de participio), igual que de «sosiego» sale «desasosegado». «Pesado» significa otra cosa (que pesa o que aburre) y «pesadumbroso» no se usa."
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
        "La melancolía es una tristeza difusa y persistente, la añoranza duele por una ausencia concreta, la desazón es inquietud indefinida y el anhelo es un deseo intenso."
      ),
      { ...fb("Completa.", "Los gallegos emigrados sentían ___ de su tierra.", "morriña", "«Morriña» es la nostalgia de la tierra natal, palabra de origen gallego."), altAnswers: ["nostalgia", "añoranza"] },
      fb("Completa.", "Vivía con el ___ de volver a verla algún día. (deseo intenso)", "anhelo", "El anhelo es un deseo intenso de algo, a menudo difícil de conseguir; como sustantivo, lleva «de» + infinitivo."),
      { ...fb("Completa.", "Una profunda ___ lo invadió tras la noticia. (tristeza pesada)", "pesadumbre", "La pesadumbre es una tristeza pesada y profunda, de registro culto."), altAnswers: ["aflicción", "congoja"] },
      mc(
        "«Sentía una tristeza sin motivo aparente cada otoño.» ¿Qué emoción describe?",
        ["melancolía", "añoranza de alguien concreto", "euforia", "rencor"],
        0,
        "Una tristeza sin causa clara es melancolía. La añoranza se refiere a alguien o algo concreto, la euforia es lo contrario y el rencor es resentimiento."
      ),
      toEs(
        "Siente una gran añoranza de su tierra.",
        "Añora mucho su tierra.",
        "El verbo de la familia, añorar, es transitivo: lo añorado es complemento directo y no lleva «de» (la preposición pertenecía al sustantivo).",
        ["Añora muchísimo su tierra.", "Añora su tierra.", "Echa mucho de menos su tierra."],
        "Reescribe con el verbo de la misma familia."
      ),
      toEs(
        "Tenía el anhelo de recuperar la paz perdida.",
        "Anhelaba recuperar la paz perdida.",
        "«Tener el anhelo de + infinitivo» se condensa en «anhelar + infinitivo», sin preposición. El tiempo (tenía → anhelaba) se mantiene en imperfecto.",
        [],
        "Reescribe con el verbo de la misma familia."
      ),
      toEs(
        "Desde que se mudó a la ciudad, añora de su pueblo y de sus amigos.",
        "Desde que se mudó a la ciudad, añora su pueblo y a sus amigos.",
        "«Añorar» es transitivo: no lleva «de». Lo añorado es complemento directo, y si es de persona lleva «a» (a sus amigos). La «de» solo va con el sustantivo: «añoranza de su pueblo».",
        ["Desde que se mudó a la ciudad, añora su pueblo y sus amigos."],
        "Corrige la frase."
      ),
      toEs(
        "Tras el entierro, toda la familia estaba muy pesadumbre.",
        "Tras el entierro, toda la familia estaba muy apesadumbrada.",
        "«Estar» necesita un adjetivo: «apesadumbrado/a», que concuerda con «la familia». «Pesadumbre» es el sustantivo («sentía pesadumbre»).",
        ["Tras el entierro, toda la familia estaba apesadumbrada."],
        "Corrige la frase."
      ),
      toEs("She felt a strange unease she couldn't explain.", "Sentía una extraña desazón que no sabía explicar.", "La desazón es una inquietud o malestar difuso; «inquietud» es un sinónimo más neutro.", ["Sentía una desazón extraña que no sabía explicar.", "Sentía una extraña inquietud que no sabía explicar."]),
      wo("La añoranza de su país crecía con cada Navidad lejos de casa.", "«Añoranza de» + lo que falta (su país); el sujeto abstracto va delante y el imperfecto (crecía) marca un proceso que se repite.", "Her longing for her country grew with each Christmas away from home."),
    ]
  ),
  L(
    "psychology-emotions-3",
    "c2r-psych-therapy-dialogue",
    "Laboratorio de diálogo: poner nombre a lo que se siente",
    "Una sesión de terapia: el paciente pasa de lo vago a lo preciso con ayuda de preguntas abiertas.",
    "8 min",
    [
      sec(
        "Preguntas que ayudan a precisar",
        [
          "Recuerda la regla: cada intervención tiene su gramática. Preguntar abierto: «¿Cómo describirías eso que sientes?», «¿Cuándo aparece?». Reflejar: «Parece que + indicativo» devuelve lo que el paciente ha dicho como algo real («Parece que te sientes dividido»). Validar: «Es comprensible que + subjuntivo» valora la emoción sin juzgarla («Es comprensible que te sientas así»). Y el paciente precisa corrigiéndose: «No es exactamente tristeza; es más bien una especie de vacío».",
          "Al reflejar, el terapeuta cambia la persona: lo que el paciente dice en primera persona («me siento…») vuelve en segunda («te sientes…»).",
        ],
        [
          ["No es exactamente enfado; es más bien decepción.", "It's not exactly anger; it's more like disappointment."],
          ["Parece que te sientes dividido.", "It sounds like you feel torn. (reflejo: parece que + indicativo)"],
          ["Es comprensible que tengas miedo.", "It's understandable that you're afraid. (validación: subjuntivo)"],
        ],
        [
          mc(
            "¿Qué pregunta es abierta?",
            ["¿Cómo describirías lo que sientes?", "¿Estás triste, sí o no?", "¿Te enfadaste?", "¿Lloraste?"],
            0,
            "«¿Cómo describirías lo que sientes?» es una pregunta abierta que invita a elaborar. «¿Estás triste, sí o no?», «¿Te enfadaste?» y «¿Lloraste?» son cerradas: se responden con sí o no."
          ),
          mc(
            "El paciente dice: «Me da rabia que mi hermano no me llame, pero a la vez me alivia.» ¿Qué responde el terapeuta para reflejar?",
            ["Parece que sientes dos cosas a la vez hacia tu hermano.", "Parece que sientas dos cosas a la vez hacia tu hermano.", "Deberías llamarlo tú.", "¿Te enfadaste con él, sí o no?"],
            0,
            "Reflejar es devolver lo dicho como algo real, con «Parece que + indicativo» (sientes). «Sientas» es un subjuntivo que no corresponde aquí; aconsejar o cerrar la pregunta no refleja."
          ),
        ]
      ),
    ],
    [
      fb("Precisa.", "No es exactamente tristeza; es más ___ una especie de vacío.", "bien", "«Más bien» introduce una corrección matizada de lo anterior."),
      fb("Valida.", "Es comprensible que te ___ así. (sentir)", "sientas", "Una valoración («Es comprensible que») exige subjuntivo: sientas."),
      { ...fb("Refleja.", "Parece que te sientes ___ entre dos lealtades. (con sentimientos opuestos)", "dividido", "«Sentirse dividido» = tener sentimientos opuestos entre dos opciones."), altAnswers: ["dividida"] },
      mc(
        "«Siento que por un lado la admiro y por otro me molesta.» El terapeuta responde:",
        ["Parece que sientes ambivalencia hacia ella.", "Eso está mal.", "Deberías quererla.", "Olvídalo."],
        0,
        "El terapeuta nombra la emoción sin juzgar: ambivalencia. «Eso está mal» juzga, y «Deberías quererla» u «Olvídalo» imponen en vez de ayudar."
      ),
      ms(
        "¿Qué intervenciones ayudan al paciente?",
        ["preguntas abiertas", "reflejar lo que dice", "validar la emoción", "juzgar sus sentimientos"],
        [0, 1, 2],
        "Las preguntas abiertas, reflejar lo que dice y validar la emoción ayudan al paciente. Juzgar sus sentimientos lo cierra y no ayuda."
      ),
      toEs(
        "Me siento dividida entre mi madre y mi pareja.",
        "Parece que te sientes dividida entre tu madre y tu pareja.",
        "Para reflejar, el terapeuta devuelve lo dicho en segunda persona (me siento → te sientes; mi → tu) y lo presenta como real con «Parece que + indicativo».",
        ["Parece que te sientes dividida entre tu mamá y tu pareja."],
        "Transforma en un reflejo del terapeuta, empezando por «Parece que…»."
      ),
      toEs(
        "Tienes miedo de volver a confiar en alguien.",
        "Es comprensible que tengas miedo de volver a confiar en alguien.",
        "La validación valora la emoción, y la valoración «Es comprensible que» exige subjuntivo: tienes → tengas.",
        ["Es comprensible que tengas miedo a volver a confiar en alguien."],
        "Transforma en una validación con «Es comprensible que…»."
      ),
      toEs(
        "Es normal que tienes ganas de llorar después de una noticia así.",
        "Es normal que tengas ganas de llorar después de una noticia así.",
        "«Es normal que» valida la emoción, no informa de un hecho: va con subjuntivo (tengas), aunque las ganas de llorar sean reales.",
        [],
        "Corrige la frase."
      ),
      toEs("It's not exactly jealousy; it's more like fear of being left out.", "No son exactamente celos; es más bien miedo a quedarme fuera.", "«No es exactamente X; es más bien Y» corrige con precisión. Con «celos», que es plural, el verbo concuerda: «no son exactamente celos».", ["No son celos exactamente; es más bien miedo a quedarme fuera.", "No son exactamente celos; es más bien miedo a quedarme al margen.", "No son exactamente celos; es más bien miedo de quedarme fuera.", "No son exactamente celos; más bien es miedo a quedarme fuera."]),
      wo("Por un lado la admiro y, por otro, me cuesta perdonarla.", "«Por un lado…, por otro…» presenta dos sentimientos opuestos (ambivalencia); «la» va delante del verbo conjugado (la admiro) y unido al infinitivo (perdonarla).", "On the one hand I admire her, and on the other I find it hard to forgive her."),
    ]
  ),
  L(
    "psychology-emotions-3",
    "c2r-psych-spiral-literary",
    "Repaso en espiral: emociones en la literatura",
    "Describe estados de ánimo de personajes con léxico preciso, figuras retóricas y estilo indirecto libre.",
    "9 min",
    [
      sec(
        "La regla: mostrar, no decir",
        [
          "Decir: «Estaba triste». Mostrar: «Dejó que el café se enfriara sin probarlo. ¿Para qué levantarse, si nadie la esperaba?» (gesto + indirecto libre). Metáfora emocional: «Una niebla le pesaba en el pecho». La literatura prefiere sugerir la emoción, porque el lector que la deduce la siente más que el que la lee nombrada.",
          "Gramática del estilo indirecto libre: el pensamiento del personaje se cuenta sin «pensó que», en tercera persona y con los tiempos del relato. El presente pasa a imperfecto, el pretérito perfecto a pluscuamperfecto y el futuro a condicional: «¿Por qué no me ha llamado?» → «¿Por qué no la había llamado?». Los gestos, con «sin + infinitivo» y «quedarse + gerundio».",
        ],
        [
          ["Dejó que el café se enfriara sin probarlo.", "She let the coffee go cold without tasting it. (dejar que + subjuntivo)"],
          ["Una niebla le pesaba en el pecho.", "A fog weighed on her chest. (metáfora)"],
          ["¿Volvería algún día? Quizá no la había querido nunca.", "Would he ever come back? Perhaps he had never loved her. (indirecto libre: condicional y pluscuamperfecto)"],
        ],
        [
          mc(
            "¿Qué frase muestra la emoción en lugar de decirla?",
            ["Guardó la carta sin abrirla y se quedó mirando la lluvia.", "Estaba muy triste.", "Sentía tristeza.", "Era una persona triste."],
            0,
            "Mostrar la emoción es sugerirla con un gesto significativo (guardar la carta sin abrirla, mirar la lluvia). «Estaba muy triste», «Sentía tristeza» y «Era una persona triste» nombran la emoción directamente: la dicen, no la muestran."
          ),
          mc(
            "Aplica la regla. El personaje piensa: «Mañana se lo diré». ¿Cómo queda en estilo indirecto libre?",
            ["Mañana se lo diría.", "Mañana se lo dirá.", "Pensó que mañana se lo diría.", "Mañana se lo dijo."],
            0,
            "En indirecto libre el futuro del pensamiento pasa a condicional (diría) y desaparece el verbo introductor. «Dirá» conserva el tiempo del pensamiento, «Pensó que…» es estilo indirecto (con verbo introductor) y «dijo» narra un hecho, no un pensamiento."
          ),
        ]
      ),
    ],
    [
      fb("Indirecto libre.", "¿Para qué ___, si nadie la esperaba? (salir de la cama, infinitivo pronominal)", "levantarse", "«¿Para qué + infinitivo?» es una pregunta deliberativa, sin sujeto ni tiempo, que reproduce el pensamiento del personaje sin verbo introductor; el pronombre va unido al infinitivo: levantarse."),
      fb("Metáfora.", "La ciudad le parecía una ___ de cristal donde nadie oía sus gritos. (lugar cerrado del que no se puede salir)", "jaula", "Metáfora emocional: una jaula de cristal sugiere aislamiento (se ve todo, pero no se puede salir ni ser oído).", "Lugar cerrado donde se encierra a los pájaros."),
      fb("Léxico.", "La ___ del otoño la volvía silenciosa. (tristeza difusa)", "melancolía", "La melancolía es una tristeza difusa y duradera, a menudo sin causa clara."),
      mc(
        "«¿Y si nunca volvía? ¿Y si aquella había sido la última vez?» expresa…",
        ["angustia en estilo indirecto libre", "alegría", "narración objetiva", "un diálogo directo"],
        0,
        "Las preguntas angustiadas en tercera persona y pasado reproducen el pensamiento del personaje: estilo indirecto libre. No expresan alegría, no son narración objetiva y, sin comillas ni guiones, tampoco diálogo directo."
      ),
      ms(
        "¿Qué técnicas muestran emociones?",
        ["gestos significativos", "estilo indirecto libre", "metáforas", "nombrar la emoción con un adjetivo genérico"],
        [0, 1, 2],
        "Los gestos significativos, el estilo indirecto libre y las metáforas muestran emociones. Nombrarla con un adjetivo genérico es «decir», no «mostrar»."
      ),
      toEs(
        "«¿Por qué no me ha llamado?», pensó Marta.",
        "¿Por qué no la había llamado?",
        "En estilo indirecto libre desaparece el verbo introductor (pensó), la primera persona pasa a tercera (me → la) y el pretérito perfecto retrocede a pluscuamperfecto (ha llamado → había llamado).",
        ["¿Por qué no le había llamado?"],
        "Cambia a estilo indirecto libre."
      ),
      toEs(
        "«Ya no me queda nadie en esta ciudad», pensó él.",
        "Ya no le quedaba nadie en aquella ciudad.",
        "Indirecto libre: sin «pensó», en tercera persona (me → le), con el presente retrocedido a imperfecto (queda → quedaba) y el deíctico alejado (esta → aquella). Mantener «esta ciudad» también se acepta si el narrador está cerca del personaje.",
        ["Ya no le quedaba nadie en esa ciudad.", "Ya no le quedaba nadie en esta ciudad."],
        "Cambia a estilo indirecto libre."
      ),
      toEs(
        "Dejó que el té se enfrió sobre la mesa y se quedó mirar por la ventana.",
        "Dejó que el té se enfriara sobre la mesa y se quedó mirando por la ventana.",
        "Dos errores de construcción: «dejar que» exige subjuntivo (se enfriara o se enfriase) y «quedarse» va con gerundio para expresar una acción que se prolonga (se quedó mirando).",
        ["Dejó que el té se enfriase sobre la mesa y se quedó mirando por la ventana."],
        "Corrige la frase."
      ),
      toEs("He put the photo away without looking at it and kept staring at the wall.", "Guardó la foto sin mirarla y se quedó mirando la pared.", "Mostrar, no decir: «sin + infinitivo» con el pronombre unido (sin mirarla) y «quedarse + gerundio» (se quedó mirando) sugieren la emoción con gestos.", ["Guardó la foto sin mirarla y se quedó mirando a la pared.", "Guardó la fotografía sin mirarla y se quedó mirando la pared.", "Guardó la foto sin mirarla y se quedó contemplando la pared.", "Guardó la foto sin mirarla y se quedó con la mirada fija en la pared."]),
      wo("Guardó la carta sin abrirla y se quedó mirando la lluvia.", "Mostrar, no decir: «sin + infinitivo + pronombre» (sin abrirla) y «quedarse + gerundio» (se quedó mirando) sugieren la emoción con gestos.", "She put the letter away unopened and stood watching the rain."),
    ]
  ),
  L(
    "art-film-literature-criticism-1",
    "c2r-critic-plot-character",
    "Red de palabras: trama, personaje, verosimilitud",
    "Peripecia, desenlace, arco del personaje, deus ex machina, verosimilitud: el vocabulario del crítico literario.",
    "8 min",
    [
      sec(
        "Léxico del análisis narrativo",
        [
          "Trama / argumento. Planteamiento, nudo, desenlace. Peripecia (giro de la acción). Clímax. Arco del personaje (su transformación). Personaje plano (sin evolución) / redondo (complejo). Verosimilitud: coherencia interna que hace creíble la historia. Deus ex machina: solución forzada que cae del cielo. Narrador omnisciente / en primera persona / testigo.",
          "La red tiene una lógica: los términos se definen por oposición. Plano se opone a redondo (¿evoluciona el personaje?); omnisciente, a testigo (¿cuánto sabe el narrador?); verosímil, a inverosímil (¿respeta la historia sus propias reglas?). Para valorar, la crítica usa «resultar + adjetivo»: «el final resulta forzado». Y recuerda: ante una palabra que empieza por i-, la conjunción «y» pasa a «e» (forzado e inverosímil).",
        ],
        [
          ["El desenlace resulta inverosímil: un deus ex machina en toda regla.", "The ending is implausible: a deus ex machina through and through."],
          ["El arco de la protagonista está muy bien trazado.", "The protagonist's arc is very well drawn."],
        ],
        [
          mc(
            "Un personaje que no cambia a lo largo de la obra es…",
            ["plano", "redondo", "omnisciente", "verosímil"],
            0,
            "Un personaje que no cambia es plano. El redondo evoluciona y es complejo, «omnisciente» se aplica al narrador y «verosímil» a la credibilidad."
          ),
          mc(
            "Aplica la oposición. El narrador cuenta lo que ve desde su ventana, pero no sabe qué piensan los vecinos a los que observa. Es un narrador…",
            ["testigo", "omnisciente", "plano", "redondo"],
            0,
            "Un narrador que presencia los hechos sin acceso a la mente de los demás es testigo; el omnisciente lo sabe todo, incluidos los pensamientos. «Plano» y «redondo» califican personajes, no narradores."
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
        "La peripecia es un giro de la acción; la verosimilitud, la credibilidad interna; el deus ex machina, una solución forzada que llega desde fuera; y el arco, la transformación del personaje."
      ),
      { ...fb("Completa.", "El ___ llega en el capítulo final, cuando todo se resuelve.", "desenlace", "El desenlace es la parte final de la trama en la que se resuelve el conflicto."), altAnswers: ["final"] },
      fb("Completa.", "El narrador ___ conoce los pensamientos de todos los personajes.", "omnisciente", "El narrador omnisciente lo sabe todo, también los pensamientos de los personajes."),
      fb("Completa.", "La novela pierde ___ cuando el héroe sobrevive a todo sin explicación. (credibilidad)", "verosimilitud", "La verosimilitud es la apariencia de verdad que hace creíble una ficción."),
      mc(
        "«Un tío rico desconocido muere y deja al protagonista la herencia justo a tiempo.» Es…",
        ["un deus ex machina", "un arco del personaje", "una prolepsis", "un personaje redondo"],
        0,
        "Una solución externa, forzada e inesperada que resuelve el conflicto es un deus ex machina. No es un arco del personaje (evolución), ni una prolepsis (anticipación), ni un personaje redondo."
      ),
      toEs(
        "El desenlace es verosímil y coherente con el resto de la novela.",
        "El desenlace es inverosímil e incoherente con el resto de la novela.",
        "El prefijo in- invierte los dos adjetivos (inverosímil, incoherente), y la conjunción «y» pasa a «e» porque la palabra siguiente empieza por el sonido i.",
        ["El desenlace resulta inverosímil e incoherente con el resto de la novela."],
        "Cambia la valoración a su contraria con el prefijo in-."
      ),
      toEs(
        "Ana abrió la carta y sintió que el suelo se hundía bajo sus pies.",
        "Abrí la carta y sentí que el suelo se hundía bajo mis pies.",
        "Al pasar a narrador en primera persona, los verbos de la protagonista pasan a «yo» (abrí, sentí) y el posesivo a «mis». «Se hundía» no cambia: su sujeto es el suelo.",
        [],
        "Cambia a narrador en primera persona."
      ),
      toEs(
        "La protagonista es un personaje redondo: no evoluciona en toda la novela.",
        "La protagonista es un personaje plano: no evoluciona en toda la novela.",
        "Un personaje que no evoluciona es plano; «redondo» designa justo lo contrario, un personaje complejo que cambia a lo largo de la obra.",
        [],
        "Corrige la frase."
      ),
      toEs(
        "El narrador omnisciente solo sabe lo que ve desde la ventana del bar.",
        "El narrador testigo solo sabe lo que ve desde la ventana del bar.",
        "Un narrador limitado a lo que presencia es testigo; el omnisciente, por definición, lo sabe todo, también lo que no ve.",
        [],
        "Corrige la frase."
      ),
      toEs("The ending feels forced and implausible.", "El desenlace resulta forzado e inverosímil.", "Crítica literaria: «resultar + adjetivo» (forzado, inverosímil) para valorar el desenlace; «y» pasa a «e» ante «inverosímil».", ["El final resulta forzado e inverosímil.", "El desenlace parece forzado e inverosímil."]),
      wo("La protagonista es un personaje redondo con un arco muy bien construido.", "«Personaje redondo» = complejo y que evoluciona; «con un arco muy bien construido» añade la valoración, con «muy bien» delante del participio.", "The protagonist is a round character with a very well-built arc."),
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
        [
          "Antes de leer, la pista del detective: en una reseña, cada término técnico va unido a un efecto. El crítico no dice solo «planos largos», dice qué hacen («obligan al espectador a mirar»). Busca siempre esa pareja recurso + efecto, y fíjate en los intensificadores que convierten un dato en juicio: «hasta la exasperación», «en exceso».",
          "«La directora apuesta por planos fijos y largos que obligan al espectador a mirar. La fotografía, de tonos fríos, subraya el aislamiento de la protagonista, y el montaje, pausado hasta la exasperación, solo se acelera en el último tercio. La puesta en escena, casi teatral, puede resultar contenida en exceso para algunos; para otros, es su mayor virtud.»",
        ],
        [
          ["Planos fijos y largos.", "Long, static shots."],
          ["El montaje solo se acelera en el último tercio.", "The editing only speeds up in the final third."],
        ],
        [
          mc(
            "¿Qué función cumplen los tonos fríos?",
            ["subrayar el aislamiento de la protagonista", "mostrar el verano", "abaratar la película", "confundir al espectador"],
            0,
            "Los tonos fríos de la fotografía subrayan el aislamiento de la protagonista. No sugieren verano (eso serían tonos cálidos), no abaratan la película ni buscan confundir."
          ),
          mc(
            "Aplica la pista a otra reseña: «Los primeros planos, insistentes hasta la incomodidad, nos encierran con el asesino». ¿Qué recurso y qué efecto se describen?",
            ["Los primeros planos producen una cercanía incómoda con el asesino.", "El montaje rápido acelera la acción.", "La fotografía cálida suaviza la historia.", "El vestuario sitúa la época."],
            0,
            "El recurso es el primer plano y el efecto, la incomodidad de estar «encerrados» con el asesino; «hasta la incomodidad» convierte el dato en juicio. La reseña no habla de montaje, de color ni de vestuario."
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
        "No confundas montaje (cómo se ordenan y encadenan los planos) con encuadre (qué entra en cada plano); la puesta en escena es lo que se coloca ante la cámara y la fotografía, cómo se ilumina y colorea."
      ),
      mc(
        "«Pausado hasta la exasperación» es una valoración…",
        ["ambivalente, con matiz crítico", "totalmente positiva", "técnica neutra", "sobre el guion"],
        0,
        "«Pausado» podría ser un elogio, pero «hasta la exasperación» añade un matiz crítico: es una valoración ambivalente. No es totalmente positiva ni neutra, y se refiere al ritmo, no al guion."
      ),
      mc(
        "¿Cómo presenta el crítico la opinión dividida?",
        ["para algunos… para otros…", "sin duda alguna…", "todo el mundo piensa…", "nadie cree…"],
        0,
        "La fórmula «para algunos… para otros…» presenta una opinión dividida. «Sin duda alguna», «todo el mundo piensa» y «nadie cree» expresan unanimidad."
      ),
      fb("Completa según el texto.", "La directora ___ por planos fijos y largos. (elegir con decisión)", "apuesta", "«Apostar por» algo es elegirlo con decisión como opción estética."),
      fb("Completa.", "Un plano ___ (plano largo rodado en una sola toma, sin cortes) acompaña a la protagonista por el pasillo.", "secuencia", "Plano secuencia = plano largo rodado en una sola toma, sin cortes."),
      toEs(
        "El montaje es tan lento que exaspera.",
        "El montaje es lento hasta la exasperación.",
        "«Adjetivo + hasta + sustantivo» intensifica y valora a la vez: el rasgo llega a un extremo que molesta. Es la forma condensada que prefiere la reseña frente a «tan… que».",
        ["El montaje es pausado hasta la exasperación."],
        "Transforma con «hasta + sustantivo»."
      ),
      toEs(
        "Unos críticos la consideran fría; otros críticos la consideran contenida.",
        "Para algunos, es fría; para otros, contenida.",
        "La fórmula «para algunos…; para otros…» presenta la opinión dividida sin repetir verbos: la coma tras «otros» sustituye al verbo omitido (elipsis).",
        ["Para algunos es fría; para otros, contenida.", "Para unos, es fría; para otros, contenida.", "Para algunos, es fría; para otros, es contenida."],
        "Reescribe con «para algunos…; para otros…»."
      ),
      toEs(
        "El director apuesta en el blanco y negro para contar el presente.",
        "El director apuesta por el blanco y negro para contar el presente.",
        "«Apostar por» algo es elegirlo con decisión; con «en» la expresión no tiene ese sentido.",
        [],
        "Corrige la frase."
      ),
      toEs(
        "El plano secuencia, lleno de cortes rápidos, marea al espectador.",
        "El montaje, lleno de cortes rápidos, marea al espectador.",
        "Un plano secuencia es, por definición, una toma sin cortes; los cortes rápidos son cosa del montaje.",
        [],
        "Corrige la frase: el término técnico no corresponde."
      ),
      toEs("The cold palette underlines how lonely the city is.", "La paleta fría subraya la soledad de la ciudad.", "Recurso + efecto: «subrayar» es el verbo típico de la crítica para decir qué consigue un recurso; «la soledad de la ciudad» condensa «how lonely the city is».", ["La paleta fría subraya lo sola que está la ciudad.", "La paleta fría subraya lo solitaria que es la ciudad.", "La paleta de colores fríos subraya la soledad de la ciudad."]),
      wo("La fotografía de tonos fríos subraya la soledad de la protagonista.", "«De tonos fríos» complementa a «fotografía»; «subrayar» (realzar) es el verbo típico de la crítica para decir qué efecto produce un recurso.", "The cold-toned cinematography underlines the protagonist's loneliness."),
    ]
  ),
  L(
    "art-film-literature-criticism-3",
    "c2r-critic-evaluative-adjectives",
    "Contraste: la escala de la valoración crítica",
    "De «fallida» a «magistral», pasando por «irregular», «estimable» y «notable»: gradúa tu juicio con precisión.",
    "8 min",
    [
      sec(
        "La regla: gradúa el juicio, no lo grites",
        [
          "Negativos: fallida, prescindible, plana, pretenciosa, efectista. Intermedios: irregular (con altibajos), correcta, estimable (con méritos modestos), desigual. Positivos: notable, sólida, lograda, conmovedora. Superlativos: magistral, deslumbrante, imprescindible, una obra maestra.",
          "El crítico rara vez usa un adjetivo solo: lo gradúa con un matizador. «Pese a + sustantivo o infinitivo» concede un defecto antes del elogio («Pese a sus defectos…», «Pese a ser irregular…»); «sin llegar a + infinitivo» marca el escalón que la obra no alcanza («Sin llegar a ser magistral…»); «con todo» cierra recuperando el juicio. «Pese a» nunca va seguido de «que» + sustantivo: «pese a que» solo introduce un verbo conjugado.",
        ],
        [
          ["Una película irregular, pero con momentos de gran belleza.", "An uneven film, but with moments of great beauty."],
          ["Pese a sus defectos, es una novela estimable.", "Despite its flaws, it's a worthy novel. (pese a + sustantivo)"],
        ],
        [
          mc(
            "«Pretenciosa» critica una obra que…",
            ["aspira a más de lo que consigue, con afectación", "es muy barata", "es demasiado corta", "está bien hecha"],
            0,
            "«Pretenciosa» critica una obra que aspira a más de lo que consigue y lo hace con afectación. No se refiere al precio ni a la duración, y es lo contrario de «bien hecha»."
          ),
          mc(
            "Aplica la escala. Un ensayo con buenas ideas, bien escrito, pero sin nada que deslumbre. ¿Qué adjetivo es el más justo?",
            ["estimable", "magistral", "fallido", "deslumbrante"],
            0,
            "Méritos reales pero modestos: «estimable». «Magistral» y «deslumbrante» están en lo más alto de la escala, y «fallido» en lo más bajo."
          ),
        ]
      ),
    ],
    [
      mc(
        "Ordena de peor a mejor: (a) notable (b) fallida (c) magistral (d) correcta",
        ["b, d, a, c", "c, a, d, b", "d, b, c, a", "a, b, c, d"],
        0,
        "De peor a mejor: fallida < correcta < notable < magistral. Las demás ordenaciones colocan «magistral» o «notable» por debajo de adjetivos más flojos."
      ),
      fb("Completa.", "Es una obra ___: tiene momentos brillantes y otros muy flojos. (con altibajos)", "irregular", "«Irregular» valora una obra con altibajos, con partes buenas y otras flojas."),
      { ...fb("Completa.", "Pese a sus ___, la película emociona.", "defectos", "«Pese a sus defectos» es una concesión que matiza una valoración positiva."), altAnswers: ["fallos", "limitaciones", "carencias"] },
      fb("Completa.", "Un final ___ que busca el impacto fácil. (que abusa de los efectos)", "efectista", "«Efectista» critica lo que busca el impacto fácil con efectos, sin fondo."),
      ms(
        "¿Qué adjetivos son elogiosos?",
        ["magistral", "lograda", "conmovedora", "prescindible"],
        [0, 1, 2],
        "«Magistral», «lograda» y «conmovedora» son elogiosos. «Prescindible» es negativo: la obra no aporta nada."
      ),
      toEs(
        "No es una película magistral, pero es muy estimable.",
        "Sin llegar a ser magistral, la película es muy estimable.",
        "«Sin llegar a + infinitivo» marca el escalón que la obra no alcanza y deja el elogio moderado (muy estimable) como juicio principal.",
        ["Sin llegar a ser magistral, es una película muy estimable."],
        "Reescribe con «Sin llegar a…»."
      ),
      toEs(
        "Aunque es irregular, la novela tiene momentos brillantes.",
        "Pese a ser irregular, la novela tiene momentos brillantes.",
        "«Pese a» + infinitivo concede el defecto cuando el sujeto es el mismo en las dos partes (la novela): no hace falta verbo conjugado.",
        ["A pesar de ser irregular, la novela tiene momentos brillantes."],
        "Transforma con «Pese a»."
      ),
      toEs(
        "Pese a que sus defectos, la película consigue emocionar.",
        "Pese a sus defectos, la película consigue emocionar.",
        "«Pese a» va directamente con un sustantivo (sus defectos); «pese a que» solo introduce un verbo conjugado («pese a que tiene defectos»).",
        ["Pese a que tiene defectos, la película consigue emocionar.", "A pesar de sus defectos, la película consigue emocionar."],
        "Corrige la frase."
      ),
      toEs(
        "Una obra magistral, con altibajos y momentos muy flojos.",
        "Una obra irregular, con altibajos y momentos muy flojos.",
        "Una obra con altibajos y momentos flojos es «irregular» (o «desigual»); «magistral» está en lo más alto de la escala y contradice el resto de la frase.",
        ["Una obra desigual, con altibajos y momentos muy flojos."],
        "Corrige la frase: el adjetivo no encaja con la descripción."
      ),
      toEs("Despite its flaws, it's a moving film.", "Pese a sus defectos, es una película conmovedora.", "Valoración matizada: «Pese a / A pesar de sus defectos» + elogio.", ["A pesar de sus defectos, es una película conmovedora.", "Pese a sus fallos, es una película conmovedora."]),
      wo("Sin llegar a ser una obra maestra, la novela es notable.", "«Sin llegar a + infinitivo» concede que la obra no alcanza el máximo y prepara un elogio moderado («notable»): así se gradúa el juicio.", "Without being a masterpiece, the novel is remarkable."),
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
        [
          "Recuerda la regla de la crítica: contexto, síntesis sin destripar, análisis con recurso + efecto y valoración graduada. 1) Entrada que sitúa la obra (autor, género, contexto). 2) Síntesis del argumento sin destripar el final (sin spoilers). 3) Análisis de uno o dos aspectos (fotografía, estructura, personajes, estilo). 4) Valoración con matices («pese a…», «con todo…»). 5) Recomendación: «Imprescindible para…», «Solo para incondicionales de…».",
          "La entrada suele situar la obra en la trayectoria del autor con «Tras + sustantivo»: «Tras su ópera prima, la directora vuelve con…».",
        ],
        [
          ["Sin desvelar el final, basta decir que…", "Without revealing the ending, suffice it to say that…"],
          ["Imprescindible para los amantes del cine social.", "A must for lovers of social cinema."],
        ],
        [
          mc(
            "¿Qué debe evitar la síntesis del argumento?",
            ["desvelar el desenlace", "mencionar el género", "situar la época", "presentar al protagonista"],
            0,
            "La síntesis del argumento no debe desvelar el desenlace (no destripar). Mencionar el género, situar la época y presentar al protagonista son justo lo que debe hacer."
          ),
          mc(
            "Tu borrador dice: «Al final descubrimos que el padre había muerto desde el principio». ¿Cómo lo arreglas sin perder interés?",
            ["Sin desvelar el final, basta decir que nada es lo que parece en esa casa.", "Al final, el padre está muerto.", "Quitar toda la síntesis del argumento.", "Contar el final, pero en la última línea."],
            0,
            "La fórmula «Sin desvelar el final, basta decir que…» mantiene el misterio y orienta al lector. Las otras opciones destripan el final o eliminan una parte necesaria de la reseña."
          ),
        ]
      ),
    ],
    [
      { ...fb("Síntesis.", "Sin ___ el final, basta decir que nada es lo que parece. (revelar)", "desvelar", "«Desvelar» es revelar algo oculto; «sin + infinitivo» evita destripar el final."), altAnswers: ["revelar", "descubrir"] },
      fb("Completa con el matizador concesivo (= a pesar de ello).", "Con ___, la película se hace larga en su segunda mitad.", "todo", "Con todo = a pesar de ello."),
      fb("Recomendación.", "___ para los amantes de la novela negra. (que no debe faltar)", "Imprescindible", "«Imprescindible para» recomienda la obra con fuerza a un público concreto."),
      mc(
        "Mejor entrada para una reseña:",
        ["Tras su celebrada ópera prima, la directora chilena vuelve con un drama íntimo sobre la memoria.", "Esta película es de 2023.", "Fui al cine el sábado.", "No sé qué decir de esta película."],
        0,
        "Una buena entrada sitúa la obra y a su autora (ópera prima, género, tema). «Esta película es de 2023» es un dato suelto, «Fui al cine el sábado» es irrelevante y «No sé qué decir» resta autoridad."
      ),
      ms(
        "¿Qué elementos debe tener una buena reseña?",
        ["contexto de la obra", "análisis de algún aspecto técnico", "valoración matizada", "el final completo explicado"],
        [0, 1, 2],
        "Una buena reseña da contexto, analiza algún aspecto técnico y valora con matices. Explicar el final completo es destripar la obra."
      ),
      toEs(
        "El autor publicó su primera novela en 2018. Ahora vuelve con un thriller político.",
        "Tras su primera novela, el autor vuelve con un thriller político.",
        "«Tras + sustantivo» condensa la trayectoria en un complemento y deja el foco en la obra nueva, como en las entradas de las reseñas. También vale «ópera prima» por «primera novela».",
        ["Tras su ópera prima, el autor vuelve con un thriller político.", "Tras su primera novela, el autor regresa con un thriller político.", "Tras su debut, el autor vuelve con un thriller político."],
        "Reescribe la entrada con «Tras…»."
      ),
      toEs(
        "Sin desvelando el final, basta decir que la protagonista no es quien dice ser.",
        "Sin desvelar el final, basta decir que la protagonista no es quien dice ser.",
        "Tras la preposición «sin», el verbo va siempre en infinitivo: sin desvelar. El gerundio no puede ir detrás de una preposición.",
        ["Sin revelar el final, basta decir que la protagonista no es quien dice ser."],
        "Corrige la frase."
      ),
      toEs(
        "Imprescindible a los amantes del cine negro.",
        "Imprescindible para los amantes del cine negro.",
        "La recomendación de reseña se construye con «para»: imprescindible para alguien, es decir, destinada a ese público.",
        ["Imprescindible para los aficionados al cine negro."],
        "Corrige la frase."
      ),
      toEs("Only for die-hard fans of the saga.", "Solo para incondicionales de la saga.", "Recomendación restringida: «Solo para incondicionales de…» avisa de que la obra no es para todos; «incondicional» funciona aquí como sustantivo.", ["Solo para los incondicionales de la saga.", "Solo para fans incondicionales de la saga.", "Solo para seguidores incondicionales de la saga."]),
      wo("Tras su celebrada ópera prima, el director vuelve con un drama más ambicioso.", "«Tras + sustantivo» sitúa la obra en la trayectoria del autor; «ópera prima» = primera obra, y el adjetivo valorativo «celebrada» va antepuesto, como es habitual en la prensa cultural.", "After his celebrated debut, the director returns with a more ambitious drama."),
    ]
  ),
  L(
    "business-economics-spanish-1",
    "c2r-econ-supply-demand-cause",
    "Transformaciones: causa y efecto en economía",
    "Encadena fenómenos económicos con conectores y verbos de causa: provocar, desencadenar, repercutir, derivarse.",
    "8 min",
    [
      sec(
        "La regla: elige la dirección de la cadena",
        [
          "Verbos: provocar, generar, desencadenar, repercutir en, incidir en, traducirse en, derivarse de. Conectores: debido a, a raíz de, como consecuencia de, lo que se traduce en, de ahí que (+ subjuntivo). Ejemplo: «La sequía redujo la oferta de aceite, lo que se tradujo en una subida de precios; de ahí que las ventas cayeran».",
          "Cada verbo tiene una dirección. Con provocar, desencadenar, repercutir en o traducirse en, el sujeto es la causa y el complemento, el efecto. Con derivarse de, al revés: el sujeto es el efecto y «de» introduce la causa. Por eso puedes transformar una misma cadena según lo que quieras poner en primer plano. «De ahí que» presenta la consecuencia como algo ya sabido y pide subjuntivo, aunque el hecho sea real.",
        ],
        [
          ["La subida de tipos repercute en el consumo.", "The interest-rate rise affects consumption. (causa → efecto)"],
          ["La escasez de chips desencadenó retrasos en toda la industria.", "The chip shortage triggered delays across the industry."],
          ["Los retrasos se derivaron de la escasez de chips.", "The delays stemmed from the chip shortage. (efecto ← causa)"],
        ],
        [
          mc(
            "«De ahí que las ventas ___.» (caer, pasado)",
            ["cayeran", "cayeron", "caen", "caerán"],
            0,
            "«De ahí que» introduce una consecuencia y siempre exige subjuntivo; en pasado, imperfecto: cayeran. «Cayeron», «caen» y «caerán» son indicativo, imposible tras este conector."
          ),
          mc(
            "Aplica la regla. ¿Qué frase pone el efecto como sujeto?",
            ["El aumento del paro se deriva del cierre de las fábricas.", "El cierre de las fábricas provoca un aumento del paro.", "El cierre de las fábricas repercute en el paro.", "El cierre de las fábricas desencadena más paro."],
            0,
            "Solo «derivarse de» tiene el efecto (el aumento del paro) como sujeto y la causa tras «de». Provocar, repercutir en y desencadenar van de la causa al efecto."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "La escasez de oferta ___ en precios más altos. (traducirse, indefinido)", "se tradujo", "«Traducirse en» = tener como resultado; indefinido para un hecho pasado: se tradujo."),
      fb("Completa.", "La crisis energética ___ en toda la economía. (tener efecto, presente)", "repercute", "«Repercutir en» = tener efecto o consecuencias sobre algo."),
      fb("Completa.", "De ___ que muchas empresas hayan reducido plantilla.", "ahí", "«De ahí que» (consecuencia) exige subjuntivo: hayan reducido."),
      mc(
        "Si aumenta la demanda y la oferta se mantiene, el precio tiende a…",
        ["subir", "bajar", "desaparecer", "mantenerse siempre igual"],
        0,
        "Por la ley de la oferta y la demanda, si la demanda sube y la oferta no, el precio tiende a subir. Bajar sería el efecto contrario, y no desaparece ni se mantiene igual."
      ),
      mt(
        "Relaciona el verbo con su matiz.",
        [
          ["desencadenar", "iniciar una serie de efectos"],
          ["derivarse de", "proceder de"],
          ["incidir en", "afectar a"],
        ],
        "Ojo a la dirección: «A desencadena B» e «A incide en B» van de la causa al efecto, pero «B se deriva de A» va del efecto a la causa."
      ),
      toEs(
        "El turismo cayó un 30 %. Como consecuencia, cerraron muchos hoteles.",
        "El turismo cayó un 30 %, lo que se tradujo en el cierre de muchos hoteles.",
        "«Lo que se tradujo en» une las dos frases: «lo que» recoge todo el hecho anterior y «traducirse en» introduce el efecto, nominalizado (cerraron → el cierre de).",
        ["El turismo cayó un 30 %, lo cual se tradujo en el cierre de muchos hoteles."],
        "Une las frases y transforma con «lo que se tradujo en»."
      ),
      toEs(
        "La guerra comercial desencadenó una caída de las exportaciones.",
        "La caída de las exportaciones se derivó de la guerra comercial.",
        "Para poner el efecto en primer plano, se invierte la dirección con «derivarse de»: el efecto pasa a sujeto y la causa va tras «de».",
        ["La caída de las exportaciones se deriva de la guerra comercial."],
        "Cambia la dirección: el efecto pasa a sujeto, con «derivarse de»."
      ),
      toEs(
        "La demanda se ha disparado; por eso los precios han subido.",
        "La demanda se ha disparado; de ahí que los precios hayan subido.",
        "«De ahí que» sustituye a «por eso» y exige subjuntivo: han subido → hayan subido (pretérito perfecto de subjuntivo, mismo tiempo).",
        ["La demanda se ha disparado, de ahí que los precios hayan subido."],
        "Transforma con «de ahí que»."
      ),
      toEs(
        "Las exportaciones cayeron un 15 %, de ahí que el paro ha aumentado en la región.",
        "Las exportaciones cayeron un 15 %, de ahí que el paro haya aumentado en la región.",
        "«De ahí que» siempre lleva subjuntivo, aunque la consecuencia sea un hecho real: ha aumentado → haya aumentado.",
        ["Las exportaciones cayeron un 15 %, de ahí que el paro aumentara en la región.", "Las exportaciones cayeron un 15 %, de ahí que el paro aumentase en la región."],
        "Corrige la frase."
      ),
      toEs(
        "La subida de los tipos repercute al consumo de las familias.",
        "La subida de los tipos repercute en el consumo de las familias.",
        "El régimen de «repercutir» es «en»: algo repercute en algo. Con «a» la construcción es incorrecta.",
        [],
        "Corrige la frase."
      ),
      toEs("The drought caused a rise in olive oil prices.", "La sequía provocó una subida del precio del aceite.", "Causa-efecto: «provocar / causar una subida o un aumento de» + precio.", ["La sequía provocó un aumento del precio del aceite.", "La sequía provocó una subida de los precios del aceite.", "La sequía provocó un aumento de los precios del aceite de oliva.", "La sequía causó una subida del precio del aceite de oliva."]),
      wo("La caída de la demanda se tradujo en una bajada generalizada de precios.", "«Traducirse en» (pronominal, con «en») = tener como resultado; el indefinido «se tradujo» presenta un efecto ya producido.", "The drop in demand translated into a general fall in prices."),
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
        [
          "La pista del detective: una noticia económica mezcla tres cosas y las marca con la gramática. El dato va en indicativo pasado con cifras («se situó en el 3,2 %»). La previsión se protege con verbos que no se comprometen («no descarta», «se prevé») o con el condicional. La valoración se atribuye a alguien («los sindicatos advierten de…»).",
          "«El IPC interanual se situó en marzo en el 3,2 %, dos décimas por debajo del mes anterior. El Banco Central mantuvo los tipos de interés en el 4 %, aunque no descarta rebajarlos en verano si la inflación subyacente sigue moderándose. Los sindicatos advierten de la pérdida de poder adquisitivo de los salarios, que apenas han crecido un 2 %.» La inflación subyacente es la que deja fuera los precios más volátiles, como la energía y los alimentos frescos.",
        ],
        [
          ["El IPC interanual se situó en el 3,2 %.", "Year-on-year CPI stood at 3.2%. (dato)"],
          ["La pérdida de poder adquisitivo.", "The loss of purchasing power."],
        ],
        [
          mc(
            "¿Por qué pierden poder adquisitivo los salarios?",
            ["porque crecen menos que los precios", "porque bajan los tipos", "porque sube el IPC dos décimas", "porque los sindicatos lo dicen"],
            0,
            "Los salarios pierden poder adquisitivo porque crecen menos que los precios (2 % frente a 3,2 %). La bajada de tipos o dos décimas del IPC no explican la pérdida, y que lo digan los sindicatos no es una causa."
          ),
          mc(
            "Aplica la pista a otra noticia: «La patronal considera excesiva la subida del salario mínimo». ¿Qué es?",
            ["una valoración atribuida", "un dato", "una previsión", "una cifra oficial"],
            0,
            "«Considera excesiva» es un juicio, y se atribuye a quien lo hace (la patronal): valoración. No da ninguna cifra ni anticipa nada."
          ),
        ]
      ),
    ],
    [
      mc(
        "«No descarta rebajarlos en verano» es…",
        ["una previsión condicionada", "un dato confirmado", "una valoración sindical", "una cita textual"],
        0,
        "«No descarta» presenta una posibilidad futura: es una previsión condicionada. No es un dato confirmado, no es una valoración sindical ni una cita textual."
      ),
      mc(
        "La inflación subyacente excluye…",
        ["los precios más volátiles, como energía y alimentos frescos", "los salarios", "los impuestos", "los tipos de interés"],
        0,
        "La inflación subyacente excluye los precios más volátiles, como la energía y los alimentos frescos. Los salarios, los impuestos o los tipos de interés no son lo que excluye la inflación subyacente."
      ),
      fb("Completa según el texto.", "El IPC bajó dos ___ respecto al mes anterior.", "décimas", "Las variaciones del IPC se expresan en décimas de punto porcentual."),
      fb("Completa.", "Si los tipos de interés bajan, las hipotecas se ___. (hacerse más baratas)", "abaratan", "«Abaratarse» = hacerse más barato; lo contrario es «encarecerse»."),
      mt(
        "Relaciona el término con su definición.",
        [
          ["IPC", "índice de precios de consumo"],
          ["poder adquisitivo", "capacidad de compra del dinero"],
          ["tipos de interés", "precio del dinero prestado"],
        ],
        "El IPC mide la evolución de los precios de consumo; el poder adquisitivo, lo que se puede comprar con un salario; los tipos de interés, lo que cuesta pedir dinero prestado."
      ),
      toEs(
        "La empresa subirá los precios en enero.",
        "La empresa no descarta subir los precios en enero.",
        "Una afirmación sobre el futuro (subirá) se convierte en previsión prudente con «no descartar + infinitivo»: la noticia informa de una posibilidad sin comprometerse.",
        [],
        "Cambia la afirmación a previsión con «no descartar»."
      ),
      toEs(
        "El paro fue del 11 % en junio.",
        "El paro se situó en el 11 % en junio.",
        "La prensa económica presenta los datos con «situarse en» + cifra con artículo (el 11 %), más preciso que «ser de».",
        ["En junio, el paro se situó en el 11 %."],
        "Reescribe el dato con «situarse en»."
      ),
      toEs(
        "La inflación subyacente incluye la energía y los alimentos frescos.",
        "La inflación subyacente excluye la energía y los alimentos frescos.",
        "La subyacente se calcula precisamente dejando fuera los precios más volátiles (energía, alimentos frescos): los excluye.",
        ["La inflación subyacente deja fuera la energía y los alimentos frescos."],
        "Corrige la frase."
      ),
      toEs(
        "Los salarios apenas han crecido de un 2 % este año.",
        "Los salarios apenas han crecido un 2 % este año.",
        "Con verbos de variación (crecer, subir, bajar), la cantidad va sin preposición: «han crecido un 2 %». «Del 2 %» solo va tras un sustantivo: «un crecimiento del 2 %».",
        ["Los salarios apenas han subido un 2 % este año."],
        "Corrige la frase."
      ),
      toEs("Wages have barely grown by 2%.", "Los salarios apenas han crecido un 2 %.", "Dato económico: «apenas» + perfecto (han crecido) + cantidad sin preposición: un 2 %.", ["Los sueldos apenas han subido un 2 %.", "Los salarios apenas han crecido un dos por ciento."]),
      wo("El banco central no descarta bajar los tipos de interés en verano.", "«No descartar + infinitivo» presenta una posibilidad sin comprometerse; el complemento temporal «en verano» va al final.", "The central bank doesn't rule out cutting interest rates in summer."),
    ]
  ),
  L(
    "business-economics-spanish-3",
    "c2r-econ-merger-dialogue",
    "Laboratorio de diálogo: analizar una fusión",
    "Aprende el léxico para analizar una fusión en la prensa: opa, sinergias, cuota de mercado, posición dominante, cotización y efectos para el consumidor.",
    "8 min",
    [
      sec(
        "Léxico corporativo",
        [
          "Fusión (dos empresas se unen) / adquisición (una compra a otra) / opa (oferta pública de adquisición). Sinergias (ahorros al combinar). Cuota de mercado. Posición dominante. Autoridad de la competencia. Accionistas, cotización, capitalización bursátil. Efectos para el consumidor: precios, oferta de rutas.",
          "Recuerda la regla del analista: lo previsto por la empresa va en futuro («generará sinergias»), lo posible en condicional («podría imponer condiciones») y lo temido, con un verbo de temor + subjuntivo («la competencia teme que ocupe una posición dominante»).",
        ],
        [
          ["La fusión generará sinergias de 200 millones.", "The merger will generate synergies of 200 million. (previsión → futuro)"],
          ["La autoridad de la competencia podría imponer condiciones.", "The competition authority could impose conditions. (posibilidad → condicional)"],
        ],
        [
          mc(
            "Cuando una empresa compra otra lanzando una oferta a sus accionistas, se habla de…",
            ["una opa", "una fusión amistosa necesariamente", "un ERE", "una quiebra"],
            0,
            "Comprar una empresa con una oferta a sus accionistas es una opa (oferta pública de adquisición). Una fusión amistosa es un acuerdo entre empresas, un ERE es un despido colectivo y una quiebra es la insolvencia."
          ),
          mc(
            "En la tertulia te preguntan: «¿Bajarán los billetes tras la fusión?». ¿Qué respuesta es la de un analista prudente?",
            ["Podrían bajar por las sinergias, aunque se teme que la nueva empresa ocupe una posición dominante.", "Bajarán seguro, a la mitad.", "Subirán, no hay ninguna duda.", "Los billetes no tienen nada que ver con la fusión."],
            0,
            "El condicional (podrían) presenta la bajada como posibilidad y «se teme que + subjuntivo» introduce el riesgo. Las otras respuestas afirman certezas o niegan la relación."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "Juntas controlarán el 60 % de la ___ de mercado.", "cuota", "La cuota de mercado es el porcentaje de ventas de un sector que controla una empresa."),
      fb("Completa.", "La competencia teme que la nueva empresa ocupe una posición ___.", "dominante", "Posición dominante: control del mercado que limita la competencia."),
      fb("Completa.", "Tras el anuncio, la ___ de ambas compañías subió en bolsa. (valor en bolsa)", "cotización", "La cotización es el valor de una acción en bolsa."),
      mc(
        "«Sinergias» en una fusión son…",
        ["ahorros y ventajas al combinar recursos", "despidos obligatorios", "impuestos nuevos", "rutas cerradas"],
        0,
        "Las sinergias son ahorros y ventajas al combinar recursos. Los despidos pueden ser una consecuencia, pero no son lo que significa el término, como tampoco los impuestos o las rutas cerradas."
      ),
      mc(
        "¿Qué riesgo corre el consumidor si hay posición dominante?",
        ["precios más altos y menos opciones", "precios siempre más bajos", "más competencia", "ninguno"],
        0,
        "Una posición dominante reduce la competencia: precios más altos y menos opciones para el consumidor. Por eso no bajan los precios ni hay más competencia, y el riesgo no es nulo."
      ),
      toEs(
        "Los reguladores impondrán condiciones a la opa.",
        "Los reguladores podrían imponer condiciones a la opa.",
        "Para presentar algo como posible y no como seguro, el analista cambia el futuro por «podría(n) + infinitivo».",
        [],
        "Cambia la previsión segura por una posibilidad, con «podrían»."
      ),
      toEs(
        "La nueva aerolínea subirá los precios en las rutas sin competencia.",
        "Se teme que la nueva aerolínea suba los precios en las rutas sin competencia.",
        "Un verbo de temor (se teme que) presenta el hecho como riesgo, no como dato, y exige subjuntivo: subirá → suba.",
        [],
        "Transforma con «Se teme que…»."
      ),
      toEs(
        "Los consumidores temen que la fusión reduce la oferta de rutas.",
        "Los consumidores temen que la fusión reduzca la oferta de rutas.",
        "Tras un verbo de temor, el hecho temido va en subjuntivo: reduzca (reducir → reduzca).",
        [],
        "Corrige la frase."
      ),
      toEs(
        "La operación dará lugar de un gigante del transporte aéreo.",
        "La operación dará lugar a un gigante del transporte aéreo.",
        "La locución es «dar lugar a» (originar, tener como resultado); con «de» no tiene ese sentido.",
        [],
        "Corrige la frase."
      ),
      toEs("The competition authority could block the merger.", "La autoridad de la competencia podría bloquear la fusión.", "«La autoridad de (la) competencia» es el organismo que puede bloquear o autorizar fusiones; el condicional presenta el bloqueo como posibilidad.", ["La autoridad de competencia podría bloquear la fusión.", "Las autoridades de competencia podrían bloquear la fusión."]),
      wo("La operación dará lugar a la mayor aerolínea del país.", "«Dar lugar a» = originar, tener como resultado; «la mayor aerolínea del país» es un superlativo relativo (la + mayor + de).", "The deal will give rise to the country's largest airline."),
    ]
  ),
  L(
    "business-economics-spanish-3",
    "c2r-econ-spiral-report",
    "Repaso en espiral: el informe económico",
    "Nominalización, atenuación, conectores y cifras en un informe trimestral: escribe con densidad y precisión.",
    "9 min",
    [
      sec(
        "La regla: el informe habla de hechos, no de personas",
        [
          "Nominalización: «El aumento de las ventas…». Cifras con precisión: «un 12 % más que en el mismo periodo del año anterior». Atenuación: «previsiblemente», «cabe esperar». Conectores: «no obstante», «en este sentido», «cabe destacar». Impersonalidad: «Se prevé un crecimiento moderado».",
          "Todo apunta en la misma dirección: el informe quita protagonismo a las personas (vendimos, esperamos) y se lo da a los hechos. El verbo se convierte en sustantivo (subir → la subida) y el sujeto humano desaparece con «se», que concuerda con lo que sigue: «se registró un aumento», «se registraron pérdidas». «Cabe destacar» va directamente con su complemento: «cabe destacar que…», sin «de».",
        ],
        [
          ["Las ventas crecieron un 12 % respecto al mismo periodo del año anterior.", "Sales grew 12% compared with the same period last year."],
          ["Se prevé un crecimiento moderado en el segundo semestre.", "Moderate growth is expected in the second half."],
        ],
        [
          mc(
            "Versión de informe de «vendimos mucho más»:",
            ["Se registró un notable aumento de las ventas.", "Vendimos un montón.", "Las ventas molaron.", "Vendimos más que nunca, tío."],
            0,
            "Registro de informe: nominalización e impersonalidad («Se registró un notable aumento de las ventas»). «Un montón», «molaron» y «tío» son coloquiales."
          ),
          mc(
            "Aplica la regla. Versión de informe de «perdimos clientes en Asia»:",
            ["Se registró una pérdida de clientes en el mercado asiático.", "Perdimos un montón de clientes en Asia.", "Nos quedamos sin clientes asiáticos.", "Los clientes de Asia se fueron, por desgracia."],
            0,
            "Nominalización (perder → pérdida) e impersonalidad (se registró) son las marcas del informe. Las otras versiones conservan el sujeto humano o un tono coloquial y valorativo."
          ),
        ]
      ),
    ],
    [
      fb("Nominaliza.", "Los costes bajaron → Se produjo una ___ de los costes.", "reducción", "Nominalización: bajar → reducción, con «se produjo» impersonal."),
      fb("Atenúa.", "___, la demanda se recuperará en otoño. (de forma previsible, adverbio)", "Previsiblemente", "«Previsiblemente» atenúa una predicción: se espera, pero no es seguro."),
      fb("Impersonal.", "Se ___ un crecimiento del 2 % para el próximo año. (prever, presente)", "prevé", "«Se prevé» (prever, presente) presenta una previsión de forma impersonal."),
      fb("Comparación.", "Las ventas crecieron un 5 % ___ al mismo trimestre del año anterior.", "respecto", "«Respecto a» (o «con respecto a») introduce el término de comparación."),
      mc(
        "«Cabe destacar el buen comportamiento del mercado asiático.» Sirve para…",
        ["resaltar un dato", "atenuar una pérdida", "cambiar de tema", "cerrar el informe"],
        0,
        "«Cabe destacar» resalta un dato con énfasis formal. No atenúa una pérdida, no cambia de tema ni cierra el informe."
      ),
      toEs(
        "Los precios de la energía subieron, y eso preocupa al sector.",
        "La subida de los precios de la energía preocupa al sector.",
        "La nominalización convierte el verbo (subieron) en sustantivo (la subida de…), que pasa a ser el sujeto de «preocupa»: una sola oración, más densa y propia del informe.",
        ["El aumento de los precios de la energía preocupa al sector.", "La subida del precio de la energía preocupa al sector."],
        "Reescribe con nominalización."
      ),
      toEs(
        "Esperamos un crecimiento del 3 % el próximo año.",
        "Se espera un crecimiento del 3 % el próximo año.",
        "La impersonalidad con «se» elimina el sujeto «nosotros»; el verbo concuerda con lo esperado (un crecimiento, singular → se espera).",
        ["Se prevé un crecimiento del 3 % el próximo año."],
        "Cambia a impersonal con «se»."
      ),
      toEs(
        "Cabe destacar de que las exportaciones han crecido por tercer trimestre consecutivo.",
        "Cabe destacar que las exportaciones han crecido por tercer trimestre consecutivo.",
        "«Destacar» es transitivo: lo destacado es su complemento directo, también cuando es una oración con «que». Añadir «de» es dequeísmo.",
        [],
        "Corrige la frase."
      ),
      toEs(
        "En el último trimestre se registraron un aumento de los costes laborales.",
        "En el último trimestre se registró un aumento de los costes laborales.",
        "En la pasiva refleja el verbo concuerda con su sujeto, que va detrás: «un aumento» es singular, así que «se registró». Con un sujeto plural sí sería «se registraron pérdidas».",
        [],
        "Corrige la frase."
      ),
      toEs("A slight drop in costs was recorded in the third quarter.", "Se registró un ligero descenso de los costes en el tercer trimestre.", "Informe: impersonal con «se» (se registró) y nominalización (un descenso de los costes) en lugar de «los costes bajaron».", ["En el tercer trimestre se registró un ligero descenso de los costes.", "Se registró una ligera bajada de los costes en el tercer trimestre.", "Se registró un leve descenso de los costes en el tercer trimestre.", "Se registró una ligera reducción de los costes en el tercer trimestre."]),
      wo("Cabe destacar el aumento de las exportaciones durante el último trimestre.", "«Cabe destacar» + sustantivo (el aumento de…) es una fórmula de informe para resaltar un dato; el sustantivo sustituye al verbo («aumentaron»).", "The rise in exports during the last quarter is worth highlighting."),
    ]
  ),
  L(
    "creative-writing-techniques-1",
    "c2r-writing-foreshadowing",
    "Taller de estilo: sembrar indicios (prefiguración)",
    "Reconoce y practica cómo se siembran pistas discretas (objetos, frases ambiguas, gestos) para que el final resulte sorprendente pero inevitable.",
    "9 min",
    [
      sec(
        "La pistola de Chéjov",
        [
          "Si aparece un detalle significativo al principio (una pistola en la pared, una llave que no abre nada), debe cumplir una función después. La prefiguración siembra indicios discretos: objetos, frases ambiguas, gestos, el tiempo atmosférico. Riesgo: si es demasiado evidente, el lector adivina el final; si no existe, el giro parece arbitrario.",
          "La gramática ayuda a sembrar sin subrayar. El objeto se coloca en imperfecto, como parte del decorado («sobre la chimenea colgaba una escopeta»), no en indefinido, que lo convertiría en acontecimiento. Y la mirada distraída de los personajes se cuenta con «reparar en» o «fijarse en»: «Nadie reparó en la maleta».",
        ],
        [
          ["En el cajón seguía aquella llave que no abría ninguna puerta de la casa.", "The key that opened none of the doors in the house was still in the drawer. (imperfecto: decorado)"],
          ["«Algún día te contaré por qué no vuelvo nunca a Sevilla», dijo riendo.", "“Someday I'll tell you why I never go back to Seville,” she said, laughing."],
        ],
        [
          mc(
            "¿Qué detalle funciona como prefiguración discreta?",
            ["Una cicatriz en la mano que el personaje esconde al saludar.", "El personaje dice: «Al final de esta historia yo seré el asesino».", "Una descripción del cielo azul sin más.", "El número de páginas del libro."],
            0,
            "La cicatriz que el personaje esconde es un indicio sutil que prefigura algo. Anunciar el final abiertamente destruye la sorpresa, y el cielo azul o el número de páginas no anticipan nada."
          ),
          mc(
            "Aplica la regla. ¿Qué versión siembra el veneno sin llamar la atención?",
            ["En la despensa había, entre los botes de especias, un frasco sin etiqueta.", "De repente, la cocinera sacó un frasco de veneno.", "En la despensa hubo un frasco de veneno.", "Aquel frasco iba a matar a alguien esa noche."],
            0,
            "El imperfecto (había) lo deja en el decorado y el detalle («sin etiqueta») sugiere sin nombrar. «Sacó un frasco de veneno» y «hubo» lo convierten en acontecimiento, y la última opción anuncia el final."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "La ___ consiste en anticipar discretamente lo que ocurrirá. (anticipación narrativa)", "prefiguración", "La prefiguración anticipa de forma discreta lo que ocurrirá."),
      fb("Completa.", "El giro final parece ___ si no se ha sembrado ningún indicio. (sin motivo)", "arbitrario", "Un giro sin indicios previos parece arbitrario, sin motivo dentro de la historia."),
      mc(
        "¿Qué pasa si la pista es demasiado evidente?",
        ["El lector adivina el final.", "El relato mejora siempre.", "El giro parece arbitrario.", "Nada."],
        0,
        "Si la pista es demasiado evidente, el lector adivina el final y se pierde la sorpresa. El relato no mejora siempre, y el giro solo parece arbitrario cuando no hay pistas."
      ),
      mc(
        "«La pistola de Chéjov» enseña que…",
        ["todo detalle relevante debe tener una función", "hay que escribir sobre armas", "los finales deben ser violentos", "no hay que describir objetos"],
        0,
        "La pistola de Chéjov enseña economía narrativa: todo detalle relevante debe tener una función. No obliga a escribir sobre armas ni a finales violentos, y no prohíbe describir objetos."
      ),
      ms(
        "¿Qué recursos sirven para prefigurar?",
        ["objetos significativos", "frases ambiguas de un personaje", "cambios atmosféricos simbólicos", "resumir el final en la primera página"],
        [0, 1, 2],
        "Los objetos significativos, las frases ambiguas de un personaje y los cambios atmosféricos simbólicos prefiguran. Resumir el final en la primera página lo revela."
      ),
      toEs(
        "Sobre la chimenea cuelga una escopeta que nadie usa.",
        "Sobre la chimenea colgaba una escopeta que nadie usaba.",
        "En el relato en pasado, el objeto sembrado va en imperfecto (colgaba, usaba): forma parte del decorado y no llama la atención como un acontecimiento.",
        [],
        "Pasa al pasado narrativo, como parte del decorado."
      ),
      toEs(
        "Nadie se fijó en el coche negro aparcado frente a la casa.",
        "Nadie reparó en el coche negro aparcado frente a la casa.",
        "«Reparar en» es el sinónimo culto de «fijarse en» y conserva su preposición «en». Es el verbo típico para contar la distracción de los personajes ante un indicio.",
        [],
        "Sustituye «se fijó» por el verbo «reparar»."
      ),
      toEs(
        "El inspector no reparó de la mancha de la alfombra.",
        "El inspector no reparó en la mancha de la alfombra.",
        "El régimen de «reparar» (darse cuenta) es «en»: reparar en algo. Con «de» la construcción es incorrecta.",
        [],
        "Corrige la frase."
      ),
      toEs(
        "Si la pista es demasiado evidente, el giro final parece arbitrario.",
        "Si la pista es demasiado evidente, el lector adivina el final.",
        "Una pista demasiado evidente destruye la sorpresa: el lector adivina el final. El giro parece arbitrario en el caso contrario, cuando no se ha sembrado ninguna pista.",
        ["Si la pista es demasiado evidente, el lector adivina el giro final."],
        "Corrige la frase: la consecuencia no corresponde."
      ),
      toEs("There was a key in the drawer that opened no door.", "En el cajón había una llave que no abría ninguna puerta.", "El indicio es un objeto enigmático («una llave que no abría ninguna puerta») que sugiere algo sin decirlo.", ["En el cajón había una llave que no abría ninguna puerta de la casa.", "Había en el cajón una llave que no abría ninguna puerta."]),
      wo("Nadie reparó entonces en la maleta que esperaba junto a la puerta.", "Prefiguración: un detalle aparentemente inocente (la maleta) anticipa una partida. Ojo al régimen: «reparar en algo».", "Nobody noticed then the suitcase waiting by the door."),
    ]
  ),
  L(
    "creative-writing-techniques-2",
    "c2r-writing-imagery-rewrite",
    "Transformaciones: de la frase plana a la imagen literaria",
    "Reescribe frases descriptivas con símil, metáfora, sinestesia y personificación, sin recargar.",
    "8 min",
    [
      sec(
        "Recursos de la imagen",
        [
          "Símil: «El silencio era como una manta». Metáfora: «El silencio era una manta». Sinestesia (mezcla de sentidos): «un verde chillón», «una voz áspera y dulce», «el sabor amarillo de la tarde». Personificación: «La casa respiraba». Consejo: una imagen potente vale más que tres acumuladas.",
          "Para transformar una frase plana, cambia una sola pieza: un adjetivo genérico (llamativo, desagradable) por uno de otro sentido (chillón, áspera), o un verbo neutro (hacer ruido, moverse) por uno humano (quejarse, temblar). Así la imagen nace de la palabra exacta, no de la acumulación.",
        ],
        [
          ["Un verde chillón.", "A garish (loud) green. (vista + oído)"],
          ["La casa respiraba en la oscuridad.", "The house breathed in the dark. (verbo humano)"],
        ],
        [
          mc(
            "«Un silencio blanco» es…",
            ["sinestesia", "hipérbole", "sinécdoque", "símil"],
            0,
            "Atribuir un color (blanco) a algo auditivo (silencio) mezcla sentidos: es sinestesia. No exagera (hipérbole), no toma la parte por el todo (sinécdoque) ni compara con «como» (símil)."
          ),
          mc(
            "Aplica la regla. Frase plana: «La puerta hacía ruido al abrirse». ¿Qué versión cambia solo el verbo para personificar?",
            ["La puerta gemía al abrirse.", "La puerta, como un animal herido, hacía ruido al abrirse.", "La puerta hacía muchísimo ruido al abrirse.", "La puerta, vieja, gris y triste, hacía ruido al abrirse."],
            0,
            "«Gemía» sustituye el verbo neutro por uno humano: personificación con una sola palabra. La segunda añade un símil, la tercera solo intensifica y la cuarta acumula adjetivos."
          ),
        ]
      ),
    ],
    [
      fb("Convierte el símil en metáfora eliminando el nexo comparativo.", "El mar era como un espejo. → El mar ___.", "era un espejo", "La metáfora elimina el nexo comparativo «como»: el mar era un espejo."),
      fb("Personificación.", "Las persianas ___ con el viento. (quejarse, imperfecto)", "se quejaban", "La personificación atribuye a objetos acciones humanas: las persianas se quejaban."),
      fb("Sinestesia.", "Tenía una voz ___: cálida y suave. (como el terciopelo)", "aterciopelada", "Sinestesia: «aterciopelada» aplica una sensación táctil (el terciopelo) a la voz."),
      mc(
        "¿Qué versión está recargada?",
        ["El sol, como una naranja furiosa, un ojo de fuego, un rey de oro, un volcán colgado, ardía.", "El sol ardía sobre los tejados.", "El sol mordía la piel.", "Un sol de plomo aplastaba el pueblo."],
        0,
        "Amontonar cuatro imágenes para el sol recarga la frase. «El sol ardía sobre los tejados», «El sol mordía la piel» y «Un sol de plomo…» usan una sola imagen precisa."
      ),
      ms(
        "¿Cuáles son sinestesias?",
        ["un color estridente", "una música dulce", "un perfume azul", "un árbol alto"],
        [0, 1, 2],
        "«Un color estridente» (vista + oído), «una música dulce» (oído + gusto) y «un perfume azul» (olfato + vista) son sinestesias. «Un árbol alto» es una descripción literal."
      ),
      toEs(
        "Llevaba un vestido de un verde muy llamativo.",
        "Llevaba un vestido de un verde chillón.",
        "Sinestesia: «chillón» es un adjetivo del oído (que chilla) aplicado a un color. Sustituye a «muy llamativo» y la imagen nace de una sola palabra.",
        [],
        "Sustituye «muy llamativo» por una sinestesia con «chillón»."
      ),
      toEs(
        "Las ramas se movían contra la ventana toda la noche.",
        "Las ramas arañaban la ventana toda la noche.",
        "Personificación con una sola pieza: el verbo neutro (se movían contra) se sustituye por uno de ser vivo (arañaban), que lleva la ventana como complemento directo.",
        ["Las ramas arañaron la ventana toda la noche."],
        "Transforma en personificación con el verbo «arañar»."
      ),
      toEs(
        "«El mar era como un espejo» es una metáfora.",
        "«El mar era como un espejo» es un símil.",
        "Con nexo comparativo (como) es un símil; la metáfora suprime el nexo: «El mar era un espejo».",
        ["«El mar era como un espejo» es una comparación."],
        "Corrige la frase."
      ),
      toEs(
        "«Una voz áspera» es una personificación.",
        "«Una voz áspera» es una sinestesia.",
        "«Áspera» es una sensación del tacto aplicada a algo que se oye (la voz): mezcla de sentidos, sinestesia. No hay ningún rasgo humano atribuido a un objeto.",
        [],
        "Corrige la frase."
      ),
      toEs("The streetlights shivered in the rain.", "Las farolas tiritaban bajo la lluvia.", "Personificación: «tiritar» es temblar de frío, algo propio de un ser vivo, atribuido a las farolas.", ["Las farolas temblaban bajo la lluvia.", "Las farolas tiritaban en la lluvia.", "Los faroles tiritaban bajo la lluvia."]),
      wo("Un sol de plomo aplastaba las calles vacías del pueblo.", "«Un sol de plomo» es una metáfora (el sol pesa como el plomo) que «aplastaba» prolonga; el adjetivo «vacías» va detrás de «calles» y «del pueblo» cierra el sintagma.", "A leaden sun crushed the village's empty streets."),
    ]
  ),
  L(
    "creative-writing-techniques-3",
    "c2r-writing-editor-dialogue",
    "Laboratorio de diálogo: la editora y el escritor",
    "Recibe y responde a críticas de un borrador: tensión narrativa, ritmo, diálogos y punto de vista.",
    "8 min",
    [
      sec(
        "El lenguaje de la edición",
        [
          "Críticas habituales: «El clímax llega sin preparación», «Los diálogos suenan artificiales», «Hay un salto de punto de vista», «El ritmo decae en el segundo acto», «Sobran adjetivos». Respuestas del escritor: «Tienes razón; ¿qué propondrías?», «Lo he hecho a propósito para…», «Voy a podar el capítulo tres».",
          "Recuerda la regla: en la edición se suaviza todo. La editora sugiere con condicional o con «convendría + infinitivo» («Quizá convendría recortar…»); el escritor pide propuestas también en condicional («¿qué propondrías?») y defiende una decisión con «a propósito para + infinitivo».",
        ],
        [
          ["El ritmo decae en el segundo acto.", "The pace flags in the second act."],
          ["Voy a podar el capítulo tres.", "I'm going to trim chapter three."],
          ["Quizá convendría reducir los diálogos.", "Perhaps it would be worth cutting down the dialogue. (sugerencia suavizada)"],
        ],
        [
          mc(
            "«Podar un texto» significa…",
            ["recortar lo que sobra", "ampliarlo", "traducirlo", "publicarlo"],
            0,
            "«Podar un texto» es recortar lo que sobra, como se podan las ramas de un árbol. No significa ampliarlo, traducirlo ni publicarlo."
          ),
          mc(
            "La editora dice: «Hay un salto de punto de vista en el capítulo dos». Tú lo hiciste a propósito. ¿Qué respondes?",
            ["Lo he hecho a propósito para que el lector desconfíe del narrador.", "No sabes leer.", "Tienes razón, lo borro todo.", "Lo he hecho a propósito de que el lector desconfíe."],
            0,
            "Defender una decisión es explicar su finalidad: «a propósito» + «para que» + subjuntivo (desconfíe). La última opción confunde la locución «a propósito de» (acerca de); las otras atacan o renuncian sin argumentar."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "El ___ decae en la parte central de la novela. (velocidad narrativa)", "ritmo", "El ritmo es la velocidad con que avanza la narración; «decae» cuando se vuelve lenta."),
      fb("Completa.", "Hay un salto de punto de ___: de repente sabemos lo que piensa otro personaje.", "vista", "El punto de vista es la perspectiva desde la que se narra; un salto rompe la coherencia."),
      fb("Completa.", "Lo he hecho a ___ para desconcertar al lector.", "propósito", "«A propósito» = deliberadamente, con intención."),
      mc(
        "«Los diálogos suenan acartonados» significa que…",
        ["son rígidos y poco naturales", "son muy divertidos", "son demasiado cortos", "tienen errores ortográficos"],
        0,
        "«Acartonado» significa rígido y poco natural, como de cartón. No se refiere a que sean divertidos, cortos o tengan faltas."
      ),
      mc(
        "Mejor respuesta a una crítica con la que estás de acuerdo:",
        ["Tienes razón; ¿qué propondrías para prepararlo mejor?", "No sabes leer.", "Así se queda.", "Me da igual."],
        0,
        "Ante una crítica justa, lo mejor es aceptarla y colaborar pidiendo propuestas. «No sabes leer» ataca, y «Así se queda» o «Me da igual» cierran la conversación."
      ),
      toEs(
        "Recorta el segundo acto.",
        "Quizá convendría recortar el segundo acto.",
        "La editora convierte la orden en sugerencia: «convendría» (condicional de cortesía) + infinitivo, y «quizá» añade más prudencia.",
        ["Quizás convendría recortar el segundo acto.", "Convendría recortar el segundo acto."],
        "Transforma la orden en una sugerencia con «Quizá convendría…»."
      ),
      toEs(
        "«El ritmo decae en el segundo acto», dijo la editora.",
        "La editora dijo que el ritmo decaía en el segundo acto.",
        "En estilo indirecto con el verbo introductor en pasado, el presente pasa a imperfecto: decae → decaía.",
        [],
        "Pasa a estilo indirecto."
      ),
      toEs(
        "Alargué el capítulo a propósito de aumentar la tensión.",
        "Alargué el capítulo a propósito para aumentar la tensión.",
        "«A propósito» (deliberadamente) va seguido de la finalidad con «para». «A propósito de» es otra locución: significa «acerca de».",
        [],
        "Corrige la frase."
      ),
      toEs(
        "Los diálogos del capítulo dos suenan a acartonados.",
        "Los diálogos del capítulo dos suenan acartonados.",
        "«Sonar» + adjetivo describe la impresión (suenan acartonados, suenan falsos). «Sonar a» va con sustantivo: «suenan a cartón».",
        ["Los diálogos del capítulo dos suenan a cartón."],
        "Corrige la frase."
      ),
      toEs("The climax arrives without any build-up.", "El clímax llega sin ninguna preparación.", "Crítica editorial: el clímax llega «sin preparación», sin nada que lo anticipe.", ["El clímax llega sin preparación.", "El clímax llega sin nada que lo prepare."]),
      wo("Voy a recortar el capítulo tres para mejorar el ritmo.", "Respuesta del escritor que acepta la crítica: «voy a + infinitivo» para el plan y «para + infinitivo» para la finalidad; «recortar» equivale aquí a «podar» un texto.", "I'm going to cut chapter three to improve the pacing."),
    ]
  ),
  L(
    "creative-writing-techniques-3",
    "c2r-writing-mission-microstory",
    "Misión real: un microrrelato de 100 palabras",
    "Escribe un microrrelato con título significativo, elipsis, final abierto o giro, y una sola imagen poderosa.",
    "10 min",
    [
      sec(
        "Claves del microrrelato",
        [
          "Título que aporta información («El dinosaurio», de Monterroso: «Cuando despertó, el dinosaurio todavía estaba allí»). Elipsis: lo no dicho pesa tanto como lo dicho. Empezar in medias res (en mitad de la acción). Final con giro o abierto. Cada palabra cuenta: sin adjetivos superfluos.",
          "Recuerda la gramática del relato breve: el indefinido cuenta lo que pasa (despertó, soltó) y el imperfecto describe lo que ya estaba ahí (estaba). Y «sin + infinitivo» ahorra una frase entera: «Se fue sin despedirse».",
        ],
        [
          ["Cuando despertó, el dinosaurio todavía estaba allí. (Augusto Monterroso)", "When he woke up, the dinosaur was still there. (despertó: acción / estaba: estado)"],
        ],
        [
          mc(
            "¿Por qué funciona «El dinosaurio»?",
            ["por la elipsis: el lector imagina todo lo anterior y posterior", "porque describe mucho al dinosaurio", "porque es largo", "porque tiene diálogo"],
            0,
            "«El dinosaurio» funciona por la elipsis: el lector imagina todo lo anterior y posterior. No describe al dinosaurio, es brevísimo y no tiene diálogo."
          ),
          mc(
            "Tu borrador empieza: «Esta es la historia de una mujer que, después de muchos años, por fin decidió irse». ¿Qué cambio lo acerca más al microrrelato?",
            ["Cerró la puerta sin despedirse. Treinta años.", "Añadir tres adjetivos para describir a la mujer.", "Explicar al principio por qué decidió irse.", "Empezar con «Había una vez»."],
            0,
            "La versión corta empieza en plena acción, usa «sin + infinitivo» y deja en elipsis la causa (Treinta años). Añadir adjetivos, explicar o empezar con «Había una vez» alarga y quita misterio."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "Empezar in medias ___ significa comenzar en plena acción.", "res", "«In medias res» (latín, «en mitad del asunto») = empezar en plena acción."),
      fb("Completa.", "La ___ omite información que el lector debe reconstruir.", "elipsis", "La elipsis omite información que el lector reconstruye."),
      mc(
        "¿Qué inicio es in medias res?",
        ["Soltó el cuchillo cuando oyó la llave en la cerradura.", "Había una vez, hace mucho tiempo, un reino lejano.", "Me llamo Juan y voy a contar mi vida.", "Este relato trata de una familia."],
        0,
        "Empezar en plena acción («Soltó el cuchillo cuando oyó la llave…») es in medias res. «Había una vez», «Me llamo Juan y voy a contar» y «Este relato trata de…» son comienzos ab ovo o de presentación."
      ),
      mc(
        "¿Qué título aporta más al microrrelato de una mujer que espera a alguien que nunca llega?",
        ["Andén 3, treinta años", "Una historia", "La mujer", "Relato número 1"],
        0,
        "«Andén 3, treinta años» añade lugar y tiempo significativos que amplían la historia. «Una historia», «La mujer» y «Relato número 1» no aportan nada al texto."
      ),
      ms(
        "¿Qué rasgos definen el microrrelato?",
        ["brevedad extrema", "elipsis", "final con giro o abierto", "muchos personajes y subtramas"],
        [0, 1, 2],
        "La brevedad extrema, la elipsis y el final con giro o abierto definen el microrrelato. Muchos personajes y subtramas no caben en tan poco espacio."
      ),
      toEs(
        "Se fue. No se despidió de nadie.",
        "Se fue sin despedirse de nadie.",
        "«Sin + infinitivo» condensa dos frases en una; el pronombre se une al infinitivo (despedirse) y «nadie» se mantiene, porque «sin» ya es negativo.",
        [],
        "Une las dos frases con «sin + infinitivo»."
      ),
      toEs(
        "Cuando despierta, el tren todavía está en la estación.",
        "Cuando despertó, el tren todavía estaba en la estación.",
        "Al pasar al pasado, la acción puntual va en indefinido (despertó) y el estado que continúa, en imperfecto (estaba), como en el microrrelato de Monterroso.",
        [],
        "Pasa a pasado, como en «El dinosaurio»."
      ),
      toEs(
        "Cuando llegó a casa, la carta todavía estuvo sobre la mesa.",
        "Cuando llegó a casa, la carta todavía estaba sobre la mesa.",
        "«Todavía estaba» describe un estado que continúa en el momento de llegar: imperfecto. «Estuvo» presentaría ese estado como un hecho cerrado y rompe el efecto.",
        [],
        "Corrige la frase."
      ),
      toEs(
        "Soltó el cuchillo cuando oía la llave en la cerradura.",
        "Soltó el cuchillo cuando oyó la llave en la cerradura.",
        "Las dos acciones son puntuales y sucesivas (oír la llave → soltar el cuchillo): las dos van en indefinido. «Oía» presentaría el ruido como fondo continuo.",
        [],
        "Corrige la frase."
      ),
      toEs("When she opened the door, nobody was there. Again.", "Cuando abrió la puerta, no había nadie. Otra vez.", "Microrrelato: la elipsis y el cierre breve («Otra vez» o «De nuevo») sugieren una historia que se repite.", ["Cuando abrió la puerta, no había nadie. De nuevo."]),
      wo("Guardó la última carta sin abrirla, como todas las anteriores.", "«Sin + infinitivo + pronombre» (sin abrirla) y «como todas las anteriores» sugieren, sin decirlo, una historia que se repite: la elipsis deja que el lector la imagine.", "She put the last letter away unopened, like all the ones before."),
    ]
  ),
  L(
    "modismos-expresiones-idiomaticas-drill-3",
    "c2r-extra-idioms-situations",
    "Práctica extra: el modismo justo y su matiz",
    "Situaciones en las que dos modismos parecidos no son intercambiables: elige el que dice exactamente lo que quieres decir.",
    "9 min",
    [
      sec(
        "Parecidos, pero no iguales",
        [
          "Recuerda la regla: entre dos modismos parecidos decide el matiz exacto (¿engaño en la calidad o burla?, ¿vencer un miedo o aceptar lo inevitable?), y la forma es fija: se conjuga el verbo, pero no se tocan las piezas.",
          "«Dar gato por liebre» es engañar dando algo de menor calidad; «tomar el pelo» es burlarse o engañar en broma. «Hacer de tripas corazón» es sobreponerse al miedo o al asco para hacer algo; «hacer de la necesidad virtud» es aceptar de buen grado lo que no queda más remedio que aceptar. «Meterse en camisa de once varas» es entrometerse en lo que no le incumbe a uno o complicarse sin necesidad; «meterse en un berenjenal» es meterse en un lío difícil de resolver.",
          "«Poner los puntos sobre las íes» es precisar algo con claridad para evitar malentendidos; «cantarlas claras» es decir verdades incómodas sin rodeos. Todas son panhispánicas.",
        ],
        [
          ["Nos dieron gato por liebre: el «jamón de bellota» era de cebo.", "They sold us a pup: the 'acorn-fed ham' was the cheapest grade."],
          ["Hice de tripas corazón y entré a ver al jefe.", "I plucked up my courage and went in to see the boss."],
          ["No te metas en camisa de once varas: eso es asunto de ellos.", "Don't stick your nose in: that's their business."],
        ],
        [
          mc(
            "Te venden como «seda natural» una corbata de poliéster. ¿Qué modismo describe mejor lo ocurrido?",
            ["Me dieron gato por liebre.", "Me tomaron el pelo.", "Me metí en un berenjenal.", "Hice de tripas corazón."],
            0,
            "«Dar gato por liebre» es exactamente engañar haciendo pasar algo inferior por algo mejor. «Tomar el pelo» es más general y suele ser en broma; «meterse en un berenjenal» es meterse en un lío, y «hacer de tripas corazón» es sobreponerse a una repugnancia o un miedo.",
          ),
        ]
      ),
    ],
    [
      mc(
        "Te ofrecen un puesto peor pagado, pero cerca de casa, y lo aceptas con buena cara porque no hay otro. ¿Qué haces?",
        ["Hago de la necesidad virtud.", "Hago de tripas corazón.", "Me meto en camisa de once varas.", "Pongo los puntos sobre las íes."],
        0,
        "«Hacer de la necesidad virtud» = aceptar de buen grado lo inevitable. «Hacer de tripas corazón» implica vencer miedo o repugnancia; «meterse en camisa de once varas», entrometerse; «poner los puntos sobre las íes», aclarar algo con precisión.",
      ),
      mc(
        "Antes de firmar, la abogada quiere dejar claro qué cubre exactamente la garantía. ¿Qué expresión encaja?",
        ["Quiere poner los puntos sobre las íes.", "Quiere cantarlas claras.", "Quiere dar gato por liebre.", "Quiere meterse en un berenjenal."],
        0,
        "«Poner los puntos sobre las íes» = precisar para evitar malentendidos. «Cantarlas claras» implica decir verdades incómodas o reproches, no aclarar términos; las otras dos significan engañar y meterse en un lío.",
      ),
      { ...fb("Completa el modismo.", "Hizo de tripas ___ y le dijo la verdad a su socio.", "corazón", "«Hacer de tripas corazón» = sobreponerse al miedo, al asco o a la pena para hacer algo difícil."), en: "He [plucked up his courage] and told his partner the truth." },
      { ...fb("Completa el modismo.", "No te metas en camisa de once ___.", "varas", "«Meterse en camisa de once varas» = entrometerse en lo que no le toca a uno o complicarse sin necesidad. La vara era una medida de longitud: una camisa de once varas es desmesurada."), en: "Don't [stick your nose in where it doesn't belong]." },
      ms(
        "¿Qué modismos implican algún tipo de engaño?",
        ["dar gato por liebre", "tomar el pelo", "dar el pego (España: pasar por auténtico lo que no lo es)", "hacer de tripas corazón", "hacer de la necesidad virtud"],
        [0, 1, 2],
        "«Dar gato por liebre», «tomar el pelo» y «dar el pego» (España: parecer auténtico siendo falso) implican engaño. «Hacer de tripas corazón» y «hacer de la necesidad virtud» hablan de sobreponerse y de aceptar, no de engañar.",
      ),
      toEs(
        "Venció el asco y probó los saltamontes fritos.",
        "Hizo de tripas corazón y probó los saltamontes fritos.",
        "Sobreponerse al asco o al miedo para hacer algo es «hacer de tripas corazón»: el verbo se conjuga (hizo) y el resto es fijo.",
        [],
        "Sustituye «venció el asco» por el modismo exacto."
      ),
      toEs(
        "Cuando vemos la factura, nos damos cuenta de que nos dan gato por liebre.",
        "Cuando vimos la factura, nos dimos cuenta de que nos habían dado gato por liebre.",
        "Al pasar al pasado, las acciones puntuales van en indefinido (vimos, nos dimos cuenta) y el engaño, anterior a ellas, en pluscuamperfecto (nos habían dado). El modismo no cambia.",
        ["Cuando vimos la factura, nos dimos cuenta de que nos dieron gato por liebre."],
        "Pasa a pasado."
      ),
      toEs(
        "En aquel taller le dieron liebre por gato con las piezas del coche.",
        "En aquel taller le dieron gato por liebre con las piezas del coche.",
        "El orden del modismo es fijo y tiene sentido: se da el gato (lo peor) haciéndolo pasar por liebre (lo mejor). Invertirlo dice lo contrario.",
        [],
        "Corrige la frase."
      ),
      toEs(
        "En la reunión con el casero, quiero poner las comas sobre las íes.",
        "En la reunión con el casero, quiero poner los puntos sobre las íes.",
        "La forma fija es «poner los puntos sobre las íes»: la i lleva punto, no coma. Cambiar una pieza destruye el modismo.",
        [],
        "Corrige la frase."
      ),
      toEs("With that project he got himself into a real mess.", "Con ese proyecto se metió en un buen berenjenal.", "«Meterse en un berenjenal» = meterse en un asunto complicado; «buen» intensifica («un buen lío»).", ["Con ese proyecto se metió en un berenjenal.", "Con ese proyecto se metió en un buen lío.", "Con ese proyecto se metió en un lío."]),
      wo("Conviene poner los puntos sobre las íes antes de firmar.", "«Poner los puntos sobre las íes» = aclarar con precisión; «conviene + infinitivo» expresa recomendación.", "It's advisable to dot the i's and cross the t's before signing."),
    ]
  ),
  L(
    "modismos-expresiones-idiomaticas-drill-3",
    "c2r-extra-idioms-translate-equivalents",
    "Práctica extra: equivalencia funcional, no traducción literal",
    "Traduce modismos ingleses por su equivalente español real, con su registro y su zona, y evita los calcos que ya circulan.",
    "9 min",
    [
      sec(
        "Equivalentes y calcos",
        [
          "Un modismo se traduce por su función, no por sus palabras: «to pass the buck» → «echar balones fuera» (España) o «pasar la pelota» (general); «to sit on the fence» → «nadar entre dos aguas» o «no mojarse»; «the elephant in the room» → la prensa usa ya el calco «el elefante en la habitación», pero en registro cuidado se prefiere «el tema tabú / lo que nadie quiere mencionar»; «to cut corners» → «hacer las cosas por la vía rápida / escatimar».",
          "Calcos que conviene evitar en registro cuidado: «al final del día» (at the end of the day → «a fin de cuentas», «en definitiva»), «hacer sentido» (to make sense → «tener sentido»), «jugar un rol» (to play a role → «desempeñar un papel»). La prueba es sencilla: si la combinación de palabras solo tiene sentido traducida al inglés, es un calco.",
        ],
        [
          ["El director nada entre dos aguas para no enemistarse con nadie.", "The director is sitting on the fence so as not to fall out with anyone."],
          ["A fin de cuentas, lo que importa es el resultado.", "At the end of the day, what matters is the result."],
        ],
        [
          mc(
            "«At the end of the day, it's your decision.» ¿Qué versión evita el calco?",
            ["A fin de cuentas, la decisión es tuya.", "Al final del día, la decisión es tuya.", "Al fin del día, la decisión es tuya.", "En el final del día, es tu decisión."],
            0,
            "«At the end of the day» con sentido de «en definitiva» se traduce «a fin de cuentas / en definitiva». «Al final del día» es un calco (en español significa literalmente al terminar la jornada), y las otras dos variantes son calcos aún más forzados.",
          ),
          mc(
            "Aplica la prueba. «Hay que tomar ventaja de la situación.» ¿Qué le pasa a esta frase?",
            ["Es un calco de «to take advantage»; en español se dice «aprovechar la situación».", "Es correcta en cualquier registro.", "Es un modismo peninsular.", "Es un refrán truncado."],
            0,
            "«Tomar ventaja de» con este sentido solo se entiende traducido palabra por palabra al inglés: es un calco. En español se «aprovecha» algo o se «saca partido de» algo; «tomar ventaja» significa adelantarse a un rival."
          ),
        ]
      ),
    ],
    [
      toEs("She always sits on the fence.", "Siempre nada entre dos aguas.", "«Nadar entre dos aguas» = no decantarse por ninguna de dos posturas. También: «no mojarse» (coloquial).", ["Siempre se queda nadando entre dos aguas.", "Nunca se moja.", "Nunca se moja en nada."]),
      mc(
        "«That doesn't make sense.» Elige la traducción correcta.",
        ["Eso no tiene sentido.", "Eso no hace sentido.", "Eso no hace ningún sentido.", "Eso no produce sentido."],
        0,
        "En español las cosas «tienen sentido». «Hacer sentido» es un calco del inglés (frecuente en el español de Estados Unidos y Puerto Rico) que se evita en registro cuidado; «producir sentido» no es la colocación.",
      ),
      { ...fb("Sustituye el calco «jugar un rol».", "La sociedad civil ___ un papel decisivo en la transición.", "desempeñó", "En registro cuidado se «desempeña» o se «cumple» un papel; «jugar un rol» es calco de «to play a role».", "verbo en pretérito"), en: "Civil society [played] a decisive role in the transition.", altAnswers: ["cumplió", "tuvo"] },
      mc(
        "«To cut corners» en un informe técnico sobre una obra mal ejecutada:",
        ["La constructora escatimó en materiales y controles.", "La constructora cortó las esquinas.", "La constructora recortó los rincones.", "La constructora tomó atajos en las esquinas."],
        0,
        "El sentido es ahorrar indebidamente en calidad o seguridad: «escatimar», «ahorrar costes a costa de la calidad». Las demás son traducciones literales sin sentido idiomático en español.",
      ),
      toEs("The minister passed the buck to the regional government.", "El ministro le pasó la pelota al gobierno regional.", "«Pasar la pelota» (general) o «echar balones fuera» (España) = trasladar a otro la responsabilidad.", ["El ministro echó balones fuera y culpó al gobierno regional.", "La ministra le pasó la pelota al gobierno regional.", "El ministro le pasó el muerto al gobierno regional."]),
      mt(
        "Relaciona la expresión inglesa con su equivalente funcional.",
        [
          ["to pass the buck", "pasar la pelota"],
          ["to sit on the fence", "nadar entre dos aguas"],
          ["to play a role", "desempeñar un papel"],
          ["at the end of the day", "a fin de cuentas"],
        ],
        "Se traduce la función del modismo, no sus palabras.",
      ),
      toEs(
        "Al final del día, lo que de verdad cuenta son los datos.",
        "A fin de cuentas, lo que de verdad cuenta son los datos.",
        "«Al final del día» con el sentido de «en definitiva» es un calco; la expresión española es «a fin de cuentas» (o «en definitiva», «al fin y al cabo»).",
        ["En definitiva, lo que de verdad cuenta son los datos.", "Al fin y al cabo, lo que de verdad cuenta son los datos."],
        "Sustituye el calco por la expresión española."
      ),
      toEs(
        "El portavoz se negó a responder y pasó la pelota.",
        "El portavoz se negó a responder y echó balones fuera.",
        "«Pasar la pelota» es general; la variante peninsular para eludir una responsabilidad es «echar balones fuera». El verbo se conjuga igual (echó).",
        [],
        "Cambia a la variante peninsular."
      ),
      toEs(
        "Tu propuesta no hace sentido en este contexto.",
        "Tu propuesta no tiene sentido en este contexto.",
        "En español las cosas «tienen sentido». «Hacer sentido» es calco de «to make sense» y se evita en registro cuidado.",
        [],
        "Corrige la frase."
      ),
      toEs(
        "El turismo juega un rol clave en la economía de la isla.",
        "El turismo desempeña un papel clave en la economía de la isla.",
        "«Jugar un rol» es calco de «to play a role»; en registro cuidado se «desempeña» (o se «cumple») «un papel».",
        ["El turismo cumple un papel clave en la economía de la isla.", "El turismo tiene un papel clave en la economía de la isla."],
        "Corrige la frase."
      ),
      wo("Lejos de mojarse, el alcalde nadó entre dos aguas hasta el final.", "«Nadar entre dos aguas» (no decantarse) traduce la función de «to sit on the fence»; «lejos de + infinitivo» contrasta con lo que cabía esperar.", "Far from taking a stand, the mayor sat on the fence until the end."),
    ]
  ),
  L(
    "modismos-expresiones-idiomaticas-drill-3",
    "c2r-extra-idioms-story-cloze",
    "Práctica extra: una crónica política llena de modismos",
    "Completa una crónica parlamentaria de la prensa española (con modismos peninsulares como «tirar de la manta» o «echar balones fuera») y reescribe fragmentos en registro neutro.",
    "9 min",
    [
      sec(
        "La crónica",
        [
          "Recuerda la regla: en la crónica, cada modismo resume quién hace qué (quién destapa, quién elude, quién protesta). Para pasarla a registro neutro, sustituye cada modismo por ese contenido con un verbo preciso: tirar de la manta → destapar; echar balones fuera → eludir la responsabilidad; quedar en agua de borrajas → quedar en nada.",
          "«La sesión de control prometía y no defraudó. La oposición, que llevaba semanas con la mosca detrás de la oreja, decidió tirar de la manta: exhibió los correos que probaban que el contrato se había adjudicado a dedo. El ministro, lejos de dar la cara, echó balones fuera y acusó al Gobierno anterior de haber hecho lo mismo. Sus socios, que hasta entonces nadaban entre dos aguas, pusieron el grito en el cielo. Al final, la presidenta de la Cámara tuvo que llamar al orden a unos y a otros, y el asunto quedó, de momento, en agua de borrajas.»",
        ],
        [
          ["Adjudicar a dedo = adjudicar sin concurso, por decisión arbitraria.", "To award a contract without tender, by hand-picking."],
          ["Quedar en agua de borrajas = quedar en nada, no tener consecuencias.", "To come to nothing."],
        ],
        [
          mc(
            "¿Qué hizo la oposición al «tirar de la manta»?",
            ["Sacó a la luz un asunto que se quería ocultar", "Abandonó la sesión", "Pidió disculpas", "Se abstuvo en la votación"],
            0,
            "«Tirar de la manta» (España) = destapar algo turbio que estaba oculto; aquí, exhibir los correos. No significa abandonar, disculparse ni abstenerse.",
          ),
        ]
      ),
    ],
    [
      { ...fb("Completa según la crónica.", "El contrato se había adjudicado a ___.", "dedo", "«A dedo» = sin concurso ni criterio objetivo, por elección arbitraria de quien decide."), en: "The contract had been [hand-picked / awarded without tender]." },
      { ...fb("Completa según la crónica.", "El ministro, lejos de dar la ___, echó balones fuera.", "cara", "«Dar la cara» = responder de los propios actos; «echar balones fuera» es justo lo contrario."), en: "The minister, far from [facing up to it], passed the buck." },
      { ...fb("Completa según la crónica.", "El asunto quedó en agua de ___.", "borrajas", "«Quedar en agua de borrajas» = quedar en nada, sin consecuencias."), en: "The matter [came to nothing]." },
      mc(
        "¿Cuál era la actitud de los socios antes del escándalo?",
        ["Ambigua: no se decantaban por ninguna postura", "Claramente favorable al ministro", "Abiertamente hostil al ministro", "Indiferente al debate"],
        0,
        "«Nadar entre dos aguas» = mantenerse en una postura ambigua para no comprometerse. No indica apoyo ni hostilidad claros, y tampoco indiferencia: estaban pendientes, pero sin mojarse.",
      ),
      mc(
        "Reescribe en registro neutro: «La oposición llevaba semanas con la mosca detrás de la oreja».",
        ["La oposición llevaba semanas recelando.", "La oposición llevaba semanas molesta por un insecto.", "La oposición llevaba semanas de vacaciones.", "La oposición llevaba semanas muy contenta."],
        0,
        "«Estar con la mosca detrás de la oreja» = sospechar, recelar. La lectura literal (insecto) no tiene sentido aquí, y el modismo no habla ni de vacaciones ni de alegría.",
      ),
      toEs(
        "El ministro echó balones fuera durante toda la sesión.",
        "El ministro eludió su responsabilidad durante toda la sesión.",
        "En registro neutro, «echar balones fuera» se sustituye por su contenido: «eludir la responsabilidad» (o «eludir responsabilidades»).",
        ["El ministro eludió responsabilidades durante toda la sesión.", "El ministro eludió la responsabilidad durante toda la sesión.", "El ministro eludió sus responsabilidades durante toda la sesión."],
        "Reescribe en registro neutro, sin el modismo."
      ),
      toEs(
        "Los socios del Gobierno decidieron tirar de la manta.",
        "Los socios del Gobierno decidieron destapar el asunto.",
        "«Tirar de la manta» equivale en registro neutro a «destapar» o «sacar a la luz» algo que se quería ocultar.",
        ["Los socios del Gobierno decidieron sacar a la luz el asunto.", "Los socios del Gobierno decidieron sacar el asunto a la luz.", "Los socios del Gobierno decidieron destapar el escándalo."],
        "Reescribe en registro neutro, sin el modismo."
      ),
      toEs(
        "La oposición decidió tirar la manta y enseñó los correos.",
        "La oposición decidió tirar de la manta y enseñó los correos.",
        "El modismo es «tirar de la manta» (con «de»): se tira de la manta para destapar lo que hay debajo. «Tirar la manta» sería arrojarla, sin sentido figurado.",
        [],
        "Corrige la frase."
      ),
      toEs(
        "El contrato se adjudicó con el dedo, sin concurso.",
        "El contrato se adjudicó a dedo, sin concurso.",
        "La locución es «a dedo», sin artículo: por elección arbitraria. «Con el dedo» es una lectura literal.",
        [],
        "Corrige la frase."
      ),
      toEs("Far from facing up to it, he blamed the previous government.", "Lejos de dar la cara, culpó al Gobierno anterior.", "«Lejos de + infinitivo» (far from) + «dar la cara» (asumir la responsabilidad).", ["Lejos de dar la cara, echó la culpa al Gobierno anterior.", "Lejos de dar la cara, le echó la culpa al Gobierno anterior.", "Lejos de dar la cara, responsabilizó al Gobierno anterior."]),
      wo("Al final el asunto quedó en agua de borrajas.", "«Quedar en agua de borrajas» = no tener consecuencias.", "In the end the matter came to nothing."),
    ]
  ),
  L(
    "refranes-dichos-populares-drill-3",
    "c2r-extra-proverbs-meaning",
    "Práctica extra: refranes que se malinterpretan",
    "Refranes y frases proverbiales cuyo sentido real no coincide con la lectura literal o con el uso que a veces se les da.",
    "8 min",
    [
      sec(
        "El sentido real",
        [
          "Recuerda la regla: el sentido de un refrán es convencional y no se deduce sumando sus palabras; además, muchos funcionan por antífrasis («a buenas horas» = demasiado tarde). Por eso se aprende el refrán entero, con su situación de uso, y no se le cambian piezas.",
          "«A buenas horas, mangas verdes» reprocha que algo llega tarde, cuando ya no sirve (las mangas verdes eran los cuadrilleros de la Santa Hermandad, que llegaban tarde). «A otro perro con ese hueso» significa «no me lo creo, engaña a otro». «Por la boca muere el pez» advierte de que quien habla de más acaba perjudicándose. «Donde las dan, las toman» indica que quien hace daño acaba recibiéndolo. «El hábito no hace al monje» recuerda que la apariencia no cambia la esencia.",
          "Son panhispánicos; «Éramos pocos y parió la abuela» (cuando a un problema se suma otro inesperado) es coloquial y muy frecuente en España.",
        ],
        [
          ["¿Ahora me ofreces ayuda? A buenas horas, mangas verdes.", "Now you offer to help? A bit late for that."],
          ["¿Que no sabías nada? A otro perro con ese hueso.", "You didn't know anything? Pull the other one."],
        ],
        [
          mc(
            "Llegan los bomberos cuando el incendio ya se ha apagado solo. Un vecino comenta:",
            ["A buenas horas, mangas verdes.", "A otro perro con ese hueso.", "Donde las dan, las toman.", "El hábito no hace al monje."],
            0,
            "«A buenas horas, mangas verdes» reprocha que algo llega cuando ya no sirve. «A otro perro con ese hueso» expresa incredulidad, «Donde las dan, las toman» habla de recibir lo que se hace a otros y «El hábito no hace al monje», de las apariencias.",
          ),
        ]
      ),
    ],
    [
      mc(
        "Un político presume en una entrevista de no haber mentido nunca y al día siguiente se publican sus mensajes. ¿Qué refrán aplica?",
        ["Por la boca muere el pez.", "A buenas horas, mangas verdes.", "El hábito no hace al monje.", "Cada oveja con su pareja."],
        0,
        "«Por la boca muere el pez»: hablar de más acaba perjudicando al que habla. Los otros refranes tratan del retraso, de las apariencias y de la afinidad entre personas.",
      ),
      mc(
        "«—Te juro que el informe se borró solo. —Sí, claro. A otro perro con ese hueso.» ¿Qué expresa la respuesta?",
        ["Incredulidad: no se cree la excusa", "Compasión por la pérdida", "Una propuesta para recuperar el archivo", "Un consejo sobre mascotas"],
        0,
        "«A otro perro con ese hueso» = no me engañas, prueba con otro. Expresa incredulidad, no compasión ni una propuesta; el perro y el hueso son solo la imagen.",
      ),
      { ...fb("Completa el refrán.", "Donde las dan, las ___.", "toman", "«Donde las dan, las toman»: quien hace daño o agravia acaba recibiendo lo mismo. «Las» es un clítico sin referente, típico de la fraseología."), en: "Those who give it out [get it back]." },
      { ...fb("Completa el refrán.", "El hábito no hace al ___.", "monje", "«El hábito no hace al monje»: vestir como algo no te convierte en ello; la apariencia engaña."), en: "The habit doesn't make the [monk]." },
      mt(
        "Relaciona el refrán con su sentido.",
        [
          ["A buenas horas, mangas verdes", "llega tarde, cuando ya no sirve"],
          ["Por la boca muere el pez", "quien habla de más se perjudica"],
          ["A otro perro con ese hueso", "no me lo creo"],
          ["Éramos pocos y parió la abuela", "a un problema se suma otro"],
        ],
        "Refranes cuyo sentido no se deduce de sus palabras.",
      ),
      toEn("¿Ahora te disculpas? A buenas horas, mangas verdes.", "Now you apologise? A bit late for that.", "Se traduce la función (reproche por la tardanza), no las palabras.", ["Now you're apologizing? It's a bit late for that.", "Now you apologise? Too little, too late.", "Now you apologize? Too little, too late."]),
      wo("Ya se sabe que por la boca muere el pez.", "Refrán introducido con «ya se sabe que».", "Everyone knows that people who talk too much end up paying for it."),
      toEs("¿Que te has quedado sin batería justo cuando te llamaba? No me lo creo, engaña a otro.", "¿Que te has quedado sin batería justo cuando te llamaba? A otro perro con ese hueso.", "«A otro perro con ese hueso» expresa incredulidad ante una excusa: ve a engañar a otro. El refrán sustituye entera la frase «no me lo creo, engaña a otro».", ["¿Que te has quedado sin batería justo cuando te llamaba? Sí, claro, a otro perro con ese hueso."], "Sustituye la última frase por el refrán que expresa lo mismo."),
      toEs("¿Ahora vienes a ayudar, cuando ya hemos terminado? A malas horas, mangas verdes.", "¿Ahora vienes a ayudar, cuando ya hemos terminado? A buenas horas, mangas verdes.", "El refrán dice «A BUENAS horas» y significa lo contrario: es una antífrasis irónica (demasiado tarde). Cambiar «buenas» por «malas» parece lógico, pero rompe la fórmula fija.", [], "Corrige la frase."),
      toEs("Va siempre con traje caro, pero el hábito no hace al fraile: es un incompetente.", "Va siempre con traje caro, pero el hábito no hace al monje: es un incompetente.", "La fórmula fija es «El hábito no hace al MONJE». Aunque un fraile también lleve hábito, el refrán no admite sustituir la pieza.", [], "Corrige la frase."),
    ]
  ),
  L(
    "refranes-dichos-populares-drill-3",
    "c2r-extra-proverbs-rhythm",
    "Práctica extra: el refranero del Quijote",
    "Sancho Panza habla a base de refranes: reconoce los que siguen vivos, su forma antigua y el efecto que buscaba Cervantes.",
    "8 min",
    [
      sec(
        "Sancho, refranero andante",
        [
          "Recuerda la regla: el refranero fosiliza formas del español clásico (el futuro analítico «decirte he», el futuro de subjuntivo «fueres, vieres», «do» por «donde»). El refrán se cita tal cual, pero para entenderlo se traduce cada forma a su equivalente actual.",
          "Don Quijote reprocha a Sancho que ensarte refranes sin venir a cuento, y Cervantes convierte ese hábito en un rasgo del personaje. Muchos siguen vivos: «Al buen callar llaman Sancho» (la discreción es virtud), «Donde una puerta se cierra, otra se abre», «Dime con quién andas, decirte he quién eres».",
          "«Decirte he» es el futuro analítico del español clásico: infinitivo + forma de «haber», con el pronombre intercalado (hoy «te diré»). Esta mesoclisis desapareció del español, pero sigue en el portugués culto («dir-te-ei»).",
        ],
        [
          ["Al buen callar llaman Sancho.", "Silence is golden."],
          ["Dime con quién andas, decirte he quién eres.", "Tell me who your friends are and I'll tell you who you are."],
        ],
        [
          mc(
            "En «decirte he quién eres», la forma «decirte he» equivale hoy a…",
            ["te diré", "te he dicho", "te decía", "decírtelo"],
            0,
            "Es el futuro analítico clásico (decir + te + he), origen histórico del futuro sintético «te diré». No es un pretérito perfecto («te he dicho»), ni un imperfecto, ni un infinitivo con clíticos.",
          ),
        ]
      ),
    ],
    [
      mc(
        "«Al buen callar llaman Sancho» elogia…",
        ["la discreción, saber callar a tiempo", "a las personas llamadas Sancho", "la elocuencia", "la obediencia a los superiores"],
        0,
        "El refrán elogia la discreción: a quien sabe callar se le considera sensato. No se refiere literalmente a quien se llama Sancho, y la elocuencia y la obediencia no son el tema.",
      ),
      { ...fb("Completa el refrán cervantino.", "Donde una puerta se cierra, otra se ___.", "abre", "«Donde una puerta se cierra, otra se abre»: tras un fracaso surge otra oportunidad. Aparece en el Quijote y sigue plenamente vivo."), en: "When one door closes, another [opens]." },
      mc(
        "¿Qué reprocha don Quijote a Sancho respecto a los refranes?",
        ["Que los encadena sin venir a cuento", "Que no conoce ninguno", "Que los traduce del latín", "Que los cita en verso"],
        0,
        "Don Quijote le pide a Sancho que no ensarte refranes sin ton ni son: el problema es el exceso y la falta de pertinencia. Sancho conoce muchísimos, los dice en castellano y en prosa.",
      ),
      ms(
        "¿Qué rasgos del español clásico conservan los refranes?",
        ["el futuro analítico con pronombre intercalado (decirte he)", "el futuro de subjuntivo (fueres, vieres)", "«do» por «donde»", "el voseo rioplatense", "los anglicismos"],
        [0, 1, 2],
        "Los refranes fosilizan formas antiguas: futuro analítico, futuro de subjuntivo y «do». El voseo rioplatense es un rasgo dialectal moderno (el voseo clásico era otro) y los anglicismos son recientes.",
      ),
      toEs("Tell me who your friends are and I'll tell you who you are.", "Dime con quién andas y te diré quién eres.", "Forma moderna del refrán; la cervantina es «decirte he quién eres».", ["Dime con quién andas, y te diré quién eres.", "Dime con quién andas, decirte he quién eres."]),
      mt(
        "Relaciona la forma clásica con la actual.",
        [
          ["decirte he", "te diré"],
          ["fueres", "vayas"],
          ["do", "donde"],
          ["vieres", "veas"],
        ],
        "Formas antiguas que sobreviven en el refranero y su equivalente en el español actual.",
      ),
      wo("Al buen callar llaman Sancho, así que mejor no digas nada.", "Uso del refrán como consejo de discreción.", "Silence is golden, so you'd better not say anything."),
      toEs("Allá donde fueres, haz lo que vieres.", "Allá donde vayas, haz lo que veas.", "El futuro de subjuntivo (fueres, vieres) ya no se usa fuera de fórmulas fijas y textos jurídicos; en una oración de relativo con valor de futuro el español actual usa el presente de subjuntivo: vayas, veas.", ["Donde vayas, haz lo que veas.", "Allí donde vayas, haz lo que veas."], "Reescribe el refrán en español actual: cambia el futuro de subjuntivo por el presente de subjuntivo."),
      mc(
        "Si Sancho quisiera decir «te contaré lo que pasó» al modo clásico de «decirte he», diría…",
        ["contarte he lo que pasó", "he contarte lo que pasó", "te he contado lo que pasó", "contar he te lo que pasó"],
        0,
        "El futuro analítico es infinitivo + pronombre + forma de «haber»: contar + te + he. «He contarte» invierte el orden, «te he contado» es un pretérito perfecto actual y «contar he te» deja el pronombre fuera de su sitio, entre el infinitivo y «haber».",
      ),
      toEs("No te preocupes por el despido: donde una puerta se cierra, otra ventana se abre.", "No te preocupes por el despido: donde una puerta se cierra, otra se abre.", "El refrán cervantino es «Donde una puerta se cierra, otra se abre»: «otra» se refiere a otra puerta. Añadir «ventana» mezcla el refrán con la versión inglesa («another window opens») y rompe la fórmula.", ["No te preocupes por el despido: cuando una puerta se cierra, otra se abre."], "Corrige la frase."),
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
        [
          "Recuerda la regla: un refrán es un argumento de autoridad popular, no una prueba. Puede acompañar a los datos, pero no sustituirlos; y se rebate oponiéndole otro refrán, señalando su límite o citándolo con ironía.",
          "Apoyo: «Como dice el refrán, más vale prevenir que curar». Rebatirlo: «El refranero también dice lo contrario», «Eso será en tu pueblo», «Los refranes no son datos». Usarlo con ironía: «Sí, sí, a quien madruga Dios le ayuda… y luego se duerme en la reunión». Un refrán es un recurso de autoridad popular, no una prueba.",
        ],
        [
          ["El refranero también dice lo contrario.", "Proverbs also say the opposite."],
          ["Los refranes no son datos.", "Proverbs aren't data."],
        ],
        [
          mc(
            "«—Más vale prevenir que curar. —Ya, pero quien no se arriesga no cruza el río.» La réplica…",
            ["opone un refrán contrario", "acepta el argumento", "cambia de tema", "es un insulto"],
            0,
            "La réplica opone un refrán contrario: el refranero dice una cosa y la opuesta. No acepta el argumento, no cambia de tema y no es un insulto."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "Los refranes no son ___: son sabiduría popular. (pruebas objetivas)", "datos", "Los refranes no son datos ni pruebas objetivas, sino sabiduría popular."),
      fb("Completa la réplica que relativiza el refrán.", "—Al que madruga, Dios lo ayuda. —Eso será en tu ___.", "pueblo", "«Eso será en tu pueblo» rebate el refrán con humor: lo presenta como una costumbre local, no como una verdad general. Es coloquial; en un debate formal se diría «Eso depende del contexto»."),
      mc(
        "¿Por qué un refrán no demuestra nada?",
        ["porque es una generalización popular, no una evidencia", "porque es antiguo", "porque rima", "porque es corto"],
        0,
        "Un refrán no demuestra nada porque es una generalización popular, no una evidencia. Que sea antiguo, rime o sea corto no afecta a su valor probatorio."
      ),
      mc(
        "Uso adecuado de un refrán en un debate formal:",
        ["Como apunta el refrán, más vale prevenir que curar, y los datos lo confirman.", "El refrán lo dice y punto.", "Refrán, luego verdad.", "Mi abuela lo decía, así que es cierto."],
        0,
        "En un debate formal, el refrán puede acompañar a la evidencia: «…y los datos lo confirman». «Lo dice y punto», «Refrán, luego verdad» y «Mi abuela lo decía» usan el refrán como única prueba."
      ),
      ms(
        "¿Qué réplicas rebaten un refrán?",
        ["El refranero también dice lo contrario.", "Los refranes no son datos.", "Eso depende del contexto.", "Totalmente de acuerdo."],
        [0, 1, 2],
        "«El refranero también dice lo contrario», «Los refranes no son datos» y «Eso depende del contexto» rebaten el refrán. «Totalmente de acuerdo» lo acepta en vez de rebatirlo."
      ),
      toEs("Proverbs are not evidence.", "Los refranes no son pruebas.", "Límite del refrán: «no son pruebas / datos», es decir, no demuestran nada.", ["Los refranes no son datos.", "Un refrán no es una prueba."]),
      toEs("Mi abuela decía: «Más vale prevenir que curar».", "Mi abuela decía que más vale prevenir que curar.", "Al citar un refrán en estilo indirecto se suele mantener el presente: el refrán se presenta como una verdad intemporal, no como algo que solo valía entonces. También es correcto adaptar el tiempo («más valía»).", ["Mi abuela decía que más valía prevenir que curar.", "Mi abuela solía decir que más vale prevenir que curar."], "Pasa la frase a estilo indirecto."),
      toEs("Como dice el refrán, más vale prevenir que curar, lo cual demuestra que la vacuna funciona.", "Como dice el refrán, más vale prevenir que curar, y los datos demuestran que la vacuna funciona.", "El error es argumentativo: un refrán no demuestra nada. Puede introducir la idea, pero la prueba tienen que ser los datos: «y los datos demuestran…».", ["Como dice el refrán, más vale prevenir que curar, y los datos confirman que la vacuna funciona.", "Como dice el refrán, más vale prevenir que curar, y los estudios demuestran que la vacuna funciona."], "Corrige la frase: el refrán no puede ser la prueba."),
      wo("El refranero también dice lo contrario, así que no nos sirve de mucho.", "Para rebatir un refrán basta mostrar que el refranero ofrece otro contrario: un refrán no es una prueba.", "The body of proverbs also says the opposite, so it's not much help to us."),
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
        [
          "Recuerda la regla: en el lenguaje jurídico cada sustantivo elige su verbo. Es una colocación fija, no una cuestión de gramática: «poner un recurso» o «hacer alegaciones» se entienden, pero delatan al no especialista; lo profesional es «interponer un recurso» y «formular alegaciones».",
          "Interponer un recurso / una demanda. Dictar sentencia / un auto. Incoar (iniciar) un expediente / un procedimiento. Elevar a público un contrato (formalizarlo ante notario). Formular alegaciones. Levantar acta. Prestar declaración. Otorgar escritura / poder. Incurrir en una infracción.",
        ],
        [
          ["Se incoó un expediente sancionador.", "Disciplinary proceedings were opened."],
          ["El testigo prestó declaración ante el juez.", "The witness gave evidence before the judge."],
        ],
        [
          mc(
            "Se ___ acta de la reunión.",
            ["levantó", "dictó", "interpuso", "otorgó"],
            0,
            "La colocación fija es «levantar acta» de una reunión. Se dicta sentencia, se interpone un recurso y se otorga un poder o testamento."
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
        "En el lenguaje jurídico cada sustantivo exige su verbo: se incoa un expediente, se formulan alegaciones, se presta declaración y se incurre en una infracción."
      ),
      fb("Completa.", "El juez ___ sentencia condenatoria. (pretérito)", "dictó", "Colocación jurídica fija: el juez «dicta sentencia»."),
      fb("Completa.", "Tienen diez días para ___ alegaciones.", "formular", "Colocación jurídica: «formular (o presentar) alegaciones»."),
      fb("Completa.", "El contrato se elevó a ___ ante notario.", "público", "«Elevar a público» un contrato es formalizarlo en escritura ante notario."),
      mc(
        "«Incoar» significa…",
        ["iniciar un procedimiento", "cerrar un caso", "pagar una multa", "firmar un contrato"],
        0,
        "«Incoar» es un término jurídico que significa iniciar un procedimiento o expediente. No es cerrar un caso (archivar), pagar una multa ni firmar un contrato."
      ),
      toEs("The witness gave a statement to the police.", "El testigo prestó declaración ante la policía.", "Colocación jurídica: «prestar declaración» ante la policía o el juez (o simplemente «declarar»).", ["El testigo declaró ante la policía.", "El testigo prestó declaración en comisaría."]),
      wo("La Administración incoó un expediente sancionador contra la empresa.", "Un expediente se «incoa» (se inicia); «sancionador» indica que puede acabar en sanción.", "The Administration opened disciplinary proceedings against the company."),
      toEs("El abogado puso un recurso contra la multa.", "El abogado interpuso un recurso contra la multa.", "«Poner» es un verbo comodín; con «recurso» la colocación jurídica es «interponer» (también «presentar»).", ["El abogado presentó un recurso contra la multa.", "El abogado interpuso recurso contra la multa."], "Sustituye el verbo comodín por la colocación jurídica."),
      toEs("La anciana dictó un poder a favor de su hija ante notario.", "La anciana otorgó un poder a favor de su hija ante notario.", "Un poder se «otorga» (lo concede quien lo firma). «Dictar» se reserva para las resoluciones de un juez o una autoridad: se dicta sentencia, un auto, una orden.", ["La anciana otorgó poder a favor de su hija ante notario."], "Corrige la frase."),
      toEs("El conductor incurrió una infracción grave al saltarse el semáforo.", "El conductor incurrió en una infracción grave al saltarse el semáforo.", "«Incurrir» es intransitivo y rige la preposición «en»: se incurre EN una infracción, en un error, en responsabilidad.", [], "Corrige la frase."),
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
        [
          "Recuerda la regla: explicar un texto administrativo es conservar los datos (qué hay que hacer, en qué plazo, qué pasa si no se hace) y cambiar la forma: tuteo, verbos corrientes en lugar de tecnicismos («llevar» por «aportar», «cerrar» por «proceder al archivo»), frases cortas y un sujeto claro.",
          "«Se le requiere para que, en el plazo improrrogable de quince días hábiles, aporte la documentación acreditativa de su empadronamiento, apercibiéndole de que, de no hacerlo, se procederá al archivo de su solicitud de ayuda, previa resolución dictada al efecto.»",
        ],
        [
          ["Plazo improrrogable = plazo que no se puede ampliar.", "Non-extendable deadline."],
          ["Apercibir = advertir de una consecuencia.", "To warn of a consequence."],
        ],
        [
          mc(
            "¿Qué tiene que hacer la abuela?",
            ["llevar un certificado de empadronamiento en 15 días hábiles", "pagar una multa", "presentarse ante el juez", "mudarse"],
            0,
            "«Aportar documentación acreditativa» significa llevar un documento que lo demuestre, aquí el certificado de empadronamiento en 15 días hábiles. No se habla de multa, juez ni mudanza."
          ),
        ]
      ),
    ],
    [
      mc(
        "¿Qué pasa si no lo hace?",
        ["archivan (cierran) su solicitud de ayuda", "le dan la ayuda igualmente", "le amplían el plazo", "la multan"],
        0,
        "Si no aporta el documento, la solicitud se archiva, es decir, se cierra sin concederla. No le dan la ayuda igualmente, no amplían el plazo (es improrrogable) y no hay multa."
      ),
      mc(
        "«Improrrogable» significa…",
        ["que no se puede ampliar", "que es muy largo", "que empieza mañana", "que es opcional"],
        0,
        "«Improrrogable» es que no admite prórroga, es decir, que no se puede ampliar. No significa que sea largo, que empiece mañana ni que sea opcional."
      ),
      fb("Explica con palabras claras.", "Apercibiéndole de que… → ___ de que… (en lenguaje corriente)", "Advirtiéndole", "«Apercibir» (lenguaje jurídico) = advertir; en lenguaje claro, «advirtiéndole de que»."),
      fb("Explica con palabras claras.", "Documentación acreditativa → documentos que lo ___. (demostrar)", "demuestren", "«Acreditativo» = que demuestra; relativo con antecedente no concreto + subjuntivo: demuestren."),
      { ...fb("Explica.", "Tienes quince días ___, así que no cuentan los fines de semana.", "hábiles", "Los días hábiles excluyen sábados, domingos y festivos."), altAnswers: ["laborables"] },
      toEs("Grandma, you have fifteen working days to bring the certificate.", "Abuela, tienes quince días hábiles para llevar el certificado.", "Lenguaje claro: tuteo familiar y «días hábiles» («working days») para el plazo.", ["Abuela, tienes quince días hábiles para entregar el certificado.", "Abuela, tienes 15 días hábiles para llevar el certificado.", "Abuela, tienes quince días laborables para llevar el certificado.", "Abuela, tienes quince días laborables para entregar el certificado."]),
      toEs("Se procederá al archivo de su solicitud.", "Te cerrarán la solicitud.", "«Proceder al archivo» es estilo nominal administrativo; en lenguaje claro se usa un verbo corriente y se habla directamente a la persona: te cerrarán (o te archivarán) la solicitud.", ["Cerrarán tu solicitud.", "Te archivarán la solicitud.", "Archivarán tu solicitud.", "Te van a cerrar la solicitud.", "Van a cerrar tu solicitud."], "Reescribe la frase en lenguaje claro, tuteando a la abuela."),
      toEs("Abuela, si no llevas el certificado, te ponen una multa.", "Abuela, si no llevas el certificado, te cierran la solicitud.", "La carta no habla de multa: la consecuencia es el archivo de la solicitud de ayuda. Al simplificar no se puede cambiar el dato.", ["Abuela, si no llevas el certificado, te archivan la solicitud.", "Abuela, si no llevas el certificado, te cierran la solicitud de ayuda."], "Corrige la explicación: la consecuencia no es esa."),
      toEs("Abuela, ojo: los quince días son naturales, así que cuentan también los sábados y los domingos.", "Abuela, ojo: los quince días son hábiles, así que no cuentan los sábados ni los domingos.", "La carta dice «quince días hábiles»: se excluyen sábados, domingos y festivos. «Naturales» serían todos los días del calendario. Con la negación, «y» pasa a «ni».", ["Abuela, ojo: los quince días son hábiles, así que no cuentan ni los sábados ni los domingos.", "Abuela, ojo: los quince días son hábiles, así que no cuentan los fines de semana."], "Corrige la explicación."),
      wo("Si no llevas el papel a tiempo, te cierran la solicitud.", "Lenguaje claro para la abuela: tuteo, «llevar el papel» en vez de «aportar la documentación» y presente con valor de futuro («te cierran») en vez de «se procederá al archivo».", "If you don't take the paper in on time, they'll close your application."),
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
        [
          "Recuerda la regla: el contrato fija obligaciones con el futuro («se prorrogará», «deberá») y nombra a cada parte por su papel: arrendador (quien alquila su vivienda, el propietario) y arrendatario (el inquilino). Para resolver un caso, busca la cláusula que lo regula y aplícala al pie de la letra.",
          "Duración: «un año, prorrogable tácitamente por periodos anuales» (se renueva si nadie dice nada). Renta: cantidad mensual; actualización según IPC. Fianza: un mes de renta, se devuelve al final si no hay daños. Desistimiento: el arrendatario puede irse tras seis meses avisando con treinta días de antelación. Obras: requieren consentimiento escrito del arrendador.",
        ],
        [
          ["El contrato se prorrogará tácitamente por periodos anuales.", "The contract will be tacitly renewed for annual periods."],
          ["El arrendatario podrá desistir avisando con treinta días de antelación.", "The tenant may withdraw by giving thirty days' notice."],
        ],
        [
          mc(
            "Nadie comunica nada al terminar el año. ¿Qué ocurre?",
            ["El contrato se renueva automáticamente otro año.", "El contrato se anula.", "Hay que firmar ante notario.", "Se pierde la fianza."],
            0,
            "Si nadie comunica nada, hay prórroga tácita: el contrato se renueva automáticamente otro año. No se anula, no hace falta notario y la fianza no se pierde."
          ),
        ]
      ),
    ],
    [
      mc(
        "El inquilino quiere pintar la casa de negro. ¿Qué necesita?",
        ["consentimiento escrito del arrendador", "nada", "permiso del ayuntamiento", "una sentencia"],
        0,
        "La cláusula de obras exige el consentimiento escrito del arrendador para cambios como pintar de negro. Por eso no basta con nada, y el ayuntamiento o una sentencia no tienen que intervenir."
      ),
      mc(
        "El inquilino se va a los cuatro meses. ¿Puede desistir según la cláusula?",
        ["No, deben haber pasado al menos seis meses.", "Sí, sin condiciones.", "Sí, pero pierde el doble de fianza.", "Solo con abogado."],
        0,
        "La cláusula exige que hayan pasado al menos seis meses para desistir, así que a los cuatro no puede. No es «sin condiciones», no se habla del doble de fianza ni hace falta un abogado."
      ),
      fb("Completa.", "La ___ equivale a un mes de renta y se devuelve al final.", "fianza", "La fianza es la cantidad que el inquilino deposita como garantía y recupera al final."),
      { ...fb("Completa.", "El ___ es quien alquila la vivienda a otro (el propietario).", "arrendador", "El arrendador alquila la vivienda (propietario); el arrendatario es el inquilino."), altAnswers: ["propietario", "casero"] },
      fb("Completa.", "La renta se ___ anualmente según el IPC. (poner al día)", "actualizará", "Futuro de los contratos (actualizará): la renta se pone al día cada año según el IPC."),
      toEs("The tenant must give thirty days' notice.", "El arrendatario deberá avisar con treinta días de antelación.", "Registro de contrato: futuro de obligación («deberá») + «avisar / preavisar con antelación».", ["El arrendatario deberá preavisar con treinta días de antelación.", "El inquilino deberá avisar con treinta días de antelación."]),
      toEs("El casero te devolverá la fianza si no rompes nada.", "El arrendador devolverá la fianza al arrendatario si no hay desperfectos.", "En el contrato no se tutea ni se habla de «casero»: se nombran las partes por su papel (arrendador, arrendatario) y los daños son «desperfectos». El futuro expresa la obligación.", ["El arrendador devolverá la fianza al arrendatario si no existen desperfectos.", "El arrendador restituirá la fianza al arrendatario si no hay desperfectos.", "El arrendador devolverá la fianza al arrendatario en caso de que no haya desperfectos."], "Reescribe la frase en el lenguaje del contrato."),
      toEs("El arrendatario podrá hacer obras sin el consentimiento escrito del arrendador.", "El arrendatario no podrá hacer obras sin el consentimiento escrito del arrendador.", "La cláusula de obras exige el consentimiento escrito del arrendador: es una prohibición salvo autorización, así que la frase necesita la negación.", ["El arrendatario no podrá realizar obras sin el consentimiento escrito del arrendador."], "Corrige la frase según la cláusula de obras."),
      toEs("Si nadie avisa, el contrato se prorrogará expresamente por otro año.", "Si nadie avisa, el contrato se prorrogará tácitamente por otro año.", "Cuando nadie comunica nada, la prórroga es «tácita» (se deduce del silencio de las partes). «Expresa» sería la prórroga que se acuerda de forma explícita.", ["Si nadie avisa, el contrato se prorrogará tácitamente un año más."], "Corrige la frase."),
      wo("La fianza se devolverá al finalizar el contrato si no hay desperfectos.", "Futuro de contrato con se pasivo («se devolverá»), «al finalizar» + sustantivo y «desperfectos» = daños en la vivienda.", "The deposit will be returned at the end of the contract if there is no damage."),
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
        [
          "Recuerda la regla: la mayoría de los términos médicos se arman con piezas grecolatinas de valor fijo: una raíz que dice DÓNDE (cardi-, gastr-, hepat-) y un afijo que dice QUÉ pasa (-itis, -algia, -ectomía, hiper-, bradi-). Si conoces las piezas, puedes descifrar y formar palabras que nunca has visto.",
          "-itis: inflamación (gastritis, otitis). -algia: dolor (neuralgia, mialgia). -ectomía: extirpación (apendicectomía). -scopia: observación (endoscopia). Hiper- / hipo-: exceso / defecto (hipertensión, hipoglucemia). Taqui- / bradi-: rápido / lento (taquicardia, bradicardia). Cardi-: corazón; gastr-: estómago; derm-: piel; neur-: nervio; hepat-: hígado.",
        ],
        [
          ["Hepatitis = inflamación del hígado.", "Inflammation of the liver."],
          ["Taquicardia = latido rápido del corazón.", "Fast heartbeat."],
        ],
        [
          mc(
            "«Mialgia» significa…",
            ["dolor muscular", "inflamación del ojo", "extirpación de un músculo", "exceso de azúcar"],
            0,
            "Mi- (músculo) + -algia (dolor) = dolor muscular. La inflamación sería -itis, la extirpación -ectomía y el exceso de azúcar, hiperglucemia."
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
        "Los afijos grecolatinos tienen valor fijo: -itis (inflamación), -ectomía (extirpación), bradi- (lento), hipo- (por debajo)."
      ),
      { ...fb("Deduce.", "Inflamación de la piel: ___. (derm- + -itis)", "dermatitis", "derm- (piel) + -itis (inflamación) = dermatitis (el DLE también recoge «dermitis»)."), altAnswers: ["dermitis"] },
      fb("Deduce.", "Nivel bajo de azúcar en sangre: ___. (hipo- + glucemia)", "hipoglucemia", "hipo- (por debajo) + glucemia (azúcar en sangre) = hipoglucemia."),
      fb("Deduce.", "Ritmo cardíaco lento: ___. (bradi- + cardia)", "bradicardia", "bradi- (lento) + -cardia (corazón) = bradicardia; lo contrario es taquicardia."),
      mc(
        "«Gastroscopia» es…",
        ["observación del estómago con un instrumento", "extirpación del estómago", "dolor de estómago", "inflamación del estómago"],
        0,
        "Gastr- (estómago) + -scopia (observación con un instrumento) = gastroscopia. La extirpación sería gastrectomía, el dolor gastralgia y la inflamación gastritis."
      ),
      ms(
        "¿Qué términos indican inflamación?",
        ["otitis", "artritis", "neuralgia", "conjuntivitis"],
        [0, 1, 3],
        "El sufijo -itis indica inflamación: otitis, artritis y conjuntivitis. «Neuralgia» lleva -algia, que significa dolor."
      ),
      toEs("El electrocardiograma muestra una taquicardia sinusal.", "El electrocardiograma muestra una bradicardia sinusal.", "Taqui- (rápido) y bradi- (lento) se oponen sobre la misma raíz -cardia (corazón): para decir que el ritmo es lento basta con cambiar el prefijo.", [], "Cambia el prefijo para expresar lo contrario: un ritmo lento."),
      toEs("Le duelen las articulaciones desde hace semanas.", "Presenta artralgias desde hace semanas.", "Artr- (articulación, como en «artritis») + -algia (dolor) = artralgia: dolor articular sin inflamación. En los informes suele ir en plural.", ["Presenta artralgia desde hace semanas.", "Tiene artralgias desde hace semanas.", "Tiene artralgia desde hace semanas.", "Refiere artralgias desde hace semanas."], "Sustituye la descripción por un término formado con -algia, como en un informe."),
      toEs("Le hicieron una gastritis para extirparle parte del estómago.", "Le hicieron una gastrectomía para extirparle parte del estómago.", "La extirpación se nombra con -ectomía: gastrectomía. «Gastritis» (-itis) es la inflamación del estómago, una enfermedad, no una operación.", [], "Corrige la frase."),
      toEs("La neuritis es la inflamación de un músculo.", "La neuritis es la inflamación de un nervio.", "Neur- significa nervio: neuritis = inflamación de un nervio. El músculo es mi- (mialgia, miositis).", [], "Corrige la frase."),
      wo("Le extirparon la vesícula en una colecistectomía sin complicaciones.", "Colecistectomía = colecisto- (vesícula biliar) + -ectomía (extirpación): el sufijo indica que se extirpa, no que se inflama (-itis) ni que se observa (-scopia).", "They removed her gallbladder in an uncomplicated cholecystectomy."),
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
        [
          "Recuerda la regla: el prospecto tiene secciones fijas (indicaciones = para qué sirve; contraindicaciones = cuándo no tomarlo; posología = cuánto y cada cuánto; efectos adversos = reacciones no deseadas) y da órdenes de dos maneras: con infinitivo impersonal («no superar») o con imperativo de usted («consulte»). Para responder a un caso, localiza la sección y aplícala.",
          "«Indicaciones: alivio sintomático del dolor leve o moderado. Contraindicaciones: no tomar en caso de úlcera gástrica ni durante el tercer trimestre de embarazo. Posología: adultos, un comprimido cada 8 horas; no superar los tres comprimidos al día. Efectos adversos frecuentes: náuseas y ardor de estómago. Si los síntomas persisten más de cinco días, consulte a su médico.»",
        ],
        [
          ["Contraindicaciones: situaciones en que no se debe tomar.", "Contraindications."],
          ["No superar los tres comprimidos al día.", "Do not exceed three tablets a day."],
        ],
        [
          mc(
            "¿Puede tomarlo una persona con úlcera gástrica?",
            ["No, está contraindicado.", "Sí, sin problemas.", "Sí, pero solo por la noche.", "Solo si es adulta."],
            0,
            "«Contraindicado» significa que no debe tomarlo: la úlcera gástrica figura en las contraindicaciones. Por eso no vale «sin problemas», y el prospecto no lo permite de noche ni según la edad."
          ),
        ]
      ),
    ],
    [
      mc(
        "¿Cuál es la dosis máxima diaria?",
        ["tres comprimidos", "uno cada hora", "ocho comprimidos", "no hay máximo"],
        0,
        "El prospecto indica no superar tres comprimidos al día. «Uno cada hora» y «ocho comprimidos» superan esa dosis, y sí hay un máximo."
      ),
      mc(
        "El dolor sigue al sexto día. ¿Qué hay que hacer?",
        ["consultar al médico", "duplicar la dosis", "seguir otra semana", "cambiar de farmacia"],
        0,
        "Si el dolor persiste más de cinco días, hay que consultar al médico. Duplicar la dosis o seguir otra semana es peligroso, y cambiar de farmacia no resuelve nada."
      ),
      fb("Completa.", "Las ___ indican para qué sirve el medicamento.", "indicaciones", "Las indicaciones de un prospecto dicen para qué sirve el medicamento; las contraindicaciones, cuándo no tomarlo."),
      fb("Completa.", "Los efectos ___ más frecuentes son náuseas y ardor.", "adversos", "Los efectos adversos (o secundarios) son las reacciones no deseadas del medicamento."),
      fb("Completa (imperativo usted).", "Si los síntomas persisten, ___ a su médico. (consultar)", "consulte", "Imperativo formal de usted: consulte (presente de subjuntivo)."),
      mt(
        "Relaciona la sección del prospecto con su contenido.",
        [
          ["posología", "dosis y frecuencia"],
          ["contraindicaciones", "cuándo no tomarlo"],
          ["efectos adversos", "reacciones no deseadas"],
        ],
        "La posología dice cuánto y cada cuánto tomarlo; las contraindicaciones, cuándo no tomarlo; los efectos adversos, qué reacciones no deseadas pueden aparecer."
      ),
      toEs("No tomar en caso de úlcera gástrica.", "No lo tome si tiene úlcera gástrica.", "El infinitivo impersonal del prospecto («no tomar») equivale a un imperativo negativo de usted, que se forma con el presente de subjuntivo: no lo tome.", ["No lo tome en caso de úlcera gástrica.", "No tome este medicamento si tiene úlcera gástrica.", "No tome este medicamento en caso de úlcera gástrica.", "No lo tome si padece úlcera gástrica."], "Cambia el infinitivo del prospecto por un imperativo de usted."),
      toEs("Si el dolor persiste más de cinco días, duplique la dosis.", "Si el dolor persiste más de cinco días, consulte a su médico.", "El prospecto nunca autoriza a superar la dosis máxima: si los síntomas persisten, la instrucción es consultar al médico.", ["Si el dolor persiste más de cinco días, consulte con su médico."], "Corrige la instrucción según el prospecto."),
      toEs("Antes de tomarlo durante el embarazo, es importante que consultará a su médico.", "Antes de tomarlo durante el embarazo, es importante que consulte a su médico.", "«Es importante que» valora una acción y exige subjuntivo: consulte. El futuro de indicativo («consultará») no puede ir detrás de una expresión de valoración.", ["Antes de tomarlo durante el embarazo, es importante que consulte con su médico."], "Corrige la frase."),
      wo("No supere la dosis recomendada sin consultar antes a su médico.", "El prospecto trata al paciente de usted: imperativo negativo «no supere» (presente de subjuntivo) y «sin + infinitivo» («sin consultar antes»).", "Do not exceed the recommended dose without consulting your doctor first."),
    ]
  ),
  L(
    "espanol-medico-drill-3",
    "c2r-extra-medical-emergency-call",
    "Práctica extra: el pase de guardia y la interconsulta",
    "Cómo hablan los profesionales entre sí: estable, afebril, evolución tórpida, se solicita valoración, pendiente de resultados.",
    "8 min",
    [
      sec(
        "Entre colegas",
        [
          "Recuerda la regla: entre colegas se habla en estilo nominal y con términos que condensan un dato clínico («afebril» = sin fiebre, «tórpida» = mala evolución, «pendiente de» = a la espera). Las peticiones a otro servicio tienen fórmula fija: «se solicita valoración por…».",
          "En el cambio de turno (el «pase de guardia» en España; la «entrega de turno» en muchos países de América) se transmite el estado de cada paciente con un léxico compacto: «hemodinámicamente estable», «afebril» (sin fiebre), «normotenso» (con tensión normal), «evolución favorable» o «tórpida» (lenta y con complicaciones), «pendiente de» (resultados, TAC, valoración), «se deja en observación», «ingreso en planta».",
          "La «interconsulta» es la petición formal de opinión a otro servicio: «Se solicita valoración por Cardiología por…». No se «pide ayuda»: se «solicita valoración».",
        ],
        [
          ["Cama 12: afebril, hemodinámicamente estable, pendiente del TAC.", "Bed 12: afebrile, haemodynamically stable, awaiting the CT scan."],
          ["La herida presenta una evolución tórpida.", "The wound is healing poorly."],
          ["Se solicita valoración por Neurología.", "A neurology consultation is requested."],
        ],
        [
          mc(
            "«La evolución ha sido tórpida» significa que…",
            ["el paciente evoluciona mal, de forma lenta y con complicaciones", "el paciente ha mejorado muy deprisa", "el paciente ha recibido el alta", "el paciente está dormido"],
            0,
            "«Tórpido» en medicina = que evoluciona mal, de forma lenta y con complicaciones. Es lo contrario de una mejoría rápida, no implica alta y no tiene que ver con el sueño (aunque «tórpido» sugiera torpeza o lentitud).",
          ),
        ]
      ),
    ],
    [
      { ...fb("Completa con el término del pase de guardia.", "El paciente sigue ___: 36,8 °C en la última toma.", "afebril", "«Afebril» = sin fiebre. Es el término técnico habitual en informes y pases de guardia."), en: "The patient remains [afebrile]: 36.8 °C at the last reading." },
      { ...fb("Completa la fórmula de interconsulta.", "Se ___ valoración por Cardiología por soplo de nueva aparición.", "solicita", "Fórmula fija de la interconsulta: «se solicita valoración por + servicio»."), en: "A Cardiology consultation [is requested] for a new-onset murmur.", altAnswers: ["pide"] },
      mt(
        "Relaciona el término con su significado.",
        [
          ["normotenso", "con tensión arterial normal"],
          ["hemodinámicamente estable", "con constantes circulatorias estables"],
          ["ingreso en planta", "hospitalización en una unidad general"],
          ["pendiente de", "a la espera de"],
        ],
        "Léxico del pase de guardia.",
      ),
      mc(
        "¿Qué frase pertenece al registro profesional de un pase de guardia?",
        ["Cama 5: estable, pendiente de analítica de control.", "El de la cama 5 está bastante bien, creo.", "Al de la cama 5 le duele todo un montón.", "La cama 5 está pachucha."],
        0,
        "La primera usa el léxico compacto y preciso del pase de guardia. Las otras son coloquiales o vagas («creo», «un montón», «pachucha» = algo enfermo, coloquial de España) e impropias entre profesionales.",
      ),
      mc(
        "En muchos hospitales de América, el «pase de guardia» español se llama…",
        ["entrega de turno", "alta médica", "interconsulta", "parte de baja"],
        0,
        "«Entrega de turno» es la denominación frecuente en América para el traspaso de pacientes entre turnos. El alta es la salida del paciente, la interconsulta es la consulta a otro servicio y el «parte de baja» es un documento laboral.",
      ),
      toEs("Bed 3: afebrile, normotensive, awaiting the Neurology consultation. (the patient is a woman)", "Cama 3: afebril, normotensa, pendiente de valoración por Neurología.", "Estilo nominal del pase de guardia: sin verbos, términos técnicos («afebril», «normotensa», que concuerda con la paciente) y «pendiente de» para lo que falta.", ["Cama 3: afebril, normotensa, pendiente de la valoración por Neurología.", "Cama 3: afebril y normotensa, pendiente de valoración por Neurología.", "Cama tres: afebril, normotensa, pendiente de valoración por Neurología.", "Cama 3: afebril, normotensa, pendiente de valoración de Neurología."]),
      toEs("El de la cama 9 ya no tiene fiebre y la tensión la tiene bien.", "Cama 9: afebril y normotenso.", "En el pase de guardia se suprimen verbos y artículos y cada dato se condensa en un término: sin fiebre = afebril; tensión normal = normotenso.", ["Cama 9: afebril, normotenso.", "Cama nueve: afebril y normotenso.", "Cama 9: afebril y normotenso."], "Reescribe la frase en el registro del pase de guardia."),
      toEs("La evolución es tórpida, así que mañana le damos el alta.", "La evolución es favorable, así que mañana le damos el alta.", "«Tórpida» significa que el paciente evoluciona mal, despacio y con complicaciones: no justifica un alta. Lo coherente con «le damos el alta» es una evolución «favorable».", ["La evolución es buena, así que mañana le damos el alta.", "La evolución es favorable, así que mañana se le da el alta."], "Corrige la frase."),
      toEs("Pedimos ayuda a Cardiología por el soplo de la cama 4.", "Se solicita valoración por Cardiología por el soplo de la cama 4.", "Una interconsulta no «pide ayuda»: «se solicita valoración por + servicio». Es la fórmula fija, impersonal, del registro hospitalario.", ["Se solicita valoración por Cardiología por soplo en la cama 4.", "Solicitamos valoración por Cardiología por el soplo de la cama 4."], "Corrige la frase: es una interconsulta formal."),
      wo("Se deja en observación a la espera de la analítica de control.", "«Dejar en observación» = mantener al paciente en urgencias vigilado.", "The patient is kept under observation pending the follow-up blood tests."),
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
        [
          "Recuerda la regla: muchas expresiones corrientes salen de una metáfora conceptual, es decir, de pensar algo abstracto como algo concreto (el tiempo como dinero, la discusión como guerra, las ideas como alimentos). Si identificas la metáfora de base, entiendes la familia entera y puedes elegir el verbo que encaja con ella.",
          "El tiempo es dinero: invertir, gastar, ahorrar, perder tiempo. Las discusiones son guerras: atacar un argumento, defender una postura, ganar/perder un debate. Las ideas son alimentos: digerir una noticia, tragarse una mentira, una idea indigesta. La vida es un viaje: estar en una encrucijada, ir por buen camino, llegar a la meta. El cuerpo en los objetos: el pie de la montaña, el brazo del sillón, la boca del metro.",
        ],
        [
          ["Me costó digerir la noticia.", "It was hard to take in the news."],
          ["Atacó cada punto de mi argumento.", "He attacked every point of my argument."],
        ],
        [
          mc(
            "«No me trago esa excusa» se basa en la metáfora…",
            ["las ideas son alimentos", "el tiempo es dinero", "las discusiones son guerras", "la vida es un viaje"],
            0,
            "«Tragarse» una excusa es aceptarla, como si las ideas fueran alimentos. «El tiempo es dinero», «las discusiones son guerras» y «la vida es un viaje» son otras metáforas que aquí no aparecen."
          ),
        ]
      ),
    ],
    [
      mt(
        "Relaciona la expresión con su metáfora conceptual.",
        [
          ["invertir tiempo", "el tiempo es dinero"],
          ["defender una postura", "las discusiones son guerras"],
          ["una idea indigesta", "las ideas son alimentos"],
          ["estar en una encrucijada", "la vida es un viaje"],
        ],
        "Cada expresión trata un concepto abstracto como otra cosa: el tiempo como dinero, la discusión como guerra, la idea como alimento, la vida como viaje."
      ),
      { ...fb("Completa.", "No quiero ___ más tiempo en esta discusión. (desperdiciar, metáfora económica)", "perder", "Metáfora «el tiempo es dinero»: perder, gastar o ahorrar tiempo."), altAnswers: ["gastar", "malgastar", "desperdiciar"] },
      fb("Completa.", "Nos vemos en la ___ del metro. (entrada, parte del cuerpo)", "boca", "«Boca del metro»: la entrada se nombra con una parte del cuerpo."),
      fb("Completa.", "Su argumento no resistió el primer ___. (asalto bélico)", "ataque", "Metáfora bélica: las discusiones son guerras, con ataques, defensas y asaltos."),
      mc(
        "«Estoy en una encrucijada» significa…",
        ["tengo que tomar una decisión importante", "estoy perdido en la ciudad", "estoy en un cruce de calles literalmente siempre", "estoy de viaje"],
        0,
        "Según la metáfora «la vida es un viaje», una encrucijada es un momento de tomar una decisión importante. No indica que estés perdido, en un cruce literal ni de viaje."
      ),
      ms(
        "¿Qué expresiones usan la metáfora «el tiempo es dinero»?",
        ["ahorrar tiempo", "gastar el tiempo", "invertir tiempo", "matar el tiempo"],
        [0, 1, 2],
        "«Ahorrar», «gastar» e «invertir» tiempo tratan el tiempo como dinero. «Matar el tiempo» usa otra imagen: el tiempo como algo que se elimina."
      ),
      toEs("Criticó mi propuesta punto por punto.", "Atacó mi propuesta punto por punto.", "Con la metáfora «las discusiones son guerras», criticar es «atacar» y la propuesta es un territorio que se defiende o se pierde.", ["Atacó mi propuesta punto a punto."], "Reescribe la frase con la metáfora «las discusiones son guerras»."),
      toEs("Pasé dos horas en el atasco sin hacer nada útil.", "Perdí dos horas en el atasco.", "Con la metáfora «el tiempo es dinero», el tiempo que no sirve para nada se «pierde» o se «malgasta», como el dinero.", ["Malgasté dos horas en el atasco.", "Perdí dos horas en el atasco sin hacer nada útil.", "Desperdicié dos horas en el atasco."], "Cambia la frase por una expresión de la metáfora «el tiempo es dinero»."),
      toEs("Su crítica fue muy digestiva: nadie en la sala la aceptó.", "Su crítica fue muy indigesta: nadie en la sala la aceptó.", "Con la metáfora «las ideas son alimentos», una idea difícil de aceptar es «indigesta» (no se puede digerir). «Digestiva» diría lo contrario y no encaja con «nadie la aceptó».", [], "Corrige la frase."),
      toEs("Tardamos semanas a ganar aquel debate.", "Tardamos semanas en ganar aquel debate.", "«Tardar» rige «en» + infinitivo: tardar semanas EN ganar. «Ganar un debate» pertenece a la metáfora bélica de la discusión.", [], "Corrige la frase."),
      wo("Tardé días en digerir lo que me había contado.", "Metáfora «las ideas son alimentos»: «digerir» una noticia es asimilarla; «tardar + tiempo + en + infinitivo» dice cuánto costó.", "It took me days to take in what he had told me."),
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
        [
          "Recuerda la regla: para una misma realidad hay tres escalones: el término neutro (morir), el eufemismo que suaviza (fallecer) y el disfemismo que rebaja o ridiculiza (palmarla). Ninguno es incorrecto en sí: lo que decide es el contexto, y equivocarse de escalón es un error de registro.",
          "Eufemismo: suaviza (fallecer, invidente, persona sin hogar, interrupción del embarazo). Disfemismo: endurece o ridiculiza, a menudo con humor o desprecio (palmarla, estirar la pata, criar malvas, la caja tonta por la televisión). Término neutro: morir, ciego, indigente, televisión. Elegir uno u otro revela la actitud del hablante.",
        ],
        [
          ["Estiró la pata a los noventa. (disfemismo coloquial)", "He kicked the bucket at ninety."],
          ["Falleció a los noventa años. (eufemismo formal)", "He passed away at ninety."],
        ],
        [
          mc(
            "«La caja tonta» por «la televisión» es…",
            ["un disfemismo", "un eufemismo", "un término técnico", "un tecnicismo médico"],
            0,
            "«La caja tonta» ridiculiza la televisión: es un disfemismo. Un eufemismo la suavizaría, y no es un término técnico ni médico."
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
        "«Fallecer» suaviza (eufemismo), «estirar la pata» rebaja con humor (disfemismo) y «morir» es el término neutro."
      ),
      fb("Eufemiza.", "Es ciego. → Es ___. (que no ve, término cortés)", "invidente", "«Invidente» es el término cortés para una persona que no ve."),
      { ...fb("Eufemiza.", "Un vagabundo → una persona sin ___.", "hogar", "«Persona sin hogar» es la forma respetuosa que evita el despectivo «vagabundo»."), altAnswers: ["techo"] },
      mc(
        "¿En qué contexto sería inapropiado «la palmó»?",
        ["en una esquela", "en un chiste entre amigos", "en una novela de humor negro", "en una conversación informal"],
        0,
        "«La palmó» es un disfemismo vulgar, inapropiado en una esquela, que exige registro solemne. En un chiste, una novela de humor negro o una charla informal puede encajar."
      ),
      mc(
        "«Criar malvas» significa…",
        ["estar muerto (disfemismo humorístico)", "ser jardinero", "tener mascotas", "trabajar en el campo"],
        0,
        "«Criar malvas» es un disfemismo humorístico para estar muerto (enterrado). No tiene relación literal con la jardinería, las mascotas ni el campo."
      ),
      ms(
        "¿Qué expresiones son disfemismos?",
        ["estirar la pata", "la caja tonta", "palmarla", "fallecer"],
        [0, 1, 2],
        "«Estirar la pata», «la caja tonta» y «palmarla» son disfemismos: rebajan o ridiculizan. «Fallecer» es un eufemismo formal."
      ),
      toEs("Mi tío la palmó la semana pasada.", "Mi tío falleció la semana pasada.", "«Palmarla» es un disfemismo vulgar; en un registro respetuoso se sube dos escalones, hasta el eufemismo: «falleció».", ["Mi tío falleció la pasada semana.", "Mi tío nos dejó la semana pasada."], "Pasa a un registro respetuoso: sustituye el disfemismo por un eufemismo."),
      toEs("Es una persona invidente desde la infancia.", "Es ciega desde la infancia.", "«Invidente» es el eufemismo cortés; el término neutro es «ciego, ciega», que hoy usan con normalidad las propias organizaciones de personas ciegas.", ["Es una persona ciega desde la infancia.", "Es ciego desde la infancia.", "Es una persona ciega desde la niñez.", "Es ciega desde la niñez."], "Cambia el eufemismo por el término neutro."),
      toEs("Lamentamos comunicar que nuestro querido director estiró la pata el domingo.", "Lamentamos comunicar que nuestro querido director falleció el domingo.", "Un comunicado de pésame exige el eufemismo formal («falleció»). «Estirar la pata» es un disfemismo humorístico: aquí resulta ofensivo.", ["Lamentamos comunicar que nuestro querido director murió el domingo."], "Corrige el comunicado."),
      toEs("«Estirar la pata» es un eufemismo que suaviza la muerte.", "«Estirar la pata» es un disfemismo que rebaja la muerte con humor.", "La expresión no suaviza: rebaja la muerte a una imagen animal y cómica. Es un disfemismo, lo contrario de un eufemismo.", ["«Estirar la pata» es un disfemismo que rebaja la muerte.", "«Estirar la pata» es un disfemismo que trata la muerte con humor."], "Corrige la afirmación."),
      wo("Lamentamos comunicar que nuestro compañero falleció anoche.", "«Fallecer» es el eufemismo formal propio de un comunicado; «lamentamos comunicar que» introduce la mala noticia con cortesía.", "We regret to announce that our colleague passed away last night."),
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
        [
          "Recuerda la regla: el titular condensa con tres recursos. La metonimia nombra una institución por su lugar (la Moncloa = el Gobierno español; Bruselas = la UE), la metáfora traslada una imagen (luz verde = aprobación) y el eufemismo suaviza (ajuste = despidos). Literalizar es sustituir cada recurso por lo que designa; titular es hacer el camino inverso.",
          "«La Moncloa mueve ficha» (metonimia + metáfora del ajedrez: el Gobierno actúa). «Tormenta en los mercados» (metáfora: fuerte inestabilidad). «Ajuste de plantilla en la automoción» (eufemismo: despidos). «El Bernabéu enmudece» (metonimia: el público del estadio calla). «Luz verde a los presupuestos» (metáfora: aprobación).",
        ],
        [
          ["La Moncloa mueve ficha.", "The government makes its move."],
          ["Tormenta en los mercados.", "Turmoil in the markets."],
        ],
        [
          mc(
            "«El Bernabéu enmudece» significa…",
            ["el público del estadio se queda en silencio", "el estadio se rompe", "un jugador deja de hablar", "cierran el estadio"],
            0,
            "Metonimia (lugar por personas): el Bernabéu es su público, que se queda en silencio. El estadio no se rompe ni cierra, y no se refiere a un jugador."
          ),
        ]
      ),
    ],
    [
      mc(
        "«Luz verde a los presupuestos» →",
        ["Se aprueban los presupuestos.", "Se rechazan los presupuestos.", "Se ilumina el Parlamento.", "Se retrasan los presupuestos."],
        0,
        "Metáfora del semáforo: «luz verde» significa que se aprueban. Rechazarlos sería «luz roja», y no se trata de iluminar el Parlamento ni de retrasos."
      ),
      mc(
        "«Ajuste de plantilla en la automoción» oculta…",
        ["despidos en el sector del automóvil", "contrataciones", "subidas de sueldo", "nuevas fábricas"],
        0,
        "«Ajuste de plantilla» es un eufemismo laboral de despidos. Contrataciones, subidas de sueldo o nuevas fábricas serían noticias positivas, que no necesitan eufemismo."
      ),
      { ...fb("Literaliza.", "Washington endurece el tono. → El ___ de Estados Unidos endurece el tono.", "Gobierno", "Metonimia: la capital (Washington) representa al Gobierno de Estados Unidos."), altAnswers: ["Ejecutivo"] },
      fb("Literaliza.", "Tormenta en los mercados. → Fuerte ___ en los mercados. (falta de estabilidad)", "inestabilidad", "Metáfora meteorológica: «tormenta» = fuerte inestabilidad o turbulencia."),
      mc(
        "«La Moncloa mueve ficha» combina…",
        ["metonimia y metáfora", "hipérbole y sinestesia", "eufemismo y oxímoron", "símil y anáfora"],
        0,
        "«La Moncloa» (lugar por institución) es metonimia, y «mover ficha» (del ajedrez) es metáfora. No hay hipérbole ni sinestesia, eufemismo ni oxímoron, ni símil ni anáfora."
      ),
      ms(
        "¿Qué titulares usan metonimia?",
        ["Bruselas advierte a Madrid", "El Bernabéu enmudece", "La Casa Rosada responde", "Sube el precio del pan"],
        [0, 1, 2],
        "«Sube el precio del pan» es literal; en los demás, un lugar (Bruselas, el Bernabéu, la Casa Rosada) nombra a la institución o a las personas asociadas a él."
      ),
      toEs("La Casa Blanca da luz verde al acuerdo.", "El Gobierno de Estados Unidos aprueba el acuerdo.", "Dos recursos que literalizar: «la Casa Blanca» es metonimia (la residencia por el Gobierno o la presidencia de EE. UU.) y «dar luz verde» es metáfora de aprobar.", ["El Gobierno estadounidense aprueba el acuerdo.", "El presidente de Estados Unidos aprueba el acuerdo.", "La Administración estadounidense aprueba el acuerdo.", "El Gobierno de EE. UU. aprueba el acuerdo."], "Reescribe el titular en lenguaje literal."),
      toEs("El Gobierno de España responde a la Comisión Europea.", "Madrid responde a Bruselas.", "El titular sustituye cada institución por la ciudad donde tiene su sede: metonimia del lugar por la institución. Es más corto y más periodístico.", ["La Moncloa responde a Bruselas."], "Convierte el titular en uno figurado: usa metonimias de lugar."),
      toEs("Bruselas da luz roja al nuevo plan: lo aprueba por unanimidad.", "Bruselas da luz verde al nuevo plan: lo aprueba por unanimidad.", "La metáfora del semáforo tiene que concordar con el hecho: aprobar es «dar luz verde». «Luz roja» significaría bloquearlo y contradice «lo aprueba».", [], "Corrige el titular."),
      wo("Bruselas da luz verde al nuevo plan de ayudas.", "«Bruselas» es metonimia (la ciudad por las instituciones europeas) y «dar luz verde» es metáfora del semáforo: aprobar.", "Brussels gives the green light to the new aid plan."),
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
        [
          "Recuerda la regla: cada parte de una argumentación lleva su marcador, y el marcador anuncia la función de la frase antes de que se lea su contenido. «Es cierto que» concede, «sin embargo» refuta lo concedido, «por todo ello» concluye. Si cambias el marcador, cambias la función.",
          "1) Tesis: «Defenderé que…». 2) Argumento 1: «En primer lugar…». 3) Argumento 2: «Además…». 4) Concesión: «Es cierto que…». 5) Refutación: «Sin embargo…». 6) Conclusión: «Por todo ello…». Los marcadores son la pista para reconstruir el orden.",
        ],
        [
          ["Defenderé que la jornada de cuatro días es viable.", "I will argue that the four-day week is viable."],
          ["Por todo ello, merece la pena ensayarla.", "For all these reasons, it's worth trying."],
        ],
        [
          mc(
            "«Es cierto que algunos sectores no podrán aplicarla.» ocupa el lugar de…",
            ["la concesión", "la tesis", "la conclusión", "el primer argumento"],
            0,
            "«Es cierto que» reconoce una objeción: es la concesión. La tesis es la postura defendida, la conclusión cierra y el primer argumento apoya la tesis."
          ),
        ]
      ),
    ],
    [
      mc(
        "«En primer lugar, los estudios piloto muestran un aumento de la productividad.»",
        ["primer argumento", "conclusión", "concesión", "refutación"],
        0,
        "«En primer lugar» + un dato a favor introduce el primer argumento. No es la conclusión, no concede nada al rival ni refuta una objeción."
      ),
      mc(
        "«Sin embargo, esos sectores podrían adoptar turnos rotativos.»",
        ["refutación", "tesis", "primer argumento", "conclusión"],
        0,
        "«Sin embargo» tras la concesión responde a la objeción: es la refutación. No es la tesis, el primer argumento ni la conclusión."
      ),
      mc(
        "«Por todo ello, merece la pena ensayar la medida.»",
        ["conclusión", "concesión", "tesis", "argumento"],
        0,
        "«Por todo ello» recoge lo dicho e introduce la conclusión. No es una concesión, ni la tesis inicial, ni un argumento más."
      ),
      { ...fb("Completa.", "___ que la medida es viable y beneficiosa. (anunciar la tesis, futuro)", "Defenderé", "El futuro «Defenderé que…» anuncia la tesis al inicio del texto."), altAnswers: ["Sostendré", "Argumentaré"] },
      { ...fb("Completa.", "___, reduce el absentismo laboral. (segundo argumento, adición)", "Además", "«Además» introduce un argumento que se suma al anterior (adición)."), altAnswers: ["Asimismo", "Igualmente"] },
      mc(
        "Orden correcto:",
        ["tesis → argumentos → concesión → refutación → conclusión", "conclusión → tesis → refutación", "concesión → conclusión → tesis", "refutación → tesis → argumentos"],
        0,
        "El esqueleto clásico es tesis → argumentos → concesión → refutación → conclusión. Las demás empiezan por la conclusión, la concesión o la refutación, lo que desordena el razonamiento."
      ),
      toEs("El teletrabajo aísla a algunos empleados, pero las reuniones semanales lo compensan.", "Es cierto que el teletrabajo aísla a algunos empleados; sin embargo, las reuniones semanales lo compensan.", "La concesión reconoce la objeción con «Es cierto que…» y la refutación la responde con «sin embargo». Es más fuerte que un simple «pero» porque muestra que conoces el argumento contrario.", ["Es cierto que el teletrabajo aísla a algunos empleados, sin embargo, las reuniones semanales lo compensan.", "Es cierto que el teletrabajo aísla a algunos empleados. Sin embargo, las reuniones semanales lo compensan.", "Es cierto que el teletrabajo aísla a algunos empleados; no obstante, las reuniones semanales lo compensan."], "Transforma la frase en concesión + refutación con «Es cierto que…; sin embargo,…»."),
      toEs("Defenderé que hay que limitar el tráfico en el centro.", "Por todo ello, hay que limitar el tráfico en el centro.", "La misma idea cambia de función según el marcador: «Defenderé que» la anuncia como tesis al principio; «Por todo ello» la presenta como conclusión que recoge los argumentos.", ["Por todo ello, considero que hay que limitar el tráfico en el centro.", "Por todo ello, es necesario limitar el tráfico en el centro."], "Reescribe la tesis como conclusión, con el marcador adecuado."),
      toEs("Es cierto que la medida tiene costes; además, los beneficios los superan.", "Es cierto que la medida tiene costes; sin embargo, los beneficios los superan.", "Tras una concesión («Es cierto que…») hace falta un marcador adversativo que la refute: «sin embargo», «no obstante». «Además» suma un argumento en la misma dirección y deja la concesión sin respuesta.", ["Es cierto que la medida tiene costes; no obstante, los beneficios los superan.", "Es cierto que la medida tiene costes, pero los beneficios los superan."], "Corrige el marcador."),
      wo("Por todo ello, considero que merece la pena ensayar la medida.", "«Por todo ello» recoge los argumentos anteriores y abre la conclusión; «merecer la pena + infinitivo» = valer la pena.", "For all these reasons, I think the measure is worth trying."),
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
        [
          "Recuerda la regla: una negociación avanza por fases y cada fase tiene su forma verbal. Se explora con preguntas abiertas, se cede con condicional + «siempre que / con tal de que» + subjuntivo (la cesión queda atada a una condición), se presiona con «me temo que» + indicativo y se cierra comprobando el acuerdo.",
          "Abrir: «Gracias por recibirnos; nos gustaría exponer…». Explorar: «¿Qué margen tienen en el precio?». Proponer: «Nuestra propuesta es…». Ceder condicionando: «Podríamos aceptarlo siempre que…». Presionar con cortesía: «Me temo que es nuestra última oferta». Cerrar: «Entonces, ¿estamos de acuerdo en…?».",
        ],
        [
          ["Me temo que esta es nuestra última oferta.", "I'm afraid this is our final offer."],
          ["Entonces, ¿estamos de acuerdo en los tres puntos?", "So, do we agree on the three points?"],
        ],
        [
          mc(
            "«¿Qué margen tienen en los plazos?» pertenece a la fase de…",
            ["exploración", "cierre", "apertura", "presión"],
            0,
            "Preguntar por el margen del otro busca información: fase de exploración. El cierre fija el acuerdo, la apertura presenta posturas y la presión busca concesiones."
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
        "«Nuestra propuesta es…» propone, «siempre que» condiciona una cesión, «¿estamos de acuerdo en…?» cierra y «me temo que es nuestra última oferta» presiona con cortesía."
      ),
      fb("Completa (presión cortés).", "Me ___ que no podemos bajar más. (temer)", "temo", "«Me temo que» + indicativo suaviza una negativa firme (presión cortés)."),
      fb("Completa (ceder).", "Podríamos aceptarlo siempre ___ ustedes asuman el transporte.", "que", "«Siempre que» + subjuntivo (asuman) condiciona una concesión."),
      fb("Completa (subjuntivo).", "Aceptaríamos con tal de que el pago se ___ en 30 días. (realizar)", "realice", "Con tal de que + subjuntivo: tras el condicional «aceptaríamos» lo más habitual es el imperfecto (se realizara), aunque el presente (se realice) también es posible si la condición se ve como futura."),
      ms(
        "¿Qué fórmulas cierran una negociación?",
        ["Entonces, ¿cerramos el acuerdo así?", "Les enviaré el borrador mañana.", "¿Estamos de acuerdo en estos puntos?", "¿Qué margen tienen?"],
        [0, 1, 2],
        "«¿Qué margen tienen?» explora posiciones, todavía no cierra; las demás fórmulas confirman o formalizan el acuerdo."
      ),
      toEs("I'm afraid we can't accept those deadlines.", "Me temo que no podemos aceptar esos plazos.", "Presión cortés: «Me temo que» + indicativo suaviza una negativa firme sin abrir la puerta a discutirla.", ["Me temo que no podemos aceptar estos plazos.", "Me temo que no podemos aceptar dichos plazos."]),
      toEs("Bajamos el precio si ustedes pagan por adelantado.", "Podríamos bajar el precio siempre que ustedes paguen por adelantado.", "Para ceder condicionando, el condicional («podríamos») suaviza la oferta y «siempre que» + subjuntivo («paguen») la ata a una condición.", ["Podríamos bajar el precio siempre que paguen por adelantado.", "Podríamos rebajar el precio siempre que ustedes paguen por adelantado.", "Podríamos bajar el precio con tal de que ustedes paguen por adelantado."], "Transforma la oferta en una cesión condicionada con «siempre que»."),
      toEs("Podríamos firmar hoy siempre que ustedes hacen el primer pago esta semana.", "Podríamos firmar hoy siempre que ustedes hagan el primer pago esta semana.", "«Siempre que» con valor condicional exige subjuntivo: hagan. Con indicativo («siempre que hacen») significaría «cada vez que», un valor temporal que aquí no tiene sentido.", ["Podríamos firmar hoy siempre que hagan el primer pago esta semana."], "Corrige la frase."),
      wo("Podríamos ceder en el precio siempre que ampliaran el pedido.", "Ceder condicionando: condicional («podríamos») + «siempre que» + imperfecto de subjuntivo («ampliaran»).", "We could give way on price provided you increased the order."),
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
        [
          "Recuerda la regla: el argumento no cambia de un registro a otro; cambian el léxico, la seguridad con que se afirma y la persona. Entre amigos: imagen coloquial y «nos». En la tele: «los datos indican», afirmación clara. En el artículo académico: impersonalidad, términos técnicos y verbos de cautela («sugieren», «apuntan a»).",
          "Argumento: las redes sociales polarizan. TV (formal oral): «Los datos indican que las redes sociales contribuyen a la polarización». Amigos: «Las redes nos tienen a todos a la gresca». Académico: «Diversos estudios sugieren una correlación entre el uso intensivo de redes sociales y el aumento de la polarización afectiva».",
        ],
        [
          ["Las redes nos tienen a todos a la gresca.", "Social media has us all at each other's throats."],
          ["Diversos estudios sugieren una correlación…", "Various studies suggest a correlation…"],
        ],
        [
          mc(
            "¿Qué versión es académica?",
            ["Diversos estudios sugieren una correlación entre ambas variables.", "Las redes nos vuelven locos.", "Todo el mundo sabe que las redes son malas.", "Las redes, ¡qué desastre!"],
            0,
            "El registro académico atenúa («sugieren») y usa léxico técnico («correlación», «variables»). «Nos vuelven locos», «Todo el mundo sabe…» y «¡qué desastre!» son coloquiales y absolutos."
          ),
        ]
      ),
    ],
    [
      fb("Coloquial.", "Desde que hay grupo de WhatsApp, en mi familia andamos todos a la ___. (peleados)", "gresca", "«Andar / estar a la gresca» = estar peleados o discutiendo. Es coloquial: sirve entre amigos, no en un artículo."),
      fb("Académico.", "Diversos estudios ___ una correlación entre ambas variables. (indicar con cautela)", "sugieren", "«Sugerir» presenta un resultado con cautela, propio del registro académico."),
      { ...fb("Completa la versión para un debate televisado (registro formal oral).", "Los datos ___ que las redes contribuyen a la polarización.", "indican", "«Los datos indican que» + indicativo: fórmula formal para apoyar una afirmación."), altAnswers: ["muestran", "revelan", "demuestran"] },
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
        "Expresiones coloquiales como «a la gresca» no son propias del registro académico. La atenuación, la impersonalidad y las citas de estudios sí lo son."
      ),
      toEs("Various studies suggest a link between both phenomena.", "Diversos estudios sugieren una relación entre ambos fenómenos.", "Registro académico: «Diversos estudios sugieren / apuntan a una relación…».", ["Varios estudios sugieren una relación entre ambos fenómenos.", "Diversos estudios apuntan a una relación entre ambos fenómenos."]),
      toEs("Los estudios demuestran que las redes polarizan.", "Los estudios sugieren que las redes polarizan.", "El registro académico atenúa: un verbo de cautela («sugieren», «apuntan a que», «indican») presenta el resultado sin afirmar más de lo que prueban los datos. «Demuestran» es demasiado categórico.", ["Los estudios apuntan a que las redes polarizan.", "Los estudios indican que las redes polarizan.", "Diversos estudios sugieren que las redes polarizan."], "Reescribe la frase con un verbo de cautela, propio del registro académico."),
      toEs("Diversos estudios sugieren que las redes nos tienen a todos a la gresca.", "Diversos estudios sugieren que las redes contribuyen a la polarización.", "La frase empieza en registro académico y acaba en coloquial («nos tienen a todos a la gresca»). En un artículo, la segunda parte también tiene que ser impersonal y técnica.", ["Diversos estudios sugieren que las redes favorecen la polarización.", "Diversos estudios sugieren que las redes aumentan la polarización.", "Diversos estudios sugieren que las redes sociales contribuyen a la polarización."], "Corrige la mezcla de registros: es un artículo académico."),
      wo("Los datos indican que el uso intensivo de redes favorece la polarización.", "Registro formal: «Los datos indican que» + indicativo apoya la afirmación en datos, y «el uso intensivo de redes» es una nominalización.", "The data indicate that heavy social media use fosters polarization."),
    ]
  ),
  L(
    "negocios-economia-drill-3",
    "c2r-extra-business-false-friends",
    "Práctica extra: falsos amigos del inglés de negocios",
    "Actual, eventual, librería, compromiso, asistir, aplicación, sensible: evita los calcos del inglés en el español empresarial.",
    "7 min",
    [
      sec(
        "Trampas frecuentes",
        [
          "Recuerda la regla: un falso amigo se parece a la palabra inglesa en la forma, pero no en el significado. La prueba es preguntarse qué significa la palabra española por sí sola («actualmente» = ahora; «eventualmente» = quizá; «sensible» = que siente mucho) y traducir el sentido, no la forma.",
          "Actually → en realidad (no «actualmente» = currently). Eventually → al final (no «eventualmente» = posiblemente). Library → biblioteca (librería = bookshop). To assist → ayudar (asistir = estar presente, aunque también ayudar en registro culto). Compromise → acuerdo / término medio (compromiso suele significar obligación / commitment, aunque «llegar a un compromiso» = llegar a un acuerdo también es correcto). Application → solicitud (aplicación = app). Sensible → sensato (sensible = sensitive).",
        ],
        [
          ["En realidad, el proyecto va bien.", "Actually, the project is going well."],
          ["Al final firmaron el contrato.", "Eventually they signed the contract."],
        ],
        [
          mc(
            "«Eventually we reached an agreement.»",
            ["Al final llegamos a un acuerdo.", "Eventualmente llegamos a un compromiso.", "Actualmente llegamos a un acuerdo.", "Posiblemente llegamos a un compromiso."],
            0,
            "«Eventually» es un falso amigo: significa «al final», no «eventualmente» (que en español es «quizá, ocasionalmente»). «Actualmente» traduce «currently» y «posiblemente» cambia el sentido: «eventually» no expresa posibilidad."
          ),
        ]
      ),
    ],
    [
      fb("Evita el calco.", "Actually, the numbers are good. → En ___, las cifras son buenas.", "realidad", "«Actually» es un falso amigo: significa «en realidad», no «actualmente»."),
      fb("Evita el calco.", "Fill in the application. → Rellene la ___.", "solicitud", "«Application» (para un puesto o una ayuda) = solicitud, no «aplicación»."),
      { ...fb("Evita el calco.", "It's a sensible decision. → Es una decisión ___.", "sensata", "«Sensible» en inglés = sensato; «sensible» en español es «sensitive»."), altAnswers: ["razonable", "juiciosa"] },
      mc(
        "«We reached a compromise» →",
        ["Llegamos a un acuerdo intermedio.", "Llegamos a un compromiso matrimonial.", "Nos comprometimos a nada.", "Llegamos a un compromiso obligatorio."],
        0,
        "«Compromise» es un acuerdo intermedio en el que ambas partes ceden. «Compromiso» en español suele ser una obligación o promesa, por eso «compromiso matrimonial» u «obligatorio» son errores de falso amigo."
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
      toEs("Actually, the meeting has been cancelled.", "En realidad, la reunión se ha cancelado.", "«Actually» = «en realidad» o «de hecho», nunca «actualmente».", ["En realidad, la reunión ha sido cancelada.", "De hecho, la reunión se ha cancelado."]),
      toEs("Eventualmente, la empresa aplicó a la ayuda europea.", "Al final, la empresa solicitó la ayuda europea.", "Dos calcos: «eventualmente» no es «eventually» (= al final, finalmente) y «aplicar a» no es «apply for» (= solicitar, pedir).", ["Finalmente, la empresa solicitó la ayuda europea.", "Al final, la empresa pidió la ayuda europea.", "Finalmente, la empresa pidió la ayuda europea."], "Reescribe la frase sin los dos calcos del inglés."),
      toEs("Actualmente, no estoy de acuerdo con tu análisis: te equivocas en las cifras.", "En realidad, no estoy de acuerdo con tu análisis: te equivocas en las cifras.", "Aquí se corrige al interlocutor, no se habla del momento presente: es «actually» = «en realidad» o «de hecho». «Actualmente» significa «en la actualidad».", ["De hecho, no estoy de acuerdo con tu análisis: te equivocas en las cifras."], "Corrige el calco."),
      toEs("Es un tema muy sensible: hay que tomar una decisión sensible y no precipitarse.", "Es un tema muy sensible: hay que tomar una decisión sensata y no precipitarse.", "El primer «sensible» es correcto (un tema delicado, «sensitive»). El segundo es un calco de «sensible decision»: en español, una decisión prudente es «sensata».", ["Es un tema muy sensible: hay que tomar una decisión sensata y no precipitarnos."], "Corrige el calco."),
      wo("Al final, ambas empresas llegaron a un acuerdo intermedio.", "«Eventually» = «al final» (no «eventualmente») y «compromise» = «acuerdo intermedio».", "Eventually, both companies reached a compromise."),
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
        [
          "Recuerda la regla: al hablar de cifras, el verbo dice la forma de la curva (repuntar = subir después de bajar; desplomarse = caer de golpe; tocar fondo = llegar al mínimo) y la preposición dice qué número se da: «un 5 %» es la variación, «hasta el 8 %» es el nivel final, «del 3 al 5 %» es el punto de partida y el de llegada.",
          "Subir: aumentar, crecer, repuntar (subir tras bajar), dispararse (subir mucho y rápido), duplicarse. Bajar: disminuir, caer, desplomarse (caer bruscamente), tocar fondo (llegar al mínimo). Estable: mantenerse, estancarse (sin avanzar). Preposiciones: crecer un 5 % (cantidad), crecer hasta el 8 % (nivel final), pasar del 3 al 5 %.",
        ],
        [
          ["Las ventas se dispararon en diciembre.", "Sales soared in December."],
          ["El paro pasó del 12 al 10 %.", "Unemployment went from 12 to 10%."],
        ],
        [
          mc(
            "«Tras meses de caída, las ventas ___ en marzo.» (subir de nuevo)",
            ["repuntaron", "se desplomaron", "se estancaron", "tocaron fondo"],
            0,
            "«Repuntar» es volver a subir tras una caída. «Se desplomaron» sería caer de golpe, «se estancaron» no moverse y «tocaron fondo» llegar al punto más bajo."
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
        "Desplomarse y tocar fondo describen caídas (brusca y hasta el mínimo); dispararse, una subida rápida; estancarse, la falta de movimiento."
      ),
      fb("Completa.", "Las exportaciones crecieron ___ 7 %. (cantidad)", "un", "Para expresar una variación: crecer + un + porcentaje (un 7 %)."),
      fb("Completa.", "La inflación pasó ___ 4 al 2 %.", "del", "«Pasar del X al Y %»: del (de + el) y al (a + el)."),
      fb("Completa.", "Los beneficios se ___: de 10 a 20 millones. (multiplicar por dos)", "duplicaron", "«Duplicarse» = multiplicarse por dos; indefinido para un hecho pasado: se duplicaron."),
      mc(
        "«El mercado inmobiliario tocó fondo en 2013» significa que…",
        ["llegó a su punto más bajo", "alcanzó su máximo", "se mantuvo estable", "desapareció"],
        0,
        "«Tocar fondo» es llegar al punto más bajo, a partir del cual solo se puede subir. No es alcanzar el máximo, mantenerse estable ni desaparecer."
      ),
      toEs("Housing prices soared in the spring.", "Los precios de la vivienda se dispararon en primavera.", "«Dispararse» expresa una subida rápida y fuerte («soar»); es pronominal: se dispararon.", ["Los precios de la vivienda se dispararon en la primavera.", "El precio de la vivienda se disparó en primavera."]),
      toEs("El paro bajó un 9 %.", "El paro bajó hasta el 9 %.", "«Un 9 %» es la variación (cuánto bajó); «hasta el 9 %» es el nivel al que llegó. Cambiar la preposición cambia el dato.", ["El paro bajó al 9 %.", "El paro descendió hasta el 9 %."], "Cambia la frase para dar el nivel final, no la variación."),
      toEs("Tras meses de subidas, las ventas repuntaron: cayeron un 20 % en marzo.", "Tras meses de subidas, las ventas se desplomaron: cayeron un 20 % en marzo.", "«Repuntar» es volver a subir tras una caída. Una caída brusca del 20 % después de subir es «desplomarse».", ["Tras meses de subidas, las ventas se hundieron: cayeron un 20 % en marzo."], "Corrige el verbo de tendencia."),
      toEs("El precio del petróleo tocó fondo en julio de 2008, cuando alcanzó su máximo histórico.", "El precio del petróleo tocó techo en julio de 2008, cuando alcanzó su máximo histórico.", "«Tocar fondo» es llegar al mínimo; el máximo es «tocar techo». La expresión tiene que coincidir con el dato («máximo histórico»).", [], "Corrige la frase."),
      wo("Tras tocar fondo en enero, la demanda empezó a repuntar.", "«Tocar fondo» = llegar al punto más bajo y «repuntar» = volver a subir tras una caída; «tras + infinitivo» marca la anterioridad.", "After hitting bottom in January, demand started to pick up."),
    ]
  ),
  L(
    "negocios-economia-drill-3",
    "c2r-extra-business-pitch",
    "Práctica extra: la nota de prensa de resultados",
    "Lee una nota de resultados semestrales como un analista: qué dice, qué calla y qué esconden sus eufemismos.",
    "8 min",
    [
      sec(
        "La nota",
        [
          "Recuerda la regla: una nota de resultados da las cifras buenas en primer plano y con verbos activos («alcanzó», «creció»), y envuelve las malas en eufemismos y pasivas («se vio afectado por», «plan de optimización»). Leerla como un analista es separar el dato de su envoltorio.",
          "«El Grupo X alcanzó en el primer semestre una cifra de negocio de 1.240 millones de euros, un 6 % más que en el mismo periodo del ejercicio anterior. El resultado bruto de explotación se situó en 180 millones, en línea con las previsiones. El resultado neto atribuido, de 22 millones, se vio afectado por el deterioro extraordinario de los activos en Argentina y por los costes asociados al plan de optimización de la plantilla. El grupo mantiene su compromiso con la reducción del apalancamiento y prevé una mejora de los márgenes en la segunda mitad del año.»",
        ],
        [
          ["Plan de optimización de la plantilla = despidos.", "Workforce optimisation plan = layoffs."],
          ["En línea con las previsiones = ni mejor ni peor de lo esperado.", "In line with forecasts."],
        ],
        [
          mc(
            "¿Qué oculta la expresión «plan de optimización de la plantilla»?",
            ["Un plan de despidos", "Un plan de formación", "Un aumento de sueldos", "Nuevas contrataciones"],
            0,
            "«Optimizar la plantilla» es un eufemismo corporativo por reducirla, es decir, despedir. Si fuera formación, subida salarial o contratación, la nota lo diría abiertamente porque son buenas noticias.",
          ),
        ]
      ),
    ],
    [
      mc(
        "¿Cuánto facturó el grupo en el semestre?",
        ["1.240 millones", "180 millones", "22 millones", "6 millones"],
        0,
        "La cifra de negocio (facturación) fue de 1.240 millones. 180 millones es el resultado bruto de explotación, 22 millones el resultado neto y el 6 % es el crecimiento, no una cifra en millones.",
      ),
      mc(
        "¿Por qué el resultado neto es tan bajo en comparación con el bruto de explotación?",
        ["Por un deterioro extraordinario y los costes de los despidos", "Porque las ventas cayeron", "Porque no hubo previsiones", "Porque se repartió un dividendo"],
        0,
        "La nota atribuye el bajo resultado neto al deterioro de los activos en Argentina y a los costes del plan de plantilla. Las ventas subieron un 6 %, las previsiones se cumplieron y el dividendo no afecta al resultado.",
      ),
      { ...fb("Completa la colocación de la nota.", "El resultado bruto de explotación se ___ en 180 millones.", "situó", "Colocación de las notas de resultados: «el resultado se situó en X millones»."), en: "EBITDA [stood] at 180 million.", altAnswers: ["ubicó", "quedó"] },
      { ...fb("Completa con el término de la nota.", "El grupo mantiene su compromiso con la reducción del ___.", "apalancamiento", "«Reducir el apalancamiento» = disminuir el peso de la deuda sobre los recursos propios."), en: "The group remains committed to reducing its [leverage]." },
      ms(
        "¿Qué expresiones de la nota son eufemismos o fórmulas que suavizan malas noticias?",
        ["plan de optimización de la plantilla", "se vio afectado por", "deterioro extraordinario", "un 6 % más", "en línea con las previsiones"],
        [0, 1, 2],
        "«Optimización de la plantilla» (despidos), «se vio afectado por» (voz pasiva que diluye la responsabilidad) y «deterioro extraordinario» (presenta la pérdida como excepcional) suavizan malas noticias. «Un 6 % más» es un dato positivo y «en línea con las previsiones» es neutro.",
      ),
      toEn("El resultado neto se vio afectado por los costes de reestructuración.", "Net profit was hit by restructuring costs.", "«Verse afectado por» = be affected / hit by; «resultado neto» = net profit / net income.", ["Net income was affected by restructuring costs.", "Net profit was affected by restructuring costs.", "Net income was hit by restructuring costs."]),
      toEs("El resultado se vio afectado por los costes asociados al plan de optimización de la plantilla.", "Los costes de los despidos redujeron el resultado.", "Sin envoltorio: «plan de optimización de la plantilla» = despidos, y la pasiva «se vio afectado por» se convierte en una frase activa con un sujeto claro (los costes) y un verbo concreto (redujeron).", ["Los costes de los despidos redujeron el beneficio.", "El coste de los despidos redujo el resultado.", "Los despidos redujeron el resultado.", "Los costes de los despidos rebajaron el resultado."], "Reescribe la frase sin eufemismos, con un sujeto y un verbo activos."),
      toEs("La empresa vendió 500 millones, un 3 % más que el año pasado.", "La empresa alcanzó una cifra de negocio de 500 millones, un 3 % más que en el ejercicio anterior.", "La nota usa términos contables y fórmulas fijas: «alcanzar una cifra de negocio de», «el ejercicio anterior» (no «el año pasado»).", ["La empresa alcanzó una cifra de negocio de 500 millones, un 3 % más que el ejercicio anterior.", "La empresa registró una cifra de negocio de 500 millones, un 3 % más que en el ejercicio anterior.", "La empresa alcanzó una facturación de 500 millones, un 3 % más que en el ejercicio anterior."], "Pasa la frase al lenguaje de una nota de resultados."),
      toEs("El resultado neto se situó a 22 millones, por debajo de lo previsto.", "El resultado neto se situó en 22 millones, por debajo de lo previsto.", "La colocación es «situarse EN + cifra»: el resultado se situó en 22 millones. «A» se usa con distancias o precios unitarios («a 3 euros el kilo»), no con este verbo.", [], "Corrige la frase."),
      wo("El grupo prevé una mejora de los márgenes en la segunda mitad del año.", "Fórmula de previsión: «prevé una mejora de…».", "The group expects margins to improve in the second half of the year."),
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
        [
          "Recuerda la regla: hacer, poner, tener, decir y dar son verbos comodín: sirven para todo porque no dicen casi nada, y el sentido lo pone el sustantivo. Para sustituirlos, pregúntate qué se hace exactamente con ese sustantivo: un informe se escribe (redactar, elaborar); una pregunta se expresa (formular, plantear); un ejemplo se trae a colación (citar, aportar); una enfermedad se sufre (padecer); una crisis se vive por dentro (atravesar); un problema se encara (afrontar); el éxito se obtiene (cosechar, lograr); una opinión se expresa (manifestar).",
          "Cuidado con los calcos del inglés: «poner una pregunta» (to put a question) y «tener éxito» funcionan, pero el primero no es español y el segundo es plano en un texto cuidado.",
        ],
        [
          ["Elaboró un informe detallado.", "She drew up a detailed report."],
          ["El ministro manifestó su preocupación.", "The minister expressed his concern. (decir una opinión o un sentimiento → manifestar)"],
          ["La región atraviesa una sequía histórica.", "The region is going through a historic drought. (tener una crisis → atravesar)"],
        ],
        [
          mc(
            "Sustituye: «hacer una pregunta»",
            ["formular una pregunta", "dar una pregunta", "poner una pregunta", "tener una pregunta hecha"],
            0,
            "«Formular» o «plantear» una pregunta es más preciso que «hacer». «Poner una pregunta» es un calco o coloquialismo, «dar una pregunta» no es una colocación del español y «tener una pregunta hecha» no significa preguntar."
          ),
          mc(
            "«Dar un discurso» no aparece en la lista. ¿Qué verbo preciso le corresponde?",
            ["pronunciar un discurso", "padecer un discurso", "cosechar un discurso", "atravesar un discurso"],
            0,
            "Un discurso se dice en voz alta ante un público: se pronuncia. «Padecer» va con enfermedades o males, «cosechar» con éxitos o resultados y «atravesar» con etapas o crisis."
          ),
        ]
      ),
    ],
    [
      fb("Sustituye «hacer».", "El equipo ___ un informe de cuarenta páginas. (redactar, indefinido)", "redactó", "«Redactar» un informe es más preciso que «hacer»."),
      fb("Sustituye «poner».", "Para ilustrarlo, ___ un ejemplo concreto. (citar, yo, futuro)", "citaré", "«Citar» un ejemplo es más preciso que «poner»."),
      fb("Sustituye «dar».", "La empresa ___ una explicación insuficiente. (ofrecer, indefinido)", "ofreció", "«Ofrecer» una explicación es más preciso que «dar»."),
      mt(
        "Relaciona la expresión comodín con su versión precisa.",
        [
          ["tener éxito", "cosechar éxito"],
          ["decir una opinión", "manifestar una opinión"],
          ["dar una explicación", "ofrecer una explicación"],
          ["tener dificultades", "atravesar dificultades"],
        ],
        "Cada sustantivo pide el verbo que describe lo que se hace con él: el éxito se cosecha, una opinión se manifiesta, una explicación se ofrece y las dificultades se atraviesan."
      ),
      mc(
        "Versión más precisa de «Tuvo muchos problemas en la empresa»:",
        ["Atravesó numerosas dificultades en la empresa.", "Hizo muchos problemas en la empresa.", "Puso muchos problemas.", "Dio muchos problemas."],
        0,
        "«Atravesó numerosas dificultades» sustituye verbos comodín por un verbo y un sustantivo precisos. «Hizo», «Puso» y «Dio» problemas cambian el sentido (causarlos) y siguen siendo imprecisos."
      ),
      toEs("The report was drawn up by an independent committee.", "El informe fue elaborado por un comité independiente.", "«Elaborar» un informe es más preciso que «hacer»; puede ir en pasiva o activa.", ["El informe lo elaboró un comité independiente.", "Un comité independiente elaboró el informe."]),
      wo("La directora manifestó su satisfacción por los resultados obtenidos.", "«Manifestar» sustituye a «decir/expresar» en registro formal; la satisfacción se siente «por» (o «con») algo.", "The director expressed her satisfaction with the results obtained."),
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
        "La idea: el sustantivo elige su verbo",
        [
          "La regla: una colocación es una pareja de palabras que el uso ha fijado, y en ella manda el sustantivo: él elige el verbo, y no al revés. Un error o un delito se cometen; un papel o un cargo se desempeñan; una conversación o una relación se entablan; el matrimonio, las deudas o una enfermedad se contraen; el sueño se concilia; una orden se acata; una polémica se zanja; esperanzas o dudas se albergan; el interés o la polémica se suscitan.",
          "Por qué importa: el verbo genérico (hacer un error, tener dudas, coger una enfermedad) a veces se entiende, pero suena extranjero o coloquial, y los calcos del inglés (jugar un papel, por «play a role») delatan la traducción. Por eso, al aprender un sustantivo culto, apréndelo con su verbo.",
        ],
        [
          ["No conseguía conciliar el sueño.", "He couldn't get to sleep."],
          ["La propuesta suscitó una gran polémica.", "The proposal sparked great controversy."],
        ],
        [
          mc(
            "«___ un papel fundamental en el proceso.»",
            ["Desempeñó", "Hizo", "Cometió", "Contrajo"],
            0,
            "La colocación es «desempeñar un papel». «Hacer un papel» se dice de actores, «cometer» va con errores o delitos y «contraer» con deudas o enfermedades."
          ),
          mc(
            "En los Juegos, la atleta ___ el récord mundial de los 400 metros.",
            ["batió", "cometió", "contrajo", "desempeñó"],
            0,
            "Un récord se bate: es la colocación fija de «récord». «Cometer» va con errores o delitos, «contraer» con deudas, matrimonio o enfermedades, y «desempeñar» con papeles o cargos."
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
        "Cada sustantivo tiene su verbo: el sueño se concilia, una orden se acata, las esperanzas se albergan y la polémica se suscita."
      ),
      fb("Completa.", "En el tren ___ conversación con una desconocida. (entablar, indefinido)", "entabló", "Colocación: «entablar una conversación» (empezarla)."),
      fb("Completa.", "La empresa ___ deudas que no pudo pagar. (contraer, indefinido)", "contrajo", "Colocación: «contraer deudas» (irregular: contraje, contrajo)."),
      fb("Completa.", "El ministro quiso ___ la polémica con una rueda de prensa. (cerrar definitivamente)", "zanjar", "«Zanjar» una polémica o discusión es darla por terminada definitivamente."),
      ms(
        "¿Qué colocaciones son correctas?",
        ["cometer un delito", "contraer matrimonio", "desempeñar un cargo", "cometer un éxito"],
        [0, 1, 2],
        "«Cometer un delito», «contraer matrimonio» y «desempeñar un cargo» son colocaciones correctas. «Cometer» solo va con algo negativo; un éxito se cosecha o se logra."
      ),
      toEs("The decision sparked widespread interest.", "La decisión suscitó un gran interés.", "Colocación culta: «suscitar / despertar interés».", ["La decisión despertó un gran interés.", "La decisión suscitó un interés generalizado."]),
      wo("Aún albergamos la esperanza de encontrar supervivientes.", "Colocación culta «albergar la esperanza de + infinitivo»; «aún» lleva tilde porque equivale a «todavía».", "We still hold out hope of finding survivors."),
    ]
  ),
  L(
    "c1c2-vocabulary-practice-7",
    "c2r-vocab-word-families",
    "Vocabulario en contexto: familias de palabras",
    "Del verbo al sustantivo y al adjetivo (-ción, -miento, -ez, -anza, -ble, -ivo): amplía tu vocabulario activo derivando con precisión.",
    "7 min",
    [
      sec(
        "Derivación",
        [
          "Recuerda la regla: cada sufijo se pega a un tipo de base y aporta un sentido. Los que forman nombres de acción (-ción, -miento, -anza) se unen a verbos; los que forman nombres de cualidad (-ez/-eza, -dad, -ura) se unen a adjetivos. Si sabes qué tipo de palabra tienes y qué quieres decir, puedes derivar palabras que nunca has estudiado.",
          "Sufijos de sustantivo: -ción (resolver → resolución), -miento (conocer → conocimiento), -dad (capaz → capacidad), -ez (sencillo → sencillez), -ura (hermoso → hermosura), -anza (confiar → confianza). Adjetivo: -ble (creíble, «que se puede»), -oso (peligroso, «lleno de»), -ivo (decisivo). Adverbio: femenino del adjetivo + -mente (rápida → rápidamente). Irregularidades: escribir → escritura; pedir → petición.",
        ],
        [
          ["La lucidez de su análisis sorprendió a todos.", "The lucidity of her analysis surprised everyone."],
          ["Actuó con gran determinación.", "He acted with great determination."],
        ],
        [
          mc(
            "Aplica la regla a un adjetivo que no aparece arriba: sustantivo de «estúpido».",
            ["estupidez", "estupididad", "estupidamiento", "estupidura"],
            0,
            "Muchos adjetivos, sobre todo los terminados en -ido, forman la cualidad con -ez (lúcido → lucidez, tímido → timidez, y también sencillo → sencillez): estúpido → estupidez. «-miento» es para verbos (conocer → conocimiento), así que «estupidamiento» falla por partida doble."
          ),
        ]
      ),
    ],
    [
      fb("Deriva.", "Confiar → la ___.", "confianza", "El sufijo -anza forma sustantivos a partir de verbos: confiar → confianza."),
      fb("Deriva.", "Ser lúcido → la ___.", "lucidez", "El sufijo -ez forma sustantivos de cualidad: lúcido → lucidez."),
      fb("Deriva.", "Decidir → un momento ___. (adjetivo en -ivo)", "decisivo", "El sufijo -ivo forma adjetivos a partir de verbos: decidir → decisivo."),
      fb("Deriva.", "Pedir → una ___ formal.", "petición", "Derivación culta a partir del latín (petitio): pedir → petición."),
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
        "El sufijo -ble significa «que puede ser»: creíble. «Creyente» es quien cree, «creído» es presumido y «creedor» es un arcaísmo raro por «crédulo» (no confundir con «acreedor»)."
      ),
      wo("Su capacidad de adaptación resultó decisiva para el proyecto.", "«Adaptability» = «capacidad de adaptación» (adaptar → adaptación) y «decisive» = «decisiva» (decidir → -ivo), en femenino porque concuerda con «capacidad».", "Her adaptability proved decisive for the project."),
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
        [
          "Recuerda la regla: los parónimos se distinguen por la familia de cada palabra, y esa familia decide también su gramática. Prever viene de «ver» y se conjuga como él (prevén, preví, previsto); proveer es otro verbo y se construye «proveer a alguien de algo». Absolver es de la familia de resolver y tiene participio irregular (absuelto, como resuelto); absorber es regular (absorbido). Infligir va con daños y castigos (se inflige algo a alguien); infringir, con normas (se infringe una ley).",
          "Actitud (disposición de ánimo) / aptitud (capacidad). Infligir (causar un daño o castigo) / infringir (violar una norma). Prever (ver con antelación) / proveer (suministrar). Absolver (declarar inocente) / absorber (empapar). Especia (condimento) / especie (clase). Adoptar (tomar) / adaptar (ajustar). Perjuicio (daño) / prejuicio (juicio previo).",
        ],
        [
          ["Infringió la ley de tráfico.", "He broke the traffic law."],
          ["Le infligieron una dura derrota.", "They inflicted a heavy defeat on him."],
        ],
        [
          mc(
            "«El jurado ___ al acusado por falta de pruebas.»",
            ["absolvió", "absorbió", "adoptó", "infringió"],
            0,
            "«Absolver» es declarar inocente. «Absorbió» (de absorber) es un parónimo, «adoptó» cambia el sentido e «infringió» significa violar una norma."
          ),
          mc(
            "Aplica la familia de «ver»: ¿cuál es la forma correcta de «prever» en «Los expertos ___ una subida de precios»?",
            ["prevén", "preveen", "proveen", "prevean"],
            0,
            "«Prever» se conjuga como «ver»: ven → prevén. «Preveen» mezcla el verbo con «proveer», que significa suministrar (proveen). «Prevean» es subjuntivo y aquí no hay nada que lo pida."
          ),
        ]
      ),
    ],
    [
      fb("Elige.", "Tiene una gran ___ para las matemáticas. (capacidad)", "aptitud", "«Aptitud» es capacidad para algo; «actitud» es disposición o comportamiento."),
      fb("Elige.", "Quien ___ las normas será sancionado. (violar)", "infrinja", "«Infringir» es violar una norma (no «infligir», causar daño); relativo sin antecedente concreto + subjuntivo: infrinja."),
      fb("Elige.", "No ___ que el proyecto se retrasara tanto. (anticipar, yo, indefinido)", "preví", "«Prever» (anticipar) se conjuga como ver: preví, no «preveí» (confusión con proveer)."),
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
        "«Adaptar» es ajustar algo a un fin o público. «Adoptar» es tomar o hacer propio, «aceptar» es admitir y «adeptar» no existe."
      ),
      toEs("Her positive attitude made the difference.", "Su actitud positiva marcó la diferencia.", "«Actitud» (disposición) ≠ «aptitud» (capacidad); «marcar la diferencia».", ["Su actitud positiva fue la diferencia.", "Su actitud positiva marcó toda la diferencia."]),
      wo("La esponja absorbió toda el agua derramada.", "«Absorber» (empapar), no «absolver» (declarar inocente); «toda el agua»: «agua» es femenina aunque lleve «el».", "The sponge soaked up all the spilled water."),
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
        ["La idea: cada verbo de habla es «decir» + un modo de decir, empaquetado en una sola palabra. Por eso sustituye a «dijo + complemento»: dijo en voz muy baja = susurró; dijo a gritos y con furia = vociferó. Se agrupan por lo que añaden. Volumen: susurrar, murmurar, musitar (bajo) / gritar, vociferar (alto). Fluidez: balbucear, tartamudear (con dificultad), farfullar (rápido y confuso). Actitud: espetar (algo brusco, a la cara), recalcar (insistir), replicar (responder oponiéndose), sentenciar (afirmar con rotundidad).", "La gramática sigue al significado: si el verbo transmite un hecho, la subordinada va en indicativo (recalcó que la decisión era definitiva); si transmite una orden o un consejo, va en subjuntivo (me susurró que no me fiara). Y en estilo directo el verbo va tras la cita, con el sujeto detrás: «No», replicó la jueza."],
        [
          ["«No vuelvas nunca», le espetó.", "“Never come back,” she snapped at him. (espetar: brusco y a la cara)"],
          ["Recalcó que la decisión era definitiva.", "He stressed that the decision was final. (un hecho: indicativo)"],
          ["Me susurró que no me fiara de nadie.", "She whispered to me not to trust anyone. (un consejo: subjuntivo)"],
        ],
        [
          mc(
            "Nervioso, el niño ___ una excusa incomprensible.",
            ["balbuceó", "recalcó", "sentenció", "vociferó"],
            0,
            "«Balbucear» es hablar con dificultad y titubeos, propio de alguien nervioso. «Recalcó» es insistir, «sentenció» es decir con autoridad y «vociferó» es gritar, y ninguno encaja con un niño nervioso."
          ),
          mc(
            "«—Eso no lo pienso firmar —___ la abogada, cruzándose de brazos.»",
            ["replicó", "musitó", "balbuceó", "susurró"],
            0,
            "Una respuesta que se opone, dicha con firmeza (cruzándose de brazos), pide «replicar». «Musitó» y «susurró» indican voz muy baja y «balbuceó» falta de fluidez: ninguno encaja con una negativa firme."
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
        "Cada verbo es «decir» + un matiz: espetar añade brusquedad, recalcar insistencia, susurrar volumen bajo y replicar oposición a lo dicho antes."
      ),
      fb("Completa.", "«Te lo advertí», ___ con frialdad. (decir algo cortante, indefinido)", "espetó", "«Espetar» es decir algo de forma brusca o cortante."),
      fb("Completa.", "Me ___ al oído que no me fiara de él. (decir en voz muy baja, indefinido)", "susurró", "«Susurrar» es decir algo en voz muy baja."),
      fb("Completa.", "El profesor ___ la importancia de citar las fuentes. (insistir, indefinido)", "recalcó", "«Recalcar» es insistir en algo para destacarlo."),
      mc(
        "«Farfulló algo y se marchó» significa que…",
        ["habló de forma rápida y confusa", "gritó con fuerza", "cantó", "habló muy claro"],
        0,
        "«Farfullar» es hablar de forma rápida y confusa. No es gritar, cantar ni hablar claro, sino todo lo contrario."
      ),
      toEs("“That's not true,” she replied.", "«Eso no es verdad», replicó.", "«Replicar» introduce una respuesta que contradice; en diálogo, con comillas o raya.", ["«Eso no es cierto», replicó.", "—Eso no es verdad —replicó."]),
      wo("La anciana musitó una oración antes de dormirse.", "«Musitar» = hablar muy bajo, casi sin voz, como al rezar; «antes de» + infinitivo porque el sujeto es el mismo.", "The old woman muttered a prayer under her breath before falling asleep."),
    ]
  ),
  L(
    "c1c2-vocabulary-practice-15",
    "c2r-vocab-character-adjectives",
    "Vocabulario en contexto: adjetivos de carácter",
    "Tenaz, afable, altivo, taciturno, mezquino, ecuánime, pusilánime: describe personas con precisión literaria.",
    "8 min",
    [
      sec(
        "La idea: los adjetivos de carácter vienen en familias",
        [
          "Un retrato literario no dice «buena persona» ni «antipático»: elige el rasgo exacto. Positivos: tenaz (persistente), afable (amable y cercano), ecuánime (justo, equilibrado), íntegro (honrado), perspicaz (que capta lo sutil). Negativos: altivo (orgulloso), mezquino (tacaño o ruin), pusilánime (cobarde), taciturno (callado y triste), arisco (poco sociable), voluble (cambiante).",
          "Dos pistas te permiten entender adjetivos que no has visto. Primera: -ánime / -ánimo es «ánimo, espíritu»: ecuánime es de ánimo igual (equilibrado), pusilánime de ánimo pequeño (cobarde), magnánimo de ánimo grande (generoso), unánime de un solo ánimo (todos de acuerdo). Segunda: la terminación decide la concordancia: los acabados en -z y en -e no cambian (una mujer tenaz, afable, ecuánime); los acabados en -o hacen femenino en -a (altiva, mezquina, taciturna).",
        ],
        [
          ["Era un hombre afable y de trato sencillo.", "He was a friendly, easy-going man."],
          ["Su carácter voluble desconcertaba a todos.", "His fickle nature baffled everyone."],
          ["La directora, ecuánime incluso bajo presión, escuchó a ambos bandos.", "The director, even-handed even under pressure, heard both sides. (-e: invariable)"],
          ["Una ministra altiva y mezquina no inspira confianza.", "A haughty, petty minister doesn't inspire trust. (-o → -a)"],
        ],
        [
          mc(
            "Una jueza que decide con justicia y equilibrio es…",
            ["ecuánime", "voluble", "altiva", "pusilánime"],
            0,
            "«Ecuánime» es quien juzga con imparcialidad y equilibrio. «Voluble» es inconstante, «altiva» es orgullosa y «pusilánime» es cobarde."
          ),
          mc(
            "Aplica la pista de -ánimo: el vencedor perdonó a sus enemigos y les devolvió sus tierras. Fue…",
            ["magnánimo", "pusilánime", "unánime", "taciturno"],
            0,
            "Magn- (grande) + ánimo: generoso y noble, incluso con quien le ha ofendido. «Pusilánime» es el ánimo pequeño (cobarde), «unánime» se dice de una decisión de todos y «taciturno» es callado y triste."
          ),
        ]
      ),
      sec(
        "Del adjetivo al sustantivo: la cualidad",
        "Para analizar a un personaje necesitas el nombre de la cualidad: «su tenacidad», «su altivez». Los sufijos son pocos: -idad / -dad (tenacidad, afabilidad, ecuanimidad, integridad, mezquindad, volubilidad, pusilanimidad), -ez (altivez, de altivo) y -cia (perspicacia, de perspicaz). Conviene aprender cada sustantivo con su adjetivo, porque la terminación no se puede deducir siempre: tenaz → tenacidad, pero perspicaz → perspicacia.",
        [
          ["Su tenacidad le abrió todas las puertas.", "Her tenacity opened every door for her."],
          ["Nadie soportaba su altivez.", "Nobody could stand his haughtiness."],
        ],
        [
          fb(
            "Forma el sustantivo de cualidad.",
            "La ___ del ministro lo llevó a dimitir antes que mentir. (íntegro)",
            "integridad",
            "íntegro → integridad (-idad, la cualidad de ser íntegro). Pierde la tilde porque el acento pasa a la última sílaba."
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
        "Tenaz y perspicaz (en -z) son rasgos positivos de la inteligencia y la voluntad; taciturno y mezquino (en -o) describen el ánimo apagado y la ruindad."
      ),
      fb("Completa.", "Cambia de opinión cada día: es muy ___. (inconstante)", "voluble", "«Voluble» = inconstante, que cambia de opinión con facilidad."),
      fb("Completa.", "Nunca aceptó sobornos: era un funcionario ___. (honrado)", "íntegro", "«Íntegro» = honrado, recto, incorruptible."),
      fb("Completa.", "Mira a todos por encima del hombro: es muy ___. (orgulloso)", "altivo", "«Altivo» = orgulloso y soberbio, que mira a los demás por encima del hombro."),
      ms(
        "¿Qué adjetivos son positivos?",
        ["afable", "perspicaz", "tenaz", "arisco"],
        [0, 1, 2],
        "«Afable» (amable), «perspicaz» (agudo) y «tenaz» (constante) son positivos. «Arisco» es negativo: poco sociable."
      ),
      ms(
        "¿Qué adjetivos se quedan igual con un sustantivo femenino (una mujer…)?",
        ["tenaz", "afable", "altivo", "pusilánime", "taciturno"],
        [0, 1, 3],
        "Los adjetivos en -z y en -e son invariables en género: una mujer tenaz, afable, pusilánime. Los acabados en -o cambian a -a: altiva, taciturna."
      ),
      mc(
        "«La decisión del jurado fue ___: los doce votaron lo mismo.»",
        ["unánime", "ecuánime", "magnánima", "pusilánime"],
        0,
        "Un- (uno) + ánimo: de un solo parecer, todos de acuerdo. «Ecuánime» sería justa y equilibrada, que no es lo que dice la frase; «magnánima» generosa y «pusilánime» cobarde."
      ),
      toEs("She was a tenacious and perceptive researcher.", "Era una investigadora tenaz y perspicaz.", "«Tenaz» (persistente) y «perspicaz» (que percibe con agudeza) son adjetivos precisos de carácter; acaban en -z, así que no cambian en femenino.", ["Fue una investigadora tenaz y perspicaz."]),
      toEs(
        "Mi abuelo era altivo, mezquino y taciturno.",
        "Mi abuela era altiva, mezquina y taciturna.",
        "Los tres adjetivos acaban en -o, así que los tres pasan a -a para concordar con «abuela».",
        [],
        "Cambia «abuelo» por «abuela» y haz la concordancia."
      ),
      toEs(
        "Era tan tenaz que nunca abandonaba un proyecto.",
        "Su tenacidad le impedía abandonar un proyecto.",
        "El adjetivo pasa a sustantivo de cualidad (tenaz → tenacidad) y se convierte en el sujeto de la frase, el estilo típico del análisis de un personaje.",
        ["Su tenacidad le impedía abandonar ningún proyecto.", "Su tenacidad no le permitía abandonar un proyecto.", "Por su tenacidad, nunca abandonaba un proyecto."],
        "Reescribe la frase con el sustantivo «tenacidad» como sujeto."
      ),
      toEs(
        "Era famosa por su perspicacidad para los negocios.",
        "Era famosa por su perspicacia para los negocios.",
        "El sustantivo de perspicaz es «perspicacia» (-cia), no «perspicacidad»: la familia no siempre sigue a tenaz → tenacidad.",
        [],
        "Corrige la frase."
      ),
      toEs(
        "Mi tía, tan mezquina como siempre, nos regaló su casa de la playa.",
        "Mi tía, tan generosa como siempre, nos regaló su casa de la playa.",
        "«Mezquino» es tacaño o ruin: contradice el regalo. El rasgo que encaja con regalar una casa es la generosidad (o la magnanimidad).",
        ["Mi tía, tan magnánima como siempre, nos regaló su casa de la playa.", "Mi tía, tan desprendida como siempre, nos regaló su casa de la playa.", "Mi tía, generosa como siempre, nos regaló su casa de la playa."],
        "Corrige la frase: el adjetivo contradice lo que hace la tía."
      ),
      wo("Detrás de su aspecto arisco se escondía un hombre afable.", "Contraste de adjetivos: arisco (poco sociable) frente a afable (amable y cercano).", "Behind his unsociable appearance lay hidden a kindly man."),
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
        "La regla: el artículo es la única pista del significado",
        "Algunos sustantivos tienen la misma forma con dos géneros y dos significados distintos. Como la palabra no cambia, lo único que te dice cuál es cuál es la concordancia: el artículo, el demostrativo y los adjetivos (el capital inicial / la capital europea). Un error de género aquí no es un despiste gramatical: cambia el sentido de la frase. El capital (dinero) / la capital (ciudad). El cura (sacerdote) / la cura (curación). El orden (disposición) / la orden (mandato; congregación religiosa). El frente (primera línea; parte delantera) / la frente (parte de la cara). El cólera (enfermedad) / la cólera (ira). El pendiente (joya) / la pendiente (cuesta).",
        [
          ["El capital inicial fue de un millón.", "The initial capital was one million."],
          ["Recibió la orden de evacuar.", "He received the order to evacuate."],
        ],
        [
          mc(
            "«Subimos ___ pendiente más empinada del puerto.»",
            ["la", "el", "lo", "los"],
            0,
            "«La pendiente» (femenino) es una cuesta; «el pendiente» es una joya para la oreja. «Lo» y «los» no concuerdan con un sustantivo singular."
          ),
          mc(
            "Aplica la regla a un par nuevo: «el margen» es el espacio en blanco de una página; «la margen», la orilla de un río. «Acamparon en ___ margen izquierda del Ebro.»",
            ["la", "el", "lo", "un"],
            0,
            "Se habla de la orilla de un río, así que es femenino: la margen izquierda (fíjate también en el adjetivo, «izquierda»). «El margen» sería el espacio de una página o un margen de beneficio."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "Lima es ___ capital de Perú.", "la", "«La capital» es la ciudad principal; «el capital» es el dinero."),
      { ...fb("Completa.", "Ordena los libros siguiendo ___ orden alfabético.", "el", "«El orden» es la disposición o secuencia; «la orden» es un mandato."), altAnswers: ["un"] },
      fb("Completa.", "Todavía no existe ___ cura para esa enfermedad.", "una", "«La cura» es la curación o el tratamiento; «el cura» es el sacerdote."),
      fb("Completa.", "Se golpeó ___ frente contra la puerta.", "la", "«La frente» (femenino) es la parte superior de la cara; «el frente» (masculino) es la parte delantera de algo o la línea de combate."),
      mc(
        "«Montó en cólera» significa…",
        ["se enfureció", "enfermó de cólera", "se subió a un caballo", "se tranquilizó"],
        0,
        "«Montar en cólera» es una locución que significa enfurecerse: aquí «la cólera» (femenino) es la ira. No alude a la enfermedad («el cólera», masculino) ni a subirse a un caballo, pese al verbo «montar»."
      ),
      mt(
        "Relaciona cada forma con su significado.",
        [
          ["el cura", "sacerdote"],
          ["la orden", "mandato"],
          ["el frente", "línea de combate"],
          ["el capital", "dinero invertido"],
        ],
        "El cura (sacerdote) / la cura (curación); la orden (mandato) / el orden (disposición); el frente (línea de combate) / la frente (parte de la cara); el capital (dinero) / la capital (ciudad)."
      ),
      toEs(
        "La ira le hizo perder los nervios delante de todos.",
        "La cólera le hizo perder los nervios delante de todos.",
        "La ira es «la cólera», en femenino. En masculino, «el cólera» es la enfermedad: el artículo es lo que distingue los dos sentidos.",
        [],
        "Sustituye «la ira» por su sinónimo de la lección, con el artículo adecuado."
      ),
      toEs(
        "Los soldados del primer batallón avanzaron hacia la línea de combate.",
        "Los soldados del primer batallón avanzaron hacia el frente.",
        "La línea de combate es «el frente», en masculino. «La frente» es la parte superior de la cara.",
        [],
        "Sustituye «la línea de combate» por el sustantivo de la lección."
      ),
      toEs(
        "El sargento dio el orden de retirarse antes del amanecer.",
        "El sargento dio la orden de retirarse antes del amanecer.",
        "Un mandato es «la orden», en femenino. «El orden» es la disposición o la secuencia (el orden alfabético).",
        [],
        "Corrige la frase."
      ),
      toEs(
        "El brote de la cólera obligó a cerrar los pozos del pueblo.",
        "El brote del cólera obligó a cerrar los pozos del pueblo.",
        "La enfermedad es «el cólera», en masculino (de + el → del). «La cólera» es la ira, que no tiene brotes que obliguen a cerrar pozos.",
        [],
        "Corrige la frase."
      ),
      wo("El cura del pueblo recibió la orden de trasladarse a la capital.", "Tres pares en una frase: el cura (sacerdote, no la curación), la orden (mandato, no la disposición) y la capital (ciudad, no el dinero).", "The village priest received the order to move to the capital."),
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
        [
          "A priori (antes de examinarlo). Grosso modo (a grandes rasgos; ✗ «a grosso modo»). In situ (en el lugar). Per cápita (por persona). Condición sine qua non (imprescindible). Motu proprio (por propia iniciativa; ✗ «de motu propio»). Ipso facto (inmediatamente). Statu quo (situación actual; ✗ «status quo» en norma académica, aunque se oye). Déficit, superávit, currículum.",
          "La regla que explica casi todos los errores: una locución latina es un bloque cerrado que ya lleva dentro su preposición o su caso, así que no se le añade nada ni se castellaniza a medias. «Motu proprio» ya significa «por propio impulso» (por eso sobra «de» y no es «propio»); «grosso modo» ya significa «de modo grueso» (por eso sobra «a»); «statu quo» es «en el estado en que» (por eso no es «status»). Funcionan como adverbios o adjetivos: van solos, sin artículo ni preposición delante.",
        ],
        [
          ["Grosso modo, el plan tiene tres fases.", "Roughly speaking, the plan has three phases."],
          ["Dimitió motu proprio.", "He resigned of his own accord."],
          ["A priori, el plan parece viable; a posteriori, ya veremos.", "In principle the plan looks feasible; afterwards, we'll see. (a priori / a posteriori)"],
          ["Ipso facto, el contrato quedó anulado.", "The contract was immediately voided. (ipso facto: en el acto)"],
        ],
        [
          mc(
            "Forma correcta:",
            ["grosso modo", "a grosso modo", "a grosso modos", "grossa moda"],
            0,
            "La locución latina es «grosso modo», sin preposición, y significa 'a grandes rasgos'. «A grosso modo» es un error muy extendido, y las otras formas alteran el latín."
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
        "«In situ» es 'en el lugar mismo'; «per cápita», 'por cabeza, por persona'; «sine qua non», 'sin la cual no' (un requisito imprescindible); «ipso facto», 'en el acto, inmediatamente'."
      ),
      fb("Completa.", "Lo hizo motu ___, sin que nadie se lo pidiera.", "proprio", "La locución latina es «motu proprio» ('por propia iniciativa'), con -pr- en la última palabra; «motu propio» es una castellanización incorrecta, y tampoco lleva «de» delante."),
      fb("Completa.", "A ___, la idea parece buena, pero habrá que estudiarla.", "priori", "«A priori» significa 'antes de examinarlo, en principio'; se opone a «a posteriori», 'después de comprobarlo'."),
      fb("Completa.", "La renta ___ cápita aumentó un 3 %.", "per", "«Per cápita» es la locución latina para 'por cabeza, por persona' (la Ortografía de 2010 la escribe también sin tilde, «per capita», como las demás locuciones latinas); no se dice «por cápita»."),
      mc(
        "¿Cuál es incorrecto según la norma?",
        ["de motu propio", "motu proprio", "grosso modo", "in situ"],
        0,
        "«De motu propio» tiene dos errores: sobra la preposición «de» y el latín es «proprio». «Motu proprio», «grosso modo» e «in situ» son las formas correctas."
      ),
      toEs("Speaking a second language is a sine qua non for this job.", "Hablar un segundo idioma es condición sine qua non para este puesto.", "«Sine qua non» ('sin la cual no') se usa en español en la fórmula «condición sine qua non», para un requisito imprescindible.", ["Hablar una segunda lengua es condición sine qua non para este trabajo.", "Hablar otro idioma es condición sine qua non para este puesto."]),
      wo("Los técnicos analizaron los daños in situ.", "«In situ» ('en el lugar mismo') funciona como un adverbio y aquí va al final, tras el complemento directo (los daños); no lleva preposición: ✗ «en in situ».", "The technicians analyzed the damage on site."),
      mc(
        "Si «a priori» significa 'antes de examinarlo', ¿qué significará «a posteriori»?",
        ["después de comprobarlo, con los datos en la mano", "por iniciativa propia", "a grandes rasgos", "en el mismo lugar"],
        0,
        "«A posteriori» es la pareja de «a priori»: 'después de examinarlo, a la luz de los hechos'. «Por iniciativa propia» es «motu proprio», «a grandes rasgos» es «grosso modo» y «en el mismo lugar» es «in situ»."
      ),
      toEs(
        "A grandes rasgos, la reforma costará dos millones.",
        "Grosso modo, la reforma costará dos millones.",
        "«Grosso modo» equivale a «a grandes rasgos» y no lleva preposición delante: la idea de «de modo» ya está en el latín.",
        [],
        "Sustituye la paráfrasis por el latinismo equivalente."
      ),
      toEs(
        "El notario levantó acta en el propio lugar de los hechos.",
        "El notario levantó acta in situ.",
        "«In situ» significa 'en el lugar mismo' y funciona como un adverbio: sustituye todo el complemento de lugar, sin preposición.",
        [],
        "Sustituye «en el propio lugar de los hechos» por el latinismo."
      ),
      toEs(
        "A grosso modo, el proyecto tiene tres fases.",
        "Grosso modo, el proyecto tiene tres fases.",
        "«Grosso modo» no lleva «a» delante: la locución latina ya significa 'de modo general'. «A grosso modo» es un error muy extendido.",
        [],
        "Corrige la frase."
      ),
      toEs(
        "El alcalde convocó elecciones de motu propio.",
        "El alcalde convocó elecciones motu proprio.",
        "Dos errores en uno: sobra «de» (motu ya significa 'por impulso') y el latín es «proprio», con -pr-. Alternativa española: «por iniciativa propia».",
        ["El alcalde convocó elecciones por iniciativa propia."],
        "Corrige la frase."
      ),
    ]
  ),
  L(
    "c1c2-vocabulary-practice-22",
    "c2r-vocab-prefixes",
    "Vocabulario en contexto: prefijos que multiplican el vocabulario",
    "Des-, in-, re-, sobre-, sub-, contra-, pre-, pos-, anti-: entiende y crea palabras nuevas.",
    "8 min",
    [
      sec(
        "Prefijos productivos",
        [
          "La regla: un prefijo añade siempre el mismo significado, así que conocer una docena multiplica tu vocabulario y te permite descifrar palabras que nunca has visto. Des- / in- (negación o inversión): deshacer, incapaz, irreal, ilegal (in- se convierte en im- ante p/b, en i- ante l/r). Re- (repetición o intensidad): releer, rebuscar. Sobre- (exceso): sobrecargar, sobrevalorar. Sub- / infra- (debajo, insuficiente): subestimar, infravalorar, subdesarrollo. Contra- (oposición): contraataque, contraproducente. Pre- / pos- (antes / después): prever, posguerra. Anti- (contra): antivirus.",
          "Ortografía: los prefijos se escriben unidos a la palabra, sin guion (precampaña, exministro), y separados solo cuando afectan a varias palabras (ex primer ministro, pro derechos humanos).",
        ],
        [
          ["No subestimes a tu rival. (sub- = por debajo)", "Don't underestimate your opponent."],
          ["Esa medida resultó contraproducente. (contra- = efecto opuesto)", "That measure turned out to be counterproductive."],
          ["Hay que releer el contrato antes de firmar. (re- = otra vez)", "You need to reread the contract before signing."],
        ],
        [
          mc(
            "Valorar algo por encima de lo que vale:",
            ["sobrevalorar", "subvalorar", "revalorar", "contravalorar"],
            0,
            "El prefijo sobre- indica exceso: «sobrevalorar» es valorar algo por encima de lo que vale. «Subvalorar» es lo contrario (por debajo), «revalorar» es devolver o aumentar el valor, y «contravalorar» no existe."
          ),
          fb("Deriva con un prefijo.", "Volver a utilizar un envase en lugar de tirarlo es ___.", "reutilizarlo", "Re- = repetición: reutilizar es «volver a utilizar». El pronombre enclítico (reutilizarlo) se refiere al envase."),
        ]
      ),
    ],
    [
      fb("Deriva.", "Algo que produce el efecto contrario al buscado es ___.", "contraproducente", "El prefijo contra- expresa oposición: «contraproducente» es lo que produce el efecto contrario al que se buscaba."),
      { ...fb("Deriva.", "Valorar por debajo de lo que merece: ___.", "subestimar", "Prefijo sub-: por debajo. También valen infravalorar, subvalorar y minusvalorar."), altAnswers: ["infravalorar", "subvalorar", "minusvalorar"] },
      { ...fb("Deriva.", "El periodo después de una guerra es la ___.", "posguerra", "El prefijo pos- significa 'después de': «posguerra». La norma actual prefiere pos- a post- (posguerra, posoperatorio), salvo ante s- (postsimbolismo), aunque «postguerra» también se admite."), altAnswers: ["postguerra"] },
      fb("Deriva.", "Que no es legal: ___.", "ilegal", "Prefijo de negación in-, que se reduce a i- ante l: ilegal, ilógico (y ante r: irreal)."),
      toEs(
        "Tuvimos que escribir otra vez todo el informe.",
        "Tuvimos que reescribir todo el informe.",
        "Re- = volver a hacer algo: «reescribir» condensa «escribir otra vez». Se escribe con dos e, porque el prefijo se une a la palabra sin cambiarla.",
        ["Tuvimos que reescribir el informe entero."],
        "Sustituye «escribir otra vez» por un verbo con prefijo."
      ),
      ms(
        "¿Qué palabras tienen prefijo de negación?",
        ["irreal", "deshacer", "incapaz", "releer"],
        [0, 1, 2],
        "In-/i- (irreal, incapaz) y des- (deshacer) expresan negación o inversión de la acción; en «releer», en cambio, re- indica repetición ('volver a leer'), no negación."
      ),
      toEs(
        "El informe dice que el Gobierno sobreestimó la crisis: era mucho más grave de lo que pensaba.",
        "El informe dice que el Gobierno subestimó la crisis: era mucho más grave de lo que pensaba.",
        "Si la crisis era más grave de lo que pensaba, el Gobierno la valoró por debajo de su magnitud: sub- (subestimó). Sobre- indica exceso y produce el sentido contrario.",
        ["El informe dice que el Gobierno infravaloró la crisis: era mucho más grave de lo que pensaba.", "El informe dice que el Gobierno minusvaloró la crisis: era mucho más grave de lo que pensaba."],
        "Corrige la frase: el prefijo contradice el sentido."
      ),
      mc(
        "Grafía correcta según la norma actual:",
        ["el exministro de Economía", "el ex-ministro de Economía", "el exprimer ministro", "el ex-primer ministro"],
        0,
        "Según la ortografía actual, ex- se escribe unido y sin guion a una sola palabra (exministro); ante una expresión de varias palabras va separado: «el ex primer ministro». Por eso «el exprimer ministro» y las formas con guion son incorrectas."
      ),
      toEs(
        "Los datos del informe son desexactos.",
        "Los datos del informe son inexactos.",
        "«Exacto» se niega con in-: inexacto, como incapaz o inútil. Des- es muy productivo con verbos y participios (deshacer, desconocido), pero cada palabra tiene su forma fija; aquí «desexacto» no existe.",
        ["Los datos del informe no son exactos."],
        "Corrige la frase."
      ),
      { ...fb("¿Cómo se dicen en español las palabras en negrita?", "Las sanciones fueron ___: en lugar de frenar las protestas, las avivaron.", "contraproducentes", "Contra- = efecto opuesto al buscado: las sanciones querían frenar y acabaron avivando. Concuerda con «las sanciones» (contraproducentes)."), en: "The sanctions were [counterproductive]: instead of curbing the protests, they fuelled them." },
      { ...fb("¿Cómo se dicen en español las palabras en negrita?", "No hay que ___ el trabajo de los cuidadores.", "infravalorar", "Infra- y sub- = por debajo: infravalorar, subestimar, subvalorar. Minus- (minusvalorar) tiene el mismo sentido."), en: "We mustn't [undervalue] the work of carers.", altAnswers: ["subestimar", "minusvalorar", "subvalorar", "menospreciar"] },
      wo("Los expertos advierten de que no conviene sobrecargar el sistema.", "Prefijo sobre- (exceso): sobrecargar = cargar en exceso. «Advertir de que» + indicativo y «no conviene» + infinitivo.", "Experts warn that the system should not be overloaded."),
    ]
  ),
  L(
    "c1c2-vocabulary-practice-25",
    "c2r-vocab-register-synonyms",
    "Vocabulario en contexto: sinónimos según el registro",
    "Empezar / comenzar / iniciar / dar comienzo; acabar / terminar / finalizar / concluir: elige según el contexto.",
    "8 min",
    [
      sec(
        "Escalera de formalidad",
        [
          "La regla: muchos verbos españoles forman escaleras de sinónimos que significan lo mismo pero suben de registro, del coloquial al solemne. Lo que decide el peldaño es la situación: una conversación, un correo de trabajo, un aviso público, un acta. Mezclar peldaños («El acto dará comienzo a las diez, más o menos») suena raro porque el registro también es parte del significado.",
          "Coloquial → neutro → formal → solemne. Empezar → comenzar → iniciar → dar comienzo. Acabar → terminar → finalizar → concluir / dar por concluido. Pedir → solicitar → requerir. Mirar → observar → examinar. Enseñar → mostrar → exhibir. Ayudar → colaborar → cooperar. Arreglar → reparar → subsanar. Rellenar (un impreso) → cumplimentar. Dar (un premio) → conceder → otorgar.",
        ],
        [
          ["El acto dará comienzo a las diez.", "The ceremony will begin at ten."],
          ["Se requiere la presencia de todos los socios.", "The presence of all members is required."],
          ["Se ruega a los clientes que conserven el tique. (aviso público: se ruega + subjuntivo)", "Customers are requested to keep their receipt."],
        ],
        [
          mc(
            "En una invitación oficial:",
            ["El acto dará comienzo a las 19:00 h.", "El acto empieza a las siete, más o menos.", "Arrancamos a las siete.", "Empezamos cuando lleguéis."],
            0,
            "Una invitación oficial pide registro solemne y hora exacta: «dará comienzo a las 19:00 h». «Empieza a las siete, más o menos», «Arrancamos a las siete» y «Empezamos cuando lleguéis» son coloquiales e imprecisos."
          ),
          mc(
            "En la nota de prensa de una fundación: «El jurado le ha ___ el premio de ensayo».",
            ["otorgado", "regalado", "pasado", "dejado"],
            0,
            "En registro formal, un premio se concede u «otorga». «Regalar», «pasar» y «dejar» son coloquiales y además cambian el sentido: un premio no se regala ni se presta."
          ),
        ]
      ),
    ],
    [
      fb("Registro formal.", "Se ___ a los asistentes que apaguen el móvil. (pedir formalmente)", "ruega", "«Rogar» es el verbo formal para pedir en avisos públicos: «Se ruega a los asistentes que…», con subjuntivo detrás."),
      fb("Registro formal.", "La sesión ___ a las 20:00 h. (terminar, formal, indefinido)", "finalizó", "«Finalizar» es el equivalente formal de «terminar» en actas y crónicas: «La sesión finalizó a las 20:00 h»."),
      { ...fb("Registro formal.", "Es necesario ___ los errores detectados. (arreglar, formal)", "subsanar", "«Subsanar» es el verbo formal, propio del lenguaje administrativo, para corregir un error o defecto; «rectificar» también es formal; «arreglar» es neutro o coloquial."), altAnswers: ["rectificar"] },
      toEs(
        "Para pedir la beca hay que rellenar este formulario.",
        "Para solicitar la beca hay que cumplimentar este formulario.",
        "En un texto administrativo se sube un peldaño cada verbo: pedir → solicitar, rellenar → cumplimentar. «Es necesario» sustituiría además a «hay que» si se quiere aún más formalidad.",
        ["Para solicitar la beca es necesario cumplimentar este formulario.", "Para solicitar la beca hay que cumplimentar el siguiente formulario.", "Para solicitar la beca debe cumplimentarse este formulario."],
        "Reescribe la frase en registro administrativo, con los equivalentes formales de «pedir» y «rellenar»."
      ),
      mc(
        "Ordena de menos a más formal: (a) solicitar (b) pedir (c) requerir",
        ["b, a, c", "c, a, b", "a, b, c", "b, c, a"],
        0,
        "«Pedir» es neutro, «solicitar» es formal (instancias, trámites) y «requerir» es el más formal, con matiz de exigencia oficial. Las otras ordenaciones rompen esta escala; «b, c, a», por ejemplo, pone «requerir» por debajo de «solicitar»."
      ),
      toEs(
        "Se ruega a los pasajeros que permanecen sentados durante el aterrizaje.",
        "Se ruega a los pasajeros que permanezcan sentados durante el aterrizaje.",
        "«Rogar que» es una petición y exige subjuntivo: permanezcan (permanecer → permanezca, como conocer → conozca). La fórmula formal no cambia la regla del modo.",
        [],
        "Corrige el aviso."
      ),
      mt(
        "Relaciona el verbo coloquial con su equivalente formal.",
        [
          ["empezar", "iniciar"],
          ["acabar", "finalizar"],
          ["pedir", "solicitar"],
        ],
        "Empezar, acabar y pedir tienen equivalentes más formales (iniciar, finalizar, solicitar): el significado es el mismo, cambia el registro."
      ),
      toEs(
        "La entrega de premios dará comienzo a las diez, más o menos.",
        "La entrega de premios dará comienzo a las diez.",
        "«Dar comienzo» pertenece al peldaño solemne y no admite la vaguedad coloquial de «más o menos»: el anuncio formal da una hora exacta. Mezclar registros es el error.",
        ["La entrega de premios dará comienzo a las diez en punto.", "La entrega de premios dará comienzo a las 10:00 h."],
        "Corrige el anuncio: elimina el elemento que rompe el registro."
      ),
      toEs("The meeting will begin at nine.", "La reunión dará comienzo a las nueve.", "«Dar comienzo» es la fórmula formal de «empezar» en anuncios y actos oficiales; «comenzará» o «se iniciará» también mantienen el registro.", ["La reunión comenzará a las nueve.", "La reunión se iniciará a las nueve."]),
      wo("Se ruega a los asistentes que ocupen sus asientos.", "Fórmula formal de los avisos: «Se ruega a» + destinatario + «que» + subjuntivo (ocupen).", "Attendees are requested to take their seats."),
    ]
  ),
  L(
    "c1c2-vocabulary-practice-27",
    "c2r-vocab-change-verbs",
    "Vocabulario en contexto: verbos de cambio",
    "Ponerse, volverse, hacerse, quedarse, convertirse en, llegar a ser: el español distingue matices que el inglés resume en «become».",
    "8 min",
    [
      sec(
        "La regla: become en seis verbos",
        [
          "El inglés dice «become» para todo; el español elige el verbo según tres preguntas: ¿el cambio dura o pasa?, ¿lo busca el sujeto o le sucede?, ¿va con adjetivo o con sustantivo? Ponerse (cambio temporal de estado o aspecto): ponerse rojo, nervioso. Volverse (cambio de carácter, profundo y duradero, que le sucede al sujeto): volverse loco, desconfiado. Hacerse (cambio por voluntad o proceso): hacerse rico, médico, famoso. Quedarse (resultado de un hecho, a menudo pérdida): quedarse ciego, viudo, sin trabajo. Convertirse en (transformación, con sustantivo). Llegar a ser (culminación tras esfuerzo).",
          "Muchos verbos simples equivalen a una de estas perífrasis, y saber cuál te dice qué tipo de cambio es: enrojecer = ponerse rojo; enloquecer = volverse loco; enviudar = quedarse viudo; enriquecerse = hacerse rico.",
        ],
        [
          ["Se puso pálido al oír la noticia.", "He went pale when he heard the news. (momentáneo → ponerse)"],
          ["Tras años de esfuerzo, llegó a ser directora.", "After years of effort, she became director. (culminación → llegar a ser)"],
          ["La crisis lo volvió desconfiado.", "The crisis made him distrustful. (carácter duradero → volver(se))"],
        ],
        [
          mc(
            "«Con los años, ___ muy desconfiado.» (cambio de carácter)",
            ["se volvió", "se puso", "se quedó", "llegó a ser"],
            0,
            "«Volverse» expresa un cambio profundo y duradero de carácter, a menudo gradual. «Ponerse» indica un cambio pasajero (se puso nervioso), «quedarse» el resultado de un hecho (se quedó ciego) y «llegar a ser» suele implicar la culminación de un proceso o un logro, no un rasgo como la desconfianza."
          ),
          mc(
            "Aplica la regla. «Tras el accidente, ___ cojo para siempre.»",
            ["se quedó", "se puso", "se hizo", "se convirtió"],
            0,
            "La cojera es el resultado de un hecho (el accidente) y supone una pérdida: «quedarse». «Ponerse» sería pasajero, «hacerse» implicaría voluntad y «convertirse» necesita «en» + sustantivo."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "Se ___ rojo cuando le preguntaron. (cambio momentáneo, indefinido)", "puso", "«Ponerse» + adjetivo expresa un cambio momentáneo de estado o de aspecto: ponerse rojo, nervioso, triste."),
      fb("Completa.", "Se ___ sin trabajo tras el cierre de la fábrica. (resultado, indefinido)", "quedó", "«Quedarse» expresa el estado que resulta de un hecho, a menudo una pérdida: quedarse sin trabajo, ciego, viudo."),
      fb("Completa.", "Se ___ vegetariana por convicción. (decisión propia, indefinido)", "hizo", "«Hacerse» expresa un cambio voluntario o por esfuerzo propio, sobre todo de ideología, profesión o creencias: hacerse vegetariano, médico, budista."),
      fb("Completa.", "El pequeño pueblo se ___ en un destino turístico. (transformación, indefinido)", "convirtió", "«Convertirse en» + sustantivo expresa una transformación radical: el pueblo pasó a ser algo distinto de lo que era."),
      mt(
        "Relaciona el verbo con el tipo de cambio.",
        [
          ["ponerse", "estado pasajero"],
          ["hacerse", "cambio voluntario o gradual"],
          ["quedarse", "resultado final"],
          ["llegar a ser", "culminación tras esfuerzo"],
        ],
        "«Ponerse» es un cambio pasajero, «hacerse» es voluntario o gradual, «quedarse» expresa el resultado de un hecho y «llegar a ser» marca la culminación de un esfuerzo."
      ),
      toEs(
        "Enrojeció al oír su nombre en voz alta.",
        "Se puso rojo al oír su nombre en voz alta.",
        "«Enrojecer» por una emoción es un cambio momentáneo de aspecto, y su perífrasis es «ponerse rojo». Si el sujeto es mujer, «se puso roja».",
        ["Se puso roja al oír su nombre en voz alta.", "Se puso colorado al oír su nombre en voz alta.", "Se puso colorada al oír su nombre en voz alta."],
        "Sustituye el verbo por una perífrasis con verbo de cambio."
      ),
      toEs(
        "Enviudó a los cuarenta años.",
        "Se quedó viuda a los cuarenta años.",
        "Enviudar es el resultado de una pérdida, y su perífrasis es «quedarse viudo/a». «Ponerse» no sirve: no es un estado pasajero.",
        ["Se quedó viudo a los cuarenta años."],
        "Sustituye el verbo por una perífrasis con verbo de cambio."
      ),
      toEs(
        "Estudió Medicina y se puso cirujano en un hospital de Lima.",
        "Estudió Medicina y se hizo cirujano en un hospital de Lima.",
        "Una profesión a la que se llega por voluntad y estudio pide «hacerse» (o «llegar a ser», si se subraya el esfuerzo). «Ponerse» solo expresa estados pasajeros: ponerse nervioso.",
        ["Estudió Medicina y llegó a ser cirujano en un hospital de Lima."],
        "Corrige la frase."
      ),
      toEs(
        "En diez años, aquel barrio obrero se volvió en el centro de moda de la ciudad.",
        "En diez años, aquel barrio obrero se convirtió en el centro de moda de la ciudad.",
        "Ante sustantivo, la transformación se expresa con «convertirse en». «Volverse» va con adjetivo (se volvió elegante) y no lleva «en».",
        ["En diez años, aquel barrio obrero pasó a ser el centro de moda de la ciudad."],
        "Corrige la frase."
      ),
      toEs("He became very nervous before the interview.", "Se puso muy nervioso antes de la entrevista.", "Un estado pasajero provocado por una situación: «ponerse nervioso». «Volverse nervioso» indicaría un cambio de carácter permanente.", ["Se puso muy nervioso antes de la entrevista de trabajo.", "Se puso nerviosísimo antes de la entrevista."]),
      wo("Nunca imaginó que llegaría a ser presidenta del club.", "«Llegar a ser» marca la culminación de un proceso (no «se volvió» ni «se puso»); tras «imaginó», el futuro del pasado va en condicional: llegaría.", "She never imagined she would become president of the club."),
    ]
  ),
  L(
    "c1c2-vocabulary-practice-30",
    "c2r-vocab-light-verb-idioms",
    "Vocabulario en contexto: locuciones con dar, echar y llevar",
    "Dar por sentado, echar en cara, llevar a cabo, dar pie a, echar a perder, llevarse un chasco: locuciones verbales de alta frecuencia.",
    "8 min",
    [
      sec(
        "La regla: el verbo se conjuga, el resto no se toca",
        [
          "Dar por sentado (suponer sin comprobar). Dar pie a (provocar, dar ocasión). Dar con (encontrar). Echar en cara (reprochar). Echar a perder (estropear). Echar en falta (notar la ausencia). Llevar a cabo (realizar). Llevarse un chasco (sufrir una decepción). Llevar la contraria (oponerse siempre).",
          "En estas locuciones el verbo (dar, echar, llevar) pierde su significado propio y lo aporta el complemento fijo. Por eso el verbo se conjuga y admite pronombres («me lo echó en cara», «se llevó un chasco»), pero la preposición y el complemento no cambian: «a cabo», nunca «al cabo»; «en cara», nunca «a la cara». Y si la locución es pronominal (llevarse un chasco), el pronombre concuerda con el sujeto.",
        ],
        [
          ["Dio por sentado que yo lo sabía.", "He took it for granted that I knew."],
          ["Me echó en cara que no la llamara.", "She reproached me for not calling her. (echar en cara que + subjuntivo)"],
          ["Nos llevamos un chasco con el hotel.", "We were really let down by the hotel. (llevarse: pronombre según el sujeto)"],
        ],
        [
          mc(
            "«Su comentario dio ___ a una larga discusión.»",
            ["pie", "mano", "cabo", "cara"],
            0,
            "«Dar pie a» significa 'ocasionar, dar motivo para'. «Dar mano», «dar cabo» y «dar cara» no tienen ese sentido; no hay que confundirlo con «dar la cara», 'asumir la responsabilidad'."
          ),
          mc(
            "Aplica la regla. «Por fin ___ la solución después de horas de pruebas.» (encontrar, nosotros, indefinido)",
            ["dimos con", "dimos a", "echamos con", "llevamos con"],
            0,
            "«Dar con» = encontrar: el verbo se conjuga (dimos) y la preposición «con» es fija. «Dar a» significa otra cosa (la ventana da a la calle), y ni «echar con» ni «llevar con» tienen ese sentido."
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
        "Son locuciones fijas: su sentido no se deduce de echar o llevar; apréndelas con su complemento (a cabo, a perder, en falta, un chasco)."
      ),
      fb("Completa.", "No lo des por ___: primero compruébalo.", "sentado", "«Dar por sentado» equivale a 'to take for granted': considerar algo seguro sin haberlo comprobado."),
      fb("Completa.", "Siempre me echa en ___ mis errores del pasado.", "cara", "«Echar en cara» es reprochar a alguien algo, sobre todo un error pasado o un favor recibido."),
      fb("Completa.", "La lluvia echó a ___ la cosecha.", "perder", "«Echar a perder» significa estropear o arruinar algo: la lluvia arruinó la cosecha."),
      mc(
        "«Le encanta llevar la contraria» describe a alguien que…",
        ["siempre se opone a lo que dicen los demás", "siempre ayuda", "siempre llega tarde", "siempre tiene razón"],
        0,
        "«Llevar la contraria» es oponerse por sistema a lo que dicen o hacen los demás; no tiene nada que ver con ayudar, con la puntualidad ni con tener razón."
      ),
      toEs(
        "Mis amigos se llevan un buen chasco cada vez que pierde su equipo.",
        "Yo me llevo un buen chasco cada vez que pierde mi equipo.",
        "En la locución pronominal el pronombre concuerda con el sujeto: se llevan → me llevo. El resto («un buen chasco») es fijo; el posesivo cambia con la persona (su → mi).",
        ["Me llevo un buen chasco cada vez que pierde mi equipo."],
        "Cambia el sujeto a «yo»."
      ),
      toEs(
        "La empresa realizó la auditoría en dos semanas.",
        "La empresa llevó a cabo la auditoría en dos semanas.",
        "«Llevar a cabo» sustituye a «realizar»: el verbo «llevar» toma el tiempo y la persona (llevó) y «a cabo» queda fijo.",
        [],
        "Sustituye «realizó» por la locución con «llevar»."
      ),
      toEs(
        "El ayuntamiento llevó al cabo la reforma de la plaza en tres meses.",
        "El ayuntamiento llevó a cabo la reforma de la plaza en tres meses.",
        "La locución es fija: «llevar a cabo». «Al cabo» es otra cosa («al cabo de tres meses» = después de tres meses).",
        [],
        "Corrige la frase."
      ),
      toEs(
        "Siempre me echa a la cara que llegué tarde a su boda.",
        "Siempre me echa en cara que llegué tarde a su boda.",
        "La locución es «echar en cara» (reprochar), con «en» y sin artículo. «A la cara» aparece en otras expresiones («decírselo a la cara»), no en esta.",
        [],
        "Corrige la frase."
      ),
      toEs("The project was carried out in record time.", "El proyecto se llevó a cabo en un tiempo récord.", "«Llevar a cabo» es la forma estándar de 'to carry out' (realizar, ejecutar); «en tiempo récord» es una expresión fija.", ["El proyecto fue llevado a cabo en tiempo récord.", "El proyecto se llevó a cabo en tiempo récord."]),
      wo("Esperaba un ascenso y se llevó un buen chasco.", "«Llevarse un chasco» (sufrir una decepción) es pronominal: se llevó; «buen» antepuesto intensifica («un buen chasco» = una gran decepción).", "She was expecting a promotion and was badly disappointed."),
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
        [
          "Recuerda la regla: un error de nivel C2 casi nunca es de conjugación; suele ser una colocación que no existe («dictar un recurso»), un parónimo («infligir» / «infringir»), una forma fija alterada («de motu propio») o una concordancia que la norma no admite («hubieron heridos»). Para corregirlo, nombra primero qué regla se ha roto.",
          "Las siete lecciones del Desafío C2 mezclan todo el nivel: lenguaje jurídico y médico, fraseología, refranes, humor, figuras retóricas, eufemismos, argumentación, negociación, citas, narración histórica y vocabulario culto. Aquí, cada frase tiene un único error: localízalo y corrígelo.",
        ],
        [
          ["✗ Lo hizo de motu propio. → ✓ Lo hizo motu proprio.", "He did it of his own accord."],
          ["✗ Está lloviendo gatos y perros. → ✓ Está lloviendo a cántaros.", "It's raining cats and dogs."],
        ],
        [
          mc(
            "¿Dónde está el error? «El juez dictó el recurso de apelación.»",
            ["dictó → se interpone un recurso; se dicta una sentencia", "juez → fiscal", "apelación → casación", "No hay error"],
            0,
            "El juez no «dicta» un recurso: las partes lo interponen y el juez lo estima o lo desestima; lo que el juez dicta es una sentencia o un auto. Cambiar «juez» por «fiscal» o «apelación» por «casación» no arregla esa colocación."
          ),
        ]
      ),
    ],
    [
      fb("Corrige (parónimo).", "Quien ___ la norma será sancionado. (el alumno puso: inflija)", "infrinja", "«Infringir» es quebrantar una norma (quien infrinja la ley); «infligir» es causar un daño o un castigo (infligir una derrota). Son parónimos que se confunden con frecuencia."),
      fb("Corrige (modismo).", "Mataremos dos pájaros de un ___. (el alumno puso: piedra)", "tiro", "La locución fija es «matar dos pájaros de un tiro» ('lograr dos cosas con una sola acción'); «de una piedra» es un calco del inglés «with one stone»."),
      fb("Corrige (latinismo).", "___ modo, el plan tiene tres fases. (el alumno escribió: A grosso modo)", "Grosso", "Grosso modo, sin la preposición «a»."),
      fb("Corrige (cita).", "El autor recomendó que se ___ la muestra. (el alumno puso: amplía)", "ampliara", "Influencia en pasado → imperfecto de subjuntivo."),
      fb("Corrige (verbo de cambio).", "Se ___ viudo muy joven. (el alumno puso: puso)", "quedó", "Enviudar es el resultado permanente de un hecho, no un cambio momentáneo: «quedarse viudo». «Ponerse» solo sirve para estados pasajeros (ponerse nervioso)."),
      mc(
        "¿Dónde está el error? «Siento que te hayas ofendido por mi culpa, pero tú empezaste.»",
        ["Es una falsa disculpa: traslada la culpa.", "hayas → has", "ofendido → ofendida", "No hay error"],
        0,
        "La gramática es correcta: «sentir que» exige subjuntivo («hayas»), así que cambiarlo por «has» introduciría un error, y «ofendido» u «ofendida» depende solo de a quién se hable. El fallo es pragmático: «pero tú empezaste» anula la disculpa y traslada la culpa."
      ),
      ms(
        "¿Qué frases están bien?",
        ["La cólera lo invadió al oír la noticia.", "Le infligieron una derrota humillante.", "Hubieron muchos heridos.", "Dimitió motu proprio."],
        [0, 1, 3],
        "«Haber» impersonal no concuerda con el sustantivo: «hubo muchos heridos», no «hubieron». Las demás son correctas: «la cólera» (la ira), «infligir una derrota» y «motu proprio»."
      ),
      toEs("Hubieron muchas quejas por el retraso del tren.", "Hubo muchas quejas por el retraso del tren.", "«Haber» existencial es impersonal: va siempre en singular, aunque el sustantivo sea plural. «Muchas quejas» es el complemento directo, no el sujeto.", [], "Corrige la frase."),
      toEs("Le infringieron al equipo local una derrota humillante.", "Le infligieron al equipo local una derrota humillante.", "Una derrota, un castigo o un daño se «infligen» (se causan). «Infringir» es quebrantar una norma: se infringe la ley.", ["Infligieron al equipo local una derrota humillante."], "Corrige la frase."),
      toEs("Es posible que haya muchos heridos.", "Era posible que hubiera muchos heridos.", "Al pasar la expresión de posibilidad al pasado («era posible»), el subjuntivo pasa al imperfecto: hubiera (o hubiese). Y sigue en singular, porque «haber» existencial es impersonal.", ["Era posible que hubiese muchos heridos.", "Fue posible que hubiera muchos heridos."], "Pasa la frase al pasado: empieza por «Era posible»."),
      toEs("Cuando se firmó el acuerdo, la bolsa subió.", "Firmado el acuerdo, la bolsa subió.", "El participio absoluto condensa una acción anterior y terminada: «firmado el acuerdo» = cuando se firmó. El participio concuerda con su sustantivo («firmada la paz», «firmados los contratos»).", ["Una vez firmado el acuerdo, la bolsa subió."], "Transforma la primera parte en una construcción de participio absoluto."),
    ]
  ),
  L(
    "c1c2-comprehensive-review-3",
    "c2r-challenge-register-chameleon",
    "Desafío C2: el camaleón del registro",
    "Un mismo hecho contado por un abogado, una médica, un periodista y un amigo: identifica y produce cada registro.",
    "8 min",
    [
      sec(
        "El hecho",
        [
          "Recuerda la regla: el hecho no cambia; cambian el léxico, la sintaxis y quién habla. El jurídico nombra a las partes por su papel y explicita la causa («como consecuencia de»); el médico usa «presenta» + término técnico sin artículo; el periodístico, presente y «tras»; el coloquial, verbos expresivos y comodines. Mezclar dos registros en una frase es un error aunque la gramática esté bien.",
          "Un vecino se cayó de una escalera, se fracturó la muñeca y demanda a la comunidad porque la escalera estaba en mal estado. Abogado: «El demandante sufrió una fractura como consecuencia del deficiente estado de la escalera». Médica: «Presenta fractura distal de radio». Periodista: «Un vecino demanda a su comunidad tras romperse la muñeca». Amigo: «Se pegó un castañazo y se rompió la muñeca».",
        ],
        [
          ["Presenta fractura distal de radio.", "He presents with a distal radius fracture."],
          ["Se pegó un castañazo.", "He took a nasty tumble."],
        ],
        [
          mc(
            "«Un vecino demanda a su comunidad tras romperse la muñeca» es registro…",
            ["periodístico", "médico", "jurídico", "coloquial"],
            0,
            "Un titular que resume un hecho noticioso en presente («demanda») y en tercera persona es registro periodístico; no usa tecnicismos médicos ni jurídicos, ni el tono coloquial de una conversación."
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
        "El jurídico usa «el demandante» y «como consecuencia de»; el médico, «presenta» + término técnico sin artículo; el coloquial, «pegarse un castañazo»."
      ),
      fb("Jurídico.", "El demandante ___ una fractura como consecuencia del accidente. (padecer, indefinido)", "sufrió", "En registro jurídico, las lesiones se «sufren»: «el demandante sufrió una fractura» es la colocación estándar, mientras que «padecer» se asocia más a enfermedades prolongadas."),
      fb("Médico.", "El paciente ___ dolor intenso en la muñeca. (manifestar, término clínico)", "refiere", "En el lenguaje clínico, «referir» significa que el paciente comunica un síntoma: «el paciente refiere dolor intenso»."),
      { ...fb("Coloquial.", "Se pegó un ___ tremendo bajando la escalera. (caída fuerte, coloquial España)", "castañazo", "«Castañazo» es un coloquialismo de España para un golpe o una caída fuerte; en un contexto formal se diría «una caída» o «un golpe»."), altAnswers: ["golpe", "porrazo", "batacazo", "trastazo"] },
      mc(
        "¿Qué frase mezcla registros de forma inadecuada?",
        ["El demandante se pegó un castañazo como consecuencia del deficiente estado de la escalera.", "El demandante sufrió una caída.", "Se cayó por la escalera.", "Presenta una fractura."],
        0,
        "«Se pegó un castañazo» es un coloquialismo de España que choca con el tono jurídico de «el demandante» y «como consecuencia del deficiente estado». Las otras frases mantienen un registro único y coherente."
      ),
      toEs("The plaintiff suffered a fracture as a result of the fall.", "El demandante sufrió una fractura como consecuencia de la caída.", "«Como consecuencia de» (o «a consecuencia de») es el nexo causal propio del registro jurídico, y «sufrir una fractura» es la colocación estándar.", ["El demandante sufrió una fractura a consecuencia de la caída.", "El demandante sufrió una fractura como resultado de la caída."]),
      toEs("El vecino se cayó porque la escalera estaba fatal.", "El demandante sufrió una caída como consecuencia del mal estado de la escalera.", "En el escrito jurídico, el vecino es «el demandante», caerse es «sufrir una caída», «porque» pasa a «como consecuencia de» y «estaba fatal» (coloquial) se nominaliza: «el mal (o deficiente) estado».", ["El demandante sufrió una caída como consecuencia del deficiente estado de la escalera.", "El demandante sufrió una caída a consecuencia del mal estado de la escalera.", "El demandante sufrió una caída a consecuencia del deficiente estado de la escalera."], "Pasa la frase al registro jurídico."),
      toEs("El paciente presenta una contusión en la rodilla.", "Se dio un golpe en la rodilla.", "Entre amigos, «presenta una contusión» se dice con un verbo corriente y la palabra de la calle: «darse un golpe». En España también: «se dio un porrazo».", ["Se ha dado un golpe en la rodilla.", "Se dio un golpe en la rodilla, nada más.", "Se dio un porrazo en la rodilla.", "Se pegó un golpe en la rodilla.", "Se dio un golpazo en la rodilla."], "Pasa la frase al registro coloquial, como se lo contarías a un amigo."),
      toEs("El paciente refiere fractura distal de radio.", "El paciente presenta fractura distal de radio.", "Una fractura no la «refiere» el paciente (eso es lo que cuenta él: dolor, mareo); la comprueba el médico con la radiografía. En el informe, lo objetivado se introduce con «presenta».", [], "Corrige la frase."),
      wo("Un vecino demanda a su comunidad tras romperse la muñeca en la escalera.", "El titular usa presente («demanda») para un hecho reciente y «tras + infinitivo» para la causa; con partes del cuerpo se usa artículo, no posesivo («romperse la muñeca»).", "A resident sues his homeowners' association after breaking his wrist on the stairs."),
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
        [
          "Recuerda la regla: en C2 se traduce la función, no la forma. Primero se identifica qué hace la frase (es un modismo, una fórmula contractual, un eufemismo, una atenuación) y después se busca la pieza española que hace lo mismo en el mismo registro. Un calco palabra por palabra suele ser gramatical, pero no es español.",
          "A nivel C2 se traduce la función: «He kicked the bucket» → «Estiró la pata»; «Notwithstanding the foregoing» → «No obstante lo anterior»; «It's all Greek to me» → «Me suena a chino»; «The company let him go» → «La empresa prescindió de sus servicios».",
        ],
        [
          ["No obstante lo anterior…", "Notwithstanding the foregoing…"],
          ["La empresa prescindió de sus servicios.", "The company let him go."],
        ],
        [
          mc(
            "«To take something for granted» →",
            ["dar algo por sentado", "tomar algo por concedido", "coger algo gratis", "dar algo por hecho gratis"],
            0,
            "El equivalente es «dar algo por sentado» (o «dar algo por hecho»). «Tomar algo por concedido» es un calco del inglés, «coger algo gratis» es una traducción literal sin sentido y «dar algo por hecho gratis» añade una palabra ajena a la locución."
          ),
        ]
      ),
    ],
    [
      toEs("Stop beating around the bush and get to the point.", "Deja de andarte por las ramas y ve al grano.", "«Andarse (o irse) por las ramas» equivale a 'beat around the bush', e «ir al grano» a 'get to the point'.", ["No te andes por las ramas y ve al grano.", "Deja de irte por las ramas y ve al grano."]),
      toEs("Should the tenant fail to pay, the contract shall be terminated.", "En caso de que el arrendatario no pague, el contrato quedará resuelto.", "En los contratos, la condición se expresa con «en caso de que» + subjuntivo, y el «shall» normativo con futuro: «quedará resuelto» ('quedará sin efecto').", ["En caso de que el arrendatario no abone la renta, el contrato quedará resuelto.", "Si el arrendatario no paga, el contrato se resolverá."]),
      toEs("It is worth distinguishing between explaining and justifying.", "Conviene distinguir entre explicar y justificar.", "«Conviene» o «cabe» + infinitivo son fórmulas impersonales propias del registro académico para 'it is worth'.", ["Vale la pena distinguir entre explicar y justificar.", "Merece la pena distinguir entre explicar y justificar.", "Cabe distinguir entre explicar y justificar.", "Conviene diferenciar entre explicar y justificar."]),
      toEn("Se llevó un chasco tremendo.", "He was bitterly disappointed.", "«Llevarse un chasco» es una locución coloquial: sufrir una decepción ante algo que se esperaba; «tremendo» la intensifica.", ["She was really let down.", "He was terribly disappointed.", "She got a big disappointment."]),
      mc(
        "«Me temo que esta es nuestra última oferta.» ¿Qué versión inglesa conserva la función?",
        ["I'm afraid this is our final offer.", "I fear that this is our last offer.", "I'm scared this is our final offer.", "I worry this could be our last offer."],
        0,
        "«Me temo que» no expresa miedo: es una fórmula cortés para comunicar algo desagradable con firmeza, igual que «I'm afraid». «I fear» y «I'm scared» traducen la forma (temer) y no la función; «I worry this could be» convierte el ultimátum en una duda."
      ),
      mc(
        "«Firmada la paz, las tropas regresaron.» ¿Qué relación expresa el participio absoluto?",
        ["Once peace was signed, the troops returned.", "While peace was being signed, the troops returned.", "Although peace was signed, the troops returned.", "The troops returned to sign the peace."],
        0,
        "El participio absoluto («firmada la paz») presenta una acción anterior y terminada: 'once peace was signed'. No indica simultaneidad (while), concesión (although) ni finalidad (to sign)."
      ),
      toEs("A pesar de lo dicho, el plazo se mantiene.", "No obstante lo anterior, el plazo se mantiene.", "«No obstante lo anterior» es la fórmula culta (jurídica y administrativa) equivalente a «a pesar de lo dicho»; traduce «notwithstanding the foregoing».", ["No obstante lo dicho, el plazo se mantiene.", "No obstante lo anterior, se mantiene el plazo."], "Reescribe la frase con la fórmula culta equivalente."),
      toEs("No lo cuestionamos: lo tomamos por concedido.", "No lo cuestionamos: lo dimos por sentado.", "«Take for granted» no se traduce palabra por palabra: la locución española es «dar por sentado» (o «dar por hecho»). «Tomar por concedido» es un calco.", ["No lo cuestionamos: lo dimos por hecho.", "No lo cuestionamos: lo damos por sentado.", "No lo cuestionamos: lo damos por hecho."], "Corrige el calco del inglés."),
      toEs("No entiendo nada de este contrato: me suena a griego.", "No entiendo nada de este contrato: me suena a chino.", "La función es la misma ('it's all Greek to me'), pero en español la lengua incomprensible es el chino: «me suena a chino» (o «me parece chino»).", ["No entiendo nada de este contrato: me parece chino."], "Corrige el calco del inglés."),
      fb("Completa con el eufemismo formal.", "Tras diez años en la empresa, la dirección ___ de sus servicios.", "prescindió", "«Prescindir de los servicios de alguien» es la forma formal y atenuada de despedir ('let someone go')."),
      wo("No obstante lo anterior, las partes podrán renegociar el plazo de entrega.", "«No obstante lo anterior» abre una salvedad en registro contractual, y el futuro «podrán» expresa una facultad de las partes.", "Notwithstanding the foregoing, the parties may renegotiate the delivery deadline."),
      toEs("Everything seems to indicate that the trend will continue.", "Todo parece indicar que la tendencia se mantendrá.", "«Todo parece indicar que» atenúa la afirmación: presenta la conclusión como probable, no como segura.", ["Todo parece indicar que la tendencia continuará.", "Todo indica que la tendencia se mantendrá."]),
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
        [
          "Recuerda la regla: una locución es una pieza única. Su sentido no sale de sus palabras y no admite cambiar ninguna (ni «cuenta limpia» por «cuenta nueva», ni «a cubos» por «a cántaros»): si se toca una pieza, deja de ser la locución y suena a error o a calco.",
          "Sin pistas: cada hueco exige una palabra de una expresión fija estudiada en el C2. Recuerda que las formas fijas no admiten variación: «llover a cántaros», «de Pascuas a Ramos», «hacer borrón y cuenta nueva», «conciliar el sueño», «dar luz verde».",
        ],
        [
          ["Hicimos borrón y cuenta nueva.", "We wiped the slate clean."],
        ],
        [
          mc(
            "«Poner los puntos sobre las ___.»",
            ["íes", "letras", "palabras", "tildes"],
            0,
            "La locución fija es «poner los puntos sobre las íes» ('aclarar algo con precisión'); «íes» es el plural de la letra i. «Letras», «palabras» o «tildes» rompen la expresión."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "No consigo conciliar el ___.", "sueño", "«Conciliar el sueño» es una colocación fija que significa lograr dormirse."),
      fb("Completa.", "El consejo dio luz ___ al proyecto.", "verde", "«Dar luz verde» a algo es autorizarlo o aprobarlo, por la luz del semáforo que permite pasar."),
      fb("Completa.", "Hicieron borrón y cuenta ___.", "nueva", "«Hacer borrón y cuenta nueva» es olvidar lo pasado (errores, deudas, conflictos) y empezar de cero."),
      fb("Completa.", "Genio y figura hasta la ___.", "sepultura", "«Genio y figura hasta la sepultura» es un refrán rimado: el carácter de una persona no cambia en toda su vida."),
      fb("Completa.", "Lo pillaron con las manos en la ___.", "masa", "«Pillar con las manos en la masa» es sorprender a alguien en el momento de hacer algo indebido, in fraganti; «pillar» es coloquial (también «coger» en España)."),
      fb("Completa.", "Nos vemos de Pascuas a ___.", "Ramos", "«De Pascuas a Ramos» significa muy de vez en cuando; «Ramos» va con mayúscula porque alude al Domingo de Ramos."),
      fb("Completa.", "No le busques tres pies al ___.", "gato", "«Buscarle tres pies al gato» es complicar algo sin necesidad o buscar problemas donde no los hay."),
      fb("Completa.", "Se le fue el santo al ___.", "cielo", "«Irse el santo al cielo» es olvidar de repente lo que uno iba a decir o hacer."),
      toEs("Mi hermano viene a casa muy de vez en cuando.", "Mi hermano viene a casa de Pascuas a Ramos.", "«De Pascuas a Ramos» = muy de vez en cuando. Sustituye entera a la expresión neutra, sin artículos añadidos.", [], "Sustituye «muy de vez en cuando» por la locución fija equivalente."),
      toEs("Siempre complicas las cosas sin necesidad.", "Siempre le buscas tres pies al gato.", "«Buscarle tres pies al gato» = complicar algo sin necesidad, buscar problemas donde no los hay. El pronombre «le» duplica a «al gato».", ["Siempre le estás buscando tres pies al gato.", "Siempre andas buscándole tres pies al gato."], "Sustituye la frase por la locución fija que significa lo mismo."),
      toEs("Coge el paraguas, que está lloviendo a cubos.", "Coge el paraguas, que está lloviendo a cántaros.", "La locución fija es «llover a cántaros». «A cubos» conserva la imagen, pero cambia una pieza y deja de ser la expresión.", ["Coge el paraguas, que está lloviendo a mares.", "Agarra el paraguas, que está lloviendo a cántaros.", "Toma el paraguas, que está lloviendo a cántaros."], "Corrige la frase."),
      toEs("Después de la pelea hicieron borrón y cuenta limpia.", "Después de la pelea hicieron borrón y cuenta nueva.", "La locución es «hacer borrón y cuenta nueva»: se borra lo anterior y se abre una cuenta NUEVA. «Cuenta limpia» mezcla otra imagen («hacer tabla rasa»).", [], "Corrige la frase."),
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
        [
          "Recuerda la regla: para analizar un texto de opinión, identifica cada recurso por su mecanismo: la ironía dice lo contrario de lo que piensa («Magnífico»), la pregunta retórica afirma sin esperar respuesta, las comillas citan con distancia, la metáfora identifica dos cosas («el pulmón del barrio») y «Es cierto que…; ahora bien,…» concede para refutar.",
          "«Nos dicen que la ciudad es para las personas. Magnífico. Por eso, supongo, el último parque del barrio será un aparcamiento. ¿Quién necesita árboles teniendo plazas de garaje? El concejal, en palabras textuales, afirmó que el proyecto “mejorará la movilidad”. Es cierto que el tráfico es un problema; ahora bien, convertir el pulmón del barrio en asfalto no parece la cura, sino la enfermedad.»",
        ],
        [
          ["El pulmón del barrio.", "The neighborhood's lungs, its green space."],
          ["No parece la cura, sino la enfermedad.", "It looks less like the cure than the disease itself."],
        ],
        [
          mc(
            "«Magnífico.» en la segunda frase es…",
            ["ironía", "un elogio sincero", "una cita", "un eufemismo"],
            0,
            "«Magnífico», dicho de algo claramente negativo, es ironía por antífrasis: se dice lo contrario de lo que se piensa. No es un elogio sincero ni una cita, y tampoco un eufemismo, que suavizaría algo sin invertir su sentido."
          ),
        ]
      ),
    ],
    [
      mc(
        "«¿Quién necesita árboles teniendo plazas de garaje?» es…",
        ["una pregunta retórica irónica", "una pregunta real", "una hipófora", "una cita"],
        0,
        "Es una pregunta retórica irónica: no espera respuesta y afirma de forma implícita lo contrario (los árboles sí hacen falta). No es una pregunta real ni una hipófora, en la que el autor pregunta y luego se responde a sí mismo."
      ),
      mc(
        "«El pulmón del barrio» es…",
        ["una metáfora", "una metonimia", "un eufemismo", "una hipérbole"],
        0,
        "«El pulmón del barrio» es una metáfora: identifica el parque con un pulmón por su función de dar aire. No hay relación de contigüidad (metonimia), ni suavización (eufemismo), ni exageración (hipérbole)."
      ),
      mc(
        "«Es cierto que el tráfico es un problema; ahora bien…» es…",
        ["concesión seguida de refutación", "un falso dilema", "un ad hominem", "una tríada"],
        0,
        "«Es cierto que…; ahora bien…» concede un punto y a continuación lo refuta: es una estructura concesiva. No reduce el asunto a dos opciones (falso dilema), no ataca a la persona (ad hominem) ni enumera tres elementos (tríada)."
      ),
      mc(
        "Las comillas en «mejorará la movilidad» indican…",
        ["cita textual con distancia crítica", "un título", "un tecnicismo", "una traducción"],
        0,
        "Las comillas reproducen literalmente las palabras de otro y, a la vez, marcan distancia crítica o ironía. No señalan un título, un tecnicismo ni una traducción."
      ),
      mc(
        "«No parece la cura, sino la enfermedad» usa…",
        ["antítesis con metáfora médica", "sinestesia", "anáfora", "eufemismo"],
        0,
        "Opone «cura» y «enfermedad» (antítesis) dentro de una imagen médica aplicada al proyecto (metáfora). No mezcla sensaciones (sinestesia), no repite palabras al inicio (anáfora) ni suaviza nada (eufemismo)."
      ),
      { ...fb("Completa según el texto.", "En palabras ___, el concejal afirmó que…", "textuales", "«En palabras textuales» introduce una cita literal, reproducida palabra por palabra."), altAnswers: ["literales"] },
      ms(
        "¿Qué recursos usa el columnista?",
        ["ironía", "pregunta retórica", "concesión", "estadísticas detalladas"],
        [0, 1, 2],
        "El columnista usa ironía («Magnífico»), pregunta retórica y concesión («Es cierto que…; ahora bien»); en cambio, no aporta estadísticas detalladas: argumenta con recursos retóricos, no con datos."
      ),
      toEs("El aparcamiento creará plazas, pero destruirá el último parque.", "Es cierto que el aparcamiento creará plazas; ahora bien, destruirá el último parque.", "La concesión reconoce el argumento contrario («Es cierto que…») y «ahora bien» introduce la objeción que pesa más. Es la misma estructura que usa el columnista con el tráfico.", ["Es cierto que el aparcamiento creará plazas, ahora bien, destruirá el último parque.", "Es cierto que el aparcamiento creará plazas. Ahora bien, destruirá el último parque.", "Es cierto que el aparcamiento creará plazas; ahora bien, acabará con el último parque."], "Transforma la frase en concesión + refutación con «Es cierto que…; ahora bien,…»."),
      toEs("Es verdad que el aparcamiento traerá ingresos; además, nadie lo ha pedido.", "Es verdad que el aparcamiento traerá ingresos; ahora bien, nadie lo ha pedido.", "Tras conceder un punto («Es verdad que…»), la objeción necesita un conector adversativo: «ahora bien», «sin embargo», «no obstante». «Además» suma en la misma dirección y deja la concesión sin respuesta.", ["Es verdad que el aparcamiento traerá ingresos; sin embargo, nadie lo ha pedido.", "Es verdad que el aparcamiento traerá ingresos; no obstante, nadie lo ha pedido.", "Es verdad que el aparcamiento traerá ingresos, pero nadie lo ha pedido."], "Corrige el conector."),
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
        [
          "Recuerda la regla: bajo presión se gana desactivando el recurso del rival, no contestando con otro igual. Primero se nombra lo que hace (ataca a la persona, deforma tus palabras, plantea solo dos opciones, encadena catástrofes) y después se vuelve a los datos, sin abandonar el registro cortés.",
          "Concesión + refutación. Desactivar falacias (ad hominem, hombre de paja, falso dilema, pendiente resbaladiza). Responder a preguntas retóricas con datos. Mantener el registro bajo presión: «Permítame terminar», «Con todo respeto». Cerrar con síntesis y llamamiento.",
        ],
        [
          ["Con todo respeto, eso no es lo que he dicho.", "With all due respect, that's not what I said."],
        ],
        [
          mc(
            "«Usted defiende esto porque su empresa se beneficia.» Es…",
            ["ad hominem", "falso dilema", "pendiente resbaladiza", "argumento sólido"],
            0,
            "Descalificar un argumento por los intereses de quien lo defiende es un ad hominem. No plantea solo dos opciones (falso dilema) ni una cadena de consecuencias (pendiente resbaladiza), y no es un argumento sólido porque no discute los datos."
          ),
        ]
      ),
    ],
    [
      mc(
        "Respuesta adecuada al ataque anterior:",
        ["Mis intereses no invalidan los datos; analicémoslos.", "¡Y usted es un mentiroso!", "Pues sí, me beneficio, ¿y qué?", "No pienso contestar."],
        0,
        "La réplica eficaz separa a la persona del argumento y vuelve a los datos. Insultar («¡Y usted es un mentiroso!»), admitirlo con desafío («¿y qué?») o negarse a contestar agrava el ataque o lo deja sin respuesta."
      ),
      mc(
        "«Si aprobamos esto, mañana nos prohibirán hasta respirar.» Es…",
        ["pendiente resbaladiza", "concesión", "analogía válida", "dato"],
        0,
        "Es una pendiente resbaladiza: supone, sin pruebas, que un primer paso desencadenará una cadena de consecuencias catastróficas. No concede nada, no compara casos semejantes (analogía) ni aporta un dato."
      ),
      mc(
        "El rival interrumpe por tercera vez. Usted:",
        ["Permítame terminar; luego le escucho con gusto.", "¡Cállese!", "Me voy.", "Hable usted, que yo ya no digo nada."],
        0,
        "«Permítame terminar; luego le escucho con gusto» combina firmeza y cortesía, con el trato de usted. «¡Cállese!» es descortés, y marcharse o ceder la palabra equivale a abandonar el debate."
      ),
      fb("Concesión.", "Nadie ___ que el problema sea grave; la cuestión es cómo abordarlo.", "discute", "«Nadie discute que» + subjuntivo («sea») concede un punto antes de plantear la verdadera cuestión: se admite la gravedad y se discute solo cómo abordarla."),
      { ...fb("Contra el hombre de paja.", "Usted ___ mis palabras: yo nunca he propuesto cerrar el centro a los coches.", "tergiversa", "Contra el hombre de paja se nombra la maniobra: el rival «tergiversa» (deforma) lo que dijiste para atacar una postura que no es la tuya."), altAnswers: ["distorsiona", "deforma", "manipula"] },
      fb("Cierre.", "La pregunta no es si podemos permitírnoslo, ___ si podemos permitirnos no hacerlo.", "sino", "Tras una negación («no es si…»), la alternativa que la sustituye se introduce con «sino», no con «pero»."),
      toEs("With all due respect, you are attributing to me something I have never proposed.", "Con todo respeto, me atribuye usted algo que nunca he propuesto.", "«Con todo respeto» introduce el desacuerdo con cortesía y «atribuir algo a alguien» nombra la maniobra del hombre de paja. En España se prefiere el perfecto «he propuesto»; en América es frecuente «propuse».", ["Con todo respeto, me está atribuyendo algo que nunca he propuesto.", "Con todo respeto, me atribuye algo que nunca he propuesto.", "Con todo el respeto, me atribuye usted algo que nunca he propuesto.", "Con todo respeto, me atribuye usted algo que nunca propuse.", "Con todo respeto, me está atribuyendo algo que nunca propuse."]),
      toEs("¡Déjeme hablar, que no he terminado!", "Permítame terminar, por favor.", "Bajo presión se mantiene el registro: «Permítame + infinitivo» pide la palabra con firmeza y cortesía; el imperativo exclamativo suena a riña.", ["Permítame terminar.", "Permítame acabar, por favor.", "Permítame terminar, por favor; luego le escucho.", "Permítame terminar; luego le escucho con gusto."], "Reescribe la interrupción en registro cortés, con «Permítame»."),
      toEs("Si aprobamos esto, mañana nos prohibirán hasta respirar: es un argumento sólido.", "Si aprobamos esto, mañana nos prohibirán hasta respirar: es una pendiente resbaladiza.", "Suponer sin pruebas que un primer paso desencadenará una cadena de catástrofes es una falacia: la pendiente resbaladiza. Nombrarla es el primer paso para desactivarla.", ["Si aprobamos esto, mañana nos prohibirán hasta respirar: es una falacia de pendiente resbaladiza."], "Corrige el análisis."),
      toEs("El debate no es quién tiene la culpa, pero cómo lo solucionamos.", "El debate no es quién tiene la culpa, sino cómo lo solucionamos.", "Tras una negación, la alternativa que sustituye a lo negado se introduce con «sino». «Pero» añade una objeción, no reemplaza lo anterior.", [], "Corrige la frase."),
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
            "Si el tribunal confirmó la sentencia, rechazó el recurso: lo «desestimó». «Estimar» un recurso es aceptarlo, «dictar» se usa con sentencias o autos, e «incoar» es iniciar un procedimiento."
          ),
        ]
      ),
    ],
    [
      mc(
        "Médico: «Cefalea» es…",
        ["dolor de cabeza", "falta de aire", "picor", "fiebre alta"],
        0,
        "«Cefalea» es el término clínico para el dolor de cabeza (del griego kephalé, 'cabeza'). La falta de aire es «disnea», el picor «prurito» y la fiebre alta «hipertermia» o «fiebre elevada»."
      ),
      mc(
        "Fraseología: «Irse de la lengua» significa…",
        ["revelar un secreto", "hablar otro idioma", "callarse", "mentir"],
        0,
        "«Irse de la lengua» es hablar más de la cuenta y revelar algo que debía callarse. No tiene que ver con hablar idiomas, es lo contrario de callarse y no implica mentir."
      ),
      mc(
        "Figuras: «Leí a Neruda todo el verano» contiene…",
        ["una metonimia (autor por obra)", "una hipérbole", "un oxímoron", "una sinestesia"],
        0,
        "Nombrar al autor por su obra («leí a Neruda» = leí sus libros) es una metonimia. No hay exageración (hipérbole), ni contradicción (oxímoron), ni mezcla de sensaciones (sinestesia)."
      ),
      mc(
        "Eufemismo: «Ajuste de plantilla» significa…",
        ["despidos", "contrataciones", "subida de sueldos", "cambio de horario"],
        0,
        "«Ajuste de plantilla» es un eufemismo empresarial para los despidos: suaviza la noticia. No significa contratar, subir sueldos ni cambiar horarios."
      ),
      fb("Historia.", "Cuando llegaron los refuerzos, la ciudad ya se ___ rendido.", "había", "El pluscuamperfecto («se había rendido») expresa una acción anterior a otra acción pasada, la llegada de los refuerzos."),
      fb("Citas.", "El autor ___ que los datos no son concluyentes. (afirmar con firmeza, presente)", "sostiene", "«Sostener» es un verbo de atribución que presenta una opinión defendida con firmeza: «El autor sostiene que…»."),
      fb("Negociación.", "Aceptaríamos siempre que el plazo ___ de 60 días. (ser)", "fuera", "Condicional + siempre que + imperfecto de subjuntivo."),
    ]
  ),
];
