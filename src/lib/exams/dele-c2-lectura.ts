// Synced from cheneygross-afk/lengo:src/lib/exams/dele-c2-lectura.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { ExamPaper } from "./types";

// DELE C2 practice exam -- reading and use of language: the reading tasks
// (1-3) of the real Prueba 1, "Uso de la lengua, comprensión de lectura y
// auditiva", which runs 105 minutes for reading and listening together.
// This course splits it into this paper and the listening paper so it
// fits the four-paper layout of the other practice exams (see dele-c2.ts).
const T2_FRAGMENTS = [
  "A. Se trata de intervenir lo menos posible y de que todo añadido sea reconocible.",
  "B. Los partidarios más estrictos sostienen que cualquier reconstrucción es una forma de falsificación.",
  "C. El objetivo no es devolverle un aspecto nuevo, sino garantizar su conservación y su lectura.",
  "D. Los materiales que hoy se consideran seguros pueden revelarse perjudiciales con el tiempo.",
  "E. Todo lo que se añade a una obra debe poder retirarse sin dañar el original.",
  "F. El buen restaurador es aquel cuya mano no se nota.",
  "G. Por eso, los museos han dejado de exponer obras restauradas.",
  "H. La técnica del repintado sigue siendo la más utilizada en la actualidad.",
];

export const DELE_C2_LECTURA: ExamPaper = {
  id: "lectura",
  kind: "reading",
  title: "Uso de la lengua y comprensión de lectura",
  minutes: 60,
  group: 1,
  tasks: [
    {
      title: "Tarea 1",
      instructions:
        "Lea el texto y elija la opción correcta (a, b o c) para completar cada uno de los huecos (1-6).",
      texts: [
        {
          title: "Elogio de la lentitud",
          body:
            "Durante buena parte del siglo XX, la velocidad se erigió en (1) indiscutible del progreso: más rápido equivalía a mejor. Sin embargo, en las últimas décadas ha cobrado (2) un movimiento que reivindica la lentitud no como pereza, sino como forma de atención.\n\n" +
            "Sus defensores no abogan por (3) el reloj, sino por recuperar el control sobre él. La comida, la educación o el urbanismo han sido los primeros ámbitos en hacerse (4) de esta corriente.\n\n" +
            "Con todo, sus críticos le reprochan cierto elitismo: no todo el mundo puede (5) el lujo de ir despacio. A ello replican los partidarios que la lentitud no es un privilegio que se compra, sino un hábito que se cultiva, y que la cuestión, en (6), es política: quién dispone del tiempo de quién.",
        },
      ],
      layout: "choice",
      items: [
        { n: 1, question: "", options: ["síntoma", "emblema", "pretexto"], answer: 1, explanation: "Erigirse en emblema de algo: convertirse en su símbolo. Un síntoma es un indicio, y un pretexto, una excusa." },
        { n: 2, question: "", options: ["fuerza", "peso", "altura"], answer: 0, explanation: "La colocación es «cobrar fuerza»: ganar intensidad o importancia." },
        { n: 3, question: "", options: ["derogar", "rescindir", "desterrar"], answer: 2, explanation: "Desterrar es expulsar o eliminar por completo. Derogar se dice de una ley y rescindir, de un contrato." },
        { n: 4, question: "", options: ["eco", "cargo", "alarde"], answer: 0, explanation: "Hacerse eco de algo: recogerlo y difundirlo. Hacerse cargo es responsabilizarse, y hacer alarde, presumir." },
        { n: 5, question: "", options: ["concederse", "permitirse", "otorgarse"], answer: 1, explanation: "La locución fija es «permitirse el lujo de»." },
        { n: 6, question: "", options: ["primera instancia", "toda instancia", "última instancia"], answer: 2, explanation: "«En última instancia» = en el fondo, al final. «En primera instancia» es un término procesal y «en toda instancia» no existe como locución." },
      ],
    },
    {
      title: "Tarea 2",
      instructions:
        "Lea el texto, del que se han extraído seis fragmentos. A continuación, lea los ocho fragmentos propuestos (A-H) y decida en qué lugar del texto (7-12) hay que colocar cada uno. Hay dos fragmentos que no tiene que elegir.",
      texts: [
        {
          title: "Restaurar sin suplantar",
          body:
            "Restaurar una obra de arte es, en cierto modo, dialogar con el pasado sin suplantarlo. (7) Durante siglos, sin embargo, la práctica habitual fue la contraria: los restauradores repintaban, completaban y «mejoraban» las obras según el gusto de su época.\n\n" +
            "El cambio de mentalidad llegó en el siglo XX, cuando se impuso el principio de mínima intervención. (8) Así, una laguna en un fresco ya no se rellena imitando el estilo del pintor, sino con un tratamiento que, visto de cerca, delata su origen moderno.\n\n" +
            "Este criterio no está exento de polémica. (9) Para el público, en cambio, una pintura llena de lagunas resulta a menudo incomprensible, y los museos se debaten entre la fidelidad y la legibilidad.\n\n" +
            "A ello se suma un dilema técnico. (10) Lo que en los años sesenta parecía un barniz inocuo amarillea hoy, y retirarlo cuesta más que el daño que pretendía evitar.\n\n" +
            "De ahí que la reversibilidad se haya convertido en otro de los pilares de la disciplina. (11) Ningún restaurador actual da por definitiva su intervención: trabaja pensando en quien vendrá después.\n\n" +
            "Quizá por eso la profesión exige, además de destreza, una humildad poco común. (12) En el mejor de los casos, su trabajo pasa inadvertido.",
        },
      ],
      layout: "select",
      items: [
        { n: 7, question: "", options: T2_FRAGMENTS, answer: 2, explanation: "C define el fin de la restauración, y «sin embargo» introduce a continuación la práctica contraria." },
        { n: 8, question: "", options: T2_FRAGMENTS, answer: 0, explanation: "A explica el principio de mínima intervención, que «Así» ilustra con el ejemplo de la laguna." },
        { n: 9, question: "", options: T2_FRAGMENTS, answer: 1, explanation: "B presenta la postura estricta, que «en cambio» contrapone a la del público." },
        { n: 10, question: "", options: T2_FRAGMENTS, answer: 3, explanation: "D enuncia el dilema técnico que ejemplifica el barniz de los años sesenta." },
        { n: 11, question: "", options: T2_FRAGMENTS, answer: 4, explanation: "E define la reversibilidad, el pilar que acaba de mencionarse." },
        { n: 12, question: "", options: T2_FRAGMENTS, answer: 5, explanation: "F concreta la humildad del restaurador y anticipa que su trabajo «pasa inadvertido». G y H contradicen el texto." },
      ],
    },
    {
      title: "Tarea 3",
      instructions: "Lea el texto y conteste a las preguntas (13-20). Seleccione la opción correcta (a, b o c).",
      texts: [
        {
          title: "Traducir lo intraducible",
          body:
            "Se repite con frecuencia que hay palabras intraducibles, y se citan como prueba la saudade portuguesa, el Schadenfreude alemán o nuestra sobremesa. La afirmación, tan seductora como imprecisa, confunde dos cosas distintas: la ausencia de un equivalente léxico y la imposibilidad de transmitir un sentido. Que el inglés carezca de una palabra para la sobremesa no impide explicar a un lector británico en qué consiste; lo que se pierde no es el significado, sino la economía con que una lengua lo empaqueta.\n\n" +
            "El traductor literario conoce bien esa pérdida, y también sus compensaciones. Cuando un juego de palabras no sobrevive al cambio de idioma, puede reinventarse unas líneas más abajo; cuando un registro coloquial no tiene correlato exacto, puede sugerirse mediante el ritmo o la sintaxis. Traducir, en este sentido, no es calcar, sino recrear dentro de ciertos límites, y la fidelidad mal entendida —la que se aferra a cada palabra— suele producir textos más infieles que la libertad bien administrada.\n\n" +
            "Ahora bien, la libertad tiene su contrapartida. El traductor que se excede corre el riesgo de apropiarse del texto, de convertir la voz del autor en la suya propia. Los casos célebres no escasean: versiones decimonónicas que «corregían» a sus autores, adaptaciones que suavizaban todo lo que pudiera ofender al público de la época. Hoy nos parecen abusos, pero conviene preguntarse qué decisiones nuestras parecerán igual de arbitrarias dentro de un siglo.\n\n" +
            "Quizá la conclusión más honesta sea que no existen textos intraducibles, sino traducciones provisionales. Cada generación vuelve a traducir a los clásicos no porque las versiones anteriores fueran erróneas, sino porque la lengua de llegada ha cambiado, y con ella lo que sus lectores son capaces de oír.",
        },
      ],
      layout: "choice",
      items: [
        {
          n: 13,
          question: "Según el autor, la idea de las palabras intraducibles…",
          options: ["confunde la falta de un equivalente léxico con la imposibilidad de transmitir un sentido.", "demuestra que algunas culturas son incomprensibles.", "se apoya en ejemplos mal elegidos."],
          answer: 0,
          explanation: "«Confunde dos cosas distintas: la ausencia de un equivalente léxico y la imposibilidad de transmitir un sentido.»",
        },
        {
          n: 14,
          question: "Lo que se pierde al traducir «sobremesa» es…",
          options: ["el significado de la palabra.", "la concisión con que el español lo expresa.", "la posibilidad de explicarla."],
          answer: 1,
          explanation: "«Lo que se pierde no es el significado, sino la economía con que una lengua lo empaqueta.»",
        },
        {
          n: 15,
          question: "Ante un juego de palabras que no sobrevive a la traducción, el traductor puede…",
          options: ["suprimirlo y añadir una nota.", "crear otro en un lugar cercano del texto.", "traducirlo palabra por palabra."],
          answer: 1,
          explanation: "«Puede reinventarse unas líneas más abajo.»",
        },
        {
          n: 16,
          question: "Para el autor, la «fidelidad mal entendida»…",
          options: ["es la única actitud aceptable.", "solo es un problema en la poesía.", "da textos menos fieles que una libertad bien administrada."],
          answer: 2,
          explanation: "«Suele producir textos más infieles que la libertad bien administrada.»",
        },
        {
          n: 17,
          question: "¿Qué riesgo tiene la libertad del traductor?",
          options: ["Apropiarse de la voz del autor.", "Aburrir al lector.", "Alargar innecesariamente el texto."],
          answer: 0,
          explanation: "«Corre el riesgo de apropiarse del texto, de convertir la voz del autor en la suya propia.»",
        },
        {
          n: 18,
          question: "Las versiones del siglo XIX que se mencionan…",
          options: ["eran más fieles que las actuales.", "se escribían para un público infantil.", "se tomaban libertades que hoy consideramos abusos."],
          answer: 2,
          explanation: "«Corregían» a sus autores y suavizaban lo que pudiera ofender: «hoy nos parecen abusos».",
        },
        {
          n: 19,
          question: "¿Con qué intención se pregunta el autor «qué decisiones nuestras parecerán igual de arbitrarias»?",
          options: ["Defender las traducciones del siglo XIX.", "Invitar a relativizar nuestros propios criterios.", "Criticar a los traductores actuales."],
          answer: 1,
          explanation: "La pregunta recuerda que nuestros criterios también son históricos y podrán juzgarse igual.",
        },
        {
          n: 20,
          question: "Según el texto, los clásicos se vuelven a traducir porque…",
          options: ["las versiones anteriores tenían errores.", "cambia la lengua de los lectores.", "los herederos de los autores lo exigen."],
          answer: 1,
          explanation: "«No porque las versiones anteriores fueran erróneas, sino porque la lengua de llegada ha cambiado.»",
        },
      ],
    },
  ],
};
