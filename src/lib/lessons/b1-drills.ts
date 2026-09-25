import { anchored, authoring } from "./authoring";
import type { AnchoredLesson } from "./weave";

// B1 drill lessons -- a second, drill-heavy layer woven into B1_LESSONS
// right after the lesson each one practises (see weave.ts). No new grammar:
// they recycle what has already been taught, with most of the practice going
// to the hardest B1 topics (present subjunctive formation and triggers,
// commands with pronouns, present perfect vs. preterite, relative pronouns,
// double object pronouns). About a third of each topic's drills sit further
// down the track (between vocabulary units and stories) for spaced review.
// Formats: práctica de patrones, pares mínimos, circuitos, rondas rápidas,
// frase a frase, corrige el párrafo, cuentos con huecos, cadenas de
// transformaciones, elige y explica, habla de ti and práctica mezclada.
const { mc, ms, fb, toEs, toEn, wo, mt, sec } = authoring("es");
const L = (
  after: string,
  slug: string,
  title: string,
  summary: string,
  duration: string,
  sections: Parameters<typeof anchored>[6],
  exercises: Parameters<typeof anchored>[7]
) => anchored("B1", after, slug, title, summary, duration, sections, exercises);

export const B1_DRILLS: AnchoredLesson[] = [
  L(
    "present-subjunctive-formation-1",
    "b1d-patron-subjuntivo-ar",
    "Práctica de patrones: el subjuntivo de los verbos en -ar",
    "Un mismo marco, todas las personas: yo → -o → -e. Repite el patrón hasta automatizarlo.",
    "6 min",
    [
      sec(
        "La vocal cambia",
        "Los verbos en -ar toman las terminaciones «opuestas» con e: hable, hables, hable, hablemos, habléis, hablen. Se parte de la forma yo del presente: trabajo → trabaje.",
        [
          ["Quiero que trabajes menos.", "I want you to work less."],
          ["Mis padres quieren que estudiemos más.", "My parents want us to study more."],
        ],
        [
          fb("Completa.", "Quiero que tú ___ conmigo. (bailar)", "bailes", "-ar → -es en tú."),
        ]
      ),
    ],
    [
      fb("Mismo marco: cantar.", "Mi madre quiere que yo ___ en la boda.", "cante", "Yo: -e."),
      fb("Mismo marco: cantar.", "Mi madre quiere que tú ___ en la boda.", "cantes", "Tú: -es."),
      fb("Mismo marco: cantar.", "Mi madre quiere que mi hermano ___ en la boda.", "cante", "Él: -e."),
      fb("Mismo marco: cantar.", "Mi madre quiere que nosotros ___ en la boda.", "cantemos", "Nosotros: -emos."),
      fb("Mismo marco: cantar.", "Mi madre quiere que vosotros ___ en la boda.", "cantéis", "Vosotros: -éis."),
      fb("Mismo marco: cantar.", "Mi madre quiere que mis primos ___ en la boda.", "canten", "Ellos: -en."),
      mt(
        "Relaciona el infinitivo con su forma de subjuntivo (él).",
        [
          ["llamar", "llame"],
          ["esperar", "espere"],
          ["ayudar", "ayude"],
          ["mirar", "mire"],
        ],
        "-ar → -e."
      ),
      toEs("I want you to call me tomorrow.", "Quiero que me llames mañana.", "Querer que + subjuntivo.", []),
    ]
  ),
  L(
    "present-subjunctive-formation-1",
    "b1d-patron-subjuntivo-er-ir",
    "Práctica de patrones: el subjuntivo de los verbos en -er e -ir",
    "Coma, viva, abra, escriba: el mismo marco con -a en todas las personas.",
    "6 min",
    [
      sec(
        "-er/-ir → a",
        "Comer → coma, comas, coma, comamos, comáis, coman. Vivir → viva, vivas, viva, vivamos, viváis, vivan. Si la forma yo es irregular, el subjuntivo la conserva: tengo → tenga, hago → haga, salgo → salga, conozco → conozca.",
        [
          ["Espero que comas bien.", "I hope you eat well."],
          ["Quiero que salgamos temprano.", "I want us to leave early."],
        ],
        [
          fb("Completa.", "Quiero que ___ la ventana. (abrir, tú)", "abras", "-ir → -as."),
        ]
      ),
    ],
    [
      fb("Mismo marco: leer.", "El profesor quiere que yo ___ este libro.", "lea", "-er → -a."),
      fb("Mismo marco: leer.", "El profesor quiere que nosotros ___ este libro.", "leamos", "-er → -amos."),
      fb("Mismo marco: escribir.", "El profesor quiere que ustedes ___ un resumen.", "escriban", "-ir → -an."),
      fb("Yo irregular.", "Quiero que ___ cuidado. (tener, tú)", "tengas", "Tengo → tenga."),
      fb("Yo irregular.", "Quiero que ___ la cena hoy. (hacer, tú)", "hagas", "Hago → haga."),
      fb("Yo irregular.", "Quiero que ___ a mi familia. (conocer, tú)", "conozcas", "Conozco → conozca."),
      ms(
        "¿Qué formas son de subjuntivo?",
        ["beba", "salga", "come", "vivan"],
        [0, 1, 3],
        "Come es indicativo."
      ),
      toEs("I want you to come to my house.", "Quiero que vengas a mi casa.", "Vengo → venga.", []),
    ]
  ),
  L(
    "present-subjunctive-formation-1",
    "b1d-pares-indicativo-subjuntivo",
    "Pares mínimos: habla / hable, come / coma",
    "La diferencia entre indicativo y subjuntivo a veces es una sola vocal. Entrena el ojo.",
    "6 min",
    [
      sec(
        "Una vocal lo cambia todo",
        "Habla (indicativo) / hable (subjuntivo). Come / coma. Vive / viva. En los verbos en -ar, la e marca el subjuntivo; en -er/-ir, la a. Ojo: la forma yo del subjuntivo coincide con la de él: que yo hable / que él hable.",
        [
          ["Mi hermano habla mucho. / Quiero que mi hermano hable menos.", "My brother talks a lot. / I want my brother to talk less."],
        ],
        [
          mc(
            "¿Cuál es subjuntivo?",
            ["trabaje", "trabaja", "trabajo", "trabajas"],
            0,
            "-ar → e."
          ),
        ]
      ),
    ],
    [
      mc(
        "¿Cuál es subjuntivo?",
        ["decida", "decide", "decido", "decides"],
        0,
        "-ir → a."
      ),
      mc(
        "¿Cuál es indicativo?",
        ["aprende", "aprenda", "aprendan", "aprendamos"],
        0,
        "Aprende = indicativo."
      ),
      fb("Cambia al subjuntivo.", "Luis trabaja mucho. → Quiero que Luis ___ menos.", "trabaje", "-ar → -e."),
      fb("Cambia al subjuntivo.", "Mis hijos comen dulces. → No quiero que ___ tantos dulces.", "coman", "-er → -an."),
      fb("Cambia al subjuntivo.", "Tú vives lejos. → Prefiero que ___ cerca.", "vivas", "-ir → -as."),
      fb("Cambia al subjuntivo.", "Nosotros llegamos tarde. → No quiero que ___ tarde.", "lleguemos", "-gar → -gue."),
      ms(
        "¿Qué formas son de subjuntivo?",
        ["mande", "manda", "suban", "suben"],
        [0, 2],
        "-ar → e; -ir → a."
      ),
      toEs("I prefer that you speak slowly.", "Prefiero que hables despacio.", "Preferir que + subjuntivo.", ["Prefiero que hables despacio."]),
    ]
  ),
  L(
    "present-subjunctive-formation-2",
    "b1d-circuito-cambios-raiz",
    "Circuito: los cambios de raíz en el subjuntivo",
    "Quiera, pueda, pida, duerma: las botas (e→ie, o→ue, e→i) y el caso especial de nosotros.",
    "7 min",
    [
      sec(
        "La bota y la excepción -ir",
        "Los verbos -ar/-er cambian la raíz en todas las personas menos nosotros y vosotros: pensar → piense, pensemos. Los verbos -ir cambian también en nosotros/vosotros, pero con otra vocal: dormir → duerma, durmamos; sentir → sienta, sintamos; pedir → pida, pidamos.",
        [
          ["Quiero que pienses en mí.", "I want you to think of me."],
          ["Es mejor que durmamos un poco.", "It's better that we sleep a little."],
        ],
        [
          fb("Completa.", "Espero que ___ venir. (poder, tú)", "puedas", "o → ue."),
        ]
      ),
    ],
    [
      fb("Completa.", "No quiero que ___ nada. (perder, vosotros)", "perdáis", "Sin cambio en vosotros (-er)."),
      fb("Completa.", "Espero que ___ bien esta noche. (dormir, tú)", "duermas", "o → ue."),
      fb("Completa.", "Es importante que ___ ocho horas. (dormir, nosotros)", "durmamos", "-ir: o → u en nosotros."),
      fb("Completa.", "Quiero que ___ perdón. (pedir, él)", "pida", "e → i."),
      fb("Completa.", "Ojalá que ___ mejor pronto. (sentirse, tú)", "te sientas", "e → ie."),
      fb("Completa.", "Prefiero que ___ la película vosotros. (elegir)", "elijáis", "e → i en -ir + g → j."),
      ms(
        "¿Qué formas son correctas?",
        ["volvamos", "vuelvamos", "pidamos", "pedamos"],
        [0, 2],
        "Volver (-er) no cambia en nosotros; pedir (-ir) sí: pidamos."
      ),
      toEs("I hope you can come.", "Espero que puedas venir.", "Poder → puedas.", ["Ojalá puedas venir."]),
    ]
  ),
  L(
    "present-subjunctive-formation-2",
    "b1d-circuito-irregulares-seis",
    "Circuito: los seis irregulares (sea, esté, vaya, sepa, dé, haya)",
    "Seis verbos que no siguen ninguna regla: rótalos en todas las personas.",
    "6 min",
    [
      sec(
        "Memoriza el grupo",
        "Ser → sea. Estar → esté. Ir → vaya. Saber → sepa. Dar → dé. Haber → haya. Truco: DISHES (dar, ir, saber, haber, estar, ser). Dé y esté llevan tilde.",
        [
          ["Espero que estés bien.", "I hope you're well."],
          ["Quiero que sepas la verdad.", "I want you to know the truth."],
        ],
        [
          fb("Completa.", "Espero que no ___ nada grave. (ser)", "sea", "Ser → sea."),
        ]
      ),
    ],
    [
      fb("Completa.", "Quiero que ___ al médico. (ir, tú)", "vayas", "Ir → vaya."),
      fb("Completa.", "Es importante que todos ___ la respuesta. (saber)", "sepan", "Saber → sepa."),
      fb("Completa.", "Ojalá que ___ sol mañana. (haber)", "haya", "Haber → haya."),
      fb("Completa.", "Prefiero que me ___ el dinero hoy. (dar, tú)", "des", "Dar → dé, des…"),
      fb("Completa.", "Espero que ___ tranquilos. (estar, vosotros)", "estéis", "Estar → estéis."),
      mt(
        "Relaciona el infinitivo con su subjuntivo (yo).",
        [
          ["ir", "vaya"],
          ["saber", "sepa"],
          ["dar", "dé"],
          ["estar", "esté"],
        ],
        "Irregulares DISHES."
      ),
      mc(
        "«Quiero que ___ puntuales.» (ser, ustedes)",
        ["sean", "son", "estén", "sepan"],
        0,
        "Ser → sean."
      ),
      toEs("I hope there are tickets.", "Espero que haya entradas.", "Haber → haya.", ["Ojalá que haya entradas.", "Ojalá haya entradas."]),
    ]
  ),
  L(
    "present-subjunctive-formation-2",
    "b1d-ronda-ortografia-subjuntivo",
    "Ronda rápida: cambios ortográficos (busque, llegue, empiece, escoja)",
    "-car → -que, -gar → -gue, -zar → -ce, -ger → -ja: el subjuntivo mantiene el sonido cambiando la letra.",
    "6 min",
    [
      sec(
        "Mantener el sonido",
        "Buscar → busque, llegar → llegue, empezar → empiece, escoger → escoja, seguir → siga, conducir → conduzca. Afecta a todas las personas, no solo a yo (a diferencia del pretérito).",
        [
          ["Espero que llegues a tiempo.", "I hope you arrive on time."],
          ["Quiero que empecemos ya.", "I want us to start now."],
        ],
        [
          fb("Rápido.", "Quiero que ___ el libro. (buscar, tú)", "busques", "-car → -que."),
        ]
      ),
    ],
    [
      fb("Rápido.", "Espero que ___ pronto. (llegar, ellos)", "lleguen", "-gar → -gue."),
      fb("Rápido.", "Es mejor que ___ ahora. (empezar, nosotros)", "empecemos", "-zar → -ce."),
      fb("Rápido.", "Quiero que ___ el color tú. (escoger)", "escojas", "-ger → -ja."),
      fb("Rápido.", "Espero que ___ la cuenta él. (pagar)", "pague", "-gar → -gue."),
      fb("Rápido.", "Prefiero que ___ tú el coche. (conducir)", "conduzcas", "-cir → -zca."),
      fb("Rápido.", "Ojalá que ___ todo bien. (seguir)", "siga", "-guir → -ga."),
      mc(
        "¿Cuál es correcta?",
        ["toquemos", "tocemos", "tokemos", "toquamos"],
        0,
        "-car → -que."
      ),
      toEs("I hope you find your keys.", "Espero que encuentres tus llaves.", "Encontrar → encuentre.", ["Ojalá encuentres tus llaves."]),
    ]
  ),
  L(
    "present-subjunctive-formation-2",
    "b1d-cadena-persona-subjuntivo",
    "Cadena de transformaciones: cambia la persona",
    "Espero que tú vengas → que ella venga → que vosotros vengáis: una frase, seis sujetos.",
    "6 min",
    [
      sec(
        "Solo cambia la terminación",
        "El verbo principal (espero, quiero, prefiero) no cambia; solo el sujeto y la terminación del subjuntivo: Espero que tú tengas suerte → Espero que ellos tengan suerte.",
        [
          ["Quiero que tú seas feliz. → Quiero que ellos sean felices.", "I want you to be happy. → I want them to be happy."],
        ],
        [
          fb("Tú → ella.", "Espero que tú vengas. → Espero que ella ___.", "venga", "Él/ella: -a."),
        ]
      ),
    ],
    [
      fb("Tú → vosotros.", "Espero que tú vengas. → Espero que vosotros ___.", "vengáis", "Vosotros: -áis."),
      fb("Tú → nosotros.", "Quiero que tú lo hagas. → Quiero que nosotros lo ___.", "hagamos", "Nosotros: -amos."),
      fb("Tú → ellos.", "Prefiero que tú salgas. → Prefiero que ellos ___.", "salgan", "Ellos: -an."),
      fb("Ella → nosotros.", "Mi jefe quiere que ella viaje. → Mi jefe quiere que nosotros ___.", "viajemos", "Nosotros: -emos."),
      fb("Yo → ustedes.", "Espera que yo me siente. → Espera que ustedes se ___.", "sienten", "Ustedes: -en, con e → ie."),
      fb("Nosotros → tú.", "Quieren que durmamos aquí. → Quieren que tú ___ aquí.", "duermas", "o → ue en tú."),
      mc(
        "«Espero que ella tenga suerte.» → ustedes:",
        ["Espero que ustedes tengan suerte.", "Espero que ustedes tienen suerte.", "Espero que ustedes tengáis suerte.", "Espero que ustedes tener suerte."],
        0,
        "Ustedes → -an."
      ),
      toEs("My parents want us to be home early.", "Mis padres quieren que estemos en casa temprano.", "Estar → estemos.", ["Mis padres quieren que estemos en casa pronto."]),
    ]
  ),
  L(
    "subjunctive-formation-drill-3",
    "b1d-ronda-formas-mezcla",
    "Ronda rápida: 12 subjuntivos sin pistas",
    "Regulares, irregulares, cambios de raíz y ortográficos mezclados. Sin mirar la teoría.",
    "6 min",
    [
      sec(
        "Checklist",
        "1) ¿Es uno de los seis (sea, esté, vaya, sepa, dé, haya)? 2) Si no, parte del yo del presente (tengo → tenga). 3) Cambia la vocal (-ar → e; -er/-ir → a). 4) Revisa raíz y ortografía.",
        [
          ["Que tengas, que vayas, que durmamos, que pague.", "That you have, that you go, that we sleep, that he pay."],
        ],
        [
          fb("Rápido.", "que tú ___ (ir)", "vayas", "Irregular."),
        ]
      ),
    ],
    [
      fb("Rápido.", "que ella ___ (poner)", "ponga", "Pongo → ponga."),
      fb("Rápido.", "que nosotros ___ (pedir)", "pidamos", "-ir: e → i en nosotros."),
      fb("Rápido.", "que ustedes ___ (estar)", "estén", "Irregular."),
      fb("Rápido.", "que yo ___ (traer)", "traiga", "Traigo → traiga."),
      fb("Rápido.", "que vosotros ___ (volver)", "volváis", "Sin cambio en vosotros."),
      fb("Rápido.", "que tú ___ (decir)", "digas", "Digo → diga."),
      fb("Rápido.", "que ellos ___ (almorzar)", "almuercen", "o → ue + z → c."),
      mc(
        "«que nosotros ___» (sentir)",
        ["sintamos", "sentamos", "sientamos", "sentimos"],
        0,
        "-ir: e → i en nosotros."
      ),
    ]
  ),
  L(
    "subjunctive-formation-drill-3",
    "b1d-corrige-formas-subjuntivo",
    "Corrige el párrafo: formas de subjuntivo inventadas",
    "Un mensaje con subjuntivos mal formados (tena, hazca, vaye, duermamos). Arréglalos.",
    "6 min",
    [
      sec(
        "El mensaje",
        "«Espero que ✗ tenas (→ tengas) un buen viaje y que ✗ hazcas (→ hagas) muchas fotos. Quiero que ✗ vayes (→ vayas) al museo y que ✗ duermamos (→ durmamos) en el mismo hotel.»",
        [
          ["Espero que tengas un buen viaje.", "I hope you have a good trip."],
        ],
        [
          fb("Corrige.", "Espero que ___ un buen viaje. (el mensaje dice: tenas)", "tengas", "Tengo → tenga."),
        ]
      ),
    ],
    [
      fb("Corrige.", "Quiero que ___ muchas fotos. (el mensaje dice: hazcas)", "hagas", "Hago → haga."),
      fb("Corrige.", "Quiero que ___ al museo. (el mensaje dice: vayes)", "vayas", "Ir → vaya."),
      fb("Corrige.", "Es mejor que ___ en el mismo hotel. (el mensaje dice: duermamos)", "durmamos", "-ir: o → u en nosotros."),
      fb("Corrige.", "Espero que ___ la postal pronto. (el mensaje dice: recibes)", "recibas", "Esperar que + subjuntivo: recibas."),
      fb("Corrige.", "Ojalá que no ___ problemas. (el mensaje dice: hayan — se refiere a «problemas»)", "haya", "Haber impersonal: siempre haya."),
      mc(
        "¿Cuál está bien escrita?",
        ["Quiero que me lo digas.", "Quiero que me lo dices.", "Quiero que me lo decías.", "Quiero que me lo digues."],
        0,
        "Digo → diga."
      ),
      toEs("I hope you have a great time.", "Espero que lo pases muy bien.", "Pasar → pases.", ["Espero que te diviertas mucho.", "Ojalá lo pases muy bien."]),
    ]
  ),
  L(
    "subjunctive-formation-drill-3",
    "b1d-habla-de-ti-deseos",
    "Habla de ti: lo que quieres de los demás",
    "Traduce deseos personales sobre tu familia, tu trabajo y tus amigos, siempre con querer que.",
    "6 min",
    [
      sec(
        "Querer que + otra persona",
        "Si el deseo es para otra persona, necesitas que + subjuntivo: Quiero que mi hermano venga. Si es para ti mismo, infinitivo: Quiero venir.",
        [
          ["Quiero que mis padres viajen más.", "I want my parents to travel more."],
          ["Quiero viajar más.", "I want to travel more."],
        ],
        [
          mc(
            "«Quiero ___ más.» (yo)",
            ["descansar", "que descanse", "que descanso", "descanse"],
            0,
            "Mismo sujeto → infinitivo."
          ),
        ]
      ),
    ],
    [
      toEs("I want my sister to find a good job.", "Quiero que mi hermana encuentre un buen trabajo.", "Encontrar → encuentre.", ["Quiero que mi hermana consiga un buen trabajo."]),
      toEs("I want my friends to visit me.", "Quiero que mis amigos me visiten.", "Visitar → visiten.", ["Quiero que mis amigos vengan a visitarme."]),
      toEs("I want to learn to cook.", "Quiero aprender a cocinar.", "Mismo sujeto → infinitivo.", []),
      toEs("My boss wants me to work on Saturday.", "Mi jefe quiere que trabaje el sábado.", "Querer que + yo.", ["Mi jefe quiere que yo trabaje el sábado."]),
      fb("Completa.", "Quiero que mis hijos ___ felices. (ser)", "sean", "Ser → sean."),
      fb("Completa.", "Prefiero que nadie me ___ hoy. (llamar)", "llame", "Llamar → llame."),
      wo("Mi pareja quiere que pasemos más tiempo juntos.", "Querer que + nosotros.", "My partner wants us to spend more time together."),
      toEn("No quiero que te preocupes.", "I don't want you to worry.", "Preocuparse → te preocupes.", []),
    ]
  ),
  L(
    "subjunctive-formation-drill-3",
    "b1d-pares-infinitivo-que",
    "Pares mínimos: quiero ir / quiero que vayas",
    "El mismo verbo de deseo con infinitivo o con que + subjuntivo: decide según los sujetos.",
    "6 min",
    [
      sec(
        "¿Un sujeto o dos?",
        "Un sujeto → infinitivo: Espero aprobar (yo espero, yo apruebo). Dos sujetos → que + subjuntivo: Espero que apruebes (yo espero, tú apruebas).",
        [
          ["Prefiero quedarme. / Prefiero que te quedes.", "I prefer to stay. / I prefer that you stay."],
        ],
        [
          mc(
            "«Espero ___ el examen.» (yo)",
            ["aprobar", "que apruebe", "que apruebo", "aprobé"],
            0,
            "Mismo sujeto."
          ),
        ]
      ),
    ],
    [
      mc(
        "«Espero ___ el examen.» (tú)",
        ["que apruebes", "aprobar", "que apruebas", "aprobarás"],
        0,
        "Dos sujetos."
      ),
      fb("Infinitivo o subjuntivo.", "Queremos ___ pronto. (salir, nosotros)", "salir", "Mismo sujeto."),
      fb("Infinitivo o subjuntivo.", "Queremos que ___ pronto. (salir, vosotros)", "salgáis", "Dos sujetos."),
      fb("Infinitivo o subjuntivo.", "Prefiero ___ en casa. (cenar, yo)", "cenar", "Mismo sujeto."),
      fb("Infinitivo o subjuntivo.", "Prefiero que ___ en casa. (cenar, nosotros)", "cenemos", "Dos sujetos (yo / nosotros)."),
      fb("Infinitivo o subjuntivo.", "Mi hijo desea ___ piloto. (ser)", "ser", "Mismo sujeto."),
      mt(
        "Relaciona el principio con el final.",
        [
          ["Necesito…", "…descansar."],
          ["Necesito que…", "…me ayudes."],
          ["Espero que…", "…lleguéis bien."],
        ],
        "Infinitivo vs. que + subjuntivo."
      ),
      toEs("I want to go, but I want you to come too.", "Quiero ir, pero quiero que vengas también.", "Infinitivo + subjuntivo.", ["Quiero ir, pero quiero que tú también vengas."]),
    ]
  ),
  L(
    "subjunctive-formation-drill-3",
    "b1d-dictado-deseos-familia",
    "Dictado: deseos en familia",
    "Reordena frases largas con verbo de deseo + que + subjuntivo y pronombres.",
    "6 min",
    [
      sec(
        "Orden de la frase",
        "Sujeto + verbo de deseo + que + (sujeto 2) + (pronombres) + subjuntivo + complementos: Mi abuela quiere que le escribamos más a menudo.",
        [
          ["Mi abuela quiere que le escribamos más a menudo.", "My grandmother wants us to write to her more often."],
        ],
        [
          mc(
            "¿Cuál es el orden natural?",
            ["Mis padres quieren que yo estudie medicina.", "Mis padres quieren yo que estudie medicina.", "Quieren mis padres estudie que yo medicina.", "Mis padres que quieren yo estudie medicina."],
            0,
            "… que + sujeto + subjuntivo."
          ),
        ]
      ),
    ],
    [
      wo("Mi abuela quiere que le escribamos más a menudo.", "Le antes del verbo.", "My grandmother wants us to write to her more often."),
      wo("Mis padres esperan que encuentre un piso cerca de ellos.", "Esperar que + subjuntivo.", "My parents hope I find a flat near them."),
      wo("Mi hermano prefiere que no le digamos nada a mamá.", "Pronombre + subjuntivo.", "My brother prefers that we don't tell Mom anything."),
      wo("Espero que todos estéis bien y que nos veamos pronto.", "Dos subjuntivos.", "I hope you're all well and that we see each other soon."),
      fb("Completa.", "Mi tía desea que ___ a su boda. (ir, nosotros)", "vayamos", "Ir → vayamos."),
      fb("Completa.", "Mi madre necesita que la ___ con la mudanza. (ayudar, yo)", "ayude", "Ayudar → ayude."),
      toEn("Esperamos que os guste la sorpresa.", "We hope you like the surprise.", "Gustar → guste.", ["We hope you'll like the surprise."]),
    ]
  ),
  L(
    "subjunctive-formation-drill-3",
    "b1d-construye-reglas-casa",
    "Frase a frase: las normas de la residencia",
    "Construye normas completas con es importante que / quiero que / preferimos que + subjuntivo.",
    "6 min",
    [
      sec(
        "Normas con subjuntivo",
        "Una residencia de estudiantes escribe sus normas: «Queremos que todos respeten el silencio después de las once. Es importante que limpiéis la cocina. Preferimos que no traigáis animales.» Cada norma: expresión + que + subjuntivo.",
        [
          ["Queremos que respetéis el silencio.", "We want you to respect the quiet hours."],
        ],
        [
          fb("Completa.", "Queremos que todos ___ el silencio. (respetar)", "respeten", "Respetar → respeten."),
        ]
      ),
    ],
    [
      fb("Norma.", "Es importante que ___ la cocina después de usarla. (limpiar, vosotros)", "limpiéis", "Limpiar → limpiéis."),
      fb("Norma.", "Preferimos que no ___ animales. (traer, vosotros)", "traigáis", "Traigo → traiga."),
      fb("Norma.", "Es necesario que ___ la puerta con llave. (cerrar, ustedes)", "cierren", "e → ie."),
      fb("Norma.", "Queremos que nadie ___ en las habitaciones. (fumar)", "fume", "Nadie + singular."),
      fb("Norma.", "Es mejor que ___ la ropa los fines de semana. (lavar, vosotros)", "lavéis", "Lavar → lavéis."),
      mc(
        "«Es importante que ___ puntuales en la cena.» (ser, vosotros)",
        ["seáis", "sois", "sed", "estéis"],
        0,
        "Ser → seáis."
      ),
      toEs("We want everyone to recycle.", "Queremos que todos reciclen.", "Querer que + subjuntivo.", ["Queremos que todo el mundo recicle."]),
    ]
  ),
  L(
    "subjunctive-formation-drill-3",
    "b1d-practica-mezclada-formacion",
    "Práctica mezclada: formación del subjuntivo en contexto",
    "Frases reales con todos los tipos de formas: regulares, raíz, ortografía e irregulares.",
    "7 min",
    [
      sec(
        "Formas en contexto",
        "En la vida real no aparecen las formas en orden: hay que producirlas al vuelo. Identifica el infinitivo, piensa en la persona y aplica la regla.",
        [
          ["Espero que sepas lo que haces.", "I hope you know what you're doing."],
        ],
        [
          fb("Completa.", "Quiero que ___ más a tus abuelos. (visitar, tú)", "visites", "Regular."),
        ]
      ),
    ],
    [
      fb("Completa.", "Espero que el tren no ___ retraso. (tener)", "tenga", "Tengo → tenga."),
      fb("Completa.", "Prefiero que ___ nosotros primero. (empezar)", "empecemos", "-zar → -ce."),
      fb("Completa.", "Quiero que me ___ la verdad. (decir, tú)", "digas", "Digo → diga."),
      fb("Completa.", "Esperamos que ___ un buen fin de semana. (pasar, vosotros)", "paséis", "Regular."),
      fb("Completa.", "Ojalá que no ___ frío en la montaña. (hacer)", "haga", "Hago → haga."),
      fb("Completa.", "Espero que ___ bien la noticia. (tomarse, ellos)", "se tomen", "Reflexivo + subjuntivo."),
      mc(
        "«Quiero que ___ a la fiesta.» (venir, vosotros)",
        ["vengáis", "venís", "venid", "vinieron"],
        0,
        "Vengo → vengáis."
      ),
      toEs("I hope it doesn't snow tomorrow.", "Espero que no nieve mañana.", "Nevar → nieve.", ["Ojalá no nieve mañana."]),
    ]
  ),
  L(
    "subjunctive-formation-drill-3",
    "b1d-elige-explica-formacion",
    "Elige y explica: ¿por qué esta forma?",
    "Elige el subjuntivo correcto y la regla que lo produce: raíz, ortografía, irregular o yo irregular.",
    "6 min",
    [
      sec(
        "Cuatro reglas",
        "1) Yo irregular: tengo → tenga. 2) Raíz: pienso → piense. 3) Ortografía: busco → busque. 4) Irregular total: ir → vaya. Saber la regla ayuda a no inventar formas.",
        [
          ["Conozco → conozca (yo irregular).", "Yo form keeps its -zc-."],
        ],
        [
          mc(
            "«Quiero que me ___» (conocer). ¿Forma y regla?",
            ["conozcas — yo irregular", "conoces — regular", "conozas — ortografía", "conocías — imperfecto"],
            0,
            "Conozco → conozca."
          ),
        ]
      ),
    ],
    [
      mc(
        "«Espero que ___ temprano.» (salir, tú)",
        ["salgas — yo irregular", "sales — indicativo", "salas — regular", "saldrás — futuro"],
        0,
        "Salgo → salga."
      ),
      mc(
        "«Es mejor que ___ la cuenta tú.» (pagar)",
        ["pagues — ortografía", "pagas — indicativo", "pages — regular", "pagaras — imperfecto"],
        0,
        "-gar → -gue."
      ),
      mc(
        "«Quiero que ___ contigo.» (ir, ellos)",
        ["vayan — irregular total", "van — indicativo", "igan — yo irregular", "iran — futuro"],
        0,
        "Ir → vaya."
      ),
      mc(
        "«Prefiero que ___ tú.» (elegir)",
        ["elijas — raíz + ortografía", "eliges — indicativo", "elegas — regular", "elijes — mezcla"],
        0,
        "e → i + g → j."
      ),
      fb("Completa.", "Espero que ___ el problema. (entender, vosotros)", "entendáis", "Sin cambio de raíz en vosotros."),
      fb("Completa.", "Quiero que ___ la mesa. (poner, tú)", "pongas", "Pongo → ponga."),
      toEs("I want you to know that I love you.", "Quiero que sepas que te quiero.", "Saber → sepas.", []),
    ]
  ),
  L(
    "subjunctive-wishes-doubt-emotion-1",
    "b1d-patron-creo-no-creo",
    "Práctica de patrones: creo que / no creo que",
    "El mismo contenido, afirmado y negado: la certeza lleva indicativo; la duda, subjuntivo.",
    "6 min",
    [
      sec(
        "Afirmar o dudar",
        "Creo que / pienso que / estoy seguro de que + indicativo. No creo que / no pienso que / dudo que / no estoy seguro de que + subjuntivo. Creo que viene → No creo que venga.",
        [
          ["Creo que tienes razón. / No creo que tengas razón.", "I think you're right. / I don't think you're right."],
          ["Dudo que llueva hoy.", "I doubt it'll rain today."],
        ],
        [
          fb("Niégalo.", "Creo que es fácil. → No creo que ___ fácil.", "sea", "No creo que + subjuntivo."),
        ]
      ),
    ],
    [
      fb("Niégalo.", "Creo que tienen dinero. → No creo que ___ dinero.", "tengan", "Tengo → tenga."),
      fb("Niégalo.", "Pienso que va a llover. → No pienso que ___ a llover.", "vaya", "Ir → vaya."),
      fb("Afírmalo.", "No creo que sepa la respuesta. → Creo que ___ la respuesta.", "sabe", "Creo que + indicativo."),
      fb("Afírmalo.", "Dudo que esté en casa. → Estoy seguro de que ___ en casa.", "está", "Certeza → indicativo."),
      fb("Duda.", "Dudo que el restaurante ___ abierto a esta hora. (estar)", "esté", "Dudar que + subjuntivo."),
      mc(
        "«No estoy seguro de que ___ razón.» (tener, tú)",
        ["tengas", "tienes", "tener", "tendrás"],
        0,
        "No estar seguro de que + subjuntivo."
      ),
      ms(
        "¿Qué expresiones llevan subjuntivo?",
        ["no creo que", "dudo que", "creo que", "no pienso que"],
        [0, 1, 3],
        "Creo que = certeza → indicativo."
      ),
      toEs("I don't think he's coming today.", "No creo que venga hoy.", "No creo que + subjuntivo.", ["No creo que él venga hoy."]),
    ]
  ),
  L(
    "subjunctive-wishes-doubt-emotion-1",
    "b1d-circuito-emociones",
    "Circuito: me alegro de que, siento que, me molesta que",
    "Reacciones emocionales ante lo que hacen otros: el verbo de emoción + que + subjuntivo.",
    "6 min",
    [
      sec(
        "Reaccionar",
        "Me alegro de que, siento que (lo lamento), me molesta que, me preocupa que, tengo miedo de que, me sorprende que + subjuntivo. Con el mismo sujeto, infinitivo: Me alegro de verte.",
        [
          ["Me alegro de que estés aquí.", "I'm glad you're here."],
          ["Me molesta que la gente grite.", "It bothers me when people shout."],
        ],
        [
          fb("Reacciona.", "Me alegro de que ___ el trabajo. (conseguir, tú)", "consigas", "e → i + gu → g."),
        ]
      ),
    ],
    [
      fb("Reacciona.", "Siento que no ___ venir a la fiesta. (poder, tú)", "puedas", "Sentir que + subjuntivo."),
      fb("Reacciona.", "Me preocupa que mi abuelo ___ solo. (vivir)", "viva", "Preocupar que + subjuntivo."),
      fb("Reacciona.", "Nos sorprende que no ___ nadie. (haber)", "haya", "Haber → haya."),
      fb("Reacciona.", "Tengo miedo de que se ___ el avión. (retrasar)", "retrase", "Miedo de que + subjuntivo."),
      fb("Reacciona.", "Me molesta que mis vecinos ___ música tan alta. (poner)", "pongan", "Pongo → pongan."),
      mc(
        "«Me alegro de ___ aquí.» (yo)",
        ["estar", "que esté", "que estoy", "esté"],
        0,
        "Mismo sujeto → infinitivo."
      ),
      mt(
        "Relaciona el comienzo con el final.",
        [
          ["Me encanta que…", "…me escribas cartas."],
          ["Me da pena que…", "…te vayas tan pronto."],
          ["Me pone nervioso que…", "…lleguéis tarde."],
        ],
        "Emoción + subjuntivo."
      ),
      toEs("I'm sorry you're sick.", "Siento que estés enfermo.", "Sentir que + subjuntivo.", ["Siento que estés enferma.", "Lamento que estés enfermo."]),
    ]
  ),
  L(
    "subjunctive-wishes-doubt-emotion-1",
    "b1d-pares-hecho-reaccion",
    "Pares mínimos: sé que viene / me alegro de que venga",
    "El mismo hecho informado o valorado: información → indicativo; reacción → subjuntivo.",
    "6 min",
    [
      sec(
        "Informar vs. reaccionar",
        "Sé que / veo que / es verdad que + indicativo (informas). Me alegro de que / qué pena que / me sorprende que + subjuntivo (reaccionas), incluso si el hecho es real: Sé que vienes. / Me alegro de que vengas.",
        [
          ["Veo que estás cansado. / Siento que estés cansado.", "I see you're tired. / I'm sorry you're tired."],
        ],
        [
          mc(
            "«Sé que tu hermano ___ en Londres.»",
            ["vive", "viva", "vivir", "vivía siempre"],
            0,
            "Saber que = información → indicativo."
          ),
        ]
      ),
    ],
    [
      mc(
        "«Me encanta que tu hermano ___ en Londres.»",
        ["viva", "vive", "vivirá", "vivir"],
        0,
        "Reacción → subjuntivo."
      ),
      fb("Informa.", "Veo que ___ mucho. (trabajar, tú)", "trabajas", "Ver que → indicativo."),
      fb("Reacciona.", "Me preocupa que ___ tanto. (trabajar, tú)", "trabajes", "Preocupar → subjuntivo."),
      fb("Informa.", "Es verdad que el pan ___ caro. (estar)", "está", "Es verdad que → indicativo."),
      fb("Reacciona.", "Qué pena que el pan ___ tan caro. (estar)", "esté", "Qué pena que → subjuntivo."),
      fb("Informa.", "Me han dicho que ___ un bebé. (tener, vosotros)", "tenéis", "Decir que (informar) → indicativo."),
      fb("Reacciona.", "¡Qué bien que ___ un bebé! (tener, vosotros)", "tengáis", "Qué bien que → subjuntivo."),
      toEs("I know you're busy, and I'm sorry you're so busy.", "Sé que estás ocupado y siento que estés tan ocupado.", "Informar + reaccionar.", ["Sé que estás ocupada y siento que estés tan ocupada."]),
    ]
  ),
  L(
    "subjunctive-wishes-doubt-emotion-1",
    "b1d-habla-de-ti-reacciones",
    "Habla de ti: tus reacciones de la semana",
    "Traduce reacciones personales a noticias de amigos, familia y trabajo.",
    "6 min",
    [
      sec(
        "Reacciones cotidianas",
        "Qué bien que…, qué pena que…, me alegro de que…, me extraña que…, me molesta que… + subjuntivo. Son las frases que más usarás en conversación.",
        [
          ["¡Qué bien que tengas vacaciones!", "How great that you have vacation!"],
        ],
        [
          fb("Completa.", "¡Qué pena que no ___ venir! (poder, vosotros)", "podáis", "Qué pena que + subjuntivo."),
        ]
      ),
    ],
    [
      toEs("How great that you're coming to Madrid!", "¡Qué bien que vengas a Madrid!", "Qué bien que + subjuntivo.", ["¡Qué bueno que vengas a Madrid!"]),
      toEs("It surprises me that she doesn't call.", "Me sorprende que no llame.", "Sorprender que + subjuntivo.", ["Me extraña que no llame."]),
      toEs("I'm glad you like the gift.", "Me alegro de que te guste el regalo.", "Gustar → guste.", ["Me alegra que te guste el regalo."]),
      toEs("It bothers me that nobody helps.", "Me molesta que nadie ayude.", "Nadie + subjuntivo.", []),
      fb("Completa.", "Me extraña que el jefe no ___ nada. (decir)", "diga", "Extrañar que + subjuntivo."),
      fb("Completa.", "Es una lástima que ___ tan lejos. (vivir, tú)", "vivas", "Lástima que + subjuntivo."),
      wo("Me hace mucha ilusión que vengáis a mi boda.", "Emoción + subjuntivo.", "I'm really excited that you're coming to my wedding."),
    ]
  ),
  L(
    "subjunctive-wishes-doubt-emotion-2",
    "b1d-ronda-disparadores",
    "Ronda rápida: ¿dispara el subjuntivo o no?",
    "Doce comienzos de frase: decide en un segundo si piden indicativo, subjuntivo o infinitivo.",
    "6 min",
    [
      sec(
        "Disparadores de subjuntivo (con dos sujetos)",
        "Deseo (quiero que, espero que, prefiero que), duda/negación (dudo que, no creo que), emoción (me alegra que, siento que). Indicativo: creo que, sé que, estoy seguro de que, es verdad que.",
        [
          ["Espero que vengas. / Creo que vienes.", "I hope you come. / I think you're coming."],
        ],
        [
          mc(
            "«Estoy seguro de que…»",
            ["indicativo", "subjuntivo", "infinitivo", "imperativo"],
            0,
            "Certeza."
          ),
        ]
      ),
    ],
    [
      mc("«Dudo que…»", ["subjuntivo", "indicativo", "infinitivo", "futuro"], 0, "Duda → subjuntivo."),
      mc("«Pienso que…»", ["indicativo", "subjuntivo", "infinitivo", "condicional"], 0, "Opinión afirmativa → indicativo."),
      mc("«Me molesta que…»", ["subjuntivo", "indicativo", "infinitivo", "pretérito"], 0, "Emoción → subjuntivo."),
      mc("«Quiero… (yo mismo)»", ["infinitivo", "que + subjuntivo", "que + indicativo", "gerundio"], 0, "Mismo sujeto → infinitivo."),
      mc("«No pienso que…»", ["subjuntivo", "indicativo", "infinitivo", "imperativo"], 0, "Opinión negada → subjuntivo."),
      mc("«Sé que…»", ["indicativo", "subjuntivo", "infinitivo", "imperativo"], 0, "Conocimiento → indicativo."),
      fb("Completa.", "Prefiero que no ___ nada a nadie. (decir, tú)", "digas", "Preferir que + subjuntivo."),
      fb("Completa.", "Estoy seguro de que mañana ___ sol. (hacer, futuro)", "hará", "Certeza sobre el futuro → indicativo futuro."),
    ]
  ),
  L(
    "subjunctive-wishes-doubt-emotion-2",
    "b1d-corrige-disparadores",
    "Corrige el párrafo: indicativo donde va subjuntivo",
    "Un correo con los errores clásicos: espero que vienes, no creo que es, me alegro que estás. Repáralos.",
    "7 min",
    [
      sec(
        "El correo",
        "«Hola, Pablo: espero que ✗ estás (→ estés) bien. Me alegro de que ✗ tienes (→ tengas) trabajo nuevo. No creo que ✗ es (→ sea) fácil empezar, pero creo que ✗ lo hagas (→ lo haces) muy bien. Quiero que me ✗ llamas (→ llames) pronto.»",
        [
          ["Espero que estés bien.", "I hope you're well."],
          ["Creo que lo haces muy bien.", "I think you're doing very well."],
        ],
        [
          fb("Corrige.", "Espero que ___ bien. (el correo dice: estás)", "estés", "Esperar que + subjuntivo."),
        ]
      ),
    ],
    [
      fb("Corrige.", "Me alegro de que ___ trabajo nuevo. (el correo dice: tienes)", "tengas", "Emoción → subjuntivo."),
      fb("Corrige.", "No creo que ___ fácil empezar. (el correo dice: es)", "sea", "No creo que → subjuntivo."),
      fb("Corrige.", "Creo que lo ___ muy bien. (el correo dice: hagas)", "haces", "Creo que → indicativo."),
      fb("Corrige.", "Quiero que me ___ pronto. (el correo dice: llamas)", "llames", "Querer que → subjuntivo."),
      fb("Corrige.", "Estoy seguro de que te ___ mucho. (el correo dice: guste)", "gusta", "Certeza → indicativo."),
      mc(
        "¿Qué frase está bien?",
        ["Dudo que el jefe acepte la propuesta.", "Dudo que el jefe acepta la propuesta.", "Creo que el jefe acepte la propuesta.", "No creo que el jefe acepta."],
        0,
        "Dudar que + subjuntivo."
      ),
      toEs("I hope you like your new job.", "Espero que te guste tu nuevo trabajo.", "Gustar → guste.", ["Ojalá te guste tu nuevo trabajo."]),
    ]
  ),
  L(
    "subjunctive-wishes-doubt-emotion-2",
    "b1d-cadena-afirmar-negar",
    "Cadena de transformaciones: de la certeza a la duda",
    "Creo → no creo → dudo → me extraña: la misma frase pasa por cuatro actitudes.",
    "6 min",
    [
      sec(
        "Cuatro actitudes",
        "Certeza: Creo que el museo cierra a las ocho. Negación: No creo que el museo cierre a las ocho. Duda: Dudo que el museo cierre a las ocho. Emoción: Me extraña que el museo cierre a las ocho.",
        [
          ["Creo que llega hoy. → Dudo que llegue hoy.", "I think he arrives today. → I doubt he'll arrive today."],
        ],
        [
          fb("Certeza → negación.", "Creo que Ana sabe nadar. → No creo que Ana ___ nadar.", "sepa", "Saber → sepa."),
        ]
      ),
    ],
    [
      fb("Certeza → duda.", "Creo que hay sitio. → Dudo que ___ sitio.", "haya", "Haber → haya."),
      fb("Certeza → emoción.", "Creo que el jefe viene hoy. → Me alegra que el jefe ___ hoy.", "venga", "Emoción → subjuntivo."),
      fb("Negación → certeza.", "No creo que estén en casa. → Creo que ___ en casa.", "están", "Creo que → indicativo."),
      fb("Duda → certeza.", "Dudo que tenga razón. → Estoy segura de que ___ razón.", "tiene", "Certeza → indicativo."),
      fb("Certeza → emoción.", "Pienso que mi hijo duerme poco. → Me preocupa que mi hijo ___ poco.", "duerma", "o → ue."),
      mc(
        "«Es verdad que mienten.» → duda:",
        ["Dudo que mientan.", "Dudo que mienten.", "Dudo que mentir.", "Dudo mientan que."],
        0,
        "Mentir → mientan."
      ),
      toEs("I doubt there's a solution.", "Dudo que haya una solución.", "Dudar que + haya.", ["Dudo que exista una solución."]),
    ]
  ),
  L(
    "subjunctive-wishes-doubt-emotion-2",
    "b1d-preguntas-opiniones",
    "Preguntas y respuestas: ¿crees que…?",
    "Responde a preguntas de opinión: sí (indicativo) o no (subjuntivo), según tu postura.",
    "6 min",
    [
      sec(
        "Responder a «¿Crees que…?»",
        "La pregunta ¿Crees que…? lleva indicativo. En la respuesta: Sí, creo que… + indicativo / No, no creo que… + subjuntivo. ¿Crees que va a llover? — Sí, creo que va a llover. / No, no creo que vaya a llover.",
        [
          ["—¿Crees que aprobaremos? —No, no creo que aprobemos.", "Do you think we'll pass? — No, I don't think we'll pass."],
        ],
        [
          fb("Responde (no).", "—¿Crees que el tren llega a tiempo? —No, no creo que ___ a tiempo.", "llegue", "Negación → subjuntivo."),
        ]
      ),
    ],
    [
      fb("Responde (sí).", "—¿Crees que el museo está abierto hoy? —Sí, creo que ___ a las diez. (abrir)", "abre", "Certeza → indicativo."),
      fb("Responde (no).", "—¿Piensas que Luis dice la verdad? —No, no pienso que la ___.", "diga", "Negación → subjuntivo."),
      fb("Responde (sí).", "—¿Crees que hay entradas? —Sí, creo que ___ entradas.", "hay", "Certeza → indicativo."),
      fb("Responde (duda).", "—¿Vendrá tu hermano? —Dudo que ___.", "venga", "Duda → subjuntivo."),
      fb("Responde (no).", "—¿Crees que es caro? —No, no creo que ___ caro.", "sea", "Negación → subjuntivo."),
      mc(
        "«—¿Crees que Marta está enfadada? —Sí, creo que ___.»",
        ["está enfadada", "esté enfadada", "estar enfadada", "estaría enfadada"],
        0,
        "Afirmación → indicativo."
      ),
      toEs("—Do you think it's true? —I don't think it's true.", "—¿Crees que es verdad? —No creo que sea verdad.", "Pregunta indicativo, respuesta negativa subjuntivo.", []),
    ]
  ),
  L(
    "subjunctive-wishes-doubt-emotion-mastery-check",
    "b1d-cuento-carta-madre",
    "Cuento con huecos: la carta de una madre",
    "Una madre escribe a su hija que se va a estudiar fuera: deseos, dudas y emociones en cada frase.",
    "7 min",
    [
      sec(
        "La carta",
        "«Querida Lucía: me alegro mucho de que te vayas a Berlín, aunque me da pena que estés tan lejos. Espero que encuentres un piso bonito y que conozcas a gente buena. No creo que tengas problemas con el idioma. Quiero que me llames cada domingo. Te quiero, mamá.»",
        [
          ["Me da pena que estés tan lejos.", "It makes me sad that you'll be so far away."],
        ],
        [
          mc(
            "¿Qué pide la madre?",
            ["que Lucía la llame cada domingo", "que Lucía vuelva pronto", "que Lucía no se vaya", "que Lucía estudie alemán"],
            0,
            "Quiero que me llames cada domingo."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "Me alegro mucho de que te ___ a Berlín. (ir)", "vayas", "Ir → vayas."),
      fb("Completa.", "Me da pena que ___ tan lejos. (estar)", "estés", "Estar → estés."),
      fb("Completa.", "Espero que ___ un piso bonito. (encontrar)", "encuentres", "o → ue."),
      fb("Completa.", "Espero que ___ a gente buena. (conocer)", "conozcas", "Conozco → conozca."),
      fb("Completa.", "No creo que ___ problemas con el idioma. (tener)", "tengas", "No creo que + subjuntivo."),
      fb("Completa.", "Quiero que me ___ cada domingo. (llamar)", "llames", "Querer que + subjuntivo."),
      fb("Completa.", "Estoy segura de que ___ una experiencia increíble. (ser)", "será", "Certeza → indicativo."),
      toEs("I hope you're happy there.", "Espero que seas feliz allí.", "Ser → seas.", ["Espero que seas feliz ahí.", "Ojalá seas feliz allí."]),
    ]
  ),
  L(
    "subjunctive-wishes-doubt-emotion-mastery-check",
    "b1d-elige-explica-modo",
    "Elige y explica: ¿indicativo, subjuntivo o infinitivo? ¿Por qué?",
    "Elige la forma y la razón: certeza, duda, deseo, emoción o mismo sujeto.",
    "7 min",
    [
      sec(
        "Cinco razones",
        "Certeza → indicativo. Duda/negación de opinión → subjuntivo. Deseo con otro sujeto → subjuntivo. Emoción ante lo que hace otro → subjuntivo. Mismo sujeto → infinitivo.",
        [
          ["Me alegro de estar aquí (mismo sujeto).", "I'm glad to be here."],
          ["Me alegro de que estés aquí (emoción, otro sujeto).", "I'm glad you're here."],
        ],
        [
          mc(
            "«Espero ___ pronto.» (yo) — ¿forma y razón?",
            ["terminar — mismo sujeto", "que termine — deseo", "que termino — certeza", "terminé — pasado"],
            0,
            "Mismo sujeto → infinitivo."
          ),
        ]
      ),
    ],
    [
      mc(
        "«No pienso que ___ buena idea.»",
        ["sea — opinión negada", "es — certeza", "ser — mismo sujeto", "será — futuro"],
        0,
        "Opinión negada."
      ),
      mc(
        "«Está claro que ___ razón.»",
        ["tienes — certeza", "tengas — duda", "tener — mismo sujeto", "tuvieras — hipótesis"],
        0,
        "Está claro = certeza."
      ),
      mc(
        "«Me sorprende que no ___ nadie.»",
        ["llame — emoción", "llama — certeza", "llamar — mismo sujeto", "llamará — futuro"],
        0,
        "Emoción."
      ),
      mc(
        "«Mis padres desean que ___ a casa por Navidad.»",
        ["vuelva — deseo con otro sujeto", "vuelvo — certeza", "volver — mismo sujeto", "volví — pasado"],
        0,
        "Deseo."
      ),
      fb("Completa.", "Siento mucho ___ tarde. (llegar, yo)", "llegar", "Mismo sujeto → infinitivo."),
      fb("Completa.", "Siento mucho que ___ tarde. (llegar, tú)", "llegues", "Otro sujeto → subjuntivo."),
      toEs("It's clear that you're tired, and I want you to rest.", "Está claro que estás cansado y quiero que descanses.", "Certeza + deseo.", ["Está claro que estás cansada y quiero que descanses."]),
    ]
  ),
  L(
    "subjunctive-wishes-doubt-emotion-mastery-check",
    "b1d-dictado-reacciones",
    "Dictado: reacciones largas",
    "Reordena frases con verbo de emoción o duda + que + subjuntivo + pronombres.",
    "6 min",
    [
      sec(
        "Frases con dos cláusulas",
        "Primera cláusula (reacción/duda) + que + segunda cláusula (sujeto + pronombres + subjuntivo + complementos): Me sorprende que tu jefe no te pague las horas extra.",
        [
          ["Me sorprende que tu jefe no te pague las horas extra.", "It surprises me that your boss doesn't pay you for overtime."],
        ],
        [
          mc(
            "Orden natural:",
            ["Dudo que mis vecinos se muden este año.", "Dudo que se mis vecinos muden este año.", "Que dudo mis vecinos se muden.", "Dudo mis vecinos que se muden."],
            0,
            "Dudo que + sujeto + se + verbo."
          ),
        ]
      ),
    ],
    [
      wo("Me sorprende que tu jefe no te pague las horas extra.", "Emoción + subjuntivo.", "It surprises me that your boss doesn't pay you for overtime."),
      wo("No creo que el restaurante esté abierto los lunes.", "Opinión negada.", "I don't think the restaurant is open on Mondays."),
      wo("A mi madre le encanta que la visitemos los domingos.", "Gustar-tipo + que + subjuntivo.", "My mother loves it when we visit her on Sundays."),
      wo("Tengo miedo de que no nos dé tiempo a terminar.", "Miedo de que + dar tiempo.", "I'm afraid we won't have time to finish."),
      fb("Completa.", "Me preocupa que mi hijo no ___ amigos en el colegio nuevo. (hacer)", "haga", "Hago → haga."),
      toEn("Me extraña que no me contesten.", "It's strange that they don't answer me.", "Extrañar que + subjuntivo.", ["I find it strange that they don't answer me."]),
    ]
  ),
  L(
    "subjunctive-wishes-doubt-emotion-mastery-check",
    "b1d-practica-mezclada-deseo-duda",
    "Práctica mezclada: deseo, duda y emoción en la oficina",
    "Situaciones de trabajo que mezclan los tres disparadores con formas irregulares.",
    "7 min",
    [
      sec(
        "Lenguaje de oficina",
        "El jefe quiere que…, dudo que…, me preocupa que…, espero que…, no creo que… Son frases típicas en reuniones y correos internos.",
        [
          ["El jefe quiere que entreguemos el informe hoy.", "The boss wants us to hand in the report today."],
        ],
        [
          fb("Completa.", "El jefe quiere que ___ el informe hoy. (entregar, nosotros)", "entreguemos", "-gar → -gue."),
        ]
      ),
    ],
    [
      fb("Completa.", "Dudo que el cliente ___ el precio. (aceptar)", "acepte", "Dudar → subjuntivo."),
      fb("Completa.", "Me preocupa que no ___ tiempo suficiente. (haber)", "haya", "Haber → haya."),
      fb("Completa.", "Espero que la reunión no ___ mucho. (durar)", "dure", "Esperar → subjuntivo."),
      fb("Completa.", "No creo que la directora ___ de acuerdo. (estar)", "esté", "Estar → esté."),
      fb("Completa.", "Me alegro de que el equipo ___ tan bien. (funcionar)", "funcione", "Emoción."),
      fb("Completa.", "Estoy segura de que el proyecto ___ un éxito. (ser, futuro)", "será", "Certeza → indicativo."),
      mc(
        "«Prefiero que me lo ___ por correo.» (mandar, usted)",
        ["mande", "manda", "mandar", "mandará"],
        0,
        "Preferir que + subjuntivo."
      ),
      toEs("The boss doesn't want us to work on weekends.", "El jefe no quiere que trabajemos los fines de semana.", "No querer que + subjuntivo.", []),
    ]
  ),
  L(
    "subjunctive-wishes-doubt-emotion-drill-3",
    "b1d-ronda-emocion-irregulares",
    "Ronda rápida: emociones con verbos irregulares",
    "Me alegro de que sepas, siento que te vayas, me encanta que vengas: reacción + irregular, a toda velocidad.",
    "6 min",
    [
      sec(
        "Dos decisiones",
        "Primero: ¿hay reacción/deseo/duda con otro sujeto? → subjuntivo. Segundo: forma irregular correcta (sea, vaya, sepa, haga, tenga, venga, diga, ponga, salga, traiga…).",
        [
          ["Siento que te vayas tan pronto.", "I'm sorry you're leaving so soon."],
        ],
        [
          fb("Rápido.", "Me encanta que ___ a verme. (venir, tú)", "vengas", "Vengo → venga."),
        ]
      ),
    ],
    [
      fb("Rápido.", "Siento que te ___ tan pronto. (ir)", "vayas", "Ir → vaya."),
      fb("Rápido.", "Me alegro de que lo ___ ya. (saber, tú)", "sepas", "Saber → sepa."),
      fb("Rápido.", "Me molesta que siempre ___ tarde. (salir, tú)", "salgas", "Salgo → salga."),
      fb("Rápido.", "Me sorprende que no ___ nada. (decir, ellos)", "digan", "Digo → diga."),
      fb("Rápido.", "Espero que ___ el pastel. (traer, vosotros)", "traigáis", "Traigo → traiga."),
      fb("Rápido.", "Qué pena que ___ tan mal tiempo. (hacer)", "haga", "Hago → haga."),
      fb("Rápido.", "Dudo que ___ tiempo. (tener, nosotros)", "tengamos", "Tengo → tenga."),
      mc(
        "«Me alegra que ___ tan contentos.» (estar, vosotros)",
        ["estéis", "estáis", "seáis", "estar"],
        0,
        "Estar → estéis."
      ),
    ]
  ),
  L(
    "subjunctive-wishes-doubt-emotion-drill-3",
    "b1d-frase-a-frase-consejo",
    "Frase a frase: el consultorio",
    "Responde a la carta de un lector: reacción, duda, deseo y consejo, frase por frase.",
    "7 min",
    [
      sec(
        "La carta del lector",
        "«Mi compañero de piso nunca limpia y pone música a las dos de la mañana. ¿Qué hago?» Respuesta modelo: «Siento que tengas este problema. No creo que tu compañero lo haga con mala intención. Quiero que habléis tranquilamente. Espero que encontréis una solución.»",
        [
          ["Siento que tengas este problema.", "I'm sorry you have this problem."],
        ],
        [
          fb("Reacción.", "Siento que ___ este problema. (tener, tú)", "tengas", "Sentir que + subjuntivo."),
        ]
      ),
    ],
    [
      fb("Duda.", "No creo que tu compañero lo ___ con mala intención. (hacer)", "haga", "No creo que + subjuntivo."),
      fb("Deseo.", "Quiero que ___ tranquilamente. (hablar, vosotros)", "habléis", "Querer que + subjuntivo."),
      fb("Deseo.", "Espero que ___ una solución. (encontrar, vosotros)", "encontréis", "Sin cambio de raíz en vosotros."),
      fb("Emoción.", "Me preocupa que no ___ dormir. (poder, tú)", "puedas", "o → ue."),
      fb("Certeza.", "Estoy seguro de que él ___ entenderlo. (poder)", "puede", "Certeza → indicativo."),
      wo("Te aconsejo que le expliques cómo te sientes.", "Aconsejar que + subjuntivo.", "I advise you to explain to him how you feel."),
      toEs("I hope you two can live together in peace.", "Espero que podáis vivir juntos en paz.", "Esperar que + subjuntivo.", ["Espero que los dos podáis vivir juntos en paz.", "Espero que puedan vivir juntos en paz."]),
    ]
  ),
  L(
    "subjunctive-wishes-doubt-emotion-drill-3",
    "b1d-pares-mismo-sujeto",
    "Pares mínimos: siento llegar tarde / siento que llegues tarde",
    "Emoción con el mismo sujeto (infinitivo) o con otro sujeto (subjuntivo): diez pares para no fallar más.",
    "6 min",
    [
      sec(
        "Mismo sujeto = infinitivo",
        "Me alegro de verte (yo me alegro, yo te veo). Me alegro de que me veas (yo me alegro, tú me ves). Tengo miedo de perder / Tengo miedo de que pierdas.",
        [
          ["Siento llegar tarde. / Siento que llegues tarde.", "I'm sorry I'm late. / I'm sorry you're late."],
        ],
        [
          mc(
            "«Me encanta ___ contigo.» (yo)",
            ["bailar", "que baile", "que bailo", "bailando"],
            0,
            "Mismo sujeto."
          ),
        ]
      ),
    ],
    [
      mc(
        "«Me encanta que ___ conmigo.» (tú)",
        ["bailes", "bailar", "bailas", "bailando"],
        0,
        "Otro sujeto."
      ),
      fb("Completa.", "Tengo miedo de ___ el avión. (perder, yo)", "perder", "Mismo sujeto."),
      fb("Completa.", "Tengo miedo de que ___ el avión. (perder, ellos)", "pierdan", "Otro sujeto: e → ie."),
      fb("Completa.", "Nos alegra ___ aquí. (estar, nosotros)", "estar", "Mismo sujeto."),
      fb("Completa.", "Nos alegra que ___ aquí. (estar, vosotros)", "estéis", "Otro sujeto."),
      fb("Completa.", "Odio ___ temprano. (levantarme)", "levantarme", "Mismo sujeto + pronombre."),
      fb("Completa.", "Odio que me ___ temprano. (despertar, ellos)", "despierten", "Otro sujeto: e → ie."),
      toEs("I'm afraid of losing my job.", "Tengo miedo de perder mi trabajo.", "Mismo sujeto.", ["Me da miedo perder mi trabajo."]),
    ]
  ),
  L(
    "subjunctive-wishes-doubt-emotion-drill-3",
    "b1d-cuento-mensajes-grupo",
    "Cuento con huecos: el grupo de amigos",
    "Mensajes de un grupo que organiza una cena: deseos, dudas y reacciones en cada línea.",
    "7 min",
    [
      sec(
        "Los mensajes",
        "Ana: Quiero que cenemos juntos el viernes. — Luis: ¡Qué bien que lo organices tú! — Marta: Dudo que yo pueda, trabajo hasta tarde. — Ana: Me da pena que no vengas. — Pedro: Espero que haya comida vegetariana. — Ana: Claro, sé que eres vegetariano.",
        [
          ["Dudo que yo pueda.", "I doubt I can."],
          ["Sé que eres vegetariano.", "I know you're a vegetarian."],
        ],
        [
          mc(
            "¿Por qué Marta no irá?",
            ["trabaja hasta tarde", "está enferma", "no le gusta la comida", "está de viaje"],
            0,
            "Trabajo hasta tarde."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "Quiero que ___ juntos el viernes. (cenar, nosotros)", "cenemos", "Querer que + subjuntivo."),
      fb("Completa.", "¡Qué bien que lo ___ tú! (organizar)", "organices", "-zar → -ce."),
      fb("Completa.", "Dudo que yo ___ ir. (poder)", "pueda", "Dudar que + subjuntivo."),
      fb("Completa.", "Me da pena que no ___. (venir, tú)", "vengas", "Emoción → subjuntivo."),
      fb("Completa.", "Espero que ___ comida vegetariana. (haber)", "haya", "Haber → haya."),
      fb("Completa.", "Sé que ___ vegetariano. (ser, tú)", "eres", "Saber que → indicativo."),
      mc(
        "«Me alegro de que todos ___ venir menos Marta.»",
        ["podáis", "podéis", "poder", "podríais siempre"],
        0,
        "Emoción → subjuntivo."
      ),
      toEs("I hope everyone has a great time.", "Espero que todos lo pasen muy bien.", "Esperar que + subjuntivo.", ["Espero que todos lo paséis genial.", "Espero que todos se diviertan mucho."]),
    ]
  ),
  L(
    "subjunctive-wishes-doubt-emotion-drill-3",
    "b1d-habla-de-ti-dudas",
    "Habla de ti: lo que dudas y lo que crees",
    "Opiniones personales sobre el futuro del mundo y de tu vida: creo que + indicativo, no creo que + subjuntivo.",
    "6 min",
    [
      sec(
        "Opinar con matices",
        "Para opinar: creo que, pienso que, me parece que (+ indicativo). Para no estar de acuerdo o dudar: no creo que, dudo que, no me parece que (+ subjuntivo).",
        [
          ["Me parece que el tráfico va a empeorar.", "It seems to me traffic will get worse."],
          ["No me parece que sea buena idea.", "I don't think it's a good idea."],
        ],
        [
          mc(
            "«No me parece que ___ justo.»",
            ["sea", "es", "será", "ser"],
            0,
            "No me parece que + subjuntivo."
          ),
        ]
      ),
    ],
    [
      toEs("I think technology helps us.", "Creo que la tecnología nos ayuda.", "Creo que + indicativo.", ["Pienso que la tecnología nos ayuda."]),
      toEs("I don't think robots will replace teachers.", "No creo que los robots vayan a reemplazar a los profesores.", "No creo que + subjuntivo.", ["No creo que los robots reemplacen a los profesores.", "No creo que los robots sustituyan a los profesores."]),
      toEs("I doubt that I'll live abroad.", "Dudo que vaya a vivir en el extranjero.", "Dudar que + subjuntivo.", ["Dudo que viva en el extranjero."]),
      toEs("It seems to me that people read less.", "Me parece que la gente lee menos.", "Me parece que + indicativo.", ["Creo que la gente lee menos."]),
      fb("Completa.", "No pienso que el problema ___ fácil de resolver. (ser)", "sea", "Opinión negada."),
      fb("Completa.", "Estoy convencido de que la situación ___ a mejorar. (ir)", "va", "Certeza → indicativo."),
      wo("No creo que mi ciudad cambie mucho en diez años.", "Opinión negada.", "I don't think my city will change much in ten years."),
    ]
  ),
  L(
    "subjunctive-wishes-doubt-emotion-drill-3",
    "b1d-cadena-deseos-a-consejos",
    "Cadena de transformaciones: querer, pedir, aconsejar, prohibir",
    "El mismo contenido con distintos verbos de influencia: todos piden que + subjuntivo.",
    "6 min",
    [
      sec(
        "Verbos de influencia",
        "Querer que, pedir que, aconsejar que, recomendar que, prohibir que, permitir que, necesitar que + subjuntivo. Con pronombre: Te pido que me ayudes. Te prohíbo que salgas.",
        [
          ["El médico me recomienda que descanse.", "The doctor recommends that I rest."],
          ["Mis padres no me permiten que salga de noche.", "My parents don't allow me to go out at night."],
        ],
        [
          fb("Completa.", "Te pido que me ___ la verdad. (decir)", "digas", "Pedir que + subjuntivo."),
        ]
      ),
    ],
    [
      fb("Cambia el verbo.", "Quiero que vengas. → Te pido que ___ conmigo al médico. (ir)", "vayas", "Pedir que + subjuntivo."),
      fb("Completa.", "El médico le aconseja que ___ menos sal. (tomar)", "tome", "Aconsejar que + subjuntivo."),
      fb("Completa.", "Te recomiendo que ___ el museo por la mañana. (visitar)", "visites", "Recomendar que + subjuntivo."),
      fb("Completa.", "La profesora nos prohíbe que ___ el móvil en clase. (usar)", "usemos", "Prohibir que + subjuntivo."),
      fb("Completa.", "Necesito que me ___ con las maletas. (ayudar, tú)", "ayudes", "Necesitar que + subjuntivo."),
      fb("Completa.", "Mis padres me permiten que ___ hasta las doce. (salir)", "salga", "Permitir que + subjuntivo."),
      mc(
        "«Te aconsejo que no le ___ nada.» (decir)",
        ["digas", "dices", "decir", "dirás"],
        0,
        "Aconsejar que + subjuntivo."
      ),
      toEs("I recommend that you try the paella.", "Te recomiendo que pruebes la paella.", "Recomendar que + subjuntivo.", ["Le recomiendo que pruebe la paella."]),
    ]
  ),
  L(
    "subjunctive-wishes-doubt-emotion-drill-3",
    "b1d-practica-mezclada-wde",
    "Práctica mezclada: los disparadores sin aviso",
    "Frases sueltas de la vida diaria: ninguna pista sobre el modo. Decide y conjuga.",
    "6 min",
    [
      sec(
        "Sin red",
        "Busca el disparador (quiero que, dudo que, me alegro de que…) o la certeza (creo que, sé que…). Si no hay que, piensa si es mismo sujeto (infinitivo).",
        [
          ["Mi madre prefiere que no fumemos en casa.", "My mother prefers that we don't smoke at home."],
        ],
        [
          fb("Completa.", "Mi madre prefiere que no ___ en casa. (fumar, nosotros)", "fumemos", "Preferir que + subjuntivo."),
        ]
      ),
    ],
    [
      fb("Completa.", "Me parece que Juan ___ razón. (tener)", "tiene", "Me parece que → indicativo."),
      fb("Completa.", "Me encanta que me ___ flores. (regalar, tú)", "regales", "Emoción → subjuntivo."),
      fb("Completa.", "No estoy segura de que ___ la verdad. (decir, él)", "diga", "Duda → subjuntivo."),
      fb("Completa.", "Quiero ___ contigo. (hablar, yo)", "hablar", "Mismo sujeto → infinitivo."),
      fb("Completa.", "Es evidente que ___ cansado. (estar, tú)", "estás", "Certeza → indicativo."),
      fb("Completa.", "Tememos que ___ tarde. (ser)", "sea", "Temer que + subjuntivo."),
      fb("Completa.", "Sabemos que ___ mucho. (trabajar, vosotros)", "trabajáis", "Saber que → indicativo."),
      mc(
        "«Me sorprende que ___ tan temprano.» (levantarse, tú)",
        ["te levantes", "te levantas", "levantarte", "te levantarás"],
        0,
        "Emoción + reflexivo en subjuntivo."
      ),
    ]
  ),
  L(
    "subjunctive-wishes-doubt-emotion-drill-3",
    "b1d-elige-explica-parecer",
    "Elige y explica: me parece que / me parece bien que",
    "Parecer cambia de modo según su significado: opinión (indicativo) o valoración (subjuntivo).",
    "6 min",
    [
      sec(
        "Dos «parecer»",
        "Me parece que + indicativo = I think (opinión): Me parece que va a llover. Me parece bien / mal / raro / genial que + subjuntivo = valoración: Me parece bien que vengas. Negado, la opinión pasa a subjuntivo: No me parece que sea caro.",
        [
          ["Me parece que tienes fiebre.", "I think you have a fever."],
          ["Me parece genial que estudies música.", "I think it's great that you study music."],
        ],
        [
          mc(
            "«Me parece raro que no ___ nadie.»",
            ["conteste", "contesta", "contestar", "contestará"],
            0,
            "Valoración → subjuntivo."
          ),
        ]
      ),
    ],
    [
      mc(
        "«Me parece que el restaurante ___ cerrado.»",
        ["está", "esté", "estar", "estuviera"],
        0,
        "Opinión → indicativo."
      ),
      fb("Completa.", "Me parece bien que ___ un descanso. (tomar, vosotros)", "toméis", "Valoración → subjuntivo."),
      fb("Completa.", "Me parece que ya ___ las diez. (ser)", "son", "Opinión → indicativo."),
      fb("Completa.", "Me parece fatal que ___ tanto el alquiler. (subir)", "suba", "Valoración → subjuntivo."),
      fb("Completa.", "No me parece que ___ necesario. (ser)", "sea", "Opinión negada → subjuntivo."),
      ms(
        "¿Qué frases llevan subjuntivo?",
        ["Me parece genial que…", "Me parece que…", "Me parece mal que…", "No me parece que…"],
        [0, 2, 3],
        "Solo la opinión afirmativa lleva indicativo."
      ),
      toEs("I think it's great that you're learning Spanish.", "Me parece genial que aprendas español.", "Valoración → subjuntivo.", ["Me parece estupendo que aprendas español."]),
    ]
  ),
  L(
    "subjunctive-impersonal-ojala-1",
    "b1d-patron-es-importante-que",
    "Práctica de patrones: es importante / necesario / mejor que",
    "Un marco impersonal, muchos verbos: es + adjetivo + que + subjuntivo.",
    "6 min",
    [
      sec(
        "Expresiones impersonales",
        "Es importante que, es necesario que, es mejor que, es posible que, es raro que, es normal que + subjuntivo. Sin sujeto concreto, se usa infinitivo: Es importante dormir bien.",
        [
          ["Es importante que bebas agua.", "It's important that you drink water."],
          ["Es importante beber agua.", "It's important to drink water."],
        ],
        [
          fb("Completa.", "Es necesario que ___ el formulario. (rellenar, usted)", "rellene", "Es necesario que + subjuntivo."),
        ]
      ),
    ],
    [
      fb("Mismo marco.", "Es mejor que ___ en taxi. (ir, nosotros)", "vayamos", "Ir → vayamos."),
      fb("Mismo marco.", "Es posible que ___ tarde. (llegar, ellos)", "lleguen", "-gar → -gue."),
      fb("Mismo marco.", "Es raro que Ana no ___. (contestar)", "conteste", "Es raro que + subjuntivo."),
      fb("Mismo marco.", "Es normal que ___ nervioso antes de un examen. (estar, tú)", "estés", "Es normal que + subjuntivo."),
      fb("Sin sujeto concreto.", "Es importante ___ bien. (dormir)", "dormir", "Generalización → infinitivo."),
      mt(
        "Relaciona el comienzo con el final.",
        [
          ["Es mejor…", "…no decir nada."],
          ["Es mejor que…", "…no digas nada."],
          ["Es posible que…", "…nieve mañana."],
        ],
        "Infinitivo vs. que + subjuntivo."
      ),
      mc(
        "«Es necesario que todos ___ el plan.» (conocer)",
        ["conozcan", "conocen", "conocer", "conozcáis ellos"],
        0,
        "Conozco → conozca."
      ),
      toEs("It's better that you rest today.", "Es mejor que descanses hoy.", "Es mejor que + subjuntivo.", ["Mejor que descanses hoy."]),
    ]
  ),
  L(
    "subjunctive-impersonal-ojala-1",
    "b1d-pares-es-verdad-es-posible",
    "Pares mínimos: es verdad que / es posible que",
    "Las expresiones de certeza llevan indicativo; las de posibilidad o valoración, subjuntivo.",
    "6 min",
    [
      sec(
        "Hecho o posibilidad",
        "Indicativo: es verdad que, es cierto que, es obvio que, está claro que, es evidente que. Subjuntivo: es posible que, es probable que, puede que, es increíble que, es una pena que. Negadas, las de certeza pasan a subjuntivo: No es verdad que sea caro.",
        [
          ["Es verdad que hace frío. / Es posible que haga frío.", "It's true it's cold. / It may be cold."],
        ],
        [
          mc(
            "«Es obvio que ___ razón.»",
            ["tienes", "tengas", "tener", "tuvieras"],
            0,
            "Certeza → indicativo."
          ),
        ]
      ),
    ],
    [
      mc(
        "«Es probable que ___ razón.»",
        ["tengas", "tienes", "tener", "tendrás"],
        0,
        "Probabilidad → subjuntivo."
      ),
      fb("Completa.", "Está claro que mi hermana ___ mejor que yo al tenis. (jugar)", "juega", "Certeza → indicativo."),
      fb("Completa.", "Puede que ___ esta tarde. (llover)", "llueva", "Puede que + subjuntivo."),
      fb("Completa.", "Es cierto que Madrid ___ muy cara. (ser)", "es", "Certeza → indicativo."),
      fb("Completa.", "No es cierto que Madrid ___ tan cara. (ser)", "sea", "Certeza negada → subjuntivo."),
      fb("Completa.", "Es increíble que ___ tanta gente. (haber)", "haya", "Valoración → subjuntivo."),
      ms(
        "¿Qué expresiones llevan indicativo?",
        ["es evidente que", "es cierto que", "es posible que", "está claro que"],
        [0, 1, 3],
        "Es posible que → subjuntivo."
      ),
      toEs("It's possible that the shop is closed.", "Es posible que la tienda esté cerrada.", "Posibilidad → subjuntivo.", ["Puede que la tienda esté cerrada."]),
    ]
  ),
  L(
    "subjunctive-impersonal-ojala-1",
    "b1d-ronda-ojala",
    "Ronda rápida: ojalá + subjuntivo",
    "Ojalá (que) siempre lleva subjuntivo: deseos rápidos para todo tipo de situaciones.",
    "5 min",
    [
      sec(
        "Ojalá",
        "Ojalá (que) + presente de subjuntivo = I hope / let's hope: Ojalá haga sol mañana. Ojalá que apruebes. No cambia con la persona: ojalá es invariable.",
        [
          ["Ojalá haga buen tiempo el sábado.", "I hope the weather's good on Saturday."],
        ],
        [
          fb("Rápido.", "Ojalá ___ la lotería. (ganar, nosotros)", "ganemos", "Ojalá + subjuntivo."),
        ]
      ),
    ],
    [
      fb("Rápido.", "Ojalá no ___ tráfico. (haber)", "haya", "Haber → haya."),
      fb("Rápido.", "Ojalá que mi abuela ___ pronto. (mejorar)", "mejore", "Regular -ar."),
      fb("Rápido.", "Ojalá ___ entradas para el concierto. (conseguir, yo)", "consiga", "e → i + gu → g."),
      fb("Rápido.", "Ojalá que no ___ el tren. (perder, vosotros)", "perdáis", "Sin cambio en vosotros."),
      fb("Rápido.", "Ojalá ___ verdad. (ser)", "sea", "Ser → sea."),
      fb("Rápido.", "Ojalá me ___ el trabajo. (dar, ellos)", "den", "Dar → den."),
      mc(
        "«Ojalá ___ mañana.» (venir, tú)",
        ["vengas", "vienes", "vendrás", "venir"],
        0,
        "Ojalá + subjuntivo."
      ),
      toEs("I hope you like it.", "Ojalá te guste.", "Ojalá + subjuntivo.", ["Ojalá que te guste.", "Espero que te guste."]),
    ]
  ),
  L(
    "subjunctive-impersonal-ojala-2",
    "b1d-corrige-impersonales",
    "Corrige el párrafo: consejos de un folleto de salud",
    "Un folleto que mezcla indicativo y subjuntivo sin criterio. Corrige cada consejo.",
    "6 min",
    [
      sec(
        "El folleto",
        "«Es importante que ✗ bebes (→ bebas) dos litros de agua al día. Es mejor que ✗ caminas (→ camines) treinta minutos. Es verdad que el deporte ✗ sea (→ es) bueno para la salud. Es necesario que ✗ duermes (→ duermas) ocho horas. Ojalá todos ✗ siguen (→ sigan) estos consejos.»",
        [
          ["Es importante que bebas agua.", "It's important that you drink water."],
          ["Es verdad que el deporte es bueno.", "It's true that exercise is good."],
        ],
        [
          fb("Corrige.", "Es importante que ___ dos litros de agua. (el folleto dice: bebes)", "bebas", "Valoración → subjuntivo."),
        ]
      ),
    ],
    [
      fb("Corrige.", "Es mejor que ___ treinta minutos al día. (el folleto dice: caminas)", "camines", "Es mejor que → subjuntivo."),
      fb("Corrige.", "Es verdad que el deporte ___ bueno. (el folleto dice: sea)", "es", "Certeza → indicativo."),
      fb("Corrige.", "Es necesario que ___ ocho horas. (el folleto dice: duermes)", "duermas", "Necesidad → subjuntivo."),
      fb("Corrige.", "Ojalá todos ___ estos consejos. (el folleto dice: siguen)", "sigan", "Ojalá → subjuntivo."),
      fb("Corrige.", "Es obvio que el azúcar ___ perjudicial. (el folleto dice: sea)", "es", "Certeza → indicativo."),
      mc(
        "¿Qué consejo está bien escrito?",
        ["Es recomendable que comas fruta cada día.", "Es recomendable que comes fruta cada día.", "Es recomendable comes fruta.", "Es recomendable que comer fruta."],
        0,
        "Recomendación → subjuntivo."
      ),
      toEs("It's important that we eat more vegetables.", "Es importante que comamos más verduras.", "Es importante que + subjuntivo.", []),
    ]
  ),
  L(
    "subjunctive-impersonal-ojala-2",
    "b1d-cadena-infinitivo-subjuntivo",
    "Cadena de transformaciones: de lo general a lo personal",
    "Es importante reciclar → Es importante que recicles: del consejo general al consejo para alguien.",
    "6 min",
    [
      sec(
        "General vs. personal",
        "General (sin sujeto): Es necesario ahorrar. Personal (con sujeto): Es necesario que ahorres. Lo mismo con es mejor, es importante, es fundamental, es conveniente.",
        [
          ["Es fundamental estudiar. → Es fundamental que estudiéis.", "It's essential to study. → It's essential that you study."],
        ],
        [
          fb("Personaliza (tú).", "Es mejor esperar. → Es mejor que ___.", "esperes", "Que + subjuntivo."),
        ]
      ),
    ],
    [
      fb("Personaliza (nosotros).", "Es necesario salir ya. → Es necesario que ___ ya.", "salgamos", "Salgo → salgamos."),
      fb("Personaliza (vosotros).", "Es importante hacer ejercicio. → Es importante que ___ ejercicio.", "hagáis", "Hago → hagáis."),
      fb("Personaliza (ustedes).", "Es conveniente llegar pronto. → Es conveniente que ___ pronto.", "lleguen", "-gar → -gue."),
      fb("Generaliza.", "Es mejor que te acuestes pronto. → Es mejor ___ pronto.", "acostarse", "Infinitivo con se genérico."),
      fb("Generaliza.", "Es necesario que ahorres. → Es necesario ___.", "ahorrar", "Infinitivo."),
      mc(
        "«Es fundamental ___ la verdad.» (generalización)",
        ["decir", "que digas", "que dices", "dirás"],
        0,
        "Sin sujeto concreto → infinitivo."
      ),
      toEs("It's necessary that you all bring your passports.", "Es necesario que traigáis el pasaporte.", "Traer → traigáis.", ["Es necesario que traigan el pasaporte.", "Es necesario que traigáis vuestros pasaportes."]),
    ]
  ),
  L(
    "subjunctive-impersonal-ojala-2",
    "b1d-habla-de-ti-ojala",
    "Habla de ti: tus ojalás",
    "Traduce deseos personales para este año, para tu familia y para el mundo con ojalá.",
    "6 min",
    [
      sec(
        "Deseos con ojalá",
        "Ojalá + subjuntivo sirve para deseos grandes y pequeños: Ojalá encuentre piso. Ojalá mi equipo gane la liga. Ojalá no haya guerras.",
        [
          ["Ojalá encuentre un piso cerca del trabajo.", "I hope I find a flat near work."],
        ],
        [
          mc(
            "«Ojalá mi equipo ___ la liga.»",
            ["gane", "gana", "ganará", "ganar"],
            0,
            "Ojalá + subjuntivo."
          ),
        ]
      ),
    ],
    [
      toEs("I hope I find a better job this year.", "Ojalá encuentre un trabajo mejor este año.", "Ojalá + subjuntivo.", ["Ojalá encuentre un mejor trabajo este año.", "Ojalá que encuentre un trabajo mejor este año."]),
      toEs("I hope my parents are healthy.", "Ojalá mis padres estén sanos.", "Estar → estén.", ["Ojalá que mis padres tengan buena salud."]),
      toEs("I hope there is peace in the world.", "Ojalá haya paz en el mundo.", "Haber → haya.", ["Ojalá que haya paz en el mundo."]),
      toEs("I hope we can travel together.", "Ojalá podamos viajar juntos.", "Poder → podamos.", ["Ojalá que podamos viajar juntos."]),
      fb("Completa.", "Ojalá ___ más tiempo para leer. (tener, yo)", "tenga", "Tengo → tenga."),
      fb("Completa.", "Ojalá mis amigos ___ a visitarme. (venir)", "vengan", "Vengo → venga."),
      wo("Ojalá que este año sea mejor que el anterior.", "Ojalá + subjuntivo + comparación.", "I hope this year is better than the last one."),
    ]
  ),
  L(
    "subjunctive-impersonal-ojala-2",
    "b1d-preguntas-es-posible",
    "Preguntas y respuestas: ¿es posible que…?",
    "Responde a preguntas sobre planes y dudas con es posible que, es probable que y puede que.",
    "6 min",
    [
      sec(
        "Responder con probabilidad",
        "—¿Vendrás mañana? —Es posible que vaya / Es probable que vaya / Puede que vaya. Si estás seguro: Sí, seguro que voy (indicativo).",
        [
          ["—¿Llueve mañana? —Es probable que llueva.", "Will it rain tomorrow? — It will probably rain."],
        ],
        [
          fb("Responde.", "—¿Viene tu hermano? —Es posible que ___.", "venga", "Posibilidad → subjuntivo."),
        ]
      ),
    ],
    [
      fb("Responde.", "—¿Aprobarás? —Es probable que ___.", "apruebe", "o → ue."),
      fb("Responde.", "—¿Hay atasco? —Puede que ___ atasco a esta hora.", "haya", "Puede que + subjuntivo."),
      fb("Responde.", "—¿Está Luis en casa? —Es posible que ___ en el gimnasio.", "esté", "Estar → esté."),
      fb("Responde (seguro).", "—¿Vendrás? —Sí, seguro que ___.", "vengo", "Seguro que → indicativo."),
      fb("Responde.", "—¿Os mudáis este año? —Es probable que nos ___ en verano.", "mudemos", "Reflexivo en subjuntivo."),
      mc(
        "«—¿Saldréis esta noche? —Puede que ___.»",
        ["salgamos", "salimos", "saldremos", "salir"],
        0,
        "Puede que + subjuntivo."
      ),
      toEs("—Is it expensive? —It's probably expensive.", "—¿Es caro? —Es probable que sea caro.", "Es probable que + subjuntivo.", ["—¿Es caro? —Probablemente sea caro."]),
    ]
  ),
  L(
    "subjunctive-impersonal-ojala-drill-3",
    "b1d-practica-mezclada-impersonales",
    "Práctica mezclada: impersonales, ojalá y certeza",
    "Todas las expresiones impersonales mezcladas: cuáles piden subjuntivo y cuáles indicativo.",
    "6 min",
    [
      sec(
        "Mapa rápido",
        "Subjuntivo: es importante/necesario/mejor/posible/probable/raro/normal/increíble/una pena que, puede que, ojalá. Indicativo: es verdad/cierto/obvio/evidente que, está claro que, es seguro que.",
        [
          ["Es una pena que no vengas, pero es verdad que tienes mucho trabajo.", "It's a pity you're not coming, but it's true you have a lot of work."],
        ],
        [
          fb("Completa.", "Es una pena que no ___. (venir, tú)", "vengas", "Valoración → subjuntivo."),
        ]
      ),
    ],
    [
      fb("Completa.", "Es verdad que ___ mucho trabajo. (tener, tú)", "tienes", "Certeza → indicativo."),
      fb("Completa.", "Es raro que el jefe no ___. (llamar)", "llame", "Valoración → subjuntivo."),
      fb("Completa.", "Está claro que ___ tiempo. (necesitar, nosotros)", "necesitamos", "Certeza → indicativo."),
      fb("Completa.", "Es probable que ___ la reunión. (cancelar, ellos)", "cancelen", "Probabilidad → subjuntivo."),
      fb("Completa.", "Es seguro que ___ problemas. (haber)", "hay", "Certeza → indicativo."),
      fb("Completa.", "Ojalá no ___ problemas. (haber)", "haya", "Ojalá → subjuntivo."),
      fb("Completa.", "Es normal que te ___ la cabeza con tanto ruido. (doler)", "duela", "o → ue."),
      mc(
        "«Es evidente que no ___ de acuerdo.» (estar, ellos)",
        ["están", "estén", "estar", "estarían siempre"],
        0,
        "Certeza → indicativo."
      ),
    ]
  ),
  L(
    "subjunctive-impersonal-ojala-drill-3",
    "b1d-frase-a-frase-viaje",
    "Frase a frase: consejos para un viaje a México",
    "Construye consejos completos para un amigo que viaja: es importante que, es mejor que, ojalá.",
    "6 min",
    [
      sec(
        "Consejos de viaje",
        "«Es importante que lleves el pasaporte siempre. Es mejor que cambies dinero en el banco. Es posible que haga mucho calor. Es necesario que pruebes los tacos al pastor. Ojalá lo pases genial.»",
        [
          ["Es mejor que cambies dinero en el banco.", "It's better to change money at the bank."],
        ],
        [
          fb("Completa.", "Es importante que ___ el pasaporte siempre. (llevar)", "lleves", "Importante que + subjuntivo."),
        ]
      ),
    ],
    [
      fb("Completa.", "Es mejor que ___ dinero en el banco. (cambiar)", "cambies", "Mejor que + subjuntivo."),
      fb("Completa.", "Es posible que ___ mucho calor. (hacer)", "haga", "Posibilidad → subjuntivo."),
      fb("Completa.", "Es necesario que ___ los tacos al pastor. (probar)", "pruebes", "o → ue."),
      fb("Completa.", "Ojalá lo ___ genial. (pasar)", "pases", "Ojalá + subjuntivo."),
      fb("Completa.", "Es verdad que la comida ___ picante. (ser)", "es", "Certeza → indicativo."),
      wo("Es recomendable que bebas solo agua embotellada.", "Recomendación.", "It's advisable to drink only bottled water."),
      toEs("It's better that you don't travel alone at night.", "Es mejor que no viajes solo de noche.", "Mejor que + subjuntivo negativo.", ["Es mejor que no viajes sola de noche.", "Mejor que no viajes solo por la noche."]),
    ]
  ),
  L(
    "subjunctive-impersonal-ojala-drill-3",
    "b1d-elige-explica-impersonales",
    "Elige y explica: ¿hecho, valoración o posibilidad?",
    "Elige el modo y di por qué: hecho (indicativo), valoración o posibilidad (subjuntivo).",
    "6 min",
    [
      sec(
        "Tres tipos de expresión impersonal",
        "Hecho: es verdad, es cierto, es obvio → indicativo. Valoración: es bueno, es una pena, es increíble → subjuntivo. Posibilidad/necesidad: es posible, es necesario → subjuntivo.",
        [
          ["Es increíble que sigas aquí.", "It's incredible that you're still here."],
        ],
        [
          mc(
            "«Es increíble que ___ tanto.» (llover) — ¿forma y tipo?",
            ["llueva — valoración", "llueve — hecho", "lloverá — futuro", "llover — infinitivo"],
            0,
            "Valoración → subjuntivo."
          ),
        ]
      ),
    ],
    [
      mc(
        "«Es cierto que ___ caro.» (ser)",
        ["es — hecho", "sea — valoración", "será — posibilidad", "ser — general"],
        0,
        "Hecho."
      ),
      mc(
        "«Es necesario que ___ la luz.» (apagar, vosotros)",
        ["apaguéis — necesidad", "apagáis — hecho", "apagad — mandato", "apagar — general"],
        0,
        "Necesidad."
      ),
      mc(
        "«Es bueno que ___ amigos nuevos.» (hacer, tú)",
        ["hagas — valoración", "haces — hecho", "harás — posibilidad", "hacer — general"],
        0,
        "Valoración."
      ),
      fb("Completa.", "Es obvio que ___ sueño. (tener, tú)", "tienes", "Hecho → indicativo."),
      fb("Completa.", "Es una lástima que ___ la tienda. (cerrar, ellos)", "cierren", "Valoración: e → ie."),
      toEs("It's good that you have a plan.", "Es bueno que tengas un plan.", "Valoración → subjuntivo.", []),
    ]
  ),
  L(
    "subjunctive-impersonal-ojala-drill-3",
    "b1d-dictado-ojala-impersonal",
    "Dictado: frases largas con ojalá y es + adjetivo + que",
    "Reordena frases completas con expresiones impersonales, ojalá y pronombres.",
    "6 min",
    [
      sec(
        "Orden",
        "Expresión (Es mejor / Ojalá) + que + (sujeto) + (no) + (pronombres) + subjuntivo + resto: Es mejor que no se lo digas todavía.",
        [
          ["Es mejor que no se lo digas todavía.", "It's better not to tell him yet."],
        ],
        [
          mc(
            "Orden natural:",
            ["Ojalá que mis padres me dejen ir al concierto.", "Ojalá mis padres que me dejen ir.", "Ojalá me mis padres dejen ir.", "Que ojalá mis padres dejen me ir."],
            0,
            "Ojalá que + sujeto + pronombre + verbo."
          ),
        ]
      ),
    ],
    [
      wo("Es mejor que no se lo digas a nadie todavía.", "Pronombres + subjuntivo.", "It's better that you don't tell anyone yet."),
      wo("Ojalá que mis padres me dejen ir al concierto.", "Ojalá + dejar.", "I hope my parents let me go to the concert."),
      wo("Es probable que el vuelo salga con retraso.", "Probabilidad.", "The flight will probably leave late."),
      wo("Es una pena que no podamos vernos este verano.", "Valoración + reflexivo.", "It's a shame we can't see each other this summer."),
      fb("Completa.", "Es importante que nos ___ antes del viernes. (llamar, vosotros)", "llaméis", "Importante que + subjuntivo."),
      toEn("Puede que no haya clase mañana.", "There might not be class tomorrow.", "Puede que + haya.", ["There may be no class tomorrow."]),
    ]
  ),
  L(
    "commands-imperative-1",
    "b1d-patron-tu-afirmativo",
    "Práctica de patrones: el imperativo de tú",
    "Habla, come, escribe… y los ocho irregulares (di, haz, ve, pon, sal, sé, ten, ven).",
    "6 min",
    [
      sec(
        "Tú afirmativo",
        "Regular: igual que la forma él del presente: habla, come, escribe, cierra, vuelve. Irregulares: decir → di, hacer → haz, ir → ve, poner → pon, salir → sal, ser → sé, tener → ten, venir → ven.",
        [
          ["Cierra la puerta, por favor.", "Close the door, please."],
          ["Ven aquí y siéntate.", "Come here and sit down."],
        ],
        [
          fb("Da la orden.", "___ la ventana. (abrir, tú)", "Abre", "Regular: abre."),
        ]
      ),
    ],
    [
      fb("Da la orden.", "___ más despacio. (hablar, tú)", "Habla", "Regular."),
      fb("Da la orden.", "___ los deberes ahora. (hacer, tú)", "Haz", "Irregular: haz."),
      fb("Da la orden.", "___ paciencia. (tener, tú)", "Ten", "Irregular: ten."),
      fb("Da la orden.", "___ a la tienda y compra pan. (ir, tú)", "Ve", "Irregular: ve."),
      fb("Da la orden.", "___ la verdad. (decir, tú)", "Di", "Irregular: di."),
      fb("Da la orden.", "___ bueno con tu hermano. (ser, tú)", "Sé", "Irregular: sé."),
      mt(
        "Relaciona el infinitivo con su imperativo de tú.",
        [
          ["poner", "pon"],
          ["salir", "sal"],
          ["venir", "ven"],
          ["volver", "vuelve"],
        ],
        "Irregulares y cambio de raíz."
      ),
      toEs("Come to my house tomorrow.", "Ven a mi casa mañana.", "Venir → ven.", []),
    ]
  ),
  L(
    "commands-imperative-1",
    "b1d-pares-afirmativo-negativo-tu",
    "Pares mínimos: habla / no hables",
    "El tú negativo es otra forma: subjuntivo. Diez pares afirmativo-negativo para fijarlo.",
    "6 min",
    [
      sec(
        "Dos formas para tú",
        "Afirmativo: habla, come, ven, haz. Negativo = no + subjuntivo: no hables, no comas, no vengas, no hagas. Es el error más frecuente: ✗ no habla (→ no hables).",
        [
          ["Come verdura. / No comas tantos dulces.", "Eat vegetables. / Don't eat so many sweets."],
          ["Ven pronto. / No vengas tarde.", "Come early. / Don't come late."],
        ],
        [
          fb("Niégalo.", "Grita. → No ___.", "grites", "No + subjuntivo."),
        ]
      ),
    ],
    [
      fb("Niégalo.", "Corre. → No ___.", "corras", "No + subjuntivo."),
      fb("Niégalo.", "Sal ahora. → No ___ ahora.", "salgas", "Salgo → salgas."),
      fb("Niégalo.", "Pon la tele. → No ___ la tele.", "pongas", "Pongo → pongas."),
      fb("Niégalo.", "Di eso. → No ___ eso.", "digas", "Digo → digas."),
      fb("Niégalo.", "Ve sola. → No ___ sola.", "vayas", "Ir → vayas."),
      fb("Afírmalo.", "No escribas a lápiz. → ___ a bolígrafo.", "Escribe", "Afirmativo regular."),
      fb("Afírmalo.", "No hagas ruido. → ___ tus tareas en silencio.", "Haz", "Irregular: haz."),
      mc(
        "«No ___ la puerta, hace frío.» (abrir, tú)",
        ["abras", "abre", "abres", "abrir"],
        0,
        "No + subjuntivo."
      ),
    ]
  ),
  L(
    "commands-imperative-1",
    "b1d-circuito-usted-ustedes",
    "Circuito: los mandatos de usted y ustedes",
    "Pase, siéntese, no se preocupe: la forma de cortesía usa el subjuntivo en afirmativo y en negativo.",
    "6 min",
    [
      sec(
        "Usted y ustedes = subjuntivo",
        "Usted: hable, coma, venga, haga, vaya. Ustedes: hablen, coman, vengan, hagan, vayan. Afirmativo y negativo usan la misma forma: pase / no pase.",
        [
          ["Pase y siéntese, por favor.", "Come in and sit down, please."],
          ["No se preocupen, todo está bien.", "Don't worry, everything's fine."],
        ],
        [
          fb("Da la orden (usted).", "___ aquí, por favor. (firmar)", "Firme", "Usted → subjuntivo."),
        ]
      ),
    ],
    [
      fb("Da la orden (usted).", "___ la segunda calle a la derecha. (tomar)", "Tome", "Usted → subjuntivo."),
      fb("Da la orden (usted).", "___ mañana a las diez. (volver)", "Vuelva", "o → ue."),
      fb("Da la orden (ustedes).", "___ los móviles, por favor. (apagar)", "Apaguen", "-gar → -gue."),
      fb("Da la orden (ustedes).", "No ___ fotos en el museo. (hacer)", "hagan", "Hago → hagan."),
      fb("Da la orden (usted).", "No ___ nada todavía. (decir)", "diga", "Digo → diga."),
      fb("Da la orden (ustedes).", "___ con cuidado. (conducir)", "Conduzcan", "Conduzco → conduzcan."),
      mc(
        "El médico a un paciente: «___ este jarabe tres veces al día.»",
        ["Tome", "Toma", "Tomes", "Toman"],
        0,
        "Usted → tome."
      ),
      toEs("Please wait here, sir.", "Espere aquí, por favor, señor.", "Usted → espere.", ["Por favor, espere aquí, señor.", "Señor, espere aquí, por favor."]),
    ]
  ),
  L(
    "commands-imperative-1",
    "b1d-ronda-nosotros-vamos",
    "Ronda rápida: mandatos de nosotros (let's…)",
    "Hablemos, comamos, vamos, vámonos: sugerencias con el subjuntivo de nosotros.",
    "5 min",
    [
      sec(
        "Let's…",
        "Afirmativo: subjuntivo de nosotros (hablemos, salgamos) o vamos a + infinitivo. Ir: vamos (no vayamos, en afirmativo). Con se/nos, se pierde la -s: vámonos, sentémonos. Negativo: no + subjuntivo (no vayamos, no nos sentemos).",
        [
          ["Salgamos a cenar esta noche.", "Let's go out for dinner tonight."],
          ["Vámonos, que es tarde.", "Let's go, it's late."],
        ],
        [
          fb("Sugiere.", "___ una pizza. (pedir, nosotros)", "Pidamos", "-ir: e → i."),
        ]
      ),
    ],
    [
      fb("Sugiere.", "___ al cine. (ir, nosotros)", "Vamos", "Ir: vamos en afirmativo."),
      fb("Sugiere.", "___ aquí. (sentarse, nosotros)", "Sentémonos", "Pierde la -s + nos."),
      fb("Sugiere.", "No ___ tan tarde. (acostarse, nosotros)", "nos acostemos", "Negativo: no nos + subjuntivo."),
      fb("Sugiere.", "___ la verdad. (decir, nosotros)", "Digamos", "Digo → digamos."),
      fb("Sugiere.", "No ___ todavía. (irse, nosotros)", "nos vayamos", "Negativo: no nos vayamos."),
      mc(
        "«Es tarde. ¡___!» (irse, nosotros)",
        ["Vámonos", "Vamosnos", "Vayámonos", "Nos vamos a"],
        0,
        "Vamos + nos → vámonos."
      ),
      toEs("Let's have dinner at home tonight.", "Cenemos en casa esta noche.", "Subjuntivo de nosotros.", ["Vamos a cenar en casa esta noche."]),
    ]
  ),
  L(
    "commands-imperative-2",
    "b1d-circuito-pronombres-mandatos",
    "Circuito: pronombres con mandatos (dímelo, no me lo digas)",
    "Pegados en el afirmativo, delante en el negativo: drill de la posición del pronombre en el imperativo.",
    "7 min",
    [
      sec(
        "Pegado o delante",
        "Afirmativo: el pronombre se pega al final y suele necesitar tilde: cómpralo, siéntese, llámame. Negativo: el pronombre va delante del verbo: no lo compres, no se siente, no me llames.",
        [
          ["Llámame esta noche. / No me llames tan tarde.", "Call me tonight. / Don't call me so late."],
          ["Siéntese, por favor. / No se levante.", "Sit down, please. / Don't get up."],
        ],
        [
          fb("Afirma.", "No lo abras. → ___.", "Ábrelo", "Pronombre pegado + tilde."),
        ]
      ),
    ],
    [
      fb("Afirma.", "No me esperes. → ___.", "Espérame", "Pegado + tilde."),
      fb("Afirma.", "No la llames. → ___.", "Llámala", "Pegado + tilde."),
      fb("Afirma.", "No te levantes. → ___.", "Levántate", "Reflexivo pegado."),
      fb("Niega.", "Cómelo. → No ___ comas.", "lo", "Negativo: pronombre delante."),
      fb("Niega.", "Siéntate. → No te ___.", "sientes", "Negativo: te + subjuntivo."),
      fb("Niega (usted).", "Dígame. → No me ___.", "diga", "Negativo usted."),
      ms(
        "¿Qué mandatos son correctos?",
        ["Ponlo aquí.", "No lo pongas aquí.", "No pónlo aquí.", "Lo pon aquí."],
        [0, 1],
        "Afirmativo pegado; negativo delante."
      ),
      toEs("Wait for me at the door.", "Espérame en la puerta.", "Esperar + me.", ["Espérame en la entrada."]),
    ]
  ),
  L(
    "commands-imperative-2",
    "b1d-cuento-receta",
    "Cuento con huecos: la receta de la tortilla",
    "Una receta escrita con mandatos de usted: completa cada paso.",
    "7 min",
    [
      sec(
        "La receta",
        "«Pele las patatas y córtelas en rodajas finas. Caliente el aceite en una sartén. Fría las patatas a fuego lento. Bata los huevos y añada sal. Mezcle todo y deje cuajar la tortilla. Dele la vuelta con un plato. No la cocine demasiado.»",
        [
          ["Pele las patatas y córtelas.", "Peel the potatoes and cut them."],
          ["Dele la vuelta con un plato.", "Flip it with a plate."],
        ],
        [
          mc(
            "¿Cómo se fríen las patatas?",
            ["a fuego lento", "a fuego fuerte", "en el horno", "crudas"],
            0,
            "A fuego lento."
          ),
        ]
      ),
    ],
    [
      fb("Completa (usted).", "___ las patatas. (pelar)", "Pele", "Usted → subjuntivo."),
      fb("Completa (usted).", "___ en rodajas finas. (cortar + las)", "Córtelas", "Pegado + tilde."),
      fb("Completa (usted).", "___ el aceite en una sartén. (calentar)", "Caliente", "e → ie."),
      fb("Completa (usted).", "___ las patatas a fuego lento. (freír)", "Fría", "Freír → fría."),
      fb("Completa (usted).", "___ los huevos y añada sal. (batir)", "Bata", "-ir → -a."),
      fb("Completa (usted).", "No la ___ demasiado. (cocinar)", "cocine", "Negativo: pronombre delante."),
      fb("Completa (tú).", "Pela las patatas y ___ en rodajas. (cortar + las)", "córtalas", "Tú afirmativo + pronombre."),
      toEs("Add salt and mix everything. (usted)", "Añada sal y mezcle todo.", "Usted.", ["Añada sal y mézclelo todo."]),
    ]
  ),
  L(
    "commands-imperative-2",
    "b1d-cadena-tu-usted",
    "Cadena de transformaciones: de tú a usted",
    "El mismo consejo a un amigo y a un cliente: cambia el mandato, el pronombre y el posesivo.",
    "6 min",
    [
      sec(
        "Tú → usted",
        "Siéntate → siéntese. Dime → dígame. No te preocupes → no se preocupe. Pon tu abrigo aquí → ponga su abrigo aquí. Cambian el verbo, el pronombre (te → se/le) y el posesivo (tu → su).",
        [
          ["Pasa y ponte cómodo. → Pase y póngase cómodo.", "Come in and make yourself comfortable."],
        ],
        [
          fb("Tú → usted.", "Espera aquí. → ___ aquí.", "Espere", "Usted → subjuntivo."),
        ]
      ),
    ],
    [
      fb("Tú → usted.", "Dime tu nombre. → Dígame ___ nombre.", "su", "Tu → su."),
      fb("Tú → usted.", "No te preocupes. → No se ___.", "preocupe", "Te → se."),
      fb("Tú → usted.", "Ponte el cinturón. → ___ el cinturón.", "Póngase", "Pegado + tilde."),
      fb("Tú → usted.", "Ven conmigo. → ___ conmigo.", "Venga", "Venir → venga."),
      fb("Tú → usted.", "Haz clic aquí. → ___ clic aquí.", "Haga", "Hacer → haga."),
      fb("Usted → tú.", "No se vaya todavía. → No te ___ todavía.", "vayas", "Negativo tú."),
      mc(
        "«Siéntate y relájate» → usted:",
        ["Siéntese y relájese.", "Siéntate y relájese.", "Se siente y se relaje.", "Siéntase y relájase."],
        0,
        "Usted afirmativo: pegado."
      ),
      toEs("Don't worry, madam, we'll call you.", "No se preocupe, señora, la llamaremos.", "Usted negativo.", ["No se preocupe, señora, le llamaremos."]),
    ]
  ),
  L(
    "commands-imperative-2",
    "b1d-corrige-mandatos",
    "Corrige el párrafo: instrucciones de un compañero de piso",
    "Una nota con mandatos mal formados: no pones, hace, siéntete, no lo toca. Corrígela.",
    "6 min",
    [
      sec(
        "La nota",
        "«Por favor, ✗ no pones (→ no pongas) la música alta. ✗ Hace (→ Haz) la compra el sábado. ✗ No lo toca (→ No lo toques) mi ordenador. ✗ Ve te (→ Vete) si quieres, pero ✗ cierra la (→ ciérrala) puerta con llave.»",
        [
          ["No pongas la música alta.", "Don't play loud music."],
          ["Haz la compra el sábado.", "Do the shopping on Saturday."],
        ],
        [
          fb("Corrige.", "No ___ la música alta. (la nota dice: pones)", "pongas", "Negativo → subjuntivo."),
        ]
      ),
    ],
    [
      fb("Corrige.", "___ la compra el sábado. (la nota dice: Hace)", "Haz", "Tú afirmativo irregular."),
      fb("Corrige.", "No lo ___, es mi ordenador. (la nota dice: toca)", "toques", "Negativo: -car → -que."),
      fb("Corrige.", "___ si quieres. (la nota dice: Ve te)", "Vete", "Irse → vete."),
      fb("Corrige.", "___ con llave. (la nota dice: cierra la)", "Ciérrala", "Pegado + tilde."),
      fb("Corrige.", "No ___ tarde. (la nota dice: vuelves)", "vuelvas", "Negativo → subjuntivo."),
      mc(
        "¿Qué mandato está bien?",
        ["No me llames antes de las diez.", "No llámame antes de las diez.", "No me llamas antes de las diez.", "Me no llames."],
        0,
        "No + pronombre + subjuntivo."
      ),
      toEs("Don't leave your shoes in the hall.", "No dejes los zapatos en el pasillo.", "Negativo tú.", ["No dejes tus zapatos en el pasillo."]),
    ]
  ),
  L(
    "commands-imperative-2",
    "b1d-habla-de-ti-consejos",
    "Habla de ti: consejos a un amigo que empieza en tu ciudad",
    "Traduce consejos con imperativos de tú, afirmativos y negativos, con pronombres.",
    "6 min",
    [
      sec(
        "Dar consejos directos",
        "Entre amigos se usa el imperativo sin problema: Compra el abono de transporte. No cojas taxis, son carísimos. Pruébalo todo. No te pierdas el mercado.",
        [
          ["No te pierdas el mercado del domingo.", "Don't miss the Sunday market."],
        ],
        [
          mc(
            "«___ el abono de transporte.» (comprar, tú)",
            ["Compra", "Compres", "Compre", "No compres"],
            0,
            "Tú afirmativo."
          ),
        ]
      ),
    ],
    [
      toEs("Buy a transport card.", "Compra un abono de transporte.", "Tú afirmativo.", ["Cómprate un abono de transporte."]),
      toEs("Don't take taxis; they're very expensive.", "No cojas taxis, son carísimos.", "Negativo tú.", ["No tomes taxis, son carísimos.", "No cojas taxis; son muy caros."]),
      toEs("Try the local food.", "Prueba la comida local.", "Probar → prueba.", ["Prueba la comida típica."]),
      toEs("Don't miss the old town.", "No te pierdas el casco antiguo.", "No te + subjuntivo.", ["No te pierdas el centro histórico."]),
      fb("Completa.", "___ la aplicación del metro. (descargar + te)", "Descárgate", "Pegado + tilde."),
      fb("Completa.", "No ___ la cartera en el bolsillo de atrás. (llevar)", "lleves", "Negativo."),
      wo("Sal a pasear por el río y no te olvides de la cámara.", "Afirmativo + negativo.", "Go for a walk by the river and don't forget your camera."),
    ]
  ),
  L(
    "commands-drill-3",
    "b1d-ronda-mandatos-mezcla",
    "Ronda rápida: 12 mandatos sin pistas",
    "Tú, usted, ustedes, nosotros; afirmativo y negativo; con y sin pronombre.",
    "6 min",
    [
      sec(
        "Checklist",
        "¿Quién? ¿Afirmativo o negativo? Tú afirmativo = presente él (o irregular). Todo lo demás = subjuntivo. ¿Pronombre? Pegado en el afirmativo, delante en el negativo.",
        [
          ["Hazlo tú. / No lo haga usted. / Hagámoslo.", "You do it. / Don't do it (formal). / Let's do it."],
        ],
        [
          fb("Rápido.", "(tú, +) ___ la mesa. (poner)", "Pon", "Irregular."),
        ]
      ),
    ],
    [
      fb("Rápido.", "(tú, –) No ___ la mesa. (poner)", "pongas", "Negativo → subjuntivo."),
      fb("Rápido.", "(usted, +) ___ aquí. (sentarse)", "Siéntese", "Pegado + tilde."),
      fb("Rápido.", "(ustedes, –) No ___ nada. (tocar)", "toquen", "-car → -que."),
      fb("Rápido.", "(nosotros, +) ___ un taxi. (llamar)", "Llamemos", "Nosotros → subjuntivo."),
      fb("Rápido.", "(tú, +) ___ la verdad. (decirme)", "Dime", "Di + me."),
      fb("Rápido.", "(tú, –) No me ___ mentiras. (decir)", "digas", "Negativo."),
      fb("Rápido.", "(usted, –) No ___ preocupe. (se)", "se", "Pronombre delante."),
      mc(
        "(vosotros no, ustedes, +) «___ las manos antes de comer.» (lavarse)",
        ["Lávense", "Lávanse", "Se laven", "Lavense se"],
        0,
        "Ustedes afirmativo + se."
      ),
    ]
  ),
  L(
    "commands-drill-3",
    "b1d-frase-a-frase-dobles-mandato",
    "Frase a frase: mandatos con dos pronombres",
    "Dámelo, díselo, no se lo digas: mandatos con objeto indirecto + directo.",
    "7 min",
    [
      sec(
        "Dos pronombres en el mandato",
        "Afirmativo: verbo + indirecto + directo, todo junto y con tilde: dámelo, explícaselo, tráiganmelas. Negativo: no + indirecto + directo + verbo: no me lo des, no se lo expliques. Le/les + lo → se lo.",
        [
          ["¿El libro? Dámelo, por favor.", "The book? Give it to me, please."],
          ["¿La noticia? No se la digas a nadie.", "The news? Don't tell anyone."],
        ],
        [
          fb("Afirma.", "No me lo des. → ___.", "Dámelo", "Pegado + tilde."),
        ]
      ),
    ],
    [
      fb("Afirma.", "No se lo expliques. → ___.", "Explícaselo", "Pegado + tilde."),
      fb("Afirma (usted).", "No me la traiga. → ___.", "Tráigamela", "Usted + me + la."),
      fb("Niega.", "Cuéntaselo. → No se lo ___.", "cuentes", "o → ue en subjuntivo."),
      fb("Niega.", "Pónmelos aquí. → No me los ___ aquí.", "pongas", "Negativo."),
      fb("Sustituye.", "Dile la verdad a tu madre. → ___.", "Dísela", "Le + la → se la."),
      mc(
        "«¿Las fotos? ___ a mis padres.» (enseñar, tú)",
        ["Enséñaselas", "Enseñales las", "Se las enseña", "Enséñalesla"],
        0,
        "Les + las → se las, pegado."
      ),
      toEs("The keys? Give them to me.", "¿Las llaves? Dámelas.", "Dar + me + las.", []),
      toEn("¿El regalo? No se lo enseñes todavía.", "The present? Don't show it to her yet.", "Negativo con se lo.", ["The gift? Don't show it to him yet."]),
    ]
  ),
  L(
    "commands-drill-3",
    "b1d-elige-explica-mandatos",
    "Elige y explica: ¿qué forma de mandato y por qué?",
    "Escoge el mandato correcto y la razón (tú/usted, afirmativo/negativo, pronombre).",
    "6 min",
    [
      sec(
        "Tres preguntas",
        "1) ¿Tú, usted, nosotros, ustedes, vosotros? 2) ¿Afirmativo o negativo? 3) ¿Hay pronombre? Con las tres respuestas, la forma sale sola.",
        [
          ["No se lo digas (tú, negativo, dos pronombres).", "Don't tell him (informal)."],
        ],
        [
          mc(
            "A tu jefa: «___ un momento, por favor.» (esperar)",
            ["Espere — usted afirmativo", "Espera — tú afirmativo", "No espere — negativo", "Esperes — tú negativo"],
            0,
            "Usted."
          ),
        ]
      ),
    ],
    [
      mc(
        "A tu hermano pequeño: «No ___ con la boca llena.» (hablar)",
        ["hables — tú negativo", "habla — tú afirmativo", "hable — usted", "hablad — vosotros"],
        0,
        "Tú negativo."
      ),
      mc(
        "A unos clientes: «___ sus abrigos aquí.» (dejar)",
        ["Dejen — ustedes", "Deja — tú", "Dejad — vosotros", "Dejemos — nosotros"],
        0,
        "Ustedes."
      ),
      mc(
        "A tu amiga, con la bufanda: «___, hace frío.» (ponerse + la)",
        ["Póntela — tú + dos pronombres", "Te la pon — orden incorrecto", "Pónganla — ustedes", "No te la pongas — negativo"],
        0,
        "Tú afirmativo pegado."
      ),
      fb("Completa.", "Al taxista: «___ aquí, por favor.» (parar, usted)", "Pare", "Usted afirmativo."),
      fb("Completa.", "A tus amigos (Latinoamérica): «No ___ tarde.» (llegar, ustedes)", "lleguen", "Ustedes negativo."),
      toEs("To your friend: Tell me everything.", "Cuéntamelo todo.", "Tú + me + lo.", ["Cuéntame todo."]),
    ]
  ),
  L(
    "commands-drill-3",
    "b1d-cuento-instrucciones-examen",
    "Cuento con huecos: instrucciones para el examen",
    "Un profesor da instrucciones a la clase con mandatos de ustedes: afirmativos, negativos y con pronombres.",
    "6 min",
    [
      sec(
        "Las instrucciones",
        "«Siéntense y apaguen los móviles. Escriban su nombre en la primera hoja. No hablen con sus compañeros. Si tienen dudas, levanten la mano. Al terminar, entréguenme el examen y salgan en silencio.»",
        [
          ["Siéntense y apaguen los móviles.", "Sit down and turn off your phones."],
        ],
        [
          fb("Completa.", "___ y apaguen los móviles. (sentarse)", "Siéntense", "Ustedes + se, tilde."),
        ]
      ),
    ],
    [
      fb("Completa.", "___ su nombre en la primera hoja. (escribir)", "Escriban", "Ustedes afirmativo."),
      fb("Completa.", "No ___ con sus compañeros. (hablar)", "hablen", "Ustedes negativo."),
      fb("Completa.", "Si tienen dudas, ___ la mano. (levantar)", "levanten", "Ustedes afirmativo."),
      fb("Completa.", "Al terminar, ___ el examen. (entregar + me)", "entréguenme", "Pegado + tilde."),
      fb("Completa.", "___ en silencio. (salir)", "Salgan", "Salgo → salgan."),
      fb("Completa.", "No ___ el diccionario. (usar)", "usen", "Negativo."),
      toEs("Don't copy from your classmates.", "No copien de sus compañeros.", "Ustedes negativo.", ["No copiéis de vuestros compañeros."]),
    ]
  ),
  L(
    "commands-drill-3",
    "b1d-pares-imperativo-subjuntivo-deseo",
    "Pares mínimos: «Ven» / «Quiero que vengas»",
    "El mismo pedido como orden directa o como deseo: imperativo vs. querer que + subjuntivo.",
    "6 min",
    [
      sec(
        "Directo o suavizado",
        "Orden directa: Ven. Llámame. No salgas. Deseo o petición indirecta: Quiero que vengas. Te pido que me llames. Prefiero que no salgas. El negativo de tú y el subjuntivo comparten forma: no salgas / que no salgas.",
        [
          ["Llámame. → Te pido que me llames.", "Call me. → I'm asking you to call me."],
        ],
        [
          fb("Suaviza.", "Ven a las ocho. → Quiero que ___ a las ocho.", "vengas", "Querer que + subjuntivo."),
        ]
      ),
    ],
    [
      fb("Suaviza.", "Hazlo hoy. → Te pido que lo ___ hoy.", "hagas", "Pedir que + subjuntivo."),
      fb("Suaviza.", "Dime la verdad. → Necesito que me ___ la verdad.", "digas", "Necesitar que + subjuntivo."),
      fb("Directo.", "Quiero que te sientes. → ___.", "Siéntate", "Imperativo + te."),
      fb("Directo.", "Prefiero que no grites. → No ___ tanto, por favor. (hablar alto)", "grites", "Negativo = subjuntivo."),
      fb("Directo.", "Te pido que me esperes. → ___.", "Espérame", "Imperativo + me."),
      mc(
        "¿Cuál es más cortés?",
        ["Te pido que me ayudes.", "Ayúdame.", "¡Ayuda!", "Ayuda ya."],
        0,
        "Petición indirecta."
      ),
      toEs("I want you to listen to me. — Listen to me!", "Quiero que me escuches. — ¡Escúchame!", "Subjuntivo vs. imperativo.", []),
    ]
  ),
  L(
    "commands-drill-3",
    "b1d-habla-de-ti-normas-casa",
    "Habla de ti: las normas de tu casa",
    "Escribe (traduciendo) las normas de tu casa para un invitado: mandatos de tú y de usted.",
    "6 min",
    [
      sec(
        "Normas para invitados",
        "Informal (tú): Quítate los zapatos. No toques al gato. Sírvete lo que quieras. Formal (usted): Póngase cómodo. No se preocupe por los platos.",
        [
          ["Quítate los zapatos en la entrada.", "Take your shoes off at the entrance."],
        ],
        [
          mc(
            "«___ lo que quieras de la nevera.» (servirse, tú)",
            ["Sírvete", "Sírvese", "Te sirves", "No te sirvas"],
            0,
            "Tú + te, tilde."
          ),
        ]
      ),
    ],
    [
      toEs("Take off your shoes, please.", "Quítate los zapatos, por favor.", "Tú + te.", ["Por favor, quítate los zapatos."]),
      toEs("Don't touch the cat; he's grumpy.", "No toques al gato, que es gruñón.", "Negativo + personal a.", ["No toques al gato, es gruñón."]),
      toEs("Make yourself comfortable. (usted)", "Póngase cómodo.", "Usted + se.", ["Póngase cómoda.", "Póngase usted cómodo."]),
      toEs("Don't worry about the dishes. (usted)", "No se preocupe por los platos.", "Usted negativo.", []),
      fb("Completa.", "___ la luz al salir. (apagar, tú)", "Apaga", "Tú afirmativo."),
      fb("Completa.", "No ___ la puerta abierta. (dejar, tú)", "dejes", "Negativo."),
      wo("Si tienes hambre, prepárate algo en la cocina.", "Si + presente + imperativo.", "If you're hungry, make yourself something in the kitchen."),
    ]
  ),
  L(
    "commands-drill-3",
    "b1d-practica-mezclada-mandatos",
    "Práctica mezclada: mandatos en situaciones reales",
    "Direcciones, recetas, médico, oficina y amigos: cinco situaciones, todos los tipos de mandato.",
    "7 min",
    [
      sec(
        "Situaciones",
        "Direcciones: siga recto, gire a la izquierda. Médico: tome, descanse, no beba alcohol. Oficina: mándeme el informe. Amigos: tráeme…, no te olvides de…",
        [
          ["Siga recto y gire en el semáforo.", "Go straight on and turn at the traffic lights."],
        ],
        [
          fb("Direcciones (usted).", "___ recto hasta la plaza. (seguir)", "Siga", "e → i."),
        ]
      ),
    ],
    [
      fb("Médico (usted).", "No ___ alcohol esta semana. (beber)", "beba", "Usted negativo."),
      fb("Médico (usted).", "___ mucho y beba agua. (descansar)", "Descanse", "Usted afirmativo."),
      fb("Oficina (usted).", "___ el informe antes de las cinco. (mandar + me)", "Mándeme", "Pegado + tilde."),
      fb("Amigos (tú).", "No te ___ del pan. (olvidar)", "olvides", "Negativo."),
      fb("Amigos (tú).", "___ un café, porfa. (traer + me)", "Tráeme", "Tú + me."),
      fb("Direcciones (usted).", "___ la calle en el paso de cebra. (cruzar)", "Cruce", "-zar → -ce."),
      mc(
        "Un cartel: «No ___ el césped.»",
        ["pisen", "pisan", "pisad", "pisar no"],
        0,
        "Ustedes negativo."
      ),
      toEs("Turn left at the church. (usted)", "Gire a la izquierda en la iglesia.", "Usted afirmativo.", ["Tuerza a la izquierda en la iglesia."]),
    ]
  ),
  L(
    "commands-drill-3",
    "b1d-dictado-mandatos",
    "Dictado: mandatos largos con pronombres",
    "Reordena instrucciones completas con pronombres pegados o antepuestos.",
    "6 min",
    [
      sec(
        "Orden en el mandato",
        "Afirmativo: el verbo va primero con los pronombres pegados (Explícaselo despacio). Negativo: no + pronombres + verbo (No se lo expliques todavía).",
        [
          ["Explícaselo despacio a tu hermano.", "Explain it slowly to your brother."],
        ],
        [
          mc(
            "Orden correcto:",
            ["No se lo digas a nadie.", "No digas se lo a nadie.", "No lo se digas.", "Se lo no digas."],
            0,
            "No + se lo + verbo."
          ),
        ]
      ),
    ],
    [
      wo("No se lo digas a nadie hasta mañana.", "Negativo con dos pronombres.", "Don't tell anyone until tomorrow."),
      wo("Tráeme las llaves que están en la mesa.", "Tú + me.", "Bring me the keys that are on the table."),
      wo("Por favor, siéntense y abran el libro por la página diez.", "Ustedes.", "Please sit down and open the book to page ten."),
      wo("Vámonos ya, que va a llover.", "Nosotros + irse.", "Let's go now, it's going to rain."),
      fb("Completa.", "No ___ lo compres todavía. (a mí → me)", "me", "Negativo: me lo."),
      toEn("Dígaselo usted, por favor.", "You tell him, please.", "Usted + se lo.", ["Please tell him yourself.", "You tell her, please."]),
    ]
  ),
  L(
    "conditional-tense-1",
    "b1d-patron-condicional",
    "Práctica de patrones: el condicional en todas las personas",
    "Infinitivo + -ía, -ías, -ía, -íamos, -íais, -ían: un marco fijo para automatizar las terminaciones.",
    "6 min",
    [
      sec(
        "Las terminaciones del imperfecto, sobre el infinitivo",
        "Hablar → hablaría, hablarías, hablaría, hablaríamos, hablaríais, hablarían. Todas llevan tilde en la í. Las raíces irregulares son las del futuro: tendr-, pondr-, saldr-, vendr-, dir-, har-, podr-, querr-, sabr-, habr-.",
        [
          ["Yo en tu lugar hablaría con ella.", "In your place I'd talk to her."],
          ["¿Podrías ayudarme?", "Could you help me?"],
        ],
        [
          fb("Completa.", "Con más tiempo, yo ___ más. (leer)", "leería", "Infinitivo + -ía."),
        ]
      ),
    ],
    [
      fb("Mismo marco.", "Con más tiempo, tú ___ más. (viajar)", "viajarías", "Condicional: -ías."),
      fb("Mismo marco.", "Con más tiempo, mi padre ___ más. (descansar)", "descansaría", "Condicional: -ía."),
      fb("Mismo marco.", "Con más tiempo, nosotros ___ más. (salir)", "saldríamos", "Raíz saldr-."),
      fb("Mismo marco.", "Con más tiempo, vosotros ___ más deporte. (hacer)", "haríais", "Raíz har-."),
      fb("Mismo marco.", "Con más tiempo, mis amigos ___ a verme. (venir)", "vendrían", "Raíz vendr-."),
      mt(
        "Relaciona el infinitivo con su condicional (yo).",
        [
          ["decir", "diría"],
          ["poner", "pondría"],
          ["saber", "sabría"],
          ["querer", "querría"],
        ],
        "Mismas raíces que el futuro."
      ),
      toEs("With more money, we would buy a house.", "Con más dinero, compraríamos una casa.", "Condicional nosotros.", ["Con más dinero compraríamos una casa."]),
      wo("En tu lugar, yo no diría nada todavía.", "Condicional de consejo.", "In your place, I wouldn't say anything yet."),
    ]
  ),
  L(
    "conditional-tense-1",
    "b1d-pares-futuro-condicional",
    "Pares mínimos: hablaré / hablaría",
    "Futuro (will) y condicional (would) se parecen mucho: entrena la diferencia de forma y de sentido.",
    "6 min",
    [
      sec(
        "Dos tiempos con la misma raíz",
        "Futuro: tendré, tendrás, tendrá (-é, -ás, -á). Condicional: tendría, tendrías, tendría (-ía). Futuro = lo que va a pasar. Condicional = lo que pasaría, cortesía o consejo.",
        [
          ["Mañana tendré tiempo. / Con un coche tendría más tiempo.", "Tomorrow I'll have time. / With a car I'd have more time."],
        ],
        [
          mc(
            "¿Cuál es condicional?",
            ["haría", "haré", "hará", "hacía"],
            0,
            "-ía sobre la raíz har-."
          ),
        ]
      ),
    ],
    [
      mc(
        "«¿___ abrir la ventana, por favor?» (petición cortés)",
        ["Podrías", "Podrás", "Puedes siempre", "Pudiste"],
        0,
        "Cortesía → condicional."
      ),
      mc(
        "«El año que viene ___ en Italia.» (plan)",
        ["viviré", "viviría", "vivía", "viví"],
        0,
        "Plan → futuro."
      ),
      fb("Futuro → condicional.", "Diré la verdad. → En tu lugar, yo ___ la verdad.", "diría", "Dir- + -ía."),
      fb("Futuro → condicional.", "Saldremos a las ocho. → Nosotros no ___ tan tarde.", "saldríamos", "Saldr- + -íamos."),
      fb("Condicional → futuro.", "Podría ir. → Mañana ___ ir.", "podré", "Podr- + -é."),
      fb("Condicional → futuro.", "Tendrían problemas. → Seguro que ___ problemas.", "tendrán", "Tendr- + -án."),
      ms(
        "¿Qué formas son de condicional?",
        ["vendría", "vendrá", "pondríamos", "sabríais"],
        [0, 2, 3],
        "Vendrá es futuro."
      ),
      toEs("I'll call you tomorrow. / I would call her.", "Te llamaré mañana. / Yo la llamaría.", "Futuro vs. condicional.", ["Mañana te llamaré. / Yo la llamaría."]),
    ]
  ),
  L(
    "conditional-tense-1",
    "b1d-ronda-cortesia",
    "Ronda rápida: peticiones corteses con el condicional",
    "¿Podría…? ¿Le importaría…? Me gustaría… Querría…: suaviza cada petición.",
    "5 min",
    [
      sec(
        "Suavizar",
        "Directo: ¿Me das agua? Cortés: ¿Me podrías dar agua? Muy cortés: ¿Le importaría darme un vaso de agua? Deseo: Me gustaría + infinitivo (me gustaría reservar una mesa).",
        [
          ["¿Le importaría cerrar la ventana?", "Would you mind closing the window?"],
          ["Me gustaría hablar con el director.", "I'd like to speak to the director."],
        ],
        [
          fb("Suaviza.", "¿Me ayudas? → ¿Me ___ ayudar? (poder, tú)", "podrías", "Podr- + -ías."),
        ]
      ),
    ],
    [
      fb("Suaviza.", "Quiero una mesa junto a la ventana. → ___ una mesa junto a la ventana. (querer, yo)", "Querría", "Querr- + -ía."),
      fb("Suaviza.", "Quiero reservar. → Me ___ reservar una mesa.", "gustaría", "Me gustaría + infinitivo."),
      fb("Suaviza.", "¿Cierra la puerta? → ¿Le ___ cerrar la puerta? (importar)", "importaría", "¿Le importaría…?"),
      fb("Suaviza.", "¿Me dices la hora? → ¿Me ___ decir la hora? (poder, usted)", "podría", "Usted → podría."),
      fb("Suaviza.", "Debes descansar. → ___ descansar. (deber, tú)", "Deberías", "Consejo suave."),
      mc(
        "La forma más cortés:",
        ["¿Le importaría esperar un momento?", "Espere.", "¿Espera?", "Tienes que esperar."],
        0,
        "¿Le importaría…?"
      ),
      toEs("Could you repeat that, please? (usted)", "¿Podría repetirlo, por favor?", "Podría + infinitivo.", ["¿Podría repetir eso, por favor?"]),
    ]
  ),
  L(
    "conditional-tense-2",
    "b1d-habla-de-ti-millon",
    "Habla de ti: ¿qué harías con un millón?",
    "Traduce tus planes imaginarios: compraría, viajaría, ayudaría… sin «si», solo con el condicional.",
    "6 min",
    [
      sec(
        "Imaginar",
        "Con el condicional imaginas situaciones: Con un millón, yo compraría una casa en la playa. En tu lugar, lo aceptaría. Yo que tú, no lo haría.",
        [
          ["Con un millón de euros, dejaría de trabajar.", "With a million euros, I'd stop working."],
        ],
        [
          mc(
            "«Con un millón, ___ el mundo.» (recorrer, yo)",
            ["recorrería", "recorreré", "recorría", "recorrí"],
            0,
            "Imaginación → condicional."
          ),
        ]
      ),
    ],
    [
      toEs("With a million, I would buy a house by the sea.", "Con un millón, compraría una casa junto al mar.", "Condicional.", ["Con un millón compraría una casa cerca del mar."]),
      toEs("I would give money to my family.", "Le daría dinero a mi familia.", "Dar → daría.", ["Daría dinero a mi familia."]),
      toEs("We would travel around the world.", "Viajaríamos por todo el mundo.", "Nosotros.", ["Daríamos la vuelta al mundo."]),
      toEs("I wouldn't stop working.", "No dejaría de trabajar.", "Negativo.", []),
      fb("Completa.", "Mis padres no ___ que trabajar nunca más. (tener)", "tendrían", "Tendr- + -ían."),
      fb("Completa.", "Yo ___ una fundación para ayudar a los animales. (crear)", "crearía", "Crear → crearía."),
      wo("Con tanto dinero no sabría qué hacer primero.", "Sabr- + -ía.", "With so much money I wouldn't know what to do first."),
    ]
  ),
  L(
    "conditional-tense-2",
    "b1d-cadena-consejos-yo-que-tu",
    "Cadena de transformaciones: de «deberías» a «yo que tú»",
    "Tres maneras de aconsejar con el condicional: deberías, podrías, yo que tú / yo en tu lugar.",
    "6 min",
    [
      sec(
        "Aconsejar",
        "Deberías + infinitivo (you should). Podrías + infinitivo (you could). Yo que tú / Yo en tu lugar + condicional (if I were you). Tú deberías descansar → Yo que tú, descansaría.",
        [
          ["Deberías ir al médico. → Yo que tú, iría al médico.", "You should go to the doctor. → If I were you, I'd go to the doctor."],
        ],
        [
          fb("Transforma.", "Deberías dormir más. → Yo que tú, ___ más.", "dormiría", "Yo que tú + condicional."),
        ]
      ),
    ],
    [
      fb("Transforma.", "Deberías hablar con tu jefe. → Yo en tu lugar, ___ con tu jefe.", "hablaría", "Condicional yo."),
      fb("Transforma.", "Deberías decírselo. → Yo que tú, se lo ___.", "diría", "Dir- + -ía."),
      fb("Transforma.", "Yo que tú, lo haría hoy. → ___ hacerlo hoy. (deber, tú)", "Deberías", "Deber + infinitivo."),
      fb("Transforma.", "Yo en tu lugar, saldría más. → ___ salir más. (poder, tú)", "Podrías", "Sugerencia."),
      fb("Completa.", "Yo que tú, no ___ ese coche. (comprar)", "compraría", "Negativo."),
      mc(
        "«Yo en tu lugar, ___ un abrigo.» (ponerse)",
        ["me pondría", "te pondrías", "me pondré", "me ponía"],
        0,
        "Yo + me pondría."
      ),
      toEs("If I were you, I'd take the job.", "Yo que tú, aceptaría el trabajo.", "Yo que tú + condicional.", ["Yo en tu lugar, aceptaría el trabajo.", "Yo que tú aceptaría el trabajo."]),
    ]
  ),
  L(
    "conditional-tense-2",
    "b1d-corrige-condicional",
    "Corrige el párrafo: condicionales mal formados",
    "Un correo con tenería, hacería, poderías y confusiones con el futuro. Corrígelo.",
    "6 min",
    [
      sec(
        "El correo",
        "«Hola, Laura: me ✗ gustará (→ gustaría) reservar una habitación. ¿✗ Poderías (→ Podrías) decirme el precio? Yo ✗ tenería (→ tendría) que llegar tarde. ✗ Hacería (→ Haría) falta un parking. ¿Le ✗ importará (→ importaría) confirmarlo?»",
        [
          ["Me gustaría reservar una habitación.", "I'd like to book a room."],
        ],
        [
          fb("Corrige.", "Me ___ reservar una habitación. (el correo dice: gustará)", "gustaría", "Cortesía → condicional."),
        ]
      ),
    ],
    [
      fb("Corrige.", "¿___ decirme el precio? (el correo dice: Poderías)", "Podrías", "Raíz podr-."),
      fb("Corrige.", "Yo ___ que llegar tarde. (el correo dice: tenería)", "tendría", "Raíz tendr-."),
      fb("Corrige.", "___ falta un parking. (el correo dice: Hacería)", "Haría", "Raíz har-."),
      fb("Corrige.", "¿Le ___ confirmarlo? (el correo dice: importará)", "importaría", "Cortesía → condicional."),
      fb("Corrige.", "¿___ tener la habitación antes de las doce? (el correo dice: Poderíamos)", "Podríamos", "Raíz podr-."),
      mc(
        "¿Cuál está bien?",
        ["Sabría decirme dónde está la estación?", "¿Sabería decirme dónde está la estación?", "¿Sabría decirme dónde está la estación?", "¿Sabrá decirme dónde estaba?"],
        2,
        "Sabr- + -ía, con los dos signos de interrogación."
      ),
      toEs("Would it be possible to change the date?", "¿Sería posible cambiar la fecha?", "Ser → sería.", []),
    ]
  ),
  L(
    "conditional-tense-2",
    "b1d-preguntas-que-harias",
    "Preguntas y respuestas: ¿qué harías tú?",
    "Situaciones difíciles: responde qué harías con el condicional, en la persona correcta.",
    "6 min",
    [
      sec(
        "Responder en condicional",
        "—¿Qué harías en mi situación? —Hablaría con él. —¿Qué haríais vosotros? —Nosotros no diríamos nada. La pregunta tú → respuesta yo; vosotros → nosotros.",
        [
          ["—¿Qué harías? —Llamaría a la policía.", "What would you do? — I'd call the police."],
        ],
        [
          fb("Responde.", "—¿Qué harías con un perro perdido? —Lo ___ al veterinario. (llevar)", "llevaría", "Tú → yo."),
        ]
      ),
    ],
    [
      fb("Responde.", "—¿Dirías la verdad? —Sí, la ___.", "diría", "Tú → yo."),
      fb("Responde.", "—¿Qué haríais con la cartera? —La ___ a la policía. (entregar)", "entregaríamos", "Vosotros → nosotros."),
      fb("Responde.", "—¿Aceptarías el trabajo? —No, no lo ___.", "aceptaría", "Tú → yo."),
      fb("Responde.", "—¿Adónde irías de vacaciones? —___ a Japón.", "Iría", "Ir → iría."),
      fb("Responde.", "—¿Vendríais a la boda? —Claro, ___ encantados.", "vendríamos", "Venir → vendríamos."),
      mc(
        "«—¿Qué le dirías a tu jefe? —Le ___ que necesito vacaciones.»",
        ["diría", "diré", "decía", "digo ayer"],
        0,
        "Condicional yo."
      ),
      toEs("—Would you lend him money? —No, I wouldn't lend it to him.", "—¿Le prestarías dinero? —No, no se lo prestaría.", "Condicional + se lo.", ["—¿Le prestarías dinero? —No, no le prestaría dinero."]),
    ]
  ),
  L(
    "conditional-tense-drill-3",
    "b1d-ronda-condicional-irregulares",
    "Ronda rápida: 12 condicionales, regulares e irregulares",
    "Raíces irregulares mezcladas con regulares, en todas las personas.",
    "5 min",
    [
      sec(
        "Checklist",
        "¿Raíz irregular? (tendr-, pondr-, saldr-, vendr-, dir-, har-, podr-, querr-, sabr-, habr-) Si no, infinitivo entero. Luego -ía, -ías, -ía, -íamos, -íais, -ían.",
        [
          ["Tendría, diríamos, harían, viviríais.", "I'd have, we'd say, they'd do, you'd live."],
        ],
        [
          fb("Rápido.", "yo ___ (poder)", "podría", "Podr-."),
        ]
      ),
    ],
    [
      fb("Rápido.", "tú ___ (salir)", "saldrías", "Saldr-."),
      fb("Rápido.", "ella ___ (comer)", "comería", "Regular."),
      fb("Rápido.", "nosotros ___ (decir)", "diríamos", "Condicional: Dir-."),
      fb("Rápido.", "vosotros ___ (poner)", "pondríais", "Pondr-."),
      fb("Rápido.", "ellos ___ (saber)", "sabrían", "Sabr-."),
      fb("Rápido.", "usted ___ (venir)", "vendría", "Vendr-."),
      fb("Rápido.", "yo ___ (escribir)", "escribiría", "Regular."),
      mc(
        "«Con buen tiempo ___ más gente en la playa.» (haber)",
        ["habría", "habrá", "había", "haya"],
        0,
        "Habr- + -ía."
      ),
    ]
  ),
  L(
    "conditional-tense-drill-3",
    "b1d-cuento-cambio-de-vida",
    "Cuento con huecos: una vida diferente",
    "Clara imagina cómo sería su vida en otro país: completa el texto con condicionales.",
    "6 min",
    [
      sec(
        "El texto",
        "«A veces pienso en otra vida. En Australia viviría cerca del mar, trabajaría en un hotel y saldría a surfear todas las mañanas. Mis padres vendrían a verme en Navidad. Tendría menos dinero, pero sería más feliz. ¿O no?»",
        [
          ["Tendría menos dinero, pero sería más feliz.", "I'd have less money, but I'd be happier."],
        ],
        [
          mc(
            "¿Qué haría Clara por las mañanas?",
            ["surfear", "trabajar en un banco", "estudiar", "dormir"],
            0,
            "Saldría a surfear."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "En Australia ___ cerca del mar. (vivir)", "viviría", "Condicional."),
      fb("Completa.", "___ en un hotel. (trabajar)", "Trabajaría", "Condicional."),
      fb("Completa.", "___ a surfear todas las mañanas. (salir)", "Saldría", "Saldr-."),
      fb("Completa.", "Mis padres ___ a verme en Navidad. (venir)", "vendrían", "Vendr-."),
      fb("Completa.", "___ menos dinero. (tener)", "Tendría", "Tendr-."),
      fb("Completa.", "Pero ___ más feliz. (ser)", "sería", "Ser → sería."),
      toEs("I would learn English and make new friends.", "Aprendería inglés y haría nuevos amigos.", "Regular + har-.", ["Aprendería inglés y haría amigos nuevos."]),
    ]
  ),
  L(
    "conditional-tense-drill-3",
    "b1d-elige-explica-condicional",
    "Elige y explica: cortesía, consejo o situación imaginaria",
    "Tres usos del condicional: identifica cuál aparece en cada frase.",
    "6 min",
    [
      sec(
        "Tres usos",
        "Cortesía: ¿Podría ayudarme? Consejo: Deberías / Yo que tú… Situación imaginaria: En mi pueblo ideal, no habría coches.",
        [
          ["En una ciudad ideal, todos irían en bici.", "In an ideal city, everyone would go by bike."],
        ],
        [
          mc(
            "«¿Me pasarías la sal?»",
            ["cortesía", "consejo", "situación imaginaria", "futuro"],
            0,
            "Petición suavizada."
          ),
        ]
      ),
    ],
    [
      mc("«Yo que tú, estudiaría más.»", ["consejo", "cortesía", "situación imaginaria", "pasado"], 0, "Yo que tú = consejo."),
      mc("«En mi casa ideal habría una piscina.»", ["situación imaginaria", "cortesía", "consejo", "futuro"], 0, "Imaginación."),
      mc("«¿Le importaría hablar más bajo?»", ["cortesía", "consejo", "situación imaginaria", "orden directa"], 0, "Cortesía."),
      mc("«Deberías dejar de fumar.»", ["consejo", "cortesía", "situación imaginaria", "futuro"], 0, "Deberías = consejo."),
      fb("Completa (cortesía).", "¿___ usted repetir la pregunta? (poder)", "Podría", "Cortesía."),
      fb("Completa (consejo).", "___ llevar paraguas; va a llover. (deber, tú)", "Deberías", "Consejo."),
      fb("Completa (imaginación).", "En un mundo perfecto, nadie ___ hambre. (pasar)", "pasaría", "Imaginación."),
      toEs("You should call your grandmother more.", "Deberías llamar más a tu abuela.", "Consejo.", ["Deberías llamar a tu abuela más a menudo."]),
    ]
  ),
  L(
    "conditional-tense-drill-3",
    "b1d-frase-a-frase-reserva",
    "Frase a frase: reservar por teléfono",
    "Construye una llamada cortés a un hotel usando el condicional en cada petición.",
    "6 min",
    [
      sec(
        "La llamada",
        "«Buenos días. Me gustaría reservar una habitación doble para el sábado. ¿Sería posible tener vistas al mar? ¿Podría decirme el precio? ¿Le importaría enviarme la confirmación por correo? Muchas gracias.»",
        [
          ["¿Sería posible tener vistas al mar?", "Would it be possible to have a sea view?"],
        ],
        [
          fb("Completa.", "Me ___ reservar una habitación doble.", "gustaría", "Me gustaría + infinitivo."),
        ]
      ),
    ],
    [
      fb("Completa.", "¿___ posible tener vistas al mar? (ser)", "Sería", "Cortesía."),
      fb("Completa.", "¿___ decirme el precio? (poder, usted)", "Podría", "Cortesía."),
      fb("Completa.", "¿Le ___ enviarme la confirmación? (importar)", "importaría", "Cortesía."),
      fb("Completa.", "___ llegar sobre las diez de la noche. (preferir, yo)", "Preferiría", "Preferir → preferiría."),
      wo("¿Tendrían una habitación libre para esta noche?", "Pregunta cortés.", "Would you have a room available for tonight?"),
      toEs("I would like to cancel my reservation.", "Me gustaría cancelar mi reserva.", "Me gustaría.", ["Quisiera cancelar mi reserva.", "Querría cancelar mi reserva."]),
    ]
  ),
  L(
    "conditional-tense-drill-3",
    "b1d-practica-mezclada-futuro-condicional",
    "Práctica mezclada: futuro y condicional juntos",
    "Planes seguros (futuro) y planes imaginarios o corteses (condicional) en un mismo ejercicio.",
    "6 min",
    [
      sec(
        "Dos futuros",
        "Seguro/planeado: El año que viene estudiaré en Lima. Imaginado/cortés: En Lima estudiaría gastronomía. ¿Podrías ayudarme a buscar piso?",
        [
          ["Mañana iré al banco; yo que tú, iría hoy.", "Tomorrow I'll go to the bank; if I were you, I'd go today."],
        ],
        [
          fb("Completa.", "Mañana ___ al banco. (ir, yo — plan)", "iré", "Plan → futuro."),
        ]
      ),
    ],
    [
      fb("Completa.", "Yo que tú, ___ hoy. (ir)", "iría", "Consejo → condicional."),
      fb("Completa.", "El sábado ___ una fiesta. (hacer, nosotros — plan)", "haremos", "Plan → futuro."),
      fb("Completa.", "En una fiesta perfecta ___ música en directo. (haber)", "habría", "Imaginación."),
      fb("Completa.", "¿Me ___ con las sillas? (ayudar, tú — cortés)", "ayudarías", "Cortesía."),
      fb("Completa.", "Seguro que ___ mucha gente. (venir)", "vendrá", "Predicción segura → futuro."),
      mc(
        "«Te prometo que no ___ tarde.» (llegar)",
        ["llegaré", "llegaría", "llegaba", "llegue"],
        0,
        "Promesa → futuro."
      ),
      toEs("I'll finish soon. Could you wait?", "Terminaré pronto. ¿Podrías esperar?", "Futuro + condicional.", ["Acabaré pronto. ¿Podrías esperar?"]),
    ]
  ),
  L(
    "si-clauses-simple-1",
    "b1d-patron-si-presente-futuro",
    "Práctica de patrones: si + presente, futuro",
    "Si llueve, me quedaré en casa: un marco fijo, muchas condiciones reales.",
    "6 min",
    [
      sec(
        "Condición real",
        "Si + presente de indicativo, + futuro / presente / imperativo. Nunca futuro ni subjuntivo después de si: ✗ Si lloverá, ✗ Si llueva → ✓ Si llueve.",
        [
          ["Si tengo tiempo, te llamaré.", "If I have time, I'll call you."],
          ["Si estás cansado, descansa.", "If you're tired, rest."],
        ],
        [
          fb("Completa.", "Si ___ dinero, viajaré a Chile. (ahorrar, yo)", "ahorro", "Si + presente."),
        ]
      ),
    ],
    [
      fb("Completa.", "Si llueve, nos ___ en casa. (quedar, futuro)", "quedaremos", "Resultado en futuro."),
      fb("Completa.", "Si ___ tarde, avísame. (llegar, tú)", "llegas", "Si + presente."),
      fb("Completa.", "Si no estudias, no ___. (aprobar, futuro)", "aprobarás", "Resultado en futuro."),
      fb("Completa.", "Si ___ frío, ponte el abrigo. (hacer)", "hace", "Si + presente + imperativo."),
      fb("Completa.", "Si mis padres ___, haremos una barbacoa. (venir)", "vienen", "Si + presente."),
      mc(
        "¿Cuál es correcta?",
        ["Si tienes hambre, come algo.", "Si tendrás hambre, come algo.", "Si tengas hambre, come algo.", "Si tienes hambre, comerías."],
        0,
        "Si + presente + imperativo."
      ),
      toEs("If you call me, I'll come.", "Si me llamas, vendré.", "Si + presente + futuro.", ["Si me llamas, voy."]),
      wo("Si el tren sale a tiempo, llegaremos antes de las diez.", "Si + presente + futuro.", "If the train leaves on time, we'll arrive before ten."),
    ]
  ),
  L(
    "si-clauses-simple-1",
    "b1d-corrige-si-futuro",
    "Corrige el párrafo: nunca futuro después de si",
    "Un mensaje con «si vendrás» y «si tengas»: el error más típico de las condicionales.",
    "6 min",
    [
      sec(
        "El mensaje",
        "«Si ✗ vendrás (→ vienes) el sábado, prepararé paella. Si ✗ tengas (→ tienes) tiempo, trae postre. Si ✗ lloverá (→ llueve), comeremos dentro.» Después de si: presente de indicativo.",
        [
          ["Si vienes el sábado, prepararé paella.", "If you come on Saturday, I'll make paella."],
        ],
        [
          fb("Corrige.", "Si ___ el sábado, prepararé paella. (el mensaje dice: vendrás)", "vienes", "Si + presente."),
        ]
      ),
    ],
    [
      fb("Corrige.", "Si ___ tiempo, trae postre. (el mensaje dice: tengas)", "tienes", "Si + presente de indicativo."),
      fb("Corrige.", "Si ___, comeremos dentro. (el mensaje dice: lloverá)", "llueve", "Si + presente."),
      fb("Corrige.", "Si ___ mucha gente, necesitaremos más sillas. (el mensaje dice: habrá)", "hay", "Si + presente."),
      fb("Corrige.", "Si no ___ venir, dímelo. (el mensaje dice: podrás)", "puedes", "Si + presente."),
      mc(
        "¿Cuál es correcta?",
        ["Si sales tarde, perderás el autobús.", "Si saldrás tarde, pierdes el autobús.", "Si salgas tarde, perderás el autobús.", "Si saldrías tarde, perderás."],
        0,
        "Si + presente + futuro."
      ),
      toEs("If there's traffic, we'll arrive late.", "Si hay tráfico, llegaremos tarde.", "Si + presente + futuro.", ["Si hay atasco, llegaremos tarde."]),
    ]
  ),
  L(
    "si-clauses-simple-1",
    "b1d-pares-si-cuando",
    "Pares mínimos: si / cuando",
    "Si llueve (tal vez) / cuando llueve (siempre que llueve): condición incierta vs. rutina.",
    "6 min",
    [
      sec(
        "Incierto o habitual",
        "Si + presente: condición que puede o no cumplirse (Si llueve, no iremos). Cuando + presente: rutina, siempre ocurre (Cuando llueve, la calle se inunda).",
        [
          ["Cuando hace calor, vamos a la piscina.", "When it's hot, we go to the pool."],
          ["Si hace calor mañana, iremos a la piscina.", "If it's hot tomorrow, we'll go to the pool."],
        ],
        [
          mc(
            "«___ tengo hambre por la noche, como fruta.» (rutina)",
            ["Cuando", "Si mañana", "Si fuera", "Para"],
            0,
            "Rutina → cuando."
          ),
        ]
      ),
    ],
    [
      mc(
        "«___ encuentro trabajo este año, me mudaré.» (incierto)",
        ["Si", "Cuando siempre", "Cuando", "Porque"],
        0,
        "Incierto → si."
      ),
      fb("Si o cuando.", "___ mi abuela viene, siempre trae churros.", "Cuando", "Rutina."),
      fb("Si o cuando.", "___ mi abuela viene mañana, iremos al parque.", "Si", "Condición única e incierta."),
      fb("Si o cuando.", "___ estoy triste, llamo a mi hermana.", "Cuando", "Rutina."),
      fb("Si o cuando.", "___ ganamos el partido, iremos a la final.", "Si", "Incierto."),
      fb("Completa.", "Cuando ___ tarde, mi perro me espera en la puerta. (llegar, yo)", "llego", "Cuando + presente (rutina)."),
      toEs("When I'm stressed, I go running.", "Cuando estoy estresado, salgo a correr.", "Rutina → cuando.", ["Cuando estoy estresada, salgo a correr."]),
    ]
  ),
  L(
    "si-clauses-simple-2",
    "b1d-habla-de-ti-planes-condiciones",
    "Habla de ti: planes con condiciones",
    "Traduce tus planes para el fin de semana y el año, cada uno con una condición.",
    "6 min",
    [
      sec(
        "Planes condicionados",
        "Si hace buen tiempo, iré a la montaña. Si me dan vacaciones, viajaré. Si no estoy cansado, saldré. La condición en presente; el plan en futuro o ir a.",
        [
          ["Si me dan vacaciones en agosto, iré a Perú.", "If they give me vacation in August, I'll go to Peru."],
        ],
        [
          mc(
            "«Si ___ buen tiempo, iré a la playa.»",
            ["hace", "hará", "haga", "haría"],
            0,
            "Si + presente."
          ),
        ]
      ),
    ],
    [
      toEs("If it's sunny, I'll go to the mountains.", "Si hace sol, iré a la montaña.", "Si + presente + futuro.", ["Si hace sol, voy a ir a la montaña."]),
      toEs("If I'm not tired, I'll go out with my friends.", "Si no estoy cansado, saldré con mis amigos.", "Si + presente + futuro.", ["Si no estoy cansada, saldré con mis amigos."]),
      toEs("If I save enough, I'll buy a car.", "Si ahorro lo suficiente, me compraré un coche.", "Si + presente + futuro.", ["Si ahorro bastante, compraré un coche."]),
      toEs("If you want, come with me.", "Si quieres, ven conmigo.", "Si + presente + imperativo.", []),
      fb("Completa.", "Si ___ el examen, lo celebraremos. (aprobar, yo)", "apruebo", "o → ue."),
      fb("Completa.", "Si no ___ nada que hacer, os llamo. (tener, yo)", "tengo", "Si + presente."),
      wo("Si terminamos pronto, podemos ir al cine.", "Si + presente + presente.", "If we finish early, we can go to the cinema."),
    ]
  ),
  L(
    "si-clauses-simple-2",
    "b1d-cadena-condicion-resultado",
    "Cadena de transformaciones: la cadena de consecuencias",
    "Si estudio, apruebo; si apruebo, me gradúo; si me gradúo… Cada resultado se convierte en la siguiente condición.",
    "6 min",
    [
      sec(
        "Encadenar",
        "El resultado de una frase pasa a ser la condición de la siguiente, siempre en presente después de si: Si ahorro, compraré una bici. Si compro una bici, iré al trabajo en bici. Si voy en bici, estaré más en forma.",
        [
          ["Si compro una bici, iré al trabajo en bici.", "If I buy a bike, I'll cycle to work."],
        ],
        [
          fb("Encadena.", "Si voy en bici, ___ más en forma. (estar, futuro)", "estaré", "Resultado en futuro."),
        ]
      ),
    ],
    [
      fb("Encadena.", "Si estoy en forma, ___ más energía. (tener, futuro)", "tendré", "Tendr-."),
      fb("Encadena.", "Si ___ más energía, trabajaré mejor. (tener, yo)", "tengo", "Condición en presente."),
      fb("Encadena.", "Si trabajo mejor, me ___ el sueldo. (subir, ellos, futuro)", "subirán", "Futuro."),
      fb("Encadena.", "Si me ___ el sueldo, viajaré más. (subir, ellos)", "suben", "Condición en presente."),
      fb("Encadena.", "Si viajo más, ___ más idiomas. (aprender, futuro)", "aprenderé", "Futuro."),
      mc(
        "«Si aprendo más idiomas…»",
        ["…conoceré a más gente.", "…conocería siempre.", "…conozca a gente.", "…conocía a gente."],
        0,
        "Si + presente + futuro."
      ),
      toEs("If I learn more languages, I'll find a better job.", "Si aprendo más idiomas, encontraré un trabajo mejor.", "Si + presente + futuro.", ["Si aprendo más idiomas, encontraré un mejor trabajo."]),
    ]
  ),
  L(
    "si-clauses-simple-2",
    "b1d-ronda-si-imperativo",
    "Ronda rápida: si + presente + mandato",
    "Instrucciones con condición: si tienes dudas, pregunta; si no puedes, no vengas.",
    "5 min",
    [
      sec(
        "Condición + orden",
        "Si + presente, + imperativo (afirmativo o negativo): Si ves a Juan, salúdalo. Si estás enfermo, no vayas a trabajar.",
        [
          ["Si ves a Juan, salúdalo de mi parte.", "If you see Juan, say hi from me."],
        ],
        [
          fb("Rápido.", "Si tienes dudas, ___ al profesor. (preguntar, tú)", "pregúntale", "Imperativo + le."),
        ]
      ),
    ],
    [
      fb("Rápido.", "Si estás enfermo, no ___ a trabajar. (ir, tú)", "vayas", "Negativo tú."),
      fb("Rápido.", "Si llegas antes, ___ la puerta. (abrir, tú)", "abre", "Imperativo tú."),
      fb("Rápido.", "Si hace frío, ___ la calefacción. (poner, tú)", "pon", "Irregular."),
      fb("Rápido.", "Si no le gusta la sopa, no se la ___. (servir, usted)", "sirva", "Usted negativo."),
      fb("Rápido.", "Si os perdéis, ___ a la policía. (llamar, vosotros)", "llamad", "Vosotros afirmativo."),
      fb("Rápido.", "Si ___ algo, llámame. (necesitar, tú)", "necesitas", "Si + presente."),
      mc(
        "«Si no entiendes algo, ___.»",
        ["pregúntamelo", "me lo preguntas ayer", "preguntármelo", "me pregunta"],
        0,
        "Imperativo + me + lo."
      ),
      toEs("If you see my keys, give them to me.", "Si ves mis llaves, dámelas.", "Si + presente + imperativo.", []),
    ]
  ),
  L(
    "si-clauses-drill-3",
    "b1d-cuento-si-viaje",
    "Cuento con huecos: la lista de la mochila",
    "Un padre prepara a su hijo para una excursión: condiciones reales con futuro e imperativo.",
    "6 min",
    [
      sec(
        "La lista",
        "«Si hace sol, ponte la gorra. Si tienes sed, bebe agua de la cantimplora. Si te pierdes, quédate quieto y llámame. Si todo va bien, volveréis a las seis. Si no volvéis a las seis, iré a buscaros.»",
        [
          ["Si te pierdes, quédate quieto.", "If you get lost, stay still."],
        ],
        [
          mc(
            "¿Qué debe hacer el hijo si se pierde?",
            ["quedarse quieto y llamar", "correr", "volver solo", "buscar la carretera"],
            0,
            "Quédate quieto y llámame."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "Si hace sol, ___ la gorra. (ponerse, tú)", "ponte", "Pon + te."),
      fb("Completa.", "Si ___ sed, bebe agua. (tener, tú)", "tienes", "Si + presente."),
      fb("Completa.", "Si te ___, quédate quieto. (perder)", "pierdes", "e → ie."),
      fb("Completa.", "Si todo va bien, ___ a las seis. (volver, vosotros)", "volveréis", "Futuro vosotros."),
      fb("Completa.", "Si no volvéis, ___ a buscaros. (ir, yo)", "iré", "Futuro."),
      toEs("If it rains, come back to the car.", "Si llueve, volved al coche.", "Vosotros imperativo.", ["Si llueve, vuelve al coche.", "Si llueve, regresen al coche."]),
    ]
  ),
  L(
    "si-clauses-drill-3",
    "b1d-elige-explica-si",
    "Elige y explica: ¿qué tiempo va después de si y qué tiempo en el resultado?",
    "Elige la combinación correcta y justifícala: presente + futuro, presente + presente, presente + imperativo.",
    "6 min",
    [
      sec(
        "Tres combinaciones",
        "Si + presente + futuro: consecuencia futura (Si vienes, te enseñaré la casa). Si + presente + presente: verdad general (Si calientas el hielo, se derrite). Si + presente + imperativo: instrucción (Si llegas tarde, llama).",
        [
          ["Si mezclas azul y amarillo, sale verde.", "If you mix blue and yellow, you get green."],
        ],
        [
          mc(
            "«Si calientas el agua a 100 grados, ___.»",
            ["hierve — verdad general", "hervirá mañana — futuro", "hierva — subjuntivo", "hervía — pasado"],
            0,
            "Verdad general → presente."
          ),
        ]
      ),
    ],
    [
      mc(
        "«Si me invitas, ___.»",
        ["iré — consecuencia futura", "iría — cortesía", "vaya — subjuntivo", "fui — pasado"],
        0,
        "Futuro."
      ),
      mc(
        "«Si tienes frío, ___ la ventana.»",
        ["cierra — instrucción", "cerrarás siempre — hábito", "cierres — negativo", "cerrabas — pasado"],
        0,
        "Imperativo."
      ),
      fb("Completa.", "Si no comes, ___ hambre. (tener, tú, futuro)", "tendrás", "Consecuencia futura."),
      fb("Completa.", "Si dejas la leche fuera, se ___. (estropear, presente)", "estropea", "Verdad general."),
      fb("Completa.", "Si ves a Marta, ___ que la llamaré. (decir + le, tú)", "dile", "Instrucción."),
      fb("Completa.", "Si ___ el agua, se congela. (enfriar, tú)", "enfrías", "Si + presente."),
      toEs("If you heat ice, it melts.", "Si calientas el hielo, se derrite.", "Verdad general.", []),
    ]
  ),
  L(
    "si-clauses-drill-3",
    "b1d-preguntas-que-pasara-si",
    "Preguntas y respuestas: ¿qué pasará si…?",
    "Responde a preguntas sobre consecuencias con si + presente y futuro.",
    "6 min",
    [
      sec(
        "Consecuencias",
        "—¿Qué pasará si no llegas a tiempo? —Si no llego a tiempo, perderé el vuelo. Repite la condición en presente y da la consecuencia en futuro.",
        [
          ["—¿Qué harás si no te dan el trabajo? —Si no me lo dan, seguiré buscando.", "What will you do if you don't get the job? — If they don't give it to me, I'll keep looking."],
        ],
        [
          fb("Responde.", "—¿Qué pasará si llueve? —Si llueve, ___ la fiesta. (cancelar, nosotros)", "cancelaremos", "Futuro."),
        ]
      ),
    ],
    [
      fb("Responde.", "—¿Qué harás si pierdes el tren? —Si lo pierdo, ___ el autobús. (coger)", "cogeré", "Futuro."),
      fb("Responde.", "—¿Qué harás si hace buen tiempo? —Si hace buen tiempo, ___ en el jardín. (comer, nosotros)", "comeremos", "Futuro."),
      fb("Responde.", "—¿Y si no hay entradas? —Si no ___ entradas, veremos otra película.", "hay", "Si + presente."),
      fb("Responde.", "—¿Y si tu jefe se niega? —Si ___ que no, buscaré otro trabajo. (decir)", "dice", "Si + presente."),
      fb("Responde.", "—¿Vendrás si te invito? —Si me invitas, ___ encantada.", "vendré", "Futuro."),
      mc(
        "«—¿Qué pasará si no riegas las plantas? —Si no las riego, ___.»",
        ["se secarán", "se secarían", "se secaban", "se sequen"],
        0,
        "Consecuencia → futuro."
      ),
      toEs("—What will you do if it rains? —If it rains, I'll stay home.", "—¿Qué harás si llueve? —Si llueve, me quedaré en casa.", "Si + presente + futuro.", []),
    ]
  ),
  L(
    "si-clauses-drill-3",
    "b1d-practica-mezclada-si-subjuntivo",
    "Práctica mezclada: si, cuando, ojalá y espero que",
    "Condiciones, rutinas y deseos en un mismo ejercicio: cuidado, solo los deseos llevan subjuntivo.",
    "6 min",
    [
      sec(
        "Cuatro estructuras",
        "Si + presente (condición). Cuando + presente (rutina). Ojalá + subjuntivo (deseo). Espero que + subjuntivo (deseo). Compara: Si viene, me alegraré. / Ojalá venga. / Espero que venga.",
        [
          ["Si viene, me alegraré. / Ojalá venga.", "If he comes, I'll be happy. / I hope he comes."],
        ],
        [
          fb("Completa.", "Ojalá ___ mañana. (venir, él)", "venga", "Ojalá + subjuntivo."),
        ]
      ),
    ],
    [
      fb("Completa.", "Si ___ mañana, iremos al museo. (venir, él)", "viene", "Si + presente."),
      fb("Completa.", "Espero que ___ buen tiempo. (hacer)", "haga", "Espero que + subjuntivo."),
      fb("Completa.", "Si ___ buen tiempo, saldremos. (hacer)", "hace", "Si + presente."),
      fb("Completa.", "Cuando ___ buen tiempo, salimos al balcón. (hacer)", "hace", "Rutina → presente."),
      fb("Completa.", "Es posible que ___ mañana. (llover)", "llueva", "Posibilidad → subjuntivo."),
      fb("Completa.", "Si ___ mañana, no iremos. (llover)", "llueve", "Si + presente."),
      mc(
        "«Si ___ tiempo, ven a verme.»",
        ["tienes", "tengas", "tendrás", "tuvieras"],
        0,
        "Si + presente."
      ),
      toEs("I hope you pass. If you pass, we'll celebrate.", "Espero que apruebes. Si apruebas, lo celebraremos.", "Subjuntivo vs. si + presente.", ["Ojalá apruebes. Si apruebas, lo celebraremos."]),
    ]
  ),
  L(
    "si-clauses-drill-3",
    "b1d-dictado-condiciones",
    "Dictado: condiciones largas",
    "Reordena frases con si, pronombres y futuro o imperativo.",
    "5 min",
    [
      sec(
        "Orden",
        "La cláusula con si puede ir primero (con coma) o después (sin coma): Si me llamas, iré. = Iré si me llamas.",
        [
          ["Iré a la fiesta si me acompañas.", "I'll go to the party if you come with me."],
        ],
        [
          mc(
            "¿Cuál es correcta?",
            ["Te lo explicaré si me lo pides.", "Te lo explicaré si me lo pedirás.", "Si me lo pedirás, te lo explico.", "Te lo explicaré si me lo pidas."],
            0,
            "Si + presente."
          ),
        ]
      ),
    ],
    [
      wo("Si no te gusta la comida, no te la comas.", "Si + presente + imperativo negativo.", "If you don't like the food, don't eat it."),
      wo("Te llamaré si tengo noticias.", "Futuro + si.", "I'll call you if I have news."),
      wo("Si mis padres me dejan, iré contigo a la playa.", "Si + presente + futuro.", "If my parents let me, I'll go with you to the beach."),
      fb("Completa.", "Si ___ el informe hoy, te lo mando mañana. (terminar, yo)", "termino", "Si + presente."),
      toEn("Si os aburrís, venid a mi casa.", "If you get bored, come to my house.", "Si + presente + imperativo vosotros.", ["If you're bored, come over to my place."]),
    ]
  ),
  L(
    "present-perfect-1",
    "b1d-patron-he-has-ha",
    "Práctica de patrones: he, has, ha + participio",
    "Haber en presente + participio: un marco fijo con todas las personas.",
    "6 min",
    [
      sec(
        "Haber + participio",
        "He, has, ha, hemos, habéis, han + participio (-ado / -ido). El participio no cambia: he comido, han comido. Nada se mete entre haber y el participio.",
        [
          ["Hoy he trabajado mucho.", "I've worked a lot today."],
          ["¿Has comido ya?", "Have you eaten yet?"],
        ],
        [
          fb("Completa.", "Esta semana ___ al gimnasio tres veces. (ir, yo)", "he ido", "He + ido."),
        ]
      ),
    ],
    [
      fb("Mismo marco.", "Esta semana tú ___ mucho. (trabajar)", "has trabajado", "Has + -ado."),
      fb("Mismo marco.", "Esta semana mi hermano ___ poco. (dormir)", "ha dormido", "Ha + -ido."),
      fb("Mismo marco.", "Esta semana nosotros ___ en casa. (cenar)", "hemos cenado", "Hemos + -ado."),
      fb("Mismo marco.", "Esta semana vosotros ___ mucho. (salir)", "habéis salido", "Habéis + -ido."),
      fb("Mismo marco.", "Esta semana mis padres ___ de viaje. (volver)", "han vuelto", "Participio irregular: vuelto."),
      mt(
        "Relaciona el sujeto con la forma de haber.",
        [
          ["yo", "he"],
          ["usted", "ha"],
          ["nosotras", "hemos"],
          ["ustedes", "han"],
        ],
        "Presente de haber."
      ),
      toEs("We have eaten too much today.", "Hoy hemos comido demasiado.", "Hemos + participio.", ["Hemos comido demasiado hoy."]),
      wo("Este año mis hijos han aprendido a nadar.", "Han + participio.", "This year my kids have learned to swim."),
    ]
  ),
  L(
    "present-perfect-1",
    "b1d-circuito-participios-irregulares",
    "Circuito: los participios irregulares",
    "Hecho, dicho, escrito, visto, puesto, vuelto, roto, abierto, muerto, cubierto: rota los diez.",
    "6 min",
    [
      sec(
        "Los diez más frecuentes",
        "hacer → hecho, decir → dicho, escribir → escrito, ver → visto, poner → puesto, volver → vuelto, romper → roto, abrir → abierto, morir → muerto, cubrir → cubierto. Los compuestos siguen el modelo: descubrir → descubierto, devolver → devuelto.",
        [
          ["¿Has visto mis gafas?", "Have you seen my glasses?"],
          ["Se ha roto el vaso.", "The glass has broken."],
        ],
        [
          fb("Participio.", "Todavía no he ___ los deberes. (hacer)", "hecho", "Hacer → hecho."),
        ]
      ),
    ],
    [
      fb("Participio.", "¿Qué te ha ___ el médico? (decir)", "dicho", "Decir → dicho."),
      fb("Participio.", "He ___ una carta a mi abuela. (escribir)", "escrito", "Escribir → escrito."),
      fb("Participio.", "¿Dónde has ___ las llaves? (poner)", "puesto", "Poner → puesto."),
      fb("Participio.", "Mi hijo ha ___ la ventana. (romper)", "roto", "Romper → roto."),
      fb("Participio.", "Ya han ___ la tienda. (abrir)", "abierto", "Abrir → abierto."),
      fb("Participio.", "¿Todavía no ha ___ tu hermano? (volver)", "vuelto", "Volver → vuelto."),
      ms(
        "¿Qué participios son correctos?",
        ["descubierto", "devuelto", "hacido", "rompido"],
        [0, 1],
        "Hecho, roto."
      ),
      toEs("Have you seen the new movie?", "¿Has visto la película nueva?", "Ver → visto.", ["¿Has visto la nueva película?"]),
    ]
  ),
  L(
    "present-perfect-1",
    "b1d-habla-de-ti-alguna-vez",
    "Habla de ti: ¿alguna vez has…?",
    "Experiencias de vida: traduce lo que has hecho (y lo que nunca has hecho) con el pretérito perfecto.",
    "6 min",
    [
      sec(
        "Experiencias",
        "¿Alguna vez has…? — Sí, he… / No, nunca he… Expresiones útiles: alguna vez, nunca, todavía no, ya, varias veces, en mi vida.",
        [
          ["—¿Alguna vez has comido pulpo? —Sí, varias veces.", "Have you ever eaten octopus? — Yes, several times."],
          ["Nunca he estado en Asia.", "I've never been to Asia."],
        ],
        [
          mc(
            "«I've never been to Mexico» →",
            ["Nunca he estado en México.", "Nunca estuve en México ayer.", "Nunca he estar en México.", "No nunca he estado."],
            0,
            "Nunca + he estado."
          ),
        ]
      ),
    ],
    [
      toEs("Have you ever been to Spain?", "¿Alguna vez has estado en España?", "Experiencia.", ["¿Has estado alguna vez en España?", "¿Has ido alguna vez a España?"]),
      toEs("I've seen that movie three times.", "He visto esa película tres veces.", "Ver → visto.", []),
      toEs("I've never written a book.", "Nunca he escrito un libro.", "Escribir → escrito.", ["No he escrito nunca un libro."]),
      toEs("We haven't decided yet.", "Todavía no hemos decidido.", "Todavía no.", ["Aún no hemos decidido."]),
      fb("Completa.", "¿Alguna vez ___ en un concierto de rock? (estar, tú)", "has estado", "Experiencia."),
      fb("Completa.", "Mis padres nunca ___ en avión. (viajar)", "han viajado", "Nunca + perfecto."),
      wo("En mi vida he visto un paisaje tan bonito.", "Perfecto de experiencia.", "I've never in my life seen such a beautiful landscape."),
    ]
  ),
  L(
    "present-perfect-1",
    "b1d-pares-perfecto-preterito",
    "Pares mínimos: he comido / comí",
    "Hoy he comido paella / Ayer comí paella: el marcador de tiempo decide (sobre todo en España).",
    "6 min",
    [
      sec(
        "¿Tiempo terminado o no?",
        "Pretérito perfecto (España): hoy, esta mañana, esta semana, este año, ya, todavía, alguna vez. Pretérito indefinido: ayer, anoche, el lunes pasado, en 2019, hace dos años. En gran parte de Latinoamérica se prefiere el indefinido en ambos casos.",
        [
          ["Esta mañana he desayunado fruta. / Ayer desayuné churros.", "This morning I had fruit. / Yesterday I had churros."],
        ],
        [
          mc(
            "«Este año ___ mucho.» (viajar, nosotros — España)",
            ["hemos viajado", "viajamos ayer", "viajábamos", "viajaremos"],
            0,
            "Este año = periodo no terminado."
          ),
        ]
      ),
    ],
    [
      mc(
        "«En 2019 ___ a Japón.» (ir, yo)",
        ["fui", "he ido", "iba", "iré"],
        0,
        "Fecha terminada → indefinido."
      ),
      fb("Completa (España).", "Hoy ___ temprano. (levantarse, yo)", "me he levantado", "Hoy → perfecto."),
      fb("Completa.", "Ayer ___ tarde. (levantarse, yo)", "me levanté", "Ayer → indefinido."),
      fb("Completa (España).", "Este mes no ___ ninguna película. (ver, yo)", "he visto", "Este mes → perfecto."),
      fb("Completa.", "La semana pasada no ___ nada. (hacer, yo)", "hice", "Semana pasada → indefinido."),
      fb("Completa.", "Hace dos años ___ el carné de conducir. (sacar, yo)", "saqué", "Hace dos años → indefinido."),
      ms(
        "¿Qué marcadores van con el pretérito perfecto (España)?",
        ["hoy", "esta mañana", "ayer", "este mes"],
        [0, 1, 3],
        "Ayer → indefinido."
      ),
      toEs("This morning I've drunk two coffees.", "Esta mañana me he tomado dos cafés.", "Esta mañana → perfecto.", ["Esta mañana he tomado dos cafés.", "Esta mañana he bebido dos cafés."]),
    ]
  ),
  L(
    "present-perfect-2",
    "b1d-corrige-perfecto",
    "Corrige el párrafo: participios y pronombres",
    "Un correo con hacido, escribido, he lo visto y ha me dicho. Corrígelo.",
    "6 min",
    [
      sec(
        "El correo",
        "«Hola, jefa: ya ✗ he hacido (→ he hecho) el informe y ✗ he escribido (→ he escrito) a los clientes. ✗ He lo mandado (→ Lo he mandado) esta mañana. Pedro ✗ ha me dicho (→ me ha dicho) que usted ✗ ha volvido (→ ha vuelto) de vacaciones.»",
        [
          ["Lo he mandado esta mañana.", "I sent it this morning."],
          ["Pedro me ha dicho que ha vuelto.", "Pedro told me you're back."],
        ],
        [
          fb("Corrige.", "Ya he ___ el informe. (el correo dice: hacido)", "hecho", "Participio irregular."),
        ]
      ),
    ],
    [
      fb("Corrige.", "He ___ a los clientes. (el correo dice: escribido)", "escrito", "Participio irregular."),
      fb("Corrige.", "___ he mandado esta mañana. (el correo dice: He lo…)", "Lo", "Pronombre antes de haber."),
      fb("Corrige.", "Pedro ___ ha dicho que usted está aquí. (el correo dice: ha me)", "me", "Pronombre antes de haber."),
      fb("Corrige.", "Usted ha ___ de vacaciones. (el correo dice: volvido)", "vuelto", "Volver → vuelto."),
      fb("Corrige.", "Se ha ___ la impresora. (el correo dice: rompido)", "roto", "Romper → roto."),
      mc(
        "¿Cuál está bien?",
        ["Nos han dicho que ya han abierto la oficina.", "Han nos dicho que ya han abrido.", "Nos han dicho que ya han abrido la oficina.", "Han dicho nos que abierto."],
        0,
        "Pronombre antes; abierto."
      ),
      toEs("I've already sent it to her.", "Ya se lo he mandado.", "Se lo + he + participio.", ["Ya se lo he enviado."]),
    ]
  ),
  L(
    "present-perfect-2",
    "b1d-ronda-ya-todavia",
    "Ronda rápida: ya / todavía no",
    "¿Has hecho la maleta? — Sí, ya la he hecho / No, todavía no la he hecho. Responde a toda velocidad.",
    "5 min",
    [
      sec(
        "Ya y todavía no",
        "Ya = already (ya he comido). Todavía no / aún no = not yet (todavía no he comido). Con pronombres: Ya la he hecho. Todavía no lo he visto.",
        [
          ["—¿Has llamado a mamá? —Sí, ya la he llamado.", "Have you called Mom? — Yes, I've already called her."],
        ],
        [
          fb("Responde (sí).", "—¿Has comprado el pan? —Sí, ya lo ___.", "he comprado", "Ya + he + participio."),
        ]
      ),
    ],
    [
      fb("Responde (no).", "—¿Has hecho la maleta? —No, todavía no la ___.", "he hecho", "Todavía no + he hecho."),
      fb("Responde (sí).", "—¿Habéis visto la exposición? —Sí, ya la ___.", "hemos visto", "Ver → visto."),
      fb("Responde (no).", "—¿Ha venido el técnico? —No, todavía no ___. (llegar)", "ha llegado", "Todavía no."),
      fb("Responde (sí).", "—¿El cliente te pagó? —Sí, ya me ___ la factura. (pagar, perfecto)", "ha pagado", "Ya + han + participio."),
      fb("Responde (no).", "—¿Has escrito el correo? —No, aún no lo ___.", "he escrito", "Aún no."),
      fb("Responde (sí).", "—¿Os habéis despertado? —Sí, ya nos ___.", "hemos despertado", "Reflexivo."),
      mc(
        "«—¿Has puesto la mesa? —No, ___.»",
        ["todavía no la he puesto", "ya la he puesto", "todavía no la puse mañana", "no la he ponido"],
        0,
        "Todavía no + puesto."
      ),
      toEs("I haven't finished yet.", "Todavía no he terminado.", "Todavía no.", ["Aún no he terminado.", "No he terminado todavía."]),
    ]
  ),
  L(
    "present-perfect-2",
    "b1d-cuento-dia-horrible",
    "Cuento con huecos: ¡qué día he tenido!",
    "Alguien cuenta por la noche todo lo que le ha pasado hoy: perfecto con participios irregulares.",
    "6 min",
    [
      sec(
        "El día",
        "«¡Qué día he tenido! Me he despertado tarde, he perdido el autobús y he llegado tarde a la reunión. Mi jefe me ha dicho que no puede ser. Luego he roto una taza. Al final he vuelto a casa y me he dado un baño.»",
        [
          ["He perdido el autobús.", "I missed the bus."],
          ["He roto una taza.", "I broke a mug."],
        ],
        [
          mc(
            "¿Qué ha hecho al final del día?",
            ["se ha dado un baño", "ha ido al cine", "ha llamado a su jefe", "ha salido a cenar"],
            0,
            "Me he dado un baño."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "Me ___ tarde. (despertar)", "he despertado", "Reflexivo + perfecto."),
      fb("Completa.", "___ el autobús. (perder, yo)", "He perdido", "Perfecto."),
      fb("Completa.", "Mi jefe me ___ que no puede ser. (decir)", "ha dicho", "Decir → dicho."),
      fb("Completa.", "Luego ___ una taza. (romper, yo)", "he roto", "Romper → roto."),
      fb("Completa.", "Al final ___ a casa. (volver, yo)", "he vuelto", "Volver → vuelto."),
      fb("Completa.", "Me ___ un baño. (dar)", "he dado", "Dar → dado."),
      toEs("What a day I've had!", "¡Qué día he tenido!", "Perfecto.", ["¡Menudo día he tenido!"]),
    ]
  ),
  L(
    "present-perfect-2",
    "b1d-cadena-preterito-perfecto",
    "Cadena de transformaciones: de ayer a hoy",
    "Ayer hice → hoy he hecho: cambia el marcador y el tiempo, con irregulares y pronombres.",
    "6 min",
    [
      sec(
        "Cambiar el marco temporal",
        "Ayer lo vi → Hoy lo he visto. El lunes me dijo → Esta semana me ha dicho. El pronombre siempre va delante de haber.",
        [
          ["Ayer lo vi. → Hoy lo he visto.", "I saw him yesterday. → I've seen him today."],
        ],
        [
          fb("Ayer → hoy.", "Ayer hice la compra. → Hoy ___ la compra.", "he hecho", "Hacer → hecho."),
        ]
      ),
    ],
    [
      fb("Ayer → hoy.", "Ayer me escribió. → Hoy me ___.", "ha escrito", "Escribir → escrito."),
      fb("Ayer → hoy.", "Ayer lo pusimos aquí. → Hoy lo ___ aquí.", "hemos puesto", "Poner → puesto."),
      fb("Ayer → hoy.", "Ayer se rompió. → Hoy se ___.", "ha roto", "Romper → roto."),
      fb("Hoy → ayer.", "Hoy has vuelto tarde. → Ayer ___ tarde.", "volviste", "Indefinido."),
      fb("Hoy → ayer.", "Hoy me han dicho la verdad. → Ayer me ___ la verdad.", "dijeron", "Indefinido irregular."),
      fb("Hoy → ayer.", "Hoy hemos visto a Ana. → Ayer ___ a Ana.", "vimos", "Indefinido."),
      mc(
        "«Esta mañana ___ a mi madre.» (llamar, yo — España)",
        ["he llamado", "llamé ayer", "llamaba", "llamo"],
        0,
        "Esta mañana → perfecto."
      ),
      toEs("Today I've spoken with him twice.", "Hoy he hablado con él dos veces.", "Hoy → perfecto.", []),
    ]
  ),
  L(
    "past-perfect-1",
    "b1d-patron-habia-participio",
    "Práctica de patrones: había + participio",
    "Había, habías, había, habíamos, habíais, habían + participio: el pasado del pasado en un marco fijo.",
    "6 min",
    [
      sec(
        "El pluscuamperfecto",
        "Imperfecto de haber + participio: había comido, habías salido, habían visto. Se usa para algo que ya había pasado antes de otro momento pasado: Cuando llegué, la película ya había empezado.",
        [
          ["Cuando llegué, todos ya se habían ido.", "When I arrived, everyone had already left."],
          ["Nunca había visto tanta nieve.", "I had never seen so much snow."],
        ],
        [
          fb("Completa.", "Cuando llegamos a la estación, el último autobús ya ___. (salir)", "había salido", "Había + participio."),
        ]
      ),
    ],
    [
      fb("Mismo marco.", "Cuando llegué, tú ya ___. (cenar)", "habías cenado", "Habías + participio."),
      fb("Mismo marco.", "Cuando llegué, mi hermana ya ___. (irse)", "se había ido", "Reflexivo + había."),
      fb("Mismo marco.", "Cuando llegué, nosotros ya ___ la mesa. (poner)", "habíamos puesto", "Poner → puesto."),
      fb("Mismo marco.", "Cuando llegué, vosotros ya ___ todo. (hacer)", "habíais hecho", "Hacer → hecho."),
      fb("Mismo marco.", "Cuando llegué, los invitados ya ___. (llegar)", "habían llegado", "Habían + participio."),
      mt(
        "Relaciona el sujeto con la forma de haber.",
        [
          ["yo", "había"],
          ["tú", "habías"],
          ["nosotros", "habíamos"],
          ["ellas", "habían"],
        ],
        "Imperfecto de haber."
      ),
      toEs("I had never eaten sushi before.", "Nunca había comido sushi antes.", "Nunca + había.", ["No había comido sushi nunca antes."]),
      wo("Cuando encendí la tele, el partido ya había terminado.", "Pluscuamperfecto.", "When I turned on the TV, the match had already ended."),
    ]
  ),
  L(
    "past-perfect-1",
    "b1d-linea-tiempo-antes-despues",
    "Línea del tiempo: ¿qué pasó primero?",
    "Dos acciones pasadas: la primera en pluscuamperfecto, la segunda en indefinido.",
    "6 min",
    [
      sec(
        "Ordenar en el tiempo",
        "Acción 1 (antes): había + participio. Acción 2 (después): indefinido. 1) Ana cerró la tienda. 2) Llegué. → Cuando llegué, Ana ya había cerrado la tienda.",
        [
          ["Cuando me llamaste, ya había salido de casa.", "When you called me, I had already left home."],
        ],
        [
          mc(
            "1) Terminé los deberes. 2) Mi madre volvió. →",
            ["Cuando mi madre volvió, yo ya había terminado los deberes.", "Cuando mi madre había vuelto, yo terminé.", "Cuando mi madre volvía, terminé.", "Mi madre volvió cuando terminaba."],
            0,
            "La primera acción → pluscuamperfecto."
          ),
        ]
      ),
    ],
    [
      fb("Ordena.", "1) El concierto empezó. 2) Entramos. → Cuando entramos, el concierto ya ___.", "había empezado", "Anterior → había."),
      fb("Ordena.", "1) Vendieron las entradas. 2) Fui a la taquilla. → Cuando fui, ya ___ las entradas.", "habían vendido", "Anterior → habían."),
      fb("Ordena.", "1) Leí el libro. 2) Vi la película. → Cuando vi la película, ya ___ el libro.", "había leído", "Leer → leído."),
      fb("Ordena.", "1) Mi hermano se casó. 2) Yo volví del extranjero. → Cuando volví, mi hermano ya se ___.", "había casado", "Reflexivo."),
      fb("Ordena.", "Cuando la policía ___, los ladrones ya habían roto la ventana. (llegar)", "llegó", "Posterior → indefinido."),
      mc(
        "«Llegué tarde porque ___ el autobús.» (perder, yo — antes)",
        ["había perdido", "perdía", "he perdido", "perderé"],
        0,
        "Causa anterior → pluscuamperfecto."
      ),
      toEs("When we arrived, the shop had already closed.", "Cuando llegamos, la tienda ya había cerrado.", "Pluscuamperfecto.", ["Cuando llegamos, la tienda ya estaba cerrada."]),
    ]
  ),
  L(
    "past-perfect-1",
    "b1d-circuito-tres-pasados",
    "Circuito: indefinido, imperfecto y pluscuamperfecto",
    "Llegué / llegaba / había llegado: las tres formas del pasado en frases que obligan a elegir.",
    "7 min",
    [
      sec(
        "Tres pasados",
        "Indefinido: acción completa (llegué a las ocho). Imperfecto: fondo o hábito (siempre llegaba a las ocho). Pluscuamperfecto: anterior a otra acción pasada (cuando empezó la clase, ya había llegado).",
        [
          ["Llovía, había dormido poco y llegué tarde.", "It was raining, I had slept little, and I arrived late."],
        ],
        [
          mc(
            "«Estaba cansado porque no ___ bien.» (dormir — antes)",
            ["había dormido", "dormí", "dormía", "he dormido"],
            0,
            "Causa anterior."
          ),
        ]
      ),
    ],
    [
      fb("Elige el pasado.", "De niño ___ en el campo. (vivir — hábito)", "vivía", "Imperfecto."),
      fb("Elige el pasado.", "En 2010 ___ a la ciudad. (mudarse, nosotros — acción)", "nos mudamos", "Indefinido."),
      fb("Elige el pasado.", "Antes de 2010 nunca ___ en una ciudad. (vivir, nosotros — anterior)", "habíamos vivido", "Pluscuamperfecto."),
      fb("Elige el pasado.", "Cuando conocí a Pablo, él ya ___ tres idiomas. (aprender)", "había aprendido", "Anterior."),
      fb("Elige el pasado.", "Mientras ___, sonó el teléfono. (cocinar, yo)", "cocinaba", "Fondo."),
      fb("Elige el pasado.", "Al final ___ la cena y nos sentamos. (terminar, nosotros)", "terminamos", "Acción."),
      ms(
        "¿Qué frases usan bien el pluscuamperfecto?",
        ["Cuando llegué, ya habían cenado.", "Nunca había visto el mar hasta ese verano.", "Ayer había ido al cine y volví a las diez.", "Me dijo que había perdido las llaves."],
        [0, 1, 3],
        "En la tercera, «ayer había ido» no se refiere a nada anterior."
      ),
      toEs("I was hungry because I hadn't eaten.", "Tenía hambre porque no había comido.", "Imperfecto + pluscuamperfecto.", []),
    ]
  ),
  L(
    "past-perfect-2",
    "b1d-cuento-boda-tarde",
    "Cuento con huecos: llegamos tarde a la boda",
    "Una historia de un desastre en cadena: todo lo que ya había pasado cuando por fin llegaron.",
    "6 min",
    [
      sec(
        "La historia",
        "«Cuando por fin llegamos a la iglesia, la ceremonia ya había terminado. Los novios se habían ido al restaurante y los invitados habían salido. Habíamos salido de casa a tiempo, pero el coche se había estropeado en la autopista.»",
        [
          ["La ceremonia ya había terminado.", "The ceremony had already ended."],
        ],
        [
          mc(
            "¿Por qué llegaron tarde?",
            ["El coche se había estropeado.", "Habían salido tarde.", "Se habían perdido.", "Se habían dormido."],
            0,
            "El coche se había estropeado."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "La ceremonia ya ___. (terminar)", "había terminado", "Pluscuamperfecto."),
      fb("Completa.", "Los novios se ___ al restaurante. (ir)", "habían ido", "Reflexivo."),
      fb("Completa.", "Los invitados ___ de la iglesia. (salir)", "habían salido", "Pluscuamperfecto."),
      fb("Completa.", "Nosotros ___ de casa a tiempo. (salir)", "habíamos salido", "Pluscuamperfecto."),
      fb("Completa.", "El coche se ___ en la autopista. (estropear)", "había estropeado", "Pluscuamperfecto."),
      fb("Completa.", "Cuando ___ al restaurante, todos nos aplaudieron. (llegar, nosotros)", "llegamos", "Acción posterior → indefinido."),
      toEs("We had left early, but there was a lot of traffic.", "Habíamos salido temprano, pero había mucho tráfico.", "Pluscuamperfecto + imperfecto.", ["Habíamos salido pronto, pero había mucho tráfico."]),
    ]
  ),
  L(
    "past-perfect-2",
    "b1d-pares-he-habia",
    "Pares mínimos: he hecho / había hecho",
    "Presente perfecto (hasta ahora) vs. pluscuamperfecto (hasta un momento del pasado).",
    "6 min",
    [
      sec(
        "¿Hasta cuándo?",
        "Hasta ahora: Nunca he estado en Roma. Hasta un momento pasado: Hasta 2020, nunca había estado en Roma. El punto de referencia decide: presente → he; pasado → había.",
        [
          ["Ya he terminado. / Cuando llamaste, ya había terminado.", "I've already finished. / When you called, I had already finished."],
        ],
        [
          mc(
            "«Hasta ese día, nunca ___ en avión.»",
            ["había volado", "he volado", "volaba", "volaré"],
            0,
            "Referencia pasada."
          ),
        ]
      ),
    ],
    [
      mc(
        "«Hasta hoy, nunca ___ en avión.»",
        ["he volado", "había volado", "volé ayer", "volaba"],
        0,
        "Referencia presente."
      ),
      fb("He o había.", "Este año ___ mucho. (leer, yo)", "he leído", "Periodo actual."),
      fb("He o había.", "Antes de la universidad, nunca ___ tanto. (leer, yo)", "había leído", "Referencia pasada."),
      fb("He o había.", "¿___ alguna vez en Chile? (estar, tú)", "Has estado", "Experiencia hasta ahora."),
      fb("He o había.", "Cuando me mudé, ya ___ el piso. (pintar, ellos)", "habían pintado", "Anterior a otro pasado."),
      fb("He o había.", "Todavía no ___ el correo. (leer, yo)", "he leído", "Hasta ahora."),
      toEs("I had already seen it when you told me.", "Ya lo había visto cuando me lo dijiste.", "Pluscuamperfecto + indefinido.", []),
    ]
  ),
  L(
    "past-perfect-2",
    "b1d-habla-de-ti-primera-vez",
    "Habla de ti: la primera vez que…",
    "Cuenta primeras veces: «Nunca había… hasta que…» y «Fue la primera vez que…».",
    "6 min",
    [
      sec(
        "Primeras veces",
        "Nunca había + participio + hasta + momento: Nunca había visto la nieve hasta los veinte años. Fue la primera vez que + indefinido: Fue la primera vez que viajé solo.",
        [
          ["Nunca había subido a un avión hasta los dieciocho.", "I had never been on a plane until I was eighteen."],
        ],
        [
          mc(
            "«Nunca ___ el mar hasta ese verano.» (ver, yo)",
            ["había visto", "he visto", "vi", "veía"],
            0,
            "Nunca había + participio."
          ),
        ]
      ),
    ],
    [
      toEs("I had never seen snow until I was twenty.", "Nunca había visto la nieve hasta los veinte años.", "Nunca había + participio.", ["No había visto la nieve hasta los veinte años."]),
      toEs("It was the first time I travelled alone.", "Fue la primera vez que viajé solo.", "Primera vez que + indefinido.", ["Fue la primera vez que viajé sola."]),
      toEs("I had never cooked for so many people.", "Nunca había cocinado para tanta gente.", "Nunca había.", []),
      toEs("My parents had never been abroad.", "Mis padres nunca habían estado en el extranjero.", "Habían estado.", ["Mis padres nunca habían salido del país."]),
      fb("Completa.", "Hasta ese día, nunca ___ en público. (hablar, yo)", "había hablado", "Pluscuamperfecto."),
      fb("Completa.", "Fue la primera vez que ___ en un escenario. (cantar, yo)", "canté", "Indefinido."),
      wo("Antes de venir a España nunca había probado el gazpacho.", "Pluscuamperfecto.", "Before coming to Spain I had never tried gazpacho."),
    ]
  ),
  L(
    "present-past-perfect-drill-3",
    "b1d-ronda-perfectos-mezcla",
    "Ronda rápida: he o había, sin pistas",
    "Doce huecos: decide por el punto de referencia y escribe la forma completa con participio.",
    "6 min",
    [
      sec(
        "La pregunta clave",
        "¿Hasta ahora? → he/has/ha… ¿Hasta un momento pasado? → había/habías… Luego, el participio (regular o irregular).",
        [
          ["Hoy he visto a Juan; ya lo había visto el lunes.", "Today I saw Juan; I had already seen him on Monday."],
        ],
        [
          fb("Rápido.", "Esta semana ___ tres libros. (leer, yo)", "he leído", "Hasta ahora."),
        ]
      ),
    ],
    [
      fb("Rápido.", "Cuando llegué, ya ___ la cena. (hacer, ellos)", "habían hecho", "Anterior al pasado."),
      fb("Rápido.", "¿___ tu móvil? (encontrar, tú)", "Has encontrado", "Hasta ahora."),
      fb("Rápido.", "No sabía que ___ tu abuelo. (morir)", "había muerto", "Anterior + participio irregular."),
      fb("Rápido.", "Todavía no ___ la carta. (abrir, nosotros)", "hemos abierto", "Abrir → abierto."),
      fb("Rápido.", "Me dijo que ya ___ el problema. (resolver)", "había resuelto", "Resolver → resuelto."),
      fb("Rápido.", "Este verano ___ muchísimo calor. (hacer)", "ha hecho", "Periodo actual."),
      fb("Rápido.", "Ese verano ___ muchísimo calor. (hacer — indefinido)", "hizo", "Periodo terminado."),
      mc(
        "«¿___ alguna vez un Oscar a un actor español?» (dar, ellos)",
        ["Han dado", "Habían dado", "Dan", "Daban"],
        0,
        "Experiencia hasta ahora."
      ),
    ]
  ),
  L(
    "present-past-perfect-drill-3",
    "b1d-corrige-perfectos",
    "Corrige el párrafo: una noticia con tiempos mezclados",
    "Una noticia con he/había/indefinido mal elegidos y participios inventados. Corrígela.",
    "7 min",
    [
      sec(
        "La noticia",
        "«Ayer los bomberos ✗ han rescatado (→ rescataron) a un gato. El animal ✗ subió (→ había subido) a un árbol dos días antes. Los vecinos ✗ han llamado (→ habían llamado) varias veces sin éxito. Este año los bomberos ✗ habían rescatado (→ han rescatado) ya a cuarenta animales.»",
        [
          ["Ayer los bomberos rescataron a un gato.", "Yesterday the firefighters rescued a cat."],
          ["El animal había subido a un árbol dos días antes.", "The animal had climbed a tree two days earlier."],
        ],
        [
          fb("Corrige.", "Ayer los bomberos ___ a un gato. (la noticia dice: han rescatado)", "rescataron", "Ayer → indefinido."),
        ]
      ),
    ],
    [
      fb("Corrige.", "El animal ___ a un árbol dos días antes. (la noticia dice: subió)", "había subido", "Anterior → pluscuamperfecto."),
      fb("Corrige.", "Los vecinos ___ varias veces sin éxito. (la noticia dice: han llamado)", "habían llamado", "Anterior al rescate."),
      fb("Corrige.", "Este año los bomberos ___ a cuarenta animales. (la noticia dice: habían rescatado)", "han rescatado", "Este año → perfecto."),
      fb("Corrige.", "El gato no ___ nada en dos días. (la noticia dice: comió)", "había comido", "Anterior al rescate."),
      fb("Corrige.", "Nadie ___ nunca un rescate así. (la noticia dice: había veído)", "había visto", "Ver → visto."),
      mc(
        "¿Cuál está bien?",
        ["Cuando llegaron los bomberos, el gato ya se había bajado solo.", "Cuando llegaron los bomberos, el gato ya se ha bajado solo.", "Cuando han llegado, el gato se bajaba.", "Cuando llegaron, el gato ya se había bajando."],
        0,
        "Anterior → pluscuamperfecto."
      ),
      toEs("The firefighters had tried twice before.", "Los bomberos lo habían intentado dos veces antes.", "Pluscuamperfecto.", ["Los bomberos lo habían intentado antes dos veces."]),
    ]
  ),
  L(
    "present-past-perfect-drill-3",
    "b1d-cadena-he-habia-hice",
    "Cadena de transformaciones: he hecho → hice → había hecho",
    "Una misma acción en los tres tiempos compuestos y simples del pasado, cambiando el marco temporal.",
    "6 min",
    [
      sec(
        "Tres marcos",
        "Hoy he comprado pan. → Ayer compré pan. → Cuando llegaste, ya había comprado pan. El marcador (hoy / ayer / cuando + pasado) decide.",
        [
          ["Hoy lo he visto. → Ayer lo vi. → Ya lo había visto.", "I've seen it today. → I saw it yesterday. → I had already seen it."],
        ],
        [
          fb("Hoy → ayer.", "Hoy he escrito a Ana. → Ayer ___ a Ana.", "escribí", "Indefinido."),
        ]
      ),
    ],
    [
      fb("Ayer → ya antes.", "Ayer escribí a Ana. → Cuando me llamó, ya le ___.", "había escrito", "Pluscuamperfecto."),
      fb("Hoy → ayer.", "Hoy nos hemos levantado tarde. → Ayer nos ___ tarde.", "levantamos", "Indefinido."),
      fb("Ayer → ya antes.", "Ayer nos levantamos tarde. → Cuando sonó el timbre, ya nos ___.", "habíamos levantado", "Pluscuamperfecto."),
      fb("Hoy → ayer.", "Hoy han puesto la mesa. → Ayer ___ la mesa.", "pusieron", "Indefinido irregular."),
      fb("Ayer → ya antes.", "Ayer pusieron la mesa. → Cuando llegué, ya ___ la mesa.", "habían puesto", "Pluscuamperfecto."),
      fb("Ya antes → hoy.", "Ya habías dicho que sí. → Hoy ___ que sí.", "has dicho", "Perfecto."),
      toEs("When I got home, my son had already done his homework.", "Cuando llegué a casa, mi hijo ya había hecho los deberes.", "Pluscuamperfecto.", ["Cuando llegué a casa, mi hijo ya había hecho la tarea."]),
    ]
  ),
  L(
    "present-past-perfect-drill-3",
    "b1d-preguntas-perfecto",
    "Preguntas y respuestas: ¿ya has…? ¿ya habías…?",
    "Responde en el mismo tiempo compuesto de la pregunta, con pronombres delante de haber.",
    "6 min",
    [
      sec(
        "Eco temporal",
        "¿Has visto la serie? — Sí, la he visto. ¿Habías estado aquí antes? — No, nunca había estado aquí. El pronombre se coloca antes de haber.",
        [
          ["—¿Habías probado el mole? —No, nunca lo había probado.", "Had you tried mole? — No, I had never tried it."],
        ],
        [
          fb("Responde.", "—¿Has leído el informe? —Sí, ya lo ___.", "he leído", "Perfecto + lo."),
        ]
      ),
    ],
    [
      fb("Responde.", "—¿Habías estado aquí antes? —No, nunca ___ aquí.", "había estado", "Pluscuamperfecto."),
      fb("Responde.", "—¿Sabes algo del banco? —No, todavía no me ___. (llamar, ellos)", "han llamado", "Perfecto."),
      fb("Responde.", "—¿Llegaste a tiempo a la clase? —No, cuando llegué ya ___. (empezar, ellos)", "habían empezado", "Pluscuamperfecto."),
      fb("Responde.", "—¿Habéis terminado el proyecto? —Sí, lo ___ esta mañana.", "hemos terminado", "Perfecto."),
      fb("Responde.", "—¿Le habías dicho algo? —No, no le ___ nada.", "había dicho", "Pluscuamperfecto."),
      mc(
        "«—¿Has visto a mis padres? —Sí, los ___ en el parque.»",
        ["he visto", "había visto", "veo", "ver"],
        0,
        "Eco del perfecto."
      ),
      toEs("—Had you met her before? —No, I had never met her.", "—¿La habías conocido antes? —No, nunca la había conocido.", "Pluscuamperfecto + pronombre.", ["—¿Ya la conocías? —No, nunca la había visto."]),
    ]
  ),
  L(
    "present-past-perfect-drill-3",
    "b1d-habla-de-ti-logros",
    "Habla de ti: logros de este año",
    "Cuenta tus logros con el pretérito perfecto y compáralos con lo que habías hecho antes.",
    "6 min",
    [
      sec(
        "Balance del año",
        "Este año he aprendido…, he conseguido…, he conocido… Antes de este año, nunca había… Hasta ahora no he podido…",
        [
          ["Este año he conseguido correr diez kilómetros.", "This year I've managed to run ten kilometres."],
        ],
        [
          mc(
            "«Antes de este año nunca ___ más de dos kilómetros.» (correr, yo)",
            ["había corrido", "he corrido", "corrí", "corría siempre"],
            0,
            "Anterior a este año."
          ),
        ]
      ),
    ],
    [
      toEs("This year I've learned to cook.", "Este año he aprendido a cocinar.", "Perfecto.", []),
      toEs("I've met a lot of new people.", "He conocido a mucha gente nueva.", "Perfecto + a personal.", []),
      toEs("Before this year I had never lived alone.", "Antes de este año nunca había vivido solo.", "Pluscuamperfecto.", ["Antes de este año nunca había vivido sola."]),
      toEs("I haven't been able to travel yet.", "Todavía no he podido viajar.", "Todavía no.", ["Aún no he podido viajar."]),
      fb("Completa.", "Este año ___ mucho. (crecer, yo)", "he crecido", "Perfecto."),
      fb("Completa.", "Hasta junio nunca ___ un trabajo fijo. (tener, yo)", "había tenido", "Pluscuamperfecto."),
      wo("Este año he hecho cosas que nunca había imaginado.", "Perfecto + pluscuamperfecto.", "This year I've done things I had never imagined."),
    ]
  ),
  L(
    "present-past-perfect-drill-3",
    "b1d-elige-explica-perfectos",
    "Elige y explica: ¿por qué este pasado?",
    "Elige entre perfecto, indefinido, imperfecto y pluscuamperfecto, con la razón.",
    "7 min",
    [
      sec(
        "Cuatro pasados, cuatro razones",
        "Perfecto: periodo actual o experiencia (este año he…). Indefinido: acción terminada en tiempo terminado (ayer…). Imperfecto: descripción/hábito. Pluscuamperfecto: anterior a otro pasado.",
        [
          ["Hoy he visto a Luis; ayer vi a su hermano; de niño veía a su padre; ya había visto a su madre antes.", "Four pasts, four reasons."],
        ],
        [
          mc(
            "«Cuando llegó la ambulancia, el herido ya se ___.» (levantar)",
            ["había levantado — anterior", "ha levantado — actual", "levantaba — hábito", "levantó — terminado ayer"],
            0,
            "Anterior a llegó."
          ),
        ]
      ),
    ],
    [
      mc(
        "«Esta mañana ___ el autobús.» (perder, yo — España)",
        ["he perdido — periodo actual", "perdí — tiempo terminado", "perdía — hábito", "había perdido — anterior"],
        0,
        "Esta mañana."
      ),
      mc(
        "«Cuando era estudiante, ___ el autobús a menudo.» (perder, yo)",
        ["perdía — hábito", "he perdido — actual", "perdí — una vez", "había perdido — anterior"],
        0,
        "Hábito."
      ),
      mc(
        "«El martes pasado ___ el autobús.» (perder, yo)",
        ["perdí — tiempo terminado", "he perdido — actual", "perdía — hábito", "había perdido — anterior"],
        0,
        "Martes pasado."
      ),
      fb("Completa.", "Me enfadé porque mi hermano ___ mi ordenador. (romper)", "había roto", "Causa anterior."),
      fb("Completa.", "Nunca en mi vida ___ tanta gente junta. (ver, yo)", "he visto", "Experiencia hasta ahora."),
      fb("Completa.", "En aquella época ___ en un piso muy pequeño. (vivir, nosotros)", "vivíamos", "Descripción."),
      toEs("I was sad because my friend had left.", "Estaba triste porque mi amigo se había ido.", "Imperfecto + pluscuamperfecto.", ["Estaba triste porque mi amiga se había marchado."]),
    ]
  ),
  L(
    "present-past-perfect-drill-3",
    "b1d-dictado-pasados-compuestos",
    "Dictado: frases con tiempos compuestos",
    "Reordena frases con he/había + participio, pronombres y marcadores (ya, todavía, nunca).",
    "5 min",
    [
      sec(
        "Posición de ya, todavía y nunca",
        "Van normalmente antes de haber: Ya lo he hecho. Nunca lo había visto. Todavía no se lo he dicho. Nunca se separan haber y participio.",
        [
          ["Todavía no se lo he dicho a nadie.", "I haven't told anyone yet."],
        ],
        [
          mc(
            "Orden correcto:",
            ["Nunca lo había visto tan contento.", "Lo nunca había visto tan contento.", "Nunca había lo visto tan contento.", "Había nunca lo visto tan contento."],
            0,
            "Nunca + pronombre + había + participio."
          ),
        ]
      ),
    ],
    [
      wo("Todavía no se lo he dicho a nadie.", "Todavía no + se lo + he.", "I haven't told anyone yet."),
      wo("Cuando llegamos, ya se habían comido todo el pastel.", "Ya + se + habían.", "When we arrived, they had already eaten all the cake."),
      wo("Este año hemos viajado más que nunca.", "Perfecto + comparación.", "This year we've travelled more than ever."),
      wo("Nunca había visto a mi abuela tan feliz.", "Nunca + había.", "I had never seen my grandmother so happy."),
      fb("Completa.", "Ya te ___ que no voy a ir. (decir, yo)", "he dicho", "Perfecto."),
      toEn("No me había dado cuenta de que era tan tarde.", "I hadn't realized it was so late.", "Pluscuamperfecto.", ["I hadn't noticed that it was so late."]),
    ]
  ),
  L(
    "present-past-perfect-drill-3",
    "b1d-practica-mezclada-pasados",
    "Práctica mezclada: todos los pasados en una historia",
    "Una anécdota completa con perfecto, indefinido, imperfecto y pluscuamperfecto.",
    "7 min",
    [
      sec(
        "La anécdota",
        "«Esta mañana me ha pasado algo increíble. Iba al trabajo en metro cuando vi a mi profesor de primaria. No lo había visto desde hacía veinte años. Me reconoció enseguida y hemos quedado para tomar un café mañana.»",
        [
          ["No lo había visto desde hacía veinte años.", "I hadn't seen him for twenty years."],
        ],
        [
          mc(
            "¿Por qué «me ha pasado»?",
            ["Esta mañana = periodo actual (España).", "Es un hábito.", "Es anterior a otro pasado.", "Es una descripción."],
            0,
            "Periodo actual."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "Esta mañana me ___ algo increíble. (pasar)", "ha pasado", "Periodo actual."),
      fb("Completa.", "___ al trabajo en metro. (ir, yo — en curso)", "Iba", "Acción en curso."),
      fb("Completa.", "De repente ___ a mi profesor de primaria. (ver, yo)", "vi", "Acción puntual."),
      fb("Completa.", "No lo ___ desde hacía veinte años. (ver, yo)", "había visto", "Anterior."),
      fb("Completa.", "Me ___ enseguida. (reconocer, él)", "reconoció", "Acción puntual."),
      fb("Completa.", "Hemos ___ para tomar un café. (quedar)", "quedado", "Perfecto."),
      toEs("He hadn't changed at all.", "No había cambiado nada.", "Pluscuamperfecto.", ["No había cambiado en absoluto."]),
    ]
  ),
  L(
    "relative-pronouns-1",
    "b1d-patron-une-con-que",
    "Práctica de patrones: une dos frases con que",
    "Tengo un amigo. Mi amigo vive en Roma. → Tengo un amigo que vive en Roma. Repite el patrón con personas y cosas.",
    "6 min",
    [
      sec(
        "Que = who / which / that",
        "Que sirve para personas y cosas y no cambia: el chico que vino, la casa que compré, los libros que leo. Sustituye al sustantivo repetido.",
        [
          ["Tengo un amigo que vive en Roma.", "I have a friend who lives in Rome."],
          ["El libro que me prestaste es genial.", "The book you lent me is great."],
        ],
        [
          fb("Une.", "Vi una película. La película era muy triste. → Vi una película ___ era muy triste.", "que", "Que para cosas."),
        ]
      ),
    ],
    [
      fb("Une.", "Conocí a una chica. La chica habla cinco idiomas. → Conocí a una chica ___ habla cinco idiomas.", "que", "Que para personas."),
      fb("Une.", "Compré un coche. El coche es eléctrico. → El coche ___ compré es eléctrico.", "que", "Que como objeto."),
      fb("Une.", "Tengo vecinos. Los vecinos son muy ruidosos. → Tengo unos vecinos ___ son muy ruidosos.", "que", "Que invariable."),
      fb("Une.", "Leí el artículo. Me mandaste el artículo. → Leí el artículo ___ me mandaste.", "que", "Que como objeto."),
      mc(
        "«La mujer ___ trabaja en la farmacia es mi tía.»",
        ["que", "quien sin comas", "cual", "lo que"],
        0,
        "Que es la opción natural sin comas."
      ),
      wo("El restaurante que me recomendaste estaba cerrado.", "Que como objeto.", "The restaurant you recommended to me was closed."),
      toEs("I have a sister who lives in Chile.", "Tengo una hermana que vive en Chile.", "Que para personas.", []),
      toEs("The shoes I bought are too small.", "Los zapatos que compré son demasiado pequeños.", "Que como objeto.", ["Los zapatos que me compré me quedan pequeños."]),
    ]
  ),
  L(
    "relative-pronouns-1",
    "b1d-circuito-preposicion-relativo",
    "Circuito: con quien, en el que, para la que",
    "Detrás de una preposición, que solo no basta: el que / la que / quien.",
    "7 min",
    [
      sec(
        "Preposición + relativo",
        "Con preposición se usa el que / la que / los que / las que (personas o cosas) o quien / quienes (solo personas): la chica con la que / con quien salgo; la casa en la que vivo; el motivo por el que vine.",
        [
          ["El amigo con quien viajé es de Perú.", "The friend I travelled with is from Peru."],
          ["La ciudad en la que nací es pequeña.", "The city I was born in is small."],
        ],
        [
          fb("Completa.", "La empresa para ___ trabajo es alemana.", "la que", "Para + la que (empresa)."),
        ]
      ),
    ],
    [
      fb("Completa.", "El chico con ___ sale mi hermana es simpático.", "el que", "Con + el que (o quien)."),
      fb("Completa.", "Las amigas con ___ viajé son de Chile. (solo personas)", "quienes", "Quienes, plural."),
      fb("Completa.", "El pueblo en ___ crecí ya no existe.", "el que", "En + el que."),
      fb("Completa.", "La razón por ___ me fui es personal.", "la que", "Por + la que."),
      fb("Completa.", "Los compañeros a ___ invité no vinieron.", "los que", "A + los que."),
      mc(
        "«La mesa ___ comemos es de mi abuelo.»",
        ["en la que", "que en", "quien", "en quien"],
        0,
        "Preposición + la que (cosa)."
      ),
      ms(
        "¿Qué opciones valen? «La profesora ___ hablé me ayudó.»",
        ["con la que", "con quien", "con que", "que con"],
        [0, 1],
        "Personas: la que o quien."
      ),
      toEs("The person I talked to was very kind.", "La persona con la que hablé fue muy amable.", "Con + la que.", ["La persona con quien hablé fue muy amable.", "La persona con la que hablé era muy amable."]),
    ]
  ),
  L(
    "relative-pronouns-1",
    "b1d-pares-que-lo-que",
    "Pares mínimos: que / lo que",
    "Que se refiere a un sustantivo; lo que, a una idea o a «la cosa que». Diez pares para no confundirlos.",
    "6 min",
    [
      sec(
        "Sustantivo o idea",
        "Que: tiene un antecedente concreto (el libro que leí). Lo que: sin antecedente, significa «what / the thing that» (Lo que quiero es dormir) o se refiere a toda una frase (Llegó tarde, lo que me molestó).",
        [
          ["El regalo que me diste me encanta.", "I love the present you gave me."],
          ["Lo que más me gusta es la playa.", "What I like most is the beach."],
        ],
        [
          mc(
            "«No entiendo ___ dices.»",
            ["lo que", "que", "el que", "quien"],
            0,
            "Sin antecedente → lo que."
          ),
        ]
      ),
    ],
    [
      mc(
        "«La canción ___ canta es preciosa.»",
        ["que", "lo que", "quien", "cuyo"],
        0,
        "Antecedente: la canción."
      ),
      fb("Que o lo que.", "___ necesito es un café.", "Lo que", "What I need."),
      fb("Que o lo que.", "El café ___ tomé estaba frío.", "que", "Antecedente: el café."),
      fb("Que o lo que.", "Haz ___ te digo, por favor.", "lo que", "Lo que: la idea completa, sin sustantivo antes."),
      fb("Que o lo que.", "No me creyó, ___ me molestó mucho.", "lo que", "Se refiere a toda la frase."),
      fb("Que o lo que.", "Es la chica ___ conocí en Lisboa.", "que", "Antecedente: la chica."),
      toEs("What I want is to rest.", "Lo que quiero es descansar.", "Relativo: Lo que.", []),
      toEn("Me dijo todo lo que sabía.", "He told me everything he knew.", "Todo lo que.", ["She told me everything she knew."]),
    ]
  ),
  L(
    "relative-pronouns-2",
    "b1d-cuento-mi-barrio",
    "Cuento con huecos: el barrio en el que vivo",
    "Una descripción de un barrio con que, quien, el que y lo que. Completa cada relativo.",
    "6 min",
    [
      sec(
        "La descripción",
        "«Vivo en un barrio que está cerca del río. La panadería en la que compro el pan es de una familia que lleva allí cincuenta años. Mi vecina, quien es pintora, tiene un perro que se llama Lolo. Lo que más me gusta del barrio es la tranquilidad.»",
        [
          ["La panadería en la que compro el pan…", "The bakery where I buy bread…"],
        ],
        [
          mc(
            "¿Qué es lo que más le gusta?",
            ["la tranquilidad", "la panadería", "el río", "el perro"],
            0,
            "Lo que más me gusta es la tranquilidad."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "Vivo en un barrio ___ está cerca del río.", "que", "Que + antecedente."),
      fb("Completa.", "La panadería en ___ compro el pan es antigua.", "la que", "En + la que."),
      fb("Completa.", "Es de una familia ___ lleva allí cincuenta años.", "que", "Relativo: Que."),
      fb("Completa.", "Mi vecina, ___ es pintora, tiene un perro. (entre comas, persona)", "quien", "Quien entre comas."),
      fb("Completa.", "___ más me gusta es la tranquilidad.", "Lo que", "Lo que = what."),
      fb("Completa.", "El parque al ___ voy los domingos es enorme.", "que", "Al que (a + el que)."),
      toEs("The market where I buy fruit opens at eight.", "El mercado en el que compro fruta abre a las ocho.", "Relativo: En el que.", ["El mercado donde compro la fruta abre a las ocho."]),
    ]
  ),
  L(
    "relative-pronouns-2",
    "b1d-frase-a-frase-descripciones",
    "Frase a frase: describir sin repetir",
    "Convierte pares de frases repetitivas en una sola frase elegante con el relativo adecuado.",
    "6 min",
    [
      sec(
        "Evitar la repetición",
        "Tengo una amiga. Con mi amiga hablo cada día. → Tengo una amiga con la que hablo cada día. Pregúntate: ¿hay preposición? ¿Es persona o cosa? ¿Es una idea (lo que)?",
        [
          ["Es un tema del que no quiero hablar.", "It's a topic I don't want to talk about."],
        ],
        [
          fb("Une.", "Es un tema. No quiero hablar de ese tema. → Es un tema del ___ no quiero hablar.", "que", "De + el que → del que."),
        ]
      ),
    ],
    [
      fb("Une.", "Tengo un profesor. Aprendo mucho de él. → Tengo un profesor del ___ aprendo mucho.", "que", "Del que."),
      fb("Une.", "Esta es la llave. Abro la puerta con esta llave. → Esta es la llave con la ___ abro la puerta.", "que", "Con la que."),
      fb("Une.", "Vi a unos chicos. Los chicos jugaban al fútbol. → Vi a unos chicos ___ jugaban al fútbol.", "que", "Relativo: Que."),
      fb("Une.", "Llegó tarde. Eso enfadó al jefe. → Llegó tarde, lo ___ enfadó al jefe.", "que", "Lo que (toda la frase)."),
      fb("Une.", "Es mi abuela. Pienso mucho en ella. → Es mi abuela, en ___ pienso mucho. (persona)", "quien", "En quien."),
      mc(
        "«Es la empresa ___ trabajé cinco años.»",
        ["en la que", "que", "lo que", "quien"],
        0,
        "Trabajar en → en la que."
      ),
      toEs("It's a problem I think about a lot.", "Es un problema en el que pienso mucho.", "Pensar en → en el que.", []),
    ]
  ),
  L(
    "relative-pronouns-2",
    "b1d-ronda-relativos",
    "Ronda rápida: que, quien, el que, lo que",
    "Doce huecos rápidos: decide el relativo según antecedente, preposición e idea.",
    "5 min",
    [
      sec(
        "Árbol de decisión",
        "¿Idea o «la cosa que»? → lo que. ¿Preposición? → el/la/los/las que (o quien para personas). ¿Sin preposición? → que. ¿Persona entre comas? → que o quien.",
        [
          ["Lo que dijo, el que lo dijo, con quien lo dijo.", "What he said, the one who said it, who he said it with."],
        ],
        [
          fb("Rápido.", "El tren ___ tomo sale a las siete.", "que", "Sin preposición."),
        ]
      ),
    ],
    [
      fb("Rápido.", "___ me preocupa es el precio.", "Lo que", "Relativo: Idea."),
      fb("Rápido.", "La chica con ___ bailé es argentina.", "la que", "Con + la que."),
      fb("Rápido.", "Los amigos ___ vinieron trajeron vino.", "que", "Sin preposición."),
      fb("Rápido.", "Es la razón por ___ lo hice.", "la que", "Por + la que."),
      fb("Rápido.", "Repite ___ has oído.", "lo que", "Lo que: no hay sustantivo antes."),
      fb("Rápido.", "Mi tío, ___ es médico, me ayudó. (persona, entre comas)", "quien", "Quien entre comas."),
      fb("Rápido.", "El edificio en ___ trabajo es muy moderno.", "el que", "En + el que."),
      mc(
        "«No sé ___ quieres decir.»",
        ["lo que", "que", "el que", "quien"],
        0,
        "Lo que."
      ),
    ]
  ),
  L(
    "relative-pronouns-2",
    "b1d-habla-de-ti-personas-importantes",
    "Habla de ti: personas y lugares importantes",
    "Describe con relativos a personas y lugares que importan en tu vida.",
    "6 min",
    [
      sec(
        "Describir con relativos",
        "Mi mejor amiga es una persona que… / con la que… El lugar en el que… Lo que más valoro de ella es…",
        [
          ["Mi abuela es la persona que más me ha enseñado.", "My grandmother is the person who has taught me the most."],
        ],
        [
          mc(
            "«Mi hermano es la persona con ___ más me río.»",
            ["la que", "que", "lo que", "el cual"],
            0,
            "Persona (femenino) + con → la que."
          ),
        ]
      ),
    ],
    [
      toEs("My best friend is someone who always listens to me.", "Mi mejor amiga es alguien que siempre me escucha.", "Relativo: Que.", ["Mi mejor amigo es alguien que siempre me escucha."]),
      toEs("The town where I grew up is by the sea.", "El pueblo en el que crecí está junto al mar.", "Relativo: En el que.", ["El pueblo donde crecí está junto al mar."]),
      toEs("What I value most is honesty.", "Lo que más valoro es la honestidad.", "Relativo: Lo que.", ["Lo que más valoro es la sinceridad."]),
      toEs("She is the teacher I learned the most from.", "Es la profesora de la que más aprendí.", "De + la que.", ["Es la profesora de quien más aprendí."]),
      fb("Completa.", "Es el lugar al ___ siempre quiero volver.", "que", "Al que."),
      fb("Completa.", "Mi padre, ___ es muy tranquilo, nunca grita. (persona, entre comas)", "quien", "Quien."),
      wo("Lo que más echo de menos de mi país es la comida.", "Lo que.", "What I miss most about my country is the food."),
    ]
  ),
  L(
    "relative-pronouns-mastery-check",
    "b1d-corrige-relativos",
    "Corrige el párrafo: relativos mal usados",
    "Un anuncio con quien para cosas, que tras preposición y «que» por «lo que». Corrígelo.",
    "6 min",
    [
      sec(
        "El anuncio",
        "«Alquilo un piso ✗ quien (→ que) tiene tres habitaciones. El barrio en ✗ que (→ el que) está es muy tranquilo. ✗ Que (→ Lo que) más gusta a los inquilinos es la terraza. La vecina con ✗ que (→ la que / quien) comparte rellano es encantadora.»",
        [
          ["Alquilo un piso que tiene tres habitaciones.", "I'm renting out a flat that has three bedrooms."],
        ],
        [
          fb("Corrige.", "Alquilo un piso ___ tiene tres habitaciones. (el anuncio dice: quien)", "que", "Quien solo para personas."),
        ]
      ),
    ],
    [
      fb("Corrige.", "El barrio en ___ está es muy tranquilo. (el anuncio dice: que)", "el que", "Preposición + el que."),
      fb("Corrige.", "___ más gusta es la terraza. (el anuncio dice: Que)", "Lo que", "Idea → lo que."),
      fb("Corrige.", "La vecina con ___ comparte rellano es encantadora. (el anuncio dice: que; usa el artículo)", "la que", "Con + la que."),
      fb("Corrige.", "Hay un parque ___ tiene columpios. (el anuncio dice: lo que)", "que", "Antecedente: parque."),
      fb("Corrige.", "El dueño, ___ vive abajo, es muy amable. (el anuncio dice: que cual)", "quien", "Persona entre comas."),
      mc(
        "¿Cuál es correcta?",
        ["La cocina, que es nueva, tiene lavavajillas.", "La cocina, quien es nueva, tiene lavavajillas.", "La cocina, lo que es nueva, tiene lavavajillas.", "La cocina, la que es nueva, lavavajillas."],
        0,
        "Cosa → que."
      ),
      toEs("The flat I rent is near the metro.", "El piso que alquilo está cerca del metro.", "Relativo: Que.", ["El piso que alquilo está al lado del metro."]),
    ]
  ),
  L(
    "relative-pronouns-mastery-check",
    "b1d-elige-explica-relativos",
    "Elige y explica: ¿por qué este relativo?",
    "Elige el relativo y la razón: sin preposición, con preposición, persona entre comas o idea.",
    "6 min",
    [
      sec(
        "Cuatro razones",
        "Que (sin preposición). El que/la que (con preposición). Quien (persona, con preposición o entre comas). Lo que (idea o «what»).",
        [
          ["El hotel en el que dormimos era barato, lo que nos vino bien.", "The hotel we slept in was cheap, which suited us."],
        ],
        [
          mc(
            "«El hotel en ___ dormimos era barato.»",
            ["el que — con preposición", "que — sin preposición", "lo que — idea", "quien — persona"],
            0,
            "En + el que."
          ),
        ]
      ),
    ],
    [
      mc(
        "«Era barato, ___ nos vino bien.»",
        ["lo que — toda la frase", "que — sustantivo", "el que — preposición", "quien — persona"],
        0,
        "Se refiere a la idea."
      ),
      mc(
        "«El recepcionista, ___ era muy joven, nos ayudó.»",
        ["quien — persona entre comas", "lo que — idea", "el que — preposición", "cuyo — posesión"],
        0,
        "Persona entre comas."
      ),
      mc(
        "«El desayuno ___ nos sirvieron era delicioso.»",
        ["que — sin preposición", "lo que — idea", "el que — preposición", "quien — persona"],
        0,
        "Sin preposición."
      ),
      fb("Completa.", "La calle por ___ paseamos era preciosa.", "la que", "Por + la que."),
      fb("Completa.", "No recuerdo ___ pagamos.", "lo que", "What we paid."),
      toEs("The waiter who served us was from Colombia.", "El camarero que nos atendió era de Colombia.", "Relativo: Que.", ["El camarero que nos sirvió era colombiano."]),
    ]
  ),
  L(
    "relative-pronouns-mastery-check",
    "b1d-dictado-relativos",
    "Dictado: frases largas con relativos",
    "Reordena frases con relativo + preposición + pronombres.",
    "6 min",
    [
      sec(
        "Orden",
        "Antecedente + (preposición + artículo) + que + resto: la amiga con la que viajé. El relativo va siempre justo después del antecedente.",
        [
          ["Esta es la foto de la que te hablé.", "This is the photo I told you about."],
        ],
        [
          mc(
            "Orden correcto:",
            ["Esta es la foto de la que te hablé.", "Esta es la foto la que de te hablé.", "Esta es de la foto que te hablé.", "Esta foto es la que de te hablé."],
            0,
            "Preposición + la que."
          ),
        ]
      ),
    ],
    [
      wo("Esta es la foto de la que te hablé ayer.", "De + la que.", "This is the photo I told you about yesterday."),
      wo("La chica con la que comparto piso es enfermera.", "Con + la que.", "The girl I share a flat with is a nurse."),
      wo("Lo que me dijiste no es verdad.", "Lo que.", "What you told me isn't true."),
      wo("El profesor, quien había vivido en Japón, nos enseñó a usar palillos.", "Quien entre comas.", "The teacher, who had lived in Japan, taught us to use chopsticks."),
      fb("Completa.", "Es el libro ___ más me ha gustado este año.", "que", "Relativo: Que."),
      toEn("No encuentro la caja en la que guardé las fotos.", "I can't find the box I kept the photos in.", "En la que.", ["I can't find the box where I kept the photos."]),
    ]
  ),
  L(
    "relative-pronouns-mastery-check",
    "b1d-practica-mezclada-relativos-tiempos",
    "Práctica mezclada: relativos con todos los tiempos",
    "Relativos dentro de frases con pasado, perfecto, futuro y subjuntivo de deseo.",
    "7 min",
    [
      sec(
        "Relativos en contexto",
        "El relativo no cambia el tiempo del verbo: La película que vimos ayer. El libro que he leído. El piso que alquilaremos. Quiero que conozcas a la chica con la que trabajo.",
        [
          ["Quiero que conozcas a la chica con la que trabajo.", "I want you to meet the girl I work with."],
        ],
        [
          fb("Completa.", "La película que ___ ayer era larguísima. (ver, nosotros)", "vimos", "Indefinido."),
        ]
      ),
    ],
    [
      fb("Completa.", "El libro que ___ este mes es genial. (leer, yo — perfecto)", "he leído", "Perfecto."),
      fb("Completa.", "El piso que ___ el año que viene tendrá terraza. (alquilar, nosotros)", "alquilaremos", "Futuro."),
      fb("Completa.", "Quiero que ___ a la chica con la que trabajo. (conocer, tú)", "conozcas", "Subjuntivo de deseo."),
      fb("Completa.", "El pueblo en el que ___ de niño era muy pequeño. (vivir, yo)", "vivía", "Imperfecto."),
      fb("Completa.", "La tienda en la que ___ el vestido ya había cerrado. (comprar, yo)", "compré", "Indefinido."),
      mc(
        "«Lo que ___ ayer me sorprendió.» (decir, tú)",
        ["dijiste", "digas", "dirás", "dices ayer"],
        0,
        "Indefinido."
      ),
      toEs("The friend I travelled with has moved to Berlin.", "La amiga con la que viajé se ha mudado a Berlín.", "Relativo + perfecto.", ["El amigo con el que viajé se ha mudado a Berlín.", "La amiga con quien viajé se ha mudado a Berlín."]),
    ]
  ),
  L(
    "relative-pronouns-drill-3",
    "b1d-cadena-dos-frases-una",
    "Cadena de transformaciones: de dos frases a una",
    "Seis pares de frases, seis relativos distintos: une sin repetir el sustantivo.",
    "6 min",
    [
      sec(
        "Unir frases",
        "Localiza la palabra repetida, sustitúyela por el relativo adecuado y pon la preposición delante si la hay: Hablé con una mujer. La mujer era médica. → La mujer con la que hablé era médica.",
        [
          ["La mujer con la que hablé era médica.", "The woman I talked to was a doctor."],
        ],
        [
          fb("Une.", "Compré una lámpara. La lámpara no funciona. → La lámpara ___ compré no funciona.", "que", "Relativo: Que."),
        ]
      ),
    ],
    [
      fb("Une.", "Escribí a un amigo. El amigo vive en Cuba. → El amigo al ___ escribí vive en Cuba.", "que", "Al que."),
      fb("Une.", "Duermo en una cama. La cama es incómoda. → La cama en la ___ duermo es incómoda.", "que", "En la que."),
      fb("Une.", "Trabajo con unos compañeros. Los compañeros son de México. → Los compañeros con ___ trabajo son de México.", "los que", "Con los que."),
      fb("Une.", "Perdí el tren. Eso me hizo llegar tarde. → Perdí el tren, ___ me hizo llegar tarde.", "lo que", "Relativo: Lo que."),
      fb("Une.", "Te presento a Juan. Juan es mi primo. → Te presento a Juan, ___ es mi primo.", "que", "Que entre comas (o quien)."),
      fb("Une.", "Siempre hablo de un tema. El tema es la música. → El tema del ___ siempre hablo es la música.", "que", "Del que."),
      toEs("The house we live in is very old.", "La casa en la que vivimos es muy antigua.", "En la que.", ["La casa donde vivimos es muy vieja."]),
    ]
  ),
  L(
    "relative-pronouns-drill-3",
    "b1d-ronda-relativos-preposiciones",
    "Ronda rápida: el verbo pide la preposición",
    "Hablar de, pensar en, soñar con, confiar en: la preposición del verbo aparece delante del relativo.",
    "6 min",
    [
      sec(
        "La preposición viene del verbo",
        "Hablar de → el tema del que hablo. Pensar en → la persona en la que pienso. Soñar con → la casa con la que sueño. Confiar en → el amigo en quien confío. Depender de → las personas de las que dependo.",
        [
          ["Es la casa con la que siempre he soñado.", "It's the house I've always dreamed of."],
        ],
        [
          fb("Rápido.", "Es el viaje con el ___ sueño desde niño. (soñar con)", "que", "Con el que."),
        ]
      ),
    ],
    [
      fb("Rápido.", "Es la persona en ___ más confío. (confiar en, persona)", "quien", "En quien."),
      fb("Rápido.", "Es un tema del ___ no se habla. (hablar de)", "que", "Del que."),
      fb("Rápido.", "Son los problemas en los ___ pienso cada noche. (pensar en)", "que", "En los que."),
      fb("Rápido.", "Es la gente de la ___ dependo. (depender de)", "que", "De la que."),
      fb("Rápido.", "Es el trabajo ___ el que me presenté. (presentarse a)", "al", "A + el → al."),
      fb("Rápido.", "Es la chica de la ___ me enamoré. (enamorarse de)", "que", "De la que."),
      mc(
        "«Es el equipo ___ juego desde hace años.» (jugar en)",
        ["en el que", "que", "del que", "lo que"],
        0,
        "Jugar en."
      ),
      toEs("It's the book I told you about.", "Es el libro del que te hablé.", "Hablar de.", []),
    ]
  ),
  L(
    "relative-pronouns-drill-3",
    "b1d-preguntas-relativos",
    "Preguntas y respuestas: ¿cuál es…?",
    "Responde a preguntas de identificación con relativos: «Es el que…», «Es la que…».",
    "6 min",
    [
      sec(
        "El que / la que para identificar",
        "—¿Cuál es tu coche? —El que está al lado del árbol. —¿Quién es Marta? —La que lleva gafas. El artículo concuerda con lo que se identifica.",
        [
          ["—¿Cuál es tu hermana? —La que lleva el vestido rojo.", "Which one is your sister? — The one in the red dress."],
        ],
        [
          fb("Responde.", "—¿Cuál es tu maleta? —___ que tiene una cinta verde.", "La", "Maleta → la que."),
        ]
      ),
    ],
    [
      fb("Responde.", "—¿Cuál es tu profesor? —___ que está hablando con el director.", "El", "Profesor → el que."),
      fb("Responde.", "—¿Qué zapatos compraste? —___ que vimos ayer.", "Los", "Zapatos → los que."),
      fb("Responde.", "—¿Qué fotos te gustan? —___ que hiciste en la playa.", "Las", "Fotos → las que."),
      fb("Responde.", "—¿Quiénes son tus primos? —Los ___ están jugando al fútbol.", "que", "Los que."),
      fb("Responde.", "—¿Qué te regaló? —___ que yo quería: un libro.", "Lo", "Lo que (idea)."),
      mc(
        "«—¿Cuál es tu piso? —___ tiene balcón.»",
        ["El que", "Lo que", "Quien", "Que"],
        0,
        "Piso → el que."
      ),
      toEs("—Which one is your bike? —The one next to the door.", "—¿Cuál es tu bici? —La que está al lado de la puerta.", "La que.", ["—¿Cuál es tu bicicleta? —La que está junto a la puerta."]),
    ]
  ),
  L(
    "relative-pronouns-drill-3",
    "b1d-cuento-anuncio-piso",
    "Cuento con huecos: el anuncio de un piso",
    "Un anuncio inmobiliario lleno de relativos: completa cada uno.",
    "6 min",
    [
      sec(
        "El anuncio",
        "«Se alquila piso que tiene tres dormitorios y una terraza desde la que se ve el mar. La cocina, que es nueva, está equipada. El edificio en el que está tiene ascensor. Lo que más gusta a los inquilinos es la luz.»",
        [
          ["Una terraza desde la que se ve el mar.", "A terrace from which you can see the sea."],
        ],
        [
          mc(
            "¿Qué se ve desde la terraza?",
            ["el mar", "la montaña", "el parque", "la ciudad"],
            0,
            "Desde la que se ve el mar."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "Se alquila piso ___ tiene tres dormitorios.", "que", "Relativo: Que."),
      fb("Completa.", "Una terraza desde la ___ se ve el mar.", "que", "Desde la que."),
      fb("Completa.", "La cocina, ___ es nueva, está equipada.", "que", "Que entre comas."),
      fb("Completa.", "El edificio en el ___ está tiene ascensor.", "que", "Relativo: En el que."),
      fb("Completa.", "___ más gusta es la luz.", "Lo que", "Relativo: Lo que."),
      fb("Completa.", "El dueño, a ___ puedes llamar a cualquier hora, es muy amable. (persona)", "quien", "A quien."),
      toEs("The bedroom I like most has a balcony.", "El dormitorio que más me gusta tiene balcón.", "Relativo: Que.", []),
    ]
  ),
  L(
    "relative-pronouns-drill-3",
    "b1d-habla-de-ti-objetos",
    "Habla de ti: objetos con historia",
    "Describe objetos importantes con relativos: el reloj que me regaló…, la caja en la que guardo…",
    "6 min",
    [
      sec(
        "Objetos y recuerdos",
        "El reloj que me regaló mi abuelo. La caja en la que guardo mis cartas. El libro del que nunca me separo. La foto con la que empezó todo.",
        [
          ["La caja en la que guardo mis cartas es de madera.", "The box I keep my letters in is wooden."],
        ],
        [
          mc(
            "«Es el libro del ___ nunca me separo.»",
            ["que", "cual lo", "quien", "lo que"],
            0,
            "Separarse de → del que."
          ),
        ]
      ),
    ],
    [
      toEs("The watch my grandfather gave me still works.", "El reloj que me regaló mi abuelo todavía funciona.", "Relativo: Que.", ["El reloj que me dio mi abuelo todavía funciona."]),
      toEs("The box I keep my letters in is under my bed.", "La caja en la que guardo mis cartas está debajo de mi cama.", "En la que.", []),
      toEs("It's a song I always think about.", "Es una canción en la que siempre pienso.", "En la que.", []),
      toEs("What I like most about this ring is its story.", "Lo que más me gusta de este anillo es su historia.", "Relativo: Lo que.", []),
      fb("Completa.", "Es la guitarra con ___ aprendí a tocar.", "la que", "Con la que."),
      fb("Completa.", "Son las fotos de las ___ te hablé.", "que", "De las que."),
      wo("La bicicleta con la que fui al colegio sigue en el garaje.", "Con la que.", "The bike I rode to school is still in the garage."),
    ]
  ),
  L(
    "relative-pronouns-drill-3",
    "b1d-pares-donde-en-que",
    "Pares mínimos: donde / en el que",
    "Para lugares, donde y en el que suelen ser intercambiables: practica los dos.",
    "5 min",
    [
      sec(
        "Dos formas para lugares",
        "La ciudad donde nací = la ciudad en la que nací. El bar donde nos conocimos = el bar en el que nos conocimos. Con otras preposiciones: la calle por donde / por la que pasamos.",
        [
          ["El pueblo donde veraneo es precioso.", "The village where I spend the summer is lovely."],
        ],
        [
          fb("Cambia.", "La casa donde vivo. → La casa en la ___ vivo.", "que", "En la que."),
        ]
      ),
    ],
    [
      fb("Cambia.", "El hospital donde nací. → El hospital en el ___ nací.", "que", "Relativo: En el que."),
      fb("Cambia.", "La playa en la que nos bañamos. → La playa ___ nos bañamos.", "donde", "Donde."),
      fb("Cambia.", "El camino por el que vinimos. → El camino por ___ vinimos.", "donde", "Por donde."),
      fb("Completa.", "Es la oficina ___ trabajo. (lugar, una palabra)", "donde", "Donde."),
      mc(
        "¿Cuál NO es correcta?",
        ["La ciudad que nací.", "La ciudad donde nací.", "La ciudad en la que nací.", "La ciudad en que nací."],
        0,
        "Falta la preposición."
      ),
      toEs("The café where we met has closed.", "La cafetería donde nos conocimos ha cerrado.", "Donde + perfecto.", ["La cafetería en la que nos conocimos ha cerrado.", "El café donde nos conocimos ha cerrado."]),
    ]
  ),
  L(
    "relative-pronouns-drill-3",
    "b1d-practica-mezclada-relativos-final",
    "Práctica mezclada: relativos sin pistas",
    "Última ronda del bloque: todos los relativos mezclados, con preposiciones de verbos y lo que.",
    "6 min",
    [
      sec(
        "Sin red",
        "Lee toda la frase, busca el antecedente, la preposición (a veces viene del verbo) y decide.",
        [
          ["Todo lo que tengo te lo debo a ti.", "Everything I have I owe to you."],
        ],
        [
          fb("Completa.", "Todo ___ tengo te lo debo a ti.", "lo que", "Todo lo que."),
        ]
      ),
    ],
    [
      fb("Completa.", "Es un amigo con ___ puedo contar siempre. (persona)", "quien", "Contar con → con quien."),
      fb("Completa.", "Los vecinos ___ viven arriba hacen mucho ruido.", "que", "Relativo: Que."),
      fb("Completa.", "No me gusta ___ estás haciendo.", "lo que", "Relativo: Lo que."),
      fb("Completa.", "Es la película de la ___ todo el mundo habla.", "que", "Hablar de → de la que."),
      fb("Completa.", "El jefe, ___ nunca sonríe, hoy estaba contento. (persona)", "quien", "Quien entre comas."),
      fb("Completa.", "La silla en ___ estás sentado está rota.", "la que", "En la que."),
      mc(
        "«Me regaló un libro, ___ me hizo mucha ilusión.»",
        ["lo que", "que", "el que", "quien"],
        0,
        "Se refiere a toda la frase."
      ),
      toEs("That's exactly what I wanted.", "Eso es exactamente lo que quería.", "Relativo: Lo que.", ["Es justo lo que quería."]),
    ]
  ),
  L(
    "passive-voice-se-1",
    "b1d-patron-se-vende-se-venden",
    "Práctica de patrones: se vende / se venden",
    "Un solo marco, muchos sustantivos: el verbo sigue al sustantivo en número.",
    "6 min",
    [
      sec(
        "El sustantivo manda",
        "En el se pasivo, el verbo va en tercera persona y concuerda con el sustantivo: se vende una casa, se venden dos casas. Mira siempre el sustantivo, no la persona que hace la acción (que no aparece).",
        [
          ["Se alquila un apartamento en el centro.", "An apartment in the center for rent."],
          ["Se alquilan habitaciones para estudiantes.", "Rooms for students for rent."],
        ],
        [
          fb("Completa.", "Se ___ patinetes eléctricos. (reparar)", "reparan", "Patinetes es plural → reparan."),
        ]
      ),
    ],
    [
      fb("Mismo marco.", "Se ___ un coche en buen estado. (vender)", "vende", "Un coche → singular."),
      fb("Mismo marco.", "Se ___ muebles antiguos. (comprar)", "compran", "Muebles → plural."),
      fb("Mismo marco.", "Se ___ clases de guitarra. (dar)", "dan", "Clases → plural."),
      fb("Mismo marco.", "Se ___ camarero con experiencia. (buscar)", "busca", "Un camarero → singular."),
      fb("Mismo marco.", "Se ___ ordenadores y móviles. (reparar)", "reparan", "Dos sustantivos → plural."),
      fb("Mismo marco.", "Se ___ una habitación luminosa. (alquilar)", "alquila", "Una habitación → singular."),
      mc(
        "Se ___ zapatos a mano en este taller.",
        ["hacen", "hace", "hacemos", "hago"],
        0,
        "Zapatos → tercera persona plural."
      ),
      toEs("Used books are bought here.", "Aquí se compran libros usados.", "Libros → compran.", ["Se compran libros usados aquí."]),
    ]
  ),
  L(
    "passive-voice-se-1",
    "b1d-pares-pasivo-impersonal",
    "Pares mínimos: se pasivo o se impersonal",
    "Dos frases casi iguales: una con sustantivo que manda, otra sin él.",
    "6 min",
    [
      sec(
        "¿Hay sustantivo?",
        "Se venden flores (pasivo: las flores deciden el plural). Se vive bien aquí (impersonal: no hay sustantivo, siempre singular). Si después del verbo hay una persona con «a», el verbo queda en singular: Se ayuda a los vecinos.",
        [
          ["Se come bien en este pueblo.", "You eat well in this town."],
          ["Se comen muchas frutas en verano.", "A lot of fruit is eaten in summer."],
        ],
        [
          mc(
            "«Se ___ muy tranquilo en el campo.» (vivir)",
            ["vive", "viven", "vivimos", "vivo"],
            0,
            "Impersonal: no hay sustantivo → singular."
          ),
        ]
      ),
    ],
    [
      fb("Par A.", "En esta ciudad se ___ mucho. (trabajar)", "trabaja", "Impersonal → singular."),
      fb("Par B.", "En esta fábrica se ___ muchas horas extra. (trabajar)", "trabajan", "Horas extra → plural."),
      fb("Par A.", "Aquí se ___ tarde. (cenar)", "cena", "Impersonal → singular."),
      fb("Par B.", "Aquí se ___ platos muy picantes. (cenar)", "cenan", "Platos → plural."),
      fb("Par A.", "En este hospital se ___ a los pacientes con cariño. (tratar)", "trata", "Personas con «a» → singular."),
      fb("Par B.", "En este hospital se ___ enfermedades raras. (tratar)", "tratan", "Enfermedades → plural."),
      ms(
        "¿Qué frases son impersonales (sin sustantivo que concuerde)?",
        ["Se duerme mal con este calor.", "Se habla de política en la cena.", "Se venden entradas en la puerta.", "Se necesitan voluntarios."],
        [0, 1],
        "Las dos primeras no tienen sustantivo sujeto; «de política» lleva preposición."
      ),
      toEs("People sleep very well here.", "Aquí se duerme muy bien.", "Impersonal.", ["Se duerme muy bien aquí."]),
    ]
  ),
  L(
    "passive-voice-se-1",
    "b1d-cadena-ser-a-se",
    "Cadena de transformaciones: de ser + participio a se",
    "La pasiva formal de los periódicos convertida en la pasiva de la calle.",
    "7 min",
    [
      sec(
        "Dos pasivas",
        "Pasiva con ser: Las entradas fueron vendidas en una hora. Pasiva con se: Se vendieron las entradas en una hora. Con se no aparece el agente (por…), y el participio desaparece: el verbo toma el tiempo de ser.",
        [
          ["El puente fue construido en 1920. → Se construyó el puente en 1920.", "The bridge was built in 1920."],
        ],
        [
          fb("Transforma.", "Los resultados fueron publicados ayer. → Se ___ los resultados ayer.", "publicaron", "Fueron + participio → se + indefinido plural."),
        ]
      ),
    ],
    [
      fb("Transforma.", "La reunión fue cancelada. → Se ___ la reunión.", "canceló", "Fue → indefinido singular."),
      fb("Transforma.", "Los árboles son cortados cada invierno. → Se ___ los árboles cada invierno.", "cortan", "Son → presente plural."),
      fb("Transforma.", "La carta es escrita a mano. → Se ___ la carta a mano.", "escribe", "Es → presente singular."),
      fb("Transforma.", "Las calles fueron limpiadas por la noche. → Se ___ las calles por la noche.", "limpiaron", "Fueron → indefinido plural."),
      fb("Transforma.", "El museo es visitado por miles de turistas. → Se ___ el museo; miles de turistas vienen cada año.", "visita", "Es → presente singular."),
      mc(
        "«Los premios serán entregados mañana.» Con se:",
        ["Se entregarán los premios mañana.", "Se entregará los premios mañana.", "Se entregaron los premios mañana.", "Se entregan los premios ayer."],
        0,
        "Serán → futuro plural."
      ),
      wo("Se inauguraron dos parques nuevos el año pasado.", "Se + indefinido plural.", "Two new parks were opened last year."),
      toEs("The windows were broken during the storm.", "Se rompieron las ventanas durante la tormenta.", "Se + indefinido plural.", ["Las ventanas se rompieron durante la tormenta.", "Las ventanas fueron rotas durante la tormenta."]),
    ]
  ),
  L(
    "passive-voice-se-2",
    "b1d-circuito-anuncios-trabajo",
    "Circuito: anuncios de trabajo",
    "Se busca, se ofrece, se requiere: el lenguaje fijo de las ofertas de empleo.",
    "7 min",
    [
      sec(
        "Un anuncio típico",
        "Se busca dependiente. Se ofrece contrato indefinido. Se requieren dos años de experiencia. Se valorarán idiomas. Cada verbo concuerda con lo que viene después.",
        [
          ["Se requieren conocimientos de inglés.", "Knowledge of English is required."],
          ["Se ofrece buen ambiente de trabajo.", "A good work environment is offered."],
        ],
        [
          fb("Completa.", "Se ___ carné de conducir. (requerir)", "requiere", "Un carné → singular."),
        ]
      ),
    ],
    [
      fb("Estación 1.", "Se ___ recepcionista para hotel. (buscar)", "busca", "Una persona → singular."),
      fb("Estación 1.", "Se ___ dos cocineros para el verano. (necesitar)", "necesitan", "Dos cocineros → plural."),
      fb("Estación 2.", "Se ___ salario competitivo. (ofrecer)", "ofrece", "Salario → singular."),
      fb("Estación 2.", "Se ___ horarios flexibles. (ofrecer)", "ofrecen", "Horarios → plural."),
      fb("Estación 3.", "Se ___ experiencia en ventas. (valorar, futuro)", "valorará", "Futuro singular."),
      fb("Estación 3.", "Se ___ idiomas y disponibilidad para viajar. (valorar, futuro)", "valorarán", "Futuro plural."),
      mt(
        "Relaciona la expresión con su significado.",
        [
          ["Se requiere", "It is required"],
          ["Se ofrece", "It is offered"],
          ["Se valorará", "It will be valued"],
          ["Se busca", "Wanted"],
        ],
        "Fórmulas de los anuncios."
      ),
      toEs("Waiters with experience are needed.", "Se necesitan camareros con experiencia.", "Camareros → plural.", ["Se necesitan meseros con experiencia."]),
    ]
  ),
  L(
    "passive-voice-se-2",
    "b1d-elige-explica-se-negocios",
    "Elige y explica: el se en la empresa",
    "Informes, reuniones y ventas: elige la forma y di por qué.",
    "6 min",
    [
      sec(
        "Pregúntate dos cosas",
        "1) ¿Hay un sustantivo sin preposición después del verbo? → concuerda con él. 2) ¿No lo hay, o es una persona con «a»? → singular. Ejemplos: Se firmaron los contratos. Se habla de despidos. Se contrató a tres personas.",
        [
          ["Se firmaron los contratos ayer.", "The contracts were signed yesterday."],
          ["Se contrató a tres personas nuevas.", "Three new people were hired."],
        ],
        [
          mc(
            "«Se ___ a dos ingenieros este mes.» (contratar)",
            ["contrató", "contrataron", "contratamos", "contraté"],
            0,
            "Personas con «a» → singular."
          ),
        ]
      ),
    ],
    [
      mc(
        "«En la reunión se ___ los presupuestos del año.»",
        ["aprobaron", "aprobó", "aprobamos", "aprobé"],
        0,
        "Presupuestos, sin preposición → plural."
      ),
      mc(
        "«En la reunión se ___ de los presupuestos.»",
        ["habló", "hablaron", "hablamos", "hablé"],
        0,
        "«De los presupuestos» lleva preposición → singular."
      ),
      mc(
        "«Este trimestre se ___ más productos que nunca.»",
        ["han vendido", "ha vendido", "hemos vendido", "he vendido"],
        0,
        "Productos → plural, también en perfecto."
      ),
      mc(
        "«Se ___ a los clientes antes de cambiar el precio.»",
        ["avisará", "avisarán", "avisaremos", "avisaré"],
        0,
        "Personas con «a» → singular."
      ),
      fb("Completa.", "Se ___ una nueva oficina en Valencia el mes pasado. (abrir)", "abrió", "Una oficina → singular."),
      fb("Completa.", "Se ___ todos los correos antes de las diez. (responder)", "respondieron", "Correos → plural."),
      toEs("A new manager was hired.", "Se contrató a un nuevo gerente.", "Persona con a → singular.", ["Se contrató a una nueva gerente.", "Se contrató a un gerente nuevo."]),
    ]
  ),
  L(
    "passive-voice-se-2",
    "b1d-cuento-informe-anual",
    "Cuento con huecos: el informe anual",
    "Un breve informe de empresa con el se en varios tiempos.",
    "7 min",
    [
      sec(
        "El informe",
        "«Este año se han abierto tres tiendas y se ha contratado a cuarenta empleados. En marzo se lanzó una aplicación nueva y se vendieron más de diez mil unidades. El próximo año se invertirá en formación y se crearán dos departamentos.»",
        [
          ["Se han abierto tres tiendas.", "Three shops have been opened."],
          ["Se invertirá en formación.", "There will be investment in training."],
        ],
        [
          mc(
            "¿Por qué «se ha contratado» va en singular?",
            ["Porque «a cuarenta empleados» son personas con «a».", "Porque cuarenta es singular.", "Porque es pretérito perfecto.", "Porque el sujeto es «este año»."],
            0,
            "Personas con a → singular."
          ),
        ]
      ),
    ],
    [
      fb("Completa el informe.", "Este año se ___ tres tiendas. (abrir, perfecto)", "han abierto", "Tiendas → plural; abrir → abierto."),
      fb("Completa el informe.", "En marzo se ___ una aplicación nueva. (lanzar)", "lanzó", "Una aplicación → singular."),
      fb("Completa el informe.", "Se ___ más de diez mil unidades. (vender, indefinido)", "vendieron", "Unidades → plural."),
      fb("Completa el informe.", "El próximo año se ___ dos departamentos. (crear)", "crearán", "Futuro plural."),
      fb("Completa el informe.", "El próximo año se ___ en formación. (invertir)", "invertirá", "Sin sustantivo directo → singular."),
      ms(
        "¿Qué verbos del informe van en plural?",
        ["se han abierto", "se vendieron", "se lanzó", "se invertirá"],
        [0, 1],
        "Tiendas y unidades son plurales."
      ),
      toEs("Two new products will be launched next year.", "El próximo año se lanzarán dos productos nuevos.", "Futuro plural.", ["Se lanzarán dos productos nuevos el próximo año."]),
    ]
  ),
  L(
    "passive-voice-possessive-pronouns-drill-3",
    "b1d-habla-de-ti-receta-se",
    "Habla de ti: tu receta con se",
    "Las recetas en español se escriben con se: se corta, se añade, se mezcla.",
    "7 min",
    [
      sec(
        "Instrucciones sin persona",
        "Las recetas y las instrucciones usan el se pasivo: Se pelan las patatas. Se corta la cebolla. Se añade sal. Se mezcla todo. Piensa en un plato que sabes hacer y descríbelo así.",
        [
          ["Primero se lavan las verduras.", "First the vegetables are washed."],
          ["Luego se calienta el aceite.", "Then the oil is heated."],
        ],
        [
          fb("Completa.", "Se ___ los huevos en un bol. (batir)", "baten", "Huevos → plural."),
        ]
      ),
    ],
    [
      fb("Tu receta.", "Primero se ___ el agua. (hervir)", "hierve", "El agua → singular; hervir cambia e → ie."),
      fb("Tu receta.", "Después se ___ la pasta durante diez minutos. (cocer)", "cuece", "La pasta → singular; cocer cambia o → ue."),
      fb("Tu receta.", "Se ___ los tomates en trozos pequeños. (cortar)", "cortan", "Tomates → plural."),
      fb("Tu receta.", "Se ___ un poco de sal y pimienta. (añadir)", "añade", "Un poco → singular."),
      fb("Tu receta.", "Al final se ___ todo con queso. (servir)", "sirve", "Todo → singular; servir cambia e → i."),
      wo("Se fríen las patatas en aceite muy caliente.", "Se + verbo plural.", "The potatoes are fried in very hot oil."),
      toEs("First the onion is chopped and then it is fried.", "Primero se corta la cebolla y luego se fríe.", "Dos veces se pasivo singular.", ["Primero se pica la cebolla y luego se fríe.", "Primero se corta la cebolla y después se fríe."]),
      toEs("Salt is added at the end.", "Se añade la sal al final.", "La sal → singular.", ["Al final se añade la sal.", "Se añade sal al final."]),
    ]
  ),
  L(
    "passive-voice-possessive-pronouns-drill-3",
    "b1d-ronda-rapida-se",
    "Ronda rápida: se pasivo e impersonal",
    "Diez decisiones rápidas: ¿singular o plural?",
    "5 min",
    [
      sec(
        "Regla de bolsillo",
        "Sustantivo plural sin preposición → plural. Todo lo demás (singular, sin sustantivo, persona con «a», infinitivo) → singular. Ejemplo con infinitivo: Se prohíbe fumar.",
        [
          ["Se prohíbe aparcar aquí.", "Parking is forbidden here."],
        ],
        [
          mc(
            "«Se ___ tomar fotos en el museo.»",
            ["prohíbe", "prohíben", "prohibimos", "prohíbo"],
            0,
            "Un infinitivo → singular."
          ),
        ]
      ),
    ],
    [
      fb("Rápido.", "Se ___ perros. (admitir)", "admiten", "Perros → plural."),
      fb("Rápido.", "Se ___ pagar con tarjeta. (poder)", "puede", "Infinitivo → singular."),
      fb("Rápido.", "No se ___ devoluciones. (aceptar)", "aceptan", "Devoluciones → plural."),
      fb("Rápido.", "Se ___ a los ganadores por teléfono. (llamar, futuro)", "llamará", "Personas con a → singular."),
      fb("Rápido.", "En verano se ___ más helados. (comer)", "comen", "Helados → plural."),
      fb("Rápido.", "Se ___ muy bien en este restaurante. (comer)", "come", "Impersonal → singular."),
      fb("Rápido.", "Se ___ las llaves en recepción. (dejar)", "dejan", "Llaves → plural."),
      fb("Rápido.", "Se ___ hablar en voz baja en la biblioteca. (pedir)", "pide", "Infinitivo → singular; pedir cambia e → i."),
      mc(
        "«No se ___ menores de dieciocho años.» (permitir)",
        ["permite la entrada a", "permiten la entrada a", "permitimos a", "permito a"],
        0,
        "La entrada → singular."
      ),
    ]
  ),
  L(
    "passive-voice-possessive-pronouns-drill-3",
    "b1d-corrige-letreros-se",
    "Corrige el párrafo: letreros con errores",
    "Unos carteles mal escritos: encuentra la concordancia equivocada.",
    "6 min",
    [
      sec(
        "Los carteles de la calle",
        "«Se vende pisos. Se alquilan un local. Se busca camareros. Se habla inglés y francés.» Tres de estos carteles tienen un error de concordancia; uno está bien.",
        [
          ["Se venden pisos.", "Flats for sale."],
          ["Se habla inglés y francés.", "English and French spoken."],
        ],
        [
          mc(
            "¿Qué cartel está bien escrito?",
            ["Se habla inglés y francés.", "Se vende pisos.", "Se alquilan un local.", "Se busca camareros."],
            0,
            "Con idiomas se usa el singular fijo: Se habla inglés y francés."
          ),
        ]
      ),
    ],
    [
      toEs("Corrige: «Se vende pisos.»", "Se venden pisos.", "Pisos → plural."),
      toEs("Corrige: «Se alquilan un local.»", "Se alquila un local.", "Un local → singular."),
      toEs("Corrige: «Se busca camareros.»", "Se buscan camareros.", "Camareros → plural."),
      toEs("Corrige: «Se arreglan un reloj en diez minutos.»", "Se arregla un reloj en diez minutos.", "Un reloj → singular."),
      toEs("Corrige: «Se necesita voluntarios para el sábado.»", "Se necesitan voluntarios para el sábado.", "Voluntarios → plural."),
      toEs("Corrige: «Se atienden a los clientes por orden de llegada.»", "Se atiende a los clientes por orden de llegada.", "Personas con a → singular."),
      ms(
        "¿Qué carteles son correctos?",
        ["Se reparan bicicletas.", "Se hacen fotocopias.", "Se regala gatitos.", "Se cierran la puerta a las diez."],
        [0, 1],
        "Bicicletas y fotocopias son plurales; los otros dos fallan."
      ),
    ]
  ),
  L(
    "passive-voice-possessive-pronouns-drill-3",
    "b1d-dictado-se-ciudad",
    "Dictado: cómo se vive en mi ciudad",
    "Frases con se sobre costumbres, leídas y reconstruidas palabra por palabra.",
    "6 min",
    [
      sec(
        "Costumbres",
        "Para hablar de costumbres generales, el español usa el se: En mi ciudad se cena tarde. Se sale mucho los viernes. Se toman tapas antes de comer.",
        [
          ["En mi ciudad se cena muy tarde.", "In my city people have dinner very late."],
          ["Los domingos se come en familia.", "On Sundays people eat with family."],
        ],
        [
          wo("Aquí se sale mucho los fines de semana.", "Impersonal.", "People go out a lot here at weekends."),
        ]
      ),
    ],
    [
      wo("En mi pueblo se celebran muchas fiestas en agosto.", "Fiestas → plural.", "Many festivals are celebrated in my town in August."),
      wo("En invierno se usa mucho la bicicleta.", "La bicicleta → singular.", "The bicycle is used a lot in winter."),
      wo("No se oye nada desde mi ventana.", "Nada → singular.", "Nothing can be heard from my window."),
      wo("Se ven muchos turistas por el centro.", "Turistas → plural.", "You see many tourists around the center."),
      toEs("In my city people walk a lot.", "En mi ciudad se camina mucho.", "Impersonal.", ["En mi ciudad se anda mucho."]),
      toEs("In my country people have lunch at two.", "En mi país se come a las dos.", "Impersonal.", ["En mi país se almuerza a las dos."]),
      toEs("Churros are eaten for breakfast here.", "Aquí se comen churros en el desayuno.", "Churros → plural.", ["Aquí se desayunan churros.", "Se comen churros en el desayuno aquí."]),
    ]
  ),
  L(
    "passive-voice-possessive-pronouns-drill-3",
    "b1d-practica-mezclada-se-final",
    "Práctica mezclada: el se en todos los tiempos",
    "Presente, indefinido, perfecto y futuro con el mismo control de concordancia.",
    "7 min",
    [
      sec(
        "El tiempo cambia, la regla no",
        "Se venden → se vendieron → se han vendido → se venderán. Solo cambia el tiempo; el número sigue al sustantivo.",
        [
          ["Se han reparado todas las farolas.", "All the streetlights have been repaired."],
          ["Se pintará el edificio en primavera.", "The building will be painted in spring."],
        ],
        [
          fb("Completa.", "El año pasado se ___ muchas casas en esta zona. (construir)", "construyeron", "Indefinido plural."),
        ]
      ),
    ],
    [
      fb("Presente.", "Hoy en día se ___ más libros digitales que en papel. (leer)", "leen", "Libros → plural."),
      fb("Indefinido.", "Ayer se ___ el nuevo horario de trenes. (anunciar)", "anunció", "El horario → singular."),
      fb("Perfecto.", "Esta semana se ___ tres accidentes en la autopista. (producir)", "han producido", "Accidentes → plural."),
      fb("Futuro.", "Mañana se ___ los resultados del concurso. (conocer)", "conocerán", "Resultados → plural."),
      fb("Imperfecto.", "Antes se ___ más cartas a mano. (escribir)", "escribían", "Cartas → plural."),
      mc(
        "«Cuando llegué, ya se ___ todas las entradas.»",
        ["habían vendido", "había vendido", "han vendido", "vendían"],
        0,
        "Pluscuamperfecto plural."
      ),
      toEs("A lot of bread used to be eaten in my house.", "En mi casa se comía mucho pan.", "Imperfecto singular.", ["Se comía mucho pan en mi casa."]),
      toEs("The streets will be closed on Sunday.", "Las calles se cerrarán el domingo.", "Futuro plural.", ["Se cerrarán las calles el domingo.", "El domingo se cerrarán las calles."]),
    ]
  ),
  L(
    "possessive-pronouns-1",
    "b1d-patron-el-mio-la-mia",
    "Práctica de patrones: el mío, la mía, los míos, las mías",
    "El pronombre concuerda con la cosa, no con el dueño.",
    "6 min",
    [
      sec(
        "Mira la cosa",
        "Mi coche → el mío. Mi casa → la mía. Mis libros → los míos. Mis llaves → las mías. Lo mismo con tuyo, suyo, nuestro y vuestro. Un chico habla de su mochila: la mía (mochila es femenina).",
        [
          ["Tu móvil es nuevo; el mío es viejo.", "Your phone is new; mine is old."],
          ["Mis padres viven lejos; los tuyos viven cerca.", "My parents live far away; yours live nearby."],
        ],
        [
          fb("Completa.", "Tu bicicleta es roja; ___ es azul. (yo)", "la mía", "Bicicleta → femenino singular."),
        ]
      ),
    ],
    [
      fb("Mismo marco.", "Tu abrigo es largo; ___ es corto. (yo)", "el mío", "Abrigo → masculino."),
      fb("Mismo marco.", "Mis gafas son negras; ___ son marrones. (tú)", "las tuyas", "Gafas → femenino plural."),
      fb("Mismo marco.", "Nuestro piso es pequeño; ___ es enorme. (ellos)", "el suyo", "Piso → masculino."),
      fb("Mismo marco.", "Tus zapatos están limpios; ___ están sucios. (nosotros)", "los nuestros", "Zapatos → masculino plural."),
      fb("Mismo marco.", "Mi habitación da a la calle; ___ da al patio. (vosotros)", "la vuestra", "Habitación → femenino."),
      mc(
        "Pedro habla de sus maletas: «___ son las verdes.»",
        ["Las mías", "Los míos", "El mío", "La mía"],
        0,
        "Maletas → femenino plural, aunque habla un hombre."
      ),
      toEs("Your keys are here. Where are mine?", "Tus llaves están aquí. ¿Dónde están las mías?", "Llaves → las mías."),
    ]
  ),
  L(
    "possessive-pronouns-1",
    "b1d-pares-mi-el-mio",
    "Pares mínimos: mi o el mío, es mío o es el mío",
    "Adjetivo con sustantivo, pronombre sin él; y el artículo después de ser.",
    "6 min",
    [
      sec(
        "Con sustantivo o sin él",
        "Mi perro (adjetivo, delante del sustantivo). El mío (pronombre, sustituye al sustantivo). Después de ser: Este perro es mío (de quién es) / Este perro es el mío (cuál de varios).",
        [
          ["Ese paraguas es mío.", "That umbrella is mine."],
          ["—¿Cuál es tu paraguas? —El mío es el negro.", "Which is your umbrella? Mine is the black one."],
        ],
        [
          mc(
            "«—¿De quién es esta chaqueta? —Es ___.»",
            ["mía", "mi", "la mi", "mío"],
            0,
            "Después de ser, sin artículo; chaqueta → femenino."
          ),
        ]
      ),
    ],
    [
      fb("Par A.", "___ hermano trabaja en un banco. (yo)", "Mi", "Delante del sustantivo → adjetivo."),
      fb("Par B.", "Mi hermano trabaja en un banco; ___ trabaja en un hospital. (tú)", "el tuyo", "Sin sustantivo → pronombre."),
      fb("Par A.", "Estos cuadernos son ___. (nosotros)", "nuestros", "Después de ser, sin artículo."),
      fb("Par B.", "Hay tres cuadernos; ___ es el azul. (yo)", "el mío", "Elegir entre varios → con artículo."),
      fb("Par A.", "¿Es ___ este cargador? (tú)", "tuyo", "Pregunta de posesión → sin artículo."),
      mc(
        "«He olvidado mi bolígrafo. ¿Me dejas ___?»",
        ["el tuyo", "tu", "tuyo", "tuya"],
        0,
        "Complemento directo → con artículo."
      ),
      toEs("This seat is mine.", "Este asiento es mío.", "Ser + posesivo sin artículo.", ["Este sitio es mío."]),
      toEs("My sister is older than yours.", "Mi hermana es mayor que la tuya.", "Hermana → la tuya."),
    ]
  ),
  L(
    "possessive-pronouns-2",
    "b1d-elige-explica-el-de-el",
    "Elige y explica: el suyo o el de ella",
    "Cuándo el suyo es ambiguo y cómo lo aclaran los hablantes.",
    "6 min",
    [
      sec(
        "Aclarar al dueño",
        "Juan y Ana tienen coche. «El suyo es rojo» puede ser de Juan o de Ana. Para aclarar: el de él / el de ella. Lo mismo con ustedes: el de ustedes.",
        [
          ["El coche de Ana es rojo y el de él es gris.", "Ana's car is red and his is grey."],
        ],
        [
          mc(
            "Marta y Luis traen maletas. Quieres decir que la de Luis pesa más:",
            ["La de él pesa más.", "La suya pesa más.", "El de él pesa más.", "La de ella pesa más."],
            0,
            "Maleta → la; dueño Luis → de él."
          ),
        ]
      ),
    ],
    [
      mc(
        "Hablas con dos clientes (ustedes). «¿Estas son ___?»",
        ["las de ustedes", "las de ellos", "los de ustedes", "las de él"],
        0,
        "Ustedes → de ustedes; femenino plural si son llaves, por ejemplo."
      ),
      mc(
        "«Mi idea es buena, pero ___ es mejor.» (la idea de Sofía, en una reunión con muchos)",
        ["la de Sofía", "la suya", "el de Sofía", "suya"],
        0,
        "Con muchas personas, el nombre evita la ambigüedad."
      ),
      fb("Aclara.", "Tengo el número de Carlos, pero no ___. (de su hermana)", "el de ella", "Número → el; dueña → ella."),
      fb("Aclara.", "Las fotos de Elena son bonitas, pero ___ son mejores. (de su novio)", "las de él", "Fotos → las; dueño → él."),
      fb("Aclara.", "Nuestra casa está aquí; ___ está al lado. (de ellos)", "la de ellos", "Casa → la."),
      toEs("My passport is here, but where is hers?", "Mi pasaporte está aquí, pero ¿dónde está el de ella?", "Aclarar dueña.", ["Mi pasaporte está aquí, pero ¿dónde está el suyo?"]),
      toEs("Their children are younger than ours.", "Sus hijos son más pequeños que los nuestros.", "Hijos → los nuestros.", ["Los hijos de ellos son más pequeños que los nuestros."]),
    ]
  ),
  L(
    "possessive-pronouns-2",
    "b1d-cuento-mudanza",
    "Cuento con huecos: la mudanza",
    "Tres compañeros de piso separan sus cosas antes de mudarse.",
    "7 min",
    [
      sec(
        "Las cajas",
        "Irene, Tomás y Bea dejan el piso. Irene: «Estas tazas son mías. ¿Los libros de cocina son tuyos, Tomás?» Tomás: «No, los míos están en la caja azul. Esos son de Bea.» Bea: «Sí, son míos. ¿Y la lámpara?» Irene: «Es nuestra; la compramos juntos.»",
        [
          ["Los míos están en la caja azul.", "Mine are in the blue box."],
          ["Es nuestra; la compramos juntos.", "It's ours; we bought it together."],
        ],
        [
          mc(
            "¿Por qué Bea dice «son míos»?",
            ["Porque «libros» es masculino plural.", "Porque Bea es un chico.", "Porque se refiere a la lámpara.", "Porque siempre es masculino."],
            0,
            "Concuerda con los libros."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "Irene: «Estas tazas son ___.»", "mías", "Tazas → femenino plural."),
      fb("Completa.", "Tomás: «No, ___ están en la caja azul.»", "los míos", "Libros → con artículo como sujeto."),
      fb("Completa.", "Irene: «La lámpara es ___; la compramos juntos.»", "nuestra", "Lámpara → femenino; de todos."),
      fb("Completa.", "Bea: «Tomás, ¿este cargador es ___ o de Irene?»", "tuyo", "Cargador → masculino."),
      fb("Completa.", "Tomás: «No, ___ es blanco. Ese es de ella.»", "el mío", "Sujeto → con artículo."),
      ms(
        "¿Qué formas son correctas para «la sartén de Irene y Bea» (dicho por Tomás)?",
        ["la suya", "la de ellas", "el suyo", "la de él"],
        [0, 1],
        "Sartén es femenino; las dueñas son ellas."
      ),
      toEs("Those plates aren't mine; they're Tomás's.", "Esos platos no son míos; son de Tomás.", "Platos → míos."),
    ]
  ),
  L(
    "possessive-pronouns-2",
    "b1d-preguntas-de-quien-es",
    "Preguntas y respuestas: ¿de quién es?",
    "Responde con el posesivo que corresponde, sin repetir el sustantivo.",
    "6 min",
    [
      sec(
        "Pregunta y respuesta",
        "—¿De quién es este libro? —Es mío. —¿Cuál es tu asiento? —El mío es el 14B. —¿Son vuestras estas bolsas? —Sí, son nuestras.",
        [
          ["—¿Son vuestras estas bolsas? —Sí, son nuestras.", "Are these bags yours? Yes, they're ours."],
        ],
        [
          fb("Responde.", "—¿Es tuya esta bufanda? —Sí, es ___.", "mía", "Bufanda → femenino."),
        ]
      ),
    ],
    [
      fb("Responde.", "—¿Son tuyos estos guantes? —No, no son ___.", "míos", "Guantes → masculino plural."),
      fb("Responde.", "—¿Es vuestro este perro? —Sí, es ___.", "nuestro", "Perro → masculino."),
      fb("Responde.", "—¿Cuál es tu taquilla? —___ es la número tres.", "La mía", "Taquilla → femenino, sujeto."),
      fb("Responde.", "—¿Es de usted esta cartera? —Sí, es ___, gracias.", "mía", "Cartera → femenino."),
      fb("Responde.", "—¿Son de tus padres estas llaves? —Sí, son ___.", "suyas", "Llaves → femenino plural."),
      mc(
        "—¿Es vuestra esta tienda de campaña? —No, ___ es la verde.",
        ["la nuestra", "nuestra", "el nuestro", "la vuestra"],
        0,
        "Sujeto, elegir entre varias → con artículo."
      ),
      toEs("Whose are these glasses? Are they yours, madam?", "¿De quién son estas gafas? ¿Son suyas, señora?", "Usted → suyas.", ["¿De quién son estas gafas? ¿Son de usted, señora?"]),
    ]
  ),
  L(
    "passive-voice-possessive-pronouns-drill-3",
    "b1d-ronda-posesivos",
    "Ronda rápida: posesivos",
    "Doce decisiones rápidas: género, número y artículo.",
    "5 min",
    [
      sec(
        "Tres preguntas",
        "¿Qué cosa? (género y número). ¿De quién? (mío, tuyo, suyo, nuestro, vuestro). ¿Hace falta artículo? (sí como sujeto u objeto; normalmente no después de ser).",
        [
          ["Prefiero el tuyo.", "I prefer yours."],
        ],
        [
          fb("Rápido.", "Esta taza es ___. (yo)", "mía", "Ser → sin artículo."),
        ]
      ),
    ],
    [
      fb("Rápido.", "Me gusta tu jersey, pero prefiero ___. (yo)", "el mío", "Objeto → con artículo."),
      fb("Rápido.", "Esas maletas no son ___. (nosotros)", "nuestras", "Maletas → femenino plural."),
      fb("Rápido.", "Mi examen fue fácil; ___ fue difícil. (tú)", "el tuyo", "Examen → masculino."),
      fb("Rápido.", "¿Estos asientos son ___, chicos? (vosotros)", "vuestros", "Vosotros → vuestros."),
      fb("Rápido.", "Mis notas son buenas, pero ___ son mejores. (ella)", "las suyas", "Notas → femenino plural."),
      fb("Rápido.", "Tengo mi entrada. ¿Tienes ___? (tú)", "la tuya", "Entrada → femenino."),
      fb("Rápido.", "Su jardín es más grande que ___. (nosotros)", "el nuestro", "Jardín → masculino."),
      mc(
        "«Os presto mi coche si ___ no arranca.»",
        ["el vuestro", "vuestro", "la vuestra", "el suyo"],
        0,
        "Sujeto → con artículo; os → vuestro."
      ),
    ]
  ),
  L(
    "passive-voice-possessive-pronouns-drill-3",
    "b1d-corrige-posesivos",
    "Corrige el párrafo: posesivos de un estudiante",
    "Una redacción con errores típicos: concordar con el dueño, olvidar el artículo.",
    "6 min",
    [
      sec(
        "La redacción",
        "«Mi hermana y yo compartimos habitación. Su cama está junto a la ventana y el mío junto a la puerta. Sus libros ocupan dos estantes; mío solo uno. Ella dice que su escritorio es más bonito que mi.»",
        [
          ["Su cama está junto a la ventana y la mía junto a la puerta.", "Her bed is by the window and mine by the door."],
        ],
        [
          mc(
            "¿Por qué «el mío» es un error en la primera frase?",
            ["Porque se refiere a la cama (femenino).", "Porque el escritor es una chica.", "Porque falta «es».", "Porque debe ser «mi»."],
            0,
            "Concuerda con la cosa: la cama → la mía."
          ),
        ]
      ),
    ],
    [
      toEs("Corrige: «Sus libros ocupan dos estantes; mío solo uno.»", "Sus libros ocupan dos estantes; los míos solo uno.", "Sujeto → con artículo, masculino plural."),
      toEs("Corrige: «Su escritorio es más bonito que mi.»", "Su escritorio es más bonito que el mío.", "Sin sustantivo → pronombre con artículo."),
      toEs("Corrige: «Ana perdió su llave, así que le presté el mío.»", "Ana perdió su llave, así que le presté la mía.", "Llave → femenino."),
      toEs("Corrige: «Esta mochila no es mi.»", "Esta mochila no es mía.", "Después de ser → mía."),
      toEs("Corrige: «Vuestros hijos y los nuestro juegan juntos.»", "Vuestros hijos y los nuestros juegan juntos.", "Concordancia de número."),
      ms(
        "¿Qué frases son correctas?",
        ["Mi ordenador es más lento que el tuyo.", "Estas gafas son mías.", "Prefiero tuyo.", "La casa suya de ella es grande."],
        [0, 1],
        "«Prefiero el tuyo» necesita artículo; la última mezcla dos formas."
      ),
    ]
  ),
  L(
    "passive-voice-possessive-pronouns-drill-3",
    "b1d-practica-mezclada-se-posesivos",
    "Práctica mezclada: se y posesivos",
    "Los dos temas de la unidad juntos en un mercadillo de segunda mano.",
    "7 min",
    [
      sec(
        "En el mercadillo",
        "«Se venden libros, se cambian discos y se regala ropa de niño. —¿Esta radio es suya? —No, la mía es la negra. Aquí se paga en efectivo.»",
        [
          ["Se cambian discos.", "Records are swapped."],
          ["La mía es la negra.", "Mine is the black one."],
        ],
        [
          fb("Completa.", "Se ___ libros usados. (vender)", "venden", "Libros → plural."),
        ]
      ),
    ],
    [
      fb("Mercadillo.", "Aquí se ___ en efectivo. (pagar)", "paga", "Impersonal → singular."),
      fb("Mercadillo.", "—¿Esta radio es suya? —No, ___ es la negra.", "la mía", "Radio → femenino."),
      fb("Mercadillo.", "Se ___ ropa de niño. (regalar)", "regala", "Ropa → singular."),
      fb("Mercadillo.", "—¿Son suyos estos discos? —Sí, son ___.", "míos", "Discos → masculino plural."),
      fb("Mercadillo.", "Se ___ precios si compras varias cosas. (negociar)", "negocian", "Precios → plural."),
      mc(
        "«Mi puesto está al lado de ___.» (el puesto de ustedes)",
        ["el suyo", "la suya", "suyo", "el mío"],
        0,
        "Puesto → masculino, con artículo."
      ),
      toEs("Old coins are bought here. Are these yours?", "Aquí se compran monedas antiguas. ¿Son suyas estas?", "Monedas → plural / suyas.", ["Se compran monedas antiguas aquí. ¿Son tuyas estas?", "Aquí se compran monedas antiguas. ¿Estas son tuyas?", "Aquí se compran monedas antiguas. ¿Son tuyas estas?"]),
    ]
  ),
  L(
    "combined-object-pronouns-1",
    "b1d-patron-me-lo-te-lo",
    "Práctica de patrones: me lo, te la, nos los",
    "Primero la persona, después la cosa: el mismo orden en cada frase.",
    "6 min",
    [
      sec(
        "Persona + cosa",
        "Me das el libro → Me lo das. Te compro la camiseta → Te la compro. Nos traen los platos → Nos los traen. El pronombre de persona (indirecto) va siempre primero.",
        [
          ["¿La foto? Te la mando esta noche.", "The photo? I'll send it to you tonight."],
          ["¿Los billetes? Nos los dieron en la puerta.", "The tickets? They gave them to us at the door."],
        ],
        [
          fb("Sustituye.", "Mi abuela me contó la historia. → Mi abuela ___ contó.", "me la", "Me + la."),
        ]
      ),
    ],
    [
      fb("Mismo marco.", "Te presto mi paraguas. → ___ presto.", "Te lo", "Paraguas → lo."),
      fb("Mismo marco.", "Nos explicaron las reglas. → ___ explicaron.", "Nos las", "Reglas → las."),
      fb("Mismo marco.", "Me regalaron unos pendientes. → ___ regalaron.", "Me los", "Pendientes → los."),
      fb("Mismo marco.", "Te envío la dirección ahora. → ___ envío ahora.", "Te la", "Dirección → la."),
      fb("Mismo marco.", "Nos sirvieron el postre enseguida. → ___ sirvieron enseguida.", "Nos lo", "Postre → lo."),
      mc(
        "«¿Me devuelves las llaves?» —Sí, ___ devuelvo mañana.",
        ["te las", "las te", "me las", "te los"],
        0,
        "Persona primero: te; llaves → las."
      ),
      toEs("My brother lent it to me (the car).", "Mi hermano me lo prestó.", "Me + lo.", ["Me lo prestó mi hermano."]),
      wo("Nos la enseñaron ayer.", "Nos + la.", "They showed it to us yesterday."),
    ]
  ),
  L(
    "combined-object-pronouns-1",
    "b1d-circuito-se-lo",
    "Circuito: le lo nunca, se lo siempre",
    "Tres estaciones para automatizar el cambio de le/les a se.",
    "7 min",
    [
      sec(
        "La regla de oro",
        "Le/les + lo/la/los/las → se lo/se la/se los/se las. Le di el regalo → Se lo di. Les mandé las fotos → Se las mandé. Este se no es reflexivo: solo sustituye a le o les.",
        [
          ["Le di el regalo a Marta. → Se lo di.", "I gave Marta the present. → I gave it to her."],
          ["Les mandé las fotos a mis primos. → Se las mandé.", "I sent my cousins the photos. → I sent them to them."],
        ],
        [
          fb("Estación 1.", "Le escribí una carta a mi abuelo. → ___ escribí.", "Se la", "Le + la → se la."),
        ]
      ),
    ],
    [
      fb("Estación 1.", "Le compré un helado a mi sobrino. → ___ compré.", "Se lo", "Le + lo → se lo."),
      fb("Estación 1.", "Les enseñé los apuntes a mis compañeros. → ___ enseñé.", "Se los", "Les + los → se los."),
      fb("Estación 2.", "Le pedimos la cuenta al camarero. → ___ pedimos.", "Se la", "Cuenta → la."),
      fb("Estación 2.", "Les contamos el secreto a nuestros padres. → ___ contamos.", "Se lo", "Secreto → lo."),
      fb("Estación 3.", "Le devolví las tijeras a la vecina. → ___ devolví.", "Se las", "Tijeras → las."),
      fb("Estación 3.", "Le vendieron la moto a un chico de Bilbao. → ___ vendieron.", "Se la", "Moto → la."),
      ms(
        "¿Qué frases son correctas?",
        ["Se lo expliqué ayer.", "Le lo expliqué ayer.", "Se las di a ellas.", "Les las di a ellas."],
        [0, 2],
        "Le/les nunca van delante de lo/la/los/las."
      ),
      toEs("I told it to her (the truth).", "Se la dije.", "Le + la → se la.", ["Le dije la verdad."]),
    ]
  ),
  L(
    "combined-object-pronouns-1",
    "b1d-elige-explica-quien-recibe",
    "Elige y explica: ¿a quién se lo diste?",
    "Se lo es ambiguo: a él, a ella, a usted, a ellos… Aclara con a + persona.",
    "6 min",
    [
      sec(
        "Aclarar el se",
        "«Se lo di» puede ser a él, a ella, a usted, a ellos, a ellas o a ustedes. Para aclarar, se añade a + persona: Se lo di a ella. Se lo expliqué a ustedes.",
        [
          ["Se lo di a él, no a ella.", "I gave it to him, not to her."],
        ],
        [
          mc(
            "Quieres decir que diste el libro a tus profesores. ¿Qué frase es la más clara?",
            ["Se lo di a mis profesores.", "Se lo di.", "Les lo di.", "Lo se di a mis profesores."],
            0,
            "Se lo + a + personas."
          ),
        ]
      ),
    ],
    [
      mc(
        "¿Qué significa «se» en «Se lo compré a mi hermana»?",
        ["le (a mi hermana)", "reflexivo (a mí mismo)", "impersonal", "pasivo"],
        0,
        "Sustituye a «le»."
      ),
      mc(
        "¿Qué significa «se» en «Se venden pisos»?",
        ["pasivo", "le (a alguien)", "les (a ellos)", "reflexivo"],
        0,
        "No hay objeto directo lo/la: es se pasivo."
      ),
      fb("Aclara.", "Se lo expliqué ___, señor Ruiz. (usted)", "a usted", "Usted → a usted."),
      fb("Aclara.", "Se las di ___, no a sus hermanos. (Luis)", "a Luis", "A + persona."),
      fb("Aclara.", "¿Se lo dijiste ___? (ella)", "a ella", "A + ella."),
      toEs("I sent it to them (the email), not to you, sir.", "Se lo mandé a ellos, no a usted.", "Aclarar con a.", ["Se lo envié a ellos, no a usted."]),
      toEs("She lent it to him (the pen).", "Ella se lo prestó a él.", "Se lo + a él.", ["Se lo prestó a él."]),
    ]
  ),
  L(
    "combined-object-pronouns-1",
    "b1d-preguntas-se-lo",
    "Preguntas y respuestas: ¿se lo diste?",
    "Responde sin repetir nada: todo en pronombres.",
    "6 min",
    [
      sec(
        "Respuestas cortas",
        "—¿Le diste el mensaje a Pablo? —Sí, se lo di. —¿Me traes las llaves? —Sí, te las traigo. En la respuesta la persona cambia (me → te) y la cosa se vuelve pronombre.",
        [
          ["—¿Le devolviste el dinero? —Sí, se lo devolví.", "Did you give him back the money? Yes, I gave it back to him."],
        ],
        [
          fb("Responde.", "—¿Le mandaste el currículum a la empresa? —Sí, ___ mandé.", "se lo", "Le + lo → se lo."),
        ]
      ),
    ],
    [
      fb("Responde.", "—¿Me dejas tu cargador? —Sí, ___ dejo.", "te lo", "Me → te en la respuesta."),
      fb("Responde.", "—¿Nos traes la carta, por favor? —Ahora mismo ___ traigo.", "se la", "Nos (ustedes) → se la."),
      fb("Responde.", "—¿Les contaste la noticia a tus padres? —No, todavía no ___ he contado.", "se la", "Les + la → se la."),
      fb("Responde.", "—¿Te regalaron esas botas? —Sí, ___ regaló mi tía.", "me las", "Te → me en la respuesta."),
      fb("Responde.", "—¿Le pediste permiso al director? —Sí, ___ pedí ayer.", "se lo", "Permiso → lo."),
      mc(
        "—¿Les enviaste las invitaciones a los invitados? —",
        ["Sí, se las envié.", "Sí, les las envié.", "Sí, las se envié.", "Sí, se los envié."],
        0,
        "Invitaciones → las; les → se."
      ),
      toEs("Did you give her the keys? Yes, I gave them to her.", "¿Le diste las llaves? Sí, se las di.", "Se las."),
    ]
  ),
  L(
    "combined-object-pronouns-2",
    "b1d-patron-pegados-infinitivo",
    "Práctica de patrones: dárselo, contártela",
    "Con infinitivo, los pronombres se pegan al final y aparece una tilde.",
    "6 min",
    [
      sec(
        "Pegar y acentuar",
        "Voy a dar + se + lo → Voy a dárselo. Quiero contar + te + la → Quiero contártela. La tilde conserva el acento original del verbo. También se puede poner delante: Te la quiero contar.",
        [
          ["Quiero explicártelo con calma.", "I want to explain it to you calmly."],
          ["Te lo quiero explicar con calma.", "I want to explain it to you calmly."],
        ],
        [
          fb("Pega.", "Voy a enviar el correo a Luis. → Voy a ___.", "enviárselo", "Enviar + se + lo, con tilde."),
        ]
      ),
    ],
    [
      fb("Pega.", "Tengo que devolver los libros a la biblioteca. → Tengo que ___.", "devolvérselos", "Devolver + se + los."),
      fb("Pega.", "Quiero enseñar la casa (a ti). → Quiero ___.", "enseñártela", "Enseñar + te + la."),
      fb("Pega.", "Vamos a pedir la receta a tu madre. → Vamos a ___.", "pedírsela", "Pedir + se + la."),
      fb("Pega.", "Puedes traer las sillas (a nosotros). → Puedes ___.", "traérnoslas", "Traer + nos + las."),
      fb("Pega.", "Necesito explicar el problema a ellos. → Necesito ___.", "explicárselo", "Explicar + se + lo."),
      mc(
        "Otra forma correcta de «Voy a decírtelo»:",
        ["Te lo voy a decir.", "Lo te voy a decir.", "Voy te lo a decir.", "Te voy a lo decir."],
        0,
        "Delante del verbo conjugado, en el mismo orden."
      ),
      wo("No puedo prestártela hoy.", "Pegados al infinitivo.", "I can't lend it to you today."),
      toEs("I'm going to return it to him on Monday (the book).", "Voy a devolvérselo el lunes.", "Devolver + se + lo.", ["Se lo voy a devolver el lunes.", "El lunes voy a devolvérselo.", "El lunes se lo voy a devolver."]),
    ]
  ),
  L(
    "combined-object-pronouns-2",
    "b1d-pares-mandato-afirmativo-negativo",
    "Pares mínimos: dámelo / no me lo des",
    "Afirmativo pegado, negativo delante: el mismo contenido, dos posiciones.",
    "6 min",
    [
      sec(
        "Dos posiciones",
        "Mandato afirmativo: pronombres pegados al final (Dámelo. Explícasela.). Mandato negativo: delante del verbo en subjuntivo (No me lo des. No se la expliques.).",
        [
          ["Dámelo, por favor.", "Give it to me, please."],
          ["No me lo des todavía.", "Don't give it to me yet."],
        ],
        [
          fb("Par.", "Cuéntamelo. → No ___ cuentes.", "me lo", "Negativo → delante."),
        ]
      ),
    ],
    [
      fb("Par A.", "(tú, mandar la foto a mí) → ___.", "Mándamela", "Afirmativo → pegado, con tilde."),
      fb("Par B.", "(tú, no mandar la foto a mí) → No ___.", "me la mandes", "Negativo → delante + subjuntivo."),
      fb("Par A.", "(usted, dar las llaves a él) → ___.", "Déselas", "Dé + se + las."),
      fb("Par B.", "(usted, no dar las llaves a él) → No ___.", "se las dé", "Negativo → delante."),
      fb("Par A.", "(tú, explicar el ejercicio a nosotros) → ___.", "Explícanoslo", "Explica + nos + lo."),
      fb("Par B.", "(tú, no explicar el ejercicio a nosotros) → No ___.", "nos lo expliques", "Negativo → delante."),
      mc(
        "¿Qué forma es correcta?",
        ["No se lo digas.", "No díselo.", "No digásselo.", "No lo se digas."],
        0,
        "Negativo: pronombres delante, verbo en subjuntivo."
      ),
      toEs("Lend it to me (the bike), but don't lend it to him.", "Préstamela, pero no se la prestes a él.", "Afirmativo pegado / negativo delante.", ["Préstamela a mí, pero no se la prestes a él."]),
    ]
  ),
  L(
    "combined-object-pronouns-2",
    "b1d-frase-a-frase-gerundio",
    "Frase a frase: estoy diciéndotelo",
    "Gerundio + pronombres: pegados con tilde o delante de estar.",
    "6 min",
    [
      sec(
        "Con gerundio",
        "Estoy preparando la cena para ti → Estoy preparándotela / Te la estoy preparando. La tilde cae en la misma sílaba de antes: preparando → preparándotela.",
        [
          ["Te lo estoy diciendo en serio.", "I'm telling you seriously."],
          ["Está leyéndoselo a los niños.", "She's reading it to the children."],
        ],
        [
          fb("Construye.", "Estoy escribiendo la carta a mi abuela. → Estoy ___.", "escribiéndosela", "Escribiendo + se + la."),
        ]
      ),
    ],
    [
      fb("Paso 1.", "Estoy arreglando el ordenador. → Estoy ___.", "arreglándolo", "Un pronombre: lo."),
      fb("Paso 2.", "Estoy arreglando el ordenador a mi padre. → Estoy ___.", "arreglándoselo", "Dos pronombres: se + lo."),
      fb("Paso 3.", "Estoy arreglando el ordenador a mi padre. → ___ estoy arreglando.", "Se lo", "Delante de estar."),
      fb("Paso 1.", "Están sirviendo la sopa. → Están ___.", "sirviéndola", "Un pronombre: la."),
      fb("Paso 2.", "Están sirviendo la sopa a los invitados. → Están ___.", "sirviéndosela", "Se + la."),
      fb("Paso 3.", "Están sirviendo la sopa a los invitados. → ___ están sirviendo.", "Se la", "Delante de estar."),
      wo("Nos lo están explicando ahora.", "Delante de estar.", "They're explaining it to us now."),
      toEs("I'm reading it to you (the letter).", "Estoy leyéndotela.", "Gerundio + te + la.", ["Te la estoy leyendo."]),
    ]
  ),
  L(
    "combined-object-pronouns-2",
    "b1d-corrige-pronombres-combinados",
    "Corrige el párrafo: pronombres combinados",
    "Un mensaje con los errores de siempre: le lo, orden invertido, pronombre sin tilde.",
    "6 min",
    [
      sec(
        "El mensaje",
        "«Hola, Rosa: el libro que me pediste, le lo di a tu hermano. Las fotos lo te mando esta noche. Y la receta, quiero darsela a tu madre mañana.» Tres errores distintos.",
        [
          ["El libro se lo di a tu hermano.", "I gave the book to your brother."],
        ],
        [
          mc(
            "¿Qué error hay en «le lo di»?",
            ["Le + lo debe cambiar a se lo.", "Falta la tilde.", "El orden está invertido.", "Debe ser «lo le di»."],
            0,
            "La regla de oro: le lo → se lo."
          ),
        ]
      ),
    ],
    [
      toEs("Corrige: «El libro, le lo di a tu hermano.»", "El libro, se lo di a tu hermano.", "Le + lo → se lo."),
      toEs("Corrige: «Las fotos lo te mando esta noche.»", "Las fotos te las mando esta noche.", "Orden: persona primero; fotos → las."),
      toEs("Corrige: «Quiero darsela a tu madre mañana.»", "Quiero dársela a tu madre mañana.", "Tres sílabas → tilde; se escribe dársela.", ["Se la quiero dar a tu madre mañana."]),
      toEs("Corrige: «No dímelo ahora.»", "No me lo digas ahora.", "Negativo: delante + subjuntivo."),
      toEs("Corrige: «Les las envié ayer a mis tíos.»", "Se las envié ayer a mis tíos.", "Les + las → se las."),
      ms(
        "¿Qué frases están bien?",
        ["Se lo voy a explicar.", "Voy a explicárselo.", "Voy a se lo explicar.", "Lo se voy a explicar."],
        [0, 1],
        "Delante del conjugado o pegados al infinitivo; nunca en medio."
      ),
    ]
  ),
  L(
    "combined-object-pronouns-2",
    "b1d-cuento-companeros-piso",
    "Cuento con huecos: el favor de Diego",
    "Un diálogo de piso compartido lleno de pronombres combinados.",
    "7 min",
    [
      sec(
        "El diálogo",
        "Marta: «Diego, ¿me prestas tu coche el sábado?» Diego: «Te lo presto, pero devuélvemelo con gasolina.» Marta: «Claro. ¿Y las llaves?» Diego: «Te las dejo en la mesa. Ah, y el cargador del móvil de Laura: dáselo esta tarde, por favor.»",
        [
          ["Te lo presto, pero devuélvemelo con gasolina.", "I'll lend it to you, but give it back to me with fuel."],
          ["Te las dejo en la mesa.", "I'll leave them for you on the table."],
        ],
        [
          fb("Completa.", "Diego: «___ presto, pero devuélvemelo con gasolina.»", "Te lo", "El coche → lo; a Marta → te."),
        ]
      ),
    ],
    [
      fb("Completa.", "Diego: «Te lo presto, pero ___ con gasolina.»", "devuélvemelo", "Afirmativo: devuelve + me + lo."),
      fb("Completa.", "Diego: «___ dejo en la mesa.» (las llaves)", "Te las", "Llaves → las."),
      fb("Completa.", "Diego: «El cargador de Laura: ___ esta tarde.» (dar, tú)", "dáselo", "Da + se + lo."),
      fb("Completa.", "Marta (el domingo): «Diego, el coche ya ___ he devuelto.»", "te lo", "Te + lo con perfecto."),
      fb("Completa.", "Marta: «Y a Laura, el cargador ___ di ayer.»", "se lo", "Le + lo → se lo."),
      mc(
        "Diego: «¿Y la gasolina? ¿___ pusiste?»",
        ["Se la", "Le la", "La se", "Se lo"],
        0,
        "Al coche (le) + la gasolina (la) → se la."
      ),
      toEs("Don't give it to her yet (the charger).", "No se lo des todavía.", "Negativo: delante.", ["Todavía no se lo des."]),
    ]
  ),
  L(
    "vosotros-commands-1",
    "b1d-patron-hablad-comed",
    "Práctica de patrones: quita la -r, pon una -d",
    "El mandato afirmativo de vosotros no tiene excepciones.",
    "5 min",
    [
      sec(
        "Una sola regla",
        "Infinitivo sin -r + d: hablar → hablad, beber → bebed, abrir → abrid. Incluso con verbos irregulares: hacer → haced, ir → id, venir → venid, poner → poned.",
        [
          ["¡Venid a cenar!", "Come to dinner! (you all)"],
          ["Haced los deberes antes de salir.", "Do your homework before going out."],
        ],
        [
          fb("Forma.", "(escuchar, vosotros) → ¡___ con atención!", "Escuchad", "Escuchar → escuchad."),
        ]
      ),
    ],
    [
      fb("Mismo marco.", "(cerrar, vosotros) → ¡___ la puerta!", "Cerrad", "Sin cambio de raíz: cerrad."),
      fb("Mismo marco.", "(poner, vosotros) → ¡___ la mesa!", "Poned", "Poner → poned."),
      fb("Mismo marco.", "(salir, vosotros) → ¡___ ya, que llegáis tarde!", "Salid", "Salir → salid."),
      fb("Mismo marco.", "(tener, vosotros) → ¡___ cuidado con el perro!", "Tened", "Tener → tened."),
      fb("Mismo marco.", "(decir, vosotros) → ¡___ la verdad!", "Decid", "Decir → decid."),
      fb("Mismo marco.", "(dormir, vosotros) → ¡___ un poco más!", "Dormid", "Sin cambio de raíz: dormid."),
      mc(
        "Tú: ven. Vosotros:",
        ["venid", "venís", "vened", "vinid"],
        0,
        "Venir → venid."
      ),
      toEs("Kids, open your books!", "¡Niños, abrid los libros!", "Abrir → abrid."),
    ]
  ),
  L(
    "vosotros-commands-1",
    "b1d-cadena-tu-a-vosotros",
    "Cadena de transformaciones: de uno a varios",
    "Una madre pasa de hablar con un hijo a hablar con tres.",
    "6 min",
    [
      sec(
        "Tú → vosotros",
        "Come la fruta → Comed la fruta. Haz la cama → Haced la cama. Sé bueno → Sed buenos. Pon la mesa → Poned la mesa. El mandato de vosotros siempre es regular, incluso cuando el de tú es irregular.",
        [
          ["Sé paciente. → Sed pacientes.", "Be patient."],
        ],
        [
          fb("Transforma.", "Ve a la tienda. → ___ a la tienda.", "Id", "Ir → id."),
        ]
      ),
    ],
    [
      fb("Transforma.", "Sal al patio. → ___ al patio.", "Salid", "Sal → salid."),
      fb("Transforma.", "Pon los abrigos aquí. → ___ los abrigos aquí.", "Poned", "Pon → poned."),
      fb("Transforma.", "Di adiós a la abuela. → ___ adiós a la abuela.", "Decid", "Di → decid."),
      fb("Transforma.", "Ten paciencia. → ___ paciencia.", "Tened", "Ten → tened."),
      fb("Transforma.", "Sé puntual. → ___ puntuales.", "Sed", "Sé → sed."),
      fb("Transforma.", "Pide ayuda si la necesitas. → ___ ayuda si la necesitáis.", "Pedid", "Pide → pedid."),
      wo("Traed algo de beber a la fiesta.", "Traer → traed.", "Bring something to drink to the party."),
    ]
  ),
  L(
    "vosotros-commands-1",
    "b1d-habla-de-ti-instrucciones-grupo",
    "Habla de ti: instrucciones para tus amigos",
    "Organizas una excursión y das instrucciones al grupo.",
    "6 min",
    [
      sec(
        "La excursión",
        "Piensa en lo que dirías a un grupo de amigos antes de una excursión: Traed agua. Llevad zapatos cómodos. Venid a las ocho. Llamadme si os perdéis.",
        [
          ["Llevad zapatos cómodos.", "Wear comfortable shoes."],
          ["Llamadme si os perdéis.", "Call me if you get lost."],
        ],
        [
          fb("Tus instrucciones.", "___ crema solar. (traer)", "Traed", "Traer → traed."),
        ]
      ),
    ],
    [
      fb("Tus instrucciones.", "___ a la estación a las ocho. (venir)", "Venid", "Venir → venid."),
      fb("Tus instrucciones.", "___ bocadillos para el mediodía. (preparar)", "Preparad", "Preparar → preparad."),
      fb("Tus instrucciones.", "___ el grupo de mensajes esta noche. (mirar)", "Mirad", "Mirar → mirad."),
      fb("Tus instrucciones.", "___ una chaqueta, que por la tarde hace frío. (coger)", "Coged", "Coger → coged."),
      fb("Tus instrucciones.", "___ el billete de tren con tiempo. (comprar)", "Comprad", "Comprar → comprad."),
      toEs("Call me if you have a problem (you all).", "Llamadme si tenéis un problema.", "Llamad + me.", ["Llamadme si tenéis algún problema."]),
      toEs("Bring water and wear good shoes (you all).", "Traed agua y llevad buenos zapatos.", "Dos mandatos de vosotros.", ["Traed agua y poneos buenos zapatos.", "Traed agua y llevad zapatos buenos."]),
    ]
  ),
  L(
    "vosotros-commands-2",
    "b1d-pares-levantaos-no-os-levanteis",
    "Pares mínimos: levantaos / no os levantéis",
    "Afirmativo reflexivo sin -d; negativo con subjuntivo y os delante.",
    "6 min",
    [
      sec(
        "Dos formas del mismo verbo",
        "Afirmativo reflexivo: sentad + os → sentaos (se pierde la -d). Excepción: idos. Negativo: no os sentéis (subjuntivo de vosotros, os delante).",
        [
          ["Sentaos, por favor.", "Sit down, please."],
          ["No os sentéis ahí, está mojado.", "Don't sit there, it's wet."],
        ],
        [
          fb("Par.", "Levantaos. → No ___.", "os levantéis", "Negativo: os + subjuntivo."),
        ]
      ),
    ],
    [
      fb("Par A.", "(ducharse, vosotros) → ___ antes de cenar.", "Duchaos", "Duchad + os → duchaos."),
      fb("Par B.", "(no ducharse, vosotros) → No ___ con agua fría.", "os duchéis", "Negativo."),
      fb("Par A.", "(callarse, vosotros) → ¡___ un momento!", "Callaos", "Callad + os → callaos."),
      fb("Par B.", "(no preocuparse, vosotros) → No ___.", "os preocupéis", "Negativo."),
      fb("Par A.", "(vestirse, vosotros) → ___ rápido.", "Vestíos", "Vestid + os → vestíos, con tilde."),
      fb("Par B.", "(no irse, vosotros) → No ___ todavía.", "os vayáis", "Irse negativo: os vayáis."),
      mc(
        "El mandato afirmativo de «irse» para vosotros es:",
        ["idos", "ios", "iros", "idíos"],
        0,
        "La única excepción: conserva la -d."
      ),
      toEs("Sit down and don't get up without permission.", "Sentaos y no os levantéis sin permiso.", "Afirmativo + negativo."),
    ]
  ),
  L(
    "vosotros-commands-2",
    "b1d-cuento-antes-del-cole",
    "Cuento con huecos: antes del cole",
    "Un padre de Valencia da órdenes a sus hijos por la mañana.",
    "6 min",
    [
      sec(
        "Las ocho de la mañana",
        "«¡Despertaos, que son las ocho! Lavaos la cara y vestíos. No os pongáis las zapatillas nuevas, que llueve. Desayunad algo y no os olvidéis de las mochilas. ¡Y no discutáis en el coche!»",
        [
          ["Despertaos, que son las ocho.", "Wake up, it's eight o'clock."],
          ["No os olvidéis de las mochilas.", "Don't forget your backpacks."],
        ],
        [
          fb("Completa.", "¡___, que son las ocho! (despertarse)", "Despertaos", "Despertad + os."),
        ]
      ),
    ],
    [
      fb("Completa.", "___ la cara. (lavarse)", "Lavaos", "Lavad + os."),
      fb("Completa.", "No ___ las zapatillas nuevas. (ponerse)", "os pongáis", "Negativo: os + subjuntivo."),
      fb("Completa.", "___ algo antes de salir. (desayunar)", "Desayunad", "No reflexivo: conserva la -d."),
      fb("Completa.", "No ___ de las mochilas. (olvidarse)", "os olvidéis", "Negativo."),
      fb("Completa.", "¡Y no ___ en el coche! (discutir)", "discutáis", "Negativo sin reflexivo."),
      ms(
        "¿Qué formas son correctas?",
        ["peinaos", "no os peinéis", "peinados", "no peinaos"],
        [0, 1],
        "Afirmativo sin -d; negativo con subjuntivo."
      ),
      toEs("Hurry up and don't make noise (you all).", "Daos prisa y no hagáis ruido.", "Daos + negativo.", ["Daos prisa y no hagáis ruido, por favor."]),
    ]
  ),
  L(
    "vosotros-commands-2",
    "b1d-ronda-vosotros",
    "Ronda rápida: vosotros en todas sus formas",
    "Afirmativo, negativo, reflexivo y con pronombres, sin pausa.",
    "5 min",
    [
      sec(
        "Resumen",
        "Afirmativo: hablad. Reflexivo: sentaos (idos). Negativo: no habléis, no os sentéis. Con pronombres de objeto: decídmelo, no me lo digáis.",
        [
          ["Decídmelo ahora.", "Tell me now."],
          ["No me lo digáis todavía.", "Don't tell me yet."],
        ],
        [
          fb("Rápido.", "(contar, vosotros, a mí, la historia) → ___.", "Contádmela", "Contad + me + la."),
        ]
      ),
    ],
    [
      fb("Rápido.", "(no gritar, vosotros) → No ___.", "gritéis", "Negativo."),
      fb("Rápido.", "(quedarse, vosotros) → ___ aquí.", "Quedaos", "Quedad + os."),
      fb("Rápido.", "(no quedarse, vosotros) → No ___ aquí.", "os quedéis", "Negativo reflexivo."),
      fb("Rápido.", "(abrir, vosotros) → ___ las ventanas.", "Abrid", "Abrir → abrid."),
      fb("Rápido.", "(no tocar, vosotros) → No ___ nada.", "toquéis", "c → qu."),
      fb("Rápido.", "(no decir, vosotros, a mí, eso) → No ___.", "me lo digáis", "Negativo: pronombres delante."),
      mc(
        "(irse, vosotros) → ¡___ ya!",
        ["Idos", "Iros", "Ios", "Id os"],
        0,
        "La excepción con -d."
      ),
    ]
  ),
  L(
    "b1-vocabulary-practice-1",
    "b1d-rep-formacion-yo-raiz",
    "Circuito acumulativo: el subjuntivo nace del yo",
    "Repaso espaciado: forma el subjuntivo desde la primera persona del presente.",
    "6 min",
    [
      sec(
        "Recuerda el truco",
        "Presente yo → quita la -o → añade la vocal contraria: tengo → tenga, conozco → conozca, salgo → salga, hago → haga. Los verbos -ar toman -e; los verbos -er/-ir toman -a.",
        [
          ["Quiero que salgas conmigo.", "I want you to go out with me."],
          ["Es importante que conozcas a mi familia.", "It's important that you meet my family."],
        ],
        [
          fb("Del yo al subjuntivo.", "pongo → que él ___", "ponga", "Pong- + a."),
        ]
      ),
    ],
    [
      fb("Del yo al subjuntivo.", "traigo → que nosotros ___", "traigamos", "Traig- + amos."),
      fb("Del yo al subjuntivo.", "digo → que ellos ___", "digan", "Dig- + an."),
      fb("Del yo al subjuntivo.", "oigo → que tú ___", "oigas", "Oig- + as."),
      fb("Del yo al subjuntivo.", "vengo → que usted ___", "venga", "Veng- + a."),
      fb("Del yo al subjuntivo.", "conduzco → que yo ___", "conduzca", "Conduzc- + a."),
      fb("Del yo al subjuntivo.", "veo → que vosotros ___", "veáis", "Ve- + áis."),
      mc(
        "¿Qué forma NO sale del yo del presente?",
        ["sea", "haga", "tenga", "diga"],
        0,
        "Ser es irregular: soy no da «soa»; el subjuntivo es sea."
      ),
      toEs("I hope you bring the guitar.", "Espero que traigas la guitarra.", "Traigo → traigas."),
    ]
  ),
  L(
    "b1-vocabulary-practice-1",
    "b1d-rep-formacion-irregulares-seis",
    "Ronda rápida: dé, esté, haya, vaya, sepa, sea",
    "Repaso espaciado: los seis irregulares que no siguen la regla del yo.",
    "5 min",
    [
      sec(
        "Los seis rebeldes",
        "dar → dé, estar → esté, haber → haya, ir → vaya, saber → sepa, ser → sea. Truco para recordarlos: DISHES (dar, ir, saber, haber, estar, ser).",
        [
          ["Ojalá haya sitio en el tren.", "I hope there's room on the train."],
          ["No creo que sepa la respuesta.", "I don't think he knows the answer."],
        ],
        [
          fb("Rápido.", "Espero que ___ bien. (estar, tú)", "estés", "Estar → estés."),
        ]
      ),
    ],
    [
      fb("Rápido.", "Es necesario que ___ a la reunión. (ir, nosotros)", "vayamos", "Ir → vayamos."),
      fb("Rápido.", "No creo que ___ tan difícil. (ser)", "sea", "Ser → sea."),
      fb("Rápido.", "Ojalá ___ entradas todavía. (haber)", "haya", "Haber → haya."),
      fb("Rápido.", "Quiero que me ___ tu opinión. (dar, tú)", "des", "Dar → des."),
      fb("Rápido.", "Dudo que ellos ___ nadar. (saber)", "sepan", "Saber → sepan."),
      fb("Rápido.", "Me encanta que ___ todos juntos en casa. (estar, vosotros)", "estéis", "Estar → estéis."),
      fb("Rápido.", "Prefiero que le ___ usted el recado. (dar)", "dé", "Dar → dé, con tilde."),
      mt(
        "Relaciona el infinitivo con su subjuntivo.",
        [
          ["ir", "vaya"],
          ["saber", "sepa"],
          ["haber", "haya"],
          ["ser", "sea"],
        ],
        "Los irregulares del subjuntivo."
      ),
    ]
  ),
  L(
    "b1-vocabulary-practice-2",
    "b1d-rep-deseo-quiero-que",
    "Práctica mezclada: quiero + infinitivo o quiero que + subjuntivo",
    "Repaso espaciado: un sujeto o dos sujetos.",
    "6 min",
    [
      sec(
        "¿Cuántos sujetos?",
        "Un solo sujeto → infinitivo: Quiero viajar. Dos sujetos distintos → que + subjuntivo: Quiero que (tú) viajes conmigo.",
        [
          ["Prefiero quedarme en casa.", "I prefer to stay home."],
          ["Prefiero que te quedes en casa.", "I prefer that you stay home."],
        ],
        [
          mc(
            "«Mis padres quieren ___ a Italia en verano.» (ellos mismos van)",
            ["ir", "que vayan", "que vamos", "vayan"],
            0,
            "Mismo sujeto → infinitivo."
          ),
        ]
      ),
    ],
    [
      fb("¿Uno o dos?", "Necesito ___ más. (dormir, yo)", "dormir", "Mismo sujeto."),
      fb("¿Uno o dos?", "Necesito que ___ más. (dormir, tú)", "duermas", "Dos sujetos; o → ue."),
      fb("¿Uno o dos?", "Mi jefa quiere ___ antes. (salir, ella)", "salir", "Mismo sujeto."),
      fb("¿Uno o dos?", "Mi jefa quiere que ___ antes. (salir, nosotros)", "salgamos", "Dos sujetos."),
      fb("¿Uno o dos?", "Te pido que no ___ tan rápido. (conducir)", "conduzcas", "Pedir que + subjuntivo."),
      fb("¿Uno o dos?", "Os recomiendo ___ el museo. (visitar)", "visitar", "Recomendar + infinitivo también es posible con os."),
      mc(
        "«Espero ___ el examen.» (yo apruebo)",
        ["aprobar", "que apruebe", "que apruebo", "aprobando"],
        0,
        "Mismo sujeto → infinitivo."
      ),
      toEs("I want you to help me tonight.", "Quiero que me ayudes esta noche.", "Dos sujetos.", ["Quiero que esta noche me ayudes."]),
    ]
  ),
  L(
    "b1-vocabulary-practice-3",
    "b1d-rep-duda-creo-no-creo",
    "Pares mínimos: creo que es / no creo que sea",
    "Repaso espaciado: la afirmación usa indicativo, la duda usa subjuntivo.",
    "6 min",
    [
      sec(
        "Certeza y duda",
        "Creo que, pienso que, estoy seguro de que, es verdad que → indicativo. No creo que, no pienso que, dudo que, no es verdad que → subjuntivo.",
        [
          ["Creo que llueve mañana.", "I think it's raining tomorrow."],
          ["No creo que llueva mañana.", "I don't think it'll rain tomorrow."],
        ],
        [
          fb("Par.", "Pienso que el restaurante ___ caro. (ser)", "es", "Afirmación → indicativo."),
        ]
      ),
    ],
    [
      fb("Par A.", "Estoy segura de que Luis ___ la verdad. (decir)", "dice", "Certeza → indicativo."),
      fb("Par B.", "No estoy segura de que Luis ___ la verdad. (decir)", "diga", "Duda → subjuntivo."),
      fb("Par A.", "Es verdad que el tren ___ retraso. (tener)", "tiene", "Certeza → indicativo."),
      fb("Par B.", "No es verdad que el tren ___ retraso. (tener)", "tenga", "Negación → subjuntivo."),
      fb("Par A.", "Me parece que ___ una buena idea. (ser)", "es", "Opinión afirmativa → indicativo."),
      fb("Par B.", "Dudo que ___ una buena idea. (ser)", "sea", "Duda → subjuntivo."),
      ms(
        "¿Qué expresiones llevan subjuntivo?",
        ["dudo que", "no creo que", "creo que", "es obvio que"],
        [0, 1],
        "Duda y negación de la creencia."
      ),
      toEs("I don't think they know the address.", "No creo que sepan la dirección.", "No creo que + subjuntivo."),
    ]
  ),
  L(
    "b1-vocabulary-practice-4",
    "b1d-rep-emocion-me-alegra",
    "Habla de ti: lo que te alegra y lo que te molesta",
    "Repaso espaciado: me alegra que, me molesta que, me preocupa que.",
    "6 min",
    [
      sec(
        "Emociones sobre otros",
        "Verbo de emoción + que + subjuntivo cuando la causa es otra persona: Me alegra que vengas. Me molesta que la gente grite. Me preocupa que mi hermano trabaje tanto.",
        [
          ["Me encanta que mis amigos cocinen para mí.", "I love it when my friends cook for me."],
          ["Me molesta que los vecinos hagan ruido.", "It bothers me that the neighbours make noise."],
        ],
        [
          fb("Tu vida.", "Me alegra que mi familia ___ cerca. (vivir)", "viva", "Emoción + subjuntivo."),
        ]
      ),
    ],
    [
      fb("Tu vida.", "Me molesta que la gente no ___ por favor. (decir)", "diga", "Decir → diga."),
      fb("Tu vida.", "Me preocupa que mis padres ___ solos. (estar)", "estén", "Estar → estén."),
      fb("Tu vida.", "Me encanta que mi pareja me ___ flores. (traer)", "traiga", "Traer → traiga."),
      fb("Tu vida.", "Me da pena que mi mejor amigo ___ tan lejos. (vivir)", "viva", "Dar pena que + subjuntivo."),
      fb("Tu vida.", "Me sorprende que ___ tantos turistas en invierno. (haber)", "haya", "Haber → haya."),
      mc(
        "«Me alegra ___ contigo.» (yo estoy contigo)",
        ["estar", "que esté", "que estoy", "estoy"],
        0,
        "Mismo sujeto → infinitivo."
      ),
      toEs("It worries me that you work so much.", "Me preocupa que trabajes tanto.", "Emoción + subjuntivo."),
      toEs("I'm glad you're here.", "Me alegra que estés aquí.", "Emoción + subjuntivo.", ["Me alegro de que estés aquí."]),
    ]
  ),
  L(
    "b1-vocabulary-practice-4",
    "b1d-rep-deseo-duda-emocion-mezcla",
    "Elige y explica: ¿deseo, duda o emoción?",
    "Repaso espaciado: identifica la causa del subjuntivo antes de elegir.",
    "6 min",
    [
      sec(
        "Tres familias",
        "Deseo (querer, preferir, esperar, pedir), duda (dudar, no creer, no estar seguro), emoción (alegrar, molestar, dar miedo). Las tres piden subjuntivo cuando hay dos sujetos.",
        [
          ["Me da miedo que el perro se escape.", "I'm scared the dog will run away."],
        ],
        [
          mc(
            "«Espero que mi equipo gane.» ¿Qué familia?",
            ["deseo", "duda", "emoción", "certeza"],
            0,
            "Esperar = desear."
          ),
        ]
      ),
    ],
    [
      mc("«Dudo que el paquete llegue hoy.» ¿Qué familia?", ["duda", "deseo", "emoción", "certeza"], 0, "Dudar → duda."),
      mc("«Me da rabia que siempre llegues tarde.» ¿Qué familia?", ["emoción", "duda", "deseo", "certeza"], 0, "Dar rabia → emoción."),
      mc("«Sé que el paquete llega hoy.» ¿Qué modo?", ["indicativo", "subjuntivo", "infinitivo", "imperativo"], 0, "Saber → certeza → indicativo."),
      fb("Completa.", "Les pido a mis alumnos que ___ en silencio. (trabajar)", "trabajen", "Deseo/petición."),
      fb("Completa.", "No estoy seguro de que la tienda ___ hoy. (abrir)", "abra", "Duda → subjuntivo."),
      fb("Completa.", "Me encanta que ___ la primavera. (llegar)", "llegue", "Emoción; g → gu."),
      fb("Completa.", "Estoy seguro de que la tienda ___ a las nueve. (abrir)", "abre", "Certeza → indicativo."),
      toEs("I'm afraid it will rain on the wedding day.", "Me da miedo que llueva el día de la boda.", "Emoción + subjuntivo.", ["Tengo miedo de que llueva el día de la boda."]),
    ]
  ),
  L(
    "b1-vocabulary-practice-5",
    "b1d-rep-impersonales-es-importante",
    "Cadena de transformaciones: de general a personal",
    "Repaso espaciado: es importante + infinitivo → es importante que + subjuntivo.",
    "6 min",
    [
      sec(
        "Añadir una persona",
        "Es importante descansar (en general). Es importante que descanses (tú en concreto). Lo mismo con es necesario, es mejor, es posible, es normal, es raro.",
        [
          ["Es mejor salir temprano.", "It's better to leave early."],
          ["Es mejor que salgamos temprano.", "It's better that we leave early."],
        ],
        [
          fb("Personaliza.", "Es necesario reservar. → Es necesario que ___. (vosotros)", "reservéis", "Que + subjuntivo."),
        ]
      ),
    ],
    [
      fb("Personaliza.", "Es importante beber agua. → Es importante que ___ agua. (tú)", "bebas", "Beber → bebas."),
      fb("Personaliza.", "Es mejor esperar. → Es mejor que ___. (nosotros)", "esperemos", "Esperar → esperemos."),
      fb("Personaliza.", "Es normal estar nervioso. → Es normal que ___ nervioso. (él)", "esté", "Estar → esté."),
      fb("Personaliza.", "Es posible llegar tarde. → Es posible que ___ tarde. (ellos)", "lleguen", "g → gu."),
      fb("Personaliza.", "Es raro pasar calor en marzo. → Es raro que ___ tanto calor en marzo. (hacer)", "haga", "Hacer → haga."),
      mc(
        "«Es obvio que el plan ___.» (funcionar)",
        ["funciona", "funcione", "funcionar", "funcionaba"],
        0,
        "Es obvio = certeza → indicativo."
      ),
      toEs("It's important that you rest.", "Es importante que descanses.", "Es importante que + subjuntivo.", ["Es importante que usted descanse."]),
    ]
  ),
  L(
    "b1-vocabulary-practice-6",
    "b1d-rep-ojala-deseos",
    "Dictado: ojalá",
    "Repaso espaciado: deseos con ojalá, palabra por palabra.",
    "5 min",
    [
      sec(
        "Ojalá + subjuntivo",
        "Ojalá siempre va con subjuntivo, con o sin que: Ojalá haga sol. Ojalá que te vaya bien. No cambia nunca de forma.",
        [
          ["Ojalá que te vaya bien en la entrevista.", "I hope the interview goes well for you."],
        ],
        [
          wo("Ojalá haga buen tiempo el sábado.", "Ojalá + subjuntivo.", "I hope the weather is good on Saturday."),
        ]
      ),
    ],
    [
      wo("Ojalá que mis padres puedan venir.", "Ojalá que + subjuntivo.", "I hope my parents can come."),
      wo("Ojalá no haya mucho tráfico.", "Haber → haya.", "I hope there isn't much traffic."),
      wo("Ojalá encuentres pronto trabajo.", "Encontrar → encuentres.", "I hope you find work soon."),
      fb("Completa.", "Ojalá ___ el autobús a tiempo. (llegar)", "llegue", "g → gu."),
      fb("Completa.", "Ojalá que no ___ enfermos este invierno. (ponerse, nosotros)", "nos pongamos", "Reflexivo + subjuntivo."),
      toEs("I hope you like the gift.", "Ojalá te guste el regalo.", "Ojalá + subjuntivo.", ["Ojalá que te guste el regalo."]),
      toEs("I hope they win the match.", "Ojalá ganen el partido.", "Ojalá + subjuntivo.", ["Ojalá que ganen el partido."]),
    ]
  ),
  L(
    "b1-vocabulary-practice-7",
    "b1d-rep-imperativo-tu-irregulares",
    "Ronda rápida: ven, di, haz, pon, sal, sé, ten, ve",
    "Repaso espaciado: los ocho mandatos irregulares de tú.",
    "5 min",
    [
      sec(
        "Los ocho",
        "venir → ven, decir → di, hacer → haz, poner → pon, salir → sal, ser → sé, tener → ten, ir → ve. En negativo vuelven al subjuntivo: no vengas, no digas, no hagas…",
        [
          ["Ven aquí y di la verdad.", "Come here and tell the truth."],
        ],
        [
          fb("Rápido.", "(poner) ___ la mesa, por favor.", "Pon", "Poner → pon."),
        ]
      ),
    ],
    [
      fb("Rápido.", "(tener) ___ cuidado con el escalón.", "Ten", "Tener → ten."),
      fb("Rápido.", "(salir) ___ de ahí ahora mismo.", "Sal", "Salir → sal."),
      fb("Rápido.", "(ser) ___ amable con tu hermana.", "Sé", "Ser → sé."),
      fb("Rápido.", "(ir) ___ a la farmacia, por favor.", "Ve", "Ir → ve."),
      fb("Rápido.", "(no hacer) No ___ eso.", "hagas", "Negativo → subjuntivo."),
      fb("Rápido.", "(no salir) No ___ sin abrigo.", "salgas", "Negativo → subjuntivo."),
      fb("Rápido.", "(no decir) No ___ nada a nadie.", "digas", "Negativo → subjuntivo."),
      mt(
        "Relaciona el afirmativo con su negativo.",
        [
          ["ven", "no vengas"],
          ["haz", "no hagas"],
          ["pon", "no pongas"],
          ["ve", "no vayas"],
        ],
        "Afirmativo irregular / negativo en subjuntivo."
      ),
    ]
  ),
  L(
    "b1-vocabulary-practice-7",
    "b1d-rep-imperativo-usted-consulta",
    "Circuito acumulativo: mandatos de usted en la consulta",
    "Repaso espaciado: una médica da instrucciones a un paciente.",
    "6 min",
    [
      sec(
        "En la consulta",
        "Usted usa el subjuntivo en afirmativo y en negativo: Tome esta pastilla. No beba alcohol. Siéntese aquí. No se preocupe. Los pronombres se pegan en afirmativo y van delante en negativo.",
        [
          ["Siéntese, por favor.", "Sit down, please."],
          ["No se preocupe, no es grave.", "Don't worry, it's not serious."],
        ],
        [
          fb("La médica dice.", "(tomar) ___ una pastilla cada ocho horas.", "Tome", "Usted → subjuntivo."),
        ]
      ),
    ],
    [
      fb("La médica dice.", "(no comer) No ___ picante esta semana.", "coma", "Negativo usted."),
      fb("La médica dice.", "(descansar) ___ al menos dos días.", "Descanse", "Afirmativo usted."),
      fb("La médica dice.", "(acostarse) ___ temprano.", "Acuéstese", "Pegado, con tilde; o → ue."),
      fb("La médica dice.", "(no levantarse) No ___ de la cama mañana.", "se levante", "Negativo: se delante."),
      fb("La médica dice.", "(volver) ___ dentro de una semana.", "Vuelva", "o → ue."),
      fb("La médica dice.", "(hacer) ___ ejercicio suave.", "Haga", "Hacer → haga."),
      mc(
        "«Abra la boca y ___ «aaa».» (decir)",
        ["diga", "di", "dice", "decir"],
        0,
        "Usted → diga."
      ),
      toEs("Don't worry and drink a lot of water.", "No se preocupe y beba mucha agua.", "Usted: negativo + afirmativo."),
    ]
  ),
  L(
    "b1-vocabulary-practice-8",
    "b1d-rep-condicional-consejos",
    "Preguntas y respuestas: yo que tú…",
    "Repaso espaciado: el condicional para dar consejos.",
    "6 min",
    [
      sec(
        "Dar un consejo",
        "Yo que tú, yo en tu lugar, deberías, podrías + condicional: Yo que tú, hablaría con ella. Deberías descansar más. Irregulares: tendría, haría, diría, saldría, podría, pondría, vendría, querría, sabría, habría.",
        [
          ["Yo que tú, no diría nada.", "If I were you, I wouldn't say anything."],
          ["Deberías ir al médico.", "You should go to the doctor."],
        ],
        [
          fb("Aconseja.", "—No duermo bien. —Yo que tú, ___ menos café. (tomar)", "tomaría", "Condicional regular."),
        ]
      ),
    ],
    [
      fb("Aconseja.", "—Mi jefe me grita. —Yo en tu lugar, ___ con recursos humanos. (hablar)", "hablaría", "Condicional."),
      fb("Aconseja.", "—No tengo dinero. —Yo que tú, no ___ de vacaciones. (salir)", "saldría", "Salir → saldría."),
      fb("Aconseja.", "—Estoy aburrido. —___ apuntarte a un curso. (poder, tú)", "Podrías", "Poder → podrías."),
      fb("Aconseja.", "—Me duele la espalda. —___ hacer yoga. (deber, tú)", "Deberías", "Deber → deberías."),
      fb("Aconseja.", "—No entiendo al profesor. —Yo que tú, le ___ más preguntas. (hacer)", "haría", "Hacer → haría."),
      mc(
        "—Llego tarde a todo. —Yo que tú, ___ el despertador antes.",
        ["pondría", "ponería", "pondré", "ponía"],
        0,
        "Poner → pondría."
      ),
      toEs("If I were you, I would tell her the truth.", "Yo que tú, le diría la verdad.", "Decir → diría.", ["Yo en tu lugar, le diría la verdad."]),
    ]
  ),
  L(
    "b1-vocabulary-practice-9",
    "b1d-rep-perfecto-hoy-ayer",
    "Línea del tiempo: hoy he… / ayer…",
    "Repaso espaciado: pretérito perfecto para el tiempo no terminado, indefinido para el terminado.",
    "6 min",
    [
      sec(
        "Dos marcos",
        "Hoy, esta semana, este año, nunca, ya, todavía no → pretérito perfecto (en España): Hoy he trabajado mucho. Ayer, el lunes, en 2019, hace dos días → indefinido: Ayer trabajé mucho.",
        [
          ["Esta mañana he desayunado fuera.", "This morning I had breakfast out."],
          ["Ayer desayuné en casa.", "Yesterday I had breakfast at home."],
        ],
        [
          fb("Elige el marco.", "Hoy ___ tres cafés. (tomar, yo)", "he tomado", "Hoy → perfecto."),
        ]
      ),
    ],
    [
      fb("Elige el marco.", "Ayer ___ tres cafés. (tomar, yo)", "tomé", "Ayer → indefinido."),
      fb("Elige el marco.", "Este año ___ a Portugal dos veces. (ir, nosotros)", "hemos ido", "Este año → perfecto."),
      fb("Elige el marco.", "En 2020 ___ a Portugal. (ir, nosotros)", "fuimos", "Fecha cerrada → indefinido."),
      fb("Elige el marco.", "¿Alguna vez ___ un volcán? (ver, tú)", "has visto", "Experiencia → perfecto; ver → visto."),
      fb("Elige el marco.", "Todavía no ___ los resultados. (ver, ellos)", "han visto", "Ver → visto."),
      fb("Elige el marco.", "Hace dos semanas ___ un accidente en esta esquina. (haber)", "hubo", "Hace + tiempo → indefinido."),
      mc(
        "«Esta semana ___ mucho.» (llover)",
        ["ha llovido", "llovió", "llovía", "había llovido"],
        0,
        "Esta semana → perfecto."
      ),
      toEs("I have never been to Mexico.", "Nunca he estado en México.", "Nunca → perfecto.", ["No he estado nunca en México."]),
    ]
  ),
  L(
    "b1-vocabulary-practice-10",
    "b1d-rep-participios-irregulares",
    "Práctica de patrones: dicho, hecho, visto, puesto, vuelto",
    "Repaso espaciado: los participios irregulares en tres tiempos compuestos.",
    "6 min",
    [
      sec(
        "Los irregulares",
        "abrir → abierto, decir → dicho, escribir → escrito, hacer → hecho, morir → muerto, poner → puesto, romper → roto, ver → visto, volver → vuelto, resolver → resuelto. Sirven igual con he, había y habría.",
        [
          ["¿Quién ha roto el vaso?", "Who has broken the glass?"],
          ["Cuando llegué, ya habían vuelto.", "When I arrived, they had already returned."],
        ],
        [
          fb("Participio.", "Todavía no he ___ la carta. (escribir)", "escrito", "Escribir → escrito."),
        ]
      ),
    ],
    [
      fb("Participio.", "¿Has ___ mis gafas? (ver)", "visto", "Ver → visto."),
      fb("Participio.", "Ya habíamos ___ el problema. (resolver)", "resuelto", "Resolver → resuelto."),
      fb("Participio.", "¿En qué cajón has ___ los cubiertos? (poner)", "puesto", "Poner → puesto."),
      fb("Participio.", "Nadie me había ___ nada. (decir)", "dicho", "Decir → dicho."),
      fb("Participio.", "Los niños ya han ___ del colegio. (volver)", "vuelto", "Volver → vuelto."),
      fb("Participio.", "¿Quién ha ___ la ventana? (abrir)", "abierto", "Abrir → abierto."),
      mt(
        "Relaciona el infinitivo con su participio.",
        [
          ["hacer", "hecho"],
          ["romper", "roto"],
          ["morir", "muerto"],
          ["cubrir", "cubierto"],
        ],
        "Participios irregulares."
      ),
      toEs("What have you done?", "¿Qué has hecho?", "Hacer → hecho.", ["¿Qué ha hecho usted?"]),
    ]
  ),
  L(
    "b1-vocabulary-practice-10",
    "b1d-rep-combinados-se-lo-regalos",
    "Preguntas y respuestas: ¿a quién se lo regalaste?",
    "Repaso espaciado: regalos de cumpleaños y el se de le/les.",
    "6 min",
    [
      sec(
        "Los regalos",
        "—¿Qué le regalaste a tu madre? —Le regalé un pañuelo. —¿Y el pañuelo, dónde lo compraste? —Se lo compré en el mercado. Le/les + lo/la/los/las → se.",
        [
          ["Se lo compré en el mercado.", "I bought it for her at the market."],
        ],
        [
          fb("Responde.", "—¿Le diste la tarjeta a tu abuelo? —Sí, ___ di en la fiesta.", "se la", "Le + la → se la."),
        ]
      ),
    ],
    [
      fb("Responde.", "—¿Les regalaste los cómics a tus sobrinos? —Sí, ___ regalé.", "se los", "Les + los."),
      fb("Responde.", "—¿Me compraste el pan? —Sí, ___ compré.", "te lo", "Me → te."),
      fb("Responde.", "—¿Nos enviaste la invitación? —Sí, ___ envié ayer. (a vosotros)", "os la", "Nos → os; invitación → la."),
      fb("Responde.", "—¿Le has dado las flores a Clara? —Sí, ya ___ he dado.", "se las", "Le + las."),
      fb("Responde.", "—¿Vas a regalarle el perfume a tu hermana? —Sí, voy a ___.", "regalárselo", "Pegado al infinitivo."),
      mc(
        "—¿Quién te regaló ese reloj? —___ regaló mi padre.",
        ["Me lo", "Te lo", "Se lo", "Lo me"],
        0,
        "A mí → me; reloj → lo."
      ),
      toEs("My friends gave it to me for my birthday (the bike).", "Mis amigos me la regalaron por mi cumpleaños.", "Me + la.", ["Me la regalaron mis amigos por mi cumpleaños."]),
    ]
  ),
  L(
    "b1-comprehensive-review-1",
    "b1d-rep-combinados-posicion",
    "Circuito acumulativo: ¿delante o pegados?",
    "Repaso espaciado: conjugado, infinitivo, gerundio y mandatos.",
    "6 min",
    [
      sec(
        "Mapa de posiciones",
        "Verbo conjugado: delante (Te lo doy). Infinitivo o gerundio: pegados o delante del auxiliar (Voy a dártelo / Te lo voy a dar). Mandato afirmativo: pegados (Dámelo). Mandato negativo: delante (No me lo des).",
        [
          ["Estoy contándotelo todo.", "I'm telling you everything."],
          ["No se lo digas a nadie.", "Don't tell anyone."],
        ],
        [
          fb("Coloca.", "(dar, tú, a mí, el móvil) → ___, por favor.", "Dámelo", "Afirmativo → pegado."),
        ]
      ),
    ],
    [
      fb("Coloca.", "(no dar, tú, a mí, el móvil) → No ___.", "me lo des", "Negativo → delante."),
      fb("Coloca.", "(dar, yo, a ti, el móvil, ahora) → Ahora ___ doy.", "te lo", "Conjugado → delante."),
      fb("Coloca.", "Voy a pedir el dinero a mi padre. → Voy a ___.", "pedírselo", "Infinitivo → pegado."),
      fb("Coloca.", "Está preparando la comida para nosotros. → Está ___.", "preparándonosla", "Gerundio → pegado."),
      fb("Coloca.", "(usted, traer la cuenta a nosotros) → ___, por favor.", "Tráiganosla", "Traiga + nos + la."),
      mc(
        "¿Qué frase es incorrecta?",
        ["Voy a te lo dar.", "Te lo voy a dar.", "Voy a dártelo.", "Dámelo."],
        0,
        "Nunca entre el auxiliar y el infinitivo."
      ),
      toEs("Don't lend it to them (the car).", "No se lo prestes.", "Negativo: delante.", ["No se lo prestes a ellos."]),
    ]
  ),
  L(
    "b1-comprehensive-review-2",
    "b1d-rep-mezcla-tarjeta-cumpleanos",
    "Práctica mezclada: una tarjeta de cumpleaños",
    "Repaso espaciado: ojalá, espero que, pretérito perfecto y pronombres en un solo texto.",
    "7 min",
    [
      sec(
        "La tarjeta",
        "«Querida Nuria: ¡Feliz cumpleaños! Este año has trabajado muchísimo y espero que ahora descanses. Ojalá que el nuevo año te traiga muchas cosas buenas. El regalo te lo llevo el sábado. ¡Disfruta mucho! Un abrazo, Pablo.»",
        [
          ["Espero que ahora descanses.", "I hope you rest now."],
          ["El regalo te lo llevo el sábado.", "I'll bring you the present on Saturday."],
        ],
        [
          fb("Completa la tarjeta.", "Este año ___ muchísimo. (trabajar, tú)", "has trabajado", "Este año → perfecto."),
        ]
      ),
    ],
    [
      fb("Completa la tarjeta.", "Espero que ahora ___. (descansar, tú)", "descanses", "Espero que + subjuntivo."),
      fb("Completa la tarjeta.", "Ojalá que el nuevo año te ___ cosas buenas. (traer)", "traiga", "Ojalá + subjuntivo."),
      fb("Completa la tarjeta.", "El regalo ___ llevo el sábado.", "te lo", "Te + lo."),
      fb("Completa la tarjeta.", "¡___ mucho! (disfrutar, tú)", "Disfruta", "Mandato de tú."),
      fb("Otra tarjeta.", "Me alegra que por fin ___ el trabajo que querías. (tener, tú)", "tengas", "Emoción + subjuntivo."),
      fb("Otra tarjeta.", "Si ___ tiempo, llámame esta semana. (tener, tú)", "tienes", "Si + presente."),
      toEs("I hope you have a great day.", "Espero que tengas un día genial.", "Espero que + subjuntivo.", ["Espero que pases un día genial.", "Ojalá tengas un día genial."]),
    ]
  ),
  L(
    "b1-comprehensive-review-3",
    "b1d-rep-formacion-cambio-raiz",
    "Pares mínimos: pienso / piense, duermo / durmamos",
    "Repaso espaciado: los verbos con cambio de raíz en el subjuntivo.",
    "6 min",
    [
      sec(
        "La raíz cambia… a veces",
        "Verbos -ar y -er: cambian como en el presente (piense, pensemos; vuelva, volvamos). Verbos -ir: además cambian en nosotros y vosotros (duerma → durmamos; pida → pidamos; sienta → sintamos).",
        [
          ["Quiero que durmamos en la tienda de campaña.", "I want us to sleep in the tent."],
          ["Es mejor que pidamos pizza.", "It's better that we order pizza."],
        ],
        [
          fb("Completa.", "Espero que ___ pronto. (volver, tú)", "vuelvas", "o → ue."),
        ]
      ),
    ],
    [
      fb("Par A.", "Es importante que ___ antes de hablar. (pensar, tú)", "pienses", "e → ie."),
      fb("Par B.", "Es importante que ___ antes de hablar. (pensar, nosotros)", "pensemos", "-ar: sin cambio en nosotros."),
      fb("Par A.", "Ojalá ___ bien esta noche. (dormir, tú)", "duermas", "o → ue."),
      fb("Par B.", "Ojalá ___ bien esta noche. (dormir, nosotros)", "durmamos", "-ir: o → u en nosotros."),
      fb("Par A.", "No quiero que ___ más dinero. (pedir, él)", "pida", "e → i."),
      fb("Par B.", "No quiero que ___ más dinero. (pedir, nosotros)", "pidamos", "-ir: e → i también en nosotros."),
      mc(
        "«Me alegra que os ___ mejor.» (sentir)",
        ["sintáis", "sentáis", "sientáis", "sintéis"],
        0,
        "-ir: e → i en vosotros."
      ),
      toEs("I hope we find a good hotel.", "Espero que encontremos un buen hotel.", "Encontrar: sin cambio en nosotros.", ["Ojalá encontremos un buen hotel."]),
    ]
  ),
  L(
    "b1-comprehensive-review-3",
    "b1d-rep-formacion-car-gar-zar",
    "Ronda rápida: busque, llegue, empiece",
    "Repaso espaciado: los cambios de ortografía en -car, -gar, -zar.",
    "5 min",
    [
      sec(
        "Proteger el sonido",
        "-car → -que (buscar → busque), -gar → -gue (pagar → pague), -zar → -ce (empezar → empiece). El sonido se mantiene; solo cambia la letra.",
        [
          ["Es mejor que pague yo.", "It's better if I pay."],
        ],
        [
          fb("Rápido.", "Quiero que ___ la película ya. (empezar)", "empiece", "z → c, y e → ie."),
        ]
      ),
    ],
    [
      fb("Rápido.", "No creo que ___ a tiempo. (llegar, ellos)", "lleguen", "g → gu."),
      fb("Rápido.", "Te pido que ___ la luz al salir. (apagar)", "apagues", "g → gu."),
      fb("Rápido.", "Es necesario que ___ las facturas. (organizar, nosotros)", "organicemos", "z → c."),
      fb("Rápido.", "Espero que ___ buena nota en el examen. (sacar, tú)", "saques", "c → qu."),
      fb("Rápido.", "Ojalá que el niño no ___ con fuego. (jugar)", "juegue", "g → gu y u → ue."),
      fb("Rápido.", "Prefiero que ___ tú el restaurante. (elegir)", "elijas", "g → j delante de a."),
      fb("Rápido.", "Dudo que ___ el coche hoy. (arrancar)", "arranque", "c → qu."),
      mc(
        "«Es posible que ___ a llover.» (comenzar)",
        ["comience", "comienze", "comenze", "comenza"],
        0,
        "z → c y e → ie."
      ),
    ]
  ),
  L(
    "el-sendero-perdido",
    "b1d-rep-deseo-consejos-amiga",
    "Cuento con huecos: los consejos de la abuela",
    "Repaso espaciado: recomendar, aconsejar y sugerir + que + subjuntivo.",
    "6 min",
    [
      sec(
        "La carta de la abuela",
        "«Querido Hugo: ahora que vives solo, te aconsejo que comas bien, te recomiendo que ahorres un poco cada mes y te sugiero que llames a tu madre los domingos. Y no quiero que trabajes hasta tan tarde.»",
        [
          ["Te aconsejo que comas bien.", "I advise you to eat well."],
          ["Te sugiero que llames a tu madre.", "I suggest you call your mother."],
        ],
        [
          fb("Completa la carta.", "Te recomiendo que ___ un poco cada mes. (ahorrar)", "ahorres", "Recomendar que + subjuntivo."),
        ]
      ),
    ],
    [
      fb("Completa la carta.", "Te aconsejo que ___ bien. (comer)", "comas", "Aconsejar que + subjuntivo."),
      fb("Completa la carta.", "Te sugiero que ___ a tu madre los domingos. (llamar)", "llames", "Sugerir que + subjuntivo."),
      fb("Completa la carta.", "No quiero que ___ hasta tan tarde. (trabajar)", "trabajes", "Querer que + subjuntivo."),
      fb("Otra carta.", "Os pido que ___ la casa limpia. (tener)", "tengáis", "Pedir que + subjuntivo."),
      fb("Otra carta.", "Os prohíbo que ___ fiestas entre semana. (hacer)", "hagáis", "Prohibir que + subjuntivo."),
      mc(
        "«Mi médico me aconseja ___ más.» (yo camino más)",
        ["caminar", "que camino", "caminando", "que caminó"],
        0,
        "Con me/te/le, aconsejar puede ir con infinitivo."
      ),
      toEs("I suggest that you rest this weekend.", "Te sugiero que descanses este fin de semana.", "Sugerir que + subjuntivo.", ["Le sugiero que descanse este fin de semana."]),
    ]
  ),
  L(
    "primer-concierto",
    "b1d-rep-duda-quizas-tal-vez",
    "Elige y explica: es posible que, puede que, dudo que",
    "Repaso espaciado: expresar probabilidad con subjuntivo.",
    "6 min",
    [
      sec(
        "Probable, pero no seguro",
        "Es posible que, puede que, es probable que y dudo que van con subjuntivo: Puede que llueva. Es probable que lleguen tarde. En cambio, seguro que y está claro que van con indicativo.",
        [
          ["Puede que llegue un poco tarde.", "I might arrive a bit late."],
          ["Seguro que llega tarde.", "He's sure to arrive late."],
        ],
        [
          mc(
            "«Puede que ___ razón.» (tener, tú)",
            ["tengas", "tienes", "tener", "tendrás"],
            0,
            "Puede que + subjuntivo."
          ),
        ]
      ),
    ],
    [
      fb("Elige.", "Es probable que el vuelo ___ retraso. (tener)", "tenga", "Probabilidad → subjuntivo."),
      fb("Elige.", "Está claro que el vuelo ___ retraso. (tener)", "tiene", "Certeza → indicativo."),
      fb("Elige.", "Puede que mis primos ___ a la boda. (venir)", "vengan", "Puede que + subjuntivo."),
      fb("Elige.", "Seguro que mis primos ___ a la boda. (venir)", "vienen", "Seguro que → indicativo."),
      fb("Elige.", "Es poco probable que ___ este fin de semana. (nevar)", "nieve", "Probabilidad → subjuntivo."),
      ms(
        "¿Qué expresiones piden subjuntivo?",
        ["puede que", "es probable que", "está claro que", "es cierto que"],
        [0, 1],
        "Probabilidad → subjuntivo; certeza → indicativo."
      ),
      toEs("It's likely that the museum is full.", "Es probable que el museo esté lleno.", "Es probable que + subjuntivo.", ["Puede que el museo esté lleno."]),
    ]
  ),
  L(
    "los-regalos-misteriosos",
    "b1d-rep-emocion-infinitivo-o-que",
    "Cadena de transformaciones: me gusta viajar → me gusta que viajes",
    "Repaso espaciado: la emoción con uno o con dos sujetos.",
    "6 min",
    [
      sec(
        "Añade otra persona",
        "Me gusta cocinar (yo cocino). Me gusta que cocines (tú cocinas). Siento llegar tarde (yo). Siento que llegues tarde (tú). La estructura cambia cuando cambia el sujeto.",
        [
          ["Siento no poder ir.", "I'm sorry I can't go."],
          ["Siento que no puedas ir.", "I'm sorry you can't go."],
        ],
        [
          fb("Transforma.", "Me encanta bailar. → Me encanta que ___. (tú)", "bailes", "Dos sujetos → subjuntivo."),
        ]
      ),
    ],
    [
      fb("Transforma.", "Me molesta esperar. → Me molesta que me ___ esperar. (hacer, ellos)", "hagan", "Hacer → hagan."),
      fb("Transforma.", "Me da miedo conducir de noche. → Me da miedo que ___ de noche. (conducir, tú)", "conduzcas", "Conduzco → conduzcas."),
      fb("Transforma.", "Me alegra verte. → Me alegra que me ___ a ver. (venir, tú)", "vengas", "Venir → vengas."),
      fb("Transforma.", "Siento no saber la respuesta. → Siento que nadie ___ la respuesta. (saber)", "sepa", "Saber → sepa."),
      fb("Transforma.", "Odio madrugar. → Odio que mis vecinos ___ tan temprano. (levantarse)", "se levanten", "Reflexivo + subjuntivo."),
      mc(
        "«Nos sorprende ___ tan pronto.» (nosotros llegamos)",
        ["llegar", "que lleguemos", "que llegamos", "llegando"],
        0,
        "Mismo sujeto → infinitivo."
      ),
      toEs("I'm sorry you have to leave so soon.", "Siento que tengas que irte tan pronto.", "Sentir que + subjuntivo.", ["Lamento que tengas que irte tan pronto."]),
    ]
  ),
  L(
    "los-regalos-misteriosos",
    "b1d-rep-ojala-o-espero",
    "Pares mínimos: ojalá / espero que / quiero que",
    "Repaso espaciado: tres maneras de desear con el mismo subjuntivo.",
    "5 min",
    [
      sec(
        "Mismo modo, distinto matiz",
        "Ojalá (deseo, a veces poco probable): Ojalá gane la lotería. Espero que (esperanza razonable): Espero que apruebes. Quiero que (voluntad): Quiero que me ayudes. Las tres piden subjuntivo.",
        [
          ["Ojalá me toque la lotería.", "I wish I'd win the lottery."],
        ],
        [
          fb("Completa.", "Ojalá ___ sol mañana. (hacer)", "haga", "Ojalá + subjuntivo."),
        ]
      ),
    ],
    [
      fb("Completa.", "Espero que tu padre se ___ pronto. (recuperar)", "recupere", "Espero que + subjuntivo."),
      fb("Completa.", "Quiero que me ___ con la mudanza. (ayudar, vosotros)", "ayudéis", "Quiero que + subjuntivo."),
      fb("Completa.", "Ojalá ___ la entrevista. (pasar, nosotros)", "pasemos", "Ojalá + subjuntivo."),
      fb("Completa.", "Espero que ___ un buen viaje. (tener, vosotros)", "tengáis", "Espero que + subjuntivo."),
      mc(
        "¿Qué frase es incorrecta?",
        ["Ojalá que viene mañana.", "Ojalá venga mañana.", "Ojalá que venga mañana.", "Espero que venga mañana."],
        0,
        "Ojalá nunca va con indicativo."
      ),
      toEs("I hope it's not too late.", "Ojalá no sea demasiado tarde.", "Ojalá + subjuntivo.", ["Espero que no sea demasiado tarde.", "Ojalá que no sea demasiado tarde."]),
    ]
  ),
  L(
    "el-concurso-de-cocina",
    "b1d-rep-imperativo-nosotros",
    "Circuito acumulativo: vamos, hagamos, sentémonos",
    "Repaso espaciado: el mandato de nosotros para proponer planes.",
    "6 min",
    [
      sec(
        "Propuestas",
        "Nosotros usa el subjuntivo: Hablemos. Comamos fuera. Con reflexivos se pierde la -s: sentemos + nos → sentémonos. Con se lo también se pierde: digamos + se lo → digámoselo. Ir: vamos (afirmativo), no vayamos (negativo).",
        [
          ["Sentémonos aquí.", "Let's sit down here."],
          ["¡Vamos a la playa!", "Let's go to the beach!"],
        ],
        [
          fb("Propón.", "(cenar fuera) ___ fuera esta noche.", "Cenemos", "Nosotros → subjuntivo."),
        ]
      ),
    ],
    [
      fb("Propón.", "(no discutir) No ___ más.", "discutamos", "Negativo nosotros."),
      fb("Propón.", "(levantarse temprano) ___ temprano mañana.", "Levantémonos", "Levantemos + nos: se pierde la -s."),
      fb("Propón.", "(irse) ¡___!", "Vámonos", "Vamos + nos."),
      fb("Propón.", "(no irse todavía) No ___ todavía.", "nos vayamos", "Negativo: nos delante."),
      fb("Propón.", "(decírselo a Ana) ___ hoy.", "Digámoselo", "Digamos + se lo: se pierde una -s."),
      fb("Propón.", "(hacer una foto) ___ una foto.", "Hagamos", "Hacer → hagamos."),
      mc(
        "«___ a pie, que hace buen día.»",
        ["Vayamos", "Vamos a ir", "Íbamos", "Fuimos"],
        0,
        "Mandato de nosotros de ir (también se dice «vamos»)."
      ),
    ]
  ),
  L(
    "la-estudiante-de-intercambio",
    "b1d-rep-imperativo-pronombres-reflexivos",
    "Práctica de patrones: lávate / no te laves",
    "Repaso espaciado: reflexivos en mandatos de tú y usted.",
    "6 min",
    [
      sec(
        "Pegado o delante",
        "Tú: lávate / no te laves. Usted: lávese / no se lave. Afirmativo pegado con tilde; negativo con el pronombre delante.",
        [
          ["Ponte el abrigo, que hace frío.", "Put on your coat, it's cold."],
          ["No se vaya todavía, por favor.", "Don't leave yet, please."],
        ],
        [
          fb("Mismo marco.", "(tú, sentarse) ___ aquí.", "Siéntate", "Pegado con tilde."),
        ]
      ),
    ],
    [
      fb("Mismo marco.", "(tú, no sentarse) No ___ ahí.", "te sientes", "Negativo: te delante."),
      fb("Mismo marco.", "(tú, callarse) ¡___!", "Cállate", "Pegado con tilde."),
      fb("Mismo marco.", "(tú, no preocuparse) No ___.", "te preocupes", "Negativo."),
      fb("Mismo marco.", "(usted, quedarse) ___ a cenar.", "Quédese", "Usted pegado."),
      fb("Mismo marco.", "(usted, no molestarse) No ___.", "se moleste", "Negativo usted."),
      fb("Mismo marco.", "(tú, irse) ___ a casa, es tarde.", "Vete", "Irse → vete."),
      mc(
        "(tú, ducharse) «___ antes de cenar.»",
        ["Dúchate", "Duchate", "Te duchas", "Duchaste"],
        0,
        "Pegado y con tilde."
      ),
      toEs("Don't get angry, please (usted).", "No se enfade, por favor.", "Negativo usted.", ["No se enoje, por favor."]),
    ]
  ),
  L(
    "el-partido-solidario",
    "b1d-rep-si-presente",
    "Frase a frase: si + presente",
    "Repaso espaciado: condiciones reales con presente, futuro o mandato.",
    "6 min",
    [
      sec(
        "Tres finales",
        "Si + presente → presente (Si llueve, me quedo en casa), futuro (Si llueve, me quedaré en casa) o mandato (Si llueve, coge el paraguas). Nunca futuro después de si.",
        [
          ["Si tienes hambre, come algo.", "If you're hungry, eat something."],
          ["Si ahorro, iré a Japón.", "If I save, I'll go to Japan."],
        ],
        [
          fb("Construye.", "Si ___ tiempo, te ayudo. (tener, yo)", "tengo", "Si + presente."),
        ]
      ),
    ],
    [
      fb("Paso 1.", "Si ___ el tren, llegamos a las nueve. (coger, nosotros)", "cogemos", "Si + presente."),
      fb("Paso 2.", "Si cogemos el tren, ___ a las nueve. (llegar, futuro)", "llegaremos", "Resultado en futuro."),
      fb("Paso 3.", "Si ves a Luis, ___ que me llame. (decir, mandato)", "dile", "Mandato de tú + le."),
      fb("Paso 1.", "Si no ___ prisa, damos un paseo. (tener, vosotros)", "tenéis", "Si + presente."),
      fb("Paso 2.", "Si me invitas, ___ el postre. (llevar, futuro)", "llevaré", "Resultado en futuro."),
      mc(
        "¿Qué frase es incorrecta?",
        ["Si lloverá, no saldré.", "Si llueve, no saldré.", "Si llueve, no salgo.", "Si llueve, no salgas."],
        0,
        "Después de si no va el futuro."
      ),
      toEs("If you need help, call me.", "Si necesitas ayuda, llámame.", "Si + presente, mandato.", ["Si necesitas ayuda, me llamas."]),
    ]
  ),
  L(
    "el-negocio-de-paseos",
    "b1d-rep-perfecto-ya-todavia",
    "Preguntas y respuestas: ¿ya has…? / todavía no he…",
    "Repaso espaciado: ya y todavía no con pretérito perfecto.",
    "6 min",
    [
      sec(
        "Lista de tareas",
        "—¿Ya has hecho la compra? —Sí, ya la he hecho. —¿Has llamado al fontanero? —No, todavía no lo he llamado. Ya = already; todavía no = not yet.",
        [
          ["Ya he terminado el informe.", "I've already finished the report."],
          ["Todavía no he leído tu mensaje.", "I haven't read your message yet."],
        ],
        [
          fb("Responde.", "—¿Ya has pagado el alquiler? —Sí, ya lo ___.", "he pagado", "Ya + perfecto."),
        ]
      ),
    ],
    [
      fb("Responde.", "—¿Has sacado la basura? —No, todavía no la ___.", "he sacado", "Todavía no + perfecto."),
      fb("Responde.", "—¿Habéis reservado el hotel? —Sí, ya lo ___.", "hemos reservado", "Nosotros."),
      fb("Responde.", "—¿Están ya en casa los niños? —No, todavía no ___. (volver)", "han vuelto", "Volver → vuelto."),
      fb("Responde.", "—¿Has escrito a tu tía? —Sí, ya le ___.", "he escrito", "Escribir → escrito."),
      fb("Responde.", "—¿Se puede comprar ya en la farmacia? —No, todavía no ___. (abrir)", "ha abierto", "Abrir → abierto."),
      mc(
        "—¿Ya has visto la nueva serie? —No, ___.",
        ["todavía no la he visto", "ya no la veo", "todavía no la vi ayer", "ya la había visto"],
        0,
        "Todavía no + perfecto."
      ),
      toEs("Have you already had lunch? Not yet.", "¿Ya has comido? Todavía no.", "Ya / todavía no.", ["¿Ya has almorzado? Todavía no.", "¿Has comido ya? Todavía no."]),
    ]
  ),
  L(
    "el-negocio-de-paseos",
    "b1d-rep-pluscuamperfecto-ya-habia",
    "Circuito acumulativo: cuando llegué, ya había…",
    "Repaso espaciado: dos pasados, uno antes que otro.",
    "6 min",
    [
      sec(
        "El pasado del pasado",
        "Cuando + indefinido, ya + pluscuamperfecto: Cuando llegué, la fiesta ya había terminado. También con porque: No comí porque ya había comido en casa.",
        [
          ["No vi la película porque ya la había visto.", "I didn't watch the film because I had already seen it."],
        ],
        [
          fb("Completa.", "Cuando llamé, mi hermano ya ___. (salir)", "había salido", "Anterior → pluscuamperfecto."),
        ]
      ),
    ],
    [
      fb("Estación 1.", "Cuando llegamos al cine, la película ya ___. (empezar)", "había empezado", "Anterior."),
      fb("Estación 1.", "Cuando encontré las llaves, ya ___ otra copia. (hacer, yo)", "había hecho", "Hacer → hecho."),
      fb("Estación 2.", "No tenía hambre porque ya ___. (merendar, yo)", "había merendado", "Causa anterior."),
      fb("Estación 2.", "Estaban cansados porque ___ toda la noche. (bailar)", "habían bailado", "Causa anterior."),
      fb("Estación 3.", "Nunca ___ un lugar tan bonito antes de aquel viaje. (ver, yo)", "había visto", "Experiencia anterior."),
      fb("Estación 3.", "Cuando el profesor ___, ya habíamos terminado el examen. (llegar)", "llegó", "Posterior → indefinido."),
      mc(
        "«Me dijo que ya ___ la carta.» (escribir, él, antes)",
        ["había escrito", "ha escrito", "escribía", "escribirá"],
        0,
        "Anterior a «me dijo»."
      ),
      toEs("When we arrived, the train had already left.", "Cuando llegamos, el tren ya había salido.", "Pluscuamperfecto.", ["Cuando llegamos, el tren ya se había ido."]),
    ]
  ),
  L(
    "el-primer-campamento",
    "b1d-rep-perfecto-pluscuam-mezcla",
    "Elige y explica: he hecho, hice o había hecho",
    "Repaso espaciado: tres pasados con sus marcadores.",
    "6 min",
    [
      sec(
        "Tres pasados",
        "Pretérito perfecto: hoy, este año, ya, nunca (unido al presente). Indefinido: ayer, en 2015, la semana pasada (terminado). Pluscuamperfecto: antes de otro pasado (ya había…).",
        [
          ["Este mes he ido al gimnasio diez veces.", "This month I've gone to the gym ten times."],
          ["El mes pasado fui cinco veces.", "Last month I went five times."],
        ],
        [
          mc(
            "«Este verano ___ mucho.» (viajar, nosotros)",
            ["hemos viajado", "viajamos ayer", "habíamos viajado", "viajaremos"],
            0,
            "Este verano → perfecto."
          ),
        ]
      ),
    ],
    [
      mc("«El verano pasado ___ a Grecia.» (ir, nosotros)", ["fuimos", "hemos ido", "habíamos ido", "íbamos"], 0, "Pasado cerrado → indefinido."),
      mc("«Cuando llegamos a Grecia, mis padres ya ___ allí.» (estar)", ["habían estado", "han estado", "estuvieron", "están"], 0, "Anterior a llegamos."),
      mc("«¿___ alguna vez en Grecia?» (estar, tú)", ["Has estado", "Estuviste ayer", "Habías estado mañana", "Estarás"], 0, "Experiencia → perfecto."),
      fb("Completa.", "Esta mañana ___ temprano. (levantarse, yo)", "me he levantado", "Esta mañana → perfecto."),
      fb("Completa.", "Anteayer ___ muy tarde. (acostarse, yo)", "me acosté", "Anteayer → indefinido."),
      fb("Completa.", "Estaba agotada porque la noche anterior no ___. (dormir)", "había dormido", "Anterior → pluscuamperfecto."),
      toEs("I lost the keys I had bought the day before.", "Perdí las llaves que había comprado el día anterior.", "Indefinido + pluscuamperfecto.", ["Perdí las llaves que había comprado el día antes."]),
    ]
  ),
  L(
    "el-examen-final",
    "b1d-rep-relativos-que-quien",
    "Ronda rápida: que, quien, lo que, el que",
    "Repaso espaciado: el relativo correcto sin pensarlo dos veces.",
    "5 min",
    [
      sec(
        "Guía rápida",
        "Que: el más común, sin preposición. Quien: persona, tras coma o preposición. Lo que: una idea completa. El/la que: tras preposición (con el que, en la que).",
        [
          ["La chica con la que hablé es mi prima.", "The girl I talked to is my cousin."],
          ["Lo que dices es verdad.", "What you're saying is true."],
        ],
        [
          fb("Rápido.", "El pueblo ___ nací es muy pequeño. (en)", "en el que", "Preposición + el que."),
        ]
      ),
    ],
    [
      fb("Rápido.", "La película ___ vimos ayer era aburrida.", "que", "Sin preposición."),
      fb("Rápido.", "Apunta ___ ha dicho la profesora.", "lo que", "Idea completa."),
      fb("Rápido.", "Mi tío, ___ vive en Lima, viene en mayo.", "quien", "Persona entre comas (también «que»)."),
      fb("Rápido.", "La mesa ___ trabajo es de mi abuelo. (sobre)", "sobre la que", "Preposición + la que."),
      fb("Rápido.", "Los amigos ___ viajé son de Chile. (con)", "con los que", "Preposición + los que."),
      fb("Rápido.", "___ más me gusta de ti es tu humor.", "Lo que", "Idea → lo que."),
      mc(
        "«El chico ___ te presenté ayer es mi vecino.»",
        ["que", "lo que", "el cual que", "cuyo"],
        0,
        "Sin preposición → que."
      ),
    ]
  ),
  L(
    "la-escritora-persistente",
    "b1d-rep-combinados-mandatos-dialogo",
    "Frase a frase: tráemelo, pásamela",
    "Repaso espaciado: pedir cosas en la mesa con pronombres combinados.",
    "6 min",
    [
      sec(
        "En la mesa",
        "¿Me pasas la sal? → Pásamela. ¿Nos traes el pan? → Tráenoslo. A un camarero: Tráiganosla (la cuenta). Recuerda la tilde al pegar dos pronombres.",
        [
          ["Pásame la sal. → Pásamela.", "Pass me the salt. → Pass it to me."],
        ],
        [
          fb("Construye.", "Pásame el agua. → ___.", "Pásamela", "El agua es femenino → la."),
        ]
      ),
    ],
    [
      fb("Paso 1.", "Tráeme el pan. → ___.", "Tráemelo", "Me + lo."),
      fb("Paso 2.", "Tráeles el pan a los niños. → ___.", "Tráeselo", "Les + lo → se lo."),
      fb("Paso 3.", "No les traigas el pan todavía. → No ___ todavía.", "se lo traigas", "Negativo."),
      fb("Paso 1.", "Sírveme la sopa. → ___.", "Sírvemela", "Me + la."),
      fb("Paso 2.", "Sírvele la sopa a la abuela. → ___.", "Sírvesela", "Le + la → se la."),
      fb("Paso 3.", "(usted) Sírvale la sopa a la señora. → ___.", "Sírvasela", "Sirva + se + la."),
      mc(
        "«¿Me dejas tu servilleta?» —Sí, toma, ___.",
        ["te la dejo", "se la dejo", "me la dejo", "la te dejo"],
        0,
        "A ti → te."
      ),
      toEs("Bring it to us, please (the bill, usted).", "Tráiganosla, por favor.", "Traiga + nos + la."),
    ]
  ),
  L(
    "la-escritora-persistente",
    "b1d-rep-combinados-perfecto",
    "Cadena de transformaciones: ya se lo he dicho",
    "Repaso espaciado: pronombres combinados con tiempos compuestos.",
    "6 min",
    [
      sec(
        "Delante de haber",
        "Con tiempos compuestos, los pronombres van delante de haber: Ya se lo he dicho. Nunca me lo habían explicado. No se pegan al participio.",
        [
          ["Ya se lo he dicho tres veces.", "I've already told him three times."],
          ["Nadie nos lo había explicado.", "Nobody had explained it to us."],
        ],
        [
          fb("Transforma.", "He dado el informe a la jefa. → ___ he dado.", "Se lo", "Le + lo → se lo, delante de he."),
        ]
      ),
    ],
    [
      fb("Transforma.", "Mis padres me han regalado un reloj. → Mis padres ___ han regalado.", "me lo", "Me + lo."),
      fb("Transforma.", "Hemos mandado las fotos a los abuelos. → ___ hemos mandado.", "Se las", "Les + las."),
      fb("Transforma.", "Nadie te había contado la historia. → Nadie ___ había contado.", "te la", "Te + la."),
      fb("Transforma.", "¿Les has devuelto el dinero? → ¿___ has devuelto?", "Se lo", "Les + lo."),
      fb("Transforma.", "Nos habían prometido una sorpresa. → ___ habían prometido.", "Nos la", "Nos + la."),
      mc(
        "¿Qué frase es correcta?",
        ["Se lo he explicado.", "He se lo explicado.", "He explicádoselo.", "Lo se he explicado."],
        0,
        "Delante de haber."
      ),
      toEs("I've already sent it to you (the email).", "Ya te lo he enviado.", "Te + lo + he.", ["Ya te lo he mandado."]),
    ]
  ),
  L(
    "el-refugio-de-animales",
    "b1d-rep-vosotros-mezcla",
    "Práctica mezclada: vosotros en el campamento",
    "Repaso espaciado: un monitor da instrucciones a su grupo.",
    "6 min",
    [
      sec(
        "El monitor",
        "«Chicos, escuchad. Dejad las mochilas aquí y sentaos en círculo. No os alejéis del grupo. Si tenéis frío, poneos la chaqueta. Y por la noche, no hagáis ruido.»",
        [
          ["Dejad las mochilas aquí.", "Leave your backpacks here."],
          ["No os alejéis del grupo.", "Don't wander away from the group."],
        ],
        [
          fb("Completa.", "Chicos, ___. (escuchar)", "escuchad", "Afirmativo: -d."),
        ]
      ),
    ],
    [
      fb("Completa.", "___ en círculo. (sentarse)", "Sentaos", "Reflexivo: pierde la -d."),
      fb("Completa.", "No ___ del grupo. (alejarse)", "os alejéis", "Negativo: os + subjuntivo."),
      fb("Completa.", "Si tenéis frío, ___ la chaqueta. (ponerse)", "poneos", "Poned + os → poneos."),
      fb("Completa.", "Por la noche, no ___ ruido. (hacer)", "hagáis", "Negativo."),
      fb("Completa.", "___ las linternas en la tienda. (dejar)", "Dejad", "Afirmativo."),
      mc(
        "«Recoged la basura y ___ a la tienda.» (irse)",
        ["idos", "iros", "ios", "id os"],
        0,
        "Irse → idos."
      ),
      toEs("Wash your hands before dinner (you all).", "Lavaos las manos antes de cenar.", "Lavad + os → lavaos."),
    ]
  ),
  L(
    "la-averia-en-la-carretera",
    "b1d-rep-formacion-dictado",
    "Dictado: el subjuntivo en frases cotidianas",
    "Repaso espaciado: reconstruye frases con formas regulares e irregulares.",
    "5 min",
    [
      sec(
        "Escucha la forma",
        "En estas frases aparecen formas regulares (hables, comas, vivan) e irregulares (tengas, vaya, sepa). Fíjate en la terminación: -ar lleva e; -er/-ir llevan a.",
        [
          ["Quiero que vivamos cerca del mar.", "I want us to live near the sea."],
        ],
        [
          wo("Es mejor que no bebas café por la noche.", "Beber → bebas.", "It's better that you don't drink coffee at night."),
        ]
      ),
    ],
    [
      wo("Mis padres quieren que estudie medicina.", "Estudiar → estudie.", "My parents want me to study medicine."),
      wo("Dudo que tengan tiempo esta semana.", "Tener → tengan.", "I doubt they have time this week."),
      wo("Ojalá sepa llegar sin mapa.", "Saber → sepa.", "I hope he knows how to get there without a map."),
      wo("Te pido que cierres la ventana.", "Cerrar → cierres.", "I'm asking you to close the window."),
      fb("Escribe.", "Es necesario que ___ el formulario hoy. (rellenar, usted)", "rellene", "-ar → e."),
      fb("Escribe.", "No creo que ___ tan lejos. (estar)", "esté", "Estar → esté."),
      toEs("I want you to learn to swim.", "Quiero que aprendas a nadar.", "Aprender → aprendas."),
    ]
  ),
  L(
    "las-clases-de-conducir",
    "b1d-rep-deseo-peticion-trabajo",
    "Circuito acumulativo: peticiones en el trabajo",
    "Repaso espaciado: pedir, exigir, necesitar y rogar + que + subjuntivo.",
    "6 min",
    [
      sec(
        "Correos de la oficina",
        "«Les pido que envíen los informes antes del viernes. La dirección exige que todos lleguen a las nueve. Necesitamos que alguien revise el presupuesto. Les ruego que respondan cuanto antes.»",
        [
          ["Necesitamos que alguien revise el presupuesto.", "We need someone to check the budget."],
          ["Les ruego que respondan cuanto antes.", "Please reply as soon as possible."],
        ],
        [
          fb("Estación 1.", "Les pido que ___ los informes antes del viernes. (enviar)", "envíen", "Pedir que + subjuntivo."),
        ]
      ),
    ],
    [
      fb("Estación 1.", "La dirección exige que todos ___ a las nueve. (llegar)", "lleguen", "Exigir que + subjuntivo."),
      fb("Estación 1.", "Les ruego que ___ cuanto antes. (responder)", "respondan", "Rogar que + subjuntivo."),
      fb("Estación 2.", "Necesito que me ___ el archivo. (mandar, tú)", "mandes", "Necesitar que + subjuntivo."),
      fb("Estación 2.", "El cliente quiere que le ___ un descuento. (hacer, nosotros)", "hagamos", "Querer que + subjuntivo."),
      fb("Estación 3.", "Mi jefe prefiere que ___ desde casa los viernes. (trabajar, yo)", "trabaje", "Preferir que + subjuntivo."),
      fb("Estación 3.", "Os pido que no ___ el móvil en las reuniones. (usar)", "uséis", "Pedir que + subjuntivo."),
      mc(
        "«Es urgente que el técnico ___ hoy.» (venir)",
        ["venga", "viene", "vendrá", "venir"],
        0,
        "Urgencia → subjuntivo."
      ),
      toEs("We need you to sign the contract today.", "Necesitamos que firme el contrato hoy.", "Necesitar que + subjuntivo.", ["Necesitamos que firmes el contrato hoy."]),
    ]
  ),
  L(
    "las-clases-de-conducir",
    "b1d-rep-duda-corrige",
    "Corrige el párrafo: la opinión de Jaime",
    "Repaso espaciado: errores de modo después de creer, no creer y dudar.",
    "6 min",
    [
      sec(
        "El texto",
        "«Creo que el nuevo parque sea bonito, pero no creo que la gente lo usa mucho. Dudo que el ayuntamiento lo cuida bien. Pienso que es necesario que los vecinos participan.» Hay cuatro errores.",
        [
          ["Creo que el nuevo parque es bonito.", "I think the new park is nice."],
        ],
        [
          mc(
            "¿Qué pasa con «creo que el nuevo parque sea bonito»?",
            ["Creo que afirma: pide indicativo (es).", "Está bien.", "Debe ser «sería».", "Falta «no»."],
            0,
            "Creer en afirmativo → indicativo."
          ),
        ]
      ),
    ],
    [
      toEs("Corrige: «Creo que el nuevo parque sea bonito.»", "Creo que el nuevo parque es bonito.", "Afirmación → indicativo."),
      toEs("Corrige: «No creo que la gente lo usa mucho.»", "No creo que la gente lo use mucho.", "No creo que → subjuntivo."),
      toEs("Corrige: «Dudo que el ayuntamiento lo cuida bien.»", "Dudo que el ayuntamiento lo cuide bien.", "Dudar → subjuntivo."),
      toEs("Corrige: «Es necesario que los vecinos participan.»", "Es necesario que los vecinos participen.", "Es necesario que → subjuntivo."),
      toEs("Corrige: «Estoy seguro de que venga mañana.»", "Estoy seguro de que viene mañana.", "Certeza → indicativo.", ["Estoy seguro de que vendrá mañana."]),
      ms(
        "¿Qué frases son correctas?",
        ["No pienso que tengas razón.", "Pienso que tienes razón.", "Pienso que tengas razón.", "Creo que tengas razón."],
        [0, 1],
        "No pienso → subjuntivo; pienso → indicativo."
      ),
    ]
  ),
  L(
    "el-teatro-comunitario",
    "b1d-rep-emocion-noticias",
    "Habla de ti: reacciona a las noticias",
    "Repaso espaciado: qué bien que, qué pena que, me indigna que.",
    "6 min",
    [
      sec(
        "Reacciones",
        "Qué + adjetivo/sustantivo + que + subjuntivo: ¡Qué bien que vengas! ¡Qué pena que no puedas venir! ¡Qué raro que no conteste! También: Me indigna que suban los precios.",
        [
          ["¡Qué pena que llueva hoy!", "What a shame it's raining today!"],
          ["¡Qué bien que te guste!", "How great that you like it!"],
        ],
        [
          fb("Reacciona.", "—Me han dado el trabajo. —¡Qué bien que te lo ___! (dar)", "den", "Qué bien que + subjuntivo."),
        ]
      ),
    ],
    [
      fb("Reacciona.", "—No puedo ir a la fiesta. —¡Qué pena que no ___ ir! (poder)", "puedas", "Qué pena que + subjuntivo."),
      fb("Reacciona.", "—Luis no contesta. —¡Qué raro que no ___! (contestar)", "conteste", "Qué raro que + subjuntivo."),
      fb("Reacciona.", "—Suben otra vez los alquileres. —Me indigna que ___ tanto. (subir)", "suban", "Emoción + subjuntivo."),
      fb("Reacciona.", "—Mis abuelos vienen a vivir aquí. —¡Qué alegría que ___ cerca! (estar)", "estén", "Qué alegría que + subjuntivo."),
      fb("Reacciona.", "—El museo cierra los lunes. —¡Qué lástima que ___ hoy! (cerrar)", "cierre", "e → ie."),
      mc(
        "—Voy a Japón en mayo. —¡Qué suerte que ___ ir!",
        ["puedas", "puedes", "poder", "podrás"],
        0,
        "Qué suerte que + subjuntivo."
      ),
      toEs("What a shame you have to work on Saturday!", "¡Qué pena que tengas que trabajar el sábado!", "Qué pena que + subjuntivo.", ["¡Qué lástima que tengas que trabajar el sábado!"]),
    ]
  ),
  L(
    "la-recuperacion-de-marta",
    "b1d-rep-deseo-duda-emocion-ronda",
    "Ronda rápida: ¿indicativo o subjuntivo?",
    "Repaso espaciado: diez frases, una decisión en cada una.",
    "5 min",
    [
      sec(
        "La pregunta clave",
        "¿Hay deseo, duda, emoción o valoración sobre otra persona? → subjuntivo. ¿Hay información, certeza o percepción (veo que, sé que, creo que)? → indicativo.",
        [
          ["Veo que estás cansado.", "I see you're tired."],
          ["Siento que estés cansado.", "I'm sorry you're tired."],
        ],
        [
          fb("Rápido.", "Sé que ___ razón. (tener, tú)", "tienes", "Saber → indicativo."),
        ]
      ),
    ],
    [
      fb("Rápido.", "Ojalá ___ razón. (tener, tú)", "tengas", "Ojalá → subjuntivo."),
      fb("Rápido.", "Veo que ___ mucho trabajo. (tener, vosotros)", "tenéis", "Percepción → indicativo."),
      fb("Rápido.", "Me molesta que ___ tanto trabajo. (tener, vosotros)", "tengáis", "Emoción → subjuntivo."),
      fb("Rápido.", "Es evidente que ___ problemas. (haber)", "hay", "Certeza → indicativo."),
      fb("Rápido.", "Es posible que ___ problemas. (haber)", "haya", "Posibilidad → subjuntivo."),
      fb("Rápido.", "Parece que ___ a llover. (ir)", "va", "Parece que → indicativo."),
      fb("Rápido.", "No parece que ___ a llover. (ir)", "vaya", "Negación → subjuntivo."),
      fb("Rápido.", "Te aseguro que ___ la verdad. (decir, yo)", "digo", "Asegurar → indicativo."),
    ]
  ),
  L(
    "el-trabajo-en-equipo",
    "b1d-rep-impersonales-valoraciones",
    "Elige y explica: es lógico que, es verdad que",
    "Repaso espaciado: valoración (subjuntivo) frente a constatación (indicativo).",
    "6 min",
    [
      sec(
        "Valorar o constatar",
        "Valorar (subjuntivo): es lógico que, es normal que, es una pena que, es bueno que. Constatar (indicativo): es verdad que, es cierto que, es obvio que, está claro que.",
        [
          ["Es lógico que estés nervioso.", "It's natural that you're nervous."],
          ["Es verdad que estás nervioso.", "It's true that you're nervous."],
        ],
        [
          mc(
            "«Es una pena que no ___ más tiempo.» (tener, nosotros)",
            ["tengamos", "tenemos", "tener", "tendremos"],
            0,
            "Valoración → subjuntivo."
          ),
        ]
      ),
    ],
    [
      fb("Elige.", "Es bueno que los niños ___ al aire libre. (jugar)", "jueguen", "Valoración."),
      fb("Elige.", "Es cierto que los niños ___ poco al aire libre. (jugar)", "juegan", "Constatación."),
      fb("Elige.", "Es lógico que la gente ___ enfadada. (estar)", "esté", "Valoración."),
      fb("Elige.", "Es evidente que la gente ___ enfadada. (estar)", "está", "Constatación."),
      fb("Elige.", "Es injusto que ___ tanto por un café. (cobrar, ellos)", "cobren", "Valoración."),
      ms(
        "¿Cuáles piden subjuntivo?",
        ["es normal que", "es una pena que", "es obvio que", "es verdad que"],
        [0, 1],
        "Las dos primeras valoran."
      ),
      toEs("It's normal that you miss your family.", "Es normal que eches de menos a tu familia.", "Es normal que + subjuntivo.", ["Es normal que extrañes a tu familia."]),
    ]
  ),
  L(
    "el-trabajo-en-equipo",
    "b1d-rep-ojala-habla-de-ti",
    "Habla de ti: tus ojalás para este año",
    "Repaso espaciado: formula tus propios deseos con ojalá.",
    "5 min",
    [
      sec(
        "Tus deseos",
        "Piensa en tres cosas que deseas para este año: Ojalá encuentre un piso más grande. Ojalá mi hermana se case. Ojalá podamos viajar juntos.",
        [
          ["Ojalá encuentre un piso más grande.", "I hope I find a bigger flat."],
        ],
        [
          fb("Tus deseos.", "Ojalá ___ más tiempo libre. (tener, yo)", "tenga", "Ojalá + subjuntivo."),
        ]
      ),
    ],
    [
      fb("Tus deseos.", "Ojalá mis amigos ___ a verme. (venir)", "vengan", "Venir → vengan."),
      fb("Tus deseos.", "Ojalá ___ a hablar mejor español. (aprender, yo)", "aprenda", "Aprender → aprenda."),
      fb("Tus deseos.", "Ojalá mi familia ___ bien de salud. (seguir)", "siga", "Seguir → siga."),
      fb("Tus deseos.", "Ojalá ___ viajar a Argentina. (poder, nosotros)", "podamos", "Poder → podamos."),
      fb("Tus deseos.", "Ojalá no me ___ el trabajo. (cambiar, ellos)", "cambien", "Cambiar → cambien."),
      toEs("I hope I find a good job.", "Ojalá encuentre un buen trabajo.", "Ojalá + subjuntivo.", ["Ojalá que encuentre un buen trabajo.", "Ojalá encuentre un trabajo bueno."]),
    ]
  ),
  L(
    "la-reunion-familiar",
    "b1d-rep-ojala-mezcla",
    "Práctica mezclada: ojalá, espero, es importante",
    "Repaso espaciado: tres estructuras con subjuntivo en un mensaje.",
    "6 min",
    [
      sec(
        "El mensaje",
        "«¡Hola, Clara! Ojalá te vaya genial en Berlín. Espero que encuentres un piso pronto. Es importante que abras una cuenta en el banco la primera semana. ¡Y ojalá nos veamos en Navidad!»",
        [
          ["Ojalá te vaya genial en Berlín.", "I hope it goes great for you in Berlin."],
        ],
        [
          fb("Completa.", "Espero que ___ un piso pronto. (encontrar, tú)", "encuentres", "o → ue."),
        ]
      ),
    ],
    [
      fb("Completa.", "Ojalá te ___ genial en Berlín. (ir)", "vaya", "Ir → vaya."),
      fb("Completa.", "Es importante que ___ una cuenta en el banco. (abrir, tú)", "abras", "Abrir → abras."),
      fb("Completa.", "¡Y ojalá nos ___ en Navidad! (ver)", "veamos", "Ver → veamos."),
      fb("Completa.", "Es mejor que ___ la bici en vez del metro. (usar, tú)", "uses", "Usar → uses."),
      fb("Completa.", "Espero que tus compañeros de piso ___ simpáticos. (ser)", "sean", "Ser → sean."),
      mc(
        "«Ojalá ___ alemán rápido.» (aprender, tú)",
        ["aprendas", "aprendes", "aprender", "aprenderás"],
        0,
        "Ojalá + subjuntivo."
      ),
      toEs("I hope you make friends quickly.", "Espero que hagas amigos rápido.", "Hacer → hagas.", ["Ojalá hagas amigos rápido.", "Espero que hagas amigos rápidamente."]),
    ]
  ),
  L(
    "el-abuelo-y-el-telefono",
    "b1d-rep-imperativo-afirmativo-negativo-tu",
    "Pares mínimos: habla / no hables",
    "Repaso espaciado: el negativo de tú cambia de forma.",
    "5 min",
    [
      sec(
        "Dos formas",
        "Afirmativo de tú = presente de él: habla, come, escribe. Negativo = subjuntivo: no hables, no comas, no escribas. Con pronombres: dímelo / no me lo digas.",
        [
          ["Come más fruta y no comas tanto azúcar.", "Eat more fruit and don't eat so much sugar."],
        ],
        [
          fb("Par.", "Escribe a tu abuela. → No le ___ ahora.", "escribas", "Negativo → subjuntivo."),
        ]
      ),
    ],
    [
      fb("Par A.", "(abrir) ___ la ventana.", "Abre", "Afirmativo."),
      fb("Par B.", "(no abrir) No ___ la ventana.", "abras", "Negativo."),
      fb("Par A.", "(esperar) ___ un momento.", "Espera", "Afirmativo."),
      fb("Par B.", "(no esperar) No me ___.", "esperes", "Negativo."),
      fb("Par A.", "(comprar) ___ pan, por favor.", "Compra", "Afirmativo."),
      fb("Par B.", "(no comprar) No ___ más dulces.", "compres", "Negativo."),
      mc(
        "«___ la tele y no ___ el móvil en la mesa.» (apagar, usar)",
        ["Apaga / uses", "Apague / usas", "Apagas / uses", "Apaga / usa"],
        0,
        "Afirmativo + negativo."
      ),
    ]
  ),
  L(
    "el-periodico-escolar",
    "b1d-rep-imperativo-receta",
    "Cuento con huecos: instrucciones para el gazpacho",
    "Repaso espaciado: mandatos de tú en una receta contada por un amigo.",
    "6 min",
    [
      sec(
        "La receta",
        "«Lava los tomates y córtalos. Pela el pepino. Pon todo en la batidora con aceite y sal. No le pongas mucho ajo. Bátelo bien y mételo en la nevera. Sírvelo muy frío.»",
        [
          ["Lava los tomates y córtalos.", "Wash the tomatoes and cut them."],
          ["No le pongas mucho ajo.", "Don't put too much garlic in it."],
        ],
        [
          fb("Completa.", "___ los tomates. (lavar)", "Lava", "Mandato de tú."),
        ]
      ),
    ],
    [
      fb("Completa.", "Lava los tomates y ___. (cortar + los)", "córtalos", "Pegado con tilde."),
      fb("Completa.", "___ todo en la batidora. (poner)", "Pon", "Poner → pon."),
      fb("Completa.", "No le ___ mucho ajo. (poner)", "pongas", "Negativo."),
      fb("Completa.", "___ bien. (batir + lo)", "Bátelo", "Bate + lo, con tilde."),
      fb("Completa.", "___ muy frío. (servir + lo)", "Sírvelo", "Sirve + lo."),
      mc(
        "(usted) «___ los tomates y córtelos.»",
        ["Lave", "Lava", "Lavas", "Lavad"],
        0,
        "Usted → lave."
      ),
      toEs("Don't add water; put it in the fridge.", "No le añadas agua; mételo en la nevera.", "Negativo + afirmativo.", ["No le pongas agua; mételo en la nevera.", "No añadas agua; mételo en la nevera."]),
    ]
  ),
  L(
    "el-periodico-escolar",
    "b1d-rep-condicional-cortesia",
    "Frase a frase: ¿podría…?, me gustaría…",
    "Repaso espaciado: el condicional para pedir con cortesía.",
    "6 min",
    [
      sec(
        "Suavizar",
        "El condicional suaviza las peticiones: ¿Puedes…? → ¿Podrías…? Quiero… → Querría / Me gustaría… ¿Te importa…? → ¿Te importaría…?",
        [
          ["¿Podría decirme la hora?", "Could you tell me the time?"],
          ["Me gustaría reservar una mesa.", "I'd like to book a table."],
        ],
        [
          fb("Suaviza.", "¿Puedes ayudarme? → ¿___ ayudarme?", "Podrías", "Poder → podrías."),
        ]
      ),
    ],
    [
      fb("Paso 1.", "Quiero un café. → ___ un café.", "Querría", "Querer → querría."),
      fb("Paso 2.", "Quiero hablar con el director. → Me ___ hablar con el director.", "gustaría", "Gustar → gustaría."),
      fb("Paso 3.", "¿Te importa cerrar la puerta? → ¿Te ___ cerrar la puerta?", "importaría", "Importar → importaría."),
      fb("Paso 1.", "¿Tiene usted un momento? → ¿___ usted un momento?", "Tendría", "Tener → tendría."),
      fb("Paso 2.", "¿Me dice su nombre? → ¿Me ___ su nombre?", "diría", "Decir → diría."),
      mc(
        "En un hotel: «___ cambiar de habitación, por favor.»",
        ["Me gustaría", "Me gusta", "Me gustará", "Me gustó"],
        0,
        "Petición cortés → condicional."
      ),
      toEs("Would you mind speaking more slowly?", "¿Le importaría hablar más despacio?", "Importar → importaría.", ["¿Te importaría hablar más despacio?"]),
    ]
  ),
  L(
    "el-jardin-comunitario",
    "b1d-rep-perfecto-experiencias",
    "Habla de ti: cosas que has hecho y que nunca has hecho",
    "Repaso espaciado: el pretérito perfecto para experiencias.",
    "6 min",
    [
      sec(
        "Tu lista",
        "Alguna vez, nunca, ya, todavía no, varias veces + pretérito perfecto: He subido a una montaña de 3000 metros. Nunca he comido caracoles. He estado en Italia tres veces.",
        [
          ["He estado en Italia tres veces.", "I've been to Italy three times."],
          ["Nunca he montado a caballo.", "I've never ridden a horse."],
        ],
        [
          fb("Tu lista.", "Nunca ___ en un globo. (subir, yo)", "he subido", "Nunca + perfecto."),
        ]
      ),
    ],
    [
      fb("Tu lista.", "___ un maratón dos veces. (correr, yo)", "He corrido", "Experiencia."),
      fb("Tu lista.", "¿Alguna vez ___ una película en el cine al aire libre? (ver, tú)", "has visto", "Ver → visto."),
      fb("Tu lista.", "Mi abuela nunca ___ en barco. (viajar)", "ha viajado", "Nunca + perfecto."),
      fb("Tu lista.", "Mi amiga ya ___ tres libros. (escribir)", "ha escrito", "Escribir → escrito."),
      fb("Tu lista.", "Nosotros nunca ___ nada tan raro. (hacer)", "hemos hecho", "Hacer → hecho."),
      toEs("Have you ever broken a bone?", "¿Alguna vez te has roto un hueso?", "Romper → roto.", ["¿Te has roto un hueso alguna vez?"]),
      toEs("I've never seen the northern lights.", "Nunca he visto la aurora boreal.", "Nunca + perfecto.", ["No he visto nunca la aurora boreal.", "Nunca he visto una aurora boreal."]),
    ]
  ),
  L(
    "primer-dia-oficina",
    "b1d-rep-pluscuamperfecto-excusas",
    "Preguntas y respuestas: ¿por qué no…? Porque ya había…",
    "Repaso espaciado: explicaciones con el pluscuamperfecto.",
    "6 min",
    [
      sec(
        "Excusas en pasado",
        "—¿Por qué no fuiste a la fiesta? —Porque ya había quedado con otros amigos. La respuesta explica algo anterior a la pregunta: pluscuamperfecto.",
        [
          ["No cené porque ya había comido mucho.", "I didn't have dinner because I had already eaten a lot."],
        ],
        [
          fb("Responde.", "—¿Por qué no viniste al cine? —Porque ya ___ la película. (ver)", "había visto", "Anterior."),
        ]
      ),
    ],
    [
      fb("Responde.", "—¿Por qué no compraste pan? —Porque mi madre ya lo ___. (comprar)", "había comprado", "Anterior."),
      fb("Responde.", "—¿Por qué no llamaste a Eva? —Porque ya me ___ ella. (llamar)", "había llamado", "Anterior."),
      fb("Responde.", "—¿Por qué llegasteis tarde? —Porque ___ el autobús. (perder, nosotros)", "habíamos perdido", "Anterior."),
      fb("Responde.", "—¿Por qué no te ayudaron? —Porque ya ___ a casa. (irse)", "se habían ido", "Reflexivo + habían."),
      fb("Responde.", "—¿Por qué no pagaste? —Porque Juan ya ___ la cuenta. (pagar)", "había pagado", "Anterior."),
      mc(
        "—¿Por qué no fuisteis al museo? —Porque ya ___ cuando llegamos.",
        ["había cerrado", "ha cerrado", "cerraba mañana", "cerrará"],
        0,
        "Anterior a llegamos."
      ),
      toEs("I didn't go because I had already made plans.", "No fui porque ya había hecho planes.", "Hacer → hecho.", ["No fui porque ya tenía planes.", "No fui porque ya había quedado."]),
    ]
  ),
  L(
    "factura-que-nunca-llega",
    "b1d-rep-se-cartel-normas",
    "Circuito acumulativo: normas con se",
    "Repaso espaciado: se prohíbe, se permite, no se puede.",
    "6 min",
    [
      sec(
        "Las normas de la piscina",
        "«No se permite comer en el agua. Se prohíben los balones. Se ruega ducharse antes de entrar. No se admiten perros.» Infinitivo → singular; sustantivo plural → plural.",
        [
          ["Se prohíben los balones.", "Balls are forbidden."],
          ["Se ruega ducharse antes de entrar.", "Please shower before entering."],
        ],
        [
          fb("Estación 1.", "No se ___ perros. (admitir)", "admiten", "Perros → plural."),
        ]
      ),
    ],
    [
      fb("Estación 1.", "No se ___ comer en el agua. (permitir)", "permite", "Infinitivo → singular."),
      fb("Estación 1.", "Se ___ los balones. (prohibir)", "prohíben", "Balones → plural."),
      fb("Estación 2.", "Se ___ ducharse antes de entrar. (rogar)", "ruega", "Infinitivo → singular; o → ue."),
      fb("Estación 2.", "No se ___ gafas de cristal. (aceptar)", "aceptan", "Gafas → plural."),
      fb("Estación 3.", "Se ___ usar gorro. (recomendar)", "recomienda", "Infinitivo → singular."),
      fb("Estación 3.", "Ayer se ___ la piscina por la tormenta. (cerrar)", "cerró", "La piscina → singular."),
      toEs("Dogs are not allowed in the park.", "No se admiten perros en el parque.", "Perros → plural.", ["No se permiten perros en el parque."]),
    ]
  ),
  L(
    "factura-que-nunca-llega",
    "b1d-rep-combinados-ronda",
    "Ronda rápida: se lo, se la, se los, se las",
    "Repaso espaciado: elegir el pronombre de cosa correcto detrás de se.",
    "5 min",
    [
      sec(
        "Mira la cosa",
        "Después de se, el segundo pronombre concuerda con la cosa: el libro → se lo, la carta → se la, los libros → se los, las cartas → se las.",
        [
          ["¿Las entradas? Se las di a Pablo.", "The tickets? I gave them to Pablo."],
        ],
        [
          fb("Rápido.", "¿El paquete? ___ entregué al portero.", "Se lo", "Paquete → lo."),
        ]
      ),
    ],
    [
      fb("Rápido.", "¿La maleta? ___ llevé al taxista.", "Se la", "Maleta → la."),
      fb("Rápido.", "¿Los documentos? ___ envié a la abogada.", "Se los", "Documentos → los."),
      fb("Rápido.", "¿Las galletas? ___ di a los niños.", "Se las", "Galletas → las."),
      fb("Rápido.", "¿El secreto? No ___ conté a nadie.", "se lo", "Secreto → lo."),
      fb("Rápido.", "¿La noticia? ___ dimos a mis padres anoche.", "Se la", "Noticia → la."),
      fb("Rápido.", "¿Los resultados? Todavía no ___ he dicho a ellos.", "se los", "Resultados → los."),
      fb("Rápido.", "¿Las fotos? Voy a ___ a tu madre. (mandar)", "mandárselas", "Pegado al infinitivo."),
      mc(
        "¿El dinero? «___ presté a mi primo.»",
        ["Se lo", "Se la", "Le lo", "Lo le"],
        0,
        "Dinero → lo."
      ),
    ]
  ),
  L(
    "error-del-becario",
    "b1d-rep-combinados-habla-de-ti",
    "Habla de ti: ¿quién te lo regaló?",
    "Repaso espaciado: habla de tus cosas y de quién te las dio.",
    "6 min",
    [
      sec(
        "Tus objetos",
        "Piensa en objetos especiales: ¿Quién te los regaló? ¿A quién se los prestas? Mi reloj me lo regaló mi abuelo. Mis libros no se los presto a nadie.",
        [
          ["Mi reloj me lo regaló mi abuelo.", "My grandfather gave me my watch."],
          ["Mis libros no se los presto a nadie.", "I don't lend my books to anyone."],
        ],
        [
          fb("Tus objetos.", "Mi bicicleta ___ compraron mis padres.", "me la", "Me + la."),
        ]
      ),
    ],
    [
      fb("Tus objetos.", "Mis discos ___ dejó mi tío.", "me los", "Me + los."),
      fb("Tus objetos.", "Mi coche no ___ presto a nadie.", "se lo", "Le + lo → se lo."),
      fb("Tus objetos.", "Mis cuadernos ___ enseño solo a mi hermana.", "se los", "Le + los."),
      fb("Tus objetos.", "Esta pulsera ___ hizo mi hija.", "me la", "Me + la."),
      fb("Tus objetos.", "Mis plantas ___ cuida mi vecino cuando viajo.", "me las", "Me + las."),
      toEs("My guitar? My parents gave it to me when I was ten.", "¿Mi guitarra? Me la regalaron mis padres cuando tenía diez años.", "Me + la.", ["¿Mi guitarra? Mis padres me la regalaron cuando tenía diez años."]),
      toEs("I never lend it to anyone (my camera).", "Nunca se la presto a nadie.", "Se + la.", ["No se la presto nunca a nadie."]),
    ]
  ),
  L(
    "cliente-mesa-siete",
    "b1d-rep-mezcla-correo-casero",
    "Práctica mezclada: un correo al casero",
    "Repaso espaciado: condicional, subjuntivo, perfecto y pronombres en un correo formal.",
    "7 min",
    [
      sec(
        "El correo",
        "«Estimado señor Gil: le escribo porque la calefacción se ha roto otra vez. Ya se lo he dicho dos veces. Le pido que envíe a un técnico esta semana. ¿Podría llamarme para confirmar la hora? Si no puede, avíseme por correo. Un saludo, Marta.»",
        [
          ["Ya se lo he dicho dos veces.", "I've already told you twice."],
          ["¿Podría llamarme para confirmar la hora?", "Could you call me to confirm the time?"],
        ],
        [
          fb("Completa.", "La calefacción se ___ otra vez. (romper, perfecto)", "ha roto", "Romper → roto."),
        ]
      ),
    ],
    [
      fb("Completa.", "Ya ___ he dicho dos veces.", "se lo", "Le + lo → se lo."),
      fb("Completa.", "Le pido que ___ a un técnico esta semana. (enviar)", "envíe", "Pedir que + subjuntivo."),
      fb("Completa.", "¿___ llamarme para confirmar la hora? (poder)", "Podría", "Condicional de cortesía."),
      fb("Completa.", "Si no puede, ___ por correo. (avisarme, usted)", "avíseme", "Usted + me, con tilde."),
      fb("Otro correo.", "Es urgente que ___ el grifo del baño. (arreglar, ustedes)", "arreglen", "Urgencia → subjuntivo."),
      mc(
        "«¿Le importaría ___ antes de las cinco?»",
        ["venir", "venga", "vendría", "viene"],
        0,
        "Importaría + infinitivo cuando el sujeto es la misma persona."
      ),
      toEs("I've already sent you the photos.", "Ya le he enviado las fotos.", "Perfecto + le.", ["Ya se las he enviado.", "Ya le he mandado las fotos."]),
    ]
  ),
  L(
    "competencia-por-el-ascenso",
    "b1d-rep-formacion-conjugacion-completa",
    "Práctica de patrones: una tabla completa",
    "Repaso espaciado: las seis personas del subjuntivo de tres verbos.",
    "6 min",
    [
      sec(
        "Tres modelos",
        "hablar: hable, hables, hable, hablemos, habléis, hablen. comer: coma, comas, coma, comamos, comáis, coman. salir: salga, salgas, salga, salgamos, salgáis, salgan.",
        [
          ["Espero que habléis con ella.", "I hope you all talk to her."],
        ],
        [
          fb("Completa la tabla.", "salir → que vosotros ___", "salgáis", "Salg- + áis."),
        ]
      ),
    ],
    [
      fb("Completa la tabla.", "cantar → que ellos ___", "canten", "-ar → -en."),
      fb("Completa la tabla.", "leer → que nosotros ___", "leamos", "-er → -amos."),
      fb("Completa la tabla.", "escribir → que tú ___", "escribas", "-ir → -as."),
      fb("Completa la tabla.", "conocer → que vosotros ___", "conozcáis", "Conozc- + áis."),
      fb("Completa la tabla.", "caber → que yo ___", "quepa", "Quepo → quepa."),
      fb("Completa la tabla.", "valer → que ello ___ la pena", "valga", "Valgo → valga."),
      mt(
        "Relaciona el sujeto con la forma de «vivir».",
        [
          ["yo", "viva"],
          ["nosotros", "vivamos"],
          ["vosotros", "viváis"],
          ["ellas", "vivan"],
        ],
        "Subjuntivo de vivir."
      ),
      toEs("I hope it's worth it.", "Espero que valga la pena.", "Valer → valga.", ["Ojalá valga la pena."]),
    ]
  ),
  L(
    "ruido-piso-arriba",
    "b1d-rep-formacion-elige-forma",
    "Elige y explica: ¿cuál es el subjuntivo?",
    "Repaso espaciado: distingue el subjuntivo del indicativo y del imperativo.",
    "5 min",
    [
      sec(
        "Formas que se parecen",
        "habla (indicativo/imperativo) — hable (subjuntivo). come (indicativo) — coma (subjuntivo). Truco: en el subjuntivo, -ar lleva e y -er/-ir llevan a.",
        [
          ["Mi hermano habla mucho. / Quiero que hable menos.", "My brother talks a lot. / I want him to talk less."],
        ],
        [
          mc(
            "¿Cuál es subjuntivo?",
            ["beba", "bebe", "bebió", "bebía"],
            0,
            "-er → a."
          ),
        ]
      ),
    ],
    [
      mc("¿Cuál es subjuntivo?", ["mire", "mira", "miró", "miraba"], 0, "-ar → e."),
      mc("¿Cuál es subjuntivo?", ["abran", "abren", "abrieron", "abrían"], 0, "-ir → a."),
      mc("¿Cuál es subjuntivo?", ["duerman", "duermen", "durmieron", "dormían"], 0, "-ir → a, con raíz ue."),
      mc("¿Cuál es subjuntivo?", ["hagas", "haces", "hiciste", "harás"], 0, "Hago → hagas."),
      mc("¿Cuál es subjuntivo?", ["estemos", "estamos", "estuvimos", "estaremos"], 0, "Estar → estemos."),
      fb("Completa.", "Mi madre quiere que ___ la cama. (hacer, yo)", "haga", "Subjuntivo de hacer."),
      fb("Completa.", "Mi madre ___ la cama todos los días. (hacer)", "hace", "Indicativo: información."),
    ]
  ),
  L(
    "ruido-piso-arriba",
    "b1d-rep-deseo-cadena-ordenes",
    "Cadena de transformaciones: de mandato a deseo",
    "Repaso espaciado: «Ven» → «Quiero que vengas».",
    "6 min",
    [
      sec(
        "La misma idea, dos formas",
        "Mandato directo: Ven a las ocho. Deseo indirecto: Quiero que vengas a las ocho. Negativo: No llegues tarde → Te pido que no llegues tarde. Los dos usan subjuntivo excepto el afirmativo de tú.",
        [
          ["Llama a tu abuela. → Quiero que llames a tu abuela.", "Call your grandmother. → I want you to call your grandmother."],
        ],
        [
          fb("Transforma.", "Haz los deberes. → Quiero que ___ los deberes.", "hagas", "Haz → hagas."),
        ]
      ),
    ],
    [
      fb("Transforma.", "Ten cuidado. → Te pido que ___ cuidado.", "tengas", "Ten → tengas."),
      fb("Transforma.", "Sal temprano. → Prefiero que ___ temprano.", "salgas", "Sal → salgas."),
      fb("Transforma.", "Sé puntual. → Te pido que ___ puntual.", "seas", "Sé → seas."),
      fb("Transforma.", "Pon la radio. → Quiero que ___ la radio.", "pongas", "Pon → pongas."),
      fb("Transforma.", "Venid a comer. → Quiero que ___ a comer.", "vengáis", "Venid → vengáis."),
      fb("Transforma.", "Siéntese, por favor. → Le ruego que ___.", "se siente", "Usted: se delante."),
      toEs("Tell me the truth. / I want you to tell me the truth.", "Dime la verdad. / Quiero que me digas la verdad.", "Mandato → deseo.", ["Dime la verdad. Quiero que me digas la verdad."]),
    ]
  ),
  L(
    "herencia-panaderia",
    "b1d-rep-duda-emocion-cuento",
    "Cuento con huecos: el primer día de Lucas",
    "Repaso espaciado: duda y emoción en un diario.",
    "6 min",
    [
      sec(
        "El diario de Lucas",
        "«Mañana empiezo en el colegio nuevo. Me da miedo que los compañeros no me hablen. No creo que el profesor sea muy estricto, pero dudo que me acuerde de todos los nombres. Me alegra que mi primo esté en la misma clase.»",
        [
          ["Me da miedo que los compañeros no me hablen.", "I'm scared the classmates won't talk to me."],
        ],
        [
          fb("Completa.", "Me da miedo que los compañeros no me ___. (hablar)", "hablen", "Emoción + subjuntivo."),
        ]
      ),
    ],
    [
      fb("Completa.", "No creo que el profesor ___ muy estricto. (ser)", "sea", "No creo que → subjuntivo."),
      fb("Completa.", "Dudo que me ___ de todos los nombres. (acordarse, yo)", "acuerde", "Duda; o → ue."),
      fb("Completa.", "Me alegra que mi primo ___ en la misma clase. (estar)", "esté", "Emoción."),
      fb("Completa.", "Creo que el colegio ___ una piscina. (tener)", "tiene", "Creencia afirmativa → indicativo."),
      fb("Completa.", "Me preocupa que la comida del comedor ___ mala. (ser)", "sea", "Emoción + subjuntivo."),
      mc(
        "«Espero ___ amigos pronto.» (yo hago amigos)",
        ["hacer", "que haga", "que hago", "haciendo"],
        0,
        "Mismo sujeto → infinitivo es lo más natural."
      ),
      toEs("I'm glad my cousin is in my class.", "Me alegra que mi primo esté en mi clase.", "Emoción + subjuntivo.", ["Me alegro de que mi primo esté en mi clase.", "Me alegra que mi prima esté en mi clase."]),
    ]
  ),
  L(
    "la-vecina-nueva",
    "b1d-rep-ojala-dialogo",
    "Preguntas y respuestas: ¿qué le deseas?",
    "Repaso espaciado: responde con un deseo adecuado a cada situación.",
    "5 min",
    [
      sec(
        "Deseos para otros",
        "Situación → deseo: Tu amigo tiene un examen → ¡Ojalá apruebes! Tu vecina está enferma → Espero que se mejore pronto. Alguien se va de viaje → ¡Que tengas buen viaje! (que + subjuntivo solo).",
        [
          ["¡Que te mejores!", "Get well soon!"],
          ["¡Que lo pases bien!", "Have a good time!"],
        ],
        [
          fb("Desea.", "Tu amiga se va de vacaciones: ¡Que lo ___ bien! (pasar)", "pases", "Que + subjuntivo."),
        ]
      ),
    ],
    [
      fb("Desea.", "Tu hermano tiene una entrevista: ¡Ojalá te ___! (elegir, ellos)", "elijan", "g → j."),
      fb("Desea.", "Tu compañero está resfriado: ¡Que te ___! (mejorar)", "mejores", "Que + subjuntivo."),
      fb("Desea.", "Unos amigos se casan: ¡Que ___ muy felices! (ser)", "seáis", "Ser → seáis."),
      fb("Desea.", "Alguien empieza a comer: ¡Que ___ provecho! (aprovechar)", "aproveche", "Fórmula fija."),
      fb("Desea.", "Tu amigo se va a dormir: ¡Que ___ bien! (descansar)", "descanses", "Que + subjuntivo."),
      mc(
        "Tu abuela cumple 90 años: «¡Ojalá ___ muchos más!»",
        ["cumplas", "cumples", "cumplir", "cumplirás"],
        0,
        "Ojalá + subjuntivo."
      ),
      toEs("Have a good trip! (to a friend)", "¡Que tengas buen viaje!", "Que + subjuntivo.", ["¡Que tengas un buen viaje!", "¡Buen viaje!"]),
    ]
  ),
  L(
    "aviso-de-desalojo",
    "b1d-rep-imperativo-usted-ustedes",
    "Circuito acumulativo: usted y ustedes en un hotel",
    "Repaso espaciado: el recepcionista da instrucciones formales.",
    "6 min",
    [
      sec(
        "En la recepción",
        "Usted: rellene, firme, suba. Ustedes: rellenen, firmen, suban. Irregulares: vaya/vayan, haga/hagan, sea/sean. Pronombres pegados: Siéntense. Díganme.",
        [
          ["Rellenen este formulario, por favor.", "Fill in this form, please."],
          ["Suban en el ascensor a la tercera planta.", "Take the lift up to the third floor."],
        ],
        [
          fb("Recepción.", "(usted, firmar) ___ aquí, por favor.", "Firme", "Usted."),
        ]
      ),
    ],
    [
      fb("Recepción.", "(ustedes, firmar) ___ aquí, por favor.", "Firmen", "Ustedes."),
      fb("Recepción.", "(usted, subir) ___ a la tercera planta.", "Suba", "Usted."),
      fb("Recepción.", "(ustedes, no dejar) No ___ objetos de valor en la habitación.", "dejen", "Negativo ustedes."),
      fb("Recepción.", "(ustedes, sentarse) ___ un momento, por favor.", "Siéntense", "Pegado, con tilde."),
      fb("Recepción.", "(usted, ir) ___ al restaurante antes de las diez.", "Vaya", "Ir → vaya."),
      fb("Recepción.", "(ustedes, decirme) ___ su número de reserva.", "Díganme", "Digan + me."),
      mc(
        "«No ___ la llave de la habitación.» (ustedes, perder)",
        ["pierdan", "pierden", "perdan", "pierdas"],
        0,
        "e → ie."
      ),
      toEs("Please wait here (ustedes).", "Esperen aquí, por favor.", "Ustedes.", ["Por favor, esperen aquí."]),
    ]
  ),
  L(
    "aviso-de-desalojo",
    "b1d-rep-imperativo-corrige",
    "Corrige el párrafo: mandatos mal formados",
    "Repaso espaciado: los errores de siempre en el imperativo.",
    "6 min",
    [
      sec(
        "La nota de la nevera",
        "«Hijo: no come todo el queso, saca la basura y no te olvides del perro. Decir a tu hermana que me llame. Y hazlo los deberes antes de las seis.» Hay tres errores.",
        [
          ["No comas todo el queso.", "Don't eat all the cheese."],
        ],
        [
          mc(
            "¿Qué error hay en «no come todo el queso»?",
            ["El negativo usa subjuntivo: no comas.", "Falta un pronombre.", "Debe ser «no comer».", "Está bien."],
            0,
            "Negativo de tú → subjuntivo."
          ),
        ]
      ),
    ],
    [
      toEs("Corrige: «No come todo el queso.»", "No comas todo el queso.", "Negativo → subjuntivo."),
      toEs("Corrige: «Decir a tu hermana que me llame.»", "Dile a tu hermana que me llame.", "Decir → di + le."),
      toEs("Corrige: «Hazlo los deberes antes de las seis.»", "Haz los deberes antes de las seis.", "Sobra el pronombre.", ["Hazlos antes de las seis."]),
      toEs("Corrige: «No te vas sin despedirte.»", "No te vayas sin despedirte.", "Negativo → subjuntivo."),
      toEs("Corrige: «Ponete el abrigo.»", "Ponte el abrigo.", "Pon + te."),
      ms(
        "¿Qué mandatos son correctos?",
        ["No lo toques.", "Tócalo.", "No tócalo.", "Lo toca."],
        [0, 1],
        "Negativo delante; afirmativo pegado."
      ),
    ]
  ),
  L(
    "grupo-whatsapp-edificio",
    "b1d-rep-si-mandato-consejo",
    "Habla de ti: si vienes a mi ciudad…",
    "Repaso espaciado: si + presente con mandatos y futuro para dar recomendaciones.",
    "6 min",
    [
      sec(
        "Recomienda tu ciudad",
        "Si vienes en verano, trae crema solar. Si te gusta el arte, visita el museo del puerto. Si tienes tiempo, iremos a la sierra.",
        [
          ["Si vienes en verano, trae crema solar.", "If you come in summer, bring sunscreen."],
        ],
        [
          fb("Tu ciudad.", "Si te ___ el marisco, prueba el pulpo. (gustar)", "gusta", "Si + presente."),
        ]
      ),
    ],
    [
      fb("Tu ciudad.", "Si vienes en invierno, ___ un paraguas. (traer)", "trae", "Mandato de tú."),
      fb("Tu ciudad.", "Si ___ tiempo, sube al castillo. (tener, tú)", "tienes", "Si + presente."),
      fb("Tu ciudad.", "Si te pierdes, ___ a alguien. (preguntar)", "pregunta", "Mandato."),
      fb("Tu ciudad.", "Si vienes en mayo, ___ la feria. (ver, futuro)", "verás", "Resultado en futuro."),
      fb("Tu ciudad.", "Si no te gusta el ruido, no ___ en el centro. (dormir)", "duermas", "Negativo → subjuntivo."),
      toEs("If you come in April, you'll see the festival.", "Si vienes en abril, verás la fiesta.", "Si + presente, futuro.", ["Si vienes en abril, vas a ver la fiesta.", "Si vienes en abril, verás el festival."]),
      toEs("If you like walking, go to the old town.", "Si te gusta caminar, ve al casco antiguo.", "Si + presente, mandato.", ["Si te gusta pasear, ve al casco antiguo.", "Si te gusta caminar, ve al centro histórico."]),
    ]
  ),
  L(
    "las-fotos-perfectas",
    "b1d-rep-perfecto-noticias-dia",
    "Dictado: las noticias de hoy",
    "Repaso espaciado: titulares en pretérito perfecto.",
    "5 min",
    [
      sec(
        "Titulares",
        "Las noticias del mismo día usan el pretérito perfecto en España: Esta mañana ha llovido en todo el norte. El Gobierno ha aprobado una ley. Dos equipos se han clasificado para la final.",
        [
          ["Esta mañana ha llovido en todo el norte.", "This morning it rained across the north."],
        ],
        [
          wo("El Gobierno ha aprobado una nueva ley.", "Perfecto.", "The government has approved a new law."),
        ]
      ),
    ],
    [
      wo("Dos equipos se han clasificado para la final.", "Reflexivo + perfecto.", "Two teams have qualified for the final."),
      wo("Hoy se han vendido todas las entradas.", "Se pasivo + perfecto.", "All the tickets were sold today."),
      wo("El precio de la gasolina ha subido otra vez.", "Perfecto.", "The price of petrol has gone up again."),
      fb("Titular.", "Esta tarde el alcalde ___ el nuevo parque. (abrir)", "ha abierto", "Abrir → abierto."),
      fb("Titular.", "Hoy ___ un nuevo récord de calor. (batirse)", "se ha batido", "Se + perfecto."),
      toEs("The museum has closed for repairs.", "El museo ha cerrado por obras.", "Perfecto.", ["El museo se ha cerrado por obras."]),
    ]
  ),
  L(
    "llamadas-de-los-domingos",
    "b1d-rep-pluscuamperfecto-historia",
    "Línea del tiempo: la historia de Elena",
    "Repaso espaciado: ordena los hechos y cuéntalos con el tiempo adecuado.",
    "6 min",
    [
      sec(
        "Los hechos",
        "2015: Elena aprendió francés. 2018: se mudó a París. 2020: conoció a Paul. Contado desde 2020: Cuando conoció a Paul, ya se había mudado a París y ya había aprendido francés.",
        [
          ["Cuando se mudó a París, ya había aprendido francés.", "When she moved to Paris, she had already learned French."],
        ],
        [
          fb("Ordena.", "Cuando conoció a Paul, ya ___ a París. (mudarse)", "se había mudado", "2018 antes de 2020."),
        ]
      ),
    ],
    [
      fb("Ordena.", "Cuando se mudó a París, ya ___ francés. (aprender)", "había aprendido", "2015 antes de 2018."),
      fb("Ordena.", "En 2018 Elena ___ a París. (mudarse)", "se mudó", "Hecho puntual → indefinido."),
      fb("Ordena.", "En 2020 ___ a Paul. (conocer)", "conoció", "Indefinido."),
      fb("Ordena.", "Antes de 2015 nunca ___ en otro país. (vivir)", "había vivido", "Anterior."),
      fb("Ordena.", "Cuando Elena llegó a París, sus padres ya ___ el piso. (ver)", "habían visto", "Ver → visto."),
      mc(
        "«Paul le dijo que nunca ___ a una española.» (conocer, él, antes)",
        ["había conocido", "ha conocido", "conocía mañana", "conocerá"],
        0,
        "Anterior a «le dijo»."
      ),
      toEs("By then, she had already found a job.", "Para entonces, ya había encontrado trabajo.", "Pluscuamperfecto.", ["Para entonces ya había encontrado un trabajo."]),
    ]
  ),
  L(
    "llamadas-de-los-domingos",
    "b1d-rep-perfecto-participios-ronda",
    "Ronda rápida: participios en contexto",
    "Repaso espaciado: regular o irregular, en tres tiempos compuestos.",
    "5 min",
    [
      sec(
        "Recuerda",
        "Regulares: -ado (hablado), -ido (comido, vivido). Irregulares frecuentes: abierto, dicho, escrito, hecho, muerto, puesto, roto, visto, vuelto, descubierto.",
        [
          ["¿Quién ha descubierto el error?", "Who has discovered the mistake?"],
        ],
        [
          fb("Rápido.", "Nunca había ___ tanto. (reír)", "reído", "Reír → reído, con tilde."),
        ]
      ),
    ],
    [
      fb("Rápido.", "¿Has ___ el correo? (leer)", "leído", "Leer → leído."),
      fb("Rápido.", "La planta se ha ___. (morir)", "muerto", "Morir → muerto."),
      fb("Rápido.", "Ya habíamos ___ la mesa. (poner)", "puesto", "Poner → puesto."),
      fb("Rápido.", "Me han ___ el móvil en el metro. (robar)", "robado", "Regular."),
      fb("Rápido.", "¿Quién ha ___ esto? (escribir)", "escrito", "Escribir → escrito."),
      fb("Rápido.", "Todavía no han ___ el problema. (resolver)", "resuelto", "Resolver → resuelto."),
      fb("Rápido.", "Se ha ___ el espejo. (romper)", "roto", "Romper → roto."),
      mc(
        "«Los científicos han ___ una nueva especie.»",
        ["descubierto", "descubrido", "descubiertado", "descubierta"],
        0,
        "Descubrir → descubierto."
      ),
    ]
  ),
  L(
    "mensaje-de-la-aplicacion",
    "b1d-rep-relativos-cuento",
    "Cuento con huecos: la tienda de la esquina",
    "Repaso espaciado: relativos en una descripción de barrio.",
    "6 min",
    [
      sec(
        "La tienda",
        "«En mi calle hay una tienda que abre hasta las once. El señor que la lleva se llama Rafa, quien vino de Ecuador hace veinte años. La estantería en la que guarda los dulces es mi favorita. Lo que más me gusta es que siempre sonríe.»",
        [
          ["La estantería en la que guarda los dulces es mi favorita.", "The shelf where he keeps the sweets is my favourite."],
        ],
        [
          fb("Completa.", "Hay una tienda ___ abre hasta las once.", "que", "Sin preposición."),
        ]
      ),
    ],
    [
      fb("Completa.", "El señor ___ la lleva se llama Rafa.", "que", "Sujeto, sin preposición."),
      fb("Completa.", "Rafa, ___ vino de Ecuador, es muy amable.", "quien", "Persona entre comas (también «que»)."),
      fb("Completa.", "La estantería en ___ guarda los dulces es mi favorita.", "la que", "Preposición + la que."),
      fb("Completa.", "___ más me gusta es que siempre sonríe.", "Lo que", "Idea → lo que."),
      fb("Completa.", "Su hija, con ___ hablo a veces, estudia Medicina.", "quien", "Persona + preposición (también «la que»)."),
      mc(
        "«Es la tienda ___ compro el pan.»",
        ["donde", "que", "lo que", "quien"],
        0,
        "Lugar → donde (o en la que)."
      ),
      toEs("The man who runs the shop is from Ecuador.", "El hombre que lleva la tienda es de Ecuador.", "Que: sujeto, sin preposición.", ["El señor que lleva la tienda es de Ecuador."]),
    ]
  ),
  L(
    "la-oficina-vacia",
    "b1d-rep-combinados-corrige",
    "Corrige el párrafo: se lo o le lo",
    "Repaso espaciado: el error más frecuente con pronombres combinados.",
    "6 min",
    [
      sec(
        "Los mensajes",
        "«Tu libro le lo di a Pedro. Las llaves las se dejé a la portera. ¿El regalo? Voy a darle lo mañana.» Tres errores de pronombres.",
        [
          ["Tu libro se lo di a Pedro.", "I gave your book to Pedro."],
        ],
        [
          mc(
            "«Las llaves las se dejé a la portera.» ¿Qué falla?",
            ["El orden: se va primero → se las dejé.", "Falta la tilde.", "Debe ser «le las».", "Nada."],
            0,
            "Indirecto (se) antes que directo (las)."
          ),
        ]
      ),
    ],
    [
      toEs("Corrige: «Tu libro le lo di a Pedro.»", "Tu libro se lo di a Pedro.", "Le + lo → se lo."),
      toEs("Corrige: «Las llaves las se dejé a la portera.»", "Las llaves se las dejé a la portera.", "Orden: se + las."),
      toEs("Corrige: «Voy a darle lo mañana.»", "Voy a dárselo mañana.", "Dar + se + lo en una palabra.", ["Se lo voy a dar mañana."]),
      toEs("Corrige: «Lo me explicaron ayer.»", "Me lo explicaron ayer.", "Orden: me + lo."),
      toEs("Corrige: «Les los mandé por correo.»", "Se los mandé por correo.", "Les + los → se los."),
      ms(
        "¿Qué frases son correctas?",
        ["Te la devuelvo mañana.", "Se la devuelvo mañana.", "La te devuelvo mañana.", "Le la devuelvo mañana."],
        [0, 1],
        "Persona primero; le → se."
      ),
    ]
  ),
  L(
    "treinta-dias-sin-notificaciones",
    "b1d-rep-combinados-cadena",
    "Cadena de transformaciones: de sustantivos a pronombres",
    "Repaso espaciado: sustituye primero la cosa, luego la persona.",
    "6 min",
    [
      sec(
        "Dos pasos",
        "Paso 1: la cosa → lo/la/los/las. Paso 2: la persona → me/te/se/nos/os. Mando la carta a mi tía → La mando a mi tía → Se la mando.",
        [
          ["Compro flores a mi madre. → Las compro a mi madre. → Se las compro.", "I buy flowers for my mother. → I buy them for her."],
        ],
        [
          fb("Paso 2.", "Explico la lección a los alumnos. → La explico a los alumnos. → ___ explico.", "Se la", "Les + la."),
        ]
      ),
    ],
    [
      fb("Paso 1.", "Presto mis apuntes a Irene. → ___ presto a Irene.", "Los", "Apuntes → los."),
      fb("Paso 2.", "Presto mis apuntes a Irene. → ___ presto.", "Se los", "Le + los."),
      fb("Paso 1.", "Cuento el chiste a mis amigos. → ___ cuento a mis amigos.", "Lo", "Chiste → lo."),
      fb("Paso 2.", "Cuento el chiste a mis amigos. → ___ cuento.", "Se lo", "Les + lo."),
      fb("Paso 2.", "Mis abuelos me dan consejos. → Mis abuelos ___ dan.", "me los", "Me + los."),
      fb("Paso 2.", "Os enseñamos la ciudad. → ___ enseñamos.", "Os la", "Os + la."),
      toEs("I'm going to send them to you tomorrow (the photos).", "Te las voy a mandar mañana.", "Te + las.", ["Voy a mandártelas mañana.", "Te las voy a enviar mañana.", "Voy a enviártelas mañana."]),
    ]
  ),
  L(
    "treinta-dias-sin-notificaciones",
    "b1d-rep-mezcla-viaje",
    "Práctica mezclada: planes de viaje",
    "Repaso espaciado: si, condicional, subjuntivo y pronombres al organizar un viaje.",
    "7 min",
    [
      sec(
        "El chat del viaje",
        "Ana: «Si reservamos hoy, nos sale más barato.» Leo: «Yo preferiría ir en tren. ¿Te parece bien?» Ana: «Vale, pero es importante que compremos los billetes ya.» Leo: «Los compro yo y os los mando esta noche.»",
        [
          ["Yo preferiría ir en tren.", "I'd prefer to go by train."],
          ["Os los mando esta noche.", "I'll send them to you tonight."],
        ],
        [
          fb("Completa.", "Si ___ hoy, nos sale más barato. (reservar, nosotros)", "reservamos", "Si + presente."),
        ]
      ),
    ],
    [
      fb("Completa.", "Yo ___ ir en tren. (preferir, condicional)", "preferiría", "Condicional."),
      fb("Completa.", "Es importante que ___ los billetes ya. (comprar, nosotros)", "compremos", "Es importante que + subjuntivo."),
      fb("Completa.", "Los compro yo y ___ mando esta noche. (a vosotros, los billetes)", "os los", "Os + los."),
      fb("Completa.", "¿Ya ___ el hotel alguien? (reservar, perfecto)", "ha reservado", "Perfecto."),
      fb("Completa.", "___ el pasaporte, que caduca pronto. (revisar, vosotros)", "Revisad", "Mandato de vosotros."),
      mc(
        "«Ojalá ___ buen tiempo en Lisboa.»",
        ["haga", "hace", "hará", "hacer"],
        0,
        "Ojalá + subjuntivo."
      ),
      toEs("If you want, I'll book the hotel.", "Si quieres, reservo yo el hotel.", "Si + presente.", ["Si quieres, yo reservo el hotel.", "Si quieres, reservaré el hotel."]),
    ]
  ),
  L(
    "el-correo-sospechoso",
    "b1d-rep-mezcla-dictado",
    "Dictado: repaso acumulativo",
    "Repaso espaciado: frases que mezclan todos los temas de B1.",
    "6 min",
    [
      sec(
        "Frases mezcladas",
        "Cada frase combina dos temas: subjuntivo + pronombres, perfecto + relativo, condicional + si, se + imperativo.",
        [
          ["El libro que me recomendaste ya lo he leído.", "I've already read the book you recommended to me."],
        ],
        [
          wo("Quiero que me lo expliques otra vez.", "Subjuntivo + pronombres.", "I want you to explain it to me again."),
        ]
      ),
    ],
    [
      wo("La película que vimos ya la había visto antes.", "Relativo + pluscuamperfecto.", "I had already seen the film we watched."),
      wo("Si tienes dudas, pregúntaselas al profesor.", "Si + mandato + pronombres.", "If you have questions, ask the teacher."),
      wo("Aquí se venden los mejores churros de la ciudad.", "Se pasivo.", "The best churros in the city are sold here."),
      wo("Yo que tú, no se lo diría todavía.", "Condicional + pronombres.", "If I were you, I wouldn't tell him yet."),
      wo("No creo que se lo digan hoy.", "Duda + pronombres.", "I don't think they'll tell him today."),
      toEs("The gift you gave me is on the table.", "El regalo que me diste está en la mesa.", "Relativo.", ["El regalo que me hiciste está en la mesa."]),
    ]
  ),
  L(
    "los-arboles-de-la-plaza",
    "b1d-rep-formacion-reflexivos",
    "Práctica de patrones: que te levantes, que nos veamos",
    "Repaso espaciado: el subjuntivo de los verbos reflexivos.",
    "6 min",
    [
      sec(
        "El pronombre va delante",
        "En subjuntivo, el pronombre reflexivo va delante del verbo: que me levante, que te acuestes, que se vista, que nos veamos, que os sentéis, que se vayan.",
        [
          ["Quiero que te acuestes pronto.", "I want you to go to bed early."],
          ["Espero que nos veamos pronto.", "I hope we see each other soon."],
        ],
        [
          fb("Mismo marco.", "Es mejor que ___ temprano. (levantarse, tú)", "te levantes", "Te + subjuntivo."),
        ]
      ),
    ],
    [
      fb("Mismo marco.", "Es mejor que ___ ya. (irse, nosotros)", "nos vayamos", "Nos + vayamos."),
      fb("Mismo marco.", "Es mejor que ___ en la primera fila. (sentarse, vosotros)", "os sentéis", "Os + sentéis."),
      fb("Mismo marco.", "Es mejor que los niños ___ antes de las nueve. (acostarse)", "se acuesten", "o → ue."),
      fb("Mismo marco.", "Es mejor que ___ con calma. (vestirse, usted)", "se vista", "e → i."),
      fb("Mismo marco.", "Es mejor que no ___ tanto. (preocuparse, tú)", "te preocupes", "Te + subjuntivo."),
      mc(
        "«Ojalá ___ pronto.» (casarse, ellos)",
        ["se casen", "casen", "se casan", "casense"],
        0,
        "Pronombre delante + subjuntivo."
      ),
      toEs("I don't want you to get bored.", "No quiero que te aburras.", "Te + subjuntivo."),
    ]
  ),
  L(
    "supermercado-sin-plastico",
    "b1d-rep-deseo-duda-emocion-habla",
    "Habla de ti: tu opinión sobre tu ciudad",
    "Repaso espaciado: creo que, no creo que, me gusta que, es una pena que.",
    "6 min",
    [
      sec(
        "Opina",
        "Creo que mi ciudad es tranquila. No creo que haya suficientes parques. Me gusta que la gente sea abierta. Es una pena que el transporte público funcione tan mal.",
        [
          ["Me gusta que la gente sea abierta.", "I like that people are open."],
          ["No creo que haya suficientes parques.", "I don't think there are enough parks."],
        ],
        [
          fb("Tu ciudad.", "Creo que mi ciudad ___ muy tranquila. (ser)", "es", "Creer → indicativo."),
        ]
      ),
    ],
    [
      fb("Tu ciudad.", "No creo que ___ suficientes carriles bici. (haber)", "haya", "No creer → subjuntivo."),
      fb("Tu ciudad.", "Me gusta que los bares ___ abiertos hasta tarde. (estar)", "estén", "Emoción."),
      fb("Tu ciudad.", "Es una pena que el metro ___ tan caro. (costar)", "cueste", "Valoración; o → ue."),
      fb("Tu ciudad.", "Estoy seguro de que la ciudad ___ mucho en diez años. (cambiar, futuro)", "cambiará", "Certeza → indicativo."),
      fb("Tu ciudad.", "Me molesta que la gente no ___ la basura. (reciclar)", "recicle", "Emoción."),
      ms(
        "¿Qué frases están bien?",
        ["Me encanta que haya tantos museos.", "Pienso que el centro es bonito.", "No pienso que el centro es bonito.", "Me encanta que hay tantos museos."],
        [0, 1],
        "Emoción → subjuntivo; pensar afirmativo → indicativo."
      ),
      toEs("It's a shame there isn't a beach.", "Es una pena que no haya playa.", "Valoración + subjuntivo.", ["Es una lástima que no haya playa."]),
    ]
  ),
  L(
    "supermercado-sin-plastico",
    "b1d-rep-deseo-pares-decir",
    "Pares mínimos: me dice que viene / me dice que venga",
    "Repaso espaciado: decir para informar o para pedir.",
    "6 min",
    [
      sec(
        "Dos significados de decir",
        "Decir = informar → indicativo: Mi madre dice que viene a las seis (informa). Decir = pedir → subjuntivo: Mi madre dice que vengas a las seis (te lo pide). Lo mismo con escribir y avisar.",
        [
          ["Ana dice que llega tarde.", "Ana says she's arriving late."],
          ["Ana dice que llegues pronto.", "Ana says you should arrive early."],
        ],
        [
          mc(
            "«El médico dice que ___ más agua.» (él te lo recomienda)",
            ["bebas", "bebes", "beber", "bebías"],
            0,
            "Decir = pedir → subjuntivo."
          ),
        ]
      ),
    ],
    [
      fb("Par A.", "Pablo dice que ___ cansado. (estar, él — informa)", "está", "Información → indicativo."),
      fb("Par B.", "Pablo dice que ___ más temprano. (acostarse, tú — pide)", "te acuestes", "Petición → subjuntivo."),
      fb("Par A.", "Mis padres me escriben que ___ bien. (estar, ellos — informan)", "están", "Información."),
      fb("Par B.", "Mis padres me escriben que los ___ pronto. (visitar, yo — piden)", "visite", "Petición."),
      fb("Par A.", "La profesora dice que el examen ___ fácil. (ser — informa)", "es", "Información."),
      fb("Par B.", "La profesora dice que ___ el capítulo 5. (estudiar, nosotros — pide)", "estudiemos", "Petición."),
      toEs("My boss says I should take a holiday.", "Mi jefe dice que me tome unas vacaciones.", "Decir = pedir → subjuntivo.", ["Mi jefe dice que tome vacaciones.", "Mi jefa dice que me tome unas vacaciones."]),
    ]
  ),
  L(
    "la-caja-de-compost",
    "b1d-rep-impersonales-cuento",
    "Cuento con huecos: consejos para la entrevista",
    "Repaso espaciado: es importante que, es mejor que, conviene que.",
    "6 min",
    [
      sec(
        "La guía",
        "«Es importante que llegues diez minutos antes. Es mejor que lleves ropa sencilla. Conviene que investigues la empresa. Es normal que estés nervioso, pero es fundamental que hables con seguridad.»",
        [
          ["Conviene que investigues la empresa.", "It's a good idea to research the company."],
        ],
        [
          fb("Completa.", "Es importante que ___ diez minutos antes. (llegar)", "llegues", "g → gu."),
        ]
      ),
    ],
    [
      fb("Completa.", "Es mejor que ___ ropa sencilla. (llevar)", "lleves", "Llevar → lleves."),
      fb("Completa.", "Conviene que ___ la empresa. (investigar)", "investigues", "g → gu."),
      fb("Completa.", "Es normal que ___ nervioso. (estar)", "estés", "Estar → estés."),
      fb("Completa.", "Es fundamental que ___ con seguridad. (hablar)", "hables", "Hablar → hables."),
      fb("Completa.", "Es preferible que no ___ el móvil. (mirar)", "mires", "Mirar → mires."),
      mc(
        "«Es verdad que la empresa ___ muy grande.»",
        ["es", "sea", "ser", "fuera"],
        0,
        "Es verdad que → indicativo."
      ),
      toEs("It's better that you ask questions at the end.", "Es mejor que hagas preguntas al final.", "Es mejor que + subjuntivo.", ["Es mejor que preguntes al final."]),
    ]
  ),
  L(
    "la-energia-del-futuro",
    "b1d-rep-imperativo-ronda-mixta",
    "Ronda rápida: tú, usted, nosotros, vosotros",
    "Repaso espaciado: el mismo verbo con cuatro destinatarios.",
    "5 min",
    [
      sec(
        "Cuatro formas",
        "Esperar: espera (tú), espere (usted), esperemos (nosotros), esperad (vosotros). Negativo: no esperes, no espere, no esperemos, no esperéis.",
        [
          ["Espere aquí, por favor.", "Wait here, please."],
        ],
        [
          fb("Rápido.", "(venir, vosotros) ___ mañana.", "Venid", "Vosotros: -d."),
        ]
      ),
    ],
    [
      fb("Rápido.", "(venir, usted) ___ mañana.", "Venga", "Usted → subjuntivo."),
      fb("Rápido.", "(venir, tú) ___ mañana.", "Ven", "Irregular."),
      fb("Rápido.", "(no venir, vosotros) No ___ mañana.", "vengáis", "Negativo."),
      fb("Rápido.", "(hacer, nosotros) ___ una pausa.", "Hagamos", "Nosotros."),
      fb("Rápido.", "(hacer, tú) ___ una pausa.", "Haz", "Irregular."),
      fb("Rápido.", "(no hacer, usted) No ___ caso.", "haga", "Negativo usted."),
      fb("Rápido.", "(escribir, vosotros) ___ vuestro nombre.", "Escribid", "Vosotros."),
      mc(
        "(ir, tú) «___ a por pan.»",
        ["Ve", "Ir", "Id", "Vaya"],
        0,
        "Ir → ve."
      ),
    ]
  ),
  L(
    "la-mochila-que-pesaba-menos",
    "b1d-rep-condicional-hipotesis-pasado",
    "Elige y explica: sería, estaría, tendría",
    "Repaso espaciado: el condicional para suponer sobre el pasado.",
    "6 min",
    [
      sec(
        "Suponer",
        "El condicional expresa probabilidad en el pasado: —¿Por qué no vino Ana? —Estaría cansada. (Probablemente estaba cansada.) —¿Qué hora era? —Serían las diez.",
        [
          ["Serían las diez cuando llegó.", "It must have been around ten when he arrived."],
          ["Estaría cansada.", "She was probably tired."],
        ],
        [
          fb("Supón.", "—¿Cuántos años tenía tu abuelo? —___ unos ochenta. (tener)", "Tendría", "Probabilidad en el pasado."),
        ]
      ),
    ],
    [
      fb("Supón.", "—¿Por qué no contestó? —___ ocupado. (estar)", "Estaría", "Probabilidad."),
      fb("Supón.", "—¿Quién llamó anoche? —___ tu hermana. (ser)", "Sería", "Probabilidad."),
      fb("Supón.", "—¿Cuánta gente había? —___ unas doscientas personas. (haber)", "Habría", "Haber → habría."),
      fb("Supón.", "—¿Por qué llegó tarde? —___ mucho tráfico. (haber)", "Habría", "Probabilidad."),
      fb("Supón.", "—¿Por qué no comió? —No ___ hambre. (tener)", "tendría", "Probabilidad."),
      mc(
        "«—¿A qué hora se fue? —___ las tres.»",
        ["Serían", "Serán", "Eran seguro", "Sean"],
        0,
        "Probabilidad en el pasado → condicional."
      ),
      toEs("He was probably at home.", "Estaría en casa.", "Condicional de probabilidad.", ["Probablemente estaba en casa."]),
    ]
  ),
  L(
    "la-mochila-que-pesaba-menos",
    "b1d-rep-perfecto-corrige",
    "Corrige el párrafo: el blog de Sara",
    "Repaso espaciado: mezclas incorrectas de perfecto e indefinido.",
    "6 min",
    [
      sec(
        "El blog",
        "«Hoy fui al mercado y he comprado fruta. Ayer he visto una película muy buena. Este mes leí tres libros. En 2019 he vivido en Roma.» Cuatro errores de tiempo verbal.",
        [
          ["Hoy he ido al mercado y he comprado fruta.", "Today I went to the market and bought fruit."],
        ],
        [
          mc(
            "¿Qué falla en «Ayer he visto una película»?",
            ["Ayer pide indefinido: vi.", "Falta un pronombre.", "Debe ser «había visto».", "Nada."],
            0,
            "Ayer → indefinido."
          ),
        ]
      ),
    ],
    [
      toEs("Corrige: «Hoy fui al mercado y he comprado fruta.»", "Hoy he ido al mercado y he comprado fruta.", "Hoy → perfecto en los dos verbos.", ["Hoy fui al mercado y compré fruta."]),
      toEs("Corrige: «Ayer he visto una película muy buena.»", "Ayer vi una película muy buena.", "Ayer → indefinido."),
      toEs("Corrige: «Este mes leí tres libros.»", "Este mes he leído tres libros.", "Este mes → perfecto."),
      toEs("Corrige: «En 2019 he vivido en Roma.»", "En 2019 viví en Roma.", "Fecha cerrada → indefinido."),
      toEs("Corrige: «Nunca estuve en Japón.»", "Nunca he estado en Japón.", "Nunca (hasta ahora) → perfecto."),
      ms(
        "¿Qué frases son correctas?",
        ["Esta semana ha llovido mucho.", "La semana pasada llovió mucho.", "La semana pasada ha llovido mucho.", "Esta semana llovió mucho el año pasado."],
        [0, 1],
        "Esta semana → perfecto; la semana pasada → indefinido."
      ),
    ]
  ),
  L(
    "el-maraton-de-los-cuarenta",
    "b1d-rep-pluscuamperfecto-dictado",
    "Dictado: nunca había…",
    "Repaso espaciado: el pluscuamperfecto para primeras experiencias en el pasado.",
    "5 min",
    [
      sec(
        "Primeras veces",
        "Nunca había + participio cuenta que algo pasó por primera vez en un momento pasado: Hasta ese día, nunca había visto el mar.",
        [
          ["Hasta ese día, nunca había visto el mar.", "Until that day, I had never seen the sea."],
        ],
        [
          wo("Nunca había probado un plato tan picante.", "Nunca había + participio.", "I had never tried such a spicy dish."),
        ]
      ),
    ],
    [
      wo("Antes de aquel viaje nunca había subido a un avión.", "Anterior al viaje.", "Before that trip I had never been on a plane."),
      wo("Mis padres nunca habían oído esa canción.", "Oír → oído.", "My parents had never heard that song."),
      wo("Nunca nos habíamos reído tanto.", "Reflexivo + habíamos.", "We had never laughed so much."),
      fb("Escribe.", "Hasta entonces nunca ___ en público. (hablar, yo)", "había hablado", "Pluscuamperfecto."),
      fb("Escribe.", "Mi hermana nunca ___ sola. (viajar)", "había viajado", "Pluscuamperfecto."),
      toEs("I had never been so happy.", "Nunca había estado tan feliz.", "Nunca había.", ["Nunca había sido tan feliz."]),
    ]
  ),
  L(
    "las-manos-en-el-barro",
    "b1d-rep-relativos-elige",
    "Elige y explica: que, donde, lo que, quien",
    "Repaso espaciado: relativos en definiciones.",
    "6 min",
    [
      sec(
        "Definir con relativos",
        "Una biblioteca es un lugar donde (en el que) se prestan libros. Un cartero es alguien que reparte cartas. Un amigo es alguien con quien puedes hablar. Lo que necesito es descansar.",
        [
          ["Un cartero es alguien que reparte cartas.", "A postman is someone who delivers letters."],
        ],
        [
          fb("Define.", "Una panadería es una tienda ___ se vende pan.", "donde", "Lugar → donde / en la que."),
        ]
      ),
    ],
    [
      fb("Define.", "Un cocinero es una persona ___ prepara comida.", "que", "Sin preposición."),
      fb("Define.", "Un vecino es alguien con ___ compartes el edificio.", "quien", "Persona + preposición (también «el que»)."),
      fb("Define.", "Un hospital es un edificio en ___ se atiende a enfermos.", "el que", "Preposición + el que."),
      fb("Define.", "Una llave es un objeto con ___ abres una puerta.", "el que", "Preposición + el que."),
      fb("Define.", "___ más me cuesta del español es el subjuntivo.", "Lo que", "Idea → lo que."),
      mc(
        "«Un jefe es la persona para ___ trabajas.»",
        ["la que", "que", "lo que", "donde"],
        0,
        "Preposición + la que."
      ),
      toEs("A pharmacy is a place where medicines are sold.", "Una farmacia es un lugar donde se venden medicamentos.", "Donde + se pasivo.", ["Una farmacia es un lugar en el que se venden medicamentos.", "Una farmacia es un sitio donde se venden medicinas."]),
    ]
  ),
  L(
    "la-cena-de-los-martes",
    "b1d-rep-se-cuento",
    "Cuento con huecos: cómo se hace el aceite",
    "Repaso espaciado: el se pasivo en la descripción de un proceso.",
    "6 min",
    [
      sec(
        "El proceso",
        "«En noviembre se recogen las aceitunas. Después se lavan y se llevan al molino. Allí se muelen y se obtiene una pasta. Luego se separa el aceite del agua. Finalmente, el aceite se guarda en depósitos.»",
        [
          ["Se recogen las aceitunas en noviembre.", "The olives are harvested in November."],
        ],
        [
          fb("Completa.", "En noviembre se ___ las aceitunas. (recoger)", "recogen", "Aceitunas → plural."),
        ]
      ),
    ],
    [
      fb("Completa.", "Después se ___ y se llevan al molino. (lavar)", "lavan", "Plural."),
      fb("Completa.", "Allí se ___ las aceitunas. (moler)", "muelen", "o → ue, plural."),
      fb("Completa.", "Se ___ una pasta. (obtener)", "obtiene", "Una pasta → singular."),
      fb("Completa.", "Luego se ___ el aceite del agua. (separar)", "separa", "El aceite → singular."),
      fb("Completa.", "Antes se ___ las aceitunas a mano. (recoger, imperfecto)", "recogían", "Imperfecto plural."),
      mc(
        "«Hoy en día se ___ máquinas.»",
        ["usan", "usa", "usamos", "uso"],
        0,
        "Máquinas → plural."
      ),
      toEs("The oil is kept in large tanks.", "El aceite se guarda en depósitos grandes.", "Se pasivo singular.", ["Se guarda el aceite en depósitos grandes.", "El aceite se guarda en grandes depósitos."]),
    ]
  ),
  L(
    "el-autobus-equivocado",
    "b1d-rep-combinados-dictado",
    "Dictado: pronombres combinados",
    "Repaso espaciado: reconstruye frases con dos pronombres.",
    "5 min",
    [
      sec(
        "Escucha el orden",
        "Recuerda: persona antes que cosa, le/les → se, pegados al infinitivo, al gerundio y al mandato afirmativo.",
        [
          ["¿Me lo puedes repetir?", "Can you repeat it for me?"],
        ],
        [
          wo("No te la puedo prestar hoy.", "Te + la delante.", "I can't lend it to you today."),
        ]
      ),
    ],
    [
      wo("Se lo he contado todo a mi madre.", "Se + lo + perfecto.", "I've told my mother everything."),
      wo("Estoy escribiéndotela ahora mismo.", "Gerundio + te + la.", "I'm writing it to you right now."),
      wo("Dáselas a tu hermano, por favor.", "Mandato + se + las.", "Give them to your brother, please."),
      wo("Nos los trajeron ayer por la tarde.", "Nos + los.", "They brought them to us yesterday afternoon."),
      toEs("Can you explain it to me?", "¿Me lo puedes explicar?", "Me + lo.", ["¿Puedes explicármelo?", "¿Me lo explicas?"]),
      toEs("They're sending it to us tomorrow (the package).", "Nos lo mandan mañana.", "Nos + lo.", ["Nos lo envían mañana.", "Nos lo van a mandar mañana."]),
    ]
  ),
  L(
    "el-autobus-equivocado",
    "b1d-rep-combinados-mezcla-imperativo",
    "Circuito acumulativo: pronombres combinados y mandatos",
    "Repaso espaciado: cuatro destinatarios, dos pronombres.",
    "6 min",
    [
      sec(
        "Mandatos con dos pronombres",
        "Tú: dímelo / no me lo digas. Usted: dígamelo / no me lo diga. Nosotros: digámoselo / no se lo digamos. Vosotros: decídmelo / no me lo digáis.",
        [
          ["Dígamelo claramente.", "Tell me clearly."],
        ],
        [
          fb("Estación 1.", "(tú, explicar a mí la idea) ___.", "Explícamela", "Explica + me + la."),
        ]
      ),
    ],
    [
      fb("Estación 1.", "(usted, explicar a mí la idea) ___.", "Explíquemela", "Explique + me + la."),
      fb("Estación 2.", "(vosotros, explicar a mí la idea) ___.", "Explicádmela", "Explicad + me + la."),
      fb("Estación 2.", "(tú, no explicar a él la idea) No ___.", "se la expliques", "Negativo."),
      fb("Estación 3.", "(nosotros, dar a ellos el regalo) ___.", "Démoselo", "Demos + se + lo, se pierde una -s."),
      fb("Estación 3.", "(usted, no dar a ellos el regalo) No ___.", "se lo dé", "Negativo usted."),
      mc(
        "(vosotros, no decir a mí eso) «No ___.»",
        ["me lo digáis", "decídmelo", "me lo decid", "lo me digáis"],
        0,
        "Negativo: delante + subjuntivo."
      ),
      toEs("Bring it to me, please (tú, the book).", "Tráemelo, por favor.", "Trae + me + lo."),
    ]
  ),
  L(
    "aprender-a-flotar",
    "b1d-rep-vosotros-corrige",
    "Corrige el párrafo: el grupo de clase",
    "Repaso espaciado: errores típicos con vosotros.",
    "6 min",
    [
      sec(
        "El mensaje del delegado",
        "«Chicos, traed los apuntes mañana. No llegad tarde. Sentados en la primera fila. Y no os olvidáis del trabajo.» Hay tres errores.",
        [
          ["No lleguéis tarde.", "Don't be late."],
        ],
        [
          mc(
            "¿Qué falla en «No llegad tarde»?",
            ["El negativo usa subjuntivo: no lleguéis.", "Falta os.", "Debe ser «llegados».", "Nada."],
            0,
            "Negativo de vosotros → subjuntivo."
          ),
        ]
      ),
    ],
    [
      toEs("Corrige: «No llegad tarde.»", "No lleguéis tarde.", "Negativo → subjuntivo."),
      toEs("Corrige: «Sentados en la primera fila.»", "Sentaos en la primera fila.", "Sentad + os → sentaos."),
      toEs("Corrige: «No os olvidáis del trabajo.»", "No os olvidéis del trabajo.", "Negativo → subjuntivo."),
      toEs("Corrige: «Iros ya, que es tarde.»", "Idos ya, que es tarde.", "Norma: idos."),
      toEs("Corrige: «Levantados, que son las siete.»", "Levantaos, que son las siete.", "Levantad + os."),
      ms(
        "¿Qué formas son correctas?",
        ["callaos", "no os calléis", "callados (mandato)", "no callad"],
        [0, 1],
        "Afirmativo sin -d; negativo con subjuntivo."
      ),
    ]
  ),
  L(
    "la-banda-de-garaje",
    "b1d-rep-mezcla-consultorio",
    "Práctica mezclada: el consultorio sentimental",
    "Repaso espaciado: una carta y su respuesta con todo lo aprendido.",
    "7 min",
    [
      sec(
        "La carta",
        "«Mi novio nunca me ha presentado a sus padres. Creo que se avergüenza de mí. ¿Qué haría usted?» Respuesta: «No creo que se avergüence. Es posible que tenga miedo. Yo en su lugar, hablaría con él. Pregúnteselo directamente.»",
        [
          ["Yo en su lugar, hablaría con él.", "If I were you, I'd talk to him."],
          ["Pregúnteselo directamente.", "Ask him directly."],
        ],
        [
          fb("Completa.", "Mi novio nunca me ___ a sus padres. (presentar, perfecto)", "ha presentado", "Nunca + perfecto."),
        ]
      ),
    ],
    [
      fb("Completa.", "Creo que se ___ de mí. (avergonzar, presente)", "avergüenza", "Creer → indicativo."),
      fb("Completa.", "No creo que se ___. (avergonzar)", "avergüence", "No creer → subjuntivo."),
      fb("Completa.", "Es posible que ___ miedo. (tener, él)", "tenga", "Posibilidad."),
      fb("Completa.", "Yo en su lugar, ___ con él. (hablar)", "hablaría", "Condicional."),
      fb("Completa.", "___ directamente. (preguntar + se + lo, usted)", "Pregúnteselo", "Usted + se + lo."),
      mc(
        "«¿Qué ___ usted en mi situación?»",
        ["haría", "hará", "hacía", "haga"],
        0,
        "Condicional para pedir consejo."
      ),
      toEs("Don't worry; talk to him calmly.", "No te preocupes; habla con él con calma.", "Negativo + afirmativo.", ["No se preocupe; hable con él con calma.", "No te preocupes, habla con él tranquilamente."]),
    ]
  ),
  L(
    "los-libros-para-rosa",
    "b1d-rep-mezcla-ronda-final",
    "Ronda rápida: B1 en diez segundos",
    "Repaso espaciado: una pregunta por tema, sin pausa.",
    "5 min",
    [
      sec(
        "Todo junto",
        "Subjuntivo, imperativo, condicional, si, perfectos, relativos, se, pronombres combinados, vosotros: una pregunta rápida de cada uno.",
        [
          ["Ojalá me lo digan pronto.", "I hope they tell me soon."],
        ],
        [
          fb("Rápido.", "Ojalá ___ pronto. (terminar, nosotros)", "terminemos", "Ojalá + subjuntivo."),
        ]
      ),
    ],
    [
      fb("Rápido.", "(tú, no tocar) No ___ eso.", "toques", "Negativo; c → qu."),
      fb("Rápido.", "Yo que tú, ___ antes. (salir)", "saldría", "Condicional."),
      fb("Rápido.", "Si ___ frío, cierra la ventana. (tener, tú)", "tienes", "Si + presente."),
      fb("Rápido.", "¿___ alguna vez en Perú? (estar, tú)", "Has estado", "Experiencia."),
      fb("Rápido.", "La ciudad en ___ vivo es pequeña.", "la que", "Preposición + la que."),
      fb("Rápido.", "Se ___ pisos. (alquilar)", "alquilan", "Plural."),
      fb("Rápido.", "¿El libro? ___ di a Luis.", "Se lo", "Le + lo."),
      fb("Rápido.", "(vosotros, sentarse) ___.", "Sentaos", "Sin -d."),
    ]
  ),
  L(
    "los-libros-para-rosa",
    "b1d-rep-formacion-circuito-final",
    "Circuito acumulativo: formación del subjuntivo",
    "Repaso espaciado: regulares, irregulares, raíz y ortografía en un solo circuito.",
    "6 min",
    [
      sec(
        "Cuatro estaciones",
        "1) Regulares: hable, coma, viva. 2) Del yo: tenga, haga, diga. 3) Raíz: pierda, pueda, pida, durmamos. 4) Ortografía: busque, llegue, empiece. Y los seis irregulares: dé, esté, haya, vaya, sepa, sea.",
        [
          ["Es mejor que empecemos ya.", "It's better that we start now."],
        ],
        [
          fb("Estación 1.", "Espero que ___ bien la sopa. (salir, a ti)", "te salga", "Salgo → salga."),
        ]
      ),
    ],
    [
      fb("Estación 1.", "Quiero que ___ más verdura. (comer, vosotros)", "comáis", "Regular."),
      fb("Estación 2.", "No creo que ___ razón. (tener, ellos)", "tengan", "Del yo: tengo."),
      fb("Estación 3.", "Ojalá ___ venir. (poder, tú)", "puedas", "o → ue."),
      fb("Estación 3.", "Es mejor que ___ perdón. (pedir, nosotros)", "pidamos", "-ir: e → i en nosotros."),
      fb("Estación 4.", "Te pido que no ___ con la comida. (jugar)", "juegues", "g → gu, u → ue."),
      fb("Estación 4.", "Quiero que ___ a tiempo. (llegar, usted)", "llegue", "g → gu."),
      fb("Irregulares.", "Dudo que ___ la respuesta. (saber, ellos)", "sepan", "Saber → sepan."),
      mc(
        "«Es posible que ___ mucha gente.» (haber)",
        ["haya", "hay", "haiga", "habría"],
        0,
        "Haber → haya."
      ),
    ]
  ),
  L(
    "la-cumbre-del-teide",
    "b1d-rep-deseo-duda-emocion-final",
    "Práctica mezclada: la reunión de vecinos",
    "Repaso espaciado: deseo, duda y emoción en una discusión.",
    "7 min",
    [
      sec(
        "La reunión",
        "Presidenta: «Quiero que decidamos hoy lo del ascensor.» Sr. Ruiz: «Dudo que tengamos dinero suficiente.» Sra. Paz: «Me molesta que siempre dejemos las cosas para después.» Presidenta: «Es necesario que todos paguen una parte.»",
        [
          ["Dudo que tengamos dinero suficiente.", "I doubt we have enough money."],
        ],
        [
          fb("Completa.", "Quiero que ___ hoy lo del ascensor. (decidir, nosotros)", "decidamos", "Deseo."),
        ]
      ),
    ],
    [
      fb("Completa.", "Dudo que ___ dinero suficiente. (tener, nosotros)", "tengamos", "Dudar que → subjuntivo."),
      fb("Completa.", "Me molesta que siempre ___ las cosas para después. (dejar, nosotros)", "dejemos", "Emoción."),
      fb("Completa.", "Es necesario que todos ___ una parte. (pagar)", "paguen", "Necesidad; g → gu."),
      fb("Completa.", "Estoy seguro de que el banco nos ___ un préstamo. (dar, futuro)", "dará", "Certeza → indicativo."),
      fb("Completa.", "Ojalá no ___ que subir las cuotas. (tener, nosotros)", "tengamos", "Ojalá."),
      ms(
        "¿Qué frases usan bien el modo?",
        ["No creo que sea tan caro.", "Me parece que es caro.", "Me parece que sea caro.", "Dudo que es caro."],
        [0, 1],
        "No creer → subjuntivo; parecer afirmativo → indicativo."
      ),
      toEs("I want everyone to vote today.", "Quiero que todos voten hoy.", "Deseo + subjuntivo.", ["Quiero que hoy vote todo el mundo.", "Quiero que todo el mundo vote hoy."]),
    ]
  ),
  L(
    "el-silencio-del-retiro",
    "b1d-rep-emocion-pares-alegro-alegra",
    "Pares mínimos: me alegro de que / me alegra que",
    "Repaso espaciado: dos construcciones de emoción con el mismo subjuntivo.",
    "5 min",
    [
      sec(
        "Dos construcciones",
        "Me alegro de que vengas (alegrarse de) = Me alegra que vengas (alegrar, como gustar). Igual: me preocupo de que / me preocupa que; me sorprende que. No olvides el «de» con alegrarse.",
        [
          ["Me alegro de que estés mejor.", "I'm glad you're better."],
          ["Me alegra que estés mejor.", "I'm glad you're better."],
        ],
        [
          fb("Par.", "Me alegro ___ que vengas a la boda.", "de", "Alegrarse de + que."),
        ]
      ),
    ],
    [
      fb("Par A.", "Nos alegramos de que ___ bien. (estar, vosotros)", "estéis", "Alegrarse de que + subjuntivo."),
      fb("Par B.", "Nos alegra que ___ bien. (estar, vosotros)", "estéis", "Alegrar que + subjuntivo."),
      fb("Par A.", "Mis padres se alegran de que ___ un trabajo nuevo. (tener, yo)", "tenga", "Alegrarse de que."),
      fb("Par B.", "A mis padres les alegra que ___ un trabajo nuevo. (tener, yo)", "tenga", "Alegrar que."),
      mc(
        "¿Qué frase es incorrecta?",
        ["Me alegro que vengas.", "Me alegro de que vengas.", "Me alegra que vengas.", "Me alegra mucho que vengas."],
        0,
        "Con alegrarse, la norma pide «de»."
      ),
      toEs("We're glad you came to the party.", "Nos alegra que vengas a la fiesta.", "Emoción + subjuntivo.", ["Nos alegramos de que vengas a la fiesta."]),
    ]
  ),
  L(
    "el-lienzo-en-blanco",
    "b1d-rep-ojala-impersonales-final",
    "Circuito acumulativo: ojalá y expresiones impersonales",
    "Repaso espaciado: deseos y valoraciones con subjuntivo.",
    "6 min",
    [
      sec(
        "Recuerda",
        "Ojalá (que) + subjuntivo. Es + adjetivo + que + subjuntivo si valora (es bueno, es raro, es necesario); + indicativo si constata (es cierto, es evidente).",
        [
          ["Es raro que no haya nadie.", "It's strange that there's nobody here."],
        ],
        [
          fb("Estación 1.", "Ojalá ___ entradas para el concierto. (conseguir, nosotros)", "consigamos", "e → i; gu → g."),
        ]
      ),
    ],
    [
      fb("Estación 1.", "Ojalá mi hermano ___ el carné de conducir. (sacar)", "saque", "c → qu."),
      fb("Estación 2.", "Es raro que Ana no ___ el teléfono. (coger)", "coja", "g → j."),
      fb("Estación 2.", "Es evidente que Ana no ___ el teléfono. (coger)", "coge", "Constatación."),
      fb("Estación 3.", "Es necesario que ___ los formularios hoy. (entregar, ustedes)", "entreguen", "g → gu."),
      fb("Estación 3.", "Es cierto que el plazo ___ hoy. (terminar)", "termina", "Constatación."),
      mc(
        "«Es una suerte que ___ tan cerca.» (vivir, vosotros)",
        ["viváis", "vivís", "vivir", "viviréis"],
        0,
        "Valoración."
      ),
      toEs("It's strange that the bus hasn't come.", "Es raro que no venga el autobús.", "Valoración + subjuntivo.", ["Es raro que el autobús no venga.", "Es raro que el autobús no llegue."]),
    ]
  ),
  L(
    "el-lienzo-en-blanco",
    "b1d-rep-imperativo-habla-de-ti",
    "Habla de ti: tus reglas de casa",
    "Repaso espaciado: da instrucciones a un invitado que se queda en tu casa.",
    "6 min",
    [
      sec(
        "Tu invitado",
        "Un amigo se queda en tu casa una semana. Dale instrucciones: Usa la toalla azul. No cierres la puerta con llave. Si sales, apaga las luces. Ponte cómodo.",
        [
          ["Ponte cómodo.", "Make yourself comfortable."],
          ["No cierres la puerta con llave.", "Don't lock the door."],
        ],
        [
          fb("Tus reglas.", "___ la toalla azul. (usar)", "Usa", "Afirmativo de tú."),
        ]
      ),
    ],
    [
      fb("Tus reglas.", "No ___ la puerta con llave. (cerrar)", "cierres", "Negativo; e → ie."),
      fb("Tus reglas.", "Si sales, ___ las luces. (apagar)", "apaga", "Afirmativo."),
      fb("Tus reglas.", "___ cómodo. (ponerse)", "Ponte", "Pon + te."),
      fb("Tus reglas.", "No le ___ de comer al gato. (dar)", "des", "Negativo; dar → des."),
      fb("Tus reglas.", "Si tienes hambre, ___ algo de la nevera. (coger)", "coge", "Afirmativo."),
      fb("Tus reglas.", "___ la llave debajo del felpudo. (dejar + la)", "Déjala", "Deja + la, con tilde."),
      toEs("Make yourself at home and don't worry about anything.", "Estás en tu casa; no te preocupes por nada.", "Negativo + te.", ["Siéntete como en casa y no te preocupes por nada."]),
    ]
  ),
  L(
    "la-playa-despues-de-la-tormenta",
    "b1d-rep-condicional-si-habla",
    "Preguntas y respuestas: ¿qué harías tú?",
    "Repaso espaciado: el condicional para hablar de lo que harías.",
    "6 min",
    [
      sec(
        "Imagina",
        "¿Qué harías con más tiempo libre? Leería más y aprendería a tocar el piano. ¿Dónde vivirías? Viviría cerca del mar. Responde con el condicional.",
        [
          ["Viviría cerca del mar.", "I'd live near the sea."],
        ],
        [
          fb("Responde.", "—¿Qué harías con más tiempo libre? —___ más. (leer)", "Leería", "Condicional."),
        ]
      ),
    ],
    [
      fb("Responde.", "—¿Dónde vivirías? —___ en una isla. (vivir)", "Viviría", "Condicional."),
      fb("Responde.", "—¿Qué estudiarías? —___ Arquitectura. (estudiar)", "Estudiaría", "Condicional."),
      fb("Responde.", "—¿Adónde irías de vacaciones? —___ a Chile. (ir)", "Iría", "Condicional."),
      fb("Responde.", "—¿Qué le dirías a tu yo de quince años? —Le ___: «¡Relájate!» (decir)", "diría", "Decir → diría."),
      fb("Responde.", "—¿Cuántos hijos querrías tener? —___ dos. (querer)", "Querría", "Querer → querría."),
      fb("Responde.", "—¿Qué harías en tu último día? —___ una gran fiesta. (hacer)", "Haría", "Hacer → haría."),
      toEs("I would never live in a big city.", "Nunca viviría en una ciudad grande.", "Condicional.", ["No viviría nunca en una ciudad grande.", "Nunca viviría en una gran ciudad."]),
    ]
  ),
  L(
    "quince-dias-en-kioto",
    "b1d-rep-si-cadena",
    "Cadena de transformaciones: si + presente en tres versiones",
    "Repaso espaciado: la misma condición con presente, futuro y mandato.",
    "6 min",
    [
      sec(
        "Tres resultados",
        "Si llueve, nos quedamos en casa (costumbre o plan). Si llueve, nos quedaremos en casa (predicción). Si llueve, quedaos en casa (instrucción).",
        [
          ["Si llueve, quedaos en casa.", "If it rains, stay at home."],
        ],
        [
          fb("Versión futuro.", "Si llueve, ___ en casa. (quedarse, nosotros, futuro)", "nos quedaremos", "Futuro."),
        ]
      ),
    ],
    [
      fb("Versión presente.", "Si hace sol, ___ a la playa. (ir, nosotros)", "vamos", "Presente."),
      fb("Versión futuro.", "Si hace sol, ___ a la playa. (ir, nosotros, futuro)", "iremos", "Futuro."),
      fb("Versión mandato.", "Si hace sol, ___ a la playa. (ir, vosotros)", "id", "Mandato vosotros."),
      fb("Versión presente.", "Si me llamas, te lo ___. (explicar, yo)", "explico", "Presente."),
      fb("Versión futuro.", "Si me llamas, te lo ___. (explicar, yo, futuro)", "explicaré", "Futuro."),
      fb("Versión mandato.", "Si tienes preguntas, ___. (llamarme, tú)", "llámame", "Mandato + me."),
      mc(
        "«Si ___ el partido, lo celebraremos.»",
        ["ganamos", "ganaremos", "ganemos", "ganábamos"],
        0,
        "Si + presente."
      ),
    ]
  ),
  L(
    "el-buceo-en-la-isla",
    "b1d-rep-perfecto-pluscuam-cuento",
    "Cuento con huecos: el día de la mudanza",
    "Repaso espaciado: pretérito perfecto, indefinido y pluscuamperfecto en un relato.",
    "7 min",
    [
      sec(
        "El relato",
        "«Hoy ha sido un día muy largo. Nos hemos mudado por fin. Cuando llegó el camión, ya habíamos empaquetado todo. Pero el ascensor se rompió a las diez y tuvimos que subir las cajas a pie. Nunca había estado tan cansada.»",
        [
          ["Hoy ha sido un día muy largo.", "Today has been a very long day."],
          ["Cuando llegó el camión, ya habíamos empaquetado todo.", "When the lorry arrived, we had already packed everything."],
        ],
        [
          fb("Completa.", "Hoy ___ un día muy largo. (ser)", "ha sido", "Hoy → perfecto."),
        ]
      ),
    ],
    [
      fb("Completa.", "Nos ___ por fin. (mudarse, nosotros, perfecto)", "hemos mudado", "Perfecto."),
      fb("Completa.", "Cuando llegó el camión, ya ___ todo. (empaquetar, nosotros)", "habíamos empaquetado", "Anterior."),
      fb("Completa.", "El ascensor se ___ a las diez. (romper, indefinido)", "rompió", "Hora concreta → indefinido."),
      fb("Completa.", "___ que subir las cajas a pie. (tener, nosotros)", "Tuvimos", "Indefinido."),
      fb("Completa.", "Nunca ___ tan cansada. (estar, yo)", "había estado", "Pluscuamperfecto."),
      mc(
        "«Esta noche ___ en el sofá porque la cama no está montada.»",
        ["dormiremos", "dormimos ayer", "habíamos dormido", "dormíamos"],
        0,
        "Esta noche (futuro)."
      ),
      toEs("We have moved at last.", "Por fin nos hemos mudado.", "Perfecto.", ["Nos hemos mudado por fin.", "Al fin nos hemos mudado."]),
    ]
  ),
  L(
    "el-buceo-en-la-isla",
    "b1d-rep-perfecto-ronda-final",
    "Ronda rápida: he, había, hube… ¿cuál?",
    "Repaso espaciado: elige entre perfecto, indefinido y pluscuamperfecto.",
    "5 min",
    [
      sec(
        "Marcadores",
        "Hoy, este año, ya, nunca → he…; ayer, en 2010, hace un mes → indefinido; ya / nunca antes de otro pasado → había…",
        [
          ["Ya había cenado cuando llamaste.", "I had already had dinner when you called."],
        ],
        [
          fb("Rápido.", "Esta mañana ___ al dentista. (ir, yo)", "he ido", "Esta mañana → perfecto."),
        ]
      ),
    ],
    [
      fb("Rápido.", "Hace un mes ___ al dentista. (ir, yo)", "fui", "Hace + tiempo → indefinido."),
      fb("Rápido.", "Ya ___ cuando llamaste. (cenar, yo)", "había cenado", "Anterior."),
      fb("Rápido.", "Este año ___ mucho. (crecer, los niños)", "han crecido", "Este año → perfecto."),
      fb("Rápido.", "En 1998 ___ mi hermano. (nacer)", "nació", "Fecha → indefinido."),
      fb("Rápido.", "Antes de ese día nunca ___ miedo. (tener, yo)", "había tenido", "Anterior."),
      fb("Rápido.", "¿Todavía no ___ la cena? (preparar, vosotros)", "habéis preparado", "Todavía no → perfecto."),
      fb("Rápido.", "El lunes pasado ___ el curso. (empezar)", "empezó", "El lunes pasado → indefinido."),
      mc(
        "«Cuando salí, ___ de llover.»",
        ["ya había dejado", "ya he dejado", "ya dejaré", "ya deje"],
        0,
        "Anterior a salí."
      ),
    ]
  ),
  L(
    "la-bicicleta-de-mi-padre",
    "b1d-rep-relativos-mezcla-final",
    "Práctica mezclada: relativos y pronombres",
    "Repaso espaciado: que, lo que, el que junto a pronombres de objeto.",
    "6 min",
    [
      sec(
        "Frases con dos piezas",
        "El libro que me prestaste me lo leí en dos días. Lo que me dijiste no se lo he contado a nadie. La persona con la que hablé me lo explicó todo.",
        [
          ["Lo que me dijiste no se lo he contado a nadie.", "I haven't told anyone what you told me."],
        ],
        [
          fb("Completa.", "El libro ___ me prestaste me lo leí en dos días.", "que", "Sin preposición."),
        ]
      ),
    ],
    [
      fb("Completa.", "___ me dijiste no se lo he contado a nadie.", "Lo que", "Idea → lo que."),
      fb("Completa.", "La persona con ___ hablé me lo explicó todo.", "la que", "Preposición + la que."),
      fb("Completa.", "Lo que me dijiste no ___ he contado a nadie.", "se lo", "Le + lo."),
      fb("Completa.", "Las fotos ___ hiciste, ¿me las mandas?", "que", "Sin preposición."),
      fb("Completa.", "Las fotos que hiciste, ¿___ mandas?", "me las", "Me + las."),
      mc(
        "«El amigo ___ te hablé viene mañana.»",
        ["del que", "que", "lo que", "el que"],
        0,
        "Hablar de → del que."
      ),
      toEs("The song you sent me, I've listened to it ten times.", "La canción que me mandaste la he escuchado diez veces.", "Relativo + pronombre.", ["La canción que me enviaste la he escuchado diez veces."]),
    ]
  ),
  L(
    "el-primer-paso-de-salsa",
    "b1d-rep-se-mezcla-final",
    "Elige y explica: ¿qué se es este?",
    "Repaso espaciado: se pasivo, impersonal, reflexivo o sustituto de le.",
    "6 min",
    [
      sec(
        "Cuatro se",
        "Pasivo: Se venden casas. Impersonal: Se vive bien aquí. Reflexivo: Ana se ducha. Sustituto de le/les: Se lo di (a él).",
        [
          ["Ana se lo dio a su hermano.", "Ana gave it to her brother."],
        ],
        [
          mc(
            "«Aquí se habla español.» ¿Qué se es?",
            ["pasivo", "reflexivo", "sustituto de le", "recíproco"],
            0,
            "El español es lo que se habla."
          ),
        ]
      ),
    ],
    [
      mc("«En verano se duerme mal.» ¿Qué se es?", ["impersonal", "pasivo", "reflexivo", "sustituto de le"], 0, "No hay sustantivo sujeto."),
      mc("«Mi hermano se levanta a las seis.» ¿Qué se es?", ["reflexivo", "pasivo", "impersonal", "sustituto de le"], 0, "Él mismo se levanta."),
      mc("«Se la mandé ayer.» ¿Qué se es?", ["sustituto de le", "pasivo", "impersonal", "reflexivo"], 0, "Se + la: le → se."),
      mc("«Se alquilan bicicletas.» ¿Qué se es?", ["pasivo", "impersonal", "reflexivo", "sustituto de le"], 0, "Bicicletas manda el plural."),
      fb("Completa.", "En esta oficina se ___ a las ocho. (entrar)", "entra", "Impersonal."),
      fb("Completa.", "Se ___ traductores. (necesitar)", "necesitan", "Pasivo plural."),
      toEs("I gave it to them yesterday (the key).", "Se la di ayer.", "Sustituto de les.", ["Ayer se la di.", "Se la di ayer a ellos."]),
    ]
  ),
  L(
    "la-casa-que-construimos",
    "b1d-rep-combinados-final",
    "Ronda rápida: pronombres combinados en todos los contextos",
    "Repaso espaciado: conjugado, perfecto, infinitivo, gerundio y mandatos.",
    "5 min",
    [
      sec(
        "Todas las posiciones",
        "Se lo doy. Se lo he dado. Voy a dárselo. Estoy dándoselo. Dáselo. No se lo des.",
        [
          ["Estoy dándoselo ahora.", "I'm giving it to him now."],
        ],
        [
          fb("Rápido.", "(conjugado) ___ presto.", "Se lo", "Delante."),
        ]
      ),
    ],
    [
      fb("Rápido.", "(perfecto) ___ he prestado.", "Se lo", "Delante de haber."),
      fb("Rápido.", "(infinitivo) Voy a ___. (prestar + se + lo)", "prestárselo", "Pegado con tilde."),
      fb("Rápido.", "(gerundio) Estoy ___. (prestar + se + lo)", "prestándoselo", "Pegado con tilde."),
      fb("Rápido.", "(mandato tú) ___. (prestar + se + lo)", "Préstaselo", "Pegado con tilde."),
      fb("Rápido.", "(mandato negativo tú) No ___.", "se lo prestes", "Delante."),
      fb("Rápido.", "(mandato usted) ___. (prestar + se + lo)", "Présteselo", "Pegado con tilde."),
      mc(
        "¿Qué forma NO existe?",
        ["He se lo prestado.", "Se lo he prestado.", "Voy a prestárselo.", "Se lo voy a prestar."],
        0,
        "Nunca entre haber y el participio."
      ),
    ]
  ),
  L(
    "la-casa-que-construimos",
    "b1d-rep-mezcla-correo-amigo",
    "Práctica mezclada: un correo a un amigo",
    "Repaso espaciado: noticias, deseos, consejos y planes en un correo.",
    "7 min",
    [
      sec(
        "El correo",
        "«¡Hola, Marcos! Este mes he empezado un trabajo nuevo. La empresa en la que trabajo está en el centro. Mi jefa quiere que aprenda alemán. Yo que tú, vendría a verme en junio. Si vienes, te enseño la ciudad. ¡Ojalá puedas!»",
        [
          ["La empresa en la que trabajo está en el centro.", "The company I work for is in the centre."],
        ],
        [
          fb("Completa.", "Este mes ___ un trabajo nuevo. (empezar, yo)", "he empezado", "Este mes → perfecto."),
        ]
      ),
    ],
    [
      fb("Completa.", "La empresa en ___ trabajo está en el centro.", "la que", "Preposición + la que."),
      fb("Completa.", "Mi jefa quiere que ___ alemán. (aprender, yo)", "aprenda", "Deseo."),
      fb("Completa.", "Yo que tú, ___ a verme en junio. (venir)", "vendría", "Condicional."),
      fb("Completa.", "Si vienes, te ___ la ciudad. (enseñar, yo)", "enseño", "Si + presente."),
      fb("Completa.", "¡Ojalá ___! (poder, tú)", "puedas", "Ojalá."),
      fb("Completa.", "Las fotos del piso nuevo ___ mando mañana. (a ti)", "te las", "Te + las."),
      toEs("I hope you're well.", "Espero que estés bien.", "Espero que + subjuntivo.", ["Ojalá estés bien.", "Espero que te encuentres bien."]),
    ]
  ),
  L(
    "el-aula-bajo-el-puente",
    "b1d-rep-mezcla-corrige-final",
    "Corrige el párrafo: la redacción final",
    "Repaso espaciado: un error de cada tema de B1.",
    "7 min",
    [
      sec(
        "La redacción",
        "«Quiero que mis amigos vienen a mi fiesta. Ayer he comprado la comida. La chica que la conocí en clase también viene. Si hará buen tiempo, cenaremos fuera. El pastel le lo voy a pedir a mi tía.» Cinco errores.",
        [
          ["Quiero que mis amigos vengan a mi fiesta.", "I want my friends to come to my party."],
        ],
        [
          mc(
            "¿Qué falla en «Si hará buen tiempo»?",
            ["Después de si va presente: si hace.", "Falta el subjuntivo.", "Debe ser «hiciera».", "Nada."],
            0,
            "Si + presente."
          ),
        ]
      ),
    ],
    [
      toEs("Corrige: «Quiero que mis amigos vienen a mi fiesta.»", "Quiero que mis amigos vengan a mi fiesta.", "Deseo → subjuntivo."),
      toEs("Corrige: «Ayer he comprado la comida.»", "Ayer compré la comida.", "Ayer → indefinido."),
      toEs("Corrige: «La chica que la conocí en clase también viene.»", "La chica que conocí en clase también viene.", "Sobra el pronombre."),
      toEs("Corrige: «Si hará buen tiempo, cenaremos fuera.»", "Si hace buen tiempo, cenaremos fuera.", "Si + presente."),
      toEs("Corrige: «El pastel le lo voy a pedir a mi tía.»", "El pastel se lo voy a pedir a mi tía.", "Le + lo → se lo."),
      ms(
        "¿Qué frases son correctas?",
        ["Se venden entradas en la puerta.", "Sentaos, por favor.", "No creo que viene.", "No creo que es verdad."],
        [0, 1],
        "No creo que → venga / sea."
      ),
    ]
  ),
  L(
    "el-fotografo-accidental",
    "b1d-rep-mezcla-habla-de-ti-final",
    "Habla de ti: tu año en español",
    "Repaso espaciado: cuenta tu progreso con todos los tiempos de B1.",
    "7 min",
    [
      sec(
        "Tu balance",
        "Este año he aprendido mucho. Antes de empezar, nunca había hablado con nativos. Lo que más me ha costado es el subjuntivo. Espero que el próximo año pueda viajar. Si practico cada día, hablaré mejor. Yo que tú, empezaría ya.",
        [
          ["Lo que más me ha costado es el subjuntivo.", "What has been hardest for me is the subjunctive."],
        ],
        [
          fb("Tu balance.", "Este año ___ mucho. (aprender, yo)", "he aprendido", "Este año → perfecto."),
        ]
      ),
    ],
    [
      fb("Tu balance.", "Antes de empezar, nunca ___ con nativos. (hablar, yo)", "había hablado", "Pluscuamperfecto."),
      fb("Tu balance.", "___ más me ha costado es el subjuntivo.", "Lo que", "Idea → lo que."),
      fb("Tu balance.", "Espero que el próximo año ___ viajar. (poder, yo)", "pueda", "Espero que + subjuntivo."),
      fb("Tu balance.", "Si ___ cada día, hablaré mejor. (practicar, yo)", "practico", "Si + presente."),
      fb("Tu balance.", "Quiero que mis amigos también ___ español. (estudiar)", "estudien", "Deseo con dos sujetos → subjuntivo."),
      toEs("What I like most is speaking with people.", "Lo que más me gusta es hablar con la gente.", "Lo que.", ["Lo que más me gusta es hablar con gente."]),
      toEs("I have never studied so much.", "Nunca he estudiado tanto.", "Nunca + perfecto.", ["No he estudiado nunca tanto."]),
    ]
  ),
  L(
    "el-rio-que-nos-enseno",
    "b1d-rep-mezcla-circuito-final",
    "Circuito acumulativo: examen final de B1",
    "Repaso espaciado: el último circuito con todos los temas del nivel.",
    "8 min",
    [
      sec(
        "Las estaciones",
        "1) Subjuntivo con deseo, duda y emoción. 2) Imperativo con pronombres. 3) Condicional y si. 4) Perfectos. 5) Relativos y se. 6) Pronombres combinados.",
        [
          ["Si puedes, tráemelo mañana.", "If you can, bring it to me tomorrow."],
        ],
        [
          fb("Estación 1.", "Me sorprende que no ___ nadie. (venir)", "venga", "Emoción."),
        ]
      ),
    ],
    [
      fb("Estación 1.", "No creo que ___ tan grave. (ser)", "sea", "No creer que → subjuntivo."),
      fb("Estación 2.", "(tú, traer a mí el libro) ___ mañana.", "Tráemelo", "Trae + me + lo."),
      fb("Estación 3.", "Yo en tu lugar, no ___ nada. (decir)", "diría", "Condicional."),
      fb("Estación 3.", "Si ___ tiempo, pásate por casa. (tener, tú)", "tienes", "Si + presente."),
      fb("Estación 4.", "Cuando llegué, ya ___ la reunión. (empezar)", "había empezado", "Pluscuamperfecto."),
      fb("Estación 5.", "La casa en ___ crecí ya no existe.", "la que", "Preposición + la que."),
      fb("Estación 5.", "En este bar se ___ las mejores tapas. (servir)", "sirven", "Pasivo plural; e → i."),
      fb("Estación 6.", "¿Las llaves? Ya ___ he devuelto a la dueña.", "se las", "Le + las."),
    ]
  ),
];
