// Synced from cheneygross-afk/lengo:src/lib/lessons/b1-drills.ts by scripts/sync-content.mjs -- edit it there, not here.
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
        "Recuerda la regla: -ar → e",
        [
          "Recuerda la regla: el subjuntivo sale de la forma yo del presente sin la -o, con la vocal «contraria». En los verbos en -ar la a pasa a e: trabajo → trabaje, trabajes, trabaje, trabajemos, trabajéis, trabajen.",
          "La e es la marca que distingue el subjuntivo del indicativo: trabajas (hecho) / que trabajes (deseo). Las formas yo y él coinciden (que yo trabaje, que él trabaje), así que el sujeto suele aclarar quién es.",
        ],
        [
          ["Quiero que trabajes menos.", "I want you to work less. (trabajas → trabajes)"],
          ["Mis padres quieren que estudiemos más.", "My parents want us to study more."],
          ["Espero que no llueva y que los niños jueguen fuera.", "I hope it doesn't rain and the kids play outside. (stem changes stay: juegan → jueguen)"],
        ],
        [
          fb("Completa.", "Quiero que tú ___ conmigo. (bailar)", "bailes", "Bailar: bailo → bail- → bailes. La a de -ar pasa a e en el subjuntivo."),
          mc(
            "«Espero que me ___ pronto.» (contestar, ustedes)",
            ["contesten", "contestan", "contestemos", "contesta"],
            0,
            "Ustedes → -en en el subjuntivo de -ar: contesten. «Contestan» es indicativo, «contestemos» es nosotros y «contesta» es indicativo singular."
          ),
        ]
      ),
    ],
    [
      fb("Mismo marco: cantar.", "Mi madre quiere que yo ___ una canción en la boda.", "cante", "Yo: cant- + -e. La forma yo y la forma él son iguales."),
      fb("Mismo marco: cantar.", "Mi madre quiere que tú ___ en la boda.", "cantes", "Tú: cant- + -es."),
      fb("Mismo marco: cantar.", "Mi madre quiere que mi hermano ___ en la boda.", "cante", "Él: cant- + -e, igual que yo."),
      fb("Mismo marco: cantar.", "Mi madre quiere que nosotros ___ en la boda.", "cantemos", "Nosotros: cant- + -emos. «Cantamos» sería indicativo."),
      fb("Mismo marco: cantar.", "Mi madre quiere que vosotros ___ en la boda.", "cantéis", "Vosotros: cant- + -éis, con tilde."),
      fb("Mismo marco: cantar.", "Mi madre quiere que mis primos ___ en la boda.", "canten", "Ellos: cant- + -en."),
      mt(
        "Relaciona el infinitivo con su forma de subjuntivo (él).",
        [
          ["llamar", "llame"],
          ["esperar", "espere"],
          ["ayudar", "ayude"],
          ["mirar", "mire"],
        ],
        "En todos, la forma yo sin -o más -e: llamo → llame, espero → espere, ayudo → ayude, miro → mire."
      ),
      toEs("I want you to call me tomorrow. (tú)", "Quiero que me llames mañana.", "«I want you to…» = quiero que + subjuntivo, porque hay dos sujetos: me llames.", ["Quiero que tú me llames mañana."]),
      toEs("I want you (tú) to help me with the boxes.", "Quiero que me ayudes con las cajas.", "Ayudar → ayudo → ayudes: la -a de los verbos -ar cambia a -e."),
      toEs("Mi jefe sabe que terminamos el proyecto hoy.", "Mi jefe quiere que terminemos el proyecto hoy.", "«Sabe que» presenta un hecho (indicativo); «quiere que», un deseo (subjuntivo): terminemos.", ["Mi jefe quiere que acabemos el proyecto hoy."], "Cambia «sabe que» por «quiere que»."),
      { type: "fill-blank", prompt: "¿Cómo se dicen en español las palabras en negrita?", sentence: "Espero que ustedes ___ el viaje.", answer: "disfruten", en: "I hope you all [enjoy] the trip.", explanation: "Disfrutar → disfruten: ustedes toma -en en el subjuntivo de -ar." },
      toEs("El médico quiere que mi padre deja de fumar.", "El médico quiere que mi padre deje de fumar.", "Después de «quiere que» con otro sujeto va subjuntivo: dejar → deje. «Deja» es indicativo.", ["La médica quiere que mi padre deje de fumar."], "Corrige la frase."),
      toEs("We hope you (usted) like the food.", "Esperamos que le guste la comida.", "Gustar → guste: el sujeto es «la comida», por eso tercera persona singular."),
      wo("Prefiero que me mandes un mensaje", "Mandar → mandes después de «prefiero que».", "I'd rather you (tú) send me a message"),
      toEs("The teacher wants the students to listen and to speak only Spanish in class.", "El profesor quiere que los estudiantes escuchen y hablen solo español en clase.", "Dos verbos -ar en subjuntivo: escuchen y hablen.", ["La profesora quiere que los estudiantes escuchen y hablen solo español en clase.", "El profesor quiere que los alumnos escuchen y hablen solo español en clase.", "La profesora quiere que los alumnos escuchen y hablen solo español en clase.", "El profesor quiere que los estudiantes escuchen y hablen solo en español en clase."]),
      toEs("Espero que me llamas esta noche.", "Espero que me llames esta noche.", "«Espero que» expresa un deseo: subjuntivo, llamar → llames. «Llamas» es indicativo.", [], "Corrige la frase."),
      toEs("Quieren que yo trabaje el sábado.", "Quieren que trabajemos el sábado.", "Solo cambia la persona del subjuntivo: trabaj- + -emos.", ["Quieren que nosotros trabajemos el sábado."], "Cambia el sujeto de la segunda parte a nosotros."),
      fb("Completa (cocinar).", "Prefiero que tú ___ esta noche.", "cocines", "Cocinar: cocino → cocin- → cocines. «Prefiero que» con otro sujeto pide subjuntivo."),
      mc(
        "¿Qué forma es presente de subjuntivo?",
        ["nademos", "nadamos", "nadábamos", "nadaremos"],
        0,
        "La e en vez de la a marca el subjuntivo de -ar: nademos. «Nadamos» es presente de indicativo, «nadábamos» imperfecto y «nadaremos» futuro."
      ),
      { type: "speak", prompt: "Tu compañero de piso pone la música muy alta. Dile en voz alta que quieres que la baje.", text: "Quiero que bajes la música, por favor.", explanation: "Quiero que + otro sujeto (tú) → subjuntivo: bajar → bajes." },
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
        "Recuerda la regla: -er/-ir → a, desde la forma yo",
        [
          "Recuerda la regla: los verbos en -er y en -ir toman la vocal a en el subjuntivo: comer → coma, comas, coma, comamos, comáis, coman; vivir → viva, vivas, viva, vivamos, viváis, vivan.",
          "Como se parte de la forma yo del presente, su irregularidad pasa a todas las personas: tengo → tenga, hago → haga, salgo → salga, conozco → conozca, oigo → oiga. Por eso merece la pena saber bien la forma yo.",
        ],
        [
          ["Espero que comas bien.", "I hope you eat well. (como → coma)"],
          ["Quiero que salgamos temprano.", "I want us to leave early. (salgo → salgamos: the g stays)"],
          ["Es posible que no conozcan la ciudad.", "They may not know the city. (conozco → conozcan)"],
        ],
        [
          fb("Completa.", "Quiero que ___ la ventana. (abrir, tú)", "abras", "Abrir: abro → abr- → abras. Los verbos en -ir toman -a."),
          fb("Completa.", "Es mejor que ___ la respuesta. (deducir, tú)", "deduzcas", "La forma yo es deduzco, así que el subjuntivo conserva -zc-: deduzcas, como conozco → conozcas."),
        ]
      ),
    ],
    [
      fb("Mismo marco: leer.", "El profesor quiere que yo ___ este libro.", "lea", "Leer: leo → le- → lea (-er → -a)."),
      fb("Mismo marco: leer.", "El profesor quiere que nosotros ___ este libro.", "leamos", "Nosotros: le- + -amos. «Leemos» sería indicativo."),
      fb("Mismo marco: escribir.", "El profesor quiere que ustedes ___ un resumen.", "escriban", "Escribir: escribo → escrib- + -an (-ir → -a)."),
      fb("Yo irregular.", "Quiero que ___ cuidado. (tener, tú)", "tengas", "Tengo → teng- → tengas: la g de la forma yo se queda."),
      fb("Yo irregular.", "Quiero que ___ la cena hoy. (hacer, tú)", "hagas", "Hago → hag- → hagas."),
      fb("Yo irregular.", "Quiero que ___ a mi familia. (conocer, tú)", "conozcas", "Conozco → conozc- → conozcas."),
      ms(
        "¿Qué formas son de subjuntivo?",
        ["beba", "salga", "come", "vivan"],
        [0, 1, 3],
        "Beba, salga y vivan tienen la vocal «contraria» del subjuntivo (-er/-ir → a). «Come» es presente de indicativo; el subjuntivo sería «coma»."
      ),
      toEs("I want you to come to my house. (tú)", "Quiero que vengas a mi casa.", "Quiero que + subjuntivo; venir → vengas (desde vengo).", ["Quiero que tú vengas a mi casa."]),
      toEs("Lees este artículo.", "Quiero que leas este artículo.", "Con «quiero que» y otro sujeto, el verbo pasa al subjuntivo: lees → leas.", ["Quiero que tú leas este artículo."], "Transforma con «Quiero que…»."),
      toEs("I hope they live near us.", "Espero que vivan cerca de nosotros.", "Vivir → vivan: los verbos -ir toman -a.", ["Espero que vivan cerca de nosotras."]),
      toEs("Mi madre quiere que comemos verduras.", "Mi madre quiere que comamos verduras.", "«Quiere que» pide subjuntivo: comer → comamos. «Comemos» es indicativo.", ["Mi mamá quiere que comamos verduras."], "Corrige la frase."),
      { type: "fill-blank", prompt: "¿Cómo se dicen en español las palabras en negrita?", sentence: "Es importante que ustedes ___ las instrucciones.", answer: "lean", en: "It's important that you all [read] the instructions.", explanation: "Leer → lean (-er toma -a)." },
      { type: "fill-blank", prompt: "¿Cómo se dicen en español las palabras en negrita?", sentence: "No quiero que mi hijo ___ solo por la noche.", answer: "salga", en: "I don't want my son [to go out] alone at night.", explanation: "Salgo → salga: el subjuntivo conserva la g de la forma yo." },
      toEs("Es importante que usted dice la verdad.", "Es importante que usted diga la verdad.", "«Es importante que» pide subjuntivo, y decir parte de digo: diga.", [], "Corrige la frase."),
      { type: "fill-blank", prompt: "¿Cómo se dicen en español las palabras en negrita?", sentence: "Queremos que el profesor ___ los ejercicios en la pizarra.", answer: "escriba", en: "We want the teacher [to write] the exercises on the board.", explanation: "Escribir → escriba (-ir toma -a)." },
      toEs("I want you (tú) to put the books on the shelf.", "Quiero que pongas los libros en la estantería.", "Quiero que + otro sujeto → subjuntivo: pongo → pong- → pongas.", ["Quiero que pongas los libros en el estante.", "Quiero que pongas los libros en la repisa."]),
      toEs("Hopefully they bring good news.", "Ojalá traigan buenas noticias.", "Ojalá siempre pide subjuntivo: traigo → traig- → traigan.", ["Ojalá que traigan buenas noticias."]),
      toEs("No quiero que hagas nada peligroso.", "No quiero que hagan nada peligroso.", "Solo cambia la persona del subjuntivo: hag- + -an para ustedes.", ["No quiero que ustedes hagan nada peligroso."], "Cambia el sujeto de la segunda parte a ustedes."),
      mc("«Espero que mis padres ___ la casa.» (vender)", ["venden", "vendan", "venda", "vendien"], 1, "Vender es -er: toma -a en el subjuntivo, y el sujeto es plural: vendan. «Venden» es indicativo, «venda» es singular y «vendien» no existe."),
      toEs("My parents want me to meet their new neighbors.", "Mis padres quieren que conozca a sus nuevos vecinos.", "Conozco → conozca; recuerda la «a» personal.", ["Mis padres quieren que conozca a sus vecinos nuevos."]),
      wo("Es mejor que no bebas café por la noche", "Beber → bebas después de «es mejor que».", "It's better that you (tú) don't drink coffee at night"),
      fb("Completa (aprender).", "Es importante que los niños ___ a compartir.", "aprendan", "Aprender: aprendo → aprend- → aprendan."),
      wo("Mi jefe quiere que vengamos el sábado", "Vengo → veng- → vengamos.", "My boss wants us to come on Saturday"),
      toEs("I want you (tú) to hear this song and tell me what you think.", "Quiero que oigas esta canción y me digas qué piensas.", "Oigo → oigas; digo → digas.", ["Quiero que oigas esta canción y me digas lo que piensas.", "Quiero que escuches esta canción y me digas qué piensas.", "Quiero que escuches esta canción y me digas lo que piensas."]),
      mc(
        "Aplica la receta: caber → yo quepo. ¿Cuál es el subjuntivo para «tú»?",
        ["quepas", "cabas", "quebas", "cabes"],
        0,
        "Desde quepo: quep- + -as = quepas. «Cabas» ignora la forma yo, «quebas» cambia la consonante y «cabes» es indicativo."
      ),
      toEs("Es posible que mis primos traen el pastel.", "Es posible que mis primos traigan el pastel.", "«Es posible que» pide subjuntivo, y traer parte de traigo: traigan.", [], "Corrige la frase."),
      { type: "speak", prompt: "Responde en voz alta: tu hermano sale esta noche. Dile dos cosas que quieres que haga (volver temprano, tener cuidado).", text: "Quiero que vuelvas temprano y que tengas cuidado.", explanation: "Quiero que + otro sujeto → subjuntivo: vuelvo → vuelvas, tengo → tengas." },
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
        "Recuerda la regla: una vocal cambia el modo",
        [
          "Recuerda la regla: el indicativo presenta hechos (Luis trabaja mucho); el subjuntivo, deseos y preferencias sobre otra persona (quiero que Luis trabaje menos). Muchas veces la única diferencia es una vocal: en los verbos -ar la e marca el subjuntivo (habla → hable), y en los verbos -er/-ir, la a (come → coma, vive → viva).",
          "Truco para leer rápido: si un verbo en -ar lleva e, o un verbo en -er/-ir lleva a, probablemente es subjuntivo. Ojo: la forma yo del subjuntivo coincide con la de él (que yo hable / que él hable).",
        ],
        [
          ["Mi hermano habla mucho. / Quiero que mi hermano hable menos.", "My brother talks a lot. / I want my brother to talk less."],
          ["Vivís lejos. / Prefiero que viváis cerca.", "You live far away. / I'd rather you lived close by."],
        ],
        [
          mc(
            "¿Cuál es subjuntivo?",
            ["trabaje", "trabaja", "trabajo", "trabajas"],
            0,
            "Los verbos -ar forman el subjuntivo con e: trabaje. «Trabaja», «trabajo» y «trabajas» son formas del presente de indicativo."
          ),
          mc(
            "¿Cuál es subjuntivo?",
            ["rompan", "rompen", "rompes", "rompe"],
            0,
            "Romper es un verbo en -er, así que su subjuntivo lleva a: rompan. Las otras formas conservan la e del indicativo."
          ),
        ]
      ),
    ],
    [
      mc("¿Cuál es subjuntivo?", ["decida", "decide", "decido", "decides"], 0, "Los verbos -ir forman el subjuntivo con a: decida. «Decide», «decido» y «decides» son presente de indicativo."),
      mc("¿Cuál es indicativo?", ["aprende", "aprenda", "aprendan", "aprendamos"], 0, "«Aprende» mantiene la e propia de los verbos -er: es indicativo. «Aprenda», «aprendan» y «aprendamos» cambian a la vocal a: son subjuntivo."),
      fb("Cambia al subjuntivo.", "Luis trabaja mucho. → Quiero que Luis ___ menos.", "trabaje", "Querer que + otro sujeto → subjuntivo; los verbos -ar cambian a e: trabaje."),
      fb("Cambia al subjuntivo.", "Mis hijos comen dulces. → No quiero que ___ tantos dulces.", "coman", "Querer que → subjuntivo; los verbos -er cambian a a: coman."),
      fb("Cambia al subjuntivo.", "Tú vives lejos. → Prefiero que ___ cerca.", "vivas", "Preferir que → subjuntivo; los verbos -ir cambian a a: vivas."),
      fb("Cambia al subjuntivo.", "Nosotros entramos tarde. → No quiero que ___ tarde.", "entremos", "Querer que → subjuntivo; los verbos -ar cambian a e: entremos."),
      ms("¿Qué formas son de subjuntivo?", ["mande", "manda", "suban", "suben"], [0, 2], "El subjuntivo cambia la vocal: -ar → e (mande), -ir → a (suban). «Manda» y «suben» conservan la vocal del indicativo."),
      toEs("I prefer that you speak slowly.", "Prefiero que hables despacio.", "«Prefiero que» + otro sujeto → subjuntivo: hables.", ["Prefiero que hable despacio.", "Prefiero que hablen despacio."]),
      mc("¿Cuál es subjuntivo?", ["escribe", "escriba", "escribo", "escribes"], 1, "En los verbos -ir el subjuntivo lleva -a: escriba. Las demás conservan la e o la o del indicativo."),
      mc("¿Cuál es indicativo?", ["hablemos", "hablen", "hablan", "hable"], 2, "En los verbos -ar el indicativo conserva la -a: hablan. Hablen, hable y hablemos son subjuntivo."),
      { type: "fill-blank", prompt: "¿Cómo se dicen en español las palabras en negrita?", sentence: "Mi hijo come poco. → Quiero que ___ más.", answer: "coma", en: "My son eats little. → I want him [to eat] more.", explanation: "Come (indicativo) → coma (subjuntivo): cambia la vocal." },
      { type: "fill-blank", prompt: "¿Cómo se dicen en español las palabras en negrita?", sentence: "Tú trabajas los sábados. → No quiero que ___ los sábados.", answer: "trabajes", en: "You work on Saturdays. → I don't want you [to work] on Saturdays.", explanation: "Trabajas → trabajes: en -ar, la e marca el subjuntivo." },
      { type: "fill-blank", prompt: "¿Cómo se dicen en español las palabras en negrita?", sentence: "Ellos viven en el centro. → Prefiero que ___ en las afueras.", answer: "vivan", en: "They live downtown. → I'd rather they [live] in the suburbs.", explanation: "Viven → vivan: en -ir, la a marca el subjuntivo." },
      { type: "fill-blank", prompt: "¿Cómo se dicen en español las palabras en negrita?", sentence: "Nosotros bebemos mucho café. → El médico quiere que ___ menos café.", answer: "bebamos", en: "We drink a lot of coffee. → The doctor wants us [to drink] less coffee.", altAnswers: ["tomemos"], explanation: "Bebemos → bebamos: en -er, la a marca el subjuntivo." },
      toEs("My sister studies at night, but I want her to study in the morning.", "Mi hermana estudia por la noche, pero quiero que estudie por la mañana.", "Estudia es un hecho; estudie, un deseo. Una sola vocal cambia el modo.", ["Mi hermana estudia de noche, pero quiero que estudie de mañana.", "Mi hermana estudia en la noche, pero quiero que estudie en la mañana."]),
      toEs("Me llamas mucho; quiero que me llamas menos.", "Me llamas mucho; quiero que me llames menos.", "La primera parte es un hecho (llamas); la segunda, un deseo sobre otra persona: subjuntivo, llames.", ["Me llamas mucho y quiero que me llames menos."], "Corrige la frase."),
      toEs("Los niños abren los regalos hoy.", "Prefiero que los niños abran los regalos mañana.", "Con «prefiero que» el verbo pasa al subjuntivo: abren → abran.", ["Prefiero que los niños abran mañana los regalos."], "Transforma con «Prefiero que…» y cambia «hoy» por «mañana»."),
      toEs("I hope Carlos answers the phone.", "Espero que Carlos conteste el teléfono.", "Contesta sería indicativo; después de «espero que», conteste.", ["Espero que Carlos responda el teléfono.", "Espero que Carlos atienda el teléfono.", "Espero que Carlos coja el teléfono.", "Espero que Carlos conteste al teléfono."]),
      toEs("We eat at three, but my grandmother wants us to eat at two.", "Comemos a las tres, pero mi abuela quiere que comamos a las dos.", "Comemos (hecho) frente a comamos (deseo de otra persona)."),
      toEs("Quiero que usted decide hoy.", "Quiero que usted decida hoy.", "Después de «quiero que» con otro sujeto va subjuntivo: decidir → decida. «Decide» es indicativo.", ["Quiero que decida hoy."], "Corrige la frase."),
      toEs("Your brother runs every day. Do you (tú) want him to run with you?", "Tu hermano corre todos los días. ¿Quieres que corra contigo?", "Corre (hecho) frente a corra (deseo): en -er, la a marca el subjuntivo.", ["Tu hermano corre cada día. ¿Quieres que corra contigo?"]),
      wo("Prefiero que me escribas un correo", "Escribas (subjuntivo) después de «prefiero que»; escribes sería indicativo.", "I'd rather you (tú) write me an email"),
      wo("Mis vecinos cantan muy alto y quiero que canten más bajo", "Cantan (hecho) y canten (deseo): solo cambia una vocal.", "My neighbors sing very loudly and I want them to sing more quietly"),
      { type: "fill-blank", prompt: "¿Cómo se dicen en español las palabras en negrita?", sentence: "Ana nunca baila, pero hoy quiero que ___ conmigo.", answer: "baile", en: "Ana never dances, but today I want her [to dance] with me.", explanation: "Baila (hecho) → baile (deseo)." },
      mc("«Quiero que el niño ___ la verdura.»", ["come", "coma", "comes", "como"], 1, "Después de «quiero que» con otro sujeto: subjuntivo, coma. Las otras opciones son formas del indicativo."),
      toEs("Juan gasta mucho dinero y su esposa quiere que ahorra más.", "Juan gasta mucho dinero y su esposa quiere que ahorre más.", "Gasta es un hecho (indicativo); lo que quiere su esposa va en subjuntivo: ahorrar → ahorre.", ["Juan gasta mucho dinero y su mujer quiere que ahorre más."], "Corrige la frase."),
      { type: "speak", prompt: "Tu amiga siempre llega tarde. Dile en voz alta lo que hace y lo que quieres que haga.", text: "Siempre llegas tarde; quiero que llegues a tiempo.", explanation: "Llegas (hecho, indicativo) frente a llegues (deseo, subjuntivo; g → gu delante de e para conservar el sonido)." },
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
        "Recuerda la regla: la bota y la excepción -ir",
        [
          "Recuerda la regla: si dibujas la tabla de un verbo con cambio de raíz, las formas que cambian (yo, tú, él, ellos) forman una «bota»; nosotros y vosotros quedan fuera porque el acento cae en la terminación: pensar → piense, pensemos.",
          "Los verbos en -ir rompen la bota: en nosotros y vosotros también cambian, pero con la vocal corta (e → i, o → u): sentir → sienta, sintamos; dormir → duerma, durmamos; pedir → pida, pidamos.",
        ],
        [
          ["Quiero que pienses en mí.", "I want you to think of me. (pensar: e → ie in tú)"],
          ["Es mejor que durmamos un poco.", "It's better that we sleep a little. (dormir is -ir: o → u in nosotros)"],
          ["Ojalá encontremos sitio.", "Hopefully we find a spot. (encontrar is -ar: no change in nosotros)"],
        ],
        [
          fb("Completa.", "Espero que ___ venir mañana. (poder, ellos)", "puedan", "Poder cambia o → ue dentro de la bota (ellos): puedan."),
          mc(
            "«Es mejor que les ___ del peligro.» (advertir, nosotros)",
            ["advirtamos", "advertamos", "adviertamos", "advertimos"],
            0,
            "Advertir es -ir con cambio e → ie, así que en nosotros cambia e → i: advirtamos. «Advertamos» olvida el cambio, «adviertamos» usa el diptongo de la bota y «advertimos» es indicativo."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "No quiero que ___ nada. (perder, vosotros)", "perdáis", "Perder es -er: vosotros está fuera de la bota, sin cambio."),
      fb("Completa.", "Espero que ___ bien esta noche. (dormir, tú)", "duermas", "Dormir: o → ue en tú (dentro de la bota)."),
      fb("Completa.", "Es importante que ___ ocho horas. (dormir, nosotros)", "durmamos", "Dormir es -ir: en nosotros cambia o → u."),
      fb("Completa.", "Quiero que ___ perdón. (pedir, él)", "pida", "Pedir cambia e → i en todas las personas."),
      fb("Completa.", "Ojalá que ___ mejor pronto. (sentirse, tú)", "te sientas", "Sentirse: e → ie en tú, con el pronombre te delante."),
      fb("Completa.", "Prefiero que ___ la película vosotros. (elegir)", "elijáis", "Elegir es -ir: e → i también en vosotros, y g → j delante de a."),
      ms("¿Qué formas son correctas?", ["volvamos", "vuelvamos", "pidamos", "pedamos"], [0, 2], "Volver (-er) no cambia la raíz en nosotros: volvamos, no «vuelvamos». Pedir (-ir) sí cambia e → i en todas las personas: pidamos, no «pedamos»."),
      toEs("I hope you (tú) can come.", "Espero que puedas venir.", "Espero que + subjuntivo; poder → puedas (o → ue).", ["Ojalá puedas venir."]),
      toEs("I want you (tú) to remember my birthday.", "Quiero que recuerdes mi cumpleaños.", "Recordar: o → ue en tú: recuerdes.", ["Quiero que te acuerdes de mi cumpleaños."]),
      toEs("Esperamos que puedas quedarte.", "Esperamos que puedan quedarse.", "Ustedes sigue dentro de la bota: puedan. El pronombre cambia con la persona (te → se).", ["Esperamos que se puedan quedar."], "Cambia el sujeto de la segunda parte a ustedes."),
      toEs("Es mejor que empiecemos la reunión ahora.", "Es mejor que empecemos la reunión ahora.", "Empezar es -ar: en nosotros no cambia la raíz (empecemos), aunque sí z → c.", ["Es mejor que comencemos la reunión ahora."], "Corrige la frase."),
      { type: "fill-blank", prompt: "¿Cómo se dicen en español las palabras en negrita?", sentence: "Ojalá que no se ___ las plantas.", answer: "mueran", en: "Hopefully the plants [don't die].", explanation: "Morir: o → ue en ellas: mueran." },
      { type: "fill-blank", prompt: "¿Cómo se dicen en español las palabras en negrita?", sentence: "Es necesario que ___ el error.", answer: "corrijamos", en: "It's necessary that we [correct] the mistake.", explanation: "Corregir es -ir: e → i también en nosotros, y g → j: corrijamos." },
      { type: "fill-blank", prompt: "¿Cómo se dicen en español las palabras en negrita?", sentence: "Quiero que mi hija ___ un vestido para la boda.", answer: "elija", en: "I want my daughter [to choose] a dress for the wedding.", altAnswers: ["escoja"], explanation: "Elegir: e → i y g → j: elija." },
      { type: "fill-blank", prompt: "¿Cómo se dicen en español las palabras en negrita?", sentence: "Es importante que ___ las instrucciones al pie de la letra.", answer: "sigamos", en: "It's important that we [follow] the instructions to the letter.", explanation: "Seguir es -ir: en nosotros también cambia e → i: sigamos." },
      toEs("Hopefully it doesn't snow tomorrow.", "Ojalá no nieve mañana.", "Ojalá pide subjuntivo; nevar cambia e → ie: nieve.", ["Ojalá que no nieve mañana."]),
      toEs("Quiero que almuercemos juntos.", "Quiero que almorcemos juntos.", "Almorzar es -ar: en nosotros no cambia la raíz (almorcemos); solo z → c.", ["Quiero que almorcemos juntas."], "Corrige la frase."),
      toEs("It's better that you (tú) don't move the table.", "Es mejor que no muevas la mesa.", "Mover: o → ue en tú: muevas.", ["Mejor que no muevas la mesa."]),
      toEs("Es importante que no cuentes el dinero en la calle.", "Es importante que no contemos el dinero en la calle.", "Contar es -ar: en nosotros sale de la bota y recupera la o: contemos.", [], "Cambia el sujeto de la segunda parte a nosotros."),
      mc("«Ojalá que no ___ frío en la montaña.» (sentir, nosotros)", ["sentamos", "sintamos", "sientamos", "sentimos"], 1, "Sentir es -ir: en nosotros e → i: sintamos. «Sientamos» usa el diptongo de la bota y «sentimos» es indicativo."),
      mc("«Quiero que ___ a casa temprano.» (volver, nosotros)", ["vuelvamos", "volvamos", "volvemos", "vulvamos"], 1, "Volver es -er: en nosotros no cambia: volvamos. «Vulvamos» aplica por error la regla de los verbos -ir."),
      wo("Es mejor que pidamos un taxi", "Pedir es -ir: e → i también en nosotros: pidamos.", "It's better that we order a taxi"),
      wo("Ojalá que te diviertas en la fiesta", "Divertirse: e → ie en tú: te diviertas.", "I hope you (tú) have fun at the party"),
      toEs("My parents want us to sleep at their house and come back on Sunday.", "Mis padres quieren que durmamos en su casa y volvamos el domingo.", "Dormir (-ir) → durmamos; volver (-er) → volvamos: solo el verbo -ir cambia en nosotros.", ["Mis padres quieren que durmamos en su casa y que volvamos el domingo."]),
      { type: "speak", prompt: "Responde en voz alta: invita a tus amigos a divertirse en tu fiesta y a volver pronto (divertirse, volver; ustedes).", text: "Espero que se diviertan en mi fiesta y que vuelvan pronto.", explanation: "Ustedes está dentro de la bota: divertirse → se diviertan (e → ie), volver → vuelvan (o → ue)." },
    ]
  ),
  L(
    "present-subjunctive-formation-2",
    "b1d-circuito-irregulares-seis",
    "Circuito: los seis irregulares (sea, esté, vaya, sepa, dé, haya)",
    "Seis verbos que no siguen ninguna regla: practícalos en todas las personas.",
    "6 min",
    [
      sec(
        "Recuerda la regla: por qué estos seis",
        [
          "Recuerda la regla: ser → sea, estar → esté, ir → vaya, saber → sepa, dar → dé, haber → haya. Son irregulares porque su forma yo no termina en -o (soy, estoy, voy, sé, doy, he), así que la receta «forma yo sin -o» no funciona. Truco para recordarlos: DISHES (dar, ir, saber, haber, estar, ser).",
          "Dentro de cada verbo, las terminaciones son las normales (-a, -as, -a, -amos…): vaya, vayas, vayamos. Esté y dé llevan tilde; haber impersonal (hay) es siempre singular: haya.",
        ],
        [
          ["Espero que estés bien.", "I hope you're well. (estar → esté, with accent)"],
          ["Quiero que sepas la verdad.", "I want you to know the truth. (saber → sepa)"],
          ["Ojalá haya plazas libres.", "Hopefully there are seats free. (haya stays singular)"],
        ],
        [
          fb("Completa.", "Espero que no ___ nada grave. (ser)", "sea", "Ser es irregular porque soy no acaba en -o: sea."),
          mc(
            "«Es mejor que nosotros ___ en metro.» (ir)",
            ["vayamos", "vamos", "vaymos", "vayámos"],
            0,
            "Ir → vaya, y nosotros añade la terminación normal: vayamos. «Vamos» es indicativo, «vaymos» pierde la a y «vayámos» lleva una tilde que no existe."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "Quiero que ___ al médico. (ir, tú)", "vayas", "Ir → vaya + -s para tú: vayas."),
      fb("Completa.", "Es importante que todos ___ la respuesta. (saber)", "sepan", "Saber → sepa + -n: sepan."),
      fb("Completa.", "Ojalá que ___ sol mañana. (haber)", "haya", "Haber impersonal → haya, siempre singular."),
      fb("Completa.", "Prefiero que me ___ el dinero hoy. (dar, tú)", "des", "Dar → dé, des, dé…: solo dé (yo, él) lleva tilde."),
      fb("Completa.", "Espero que ___ tranquilos. (estar, vosotros)", "estéis", "Estar → esté…, estéis (vosotros, con tilde)."),
      mt(
        "Relaciona el infinitivo con su subjuntivo (yo).",
        [
          ["ir", "vaya"],
          ["saber", "sepa"],
          ["dar", "dé"],
          ["estar", "esté"],
        ],
        "Los cuatro forman parte de DISHES: su forma yo (voy, sé, doy, estoy) no acaba en -o, así que el subjuntivo hay que aprenderlo aparte."
      ),
      mc("«Quiero que ___ puntuales.» (ser, ustedes)", ["sean", "son", "estén", "sepan"], 0, "«Querer que» pide subjuntivo, y ser puntual va con ser: sean. «Son» es indicativo, «estén» es de otro verbo (estar) y «sepan» es de saber."),
      toEs("I hope there are tickets.", "Espero que haya entradas.", "«There are» = hay, y su subjuntivo es haya: espero que haya entradas.", ["Ojalá que haya entradas.", "Ojalá haya entradas."]),
      toEs("Sé que eres puntual.", "Quiero que seas puntual.", "«Sé que» afirma (eres); «quiero que» expresa un deseo → subjuntivo de ser: seas.", [], "Cambia «Sé que» por «Quiero que»."),
      toEs("Espero que hay leche en la nevera.", "Espero que haya leche en la nevera.", "«Espero que» pide subjuntivo: hay → haya.", ["Espero que haya leche en el refrigerador.", "Espero que haya leche en la heladera.", "Espero que haya leche en el frigorífico."], "Corrige la frase."),
      toEs("Es importante que sabamos la dirección.", "Es importante que sepamos la dirección.", "Saber es irregular: sep- + -amos = sepamos. «Sabamos» aplica la receta a un verbo que no la sigue.", [], "Corrige la frase."),
      toEs("My parents want me to go with them.", "Mis padres quieren que vaya con ellos.", "Querer que + otro sujeto → subjuntivo de ir: vaya."),
      { type: "fill-blank", prompt: "¿Cómo se dicen en español las palabras en negrita?", sentence: "Espero que la sopa todavía ___ caliente.", answer: "esté", en: "I hope the soup [is] still hot.", explanation: "Un estado (caliente) va con estar → esté, con tilde." },
      { type: "fill-blank", prompt: "¿Cómo se dicen en español las palabras en negrita?", sentence: "Ojalá que los exámenes no ___ muy largos.", answer: "sean", en: "Hopefully the exams [aren't] very long.", explanation: "Una característica (largos) va con ser → sean." },
      { type: "fill-blank", prompt: "¿Cómo se dicen en español las palabras en negrita?", sentence: "Quiero que ustedes me ___ una respuesta hoy.", answer: "den", en: "I want you all [to give] me an answer today.", explanation: "Dar → den (sin tilde: solo dé la lleva)." },
      toEs("Es mejor que vamos en tren.", "Es mejor que vayamos en tren.", "«Es mejor que» pide subjuntivo: ir → vayamos. «Vamos» es indicativo.", [], "Corrige la frase."),
      toEs("Hopefully the kids are at home.", "Ojalá que los niños estén en casa.", "Estar → estén (con tilde).", ["Ojalá los niños estén en casa."]),
      toEs("No quiero que le des el dinero.", "No quiero que le dé el dinero.", "Con usted, dar → dé, con tilde para distinguirlo de la preposición de.", ["No quiero que usted le dé el dinero."], "Cambia el sujeto de la segunda parte a usted."),
      toEs("I want them to know that we're grateful.", "Quiero que sepan que estamos agradecidos.", "Saber → sepan; el segundo verbo es un hecho, por eso indicativo.", ["Quiero que sepan que estamos agradecidas."]),
      mc("«Espero que usted ___ bien.»", ["está", "esté", "este", "sea"], 1, "Estar → esté con tilde; «este» sin tilde es un demostrativo, «está» es indicativo y «sea» es de ser (no sirve para cómo estás)."),
      mc("«Ojalá ___ entradas.» (haber)", ["hay", "haya", "hayan", "haiga"], 1, "Haber impersonal siempre en singular: haya, aunque «entradas» sea plural. «Haiga» es una forma vulgar."),
      wo("Es necesario que todos estén aquí a las ocho", "Estar → estén después de «es necesario que».", "Everyone needs to be here at eight"),
      wo("Quiero que seamos amigos otra vez", "Quiero que + otro sujeto → subjuntivo de ser: seamos.", "I want us to be friends again"),
      toEs("I hope there's a solution and that the boss is calm.", "Espero que haya una solución y que el jefe esté tranquilo.", "Dos irregulares: haya y esté.", ["Espero que haya una solución y que la jefa esté tranquila.", "Espero que haya una solución y el jefe esté tranquilo."]),
      { type: "speak", prompt: "Responde en voz alta: tu amiga empieza un trabajo nuevo. Deséale dos cosas con ser y estar.", text: "Espero que tus compañeros sean simpáticos y que estés muy contenta.", explanation: "Espero que + subjuntivo irregular: ser → sean (característica), estar → estés (estado)." },
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
        "Recuerda la regla: cambia la letra para conservar el sonido",
        [
          "Recuerda la regla: el subjuntivo cambia la vocal final, y algunas consonantes sonarían distinto delante de la nueva vocal. Para conservar el sonido de la forma yo, se cambia la letra: -car → -que (busco → busque), -gar → -gue (llego → llegue), -zar → -ce (empiezo → empiece), -ger/-gir → -ja (escojo → escoja), -guir → -ga (sigo → siga).",
          "No es una irregularidad: es ortografía. Por eso afecta a todas las personas del subjuntivo (busque, busques, busquemos…), no solo a yo como en el pretérito (busqué, buscaste).",
        ],
        [
          ["Espero que llegues a tiempo.", "I hope you arrive on time. (gu keeps the hard g before e)"],
          ["Quiero que empecemos ya.", "I want us to start now. (z is written c before e)"],
          ["Es mejor que lo dirijas tú.", "It's better that you run it. (dirigir: j keeps the sound before a)"],
        ],
        [
          fb("Completa.", "Quiero que ___ el libro. (buscar, tú)", "busques", "Buscar: delante de e, la c se escribe qu para conservar el sonido k: busques."),
          mc(
            "Aplica la regla a un verbo nuevo: «sacar» → que yo ___",
            ["saque", "sace", "saqe", "saca"],
            0,
            "-car → -que: saque. «Sace» cambiaría el sonido a /θ/ o /s/, «saqe» no existe (qu siempre lleva u) y «saca» es indicativo."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "Espero que ___ pronto. (llegar, ellos)", "lleguen", "-gar → -gue: la u mantiene el sonido de la g delante de e."),
      fb("Completa.", "Es mejor que ___ ahora. (empezar, nosotros)", "empecemos", "-zar → -ce delante de e; en nosotros, empezar no cambia la raíz."),
      fb("Completa.", "Quiero que ___ el color tú. (escoger)", "escojas", "-ger → -ja: delante de a, la g se escribe j para conservar el sonido."),
      fb("Completa.", "Espero que ___ la cuenta él. (pagar)", "pague", "-gar → -gue: pague."),
      fb("Completa.", "Prefiero que ___ tú el coche. (conducir)", "conduzcas", "Desde la forma yo conduzco: conduzc- + -as = conduzcas."),
      fb("Completa.", "Ojalá que ___ todo bien. (seguir)", "siga", "-guir → -ga: delante de a la u sobra (sigo → siga), y además e → i."),
      mc("¿Cuál es correcta?", ["toquemos", "tocemos", "tokemos", "toquamos"], 0, "Los verbos en -car cambian c → qu delante de e para conservar el sonido: toquemos. «Tocemos» cambiaría el sonido a /θ/ o /s/, y «tokemos» o «toquamos» no son formas correctas."),
      toEs("I hope you (tú) find your keys.", "Espero que encuentres tus llaves.", "Espero que + subjuntivo; encontrar cambia o → ue en tú: encuentres.", ["Ojalá encuentres tus llaves."]),
      toEs("I hope you (tú) get home safely.", "Espero que llegues bien a casa.", "Llegar → llegue: -gar → -gue en todas las personas.", ["Espero que llegues a casa bien.", "Espero que llegues bien."]),
      toEs("Es importante que pagemos a tiempo.", "Es importante que paguemos a tiempo.", "Pagar: delante de e hace falta la u para que la g siga sonando como en «pago»: paguemos.", ["Es importante que paguemos puntualmente."], "Corrige la frase."),
      toEs("No quiero que tocen nada.", "No quiero que toquen nada.", "Tocar: delante de e la c se escribe qu para conservar el sonido k: toquen.", ["No quiero que toquéis nada."], "Corrige la frase."),
      { type: "fill-blank", prompt: "¿Cómo se dicen en español las palabras en negrita?", sentence: "Quiero que tú ___ la fiesta.", answer: "organices", en: "I want you [to organize] the party.", explanation: "Organizar → organices: -zar → -ce." },
      { type: "fill-blank", prompt: "¿Cómo se dicen en español las palabras en negrita?", sentence: "Espero que los niños ___ las fotos.", answer: "escojan", en: "I hope the kids [pick] the photos.", altAnswers: ["elijan"], explanation: "Escoger → escojan: -ger → -ja." },
      toEs("Mi jefe quiere que explico el problema.", "Mi jefe quiere que explique el problema.", "«Quiere que» pide subjuntivo, y explicar cambia c → qu delante de e: explique.", ["Mi jefa quiere que explique el problema."], "Corrige la frase."),
      mc("¿Cuál es correcta?", ["almuerzemos", "almorcemos", "almuercemos", "almorzemos"], 1, "Almorzar: z → c delante de e, y en nosotros no cambia la raíz: almorcemos. Las otras opciones conservan la z o el diptongo ue."),
      wo("Ojalá que consigas el trabajo", "Conseguir → consigas: gu → g delante de a, y e → i.", "Hopefully you (tú) get the job"),
      toEs("The guide wants us to cross the street and start the tour.", "El guía quiere que crucemos la calle y empecemos la visita.", "Cruzar → crucemos; empezar → empecemos: -zar → -ce.", ["La guía quiere que crucemos la calle y empecemos la visita.", "El guía quiere que crucemos la calle y comencemos la visita.", "El guía quiere que crucemos la calle y empecemos el recorrido.", "La guía quiere que crucemos la calle y empecemos el recorrido.", "El guía quiere que crucemos la calle y empecemos el tour."]),
      toEs("Apagas la luz.", "Quiero que apagues la luz.", "Con «quiero que» va subjuntivo, y apagar necesita gu delante de e: apagues.", [], "Transforma con «Quiero que…»."),
      ms(
        "Aplica la regla: ¿qué formas están bien escritas?",
        ["abrace (abrazar)", "dirija (dirigir)", "distinga (distinguir)", "abraze (abrazar)", "diriga (dirigir)"],
        [0, 1, 2],
        "Abrazar → abrace (z → c delante de e), dirigir → dirija (g → j delante de a) y distinguir → distinga (gu → g delante de a). «Abraze» rompe la regla de la z, y «diriga» haría sonar la g como en «gato»."
      ),
      { type: "speak", prompt: "Responde en voz alta: tu compañero conduce de noche. Dile que esperas que llegue bien y que te busque mañana.", text: "Espero que llegues bien y que me busques mañana.", explanation: "Llegar → llegues (gu) y buscar → busques (qu): la letra cambia para conservar el sonido." },
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
        "Recuerda la regla: la raíz se queda, la terminación cambia",
        [
          "Recuerda la regla: el verbo principal (espero, quiero, prefiero) no cambia; solo cambian el sujeto de la segunda parte y la terminación del subjuntivo. La raíz que sale de la forma yo se mantiene en todas las personas: veng- (vengo) → venga, vengas, vengamos, vengáis, vengan.",
          "Dos detalles al cambiar de persona: usted y ustedes usan las formas de tercera persona (sea, sean), y los cambios de raíz salen o entran en la «bota» (vuelvas → volvamos).",
        ],
        [
          ["Quiero que tú seas feliz. → Quiero que ellos sean felices.", "I want you to be happy. → I want them to be happy."],
          ["Espero que vuelvas pronto. → Espero que volvamos pronto.", "I hope you come back soon. → I hope we come back soon. (no o → ue in nosotros)"],
        ],
        [
          fb("Cambia tú → ella.", "Espero que tú vengas. → Espero que ella ___.", "venga", "Mismo verbo, otra persona: la raíz veng- se mantiene y él/ella termina en -a: venga."),
          toEs("Prefiero que tú elijas el restaurante.", "Prefiero que ustedes elijan el restaurante.", "La raíz elij- se mantiene; ustedes toma la terminación de tercera persona plural: elijan.", ["Prefiero que elijan el restaurante."], "Cambia el sujeto de la segunda parte a ustedes."),
        ]
      ),
    ],
    [
      fb("Cambia tú → vosotros.", "Espero que tú vengas. → Espero que vosotros ___.", "vengáis", "Raíz veng- (de vengo) + terminación de vosotros -áis: vengáis."),
      fb("Cambia tú → nosotros.", "Quiero que tú lo hagas. → Quiero que nosotros lo ___.", "hagamos", "Raíz hag- (de hago) + terminación de nosotros -amos: hagamos."),
      fb("Cambia tú → ellos.", "Prefiero que tú salgas. → Prefiero que ellos ___.", "salgan", "Raíz salg- (de salgo) + terminación de ellos -an: salgan."),
      fb("Cambia ella → nosotros.", "Mi jefe quiere que ella viaje. → Mi jefe quiere que nosotros ___.", "viajemos", "Viajar es -ar: en subjuntivo toma e; nosotros → viajemos."),
      fb("Cambia yo → ustedes.", "Espera que yo me siente. → Espera que ustedes se ___.", "sienten", "Sentarse: ustedes está dentro de la bota (e → ie) y toma -en: se sienten."),
      fb("Cambia nosotros → tú.", "Quieren que durmamos aquí. → Quieren que tú ___ aquí.", "duermas", "Dormir cambia o → ue en tú (duermas), pero o → u en nosotros (durmamos)."),
      mc("«Espero que ella tenga suerte.» → ustedes:", ["Espero que ustedes tengan suerte.", "Espero que ustedes tienen suerte.", "Espero que ustedes tengáis suerte.", "Espero que ustedes tener suerte."], 0, "Con ustedes, el subjuntivo de tener termina en -an: tengan. «Tienen» es indicativo, «tengáis» es de vosotros y «tener» es infinitivo, imposible después de «que ustedes»."),
      toEs("My parents want us to be home early.", "Mis padres quieren que estemos en casa temprano.", "«Want us to» = quieren que + subjuntivo; estar → estemos.", ["Mis padres quieren que estemos en casa pronto."]),
      fb("Cambia tú → ellos.", "Quiero que tú estudies. → Quiero que ellos ___.", "estudien", "Solo cambia la terminación: estudies → estudien."),
      fb("Cambia ella → tú.", "Espero que ella sepa la respuesta. → Espero que tú ___ la respuesta.", "sepas", "Saber es irregular (sepa), pero las terminaciones son normales: sepas."),
      fb("Cambia yo → nosotros.", "Prefieren que yo conduzca. → Prefieren que nosotros ___.", "conduzcamos", "La raíz conduzc- se mantiene en todas las personas: conduzcamos."),
      fb("Cambia él → ustedes.", "Ojalá que él pueda venir. → Ojalá que ustedes ___ venir.", "puedan", "Ustedes sigue dentro de la bota (o → ue): puedan."),
      fb("Cambia nosotros → usted.", "Quiere que nosotros seamos puntuales. → Quiere que usted ___ puntual.", "sea", "Usted usa la forma de tercera persona singular: sea."),
      fb("Cambia ellos → yo.", "Es mejor que ellos vayan en tren. → Es mejor que yo ___ en tren.", "vaya", "Ir → vaya; yo y él comparten forma."),
      toEs("I want my students to be patient.", "Quiero que mis estudiantes tengan paciencia.", "Tengan: tercera persona plural del subjuntivo de tener (desde tengo).", ["Quiero que mis alumnos tengan paciencia.", "Quiero que mis alumnas tengan paciencia.", "Quiero que mis estudiantes sean pacientes.", "Quiero que mis alumnos sean pacientes."]),
      toEs("Mi hermana quiere que la visitamos.", "Mi hermana quiere que la visitemos.", "Después de «quiere que» con otro sujeto: subjuntivo, visitemos (-ar → e). «Visitamos» es indicativo.", ["Mi hermana quiere que vayamos a visitarla."], "Corrige la frase."),
      toEs("Espero que te sientas mejor.", "Espero que se sienta mejor.", "Con usted cambian el pronombre (te → se) y la terminación (sientas → sienta).", ["Espero que usted se sienta mejor."], "Cambia a la forma de usted."),
      toEs("We hope our son finds a job.", "Esperamos que nuestro hijo encuentre trabajo.", "Él → encuentre (o → ue dentro de la bota).", ["Esperamos que nuestro hijo encuentre un trabajo.", "Esperamos que nuestro hijo encuentre empleo."]),
      toEs("El profesor quiere que lea en voz alta.", "El profesor quiere que todos leamos en voz alta.", "Nosotros → leamos: le- + -amos.", ["La profesora quiere que todos leamos en voz alta.", "El profesor quiere que leamos todos en voz alta."], "Cambia el sujeto de la segunda parte a «todos nosotros»."),
      mc("«Quiero que tú vuelvas pronto.» → nosotros:", ["Quiero que nosotros volvamos pronto.", "Quiero que nosotros vuelvamos pronto.", "Quiero que nosotros volvemos pronto.", "Quiero que nosotros volváis pronto."], 0, "En nosotros, volver sale de la bota y no cambia la raíz: volvamos. «Volvemos» es indicativo y «volváis» es vosotros."),
      mc("«Espero que ellos estén bien.» → usted:", ["Espero que usted está bien.", "Espero que usted esté bien.", "Espero que usted estés bien.", "Espero que usted estén bien."], 1, "Usted usa la forma de él: esté. «Está» es indicativo, «estés» es tú y «estén» es plural."),
      wo("Mis abuelos quieren que pasemos la Navidad con ellos", "Nosotros → pasemos (-ar → e).", "My grandparents want us to spend Christmas with them"),
      wo("Ojalá que ustedes se diviertan mucho", "Ustedes → se diviertan (e → ie dentro de la bota).", "I hope you all have a lot of fun"),
      toEs("Quiero que ustedes dicen lo que piensan.", "Quiero que ustedes digan lo que piensan.", "Lo que quiero va en subjuntivo (digan, desde digo); lo que piensan es un hecho y queda en indicativo.", ["Quiero que digan lo que piensan."], "Corrige la frase."),
      toEs("My mother hopes that I call her and that my siblings visit her.", "Mi madre espera que la llame y que mis hermanos la visiten.", "Yo → llame; ellos → visiten.", ["Mi mamá espera que la llame y que mis hermanos la visiten.", "Mi madre espera que la llame y mis hermanos la visiten.", "Mi mamá espera que la llame y mis hermanos la visiten."]),
      { type: "speak", prompt: "Responde en voz alta: di que esperas que tu familia esté bien y que tú tengas un buen año.", text: "Espero que mi familia esté bien y que yo tenga un buen año.", explanation: "Mismo verbo principal, dos personas: mi familia (singular) → esté; yo → tenga." },
    ]
  ),
  L(
    "subjunctive-formation-drill-3",
    "b1d-ronda-formas-mezcla",
    "Ronda rápida: 12 subjuntivos sin pistas",
    "Regulares, irregulares, cambios de raíz y ortográficos mezclados. Sin mirar la teoría.",
    "7 min",
    [
      sec(
        "Recuerda la regla: cuatro preguntas, siempre en el mismo orden",
        [
          "Recuerda: el subjuntivo se construye sobre la forma yo del presente, así que casi todo lo que tiene el yo pasa al subjuntivo. Antes de escribir, hazte cuatro preguntas:",
          "1) ¿Es uno de los seis cuyo yo no acaba en -o (sea, esté, vaya, sepa, dé, haya)? 2) Si no, parte del yo (tengo → teng-). 3) Cambia la vocal: -ar → e; -er/-ir → a. 4) Revisa la raíz (en nosotros sin diptongo; los -ir con e → i, o → u) y la ortografía (c → qu, g → gu, z → c).",
        ],
        [
          ["que tengas (tengo → teng-), que vayas (uno de los seis)", "that you have, that you go"],
          ["que durmamos (-ir: o → u en nosotros), que pague (g → gu)", "that we sleep, that he pay"],
        ],
        [
          fb("Rápido.", "que tú ___ (ir)", "vayas", "Ir es uno de los seis (su yo es voy, sin -o que quitar): vaya, vayas."),
          fb("Rápido.", "que él ___ (caber)", "quepa", "Pregunta 2: el yo de caber es quepo, así que quep- + a → quepa."),
        ]
      ),
    ],
    [
      fb("Rápido.", "que ella ___ (poner)", "ponga", "Pongo → pong- + a: ponga."),
      fb("Rápido.", "que nosotros ___ (pedir)", "pidamos", "-ir con e → i: la i se queda también en nosotros: pidamos."),
      fb("Rápido.", "que ustedes ___ (estar)", "estén", "Estar es uno de los seis: esté, estén (con tilde)."),
      fb("Rápido.", "que yo ___ (traer)", "traiga", "Traigo → traig- + a: traiga."),
      fb("Rápido.", "que vosotros ___ (volver)", "volváis", "Volver (-er, o → ue) no cambia en vosotros: el acento va a la terminación, volváis."),
      fb("Rápido.", "que tú ___ (decir)", "digas", "Digo → dig- + as: digas."),
      fb("Rápido.", "que ellos ___ (almorzar)", "almuercen", "Dos cambios: o → ue (raíz acentuada) y z → c delante de e: almuercen."),
      fb("Rápido.", "que nosotros ___ (jugar)", "juguemos", "Jugar: en nosotros no hay diptongo, pero g → gu delante de e: juguemos."),
      mc(
        "«que nosotros ___» (sentir)",
        ["sintamos", "sentamos", "sientamos", "sentimos"],
        0,
        "Los verbos -ir con cambio e→ie cambian e→i en nosotros y vosotros del subjuntivo: sintamos. «Sientamos» usa el diptongo de otras personas, «sentamos» olvida el cambio y «sentimos» es indicativo."
      ),
      toEs("Ojalá que él sepa la respuesta.", "Ojalá que nosotros sepamos la respuesta.", "Saber es uno de los seis: sepa, sepamos. Cambia solo la terminación.", ["Ojalá que sepamos la respuesta.", "Ojalá sepamos la respuesta."], "Cambia a nosotros."),
      toEs("Espero que tú elijas bien.", "Espero que ustedes elijan bien.", "Elegir: e → i y g → j (elijo → elij-), en todas las personas: elijan.", ["Espero que elijan bien."], "Cambia a ustedes."),
      toEs("«Es importante que lo hagamos bien y que nadie se pona nervioso.»", "Es importante que lo hagamos bien y que nadie se ponga nervioso.", "Poner toma la raíz de pongo: ponga. «Pona» pierde la g del yo.", [], "Corrige la frase."),
      toEs("«Quiero que vosotros vuelváis antes de las diez.»", "Quiero que vosotros volváis antes de las diez.", "En vosotros el acento cae en la terminación (vol-VÁIS), así que no hay diptongo: volváis.", ["Quiero que volváis antes de las diez."], "Corrige la frase."),
    ]
  ),
  L(
    "subjunctive-formation-drill-3",
    "b1d-corrige-formas-subjuntivo",
    "Corrige el párrafo: formas de subjuntivo inventadas",
    "Un mensaje con subjuntivos mal formados (tenas, hazcas, vayes, duermamos). Arréglalos.",
    "7 min",
    [
      sec(
        "Recuerda la regla y lee el mensaje",
        [
          "Recuerda: casi todos los errores de forma vienen de olvidar la forma yo. El subjuntivo copia el yo (tengo → tenga, hago → haga), salvo los seis especiales (sea, esté, vaya, sepa, dé, haya). Y en nosotros los verbos -ir cambian e → i, o → u (durmamos).",
          "«Espero que ✗ tenas (→ tengas) un buen viaje y que ✗ hazcas (→ hagas) muchas fotos. Quiero que ✗ vayes (→ vayas) al museo y que ✗ duermamos (→ durmamos) en el mismo hotel.»",
        ],
        [
          ["Espero que tengas un buen viaje.", "I hope you have a good trip. (tengo → tengas)"],
        ],
        [
          fb("Corrige el mensaje nuevo.", "Ojalá que ___ temprano mañana. (el mensaje dice: salamos)", "salgamos", "El yo de salir es salgo, así que la g pasa a todas las personas: salgamos."),
        ]
      ),
    ],
    [
      fb("Corrige.", "Espero que ___ muchas fotos. (el mensaje dice: hazcas)", "hagas", "El subjuntivo sale de hago: hagas; «hazcas» no existe."),
      fb("Corrige.", "Quiero que ___ al museo. (el mensaje dice: vayes)", "vayas", "Ir es irregular: vaya, vayas… «Vayes» mezcla la terminación de -ar."),
      fb("Corrige.", "Quiero que ___ en el mismo hotel. (el mensaje dice: duermamos)", "durmamos", "-ir: o → u en nosotros: durmamos."),
      fb("Corrige.", "Espero que ___ la postal pronto. (error típico: recibes)", "recibas", "«Esperar que» pide subjuntivo; recibir es -ir → a: recibas, no «recibes»."),
      fb("Corrige.", "Ojalá que no ___ problemas. (error típico: hayan — se refiere a «problemas»)", "haya", "Haber impersonal (hay) no tiene plural: ojalá no haya problemas, nunca «hayan problemas»."),
      mc(
        "¿Cuál está bien escrita?",
        ["Quiero que me lo digas.", "Quiero que me lo dices.", "Quiero que me lo decías.", "Quiero que me lo digues."],
        0,
        "«Querer que» pide subjuntivo, que sale de digo: diga, digas. «Dices» es indicativo, «decías» es imperfecto y «digues» no existe."
      ),
      ms(
        "¿Qué formas son correctas?",
        ["conduzcas", "conozamos", "oigan", "estes"],
        [0, 2],
        "Conduzcas (de conduzco) y oigan (de oigo) copian la forma yo. Lo correcto es conozcamos (de conozco) y estés, con tilde."
      ),
      toEs("Espero que tú tengas suerte.", "Espero que vosotros tengáis suerte.", "La raíz teng- de tengo se mantiene en todas las personas: tengáis.", ["Espero que ustedes tengan suerte."], "Cambia a vosotros."),
      toEs("Quiero que me digas la verdad.", "Quiero que me digáis la verdad.", "Dig- (de digo) se mantiene; solo cambia la terminación: digáis.", ["Quiero que me digan la verdad."], "Cambia a vosotros."),
      toEs("«Ojalá que mis padres conozan a mi novia.»", "Ojalá que mis padres conozcan a mi novia.", "El yo es conozco, con zc: el subjuntivo es conozcan.", [], "Corrige la frase."),
      toEs("«Es posible que pidamos pizza, pero no creo que sabéis el número.»", "Es posible que pidamos pizza, pero no creo que sepáis el número.", "Pidamos está bien (-ir, e → i). No creo que pide subjuntivo, y saber es uno de los seis: sepáis.", [], "Corrige la frase."),
      toEs("I hope you have a great time. (tú)", "Espero que lo pases muy bien.", "«Have a great time» = pasarlo bien; espero que + subjuntivo: lo pases.", ["Espero que te diviertas mucho.", "Ojalá lo pases muy bien."]),
    ]
  ),
  L(
    "subjunctive-formation-drill-3",
    "b1d-habla-de-ti-deseos",
    "Habla de ti: lo que quieres de los demás",
    "Traduce deseos personales sobre tu familia, tu trabajo y tus amigos, decidiendo entre quiero + infinitivo y quiero que + subjuntivo.",
    "7 min",
    [
      sec(
        "Recuerda la regla: ¿quién hace la acción?",
        [
          "Recuerda: cuenta las personas. Si quien quiere y quien hace la acción son la misma persona, va el infinitivo: Quiero vivir cerca (yo quiero, yo vivo). Si son personas distintas, necesitas que + subjuntivo: Quiero que mis abuelos vivan cerca (yo quiero, ellos viven).",
          "¿Por qué subjuntivo? Porque la acción de la otra persona no es un hecho: es solo lo que tú deseas. Lo mismo pasa con preferir, necesitar, esperar o pedir.",
        ],
        [
          ["Quiero que mis abuelos vivan más cerca.", "I want my grandparents to live closer. (dos personas → que + subjuntivo)"],
          ["Quiero vivir más cerca del trabajo.", "I want to live closer to work. (una persona → infinitivo)"],
          ["Mi madre necesita que la llame cada domingo.", "My mother needs me to call her every Sunday. (ella necesita, yo llamo)"],
        ],
        [
          mc(
            "«Quiero ___ más.» (yo)",
            ["descansar", "que descanse", "que descanso", "descanse"],
            0,
            "Yo quiero y yo descanso: mismo sujeto → infinitivo, quiero descansar. «Que descanse» sonaría a otra persona, «que descanso» usa indicativo y «descanse» sin «que» no es posible."
          ),
          fb("Completa.", "Mis hijos quieren que les ___ un perro. (comprar, yo)", "compre", "Ellos quieren, yo compro: dos personas → que + subjuntivo: compre."),
        ]
      ),
    ],
    [
      toEs("I want my sister to find a good job.", "Quiero que mi hermana encuentre un buen trabajo.", "Querer que + subjuntivo; encontrar → encuentre (o→ue).", ["Quiero que mi hermana consiga un buen trabajo."]),
      fb("Completa.", "Quiero ___ a cocinar este año. (aprender, yo)", "aprender", "Mismo sujeto (yo quiero, yo aprendo) → infinitivo: quiero aprender."),
      fb("Completa.", "Mi jefe quiere que ___ el sábado. (trabajar, yo)", "trabaje", "El jefe quiere, yo trabajo: dos sujetos → que + subjuntivo: trabaje."),
      fb("Completa.", "Quiero que mis hijos ___ felices. (ser)", "sean", "Dos sujetos → subjuntivo; ser es uno de los seis especiales: sean."),
      fb("Completa.", "Prefiero que nadie me ___ hoy. (llamar)", "llame", "Preferir que + subjuntivo; nadie va con verbo en singular: llame."),
      toEs("Quiero visitar a mis amigos.", "Quiero que mis amigos me visiten.", "Ahora la acción la hacen mis amigos: dos sujetos → que + subjuntivo (visiten), y yo paso a ser me.", ["Quiero que mis amigos vengan a visitarme."], "Cambia la frase para que los que visitan sean «mis amigos»."),
      toEs("Mi pareja quiere que pasemos más tiempo juntos.", "Mi pareja quiere pasar más tiempo conmigo.", "Si quien quiere y quien pasa el tiempo es la misma persona (mi pareja), va el infinitivo: quiere pasar.", [], "Transforma la frase para que el sujeto de los dos verbos sea «mi pareja»."),
      toEs("«Quiero que yo hable mejor español.»", "Quiero hablar mejor español.", "Yo quiero y yo hablo: el mismo sujeto pide infinitivo, no que + subjuntivo.", ["Quiero hablar español mejor."], "Corrige la frase."),
      toEs("«Mis padres quieren que estudio Medicina.»", "Mis padres quieren que estudie Medicina.", "Dos sujetos (ellos quieren, yo estudio): después de que va subjuntivo, estudie.", ["Mis padres quieren que yo estudie Medicina."], "Corrige la frase."),
      wo("Mi pareja quiere que pasemos más tiempo juntos.", "Querer que + nosotros: pasemos.", "My partner wants us to spend more time together."),
      toEn("No quiero que te preocupes.", "I don't want you to worry.", "«No quiero que» + subjuntivo = I don't want you to…; preocuparse → te preocupes.", []),
      {
        type: "speak",
        prompt: "Habla de ti: di una cosa que quieres hacer tú este año y una que quieres que haga alguien de tu familia.",
        text: "Este año quiero aprender a nadar y quiero que mi hermano venga conmigo.",
        explanation: "Para ti, infinitivo (quiero aprender); para otra persona, que + subjuntivo (quiero que venga). Tu respuesta puede ser distinta: comprueba solo esa diferencia.",
      },
    ]
  ),
  L(
    "subjunctive-formation-drill-3",
    "b1d-pares-infinitivo-que",
    "Pares mínimos: quiero ir / quiero que vayas",
    "El mismo verbo de deseo con infinitivo o con que + subjuntivo: decide según los sujetos.",
    "7 min",
    [
      sec(
        "Recuerda la regla: ¿un sujeto o dos?",
        [
          "Recuerda: un sujeto → infinitivo: Espero aprobar (yo espero, yo apruebo). Dos sujetos → que + subjuntivo: Espero que apruebes (yo espero, tú apruebas).",
          "El inglés lo disimula (I want to go / I want you to go), pero en español la diferencia se ve siempre: si aparece otra persona entre el deseo y la acción, hace falta que.",
        ],
        [
          ["Prefiero quedarme. / Prefiero que te quedes.", "I prefer to stay. / I prefer that you stay. (me quedo yo / te quedas tú)"],
          ["Necesito dormir. / Necesito que los niños duerman.", "I need to sleep. / I need the children to sleep."],
        ],
        [
          mc(
            "«Espero ___ el examen.» (yo)",
            ["aprobar", "que apruebe", "que apruebo", "aprobé"],
            0,
            "Yo espero y yo apruebo: mismo sujeto → infinitivo, espero aprobar. «Que apruebe» se usa para otro sujeto, «que apruebo» usa indicativo y «aprobé» es pasado."
          ),
          fb("Infinitivo o subjuntivo.", "Mis padres prefieren que ___ en casa esta noche. (cenar, nosotros)", "cenemos", "Ellos prefieren, nosotros cenamos: dos sujetos → que + subjuntivo: cenemos."),
        ]
      ),
    ],
    [
      mc(
        "«Espero ___ el examen.» (tú)",
        ["que apruebes", "aprobar", "que apruebas", "aprobarás"],
        0,
        "Yo espero y tú apruebas: dos sujetos → que + subjuntivo, espero que apruebes. «Aprobar» solo sirve si el sujeto es el mismo (yo), «que apruebas» usa indicativo y «aprobarás» es futuro."
      ),
      fb("Infinitivo o subjuntivo.", "Queremos ___ pronto. (salir, nosotros)", "salir", "Nosotros queremos y nosotros salimos: mismo sujeto → infinitivo."),
      fb("Infinitivo o subjuntivo.", "Queremos que ___ pronto. (salir, vosotros)", "salgáis", "Dos sujetos → que + subjuntivo; salgo → salg- + áis: salgáis."),
      fb("Infinitivo o subjuntivo.", "Prefiero ___ en casa. (cenar, yo)", "cenar", "Yo prefiero y yo ceno: infinitivo."),
      fb("Infinitivo o subjuntivo.", "Mi hijo desea ___ piloto. (ser)", "ser", "Mi hijo desea y mi hijo será piloto: mismo sujeto → infinitivo."),
      fb("Infinitivo o subjuntivo.", "Mi hijo desea que su padre ___ piloto. (ser)", "sea", "Ahora son dos personas (el hijo desea, el padre es): que + subjuntivo, sea."),
      mt(
        "Relaciona el principio con el final.",
        [
          ["Necesito…", "…descansar."],
          ["Necesito que…", "…me ayudes."],
          ["Espero que…", "…lleguéis bien."],
        ],
        "Sin que, el verbo siguiente va en infinitivo (necesito descansar); con que, entra otra persona y va el subjuntivo (me ayudes, lleguéis)."
      ),
      toEs("Quiero salir esta noche.", "Quiero que mi hermana salga esta noche.", "Al añadir otra persona (mi hermana), el infinitivo pasa a que + subjuntivo: salga.", [], "Cambia la frase para que quien sale sea «mi hermana»."),
      toEs("Ana prefiere que yo conduzca.", "Ana prefiere conducir.", "Si quien prefiere y quien conduce es Ana, sobra que y va el infinitivo.", ["Ana prefiere conducir ella."], "Transforma la frase para que conduzca la misma Ana."),
      toEs("«Espero que veo a mis primos en Navidad.»", "Espero ver a mis primos en Navidad.", "Yo espero y yo veo: con el mismo sujeto va el infinitivo, sin que.", [], "Corrige la frase."),
      toEs("«Necesito tú me ayudes con la mudanza.»", "Necesito que me ayudes con la mudanza.", "Con dos sujetos hace falta que delante del subjuntivo; además, tú no es necesario porque ayudes ya indica la persona.", ["Necesito que tú me ayudes con la mudanza."], "Corrige la frase."),
      toEs("I want to go, but I want you to come too.", "Quiero ir, pero quiero que vengas también.", "Mismo sujeto → infinitivo (quiero ir); otro sujeto → que + subjuntivo (quiero que vengas).", ["Quiero ir, pero quiero que tú también vengas."]),
    ]
  ),
  L(
    "subjunctive-formation-drill-3",
    "b1d-dictado-deseos-familia",
    "Dictado: deseos en familia",
    "Reordena frases largas con verbo de deseo + que + subjuntivo y pronombres.",
    "7 min",
    [
      sec(
        "Recuerda la regla: el orden de la frase",
        [
          "Recuerda el orden: sujeto + verbo de deseo + que + (sujeto 2) + (no) + (pronombres) + subjuntivo + complementos. Los pronombres van pegados delante del subjuntivo, nunca delante de que: Mi abuela quiere que le escribamos.",
          "Al escribir lo que oyes, fíjate en las tildes que distinguen formas: estéis, esté, dé llevan tilde; que (conjunción) no la lleva.",
        ],
        [
          ["Mi tío quiere que lo llamemos más.", "My uncle wants us to call him more. (lo va justo delante de llamemos)"],
          ["Mis padres prefieren que no les regale nada.", "My parents prefer that I don't give them anything. (que + no + les + subjuntivo)"],
        ],
        [
          mc(
            "¿Cuál es el orden natural?",
            ["Mis padres quieren que yo estudie medicina.", "Mis padres quieren yo que estudie medicina.", "Quieren mis padres estudie que yo medicina.", "Mis padres que quieren yo estudie medicina."],
            0,
            "El orden natural es: sujeto + quieren + que + nuevo sujeto + subjuntivo: Mis padres quieren que yo estudie. En las otras, «que» o «yo» están fuera de su lugar."
          ),
        ]
      ),
    ],
    [
      wo("Mi abuela quiere que le escribamos más a menudo.", "Le (a ella) va justo delante del subjuntivo escribamos.", "My grandmother wants us to write to her more often."),
      wo("Mis padres esperan que encuentre un piso cerca de ellos.", "Esperar que + subjuntivo: encontrar → encuentre (o → ue).", "My parents hope I find a flat near them."),
      wo("Mi hermano prefiere que no le digamos nada a mamá.", "Que + no + pronombre + subjuntivo: no le digamos.", "My brother prefers that we don't tell Mom anything."),
      wo("Espero que todos estéis bien y que nos veamos pronto.", "Dos subjuntivos unidos por y que: estéis (con tilde) y veamos.", "I hope you're all well and that we see each other soon."),
      fb("Completa.", "Mi tía desea que ___ a su boda. (ir, nosotros)", "vayamos", "Desear que + subjuntivo; ir es uno de los seis especiales: vayamos."),
      fb("Completa.", "Mi madre necesita que la ___ con la mudanza. (ayudar, yo)", "ayude", "Necesitar que + subjuntivo: ayudar → ayude. La va delante del verbo."),
      toEn("Esperamos que os guste la sorpresa.", "We hope you like the surprise.", "Esperar que + subjuntivo; gustar concuerda con «la sorpresa»: os guste.", ["We hope you'll like the surprise."]),
      toEs("Mi madre quiere que llamemos a la abuela.", "Mi madre quiere que la llamemos.", "A la abuela → la, y el pronombre va justo delante del subjuntivo: que la llamemos.", [], "Sustituye «a la abuela» por un pronombre."),
      toEs("Mi padre quiere que le contemos la verdad.", "Mi padre quiere que no le contemos la verdad.", "El no va entre que y el pronombre: que no le contemos.", [], "Cambia la frase al negativo (no contar)."),
      toEs("«Espero que esteis bien y que os guste el regalo.»", "Espero que estéis bien y que os guste el regalo.", "Estéis (subjuntivo de estar) lleva tilde en la última sílaba, como esté y estén.", [], "Corrige la ortografía."),
      toEs("«Mi abuela quiere le que visitemos en verano.»", "Mi abuela quiere que la visitemos en verano.", "El pronombre va después de que y delante del subjuntivo. Además, visitar lleva objeto directo: a ella → la.", ["Mi abuela quiere que le visitemos en verano."], "Corrige la frase."),
    ]
  ),
  L(
    "subjunctive-formation-drill-3",
    "b1d-construye-reglas-casa",
    "Frase a frase: las normas de la residencia",
    "Construye normas completas con es importante que / quiero que / preferimos que + subjuntivo.",
    "7 min",
    [
      sec(
        "Recuerda la regla: una norma = expresión + que + subjuntivo",
        [
          "Recuerda: una norma no describe lo que pasa, dice lo que alguien quiere que pase. Por eso las expresiones de voluntad o valoración (queremos que, es importante que, es necesario que, preferimos que) llevan el verbo siguiente en subjuntivo.",
          "Una residencia de estudiantes escribe sus normas: «Queremos que todos respeten el silencio después de las once. Es importante que limpiéis la cocina. Preferimos que no traigáis animales.» Ojo: nadie y cada uno van con verbo en singular (que nadie fume).",
        ],
        [
          ["Queremos que respetéis el silencio.", "We want you to respect the quiet hours. (voluntad → subjuntivo)"],
          ["Es necesario que nadie deje la puerta abierta.", "Nobody must leave the door open. (nadie → singular)"],
        ],
        [
          fb("Completa la norma nueva.", "Es importante que los residentes ___ la luz al salir. (apagar)", "apaguen", "Es importante que + subjuntivo; apagar es -gar: g → gu delante de e, apaguen."),
        ]
      ),
    ],
    [
      fb("Norma.", "Es importante que ___ la cocina después de usarla. (limpiar, vosotros)", "limpiéis", "Es importante que + subjuntivo: limpiar → limpiéis."),
      fb("Norma.", "Preferimos que no ___ animales. (traer, vosotros)", "traigáis", "El subjuntivo copia la forma yo: traigo → traigáis."),
      fb("Norma.", "Es necesario que ___ la puerta con llave. (cerrar, ustedes)", "cierren", "Cerrar cambia e → ie cuando el acento cae en la raíz: cierren."),
      fb("Norma.", "Queremos que nadie ___ en las habitaciones. (fumar)", "fume", "Nadie va con verbo en singular: que nadie fume."),
      fb("Norma.", "Es mejor que ___ la ropa los fines de semana. (lavar, vosotros)", "lavéis", "Es mejor que + subjuntivo: lavar → lavéis."),
      mc(
        "«Es importante que ___ puntuales en la cena.» (ser, vosotros)",
        ["seáis", "sois", "sed", "estéis"],
        0,
        "«Es importante que» pide subjuntivo, y ser puntual va con ser: seáis. «Sois» es indicativo, «sed» es el imperativo y «estéis» es de otro verbo (estar)."
      ),
      toEs("No hagáis ruido en el pasillo.", "Es importante que no hagáis ruido en el pasillo.", "La orden se convierte en norma con es importante que + subjuntivo; la forma es la misma que en el mandato negativo: no hagáis.", [], "Transforma el mandato en una norma con «Es importante que...»."),
      toEs("Los residentes reciclan el plástico.", "Queremos que los residentes reciclen el plástico.", "Con queremos que, lo que es un hecho pasa a ser un deseo: reciclan → reciclen.", [], "Convierte la frase en una norma con «Queremos que...»."),
      toEs("«Es necesario que cada uno saca su basura antes de las nueve.»", "Es necesario que cada uno saque su basura antes de las nueve.", "Es necesario que pide subjuntivo; sacar es -car (c → qu delante de e) y cada uno va en singular: saque.", [], "Corrige la norma."),
      toEs("«Preferimos que nadie usen la lavadora de noche.»", "Preferimos que nadie use la lavadora de noche.", "Nadie es singular, así que el verbo también: use.", ["Preferimos que nadie use la lavadora por la noche."], "Corrige la norma."),
      toEs("We want everyone to recycle.", "Queremos que todos reciclen.", "Querer que + subjuntivo: todos reciclen.", ["Queremos que todo el mundo recicle."]),
      {
        type: "write",
        prompt: "Escribe tres normas para tu casa o tu piso compartido (25-50 palabras), cada una con una expresión distinta: queremos que, es importante que, preferimos que.",
        minWords: 25,
        maxWords: 50,
        rubric: ["Tres normas con tres expresiones distintas", "Subjuntivo después de que", "Al menos una norma negativa"],
        modelAnswer: "Queremos que todos laven sus platos después de cenar. Es importante que nadie ponga música alta después de las once. Preferimos que no traigáis invitados entre semana sin avisar.",
        explanation: "Cada expresión de voluntad o valoración lleva subjuntivo: laven, ponga (de pongo), traigáis (de traigo).",
      },
    ]
  ),
  L(
    "subjunctive-formation-drill-3",
    "b1d-practica-mezclada-formacion",
    "Práctica mezclada: formación del subjuntivo en contexto",
    "Frases reales con todos los tipos de formas: regulares, raíz, ortografía e irregulares.",
    "8 min",
    [
      sec(
        "Recuerda la regla: del yo al subjuntivo",
        [
          "Recuerda: en la vida real no aparecen las formas en orden: hay que producirlas al vuelo. Parte siempre de la forma yo del presente (salgo, pienso, busco), cambia la vocal (-ar → e, -er/-ir → a) y revisa tres cosas: ¿es uno de los seis especiales (sea, esté, vaya, sepa, dé, haya)?, ¿hay cambio de raíz?, ¿hace falta cambiar la ortografía para conservar el sonido?",
        ],
        [
          ["Espero que sepas lo que haces.", "I hope you know what you're doing. (saber: uno de los seis)"],
          ["Ojalá que encuentres trabajo pronto.", "I hope you find a job soon. (encuentro → encuentres)"],
        ],
        [
          fb("Completa.", "Quiero que ___ más a tus abuelos. (visitar, tú)", "visites", "Visitar es regular: visito → visit- + es."),
          mc(
            "Aplica la regla a un verbo nuevo: «Es mejor que ___ la ventana.» (abrir, tú)",
            ["abras", "abres", "abrirás", "abrías"],
            0,
            "Abrir es -ir regular: abro → abr- + as. «Abres» es indicativo, «abrirás» es futuro y «abrías» es imperfecto."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "Espero que el tren no ___ retraso. (tener)", "tenga", "Tengo → teng- + a: tenga."),
      fb("Completa.", "Prefiero que ___ nosotros primero. (empezar)", "empecemos", "Empezar: en nosotros no hay diptongo, pero z → c delante de e: empecemos."),
      fb("Completa.", "Quiero que me ___ la verdad. (decir, tú)", "digas", "Digo → dig- + as: digas."),
      fb("Completa.", "Esperamos que ___ un buen fin de semana. (pasar, vosotros)", "paséis", "Pasar es regular: paséis (vosotros lleva tilde)."),
      fb("Completa.", "Ojalá que no ___ frío en la montaña. (hacer)", "haga", "Hago → haga. Hacer frío es impersonal: siempre en singular."),
      fb("Completa.", "Espero que ___ bien la noticia. (tomarse, ellos)", "se tomen", "Verbo pronominal: el se va delante del subjuntivo (tomen)."),
      mc(
        "«Quiero que ___ a la fiesta.» (venir, vosotros)",
        ["vengáis", "venís", "venid", "vinieron"],
        0,
        "El subjuntivo sale de la forma yo (vengo): vengáis. «Venís» es indicativo, «venid» es imperativo y «vinieron» es pretérito."
      ),
      toEs("Espero que tú vuelvas pronto.", "Espero que nosotros volvamos pronto.", "En nosotros el acento va a la terminación y desaparece el diptongo: vuelvas → volvamos.", ["Espero que volvamos pronto."], "Cambia a nosotros."),
      toEs("Busco un piso barato.", "Es importante que busque un piso barato.", "Es importante que + subjuntivo; buscar cambia c → qu delante de e: busque.", ["Es importante que yo busque un piso barato."], "Transforma la frase empezando con «Es importante que...»."),
      toEs("«Ojalá que mis hijos durman bien esta noche.»", "Ojalá que mis hijos duerman bien esta noche.", "Dormir cambia o → ue cuando el acento cae en la raíz (DUER-man). La u solo aparece en nosotros y vosotros.", [], "Corrige la frase."),
      toEs("«Es posible que no haiga clase mañana.»", "Es posible que no haya clase mañana.", "El subjuntivo de haber (hay) es haya. «Haiga» es una forma vulgar que no se acepta en la lengua estándar.", [], "Corrige la frase."),
      toEs("I hope it doesn't snow tomorrow.", "Espero que no nieve mañana.", "Esperar que + subjuntivo; nevar cambia e→ie: nieve.", ["Ojalá no nieve mañana."]),
    ]
  ),
  L(
    "subjunctive-formation-drill-3",
    "b1d-elige-explica-formacion",
    "Elige y explica: ¿por qué esta forma?",
    "Elige el subjuntivo correcto y la regla que lo produce: raíz, ortografía, irregular o yo irregular.",
    "7 min",
    [
      sec(
        "Recuerda la regla: cuatro tipos de forma",
        [
          "Recuerda: casi todo subjuntivo se explica con una de cuatro reglas. 1) Yo irregular: lo raro del yo pasa a todas las personas (tengo → tenga). 2) Raíz: el diptongo aparece donde cae el acento (pienso → piense, pero pensemos). 3) Ortografía: se cambia la letra para conservar el sonido (busco → busque). 4) Irregular total: los seis cuyo yo no acaba en -o (ir → vaya).",
          "Saber qué regla actúa te ayuda a no inventar formas y a corregirte solo.",
        ],
        [
          ["Conozco → conozca (yo irregular).", "The yo form keeps its -zc-."],
          ["Juego → juegue (raíz + ortografía).", "Two rules at once: u → ue and g → gu."],
        ],
        [
          mc(
            "«Quiero que me ___» (conocer). ¿Forma y regla?",
            ["conozcas — yo irregular", "conoces — regular", "conozas — ortografía", "conocías — imperfecto"],
            0,
            "El subjuntivo sale de la forma yo, que es irregular: conozco → conozcas. «Conoces» es indicativo, «conozas» pierde la c de conozco y «conocías» es imperfecto."
          ),
        ]
      ),
    ],
    [
      mc(
        "«Espero que ___ temprano.» (salir, tú)",
        ["salgas — yo irregular", "sales — indicativo", "salas — regular", "saldrás — futuro"],
        0,
        "El subjuntivo sale de la forma yo irregular: salgo → salgas. «Sales» es indicativo, «salas» olvida la g de salgo y «saldrás» es futuro."
      ),
      mc(
        "«Es mejor que ___ la cuenta tú.» (pagar)",
        ["pagues — ortografía", "pagas — indicativo", "pages — regular", "pagaras — imperfecto"],
        0,
        "Los verbos en -gar añaden u delante de e para conservar el sonido: pagues. «Pagas» es indicativo, «pages» cambiaría el sonido a /x/ y «pagaras» es imperfecto."
      ),
      mc(
        "«Quiero que ___ contigo.» (ir, ellos)",
        ["vayan — irregular total", "van — indicativo", "igan — yo irregular", "iran — futuro"],
        0,
        "Ir es totalmente irregular en subjuntivo: vaya, vayas, vayan… «Van» es indicativo, «igan» no existe e «iran» se confunde con el futuro (irán)."
      ),
      mc(
        "«Prefiero que ___ tú.» (elegir)",
        ["elijas — raíz + ortografía", "eliges — indicativo", "elegas — regular", "elijes — mezcla"],
        0,
        "Elegir cambia e→i (-ir) y g → j delante de a para conservar el sonido: elijas. «Eliges» es indicativo, «elegas» no hace ninguno de los dos cambios y «elijes» mezcla la j con la terminación de indicativo."
      ),
      mc(
        "Aplica las reglas a un verbo nuevo: «Ojalá que el ruido no ___ al bebé.» (molestar). ¿Forma y regla?",
        ["moleste — regular, sin cambios", "molesta — indicativo", "molesté — pretérito", "molesten — irregular total"],
        0,
        "Molestar es un -ar regular: molesto → moleste. «Molesta» es indicativo, «molesté» es pretérito y «molesten» es de ellos (y no es irregular)."
      ),
      fb("Completa.", "Espero que ___ el problema. (entender, vosotros)", "entendáis", "Regla de raíz: en vosotros el acento va a la terminación, así que no hay diptongo: entendáis."),
      fb("Completa.", "Quiero que ___ la mesa. (poner, tú)", "pongas", "Yo irregular: pongo → pongas."),
      toEs("Es importante que tú almuerces bien.", "Es importante que nosotros almorcemos bien.", "Dos reglas: en nosotros desaparece el diptongo (raíz) y se mantiene z → c delante de e (ortografía): almorcemos.", ["Es importante que almorcemos bien."], "Cambia a nosotros."),
      toEs("Espero que tú estés tranquilo.", "Espero que ustedes estén tranquilos.", "Estar es uno de los seis: esté, estén, siempre con tilde. El adjetivo también pasa al plural.", ["Espero que estén tranquilos."], "Cambia a ustedes."),
      toEs("«Quiero que me traduces esta carta.»", "Quiero que me traduzcas esta carta.", "Regla del yo irregular: traduzco → traduzcas. «Traduces» es indicativo.", [], "Corrige la frase."),
      toEs("«Es raro que los niños no jugen fuera.»", "Es raro que los niños no jueguen fuera.", "Jugar necesita dos reglas: u → ue (raíz acentuada) y g → gu delante de e (ortografía): jueguen.", [], "Corrige la frase."),
      toEs("I want you to know that I love you.", "Quiero que sepas que te quiero.", "Querer que + subjuntivo; saber es irregular total: sepas.", []),
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
        "Recuerda la regla: afirmar o dudar",
        [
          "Recuerda la regla: lo que va después de «que» depende de cómo lo presentas. Si lo das por cierto (creo que, pienso que, estoy seguro de que, es verdad que), va en indicativo. Si lo niegas o lo pones en duda (no creo que, no pienso que, dudo que, no estoy seguro de que), va en subjuntivo.",
          "Por eso la misma información cambia de modo al negar la opinión: Creo que viene → No creo que venga. Ojo: «dudo» ya expresa duda sin «no», y «no dudo que» vuelve a la certeza (indicativo).",
        ],
        [
          ["Creo que tienes razón. / No creo que tengas razón.", "I think you're right. / I don't think you're right."],
          ["Dudo que llueva hoy.", "I doubt it'll rain today."],
        ],
        [
          fb("Cambia a negativa.", "Creo que es fácil. → No creo que ___ fácil.", "sea", "«No creo que» niega la opinión y pide subjuntivo; ser es irregular: sea. «Es» seguiría presentándolo como cierto."),
          mc(
            "Aplica la regla: «No dudo que ___ la verdad.» (decir, él)",
            ["dice", "diga", "decir", "digan"],
            0,
            "«No dudo que» significa «estoy seguro de que»: certeza, así que indicativo (dice). «Diga» sería correcto con «dudo que», sin el «no»; «decir» es infinitivo y «digan» no concuerda con él."
          ),
        ]
      ),
    ],
    [
      fb("Cambia a negativa.", "Creo que tienen dinero. → No creo que ___ dinero.", "tengan", "«No creo que» → subjuntivo, formado desde tengo: tengan. «Tienen» mantendría la certeza."),
      fb("Cambia a negativa.", "Pienso que va a llover. → No pienso que ___ a llover.", "vaya", "«No pienso que» → subjuntivo; ir es irregular: vaya."),
      fb("Cambia a afirmativa.", "No creo que sepa la respuesta. → Creo que ___ la respuesta.", "sabe", "«Creo que» afirmativo expresa certeza y lleva indicativo: sabe. «Sepa» solo va con la duda."),
      fb("Cambia «Dudo que» por «Estoy seguro de que».", "Dudo que esté en casa. → Estoy seguro de que ___ en casa.", "está", "«Estoy seguro de que» expresa certeza → indicativo: está, sin la tilde final de esté."),
      fb("Completa.", "Dudo que el restaurante ___ abierto a esta hora. (estar)", "esté", "Dudar pone en duda lo que sigue: subjuntivo, esté. «Está» lo afirmaría."),
      mc(
        "«No estoy seguro de que ___ razón.» (tener, tú)",
        ["tengas", "tienes", "tener", "tendrás"],
        0,
        "«No estar seguro de que» expresa duda, así que lleva subjuntivo: tengas. «Tienes» es indicativo, «tener» es infinitivo y «tendrás» es futuro."
      ),
      ms(
        "¿Qué expresiones llevan subjuntivo?",
        ["no creo que", "dudo que", "creo que", "no pienso que", "no dudo que"],
        [0, 1, 3],
        "No creo que, dudo que y no pienso que expresan duda o negación de una opinión: subjuntivo. «Creo que» y «no dudo que» presentan algo como cierto y llevan indicativo."
      ),
      toEs("I don't think he's coming today.", "No creo que venga hoy.", "«I don't think» = no creo que + subjuntivo: venga. El inglés usa «is coming», pero en español la duda manda.", ["No creo que él venga hoy."]),
      { type: "fill-blank", prompt: "¿Cómo se dicen en español las palabras en negrita?", sentence: "No creo que mi hermano ___ la verdad.", answer: "diga", en: "I don't think my brother [is telling] the truth.", explanation: "«No creo que» niega la opinión: subjuntivo (diga). «Dice» es el error típico." },
      toEs("I think the train leaves at six.", "Creo que el tren sale a las seis.", "Creo que en afirmativo expresa certeza: indicativo (sale). «Salga» solo iría con «no creo que».", ["Pienso que el tren sale a las seis."]),
      toEs("No creemos que el hotel tiene piscina.", "No creemos que el hotel tenga piscina.", "Creer en negativo pide subjuntivo: tenga. «Tiene» es indicativo y choca con la duda.", ["No creemos que el hotel tenga alberca.", "No creemos que el hotel tenga pileta."], "Corrige la frase."),
      toEs("I'm sure Lucía knows the way.", "Estoy seguro de que Lucía sabe el camino.", "Estar seguro de que = certeza: indicativo (sabe), no «sepa».", ["Estoy segura de que Lucía sabe el camino."]),
      toEs("Está segura de que el autobús para aquí.", "No está segura de que el autobús pare aquí.", "Al negar «estar segura», la certeza se convierte en duda: para → pare (subjuntivo).", ["No está segura de que el bus pare aquí."], "Cambia la frase a negativa."),
      { type: "fill-blank", prompt: "¿Cómo se dicen en español las palabras en negrita?", sentence: "Dudo que ___ tiempo para ver la ciudad.", answer: "tengamos", en: "I doubt we['ll have] time to see the city.", explanation: "Dudar pide subjuntivo; el presente de subjuntivo también expresa futuro: tengamos." },
      wo("No pienso que sea una buena película", "No pienso que + subjuntivo (sea); con «pienso que» sería «es».", "I don't think it's a good movie"),
      mc("«Creo que ___ a nevar esta noche.»", ["va", "vaya", "ir", "vayan"], 0, "Creo que en afirmativo expresa certeza: indicativo (va). «Vaya» y «vayan» son subjuntivo, propios de la duda, e «ir» es infinitivo."),
      toEs("Pienso que este libro sea muy aburrido.", "Pienso que este libro es muy aburrido.", "«Pienso que» en afirmativo presenta la opinión como cierta: indicativo (es). El subjuntivo solo aparece al negarlo: no pienso que sea.", [], "Corrige la frase."),
      toEs("No creo que los niños duerman bien en el avión.", "Creo que los niños duermen bien en el avión.", "Sin el «no», la opinión es cierta para quien habla: duerman → duermen (indicativo).", [], "Cambia la frase a afirmativa."),
      toEs("My parents think I work too much, but I doubt it's a problem.", "Mis padres creen que trabajo demasiado, pero dudo que sea un problema.", "Creer (afirmativo) → indicativo (trabajo); dudar → subjuntivo (sea).", ["Mis padres piensan que trabajo demasiado, pero dudo que sea un problema."]),
      { type: "speak", prompt: "Responde en voz alta: da una opinión sobre el tiempo de mañana y otra que no crees.", text: "Creo que mañana va a hacer sol, pero no creo que haga calor.", explanation: "Creo que → indicativo (va a hacer); no creo que → subjuntivo (haga)." },
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
        "Recuerda la regla: reaccionar pide subjuntivo",
        [
          "Recuerda la regla: me alegro de que, siento que (lo lamento), me molesta que, me preocupa que, tengo miedo de que y me sorprende que expresan una reacción ante lo que hace otra persona. Esa acción va en subjuntivo aunque sea un hecho conocido, porque no la informas: la valoras. Siento que estés enfermo.",
          "Si quien siente y quien hace la acción es la misma persona, no hay «que»: se usa el infinitivo. Me alegro de verte (yo me alegro, yo te veo) frente a Me alegro de que me veas (tú me ves).",
        ],
        [
          ["Me alegro de que estés aquí.", "I'm glad you're here. (two subjects)"],
          ["Me alegro de estar aquí.", "I'm glad to be here. (one subject → infinitive)"],
          ["Me molesta que la gente grite.", "It bothers me when people shout."],
        ],
        [
          fb("Aplica la regla.", "Me alegro de que ___ el trabajo. (conseguir, tú)", "consigas", "Alegrarse de que + otro sujeto → subjuntivo. Conseguir cambia e → i y gu → g delante de a: consigas."),
          mc(
            "«Tengo miedo de ___ el examen.» (yo suspendo)",
            ["suspender", "que suspenda", "que suspendo", "suspenda"],
            0,
            "Quien tiene miedo y quien suspende es la misma persona: infinitivo, sin «que». «Que suspenda» sugiere que suspende otra persona, «que suspendo» usa indicativo con una emoción y «suspenda» solo no puede ir detrás de «de»."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "Siento que no ___ venir a la fiesta. (poder, tú)", "puedas", "Sentir que expresa pena: subjuntivo. Poder cambia o → ue: puedas. «Puedes» sería informar, no lamentar."),
      fb("Completa.", "Me preocupa que mi abuelo ___ solo. (vivir)", "viva", "Preocupar que + subjuntivo: viva (-ir → a). Es un hecho, pero lo valoro."),
      fb("Completa.", "Nos sorprende que no ___ nadie. (haber)", "haya", "Sorprender que pide subjuntivo; haber → haya. «Hay» es indicativo."),
      fb("Completa.", "Tengo miedo de que se ___ el avión. (retrasar)", "retrase", "Tener miedo de que + subjuntivo: retrase (-ar → e). El miedo se refiere al futuro, pero no se usa el futuro."),
      fb("Completa.", "Me molesta que mis vecinos ___ música tan alta. (poner)", "pongan", "Molestar que + subjuntivo, formado desde pongo: pongan."),
      mc(
        "«Me alegro de ___ aquí.» (yo)",
        ["estar", "que esté", "que estoy", "esté"],
        0,
        "Cuando quien se alegra y quien está es la misma persona (yo), se usa el infinitivo: me alegro de estar. «Que esté» y «que estoy» introducen otro sujeto, y «esté» solo no puede seguir a «de»."
      ),
      mt(
        "Relaciona el comienzo con el final.",
        [
          ["Me encanta que…", "…me escribas cartas."],
          ["Me da pena que…", "…te vayas tan pronto."],
          ["Me pone nervioso que…", "…lleguéis tarde."],
          ["Me alegro de…", "…verte otra vez."],
        ],
        "Me encanta que, me da pena que y me pone nervioso que reaccionan a lo que hace otra persona: subjuntivo (escribas, te vayas, lleguéis). «Me alegro de verte» tiene un solo sujeto: infinitivo."
      ),
      toEs("I'm sorry you're sick. (tú)", "Siento que estés enfermo.", "«Sentir que» expresa emoción → subjuntivo: estés (estar para la salud), no «estás».", ["Siento que estés enferma.", "Lamento que estés enfermo.", "Lamento que estés enferma."]),
      { type: "fill-blank", prompt: "¿Cómo se dicen en español las palabras en negrita?", sentence: "Me alegro de que mis primos ___ a vivir cerca.", answer: "vengan", en: "I'm glad my cousins [are coming] to live nearby.", explanation: "Me alegro de que + subjuntivo: vengan, no «vienen»." },
      toEs("Me alegro de que yo te vea otra vez.", "Me alegro de verte otra vez.", "Quien se alegra y quien ve es la misma persona: infinitivo, sin «que». «Que yo te vea» solo se usa con dos sujetos distintos.", ["Me alegro de volver a verte.", "Me alegro de verte de nuevo."], "Corrige la frase."),
      toEs("A mi padre le molesta que llegamos tarde.", "A mi padre le molesta que lleguemos tarde.", "Molestar que + subjuntivo: lleguemos (g → gu delante de e). «Llegamos» informa en vez de reaccionar.", ["A mi papá le molesta que lleguemos tarde."], "Corrige la frase."),
      { type: "fill-blank", prompt: "¿Cómo se dicen en español las palabras en negrita?", sentence: "Nos preocupa que el bebé no ___ bien.", answer: "duerma", en: "It worries us that the baby [isn't sleeping] well.", explanation: "Preocupar que + subjuntivo; dormir cambia o → ue: duerma." },
      toEs("I'm afraid it will rain during the wedding.", "Tengo miedo de que llueva durante la boda.", "Tener miedo de que + subjuntivo: llueva. No uses el futuro («lloverá»).", ["Temo que llueva durante la boda.", "Me da miedo que llueva durante la boda."]),
      toEs("Sé que no te gusta el chocolate.", "Me sorprende que no te guste el chocolate.", "«Sé que» informa (indicativo: gusta); «me sorprende que» reacciona (subjuntivo: guste).", ["Me extraña que no te guste el chocolate."], "Cambia «Sé que» por «Me sorprende que»."),
      { type: "fill-blank", prompt: "¿Cómo se dicen en español las palabras en negrita?", sentence: "Siento que no ___ entradas para el concierto.", answer: "haya", en: "I'm sorry there [aren't] any tickets for the concert.", explanation: "Siento que + subjuntivo de haber: haya (no «hay»)." },
      toEs("A mi madre le preocupa viajar sola.", "A mi madre le preocupa que viaje sola.", "Con otro sujeto (yo viajo), el infinitivo pasa a que + subjuntivo: viaje.", ["A mi madre le preocupa que yo viaje sola.", "A mi madre le preocupa que viaje solo.", "A mi mamá le preocupa que viaje sola."], "Cambia la frase: ahora la que viaja sola soy yo."),
      toEs("We're glad our children speak two languages.", "Nos alegramos de que nuestros hijos hablen dos idiomas.", "Alegrarse de que + subjuntivo: hablen.", ["Nos alegra que nuestros hijos hablen dos idiomas.", "Nos alegramos de que nuestros hijos hablen dos lenguas.", "Nos alegra que nuestros hijos hablen dos lenguas."]),
      toEs("Le molesta que sus compañeros hablan tanto en las reuniones.", "Le molesta que sus compañeros hablen tanto en las reuniones.", "Molestar que + subjuntivo: hablen. «Hablan» es indicativo.", ["Le molesta que sus colegas hablen tanto en las reuniones."], "Corrige la frase."),
      { type: "fill-blank", prompt: "¿Cómo se dicen en español las palabras en negrita?", sentence: "Tengo miedo de que mi jefe ___ mi error.", answer: "descubra", en: "I'm afraid my boss [will discover] my mistake.", explanation: "Tener miedo de que + subjuntivo; el presente de subjuntivo cubre el futuro: descubra.", altAnswers: ["vea"] },
      wo("Me sorprende que tus padres no sepan nada", "Sorprender que + subjuntivo irregular de saber: sepan.", "It surprises me that your parents don't know anything"),
      wo("Siento mucho que tengas que trabajar este fin de semana", "Siento que + subjuntivo: tengas que (de tengo).", "I'm very sorry you have to work this weekend"),
      ms(
        "¿Qué frases están bien?",
        ["Me preocupa que no comas.", "Me preocupa que no comes.", "Me alegro de verte.", "Me alegro de que te veo.", "Siento que te vayas."],
        [0, 2, 4],
        "Con otro sujeto, la emoción pide subjuntivo (comas, te vayas); con el mismo sujeto, infinitivo (verte). «Comes» y «te veo» son indicativo después de una emoción."
      ),
      toEs("It worries me that my friends don't understand why I'm leaving the company.", "Me preocupa que mis amigos no entiendan por qué me voy de la empresa.", "Preocupar que + subjuntivo: entiendan (e → ie). «Por qué me voy» es una pregunta indirecta: indicativo.", ["Me preocupa que mis amigos no entiendan por qué dejo la empresa."]),
      { type: "speak", prompt: "Responde en voz alta: reacciona a dos noticias de un amigo: tiene un trabajo nuevo, pero se muda a otra ciudad.", text: "Me alegro de que tengas un trabajo nuevo, pero me da pena que te mudes tan lejos.", explanation: "Alegrarse de que y dar pena que piden subjuntivo: tengas, te mudes." },
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
        "Recuerda la regla: informar o reaccionar",
        [
          "Recuerda la regla: el mismo hecho puede informarse o valorarse. Sé que, veo que, es verdad que, me han dicho que, he leído que transmiten información: indicativo. Me alegro de que, qué pena que, me sorprende que, me molesta que expresan una reacción: subjuntivo.",
          "La reacción pide subjuntivo incluso cuando el hecho es real y conocido, porque lo que importa no es si es verdad, sino que lo valoras: Sé que vienes (información) / Me alegro de que vengas (reacción).",
        ],
        [
          ["Veo que estás cansado. / Siento que estés cansado.", "I see you're tired. / I'm sorry you're tired."],
          ["He leído que el parque cierra en agosto. / Qué pena que cierre en agosto.", "I've read the park closes in August. / What a shame it closes in August."],
        ],
        [
          mc(
            "«Sé que tu hermano ___ en Londres.»",
            ["vive", "viva", "vivir", "vivía siempre"],
            0,
            "«Saber que» presenta información cierta, así que lleva indicativo: vive. «Viva» es subjuntivo, «vivir» es infinitivo y «vivía siempre» cambia el sentido al pasado."
          ),
          fb("Aplica la regla.", "Me parece genial que mis amigos ___ a verme. (venir)", "vengan", "«Me parece genial que» valora el hecho: reacción, subjuntivo (vengan). Cualquier valoración funciona igual que «me alegro de que»; «vienen» solo informaría."),
        ]
      ),
    ],
    [
      mc(
        "«Me encanta que tu hermano ___ en Londres.»",
        ["viva", "vive", "vivirá", "vivir"],
        0,
        "«Me encanta que» expresa una reacción emocional ante un hecho: subjuntivo, viva. «Vive» y «vivirá» son indicativo, y «vivir» solo sirve con el mismo sujeto."
      ),
      fb("Completa.", "Veo que ___ mucho. (trabajar, tú)", "trabajas", "«Ver que» informa de lo que observas: indicativo, trabajas."),
      fb("Completa.", "Me preocupa que ___ tanto. (trabajar, tú)", "trabajes", "«Me preocupa que» reacciona: subjuntivo, trabajes, aunque sea un hecho."),
      fb("Completa.", "Es verdad que el pan ___ caro. (estar)", "está", "«Es verdad que» confirma un hecho: indicativo, está."),
      fb("Completa.", "Qué pena que el pan ___ tan caro. (estar)", "esté", "«Qué pena que» valora el mismo hecho: subjuntivo, esté."),
      fb("Completa.", "Me han dicho que ___ un bebé. (tener, vosotros)", "tenéis", "«Decir que» transmite información: indicativo, tenéis."),
      fb("Completa.", "¡Qué bien que ___ un bebé! (tener, vosotros)", "tengáis", "«Qué bien que» es una reacción: subjuntivo, tengáis (de tengo)."),
      toEs("I know you're busy, and I'm sorry you're so busy. (tú)", "Sé que estás ocupado y siento que estés tan ocupado.", "«Sé que» informa (indicativo: estás); «siento que» reacciona (subjuntivo: estés).", ["Sé que estás ocupada y siento que estés tan ocupada."]),
      { type: "fill-blank", prompt: "¿Cómo se dicen en español las palabras en negrita?", sentence: "Sé que tu madre ___ en un hospital.", answer: "trabaja", en: "I know your mother [works] in a hospital.", explanation: "«Sé que» informa de un hecho: indicativo, trabaja." },
      { type: "fill-blank", prompt: "¿Cómo se dicen en español las palabras en negrita?", sentence: "Me sorprende que tu padre ___ los domingos.", answer: "trabaje", en: "It surprises me that your father [works] on Sundays.", explanation: "«Me sorprende que» es una reacción: subjuntivo, aunque el hecho sea real." },
      toEs("Veo que tienes un coche nuevo.", "¡Qué bien que tengas un coche nuevo!", "Pasas de informar a reaccionar: tienes (indicativo) → tengas (subjuntivo).", ["¡Qué bueno que tengas un coche nuevo!", "¡Qué bien que tengas un carro nuevo!", "¡Qué bueno que tengas un carro nuevo!", "¡Qué bien que tengas un auto nuevo!", "¡Qué bueno que tengas un auto nuevo!"], "Cambia «Veo que» por «¡Qué bien que…!»."),
      toEs("Es verdad que el autobús no pase los domingos.", "Es verdad que el autobús no pasa los domingos.", "«Es verdad que» confirma un hecho: indicativo (pasa). El subjuntivo solo aparece si reaccionas: me molesta que no pase.", ["Es verdad que el bus no pasa los domingos."], "Corrige la frase."),
      toEs("It bothers me that the bus doesn't come on Sundays.", "Me molesta que el autobús no pase los domingos.", "«Me molesta que» valora el hecho: subjuntivo (pase), no «pasa».", ["Me molesta que el autobús no venga los domingos.", "Me molesta que el bus no pase los domingos."]),
      { type: "fill-blank", prompt: "¿Cómo se dicen en español las palabras en negrita?", sentence: "He leído que el museo ___ gratis los martes.", answer: "es", en: "I've read that the museum [is] free on Tuesdays.", explanation: "Informar de lo que has leído: indicativo, es." },
      { type: "fill-blank", prompt: "¿Cómo se dicen en español las palabras en negrita?", sentence: "¡Qué bien que el museo ___ gratis los martes!", answer: "sea", en: "How great that the museum [is] free on Tuesdays!", explanation: "Reacción con ¡qué bien que…!: subjuntivo (sea)." },
      toEs("Sé que no te guste el fútbol.", "Sé que no te gusta el fútbol.", "«Saber que» es información: indicativo (gusta). «Guste» iría con una reacción como «qué pena que».", ["Sé que no te gusta el futbol."], "Corrige la frase."),
      toEs("What a shame you don't like football! (tú)", "¡Qué pena que no te guste el fútbol!", "¡Qué pena que…! es una reacción: subjuntivo (guste).", ["¡Qué lástima que no te guste el fútbol!", "¡Qué pena que no te guste el futbol!", "¡Qué lástima que no te guste el futbol!"]),
      mc("«Veo que tus hijos ___ mucho.»", ["leen", "lean", "leer", "leyendo"], 0, "«Veo que» informa: indicativo (leen). «Lean» sería una reacción, «leer» un infinitivo sin sujeto propio y «leyendo» un gerundio sin verbo."),
      mc("«Me alegra que tus hijos ___ tanto.»", ["lean", "leen", "leer", "leerán"], 0, "«Me alegra que» reacciona: subjuntivo (lean). «Leen» y «leerán» informan, y «leer» solo sirve con el mismo sujeto."),
      toEs("Mi vecina dice que su hijo se casa en mayo.", "Mi vecina se alegra de que su hijo se case en mayo.", "«Decir que» informa (se casa); «alegrarse de que» reacciona (se case).", ["A mi vecina le alegra que su hijo se case en mayo."], "Cambia «dice que» por «se alegra de que»."),
      wo("Veo que estás preocupado por el examen", "«Veo que» informa: indicativo (estás).", "I see you're worried about the exam"),
      wo("Me da pena que estés preocupado por el examen", "«Me da pena que» reacciona: subjuntivo (estés).", "It makes me sad that you're worried about the exam"),
      ms(
        "¿Qué comienzos piden subjuntivo?",
        ["He leído que…", "Qué raro que…", "Me han dicho que…", "Me encanta que…", "Veo que…"],
        [1, 3],
        "«Qué raro que» y «me encanta que» valoran el hecho: subjuntivo. «He leído que», «me han dicho que» y «veo que» transmiten información: indicativo."
      ),
      toEs("I know they work a lot, and it worries me that they don't rest.", "Sé que trabajan mucho y me preocupa que no descansen.", "Sé que → indicativo (trabajan); me preocupa que → subjuntivo (descansen).", ["Sé que trabajan mucho, y me preocupa que no descansen."]),
      toEs("It's true that Carlos speaks Spanish well, but it surprises me that he never speaks it in class.", "Es verdad que Carlos habla bien español, pero me sorprende que nunca lo hable en clase.", "Es verdad que → indicativo (habla); me sorprende que → subjuntivo (hable).", ["Es verdad que Carlos habla español bien, pero me sorprende que nunca lo hable en clase.", "Es cierto que Carlos habla bien español, pero me sorprende que nunca lo hable en clase.", "Es verdad que Carlos habla bien español, pero me sorprende que no lo hable nunca en clase.", "Es verdad que Carlos habla bien el español, pero me sorprende que nunca lo hable en clase."]),
      { type: "speak", prompt: "Responde en voz alta: informa de que tu amiga cambia de trabajo y reacciona a la noticia.", text: "Sé que mi amiga cambia de trabajo y me alegro de que esté contenta.", explanation: "«Sé que» → indicativo (cambia); «me alegro de que» → subjuntivo (esté)." },
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
        "Recuerda la regla: reaccionar a una noticia",
        [
          "Recuerda la regla: qué bien que…, qué pena que…, me alegro de que…, me extraña que…, me molesta que… valoran lo que le pasa a otra persona, así que lo que sigue va en subjuntivo, aunque la noticia sea real: ¡Qué bien que te cases!",
          "Son las frases que más usarás en conversación: cuando alguien te cuenta algo, reaccionas. Cuidado con gustar dentro de la reacción: concuerda con la cosa que gusta (me alegro de que te gusten las flores).",
        ],
        [
          ["¡Qué bien que tu hermana se case!", "How great that your sister is getting married!"],
          ["Me extraña que el jefe no diga nada.", "It's strange that the boss isn't saying anything."],
        ],
        [
          fb("Completa.", "¡Qué pena que no ___ venir! (poder, vosotros)", "podáis", "«Qué pena que» reacciona: subjuntivo, podáis (vosotros no cambia o → ue). «Podéis» solo informaría."),
          mc(
            "Aplica la regla: «Me alegro de que te ___ las flores.»",
            ["gusten", "gusta", "gustan", "guste"],
            0,
            "La reacción (me alegro de que) pide subjuntivo, y gustar concuerda con «las flores» (plural): gusten. «Gusta» y «gustan» son indicativo, y «guste» no concuerda con un plural."
          ),
        ]
      ),
    ],
    [
      toEs("How great that you're coming to Madrid! (tú)", "¡Qué bien que vengas a Madrid!", "«¡Qué bien que…!» expresa emoción → subjuntivo: vengas, no «vienes».", ["¡Qué bueno que vengas a Madrid!"]),
      toEs("It surprises me that she doesn't call.", "Me sorprende que no llame.", "«Me sorprende que» expresa emoción → subjuntivo: llame.", ["Me extraña que no llame.", "Me sorprende que ella no llame.", "Me extraña que ella no llame."]),
      toEs("Me alegro de que te gusta el regalo.", "Me alegro de que te guste el regalo.", "«Me alegro de que» pide subjuntivo; gustar concuerda con «el regalo»: te guste. «Gusta» es indicativo.", ["Me alegra que te guste el regalo."], "Corrige la frase."),
      toEs("It bothers me that nobody helps.", "Me molesta que nadie ayude.", "«Me molesta que» → subjuntivo: nadie ayude, no «ayuda».", []),
      fb("Completa.", "Me extraña que el director no ___ nada. (contestar)", "conteste", "«Extrañar que» expresa sorpresa: subjuntivo, conteste (-ar → e)."),
      fb("Completa.", "Es una lástima que ___ tan lejos. (vivir, tú)", "vivas", "«Es una lástima que» valora: subjuntivo, vivas (-ir → a)."),
      wo("Me hace mucha ilusión que vengáis a mi boda.", "«Me hace ilusión que» es una emoción: subjuntivo, vengáis (de vengo).", "I'm really excited that you're coming to my wedding."),
      toEs("Tu hermano no tiene trabajo ahora.", "¡Qué pena que tu hermano no tenga trabajo ahora!", "Al reaccionar con «qué pena que», tiene → tenga (subjuntivo).", ["¡Qué lástima que tu hermano no tenga trabajo ahora!", "¡Qué pena que tu hermano ahora no tenga trabajo!", "¡Qué lástima que tu hermano ahora no tenga trabajo!"], "Cambia la noticia en una reacción con «¡Qué pena que…!»."),
      { type: "fill-blank", prompt: "¿Cómo se dicen en español las palabras en negrita?", sentence: "Me molesta que mi compañero siempre ___ tarde a las reuniones.", answer: "llegue", en: "It bothers me that my colleague always [arrives] late to meetings.", explanation: "Me molesta que + subjuntivo; llegar → llegue (con -gue para mantener el sonido)." },
      { type: "fill-blank", prompt: "¿Cómo se dicen en español las palabras en negrita?", sentence: "Me alegro mucho de que te ___ a Valencia.", answer: "mudes", en: "I'm really glad you['re moving] to Valencia.", explanation: "Me alegro de que + subjuntivo: te mudes, no «te mudas»." },
      toEs("Me extraña que mis padres no contestan el teléfono.", "Me extraña que mis padres no contesten el teléfono.", "«Me extraña que» expresa sorpresa: subjuntivo, contesten.", ["Me extraña que mis padres no contesten al teléfono.", "Me extraña que mis padres no respondan al teléfono."], "Corrige la frase."),
      wo("Qué pena que no podamos vernos este verano", "¡Qué pena que…! + subjuntivo: podamos (nosotros no cambia o → ue).", "What a shame we can't see each other this summer"),
      ms(
        "Un amigo te dice: «Me han dado una beca.» ¿Qué reacciones están bien?",
        ["¡Enhorabuena! Me alegro de que estés contento.", "Me alegro de que te la dan.", "¡Qué bien que tengas una beca!", "Me alegro mucho por ti.", "¡Qué bien que tienes una beca!"],
        [0, 2, 3],
        "Las reacciones con «que» llevan subjuntivo: estés, tengas. «Me alegro mucho por ti» no tiene «que» y es correcta. «Te la dan» y «tienes» son indicativo después de una emoción."
      ),
      toEs("I'm glad you're happy in your new city, but it makes me sad that you live so far away. (tú, to a woman)", "Me alegro de que estés contenta en tu nueva ciudad, pero me da pena que vivas tan lejos.", "Dos reacciones con otro sujeto: me alegro de que + estés; me da pena que + vivas.", ["Me alegra que estés contenta en tu nueva ciudad, pero me da pena que vivas tan lejos.", "Me alegro de que estés feliz en tu nueva ciudad, pero me da pena que vivas tan lejos.", "Me alegro de que seas feliz en tu nueva ciudad, pero me da pena que vivas tan lejos.", "Me alegro de que estés contenta en tu ciudad nueva, pero me da pena que vivas tan lejos."]),
      { type: "speak", prompt: "Responde en voz alta: tu compañera de trabajo te cuenta que se va de viaje a México. Reacciona.", text: "¡Qué envidia! Me alegro de que puedas descansar unos días.", explanation: "Me alegro de que + subjuntivo: puedas (o → ue)." },
      { type: "speak", prompt: "Responde en voz alta: cuenta algo de tu semana que te ha molestado.", text: "Me molesta que mis vecinos hagan obras a las ocho de la mañana.", explanation: "Me molesta que + subjuntivo, desde hago: hagan." },
    ]
  ),
  L(
    "subjunctive-wishes-doubt-emotion-2",
    "b1d-ronda-disparadores",
    "Ronda rápida: ¿dispara el subjuntivo o no?",
    "Comienzos de frase: decide en un segundo si piden indicativo, subjuntivo o infinitivo.",
    "6 min",
    [
      sec(
        "Recuerda la regla: ¿qué dispara el subjuntivo?",
        [
          "Recuerda la regla: con dos sujetos, el subjuntivo aparece después de deseo (quiero que, espero que, prefiero que), duda o negación (dudo que, no creo que, no pienso que) y emoción (me alegra que, siento que, me molesta que). En todos esos casos lo que sigue no se afirma: se desea, se duda o se valora.",
          "El indicativo va con certeza: creo que, pienso que, sé que, estoy seguro de que, es verdad que. Y con un solo sujeto no hay «que»: infinitivo (quiero salir, espero tomar el bus).",
        ],
        [
          ["Espero que vengas. / Creo que vienes.", "I hope you come. / I think you're coming."],
          ["Prefiero caminar. / Prefiero que caminemos.", "I prefer to walk. / I'd rather we walk."],
        ],
        [
          mc(
            "«Estoy seguro de que…»",
            ["indicativo", "subjuntivo", "infinitivo", "imperativo"],
            0,
            "«Estoy seguro de que» expresa certeza, así que lleva indicativo: estoy seguro de que viene. El subjuntivo va con la duda; el infinitivo y el imperativo no siguen a «que» aquí."
          ),
          mc(
            "Aplica la regla: «Me fastidia que…»",
            ["subjuntivo", "indicativo", "infinitivo", "futuro"],
            0,
            "«Me fastidia que» es una emoción, como me molesta que: subjuntivo (me fastidia que llegues tarde). El indicativo y el futuro presentarían un hecho sin valorarlo, y el infinitivo exige un solo sujeto."
          ),
        ]
      ),
    ],
    [
      mc("«Dudo que…»", ["subjuntivo", "indicativo", "infinitivo", "futuro"], 0, "«Dudo que» expresa duda y lleva subjuntivo: dudo que venga. El indicativo va con certeza, el infinitivo con el mismo sujeto y el futuro no se usa tras «dudo que»: va el subjuntivo (dudo que llueva, no «dudo que lloverá»)."),
      mc("«Pienso que…»", ["indicativo", "subjuntivo", "infinitivo", "condicional"], 0, "«Pienso que» en afirmativo presenta tu opinión como cierta y lleva indicativo: pienso que tienes razón. En negativo (no pienso que) sí se usa subjuntivo."),
      mc("«Me molesta que…»", ["subjuntivo", "indicativo", "infinitivo", "pretérito"], 0, "«Me molesta que» expresa emoción ante lo que hace otro: subjuntivo, me molesta que hables alto. Indicativo y pretérito no se usan después de verbos de emoción."),
      mc("«Quiero… (yo mismo)»", ["infinitivo", "que + subjuntivo", "que + indicativo", "gerundio"], 0, "Cuando el sujeto es el mismo (yo quiero, yo hago), se usa el infinitivo: quiero salir. «Que + subjuntivo» es para otro sujeto (quiero que salgas), y ni «que + indicativo» ni el gerundio sirven aquí."),
      mc("«No pienso que…»", ["subjuntivo", "indicativo", "infinitivo", "imperativo"], 0, "«No pienso que» niega una opinión: hay duda, así que se usa subjuntivo: no pienso que sea fácil. El indicativo va con «pienso que» afirmativo."),
      mc("«Sé que…»", ["indicativo", "subjuntivo", "infinitivo", "imperativo"], 0, "«Sé que» presenta información segura, así que lleva indicativo: sé que viene. El subjuntivo va con duda, emoción o deseo."),
      fb("Completa.", "Prefiero que no ___ nada a nadie. (decir, tú)", "digas", "Preferir que + otro sujeto → subjuntivo, formado desde digo: digas."),
      { ...fb("Completa.", "Estoy seguro de que mañana ___ sol. (hacer, futuro)", "hará", "Certeza sobre el futuro → indicativo futuro: hará. Con «dudo que» iría «haga»."), altAnswers: ["va a hacer"] },
      { type: "fill-blank", prompt: "¿Cómo se dicen en español las palabras en negrita?", sentence: "Quiero que ___ conmigo al cine.", answer: "vengas", en: "I want you [to come] to the cinema with me.", explanation: "Querer que + otro sujeto: subjuntivo (vengas), no infinitivo." },
      { type: "fill-blank", prompt: "¿Cómo se dicen en español las palabras en negrita?", sentence: "Sé que ___ mucho trabajo esta semana.", answer: "tienes", en: "I know you [have] a lot of work this week.", explanation: "«Saber que» es certeza: indicativo, tienes." },
      { type: "fill-blank", prompt: "¿Cómo se dicen en español las palabras en negrita?", sentence: "Espero ___ el autobús de las ocho.", answer: "tomar", en: "I hope [to catch] the eight o'clock bus.", explanation: "Mismo sujeto (yo espero, yo tomo): infinitivo, sin «que».", altAnswers: ["coger", "agarrar"] },
      { type: "fill-blank", prompt: "¿Cómo se dicen en español las palabras en negrita?", sentence: "Me alegra que mi abuela ___ mejor.", answer: "esté", en: "I'm glad my grandmother [is] better.", explanation: "Emoción ante otro sujeto: subjuntivo (esté), con tilde." },
      toEs("Creo que la tienda cierre a las nueve.", "Creo que la tienda cierra a las nueve.", "«Creo que» en afirmativo es certeza: indicativo (cierra). «Cierre» solo iría con «no creo que».", ["Pienso que la tienda cierra a las nueve."], "Corrige la frase."),
      toEs("I doubt the restaurant accepts cards.", "Dudo que el restaurante acepte tarjetas.", "«Dudo que» → subjuntivo (acepte), no «acepta».", ["Dudo que el restaurante acepte tarjeta."]),
      toEs("Prefiero caminar.", "Prefiero que caminemos.", "Al añadir otro sujeto (nosotros), el infinitivo se convierte en que + subjuntivo: caminemos.", ["Prefiero que vayamos andando.", "Prefiero que vayamos a pie."], "Cambia la frase: ahora caminamos nosotros."),
      toEs("I'd rather we take a taxi.", "Prefiero que tomemos un taxi.", "Preferir con otro sujeto (nosotros): que + subjuntivo, tomemos.", ["Prefiero que cojamos un taxi.", "Prefiero que vayamos en taxi."]),
      toEs("Estoy seguro de que Pablo tenga las llaves.", "Estoy seguro de que Pablo tiene las llaves.", "«Estar seguro de que» es certeza: indicativo (tiene). «Tenga» iría con «no estoy seguro de que».", ["Estoy segura de que Pablo tiene las llaves."], "Corrige la frase."),
      toEs("Es verdad que el hotel está cerca de la playa.", "No es verdad que el hotel esté cerca de la playa.", "Al negar «es verdad», el hecho se pone en duda: está → esté (subjuntivo).", ["No es cierto que el hotel esté cerca de la playa."], "Cambia la frase a negativa."),
      toEs("I'm sorry you feel bad. (tú)", "Siento que te sientas mal.", "«Sentir que» (emoción) → subjuntivo; sentirse cambia e → ie: te sientas.", ["Lamento que te sientas mal."]),
      toEs("Esperamos que los niños duermen bien esta noche.", "Esperamos que los niños duerman bien esta noche.", "Esperar que + otro sujeto → subjuntivo: duerman (o → ue). «Duermen» es indicativo.", [], "Corrige la frase."),
      toEs("I don't think she knows my address.", "No creo que sepa mi dirección.", "«No creo que» → subjuntivo (sepa). «Sabe» solo iría con «creo que».", ["No pienso que sepa mi dirección."]),
      mc("«Esperamos ___ pronto.» (nosotros volvemos)", ["volver", "que volvamos", "que volvemos", "volvamos"], 0, "Mismo sujeto (nosotros esperamos, nosotros volvemos): infinitivo. «Que volvamos» sonaría a otro sujeto, «que volvemos» usa indicativo con un deseo y «volvamos» solo no puede seguir a esperamos."),
      mc("«Es verdad que…»", ["indicativo", "subjuntivo", "infinitivo", "imperativo"], 0, "«Es verdad que» afirma un hecho: indicativo. Su negación, «no es verdad que», sí pide subjuntivo."),
      wo("Mi jefe espera que terminemos el proyecto hoy", "Esperar que + otro sujeto → subjuntivo (terminemos).", "My boss hopes we finish the project today"),
      wo("Pienso que este libro es muy interesante", "Pensar (afirmativo) → indicativo (es).", "I think this book is very interesting"),
      ms(
        "¿Qué comienzos llevan indicativo?",
        ["Es verdad que…", "Ojalá que…", "Creo que…", "Siento que…", "Sé que…"],
        [0, 2, 4],
        "Es verdad que, creo que y sé que afirman algo como cierto: indicativo. Ojalá (deseo) y siento que (emoción) piden subjuntivo."
      ),
      toEs("I know you're tired, but I want you to come to dinner with my parents. (tú)", "Sé que estás cansado, pero quiero que vengas a cenar con mis padres.", "Sé que → indicativo (estás); quiero que → subjuntivo (vengas).", ["Sé que estás cansada, pero quiero que vengas a cenar con mis padres."]),
      { type: "speak", prompt: "Responde en voz alta: di algo que sabes de tu ciudad y algo que esperas que cambie.", text: "Sé que mi ciudad es cara, pero espero que bajen los precios.", explanation: "Sé que → indicativo (es); espero que → subjuntivo (bajen)." },
    ]
  ),
  L(
    "subjunctive-wishes-doubt-emotion-2",
    "b1d-corrige-disparadores",
    "Corrige el párrafo: indicativo donde va subjuntivo",
    "Un correo con los errores clásicos: espero que estás, no creo que es, me alegro de que tienes. Repáralos.",
    "7 min",
    [
      sec(
        "Recuerda la regla y corrige el correo",
        [
          "Recuerda la regla: deseo (espero que, quiero que), emoción (me alegro de que) y duda (no creo que, dudo que) con otro sujeto piden subjuntivo, porque lo que sigue no se afirma. Certeza (creo que, estoy seguro de que) pide indicativo. El error clásico va en las dos direcciones: indicativo donde toca subjuntivo, y subjuntivo después de «creo que».",
          "El correo: «Hola, Pablo: espero que ✗ estás (→ estés) bien. Me alegro de que ✗ tienes (→ tengas) trabajo nuevo. No creo que ✗ es (→ sea) fácil empezar, pero creo que ✗ lo hagas (→ lo haces) muy bien. Estoy seguro de que te ✗ guste (→ gusta) mucho. Quiero que me ✗ llamas (→ llames) pronto.»",
        ],
        [
          ["Espero que descanses este fin de semana.", "I hope you rest this weekend. (wish → subjunctive)"],
          ["Creo que tu idea funciona.", "I think your idea works. (belief → indicative)"],
        ],
        [
          fb("Corrige.", "Espero que ___ bien. (el correo dice: estás)", "estés", "«Esperar que» con otro sujeto pide subjuntivo: estés, no «estás»."),
          fb("Corrige: aplica la regla a una frase nueva.", "Me sorprende que nadie ___ nada. (el mensaje dice: sabe)", "sepa", "«Me sorprende que» es una emoción, como «me alegro de que»: subjuntivo, sepa. «Sabe» presentaría el hecho sin valorarlo."),
        ]
      ),
    ],
    [
      fb("Corrige.", "Me alegro de que ___ trabajo nuevo. (el correo dice: tienes)", "tengas", "«Me alegro de que» expresa emoción y pide subjuntivo: tengas, no «tienes»."),
      fb("Corrige.", "No creo que ___ fácil empezar. (el correo dice: es)", "sea", "«No creo que» expresa duda y pide subjuntivo: sea, no «es»."),
      fb("Corrige.", "Creo que lo ___ muy bien. (el correo dice: hagas)", "haces", "«Creo que» afirmativo expresa certeza y lleva indicativo: haces, no «hagas»."),
      fb("Corrige.", "Quiero que me ___ pronto. (el correo dice: llamas)", "llames", "«Querer que» con otro sujeto pide subjuntivo: llames, no «llamas»."),
      fb("Corrige.", "Estoy seguro de que te ___ mucho. (el correo dice: guste)", "gusta", "«Estoy seguro de que» expresa certeza y lleva indicativo: gusta, no «guste»."),
      mc(
        "¿Qué frase está bien?",
        ["Dudo que el jefe acepte la propuesta.", "Dudo que el jefe acepta la propuesta.", "Creo que el jefe acepte la propuesta.", "No creo que el jefe acepta."],
        0,
        "«Dudar que» pide subjuntivo: dudo que acepte. «Dudo que… acepta» usa indicativo por error, «Creo que… acepte» usa subjuntivo con una creencia afirmativa y «No creo que… acepta» necesitaría subjuntivo."
      ),
      toEs("I hope you like your new job. (tú)", "Espero que te guste tu nuevo trabajo.", "Espero que + subjuntivo; gustar concuerda con «tu nuevo trabajo»: te guste.", ["Ojalá te guste tu nuevo trabajo."]),
      { type: "fill-blank", prompt: "¿Cómo se dicen en español las palabras en negrita?", sentence: "Espero que mis padres ___ el viaje. (el mensaje dice: disfrutan)", answer: "disfruten", en: "I hope my parents [enjoy] the trip.", explanation: "Esperar que + otro sujeto: subjuntivo. «Disfrutan» es indicativo." },
      { type: "fill-blank", prompt: "¿Cómo se dicen en español las palabras en negrita?", sentence: "Creo que mi hermana ___ razón. (el mensaje dice: tenga)", answer: "tiene", en: "I think my sister [is] right.", explanation: "«Creo que» afirma: indicativo. El subjuntivo solo va con «no creo que»." },
      { type: "fill-blank", prompt: "¿Cómo se dicen en español las palabras en negrita?", sentence: "Me alegro de que tus hijos ___ bien. (el mensaje dice: están)", answer: "estén", en: "I'm glad your children [are] well.", explanation: "«Me alegro de que» es una emoción: subjuntivo (estén)." },
      { type: "fill-blank", prompt: "¿Cómo se dicen en español las palabras en negrita?", sentence: "Estoy seguro de que el concierto ___ un éxito. (el mensaje dice: sea)", answer: "será", en: "I'm sure the concert [will be] a success.", explanation: "«Estar seguro de que» expresa certeza: indicativo (será).", altAnswers: ["va a ser"] },
      toEs("Espero que tienes un cumpleaños estupendo.", "Espero que tengas un cumpleaños estupendo.", "Espero que + otro sujeto → subjuntivo: tengas. «Espero que tienes» es el error clásico.", ["Espero que pases un cumpleaños estupendo.", "Ojalá tengas un cumpleaños estupendo."], "Corrige la frase."),
      toEs("I'm glad you're coming to the party. (tú)", "Me alegro de que vengas a la fiesta.", "Me alegro de que + subjuntivo: vengas, no «vienes».", ["Me alegra que vengas a la fiesta."]),
      toEs("Creo que es demasiado tarde.", "No creo que sea demasiado tarde.", "Al negar «creo», la certeza pasa a duda: es → sea (subjuntivo).", ["No pienso que sea demasiado tarde."], "Cambia la frase a negativa."),
      toEs("Quiero que me escribes cada semana.", "Quiero que me escribas cada semana.", "«Quiero que» + otro sujeto → subjuntivo: escribas, no «escribes».", ["Quiero que me escribas todas las semanas."], "Corrige la frase."),
      toEs("We doubt the teacher will accept our excuse.", "Dudamos que el profesor acepte nuestra excusa.", "Dudar que + subjuntivo: acepte (no el futuro «aceptará»).", ["Dudamos que la profesora acepte nuestra excusa."]),
      toEs("Dudo que te guste la ciudad.", "Estoy seguro de que te gusta la ciudad.", "Con «estoy seguro de que» expresas certeza: indicativo, guste → gusta.", ["Estoy segura de que te gusta la ciudad.", "Estoy seguro de que te gustará la ciudad.", "Estoy segura de que te gustará la ciudad."], "Cambia «Dudo que» por «Estoy seguro de que»."),
      mc("¿Qué frase está bien?", ["Espero que me contestas pronto.", "Espero que me contestes pronto.", "Creo que me contestes pronto.", "No creo que me contestas pronto."], 1, "Esperar que + otro sujeto pide subjuntivo: contestes. «Contestas» es indicativo tras un deseo o una duda, y «creo que» no lleva subjuntivo."),
      mc("¿Qué frase tiene un error?", ["Me alegro de que estés aquí.", "Pienso que es buena idea.", "Me molesta que llegas tarde.", "Dudo que llueva hoy."], 2, "«Me molesta que» pide subjuntivo: llegues, no «llegas». Las otras aplican bien la regla: emoción y duda con subjuntivo, «pienso que» con indicativo."),
      ms(
        "¿Qué frases del mensaje hay que corregir?",
        ["Ojalá que vienes pronto.", "Sé que estás ocupado.", "No pienso que tiene razón.", "Me encanta que me escribas.", "Creo que llueva mañana."],
        [0, 2, 4],
        "«Ojalá» y «no pienso que» piden subjuntivo (vengas, tenga); «creo que» pide indicativo (llueve o va a llover). «Sé que estás» y «me encanta que me escribas» están bien."
      ),
      wo("Espero que tu familia esté bien", "Espero que + subjuntivo (esté).", "I hope your family is well"),
      wo("No creo que sea fácil encontrar piso en Madrid", "No creo que + subjuntivo (sea).", "I don't think it's easy to find an apartment in Madrid"),
      toEs("I hope you like the city, and I'm sure you'll make friends soon. (tú)", "Espero que te guste la ciudad y estoy seguro de que harás amigos pronto.", "Espero que → subjuntivo (guste); estoy seguro de que → indicativo (harás).", ["Espero que te guste la ciudad y estoy segura de que harás amigos pronto.", "Espero que te guste la ciudad y estoy seguro de que vas a hacer amigos pronto.", "Espero que te guste la ciudad y estoy segura de que vas a hacer amigos pronto.", "Espero que te guste la ciudad, y estoy seguro de que pronto harás amigos.", "Espero que te guste la ciudad, y estoy segura de que pronto harás amigos."]),
      toEs("I'm glad you have a new apartment, but I don't think it's cheap. (tú)", "Me alegro de que tengas un piso nuevo, pero no creo que sea barato.", "Me alegro de que → subjuntivo (tengas); no creo que → subjuntivo (sea).", ["Me alegra que tengas un piso nuevo, pero no creo que sea barato.", "Me alegro de que tengas un apartamento nuevo, pero no creo que sea barato.", "Me alegra que tengas un apartamento nuevo, pero no creo que sea barato.", "Me alegro de que tengas un nuevo piso, pero no creo que sea barato.", "Me alegro de que tengas un nuevo apartamento, pero no creo que sea barato.", "Me alegro de que tengas un departamento nuevo, pero no creo que sea barato."]),
      { type: "speak", prompt: "Responde en voz alta: contesta a Pablo con una frase de deseo y otra de certeza.", text: "Espero que te vaya bien en el trabajo y estoy seguro de que vas a aprender mucho.", explanation: "Espero que → subjuntivo (te vaya); estoy seguro de que → indicativo (vas a aprender)." },
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
        "Recuerda la regla: la actitud decide el modo",
        [
          "Recuerda la regla: la información después de «que» no cambia, pero el modo sí, según la actitud de quien habla. Certeza (creo que, pienso que, estoy seguro de que): indicativo. Negación de la opinión (no creo que), duda (dudo que) y emoción (me extraña que, me preocupa que): subjuntivo, porque ya no afirmas el hecho.",
          "Una frase, cuatro actitudes: Creo que el museo cierra a las ocho. → No creo que el museo cierre a las ocho. → Dudo que el museo cierre a las ocho. → Me extraña que el museo cierre a las ocho. Al volver a la certeza, vuelve el indicativo.",
        ],
        [
          ["Creo que llega hoy. → Dudo que llegue hoy.", "I think he arrives today. → I doubt he'll arrive today."],
          ["No creo que lo sepa. → Estoy seguro de que lo sabe.", "I don't think she knows. → I'm sure she knows."],
        ],
        [
          fb("Cambia a negación.", "Creo que Ana sabe nadar. → No creo que Ana ___ nadar.", "sepa", "«No creo que» → subjuntivo; saber es irregular: sepa. «Sabe» mantendría la certeza."),
          fb("Cambia a emoción.", "Creo que el tren se retrasa. → Me fastidia que el tren se ___.", "retrase", "«Me fastidia que» es una emoción, igual que me extraña que: subjuntivo, retrase (-ar → e)."),
        ]
      ),
    ],
    [
      fb("Cambia a duda.", "Creo que hay sitio. → Dudo que ___ sitio.", "haya", "«Dudo que» → subjuntivo; el de haber (hay) es haya."),
      fb("Cambia a emoción.", "Creo que el jefe viene hoy. → Me alegra que el jefe ___ hoy.", "venga", "«Me alegra que» expresa emoción → subjuntivo: venga (de vengo)."),
      fb("Cambia a certeza.", "No creo que estén en casa. → Creo que ___ en casa.", "están", "«Creo que» afirmativo → indicativo: están, sin el subjuntivo de la duda."),
      fb("Cambia a certeza.", "Dudo que tenga razón. → Estoy segura de que ___ razón.", "tiene", "«Estoy segura de que» expresa certeza → indicativo: tiene."),
      fb("Cambia a emoción.", "Pienso que mi hijo duerme poco. → Me preocupa que mi hijo ___ poco.", "duerma", "«Me preocupa que» expresa emoción → subjuntivo; dormir cambia o → ue: duerma."),
      mc(
        "«Es verdad que mienten.» → duda:",
        ["Dudo que mientan.", "Dudo que mienten.", "Dudo que mentir.", "Dudo mientan que."],
        0,
        "«Dudo que» pide subjuntivo, y mentir cambia e → ie: mientan. «Mienten» es indicativo, «mentir» es infinitivo y «Dudo mientan que» desordena la frase."
      ),
      toEs("I doubt there's a solution.", "Dudo que haya una solución.", "«Dudar que» → subjuntivo; «there's» = hay → haya.", ["Dudo que exista una solución."]),
      fb("Cambia a duda.", "Creo que el banco abre los sábados. → Dudo que el banco ___ los sábados.", "abra", "Al pasar a la duda, el verbo cambia a subjuntivo: abra (-ir → a)."),
      fb("Cambia a negación.", "Creo que Luis vive aquí. → No creo que Luis ___ aquí.", "viva", "«No creo que» → subjuntivo: viva."),
      fb("Cambia a certeza.", "Dudo que puedan venir. → Estoy seguro de que ___ venir.", "pueden", "De la duda a la certeza: vuelve el indicativo (pueden)."),
      fb("Cambia a emoción.", "Pienso que mi hijo juega demasiado. → Me molesta que mi hijo ___ demasiado.", "juegue", "Emoción → subjuntivo; jugar → juegue (u → ue y g → gu delante de e)."),
      fb("Cambia a emoción.", "Creo que la película dura tres horas. → Me extraña que la película ___ tres horas.", "dure", "«Me extraña que» (emoción) → subjuntivo: dure."),
      toEs("I don't think the museum is free today.", "No creo que el museo sea gratis hoy.", "Negación de la opinión: subjuntivo (sea). Con «creo que» sería «es».", ["No pienso que el museo sea gratis hoy.", "No creo que hoy el museo sea gratis.", "No pienso que hoy el museo sea gratis."]),
      toEs("Dudo que el museo es gratis hoy.", "Dudo que el museo sea gratis hoy.", "«Dudo que» expresa duda: subjuntivo (sea). «Es» afirmaría lo que dudas.", ["Dudo que hoy el museo sea gratis."], "Corrige la frase."),
      toEs("It surprises me that the museum is free today.", "Me sorprende que el museo sea gratis hoy.", "Emoción: subjuntivo (sea), aunque sea un hecho.", ["Me extraña que el museo sea gratis hoy.", "Me sorprende que hoy el museo sea gratis.", "Me extraña que hoy el museo sea gratis."]),
      toEs("No creo que saben la verdad.", "No creo que sepan la verdad.", "Negación de la opinión: subjuntivo irregular de saber (sepan).", ["No pienso que sepan la verdad."], "Corrige la frase."),
      toEs("Creo que sepan la verdad.", "Creo que saben la verdad.", "«Creo que» afirmativo es certeza: indicativo (saben).", ["Pienso que saben la verdad."], "Corrige la frase."),
      toEs("It worries me that they know the truth.", "Me preocupa que sepan la verdad.", "Emoción: subjuntivo (sepan), aunque sea un hecho."),
      mc("«Creo que hay leche en la nevera.» → negación:", ["No creo que haya leche en la nevera.", "No creo que hay leche en la nevera.", "No creo haber leche en la nevera.", "No creo que habrá leche en la nevera."], 0, "Al negar creer, hay pasa a subjuntivo: haya. «Hay» y «habrá» mantienen el indicativo, y «no creo haber» solo sirve con el mismo sujeto."),
      wo("Dudo que el vuelo salga a su hora", "Dudar → subjuntivo (salga, de salgo).", "I doubt the flight will leave on time"),
      wo("Me extraña que nadie conteste el teléfono", "Me extraña que (emoción) → subjuntivo (conteste).", "It's strange that nobody answers the phone"),
      toEs("I'm not sure the bakery sells bread on Sundays.", "No estoy seguro de que la panadería venda pan los domingos.", "Negar la certeza la convierte en duda: subjuntivo (venda).", ["No estoy segura de que la panadería venda pan los domingos."]),
      toEs("We're sure the restaurant serves vegetarian food, but it surprises us that it's so cheap.", "Estamos seguros de que el restaurante sirve comida vegetariana, pero nos sorprende que sea tan barato.", "Certeza → indicativo (sirve); emoción → subjuntivo (sea).", ["Estamos seguras de que el restaurante sirve comida vegetariana, pero nos sorprende que sea tan barato.", "Estamos seguros de que el restaurante sirve comida vegetariana, pero nos extraña que sea tan barato.", "Estamos seguras de que el restaurante sirve comida vegetariana, pero nos extraña que sea tan barato."]),
      toEs("My father thinks I drive well, but my mother doesn't think I'm ready. (I = a woman)", "Mi padre cree que conduzco bien, pero mi madre no cree que esté preparada.", "Cree que → indicativo (conduzco); no cree que → subjuntivo (esté).", ["Mi padre piensa que conduzco bien, pero mi madre no cree que esté preparada.", "Mi padre cree que conduzco bien, pero mi madre no cree que esté lista.", "Mi padre cree que manejo bien, pero mi madre no cree que esté preparada.", "Mi padre cree que manejo bien, pero mi madre no cree que esté lista.", "Mi papá cree que manejo bien, pero mi mamá no cree que esté lista."]),
      { type: "speak", prompt: "Responde en voz alta: di la misma idea («el gimnasio abre el domingo») con certeza y luego con duda.", text: "Creo que el gimnasio abre el domingo, pero mi hermana duda que abra.", explanation: "Creo que → indicativo (abre); duda que → subjuntivo (abra)." },
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
        "Recuerda la regla: sí con indicativo, no con subjuntivo",
        [
          "Recuerda la regla: en la respuesta, tu postura decide el modo. Sí, creo que… afirma algo como cierto: indicativo. No, no creo que… niega la opinión, así que lo que sigue ya no se afirma: subjuntivo. ¿Crees que va a llover? — Sí, creo que va a llover. / No, no creo que vaya a llover.",
          "La pregunta ¿Crees que…? suele llevar indicativo, porque solo pide tu opinión. El subjuntivo en la pregunta (¿Crees que sea caro?) añade duda, y se oye más en Latinoamérica.",
        ],
        [
          ["—¿Crees que aprobaremos? —No, no creo que aprobemos.", "Do you think we'll pass? — No, I don't think we'll pass."],
          ["—¿Piensas que está cerca? —Sí, pienso que está a cinco minutos.", "Do you think it's near? — Yes, I think it's five minutes away."],
        ],
        [
          fb("Responde (no).", "—¿Crees que el tren llega a tiempo? —No, no creo que ___ a tiempo.", "llegue", "«No creo que» niega una creencia → subjuntivo; -gar → -gue: llegue. «Llega» mantendría la certeza."),
          mc(
            "Aplica la regla: «—¿Te parece que el hotel es caro? —No, no me parece que ___ caro.»",
            ["sea", "es", "será", "ser"],
            0,
            "«No me parece que» niega una opinión, igual que «no creo que»: subjuntivo, sea. «Es» y «será» la presentarían como cierta, y «ser» no tiene sujeto."
          ),
        ]
      ),
    ],
    [
      fb("Responde (sí).", "—¿Crees que el museo está abierto hoy? —Sí, creo que ___ a las diez. (abrir)", "abre", "Respuesta afirmativa: certeza → indicativo, abre."),
      fb("Responde (no).", "—¿Piensas que Luis dice la verdad? —No, no pienso que la ___.", "diga", "«No pienso que» niega una opinión → subjuntivo, formado desde digo: diga."),
      fb("Responde (sí).", "—¿Crees que hay entradas? —Sí, creo que ___ entradas.", "hay", "«Creo que» afirmativo expresa certeza → indicativo: hay."),
      fb("Responde (duda).", "—¿Vendrá tu hermano? —Dudo que ___.", "venga", "«Dudo que» expresa duda → subjuntivo, formado desde vengo: venga."),
      fb("Responde (no).", "—¿Crees que es caro? —No, no creo que ___ caro.", "sea", "«No creo que» → subjuntivo; ser es irregular: sea."),
      mc(
        "«—¿Crees que Marta está enfadada? —Sí, creo que ___.»",
        ["está enfadada", "esté enfadada", "estar enfadada", "estaría enfadada"],
        0,
        "«Creo que» en afirmativo expresa certeza y lleva indicativo: creo que está enfadada. «Esté» sería para «no creo que», «estar» es infinitivo y «estaría» es condicional."
      ),
      toEs("—Do you think it's true? —I don't think it's true. (tú)", "—¿Crees que es verdad? —No creo que sea verdad.", "«¿Crees que…?» en pregunta suele llevar indicativo (es); «no creo que» lleva subjuntivo (sea).", ["—¿Crees que es cierto? —No creo que sea cierto."]),
      { type: "fill-blank", prompt: "¿Cómo se dicen en español las palabras en negrita?", sentence: "—¿Crees que Ana viene a la fiesta? —Sí, creo que ___.", answer: "viene", en: "—Do you think Ana is coming to the party? —Yes, I think she['s coming].", explanation: "Respuesta afirmativa: creo que + indicativo, viene." },
      fb("Cambia la respuesta a negativa.", "—Sí, creo que Ana viene. → —No, no creo que ___.", "venga", "Al negar la opinión, viene pasa a subjuntivo: venga (de vengo)."),
      { type: "fill-blank", prompt: "¿Cómo se dicen en español las palabras en negrita?", sentence: "—¿Piensas que el examen es difícil? —No, no pienso que ___ difícil.", answer: "sea", en: "—Do you think the exam is difficult? —No, I don't think it [is] difficult.", explanation: "«No pienso que» + subjuntivo: sea." },
      { type: "fill-blank", prompt: "¿Cómo se dicen en español las palabras en negrita?", sentence: "—¿Crees que hace frío fuera? —Sí, creo que ___ mucho frío.", answer: "hace", en: "—Do you think it's cold outside? —Yes, I think [it's] very cold.", explanation: "«Sí, creo que» + indicativo: hace." },
      toEs("—No, no creo que podemos aparcar aquí.", "—No, no creo que podamos aparcar aquí.", "«No creo que» + subjuntivo: podamos, no «podemos».", ["—No, no creo que podamos estacionar aquí.", "—No creo que podamos aparcar aquí."], "Corrige la respuesta."),
      toEs("—Do you think the restaurant is good? —Yes, I think it's very good. (tú)", "—¿Crees que el restaurante es bueno? —Sí, creo que es muy bueno.", "Pregunta neutral y respuesta afirmativa: indicativo en las dos.", ["—¿Piensas que el restaurante es bueno? —Sí, creo que es muy bueno.", "—¿Crees que el restaurante es bueno? —Sí, pienso que es muy bueno."]),
      toEs("—Sí, creo que va a nevar.", "—No, no creo que vaya a nevar.", "En la respuesta negativa, ir pasa a subjuntivo: vaya a nevar.", ["—No creo que vaya a nevar."], "Cambia la respuesta a negativa."),
      toEs("Do you think we have enough time? (tú)", "¿Crees que tenemos suficiente tiempo?", "La pregunta neutral con ¿crees que…? lleva indicativo (tenemos).", ["¿Crees que tenemos tiempo suficiente?", "¿Piensas que tenemos suficiente tiempo?", "¿Piensas que tenemos tiempo suficiente?", "¿Crees que tengamos suficiente tiempo?", "¿Crees que tengamos tiempo suficiente?"]),
      toEs("—Sí, creo que miente.", "—No, no creo que mienta.", "Al negar, mentir pasa a subjuntivo: mienta (e → ie).", ["—No creo que mienta."], "Cambia la respuesta a negativa."),
      toEs("—No, mi hermana no cree que aprueba.", "—No, mi hermana no cree que apruebe.", "«No cree que» pide subjuntivo: apruebe (o → ue). «Aprueba» presenta como cierto lo que ella niega.", ["—No, mi hermana no cree que vaya a aprobar."], "Corrige la respuesta."),
      toEs("—Do you think your parents will like the gift? —No, I don't think they'll like it. (tú)", "—¿Crees que a tus padres les gustará el regalo? —No, no creo que les guste.", "Respuesta negativa: no creo que + subjuntivo (les guste).", ["—¿Crees que a tus padres les va a gustar el regalo? —No, no creo que les guste.", "—¿Crees que a tus padres les gustará el regalo? —No creo que les guste.", "—¿Crees que a tus padres les va a gustar el regalo? —No creo que les guste."]),
      mc("«—¿Crees que lloverá? —No, no creo que ___.»", ["llueva", "llueve", "lloverá", "llover"], 0, "«No creo que» + subjuntivo: llueva. «Llueve» y «lloverá» son indicativo, como en la pregunta, y «llover» no encaja tras «que»."),
      mc("¿Qué pregunta es más neutral, sin duda añadida?", ["¿Crees que es caro?", "¿Crees que sea caro?"], 0, "En las preguntas el indicativo es neutral (solo pide tu opinión); el subjuntivo añade duda de quien pregunta."),
      wo("No creo que mis amigos lleguen a tiempo", "No creo que + subjuntivo (lleguen).", "I don't think my friends will arrive on time"),
      wo("Sí, creo que el jefe está de acuerdo", "Sí, creo que + indicativo (está).", "Yes, I think the boss agrees"),
      toEs("—Do you think the shops are open on Sunday? —I don't think they're open, but I think the market opens. (tú)", "—¿Crees que las tiendas están abiertas el domingo? —No creo que estén abiertas, pero creo que el mercado abre.", "No creo que → subjuntivo (estén); creo que → indicativo (abre).", ["—¿Crees que las tiendas abren el domingo? —No creo que estén abiertas, pero creo que el mercado abre.", "—¿Crees que las tiendas están abiertas el domingo? —No creo que estén abiertas, pero creo que el mercado sí abre."]),
      toEs("—Do you think Marta knows we're here? —No, I don't think she knows it yet. (tú)", "—¿Crees que Marta sabe que estamos aquí? —No, no creo que lo sepa todavía.", "«Sabe que estamos» es indicativo en la pregunta neutral; no creo que + subjuntivo irregular: lo sepa.", ["—¿Crees que Marta sabe que estamos aquí? —No, no creo que lo sepa aún.", "—¿Crees que Marta sabe que estamos aquí? —No creo que lo sepa todavía."]),
      { type: "speak", prompt: "Responde en voz alta: ¿crees que vas a viajar este verano? Contesta con tu opinión y una duda.", text: "Creo que voy a viajar a la costa, pero no creo que pueda ir al extranjero.", explanation: "Creo que → indicativo (voy a viajar); no creo que → subjuntivo (pueda)." },
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
        "Recuerda la regla",
        [
          "Una carta de despedida está llena de deseos (espero que…, quiero que…), emociones (me alegro de que…, me da pena que…) y opiniones negadas (no creo que…). Todas hablan de lo que hará otra persona, así que piden que + subjuntivo. Solo la certeza (estoy segura de que…, sé que…) lleva indicativo.",
          "Truco: el subjuntivo sale de la forma yo del presente: voy → vaya, tengo → tenga, conozco → conozca.",
        ],
        [
          ["Me da pena que no vengas en verano.", "It makes me sad that you won't come in the summer. (emoción → subjuntivo)"],
          ["Estoy segura de que te irá bien.", "I'm sure it will go well for you. (certeza → indicativo)"],
        ],
        []
      ),
      sec(
        "La carta",
        [
          "Lee la carta. Los verbos entre paréntesis están en infinitivo: piensa en qué forma necesita cada uno antes de hacer los ejercicios.",
          "«Querida Lucía: me alegro mucho de que te ___ (ir) a Berlín, aunque me da pena que ___ (estar) tan lejos. Espero que ___ (encontrar) un piso bonito y que ___ (conocer) a gente buena. No creo que ___ (tener) problemas con el idioma. Quiero que me ___ (llamar) cada domingo. Estoy segura de que ___ (ser) una experiencia increíble. Te quiero, mamá.»",
        ],
        [],
        [
          mc(
            "¿Qué pide la madre?",
            ["que Lucía la llame cada domingo", "que Lucía vuelva pronto", "que Lucía no se vaya", "que Lucía estudie alemán"],
            0,
            "La madre escribe «Quiero que me ___ (llamar) cada domingo»: le pide que la llame. No le pide que vuelva pronto, que no se vaya ni que estudie alemán."
          ),
          mc(
            "En la carta, ¿por qué «Estoy segura de que ___ (ser)…» NO lleva subjuntivo?",
            ["Porque expresa certeza, no deseo ni duda.", "Porque el sujeto es el mismo.", "Porque «ser» no tiene subjuntivo.", "Porque está en pasado."],
            0,
            "Estar seguro de que afirma algo que la madre da por cierto → indicativo: será. Los sujetos son distintos (yo / la experiencia), «ser» sí tiene subjuntivo (sea) y la frase no está en pasado."
          ),
        ]
      ),
    ],
    [
      fb("Completa la carta.", "Me alegro mucho de que te ___ a Berlín. (ir)", "vayas", "Alegrarse de que + otro sujeto → subjuntivo. Ir es irregular: vaya, vayas (no «vas»)."),
      fb("Completa la carta.", "Me da pena que ___ tan lejos. (estar)", "estés", "Dar pena es una emoción → subjuntivo: estés, con tilde como está."),
      fb("Completa la carta.", "Espero que ___ un piso bonito. (encontrar)", "encuentres", "Esperar que → subjuntivo. Encontrar diptonga en las formas tónicas: encuentro → encuentres."),
      fb("Completa la carta.", "Espero que ___ a gente buena. (conocer)", "conozcas", "El subjuntivo sale de la forma yo: conozco → conozca, conozcas."),
      fb("Completa la carta.", "No creo que ___ problemas con el idioma. (tener)", "tengas", "No creo que niega una opinión → subjuntivo; tengo → tengas. Con «creo que» afirmativo sería «tienes»."),
      fb("Completa la carta.", "Quiero que me ___ cada domingo. (llamar)", "llames", "Querer que + otro sujeto → subjuntivo: los verbos en -ar cambian a -e: llames."),
      { ...fb("Completa la carta.", "Estoy segura de que ___ una experiencia increíble. (ser)", "será", "Estar segura de que expresa certeza → indicativo (será o va a ser), no «sea»."), altAnswers: ["va a ser"] },
      toEs("I hope you're happy there. (tú)", "Espero que seas feliz allí.", "Espero que + subjuntivo; «be happy» = ser feliz → seas.", ["Espero que seas feliz ahí.", "Ojalá seas feliz allí.", "Espero que estés feliz allí.", "Espero que estés contento allí.", "Espero que estés contenta allí.", "Ojalá estés feliz allí."]),
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
        "Dos preguntas deciden el modo",
        [
          "Recuerda la regla con dos preguntas. 1) ¿Hay otro sujeto después de «que»? Si es la misma persona, no hay «que»: infinitivo (Quiero viajar). 2) Si hay otro sujeto, ¿la frase principal presenta lo que sigue como un hecho? Certeza o conocimiento (sé que, está claro que, creo que) → indicativo. Deseo, emoción, duda u opinión negada (quiero que, me alegro de que, dudo que, no creo que) → subjuntivo.",
          "Por qué: el indicativo afirma; el subjuntivo deja la acción en el terreno de lo deseado, lo sentido o lo dudoso.",
        ],
        [
          ["Me alegro de estar aquí.", "I'm glad to be here. (mismo sujeto → infinitivo)"],
          ["Me alegro de que estés aquí.", "I'm glad you're here. (emoción, otro sujeto → subjuntivo)"],
          ["Creo que Ana viene mañana.", "I think Ana is coming tomorrow. (opinión afirmada → indicativo)"],
          ["No creo que Ana venga mañana.", "I don't think Ana is coming tomorrow. (opinión negada → subjuntivo)"],
        ],
        [
          mc(
            "«Espero ___ pronto.» (yo) — ¿forma y razón?",
            ["terminar — mismo sujeto", "que termine — deseo", "que termino — certeza", "terminé — pasado"],
            0,
            "El que espera y el que termina es la misma persona (yo), así que se usa el infinitivo: espero terminar. «Que termine» sería para otro sujeto, «que termino» usa indicativo por error y «terminé» es pasado."
          ),
          mc(
            "«Es verdad que los precios ___ mucho este año.» — ¿forma y razón?",
            ["han subido — certeza", "hayan subido — duda", "subir — mismo sujeto", "suban — deseo"],
            0,
            "«Es verdad que» presenta un hecho → indicativo: han subido. «Hayan subido» y «suban» son subjuntivo, que exigiría duda o deseo; «subir» no sirve porque el sujeto (los precios) es distinto."
          ),
        ]
      ),
    ],
    [
      mc(
        "«No pienso que ___ buena idea.»",
        ["sea — opinión negada", "es — certeza", "ser — mismo sujeto", "será — futuro"],
        0,
        "«No pienso que» niega una opinión y pide subjuntivo: sea. «Es» sería para «pienso que» (certeza), «ser» sirve solo con el mismo sujeto y «será» no es la forma esperada aquí."
      ),
      mc(
        "«Está claro que ___ razón.»",
        ["tienes — certeza", "tengas — duda", "tener — mismo sujeto", "tuvieras — hipótesis"],
        0,
        "«Está claro que» expresa certeza, así que lleva indicativo: tienes. «Tengas» se usaría con duda, «tener» con el mismo sujeto y «tuvieras» con hipótesis."
      ),
      mc(
        "«Me sorprende que no ___ nadie.»",
        ["llame — emoción", "llama — certeza", "llamar — mismo sujeto", "llamará — futuro"],
        0,
        "«Me sorprende que» expresa emoción: subjuntivo, no llame nadie. «Llama» y «llamará» son indicativo, y «llamar» solo sirve con el mismo sujeto."
      ),
      mc(
        "«Mis padres desean que ___ a casa por Navidad.»",
        ["vuelva — deseo con otro sujeto", "vuelvo — certeza", "volver — mismo sujeto", "volví — pasado"],
        0,
        "Los padres desean y otra persona vuelve: deseo con cambio de sujeto → subjuntivo, vuelva. «Vuelvo» es indicativo, «volver» sirve con el mismo sujeto y «volví» es pasado."
      ),
      fb("Completa.", "Siento mucho ___ tarde. (llegar, yo)", "llegar", "Yo siento y yo llego: mismo sujeto → infinitivo, sin «que»."),
      fb("Completa.", "Siento mucho que ___ tarde. (llegar, tú)", "llegues", "Yo siento, tú llegas: otro sujeto → que + subjuntivo. Llegar añade u para mantener el sonido /g/: llegues."),
      toEs("It's clear that you're tired, and I want you to rest. (tú)", "Está claro que estás cansado y quiero que descanses.", "«Está claro que» expresa certeza (indicativo: estás); «quiero que» expresa deseo con otro sujeto (subjuntivo: descanses).", ["Está claro que estás cansada y quiero que descanses."]),
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
        "El esqueleto de una reacción larga",
        [
          "Recuerda la regla: emoción o duda + que + subjuntivo cuando el sujeto cambia. En las frases largas, el truco es ver el esqueleto: [reacción] + que + [sujeto] + no + [pronombres] + [verbo en subjuntivo] + [complementos].",
          "Por qué este orden: «que» abre siempre la segunda cláusula, y dentro de ella los pronombres (me, te, lo, nos…) van pegados delante del verbo conjugado; «no» va delante de todo el bloque pronombre + verbo. Con verbos como gustar, encantar o preocupar, la persona que siente va al principio: A mi madre le preocupa que…",
        ],
        [
          ["Me molesta que mis vecinos no me saluden.", "It bothers me that my neighbours don't say hello to me. (no + me + subjuntivo)"],
          ["A mi padre le encanta que lo llamemos.", "My father loves it when we call him. (a mi padre le… + que + lo + subjuntivo)"],
          ["Dudo que el banco nos dé el préstamo.", "I doubt the bank will give us the loan. (sujeto entre que y el verbo)"],
        ],
        [
          mc(
            "¿Qué frase tiene el orden natural?",
            ["Dudo que mis vecinos se muden este año.", "Dudo que se mis vecinos muden este año.", "Que dudo mis vecinos se muden.", "Dudo mis vecinos que se muden."],
            0,
            "El orden natural es: Dudo que + sujeto + se + verbo: Dudo que mis vecinos se muden. En las otras, «que» o «se» aparecen en un lugar imposible: el pronombre va pegado al verbo y «que» abre la segunda cláusula."
          ),
          { type: "dictation", audio: "Me extraña que mi jefa no me llame.", explanation: "Me extraña que + subjuntivo (llame); «no» va delante del pronombre «me», que va pegado al verbo." },
        ]
      ),
    ],
    [
      wo("Me sorprende que tu jefe no te pague las horas extra.", "Emoción (sorprender) + que + sujeto + no + te + subjuntivo (pague, con u para mantener el sonido /g/).", "It surprises me that your boss doesn't pay you for overtime."),
      wo("No creo que el restaurante esté abierto los lunes.", "Opinión negada (no creo que) → subjuntivo: esté.", "I don't think the restaurant is open on Mondays."),
      wo("A mi madre le encanta que la visitemos los domingos.", "Con encantar, la persona que siente va delante (a mi madre le); lo que la alegra va en subjuntivo con el pronombre delante: la visitemos.", "My mother loves it when we visit her on Sundays."),
      wo("Tengo miedo de que no nos dé tiempo a terminar.", "Tener miedo de que + subjuntivo; «no nos dé tiempo» = we won't have time. «Dé» lleva tilde.", "I'm afraid we won't have time to finish."),
      fb("Completa.", "Me preocupa que mi hijo no ___ amigos en el colegio nuevo. (hacer)", "haga", "Preocupar es emoción → subjuntivo. Sale de la forma yo: hago → haga."),
      toEn("Me extraña que no me contesten.", "It's strange that they don't answer me.", "«Me extraña que» (it's strange that) expresa sorpresa y lleva subjuntivo: contesten.", ["I find it strange that they don't answer me."]),
      { type: "dictation", audio: "No creo que mis amigos nos esperen.", explanation: "Opinión negada → subjuntivo: esperen. El pronombre «nos» va delante del verbo." },
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
        [
          "Recuerda la regla: deseo (quiero que, prefiero que, espero que), duda (dudo que, no creo que) y emoción (me preocupa que, me alegro de que) piden subjuntivo cuando el sujeto cambia, porque no presentan la acción como un hecho. La certeza (estoy seguro de que, sé que) sí afirma un hecho: indicativo.",
          "En la oficina aparecen muchos verbos con cambio ortográfico o irregulares: entregar → entreguemos, hacer → hagamos, saber → sepan, dar → dé, haber → haya.",
        ],
        [
          ["La jefa quiere que revisemos los datos hoy.", "The boss wants us to check the data today. (deseo → subjuntivo)"],
          ["Me preocupa que el proveedor no conteste.", "It worries me that the supplier isn't answering. (emoción → subjuntivo)"],
          ["Sé que el cliente está contento.", "I know the client is happy. (certeza → indicativo)"],
        ],
        [
          fb("Completa.", "El jefe quiere que ___ el informe hoy. (entregar, nosotros)", "entreguemos", "Querer que + otro sujeto → subjuntivo. Los verbos en -gar añaden u delante de e para conservar el sonido /g/: entreguemos."),
          mc(
            "«Estoy seguro de que el cliente ___ el contrato.» (firmar)",
            ["firmará", "firme", "firmar", "firmara"],
            0,
            "Estar seguro de que expresa certeza → indicativo: firmará (o firma / va a firmar). «Firme» y «firmara» son subjuntivo, que exigiría duda o deseo, y «firmar» no tiene sujeto propio."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "Dudo que el cliente ___ el precio. (aceptar)", "acepte", "Dudar expresa incertidumbre → subjuntivo: acepte (-ar → -e)."),
      fb("Completa.", "Me preocupa que no ___ tiempo suficiente. (haber)", "haya", "Preocupar es emoción → subjuntivo. El subjuntivo de «hay» es «haya»."),
      fb("Completa.", "Espero que la reunión no ___ mucho. (durar)", "dure", "Esperar que + otro sujeto (la reunión) → subjuntivo: dure."),
      fb("Completa.", "No creo que la directora ___ de acuerdo. (estar)", "esté", "No creer niega la opinión → subjuntivo: esté, con tilde."),
      fb("Completa.", "Me alegro de que el equipo ___ tan bien. (funcionar)", "funcione", "Alegrarse de que es emoción ante lo que hace otro → subjuntivo: funcione."),
      { ...fb("Completa.", "Estoy segura de que el proyecto ___ un éxito. (ser, futuro)", "será", "Estar segura de que expresa certeza → indicativo: será (o va a ser), no «sea»."), altAnswers: ["va a ser"] },
      mc(
        "«Prefiero que me lo ___ por correo.» (mandar, usted)",
        ["mande", "manda", "mandar", "mandará"],
        0,
        "«Preferir que» con otro sujeto pide subjuntivo: prefiero que me lo mande. «Manda» es indicativo, «mandar» es infinitivo y «mandará» es futuro."
      ),
      toEs("The boss doesn't want us to work on weekends.", "El jefe no quiere que trabajemos los fines de semana.", "«No querer que» + otro sujeto → subjuntivo: trabajemos. El inglés dice «want us to work»; el español necesita que + subjuntivo.", ["La jefa no quiere que trabajemos los fines de semana."]),
    ]
  ),
  L(
    "subjunctive-wishes-doubt-emotion-drill-3",
    "b1d-ronda-emocion-irregulares",
    "Ronda rápida: emociones con verbos irregulares",
    "Me alegro de que sepas, siento que te vayas, me encanta que vengas: reacción + irregular, a toda velocidad.",
    "7 min",
    [
      sec(
        "Recuerda la regla: dos decisiones",
        [
          "Recuerda: primero decide el modo. Si hay reacción, deseo o duda sobre lo que hace otra persona → subjuntivo (siento que te vayas); si solo informas o estás seguro → indicativo (sé que te vas).",
          "Después, la forma: los irregulares copian la forma yo (vengo → venga, digo → diga, salgo → salga, traigo → traiga, hago → haga, pongo → ponga, tengo → tenga) o son de los seis especiales (sea, esté, vaya, sepa, dé, haya).",
        ],
        [
          ["Siento que te vayas sin despedirte.", "I'm sorry you're leaving without saying goodbye. (reacción → vayas, de los seis)"],
          ["Me alegro de que vengáis todos.", "I'm glad you're all coming. (vengo → vengáis)"],
        ],
        [
          fb("Rápido.", "Me encanta que ___ a verme. (venir, tú)", "vengas", "Reacción con otro sujeto → subjuntivo; vengo → vengas."),
          fb("Aplica la regla a un verbo nuevo.", "Me fastidia que el perro no ___ en casa. (caber)", "quepa", "Reacción → subjuntivo; el yo de caber es quepo, así que quepa."),
        ]
      ),
    ],
    [
      fb("Rápido.", "Siento que te ___ tan pronto. (ir)", "vayas", "Sentir que → subjuntivo; ir es de los seis: vaya, vayas."),
      fb("Rápido.", "Me alegro de que lo ___ ya. (saber, tú)", "sepas", "Alegrarse de que → subjuntivo; saber → sepa, sepas."),
      fb("Rápido.", "Me molesta que siempre ___ tarde. (salir, tú)", "salgas", "Molestar que → subjuntivo; salgo → salgas."),
      fb("Rápido.", "Me sorprende que no ___ nada. (decir, ellos)", "digan", "Sorprender que → subjuntivo; digo → digan."),
      fb("Rápido.", "Espero que ___ el pastel. (traer, vosotros)", "traigáis", "Esperar que → subjuntivo; traigo → traigáis."),
      fb("Rápido.", "Qué pena que ___ tan mal tiempo. (hacer)", "haga", "Qué pena que → subjuntivo; hago → haga."),
      fb("Rápido.", "Dudo que ___ tiempo. (tener, nosotros)", "tengamos", "Dudar que → subjuntivo; tengo → tengamos."),
      mc(
        "«Me alegra que ___ tan contentos.» (estar, vosotros)",
        ["estéis", "estáis", "seáis", "estar"],
        0,
        "«Me alegra que» expresa emoción y pide subjuntivo: estéis. «Estáis» es indicativo, «seáis» es de ser (y el estado de ánimo va con estar) y «estar» es infinitivo."
      ),
      toEs("Sé que te vas mañana.", "Siento que te vayas mañana.", "Saber que informa (indicativo, vas); sentir que reacciona (subjuntivo, vayas).", [], "Cambia «Sé que» por «Siento que»."),
      toEs("Me alegro de que vengas.", "Me alegro de que vengan tus padres.", "El verbo concuerda con el nuevo sujeto: tus padres → vengan. Sigue en subjuntivo porque es una reacción.", ["Me alegro de que tus padres vengan."], "Cambia el sujeto de «venir» a «tus padres»."),
      toEs("«Me sorprende que no haces nada este verano.»", "Me sorprende que no hagas nada este verano.", "Sorprender que expresa reacción: subjuntivo. Hacer copia el yo hago: hagas.", [], "Corrige la frase."),
      toEs("«Qué bien que pongáis música y que estáis tan contentos.»", "Qué bien que pongáis música y que estéis tan contentos.", "Qué bien que pide subjuntivo en las dos partes: pongáis está bien; estáis debe ser estéis.", [], "Corrige la frase."),
    ]
  ),
  L(
    "subjunctive-wishes-doubt-emotion-drill-3",
    "b1d-frase-a-frase-consejo",
    "Frase a frase: el consultorio",
    "Responde a la carta de un lector: reacción, duda, deseo y consejo, frase por frase.",
    "8 min",
    [
      sec(
        "Recuerda la regla y lee la carta",
        [
          "Recuerda: una buena respuesta de consultorio tiene cuatro piezas, y cada una decide el modo. Reacción (siento que, me preocupa que) → subjuntivo. Duda (no creo que) → subjuntivo. Deseo o consejo para el lector (quiero que, espero que, te aconsejo que) → subjuntivo. Certeza (estoy seguro de que) → indicativo.",
          "«Mi compañero de piso nunca limpia y pone música a las dos de la mañana. ¿Qué hago?» Respuesta modelo: «Siento que tengas este problema. No creo que tu compañero lo haga con mala intención. Quiero que habléis tranquilamente. Espero que encontréis una solución.»",
        ],
        [
          ["Siento que tengas este problema.", "I'm sorry you have this problem. (reacción → tengas)"],
          ["Estoy seguro de que tiene arreglo.", "I'm sure it can be solved. (certeza → indicativo)"],
        ],
        [
          fb("Responde a una carta nueva.", "Me preocupa que tu jefe te ___ tanto. (gritar)", "grite", "Me preocupa que expresa reacción: subjuntivo, grite."),
        ]
      ),
    ],
    [
      fb("Duda.", "No creo que tu compañero lo ___ con mala intención. (hacer)", "haga", "No creo que + subjuntivo: hago → haga."),
      fb("Deseo.", "Quiero que ___ tranquilamente. (hablar, vosotros)", "habléis", "Querer que + otra persona → subjuntivo: habléis."),
      fb("Deseo.", "Espero que ___ una solución. (encontrar, vosotros)", "encontréis", "Esperar que → subjuntivo; en vosotros no hay diptongo: encontréis."),
      fb("Emoción.", "Me preocupa que no ___ dormir. (poder, tú)", "puedas", "Me preocupa que → subjuntivo; poder cambia o → ue: puedas."),
      fb("Certeza.", "Estoy seguro de que él ___ entenderlo. (poder)", "puede", "Estar seguro de que expresa certeza → indicativo: puede."),
      wo("Te aconsejo que le expliques cómo te sientes.", "Aconsejar que + subjuntivo: expliques (c → qu delante de e).", "I advise you to explain to him how you feel."),
      mc(
        "Una lectora escribe: «Mi hermana no me habla desde la boda.» ¿Qué primera frase es la mejor?",
        ["Siento que tu hermana no te hable.", "Siento que tu hermana no te habla.", "Sé que tu hermana no te hable.", "Siento tu hermana no te hable."],
        0,
        "Una reacción sobre lo que hace otra persona: sentir que + subjuntivo (hable). «Te habla» es indicativo; «sé que» no va con subjuntivo; y falta que en la última."
      ),
      toEs("Habla con él.", "Te aconsejo que hables con él.", "Un consejo más suave: te aconsejo que + subjuntivo, habla → hables.", [], "Transforma el mandato en un consejo con «Te aconsejo que...»."),
      toEs("Creo que tu compañero lo hace a propósito.", "No creo que tu compañero lo haga a propósito.", "Al negar creer, el verbo pasa a subjuntivo: hace → haga.", [], "Cambia la opinión a negativa."),
      toEs("«Espero que tu compañero entiende el problema.»", "Espero que tu compañero entienda el problema.", "Esperar que + otra persona → subjuntivo: entienda.", [], "Corrige la frase de la respuesta."),
      toEs("«Estoy segura de que encontréis una solución.»", "Estoy segura de que encontraréis una solución.", "Estar seguro de que es certeza: indicativo (encontraréis o encontráis), no subjuntivo.", ["Estoy segura de que encontráis una solución.", "Estoy segura de que vais a encontrar una solución."], "Corrige la frase de la respuesta."),
      toEs("I hope you two can live together in peace.", "Espero que podáis vivir juntos en paz.", "«You two» = vosotros; esperar que + subjuntivo: podáis.", ["Espero que los dos podáis vivir juntos en paz.", "Espero que puedan vivir juntos en paz."]),
    ]
  ),
  L(
    "subjunctive-wishes-doubt-emotion-drill-3",
    "b1d-pares-mismo-sujeto",
    "Pares mínimos: siento llegar tarde / siento que llegues tarde",
    "Emoción con el mismo sujeto (infinitivo) o con otro sujeto (subjuntivo): diez pares para no fallar más.",
    "7 min",
    [
      sec(
        "Recuerda la regla: mismo sujeto = infinitivo",
        [
          "Recuerda: con verbos de emoción pasa lo mismo que con querer. Si quien siente y quien hace la acción son la misma persona → infinitivo: Me alegro de verte (yo me alegro, yo te veo). Si son distintas → que + subjuntivo: Me alegro de que me veas (yo me alegro, tú me ves).",
          "Con gustar, encantar, molestar, la persona que siente es me / te / le: Me encanta bailar (yo bailo) / Me encanta que bailes (tú bailas). La preposición se mantiene: tengo miedo de perder / tengo miedo de que pierdas.",
        ],
        [
          ["Siento llegar tarde. / Siento que llegues tarde.", "I'm sorry I'm late. / I'm sorry you're late."],
          ["Le molesta esperar. / Le molesta que lo hagan esperar.", "He hates waiting. / He hates it when they make him wait."],
        ],
        [
          mc(
            "«Me encanta ___ contigo.» (yo)",
            ["bailar", "que baile", "que bailo", "bailando"],
            0,
            "A mí me encanta y yo bailo: mismo sujeto → infinitivo, me encanta bailar. «Que baile» se usaría para otra persona, «que bailo» usa indicativo y «bailando» es gerundio."
          ),
          fb("Completa.", "A mis padres les preocupa que ___ solo de noche. (volver, yo)", "vuelva", "Les preocupa a ellos, pero vuelvo yo: dos personas → que + subjuntivo, vuelva."),
        ]
      ),
    ],
    [
      mc(
        "«Me encanta que ___ conmigo.» (tú)",
        ["bailes", "bailar", "bailas", "bailando"],
        0,
        "Me encanta a mí, pero bailas tú: otro sujeto → que + subjuntivo, que bailes. «Bailar» sería para el mismo sujeto, «bailas» es indicativo y «bailando» es gerundio."
      ),
      fb("Completa.", "Tengo miedo de ___ el avión. (perder, yo)", "perder", "Yo tengo miedo y yo pierdo: mismo sujeto → de + infinitivo."),
      fb("Completa.", "Tengo miedo de que ___ el avión. (perder, ellos)", "pierdan", "Otro sujeto → de que + subjuntivo; perder cambia e → ie: pierdan."),
      fb("Completa.", "Nos alegra ___ aquí. (estar, nosotros)", "estar", "Nos alegra a nosotros y nosotros estamos: infinitivo."),
      fb("Completa.", "Nos alegra que ___ aquí. (estar, vosotros)", "estéis", "Nos alegra a nosotros, pero estáis vosotros: que + subjuntivo, estéis."),
      fb("Completa.", "Odio ___ temprano. (levantarme)", "levantarme", "Yo odio y yo me levanto: infinitivo, con el pronombre pegado."),
      fb("Completa.", "Odio que me ___ temprano. (despertar, ellos)", "despierten", "Otro sujeto → que + subjuntivo; despertar cambia e → ie: despierten."),
      toEs("Siento no poder ayudarte.", "Siento que mi hermano no pueda ayudarte.", "Con otro sujeto (mi hermano), el infinitivo pasa a que + subjuntivo: pueda.", [], "Cambia la frase para que quien no puede ayudar sea «mi hermano»."),
      toEs("Me da miedo que conduzcas de noche.", "Me da miedo conducir de noche.", "Si quien tiene miedo y quien conduce es la misma persona (yo), va el infinitivo.", [], "Transforma la frase para que conduzca la misma persona que tiene miedo (yo)."),
      toEs("«Me alegro de que yo apruebe el examen.»", "Me alegro de aprobar el examen.", "Yo me alegro y yo apruebo: el mismo sujeto pide de + infinitivo, sin que.", [], "Corrige la frase."),
      toEs("«Siento que tú no venir a la cena.»", "Siento que no vengas a la cena.", "Con otro sujeto hace falta un verbo conjugado en subjuntivo: vengas. El infinitivo no puede ir detrás de que.", ["Siento que tú no vengas a la cena."], "Corrige la frase."),
      toEs("I'm afraid of losing my job.", "Tengo miedo de perder mi trabajo.", "Mismo sujeto (yo tengo miedo, yo pierdo) → infinitivo: de perder.", ["Me da miedo perder mi trabajo."]),
    ]
  ),
  L(
    "subjunctive-wishes-doubt-emotion-drill-3",
    "b1d-cuento-mensajes-grupo",
    "Cuento con huecos: el grupo de amigos",
    "Mensajes de un grupo que organiza una cena: deseos, dudas y reacciones en cada línea.",
    "8 min",
    [
      sec(
        "Recuerda la regla y lee los mensajes",
        [
          "Recuerda: en cada mensaje decide si la persona informa o sabe algo (indicativo: sé que eres vegetariano) o si desea, duda o reacciona (subjuntivo: quiero que cenemos, dudo que pueda, me da pena que no vengas).",
          "Ana: Quiero que cenemos juntos el viernes. — Luis: ¡Qué bien que lo organices tú! — Marta: Dudo que yo pueda, trabajo hasta tarde. — Ana: Me da pena que no vengas. — Pedro: Espero que haya comida vegetariana. — Ana: Claro, sé que eres vegetariano.",
        ],
        [
          ["Marta: Dudo que yo pueda, trabajo hasta tarde.", "I doubt I can, I work late. (duda → pueda; hecho → trabajo)"],
          ["Ana: Claro, sé que eres vegetariano.", "Of course, I know you're a vegetarian. (saber → indicativo)"],
        ],
        [
          mc(
            "¿Por qué Marta no irá?",
            ["trabaja hasta tarde", "está enferma", "no le gusta la comida", "está de viaje"],
            0,
            "Marta no irá porque trabaja hasta tarde. No dice que esté enferma, que no le guste la comida ni que esté de viaje."
          ),
          mc(
            "¿Por qué Ana escribe «sé que eres» y no «sé que seas»?",
            ["Porque saber presenta la información como un hecho.", "Porque ser es irregular.", "Porque Pedro es un amigo.", "Porque el mensaje es corto."],
            0,
            "Saber que afirma algo real, así que va con indicativo (eres). Con duda (dudo que seas) sí iría el subjuntivo."
          ),
        ]
      ),
    ],
    [
      fb("Completa el mensaje nuevo de Luis.", "Quiero que ___ el postre vosotros. (traer)", "traigáis", "Querer que + otra persona → subjuntivo; traigo → traigáis."),
      fb("Completa el mensaje nuevo de Pedro.", "¡Qué bien que ___ buen tiempo el viernes! (hacer)", "haga", "Qué bien que expresa reacción → subjuntivo; hago → haga."),
      fb("Completa el mensaje nuevo de Marta.", "Dudo que el jefe me ___ salir antes. (dejar)", "deje", "Dudar que → subjuntivo: deje."),
      fb("Completa.", "Me da pena que Marta no ___. (venir)", "venga", "Me da pena que → subjuntivo; vengo → venga."),
      fb("Completa.", "Espero que ___ sitio para todos en el restaurante. (haber)", "haya", "Esperar que → subjuntivo; haber → haya, siempre en singular."),
      fb("Completa.", "Sé que el restaurante ___ los viernes. (abrir)", "abre", "Saber que → indicativo: abre."),
      mc(
        "«Me alegro de que todos ___ venir menos Marta.»",
        ["podáis", "podéis", "poder", "podríais"],
        0,
        "«Me alegro de que» expresa emoción y pide subjuntivo: podáis. «Podéis» es indicativo, «poder» es infinitivo y «podríais» es condicional."
      ),
      mc(
        "Marta escribe: «Al final puedo ir.» ¿Qué responde Ana?",
        ["¡Qué alegría que puedas venir!", "¡Qué alegría que puedes venir!", "¡Qué alegría poder venir tú!", "¡Sé que puedas venir!"],
        0,
        "Una reacción sobre otra persona: qué alegría que + subjuntivo (puedas). «Puedes» es indicativo y «sé que» no admite subjuntivo."
      ),
      toEs("Marta puede venir.", "Dudo que Marta pueda venir.", "Dudar que no afirma: el verbo pasa a subjuntivo, puede → pueda.", [], "Transforma el mensaje con «Dudo que...»."),
      toEs("Sé que Pedro es vegetariano.", "No creo que Pedro sea vegetariano.", "Saber que afirma (indicativo, es); no creer que duda (subjuntivo, sea).", [], "Cambia «Sé que» por «No creo que»."),
      toEs("«Ana: Espero que todos venís a las nueve.»", "Ana: Espero que todos vengáis a las nueve.", "Esperar que + otra persona → subjuntivo; venir copia el yo vengo: vengáis.", ["Espero que todos vengáis a las nueve."], "Corrige el mensaje."),
      toEs("«Luis: Sé que Ana cocine muy bien.»", "Luis: Sé que Ana cocina muy bien.", "Saber que presenta un hecho: indicativo, cocina.", ["Sé que Ana cocina muy bien."], "Corrige el mensaje."),
      toEs("I hope everyone has a great time.", "Espero que todos lo pasen muy bien.", "Esperar que + subjuntivo: todos lo pasen bien.", ["Espero que todos lo paséis genial.", "Espero que todos se diviertan mucho."]),
    ]
  ),
  L(
    "subjunctive-wishes-doubt-emotion-drill-3",
    "b1d-habla-de-ti-dudas",
    "Habla de ti: lo que dudas y lo que crees",
    "Opiniones personales sobre el futuro del mundo y de tu vida: creo que + indicativo, no creo que + subjuntivo.",
    "7 min",
    [
      sec(
        "Recuerda la regla: opinar con matices",
        [
          "Recuerda: cuando opinas en afirmativo (creo que, pienso que, me parece que, estoy convencido de que) presentas la idea como verdadera → indicativo. Cuando la niegas o dudas (no creo que, dudo que, no me parece que) ya no la afirmas → subjuntivo.",
          "Para el futuro en subjuntivo no hay forma especial: usa el presente (no creo que llueva) o ir a (no creo que vaya a llover).",
        ],
        [
          ["Pienso que las ciudades van a tener menos coches.", "I think cities are going to have fewer cars. (afirma → indicativo)"],
          ["No me parece que sea buena idea.", "I don't think it's a good idea. (niega → subjuntivo)"],
        ],
        [
          mc(
            "«No me parece que ___ justo.»",
            ["sea", "es", "será", "ser"],
            0,
            "«No me parece que» niega una opinión y pide subjuntivo: sea. «Es» y «será» son indicativo (irían con «me parece que»), y «ser» es infinitivo."
          ),
          fb("Completa.", "Dudo que mis hijos ___ en la misma ciudad que yo. (vivir)", "vivan", "Dudar que → subjuntivo: vivan. El futuro se expresa con el presente de subjuntivo."),
        ]
      ),
    ],
    [
      toEs("I think technology helps us.", "Creo que la tecnología nos ayuda.", "«Creo que» afirmativo → indicativo: ayuda.", ["Pienso que la tecnología nos ayuda."]),
      toEs("I don't think robots will replace teachers.", "No creo que los robots vayan a reemplazar a los profesores.", "No creo que + subjuntivo; el futuro se expresa con ir a: vayan a reemplazar.", ["No creo que los robots reemplacen a los profesores.", "No creo que los robots sustituyan a los profesores."]),
      fb("Completa.", "Dudo que ___ a vivir en el extranjero. (ir, yo)", "vaya", "Dudar que → subjuntivo; el futuro con ir a: vaya a vivir."),
      fb("Completa.", "Me parece que la gente ___ menos que antes. (leer)", "lee", "Me parece que afirmativo → indicativo: lee."),
      fb("Completa.", "No pienso que el problema ___ fácil de resolver. (ser)", "sea", "No pensar que niega la opinión → subjuntivo: sea."),
      fb("Completa.", "Estoy convencido de que la situación ___ a mejorar. (ir)", "va", "Estar convencido de que expresa certeza → indicativo: va."),
      wo("No creo que mi ciudad cambie mucho en diez años.", "No creo que + subjuntivo: cambie.", "I don't think my city will change much in ten years."),
      toEs("Creo que trabajaremos menos horas en el futuro.", "No creo que trabajemos menos horas en el futuro.", "Al negar creer, el futuro pasa a presente de subjuntivo: trabajaremos → trabajemos.", ["No creo que vayamos a trabajar menos horas en el futuro."], "Cambia la opinión a negativa (No creo que...)."),
      toEs("No creo que el clima mejore.", "Creo que el clima va a mejorar.", "Si afirmas, el verbo vuelve al indicativo: mejore → va a mejorar (o mejorará).", ["Creo que el clima mejorará.", "Creo que el clima mejora."], "Cambia la opinión a afirmativa (Creo que...)."),
      toEs("«No creo que los coches eléctricos serán más baratos pronto.»", "No creo que los coches eléctricos sean más baratos pronto.", "No creer que pide subjuntivo, también para el futuro: sean, no serán.", ["No creo que los coches eléctricos vayan a ser más baratos pronto."], "Corrige la frase."),
      toEs("«Pienso que la gente lea más en el móvil que en papel.»", "Pienso que la gente lee más en el móvil que en papel.", "Pensar que en afirmativo afirma: indicativo, lee.", [], "Corrige la frase."),
      {
        type: "speak",
        prompt: "Habla de ti: di algo que crees que va a pasar en tu ciudad y algo que no crees que pase.",
        text: "Creo que va a haber más bicicletas, pero no creo que desaparezcan los coches.",
        explanation: "Creo que + indicativo (va a haber); no creo que + subjuntivo (desaparezcan). Tu respuesta puede ser otra: comprueba esa diferencia.",
      },
    ]
  ),
  L(
    "subjunctive-wishes-doubt-emotion-drill-3",
    "b1d-cadena-deseos-a-consejos",
    "Cadena de transformaciones: querer, pedir, aconsejar, prohibir",
    "Practica los verbos de influencia (querer, pedir, aconsejar, prohibir...) con que + subjuntivo cuando cambia el sujeto.",
    "7 min",
    [
      sec(
        "Recuerda la regla: influir en otra persona",
        [
          "Recuerda: querer que, pedir que, aconsejar que, recomendar que, prohibir que, permitir que y necesitar que intentan que otra persona haga algo. Esa acción todavía no es real, por eso va en subjuntivo. La persona suele aparecer también como pronombre: Te pido que me ayudes. Te prohíbo que salgas.",
          "Un mandato (ayúdame) y estos verbos dicen casi lo mismo; cambiar de uno a otro es solo cambiar la forma del verbo.",
        ],
        [
          ["El médico me recomienda que descanse.", "The doctor recommends that I rest. (me = a quien influye)"],
          ["Mis padres no me permiten que salga de noche.", "My parents don't allow me to go out at night."],
        ],
        [
          fb("Completa.", "Te pido que me ___ la verdad. (decir)", "digas", "Pedir que + subjuntivo; digo → digas."),
          fb("Aplica la regla a un verbo nuevo.", "El entrenador nos exige que ___ cada día. (correr)", "corramos", "Exigir que también es un verbo de influencia: subjuntivo, corramos."),
        ]
      ),
    ],
    [
      fb("Cambia el verbo.", "Quiero que vengas. → Te pido que ___ conmigo al médico. (ir)", "vayas", "«Pedir que» pide subjuntivo; el de ir es irregular: vayas."),
      fb("Completa.", "El médico le aconseja que ___ menos sal. (tomar)", "tome", "Aconsejar que + subjuntivo: tome."),
      fb("Completa.", "Te recomiendo que ___ el museo por la mañana. (visitar)", "visites", "Recomendar que + subjuntivo: visites."),
      fb("Completa.", "La profesora nos prohíbe que ___ el móvil en clase. (usar)", "usemos", "Prohibir que + subjuntivo; nos indica quién: usemos."),
      fb("Completa.", "Necesito que me ___ con las maletas. (ayudar, tú)", "ayudes", "Necesitar que + subjuntivo: ayudes."),
      fb("Completa.", "Mis padres me permiten que ___ hasta las doce. (salir)", "salga", "Permitir que + subjuntivo; salgo → salga."),
      mc(
        "«Te aconsejo que no le ___ nada.» (decir)",
        ["digas", "dices", "decir", "dirás"],
        0,
        "«Aconsejar que» con otro sujeto pide subjuntivo: no le digas. «Dices» es indicativo, «decir» es infinitivo y «dirás» es futuro."
      ),
      toEs("Cierra la ventana.", "Te pido que cierres la ventana.", "El mandato se convierte en petición: te pido que + subjuntivo, cierra → cierres.", [], "Transforma el mandato en una petición con «Te pido que...»."),
      toEs("Te recomiendo que salgas temprano.", "Os recomiendo que salgáis temprano.", "Cambia la persona en los dos sitios: te → os y salgas → salgáis.", ["Les recomiendo que salgan temprano."], "Cambia a vosotros."),
      toEs("«El médico me prohíbe que como dulces.»", "El médico me prohíbe que coma dulces.", "Prohibir que + subjuntivo: coma. «Como» es indicativo.", [], "Corrige la frase."),
      toEs("«Te pido que me ayudas con los deberes.»", "Te pido que me ayudes con los deberes.", "Pedir que + subjuntivo: ayudes (-ar → e).", ["Te pido que me ayudes con la tarea."], "Corrige la frase."),
      toEs("I recommend that you try the paella.", "Te recomiendo que pruebes la paella.", "Recomendar que + subjuntivo; probar → pruebes.", ["Le recomiendo que pruebe la paella.", "Les recomiendo que prueben la paella.", "Os recomiendo que probéis la paella."]),
    ]
  ),
  L(
    "subjunctive-wishes-doubt-emotion-drill-3",
    "b1d-practica-mezclada-wde",
    "Práctica mezclada: los disparadores sin aviso",
    "Frases sueltas de la vida diaria: ninguna pista sobre el modo. Decide y conjuga.",
    "7 min",
    [
      sec(
        "Recuerda la regla: tres preguntas sin red",
        [
          "Recuerda: 1) ¿Hay que? Si no lo hay y el sujeto es el mismo, va el infinitivo (quiero hablar). 2) ¿Lo que va antes de que afirma o sabe algo (creo que, sé que, es evidente que)? → indicativo. 3) ¿Desea, duda, reacciona o valora (quiero que, dudo que, me alegro de que, temo que)? → subjuntivo.",
        ],
        [
          ["Mi madre prefiere que no fumemos en casa.", "My mother prefers that we don't smoke at home. (preferencia → subjuntivo)"],
          ["Es evidente que te gusta este trabajo.", "It's obvious you like this job. (certeza → indicativo)"],
        ],
        [
          fb("Completa.", "A mi padre le molesta que ___ la tele tan alta. (poner, nosotros)", "pongamos", "Molestar que es una reacción → subjuntivo; pongo → pongamos."),
        ]
      ),
    ],
    [
      fb("Completa.", "Me parece que Juan ___ razón. (tener)", "tiene", "Me parece que afirma una opinión → indicativo: tiene."),
      fb("Completa.", "Me encanta que me ___ flores. (regalar, tú)", "regales", "Me encanta que expresa emoción → subjuntivo: regales."),
      fb("Completa.", "No estoy segura de que ___ la verdad. (decir, él)", "diga", "No estar seguro es duda → subjuntivo; digo → diga."),
      fb("Completa.", "Quiero ___ contigo. (hablar, yo)", "hablar", "Sin que y con el mismo sujeto → infinitivo."),
      fb("Completa.", "Es evidente que ___ cansado. (estar, tú)", "estás", "Es evidente que afirma → indicativo: estás."),
      fb("Completa.", "Tememos que ___ demasiado tarde. (ser)", "sea", "Temer que expresa miedo → subjuntivo: sea."),
      fb("Completa.", "Sabemos que ___ mucho. (trabajar, vosotros)", "trabajáis", "Saber que informa → indicativo: trabajáis."),
      mc(
        "«Me sorprende que ___ tan temprano.» (levantarse, tú)",
        ["te levantes", "te levantas", "levantarte", "te levantarás"],
        0,
        "«Me sorprende que» expresa emoción: subjuntivo, con el reflexivo delante: te levantes. «Te levantas» es indicativo, «levantarte» es infinitivo (mismo sujeto) y «te levantarás» es futuro."
      ),
      toEs("Es verdad que el piso es pequeño.", "Es una pena que el piso sea pequeño.", "Es verdad que afirma (indicativo, es); es una pena que valora (subjuntivo, sea).", ["Es una lástima que el piso sea pequeño."], "Cambia «Es verdad que» por «Es una pena que»."),
      toEs("Quiero aprender a conducir.", "Quiero que mi hija aprenda a conducir.", "Con otro sujeto (mi hija) el infinitivo pasa a que + subjuntivo: aprenda.", [], "Cambia la frase para que quien aprende sea «mi hija»."),
      toEs("«Es evidente que el jefe esté enfadado.»", "Es evidente que el jefe está enfadado.", "Es evidente que presenta un hecho: indicativo, está.", [], "Corrige la frase."),
      toEs("«Me alegro de que mañana es festivo.»", "Me alegro de que mañana sea festivo.", "Alegrarse de que es una reacción: subjuntivo, sea.", [], "Corrige la frase."),
    ]
  ),
  L(
    "subjunctive-wishes-doubt-emotion-drill-3",
    "b1d-elige-explica-parecer",
    "Elige y explica: me parece que / me parece bien que",
    "Parecer cambia de modo según su significado: opinión (indicativo) o valoración (subjuntivo).",
    "7 min",
    [
      sec(
        "Recuerda la regla: dos «parecer»",
        [
          "Recuerda: me parece que + indicativo = I think (das una opinión sobre lo que es verdad): Me parece que va a llover. Me parece bien / mal / raro / genial que + subjuntivo = valoras algo, como con es bueno que o es raro que: Me parece bien que vengas.",
          "La pista es el adjetivo: si entre parece y que hay bien, mal, raro, genial, fatal..., es una valoración. Y negado, la opinión pasa a subjuntivo: No me parece que sea caro.",
        ],
        [
          ["Me parece que tienes fiebre.", "I think you have a fever. (opinión → indicativo)"],
          ["Me parece genial que estudies música.", "I think it's great that you study music. (valoración → subjuntivo)"],
        ],
        [
          mc(
            "«Me parece raro que no ___ nadie.»",
            ["conteste", "contesta", "contestar", "contestará"],
            0,
            "«Me parece raro que» es una valoración y pide subjuntivo: conteste. «Contesta» y «contestará» son indicativo, y «contestar» es infinitivo."
          ),
        ]
      ),
    ],
    [
      mc(
        "«Me parece que el restaurante ___ cerrado.»",
        ["está", "esté", "estar", "estuviera"],
        0,
        "«Me parece que» en afirmativo da una opinión y pide indicativo: está cerrado. «Esté» y «estuviera» son subjuntivo (irían con «no me parece que»), y «estar» es infinitivo."
      ),
      fb("Completa.", "Me parece bien que ___ un descanso. (tomar, vosotros)", "toméis", "Me parece bien que valora → subjuntivo: toméis."),
      fb("Completa.", "Me parece que ya ___ las diez. (ser)", "son", "Me parece que da una opinión → indicativo: son."),
      fb("Completa.", "Me parece fatal que ___ tanto el alquiler. (subir)", "suba", "Me parece fatal que valora → subjuntivo: suba."),
      fb("Completa.", "No me parece que ___ necesario. (ser)", "sea", "Opinión negada → subjuntivo: sea."),
      fb("Aplica la regla a una valoración nueva.", "Me parece injusto que solo ___ los jóvenes. (pagar)", "paguen", "Injusto entre parece y que → valoración → subjuntivo; pagar es -gar: paguen."),
      ms(
        "¿Qué frases llevan subjuntivo?",
        ["Me parece genial que…", "Me parece que…", "Me parece mal que…", "No me parece que…"],
        [0, 2, 3],
        "«Me parece genial que» y «me parece mal que» valoran, y «no me parece que» niega una opinión: las tres piden subjuntivo. Solo «Me parece que…» (opinión afirmativa) lleva indicativo."
      ),
      toEs("Me parece que Lucía se va a Londres.", "Me parece genial que Lucía se vaya a Londres.", "Al añadir genial, la opinión se convierte en valoración y pide subjuntivo: va → vaya.", ["Me parece estupendo que Lucía se vaya a Londres."], "Transforma la opinión en una valoración con «Me parece genial que...»."),
      toEs("Me parece que el plan es caro.", "No me parece que el plan sea caro.", "Al negar la opinión, el verbo pasa a subjuntivo: es → sea.", [], "Cambia a la forma negativa."),
      toEs("«Me parece bien que vienes con nosotros.»", "Me parece bien que vengas con nosotros.", "Me parece bien que es una valoración: subjuntivo, vengas (de vengo).", [], "Corrige la frase."),
      toEs("«Me parece que tu hermano tenga razón.»", "Me parece que tu hermano tiene razón.", "Me parece que sin adjetivo da una opinión afirmativa: indicativo, tiene.", [], "Corrige la frase."),
      toEs("I think it's great that you're learning Spanish.", "Me parece genial que aprendas español.", "«Me parece genial que» valora → subjuntivo: aprendas.", ["Me parece estupendo que aprendas español."]),
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
        [
          "Recuerda la regla: es + adjetivo de valoración + que + subjuntivo. Es importante, necesario, mejor, posible, raro o normal no dicen lo que pasa, sino cómo lo vemos; por eso la acción va en subjuntivo.",
          "La pregunta clave es: ¿hay un sujeto concreto? Sí → que + subjuntivo (Es importante que bebas agua). No, es una regla general → infinitivo, sin «que» (Es importante beber agua). El patrón vale para cualquier adjetivo de valoración nuevo: es urgente que, es fundamental que, es lógico que…",
        ],
        [
          ["Es importante que bebas agua.", "It's important that you drink water. (tú → subjuntivo)"],
          ["Es importante beber agua.", "It's important to drink water. (regla general → infinitivo)"],
          ["Es lógico que estén enfadados.", "It's logical that they're angry. (adjetivo nuevo, mismo patrón)"],
        ],
        [
          fb("Completa.", "Es necesario que ___ el formulario. (rellenar, usted)", "rellene", "Es necesario que + sujeto concreto (usted) → subjuntivo: rellene."),
          mc(
            "Aplica el patrón a un adjetivo nuevo: «Es urgente que el médico ___ al paciente.» (ver)",
            ["vea", "ve", "ver", "verá"],
            0,
            "Es urgente es una valoración, como es importante → que + subjuntivo: vea. «Ve» y «verá» son indicativo, y «ver» solo sirve sin sujeto concreto."
          ),
        ]
      ),
    ],
    [
      fb("Mismo marco.", "Es mejor que ___ en taxi. (ir, nosotros)", "vayamos", "Es mejor que + subjuntivo; ir es irregular: vaya, vayamos."),
      fb("Mismo marco.", "Es posible que ___ tarde. (llegar, ellos)", "lleguen", "Es posible que + subjuntivo; -gar → -gue para mantener el sonido /g/: lleguen."),
      fb("Mismo marco.", "Es raro que Ana no ___. (contestar)", "conteste", "Es raro que valora (lo encuentra extraño) → subjuntivo: conteste."),
      fb("Mismo marco.", "Es normal que ___ nervioso antes de un examen. (estar, tú)", "estés", "Es normal que + sujeto concreto (tú) → subjuntivo: estés."),
      fb("Sin sujeto concreto.", "Es importante ___ bien. (dormir)", "dormir", "Regla general, para todo el mundo → infinitivo, sin «que»."),
      mt(
        "Relaciona el comienzo con el final.",
        [
          ["Es mejor…", "…no decir nada."],
          ["Es mejor que…", "…no digas nada."],
          ["Es posible que…", "…nieve mañana."],
        ],
        "Sin «que» va el infinitivo (regla general: no decir); con «que» va un subjuntivo con sujeto concreto (no digas, nieve)."
      ),
      mc(
        "«Es necesario que todos ___ el plan.» (conocer)",
        ["conozcan", "conocen", "conocer", "conozcáis ellos"],
        0,
        "«Es necesario que» pide subjuntivo, formado desde la forma yo: conozco → conozcan. «Conocen» es indicativo, «conocer» es infinitivo y «conozcáis» es de vosotros, no de todos (ellos)."
      ),
      toEs("It's better that you rest today. (tú)", "Es mejor que descanses hoy.", "«Es mejor que» + sujeto concreto → subjuntivo: descanses.", ["Mejor que descanses hoy."]),
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
        [
          "Recuerda la regla: la expresión decide si lo que sigue es un hecho o no. Certeza → indicativo, porque afirmas: es verdad que, es cierto que, es obvio que, está claro que, es evidente que. Posibilidad o valoración → subjuntivo, porque no afirmas que pase: es posible que, es probable que, puede que, es increíble que, es una pena que.",
          "Truco: si puedes añadir «y es un hecho» sin contradecirte, va indicativo. Negadas, las de certeza ya no afirman nada y pasan a subjuntivo: No es verdad que sea caro.",
        ],
        [
          ["Es verdad que hace frío.", "It's true it's cold. (hecho → indicativo)"],
          ["Es posible que haga frío.", "It may be cold. (posibilidad → subjuntivo)"],
          ["Es una pena que haga tanto frío.", "It's a shame it's so cold. (valoración → subjuntivo, aunque sea verdad)"],
          ["No es verdad que haga tanto frío.", "It's not true that it's that cold. (certeza negada → subjuntivo)"],
        ],
        [
          mc(
            "«Es obvio que ___ razón.»",
            ["tienes", "tengas", "tener", "tuvieras"],
            0,
            "«Es obvio que» expresa certeza: indicativo, tienes. «Tengas» y «tuvieras» son subjuntivo, que se usa con duda o hipótesis, y «tener» es infinitivo."
          ),
        ]
      ),
    ],
    [
      mc(
        "«Es probable que ___ razón.»",
        ["tengas", "tienes", "tener", "tendrás"],
        0,
        "«Es probable que» expresa probabilidad, no certeza, y lleva subjuntivo: tengas. «Tienes» y «tendrás» son indicativo, y «tener» es infinitivo."
      ),
      fb("Completa.", "Está claro que mi hermana ___ mejor que yo al tenis. (jugar)", "juega", "Está claro que afirma un hecho → indicativo: juega (u → ue)."),
      fb("Completa.", "Puede que ___ esta tarde. (llover)", "llueva", "Puede que solo plantea una posibilidad → subjuntivo: llueva (o → ue)."),
      fb("Completa.", "Es cierto que Madrid ___ muy cara. (ser)", "es", "Es cierto que afirma → indicativo: es."),
      fb("Completa.", "No es cierto que Madrid ___ tan cara. (ser)", "sea", "Al negar «es cierto», ya no afirmas nada → subjuntivo: sea."),
      fb("Completa.", "Es increíble que ___ tanta gente. (haber)", "haya", "Es increíble valora el hecho (te sorprende) → subjuntivo: haya, aunque la gente esté ahí de verdad."),
      ms(
        "¿Qué expresiones llevan indicativo?",
        ["es evidente que", "es cierto que", "es posible que", "está claro que"],
        [0, 1, 3],
        "Es evidente que, es cierto que y está claro que expresan certeza: indicativo. «Es posible que» expresa posibilidad y lleva subjuntivo."
      ),
      toEs("It's possible that the shop is closed.", "Es posible que la tienda esté cerrada.", "«Es posible que» expresa posibilidad → subjuntivo: esté.", ["Puede que la tienda esté cerrada."]),
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
        [
          "Recuerda la regla: ojalá (que) + presente de subjuntivo = I hope / let's hope.",
          "Por qué siempre subjuntivo: ojalá no es un verbo, sino una palabra que viene del árabe («si Dios quiere»). Solo sirve para desear, y un deseo nunca es un hecho, así que nunca va con indicativo ni con futuro. Como no es un verbo, tampoco cambia con la persona: el verbo que sigue concuerda con su propio sujeto (Ojalá mis amigos vengan).",
        ],
        [
          ["Ojalá haga buen tiempo el sábado.", "I hope the weather's good on Saturday. (hacer → haga)"],
          ["Ojalá que no te duela mucho.", "I hope it doesn't hurt you much. (que es opcional)"],
          ["Ojalá mis amigos lleguen a tiempo.", "I hope my friends arrive on time. (el verbo concuerda con mis amigos)"],
        ],
        [
          fb("Rápido.", "Ojalá ___ la lotería. (ganar, nosotros)", "ganemos", "Ojalá es un deseo → subjuntivo: ganemos (-ar → -e)."),
          mc(
            "«Ojalá ___ en mayo.» (casarse, mi hermana)",
            ["se case", "se casa", "se casará", "casarse"],
            0,
            "Ojalá → siempre subjuntivo: se case. «Se casa» y «se casará» afirman o predicen un hecho, y «casarse» es infinitivo, imposible tras ojalá."
          ),
        ]
      ),
    ],
    [
      fb("Rápido.", "Ojalá no ___ tráfico. (haber)", "haya", "El subjuntivo de «hay» es «haya»."),
      fb("Rápido.", "Ojalá que mi abuela ___ pronto. (mejorar)", "mejore", "Verbo regular en -ar: la a pasa a e → mejore."),
      fb("Rápido.", "Ojalá ___ entradas para el concierto. (conseguir, yo)", "consiga", "Sale de «consigo»: e → i, y gu → g delante de a para mantener el sonido /g/: consiga."),
      fb("Rápido.", "Ojalá que no ___ el tren. (perder, vosotros)", "perdáis", "Perder diptonga (pierda), pero no en nosotros ni vosotros: perdáis."),
      fb("Rápido.", "Ojalá ___ verdad. (ser)", "sea", "Ser es irregular en subjuntivo: sea."),
      fb("Rápido.", "Ojalá me ___ el trabajo. (dar, ellos)", "den", "Dar en subjuntivo: dé, des, dé, demos, deis, den."),
      mc(
        "«Ojalá ___ mañana.» (venir, tú)",
        ["vengas", "vienes", "vendrás", "venir"],
        0,
        "«Ojalá» siempre va con subjuntivo: ojalá vengas. «Vienes» y «vendrás» son indicativo, y «venir» es infinitivo."
      ),
      toEs("I hope you like it. (tú)", "Ojalá te guste.", "«I hope» como deseo = ojalá + subjuntivo: te guste.", ["Ojalá que te guste.", "Espero que te guste."]),
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
        [
          "Recuerda la regla: es importante / mejor / necesario / recomendable que y ojalá no afirman un hecho, lo valoran o lo desean → subjuntivo. Es verdad / obvio / evidente que sí afirman → indicativo.",
          "Este folleto tiene un error en cada consejo (✗). Antes de seguir, decide tú la forma correcta de cada verbo marcado: «Es importante que ✗ bebes dos litros de agua al día. Es mejor que ✗ caminas treinta minutos. Es verdad que el deporte ✗ sea bueno para la salud. Es necesario que ✗ duermes ocho horas. Ojalá todos ✗ siguen estos consejos.»",
        ],
        [
          ["Es recomendable que descanses después de comer.", "It's advisable that you rest after eating. (valoración → subjuntivo)"],
          ["Es evidente que el estrés nos cansa.", "It's evident that stress tires us. (certeza → indicativo)"],
        ],
        [
          fb("Corrige.", "Es importante que ___ dos litros de agua. (el folleto dice: bebes)", "bebas", "«Es importante que» es una valoración → subjuntivo: bebas, no «bebes»."),
        ]
      ),
    ],
    [
      fb("Corrige.", "Es mejor que ___ treinta minutos al día. (el folleto dice: caminas)", "camines", "«Es mejor que» es una valoración → subjuntivo: camines, no «caminas»."),
      fb("Corrige.", "Es verdad que el deporte ___ bueno. (el folleto dice: sea)", "es", "«Es verdad que» presenta un hecho → indicativo: es, no «sea»."),
      fb("Corrige.", "Es necesario que ___ ocho horas. (el folleto dice: duermes)", "duermas", "«Es necesario que» → subjuntivo; dormir cambia o→ue: duermas."),
      fb("Corrige.", "Ojalá todos ___ estos consejos. (el folleto dice: siguen)", "sigan", "«Ojalá» siempre va con subjuntivo; seguir cambia e→i y gu→g: sigan."),
      fb("Corrige.", "Es obvio que el azúcar ___ perjudicial. (el folleto dice: sea)", "es", "«Es obvio que» expresa certeza → indicativo: es, no «sea»."),
      mc(
        "¿Qué consejo está bien escrito?",
        ["Es recomendable que comas fruta cada día.", "Es recomendable que comes fruta cada día.", "Es recomendable comes fruta.", "Es recomendable que comer fruta."],
        0,
        "Una recomendación con otro sujeto pide subjuntivo: es recomendable que comas. «Que comes» usa indicativo, «Es recomendable comes» omite el «que» y «que comer» mezcla «que» con infinitivo."
      ),
      toEs("It's important that we eat more vegetables.", "Es importante que comamos más verduras.", "«Es importante que» + sujeto concreto → subjuntivo: comamos.", []),
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
        [
          "Recuerda la regla: una expresión impersonal (es necesario, es mejor, es importante, es fundamental, es conveniente) puede dar un consejo general o uno personal.",
          "General, para todo el mundo → infinitivo, sin «que»: Es necesario ahorrar. Personal, para alguien concreto → que + subjuntivo: Es necesario que ahorres. Por qué: el infinitivo no tiene persona; en cuanto quieres decir quién, necesitas un verbo conjugado, y tras una valoración ese verbo va en subjuntivo. Los pronombres se pegan al infinitivo (es mejor acostarse) y van delante del subjuntivo (es mejor que te acuestes).",
        ],
        [
          ["Es fundamental estudiar.", "It's essential to study. (general → infinitivo)"],
          ["Es fundamental que estudiéis.", "It's essential that you all study. (vosotros → subjuntivo)"],
          ["Es mejor no decírselo. → Es mejor que no se lo digas.", "It's better not to tell him. → It's better if you don't tell him. (el pronombre se mueve)"],
        ],
        [
          fb("Cambia al consejo personal (tú).", "Es mejor esperar. → Es mejor que ___.", "esperes", "Con «que» y un sujeto concreto (tú), la expresión pide subjuntivo: esperes."),
        ]
      ),
    ],
    [
      fb("Cambia al consejo personal (nosotros).", "Es necesario salir ya. → Es necesario que ___ ya.", "salgamos", "Es necesario que + subjuntivo, formado desde salgo: salgamos."),
      fb("Cambia al consejo personal (vosotros).", "Es importante hacer ejercicio. → Es importante que ___ ejercicio.", "hagáis", "Es importante que + subjuntivo, formado desde hago: hagáis."),
      fb("Cambia al consejo personal (ustedes).", "Es conveniente llegar pronto. → Es conveniente que ___ pronto.", "lleguen", "Es conveniente que + subjuntivo; -gar → -gue ante e: lleguen."),
      fb("Transforma en consejo general.", "Es mejor que te acuestes pronto. → Es mejor ___ pronto.", "acostarse", "Sin sujeto concreto, la expresión va con infinitivo, y el pronombre se se pega: es mejor acostarse."),
      fb("Transforma en consejo general.", "Es necesario que ahorres. → Es necesario ___.", "ahorrar", "Sin sujeto concreto, la expresión impersonal va con infinitivo: es necesario ahorrar."),
      mc(
        "«Es fundamental ___ la verdad.» (generalización)",
        ["decir", "que digas", "que dices", "dirás"],
        0,
        "Si la frase es una generalización, sin sujeto concreto, se usa el infinitivo: es fundamental decir la verdad. «Que digas» se refiere a una persona concreta, «que dices» usa indicativo y «dirás» es futuro."
      ),
      toEs("It's necessary that you all bring your passports.", "Es necesario que traigáis el pasaporte.", "«You all» = vosotros; es necesario que + subjuntivo, desde traigo: traigáis.", ["Es necesario que traigan el pasaporte.", "Es necesario que traigáis vuestros pasaportes.", "Es necesario que traigáis los pasaportes.", "Es necesario que traigan sus pasaportes.", "Es necesario que traigan los pasaportes."]),
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
        [
          "Recuerda la regla: ojalá + subjuntivo sirve para deseos grandes y pequeños, porque un deseo nunca es un hecho. Ojalá no cambia: el verbo concuerda con quien hace la acción (Ojalá encuentre piso = yo; Ojalá mi equipo gane = mi equipo; Ojalá no haya guerras = hay → haya).",
          "Para hablar de ti: piensa primero en el sujeto de tu deseo y luego forma el subjuntivo desde la forma yo del presente (tengo → tenga, puedo → pueda).",
        ],
        [
          ["Ojalá encuentre un piso cerca del trabajo.", "I hope I find a flat near work. (yo: encuentre)"],
          ["Ojalá mis hijos sean felices.", "I hope my children are happy. (ellos: sean)"],
          ["Ojalá no haya más incendios este verano.", "I hope there are no more fires this summer. (hay → haya)"],
        ],
        [
          mc(
            "«Ojalá mi equipo ___ la liga.»",
            ["gane", "gana", "ganará", "ganar"],
            0,
            "«Ojalá» siempre va con subjuntivo: ojalá gane. «Gana» y «ganará» son indicativo, y «ganar» es infinitivo."
          ),
        ]
      ),
    ],
    [
      toEs("I hope I find a better job this year.", "Ojalá encuentre un trabajo mejor este año.", "Ojalá + subjuntivo; encontrar cambia o→ue: encuentre.", ["Ojalá encuentre un mejor trabajo este año.", "Ojalá que encuentre un trabajo mejor este año."]),
      toEs("I hope my parents are healthy.", "Ojalá mis padres estén sanos.", "Ojalá + subjuntivo; estar sano → estén.", ["Ojalá que mis padres estén sanos.", "Ojalá mis padres tengan buena salud.", "Ojalá que mis padres tengan buena salud.", "Espero que mis padres estén sanos.", "Espero que mis padres tengan buena salud."]),
      toEs("I hope there is peace in the world.", "Ojalá haya paz en el mundo.", "Ojalá + subjuntivo de haber: haya.", ["Ojalá que haya paz en el mundo.", "Espero que haya paz en el mundo."]),
      toEs("I hope we can travel together.", "Ojalá podamos viajar juntos.", "Ojalá + subjuntivo; poder no cambia o→ue en nosotros: podamos.", ["Ojalá que podamos viajar juntos.", "Espero que podamos viajar juntos."]),
      fb("Completa.", "Ojalá ___ más tiempo para leer. (tener, yo)", "tenga", "Ojalá → subjuntivo, formado desde la forma yo: tengo → tenga."),
      fb("Completa.", "Ojalá mis amigos ___ a visitarme. (venir)", "vengan", "El verbo concuerda con mis amigos (ellos): vengo → venga → vengan."),
      wo("Ojalá que este año sea mejor que el anterior.", "Ojalá + subjuntivo (ser → sea) + comparación con «mejor que».", "I hope this year is better than the last one."),
      { type: "speak", prompt: "Responde en voz alta con «ojalá»: ¿qué deseas para tu trabajo o tus estudios este año?", text: "Ojalá aprenda mucho y tenga un buen trabajo este año.", explanation: "Cualquier deseo vale si el verbo va en subjuntivo: aprenda, tenga, consiga, apruebe… Comprueba que no has dicho «aprendo» ni «tengo»." },
      { type: "speak", prompt: "Responde en voz alta con «ojalá»: ¿qué deseas para el mundo?", text: "Ojalá no haya más guerras y todos los niños puedan ir a la escuela.", explanation: "Para «there is / there are» el subjuntivo es haya; con otros sujetos, el verbo concuerda con ellos: los niños puedan." },
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
        [
          "Recuerda la regla: si no estás seguro de tu respuesta, es posible que / es probable que / puede que + subjuntivo (no afirmas nada). Si estás seguro: seguro que + indicativo (lo afirmas).",
          "Al responder, cambia la persona del verbo: la pregunta usa tú (¿Vendrás?), la respuesta yo (Puede que vaya). Y no uses futuro tras estas expresiones: el presente de subjuntivo ya habla del futuro.",
        ],
        [
          ["—¿Llueve mañana? —Es probable que llueva.", "Will it rain tomorrow? — It will probably rain. (duda → subjuntivo)"],
          ["—¿Vendrás a la fiesta? —Puede que vaya un rato.", "Will you come to the party? — I might go for a while. (tú → yo)"],
          ["—¿Te llamo luego? —Sí, seguro que estoy en casa.", "Shall I call you later? — Yes, I'll definitely be at home. (certeza → indicativo)"],
        ],
        [
          fb("Responde.", "—¿Viene tu hermano? —Es posible que ___.", "venga", "«Es posible que» expresa posibilidad → subjuntivo: venga."),
        ]
      ),
    ],
    [
      fb("Responde.", "—¿Aprobarás? —Es probable que ___.", "apruebe", "«Es probable que» → subjuntivo; aprobar cambia o→ue: apruebe."),
      fb("Responde.", "—¿Hay atasco? —Puede que ___ atasco a esta hora.", "haya", "«Puede que» expresa posibilidad → subjuntivo de haber: haya."),
      fb("Responde.", "—¿Está Luis en casa? —Es posible que ___ en el gimnasio.", "esté", "«Es posible que» → subjuntivo; estar → esté (con tilde)."),
      { ...fb("Responde (seguro).", "—¿Vendrás? —Sí, seguro que ___.", "voy", "«Seguro que» expresa certeza → indicativo: voy (o iré). Respondes con ir porque vas hacia donde está quien pregunta."), altAnswers: ["iré", "vengo", "vendré"] },
      fb("Responde.", "—¿Os mudáis este año? —Es probable que nos ___ en verano.", "mudemos", "«Es probable que» → subjuntivo, con el reflexivo delante: nos mudemos."),
      mc(
        "«—¿Saldréis esta noche? —Puede que ___.»",
        ["salgamos", "salimos", "saldremos", "salir"],
        0,
        "«Puede que» expresa posibilidad y pide subjuntivo: puede que salgamos. «Salimos» y «saldremos» son indicativo, y «salir» es infinitivo."
      ),
      toEs("—Is it expensive? —It's probably expensive.", "—¿Es caro? —Es probable que sea caro.", "«Probably» se puede expresar con «es probable que» + subjuntivo: sea.", ["—¿Es caro? —Probablemente sea caro."]),
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
        "Recuerda la regla: ¿informas o reaccionas?",
        [
          "Recuerda la regla: después de «es + adjetivo + que» el modo depende de lo que hace la frase. Si afirmas que algo es cierto (es verdad, es cierto, es obvio, es evidente, está claro, es seguro que), usas indicativo, porque das un hecho como información.",
          "Si valoras, pides o ves posible algo (es importante, es necesario, es mejor, es raro, es normal, es una pena, es posible, es probable, puede que, ojalá), usas subjuntivo: no informas del hecho, reaccionas ante él o lo imaginas.",
          "Dos trampas: al negar la certeza («no es verdad que», «no está claro que») ya no afirmas nada, así que pasa al subjuntivo. Y si no hay un sujeto concreto, no hay «que»: es importante dormir bien.",
        ],
        [
          ["Es cierto que el tren llega a las seis.", "It's true the train arrives at six. (es cierto: un hecho → indicativo)"],
          ["Es una lástima que cierren el cine del barrio.", "It's a shame they're closing the local cinema. (valoración → subjuntivo)"],
          ["Puede que llueva esta tarde.", "It might rain this afternoon. (posibilidad → subjuntivo)"],
          ["No es verdad que el examen sea difícil.", "It isn't true that the exam is hard. (certeza negada → subjuntivo)"],
          ["Es importante dormir bien.", "It's important to sleep well. (nadie en concreto → infinitivo)"],
        ],
        [
          fb("Completa.", "Es lógico que ___ cansada después del viaje. (estar, tú)", "estés", "«Es lógico que» valora la situación, no la informa: subjuntivo, estés. «Estás» solo iría tras una expresión de certeza como «es verdad que»."),
          mc(
            "«No es cierto que mi vecino ___ tres coches.» (tener)",
            ["tiene", "tenga", "tener", "tendrá"],
            1,
            "Al negar la certeza («no es cierto que») ya no presentas un hecho, sino que lo rechazas: subjuntivo, tenga. «Tiene» sería correcto con «es cierto que», sin el «no»."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "Es verdad que ___ mucho trabajo. (tener, tú)", "tienes", "«Es verdad que» afirma un hecho: indicativo, tienes. «Tengas» sería una valoración, y aquí solo confirmas algo cierto."),
      fb("Completa.", "Es raro que el jefe no ___. (llamar)", "llame", "«Es raro que» reacciona ante el hecho (te sorprende): subjuntivo, llame. «Llama» lo daría solo como información."),
      toEs("Está claro que necesitamos tiempo.", "No está claro que necesitemos tiempo.", "Al negar «está claro que» ya no afirmas un hecho, así que el verbo pasa al subjuntivo: necesitamos → necesitemos.", [], "Cambia la frase a negativa: «No está claro que…»."),
      fb("Completa.", "Es probable que ___ la reunión. (cancelar, ellos)", "cancelen", "«Es probable que» habla de una posibilidad, no de un hecho: subjuntivo, cancelen (-ar → -en)."),
      toEs("Es seguro que haya problemas.", "Es seguro que hay problemas.", "«Es seguro que» expresa certeza total, así que lleva indicativo: hay (o habrá). «Haya» es subjuntivo y solo encaja tras «es posible que» o «puede que».", ["Es seguro que habrá problemas."], "Corrige la frase."),
      fb("Completa.", "Ojalá no ___ problemas. (haber)", "haya", "«Ojalá» expresa un deseo, y un deseo siempre va en subjuntivo: haya, el subjuntivo irregular de haber."),
      fb("Completa.", "Es normal que te ___ la cabeza con tanto ruido. (doler)", "duela", "«Es normal que» valora la situación: subjuntivo. Doler cambia o → ue en la raíz, como en el presente (duele): duela."),
      mc(
        "«Es evidente que no ___ de acuerdo.» (estar, ellos)",
        ["están", "estén", "estar", "estarían siempre"],
        0,
        "«Es evidente que» expresa certeza: indicativo, están. «Estén» es subjuntivo, «estar» es infinitivo y «estarían siempre» es condicional."
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
        "Recuerda la regla: un consejo no es un hecho",
        [
          "Recuerda la regla: cuando aconsejas a una persona concreta con «es importante / mejor / necesario / recomendable / fundamental que», el verbo va en subjuntivo, porque lo que recomiendas todavía no ha pasado: es algo que quieres que pase.",
          "Si el consejo es para cualquiera, sin sujeto, no hay «que»: es mejor + infinitivo. Y si solo cuentas cómo es el lugar (es verdad que, es cierto que), es información: indicativo.",
          "Construye cada consejo frase a frase: expresión + que + (no) + subjuntivo + resto.",
        ],
        [
          ["Es importante que lleves el pasaporte siempre.", "It's important that you always carry your passport. (a ti → subjuntivo)"],
          ["Es mejor no beber agua del grifo.", "It's better not to drink tap water. (para todos → infinitivo)"],
          ["Es posible que llueva por la tarde en verano.", "It may rain in the afternoon in summer. (posibilidad → subjuntivo)"],
          ["Es cierto que el metro es muy barato.", "It's true the subway is very cheap. (información → indicativo)"],
        ],
        [
          fb("Completa.", "Es fundamental que ___ un seguro de viaje. (contratar, tú)", "contrates", "Consejo a una persona concreta con «es fundamental que» → subjuntivo: contrates (-ar → -es)."),
          mc(
            "Consejo general, para cualquier viajero: «Es mejor ___ agua embotellada.»",
            ["beber", "bebas", "que bebes", "bebes"],
            0,
            "Sin sujeto concreto no hay «que»: es mejor + infinitivo, beber. «Bebas» necesitaría «que» delante (es mejor que bebas), y «que bebes» o «bebes» son indicativo."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "Es mejor que ___ dinero en el banco. (cambiar)", "cambies", "«Es mejor que» + persona concreta → subjuntivo: cambies (-ar → -es). «Cambias» es indicativo: informaría, no aconsejaría."),
      fb("Completa.", "Es posible que ___ mucho calor. (hacer)", "haga", "«Es posible que» expresa posibilidad → subjuntivo. Hacer forma el subjuntivo desde «hago»: haga."),
      toEs("Prueba los tacos al pastor.", "Es necesario que pruebes los tacos al pastor.", "Un mandato se convierte en consejo impersonal con «es necesario que» + subjuntivo; probar cambia o → ue: pruebes.", [], "Transforma el mandato en un consejo con «Es necesario que…»."),
      fb("Completa.", "Ojalá lo ___ genial. (pasar)", "pases", "«Ojalá» expresa un deseo → subjuntivo: pases. «Pasas» sería indicativo y no expresa deseo."),
      toEs("Es verdad que la comida sea picante.", "Es verdad que la comida es picante.", "«Es verdad que» presenta un hecho → indicativo: es. «Sea» es subjuntivo y solo encajaría con una valoración o posibilidad (es posible que sea picante).", ["Es cierto que la comida es picante."], "Corrige la frase."),
      wo("Es recomendable que bebas solo agua embotellada.", "«Es recomendable que» da un consejo a alguien concreto (tú), así que pide subjuntivo: bebas.", "It's advisable for you to drink only bottled water."),
      toEs("It's better that you (tú) don't travel alone at night.", "Es mejor que no viajes solo de noche.", "Es mejor que + subjuntivo, también en negativo: el «no» va justo antes del verbo, no viajes.", ["Es mejor que no viajes sola de noche.", "Mejor que no viajes solo por la noche."]),
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
        "Recuerda la regla: tres tipos de expresión impersonal",
        [
          "Recuerda la regla: antes de elegir la forma, pregúntate qué hace la expresión. Hecho (es verdad, es cierto, es obvio, es evidente, está claro): afirma que algo es así → indicativo.",
          "Valoración (es bueno, es malo, es una pena, es increíble, es lógico) y posibilidad o necesidad (es posible, es probable, es necesario, es importante): reaccionan ante algo o lo ven como no real todavía → subjuntivo.",
          "Si niegas un hecho («no es cierto que»), dejas de afirmarlo y pasa a subjuntivo. En cada respuesta, nombra el tipo: así no eliges de memoria, sino por la regla.",
        ],
        [
          ["Es obvio que Marta está enfadada.", "It's obvious Marta is angry. (hecho → indicativo)"],
          ["Es increíble que sigas aquí.", "It's incredible that you're still here. (valoración → subjuntivo)"],
          ["Es necesario que alguien cierre la oficina.", "Someone needs to lock up the office. (necesidad → subjuntivo)"],
          ["No es evidente que la idea funcione.", "It isn't obvious that the idea works. (hecho negado → subjuntivo)"],
        ],
        [
          mc(
            "«Es lógico que ___ nervioso antes de la entrevista.» (estar, tú) — ¿forma y tipo?",
            ["estés — valoración", "estás — hecho", "estarás — futuro", "estar — infinitivo"],
            0,
            "«Es lógico que» valora tu reacción: subjuntivo, estés. «Estás» presentaría un simple hecho, «estarás» es futuro y «estar» no puede ir tras «que» con sujeto."
          ),
          fb("Completa.", "No es cierto que Pablo ___ en Londres. (vivir)", "viva", "«Es cierto» sería un hecho (vive), pero negado ya no afirmas nada: subjuntivo, viva."),
        ]
      ),
    ],
    [
      mc(
        "«Es cierto que ___ caro.» (ser)",
        ["es — hecho", "sea — valoración", "fuera — posibilidad", "ser — general"],
        0,
        "«Es cierto que» presenta un hecho: indicativo, es caro. «Sea» se usaría tras una valoración, «fuera» es imperfecto de subjuntivo y no encaja tras «es cierto que», y «ser» es infinitivo."
      ),
      mc(
        "«Es necesario que ___ la luz.» (apagar, vosotros)",
        ["apaguéis — necesidad", "apagáis — hecho", "apagad — mandato", "apagar — general"],
        0,
        "«Es necesario que» expresa necesidad y pide subjuntivo: apaguéis (-gar → -gue). «Apagáis» es indicativo, «apagad» es imperativo y «apagar» es infinitivo, para frases generales."
      ),
      mc(
        "«Es bueno que ___ amigos nuevos.» (hacer, tú)",
        ["hagas — valoración", "haces — hecho", "harás — posibilidad", "hacer — general"],
        0,
        "«Es bueno que» valora y pide subjuntivo; el de hacer sale de hago: hagas. «Haces» es indicativo, «harás» es futuro y «hacer» es infinitivo, para frases generales."
      ),
      toEs("Es obvio que tengas sueño.", "Es obvio que tienes sueño.", "«Es obvio que» es una expresión de hecho: afirma algo que se ve, así que lleva indicativo, tienes. «Tengas» es subjuntivo y corresponde a valoraciones como «es normal que tengas sueño».", [], "Corrige la frase."),
      fb("Completa.", "Es una lástima que ___ la tienda. (cerrar, ellos)", "cierren", "«Es una lástima que» es una valoración → subjuntivo; cerrar cambia e → ie en la raíz: cierren."),
      toEs("It's good that you (tú) have a plan.", "Es bueno que tengas un plan.", "«Es bueno que» valora → subjuntivo; tener sale de «tengo»: tengas.", []),
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
        "Recuerda la regla: el orden alrededor del subjuntivo",
        [
          "Recuerda la regla: el subjuntivo es un verbo conjugado, y delante de un verbo conjugado los pronombres van separados y antes del verbo, nunca pegados: es mejor que no se lo digas. El orden fijo es: expresión + que + (sujeto) + (no) + pronombres + subjuntivo + resto.",
          "Si hay dos pronombres, el indirecto va primero (me lo, te la, nos los), y le / les se convierten en se delante de lo, la, los, las: se lo. Solo el infinitivo deja pegar los pronombres: es mejor no decírselo.",
          "Al escribir lo que oyes, este orden te ayuda a separar bien las palabras: «se lo» son dos palabras, «decírselo» es una.",
        ],
        [
          ["Ojalá que el jefe no nos llame hoy.", "Hopefully the boss doesn't call us today. (no + nos + subjuntivo)"],
          ["Es importante que me lo devuelvas mañana.", "It's important that you give it back to me tomorrow. (me antes de lo)"],
          ["Es mejor no decírselo todavía.", "It's better not to tell him yet. (infinitivo: pronombres pegados)"],
          ["Ojalá mis hermanos puedan ayudarme.", "Hopefully my brothers can help me. (o: me puedan ayudar)"],
        ],
        [
          mc(
            "Orden natural:",
            ["Ojalá que mis primos nos inviten a la boda.", "Ojalá mis primos que nos inviten a la boda.", "Ojalá que nos mis primos inviten a la boda.", "Ojalá que mis primos inviten nos a la boda."],
            0,
            "El orden es: ojalá que + sujeto + pronombre + subjuntivo: que mis primos nos inviten. El pronombre va justo delante del verbo conjugado, nunca detrás ni antes del sujeto, y «que» va pegado a ojalá."
          ),
          toEs("Es mejor decírselo hoy.", "Es mejor que se lo digas hoy.", "Al pasar del infinitivo (para todos) a «que» + subjuntivo (para ti), los pronombres se despegan y van delante del verbo conjugado: se lo digas.", [], "Cambia la frase para dirigir el consejo a ti (tú): «Es mejor que…»."),
        ]
      ),
    ],
    [
      wo("Es mejor que no se lo digas a nadie todavía.", "Orden: que + no + pronombres + subjuntivo. Le se convierte en se delante de lo: no se lo digas.", "It's better that you don't tell it to anyone yet."),
      wo("Ojalá que mis padres me dejen ir al concierto.", "Ojalá + que + sujeto + pronombre + subjuntivo: mis padres me dejen. Ir va en infinitivo porque depende de dejar.", "I hope my parents let me go to the concert."),
      wo("Es probable que el vuelo salga con retraso.", "«Es probable que» pide subjuntivo: salga, de salgo.", "The flight will probably leave late."),
      wo("Es una pena que no podamos vernos este verano.", "Valoración → subjuntivo (podamos); con el infinitivo el pronombre recíproco va pegado: vernos.", "It's a shame we can't see each other this summer."),
      fb("Completa.", "Es importante que nos ___ antes del viernes. (llamar, vosotros)", "llaméis", "«Es importante que» → subjuntivo; vosotros de un verbo en -ar termina en -éis, con tilde: llaméis. El pronombre «nos» va delante."),
      toEn("Puede que no haya clase mañana.", "There might not be class tomorrow.", "«Puede que» (might) → subjuntivo; no haya = there might not be.", ["There may be no class tomorrow."]),
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
        [
          "Recuerda la regla: el mandato afirmativo de tú se forma quitando la -s a la forma tú del presente, o sea, es igual que la forma él: (tú) hablas → habla, comes → come, cierras → cierra, vuelves → vuelve. Por eso los cambios de raíz (e → ie, o → ue, e → i) se mantienen.",
          "Solo ocho verbos muy frecuentes tienen una forma corta irregular que hay que memorizar: decir → di, hacer → haz, ir → ve, poner → pon, salir → sal, ser → sé, tener → ten, venir → ven. Los pronombres se pegan al final: siéntate, dime.",
        ],
        [
          ["Cierra la puerta, por favor.", "Close the door, please. (cierras → cierra)"],
          ["Ven aquí y siéntate.", "Come here and sit down. (venir → ven; te pegado al final)"],
          ["Pide la cuenta.", "Ask for the bill. (pides → pide: e → i se mantiene)"],
        ],
        [
          fb("Da la orden.", "___ la ventana. (abrir, tú)", "Abre", "Verbo regular: (tú) abres sin -s → abre."),
          mc(
            "Aplica la regla a un verbo nuevo: «___ recto hasta el semáforo.» (seguir, tú)",
            ["Sigue", "Sigas", "Siga", "Segue"],
            0,
            "Seguir no está entre los ocho irregulares: (tú) sigues sin -s → sigue, con el cambio e → i. «Sigas» es subjuntivo (para el negativo), «siga» es de usted y «segue» olvida el cambio de raíz."
          ),
        ]
      ),
    ],
    [
      fb("Da la orden.", "___ más despacio. (hablar, tú)", "Habla", "Regular: hablas sin -s → habla."),
      fb("Da la orden.", "___ los deberes ahora. (hacer, tú)", "Haz", "Uno de los ocho irregulares: hacer → haz (no «hace»)."),
      fb("Da la orden.", "___ paciencia. (tener, tú)", "Ten", "Irregular: tener → ten (no «tiene»)."),
      fb("Da la orden.", "___ a la tienda y compra pan. (ir, tú)", "Ve", "Irregular: ir → ve. «Compra» es regular (compras → compra)."),
      fb("Da la orden.", "___ la verdad. (decir, tú)", "Di", "Irregular: decir → di (no «dice»)."),
      fb("Da la orden.", "___ bueno con tu hermano. (ser, tú)", "Sé", "Irregular: ser → sé, con tilde para distinguirlo del pronombre se."),
      mt(
        "Relaciona el infinitivo con su imperativo de tú.",
        [
          ["poner", "pon"],
          ["salir", "sal"],
          ["venir", "ven"],
          ["volver", "vuelve"],
        ],
        "Poner, salir y venir están entre los ocho irregulares (pon, sal, ven); volver es regular y conserva el cambio o → ue del presente (vuelves → vuelve)."
      ),
      toEs("Come to my house tomorrow. (tú)", "Ven a mi casa mañana.", "Venir tiene un mandato afirmativo de tú irregular: ven.", []),
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
        [
          "Recuerda la regla: tú es la única persona con dos formas de mandato. Afirmativo = forma él del presente (habla, come) o uno de los ocho irregulares (ven, haz). Negativo = no + subjuntivo (no hables, no comas, no vengas, no hagas), como todos los demás mandatos negativos.",
          "Truco para el negativo: forma yo del presente, quita la -o y pon la vocal «contraria» + s: hablo → no hables, como → no comas, vengo → no vengas. Es el error más frecuente: ✗ no habla (→ no hables).",
        ],
        [
          ["Come verdura. / No comas tantos dulces.", "Eat vegetables. / Don't eat so many sweets. (come → no comas)"],
          ["Ven pronto. / No vengas tarde.", "Come early. / Don't come late. (vengo → no vengas)"],
          ["Sé puntual. / No seas impaciente.", "Be on time. / Don't be impatient. (ser: sé / no seas)"],
        ],
        [
          fb("Cambia a negativo.", "Grita. → No ___.", "grites", "El mandato negativo de tú usa el subjuntivo: grito → no grites."),
          mc(
            "Aplica la regla a un verbo nuevo: «No ___ la luz todavía.» (encender, tú)",
            ["enciendas", "enciende", "enciendes", "encienda"],
            0,
            "Negativo de tú = no + subjuntivo, desde «enciendo»: no enciendas. «Enciende» es el afirmativo, «enciendes» es indicativo y «encienda» es de usted."
          ),
        ]
      ),
    ],
    [
      fb("Cambia a negativo.", "Corre. → No ___.", "corras", "Negativo de tú = subjuntivo: corre → no corras."),
      fb("Cambia a negativo.", "Sal ahora. → No ___ ahora.", "salgas", "Negativo de tú = subjuntivo, formado desde salgo: no salgas."),
      fb("Cambia a negativo.", "Pon la tele. → No ___ la tele.", "pongas", "Negativo de tú = subjuntivo, formado desde pongo: no pongas."),
      fb("Cambia a negativo.", "Di eso. → No ___ eso.", "digas", "Negativo de tú = subjuntivo, formado desde digo: no digas."),
      fb("Cambia a negativo.", "Ve sola. → No ___ sola.", "vayas", "Negativo de tú = subjuntivo; ir es irregular: no vayas."),
      fb("Cambia a afirmativo.", "No escribas a lápiz. → ___ a bolígrafo.", "Escribe", "El afirmativo regular de tú es la forma de él del presente: escribe."),
      fb("Cambia a afirmativo.", "No hagas ruido. → ___ tus tareas en silencio.", "Haz", "Hacer tiene un mandato afirmativo de tú irregular: haz."),
      mc(
        "«No ___ la puerta, hace frío.» (abrir, tú)",
        ["abras", "abre", "abres", "abrir"],
        0,
        "El mandato negativo de tú usa el subjuntivo: no abras. «No abre» usa la forma del afirmativo, «no abres» es indicativo y «no abrir» es infinitivo (solo en carteles)."
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
        [
          "Recuerda la regla: usted y ustedes se conjugan como él y ellos, y su mandato toma la forma del subjuntivo, en afirmativo y en negativo: pase / no pase, hablen / no hablen. Se forma desde la forma yo del presente: hablo → hable, vengo → venga, hago → haga (ir → vaya y ser → sea son irregulares).",
          "Solo cambia la posición del pronombre: pegado detrás en el afirmativo (siéntese, quédense) y delante en el negativo (no se siente, no se queden).",
        ],
        [
          ["Pase y siéntese, por favor.", "Come in and sit down, please. (usted: pase; se pegado)"],
          ["No se preocupen, todo está bien.", "Don't worry, everything's fine. (ustedes, negativo: se delante)"],
          ["Ponga la maleta aquí.", "Put your suitcase here. (pongo → ponga)"],
        ],
        [
          fb("Da la orden (usted).", "___ aquí, por favor. (firmar)", "Firme", "Usted → subjuntivo: firmo → firme."),
          mc(
            "Aplica la regla a un verbo nuevo: la recepcionista a un cliente: «___ el ascensor hasta el tercer piso.» (subir)",
            ["Suba", "Sube", "Subas", "Suben"],
            0,
            "Usted → subjuntivo, desde «subo»: suba. «Sube» es para tú, «subas» es el negativo de tú y «suben» es indicativo de ellos."
          ),
        ]
      ),
    ],
    [
      fb("Da la orden (usted).", "___ la segunda calle a la derecha. (tomar)", "Tome", "Usted → subjuntivo: tomo → tome."),
      fb("Da la orden (usted).", "___ mañana a las diez. (volver)", "Vuelva", "Usted → subjuntivo; volver diptonga (o → ue): vuelva."),
      fb("Da la orden (ustedes).", "___ los móviles, por favor. (apagar)", "Apaguen", "Ustedes → subjuntivo; -gar → -gue delante de e: apaguen."),
      fb("Da la orden (ustedes).", "No ___ fotos en el museo. (hacer)", "hagan", "Negativo de ustedes = la misma forma de subjuntivo, desde «hago»: no hagan."),
      fb("Da la orden (usted).", "No ___ nada todavía. (decir)", "diga", "Desde «digo»: no diga."),
      fb("Da la orden (ustedes).", "___ con cuidado. (conducir)", "Conduzcan", "Desde «conduzco»: conduzcan."),
      mc(
        "El médico a un paciente: «___ este jarabe tres veces al día.»",
        ["Tome", "Toma", "Tomes", "Toman"],
        0,
        "El médico trata al paciente de usted, y el mandato de usted usa el subjuntivo: tome. «Toma» es para tú, «tomes» es el negativo de tú y «toman» es indicativo."
      ),
      toEs("Please wait here, sir.", "Espere aquí, por favor, señor.", "Con «sir» se usa usted, y su mandato es el subjuntivo: espere.", ["Por favor, espere aquí, señor.", "Señor, espere aquí, por favor."]),
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
        [
          "Recuerda la regla: «let's…» = forma nosotros del subjuntivo (hablemos, salgamos), o vamos a + infinitivo en la conversación. Como todo mandato que no es tú afirmativo, sale del subjuntivo: hablo → hablemos, salgo → salgamos.",
          "Tres detalles: 1) Ir usa «vamos» en afirmativo (vayamos es formal), pero «no vayamos» en negativo. 2) Con nos o se pegados se pierde la -s y aparece una tilde: sentemos + nos → sentémonos. 3) En negativo el pronombre va delante y la -s vuelve: no nos sentemos.",
        ],
        [
          ["Salgamos a cenar esta noche.", "Let's go out for dinner tonight. (salgo → salgamos)"],
          ["Vámonos, que es tarde.", "Let's go, it's late. (vamos + nos: sin -s)"],
          ["No nos preocupemos tanto.", "Let's not worry so much. (negativo: nos delante, con -s)"],
        ],
        [
          fb("Sugiere.", "___ una pizza. (pedir, nosotros)", "Pidamos", "Subjuntivo de nosotros; pedir cambia e → i también aquí: pidamos."),
          mc(
            "Aplica la regla a un verbo nuevo: «Let's get up!» (levantarse)",
            ["¡Levantémonos!", "¡Levantemosnos!", "¡Nos levantemos!", "¡Levantamos!"],
            0,
            "Levantemos + nos → se pierde la -s y lleva tilde: levantémonos. «Levantemosnos» no pierde la -s, «nos levantemos» pone el pronombre delante (solo en negativo) y «levantamos» es indicativo."
          ),
        ]
      ),
    ],
    [
      { ...fb("Sugiere.", "___ al cine. (ir, nosotros)", "Vamos", "Ir: vamos en afirmativo («vayamos» también es correcto, pero más formal)."), altAnswers: ["Vayamos"] },
      fb("Sugiere.", "___ aquí. (sentarse, nosotros)", "Sentémonos", "Sentemos + nos: se pierde la -s y aparece la tilde: sentémonos."),
      fb("Sugiere.", "No ___ tan tarde. (acostarse, nosotros)", "nos acostemos", "Negativo: no + nos delante + subjuntivo (sin diptongo en nosotros): no nos acostemos."),
      fb("Sugiere.", "___ la verdad. (decir, nosotros)", "Digamos", "Desde «digo»: digamos."),
      fb("Sugiere.", "No ___ todavía. (irse, nosotros)", "nos vayamos", "En negativo, ir usa el subjuntivo vayamos, con nos delante: no nos vayamos."),
      mc(
        "«Es tarde. ¡___!» (irse, nosotros)",
        ["Vámonos", "Vamosnos", "Vamos nos", "Nos vamos a"],
        0,
        "En el mandato de nosotros con -nos se pierde la -s final: vamos + nos → vámonos. «Vamosnos» y «vamos nos» no la pierden ni se escriben así, y «nos vamos a» queda incompleto."
      ),
      toEs("Let's have dinner at home tonight.", "Cenemos en casa esta noche.", "«Let's» + verbo = mandato de nosotros, con la forma del subjuntivo: cenemos.", ["Vamos a cenar en casa esta noche."]),
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
        [
          "La regla: en el afirmativo, el pronombre se pega al final del verbo (cómpralo, siéntese, llámame); en el negativo, va delante del verbo, como en cualquier frase normal (no lo compres, no se siente, no me llames).",
          "Por qué la tilde: al pegar el pronombre la palabra crece, pero el acento no se mueve (COM-pra → COM-pra-lo), así que la tilde lo marca. En el negativo el pronombre vuelve a separarse y la tilde desaparece. Con dos pronombres el orden es siempre indirecto + directo, y le/les + lo/la → se lo/se la.",
        ],
        [
          ["Llámame esta noche. / No me llames tan tarde.", "Call me tonight. / Don't call me so late. (pegado / delante)"],
          ["Siéntese, por favor. / No se levante.", "Sit down, please. / Don't get up. (usted)"],
          ["Pásamela. / No me la pases.", "Pass it to me. / Don't pass it to me. (me la: indirecto + directo)"],
        ],
        [
          fb("Cambia a afirmativo.", "No lo abras. → ___.", "Ábrelo", "En el afirmativo, el pronombre se pega al final, y se añade tilde para mantener el acento: ábrelo."),
          mc("Aplica la regla a un verbo nuevo: «Don't sell it to them» (tú).", ["No se lo vendas.", "No véndeselo.", "No le lo vendas.", "No lo se vendas."], 0, "Negativo: pronombres delante, en orden indirecto + directo, y le → se ante lo: no se lo vendas. «No véndeselo» los deja pegados, «le lo» no cambia le a se y «lo se» invierte el orden."),
        ]
      ),
    ],
    [
      fb("Afirma.", "No me esperes. → ___.", "Espérame", "Afirmativo: pronombre pegado al final y tilde en la sílaba acentuada: espérame."),
      fb("Afirma.", "No la llames. → ___.", "Llámala", "Afirmativo: pronombre pegado al final y tilde: llámala."),
      fb("Afirma.", "No te levantes. → ___.", "Levántate", "El reflexivo te se pega al final del afirmativo, con tilde: levántate."),
      fb("Niega.", "Cómelo. → No ___ comas.", "lo", "En el negativo, el pronombre va delante del verbo: no lo comas."),
      fb("Niega.", "Siéntate. → No te ___.", "sientes", "Negativo: te delante y verbo en subjuntivo; sentarse cambia e→ie: no te sientes."),
      fb("Niega (usted).", "Dígame. → No me ___.", "diga", "Negativo de usted: pronombre delante + subjuntivo: no me diga."),
      ms(
        "¿Qué mandatos son correctos?",
        ["Ponlo aquí.", "No lo pongas aquí.", "No pónlo aquí.", "Lo pon aquí."],
        [0, 1],
        "En el afirmativo el pronombre va pegado al final (ponlo); en el negativo, delante del verbo (no lo pongas). «No pónlo» mezcla las dos reglas y «Lo pon» pone el pronombre delante en afirmativo."
      ),
      toEs("No me esperes en la puerta.", "Espérame en la puerta.", "Al pasar a afirmativo el pronombre se pega al final y aparece la tilde para mantener el acento: espérame.", ["Espérame en la entrada."], "Cambia a afirmativo."),
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
        [
          "Recuerda la regla: una receta publicada habla de usted, y el mandato de usted es la forma del subjuntivo, que sale de la forma yo del presente: pelo → pele, frío → fría, pongo → ponga. Los verbos con cambio de raíz lo mantienen (caliento → caliente). Los pronombres se pegan al afirmativo (córtelas) y van delante en el negativo (no la cocine).",
          "Lee la receta y fíjate en cada mandato:",
          "«Pele las patatas y córtelas en rodajas finas. Caliente el aceite en una sartén. Fría las patatas a fuego lento. Bata los huevos y añada sal. Mezcle todo y deje cuajar la tortilla. Dele la vuelta con un plato. No la cocine demasiado.»",
        ],
        [
          ["Pele las patatas y córtelas.", "Peel the potatoes and cut them. (pelo → pele; pronombre pegado)"],
          ["Dele la vuelta con un plato.", "Flip it with a plate. (dé + le → dele)"],
          ["No lo sirva frío.", "Don't serve it cold. (negativo: pronombre delante)"],
        ],
        [
          mc(
            "¿Cómo se fríen las patatas?",
            ["a fuego lento", "a fuego fuerte", "en el horno", "crudas"],
            0,
            "Las patatas se fríen a fuego lento. El texto no dice que sea a fuego fuerte, en el horno ni que vayan crudas."
          ),
          mc("Aplica la regla a un verbo nuevo: «___ la cebolla muy fina.» (picar, usted)", ["Pique", "Pica", "Pice", "Piquea"], 0, "Usted → subjuntivo desde «pico», y c → qu delante de e para conservar el sonido /k/: pique. «Pica» es de tú y «pice» cambiaría el sonido."),
        ]
      ),
    ],
    [
      fb("Completa (usted).", "___ las patatas. (pelar)", "Pele", "Usted → subjuntivo desde «pelo»: pele."),
      fb("Completa (usted).", "___ en rodajas finas. (cortar + las)", "Córtelas", "Afirmativo: pronombre pegado al final, con tilde para mantener el acento: córtelas."),
      fb("Completa (usted).", "___ el aceite en una sartén. (calentar)", "Caliente", "Calentar cambia e → ie (caliento), y el subjuntivo lo mantiene: caliente."),
      fb("Completa (usted).", "___ las patatas a fuego lento. (freír)", "Fría", "Desde «frío»: fría (la tilde rompe el diptongo)."),
      fb("Completa (usted).", "___ los huevos y añada sal. (batir)", "Bata", "Los verbos en -ir toman -a en el subjuntivo: bata."),
      fb("Completa (usted).", "No la ___ demasiado. (cocinar)", "cocine", "Negativo: pronombre delante y el verbo de usted no cambia: no la cocine."),
      fb("Completa (tú).", "Pela las patatas y ___ en rodajas. (cortar + las)", "córtalas", "Tú afirmativo = forma él (corta) + las pegado, con tilde: córtalas."),
      toEs("Add salt and mix everything. (usted)", "Añada sal y mezcle todo.", "Con usted, el mandato usa el subjuntivo: añada, mezcle.", ["Añada sal y mézclelo todo."]),
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
        [
          "La regla: usted es gramaticalmente una tercera persona (como él/ella), así que al pasar de tú a usted cambian tres cosas a la vez: el verbo pasa al subjuntivo (siéntate → siéntese, dime → dígame), el reflexivo te pasa a se (no te preocupes → no se preocupe) y el posesivo tu pasa a su (pon tu abrigo → ponga su abrigo).",
          "Lo que no cambia es la posición del pronombre: pegado en el afirmativo, delante en el negativo. El error típico es cambiar solo el verbo y olvidar el pronombre o el posesivo («siéntete», «deje tu maleta»).",
        ],
        [
          ["Pasa y ponte cómodo. → Pase y póngase cómodo.", "Come in and make yourself comfortable. (verbo + te → se)"],
          ["Deja tu abrigo aquí. → Deje su abrigo aquí.", "Leave your coat here. (tu → su)"],
        ],
        [
          fb("Cambia a usted.", "Espera aquí. → ___ aquí.", "Espere", "El mandato de usted usa el subjuntivo: espera (tú) → espere (usted)."),
          mc("Aplica la regla a una frase nueva: «Lávate las manos y sécatelas» → usted:", ["Lávese las manos y séqueselas.", "Lávese las manos y sécatelas.", "Lávate las manos y séquese.", "Se lave las manos y se las seque."], 0, "Los dos verbos a subjuntivo (lave, seque, con c → qu), te → se, y los pronombres pegados al afirmativo: lávese, séqueselas. Las otras mezclan tú y usted o ponen el pronombre delante."),
        ]
      ),
    ],
    [
      fb("Tú → usted.", "Dime tu nombre. → Dígame ___ nombre.", "su", "Al pasar de tú a usted, el posesivo también cambia: tu → su."),
      fb("Tú → usted.", "No te preocupes. → No se ___.", "preocupe", "Con usted, el reflexivo te pasa a se: no se preocupe."),
      fb("Tú → usted.", "Ponte el cinturón. → ___ el cinturón.", "Póngase", "Afirmativo de usted: subjuntivo (ponga) + se pegado, con tilde: póngase."),
      fb("Tú → usted.", "Ven conmigo. → ___ conmigo.", "Venga", "El mandato de usted usa el subjuntivo, formado desde vengo: venga."),
      fb("Tú → usted.", "Haz clic aquí. → ___ clic aquí.", "Haga", "Mandato de usted = subjuntivo, desde hago: haga."),
      fb("Usted → tú.", "No se vaya todavía. → No te ___ todavía.", "vayas", "Negativo de tú: te + subjuntivo; ir → vayas."),
      mc(
        "«Siéntate y relájate» → usted:",
        ["Siéntese y relájese.", "Siéntate y relájese.", "Se siente y se relaje.", "Siéntase y relájase."],
        0,
        "Con usted, el afirmativo usa el subjuntivo y el pronombre va pegado: siéntese, relájese. «Siéntate» es de tú, «Se siente» pone el pronombre delante y «Siéntase» y «relájase» no usan el subjuntivo."
      ),
      toEs("No te preocupes, señora, te llamaremos.", "No se preocupe, señora, la llamaremos.", "Con «señora» todo pasa a usted: no se preocupe (te → se, subjuntivo de usted) y el objeto te → la (a usted, mujer).", ["No se preocupe, señora, le llamaremos."], "Cambia a usted."),
    ]
  ),
  L(
    "commands-imperative-2",
    "b1d-corrige-mandatos",
    "Corrige el párrafo: instrucciones de un compañero de piso",
    "Una nota con mandatos mal formados: no pones, hace, no lo toca, ve te, cierra la. Corrígela.",
    "6 min",
    [
      sec(
        "La nota",
        [
          "Recuerda la regla: el afirmativo de tú es la forma él del presente (cierra, vuelve), con ocho irregulares (haz, pon, ven, ten, sal, di, ve, sé); el negativo de tú usa el subjuntivo (no pongas, no vuelvas). Los pronombres se pegan al afirmativo en una sola palabra (ciérrala, vete) y van delante en el negativo (no lo toques).",
          "Estos errores salen de olvidar una de esas reglas. Lee la nota corregida:",
          "«Por favor, ✗ no pones (→ no pongas) la música alta. ✗ Hace (→ Haz) la compra el sábado. ✗ No lo toca (→ No lo toques), es mi ordenador. ✗ Ve te (→ Vete) si quieres, pero la puerta, ✗ cierra la (→ ciérrala) con llave. Y no ✗ vuelves (→ vuelvas) tarde.»",
        ],
        [
          ["✗ No pones la tele → ✓ No pongas la tele.", "Don't put the TV on. (negativo = subjuntivo)"],
          ["✗ Hace la cena → ✓ Haz la cena.", "Make dinner. (hacer → haz)"],
          ["✗ Cierra la → ✓ Ciérrala.", "Close it. (pronombre pegado, una palabra)"],
        ],
        [
          fb("Corrige.", "No ___ la música alta. (la nota dice: pones)", "pongas", "El negativo de tú usa el subjuntivo: no pongas, no «no pones»."),
          mc("Aplica la regla a un error nuevo: «Sale a pasear al perro» (tú). ¿Cuál es la forma correcta?", ["Sal a pasear al perro.", "Salga a pasear al perro.", "Salgas a pasear al perro.", "Sales a pasear al perro."], 0, "Salir es uno de los ocho afirmativos irregulares de tú: sal. «Salga» es de usted, «salgas» solo sirve en negativo y «sales» es una frase en presente."),
        ]
      ),
    ],
    [
      fb("Corrige.", "___ la compra el sábado. (la nota dice: Hace)", "Haz", "Hacer tiene un afirmativo de tú irregular: haz, no «hace»."),
      fb("Corrige.", "No lo ___, es mi ordenador. (la nota dice: toca)", "toques", "Negativo = subjuntivo; tocar cambia c → qu delante de e: no lo toques."),
      fb("Corrige.", "___ si quieres. (la nota dice: Ve te)", "Vete", "Irse: ve + te, todo junto: vete."),
      fb("Corrige.", "___ con llave. (la nota dice: cierra la)", "Ciérrala", "El pronombre se pega al afirmativo y se añade tilde: ciérrala."),
      fb("Corrige.", "No ___ tarde. (la nota dice: vuelves)", "vuelvas", "Negativo de tú = subjuntivo; volver cambia o→ue: no vuelvas."),
      mc(
        "¿Qué mandato está bien?",
        ["No me llames antes de las diez.", "No llámame antes de las diez.", "No me llamas antes de las diez.", "Me no llames."],
        0,
        "Negativo: no + pronombre + subjuntivo: no me llames. «No llámame» pega el pronombre como en afirmativo, «no me llamas» usa indicativo y «Me no llames» pone el pronombre antes del «no»."
      ),
      toEs("Deja los zapatos en el pasillo.", "No dejes los zapatos en el pasillo.", "Al negar un mandato de tú, el verbo pasa al subjuntivo: deja → no dejes.", ["No dejes tus zapatos en el pasillo."], "Cambia a negativo."),
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
        [
          "La regla: entre amigos el consejo directo es el imperativo de tú, y no suena brusco. Afirmativo = forma él del presente (compra, prueba), con pronombre pegado (pruébalo); negativo = no + subjuntivo, con pronombre delante (no cojas, no te pierdas).",
          "Por qué funciona: el imperativo es la forma más corta y cercana; con un amigo, «Deberías comprar…» suena más distante. Combina un afirmativo y un negativo para dar un consejo completo: Compra el abono y no cojas taxis.",
        ],
        [
          ["No te pierdas la fiesta del barrio.", "Don't miss the neighbourhood party. (negativo: te delante)"],
          ["Pruébalo todo.", "Try everything. (afirmativo: lo pegado, con tilde)"],
        ],
        [
          mc(
            "«___ el abono de transporte.» (comprar, tú)",
            ["Compra", "Compres", "Compre", "No compres"],
            0,
            "El mandato afirmativo de tú es la forma de él del presente: compra. «Compres» solo se usa con «no», «compre» es para usted y «No compres» es la orden contraria."
          ),
          fb("Aplica la regla a un verbo nuevo.", "No ___ el abrigo; aquí hace frío. (olvidarse de, tú)", "te olvides del", "Negativo de tú: te delante + subjuntivo (olvides); de + el = del.", ["olvides el"]),
        ]
      ),
    ],
    [
      toEs("Buy a transport card. (tú)", "Compra un abono de transporte.", "El afirmativo de tú es la forma de él del presente: compra.", ["Cómprate un abono de transporte."]),
      toEs("Don't take taxis; they're very expensive. (tú)", "No cojas taxis, son carísimos.", "Negativo tú. Ojo: coger es neutro en España, pero en México, Argentina y buena parte de Latinoamérica es vulgar; allí se dice tomar o agarrar.", ["No tomes taxis, son carísimos.", "No cojas taxis; son muy caros.", "No tomes taxis, son muy caros."]),
      toEs("No pruebas la comida local.", "Prueba la comida local.", "Un consejo de tú afirmativo es la forma él del presente, con o → ue: prueba. «No pruebas» es una descripción, no un consejo.", ["Prueba la comida típica."], "Convierte la frase en un consejo afirmativo (tú)."),
      toEs("No piérdete el casco antiguo.", "No te pierdas el casco antiguo.", "En el negativo el pronombre va delante y el verbo pasa al subjuntivo: no te pierdas. Pegarlo («piérdete») solo vale en afirmativo.", ["No te pierdas el centro histórico."], "Corrige el consejo."),
      fb("Completa.", "___ la aplicación del metro. (descargar + te)", "Descárgate", "Afirmativo: descarga + te pegado, con tilde para mantener el acento: descárgate."),
      fb("Completa.", "No ___ la cartera en el bolsillo de atrás. (llevar)", "lleves", "Negativo de tú = no + subjuntivo: llevo → no lleves."),
      wo("Sal a pasear por el río y no te olvides de la cámara.", "Sal (afirmativo irregular de tú) + no te olvides (negativo: te delante, subjuntivo).", "Go for a walk by the river and don't forget your camera."),
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
        "Recuerda la regla: tres decisiones",
        [
          "Recuerda la regla: cada mandato sale de tres decisiones. 1) ¿Quién? 2) ¿Afirmativo o negativo? 3) ¿Hay pronombre?",
          "Solo el tú afirmativo tiene forma propia: la forma él del presente (habla, come) o uno de los ocho irregulares cortos (pon, haz, di…). Todo lo demás (tú negativo, usted, ustedes, nosotros) toma el presente de subjuntivo. Los pronombres se pegan solo en afirmativo; en negativo van delante.",
        ],
        [
          ["Hazlo tú.", "You do it. (tú +: irregular corto, pronombre pegado)"],
          ["No lo haga usted.", "Don't do it. (usted –: subjuntivo, pronombre delante)"],
          ["Hagámoslo ahora.", "Let's do it now. (nosotros +: subjuntivo + lo)"],
          ["No se lo digan a nadie.", "Don't tell anyone. (ustedes –: se lo delante)"],
        ],
        [
          fb("Rápido.", "(tú, +) ___ la mesa. (poner)", "Pon", "Tú afirmativo de poner: uno de los ocho irregulares cortos, pon."),
          mc(
            "(ustedes, +) «___ la puerta al salir.» (cerrar)",
            ["Cierren", "Cierran", "Cerren", "Cierra"],
            0,
            "Ustedes usa el subjuntivo también en afirmativo, y conserva el cambio e → ie: cierren. «Cierran» es indicativo, «cerren» olvida el cambio de raíz y «cierra» es de tú."
          ),
        ]
      ),
    ],
    [
      fb("Rápido.", "(tú, –) No ___ la mesa. (poner)", "pongas", "Negativo → subjuntivo desde el yo «pongo»: no pongas. La forma corta «pon» solo existe en afirmativo."),
      fb("Rápido.", "(usted, +) ___ aquí. (sentarse)", "Siéntese", "Usted afirmativo: subjuntivo (siente, e → ie) + se pegado, con tilde: siéntese."),
      fb("Rápido.", "(ustedes, –) No ___ nada. (tocar)", "toquen", "Ustedes negativo = subjuntivo; -car → -que delante de e para mantener el sonido /k/: toquen."),
      fb("Rápido.", "(nosotros, +) ___ un taxi. (llamar)", "Llamemos", "Nosotros → subjuntivo: llamemos (let's call)."),
      fb("Rápido.", "(tú, +) ___ la verdad. (decirme)", "Dime", "Di (irregular corto) + me pegado. No necesita tilde porque «dime» es llana acabada en vocal."),
      fb("Rápido.", "(tú, –) No me ___ mentiras. (decir)", "digas", "Negativo de tú → subjuntivo desde «digo»: no me digas."),
      fb("Completa con el pronombre.", "(usted, –) No ___ preocupe. (preocuparse)", "se", "En el negativo de usted, el pronombre va delante del verbo: no se preocupe."),
      mc(
        "(ustedes, +) «___ las manos antes de comer.» (lavarse)",
        ["Lávense", "Lávanse", "Se laven", "Lavense se"],
        0,
        "El mandato afirmativo de ustedes usa el subjuntivo con «se» pegado y tilde: lávense. «Lávanse» usa el indicativo, «Se laven» pone el pronombre delante en afirmativo y «Lavense se» repite el pronombre."
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
        "Recuerda la regla: indirecto + directo, y le / les → se",
        [
          "Recuerda la regla: con dos pronombres, primero va el indirecto (a quién: me, te, le, nos, les) y después el directo (qué: lo, la, los, las). Le y les nunca van delante de lo / la: se convierten en se, para evitar el choque «le lo». Por eso «díselo» puede ser a él, a ella, a usted o a ellos.",
          "Afirmativo: todo pegado al verbo y con tilde, porque la palabra crece y el acento debe quedarse en su sílaba (da → dámelo, explica → explícaselo). Negativo: no + indirecto + directo + subjuntivo (no me lo des, no se lo expliques).",
        ],
        [
          ["¿El libro? Dámelo, por favor.", "The book? Give it to me, please. (me + lo, pegados)"],
          ["¿La noticia? No se la digas a nadie.", "The news? Don't tell anyone. (le + la → se la, delante)"],
          ["¿Las maletas? Súbanmelas, por favor.", "The suitcases? Take them up for me, please. (ustedes + me + las)"],
        ],
        [
          fb("Afirma.", "No me lo compres. → ___.", "Cómpramelo", "En afirmativo, me + lo se pegan al verbo (compra), y la tilde mantiene el acento en «com»: cómpramelo."),
          mc(
            "«¿El coche? ___ a tu hermano.» (prestar, tú)",
            ["Préstaselo", "Préstalelo", "Se lo presta", "Préstaleslo"],
            0,
            "A tu hermano = le, el coche = lo; le + lo → se lo, pegado al afirmativo de tú con tilde: préstaselo. «Préstalelo» y «Préstaleslo» mantienen le / les delante de lo, y «Se lo presta» es una descripción."
          ),
        ]
      ),
    ],
    [
      fb("Afirma.", "No se lo expliques. → ___.", "Explícaselo", "Afirmativo: se + lo pegados, con tilde para mantener el acento: explícaselo."),
      fb("Afirma (usted).", "No me la traiga. → ___.", "Tráigamela", "Afirmativo de usted (traiga) + me + la, con tilde: tráigamela."),
      fb("Niega.", "Cuéntaselo. → No se lo ___.", "cuentes", "Negativo = subjuntivo; contar cambia o→ue: no se lo cuentes."),
      fb("Niega.", "Pónmelos aquí. → No me los ___ aquí.", "pongas", "Negativo de tú: pronombres delante + subjuntivo (desde pongo): no me los pongas."),
      fb("Sustituye.", "Dile la verdad a tu madre. → ___.", "Dísela", "La verdad = la; le + la → se la, pegado a «di» con tilde: dísela."),
      mc(
        "«¿Las fotos? ___ a mis padres.» (enseñar, tú)",
        ["Enséñaselas", "Enseñales las", "Se las enseña", "Enséñalesla"],
        0,
        "Les (a mis padres) + las (las fotos) → se las, y en el afirmativo de tú van pegados, con tilde: enséñaselas. «Enseñales las» los separa, «Se las enseña» es una descripción y «Enséñalesla» usa «les» y no concuerda con «las fotos»."
      ),
      toEs("The keys? Give them to me.", "¿Las llaves? Dámelas.", "Afirmativo de tú: da + me + las, con tilde: dámelas.", []),
      toEn("¿El regalo? No se lo enseñes todavía.", "The present? Don't show it to her yet.", "Negativo: pronombres delante (le → se + lo) + subjuntivo: no se lo enseñes.", ["The gift? Don't show it to him yet.", "The present? Don't show it to him yet.", "The gift? Don't show it to her yet.", "The present? Don't show it to them yet.", "The gift? Don't show it to them yet."]),
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
        "Recuerda la regla: tres preguntas antes de elegir",
        [
          "Recuerda la regla: 1) ¿A quién hablas? Familia y amigos → tú; jefe, clientes, personas mayores que no conoces → usted; un grupo → ustedes (en España, entre amigos, vosotros); tú y otros → nosotros. 2) ¿Afirmativo o negativo? 3) ¿Hay pronombre?",
          "Con las tres respuestas la forma sale sola: solo el tú (y el vosotros) afirmativo tiene forma propia; el resto es subjuntivo. Y el pronombre se pega en afirmativo y va delante en negativo. Elige siempre diciendo la razón: no de memoria.",
        ],
        [
          ["No se lo digas.", "Don't tell him. (tú, negativo, dos pronombres delante)"],
          ["Pase, por favor.", "Come in, please. (usted, afirmativo: subjuntivo)"],
          ["Siéntense aquí.", "Sit here. (ustedes + se pegado)"],
          ["Pidamos la cuenta.", "Let's ask for the bill. (nosotros: subjuntivo, e → i)"],
        ],
        [
          mc(
            "A tu jefa: «___ un momento, por favor.» (esperar)",
            ["Espere — usted afirmativo", "Espera — tú afirmativo", "No espere — negativo", "Esperes — tú negativo"],
            0,
            "A tu jefa la tratas de usted, y el afirmativo de usted es el subjuntivo: espere. «Espera» es de tú, «No espere» es negativo y «Esperes» solo existe en el negativo de tú."
          ),
          mc(
            "A tu abuela, a la que tratas de tú: «___ el abrigo, hace frío.» (ponerse)",
            ["Ponte — tú afirmativo", "Póngase — usted", "Te pones — indicativo", "No te pongas — negativo"],
            0,
            "Si la tratas de tú, el afirmativo usa el irregular corto pon + te: ponte. «Póngase» sería si la trataras de usted, «te pones» describe y «no te pongas» dice lo contrario."
          ),
        ]
      ),
    ],
    [
      mc(
        "A tu hermano pequeño: «No ___ con la boca llena.» (hablar)",
        ["hables — tú negativo", "habla — tú afirmativo", "hable — usted", "hablad — vosotros"],
        0,
        "A tu hermano le hablas de tú, y el negativo de tú usa subjuntivo: no hables. «Habla» es el afirmativo, «hable» es de usted y «hablad» es de vosotros."
      ),
      mc(
        "A unos clientes: «___ sus abrigos aquí.» (dejar)",
        ["Dejen — ustedes", "Deja — tú", "Dejad — vosotros", "Dejemos — nosotros"],
        0,
        "A varios clientes (ustedes), el mandato usa el subjuntivo: dejen. «Deja» es de tú, «dejad» es de vosotros (entre amigos, en España) y «dejemos» es de nosotros."
      ),
      mc(
        "A tu amiga, con la bufanda: «___, hace frío.» (ponerse + la)",
        ["Póntela — tú + dos pronombres", "Te la pon — orden incorrecto", "Pónganla — ustedes", "No te la pongas — negativo"],
        0,
        "Afirmativo de tú con dos pronombres pegados (te + la) y tilde: póntela. «Te la pon» pone los pronombres delante, «Pónganla» es de ustedes y «No te la pongas» es la orden contraria."
      ),
      fb("Completa.", "Al taxista: «___ aquí, por favor.» (parar, usted)", "Pare", "Al taxista lo tratas de usted: afirmativo = subjuntivo, paro → pare. «Para» sería de tú."),
      fb("Completa.", "A tus amigos (Latinoamérica): «No ___ tarde.» (llegar, ustedes)", "lleguen", "En Latinoamérica ustedes sirve también entre amigos. Negativo = subjuntivo, con -gu- para mantener el sonido de la g: no lleguen."),
      toEs("To your friend: Tell me everything.", "Cuéntamelo todo.", "Afirmativo de tú: cuenta + me + lo, con tilde: cuéntamelo.", ["Cuéntame todo.", "Dímelo todo.", "Dime todo."]),
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
        "Recuerda la regla: el profesor habla a la clase de ustedes",
        [
          "Recuerda la regla: a un grupo se le habla de ustedes (en España, en un aula informal, también vosotros), y ustedes manda siempre con el presente de subjuntivo: yo del presente → se cambia la vocal → -en (escribo → escriban, salgo → salgan, saco → saquen).",
          "En afirmativo los pronombres se pegan al final con tilde (siéntense, entréguenmelo); en negativo van delante (no se levanten). Ahora vas a completar, frase a frase, las instrucciones del profesor antes de un examen.",
        ],
        [
          ["Abran el libro por la página diez.", "Open the book to page ten. (abro → abran)"],
          ["No se levanten hasta el final.", "Don't get up until the end. (negativo: se delante)"],
          ["¿El examen? Entréguenmelo al terminar.", "The exam? Hand it in to me when you finish. (entreguen + me + lo)"],
        ],
        [
          fb("Completa.", "___ y apaguen los móviles. (sentarse)", "Siéntense", "Ustedes afirmativo: sienten (e → ie) + se pegado, con tilde: siéntense."),
          mc(
            "Varios alumnos hablan durante el examen. El profesor dice a todos:",
            ["Guarden silencio, por favor.", "Guardan silencio, por favor.", "Guarde silencio, por favor.", "Guardando silencio, por favor."],
            0,
            "A todo el grupo: subjuntivo de ustedes, guarden. «Guardan» es indicativo (describe), «guarde» es para un solo alumno de usted y «guardando» es un gerundio, no un mandato."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "___ su nombre en la primera hoja. (escribir)", "Escriban", "Ustedes afirmativo = subjuntivo: escribo → escriban (-ir → -an)."),
      fb("Completa.", "No ___ con sus compañeros. (hablar)", "hablen", "Ustedes negativo: no + subjuntivo, hablen (-ar → -en)."),
      fb("Completa.", "Si tienen dudas, ___ la mano. (levantar)", "levanten", "Si + presente, y después el mandato de ustedes: levanten."),
      fb("Completa.", "Al terminar, ___ el examen. (entregar + me)", "entréguenme", "Entregar → entreguen (g → gu delante de e) + me pegado, con tilde: entréguenme."),
      fb("Completa.", "___ en silencio. (salir)", "Salgan", "El subjuntivo sale del yo del presente: salgo → salgan."),
      toEs("No usan el diccionario.", "No usen el diccionario.", "«No usan» describe lo que hacen. Para prohibir a la clase hace falta el subjuntivo de ustedes: no usen.", [], "Corrige la instrucción del profesor."),
      toEs("Don't copy from your classmates.", "No copien de sus compañeros.", "A la clase (ustedes), negativo con subjuntivo: no copien.", ["No copiéis de vuestros compañeros."]),
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
        "Recuerda la regla: la misma petición, dos formas",
        [
          "Recuerda la regla: con el imperativo hablas directamente a la persona (Ven, Llámame). Con «quiero que / te pido que / prefiero que / necesito que» la petición se convierte en el contenido de un deseo, y por eso va en subjuntivo (Quiero que vengas). La forma indirecta suena más suave.",
          "Al pasar de una a otra cambian dos cosas: el verbo (ven → vengas, llama → llames) y el sitio del pronombre (pegado en el imperativo afirmativo, delante en el subjuntivo: llámame → que me llames). En negativo, el tú ya usa el subjuntivo, así que la forma no cambia: no salgas → que no salgas.",
        ],
        [
          ["Llámame. → Te pido que me llames.", "Call me. → I'm asking you to call me. (me se despega)"],
          ["Apaga la tele. → Prefiero que apagues la tele.", "Turn off the TV. → I'd rather you turned off the TV. (apaga → apagues)"],
          ["No salgas hoy. → Prefiero que no salgas hoy.", "Don't go out today. → I'd rather you didn't go out today. (misma forma)"],
        ],
        [
          fb("Suaviza.", "Ven a las ocho. → Quiero que ___ a las ocho.", "vengas", "«Querer que» + otro sujeto pide subjuntivo: vengas (desde vengo). «Ven» solo sirve como orden directa."),
          mc(
            "Ponte el casco. → Quiero que ___ el casco.",
            ["te pongas", "ponte", "te pones", "pongas te"],
            0,
            "Tras «quiero que» va el subjuntivo (pongas, desde pongo) y el pronombre pasa delante: te pongas. «Ponte» es la orden directa, «te pones» es indicativo y «pongas te» deja el pronombre detrás."
          ),
        ]
      ),
    ],
    [
      fb("Suaviza.", "Hazlo hoy. → Te pido que lo ___ hoy.", "hagas", "«Pedir que» pide subjuntivo; hacer → hagas (desde hago), con «lo» delante."),
      fb("Suaviza.", "Dime la verdad. → Necesito que me ___ la verdad.", "digas", "«Necesitar que» + otro sujeto pide subjuntivo: digas (desde digo)."),
      fb("Directo.", "Quiero que te sientes. → ___.", "Siéntate", "La orden directa de tú lleva el reflexivo pegado y tilde: siéntate."),
      fb("Directo.", "Prefiero que no grites. → No ___ tanto, por favor.", "grites", "La orden negativa de tú usa el subjuntivo, igual que tras «prefiero que»: no grites."),
      fb("Directo.", "Te pido que me esperes. → ___.", "Espérame", "La orden directa de tú lleva el pronombre pegado y tilde: espérame."),
      mc(
        "¿Cuál es más cortés?",
        ["Te pido que me ayudes.", "Ayúdame.", "¡Ayuda!", "Ayuda ya."],
        0,
        "La petición indirecta con «te pido que» + subjuntivo es la más suave: Te pido que me ayudes. «Ayúdame» es una orden directa, y «¡Ayuda!» o «Ayuda ya» suenan urgentes o bruscos."
      ),
      toEs("I want you to listen to me. — Listen to me!", "Quiero que me escuches. — ¡Escúchame!", "Con «quiero que» → subjuntivo (escuches); la orden directa → imperativo (escúchame).", []),
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
        "Recuerda la regla: ¿tú o usted con tu invitado?",
        [
          "Recuerda la regla: primero decide cómo tratas al invitado. A un amigo, tú: afirmativo con la forma él del presente (deja, usa) o un irregular corto (pon, ven, haz); negativo con subjuntivo (no dejes). A una persona mayor o que no conoces bien, usted: subjuntivo siempre (deje, no deje).",
          "Los pronombres se pegan en afirmativo (quítate, sírvase) y van delante en negativo (no te preocupes, no se moleste). Piensa en tu casa de verdad: ¿qué normas tienes?",
        ],
        [
          ["Quítate los zapatos en la entrada.", "Take your shoes off at the entrance. (tú + te pegado)"],
          ["No uses la ducha después de las once.", "Don't use the shower after eleven. (tú negativo: subjuntivo)"],
          ["Si tiene frío, encienda la calefacción.", "If you're cold, turn on the heating. (usted: subjuntivo)"],
          ["No se preocupe por la cama; ya está hecha.", "Don't worry about the bed; it's already made. (usted negativo: se delante)"],
        ],
        [
          mc(
            "«___ lo que quieras de la nevera.» (servirse, tú)",
            ["Sírvete", "Sírvese", "Te sirves", "No te sirvas"],
            0,
            "Afirmativo de tú: el pronombre te va pegado y se añade tilde: sírvete. «Sírvese» no es un mandato (el de usted es «sírvase»), «Te sirves» es una descripción y «No te sirvas» dice lo contrario."
          ),
          toEs("Deja las llaves en la mesa.", "Deje las llaves en la mesa.", "Con usted el mandato es subjuntivo: dejo → deje. «Deja» es la forma de tú.", [], "Cambia la norma a usted: el invitado es tu suegro."),
        ]
      ),
    ],
    [
      toEs("Take off your shoes, please. (tú)", "Quítate los zapatos, por favor.", "Afirmativo de tú + te, con tilde: quítate.", ["Por favor, quítate los zapatos."]),
      toEs("Don't touch the cat; he's grumpy. (tú)", "No toques al gato, que es gruñón.", "Negativo con subjuntivo (no toques) y a personal ante un animal concreto: al gato.", ["No toques al gato, es gruñón."]),
      toEs("Make yourself comfortable. (usted)", "Póngase cómodo.", "Afirmativo de usted (ponga) + se, con tilde: póngase.", ["Póngase cómoda.", "Póngase usted cómodo."]),
      toEs("No se preocupa por los platos.", "No se preocupe por los platos.", "«No se preocupa» describe (indicativo). La norma para usted usa el subjuntivo: no se preocupe, con el pronombre delante.", [], "Corrige la norma (usted)."),
      fb("Completa.", "___ la luz al salir. (apagar, tú)", "Apaga", "El tú afirmativo regular coincide con la forma de él/ella del presente (apaga); no se usa el subjuntivo (apagues), que es para el negativo."),
      fb("Completa.", "No ___ la puerta abierta. (dejar, tú)", "dejes", "Tú negativo → subjuntivo: dejo → no dejes."),
      wo("Si tienes hambre, prepárate algo en la cocina.", "Si + presente + imperativo: prepara + te pegado, con tilde (prepárate).", "If you're hungry, make yourself something in the kitchen. (tú)"),
    ]
  ),
  L(
    "commands-drill-3",
    "b1d-practica-mezclada-mandatos",
    "Práctica mezclada: mandatos en situaciones reales",
    "Indicaciones, recetas, médico, oficina y amigos: cinco situaciones, todos los tipos de mandato.",
    "7 min",
    [
      sec(
        "Recuerda la regla: la situación decide la persona",
        [
          "Recuerda la regla: antes de conjugar, mira la situación. Indicaciones a un desconocido, el médico, la oficina → usted (subjuntivo: siga, tome, mándeme). Recetas, familia y amigos → tú (forma él del presente o irregular corto: corta, pon; negativo con subjuntivo: no te olvides). Carteles públicos → ustedes (no pisen) o infinitivo (no pisar).",
          "Después, la regla de siempre para los pronombres: pegados en afirmativo (tómese, tráeme), delante en negativo (no se baje).",
        ],
        [
          ["Cruce la plaza y gire a la derecha.", "Cross the square and turn right. (indicaciones: usted)"],
          ["Bate los huevos con un poco de sal.", "Beat the eggs with a little salt. (receta: tú)"],
          ["Tómese la pastilla con agua.", "Take the pill with water. (médico: usted + se)"],
          ["Tráeme el cargador, porfa.", "Bring me the charger, please. (amigos: tú + me)"],
        ],
        [
          fb("Indicaciones (usted).", "___ recto hasta la plaza. (seguir)", "Siga", "A un desconocido, usted: subjuntivo de seguir, que sale de «sigo» (e → i, gu → g): siga."),
          mc(
            "Receta para un amigo: «No ___ el horno antes de tiempo.» (abrir)",
            ["abras", "abre", "abra", "abres"],
            0,
            "Receta entre amigos → tú; en negativo, subjuntivo: no abras. «Abre» es el afirmativo de tú, «abra» es de usted y «abres» es indicativo."
          ),
        ]
      ),
    ],
    [
      fb("Médico (usted).", "No ___ alcohol esta semana. (beber)", "beba", "El médico trata al paciente de usted; negativo = subjuntivo: no beba (-er → -a)."),
      fb("Médico (usted).", "___ mucho y beba agua. (descansar)", "Descanse", "Usted afirmativo = subjuntivo: descanse (-ar → -e)."),
      fb("Oficina (usted).", "___ el informe antes de las cinco. (mandar + me)", "Mándeme", "Usted afirmativo (mande) + me pegado, con tilde: mándeme."),
      fb("Amigos (tú).", "No te ___ del pan. (olvidar)", "olvides", "Tú negativo: te delante + subjuntivo, no te olvides."),
      fb("Amigos (tú).", "___ un café, porfa. (traer + me)", "Tráeme", "Tú afirmativo (trae, la forma él) + me pegado, con tilde: tráeme."),
      fb("Indicaciones (usted).", "___ la calle en el paso de cebra. (cruzar)", "Cruce", "Usted = subjuntivo; -zar → -ce delante de e: cruce."),
      mc(
        "Un cartel: «No ___ el césped.»",
        ["pisen", "pisan", "pisad", "pisar no"],
        0,
        "Si el cartel se dirige a ustedes, el negativo usa subjuntivo: no pisen (muchos carteles usan el infinitivo: No pisar el césped). «Pisan» es indicativo, «pisad» es afirmativo de vosotros y «pisar no» no es una estructura correcta."
      ),
      toEs("Turn left at the church. (usted)", "Gire a la izquierda en la iglesia.", "El mandato de usted usa el subjuntivo: gire.", ["Tuerza a la izquierda en la iglesia.", "Doble a la izquierda en la iglesia."]),
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
        "Recuerda la regla: ¿una palabra o varias?",
        [
          "Recuerda la regla: en el mandato afirmativo los pronombres se pegan al verbo y todo se escribe como una sola palabra, casi siempre con tilde para que el acento no se mueva (explica + se + lo → explícaselo). En negativo se escriben separados y delante: no + pronombres + verbo (no se lo expliques).",
          "Con nosotros, la -s final desaparece delante de nos y se (vamos + nos → vámonos). Al escribir lo que oyes, pregúntate primero si la orden es afirmativa o negativa: eso te dice cuántas palabras escribir.",
        ],
        [
          ["Explícaselo despacio a tu hermano.", "Explain it slowly to your brother. (una palabra, con tilde)"],
          ["No se lo expliques todavía.", "Don't explain it to him yet. (cuatro palabras)"],
          ["Démonos prisa.", "Let's hurry. (demos + nos → démonos)"],
        ],
        [
          mc(
            "Orden correcto:",
            ["No se lo enseñes a tu jefe.", "No enseñes se lo a tu jefe.", "No lo se enseñes a tu jefe.", "Se lo no enseñes a tu jefe."],
            0,
            "En el negativo: no + pronombres (indirecto se, directo lo) + verbo en subjuntivo: no se lo enseñes. En las otras, los pronombres van detrás del verbo, en orden inverso o delante del «no»."
          ),
          toEs("No me lo traigas.", "Tráemelo.", "En afirmativo, el subjuntivo vuelve al imperativo de tú (trae) y los pronombres se pegan detrás: una sola palabra con tilde, tráemelo.", [], "Cambia el mandato a afirmativo."),
        ]
      ),
    ],
    [
      wo("No se lo digas a nadie hasta mañana.", "Negativo con dos pronombres: no + se + lo + subjuntivo, cuatro palabras separadas.", "Don't tell it to anyone until tomorrow. (tú)"),
      wo("Tráeme las llaves que están en la mesa.", "Tú afirmativo (trae) + me pegado, con tilde: tráeme.", "Bring me the keys that are on the table."),
      wo("Por favor, siéntense y abran el libro por la página diez.", "Ustedes: subjuntivo; el reflexivo se pega en afirmativo (siéntense).", "Please sit down and open the book to page ten."),
      wo("Vámonos ya, que va a llover.", "Nosotros + irse: vamos + nos pierde la -s y lleva tilde: vámonos.", "Let's go now, it's going to rain."),
      fb("Completa.", "No ___ compres todavía. (a mí + el regalo)", "me lo", "En el negativo, los pronombres van delante del verbo, primero el indirecto y luego el directo: me (a mí) + lo (el regalo): no me lo compres."),
      toEn("Dígaselo usted, por favor.", "You tell him, please.", "Mandato de usted (diga) + se + lo = you tell him; «usted» añade énfasis.", ["Please tell him yourself.", "You tell her, please.", "Please tell her yourself.", "You tell them, please.", "Please tell them yourself."]),
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
        "Las terminaciones del imperfecto de -er/-ir, sobre el infinitivo",
        [
          "Recuerda la regla: condicional = infinitivo completo + -ía, -ías, -ía, -íamos, -íais, -ían. Hablar → hablaría, hablarías, hablaría, hablaríamos, hablaríais, hablarían. Todas llevan tilde en la í, porque esa í se pronuncia aparte (ha-bla-rí-a).",
          "Las raíces irregulares son las del futuro, porque los dos tiempos se construyen sobre la misma base: tendr-, pondr-, saldr-, vendr-, dir-, har-, podr-, querr-, sabr-, habr-. En este marco («Con más tiempo…», «Sin…», «En tu lugar…») la condición está imaginada, por eso el resultado va en condicional.",
        ],
        [
          ["Yo en tu lugar hablaría con ella.", "If I were you, I'd talk to her. (hablar + -ía)"],
          ["¿Podrías ayudarme?", "Could you help me? (poder → podr- + -ías)"],
          ["Sin tráfico, llegaríamos en diez minutos.", "Without traffic, we'd arrive in ten minutes. (-íamos)"],
        ],
        [
          fb("Completa.", "Con más tiempo, yo ___ más. (leer)", "leería", "Leer es regular: infinitivo completo + -ía = leería (con dos e). «Leía» sería imperfecto."),
        ]
      ),
    ],
    [
      fb("Mismo marco.", "Con más tiempo, tú ___ más. (viajar)", "viajarías", "Verbo regular: infinitivo completo + -ías (viajarías). «Viajabas» sería imperfecto, sin la -r- del infinitivo."),
      fb("Mismo marco.", "Con más tiempo, mi padre ___ más. (descansar)", "descansaría", "Él: infinitivo + -ía (descansaría), con tilde en la í. «Descansará» sería futuro: un hecho, no una hipótesis."),
      fb("Mismo marco.", "Con más tiempo, nosotros ___ más. (salir)", "saldríamos", "Salir cambia la vocal por -d-, como en el futuro (saldremos): saldr- + -íamos. «Saliríamos» no existe."),
      fb("Mismo marco.", "Con más tiempo, vosotros ___ más deporte. (hacer)", "haríais", "Hacer se acorta a har- (haré → haría) + -íais. «Haceríais» no existe."),
      fb("Mismo marco.", "Con más tiempo, mis amigos ___ a verme. (venir)", "vendrían", "Venir → vendr- (como vendrán) + -ían: vendrían, no «venirían»."),
      mt(
        "Relaciona el infinitivo con su condicional (yo).",
        [
          ["decir", "diría"],
          ["poner", "pondría"],
          ["saber", "sabría"],
          ["querer", "querría"],
        ],
        "Mismas raíces que el futuro: decir → dir-, poner → pondr-, saber → sabr-, querer → querr-, más la terminación -ía."
      ),
      toEs("With more money, we would buy a house.", "Con más dinero, compraríamos una casa.", "Una hipótesis (con más dinero) va en condicional: compraríamos.", ["Con más dinero compraríamos una casa."]),
      wo("En tu lugar, yo no diría nada todavía.", "«En tu lugar» imagina otra situación → condicional de consejo; decir usa la raíz dir-: diría.", "If I were you, I wouldn't say anything yet."),
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
        [
          "Recuerda la regla: futuro y condicional comparten la raíz (tendr-, dir-, saldr-…) y solo se distinguen por la terminación. Futuro: -é, -ás, -á, -emos, -éis, -án (tendré). Condicional: -ía, -ías, -ía, -íamos, -íais, -ían (tendría).",
          "¿Cuál elegir? Pregúntate si hablas de la realidad o de algo imaginado. Futuro = lo que va a pasar (planes, promesas, predicciones: will). Condicional = lo que pasaría si las cosas fueran distintas, una petición cortés o un consejo (would). Pistas: mañana, el lunes, seguro que → futuro; con…, sin…, en tu lugar, yo que tú, ¿podrías…? → condicional.",
        ],
        [
          ["Mañana tendré tiempo. / Con un coche tendría más tiempo.", "Tomorrow I'll have time. / With a car I'd have more time."],
          ["Te lo diré esta noche. / Yo que tú, se lo diría.", "I'll tell you tonight. / If I were you, I'd tell her. (promesa → futuro; consejo → condicional)"],
        ],
        [
          mc(
            "¿Cuál es condicional?",
            ["haría", "haré", "hará", "hacía"],
            0,
            "El condicional añade -ía a la raíz del futuro: har- → haría. «Haré» y «hará» son futuro, y «hacía» es imperfecto (raíz hac-)."
          ),
        ]
      ),
    ],
    [
      mc(
        "«¿___ abrir la ventana, por favor?» (petición cortés)",
        ["Podrías", "Podrás", "Puedes siempre", "Pudiste"],
        0,
        "Para pedir algo con cortesía se usa el condicional: ¿Podrías abrir la ventana? «Podrás» es futuro, «Puedes» es correcto pero más directo (y «siempre» no encaja) y «Pudiste» es pasado."
      ),
      mc(
        "«El año que viene ___ en Italia.» (plan)",
        ["viviré", "viviría", "vivía", "viví"],
        0,
        "Un plan con fecha futura concreta va en futuro: viviré. «Viviría» es condicional (hipótesis o condición), y «vivía» y «viví» son pasado."
      ),
      fb("Cambia del futuro al condicional.", "Diré la verdad. → En tu lugar, yo ___ la verdad.", "diría", "Para hablar de lo que harías en otro lugar se usa el condicional; decir usa la raíz dir-: diría."),
      fb("Cambia del futuro al condicional.", "Saldremos a las ocho. → En vuestro lugar, nosotros ___ antes.", "saldríamos", "Un consejo hipotético (en vuestro lugar) va en condicional; salir usa la raíz irregular saldr-: saldríamos."),
      fb("Cambia del condicional al futuro.", "Podría ir. → Mañana ___ ir.", "podré", "Con «mañana» se usa el futuro; poder usa la raíz irregular podr-: podré."),
      fb("Cambia del condicional al futuro.", "Tendrían problemas. → Seguro que ___ problemas.", "tendrán", "«Seguro que» + un hecho futuro → futuro; tener usa la raíz tendr-: tendrán."),
      ms(
        "¿Qué formas son de condicional?",
        ["vendría", "vendrá", "pondríamos", "sabríais"],
        [0, 2, 3],
        "El condicional termina en -ía: vendría, pondríamos, sabríais. «Vendrá» termina en -á: es futuro."
      ),
      toEs("I'll call you tomorrow. I would call her.", "Te llamaré mañana. Yo la llamaría.", "«Will» → futuro (llamaré); «would» → condicional (llamaría).", ["Mañana te llamaré. Yo la llamaría.", "Te llamaré mañana. La llamaría.", "Mañana te llamaré. La llamaría."]),
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
        [
          "Recuerda la regla: para suavizar una petición, pásala al condicional. ¿Por qué funciona? El condicional habla de lo imaginado, así que la petición deja de ser una orden y se convierte en una posibilidad que el otro puede rechazar.",
          "Escalera de cortesía: Directo: ¿Me das agua? Cortés: ¿Me podrías dar agua? Muy cortés: ¿Le importaría darme un vaso de agua? Deseo: Me gustaría / Querría + infinitivo o sustantivo. Consejo suave: Deberías + infinitivo. Después de podría, importaría, gustaría y debería va siempre un infinitivo.",
        ],
        [
          ["¿Le importaría cerrar la ventana?", "Would you mind closing the window? (usted: le)"],
          ["Me gustaría hablar con el director.", "I'd like to speak to the director. (gustaría + infinitivo)"],
          ["Deberías dormir más.", "You should sleep more. (consejo suave: deberías, no debes)"],
        ],
        [
          fb("Transforma en petición cortés.", "¿Me ayudas? → ¿Me ___ ayudar? (poder, tú)", "podrías", "El condicional suaviza la petición: ¿Me podrías ayudar? Poder usa la raíz podr-."),
        ]
      ),
    ],
    [
      fb("Transforma en petición cortés.", "Quiero una mesa junto a la ventana. → ___ una mesa junto a la ventana. (querer, yo)", "Querría", "El condicional hace la petición más cortés; querer usa la raíz querr-: querría. «Quisiera» también es muy común y correcto."),
      fb("Transforma en petición cortés.", "Quiero reservar. → Me ___ reservar una mesa.", "gustaría", "«Me gustaría» + infinitivo es la forma cortés de decir lo que quieres."),
      fb("Transforma en petición cortés.", "¿Cierra la puerta? → ¿Le ___ cerrar la puerta? (importar)", "importaría", "«¿Le importaría + infinitivo?» es una petición muy cortés con el condicional."),
      fb("Transforma en petición cortés.", "¿Me dices la hora? → ¿Me ___ decir la hora? (poder, usted)", "podría", "Con usted, el condicional de poder es podría: ¿Me podría decir la hora?"),
      fb("Transforma en un consejo suave.", "Debes descansar. → ___ descansar. (deber, tú)", "Deberías", "«Deberías» (condicional de deber) suaviza el consejo: suena menos fuerte que «debes», que es casi una obligación."),
      mc(
        "La forma más cortés:",
        ["¿Le importaría esperar un momento?", "Espere.", "¿Espera?", "Tienes que esperar."],
        0,
        "«¿Le importaría esperar un momento?» usa usted y el condicional: es la forma más suave. «Espere» es una orden, «¿Espera?» es una pregunta brusca y «Tienes que esperar» es una obligación."
      ),
      toEs("Could you repeat that, please? (usted)", "¿Podría repetirlo, por favor?", "Con usted, la petición cortés usa el condicional: ¿Podría + infinitivo?", ["¿Podría repetir eso, por favor?"]),
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
        [
          "Recuerda la regla: para hablar de lo que harías en una situación imaginada, el verbo va en condicional (infinitivo o raíz del futuro + -ía). No hace falta «si»: «con + algo» (con un millón…), «en tu lugar» y «yo que tú» ya plantean la condición, y por eso el resultado va en condicional.",
          "Ahora habla de ti: piensa qué harías tú de verdad con un millón y dilo. Cuidado con las raíces irregulares (tendría, saldría, haría, diría, pondría) y con los pronombres, que van delante del verbo: se lo diría, lo gastaría.",
        ],
        [
          ["Con un millón de euros, dejaría de trabajar.", "With a million euros, I'd stop working. (con + algo = condición)"],
          ["Yo que tú, no lo haría.", "If I were you, I wouldn't do it. (hacer → har-; lo delante)"],
        ],
        [
          mc(
            "«Con un millón, ___ el mundo.» (recorrer, yo)",
            ["recorrería", "recorreré", "recorría", "recorrí"],
            0,
            "Algo imaginado (con un millón…) se expresa con el condicional: recorrería. «Recorreré» es futuro real, «recorría» es imperfecto y «recorrí» es pretérito."
          ),
        ]
      ),
    ],
    [
      toEs("With a million, I would buy a house by the sea.", "Con un millón, compraría una casa junto al mar.", "Una situación imaginada va en condicional: compraría.", ["Con un millón compraría una casa cerca del mar."]),
      toEs("I would give money to my family.", "Le daría dinero a mi familia.", "Dar es regular en condicional: daría; «le» anticipa «a mi familia».", ["Daría dinero a mi familia."]),
      toEs("We would travel around the world.", "Viajaríamos por todo el mundo.", "Condicional de nosotros: -íamos → viajaríamos.", ["Daríamos la vuelta al mundo."]),
      toEs("I wouldn't stop working.", "No dejaría de trabajar.", "«Dejar de» + infinitivo = stop doing, en condicional: no dejaría de trabajar.", []),
      fb("Completa.", "Mis padres no ___ que trabajar nunca más. (tener)", "tendrían", "Tener que en condicional: tendr- (como tendrán) + -ían = tendrían, no «tenerían»."),
      fb("Completa.", "Yo ___ una fundación para ayudar a los animales. (crear)", "crearía", "Crear es regular: infinitivo + -ía = crearía. «Creería» sería de creer."),
      wo("Con tanto dinero no sabría qué hacer primero.", "Saber pierde la e: sabr- + -ía = sabría. «Con tanto dinero» plantea la condición.", "With so much money I wouldn't know what to do first."),
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
        [
          "Recuerda la regla: tres maneras de aconsejar, todas con el condicional porque el consejo se presenta como algo imaginado, no como una orden. Deberías + infinitivo (you should) y Podrías + infinitivo (you could) hablan a tú: el verbo va en segunda persona.",
          "Yo que tú / Yo en tu lugar + condicional (if I were you) funciona al revés: te pones en el lugar del otro y dices lo que harías tú, así que el verbo va en primera persona (descansaría, me iría), nunca «descansarías». Al cambiar de una fórmula a otra, cambia también la persona de los pronombres: deberías acostarte → yo que tú, me acostaría.",
        ],
        [
          ["Deberías ir al médico. → Yo que tú, iría al médico.", "You should go to the doctor. → If I were you, I'd go to the doctor. (iría: yo)"],
          ["Podrías llamarla mañana.", "You could call her tomorrow. (podrías: tú)"],
        ],
        [
          fb("Transforma.", "Deberías dormir más. → Yo que tú, ___ más.", "dormiría", "«Yo que tú» + condicional sirve para aconsejar: dormiría."),
        ]
      ),
    ],
    [
      fb("Transforma.", "Deberías hablar con tu jefe. → Yo en tu lugar, ___ con tu jefe.", "hablaría", "«Yo en tu lugar» habla desde yo, así que el verbo va en condicional de yo: hablaría."),
      fb("Transforma.", "Deberías decírselo. → Yo que tú, se lo ___.", "diría", "«Yo que tú» + condicional; decir usa la raíz irregular dir-: diría."),
      fb("Transforma.", "Yo que tú, lo haría hoy. → ___ hacerlo hoy. (deber, tú)", "Deberías", "El consejo con «deber» va en condicional + infinitivo: deberías hacerlo."),
      fb("Transforma.", "Yo en tu lugar, saldría más. → ___ salir más. (poder, tú)", "Podrías", "«Podrías» + infinitivo es una sugerencia suave, parecida a «yo en tu lugar»."),
      fb("Completa.", "Yo que tú, no ___ ese coche. (comprar)", "compraría", "En negativo la regla no cambia: no + condicional de yo (compraría). «Comprarías» sería tú."),
      mc(
        "«Yo en tu lugar, ___ un abrigo.» (ponerse)",
        ["me pondría", "te pondrías", "me pondré", "me ponía"],
        0,
        "«Yo en tu lugar» da un consejo desde yo, así que el verbo va en primera persona del condicional: me pondría. «Te pondrías» cambia la persona, «me pondré» es futuro y «me ponía» es imperfecto."
      ),
      toEs("If I were you, I'd take the job.", "Yo que tú, aceptaría el trabajo.", "«If I were you» = yo que tú + condicional: aceptaría.", ["Yo en tu lugar, aceptaría el trabajo.", "Yo que tú aceptaría el trabajo."]),
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
        [
          "Recuerda la regla: el condicional no toma el infinitivo entero cuando el verbo es irregular en futuro: usa la misma raíz corta (podr-, tendr-, har-, dir-, sabr-, saldr-, vendr-, querr-, valdr-). Por eso «poderías» o «hacería» son errores: si el futuro es podré, el condicional es podría.",
          "Segundo error típico: usar el futuro (-é, -á) donde va el condicional (-ía). Una petición cortés va siempre en condicional, porque se presenta como algo imaginado: me gustaría, ¿te importaría?",
          "El correo con las correcciones: «Hola, Laura: me ✗ gustará (→ gustaría) reservar una habitación. ¿✗ Poderías (→ Podrías) decirme el precio? Yo ✗ tenería (→ tendría) que llegar tarde. ✗ Hacería (→ Haría) falta un parking. ¿Te ✗ importará (→ importaría) confirmarlo?»",
        ],
        [
          ["Valdría la pena preguntar.", "It would be worth asking. (valer → valdr-, no «valería»)"],
          ["¿Te importaría llamarme luego?", "Would you mind calling me later? (petición → importaría, no «importará»)"],
        ],
        [
          fb("Corrige.", "Me ___ reservar una habitación. (el correo dice: gustará)", "gustaría", "Para pedir algo con cortesía se usa el condicional (gustaría), no el futuro (gustará)."),
        ]
      ),
    ],
    [
      fb("Corrige.", "¿___ decirme el precio? (el correo dice: Poderías)", "Podrías", "Poder usa la raíz irregular podr- en condicional: podrías, no «poderías»."),
      fb("Corrige.", "Yo ___ que llegar tarde. (el correo dice: tenería)", "tendría", "Tener usa la raíz irregular tendr- en condicional: tendría, no «tenería»."),
      fb("Corrige.", "___ falta un parking. (el correo dice: Hacería)", "Haría", "Hacer usa la raíz irregular har- en condicional: haría, no «hacería». «Hacer falta» = to be needed."),
      fb("Corrige.", "¿Te ___ confirmarlo? (el correo dice: importará)", "importaría", "La petición cortés va en condicional: importaría, no «importará» (futuro)."),
      fb("Corrige.", "¿___ tener la habitación antes de las doce? (error típico: Poderíamos)", "Podríamos", "Poder usa la raíz podr- en condicional: podríamos, no «poderíamos»."),
      mc(
        "¿Cuál está bien?",
        ["Sabría decirme dónde está la estación?", "¿Sabería decirme dónde está la estación?", "¿Sabría decirme dónde está la estación?", "¿Sabrá decirme dónde estaba?"],
        2,
        "Saber tiene raíz irregular sabr- en condicional: sabría. En español la pregunta lleva los dos signos: ¿…? «Sabría decirme…?» no abre la pregunta, «Sabería» no existe y «¿Sabrá… estaba?» cambia tiempo y cortesía."
      ),
      toEs("Would it be possible to change the date?", "¿Sería posible cambiar la fecha?", "El condicional de ser (sería) hace la pregunta más cortés.", []),
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
        [
          "Recuerda la regla: a una pregunta sobre una situación imaginada (¿Qué harías…?) se responde también en condicional, porque seguimos en el mundo imaginado. Lo que cambia es la persona, porque cambia quién habla: tú → yo (harías → haría), vosotros → nosotros (haríais → haríamos). Con usted, la pregunta y la respuesta tienen la misma forma (¿Qué haría usted? → Yo haría…).",
          "Los pronombres también giran: te → me, os → nos, me → te (¿Me ayudarías? → Sí, te ayudaría). Las personas que no hablan (él, ellos) no cambian.",
        ],
        [
          ["—¿Qué harías? —Llamaría a la policía.", "What would you do? — I'd call the police. (tú → yo)"],
          ["—¿Nos esperaríais? —Sí, os esperaríamos.", "Would you all wait for us? — Yes, we'd wait for you. (vosotros → nosotros; nos → os)"],
        ],
        [
          fb("Responde.", "—¿Qué harías con un perro perdido? —Lo ___ al veterinario. (llevar)", "llevaría", "Pregunta con tú (harías) → respuesta con yo, también en condicional: llevaría. «Llevarías» repetiría la persona de la pregunta."),
        ]
      ),
    ],
    [
      fb("Responde.", "—¿Dirías la verdad? —Sí, la ___.", "diría", "Si te preguntan con «tú», respondes con «yo»; en condicional, tú dirías → yo diría."),
      fb("Responde.", "—¿Qué haríais con la cartera? —La ___ a la policía. (entregar)", "entregaríamos", "Pregunta a vosotros → respuesta en nosotros: entregar + -íamos. «Entregaríais» es la forma de la pregunta."),
      fb("Responde.", "—¿Aceptarías el trabajo? —No, no lo ___.", "aceptaría", "Respondes en yo: tú aceptarías → yo aceptaría (el condicional de yo termina en -ía)."),
      fb("Responde.", "—¿Adónde irías de vacaciones? —___ a Japón.", "Iría", "Ir es regular en condicional: ir + -ía → iría."),
      fb("Responde.", "—¿Vendríais a la boda? —Claro, ___ encantados.", "vendríamos", "Pregunta con vosotros, respuesta con nosotros; venir usa la raíz vendr-: vendríamos."),
      mc(
        "«—¿Qué le dirías a tu jefe? —Le ___ que necesito vacaciones.»",
        ["diría", "diré", "decía", "digo ayer"],
        0,
        "Para responder a una situación imaginada (¿Qué le dirías…?) se usa el condicional, en yo: diría. «Diré» es futuro, «decía» es imperfecto y «digo ayer» mezcla presente y pasado."
      ),
      toEs("—Would you (tú) lend him money? —No, I wouldn't lend it to him.", "—¿Le prestarías dinero? —No, no se lo prestaría.", "Condicional (prestaría) con le → se delante de lo: no se lo prestaría.", ["—¿Le prestarías dinero? —No, no le prestaría dinero."]),
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
        "Recuerda la regla: ¿raíz propia o infinitivo entero?",
        [
          "Recuerda la regla: primero pregúntate si el verbo tiene raíz propia en el futuro. Si la tiene, el condicional la usa: tendr-, pondr-, saldr-, vendr-, valdr- (meten una d), podr-, sabr-, querr-, habr-, cabr- (pierden la vocal), dir-, har- (se acortan). Si no la tiene, usas el infinitivo entero.",
          "Después, las terminaciones son siempre las mismas: -ía, -ías, -ía, -íamos, -íais, -ían. Ningún verbo tiene terminaciones irregulares en el condicional: solo cambia la raíz.",
        ],
        [
          ["Con más tiempo, viviríamos en el campo.", "With more time, we'd live in the country. (regular: vivir + íamos)"],
          ["Mi abuelo diría lo mismo.", "My grandfather would say the same. (decir → dir-)"],
          ["¿Qué harían ustedes?", "What would you do? (hacer → har-)"],
          ["Nadie más cabría en ese coche.", "Nobody else would fit in that car. (caber → cabr-)"],
        ],
        [
          fb("Rápido.", "yo ___ (poder)", "podría", "Poder pierde la vocal (podré → podría): podr- + -ía."),
          mc(
            "¿Qué forma NO es correcta?",
            ["poneríamos", "pondríamos", "comeríamos", "diríamos"],
            0,
            "Poner tiene raíz propia (pondré), así que el condicional es pondríamos, no «poneríamos». Comer es regular (infinitivo entero) y decir usa dir-."
          ),
        ]
      ),
    ],
    [
      fb("Rápido.", "tú ___ (salir)", "saldrías", "Salir mete una d, como en el futuro (saldrás): saldr- + -ías."),
      fb("Rápido.", "ella ___ (comer)", "comería", "Comer no tiene raíz propia: infinitivo entero + -ía, comería."),
      fb("Rápido.", "nosotros ___ (decir)", "diríamos", "Decir se acorta en futuro y condicional: dir- + -íamos."),
      fb("Rápido.", "vosotros ___ (poner)", "pondríais", "Poner mete una d: pondr- + -íais."),
      fb("Rápido.", "ellos ___ (saber)", "sabrían", "Saber pierde la vocal: sabr- + -ían."),
      fb("Rápido.", "usted ___ (venir)", "vendría", "Venir mete una d: vendr- + -ía."),
      fb("Rápido.", "yo ___ (escribir)", "escribiría", "Escribir es regular: infinitivo entero + -ía."),
      mc(
        "«Con buen tiempo ___ más gente en la playa, pero hoy llueve.» (haber)",
        ["habría", "habrá", "había", "haya"],
        0,
        "Una situación imaginada (con buen tiempo, que hoy no hace) va en condicional; haber usa la raíz habr-: habría. «Habrá» es futuro, «había» es imperfecto y «haya» es subjuntivo."
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
        "Recuerda la regla: una vida imaginada se cuenta en condicional",
        [
          "Recuerda la regla: cuando imaginas una vida que no es real, cada acción va en condicional (viviría, trabajaría, saldría). No confundas tres formas parecidas: vivía (imperfecto) es el pasado real, viviré (futuro) es un plan real, viviría (condicional) es solo imaginado.",
          "Lee el texto de Clara: «A veces pienso en otra vida. En Australia viviría cerca del mar, trabajaría en un hotel y saldría a surfear todas las mañanas. Mis padres vendrían a verme en Navidad. Tendría menos dinero, pero sería más feliz. ¿O no?»",
        ],
        [
          ["Tendría menos dinero, pero sería más feliz.", "I'd have less money, but I'd be happier. (vida imaginada)"],
          ["De niña vivía en Lima.", "As a girl I lived in Lima. (pasado real: imperfecto)"],
          ["El año que viene viviré en Lima.", "Next year I'll live in Lima. (plan real: futuro)"],
        ],
        [
          mc(
            "¿Qué haría Clara por las mañanas?",
            ["surfear", "trabajar en un banco", "estudiar", "dormir"],
            0,
            "Clara saldría a surfear por las mañanas. No habla de trabajar en un banco, estudiar ni dormir."
          ),
          mc(
            "¿Por qué escribe Clara «viviría» y no «vivía»?",
            ["Porque imagina una vida que no tiene.", "Porque habla de su infancia.", "Porque es un plan seguro.", "Porque da una orden."],
            0,
            "El condicional (viviría) describe una vida imaginada. «Vivía» sería el imperfecto, para un pasado real como la infancia; un plan seguro iría en futuro (viviré)."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "Su amigo Marcos sueña con Buenos Aires: «Allí ___ en un piso antiguo del centro.» (vivir)", "viviría", "Es una vida imaginada: condicional = infinitivo completo + -ía (no el imperfecto vivía)."),
      fb("Completa.", "«___ clases de tango por las noches.» (tomar)", "Tomaría", "Vida imaginada → condicional regular: tomar + -ía."),
      fb("Completa.", "«Los domingos ___ a comer asado con amigos.» (salir)", "saldría", "Salir usa la raíz del futuro (saldré): saldría."),
      fb("Completa.", "«Mi hermana ___ a visitarme en verano.» (venir)", "vendría", "Venir usa la raíz vendr-: vendría."),
      fb("Completa.", "«No ___ tiempo para aburrirme.» (tener)", "tendría", "Tener usa la raíz tendr-: tendría."),
      fb("Completa.", "«Allí todo ___ más fácil, o eso creo.» (ser)", "sería", "Ser es regular en condicional: ser + -ía, sería."),
      toEs("I would learn English and make new friends.", "Aprendería inglés y haría nuevos amigos.", "Condicional: aprender es regular (aprendería) y hacer usa la raíz har- (haría).", ["Aprendería inglés y haría amigos nuevos."]),
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
        "Recuerda la regla: un tiempo, tres trabajos",
        [
          "Recuerda la regla: los tres usos del condicional salen de la misma idea, alejarse de la realidad. Cortesía: la petición se presenta como hipótesis y el otro puede decir que no (¿Podría ayudarme?). Consejo: te imaginas en el lugar del otro (Yo que tú…, Deberías…). Situación imaginaria: describes algo que no existe (En mi pueblo ideal, no habría coches).",
          "Para identificar el uso, mira con quién hablas y qué pretendes: pedir, aconsejar o imaginar.",
        ],
        [
          ["¿Podría ayudarme con la maleta?", "Could you help me with my suitcase? (cortesía)"],
          ["Deberías descansar más.", "You should rest more. (consejo)"],
          ["En una ciudad ideal, todos irían en bici.", "In an ideal city, everyone would go by bike. (situación imaginaria)"],
        ],
        [
          mc(
            "«¿Me pasarías la sal?»",
            ["cortesía", "consejo", "situación imaginaria", "futuro"],
            0,
            "«¿Me pasarías la sal?» usa el condicional para suavizar una petición: cortesía. No da un consejo, no imagina una situación y no habla del futuro."
          ),
          toEs("Debes llamar a tu madre.", "Deberías llamar a tu madre.", "El presente «debes» suena a obligación; el condicional «deberías» lo convierte en un consejo suave.", [], "Cambia el consejo al condicional para suavizarlo."),
        ]
      ),
    ],
    [
      mc("«Yo que tú, estudiaría más.»", ["consejo", "cortesía", "situación imaginaria", "pasado"], 0, "«Yo que tú» + condicional sirve para aconsejar. No es una fórmula de cortesía, ni una situación imaginaria general, ni habla del pasado."),
      mc("«En mi casa ideal habría una piscina.»", ["situación imaginaria", "cortesía", "consejo", "futuro"], 0, "«Mi casa ideal» no existe: el condicional describe una situación imaginaria. No es una petición cortés, ni un consejo, ni un plan futuro."),
      mc("«¿Le importaría hablar más bajo?»", ["cortesía", "consejo", "situación imaginaria", "orden directa"], 0, "«¿Le importaría…?» es una petición suavizada con el condicional: cortesía. No es un consejo, ni una situación imaginaria, ni una orden directa (eso sería «Hable más bajo»)."),
      mc("«Deberías dejar de fumar.»", ["consejo", "cortesía", "situación imaginaria", "futuro"], 0, "«Deberías» + infinitivo da un consejo suave. No es una petición de cortesía, ni una situación imaginaria, ni un futuro."),
      fb("Completa (cortesía).", "¿___ usted repetir la pregunta? (poder)", "Podría", "Cortesía con usted: condicional de poder, con la raíz podr-: podría."),
      fb("Completa (consejo).", "___ llevar paraguas; va a llover. (deber, tú)", "Deberías", "Consejo suave: condicional de deber (regular) + infinitivo: deberías."),
      fb("Completa (imaginación).", "En un mundo perfecto, nadie ___ hambre. (pasar)", "pasaría", "«Un mundo perfecto» no existe: situación imaginaria, condicional regular pasaría."),
      toEs("You (tú) should call your grandmother more.", "Deberías llamar más a tu abuela.", "«Should» = deberías: condicional de deber para aconsejar.", ["Deberías llamar a tu abuela más a menudo."]),
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
        "Recuerda la regla: cuatro fórmulas corteses",
        [
          "Recuerda la regla: por teléfono no se ve tu sonrisa, así que la cortesía va en el verbo. El condicional convierte cada petición en una hipótesis que el otro puede rechazar, y por eso suena educada.",
          "Cuatro fórmulas, todas + infinitivo: Me gustaría / Querría (deseo), ¿Sería posible…? (permiso), ¿Podría…? (petición a usted), ¿Le importaría…? (lo más cortés). Construye tu llamada frase a frase con ellas.",
        ],
        [
          ["Me gustaría reservar una mesa para el viernes.", "I'd like to book a table for Friday. (deseo)"],
          ["¿Sería posible llegar un poco antes?", "Would it be possible to arrive a bit earlier? (permiso)"],
          ["¿Podría enviarme la factura?", "Could you send me the invoice? (petición, usted)"],
        ],
        [
          fb("Completa.", "Me ___ reservar una habitación doble.", "gustaría", "«Me gustaría» + infinitivo es la forma cortés de pedir: condicional de gustar."),
          mc(
            "Quieres pagar en efectivo. ¿Cómo lo preguntas con cortesía?",
            ["¿Sería posible pagar en efectivo?", "¿Es posible que pagaría en efectivo?", "¿Será posible pagar en efectivo ayer?", "Pago en efectivo."],
            0,
            "«¿Sería posible + infinitivo?» pide permiso con cortesía. «Es posible que pagaría» pone condicional tras «que», «será… ayer» mezcla tiempos y «Pago en efectivo» no pregunta."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "¿___ posible tener vistas al mar? (ser)", "Sería", "«¿Sería posible…?» + infinitivo: condicional de ser para pedir permiso con cortesía."),
      fb("Completa.", "¿___ decirme el precio? (poder, usted)", "Podría", "Petición cortés a usted: condicional de poder, raíz podr-: podría."),
      fb("Completa.", "¿Le ___ enviarme la confirmación? (importar)", "importaría", "«¿Le importaría + infinitivo?»: la fórmula más cortés; el verbo va en tercera persona porque lo que importa es la acción."),
      fb("Completa.", "___ llegar sobre las diez de la noche. (preferir, yo)", "Preferiría", "Preferir es regular en condicional: preferir + -ía. Suaviza la preferencia."),
      wo("¿Tendrían una habitación libre para esta noche?", "Pregunta cortés a ustedes con el condicional de tener (raíz tendr-).", "Would you have a room available for tonight? (ustedes)"),
      toEs("I would like to cancel my reservation.", "Me gustaría cancelar mi reserva.", "«I would like» = me gustaría + infinitivo.", ["Quisiera cancelar mi reserva.", "Querría cancelar mi reserva."]),
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
        "Recuerda la regla: real o imaginado",
        [
          "Recuerda la regla: los dos tiempos comparten raíz (infinitivo entero o raíz irregular: har-, tendr-, podr-, dir-…), pero no la misma idea. El futuro (-é, -ás, -á…) afirma algo que va a pasar: un plan, una promesa, una predicción. El condicional (-ía, -ías, -ía…) se aleja de la realidad: imagina, aconseja o pide con cortesía.",
          "Pregúntate: ¿va a pasar de verdad? Futuro. ¿Solo lo imagino, lo aconsejo o lo pido con suavidad? Condicional. Por eso una promesa nunca va en condicional: «te ayudaría» deja la puerta abierta a no hacerlo.",
        ],
        [
          ["El año que viene estudiaré en Lima.", "Next year I'll study in Lima. (plan real → futuro)"],
          ["En Lima estudiaría cocina peruana, pero no tengo beca.", "In Lima I'd study Peruvian cooking, but I have no grant. (imaginado → condicional)"],
          ["¿Podrías recomendarme un barrio tranquilo?", "Could you recommend a quiet neighbourhood? (cortesía → condicional)"],
        ],
        [
          fb("Completa.", "Mañana ___ al banco. (ir, yo — plan)", "iré", "Es un plan real para mañana: futuro de ir, iré. «Iría» sería imaginado o un consejo, no un plan."),
          mc(
            "«Tranquila, el lunes te ___ el dinero.» (devolver)",
            ["devolveré", "devolvería", "devolvía", "devuelva"],
            0,
            "Es una promesa: algo que va a pasar de verdad, así que va en futuro (devolveré). «Devolvería» suena a hipótesis (lo haría si…), «devolvía» es imperfecto y «devuelva» es subjuntivo."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "Yo que tú, ___ hoy. (ir)", "iría", "«Yo que tú» introduce un consejo: te imaginas en el lugar del otro, así que va en condicional (iría), no en futuro (iré)."),
      fb("Completa.", "El sábado ___ una fiesta. (hacer, nosotros — plan)", "haremos", "Plan real: futuro con la raíz irregular har-: haremos. «Haríamos» sería solo imaginado."),
      fb("Completa.", "En una fiesta perfecta ___ música en directo. (haber)", "habría", "«Una fiesta perfecta» es imaginada: condicional de haber, habría (invariable). «Habrá» sería una predicción real."),
      fb("Completa.", "¿Me ___ con las sillas? (ayudar, tú — cortés)", "ayudarías", "Petición suavizada: condicional ayudar + -ías. El futuro «ayudarás» sonaría a orden o predicción."),
      fb("Completa.", "Seguro que ___ mucha gente. (venir)", "vendrá", "«Seguro que» anuncia una predicción firme: futuro con la raíz vendr-: vendrá."),
      mc(
        "«Te prometo que no ___ tarde.» (llegar)",
        ["llegaré", "llegaría", "llegaba", "llegue"],
        0,
        "Una promesa se refiere a algo futuro y seguro: futuro, llegaré. «Llegaría» es condicional (hipótesis o pasado), «llegaba» es imperfecto y «llegue» es subjuntivo."
      ),
      toEs("I'll finish soon. Could you (tú) wait?", "Terminaré pronto. ¿Podrías esperar?", "«I'll finish» → futuro (terminaré); «could you» → condicional cortés (podrías).", ["Acabaré pronto. ¿Podrías esperar?"]),
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
        [
          "Recuerda la regla: si + presente de indicativo, + futuro / presente / imperativo. Nunca futuro ni presente de subjuntivo después del si de condición: ✗ Si lloverá, ✗ Si llueva → ✓ Si llueve.",
          "¿Por qué? «Si» ya sitúa la condición en lo que puede pasar, así que el verbo no necesita marcar el futuro; el futuro solo aparece en el resultado. Repite el marco con verbos y personas nuevas hasta que salga solo.",
        ],
        [
          ["Si tengo tiempo, te llamaré.", "If I have time, I'll call you. (si + presente, futuro)"],
          ["Si estás cansado, descansa.", "If you're tired, rest. (si + presente, mandato)"],
          ["Si salimos ya, llegamos a tiempo.", "If we leave now, we'll make it on time. (si + presente, presente)"],
        ],
        [
          fb("Completa.", "Si ___ dinero, viajaré a Chile. (ahorrar, yo)", "ahorro", "La parte de «si» va en presente de indicativo: ahorro. «Ahorraré» (futuro) y «ahorre» (subjuntivo) no van detrás de «si»."),
        ]
      ),
    ],
    [
      fb("Completa.", "Si llueve, nos ___ en casa. (quedar, futuro)", "quedaremos", "El futuro va en el resultado: nos quedaremos. La condición (si llueve) se queda en presente."),
      fb("Completa.", "Si ___ tarde, avísame. (llegar, tú)", "llegas", "Si + presente de indicativo: llegas, no «llegues» (subjuntivo)."),
      fb("Completa.", "Si no estudias, no ___. (aprobar, futuro)", "aprobarás", "Resultado en futuro: aprobarás. La negación no cambia nada: si no + presente."),
      fb("Completa.", "Si ___ frío, ponte el abrigo. (hacer)", "hace", "Si + presente (hace) + imperativo (ponte). «Hará» no puede ir detrás de «si»."),
      fb("Completa.", "Si mis padres ___, haremos una barbacoa. (venir)", "vienen", "Si + presente: vienen, no «vendrán» ni «vengan»."),
      mc(
        "¿Cuál es correcta?",
        ["Si tienes hambre, come algo.", "Si tendrás hambre, come algo.", "Si tengas hambre, come algo.", "Si tienes hambre, comerías."],
        0,
        "Una condición real puede ir seguida de una orden: si + presente + imperativo: si tienes hambre, come algo. «Si tendrás» y «si tengas» son imposibles tras si, y «comerías» es condicional, no una orden."
      ),
      toEs("If you (tú) call me, I'll come.", "Si me llamas, vendré.", "Condición real: si + presente (llamas) + futuro (vendré).", ["Si me llamas, iré.", "Si me llamas, voy."]),
      wo("Si el tren sale a tiempo, llegaremos antes de las diez.", "Si + presente (sale) + futuro (llegaremos): el futuro solo en el resultado.", "If the train leaves on time, we'll arrive before ten."),
    ]
  ),
  L(
    "si-clauses-simple-1",
    "b1d-corrige-si-futuro",
    "Corrige el párrafo: nunca futuro después del si de condición",
    "Un mensaje con «si vendrás» y «si tengas»: el error más típico de las condicionales.",
    "6 min",
    [
      sec(
        "El mensaje",
        [
          "Recuerda la regla: después del si de condición va el presente de indicativo, aunque hables del futuro. El futuro se queda en el resultado. ¿Por qué falla «si vendrás»? Porque en inglés tampoco se dice «if you will come»: «si», como «if», ya sitúa la condición en lo que puede pasar. Y «si tengas» falla porque «si» de condición nunca va con presente de subjuntivo.",
          "El mensaje con sus errores: «Si ✗ vendrás (→ vienes) el sábado, prepararé paella. Si ✗ tengas (→ tienes) tiempo, trae postre. Si ✗ lloverá (→ llueve), comeremos dentro.»",
        ],
        [
          ["Si llamas antes, te recogeré en la estación.", "If you call beforehand, I'll pick you up at the station. (llamas, no «llamarás»)"],
          ["Si hay sitio, nos sentaremos fuera.", "If there's room, we'll sit outside. (hay, no «habrá» ni «haya»)"],
        ],
        [
          fb("Corrige.", "Si ___ el sábado, prepararé paella. (el mensaje dice: vendrás)", "vienes", "Después de «si» condicional va el presente, aunque se hable del futuro: vienes, no «vendrás»."),
        ]
      ),
    ],
    [
      fb("Corrige.", "Si ___ tiempo, trae postre. (el mensaje dice: tengas)", "tienes", "Después de «si» va el presente de indicativo: tienes, nunca el subjuntivo «tengas»."),
      fb("Corrige.", "Si ___, comeremos dentro. (el mensaje dice: lloverá)", "llueve", "Después de «si» va el presente: llueve, no el futuro «lloverá»."),
      fb("Corrige.", "Si ___ mucha gente, necesitaremos más sillas. (error típico: habrá)", "hay", "Después de «si» va el presente: hay, no el futuro «habrá»."),
      fb("Corrige.", "Si no ___ venir, dímelo. (error típico: podrás)", "puedes", "Después de «si» va el presente: puedes, no el futuro «podrás»."),
      mc(
        "¿Cuál es correcta?",
        ["Si sales tarde, perderás el autobús.", "Si saldrás tarde, pierdes el autobús.", "Si salgas tarde, perderás el autobús.", "Si saldrías tarde, perderás."],
        0,
        "Condición real: si + presente, y el resultado en futuro: si sales tarde, perderás el autobús. «Si saldrás», «si salgas» y «si saldrías» usan formas que nunca van después del si de condición."
      ),
      toEs("If there's traffic, we'll arrive late.", "Si hay tráfico, llegaremos tarde.", "Si + presente (hay) + futuro (llegaremos).", ["Si hay atasco, llegaremos tarde."]),
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
        [
          "Recuerda la regla: elige la palabra según lo segura que es la situación. Si + presente: condición que puede o no cumplirse (Si llueve, no iremos). Cuando + presente: rutina, algo que pasa cada vez (Cuando llueve, la calle se inunda). En los dos casos el verbo que sigue va en presente, nunca en futuro.",
          "Pista: si puedes decir «cada vez que», es «cuando»; si puedes decir «en caso de que», es «si». Las rutinas llevan el resultado en presente (vamos); las posibilidades, normalmente en futuro o en mandato (iremos, quédate). Cuidado: para un momento futuro seguro, «cuando» no va con presente sino con subjuntivo (cuando llegue, te llamo); eso lo verás en su propia lección.",
        ],
        [
          ["Cuando hace calor, vamos a la piscina.", "When it's hot, we go to the pool. (cada vez → cuando, presente)"],
          ["Si hace calor mañana, iremos a la piscina.", "If it's hot tomorrow, we'll go to the pool. (quizá → si, futuro)"],
        ],
        [
          mc(
            "«___ tengo hambre por la noche, como fruta.» (rutina)",
            ["Cuando", "Si mañana", "Si fuera", "Para"],
            0,
            "Para una rutina que se repite se usa «cuando»: cuando tengo hambre, como fruta. «Si mañana» no es rutina, «Si fuera» es hipotético y «Para» no introduce una condición."
          ),
        ]
      ),
    ],
    [
      mc(
        "«___ encuentro trabajo este año, me mudaré.» (incierto)",
        ["Si", "Cuando siempre", "Cuando", "Porque"],
        0,
        "Si no sabes si ocurrirá, usa «si»: si encuentro trabajo, me mudaré. «Cuando» da el hecho por seguro, «cuando siempre» no tiene sentido y «porque» expresa causa."
      ),
      fb("Si o cuando.", "___ mi abuela viene, siempre trae churros.", "Cuando", "Para una rutina que siempre se repite se usa «cuando»: cuando viene, siempre trae churros. «Si» también es correcto aquí: si + presente puede expresar una condición habitual."),
      fb("Si o cuando.", "___ mi abuela viene mañana, iremos al parque.", "Si", "Para una condición única que puede o no cumplirse se usa «si»."),
      fb("Si o cuando.", "___ estoy triste, llamo a mi hermana.", "Cuando", "Para algo que pasa cada vez (una rutina) se usa «cuando». «Si» también es correcto aquí: si + presente puede expresar una condición habitual (si estoy triste = cada vez que estoy triste)."),
      fb("Si o cuando.", "___ ganamos el partido, iremos a la final.", "Si", "Ganar el partido es incierto, así que se usa «si»."),
      fb("Completa.", "Cuando ___ tarde, mi perro me espera en la puerta. (llegar, yo)", "llego", "Rutina (cada vez que llego) → cuando + presente de indicativo: llego. El resultado también va en presente: me espera."),
      toEs("When I'm stressed, I go running.", "Cuando estoy estresado, salgo a correr.", "Para una rutina se usa «cuando» + presente: cuando estoy estresado…", ["Cuando estoy estresada, salgo a correr."]),
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
        [
          "Recuerda la regla: un plan que depende de algo se dice con si + presente de indicativo (la condición) y futuro o ir a + infinitivo (el plan): Si me dan vacaciones, viajaré / voy a viajar. «Si» nunca lleva futuro ni subjuntivo, porque ya marca por sí mismo que la condición está por cumplirse.",
          "Ahora habla de ti: piensa en tus planes reales para el fin de semana y para este año, y en lo que podría cambiarlos.",
        ],
        [
          ["Si me dan vacaciones en agosto, iré a Perú.", "If they give me vacation in August, I'll go to Peru. (presente + futuro)"],
          ["Si no llueve, vamos a cenar en la terraza.", "If it doesn't rain, we're going to have dinner on the terrace. (presente + ir a)"],
        ],
        [
          mc(
            "«Si ___ buen tiempo, iré a la playa.»",
            ["hace", "hará", "haga", "haría"],
            0,
            "Tras «si» condicional se usa el presente de indicativo: si hace buen tiempo. «Hará» es futuro, «haga» es subjuntivo y «haría» es condicional: ninguno va tras si en una condición real."
          ),
        ]
      ),
    ],
    [
      toEs("If it's sunny, I'll go to the mountains.", "Si hace sol, iré a la montaña.", "Si + presente (hace sol) + futuro (iré).", ["Si hace sol, voy a ir a la montaña."]),
      toEs("If I'm not tired, I'll go out with my friends.", "Si no estoy cansado, saldré con mis amigos.", "Si + presente (estoy) + futuro (saldré, con raíz saldr-).", ["Si no estoy cansada, saldré con mis amigos."]),
      toEs("If I save enough, I'll buy a car.", "Si ahorro lo suficiente, me compraré un coche.", "Si + presente (ahorro) + futuro (me compraré).", ["Si ahorro bastante, compraré un coche.", "Si ahorro lo suficiente, me compraré un carro.", "Si ahorro lo suficiente, compraré un coche.", "Si ahorro lo suficiente, compraré un carro."]),
      toEs("If you (tú) want, come with me.", "Si quieres, ven conmigo.", "Si + presente + imperativo: si quieres, ven conmigo.", []),
      fb("Completa.", "Si ___ el examen, lo celebraremos. (aprobar, yo)", "apruebo", "Si + presente de indicativo; aprobar cambia o → ue: apruebo. «Aprobaré» no puede ir detrás de «si»."),
      fb("Completa.", "Si no ___ nada que hacer, os llamo. (tener, yo)", "tengo", "Si + presente: tengo. El resultado también puede ir en presente (os llamo) cuando el plan es inmediato."),
      wo("Si terminamos pronto, podemos ir al cine.", "Si + presente (terminamos) + presente (podemos): el presente también sirve para un plan cercano.", "If we finish early, we can go to the cinema."),
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
        [
          "Recuerda la regla: en una condición real, el verbo que va detrás de «si» está en presente de indicativo y el resultado, en futuro: Si ahorro, compraré una bici.",
          "En una cadena, el resultado de una frase se convierte en la condición de la siguiente. Al cruzar al otro lado de «si», el verbo deja el futuro y pasa al presente: compraré → Si compro una bici, iré en bici. ¿Por qué? Porque «si» ya sitúa la acción en el futuro; repetir el futuro («si compraré») es un error típico de quien traduce del inglés «will».",
        ],
        [
          ["Si compro una bici, iré al trabajo en bici.", "If I buy a bike, I'll cycle to work."],
          ["Si voy al trabajo en bici, ahorraré en gasolina.", "If I cycle to work, I'll save on gas."],
        ],
        [
          fb("Encadena.", "Si voy en bici, ___ más en forma. (estar, futuro)", "estaré", "El resultado de una condición real va en futuro: estaré. El presente «estoy» iría solo detrás de «si»."),
        ]
      ),
    ],
    [
      fb("Encadena.", "Si estoy en forma, ___ más energía. (tener, futuro)", "tendré", "Resultado en futuro; tener tiene raíz irregular tendr-: tendré, no «teneré»."),
      fb("Encadena.", "Si ___ más energía, trabajaré mejor. (tener, yo)", "tengo", "El resultado anterior (tendré) cruza al lado de «si» y pasa a presente: tengo, no «tendré»."),
      fb("Encadena.", "Si trabajo mejor, me ___ el sueldo. (subir, ellos, futuro)", "subirán", "Es el resultado, así que va en futuro: subirán. «Suben» sería la forma para detrás de «si»."),
      fb("Encadena.", "Si me ___ el sueldo, viajaré más. (subir, ellos)", "suben", "Ahora subir es la condición: presente, suben. «Subirán» no puede ir detrás de «si»."),
      fb("Encadena.", "Si viajo más, ___ más idiomas. (aprender, futuro)", "aprenderé", "Resultado de una condición real → futuro: aprenderé."),
      mc(
        "«Si aprendo más idiomas…»",
        ["…conoceré a más gente.", "…conocería siempre.", "…conozca a gente.", "…conocía a gente."],
        0,
        "Si + presente se completa con un resultado en futuro: conoceré a más gente. «Conocería» es condicional (para hipótesis con «si aprendiera»), «conozca» es subjuntivo y «conocía» es pasado."
      ),
      toEs("If I learn more languages, I'll find a better job.", "Si aprendo más idiomas, encontraré un trabajo mejor.", "Si + presente (aprendo) + futuro (encontraré).", ["Si aprendo más idiomas, encontraré un mejor trabajo."]),
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
        [
          "Recuerda la regla: una instrucción que depende de algo se dice con si + presente de indicativo y después un imperativo: Si ves a Juan, salúdalo. Si estás enfermo, no vayas a trabajar.",
          "Detrás de «si» nunca va subjuntivo ni futuro (no «si veas», no «si verás»). El imperativo sigue sus reglas de siempre: afirmativo con los pronombres pegados (salúdalo) y negativo con «no» + subjuntivo y los pronombres delante (no lo saludes).",
        ],
        [
          ["Si ves a Juan, salúdalo de mi parte.", "If you see Juan, say hi from me."],
          ["Si te duele la cabeza, no mires el móvil.", "If your head hurts, don't look at your phone."],
        ],
        [
          fb("Rápido.", "Si tienes dudas, ___ al profesor. (preguntar, tú)", "pregúntale", "Imperativo afirmativo de tú con el pronombre pegado: pregúntale, con tilde porque la palabra crece."),
        ]
      ),
    ],
    [
      fb("Rápido.", "Si estás enfermo, no ___ a trabajar. (ir, tú)", "vayas", "El mandato negativo de tú usa el subjuntivo: no vayas. «No ve» es el afirmativo con no delante, y no existe."),
      fb("Rápido.", "Si llegas antes, ___ la puerta. (abrir, tú)", "abre", "El afirmativo de tú es igual a la forma de él en presente: abre, no «abras» (eso es para el negativo)."),
      fb("Rápido.", "Si hace frío, ___ la calefacción. (poner, tú)", "pon", "Poner tiene imperativo corto de tú: pon, no «pone»."),
      fb("Rápido.", "Si no le gusta la sopa, no se la ___. (servir, usted)", "sirva", "Negativo de usted: no + subjuntivo (sirva), con los pronombres se la delante del verbo."),
      fb("Rápido.", "Si se pierden, ___ a la policía. (llamar, ustedes)", "llamen", "El mandato de ustedes usa el presente de subjuntivo: llamar → llamen."),
      fb("Rápido.", "Si ___ algo, llámame. (necesitar, tú)", "necesitas", "La condición va en presente de indicativo: necesitas, no «necesites»; el subjuntivo nunca va detrás de «si» en una condición real."),
      mc(
        "«Si no entiendes algo, ___.»",
        ["pregúntamelo", "me lo preguntas ayer", "preguntármelo", "me pregunta"],
        0,
        "Condición real + orden: imperativo con los pronombres pegados: pregúntamelo. «Me lo preguntas ayer» mezcla tiempos, «preguntármelo» es infinitivo y «me pregunta» es la forma de usted en indicativo."
      ),
      toEs("If you (tú) see my keys, give them to me.", "Si ves mis llaves, dámelas.", "Si + presente + imperativo, con pronombres pegados: dámelas.", []),
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
        "Recuerda la regla: instrucciones con si",
        [
          "Recuerda la regla: para preparar a alguien ante situaciones posibles, se usa si + presente (la situación) y después un imperativo (qué hacer) o un futuro (qué pasará). Tras si nunca va futuro ni subjuntivo: si tienes sed, no «si tendrás sed».",
          "Imperativo de tú: la forma de él/ella (bebe, llama), con irregulares como pon, ven, haz, di, sal, ten. De vosotros: infinitivo con -d (volved, llamad; con pronombre os la -d cae: abrigaos). En negativo, no + subjuntivo: no toques, no volváis. Los pronombres se pegan al afirmativo (quédate) y van delante en el negativo (no te quedes).",
        ],
        [
          ["Si te mareas en el autobús, siéntate delante.", "If you get carsick on the bus, sit at the front. (tú, pronombre pegado)"],
          ["Si llegáis tarde, llamadme.", "If you're late, call me. (vosotros: llamad + me)"],
          ["Si os portáis bien, os compraré un helado.", "If you behave, I'll buy you an ice cream. (consecuencia en futuro)"],
        ],
        [
          fb("Completa con el imperativo de tú del verbo leer.", "Si te aburres en el viaje, ___ un libro.", "lee", "Instrucción de tú: el imperativo coincide con la forma de él (lee). «Lees» sería presente, una descripción, no una orden."),
          mc(
            "«Si ___ frío por la noche, abrigaos bien.» (tener, vosotros)",
            ["tenéis", "tendréis", "tengáis", "tened"],
            0,
            "La situación va tras si en presente de indicativo: tenéis. «Tendréis» es futuro y «tengáis» subjuntivo, que no van tras este si; «tened» es el imperativo, que va en la otra parte."
          ),
        ]
      ),
      sec(
        "La lista",
        "«Si hace sol, ponte la gorra. Si tienes sed, bebe agua de la cantimplora. Si te pierdes, quédate quieto y llámame. Si todo va bien, volveréis a las seis. Si no volvéis a las seis, iré a buscaros.»",
        [
          ["la cantimplora", "the water bottle (for hiking)"],
        ],
        [
          mc(
            "¿Qué debe hacer el hijo si se pierde?",
            ["quedarse quieto y llamar", "correr", "volver solo", "buscar la carretera"],
            0,
            "El padre le dice: «Quédate quieto y llámame». No le dice que corra, que vuelva solo ni que busque la carretera."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "Si hace sol, ___ la gorra. (ponerse, tú)", "ponte", "Ponerse tiene imperativo irregular de tú: pon, y el pronombre se pega: ponte."),
      fb("Completa.", "Si ___ sed, bebe agua. (tener, tú)", "tienes", "Es la situación: tras si va presente de indicativo (tienes), no futuro ni subjuntivo."),
      fb("Completa.", "Si te ___, quédate quieto. (perder)", "pierdes", "Presente tras si; perder cambia e → ie: pierdes."),
      fb("Completa.", "Si todo va bien, ___ a las seis. (volver, vosotros)", "volveréis", "Lo que pasará va en futuro: volver + -éis, volveréis."),
      fb("Completa.", "Si no volvéis, ___ a buscaros. (ir, yo)", "iré", "Tras si + presente (si no volvéis), la consecuencia va en futuro; ir es regular en futuro: iré."),
      toEs("If it rains, come back to the car.", "Si llueve, volved al coche.", "Si + presente + imperativo de vosotros: volved.", ["Si llueve, vuelve al coche.", "Si llueve, regresen al coche.", "Si llueve, vuelvan al coche.", "Si llueve, regresad al coche.", "Si llueve, regresa al coche."]),
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
        "Recuerda la regla: la condición fija, el resultado elige",
        [
          "Recuerda la regla: en las condiciones reales, la parte con si va siempre en presente de indicativo. Lo que eliges es el tiempo del resultado, según lo que quieres decir.",
          "Presente + futuro: una consecuencia concreta que todavía no ha pasado (Si vienes, te enseñaré la casa). Presente + presente: algo que pasa siempre, una verdad general o un hábito (Si calientas el hielo, se derrite). Presente + imperativo: una instrucción o un consejo (Si llegas tarde, llama). El condicional (iría) y el subjuntivo (vaya) no entran aquí: son para hipótesis y otras estructuras.",
        ],
        [
          ["Si mezclas azul y amarillo, sale verde.", "If you mix blue and yellow, you get green. (verdad general)"],
          ["Si apruebo, lo celebraremos el sábado.", "If I pass, we'll celebrate on Saturday. (consecuencia futura)"],
          ["Si te pierdes, pregunta en una tienda.", "If you get lost, ask in a shop. (instrucción)"],
        ],
        [
          mc(
            "«Si calientas el agua a 100 grados, ___.»",
            ["hierve — verdad general", "hervirá mañana — futuro", "hierva — subjuntivo", "hervía — pasado"],
            0,
            "Una verdad general se expresa con si + presente + presente: si calientas el agua, hierve. «Hervirá mañana» no es general, «hierva» es subjuntivo y «hervía» es pasado."
          ),
          mc(
            "«Si te sobra pan, ___ a los patos del parque.»",
            ["dáselo — instrucción", "se lo darías — hipótesis", "se lo des — subjuntivo", "se lo dabas — pasado"],
            0,
            "Es un consejo para una situación real: si + presente + imperativo, con los pronombres pegados (dáselo). «Darías» sería una hipótesis, «des» solo va en negativo (no se lo des) y «dabas» es pasado."
          ),
        ]
      ),
    ],
    [
      mc(
        "«Si me invitas, ___.»",
        ["iré — consecuencia futura", "iría — hipótesis", "vaya — subjuntivo", "fui — pasado"],
        0,
        "Una consecuencia futura de una condición real va en futuro: si me invitas, iré. «Iría» sería para hipótesis, «vaya» es subjuntivo y «fui» es pasado."
      ),
      mc(
        "«Si tienes frío, ___ la ventana.»",
        ["cierra — instrucción", "cerrarás siempre — hábito", "cierres — negativo", "cerrabas — pasado"],
        0,
        "Una condición real puede ir seguida de una instrucción en imperativo: si tienes frío, cierra la ventana. «Cerrarás siempre» no es una orden, «cierres» solo va con «no» y «cerrabas» es pasado."
      ),
      fb("Completa.", "Si no comes, ___ hambre. (tener, tú, futuro)", "tendrás", "Consecuencia concreta que aún no ha pasado: futuro con raíz irregular tendr-: tendrás."),
      fb("Completa.", "Si dejas la leche fuera, se ___. (estropear, presente)", "estropea", "Pasa siempre: verdad general, presente en las dos partes (se estropea), no futuro."),
      fb("Completa.", "Si ves a Marta, ___ que la llamaré. (decir + le, tú)", "dile", "Instrucción: imperativo irregular de decir (di) con el pronombre pegado: dile."),
      fb("Completa.", "Si ___ el agua por debajo de cero grados, se congela. (enfriar, tú)", "enfrías", "Tras si, presente de indicativo: enfrías (con tilde en la í). Nunca futuro ni subjuntivo."),
      toEs("If you heat ice, it melts.", "Si calientas el hielo, se derrite.", "Una verdad general: si + presente + presente: se derrite.", []),
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
        "Recuerda la regla: la pregunta y la respuesta en eco",
        [
          "Recuerda la regla: en «¿Qué pasará / qué harás si…?» la pregunta va en futuro, pero tras si va presente, igual que en la respuesta. Para responder, repite la condición en presente y da la consecuencia en futuro.",
          "¿Por qué repetir? Porque en español la respuesta natural hace eco de la condición, a menudo con un pronombre para no repetir el nombre: —¿Y si pierdes las llaves? —Si las pierdo, llamaré al cerrajero. El error típico es poner futuro tras si (si las perderé) o condicional en la respuesta (llamaría), que suena a hipótesis lejana.",
        ],
        [
          ["—¿Qué pasará si no llegas a tiempo? —Si no llego, perderé el vuelo.", "What will happen if you don't make it? — If I don't, I'll miss the flight. (llegas → llego)"],
          ["—¿Qué harás si no te dan el trabajo? —Si no me lo dan, seguiré buscando.", "What will you do if you don't get the job? — If they don't give it to me, I'll keep looking. (pronombre lo)"],
        ],
        [
          fb("Responde.", "—¿Qué pasará si llueve? —Si llueve, ___ la fiesta. (cancelar, nosotros)", "cancelaremos", "La respuesta repite la condición en presente (si llueve) y da la consecuencia en futuro: cancelaremos. «Cancelaríamos» sonaría a hipótesis."),
          mc(
            "«—¿Qué harás si te roban la cartera? —Si me la ___, iré a la policía.»",
            ["roban", "robarán", "roben", "robaron"],
            0,
            "En el eco, la condición sigue en presente de indicativo: si me la roban. «Robarán» es futuro y «roben» subjuntivo, imposibles tras este si; «robaron» lo pasa al pasado."
          ),
        ]
      ),
    ],
    [
      fb("Responde.", "—¿Qué harás si pierdes el tren? —Si lo pierdo, ___ el autobús. (coger)", "cogeré", "Consecuencia en futuro: cogeré. Ojo: coger es neutro en España, pero en México, Argentina y buena parte de Latinoamérica es vulgar; allí se dice tomar o agarrar."),
      fb("Responde.", "—¿Qué harás si hace buen tiempo? —Si hace buen tiempo, ___ en el jardín. (comer, nosotros)", "comeremos", "Consecuencia en futuro: comer + -emos, comeremos."),
      fb("Responde.", "—¿Y si no hay entradas? —Si no ___ entradas, veremos otra película.", "hay", "La condición, en presente de indicativo: hay. Nunca «habrá» tras si."),
      fb("Responde.", "—¿Y si tu jefe se niega? —Si ___ que no, buscaré otro trabajo. (decir)", "dice", "Tras si, presente: decir → dice (e → i). El futuro va en la consecuencia (buscaré)."),
      fb("Responde.", "—¿Vendrás si te invito? —Si me invitas, ___ encantada.", "vendré", "La pregunta usa «vendrás»; la respuesta en eco usa el mismo futuro irregular en primera persona: vendré."),
      mc(
        "«—¿Qué pasará si no riegas las plantas? —Si no las riego, ___.»",
        ["se secarán", "se secarían", "se secaban", "se sequen"],
        0,
        "Si + presente anuncia una consecuencia futura: se secarán. «Se secarían» es hipotético, «se secaban» es pasado y «se sequen» es subjuntivo."
      ),
      toEs("—What will you (tú) do if it rains? —If it rains, I'll stay home.", "—¿Qué harás si llueve? —Si llueve, me quedaré en casa.", "Si + presente (llueve) + futuro (me quedaré).", []),
    ]
  ),
  L(
    "si-clauses-drill-3",
    "b1d-practica-mezclada-si-subjuntivo",
    "Práctica mezclada: si, cuando, ojalá y espero que",
    "Condiciones y rutinas (indicativo) frente a deseos y posibilidades (ojalá, espero que, es posible que + subjuntivo) en un mismo ejercicio.",
    "6 min",
    [
      sec(
        "Recuerda la regla: realidad o deseo",
        [
          "Recuerda la regla: si (condición) y cuando (rutina) presentan la situación como real o posible en el mundo, y van con indicativo: si viene, cuando hace calor. Ojalá, espero que y es posible que no afirman nada: expresan un deseo o una duda, y por eso piden subjuntivo: ojalá venga, espero que haga sol, es posible que llueva.",
          "La trampa: la misma acción cambia de forma según la palabra que la introduce. Si llueve, no iremos. / Ojalá no llueva. Pregúntate: ¿estoy planteando una situación (indicativo) o deseando y dudando (subjuntivo)?",
        ],
        [
          ["Si viene, me alegraré. / Ojalá venga.", "If he comes, I'll be happy. / I hope he comes. (situación / deseo)"],
          ["Cuando tengo prisa, tomo un taxi.", "When I'm in a hurry, I take a taxi. (rutina → indicativo)"],
          ["Es posible que el museo cierre los lunes.", "The museum might close on Mondays. (duda → subjuntivo)"],
        ],
        [
          fb("Completa.", "Ojalá ___ mañana. (venir, él)", "venga", "Ojalá expresa un deseo, no una situación real: subjuntivo, venga. «Viene» sería indicativo."),
          mc(
            "«Espero que mi equipo ___ el sábado; si ___, lo celebraremos.»",
            ["gane / gana", "gana / gane", "gane / gane", "gana / gana"],
            0,
            "«Espero que» expresa un deseo y pide subjuntivo (gane); «si» plantea una condición real y pide indicativo (gana). Las otras combinaciones cambian alguno de los dos modos."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "Si ___ mañana, iremos al museo. (venir, él)", "viene", "Si plantea una condición real: indicativo, viene. «Venga» sería subjuntivo, que nunca va tras este si."),
      fb("Completa.", "Espero que ___ buen tiempo. (hacer)", "haga", "Espero que expresa un deseo: subjuntivo de hacer, haga."),
      fb("Completa.", "Si ___ buen tiempo, saldremos. (hacer)", "hace", "Condición con si: presente de indicativo, hace."),
      fb("Completa.", "Cuando ___ buen tiempo, salimos al balcón. (hacer)", "hace", "Cuando + rutina (salimos, presente): indicativo, hace."),
      fb("Completa.", "Es posible que ___ mañana. (llover)", "llueva", "Es posible que expresa duda: subjuntivo, llueva."),
      fb("Completa.", "Si ___ mañana, no iremos. (llover)", "llueve", "Misma acción, pero ahora es una condición con si: indicativo, llueve."),
      mc(
        "«Si ___ tiempo, ven a verme.»",
        ["tienes", "tengas", "tendrás", "tuvieras"],
        0,
        "Tras «si» condicional va el presente de indicativo: si tienes tiempo, ven. «Tengas» y «tendrás» nunca van tras si, y «tuvieras» haría la condición hipotética, poco natural con «ven»."
      ),
      toEs("I hope you (tú) pass. If you pass, we'll celebrate.", "Espero que apruebes. Si apruebas, lo celebraremos.", "Espero que + subjuntivo (apruebes), pero si + indicativo (apruebas).", ["Ojalá apruebes. Si apruebas, lo celebraremos."]),
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
        "Recuerda la regla: orden, coma y pronombres",
        [
          "Recuerda la regla: la parte con si puede ir primero (con coma) o después (sin coma): Si me llamas, iré. = Iré si me llamas. Tras si, siempre presente de indicativo, aunque se hable del futuro.",
          "En las frases largas, fíjate también en los pronombres: delante del verbo conjugado (te lo diré), pegados al imperativo afirmativo (dímelo). Y cuando se juntan le/les con lo/la, le se convierte en se (se lo diré), porque «le lo» suena mal y no existe.",
        ],
        [
          ["Iré a la fiesta si me acompañas.", "I'll go to the party if you come with me. (resultado primero, sin coma)"],
          ["Si Pablo quiere el libro, se lo dejaré.", "If Pablo wants the book, I'll lend it to him. (le + lo → se lo)"],
        ],
        [
          mc(
            "¿Cuál es correcta?",
            ["Te lo explicaré si me lo pides.", "Te lo explicaré si me lo pedirás.", "Si me lo pedirás, te lo explico.", "Te lo explicaré si me lo pidas."],
            0,
            "La cláusula con si va en presente, aunque la frase hable del futuro: si me lo pides. «Si me lo pedirás» usa futuro y «si me lo pidas» usa subjuntivo: ninguno va tras si."
          ),
          mc(
            "¿Cuál está bien escrita?",
            ["Si te sobra tarta, guárdamela.", "Si te sobra tarta guárdamela.", "Guárdamela, si te sobra tarta.", "Si te sobra tarta, me la guárdala."],
            0,
            "Condición primero, con coma, e imperativo con los pronombres pegados: guárdamela. Falta la coma en la segunda, sobra en la tercera (el resultado va primero) y en la cuarta el pronombre está repetido."
          ),
        ]
      ),
    ],
    [
      wo("Si no te gusta la comida, no te la comas.", "Si + presente + imperativo negativo: en negativo los pronombres van delante (no te la comas).", "If you don't like the food, don't eat it."),
      wo("Te llamaré si tengo noticias.", "Resultado en futuro primero y si + presente después, sin coma.", "I'll call you if I have news."),
      wo("Si mis padres me dejan, iré contigo a la playa.", "Si + presente + futuro, con coma porque la condición va primero.", "If my parents let me, I'll go with you to the beach."),
      fb("Completa.", "Si ___ el informe hoy, te lo mando mañana. (terminar, yo)", "termino", "Tras si, presente de indicativo: termino. Nunca «terminaré» tras si."),
      toEn("Si os aburrís, venid a mi casa.", "If you get bored, come to my house.", "Si + presente + imperativo de vosotros (venid).", ["If you're bored, come over to my place."]),
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
        "Recuerda la regla: haber lleva la persona",
        [
          "Recuerda la regla: en el pretérito perfecto solo cambia haber (he, has, ha, hemos, habéis, han); el participio (-ado / -ido) se queda igual con cualquier sujeto. Nada se mete entre haber y el participio.",
          "Dos trampas frecuentes: usted y ustedes usan las formas de tercera persona (ha, han), y un sujeto doble con «yo» (mi padre y yo) equivale a nosotros → hemos.",
        ],
        [
          ["Hoy he trabajado mucho.", "I've worked a lot today. (yo → he)"],
          ["¿Usted ya ha comido?", "Have you (formal) eaten yet? (usted → ha, not has)"],
          ["Mi madre y yo hemos limpiado la casa.", "My mother and I have cleaned the house. (= nosotros)"],
          ["Las chicas han salido.", "The girls have gone out. (han; salido stays the same)"],
        ],
        [
          fb("Completa con el pretérito perfecto.", "Hoy mis tíos ___ dos veces. (llamar)", "han llamado", "Mis tíos = ellos → han; llamar → llamado. El participio no se pone en plural."),
          mc(
            "«¿Usted ya ___ el formulario?» (rellenar)",
            ["ha rellenado", "has rellenado", "han rellenado", "ha rellenada"],
            0,
            "Usted lleva la forma de tercera persona singular: ha. «Has» es de tú, «han» es plural y «rellenada» hace concordar un participio que con haber no cambia."
          ),
        ]
      ),
    ],
    [
      fb("Mismo marco.", "Esta semana tú ___ mucho. (trabajar)", "has trabajado", "Tú → has; trabajar es un verbo en -ar → trabajado."),
      fb("Mismo marco.", "Esta semana mi hermano ___ poco. (dormir)", "ha dormido", "Él → ha; dormir → dormido. El participio es regular aunque el presente cambie la raíz (duermo)."),
      fb("Mismo marco.", "Esta semana nosotros ___ en casa. (cenar)", "hemos cenado", "Nosotros → hemos (no «habemos»); cenar → cenado."),
      fb("Mismo marco.", "Esta semana vosotros ___ mucho. (salir)", "habéis salido", "Vosotros → habéis, con tilde; salir → salido."),
      fb("Mismo marco.", "Esta semana mis padres ___ de viaje. (volver)", "han vuelto", "Ellos → han; volver tiene participio irregular: vuelto, no «volvido»."),
      mt(
        "Relaciona el sujeto con la forma de haber.",
        [
          ["yo", "he"],
          ["usted", "ha"],
          ["nosotras", "hemos"],
          ["ustedes", "han"],
        ],
        "Presente de haber: he, has, ha, hemos, habéis, han. Usted y ustedes usan las formas de tercera persona: ha, han."
      ),
      toEs("We have eaten too much today.", "Hoy hemos comido demasiado.", "«Hoy» es un periodo que llega al presente: pretérito perfecto, hemos + participio (comido).", ["Hemos comido demasiado hoy."]),
      wo("Este año mis hijos han aprendido a nadar.", "Este año (periodo abierto) + han + participio; han y aprendido van siempre juntos.", "This year my kids have learned to swim."),
      toEs("I have worked at home today.", "Hoy he trabajado en casa.", "Yo → he + participio -ado. «Hoy» es un periodo abierto, por eso el pretérito perfecto.", ["He trabajado en casa hoy.", "Hoy he trabajado desde casa.", "He trabajado desde casa hoy."]),
      toEs("Hoy he dormido muy bien.", "Hoy has dormido muy bien.", "Solo cambia haber: yo → he, tú → has. Dormido se queda igual.", ["Has dormido muy bien hoy."], "Cambia el sujeto a tú."),
      toEs("Mi hermana ha cocinada la cena.", "Mi hermana ha cocinado la cena.", "Con haber el participio es invariable: queda en -o aunque el sujeto sea femenino. Ha cocinado, no «ha cocinada».", ["Mi hermana ha preparado la cena.", "Mi hermana ha hecho la cena."], "Corrige la frase."),
      fb("Completa con el pretérito perfecto.", "Este mes ustedes ___ muchas horas extra. (trabajar)", "han trabajado", "Ustedes → han, igual que ellos. No uses «ha»: el sujeto es plural."),
      fb("Completa con el pretérito perfecto.", "Hoy mi padre y yo ___ juntos por el parque. (correr)", "hemos corrido", "«Mi padre y yo» = nosotros → hemos. Correr → corrido."),
      toEs("¿Usted ya has hablado con el gerente?", "¿Usted ya ha hablado con el gerente?", "Usted lleva la forma de tercera persona: ha. «Has» corresponde a tú.", ["¿Ya ha hablado usted con el gerente?", "¿Ya ha hablado con el gerente?"], "Corrige la frase."),
      toEs("Habemos comprado pan y leche.", "Hemos comprado pan y leche.", "La forma de nosotros como auxiliar es hemos. «Habemos» no se usa en el pretérito perfecto.", [], "Corrige la frase."),
      toEs("Los niños han jugados en el parque toda la tarde.", "Los niños han jugado en el parque toda la tarde.", "El plural lo marca haber (han); el participio no lleva -s: han jugado.", ["Los niños han jugado toda la tarde en el parque."], "Corrige la frase."),
      toEs("¿Has entendido la explicación?", "¿Han entendido la explicación?", "Tú → has pasa a ustedes → han; el participio entendido no cambia.", [], "Cambia al plural con ustedes."),
      toEs("Today my colleague hasn't eaten anything.", "Hoy mi compañero no ha comido nada.", "El «no» va antes de ha; comer → comido.", ["Hoy mi compañera no ha comido nada.", "Mi compañero no ha comido nada hoy.", "Mi compañera no ha comido nada hoy."]),
      mc("«Mis amigos ___ a cenar.» (venir)", ["ha venido", "han venido", "han venidos", "hemos venido"], 1, "Ellos → han, y el participio no concuerda con el sujeto: han venido, nunca «venidos». «Ha» es singular y «hemos» es nosotros."),
      wo("Esta semana hemos aprendido muchas palabras nuevas", "Hemos + aprendido van siempre juntos; el marcador «esta semana» abre la frase.", "This week we have learned a lot of new words"),
      toEs("Mi tío ha vendido su casa vieja.", "Mis padres han vendido su casa vieja.", "Sujeto plural → han. Vendido no cambia; su sirve igual para «his» y «their».", ["Mis padres han vendido su vieja casa.", "Mis padres han vendido su casa antigua."], "Cambia el sujeto a «mis padres»."),
      fb("Completa con el pretérito perfecto.", "Este año Ana y Luis ___ mucho. (viajar)", "han viajado", "Ana y Luis = ellos → han viajado. «Ha viajado» sería solo una persona."),
      wo("¿Ya has llamado a tu abuela?", "Ya suele ir delante de haber; has + llamado no se separan.", "Have you already called your grandmother?"),
      ms(
        "¿Qué sujetos pueden completar «___ han salido temprano»?",
        ["Ustedes", "Mi jefe", "Ellas", "Tú y yo", "Los vecinos"],
        [0, 2, 4],
        "Han va con ellos, ellas y ustedes (y con cualquier sujeto plural de tercera persona, como los vecinos). Mi jefe pide ha; tú y yo = nosotros → hemos."
      ),
      toEs("This week you (tú) have arrived late three times, and your boss has noticed.", "Esta semana has llegado tarde tres veces y tu jefe se ha dado cuenta.", "Tú → has; él → ha. Con darse cuenta, el «se» va delante de ha.", ["Has llegado tarde tres veces esta semana y tu jefe se ha dado cuenta.", "Esta semana has llegado tarde tres veces y tu jefa se ha dado cuenta.", "Has llegado tarde tres veces esta semana y tu jefa se ha dado cuenta."]),
      { type: "speak", prompt: "Responde en voz alta: pregunta a dos compañeros (ustedes) si ya han terminado el informe de hoy.", text: "¿Ustedes ya han terminado el informe de hoy?", explanation: "Ustedes → han (tercera persona plural), no «habéis» ni «has». Terminar → terminado." },
    ]
  ),
  L(
    "present-perfect-1",
    "b1d-circuito-participios-irregulares",
    "Circuito: los participios irregulares",
    "Hecho, dicho, escrito, visto, puesto, vuelto, roto, abierto, muerto, cubierto: practica los diez.",
    "6 min",
    [
      sec(
        "Recuerda la regla: diez participios y sus familias",
        [
          "Recuerda la regla: casi todos los participios son regulares (-ado, -ido), pero diez verbos muy frecuentes terminan en -to o -cho. Agrúpalos por su final: -ierto (abrir → abierto, cubrir → cubierto), -uelto (volver → vuelto), -cho (hacer → hecho, decir → dicho) y -to (escrito, visto, puesto, roto, muerto).",
          "Los verbos compuestos heredan la forma del verbo base: descubrir → descubierto, devolver → devuelto, componer → compuesto, prever → previsto. Así, con diez formas sabes decenas de participios.",
        ],
        [
          ["¿Has visto mis gafas?", "Have you seen my glasses? (ver → visto)"],
          ["Se ha roto el vaso.", "The glass has broken. (romper → roto)"],
          ["Me han devuelto el dinero.", "They've given me my money back. (devolver → devuelto, like volver)"],
        ],
        [
          fb("Participio.", "Todavía no he ___ los deberes. (hacer)", "hecho", "Hacer → hecho, de la familia en -cho. «Hacido» no existe."),
          mc(
            "Suponer se forma sobre poner. ¿Cuál es su participio?",
            ["supuesto", "suponido", "supuso", "suponiendo"],
            0,
            "Poner → puesto, así que suponer → supuesto. «Suponido» aplica la regla regular a un verbo irregular; «supuso» es el pretérito y «suponiendo», el gerundio."
          ),
        ]
      ),
    ],
    [
      fb("Participio.", "¿Qué te ha ___ el médico? (decir)", "dicho", "Decir → dicho, como hecho: familia en -cho."),
      fb("Participio.", "He ___ una carta a mi abuela. (escribir)", "escrito", "Escribir → escrito. «Escribido» no existe."),
      fb("Participio.", "¿Dónde has ___ las llaves? (poner)", "puesto", "Poner → puesto. «Ponido» no existe."),
      fb("Participio.", "Mi hijo ha ___ la ventana. (romper)", "roto", "Romper → roto. «Rompido» es el error típico."),
      fb("Participio.", "Ya han ___ la tienda. (abrir)", "abierto", "Abrir → abierto, familia en -ierto, como cubierto."),
      fb("Participio.", "¿Todavía no ha ___ tu hermano? (volver)", "vuelto", "Volver → vuelto, familia en -uelto. «Volvido» no existe."),
      ms(
        "¿Qué participios son correctos?",
        ["descubierto", "devuelto", "hacido", "rompido"],
        [0, 1],
        "Descubrir y devolver heredan la irregularidad de cubrir y volver: descubierto, devuelto. «Hacido» y «rompido» no existen: los participios de hacer y romper son hecho y roto."
      ),
      toEs("Have you (tú) seen the new movie?", "¿Has visto la película nueva?", "«Have you seen» → pretérito perfecto: has + visto (participio irregular de ver).", ["¿Has visto la nueva película?"]),
      toEs("¿Quién ha abrido mi carta?", "¿Quién ha abierto mi carta?", "Abrir tiene participio irregular: abierto. «Abrido» es el error más frecuente.", [], "Corrige la frase."),
      toEs("We have returned the books to the library.", "Hemos devuelto los libros a la biblioteca.", "Devolver sigue a volver: devuelto, no «devolvido»."),
      fb("Completa con el pretérito perfecto.", "Los científicos ___ un planeta nuevo. (descubrir)", "han descubierto", "Ellos → han; descubrir sigue a cubrir: descubierto, no «descubrido»."),
      fb("Completa con el pretérito perfecto.", "¿Qué ___ con mi chaqueta? (hacer, tú)", "has hecho", "Tú → has; hacer → hecho. «Has hacido» no existe."),
      toEs("Muchos peces han morido por el calor.", "Muchos peces han muerto por el calor.", "Morir tiene participio irregular: muerto. «Morido» no existe.", ["Muchos peces se han muerto por el calor.", "Han muerto muchos peces por el calor."], "Corrige la frase."),
      wo("Mis hijos han cubierto el sofá con mantas", "Cubrir → cubierto, participio irregular que va justo después de han.", "My kids have covered the sofa with blankets"),
      toEs("¿Quién pone la mesa?", "¿Quién ha puesto la mesa?", "Quién pide la tercera persona: ha. Poner → puesto (irregular).", [], "Cambia al pretérito perfecto."),
      toEs("Los niños vuelven del colegio.", "Los niños han vuelto del colegio.", "Ellos → han; volver → vuelto (irregular).", ["Los niños ya han vuelto del colegio."], "Cambia al pretérito perfecto."),
      mc(
        "Prever se forma sobre ver. ¿Cuál es su participio?",
        ["previsto", "prevido", "preveído", "previó"],
        0,
        "Ver → visto, así que prever → previsto. «Prevido» y «preveído» aplican la regla regular; «previó» es el pretérito."
      ),
      fb("Participio.", "He ___ el informe tres veces. (reescribir)", "reescrito", "Reescribir es escribir con el prefijo re-, así que hereda escrito: reescrito."),
      toEs("Ya he resolvido el problema.", "Ya he resuelto el problema.", "Resolver pertenece a la familia de volver: resuelto, igual que vuelto.", [], "Corrige la frase."),
      fb("Participio.", "¿Ya has ___ los regalos? (envolver)", "envuelto", "Envolver también sigue a volver: envuelto, con el mismo cambio o → ue."),
      ms(
        "Ojo con la tilde: ¿qué participios son regulares aunque lleven tilde?",
        ["leído", "cubierto", "oído", "abierto", "traído"],
        [0, 2, 4],
        "Leído, oído y traído son regulares (-ido); la tilde solo aparece porque la raíz acaba en vocal (le-, o-, tra-). Cubierto y abierto sí son irregulares."
      ),
      toEs("They haven't told us where they've put the money.", "No nos han dicho dónde han puesto el dinero.", "Dos irregulares: dicho y puesto. «No nos» va antes de han."),
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
        "Recuerda la regla: experiencias = pretérito perfecto",
        [
          "Recuerda la regla: para hablar de experiencias de toda la vida, sin decir cuándo, se usa el pretérito perfecto con marcadores como alguna vez, nunca, ya, todavía no, varias veces o en mi vida. La vida todavía no ha terminado, así que el periodo sigue abierto. En gran parte de Latinoamérica también se oye el indefinido (¿alguna vez fuiste…?).",
          "Dos detalles: si nunca va delante del verbo, no lleva «no» (nunca he ido); si va detrás, sí (no he ido nunca). Y «have been to» se dice haber estado en (o haber ido a). Cuando das la fecha o los detalles de esa experiencia, pasas al indefinido: He estado en Perú. Fui en 2019.",
        ],
        [
          ["—¿Alguna vez has montado a caballo? —Sí, un par de veces.", "Have you ever ridden a horse? — Yes, a couple of times."],
          ["Todavía no he estado en Japón.", "I haven't been to Japan yet. (estar en for «been to»)"],
          ["No he visto nunca una aurora boreal.", "I've never seen the northern lights. (nunca after the verb needs no)"],
        ],
        [
          mc(
            "«I've never been to Mexico» →",
            ["Nunca he estado en México.", "Nunca estuve en México ayer.", "Nunca he estar en México.", "No nunca he estado."],
            0,
            "Para una experiencia de toda la vida se usa nunca + pretérito perfecto: nunca he estado. «Nunca estuve… ayer» mezcla la experiencia con un momento concreto, «he estar» usa infinitivo en vez de participio y «No nunca» repite la negación en mal orden."
          ),
          fb("Completa: «I've never tried tequila».", "No he probado ___ el tequila.", "nunca", "Cuando nunca va detrás del verbo, la frase necesita «no» delante: no he probado nunca. Con nunca delante, sin «no»: nunca he probado el tequila."),
        ]
      ),
    ],
    [
      toEs("Have you ever been to Spain? (tú)", "¿Alguna vez has estado en España?", "«Ever» pregunta por una experiencia: alguna vez + pretérito perfecto (has estado). En gran parte de Latinoamérica también: ¿alguna vez estuviste…?", ["¿Has estado alguna vez en España?", "¿Has estado en España alguna vez?", "¿Alguna vez has ido a España?", "¿Has ido alguna vez a España?", "¿Has ido a España alguna vez?", "¿Alguna vez estuviste en España?", "¿Estuviste alguna vez en España?", "¿Alguna vez fuiste a España?", "¿Fuiste alguna vez a España?"]),
      toEs("I've seen that movie three times.", "He visto esa película tres veces.", "Una experiencia sin fecha va en pretérito perfecto; ver → visto (irregular).", ["He visto tres veces esa película.", "Vi esa película tres veces.", "Vi tres veces esa película."]),
      toEs("No nunca he escrito un libro.", "Nunca he escrito un libro.", "Nunca delante del verbo ya es negativo: no se añade «no». Con nunca detrás, sí: no he escrito nunca.", ["No he escrito nunca un libro."], "Corrige la frase."),
      toEs("Ya hemos decidido.", "Todavía no hemos decidido.", "Lo contrario de ya es todavía no (o aún no), delante de haber: todavía no hemos decidido.", ["Aún no hemos decidido.", "No hemos decidido todavía."], "Cambia a la forma negativa con «todavía»."),
      fb("Completa.", "¿Alguna vez ___ en un concierto de rock? (estar, tú)", "has estado", "Alguna vez pregunta por una experiencia: pretérito perfecto, tú → has estado."),
      fb("Completa.", "Mis padres nunca ___ en avión. (viajar)", "han viajado", "Nunca + pretérito perfecto para una experiencia que no han tenido: ellos → han viajado."),
      wo("En mi vida he visto un paisaje tan bonito.", "Perfecto de experiencia. «En mi vida» al principio de la frase funciona como negación (= nunca), así que no se añade «no»: en mi vida he visto…", "I've never in my life seen such a beautiful landscape."),
      toEs("Have you (tú) ever eaten sushi?", "¿Alguna vez has comido sushi?", "Para experiencias de vida: alguna vez + pretérito perfecto. En gran parte de Latinoamérica también se dice «¿Alguna vez comiste…?».", ["¿Has comido sushi alguna vez?", "¿Has comido alguna vez sushi?", "¿Alguna vez comiste sushi?", "¿Comiste sushi alguna vez?", "¿Comiste alguna vez sushi?"]),
      toEs("He nunca conducido un camión.", "Nunca he conducido un camión.", "Nada se mete entre haber y el participio: nunca va delante de he (o detrás de todo, con «no»: no he conducido nunca).", ["No he conducido nunca un camión.", "Nunca he manejado un camión.", "No he manejado nunca un camión."], "Corrige la frase."),
      toEs("Hemos estado a París varias veces.", "Hemos estado en París varias veces.", "Estar va con en (hemos estado en París); la preposición a va con ir (hemos ido a París).", ["Hemos estado varias veces en París.", "Hemos ido a París varias veces.", "Hemos ido varias veces a París."], "Corrige la frase."),
      { type: "fill-blank", prompt: "¿Cómo se dicen en español las palabras en negrita?", sentence: "¿Alguna vez te ___ un hueso?", answer: "has roto", en: "[Have you] ever [broken] a bone? (tú)", altAnswers: ["rompiste"], explanation: "Romper → roto. El reflexivo «te» va antes de has. En Latinoamérica también se oye «te rompiste»." },
      { type: "fill-blank", prompt: "¿Cómo se dicen en español las palabras en negrita?", sentence: "Mi abuela nunca ___ un cajero automático.", answer: "ha usado", en: "My grandmother [has] never [used] an ATM.", altAnswers: ["ha utilizado", "usó", "utilizó"], explanation: "Ella → ha + usado. Nunca va delante de haber, sin «no»." },
      toEs("Have you (usted) ever lived abroad?", "¿Alguna vez ha vivido en el extranjero?", "Usted → ha. Alguna vez pregunta por la experiencia de toda la vida.", ["¿Ha vivido alguna vez en el extranjero?", "¿Alguna vez ha vivido fuera del país?", "¿Ha vivido alguna vez fuera del país?", "¿Alguna vez vivió en el extranjero?", "¿Vivió alguna vez en el extranjero?", "¿Alguna vez vivió fuera del país?"]),
      toEs("Mis amigos han visto la nieve.", "Mis amigos nunca han visto la nieve.", "Nunca delante de haber, sin «no»; o «no» delante y nunca detrás: no han visto nunca.", ["Mis amigos nunca han visto nieve.", "Mis amigos no han visto nunca la nieve.", "Mis amigos no han visto nunca nieve."], "Cambia a la forma negativa con «nunca»."),
      mc("«Have you ever been to Cuba?»", ["¿Alguna vez has sido en Cuba?", "¿Alguna vez has estado en Cuba?", "¿Has alguna vez estado en Cuba?", "¿Alguna vez he estado en Cuba?"], 1, "«Been to» = estado en (ser no indica dónde has estado), y nada se mete entre has y el participio. «He estado» es yo, no tú."),
      toEs("I haven't tried that restaurant yet.", "Todavía no he probado ese restaurante.", "Todavía no / aún no + he + participio = not yet.", ["Aún no he probado ese restaurante.", "No he probado ese restaurante todavía.", "No he probado todavía ese restaurante.", "No he probado ese restaurante aún.", "Todavía no probé ese restaurante.", "Aún no probé ese restaurante."]),
      toEs("I've read this book twice.", "He leído este libro dos veces.", "Leer → leído (con tilde). Contar las veces es típico del pretérito perfecto de experiencia.", ["He leído dos veces este libro.", "Leí este libro dos veces.", "Leí dos veces este libro."]),
      wo("Nunca en mi vida he ganado un premio", "«Nunca en mi vida» refuerza la experiencia; he ganado va junto.", "I've never won a prize in my life"),
      toEs("¿Alguna vez has dormido en una tienda de campaña?", "¿Alguna vez han dormido en una tienda de campaña?", "Ustedes → han; dormido no cambia.", ["¿Han dormido alguna vez en una tienda de campaña?", "¿Alguna vez han dormido en una carpa?", "¿Han dormido alguna vez en una carpa?"], "Cambia la pregunta a ustedes."),
      { type: "fill-blank", prompt: "¿Cómo se dicen en español las palabras en negrita?", sentence: "Mi hermana ___ el maratón de Nueva York varias veces.", answer: "ha corrido", en: "My sister [has run] the New York marathon several times.", altAnswers: ["corrió"], explanation: "Varias veces cuenta experiencias: pretérito perfecto, ha corrido (en Latinoamérica también «corrió»)." },
      toEs("Nunca no le hemos dicho eso a nadie.", "Nunca le hemos dicho eso a nadie.", "Nunca al principio ya niega: sobra el «no». Si nunca fuera detrás, el «no» iría delante: no le hemos dicho eso nunca a nadie.", ["Nunca hemos dicho eso a nadie.", "No le hemos dicho eso nunca a nadie.", "Nunca se lo hemos dicho a nadie."], "Corrige la frase."),
      wo("¿Alguna vez has escrito un poema de amor?", "Alguna vez + has + participio irregular escrito.", "Have you ever written a love poem?"),
      toEs("I've changed jobs several times, but I've never worked in a bank.", "He cambiado de trabajo varias veces, pero nunca he trabajado en un banco.", "Las dos partes hablan de experiencias de vida: pretérito perfecto en ambas.", ["He cambiado de trabajo varias veces, pero no he trabajado nunca en un banco.", "He cambiado varias veces de trabajo, pero nunca he trabajado en un banco.", "Cambié de trabajo varias veces, pero nunca trabajé en un banco.", "Cambié varias veces de trabajo, pero nunca trabajé en un banco."]),
      mc(
        "—¿Has estado en Roma? —Sí, ___ en 2018 con mis padres.",
        ["fui", "he ido", "iba", "iré"],
        0,
        "La pregunta va en perfecto porque pide la experiencia; la respuesta da una fecha cerrada (en 2018), y con fecha se pasa al indefinido: fui. «He ido» no combina con un año pasado, «iba» describe un hábito e «iré» es futuro."
      ),
      { type: "speak", prompt: "Responde en voz alta: ¿alguna vez has viajado solo o sola? Contesta con una frase completa y di cuántas veces.", text: "Sí, he viajado sola dos veces.", explanation: "Una experiencia sin fecha: pretérito perfecto (he viajado). El número de veces es típico de este uso. Si nunca lo has hecho: No, nunca he viajado solo." },
      { type: "speak", prompt: "Responde en voz alta: di algo que nunca has hecho y que te gustaría hacer.", text: "Nunca he saltado en paracaídas, pero me gustaría hacerlo.", explanation: "Nunca delante de haber, sin «no»: nunca he + participio. La segunda parte (me gustaría) no es experiencia, sino deseo." },
      { type: "speak", prompt: "Pregunta en voz alta a una amiga si alguna vez ha visto una ballena.", text: "¿Alguna vez has visto una ballena?", explanation: "Alguna vez + has (tú) + visto, participio irregular de ver." },
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
        "Recuerda la regla: ¿el periodo incluye el ahora?",
        [
          "Recuerda la regla: elige el tiempo por el marco temporal. Si el periodo todavía no ha terminado (hoy, esta mañana, esta semana, este año, hace un rato), en España se usa el pretérito perfecto: he comido. Si el periodo ya está cerrado (ayer, anoche, el lunes pasado, en 2019, hace dos años), se usa el indefinido: comí.",
          "En gran parte de Latinoamérica se prefiere el indefinido en los dos casos (hoy comí paella), así que esta distinción es sobre todo del español de España. Las experiencias sin fecha (alguna vez, nunca) van en perfecto en todas partes.",
        ],
        [
          ["Esta mañana he desayunado fruta.", "This morning I had fruit. (the morning is part of today)"],
          ["Ayer desayuné churros.", "Yesterday I had churros. (yesterday is over)"],
          ["Hace un rato he hablado con Ana, pero hace un mes hablé con su hermano.", "I spoke to Ana a while ago, but I spoke to her brother a month ago."],
        ],
        [
          mc(
            "«Este año ___ mucho.» (viajar, nosotros — España)",
            ["hemos viajado", "viajamos ayer", "viajábamos", "viajaremos"],
            0,
            "«Este año» es un periodo que aún no ha terminado, así que en España se usa el pretérito perfecto: hemos viajado. «Viajamos ayer» contradice «este año», «viajábamos» describe un hábito pasado y «viajaremos» es futuro."
          ),
          fb("Completa (España).", "Esta tarde ___ un pastel. (hacer, yo)", "he hecho", "«Esta tarde» forma parte de hoy, un periodo abierto: pretérito perfecto, he hecho (participio irregular)."),
        ]
      ),
    ],
    [
      mc(
        "«En 2019 ___ a Japón.» (ir, yo)",
        ["fui", "he ido", "iba", "iré"],
        0,
        "Una fecha ya terminada (en 2019) pide el pretérito indefinido: fui. «He ido» se usa con periodos que llegan al presente, «iba» describe hábitos o fondo y «iré» es futuro."
      ),
      fb("Completa (España).", "Hoy ___ temprano. (levantarse, yo)", "me he levantado", "Hoy no ha terminado → pretérito perfecto; el reflexivo me va delante de he."),
      fb("Completa.", "Ayer ___ tarde. (levantarse, yo)", "me levanté", "Ayer es un periodo cerrado → indefinido: me levanté."),
      fb("Completa (España).", "Este mes no ___ ninguna película. (ver, yo)", "he visto", "Este mes sigue abierto → pretérito perfecto; ver → visto."),
      fb("Completa.", "La semana pasada no ___ nada. (hacer, yo)", "hice", "«La semana pasada» ya terminó → indefinido: hice."),
      { ...fb("Completa.", "Hace dos años ___ el carné de conducir. (sacar, yo)", "saqué", "«Hace dos años» sitúa la acción en un momento cerrado → indefinido: saqué (c → qu delante de e)."), altAnswers: ["me saqué"] },
      ms(
        "¿Qué marcadores van con el pretérito perfecto (España)?",
        ["hoy", "esta mañana", "ayer", "este mes"],
        [0, 1, 3],
        "Hoy, esta mañana y este mes son periodos que incluyen el presente: en España llevan pretérito perfecto. «Ayer» es un tiempo terminado y pide el indefinido: ayer comí."
      ),
      toEs("This morning I've drunk two coffees.", "Esta mañana me he tomado dos cafés.", "En España, «esta mañana» (parte de hoy) va con pretérito perfecto: me he tomado.", ["Esta mañana he tomado dos cafés.", "Esta mañana he bebido dos cafés."]),
      toEs("Ayer he ido al dentista.", "Ayer fui al dentista.", "«Ayer» es un tiempo terminado: pretérito indefinido (fui), no «he ido».", ["Fui al dentista ayer."], "Corrige la frase."),
      toEs("Ayer fui al dentista.", "Hoy he ido al dentista.", "«Hoy» todavía no ha terminado: en España, pretérito perfecto (he ido).", ["Hoy he estado en el dentista.", "He ido al dentista hoy.", "Hoy fui al dentista."], "Cambia «ayer» por «hoy» (España)."),
      { type: "fill-blank", prompt: "¿Cómo se dicen en español las palabras en negrita?", sentence: "Anoche ___ muy tarde.", answer: "cenamos", en: "Last night we [had dinner] very late.", explanation: "«Anoche» cierra el periodo: indefinido (cenamos), no «hemos cenado»." },
      { type: "fill-blank", prompt: "¿Cómo se dicen en español las palabras en negrita?", sentence: "Esta noche ___ pescado.", answer: "hemos cenado", en: "Tonight we [have had] fish for dinner.", altAnswers: ["hemos comido", "hemos tomado", "cenamos"], explanation: "«Esta noche» sigue dentro de hoy: pretérito perfecto en España (en Latinoamérica, «cenamos»)." },
      toEs("This year I've read ten books.", "Este año he leído diez libros.", "«Este año» incluye el presente: pretérito perfecto.", ["He leído diez libros este año."]),
      toEs("Este año he leído veinte libros.", "El año pasado leí veinte libros.", "«El año pasado» ya terminó: el verbo pasa al indefinido (leí).", ["Leí veinte libros el año pasado."], "Cambia «este año» por «el año pasado»."),
      mc("«Hace tres años ___ a Madrid.» (mudarse, ellos)", ["se han mudado", "se mudaron", "se mudaban", "se mudarán"], 1, "«Hace tres años» señala un momento terminado: indefinido, se mudaron. «Se han mudado» conectaría con el presente, «se mudaban» sería un hábito y «se mudarán», futuro."),
      { type: "fill-blank", prompt: "¿Cómo se dicen en español las palabras en negrita?", sentence: "Esta semana mi jefe me ___ dos veces.", answer: "ha llamado", en: "This week my boss [has called] me twice.", altAnswers: ["llamó"], explanation: "«Esta semana» no ha terminado: pretérito perfecto, ha llamado (en Latinoamérica también «llamó»)." },
      toEs("El lunes pasado mi jefa me ha llamado tres veces.", "El lunes pasado mi jefa me llamó tres veces.", "«El lunes pasado» es un tiempo cerrado: indefinido, llamó.", [], "Corrige la frase."),
      toEs("This afternoon we've played tennis. (Spain)", "Esta tarde hemos jugado al tenis.", "«Esta tarde» pertenece a hoy: en España, pretérito perfecto.", ["Esta tarde hemos jugado tenis.", "Hemos jugado al tenis esta tarde.", "Hemos jugado tenis esta tarde."]),
      toEs("El sábado pasado hemos jugado al fútbol.", "El sábado pasado jugamos al fútbol.", "«El sábado pasado» ya terminó: indefinido, jugamos.", ["El sábado pasado jugamos fútbol.", "Jugamos al fútbol el sábado pasado."], "Corrige la frase."),
      toEs("In 2020 my sister had a baby.", "En 2020 mi hermana tuvo un bebé.", "Un año concreto del pasado pide indefinido: tuvo, no «ha tenido».", ["Mi hermana tuvo un bebé en 2020."]),
      toEs("This month it has rained a lot.", "Este mes ha llovido mucho.", "«Este mes» sigue abierto: ha llovido.", ["Ha llovido mucho este mes.", "Este mes llovió mucho."]),
      wo("Hace dos semanas perdí mi cartera en el metro", "«Hace dos semanas» es pasado cerrado: indefinido, perdí.", "Two weeks ago I lost my wallet on the subway"),
      wo("Este mes hemos ahorrado bastante dinero", "«Este mes» incluye el presente: hemos ahorrado.", "This month we have saved quite a lot of money"),
      mc("«Esta mañana ___ el autobús.» (perder, yo — España)", ["he perdido", "perdí ayer", "perdía", "perderé"], 0, "En España, «esta mañana» (todavía hoy) va con pretérito perfecto: he perdido. «Perdí ayer» contradice «esta mañana», «perdía» es un hábito y «perderé», futuro."),
      mc(
        "«Hace un rato he hablado con Ana» pero «Hace dos años hablé con Ana». ¿Por qué cambia el tiempo?",
        ["Porque «hace un rato» queda dentro de hoy, y «hace dos años» es un periodo cerrado.", "Porque «hace» siempre pide pretérito perfecto.", "Porque la primera frase es un hábito.", "Porque con Ana solo se usa el indefinido."],
        0,
        "No decide la palabra «hace», sino el periodo: «hace un rato» sigue dentro de hoy (perfecto en España) y «hace dos años» está cerrado (indefinido). No hay hábito en ninguna de las dos frases."
      ),
      toEs("Have you (tú) seen Carlos today? I saw him yesterday, but not today. (Spain)", "¿Has visto a Carlos hoy? Lo vi ayer, pero hoy no.", "Hoy → has visto (periodo abierto); ayer → vi (periodo cerrado).", ["¿Hoy has visto a Carlos? Lo vi ayer, pero hoy no.", "¿Has visto hoy a Carlos? Lo vi ayer, pero hoy no.", "¿Has visto a Carlos hoy? Le vi ayer, pero hoy no.", "¿Has visto hoy a Carlos? Le vi ayer, pero hoy no."]),
      toEs("This week I've slept badly, but last week I slept very well.", "Esta semana he dormido mal, pero la semana pasada dormí muy bien.", "Cada marcador decide el tiempo: esta semana → he dormido; la semana pasada → dormí."),
      { type: "speak", prompt: "Responde en voz alta (español de España): di una cosa que has hecho hoy y otra que hiciste ayer.", text: "Hoy he trabajado en casa y ayer fui al cine con mis amigos.", explanation: "Hoy (periodo abierto) → pretérito perfecto: he trabajado. Ayer (cerrado) → indefinido: fui." },
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
        "Recuerda la regla y lee el correo",
        [
          "Recuerda la regla: en el pretérito perfecto, (1) los participios de hacer, decir, escribir, ver, poner, volver, romper, abrir, morir y cubrir (y sus compuestos) son irregulares, y (2) todo lo que no es participio (pronombres, no) va delante de haber.",
          "Este correo tiene un error de cada tipo: «Hola, jefa: ya ✗ he hacido (→ he hecho) el informe y ✗ he escribido (→ he escrito) a los clientes. ✗ He lo mandado (→ Lo he mandado) esta mañana. Pedro ✗ ha me dicho (→ me ha dicho) que usted ✗ ha volvido (→ ha vuelto) de vacaciones.»",
        ],
        [
          ["Lo he mandado a las nueve.", "I've sent it at nine. (lo before he)"],
          ["Pedro me ha dicho que ha vuelto.", "Pedro has told me you (usted) are back. (me before ha; volver → vuelto)"],
        ],
        [
          fb("Corrige.", "Ya he ___ el informe. (el correo dice: hacido)", "hecho", "Hacer tiene participio irregular: hecho. «Hacido» no existe."),
          toEs("Los clientes ya han devolvido el contrato.", "Los clientes ya han devuelto el contrato.", "Devolver hereda la irregularidad de volver: devuelto, no «devolvido».", ["Los clientes han devuelto ya el contrato.", "Ya han devuelto el contrato los clientes."], "Corrige la frase."),
        ]
      ),
    ],
    [
      fb("Corrige.", "He ___ a los clientes. (el correo dice: escribido)", "escrito", "Escribir tiene participio irregular: escrito. «Escribido» no existe."),
      fb("Corrige.", "___ he mandado esta mañana. (el correo dice: He lo…)", "Lo", "Con el pretérito perfecto, el pronombre va delante de haber: lo he mandado, nunca «he lo»."),
      fb("Corrige.", "Pedro ___ ha dicho que usted está aquí. (el correo dice: ha me)", "me", "El pronombre va delante de haber, nunca entre haber y el participio: me ha dicho."),
      fb("Corrige.", "Usted ha ___ de vacaciones. (el correo dice: volvido)", "vuelto", "Volver tiene participio irregular: vuelto (igual que devolver → devuelto). «Volvido» no existe."),
      fb("Corrige.", "Se ha ___ la impresora. (el correo dice: rompido)", "roto", "Romper tiene participio irregular: roto. «Rompido» no existe."),
      mc(
        "¿Cuál está bien?",
        ["Nos han dicho que ya han abierto la oficina.", "Han nos dicho que ya han abrido.", "Nos han dicho que ya han abrido la oficina.", "Han dicho nos que abierto."],
        0,
        "Los pronombres van antes de haber (nos han dicho), y el participio de abrir es irregular: abierto. «Han nos dicho» coloca mal el pronombre y «abrido» no existe."
      ),
      toEs("I've already sent it to her.", "Ya se lo he mandado.", "Se lo (a ella, la cosa) + he + participio: los dos pronombres juntos delante de haber.", ["Ya se lo he enviado."]),
      fb("Corrige.", "Ya hemos ___ la fecha de la reunión. (el correo dice: ponido)", "puesto", "Poner → puesto; «ponido» no existe."),
      fb("Corrige.", "Los clientes ___ han pedido más información. (el correo dice: han nos pedido)", "nos", "El pronombre va delante de haber: nos han pedido."),
      fb("Corrige.", "La secretaria ha ___ la oficina a las ocho. (el correo dice: abrido)", "abierto", "Abrir → abierto, participio irregular."),
      fb("Corrige.", "¿Ya ___ ha leído usted? (el correo dice: Ya ha lo leído)", "lo", "Lo va delante de ha, nunca entre ha y leído."),
      fb("Corrige.", "Nadie ha ___ nada sobre el problema. (el correo dice: decido)", "dicho", "Decir → dicho; «decido» es el presente de decidir."),
      toEs("I've written the report and I've sent it to you (usted).", "He escrito el informe y se lo he enviado.", "Escribir → escrito; «se lo» (a usted, el informe) va delante de he.", ["He escrito el informe y se lo he mandado."]),
      toEs("Pedro has told me that the printer has broken.", "Pedro me ha dicho que se ha roto la impresora.", "Me y se van delante de ha; dicho y roto son irregulares.", ["Pedro me ha dicho que la impresora se ha roto."]),
      toEs("Hemos hecho todo lo que nos ha pedido.", "He hecho todo lo que me ha pedido.", "Con yo cambian haber (hemos → he) y el pronombre (nos → me); hecho no cambia.", ["Yo he hecho todo lo que me ha pedido."], "Cambia el sujeto a yo."),
      toEs("Have you (usted) seen my message? I sent it to you this morning.", "¿Ha visto mi mensaje? Se lo he enviado esta mañana.", "Ver → visto; «se lo» va delante de he, nunca «he se lo enviado».", ["¿Ha visto mi mensaje? Se lo he mandado esta mañana.", "¿Ha visto mi mensaje? Se lo envié esta mañana.", "¿Ha visto mi mensaje? Se lo mandé esta mañana."]),
      mc("¿Cuál está bien?", ["Me han dicho que la reunión se ha cancelado.", "Han me dicho que la reunión se ha cancelado.", "Me han decido que la reunión se ha cancelado.", "Me han dicho que la reunión ha se cancelado."], 0, "Pronombres siempre antes de haber (me han, se ha) y decir → dicho. Cada una de las otras rompe una de esas dos reglas."),
      wo("Ya les he escrito a todos los proveedores", "Ya + les + he + escrito: el pronombre delante de haber y el participio irregular.", "I've already written to all the suppliers"),
      toEs("El director vuelve de París y abre la nueva oficina.", "El director ha vuelto de París y ha abierto la nueva oficina.", "Volver → vuelto; abrir → abierto. Los dos verbos necesitan su propio ha.", ["La directora ha vuelto de París y ha abierto la nueva oficina.", "El director ha vuelto de París y ha abierto la oficina nueva."], "Cambia al pretérito perfecto."),
      toEs("Todavía no hemos veído las nuevas cifras.", "Todavía no hemos visto las nuevas cifras.", "Ver tiene participio irregular: visto, no «veído».", ["Aún no hemos visto las nuevas cifras.", "Todavía no hemos visto las cifras nuevas."], "Corrige la frase."),
      toEs("Someone has broken the coffee machine.", "Alguien ha roto la máquina de café.", "Romper → roto, no «rompido».", ["Alguien ha roto la cafetera."]),
      wo("Se lo hemos explicado a los nuevos empleados", "Se lo va delante de hemos; nunca «hemos se lo explicado».", "We have explained it to the new employees"),
      toEs("Have you (usted) told the team that you've come back?", "¿Le ha dicho al equipo que ha vuelto?", "Le va delante de ha; dicho y vuelto son irregulares.", ["¿Ha dicho al equipo que ha vuelto?", "¿Le ha dicho usted al equipo que ha vuelto?", "¿Le ha dicho al equipo que ya ha vuelto?"]),
      toEs("I've put the documents in your (usted) drawer and I've covered them with a folder.", "He puesto los documentos en su cajón y los he cubierto con una carpeta.", "Puesto y cubierto son irregulares, y «los» va delante de he.", ["He puesto los documentos en su cajón y los he tapado con una carpeta."]),
      toEs("Ya he revisado el presupuesto.", "Ya lo he revisado.", "El presupuesto (masculino singular) → lo, delante de he: ya lo he revisado.", [], "Sustituye «el presupuesto» por un pronombre."),
      { type: "speak", prompt: "Responde en voz alta a tu jefa (usted): dile que ya has terminado el informe y que se lo has mandado esta mañana.", text: "Ya he terminado el informe y se lo he mandado esta mañana.", explanation: "Se lo (a usted, el informe) va delante de he. Esta mañana, en España, va con pretérito perfecto." },
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
        "Recuerda la regla: sí → ya, no → todavía no",
        [
          "Recuerda la regla: a una pregunta en pretérito perfecto se responde en el mismo tiempo. Si la respuesta es sí, ya + perfecto (ya lo he hecho); si es no, todavía no / aún no + perfecto (todavía no lo he hecho). El pronombre que sustituye a la cosa va justo delante de haber.",
          "En la pregunta, ya equivale a «yet» o «already»: ¿Ya has comido? = Have you eaten yet?",
        ],
        [
          ["—¿Has llamado a mamá? —Sí, ya la he llamado.", "Have you called Mom? — Yes, I've already called her. (mamá → la)"],
          ["—¿Habéis hecho la cena? —No, aún no la hemos hecho.", "Have you made dinner? — No, we haven't made it yet."],
        ],
        [
          fb("Responde (sí).", "—¿Has comprado el pan? —Sí, ya lo ___.", "he comprado", "Se responde con el mismo tiempo de la pregunta: ya + he + participio → ya lo he comprado."),
          mc(
            "—¿Te has duchado? —No, ___.",
            ["todavía no me he duchado", "todavía no he duchado", "ya me he duchado", "todavía no he me duchado"],
            0,
            "No → todavía no; ducharse es reflexivo, así que el pronombre (me) va delante de he. Sin «me» cambia el sentido (duchar a otro), «ya» contradice el no y «he me» mete el pronombre en medio."
          ),
        ]
      ),
    ],
    [
      fb("Responde (no).", "—¿Has hecho la maleta? —No, todavía no la ___.", "he hecho", "«Todavía no» + pretérito perfecto dice que algo no ha pasado hasta ahora; hacer → hecho."),
      fb("Responde (sí).", "—¿Habéis visto la exposición? —Sí, ya la ___.", "hemos visto", "Nosotros → hemos, y ver tiene participio irregular: visto. El pronombre la va delante."),
      fb("Responde (no).", "—¿Ha venido el técnico? —No, todavía no ___. (llegar)", "ha llegado", "No → todavía no + perfecto: ha llegado."),
      fb("Responde (sí).", "—¿El cliente te ha pagado? —Sí, ya me ___ la factura. (pagar, perfecto)", "ha pagado", "Sí → ya + perfecto; me (a mí) va delante de ha."),
      fb("Responde (no).", "—¿Has escrito el correo? —No, aún no lo ___.", "he escrito", "«Aún no» = todavía no, con pretérito perfecto; escribir → escrito (irregular)."),
      fb("Responde (sí).", "—¿Os habéis despertado? —Sí, ya nos ___.", "hemos despertado", "Con un verbo reflexivo, el pronombre (nos) va delante de haber: nos hemos despertado."),
      mc(
        "«—¿Has puesto la mesa? —No, ___.»",
        ["todavía no la he puesto", "ya la he puesto", "todavía no la puse mañana", "no la he ponido"],
        0,
        "«Todavía no» + pretérito perfecto, con el participio irregular de poner: todavía no la he puesto. «Ya la he puesto» dice lo contrario del «No», «la puse mañana» mezcla pasado y futuro y «ponido» no existe."
      ),
      toEs("I haven't finished yet.", "Todavía no he terminado.", "«Not… yet» = todavía no + pretérito perfecto: todavía no he terminado.", ["Aún no he terminado.", "No he terminado todavía."]),
      toEs("No, todavía no lo he hecho.", "Sí, ya lo he hecho.", "La respuesta afirmativa cambia todavía no por ya; el pronombre lo sigue delante de he.", ["Sí, lo he hecho ya."], "Cambia la respuesta a afirmativa."),
      toEs("No, I haven't seen it (the movie) yet.", "No, todavía no la he visto.", "La película → la, delante de he; todavía no = not yet.", ["No, aún no la he visto.", "No, no la he visto todavía.", "No, no la he visto aún."]),
      { type: "fill-blank", prompt: "¿Cómo se dicen en español las palabras en negrita?", sentence: "—¿Has lavado los platos? —Sí, ya ___ he lavado.", answer: "los", en: "—Have you washed the dishes? —Yes, I've already washed [them].", explanation: "Los platos (masculino plural) → los, entre ya y he." },
      { type: "fill-blank", prompt: "¿Cómo se dicen en español las palabras en negrita?", sentence: "—¿Han llamado al médico? —No, todavía no ___ hemos llamado.", answer: "lo", en: "—Have you all called the doctor? —No, we haven't called [him] yet.", altAnswers: ["le"], explanation: "El médico → lo (o le en España), delante de hemos." },
      { type: "fill-blank", prompt: "¿Cómo se dicen en español las palabras en negrita?", sentence: "—¿Se ha levantado Pablo? —Sí, ya ___.", answer: "se ha levantado", en: "—Has Pablo gotten up? —Yes, he [has] already [gotten up].", explanation: "Verbo reflexivo: se ha levantado, con el «se» delante de ha." },
      { type: "fill-blank", prompt: "¿Cómo se dicen en español las palabras en negrita?", sentence: "—¿Han terminado los exámenes? —No, ___ no han terminado.", answer: "todavía", en: "—Have the exams finished? —No, they haven't finished [yet].", altAnswers: ["aún"], explanation: "Todavía no (o aún no) = not yet." },
      toEs("Have you (tú) bought the tickets yet?", "¿Ya has comprado las entradas?", "En preguntas, ya = yet: ¿ya has…?", ["¿Has comprado ya las entradas?", "¿Ya has comprado los boletos?", "¿Has comprado ya los boletos?", "¿Ya has comprado los billetes?", "¿Has comprado ya los billetes?"]),
      toEs("Ya hemos comido.", "Todavía no hemos comido.", "Lo contrario de ya + perfecto es todavía no (o aún no) + perfecto.", ["Aún no hemos comido.", "No hemos comido todavía."], "Cambia a la forma negativa con «todavía no»."),
      toEs("Los niños todavía no han se duchado.", "Los niños todavía no se han duchado.", "El reflexivo va delante de haber: todavía no se han duchado. Nada se mete entre han y el participio.", ["Los niños aún no se han duchado.", "Todavía no se han duchado los niños."], "Corrige la frase."),
      toEs("Has Ana sent you (tú) the photos? — Yes, she's already sent them to me.", "¿Ana te ha enviado las fotos? Sí, ya me las ha enviado.", "Los dos pronombres (me las) van juntos delante de ha.", ["¿Te ha enviado Ana las fotos? Sí, ya me las ha enviado.", "¿Ana te ha mandado las fotos? Sí, ya me las ha mandado.", "¿Te ha mandado Ana las fotos? Sí, ya me las ha mandado."]),
      mc("—¿Has cerrado la puerta? —Sí, ___.", ["ya la he cerrado", "ya he la cerrado", "ya la cerré mañana", "todavía no la he cerrado"], 0, "Sí → ya, con el pronombre «la» delante de he. «He la» separa el bloque, «mañana» es futuro y «todavía no» contradice el sí."),
      mc("—¿Ha llegado tu hermana? —No, ___.", ["todavía no ha llegado", "ya ha llegado", "ya no ha llegado", "todavía no llegó mañana"], 0, "Not yet = todavía no. «Ya no» significa «no longer» y no sirve aquí; «ya ha llegado» contradice el no."),
      wo("No, todavía no lo hemos decidido", "Todavía no + lo + hemos + participio.", "No, we haven't decided it yet"),
      wo("Sí, ya se lo he dicho", "Ya + se lo + he + dicho: los pronombres juntos delante de haber.", "Yes, I've already told him"),
      toEs("Have you all (ustedes) finished the exam yet? — Not yet.", "¿Ya han terminado el examen? Todavía no.", "En la pregunta, ya + han terminado; la respuesta corta para not yet es todavía no (o aún no).", ["¿Han terminado ya el examen? Todavía no.", "¿Ya han terminado el examen? Aún no.", "¿Han terminado ya el examen? Aún no.", "¿Ya han acabado el examen? Todavía no.", "¿Ya habéis terminado el examen? Todavía no.", "¿Habéis terminado ya el examen? Todavía no."]),
      toEs("Mi jefe todavía no ha me contestado.", "Mi jefe todavía no me ha contestado.", "El pronombre (me) va delante de ha: todavía no me ha contestado.", ["Mi jefe aún no me ha contestado.", "Mi jefa todavía no me ha contestado."], "Corrige la frase."),
      toEs("I've already read the first chapter, but I haven't started the second one yet.", "Ya he leído el primer capítulo, pero todavía no he empezado el segundo.", "Ya para lo hecho, todavía no para lo pendiente.", ["Ya he leído el primer capítulo, pero aún no he empezado el segundo.", "Ya he leído el primer capítulo, pero todavía no he comenzado el segundo.", "He leído ya el primer capítulo, pero todavía no he empezado el segundo."]),
      toEs("Have you (tú) fixed the bike? — No, I haven't fixed it yet, but I've already bought the parts.", "¿Has arreglado la bici? No, todavía no la he arreglado, pero ya he comprado las piezas.", "Todavía no la he… / ya he…: pronombre y adverbio delante de haber.", ["¿Has arreglado la bicicleta? No, todavía no la he arreglado, pero ya he comprado las piezas.", "¿Has arreglado la bici? No, aún no la he arreglado, pero ya he comprado las piezas.", "¿Has arreglado la bicicleta? No, aún no la he arreglado, pero ya he comprado las piezas."]),
      { type: "speak", prompt: "Responde rápido en voz alta: «¿Has hecho los deberes?». Todavía no.", text: "No, todavía no los he hecho.", explanation: "No → todavía no + perfecto; los deberes → los, delante de he; hacer → hecho." },
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
        "Recuerda la regla y lee el día",
        [
          "Recuerda la regla: lo que ha pasado hoy, contado hoy, va en pretérito perfecto (en España): el día todavía no ha terminado. Fíjate en los participios irregulares (dicho, roto, vuelto) y en los pronombres delante de haber (me he despertado, me ha dicho).",
          "«¡Qué día he tenido! Me he despertado tarde, he perdido el autobús y he llegado tarde a la reunión. Mi jefe me ha dicho que no puede ser. Luego he roto una taza. Al final he vuelto a casa y me he dado un baño.»",
        ],
        [
          ["Hoy se me ha olvidado el móvil en casa.", "Today I left my phone at home. (today → perfect; se me before ha)"],
          ["—¿Qué te ha pasado? —Nada, que hoy todo me ha ido fatal.", "What's happened to you? — Nothing, just that everything has gone badly today."],
        ],
        [
          mc(
            "¿Qué ha hecho al final del día?",
            ["se ha dado un baño", "ha ido al cine", "ha llamado a su jefe", "ha salido a cenar"],
            0,
            "Al final del día dice: «Me he dado un baño». No habla de ir al cine, llamar a su jefe ni salir a cenar."
          ),
          mc(
            "¿Por qué el narrador usa «he tenido», «he perdido», «he roto»…?",
            ["Porque cuenta cosas de hoy, un periodo que todavía no ha terminado.", "Porque son acciones habituales.", "Porque son planes para mañana.", "Porque habla de su infancia."],
            0,
            "Lo que ocurre dentro de hoy y se cuenta el mismo día va en pretérito perfecto. Un hábito iría en presente o imperfecto, un plan en futuro y la infancia en imperfecto."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "Me ___ tarde. (despertar)", "he despertado", "Despertarse es reflexivo: me + he + despertado, con el pronombre delante de haber."),
      fb("Completa.", "___ el autobús. (perder, yo)", "He perdido", "Acción de hoy → pretérito perfecto: he + perdido (regular)."),
      fb("Completa.", "Mi jefe me ___ que no puede ser. (decir)", "ha dicho", "Mi jefe → ha; decir → dicho (irregular)."),
      fb("Completa.", "Luego ___ una taza. (romper, yo)", "he roto", "Romper → roto (irregular), no «rompido»."),
      fb("Completa.", "Al final ___ a casa. (volver, yo)", "he vuelto", "Volver → vuelto (irregular), no «volvido»."),
      fb("Completa.", "Me ___ un baño. (dar)", "he dado", "Darse un baño: me + he + dado (dar tiene participio regular)."),
      toEs("What a day I've had!", "¡Qué día he tenido!", "Un día que acaba de pasar y sigue siendo hoy va en pretérito perfecto: he tenido.", ["¡Menudo día he tenido!"]),
      toEs("I've lost my keys.", "He perdido las llaves.", "Lo ocurrido hoy, contado hoy: pretérito perfecto.", ["He perdido mis llaves."]),
      toEs("It has rained all day.", "Ha llovido todo el día.", "Llover → ha llovido, siempre en tercera persona singular."),
      toEs("Se me ha rompido el ordenador.", "Se me ha roto el ordenador.", "Romper tiene participio irregular: roto. Los pronombres (se me) ya están bien delante de ha.", ["Se me ha roto la computadora.", "Se ha roto mi ordenador.", "Mi ordenador se ha roto."], "Corrige la frase."),
      { type: "fill-blank", prompt: "¿Cómo se dicen en español las palabras en negrita?", sentence: "Esta mañana ___ con el pie izquierdo.", answer: "me he levantado", en: "This morning I [have gotten up] on the wrong side of the bed.", explanation: "Levantarse en el día de hoy: me he levantado, con «me» delante de he." },
      { type: "fill-blank", prompt: "¿Cómo se dicen en español las palabras en negrita?", sentence: "En el trabajo nadie me ___ los buenos días.", answer: "ha dado", en: "At work nobody [has said] good morning to me.", altAnswers: ["ha dicho"], explanation: "«Dar los buenos días» = to say good morning (también «decir buenos días»); nadie (singular) → ha dado." },
      { type: "fill-blank", prompt: "¿Cómo se dicen en español las palabras en negrita?", sentence: "A mediodía ___ el arroz.", answer: "he quemado", en: "At noon I [have burned] the rice.", explanation: "Quemar → quemado, regular; hoy → pretérito perfecto." },
      { type: "fill-blank", prompt: "¿Cómo se dicen en español las palabras en negrita?", sentence: "Al llegar a casa ___ que no hay agua caliente.", answer: "he descubierto", en: "On getting home, I['ve discovered] there's no hot water.", explanation: "Descubrir → descubierto (irregular, como cubrir); ocurre hoy, por eso pretérito perfecto." },
      toEs("Mi jefe me ha visto llegar tarde.", "Mis compañeros me han visto llegar tarde.", "Sujeto plural → han; el me sigue delante de haber y visto no cambia.", [], "Cambia el sujeto a «mis compañeros»."),
      toEs("I've written a long email and I've sent it to the wrong person.", "He escrito un correo largo y se lo he enviado a la persona equivocada.", "Escrito es irregular; el pronombre va delante de he.", ["He escrito un correo largo y lo he enviado a la persona equivocada.", "He escrito un correo largo y lo he mandado a la persona equivocada.", "He escrito un correo largo y se lo he mandado a la persona equivocada.", "He escrito un email largo y lo he enviado a la persona equivocada.", "He escrito un email largo y se lo he enviado a la persona equivocada."]),
      toEs("He me dormido en el autobús.", "Me he dormido en el autobús.", "Dormirse: el «me» va delante de he, nunca entre he y el participio.", ["Me he quedado dormido en el autobús.", "Me he quedado dormida en el autobús.", "Me he dormido en el bus."], "Corrige la frase."),
      mc("«¿Qué te ha pasado hoy?» — «___ las llaves dentro del coche.»", ["He dejado", "He dejé", "Dejé ayer", "He dejada"], 0, "Haber + participio invariable: he dejado. «He dejé» mezcla dos tiempos, «ayer» no responde a «hoy» y «dejada» hace concordar un participio que no cambia."),
      toEs("My son has fallen and has broken his arm.", "Mi hijo se ha caído y se ha roto el brazo.", "Se ha caído y se ha roto: el reflexivo delante de ha; romper → roto.", ["Mi hijo se ha caído y se ha roto un brazo."]),
      toEs("Hoy el restaurante ha cerrado y no hemos comido.", "Ayer el restaurante cerró y no comimos.", "Ayer es un periodo cerrado: los dos verbos pasan al indefinido (cerró, comimos).", ["Ayer cerró el restaurante y no comimos."], "Cambia «hoy» por «ayer» y ajusta los verbos."),
      wo("Al final del día me he puesto el pijama", "Me + he + puesto: ponerse → me he puesto.", "At the end of the day I've put on my pajamas"),
      wo("Hoy todo me ha salido mal", "Hoy + perfecto; el «me» delante de ha.", "Today everything has gone wrong for me"),
      toEs("On the way home I've seen an accident and I've called the police.", "De camino a casa he visto un accidente y he llamado a la policía.", "Ver → visto; todo ocurre hoy, por eso pretérito perfecto.", ["Camino a casa he visto un accidente y he llamado a la policía.", "De vuelta a casa he visto un accidente y he llamado a la policía."]),
      { type: "fill-blank", prompt: "¿Cómo se dicen en español las palabras en negrita?", sentence: "Mi vecina ___ la puerta del portal y no puedo entrar.", answer: "ha cerrado", en: "My neighbor [has closed] the building door and I can't get in.", explanation: "Ella → ha cerrado: acción de hoy con consecuencia en el presente." },
      toEs("In the end I've gone to bed early and I've decided that tomorrow will be better.", "Al final me he acostado temprano y he decidido que mañana será mejor.", "Me he acostado: reflexivo delante de he; he decidido para lo ocurrido hoy.", ["Al final me he ido a la cama temprano y he decidido que mañana será mejor.", "Al final me he acostado pronto y he decidido que mañana será mejor.", "Al final me he ido a la cama pronto y he decidido que mañana será mejor."]),
      { type: "speak", prompt: "Cuenta en voz alta tres cosas que te han salido mal hoy (usa al menos un participio irregular).", text: "Hoy me he dormido, he perdido el tren y se me ha roto el paraguas.", explanation: "Acciones de hoy → pretérito perfecto. Pronombres delante de haber (me he dormido, se me ha roto) y roto como participio irregular." },
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
        "Recuerda la regla: cambia el marcador, cambia el tiempo",
        [
          "Recuerda la regla: con un periodo cerrado (ayer, anoche, el lunes, la semana pasada) se usa el indefinido; con un periodo que llega hasta ahora (hoy, esta mañana, esta semana) se usa, en España, el pretérito perfecto. Al cambiar el marcador, cambia el verbo.",
          "En cada paso vigila dos cosas: el participio irregular (hice → he hecho, puse → he puesto) y el pronombre, que va delante de haber (lo vi → lo he visto).",
        ],
        [
          ["Ayer lo vi. → Hoy lo he visto.", "I saw him yesterday. → I've seen him today."],
          ["Esta semana me has escrito dos veces. → La semana pasada me escribiste una.", "This week you've written to me twice. → Last week you wrote once."],
        ],
        [
          fb("Cambia ayer → hoy.", "Ayer hice la compra. → Hoy ___ la compra.", "he hecho", "«Hoy» pide pretérito perfecto (en España), y hacer tiene participio irregular: he hecho."),
          toEs("Ayer me llamó mi hermana.", "Hoy me ha llamado mi hermana.", "Hoy → pretérito perfecto: ha llamado. El pronombre me queda delante de haber.", ["Hoy mi hermana me ha llamado."], "Cambia «ayer» por «hoy»."),
        ]
      ),
    ],
    [
      fb("Cambia ayer → hoy.", "Ayer me escribió. → Hoy me ___.", "ha escrito", "Con «hoy» se usa el pretérito perfecto; escribir → escrito: me ha escrito."),
      fb("Cambia ayer → hoy.", "Ayer lo pusimos aquí. → Hoy lo ___ aquí.", "hemos puesto", "Con «hoy», pretérito perfecto; poner tiene participio irregular: hemos puesto."),
      fb("Cambia ayer → hoy.", "Ayer se rompió. → Hoy se ___.", "ha roto", "Con «hoy», pretérito perfecto; romper → roto: se ha roto."),
      fb("Cambia hoy → ayer.", "Hoy has vuelto tarde. → Ayer ___ tarde.", "volviste", "«Ayer» es un tiempo terminado y pide el pretérito indefinido: volviste."),
      fb("Cambia hoy → ayer.", "Hoy me han dicho la verdad. → Ayer me ___ la verdad.", "dijeron", "Con «ayer», indefinido; decir es irregular (dij-) y en ellos termina en -eron, sin i: dijeron."),
      fb("Cambia hoy → ayer.", "Hoy hemos visto a Ana. → Ayer ___ a Ana.", "vimos", "«Ayer» es un tiempo terminado y pide el pretérito indefinido: vimos."),
      mc(
        "«Esta mañana ___ a mi madre.» (llamar, yo — España)",
        ["he llamado", "llamé ayer", "llamaba", "llamo"],
        0,
        "«Esta mañana» forma parte de hoy, un periodo no terminado: en España se usa el pretérito perfecto, he llamado. «Llamé ayer» contradice «esta mañana», «llamaba» describe hábitos y «llamo» es presente."
      ),
      toEs("Today I've spoken with him twice.", "Hoy he hablado con él dos veces.", "«Hoy» incluye el presente: pretérito perfecto, he hablado.", ["He hablado con él dos veces hoy."]),
      { type: "fill-blank", prompt: "¿Cómo se dicen en español las palabras en negrita?", sentence: "Ayer abrí la tienda a las nueve. → Hoy la ___ a las diez.", answer: "he abierto", en: "Yesterday I opened the shop at nine. → Today I [have opened] it at ten.", explanation: "Hoy → pretérito perfecto; abrir → abierto." },
      { type: "fill-blank", prompt: "¿Cómo se dicen en español las palabras en negrita?", sentence: "Ayer nos devolvieron el dinero. → Hoy nos ___ las llaves.", answer: "han devuelto", en: "Yesterday they gave us back the money. → Today they [have returned] the keys to us.", explanation: "Devolvieron → han devuelto; el «nos» sigue delante." },
      { type: "fill-blank", prompt: "¿Cómo se dicen en español las palabras en negrita?", sentence: "La semana pasada no hice deporte. → Esta semana tampoco ___ deporte.", answer: "he hecho", en: "Last week I didn't do any sports. → This week I [haven't done] any sports either.", explanation: "Esta semana → he hecho; «tampoco» ya lleva la negación, así que no se añade «no»: esta semana tampoco he hecho deporte." },
      { type: "fill-blank", prompt: "¿Cómo se dicen en español las palabras en negrita?", sentence: "Hoy me he puesto la chaqueta azul. → Ayer me ___ la verde.", answer: "puse", en: "Today I've put on the blue jacket. → Yesterday I [put on] the green one.", explanation: "Ayer → indefinido: me puse." },
      { type: "fill-blank", prompt: "¿Cómo se dicen en español las palabras en negrita?", sentence: "Este mes hemos escrito dos artículos. → El mes pasado ___ cinco.", answer: "escribimos", en: "This month we've written two articles. → Last month we [wrote] five.", explanation: "El mes pasado → indefinido: escribimos." },
      toEs("Yesterday I saw her at the market; today I've seen her at the gym.", "Ayer la vi en el mercado; hoy la he visto en el gimnasio.", "Ayer → la vi; hoy → la he visto, con el pronombre delante de he.", ["Ayer la vi en el mercado y hoy la he visto en el gimnasio."]),
      toEs("Ayer me dijeron que no.", "Hoy me han dicho que no.", "Dijeron → han dicho (decir → dicho, irregular); el «me» sigue delante.", [], "Cambia «ayer» por «hoy»."),
      toEs("Hoy los niños han volvido al colegio.", "Hoy los niños han vuelto al colegio.", "Volver tiene participio irregular: vuelto. «Volvido» no existe.", ["Hoy los niños han vuelto a la escuela.", "Los niños han vuelto al colegio hoy."], "Corrige la frase."),
      toEs("On Monday the elevator broke, and this morning it has broken again.", "El lunes se rompió el ascensor y esta mañana se ha roto otra vez.", "El lunes → se rompió; esta mañana → se ha roto.", ["El lunes se rompió el ascensor y esta mañana se ha vuelto a romper.", "El lunes el ascensor se rompió y esta mañana se ha roto otra vez.", "El lunes el ascensor se rompió y esta mañana se ha vuelto a romper.", "El lunes se rompió el ascensor y esta mañana se ha roto de nuevo."]),
      toEs("La semana pasada pusimos el árbol de Navidad.", "Esta semana hemos puesto el árbol de Navidad.", "Esta semana sigue abierta → pretérito perfecto; poner → puesto.", ["Hemos puesto el árbol de Navidad esta semana."], "Cambia «la semana pasada» por «esta semana»."),
      mc("Ayer la abriste. → Hoy ___.", ["la has abierto", "has la abierto", "la abriste hoy", "la has abrido"], 0, "Hoy → perfecto, con el pronombre delante de has y el participio irregular abierto. «Has la» separa el bloque y «abrido» no existe."),
      mc("Hoy lo hemos hecho. → Ayer ___.", ["lo hicimos", "lo hemos hecho", "hicimos lo", "lo hacemos"], 0, "Ayer → indefinido: lo hicimos, con el pronombre delante del verbo conjugado. «Lo hemos hecho» no cambia el tiempo y «lo hacemos» es presente."),
      wo("Esta mañana se lo he dicho a mi madre", "Esta mañana → perfecto; se lo delante de he.", "This morning I've told my mother about it"),
      wo("Anoche lo vimos en la tele", "Anoche → indefinido: lo vimos.", "Last night we saw it on TV"),
      toEs("Ayer mi hermano ha roto un vaso.", "Ayer mi hermano rompió un vaso.", "Ayer es un periodo cerrado: indefinido (rompió), no pretérito perfecto.", [], "Corrige la frase."),
      toEs("Last year I didn't see my cousins, but this year I've seen them three times.", "El año pasado no vi a mis primos, pero este año los he visto tres veces.", "El año pasado → vi; este año → los he visto.", ["El año pasado no vi a mis primas, pero este año las he visto tres veces."]),
      toEs("Yesterday you (tú) put the keys in the drawer; where have you put them today?", "Ayer pusiste las llaves en el cajón; ¿dónde las has puesto hoy?", "Pusiste (ayer) frente a las has puesto (hoy).", ["Ayer pusiste las llaves en el cajón. ¿Dónde las has puesto hoy?", "Ayer pusiste las llaves en el cajón; ¿hoy dónde las has puesto?"]),
      toEs("Hoy el médico me ha dicho la verdad.", "La semana pasada el médico me dijo la verdad.", "La semana pasada está cerrada → indefinido: me dijo (decir → dij-, irregular).", ["El médico me dijo la verdad la semana pasada."], "Cambia «hoy» por «la semana pasada»."),
      { type: "speak", prompt: "Ayer te levantaste a las siete. ¿Y hoy? Responde en voz alta: hoy, a las nueve (España).", text: "Hoy me he levantado a las nueve.", explanation: "Hoy → pretérito perfecto, con el reflexivo delante de he: me he levantado." },
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
        [
          "Recuerda la regla: el pluscuamperfecto se forma con el imperfecto de haber (había, habías, había, habíamos, habíais, habían) + participio: había comido, habías salido, habían visto. Solo haber cambia con la persona; el participio se queda siempre igual.",
          "Se usa para algo que ya había pasado antes de otro momento pasado: Cuando llegué, la película ya había empezado. Si dijeras «empezó», entenderíamos que empezó después de que llegaras.",
        ],
        [
          ["Cuando llegué, todos ya se habían ido.", "When I arrived, everyone had already left."],
          ["Nunca había visto tanta nieve.", "I had never seen so much snow."],
        ],
        [
          fb("Completa.", "Cuando llegamos a la estación, el último autobús ya ___. (salir)", "había salido", "El autobús salió antes de que llegáramos: había + participio, había salido. «Salió» diría que salió después."),
        ]
      ),
    ],
    [
      fb("Mismo marco.", "Cuando llegué, tú ya ___. (cenar)", "habías cenado", "Haber concuerda con tú (habías) y el participio no cambia: cenado."),
      fb("Mismo marco.", "Cuando llegué, mi hermana ya ___. (irse)", "se había ido", "Con un verbo reflexivo, el pronombre va delante de haber: se había ido, no «había ídose»."),
      fb("Mismo marco.", "Cuando llegaste, nosotros ya ___ la mesa. (poner)", "habíamos puesto", "Habíamos + participio irregular de poner: puesto, no «ponido»."),
      fb("Mismo marco.", "Cuando llegué, vosotros ya ___ todo. (hacer)", "habíais hecho", "Habíais + participio irregular de hacer: hecho, no «hacido»."),
      fb("Mismo marco.", "Cuando llegué, los invitados ya ___. (llegar)", "habían llegado", "Los invitados = ellos → habían; llegaron antes que yo, por eso pluscuamperfecto."),
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
      toEs("I had never eaten sushi before.", "Nunca había comido sushi antes.", "«Had never» = nunca había + participio: nunca había comido.", ["No había comido sushi nunca antes."]),
      wo("Cuando encendí la tele, el partido ya había terminado.", "El partido terminó antes de encender la tele: pluscuamperfecto (había terminado); el momento de referencia (encendí) va en indefinido.", "When I turned on the TV, the match had already ended."),
    ]
  ),
  L(
    "past-perfect-1",
    "b1d-linea-tiempo-antes-despues",
    "Línea del tiempo: ¿qué pasó primero?",
    "Dos acciones pasadas: la primera en pluscuamperfecto, la segunda en indefinido.",
    "7 min",
    [
      sec(
        "La idea: el pasado del pasado",
        [
          "Recuerda la regla: cuando cuentas dos acciones pasadas, la que ocurrió PRIMERO va en pluscuamperfecto (había, habías, había, habíamos, habíais, habían + participio) y la que ocurrió DESPUÉS va en indefinido.",
          "¿Por qué? El indefinido marca el momento de la historia («llegué»); el pluscuamperfecto mira hacia atrás desde ese momento, igual que el pretérito perfecto mira hacia atrás desde hoy. Ya subraya que la primera acción estaba terminada. El orden de las palabras no decide nada: decide la cronología real.",
        ],
        [
          ["Cuando llegué, Ana ya había cerrado la tienda.", "When I arrived, Ana had already closed the shop. (primero cerró, después llegué)"],
          ["Ana ya había cerrado la tienda cuando llegué.", "Ana had already closed the shop when I arrived. (la frase cambia de orden, la cronología no)"],
          ["Cuando llegué, Ana cerró la tienda.", "When I arrived, Ana closed the shop. (dos indefinidos: cerró DESPUÉS de verme llegar)"],
          ["Me dijeron que el museo había abierto una sala nueva.", "They told me the museum had opened a new room. (abrir la sala fue antes de decírmelo)"],
        ],
        [
          mc(
            "1) Terminé los deberes. 2) Mi madre volvió. →",
            ["Cuando mi madre volvió, yo ya había terminado los deberes.", "Cuando mi madre había vuelto, yo terminé.", "Cuando mi madre volvía, terminé.", "Mi madre volvió cuando terminaba."],
            0,
            "La acción que pasó primero (terminar) va en pluscuamperfecto; la segunda, que sirve de referencia, en indefinido. La segunda opción pone el pluscuamperfecto en la acción posterior, y las otras usan el imperfecto, que describe un fondo, no un orden."
          ),
          fb("Completa con el pasado correcto.", "Cuando encendí la tele, el partido ya ___. (terminar)", "había terminado", "El partido terminó antes de encender la tele: la acción anterior va en pluscuamperfecto. «Terminó» diría que acabó justo después de encenderla."),
        ]
      ),
      sec(
        "Dos indefinidos o un pluscuamperfecto: cambia el significado",
        "Con dos indefinidos, las acciones van en el orden en que se cuentan: «Cuando llegué, se fue» (me vio y se fue). Con el pluscuamperfecto, la acción ya estaba hecha: «Cuando llegué, se había ido» (no lo vi).",
        [
          ["Cuando sonó el despertador, me levanté.", "When the alarm went off, I got up. (primero el despertador, luego yo)"],
          ["Cuando sonó el despertador, ya me había levantado.", "When the alarm went off, I had already got up. (me levanté antes)"],
        ],
        [
          mc(
            "«Cuando entré en la cocina, mi hermano ya había fregado los platos.» ¿Qué pasó?",
            ["Mi hermano fregó los platos antes de que yo entrara.", "Mi hermano empezó a fregar cuando me vio.", "Fregamos los platos juntos.", "Mi hermano iba a fregar los platos más tarde."],
            0,
            "Había fregado es pluscuamperfecto: la acción estaba terminada antes del momento de referencia (entré). Para decir que empezó después haría falta un indefinido: «fregó los platos»."
          ),
        ]
      ),
    ],
    [
      fb("Completa con el pasado correcto.", "1) El concierto empezó. 2) Entramos. → Cuando entramos, el concierto ya ___.", "había empezado", "El concierto empezó antes de que entráramos: la acción anterior va en pluscuamperfecto, había empezado."),
      fb("Completa con el pasado correcto.", "1) Vendieron las entradas. 2) Fui a la taquilla. → Cuando fui, ya ___ las entradas.", "habían vendido", "Las vendieron antes de que yo fuera: pluscuamperfecto, y en plural (habían) porque el sujeto es «ellos»."),
      fb("Completa con el pasado correcto.", "1) Leí el libro. 2) Vi la película. → Cuando vi la película, ya ___ el libro.", "había leído", "Lo primero (leer el libro) va en pluscuamperfecto: había leído. El participio leído lleva tilde para romper el diptongo."),
      fb("Completa con el pasado correcto.", "1) Mi hermano se casó. 2) Yo volví del extranjero. → Cuando volví, mi hermano ya se ___.", "había casado", "Lo que pasó antes va en pluscuamperfecto, con el pronombre reflexivo delante de había: se había casado."),
      fb("Completa con el pasado correcto.", "Cuando la policía ___, los ladrones ya habían roto la ventana. (llegar)", "llegó", "Llegar es la acción posterior, el punto de referencia: va en indefinido. «Había llegado» diría que la policía llegó antes que los ladrones."),
      mc(
        "«Llegué tarde porque ___ el autobús.» (perder, yo — antes)",
        ["había perdido", "perdía", "he perdido", "perderé"],
        0,
        "Perder el autobús pasó antes de llegar tarde, y es su causa: pluscuamperfecto, había perdido. «Perdía» describe un hábito, «he perdido» se liga al presente y «perderé» es futuro."
      ),
      toEs("When we arrived, the shop had already closed.", "Cuando llegamos, la tienda ya había cerrado.", "Cerró antes de que llegáramos: indefinido para la referencia (llegamos) y pluscuamperfecto para lo anterior (había cerrado).", ["La tienda ya había cerrado cuando llegamos."]),
      toEs(
        "Cuando llegué a la estación, el tren salió.",
        "Cuando llegué a la estación, el tren ya había salido.",
        "Para decir que el tren salió ANTES de que llegaras, la acción anterior pasa al pluscuamperfecto (había salido). Con dos indefinidos parece que el tren esperó a verte llegar.",
        ["Cuando llegué a la estación, el tren había salido.", "El tren ya había salido cuando llegué a la estación."],
        "Cambia la frase: el tren salió antes de que llegaras."
      ),
      toEs(
        "Cuando había llegado a casa, mis hijos ya cenaron.",
        "Cuando llegué a casa, mis hijos ya habían cenado.",
        "Los tiempos están al revés: llegar a casa es el momento de referencia (indefinido, llegué) y cenar, lo que ya estaba hecho (pluscuamperfecto, habían cenado).",
        ["Mis hijos ya habían cenado cuando llegué a casa."],
        "Corrige la frase."
      ),
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
        "La idea: tres pasados, tres trabajos",
        [
          "Recuerda la regla: cada pasado responde a una pregunta distinta. ¿Qué pasó? → indefinido (llegué: acción completa, avanza la historia). ¿Cómo era, qué pasaba alrededor, qué se hacía siempre? → imperfecto (llegaba: fondo, descripción, hábito). ¿Qué había pasado ya antes? → pluscuamperfecto (había llegado: acción anterior a otro momento pasado).",
          "Piensa en una película: el indefinido son las escenas, el imperfecto es el decorado y el pluscuamperfecto es un salto atrás (flashback).",
        ],
        [
          ["Llovía, había dormido poco y llegué tarde.", "It was raining, I had slept little, and I arrived late. (decorado + salto atrás + escena)"],
          ["De pequeña siempre llegaba la primera a clase.", "As a little girl I always got to class first. (hábito: imperfecto)"],
          ["Cuando empezó la reunión, el jefe ya había llegado.", "When the meeting started, the boss had already arrived. (anterior a empezó)"],
          ["El lunes llegó un paquete que yo no había pedido.", "On Monday a parcel arrived that I hadn't ordered. (llegó = hecho; había pedido = antes)"],
        ],
        [
          mc(
            "«Estaba cansado porque no ___ bien.» (dormir — antes)",
            ["había dormido", "duermo", "dormía", "he dormido"],
            0,
            "No dormir bien ocurrió antes de estar cansado: pluscuamperfecto, había dormido. «Duermo» es presente, «dormía» describiría un hábito sin marcar que fue antes y «he dormido» se liga al presente."
          ),
          fb("Elige el pasado.", "Los domingos mi tío nos ___ al parque. (llevar — costumbre)", "llevaba", "«Los domingos» indica costumbre: imperfecto, llevaba. «Llevó» contaría un solo domingo."),
        ]
      ),
    ],
    [
      fb("Elige el pasado.", "De niño ___ en el campo. (vivir — hábito)", "vivía", "«De niño» describe una etapa: imperfecto (vivía). «Viví» presentaría la etapa como un hecho cerrado y no encaja con la descripción."),
      fb("Elige el pasado.", "En 2010 ___ a la ciudad. (mudarse, nosotros — acción)", "nos mudamos", "Una fecha concreta y una acción completa: indefinido, nos mudamos. «Nos mudábamos» sonaría a costumbre."),
      fb("Elige el pasado.", "Antes de 2010 nunca ___ en una ciudad. (vivir, nosotros — anterior)", "habíamos vivido", "«Antes de 2010» mira atrás desde otro pasado: pluscuamperfecto, habíamos vivido."),
      fb("Elige el pasado.", "Cuando conocí a Pablo, él ya ___ tres idiomas. (aprender)", "había aprendido", "Aprender los idiomas fue antes de conocerlo (conocí): pluscuamperfecto, había aprendido. Ya es la pista."),
      fb("Elige el pasado.", "Mientras ___, sonó el teléfono. (cocinar, yo)", "cocinaba", "Mientras introduce la acción de fondo que estaba en curso: imperfecto, cocinaba. La interrupción (sonó) va en indefinido."),
      fb("Elige el pasado.", "Al final ___ la cena y nos sentamos. (terminar, nosotros)", "terminamos", "Al final marca un paso de la historia, una acción completa: indefinido, terminamos, igual que nos sentamos."),
      ms(
        "¿Qué frases usan bien el pluscuamperfecto?",
        ["Cuando llegué, ya habían cenado.", "Nunca había visto el mar hasta ese verano.", "Ayer había ido al cine y volví a las diez.", "Me dijo que había perdido las llaves."],
        [0, 1, 3],
        "El pluscuamperfecto necesita otro momento pasado posterior: llegué, ese verano, me dijo. En «Ayer había ido al cine y volví a las diez» no hay nada posterior a ir al cine, así que lo normal es «Ayer fui al cine»."
      ),
      toEs("I was hungry because I hadn't eaten.", "Tenía hambre porque no había comido.", "El estado va en imperfecto (tenía) y su causa anterior en pluscuamperfecto (no había comido).", []),
      toEs(
        "Ayer comí en casa de mi abuela.",
        "Antes, siempre comía en casa de mi abuela.",
        "Al convertir un hecho en costumbre, el indefinido (comí) pasa a imperfecto (comía); siempre y antes son marcadores de hábito.",
        ["Antes siempre comía en casa de mi abuela.", "Antes, comía siempre en casa de mi abuela."],
        "Transforma el hecho en costumbre: empieza con «Antes, siempre...»."
      ),
      toEs(
        "Cuando llegamos al cine, la película empezaba hace diez minutos.",
        "Cuando llegamos al cine, la película había empezado hacía diez minutos.",
        "La película empezó antes de que llegarais: pluscuamperfecto (había empezado). Y en una historia pasada se dice hacía diez minutos, no hace.",
        ["Cuando llegamos al cine, la película había empezado hacía diez minutos.", "La película había empezado hacía diez minutos cuando llegamos al cine.", "Cuando llegamos al cine, la película ya había empezado hacía diez minutos."],
        "Corrige la frase."
      ),
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
        [
          "Recuerda la regla: el momento desde el que se cuenta va en indefinido (llegamos) y todo lo que ya había pasado antes de ese momento, en pluscuamperfecto (había terminado). Por eso este cuento tiene tantos había: el narrador llega y descubre lo que se ha perdido.",
          "«Cuando por fin llegamos a la iglesia, la ceremonia ya había terminado. Los novios se habían ido al restaurante y los invitados habían salido. Habíamos salido de casa a tiempo, pero el coche se había estropeado en la autopista.»",
        ],
        [
          ["La ceremonia ya había terminado.", "The ceremony had already ended. (antes de llegamos)"],
          ["Mis tíos ya se habían sentado a la mesa.", "My aunt and uncle had already sat down at the table. (el pronombre va delante de habían)"],
        ],
        [
          mc(
            "¿Por qué llegaron tarde?",
            ["El coche se había estropeado.", "Habían salido tarde.", "Se habían perdido.", "Se habían dormido."],
            0,
            "El texto explica que llegaron tarde porque el coche se había estropeado. No dice que hubieran salido tarde, que se hubieran perdido ni que se hubieran dormido."
          ),
          mc(
            "¿Qué pasó primero, según el cuento?",
            ["El coche se estropeó.", "Llegaron a la iglesia.", "Los invitados salieron."],
            0,
            "Salieron de casa, el coche se estropeó y mientras tanto la ceremonia terminó y los invitados salieron; por último, llegaron (indefinido, el momento de referencia). Todo lo que va en pluscuamperfecto es anterior a llegamos."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "La ceremonia ya ___. (terminar)", "había terminado", "Terminó antes de que llegaran: pluscuamperfecto, había terminado."),
      fb("Completa.", "Los novios se ___ al restaurante. (ir)", "habían ido", "Irse es pronominal: el pronombre se va delante del auxiliar (se habían ido), y el participio de ir es ido."),
      fb("Completa.", "Los invitados ___ de la iglesia. (salir)", "habían salido", "Salieron antes de que llegáramos: pluscuamperfecto en plural, habían salido."),
      fb("Completa.", "Nosotros ___ de casa a tiempo. (salir)", "habíamos salido", "Salir de casa es lo más antiguo del cuento: pluscuamperfecto de nosotros, habíamos salido."),
      fb("Completa.", "El coche se ___ en la autopista. (estropear)", "había estropeado", "La avería es anterior a la llegada y explica el retraso: pluscuamperfecto, se había estropeado."),
      fb("Completa.", "Cuando ___ al restaurante, todos nos aplaudieron. (llegar, nosotros)", "llegamos", "Llegar al restaurante es un paso nuevo de la historia: indefinido, llegamos. «Habíamos llegado» la pondría antes de los aplausos sin motivo."),
      toEs("We had left early, but there was a lot of traffic.", "Habíamos salido temprano, pero había mucho tráfico.", "La acción anterior va en pluscuamperfecto (habíamos salido); la situación de fondo, en imperfecto (había).", ["Habíamos salido pronto, pero había mucho tráfico."]),
      mc(
        "Un invitado te pregunta: «¿Por qué no estabais en la iglesia?» ¿Qué respondes?",
        ["Porque el coche se nos había estropeado en la autopista.", "Porque el coche se nos estropea en la autopista.", "Porque el coche se nos estropeará en la autopista.", "Porque el coche se nos ha estropeado mañana."],
        0,
        "Explicas una causa anterior a no estar en la iglesia: pluscuamperfecto (se nos había estropeado). El presente y el futuro no sirven para algo que ya pasó, y «ha estropeado mañana» es contradictorio."
      ),
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
        [
          "Recuerda la regla: los dos tiempos miran hacia atrás, pero desde sitios distintos. El pretérito perfecto (he hecho) mira hacia atrás desde AHORA: hoy, esta semana, nunca hasta hoy. El pluscuamperfecto (había hecho) mira hacia atrás desde un momento PASADO: cuando llegué, hasta 2020, antes de aquel viaje.",
          "Por eso la pregunta clave es: ¿hasta cuándo? Si la respuesta es «hasta ahora», he; si es «hasta aquel momento», había.",
        ],
        [
          ["Ya he terminado. / Cuando llamaste, ya había terminado.", "I've already finished. / When you called, I had already finished."],
          ["Nunca he estado en Roma. / Hasta 2020, nunca había estado en Roma.", "I've never been to Rome. / Until 2020, I had never been to Rome."],
          ["Hoy han llegado tus libros. / El lunes vi que habían llegado tus libros.", "Your books arrived today. / On Monday I saw that your books had arrived."],
        ],
        [
          mc(
            "«Hasta ese día, nunca ___ en avión.»",
            ["había volado", "he volado", "volaba", "volaré"],
            0,
            "«Hasta ese día» es un punto del pasado: lo anterior a él va en pluscuamperfecto, había volado. «He volado» se usaría con «hasta hoy», «volaba» es imperfecto y «volaré» futuro."
          ),
          fb("He o había.", "Esta tarde ___ a mi abuela. (llamar, yo)", "he llamado", "Esta tarde forma parte de hoy, así que miramos desde ahora: pretérito perfecto, he llamado. «Había llamado» necesitaría otro momento pasado."),
        ]
      ),
    ],
    [
      mc(
        "«Hasta hoy, nunca ___ en avión.»",
        ["he volado", "había volado", "volé ayer", "volaba"],
        0,
        "«Hasta hoy» llega al presente, así que se usa el pretérito perfecto: he volado. «Había volado» sería con «hasta ese día», «volé ayer» contradice «nunca» y «volaba» describe hábitos pasados."
      ),
      fb("He o había.", "Este año ___ mucho. (leer, yo)", "he leído", "Este año todavía no ha terminado: miramos desde ahora, pretérito perfecto, he leído."),
      fb("He o había.", "Antes de la universidad, nunca ___ tanto. (leer, yo)", "había leído", "Antes de la universidad es un momento pasado: miramos atrás desde allí, pluscuamperfecto, había leído."),
      fb("He o había.", "¿___ alguna vez en Chile? (estar, tú)", "Has estado", "Alguna vez pregunta por la experiencia de toda tu vida hasta ahora: pretérito perfecto, has estado."),
      fb("He o había.", "Cuando me mudé, ya ___ el piso. (pintar, ellos)", "habían pintado", "La referencia es me mudé, un momento pasado; pintar fue antes: pluscuamperfecto, habían pintado."),
      fb("He o había.", "Todavía no ___ el correo. (leer, yo)", "he leído", "Sin otro momento pasado, todavía no llega hasta ahora: pretérito perfecto, he leído."),
      toEs("I had already seen it when you told me.", "Ya lo había visto cuando me lo dijiste.", "Verlo fue antes de que me lo dijeras: pluscuamperfecto + indefinido.", ["Cuando me lo dijiste, ya lo había visto."]),
      toEs(
        "Este mes he visitado tres museos.",
        "Aquel mes había visitado tres museos.",
        "Al cambiar este mes (llega hasta ahora) por aquel mes (un periodo pasado), el punto de vista retrocede: he visitado → había visitado.",
        ["Aquel mes ya había visitado tres museos."],
        "Cambia «este mes» por «aquel mes» y adapta el verbo."
      ),
      toEs(
        "Cuando llegué al cine, la película ya ha empezado.",
        "Cuando llegué al cine, la película ya había empezado.",
        "La referencia es llegué, un momento pasado, así que lo anterior va en pluscuamperfecto: había empezado. El pretérito perfecto (ha empezado) mira desde ahora.",
        ["La película ya había empezado cuando llegué al cine."],
        "Corrige la frase."
      ),
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
        [
          "Recuerda la regla: para contar una primera vez hay dos moldes. 1) Nunca había + participio + hasta + momento: miras hacia atrás desde ese momento, así que pluscuamperfecto (Nunca había visto la nieve hasta los veinte años). 2) Fue la primera vez que + indefinido: cuentas el hecho mismo (Fue la primera vez que viajé solo).",
          "Si hablas de tu vida hasta hoy, no hay momento pasado de referencia: Nunca he visto la nieve (pretérito perfecto).",
        ],
        [
          ["Nunca había subido a un avión hasta los dieciocho.", "I had never been on a plane until I was eighteen. (hasta + momento pasado)"],
          ["Aquel día fue la primera vez que conduje en una autopista.", "That day was the first time I drove on a motorway. (el hecho: indefinido)"],
          ["Todavía no he probado el sushi.", "I still haven't tried sushi. (hasta hoy: he)"],
        ],
        [
          mc(
            "«Nunca ___ el mar hasta ese verano.» (ver, yo)",
            ["había visto", "he visto", "vi", "veía"],
            0,
            "«Hasta ese verano» es un punto del pasado: lo que no había pasado antes va en pluscuamperfecto, había visto. «He visto» se liga al presente, y «vi» o «veía» no marcan esa anterioridad."
          ),
          fb("Completa.", "Fue la primera vez que mi abuelo ___ un móvil. (usar)", "usó", "Tras fue la primera vez que se cuenta el hecho en indefinido: usó. «Había usado» contradiría que fuera la primera vez."),
        ]
      ),
    ],
    [
      toEs("I had never seen snow until I was twenty.", "Nunca había visto la nieve hasta los veinte años.", "«Had never… until» = nunca había + participio hasta…", ["No había visto la nieve hasta los veinte años."]),
      toEs("It was the first time I travelled alone.", "Fue la primera vez que viajé solo.", "«La primera vez que» + indefinido para un hecho concreto del pasado: viajé.", ["Fue la primera vez que viajé sola."]),
      toEs("Es la primera vez que cocino para tanta gente.", "Nunca había cocinado para tanta gente.", "Desde el pasado, «es la primera vez que» se convierte en nunca había + participio: nunca había cocinado.", ["Nunca antes había cocinado para tanta gente.", "No había cocinado nunca para tanta gente."], "Cambia la frase al pasado: empieza con «Nunca había...»."),
      toEs("Mis padres nunca había estado en el extranjero.", "Mis padres nunca habían estado en el extranjero.", "El auxiliar concuerda con el sujeto: mis padres = ellos → habían estado, no «había».", [], "Corrige la frase."),
      fb("Completa.", "Hasta ese día, nunca ___ en público. (hablar, yo)", "había hablado", "Hasta ese día es un momento pasado: nunca + pluscuamperfecto, había hablado."),
      fb("Completa.", "Fue la primera vez que ___ en un escenario. (cantar, yo)", "canté", "Fue la primera vez que + indefinido para el hecho mismo: canté (no «había cantado»)."),
      wo("Antes de venir a España nunca había probado el gazpacho.", "«Had never» antes de un momento pasado (venir a España) = nunca había + participio: nunca había probado.", "Before coming to Spain I had never tried gazpacho."),
      { type: "speak", prompt: "Responde en voz alta: ¿Cuándo fue la primera vez que viajaste en avión? Usa «Nunca había... hasta...».", text: "Nunca había viajado en avión hasta los quince años.", explanation: "Nunca había + participio para lo que no había pasado y hasta + momento para el límite. Cualquier edad o momento vale: hasta que fui a la universidad, hasta 2015..." },
    ]
  ),
  L(
    "present-past-perfect-drill-3",
    "b1d-ronda-perfectos-mezcla",
    "Ronda rápida: he o había, sin pistas",
    "Huecos sin pistas: decide por el punto de referencia y escribe la forma completa con participio.",
    "6 min",
    [
      sec(
        "Recuerda la regla: ¿desde dónde miras hacia atrás?",
        [
          "Los dos tiempos se forman igual (haber + participio), pero miran desde puntos distintos. El pretérito perfecto (he, has, ha…) mira hacia atrás desde AHORA: la acción cae dentro de un periodo que todavía no ha terminado (hoy, este mes, alguna vez, todavía no). El pluscuamperfecto (había, habías, había…) mira hacia atrás desde un momento PASADO: la acción ocurrió antes de otra acción ya pasada (cuando llegué…, me dijo que…).",
          "Por eso la pregunta clave es: ¿cuál es el punto de referencia, el presente u otro momento pasado? Después viene el participio: -ado / -ido, o una de las formas irregulares (hecho, visto, puesto, roto, muerto, abierto, escrito, vuelto, dicho, resuelto).",
        ],
        [
          ["Este mes he ido dos veces al cine.", "This month I've been to the cinema twice. (este mes no ha terminado → he ido)"],
          ["Cuando llegué al cine, la película ya había empezado.", "When I got to the cinema, the film had already started. (antes de «llegué» → había empezado)"],
          ["Todavía no hemos escrito el informe.", "We haven't written the report yet. (todavía no → perfecto; escribir → escrito)"],
          ["Me dijo que nunca había roto nada.", "He told me he had never broken anything. (antes de «me dijo»; romper → roto)"],
        ],
        [
          fb("Rápido.", "Esta semana ___ tres libros. (leer, yo)", "he leído", "«Esta semana» es un periodo que llega hasta ahora: pretérito perfecto, he leído. «Había leído» necesitaría otro momento pasado como referencia."),
          mc(
            "«Cuando abrí la nevera, alguien ya se ___ mi yogur.» (comer)",
            ["había comido", "ha comido", "comía", "come"],
            0,
            "El punto de referencia es pasado (abrí la nevera) y comerse el yogur ocurrió antes: pluscuamperfecto, se había comido. «Ha comido» mira desde ahora, «comía» describe un hábito y «come» es presente."
          ),
        ]
      ),
    ],
    [
      fb("Rápido.", "Cuando llegué, ya ___ la cena. (hacer, ellos)", "habían hecho", "Hicieron la cena antes de «llegué», un momento pasado: pluscuamperfecto, habían hecho (hacer → hecho)."),
      fb("Rápido.", "¿___ tu móvil? (encontrar, tú)", "Has encontrado", "La pregunta mira desde ahora (¿ya lo tienes?): pretérito perfecto, has encontrado."),
      fb("Rápido.", "No sabía que ___ tu abuelo. (morir)", "había muerto", "Murió antes de «no sabía», que ya es pasado: pluscuamperfecto. Morir tiene participio irregular: muerto, no «morido»."),
      fb("Rápido.", "Todavía no ___ la carta. (abrir, nosotros)", "hemos abierto", "«Todavía no» llega hasta ahora: perfecto. Abrir tiene participio irregular: abierto, no «abrido»."),
      fb("Rápido.", "Me dijo que ya ___ el problema. (resolver)", "había resuelto", "Lo resolvió antes de «me dijo»: pluscuamperfecto. Resolver → resuelto (como volver → vuelto)."),
      fb("Rápido.", "Este verano ___ muchísimo calor. (hacer)", "ha hecho", "«Este verano» todavía no ha terminado: pretérito perfecto, ha hecho."),
      fb("Rápido.", "Ese verano ___ muchísimo calor. (hacer — indefinido)", "hizo", "«Ese verano» es un periodo terminado, sin conexión con ahora: indefinido, hizo. Compara con «este verano ha hecho»."),
      mc(
        "«¿___ alguna vez un Oscar a un actor español?» (dar, ellos)",
        ["Han dado", "Habían dado", "Dan", "Daban"],
        0,
        "«Alguna vez» pregunta por la experiencia hasta ahora: pretérito perfecto, ¿Han dado…? «Habían dado» se refiere a antes de otro pasado, «Dan» es presente y «Daban» es un hábito pasado."
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
        "Recuerda la regla: el marcador decide el pasado",
        [
          "Una noticia mezcla tres pasados, y cada uno responde a una pregunta distinta. ¿El periodo sigue abierto (hoy, esta semana, este año)? → pretérito perfecto: ha rescatado. ¿Es un tiempo cerrado (ayer, el martes, en 2019)? → indefinido: rescató. ¿Ocurrió antes de otro hecho pasado del relato (dos días antes, ya)? → pluscuamperfecto: había rescatado.",
          "Y en los tres tiempos compuestos el participio debe ser real: visto, puesto, hecho, roto, escrito… nunca «veído» o «ponido».",
        ],
        [
          ["Esta semana la policía ha detenido a tres personas.", "This week the police have arrested three people. (periodo abierto → perfecto)"],
          ["El lunes la policía detuvo a un sospechoso.", "On Monday the police arrested a suspect. (tiempo cerrado → indefinido)"],
          ["El sospechoso había escrito una carta a la víctima.", "The suspect had written a letter to the victim. (antes de la detención → pluscuamperfecto; escribir → escrito)"],
        ],
        [
          mc(
            "Elige la forma para una noticia de hoy: «Esta mañana un camión ___ en la autopista.» (volcar)",
            ["ha volcado", "había volcado", "volcaba", "ha volcao"],
            0,
            "«Esta mañana» forma parte de hoy, un periodo abierto: pretérito perfecto, ha volcado (en América también «volcó»). «Había volcado» necesita otro hecho pasado posterior, «volcaba» describe y «volcao» es una pronunciación relajada que no se escribe."
          ),
        ]
      ),
      sec(
        "La noticia con errores",
        "«Ayer los bomberos ✗ han rescatado a un gato. El animal ✗ ha subido a un árbol dos días antes y no ✗ ha comido nada en dos días. Los vecinos ✗ han llamado varias veces sin éxito. Nadie ✗ había veído nunca un rescate así. Este año los bomberos ✗ habían rescatado ya a cuarenta animales.» Cada ✗ marca un verbo mal elegido o mal formado. Corrígelos con la regla.",
        [],
        [
          fb("Corrige.", "Ayer los bomberos ___ a un gato. (la noticia dice: han rescatado)", "rescataron", "«Ayer» es un tiempo terminado y pide el indefinido: rescataron, no «han rescatado»."),
        ]
      ),
    ],
    [
      { ...fb("Corrige.", "El animal ___ a un árbol dos días antes. (la noticia dice: ha subido)", "había subido", "Subió al árbol antes del rescate (otro pasado): pluscuamperfecto, había subido. «Ha subido» no encaja en un relato pasado; «subió» también sería correcto con «dos días antes»."), altAnswers: ["subió"] },
      { ...fb("Corrige.", "Los vecinos ___ varias veces sin éxito. (la noticia dice: han llamado)", "habían llamado", "Las llamadas fueron antes del rescate: pluscuamperfecto, habían llamado. (El indefinido «llamaron» también es correcto.)"), altAnswers: ["llamaron"] },
      fb("Corrige.", "Este año los bomberos ___ a cuarenta animales. (la noticia dice: habían rescatado)", "han rescatado", "«Este año» es un periodo no terminado: pretérito perfecto, han rescatado."),
      { ...fb("Corrige.", "El gato no ___ nada en dos días. (la noticia dice: ha comido)", "había comido", "No comer fue anterior al rescate: pluscuamperfecto, había comido. (El indefinido «comió» también es correcto.)"), altAnswers: ["comió"] },
      fb("Corrige.", "Nadie ___ nunca un rescate así. (la noticia dice: había veído)", "había visto", "Ver tiene participio irregular: visto; «veído» no existe."),
      mc(
        "¿Cuál está bien?",
        ["Cuando llegaron los bomberos, el gato ya se había bajado solo.", "Cuando llegaron los bomberos, el gato ya se ha bajado solo.", "Cuando han llegado, el gato se bajaba.", "Cuando llegaron, el gato ya se había bajando."],
        0,
        "El gato bajó antes de que llegaran los bomberos: pluscuamperfecto, se había bajado. «Se ha bajado» se liga al presente, «se bajaba» describe un proceso y «había bajando» usa un gerundio en lugar del participio."
      ),
      toEs("The firefighters had tried twice before.", "Los bomberos lo habían intentado dos veces antes.", "«Had tried» = habían intentado; el objeto «lo» se añade en español.", ["Los bomberos lo habían intentado antes dos veces."]),
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
        "Recuerda la regla: la acción no cambia, cambia el marco",
        [
          "Una misma acción puede ir en tres tiempos según el marco temporal que la rodea. Con un periodo abierto que llega hasta ahora (hoy, esta semana) se usa el pretérito perfecto: he comprado. Con un tiempo cerrado (ayer, el lunes) se usa el indefinido: compré. Si otra acción pasada sirve de referencia (cuando llegaste…) y la nuestra ocurrió antes, se usa el pluscuamperfecto: ya había comprado.",
          "Al cambiar de marco cambia solo el verbo; los pronombres siguen delante del verbo conjugado (lo he visto → lo vi → lo había visto).",
        ],
        [
          ["Hoy he comprado pan.", "I've bought bread today. (hoy = periodo abierto)"],
          ["El lunes compramos fruta.", "On Monday we bought fruit. (el lunes = tiempo cerrado)"],
          ["Cuando llegaste, ya lo habían comprado todo.", "When you arrived, they had already bought everything. (antes de «llegaste»)"],
        ],
        [
          fb("Cambia el marco: hoy → ayer.", "Hoy he escrito a Ana. → Ayer ___ a Ana.", "escribí", "Con «ayer», tiempo cerrado, el perfecto pasa a indefinido: escribí."),
          mc(
            "«Hoy me he duchado con agua fría.» Con el marco «Cuando se fue la luz, ya…», la frase queda:",
            ["Cuando se fue la luz, ya me había duchado.", "Cuando se fue la luz, ya me he duchado.", "Cuando se fue la luz, ya me duché.", "Cuando se fue la luz, ya había me duchado."],
            0,
            "Ducharse ocurrió antes de que se fuera la luz, un momento pasado: pluscuamperfecto, me había duchado. «Me he duchado» mira desde ahora, «me duché» no marca la anterioridad que pide «ya», y el pronombre nunca va entre haber y el participio."
          ),
        ]
      ),
    ],
    [
      fb("Cambia el marco: ayer → ya antes.", "Ayer escribí a Ana. → Cuando me llamó, ya le ___.", "había escrito", "Escribirle fue antes de su llamada: pluscuamperfecto, había escrito."),
      fb("Cambia el marco: hoy → ayer.", "Hoy nos hemos levantado tarde. → Ayer nos ___ tarde.", "levantamos", "Con «ayer», indefinido, con el reflexivo delante: nos levantamos."),
      fb("Cambia el marco: ayer → ya antes.", "Ayer nos levantamos tarde. → Cuando sonó el timbre, ya nos ___.", "habíamos levantado", "Levantarse fue antes del timbre: pluscuamperfecto, nos habíamos levantado."),
      fb("Cambia el marco: hoy → ayer.", "Hoy han puesto la mesa. → Ayer ___ la mesa.", "pusieron", "Con «ayer», indefinido; poner es irregular (pus-): pusieron."),
      fb("Cambia el marco: ayer → ya antes.", "Ayer pusieron la mesa. → Cuando llegué, ya ___ la mesa.", "habían puesto", "Pusieron la mesa antes de que yo llegara: pluscuamperfecto, habían puesto."),
      fb("Cambia el marco: ya antes → hoy.", "Ya habías dicho que sí. → Hoy ___ que sí.", "has dicho", "Con «hoy», pretérito perfecto: has dicho (decir → dicho)."),
      toEs("When I got home, my son had already done his homework.", "Cuando llegué a casa, mi hijo ya había hecho los deberes.", "Hizo los deberes antes de que yo llegara: pluscuamperfecto, había hecho.", ["Cuando llegué a casa, mi hijo ya había hecho la tarea."]),
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
        "Recuerda la regla: la respuesta hace eco de la pregunta",
        [
          "Quien responde mira desde el mismo punto de referencia que quien pregunta, así que repite el tiempo: a «¿Has…?» se responde con he; a «¿Habías…?», con había. Lo que cambia es la persona (has → he, habéis → hemos, ha usted → he) y, casi siempre, el objeto se convierte en pronombre.",
          "Ese pronombre (lo, la, le, se lo…) y los adverbios ya, todavía no y nunca van delante de haber: «la he visto», nunca «he la visto».",
        ],
        [
          ["—¿Has visto la serie? —Sí, la he visto.", "Have you seen the series? — Yes, I've seen it. (has → he; la serie → la)"],
          ["—¿Habíais estado aquí antes? —No, nunca habíamos estado aquí.", "Had you been here before? — No, we had never been here. (habíais → habíamos)"],
          ["—¿Ha firmado usted el contrato? —Todavía no lo he firmado.", "Have you signed the contract? — I haven't signed it yet. (usted ha → yo he)"],
        ],
        [
          fb("Responde.", "—¿Has leído el informe? —Sí, ya lo ___.", "he leído", "La pregunta va en perfecto (has leído), así que la respuesta también: he leído, con «lo» (el informe) delante de haber."),
          mc(
            "«—¿Habías montado a caballo antes de las vacaciones? —No, nunca ___.»",
            ["había montado", "he montado", "monté", "habías montado"],
            0,
            "La pregunta usa el pluscuamperfecto (antes de las vacaciones, un momento pasado) y la respuesta lo repite cambiando la persona: había montado. «He montado» mira desde ahora, «monté» no marca la anterioridad y «habías montado» deja la persona de la pregunta."
          ),
        ]
      ),
    ],
    [
      fb("Responde.", "—¿Habías estado aquí antes? —No, nunca ___ aquí.", "había estado", "Pregunta en pluscuamperfecto → respuesta en pluscuamperfecto, de habías (tú) a había (yo)."),
      fb("Responde.", "—¿Sabes algo del banco? —No, todavía no me ___. (llamar, ellos)", "han llamado", "«Todavía no» conecta con el presente: perfecto, con el pronombre (me) delante de haber."),
      fb("Responde.", "—¿Llegaste a tiempo a la clase? —No, cuando llegué ya ___. (empezar, ellos)", "habían empezado", "Empezaron antes de «cuando llegué», un momento pasado: pluscuamperfecto, habían empezado."),
      fb("Responde.", "—¿Habéis terminado el proyecto? —Sí, lo ___ esta mañana.", "hemos terminado", "Pregunta en perfecto con vosotros (habéis) → respuesta en perfecto con nosotros: hemos terminado."),
      fb("Responde.", "—¿Le habías dicho algo? —No, no le ___ nada.", "había dicho", "Eco del pluscuamperfecto: habías dicho → había dicho, con «le» delante de haber."),
      mc(
        "«—¿Has visto a mis padres? —Sí, los ___ en el parque.»",
        ["he visto", "había visto", "veo", "ver"],
        0,
        "Si la pregunta usa el pretérito perfecto (¿Has visto?), la respuesta suele repetirlo: los he visto. «Había visto» es anterior a otro pasado, «veo» es presente y «ver» es infinitivo."
      ),
      toEs("—Had you met her before? —No, I had never met her.", "—¿La habías conocido antes? —No, nunca la había conocido.", "Pluscuamperfecto con el pronombre delante de haber: la habías conocido, nunca la había conocido.", ["—¿Ya la conocías? —No, nunca la había visto."]),
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
        "Recuerda la regla: un balance mira desde hoy",
        [
          "Cuando haces balance de tu año, hablas de un periodo que todavía no ha terminado («este año», «hasta ahora»), así que tus logros van en pretérito perfecto: he aprendido, he conseguido, todavía no he podido. Lo que no habías hecho antes de un punto de partida pasado (antes de este año, cuando empecé, hasta junio) va en pluscuamperfecto: nunca había vivido solo.",
          "Si nombras un momento cerrado dentro del año (en marzo, el día de mi cumpleaños), ese hecho concreto va en indefinido: en marzo me mudé.",
        ],
        [
          ["Este año he empezado a estudiar chino.", "This year I've started studying Chinese. (este año sigue abierto → perfecto)"],
          ["Antes de este año nunca había hablado en público.", "Before this year I had never spoken in public. (anterior al punto de partida → pluscuamperfecto)"],
          ["En marzo me cambié de piso.", "In March I moved flat. (momento cerrado → indefinido)"],
          ["Todavía no he conseguido dejar el café.", "I still haven't managed to give up coffee. (todavía no → perfecto)"],
        ],
        [
          fb("Completa.", "Este año mis hijos ___ a montar en bici. (aprender)", "han aprendido", "«Este año» es un periodo abierto: pretérito perfecto en la forma de ellos, han aprendido."),
          mc(
            "«Antes de este año nunca ___ más de dos kilómetros.» (correr, yo)",
            ["había corrido", "he corrido", "corrí", "corría siempre"],
            0,
            "«Antes de este año» marca un límite: lo anterior a él va en pluscuamperfecto, había corrido. «He corrido» llega hasta hoy, «corrí» no marca anterioridad y «corría siempre» contradice «nunca»."
          ),
        ]
      ),
    ],
    [
      toEs("This year I've learned to cook.", "Este año he aprendido a cocinar.", "«Este año» no ha terminado: pretérito perfecto, he aprendido.", []),
      toEs("I've met a lot of new people.", "He conocido a mucha gente nueva.", "Pretérito perfecto (he conocido) y a personal ante personas: a mucha gente.", []),
      toEs("Before this year I had never lived alone.", "Antes de este año nunca había vivido solo.", "Antes de un momento pasado → pluscuamperfecto: nunca había vivido.", ["Antes de este año nunca había vivido sola."]),
      toEs("I haven't been able to travel yet.", "Todavía no he podido viajar.", "«Not… yet» = todavía no + perfecto: todavía no he podido.", ["Aún no he podido viajar."]),
      fb("Completa.", "Este año ___ mucho. (crecer, yo)", "he crecido", "«Este año» no ha terminado, así que se usa el perfecto, no el indefinido crecí."),
      fb("Completa.", "Hasta junio nunca ___ un trabajo fijo. (tener, yo)", "había tenido", "«Hasta junio» fija un límite pasado: lo que no había pasado antes de ese límite va en pluscuamperfecto, había tenido."),
      wo("Este año he hecho cosas que nunca había imaginado.", "Los logros del año van en perfecto (he hecho); lo que no habías imaginado antes de hacerlos, en pluscuamperfecto (había imaginado).", "This year I've done things I had never imagined."),
      ms(
        "Marca las frases bien construidas para un balance del año.",
        ["Este año he corrido mi primera carrera.", "En abril he aprobado el examen de conducir.", "Antes de este año nunca había cocinado para diez personas.", "Este año había conocido a mucha gente."],
        [0, 2],
        "«Este año» abierto → perfecto (he corrido); lo anterior a «antes de este año» → pluscuamperfecto (había cocinado). «En abril» es un momento cerrado y pide indefinido (aprobé), y «este año había conocido» usa el pluscuamperfecto sin ningún punto de referencia pasado."
      ),
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
        "Recuerda la regla: cada pasado responde a una pregunta",
        [
          "Antes de elegir, pregúntate qué cuenta la frase. ¿Una acción dentro de un periodo que sigue abierto, o una experiencia hasta hoy? → pretérito perfecto (he comido). ¿Una acción terminada en un tiempo cerrado? → indefinido (comí). ¿Una descripción o un hábito del pasado, sin principio ni fin? → imperfecto (comía). ¿Algo anterior a otro hecho pasado? → pluscuamperfecto (había comido).",
          "Los marcadores ayudan (esta semana, el domingo, de niños, ya… cuando), pero la razón es siempre la misma: desde dónde se mira y si la acción se ve terminada o como fondo.",
        ],
        [
          ["Esta semana he comido fuera tres veces.", "This week I've eaten out three times. (periodo abierto → perfecto)"],
          ["El domingo comimos en casa de mi tía.", "On Sunday we ate at my aunt's. (tiempo cerrado → indefinido)"],
          ["De niños comíamos siempre con los abuelos.", "As children we always ate with our grandparents. (hábito → imperfecto)"],
          ["Cuando llegamos, ya habían comido.", "When we arrived, they had already eaten. (anterior a «llegamos» → pluscuamperfecto)"],
        ],
        [
          fb("Completa.", "Cuando era joven, mi padre ___ en una fábrica. (trabajar)", "trabajaba", "Describe una situación del pasado que duró, sin principio ni fin marcados: imperfecto, trabajaba."),
          mc(
            "«Cuando llegó la ambulancia, el herido ya se ___.» (levantar)",
            ["había levantado — anterior", "ha levantado — actual", "levantaba — hábito", "levantó — terminado ayer"],
            0,
            "El herido se levantó antes de que llegara la ambulancia: pluscuamperfecto, se había levantado. «Ha levantado» se liga al presente, «levantaba» describe un hábito y «levantó» no marca esa anterioridad."
          ),
        ]
      ),
    ],
    [
      mc(
        "«Esta mañana ___ el autobús.» (perder, yo — España)",
        ["he perdido — periodo actual", "perdí — tiempo terminado", "perdía — hábito", "había perdido — anterior"],
        0,
        "En España, «esta mañana» se ve como parte de hoy: pretérito perfecto, he perdido. «Perdí» es más habitual en Latinoamérica, «perdía» describe hábitos y «había perdido» es anterior a otro pasado."
      ),
      mc(
        "«Cuando era estudiante, ___ el autobús a menudo.» (perder, yo)",
        ["perdía — hábito", "he perdido — actual", "perdí — una vez", "había perdido — anterior"],
        0,
        "«A menudo» cuando era estudiante describe un hábito del pasado: imperfecto, perdía. «Perdí» es una sola vez, «he perdido» se liga al presente y «había perdido» es anterior a otro pasado."
      ),
      mc(
        "«El martes pasado ___ el autobús.» (perder, yo)",
        ["perdí — tiempo terminado", "he perdido — actual", "perdía — hábito", "había perdido — anterior"],
        0,
        "«El martes pasado» es un tiempo terminado: indefinido, perdí. «He perdido» se usa con periodos no terminados, «perdía» describe hábitos y «había perdido» es anterior a otro pasado."
      ),
      fb("Completa.", "Me enfadé porque mi hermano ___ mi ordenador. (romper)", "había roto", "Lo rompió antes de que yo me enfadara (otro hecho pasado): pluscuamperfecto, había roto (romper → roto)."),
      fb("Completa.", "Nunca en mi vida ___ tanta gente junta. (ver, yo)", "he visto", "«Nunca en mi vida» es una experiencia medida hasta hoy: pretérito perfecto, he visto."),
      fb("Completa.", "En aquella época ___ en un piso muy pequeño. (vivir, nosotros)", "vivíamos", "«En aquella época» presenta una situación de fondo, no un hecho terminado: imperfecto, vivíamos."),
      toEs("I was sad because my friend had left.", "Estaba triste porque mi amigo se había ido.", "Estado en imperfecto (estaba) y causa anterior en pluscuamperfecto (se había ido).", ["Estaba triste porque mi amiga se había marchado."]),
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
        "Recuerda la regla: haber + participio es un bloque",
        [
          "En español, haber y el participio forman una sola unidad que no se separa: no se puede meter nada entre «he» y «dicho». Por eso los pronombres (me, lo, se lo…) van delante de haber, igual que delante de cualquier verbo conjugado, y los adverbios ya, todavía no y nunca también se colocan normalmente delante del bloque.",
          "Orden habitual: (ya / todavía no / nunca) + pronombres + haber + participio. «Ya» puede ir también al final de la frase (Lo he pagado ya), pero nunca dentro del bloque.",
        ],
        [
          ["Ya lo hemos pagado.", "We've already paid it. (ya + lo + hemos pagado)"],
          ["Nunca nos habían invitado.", "They had never invited us. (nunca + nos + habían invitado)"],
          ["Todavía no te he contestado.", "I haven't answered you yet. (todavía no + te + he contestado)"],
          ["¿Se lo has dicho ya?", "Have you told him yet? (ya también puede ir al final)"],
        ],
        [
          mc(
            "Orden correcto:",
            ["Nunca lo había visto tan contento.", "Lo nunca había visto tan contento.", "Nunca había lo visto tan contento.", "Había nunca lo visto tan contento."],
            0,
            "Orden: nunca + pronombre + había + participio: Nunca lo había visto. El pronombre no puede ir antes de «nunca» ni entre haber y el participio."
          ),
          mc(
            "Coloca «les» (a ellos): «We've already written to them.»",
            ["Ya les hemos escrito.", "Ya hemos les escrito.", "Ya hemos escrito les.", "Les ya hemos escrito."],
            0,
            "El pronombre va delante del verbo conjugado (hemos) y detrás de «ya»: Ya les hemos escrito. No puede entrar en el bloque haber + participio, ni ir pegado al final de un participio, ni delante de «ya»."
          ),
        ]
      ),
    ],
    [
      wo("Todavía no se lo he dicho a nadie.", "Todavía no + se lo + he.", "I haven't told anyone yet."),
      wo("Cuando llegamos, ya se habían comido todo el pastel.", "Ya + se + habían.", "When we arrived, they had already eaten all the cake."),
      wo("Este año hemos viajado más que nunca.", "Perfecto + comparación.", "This year we've travelled more than ever."),
      wo("Nunca había visto a mi abuela tan feliz.", "Nunca + había.", "I had never seen my grandmother so happy."),
      fb("Completa.", "Ya te ___ que no voy a ir. (decir, yo)", "he dicho", "«Ya te» va delante del bloque y el bloque es he + dicho (participio irregular de decir); se mira desde ahora: pretérito perfecto."),
      toEn("No me había dado cuenta de que era tan tarde.", "I hadn't realized it was so late.", "«Darse cuenta de» = to realize; «hadn't realized» = no me había dado cuenta.", ["I hadn't noticed that it was so late."]),
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
        "Recuerda la regla: cada pasado tiene un papel en la historia",
        [
          "En una anécdota los cuatro pasados se reparten el trabajo. El pretérito perfecto abre o cierra la historia desde hoy (esta mañana me ha pasado algo). El imperfecto pinta el fondo: lo que pasaba, cómo eran las cosas (llovía, iba al trabajo). El indefinido hace avanzar la acción, un hecho tras otro (vi, me saludó, me reconoció). El pluscuamperfecto da un salto atrás, a algo anterior a esos hechos (no lo había visto desde…).",
          "Si cambias el marco (esta mañana → ayer), cambia el verbo que lo acompaña; el fondo y los saltos atrás siguen igual.",
        ],
        [
          ["Hoy me ha llamado mi prima.", "My cousin called me today. (marco de hoy → perfecto)"],
          ["Llovía y yo estaba en casa.", "It was raining and I was at home. (fondo → imperfecto)"],
          ["Sonó el teléfono y contesté.", "The phone rang and I answered. (hechos que avanzan → indefinido)"],
          ["No habíamos hablado desde su boda.", "We hadn't spoken since her wedding. (salto atrás → pluscuamperfecto)"],
        ],
        [
          mc(
            "«Paseaba por la playa cuando ___ un delfín.» (ver, yo)",
            ["vi", "veía", "he visto", "había visto"],
            0,
            "«Paseaba» es el fondo; ver el delfín es el hecho que lo interrumpe y hace avanzar la historia: indefinido, vi. «Veía» sería otro fondo, «he visto» mira desde hoy y «había visto» sería anterior al paseo."
          ),
        ]
      ),
      sec(
        "La anécdota",
        "«Esta mañana me ha pasado algo increíble. Iba al trabajo en metro cuando vi a mi profesor de primaria. No lo había visto desde hacía veinte años. Me reconoció enseguida y hemos quedado para tomar un café mañana.»",
        [],
        [
          mc(
            "¿Por qué «me ha pasado»?",
            ["Esta mañana = periodo actual (España).", "Es un hábito.", "Es anterior a otro pasado.", "Es una descripción."],
            0,
            "«Esta mañana» es parte de hoy, un periodo actual, y en España lleva pretérito perfecto: me ha pasado. No es un hábito, ni algo anterior a otro pasado, ni una descripción."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "Esta mañana me ___ algo increíble. (pasar)", "ha pasado", "El marco de la historia es «esta mañana», parte de hoy: pretérito perfecto, me ha pasado (en América, también «me pasó»)."),
      fb("Completa.", "___ al trabajo en metro. (ir, yo — en curso)", "Iba", "Es el fondo de la escena, una acción en curso cuando ocurre lo importante: imperfecto, iba."),
      fb("Completa.", "De repente ___ a mi profesor de primaria. (ver, yo)", "vi", "Acción puntual. Dentro del relato, los hechos sucesivos van en indefinido aunque el marco sea «esta mañana»."),
      fb("Completa.", "No lo ___ desde hacía veinte años. (ver, yo)", "había visto", "Salto atrás: no verlo durante veinte años es anterior al encuentro en el metro, así que va en pluscuamperfecto."),
      fb("Completa.", "Me ___ enseguida. (reconocer, él)", "reconoció", "Otro hecho que hace avanzar la historia: indefinido, reconoció."),
      fb("Completa.", "Hemos ___ para tomar un café. (quedar)", "quedado", "La historia se cierra desde hoy (el resultado sigue vigente): pretérito perfecto, hemos quedado."),
      toEs("He hadn't changed at all.", "No había cambiado nada.", "«Hadn't changed» = no había cambiado; «at all» = nada.", ["No había cambiado en absoluto."]),
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
        [
          "Recuerda la regla: cuando dos frases comparten un sustantivo, la segunda lo cambia por que y se pega detrás de él: Tengo un amigo. Mi amigo vive en Roma. → Tengo un amigo que vive en Roma.",
          "Que sirve para personas, animales y cosas, en singular y en plural, y no cambia nunca. Además, en español no se puede omitir: «the book you lent me» es «el libro que me prestaste». Ojo: si el sustantivo es el objeto de la segunda frase, el sujeto de esa frase va detrás de que (las galletas que hace mi abuela).",
        ],
        [
          ["Tengo un amigo que vive en Roma.", "I have a friend who lives in Rome. (que = sujeto de vive)"],
          ["El libro que me prestaste es genial.", "The book you lent me is great. (que = objeto de prestaste; no se omite)"],
          ["Los perros que ladran no muerden.", "Dogs that bark don't bite. (plural: que no cambia)"],
        ],
        [
          fb("Une.", "Vi una película. La película era muy triste. → Vi una película ___ era muy triste.", "que", "«Que» une las dos frases y sustituye a «la película»: sirve para cosas."),
        ]
      ),
    ],
    [
      fb("Une.", "Conocí a una chica. La chica habla cinco idiomas. → Conocí a una chica ___ habla cinco idiomas.", "que", "«Que» también sirve para personas cuando no hay preposición ni coma."),
      fb("Une.", "Compré un coche. El coche es eléctrico. → El coche ___ compré es eléctrico.", "que", "«Que» sustituye a «el coche», que es el objeto de compré."),
      fb("Une.", "Tengo vecinos. Los vecinos son muy ruidosos. → Tengo unos vecinos ___ son muy ruidosos.", "que", "«Que» no cambia con el género ni el número: vecinos que son…"),
      fb("Une.", "Leí el artículo. Me mandaste el artículo. → Leí el artículo ___ me mandaste.", "que", "«Que» sustituye a «el artículo», objeto de mandaste."),
      mc(
        "«La mujer ___ trabaja en la farmacia es mi tía.» ¿Qué relativo?",
        ["que", "quien", "cual", "lo que"],
        0,
        "Sin comas, el relativo natural para personas y cosas es «que»: la mujer que trabaja… «Quien» sin comas ni preposición no se usa así, «cual» necesita artículo (la cual) y «lo que» se refiere a ideas."
      ),
      wo("El restaurante que me recomendaste estaba cerrado.", "Que es aquí el objeto de recomendaste (me recomendaste el restaurante) y va justo detrás de el restaurante.", "The restaurant you recommended to me was closed."),
      toEs("I have a sister who lives in Chile.", "Tengo una hermana que vive en Chile.", "«Que» sirve para personas cuando no hay preposición ni coma.", []),
      toEs("The shoes I bought are too small.", "Los zapatos que compré son demasiado pequeños.", "El relativo que en inglés se omite (the shoes I bought) es obligatorio en español: que.", ["Los zapatos que me compré son demasiado pequeños."]),
      toEs(
        "La niña que canta es mi sobrina.",
        "Las niñas que cantan son mis sobrinas.",
        "Al pasar al plural cambian el artículo, el sustantivo, los verbos y el posesivo, pero que se queda igual.",
        [],
        "Cambia la frase al plural."
      ),
      toEs(
        "Tengo un vecino quien toca la batería.",
        "Tengo un vecino que toca la batería.",
        "Sin preposición y sin comas, el relativo para personas es que; quien necesita una preposición delante o ir entre comas.",
        [],
        "Corrige la frase."
      ),
    ]
  ),
  L(
    "relative-pronouns-1",
    "b1d-circuito-preposicion-relativo",
    "Circuito: con quien, en el que, para la que",
    "Detrás de una preposición, lo más seguro es el que / la que / quien (con cosas también se oye en que, pero nunca con personas).",
    "7 min",
    [
      sec(
        "Preposición + relativo",
        [
          "Recuerda la regla: en inglés la preposición puede quedarse al final (the city I was born in); en español nunca: va delante del relativo. Y detrás de una preposición, el relativo lleva artículo: el que / la que / los que / las que, concordando con el sustantivo (personas o cosas), o quien / quienes (solo personas).",
          "Para encontrar la preposición, piensa en la frase original: nací en la ciudad → la ciudad en la que nací; salgo con la chica → la chica con la que salgo; vine por un motivo → el motivo por el que vine.",
        ],
        [
          ["El amigo con quien viajé es de Perú.", "The friend I travelled with is from Peru. (viajé con el amigo)"],
          ["La ciudad en la que nací es pequeña.", "The city I was born in is small. (nací en la ciudad)"],
          ["Los vecinos de los que te hablé se mudan.", "The neighbours I told you about are moving. (de + los que)"],
        ],
        [
          { ...fb("Completa.", "La empresa para ___ trabajo es alemana.", "la que", "Con preposición, el relativo lleva artículo que concuerda: la empresa → para la que."), altAnswers: ["la cual"] },
        ]
      ),
    ],
    [
      { ...fb("Completa.", "El chico con ___ sale mi hermana es simpático.", "el que", "Sale con el chico: la preposición con va delante y el artículo concuerda con chico (el que); para personas también vale quien."), altAnswers: ["quien", "el cual"] },
      fb("Completa.", "Las amigas con ___ viajé son de Chile. (solo personas)", "quienes", "Tras preposición y con personas en plural se usa «quienes»: con quienes viajé."),
      { ...fb("Completa.", "El pueblo en ___ crecí ya no existe.", "el que", "Con preposición, artículo + que concordando con «el pueblo»: en el que."), altAnswers: ["que", "el cual"] },
      { ...fb("Completa.", "La razón por ___ me fui es personal.", "la que", "«La razón por la que» es la forma fija para explicar un motivo."), altAnswers: ["la cual"] },
      { ...fb("Completa.", "Los compañeros a ___ invité no vinieron.", "los que", "Con preposición, artículo + que concordando con «los compañeros»: a los que."), altAnswers: ["quienes", "los cuales"] },
      mc(
        "«La mesa ___ comemos es de mi abuelo.»",
        ["en la que", "que en", "quien", "en quien"],
        0,
        "Se come en la mesa, así que la preposición va delante del relativo: en la que. «Que en» pone la preposición detrás, y «quien» o «en quien» son solo para personas."
      ),
      ms(
        "¿Qué opciones valen? «La profesora ___ hablé me ayudó.»",
        ["con la que", "con quien", "con que", "que con"],
        [0, 1],
        "Se habla con alguien: la preposición va delante, y para personas vale «con la que» o «con quien». «Con que» no se usa con personas tras preposición, y «que con» pone la preposición en mal lugar."
      ),
      toEs("The person I talked to was very kind.", "La persona con la que hablé fue muy amable.", "La preposición que en inglés va al final (talked to) se pone delante del relativo: con la que.", ["La persona con quien hablé fue muy amable.", "La persona con la que hablé era muy amable."]),
      toEs(
        "La casa en la que vivo es antigua.",
        "El piso en el que vivo es antiguo.",
        "El artículo del relativo concuerda con el nuevo sustantivo: el piso → en el que; el adjetivo también cambia (antiguo).",
        ["El apartamento en el que vivo es antiguo.", "El departamento en el que vivo es antiguo."],
        "Cambia «la casa» por «el piso» y adapta la frase."
      ),
      toEs(
        "La amiga con que viajé vive en Lima.",
        "La amiga con la que viajé vive en Lima.",
        "Con personas, detrás de una preposición no basta que: hace falta artículo (con la que) o quien (con quien).",
        ["La amiga con quien viajé vive en Lima."],
        "Corrige la frase."
      ),
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
        [
          "Recuerda la regla: mira lo que hay justo delante. Si hay un sustantivo concreto (el libro, la chica), que. Si no lo hay, lo que, que significa «what / the thing that» (Lo que quiero es dormir). Lo que también recoge toda una frase anterior, como «which» en inglés (Llegó tarde, lo que me molestó).",
          "¿Por qué lo? Porque es neutro: se refiere a una idea, que no tiene género masculino ni femenino. Detrás de todo, también: todo lo que (everything that), nunca «todo que».",
        ],
        [
          ["El regalo que me diste me encanta.", "I love the present you gave me. (sustantivo delante: que)"],
          ["Lo que más me gusta es la playa.", "What I like most is the beach. (sin sustantivo: lo que)"],
          ["Perdí las llaves, lo que fue un problema.", "I lost my keys, which was a problem. (recoge toda la frase)"],
        ],
        [
          mc(
            "«No entiendo ___ dices.»",
            ["lo que", "que", "el que", "quien"],
            0,
            "Sin antecedente (no hay sustantivo delante), se usa «lo que» = the thing that: No entiendo lo que dices. «Que» solo necesitaría un sustantivo antes, «el que» se refiere a algo masculino concreto y «quien» es para personas."
          ),
        ]
      ),
    ],
    [
      mc(
        "«La canción ___ canta es preciosa.»",
        ["que", "lo que", "quien", "cuyo"],
        0,
        "El antecedente es «la canción», un sustantivo sin preposición: que. «Lo que» es para ideas sin antecedente, «quien» es para personas y «cuyo» indica posesión."
      ),
      fb("Que o lo que.", "___ necesito es un café.", "Lo que", "Sin antecedente, «lo que» significa «what / the thing that»: Lo que necesito es…"),
      fb("Que o lo que.", "El café ___ tomé estaba frío.", "que", "El antecedente es «el café», sin preposición: que."),
      fb("Que o lo que.", "Haz ___ te digo, por favor.", "lo que", "Delante no hay ningún sustantivo, solo el verbo haz: lo que = what (do what I tell you)."),
      fb("Que o lo que.", "No me creyó, ___ me molestó mucho.", "lo que", "Lo que me molestó es que no me creyera, toda la frase anterior, no un sustantivo: lo que (o lo cual)."),
      fb("Que o lo que.", "Es la chica ___ conocí en Lisboa.", "que", "El antecedente es «la chica», sin preposición ni coma: que."),
      toEs("What I want is to rest.", "Lo que quiero es descansar.", "«What» al inicio de una frase como esta = lo que.", []),
      toEn("Me dijo todo lo que sabía.", "He told me everything he knew.", "«Everything he knew» = todo lo que sabía.", ["She told me everything she knew."]),
      toEs(
        "La comida que pedimos llegó fría.",
        "Lo que pedimos llegó frío.",
        "Al quitar el sustantivo (la comida), que necesita apoyarse en lo: lo que. Y el adjetivo pasa a masculino (frío), porque lo es neutro.",
        [],
        "Transforma: quita «la comida» y empieza con «Lo que...»."
      ),
      toEs(
        "No entiendo que quieres decir.",
        "No entiendo lo que quieres decir.",
        "Delante no hay sustantivo, así que el relativo es lo que (what). Que solo cambia el sentido.",
        ["No entiendo qué quieres decir."],
        "Corrige la frase."
      ),
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
        [
          "Recuerda la regla: sin preposición, que (personas y cosas). Con preposición, la preposición del verbo va delante y el relativo lleva artículo: compro en la panadería → la panadería en la que compro; voy al parque → el parque al que voy. Entre comas, para personas, también quien. Sin sustantivo delante, lo que.",
          "«Vivo en un barrio que está cerca del río. La panadería en la que compro el pan es de una familia que lleva allí cincuenta años. Mi vecina, quien es pintora, tiene un perro que se llama Lolo. Lo que más me gusta del barrio es la tranquilidad.»",
        ],
        [
          ["El bar al que vamos los viernes es pequeño.", "The bar we go to on Fridays is small. (ir a → al que)"],
          ["Mi vecino, quien es médico, vive solo.", "My neighbour, who is a doctor, lives alone. (persona entre comas)"],
        ],
        [
          mc(
            "¿Qué es lo que más le gusta?",
            ["la tranquilidad", "la panadería", "el río", "el perro"],
            0,
            "Dice: «Lo que más me gusta es la tranquilidad». La panadería, el río y el perro se mencionan en el texto, pero lo que más le gusta, según dice, es la tranquilidad."
          ),
          mc(
            "Describe tu calle como en el texto: «El quiosco ___ compro el periódico está en la esquina.»",
            ["en el que", "que", "el que", "en la que"],
            0,
            "Se compra en el quiosco: la preposición en va delante y el artículo concuerda con quiosco (masculino): en el que. «En la que» sería para un sustantivo femenino."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "Vivo en un barrio ___ está cerca del río.", "que", "«Que» retoma «un barrio», el sujeto de está."),
      { ...fb("Completa.", "La panadería en ___ compro el pan es antigua.", "la que", "Se compra en la panadería: preposición + artículo + que → en la que."), altAnswers: ["que", "la cual"] },
      fb("Completa.", "Es de una familia ___ lleva allí cincuenta años.", "que", "«Que» retoma «una familia», el sujeto de lleva."),
      { ...fb("Completa.", "Mi vecina, ___ es pintora, tiene un perro. (entre comas, persona)", "quien", "Para una persona entre comas se puede usar «quien» (o «que»)."), altAnswers: ["que", "la cual"] },
      fb("Completa.", "___ más me gusta es la tranquilidad.", "Lo que", "Sin antecedente, «lo que» = what: Lo que más me gusta…"),
      fb("Completa.", "El parque al ___ voy los domingos es enorme.", "que", "Se va a un sitio: a + el que = al que. Aquí solo falta el que, porque al ya está escrito."),
      toEs("The market where I buy fruit opens at eight.", "El mercado en el que compro fruta abre a las ocho.", "«Where» con un lugar = en el que (o donde), concordando con mercado.", ["El mercado donde compro fruta abre a las ocho.", "El mercado donde compro la fruta abre a las ocho."]),
      toEs(
        "Mi vecina es pintora. Mi vecina tiene un perro.",
        "Mi vecina, que es pintora, tiene un perro.",
        "La información extra va entre comas, justo detrás de mi vecina, con que o quien; el verbo principal (tiene) va después.",
        ["Mi vecina, quien es pintora, tiene un perro."],
        "Reescribe en una sola frase con la información entre comas."
      ),
      toEs(
        "Lo que más me gusta de mi barrio son los parques.",
        "Lo que menos me gusta de mi barrio es el tráfico.",
        "Lo que no cambia: sigue sin haber sustantivo delante. El verbo ser concuerda con lo que viene después (son los parques → es el tráfico).",
        [],
        "Cambia «más» por «menos» y «los parques» por «el tráfico»."
      ),
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
        [
          "Recuerda la regla: para no repetir un sustantivo, la segunda frase lo cambia por un relativo, y la preposición que acompañaba al sustantivo viaja con él, delante: Hablo con mi amiga → la amiga con la que hablo. Nunca se queda al final ni se repite el sustantivo con un pronombre («la amiga que hablo con ella» es un error).",
          "Pregúntate: ¿hay preposición? (con, de, en, a, por → artículo + que, o quien para personas). ¿No la hay? (que). ¿Recoges toda una idea? (lo que).",
        ],
        [
          ["Es un tema del que no quiero hablar.", "It's a topic I don't want to talk about. (hablar de → del que)"],
          ["Tengo un vecino en quien confío.", "I have a neighbour I trust. (confiar en + persona → en quien)"],
          ["Se fue sin pagar, lo que nos sorprendió.", "He left without paying, which surprised us. (toda la idea → lo que)"],
        ],
        [
          fb("Reescribe en una sola frase.", "Es un libro. Saqué muchas ideas de ese libro. → Es un libro del ___ saqué muchas ideas.", "que", "Sacar ideas de un libro: la preposición de va delante y se contrae con el artículo: de + el que → del que."),
        ]
      ),
    ],
    [
      fb("Reescribe en una sola frase.", "Tengo un profesor. Aprendo mucho de él. → Tengo un profesor del ___ aprendo mucho.", "que", "Se aprende de alguien: de + el que → del que."),
      fb("Reescribe en una sola frase.", "Esta es la llave. Abro la puerta con esta llave. → Esta es la llave con la ___ abro la puerta.", "que", "Se abre con la llave: con + la que, concordando con «la llave»."),
      fb("Reescribe en una sola frase.", "Vi a unos chicos. Los chicos jugaban al fútbol. → Vi a unos chicos ___ jugaban al fútbol.", "que", "«Que» retoma «unos chicos», el sujeto de jugaban."),
      { ...fb("Reescribe en una sola frase.", "Llegó tarde. Eso enfadó al jefe. → Llegó tarde, lo ___ enfadó al jefe.", "que", "«Lo que» retoma toda la idea anterior (que llegara tarde)."), altAnswers: ["cual"] },
      { ...fb("Reescribe en una sola frase.", "Es mi abuela. Pienso mucho en ella. → Es mi abuela, en ___ pienso mucho. (persona)", "quien", "Se piensa en alguien: con preposición y una persona se puede usar «quien»: en quien."), altAnswers: ["la que", "la cual"] },
      mc(
        "«Es la empresa ___ trabajé cinco años.»",
        ["en la que", "que", "lo que", "quien"],
        0,
        "Se trabaja en una empresa, así que la preposición va delante del relativo: en la que. «Que» sin preposición pierde el «en», «lo que» se refiere a ideas y «quien» a personas."
      ),
      toEs("It's a problem I think about a lot.", "Es un problema en el que pienso mucho.", "En español se piensa en algo (no «sobre»): pensar en → en el que, delante del verbo.", []),
      toEs(
        "Es la amiga que fui a Roma con ella.",
        "Es la amiga con la que fui a Roma.",
        "La preposición viaja delante del relativo y no se repite a la persona con un pronombre: con la que (o con quien).",
        ["Es la amiga con quien fui a Roma."],
        "Corrige la frase."
      ),
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
        [
          "Recuerda la regla con un árbol de decisión. 1) ¿No hay sustantivo delante (una idea, «la cosa que»)? → lo que. 2) ¿Hay preposición? → el/la/los/las que, concordando con el sustantivo (o quien/quienes para personas). 3) ¿Sin preposición? → que. 4) ¿Persona entre comas? → que o quien.",
          "El orden importa: mira primero si hay sustantivo, luego si hay preposición. Así no te equivocas con «la chica con la que» ni con «haz lo que quieras».",
        ],
        [
          ["Lo que dijo, el que lo dijo, con quien lo dijo.", "What he said, the one who said it, who he said it with."],
          ["La mesa en la que comemos es de roble.", "The table we eat at is oak. (preposición + la que)"],
        ],
        [
          fb("Rápido.", "El tren ___ tomo sale a las siete.", "que", "Sin preposición, el relativo es «que»: el tren que tomo."),
        ]
      ),
    ],
    [
      fb("Rápido.", "___ me preocupa es el precio.", "Lo que", "Sin antecedente, «lo que» se refiere a una idea: Lo que me preocupa…"),
      { ...fb("Rápido.", "La chica con ___ bailé es argentina.", "la que", "Se baila con alguien: con + la que, concordando con «la chica»."), altAnswers: ["quien", "la cual"] },
      fb("Rápido.", "Los amigos ___ vinieron trajeron vino.", "que", "Sin preposición, el relativo es «que»: los amigos que vinieron."),
      { ...fb("Rápido.", "Es la razón por ___ lo hice.", "la que", "«La razón por la que» es la forma fija para explicar un motivo."), altAnswers: ["la cual"] },
      fb("Rápido.", "Repite ___ has oído.", "lo que", "Delante solo está el verbo repite, no hay sustantivo: lo que (what you've heard)."),
      { ...fb("Rápido.", "Mi tío, ___ es médico, me ayudó. (persona, entre comas)", "quien", "Para una persona entre comas se puede usar «quien» (o «que»)."), altAnswers: ["que", "el cual"] },
      { ...fb("Rápido.", "El edificio en ___ trabajo es muy moderno.", "el que", "Se trabaja en un edificio: en + el que, concordando con «el edificio»."), altAnswers: ["que", "el cual"] },
      mc(
        "«No sé ___ quieres decir.»",
        ["lo que", "que", "el que", "quien"],
        0,
        "Sin antecedente, «lo que» significa «what / the thing that»: No sé lo que quieres decir. «Que» necesitaría un sustantivo antes, «el que» se refiere a algo masculino concreto y «quien» es para personas."
      ),
      toEs(
        "Los amigos quienes vinieron trajeron postre.",
        "Los amigos que vinieron trajeron postre.",
        "Sin preposición y sin comas, el relativo es que, también para personas. Quienes necesita preposición o comas.",
        [],
        "Corrige la frase."
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
        [
          "Recuerda la regla: para describir a alguien o un lugar sin repetir, el relativo copia la preposición del verbo: me río con ella → la persona con la que me río; crecí en un pueblo → el pueblo en el que crecí. Sin preposición, que (también para personas). Para la idea que más valoras, lo que.",
          "Moldes útiles: Es una persona que… / con la que… / de la que… · Es el lugar en el que… / al que… · Lo que más valoro de él es…",
        ],
        [
          ["Mi abuela es la persona que más me ha enseñado.", "My grandmother is the person who has taught me the most. (sin preposición: que)"],
          ["Es un amigo al que llamo cuando tengo problemas.", "He's a friend I call when I have problems. (a personal + el que = al que)"],
        ],
        [
          mc(
            "«Mi hermano es la persona con ___ más me río.»",
            ["la que", "que", "lo que", "el cual"],
            0,
            "Con una preposición (con), el relativo lleva artículo que concuerda con «la persona» (femenino): con la que. «Con que» no se usa así con personas, «lo que» es para ideas y «el cual» es masculino."
          ),
        ]
      ),
    ],
    [
      toEs("My best friend is someone who always listens to me.", "Mi mejor amiga es alguien que siempre me escucha.", "«Who» sin preposición = que, también para personas.", ["Mi mejor amigo es alguien que siempre me escucha."]),
      toEs("The town where I grew up is by the sea.", "El pueblo en el que crecí está junto al mar.", "«Where» = en el que (o donde), con «el pueblo».", ["El pueblo donde crecí está junto al mar."]),
      toEs("What I value most is honesty.", "Lo que más valoro es la honestidad.", "«What» = lo que: Lo que más valoro…", ["Lo que más valoro es la sinceridad."]),
      toEs("Es la profesora que más aprendí de ella.", "Es la profesora de la que más aprendí.", "Aprender de alguien: la preposición de va delante del relativo (de la que, de quien) y no se repite a la persona con «de ella».", ["Es la profesora de quien más aprendí."], "Corrige la frase."),
      fb("Completa.", "Es el lugar al ___ siempre quiero volver.", "que", "Se vuelve a un lugar: a + el que → al que; aquí solo falta que."),
      { ...fb("Completa.", "Mi padre, ___ es muy tranquilo, nunca grita. (persona, entre comas)", "quien", "Para una persona entre comas se puede usar «quien» (o «que»)."), altAnswers: ["que", "el cual"] },
      wo("Lo que más echo de menos de mi país es la comida.", "«What» sin sustantivo delante = lo que; «echar de menos» = to miss: lo que más echo de menos.", "What I miss most about my country is the food."),
      { type: "speak", prompt: "Responde en voz alta: ¿Quién es la persona con la que más te ríes? Usa «...es la persona con la que...» y añade por qué.", text: "Mi hermana es la persona con la que más me río, porque siempre cuenta historias divertidas.", explanation: "Reírse con alguien: la preposición con va delante del relativo y el artículo concuerda con persona (la que). También vale con quien." },
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
        [
          "Recuerda la regla: quien solo para personas (y con preposición o entre comas); para cosas, que. Si el verbo lleva preposición (estar en, compartir con), esa preposición va delante del relativo con artículo: en el que, con la que. Sin sustantivo delante, lo que.",
          "Para corregir, haz tres preguntas en orden: ¿hay sustantivo delante? ¿es persona o cosa? ¿qué preposición pide el verbo?",
          "«Alquilo un piso ✗ quien (→ que) tiene tres habitaciones. El barrio ✗ que (→ en el que) está es muy tranquilo. ✗ Que (→ Lo que) más les gusta a los inquilinos es la terraza. La vecina con ✗ que (→ la que / quien) comparte rellano es encantadora.»",
        ],
        [
          ["El garaje, que es muy amplio, tiene sitio para dos coches.", "The garage, which is very roomy, has room for two cars. (cosa entre comas: que, no quien)"],
          ["La plaza a la que da el balcón tiene árboles.", "The square the balcony looks onto has trees. (dar a → a la que)"],
        ],
        [
          fb("Corrige.", "Alquilo un piso ___ tiene tres habitaciones. (el anuncio dice: quien)", "que", "«Quien» es solo para personas; para un piso se usa «que»."),
          fb("Corrige.", "El ascensor ___ funciona mal ya está arreglado. (el anuncio dice: quien)", "que", "Un ascensor es una cosa: el relativo es que. Quien solo se refiere a personas."),
        ]
      ),
    ],
    [
      { ...fb("Corrige.", "El barrio ___ está es muy tranquilo. (el anuncio dice: que)", "en el que", "Se está en el barrio: falta la preposición → en el que (o donde)."), altAnswers: ["en el cual", "donde", "en que"] },
      fb("Corrige.", "___ más les gusta a los inquilinos es la terraza. (el anuncio dice: Que)", "Lo que", "Sin antecedente, se necesita «lo que» (what), no «que» solo."),
      fb("Corrige.", "La vecina con ___ comparte rellano es encantadora. (el anuncio dice: que; usa el artículo)", "la que", "Se comparte con alguien: con + la que, concordando con «la vecina»."),
      fb("Corrige.", "Hay un parque ___ tiene columpios. (el anuncio dice: lo que)", "que", "Hay un antecedente concreto (un parque), así que se usa «que», no «lo que»."),
      { ...fb("Corrige.", "El dueño, ___ vive abajo, es muy amable. (el anuncio dice: que cual)", "quien", "Para una persona entre comas se usa «quien» (o «que»); «que cual» mezcla dos relativos."), altAnswers: ["que", "el cual"] },
      mc(
        "¿Cuál es correcta?",
        ["La cocina, que es nueva, tiene lavavajillas.", "La cocina, quien es nueva, tiene lavavajillas.", "La cocina, lo que es nueva, tiene lavavajillas.", "La cocina, la que es nueva, lavavajillas."],
        0,
        "Para una cosa entre comas se usa «que»: La cocina, que es nueva… «Quien» es solo para personas, «lo que» se refiere a una idea y «la que» sin preposición no encaja (y la frase pierde el verbo «tiene»)."
      ),
      toEs("The flat I rent is near the metro.", "El piso que alquilo está cerca del metro.", "El relativo omitido en inglés es obligatorio en español: el piso que alquilo.", ["El apartamento que alquilo está cerca del metro.", "El departamento que alquilo está cerca del metro."]),
      toEs(
        "El piso en el que vivo es pequeño.",
        "La casa en la que vivo es pequeña.",
        "El artículo del relativo concuerda con el nuevo sustantivo (la casa → en la que), y el adjetivo también: pequeña.",
        ["La casa donde vivo es pequeña."],
        "Cambia «el piso» por «la casa» y adapta la frase."
      ),
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
        [
          "Recuerda la regla: cada relativo tiene su razón. Que: hay un sustantivo y no hay preposición. El que / la que: hay preposición (concuerda con el sustantivo). Quien: persona, tras preposición o entre comas. Lo que: no hay sustantivo, es una idea o «what».",
          "Saber la razón te protege de los errores: si no puedes decir por qué eliges un relativo, vuelve a las preguntas: ¿sustantivo? ¿preposición? ¿persona?",
        ],
        [
          ["El hotel en el que dormimos era barato, lo que nos vino bien.", "The hotel we slept in was cheap, which suited us. (preposición + idea completa)"],
          ["El guía, quien hablaba cinco idiomas, nos esperaba.", "The guide, who spoke five languages, was waiting for us. (persona entre comas)"],
        ],
        [
          mc(
            "«El hotel en ___ dormimos era barato.»",
            ["el que — con preposición", "que — sin preposición", "lo que — idea", "quien — persona"],
            0,
            "Se duerme en un hotel, así que hace falta la preposición delante del relativo: en el que. «Que» sin preposición no puede seguir a «en», «lo que» es para ideas y «quien» para personas."
          ),
          mc(
            "«Perdimos el autobús, ___ nos obligó a coger un taxi.»",
            ["lo que — toda la frase", "que — sustantivo", "el que — preposición", "quien — persona"],
            0,
            "Lo que nos obligó a coger un taxi es haber perdido el autobús, toda la idea: lo que. «Que» se referiría al autobús, como si el autobús nos obligara."
          ),
        ]
      ),
    ],
    [
      mc(
        "«Era barato, ___ nos vino bien.»",
        ["lo que — toda la frase", "que — sustantivo", "el que — preposición", "quien — persona"],
        0,
        "«Lo que» retoma toda la idea anterior (que fuera barato): Era barato, lo que nos vino bien. «Que» necesita un sustantivo, «el que» se refiere a algo concreto y «quien» a una persona."
      ),
      mc(
        "«El recepcionista, ___ era muy joven, nos ayudó.»",
        ["quien — persona entre comas", "lo que — idea", "el que — preposición", "cuyo — posesión"],
        0,
        "El recepcionista es una persona y la cláusula va entre comas, así que vale «quien». «Lo que» es para ideas, «el que» suele ir tras preposición y «cuyo» indica posesión."
      ),
      mc(
        "«El desayuno ___ nos sirvieron era delicioso.»",
        ["que — sin preposición", "lo que — idea", "el que — preposición", "quien — persona"],
        0,
        "«El desayuno» es el objeto de sirvieron y no hay preposición: que. «Lo que» se refiere a ideas, «el que» se usa tras preposición y «quien» es para personas."
      ),
      { ...fb("Completa.", "La calle por ___ paseamos era preciosa.", "la que", "Se pasea por la calle: por + la que, concordando con «la calle»."), altAnswers: ["la cual", "donde"] },
      { ...fb("Completa.", "No recuerdo ___ pagamos.", "lo que", "«Lo que» = what: No recuerdo lo que pagamos. También valen «cuánto» (how much) y «qué»."), altAnswers: ["cuánto", "qué"] },
      toEs("The waiter who served us was from Colombia.", "El camarero que nos atendió era de Colombia.", "«Who» sin preposición = que: el camarero que nos atendió.", ["El camarero que nos sirvió era colombiano.", "El mesero que nos atendió era de Colombia.", "El camarero que nos sirvió era de Colombia.", "El mesero que nos sirvió era de Colombia."]),
      toEs(
        "El restaurante que cenamos era italiano.",
        "El restaurante en el que cenamos era italiano.",
        "Se cena en un restaurante: hay preposición, así que el que, no que solo: en el que (o donde).",
        ["El restaurante donde cenamos era italiano.", "El restaurante en que cenamos era italiano."],
        "Corrige la frase."
      ),
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
        [
          "Recuerda la regla: antecedente + (preposición + artículo) + que + resto: la amiga con la que viajé. La preposición del verbo (hablar de, viajar con, pensar en) sube delante del relativo y todo el bloque va justo después del antecedente.",
          "Por qué: en español la preposición nunca se queda sola al final, como en inglés (the photo I told you about). Si la dejas atrás, la frase se rompe: *la foto que te hablé de.",
        ],
        [
          ["Esta es la foto de la que te hablé.", "This is the photo I told you about. (hablar de → de la que)"],
          ["Es la ciudad en la que nací.", "It's the city I was born in. (nacer en → en la que, pegado a «la ciudad»)"],
          ["Las vecinas con las que cené eran de Chile.", "The neighbours I had dinner with were from Chile. (artículo en plural femenino: las que)"],
        ],
        [
          mc(
            "Orden correcto:",
            ["Esta es la foto de la que te hablé.", "Esta es la foto la que de te hablé.", "Esta es de la foto que te hablé.", "Esta foto es la que de te hablé."],
            0,
            "Se habla de algo, así que la preposición va delante del relativo: la foto de la que te hablé. En las otras opciones la preposición «de» queda separada o en un lugar imposible."
          ),
          mc(
            "Elige el orden correcto: «La amiga ___ fui a Roma vive en Lisboa.»",
            ["con la que", "la que con", "que con", "con que la"],
            0,
            "Ir con alguien: preposición + artículo + que, en ese orden y justo después de «la amiga». En las otras opciones la preposición queda detrás del relativo o el artículo se separa de que."
          ),
        ]
      ),
    ],
    [
      wo("Esta es la foto de la que te hablé ayer.", "Hablar de algo: de + la que va pegado a «la foto»; «ayer» cierra la frase.", "This is the photo I told you about yesterday."),
      wo("La chica con la que comparto piso es enfermera.", "Compartir piso con alguien: con + la que, justo después de «la chica»; el verbo principal (es) va después de toda la relativa.", "The girl I share a flat with is a nurse."),
      wo("Lo que me dijiste no es verdad.", "Sin sustantivo delante, para una idea → lo que; toda la relativa es el sujeto de «no es verdad».", "What you told me isn't true."),
      wo("El profesor, quien había vivido en Japón, nos enseñó a usar palillos.", "Persona entre comas: quien (o que); el inciso va entre el sujeto y el verbo «nos enseñó».", "The teacher, who had lived in Japan, taught us to use chopsticks."),
      fb("Completa.", "Es el libro ___ más me ha gustado este año.", "que", "«Que» retoma «el libro», sujeto de ha gustado; no hay preposición, así que basta que (no «el que» ni «lo que»)."),
      toEs("Es el cuaderno que escribo mis ideas en él.", "Es el cuaderno en el que escribo mis ideas.", "Escribir en un cuaderno: la preposición en sube delante del relativo (en el que) y no se repite el cuaderno con «en él» al final.", ["Es el cuaderno donde escribo mis ideas.", "Es el cuaderno en que escribo mis ideas."], "Corrige la frase."),
      toEs("Viajé con unos amigos. Los amigos viven en Sevilla.", "Los amigos con los que viajé viven en Sevilla.", "Viajar con alguien → con los que (o con quienes), justo después de «los amigos»; el verbo principal (viven) va al final.", ["Los amigos con quienes viajé viven en Sevilla."], "Reescribe en una sola frase con preposición + relativo."),
      toEn("No encuentro la caja en la que guardé las fotos.", "I can't find the box I kept the photos in.", "«En la que» = in which: the box I kept the photos in.", ["I can't find the box where I kept the photos."]),
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
        [
          "Recuerda la regla: el relativo (que, con la que, lo que…) no decide el tiempo. Cada verbo elige el suyo por su propia pista: ayer → indefinido (vimos); este mes → perfecto (he leído); mañana → futuro (alquilaremos); hábito pasado → imperfecto (vivía); antes de otro pasado → pluscuamperfecto (había hecho). Tras «quiero que / espero que» va subjuntivo.",
          "Por qué: la relativa es una frase dentro de otra, con su propio verbo y su propio momento; por eso la principal y la relativa pueden ir en tiempos distintos.",
        ],
        [
          ["Quiero que conozcas a la chica con la que trabajo.", "I want you to meet the girl I work with. (subjuntivo en la principal, presente en la relativa)"],
          ["El piso que alquilamos el año pasado tenía terraza.", "The flat we rented last year had a terrace. (el año pasado → indefinido en la relativa)"],
          ["Las llaves que he perdido esta semana eran de casa.", "The keys I've lost this week were the house keys. (esta semana → perfecto)"],
        ],
        [
          fb("Completa.", "La película que ___ ayer era larguísima. (ver, nosotros)", "vimos", "«Ayer» marca un momento terminado → indefinido (vimos); el relativo que no cambia nada."),
          fb("Completa.", "La casa en la que ___ el próximo verano está en la playa. (quedarse, nosotros — futuro simple)", "nos quedaremos", "«El próximo verano» pide futuro: nos quedaremos. El relativo en la que no cambia el tiempo, y la principal (está) va en presente."),
        ]
      ),
    ],
    [
      fb("Completa.", "El libro que ___ este mes es genial. (leer, yo — perfecto)", "he leído", "«Este mes» es un periodo que incluye el presente → pretérito perfecto (he leído)."),
      fb("Completa.", "El piso que ___ el año que viene tendrá terraza. (alquilar, nosotros)", "alquilaremos", "«El año que viene» pide futuro (alquilaremos); el relativo que no lo cambia."),
      fb("Completa.", "Quiero que ___ a la chica con la que trabajo. (conocer, tú)", "conozcas", "«Quiero que» con otro sujeto pide subjuntivo: conocer → conozco → conozcas. La relativa «con la que trabajo» sigue en indicativo."),
      fb("Completa.", "El pueblo en el que ___ de niño era muy pequeño. (vivir, yo)", "vivía", "«De niño» describe una etapa habitual del pasado → imperfecto (vivía)."),
      fb("Completa.", "La tienda en la que ___ el vestido ya había cerrado. (comprar, yo)", "compré", "La compra es un hecho puntual y terminado → indefinido (compré); «ya había cerrado» marca lo que pasó antes de otro momento pasado."),
      toEs("Espero que encuentras las gafas que perdiste.", "Espero que encuentres las gafas que perdiste.", "«Espero que» pide subjuntivo (encuentres); la relativa «que perdiste» sigue en indicativo porque cuenta un hecho real.", ["Espero que encuentres las gafas que has perdido."], "Corrige la frase."),
      toEs("El año pasado compramos un coche. El coche ya no funciona.", "El coche que compramos el año pasado ya no funciona.", "Une las dos frases con que: la relativa conserva su tiempo (compramos, por «el año pasado») y la principal el suyo (funciona).", ["El coche que compramos el año pasado ya no anda.", "El carro que compramos el año pasado ya no funciona."], "Reescribe en una sola frase con que."),
      mc(
        "«Lo que ___ ayer me sorprendió.» (decir, tú)",
        ["dijiste", "digas", "dirás", "dices ayer"],
        0,
        "«Ayer» marca un momento terminado: indefinido, dijiste. «Digas» es subjuntivo, «dirás» es futuro y «dices ayer» mezcla presente y pasado."
      ),
      toEs("The friend I travelled with has moved to Berlin.", "La amiga con la que viajé se ha mudado a Berlín.", "La preposición va delante (con la que) y el cambio reciente en perfecto: se ha mudado.", ["El amigo con el que viajé se ha mudado a Berlín.", "La amiga con quien viajé se ha mudado a Berlín."]),
    ]
  ),
  L(
    "relative-pronouns-drill-3",
    "b1d-cadena-dos-frases-una",
    "Cadena de transformaciones: de dos frases a una",
    "Une dos frases en una sin repetir el sustantivo: elige el relativo (que, quien, el que, donde, lo que) y pon la preposición delante cuando haga falta.",
    "6 min",
    [
      sec(
        "Recuerda la regla: el relativo ocupa el sitio del sustantivo repetido",
        [
          "Para unir dos frases que comparten un sustantivo, localiza la palabra repetida y sustitúyela por un relativo. Si en su frase esa palabra llevaba preposición (hablar CON la mujer, dormir EN la cama), la preposición viaja con el relativo y se pone delante: con la que, en la que. El artículo concuerda con el sustantivo (el/la/los/las que).",
          "En inglés la preposición se queda al final (the woman I talked to); en español nunca se queda sola al final. Y si lo que se retoma es toda la frase anterior, no un sustantivo, el relativo es «lo que».",
        ],
        [
          ["Hablé con una mujer. La mujer era médica. → La mujer con la que hablé era médica.", "The woman I talked to was a doctor. (hablar con → con la que)"],
          ["Vimos una película. La película era lenta. → La película que vimos era lenta.", "The film we saw was slow. (sin preposición → que)"],
          ["Llegó tarde. Eso me molestó. → Llegó tarde, lo que me molestó.", "He arrived late, which annoyed me. (toda la idea → lo que)"],
        ],
        [
          fb("Transforma las dos frases en una.", "Compré una lámpara. La lámpara no funciona. → La lámpara ___ compré no funciona.", "que", "«Que» sustituye a «la lámpara», objeto de compré, sin preposición."),
          mc(
            "«Viajé con unos amigos. Los amigos son de Perú.» → una sola frase:",
            ["Los amigos con los que viajé son de Perú.", "Los amigos que viajé con son de Perú.", "Los amigos que viajé son de Perú.", "Los amigos con lo que viajé son de Perú."],
            0,
            "Se viaja CON alguien: la preposición va delante del relativo y el artículo concuerda con «amigos»: con los que. Dejar «con» al final es un calco del inglés, quitarla cambia el sentido y «lo que» es para ideas."
          ),
        ]
      ),
    ],
    [
      fb("Transforma las dos frases en una.", "Escribí a un amigo. El amigo vive en Cuba. → El amigo al ___ escribí vive en Cuba.", "que", "Se escribe a alguien: a + el que → al que."),
      fb("Transforma las dos frases en una.", "Duermo en una cama. La cama es incómoda. → La cama en la ___ duermo es incómoda.", "que", "Se duerme en una cama: en la que."),
      { ...fb("Transforma las dos frases en una.", "Trabajo con unos compañeros. Los compañeros son de México. → Los compañeros con ___ trabajo son de México.", "los que", "Se trabaja con alguien: con + artículo que concuerda con «los compañeros»: con los que."), altAnswers: ["quienes", "los cuales"] },
      fb("Transforma las dos frases en una.", "Perdí el tren. Eso me hizo llegar tarde. → Perdí el tren, ___ me hizo llegar tarde.", "lo que", "«Lo que» retoma toda la idea anterior (perder el tren)."),
      { ...fb("Transforma las dos frases en una.", "Te presento a Juan. Juan es mi primo. → Te presento a Juan, ___ es mi primo.", "que", "Para una persona entre comas vale «que» (o «quien»)."), altAnswers: ["quien", "el cual"] },
      fb("Transforma las dos frases en una.", "Siempre hablo de un tema. El tema es la música. → El tema del ___ siempre hablo es la música.", "que", "Se habla de un tema: de + el que → del que."),
      toEs("The house we live in is very old.", "La casa en la que vivimos es muy antigua.", "La preposición del final en inglés (live in) va delante del relativo: en la que.", ["La casa donde vivimos es muy vieja."]),
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
        "Recuerda la regla: la preposición viene del verbo y va delante",
        [
          "Muchos verbos llevan siempre su preposición: hablar de, pensar en, soñar con, confiar en, depender de. Cuando el sustantivo pasa a ser antecedente de una relativa, esa preposición no desaparece ni se queda al final como en inglés (the house I dream of): se coloca delante del relativo, y el artículo concuerda con el antecedente.",
          "Por eso, para elegir, pregúntate: ¿qué preposición pide el verbo de la relativa? Hablar de → del que; pensar en → en la que; confiar en (persona) → en quien.",
        ],
        [
          ["Es la casa con la que siempre he soñado.", "It's the house I've always dreamed of. (soñar con → con la que)"],
          ["Es un tema del que no hablo nunca.", "It's a subject I never talk about. (hablar de → del que)"],
          ["Son personas en quienes confío.", "They're people I trust. (confiar en + personas → en quienes)"],
        ],
        [
          { ...fb("Rápido.", "Es el viaje con el ___ sueño desde niño. (soñar con)", "que", "Se sueña con algo: con + el que, concordando con «el viaje»."), altAnswers: ["cual"] },
          mc(
            "«Es la película ___ me acuerdo cada Navidad.» (acordarse de)",
            ["de la que", "que", "en la que", "la que"],
            0,
            "Acordarse pide «de»: la preposición va delante y el artículo concuerda con «película»: de la que. Sin preposición la frase queda incompleta, y «en la que» usa una preposición que el verbo no pide."
          ),
        ]
      ),
    ],
    [
      { ...fb("Rápido.", "Es la persona en ___ más confío. (confiar en, persona)", "quien", "Se confía en alguien: tras preposición, con una persona, vale «quien»: en quien."), altAnswers: ["la que", "la cual"] },
      { ...fb("Rápido.", "Es un tema del ___ no se habla. (hablar de)", "que", "Se habla de algo: de + el que → del que."), altAnswers: ["cual"] },
      { ...fb("Rápido.", "Son los problemas en los ___ pienso cada noche. (pensar en)", "que", "Se piensa en algo: en + los que, concordando con «los problemas»."), altAnswers: ["cuales"] },
      { ...fb("Rápido.", "Es la gente de la ___ dependo. (depender de)", "que", "Se depende de algo o alguien: de + la que, concordando con «la gente»."), altAnswers: ["cual"] },
      fb("Rápido.", "Es el puesto ___ que me presenté. (presentarse a)", "al", "Uno se presenta a un puesto: a + el → al que."),
      { ...fb("Rápido.", "Es la chica de la ___ me enamoré. (enamorarse de)", "que", "Uno se enamora de alguien: de + la que, concordando con «la chica»."), altAnswers: ["cual"] },
      mc(
        "«Es el equipo ___ juego desde hace años.» (jugar en)",
        ["en el que", "que", "del que", "lo que"],
        0,
        "Se juega en un equipo: la preposición va delante del relativo: en el que. «Que» solo pierde la preposición, «del que» usa la preposición equivocada y «lo que» es para ideas."
      ),
      toEs("It's the book I told you about.", "Es el libro del que te hablé.", "Hablar de algo → del que; la preposición va delante del relativo.", ["Es el libro del cual te hablé.", "Es el libro de que te hablé.", "Es el libro del que te he hablado.", "Este es el libro del que te hablé.", "Este es el libro del que te he hablado.", "Ese es el libro del que te hablé."]),
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
        "Recuerda la regla: en la respuesta, el artículo ocupa el lugar del sustantivo",
        [
          "A una pregunta como «¿Cuál es tu coche?» no se responde repitiendo «el coche que…»: el sustantivo ya se sabe, así que el artículo lo sustituye y conserva su género y número (el que, la que, los que, las que). Lo que sigue al relativo es el dato que lo distingue de los demás.",
          "Si la pregunta no busca un objeto concreto sino «qué cosa» (¿Qué te dijo? ¿Qué quieres?), no hay sustantivo que sustituir y se responde con «lo que».",
        ],
        [
          ["—¿Cuál es tu hermana? —La que lleva el vestido rojo.", "Which one is your sister? — The one in the red dress. (hermana → la que)"],
          ["—¿Qué guantes son tuyos? —Los que están en la mesa.", "Which gloves are yours? — The ones on the table. (guantes → los que)"],
          ["—¿Qué te pidió? —Lo que le prometí.", "What did he ask you for? — What I promised him. (sin sustantivo → lo que)"],
        ],
        [
          fb("Responde.", "—¿Cuál es tu maleta? —___ que tiene una cinta verde.", "La", "Para señalar una entre varias, el artículo concuerda con «maleta»: la que."),
          mc(
            "«—¿Cuáles son tus llaves? —___ tienen un llavero azul.»",
            ["Las que", "Los que", "Lo que", "Que"],
            0,
            "«Llaves» es femenino plural, así que el artículo que lo sustituye es «las»: las que. «Los que» no concuerda, «lo que» no sustituye sustantivos y «que» solo no puede abrir la respuesta."
          ),
        ]
      ),
    ],
    [
      fb("Responde.", "—¿Cuál es tu profesor? —___ que está hablando con el director.", "El", "El artículo concuerda con «profesor»: el que."),
      fb("Responde.", "—¿Qué zapatos compraste? —___ que vimos ayer.", "Los", "El artículo concuerda con «zapatos» (masculino plural): los que."),
      fb("Responde.", "—¿Qué fotos te gustan? —___ que hiciste en la playa.", "Las", "El artículo concuerda con «fotos» (femenino plural): las que."),
      fb("Responde.", "—¿Quiénes son tus primos? —Los ___ están jugando al fútbol.", "que", "«Los que» = the ones who, concordando con «primos»."),
      fb("Responde.", "—¿Qué te regaló? —___ que yo quería: un libro.", "Lo", "«Lo que» = what: se refiere a algo sin nombrar todavía (un libro)."),
      mc(
        "«—¿Cuál es tu piso? —___ tiene balcón.»",
        ["El que", "Lo que", "Quien", "Que"],
        0,
        "Para distinguir un piso entre varios se usa artículo + que, concordando con «piso»: el que tiene balcón. «Lo que» es para ideas, «quien» para personas y «que» solo no puede empezar así la respuesta."
      ),
      toEs("—Which one is your bike? —The one next to the door.", "—¿Cuál es tu bici? —La que está al lado de la puerta.", "«The one» = artículo + que, concordando con «bici»: la que.", ["—¿Cuál es tu bicicleta? —La que está junto a la puerta."]),
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
        "Recuerda la regla: cada relativo depende de su propia frase",
        [
          "En un anuncio, cada relativa añade un dato al sustantivo que la precede. Para elegir el relativo, piensa en cómo funciona ese sustantivo dentro de la relativa: si es sujeto u objeto sin preposición → que; si el verbo pide preposición (se ve DESDE la terraza, está EN el edificio) → preposición + el/la que; si es una persona tras preposición → a quien, con quien; si no hay sustantivo → lo que. Entre comas, la relativa añade información extra (la cocina, que es nueva…).",
        ],
        [
          ["Un salón que da a la calle.", "A living room that faces the street. (sujeto → que)"],
          ["Un balcón desde el que se ven las montañas.", "A balcony from which you can see the mountains. (verse desde → desde el que)"],
          ["El portero, con quien puedes dejar paquetes, es muy amable.", "The doorman, with whom you can leave parcels, is very kind. (persona + con → con quien)"],
        ],
        [
          mc(
            "«Un patio ___ juegan los niños del edificio.»",
            ["en el que", "que", "lo que", "quien"],
            0,
            "Los niños juegan EN el patio: la preposición va delante, con el artículo masculino de «patio»: en el que (o donde). «Que» solo pierde el lugar, «lo que» es para ideas y «quien» para personas."
          ),
        ]
      ),
      sec(
        "El anuncio",
        "«Se alquila piso que tiene tres dormitorios y una terraza desde la que se ve el mar. La cocina, que es nueva, está equipada. El edificio en el que está tiene ascensor. Lo que más les gusta a los inquilinos es la luz.»",
        [],
        [
          mc(
            "¿Qué se ve desde la terraza?",
            ["el mar", "la montaña", "el parque", "la ciudad"],
            0,
            "El texto habla de la terraza «desde la que se ve el mar». No menciona la montaña, el parque ni la ciudad."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "Se alquila piso ___ tiene tres dormitorios.", "que", "«Que» retoma «piso», sujeto de tiene; sin preposición basta «que»."),
      fb("Completa.", "Una terraza desde la ___ se ve el mar.", "que", "El mar se ve DESDE la terraza: la preposición y el artículo femenino ya están (desde la), solo falta «que»."),
      fb("Completa.", "La cocina, ___ es nueva, está equipada.", "que", "Para una cosa entre comas se usa «que»; «quien» solo serviría para una persona."),
      fb("Completa.", "El edificio en el ___ está tiene ascensor.", "que", "El piso está EN el edificio: en + el (masculino, como edificio) + que."),
      fb("Completa.", "___ más les gusta a los inquilinos es la luz.", "Lo que", "Sin antecedente, «lo que» se refiere a una idea: Lo que más les gusta…"),
      { ...fb("Completa.", "El dueño, a ___ puedes llamar a cualquier hora, es muy amable. (persona)", "quien", "Se llama a alguien: a + quien, para personas. (Con «el que» sería «al que», y el hueco ya lleva «a».)") },
      toEs("The bedroom I like most has a balcony.", "El dormitorio que más me gusta tiene balcón.", "El relativo omitido en inglés es obligatorio: el dormitorio que más me gusta.", ["El dormitorio que más me gusta tiene un balcón.", "La habitación que más me gusta tiene balcón.", "La habitación que más me gusta tiene un balcón.", "El cuarto que más me gusta tiene balcón.", "El cuarto que más me gusta tiene un balcón.", "La recámara que más me gusta tiene balcón.", "La recámara que más me gusta tiene un balcón."]),
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
        "Recuerda la regla: para describir un objeto, mira el verbo de la relativa",
        [
          "Cuando hablas de un objeto con historia, la relativa cuenta qué haces o hiciste con él. Si el objeto es directamente lo que regalaste, compraste o guardas, basta «que» (el reloj que me regaló mi abuelo). Si el verbo pide una preposición (guardar algo EN, separarse DE, aprender CON), esa preposición va delante del relativo con el artículo del objeto: la caja en la que, el libro del que, la guitarra con la que.",
          "Ojo: a veces el español usa otra preposición que el inglés (se bebe EN una taza, se gana CON una camiseta). Y para resumir una idea, lo que: lo que más me gusta de este anillo…",
        ],
        [
          ["El reloj que me regaló mi abuelo es de oro.", "The watch my grandfather gave me is gold. (regalar algo → que)"],
          ["Es el libro del que nunca me separo.", "It's the book I'm never apart from. (separarse de → del que)"],
          ["Tengo un cofre en el que guardo mis cartas.", "I have a chest I keep my letters in. (guardar en → en el que)"],
        ],
        [
          mc(
            "«Es el libro del ___ nunca me separo.»",
            ["que", "cual lo", "quien", "lo que"],
            0,
            "Uno se separa de algo: de + el que → del que nunca me separo. «Cual lo» no es una estructura posible, «quien» es para personas y «lo que» es para ideas."
          ),
        ]
      ),
    ],
    [
      toEs("The watch my grandfather gave me still works.", "El reloj que me regaló mi abuelo todavía funciona.", "El relativo es obligatorio en español: el reloj que me regaló.", ["El reloj que me dio mi abuelo todavía funciona."]),
      toEs("The box I keep my letters in is under my bed.", "La caja en la que guardo mis cartas está debajo de mi cama.", "«Keep… in» → en la que, con la preposición delante.", ["La caja en que guardo mis cartas está debajo de mi cama.", "La caja donde guardo mis cartas está debajo de mi cama.", "La caja en la cual guardo mis cartas está debajo de mi cama.", "La caja en la que guardo mis cartas está debajo de la cama.", "La caja donde guardo mis cartas está debajo de la cama.", "La caja en la que guardo mis cartas está bajo mi cama.", "La caja en la que guardo mis cartas está abajo de mi cama."]),
      toEs("It's a song I always think about.", "Es una canción en la que siempre pienso.", "Pensar en algo → en la que; la preposición va delante.", ["Es una canción en la que pienso siempre.", "Es una canción en que siempre pienso.", "Es una canción en la cual siempre pienso.", "Es una canción en la que pienso todo el tiempo."]),
      fb("Completa con un relativo.", "___ más me gusta de este anillo es su historia.", "Lo que", "No hay un sustantivo detrás: lo que me gusta es una idea (= what), así que se usa el neutro «lo que», no «el que» ni «que»."),
      { ...fb("Completa.", "Es la guitarra con ___ aprendí a tocar.", "la que", "Se aprende con la guitarra: con + la que."), altAnswers: ["la cual"] },
      fb("Completa.", "Son las fotos de las ___ te hablé.", "que", "Se habla de algo: de + las que, concordando con «las fotos»."),
      wo("La bicicleta con la que fui al colegio sigue en el garaje.", "Se va al colegio CON la bici (en español se usa «con» o «en» para el medio): la preposición va delante del relativo, con el artículo femenino de «bicicleta».", "The bike I rode to school is still in the garage."),
      ms(
        "Marca las frases correctas sobre objetos con historia.",
        ["Es la taza en la que tomo el té.", "Es la foto que siempre hablo de.", "Es el anillo que me dio mi madre.", "Es el cuaderno lo que escribo mis ideas."],
        [0, 2],
        "La preposición del verbo va delante del relativo (tomar el té en una taza → en la que), y sin preposición basta «que» (dar algo → que me dio). «Que siempre hablo de» deja la preposición al final como en inglés (lo correcto es «de la que siempre hablo»), y «lo que» no puede referirse a «el cuaderno» (sería «en el que escribo»)."
      ),
      mc(
        "«Es el jersey ___ me casé.» (casarse con)",
        ["con el que", "que", "lo que", "en que"],
        0,
        "Uno se casa CON algo puesto: con + el (jersey) + que. «Que» solo pierde la preposición, «lo que» es para ideas y «en que» usa la preposición equivocada."
      ),
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
        "Recuerda la regla: donde ya lleva dentro el «en»",
        [
          "«Donde» significa «en + el lugar que», por eso equivale a «en el que / en la que / en que» cuando el antecedente es un lugar: la ciudad donde nací = la ciudad en la que nací. Lo que no se puede hacer es quitar la idea de lugar: «la ciudad que nací» es incorrecto, porque se nace EN un sitio.",
          "Si el verbo pide otra preposición, esta va delante de cualquiera de las dos formas: por donde = por el que, desde donde = desde el que, adonde = al que (ir a).",
        ],
        [
          ["El pueblo donde veraneo es precioso.", "The village where I spend the summer is lovely. (= en el que)"],
          ["La calle por la que paseamos estaba llena de gente.", "The street we walked along was full of people. (= por donde)"],
          ["El mirador desde donde se ve el lago está cerrado.", "The viewpoint from where you can see the lake is closed. (= desde el que)"],
        ],
        [
          fb("Cambia.", "La casa donde vivo. → La casa en la ___ vivo.", "que", "«Donde» equivale a «en + artículo + que»: en la que."),
          mc(
            "«El restaurante ___ cenamos ayer era caro.» ¿Qué opción NO es correcta?",
            ["que", "donde", "en el que", "en que"],
            0,
            "Se cena EN un restaurante, así que hace falta la idea de lugar: donde, en el que o en que. «Que» solo la pierde."
          ),
        ]
      ),
    ],
    [
      fb("Cambia.", "El hospital donde nací. → El hospital en el ___ nací.", "que", "«Donde» = en el que, concordando con «el hospital»."),
      fb("Cambia.", "La playa en la que nos bañamos. → La playa ___ nos bañamos.", "donde", "Para un lugar, «en la que» se puede decir «donde»."),
      fb("Cambia.", "El camino por el que vinimos. → El camino por ___ vinimos.", "donde", "«Por el que» (camino) equivale a «por donde»."),
      fb("Completa.", "Es la oficina ___ trabajo. (lugar, una palabra)", "donde", "Con un antecedente de lugar, «donde» equivale a «en la que» o «en que»: la oficina donde trabajo = la oficina en la que trabajo."),
      mc(
        "¿Cuál NO es correcta?",
        ["La ciudad que nací.", "La ciudad donde nací.", "La ciudad en la que nací.", "La ciudad en que nací."],
        0,
        "Se nace en una ciudad, así que falta la preposición: «La ciudad que nací» es incorrecta. «Donde», «en la que» y «en que» incluyen la idea de lugar."
      ),
      toEs("The café where we met has closed.", "La cafetería donde nos conocimos ha cerrado.", "«Where» = donde; un cambio reciente va en perfecto: ha cerrado.", ["La cafetería en la que nos conocimos ha cerrado.", "El café donde nos conocimos ha cerrado."]),
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
          fb("Completa.", "Todo ___ tengo te lo debo a ti.", "lo que", "«Todo lo que» = everything that."),
        ]
      ),
    ],
    [
      { ...fb("Completa.", "Es un amigo con ___ puedo contar siempre. (persona)", "quien", "Se cuenta con alguien: con + quien, para personas."), altAnswers: ["el que", "el cual"] },
      fb("Completa.", "Los vecinos ___ viven arriba hacen mucho ruido.", "que", "Sin preposición, el relativo es «que»: los vecinos que viven arriba."),
      fb("Completa.", "No me gusta ___ estás haciendo.", "lo que", "«Lo que» = what: No me gusta lo que estás haciendo."),
      { ...fb("Completa.", "Es la película de la ___ todo el mundo habla.", "que", "Hablar de → de la que."), altAnswers: ["cual"] },
      { ...fb("Completa.", "El jefe, ___ nunca sonríe, hoy estaba contento. (persona)", "quien", "Para una persona entre comas vale «quien» (o «que»)."), altAnswers: ["que", "el cual"] },
      { ...fb("Completa.", "La silla en ___ estás sentado está rota.", "la que", "Se está sentado en una silla: en la que."), altAnswers: ["que", "la cual"] },
      mc(
        "«Me regaló un libro, ___ me hizo mucha ilusión.» (el relativo se refiere a todo el hecho de que me lo regalara, no solo al libro)",
        ["lo que", "que", "el que", "quien"],
        0,
        "«Lo que» retoma toda la idea anterior (que me regalara un libro): lo que me hizo ilusión. «Que» y «el que» se referirían a «un libro», y «quien» a una persona."
      ),
      toEs("That's exactly what I wanted.", "Eso es exactamente lo que quería.", "«What I wanted» = lo que quería.", ["Es justo lo que quería.", "Eso es justo lo que quería.", "Es exactamente lo que quería.", "Eso es exactamente lo que yo quería."]),
    ]
  ),
  L(
    "passive-voice-se-1",
    "b1d-patron-se-vende-se-venden",
    "Práctica de patrones: se vende / se venden",
    "Un solo marco, muchos sustantivos: el verbo sigue al sustantivo en número.",
    "7 min",
    [
      sec(
        "Recuerda la regla: el sustantivo manda",
        [
          "Recuerda la regla: en el se pasivo el verbo va en tercera persona y concuerda con el sustantivo: se vende una casa, se venden dos casas. ¿Por qué? Porque ese sustantivo es el sujeto gramatical (dos casas se venden); quien vende no aparece, así que no cuenta.",
          "Dos casos que engañan: con dos sustantivos unidos por «y», plural (se arreglan relojes y móviles); con un infinitivo detrás, singular, porque una acción no tiene número (se prohíbe aparcar).",
        ],
        [
          ["Se alquila un apartamento en el centro.", "An apartment in the center for rent. (un apartamento → singular)"],
          ["Se alquilan habitaciones para estudiantes.", "Rooms for students for rent. (habitaciones → plural)"],
          ["Se arreglan relojes y móviles.", "Watches and phones repaired. (dos sustantivos → plural)"],
          ["Se prohíbe aparcar en la puerta.", "No parking at the door. (aparcar es una acción → singular)"],
          ["Ayer se vendieron todas las entradas.", "All the tickets were sold yesterday. (también en pasado concuerda)"],
        ],
        [
          fb("Completa.", "Se ___ patinetes eléctricos. (reparar)", "reparan", "«Patinetes» es el sujeto y es plural → se reparan."),
          fb("Completa.", "Para este trabajo se ___ tener carné de conducir. (requerir)", "requiere", "Detrás va un infinitivo (tener), que es una acción y no tiene plural: el verbo queda en singular, se requiere."),
        ]
      ),
    ],
    [
      fb("Mismo marco.", "Se ___ un coche en buen estado. (vender)", "vende", "«Un coche» es singular, así que el verbo también: se vende."),
      fb("Mismo marco.", "Se ___ muebles antiguos. (comprar)", "compran", "«Muebles» es plural: el verbo concuerda con él, se compran."),
      fb("Mismo marco.", "Se ___ clases de guitarra. (dar)", "dan", "«Clases» es plural → se dan. No importa quién da las clases: no aparece."),
      fb("Mismo marco.", "Se ___ camarero con experiencia. (buscar)", "busca", "«Camarero» es singular (en los anuncios se omite el artículo) → se busca."),
      fb("Mismo marco.", "Se ___ ordenadores y móviles. (reparar)", "reparan", "Dos sustantivos unidos por «y» suman un sujeto plural → se reparan."),
      fb("Mismo marco.", "Se ___ una habitación luminosa. (alquilar)", "alquila", "«Una habitación» es singular → se alquila."),
      mc(
        "Se ___ zapatos a mano en este taller.",
        ["hacen", "hace", "hacemos", "hago"],
        0,
        "En el se pasivo el verbo concuerda con lo que se hace: zapatos (plural) → se hacen. «Se hace» no concuerda, y «hacemos» o «hago» no van con este se."
      ),
      toEs("Used books are bought here.", "Aquí se compran libros usados.", "En el se pasivo el verbo concuerda con «libros»: se compran.", ["Se compran libros usados aquí."]),
    ]
  ),
  L(
    "passive-voice-se-1",
    "b1d-pares-pasivo-impersonal",
    "Pares mínimos: se pasivo o se impersonal",
    "Dos frases casi iguales: una con sustantivo que manda, otra sin él.",
    "7 min",
    [
      sec(
        "Recuerda la regla: ¿hay un sustantivo que mande?",
        [
          "Recuerda la regla: mira lo que va con el verbo. Si es una cosa sin preposición, esa cosa es el sujeto y el verbo concuerda con ella: se venden flores (se pasivo). Si no hay ninguna cosa (se vive bien aquí) o lo que hay lleva preposición (se habla de política), no hay sujeto y el verbo queda en singular (se impersonal).",
          "El caso que engaña: las personas con «a». «A los vecinos» lleva preposición, así que no puede ser sujeto: se ayuda a los vecinos, siempre en singular, aunque sean muchos.",
        ],
        [
          ["Se come bien en este pueblo.", "You eat well in this town. (no hay sustantivo → singular)"],
          ["Se comen muchas frutas en verano.", "A lot of fruit is eaten in summer. (frutas manda → plural)"],
          ["Se ayuda a los vecinos mayores.", "Elderly neighbors are helped. (persona con «a» → singular)"],
          ["Se habla de fútbol en todas las mesas.", "People talk about football at every table. (de fútbol lleva preposición → singular)"],
        ],
        [
          mc(
            "«Se ___ muy tranquilo en el campo.» (vivir)",
            ["vive", "viven", "vivimos", "vivo"],
            0,
            "Sin un sustantivo con el que concordar, el se impersonal va en singular: se vive tranquilo. «Se viven» sería plural sin motivo, y «vivimos» o «vivo» no van con este se."
          ),
          fb("Completa.", "En esta empresa se ___ a los empleados nuevos durante un mes. (formar)", "forma", "«A los empleados» son personas con «a»: no son sujeto, así que el verbo queda en singular, se forma. «Se forman» sería el error de concordar con un complemento con preposición."),
        ]
      ),
    ],
    [
      fb("Par A.", "En esta ciudad se ___ mucho. (trabajar)", "trabaja", "No hay sustantivo sujeto («mucho» es un adverbio): se impersonal en singular."),
      fb("Par B.", "En esta fábrica se ___ muchas horas extra. (trabajar)", "trabajan", "«Muchas horas extra» es un sustantivo plural sin preposición: es el sujeto, y el verbo va en plural."),
      fb("Par A.", "Aquí se ___ tarde. (cenar)", "cena", "«Tarde» es un adverbio, no un sujeto: se impersonal en singular."),
      fb("Par B.", "Aquí se ___ platos muy picantes. (cenar)", "cenan", "«Platos» es el sujeto y es plural → se cenan."),
      fb("Par A.", "En este hospital se ___ a los pacientes con cariño. (tratar)", "trata", "Personas con «a»: no son sujeto, así que el verbo queda en singular aunque sean muchos."),
      fb("Par B.", "En este hospital se ___ enfermedades raras. (tratar)", "tratan", "«Enfermedades» son cosas sin preposición: sujeto plural → se tratan."),
      ms(
        "¿Qué frases son impersonales (sin sustantivo que concuerde)?",
        ["Se duerme mal con este calor.", "Se habla de política en la cena.", "Se venden entradas en la puerta.", "Se necesitan voluntarios."],
        [0, 1],
        "«Se duerme mal» y «Se habla de política» no tienen sustantivo sujeto («de política» lleva preposición): son impersonales. En «Se venden entradas» y «Se necesitan voluntarios» el verbo concuerda con un sustantivo plural: son se pasivo."
      ),
      toEs("People sleep very well here.", "Aquí se duerme muy bien.", "«People» en general sin sustantivo sujeto = se impersonal en singular: se duerme.", ["Se duerme muy bien aquí."]),
    ]
  ),
  L(
    "passive-voice-se-1",
    "b1d-cadena-ser-a-se",
    "Cadena de transformaciones: de ser + participio a se",
    "La pasiva formal de los periódicos convertida en la pasiva de la calle.",
    "8 min",
    [
      sec(
        "Recuerda la regla: el tiempo de ser pasa al verbo",
        [
          "Recuerda la regla: para pasar de la pasiva con ser a la pasiva con se, el tiempo de «ser» pasa al verbo principal y el participio desaparece: fueron vendidas → se vendieron; serán vendidas → se venderán; han sido vendidas → se han vendido. El verbo sigue concordando con la cosa (singular o plural).",
          "¿Por qué desaparece el agente (por…)? Porque el se pasivo existe justo para no decir quién lo hace. Si quieres nombrarlo, usa la pasiva con ser o la activa: el alcalde inauguró el parque.",
        ],
        [
          ["El puente fue construido en 1920. → Se construyó el puente en 1920.", "The bridge was built in 1920. (fue → indefinido)"],
          ["Los pedidos son enviados en 24 horas. → Se envían los pedidos en 24 horas.", "Orders are sent within 24 hours. (son → presente plural)"],
          ["La obra será terminada en mayo. → Se terminará la obra en mayo.", "The work will be finished in May. (será → futuro)"],
          ["Los datos han sido revisados. → Se han revisado los datos.", "The data have been checked. (han sido → perfecto; el participio ya no concuerda)"],
        ],
        [
          fb("Transforma.", "Los resultados fueron publicados ayer. → Se ___ los resultados ayer.", "publicaron", "«Fueron» es indefinido plural, así que el verbo con se toma ese tiempo y ese número: se publicaron."),
          fb("Transforma.", "La sala será pintada esta semana. → Se ___ la sala esta semana.", "pintará", "«Será» es futuro singular: con se, se pintará (concuerda con «la sala»)."),
        ]
      ),
    ],
    [
      fb("Transforma.", "La reunión fue cancelada. → Se ___ la reunión.", "canceló", "Con se pasivo el verbo concuerda con «la reunión» (singular): fue cancelada → se canceló."),
      fb("Transforma.", "Los árboles son cortados cada invierno. → Se ___ los árboles cada invierno.", "cortan", "«Son cortados» es presente plural; con se, el verbo concuerda con «los árboles»: se cortan."),
      fb("Transforma.", "La carta es escrita a mano. → Se ___ la carta a mano.", "escribe", "«Es escrita» es presente singular; con se, concuerda con «la carta»: se escribe."),
      fb("Transforma.", "Las calles fueron limpiadas por la noche. → Se ___ las calles por la noche.", "limpiaron", "«Fueron limpiadas» es indefinido plural; con se, concuerda con «las calles»: se limpiaron. «Por la noche» indica el tiempo, no un agente."),
      fb("Transforma.", "El museo es visitado por miles de turistas. → Se ___ el museo; miles de turistas vienen cada año.", "visita", "«Es visitado» es presente singular; con se, concuerda con «el museo»: se visita. El agente (miles de turistas) tiene que salir de la frase con se."),
      mc(
        "«Los premios serán entregados mañana.» Con se:",
        ["Se entregarán los premios mañana.", "Se entregará los premios mañana.", "Se entregaron los premios mañana.", "Se entregan los premios ayer."],
        0,
        "«Serán entregados» es futuro plural, así que con se: se entregarán los premios. «Se entregará» no concuerda con «los premios», y «entregaron» o «entregan ayer» cambian el tiempo."
      ),
      wo("Se inauguraron dos parques nuevos el año pasado.", "Se + indefinido plural, porque concuerda con «dos parques».", "Two new parks were opened last year."),
      toEs("The windows were broken during the storm.", "Se rompieron las ventanas durante la tormenta.", "Se pasivo en indefinido, concordando con «las ventanas»: se rompieron.", ["Las ventanas se rompieron durante la tormenta.", "Las ventanas fueron rotas durante la tormenta."]),
    ]
  ),
  L(
    "passive-voice-se-2",
    "b1d-circuito-anuncios-trabajo",
    "Circuito: anuncios de trabajo",
    "Se busca, se ofrece, se requiere: el lenguaje fijo de las ofertas de empleo.",
    "8 min",
    [
      sec(
        "Recuerda la regla: cada verbo mira lo que viene después",
        [
          "Recuerda la regla: un anuncio de trabajo es una cadena de se pasivos. Se busca dependiente. Se ofrece contrato indefinido. Se requieren dos años de experiencia. Se valorarán idiomas. Cada verbo concuerda con lo que viene después: un dependiente → se busca; dos años → se requieren.",
          "¿Por qué este estilo? Al lector no le importa quién busca (la empresa ya firma el anuncio): le importa qué se pide y qué se ofrece. Por eso esas cosas son el sujeto. Ojo con los incontables, que van en singular aunque en inglés no lo parezca: se valorará experiencia, se ofrece formación.",
        ],
        [
          ["Se requieren conocimientos de inglés.", "Knowledge of English is required. (conocimientos → plural)"],
          ["Se ofrece buen ambiente de trabajo.", "A good work environment is offered. (ambiente → singular)"],
          ["Se valorará experiencia previa.", "Previous experience will be valued. (incontable → singular, en futuro)"],
        ],
        [
          fb("Completa.", "Se ___ carné de conducir. (requerir)", "requiere", "«Carné» es singular → se requiere."),
          fb("Completa.", "Se ___ formación a cargo de la empresa. (ofrecer)", "ofrece", "«Formación» es incontable y gramaticalmente singular → se ofrece, aunque en inglés pienses en «training sessions»."),
        ]
      ),
    ],
    [
      fb("Estación 1.", "Se ___ recepcionista para hotel. (buscar)", "busca", "Una sola persona (recepcionista, sin artículo como en los anuncios) → singular: se busca."),
      fb("Estación 1.", "Se ___ dos cocineros para el verano. (necesitar)", "necesitan", "«Dos cocineros» es plural → se necesitan."),
      fb("Estación 2.", "Se ___ salario competitivo. (ofrecer)", "ofrece", "«Salario» es singular → se ofrece."),
      fb("Estación 2.", "Se ___ horarios flexibles. (ofrecer)", "ofrecen", "«Horarios» es plural → se ofrecen."),
      fb("Estación 3.", "Se ___ experiencia en ventas. (valorar, futuro)", "valorará", "«Experiencia» es singular → futuro singular: se valorará."),
      fb("Estación 3.", "Se ___ idiomas y disponibilidad para viajar. (valorar, futuro)", "valorarán", "Dos sustantivos unidos por «y» (idiomas y disponibilidad) → futuro plural: se valorarán."),
      mt(
        "Relaciona la expresión con su significado.",
        [
          ["Se requiere", "It is required"],
          ["Se ofrece", "It is offered"],
          ["Se valorará", "It will be valued"],
          ["Se busca", "Wanted"],
        ],
        "Fórmulas fijas de los anuncios: se + verbo en tercera persona, que concuerda con lo que se pide u ofrece."
      ),
      toEs("Waiters with experience are needed.", "Se necesitan camareros con experiencia.", "En el se pasivo el verbo concuerda con «camareros» (plural): se necesitan.", ["Se necesitan meseros con experiencia."]),
    ]
  ),
  L(
    "passive-voice-se-2",
    "b1d-elige-explica-se-negocios",
    "Elige y explica: el se en la empresa",
    "Informes, reuniones y ventas: elige la forma y di por qué.",
    "7 min",
    [
      sec(
        "Recuerda la regla: pregúntate dos cosas",
        [
          "Recuerda la regla. 1) ¿Hay un sustantivo sin preposición después del verbo? Es el sujeto → el verbo concuerda con él (se firmaron los contratos). 2) ¿No lo hay, lleva preposición (se habla de despidos) o es una persona con «a» (se contrató a tres personas)? → singular.",
          "¿Por qué funciona? Un sujeto nunca lleva preposición. Si lo que sigue al verbo lleva «a» o «de», no puede ser el sujeto, así que el verbo no tiene con qué concordar y se queda en singular. La regla vale en todos los tiempos: se han vendido, se avisará, se contrató.",
        ],
        [
          ["Se firmaron los contratos ayer.", "The contracts were signed yesterday. (los contratos → plural)"],
          ["Se contrató a tres personas nuevas.", "Three new people were hired. (a + personas → singular)"],
          ["Se habla de cerrar la sucursal.", "There's talk of closing the branch. (de + … → singular)"],
        ],
        [
          mc(
            "«Se ___ a dos ingenieros este mes.» (contratar)",
            ["contrató", "contrataron", "contratamos", "contraté"],
            0,
            "Cuando el se va con personas precedidas de «a» (a dos ingenieros), el verbo queda en singular: se contrató. «Se contrataron a» es un error frecuente, y «contratamos» o «contraté» no van con este se."
          ),
          fb("Completa.", "Este año se ___ tres tiendas nuevas. (inaugurar, perfecto)", "han inaugurado", "«Tres tiendas» va sin preposición: es el sujeto, plural → se han inaugurado. El auxiliar también concuerda."),
        ]
      ),
    ],
    [
      mc(
        "«En la reunión se ___ los presupuestos del año.»",
        ["aprobaron", "aprobó", "aprobamos", "aprobé"],
        0,
        "«Los presupuestos» va sin preposición, así que es el sujeto y el verbo concuerda en plural: se aprobaron. «Se aprobó» no concuerda, y «aprobamos» o «aprobé» no van con este se."
      ),
      mc(
        "«En la reunión se ___ de los presupuestos.»",
        ["habló", "hablaron", "hablamos", "hablé"],
        0,
        "«De los presupuestos» lleva preposición: no es sujeto, así que el verbo queda en singular (se impersonal): se habló. «Se hablaron» concordaría con un sujeto que no existe."
      ),
      mc(
        "«Este trimestre se ___ más productos que nunca.»",
        ["han vendido", "ha vendido", "hemos vendido", "he vendido"],
        0,
        "«Productos» es plural y es el sujeto, así que el verbo concuerda también en el perfecto: se han vendido. «Se ha vendido» no concuerda, y «hemos» o «he vendido» no van con este se."
      ),
      mc(
        "«Se ___ a los clientes antes de cambiar el precio.»",
        ["avisará", "avisarán", "avisaremos", "avisaré"],
        0,
        "Con personas precedidas de «a» (a los clientes), el verbo del se queda en singular: se avisará. «Se avisarán» es un error frecuente, y «avisaremos» o «avisaré» no van con este se."
      ),
      fb("Completa.", "Se ___ una nueva oficina en Valencia el mes pasado. (abrir)", "abrió", "«Una nueva oficina» es el sujeto y es singular → se abrió."),
      fb("Completa.", "Se ___ todos los correos antes de las diez. (responder)", "respondieron", "«Todos los correos» va sin preposición: sujeto plural → se respondieron."),
      toEs("A new manager was hired.", "Se contrató a un nuevo gerente.", "Con una persona precedida de «a», el verbo del se va en singular: se contrató a…", ["Se contrató a una nueva gerente.", "Se contrató a un gerente nuevo."]),
    ]
  ),
  L(
    "passive-voice-se-2",
    "b1d-cuento-informe-anual",
    "Cuento con huecos: el informe anual",
    "Un breve informe de empresa con el se en varios tiempos.",
    "8 min",
    [
      sec(
        "Recuerda la regla: dos decisiones para cada hueco",
        [
          "Recuerda la regla: en cada hueco decides dos cosas. El tiempo lo marca la expresión temporal: este año / desde enero → perfecto (se han abierto); en marzo / el año pasado → indefinido (se lanzó); el próximo año → futuro (se crearán); antes (costumbre) → imperfecto (se fabricaban). El número lo marca lo que sigue: cosa sin preposición → concuerda; persona con «a» o nada → singular.",
          "Lee el informe: «Este año se han abierto tres tiendas y se ha contratado a cuarenta empleados. En marzo se lanzó una aplicación nueva y se vendieron más de diez mil unidades. El próximo año se invertirá en formación y se crearán dos departamentos.»",
        ],
        [
          ["Se han abierto tres tiendas.", "Three shops have been opened. (este año → perfecto; tiendas → plural)"],
          ["Se invertirá en formación.", "There will be investment in training. (en formación lleva preposición → singular)"],
        ],
        [
          mc(
            "¿Por qué «se ha contratado» va en singular?",
            ["Porque «a cuarenta empleados» son personas con «a».", "Porque cuarenta es singular.", "Porque es pretérito perfecto.", "Porque el sujeto es «este año»."],
            0,
            "Cuando el se lleva personas con «a» (a cuarenta empleados), el verbo queda en singular. No es porque cuarenta sea singular (no lo es), ni por el tiempo verbal, ni porque «este año» sea el sujeto."
          ),
          mc(
            "«Antes se ___ todo a mano; ahora se usan máquinas.» (hacer)",
            ["hacía", "hizo", "ha hecho", "hará"],
            0,
            "«Antes» frente a «ahora» describe una costumbre del pasado → imperfecto: se hacía. «Se hizo» contaría una vez concreta, «se ha hecho» llega hasta hoy y «se hará» es futuro."
          ),
        ]
      ),
    ],
    [
      fb("Completa el informe.", "Este año se ___ tres tiendas. (abrir, perfecto)", "han abierto", "«Este año» → perfecto; «tiendas» es plural; abrir tiene participio irregular: abierto."),
      fb("Completa el informe.", "En marzo se ___ una aplicación nueva. (lanzar)", "lanzó", "«En marzo» es un momento cerrado → indefinido; «una aplicación» → singular."),
      fb("Completa el informe.", "Se ___ más de diez mil unidades. (vender, indefinido)", "vendieron", "«Unidades» es el sujeto y es plural → se vendieron."),
      fb("Completa el informe.", "El próximo año se ___ dos departamentos. (crear)", "crearán", "«El próximo año» → futuro; «dos departamentos» → plural."),
      fb("Completa el informe.", "El próximo año se ___ en formación. (invertir)", "invertirá", "«En formación» lleva preposición: no hay sujeto, así que singular: se invertirá."),
      ms(
        "¿Qué verbos del informe van en plural?",
        ["se han abierto", "se vendieron", "se lanzó", "se invertirá"],
        [0, 1],
        "En el se pasivo el verbo concuerda con el sustantivo: tiendas → se han abierto, unidades → se vendieron. «Se lanzó» concuerda con «una aplicación» (singular), y «se invertirá» es impersonal: no hay sustantivo que concuerde."
      ),
      toEs("Two new products will be launched next year.", "El próximo año se lanzarán dos productos nuevos.", "Se pasivo en futuro, concordando con «dos productos»: se lanzarán.", ["Se lanzarán dos productos nuevos el próximo año."]),
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
        "Recuerda la regla: en una receta, el ingrediente es el sujeto",
        [
          "Una receta no habla de una persona concreta, sino de lo que se hace con los ingredientes; por eso usa el se pasivo, y el verbo concuerda con el ingrediente: se corta la cebolla, se cortan los tomates. Si el ingrediente es incontable o se refiere a «todo», va en singular (se añade sal, se mezcla todo).",
          "Los verbos de cocina conservan sus cambios de raíz: hervir → se hierve, cocer → se cuece, freír → se fríe, servir → se sirve. Piensa en un plato que sabes hacer y descríbelo así.",
        ],
        [
          ["Primero se lavan las verduras.", "First the vegetables are washed."],
          ["Luego se calienta el aceite.", "Then the oil is heated."],
        ],
        [
          fb("Completa.", "Se ___ los huevos en un bol. (batir)", "baten", "Lo que se bate son «los huevos», plural: el verbo concuerda con ellos, se baten."),
          mc(
            "«Después se ___ las lentejas una hora.» (cocer)",
            ["cuecen", "cuece", "cocen", "cocemos"],
            0,
            "«Las lentejas» es plural, así que el verbo va en plural, y cocer cambia o → ue en la raíz: se cuecen. «Cuece» no concuerda, «cocen» olvida el cambio de raíz y «cocemos» no va con este se."
          ),
        ]
      ),
    ],
    [
      fb("Tu receta.", "Primero se ___ el agua. (hervir)", "hierve", "El agua → singular; hervir cambia e → ie."),
      fb("Tu receta.", "Después se ___ la pasta durante diez minutos. (cocer)", "cuece", "La pasta → singular; cocer cambia o → ue."),
      fb("Tu receta.", "Se ___ los tomates en trozos pequeños. (cortar)", "cortan", "El sujeto es «los tomates», plural: se cortan."),
      fb("Tu receta.", "Se ___ un poco de sal y pimienta. (añadir)", "añade", "«Un poco de sal y pimienta» funciona como una cantidad incontable: singular, se añade."),
      fb("Tu receta.", "Al final se ___ todo con queso. (servir)", "sirve", "Todo → singular; servir cambia e → i."),
      wo("Se fríen las patatas en aceite muy caliente.", "«Las patatas» es plural, así que el verbo también: se fríen (freír lleva tilde en la í).", "The potatoes are fried in very hot oil."),
      toEs("First the onion is chopped and then it is fried.", "Primero se corta la cebolla y luego se fríe.", "Se pasivo en singular dos veces, concordando con «la cebolla»: se corta, se fríe.", ["Primero se pica la cebolla y luego se fríe.", "Primero se corta la cebolla y después se fríe."]),
      toEs("Salt is added at the end.", "Se añade la sal al final.", "Se pasivo concordando con «la sal» (singular): se añade.", ["Al final se añade la sal.", "Se añade sal al final."]),
    ]
  ),
  L(
    "passive-voice-possessive-pronouns-drill-3",
    "b1d-ronda-rapida-se",
    "Ronda rápida: se pasivo e impersonal",
    "Decisiones rápidas con se: ¿singular o plural? Sigue al sustantivo en el se pasivo; queda en singular con infinitivo, sin sustantivo o con «a» + persona.",
    "5 min",
    [
      sec(
        "Recuerda la regla: ¿hay un sujeto plural?",
        [
          "Con «se», el verbo solo va en plural cuando lo sigue un sustantivo plural sin preposición, porque ese sustantivo es el sujeto gramatical (se admiten perros = perros son admitidos). En todos los demás casos no hay sujeto plural y el verbo queda en singular: con un sustantivo singular, con un infinitivo (se prohíbe fumar), sin sustantivo (se come bien) o con una persona introducida por «a» (se llama a los ganadores).",
        ],
        [
          ["Se prohíbe aparcar aquí.", "Parking is forbidden here. (infinitivo → singular)"],
          ["Se aceptan tarjetas.", "Cards accepted. (sustantivo plural → plural)"],
          ["Se avisará a los vecinos.", "The neighbours will be informed. (a + personas → singular)"],
        ],
        [
          mc(
            "«Se ___ tomar fotos en el museo.»",
            ["prohíbe", "prohíben", "prohibimos", "prohíbo"],
            0,
            "Lo que se prohíbe es un infinitivo (tomar fotos), que funciona como singular: se prohíbe. «Se prohíben» sería con un sustantivo plural, y «prohibimos» o «prohíbo» no van con este se."
          ),
        ]
      ),
    ],
    [
      fb("Rápido.", "Se ___ perros. (admitir)", "admiten", "«Perros» es un sustantivo plural sin preposición, el sujeto: se admiten."),
      fb("Rápido.", "Se ___ pagar con tarjeta. (poder)", "puede", "Lo que sigue es un infinitivo (pagar), que cuenta como singular: se puede."),
      fb("Rápido.", "No se ___ devoluciones. (aceptar)", "aceptan", "«Devoluciones» es el sujeto plural: no se aceptan."),
      fb("Rápido.", "Se ___ a los ganadores por teléfono. (llamar, futuro)", "llamará", "Los ganadores son personas introducidas por «a»: el se es impersonal y el verbo queda en singular, se llamará."),
      fb("Rápido.", "En verano se ___ más helados. (comer)", "comen", "«Helados» es el sujeto plural: se comen."),
      fb("Rápido.", "Se ___ muy bien en este restaurante. (comer)", "come", "No hay ningún sustantivo detrás («bien» es un adverbio): se impersonal, singular."),
      fb("Rápido.", "Se ___ las llaves en recepción. (dejar)", "dejan", "«Las llaves» es el sujeto plural: se dejan."),
      fb("Rápido.", "Se ___ hablar en voz baja en la biblioteca. (pedir)", "pide", "Infinitivo → singular; pedir cambia e → i."),
      mc(
        "«No se ___ menores de dieciocho años.» (permitir)",
        ["permite la entrada a", "permiten la entrada a", "permitimos a", "permito a"],
        0,
        "El sujeto es «la entrada» (singular): no se permite la entrada. «Se permiten» no concuerda, y «permitimos» o «permito» no van con este se."
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
        "Recuerda la regla: el cartel concuerda con lo que anuncia",
        [
          "En un cartel con «se», lo que se vende, se alquila o se busca es el sujeto gramatical, así que el verbo concuerda con ello: se alquila una habitación, se alquilan habitaciones. El error típico es dejar el verbo siempre en singular, o ponerlo en plural cuando el sustantivo es singular. Solo hay una excepción: con personas introducidas por «a» (se atiende a los clientes) y con infinitivos (se prohíbe fumar), el verbo va siempre en singular.",
        ],
        [
          ["Se alquila habitación.", "Room for rent. (singular → singular)"],
          ["Se reparan bicicletas.", "Bikes repaired. (plural → plural)"],
          ["Se atiende a domicilio.", "Home visits. (sin sujeto → singular)"],
        ],
        [
          mc(
            "Elige el cartel correcto para una tienda que compra libros viejos.",
            ["Se compran libros viejos.", "Se compra libros viejos.", "Se compramos libros viejos.", "Se compran libro viejo."],
            0,
            "«Libros viejos» es plural y es lo que se compra: se compran. «Se compra» no concuerda, «se compramos» mezcla persona y se, y «se compran libro viejo» pone el verbo en plural con un sustantivo singular."
          ),
        ]
      ),
      sec(
        "Los carteles de la calle",
        "«Se vende pisos. Se alquilan un local. Se busca camareros. Se habla inglés y francés.» Tres de estos carteles tienen un error de concordancia; uno está bien.",
        [],
        [
          mc(
            "¿Qué cartel está bien escrito?",
            ["Se habla inglés y francés.", "Se vende pisos.", "Se alquilan un local.", "Se busca camareros."],
            0,
            "«Se habla inglés y francés» es muy habitual en los carteles (se ve como un todo), aunque la norma estricta pide «se hablan»; es el único cartel sin un error claro. Los otros carteles no concuerdan: se venden pisos, se alquila un local, se buscan camareros."
          ),
        ]
      ),
    ],
    [
      toEs("Se vende pisos.", "Se venden pisos.", "El verbo concuerda con «pisos» (plural): se venden.", [], "Corrige el cartel."),
      toEs("Se alquilan un local.", "Se alquila un local.", "El verbo concuerda con «un local» (singular): se alquila.", [], "Corrige el cartel."),
      toEs("Se busca camareros.", "Se buscan camareros.", "El verbo concuerda con «camareros» (plural): se buscan.", [], "Corrige el cartel."),
      toEs("Se arreglan un reloj en diez minutos.", "Se arregla un reloj en diez minutos.", "El verbo concuerda con «un reloj» (singular): se arregla.", [], "Corrige el cartel."),
      toEs("Se necesita voluntarios para el sábado.", "Se necesitan voluntarios para el sábado.", "El verbo concuerda con «voluntarios» (plural): se necesitan.", [], "Corrige el cartel."),
      toEs("Se atienden a los clientes por orden de llegada.", "Se atiende a los clientes por orden de llegada.", "Con personas precedidas de «a», el verbo queda en singular: se atiende a los clientes.", [], "Corrige el cartel."),
      ms(
        "¿Qué carteles son correctos?",
        ["Se reparan bicicletas.", "Se hacen fotocopias.", "Se regala gatitos.", "Se cierran la puerta a las diez."],
        [0, 1],
        "En el se pasivo el verbo concuerda con el sustantivo plural: se reparan bicicletas, se hacen fotocopias. «Se regala gatitos» debería ser «se regalan», y «Se cierran la puerta» debería ser «se cierra»."
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
        "Recuerda la regla: las costumbres se cuentan con se",
        [
          "Para hablar de lo que hace la gente en general, sin un sujeto concreto, el español usa «se». Si el verbo no tiene un sustantivo detrás (cenar, salir, vivir), el se es impersonal y el verbo va en singular: se cena tarde, se sale mucho. Si hay un sustantivo que recibe la acción, el verbo concuerda con él: se toma café, se toman tapas.",
          "Al escribir el dictado, fíjate en esa concordancia: muchas veces la única diferencia que oyes es una -n final.",
        ],
        [
          ["En mi ciudad se cena muy tarde.", "In my city people have dinner very late."],
          ["Los domingos se come en familia.", "On Sundays people eat with family."],
        ],
        [
          wo("Aquí se sale mucho los fines de semana.", "«Salir» no tiene un sustantivo con el que concordar: es se impersonal y el verbo va en singular, «se sale».", "People go out a lot here at weekends."),
        ]
      ),
    ],
    [
      wo("En mi pueblo se celebran muchas fiestas en agosto.", "«Muchas fiestas» es el sujeto plural: se celebran, con -n.", "Many festivals are celebrated in my town in August."),
      wo("En invierno se usa mucho la bicicleta.", "«La bicicleta» es singular: se usa, aunque vaya detrás del adverbio «mucho».", "The bicycle is used a lot in winter."),
      wo("No se oye nada desde mi ventana.", "«Nada» funciona como singular: se oye.", "Nothing can be heard from my window."),
      wo("Se ven muchos turistas por el centro.", "«Muchos turistas» va sin «a» y es el sujeto plural: se ven.", "You see many tourists around the center."),
      toEs("In my city people walk a lot.", "En mi ciudad se camina mucho.", "«People» en general sin sustantivo sujeto = se impersonal en singular: se camina.", ["En mi ciudad se anda mucho."]),
      toEs("In my country people have lunch at two.", "En mi país se come a las dos.", "Se impersonal en singular: se come a las dos.", ["En mi país se almuerza a las dos."]),
      toEs("Churros are eaten for breakfast here.", "Aquí se comen churros en el desayuno.", "Se pasivo concordando con «churros» (plural): se comen.", ["Aquí se desayunan churros.", "Se comen churros en el desayuno aquí.", "Aquí se comen churros para el desayuno.", "Aquí se comen churros para desayunar."]),
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
        "Se vendieron antes de que yo llegara (pluscuamperfecto), y el verbo concuerda con «todas las entradas» (plural): se habían vendido. «Se había vendido» no concuerda, «han vendido» se liga al presente y «vendían» es un proceso."
      ),
      toEs("A lot of bread used to be eaten in my house.", "En mi casa se comía mucho pan.", "«Used to» → imperfecto; concuerda con «mucho pan» (singular): se comía.", ["Se comía mucho pan en mi casa."]),
      toEs("The streets will be closed on Sunday.", "Las calles se cerrarán el domingo.", "Se pasivo en futuro, concordando con «las calles»: se cerrarán.", ["Se cerrarán las calles el domingo.", "El domingo se cerrarán las calles."]),
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
        [
          "Recuerda la regla: el pronombre posesivo (el mío, la tuya, los suyos…) ocupa el lugar de un sustantivo, así que copia su género y número. Quién habla o quién es el dueño solo decide la persona (mío, tuyo, nuestro…), nunca la terminación.",
          "Dos pasos: 1) ¿de quién? → mío / tuyo / suyo / nuestro / vuestro. 2) ¿qué cosa? → el / la / los / las + -o / -a / -os / -as. Un chico habla de su mochila: la mía, porque mochila es femenina.",
        ],
        [
          ["Tu móvil es nuevo; el mío es viejo.", "Your phone is new; mine is old. (móvil: masculino singular)"],
          ["Mis padres viven lejos; los tuyos viven cerca.", "My parents live far away; yours live nearby. (padres: masculino plural)"],
          ["Andrés no encuentra su cartera. ¿Has visto la suya?", "Andrés can't find his wallet. Have you seen his? (cartera: femenino, aunque el dueño es un chico)"],
        ],
        [
          fb("Completa.", "Tu bicicleta es roja; ___ es azul. (yo)", "la mía", "Paso 1: yo → mío. Paso 2: bicicleta es femenino singular → la mía."),
        ]
      ),
    ],
    [
      fb("Mismo marco.", "Tu abrigo es largo; ___ es corto. (yo)", "el mío", "Abrigo es masculino singular: el mío."),
      fb("Mismo marco.", "Mis gafas son negras; ___ son marrones. (tú)", "las tuyas", "Gafas es femenino plural: las tuyas."),
      fb("Mismo marco.", "Nuestro piso es pequeño; ___ es enorme. (ellos)", "el suyo", "El dueño es «ellos», pero la terminación la decide piso (masculino singular): el suyo."),
      fb("Mismo marco.", "Tus zapatos están limpios; ___ están sucios. (nosotros)", "los nuestros", "Zapatos es masculino plural: los nuestros."),
      fb("Mismo marco.", "Mi habitación da a la calle; ___ da al patio. (vosotros)", "la vuestra", "Habitación es femenino singular: la vuestra."),
      mc(
        "Pedro habla de sus maletas: «___ son las verdes.»",
        ["Las mías", "Los míos", "El mío", "La mía"],
        0,
        "El posesivo concuerda con lo poseído, no con quien habla: las maletas (femenino plural) → las mías. «Los míos», «el mío» y «la mía» no concuerdan con «maletas»."
      ),
      toEs("Your keys are here. Where are mine? (tú)", "Tus llaves están aquí. ¿Dónde están las mías?", "Sin repetir el sustantivo, el posesivo lleva artículo y concuerda con «llaves»: las mías."),
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
        [
          "Recuerda la regla: mi, tu, su, nuestro van delante de un sustantivo (mi perro). Cuando el sustantivo desaparece, usa la forma larga con artículo: el mío, la tuya. El artículo ocupa el lugar del sustantivo que ya no dices.",
          "Después de ser hay dos opciones con dos sentidos: «Este perro es mío» responde a «¿de quién es?»; «Este perro es el mío» responde a «¿cuál es el tuyo?» cuando hay varios.",
        ],
        [
          ["Ese paraguas es mío.", "That umbrella is mine. (¿de quién es?: sin artículo)"],
          ["—¿Cuál es tu paraguas? —El mío es el negro.", "Which is your umbrella? Mine is the black one. (sujeto: con artículo)"],
          ["Mi casa está cerca de la tuya.", "My house is near yours. (mi + sustantivo; la tuya sin sustantivo)"],
        ],
        [
          mc(
            "«—¿De quién es esta chaqueta? —Es ___.»",
            ["mía", "mi", "la mi", "mío"],
            0,
            "Después de ser, para decir de quién es algo, el posesivo tónico va sin artículo: es mía. Concuerda con «chaqueta» (femenino), por eso no «mío»; «mi» y «la mi» son formas átonas que necesitan sustantivo detrás."
          ),
        ]
      ),
    ],
    [
      fb("Par A.", "___ hermano trabaja en un banco. (yo)", "Mi", "Delante del sustantivo (hermano) va la forma corta, sin artículo: mi."),
      fb("Par B.", "Mi hermano trabaja en un banco; ___ trabaja en un hospital. (tú)", "el tuyo", "Sin sustantivo, el posesivo lo sustituye con artículo: el tuyo (= tu hermano)."),
      fb("Par A.", "Estos cuadernos son ___. (nosotros)", "nuestros", "Después de ser, para decir de quién son, sin artículo: nuestros (concuerda con cuadernos)."),
      fb("Par B.", "Hay tres cuadernos; ___ es el azul. (yo)", "el mío", "Es el sujeto y eliges entre varios: con artículo, el mío."),
      fb("Par A.", "¿Es ___ este cargador? (tú)", "tuyo", "Preguntas de quién es, después de ser: sin artículo, tuyo."),
      mc(
        "«He olvidado mi bolígrafo. ¿Me dejas ___?»",
        ["el tuyo", "tu", "tuyo", "tuya"],
        0,
        "Como complemento directo (sin el sustantivo), el posesivo necesita artículo: ¿Me dejas el tuyo? «Tu» necesita un sustantivo detrás, «tuyo» sin artículo solo va después de ser y «tuya» no concuerda con «bolígrafo»."
      ),
      toEs("This seat is mine.", "Este asiento es mío.", "Después de ser, el posesivo tónico va sin artículo: es mío.", ["Este sitio es mío."]),
      toEs("My sister is older than yours. (tú)", "Mi hermana es mayor que la tuya.", "«Yours» sin sustantivo = artículo + posesivo, concordando con «hermana»: la tuya."),
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
        [
          "Recuerda la regla: suyo puede ser de él, de ella, de usted, de ellos o de ustedes. Si en la conversación hay más de un dueño posible, cambia «el suyo» por artículo + de + persona: el de él, la de ella, los de ustedes. El artículo sigue concordando con la cosa; la persona va después de «de».",
          "Si solo hay un dueño posible, «el suyo» es claro y no hace falta cambiarlo.",
        ],
        [
          ["El coche de Ana es rojo y el de él es gris.", "Ana's car is red and his is grey. (dos dueños: el de él)"],
          ["Ana ha traído su guitarra y yo la mía. La suya es mejor.", "Ana brought her guitar and I brought mine. Hers is better. (un solo dueño posible: la suya basta)"],
        ],
        [
          mc(
            "Marta y Luis traen maletas. Quieres decir que la de Luis pesa más:",
            ["La de él pesa más.", "La suya pesa más.", "El de él pesa más.", "La de ella pesa más."],
            0,
            "«Suya» podría ser de Marta o de Luis; «la de él» deja claro el dueño y concuerda con «la maleta». «El de él» es masculino, y «la de ella» señala a Marta."
          ),
        ]
      ),
    ],
    [
      mc(
        "Hablas con dos clientes (ustedes). «¿Estas son ___?»",
        ["las de ustedes", "las de ellos", "los de ustedes", "las de él"],
        0,
        "Con ustedes se usa «de ustedes», y el artículo concuerda con las cosas (femenino plural, por ejemplo las llaves): las de ustedes. «Las de ellos» habla de otras personas, «los de ustedes» es masculino y «las de él» es de una sola persona."
      ),
      mc(
        "«Mi idea es buena, pero ___ es mejor.» (la idea de Sofía, en una reunión con muchos)",
        ["la de Sofía", "la suya", "el de Sofía", "suya"],
        0,
        "Con muchas personas, «la suya» es ambiguo; el nombre lo aclara: la de Sofía. «El de Sofía» no concuerda con «idea» (femenino) y «suya» sin artículo no sirve como sujeto."
      ),
      fb("Aclara.", "Tengo el número de Carlos, pero no ___. (de su hermana)", "el de ella", "El artículo concuerda con número (el) y la dueña va detrás de de: el de ella."),
      fb("Aclara.", "Las fotos de Elena son bonitas, pero ___ son mejores. (de su novio)", "las de él", "Fotos es femenino plural (las) y el dueño es él: las de él."),
      fb("Aclara.", "Nuestra casa está aquí; ___ está al lado. (de ellos)", "la de ellos", "Casa → la; los dueños son ellos: la de ellos."),
      toEs("My passport is here, but where is hers?", "Mi pasaporte está aquí, pero ¿dónde está el de ella?", "«Suyo» sería ambiguo; «el de ella» aclara la dueña y concuerda con «pasaporte».", ["Mi pasaporte está aquí, pero ¿dónde está el suyo?"]),
      toEs("Their children are younger than ours.", "Sus hijos son más pequeños que los nuestros.", "«Ours» sin sustantivo = los nuestros, concordando con «hijos».", ["Los hijos de ellos son más pequeños que los nuestros."]),
    ]
  ),
  L(
    "possessive-pronouns-2",
    "b1d-cuento-mudanza",
    "Cuento con huecos: la mudanza",
    "Practica los posesivos (mío, tuyo, el nuestro, la suya…) mientras tres compañeros de piso reparten sus cosas antes de mudarse.",
    "7 min",
    [
      sec(
        "Las cajas",
        [
          "Recuerda la regla: el posesivo concuerda con la cosa, no con quien habla. Después de ser, sin artículo (son míos: de quién son); como sujeto o complemento, con artículo (los míos están en la caja).",
          "Irene, Tomás y Bea dejan el piso. Irene: «Estas tazas son mías. ¿Los libros de cocina son tuyos, Tomás?» Tomás: «No, los míos están en la caja azul. Esos son de Bea.» Bea: «Sí, son míos. ¿Y la lámpara?» Irene: «Es nuestra; la compramos juntos.»",
        ],
        [
          ["Los míos están en la caja azul.", "Mine are in the blue box."],
          ["Es nuestra; la compramos juntos.", "It's ours; we bought it together."],
        ],
        [
          mc(
            "¿Por qué Bea dice «son míos»?",
            ["Porque «libros» es masculino plural.", "Porque Bea es un chico.", "Porque se refiere a la lámpara.", "Porque siempre es masculino."],
            0,
            "El posesivo concuerda con lo que se posee (los libros, masculino plural), no con el hablante: son míos. No tiene que ver con que Bea sea chica o chico, ni se refiere a la lámpara, ni es siempre masculino."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "Irene: «¿Estos vasos? Son ___; los traje de casa de mis padres.»", "míos", "Tras ser, sin artículo; concuerda con vasos (masculino plural), aunque hable Irene: míos."),
      fb("Completa.", "Bea: «Mis toallas ya están lavadas, pero ___ todavía no, Tomás.»", "las tuyas", "Sin repetir «toallas», el posesivo es sujeto y lleva artículo: las tuyas (femenino plural)."),
      fb("Completa.", "Tomás: «¿La tele? Es ___; la pagamos los tres a medias.»", "nuestra", "Los dueños somos nosotros y la tele es femenina; tras ser, sin artículo: nuestra."),
      fb("Completa.", "Bea: «Tomás, ¿este cargador es ___ o de Irene?»", "tuyo", "Después de ser, el posesivo va sin artículo y concuerda con «cargador» (masculino): tuyo."),
      fb("Completa.", "Tomás: «No, ___ es blanco. Ese es de ella.»", "el mío", "Como sujeto, el posesivo necesita artículo: el mío es blanco."),
      ms(
        "¿Qué formas son correctas para «la sartén de Irene y Bea» (dicho por Tomás)?",
        ["la suya", "la de ellas", "el suyo", "la de él"],
        [0, 1],
        "La sartén es femenina y las dueñas son Irene y Bea, así que vale «la suya» o, más claro, «la de ellas». «El suyo» no concuerda con «sartén», y «la de él» señala a un solo hombre."
      ),
      toEs("Those plates aren't mine; they're Tomás's.", "Esos platos no son míos; son de Tomás.", "Después de ser, sin artículo, concordando con «platos»: míos; el dueño se nombra con «de Tomás»."),
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
        [
          "Recuerda la regla: la pregunta te dice qué forma usar. A «¿De quién es…?» se responde con ser + posesivo sin artículo: es mío. A «¿Cuál es el tuyo?» se responde identificando, con artículo: el mío es el 14B.",
          "Y al responder cambias de persona: si te preguntan «¿es tuyo?», dices «es mío»; si preguntan «¿es vuestro?», dices «es nuestro». La terminación sigue siendo la de la cosa.",
        ],
        [
          ["—¿De quién es este libro? —Es mío.", "Whose book is this? —It's mine. (¿de quién?: sin artículo)"],
          ["—¿Cuál es tu asiento? —El mío es el 14B.", "Which is your seat? —Mine is 14B. (¿cuál?: con artículo)"],
          ["—¿Son vuestras estas bolsas? —Sí, son nuestras.", "Are these bags yours? Yes, they're ours. (vuestras → nuestras)"],
        ],
        [
          fb("Responde.", "—¿Es tuya esta bufanda? —Sí, es ___.", "mía", "Después de ser, sin artículo, concordando con «bufanda» (femenino): mía."),
        ]
      ),
    ],
    [
      fb("Responde.", "—¿Son tuyos estos guantes? —No, no son ___.", "míos", "Concuerda con «guantes» (masculino plural): míos."),
      fb("Responde.", "—¿Es vuestro este perro? —Sí, es ___.", "nuestro", "Concuerda con «perro» (masculino), y el dueño es nosotros: nuestro."),
      fb("Responde.", "—¿Cuál es tu taquilla? —___ es la número tres.", "La mía", "Como sujeto, con artículo, y concordando con «taquilla» (femenino): la mía."),
      fb("Responde.", "—¿Es de usted esta cartera? —Sí, es ___, gracias.", "mía", "Después de ser, sin artículo, concordando con «cartera»: mía."),
      { ...fb("Responde.", "—¿Son de tus padres estas llaves? —Sí, son ___.", "suyas", "Concuerda con «llaves» (femenino plural), y los dueños son ellos: suyas. «De ellos» también es correcto y más claro."), altAnswers: ["de ellos"] },
      mc(
        "—¿Es vuestra esta tienda de campaña? —No, ___ es la verde.",
        ["la nuestra", "nuestra", "el nuestro", "la vuestra"],
        0,
        "Para elegir entre varias cosas, el posesivo va con artículo y concuerda con «tienda» (femenino): la nuestra es la verde. «Nuestra» sin artículo no sirve como sujeto, «el nuestro» es masculino y «la vuestra» cambia la persona."
      ),
      toEs("Whose are these glasses? Are they yours, madam?", "¿De quién son estas gafas? ¿Son suyas, señora?", "A usted (madam) le corresponde «suyo», concordando con «gafas»: suyas.", ["¿De quién son estas gafas? ¿Son de usted, señora?"]),
    ]
  ),
  L(
    "passive-voice-possessive-pronouns-drill-3",
    "b1d-ronda-posesivos",
    "Ronda rápida: posesivos",
    "Decisiones rápidas con posesivos: elige género, número y artículo (el mío, la tuya, los suyos) según la cosa poseída.",
    "5 min",
    [
      sec(
        "Recuerda la regla: tres preguntas, siempre en este orden",
        [
          "Un posesivo tónico da tres datos a la vez. ¿De quién? decide la raíz (mí-, tuy-, suy-, nuestr-, vuestr-). ¿Qué cosa? decide la terminación, porque concuerda con lo poseído, no con el dueño (-o, -a, -os, -as). ¿Ocupa el lugar del sustantivo? Entonces lleva artículo (prefiero el tuyo, la mía es azul); después de «ser» normalmente va sin él (es mía).",
        ],
        [
          ["Prefiero el tuyo.", "I prefer yours. (sustituye a «tu coche» → el tuyo)"],
          ["Estas sillas son nuestras.", "These chairs are ours. (tras ser, femenino plural)"],
          ["Su piso es más caro que el mío.", "Their flat is more expensive than mine. (tras que → con artículo)"],
        ],
        [
          fb("Rápido.", "Esta taza es ___. (yo)", "mía", "Después de «ser» el tónico va sin artículo y concuerda con «taza»: mía."),
          mc(
            "«Mis guantes están mojados. ¿Me dejas ___?» (tú)",
            ["los tuyos", "tuyos", "las tuyas", "tus"],
            0,
            "Sustituye a «tus guantes» como objeto: lleva artículo y concuerda en masculino plural: los tuyos. Sin artículo no puede ser objeto, «las tuyas» es femenino y «tus» necesita un sustantivo detrás."
          ),
        ]
      ),
    ],
    [
      fb("Rápido.", "Me gusta tu jersey, pero prefiero ___. (yo)", "el mío", "Sustituye a «mi jersey» como objeto: artículo + tónico masculino, el mío."),
      fb("Rápido.", "Esas maletas no son ___. (nosotros)", "nuestras", "Tras «ser», sin artículo, y en femenino plural como «maletas»: nuestras."),
      fb("Rápido.", "Mi examen fue fácil; ___ fue difícil. (tú)", "el tuyo", "Es el sujeto de «fue» y sustituye a «tu examen»: el tuyo, masculino."),
      fb("Rápido.", "¿Estos asientos son ___, chicos? (vosotros)", "vuestros", "Dueño vosotros → vuestr-; asientos, masculino plural → vuestros."),
      fb("Rápido.", "Mis notas son buenas, pero ___ son mejores. (ella)", "las suyas", "Sujeto sin sustantivo: artículo + tónico en femenino plural, como «notas»: las suyas."),
      fb("Rápido.", "Tengo mi entrada. ¿Tienes ___? (tú)", "la tuya", "Objeto que sustituye a «tu entrada»: la tuya, femenino singular."),
      fb("Rápido.", "Su jardín es más grande que ___. (nosotros)", "el nuestro", "Tras «que» en una comparación, artículo + tónico concordando con «jardín»: el nuestro."),
      mc(
        "«Os presto mi coche si ___ no arranca.»",
        ["el vuestro", "vuestro", "la vuestra", "el suyo"],
        0,
        "Como sujeto, el posesivo necesita artículo, y con «os» (vosotros) es vuestro: el vuestro, concordando con «coche». «Vuestro» sin artículo no sirve como sujeto, «la vuestra» es femenino y «el suyo» cambia la persona."
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
        "Recuerda la regla: concuerda con la cosa y no olvides el artículo",
        [
          "Los dos errores típicos de los estudiantes son: concordar el posesivo con el dueño en lugar de con la cosa (una chica escribe «el mío» para su cama, cuando debe ser «la mía»), y olvidar el artículo cuando el posesivo sustituye al sustantivo («mío solo uno» en lugar de «los míos solo uno»). Un tercero: usar la forma corta (mi, tu, su) sin sustantivo detrás.",
        ],
        [
          ["Mi abuela tiene su bastón y yo tengo el mío.", "My grandmother has her walking stick and I have mine. (bastón → el mío)"],
          ["Tus notas son buenas; las mías, no tanto.", "Your marks are good; mine, not so much. (notas → las mías, con artículo)"],
        ],
        [
          mc(
            "Una chica escribe: «Mi hermano tiene su ordenador y yo tengo ___.»",
            ["el mío", "la mía", "mi", "mío"],
            0,
            "Concuerda con «ordenador», masculino, aunque quien escribe sea una chica: el mío. «La mía» concuerda con la persona, «mi» necesita sustantivo y «mío» sin artículo no puede ser objeto."
          ),
        ]
      ),
      sec(
        "La redacción",
        "«Mi hermana y yo compartimos habitación. Su cama está junto a la ventana y el mío junto a la puerta. Sus libros ocupan dos estantes; mío solo uno. Ella dice que su escritorio es más bonito que mi.»",
        [],
        [
          mc(
            "¿Por qué «el mío» es un error en la primera frase?",
            ["Porque se refiere a la cama (femenino).", "Porque el escritor es una chica.", "Porque falta «es».", "Porque debe ser «mi»."],
            0,
            "El posesivo concuerda con la cosa, no con quien la tiene: la cama (femenino) → la mía. No depende de si quien escribe es chica, no falta «es» y «mi» necesita un sustantivo detrás."
          ),
        ]
      ),
    ],
    [
      toEs("Sus libros ocupan dos estantes; mío solo uno.", "Sus libros ocupan dos estantes; los míos solo uno.", "«Mío» sustituye a «mis libros» como sujeto: necesita artículo y concordar en masculino plural, los míos.", [], "Corrige la frase."),
      toEs("Su escritorio es más bonito que mi.", "Su escritorio es más bonito que el mío.", "«Mi» solo va delante de un sustantivo; sin él hace falta el pronombre con artículo: el mío.", [], "Corrige la frase."),
      toEs("Ana perdió su llave, así que le presté el mío.", "Ana perdió su llave, así que le presté la mía.", "El posesivo concuerda con lo poseído: la llave (femenino) → la mía.", [], "Corrige la frase."),
      toEs("Esta mochila no es mi.", "Esta mochila no es mía.", "Después de ser se usa el posesivo tónico: mía; «mi» necesita un sustantivo detrás.", [], "Corrige la frase."),
      toEs("Vuestros hijos y los nuestro juegan juntos.", "Vuestros hijos y los nuestros juegan juntos.", "El posesivo concuerda en número con «hijos»: los nuestros.", [], "Corrige la frase."),
      ms(
        "¿Qué frases son correctas?",
        ["Mi ordenador es más lento que el tuyo.", "Estas gafas son mías.", "Prefiero tuyo.", "La casa suya de ella es grande."],
        [0, 1],
        "«Prefiero tuyo» necesita artículo (el tuyo); «La casa suya de ella» mezcla dos formas (su casa / la casa de ella)."
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
        "Recuerda la regla: dos concordancias distintas",
        [
          "En el mercadillo se mezclan los dos temas de la unidad, y los dos dependen de la concordancia, pero con cosas distintas. Con «se», el verbo concuerda con lo que se vende o se cambia (se venden libros, se regala ropa); si no hay sustantivo, va en singular (se paga en efectivo). Con los posesivos, la terminación concuerda con la cosa poseída y el artículo aparece cuando sustituye al sustantivo (—¿Esta radio es suya? —No, la mía es la negra).",
        ],
        [
          ["Se cambian discos y se regala ropa.", "Records swapped and clothes given away. (discos → plural; ropa → singular)"],
          ["—¿Es suyo este bolso? —No, el mío es el marrón.", "Is this bag yours? — No, mine is the brown one. (bolso → suyo, el mío)"],
        ],
        [
          fb("Completa.", "Se ___ libros usados. (vender)", "venden", "«Libros usados» es el sujeto plural: se venden."),
          mc(
            "«—¿Son suyos estos marcos? —No, ___ son los dorados.»",
            ["los míos", "las mías", "mis", "míos"],
            0,
            "Sustituye a «mis marcos» como sujeto: artículo + tónico masculino plural, los míos. «Las mías» es femenino, «mis» necesita un sustantivo y «míos» sin artículo no puede ser sujeto aquí."
          ),
        ]
      ),
    ],
    [
      fb("Mercadillo.", "Aquí se ___ en efectivo. (pagar)", "paga", "No hay ningún sustantivo que se pague: se impersonal, verbo en singular."),
      fb("Mercadillo.", "—¿Esta radio es suya? —No, ___ es la negra.", "la mía", "Como sujeto, el posesivo lleva artículo y concuerda con «radio» (femenino): la mía."),
      fb("Mercadillo.", "Se ___ ropa de niño. (regalar)", "regala", "«Ropa» es un sustantivo singular (aunque sean muchas prendas): se regala."),
      fb("Mercadillo.", "—¿Son suyos estos discos? —Sí, son ___.", "míos", "Después de ser, sin artículo, concordando con «discos»: míos."),
      fb("Mercadillo.", "Se ___ precios si compras varias cosas. (negociar)", "negocian", "«Precios» es el sujeto plural: se negocian."),
      mc(
        "«Mi puesto es más grande que ___.» (el puesto de ustedes)",
        ["el suyo", "la suya", "suyo", "el mío"],
        0,
        "«Puesto» es masculino y, sin el sustantivo, el posesivo lleva artículo: el suyo (de ustedes). «La suya» es femenino, «suyo» sin artículo no sirve aquí y «el mío» cambia el dueño."
      ),
      toEs("Old coins are bought here. Are these yours (usted)?", "Aquí se compran monedas antiguas. ¿Son suyas estas?", "Se pasivo en plural (se compran monedas) y posesivo de usted concordando: suyas.", ["Se compran monedas antiguas aquí. ¿Son tuyas estas?", "Aquí se compran monedas antiguas. ¿Estas son tuyas?", "Aquí se compran monedas antiguas. ¿Son tuyas estas?"]),
    ]
  ),
  L(
    "combined-object-pronouns-1",
    "b1d-patron-me-lo-te-lo",
    "Práctica de patrones: me lo, te la, nos los",
    "Primero la persona, después la cosa: el mismo orden en cada frase.",
    "7 min",
    [
      sec(
        "Persona + cosa",
        [
          "Recuerda la regla: cuando sustituyes la cosa por un pronombre y ya hay un pronombre de persona, el de persona (me, te, nos, os) va siempre primero y el de cosa (lo, la, los, las) después, los dos delante del verbo conjugado: Me das el libro → Me lo das.",
          "¿Por qué hay que fijarse en la cosa? Porque el segundo pronombre copia su género y número: el libro → lo, la camiseta → la, los platos → los, las fotos → las. El primer pronombre no cambia: solo depende de a quién va dirigida la acción.",
        ],
        [
          ["¿La foto? Te la mando esta noche.", "The photo? I'll send it to you tonight. [te + la: la foto es femenino]"],
          ["¿Los billetes? Nos los dieron en la puerta.", "The tickets? They gave them to us at the door. [nos + los: masculino plural]"],
          ["¿El regalo? Os lo doy después de cenar.", "The present? I'll give it to you all after dinner. [os + lo]"],
        ],
        [
          fb("Sustituye.", "Mi abuela me contó la historia. → Mi abuela ___ contó.", "me la", "Primero el indirecto (me), luego el directo (la historia → la): me la contó."),
          mc(
            "Nos lavan las camisas en la tintorería. → ___ lavan en la tintorería.",
            ["Nos las", "Las nos", "Nos los", "Se las"],
            0,
            "Persona primero (nos) y luego la cosa: las camisas → las (femenino plural). «Las nos» invierte el orden, «los» no concuerda con «camisas» y «se» sería para él, ella o ellos."
          ),
        ]
      ),
    ],
    [
      fb("Mismo marco.", "Te presto mi paraguas. → ___ presto.", "Te lo", "Te (a ti) + lo (el paraguas, masculino): te lo presto."),
      fb("Mismo marco.", "Nos explicaron las reglas. → ___ explicaron.", "Nos las", "Nos (a nosotros) + las (las reglas, femenino plural): nos las explicaron."),
      fb("Mismo marco.", "Me regalaron unos pendientes. → ___ regalaron.", "Me los", "Me + los (unos pendientes, masculino plural): me los regalaron."),
      fb("Mismo marco.", "Te envío la dirección ahora. → ___ envío ahora.", "Te la", "Te + la (la dirección, femenino): te la envío."),
      fb("Mismo marco.", "Nos sirvieron el postre enseguida. → ___ sirvieron enseguida.", "Nos lo", "Nos + lo (el postre, masculino): nos lo sirvieron."),
      mc(
        "«¿Me devuelves las llaves?» —Sí, ___ devuelvo mañana.",
        ["te las", "las te", "me las", "te los"],
        0,
        "Los dos pronombres van delante del verbo, el de persona primero: te (a ti) + las (las llaves). «Las te» invierte el orden, «me las» cambia la persona y «te los» no concuerda con «llaves»."
      ),
      toEs("My brother lent it to me (the car).", "Mi hermano me lo prestó.", "Me (a mí) + lo (el coche), delante del verbo: me lo prestó.", ["Me lo prestó mi hermano."]),
      wo("Nos la enseñaron ayer.", "Nos (a nosotros) + la (una cosa femenina), siempre en este orden y delante del verbo conjugado.", "They showed it to us yesterday."),
    ]
  ),
  L(
    "combined-object-pronouns-1",
    "b1d-circuito-se-lo",
    "Circuito: le lo nunca, se lo siempre",
    "Tres estaciones para automatizar el cambio de le/les a se.",
    "8 min",
    [
      sec(
        "La regla de oro",
        [
          "Recuerda la regla: le/les + lo/la/los/las → se lo / se la / se los / se las. Le di el regalo → Se lo di. Les mandé las fotos → Se las mandé. Este «se» no es reflexivo: solo sustituye a le o les.",
          "¿Por qué? Porque el español no admite dos pronombres en l- seguidos (le lo, les la). El cambio es automático y «se» nunca lleva plural: el número de personas desaparece y solo el segundo pronombre concuerda con la cosa. Si no queda claro a quién, se añade «a + persona»: se lo di a Marta.",
          "Ojo: con me, te, nos, os no hay cambio (me lo, te la, nos los). Solo le y les se transforman.",
        ],
        [
          ["Le di el regalo a Marta. → Se lo di.", "I gave Marta the present. → I gave it to her. [le + lo → se lo]"],
          ["Les mandé las fotos a mis primos. → Se las mandé.", "I sent my cousins the photos. → I sent them to them. [les + las → se las: «se» sin plural]"],
          ["Le pagué la cena a usted. → Se la pagué a usted.", "I paid for your dinner. → I paid for it for you. [«a usted» aclara quién es «se»]"],
        ],
        [
          fb("Estación 1.", "Le escribí una carta a mi abuelo. → ___ escribí.", "Se la", "Una carta → la, y «le» delante de «la» se convierte en «se»: se la escribí."),
          mc(
            "Les dejamos las llaves a los vecinos. → ___ dejamos.",
            ["Se las", "Les las", "Se les", "Ses las"],
            0,
            "Les + las → se las. «Les las» es la combinación imposible, «se les» usa dos pronombres de persona y «ses» no existe: «se» nunca lleva plural."
          ),
        ]
      ),
    ],
    [
      fb("Estación 1.", "Le compré un helado a mi sobrino. → ___ compré.", "Se lo", "Un helado → lo, y «le» delante de «lo» pasa a «se»: se lo compré."),
      fb("Estación 1.", "Les enseñé los apuntes a mis compañeros. → ___ enseñé.", "Se los", "Los apuntes → los, y «les» delante de «los» pasa a «se» (sin plural): se los enseñé."),
      fb("Estación 2.", "Le pedimos la cuenta al camarero. → ___ pedimos.", "Se la", "La cuenta → la, y le → se delante de la: se la pedimos."),
      fb("Estación 2.", "Les contamos el secreto a nuestros padres. → ___ contamos.", "Se lo", "El secreto → lo, y les → se delante de lo: se lo contamos."),
      fb("Estación 3.", "Le devolví las tijeras a la vecina. → ___ devolví.", "Se las", "Las tijeras → las, y le → se delante de las: se las devolví."),
      fb("Estación 3.", "Le vendieron la moto a un chico de Bilbao. → ___ vendieron.", "Se la", "La moto → la, y le → se delante de la: se la vendieron."),
      ms(
        "¿Qué frases son correctas?",
        ["Se lo expliqué ayer.", "Le lo expliqué ayer.", "Se las di a ellas.", "Les las di a ellas."],
        [0, 2],
        "«Le» y «les» se convierten en «se» delante de lo, la, los, las: se lo, se las. «Le lo» y «Les las» nunca son correctas."
      ),
      toEs("I told it to her (the truth).", "Se la dije.", "A ella → le; la verdad → la. Le + la → se la, delante del verbo: se la dije."),
    ]
  ),
  L(
    "combined-object-pronouns-1",
    "b1d-elige-explica-quien-recibe",
    "Elige y explica: ¿a quién se lo diste?",
    "Se lo es ambiguo: a él, a ella, a usted, a ellos… Aclara con a + persona.",
    "7 min",
    [
      sec(
        "Aclarar el se",
        [
          "Recuerda la regla: «se lo di» puede ser a él, a ella, a usted, a ellos, a ellas o a ustedes. Si el contexto no lo deja claro, se añade a + persona: Se lo di a ella. Se lo expliqué a ustedes.",
          "¿Por qué hace falta? Porque al cambiar le/les por «se» se pierden el número y el género de la persona: «se» es igual para todos. La aclaración no sustituye al pronombre: «se» sigue siendo obligatorio (se lo di a ella, no «lo di a ella»).",
          "Después de «a», usa los pronombres tónicos: a él, a ella, a usted, a mí, a ti, a nosotros, a ellos. Nunca «a le» ni «a me».",
        ],
        [
          ["Se lo regalé a mi tía, no a mi prima.", "I gave it to my aunt, not my cousin. [«a mi tía» aclara el «se»]"],
          ["Se la expliqué a usted la semana pasada.", "I explained it to you last week. [se = a usted]"],
          ["Se los mandamos a ellas por correo.", "We sent them to them (the women) by mail. [«a ellas» dice plural y femenino]"],
        ],
        [
          mc(
            "Quieres decir que diste el libro a tus profesores. ¿Qué frase es la más clara?",
            ["Se lo di a mis profesores.", "Se lo di.", "Les lo di.", "Lo se di a mis profesores."],
            0,
            "«Se» puede significar a él, a ella, a usted, a ellos…, así que añadir «a mis profesores» aclara a quién: Se lo di a mis profesores. «Se lo di» es correcta pero ambigua, «Les lo» no existe y «Lo se» invierte el orden."
          ),
          mc(
            "«¿Le diste la tarjeta a Raúl?» —No, ___ a su novia.",
            ["se la di", "la di", "se la di a ella", "le la di"],
            0,
            "La persona nueva ya está en la frase («a su novia»), pero el pronombre «se» sigue siendo obligatorio: se la di a su novia. «La di» pierde el pronombre de persona, «a ella» repetiría la persona y «le la» es imposible."
          ),
        ]
      ),
    ],
    [
      mc(
        "¿Qué significa «se» en «Se lo compré a mi hermana»?",
        ["le (a mi hermana)", "reflexivo (a mí mismo)", "impersonal", "pasivo"],
        0,
        "Aquí «se» sustituye a «le» (a mi hermana) porque va delante de «lo»: le lo → se lo. No es reflexivo (no me lo compré a mí), ni impersonal, ni pasivo."
      ),
      mc(
        "¿Qué significa «se» en «Se venden pisos»?",
        ["pasivo", "le (a alguien)", "les (a ellos)", "reflexivo"],
        0,
        "En «Se venden pisos» el verbo concuerda con «pisos»: es se pasivo. No sustituye a le ni a les (no hay objeto directo lo/la detrás) y no es reflexivo."
      ),
      fb("Aclara.", "Se lo expliqué ___, señor Ruiz. (usted)", "a usted", "«Se» también puede ser usted; tras «a» va el pronombre tónico: a usted."),
      fb("Aclara.", "Se las di ___, no a sus hermanos. (Luis)", "a Luis", "A + el nombre de la persona deja claro a quién se refiere «se»."),
      fb("Aclara.", "¿Se lo dijiste ___? (ella)", "a ella", "Tras la preposición «a», el pronombre tónico: a ella (nunca «a la» ni «a le»)."),
      toEs("I sent it to them (the email), not to you, sir.", "Se lo mandé a ellos, no a usted.", "«Se» es ambiguo, así que se aclara con «a ellos» / «a usted».", ["Se lo envié a ellos, no a usted."]),
      toEs("She lent it to him (the pen).", "Ella se lo prestó a él.", "Le → se delante de lo, y «a él» aclara quién recibe: se lo prestó a él.", ["Se lo prestó a él."]),
    ]
  ),
  L(
    "combined-object-pronouns-1",
    "b1d-preguntas-se-lo",
    "Preguntas y respuestas: ¿se lo diste?",
    "Responde sin repetir nada: todo en pronombres.",
    "7 min",
    [
      sec(
        "Respuestas cortas",
        [
          "Recuerda la regla: para responder sin repetir nada, haz dos cambios. 1) La persona cambia de punto de vista: si te preguntan con «me», respondes con «te», y al revés (¿Me traes las llaves? → Sí, te las traigo); con «nos» respondes «os» (o «se» con ustedes). 2) La cosa se vuelve lo / la / los / las, y si la persona es le / les, pasa a «se»: ¿Le diste el mensaje a Pablo? → Sí, se lo di.",
          "¿Por qué cambia la persona? Porque «me» siempre es quien habla: si tu amigo dice «¿me traes…?», «me» es él, y cuando tú le contestas, él es «te». Con le / les no hay cambio de punto de vista: la tercera persona sigue siendo tercera, solo se convierte en «se» delante de lo / la.",
        ],
        [
          ["—¿Le devolviste el dinero? —Sí, se lo devolví.", "Did you give him back the money? Yes, I gave it back to him. [le + lo → se lo]"],
          ["—¿Me lees el mensaje? —Sí, ahora te lo leo.", "Will you read me the message? Yes, I'll read it to you now. [me → te]"],
          ["—¿Te pagaron las horas extra? —Sí, me las pagaron.", "Did they pay you for the overtime? Yes, they paid me for it. [te → me; las horas → las]"],
        ],
        [
          fb("Responde.", "—¿Le mandaste el currículum a la empresa? —Sí, ___ mandé.", "se lo", "El currículum → lo, y le (a la empresa) → se delante de lo: se lo mandé."),
          mc(
            "—¿Me cuentas el final de la película? —No, no ___ cuento.",
            ["te lo", "me lo", "se lo", "lo te"],
            0,
            "Quien pregunta dice «me» (él mismo); quien responde le habla a él, así que «te». El final → lo. «Me lo» no cambia el punto de vista, «se lo» sería para un tercero y «lo te» invierte el orden."
          ),
        ]
      ),
    ],
    [
      fb("Responde.", "—¿Me dejas tu cargador? —Sí, ___ dejo.", "te lo", "Me → te en la respuesta (cambia el punto de vista), y el cargador → lo: te lo dejo."),
      { ...fb("Responde.", "—¿Nos traes la carta, por favor? —Ahora mismo ___ traigo.", "os la", "El camarero responde al grupo: con vosotros, os la traigo; con ustedes (Latinoamérica o trato formal), les → se: se la traigo."), altAnswers: ["se la"] },
      fb("Responde.", "—¿Les contaste la noticia a tus padres? —No, todavía no ___ he contado.", "se la", "La noticia → la, y les → se delante de la: se la he contado. Los dos pronombres van delante del auxiliar «he»."),
      fb("Responde.", "—¿Te regalaron esas botas? —Sí, ___ regaló mi tía.", "me las", "Te → me en la respuesta, y esas botas → las (femenino plural): me las regaló."),
      fb("Responde.", "—¿Le pediste permiso al director? —Sí, ___ pedí ayer.", "se lo", "El permiso → lo, y le → se delante de lo: se lo pedí."),
      mc(
        "—¿Les enviaste las invitaciones a los invitados? —",
        ["Sí, se las envié.", "Sí, les las envié.", "Sí, las se envié.", "Sí, se los envié."],
        0,
        "«Las invitaciones» → las, y «les» se convierte en «se» delante de las: se las envié. «Les las» no existe, «las se» invierte el orden y «se los» no concuerda con «invitaciones»."
      ),
      toEs("Did you give her the keys? Yes, I gave them to her. (tú)", "¿Le diste las llaves? Sí, se las di.", "Las llaves → las, y le → se delante de las: se las di."),
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
        [
          "Recuerda la regla: con un infinitivo (voy a dar, quiero contar, tengo que devolver) los dos pronombres pueden ir pegados al final del infinitivo o delante del verbo conjugado, siempre juntos y en orden persona + cosa. Nunca en medio.",
          "¿Por qué la tilde? Dar, contar y explicar son palabras agudas; al pegar dos sílabas más, el acento queda en la antepenúltima sílaba (dár-se-lo, con-tár-te-la) y esas palabras siempre llevan tilde. La tilde no cambia la pronunciación: la conserva.",
        ],
        [
          ["Quiero explicártelo con calma.", "I want to explain it to you calmly. (pegados: tilde en «cá»)"],
          ["Te lo quiero explicar con calma.", "I want to explain it to you calmly. (delante del conjugado: sin tilde)"],
          ["Tenemos que devolvérselas a la vecina.", "We have to give them back to the neighbour. (le → se, las por las cosas)"],
        ],
        [
          fb("Pega.", "Voy a enviar el correo a Luis. → Voy a ___.", "enviárselo", "Enviar + se (le → se) + lo; al crecer la palabra, el acento cae en la antepenúltima sílaba y lleva tilde: enviárselo."),
        ]
      ),
    ],
    [
      fb("Pega.", "Tengo que devolver los libros a la biblioteca. → Tengo que ___.", "devolvérselos", "Con infinitivo, los pronombres se pegan al final (se + los) y se añade tilde: devolvérselos."),
      fb("Pega.", "Quiero enseñar la casa (a ti). → Quiero ___.", "enseñártela", "Infinitivo + te + la, con tilde para mantener el acento: enseñártela."),
      fb("Pega.", "Vamos a pedir la receta a tu madre. → Vamos a ___.", "pedírsela", "Infinitivo + se (le → se) + la, con tilde: pedírsela."),
      fb("Pega.", "Puedes traer las sillas (a nosotros). → Puedes ___.", "traérnoslas", "Infinitivo + nos + las, con tilde: traérnoslas."),
      fb("Pega.", "Necesito explicar el problema a ellos. → Necesito ___.", "explicárselo", "Infinitivo + se (les → se) + lo, con tilde: explicárselo."),
      mc(
        "Otra forma correcta de «Voy a decírtelo»:",
        ["Te lo voy a decir.", "Lo te voy a decir.", "Voy te lo a decir.", "Te voy a lo decir."],
        0,
        "Con verbo conjugado + infinitivo, los pronombres pueden ir pegados al infinitivo (decírtelo) o delante del conjugado, en el mismo orden: te lo voy a decir. Nunca van en medio ni en orden inverso, como «Lo te», «Voy te lo» o «Te voy a lo»."
      ),
      wo("No puedo prestártela hoy.", "Pegados al infinitivo.", "I can't lend it to you today."),
      toEs("I'm going to return it to him on Monday (the book).", "Voy a devolvérselo el lunes.", "Con infinitivo, pronombres pegados (le → se + lo), con tilde: devolvérselo.", ["Se lo voy a devolver el lunes.", "El lunes voy a devolvérselo.", "El lunes se lo voy a devolver."]),
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
        [
          "Recuerda la regla: en el mandato afirmativo los pronombres se pegan al final (dámelo, explícasela); en el negativo van delante de un verbo en subjuntivo (no me lo des, no se la expliques). El orden no cambia nunca: persona + cosa.",
          "¿Por qué dos posiciones? El afirmativo es una forma especial que solo existe como orden, y los pronombres se le pegan como al infinitivo. El negativo usa el subjuntivo, que es un verbo conjugado normal, y con los verbos conjugados los pronombres van delante.",
        ],
        [
          ["Dámelo, por favor.", "Give it to me, please. (afirmativo: pegados, con tilde)"],
          ["No me lo des todavía.", "Don't give it to me yet. (negativo: delante + subjuntivo)"],
          ["(usted) Explíqueselo. / No se lo explique.", "Explain it to him. / Don't explain it to him. (usted: mismas posiciones)"],
        ],
        [
          fb("Cambia al negativo.", "Cuéntamelo. → No ___ cuentes.", "me lo", "En el negativo, los pronombres se despegan y van delante del verbo en subjuntivo: no me lo cuentes."),
        ]
      ),
    ],
    [
      fb("Par A.", "(tú, mandar la foto a mí) → ___.", "Mándamela", "Afirmativo: los pronombres (me + la) se pegan al verbo y se añade tilde: mándamela."),
      fb("Par B.", "(tú, no mandar la foto a mí) → No ___.", "me la mandes", "Negativo: pronombres delante y verbo en subjuntivo: no me la mandes."),
      fb("Par A.", "(usted, dar las llaves a él) → ___.", "Déselas", "Mandato de usted (dé) + se (le → se) + las: déselas."),
      fb("Par B.", "(usted, no dar las llaves a él) → No ___.", "se las dé", "Negativo de usted: pronombres delante del verbo en subjuntivo: no se las dé."),
      fb("Par A.", "(tú, explicar el ejercicio a nosotros) → ___.", "Explícanoslo", "Afirmativo de tú: explica + nos + lo, con tilde: explícanoslo."),
      fb("Par B.", "(tú, no explicar el ejercicio a nosotros) → No ___.", "nos lo expliques", "Negativo: pronombres delante + subjuntivo: no nos lo expliques."),
      mc(
        "¿Qué forma es correcta?",
        ["No se lo digas.", "No díselo.", "No digásselo.", "No lo se digas."],
        0,
        "En el negativo, los pronombres van delante y el verbo en subjuntivo: no se lo digas. «No díselo» usa la forma afirmativa, «digásselo» no existe y «lo se» invierte el orden."
      ),
      toEs("Lend it to me (the bike), but don't lend it to him.", "Préstamela, pero no se la prestes a él.", "Afirmativo: pronombres pegados (préstamela); negativo: delante + subjuntivo (no se la prestes).", ["Préstamela a mí, pero no se la prestes a él."]),
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
        [
          "Recuerda la regla: con estar + gerundio, los dos pronombres van delante de estar (te la estoy preparando) o pegados al gerundio (estoy preparándotela). Las dos opciones son igual de correctas; lo que nunca se hace es separarlos.",
          "Al pegarlos, el acento se queda en la misma sílaba que en el gerundio solo (prepa-RAN-do → prepa-RÁN-do-te-la). Como esa sílaba ahora es la cuarta empezando por el final, lleva tilde.",
        ],
        [
          ["Te lo estoy diciendo en serio.", "I'm telling you seriously. (delante de estar)"],
          ["Está leyéndoselo a los niños.", "She's reading it to the children. (pegados: le → se + lo, tilde en «yén»)"],
          ["No nos la están enseñando.", "They aren't showing it to us. (con no: delante de estar, o «no están enseñándonosla»)"],
        ],
        [
          fb("Construye.", "Estoy escribiendo la carta a mi abuela. → Estoy ___.", "escribiéndosela", "Con gerundio, los pronombres se pegan (le → se + la) y se añade tilde: escribiéndosela."),
        ]
      ),
    ],
    [
      fb("Paso 1.", "Estoy arreglando el ordenador. → Estoy ___.", "arreglándolo", "El ordenador → lo, pegado al gerundio con tilde: arreglándolo."),
      fb("Paso 2.", "Estoy arreglando el ordenador a mi padre. → Estoy ___.", "arreglándoselo", "Dos pronombres pegados al gerundio: se (a mi padre) + lo (el ordenador): arreglándoselo."),
      fb("Paso 3.", "Estoy arreglando el ordenador a mi padre. → ___ estoy arreglando.", "Se lo", "Los pronombres también pueden ir delante del verbo conjugado (estar): se lo estoy arreglando."),
      fb("Paso 1.", "Están sirviendo la sopa. → Están ___.", "sirviéndola", "La sopa → la, pegado al gerundio con tilde: sirviéndola."),
      fb("Paso 2.", "Están sirviendo la sopa a los invitados. → Están ___.", "sirviéndosela", "Les (a los invitados) → se + la (la sopa), pegados al gerundio: sirviéndosela."),
      fb("Paso 3.", "Están sirviendo la sopa a los invitados. → ___ están sirviendo.", "Se la", "Los pronombres pueden ir delante de estar: se la están sirviendo."),
      wo("Nos lo están explicando ahora.", "Delante de estar.", "They're explaining it to us now."),
      toEs("I'm reading it to you (the letter, tú).", "Estoy leyéndotela.", "Con gerundio, los pronombres se pegan (te + la), con tilde: leyéndotela.", ["Te la estoy leyendo."]),
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
        [
          "Recuerda las reglas: persona antes que cosa (te lo, no lo te); le/les → se delante de lo/la/los/las; pegados al infinitivo, al gerundio o al mandato afirmativo, con tilde cuando la palabra crece; delante en el negativo y con verbos conjugados.",
          "Lee el mensaje y busca los tres errores: «Hola, Rosa: el libro que me pediste, le lo di a tu hermano. Las fotos lo te mando esta noche. Y la receta, quiero darsela a tu madre mañana.»",
        ],
        [
          ["El libro se lo di a tu hermano.", "I gave the book to your brother. (le lo → se lo)"],
          ["Las fotos te las mando esta noche.", "I'll send you the photos tonight. (te antes que las; las por las fotos)"],
          ["La receta quiero dársela a tu madre mañana.", "I want to give the recipe to your mother tomorrow. (tilde: dár-se-la)"],
        ],
        [
          mc(
            "¿Qué error hay en «le lo di»?",
            ["Le + lo debe cambiar a se lo.", "Falta la tilde.", "El orden está invertido.", "Debe ser «lo le di»."],
            0,
            "«Le» delante de lo, la, los, las siempre pasa a «se»: le lo → se lo di. No falta tilde, el orden (indirecto + directo) es el correcto y «lo le» lo invertiría."
          ),
        ]
      ),
    ],
    [
      toEs("Corrige: «El cuadro, le lo regalé a tu prima.»", "El cuadro, se lo regalé a tu prima.", "Le delante de lo se convierte en se: se lo regalé. «Le lo» no existe."),
      toEs("Corrige: «Las postales lo te escribo mañana.»", "Las postales te las escribo mañana.", "Dos errores: la persona (te) va antes que la cosa, y la cosa es «las postales», femenino plural → las."),
      toEs("Corrige: «Necesito pedirsela a tu padre hoy.»", "Necesito pedírsela a tu padre hoy.", "Con dos pronombres pegados el acento queda en la antepenúltima sílaba (pe-dír-se-la) → tilde.", ["Se la necesito pedir a tu padre hoy."]),
      toEs("Corrige: «No dímelo ahora.»", "No me lo digas ahora.", "En el negativo, los pronombres van delante y el verbo en subjuntivo: no me lo digas."),
      toEs("Corrige: «Les las envié ayer a mis tíos.»", "Se las envié ayer a mis tíos.", "Les delante de las se convierte en se; el plural de «tíos» no se ve en se: se las envié."),
      ms(
        "¿Qué frases están bien?",
        ["Se lo voy a explicar.", "Voy a explicárselo.", "Voy a se lo explicar.", "Lo se voy a explicar."],
        [0, 1],
        "Los pronombres van delante del verbo conjugado (se lo voy a explicar) o pegados al infinitivo (voy a explicárselo), nunca en medio: «Voy a se lo explicar» es incorrecta. «Lo se» invierte el orden."
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
        [
          "Recuerda la regla: en un diálogo, los pronombres cambian según quién habla. Si alguien te dice «¿me prestas…?», tú respondes «te lo presto». La cosa decide lo/la/los/las; la persona va primero, y le/les se vuelve se.",
          "Lee el diálogo. Marta: «Diego, ¿me prestas tu coche el sábado?» Diego: «Te lo presto, pero devuélvemelo con gasolina.» Marta: «Claro. ¿Y las llaves?» Diego: «Te las dejo en la mesa. Ah, y el cargador del móvil de Laura: dáselo esta tarde, por favor.»",
        ],
        [
          ["Te lo presto, pero devuélvemelo con gasolina.", "I'll lend it to you, but give it back to me with fuel. (me → te al responder; lo = el coche)"],
          ["Te las dejo en la mesa.", "I'll leave them for you on the table. (las = las llaves)"],
        ],
        [
          mc(
            "Laura le pregunta a Diego: «¿Me dejas tu plancha?» Diego responde: «Sí, ___ dejo.»",
            ["te la", "se la", "me la", "la te"],
            0,
            "Laura dice «me»; Diego responde desde su lado: a ti → te, y la plancha → la: te la dejo. «Se la» sería para otra persona y «la te» invierte el orden."
          ),
        ]
      ),
    ],
    [
      fb("Completa la respuesta.", "Laura: «¿Me devuelves mis cascos?» Marta: «Sí, ahora ___ devuelvo.»", "te los", "Laura dice «me»; Marta responde con te (a ti) + los (los cascos): te los devuelvo."),
      fb("Completa.", "Marta: «¿Dónde están las llaves del trastero?» Diego: «___ di a Laura esta mañana.»", "Se las", "A Laura → le, que delante de las se convierte en se; las llaves → las: se las di."),
      mc(
        "En el diálogo, ¿a quién se refiere «se» en «dáselo esta tarde»?",
        ["A Laura", "A Marta", "A Diego", "Al cargador"],
        0,
        "«Se» es el antiguo le: la persona que recibe el cargador, Laura. El cargador es «lo». Marta es quien tiene que dárselo y Diego quien lo pide."
      ),
      fb("Completa.", "Marta (el domingo): «Diego, el coche ya ___ he devuelto.»", "te lo", "Te (a Diego) + lo (el coche), delante de haber: te lo he devuelto."),
      fb("Completa.", "Marta: «Y a Laura, el cargador ___ di ayer.»", "se lo", "A Laura → le, que delante de lo (el cargador) se convierte en se: se lo di."),
      mc(
        "Diego: «¿Y la gasolina? ¿___ pusiste?»",
        ["Se la", "Le la", "La se", "Se lo"],
        0,
        "Al coche (le) + la gasolina (la): le la → se la. «Le la» no existe, «La se» invierte el orden y «Se lo» no concuerda con «la gasolina»."
      ),
      toEs("Don't give it to her yet (the charger).", "No se lo des todavía.", "Negativo: pronombres delante (le → se + lo) + subjuntivo: no se lo des.", ["Todavía no se lo des."]),
    ]
  ),
  L(
    "vosotros-commands-1",
    "b1d-patron-hablad-comed",
    "Práctica de patrones: quita la -r, pon una -d",
    "Forma el mandato afirmativo de vosotros con una sola regla, incluso con verbos irregulares: infinitivo sin -r + -d (hablad, haced, id).",
    "5 min",
    [
      sec(
        "Una sola regla",
        [
          "Recuerda la regla: mandato afirmativo de vosotros = infinitivo sin -r + d. Hablar → hablad, beber → bebed, abrir → abrid.",
          "Funciona también con los verbos que son irregulares en tú (haz, ven, pon, sal) y con los que cambian la raíz (cierra, duerme, pide), porque sale directamente del infinitivo, que nunca cambia: haced, venid, poned, salid, cerrad, dormid, pedid. Ojo con no confundirlo con el presente: habláis (presente) ≠ hablad (orden).",
        ],
        [
          ["¡Venid a cenar!", "Come to dinner! (you all) (venir → venid, aunque en tú sea ven)"],
          ["Haced los deberes antes de salir.", "Do your homework before going out. (hacer → haced)"],
          ["Cerrad bien la puerta.", "Close the door properly. (cerrar → cerrad, sin ie)"],
        ],
        [
          fb("Forma.", "(escuchar, vosotros) → ¡___ con atención!", "Escuchad", "Infinitivo sin -r + d: escuchar → escuchad."),
        ]
      ),
    ],
    [
      fb("Mismo marco.", "(perder, vosotros) → ¡No tengáis miedo, ___ la vergüenza!", "perded", "Perder → perded: sin el cambio e → ie del tú (pierde), porque sale del infinitivo."),
      fb("Mismo marco.", "(poner, vosotros) → ¡___ la mesa!", "Poned", "Poner → poned. El irregular «pon» es solo de tú."),
      fb("Mismo marco.", "(salir, vosotros) → ¡___ ya, que llegáis tarde!", "Salid", "Salir → salid; «sal» es solo de tú."),
      fb("Mismo marco.", "(tener, vosotros) → ¡___ cuidado con el perro!", "Tened", "Tener → tened; «ten» es solo de tú."),
      fb("Mismo marco.", "(decir, vosotros) → ¡___ la verdad!", "Decid", "Decir → decid; «di» es solo de tú."),
      fb("Mismo marco.", "(dormir, vosotros) → ¡___ un poco más!", "Dormid", "Dormir → dormid, sin el cambio o → ue del tú (duerme)."),
      mc(
        "Tú: ven. Vosotros:",
        ["venid", "venís", "vened", "vinid"],
        0,
        "El mandato afirmativo de vosotros se forma cambiando la -r del infinitivo por -d: venir → venid. «Venís» es indicativo, y «vened» o «vinid» no existen."
      ),
      toEs("Kids, open your books! (vosotros)", "¡Niños, abrid los libros!", "Abrir → abrid. (En Latinoamérica, con ustedes: ¡Niños, abran los libros!)", ["Niños, abrid los libros."]),
    ]
  ),
  L(
    "vosotros-commands-1",
    "b1d-cadena-tu-a-vosotros",
    "Cadena de transformaciones: de uno a varios",
    "Transforma mandatos de tú en mandatos de vosotros (come → comed, haz → haced, sé → sed): una madre pasa de hablar con un hijo a hablar con tres.",
    "6 min",
    [
      sec(
        "Tú → vosotros",
        [
          "Recuerda la regla: para pasar de tú a vosotros no partas del mandato de tú, sino del infinitivo: quita la -r y pon -d. Por eso el de vosotros siempre es regular aunque el de tú no lo sea: haz → haced, pon → poned, sé → sed.",
          "Al hablar a varios, cambia también lo que concuerda con ellos: los adjetivos van en plural (sed buenos) y los posesivos pasan a vuestro (vuestra abuela).",
        ],
        [
          ["Sé paciente. → Sed pacientes.", "Be patient. (ser → sed; el adjetivo, en plural)"],
          ["Come la fruta. → Comed la fruta.", "Eat the fruit. (comer → comed)"],
          ["Llama a tu tía. → Llamad a vuestra tía.", "Call your aunt. (tu → vuestra)"],
        ],
        [
          fb("Transforma.", "Ve a la tienda. → ___ a la tienda.", "Id", "El mandato de vosotros cambia la -r del infinitivo por -d: ir → id."),
        ]
      ),
    ],
    [
      fb("Transforma.", "Sal al patio. → ___ al patio.", "Salid", "Vosotros: infinitivo sin -r + -d: salir → salid (el irregular «sal» es solo de tú)."),
      fb("Transforma.", "Pon los abrigos aquí. → ___ los abrigos aquí.", "Poned", "Vosotros: poner → poned. Los irregulares de tú no afectan a vosotros."),
      fb("Transforma.", "Di adiós a la abuela. → ___ adiós a la abuela.", "Decid", "Vosotros: decir → decid, siempre regular."),
      fb("Transforma.", "Ten paciencia. → ___ paciencia.", "Tened", "Vosotros: tener → tened."),
      fb("Transforma.", "Sé puntual. → ___ puntuales.", "Sed", "Vosotros: ser → sed, y el adjetivo pasa a plural: puntuales."),
      fb("Transforma.", "Pide ayuda si la necesitas. → ___ ayuda si la necesitáis.", "Pedid", "Vosotros: pedir → pedid (sin cambio de raíz)."),
      wo("Traed algo de beber a la fiesta.", "Traer → traed.", "Bring something to drink to the party."),
    ]
  ),
  L(
    "vosotros-commands-1",
    "b1d-habla-de-ti-instrucciones-grupo",
    "Habla de ti: instrucciones para tus amigos",
    "Das instrucciones a un grupo de amigos para una excursión con el mandato afirmativo de vosotros (traed, venid, llamadme).",
    "6 min",
    [
      sec(
        "La excursión",
        [
          "Recuerda la regla: para dar instrucciones a un grupo de amigos (en España), usa el mandato de vosotros: infinitivo sin -r + d (traed, venid, llevad). Un pronombre se pega detrás sin tilde: llamadme, esperadnos, enviadlas.",
          "Tu situación: organizas una excursión y escribes al grupo de amigos lo que tienen que hacer. Piensa qué les dirías: Traed agua. Llevad zapatos cómodos. Venid a las ocho. Llamadme si os perdéis.",
        ],
        [
          ["Llevad zapatos cómodos.", "Wear comfortable shoes. (llevar → llevad)"],
          ["Avisadme cuando lleguéis.", "Let me know when you arrive. (avisad + me, sin tilde)"],
        ],
        [
          fb("Tus instrucciones.", "___ crema solar. (traer)", "Traed", "Infinitivo sin -r + d: traer → traed (no «traigad»: no sale de traigo)."),
        ]
      ),
    ],
    [
      fb("Tus instrucciones.", "___ a la estación a las ocho. (venir)", "Venid", "Venir → venid; el irregular «ven» es solo de tú."),
      fb("Tus instrucciones.", "___ bocadillos para el mediodía. (preparar)", "Preparad", "Infinitivo sin -r + d: preparad."),
      fb("Tus instrucciones.", "___ el chat del grupo esta noche. (mirar)", "Mirad", "Infinitivo sin -r + d: mirad."),
      fb("Tus instrucciones.", "___ una chaqueta, que por la tarde hace frío. (coger)", "Coged", "Coger → coged. Ojo: coger es neutro en España, pero en México, Argentina y buena parte de Latinoamérica es vulgar; allí se dice tomar o agarrar."),
      fb("Tus instrucciones.", "___ el billete de tren con tiempo. (comprar)", "Comprad", "Infinitivo sin -r + d: comprad."),
      toEs("Call me if you have a problem. (vosotros)", "Llamadme si tenéis un problema.", "Vosotros: llamad + me → llamadme; si + presente (tenéis).", ["Llamadme si tenéis algún problema."]),
      toEs("Bring water and wear good shoes. (vosotros)", "Traed agua y llevad buenos zapatos.", "Afirmativo de vosotros: infinitivo sin -r + -d: traed, llevad.", ["Traed agua y poneos buenos zapatos.", "Traed agua y llevad zapatos buenos."]),
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
        [
          "Afirmativo reflexivo: el mandato de vosotros (sentad) + os pierde la -d → sentaos. La -d cae porque «sentados» se confundiría con el participio; en los verbos en -ir aparece tilde para marcar el hiato (vestíos, divertíos). Única excepción: idos.",
          "Negativo: el pronombre sale delante y el verbo va en subjuntivo de vosotros: no os sentéis. Es la misma lógica que con tú (siéntate / no te sientes): en el sí, el pronombre va detrás; en el no, delante.",
        ],
        [
          ["Sentaos, por favor.", "Sit down, please. (sentad + os: sin -d)"],
          ["No os sentéis ahí, está mojado.", "Don't sit there, it's wet. (os delante + subjuntivo)"],
          ["Divertíos mucho.", "Have a lot of fun. (-ir: tilde en la í)"],
          ["Idos ya, que es tarde.", "Off you go now, it's late. (la única que conserva la -d)"],
        ],
        [
          fb("Cambia al negativo.", "Levantaos. → No ___.", "os levantéis", "El negativo de vosotros usa el subjuntivo, con el pronombre delante: no os levantéis."),
          toEs("No os peinéis en la cocina.", "Peinaos en el baño.", "Afirmativo: peinad + os → «peinaos», sin -d y con el pronombre detrás.", [], "Cambia al afirmativo y di dónde sí: en el baño."),
        ]
      ),
    ],
    [
      fb("Par A.", "(ducharse, vosotros) → ___ antes de cenar.", "Duchaos", "Duchad + os → duchaos: la -d cae delante de os."),
      fb("Par B.", "(no ducharse, vosotros) → No ___ con agua fría.", "os duchéis", "Negativo: os delante + subjuntivo de vosotros, «duchéis»."),
      fb("Par A.", "(callarse, vosotros) → ¡___ un momento!", "Callaos", "Callad + os → callaos."),
      fb("Par B.", "(no irse, vosotros) → No ___ todavía.", "os vayáis", "Irse en negativo usa el subjuntivo de ir: os vayáis. La excepción «idos» es solo del afirmativo."),
      mc(
        "El mandato afirmativo de «irse» para vosotros es:",
        ["idos", "ios", "vayaos", "idíos"],
        0,
        "Irse es la única excepción: el mandato de vosotros conserva la -d: idos. «Iros» se oye en el habla coloquial, pero la norma recomienda idos; «vayaos», «ios» e «idíos» no existen."
      ),
      toEs("Preocupaos por el examen.", "No os preocupéis por el examen.", "Al negar, «os» sale delante y el verbo pasa al subjuntivo: «no os preocupéis».", [], "Cambia al negativo."),
      toEs("No os vistáis todavía.", "Vestíos ya.", "Afirmativo: vestid + os → «vestíos», con tilde en la í (hiato). El cambio e → i del subjuntivo desaparece.", [], "Cambia al afirmativo (empieza con el verbo y termina con «ya»)."),
      toEs("Sentados, que empieza la película.", "Sentaos, que empieza la película.", "El mandato es sentad + os → «sentaos». «Sentados» es un participio (seated), no una orden.", [], "Corrige la frase."),
      toEs("No os levantad hasta que suene el timbre.", "No os levantéis hasta que suene el timbre.", "Detrás de «no» nunca va la forma en -d: hace falta el subjuntivo, «no os levantéis».", [], "Corrige la frase."),
      toEs("Abrígate bien, que hace mucho frío.", "Abrigaos bien, que hace mucho frío.", "Abrigad + os → «abrigaos»: la -d cae delante de os. «Abrigados» sería un participio (wrapped up), no una orden.", [], "Cambia la frase a vosotros."),
      toEs("Sit down and don't get up without permission. (vosotros)", "Sentaos y no os levantéis sin permiso.", "Afirmativo sin -d (sentaos) + negativo con subjuntivo (no os levantéis). (Con ustedes: Siéntense y no se levanten sin permiso.)"),
      { type: "speak", prompt: "Di en voz alta a un grupo de niños (vosotros): «Wash your hands, but don't get wet.»", text: "Lavaos las manos, pero no os mojéis.", explanation: "Lavad + os → «lavaos»; negativo con os delante y subjuntivo: «no os mojéis»." },
    ]
  ),
  L(
    "vosotros-commands-2",
    "b1d-cuento-antes-del-cole",
    "Cuento con huecos: antes del cole",
    "Practica los mandatos de vosotros con reflexivos y negativos (despertaos, no os olvidéis) en las órdenes de un padre de Valencia a sus hijos por la mañana.",
    "6 min",
    [
      sec(
        "Recuerda la regla y lee el cuento",
        [
          "Recuerda la regla: afirmativo de vosotros = infinitivo sin -r + -d (desayunad); si el verbo es reflexivo, la -d cae delante de «os» (lavad + os → lavaos). Negativo = no + os + subjuntivo (no os pongáis). Ojo: un verbo que no es reflexivo no lleva «os» (no discutáis).",
          "Son las ocho y un padre de Valencia despierta a sus hijos: «¡Despertaos, que son las ocho! Lavaos la cara y vestíos. No os pongáis las zapatillas nuevas, que llueve. Desayunad algo y no os olvidéis de las mochilas. ¡Y no discutáis en el coche!»",
        ],
        [
          ["Peinaos antes de salir.", "Comb your hair before you go out. (peinad + os: sin -d)"],
          ["Recoged los platos.", "Clear the plates. (no reflexivo: la -d se queda)"],
          ["No os manchéis el uniforme.", "Don't get your uniform dirty. (os delante + subjuntivo)"],
          ["No gritéis, que la abuela duerme.", "Don't shout, Grandma's asleep. (no reflexivo: sin os)"],
        ],
        [
          fb("Completa.", "¡___ ya, que llegamos tarde! (levantarse)", "Levantaos", "Reflexivo afirmativo: levantad + os → «levantaos», sin -d."),
          toEs("Os ponéis el abrigo.", "No os pongáis el abrigo, que hace calor.", "Para prohibir, no + os + subjuntivo: poner → pongo → «pongáis».", [], "Cambia la frase a una orden negativa y añade «que hace calor»."),
        ]
      ),
    ],
    [
      fb("Completa el cuento.", "¡___, que son las ocho! (despertarse)", "Despertaos", "Despertad + os → «despertaos»: la -d cae y no hay diptongo en vosotros."),
      fb("Completa el cuento.", "___ la cara y vestíos. (lavarse)", "Lavaos", "Lavad + os → «lavaos»."),
      fb("Completa el cuento.", "No ___ las zapatillas nuevas, que llueve. (ponerse)", "os pongáis", "Negativo: os delante + subjuntivo «pongáis» (de pongo)."),
      fb("Completa el cuento.", "___ algo antes de salir. (desayunar)", "Desayunad", "Desayunar no es reflexivo aquí: conserva la -d."),
      fb("Completa el cuento.", "¡Y no ___ en el coche! (discutir)", "discutáis", "Negativo sin reflexivo: solo el subjuntivo, «discutáis», sin «os»."),
      ms(
        "¿Qué formas son correctas?",
        ["peinaos", "no os peinéis", "peinados", "no peinaos"],
        [0, 1],
        "El afirmativo reflexivo pierde la -d (peinad + os → peinaos) y el negativo usa subjuntivo (no os peinéis). «Peinados» es un participio, y «no peinaos» usa la forma afirmativa en una negación."
      ),
      toEs("No os olvidéis del almuerzo.", "Acordaos del almuerzo.", "Lo contrario de olvidarse es acordarse: acordad + os → «acordaos» (sin diptongo en vosotros).", [], "Transforma la orden en positivo con «acordarse»."),
      toEs("Sécate el pelo.", "Secaos el pelo.", "Al pasar de tú a vosotros: secad + os → «secaos», sin -d y sin tilde.", [], "Cambia a vosotros."),
      toEs("Lavados los dientes y bajad.", "Lavaos los dientes y bajad.", "Lavad + os → «lavaos»: «lavados» es un participio. «Bajad», que no es reflexivo, sí conserva la -d.", [], "Corrige la frase."),
      toEs("No os discutáis por el mando de la tele.", "No discutáis por el mando de la tele.", "«Discutir» no es reflexivo: no lleva «os». (Sí lo es «pelearse»: no os peleéis.)", [], "Corrige la frase."),
      toEs("Vístetos rápido, que viene el autobús.", "Vestíos rápido, que viene el autobús.", "Vestid + os → «vestíos», con tilde en la í; «vístetos» mezcla la forma de tú con la de vosotros.", [], "Corrige la frase."),
      toEs("Hurry up and don't make noise. (vosotros)", "Daos prisa y no hagáis ruido.", "Darse prisa → daos (la -d cae ante os); el negativo usa subjuntivo: no hagáis.", ["Daos prisa y no hagáis ruido, por favor."]),
      { type: "speak", prompt: "Eres el padre. Di en voz alta: «Get dressed and don't forget your coats.» (vosotros)", text: "Vestíos y no os olvidéis de los abrigos.", explanation: "Vestid + os → «vestíos» (con tilde); negativo reflexivo: «no os olvidéis de…»." },
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
        "Recuerda la regla: un esquema para cuatro casos",
        [
          "Recuerda la regla. Afirmativo: infinitivo sin -r + -d (hablad, abrid). Con «os» la -d cae (sentaos), salvo «idos». Con cualquier otro pronombre la -d se queda y la palabra lleva tilde si queda esdrújula (decídmelo, contádsela). Negativo: todos los pronombres delante + subjuntivo de vosotros (no habléis, no os sentéis, no me lo digáis).",
          "La idea de fondo es la misma que con tú: en el afirmativo los pronombres se pegan detrás; en el negativo van delante, como con cualquier verbo conjugado.",
        ],
        [
          ["Abrid los libros.", "Open your books. (afirmativo: -d)"],
          ["Callaos un momento.", "Be quiet for a moment. (callad + os: sin -d)"],
          ["¿El mapa? Dádnoslo.", "The map? Give it to us. (dad + nos + lo: la -d se queda)"],
          ["No os riais, que es serio.", "Don't laugh, it's serious. (negativo reflexivo: os delante)"],
        ],
        [
          fb("Rápido.", "(contar, vosotros, a mí, la historia) → ___.", "Contádmela", "Afirmativo de vosotros: contad + me + la, con tilde: contádmela."),
          toEs("Decídmelo ahora.", "No me lo digáis ahora.", "Al negar, los dos pronombres salen delante y el verbo pasa al subjuntivo de vosotros: «no me lo digáis».", [], "Cambia al negativo."),
        ]
      ),
    ],
    [
      fb("Rápido.", "(no gritar, vosotros) → No ___.", "gritéis", "Negativo de vosotros: subjuntivo, «gritéis»."),
      fb("Rápido.", "(quedarse, vosotros) → ___ aquí.", "Quedaos", "Quedad + os → «quedaos»: la -d cae delante de os."),
      fb("Rápido.", "(no quedarse, vosotros) → No ___ aquí.", "os quedéis", "Negativo reflexivo: os delante + subjuntivo."),
      fb("Rápido.", "(no tocar, vosotros) → No ___ nada.", "toquéis", "Subjuntivo de tocar: c → qu delante de e, «toquéis»."),
      mc(
        "(irse, vosotros) → ¡___ ya!",
        ["Idos", "Vayaos", "Ios", "Id os"],
        0,
        "Irse es la excepción: conserva la -d en el mandato de vosotros: idos. «Iros» se oye en el habla coloquial, pero la norma recomienda idos; «vayaos», «ios» e «id os» no existen."
      ),
      toEs("No os mováis de aquí.", "Moveos de aquí.", "Afirmativo: moved + os → «moveos», sin -d y con el pronombre pegado.", [], "Cambia al afirmativo."),
      toEs("Traednos las bebidas.", "Traédnoslas.", "Las bebidas → las. Traed + nos + las → «traédnoslas»: la -d se queda (no hay os) y aparece la tilde.", [], "Sustituye «las bebidas» por un pronombre."),
      toEs("Abrid las ventanas y no las cerrad hasta la noche.", "Abrid las ventanas y no las cerréis hasta la noche.", "Detrás de «no» va el subjuntivo: «no las cerréis». La forma en -d solo es afirmativa.", [], "Corrige la frase."),
      toEs("Cuéntamelo todo.", "Contádmelo todo.", "Contad + me + lo: en vosotros la raíz no diptonga (contad, no «cuentad») y la palabra, esdrújula, necesita tilde: «contádmelo».", [], "Cambia la frase a vosotros."),
      toEs("¡Divertidos en la excursión!", "¡Divertíos en la excursión!", "Divertid + os → «divertíos»: la -d cae y la í lleva tilde. «Divertidos» es un adjetivo (fun).", [], "Corrige la frase."),
      { type: "speak", prompt: "Ronda en voz alta (vosotros): «Sit down. Don't sit down. Tell it to me. Don't tell it to me.»", text: "Sentaos. No os sentéis. Decídmelo. No me lo digáis.", explanation: "Afirmativo: pronombres detrás (sentaos sin -d; decídmelo con -d y tilde). Negativo: pronombres delante + subjuntivo." },
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
        "Recuerda el truco: el subjuntivo nace del yo",
        [
          "Recuerda la regla: presente yo → quita la -o → añade la vocal contraria (-ar → e, -er/-ir → a). Tengo → tenga, conozco → conozca, salgo → salga, hago → haga, construyo → construya.",
          "Por eso la forma yo es la llave: cualquier letra extra que tenga (-g-, -zc-, -y-, -ig-) aparece en todas las personas del subjuntivo. Solo fallan los seis verbos cuya forma yo no acaba en -o (soy, estoy, voy, sé, doy, he).",
        ],
        [
          ["Quiero que salgas conmigo.", "I want you to go out with me. (salgo → salgas)"],
          ["Es importante que conozcas a mi familia.", "It's important that you meet my family. (conozco → conozcas)"],
          ["Ojalá que no destruyan el parque.", "Hopefully they don't destroy the park. (destruyo → destruyan)"],
        ],
        [
          fb("Cambia al subjuntivo.", "pongo → que él ___", "ponga", "El subjuntivo sale de la forma yo: pongo → pong- + a → ponga."),
          mc(
            "Aplica la regla: «obedecer» → yo obedezco. ¿Qué forma es correcta para «que tú»?",
            ["obedezcas", "obedeces", "obedecas", "obedezas"],
            0,
            "Desde obedezco: obedezc- + -as = obedezcas. «Obedeces» es indicativo, «obedecas» pierde la zc y «obedezas» pierde la c."
          ),
        ]
      ),
    ],
    [
      fb("Cambia al subjuntivo.", "traigo → que nosotros ___", "traigamos", "Traigo → traig- + amos → traigamos: la irregularidad de yo pasa a todo el subjuntivo."),
      fb("Cambia al subjuntivo.", "digo → que ellos ___", "digan", "Digo → dig- + an → digan: la raíz irregular de yo se mantiene."),
      fb("Cambia al subjuntivo.", "oigo → que tú ___", "oigas", "Oigo → oig- + as → oigas: la raíz irregular de yo se mantiene."),
      fb("Cambia al subjuntivo.", "vengo → que usted ___", "venga", "Vengo → veng- + a → venga (usted usa la forma de él)."),
      fb("Cambia al subjuntivo.", "conduzco → que yo ___", "conduzca", "Conduzco → conduzc- + a → conduzca: la zc de yo pasa al subjuntivo."),
      fb("Cambia al subjuntivo.", "veo → que vosotros ___", "veáis", "Veo → ve- + áis → veáis: se quita solo la -o final de la forma yo."),
      mc("¿Qué forma NO sale del yo del presente?", ["sea", "haga", "tenga", "diga"], 0, "Casi todos los subjuntivos salen de la forma yo: hago → haga, tengo → tenga, digo → diga. Ser es la excepción: de «soy» no sale nada, y el subjuntivo es sea."),
      toEs("I hope you bring the guitar. (tú)", "Espero que traigas la guitarra.", "Espero que + subjuntivo, formado desde traigo: traigas."),
      fb("Cambia al subjuntivo.", "hago → que tú ___", "hagas", "Hago → hag- + as → hagas."),
      fb("Cambia al subjuntivo.", "tengo → que nosotros ___", "tengamos", "Tengo → teng- + amos → tengamos: la g se queda también en nosotros."),
      fb("Cambia al subjuntivo.", "salgo → que ustedes ___", "salgan", "Salgo → salg- + an → salgan."),
      fb("Cambia al subjuntivo.", "conozco → que ella ___", "conozca", "Conozco → conozc- + a → conozca."),
      fb("Cambia al subjuntivo.", "ofrezco → que ellos ___", "ofrezcan", "Ofrezco → ofrezc- + an → ofrezcan, como conozco → conozcan."),
      fb("Cambia al subjuntivo.", "construyo → que tú ___", "construyas", "Construyo → construy- + as → construyas: la y de la forma yo se mantiene."),
      toEs("Quiero que traes el postre.", "Quiero que traigas el postre.", "«Quiero que» pide subjuntivo, formado desde traigo: traigas. «Traes» es indicativo.", ["Quiero que tú traigas el postre."], "Corrige la frase."),
      toEs("Es importante que decimos gracias.", "Es importante que digamos gracias.", "«Es importante que» pide subjuntivo, y decir parte de digo: digamos.", [], "Corrige la frase."),
      toEs("I don't want you (tú) to fall.", "No quiero que te caigas.", "No quiero que + subjuntivo; caer parte de caigo: te caigas."),
      toEs("I hope you all (ustedes) see the fireworks.", "Espero que vean los fuegos artificiales.", "Espero que + subjuntivo; desde veo: ve- + an → vean.", ["Espero que veáis los fuegos artificiales."]),
      toEs("Mi hermana quiere que conduzco su coche.", "Mi hermana quiere que conduzca su coche.", "Lo que quiere otra persona va en subjuntivo: desde conduzco, conduzca. «Conduzco» es indicativo.", ["Mi hermana quiere que yo conduzca su coche.", "Mi hermana quiere que maneje su carro."], "Corrige la frase."),
      toEs("Hopefully the guests come early.", "Ojalá que los invitados vengan temprano.", "Ojalá + subjuntivo; vengo → vengan.", ["Ojalá los invitados vengan temprano.", "Ojalá que los invitados vengan pronto.", "Ojalá los invitados vengan pronto."]),
      toEs("Es mejor que pongas las bolsas aquí.", "Es mejor que ponga las bolsas aquí.", "Con usted, la terminación es la de él: pong- + a → ponga.", ["Es mejor que usted ponga las bolsas aquí."], "Cambia a la forma de usted."),
      mc("¿Qué forma es correcta para «que nosotros» de «oír»?", ["oigamos", "oyamos", "oímos", "oamos"], 0, "Oigo → oig- → oigamos. «Oyamos» no parte de la forma yo, «oímos» es indicativo y «oamos» pierde la g."),
      wo("Prefiero que no digas nada a nadie", "Prefiero que + subjuntivo: digo → digas.", "I'd rather you (tú) didn't say anything to anyone"),
      wo("Espero que valga la pena", "Valer → valgo → valga: la g de la forma yo pasa al subjuntivo.", "I hope it's worth it"),
      toEs("The neighbors don't want them to build a wall.", "Los vecinos no quieren que construyan un muro.", "Construyo → construy- + an → construyan.", ["Los vecinos no quieren que construyan una pared."]),
      toEs("I want you (tú) to come with me and tell me the truth.", "Quiero que vengas conmigo y me digas la verdad.", "Vengo → vengas; digo → digas.", ["Quiero que vengas conmigo y que me digas la verdad."]),
      { type: "speak", prompt: "Responde en voz alta: organizas una cena. Di qué quieres que traigan y hagan tus invitados (traer, hacer; ustedes).", text: "Quiero que traigan algo de beber y que hagan un postre.", explanation: "Desde la forma yo: traigo → traigan, hago → hagan." },
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
        "Recuerda la regla: los seis rebeldes",
        [
          "Recuerda la regla: dar → dé, estar → esté, haber → haya, ir → vaya, saber → sepa, ser → sea (DISHES). No siguen el truco de la forma yo porque esa forma no acaba en -o: doy, estoy, he, voy, sé, soy.",
          "Las terminaciones sí son las normales: vaya, vayas, vayamos; sepa, sepas, sepan. Ojo con las tildes: dé y esté (y estés, estén…) la llevan; des, demos, den, no.",
        ],
        [
          ["Ojalá haya sitio en el tren.", "I hope there's room on the train. (haber → haya)"],
          ["No creo que sepa la respuesta.", "I don't think he knows the answer. (saber → sepa)"],
          ["Quieren que les demos una respuesta.", "They want us to give them an answer. (demos: no accent)"],
        ],
        [
          fb("Rápido.", "Espero que ___ bien. (estar, tú)", "estés", "Estar → esté…, estés (tú), con tilde."),
          mc(
            "¿Por qué «ir» no sigue la receta de la forma yo en el subjuntivo?",
            ["Porque su forma yo (voy) no termina en -o.", "Porque es un verbo en -ir.", "Porque cambia o → ue.", "Porque es reflexivo."],
            0,
            "La receta quita la -o de la forma yo; voy no tiene esa -o, así que ir necesita su propio subjuntivo: vaya. Muchos verbos en -ir son regulares, ir no cambia o → ue y no es reflexivo."
          ),
        ]
      ),
    ],
    [
      fb("Rápido.", "Es necesario que ___ a la reunión. (ir, nosotros)", "vayamos", "Ir → vaya + -mos: vayamos."),
      fb("Rápido.", "No creo que ___ tan difícil. (ser)", "sea", "«No creo que» pide subjuntivo; ser → sea."),
      fb("Rápido.", "Ojalá ___ entradas todavía. (haber)", "haya", "Haber impersonal → haya, en singular aunque «entradas» sea plural."),
      fb("Rápido.", "Quiero que me ___ tu opinión. (dar, tú)", "des", "Dar → des, sin tilde (solo dé la lleva)."),
      fb("Rápido.", "Dudo que ellos ___ nadar. (saber)", "sepan", "«Dudo que» pide subjuntivo; saber → sepan."),
      fb("Rápido.", "Me encanta que ___ todos juntos en casa. (estar, vosotros)", "estéis", "Una emoción (me encanta que) pide subjuntivo; estar → estéis, con tilde."),
      fb("Rápido.", "Prefiero que le ___ usted el recado. (dar)", "dé", "Dar → dé para usted, con tilde para distinguirlo de la preposición de."),
      mt(
        "Relaciona el infinitivo con su subjuntivo.",
        [
          ["ir", "vaya"],
          ["saber", "sepa"],
          ["haber", "haya"],
          ["ser", "sea"],
        ],
        "Cuatro de los seis irregulares (DISHES): su forma yo (voy, sé, he, soy) no acaba en -o, así que el subjuntivo se aprende aparte."
      ),
      toEs("I hope the meeting isn't long.", "Espero que la reunión no sea larga.", "Ser → sea; no sale de la forma yo (soy). Larga es una característica: ser."),
      toEs("Es posible que hay tráfico.", "Es posible que haya tráfico.", "«Es posible que» pide subjuntivo: hay → haya.", [], "Corrige la frase."),
      { type: "fill-blank", prompt: "¿Cómo se dicen en español las palabras en negrita?", sentence: "Ojalá que tu hermano ___ en casa.", answer: "esté", en: "Hopefully your brother [is] at home.", explanation: "Ubicación → estar; ojalá pide subjuntivo: esté (con tilde)." },
      { type: "fill-blank", prompt: "¿Cómo se dicen en español las palabras en negrita?", sentence: "Mis amigos quieren que ___ con ellos a la playa.", answer: "vaya", en: "My friends want me [to go] with them to the beach.", explanation: "Quieren que + otro sujeto → subjuntivo de ir: vaya." },
      toEs("Mi abuela quiere que le dé un abrazo.", "Mi abuela quiere que le demos un abrazo.", "Nosotros → demos, sin tilde: solo dé (yo, él, usted) la lleva.", [], "Cambia el sujeto de la segunda parte a nosotros."),
      wo("No creo que sepan dónde estamos", "Saber → sepan después de «no creo que»; «estamos» es un hecho, en indicativo.", "I don't think they know where we are"),
      toEs("I hope you (tú) are happy and that there's time to see each other.", "Espero que seas feliz y que haya tiempo para vernos.", "Ser → seas; haber → haya.", ["Espero que seas feliz y haya tiempo para vernos.", "Espero que estés feliz y que haya tiempo para vernos."]),
      toEs("Ojalá que mis padres estan bien.", "Ojalá que mis padres estén bien.", "Ojalá pide subjuntivo: estén, con tilde. «Están» es indicativo.", ["Ojalá mis padres estén bien."], "Corrige la frase."),
      ms(
        "¿Qué formas están bien escritas?",
        ["que él dé", "que nosotros démos", "que ellas estén", "que tú des", "que yo este"],
        [0, 2, 3],
        "Llevan tilde dé (para no confundirse con de) y las formas de estar: esté, estés, estén. «Démos» no lleva tilde, y «este» sin tilde es un demostrativo."
      ),
      { type: "speak", prompt: "Responde en voz alta: deséale a un amigo que hay comida rica en su viaje y que el hotel es bonito (haber, ser).", text: "Ojalá haya comida rica en tu viaje y que el hotel sea bonito.", explanation: "Ojalá + subjuntivo irregular: haber → haya, ser → sea." },
    ]
  ),
  L(
    "b1-vocabulary-practice-2",
    "b1d-rep-deseo-quiero-que",
    "Práctica mezclada: quiero + infinitivo o quiero que + subjuntivo",
    "Repaso espaciado: infinitivo cuando el sujeto es el mismo, que + subjuntivo cuando cambia (querer, esperar, preferir, necesitar).",
    "6 min",
    [
      sec(
        "¿Cuántos sujetos?",
        [
          "Recuerda la regla: un solo sujeto → infinitivo (Quiero viajar: yo quiero, yo viajo). Dos sujetos distintos → que + subjuntivo (Quiero que viajes conmigo: yo quiero, tú viajas).",
          "Por qué: el infinitivo no tiene persona, así que solo puede tomar el sujeto del verbo principal. Cuando la acción la hace otro, hace falta un verbo conjugado que diga quién, y tras un deseo ese verbo va en subjuntivo. Ojo con el inglés: «I want you to go» no es «quiero tú ir», sino «quiero que vayas».",
        ],
        [
          ["Prefiero quedarme en casa.", "I prefer to stay home. (yo prefiero, yo me quedo)"],
          ["Prefiero que te quedes en casa.", "I prefer that you stay home. (yo prefiero, tú te quedas)"],
          ["Mi hijo necesita que lo ayudemos.", "My son needs us to help him. (él necesita, nosotros ayudamos)"],
        ],
        [
          mc(
            "«Mis padres quieren ___ a Italia en verano.» (ellos mismos van)",
            ["ir", "que vayan", "que vamos", "vayan"],
            0,
            "Si los padres son quienes van, el sujeto es el mismo y se usa el infinitivo: quieren ir. «Que vayan» sería otra persona, «que vamos» usa indicativo y «vayan» solo omite el «que»."
          ),
          fb("¿Uno o dos sujetos?", "Mis padres quieren que mi hermano ___ a Italia con ellos. (ir)", "vaya", "Ellos quieren, mi hermano va: dos sujetos → que + subjuntivo. Ir es irregular: vaya."),
        ]
      ),
    ],
    [
      fb("¿Uno o dos?", "Necesito ___ más. (dormir, yo)", "dormir", "Yo necesito y yo duermo: mismo sujeto → infinitivo."),
      fb("¿Uno o dos?", "Necesito que ___ más. (dormir, tú)", "duermas", "Yo necesito, tú duermes: dos sujetos → subjuntivo; dormir diptonga (o → ue): duermas."),
      fb("¿Uno o dos?", "Mi jefa quiere ___ antes. (salir, ella)", "salir", "Ella quiere y ella sale: mismo sujeto → infinitivo."),
      fb("¿Uno o dos?", "Mi jefa quiere que ___ antes. (salir, nosotros)", "salgamos", "Ella quiere, nosotros salimos: dos sujetos → subjuntivo; salgo → salgamos."),
      fb("¿Uno o dos?", "Te pido que no ___ tan rápido. (conducir)", "conduzcas", "Pedir que + otro sujeto → subjuntivo; conduzco → conduzcas."),
      fb("¿Uno o dos?", "Os recomiendo ___ el museo. (visitar)", "visitar", "Con recomendar, aconsejar o permitir, la persona ya está en el pronombre (os), así que el infinitivo también es posible: os recomiendo visitar (= que visitéis)."),
      mc(
        "«Espero ___ el examen.» (yo apruebo)",
        ["aprobar", "que apruebe", "que apruebo", "aprobando"],
        0,
        "Yo espero y yo apruebo: mismo sujeto → infinitivo, espero aprobar. «Que apruebe» suena a otro sujeto, «que apruebo» usa indicativo y «aprobando» es gerundio."
      ),
      toEs("I want you to help me tonight. (tú)", "Quiero que me ayudes esta noche.", "Yo quiero, tú ayudas: dos sujetos → que + subjuntivo: me ayudes.", ["Quiero que esta noche me ayudes."]),
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
        [
          "Recuerda la regla: creo que, pienso que, me parece que, estoy seguro de que, es verdad que → indicativo. Aunque «creo» suene a opinión, con él presentas lo que sigue como verdad para ti.",
          "No creo que, no pienso que, no estoy seguro de que, dudo que, no es verdad que → subjuntivo: al negar la creencia, ya no afirmas nada. Cada par se diferencia solo por el «no», y ese «no» cambia el modo.",
        ],
        [
          ["Creo que llueve mañana.", "I think it'll rain tomorrow. (afirmas → indicativo)"],
          ["No creo que llueva mañana.", "I don't think it'll rain tomorrow. (niegas → subjuntivo)"],
          ["Me parece que tienes razón.", "I think you're right. (me parece que = creo que → indicativo)"],
        ],
        [
          fb("Completa con indicativo o subjuntivo.", "Pienso que el restaurante ___ caro. (ser)", "es", "Pensar en afirmativo presenta tu opinión como verdad → indicativo: es."),
          mc(
            "«No me parece que ___ justo.» (ser)",
            ["sea", "es", "será", "ser"],
            0,
            "«Me parece que» funciona como creo que; negado, ya no afirma → subjuntivo: sea. «Es» y «será» irían con «me parece que» afirmativo, y «ser» no tiene sujeto."
          ),
        ]
      ),
    ],
    [
      fb("Par A.", "Estoy segura de que Luis ___ la verdad. (decir)", "dice", "Estar segura afirma → indicativo: dice."),
      fb("Par B.", "No estoy segura de que Luis ___ la verdad. (decir)", "diga", "Con «no» la certeza desaparece → subjuntivo: diga (de «digo»)."),
      fb("Par A.", "Es verdad que el tren ___ retraso. (tener)", "tiene", "Es verdad afirma → indicativo: tiene."),
      fb("Par B.", "No es verdad que el tren ___ retraso. (tener)", "tenga", "Certeza negada → subjuntivo: tenga."),
      fb("Par A.", "Me parece que ___ una buena idea. (ser)", "es", "Me parece que = opinión afirmada → indicativo: es."),
      fb("Par B.", "Dudo que ___ una buena idea. (ser)", "sea", "Dudar nunca afirma → subjuntivo: sea."),
      ms(
        "¿Qué expresiones llevan subjuntivo?",
        ["dudo que", "no creo que", "creo que", "es obvio que"],
        [0, 1],
        "«Dudo que» y «no creo que» expresan duda: subjuntivo. «Creo que» y «es obvio que» expresan certeza: indicativo."
      ),
      toEs("I don't think they know the address.", "No creo que sepan la dirección.", "No creo que + subjuntivo; saber es irregular: sepan (no «saben»)."),
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
        [
          "Recuerda la regla: verbo de emoción (me alegra, me molesta, me preocupa, me encanta, me sorprende, me da pena) + que + subjuntivo cuando la causa es otra persona o cosa. ¿Por qué subjuntivo si el hecho es real? Porque no lo presentas como información nueva: lo das por sabido y reaccionas ante él.",
          "Si quien siente y quien hace la acción son la misma persona, no hay «que»: va el infinitivo (me alegra verte, me preocupa llegar tarde). Ahora habla de ti: completa con lo que te pasa de verdad.",
        ],
        [
          ["Me encanta que mis amigos cocinen para mí.", "I love it when my friends cook for me. (otro sujeto → cocinen)"],
          ["Me molesta que los vecinos hagan ruido.", "It bothers me that the neighbours make noise. (hacer → hagan)"],
          ["Me encanta cocinar para mis amigos.", "I love cooking for my friends. (mismo sujeto → infinitivo)"],
        ],
        [
          fb("Tu vida.", "Me alegra que mi familia ___ cerca. (vivir)", "viva", "Me alegra que + otro sujeto (mi familia) → subjuntivo: viva. «Vive» informaría, pero aquí reaccionas."),
        ]
      ),
    ],
    [
      fb("Tu vida.", "Me molesta que la gente no ___ por favor. (decir)", "diga", "Emoción + otro sujeto → subjuntivo. Decir sale de la raíz de yo digo: diga. «La gente» es singular."),
      fb("Tu vida.", "Me preocupa que mis padres ___ solos. (estar)", "estén", "Me preocupa que → subjuntivo de estar: estén, con tilde. «Están» sería informar."),
      fb("Tu vida.", "Me encanta que mi pareja me ___ flores. (traer)", "traiga", "Me encanta que → subjuntivo; traer sale de yo traigo: traiga."),
      fb("Tu vida.", "Me da pena que mi mejor amigo ___ tan lejos. (vivir)", "viva", "«Me da pena que» también es emoción → subjuntivo: viva."),
      fb("Tu vida.", "Me sorprende que ___ tantos turistas en invierno. (haber)", "haya", "Me sorprende que → subjuntivo de hay: haya, siempre en singular aunque «turistas» sea plural."),
      mc(
        "«Me alegra ___ contigo.» (yo estoy contigo)",
        ["estar", "que esté", "que estoy", "estoy"],
        0,
        "Me alegra a mí y yo estoy contigo: mismo sujeto → infinitivo, me alegra estar. «Que esté» se usaría con otro sujeto, «que estoy» usa indicativo y «estoy» no puede ir sin conector."
      ),
      toEs("It worries me that you (tú) work so much.", "Me preocupa que trabajes tanto.", "«Me preocupa que» expresa emoción → subjuntivo: trabajes."),
      toEs("I'm glad you're here. (tú)", "Me alegra que estés aquí.", "«Me alegra que» → subjuntivo: estés.", ["Me alegro de que estés aquí."]),
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
        [
          "Recuerda la regla: antes de elegir el modo, identifica la familia del verbo principal. Deseo (querer, preferir, esperar, pedir), duda (dudar, no creer, no estar seguro), emoción (alegrar, molestar, dar miedo). Las tres piden subjuntivo cuando hay dos sujetos, porque ninguna presenta la segunda acción como un hecho: la deseas, la pones en duda o reaccionas ante ella.",
          "La cuarta familia es la trampa: certeza (saber, estar seguro, creer en afirmativo) → indicativo, porque sí afirma. Y con un solo sujeto, deseo y emoción van con infinitivo: quiero venir, me alegra verte.",
        ],
        [
          ["Me da miedo que el perro se escape.", "I'm scared the dog will run away. (emoción → se escape)"],
          ["Quiero que me escuches.", "I want you to listen to me. (deseo → escuches)"],
          ["Sé que me escuchas.", "I know you're listening to me. (certeza → escuchas)"],
        ],
        [
          mc(
            "«Espero que mi equipo gane.» ¿Qué familia?",
            ["deseo", "duda", "emoción", "certeza"],
            0,
            "Esperar que = desear que algo pase: familia del deseo, que pide subjuntivo. No expresa duda, ni certeza, y aunque tiene algo de emoción, su valor principal es el deseo."
          ),
        ]
      ),
    ],
    [
      mc("«Dudo que el paquete llegue hoy.» ¿Qué familia?", ["duda", "deseo", "emoción", "certeza"], 0, "Dudar expresa falta de seguridad: familia de la duda, con subjuntivo. No es un deseo, ni una emoción, ni una certeza."),
      mc("«Me da rabia que siempre llegues tarde.» ¿Qué familia?", ["emoción", "duda", "deseo", "certeza"], 0, "«Me da rabia que» expresa un sentimiento: familia de la emoción, con subjuntivo. No es una duda, un deseo ni una certeza."),
      mc("«Sé que el paquete llega hoy.» ¿Qué modo?", ["indicativo", "subjuntivo", "infinitivo", "imperativo"], 0, "Saber presenta la información como cierta, así que lleva indicativo: sé que llega. El subjuntivo va con duda, deseo o emoción, y el infinitivo o el imperativo no encajan después de «que»."),
      fb("Completa.", "Les pido a mis alumnos que ___ en silencio. (trabajar)", "trabajen", "Pedir que es de la familia del deseo → subjuntivo: trabajen, no «trabajan»."),
      fb("Completa.", "No estoy seguro de que la tienda ___ hoy. (abrir)", "abra", "«No estoy seguro» expresa duda → subjuntivo: abra. Sin el «no» sería certeza (abre)."),
      fb("Completa.", "Me encanta que ___ la primavera. (llegar)", "llegue", "Emoción → subjuntivo: llegue, con gu para mantener el sonido de la g delante de e."),
      fb("Completa.", "Estoy seguro de que la tienda ___ a las nueve. (abrir)", "abre", "Certeza → indicativo: abre. «Abra» sería el error de aplicar el subjuntivo por costumbre."),
      toEs("I'm afraid it will rain on the wedding day.", "Me da miedo que llueva el día de la boda.", "«Me da miedo que» → subjuntivo, que también sirve para el futuro: llueva.", ["Tengo miedo de que llueva el día de la boda."]),
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
        [
          "Recuerda la regla: las expresiones de valoración (es importante, es necesario, es mejor, es posible, es normal, es raro) llevan infinitivo cuando hablas en general (Es importante descansar) y que + subjuntivo cuando hablas de una persona concreta (Es importante que descanses).",
          "¿Por qué? El infinitivo no tiene persona, así que no puede decir quién descansa. En cuanto aparece un sujeto, necesitas un verbo conjugado, y como la frase valora en vez de informar, ese verbo va en subjuntivo. La excepción confirma la regla: es obvio, es verdad o está claro afirman un hecho y llevan indicativo.",
        ],
        [
          ["Es mejor salir temprano.", "It's better to leave early."],
          ["Es mejor que salgamos temprano.", "It's better that we leave early."],
        ],
        [
          fb("Personaliza.", "Es necesario reservar. → Es necesario que ___. (vosotros)", "reservéis", "Con un sujeto concreto se usa que + subjuntivo; -ar → e: reservéis."),
        ]
      ),
    ],
    [
      fb("Personaliza.", "Es importante beber agua. → Es importante que ___ agua. (tú)", "bebas", "Con un sujeto concreto, que + subjuntivo; -er → a: bebas."),
      fb("Personaliza.", "Es mejor esperar. → Es mejor que ___. (nosotros)", "esperemos", "Con un sujeto concreto, que + subjuntivo; -ar → e: esperemos."),
      fb("Personaliza.", "Es normal estar nervioso. → Es normal que ___ nervioso. (él)", "esté", "Con un sujeto concreto, que + subjuntivo; estar → esté."),
      fb("Personaliza.", "Es posible llegar tarde. → Es posible que ___ tarde. (ellos)", "lleguen", "Que + subjuntivo; llegar añade u delante de e para conservar el sonido: lleguen."),
      fb("Personaliza.", "Es raro pasar calor en marzo. → Es raro que ___ tanto calor en marzo. (hacer)", "haga", "Que + subjuntivo, formado desde hago: haga (hacer calor)."),
      mc(
        "«Es obvio que el plan ___.» (funcionar)",
        ["funciona", "funcione", "funcionar", "funcionara"],
        0,
        "«Es obvio que» expresa certeza: indicativo, funciona. «Funcione» y «funcionara» son subjuntivo (duda) y «funcionar» es infinitivo, que no puede llevar otro sujeto (el plan)."
      ),
      toEs("It's important that you (tú) rest.", "Es importante que descanses.", "«Es importante que» + sujeto concreto → subjuntivo: descanses.", ["Es importante que usted descanse."]),
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
        "Ojalá + subjuntivo: el deseo",
        [
          "Recuerda la regla: ojalá siempre va con subjuntivo, con o sin que (Ojalá haga sol. Ojalá que te vaya bien). Ojalá no cambia nunca de forma: lo que cambia es el verbo, según quién hace la acción.",
          "¿Por qué subjuntivo? Porque un deseo no afirma nada real: hablas de algo que todavía no sabes si pasará. El subjuntivo sale de la forma yo del presente: tengo → tenga, salgo → salga, conozco → conozca.",
        ],
        [
          ["Ojalá que te vaya bien en la entrevista.", "I hope the interview goes well for you. (ir → vaya, irregular)"],
          ["Ojalá no llueva mañana.", "I hope it doesn't rain tomorrow. (el no va delante del verbo)"],
          ["Ojalá mis amigos lleguen pronto.", "I hope my friends arrive soon. (g → gu delante de e)"],
        ],
        [
          wo("Ojalá haga buen tiempo el sábado.", "Ojalá + subjuntivo de hacer: haga (de hago). «Hace» sería indicativo y no sirve para un deseo.", "I hope the weather is good on Saturday."),
        ]
      ),
    ],
    [
      wo("Ojalá que mis padres puedan venir.", "Ojalá que + subjuntivo de poder: puedan (o → ue, como pueden).", "I hope my parents can come."),
      wo("Ojalá no haya mucho tráfico.", "Hay en subjuntivo es haya: también invariable, para uno o para muchos.", "I hope there isn't much traffic."),
      wo("Ojalá encuentres pronto trabajo.", "Encontrar cambia o → ue en tú: encuentres, como encuentras.", "I hope you find work soon."),
      fb("Completa.", "Ojalá ___ el autobús a tiempo. (llegar)", "llegue", "Subjuntivo de llegar: -ar → -e. Para conservar el sonido de la g delante de e se escribe gu: llegue."),
      fb("Completa.", "Ojalá que no ___ enfermos este invierno. (ponerse, nosotros)", "nos pongamos", "Ponerse en subjuntivo sale de pongo: pongamos, con el pronombre nos delante."),
      toEs("I hope you (tú) like the gift.", "Ojalá te guste el regalo.", "Ojalá + subjuntivo de gustar: te guste (singular, porque concuerda con el regalo).", ["Ojalá que te guste el regalo."]),
      toEs("I hope they win the match.", "Ojalá ganen el partido.", "Ojalá + subjuntivo: ganen (-ar → -en en ellos).", ["Ojalá que ganen el partido."]),
      toEs(
        "Ojalá te gusta la película.",
        "Ojalá te guste la película.",
        "Ojalá no admite indicativo: el deseo pide subjuntivo, guste.",
        ["Ojalá que te guste la película."],
        "Corrige la frase."
      ),
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
        [
          "Recuerda la regla: ocho verbos tienen un mandato de tú corto e irregular: venir → ven, decir → di, hacer → haz, poner → pon, salir → sal, ser → sé, tener → ten, ir → ve. En negativo vuelven al subjuntivo: no vengas, no digas, no hagas, no vayas…",
          "Por qué: casi todos salen de quitar la terminación al infinitivo (poner → pon, salir → sal, tener → ten, venir → ven); di, haz, sé y ve hay que memorizarlos. El negativo nunca usa la forma corta: «no pon» es un error.",
        ],
        [
          ["Ven aquí y di la verdad.", "Come here and tell the truth. (ven, di: formas cortas)"],
          ["Haz los deberes y no salgas hasta las seis.", "Do your homework and don't go out until six. (haz en afirmativo, no salgas en negativo)"],
          ["Sé puntual y ten el pasaporte a mano.", "Be on time and have your passport handy. (sé con tilde, ten)"],
        ],
        [
          fb("Rápido.", "(poner) ___ la mesa, por favor.", "Pon", "Poner pierde la terminación: pon. «Pone» es el presente de él, no un mandato."),
          fb("Rápido.", "(venir) ___ conmigo al mercado.", "Ven", "Venir → ven, forma corta irregular; «viene» es el presente de él o de usted."),
        ]
      ),
    ],
    [
      fb("Rápido.", "(tener) ___ cuidado con el escalón.", "Ten", "Tener → ten (forma corta). Se tiene cuidado, por eso tener y no ser."),
      fb("Rápido.", "(salir) ___ de ahí ahora mismo.", "Sal", "Salir → sal; «sale» es el presente de él, no un mandato de tú."),
      fb("Rápido.", "(ser) ___ amable con tu hermana.", "Sé", "Ser → sé, con tilde para no confundirlo con el pronombre se."),
      fb("Rápido.", "(ir) ___ a la farmacia, por favor.", "Ve", "Ir → ve; «vas» es indicativo y «vaya» es de usted."),
      fb("Rápido.", "(no hacer) No ___ eso.", "hagas", "En negativo no vale la forma corta (haz): se usa el subjuntivo, que sale de hago → no hagas."),
      fb("Rápido.", "(no salir) No ___ sin abrigo.", "salgas", "Negativo → subjuntivo, desde salgo: no salgas (nunca «no sal»)."),
      fb("Rápido.", "(no decir) No ___ nada a nadie.", "digas", "Negativo → subjuntivo, desde digo: no digas; «no di» no existe como mandato."),
      mt(
        "Relaciona el afirmativo con su negativo.",
        [
          ["ven", "no vengas"],
          ["haz", "no hagas"],
          ["pon", "no pongas"],
          ["ve", "no vayas"],
        ],
        "El afirmativo usa la forma corta irregular; el negativo, el subjuntivo que sale de la forma yo (vengo → no vengas, hago → no hagas, pongo → no pongas). Ir es especial: no vayas."
      ),
      toEs("No pon la mochila en la silla.", "No pongas la mochila en la silla.", "En negativo nunca se usa la forma corta: no + subjuntivo (pongo → no pongas).", ["No pongas la mochila sobre la silla."], "Corrige la frase."),
      toEs("No vayas al banco hoy.", "Ve al banco hoy.", "Pasar a afirmativo: el subjuntivo vayas se cambia por la forma corta irregular de ir: ve.", ["Hoy ve al banco."], "Cambia la frase a afirmativo."),
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
        [
          "Recuerda la regla: con usted el mandato usa el subjuntivo, en afirmativo y en negativo: Tome esta pastilla. No beba alcohol. Los pronombres se pegan en afirmativo (Siéntese) y van delante en negativo (No se preocupe).",
          "Por qué: el subjuntivo es la forma de cortesía; si la médica dijera «toma» o «siéntate» estaría tuteando. Al pegar el pronombre, la palabra se alarga y necesita tilde: siente → siéntese, tome → tómese.",
        ],
        [
          ["Siéntese, por favor.", "Sit down, please. (pronombre pegado, con tilde)"],
          ["No se preocupe, no es grave.", "Don't worry, it's not serious. (negativo: se delante)"],
          ["Acuéstese y no se mueva.", "Lie down and don't move. (afirmativo pegado, negativo delante)"],
        ],
        [
          fb("La médica dice.", "(tomar) ___ una pastilla cada ocho horas.", "Tome", "Con usted el mandato es subjuntivo: tomar es -ar → tome. «Toma» sería de tú."),
          fb("La médica dice.", "(no beber) No ___ café por la noche.", "beba", "Negativo de usted: no + subjuntivo; beber es -er, así que toma a (beba). «Bebe» es indicativo o tú."),
        ]
      ),
    ],
    [
      fb("La médica dice.", "(no comer) No ___ picante esta semana.", "coma", "Negativo de usted: no + subjuntivo; comer es -er → coma."),
      fb("La médica dice.", "(descansar) ___ al menos dos días.", "Descanse", "El afirmativo de usted también va en subjuntivo: descansar es -ar → descanse; «descansa» sería tú."),
      fb("La médica dice.", "(acostarse) ___ temprano.", "Acuéstese", "Acostarse cambia o → ue (acueste); en afirmativo se pega se y aparece la tilde: acuéstese."),
      fb("La médica dice.", "(no levantarse) No ___ de la cama mañana.", "se levante", "En negativo el pronombre va delante del verbo: no se levante (no «no levántese»)."),
      fb("La médica dice.", "(volver) ___ dentro de una semana.", "Vuelva", "Volver mantiene el cambio o → ue en el subjuntivo de usted: vuelva."),
      fb("La médica dice.", "(hacer) ___ ejercicio suave.", "Haga", "Hacer sale de la forma yo: hago → haga; «hace» es indicativo."),
      mc(
        "«Abra la boca y ___ «aaa».» (decir)",
        ["diga", "di", "dice", "decir"],
        0,
        "La médica trata al paciente de usted (abra), así que decir también va en usted: diga. «Di» es de tú, «dice» es indicativo y «decir» es infinitivo."
      ),
      toEs("Don't worry and drink a lot of water. (usted)", "No se preocupe y beba mucha agua.", "Con usted: negativo (no se preocupe) y afirmativo (beba), ambos con subjuntivo."),
      toEs("No muévase durante la prueba.", "No se mueva durante la prueba.", "En negativo el pronombre se va delante y desaparece la tilde: no se mueva. Solo el afirmativo lo pega (muévase).", [], "Corrige la frase."),
      toEs("Túmbate y respira despacio.", "Túmbese y respire despacio.", "Pasar de tú a usted: los dos verbos van en subjuntivo (tumbe, respire) y te pasa a se, pegado y con tilde.", ["Acuéstese y respire despacio."], "Cambia la frase de tú a usted."),
    ]
  ),
  L(
    "b1-vocabulary-practice-8",
    "b1d-rep-condicional-consejos",
    "Preguntas y respuestas: yo que tú…",
    "Repaso espaciado: el condicional para dar consejos.",
    "7 min",
    [
      sec(
        "Dar un consejo",
        [
          "Recuerda la regla: para aconsejar usamos el condicional. Dos fórmulas: «yo que tú» / «yo en tu lugar» + condicional (Yo que tú, hablaría con ella) o «deberías / podrías» + infinitivo (Deberías descansar más).",
          "¿Por qué el condicional? Porque hablas de una situación imaginaria: tú no eres la otra persona, solo imaginas qué harías en su lugar. Por eso no vale el futuro («hablaré» es una promesa tuya) ni el presente («debes» suena a obligación, no a consejo).",
          "Forma: infinitivo + -ía (hablaría, comería, iría). Los irregulares cambian la raíz, pero las terminaciones son las mismas: tendr-, saldr-, pondr-, vendr- (añaden d); podr-, querr-, sabr-, habr- (pierden la e); har-, dir- (raíz corta).",
        ],
        [
          ["Yo que tú, no diría nada.", "If I were you, I wouldn't say anything. [decir → dir-: raíz corta]"],
          ["Deberías ir al médico.", "You should go to the doctor. [deberías + infinitivo, más suave que «debes»]"],
          ["Yo en tu lugar, esperaría un poco.", "In your place, I'd wait a bit. [regular: esperar + -ía]"],
          ["Podrían alquilar una furgoneta.", "You (all) could rent a van. [podrían, para ustedes]"],
        ],
        [
          fb("Aconseja.", "—No duermo bien. —Yo que tú, ___ menos café. (tomar)", "tomaría", "Condicional regular: tomar + -ía = tomaría. «Tomaré» sería una promesa tuya, no un consejo."),
          mc(
            "—Mi coche hace un ruido raro. —Yo que tú, lo ___ al taller.",
            ["llevaría", "llevaré", "llevo", "llevaba"],
            0,
            "Después de «yo que tú» va el condicional porque imaginas que estás en su lugar: llevaría. «Llevaré» es futuro (una promesa), «llevo» es presente y «llevaba», imperfecto."
          ),
        ]
      ),
    ],
    [
      fb("Aconseja.", "—Mi jefe me grita. —Yo en tu lugar, ___ con recursos humanos. (hablar)", "hablaría", "Yo en tu lugar + condicional regular: hablar + -ía = hablaría."),
      fb("Aconseja.", "—No tengo dinero. —Yo que tú, no ___ de vacaciones. (salir)", "saldría", "Salir es irregular: la raíz añade una d (sald-) y luego va -ía: saldría, no «saliría»."),
      fb("Aconseja.", "—Estoy aburrido. —___ apuntarte a un curso. (poder, tú)", "Podrías", "Poder pierde la e del infinitivo: podr- + -ías = podrías. Podrías + infinitivo es un consejo suave, una sugerencia."),
      fb("Aconseja.", "—Me duele la espalda. —___ hacer yoga. (deber, tú)", "Deberías", "Deber es regular: deber + -ías = deberías. Suena a consejo; «debes» sonaría a obligación."),
      fb("Aconseja.", "—No entiendo al profesor. —Yo que tú, le ___ más preguntas. (hacer)", "haría", "Hacer tiene raíz corta en condicional: har- + -ía = haría, no «hacería»."),
      mc(
        "—Llego tarde a todo. —Yo que tú, ___ el despertador antes.",
        ["pondría", "ponería", "pondré", "ponía"],
        0,
        "Para aconsejar con «yo que tú» se usa el condicional; poner tiene raíz irregular pondr-: pondría. «Ponería» no existe, «pondré» es futuro y «ponía» es imperfecto."
      ),
      toEs("If I were you, I would tell her the truth.", "Yo que tú, le diría la verdad.", "«If I were you» = yo que tú + condicional; decir → diría.", ["Yo en tu lugar, le diría la verdad."]),
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
        [
          "Recuerda la regla (uso de España): mira el marcador de tiempo. Si el periodo incluye el momento en que hablas (hoy, esta semana, este año, nunca, ya, todavía no), usa el pretérito perfecto: he trabajado. Si el periodo está cerrado y separado del presente (ayer, el lunes, en 2019, hace dos días), usa el indefinido: trabajé.",
          "¿Por qué? El perfecto conecta la acción con el ahora; el indefinido la deja en un pasado terminado. En gran parte de Latinoamérica se usa más el indefinido también con hoy o ya, y es igual de correcto allí.",
        ],
        [
          ["Esta mañana he desayunado fuera.", "This morning I had breakfast out. (esta mañana es parte de hoy)"],
          ["Ayer desayuné en casa.", "Yesterday I had breakfast at home. (ayer está cerrado)"],
          ["Todavía no he visto la película; la estrenaron hace un mes.", "I haven't seen the film yet; it came out a month ago. (todavía no: perfecto; hace un mes: indefinido)"],
        ],
        [
          fb("Elige el marco.", "Hoy ___ tres cafés. (tomar, yo)", "he tomado", "«Hoy» incluye el momento en que hablas: pretérito perfecto, he tomado."),
        ]
      ),
    ],
    [
      fb("Elige el marco.", "Ayer ___ tres cafés. (tomar, yo)", "tomé", "«Ayer» es un periodo cerrado: indefinido, tomé."),
      fb("Elige el marco.", "Este año ___ a Portugal dos veces. (ir, nosotros)", "hemos ido", "«Este año» sigue abierto: pretérito perfecto, hemos ido."),
      fb("Elige el marco.", "En 2020 ___ a Portugal. (ir, nosotros)", "fuimos", "Un año ya terminado (2020): indefinido, fuimos."),
      { ...fb("Elige el marco.", "¿Alguna vez ___ un volcán? (ver, tú)", "has visto", "Experiencia → perfecto; ver → visto. En Latinoamérica también se acepta el indefinido: viste."), altAnswers: ["viste"] },
      { ...fb("Elige el marco.", "Todavía no ___ los resultados. (ver, ellos)", "han visto", "Ver → visto. En Latinoamérica también se usa el indefinido: vieron."), altAnswers: ["vieron"] },
      fb("Elige el marco.", "Hace dos semanas ___ un accidente en esta esquina. (haber)", "hubo", "Hace + tiempo → indefinido."),
      mc(
        "«Esta semana ___ mucho.» (llover; uso de España)",
        ["ha llovido", "llovió", "llovía", "había llovido"],
        0,
        "«Esta semana» no ha terminado: en España se usa el pretérito perfecto, ha llovido. «Llovió» se usa con periodos cerrados, «llovía» describe fondo o hábito y «había llovido» es anterior a otro pasado."
      ),
      toEs("I have never been to Mexico.", "Nunca he estado en México.", "Nunca + pretérito perfecto para la experiencia de toda la vida: he estado; en Latinoamérica también se acepta el indefinido («nunca estuve»).", ["No he estado nunca en México.", "Nunca estuve en México.", "No estuve nunca en México."]),
    ]
  ),
  L(
    "b1-vocabulary-practice-10",
    "b1d-rep-participios-irregulares",
    "Práctica de patrones: dicho, hecho, visto, puesto, vuelto",
    "Repaso espaciado: los participios irregulares en tres tiempos compuestos.",
    "7 min",
    [
      sec(
        "Recuerda la regla: dos moldes y una familia",
        [
          "Recuerda: casi todos los participios irregulares terminan en -to o en -cho. -to: abierto, escrito, roto, muerto, puesto, visto, vuelto, resuelto. -cho: dicho, hecho. Con haber el participio no cambia nunca: he dicho, habían dicho, habríamos dicho.",
          "La clave para no memorizar más: un verbo formado sobre otro hereda su participio. Volver → vuelto, así que devolver → devuelto; poner → puesto, así que componer → compuesto; escribir → escrito, así que describir → descrito; hacer → hecho, así que deshacer → deshecho.",
        ],
        [
          ["¿Quién ha roto el vaso?", "Who has broken the glass? (romper → roto)"],
          ["Cuando llegué, ya habían vuelto.", "When I arrived, they had already returned. (vuelto no cambia con habían)"],
          ["Me han devuelto el dinero.", "They've given me my money back. (de-volver → de-vuelto)"],
          ["¿Has descubierto el secreto?", "Have you discovered the secret? (des-cubrir → des-cubierto, como abrir → abierto)"],
        ],
        [
          fb("Aplica la familia.", "El médico ha ___ un tratamiento nuevo. (prescribir)", "prescrito", "Prescribir se forma sobre escribir, así que hereda su participio: escrito → prescrito."),
          mc(
            "¿Cuál es el participio de «suponer»?",
            ["supuesto", "suponido", "supongado", "supuso"],
            0,
            "Suponer se forma sobre poner (puesto), así que es supuesto. «Suponido» aplica la regla regular, que aquí no vale; «supuso» es el pretérito indefinido, no un participio."
          ),
        ]
      ),
    ],
    [
      fb("Participio.", "¿Has ___ mis gafas? (ver)", "visto", "Ver → visto (-to)."),
      fb("Participio.", "Ya habíamos ___ el problema. (resolver)", "resuelto", "Resolver → resuelto, el mismo cambio que volver → vuelto."),
      fb("Participio.", "¿En qué cajón has ___ los cubiertos? (poner)", "puesto", "Poner → puesto."),
      fb("Participio.", "Nadie me había ___ nada. (decir)", "dicho", "Decir → dicho (-cho, como hecho)."),
      fb("Aplica la familia.", "Los científicos habían ___ el terremoto. (prever)", "previsto", "Prever se forma sobre ver (visto): previsto."),
      fb("Aplica la familia.", "¿Ya has ___ la maleta? (deshacer)", "deshecho", "Deshacer se forma sobre hacer (hecho): deshecho. Ojo: se escribe con h."),
      mt(
        "Relaciona el infinitivo con su participio.",
        [
          ["hacer", "hecho"],
          ["romper", "roto"],
          ["morir", "muerto"],
          ["envolver", "envuelto"],
        ],
        "Envolver se forma sobre volver: envuelto. Hacer da -cho; romper, morir y envolver dan -to."
      ),
      ms(
        "¿Qué participios están bien formados?",
        ["descrito", "componido", "revuelto", "abrido"],
        [0, 2],
        "Descrito (de escribir) y revuelto (de volver) heredan el participio de su verbo base. Lo correcto es compuesto (de poner) y abierto."
      ),
      toEs(
        "Escribo la carta.",
        "He escrito la carta.",
        "Pretérito perfecto: he + participio irregular de escribir (escrito).",
        [],
        "Cambia al pretérito perfecto."
      ),
      toEs(
        "Ya he hecho la cena.",
        "Ya había hecho la cena.",
        "Del perfecto al pluscuamperfecto solo cambia haber (he → había); el participio hecho se queda igual.",
        [],
        "Cambia al pluscuamperfecto."
      ),
      toEs("«¿Quién ha abrido la ventana?»", "¿Quién ha abierto la ventana?", "Abrir tiene participio irregular en -to: abierto, nunca «abrido».", [], "Corrige la frase."),
      toEs("«Los niños han vueltos del colegio.»", "Los niños han vuelto del colegio.", "Con haber el participio no concuerda con el sujeto: siempre vuelto, aunque sean muchos niños.", [], "Corrige la frase."),
      toEs("What have you done?", "¿Qué has hecho?", "Pretérito perfecto de hacer, con participio irregular: has hecho.", ["¿Qué ha hecho usted?"]),
    ]
  ),
  L(
    "b1-vocabulary-practice-10",
    "b1d-rep-combinados-se-lo-regalos",
    "Preguntas y respuestas: ¿a quién se lo regalaste?",
    "Repaso espaciado: regalos de cumpleaños y el se de le/les.",
    "7 min",
    [
      sec(
        "Recuerda la regla: le y les se convierten en se",
        [
          "Recuerda: cuando contestas con dos pronombres, el indirecto (a quién) va primero y el directo (qué) después: me lo, te la, nos los. Le y les no pueden ir delante de lo, la, los, las: se convierten en se (le lo → se lo). Me, te, nos y os no cambian nunca.",
          "Por eso se puede significar a él, a ella, a usted, a ellos... El contexto (o «a + persona») aclara quién. El directo concuerda con el regalo: el pañuelo → lo, las flores → las.",
        ],
        [
          ["—¿Qué le regalaste a tu madre? —Le regalé un pañuelo.", "What did you give your mother? — I gave her a scarf. (un solo pronombre: le)"],
          ["Se lo compré en el mercado.", "I bought it for her at the market. (le + lo → se lo)"],
          ["—¿Quién os dio las entradas? —Nos las dio Ana.", "Who gave you the tickets? — Ana gave them to us. (nos no cambia)"],
        ],
        [
          fb("Responde.", "—¿Le diste la tarjeta a tu abuelo? —Sí, ___ di en la fiesta.", "se la", "Le (a tu abuelo) + la (la tarjeta) → se la."),
          mc(
            "—¿Les has enseñado los regalos a tus primas? —Sí, ya ___ he enseñado.",
            ["se los", "les los", "se las", "los les"],
            0,
            "Les se convierte en se delante de los; y es los porque concuerda con los regalos, no con las primas. «Se las» se equivoca de pronombre directo."
          ),
        ]
      ),
    ],
    [
      fb("Responde.", "—¿Les regalaste los cómics a tus sobrinos? —Sí, ___ regalé.", "se los", "Les (a tus sobrinos) → se delante de los (los cómics): se los regalé."),
      fb("Responde.", "—¿Me compraste el pan? —Sí, ___ compré.", "te lo", "Si te preguntan «¿Me compraste…?», respondes a esa persona con te: te (a ti) + lo (el pan)."),
      fb("Responde.", "—¿Nos enviaste la invitación? —Sí, ___ envié ayer. (a vosotros)", "os la", "Nos → os (respondes a vosotros); invitación → la. Os no cambia a se."),
      fb("Responde.", "—¿Le has dado las flores a Clara? —Sí, ya ___ he dado.", "se las", "Le (a Clara) → se delante de las (las flores), antes de haber: se las he dado."),
      fb("Responde.", "—¿Vas a regalarle el perfume a tu hermana? —Sí, voy a ___.", "regalárselo", "Con infinitivo, los pronombres se pegan al final (le → se + lo) y se añade tilde: regalárselo."),
      mc(
        "—¿Quién te regaló ese reloj? —___ regaló mi padre.",
        ["Me lo", "Te lo", "Se lo", "Lo me"],
        0,
        "A mí → me, y el reloj → lo: me lo regaló. «Te lo» sería a ti, «se lo» a él o a otra persona, y «Lo me» invierte el orden."
      ),
      toEs(
        "Le regalé una bufanda a mi hermano.",
        "Se la regalé.",
        "La bufanda → la; le + la → se la. Al sustituir los dos objetos, la frase queda solo con pronombres.",
        ["Se la regalé a mi hermano."],
        "Sustituye «una bufanda» y «a mi hermano» por pronombres."
      ),
      toEs(
        "Se lo compré.",
        "Se los compré.",
        "Si el regalo es plural (los guantes), cambia solo el directo: lo → los. Se no cambia con el número.",
        [],
        "Cambia el regalo al plural (los guantes)."
      ),
      toEs("«¿El libro? Le lo regalé a mi tío.»", "¿El libro? Se lo regalé a mi tío.", "Le no puede ir delante de lo: le lo → se lo.", [], "Corrige la frase."),
      toEs("«¿Las galletas? Mi abuela se nos las mandó.»", "¿Las galletas? Mi abuela nos las mandó.", "A nosotros es nos, y nos no se convierte en se: nos las mandó. Solo le y les cambian.", [], "Corrige la frase."),
      toEs("My friends gave it to me for my birthday (the bike).", "Mis amigos me la regalaron por mi cumpleaños.", "Me (a mí) + la (la bici): me la regalaron.", ["Me la regalaron mis amigos por mi cumpleaños."]),
      {
        type: "speak",
        prompt: "Contesta en voz alta: —¿Les has dado ya los regalos a tus padres? (Yes, I gave them to them yesterday.)",
        text: "Sí, se los di ayer.",
        explanation: "Les (a tus padres) → se; los regalos → los. Se los va delante del verbo conjugado: se los di.",
      },
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
        "Recuerda la regla: delante del verbo conjugado, pegados al que no lo está",
        [
          "Los pronombres de objeto se apoyan en un verbo. Si el verbo está conjugado (doy, des, he dado), van delante y separados: te lo doy, no me lo des. Si la forma no está conjugada (infinitivo, gerundio) o es un mandato afirmativo, se pegan al final: dártelo, contándotelo, dámelo. Con verbo + infinitivo o gerundio puedes elegir: delante del conjugado o pegados al final, pero nunca en medio.",
          "Dos detalles: el indirecto va siempre primero (te lo, me la), «le/les» se convierte en «se» delante de lo/la, y al pegar pronombres suele hacer falta tilde para mantener el acento (da → dámelo).",
        ],
        [
          ["Estoy contándotelo todo.", "I'm telling you everything. (gerundio → pegados, con tilde)"],
          ["No se lo digas a nadie.", "Don't tell anyone. (mandato negativo → delante)"],
          ["Se lo he devuelto esta mañana.", "I gave it back to him this morning. (conjugado → delante; le + lo → se lo)"],
        ],
        [
          fb("Coloca.", "(dar, tú, a mí, el móvil) → ___, por favor.", "Dámelo", "Afirmativo: me + lo pegados al verbo, con tilde: dámelo."),
          mc(
            "«Quiero enseñar las fotos a mis primos.» ¿Cuál es correcta?",
            ["Quiero enseñárselas.", "Quiero les las enseñar.", "Se las quiero enseñarlas.", "Quiero enseñarlesla."],
            0,
            "Con infinitivo, los pronombres se pegan al final (o van delante de «quiero»), con les + las → se las y tilde: enseñárselas. Nunca van en medio, no se repiten y «les» no se mantiene delante de «la»."
          ),
        ]
      ),
    ],
    [
      fb("Coloca.", "(no dar, tú, a mí, el móvil) → No ___.", "me lo des", "Negativo: pronombres delante + subjuntivo: no me lo des."),
      fb("Coloca.", "(dar, yo, a ti, el móvil, ahora) → Ahora ___ doy.", "te lo", "Con un verbo conjugado, los pronombres van delante: te lo doy."),
      fb("Coloca.", "Voy a pedir el dinero a mi padre. → Voy a ___.", "pedírselo", "Con infinitivo, se pegan al final (le → se + lo), con tilde: pedírselo."),
      fb("Coloca.", "Está preparando la comida para nosotros. → Está ___.", "preparándonosla", "Con gerundio, se pegan al final (nos + la), con tilde: preparándonosla."),
      fb("Coloca.", "(usted, traer la cuenta a nosotros) → ___, por favor.", "Tráiganosla", "Afirmativo de usted (traiga) + nos + la, con tilde: tráiganosla."),
      mc(
        "¿Qué frase es incorrecta?",
        ["Voy a te lo dar.", "Te lo voy a dar.", "Voy a dártelo.", "Dámelo."],
        0,
        "Con verbo + infinitivo, los pronombres van delante del conjunto o pegados al infinitivo, nunca en medio: «Voy a te lo dar» es incorrecta. «Te lo voy a dar», «Voy a dártelo» y «Dámelo» están bien."
      ),
      toEs("Don't lend it to them (the car).", "No se lo prestes.", "Negativo: pronombres delante (les → se + lo) + subjuntivo: no se lo prestes.", ["No se lo prestes a ellos."]),
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
        "Recuerda la regla: cuatro reglas en una tarjeta",
        [
          "Una tarjeta de felicitación junta casi todo el nivel. Los deseos van en subjuntivo, porque no hablas de hechos sino de lo que quieres que pase: espero que descanses, ojalá te traiga… Lo que ha pasado en un periodo que sigue abierto va en pretérito perfecto: este año has trabajado. Las cosas ya mencionadas se sustituyen por pronombres, con la persona primero: te lo llevo. Y los consejos directos van en imperativo: ¡disfruta!",
        ],
        [
          ["Espero que te recuperes pronto.", "I hope you get better soon. (deseo → subjuntivo)"],
          ["Este mes has cambiado de casa.", "This month you've moved house. (periodo abierto → perfecto)"],
          ["¿Las llaves? Te las dejo mañana.", "The keys? I'll leave them for you tomorrow. (te + las)"],
        ],
        [
          mc(
            "«Ojalá que este año ___ el trabajo que buscas.» (encontrar, tú)",
            ["encuentres", "encuentras", "has encontrado", "encontrarás"],
            0,
            "«Ojalá» expresa un deseo y siempre va con subjuntivo: encuentres. «Encuentras» y «encontrarás» son indicativo, y «has encontrado» presenta el hecho como ya ocurrido."
          ),
        ]
      ),
      sec(
        "La tarjeta",
        "«Querida Nuria: ¡Feliz cumpleaños! Este año has trabajado muchísimo y espero que ahora descanses. Ojalá que el nuevo año te traiga muchas cosas buenas. El regalo te lo llevo el sábado. ¡Disfruta mucho! Un abrazo, Pablo.»",
        [],
        [
          fb("Completa la tarjeta.", "Este año ___ muchísimo. (trabajar, tú)", "has trabajado", "«Este año» es un periodo que no ha terminado: pretérito perfecto, has trabajado."),
        ]
      ),
    ],
    [
      fb("Completa la tarjeta.", "Espero que ahora ___. (descansar, tú)", "descanses", "«Espero que» con otro sujeto expresa un deseo: subjuntivo, descanses (no «descansas»)."),
      fb("Completa la tarjeta.", "Ojalá que el nuevo año te ___ cosas buenas. (traer)", "traiga", "«Ojalá» siempre pide subjuntivo; traer es irregular (traigo → traiga)."),
      fb("Completa la tarjeta.", "El regalo ___ llevo el sábado.", "te lo", "Te (a ti) + lo (el regalo), delante del verbo conjugado: te lo llevo."),
      fb("Completa la tarjeta.", "¡___ mucho! (disfrutar, tú)", "Disfruta", "Un consejo directo a un amigo: imperativo afirmativo de tú, igual que la forma él del presente: disfruta."),
      fb("Otra tarjeta.", "Me alegra que por fin ___ el trabajo que querías. (tener, tú)", "tengas", "Una emoción sobre lo que le pasa a otro (me alegra que) pide subjuntivo: tengas."),
      fb("Otra tarjeta.", "Si ___ tiempo, llámame esta semana. (tener, tú)", "tienes", "Tras «si» condicional va presente de indicativo, nunca subjuntivo ni futuro: tienes."),
      toEs("I hope you have a great day. (tú)", "Espero que tengas un día genial.", "Espero que + subjuntivo: tengas.", ["Espero que pases un día genial.", "Ojalá tengas un día genial."]),
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
        "Recuerda la regla: la raíz cambia… a veces",
        [
          "Recuerda la regla: los verbos con cambio de raíz cambian en el subjuntivo en las mismas personas que en el presente: yo, tú, él, ellos (piense, vuelva). Nosotros y vosotros no cambian, porque el acento cae en la terminación y no en la raíz (pensemos, volvamos).",
          "Los verbos en -ir son la excepción: en nosotros y vosotros también cambian, con una vocal más corta: e → i, o → u (sintamos, pidamos, durmamos).",
        ],
        [
          ["Quiero que durmamos en la tienda de campaña.", "I want us to sleep in the tent. (dormir is -ir: o → u in nosotros)"],
          ["Es mejor que pidamos pizza.", "It's better that we order pizza. (pedir: e → i everywhere)"],
          ["Prefiero que tú cierres la puerta y que nosotros cerremos las ventanas.", "I'd rather you close the door and we close the windows. (cerrar is -ar: cierres, but cerremos)"],
        ],
        [
          fb("Completa.", "Espero que ___ pronto. (volver, tú)", "vuelvas", "Mismo cambio que en el presente (vuelves → vuelvas); solo nosotros y vosotros conservan la o (volvamos)."),
          mc(
            "«Es importante que ___ la verdad.» (mentir, nosotros — en negativo: que no…)",
            ["mintamos", "mentamos", "mientamos", "mentimos"],
            0,
            "Mentir es -ir, así que en nosotros cambia e → i: (que no) mintamos. «Mentamos» olvida el cambio, «mientamos» usa el diptongo que no va en nosotros y «mentimos» es indicativo."
          ),
        ]
      ),
    ],
    [
      fb("Par A: -ar en tú.", "Es importante que ___ antes de hablar. (pensar, tú)", "pienses", "Pensar cambia e → ie en tú, igual que en el presente (piensas → pienses)."),
      fb("Par B: -ar en nosotros.", "Es importante que ___ antes de hablar. (pensar, nosotros)", "pensemos", "Pensar es -ar: sin cambio en nosotros (pensemos, no «piensemos»)."),
      fb("Par A: -ir en tú.", "Ojalá ___ bien esta noche. (dormir, tú)", "duermas", "Mismo cambio que en el presente (duermes → duermas); en nosotros, dormir cambia o → u (durmamos)."),
      fb("Par B: -ir en nosotros.", "Ojalá ___ bien esta noche. (dormir, nosotros)", "durmamos", "Dormir es -ir: en nosotros cambia o → u."),
      fb("Par A: -ir en él.", "No quiero que ___ más dinero. (pedir, él)", "pida", "Pedir cambia e → i: pida."),
      fb("Par B: -ir en nosotros.", "No quiero que ___ más dinero. (pedir, nosotros)", "pidamos", "Pedir es -ir: e → i también en nosotros."),
      mc("«Me alegra que os ___ mejor.» (sentir)", ["sintáis", "sentáis", "sientáis", "sintéis"], 0, "Los verbos -ir con cambio e → ie cambian e → i en nosotros y vosotros: sintáis. «Sentáis» olvida ese cambio, «sientáis» usa el diptongo que no va en vosotros y «sintéis» usa la terminación de -ar."),
      toEs("I hope we find a good hotel.", "Espero que encontremos un buen hotel.", "Espero que + subjuntivo; encontrar es -ar y no cambia o → ue en nosotros: encontremos.", ["Ojalá encontremos un buen hotel."]),
      toEs("I hope you (tú) find your wallet.", "Espero que encuentres tu cartera.", "Encontrar: o → ue en tú: encuentres.", ["Espero que encuentres tu billetera."]),
      toEs("Es mejor que cierremos las ventanas.", "Es mejor que cerremos las ventanas.", "Cerrar es -ar: no cambia en nosotros (cerremos, no «cierremos»).", [], "Corrige la frase."),
      toEs("Quiero que cerremos la puerta.", "Quiero que cierres la puerta.", "En tú la raíz sí cambia: cerrar → cierres.", ["Quiero que tú cierres la puerta."], "Cambia el sujeto de la segunda parte a tú."),
      { type: "fill-blank", prompt: "¿Cómo se dicen en español las palabras en negrita?", sentence: "No quiero que me ___.", answer: "mientas", en: "I don't want you [to lie] to me. (tú)", explanation: "Mentir: e → ie en tú: mientas." },
      { type: "fill-blank", prompt: "¿Cómo se dicen en español las palabras en negrita?", sentence: "Quiero que el camarero nos ___ primero.", answer: "sirva", en: "I want the waiter [to serve] us first.", explanation: "Servir es -ir con cambio e → i, que aparece en todas las personas: sirva." },
      { type: "fill-blank", prompt: "¿Cómo se dicen en español las palabras en negrita?", sentence: "Es mejor que les ___ la comida nosotros.", answer: "sirvamos", en: "It's better that we [serve] them the food ourselves.", explanation: "Servir es -ir: cambia también en nosotros: sirvamos." },
      toEs("I hope the movie doesn't start late.", "Espero que la película no empiece tarde.", "Empezar: e → ie y z → c: empiece.", ["Espero que la película no comience tarde."]),
      toEs("Ojalá puedamos ir.", "Ojalá podamos ir.", "Poder es -er: no cambia en nosotros: podamos, no «puedamos».", ["Ojalá que podamos ir."], "Corrige la frase."),
      toEs("I don't want them to miss the bus.", "No quiero que pierdan el autobús.", "Perder: e → ie en ellos: pierdan.", ["No quiero que pierdan el bus."]),
      toEs("Es importante que entiendas el contrato.", "Es importante que entendamos el contrato.", "Entender es -er: en nosotros no cambia: entendamos.", [], "Cambia el sujeto de la segunda parte a nosotros."),
      mc("«Es mejor que nosotros ___ temprano.» (dormir)", ["dormamos", "duermamos", "durmamos", "dormimos"], 2, "Dormir es -ir: en nosotros o → u: durmamos. «Dormamos» olvida el cambio, «duermamos» usa el diptongo de tú y «dormimos» es indicativo."),
      mc("«Quiero que ustedes ___ el ejercicio.» (repetir)", ["repitan", "repetan", "repiten", "repitáis"], 0, "Repetir: e → i en ustedes: repitan. «Repetan» olvida el cambio, «repiten» es indicativo y «repitáis» es vosotros."),
      toEs("I'm glad you (tú) feel better.", "Me alegro de que te sientas mejor.", "Sentir: e → ie en tú: sientas.", ["Me alegra que te sientas mejor."]),
      toEs("Mi madre espera que nos sentamos como en casa.", "Mi madre espera que nos sintamos como en casa.", "«Espera que» pide subjuntivo, y sentir es -ir: en nosotros e → i: sintamos.", ["Mi mamá espera que nos sintamos como en casa."], "Corrige la frase."),
      wo("Ojalá que durmamos bien en el tren", "Dormir → durmamos (o → u en nosotros).", "Hopefully we sleep well on the train"),
      wo("Quiero que vuelvas antes de las diez", "Volver: o → ue en tú: vuelvas.", "I want you (tú) to come back before ten"),
      toEs("The coach wants us to think less and play more.", "El entrenador quiere que pensemos menos y juguemos más.", "Pensar y jugar son -ar: no cambian en nosotros (pensemos, juguemos).", ["La entrenadora quiere que pensemos menos y juguemos más.", "El entrenador quiere que pensemos menos y que juguemos más."]),
      ms(
        "Aplica la regla: ¿qué formas de nosotros son correctas?",
        ["prefiramos (preferir)", "contemos (contar)", "muramos (morir)", "cuentemos (contar)", "queramos (querer)"],
        [0, 1, 2, 4],
        "Preferir y morir son -ir: cambian en nosotros (prefiramos, muramos). Contar y querer son -ar/-er: nosotros conserva la vocal original (contemos, queramos). «Cuentemos» lleva un diptongo que nosotros no tiene."
      ),
      { type: "speak", prompt: "Responde en voz alta: propón a tus amigos qué pedir para cenar y dónde dormir esta noche (pedir, dormir, nosotros).", text: "Es mejor que pidamos una pizza y que durmamos en mi casa.", explanation: "Pedir y dormir son -ir: en nosotros cambian e → i y o → u: pidamos, durmamos." },
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
        [
          "Recuerda la regla: en el subjuntivo, los verbos en -ar cambian la a por e. Pero delante de e, la ortografía española cambia el sonido de c y g (ce suena /θ/ o /s/, ge suena /x/) y no escribe z. Por eso la letra cambia para que el sonido se mantenga:",
          "-car → -que (buscar → busque), -gar → -gue (pagar → pague), -zar → -ce (empezar → empiece). Si el verbo además diptonga (jugar, empezar, almorzar), se hacen los dos cambios.",
        ],
        [
          ["Es mejor que pague yo.", "It's better if I pay. (-gar → -gue: la u mantiene la g fuerte)"],
          ["Quiero que me expliques el problema.", "I want you to explain the problem to me. (-car → -que)"],
          ["No creo que empecemos a tiempo.", "I don't think we'll start on time. (-zar → -ce; sin diptongo en nosotros)"],
        ],
        [
          fb("Rápido.", "Quiero que ___ la película ya. (empezar)", "empiece", "Dos cambios: e → ie (diptongo) y z → c delante de e: empiece."),
          mc(
            "Aplica la regla a un verbo nuevo: ¿cómo se escribe el subjuntivo de «secar» (tú)?",
            ["seques", "seces", "secues", "secas"],
            0,
            "-car → -que: seques. «Seces» sonaría /'seθes/ (cambia el sonido), «secues» añade una u que no hace falta con c y «secas» es indicativo."
          ),
        ]
      ),
    ],
    [
      fb("Rápido.", "No creo que ___ a tiempo. (llegar, ellos)", "lleguen", "-gar → -gue: sin la u, «llegen» sonaría con /x/."),
      fb("Rápido.", "Te pido que ___ la luz al salir. (apagar)", "apagues", "-gar → -gue: apagues."),
      fb("Rápido.", "Es necesario que ___ las facturas. (organizar, nosotros)", "organicemos", "-zar → -ce: en español no se escribe «ze», así que organicemos."),
      fb("Rápido.", "Espero que ___ buena nota en el examen. (sacar, tú)", "saques", "-car → -que: saques, para mantener el sonido /k/."),
      fb("Rápido.", "Ojalá que el niño no ___ con fuego. (jugar)", "juegue", "Dos cambios: u → ue (diptongo) y g → gu delante de e: juegue."),
      fb("Rápido.", "Prefiero que ___ tú el restaurante. (elegir)", "elijas", "Caso contrario: en -ger/-gir la g pasa a j delante de a para mantener el sonido /x/ (elijo → elijas); además e → i."),
      fb("Rápido.", "Dudo que ___ el coche hoy. (arrancar)", "arranque", "-car → -que: arranque."),
      mc(
        "«Es posible que ___ a llover.» (comenzar)",
        ["comience", "comienze", "comenze", "comenza"],
        0,
        "Comenzar cambia e→ie y z → c delante de e: comience. «Comienze» y «comenze» no hacen el cambio z→c (en español no se escribe ze), y «comenza» no existe."
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
        "Recuerda la regla: aconsejar es querer algo para otro",
        [
          "Recuerda la regla: aconsejar, recomendar, sugerir, pedir y prohibir expresan lo que quieres que haga otra persona, algo que todavía no ha pasado. Por eso, con otro sujeto, van con que + subjuntivo, igual que querer: te aconsejo que comas bien, no quiero que trabajes tanto.",
          "Con un pronombre de persona (me, te, le, nos, os, les), estos verbos también admiten el infinitivo, porque ya se sabe quién hará la acción: te aconsejo comer bien, nos prohíbe usar el móvil.",
          "La carta de la abuela: «Querido Hugo: ahora que vives solo, te aconsejo que comas bien, te recomiendo que ahorres un poco cada mes y te sugiero que llames a tu madre los domingos. Y no quiero que trabajes hasta tan tarde.»",
        ],
        [
          ["Te aconsejo que te abrigues, que hace frío.", "I advise you to wrap up warm, it's cold."],
          ["Te recomiendo no gastar tanto en restaurantes.", "I recommend you don't spend so much on restaurants. (pronoun + infinitive)"],
        ],
        [
          fb("Completa la carta.", "Te recomiendo que ___ un poco cada mes. (ahorrar)", "ahorres", "Recomendar que + otro sujeto → subjuntivo: ahorres (-ar → e). «Ahorras» informaría, no aconsejaría."),
          fb("Aplica la regla a otro verbo.", "Te ruego que no ___ a nadie lo que te he contado. (decir)", "digas", "Rogar, como pedir, expresa lo que quieres que haga otro: subjuntivo, formado desde digo: digas."),
        ]
      ),
    ],
    [
      fb("Completa la carta.", "Te aconsejo que ___ bien. (comer)", "comas", "Aconsejar que + subjuntivo: comas (-er → a)."),
      fb("Completa la carta.", "Te sugiero que ___ a tu madre los domingos. (llamar)", "llames", "Sugerir que + subjuntivo: llames."),
      fb("Completa la carta.", "No quiero que ___ hasta tan tarde. (trabajar)", "trabajes", "No querer que + otro sujeto → subjuntivo: trabajes."),
      fb("Completa la carta para los nietos.", "Os pido que ___ la casa limpia. (tener)", "tengáis", "Pedir que + subjuntivo, formado desde tengo: tengáis."),
      fb("Completa la carta para los nietos.", "Os prohíbo que ___ fiestas entre semana. (hacer)", "hagáis", "Prohibir que + subjuntivo, formado desde hago: hagáis."),
      mc(
        "«Mi médico me aconseja ___ más.» (yo camino más)",
        ["caminar", "que camino", "caminando", "que caminó"],
        0,
        "Con un pronombre (me, te, le), aconsejar puede ir con infinitivo: me aconseja caminar (o «que camine»). «Que camino» usa indicativo por error, «caminando» es gerundio y «que caminó» es pasado."
      ),
      toEs("I suggest that you rest this weekend. (tú)", "Te sugiero que descanses este fin de semana.", "«Sugerir que» + otro sujeto → subjuntivo: descanses.", ["Te sugiero descansar este fin de semana."]),
      { type: "fill-blank", prompt: "¿Cómo se dicen en español las palabras en negrita?", sentence: "Te aconsejo que ___ temprano los días de examen.", answer: "te acuestes", en: "I advise you to [go to bed] early on exam days.", explanation: "Aconsejar que + subjuntivo; acostarse cambia o → ue: te acuestes." },
      { type: "fill-blank", prompt: "¿Cómo se dicen en español las palabras en negrita?", sentence: "Les pido que no ___ ruido después de las diez.", answer: "hagan", en: "I ask you all not to [make] noise after ten.", explanation: "Pedir que + subjuntivo: hagan (de hago)." },
      { type: "fill-blank", prompt: "¿Cómo se dicen en español las palabras en negrita?", sentence: "Mi médico me recomienda que ___ menos azúcar.", answer: "tome", en: "My doctor recommends that I [have] less sugar.", explanation: "Recomendar que + otro sujeto: subjuntivo, tome.", altAnswers: ["coma"] },
      toEs("Mis padres me prohíben que salgo solo por la noche.", "Mis padres me prohíben que salga solo por la noche.", "Prohibir que + subjuntivo, desde salgo: salga. «Salgo» es indicativo.", ["Mis padres me prohíben que salga sola por la noche.", "Mis padres me prohíben salir solo por la noche."], "Corrige la frase."),
      toEs("Te aconsejo abrir una cuenta de ahorros.", "Te aconsejo que abras una cuenta de ahorros.", "Las dos formas son correctas; con «que» el verbo va en subjuntivo: abras.", [], "Cambia el infinitivo por «que» + subjuntivo."),
      toEs("I recommend that you cook at home more. (tú)", "Te recomiendo que cocines más en casa.", "Recomendar que + subjuntivo: cocines, no «cocinas».", ["Te recomiendo que cocines en casa más.", "Te recomiendo cocinar más en casa."]),
      toEs("La abuela sugiere que la visitamos en agosto.", "La abuela sugiere que la visitemos en agosto.", "Sugerir que + subjuntivo: visitemos. «Visitamos» presenta como hecho lo que solo se sugiere.", ["Mi abuela sugiere que la visitemos en agosto."], "Corrige la frase."),
      toEs("I'm asking you to water the plants on Monday. (tú)", "Te pido que riegues las plantas el lunes.", "Pedir que + subjuntivo; regar → riegues (e → ie, y g → gu delante de e)."),
      toEs("Te sugiero que vuelvas mañana.", "Le sugiero que vuelva mañana.", "Con usted, te → le y el verbo toma la forma de él: vuelva (o → ue).", ["Le sugiero que regrese mañana."], "Cambia la frase a usted."),
      toEs("I don't want you to spend all your money on clothes. (tú)", "No quiero que gastes todo tu dinero en ropa.", "No querer que + subjuntivo: gastes.", ["No quiero que te gastes todo tu dinero en ropa.", "No quiero que gastes todo el dinero en ropa."]),
      toEs("Our teacher forbids us to use our phones in class.", "Nuestra profesora nos prohíbe que usemos el móvil en clase.", "Prohibir que + subjuntivo: usemos. Con el pronombre nos, también vale el infinitivo.", ["Nuestro profesor nos prohíbe que usemos el móvil en clase.", "Nuestra profesora nos prohíbe que usemos los móviles en clase.", "Nuestro profesor nos prohíbe que usemos los móviles en clase.", "Nuestra profesora nos prohíbe que usemos el celular en clase.", "Nuestro profesor nos prohíbe que usemos el celular en clase.", "Nuestra profesora nos prohíbe usar el móvil en clase.", "Nuestro profesor nos prohíbe usar el móvil en clase.", "Nuestra profesora nos prohíbe usar el celular en clase.", "Nuestro profesor nos prohíbe usar el celular en clase."]),
      mc("«Te aconsejo que ___ más agua.»", ["bebas", "bebes", "beber", "bebiendo"], 0, "Aconsejar que + subjuntivo: bebas. «Bebes» es indicativo, «beber» no puede ir detrás de «que» y «bebiendo» es gerundio."),
      ms(
        "¿Qué consejos están bien formados?",
        ["Te recomiendo que duermas más.", "Te recomiendo que duermes más.", "Te recomiendo dormir más.", "Te sugiero que no te preocupes.", "Te sugiero que no preocuparte."],
        [0, 2, 3],
        "Con «que», subjuntivo (duermas, no te preocupes); con el pronombre te, también infinitivo sin «que» (dormir). «Duermes» es indicativo y «que no preocuparte» mezcla «que» con infinitivo."
      ),
      wo("Te recomiendo que llames a tus abuelos más a menudo", "Recomendar que + subjuntivo (llames).", "I recommend you call your grandparents more often"),
      wo("Mi madre me pide que no llegue tarde", "Pedir que + subjuntivo (llegue, con -gue).", "My mother asks me not to arrive late"),
      toEs("My grandmother advises me to save money and suggests that I learn to cook.", "Mi abuela me aconseja que ahorre dinero y me sugiere que aprenda a cocinar.", "Dos consejos con otro sujeto: que + subjuntivo (ahorre, aprenda).", ["Mi abuela me aconseja ahorrar dinero y me sugiere aprender a cocinar.", "Mi abuela me aconseja que ahorre dinero y que aprenda a cocinar."]),
      toEs("I recommend that you rest tonight, and I'm asking you to call me tomorrow. (tú)", "Te recomiendo que descanses esta noche y te pido que me llames mañana.", "Recomendar y pedir que + subjuntivo: descanses, llames."),
      { type: "speak", prompt: "Responde en voz alta: dale dos consejos a un amigo que empieza a vivir solo.", text: "Te aconsejo que hagas la compra una vez por semana y te recomiendo que no gastes demasiado.", explanation: "Aconsejar y recomendar que + subjuntivo: hagas (de hago), gastes." },
    ]
  ),
  L(
    "primer-concierto",
    "b1d-rep-duda-quizas-tal-vez",
    "Elige y explica: es posible que, puede que, dudo que",
    "Repaso espaciado: expresar probabilidad y duda con subjuntivo (puede que, es probable que, dudo que) frente a la certeza con indicativo (seguro que, está claro que).",
    "6 min",
    [
      sec(
        "Probable, pero no seguro",
        [
          "Recuerda la regla: cuanto menos seguro estás, más subjuntivo. Es posible que, puede que, es (poco) probable que y dudo que no afirman nada → subjuntivo (Puede que llueva). Seguro que y está claro que afirman → indicativo (Seguro que llueve).",
          "Quizás y tal vez admiten los dos modos: con subjuntivo la duda es mayor (Quizás venga = no lo sé), con indicativo es casi una suposición segura (Quizás viene = probablemente sí). Y ojo: «a lo mejor» siempre va con indicativo.",
        ],
        [
          ["Puede que llegue un poco tarde.", "I might arrive a bit late. (posibilidad → subjuntivo)"],
          ["Seguro que llega tarde.", "He's sure to arrive late. (certeza → indicativo)"],
          ["Tal vez tengamos suerte.", "Maybe we'll be lucky. (tal vez + subjuntivo: duda real)"],
          ["A lo mejor nos vemos mañana.", "Maybe we'll see each other tomorrow. (a lo mejor + indicativo siempre)"],
        ],
        [
          mc(
            "«Puede que ___ razón.» (tener, tú)",
            ["tengas", "tienes", "tener", "tendrás"],
            0,
            "«Puede que» expresa posibilidad y lleva subjuntivo: puede que tengas razón. «Tienes» y «tendrás» son indicativo, y «tener» es infinitivo."
          ),
        ]
      ),
    ],
    [
      fb("Elige.", "Es probable que el vuelo ___ retraso. (tener)", "tenga", "Es probable no afirma → subjuntivo: tenga."),
      fb("Elige.", "Está claro que el vuelo ___ retraso. (tener)", "tiene", "Está claro afirma → indicativo: tiene."),
      fb("Elige.", "Puede que mis primos ___ a la boda. (venir)", "vengan", "Puede que plantea una posibilidad → subjuntivo: vengan (de «vengo»)."),
      fb("Elige.", "Seguro que mis primos ___ a la boda. (venir)", "vienen", "Seguro que afirma con certeza → indicativo: vienen."),
      fb("Elige.", "Es poco probable que ___ este fin de semana. (nevar)", "nieve", "Es poco probable → subjuntivo: nieve (e → ie)."),
      fb("Elige.", "A lo mejor ___ al cine esta noche. (ir, nosotros)", "vamos", "«A lo mejor» es la excepción: aunque exprese duda, siempre va con indicativo: vamos (no «vayamos»)."),
      ms(
        "¿Qué expresiones piden subjuntivo?",
        ["puede que", "es probable que", "está claro que", "es cierto que"],
        [0, 1],
        "«Puede que» y «es probable que» expresan probabilidad: subjuntivo. «Está claro que» y «es cierto que» expresan certeza: indicativo."
      ),
      toEs("It's likely that the museum is full.", "Es probable que el museo esté lleno.", "«Es probable que» → subjuntivo: esté.", ["Puede que el museo esté lleno."]),
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
        [
          "Recuerda la regla: con un verbo de emoción (gustar, encantar, molestar, sentir, dar miedo, alegrar), pregúntate quién hace la acción. Si es la misma persona que siente → infinitivo (Me gusta cocinar: yo cocino). Si es otra → que + subjuntivo (Me gusta que cocines: tú cocinas).",
          "Por qué: el infinitivo no tiene persona propia, así que solo puede referirse a quien siente. Para meter a otra persona hace falta «que» + un verbo conjugado, y tras una emoción ese verbo va en subjuntivo.",
        ],
        [
          ["Siento no poder ir.", "I'm sorry I can't go. (yo siento, yo no puedo)"],
          ["Siento que no puedas ir.", "I'm sorry you can't go. (yo siento, tú no puedes)"],
          ["A mi madre le molesta que lleguemos tarde.", "It bothers my mother that we arrive late. (ella siente, nosotros llegamos)"],
        ],
        [
          fb("Transforma.", "Me encanta bailar. → Me encanta que ___. (tú)", "bailes", "Con dos sujetos distintos (a mí me encanta / tú bailas) se usa que + subjuntivo: bailes."),
        ]
      ),
    ],
    [
      fb("Transforma.", "Me molesta esperar. → Me molesta que me ___ esperar. (hacer, ellos)", "hagan", "«Me molesta que» + otro sujeto → subjuntivo, formado desde hago: hagan."),
      fb("Transforma.", "Me da miedo conducir de noche. → Me da miedo que ___ de noche. (conducir, tú)", "conduzcas", "«Me da miedo que» → subjuntivo, formado desde conduzco: conduzcas."),
      fb("Transforma.", "Me alegra verte. → Me alegra que me ___ a ver. (venir, tú)", "vengas", "«Me alegra que» → subjuntivo, formado desde vengo: vengas."),
      fb("Transforma.", "Siento no saber la respuesta. → Siento que nadie ___ la respuesta. (saber)", "sepa", "«Siento que» expresa emoción → subjuntivo; saber es irregular: sepa."),
      fb("Transforma.", "Odio madrugar. → Odio que mis vecinos ___ tan temprano. (levantarse)", "se levanten", "«Odio que» → subjuntivo, y el reflexivo va delante del verbo: se levanten."),
      mc(
        "«Nos sorprende ___ tan pronto.» (nosotros llegamos)",
        ["llegar", "que lleguemos", "que llegamos", "llegando"],
        0,
        "Nos sorprende y nosotros llegamos: mismo sujeto → infinitivo, nos sorprende llegar. «Que lleguemos» se usaría con otro sujeto, «que llegamos» usa indicativo y «llegando» es gerundio."
      ),
      toEs("I'm sorry you have to leave so soon.", "Siento que tengas que irte tan pronto.", "«Siento que» → subjuntivo; tener que → tengas que, e irse → irte.", ["Lamento que tengas que irte tan pronto."]),
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
        [
          "Recuerda la regla: las tres formas piden subjuntivo, porque ninguna afirma un hecho; todas miran hacia algo que todavía no es real.",
          "Cambia el matiz: ojalá = deseo, a veces poco probable (Ojalá me toque la lotería); espero que = esperanza razonable (Espero que apruebes); quiero que = voluntad sobre otra persona, casi una petición (Quiero que me ayudes). Ojalá no es un verbo: no dice quién desea. Esperar y querer sí se conjugan (esperamos que, quieren que).",
        ],
        [
          ["Ojalá me toque la lotería.", "I hope I win the lottery. (deseo poco probable)"],
          ["Esperamos que os guste la cena.", "We hope you like the dinner. (esperanza razonable)"],
          ["Mis padres quieren que estudie Medicina.", "My parents want me to study medicine. (voluntad sobre otro)"],
        ],
        [
          fb("Completa.", "Ojalá ___ sol mañana. (hacer)", "haga", "Ojalá → subjuntivo; hacer sale de «hago»: haga."),
          mc(
            "Le pides a tu compañero que cierre la ventana. ¿Qué forma encaja mejor?",
            ["Quiero que cierres la ventana.", "Ojalá cierres la ventana.", "Espero que cierras la ventana.", "Quiero cerrar la ventana."],
            0,
            "Es tu voluntad sobre otra persona → quiero que + subjuntivo. «Ojalá» suena a deseo lejano, «espero que cierras» usa indicativo y «quiero cerrar» significa que la cierras tú."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "Espero que tu padre se ___ pronto. (recuperar)", "recupere", "Espero que + otro sujeto → subjuntivo: se recupere (-ar → -e)."),
      fb("Completa.", "Quiero que me ___ con la mudanza. (ayudar, vosotros)", "ayudéis", "Quiero que + otro sujeto → subjuntivo: ayudéis (vosotros, con tilde)."),
      fb("Completa.", "Ojalá ___ la entrevista. (pasar, nosotros)", "pasemos", "Ojalá → subjuntivo: pasemos."),
      fb("Completa.", "Espero que ___ un buen viaje. (tener, vosotros)", "tengáis", "Espero que → subjuntivo; tener sale de «tengo»: tengáis."),
      mc(
        "¿Qué frase es incorrecta?",
        ["Ojalá que viene mañana.", "Ojalá venga mañana.", "Ojalá que venga mañana.", "Espero que venga mañana."],
        0,
        "«Ojalá» siempre va con subjuntivo, con o sin «que», así que «Ojalá que viene» es incorrecta. «Ojalá venga», «Ojalá que venga» y «Espero que venga» usan bien el subjuntivo."
      ),
      toEs("I hope it's not too late.", "Ojalá no sea demasiado tarde.", "Ojalá (o espero que) + subjuntivo; ser es irregular: sea.", ["Espero que no sea demasiado tarde.", "Ojalá que no sea demasiado tarde."]),
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
        [
          "Recuerda la regla: para proponer un plan, nosotros usa el subjuntivo: hablemos, comamos fuera. Los pronombres se pegan detrás en el afirmativo y van delante en el negativo (pongámoslo / no lo pongamos).",
          "Por qué se pierde la -s: decir «sentemosnos» o «digamosselo» junta dos sonidos iguales, así que el español elimina una -s: sentémonos, digámoselo. La tilde aparece para mantener el acento donde estaba (sen-TE-mos → sen-TÉ-mo-nos). Ir: vamos (afirmativo), no vayamos (negativo).",
        ],
        [
          ["Sentémonos aquí.", "Let's sit down here. (sentemos + nos)"],
          ["¡Vamos a la playa!", "Let's go to the beach! (ir: vamos)"],
          ["No se lo digamos a nadie.", "Let's not tell anyone. (negativo: se lo delante)"],
        ],
        [
          fb("Propón.", "(cenar fuera) ___ fuera esta noche.", "Cenemos", "Nosotros → subjuntivo: ceno → cenemos."),
        ]
      ),
    ],
    [
      fb("Propón.", "(no discutir) No ___ más.", "discutamos", "Negativo de nosotros: no + subjuntivo (discuto → discutamos)."),
      fb("Propón.", "(levantarse temprano) ___ temprano mañana.", "Levantémonos", "Levantemos + nos: se pierde la -s y aparece la tilde."),
      fb("Propón.", "(irse) ¡___!", "Vámonos", "Vamos + nos: se pierde la -s → vámonos."),
      fb("Propón.", "(no irse todavía) No ___ todavía.", "nos vayamos", "Negativo: nos delante, ir en subjuntivo: no nos vayamos."),
      fb("Propón.", "(decírselo a Ana) ___ hoy.", "Digámoselo", "Digamos + se lo: se pierde una -s para no juntar dos (digámoselo)."),
      fb("Propón.", "(hacer una foto) ___ una foto.", "Hagamos", "Desde «hago»: hagamos."),
      mc(
        "«___ a pie, que hace buen día.» (ir, nosotros)",
        ["Vamos", "Íbamos", "Fuimos", "Habíamos ido"],
        0,
        "Para proponer algo con ir, el afirmativo normal es «vamos» («vayamos» existe, pero es formal). «Íbamos», «fuimos» y «habíamos ido» son pasado y no proponen nada."
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
        [
          "Recuerda la regla: en el mandato afirmativo el pronombre reflexivo va pegado al final (lávate, lávese); en el negativo va delante y el verbo pasa a subjuntivo (no te laves, no se lave). Usted usa siempre la forma del subjuntivo, también en afirmativo: lave → lávese.",
          "¿Por qué la tilde? Al pegar el pronombre la palabra gana una sílaba, pero el acento se queda donde estaba: la-va → lá-va-te. Como ahora cae en la antepenúltima sílaba, hay que escribirla. Los monosílabos con un solo pronombre no la necesitan: ponte, vete.",
        ],
        [
          ["Ponte el abrigo, que hace frío.", "Put on your coat, it's cold. (tú afirmativo: te pegado; pon + te sin tilde)"],
          ["No se vaya todavía, por favor.", "Don't leave yet, please. (usted negativo: se delante)"],
          ["Cállese un momento, por favor.", "Be quiet for a moment, please. (usted afirmativo: calle + se, con tilde)"],
        ],
        [
          fb("Mismo marco.", "(tú, sentarse) ___ aquí.", "Siéntate", "Tú afirmativo: sienta + te pegado; la tilde mantiene el acento en sien-: siéntate."),
        ]
      ),
    ],
    [
      fb("Mismo marco.", "(tú, no sentarse) No ___ ahí.", "te sientes", "Negativo: te delante del verbo y subjuntivo (sientes). «No siéntate» es el error típico."),
      fb("Mismo marco.", "(tú, callarse) ¡___!", "Cállate", "Afirmativo: calla + te pegado, con tilde para que el acento siga en ca-: cállate."),
      fb("Mismo marco.", "(tú, no preocuparse) No ___.", "te preocupes", "Negativo: te delante + subjuntivo (preocupes), no «preocúpate»."),
      fb("Mismo marco.", "(usted, quedarse) ___ a cenar.", "Quédese", "Usted afirmativo: subjuntivo (quede) + se pegado, con tilde: quédese."),
      fb("Mismo marco.", "(usted, no molestarse) No ___.", "se moleste", "Usted negativo: se delante + subjuntivo (moleste)."),
      fb("Mismo marco.", "(tú, irse) ___ a casa, es tarde.", "Vete", "Irse: el imperativo de tú es ve, y con te pegado, vete (monosílabo + te: sin tilde)."),
      mc(
        "(tú, ducharse) «___ antes de cenar.»",
        ["Dúchate", "Duchate", "Te duchas", "Duchaste"],
        0,
        "En el afirmativo el pronombre va pegado al verbo, y la palabra necesita tilde para mantener el acento: dúchate. «Duchate» no lleva la tilde, «Te duchas» es una descripción y «Duchaste» es pasado."
      ),
      toEs("Don't get angry, please (usted).", "No se enfade, por favor.", "Negativo de usted: no + se + subjuntivo: no se enfade. «No enfádese» pondría el pronombre en el sitio del afirmativo.", ["No se enoje, por favor."]),
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
        [
          "Recuerda la regla: si + presente de indicativo, y luego uno de tres finales. Presente para lo que suele pasar (Si llueve, me quedo en casa), futuro para una ocasión concreta (Si llueve mañana, me quedaré en casa) o mandato para una instrucción (Si llueve, coge el paraguas). Nunca futuro ni subjuntivo después del si de condición.",
          "Construye cada frase en dos pasos: primero la condición en presente, después elige el final según lo que quieras hacer: describir, anunciar o mandar.",
        ],
        [
          ["Si tienes hambre, come algo.", "If you're hungry, eat something. (instrucción → mandato)"],
          ["Si ahorro, iré a Japón.", "If I save, I'll go to Japan. (plan → futuro)"],
          ["Si duermo poco, estoy de mal humor.", "If I sleep little, I'm in a bad mood. (lo que suele pasar → presente)"],
        ],
        [
          fb("Construye.", "Si ___ tiempo, te ayudo. (tener, yo)", "tengo", "La condición va en presente de indicativo: tengo, no «tendré» ni «tenga»."),
        ]
      ),
    ],
    [
      fb("Paso 1.", "Si ___ el tren, llegamos a las nueve. (coger, nosotros)", "cogemos", "Si + presente. Ojo: coger es neutro en España, pero en México, Argentina y buena parte de Latinoamérica es vulgar; allí se dice tomar o agarrar."),
      fb("Paso 2.", "Si cogemos el tren, ___ a las nueve. (llegar, futuro)", "llegaremos", "El futuro va en el resultado, nunca en la parte de «si»: llegaremos."),
      fb("Paso 3.", "Si ves a Luis, ___ que me llame. (decir, mandato)", "dile", "Final de instrucción → mandato de tú: di + le pegado = dile."),
      fb("Paso 1.", "Si no ___ prisa, damos un paseo. (tener, vosotros)", "tenéis", "Si + presente de vosotros: tenéis, con tilde."),
      fb("Paso 2.", "Si me invitas, ___ el postre. (llevar, futuro)", "llevaré", "Final de plan → futuro: llevaré."),
      mc(
        "¿Qué frase es incorrecta?",
        ["Si lloverá, no saldré.", "Si llueve, no saldré.", "Si llueve, no salgo.", "Si llueve, no salgas."],
        0,
        "Después de «si» condicional no va el futuro: «Si lloverá» es incorrecta; lo correcto es «si llueve». Las otras tres combinan bien si + presente con futuro, presente o imperativo."
      ),
      toEs("If you (tú) need help, call me.", "Si necesitas ayuda, llámame.", "Si + presente + mandato: si necesitas ayuda, llámame.", ["Si necesitas ayuda, me llamas."]),
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
        "Recuerda la regla: ya, todavía no y la trampa de «ya no»",
        [
          "Recuerda la regla: ya + pretérito perfecto dice que algo está hecho (ya he pagado); todavía no o aún no + pretérito perfecto dice que sigue pendiente (todavía no he pagado). Los dos van delante de haber, y el pronombre también: ya lo he pagado, todavía no lo he pagado.",
          "Cuidado con «ya no»: no significa «not yet», sino «no longer» (ya no trabajo aquí). Para una tarea pendiente, siempre todavía no.",
        ],
        [
          ["Ya he terminado el informe.", "I've already finished the report."],
          ["—¿Has llamado al fontanero? —No, todavía no lo he llamado.", "Have you called the plumber? — No, I haven't called him yet. (lo before he)"],
          ["Ya no vivo en Madrid.", "I no longer live in Madrid. (ya no = no longer, not «not yet»)"],
        ],
        [
          fb("Responde.", "—¿Ya has pagado el alquiler? —Sí, ya lo ___.", "he pagado", "Sí → ya + pretérito perfecto; el alquiler → lo, delante de he."),
          mc(
            "Todavía no has encontrado piso. ¿Cómo lo dices?",
            ["Todavía no he encontrado piso.", "Ya no he encontrado piso.", "Ya he encontrado piso.", "Todavía no encontré piso mañana."],
            0,
            "Algo pendiente hasta ahora = todavía no + perfecto. «Ya no» significa «no longer», «ya he encontrado» dice lo contrario y «mañana» es futuro."
          ),
        ]
      ),
    ],
    [
      fb("Responde.", "—¿Has sacado la basura? —No, todavía no la ___.", "he sacado", "No → todavía no + perfecto; la basura → la, delante de he."),
      fb("Responde.", "—¿Habéis reservado el hotel? —Sí, ya lo ___.", "hemos reservado", "La pregunta es para vosotros (habéis), así que respondes por el grupo con nosotros: ya lo hemos reservado, con el pronombre lo delante de haber."),
      fb("Responde.", "—¿Están ya en casa los niños? —No, todavía no ___. (volver)", "han vuelto", "Todavía no + perfecto; ellos → han; volver → vuelto (irregular)."),
      fb("Responde.", "—¿Has escrito a tu tía? —Sí, ya le ___.", "he escrito", "Ya + perfecto; escribir → escrito (irregular). Le (a tu tía) va delante de he."),
      fb("Responde.", "—¿Se puede comprar ya en la farmacia? —No, todavía no ___. (abrir)", "ha abierto", "La farmacia → ha; abrir → abierto (irregular)."),
      mc(
        "—¿Ya has visto la nueva serie? —No, ___.",
        ["todavía no la he visto", "ya no la veo", "todavía no la vi ayer", "ya la había visto"],
        0,
        "«Todavía no» + pretérito perfecto dice que algo no ha pasado hasta ahora: todavía no la he visto. «Ya no la veo» significa que dejó de verla, «la vi ayer» contradice «todavía no» y «ya la había visto» es pluscuamperfecto."
      ),
      toEs("Have you (tú) already had lunch? Not yet.", "¿Ya has comido? Todavía no.", "«Already» en pregunta = ya; «not yet» = todavía no. Ambos con pretérito perfecto.", ["¿Ya has almorzado? Todavía no.", "¿Has comido ya? Todavía no.", "¿Ya has comido? Aún no."]),
      toEs("Ya he regado las plantas.", "Todavía no he regado las plantas.", "Lo contrario de ya es todavía no (o aún no), también delante de haber.", ["Aún no he regado las plantas.", "No he regado todavía las plantas.", "No he regado las plantas todavía."], "Cambia a la forma negativa con «todavía no»."),
      toEs("We haven't paid the electricity bill yet.", "Todavía no hemos pagado la factura de la luz.", "Todavía no / aún no + hemos + participio = haven't … yet.", ["Aún no hemos pagado la factura de la luz.", "No hemos pagado todavía la factura de la luz.", "Todavía no hemos pagado la cuenta de la luz.", "Aún no hemos pagado la cuenta de la luz."]),
      { type: "fill-blank", prompt: "¿Cómo se dicen en español las palabras en negrita?", sentence: "—¿Has enviado las invitaciones? —Sí, ya ___ he enviado.", answer: "las", en: "—Have you sent the invitations? —Yes, I've already sent [them].", explanation: "Las invitaciones → las, entre ya y he." },
      { type: "fill-blank", prompt: "¿Cómo se dicen en español las palabras en negrita?", sentence: "—¿Ha pasado el cartero? —No, ___ ha pasado.", answer: "todavía no", en: "—Has the mail carrier come by? —No, he [hasn't] come by [yet].", altAnswers: ["aún no"], explanation: "Not yet = todavía no (o aún no), delante de ha." },
      toEs("Todavía no he limpiado la cocina.", "Ya he limpiado la cocina.", "Para decir que la tarea está hecha: ya + pretérito perfecto, y desaparece el «no».", ["He limpiado ya la cocina."], "Cambia a la forma afirmativa con «ya»."),
      toEs("Mi hermana ya no ha encontrado trabajo.", "Mi hermana todavía no ha encontrado trabajo.", "«Ya no» significa «no longer»; para «not yet» se dice todavía no (o aún no).", ["Mi hermana aún no ha encontrado trabajo.", "Mi hermana no ha encontrado trabajo todavía."], "Corrige la frase."),
      mc("—¿Ya habéis hecho las maletas? —Sí, ___.", ["ya las hemos hecho", "ya hemos las hecho", "todavía no las hemos hecho", "ya las hicimos mañana"], 0, "Sí → ya; el pronombre «las» va antes de hemos, nunca entre hemos y hecho. «Todavía no» contradice el sí y «mañana» es futuro."),
      wo("Todavía no le he contestado a mi jefe", "Todavía no + pronombre + he + participio: nada se mete entre he y contestado.", "I haven't answered my boss yet"),
      toEs("I've already bought the drinks, but I haven't made the salad yet.", "Ya he comprado las bebidas, pero todavía no he hecho la ensalada.", "Ya para lo terminado, todavía no para lo pendiente; hacer → hecho.", ["Ya he comprado las bebidas, pero aún no he hecho la ensalada.", "Ya he comprado las bebidas, pero no he hecho la ensalada todavía.", "He comprado ya las bebidas, pero todavía no he hecho la ensalada."]),
      toEs("Ya he lo enviado.", "Ya lo he enviado.", "El pronombre va delante de haber: ya lo he enviado. Nunca entre he y el participio.", [], "Corrige la frase."),
      ms(
        "¿Qué respuestas dicen que la tarea sigue pendiente?",
        ["Todavía no lo he hecho.", "Aún no lo he hecho.", "Ya lo he hecho.", "Ya no lo hago."],
        [0, 1],
        "Todavía no y aún no significan «not yet»: la tarea está pendiente. «Ya lo he hecho» dice que está terminada y «ya no lo hago» significa que dejaste de hacerlo."
      ),
      { type: "speak", prompt: "Tu lista: comprar pan (hecho), llamar al fontanero (pendiente). Tu pareja pregunta «¿Lo has hecho todo?». Responde en voz alta.", text: "Ya he comprado el pan, pero todavía no he llamado al fontanero.", explanation: "Lo hecho: ya + perfecto. Lo pendiente: todavía no + perfecto." },
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
        [
          "Recuerda la regla: cuando + indefinido marca el momento de referencia; ya + pluscuamperfecto, lo que estaba terminado antes de ese momento (Cuando llegué, la fiesta ya había terminado). Con porque, la causa anterior también va en pluscuamperfecto (No comí porque ya había comido en casa).",
          "Los pronombres van delante de había (ya la había visto) y los participios irregulares no cambian: hecho, visto, abierto, escrito, roto, vuelto, dicho, puesto.",
        ],
        [
          ["No vi la película porque ya la había visto.", "I didn't watch the film because I had already seen it. (pronombre delante de había)"],
          ["Cuando llegué, todos se habían ido.", "When I arrived, everyone had left. (se delante de habían)"],
        ],
        [
          fb("Completa.", "Cuando llamé, mi hermano ya ___. (salir)", "había salido", "Salir fue antes de llamar (indefinido): pluscuamperfecto, había salido."),
          fb("Completa.", "No pude entrar porque alguien ___ la puerta. (cerrar)", "había cerrado", "La causa (cerrar la puerta) es anterior a no poder entrar: pluscuamperfecto, había cerrado."),
        ]
      ),
    ],
    [
      fb("Estación 1.", "Cuando llegamos al cine, la película ya ___. (empezar)", "había empezado", "Empezar ocurrió antes de llegamos: ya + pluscuamperfecto, había empezado."),
      fb("Estación 1.", "Cuando encontré las llaves, ya ___ otra copia. (hacer, yo)", "había hecho", "La copia se hizo antes de encontrar las llaves: pluscuamperfecto, con el participio irregular hecho."),
      fb("Estación 2.", "No tenía hambre porque ya ___. (merendar, yo)", "había merendado", "Merendar es la causa y ocurrió antes de no tener hambre: pluscuamperfecto, había merendado."),
      fb("Estación 2.", "Estaban cansados porque ___ toda la noche. (bailar)", "habían bailado", "La causa, anterior al cansancio, va en pluscuamperfecto; el sujeto es ellos: habían bailado."),
      fb("Estación 3.", "Nunca ___ un lugar tan bonito antes de aquel viaje. (ver, yo)", "había visto", "Antes de aquel viaje es un momento pasado: nunca + pluscuamperfecto, con el participio irregular visto."),
      fb("Estación 3.", "Cuando el profesor ___, ya habíamos terminado el examen. (llegar)", "llegó", "Llegar es el momento de referencia, posterior a terminar: indefinido, llegó."),
      mc(
        "«Me dijo que ya ___ la carta.» (escribir, él, antes)",
        ["había escrito", "ha escrito", "escribía", "escribirá"],
        0,
        "Él escribió la carta antes de decírmelo: pluscuamperfecto en estilo indirecto, había escrito. «Ha escrito» se liga al presente, «escribía» describe un proceso y «escribirá» es futuro."
      ),
      toEs("When we arrived, the train had already left.", "Cuando llegamos, el tren ya había salido.", "El tren salió antes de que llegáramos: pluscuamperfecto, había salido.", ["Cuando llegamos, el tren ya se había ido."]),
      toEs(
        "Cuando llegué, ya habían ponido la mesa.",
        "Cuando llegué, ya habían puesto la mesa.",
        "Poner tiene participio irregular: puesto, no «ponido». El tiempo es correcto: la mesa estaba puesta antes de llegar.",
        [],
        "Corrige la frase."
      ),
    ]
  ),
  L(
    "el-primer-campamento",
    "b1d-rep-perfecto-pluscuam-mezcla",
    "Elige y explica: he hecho, hice o había hecho",
    "Repaso espaciado: elige entre pretérito perfecto, indefinido y pluscuamperfecto según el marcador de tiempo y el orden de las acciones.",
    "6 min",
    [
      sec(
        "Recuerda la regla: tres pasados, tres preguntas",
        [
          "Recuerda la regla: elige el pasado según dónde está la acción respecto al presente y a otras acciones. Pretérito perfecto (he hecho): el periodo sigue abierto o llega hasta ahora (hoy, este año, ya, nunca, alguna vez). Indefinido (hice): el periodo está cerrado (ayer, en 2015, la semana pasada). Pluscuamperfecto (había hecho): la acción ocurrió antes de otra acción pasada.",
          "Por eso el marcador de tiempo decide entre perfecto e indefinido, y el orden de las acciones decide el pluscuamperfecto: ya había comido cuando llegaste (comer pasó antes de llegar). En gran parte de Latinoamérica, el indefinido se usa también con hoy o este año: hoy comí mucho.",
        ],
        [
          ["Este mes he ido al gimnasio diez veces.", "This month I've gone to the gym ten times. (open period)"],
          ["El mes pasado fui cinco veces.", "Last month I went five times. (closed period)"],
          ["Cuando llegué, la clase ya había empezado.", "When I arrived, the class had already started. (before another past action)"],
        ],
        [
          mc(
            "«Este verano ___ mucho.» (viajar, nosotros)",
            ["hemos viajado", "viajamos ayer", "habíamos viajado", "viajaremos"],
            0,
            "«Este verano» se ve como un periodo que llega al presente: en España, pretérito perfecto, hemos viajado. «Viajamos ayer» contradice el marcador, «habíamos viajado» exige otra acción pasada posterior y «viajaremos» es futuro."
          ),
          fb("Aplica la regla.", "Cuando encendí la tele, el partido ya ___. (terminar)", "había terminado", "El partido terminó antes de otra acción pasada (encendí): pluscuamperfecto, había terminado. «Terminó» no marcaría que fue antes."),
        ]
      ),
    ],
    [
      mc("«El verano pasado ___ a Grecia.» (ir, nosotros)", ["fuimos", "hemos ido", "habíamos ido", "íbamos"], 0, "«El verano pasado» es un periodo cerrado: pretérito indefinido, fuimos. «Hemos ido» se usa con periodos no terminados, «habíamos ido» es anterior a otro pasado e «íbamos» describe hábitos."),
      mc("«Cuando fuimos a Grecia, mis padres ya ___ allí dos veces.» (estar)", ["habían estado", "han estado", "estuvieron", "están"], 0, "Los padres estuvieron allí dos veces antes de nuestro viaje, otro momento pasado: pluscuamperfecto, habían estado. «Han estado» se relaciona con el presente, «estuvieron» no marca esa anterioridad y «están» es presente."),
      mc("«¿___ alguna vez en Grecia?» (estar, tú)", ["Has estado", "Estuviste ayer", "Habías estado mañana", "Estarás"], 0, "«Alguna vez» pregunta por una experiencia de la vida: pretérito perfecto, has estado. «Estuviste ayer» y «habías estado mañana» mezclan marcadores incompatibles, y «estarás» es futuro."),
      fb("Completa.", "Esta mañana ___ temprano. (levantarse, yo)", "me he levantado", "«Esta mañana» (todavía hoy) une la acción al presente: perfecto. En Latinoamérica también se oye «me levanté»."),
      fb("Completa.", "Anteayer ___ muy tarde. (acostarse, yo)", "me acosté", "«Anteayer» es un tiempo cerrado: indefinido, me acosté. «Me he acostado» no encaja con un marcador terminado."),
      fb("Completa.", "Estaba agotada porque la noche anterior no ___. (dormir)", "había dormido", "No dormir pasó antes de estar agotada (otro pasado): pluscuamperfecto, había dormido."),
      toEs("I lost the keys I had bought the day before.", "Perdí las llaves que había comprado el día anterior.", "Perder va en indefinido; comprar las llaves pasó antes: pluscuamperfecto, había comprado.", ["Perdí las llaves que había comprado el día antes."]),
      fb("Completa.", "Hoy ___ tres cafés. (tomar, yo)", "he tomado", "«Hoy» une la acción al presente: pretérito perfecto. «Tomé» es la opción habitual en Latinoamérica, no en España."),
      toEs("Ayer hemos cenado en un restaurante mexicano.", "Ayer cenamos en un restaurante mexicano.", "«Ayer» es un tiempo terminado: indefinido (cenamos). El perfecto («hemos cenado») choca con ese marcador.", [], "Corrige la frase."),
      toEs("Have you ever eaten paella? (tú)", "¿Alguna vez has comido paella?", "Experiencia de toda la vida con «alguna vez»: pretérito perfecto, no indefinido con fecha.", ["¿Has comido paella alguna vez?", "¿Has comido alguna vez paella?", "¿Alguna vez comiste paella?", "¿Comiste paella alguna vez?"]),
      toEs("En 2019 mi hermana se ha mudado a Chile.", "En 2019 mi hermana se mudó a Chile.", "Una fecha del pasado (en 2019) cierra el periodo: indefinido, se mudó.", ["Mi hermana se mudó a Chile en 2019."], "Corrige la frase."),
      { type: "fill-blank", prompt: "¿Cómo se dicen en español las palabras en negrita?", sentence: "Cuando llegué a la estación, el tren ya ___.", answer: "había salido", en: "When I got to the station, the train [had left] already.", explanation: "La salida del tren es anterior a mi llegada (otro pasado): pluscuamperfecto.", altAnswers: ["se había ido"] },
      { type: "fill-blank", prompt: "¿Cómo se dicen en español las palabras en negrita?", sentence: "Este año ___ dos libros en español.", answer: "he leído", en: "This year I['ve read] two books in Spanish.", explanation: "«Este año» todavía no ha terminado: pretérito perfecto.", altAnswers: ["leí"] },
      { type: "fill-blank", prompt: "¿Cómo se dicen en español las palabras en negrita?", sentence: "La semana pasada ___ con mi jefe sobre el aumento.", answer: "hablé", en: "Last week I [talked] to my boss about the raise.", explanation: "«La semana pasada» es un periodo terminado: indefinido, no «he hablado»." },
      toEs("We have never been to Japan.", "Nunca hemos estado en Japón.", "«Nunca» habla de toda nuestra vida hasta ahora: pretérito perfecto.", ["No hemos estado nunca en Japón.", "Nunca hemos ido a Japón.", "No hemos ido nunca a Japón.", "Nunca estuvimos en Japón.", "Nunca fuimos a Japón."]),
      toEs("Esta semana ha llovido todos los días.", "La semana pasada llovió todos los días.", "Al cerrar el periodo (la semana pasada), el perfecto pasa a indefinido: ha llovido → llovió.", [], "Cambia «esta semana» por «la semana pasada»."),
      toEs("Me desperté y mis amigos se fueron.", "Cuando me desperté, mis amigos ya se habían ido.", "Con «cuando… ya», la salida de los amigos es anterior al despertar: pluscuamperfecto, se habían ido.", ["Cuando me desperté, mis amigos ya se habían marchado.", "Cuando me desperté, ya se habían ido mis amigos."], "Une las dos frases con «cuando» y «ya» para mostrar que se fueron antes."),
      mc("«Ayer ___ a mi abuela en el hospital.» (visitar, yo)", ["visité", "he visitado", "había visitado", "visitaba siempre"], 0, "«Ayer» pide indefinido: visité. «He visitado» no casa con un periodo cerrado, «había visitado» necesita otra acción pasada posterior y «visitaba siempre» es un hábito."),
      toEs("No quisieron ver la película porque ya la vieron.", "No quisieron ver la película porque ya la habían visto.", "Verla fue antes de no querer verla (otro pasado): pluscuamperfecto, la habían visto.", ["No querían ver la película porque ya la habían visto."], "Corrige la frase."),
      toEs("Have you finished the report? (tú, today)", "¿Has terminado el informe?", "Una acción de hoy, unida al presente: pretérito perfecto.", ["¿Ya has terminado el informe?", "¿Has terminado ya el informe?", "¿Has acabado el informe?", "¿Ya has acabado el informe?", "¿Ya terminaste el informe?", "¿Terminaste el informe?"]),
      wo("Cuando llegó la policía, el ladrón ya se había escapado", "El ladrón escapó antes de que llegara la policía: pluscuamperfecto en la segunda parte.", "When the police arrived, the thief had already escaped"),
      wo("Este mes he trabajado más que nunca", "«Este mes» va con pretérito perfecto (he trabajado), porque el mes no ha terminado.", "This month I've worked more than ever"),
      ms(
        "¿Qué marcadores van normalmente con el pretérito perfecto en España?",
        ["hoy", "ayer", "este año", "nunca", "en 2010"],
        [0, 2, 3],
        "Hoy, este año y nunca incluyen el presente: perfecto. Ayer y en 2010 son tiempos cerrados: indefinido."
      ),
      toEs("I was nervous during the exam because I hadn't studied enough.", "Estaba nervioso en el examen porque no había estudiado lo suficiente.", "No estudiar ocurrió antes del examen (pasado): pluscuamperfecto.", ["Estaba nerviosa en el examen porque no había estudiado lo suficiente.", "Estaba nervioso durante el examen porque no había estudiado lo suficiente.", "Estaba nerviosa durante el examen porque no había estudiado lo suficiente.", "Estaba nervioso en el examen porque no había estudiado suficiente.", "Estaba nerviosa en el examen porque no había estudiado suficiente."]),
      toEs("Last year I went to Peru, but this year I haven't traveled anywhere.", "El año pasado fui a Perú, pero este año no he viajado a ningún sitio.", "«El año pasado» → indefinido (fui); «este año» → pretérito perfecto (no he viajado).", ["El año pasado fui a Perú, pero este año no he viajado a ninguna parte.", "El año pasado fui al Perú, pero este año no he viajado a ningún sitio.", "El año pasado viajé a Perú, pero este año no he viajado a ningún sitio.", "El año pasado fui a Perú, pero este año no he ido a ningún sitio.", "El año pasado fui a Perú, pero este año no he viajado a ningún lado."]),
      { type: "speak", prompt: "Responde en voz alta: di qué has hecho hoy y qué hiciste ayer.", text: "Hoy he trabajado en casa, pero ayer fui a la oficina.", explanation: "«Hoy» → perfecto (he trabajado); «ayer» → indefinido (fui)." },
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
        [
          "Recuerda la regla: que es el más común (sin preposición, personas y cosas). Quien / quienes, solo personas, tras coma o preposición. Lo que, una idea completa sin sustantivo delante. El / la / los / las que, tras preposición, concordando con el sustantivo (con el que, en la que).",
          "Para decidir rápido: primero, ¿hay sustantivo delante? Si no, lo que. Si lo hay, ¿hay preposición? Si sí, artículo + que (o quien). Si no, que.",
        ],
        [
          ["La chica con la que hablé es mi prima.", "The girl I talked to is my cousin. (preposición + la que)"],
          ["Lo que dices es verdad.", "What you're saying is true. (sin sustantivo: lo que)"],
          ["Mis abuelos, quienes viven en el campo, tienen huerto.", "My grandparents, who live in the country, have a vegetable garden. (personas entre comas)"],
        ],
        [
          fb("Rápido.", "El pueblo ___ nací es muy pequeño. (en)", "en el que", "Nací en el pueblo: la preposición va delante del relativo y el artículo concuerda con pueblo: en el que."),
          fb("Rápido.", "Las amigas a ___ invité llegaron tarde. (personas)", "quienes", "Invitar a alguien: con personas tras la preposición a, quienes (o las que), en plural por amigas."),
        ]
      ),
    ],
    [
      fb("Rápido.", "La película ___ vimos ayer era aburrida.", "que", "Sin preposición, el relativo es «que»: la película que vimos."),
      fb("Rápido.", "Apunta ___ ha dicho la profesora.", "lo que", "«Lo que» = what: se refiere a lo dicho, sin sustantivo antes."),
      { ...fb("Rápido.", "Mi tío, ___ vive en Lima, viene en mayo.", "quien", "Para una persona entre comas vale «quien» (y también «que»)."), altAnswers: ["que", "el cual"] },
      fb("Rápido.", "La mesa ___ trabajo es de mi abuelo. (sobre)", "sobre la que", "Trabajo sobre la mesa: preposición + artículo femenino (por mesa) + que: sobre la que."),
      fb("Rápido.", "Los amigos ___ viajé son de Chile. (con)", "con los que", "Viajé con los amigos: preposición + los que, en masculino plural por amigos (también con quienes)."),
      fb("Rápido.", "___ más me gusta de ti es tu humor.", "Lo que", "Sin antecedente, «lo que» se refiere a una idea: Lo que más me gusta…"),
      mc(
        "«El chico ___ te presenté ayer es mi vecino.»",
        ["que", "lo que", "el cual que", "cuyo"],
        0,
        "Sin preposición, el relativo es «que»: el chico que te presenté. «Lo que» es para ideas, «el cual que» junta dos relativos y «cuyo» indica posesión."
      ),
      toEs(
        "Lo que me molesta es el ruido.",
        "El ruido es lo que me molesta.",
        "Lo que funciona igual al principio o al final de la frase: sigue sin haber un sustantivo justo delante del relativo.",
        [],
        "Reescribe la frase empezando por «El ruido»."
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
        [
          "Recuerda la regla: en el mandato afirmativo los pronombres se pegan al final, persona + cosa (pása + me + la), y la palabra lleva tilde porque crece. En el negativo se despegan y van delante: no me la pases. Le/les → se delante de lo/la.",
          "En la mesa se pide con tú a la familia (pásamela) y con usted al camarero (tráiganosla): cambia el verbo, pero los pronombres siguen las mismas reglas.",
        ],
        [
          ["Pásame la sal. → Pásamela.", "Pass me the salt. → Pass it to me. (afirmativo: pegados y tilde)"],
          ["No le sirvas vino al niño. → No se lo sirvas.", "Don't serve the boy wine. → Don't serve it to him. (negativo: delante; le → se)"],
          ["(usted) Tráiganos la cuenta. → Tráiganosla.", "Bring us the bill. → Bring it to us. (usted: traiga + nos + la)"],
        ],
        [
          fb("Construye.", "Pásame el agua. → ___.", "Pásamela", "«Agua» es femenino (el agua solo lleva «el» por sonido), así que el pronombre es la: pásamela."),
        ]
      ),
    ],
    [
      fb("Paso 1.", "Tráeme el pan. → ___.", "Tráemelo", "Afirmativo: me + lo pegados al verbo, con tilde: tráemelo."),
      fb("Paso 2.", "Tráeles el pan a los niños. → ___.", "Tráeselo", "Les + lo → se lo."),
      fb("Paso 3.", "No les traigas el pan todavía. → No ___ todavía.", "se lo traigas", "En el negativo, los pronombres van delante (les → se ante lo): no se lo traigas."),
      fb("Paso 1.", "Sírveme la sopa. → ___.", "Sírvemela", "Afirmativo: me + la pegados, con tilde: sírvemela."),
      fb("Paso 2.", "Sírvele la sopa a la abuela. → ___.", "Sírvesela", "Le + la → se la."),
      fb("Paso 3.", "(usted) Sírvale la sopa a la señora. → ___.", "Sírvasela", "Mandato de usted (sirva) + se (le → se) + la, con tilde: sírvasela."),
      mc(
        "«¿Me dejas tu servilleta?» —Sí, toma, ___.",
        ["te la dejo", "se la dejo", "me la dejo", "la te dejo"],
        0,
        "Se la dejas a la persona con la que hablas (a ti): te la dejo. «Se la» sería para él, ella o usted; «me la» sería para mí, y «la te» invierte el orden."
      ),
      toEs("Bring it to us, please (the bill, usted).", "Tráiganosla, por favor.", "Mandato de usted (traiga) + nos + la, con tilde: tráiganosla."),
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
        [
          "Recuerda la regla: con los tiempos compuestos (he dicho, había explicado), los dos pronombres van delante de haber, juntos y en orden persona + cosa: ya se lo he dicho.",
          "¿Por qué no se pegan? Haber + participio funcionan como un solo verbo conjugado, y con los verbos conjugados los pronombres van delante. El participio nunca lleva pronombres pegados, y nada puede meterse entre haber y el participio.",
        ],
        [
          ["Ya se lo he dicho tres veces.", "I've already told him three times. (le + lo → se lo, delante de he)"],
          ["Nadie nos lo había explicado.", "Nobody had explained it to us. (pluscuamperfecto: igual)"],
          ["¿Todavía no te las han devuelto?", "Haven't they given them back to you yet? (con no: no + pronombres + haber)"],
        ],
        [
          fb("Transforma.", "He dado el informe a la jefa. → ___ he dado.", "Se lo", "El informe → lo; a la jefa → le, que se convierte en se delante de lo. Los dos delante de he: se lo he dado."),
        ]
      ),
    ],
    [
      fb("Transforma.", "Mis padres me han regalado un reloj. → Mis padres ___ han regalado.", "me lo", "Con haber, los pronombres van delante: me (a mí) + lo (un reloj): me lo han regalado."),
      fb("Transforma.", "Hemos mandado las fotos a los abuelos. → ___ hemos mandado.", "Se las", "Les (a los abuelos) → se delante de las (las fotos): se las hemos mandado."),
      fb("Transforma.", "Nadie te había contado la historia. → Nadie ___ había contado.", "te la", "Te + la (la historia), delante de haber: te la había contado."),
      fb("Transforma.", "¿Les has devuelto el dinero? → ¿___ has devuelto?", "Se lo", "Les → se delante de lo (el dinero): ¿Se lo has devuelto?"),
      fb("Transforma.", "Nos habían prometido una sorpresa. → ___ habían prometido.", "Nos la", "Nos + la (una sorpresa), delante de haber: nos la habían prometido."),
      mc(
        "¿Qué frase es correcta?",
        ["Se lo he explicado.", "He se lo explicado.", "He explicádoselo.", "Lo se he explicado."],
        0,
        "Con haber, los pronombres van delante del conjunto: se lo he explicado. No pueden ir entre haber y el participio (He se lo…), pegados al participio (explicádoselo) ni en orden inverso (Lo se)."
      ),
      toEs("I've already sent it to you (the email, tú).", "Ya te lo he enviado.", "Te + lo delante de haber: ya te lo he enviado.", ["Ya te lo he mandado."]),
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
        "Recuerda la regla: -d, -os y no + subjuntivo",
        [
          "Recuerda la regla: el afirmativo de vosotros sale del infinitivo cambiando la -r por -d, y no tiene irregulares (hacer → haced, venir → venid). Con el pronombre «os», la -d desaparece (sentad + os → sentaos), porque «sentados» suena a participio y la lengua la ha eliminado. El negativo es no + os + subjuntivo: no os alejéis.",
          "Solo «idos» (irse) conserva la -d. Con otros pronombres (lo, la, me) la -d se queda: ponedlos, esperadme.",
        ],
        [
          ["Chicos, dejad las mochilas aquí.", "Guys, leave your backpacks here. (dejar → dejad)"],
          ["Sentaos en círculo.", "Sit in a circle. (sentad + os: la -d cae)"],
          ["No os alejéis del grupo.", "Don't wander away from the group. (no + os + subjuntivo)"],
          ["Las linternas, dejadlas en la tienda.", "The torches, leave them in the tent. (con «las» la -d se queda)"],
        ],
        [
          fb("Completa con el mandato de vosotros.", "Chicos, ___ al monitor y no habléis todos a la vez. (escuchar)", "escuchad", "Afirmativo de vosotros: infinitivo sin -r + -d → «escuchad». «Escuchéis» es el subjuntivo, que solo va detrás de «no»."),
          toEs("Peinaos antes de la foto.", "No os peinéis antes de la foto.", "El negativo de vosotros es no + os + subjuntivo: peinaos → «no os peinéis». El pronombre sale delante.", [], "Cambia al negativo."),
        ]
      ),
    ],
    [
      fb("Completa con el mandato de vosotros.", "Si tenéis frío, ___ la chaqueta. (ponerse)", "poneos", "Poned + os → «poneos»: la -d cae delante de os."),
      fb("Completa con el mandato de vosotros.", "Por la noche, no ___ ruido. (hacer)", "hagáis", "Negativo de vosotros: no + subjuntivo. Hacer → hago → «hagáis»."),
      fb("Completa con el mandato de vosotros.", "___ los sacos al sol para que se sequen. (sacar)", "Sacad", "Afirmativo regular: sacar → «sacad». La c → qu solo aparece en el subjuntivo (no saquéis)."),
      mc(
        "«Recoged la basura y ___ a la tienda.» (irse)",
        ["idos", "vayaos", "ios", "id os"],
        0,
        "Irse es la excepción: su mandato de vosotros conserva la -d: idos. «Iros» se oye mucho en el habla coloquial, pero la norma recomienda idos; «vayaos», «ios» e «id os» no existen."
      ),
      toEs("Lávate las manos antes de cenar.", "Lavaos las manos antes de cenar.", "Lávate → «lavaos»: lavad + os, sin -d y sin tilde. (Con ustedes: Lávense las manos.)", [], "Cambia a vosotros."),
      toEs("No te quites las botas en el río.", "No os quitéis las botas en el río.", "En el negativo, «te» pasa a «os» y el subjuntivo de tú «quites» pasa a «quitéis».", [], "Cambia a vosotros."),
      toEs("Coged las linternas y seguidme.", "Cogedlas y seguidme.", "Con «las» la -d no cae (solo cae delante de «os»): coged + las → «cogedlas».", ["Tomadlas y seguidme."], "Sustituye «las linternas» por un pronombre."),
      toEs("Despiértate, que ya es de día.", "Despertaos, que ya es de día.", "Despertad + os → «despertaos»: la -d cae delante de os y en vosotros no hay diptongo. «Despertados» sería un participio.", [], "Cambia la frase a vosotros."),
      toEs("No os sentad en la hierba mojada.", "No os sentéis en la hierba mojada.", "Detrás de «no» va el subjuntivo: «no os sentéis». La forma en -d solo existe en el afirmativo.", [], "Corrige la frase."),
      toEs("Vened aquí, que os explico la ruta.", "Venid aquí, que os explico la ruta.", "El vosotros sale del infinitivo: venir → «venid». «Vened» mezcla la raíz con una terminación de -er.", [], "Corrige la frase."),
      { type: "speak", prompt: "Eres el monitor. Dilo en voz alta en español: «Put on your caps and don't forget the water.» (vosotros)", text: "Poneos la gorra y no os olvidéis del agua.", explanation: "Afirmativo reflexivo «poneos» (sin -d) frente al negativo «no os olvidéis» (os delante + subjuntivo)." },
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
        [
          "Recuerda la regla: el presente de subjuntivo se forma desde la forma yo del presente, quitando la -o y poniendo la vocal «contraria»: los verbos en -ar toman e (hablo → hable), los verbos en -er/-ir toman a (como → coma, vivo → viva). Por eso las irregularidades del yo pasan a todo el subjuntivo: tengo → tenga, digo → diga, conozco → conozca.",
          "Por qué la vocal contraria: así el oído distingue el subjuntivo del indicativo (hablas / hables). Solo seis verbos no siguen el truco del yo y hay que memorizarlos: ser (sea), estar (esté), ir (vaya), saber (sepa), haber (haya) y dar (dé).",
        ],
        [
          ["Quiero que vivamos cerca del mar.", "I want us to live near the sea. (vivo → viva: -ir toma a)"],
          ["Ojalá no haga frío mañana.", "I hope it isn't cold tomorrow. (hago → haga)"],
          ["No creo que sea tan difícil.", "I don't think it's that hard. (ser → sea, de memoria)"],
        ],
        [
          wo("Es mejor que no bebas café por la noche.", "Beber → bebo → bebas: -er toma a.", "It's better that you don't drink coffee at night."),
          mc("Aplica la regla a un verbo nuevo: «Espero que el perro no ___ los zapatos.» (morder)", ["muerda", "morda", "muerde", "muerdo"], 0, "Desde «muerdo» (o → ue): quita la -o y pon -a (verbo en -er): muerda. «Morda» pierde el diptongo, «muerde» es indicativo y «muerdo» es el presente de yo."),
        ]
      ),
    ],
    [
      wo("Mis padres quieren que estudie medicina.", "Estudiar → estudio → estudie: -ar toma e.", "My parents want me to study medicine."),
      wo("Dudo que tengan tiempo esta semana.", "Tener → tengo → tengan: la g del yo pasa al subjuntivo.", "I doubt they have time this week."),
      wo("Ojalá sepa llegar sin mapa.", "Saber es uno de los seis que no salen del yo (sé): sepa.", "I hope he knows how to get there without a map."),
      wo("Te pido que cierres la ventana.", "Cerrar → cierro → cierres: el cambio e → ie se mantiene.", "I'm asking you to close the window."),
      fb("Escribe.", "Es necesario que ___ el formulario hoy. (rellenar, usted)", "rellene", "Rellenar es -ar → toma e: rellene."),
      fb("Escribe.", "No creo que ___ tan lejos. (estar)", "esté", "Estar es irregular de memoria: esté (con tilde)."),
      toEs("I want you (tú) to learn to swim.", "Quiero que aprendas a nadar.", "Quiero que + subjuntivo: aprendas; «aprender a» + infinitivo."),
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
        [
          "Recuerda la regla: cuando un verbo de influencia (pedir, exigir, necesitar, rogar, querer, preferir) quiere que OTRA persona haga algo, va con que + subjuntivo: Les pido que envíen… Si el sujeto es el mismo, se usa el infinitivo: Necesito enviar el informe (yo) / Necesito que envíes el informe (tú).",
          "Por qué subjuntivo: la acción todavía no es un hecho, es lo que alguien desea o exige. Por eso «Les pido que envían» está mal: el indicativo presenta la acción como real.",
          "«Les pido que envíen los informes antes del viernes. La dirección exige que todos lleguen a las nueve. Necesitamos que alguien revise el presupuesto. Les ruego que respondan cuanto antes.»",
        ],
        [
          ["Necesitamos que alguien revise el presupuesto.", "We need someone to check the budget. (otro sujeto → subjuntivo)"],
          ["Necesitamos revisar el presupuesto.", "We need to check the budget. (mismo sujeto → infinitivo)"],
        ],
        [
          fb("Estación 1.", "Les pido que ___ los informes antes del viernes. (enviar)", "envíen", "Pedir que + subjuntivo: la acción es una petición, no un hecho."),
          mc("Aplica la regla a un verbo nuevo: «El jefe insiste en que ___ la reunión.» (grabar, nosotros)", ["grabemos", "grabamos", "grabar", "grabaremos"], 0, "Insistir en que también es un verbo de influencia con otro sujeto: subjuntivo, grabemos. «Grabamos» es indicativo, «grabar» solo con el mismo sujeto y «grabaremos» es futuro."),
        ]
      ),
    ],
    [
      fb("Estación 1.", "La dirección exige que todos ___ a las nueve. (llegar)", "lleguen", "Exigir que + subjuntivo; llegar cambia g → gu delante de e: lleguen."),
      fb("Estación 1.", "Les ruego que ___ cuanto antes. (responder)", "respondan", "Rogar que + subjuntivo; -er toma a: respondan."),
      fb("Estación 2.", "Necesito que me ___ el archivo. (mandar, tú)", "mandes", "Necesitar que + otro sujeto (tú) → subjuntivo: mandes."),
      fb("Estación 2.", "El cliente quiere que le ___ un descuento. (hacer, nosotros)", "hagamos", "Querer que + subjuntivo desde «hago»: hagamos."),
      fb("Estación 3.", "Mi jefe prefiere que ___ desde casa los viernes. (trabajar, yo)", "trabaje", "Preferir que + otro sujeto (yo, distinto del jefe) → subjuntivo: trabaje."),
      fb("Estación 3.", "Os pido que no ___ el móvil en las reuniones. (usar)", "uséis", "Pedir que + subjuntivo, forma de vosotros: uséis."),
      mc(
        "«Es urgente que el técnico ___ hoy.» (venir)",
        ["venga", "viene", "vendrá", "venir"],
        0,
        "«Es urgente que» expresa necesidad y pide subjuntivo: venga. «Viene» y «vendrá» son indicativo, y «venir» es infinitivo."
      ),
      toEs("Necesitamos firmar el contrato hoy.", "Necesitamos que firme el contrato hoy.", "Al cambiar el sujeto (ahora firma usted), el infinitivo pasa a que + subjuntivo: firme.", [], "Cambia la frase para que firme otra persona (usted)."),
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
        [
          "Recuerda la regla: creer que, pensar que, estar seguro de que en afirmativo van con indicativo, porque presentas la idea como verdadera. En negativo (no creo que, no pienso que, no estoy seguro de que) y con dudar que va el subjuntivo, porque ya no afirmas nada: la idea queda en duda. En una pregunta (¿Crees que…?) lo normal es el indicativo.",
          "El texto de Jaime: «Creo que el nuevo parque sea bonito, pero no creo que la gente lo usa mucho. Dudo que el ayuntamiento lo cuida bien. Pienso que es necesario que los vecinos participan.» Hay cuatro errores. Pista para el último: «es necesario que» pide subjuntivo aunque vaya detrás de «pienso que».",
        ],
        [
          ["Creo que el barrio es tranquilo.", "I think the neighbourhood is quiet. (afirmas → es)"],
          ["No creo que el barrio sea tranquilo.", "I don't think the neighbourhood is quiet. (niegas → sea)"],
          ["Dudo que mis primos vengan.", "I doubt my cousins are coming. (duda → vengan)"],
        ],
        [
          mc(
            "¿Qué pasa con «creo que el nuevo parque sea bonito»?",
            ["Creo que afirma: pide indicativo (es).", "Está bien.", "Debe ser «sería».", "Falta «no»."],
            0,
            "«Creer que» en afirmativo presenta una opinión como cierta y pide indicativo: creo que el parque es bonito. La frase no está bien, «sería» cambia el sentido y añadir «no» sí permitiría el subjuntivo, pero cambia lo que se dice."
          ),
        ]
      ),
    ],
    [
      toEs("Corrige: «Creo que el nuevo parque sea bonito.»", "Creo que el nuevo parque es bonito.", "«Creer que» en afirmativo expresa certeza y lleva indicativo: es, no «sea».", undefined, "Corrige el error."),
      toEs("Corrige: «No creo que la gente lo usa mucho.»", "No creo que la gente lo use mucho.", "«No creo que» pide subjuntivo: use, no «usa».", undefined, "Corrige el error."),
      toEs("Corrige: «Dudo que el ayuntamiento lo cuida bien.»", "Dudo que el ayuntamiento lo cuide bien.", "«Dudar que» pide subjuntivo: cuide, no «cuida».", undefined, "Corrige el error."),
      toEs("Corrige: «Es necesario que los vecinos participan.»", "Es necesario que los vecinos participen.", "«Es necesario que» pide subjuntivo: participen, no «participan».", undefined, "Corrige el error."),
      toEs("Corrige: «Estoy seguro de que venga mañana.»", "Estoy seguro de que viene mañana.", "«Estoy seguro de que» expresa certeza → indicativo: viene, no «venga».", ["Estoy seguro de que vendrá mañana."], "Corrige el error."),
      ms(
        "¿Qué frases son correctas?",
        ["No pienso que tengas razón.", "Pienso que tienes razón.", "Pienso que tengas razón.", "Creo que tengas razón."],
        [0, 1],
        "«No pienso que» niega la opinión y pide subjuntivo (tengas); «pienso que» afirmativo pide indicativo (tienes). «Pienso que tengas» y «Creo que tengas» usan subjuntivo con una opinión afirmativa."
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
        [
          "Recuerda la regla: ¡Qué + adjetivo o sustantivo + que + subjuntivo! (¡Qué bien que vengas! ¡Qué pena que no puedas venir! ¡Qué raro que no conteste!) y también me indigna que, me alegra que… ¿Por qué subjuntivo si la noticia es real? Porque no la estás contando: ya la conocéis los dos y tú reaccionas ante ella.",
          "Elige el tiempo según la noticia: si pasa ahora o va a pasar, presente de subjuntivo (¡Qué pena que llueva!); si ya ha pasado, haya + participio (¡Qué bien que hayas aprobado! Me indigna que hayan subido los precios).",
        ],
        [
          ["¡Qué pena que llueva hoy!", "What a shame it's raining today!"],
          ["¡Qué bien que te guste!", "How great that you like it!"],
        ],
        [
          fb("Reacciona.", "—Me han dado el trabajo. —¡Qué bien que te lo ___! (dar)", "hayan dado", "Qué bien que + subjuntivo; la acción ya ha ocurrido → perfecto de subjuntivo."),
        ]
      ),
    ],
    [
      fb("Reacciona.", "—No puedo ir a la fiesta. —¡Qué pena que no ___ ir! (poder)", "puedas", "¡Qué pena que! reacciona a la noticia → subjuntivo: puedas (o → ue). «Puedes» solo repetiría el dato."),
      fb("Reacciona.", "—Luis no contesta. —¡Qué raro que no ___! (contestar)", "conteste", "¡Qué raro que! + subjuntivo: conteste (-ar → -e)."),
      fb("Reacciona.", "—Suben otra vez los alquileres. —Me indigna que ___ tanto. (subir)", "suban", "Me indigna que es una reacción emocional → subjuntivo: suban (-ir → -a)."),
      fb("Reacciona.", "—Mis abuelos vienen a vivir aquí. —¡Qué alegría que ___ cerca! (estar)", "estén", "¡Qué alegría que! + subjuntivo de estar: estén, con tilde."),
      fb("Reacciona.", "—El museo cierra los lunes. —¡Qué lástima que ___ hoy! (cerrar)", "cierre", "¡Qué lástima que! + subjuntivo; cerrar mantiene el cambio e → ie: cierre."),
      mc(
        "—Voy a Japón en mayo. —¡Qué suerte que ___ ir!",
        ["puedas", "puedes", "poder", "podrás"],
        0,
        "«Qué suerte que» expresa emoción ante un hecho: subjuntivo, puedas. «Puedes» y «podrás» son indicativo, y «poder» es infinitivo."
      ),
      toEs("What a shame you (tú) have to work on Saturday!", "¡Qué pena que tengas que trabajar el sábado!", "«¡Qué pena que…!» expresa emoción → subjuntivo: tengas que.", ["¡Qué lástima que tengas que trabajar el sábado!"]),
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
        [
          "Recuerda la regla: mira el verbo principal. Si expresa deseo, duda, emoción o valoración (quiero que, dudo que, me alegra que, es posible que), el segundo verbo va en subjuntivo. Si informa de algo que sabes, crees o percibes (sé que, creo que, veo que, está claro que), va en indicativo.",
          "¿Por qué? El indicativo presenta algo como información real; el subjuntivo no informa, sino que reacciona o duda. Por eso la negación cambia el modo: «creo que es verdad» informa, pero «no creo que sea verdad» duda.",
        ],
        [
          ["Veo que estás cansado.", "I see you're tired. (percepción → indicativo)"],
          ["Siento que estés cansado.", "I'm sorry you're tired. (emoción → subjuntivo)"],
        ],
        [
          fb("Rápido.", "Sé que ___ razón. (tener, tú)", "tienes", "Saber que presenta información segura → indicativo: tienes, no «tengas»."),
        ]
      ),
    ],
    [
      fb("Rápido.", "Ojalá ___ razón. (tener, tú)", "tengas", "Ojalá expresa deseo → subjuntivo: tengas. «Tienes» informaría, y un deseo no informa."),
      fb("Rápido.", "Veo que ___ mucho trabajo. (tener, vosotros)", "tenéis", "Ver que es percepción de un hecho → indicativo: tenéis, no «tengáis»."),
      fb("Rápido.", "Me molesta que ___ tanto trabajo. (tener, vosotros)", "tengáis", "Me molesta que es una reacción emocional → subjuntivo: tengáis, aunque el hecho sea real."),
      fb("Rápido.", "Es evidente que ___ problemas. (haber)", "hay", "Es evidente que afirma algo seguro → indicativo: hay, no «haya»."),
      fb("Rápido.", "Es posible que ___ problemas. (haber)", "haya", "Es posible que no afirma, solo plantea una posibilidad → subjuntivo: haya."),
      fb("Rápido.", "Parece que ___ a llover. (ir)", "va", "Parece que, en afirmativo, informa de lo que percibes → indicativo: va."),
      fb("Rápido.", "No parece que ___ a llover. (ir)", "vaya", "Al negar la percepción aparece la duda → subjuntivo: vaya, no «va»."),
      fb("Rápido.", "Te aseguro que ___ la verdad. (decir, yo)", "digo", "Asegurar presenta algo como cierto → indicativo: digo, no «diga»."),
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
        [
          "Recuerda la regla: lo que decide el modo no es el hecho, sino lo que haces con él. Si lo valoras (opinas si es bueno, normal, lógico, triste), el verbo va en subjuntivo: es lógico que, es normal que, es una pena que, es bueno que, es injusto que. Si lo constatas (afirmas que es verdad, como información), va en indicativo: es verdad que, es cierto que, es obvio que, es evidente que, está claro que.",
          "¿Por qué? El indicativo es el modo de la información que presentas como real; el subjuntivo, el de lo que comentas o pones en duda. Por eso, al negar una constatación («no es verdad que…») ya no afirmas nada y vuelve el subjuntivo.",
        ],
        [
          ["Es lógico que estés nervioso.", "It's natural that you're nervous. (valoras → estés)"],
          ["Es verdad que estás nervioso.", "It's true that you're nervous. (constatas → estás)"],
          ["Es una pena que no vengan tus primos.", "It's a shame your cousins aren't coming. (valoración negativa → vengan)"],
          ["No es cierto que el examen sea difícil.", "It's not true that the exam is hard. (constatación negada → sea)"],
        ],
        [
          mc(
            "«Es una pena que no ___ más tiempo.» (tener, nosotros)",
            ["tengamos", "tenemos", "tener", "tendremos"],
            0,
            "«Es una pena que» valora un hecho y pide subjuntivo: tengamos. «Tenemos» y «tendremos» son indicativo, y «tener» es infinitivo."
          ),
        ]
      ),
    ],
    [
      fb("Elige.", "Es bueno que los niños ___ al aire libre. (jugar)", "jueguen", "«Es bueno que» valora → subjuntivo: jueguen (con -gu- para mantener el sonido). «Juegan» sería constatar."),
      fb("Elige.", "Es cierto que los niños ___ poco al aire libre. (jugar)", "juegan", "«Es cierto que» constata un hecho → indicativo: juegan. «Jueguen» solo iría si valoraras o negaras (no es cierto que…)."),
      fb("Elige.", "Es lógico que la gente ___ enfadada. (estar)", "esté", "«Es lógico que» valora → subjuntivo: esté. «Está» presentaría el hecho como información."),
      fb("Elige.", "Es evidente que la gente ___ enfadada. (estar)", "está", "«Es evidente que» constata → indicativo: está. «Esté» sería un error típico por confundir evidente con valoración."),
      fb("Elige.", "Es injusto que ___ tanto por un café. (cobrar, ellos)", "cobren", "«Es injusto que» es una valoración (juzgas el hecho) → subjuntivo: cobren, no «cobran»."),
      ms(
        "¿Cuáles piden subjuntivo?",
        ["es normal que", "es una pena que", "es obvio que", "es verdad que"],
        [0, 1],
        "«Es normal que» y «es una pena que» valoran un hecho, así que piden subjuntivo. «Es obvio que» y «es verdad que» expresan certeza y llevan indicativo."
      ),
      toEs("It's normal that you miss your family.", "Es normal que eches de menos a tu familia.", "«Es normal que» → subjuntivo; «to miss someone» = echar de menos → eches.", ["Es normal que extrañes a tu familia."]),
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
        [
          "Recuerda la regla: ojalá siempre va seguido de presente de subjuntivo (Ojalá encuentre un piso, ojalá mi hermana se case). La razón: un deseo habla de algo que no sabes si va a pasar, y el subjuntivo es el modo de lo no comprobado. Por eso «ojalá encuentro» o «ojalá encontraré» suenan mal: el indicativo presenta el deseo como un hecho.",
          "El «que» después de ojalá es opcional: Ojalá (que) podamos viajar juntos.",
          "Ahora habla de ti: piensa en tres cosas que deseas de verdad para este año.",
        ],
        [
          ["Ojalá encuentre un piso más grande.", "I hope I find a bigger flat."],
          ["Ojalá que mi hermana se case en primavera.", "I hope my sister gets married in spring."],
        ],
        [
          fb("Tus deseos.", "Ojalá ___ más tiempo libre. (tener, yo)", "tenga", "Ojalá + subjuntivo: tener → tengo → tenga. «Tengo» es indicativo y presenta el deseo como un hecho."),
        ]
      ),
    ],
    [
      fb("Tus deseos.", "Ojalá mis amigos ___ a verme. (venir)", "vengan", "Ojalá + subjuntivo; venir sale de vengo → vengan. «Vienen» es indicativo."),
      fb("Tus deseos.", "Ojalá ___ a hablar mejor español. (aprender, yo)", "aprenda", "Verbo en -er: el subjuntivo cambia la vocal a -a: aprenda, no «aprendo»."),
      fb("Tus deseos.", "Ojalá mi familia ___ bien de salud. (seguir)", "siga", "Seguir: sigo → siga (e → i y gu → g delante de a). «Sigue» es indicativo."),
      fb("Tus deseos.", "Ojalá ___ viajar a Argentina. (poder, nosotros)", "podamos", "Poder en nosotros no cambia o → ue: podamos, no «puedamos»."),
      fb("Tus deseos.", "Ojalá no me ___ el trabajo. (cambiar, ellos)", "cambien", "Verbo en -ar: el subjuntivo lleva -e: cambien, no «cambian»."),
      toEs("I hope I find a good job.", "Ojalá encuentre un buen trabajo.", "Ojalá + subjuntivo; encontrar → encuentre (o→ue).", ["Ojalá que encuentre un buen trabajo.", "Ojalá encuentre un trabajo bueno."]),
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
        [
          "Recuerda la regla: ojalá, espero que y es importante (mejor, necesario) que llevan subjuntivo, porque expresan un deseo o una valoración sobre algo que todavía no ha pasado. La diferencia: ojalá no necesita sujeto ni que; espero que y es importante que sí llevan que. Si no hay otra persona, infinitivo: Espero verte. Es importante descansar.",
          "«¡Hola, Clara! Ojalá te vaya genial en Berlín. Espero que encuentres un piso pronto. Es importante que abras una cuenta en el banco la primera semana. ¡Y ojalá nos veamos en Navidad!»",
        ],
        [
          ["Espero verte pronto. / Espero que me visites.", "I hope to see you soon. / I hope you visit me. (mismo sujeto: infinitivo; otro sujeto: que + subjuntivo)"],
          ["Es importante descansar. / Es importante que descanses.", "It's important to rest. / It's important that you rest."],
        ],
        [
          fb("Completa.", "Espero que ___ un piso pronto. (encontrar, tú)", "encuentres", "Espero que + otra persona → subjuntivo, con el cambio o → ue de encuentro: encuentres."),
          fb("Completa.", "Espero ___ a Clara en Navidad. (ver, yo)", "ver", "Yo espero y yo veré a Clara: el mismo sujeto, así que infinitivo, sin que. «Espero que vea» sonaría a otra persona."),
        ]
      ),
    ],
    [
      fb("Completa.", "Ojalá te ___ genial en Berlín. (ir)", "vaya", "Ojalá + subjuntivo de ir, que es irregular: vaya."),
      fb("Completa.", "Es importante que ___ una cuenta en el banco. (abrir, tú)", "abras", "Es importante que + otra persona → subjuntivo: -ir → -as, abras."),
      fb("Completa.", "¡Y ojalá nos ___ en Navidad! (ver)", "veamos", "Ojalá + subjuntivo de ver para nosotros (nos): veamos, que sale de veo."),
      fb("Completa.", "Es mejor que ___ la bici en vez del metro. (usar, tú)", "uses", "Es mejor que es una valoración: subjuntivo, -ar → -es, uses."),
      fb("Completa.", "Espero que tus compañeros de piso ___ simpáticos. (ser)", "sean", "Espero que + subjuntivo de ser, irregular: sean."),
      mc(
        "«Ojalá ___ alemán rápido.» (aprender, tú)",
        ["aprendas", "aprendes", "aprender", "aprenderás"],
        0,
        "«Ojalá» siempre va con subjuntivo: aprendas. «Aprendes» y «aprenderás» son indicativo, y «aprender» es infinitivo."
      ),
      toEs("I hope you make friends quickly. (tú)", "Espero que hagas amigos rápido.", "Espero que + subjuntivo, desde hago: hagas.", ["Ojalá hagas amigos rápido.", "Espero que hagas amigos rápidamente."]),
      toEs(
        "Espero que encuentres trabajo pronto.",
        "Ojalá encuentres trabajo pronto.",
        "Ojalá sustituye a espero que sin cambiar el verbo: los dos piden subjuntivo (encuentres).",
        ["Ojalá que encuentres trabajo pronto."],
        "Cambia «Espero que» por «Ojalá»."
      ),
      toEs(
        "Es importante que tú descansar antes del viaje.",
        "Es importante que descanses antes del viaje.",
        "Con que y otra persona, el verbo va conjugado en subjuntivo (descanses), nunca en infinitivo. Sin persona sería «Es importante descansar».",
        ["Es importante que tú descanses antes del viaje."],
        "Corrige la frase."
      ),
    ]
  ),
  L(
    "el-abuelo-y-el-telefono",
    "b1d-rep-imperativo-afirmativo-negativo-tu",
    "Pares mínimos: habla / no hables (repaso)",
    "Repaso espaciado: el negativo de tú cambia de forma.",
    "5 min",
    [
      sec(
        "Dos formas",
        [
          "Recuerda la regla: el mandato afirmativo de tú es igual a la forma de él en presente (habla, come, escribe), pero el negativo usa el presente de subjuntivo (no hables, no comas, no escribas).",
          "¿Por qué cambia? El negativo español se construye siempre con el subjuntivo, igual que el mandato de usted; por eso «no habla» o «no comes» no funcionan como orden: son descripciones.",
          "Los pronombres cambian de sitio: van pegados al afirmativo (dímelo) y delante del negativo (no me lo digas).",
        ],
        [
          ["Come más fruta y no comas tanto azúcar.", "Eat more fruit and don't eat so much sugar."],
          ["Llámalo hoy, pero no lo llames antes de las diez.", "Call him today, but don't call him before ten."],
        ],
        [
          fb("Cambia al negativo.", "Escribe a tu abuela. → No le ___ ahora.", "escribas", "El mandato negativo de tú usa el subjuntivo, con el pronombre delante: no le escribas, no «no le escribes»."),
        ]
      ),
    ],
    [
      fb("Par A.", "(abrir) ___ la ventana.", "Abre", "Afirmativo de tú = forma de él del presente: abre. «Abras» solo va con no."),
      fb("Par B.", "(no abrir) No ___ la ventana.", "abras", "Negativo de tú = subjuntivo: no abras. «No abre» es una descripción, no una orden."),
      fb("Par A.", "(esperar) ___ un momento.", "Espera", "Afirmativo: espera, como «él espera». Sin no, nunca subjuntivo («esperes»)."),
      fb("Par B.", "(no esperar) No me ___.", "esperes", "Negativo: no + pronombre + subjuntivo: no me esperes; la -a de esperar pasa a -e."),
      fb("Par A.", "(comprar) ___ pan, por favor.", "Compra", "Afirmativo de tú: compra, igual que la forma de él."),
      fb("Par B.", "(no comprar) No ___ más dulces.", "compres", "Negativo con subjuntivo: compres, no «compras» (indicativo)."),
      mc(
        "«___ la tele y no ___ el móvil en la mesa.» (apagar, usar)",
        ["Apaga, uses", "Apague, usas", "Apagas, uses", "Apaga, usa"],
        0,
        "Primero una orden afirmativa (apaga: forma de él del presente) y luego una negativa (no uses: subjuntivo). «Apague» es de usted, «Apagas» es indicativo y «no usa» usa la forma afirmativa en una negación."
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
        [
          "Recuerda la regla: el mandato afirmativo de tú es igual que la forma él del presente (lava, pela, corta), salvo unos cuantos irregulares (pon, haz, sal, ven, ten, di, ve, sé). El negativo usa el subjuntivo (no pongas). Los pronombres van pegados detrás del afirmativo, con tilde si hace falta para mantener el acento (córtalos), y delante del negativo (no lo cortes).",
          "«Lava los tomates y córtalos. Pela el pepino. Pon todo en la batidora con aceite y sal. No le pongas mucho ajo. Bátelo bien y mételo en la nevera. Sírvelo muy frío.»",
        ],
        [
          ["Corta la cebolla y fríela.", "Cut the onion and fry it. (pronombre pegado, con tilde)"],
          ["No la frías demasiado.", "Don't fry it too much. (negativo: pronombre delante + subjuntivo)"],
        ],
        [
          fb("Completa.", "___ los tomates. (lavar)", "Lava", "Mandato afirmativo de tú = forma él del presente: lava."),
          fb("Completa.", "No ___ el aceite todavía. (calentar)", "calientes", "El negativo de tú usa el subjuntivo: no calientes, con el mismo cambio e → ie que caliento."),
        ]
      ),
    ],
    [
      fb("Completa.", "Lava los tomates y ___. (cortar + los)", "córtalos", "En el afirmativo el pronombre los va pegado detrás; la tilde mantiene el acento en cor-: córtalos."),
      fb("Completa.", "___ todo en la batidora. (poner)", "Pon", "Poner tiene un mandato irregular de tú: pon (no «pone»)."),
      fb("Completa.", "No le ___ mucho ajo. (poner)", "pongas", "El negativo de tú es el subjuntivo, que sale de pongo: no le pongas."),
      fb("Completa.", "___ bien. (batir + lo)", "Bátelo", "Bate (forma él) + lo pegado; la tilde mantiene el acento en ba-: bátelo."),
      fb("Completa.", "___ muy frío. (servir + lo)", "Sírvelo", "Servir cambia e → i (sirve) y el pronombre se pega con tilde: sírvelo."),
      mc(
        "(usted) «___ los tomates y córtelos.»",
        ["Lave", "Lava", "Lavas", "Lavad"],
        0,
        "Con usted, el mandato usa el subjuntivo: lave (igual que «córtelos»). «Lava» es de tú, «lavas» es indicativo y «lavad» es de vosotros."
      ),
      toEs("Don't add water; put it in the fridge. (tú)", "No le añadas agua; mételo en la nevera.", "Negativo con subjuntivo (no le añadas) y afirmativo con pronombre pegado (mételo).", ["No le pongas agua; mételo en la nevera.", "No añadas agua; mételo en la nevera."]),
      toEs(
        "Pela el pepino y córtalo.",
        "No peles el pepino ni lo cortes.",
        "En negativo, los dos verbos pasan al subjuntivo (peles, cortes) y el pronombre lo se coloca delante del verbo.",
        ["No peles el pepino y no lo cortes."],
        "Cambia la frase a negativo."
      ),
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
        [
          "Recuerda la regla: el condicional suaviza las peticiones porque las presenta como hipotéticas («si fuera posible...»), y eso deja espacio para decir que no. ¿Puedes…? → ¿Podrías…? Quiero… → Querría / Me gustaría… ¿Te importa…? → ¿Te importaría…?",
          "Se forma con el infinitivo + -ía, -ías, -ía... (importaría, gustaría), pero algunos verbos usan una raíz irregular: poder → podr-, tener → tendr-, decir → dir-, querer → querr-, hacer → har-.",
        ],
        [
          ["¿Podría decirme la hora?", "Could you tell me the time? (podr- + -ía)"],
          ["Me gustaría reservar una mesa.", "I'd like to book a table. (más suave que quiero)"],
          ["¿Nos haría un descuento?", "Would you give us a discount? (hacer → har-)"],
        ],
        [
          fb("Transforma en una petición más cortés.", "¿Puedes ayudarme? → ¿___ ayudarme?", "Podrías", "El condicional hace la pregunta más cortés: ¿Podrías…? (raíz podr-)."),
        ]
      ),
    ],
    [
      { ...fb("Transforma en una petición más cortés.", "Quiero un café. → ___ un café.", "Querría", "El condicional suaviza el deseo: querría (raíz querr-)."), altAnswers: ["Quisiera"] },
      fb("Transforma en una petición más cortés.", "Quiero hablar con el director. → Me ___ hablar con el director.", "gustaría", "«Me gustaría» + infinitivo es la forma cortés de pedir algo."),
      fb("Transforma en una petición más cortés.", "¿Te importa cerrar la puerta? → ¿Te ___ cerrar la puerta?", "importaría", "El condicional (importaría) hace la pregunta más suave que el presente (importa)."),
      fb("Transforma en una petición más cortés.", "¿Tiene usted un momento? → ¿___ usted un momento?", "Tendría", "El condicional de tener (tendría, raíz tendr-) hace la pregunta más cortés."),
      fb("Transforma en una petición más cortés.", "¿Me dice su nombre? → ¿Me ___ su nombre?", "diría", "El condicional de decir (diría, raíz dir-) suaviza la pregunta."),
      mc(
        "En un hotel: «___ cambiar de habitación, por favor.»",
        ["Me gustaría", "Me gusta", "Me gustará", "Me gustó"],
        0,
        "Una petición cortés se hace con el condicional: me gustaría. «Me gusta» expresa un gusto, no una petición; «me gustará» es futuro y «me gustó» es pasado."
      ),
      toEs("Would you mind speaking more slowly?", "¿Le importaría hablar más despacio?", "«Would you mind…?» = ¿Le importaría + infinitivo?", ["¿Te importaría hablar más despacio?"]),
      toEs(
        "¿Me deciría su número de teléfono?",
        "¿Me diría su número de teléfono?",
        "Decir tiene raíz irregular en el condicional: dir- + -ía = diría, no «deciría».",
        [],
        "Corrige la frase."
      ),
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
        [
          "Recuerda la regla: para hablar de experiencias de tu vida «hasta ahora», sin decir cuándo, se usa el pretérito perfecto: haber (he, has, ha, hemos, habéis, han) + participio. Por qué: el periodo (tu vida) todavía no ha terminado, así que la experiencia sigue conectada con el presente. Marcadores típicos: alguna vez, nunca, ya, todavía no, varias veces.",
          "Si dices cuándo pasó (en 2019, el verano pasado), cambia al indefinido. Y memoriza los participios irregulares: hecho, dicho, visto, escrito, roto, vuelto, abierto, puesto. En gran parte de Latinoamérica también se usa el indefinido para experiencias (¿Alguna vez fuiste…?).",
        ],
        [
          ["He estado en Italia tres veces.", "I've been to Italy three times. (varias veces, sin fecha)"],
          ["Nunca he montado a caballo.", "I've never ridden a horse. (nunca delante, sin «no»)"],
          ["¿Ya has visto la nueva serie?", "Have you already seen the new series? (ver → visto)"],
          ["Estuve en Italia en 2019.", "I was in Italy in 2019. (fecha concreta → indefinido)"],
        ],
        [
          fb("Tu lista.", "Nunca ___ en un globo. (subir, yo)", "he subido", "Nunca + experiencia sin fecha → pretérito perfecto: he subido."),
          mc(
            "«___ a Japón el año pasado.» (ir, yo)",
            ["Fui", "He ido", "Iba", "Había ido"],
            0,
            "«El año pasado» es un momento terminado y concreto → indefinido: fui. «He ido» sirve para experiencias sin fecha, «iba» describe hábitos y «había ido» es anterior a otro pasado."
          ),
        ]
      ),
    ],
    [
      fb("Tu lista.", "___ un maratón dos veces. (correr, yo)", "He corrido", "«Dos veces» sin fecha = experiencia → pretérito perfecto: he corrido."),
      fb("Tu lista.", "¿Alguna vez ___ una película en un cine al aire libre? (ver, tú)", "has visto", "Alguna vez → perfecto; ver tiene participio irregular: visto (no «veído»)."),
      fb("Tu lista.", "Mi abuela nunca ___ en barco. (viajar)", "ha viajado", "Nunca + experiencia → perfecto: ha viajado."),
      fb("Tu lista.", "Mi amiga ya ___ tres libros. (escribir)", "ha escrito", "Ya + perfecto; escribir tiene participio irregular: escrito."),
      fb("Tu lista.", "Nosotros nunca ___ nada tan raro. (hacer)", "hemos hecho", "Nunca + perfecto; hacer → hecho (irregular)."),
      toEs("Have you (tú) ever broken a bone?", "¿Alguna vez te has roto un hueso?", "«Ever» → alguna vez + perfecto; con partes del cuerpo se usa «te has roto», y romper → roto.", ["¿Te has roto un hueso alguna vez?", "¿Alguna vez te rompiste un hueso?", "¿Te rompiste un hueso alguna vez?"]),
      toEs("I've never seen the northern lights.", "Nunca he visto la aurora boreal.", "Nunca + pretérito perfecto; ver → visto.", ["No he visto nunca la aurora boreal.", "Nunca he visto una aurora boreal.", "Nunca vi la aurora boreal.", "No vi nunca la aurora boreal."]),
    ]
  ),
  L(
    "primer-dia-oficina",
    "b1d-rep-pluscuamperfecto-excusas",
    "Preguntas y respuestas: ¿por qué no…? Porque ya había…",
    "Repaso espaciado: explicaciones con el pluscuamperfecto.",
    "7 min",
    [
      sec(
        "Recuerda la regla: la excusa pasó antes",
        [
          "Recuerda la regla: —¿Por qué no fuiste a la fiesta? —Porque ya había quedado con otros amigos. La pregunta habla de un momento pasado (no fuiste); la excusa es algo que ocurrió antes de ese momento, así que va en pluscuamperfecto: había / habías / había / habíamos / habíais / habían + participio.",
          "Dos detalles de forma: los pronombres y el «no» van delante de «había» (no lo había leído, se me había olvidado), nunca entre «había» y el participio; y los participios irregulares son los de siempre: hecho, dicho, visto, puesto, vuelto.",
        ],
        [
          ["No cené porque ya había comido mucho.", "I didn't have dinner because I had already eaten a lot. (comer pasó antes de no cenar)"],
          ["No te lo conté porque se me había olvidado.", "I didn't tell you because I had forgotten. (pronombres delante de había)"],
          ["No los reconocí: nunca los había visto.", "I didn't recognize them: I had never seen them. (participio irregular: visto)"],
        ],
        [
          fb("Responde.", "—¿Por qué no viniste al cine? —Porque ya ___ la película. (ver)", "había visto", "Ver la película pasó antes de no ir al cine → pluscuamperfecto con el participio irregular: había visto."),
          fb("Responde.", "—¿Por qué no saliste? —Porque todavía no ___ los deberes. (hacer)", "había hecho", "Lo que no estaba hecho antes de ese momento pasado → pluscuamperfecto; hacer → hecho, y el «no» va delante de «había»."),
        ]
      ),
    ],
    [
      fb("Responde.", "—¿Por qué no compraste pan? —Porque mi madre ya lo ___. (comprar)", "había comprado", "Tu madre lo compró antes de que tú fueras a comprarlo → pluscuamperfecto, con «lo» delante: lo había comprado."),
      fb("Responde.", "—¿Por qué no llamaste a Eva? —Porque ya me ___ ella. (llamar)", "había llamado", "Eva llamó antes → pluscuamperfecto: me había llamado."),
      fb("Responde.", "—¿Por qué llegasteis tarde? —Porque ___ el autobús. (perder, nosotros)", "habíamos perdido", "Perder el autobús pasó antes de llegar tarde → pluscuamperfecto de nosotros: habíamos perdido."),
      fb("Responde.", "—¿Por qué no te ayudaron? —Porque ya ___ a casa. (irse)", "se habían ido", "Verbo pronominal en pluscuamperfecto: el «se» va delante de «habían»."),
      fb("Responde.", "—¿Por qué no pagaste? —Porque Juan ya ___ la cuenta. (pagar)", "había pagado", "Juan pagó antes de que tú pudieras hacerlo → pluscuamperfecto: había pagado."),
      mc(
        "—¿Por qué no fuisteis al museo? —Porque ya ___ cuando llegamos.",
        ["había cerrado", "ha cerrado", "cerraba mañana", "cerrará"],
        0,
        "El museo cerró antes de que llegáramos, otro momento pasado: pluscuamperfecto, había cerrado. «Ha cerrado» se liga al presente, «cerraba mañana» mezcla tiempos y «cerrará» es futuro."
      ),
      toEs("I didn't go because I had already made plans.", "No fui porque ya había hecho planes.", "Los planes se hicieron antes de no ir: pluscuamperfecto, había hecho (participio irregular).", ["No fui porque ya había quedado.", "No fui porque ya había hecho otros planes."]),
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
        [
          "Recuerda la regla: en las normas con se, lo prohibido o permitido es el sujeto de la frase, así que el verbo concuerda con ello. Un sustantivo plural → verbo en plural (se prohíben los balones). Un infinitivo o una frase con que cuenta como singular → verbo en singular (se ruega ducharse).",
          "Truco: busca qué se prohíbe o qué se vende. Si es «los balones», «pisos» o «perros», el verbo va en plural, aunque esté delante.",
        ],
        [
          ["Se prohíben los balones.", "Balls are forbidden. (los balones: plural)"],
          ["Se ruega ducharse antes de entrar.", "Please shower before entering. (infinitivo: singular)"],
          ["No se admiten perros.", "Dogs are not allowed. (perros: plural)"],
        ],
        [
          fb("Estación 1.", "No se ___ patinetes en el recinto. (permitir)", "permiten", "Lo que no se permite son los patinetes (plural): se permiten."),
        ]
      ),
    ],
    [
      fb("Estación 1.", "No se ___ comer en el agua. (permitir)", "permite", "Lo que no se permite es «comer», un infinitivo, que cuenta como singular: se permite."),
      fb("Estación 1.", "Se ___ los flotadores grandes. (prohibir)", "prohíben", "Los flotadores es plural → se prohíben (con tilde en la í)."),
      fb("Estación 2.", "Se ___ guardar silencio en el vestuario. (rogar)", "ruega", "Infinitivo (guardar) → singular; rogar cambia o → ue: ruega."),
      fb("Estación 2.", "No se ___ gafas de cristal. (aceptar)", "aceptan", "Las gafas es plural → se aceptan."),
      fb("Estación 3.", "Se ___ usar gorro. (recomendar)", "recomienda", "Infinitivo (usar) → singular; e → ie: recomienda."),
      fb("Estación 3.", "Ayer se ___ la piscina por la tormenta. (cerrar)", "cerró", "La piscina es singular, y ayer pide pretérito: se cerró."),
      toEs("Dogs are not allowed in the park.", "No se admiten perros en el parque.", "Se pasivo concordando con «perros»: no se admiten.", ["No se permiten perros en el parque."]),
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
        [
          "Recuerda la regla: «se» (el antiguo le/les) nunca cambia, sea una persona o muchas. Toda la información de género y número está en el segundo pronombre, que concuerda con la cosa: el libro → se lo, la carta → se la, los libros → se los, las cartas → se las.",
          "Por eso, antes de elegir, pregúntate solo «¿qué di?»: la persona ya no cuenta.",
        ],
        [
          ["¿Las entradas? Se las di a Pablo.", "The tickets? I gave them to Pablo. (las entradas → las)"],
          ["¿El regalo? Se lo dimos a nuestros padres.", "The present? We gave it to our parents. (lo singular, aunque los padres sean dos)"],
        ],
        [
          fb("Rápido.", "¿El paquete? ___ entregué al portero.", "Se lo", "El paquete → lo, y le → se delante de lo: se lo entregué."),
        ]
      ),
    ],
    [
      fb("Rápido.", "¿La maleta? ___ llevé al taxista.", "Se la", "La maleta → la, y le → se: se la llevé."),
      fb("Rápido.", "¿Los documentos? ___ envié a la abogada.", "Se los", "Los documentos → los, y le → se: se los envié."),
      fb("Rápido.", "¿Las galletas? ___ di a los niños.", "Se las", "Las galletas → las, y les → se: se las di."),
      fb("Rápido.", "¿El secreto? No ___ conté a nadie.", "se lo", "El secreto → lo, y le → se, delante del verbo: no se lo conté."),
      fb("Rápido.", "¿La noticia? ___ dimos a mis padres anoche.", "Se la", "La noticia → la, y les → se: se la dimos."),
      fb("Rápido.", "¿Los resultados? Todavía no ___ he dicho a ellos.", "se los", "Los resultados → los, y les → se, delante de haber: no se los he dicho."),
      fb("Rápido.", "¿Las fotos? Voy a ___ a tu madre. (mandar)", "mandárselas", "Las fotos → las; con infinitivo, se + las van pegados al final y la palabra lleva tilde: mandárselas."),
      mc(
        "¿El dinero? «___ presté a mi primo.»",
        ["Se lo", "Se la", "Le lo", "Lo le"],
        0,
        "El dinero → lo, y le (a mi primo) → se delante de lo: se lo presté. «Se la» no concuerda con «el dinero», y «Le lo» o «Lo le» son formas que no existen."
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
        [
          "Recuerda la regla: cuando hablas de tus cosas, es muy natural empezar por el objeto (mi reloj…, mis libros…). En español, si el objeto directo va delante del verbo, se repite con un pronombre: Mi reloj me lo regaló mi abuelo. Por eso aparecen dos pronombres: la persona (me, se) y la cosa (lo, la, los, las).",
          "Piensa en tus objetos especiales: ¿quién te los regaló? ¿A quién se los prestas? Recuerda que le/les → se delante de lo/la/los/las.",
        ],
        [
          ["Mi reloj me lo regaló mi abuelo.", "My grandfather gave me my watch. (mi reloj delante → se repite con lo)"],
          ["Mis libros no se los presto a nadie.", "I don't lend my books to anyone. (a nadie: le → se; los = mis libros)"],
        ],
        [
          fb("Completa con dos pronombres.", "Mi bicicleta ___ compraron mis padres.", "me la", "Al poner el objeto al principio, se repite con un pronombre: me (a mí) + la (la bicicleta)."),
        ]
      ),
    ],
    [
      fb("Completa con dos pronombres.", "Mis discos ___ dejó mi tío.", "me los", "El objeto va al principio, así que se repite: me (a mí) + los (mis discos)."),
      fb("Completa con dos pronombres.", "Mi coche no ___ presto a nadie.", "se lo", "A nadie → le, que delante de lo (mi coche) se convierte en se: no se lo presto."),
      fb("Completa con dos pronombres.", "Mis cuadernos ___ enseño solo a mi hermana.", "se los", "Le (a mi hermana) → se delante de los (mis cuadernos): se los enseño."),
      fb("Completa con dos pronombres.", "Esta pulsera ___ hizo mi hija.", "me la", "Objeto al principio → me + la (esta pulsera): me la hizo."),
      fb("Completa con dos pronombres.", "Mis plantas ___ cuida mi vecino cuando viajo.", "me las", "Objeto al principio → me + las (mis plantas): me las cuida."),
      toEs("My guitar? My parents gave it to me when I was ten.", "¿Mi guitarra? Me la regalaron mis padres cuando tenía diez años.", "Me (a mí) + la (la guitarra): me la regalaron.", ["¿Mi guitarra? Mis padres me la regalaron cuando tenía diez años."]),
      toEs("I never lend it to anyone (my camera).", "Nunca se la presto a nadie.", "Le (a nadie) → se delante de la (la cámara): nunca se la presto.", ["No se la presto nunca a nadie."]),
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
        "Recuerda: cuatro herramientas para un correo formal",
        [
          "Recuerda la regla: en un correo formal todo va en usted (le, su, envíe). Para pedir con cortesía se usa el condicional (¿podría…?, le agradecería…), porque presenta la petición como una posibilidad y no como una orden. Para pedir algo a otra persona, verbo de petición + que + subjuntivo (le pido que envíe). Para lo que ya ha pasado y sigue importando, pretérito perfecto (se ha roto). Y para no repetir, pronombres: le + lo → se lo.",
          "Lee el correo de Marta: «Estimado señor Gil: le escribo porque la calefacción se ha roto otra vez. Ya se lo he dicho dos veces. Le pido que envíe a un técnico esta semana. ¿Podría llamarme para confirmar la hora? Si no puede, avíseme por correo. Un saludo, Marta.»",
        ],
        [
          ["Necesito que venga un técnico mañana.", "I need a technician to come tomorrow. (necesitar que + subjuntivo)"],
          ["Le agradecería una respuesta rápida.", "I'd be grateful for a quick reply. (condicional de cortesía)"],
          ["La ducha ha vuelto a gotear.", "The shower has started dripping again. (perfecto: hecho reciente)"],
          ["¿Las facturas? Se las mando mañana.", "The bills? I'll send them to you tomorrow. (le + las → se las)"],
        ],
        [
          fb("Completa el correo.", "El horno ___ dejado de funcionar. (haber)", "ha", "Hecho reciente que sigue afectando: pretérito perfecto, haber + participio → «ha dejado»."),
          toEs("Llámame para confirmar la hora.", "¿Podría llamarme para confirmar la hora?", "Al casero no se le dan órdenes: el condicional «podría» + infinitivo convierte la orden en una petición cortés, y el pronombre se pega al infinitivo.", ["¿Me podría llamar para confirmar la hora?"], "Transforma la orden en una petición cortés con usted."),
        ]
      ),
    ],
    [
      fb("Completa el correo.", "Ya ___ he comentado al portero. (a él; eso)", "se lo", "Le + lo → «se lo»: «le lo» no existe en español. Los dos pronombres van delante de «he»."),
      fb("Completa el correo.", "Le ruego que ___ el problema cuanto antes. (solucionar)", "solucione", "«Rogar que» es un verbo de petición: pide subjuntivo. Usted → «solucione»."),
      fb("Completa el correo.", "Si no puede venir, ___ por teléfono. (avisarnos, usted)", "avísenos", "Mandato afirmativo de usted (avise) con el pronombre pegado: «avísenos», con tilde."),
      fb("Otro correo.", "Es urgente que ___ el grifo del baño. (arreglar, ustedes)", "arreglen", "«Es urgente que» valora una necesidad: subjuntivo. Ustedes → «arreglen»."),
      mc(
        "«¿Le importaría ___ antes de las cinco?»",
        ["venir", "venga", "vendría", "viene"],
        0,
        "Si la misma persona (usted) es la que viene, «importar» va con infinitivo: ¿Le importaría venir? «Venga» necesitaría «que» y otro sujeto, «vendría» es condicional y «viene» es indicativo."
      ),
      toEs("Te mando las fotos de la mancha.", "Le mando las fotos de la mancha.", "Al pasar de tú a usted, el pronombre «te» pasa a «le».", ["Se las mando.", "Le envío las fotos de la mancha."], "Cambia a usted."),
      toEs("Le mando las fotos de la mancha.", "Se las mando.", "Le + las → «se las»: «le» se convierte en «se» delante de lo, la, los, las.", [], "Sustituye «las fotos de la mancha» por un pronombre."),
      toEs("Le escribo porque la persiana se rompió esta mañana.", "Le escribo porque la persiana se ha roto esta mañana.", "Con «esta mañana» (un periodo que no ha terminado) en España se prefiere el pretérito perfecto: se ha roto. Romper → «roto», participio irregular.", [], "Cambia al pretérito perfecto."),
      toEs("Le pido que envía a un técnico esta semana.", "Le pido que envíe a un técnico esta semana.", "Después de «pedir que» va el subjuntivo: «envíe». «Envía» es indicativo.", [], "Corrige la frase."),
      toEs("Ya le lo he dicho dos veces.", "Ya se lo he dicho dos veces.", "«Le lo» es imposible: delante de lo, la, los, las, «le» se convierte en «se».", [], "Corrige la frase."),
      toEs("La gotera es cada vez más grande; es urgente que la arregla un técnico.", "La gotera es cada vez más grande; es urgente que la arregle un técnico.", "«Es urgente que» expresa necesidad y pide subjuntivo: «arregle». «Arregla» es indicativo.", [], "Corrige la frase."),
      toEs("I've already sent you the photos. (usted)", "Ya le he enviado las fotos.", "«You» aquí es usted: le. Una acción reciente va en pretérito perfecto: ya le he enviado.", ["Ya se las he enviado.", "Ya le he mandado las fotos."]),
    ]
  ),
  L(
    "competencia-por-el-ascenso",
    "b1d-rep-formacion-conjugacion-completa",
    "Práctica de patrones: una tabla completa",
    "Repaso espaciado: las seis personas del presente de subjuntivo, con verbos regulares y con raíz de yo irregular (salga, conozca, quepa, valga).",
    "6 min",
    [
      sec(
        "Tres modelos",
        [
          "Recuerda la regla: el presente de subjuntivo se forma desde la forma yo del presente. Quitas la -o y pones la vocal «contraria»: los verbos en -ar toman -e (hablo → hable) y los verbos en -er/-ir toman -a (como → coma, vivo → viva).",
          "¿Por qué desde yo? Porque la forma yo guarda la irregularidad, y el subjuntivo la copia en las seis personas: salgo → salga, salgas, salgamos…; conozco → conozca; quepo → quepa. Si partes del infinitivo («salir» → «sala») el resultado es incorrecto.",
          "Modelos: hablar → hable, hables, hable, hablemos, habléis, hablen. comer → coma, comas, coma, comamos, comáis, coman. salir → salga, salgas, salga, salgamos, salgáis, salgan.",
        ],
        [
          ["Espero que habléis con ella.", "I hope you all talk to her."],
          ["Quiero que pongas la mesa. (pongo → ponga)", "I want you to set the table."],
        ],
        [
          fb("Completa la tabla.", "salir → que vosotros ___", "salgáis", "El subjuntivo sale de la forma yo: salgo → salg- + áis → salgáis."),
        ]
      ),
    ],
    [
      fb("Completa la tabla.", "cantar → que ellos ___", "canten", "Canto → cant- + la vocal contraria de -ar (e): canten. «Cantan» es indicativo."),
      fb("Completa la tabla.", "leer → que nosotros ___", "leamos", "Leo → le- + la vocal contraria de -er (a): leamos, no «leemos» (indicativo)."),
      fb("Completa la tabla.", "escribir → que tú ___", "escribas", "Escribo → escrib- + a: escribas. Los verbos en -ir también toman -a, no «escribes»."),
      fb("Completa la tabla.", "conocer → que vosotros ___", "conozcáis", "Desde la forma yo (conozco): conozc- + áis → conozcáis."),
      fb("Completa la tabla.", "caber → que yo ___", "quepa", "Caber es irregular en yo (quepo), y esa raíz pasa al subjuntivo: quepa."),
      fb("Completa la tabla.", "valer → que eso ___ la pena", "valga", "Desde la forma yo (valgo): valg- + a → valga."),
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
      toEs("I hope it's worth it.", "Espero que valga la pena.", "Espero que + subjuntivo, desde valgo: valga la pena.", ["Ojalá valga la pena."]),
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
        [
          "Recuerda la regla: el subjuntivo cambia la vocal. Los verbos -ar toman e (habla → hable) y los -er/-ir toman a (come → coma, vive → viva). Los irregulares salen de la forma yo del presente: hago → haga, tengo → tenga.",
          "Por qué importa: habla y come sirven a la vez de indicativo (él habla) y de imperativo de tú (¡habla!); solo el cambio de vocal marca el subjuntivo, que aparece tras «quiero que», «es importante que» u «ojalá».",
        ],
        [
          ["Mi hermano habla mucho. / Quiero que hable menos.", "My brother talks a lot. / I want him to talk less. (-ar: a → e)"],
          ["Escribe ahora. / Es mejor que escriba ahora.", "Write now. / It's better for her to write now. (-ir: e → a)"],
          ["Tengo tiempo. / Ojalá tenga tiempo.", "I have time. / I hope I have time. (tengo → tenga)"],
        ],
        [
          mc(
            "¿Cuál es subjuntivo?",
            ["beba", "bebe", "bebió", "bebía"],
            0,
            "Los verbos -er forman el subjuntivo con a: beba. «Bebe» es presente de indicativo, «bebió» es pretérito y «bebía» es imperfecto."
          ),
          mc(
            "¿Cuál es subjuntivo?",
            ["vendan", "venden", "vendieron", "venderán"],
            0,
            "Vender es -er: el subjuntivo toma a (vendan). «Venden» engaña porque la -en parece subjuntivo de un verbo -ar, pero es presente de indicativo; «vendieron» es pretérito y «venderán» es futuro."
          ),
        ]
      ),
    ],
    [
      mc("¿Cuál es subjuntivo?", ["mire", "mira", "miró", "miraba"], 0, "Los verbos -ar forman el subjuntivo con e: mire. «Mira» es presente de indicativo, «miró» es pretérito y «miraba» es imperfecto."),
      mc("¿Cuál es subjuntivo?", ["abran", "abren", "abrieron", "abrían"], 0, "Los verbos -ir forman el subjuntivo con a: abran. «Abren» es presente de indicativo, «abrieron» es pretérito y «abrían» es imperfecto."),
      mc("¿Cuál es subjuntivo?", ["duerman", "duermen", "durmieron", "dormían"], 0, "Dormir mantiene el cambio o→ue y toma la vocal a del subjuntivo: duerman. «Duermen» es indicativo, «durmieron» es pretérito y «dormían» es imperfecto."),
      mc("¿Cuál es subjuntivo?", ["hagas", "haces", "hiciste", "harás"], 0, "El subjuntivo sale de la forma yo del presente: hago → hag- → hagas. «Haces» es presente de indicativo, «hiciste» es pretérito y «harás» es futuro."),
      mc("¿Cuál es subjuntivo?", ["estemos", "estamos", "estuvimos", "estaremos"], 0, "Estar forma el subjuntivo esté, estés, esté, estemos…: estemos. «Estamos» es indicativo, «estuvimos» es pretérito y «estaremos» es futuro."),
      fb("Completa.", "Mi madre quiere que ___ la cama. (hacer, yo)", "haga", "«Quiere que» con otro sujeto pide subjuntivo; hacer sale de la forma yo: hago → haga (no «hace», que es indicativo)."),
      fb("Completa.", "Mi madre ___ la cama todos los días. (hacer)", "hace", "Aquí no hay «que» de deseo: es un hecho habitual, así que indicativo (hace); «haga» solo aparecería tras «quiere que»."),
      toEs("Es importante que todos comen juntos.", "Es importante que todos coman juntos.", "«Es importante que» pide subjuntivo: comer es -er, así que toma a (coman). «Comen» es indicativo.", [], "Corrige la frase."),
      toEs("Mis hijos leen mucho.", "Quiero que mis hijos lean mucho.", "Tras «quiero que» con otro sujeto, el verbo pasa a subjuntivo: leer es -er → lean.", [], "Transforma la frase: empieza con «Quiero que…»."),
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
        [
          "Recuerda la regla: una orden y un deseo sobre otra persona dicen lo mismo, pero el deseo con «quiero que, te pido que, necesito que, prefiero que» siempre lleva subjuntivo. ¿Por qué? Porque no describes un hecho: hablas de algo que quieres que pase.",
          "El mandato directo ya usa el subjuntivo en casi todas las formas (no llegues, venga usted); solo el afirmativo de tú y vosotros es distinto (ven, venid). Por eso, al transformar, el negativo no cambia (no grites → que no grites) y el afirmativo sí (ven → que vengas). Los pronombres pasan de detrás a delante: dímelo → que me lo digas.",
        ],
        [
          ["Llama a tu abuela. → Quiero que llames a tu abuela.", "Call your grandmother. → I want you to call your grandmother. (afirmativo: cambia)"],
          ["No llegues tarde. → Te pido que no llegues tarde.", "Don't be late. → I'm asking you not to be late. (negativo: igual)"],
          ["Tráemelo. → Necesito que me lo traigas.", "Bring it to me. → I need you to bring it to me. (pronombres delante)"],
        ],
        [
          fb("Transforma.", "Haz los deberes. → Quiero que ___ los deberes.", "hagas", "Haz es un mandato afirmativo irregular; al convertir la orden en un deseo con «quiero que», se usa el subjuntivo: haz → hagas."),
        ]
      ),
    ],
    [
      fb("Transforma.", "Ten cuidado. → Te pido que ___ cuidado.", "tengas", "Una orden convertida en petición con «te pido que» pasa a subjuntivo: ten → tengas."),
      fb("Transforma.", "Sal temprano. → Prefiero que ___ temprano.", "salgas", "«Prefiero que» pide subjuntivo: sal → salgas (desde salgo)."),
      fb("Transforma.", "Sé puntual. → Te pido que ___ puntual.", "seas", "«Te pido que» pide subjuntivo; el de ser es irregular: sé → seas."),
      fb("Transforma.", "Pon la radio. → Quiero que ___ la radio.", "pongas", "«Quiero que» pide subjuntivo: pon → pongas (desde pongo)."),
      fb("Transforma.", "Venid a comer. → Quiero que ___ a comer.", "vengáis", "«Quiero que» pide subjuntivo: venid → vengáis (desde vengo)."),
      fb("Transforma.", "Siéntese, por favor. → Le ruego que ___.", "se siente", "Con «le ruego que» + subjuntivo, el pronombre va delante del verbo: que se siente."),
      toEs("Tell me the truth. I want you to tell me the truth. (tú)", "Dime la verdad. Quiero que me digas la verdad.", "La orden directa usa el imperativo con el pronombre pegado (dime); con «quiero que», el subjuntivo con el pronombre delante (me digas).", []),
      toEs(
        "Quiero que me esperas en la puerta.",
        "Quiero que me esperes en la puerta.",
        "Quiero que + otra persona pide subjuntivo: esperes (-ar → -e). «Esperas» es indicativo y describe un hecho.",
        [],
        "Corrige la frase."
      ),
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
        [
          "Recuerda la regla: después de una emoción (me alegra que, me da miedo que, me preocupa que) o de una duda (dudo que, no creo que) va subjuntivo, porque no afirmas un hecho: reaccionas ante él o lo pones en duda. Después de creo que, pienso que o estoy seguro de que va indicativo, porque sí afirmas.",
          "Y si la persona que siente y la que actúa es la misma, no hay que: infinitivo (Espero hacer amigos).",
          "«Mañana empiezo en el colegio nuevo. Me da miedo que los compañeros no me hablen. No creo que el profesor sea muy estricto, pero dudo que me acuerde de todos los nombres. Me alegra que mi primo esté en la misma clase.»",
        ],
        [
          ["Me da miedo que los compañeros no me hablen.", "I'm scared the classmates won't talk to me. (emoción → subjuntivo)"],
          ["Creo que el colegio es grande. / No creo que sea grande.", "I think the school is big. / I don't think it's big. (afirmar → indicativo; dudar → subjuntivo)"],
        ],
        [
          fb("Completa.", "Me da miedo que el autobús no ___ a tiempo. (pasar)", "pase", "Me da miedo que expresa una emoción sobre algo que no controlas: subjuntivo, pase (-ar → -e)."),
          fb("Completa.", "Estoy seguro de que mi madre ___ un buen desayuno. (preparar)", "prepara", "Estar seguro de que afirma algo, así que va indicativo: prepara. El subjuntivo solo aparecería con «no estoy seguro de que»."),
        ]
      ),
    ],
    [
      fb("Completa.", "No creo que el profesor ___ muy estricto. (ser)", "sea", "No creo que pone en duda la idea: subjuntivo, sea (irregular)."),
      fb("Completa.", "Dudo que me ___ de todos los nombres. (acordarse, yo)", "acuerde", "Dudo que pide subjuntivo; acordarse cambia o → ue como en me acuerdo: me acuerde."),
      fb("Completa.", "Me alegra que mi primo ___ en la misma clase. (estar)", "esté", "Me alegra que es una emoción: subjuntivo de estar, esté (con tilde)."),
      fb("Completa.", "Creo que el colegio ___ una piscina. (tener)", "tiene", "Creo que (sin no) afirma lo que piensas: indicativo, tiene. «Tenga» sería un error típico por confundirlo con no creo que."),
      fb("Completa.", "Me preocupa que la comida del comedor ___ mala. (ser)", "sea", "La preocupación es una emoción: subjuntivo, sea."),
      mc(
        "«Espero ___ amigos pronto.» (yo hago amigos)",
        ["hacer", "que haga", "que hago", "haciendo"],
        0,
        "Yo espero y yo hago amigos: mismo sujeto → infinitivo, espero hacer amigos. «Que haga» suena a otra persona, «que hago» usa indicativo y «haciendo» es gerundio."
      ),
      toEs("I'm glad my best friend is coming with me.", "Me alegra que mi mejor amigo venga conmigo.", "«Me alegra que» expresa emoción → subjuntivo: venga (de vengo).", ["Me alegro de que mi mejor amigo venga conmigo.", "Me alegra que mi mejor amiga venga conmigo.", "Me alegro de que mi mejor amiga venga conmigo."]),
      toEs(
        "Creo que el examen será fácil.",
        "No creo que el examen sea fácil.",
        "Al negar creo que, la frase pasa a expresar duda y el verbo cambia a subjuntivo presente: sea (el futuro no se usa aquí).",
        [],
        "Cambia la frase a negativa: empieza con «No creo que...»."
      ),
      toEs(
        "Me preocupa que mi hermano no come bien.",
        "Me preocupa que mi hermano no coma bien.",
        "Me preocupa que expresa emoción: subjuntivo, coma (-er → -a), no «come».",
        [],
        "Corrige la frase."
      ),
    ]
  ),
  L(
    "la-vecina-nueva",
    "b1d-rep-ojala-dialogo",
    "Preguntas y respuestas: ¿qué le deseas?",
    "Repaso espaciado: responde con un deseo adecuado a cada situación.",
    "6 min",
    [
      sec(
        "Recuerda la regla: un deseo siempre va en subjuntivo",
        [
          "Recuerda la regla: para desear algo a otra persona tienes tres fórmulas y las tres llevan presente de subjuntivo: ¡Ojalá apruebes!, Espero que te mejores pronto, y la más corta, ¡Que tengas buen viaje! (que + subjuntivo, sin verbo delante).",
          "¿Por qué subjuntivo? Porque un deseo habla de algo que todavía no ha pasado y que no depende de ti: no es un hecho, es lo que quieres que pase. Elige la persona según a quién hablas: que te vaya bien (tú), que le vaya bien (usted), que os vaya / les vaya bien (vosotros / ustedes).",
        ],
        [
          ["¡Que te mejores!", "Get well soon! (que + subjuntivo, tú)"],
          ["¡Que lo pases bien!", "Have a good time!"],
          ["¡Ojalá encuentres piso pronto!", "I hope you find an apartment soon! (ojalá + subjuntivo)"],
          ["Espero que les guste el regalo.", "I hope they like the present. (esperar que + subjuntivo)"],
        ],
        [
          fb("Desea.", "Tu amiga se va de vacaciones: ¡Que lo ___ bien! (pasar)", "pases", "Deseo con «que» → presente de subjuntivo de tú: pases."),
          fb("Desea.", "Tu profesor se va de viaje: ¡Que ___ buen viaje! (tener, usted)", "tenga", "A usted le hablas en tercera persona: que tenga (subjuntivo de tener)."),
        ]
      ),
    ],
    [
      fb("Desea.", "Tu hermano tiene una entrevista: ¡Ojalá te ___! (elegir, ellos)", "elijan", "«Ojalá» → subjuntivo; elegir cambia e → i y la g pasa a j delante de a: elijan."),
      fb("Desea.", "Tu compañero está resfriado: ¡Que te ___! (mejorar)", "mejores", "Deseo con «que» → subjuntivo de tú: te mejores."),
      fb("Desea.", "Unos amigos se casan: ¡Que ___ muy felices! (ser)", "seáis", "Deseo para vosotros → subjuntivo de ser: seáis (para ustedes: sean)."),
      fb("Desea.", "Alguien empieza a comer: ¡Que ___! (aprovechar)", "aproveche", "Fórmula fija para desear buen provecho: ¡que aproveche! (subjuntivo, tercera persona)."),
      fb("Desea.", "Tu amigo se va a dormir: ¡Que ___ bien! (descansar)", "descanses", "Deseo con «que» → subjuntivo de tú: descanses."),
      mc(
        "Tu abuela cumple 90 años: «¡Ojalá ___ muchos más!»",
        ["cumplas", "cumples", "cumplir", "cumplirás"],
        0,
        "«Ojalá» expresa un deseo y siempre va con subjuntivo: cumplas. «Cumples» y «cumplirás» son indicativo, y «cumplir» es infinitivo."
      ),
      toEs("Have a good trip! (to a friend)", "¡Que tengas buen viaje!", "Un deseo a otra persona se expresa con que + subjuntivo: ¡Que tengas buen viaje!", ["¡Que tengas un buen viaje!", "¡Buen viaje!"]),
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
        [
          "Recuerda la regla: usted y ustedes usan siempre el subjuntivo, en afirmativo y en negativo. -ar → e (firme, firmen); -er/-ir → a (suba, suban). Los irregulares salen de la forma yo (hago → haga, hagan; vengo → venga, vengan) y algunos son especiales: ir → vaya, vayan; ser → sea, sean.",
          "Pronombres: en afirmativo se pegan al final y suele aparecer tilde (Siéntense. Díganme.); en negativo van delante (No se sienten. No me digan.).",
        ],
        [
          ["Rellenen este formulario, por favor.", "Fill in this form, please. (rellenar → rellenen)"],
          ["Suban en el ascensor a la tercera planta.", "Take the lift up to the third floor. (subir → suban)"],
          ["No se preocupen; hagan la reserva por teléfono.", "Don't worry; make the booking by phone. (negativo con se delante; hacer → hagan)"],
        ],
        [
          fb("Recepción.", "(usted, firmar) ___ aquí, por favor.", "Firme", "Usted usa el subjuntivo: firmar es -ar, así que toma e (firme); «firma» es indicativo o tú."),
          fb("Recepción.", "(ustedes, venir) ___ a recepción a las ocho.", "Vengan", "Ustedes → subjuntivo; venir sale de la forma yo: vengo → vengan. «Vienen» es indicativo."),
        ]
      ),
    ],
    [
      fb("Recepción.", "(ustedes, firmar) ___ aquí, por favor.", "Firmen", "Ustedes: subjuntivo plural; firmar es -ar → firmen (no «firman», que es indicativo)."),
      fb("Recepción.", "(usted, subir) ___ a la tercera planta.", "Suba", "Usted: subir es -ir, así que toma a (suba); «sube» es indicativo o tú."),
      fb("Recepción.", "(ustedes, no dejar) No ___ objetos de valor en la habitación.", "dejen", "Negativo de ustedes: no + subjuntivo; dejar es -ar → dejen."),
      fb("Recepción.", "(ustedes, sentarse) ___ un momento, por favor.", "Siéntense", "Afirmativo: el pronombre va al final, pegado (siéntense); la tilde mantiene el acento en sien-, y sentarse cambia e → ie."),
      fb("Recepción.", "(usted, ir) ___ al restaurante antes de las diez.", "Vaya", "Ir es especial en subjuntivo: vaya (usted), vayan (ustedes); «va» es indicativo."),
      fb("Recepción.", "(ustedes, decirme) ___ su número de reserva.", "Díganme", "Decir → digo → digan; en afirmativo el pronombre se pega y lleva tilde: díganme."),
      mc(
        "«No ___ la llave de la habitación.» (ustedes, perder)",
        ["pierdan", "pierden", "perdan", "pierdas"],
        0,
        "El mandato negativo de ustedes usa el subjuntivo, con el cambio e→ie de perder: no pierdan. «Pierden» es indicativo, «perdan» olvida el cambio de raíz y «pierdas» es de tú."
      ),
      toEs("Please wait here (ustedes).", "Esperen aquí, por favor.", "El mandato de ustedes usa el subjuntivo: esperar es -ar → esperen; «esperan» sería indicativo.", ["Por favor, esperen aquí."]),
      toEs("No siéntense en esas sillas.", "No se sienten en esas sillas.", "En negativo el pronombre va delante del verbo y sin tilde: no se sienten. Solo el afirmativo lo pega (siéntense).", [], "Corrige la frase."),
      toEs("Rellene el formulario y suba a su habitación.", "Rellenen el formulario y suban a su habitación.", "Pasar de usted a ustedes: se añade -n a los dos verbos (rellenen, suban); el posesivo su sirve para los dos.", ["Rellenen el formulario y suban a sus habitaciones."], "Cambia la frase de usted a ustedes."),
    ]
  ),
  L(
    "aviso-de-desalojo",
    "b1d-rep-imperativo-corrige",
    "Corrige el párrafo: mandatos mal formados",
    "Repaso espaciado: los errores de siempre en el imperativo.",
    "7 min",
    [
      sec(
        "Recuerda la regla: afirmativo y negativo son dos formas distintas",
        [
          "Recuerda la regla del imperativo de tú. Afirmativo: la forma de él en presente (come, saca, cierra) o una de las ocho irregulares (di, haz, ve, pon, sal, sé, ten, ven), con los pronombres pegados detrás (dímelo, ponte). Negativo: no + presente de subjuntivo (no comas, no vayas), con los pronombres delante (no me lo digas, no te pongas).",
          "¿Por qué dos formas? El negativo de tú se forma desde el subjuntivo, como todos los mandatos de usted y ustedes; solo el afirmativo de tú tiene forma propia. Para una orden directa a una persona no se usa el infinitivo (eso es para carteles: no fumar).",
          "Lee la nota de la nevera: «Hijo: no come todo el queso, saca la basura y no te olvides del perro. Decir a tu hermana que me llame. Y hazlo los deberes antes de las seis.» Hay tres errores.",
        ],
        [
          ["No cojas mi bici sin permiso.", "Don't take my bike without asking. (negativo → subjuntivo)"],
          ["Ponte el abrigo, que hace frío.", "Put your coat on, it's cold. (pon + te, pegado)"],
          ["No te preocupes tanto.", "Don't worry so much. (negativo: pronombre delante)"],
        ],
        [
          mc(
            "¿Qué error hay en «no come todo el queso»?",
            ["El negativo usa subjuntivo: no comas.", "Falta un pronombre.", "Debe ser «no comer».", "Está bien."],
            0,
            "El mandato negativo de tú usa el subjuntivo: no comas todo el queso. «No come» usa la forma del afirmativo. No falta ningún pronombre y «no comer» se usa en carteles e instrucciones impersonales, no para dar una orden a una persona."
          ),
          fb("Completa.", "No ___ tarde, que mañana madrugas. (acostarse, tú)", "te acuestes", "Negativo de tú: no + subjuntivo (acuestes, o → ue) con el pronombre delante: no te acuestes."),
        ]
      ),
    ],
    [
      toEs("No come todo el queso.", "No comas todo el queso.", "El negativo de tú usa el subjuntivo: no comas, no «no come».", [], "Corrige la frase (tú)."),
      toEs("Decir a tu hermana que me llame.", "Dile a tu hermana que me llame.", "Una orden de tú se da con el imperativo, no con el infinitivo: di + le → dile.", ["Di a tu hermana que me llame."], "Corrige la frase (tú)."),
      toEs("Hazlo los deberes antes de las seis.", "Haz los deberes antes de las seis.", "«Los deberes» ya es el objeto, así que el pronombre lo sobra: haz los deberes.", ["Hazlos antes de las seis."], "Corrige la frase (tú)."),
      toEs("No te vas sin despedirte.", "No te vayas sin despedirte.", "El negativo de tú usa el subjuntivo: no te vayas, no «no te vas».", [], "Corrige la frase (tú)."),
      toEs("Ponete el abrigo.", "Ponte el abrigo.", "El afirmativo de poner para tú es pon, y el pronombre se pega: ponte. «Ponete» es la forma de vos (Argentina, Uruguay…); con tú es ponte.", [], "Corrige la frase (tú)."),
      ms(
        "¿Qué mandatos son correctos?",
        ["No lo toques.", "Tócalo.", "No tócalo.", "Lo toca."],
        [0, 1],
        "En el negativo, el pronombre va delante: no lo toques. En el afirmativo, pegado al final: tócalo. «No tócalo» mezcla las dos reglas y «Lo toca» es una descripción, no una orden de tú."
      ),
    ]
  ),
  L(
    "grupo-whatsapp-edificio",
    "b1d-rep-si-mandato-consejo",
    "Habla de ti: si vienes a mi ciudad…",
    "Repaso espaciado: si + presente con mandatos y futuro para dar recomendaciones.",
    "7 min",
    [
      sec(
        "Recuerda la regla: si + presente, y después consejo o promesa",
        [
          "Recuerda la regla: en una condición real, detrás de «si» va el presente de indicativo (si vienes, si tienes tiempo), nunca el futuro ni el subjuntivo. La otra parte elige según lo que quieras hacer: un consejo → imperativo (trae crema solar; no vayas en agosto) y una predicción o promesa → futuro (verás la feria, te llevaré al castillo).",
          "¿Por qué presente? Porque «si» ya sitúa la condición en un futuro posible; el presente basta. Y recuerda que el mandato negativo de tú usa el subjuntivo: no vengas, no duermas.",
        ],
        [
          ["Si vienes en verano, trae crema solar.", "If you come in summer, bring sunscreen. (consejo → imperativo)"],
          ["Si te gusta el arte, visitarás el museo cada día.", "If you like art, you'll visit the museum every day. (predicción → futuro)"],
          ["Si no te gusta madrugar, no reserves la excursión de las seis.", "If you don't like getting up early, don't book the six o'clock tour. (consejo negativo → subjuntivo)"],
        ],
        [
          fb("Tu ciudad.", "Si te ___ el marisco, prueba el pulpo. (gustar)", "gusta", "Detrás de «si» (condición real) va el presente de indicativo: te gusta. «Gustará» o «guste» son errores en esta posición."),
          fb("Tu ciudad.", "Si quieres ver la puesta de sol, ___ al mirador. (subir, tú)", "sube", "Consejo → imperativo afirmativo de tú, que coincide con la forma de él en presente: sube."),
        ]
      ),
    ],
    [
      fb("Tu ciudad.", "Si vienes en invierno, ___ un paraguas. (traer)", "trae", "Consejo → imperativo de tú de traer: trae."),
      fb("Tu ciudad.", "Si ___ tiempo, sube al castillo. (tener, tú)", "tienes", "Detrás de «si» real → presente de indicativo: tienes."),
      fb("Tu ciudad.", "Si te pierdes, ___ a alguien. (preguntar)", "pregunta", "Consejo → imperativo afirmativo de tú: pregunta."),
      fb("Tu ciudad.", "Si vienes en mayo, ___ la feria. (ver, futuro)", "verás", "Predicción sobre lo que pasará si se cumple la condición → futuro: verás."),
      fb("Tu ciudad.", "Si no te gusta el ruido, no ___ en el centro. (dormir)", "duermas", "Consejo negativo de tú → presente de subjuntivo: no duermas (o → ue)."),
      toEs("If you come in April, you'll see the festival. (tú)", "Si vienes en abril, verás la fiesta.", "Si + presente (vienes) + futuro (verás).", ["Si vienes en abril, vas a ver la fiesta.", "Si vienes en abril, verás el festival."]),
      toEs("If you like walking, go to the old town. (tú)", "Si te gusta caminar, ve al casco antiguo.", "Si + presente + imperativo; el afirmativo de ir para tú es ve.", ["Si te gusta pasear, ve al casco antiguo.", "Si te gusta caminar, ve al centro histórico."]),
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
        [
          "Recuerda la regla: una noticia del mismo día (hoy, esta mañana, esta semana) va en pretérito perfecto: haber conjugado + participio. ¿Por qué? Porque el periodo del que hablas aún no ha terminado y el hecho se siente unido al presente. Si el periodo ya está cerrado (ayer, el lunes, en 2019), se usa el indefinido. En gran parte de Latinoamérica el indefinido se usa también para hoy.",
          "Dos detalles de los titulares: haber concuerda con el sujeto (ha / han), pero el participio no cambia nunca (ha cerrado, han cerrado); y algunos participios son irregulares (abierto, dicho, hecho, vuelto, descubierto, puesto).",
        ],
        [
          ["Esta mañana ha llovido en todo el norte.", "This morning it rained across the north. (esta mañana: periodo abierto → ha llovido)"],
          ["Ayer llovió en todo el sur.", "Yesterday it rained across the south. (ayer: periodo cerrado → llovió)"],
          ["Los bancos han abierto a las nueve.", "The banks opened at nine. (han concuerda; abierto, irregular)"],
        ],
        [
          wo("El Gobierno ha aprobado una nueva ley.", "Noticia de hoy → pretérito perfecto: ha (concuerda con el Gobierno, singular) + aprobado.", "The government has approved a new law."),
        ]
      ),
    ],
    [
      wo("Dos equipos se han clasificado para la final.", "Reflexivo + perfecto: el pronombre se va delante de haber (se han clasificado), nunca entre haber y el participio.", "Two teams have qualified for the final."),
      wo("Hoy se han vendido todas las entradas.", "Se pasivo + perfecto: han concuerda con «las entradas» (plural).", "All the tickets were sold today."),
      wo("El precio de la gasolina ha subido otra vez.", "Noticia reciente → perfecto; ha concuerda con «el precio», no con «la gasolina».", "The price of petrol has gone up again."),
      fb("Titular.", "Esta tarde el alcalde ___ el nuevo parque. (abrir)", "ha abierto", "«Esta tarde» es un periodo abierto → perfecto. Abrir tiene participio irregular: abierto, no «abrido»."),
      fb("Titular.", "Hoy ___ un nuevo récord de calor. (batirse)", "se ha batido", "Hoy → perfecto; con se, el pronombre va delante: se ha batido."),
      toEs("The museum has closed for repairs.", "El museo ha cerrado por obras.", "Una acción reciente con efecto actual va en pretérito perfecto: ha cerrado.", ["El museo se ha cerrado por obras."]),
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
        [
          "Recuerda la regla: el indefinido cuenta los hechos en orden (aprendió, se mudó, conoció). Cuando eliges un momento del pasado como punto de vista (cuando conoció a Paul), lo que pasó antes de ese momento va en pluscuamperfecto: había + participio.",
          "La línea de Elena: 2015, aprendió francés. 2018, se mudó a París. 2020, conoció a Paul. Desde 2020 miramos hacia atrás: cuando conoció a Paul, ya se había mudado a París y ya había aprendido francés.",
        ],
        [
          ["Cuando se mudó a París, ya había aprendido francés.", "When she moved to Paris, she had already learned French. (2015 es anterior a 2018)"],
          ["En 2018 se mudó a París.", "In 2018 she moved to Paris. (un hecho con fecha: indefinido)"],
        ],
        [
          fb("Completa con el pasado correcto.", "Cuando conoció a Paul, ya ___ a París. (mudarse)", "se había mudado", "El punto de vista es 2020 y la mudanza fue en 2018, antes: pluscuamperfecto, con el pronombre delante de haber."),
        ]
      ),
    ],
    [
      fb("Completa con el pasado correcto.", "Cuando Elena conoció a Paul, ya ___ dos años en París. (vivir)", "había vivido", "Los dos años en París son anteriores al momento en que conoce a Paul: pluscuamperfecto."),
      fb("Completa con el pasado correcto.", "En 2021 Elena y Paul ___ un piso juntos. (alquilar)", "alquilaron", "Un hecho nuevo con fecha, que hace avanzar la historia: indefinido."),
      fb("Completa con el pasado correcto.", "En 2020 ___ a Paul. (conocer)", "conoció", "Fecha concreta y hecho terminado: indefinido."),
      fb("Completa con el pasado correcto.", "Antes de 2015 nunca ___ en otro país. (vivir)", "había vivido", "«Antes de 2015» marca un punto del pasado; la experiencia (o su ausencia) hasta ese punto va en pluscuamperfecto."),
      fb("Completa con el pasado correcto.", "Cuando Elena llegó a París, sus padres ya ___ el piso. (ver)", "habían visto", "Los padres lo vieron antes de que ella llegara: pluscuamperfecto, con el participio irregular visto."),
      mc(
        "«Paul le dijo que nunca ___ a una española.» (conocer, él, antes)",
        ["había conocido", "ha conocido", "conocía mañana", "conocerá"],
        0,
        "Nunca conocer a una española es anterior al momento en que se lo dijo: pluscuamperfecto en estilo indirecto, había conocido. «Ha conocido» se liga al presente, «conocía mañana» mezcla tiempos y «conocerá» es futuro."
      ),
      toEs("By then, she had already found a job.", "Para entonces, ya había encontrado trabajo.", "«Had already found» = ya había encontrado: pluscuamperfecto.", ["Para entonces ya había encontrado un trabajo."]),
    ]
  ),
  L(
    "llamadas-de-los-domingos",
    "b1d-rep-perfecto-participios-ronda",
    "Ronda rápida: participios en contexto",
    "Repaso espaciado: participios regulares e irregulares en el pretérito perfecto y el pluscuamperfecto.",
    "5 min",
    [
      sec(
        "Recuerda",
        [
          "Recuerda la regla: el participio regular se forma con -ado para los verbos en -ar (hablado) e -ido para los verbos en -er/-ir (comido, vivido). Con haber, el participio nunca cambia: ha abierto, han abierto.",
          "Un grupo pequeño y muy frecuente termina en -to o -cho: abierto, dicho, escrito, hecho, muerto, puesto, roto, visto, vuelto, resuelto. Son formas antiguas que el uso diario ha conservado, por eso «abrido» o «rompido» suenan mal aunque sigan el patrón regular.",
          "El patrón que más ayuda: un verbo con prefijo hace el participio igual que su verbo base. Si sabes volver → vuelto, ya sabes devolver → devuelto y envolver → envuelto; de hacer → hecho sale deshacer → deshecho; de poner → puesto sale componer → compuesto.",
          "Si la raíz termina en vocal (leer, reír, oír), la -í- lleva tilde: leído, reído, oído.",
        ],
        [
          ["¿Quién ha descubierto el error?", "Who has discovered the mistake? (cubrir → cubierto, descubrir → descubierto)"],
          ["Ya hemos devuelto las llaves del piso.", "We have already returned the keys to the flat. (volver → vuelto, devolver → devuelto)"],
        ],
        [
          fb("Rápido.", "Nunca había ___ tanto. (reír)", "reído", "Reír es regular, pero la raíz acaba en vocal: reído, con tilde para que la í suene separada."),
        ]
      ),
    ],
    [
      fb("Rápido.", "¿Has ___ el correo? (leer)", "leído", "Participio regular en -ido, con tilde porque la raíz acaba en vocal: leído, no «leido»."),
      fb("Rápido.", "La planta se ha ___. (morir)", "muerto", "Morir está en el grupo de -to: muerto. «Morido» sigue el patrón regular, pero no se usa."),
      fb("Rápido.", "Ya habíamos ___ la mesa. (poner)", "puesto", "Poner tiene participio irregular: puesto, no «ponido»."),
      fb("Rápido.", "Me han ___ el móvil en el metro. (robar)", "robado", "Robar es regular: -ar → -ado. No todos los verbos frecuentes son irregulares."),
      fb("Rápido.", "¿Quién ha ___ esto? (escribir)", "escrito", "Participio irregular: «escrito», no «escribido»."),
      fb("Rápido.", "Todavía no han ___ el problema. (resolver)", "resuelto", "Resolver se comporta como volver: -olver → -uelto. Resuelto, no «resolvido»."),
      fb("Rápido.", "Se ha ___ el espejo. (romper)", "roto", "Romper tiene participio corto: roto, no «rompido»."),
      mc(
        "«Los científicos han ___ una nueva especie.»",
        ["descubierto", "descubrido", "descubiertado", "descubierta"],
        0,
        "Descubrir tiene participio irregular: descubierto. «Descubrido» y «descubiertado» no existen, y «descubierta» es femenino, que no concuerda con haber (el participio con haber no cambia)."
      ),
    ]
  ),
  L(
    "mensaje-de-la-aplicacion",
    "b1d-rep-relativos-cuento",
    "Cuento con huecos: la tienda de la esquina",
    "Repaso espaciado: relativos en una descripción de barrio.",
    "7 min",
    [
      sec(
        "La tienda",
        [
          "«En mi calle hay una tienda que abre hasta las once. El señor que la lleva se llama Rafa, quien vino de Ecuador hace veinte años. La estantería en la que guarda los dulces es mi favorita. Lo que más me gusta es que siempre sonríe.»",
          "Recuerda la regla: sin preposición, el relativo casi siempre es «que», para personas y para cosas (la tienda que abre, el señor que la lleva). Con preposición, la preposición va delante y el relativo concuerda: en la que, con el que, a quienes. Para un lugar también vale «donde». Si no hay sustantivo antes (una idea), «lo que».",
          "¿Por qué no se dice «el señor quien la lleva»? Porque «quien» sin preposición solo aparece entre comas (Rafa, quien vino de Ecuador…). ¿Y por qué no «la estantería que guarda los dulces en»? Porque en español la preposición nunca se queda al final, como en inglés.",
        ],
        [
          ["El quiosco que está en la plaza vende periódicos de todo el país.", "The kiosk in the square sells newspapers from all over the country. [cosa, sin preposición → que]"],
          ["La vecina con la que comparto el ascensor es muy simpática.", "The neighbor I share the lift with is very nice. [con delante + la que, concordando con «vecina»]"],
          ["Nuestro cartero, quien lleva años en el barrio, lo sabe todo.", "Our postman, who has been in the area for years, knows everything. [persona entre comas → quien o que]"],
          ["Lo que no entiendo es por qué cierran los lunes.", "What I don't understand is why they close on Mondays. [sin antecedente → lo que]"],
        ],
        [
          fb("Completa.", "Hay una tienda ___ abre hasta las once.", "que", "Sin preposición, el relativo es «que»: una tienda que abre…"),
          mc(
            "«El portero, ___ trabaja aquí desde 1990, conoce a todos los vecinos.»",
            ["que", "lo que", "donde", "el que"],
            0,
            "Persona entre comas y sin preposición: «que» (o «quien»). «Lo que» es para ideas, «donde» para lugares y «el que» sin preposición no se usa en una explicativa como esta."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "El señor ___ la lleva se llama Rafa.", "que", "«Que» es el sujeto de «la lleva» y no hay preposición."),
      { ...fb("Completa.", "Rafa, ___ vino de Ecuador, es muy amable.", "quien", "Para una persona entre comas se puede usar «quien» (o «que»)."), altAnswers: ["que", "el cual"] },
      { ...fb("Completa.", "La estantería en ___ guarda los dulces es mi favorita.", "la que", "Se guarda en la estantería: en + la que, concordando con «la estantería»."), altAnswers: ["que", "la cual", "donde"] },
      fb("Completa.", "___ más me gusta es que siempre sonríe.", "Lo que", "Sin antecedente, «lo que» se refiere a una idea: Lo que más me gusta…"),
      { ...fb("Completa.", "Su hija, con ___ hablo a veces, estudia Medicina.", "quien", "Persona + preposición (también «la que»)."), altAnswers: ["la que", "la cual"] },
      mc(
        "«Es la tienda ___ compro el pan.»",
        ["donde", "que", "lo que", "quien"],
        0,
        "Para un lugar se usa «donde» (o «en la que»): la tienda donde compro el pan. «Que» solo pierde la preposición «en», «lo que» es para ideas y «quien» para personas."
      ),
      toEs("The man who runs the shop is from Ecuador.", "El hombre que lleva la tienda es de Ecuador.", "«Who» como sujeto, sin preposición = que.", ["El señor que lleva la tienda es de Ecuador."]),
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
        "Recuerda: dos reglas y un lugar",
        [
          "Recuerda la regla: cuando hay dos pronombres, primero va la persona (indirecto: me, te, le, nos, os, les) y después la cosa (directo: lo, la, los, las). Y le/les se convierten en «se» delante de lo/la/los/las: «le lo» no existe en español, siempre «se lo».",
          "El lugar: delante del verbo conjugado (se lo di), o pegados detrás de un infinitivo, un gerundio o un mandato afirmativo, formando una sola palabra que casi siempre necesita tilde (dárselo, diciéndoselo, dáselo).",
          "Lee los mensajes de Ana: «Tu libro le lo di a Pedro. Las llaves las se dejé a la portera. ¿El regalo? Voy a darle lo mañana.» Tienen tres errores.",
        ],
        [
          ["¿El paraguas? Te lo devuelvo mañana.", "The umbrella? I'll give it back to you tomorrow. (persona + cosa)"],
          ["¿La foto? Se la mandé a mis padres.", "The photo? I sent it to my parents. (les + la → se la)"],
          ["¿El regalo? Voy a dárselo esta noche.", "The present? I'm going to give it to him tonight. (pegados al infinitivo, con tilde)"],
        ],
        [
          mc(
            "«Las llaves las se dejé a la portera.» ¿Qué falla?",
            ["El orden: se va primero → se las dejé.", "Falta la tilde.", "Debe ser «le las».", "Nada."],
            0,
            "El pronombre indirecto va antes que el directo: se las dejé. No falta tilde, y «le las» no existe: le se convierte en se delante de las."
          ),
          toEs("Le presté mi bici a Javier.", "Se la presté.", "Mi bici → la; a Javier → le. Juntos, le + la → «se la», con la persona primero.", [], "Sustituye «mi bici» y «a Javier» por pronombres."),
        ]
      ),
    ],
    [
      toEs("Tu libro le lo di a Pedro.", "Tu libro se lo di a Pedro.", "Le + lo → se lo: «le» nunca va delante de lo/la/los/las.", undefined, "Corrige la frase."),
      toEs("Las llaves las se dejé a la portera.", "Las llaves se las dejé a la portera.", "El pronombre indirecto (se) va antes que el directo (las): se las dejé.", undefined, "Corrige la frase."),
      toEs("Voy a darle lo mañana.", "Voy a dárselo mañana.", "Le + lo → se lo; pegados al infinitivo forman una sola palabra con tilde: dárselo (o, delante del verbo, se lo voy a dar).", ["Se lo voy a dar mañana."], "Corrige la frase."),
      toEs("Lo me explicaron ayer.", "Me lo explicaron ayer.", "El indirecto (me) va antes que el directo (lo): me lo explicaron.", undefined, "Corrige la frase."),
      toEs("Les los mandé por correo.", "Se los mandé por correo.", "Les + los → se los: también el plural «les» se convierte en «se».", undefined, "Corrige la frase."),
      ms(
        "¿Qué frases son correctas?",
        ["Te la devuelvo mañana.", "Se la devuelvo mañana.", "La te devuelvo mañana.", "Le la devuelvo mañana."],
        [0, 1],
        "El pronombre de persona va primero, y le → se delante de la: te la devuelvo, se la devuelvo. «La te» invierte el orden, y «Le la» nunca es correcto."
      ),
      toEs("Les enseñé las fotos del viaje a mis compañeros.", "Se las enseñé.", "Las fotos → las; a mis compañeros → les. Les + las → «se las».", [], "Sustituye «las fotos del viaje» y «a mis compañeros» por pronombres."),
      toEs("Les estoy preparando la cena a mis hijos.", "Se la estoy preparando.", "La cena → la; les + la → «se la». Con gerundio también pueden ir pegados detrás: estoy preparándosela (con tilde).", ["Estoy preparándosela."], "Sustituye «la cena» y «a mis hijos» por pronombres."),
      toEs("Dale el mensaje a tu jefa.", "No se lo des a tu jefa.", "Al pasar al negativo, los pronombres salen delante del subjuntivo: «no se lo des». (El mensaje → lo; le → se.)", ["No se lo des."], "Cambia al negativo con pronombres."),
      { type: "speak", prompt: "Responde en voz alta: —¿Le has dado las entradas a tu hermano? —«Yes, I gave them to him yesterday.»", text: "Sí, se las di ayer.", explanation: "Las entradas → las; a tu hermano → le → se delante de las: «se las di»." },
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
        "Recuerda la regla: dos pasos",
        [
          "Recuerda la regla. Paso 1: la cosa → lo, la, los, las, según su género y número (la carta → la; los apuntes → los). Paso 2: la persona → me, te, le, nos, os, les, y se coloca delante de la cosa. Si la persona es le o les, se convierte en «se» (le la → se la), porque dos sonidos «l» seguidos se evitaban.",
          "Los dos pronombres van juntos delante del verbo conjugado (se la mando, nos los han dado) o pegados al final de un infinitivo, un gerundio o un mandato afirmativo (mandársela, mándasela).",
        ],
        [
          ["Compro flores a mi madre. → Las compro a mi madre. → Se las compro.", "I buy flowers for my mother. → I buy them for her. (le + las → se las)"],
          ["Nos traen el desayuno. → Nos lo traen.", "They bring us breakfast. → They bring it to us. (nos no cambia)"],
          ["Voy a pedir la factura al camarero. → Voy a pedírsela.", "I'm going to ask the waiter for the bill. → I'm going to ask him for it. (pegados al infinitivo)"],
        ],
        [
          fb("Paso 2.", "Explico la lección a los alumnos. → La explico a los alumnos. → ___ explico.", "Se la", "Les (a los alumnos) → se delante de la (la lección): se la explico."),
          toEs("Mi tía me regala un libro.", "Mi tía me lo regala.", "Un libro → lo; «me» no cambia y va delante: «me lo regala».", [], "Sustituye «un libro» por un pronombre."),
        ]
      ),
    ],
    [
      fb("Paso 1.", "Presto mis apuntes a Irene. → ___ presto a Irene.", "Los", "Mis apuntes (masculino plural) → los."),
      fb("Paso 2.", "Cuento el chiste a mis amigos. → Lo cuento a mis amigos. → ___ cuento.", "Se lo", "Les (a mis amigos) → se delante de lo: se lo cuento."),
      fb("Paso 2.", "Mis abuelos me dan consejos. → Mis abuelos ___ dan.", "me los", "Me + los (consejos, masculino plural): me los dan."),
      fb("Paso 2.", "Os enseñamos la ciudad. → ___ enseñamos.", "Os la", "Os + la (la ciudad): os la enseñamos. «Os» no cambia; solo le/les pasan a se."),
      toEs("Le devuelvo las llaves al portero.", "Se las devuelvo.", "Las llaves → las; al portero → le → se: «se las devuelvo».", [], "Sustituye los dos complementos por pronombres."),
      toEs("Vamos a enseñar el piso a los compradores.", "Vamos a enseñárselo.", "El piso → lo; a los compradores → les → se. Pegados al infinitivo forman una palabra con tilde: «enseñárselo».", ["Se lo vamos a enseñar."], "Sustituye los dos complementos por pronombres."),
      toEs("Manda el informe a la directora.", "Mándaselo.", "Con el mandato afirmativo, los pronombres se pegan detrás: manda + se + lo → «mándaselo», con tilde.", [], "Sustituye los dos complementos por pronombres."),
      toEs("¿La tarta? Le la llevo a la vecina esta tarde.", "¿La tarta? Se la llevo a la vecina esta tarde.", "«Le la» es imposible: delante de la, «le» se convierte en «se».", [], "Corrige la frase."),
      toEs("¿Los documentos? Los te mando por correo.", "¿Los documentos? Te los mando por correo.", "Primero la persona (te), después la cosa (los): «te los mando».", [], "Corrige la frase."),
      toEs("I'm going to send them to you tomorrow (the photos).", "Te las voy a mandar mañana.", "Te + las (las fotos), delante del verbo conjugado: te las voy a mandar.", ["Voy a mandártelas mañana.", "Te las voy a enviar mañana.", "Voy a enviártelas mañana."]),
      { type: "speak", prompt: "Haz la cadena en voz alta en tres pasos: «Doy el regalo a Marta.» → «Lo doy a Marta.» → «Se lo doy.»", text: "Doy el regalo a Marta. Lo doy a Marta. Se lo doy.", explanation: "Paso 1: el regalo → lo. Paso 2: a Marta → le, que se convierte en se delante de lo." },
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
        "Recuerda: cada intención, su forma",
        [
          "Recuerda la regla: al organizar un viaje mezclas cuatro herramientas. Condición real: si + presente (si reservamos hoy, nos sale más barato). Preferencia o propuesta suave: condicional (preferiría, ¿te gustaría?). Lo que conviene o deseas que hagan otros: es importante que / ojalá + subjuntivo (compremos, haga). Y para no repetir objetos, pronombres con la persona primero: os los mando.",
          "Lee el chat: Ana: «Si reservamos hoy, nos sale más barato.» Leo: «Yo preferiría ir en tren. ¿Te parece bien?» Ana: «Vale, pero es importante que compremos los billetes ya.» Leo: «Los compro yo y os los mando esta noche.»",
        ],
        [
          ["Si salimos el viernes, evitamos el tráfico.", "If we leave on Friday, we avoid the traffic. (si + presente)"],
          ["Me gustaría dormir cerca del centro.", "I'd like to sleep near the centre. (condicional: preferencia suave)"],
          ["Ojalá no llueva en Oporto.", "I hope it doesn't rain in Porto. (ojalá + subjuntivo)"],
          ["¿Las entradas? Te las reservo yo.", "The tickets? I'll book them for you. (te + las)"],
        ],
        [
          { ...fb("Completa.", "Si ___ el tren de las ocho, llegaremos a la hora de comer. (coger, nosotros)", "cogemos", "Detrás del «si» real va el presente: «cogemos» (en América: «tomamos»), aunque el resultado esté en futuro."), altAnswers: ["tomamos"] },
          toEs("Prefiero ir en avión.", "Preferiría ir en avión.", "El condicional «preferiría» presenta la preferencia de forma más suave, como una propuesta.", [], "Cambia al condicional para sonar menos tajante."),
        ]
      ),
    ],
    [
      fb("Completa.", "Si ___ hoy, nos sale más barato. (reservar, nosotros)", "reservamos", "Condición real: si + presente, «reservamos»."),
      fb("Completa.", "Es importante que ___ los billetes ya. (comprar, nosotros)", "compremos", "«Es importante que» es una valoración: subjuntivo, «compremos»."),
      fb("Completa.", "Los compro yo y ___ mando esta noche. (a vosotros, los billetes)", "os los", "Primero la persona (os), luego la cosa (los): «os los mando»."),
      fb("Completa.", "¿Ya ___ alguien el hotel? (reservar, perfecto)", "ha reservado", "«Ya» en una pregunta sobre lo hecho hasta ahora: pretérito perfecto, «ha reservado»."),
      fb("Completa.", "___ los pasaportes, que caducan pronto. (revisar, vosotros)", "Revisad", "Mandato de vosotros: revisar sin -r + -d, «revisad»."),
      mc(
        "«Ojalá ___ buen tiempo en Lisboa.»",
        ["haga", "hace", "hará", "hacer"],
        0,
        "«Ojalá» siempre va con subjuntivo: haga buen tiempo. «Hace» y «hará» son indicativo, y «hacer» es infinitivo."
      ),
      toEs("Os mando las fotos del hotel.", "Os las mando.", "Las fotos → las; «os» no cambia y va delante: «os las mando».", [], "Sustituye «las fotos del hotel» por un pronombre."),
      toEs("Va a hacer sol el fin de semana.", "Ojalá haga sol el fin de semana.", "«Ojalá» convierte la predicción en un deseo y pide subjuntivo: «haga».", ["Ojalá que haga sol el fin de semana."], "Transforma la predicción en un deseo con «ojalá»."),
      toEs("Si alquilaremos un coche, podremos ver más pueblos.", "Si alquilamos un coche, podremos ver más pueblos.", "Detrás del «si» real nunca va futuro: «si alquilamos». El futuro va en el resultado.", [], "Corrige la frase."),
      toEs("Es mejor que llevamos poco equipaje.", "Es mejor que llevemos poco equipaje.", "«Es mejor que» pide subjuntivo: «llevemos».", [], "Corrige la frase."),
      toEs("If you want, I'll book the hotel.", "Si quieres, reservo yo el hotel.", "Si + presente; como oferta inmediata, el resultado también puede ir en presente: reservo yo.", ["Si quieres, yo reservo el hotel.", "Si quieres, reservaré el hotel."]),
      { type: "speak", prompt: "Propón un plan en voz alta en el chat del viaje: «I'd prefer to go by bus. If we book today, it's cheaper.»", text: "Yo preferiría ir en autobús. Si reservamos hoy, es más barato.", explanation: "Preferencia suave → condicional (preferiría); condición real → si + presente (reservamos) + presente (es)." },
    ]
  ),
  L(
    "el-correo-sospechoso",
    "b1d-rep-mezcla-dictado",
    "Dictado: repaso acumulativo",
    "Repaso espaciado: frases que mezclan todos los temas del nivel Intermedio.",
    "6 min",
    [
      sec(
        "Recuerda: escucha la estructura, no solo las palabras",
        [
          "Recuerda la regla: en un dictado, la gramática te ayuda a oír. Si oyes «quiero que», «espero que» o «no creo que», el verbo que sigue va en subjuntivo (me lo expliques). Si oyes «si», detrás va presente, y el resultado en futuro, mandato o presente. Si hay dos pronombres, primero la persona y luego la cosa (me lo, se las), y «le» se convierte en «se». Si un pronombre se pega a un mandato o un infinitivo, la palabra suele llevar tilde (pregúntaselas, dárselo).",
          "Cada frase de este repaso combina dos temas: subjuntivo + pronombres, perfecto + relativo, condicional + si, se pasivo + imperativo.",
        ],
        [
          ["El libro que me recomendaste ya lo he leído.", "I've already read the book you recommended to me. (relativo + perfecto + lo)"],
          ["Si ves a Carmen, dale recuerdos.", "If you see Carmen, give her my regards. (si + mandato con pronombre)"],
          ["No creo que nos lo devuelvan pronto.", "I don't think they'll give it back to us soon. (duda + subjuntivo + nos lo)"],
        ],
        [
          { type: "dictation", audio: "Quiero que me lo expliques otra vez.", explanation: "Quiero que + subjuntivo (expliques); me lo delante del verbo conjugado." },
          toEs("Le doy el regalo a mi abuela.", "Se lo doy.", "El regalo → lo; a mi abuela → le, que se convierte en «se» delante de lo: «se lo doy».", [], "Sustituye «el regalo» y «a mi abuela» por pronombres."),
        ]
      ),
    ],
    [
      { type: "dictation", audio: "La película que vimos ya la había visto antes.", explanation: "Relativo «que» + pluscuamperfecto (había visto): verla antes ocurrió antes de verla juntos. «Había» sin tilde en la a y con h." },
      { type: "dictation", audio: "Si tienes dudas, pregúntaselas al profesor.", explanation: "Si + presente + mandato. Pregunta + se + las forma una palabra con tilde: «pregúntaselas»." },
      { type: "dictation", audio: "Aquí se venden los mejores churros de la ciudad.", explanation: "Se pasivo: «se venden», en plural porque concuerda con «los churros»." },
      wo("Yo que tú, no se lo diría todavía.", "«Yo que tú» + condicional; los pronombres van delante del verbo conjugado: no se lo diría.", "If I were you, I wouldn't tell him yet."),
      wo("No creo que se lo digan hoy.", "«No creo que» expresa duda: subjuntivo (digan), con se lo delante.", "I don't think they'll tell him today."),
      toEs("Si tengo tiempo, te ayudo.", "Si tengo tiempo, te ayudaré.", "En la condición real, la parte del «si» sigue en presente; solo el resultado pasa a futuro: «te ayudaré». Nunca «si tendré».", [], "Cambia el resultado al futuro."),
      toEs("Cuéntaselo a tu hermano.", "No se lo cuentes a tu hermano.", "En el negativo los pronombres salen delante y el verbo pasa a subjuntivo: «no se lo cuentes».", [], "Cambia al negativo."),
      toEs("Espero que me lo devuelves mañana.", "Espero que me lo devuelvas mañana.", "«Espero que» + otro sujeto pide subjuntivo: «devuelvas».", [], "Corrige la frase."),
      toEs("El chico con el que hablé me lo ha explicado todo ayer.", "El chico con el que hablé me lo explicó todo ayer.", "Con «ayer» (tiempo terminado) se usa el pretérito indefinido: «explicó», no el perfecto.", ["El chico con quien hablé me lo explicó todo ayer."], "Corrige la frase."),
      toEs("Si llueve mañana, nos quedaríamos en casa.", "Si llueve mañana, nos quedaremos en casa.", "Si + presente es una condición real: el resultado va en futuro (o presente), no en condicional.", ["Si llueve mañana, nos quedamos en casa."], "Corrige la frase."),
      toEs("The gift you gave me is on the table.", "El regalo que me diste está en la mesa.", "El relativo omitido en inglés es obligatorio en español: el regalo que me diste.", ["El regalo que me hiciste está en la mesa."]),
    ]
  ),
  L(
    "los-arboles-de-la-plaza",
    "b1d-rep-formacion-reflexivos",
    "Práctica de patrones: que te levantes, que nos veamos",
    "Repaso espaciado: el subjuntivo de los verbos reflexivos.",
    "7 min",
    [
      sec(
        "El pronombre va delante",
        [
          "Recuerda la regla: en subjuntivo, el pronombre reflexivo va delante del verbo, separado: que me levante, que te acuestes, que se vista, que nos veamos, que os sentéis, que se vayan. El pronombre concuerda con el sujeto del subjuntivo, no con quien quiere o recomienda: quiero que TE acuestes.",
          "¿Por qué no «que levántate»? Porque el pronombre solo se pega detrás en el infinitivo, el gerundio y el mandato afirmativo (levántate). El subjuntivo es un verbo conjugado normal, así que el pronombre va delante, como en el presente: te levantas → que te levantes. Y los cambios de raíz se mantienen: acostarse → se acuesten, vestirse → se vista, divertirse → te diviertas.",
        ],
        [
          ["Quiero que te acuestes pronto.", "I want you to go to bed early. [te delante; o → ue]"],
          ["Espero que nos veamos pronto.", "I hope we see each other soon. [nos delante]"],
          ["Mis padres prefieren que no me quede sola en casa.", "My parents prefer me not to stay home alone. [no + pronombre + subjuntivo]"],
        ],
        [
          fb("Mismo marco.", "Es mejor que ___ temprano. (levantarse, tú)", "te levantes", "Es mejor que + subjuntivo, con el pronombre de tú (te) delante del verbo: te levantes."),
          mc(
            "El entrenador quiere que los jugadores ___ antes del partido.",
            ["se concentren", "concéntrense", "se concentran", "concentren"],
            0,
            "Querer que + otro sujeto → subjuntivo, con el pronombre delante: se concentren. «Concéntrense» es un mandato (pronombre pegado), «se concentran» es indicativo y «concentren» pierde el pronombre."
          ),
        ]
      ),
    ],
    [
      fb("Mismo marco.", "Es mejor que ___ ya. (irse, nosotros)", "nos vayamos", "Irse tiene un subjuntivo irregular (vay-); el pronombre de nosotros va delante: nos vayamos."),
      fb("Mismo marco.", "Es mejor que ___ en la primera fila. (sentarse, vosotros)", "os sentéis", "Con vosotros, sentarse no diptonga en subjuntivo: os sentéis, con el pronombre delante."),
      fb("Mismo marco.", "Es mejor que los niños ___ antes de las nueve. (acostarse)", "se acuesten", "Acostarse diptonga (o → ue) en subjuntivo: se acuesten, con «se» delante."),
      fb("Mismo marco.", "Es mejor que ___ con calma. (vestirse, usted)", "se vista", "Vestirse cambia e → i en subjuntivo: se vista. Para usted, el pronombre es «se»."),
      fb("Mismo marco.", "Es mejor que no ___ tanto. (preocuparse, tú)", "te preocupes", "Orden: no + pronombre + subjuntivo: no te preocupes."),
      mc(
        "«Ojalá ___ pronto.» (casarse, ellos)",
        ["se casen", "casen", "se casan", "casense"],
        0,
        "Casarse es pronominal: el pronombre va delante del verbo conjugado, y ojalá pide subjuntivo: se casen. «Casen» pierde el pronombre (y cambia el sentido), «se casan» es indicativo y «casense» no es posible aquí."
      ),
      toEs("I don't want you to get bored. (tú)", "No quiero que te aburras.", "No quiero que + subjuntivo, con el reflexivo delante: te aburras."),
    ]
  ),
  L(
    "supermercado-sin-plastico",
    "b1d-rep-deseo-duda-emocion-habla",
    "Habla de ti: tu opinión sobre tu ciudad",
    "Repaso espaciado: creo que, no creo que, me gusta que, es una pena que.",
    "7 min",
    [
      sec(
        "Recuerda la regla: ¿informas o valoras?",
        [
          "Recuerda la regla: si afirmas lo que piensas (creo que, pienso que, estoy seguro de que), presentas algo como verdadero → indicativo. Si lo niegas o lo dudas (no creo que, dudo que), o si reaccionas con una emoción o una valoración (me gusta que, me molesta que, es una pena que) → subjuntivo.",
          "¿Por qué? El indicativo informa de hechos; el subjuntivo marca que la frase no afirma ese hecho, sino que lo pone en duda o lo valora.",
        ],
        [
          ["Creo que mi ciudad es tranquila.", "I think my city is quiet. (afirmas → indicativo)"],
          ["No creo que haya suficientes parques.", "I don't think there are enough parks. (niegas → subjuntivo)"],
          ["Me gusta que la gente sea abierta.", "I like that people are open. (emoción → subjuntivo)"],
          ["Es una pena que el transporte funcione tan mal.", "It's a shame transport works so badly. (valoración → subjuntivo)"],
          ["Estoy seguro de que el barrio mejorará.", "I'm sure the neighborhood will improve. (certeza → indicativo, aquí futuro)"],
        ],
        [
          fb("Tu ciudad.", "Creo que mis vecinos ___ muy amables. (ser)", "son", "«Creo que» afirmativo presenta tu opinión como verdadera → indicativo: son. «Sean» solo iría con «no creo que»."),
          mc("Dudo que el alcalde ___ su promesa. (cumplir)", ["cumpla", "cumple", "cumplirá", "cumplir"], 0, "«Dudar que» pone el hecho en duda → subjuntivo: cumpla. «Cumple» y «cumplirá» son indicativo (lo darían por seguro), y el infinitivo no puede llevar otro sujeto."),
        ]
      ),
    ],
    [
      fb("Tu ciudad.", "No creo que ___ suficientes carriles bici. (haber)", "haya", "«No creo que» niega la opinión → subjuntivo; el subjuntivo de «hay» es «haya»."),
      fb("Tu ciudad.", "Me gusta que los bares ___ abiertos hasta tarde. (estar)", "estén", "«Me gusta que» expresa una emoción → subjuntivo de estar: estén."),
      fb("Tu ciudad.", "Es una pena que el metro ___ tan caro. (costar)", "cueste", "«Es una pena que» valora un hecho → subjuntivo; «costar» cambia o → ue en las formas con el acento en la raíz: cueste."),
      { ...fb("Tu ciudad.", "Estoy seguro de que la ciudad ___ mucho en diez años. (cambiar, futuro)", "cambiará", "«Estoy seguro de que» expresa certeza → indicativo, aquí en futuro: cambiará."), altAnswers: ["va a cambiar"] },
      fb("Tu ciudad.", "Me molesta que la gente no ___ la basura. (reciclar)", "recicle", "«Me molesta que» expresa una emoción → subjuntivo: recicle (verbo en -ar → terminación con e)."),
      ms(
        "¿Qué frases están bien?",
        ["Me encanta que haya tantos museos.", "Pienso que el centro es bonito.", "No pienso que el centro es bonito.", "Me encanta que hay tantos museos."],
        [0, 1],
        "«Me encanta que» expresa emoción → subjuntivo (haya), y «pienso que» afirmativo → indicativo (es). «No pienso que… es» necesita subjuntivo (sea), y «Me encanta que hay» necesita «haya»."
      ),
      toEs("It's a shame there isn't a beach.", "Es una pena que no haya playa.", "«Es una pena que» → subjuntivo; «there isn't» = no hay → no haya.", ["Es una lástima que no haya playa."]),
    ]
  ),
  L(
    "supermercado-sin-plastico",
    "b1d-rep-deseo-pares-decir",
    "Pares mínimos: me dice que viene / me dice que venga",
    "Repaso espaciado: decir para informar o para pedir.",
    "7 min",
    [
      sec(
        "Recuerda la regla: ¿informa o pide?",
        [
          "Recuerda la regla: «decir» tiene dos trabajos. Si informa de un hecho → indicativo: Mi madre dice que viene a las seis. Si transmite una petición, un consejo o una orden → subjuntivo: Mi madre dice que vengas a las seis. Lo mismo pasa con escribir y avisar.",
          "¿Por qué? Es la misma regla de siempre: con información, el verbo cuenta un hecho (indicativo); con una petición, quieres que otra persona haga algo que todavía no ha hecho (subjuntivo, como después de querer que o pedir que). Para saber cuál es, pregúntate: ¿me cuenta algo o me pide algo?",
        ],
        [
          ["Ana dice que llega tarde.", "Ana says she's arriving late. (informa → indicativo)"],
          ["Ana dice que llegues pronto.", "Ana says you should arrive early. (pide → subjuntivo)"],
          ["El hotel nos avisa de que el desayuno es a las ocho.", "The hotel lets us know breakfast is at eight. (informa)"],
          ["Mi tía me escribe que la visite en verano.", "My aunt writes asking me to visit her in summer. (pide)"],
        ],
        [
          mc(
            "«El médico dice que ___ más agua.» (él te lo recomienda)",
            ["bebas", "bebes", "beber", "bebías"],
            0,
            "Aquí «decir» transmite un consejo u orden (te dice que hagas algo), y así pide subjuntivo: bebas. «Bebes» sería si solo informara de un hecho, «beber» es infinitivo y «bebías» es pasado."
          ),
          fb("Completa.", "Mi compañero dice que la impresora no ___. (funcionar — informa)", "funciona", "Te cuenta un hecho sobre la impresora → indicativo: funciona. Una impresora no puede recibir una petición."),
        ]
      ),
    ],
    [
      fb("Par A.", "Pablo dice que ___ cansado. (estar, él — informa)", "está", "Pablo cuenta cómo está → información → indicativo: está."),
      fb("Par B.", "Pablo dice que ___ más temprano. (acostarse, tú — pide)", "te acuestes", "Pablo te pide algo → subjuntivo, con el pronombre delante: te acuestes (o → ue)."),
      fb("Par A.", "Mis padres me escriben que ___ bien. (estar, ellos — informan)", "están", "Te cuentan una noticia → indicativo: están."),
      fb("Par B.", "Mis padres me escriben que los ___ pronto. (visitar, yo — piden)", "visite", "Te piden algo → subjuntivo de yo: visite."),
      fb("Par A.", "La profesora dice que el examen ___ fácil. (ser — informa)", "es", "Da una información sobre el examen → indicativo: es."),
      fb("Par B.", "La profesora dice que ___ el capítulo 5. (estudiar, nosotros — pide)", "estudiemos", "Nos pide algo → subjuntivo de nosotros: estudiemos."),
      toEs("My boss says I should take a holiday.", "Mi jefe dice que me tome unas vacaciones.", "Aquí «decir» transmite un consejo, así que pide subjuntivo: que me tome.", ["Mi jefe dice que tome vacaciones.", "Mi jefa dice que me tome unas vacaciones."]),
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
        [
          "Recuerda la regla: las expresiones que valoran o aconsejan (es importante que, es mejor que, conviene que, es normal que) llevan subjuntivo cuando hay una persona concreta, porque no informan de un hecho: lo recomiendan o lo juzgan. Si el consejo es general, sin persona, va con infinitivo: es mejor llegar pronto.",
          "Las que afirman un hecho (es verdad que, es evidente que) llevan indicativo. Lee la guía: «Es importante que llegues diez minutos antes. Es mejor que lleves ropa sencilla. Conviene que investigues la empresa. Es normal que estés nervioso, pero es fundamental que hables con seguridad.»",
        ],
        [
          ["Conviene que investigues la empresa.", "It's a good idea for you to research the company. (persona concreta: subjuntivo)"],
          ["Es mejor llegar con tiempo.", "It's better to arrive in good time. (consejo general: infinitivo)"],
          ["Es verdad que la entrevista es larga.", "It's true that the interview is long. (hecho: indicativo)"],
        ],
        [
          fb("Completa.", "Es importante que ___ el nombre de la persona que te entrevista. (recordar)", "recuerdes", "Consejo para una persona concreta (tú): subjuntivo. Recordar cambia o → ue: recuerdes."),
        ]
      ),
    ],
    [
      fb("Completa.", "Es mejor que no te ___ demasiado perfume. (poner)", "pongas", "«Es mejor que» + tú → subjuntivo, que sale de pongo: te pongas."),
      fb("Completa.", "Conviene que ___ las preguntas típicas en voz alta. (practicar)", "practiques", "«Conviene que» pide subjuntivo; la c pasa a qu delante de e para mantener el sonido: practiques."),
      fb("Completa.", "Es normal que te ___ las manos. (sudar)", "suden", "«Es normal que» valora: subjuntivo. El sujeto es «las manos» (plural): suden."),
      fb("Completa.", "Es fundamental que ___ la verdad sobre tu experiencia. (decir)", "digas", "«Es fundamental que» + subjuntivo, que sale de digo: digas."),
      fb("Completa.", "Es preferible que no ___ a la entrevista con prisa. (ir)", "vayas", "«Es preferible que» + subjuntivo; ir es irregular: vayas."),
      mc(
        "«Es verdad que la empresa ___ muy grande.»",
        ["es", "sea", "ser", "fuera"],
        0,
        "«Es verdad que» presenta un hecho como cierto y lleva indicativo: es. «Sea» y «fuera» son subjuntivo, y «ser» es infinitivo."
      ),
      toEs("It's better that you ask questions at the end. (tú)", "Es mejor que hagas preguntas al final.", "«Es mejor que» + sujeto concreto → subjuntivo: hagas («hacer preguntas»).", ["Es mejor que preguntes al final."]),
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
        [
          "Recuerda la regla: solo hay dos formas «propias» del imperativo, las afirmativas de tú (espera: igual que él espera) y de vosotros (esperad: infinitivo con -d en vez de -r). Todo lo demás sale del subjuntivo: usted (espere), nosotros (esperemos), ustedes (esperen) y todos los negativos (no esperes, no esperéis).",
          "Por eso los irregulares de tú (ven, haz, pon, di, sal, ten, ve, sé) hay que aprenderlos aparte, mientras que vosotros nunca falla: venid, haced, poned.",
        ],
        [
          ["Espere aquí, por favor.", "Wait here, please. (usted: subjuntivo)"],
          ["Esperad aquí; no os mováis.", "Wait here; don't move. (vosotros: -d en afirmativo, subjuntivo en negativo)"],
          ["Ven pronto, pero no vengas sin avisar.", "Come early, but don't come without letting me know. (tú: ven irregular; no vengas)"],
        ],
        [
          fb("Rápido.", "(venir, vosotros) ___ mañana.", "Venid", "Vosotros afirmativo: infinitivo con -d en lugar de -r, sin excepciones: venir → venid."),
        ]
      ),
    ],
    [
      fb("Rápido.", "(venir, usted) ___ mañana.", "Venga", "Usted usa el subjuntivo, que sale de la forma yo (vengo): venga."),
      fb("Rápido.", "(venir, tú) ___ mañana.", "Ven", "Venir es uno de los ocho irregulares de tú afirmativo: ven (no «vienes», que es presente)."),
      fb("Rápido.", "(no venir, vosotros) No ___ mañana.", "vengáis", "Todos los negativos usan el subjuntivo: no vengáis. «No venid» es un error típico."),
      fb("Rápido.", "(hacer, nosotros) ___ una pausa.", "Hagamos", "Nosotros = subjuntivo, que sale de hago: hagamos."),
      fb("Rápido.", "(hacer, tú) ___ una pausa.", "Haz", "Hacer es irregular en tú afirmativo: haz (no «hace»)."),
      fb("Rápido.", "(no hacer, usted) No ___ caso.", "haga", "Usted, en afirmativo y en negativo, usa el subjuntivo: no haga."),
      fb("Rápido.", "(escribir, vosotros) ___ vuestro nombre.", "Escribid", "Vosotros afirmativo: infinitivo con -d, escribid."),
      mc(
        "(ir, tú) «___ a por pan.»",
        ["Ve", "Ir", "Id", "Vaya"],
        0,
        "El mandato afirmativo de tú de ir es irregular: ve. «Ir» es infinitivo, «id» es de vosotros y «vaya» es de usted."
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
        [
          "Recuerda la regla: para hacer una suposición, el español «retrocede» un tiempo. Sobre el presente, futuro: ¿dónde está Ana? —Estará en casa (probablemente está). Sobre el pasado, condicional: ¿por qué no vino? —Estaría cansada (probablemente estaba).",
          "Así no hace falta «probablemente»: el tiempo verbal ya lo dice. Los irregulares son los mismos del futuro: tendría, habría, sería, haría, querría.",
        ],
        [
          ["Serían las diez cuando llegó.", "It must have been around ten when he arrived. (serían = probablemente eran)"],
          ["Estaría cansada.", "She was probably tired. (suposición sobre el pasado)"],
          ["—¿Dónde está Pablo? —Estará en el gimnasio.", "Where's Pablo? —He's probably at the gym. (sobre el presente: futuro)"],
        ],
        [
          fb("Supón.", "—¿Cuántos años tenía tu abuelo? —___ unos ochenta. (tener)", "Tendría", "La pregunta es sobre el pasado (tenía), así que la suposición va en condicional: tendría (irregular, como tendré)."),
        ]
      ),
    ],
    [
      fb("Supón.", "—¿Por qué no contestó? —___ ocupado. (estar)", "Estaría", "Suposición sobre el pasado (no contestó): condicional, estaría = probablemente estaba."),
      fb("Supón.", "—¿Quién llamó anoche? —___ tu hermana. (ser)", "Sería", "«Anoche» es pasado: la suposición va en condicional, sería."),
      fb("Supón.", "—¿Cuánta gente había? —___ unas doscientas personas. (haber)", "Habría", "Cantidad aproximada en el pasado: condicional de haber, habría (irregular, como habrá)."),
      fb("Supón.", "—¿Por qué llegó tarde? —___ mucho tráfico. (haber)", "Habría", "Suponemos la causa de algo pasado: condicional, habría = probablemente había."),
      fb("Supón.", "—¿Por qué no comió? —No ___ hambre. (tener)", "tendría", "Suposición sobre el pasado: no tendría = probablemente no tenía."),
      mc(
        "«—¿A qué hora se fue? —___ las tres.»",
        ["Serían", "Serán", "Eran seguro", "Sean"],
        0,
        "El condicional expresa probabilidad en el pasado: serían las tres = probablemente eran las tres. «Serán» es probabilidad en el presente, «eran seguro» expresa certeza y «sean» es subjuntivo."
      ),
      toEs("He was probably at home.", "Estaría en casa.", "El condicional puede expresar probabilidad en el pasado: estaría = probablemente estaba.", ["Probablemente estaba en casa."]),
    ]
  ),
  L(
    "la-mochila-que-pesaba-menos",
    "b1d-rep-perfecto-corrige",
    "Corrige el párrafo: el blog de Sara",
    "Repaso espaciado: mezclas incorrectas de perfecto e indefinido.",
    "7 min",
    [
      sec(
        "Recuerda la regla: el marcador temporal manda",
        [
          "Recuerda la regla (uso de España): si el periodo incluye el momento en que hablas (hoy, esta mañana, este mes, este año, nunca, alguna vez) → pretérito perfecto: he comprado. Si el periodo ya terminó (ayer, anoche, el lunes pasado, en 2019, hace tres días) → indefinido: compré.",
          "¿Por qué? El perfecto conecta el hecho con el presente; el indefinido lo encierra en un tiempo acabado. En gran parte de América se usa el indefinido también con hoy o este mes, pero con ayer, en 2019 o hace tres días el perfecto es un error en todas partes.",
          "Lee el blog de Sara: «Hoy fui al mercado y he comprado fruta. Ayer he visto una película muy buena. Este mes leí tres libros. En 2019 he vivido en Roma.» Tiene cuatro errores de tiempo verbal.",
        ],
        [
          ["Hoy he ido al gimnasio y he nadado una hora.", "Today I went to the gym and swam for an hour. (hoy → perfecto en los dos verbos)"],
          ["Anoche dormí fatal.", "Last night I slept terribly. (anoche → indefinido)"],
          ["Nunca he probado el pulpo.", "I've never tried octopus. (nunca, hasta hoy → perfecto)"],
        ],
        [
          mc(
            "¿Qué falla en «Ayer he visto una película»?",
            ["Ayer pide indefinido: vi.", "Falta un pronombre.", "Debe ser «había visto».", "Nada."],
            0,
            "«Ayer» es un tiempo terminado y pide el indefinido: Ayer vi una película. No falta ningún pronombre, «había visto» necesitaría otra acción pasada de referencia y la frase no está bien."
          ),
          fb("Completa.", "Hace un mes ___ a mi exnovio en el metro. (ver, yo)", "vi", "«Hace un mes» señala un momento terminado → indefinido: vi. «He visto» no puede ir con «hace…»."),
        ]
      ),
    ],
    [
      toEs("Hoy fui al mercado y he comprado fruta.", "Hoy he ido al mercado y he comprado fruta.", "«Hoy» incluye el presente: en España, perfecto en los dos verbos. Lo que no vale es mezclar tiempos con el mismo marcador.", ["Hoy fui al mercado y compré fruta."], "Corrige la frase."),
      toEs("Ayer he visto una película muy buena.", "Ayer vi una película muy buena.", "«Ayer» es un tiempo terminado y pide el indefinido: vi, no «he visto».", [], "Corrige la frase."),
      toEs("Este mes leí tres libros.", "Este mes he leído tres libros.", "«Este mes» no ha terminado: en España, pretérito perfecto (he leído), no indefinido; en gran parte de América también es correcto «leí».", [], "Corrige la frase (uso de España)."),
      toEs("En 2019 he vivido en Roma.", "En 2019 viví en Roma.", "Una fecha cerrada (2019) pide el indefinido: viví.", [], "Corrige la frase."),
      toEs("Nunca estuve en Japón.", "Nunca he estado en Japón.", "En España, «nunca» hasta ahora se expresa con el perfecto (he estado); en gran parte de América también es correcto «Nunca estuve en Japón».", [], "Corrige la frase (uso de España)."),
      ms(
        "¿Qué frases son correctas?",
        ["Esta semana ha llovido mucho.", "La semana pasada llovió mucho.", "La semana pasada ha llovido mucho.", "Esta semana llovió mucho el año pasado."],
        [0, 1],
        "«Esta semana» no ha terminado → pretérito perfecto (ha llovido); «la semana pasada» sí → indefinido (llovió). «La semana pasada ha llovido» mezcla marcador cerrado con perfecto, y «Esta semana… el año pasado» es contradictoria."
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
        "Recuerda la regla: un pasado antes de otro pasado",
        [
          "Recuerda la regla: el pluscuamperfecto (había, habías, había, habíamos, habíais, habían + participio) sitúa una experiencia antes de un momento del pasado. Por eso «nunca había…» cuenta que algo pasó por primera vez entonces: hasta ese día (el momento pasado), nunca había visto el mar (todo lo anterior).",
          "Solo cambia «haber»; el participio es invariable (-ado, -ido) y los irregulares son los de siempre: visto, hecho, dicho, escrito, puesto, vuelto, roto, abierto. Los pronombres van delante de «había»: nunca me había reído tanto.",
        ],
        [
          ["Hasta ese día, nunca había visto el mar.", "Until that day, I had never seen the sea. (visto: irregular)"],
          ["Cuando llegamos, la película ya había empezado.", "When we arrived, the film had already started. (ya + pluscuamperfecto)"],
          ["Mis abuelos nunca habían salido del pueblo.", "My grandparents had never left the village. (habían: ellos)"],
          ["¿Nunca te habías puesto un traje?", "You'd never worn a suit? (te delante de habías; puesto)"],
        ],
        [
          wo("Nunca había probado un plato tan picante.", "Nunca + había + participio: «probado» va justo detrás de «había», sin nada en medio.", "I had never tried such a spicy dish."),
          toEs("Nunca he montado a caballo.", "Hasta aquel verano, nunca había montado a caballo.", "Al situar la experiencia antes de un momento pasado (aquel verano), «he» pasa a «había».", [], "Cambia al pluscuamperfecto empezando con «Hasta aquel verano»."),
        ]
      ),
    ],
    [
      { type: "dictation", audio: "Antes de aquel viaje nunca había subido a un avión.", explanation: "Había + subido: la experiencia es anterior al viaje. «Había» se escribe con h y sin tilde." },
      { type: "dictation", audio: "Mis padres nunca habían oído esa canción.", explanation: "Habían (ellos) + oído, con tilde en la í para romper el diptongo." },
      { type: "dictation", audio: "Nunca nos habíamos reído tanto.", explanation: "El pronombre «nos» va delante de habíamos; reído lleva tilde, como oído." },
      fb("Escribe.", "Hasta entonces nunca ___ en público. (hablar, yo)", "había hablado", "Pluscuamperfecto de yo: había + participio regular -ado."),
      fb("Escribe.", "Mi hermana nunca ___ sola. (viajar)", "había viajado", "Mi hermana = ella: «había», igual que yo; el contexto aclara la persona."),
      fb("Escribe.", "Cuando abrí la puerta, alguien ya ___ la ventana. (romper)", "había roto", "La ventana se rompió antes de que yo abriera la puerta: pluscuamperfecto. Romper → «roto», participio irregular."),
      toEs("Ese día vimos una ballena por primera vez.", "Hasta ese día, nunca habíamos visto una ballena.", "Una primera vez se cuenta en negativo con «nunca + había»: «nunca habíamos visto». Ver → visto.", [], "Transforma la frase con «Hasta ese día, nunca…»."),
      toEs("Cuando llegué, mis amigos ya cenaron.", "Cuando llegué, mis amigos ya habían cenado.", "La cena ocurrió antes de mi llegada (otro pasado): pluscuamperfecto, «habían cenado».", [], "Corrige la frase."),
      toEs("Nunca había hacido un pastel tan grande.", "Nunca había hecho un pastel tan grande.", "Hacer tiene participio irregular: «hecho», nunca «hacido».", [], "Corrige la frase."),
      toEs("Nunca había me sentido tan cansado.", "Nunca me había sentido tan cansado.", "Los pronombres van delante de «había», no entre «había» y el participio.", ["Nunca me había sentido tan cansada."], "Corrige la frase."),
      toEs("I had never been so happy.", "Nunca había estado tan feliz.", "«Had never been» = nunca había estado (estar para un estado de ánimo).", ["Nunca había sido tan feliz."]),
      { type: "speak", prompt: "Cuenta en voz alta en español: «Before I came to Spain, I had never eaten paella.»", text: "Antes de venir a España, nunca había comido paella.", explanation: "Antes de + infinitivo marca el momento pasado; lo anterior va en pluscuamperfecto: nunca había comido." },
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
        [
          "Recuerda la regla: sin preposición, «que» sirve para personas y cosas (alguien que reparte cartas). Con preposición, la preposición va delante del relativo, nunca al final como en inglés: con quien / con el que (personas), en el que / donde (lugares), con el que (cosas). Si no hay sustantivo antes y hablas de una idea, usa «lo que».",
          "¿Por qué el artículo? En «en el que», el artículo repite el género y el número del sustantivo (un edificio en el que, una tienda en la que), igual que un pronombre.",
        ],
        [
          ["Un cartero es alguien que reparte cartas.", "A postman is someone who delivers letters. (sin preposición: que)"],
          ["Un amigo es alguien con quien puedes hablar.", "A friend is someone you can talk to. (con + persona: con quien / con el que)"],
          ["Lo que necesito es descansar.", "What I need is to rest. (una idea: lo que)"],
        ],
        [
          { ...fb("Define.", "Una panadería es una tienda ___ se vende pan.", "donde", "Lugar → donde / en la que."), altAnswers: ["en la que", "en que", "en la cual"] },
        ]
      ),
    ],
    [
      fb("Define.", "Un cocinero es una persona ___ prepara comida.", "que", "Sin preposición, el relativo es «que»: una persona que prepara comida."),
      { ...fb("Define.", "Un vecino es alguien con ___ compartes el edificio.", "quien", "Persona + preposición (también «el que»)."), altAnswers: ["el que"] },
      { ...fb("Define.", "Un hospital es un edificio en ___ se atiende a enfermos.", "el que", "Se atiende en un edificio: en + el que, concordando con «un edificio»."), altAnswers: ["que", "el cual"] },
      { ...fb("Define.", "Una llave es un objeto con ___ abres una puerta.", "el que", "Se abre con un objeto: con + el que, concordando con «un objeto»."), altAnswers: ["el cual"] },
      fb("Completa con un relativo.", "___ más me cuesta del español es el subjuntivo.", "Lo que", "Sin antecedente, «lo que» se refiere a una idea: Lo que más me cuesta…"),
      mc(
        "«Un jefe es la persona para ___ trabajas.»",
        ["la que", "que", "lo que", "donde"],
        0,
        "Se trabaja para alguien: la preposición va delante del relativo, y la persona se retoma con «la que»: para la que. «Que» solo pierde el artículo, «lo que» es para ideas y «donde» para lugares."
      ),
      toEs("A pharmacy is a place where medicines are sold.", "Una farmacia es un lugar donde se venden medicamentos.", "«Where» = donde; «are sold» = se venden, concordando con «medicamentos».", ["Una farmacia es un lugar en el que se venden medicamentos.", "Una farmacia es un sitio donde se venden medicinas."]),
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
        "Recuerda la regla: el verbo concuerda con la cosa",
        [
          "Recuerda la regla: para describir un proceso sin decir quién lo hace, se usa se + verbo en tercera persona. Lo importante es la cosa que recibe la acción, y el verbo concuerda con ella: se lava la aceituna, se lavan las aceitunas. No pongas «nosotros» ni «ellos»: el se ya dice que la persona no importa.",
          "Para costumbres del pasado, el mismo se con imperfecto: antes se recogían a mano.",
          "Lee el proceso: «En noviembre se recogen las aceitunas. Después se lavan y se llevan al molino. Allí se muelen y se obtiene una pasta. Luego se separa el aceite del agua. Finalmente, el aceite se guarda en depósitos.»",
        ],
        [
          ["En otoño se recoge la uva.", "In autumn the grapes are harvested. (la uva: singular)"],
          ["Las naranjas se exprimen en el momento.", "The oranges are squeezed on the spot. (plural)"],
          ["Antes el pan se hacía en casa.", "Bread used to be made at home. (costumbre pasada: imperfecto)"],
        ],
        [
          fb("Completa.", "En verano se ___ las almendras. (recoger)", "recogen", "El verbo concuerda con «las almendras» (plural): se recogen. La g pasa a j solo delante de a/o (recojo), no aquí."),
          toEs("Se lava la aceituna con agua fría.", "Se lavan las aceitunas con agua fría.", "Con se pasivo el verbo concuerda con la cosa: «las aceitunas» es plural → «se lavan».", [], "Cambia a «las aceitunas»."),
        ]
      ),
    ],
    [
      fb("Completa el proceso.", "Después se ___ y se llevan al molino. (lavar)", "lavan", "Siguen siendo las aceitunas (plural): se lavan."),
      fb("Completa el proceso.", "Allí se ___ las aceitunas. (moler)", "muelen", "Moler diptonga (o → ue) cuando el acento cae en la raíz, y va en plural por «las aceitunas»: se muelen."),
      fb("Completa el proceso.", "Se ___ una pasta. (obtener)", "obtiene", "Una pasta → singular. Obtener se conjuga como tener: obtiene."),
      fb("Completa el proceso.", "Luego se ___ el aceite del agua. (separar)", "separa", "El aceite → singular: se separa."),
      fb("Completa el proceso.", "Antes se ___ las aceitunas a mano. (recoger, imperfecto)", "recogían", "Costumbre del pasado en plural: imperfecto, se recogían."),
      mc(
        "«Hoy en día se ___ máquinas.»",
        ["usan", "usa", "usamos", "uso"],
        0,
        "En el se pasivo el verbo concuerda con el sustantivo: máquinas (plural) → se usan. «Se usa» no concuerda, y «usamos» o «uso» no van con este se."
      ),
      toEs("Recogemos la fruta en julio.", "La fruta se recoge en julio.", "Para quitar a la persona y centrarse en el proceso: se + tercera persona, concordando con «la fruta».", ["Se recoge la fruta en julio.", "En julio se recoge la fruta."], "Transforma la frase con se pasivo (sin «nosotros»)."),
      toEs("Hoy se embotella el aceite en la fábrica.", "Antes se embotellaba el aceite en casa.", "Una costumbre del pasado con se va en imperfecto: «se embotellaba».", ["Antes el aceite se embotellaba en casa."], "Cambia al pasado: empieza con «Antes» y termina con «en casa»."),
      toEs("En esta fábrica se envasa cien botellas por hora.", "En esta fábrica se envasan cien botellas por hora.", "El verbo concuerda con «cien botellas» (plural): se envasan.", [], "Corrige la frase."),
      toEs("Primero nosotros se lavan las aceitunas.", "Primero se lavan las aceitunas.", "Con se pasivo no hay sujeto personal: sobra «nosotros». El verbo concuerda con «las aceitunas».", ["Primero lavamos las aceitunas."], "Corrige la frase."),
      toEs("The oil is kept in large tanks.", "El aceite se guarda en depósitos grandes.", "Se pasivo concordando con «el aceite» (singular): se guarda.", ["Se guarda el aceite en depósitos grandes.", "El aceite se guarda en grandes depósitos."]),
      { type: "speak", prompt: "Explica en voz alta cómo se hace una tortilla: «First the potatoes are peeled, then they are fried and the eggs are added.»", text: "Primero se pelan las patatas, luego se fríen y se añaden los huevos.", explanation: "Cada verbo concuerda con su cosa: las patatas → se pelan, se fríen; los huevos → se añaden. En América: las papas." },
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
        "Recuerda la regla: escucha el orden",
        [
          "Recuerda la regla: persona antes que cosa (me lo, te la, nos los), y le/les se convierten en se delante de lo/la/los/las. Delante del verbo conjugado van separados (se lo he dicho); detrás de un infinitivo, un gerundio o un mandato afirmativo se escriben pegados en una sola palabra, casi siempre con tilde (contártelo, escribiéndotela, dáselas).",
          "En un dictado esto te ayuda a escribir: si oyes «dáselas», sabes que es una palabra y que lleva tilde en la primera a, porque el acento sigue donde estaba en «da».",
        ],
        [
          ["¿Me lo puedes repetir?", "Can you repeat it for me? (separados, delante de puedes)"],
          ["¿Puedes repetírmelo?", "Can you repeat it for me? (pegados al infinitivo, con tilde)"],
          ["Se las he devuelto esta mañana.", "I gave them back to her this morning. (le + las → se las)"],
        ],
        [
          { type: "dictation", audio: "No te la puedo prestar hoy.", explanation: "Te + la delante del verbo conjugado (puedo), en dos palabras separadas." },
          toEs("Te voy a contar la historia.", "Voy a contártela.", "La historia → la; pegados al infinitivo forman una palabra con tilde: «contártela». También: te la voy a contar.", ["Te la voy a contar."], "Sustituye «la historia» por un pronombre y pégalo al infinitivo."),
        ]
      ),
    ],
    [
      { type: "dictation", audio: "Se lo he contado todo a mi madre.", explanation: "Se (a mi madre) + lo, delante del auxiliar «he»: tres palabras separadas." },
      { type: "dictation", audio: "Estoy escribiéndotela ahora mismo.", explanation: "Gerundio + te + la en una sola palabra; la tilde en «biéndo» mantiene el acento del gerundio." },
      { type: "dictation", audio: "Dáselas a tu hermano, por favor.", explanation: "Mandato (da) + se + las, todo junto y con tilde en la primera a." },
      wo("Nos los trajeron ayer por la tarde.", "Nos + los delante del verbo conjugado; la persona va primero.", "They brought them to us yesterday afternoon."),
      toEs("¿Me lo puedes explicar?", "¿Puedes explicármelo?", "Los pronombres pueden ir delante del verbo conjugado o pegados al infinitivo: «explicármelo», con tilde.", [], "Transforma la frase pegando los pronombres al infinitivo."),
      toEs("Me traen la compra esta tarde.", "Me la traen esta tarde.", "La compra → la; «me» va delante: «me la traen». Persona primero, cosa después.", [], "Sustituye «la compra» por un pronombre."),
      toEs("Estoy leyendole lo a mi hijo.", "Estoy leyéndoselo a mi hijo.", "Con gerundio, los pronombres van pegados en una palabra y le → se: «leyéndoselo», con tilde. También: se lo estoy leyendo.", ["Se lo estoy leyendo a mi hijo."], "Corrige la frase."),
      toEs("Dame lo, por favor.", "Dámelo, por favor.", "En afirmativo los pronombres van pegados al verbo, en una sola palabra (da + me + lo), y la palabra, esdrújula, necesita tilde: «dámelo».", [], "Corrige la frase."),
      toEs("Can you explain it to me?", "¿Me lo puedes explicar?", "Me + lo delante del verbo conjugado: ¿Me lo puedes explicar? (o ¿Puedes explicármelo?)", ["¿Puedes explicármelo?", "¿Me lo explicas?"]),
      toEs("They're sending it to us tomorrow (the package).", "Nos lo mandan mañana.", "Nos + lo (el paquete); el presente puede expresar un futuro cercano: nos lo mandan mañana.", ["Nos lo envían mañana.", "Nos lo van a mandar mañana."]),
    ]
  ),
  L(
    "el-autobus-equivocado",
    "b1d-rep-combinados-mezcla-imperativo",
    "Circuito acumulativo: pronombres combinados y mandatos",
    "Repaso espaciado: mandatos de tú, usted, nosotros y vosotros con dos pronombres (dímelo, dígamelo, digámoselo, decídmelo).",
    "6 min",
    [
      sec(
        "Recuerda la regla: ¿pegados o delante?",
        [
          "Recuerda la regla: en el mandato afirmativo, los dos pronombres van pegados al final del verbo, primero la persona y luego la cosa (dímelo, dígamelo, decídmelo). En el negativo, van delante del verbo y el verbo pasa al subjuntivo (no me lo digas, no me lo diga, no me lo digáis). Le y les se convierten en «se» delante de lo, la, los, las (dáselo, no se lo des).",
          "¿Por qué la tilde? Al pegar sílabas, la palabra se alarga pero el acento se queda donde estaba: di-me-lo → dí-me-lo, explica → explí-ca-me-la. Y con nosotros, «digamos» pierde la -s delante de «se» para no repetirla: digámoselo, no «digámosselo».",
        ],
        [
          ["Dígamelo claramente.", "Tell me clearly. (usted, afirmativo: pegados)"],
          ["No se lo cuentes a tu jefe.", "Don't tell your boss. (tú, negativo: delante + subjuntivo)"],
          ["Preguntémoselo al conductor.", "Let's ask the driver. (nosotros: pierde la -s delante de se)"],
        ],
        [
          fb("Estación 1.", "(tú, enviar a mí la foto) ___.", "Envíamela", "Afirmativo de tú: envía + me + la, todo junto y con tilde para conservar el acento: «envíamela»."),
          toEs("Cuéntaselo.", "No se lo cuentes.", "En negativo, «se lo» sale delante del verbo y el verbo pasa al subjuntivo: «no se lo cuentes».", [], "Cambia al negativo."),
        ]
      ),
    ],
    [
      fb("Estación 1.", "(usted, explicar a mí la idea) ___.", "Explíquemela", "Afirmativo de usted: explique + me + la, pegados y con tilde."),
      fb("Estación 2.", "(vosotros, explicar a mí la idea) ___.", "Explicádmela", "Afirmativo de vosotros: explicad + me + la, pegados y con tilde en la a."),
      fb("Estación 2.", "(tú, no explicar a él la idea) No ___.", "se la expliques", "Negativo: los pronombres delante y el verbo en subjuntivo; le + la → «se la»."),
      fb("Estación 3.", "(nosotros, dar a ellos el regalo) ___.", "Démoselo", "Demos + se + lo: se pierde una -s delante de «se» y se añade tilde."),
      fb("Estación 3.", "(usted, no dar a ellos el regalo) No ___.", "se lo dé", "Negativo de usted: «se lo» delante del subjuntivo «dé» (con tilde para distinguirlo de la preposición «de»)."),
      mc(
        "(vosotros; don't tell me that) «No ___.»",
        ["me lo digáis", "decídmelo", "me lo decid", "lo me digáis"],
        0,
        "En el negativo los pronombres van delante y el verbo en subjuntivo: no me lo digáis. «Decídmelo» es afirmativo, «me lo decid» mezcla las formas y «lo me» invierte el orden."
      ),
      toEs("Bring it to me, please (tú, the book).", "Tráemelo, por favor.", "Afirmativo de tú: trae + me + lo, pegados y con tilde: tráemelo."),
      toEs("No se la vendas.", "Véndesela.", "En afirmativo los pronombres se pegan al final, el verbo vuelve a la forma de mandato («vende») y se añade tilde: «véndesela».", [], "Cambia al afirmativo."),
      toEs("Dígaselo.", "Díselo.", "Al pasar de usted a tú, el verbo cambia (diga → di) pero los pronombres siguen pegados en el mismo orden: «díselo».", [], "Cambia la frase a tú."),
      toEs("Dale el libro a tu hermano.", "Dáselo a tu hermano.", "El libro → «lo». «Le» no puede ir delante de «lo»: se convierte en «se». Y al pegar dos sílabas hace falta tilde: «dáselo».", [], "Sustituye «el libro» por un pronombre."),
      toEs("No dímelo ahora.", "No me lo digas ahora.", "En negativo los pronombres no se pegan: van delante del verbo, y el verbo pasa al subjuntivo, «digas».", [], "Corrige la frase."),
      toEs("Lo me explique otra vez, por favor.", "Explíquemelo otra vez, por favor.", "En el mandato afirmativo los pronombres van pegados al final, y primero la persona (me) y luego la cosa (lo).", ["Explíquemelo de nuevo, por favor."], "Corrige la frase."),
      { type: "speak", prompt: "Di en voz alta (tú; it = la carta): «Bring it to me, but don't show it to her.»", text: "Tráemela, pero no se la enseñes.", explanation: "Afirmativo: pegados (tráemela); negativo: delante + subjuntivo, y le + la → «se la»." },
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
        "Recuerda la regla: los tres errores típicos",
        [
          "Recuerda la regla. Afirmativo: infinitivo sin -r + -d (traed, cerrad). Negativo: no + subjuntivo (no lleguéis), nunca no + forma en -d. Reflexivo afirmativo: la -d cae delante de os (sentad + os → sentaos), salvo idos.",
          "Los tres errores más frecuentes son justo esos: usar la forma en -d en el negativo (no llegad), escribir un participio en vez del mandato (sentados) y usar el presente para prohibir (no os olvidáis). En el habla también se oye el infinitivo (sentaros), pero en la lengua cuidada se evita.",
          "Lee el mensaje del delegado: «Chicos, traed los apuntes mañana. No llegad tarde. Sentados en la primera fila. Y no os olvidáis del trabajo.» Tiene tres errores.",
        ],
        [
          ["Traed los apuntes mañana.", "Bring your notes tomorrow. (afirmativo: -d)"],
          ["No faltéis a clase el viernes.", "Don't miss class on Friday. (negativo: subjuntivo)"],
          ["Callaos, que empieza la clase.", "Be quiet, class is starting. (callad + os: sin -d)"],
        ],
        [
          mc(
            "¿Qué falla en «No llegad tarde»?",
            ["El negativo usa subjuntivo: no lleguéis.", "Falta os.", "Debe ser «llegados».", "Nada."],
            0,
            "El mandato negativo de vosotros usa el subjuntivo: no lleguéis. «Llegad» solo sirve en afirmativo. No falta «os» (llegar no es reflexivo) y «llegados» es un participio."
          ),
          toEs("Traed los diccionarios.", "No traigáis los diccionarios.", "Negativo de vosotros: no + subjuntivo. Traer → traigo → «traigáis».", [], "Cambia al negativo."),
        ]
      ),
    ],
    [
      toEs("No llegad tarde.", "No lleguéis tarde.", "El negativo de vosotros usa el subjuntivo: no lleguéis (llegar: g → gu).", undefined, "Corrige la frase."),
      toEs("Sentados en la primera fila.", "Sentaos en la primera fila.", "El reflexivo pierde la -d: sentad + os → sentaos; «sentados» es un participio.", undefined, "Corrige la frase."),
      toEs("Olvidaos del trabajo.", "No os olvidéis del trabajo.", "En negativo, «os» va delante y el verbo pasa al subjuntivo: «no os olvidéis», no «olvidáis».", [], "Cambia al negativo."),
      toEs("Vete ya, que es tarde.", "Idos ya, que es tarde.", "Irse conserva la -d en vosotros: «idos» (en el habla coloquial se oye «iros», pero se recomienda «idos»).", ["Iros ya, que es tarde."], "Cambia la frase a vosotros."),
      toEs("Levántate, que son las siete.", "Levantaos, que son las siete.", "Levantad + os → «levantaos» (sin -d); «levantados» sería un participio.", [], "Cambia la frase a vosotros."),
      ms(
        "¿Qué formas son correctas?",
        ["callaos", "no os calléis", "callados (mandato)", "no callad"],
        [0, 1],
        "El afirmativo reflexivo pierde la -d (callad + os → callaos) y el negativo usa subjuntivo (no os calléis). «Callados» es un participio, y «no callad» usa la forma afirmativa en una negación."
      ),
      toEs("No os sentéis al fondo.", "Sentaos delante.", "Afirmativo reflexivo: sentad + os → «sentaos», con el pronombre pegado y sin -d.", [], "Cambia al afirmativo: que se sienten delante."),
      toEs("Apúntate al grupo de estudio.", "Apuntaos al grupo de estudio.", "De tú a vosotros: apunta + te → apúntate; apuntad + os → «apuntaos».", [], "Cambia a vosotros."),
      toEs("No copies en el examen.", "No copiéis en el examen.", "De tú a vosotros en negativo: solo cambia la terminación del subjuntivo, copies → «copiéis».", [], "Cambia a vosotros."),
      { type: "speak", prompt: "Eres el delegado. Graba un audio para el grupo: «Bring your notes, sit in the first row and don't be late.» (vosotros)", text: "Traed los apuntes, sentaos en la primera fila y no lleguéis tarde.", explanation: "Traed (afirmativo con -d), sentaos (reflexivo sin -d), no lleguéis (negativo con subjuntivo)." },
    ]
  ),
  L(
    "la-banda-de-garaje",
    "b1d-rep-mezcla-consultorio",
    "Práctica mezclada: el consultorio sentimental",
    "Repaso espaciado: creer / no creer que, consejos con condicional (yo en su lugar…) y mandatos con pronombres en una carta sentimental.",
    "8 min",
    [
      sec(
        "Recuerda las reglas del consultorio",
        [
          "Una respuesta de consultorio combina tres herramientas. 1) Opinión: creo que + indicativo (lo afirmas); no creo que / dudo que / es posible que + subjuntivo (no lo afirmas). 2) Consejo: yo en su lugar / yo que usted + condicional. 3) Orden directa: imperativo de usted con los pronombres pegados (pregúnteselo) o delante si es negativo (no se lo pregunte).",
          "Lee la carta y la respuesta; luego responde tú a cartas nuevas.",
          "«Mi novio nunca me ha presentado a sus padres. Creo que se avergüenza de mí. ¿Qué haría usted?» Respuesta: «No creo que se avergüence. Es posible que tenga miedo. Yo en su lugar, hablaría con él. Pregúnteselo directamente.»",
        ],
        [
          ["Yo en su lugar, hablaría con él.", "If I were you, I'd talk to him. (consejo → condicional)"],
          ["Pregúnteselo directamente.", "Ask him directly. (usted + se + lo, pegados)"],
        ],
        [
          mc(
            "¿Por qué la consejera escribe «No creo que se avergüence» y la lectora «Creo que se avergüenza»?",
            ["La lectora lo afirma (indicativo); la consejera lo niega, y la negación de creer pide subjuntivo.", "Porque la consejera habla de usted.", "Porque avergonzarse cambia de significado.", "Porque una frase está en pasado."],
            0,
            "Creer que afirma algo → indicativo (se avergüenza). No creer que expresa que no lo consideras real → subjuntivo (se avergüence). No tiene que ver con usted ni con el tiempo."
          ),
          { ...fb("Completa la carta nueva.", "Mi mejor amiga nunca me ___ por mi cumpleaños. (llamar, perfecto)", "ha llamado", "Nunca + experiencia hasta hoy → pretérito perfecto. En gran parte de América también se dice «nunca me llamó»."), altAnswers: ["llamó"] },
        ]
      ),
    ],
    [
      fb("Completa (la lectora opina).", "Creo que mi amiga ___ celosa de mi novio. (estar, presente)", "está", "Creer que afirmativo → indicativo: está. Celosa es un estado, por eso estar."),
      fb("Completa (la consejera duda).", "No creo que su amiga ___ celosa. (estar)", "esté", "No creer que → subjuntivo: estar → esté."),
      fb("Completa.", "Es posible que ___ problemas en casa. (tener, ella)", "tenga", "Es posible que siempre pide subjuntivo: tener → tenga (de tengo)."),
      fb("Completa el consejo.", "Yo en su lugar, ___ un poco. (esperar)", "esperaría", "Consejo: yo en su lugar + condicional (infinitivo + -ía): esperaría."),
      fb("Completa.", "Si quiere saber qué pasa, ___ a ella. (preguntar + se + lo, usted)", "pregúnteselo", "Imperativo de usted + le (→ se) + lo, todo pegado y con tilde: pregúnteselo."),
      mc(
        "«¿Qué ___ usted en mi situación?»",
        ["haría", "hará", "hacía", "haga"],
        0,
        "Para pedir consejo sobre una situación imaginada se usa el condicional: ¿Qué haría usted? «Hará» es futuro, «hacía» es imperfecto y «haga» es subjuntivo."
      ),
      mc(
        "Una lectora escribe: «Mi hermano me pide dinero cada mes.» ¿Qué respuesta es correcta?",
        ["Yo en su lugar, no se lo prestaría más.", "Yo en su lugar, no se lo presto más.", "Yo en su lugar, no le lo prestaría más.", "Yo en su lugar, no se lo prestara más."],
        0,
        "Consejo → condicional (prestaría). El dinero → lo y a su hermano → le, que pasa a se: se lo. «Presto» es presente y «le lo» no existe."
      ),
      toEs(
        "Creo que te dice la verdad.",
        "No creo que te diga la verdad.",
        "Al negar creer, el verbo pasa a subjuntivo: dice → diga (de digo).",
        [],
        "Cambia a la forma negativa (No creo que...)."
      ),
      toEs(
        "Pregúnteselo.",
        "No se lo pregunte.",
        "En negativo los pronombres salen del verbo y van delante, y la tilde desaparece: no se lo pregunte.",
        [],
        "Cambia el mandato al negativo."
      ),
      toEs("«Dudo que su novio la engaña.»", "Dudo que su novio la engañe.", "Dudar que pide subjuntivo: engañar → engañe.", [], "Corrige la frase de la consejera."),
      toEs("«Yo en su lugar, hablo con él esta noche.»", "Yo en su lugar, hablaría con él esta noche.", "Yo en su lugar va con condicional, porque es una situación imaginada: hablaría.", ["Yo en su lugar hablaría con él esta noche."], "Corrige la frase de la consejera."),
      toEs("Don't worry; talk to him calmly.", "No te preocupes; habla con él con calma.", "Negativo con subjuntivo (no te preocupes) + afirmativo de tú (habla).", ["No se preocupe; hable con él con calma.", "No te preocupes, habla con él tranquilamente."]),
    ]
  ),
  L(
    "los-libros-para-rosa",
    "b1d-rep-mezcla-ronda-final",
    "Ronda rápida: Intermedio en diez segundos",
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
      { ...fb("Rápido.", "La ciudad en ___ vivo es pequeña.", "la que", "Se vive en la ciudad: en + la que."), altAnswers: ["que", "la cual", "donde"] },
      fb("Rápido.", "Se ___ pisos. (alquilar)", "alquilan", "Plural."),
      fb("Rápido.", "¿El libro? ___ di a Luis.", "Se lo", "Le (a Luis) → se delante de lo (el libro): se lo di."),
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
        "«Es posible que» pide subjuntivo; el de haber es haya. «Hay» es indicativo, «haiga» es una forma popular incorrecta y «habría» es condicional."
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
        "«No creer que» expresa duda → subjuntivo (sea); «me parece que» afirmativo → indicativo (es). «Me parece que sea» y «Dudo que es» cambian el modo al revés."
      ),
      toEs("I want everyone to vote today.", "Quiero que todos voten hoy.", "Querer que + otro sujeto → subjuntivo: voten.", ["Quiero que hoy vote todo el mundo.", "Quiero que todo el mundo vote hoy."]),
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
        "Dos construcciones, un subjuntivo",
        [
          "Recuerda la regla: la misma emoción se dice de dos maneras. Con «alegrarse de» el sujeto es la persona que siente (yo me alegro, mis padres se alegran), y el verbo pide la preposición «de»: me alegro de que vengas. Con «alegrar» la frase funciona como «gustar»: lo que alegra es el hecho (que vengas), así que el verbo va siempre en singular y la persona va con me, te, le, nos, os, les: me alegra que vengas, a mis padres les alegra que vengas.",
          "En los dos casos el segundo verbo va en subjuntivo, porque expresa un hecho visto a través de una emoción. Lo mismo pasa con sorprenderse de / sorprender y preocuparse por / preocupar.",
        ],
        [
          ["Me alegro de que estés mejor.", "I'm glad you're better. (alegrarse de: yo me alegro)"],
          ["A mi madre le alegra que la llamemos.", "It makes my mother happy that we call her. (como gustar: le alegra)"],
          ["Nos sorprende que no haya nadie.", "It surprises us that there's nobody here. (singular: lo que sorprende es el hecho)"],
        ],
        [
          fb("Completa con la preposición que falta.", "Mis tíos se alegran ___ que vengas a la boda.", "de", "El verbo pronominal «alegrarse» lleva la preposición de: se alegran de que…"),
          toEs("Me alegro de que hayas aprobado.", "Me alegra que hayas aprobado.", "Con «alegrar» (como gustar) desaparece la preposición «de»; el subjuntivo se queda.", [], "Cambia a la construcción con «alegrar» (sin «de»)."),
        ]
      ),
    ],
    [
      fb("Par A.", "Nos alegramos de que ___ bien. (estar, vosotros)", "estéis", "Alegrarse de que + subjuntivo: estar → «estéis»."),
      fb("Par B.", "Nos alegra que ___ bien. (estar, vosotros)", "estéis", "Alegrar que + subjuntivo: la construcción cambia, pero el subjuntivo es el mismo."),
      fb("Par A.", "Mis padres se alegran de que ___ un trabajo nuevo. (tener, yo)", "tenga", "Alegrarse de que + subjuntivo; tener → tengo → «tenga»."),
      fb("Par B.", "A mis padres les ___ que tenga un trabajo nuevo. (alegrar)", "alegra", "Con «alegrar» lo que alegra es el hecho («que tenga…»), así que el verbo va en singular aunque la persona sea plural: les alegra."),
      mc(
        "¿Qué frase es incorrecta?",
        ["Me alegro que vengas.", "Me alegro de que vengas.", "Me alegra que vengas.", "Me alegra mucho que vengas."],
        0,
        "«Alegrarse» lleva la preposición «de»: me alegro de que vengas. Por eso «Me alegro que vengas» es la incorrecta según la norma. Con «alegrar» (me alegra que…) no hace falta «de»."
      ),
      toEs("¿Te alegra que vuelva Marta?", "¿Te alegras de que vuelva Marta?", "Con el verbo pronominal la persona es el sujeto (tú te alegras) y hace falta «de»; el subjuntivo «vuelva» no cambia.", [], "Cambia a la construcción con «alegrarse de»."),
      toEs("A mis abuelos les alegran que los visitemos.", "A mis abuelos les alegra que los visitemos.", "El sujeto de «alegrar» es «que los visitemos», una frase: el verbo va en singular, «alegra».", ["Mis abuelos se alegran de que los visitemos."], "Corrige la frase."),
      toEs("Me alegra de que te guste el piso.", "Me alegra que te guste el piso.", "Con «alegrar» (me alegra) no hay preposición; el «de» solo va con «alegrarse» (me alegro de que).", ["Me alegro de que te guste el piso."], "Corrige la frase."),
      toEs("Nos sorprende que el tren llega puntual.", "Nos sorprende que el tren llegue puntual.", "Una emoción + que pide subjuntivo: «llegue» (g → gu delante de e).", [], "Corrige la frase."),
      toEs("We're glad you came to the party. (tú)", "Nos alegra que hayas venido a la fiesta.", "«Nos alegra que» expresa emoción → subjuntivo. Como la venida ya ocurrió, se usa el perfecto de subjuntivo: hayas venido.", ["Nos alegramos de que hayas venido a la fiesta.", "Nos alegra que vinieras a la fiesta.", "Nos alegramos de que vinieras a la fiesta.", "Nos alegra que vinieses a la fiesta."]),
      { type: "speak", prompt: "Tu amiga te cuenta que ha encontrado trabajo. Responde en voz alta de las dos maneras: «I'm glad you've found a job.»", text: "Me alegro de que hayas encontrado trabajo. Me alegra que hayas encontrado trabajo.", explanation: "Alegrarse de que / alegrar que: con o sin «de», el mismo subjuntivo (perfecto, porque ya ha ocurrido)." },
    ]
  ),
  L(
    "el-lienzo-en-blanco",
    "b1d-rep-ojala-impersonales-final",
    "Circuito acumulativo: ojalá y expresiones impersonales",
    "Repaso espaciado: ojalá y valoraciones con subjuntivo frente a constataciones (es cierto, es evidente) con indicativo.",
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
      fb("Estación 2.", "Es raro que Ana no ___ el teléfono. (coger)", "coja", "g → j. Ojo: coger es neutro en España, pero en México, Argentina y buena parte de Latinoamérica es vulgar; allí se dice tomar o agarrar."),
      fb("Estación 2.", "Es evidente que Ana no ___ el teléfono. (coger)", "coge", "Constatación. Ojo: coger es neutro en España, pero en México, Argentina y buena parte de Latinoamérica es vulgar; allí se dice tomar o agarrar."),
      fb("Estación 3.", "Es necesario que ___ los formularios hoy. (entregar, ustedes)", "entreguen", "g → gu."),
      fb("Estación 3.", "Es cierto que el plazo ___ hoy. (terminar)", "termina", "Constatación."),
      mc(
        "«Es una suerte que ___ tan cerca.» (vivir, vosotros)",
        ["viváis", "vivís", "vivir", "viviréis"],
        0,
        "«Es una suerte que» valora un hecho y pide subjuntivo: viváis. «Vivís» y «viviréis» son indicativo, y «vivir» es infinitivo."
      ),
      toEs("It's strange that the bus hasn't come.", "Es raro que el autobús no haya venido.", "«Es raro que» → subjuntivo; «hasn't come» pide el perfecto de subjuntivo: haya venido (también se oye «no venga», en presente).", ["Es raro que no haya venido el autobús.", "Es raro que el autobús no haya llegado.", "Es raro que no haya llegado el autobús.", "Es raro que no venga el autobús.", "Es raro que el autobús no venga.", "Es raro que el autobús no llegue."]),
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
        "Recuerda la regla: sí → forma de «él», no → subjuntivo",
        [
          "Recuerda la regla: el mandato afirmativo de tú coincide con la forma de «él» del presente (usa, abre, cierra), salvo ocho irregulares cortos: pon, haz, di, sal, ven, ten, ve, sé. El negativo es siempre no + subjuntivo: no cierres, no des, no pongas.",
          "Los pronombres siguen la misma lógica: en el afirmativo van pegados detrás (déjala, ponte) y suele hacer falta tilde para conservar el acento; en el negativo van delante del verbo, como con cualquier verbo conjugado (no la dejes, no te preocupes).",
          "Un amigo se queda en tu casa una semana. Vas a darle tus reglas.",
        ],
        [
          ["Usa la toalla azul.", "Use the blue towel. (usa = forma de «él» de usar)"],
          ["Ponte cómodo.", "Make yourself comfortable. (pon es irregular; te va pegado)"],
          ["No cierres la puerta con llave.", "Don't lock the door. (negativo: no + subjuntivo, e → ie)"],
          ["¿Las llaves? Déjalas en la entrada y no las pierdas.", "The keys? Leave them in the hall and don't lose them. (pronombre detrás en el sí, delante en el no)"],
        ],
        [
          mc(
            "Tu invitado pregunta si puede usar la lavadora. «Sí, claro, ___ cuando quieras.»",
            ["úsala", "la usa", "la uses", "úsela"],
            0,
            "Afirmativo de tú con pronombre: usa + la → «úsala», pegado y con tilde. «La uses» solo sirve detrás de «no»; «úsela» es de usted y «la usa» es una afirmación (él la usa)."
          ),
          toEs("Enciende la radio por la mañana.", "No enciendas la radio por la mañana.", "El negativo de tú se forma con el subjuntivo: enciende → no enciendas (el diptongo ie se mantiene). «No enciende» sería una afirmación sobre otra persona.", [], "Cambia al negativo."),
        ]
      ),
    ],
    [
      fb("Completa con el mandato de tú.", "Si sales, ___ las luces. (apagar)", "apaga", "Afirmativo de tú = forma de «él» del presente: apaga. «Apagues» solo va detrás de «no»."),
      fb("Completa con el mandato de tú.", "No le ___ de comer al gato, que ya ha cenado. (dar)", "des", "Negativo de tú: no + subjuntivo. Dar → «des» (sin tilde, a diferencia de «dé»)."),
      fb("Completa con el mandato de tú.", "Si tienes hambre, ___ algo de la nevera. (servirse)", "sírvete", "Servir cambia e → i (sirve) y el pronombre se pega detrás: «sírvete», con tilde porque el acento queda en la antepenúltima sílaba."),
      toEs("Deja la llave debajo del felpudo.", "Déjala debajo del felpudo.", "En el afirmativo el pronombre se pega al verbo: deja + la → «déjala». La tilde mantiene el acento en «dé».", [], "Sustituye «la llave» por un pronombre."),
      toEs("Ponte las zapatillas en casa.", "No te pongas las zapatillas en casa.", "Negativo: el pronombre «te» sale delante y «pon» pasa al subjuntivo «pongas» (de la forma yo «pongo»).", [], "Cambia al negativo."),
      toEs("No te sientes en ese sillón.", "Siéntate en ese sillón.", "Al pasar al afirmativo, «te» se pega detrás y la raíz recupera la forma de «él»: se sienta → «siéntate», con tilde.", [], "Cambia al afirmativo."),
      toEs("No toca el termostato, que está bien así.", "No toques el termostato, que está bien así.", "Detrás de «no» el mandato de tú va en subjuntivo: «no toques» (c → qu delante de e). «No toca» describe lo que hace otra persona.", [], "Corrige la frase."),
      toEs("Hace la cama antes de irte.", "Haz la cama antes de irte.", "Hacer es uno de los ocho imperativos irregulares de tú: «haz». «Hace» es el presente de él.", [], "Corrige la frase."),
      toEs("¿Las plantas? No riégalas hoy, que ya las regué yo.", "¿Las plantas? No las riegues hoy, que ya las regué yo.", "En el negativo el pronombre nunca se pega: va delante del subjuntivo, «no las riegues» (g → gu delante de e).", [], "Corrige la frase."),
      mc(
        "«Si quieres ver el mercado, ___ temprano.» (salir, tú)",
        ["sal", "sale", "salgas", "salga"],
        0,
        "Salir tiene imperativo irregular de tú: «sal». «Sale» es el presente de él, «salgas» es el subjuntivo del negativo (no salgas) y «salga» es de usted."
      ),
      { type: "speak", prompt: "Dilo en voz alta en español: «Make yourself at home and don't worry about anything.»", text: "Estás en tu casa; no te preocupes por nada.", explanation: "«Estás en tu casa» es la fórmula fija para acoger a alguien. El negativo de tú usa subjuntivo con el pronombre delante: no te preocupes." },
    ]
  ),
  L(
    "la-playa-despues-de-la-tormenta",
    "b1d-rep-condicional-si-habla",
    "Preguntas y respuestas: ¿qué harías tú? (repaso)",
    "Repaso espaciado: el condicional para hablar de lo que harías.",
    "6 min",
    [
      sec(
        "Recuerda la regla: el condicional para imaginar",
        [
          "Recuerda la regla: para hablar de lo que harías en una situación imaginaria se usa el condicional: infinitivo completo + -ía, -ías, -ía, -íamos, -íais, -ían (viviría, leerías, estudiaríamos). Las terminaciones son las mismas para todos los verbos.",
          "Los irregulares usan la misma raíz que el futuro: hacer → haría, decir → diría, poner → pondría, salir → saldría, tener → tendría, poder → podría, querer → querría, saber → sabría, venir → vendría. ¿Por qué no el futuro o el imperfecto? «Haré» es un plan real y «hacía» una costumbre del pasado; a una pregunta imaginaria (¿qué harías?) se responde con lo imaginado: «haría».",
        ],
        [
          ["Viviría cerca del mar.", "I'd live near the sea. (vivir + -ía)"],
          ["—¿Qué harías con más tiempo libre? —Leería más.", "\"What would you do with more free time?\" \"I'd read more.\" (pregunta y respuesta en condicional)"],
          ["Nunca saldría de casa sin desayunar.", "I'd never leave home without breakfast. (salir → saldría)"],
        ],
        [
          fb("Responde.", "—¿Vendrías conmigo a Japón? —Sí, ___ encantada. (venir)", "vendría", "«Venir» es irregular y usa la raíz del futuro (vendr-) + -ía: «vendría»."),
          toEs("Viajo a Perú.", "Con más dinero, viajaría a Perú.", "Para un sueño o una situación imaginaria, el presente pasa a condicional: viajar + -ía, «viajaría».", ["Con más dinero viajaría a Perú.", "Con más dinero, viajaría al Perú."], "Cambia la frase al condicional para hablar de un sueño: empieza con «Con más dinero…»."),
        ]
      ),
    ],
    [
      fb("Responde.", "—¿Dónde vivirías? —___ en una isla. (vivir)", "Viviría", "Pregunta imaginaria → respuesta en condicional: vivir + -ía, «viviría»."),
      fb("Responde.", "—¿Qué estudiarías? —___ Arquitectura. (estudiar)", "Estudiaría", "Condicional regular: el infinitivo entero + -ía, «estudiaría»."),
      fb("Responde.", "—¿Adónde irías de vacaciones? —___ a Chile. (ir)", "Iría", "«Ir» es regular en el condicional: ir + -ía, «iría»."),
      fb("Responde.", "—¿Qué le dirías a tu yo de quince años? —Le ___: «¡Relájate!» (decir)", "diría", "«Decir» usa la raíz irregular dir- (como el futuro diré): «diría»."),
      fb("Responde.", "—¿Cuántos hijos querrías tener? —___ dos. (querer)", "Querría", "«Querer» pierde la e del infinitivo: querr- + -ía, «querría»."),
      fb("Responde.", "—¿Qué harías en tu último día? —___ una gran fiesta. (hacer)", "Haría", "«Hacer» usa la raíz har- (como haré): «haría»."),
      toEs("I would never live in a big city.", "Nunca viviría en una ciudad grande.", "«Would» para algo imaginado → condicional: viviría.", ["No viviría nunca en una ciudad grande.", "Nunca viviría en una gran ciudad."]),
      toEs("Nosotros vivimos en el centro.", "Nosotros viviríamos en el centro.", "Para una situación imaginaria, el presente pasa a condicional: vivir + -íamos, «viviríamos».", ["Viviríamos en el centro."], "Cambia la frase al condicional (una situación imaginaria)."),
      toEs("Mi hermana hace la cena.", "Mi hermana haría la cena.", "«Hacer» es irregular en el condicional: har- + -ía, «haría».", [], "Cambia la frase al condicional."),
      toEs("Con un millón, compraré una casa en la playa.", "Con un millón, compraría una casa en la playa.", "«Con un millón» es una situación imaginaria: condicional, «compraría». «Compraré» sería un plan real.", [], "Corrige la frase."),
      toEs("Con más tiempo, hacería más deporte.", "Con más tiempo, haría más deporte.", "«Hacer» tiene raíz irregular en el condicional: har- + -ía, «haría». No se forma a partir del infinitivo.", [], "Corrige la frase."),
      toEs("Yo en tu lugar no decería nada.", "Yo en tu lugar no diría nada.", "«Decir» usa la raíz dir-: «diría». No se forma a partir del infinitivo.", ["Yo, en tu lugar, no diría nada."], "Corrige la frase."),
      { type: "speak", prompt: "Di en voz alta: «With more time, I'd learn to play the guitar and I'd go out more.»", text: "Con más tiempo, aprendería a tocar la guitarra y saldría más.", explanation: "Situación imaginaria: aprendería (regular) y saldría (raíz irregular saldr-)." },
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
        "Recuerda la regla: la condición no cambia, el resultado sí",
        [
          "Recuerda la regla: en una condición real, la parte del «si» va siempre en presente de indicativo, nunca en futuro ni en subjuntivo (si llueve, no «si lloverá» ni «si llueva»). Lo que cambia es el resultado, según lo que quieras decir:",
          "presente para una costumbre o un plan seguro (si llueve, nos quedamos en casa); futuro para una predicción (si llueve, nos quedaremos en casa); mandato para una instrucción (si llueve, quedaos en casa).",
        ],
        [
          ["Si llueve, nos quedamos en casa.", "If it rains, we stay at home. (costumbre: presente)"],
          ["Si salgo pronto, te llamaré.", "If I leave early, I'll call you. (predicción: futuro)"],
          ["Si te pierdes, pregunta en la estación.", "If you get lost, ask at the station. (instrucción: mandato)"],
        ],
        [
          fb("Versión futuro.", "Si nieva, ___ en el hotel. (quedarse, nosotros, futuro)", "nos quedaremos", "Predicción: si + presente (nieva), futuro en el resultado (nos quedaremos)."),
          toEs("Si tienes frío, te pones el abrigo.", "Si tienes frío, ponte el abrigo.", "Para dar una instrucción, el resultado pasa a mandato: pon + te → «ponte». La parte del «si» no cambia.", [], "Cambia el resultado a una instrucción (mandato de tú)."),
        ]
      ),
    ],
    [
      fb("Versión presente.", "Si hace sol, ___ a la playa. (ir, nosotros)", "vamos", "Plan seguro o costumbre: presente en el resultado, «vamos»."),
      fb("Versión futuro.", "Si hace sol, ___ a la playa. (ir, nosotros, futuro)", "iremos", "Predicción: futuro, «iremos»."),
      fb("Versión mandato.", "Si hace sol, ___ a la playa. (ir, vosotros)", "id", "Instrucción a un grupo: mandato de vosotros, «id» (ir sin -r + -d)."),
      fb("Versión mandato.", "Si tienes preguntas, ___. (llamarme, tú)", "llámame", "Mandato de tú + me pegado, con tilde: «llámame»."),
      mc(
        "«Si ___ el partido, lo celebraremos.»",
        ["ganamos", "ganaremos", "ganemos", "ganábamos"],
        0,
        "Tras «si» condicional va el presente de indicativo: si ganamos. «Ganaremos» (futuro) y «ganemos» (subjuntivo) nunca van tras si, y «ganábamos» es pasado."
      ),
      toEs("Si me llamas, te lo explico.", "Si me llamas, te lo explicaré.", "Para hacer una predicción o una promesa, solo el resultado pasa a futuro: «explicaré».", [], "Cambia el resultado al futuro."),
      toEs("Si llegáis tarde, os esperaremos.", "Si llegáis tarde, esperadnos en la puerta.", "Ahora el resultado es una instrucción para vosotros: esperad + nos → «esperadnos» (la -d se queda delante de nos).", [], "Cambia el resultado a una instrucción: «wait for us at the door» (vosotros)."),
      toEs("Si tendré tiempo, pasaré por tu casa.", "Si tengo tiempo, pasaré por tu casa.", "Detrás del «si» condicional nunca va futuro: «si tengo». El futuro va en el resultado.", [], "Corrige la frase."),
      toEs("Si vengas a Madrid, avísame.", "Si vienes a Madrid, avísame.", "Detrás de «si» va el presente de indicativo, no el subjuntivo: «si vienes».", [], "Corrige la frase."),
      toEs("Si no entiendes algo, me preguntas mañana a mí.", "Si no entiendes algo, pregúntame mañana.", "Para una instrucción, mandato de tú con el pronombre pegado: «pregúntame», con tilde.", ["Si no entiendes algo, pregúntamelo mañana."], "Cambia el resultado a un mandato."),
      { type: "speak", prompt: "Di la misma condición en voz alta con tres resultados: «If it's sunny, we go to the beach / we'll go to the beach / go to the beach (vosotros).»", text: "Si hace sol, vamos a la playa. Si hace sol, iremos a la playa. Si hace sol, id a la playa.", explanation: "La parte del si no cambia (presente). El resultado cambia: presente (plan), futuro (predicción), mandato (instrucción)." },
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
        [
          "Recuerda la regla: el pretérito perfecto (he hecho) cuenta lo que pasa en un tiempo que aún no ha terminado (hoy, esta semana). El indefinido (hice) cuenta hechos en un tiempo cerrado (ayer, el sábado) y hace avanzar el relato. El pluscuamperfecto (había hecho) mira hacia atrás: algo que ya había pasado antes de otro momento pasado.",
          "Lee el relato: «Hoy ha sido un día muy largo. Nos hemos mudado por fin. Cuando llegó el camión, ya habíamos empaquetado todo. Pero el ascensor se rompió a las diez y tuvimos que subir las cajas a pie. Nunca había estado tan cansada.»",
        ],
        [
          ["Hoy ha sido un día muy largo.", "Today has been a very long day. (hoy: perfecto)"],
          ["Cuando llegó el camión, ya habíamos empaquetado todo.", "When the lorry arrived, we had already packed everything. (empaquetar fue antes de llegar)"],
          ["El ascensor se rompió a las diez.", "The lift broke at ten. (un hecho del relato: indefinido)"],
        ],
        [
          mc(
            "En el relato, ¿por qué se dice «ya habíamos empaquetado» y no «empaquetamos»?",
            ["Porque empaquetar ocurrió antes de que llegara el camión.", "Porque ocurrió hoy.", "Porque era una costumbre.", "Porque empaquetar duró muchas horas."],
            0,
            "El pluscuamperfecto marca lo que ya había pasado antes de otro momento pasado (la llegada del camión). Que sea hoy pediría perfecto, y una costumbre, imperfecto."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "Esta mañana ___ las cortinas nuevas. (colgar, nosotros)", "hemos colgado", "«Esta mañana» forma parte de hoy, un tiempo no terminado: pretérito perfecto, hemos colgado."),
      fb("Completa.", "Cuando abrí la última caja, vi que el gato se ___ dentro. (meter)", "había metido", "El gato se metió antes de que yo abriera la caja: pluscuamperfecto, se había metido."),
      fb("Completa.", "El sábado pasado ___ a los vecinos del tercero. (conocer, nosotros)", "conocimos", "«El sábado pasado» es un tiempo cerrado: indefinido, conocimos."),
      fb("Completa.", "Ayer ___ que llamar al técnico del ascensor. (tener, nosotros)", "tuvimos", "«Ayer» es tiempo terminado: indefinido. Tener es irregular: tuvimos."),
      fb("Completa.", "Antes de esa mudanza, nunca ___ tantas cajas juntas. (ver, yo)", "había visto", "Una experiencia vista desde un momento del pasado (antes de esa mudanza): pluscuamperfecto, con el participio irregular visto."),
      mc(
        "«Ayer por la noche ___ en el sofá porque la cama no estaba montada.»",
        ["dormimos", "hemos dormido", "habíamos dormido", "dormiremos"],
        0,
        "«Ayer por la noche» es un momento terminado: indefinido, dormimos. «Hemos dormido» pide un tiempo que incluye el presente, «habíamos dormido» es anterior a otro pasado y «dormiremos» es futuro."
      ),
      toEs("I've been very tired today because I hadn't slept well. (a woman speaking)", "Hoy he estado muy cansada porque no había dormido bien.", "«Hoy» pide perfecto (he estado); dormir mal ocurrió antes, así que va en pluscuamperfecto (no había dormido).", ["He estado muy cansada hoy porque no había dormido bien."]),
    ]
  ),
  L(
    "el-buceo-en-la-isla",
    "b1d-rep-perfecto-ronda-final",
    "Ronda rápida: he, fui, había… ¿cuál?",
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
        "Dejar de llover ocurrió antes de salir: pluscuamperfecto, ya había dejado. «Ya he dejado» se liga al presente, «ya dejaré» es futuro y «ya deje» es subjuntivo."
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
        "Recuerda la regla: dos piezas en una frase",
        [
          "Recuerda la regla de los relativos: «que» cuando no hay preposición (el libro que me prestaste); con preposición, artículo + que, que concuerda con el antecedente (la persona con la que hablé, el amigo del que te hablé); y «lo que» cuando no hay sustantivo (lo que me dijiste = what you told me).",
          "Si pones el objeto al principio de la frase para destacarlo, hay que repetirlo con un pronombre: el libro que me prestaste me lo leí en dos días. Y si hay persona y cosa, la persona va primero y le → se: lo que me dijiste no se lo he contado a nadie.",
        ],
        [
          ["El libro que me prestaste me lo leí en dos días.", "I read the book you lent me in two days. (que + lo retoma el libro)"],
          ["La persona con la que hablé me lo explicó todo.", "The person I spoke to explained it all to me. (con la que: con preposición)"],
          ["Lo que más me preocupa es el precio.", "What worries me most is the price. (lo que: sin sustantivo)"],
        ],
        [
          fb("Completa.", "La película ___ vimos ayer me la recomendó mi hermano.", "que", "Sin preposición, el relativo es «que»: la película que vimos."),
          toEs("Mi tía me regaló el reloj.", "El reloj que me regaló mi tía lo llevo siempre.", "«Que» une la información (me regaló mi tía); como «el reloj» va al principio y es el objeto de «llevo», se repite con «lo».", [], "Transforma: empieza con «El reloj que…» y termina con «lo llevo siempre»."),
        ]
      ),
    ],
    [
      fb("Completa.", "___ me contaste ayer no se lo he dicho a nadie.", "Lo que", "Sin sustantivo antes, «lo que» = what."),
      { ...fb("Completa.", "El profesor con ___ hice el examen me lo corrigió enseguida.", "el que", "Se hace algo con alguien: con + el que, concordando con «el profesor»."), altAnswers: ["quien", "el cual"] },
      fb("Completa.", "La noticia que te di, no ___ cuentes a tus padres.", "se la", "A tus padres → les → se; la noticia → la: «no se la cuentes»."),
      fb("Completa.", "Los vídeos que grabaste, ¿___ pasas?", "me los", "Me + los (los vídeos): ¿me los pasas? La persona va primero."),
      mc(
        "«El amigo ___ te hablé viene mañana.»",
        ["del que", "que", "lo que", "el que"],
        0,
        "Se habla de alguien: de + el que → del que. «Que» pierde la preposición, «lo que» es para ideas y «el que» sin «de» no encaja con «hablar de»."
      ),
      toEs("Me prestaste unos libros. Te los devuelvo mañana.", "Los libros que me prestaste te los devuelvo mañana.", "El relativo «que» une las frases; como «los libros» va al principio, se repite con «los»: te los devuelvo.", ["Los libros que me prestaste te los devolveré mañana."], "Transforma las dos frases en una con «que»."),
      toEs("La chica de que te hablé trabaja en un banco.", "La chica de la que te hablé trabaja en un banco.", "«Hablar de» lleva preposición, y tras ella el relativo necesita el artículo: «de la que» (o «de quien»).", ["La chica de quien te hablé trabaja en un banco."], "Corrige la frase."),
      toEs("Que me dijiste es verdad.", "Lo que me dijiste es verdad.", "Sin sustantivo delante, «what» se dice «lo que»; «que» solo no puede empezar la frase así.", [], "Corrige la frase."),
      toEs("Las gafas que perdiste las te he encontrado.", "Las gafas que perdiste te las he encontrado.", "La persona (te) va delante de la cosa (las), y los dos pronombres delante de «he»: «te las he encontrado».", [], "Corrige la frase."),
      toEs("The song you sent me, I've listened to it ten times.", "La canción que me mandaste la he escuchado diez veces.", "Si el objeto (la canción) va al principio, se repite con un pronombre: la he escuchado.", ["La canción que me enviaste la he escuchado diez veces."]),
      { type: "speak", prompt: "Di en voz alta: «What you told me, I haven't told anyone.»", text: "Lo que me dijiste no se lo he contado a nadie.", explanation: "Lo que = what (sin sustantivo); se lo: a nadie (le → se) + lo (lo que me dijiste), delante de «he»." },
    ]
  ),
  L(
    "el-primer-paso-de-salsa",
    "b1d-rep-se-mezcla-final",
    "Elige y explica: ¿qué tipo de «se» es?",
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
            "«El español» es lo que se habla y el verbo concuerda con él: se pasivo. No es reflexivo (el español no se habla a sí mismo), ni sustituto de le, ni recíproco."
          ),
        ]
      ),
    ],
    [
      mc("«En verano se duerme mal.» ¿Qué se es?", ["impersonal", "pasivo", "reflexivo", "sustituto de le"], 0, "No hay ningún sustantivo con el que concordar: se impersonal. No es pasivo (no hay cosa que «se duerma»), ni reflexivo, ni sustituto de le."),
      mc("«Mi hermano se levanta a las seis.» ¿Qué se es?", ["reflexivo", "pasivo", "impersonal", "sustituto de le"], 0, "El sujeto hace la acción sobre sí mismo (él se levanta): se reflexivo. No es pasivo, impersonal ni sustituto de le."),
      mc("«Se la mandé ayer.» ¿Qué se es?", ["sustituto de le", "pasivo", "impersonal", "reflexivo"], 0, "Delante de «la», el pronombre le se convierte en se: le la → se la. Es sustituto de le, no pasivo, impersonal ni reflexivo."),
      mc("«Se alquilan bicicletas.» ¿Qué se es?", ["pasivo", "impersonal", "reflexivo", "sustituto de le"], 0, "El verbo concuerda con «bicicletas» (plural): se pasivo. El se impersonal va en singular sin sustantivo, y no es reflexivo ni sustituto de le."),
      fb("Completa.", "En esta oficina se ___ a las ocho. (entrar)", "entra", "Impersonal."),
      fb("Completa.", "Se ___ traductores. (necesitar)", "necesitan", "Pasivo plural."),
      toEs("I gave it to them yesterday (the key).", "Se la di ayer.", "Les → se delante de la (la llave): se la di.", ["Ayer se la di.", "Se la di ayer a ellos."]),
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
          fb("Rápido.", "(conjugado) ___ presto. (prestar + se + lo)", "Se lo", "Con un verbo conjugado, los pronombres van delante: se lo presto."),
        ]
      ),
    ],
    [
      fb("Rápido.", "(perfecto) ___ he prestado. (prestar + se + lo)", "Se lo", "Con el perfecto, los pronombres van delante de haber: se lo he prestado."),
      fb("Rápido.", "(infinitivo) Voy a ___. (prestar + se + lo)", "prestárselo", "Pegado con tilde."),
      fb("Rápido.", "(gerundio) Estoy ___. (prestar + se + lo)", "prestándoselo", "Pegado con tilde."),
      fb("Rápido.", "(mandato tú) ___. (prestar + se + lo)", "Préstaselo", "Pegado con tilde."),
      fb("Rápido.", "(mandato negativo tú) No ___. (prestar + se + lo)", "se lo prestes", "Negativo de tú: pronombres delante + subjuntivo: no se lo prestes."),
      fb("Rápido.", "(mandato usted) ___. (prestar + se + lo)", "Présteselo", "Pegado con tilde."),
      mc(
        "¿Qué forma NO existe?",
        ["He se lo prestado.", "Se lo he prestado.", "Voy a prestárselo.", "Se lo voy a prestar."],
        0,
        "Con haber, los pronombres nunca van entre haber y el participio: «He se lo prestado» no existe. Las otras tres colocan bien los pronombres: delante del verbo conjugado o pegados al infinitivo."
      ),
    ]
  ),
  L(
    "la-casa-que-construimos",
    "b1d-rep-mezcla-correo-amigo",
    "Práctica mezclada: un correo a un amigo",
    "Repaso espaciado: noticias, deseos, consejos y planes en un correo.",
    "8 min",
    [
      sec(
        "Recuerda las reglas de un correo personal",
        [
          "Un correo a un amigo mezcla cinco decisiones: noticias de un periodo que no ha terminado → pretérito perfecto (este mes he empezado); deseos sobre otra persona → que + subjuntivo (quiere que aprenda, ojalá puedas); consejos → yo que tú + condicional (vendría); planes con condición → si + presente (si vienes, te enseño); objetos ya nombrados → pronombres, el indirecto primero (te las mando).",
          "Lee el correo de Lucía y luego úsalo: contesta, reacciona y corrige la respuesta de Marcos.",
          "«¡Hola, Marcos! Este mes he empezado un trabajo nuevo. La empresa en la que trabajo está en el centro. Mi jefa quiere que aprenda alemán. Yo que tú, vendría en junio, cuando hace buen tiempo. Si vienes, te enseño la ciudad. ¡Ojalá puedas!»",
        ],
        [
          ["La empresa en la que trabajo está en el centro.", "The company I work for is in the centre. (trabajar en → en la que)"],
        ],
        [
          mc(
            "¿Por qué Lucía escribe «quiere que aprenda» y no «quiere aprender»?",
            ["Porque quien quiere (la jefa) y quien aprende (Lucía) son personas distintas.", "Porque aprender es un verbo irregular.", "Porque la frase está en pasado.", "Porque después de querer siempre va que."],
            0,
            "Con dos sujetos distintos se usa que + subjuntivo (la jefa quiere que yo aprenda). Con el mismo sujeto va el infinitivo: quiero aprender. No es por el pasado ni por la irregularidad."
          ),
          mc(
            "Según el correo, ¿cuándo debería ir Marcos?",
            ["En junio", "Este mes", "Cuando aprenda alemán", "Cuando Lucía cambie de trabajo"],
            0,
            "Lucía le aconseja con yo que tú + condicional: «Yo que tú, vendría en junio». Es un consejo, no una obligación."
          ),
        ]
      ),
    ],
    [
      { ...fb("Completa la respuesta de Marcos.", "La oficina en ___ trabajo yo también está en el centro.", "la que", "Se trabaja en la oficina: la preposición en va delante del relativo: en la que."), altAnswers: ["que", "la cual", "donde"] },
      fb("Completa la respuesta de Marcos.", "Mi madre quiere que ___ a verla en julio. (ir, yo)", "vaya", "Dos sujetos (mi madre quiere / yo voy): que + subjuntivo. Ir es irregular: vaya."),
      fb("Completa el consejo de Marcos.", "Yo que tú, ___ un curso intensivo de alemán. (hacer)", "haría", "Yo que tú + condicional. Hacer es irregular en condicional: haría (no «hacería»)."),
      fb("Completa el plan.", "Si ___ junio libre, iré a verte. (tener, yo)", "tengo", "Después de si (condición real) va presente de indicativo: si tengo, nunca «si tendré»."),
      fb("Completa.", "¡Ojalá ___ tiempo para vernos! (tener, nosotros)", "tengamos", "Ojalá + subjuntivo: tener → teng- → tengamos."),
      fb("Completa.", "Las fotos del piso nuevo ___ mando mañana. (a ti)", "te las", "Te (a ti) + las (las fotos): el indirecto va primero, te las mando."),
      toEs(
        "Este mes empiezo un trabajo nuevo.",
        "Este mes he empezado un trabajo nuevo.",
        "Este mes todavía no ha terminado: la noticia va en pretérito perfecto (he + participio).",
        [],
        "Cambia la frase al pretérito perfecto."
      ),
      toEs(
        "Quiero aprender alemán.",
        "Mi jefa quiere que aprenda alemán.",
        "Al cambiar el sujeto de querer, la frase necesita que + subjuntivo: aprender → que aprenda.",
        ["Mi jefa quiere que yo aprenda alemán."],
        "Cambia el sujeto de «querer» a «mi jefa»."
      ),
      toEs("«Si vendrás en junio, te enseñaré la playa.»", "Si vienes en junio, te enseñaré la playa.", "Después de si real va presente, nunca futuro: si vienes. El futuro va en la otra parte.", ["Si vienes en junio, te enseño la playa."], "Corrige la frase de Marcos."),
      toEs("«Espero que estás bien y que tu jefa es simpática.»", "Espero que estés bien y que tu jefa sea simpática.", "Esperar que + otra persona pide subjuntivo en las dos partes: estés y sea.", [], "Corrige la frase de Marcos."),
      toEs("I hope you're well.", "Espero que estés bien.", "Espero que + subjuntivo: estés.", ["Ojalá estés bien.", "Espero que te encuentres bien."]),
      {
        type: "write",
        prompt: "Contesta al correo de Lucía (40-70 palabras): cuéntale una noticia de este mes, dile qué quiere tu familia que hagas, dale un consejo con «yo que tú» y propón un plan con «si...».",
        minWords: 40,
        maxWords: 70,
        rubric: ["Una noticia en pretérito perfecto (este mes / esta semana)", "querer que + subjuntivo", "yo que tú + condicional", "si + presente con un plan"],
        modelAnswer: "¡Hola, Lucía! ¡Enhorabuena por el trabajo! Yo esta semana he terminado los exámenes. Mis padres quieren que pase el verano con ellos, pero quiero verte. Yo que tú, aprendería alemán con una aplicación: es más fácil. Si tengo vacaciones en junio, iré a verte y me enseñas la ciudad. ¡Un abrazo!",
        explanation: "Comprueba las cinco decisiones: perfecto para este periodo, que + subjuntivo con otro sujeto, condicional tras yo que tú, presente tras si.",
      },
    ]
  ),
  L(
    "el-aula-bajo-el-puente",
    "b1d-rep-mezcla-corrige-final",
    "Corrige el párrafo: la redacción final",
    "Repaso espaciado: un error de cada tema del nivel Intermedio.",
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
            "Después de «si» condicional va presente de indicativo: si hace buen tiempo. No es cuestión de subjuntivo presente (imposible tras si), e «hiciera» cambiaría la frase a una hipótesis."
          ),
        ]
      ),
    ],
    [
      toEs("Corrige: «Quiero que mis amigos vienen a mi fiesta.»", "Quiero que mis amigos vengan a mi fiesta.", "«Querer que» pide subjuntivo: vengan, no «vienen».", undefined, "Corrige la frase."),
      toEs("Corrige: «Ayer he comprado la comida.»", "Ayer compré la comida.", "«Ayer» pide indefinido: compré, no «he comprado».", undefined, "Corrige la frase."),
      toEs("Corrige: «La chica que la conocí en clase también viene.»", "La chica que conocí en clase también viene.", "«Que» ya retoma «la chica», así que el pronombre «la» sobra.", undefined, "Corrige la frase."),
      toEs("Corrige: «Si hará buen tiempo, cenaremos fuera.»", "Si hace buen tiempo, cenaremos fuera.", "Después de «si» va el presente, no el futuro: si hace.", undefined, "Corrige la frase."),
      toEs("Corrige: «El pastel le lo voy a pedir a mi tía.»", "El pastel se lo voy a pedir a mi tía.", "Le + lo → se lo.", undefined, "Corrige la frase."),
      ms(
        "¿Qué frases son correctas?",
        ["Se venden entradas en la puerta.", "Sentaos, por favor.", "No creo que viene.", "No creo que es verdad."],
        [0, 1],
        "«Se venden entradas» (se pasivo) y «Sentaos» (mandato de vosotros) están bien. «No creo que» pide subjuntivo: no creo que venga, no creo que sea verdad; «viene» y «es» son indicativo."
      ),
    ]
  ),
  L(
    "el-fotografo-accidental",
    "b1d-rep-mezcla-habla-de-ti-final",
    "Habla de ti: tu año en español",
    "Repaso espaciado: cuenta tu progreso con todos los tiempos del nivel Intermedio.",
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
      fb("Completa con un relativo.", "___ más me ha costado es el subjuntivo.", "Lo que", "Sin antecedente, «lo que» se refiere a una idea: Lo que más me ha costado…"),
      fb("Tu balance.", "Espero que el próximo año ___ viajar. (poder, yo)", "pueda", "Espero que + subjuntivo."),
      fb("Tu balance.", "Si ___ cada día, hablaré mejor. (practicar, yo)", "practico", "Si + presente."),
      fb("Tu balance.", "Quiero que mis amigos también ___ español. (estudiar)", "estudien", "Deseo con dos sujetos → subjuntivo."),
      toEs("What I like most is speaking with people.", "Lo que más me gusta es hablar con la gente.", "«What» = lo que: Lo que más me gusta…", ["Lo que más me gusta es hablar con gente."]),
      toEs("I have never studied so much.", "Nunca he estudiado tanto.", "Nunca + pretérito perfecto: nunca he estudiado.", ["No he estudiado nunca tanto.", "Nunca estudié tanto.", "No estudié nunca tanto."]),
    ]
  ),
  L(
    "el-rio-que-nos-enseno",
    "b1d-rep-mezcla-circuito-final",
    "Circuito acumulativo: examen final del nivel Intermedio",
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
      { ...fb("Completa con un relativo.", "La casa en ___ crecí ya no existe.", "la que", "Se crece en una casa: en + la que."), altAnswers: ["que", "la cual", "donde"] },
      fb("Estación 5.", "En este bar se ___ las mejores tapas. (servir)", "sirven", "Pasivo plural; e → i."),
      fb("Completa con dos pronombres.", "¿Las llaves? Ya ___ he devuelto a la dueña.", "se las", "Le (a la dueña) → se delante de las (las llaves), antes de haber: se las he devuelto."),
    ]
  ),
];
