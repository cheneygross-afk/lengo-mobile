// Synced from cheneygross-afk/lengo:src/lib/exams/dele-c1-lectura.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { ExamPaper } from "./types";

// DELE C1 practice exam -- Prueba 1: Comprensión de lectura y uso de la
// lengua. 90 minutes, 5 tasks, 40 items, as in the real exam.
const T2_FRAGMENTS = [
  "A. Ese mismo año, el ayuntamiento aprobó una ordenanza que prohibía expresamente dar de comer a los animales en la vía pública.",
  "B. La paradoja es que, cuanto más se esfuerza una ciudad por eliminar a las palomas, más atractiva resulta para ellas.",
  "C. No siempre fue así: durante siglos, la paloma fue un animal apreciado, criado en palomares por su carne y por su estiércol, excelente abono.",
  "D. Lo que antes era un recurso valioso se convirtió, en pocas décadas, en un simple estorbo.",
  "E. De hecho, las colonias urbanas se regulan casi exclusivamente en función del alimento disponible.",
  "F. El método, sin embargo, tiene un inconveniente evidente: requiere constancia y personal durante años.",
  "G. Los resultados fueron inmediatos: en pocas semanas no quedaba ni una paloma en el centro de la ciudad.",
];

export const DELE_C1_LECTURA: ExamPaper = {
  id: "lectura",
  kind: "reading",
  title: "Comprensión de lectura y uso de la lengua",
  minutes: 90,
  group: 1,
  tasks: [
    {
      title: "Tarea 1",
      instructions:
        "Lea el texto y conteste a las preguntas (1-6). Seleccione la respuesta correcta (a, b o c).",
      texts: [
        {
          title: "Reglamento del programa de residencias artísticas «Casa del Faro» (extracto)",
          body:
            "Artículo 1. Objeto. La Fundación Casa del Faro convoca seis residencias artísticas de tres meses de duración, destinadas a creadores de cualquier disciplina que deseen desarrollar un proyecto vinculado al paisaje, la memoria o las comunidades de la costa atlántica.\n\n" +
            "Artículo 2. Requisitos. Podrán concurrir personas mayores de edad, de cualquier nacionalidad, que acrediten una trayectoria profesional mínima de tres años. No se admitirán proyectos que hayan recibido financiación pública para la misma fase de ejecución. Quedan excluidos quienes hayan disfrutado de esta residencia en las dos convocatorias anteriores.\n\n" +
            "Artículo 3. Dotación. Cada residente dispondrá de alojamiento individual, estudio de trabajo y una asignación mensual de 1.200 euros, sujeta a las retenciones fiscales que correspondan. Los gastos de desplazamiento hasta la sede serán reembolsados previa presentación de los justificantes, hasta un máximo de 400 euros. La Fundación no se hará cargo de los gastos de material, que deberán estar contemplados en el presupuesto del proyecto.\n\n" +
            "Artículo 4. Obligaciones. Los residentes se comprometen a residir en la sede durante al menos el 80 % del periodo, a participar en una jornada de puertas abiertas y a impartir un taller gratuito dirigido a la población local. Asimismo, deberán entregar, en el plazo de un mes desde la finalización de la estancia, una memoria de las actividades realizadas.\n\n" +
            "Artículo 5. Propiedad de las obras. Las obras resultantes serán propiedad de sus autores. No obstante, estos cederán a la Fundación, con carácter no exclusivo y por un periodo de cinco años, los derechos de reproducción con fines de difusión, siempre que se mencione la autoría.\n\n" +
            "Artículo 6. Selección. Un jurado formado por tres profesionales independientes y un representante de la Fundación valorará la calidad artística de la propuesta (50 %), su vinculación con el territorio (30 %) y su viabilidad (20 %). El fallo será inapelable. En caso de renuncia de un seleccionado, la plaza se ofrecerá al primer candidato de la lista de reserva.",
        },
      ],
      items: [
        {
          n: 1,
          question: "Según el reglamento, no podrá presentarse a la convocatoria un artista que…",
          options: [
            "haya sido residente de la Fundación en la convocatoria anterior.",
            "no tenga la nacionalidad española.",
            "haya obtenido algún tipo de beca en el pasado.",
          ],
          answer: 0,
          explanation: "Quedan excluidos quienes hayan disfrutado de la residencia en las dos convocatorias anteriores. La exclusión por financiación pública solo afecta a la misma fase del proyecto.",
        },
        {
          n: 2,
          question: "En cuanto a los gastos, la Fundación…",
          options: [
            "paga el material necesario para el proyecto.",
            "devuelve parte del coste del viaje.",
            "abona una cantidad libre de impuestos.",
          ],
          answer: 1,
          explanation: "Reembolsa el desplazamiento hasta 400 euros; la asignación está sujeta a retenciones y el material no se cubre.",
        },
        {
          n: 3,
          question: "Durante la estancia, los residentes…",
          options: [
            "no pueden ausentarse de la sede en ningún momento.",
            "deben dar una actividad formativa para los vecinos.",
            "tienen que presentar una memoria cada mes.",
          ],
          answer: 1,
          explanation: "Deben impartir un taller gratuito para la población local. Pueden ausentarse hasta un 20 % del periodo, y la memoria se entrega al final.",
        },
        {
          n: 4,
          question: "Respecto a las obras creadas durante la residencia,…",
          options: [
            "pasan a ser propiedad de la Fundación durante cinco años.",
            "la Fundación puede reproducirlas para darlas a conocer.",
            "los autores no pueden cederlas a otras instituciones.",
          ],
          answer: 1,
          explanation: "La cesión de derechos de reproducción es con fines de difusión y \"no exclusiva\", así que los autores pueden cederlas a otros.",
        },
        {
          n: 5,
          question: "En la selección, el criterio con más peso es…",
          options: ["la viabilidad del proyecto.", "la relación del proyecto con la zona.", "el valor artístico de la propuesta."],
          answer: 2,
          explanation: "Calidad artística: 50 %; vinculación con el territorio: 30 %; viabilidad: 20 %.",
        },
        {
          n: 6,
          question: "Si un artista seleccionado renuncia a la residencia,…",
          options: [
            "se convoca de nuevo esa plaza.",
            "el jurado vuelve a reunirse para elegir a otro.",
            "su plaza pasa a otro candidato ya previsto.",
          ],
          answer: 2,
          explanation: "La plaza se ofrece al primer candidato de la lista de reserva.",
        },
      ],
    },
    {
      title: "Tarea 2",
      instructions:
        "Lea el siguiente texto, del que se han extraído seis fragmentos. A continuación, lea los siete fragmentos propuestos (A-G) y decida en qué lugar del texto (7-12) hay que colocar cada uno. Hay un fragmento que no tiene que elegir.",
      texts: [
        {
          title: "La paloma: de símbolo a plaga",
          body:
            "Pocas especies despiertan tanta antipatía en las ciudades como la paloma bravía. Se le acusa de ensuciar monumentos, transmitir enfermedades y ocupar cada cornisa disponible. (7) Además, su vuelo y su capacidad para regresar al nido la convirtieron en mensajera de ejércitos y comerciantes.\n\n" +
            "Con la llegada de los fertilizantes químicos y las telecomunicaciones, los palomares se abandonaron y muchas aves se instalaron en los núcleos urbanos, donde encontraron refugio en los edificios y comida abundante. (8)\n\n" +
            "Las administraciones respondieron durante décadas con métodos drásticos: capturas masivas, venenos, incluso halcones adiestrados. Ninguno funcionó a largo plazo. Los biólogos lo explican con un principio sencillo: si se elimina a una parte de la población, las supervivientes disponen de más recursos y se reproducen con mayor rapidez. (9)\n\n" +
            "Basilea, en Suiza, ensayó a finales de los años ochenta un enfoque distinto. En lugar de matar palomas, instaló palomares controlados en los que los técnicos sustituían parte de los huevos por réplicas de yeso, al tiempo que lanzaba una campaña para que los ciudadanos dejaran de alimentarlas. (10) La colonia disminuyó de forma sostenida sin necesidad de sacrificar un solo animal.\n\n" +
            "El modelo se ha exportado a decenas de ciudades europeas, con resultados desiguales. (11) Cuando los palomares se descuidan o las campañas de sensibilización se abandonan, las cifras vuelven a crecer.\n\n" +
            "Algunos expertos sostienen que el verdadero problema no son las palomas, sino nuestros hábitos: restos de comida en la calle, contenedores abiertos, vecinos que las alimentan por compasión. (12) Controlar al animal, en definitiva, empieza por controlar lo que dejamos a su alcance.",
        },
      ],
      layout: "select",
      items: [
        { n: 7, question: "", options: T2_FRAGMENTS, answer: 2, explanation: "C introduce el contraste histórico (\"No siempre fue así\"), y \"Además\" añade otro uso tradicional: la mensajería." },
        { n: 8, question: "", options: T2_FRAGMENTS, answer: 3, explanation: "D resume el cambio que describe el párrafo: de recurso valioso a estorbo." },
        { n: 9, question: "", options: T2_FRAGMENTS, answer: 1, explanation: "B formula la paradoja que se deriva del principio biológico: eliminar palomas favorece su reproducción." },
        { n: 10, question: "", options: T2_FRAGMENTS, answer: 0, explanation: "A completa la campaña de Basilea con la prohibición de alimentar a los animales, antes de exponer el resultado." },
        { n: 11, question: "", options: T2_FRAGMENTS, answer: 5, explanation: "F explica la desigualdad de resultados: el método exige constancia, como confirma la frase siguiente." },
        { n: 12, question: "", options: T2_FRAGMENTS, answer: 4, explanation: "E: las colonias dependen del alimento disponible, lo que apoya la conclusión. G no encaja en ningún hueco: contradice que la colonia disminuyera \"de forma sostenida\"." },
      ],
    },
    {
      title: "Tarea 3",
      instructions: "Lea el texto y conteste a las preguntas (13-18). Seleccione la respuesta correcta (a, b o c).",
      texts: [
        {
          title: "Elogio del error",
          body:
            "Nos educaron para evitar el error. En la escuela, cada fallo restaba puntos; en el trabajo, se oculta como una mancha en el expediente. Y, sin embargo, buena parte de lo que sabemos lo hemos aprendido precisamente equivocándonos. La neurociencia lleva años confirmando lo que cualquier maestro intuía: el cerebro aprende más de una predicción fallida que de un acierto, porque la sorpresa obliga a revisar el modelo que teníamos del mundo.\n\n" +
            "No se trata, conviene aclararlo, de celebrar cualquier equivocación. Un cirujano que olvida una gasa o un piloto que confunde una pista no ofrecen ninguna lección que compense el daño causado. La distinción que proponen los especialistas es entre errores evitables en contextos de alto riesgo, que deben prevenirse con protocolos rigurosos, y errores exploratorios, propios de quien ensaya algo nuevo. Son estos últimos los que nuestra cultura castiga con una severidad que acaba resultando contraproducente.\n\n" +
            "La aviación ofrece, paradójicamente, un modelo interesante. Desde hace décadas, los pilotos pueden comunicar sus propios fallos a un sistema confidencial sin temor a sanciones. La información se analiza y se comparte con toda la industria, de modo que el error de uno se convierte en aprendizaje de todos. La medicina, en cambio, ha tardado mucho más en adoptar sistemas similares, en parte por el miedo a las demandas judiciales, que empuja a los profesionales a callar.\n\n" +
            "En el ámbito educativo, algunos centros experimentan con evaluaciones en las que el alumno puede corregir sus exámenes y recuperar parte de la nota si explica por qué se equivocó. Los resultados son alentadores, aunque sus críticos advierten de que el método exige un tiempo del que los profesores rara vez disponen. Otros señalan un riesgo más sutil: que la reflexión sobre el error se convierta en un trámite más, un formulario que se rellena sin convicción.\n\n" +
            "Quizá el cambio más profundo no sea metodológico, sino cultural. Mientras equivocarse se viva como una humillación, nadie se atreverá a proponer ideas arriesgadas, y las organizaciones seguirán premiando la prudencia sobre la creatividad. Aprender a fallar, en suma, no significa bajar el listón, sino entender que el listón solo se supera después de haberlo derribado unas cuantas veces.",
        },
      ],
      items: [
        {
          n: 13,
          question: "Según el texto, el cerebro aprende especialmente de los errores porque…",
          options: [
            "los recuerda durante más tiempo que los aciertos.",
            "le obligan a corregir sus expectativas.",
            "le producen una emoción negativa.",
          ],
          answer: 1,
          explanation: "\"La sorpresa obliga a revisar el modelo que teníamos del mundo\".",
        },
        {
          n: 14,
          question: "El autor considera que los errores de un cirujano o de un piloto…",
          options: [
            "deben prevenirse por encima de todo.",
            "son los que más enseñan a los profesionales.",
            "se castigan con excesiva dureza.",
          ],
          answer: 0,
          explanation: "Son errores evitables de alto riesgo, que \"deben prevenirse con protocolos rigurosos\". Lo que se castiga en exceso son los errores exploratorios.",
        },
        {
          n: 15,
          question: "El sistema de la aviación que menciona el texto se caracteriza por…",
          options: [
            "sancionar a los pilotos que cometen errores.",
            "permitir notificar errores sin consecuencias negativas.",
            "haber sido copiado rápidamente por la medicina.",
          ],
          answer: 1,
          explanation: "Los pilotos comunican sus fallos a un sistema confidencial sin temor a sanciones; la medicina tardó mucho más.",
        },
        {
          n: 16,
          question: "Según el texto, la medicina ha tardado en adoptar estos sistemas por…",
          options: ["su coste económico.", "la resistencia de los pacientes.", "el temor a consecuencias legales."],
          answer: 2,
          explanation: "\"En parte por el miedo a las demandas judiciales\".",
        },
        {
          n: 17,
          question: "Una de las críticas a las evaluaciones que permiten corregir exámenes es que…",
          options: [
            "la reflexión sobre el error podría volverse rutinaria.",
            "los alumnos obtienen notas demasiado altas.",
            "los resultados no han sido positivos.",
          ],
          answer: 0,
          explanation: "El riesgo \"sutil\": que se convierta en \"un trámite más\". Los resultados, en cambio, son alentadores.",
        },
        {
          n: 18,
          question: "En la conclusión, el autor sostiene que…",
          options: [
            "hay que rebajar el nivel de exigencia.",
            "el cambio necesario es sobre todo de mentalidad.",
            "las organizaciones deberían premiar la prudencia.",
          ],
          answer: 1,
          explanation: "\"El cambio más profundo no sea metodológico, sino cultural\"; aprender a fallar \"no significa bajar el listón\".",
        },
      ],
    },
    {
      title: "Tarea 4",
      instructions:
        "A continuación tiene seis textos en los que seis traductores literarios hablan de su oficio. Lea los enunciados (19-26) y seleccione el texto (A-F) que corresponde a cada uno. Puede seleccionar cada texto más de una vez.",
      texts: [
        {
          label: "A",
          title: "Marina",
          body:
            "Llegué a la traducción por casualidad: una editorial buscaba a alguien que leyera novelas en sueco y yo había vivido en Estocolmo. Nunca he estudiado Traducción y durante años me sentí una intrusa. Hoy creo que lo que más me ha servido no fue ningún curso, sino haber leído muchísima literatura en mi propia lengua.",
        },
        {
          label: "B",
          title: "Óscar",
          body:
            "Lo más difícil no son las palabras que no existen en español, sino el humor. Un chiste que funciona en inglés puede no tener ninguna gracia traducido literalmente. En esos casos me permito inventar otro que produzca el mismo efecto, aunque algunos lectores me lo reprochan en las redes sociales.",
        },
        {
          label: "C",
          title: "Julia",
          body:
            "Siempre que puedo, hablo con el autor. Con algunos he mantenido correspondencias de cientos de correos y hemos acabado siendo amigos. Otros prefieren no intervenir, y lo respeto. Con los clásicos, obviamente, esa posibilidad no existe, y entonces el diálogo es con los traductores que me precedieron.",
        },
        {
          label: "D",
          title: "Ramón",
          body:
            "Es un oficio mal pagado, y conviene decirlo. Cobramos por página, las tarifas apenas han subido en veinte años y muchas editoriales no incluyen nuestro nombre en la portada. Yo compagino la traducción con clases en la universidad; de otro modo, no podría vivir.",
        },
        {
          label: "E",
          title: "Lucía",
          body:
            "Me preocupa la traducción automática, no porque vaya a sustituirnos del todo, sino porque las editoriales ya empiezan a encargarnos \"revisiones\" de textos traducidos por máquinas, pagadas a la mitad. Revisar una mala traducción puede llevar más tiempo que hacerla desde cero, pero eso no siempre se entiende.",
        },
        {
          label: "F",
          title: "Tomás",
          body:
            "Traduzco poesía, y cada poema es un problema distinto: ¿respetar la rima o el sentido?, ¿el ritmo o la imagen? No hay respuesta correcta. Por eso me gustan las ediciones bilingües, en las que el lector puede comparar y juzgar por sí mismo mis decisiones.",
        },
      ],
      layout: "select",
      items: [
        { n: 19, question: "Reconoce que se aleja del texto original para conservar su efecto.", options: ["A. Marina", "B. Óscar", "C. Julia", "D. Ramón", "E. Lucía", "F. Tomás"], answer: 1, explanation: "Óscar inventa otro chiste que produzca el mismo efecto." },
        { n: 20, question: "No tiene formación específica en traducción.", options: ["A. Marina", "B. Óscar", "C. Julia", "D. Ramón", "E. Lucía", "F. Tomás"], answer: 0, explanation: "Marina: \"Nunca he estudiado Traducción\"." },
        { n: 21, question: "Necesita otra actividad profesional para mantenerse.", options: ["A. Marina", "B. Óscar", "C. Julia", "D. Ramón", "E. Lucía", "F. Tomás"], answer: 3, explanation: "Ramón compagina la traducción con clases en la universidad." },
        { n: 22, question: "Valora que el público pueda contrastar su trabajo con el original.", options: ["A. Marina", "B. Óscar", "C. Julia", "D. Ramón", "E. Lucía", "F. Tomás"], answer: 5, explanation: "Tomás prefiere las ediciones bilingües para que el lector juzgue sus decisiones." },
        { n: 23, question: "Denuncia que su trabajo no siempre tiene visibilidad.", options: ["A. Marina", "B. Óscar", "C. Julia", "D. Ramón", "E. Lucía", "F. Tomás"], answer: 3, explanation: "Ramón: muchas editoriales no incluyen el nombre del traductor en la portada." },
        { n: 24, question: "Ha recibido críticas de lectores.", options: ["A. Marina", "B. Óscar", "C. Julia", "D. Ramón", "E. Lucía", "F. Tomás"], answer: 1, explanation: "A Óscar algunos lectores se lo reprochan en las redes." },
        { n: 25, question: "Señala que corregir un texto puede costar más que traducirlo.", options: ["A. Marina", "B. Óscar", "C. Julia", "D. Ramón", "E. Lucía", "F. Tomás"], answer: 4, explanation: "Lucía: revisar una mala traducción puede llevar más tiempo que hacerla desde cero." },
        { n: 26, question: "Tiene en cuenta versiones anteriores de la misma obra.", options: ["A. Marina", "B. Óscar", "C. Julia", "D. Ramón", "E. Lucía", "F. Tomás"], answer: 2, explanation: "Julia, con los clásicos, dialoga con los traductores que la precedieron." },
      ],
    },
    {
      title: "Tarea 5",
      instructions: "Lea el texto y rellene los huecos (27-40) con la opción correcta (a, b o c).",
      texts: [
        {
          title: "El silencio, un lujo contemporáneo",
          body:
            "Hace apenas un siglo, el silencio era la norma y el ruido, la excepción. Hoy ocurre (27) contrario: el tráfico, las obras y los dispositivos que nos acompañan a todas partes han convertido la tranquilidad en un bien escaso. No es de extrañar, por tanto, que (28) surgido todo un mercado en torno a ella: auriculares que anulan el sonido, retiros en monasterios, hoteles que prometen \"desconexión total\".\n\n" +
            "La Organización Mundial de la Salud considera el ruido el segundo factor ambiental más perjudicial para la salud, solo (29) de la contaminación del aire. Sus efectos no se limitan al oído: la exposición prolongada (30) relaciona con el insomnio, la hipertensión y las dificultades de aprendizaje. (31) nos acostumbramos a él, el cuerpo sigue reaccionando como ante una amenaza.\n\n" +
            "Algunas ciudades han empezado a tomar medidas. Barcelona, (32) ejemplo, ha reducido el tráfico en varias manzanas del centro, y los vecinos aseguran que el cambio se nota (33) primer día. París ha instalado radares que detectan los vehículos más ruidosos y (34) multan automáticamente.\n\n" +
            "Sin embargo, el silencio absoluto tampoco es deseable. Los estudios muestran que un entorno demasiado silencioso resulta inquietante (35) la mayoría de las personas, que (36) sonidos naturales, como el agua o el viento, al vacío total. Lo que buscamos, en realidad, no es la ausencia de sonido, (37) la ausencia de ruido impuesto.\n\n" +
            "Quizá por eso cada vez más personas (38) de su tiempo libre para caminar por el campo o sentarse en un parque sin auriculares. No se trata de huir del mundo, sino de recuperar algo que dábamos por sentado. Como escribió un poeta, el silencio no es lo que queda cuando todo (39) calla, sino el espacio en el que por fin podemos (40) a nosotros mismos.",
        },
      ],
      layout: "choice",
      items: [
        { n: 27, question: "", options: ["el", "lo", "al"], answer: 1, explanation: "Lo contrario: artículo neutro con adjetivo sustantivado." },
        { n: 28, question: "", options: ["ha", "haya", "hubiera"], answer: 1, explanation: "No es de extrañar que + subjuntivo; perfecto porque el hecho llega hasta el presente." },
        { n: 29, question: "", options: ["delante", "antes", "detrás"], answer: 2, explanation: "Es el segundo factor: va detrás de la contaminación del aire." },
        { n: 30, question: "", options: ["se", "le", "lo"], answer: 0, explanation: "Pasiva refleja: la exposición se relaciona con…" },
        { n: 31, question: "", options: ["Aunque", "Puesto que", "Siempre que"], answer: 0, explanation: "Concesión: aunque nos acostumbremos o nos acostumbramos, el cuerpo sigue reaccionando." },
        { n: 32, question: "", options: ["por", "como", "para"], answer: 0, explanation: "Por ejemplo." },
        { n: 33, question: "", options: ["en el", "desde el", "hasta el"], answer: 1, explanation: "Desde el primer día: el efecto empezó entonces y continúa." },
        { n: 34, question: "", options: ["les", "los", "las"], answer: 1, explanation: "Multar a los vehículos: complemento directo masculino plural." },
        { n: 35, question: "", options: ["por", "con", "para"], answer: 2, explanation: "Resultar inquietante para alguien." },
        { n: 36, question: "", options: ["prefieren", "prefieran", "preferirían"], answer: 0, explanation: "Relativa explicativa con un hecho constatado: indicativo." },
        { n: 37, question: "", options: ["pero", "sino", "sin embargo"], answer: 1, explanation: "No es A, sino B: corrección tras una negación." },
        { n: 38, question: "", options: ["disponen", "dedican", "aprovechan"], answer: 0, explanation: "Disponer de algo: el régimen \"de su tiempo libre\" solo es posible con disponer." },
        { n: 39, question: "", options: ["se", "lo", "le"], answer: 0, explanation: "Callarse: todo se calla." },
        { n: 40, question: "", options: ["escuchar", "escucharnos", "escuchándonos"], answer: 1, explanation: "Escucharnos a nosotros mismos: el pronombre reflexivo concuerda con el sujeto de podemos." },
      ],
    },
  ],
};
