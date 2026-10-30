// Synced from cheneygross-afk/lengo:src/lib/lessons/b1-reinforcement.ts by scripts/sync-content.mjs -- edit it there, not here.
import { anchored, authoring } from "./authoring";
import type { AnchoredLesson } from "./weave";

// B1 reinforcement lessons -- woven into B1_LESSONS right after the lesson
// each one reinforces (see weave.ts). Like the base B1 lessons, they're
// written mostly in Spanish. They re-present material already covered in
// formats the base lessons don't use: dialogue labs, error hunts
// ("Caza de errores"), contrast clinics, transformations, real-world
// missions, spiral reviews, vocabulary word webs, a closing B1 Challenge
// series, and themed spiral reviews placed between the reading stories so
// that retrieval practice keeps going through the story block.
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

export const B1_REINFORCEMENT: AnchoredLesson[] = [
  L(
    "present-subjunctive-formation-2",
    "b1r-transform-indicative-subjunctive",
    "Transformaciones: del indicativo al subjuntivo",
    "Toma verbos en presente de indicativo y pásalos al subjuntivo, paso a paso: forma yo, quita la -o, cambia la vocal.",
    "7 min",
    [
      sec(
        "La receta en tres pasos",
        [
          "Recuerda la regla: 1) busca la forma yo del presente: hablo, tengo, pido. 2) Quita la -o: habl-, teng-, pid-. 3) Añade la vocal «contraria»: -ar → -e; -er/-ir → -a.",
          "Partir de la forma yo hace el trabajo por ti: cualquier irregularidad de esa forma (la g de tengo, la i de pido, la zc de conozco) pasa sola al subjuntivo.",
        ],
        [
          ["hablo → habl- → hable", "I speak → (that) I speak"],
          ["tengo → teng- → tenga", "I have → (that) I have (the g stays)"],
          ["pido → pid- → pida", "I ask for → (that) I ask for (the i stays)"],
        ],
        [
          fb("Cambia al subjuntivo (yo).", "salgo → que yo ___", "salga", "Salgo → salg- → salga. La irregularidad de la forma yo pasa al subjuntivo."),
          fb("Cambia al subjuntivo (ellos).", "oigo → que ellos ___", "oigan", "Desde oigo: oig- + -an (verbo en -ir → -a). La g de la forma yo se conserva."),
        ]
      ),
      sec(
        "Los cambios ortográficos: el sonido manda",
        [
          "Al cambiar la vocal, algunas consonantes cambiarían de sonido, así que la ortografía se ajusta para conservarlo: -car → -que (busque), -gar → -gue (llegue), -zar → -ce (empiece), -ger/-gir → -ja (escoja, elija).",
          "No es una irregularidad del verbo: es solo cómo se escribe ese sonido delante de e o de a.",
        ],
        [
          ["buscar → que yo busque", "that I look for (c before e would sound like s: qu keeps the k sound)"],
          ["pagar → que tú pagues", "that you pay (gu keeps the hard g)"],
          ["proteger → que ella proteja", "that she protects (j keeps the sound before a)"],
        ],
        [
          fb("Cambia al subjuntivo (él).", "empieza → que él ___", "empiece", "Empezar: el cambio e → ie se mantiene, y la z pasa a c delante de e: empiece."),
          toEs("Espero que pages con tarjeta.", "Espero que pagues con tarjeta.", "Pagar → pagues: delante de e hace falta la u para que la g siga sonando como en «pago».", ["Espero que pagues con tarjeta de crédito."], "Corrige la frase."),
        ]
      ),
    ],
    [
      fb("Cambia al subjuntivo (nosotros).", "comemos → que nosotros ___", "comamos", "Los verbos -er toman a en subjuntivo: comemos → comamos."),
      fb("Cambia al subjuntivo (ellos).", "conocen → que ellos ___", "conozcan", "El subjuntivo sale de la forma yo (conozco): conozc- + an → conozcan."),
      fb("Cambia al subjuntivo (tú).", "duermes → que tú ___", "duermas", "o → ue se mantiene en tú: duermas."),
      fb("Cambia al subjuntivo (nosotros).", "dormimos → que nosotros ___", "durmamos", "En nosotros, dormir (verbo en -ir) cambia o → u: durmamos."),
      mt(
        "Relaciona cada forma yo con su subjuntivo.",
        [
          ["hago", "haga"],
          ["digo", "diga"],
          ["pongo", "ponga"],
          ["vengo", "venga"],
        ],
        "Todos estos verbos tienen una -g- en la forma yo, y la conservan en el subjuntivo."
      ),
      mc(
        "¿Cuál es el subjuntivo de «escoger» para yo?",
        ["escoja", "escoga", "escojo", "escoge"],
        0,
        "Los verbos en -ger cambian g → j delante de a para conservar el sonido: escoja. «Escoga» cambiaría el sonido, «escojo» es indicativo y «escoge» es la forma de él."
      ),
      wo("Espero que ustedes lleguen a tiempo.", "Llegar → lleguen (g → gu delante de e).", "I hope you all arrive on time."),
      fb("Cambia al subjuntivo (tú).", "trabajas → que tú ___", "trabajes", "Trabajo → trabaj- → -e: trabajes."),
      fb("Cambia al subjuntivo (nosotros).", "vendemos → que nosotros ___", "vendamos", "Vendo → vend- → -a: vendamos."),
      fb("Cambia al subjuntivo (ellos).", "pongo → que ellos ___", "pongan", "Pongo → pong- → pongan: la g se queda en todas las personas."),
      fb("Cambia al subjuntivo (ella).", "juega → que ella ___", "juegue", "Jugar: ue en la raíz y -gue para mantener el sonido: juegue."),
      fb("Cambia al subjuntivo (ustedes).", "almuerzan → que ustedes ___", "almuercen", "Almorzar: z → c delante de e, y o → ue: almuercen."),
      fb("Cambia al subjuntivo (tú).", "proteges → que tú ___", "protejas", "Proteger: g → j delante de a: protejas."),
      toEs("We want you all (ustedes) to start tomorrow.", "Queremos que empiecen mañana.", "Empezar: e → ie y z → c: empiecen.", ["Queremos que empecéis mañana.", "Queremos que comiencen mañana.", "Queremos que comencéis mañana."]),
      toEs("Es importante que el niño escoga un libro.", "Es importante que el niño escoja un libro.", "Escoger: delante de a, la g se escribe j para conservar el sonido: escoja.", ["Es importante que el niño elija un libro."], "Corrige la frase."),
      toEs("Sé que me dice la verdad.", "Quiero que me diga la verdad.", "«Sé que» presenta un hecho; «quiero que», un deseo → subjuntivo: digo → dig- → diga.", [], "Cambia «Sé que» por «Quiero que»."),
      toEs("My mother wants me to be patient.", "Mi madre quiere que tenga paciencia.", "Quiere que + otro sujeto → subjuntivo: tengo → teng- → tenga.", ["Mi mamá quiere que tenga paciencia.", "Mi madre quiere que sea paciente.", "Mi mamá quiere que sea paciente."]),
      toEs("Espero que busces un trabajo mejor.", "Espero que busques un trabajo mejor.", "Buscar: delante de e, la c se escribe qu para conservar el sonido k: busques.", ["Espero que busques un mejor trabajo."], "Corrige la frase."),
      mc("¿Cuál es el subjuntivo de «cruzar» para nosotros?", ["cruzemos", "crucemos", "crusemos", "cruzamos"], 1, "-zar → -ce delante de e: crucemos. «Cruzemos» no respeta esa regla, «crusemos» cambia la letra y «cruzamos» es indicativo."),
      wo("Es mejor que traigas tu propia comida", "Traigo → traig- → traigas.", "It's better that you (tú) bring your own food"),
      wo("Ojalá que no lleguemos tarde al concierto", "Llegar → lleguemos: -gar → -gue.", "Hopefully we don't arrive late to the concert"),
      toEs("The doctor wants my grandfather to walk every day and to sleep more.", "El médico quiere que mi abuelo camine todos los días y duerma más.", "Camino → camine; duermo → duerma.", ["La médica quiere que mi abuelo camine todos los días y duerma más.", "El médico quiere que mi abuelo camine cada día y duerma más.", "El médico quiere que mi abuelo camine todos los días y que duerma más."]),
      mc(
        "Aplica las dos reglas: «averiguar» → que yo ___",
        ["averigüe", "averigue", "averigua", "averige"],
        0,
        "-ar → -e, y para que la u siga sonando entre g y e se escribe con diéresis: averigüe. Sin diéresis («averigue») la u sería muda; «averigua» es indicativo y «averige» pierde la u."
      ),
      toEs("Mis hijos recogen la mesa.", "Quiero que mis hijos recojan la mesa.", "Con «quiero que» pasa al subjuntivo; recoger → recojan (g → j delante de a).", [], "Transforma con «Quiero que…»."),
    ]
  ),
  L(
    "present-subjunctive-formation-2",
    "b1r-error-hunt-subjunctive-forms",
    "Caza de errores: las formas del subjuntivo",
    "Formas inventadas, vocales equivocadas y los seis irregulares — encuentra y corrige cada error.",
    "7 min",
    [
      sec(
        "Recuerda la regla: los seis irregulares",
        [
          "Recuerda la regla: seis verbos no siguen la receta de la forma yo, porque su forma yo no termina en -o: ser (soy → sea), estar (estoy → esté), ir (voy → vaya), saber (sé → sepa), haber (he → haya), dar (doy → dé).",
          "Los errores típicos usan el indicativo («sabe», «es») o inventan formas como «esé», «vaas» o «haiga». Esté y dé llevan tilde; des, demos y den, no.",
        ],
        [
          ["✗ Quiero que tú eres feliz. → ✓ Quiero que tú seas feliz.", "I want you to be happy."],
          ["✗ Ojalá que ella sabe la verdad. → ✓ Ojalá que ella sepa la verdad.", "I hope she knows the truth."],
        ],
        [
          mc(
            "Corrige: «Es importante que vas al médico.»",
            ["Es importante que vayas al médico.", "Es importante que vaas al médico.", "Es importante que ires al médico.", "No hay error."],
            0,
            "«Es importante que» pide subjuntivo, y el de ir es irregular: vayas. «Vaas» e «ires» no existen, y la frase original sí tiene error."
          ),
          toEs("Ojalá que mi hermano es puntual.", "Ojalá que mi hermano sea puntual.", "Ojalá siempre pide subjuntivo; ser es irregular (soy no acaba en -o): sea.", ["Ojalá mi hermano sea puntual."], "Corrige la frase."),
        ]
      ),
      sec(
        "La vocal equivocada",
        "El otro error frecuente es dejar la vocal del indicativo: «que él habla» en vez de «que él hable». Recuerda: -ar → e, -er/-ir → a.",
        [
          ["✗ Espero que me escribes. → ✓ Espero que me escribas.", "I hope you write to me."],
          ["✗ Quiero que trabajan menos. → ✓ Quiero que trabajen menos.", "I want them to work less."],
        ],
        [
          fb("Corrige el verbo.", "Prefiero que nosotros ___ en casa. (el alumno escribió: cenamos)", "cenemos", "«Preferir que» pide subjuntivo; los verbos -ar toman e: cenemos, no «cenamos»."),
        ]
      ),
    ],
    [
      fb("Corrige el verbo.", "Dudo que ellos ___ aquí. (el alumno escribió: están)", "estén", "«Dudar que» pide subjuntivo; el de estar es «estén» (con tilde), no «están»."),
      fb("Corrige el verbo.", "No creo que ___ tiempo. (haber; el alumno escribió: hay)", "haya", "«No creo que» pide subjuntivo; el de haber (hay) es haya."),
      fb("Corrige el verbo.", "Quiero que me ___ tu opinión. (dar; el alumno escribió: das)", "des", "Dar → dé, des, dé, demos, deis, den. Solo dé (yo, él) lleva tilde."),
      ms(
        "¿Qué frases tienen un error?",
        ["Ojalá que llueva mañana.", "Es necesario que tú sabes esto.", "Me alegro de que estés aquí.", "Quiero que vosotros vengáis."],
        [1],
        "«Es necesario que» pide subjuntivo; saber es irregular: sepas, no «sabes». Las otras frases usan bien el subjuntivo tras ojalá, alegrarse y querer."
      ),
      mc(
        "¿Cuál es correcta?",
        ["Espero que el examen sea fácil.", "Espero que el examen es fácil.", "Espero que el examen esé fácil.", "Espero que el examen está fácil."],
        0,
        "«Esperar que» pide subjuntivo, y el de ser es irregular: sea. «Es» y «está» son indicativo (y un examen fácil se describe con ser), y «esé» no existe."
      ),
      toEs("I hope you (tú) have a good day.", "Espero que tengas un buen día.", "«Esperar que» pide subjuntivo, formado desde tengo: tengas.", ["Ojalá que tengas un buen día.", "Espero que tú tengas un buen día.", "Ojalá tengas un buen día."]),
      wo("Mis padres quieren que yo sea médico.", "Querer que + subjuntivo irregular de ser.", "My parents want me to be a doctor."),
      fb("Corrige el verbo.", "Ojalá que mañana ___ buen tiempo. (hacer; el alumno escribió: hace)", "haga", "Ojalá pide subjuntivo: hago → haga."),
      fb("Corrige el verbo.", "Espero que ___ contentos con el regalo. (estar, ellos; el alumno escribió: están)", "estén", "Estar → estén, con tilde; «están» es indicativo."),
      fb("Corrige el verbo.", "Es necesario que tú ___ adónde vamos. (saber; el alumno escribió: sabes)", "sepas", "Saber es irregular porque sé no acaba en -o: sepas."),
      fb("Corrige el verbo.", "Mi madre quiere que yo ___ al dentista. (ir; el alumno escribió: voy)", "vaya", "Ir → vaya; «voy» es indicativo."),
      fb("Corrige el verbo.", "Espero que me ___ pronto. (contestar, tú; el alumno escribió: contestas)", "contestes", "Contestar es -ar: subjuntivo con -e: contestes."),
      mc("Corrige: «Quiero que tú me das la llave.»", ["Quiero que tú me des la llave.", "Quiero que tú me dés la llave.", "Quiero que tú me da la llave.", "No hay error."], 0, "Dar → des. Solo dé (yo, él) lleva tilde, para distinguirse de la preposición de; «da» es indicativo."),
      mc("¿Cuál es correcta?", ["Ojalá que haya sitio.", "Ojalá que hay sitio.", "Ojalá que haiga sitio.", "Ojalá que ha sitio."], 0, "Haber → haya. «Haiga» es una forma vulgar, «hay» es indicativo y «ha» es el auxiliar del perfecto."),
      toEs("Sé que eres sincero.", "Quiero que seas sincero.", "«Sé que» informa (indicativo: eres); «quiero que» expresa un deseo (subjuntivo: seas).", ["Quiero que seas sincera."], "Cambia «Sé que» por «Quiero que»."),
      toEs("I hope the store is open.", "Espero que la tienda esté abierta.", "Estar → esté, con tilde; «está» es indicativo.", ["Espero que la tienda esté abierta todavía."]),
      toEs("Es importante que me de su dirección.", "Es importante que me dé su dirección.", "El subjuntivo de dar para usted es dé, con tilde: sin ella se confunde con la preposición de.", [], "Corrige la frase."),
      toEs("Espero que nos escriben.", "Espero que nos escriban.", "Escribir es -ir: el subjuntivo lleva -a: escriban, no «escriben».", [], "Corrige la frase."),
      toEs("No queremos que lo sepa.", "No queremos que lo sepan.", "Solo cambia la persona del subjuntivo irregular: sep- + -an.", ["No queremos que ellos lo sepan."], "Cambia el sujeto de la segunda parte a ellos."),
      toEs("Hopefully there aren't many people at the beach.", "Ojalá no haya mucha gente en la playa.", "Haber → haya, siempre en singular.", ["Ojalá que no haya mucha gente en la playa."]),
      wo("Es posible que el jefe esté enfadado", "Es posible que + subjuntivo: esté.", "It's possible that the boss is angry"),
      wo("Queremos que nuestros hijos sean felices", "Ser → sean (no «son») después de queremos que.", "We want our children to be happy"),
      toEs("My parents hope that I go to Madrid and that I learn a lot.", "Mis padres esperan que vaya a Madrid y que aprenda mucho.", "Ir → vaya y aprender → aprenda: subjuntivo en los dos verbos.", ["Mis padres esperan que vaya a Madrid y aprenda mucho."]),
      toEs("Es posible que el museo está cerrado y que no hay entradas.", "Es posible que el museo esté cerrado y que no haya entradas.", "«Es posible que» afecta a los dos verbos: esté y haya, los dos irregulares.", ["Es posible que el museo esté cerrado y no haya entradas."], "Corrige la frase."),
    ]
  ),
  L(
    "present-subjunctive-formation-2",
    "b1r-contrast-indicative-subjunctive",
    "Contraste: ¿hecho o deseo?",
    "La misma frase en indicativo y en subjuntivo: aprende a oír la diferencia entre lo que es y lo que se quiere.",
    "7 min",
    [
      sec(
        "Recuerda la regla: ¿afirmas o no?",
        [
          "Recuerda la regla: el indicativo afirma algo como realidad (sé, veo, es verdad, estoy seguro de que…). El subjuntivo presenta algo que no se afirma: un deseo, una duda, una posibilidad o una emoción (quiero, espero, dudo, es posible que…).",
          "La pregunta que decide es: ¿la primera parte de la frase da por cierta la segunda? Si sí, indicativo; si no, subjuntivo. Por eso «creo que» lleva indicativo (lo afirmo) y «no creo que», subjuntivo (no lo afirmo).",
        ],
        [
          ["Sé que Ana viene.", "I know Ana is coming. (fact)"],
          ["Quiero que Ana venga.", "I want Ana to come. (wish)"],
          ["Veo que estás bien.", "I see that you're fine. (fact)"],
          ["Espero que estés bien.", "I hope you're fine. (wish)"],
        ],
        [
          mc(
            "«Creo que ___ razón.» (tú)",
            ["tienes", "tengas", "tener", "tuvieras"],
            0,
            "Creer en afirmativo presenta algo como un hecho y lleva indicativo: tienes. «Tengas» y «tuvieras» son subjuntivo, y «tener» es infinitivo."
          ),
          mc(
            "«Es probable que mañana ___ frío.» (hacer)",
            ["haga", "hace", "hará", "hacer"],
            0,
            "«Es probable» no afirma que vaya a hacer frío, solo lo presenta como posible: subjuntivo, haga. «Hace» y «hará» son indicativo, y «hacer» es infinitivo."
          ),
        ]
      ),
      sec(
        "Formas que se parecen",
        "Algunas formas se confunden fácilmente: habla (indicativo) / hable (subjuntivo); come (indicativo) / coma (subjuntivo). Mira la vocal final: -ar con e, -er/-ir con a → subjuntivo.",
        [
          ["Él habla. / Que él hable.", "He speaks. / That he speak."],
          ["Ella come. / Que ella coma.", "She eats. / That she eat."],
        ],
        [
          ms(
            "¿Qué formas son de subjuntivo?",
            ["trabaje", "trabaja", "viva", "vive"],
            [0, 2],
            "En subjuntivo, los verbos -ar toman e (trabaje) y los -er/-ir toman a (viva). «Trabaja» y «vive» conservan la vocal del indicativo."
          ),
        ]
      ),
    ],
    [
      mt(
        "Relaciona cada frase con su significado.",
        [
          ["Sé que viene.", "I know he's coming."],
          ["Quiero que venga.", "I want him to come."],
          ["Es verdad que viene.", "It's true he's coming."],
          ["Dudo que venga.", "I doubt he's coming."],
        ],
        "Saber y es verdad afirman → indicativo. Querer y dudar no afirman → subjuntivo."
      ),
      fb("¿Indicativo o subjuntivo?", "Es obvio que Marta ___ cansada. (estar)", "está", "«Es obvio que» da la frase por cierta → indicativo: está."),
      fb("¿Indicativo o subjuntivo?", "Es posible que Marta ___ cansada. (estar)", "esté", "«Es posible que» solo presenta una posibilidad → subjuntivo: esté."),
      fb("¿Indicativo o subjuntivo?", "Pienso que el tren ___ a las ocho. (salir)", "sale", "Pensar en afirmativo presenta lo que crees como cierto → indicativo: sale."),
      mc("«No pienso que el tren ___ a las ocho.»", ["salga", "sale", "saldrá", "salir"], 0, "«No pensar que» no afirma, expresa duda → subjuntivo: salga. «Sale» y «saldrá» son indicativo, y «salir» es infinitivo."),
      toEn("Quiero que me llames esta noche.", "I want you to call me tonight.", "Querer que + subjuntivo = want someone to do something.", ["I want you to phone me tonight."]),
      wo("Es cierto que Juan trabaja mucho.", "Es cierto que expresa certeza → indicativo.", "It's true that Juan works a lot."),
      toEs("I know you (tú) are tired.", "Sé que estás cansado.", "Saber que presenta un hecho: indicativo (estás).", ["Sé que estás cansada."]),
      toEs("Sé que no estás cansado.", "Espero que no estés cansado.", "«Sé que» afirma (estás); «espero que» expresa un deseo, así que el verbo pasa al subjuntivo: estés.", ["Espero que no estés cansada."], "Cambia «Sé que» por «Espero que»."),
      { type: "fill-blank", prompt: "¿Cómo se dicen en español las palabras en negrita?", sentence: "Creo que Pedro ___ en Londres.", answer: "vive", en: "I think Pedro [lives] in London.", explanation: "Creer que (afirmativo) presenta lo que crees como cierto: indicativo." },
      { type: "fill-blank", prompt: "¿Cómo se dicen en español las palabras en negrita?", sentence: "No creo que Pedro ___ en Londres.", answer: "viva", en: "I don't think Pedro [lives] in London.", explanation: "No creer que expresa duda: subjuntivo." },
      { type: "fill-blank", prompt: "¿Cómo se dicen en español las palabras en negrita?", sentence: "Es verdad que ___ mucho en invierno.", answer: "llueve", en: "It's true that it [rains] a lot in winter.", explanation: "Es verdad que afirma un hecho: indicativo." },
      { type: "fill-blank", prompt: "¿Cómo se dicen en español las palabras en negrita?", sentence: "Dudo que ___ esta tarde.", answer: "llueva", en: "I doubt it [will rain] this afternoon.", explanation: "Dudar que pide subjuntivo: llueva." },
      mc("«Sé que mis padres ___ orgullosos de mí.»", ["están", "estén", "estar", "estuvieran"], 0, "Saber que presenta un hecho: indicativo, están. «Estén» sería para un deseo o una duda, y «estuvieran» es pasado."),
      mc("«Ojalá que mi equipo ___ el partido.»", ["gana", "gane", "ganar", "ganas"], 1, "Ojalá expresa deseo: subjuntivo, gane. «Gana» y «ganas» son indicativo, y «ganar» es infinitivo."),
      toEs("We know the restaurant closes at eleven.", "Sabemos que el restaurante cierra a las once.", "Saber que + hecho: indicativo (cierra)."),
      toEs("Sabemos que el restaurante cierra temprano hoy.", "Es posible que el restaurante cierre temprano hoy.", "«Es posible que» no afirma, así que pide subjuntivo: cierra → cierre.", ["Es posible que hoy el restaurante cierre temprano."], "Cambia «Sabemos que» por «Es posible que»."),
      toEs("I see that you (usted) speak Spanish very well.", "Veo que habla muy bien español.", "Ver que constata un hecho: indicativo (habla).", ["Veo que habla español muy bien.", "Veo que habla muy bien el español.", "Veo que habla el español muy bien."]),
      toEs("Mi jefe quiere que hablo con los clientes.", "Mi jefe quiere que hable con los clientes.", "«Quiere que» con otro sujeto expresa un deseo: subjuntivo, hable. «Hablo» es indicativo.", ["Mi jefa quiere que hable con los clientes."], "Corrige la frase."),
      toEs("Estoy seguro de que Laura venga el viernes.", "Estoy seguro de que Laura viene el viernes.", "«Estoy seguro de que» afirma con certeza: indicativo (viene o vendrá), no subjuntivo.", ["Estoy segura de que Laura viene el viernes.", "Estoy seguro de que Laura vendrá el viernes.", "Estoy segura de que Laura vendrá el viernes."], "Corrige la frase."),
      wo("No creo que el examen sea difícil", "No creo que + subjuntivo: sea.", "I don't think the exam is difficult"),
      wo("Es evidente que los niños están cansados", "Es evidente que + indicativo: están.", "It's obvious that the kids are tired"),
      toEs("I know you (tú) work a lot, but I want you to rest this weekend.", "Sé que trabajas mucho, pero quiero que descanses este fin de semana.", "Sé que → indicativo (trabajas); quiero que → subjuntivo (descanses)."),
      { type: "speak", prompt: "Responde en voz alta: di algo que sabes de tu mejor amigo y algo que esperas que haga este año.", text: "Sé que mi mejor amigo trabaja mucho y espero que tenga más tiempo libre este año.", explanation: "Sé que afirma → indicativo (trabaja); espero que expresa un deseo → subjuntivo (tenga)." },
    ]
  ),
  L(
    "subjunctive-wishes-doubt-emotion-mastery-check",
    "b1r-dialogue-advice-column",
    "Laboratorio de diálogo: el consultorio sentimental",
    "Lee cartas a un consultorio y responde como la consejera: deseos, recomendaciones y emociones.",
    "8 min",
    [
      sec(
        "La regla de la consejera: aconsejar es querer algo para otro",
        [
          "Recomendar, sugerir, aconsejar y es mejor que funcionan como querer: expresan lo que quieres que haga otra persona, algo que todavía no es real. Por eso, con otro sujeto, piden que + subjuntivo: Te recomiendo que descanses.",
          "Con el pronombre (te, le, os) ya sabemos a quién va el consejo, y también se puede usar el infinitivo: Te recomiendo descansar. Y las reacciones de la consejera siguen la regla de siempre: emoción y duda → subjuntivo; certeza → indicativo.",
          "Carta 1: «Mi compañero de piso nunca lava los platos y me molesta mucho.»",
        ],
        [
          ["«Te sugiero que le dejes una nota amable.»", "I suggest you leave him a friendly note. (suggest + que + subjunctive)"],
          ["«Es mejor que habléis antes de que el problema crezca.»", "It's better that you (both) talk before the problem grows."],
        ],
        [
          fb("Completa la respuesta de la consejera.", "Me molesta que tu compañero no ___ nada en casa. (hacer)", "haga", "Emoción (me molesta que) → subjuntivo, formado desde hago: haga. «Hace» informaría sin reaccionar."),
          mc(
            "Aplica la regla: «Os propongo que ___ las tareas por semanas.» (repartir, vosotros)",
            ["repartáis", "repartís", "repartir", "repartiréis"],
            0,
            "Proponer, como sugerir, expresa lo que quieres que hagan otros: que + subjuntivo, repartáis (-ir → a). «Repartís» y «repartiréis» son indicativo, y «repartir» no encaja después de «que»."
          ),
        ]
      ),
      sec(
        "Carta 2: «No sé si mi novia me quiere»",
        "La duda pide subjuntivo; la certeza, indicativo.",
        [
          ["«Dudo que ella te quiera menos. Creo que solo está estresada.»", "I doubt she loves you less. I think she's just stressed."],
        ],
        [
          mc(
            "¿Por qué la consejera usa «quiera» pero «está»?",
            ["Dudo que → subjuntivo; creo que → indicativo.", "Quiera es pasado.", "Está es subjuntivo.", "No hay diferencia."],
            0,
            "Dudar exige subjuntivo (dudo que quiera) y creer afirmativo lleva indicativo (creo que está). «Quiera» no es pasado, «está» no es subjuntivo y sí hay diferencia."
          ),
        ]
      ),
    ],
    [
      fb("Completa la respuesta.", "Te sugiero que le ___ un mensaje sincero. (escribir)", "escribas", "Sugerir que + otro sujeto → subjuntivo: escribas (-ir → a)."),
      fb("Completa la respuesta.", "Me alegro de que ___ ayuda. (pedir, tú)", "pidas", "Alegrarse de que + subjuntivo; pedir (e → i) → pidas."),
      fb("Completa la respuesta.", "Es normal que ___ nervioso antes de una cita. (estar, tú)", "estés", "«Es normal que» valora: subjuntivo, estés. «Estás» solo informaría."),
      mt(
        "Relaciona cada problema con un buen consejo.",
        [
          ["Duermo muy poco.", "Te recomiendo que te acuestes antes."],
          ["Mi jefe me grita.", "Es importante que hables con Recursos Humanos."],
          ["Echo de menos a mi familia.", "Te sugiero que los llames más a menudo."],
          ["Estoy aburrido del trabajo.", "Quizás es hora de que busques algo nuevo."],
        ],
        "Todos los consejos usan una expresión de consejo o valoración (te recomiendo que, es importante que, es hora de que…) + subjuntivo."
      ),
      ms(
        "¿Qué respuestas son correctas?",
        ["Siento que estés triste.", "Creo que tienes razón.", "Te aconsejo que no dices nada.", "Ojalá que todo salga bien."],
        [0, 1, 3],
        "Sentir, ojalá (subjuntivo) y creer afirmativo (indicativo) están bien usados. «Te aconsejo que no dices nada» es incorrecta: aconsejar que pide subjuntivo, no digas."
      ),
      toEs("I recommend that you (tú) rest more.", "Te recomiendo que descanses más.", "«Recomendar que» + otro sujeto pide subjuntivo: descanses.", ["Te recomiendo descansar más.", "Recomiendo que descanses más."]),
      wo("No creo que sea buena idea mudarte ahora.", "No creer que + subjuntivo (sea).", "I don't think it's a good idea for you to move now."),
      { type: "fill-blank", prompt: "¿Cómo se dicen en español las palabras en negrita?", sentence: "Te recomiendo que ___ con tu novia esta noche.", answer: "hables", en: "I recommend that you [talk] to your girlfriend tonight.", explanation: "Recomendar que + subjuntivo: hables, no «hablas»." },
      { type: "fill-blank", prompt: "¿Cómo se dicen en español las palabras en negrita?", sentence: "Es mejor que no le ___ nada a tu jefe todavía.", answer: "digas", en: "It's better that you don't [tell] your boss anything yet.", explanation: "Es mejor que + subjuntivo irregular de decir (desde digo): digas." },
      { type: "fill-blank", prompt: "¿Cómo se dicen en español las palabras en negrita?", sentence: "Dudo que tu amiga ___ enfadada contigo.", answer: "esté", en: "I doubt your friend [is] angry with you.", explanation: "Dudar → subjuntivo (esté)." },
      toEs("Te sugiero salir más con tus amigos.", "Te sugiero que salgas más con tus amigos.", "Las dos formas son correctas; con «que» el verbo va en subjuntivo, formado desde salgo: salgas.", [], "Cambia el infinitivo por «que» + subjuntivo."),
      toEs("Te recomiendo que busques otro piso.", "Le recomiendo que busque otro piso.", "Con usted, el pronombre pasa a le y el verbo a la forma de él: busque (c → qu delante de e).", ["Le recomiendo que busque otro apartamento.", "Le recomiendo que busque otro departamento."], "Cambia la frase a usted."),
      toEs("Creo que tu marido solo esté cansado.", "Creo que tu marido solo está cansado.", "«Creo que» afirmativo expresa certeza: indicativo (está). El subjuntivo iría con «no creo que».", ["Creo que tu esposo solo está cansado."], "Corrige la frase."),
      toEs("I don't think your sister is jealous.", "No creo que tu hermana esté celosa.", "«No creo que» → subjuntivo: esté, no «está».", ["No pienso que tu hermana esté celosa."]),
      toEs("Siento que te sientes tan sola.", "Siento que te sientas tan sola.", "«Siento que» expresa pena: subjuntivo, te sientas. «Te sientes» es indicativo.", ["Lamento que te sientas tan sola."], "Corrige la frase."),
      toEs("It's better that you wait a few days before calling him. (tú)", "Es mejor que esperes unos días antes de llamarlo.", "Es mejor que + subjuntivo: esperes. Después de «antes de», infinitivo.", ["Es mejor que esperes unos días antes de llamarle.", "Es mejor que esperes algunos días antes de llamarlo."]),
      toEs("It bothers me that your roommate uses your things without asking.", "Me molesta que tu compañero de piso use tus cosas sin preguntar.", "Me molesta que + subjuntivo: use.", ["Me molesta que tu compañera de piso use tus cosas sin preguntar.", "Me molesta que tu compañero de piso use tus cosas sin pedir permiso.", "Me molesta que tu compañero de piso utilice tus cosas sin preguntar.", "Me molesta que tu compañero de cuarto use tus cosas sin preguntar."]),
      mc("Una lectora escribe: «Mi novio nunca me escucha». ¿Qué respuesta es correcta?", ["Te sugiero que hablas con él.", "Te sugiero que hables con él.", "Te sugiero hablas con él.", "Te sugiero que hablar con él."], 1, "Sugerir que + subjuntivo: hables. «Hablas» es indicativo, «te sugiero hablas» no tiene «que» y «que hablar» mezcla «que» con infinitivo."),
      wo("Te aconsejo que no tomes ninguna decisión hoy", "Aconsejar que + subjuntivo (tomes).", "I advise you not to make any decision today"),
      wo("Me alegro de que quieras arreglar la situación", "Me alegro de que + subjuntivo (quieras, e → ie).", "I'm glad you want to fix the situation"),
      toEs("I doubt your parents want to control your life; I think they're worried about you. (tú)", "Dudo que tus padres quieran controlar tu vida; creo que están preocupados por ti.", "Dudo que → subjuntivo (quieran); creo que → indicativo (están).", ["Dudo que tus padres quieran controlar tu vida. Creo que están preocupados por ti."]),
      { type: "speak", prompt: "Responde en voz alta como la consejera: una lectora no duerme por el estrés del trabajo.", text: "Siento que estés tan estresada. Te aconsejo que apagues el móvil por la noche.", explanation: "Siento que y te aconsejo que piden subjuntivo: estés, apagues (g → gu delante de e)." },
    ]
  ),
  L(
    "subjunctive-wishes-doubt-emotion-mastery-check",
    "b1r-error-hunt-creer-dudar",
    "Caza de errores: creo que, no creo que, dudo que",
    "La trampa más común del B1: los verbos de opinión y de duda. Encuentra cada error.",
    "7 min",
    [
      sec(
        "Recuerda la regla del «no»",
        [
          "Recuerda la regla: creer y pensar en afirmativo presentan algo como cierto, así que llevan indicativo (creo que es verdad). Al negarlos, lo que sigue ya no se afirma: subjuntivo (no creo que sea verdad).",
          "Dudar funciona al revés: dudar ya es negar la certeza → subjuntivo (dudo que venga); no dudar equivale a estar seguro → normalmente indicativo (no dudo que viene), aunque el subjuntivo también es correcto. Por eso los errores típicos son «creo que sea» y «dudo que es».",
        ],
        [
          ["Creo que es verdad. / No creo que sea verdad.", "I think it's true. / I don't think it's true."],
          ["Dudo que venga. / No dudo que viene.", "I doubt he's coming. / I don't doubt he's coming."],
        ],
        [
          mc(
            "Corrige: «Creo que ella esté en casa.»",
            ["Creo que ella está en casa.", "Creo que ella estuviera en casa.", "No creo que ella está en casa.", "No hay error."],
            0,
            "Creer en afirmativo lleva indicativo: creo que está. «Estuviera» es subjuntivo, «No creo que ella está» necesitaría subjuntivo (esté) y la frase original sí tiene error."
          ),
          fb("Corrige: aplica la regla a otro verbo.", "No me parece que el plan ___ justo. (el alumno escribió: es)", "sea", "«No me parece que» niega una opinión, igual que «no creo que»: subjuntivo, sea. «Es» solo va con «me parece que» en afirmativo."),
        ]
      ),
      sec(
        "Las preguntas",
        "En preguntas con ¿crees que…?, las dos opciones son posibles: el indicativo es neutral, el subjuntivo muestra más duda.",
        [
          ["¿Crees que va a llover?", "Do you think it's going to rain? (neutral)"],
          ["¿Crees que llueva?", "Do you really think it'll rain? (more doubt)"],
        ],
        [
          ms(
            "¿Qué frases son correctas?",
            ["¿Crees que es buena idea?", "¿Crees que sea buena idea?", "Creo que sea buena idea.", "No creo que es buena idea."],
            [0, 1],
            "En una pregunta con creer valen los dos modos: ¿Crees que es / sea buena idea? En afirmativo va indicativo, por eso «Creo que sea» es incorrecta; en negativo va subjuntivo, por eso «No creo que es» también lo es."
          ),
        ]
      ),
    ],
    [
      fb("Corrige el verbo.", "No pienso que Luis ___ razón. (el alumno escribió: tiene)", "tenga", "«No pensar que» expresa duda y pide subjuntivo: tenga, no «tiene»."),
      fb("Corrige el verbo.", "Pienso que el museo ___ cerrado los lunes. (el alumno escribió: esté)", "está", "«Pensar que» afirmativo expresa certeza y lleva indicativo: está, no «esté»."),
      fb("Corrige el verbo.", "Dudo que mis padres ___ el viaje. (pagar; el alumno escribió: pagan)", "paguen", "Dudar → subjuntivo; g → gu delante de e para mantener el sonido: paguen."),
      fb("Corrige el verbo.", "Estoy seguro de que ella ___ la mejor candidata. (el alumno escribió: sea)", "es", "«Estar seguro de que» expresa certeza → indicativo: es, no «sea»."),
      mc(
        "¿Cuál es correcta?",
        ["No es verdad que haya examen mañana.", "No es verdad que hay examen mañana.", "Es verdad que haya examen mañana.", "Es verdad que hubiera examen mañana."],
        0,
        "«No es verdad que» niega la certeza y pide subjuntivo: haya. «No es verdad que hay» usa indicativo por error, y «Es verdad que haya/hubiera» usa subjuntivo con una afirmación de certeza."
      ),
      toEs("I don't believe that he knows the answer.", "No creo que sepa la respuesta.", "No creer → subjuntivo; saber → sepa.", ["No creo que él sepa la respuesta.", "Yo no creo que sepa la respuesta."]),
      wo("Estoy seguro de que mañana hará sol.", "Estar seguro de que expresa certeza → indicativo (futuro: hará).", "I'm sure it'll be sunny tomorrow."),
      fb("Corrige el verbo.", "No creo que mi jefe ___ de vacaciones. (el alumno escribió: está)", "esté", "«No creo que» pide subjuntivo: esté, con tilde."),
      fb("Corrige el verbo.", "Creo que el examen ___ el lunes. (el alumno escribió: sea)", "es", "«Creo que» en afirmativo lleva indicativo: es."),
      fb("Corrige el verbo.", "Dudo que mis vecinos ___ la música. (bajar; el alumno escribió: bajan)", "bajen", "«Dudar que» + subjuntivo: bajen (-ar → e)."),
      { ...fb("Corrige el verbo.", "No dudo que ___ un buen profesor. (el alumno escribió: ser)", "es", "«No dudar» = certeza: normalmente indicativo (es); el subjuntivo (sea) también es correcto. El infinitivo no puede ir después de «que»."), altAnswers: ["sea"] },
      toEs("Creo que la tienda esté cerrada.", "Creo que la tienda está cerrada.", "«Creo que» + indicativo: está. «Creo que esté» es el error típico.", ["Pienso que la tienda está cerrada."], "Corrige la frase."),
      toEs("Creo que la farmacia está abierta.", "No creo que la farmacia esté abierta.", "Al negar creer, está → esté (subjuntivo).", ["No pienso que la farmacia esté abierta."], "Cambia la frase a negativa."),
      toEs("We doubt the bus will come today.", "Dudamos que el autobús venga hoy.", "Dudar que + subjuntivo: venga (no el futuro «vendrá»).", ["Dudamos que el autobús pase hoy.", "Dudamos que el bus venga hoy."]),
      toEs("Dudo que dices la verdad.", "No dudo que dices la verdad.", "Al añadir «no», dudar pasa a expresar certeza: el indicativo (dices) queda bien. Sin «no», haría falta digas.", ["No dudo de que dices la verdad.", "No dudo que digas la verdad.", "No dudo de que digas la verdad."], "Cambia la frase para expresar certeza, sin cambiar «dices»."),
      toEs("Do you think it's a good plan? (tú)", "¿Crees que es un buen plan?", "En preguntas con ¿crees que…? las dos formas valen; el indicativo es neutral.", ["¿Crees que sea un buen plan?", "¿Piensas que es un buen plan?", "¿Piensas que sea un buen plan?"]),
      toEs("She doesn't think her brother is lying.", "No cree que su hermano mienta.", "No creer que + subjuntivo: mienta (e → ie).", ["No cree que su hermano esté mintiendo.", "No piensa que su hermano mienta.", "No piensa que su hermano esté mintiendo."]),
      toEs("Creen que el hotel sea demasiado caro.", "Creen que el hotel es demasiado caro.", "Creer (afirmativo) + indicativo: es.", ["Piensan que el hotel es demasiado caro."], "Corrige la frase."),
      mc("Corrige: «No pienso que tienes razón.»", ["No pienso que tengas razón.", "No pienso que tener razón.", "Pienso que tengas razón.", "No hay error."], 0, "«No pensar que» pide subjuntivo: tengas. «Que tener» mezcla «que» con infinitivo y «pienso que tengas» usa subjuntivo con una afirmación."),
      mc("Corrige: «Dudo que el tren llega a tiempo.»", ["Dudo que el tren llegue a tiempo.", "Dudo que el tren llegará a tiempo.", "Dudo el tren llegue a tiempo.", "No hay error."], 0, "«Dudar que» + subjuntivo: llegue. El futuro «llegará» no va tras dudar, y no se puede omitir «que»."),
      wo("No creo que mi hermano sepa cocinar", "No creo que + subjuntivo (sepa).", "I don't think my brother knows how to cook"),
      wo("Pienso que tus padres tienen razón", "Pienso que + indicativo (tienen).", "I think your parents are right"),
      toEs("I think Marta is at home, but I doubt she wants to see anyone.", "Creo que Marta está en casa, pero dudo que quiera ver a nadie.", "Creo que → indicativo (está); dudo que → subjuntivo (quiera).", ["Pienso que Marta está en casa, pero dudo que quiera ver a nadie."]),
      { type: "speak", prompt: "Responde en voz alta: da tu opinión sobre si tu equipo va a ganar el partido: algo que crees y algo que dudas.", text: "Creo que mi equipo juega bien, pero dudo que gane el partido.", explanation: "Creo que → indicativo (juega); dudo que → subjuntivo (gane)." },
    ]
  ),
  L(
    "subjunctive-wishes-doubt-emotion-mastery-check",
    "b1r-mission-reacting-to-news",
    "Misión real: reaccionar a las noticias",
    "Tus amigos te cuentan noticias buenas y malas. Reacciona con emoción — y con el subjuntivo.",
    "7 min",
    [
      sec(
        "La idea: reaccionar no es informar",
        [
          "Recuerda la regla: cuando reaccionas a una noticia no informas de un hecho, dices lo que sientes ante él. Por eso, después de ¡Qué bien que…!, Me alegro de que…, Siento que…, Qué pena que…, Me sorprende que… o Me preocupa que…, el verbo va en subjuntivo, aunque la noticia sea totalmente cierta.",
          "Si quien siente y quien hace la acción son la misma persona, no hay «que»: se usa el infinitivo (Me alegro de verte). Y ojo con alegrarse: es «me alegro DE que…», pero «me alegra que…».",
        ],
        [
          ["—¡Tengo un trabajo nuevo! —¡Me alegro mucho de que tengas trabajo!", "I have a new job! — I'm so happy you have work! (alegrarse de que + subjuntivo)"],
          ["—Estoy enfermo. —Siento que estés enfermo.", "I'm sick. — I'm sorry you're sick. (la noticia es real, pero reaccionas: estés)"],
          ["—Me voy a vivir a Japón. —¡Me sorprende que te vayas tan lejos!", "I'm moving to Japan. — I'm surprised you're going so far away! (ir → vayas)"],
          ["—¡Por fin has vuelto! —Sí, ¡me alegro de estar en casa!", "You're back at last! — Yes, I'm glad to be home! (mismo sujeto: infinitivo, sin que)"],
        ],
        [
          fb("Reacciona con el verbo entre paréntesis.", "—Mi hermana se casa. —¡Qué bien que se ___! (casar)", "case", "¡Qué bien que…! expresa alegría ante la noticia, así que pide subjuntivo: casar → case. «Se casa» sería solo repetir el hecho, sin reaccionar."),
          mc(
            "Eres TÚ quien ha aprobado el examen y lo celebras. ¿Qué frase es correcta?",
            ["Me alegro de haber aprobado.", "Me alegro de que haya aprobado.", "Me alegro que he aprobado.", "Me alegro de que he aprobado."],
            0,
            "Quien siente (yo) y quien aprueba (yo) son la misma persona: alegrarse de + infinitivo (haber aprobado). «De que haya aprobado» hablaría de otra persona; «que he aprobado» y «de que he aprobado» usan indicativo tras una emoción."
          ),
        ]
      ),
      sec(
        "Los deseos: ¡Que + subjuntivo!",
        "Para despedirte con un buen deseo se usa que + subjuntivo sin verbo principal. Es la forma corta de «Espero que…»: ¡Que te mejores! = (Espero) que te mejores. No lleva tilde: ¡Qué…! con tilde es una exclamación («¡Qué bien!»), no un deseo.",
        [
          ["—Estoy enfermo. —¡Que te mejores!", "I'm sick. — Get well soon!"],
          ["—Esta noche salimos a cenar. —¡Que aproveche!", "We're going out for dinner tonight. — Enjoy your meal!"],
          ["—Mañana empiezo en la universidad. —¡Que te vaya muy bien!", "I start university tomorrow. — I hope it goes really well for you!"],
        ],
        [
          mc(
            "«¡Que te mejores!» significa…",
            ["Get well soon!", "You're better!", "I'm better!", "Be careful!"],
            0,
            "Que + subjuntivo sin verbo principal expresa un deseo: ¡Que te mejores! = Get well soon! No describe un hecho («You're better», «I'm better») ni es una advertencia («Be careful»)."
          ),
          mc(
            "Tu compañero se va una semana a la playa. ¿Qué le dices?",
            ["¡Que descanses mucho!", "¡Que descansas mucho!", "¡Qué descanses mucho!", "¡Que descansar mucho!"],
            0,
            "Un deseo es que + subjuntivo: descanses. «Descansas» es indicativo (describe un hecho), «¡Qué…!» con tilde es una exclamación de grado y «que descansar» usa un infinitivo que no tiene sujeto."
          ),
        ]
      ),
    ],
    [
      fb("Reacciona con el verbo entre paréntesis.", "—Perdí el móvil. —¡Qué pena que no lo ___! (encontrar, tú)", "encuentres", "Qué pena que expresa tristeza ante la noticia → subjuntivo. Encontrar diptonga (o → ue) también en subjuntivo: encuentres."),
      fb("Reacciona con el verbo entre paréntesis.", "—Mañana no hay clase. —¡Me encanta que no ___ clase! (haber)", "haya", "Me encanta que + subjuntivo. El subjuntivo de «hay» es «haya»; «hay» sería indicativo y no reacciona a la noticia."),
      mt(
        "Relaciona cada noticia con la mejor reacción.",
        [
          ["Por fin tengo vacaciones.", "¡Qué bien que puedas descansar!"],
          ["Mi abuelo está en el hospital.", "Siento mucho que esté enfermo."],
          ["Me voy a vivir a Japón.", "¡Qué sorpresa que te vayas tan lejos!"],
          ["Nadie viene a mi fiesta.", "Qué pena que nadie venga."],
        ],
        "Cada reacción encaja con el tono de la noticia (alegría, pena, sorpresa) y todas usan emoción + que + subjuntivo: puedas, esté, vayas, venga."
      ),
      ms(
        "¿Qué reacciones son correctas?",
        ["¡Qué bueno que estés aquí!", "Me sorprende que no lo sabes.", "Me preocupa que trabajes tanto.", "¡Que tengas buen viaje!"],
        [0, 2, 3],
        "«¡Qué bueno que!», «me preocupa que» y el deseo «¡Que tengas…!» llevan subjuntivo. «Me sorprende que no lo sabes» es incorrecta: la sorpresa es una reacción, así que debe ser «no lo sepas»."
      ),
      toEs("What a shame that you can't come! (tú)", "¡Qué pena que no puedas venir!", "«¡Qué pena que…!» expresa emoción y pide subjuntivo: no puedas (poder, o → ue).", ["¡Qué lástima que no puedas venir!", "Qué pena que no puedas venir.", "¡Es una pena que no puedas venir!"]),
      toEn("¡Que lo pases bien en la fiesta!", "Have a good time at the party!", "Que + subjuntivo sin verbo principal = un deseo para la otra persona, no una descripción.", ["Have fun at the party!", "Enjoy the party!", "Have a great time at the party!"]),
      wo("Me preocupa que mi hermano no duerma bien.", "Me preocupa que + subjuntivo: dormir → duerma (o → ue). El «no» va justo delante del verbo.", "It worries me that my brother isn't sleeping well."),
    ]
  ),
  L(
    "subjunctive-impersonal-ojala-2",
    "b1r-mission-ojala-wishes",
    "Misión real: deseos para todos",
    "Escribe mensajes de despedida, de cumpleaños y de ánimo — con ojalá, que + subjuntivo y expresiones impersonales.",
    "7 min",
    [
      sec(
        "Mensajes con ojalá",
        [
          "Recuerda la regla: ojalá (que) siempre lleva subjuntivo, con o sin «que», porque solo sirve para desear y un deseo no es un hecho. El verbo concuerda con su propio sujeto, no con ojalá: Ojalá se cumplan tus deseos (los deseos).",
          "En un mensaje escrito elige la persona antes de empezar: tú para amigos (te, tu), usted para tu jefa o alguien mayor (le/lo, su).",
        ],
        [
          ["¡Ojalá que te guste el regalo!", "I hope you like the gift! (gustar concuerda con el regalo)"],
          ["Ojalá haga buen tiempo en tu viaje.", "I hope the weather's good on your trip. (hacer → haga)"],
          ["Ojalá que le vaya muy bien en su nueva casa.", "I hope it goes very well for you in your new home. (usted: le, su)"],
        ],
        [
          fb("Completa el mensaje de cumpleaños.", "¡Ojalá que ___ todos tus deseos! (cumplirse)", "se cumplan", "Ojalá + subjuntivo; el sujeto es «todos tus deseos» (plural) → se cumplan."),
          mc(
            "Tu compañera de piso empieza mañana un trabajo nuevo. ¿Qué mensaje le escribes?",
            ["¡Ojalá te traten muy bien!", "¡Ojalá te tratan muy bien!", "¡Ojalá te tratarán muy bien!", "¡Ojalá tratarte muy bien!"],
            0,
            "Ojalá → subjuntivo: te traten. «Tratan» y «tratarán» son indicativo (hechos o predicciones) y «tratarte» es infinitivo, imposible tras ojalá."
          ),
        ]
      ),
      sec(
        "Mensajes con que + subjuntivo",
        "Sin verbo principal, que + subjuntivo funciona como un deseo breve: ¡Que te vaya bien! ¡Que descanses!",
        [
          ["¡Que tengas un buen viaje!", "Have a good trip!"],
          ["¡Que duermas bien!", "Sleep well!"],
        ],
        [
          mt(
            "Relaciona cada situación con el mensaje adecuado.",
            [
              ["Un amigo tiene un examen.", "¡Que tengas suerte!"],
              ["Tu madre se va a dormir.", "¡Que descanses!"],
              ["Unos amigos van a cenar.", "¡Que aproveche!"],
              ["Tu jefe se va de vacaciones.", "¡Que lo pase bien!"],
            ],
            "Fórmulas fijas muy frecuentes: que + subjuntivo, sin verbo principal. Con tu jefe usas usted: ¡Que lo pase bien! (pase, no pases)."
          ),
        ]
      ),
    ],
    [
      fb("Completa el mensaje de ánimo.", "Es importante que no ___ la esperanza. (perder, tú)", "pierdas", "Es importante que + sujeto concreto → subjuntivo. Perder diptonga (e → ie): pierdas."),
      fb("Completa el mensaje de despedida.", "Ojalá que nos ___ pronto. (ver, nosotros)", "veamos", "Ojalá → subjuntivo. Ver sale de «veo»: vea, veamos."),
      fb("Completa el mensaje.", "Es necesario que ___ mucha agua. (beber, usted)", "beba", "Es necesario que → subjuntivo; usted usa la tercera persona: beba (-er → -a)."),
      mc(
        "¿Cuál es el mensaje correcto para un amigo enfermo?",
        ["¡Que te mejores pronto!", "¡Que te mejoras pronto!", "¡Ojalá te mejoras pronto!", "¡Que mejorarte pronto!"],
        0,
        "Un deseo se expresa con que + subjuntivo: ¡Que te mejores pronto! «Te mejoras» es indicativo (también con ojalá, que pide subjuntivo) y «mejorarte» es infinitivo."
      ),
      ms(
        "¿Qué deseos están bien escritos?",
        ["Ojalá llueva esta noche.", "Ojalá que vienes a la boda.", "¡Que cumplas muchos más!", "Es mejor que salgamos temprano."],
        [0, 2, 3],
        "Ojalá, «¡Que cumplas…!» y «es mejor que» llevan subjuntivo. «Ojalá que vienes» es incorrecta: debe ser «vengas»."
      ),
      toEs("I hope you (tú) have a great time in Mexico!", "¡Ojalá que lo pases genial en México!", "Ojalá (o que) + subjuntivo: lo pases. Pasarlo genial = to have a great time; «lo» no se refiere a nada concreto.", ["¡Ojalá lo pases genial en México!", "¡Que lo pases genial en México!", "¡Ojalá que lo pases muy bien en México!", "¡Que lo pases muy bien en México!"]),
      wo("Ojalá que el año que viene podamos viajar juntos.", "Ojalá que + subjuntivo: poder → podamos (sin diptongo en nosotros).", "I hope that next year we can travel together."),
    ]
  ),
  L(
    "subjunctive-impersonal-ojala-2",
    "b1r-contrast-impersonal-expressions",
    "Contraste: es verdad que / es posible que",
    "Expresiones impersonales de certeza frente a expresiones de opinión, posibilidad y necesidad.",
    "7 min",
    [
      sec(
        "Dos familias",
        [
          "Recuerda la regla: todas estas frases empiezan igual (es + adjetivo + que), pero el adjetivo decide el modo.",
          "Certeza (es verdad, es cierto, es obvio, es evidente, está claro): la frase afirma que algo es un hecho → indicativo. Opinión, posibilidad o necesidad (es importante, es posible, es raro, es mejor, es necesario): la frase no afirma, valora o calcula → subjuntivo, aunque lo que sigue sea real (Es raro que no tengas hambre: es verdad que no tienes hambre, pero lo valoras).",
        ],
        [
          ["Es evidente que tienes talento.", "It's evident that you have talent. (certeza → indicativo)"],
          ["Es raro que no tengas hambre.", "It's strange that you're not hungry. (valoración → subjuntivo)"],
          ["Es probable que el vuelo salga tarde.", "The flight will probably leave late. (posibilidad → subjuntivo)"],
        ],
        [
          fb("Completa.", "Está claro que el equipo ___ mejor este año. (jugar)", "juega", "Está claro que afirma un hecho → indicativo: juega (u → ue)."),
        ]
      ),
      sec(
        "La negación cambia la familia",
        "Negar una certeza la convierte en duda: la frase ya no afirma nada, así que pasa al subjuntivo. No es verdad que…, no es cierto que…, no está claro que… → subjuntivo. (Al revés no pasa: «no es importante que» sigue con subjuntivo.)",
        [
          ["Es cierto que llueve.", "It's true it's raining. (certeza → indicativo)"],
          ["No es cierto que llueva.", "It's not true it's raining. (certeza negada → subjuntivo)"],
        ],
        [
          mc(
            "«No es obvio que él ___ culpable.»",
            ["sea", "es", "está", "será"],
            0,
            "Al negar «es obvio», la certeza desaparece y se usa subjuntivo: sea. «Es» y «será» son indicativo, y «está» es de estar, que no se usa con culpable en este sentido."
          ),
        ]
      ),
    ],
    [
      ms(
        "¿Qué expresiones llevan subjuntivo?",
        ["Es verdad que…", "Es probable que…", "Está claro que…", "Es raro que…"],
        [1, 3],
        "«Es probable que» y «es raro que» expresan probabilidad y reacción: subjuntivo. «Es verdad que» y «está claro que» expresan certeza: indicativo."
      ),
      fb("Completa.", "Es mejor que ___ en taxi; es muy tarde. (ir, nosotros)", "vayamos", "Es mejor que → subjuntivo; ir → vayamos."),
      fb("Completa.", "Es cierto que ___ muchos turistas en verano. (haber)", "hay", "Es cierto que afirma un hecho → indicativo: hay, no «haya»."),
      fb("Completa.", "Es increíble que nadie ___ la respuesta. (saber)", "sepa", "Es increíble valora el hecho (te sorprende) → subjuntivo: sepa."),
      ms(
        "¿Qué frases son correctas?",
        ["Es evidente que estás cansado.", "Es posible que llueva.", "Es obvio que sepa la verdad.", "Es necesario que todos participen."],
        [0, 1, 3],
        "«Es evidente que» (certeza) lleva indicativo; «es posible que» y «es necesario que», subjuntivo. «Es obvio que sepa» es incorrecta: la certeza pide «sabe»."
      ),
      toEs("It's important that we arrive early.", "Es importante que lleguemos temprano.", "Es importante que + sujeto concreto (nosotros) → subjuntivo; llegar → lleguemos (-gar → -gue).", ["Es importante que lleguemos pronto."]),
      wo("Es una lástima que no haya entradas para el concierto.", "Es una lástima que + subjuntivo (haber → haya).", "It's a shame there aren't tickets for the concert."),
    ]
  ),
  L(
    "subjunctive-impersonal-ojala-2",
    "b1r-spiral-subjunctive-foundations",
    "Repaso en espiral: los cimientos del subjuntivo",
    "Formación, deseo, duda, emoción, expresiones impersonales y ojalá — todo junto, y con el pasado del A2.",
    "8 min",
    [
      sec(
        "Un correo de una amiga",
        [
          "Recuerda la regla: el subjuntivo aparece después de «que» cuando la frase principal expresa deseo (quiero que, espero que, ojalá), emoción (siento que, me alegro de que), duda (no creo que, dudo que) o valoración (es importante que). Lo que se cuenta como hecho (fui, me dolía, sé que, es verdad que) va en indicativo, también en pasado.",
          "Lee el correo de Laura y fíjate en qué verbos cuentan hechos y cuáles dependen de un deseo o una valoración.",
        ],
        [
          ["Ayer fui al médico porque me dolía la espalda.", "Yesterday I went to the doctor because my back hurt."],
          ["Me dijo que es importante que haga ejercicio y que no levante cosas pesadas.", "He told me it's important that I exercise and not lift heavy things."],
          ["Ojalá que me recupere pronto, porque quiero que vayamos a la playa en julio.", "I hope I recover soon, because I want us to go to the beach in July."],
        ],
        [
          ms(
            "¿Qué verbos del correo están en subjuntivo?",
            ["haga", "dolía", "recupere", "vayamos"],
            [0, 2, 3],
            "Haga (es importante que), recupere (ojalá) y vayamos (quiero que) son subjuntivo: dependen de una valoración o un deseo. «Dolía» es imperfecto de indicativo: describe un hecho del pasado."
          ),
          fb("Responde a Laura.", "Siento mucho que te ___ la espalda. (doler)", "duela", "Emoción → subjuntivo; doler (o→ue) → duela."),
        ]
      ),
    ],
    [
      fb("Completa.", "Me alegro de que el médico te ___ tan bien. (tratar)", "trate", "Alegrarse de que + otro sujeto → subjuntivo: trate."),
      fb("Completa.", "Creo que ___ una buena idea ir a la playa. (ser)", "es", "Creer afirmativo presenta tu opinión como verdad → indicativo: es. Solo «no creo que» pide subjuntivo."),
      fb("Completa.", "Cuando era niña, Laura ___ al mar cada verano. (ir)", "iba", "Hábito en el pasado («cada verano») → imperfecto: iba."),
      mc(
        "«Quiero que me ___ cuando llegues.»",
        ["llames", "llamas", "llamaste", "llamarás"],
        0,
        "«Querer que» + otro sujeto pide subjuntivo: llames. «Llamas» es indicativo, «llamaste» es pasado y «llamarás» es futuro."
      ),
      mt(
        "Relaciona cada principio con su final.",
        [
          ["Es evidente que", "Laura necesita descansar."],
          ["Es posible que", "Laura no pueda ir en julio."],
          ["Laura sabe que", "el médico tiene razón."],
          ["Laura duda que", "el dolor desaparezca pronto."],
        ],
        "Certeza y saber afirman un hecho → indicativo (necesita, tiene); posibilidad y duda no lo afirman → subjuntivo (pueda, desaparezca)."
      ),
      toEs("I hope you (tú) feel better. We'll go to the beach in July.", "Espero que te sientas mejor. Iremos a la playa en julio.", "Esperar que + subjuntivo (sentirse → te sientas); el segundo verbo, iremos, va en futuro simple.", ["Ojalá que te sientas mejor. Iremos a la playa en julio.", "Espero que te sientas mejor. Vamos a ir a la playa en julio."]),
      wo("No creo que Laura pueda nadar este verano.", "No creer que + subjuntivo (poder → pueda).", "I don't think Laura will be able to swim this summer."),
    ]
  ),
  L(
    "commands-imperative-2",
    "b1r-mission-recipe",
    "Misión real: escribe la receta",
    "Convierte las notas de una abuela en una receta con mandatos de usted — y luego explícasela a un amigo con tú.",
    "8 min",
    [
      sec(
        "Las notas de la abuela",
        [
          "Recuerda la regla: las notas de cocina suelen ir en infinitivo (pelar, batir); una receta publicada usa mandatos de usted, que toman la forma del subjuntivo: corte, añada, mezcle, sirva. Se forman desde la forma yo: pongo → ponga, frío → fría.",
          "Los pronombres se pegan al final del mandato afirmativo, con tilde si hace falta (córtelas), y van delante en el negativo (no las corte).",
        ],
        [
          ["Pelar las patatas y cortarlas en rodajas. → Pele las patatas y córtelas en rodajas.", "Peel the potatoes and slice them. (usted + pronombre pegado)"],
          ["Batir los huevos con sal. → Bata los huevos con sal.", "Beat the eggs with salt. (batir → bata)"],
        ],
        [
          fb("Convierte la nota en mandato de usted.", "Freír las patatas. → ___ las patatas.", "Fría", "El mandato de usted usa el subjuntivo; freír cambia e→i: fría."),
        ]
      ),
      sec(
        "Ahora, con tú",
        "Para un amigo, usa el mandato afirmativo de tú (igual que la forma él del presente): pela, corta, bate. Los pronombres se pegan al final.",
        [
          ["Pela las patatas y córtalas.", "Peel the potatoes and cut them."],
          ["No las cortes muy finas.", "Don't cut them too thin."],
        ],
        [
          fb("Da la instrucción con tú.", "___ los huevos con las patatas. (mezclar)", "Mezcla", "Tú afirmativo = forma él del presente: mezcla."),
        ]
      ),
    ],
    [
      fb("Mandato de usted.", "___ la sartén en el fuego. (poner)", "Ponga", "Usted → subjuntivo desde «pongo»: ponga."),
      { ...fb("Mandato de tú.", "___ la vuelta a la tortilla con un plato. (dar, tú + le)", "Dale", "Tú afirmativo da + le pegado → dale (dos sílabas, sin tilde)."), altAnswers: ["Da"] },
      fb("Mandato negativo de tú.", "No ___ demasiado aceite. (echar)", "eches", "Negativo de tú = no + subjuntivo: echo → no eches."),
      mt(
        "Relaciona cada mandato de usted con su versión de tú.",
        [
          ["Añada la sal.", "Añade la sal."],
          ["Sirva caliente.", "Sirve caliente."],
          ["Haga la masa.", "Haz la masa."],
          ["Ponga el horno a 180°.", "Pon el horno a 180°."],
        ],
        "De usted a tú: los regulares pasan a la forma él del presente (añade, sirve); hacer → haz y poner → pon son irregulares de tú."
      ),
      mc(
        "«Cut it (the onion) into small pieces» — con tú:",
        ["Córtala en trozos pequeños.", "Cortala en trozos pequeños.", "La corta en trozos pequeños.", "Córtela en trozos pequeños."],
        0,
        "Con tú, el pronombre se pega y se añade tilde para mantener el acento: córtala. «Cortala» no lleva tilde, «La corta» es una descripción y «Córtela» es la forma de usted."
      ),
      toEs("Don't open the oven while it's cooking. (tú)", "No abras el horno mientras se cocina.", "Negativo de tú → subjuntivo: no abras (abro → abras).", ["No abras el horno mientras se está cocinando.", "No abras el horno mientras cocina."]),
      wo("Sírvala con una ensalada verde y pan.", "Mandato de usted (sirva) + pronombre pegado + tilde para mantener el acento: sírvala.", "Serve it with a green salad and bread. (usted)"),
    ]
  ),
  L(
    "commands-imperative-2",
    "b1r-transform-commands",
    "Transformaciones: del sí al no",
    "Convierte mandatos afirmativos en negativos (y al revés) sin perder los pronombres por el camino.",
    "7 min",
    [
      sec(
        "Los pronombres se mueven",
        [
          "Recuerda la regla: en el afirmativo, el pronombre va pegado al final (dímelo); en el negativo, va delante del verbo conjugado, igual que en una frase normal (no me lo digas). El orden de dos pronombres no cambia nunca: indirecto + directo (me lo, se lo).",
          "La tilde del afirmativo (cómpralo, siéntese) solo está para mantener el acento al alargar la palabra; en el negativo la palabra vuelve a ser corta y la pierde (no lo compres).",
        ],
        [
          ["Cómpralo. → No lo compres.", "Buy it. → Don't buy it. (lo pasa delante; se va la tilde)"],
          ["Siéntese. → No se siente.", "Sit down. → Don't sit down. (usted)"],
          ["Dáselo. → No se lo des.", "Give it to him. → Don't give it to him. (se lo, mismo orden)"],
        ],
        [
          fb("Cambia a negativo.", "Llámame. → No ___ llames.", "me", "En el negativo, el pronombre va delante del verbo: no me llames."),
        ]
      ),
      sec(
        "Los verbos también cambian",
        "Con tú, además, cambia el verbo: el negativo usa el subjuntivo (desde la forma yo): ven → no vengas; sal → no salgas; ten → no tengas. Con usted, ustedes y nosotros el verbo no cambia: solo se mueve el pronombre (siéntese → no se siente).",
        [
          ["Ven aquí. → No vengas aquí.", "Come here. → Don't come here."],
          ["Hazlo ahora. → No lo hagas ahora.", "Do it now. → Don't do it now."],
        ],
        [
          fb("Cambia a negativo.", "Sal de casa. → No ___ de casa.", "salgas", "Negativo de tú = subjuntivo, formado desde salgo: no salgas."),
        ]
      ),
    ],
    [
      fb("Cambia a afirmativo.", "No te preocupes. → ___.", "Preocúpate", "Afirmativo de tú: preocupa + te pegado, con tilde para mantener el acento."),
      fb("Cambia a afirmativo.", "No se lo digas. → ___.", "Díselo", "Di (tú) + se + lo → díselo, mismo orden de pronombres."),
      fb("Cambia a negativo.", "Pónganlo aquí. → No lo ___ aquí.", "pongan", "Negativo de ustedes: pronombre delante + subjuntivo: no lo pongan."),
      fb("Cambia a negativo.", "Vámonos. → No nos ___.", "vayamos", "Nosotros: vámonos → no nos vayamos."),
      mc(
        "El negativo de «Dímelo» es…",
        ["No me lo digas.", "No dímelo.", "No me lo dices.", "No lo me digas."],
        0,
        "El negativo pone los pronombres delante (indirecto primero) y usa subjuntivo: No me lo digas. «No dímelo» usa la forma afirmativa, «No me lo dices» es indicativo y «No lo me» invierte el orden."
      ),
      ms(
        "¿Qué pares afirmativo/negativo son correctos?",
        ["Ve → No vayas", "Sé → No seas", "Pon → No pongas", "Di → No dices"],
        [0, 1, 2],
        "El negativo de tú usa el subjuntivo: no vayas, no seas, no pongas. «Di → No dices» es incorrecta: el negativo de decir es «no digas»."
      ),
      wo("No te vayas todavía, quédate un rato más.", "Negativo: pronombre delante (no te vayas); afirmativo: pegado (quédate).", "Don't leave yet, stay a bit longer."),
    ]
  ),
  L(
    "commands-imperative-2",
    "b1r-error-hunt-commands",
    "Caza de errores: los mandatos",
    "Mandatos negativos con la forma afirmativa, pronombres mal colocados y tú mezclado con usted.",
    "7 min",
    [
      sec(
        "Tres errores típicos",
        [
          "Recuerda la regla: tú afirmativo = forma él del presente; todos los demás mandatos (negativos, usted, ustedes, nosotros) = subjuntivo. Pronombres pegados al afirmativo, delante del negativo.",
          "De ahí salen tres errores típicos: (1) usar la forma afirmativa en negativo: ✗ no habla → ✓ no hables; (2) poner el pronombre al final en negativo: ✗ no dígalo → ✓ no lo diga; (3) mezclar tú y usted en el mismo mensaje: si empiezas con usted, sigue con usted.",
        ],
        [
          ["✗ ¡No toca eso! → ✓ ¡No toques eso!", "Don't touch that! (error 1: negativo con subjuntivo)"],
          ["✗ No lo olvídelo. → ✓ No lo olvide.", "Don't forget it. (error 2: pronombre delante)"],
          ["✗ Señora, pasa y siéntese. → ✓ Señora, pase y siéntese.", "Ma'am, come in and sit down. (error 3: todo en usted)"],
        ],
        [
          mc(
            "Corrige: «No olvidas las llaves.» (tú)",
            ["No olvides las llaves.", "No olvidar las llaves.", "No las olvidas.", "No hay error."],
            0,
            "El negativo de tú usa el subjuntivo: no olvides. «No olvidar» es infinitivo (carteles), «No las olvidas» es indicativo y la frase original sí tiene error."
          ),
        ]
      ),
    ],
    [
      fb("Corrige el mandato.", "Por favor, ___ la puerta. (usted; el alumno escribió: cierra)", "cierre", "El mandato de usted usa el subjuntivo, con e→ie: cierre, no «cierra» (tú)."),
      fb("Corrige el mandato.", "¡No ___ tan rápido! (conducir, tú; el alumno escribió: conduces)", "conduzcas", "Negativo de tú = subjuntivo, desde conduzco: no conduzcas."),
      fb("Corrige el mandato.", "___, por favor. (sentarse, tú; el alumno escribió: Siéntate te)", "Siéntate", "Un solo pronombre, pegado al final del afirmativo: siéntate. Repetirlo (te) es un error."),
      ms(
        "¿Qué mandatos tienen un error?",
        ["No me mires así.", "Tráigamelo, por favor.", "No lo toca.", "Id a dormir."],
        [2],
        "«No lo toca» está mal: el negativo usa subjuntivo, no lo toques (tú) o no lo toque (usted). «No me mires», «Tráigamelo» e «Id a dormir» son correctos."
      ),
      mc(
        "Un cartel en un museo dice… ¿cuál es correcto?",
        ["No toquen las obras.", "No tocan las obras.", "No tocad las obras.", "No toquen las obras de."],
        0,
        "Un cartel se dirige a ustedes, y el negativo usa el subjuntivo: no toquen (c → qu). «No tocan» es indicativo, «No tocad» usa la forma afirmativa de vosotros y «las obras de» queda incompleta."
      ),
      mt(
        "Relaciona el infinitivo con el mandato afirmativo de tú.",
        [
          ["tener", "ten"],
          ["ir", "ve"],
          ["ser", "sé"],
          ["decir", "di"],
        ],
        "Ocho mandatos irregulares de tú: di, haz, ve, pon, sal, sé, ten, ven."
      ),
      toEs("Don't worry, sir, sit down here.", "No se preocupe, señor, siéntese aquí.", "Todo en usted: no se preocupe, siéntese.", ["No se preocupe, señor, siéntese acá."]),
    ]
  ),
  L(
    "conditional-tense-2",
    "b1r-dialogue-polite-requests",
    "Laboratorio de diálogo: peticiones corteses",
    "En el hotel, en la oficina y en casa de tus suegros: suaviza cada petición con el condicional.",
    "7 min",
    [
      sec(
        "Del mandato a la cortesía",
        [
          "Recuerda la regla: el condicional convierte una orden en una petición educada: Tráeme agua → ¿Me traerías agua? → ¿Podría traerme agua? Funciona porque el condicional habla de lo imaginado: no exiges, preguntas si sería posible, y el otro puede decir que no sin quedar mal.",
          "En este diálogo vas a usarlo, no a traducirlo: en cada situación elige o construye la petición que pide la relación. Con un desconocido o un cliente, usted (¿Podría…?, ¿Le importaría…?, ¿Sería tan amable de…?); con un amigo, tú (¿Podrías…?, ¿Te importaría…?). Después de todas estas fórmulas va un infinitivo.",
        ],
        [
          ["¿Podría decirme la hora?", "Could you tell me the time? (usted: podría)"],
          ["¿Te importaría cerrar la ventana?", "Would you mind closing the window?"],
          ["Me gustaría hablar con el gerente.", "I'd like to speak with the manager."],
        ],
        [
          fb("Transforma la orden en una petición cortés.", "Quiero un café. → ___ un café, por favor. (querer, yo)", "Querría", "Querer en condicional: querría (también se oye mucho quisiera, igual de cortés)."),
        ]
      ),
      sec(
        "Consejos suaves",
        "Yo que tú… / Deberías… / Sería mejor… son formas suaves de aconsejar: el condicional presenta el consejo como una opinión sobre una situación imaginada («si yo estuviera en tu lugar»), no como una orden.",
        [
          ["Yo que tú, hablaría con ella.", "If I were you, I'd talk to her."],
          ["Deberías descansar un poco.", "You should rest a bit."],
        ],
        [
          mc(
            "«Yo que tú, no ___ nada.»",
            ["diría", "diré", "digo", "decirías"],
            0,
            "«Yo que tú» + condicional; decir usa la raíz dir-: diría. «Diré» es futuro, «digo» es presente y «decirías» no existe."
          ),
        ]
      ),
    ],
    [
      fb("Petición cortés.", "¿___ ayudarme con la maleta? (poder, usted)", "Podría", "Con usted, tercera persona del condicional: poder → podr- + -ía = podría. «Puede» sería correcto pero más directo; «podrías» es para tú."),
      fb("Petición cortés.", "¿Te ___ venir un poco antes? (importar)", "importaría", "¿Te importaría + infinitivo? = Would you mind + -ing? Importar va en tercera persona (importaría) porque lo que «importa» es venir; te es la persona."),
      fb("Consejo suave.", "___ estudiar más si quieres aprobar. (deber, tú)", "Deberías", "Deber en condicional (deberías) suaviza el consejo; «debes» suena a obligación."),
      mt(
        "Relaciona cada situación con una petición adecuada.",
        [
          ["En un hotel, necesitas otra toalla.", "¿Podría traerme otra toalla?"],
          ["Tu compañero pone la música alta.", "¿Te importaría bajar la música?"],
          ["En una tienda, quieres ver un reloj.", "Me gustaría ver ese reloj."],
          ["Tu amiga está muy estresada.", "Deberías tomarte unos días libres."],
        ],
        "Todas usan el condicional para sonar amables; usted con el hotel y la tienda (podría, me gustaría), tú con el compañero y la amiga (te importaría, deberías)."
      ),
      mc(
        "¿Cuál es la forma más cortés?",
        ["¿Sería tan amable de firmar aquí?", "Firme aquí.", "Tienes que firmar aquí.", "Firma aquí ya."],
        0,
        "«¿Sería tan amable de…?» usa usted y el condicional: es la fórmula más cortés. «Firme aquí» es una orden, «Tienes que firmar» es una obligación y «Firma aquí ya» es brusca."
      ),
      toEs("Would you (usted) mind waiting a moment?", "¿Le importaría esperar un momento?", "«Would you mind» con usted = ¿Le importaría + infinitivo?", ["¿Le importaría esperar un momentito?", "¿Podría esperar un momento?"]),
      wo("Nos gustaría reservar una mesa para cuatro personas.", "Nos gustaría + infinitivo: gustar en condicional para pedir algo con cortesía; gustaría en singular porque lo que gusta es reservar.", "We'd like to book a table for four."),
    ]
  ),
  L(
    "conditional-tense-2",
    "b1r-mission-million",
    "Misión real: ¿qué harías con un millón?",
    "Un concurso de televisión te hace preguntas hipotéticas. Responde con el condicional.",
    "7 min",
    [
      sec(
        "La primera pregunta",
        [
          "Tu misión: estás en un concurso y el presentador solo hace preguntas imposibles. Como el millón es imaginario, todo lo que contestes va en condicional: lo que harías, no lo que haces (presente) ni lo que harás (futuro, que sería un plan real).",
          "Truco para responder: repite el verbo de la pregunta cambiando la persona. ¿Qué harías? → Haría… ¿Dónde vivirías? → Viviría… ¿Dejarías tu trabajo? → No, no lo dejaría.",
        ],
        [
          ["—¿Qué harías con un millón de euros?", "What would you do with a million euros? (harías → haría)"],
          ["—Primero, le compraría una casa a mi madre. Después, viajaría por todo el mundo.", "First, I'd buy my mother a house. Then I'd travel around the world."],
        ],
        [
          fb("Responde.", "Yo ___ la mitad a una ONG. (dar)", "daría", "Dar es regular en condicional: dar + -ía = daría. «Daré» sería una promesa real, y el millón es imaginario."),
        ]
      ),
      sec(
        "Más preguntas imposibles",
        "Las raíces irregulares son las mismas que las del futuro, porque los dos tiempos se forman sobre la misma base: tendría, saldría, haría, podría, sabría… Si dudas, piensa en el futuro (tendré) y cambia solo la terminación (-ía).",
        [
          ["—¿Dónde vivirías? —Viviría en una isla.", "Where would you live? — I'd live on an island."],
          ["—¿Dejarías tu trabajo? —No, no lo dejaría.", "Would you quit your job? — No, I wouldn't quit it."],
        ],
        [
          fb("Responde.", "Mis amigos y yo ___ una fiesta enorme. (hacer)", "haríamos", "«Mis amigos y yo» = nosotros. Hacer → har- (como haremos) + -íamos: haríamos, no «haceríamos»."),
        ]
      ),
    ],
    [
      fb("Responde.", "¿Tú ___ un coche de lujo? (tener)", "tendrías", "Tener → tendr- (la e se cambia por d, como en tendré) + -ías: tendrías, no «tenerías»."),
      fb("Responde.", "Mi hermana ___ del país inmediatamente. (salir)", "saldría", "Salir → saldr- + -ía: saldría. «Saliría» no existe."),
      fb("Responde.", "Nadie ___ qué decir. (saber)", "sabría", "Saber pierde la e: sabr- + -ía = sabría. Nadie va con el verbo en singular."),
      mt(
        "Relaciona cada infinitivo con su condicional (yo).",
        [
          ["poner", "pondría"],
          ["venir", "vendría"],
          ["querer", "querría"],
          ["decir", "diría"],
        ],
        "Mismas raíces que el futuro, terminaciones de -ía."
      ),
      ms(
        "¿Qué respuestas son correctas?",
        ["Yo compraría una granja.", "Nosotros viajaríamos en barco.", "Ellos podrían ayudar a su familia.", "Tú haceríais una fiesta."],
        [0, 1, 2],
        "El condicional une la raíz del futuro con -ía: compraría, viajaríamos, podrían. «Tú haceríais» tiene dos errores: hacer usa la raíz har- y con tú es harías."
      ),
      toEs("I would never work again.", "Nunca volvería a trabajar.", "Volver a + infinitivo = to do again; condicional volvería.", ["No volvería a trabajar nunca.", "Nunca trabajaría otra vez.", "Nunca más trabajaría."]),
      wo("¿Qué le regalarías a tu mejor amigo?", "Le anuncia a tu mejor amigo y va delante del verbo; regalar + -ías = regalarías.", "What would you give your best friend?"),
    ]
  ),
  L(
    "conditional-tense-2",
    "b1r-contrast-future-conditional",
    "Contraste: iré / iría",
    "Futuro para lo que va a pasar, condicional para lo que pasaría. Una letra de diferencia, dos mundos distintos.",
    "7 min",
    [
      sec(
        "Mismas raíces, terminaciones diferentes",
        "Recuerda la regla: futuro y condicional se construyen sobre la misma base (el infinitivo o la raíz irregular: saldr-, har-, podr-…), así que solo la terminación te dice cuál es. Futuro: -é, -ás, -á, -emos, -éis, -án. Condicional: -ía, -ías, -ía, -íamos, -íais, -ían. Si sabes uno, sabes el otro: saldré → saldría.",
        [
          ["Mañana saldré temprano.", "Tomorrow I will leave early. (plan)"],
          ["Con más tiempo, saldría más.", "With more time, I would go out more. (hypothetical)"],
        ],
        [
          ms(
            "¿Qué formas son condicionales?",
            ["podría", "podrá", "haríamos", "haremos"],
            [0, 2],
            "Las terminaciones en -ía son del condicional: podría, haríamos. «Podrá» y «haremos» son futuro."
          ),
        ]
      ),
      sec(
        "¿Realidad o hipótesis?",
        [
          "Pregúntate: ¿es un plan o una predicción (futuro), o algo imaginado, cortés o condicionado (condicional)? El futuro habla del mundo real que viene; el condicional, de un mundo posible que quizá no llegue.",
          "Por eso el condicional sirve también como «futuro del pasado»: lo que alguien veía venir en un momento ya pasado. Dice que vendrá → Dijo que vendría.",
        ],
        [
          ["El sábado iremos a la playa.", "On Saturday we'll go to the beach."],
          ["Me encantaría ir a la playa, pero tengo que trabajar.", "I'd love to go to the beach, but I have to work. (deseo que no se cumple)"],
          ["Ana dijo que llamaría por la tarde.", "Ana said she would call in the afternoon. (futuro visto desde el pasado)"],
        ],
        [
          mc(
            "«Con un coche nuevo, ___ al trabajo en diez minutos.» (hipótesis)",
            ["llegaría", "llegaré", "llego", "llegué"],
            0,
            "Una situación imaginada (con un coche nuevo) se expresa en condicional: llegaría. «Llegaré» es futuro real, «llego» es presente y «llegué» es pasado."
          ),
        ]
      ),
    ],
    [
      fb("¿Futuro o condicional?", "El año que viene ___ a la universidad. (ir, yo)", "iré", "Plan decidido para una fecha real → futuro: iré. «Iría» lo haría sonar a deseo que quizá no se cumpla."),
      fb("¿Futuro o condicional?", "Yo en tu lugar no ___ ese coche. (comprar)", "compraría", "«Yo en tu lugar» imagina otra situación → condicional: compraría, no «compraré»."),
      fb("¿Futuro o condicional?", "¿___ usted repetir la pregunta, por favor? (poder)", "Podría", "Petición cortés → condicional: podría. «Podrá» preguntaría si será capaz en el futuro."),
      fb("¿Futuro o condicional?", "Te prometo que te ___ mañana. (llamar)", "llamaré", "Una promesa es un compromiso real → futuro: llamaré. «Llamaría» sonaría a algo dudoso."),
      mt(
        "Relaciona cada frase con su función.",
        [
          ["Lloverá mañana.", "predicción"],
          ["¿Me ayudarías?", "petición cortés"],
          ["Deberías dormir más.", "consejo"],
          ["Me casaré en junio.", "plan"],
        ],
        "Futuro: predicciones y planes. Condicional: cortesía, consejos e hipótesis."
      ),
      toEn("Dijo que vendría, pero no vino.", "He said he would come, but he didn't.", "El condicional también es el «futuro del pasado»: desde «dijo», venir era algo por venir, así que va en condicional (vendría), igual que «would» en inglés.", ["He said he'd come, but he didn't come."]),
      wo("Me gustaría saber qué harás después de graduarte.", "Los dos tiempos en una frase: condicional cortés (me gustaría) + futuro para el plan real (harás).", "I'd like to know what you'll do after graduating."),
    ]
  ),
  L(
    "si-clauses-simple-2",
    "b1r-mission-if-then-plans",
    "Misión real: planes con condiciones",
    "Organiza un fin de semana que depende del tiempo, del dinero y de los amigos: si + presente, luego futuro o mandato.",
    "7 min",
    [
      sec(
        "Plan A y plan B",
        [
          "Tu misión: organizar un fin de semana que depende del tiempo, del dinero y de los amigos. Para cada imprevisto necesitas un plan B, y eso se dice con una condición real: si + presente → presente, futuro o mandato.",
          "Recuerda por qué: «si» ya marca que la condición puede pasar, así que nunca lleva futuro (✗ si lloverá). El futuro, si lo hay, va en el plan: …iremos a la montaña.",
        ],
        [
          ["Si hace sol, iremos a la montaña.", "If it's sunny, we'll go to the mountains. (plan A)"],
          ["Si llueve, nos quedamos en casa y vemos una película.", "If it rains, we stay home and watch a movie."],
        ],
        [
          fb("Completa el plan.", "Si ___ tiempo, visitaremos el museo. (tener, nosotros)", "tenemos", "La condición va en presente (tenemos), nunca en futuro («tendremos»): el futuro ya está en el plan, visitaremos."),
        ]
      ),
      sec(
        "Instrucciones para tu compañero",
        "Si + presente → mandato: para dejarle instrucciones a tu compañero para cada caso. El mandato sigue sus reglas: pronombre pegado en afirmativo (ábrelo, dile).",
        [
          ["Si llega el paquete, ábrelo.", "If the package arrives, open it."],
          ["Si ves a Marta, dile que la llamo luego.", "If you see Marta, tell her I'll call her later."],
        ],
        [
          fb("Completa la instrucción.", "Si tienes hambre, ___ algo de la nevera. (coger, tú)", "coge", "Mandato de tú: coge. Ojo: coger es neutro en España, pero en México, Argentina y buena parte de Latinoamérica es vulgar; allí se dice tomar o agarrar."),
        ]
      ),
    ],
    [
      fb("Completa.", "Si el tren ___ tarde, perderemos la conexión. (llegar)", "llega", "Si + presente de indicativo: llega, no «llegará» ni «llegue»."),
      fb("Completa.", "Si no encuentras las llaves, ___ al portero. (llamar, tú)", "llama", "Instrucción para tu compañero → mandato de tú: llama (igual que la tercera persona del presente)."),
      fb("Completa.", "Si mis padres vienen, ___ paella. (hacer, yo, futuro)", "haré", "El plan va en futuro: hacer → har- + -é = haré, con tilde."),
      mc(
        "¿Cuál es correcta?",
        ["Si me llamas, te contaré todo.", "Si me llamarás, te contaré todo.", "Si me llames, te contaré todo.", "Si me llamarías, te cuento todo."],
        0,
        "Tras «si» real va el presente de indicativo: si me llamas. «Si me llamarás» (futuro), «si me llames» (subjuntivo) y «si me llamarías» (condicional) son incorrectas."
      ),
      mt(
        "Relaciona cada condición con su resultado lógico.",
        [
          ["Si hace frío,", "ponte un abrigo."],
          ["Si estás cansado,", "vete a dormir."],
          ["Si no hay pan,", "lo compraré en la tienda de la esquina."],
          ["Si terminas pronto,", "llámame."],
        ],
        "Condición en presente; resultado en mandato (ponte, vete, llámame) o futuro (lo compraré), según des una instrucción o anuncies un plan."
      ),
      toEs("If you (tú) need help, call me.", "Si necesitas ayuda, llámame.", "Si + presente + mandato con pronombre pegado.", ["Si necesitas ayuda, me llamas.", "Si tú necesitas ayuda, llámame."]),
      wo("Si no nos damos prisa, perderemos el autobús.", "Si + presente, futuro.", "If we don't hurry, we'll miss the bus."),
    ]
  ),
  L(
    "si-clauses-simple-2",
    "b1r-error-hunt-si-cuando",
    "Caza de errores: si, cuando y el futuro",
    "«Si lloverá», «cuando llegaré», «si llegues» — los errores más comunes con las condiciones.",
    "7 min",
    [
      sec(
        "Si no lleva ni futuro ni subjuntivo presente",
        [
          "Recuerda la regla: después de si (condición real) va presente de indicativo. ✗ Si lloverá / ✗ Si llueva → ✓ Si llueve. «Si» nunca lleva futuro, condicional ni presente de subjuntivo.",
          "En esta caza de errores, antes de corregir pregúntate dos cosas: ¿la palabra es «si» o «cuando»? y ¿hablo de una costumbre o de algo que todavía no ha pasado?",
        ],
        [
          ["✗ Si tendré tiempo, iré. → ✓ Si tengo tiempo, iré.", "If I have time, I'll go."],
        ],
        [
          mc(
            "Corrige: «Si vengas, trae vino.»",
            ["Si vienes, trae vino.", "Si vendrás, trae vino.", "Si venías, trae vino.", "No hay error."],
            0,
            "Tras «si» real va el presente de indicativo: si vienes. «Vendrás» es futuro y «venías» es pasado; la frase original sí tiene error."
          ),
        ]
      ),
      sec(
        "Cuando con futuro: subjuntivo",
        "Cuando + presente de indicativo = hábito (cuando llueve, me quedo en casa). Cuando + algo futuro → subjuntivo (cuando llegues, llámame). ¿Por qué? Lo que aún no ha pasado no es un hecho, y el español lo marca con subjuntivo; «si» es la excepción que siempre va en indicativo. El error típico del inglés es poner futuro: ✗ cuando llegarás.",
        [
          ["Cuando llego a casa, ceno.", "When I get home, I have dinner. (habit)"],
          ["Cuando llegues a casa, avísame.", "When you get home, let me know. (future)"],
        ],
        [
          fb("Corrige el verbo.", "Cuando ___ mayor, seré piloto. (ser, yo; el alumno escribió: seré)", "sea", "«Cuando» con una idea futura pide subjuntivo: cuando sea mayor, no «cuando seré»."),
        ]
      ),
    ],
    [
      fb("Corrige el verbo.", "Si ___ mucho, te dolerá la cabeza. (beber, tú; el alumno escribió: beberás)", "bebes", "Tras «si» condicional va el presente: si bebes, no «si beberás»."),
      fb("Corrige el verbo.", "Mañana te llamo cuando ___ del trabajo. (salir, yo; el alumno escribió: salgo)", "salga", "Salir del trabajo mañana todavía no ha pasado → cuando + subjuntivo: salga. «Salgo» solo valdría para una costumbre."),
      fb("Corrige el verbo.", "Siempre que ___ a Madrid, visito a mis tíos. (ir, yo)", "voy", "«Siempre que» + visito indica un hábito → indicativo: voy, no «vaya»."),
      ms(
        "¿Qué frases son correctas?",
        ["Si llueve, no saldremos.", "Cuando termine, te aviso.", "Si estaría libre, te ayudaría mañana.", "Cuando era niño, comía mucho."],
        [0, 1, 3],
        "«Si estaría libre» es incorrecta: tras si no va condicional; con una condición real se dice «si estoy libre, te ayudaré». Las otras frases usan bien si, cuando + subjuntivo y cuando + imperfecto."
      ),
      mc(
        "«Si / cuando» — ¿cuál encaja? «___ me toca la lotería, me compro una casa.»",
        ["Si", "Cuando", "Aunque", "Para que"],
        0,
        "Ganar la lotería es incierto, así que se usa «si». «Cuando» lo daría por seguro, «aunque» expresa concesión y «para que» expresa finalidad."
      ),
      toEs("When you (tú) finish, send me the file.", "Cuando termines, mándame el archivo.", "Cuando + subjuntivo para el futuro; mandato con pronombre.", ["Cuando termines, envíame el archivo.", "Cuando acabes, mándame el archivo."]),
      wo("Si mañana no llueve, iremos al lago en bici.", "Si + presente (llueve) aunque hables de mañana; el futuro va en el resultado (iremos).", "If it doesn't rain tomorrow, we'll go to the lake by bike."),
    ]
  ),
  L(
    "si-clauses-simple-2",
    "b1r-spiral-commands-conditional-si",
    "Repaso en espiral: mandatos, condicional y condiciones",
    "Unidades 8–12 juntas (mandatos, condicional y si + presente), con el subjuntivo de las unidades 2–7 de fondo.",
    "8 min",
    [
      sec(
        "Mensajes de un compañero de piso",
        [
          "Recuerda las cuatro reglas que se mezclan en este repaso. Mandatos: afirmativo con el pronombre pegado (ábrele), negativo con subjuntivo y el pronombre delante (no lo toques). Condicional: cortesía y consejo, porque presenta la idea como imaginada (¿podrías…?, yo que tú…). Si + presente: nunca futuro detrás de «si». Subjuntivo: tras deseo, ojalá, valoración o petición a otra persona (quiero que salgamos).",
          "Lee los mensajes que Pablo te dejó en la nevera y fíjate en qué regla usa cada línea; después te toca responderle.",
        ],
        [
          ["Si llega mi madre, ábrele la puerta y dile que vuelvo a las seis.", "If my mom arrives, open the door for her and tell her I'll be back at six."],
          ["No toques la tarta; es para ella.", "Don't touch the cake; it's for her."],
          ["¿Podrías comprar leche? Te lo agradecería mucho.", "Could you buy milk? I'd really appreciate it."],
          ["Ojalá que no llueva, porque quiero que salgamos a cenar.", "I hope it doesn't rain, because I want us to go out to dinner."],
        ],
        [
          mt(
            "Relaciona cada forma de los mensajes con su estructura.",
            [
              ["ábrele", "mandato afirmativo de tú"],
              ["no toques", "mandato negativo de tú"],
              ["podrías", "condicional de cortesía"],
              ["no llueva", "subjuntivo tras ojalá"],
            ],
            "Cuatro estructuras del B1 en cuatro líneas: el afirmativo pega el pronombre, el negativo usa subjuntivo, el condicional suaviza y ojalá siempre pide subjuntivo."
          ),
        ]
      ),
    ],
    [
      fb("Responde a Pablo.", "Si tengo tiempo, te ___ la leche. (comprar, futuro)", "compraré", "La condición va en presente (tengo) y el resultado en futuro: compraré."),
      fb("Responde a Pablo.", "Yo que tú, no ___ una tarta tan grande. (hacer)", "haría", "Consejo con «yo que tú» → condicional en primera persona; hacer → har-: haría."),
      fb("Responde a Pablo.", "Espero que tu madre ___ bien el viaje. (pasar)", "pase", "Esperar que + otra persona → subjuntivo: pase, no «pasa»."),
      mc(
        "«Tell her (usted) that I'm arriving late.»",
        ["Dígale que llego tarde.", "Dile que llego tarde a usted.", "Le diga que llego tarde.", "Dígala que llego tarde."],
        0,
        "El mandato de usted (diga) lleva el pronombre pegado: dígale. «Dile» es de tú, «Le diga» pone el pronombre delante en afirmativo y «Dígala» usa el objeto directo en vez del indirecto."
      ),
      ms(
        "¿Qué frases son correctas?",
        ["No me lo digas.", "Si tendrás frío, ponte el abrigo.", "Te lo agradecería mucho.", "Es mejor que no salgas."],
        [0, 2, 3],
        "«Si tendrás frío» es incorrecta: tras si va el presente, si tienes frío. Las demás usan bien el negativo, el condicional de cortesía y es mejor que + subjuntivo."
      ),
      toEs("If you (tú) see Pablo, tell him to call me.", "Si ves a Pablo, dile que me llame.", "Si + presente + mandato; decir que + subjuntivo para una orden indirecta.", ["Si ves a Pablo, dile que me llame, por favor."]),
      wo("Deberíamos salir ya porque va a llover pronto.", "Condicional de consejo + ir a + infinitivo.", "We should leave now because it's going to rain soon."),
    ]
  ),
  L(
    "present-perfect-2",
    "b1r-dialogue-have-you-ever",
    "Laboratorio de diálogo: ¿alguna vez has…?",
    "Un juego de preguntas sobre experiencias de vida: responde con el pretérito perfecto y cuenta los detalles.",
    "7 min",
    [
      sec(
        "Recuerda la regla: la respuesta repite el tiempo",
        [
          "Recuerda la regla: ¿Alguna vez has…? pregunta por experiencias de toda la vida, así que va en pretérito perfecto, y la respuesta usa el mismo tiempo: Sí, he… / No, nunca he… / Todavía no he…",
          "Para no repetir la cosa de la pregunta, la respuesta la cambia por un pronombre (lo, la, los, las) delante de haber: ¿Has probado la paella? → Sí, la he probado.",
        ],
        [
          ["—¿Alguna vez has comido pulpo? —Sí, lo he comido varias veces.", "Have you ever eaten octopus? — Yes, I've eaten it several times. (el pulpo → lo)"],
          ["—¿Has estado en México? —No, nunca he estado allí.", "Have you been to Mexico? — No, I've never been there."],
          ["—¿Habéis leído las instrucciones? —Todavía no las hemos leído.", "Have you read the instructions? — We haven't read them yet. (las instrucciones → las)"],
        ],
        [
          fb("Responde.", "—¿Alguna vez has visto una ballena? —Sí, ___ visto dos veces.", "la he", "La ballena es femenina singular → la, y el pronombre va delante de haber: la he visto."),
          mc(
            "—¿Has probado los tacos de pescado? ¿Qué respuesta es correcta?",
            ["Sí, los he probado.", "Sí, he los probado.", "Sí, lo he probado.", "Sí, las he probado."],
            0,
            "Los tacos es masculino plural → los, delante de he. «He los» separa haber del participio, «lo» es singular y «las» es femenino."
          ),
        ]
      ),
      sec(
        "Los detalles van en indefinido",
        "Cuando das detalles concretos de esa experiencia (cuándo, dónde, con quién), cambias al pretérito indefinido, porque ya hablas de una ocasión cerrada.",
        [
          ["He estado en Chile. Fui en 2021 con unos amigos.", "I've been to Chile. I went in 2021 with some friends."],
          ["—¿Has visto un eclipse? —Sí, vi uno cuando era niña.", "Have you seen an eclipse? — Yes, I saw one when I was a girl."],
        ],
        [
          mc(
            "«He viajado a Italia. ___ en barco desde Barcelona.»",
            ["Fui", "He ido", "Iba", "Iré"],
            0,
            "La experiencia general va en perfecto (he viajado), pero el detalle concreto de esa ocasión va en pretérito: fui en barco. «He ido» repetiría la experiencia, «iba» describe fondo o hábito e «iré» es futuro."
          ),
        ]
      ),
    ],
    [
      fb("Completa la pregunta.", "¿Alguna vez ___ un maratón? (correr, tú)", "has corrido", "Pregunta por una experiencia: tú → has + corrido."),
      fb("Completa la respuesta.", "No, nunca ___ en un avión. (subir, yo)", "he subido", "La respuesta repite el tiempo de la pregunta: yo → he subido."),
      fb("Completa con el participio irregular.", "¿Habéis ___ el último libro de esa autora? (leer)", "leído", "Leer → leído: es regular, pero lleva tilde porque la raíz acaba en vocal."),
      mt(
        "Relaciona cada pregunta con su respuesta.",
        [
          ["¿Has probado el mate?", "Sí, lo probé en Argentina."],
          ["¿Habéis visto la película?", "No, todavía no la hemos visto."],
          ["¿Ha llamado alguien?", "Sí, ha llamado tu madre."],
          ["¿Han vuelto los niños?", "No, aún no han vuelto."],
        ],
        "El pretérito perfecto conecta el pasado con el presente; los detalles concretos (en Argentina) van en indefinido."
      ),
      mc(
        "«I've never written a poem.»",
        ["Nunca he escrito un poema.", "Nunca he escribido un poema.", "Nunca escrito he un poema.", "Nunca he escrita un poema."],
        0,
        "Escribir tiene participio irregular, escrito, que con haber nunca cambia de género. «Escribido» no existe, «escrito he» separa mal el verbo y «escrita» cambia por error el participio, que con haber es invariable (y «poema» es masculino)."
      ),
      toEs("Have you (tú) ever been to Spain?", "¿Alguna vez has estado en España?", "Experiencia de vida → pretérito perfecto (en gran parte de Latinoamérica también: ¿alguna vez estuviste…?).", ["¿Has estado alguna vez en España?", "¿Has estado en España alguna vez?", "¿Alguna vez has ido a España?", "¿Has ido alguna vez a España?", "¿Alguna vez estuviste en España?", "¿Estuviste alguna vez en España?", "¿Alguna vez fuiste a España?", "¿Fuiste alguna vez a España?"]),
      wo("Mis padres nunca han salido de su pueblo.", "Nunca + haber + participio: una experiencia que no han tenido en toda su vida.", "My parents have never left their village."),
      mc(
        "Una amiga te pregunta: «¿Has estado en Chile?». Nunca has ido. ¿Qué respondes?",
        ["No, nunca he estado allí.", "No, nunca estuve allí ayer.", "No, nunca he estar allí.", "No, he nunca estado allí."],
        0,
        "La respuesta repite el tiempo de la pregunta: nunca he estado. «Ayer» no encaja con una experiencia de toda la vida, «he estar» usa el infinitivo y «he nunca estado» mete nunca dentro del bloque haber + participio."
      ),
      { type: "speak", prompt: "Te preguntan: «¿Alguna vez has probado el mate?». Responde en voz alta que sí, varias veces, sin repetir «el mate».", text: "Sí, lo he probado varias veces.", explanation: "El mate → lo, delante de he. La respuesta mantiene el pretérito perfecto de la pregunta." },
      { type: "fill-blank", prompt: "¿Cómo se dicen en español las palabras en negrita?", sentence: "—¿Alguna vez has comido caracoles? —No, nunca ___ he comido.", answer: "los", en: "—Have you ever eaten snails? —No, I've never eaten [them].", explanation: "Caracoles es masculino plural → los, delante de he." },
      { type: "fill-blank", prompt: "¿Cómo se dicen en español las palabras en negrita?", sentence: "—¿Han visitado la Alhambra? —Sí, la ___ el verano pasado.", answer: "visitamos", en: "—Have you all visited the Alhambra? —Yes, we [visited] it last summer.", explanation: "El detalle concreto (el verano pasado) pasa al indefinido: visitamos." },
      toEs("He estado en Japón. He ido en 2018 con mi esposa.", "He estado en Japón. Fui en 2018 con mi esposa.", "La experiencia va en perfecto (he estado), pero el detalle con fecha (en 2018) va en indefinido: fui.", ["He estado en Japón. Fui en 2018 con mi mujer.", "He estado en Japón. Fui con mi esposa en 2018."], "Corrige la frase."),
      toEs("Have you (usted) ever climbed a mountain?", "¿Alguna vez ha subido una montaña?", "Usted → ha + participio para preguntar por una experiencia.", ["¿Ha subido alguna vez una montaña?", "¿Alguna vez ha escalado una montaña?", "¿Ha escalado alguna vez una montaña?", "¿Alguna vez ha subido a una montaña?", "¿Alguna vez subió una montaña?", "¿Subió alguna vez una montaña?", "¿Alguna vez escaló una montaña?", "¿Escaló alguna vez una montaña?", "¿Alguna vez subió a una montaña?"]),
      mc("«He visto a Shakira en concierto. La ___ en Bogotá hace cinco años.»", ["vi", "he visto", "veía", "veré"], 0, "El detalle con «hace cinco años» es un momento cerrado: indefinido, vi. «He visto» repetiría la experiencia, «veía» sería un hábito y «veré», futuro."),
      { type: "fill-blank", prompt: "¿Cómo se dicen en español las palabras en negrita?", sentence: "—¿Ha llegado el paquete? —Sí, ___ esta mañana.", answer: "ha llegado", en: "—Has the package arrived? —Yes, it [has arrived] this morning. (Spain)", altAnswers: ["llegó"], explanation: "En España «esta mañana» es parte de hoy, así que la respuesta mantiene el perfecto aunque diga cuándo. En Latinoamérica: llegó esta mañana." },
      mc(
        "Preguntas a dos amigos: «¿Alguna vez han ido de camping?». Fueron el verano pasado. ¿Qué responden?",
        ["Sí, fuimos el verano pasado.", "Sí, hemos ido el verano pasado.", "Sí, vamos el verano pasado.", "Sí, han ido el verano pasado."],
        0,
        "Al dar la fecha (el verano pasado) se pasa al indefinido: fuimos. «Hemos ido el verano pasado» mezcla perfecto con un periodo cerrado, «vamos» es presente y «han ido» habla de otras personas."
      ),
      toEs("¿Alguna vez has cocinado para tus hijos?", "¿Alguna vez ha cocinado para sus hijos?", "Con usted cambian haber (has → ha) y el posesivo (tus → sus).", ["¿Ha cocinado alguna vez para sus hijos?", "¿Alguna vez ha cocinado usted para sus hijos?"], "Cambia la pregunta a usted."),
      wo("Sí, la he leído dos veces", "El pronombre «la» (la novela) va delante de he.", "Yes, I've read it (the novel) twice"),
      toEs("Nunca he conocido una persona famosa.", "Nunca he conocido a una persona famosa.", "Conocer a una persona lleva la «a» personal: he conocido a una persona famosa.", ["Nunca he conocido a nadie famoso.", "No he conocido nunca a una persona famosa."], "Corrige la frase."),
      { type: "fill-blank", prompt: "¿Cómo se dicen en español las palabras en negrita?", sentence: "—¿Has montado alguna vez a caballo? —Sí, ___ una vez en Argentina.", answer: "monté", en: "—Have you ever ridden a horse? —Yes, I [rode] once in Argentina.", explanation: "Al dar el detalle (dónde) pasamos al indefinido: monté." },
      { type: "speak", prompt: "Te preguntan: «¿Alguna vez has perdido el pasaporte?». Responde en voz alta que sí: lo perdiste en Roma hace dos años.", text: "Sí, lo perdí en Roma hace dos años.", explanation: "La pregunta va en perfecto, pero tu respuesta da dónde y cuándo (hace dos años): indefinido, lo perdí." },
      wo("No, nunca he visto una película de Almodóvar", "Respuesta con el mismo tiempo de la pregunta: nunca + he + visto (participio irregular de ver).", "No, I've never seen an Almodóvar film"),
      toEs("My parents have been to Cuba twice: they went in 1995 and in 2010.", "Mis padres han estado en Cuba dos veces: fueron en 1995 y en 2010.", "La experiencia en perfecto (han estado) y las fechas concretas en indefinido (fueron).", ["Mis padres han estado dos veces en Cuba: fueron en 1995 y en 2010.", "Mis padres han ido a Cuba dos veces: fueron en 1995 y en 2010.", "Mis padres han estado en Cuba dos veces: fueron en 1995 y 2010.", "Mis padres estuvieron en Cuba dos veces: fueron en 1995 y en 2010."]),
      ms(
        "¿Qué respuestas encajan con «¿Has visto la última película de Almodóvar?»?",
        ["Sí, la vi el sábado.", "No, todavía no la he visto.", "Sí, la he visto dos veces.", "Sí, he la visto.", "No, nunca la vi el sábado."],
        [0, 1, 2],
        "Puedes mantener el perfecto (la he visto dos veces, todavía no la he visto) o dar un detalle cerrado en indefinido (la vi el sábado). «He la visto» separa el bloque, y «nunca… el sábado» no tiene sentido: nunca habla de toda la vida."
      ),
      toEs("Sí, he estado en Cuba.", "Sí, estuve en Cuba el año pasado.", "Al añadir una fecha cerrada (el año pasado) el verbo pasa al indefinido: estuve.", ["Sí, fui a Cuba el año pasado.", "Sí, el año pasado estuve en Cuba.", "Sí, el año pasado fui a Cuba."], "Cambia la respuesta para añadir «el año pasado»."),
    ]
  ),
  L(
    "present-perfect-2",
    "b1r-contrast-perfect-preterite",
    "Contraste: he comido / comí",
    "Hoy frente a ayer, esta semana frente a la semana pasada — cuándo usar cada pasado.",
    "7 min",
    [
      sec(
        "La frontera del tiempo",
        [
          "Recuerda la regla: lo que decide no es si la acción está terminada (las dos lo están), sino el periodo en el que la sitúas. En España, si ese periodo incluye el presente (hoy, esta semana, este año, últimamente), se usa el pretérito perfecto; si es un periodo terminado (ayer, anoche, la semana pasada, en 2010, hace dos días), el indefinido.",
          "Por eso la misma acción cambia de tiempo con el marcador: Esta mañana he desayunado tarde / Ayer desayuné tarde.",
        ],
        [
          ["Esta mañana he desayunado tarde.", "This morning I had breakfast late. (still today)"],
          ["Ayer desayuné tarde.", "Yesterday I had breakfast late. (finished period)"],
          ["Últimamente he dormido poco.", "Lately I haven't slept much. (últimamente reaches today)"],
        ],
        [
          mc(
            "«Este año ___ mucho.» (viajar, nosotros)",
            ["hemos viajado", "viajamos ayer", "viajábamos", "viajaremos ayer"],
            0,
            "«Este año» incluye el presente, así que en España se usa el pretérito perfecto: hemos viajado. «Viajamos ayer» y «viajaremos ayer» contradicen el marcador, y «viajábamos» describe un hábito pasado."
          ),
          fb("¿Perfecto o indefinido? (uso de España)", "Hace un mes ___ un curso de cocina. (empezar, yo)", "empecé", "«Hace un mes» sitúa la acción en un periodo cerrado → indefinido: empecé (z → c delante de e)."),
        ]
      ),
      sec(
        "La variación en América",
        "En gran parte de Latinoamérica, el indefinido se usa también para hoy: Hoy comí mucho. Ambos usos son correctos en su región; en los ejercicios de esta lección seguimos el uso de España y aceptamos el latinoamericano cuando no hay confusión.",
        [
          ["España: Hoy he visto a Juan.", "Today I've seen/I saw Juan."],
          ["México: Hoy vi a Juan.", "Today I saw Juan."],
        ],
        [
          ms(
            "¿Qué expresiones suelen ir con el pretérito perfecto (en España)?",
            ["hoy", "esta semana", "ayer", "el año pasado"],
            [0, 1],
            "Hoy y esta semana son periodos que incluyen el presente: pretérito perfecto. «Ayer» y «el año pasado» son periodos terminados: pretérito indefinido."
          ),
        ]
      ),
    ],
    [
      fb("¿Perfecto o pretérito? (uso de España)", "Hoy ___ un correo importante. (recibir, yo)", "he recibido", "Hoy es un periodo abierto → pretérito perfecto: he recibido."),
      fb("¿Perfecto o pretérito? (uso de España)", "El lunes pasado ___ un correo importante. (recibir, yo)", "recibí", "«El lunes pasado» está cerrado → indefinido: recibí."),
      fb("¿Perfecto o pretérito? (uso de España)", "En 2015 mis padres ___ a Canadá. (mudarse)", "se mudaron", "Un año concreto y terminado → indefinido: se mudaron."),
      fb("¿Perfecto o pretérito? (uso de España)", "Esta semana no ___ nada. (hacer, yo)", "he hecho", "Esta semana sigue abierta → pretérito perfecto; hacer → hecho."),
      ms(
        "¿Qué marcadores suelen llevar pretérito perfecto (en España)?",
        ["últimamente", "anoche", "este mes", "hace dos años"],
        [0, 2],
        "Últimamente y este mes incluyen el presente; anoche y hace dos años están terminados y piden indefinido."
      ),
      toEs("This week I've worked a lot, but last week I rested.", "Esta semana he trabajado mucho, pero la semana pasada descansé.", "Periodo abierto → perfecto; periodo cerrado → indefinido.", ["Esta semana he trabajado mucho pero la semana pasada descansé."]),
      wo("¿Ya has terminado el informe que te pedí ayer?", "Ya + perfecto (conectado con ahora) + indefinido (ayer): cada verbo sigue su marcador.", "Have you finished the report I asked you for yesterday yet?"),
      toEs("This morning I've had a coffee with Laura.", "Esta mañana he tomado un café con Laura.", "«Esta mañana» es parte de hoy: en España, pretérito perfecto.", ["He tomado un café con Laura esta mañana.", "Esta mañana me he tomado un café con Laura.", "Esta mañana tomé un café con Laura."]),
      toEs("Anoche vimos una película de terror.", "Esta noche hemos visto una película de terror.", "«Esta noche» todavía es hoy: en España pasa al pretérito perfecto (hemos visto).", ["Esta noche hemos visto una película de miedo.", "Hemos visto una película de terror esta noche."], "Cambia «anoche» por «esta noche» (España)."),
      { type: "fill-blank", prompt: "¿Cómo se dicen en español las palabras en negrita?", sentence: "Este verano ___ mucho calor.", answer: "ha hecho", en: "This summer it [has been] very hot.", altAnswers: ["hizo"], explanation: "«Este verano» sigue abierto: ha hecho (hacer → hecho). En Latinoamérica también «hizo»." },
      { type: "fill-blank", prompt: "¿Cómo se dicen en español las palabras en negrita?", sentence: "En 2010 España ___ el Mundial.", answer: "ganó", en: "In 2010 Spain [won] the World Cup.", explanation: "Un año concreto y terminado pide indefinido: ganó." },
      toEs("This year my son has started university.", "Este año mi hijo ha empezado la universidad.", "«Este año» incluye el presente: ha empezado.", ["Mi hijo ha empezado la universidad este año.", "Este año mi hijo ha comenzado la universidad."]),
      toEs("Este año mi hija ha terminado el colegio.", "El año pasado mi hija terminó el colegio.", "«El año pasado» ya terminó: el verbo pasa al indefinido (terminó).", ["El año pasado mi hija terminó la escuela.", "Mi hija terminó el colegio el año pasado.", "El año pasado mi hija acabó el colegio."], "Cambia «este año» por «el año pasado»."),
      mc("«Anoche ___ muy mal.» (dormir, yo)", ["he dormido", "dormí", "duermo", "dormiré"], 1, "«Anoche» marca un tiempo cerrado: dormí. «He dormido» iría con «esta noche», «duermo» es presente y «dormiré», futuro."),
      { type: "fill-blank", prompt: "¿Cómo se dicen en español las palabras en negrita?", sentence: "Últimamente mis vecinos ___ mucho ruido.", answer: "han hecho", en: "Lately my neighbors [have made] a lot of noise.", explanation: "«Últimamente» llega hasta hoy: pretérito perfecto, han hecho." },
      toEs("Hace dos días hemos ido al teatro.", "Hace dos días fuimos al teatro.", "«Hace dos días» señala un momento terminado: indefinido, fuimos.", ["Fuimos al teatro hace dos días."], "Corrige la frase."),
      toEs("Have you (tú) spoken with your brother this week?", "¿Has hablado con tu hermano esta semana?", "«Esta semana» todavía no ha terminado: has hablado.", ["¿Esta semana has hablado con tu hermano?"]),
      wo("El mes pasado cambié de trabajo", "«El mes pasado» es un periodo cerrado: indefinido.", "Last month I changed jobs"),
      wo("Esta semana hemos ido dos veces al cine", "«Esta semana» incluye hoy: pretérito perfecto.", "This week we've been to the movies twice"),
      toEs("This morning I've forgotten my keys. (Spain)", "Esta mañana he olvidado las llaves.", "«Esta mañana» → pretérito perfecto en España.", ["Esta mañana he olvidado mis llaves.", "Esta mañana se me han olvidado las llaves.", "Esta mañana me he olvidado las llaves.", "Esta mañana se me han olvidado mis llaves.", "He olvidado las llaves esta mañana."]),
      toEs("Este mes he gastado demasiado y el mes pasado he gastado aún más.", "Este mes he gastado demasiado y el mes pasado gasté aún más.", "Cada marcador elige su tiempo: este mes (abierto) → he gastado; el mes pasado (cerrado) → gasté.", [], "Corrige la frase."),
      toEs("Today I've worked from home because yesterday I got sick. (Spain)", "Hoy he trabajado desde casa porque ayer me puse enfermo.", "Hoy → he trabajado; ayer → me puse (indefinido).", ["Hoy he trabajado desde casa porque ayer me puse enferma.", "Hoy he trabajado desde casa porque ayer me enfermé.", "Hoy he trabajado en casa porque ayer me puse enfermo.", "Hoy he trabajado en casa porque ayer me puse enferma."]),
      toEs("This afternoon I've seen Pablo; I met him in London in 2015.", "Esta tarde he visto a Pablo; lo conocí en Londres en 2015.", "Esta tarde → he visto; en 2015 → conocí. Cada marcador elige su pasado.", ["Esta tarde he visto a Pablo; lo conocí en 2015 en Londres.", "Esta tarde he visto a Pablo; le conocí en Londres en 2015.", "Esta tarde he visto a Pablo; le conocí en 2015 en Londres."]),
      toEs("En 2015 he conocido a mi mejor amiga.", "En 2015 conocí a mi mejor amiga.", "Un año cerrado (en 2015) pide indefinido en todas las variedades: conocí.", ["Conocí a mi mejor amiga en 2015."], "Corrige la frase."),
      mc(
        "Un amigo mexicano dice: «Hoy comí con mi abuela». ¿Es correcto?",
        ["Sí: en gran parte de Latinoamérica el indefinido también se usa para hoy.", "No: con hoy hay que usar siempre el perfecto.", "No: debería decir «hoy comía».", "Solo si lo dice por la noche."],
        0,
        "La frontera hoy / ayer es sobre todo del español de España; en México y gran parte de Latinoamérica «hoy comí» es lo normal. «Comía» describiría un hábito, y la hora del día no cambia nada."
      ),
      { type: "speak", prompt: "Responde en voz alta (uso de España): di algo que has hecho esta semana y algo que hiciste la semana pasada.", text: "Esta semana he ido al gimnasio tres veces, pero la semana pasada no fui ni una vez.", explanation: "Esta semana (abierta) → he ido; la semana pasada (cerrada) → fui." },
    ]
  ),
  L(
    "present-perfect-2",
    "b1r-error-hunt-participles",
    "Caza de errores: participios y pronombres",
    "«Hacido», «he lo visto», «hemos abrido» — corrige los errores típicos del pretérito perfecto.",
    "7 min",
    [
      sec(
        "Recuerda la regla: participios irregulares y sus familias",
        [
          "Recuerda la regla: casi todos los participios terminan en -ado o -ido, pero los más frecuentes no: hecho, dicho, escrito, visto, puesto, vuelto, roto, muerto, abierto, cubierto. Los compuestos heredan la irregularidad: devuelto, deshecho, supuesto, descubierto.",
          "Para cazar el error, pregúntate: ¿es uno de esos verbos o un compuesto suyo? Si lo es, «-ado/-ido» está mal.",
        ],
        [
          ["✗ He hacido la cena. → ✓ He hecho la cena.", "I've made dinner."],
          ["✗ Han abrido la tienda. → ✓ Han abierto la tienda.", "They've opened the store."],
          ["✗ Hemos devolvido el coche. → ✓ Hemos devuelto el coche.", "We've returned the car. (devolver follows volver)"],
        ],
        [
          fb("Corrige el participio.", "¿Quién ha ___ el vaso? (romper; el alumno escribió: rompido)", "roto", "Romper tiene participio irregular: roto. «Rompido» no existe."),
          toEs("¿Ya has envolvido los regalos?", "¿Ya has envuelto los regalos?", "Envolver es de la familia de volver: envuelto, como vuelto y devuelto.", ["¿Has envuelto ya los regalos?"], "Corrige la frase."),
        ]
      ),
      sec(
        "Nada entre haber y el participio",
        "Haber y el participio forman un bloque. Los pronombres (me, te, se, lo, le, se lo…) y el «no» van antes de haber, nunca en medio ni pegados al participio: ✗ He lo visto → ✓ Lo he visto.",
        [
          ["✗ Hemos no comido. → ✓ No hemos comido.", "We haven't eaten."],
          ["✗ ¿Has te duchado? → ✓ ¿Te has duchado?", "Have you showered?"],
        ],
        [
          mc(
            "Corrige: «Ella ha se levantado temprano.»",
            ["Ella se ha levantado temprano.", "Ella ha levantádose temprano.", "Ella ha levantado se temprano.", "No hay error."],
            0,
            "El pronombre reflexivo va delante de haber: se ha levantado. No se puede pegar al participio (levantádose) ni ponerlo detrás (levantado se), y la frase original sí tiene error."
          ),
        ]
      ),
    ],
    [
      fb("Corrige el participio.", "Todavía no han ___ de vacaciones. (volver; el alumno escribió: volvido)", "vuelto", "Volver tiene participio irregular: vuelto. «Volvido» no existe."),
      fb("Corrige el participio.", "¿Qué te ha ___ el médico? (decir; el alumno escribió: decido)", "dicho", "Decir tiene participio irregular: dicho. «Decido» es el presente de decidir."),
      fb("Corrige el participio.", "Hemos ___ la mesa para la cena. (poner; el alumno escribió: ponido)", "puesto", "Poner tiene participio irregular: puesto. «Ponido» no existe."),
      ms(
        "¿Qué frases tienen un error?",
        ["Se lo he explicado dos veces.", "Nunca he visto el mar.", "Habéis descubrido algo?", "¿Por qué no me lo has dicho?"],
        [2],
        "«Habéis descubrido algo?» tiene dos errores: descubrir → descubierto, y faltan los dos signos de interrogación (¿…?). Las otras frases colocan bien pronombres y participios."
      ),
      mt(
        "Relaciona cada infinitivo con su participio.",
        [
          ["cubrir", "cubierto"],
          ["morir", "muerto"],
          ["devolver", "devuelto"],
          ["satisfacer", "satisfecho"],
        ],
        "Los compuestos heredan la irregularidad: devolver → devuelto (como volver), satisfacer → satisfecho (como hacer)."
      ),
      toEs("They haven't told me anything yet.", "Todavía no me han dicho nada.", "Todavía no + pronombre + haber + participio irregular (dicho).", ["Aún no me han dicho nada.", "No me han dicho nada todavía."]),
      wo("¿Dónde has puesto las llaves del coche?", "Poner → puesto, justo detrás de has.", "Where have you put the car keys?"),
      fb("Corrige el participio.", "Los niños han ___ las paredes con dibujos. (cubrir; el alumno escribió: cubrido)", "cubierto", "Cubrir tiene participio irregular: cubierto, igual que abrir → abierto."),
      fb("Corrige el participio.", "Ya le he ___ el libro a Marta. (devolver; el alumno escribió: devolvido)", "devuelto", "Devolver es un compuesto de volver: devuelto."),
      toEs("Mi abuelo ha escribido una novela.", "Mi abuelo ha escrito una novela.", "Escribir → escrito; «escribido» no existe.", [], "Corrige la frase."),
      toEs("Hemos lo comprado esta mañana.", "Lo hemos comprado esta mañana.", "El pronombre va delante de haber: lo hemos comprado, nunca entre hemos y el participio.", ["Esta mañana lo hemos comprado."], "Corrige la frase."),
      mc("Corrige: «¿Has te lavado las manos?»", ["¿Te has lavado las manos?", "¿Has lavádote las manos?", "¿Has lavado te las manos?", "No hay error."], 0, "El reflexivo va antes de haber: te has lavado. Nunca se pega al participio ni va detrás de él."),
      toEs("Hemos no decido nada.", "No hemos dicho nada.", "Dos errores: el «no» va delante de hemos, y decir → dicho («decido» es el presente de decidir).", [], "Corrige la frase."),
      toEs("They have discovered the truth.", "Han descubierto la verdad.", "Descubrir sigue a cubrir: descubierto, no «descubrido»."),
      toEs("He ponido los platos en la mesa.", "He puesto los platos en la mesa.", "Poner → puesto; «ponido» es un error típico.", ["He puesto los platos sobre la mesa."], "Corrige la frase."),
      toEs("Have you (tú) gotten dressed yet?", "¿Ya te has vestido?", "El «te» va antes de has: te has vestido, no «has te vestido».", ["¿Te has vestido ya?"]),
      toEs("El gato rompe mis gafas.", "El gato ha roto mis gafas.", "Pretérito perfecto de romper: ha + roto (irregular), no «ha rompido».", ["El gato me ha roto las gafas.", "El gato ha roto mis lentes.", "El gato ha roto mis anteojos."], "Cambia al pretérito perfecto."),
      fb("Corrige el orden.", "Mis padres ___ han comprado una bici. (el alumno escribió: han me comprado)", "me", "El pronombre indirecto va antes de haber: me han comprado."),
      wo("¿Por qué no se lo han dicho a la policía?", "No + se lo + han + dicho: todo lo que no es participio va delante de haber.", "Why haven't they told the police?"),
      mc("¿Qué frase es correcta?", ["Hemos resolvido el problema.", "Hemos resuelto el problema.", "Hemos resueltos el problema.", "Resuelto hemos el problema."], 1, "Resolver → resuelto (como volver → vuelto), y el participio no concuerda: resuelto, sin -s. Haber va siempre primero."),
      toEs("Todavía no se ha despertado.", "Todavía no nos hemos despertado.", "Con nosotros cambian el pronombre y haber: nos hemos. El orden es el mismo: todavía no + pronombre + haber + participio.", ["Aún no nos hemos despertado."], "Cambia el sujeto a nosotros."),
      wo("¿Quién ha deshecho la cama?", "Deshacer sigue a hacer: deshecho, no «deshacido»; va justo después de ha.", "Who has unmade the bed?"),
      toEs("I've told them a thousand times, but they haven't done anything.", "Se lo he dicho mil veces, pero no han hecho nada.", "«Se lo» delante de he; dicho y hecho son irregulares.", ["Les he dicho mil veces, pero no han hecho nada.", "Se lo he dicho mil veces y no han hecho nada."]),
      toEs("Ya se lo he dicho.", "Ya se lo han dicho.", "Solo cambia haber (he → han); se lo sigue delante y dicho no cambia.", ["Ellos ya se lo han dicho."], "Cambia el sujeto a ellos."),
    ]
  ),
  L(
    "past-perfect-2",
    "b1r-story-past-before-past",
    "Detective de historias: el pasado antes del pasado",
    "Una historia contada desordenada: descubre qué había pasado antes de qué.",
    "8 min",
    [
      sec(
        "El misterio del pastel",
        [
          "Recuerda la regla: el pluscuamperfecto (había + participio) marca lo que ya había ocurrido antes de otro momento del pasado; ese momento de referencia va en indefinido.",
          "Pista de detective: en una historia, el indefinido avanza (llegó, descubrieron) y el pluscuamperfecto salta hacia atrás. Para reconstruir el orden real, busca primero los había + participio: esos hechos son los más antiguos, aunque se cuenten al final.",
        ],
        [
          ["Cuando Marta llegó a la fiesta, alguien ya se había comido el pastel.", "When Marta got to the party, someone had already eaten the cake."],
          ["Nadie sabía quién había sido.", "Nobody knew who it had been."],
          ["Luego descubrieron que el perro había entrado por la ventana.", "Then they found out that the dog had come in through the window."],
        ],
        [
          mc(
            "¿Qué pasó primero?",
            ["El perro entró por la ventana.", "Marta llegó a la fiesta.", "Descubrieron al culpable.", "Todos buscaron el pastel."],
            0,
            "El pluscuamperfecto (había entrado) indica lo que pasó antes que todo lo demás: el perro entró por la ventana. Llegar a la fiesta, buscar el pastel y descubrir al culpable vinieron después."
          ),
          mc(
            "«Cuando el profesor abrió el examen, se dio cuenta de que alguien había cambiado las preguntas.» ¿Qué pasó primero?",
            ["Alguien cambió las preguntas.", "El profesor abrió el examen.", "El profesor se dio cuenta.", "Todo pasó a la vez."],
            0,
            "Había cambiado es pluscuamperfecto, así que es lo más antiguo, aunque aparezca al final de la frase. Abrió y se dio cuenta, en indefinido, son los pasos posteriores."
          ),
        ]
      ),
      sec(
        "Ordena los hechos",
        "Ya y todavía no aparecen a menudo con el pluscuamperfecto (aunque también con otros tiempos).",
        [
          ["Cuando llamé, ya habían salido.", "When I called, they had already left."],
          ["Todavía no había amanecido cuando nos fuimos.", "The sun hadn't come up yet when we left."],
        ],
        [
          fb("Completa.", "Cuando llegamos al cine, la película ya ___ empezado.", "había", "Algo anterior a otro pasado → pluscuamperfecto: había + participio (empezado)."),
        ]
      ),
    ],
    [
      fb("Completa.", "No pude entrar porque ___ las llaves en casa. (dejar, yo)", "había dejado", "Dejar las llaves ocurrió antes de no poder entrar, y es su causa: pluscuamperfecto, había dejado."),
      fb("Completa.", "Los niños estaban cansados porque no ___ en toda la noche. (dormir)", "habían dormido", "No dormir es anterior a estar cansados (la causa): pluscuamperfecto, y con los niños (ellos) el auxiliar es habían."),
      fb("Completa.", "Nunca ___ un lugar tan bonito hasta ese viaje. (ver, yo)", "había visto", "Nunca... hasta ese viaje mira hacia atrás desde un momento pasado: pluscuamperfecto. El participio de ver es irregular: visto, no «veído»."),
      mc(
        "«When I got to the station, the train had already left.»",
        ["Cuando llegué a la estación, el tren ya había salido.", "Cuando llegaba a la estación, el tren ya salió.", "Cuando había llegado a la estación, el tren ya salió.", "Cuando llegué a la estación, el tren ya ha salido."],
        0,
        "El momento de referencia va en pretérito (llegué) y lo anterior en pluscuamperfecto (había salido). «Llegaba… salió» y «había llegado… salió» invierten la relación, y «ha salido» se liga al presente."
      ),
      mt(
        "Relaciona las dos partes.",
        [
          ["Aprobé el examen porque", "había estudiado mucho."],
          ["No tenía hambre porque", "ya había comido."],
          ["Estaba nervioso porque", "nunca había hablado en público."],
          ["Me reconoció porque", "nos habíamos conocido antes."],
        ],
        "Cada causa ocurrió antes del resultado contado en pasado (aprobé, no tenía, estaba, me reconoció), por eso va en pluscuamperfecto."
      ),
      toEs("She told me that she had lost her passport.", "Me dijo que había perdido el pasaporte.", "Con un verbo de decir en pasado (me dijo), lo que ya había pasado antes se cuenta en pluscuamperfecto: había perdido.", ["Me dijo que había perdido su pasaporte.", "Ella me dijo que había perdido el pasaporte."]),
      wo("Al final descubrimos que el perro había sido el culpable.", "Descubrimos (indefinido) es el último paso de la historia; lo que el perro hizo antes va en pluscuamperfecto (había sido).", "In the end we found out the dog had been the culprit."),
      toEs(
        "Cuando llegó el detective, el mayordomo se escondió en el jardín.",
        "Cuando llegó el detective, el mayordomo ya se había escondido en el jardín.",
        "Si el mayordomo se escondió antes de la llegada, esa acción pasa al pluscuamperfecto, con el pronombre delante de había: se había escondido.",
        ["Cuando llegó el detective, el mayordomo se había escondido en el jardín.", "El mayordomo ya se había escondido en el jardín cuando llegó el detective.", "Cuando el detective llegó, el mayordomo ya se había escondido en el jardín."],
        "Cambia la frase: el mayordomo se escondió antes de que llegara el detective."
      ),
      toEs(
        "La vecina no había sabido que alguien entró en su casa.",
        "La vecina no sabía que alguien había entrado en su casa.",
        "Los tiempos están al revés: no saber es el estado en el momento de la historia (imperfecto, sabía) y entrar es lo anterior (pluscuamperfecto, había entrado).",
        [],
        "Corrige la frase."
      ),
    ]
  ),
  L(
    "past-perfect-2",
    "b1r-timeline-three-pasts",
    "Línea del tiempo: los tres pasados",
    "Pretérito, imperfecto y pluscuamperfecto en una sola historia: cada uno con su trabajo.",
    "8 min",
    [
      sec(
        "Tres trabajos distintos",
        [
          "Recuerda la regla: pretérito (indefinido) para lo que pasó, la acción principal que hace avanzar la historia; imperfecto para cómo era la escena (hora, tiempo, estados, acciones en curso); pluscuamperfecto para lo que ya había pasado antes de ese momento.",
          "Truco: pregúntate si el verbo responde a «¿y entonces qué pasó?» (indefinido), a «¿cómo estaba todo?» (imperfecto) o a «¿qué había pasado ya?» (pluscuamperfecto).",
        ],
        [
          ["Era de noche. Llegué a casa y vi que alguien había abierto la ventana.", "It was night. I got home and saw that someone had opened the window. (escena, acciones, antes)"],
          ["Hacía calor y la gente esperaba en la puerta.", "It was hot and people were waiting at the door. (solo escena: imperfecto)"],
          ["El tren salió tarde porque había nevado.", "The train left late because it had snowed. (acción + causa anterior)"],
        ],
        [
          mt(
            "Relaciona cada verbo con su función.",
            [
              ["era", "la escena"],
              ["llegué", "la acción principal"],
              ["había abierto", "algo anterior"],
            ],
            "Era describe la escena (imperfecto), llegué es la acción que hace avanzar la historia (indefinido) y había abierto es anterior a llegué (pluscuamperfecto)."
          ),
          fb("Elige el pasado adecuado.", "Cuando entré en la sala, la gente ya ___. (sentarse)", "se había sentado", "Sentarse ocurrió antes de que yo entrara: pluscuamperfecto, con el pronombre delante de había. «Se sentó» diría que se sentaron al verme entrar."),
        ]
      ),
      sec(
        "La historia de Andrés",
        "Lee y completa con el pasado adecuado.",
        [
          ["Andrés estaba muy contento: por fin había terminado la carrera.", "Andrés was very happy: he had finally finished his degree."],
          ["Esa noche salió a celebrarlo con sus amigos.", "That night he went out to celebrate with his friends."],
        ],
        [
          fb("Completa.", "Sus amigos le ___ una sorpresa. (preparar, pluscuamperfecto)", "habían preparado", "La sorpresa se preparó antes → pluscuamperfecto."),
        ]
      ),
    ],
    [
      fb("Elige el pasado adecuado.", "Mientras Andrés ___ en el restaurante, empezó a llover. (cenar)", "cenaba", "Mientras + acción en curso (el fondo): imperfecto, cenaba. Empezó a llover es lo que pasa en medio, en indefinido."),
      fb("Elige el pasado adecuado.", "De repente, ___ su exnovia. (entrar)", "entró", "De repente anuncia una acción puntual que hace avanzar la historia: indefinido, entró. «Entraba» la convertiría en fondo."),
      fb("Elige el pasado adecuado.", "No la ___ desde hacía cinco años. (ver, él)", "había visto", "Los cinco años sin verla son anteriores al momento de la historia (entró): pluscuamperfecto, había visto, con el participio irregular visto."),
      mc(
        "«Andrés was nervous because he had never talked to her about it.»",
        ["Andrés estaba nervioso porque nunca le había hablado de eso.", "Andrés estuvo nervioso porque nunca le habló de eso.", "Andrés estaba nervioso porque nunca le ha hablado de eso.", "Andrés era nervioso porque nunca le había hablado de eso."],
        0,
        "Un estado en el pasado va en imperfecto (estaba nervioso) y lo anterior en pluscuamperfecto (nunca le había hablado). «Estuvo» presenta el estado como cerrado, «ha hablado» se liga al presente y «era nervioso» describe su carácter."
      ),
      ms(
        "¿Qué frases usan bien los tiempos?",
        ["Cuando salimos, ya había dejado de llover.", "Hacía frío y llevábamos abrigos.", "Ayer había comido paella.", "Cuando llegó, ya nos fuimos."],
        [0, 1],
        "«Ayer había comido paella» necesita otro momento pasado de referencia, y «Cuando llegó, ya nos fuimos» debería ser «ya nos habíamos ido». Las otras dos combinan bien los tiempos."
      ),
      toEs("When we arrived, the concert had already started and it was raining.", "Cuando llegamos, el concierto ya había empezado y llovía.", "Pretérito para la acción (llegamos), pluscuamperfecto para lo anterior (había empezado) e imperfecto para el fondo (llovía).", ["Cuando llegamos, el concierto ya había empezado y estaba lloviendo.", "Cuando llegamos, ya había empezado el concierto y llovía."]),
      wo("Nunca había visto a mi padre tan emocionado.", "Nunca + pluscuamperfecto: hasta aquel momento del pasado, no lo había visto así.", "I had never seen my father so moved."),
      toEs(
        "Es domingo. Me levanto tarde y veo que mi hermano ya ha preparado el desayuno.",
        "Era domingo. Me levanté tarde y vi que mi hermano ya había preparado el desayuno.",
        "Al pasar la historia al pasado, cada tiempo hace su trabajo: la escena (es) → imperfecto (era); las acciones (me levanto, veo) → indefinido (me levanté, vi); lo anterior (ha preparado) → pluscuamperfecto (había preparado).",
        ["Era domingo. Me levanté tarde y vi que mi hermano había preparado el desayuno."],
        "Pasa la frase al pasado."
      ),
      toEs(
        "Cuando salí de la oficina, llovió mucho y no tenía paraguas.",
        "Cuando salí de la oficina, llovía mucho y no tenía paraguas.",
        "La lluvia es parte de la escena que rodea la acción (salí), así que va en imperfecto: llovía. «Llovió» la presentaría como un hecho puntual posterior a salir.",
        ["Cuando salí de la oficina, estaba lloviendo mucho y no tenía paraguas."],
        "Corrige la frase."
      ),
    ]
  ),
  L(
    "past-perfect-2",
    "b1r-transform-perfect-to-pluperfect",
    "Transformaciones: de «ha hecho» a «había hecho»",
    "Pasa frases del presente al pasado: el pretérito perfecto se convierte en pluscuamperfecto.",
    "7 min",
    [
      sec(
        "Un paso atrás en el tiempo",
        [
          "Recuerda la regla: el pretérito perfecto (he hecho) mira hacia atrás desde AHORA; el pluscuamperfecto (había hecho) mira hacia atrás desde un momento PASADO. Por eso, si el verbo principal pasa al pasado (dice → dijo, veo → vi, sé → sabía), el perfecto retrocede un paso: ha salido → había salido.",
          "Solo cambia el auxiliar: haber pasa de presente (he, has, ha...) a imperfecto (había, habías, había...). El participio y los pronombres se quedan igual.",
        ],
        [
          ["Ana dice: «He terminado.» → Ana dijo que había terminado.", "Ana said she had finished."],
          ["Veo que has limpiado. → Vi que habías limpiado.", "I saw that you had cleaned."],
          ["Nos dicen que se han mudado. → Nos dijeron que se habían mudado.", "They told us they had moved. (el pronombre se queda delante)"],
        ],
        [
          fb("Pasa la frase al pasado.", "Sé que han llegado. → Sabía que ___ llegado.", "habían", "Al pasar el verbo principal al pasado (sabía), el perfecto pasa a pluscuamperfecto: habían llegado."),
        ]
      ),
    ],
    [
      fb("Pasa la frase al pasado.", "Me dice que ha perdido el tren. → Me dijo que ___ el tren.", "había perdido", "En estilo indirecto con dijo, ha perdido → había perdido."),
      fb("Pasa la frase al pasado.", "Creo que hemos ganado. → Creía que ___.", "habíamos ganado", "Con creía (pasado), hemos ganado → habíamos ganado."),
      fb("Pasa la frase al pasado.", "Nunca he estado aquí. → Nunca ___ aquí antes de aquel día.", "había estado", "Antes de otro momento pasado (aquel día), nunca he estado → nunca había estado."),
      fb("Pasa la frase al pasado.", "Veo que te has cortado el pelo. → Vi que te ___ el pelo.", "habías cortado", "Solo cambia el auxiliar (has → habías); el pronombre te sigue delante y el participio no cambia: te habías cortado."),
      mc(
        "El jefe dice: «Ya he enviado el correo». En pasado:",
        ["El jefe dijo que ya había enviado el correo.", "El jefe dijo que ya ha enviado el correo.", "El jefe dice que ya había enviado el correo.", "El jefe dijo que ya enviaba el correo."],
        0,
        "Al contar en pasado (dijo), el pretérito perfecto pasa a pluscuamperfecto: había enviado. «Ha enviado» no cambia el tiempo, «dice» no está en pasado y «enviaba» cambia el sentido."
      ),
      toEs("I didn't know that you (tú) had lived in Chile.", "No sabía que habías vivido en Chile.", "Desde un momento pasado (no sabía), lo anterior va en pluscuamperfecto: habías vivido, con habías para tú.", ["Yo no sabía que habías vivido en Chile.", "No sabía que tú habías vivido en Chile."]),
      wo("Me contó que nunca había montado en avión.", "Contó está en pasado, así que su «nunca he montado» retrocede a nunca había montado.", "He told me he had never been on a plane."),
      toEs(
        "Mi vecina me dijo que ha encontrado trabajo.",
        "Mi vecina me dijo que había encontrado trabajo.",
        "Con el verbo de decir en pasado (me dijo), el perfecto debe retroceder: había encontrado. «Ha encontrado» solo es posible si la noticia sigue siendo de hoy mismo.",
        [],
        "Corrige la frase."
      ),
      toEs(
        "Pensábamos que el museo ya había cerrado.",
        "Pensamos que el museo ya ha cerrado.",
        "Al volver al presente, el verbo principal pasa a presente (pensamos) y el pluscuamperfecto avanza un paso: había cerrado → ha cerrado.",
        ["Pensamos que el museo ya cerró.", "Creemos que el museo ya ha cerrado."],
        "Cambia la frase al presente: el proceso al revés."
      ),
    ]
  ),
  L(
    "relative-pronouns-mastery-check",
    "b1r-build-combine-sentences",
    "Construye frases: une dos en una",
    "Convierte pares de frases cortas en una sola con que, quien, donde o lo que.",
    "7 min",
    [
      sec(
        "Con que",
        [
          "Recuerda la regla: cuando dos frases comparten un sustantivo, la segunda lo sustituye por un relativo que va justo detrás de él: Tengo un amigo. El amigo vive en Roma. → Tengo un amigo que vive en Roma. Sin preposición, que sirve para personas y cosas.",
          "Si el sustantivo es el objeto de la segunda frase, el sujeto de esa frase puede ir detrás del verbo: la casa que construyó mi abuelo.",
        ],
        [
          ["Compré un libro. El libro es muy largo. → Compré un libro que es muy largo.", "I bought a book that is very long. (que = sujeto de es)"],
          ["Me regalaron un reloj. Llevo el reloj siempre. → Llevo siempre el reloj que me regalaron.", "I always wear the watch they gave me. (que = objeto de regalaron)"],
        ],
        [
          fb("Reescribe en una sola frase.", "Esta es la casa. Mi abuelo construyó la casa. → Esta es la casa ___ construyó mi abuelo.", "que", "«Que» sustituye a «la casa», objeto de construyó, sin preposición."),
        ]
      ),
      sec(
        "Con preposición: quien, el que, donde",
        "Si el sustantivo llevaba preposición en la segunda frase, la preposición viaja delante del relativo: hablé con una chica → la chica con quien hablé. Para personas, quien o el/la que; para cosas, el/la que (concordando); para lugares, también donde (= en el que).",
        [
          ["Hablé con una chica. La chica es de Cuba. → La chica con quien hablé es de Cuba.", "The girl I spoke with is from Cuba."],
          ["Es el pueblo. Nací en el pueblo. → Es el pueblo donde nací.", "It's the town where I was born."],
        ],
        [
          { ...fb("Reescribe en una sola frase.", "Es mi profesora. Aprendí mucho con ella. → Es la profesora con ___ aprendí mucho.", "quien", "Aprender con alguien: la preposición con va delante y, para una persona, quien (o la que, concordando con profesora)."), altAnswers: ["la que", "la cual"] },
        ]
      ),
    ],
    [
      { ...fb("Reescribe en una sola frase.", "Visitamos un museo. En el museo hay obras de Goya. → Visitamos un museo ___ hay obras de Goya.", "donde", "En el museo hay obras: con un lugar y la preposición en, donde (o en el que)."), altAnswers: ["en el que", "en el cual"] },
      fb("Reescribe en una sola frase.", "No entendí algo. Dijo algo. → No entendí ___ dijo.", "lo que", "Algo no tiene un sustantivo concreto que repetir: se recoge con lo que (what he said)."),
      fb("Reescribe en una sola frase.", "Son los amigos. Viajé con ellos a Perú. → Son los amigos con los ___ viajé a Perú.", "que", "Viajar con ellos: la preposición va delante y el artículo concuerda con amigos: con los que."),
      wo("La película que vimos anoche fue muy aburrida.", "La oración con que (que vimos anoche) va justo detrás de la película, y luego el verbo principal (fue).", "The movie we saw last night was very boring."),
      wo("El hotel en el que nos quedamos tenía piscina.", "Quedarse en un hotel: preposición + el que (en el que), concordando con hotel.", "The hotel we stayed at had a pool."),
      mc(
        "«Lo que más me gusta de ti es tu sinceridad.» — ¿qué significa «lo que»?",
        ["What", "Who", "Where", "Which one"],
        0,
        "«Lo que» equivale a «what / the thing that». No significa «who» (quien), «where» (donde) ni «which one» (cuál)."
      ),
      toEs("The woman who lives upstairs is a doctor.", "La mujer que vive arriba es médica.", "«Who» sin preposición = que, también para personas.", ["La mujer que vive arriba es doctora.", "La señora que vive arriba es médica."]),
      toEs(
        "Es el pueblo que nací.",
        "Es el pueblo donde nací.",
        "Se nace en un sitio: falta la preposición. Con lugares, donde o en el que.",
        ["Es el pueblo en el que nací.", "Es el pueblo en que nací."],
        "Corrige la frase."
      ),
    ]
  ),
  L(
    "relative-pronouns-mastery-check",
    "b1r-error-hunt-relatives",
    "Caza de errores: los pronombres relativos",
    "«La chica quien vi», «lo cual que», «el cual que» — los relativos mal usados, corregidos uno a uno.",
    "7 min",
    [
      sec(
        "Quien sin preposición",
        [
          "Recuerda la regla: sin preposición y sin comas, el relativo es que, también para personas: ✗ La chica quien vi → ✓ La chica que vi. Quien solo aparece detrás de una preposición (con quien) o entre comas (mi tío, quien...).",
          "Los errores típicos vienen del inglés: usar quien porque traduce «who», omitir que como se omite «that», dejar la preposición al final, o usar que donde hace falta lo que.",
        ],
        [
          ["✗ El hombre quien trabaja aquí… → ✓ El hombre que trabaja aquí…", "The man who works here…"],
          ["✓ La persona con quien hablé…", "The person I spoke with… (with a preposition, quien is fine)"],
        ],
        [
          mc(
            "Corrige: «Tengo una vecina quien canta ópera.»",
            ["Tengo una vecina que canta ópera.", "Tengo una vecina la quien canta ópera.", "Tengo una vecina cual canta ópera.", "No hay error."],
            0,
            "Sin preposición ni coma, el relativo es «que»: una vecina que canta. «La quien» y «cual» sin artículo no son posibles, y la frase original sí tiene error."
          ),
        ]
      ),
      sec(
        "Que vs. lo que",
        "Que necesita un sustantivo antes. Lo que se refiere a una idea completa o a algo no nombrado (what, which). Detrás de todo, siempre lo que: todo lo que, nunca «todo que».",
        [
          ["✗ No sé que quieres. → ✓ No sé lo que quieres. / No sé qué quieres.", "I don't know what you want."],
          ["Llegó tarde, lo que me molestó.", "He arrived late, which annoyed me."],
        ],
        [
          fb("Corrige.", "Todo ___ dices es verdad. (el alumno escribió: que)", "lo que", "Detrás de todo no hay un sustantivo concreto: todo lo que = everything that. «Todo que» es un error."),
        ]
      ),
    ],
    [
      { ...fb("Corrige.", "El chico ___ te presenté ayer es mi primo. (el alumno escribió: quien)", "que", "Sin preposición → que. Quien solo es posible con la a personal delante: a quien te presenté."), altAnswers: ["a quien", "al que"] },
      fb("Corrige.", "Perdió el tren, ___ significa que llegará tarde. (el alumno escribió: que)", "lo que", "Lo que significa es que perdió el tren, toda la idea anterior, no un sustantivo: lo que (o lo cual)."),
      { ...fb("Corrige.", "La empresa para ___ trabajo es alemana. (el alumno escribió: que)", "la que", "Tras preposición, el relativo lleva artículo que concuerda con empresa: para la que. «Para que» significa «so that»."), altAnswers: ["la cual"] },
      ms(
        "¿Qué frases son correctas?",
        ["Los amigos con quienes salgo son simpáticos.", "Es la ciudad donde me enamoré.", "El libro que me prestaste es genial.", "Haz lo cual quieras."],
        [0, 1, 2],
        "«Haz lo cual quieras» es incorrecta: sin antecedente se dice «lo que»: haz lo que quieras. Las otras usan bien quienes, donde y que."
      ),
      mc(
        "¿Cuál es correcta?",
        ["Lo que necesito es dormir.", "Que necesito es dormir.", "El que necesito es dormir.", "Quien necesito es dormir."],
        0,
        "Para algo sin nombrar al principio de la frase se usa «lo que» = what: Lo que necesito es dormir. «Que» solo, «el que» (algo masculino concreto) y «quien» (persona) no encajan."
      ),
      toEs("I don't understand what you (tú) are saying.", "No entiendo lo que dices.", "Lo que = what (the thing that): no hay sustantivo delante.", ["No entiendo qué dices.", "No entiendo lo que estás diciendo."]),
      wo("Esa es la razón por la que no vine.", "No vine por esa razón: preposición + la que, en femenino por razón.", "That's the reason why I didn't come."),
    ]
  ),
  L(
    "relative-pronouns-mastery-check",
    "b1r-mission-describe-without-word",
    "Misión real: descríbelo sin decirlo",
    "Un juego de adivinanzas: define objetos, personas y lugares con relativas — sin decir la palabra.",
    "7 min",
    [
      sec(
        "Cómo jugar",
        [
          "Recuerda la regla: una definición es un sustantivo general + una oración de relativo. Persona o cosa sin preposición → que (Es una persona que...). Lugar → donde o en el que. Con preposición → artículo + que (Es la herramienta con la que...). Una acción o idea → lo que (Es lo que haces cuando...).",
          "Tu misión: adivina las palabras de tus compañeros y define otras sin decirlas.",
        ],
        [
          ["Es una persona que trabaja en un hospital y cuida a los enfermos. → un enfermero", "It's a person who works in a hospital and looks after the sick."],
          ["Es un lugar donde se compran medicinas. → una farmacia", "It's a place where you buy medicine."],
        ],
        [
          mc(
            "«Es una cosa que usas para abrir una puerta.»",
            ["una llave", "una ventana", "un coche", "una silla"],
            0,
            "Lo que usas para abrir una puerta es una llave (key). Una ventana, un coche y una silla no sirven para eso."
          ),
          mc(
            "Te toca definir «reloj». ¿Qué definición es correcta?",
            ["Es una cosa que te dice la hora.", "Es una cosa quien te dice la hora.", "Es una cosa lo que te dice la hora.", "Es una cosa te dice la hora."],
            0,
            "Cosa sin preposición: que. Quien es solo para personas, lo que no va detrás de un sustantivo y en español el relativo no se puede omitir."
          ),
        ]
      ),
      sec(
        "Tu turno de definir",
        "Ahora completa las definiciones con el relativo correcto.",
        [
          ["Es algo con lo que escribes.", "It's something you write with."],
        ],
        [
          { ...fb("Completa la definición de «biblioteca».", "Es un lugar ___ puedes leer y pedir libros prestados.", "donde", "Lees en la biblioteca: para un lugar se usa «donde» (= en el que)."), altAnswers: ["en el que", "en que"] },
        ]
      ),
    ],
    [
      fb("Completa la definición de «cartero».", "Es la persona ___ reparte las cartas.", "que", "Para una persona sin preposición ni coma se usa «que», no «quien»."),
      fb("Completa la definición de «tijeras».", "Es la herramienta con la ___ cortas papel.", "que", "Se corta con la herramienta: la preposición va delante y el artículo concuerda con herramienta: con la que."),
      fb("Completa la definición de «cumpleaños».", "Es el día en el ___ celebras que naciste.", "que", "Para un momento se usa «en el que» (o «en que»): el día en el que…"),
      mt(
        "Relaciona cada definición con la palabra.",
        [
          ["Es lo que haces cuando tienes sueño.", "dormir"],
          ["Es la persona con quien te casas.", "el esposo / la esposa"],
          ["Es el lugar donde aterrizan los aviones.", "el aeropuerto"],
          ["Es la cosa que te protege de la lluvia.", "el paraguas"],
        ],
        "Lo que define una acción (dormir); con quien, una persona con preposición; donde, un lugar; que, una cosa sin preposición."
      ),
      mc(
        "¿Qué definición describe una «nevera»?",
        ["Es el aparato en el que guardas la comida fría.", "Es la persona que cocina.", "Es el lugar donde duermes.", "Es lo que comes por la noche."],
        0,
        "Una nevera es el aparato en el que guardas la comida fría. Las otras definiciones describen a un cocinero, un dormitorio y la cena."
      ),
      toEs("It's the person who teaches you to drive.", "Es la persona que te enseña a conducir.", "«Who» sin preposición = que: la persona que te enseña.", ["Es la persona que te enseña a manejar."]),
      wo("Es la época del año en la que caen las hojas.", "Para un momento se usa en la que, en femenino por época (o simplemente en que).", "It's the time of year when the leaves fall."),
      toEs(
        "Es una persona que repara coches.",
        "Es un lugar donde se reparan coches.",
        "Para definir el lugar en vez de la persona, cambia el sustantivo (un lugar) y el relativo (donde o en el que); con se, el verbo concuerda con coches: se reparan.",
        ["Es un lugar donde reparan coches.", "Es un lugar en el que se reparan coches.", "Es un lugar en el que reparan coches."],
        "Transforma la definición de «mecánico» en la de «taller»: empieza con «Es un lugar...»."
      ),
    ]
  ),
  L(
    "passive-voice-se-2",
    "b1r-mission-signs-ads",
    "Misión real: carteles y anuncios",
    "Pasea por una ciudad y descifra sus carteles: se vende, se alquila, se busca, se habla inglés.",
    "8 min",
    [
      sec(
        "Recuerda la regla: lo que dicen las paredes",
        [
          "Recuerda la regla: los carteles usan el se pasivo, se + verbo en tercera persona que concuerda con lo que se vende, alquila o busca: se vende piso, se alquilan habitaciones.",
          "¿Por qué tanto se en los carteles? Porque a quien lee no le importa quién vende o busca: lo importante es la cosa. Por eso esa cosa es el sujeto y decide el singular o el plural. Los carteles suelen quitar el artículo: se vende piso (= un piso).",
        ],
        [
          ["Se vende piso.", "Apartment for sale. (piso → singular)"],
          ["Se alquilan habitaciones.", "Rooms for rent. (habitaciones → plural)"],
          ["Se necesitan camareros.", "Waiters needed."],
          ["Se habla inglés.", "English spoken."],
        ],
        [
          fb("Completa el cartel.", "Se ___ bicicletas usadas. (vender)", "venden", "«Bicicletas» es el sujeto y es plural → se venden."),
          fb("Completa el cartel.", "Se ___ local en planta baja. (traspasar)", "traspasa", "«Local» es singular (el cartel omite el artículo) → se traspasa. «Traspasar» un negocio = cederlo a otra persona."),
        ]
      ),
      sec(
        "Normas y prohibiciones",
        "Para normas generales sin una cosa concreta, se usa el se impersonal, siempre en singular, porque lo que sigue es un infinitivo (una acción): no se puede fumar, se ruega silencio, se prohíbe pasar. «Está prohibido» + infinitivo dice lo mismo.",
        [
          ["No se puede aparcar aquí.", "No parking here. (aparcar es una acción → singular)"],
          ["Se ruega silencio.", "Silence, please."],
          ["Está prohibido bañarse en el lago.", "Swimming in the lake is forbidden."],
        ],
        [
          mc(
            "«___ prohibido tocar las obras.»",
            ["Está", "Se", "Es", "Son"],
            0,
            "«Estar prohibido» + infinitivo: está prohibido tocar las obras. «Se» necesitaría otro verbo (se prohíbe), «es prohibido» se oye en parte de América, pero lo estándar es «está prohibido» y «son» no concuerda."
          ),
        ]
      ),
    ],
    [
      fb("Completa el cartel.", "Se ___ clases particulares de matemáticas. (dar)", "dan", "«Clases» es plural → se dan."),
      fb("Completa el cartel.", "Se ___ perro perdido; responde al nombre de Toby. (buscar)", "busca", "«Perro» es singular → se busca."),
      fb("Completa el cartel.", "En este restaurante se ___ muy bien. (comer)", "come", "No hay ninguna cosa como sujeto («muy bien» es un adverbio): se impersonal en singular."),
      mt(
        "Relaciona cada cartel con su lugar.",
        [
          ["Se reparan móviles.", "una tienda de tecnología"],
          ["Se aceptan tarjetas.", "una caja"],
          ["No se admiten mascotas.", "un hotel"],
          ["Se hacen fotocopias.", "una papelería"],
        ],
        "Cada cartel usa se + tercera persona que concuerda con la cosa: móviles, tarjetas, mascotas, fotocopias → plural."
      ),
      ms(
        "¿Qué carteles son correctos?",
        ["Se venden coches.", "Se alquila apartamentos.", "Se busca profesora.", "Se habla francés y alemán."],
        [0, 2, 3],
        "«Se alquila apartamentos» es incorrecta: el verbo concuerda con el plural, se alquilan. Los otros concuerdan bien; con nombres de idiomas coordinados lo habitual es el singular: se habla francés y alemán."
      ),
      toEs("Spanish is spoken in twenty-one countries.", "Se habla español en veintiún países.", "Se pasivo en singular por «español»; «veintiún» se acorta delante de un sustantivo masculino.", ["El español se habla en veintiún países."]),
      wo("En esta tienda no se aceptan devoluciones.", "Se pasivo en plural porque concuerda con «devoluciones».", "Returns are not accepted in this store."),
    ]
  ),
  L(
    "passive-voice-se-2",
    "b1r-transform-active-passive-se",
    "Transformaciones: activa, pasiva y se",
    "Una misma noticia contada de tres maneras: activa, pasiva con ser y con se.",
    "9 min",
    [
      sec(
        "Recuerda la regla: tres versiones de un mismo hecho",
        [
          "Recuerda la regla: activa → El ayuntamiento construyó el puente (el agente es el sujeto). Pasiva con ser → El puente fue construido por el ayuntamiento (el objeto pasa a sujeto; ser toma el tiempo del verbo original y el agente va con por). Con se → Se construyó el puente (sin agente).",
          "¿Cuál eliges? Depende de lo que quieres destacar: la activa pone delante a quien actúa; la pasiva con ser, a lo que recibe la acción, sin perder al agente; el se, solo el hecho.",
        ],
        [
          ["Los vecinos pintaron el mural.", "The neighbors painted the mural. (activa)"],
          ["El mural fue pintado por los vecinos.", "The mural was painted by the neighbors. (pasiva: «fue» porque «pintaron» es indefinido)"],
          ["Se pintó el mural.", "The mural was painted. (se, sin agente)"],
        ],
        [
          fb("Pasa a la pasiva con ser.", "La policía detuvo a los ladrones. → Los ladrones fueron ___ por la policía.", "detenidos", "El participio concuerda con el nuevo sujeto, «los ladrones» (masculino plural): detenidos. La «a» de persona desaparece porque ya no es objeto."),
        ]
      ),
      sec(
        "Concordancia en la pasiva",
        "En la pasiva con ser, el participio concuerda en género y número con el sujeto (nunca con el agente). Con se, el verbo concuerda con el sustantivo y el participio desaparece.",
        [
          ["Las cartas fueron enviadas ayer. / Se enviaron las cartas ayer.", "The letters were sent yesterday."],
          ["La carretera fue reabierta por los técnicos.", "The road was reopened by the technicians. (reabierta: femenino, como «la carretera», no como «los técnicos»)"],
        ],
        [
          fb("Pasa a la construcción con se.", "Las entradas fueron vendidas en una hora. → ___ las entradas en una hora.", "Se vendieron", "Con se, el tiempo de «fueron» pasa al verbo y este concuerda con «las entradas» (plural): se vendieron."),
          fb("Pasa a la voz activa.", "El cuadro fue robado por dos hombres. → Dos hombres ___ el cuadro.", "robaron", "Al volver a la activa, el agente (dos hombres) es el sujeto y el verbo concuerda con él en plural, en el tiempo de «fue»: robaron."),
        ]
      ),
    ],
    [
      fb("Pasa a la pasiva con ser.", "Cervantes escribió el Quijote. → El Quijote fue ___ por Cervantes.", "escrito", "En la pasiva, el participio concuerda con el sujeto (el Quijote, masculino singular); escribir → escrito."),
      fb("Pasa a la pasiva con ser.", "El jurado eligió a las ganadoras. → Las ganadoras fueron ___ por el jurado.", "elegidas", "El participio concuerda con «las ganadoras»: femenino plural, elegidas."),
      fb("Pasa a la construcción con se.", "Abrieron una nueva biblioteca. → ___ una nueva biblioteca.", "Se abrió", "Con se pasivo, el verbo concuerda con «una nueva biblioteca» (singular): se abrió."),
      mc(
        "¿Cuál es la versión con se de «Los resultados serán publicados mañana»?",
        ["Se publicarán los resultados mañana.", "Se publicará los resultados mañana.", "Se publican los resultados ayer.", "Los resultados se publicó mañana."],
        0,
        "Con se, el verbo concuerda con «los resultados» y mantiene el futuro de «serán»: se publicarán. «Se publicará» no concuerda, «publican… ayer» cambia el tiempo y «se publicó mañana» mezcla pasado y futuro."
      ),
      ms(
        "¿Qué frases son correctas?",
        ["La casa fue vendida en marzo.", "Los premios fueron entregado ayer.", "Se construyeron dos hospitales.", "El edificio fue diseñado por una arquitecta."],
        [0, 2, 3],
        "En la pasiva con ser, el participio concuerda con el sujeto: «Los premios fueron entregados», no «entregado». Las otras concuerdan bien: vendida, diseñado, y se construyeron con plural."
      ),
      toEs("The bridge was built in 1920.", "El puente fue construido en 1920.", "Pasiva con ser; también vale con se: Se construyó el puente en 1920.", ["Se construyó el puente en 1920.", "El puente se construyó en 1920."]),
      wo("La noticia fue confirmada por el gobierno esta mañana.", "Ser + participio concordado con «la noticia» (confirmada) + por + agente.", "The news was confirmed by the government this morning."),
    ]
  ),
  L(
    "passive-voice-se-2",
    "b1r-contrast-se-pasivo-impersonal",
    "Contraste: se pasivo / se impersonal",
    "¿Se vende o se venden? ¿Se busca o se buscan? Aprende a decidir en un segundo.",
    "8 min",
    [
      sec(
        "Recuerda la regla: la prueba del sustantivo",
        [
          "Recuerda la regla: si hay un sustantivo sin preposición que recibe la acción, ese sustantivo es el sujeto y el verbo concuerda con él (se pasivo). Si no hay sustantivo, o lo que hay es una persona con «a», el verbo va en singular (se impersonal).",
          "¿Por qué la «a» lo cambia todo? Porque un sujeto nunca lleva preposición. «Los testigos» podría ser sujeto; «a los testigos», no. Sin sujeto, el verbo se queda en la forma neutra: tercera persona singular.",
        ],
        [
          ["Se venden casas.", "Houses are sold. (pasivo: concuerda con casas)"],
          ["Se vive bien aquí.", "One lives well here. (impersonal: sin sustantivo)"],
          ["Se busca a los testigos.", "The witnesses are being sought. (impersonal: a + personas)"],
          ["Se buscan pisos baratos.", "Cheap apartments wanted. (pasivo: pisos, sin «a»)"],
        ],
        [
          mc(
            "«En Argentina ___ mucha carne.»",
            ["se come", "se comen", "se comemos", "se comes"],
            0,
            "En el se pasivo el verbo concuerda con lo que se come: carne (singular) → se come. «Se comen» sería para un plural, y «se comemos» o «se comes» mezclan el se con otras personas."
          ),
          fb("¿Singular o plural?", "En este club se ___ a los socios nuevos con una cena. (recibir)", "recibe", "«A los socios» es una persona con «a»: no es sujeto, así que el verbo queda en singular, se recibe."),
        ]
      ),
    ],
    [
      fb("¿Singular o plural?", "Aquí se ___ muchos idiomas. (hablar)", "hablan", "«Idiomas» es un sustantivo plural sin preposición: es el sujeto → se hablan."),
      fb("¿Singular o plural?", "En verano se ___ muy tarde en España. (cenar)", "cena", "No hay sustantivo («muy tarde» es un adverbio) → impersonal singular."),
      fb("¿Singular o plural?", "Se ___ a los ganadores por teléfono. (llamar)", "llamará", "«A los ganadores» lleva «a» → no es sujeto: impersonal singular (futuro: se llamará)."),
      fb("¿Singular o plural?", "Se ___ tres pisos en el centro. (alquilar)", "alquilan", "«Tres pisos» es el sujeto y es plural → se alquilan."),
      ms(
        "¿Qué frases son correctas?",
        ["Se necesita paciencia.", "Se necesitan voluntarios.", "Se trabaja mucho en esta oficina.", "Se ayudan a los ancianos."],
        [0, 1, 2],
        "«Se ayudan a los ancianos» es incorrecta: con personas precedidas de «a» el verbo queda en singular, se ayuda a los ancianos. Las otras concuerdan bien (paciencia, voluntarios) o son impersonales."
      ),
      mt(
        "Relaciona cada frase con su traducción.",
        [
          ["Se dice que va a nevar.", "They say it's going to snow."],
          ["Se prohíbe fumar.", "Smoking is prohibited."],
          ["Se venden entradas.", "Tickets on sale."],
          ["¿Cómo se escribe tu nombre?", "How do you spell your name?"],
        ],
        "El se impersonal y el se pasivo suelen traducirse con «they», «one», «you» o la pasiva en inglés."
      ),
      wo("En esta ciudad se sale mucho por la noche.", "Impersonal: sin sustantivo, verbo en singular.", "In this city people go out a lot at night."),
    ]
  ),
  L(
    "combined-object-pronouns-2",
    "b1r-dialogue-combined-pronouns",
    "Laboratorio de diálogo: ¿me lo prestas?",
    "Préstamos, regalos y favores entre compañeros de piso — sin repetir ni un solo sustantivo.",
    "8 min",
    [
      sec(
        "Pedir y prestar",
        [
          "Recuerda la regla: en una conversación no repites lo que ya se ha dicho. La persona va primero (me, te, le, nos, os, les) y la cosa después (lo, la, los, las); si la persona es le / les, pasa a «se»: se lo, se la, se los, se las.",
          "¿Por qué funciona sin sustantivos? Porque el segundo pronombre copia el género y el número de la cosa (el cargador → lo, las llaves → las), y el contexto del diálogo dice el resto. Al responder, cambia el punto de vista: «¿me…?» → «te…».",
        ],
        [
          ["—¿Me dejas tu sudadera? —Vale, te la dejo.", "Can I borrow your sweatshirt? — OK, I'll lend it to you. [me → te; la sudadera → la]"],
          ["—¿Le devolviste el libro a Sara? —Sí, se lo devolví ayer.", "Did you give Sara back her book? — Yes, I gave it back to her yesterday. [le + lo → se lo]"],
        ],
        [
          fb("Responde.", "—¿Me dejas tus apuntes? —Sí, te ___ dejo.", "los", "Tus apuntes (masculino plural) → los: te los dejo."),
          mc(
            "—¿Les has pagado el alquiler a los caseros? —Sí, ya ___ he pagado.",
            ["se lo", "les lo", "se los", "lo les"],
            0,
            "El alquiler → lo (masculino singular); les + lo → se lo, delante del auxiliar «he». «Les lo» es imposible, «se los» concuerda con los caseros en vez de con el alquiler y «lo les» invierte el orden."
          ),
        ]
      ),
      sec(
        "Con infinitivos",
        [
          "Con un verbo conjugado + infinitivo (voy a, puedo, quiero…) puedes poner los dos pronombres antes del verbo conjugado o pegados al infinitivo, con tilde. Nunca en medio.",
          "¿Por qué la tilde? Al pegar dos pronombres, el acento del infinitivo queda en la antepenúltima sílaba (tra-ÉR-te-lo), y esas palabras siempre llevan tilde.",
        ],
        [
          ["Te lo voy a traer. = Voy a traértelo.", "I'm going to bring it to you. [delante o pegados, nunca «voy a te lo traer»]"],
          ["¿Nos las puedes guardar? = ¿Puedes guardárnoslas?", "Can you keep them for us? [nos + las]"],
        ],
        [
          fb("Responde pegando los pronombres.", "—¿Le vas a dar la noticia a tu madre? —Sí, voy a ___ esta noche.", "dársela", "Dar + se + la → dársela (con tilde)."),
          mc(
            "—¿Quieres enseñarme tu habitación nueva? —Sí, quiero ___.",
            ["enseñártela", "enseñartela", "te la enseñar", "enseñármela"],
            0,
            "Pegados al infinitivo: te (a ti, porque cambia el punto de vista) + la (la habitación), con tilde: enseñártela. Sin tilde está mal escrita, los pronombres no pueden ir entre «quiero» y el infinitivo, y «me» no cambia el punto de vista."
          ),
        ]
      ),
    ],
    [
      { ...fb("Responde.", "—¿Nos traes las bebidas? —Sí, ahora ___ las traigo.", "os", "Si te preguntan con «nos» (vosotros), respondes con os: os las traigo."), altAnswers: ["se"] },
      fb("Responde.", "—¿Les mandaste las fotos a tus padres? —Sí, ___ las mandé.", "se", "Les + las → se las: delante de un pronombre en l-, «les» siempre pasa a «se»."),
      fb("Responde.", "—¿Te han devuelto el dinero? —No, todavía no me ___ han devuelto.", "lo", "El dinero (masculino singular) → lo: me lo han devuelto."),
      mt(
        "Relaciona cada pregunta con su respuesta.",
        [
          ["¿Me explicas el problema?", "Sí, te lo explico."],
          ["¿Le regalaste la bufanda?", "Sí, se la regalé."],
          ["¿Os dieron las llaves?", "Sí, nos las dieron."],
          ["¿Les contaste los planes?", "Sí, se los conté."],
        ],
        "Indirecto + directo, y le/les → se. La persona cambia de punto de vista (me → te, os → nos) y el segundo pronombre copia la cosa (el problema → lo, la bufanda → la)."
      ),
      mc(
        "«I'm going to send it to them.» (el paquete)",
        ["Voy a mandárselo.", "Voy a mandarleslo.", "Se lo voy mandar.", "Les lo voy a mandar."],
        0,
        "Les + lo → se lo, pegados al infinitivo y con tilde: mandárselo. «Mandarleslo» no cambia les a se, «Se lo voy mandar» omite la «a» y «Les lo» nunca es correcto."
      ),
      toEs("Can you (tú) explain it to me again?", "¿Me lo puedes explicar otra vez?", "Me + lo antes del verbo conjugado.", ["¿Puedes explicármelo otra vez?", "¿Me lo puedes explicar de nuevo?", "¿Puedes explicármelo de nuevo?"]),
      wo("Si necesitas el coche, te lo presto el sábado.", "Te lo delante del verbo conjugado.", "If you need the car, I'll lend it to you on Saturday."),
    ]
  ),
  L(
    "combined-object-pronouns-2",
    "b1r-transform-double-pronouns",
    "Transformaciones: sustituye todo",
    "Frases llenas de sustantivos → frases con dos pronombres. Paso a paso.",
    "7 min",
    [
      sec(
        "La idea: primero la persona, luego la cosa",
        [
          "Recuerda la regla: para cambiar dos sustantivos por pronombres, hazlo en dos pasos. Paso 1: la cosa (directo) → lo, la, los, las, según su género y número. Paso 2: la persona (indirecto) → me, te, le, nos, os, les, y colócala delante: persona antes que cosa.",
          "Si la persona es le o les, se convierte en «se» delante de lo/la/los/las, porque «le lo» suena mal. Como «se» no muestra el número, el plural solo aparece en la cosa: se los = them (cosas) to him / her / them.",
        ],
        [
          ["Doy el libro a Ana. → Lo doy a Ana. → Se lo doy.", "I give the book to Ana. → I give it to her. (le + lo → se lo)"],
          ["Compro flores a mi madre. → Se las compro.", "I buy flowers for my mother. → I buy them for her. (flores: las)"],
          ["Nos enseñaron el piso. → Nos lo enseñaron.", "They showed us the flat. → They showed it to us. (nos no cambia)"],
        ],
        [
          fb("Sustituye los dos objetos.", "Explico la lección a los alumnos. → ___ la explico.", "Se", "La lección → la; a los alumnos → les, que se convierte en se delante de la: se la explico."),
        ]
      ),
      sec(
        "¿Delante o pegados?",
        [
          "Con un verbo conjugado, los dos pronombres van delante, juntos: se lo he dado, no se lo mandes.",
          "Con infinitivo, gerundio o mandato afirmativo, van pegados al final, en el mismo orden. Al añadir sílabas, la palabra lleva tilde para que el acento no se mueva: da → dáselo, contar → contárselo.",
        ],
        [
          ["Voy a contárselo. / Se lo voy a contar.", "I'm going to tell it to him. (infinitivo: pegados o delante del verbo conjugado)"],
          ["Dáselo, pero no se lo des abierto.", "Give it to him, but don't give it to him open. (afirmativo: pegados; negativo: delante)"],
        ],
        [
          mc(
            "«Estoy escribiendo la carta a mis tíos.» → con pronombres:",
            ["Estoy escribiéndosela.", "Estoy escribiéndoles la.", "Les la estoy escribiendo.", "Estoy escribiéndolase."],
            0,
            "Con gerundio, los pronombres se pegan en orden persona + cosa (se + la) y el gerundio lleva tilde: escribiéndosela. También vale «se la estoy escribiendo». «Les la» no existe y «-lase» invierte el orden."
          ),
        ]
      ),
    ],
    [
      fb("Sustituye los dos objetos.", "Te traigo el café a ti. → ___ lo traigo.", "Te", "A ti → te: te lo traigo."),
      fb("Sustituye los dos objetos.", "Dimos los regalos a los niños. → ___ los dimos.", "Se", "Les + los → se los."),
      fb("Sustituye los dos objetos.", "Nos enseñaron las fotos. → Nos ___ enseñaron.", "las", "Las fotos (femenino plural) → las: nos las enseñaron."),
      fb("Sustituye y pega al mandato.", "Da la llave a Pedro. → ___.", "Dásela", "Da + se + la → dásela."),
      mc(
        "«Estoy preparando la cena para mis suegros.» → con pronombres:",
        ["Se la estoy preparando.", "Les la estoy preparando.", "La se estoy preparando.", "Estoy preparándoles la."],
        0,
        "Les + la → se la, delante del verbo conjugado (se la estoy preparando) o pegados al gerundio (preparándosela). «Les la» no existe, «La se» invierte el orden y «preparándoles la» separa el pronombre."
      ),
      ms(
        "¿Qué transformaciones son correctas?",
        ["Pido un favor a mi hermano. → Se lo pido.", "Leo un cuento a mi hija. → Le lo leo.", "Me enviaron el paquete. → Me lo enviaron.", "Os cuento el secreto a vosotros. → Os lo cuento."],
        [0, 2, 3],
        "«Leo un cuento a mi hija → Le lo leo» es incorrecta: le lo nunca existe, se dice «se lo leo». Las otras transformaciones son correctas."
      ),
      wo("¿La verdad? Todavía no se la he dicho a nadie.", "Se la delante de haber.", "The truth? I haven't told it to anyone yet."),
    ]
  ),
  L(
    "combined-object-pronouns-2",
    "b1r-error-hunt-se-lo",
    "Caza de errores: le lo, se los, lo me",
    "Los errores más frecuentes con dos pronombres: orden, le lo y concordancia.",
    "7 min",
    [
      sec(
        "Tres reglas, tres errores",
        [
          "Recuerda las reglas de los dos pronombres. (1) Persona antes que cosa: el indirecto va primero. ✗ lo me → ✓ me lo. (2) Le y les se convierten en se delante de lo, la, los, las, solo por sonido: ✗ le lo → ✓ se lo. (3) «Se» no muestra el número de la persona; el plural que ves en se los / se las es el de la cosa.",
          "Truco para cazar errores: pregúntate «¿qué?» (eso es lo/la/los/las, y concuerda con la cosa) y «¿a quién?» (eso va delante, y si es le/les, se vuelve se).",
        ],
        [
          ["✗ Lo te doy. → ✓ Te lo doy.", "I give it to you. (regla 1: te antes que lo)"],
          ["✗ Les lo dije. → ✓ Se lo dije.", "I told it to them. (regla 2: les → se)"],
          ["✗ ¿Las flores? Se lo di. → ✓ Se las di.", "The flowers? I gave them to her. (regla 3: las, por las flores)"],
        ],
        [
          mc(
            "Corrige: «Le la compré ayer.»",
            ["Se la compré ayer.", "La le compré ayer.", "Le compré la ayer.", "No hay error."],
            0,
            "«Le» delante de «la» siempre pasa a «se»: se la compré. «La le» invierte el orden, «compré la» pone el pronombre detrás de un verbo conjugado y la frase original sí tiene error."
          ),
        ]
      ),
    ],
    [
      fb("Corrige.", "¿Las entradas? Ya ___ las di a tus amigos. (el alumno escribió: les)", "se", "Les + las → se las."),
      fb("Corrige.", "Mi abuela ___ contó a mí. (el alumno escribió: lo me)", "me lo", "El pronombre indirecto va antes que el directo: me lo contó, no «lo me»."),
      fb("Corrige.", "¿El informe? Voy a ___ ahora. (enviar, a ti; el alumno escribió: enviartelo)", "enviártelo", "Al pegar dos pronombres la palabra queda esdrújula → tilde: enviártelo."),
      ms(
        "¿Qué frases tienen un error?",
        ["Se lo expliqué a mis padres.", "Me los prestó mi vecino.", "Lo le di.", "¿Nos la traes?"],
        [2],
        "«Lo le di» tiene dos errores: el indirecto va primero y le → se delante de lo: se lo di. Las otras frases combinan bien los pronombres."
      ),
      mc(
        "«I gave them (the books) to her.»",
        ["Se los di.", "Le los di.", "Se lo di.", "Los le di."],
        0,
        "Los libros → los, y le (a ella) → se delante de los: se los di. «Le los» no cambia le a se, «Se lo» no concuerda con «los libros» y «Los le» invierte el orden."
      ),
      toEs("Don't tell it to him! (tú)", "¡No se lo digas!", "Negativo: pronombres delante; le + lo → se lo.", ["¡No se lo cuentes!"]),
      wo("Necesito tu bici; ¿me la prestas mañana?", "Me la delante del verbo conjugado.", "I need your bike; can you lend it to me tomorrow?"),
    ]
  ),
  L(
    "possessive-pronouns-2",
    "b1r-mission-lost-and-found",
    "Misión real: objetos perdidos",
    "En la oficina de objetos perdidos de un aeropuerto: ¿de quién es cada cosa? El mío, el tuyo, el suyo.",
    "7 min",
    [
      sec(
        "¿Es tuyo?",
        [
          "Recuerda la regla: el posesivo concuerda con el objeto, no con el dueño: el mío, la mía, los míos, las mías. Para decir de quién es algo, después de ser va sin artículo (es mío); para identificar cuál es el tuyo entre varios, o cuando el posesivo es sujeto, lleva artículo (la mía es azul).",
          "Tu misión: estás en la oficina de objetos perdidos de un aeropuerto. Tienes que reconocer tus cosas, describirlas y responder al empleado, que te habla de usted.",
        ],
        [
          ["—¿Esta maleta es suya? —No, la mía es azul.", "Is this suitcase yours? — No, mine is blue. (la mía: sujeto, con artículo)"],
          ["—¿Son vuestras estas gafas? —Sí, son nuestras.", "Are these glasses yours? — Yes, they're ours. (tras ser: sin artículo)"],
        ],
        [
          fb("Responde.", "—¿Este paraguas es tuyo? —Sí, es ___.", "mío", "Respondes de quién es, tras ser: sin artículo. Paraguas es masculino singular → mío."),
        ]
      ),
      sec(
        "Aclarar el suyo",
        "Suyo puede ser de él, de ella, de usted, de ellos… Si hay ambigüedad, se usa de + persona: la de él, el de ella.",
        [
          ["—¿Es el abrigo de Laura o el de Pedro? —Es el de ella.", "Is it Laura's coat or Pedro's? — It's hers."],
        ],
        [
          mc(
            "«Mi móvil es negro. ¿Y ___?» (tú)",
            ["el tuyo", "la tuya", "tu", "tuyo el"],
            0,
            "Sin repetir el sustantivo, el posesivo lleva artículo y concuerda con «móvil» (masculino): el tuyo. «La tuya» es femenino, «tu» necesita sustantivo detrás y «tuyo el» invierte el orden."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "Tus maletas están aquí, pero las ___ no han llegado. (nosotros)", "nuestras", "Sustituye a «nuestras maletas»: femenino plural, con artículo porque es sujeto → las nuestras."),
      fb("Completa.", "Ese pasaporte no es mío; el ___ es rojo. (de usted)", "suyo", "Con usted se usa suyo; pasaporte es masculino singular → el suyo."),
      fb("Completa.", "—¿Estas llaves son de ustedes? —Sí, son ___.", "nuestras", "Los dueños somos nosotros y las llaves son femenino plural: nuestras."),
      mt(
        "Relaciona cada frase con su significado.",
        [
          ["Es mío.", "It's mine."],
          ["Es el mío.", "It's mine (the one that's mine, among others)."],
          ["Un amigo mío.", "A friend of mine."],
          ["Lo mío es la música.", "My thing is music."],
        ],
        "El posesivo sin artículo después de ser, con artículo para identificar, detrás del nombre y con lo neutro."
      ),
      ms(
        "¿Qué frases son correctas?",
        ["La tuya es más grande.", "Estos zapatos son míos.", "Es un primo tuyo.", "Mía mochila es verde."],
        [0, 1, 2],
        "«Mía mochila» es incorrecta: delante del sustantivo se usa la forma corta, mi mochila. Las otras usan bien el posesivo tónico con artículo, tras ser y detrás del sustantivo."
      ),
      toEs("Your (tú) suitcase is here, but mine is lost.", "Tu maleta está aquí, pero la mía está perdida.", "Adjetivo (tu) delante; pronombre (la mía) solo.", ["Tu maleta está aquí, pero la mía se ha perdido."]),
      wo("Perdona, creo que ese asiento es el nuestro.", "«Es el nuestro» identifica cuál de los asientos es nuestro (uno entre varios); para decir solo de quién es, basta «es nuestro».", "Excuse me, I think that seat is the one that's ours."),
    ]
  ),
  L(
    "possessive-pronouns-2",
    "b1r-contrast-mi-mio",
    "Contraste: mi / mío, tu / tuyo",
    "Adjetivo delante del nombre o pronombre en su lugar — elige la forma correcta en cada contexto.",
    "7 min",
    [
      sec(
        "Dos formas para cada persona",
        [
          "Recuerda la regla: cada persona tiene una forma corta (mi, tu, su) y una larga (mío, tuyo, suyo); nuestro y vuestro son iguales en las dos. La corta va siempre delante del sustantivo y nunca sola. La larga va en todos los demás sitios: detrás del sustantivo (un amigo mío), después de ser (es mío) o en lugar del sustantivo con artículo (el mío).",
          "¿Por qué? La forma corta no tiene acento propio y se apoya en el sustantivo que la sigue; la larga es tónica y puede ir sola. Por eso «es mi» o «mío coche» son imposibles.",
        ],
        [
          ["mi casa / la mía", "my house / mine (corta delante; larga con artículo en su lugar)"],
          ["tus libros / los tuyos", "your books / yours"],
          ["un amigo mío", "a friend of mine (larga detrás del sustantivo)"],
        ],
        [
          mc(
            "«¡Dios ___!»",
            ["mío", "mi", "el mío", "mía"],
            0,
            "«¡Dios mío!» es una expresión fija con el posesivo tónico detrás del sustantivo. «Mi» iría delante, «el mío» lleva artículo que aquí sobra y «mía» no concuerda con «Dios»."
          ),
        ]
      ),
    ],
    [
      fb("Elige la forma correcta.", "Una amiga ___ vive en París. (yo)", "mía", "Detrás del sustantivo se usa la forma tónica, que concuerda con «amiga»: una amiga mía."),
      fb("Completa con el posesivo correcto.", "Este no es ___ coche; es el de mi hermano.", "mi", "Delante del sustantivo se usa la forma átona: mi coche."),
      fb("Elige la forma correcta.", "Tu casa es grande, pero la ___ tiene jardín. (yo)", "mía", "En lugar del sustantivo va la forma larga con artículo, concordando con casa: la mía."),
      fb("Elige la forma correcta.", "Unos compañeros ___ me ayudaron. (yo)", "míos", "Detrás del sustantivo va la forma larga, concordando con compañeros (masculino plural): míos."),
      mt(
        "Relaciona cada adjetivo con su pronombre.",
        [
          ["mis gafas", "las mías"],
          ["tu hermano", "el tuyo"],
          ["su idea", "la suya"],
          ["nuestros hijos", "los nuestros"],
        ],
        "El pronombre toma el género y número del objeto."
      ),
      mc(
        "«That's not your fault.»",
        ["No es culpa tuya.", "No es tuya culpa.", "No es culpa tu.", "No es la tu culpa."],
        0,
        "El posesivo tónico va detrás del sustantivo (culpa tuya) y el átono delante (tu culpa). «Tuya culpa» pone el tónico delante, «culpa tu» pone el átono detrás y «la tu culpa» añade un artículo que sobra."
      ),
      wo("Un vecino nuestro nos regaló estas plantas.", "Posesivo detrás del nombre: un vecino nuestro.", "A neighbor of ours gave us these plants."),
    ]
  ),
  L(
    "vosotros-commands-2",
    "b1r-mission-spain-house-rules",
    "Misión real: las normas del piso en Madrid",
    "Escribe las normas de un piso compartido en España con mandatos de vosotros — afirmativos y negativos.",
    "7 min",
    [
      sec(
        "Normas afirmativas",
        [
          "Recuerda la regla: vosotros afirmativo = infinitivo sin -r + d (limpiad, sacad, respetad). Con reflexivos, la -d se pierde delante de os: acostaos, duchaos (excepto idos).",
          "Tu misión: compartes piso en Madrid y tienes que escribir las normas de la casa para tus compañeros, y también entender las que te escriben ellos.",
        ],
        [
          ["Limpiad la cocina después de cocinar.", "Clean the kitchen after cooking."],
          ["Sacad la basura los martes.", "Take out the trash on Tuesdays."],
        ],
        [
          fb("Escribe la norma.", "___ la música a partir de las once. (bajar)", "Bajad", "Afirmativo de vosotros: infinitivo sin -r + d, bajad."),
        ]
      ),
      sec(
        "Normas negativas",
        [
          "Recuerda la regla: el negativo de vosotros no usa la -d sino el subjuntivo (no dejéis, no uséis, no traigáis), y los pronombres van delante: no os acostéis tarde. «No fumad» o «no dejad» son errores típicos.",
        ],
        [
          ["No dejéis platos sucios en el fregadero.", "Don't leave dirty dishes in the sink."],
          ["No uséis mi champú.", "Don't use my shampoo."],
        ],
        [
          fb("Escribe la norma.", "No ___ la puerta abierta. (dejar)", "dejéis", "Negativo de vosotros → subjuntivo: dejéis."),
        ]
      ),
    ],
    [
      fb("Escribe la norma.", "___ antes de medianoche los días de diario. (acostarse)", "Acostaos", "Reflexivo afirmativo: acostad + os pierde la -d → acostaos (sin el cambio o → ue)."),
      fb("Escribe la norma.", "No ___ fiestas sin avisar. (hacer)", "hagáis", "Negativo de vosotros = subjuntivo, que sale de hago: no hagáis."),
      fb("Escribe la norma.", "___ las facturas a tiempo. (pagar)", "Pagad", "Afirmativo: infinitivo sin -r + d, pagad."),
      mt(
        "Relaciona cada norma afirmativa con su versión negativa.",
        [
          ["Venid pronto.", "No vengáis pronto."],
          ["Poneos el abrigo.", "No os pongáis el abrigo."],
          ["Decídselo.", "No se lo digáis."],
          ["Idos ya.", "No os vayáis todavía."],
        ],
        "El negativo usa el subjuntivo y pone los pronombres delante."
      ),
      ms(
        "¿Qué normas están bien escritas?",
        ["Respetad el silencio.", "No fumad en el balcón.", "Lavaos las manos.", "No traigáis animales."],
        [0, 2, 3],
        "«No fumad en el balcón» es incorrecta: el negativo de vosotros usa el subjuntivo, no fuméis. «Respetad», «Lavaos» y «No traigáis» están bien formados."
      ),
      toEs("Kids, don't touch that and sit down! (vosotros)", "Niños, ¡no toquéis eso y sentaos!", "Negativo: no toquéis. Afirmativo reflexivo: sentaos.", ["¡Niños, no toquéis eso y sentaos!", "Niños, no toquéis eso y sentaos."]),
      wo("Por favor, cerrad la puerta con llave al salir.", "Mandato de vosotros afirmativo.", "Please lock the door when you leave."),
    ]
  ),
  L(
    "vosotros-commands-2",
    "b1r-transform-tu-vosotros",
    "Transformaciones: de tú a vosotros",
    "Pasa instrucciones de una persona a un grupo (en España): come → comed, no comas → no comáis.",
    "7 min",
    [
      sec(
        "Afirmativo: del infinitivo, sin excepciones",
        [
          "Para pasar un mandato de tú a vosotros no partas de la forma de tú: parte del infinitivo y cambia la -r por -d. Por eso los irregulares de tú desaparecen: haz → haced, ven → venid, sal → salid, pon → poned.",
          "También desaparecen los cambios de raíz, porque el acento ya no cae en la raíz: cierra → cerrad, vuelve → volved, pide → pedid.",
        ],
        [
          ["Escucha. → Escuchad.", "Listen. (escuchar → escuchad)"],
          ["Haz los deberes. → Haced los deberes.", "Do your homework. (haz es irregular; haced no)"],
          ["Cierra la ventana. → Cerrad la ventana.", "Close the window. (sin diptongo en vosotros)"],
        ],
        [
          fb("Pasa a vosotros.", "Pon la mesa. → ___ la mesa.", "Poned", "El mandato de vosotros es regular: poner → poned, aunque el de tú sea «pon»."),
          fb("Pasa a vosotros.", "Juega en el patio. → ___ en el patio.", "Jugad", "Jugar → «jugad»: infinitivo sin -r + -d. El diptongo de «juega» desaparece porque el acento pasa a la terminación."),
        ]
      ),
      sec(
        "Negativo y reflexivo",
        [
          "El negativo cambia solo la terminación del subjuntivo: no hables → no habléis, no pidas → no pidáis. El pronombre «te» pasa a «os».",
          "En el afirmativo reflexivo la -d cae delante de «os»: levanta + te → levántate, levantad + os → levantaos. En los verbos en -ir aparece tilde: vestíos, divertíos.",
        ],
        [
          ["No grites. → No gritéis.", "Don't shout. (subjuntivo de vosotros: -éis)"],
          ["Cállate. → Callaos.", "Be quiet. (callad + os: la -d cae)"],
          ["No te sientes ahí. → No os sentéis ahí.", "Don't sit there. (te → os, sin diptongo)"],
        ],
        [
          fb("Pasa a vosotros.", "Siéntate. → ___.", "Sentaos", "Sentad + os → sentaos: la -d cae delante de os."),
          fb("Pasa a vosotros.", "No te muevas. → No ___ mováis.", "os", "Con vosotros, el reflexivo «te» pasa a «os»: no os mováis."),
        ]
      ),
    ],
    [
      fb("Pasa a vosotros.", "Ven aquí. → ___ aquí.", "Venid", "Vosotros: venir → venid (regular, aunque ven sea irregular)."),
      fb("Pasa a vosotros.", "No corras. → No ___.", "corráis", "Negativo de vosotros = subjuntivo: no corráis."),
      fb("Pasa a vosotros.", "Vístete. → ___.", "Vestíos", "Vestid + os → vestíos (con tilde en la í). La e → i de «vístete» desaparece."),
      fb("Pasa a vosotros.", "No te preocupes. → No ___ preocupéis.", "os", "Con vosotros, el reflexivo te pasa a os: no os preocupéis."),
      mc(
        "«Vete.» → vosotros:",
        ["Idos.", "Íos.", "Ivos.", "Vayaos."],
        0,
        "Irse es la excepción: el mandato de vosotros conserva la -d: idos (en el habla también se oye «iros»). «Íos», «ivos» y «vayaos» no existen."
      ),
      ms(
        "¿Qué transformaciones son correctas?",
        ["Di la verdad. → Decid la verdad.", "Sé bueno. → Sed buenos.", "No mientas. → No mentís.", "Lávate. → Lavaos."],
        [0, 1, 3],
        "«No mientas → No mentís» es incorrecta: el negativo de vosotros usa subjuntivo, no mintáis. Las otras transformaciones a vosotros están bien."
      ),
      wo("Chicos, no os olvidéis de llamar a la abuela.", "Negativo reflexivo: no os olvidéis.", "Guys, don't forget to call Grandma."),
      toEs("Pide perdón a tu hermano.", "Pedid perdón a vuestro hermano.", "En vosotros la raíz recupera la e del infinitivo: pide → «pedid»; y «tu hermano» pasa a «vuestro hermano».", [], "Cambia la frase a vosotros."),
      toEs("Vuelved antes de las diez.", "Volved antes de las diez.", "Volver → «volved»: el diptongo ue solo aparece cuando el acento cae en la raíz (vuelve), y en vosotros cae en la terminación.", [], "Corrige la frase."),
      toEs("No os vestís todavía, que primero hay que ducharse.", "No os vistáis todavía, que primero hay que ducharse.", "Detrás de «no» va el subjuntivo, no el presente: «no os vistáis». En el subjuntivo de vosotros, vestir cambia e → i (como pedir → pidáis).", [], "Corrige la frase."),
      toEs("Abróchate el cinturón.", "Abrochaos el cinturón.", "El mandato es abrochad + os → «abrochaos». «Abrocharos» (infinitivo + os) es muy coloquial; en la lengua cuidada se evita.", [], "Cambia la frase a vosotros."),
      { type: "speak", prompt: "Pasa a vosotros y dilo en voz alta: «Ponte el abrigo y no salgas sin paraguas.»", text: "Poneos el abrigo y no salgáis sin paraguas.", explanation: "Ponte → «poneos» (poned + os, sin -d); no salgas → «no salgáis» (subjuntivo de vosotros)." },
    ]
  ),
  L(
    "vosotros-commands-2",
    "b1r-spiral-b1-first-half",
    "Repaso en espiral: el subjuntivo, los mandatos y el condicional",
    "Repasa en una sola sesión mezclada lo esencial de la primera mitad del B1: el subjuntivo de deseo, duda y emoción, los mandatos y el condicional.",
    "9 min",
    [
      sec(
        "Recuerda: tres preguntas para elegir la forma",
        [
          "Recuerda la regla. 1) ¿Hay un deseo, una duda, una emoción o una valoración + que + otro sujeto? Entonces el segundo verbo va en subjuntivo, porque no afirma un hecho: quiero que vengas, dudo que sea fácil, me alegro de que estés aquí. Si afirmas algo que crees cierto (creo que, es verdad que), va en indicativo.",
          "2) ¿Es una orden? Afirmativo de tú = forma de «él» (llama, escribe) con el pronombre pegado (llámanos); negativo = no + subjuntivo (no gastes). 3) ¿Es una situación imaginada, un consejo o una petición cortés? Condicional: yo que tú, aprendería; ¿podrías ayudarme?",
        ],
        [
          ["Ojalá que tengas suerte.", "I hope you're lucky. (deseo → subjuntivo)"],
          ["Creo que es una buena idea, pero no creo que sea barata.", "I think it's a good idea, but I don't think it's cheap. (creer: indicativo; no creer: subjuntivo)"],
          ["Escríbenos, pero no nos llames de madrugada.", "Write to us, but don't call us at dawn. (pronombre detrás en el sí, delante en el no)"],
          ["Yo en tu lugar, pediría una beca.", "In your place, I'd apply for a grant. (consejo → condicional)"],
        ],
        [
          mc(
            "«Mis padres quieren que yo ___ medicina.» (estudiar)",
            ["estudie", "estudio", "estudiar", "estudiaría"],
            0,
            "Querer + que + otro sujeto (mis padres → yo) pide subjuntivo: «estudie». «Estudiar» solo vale si el sujeto es el mismo (quiero estudiar); «estudio» afirma un hecho."
          ),
          toEs("Creo que el piso es caro.", "No creo que el piso sea caro.", "«Creer» afirma lo que piensas (indicativo: es); «no creer» expresa duda y pide subjuntivo: sea.", [], "Cambia al negativo."),
        ]
      ),
      sec(
        "La carta de un abuelo",
        "Lee la carta que un abuelo le escribe a su nieta antes de que se vaya a estudiar al extranjero.",
        [
          ["Querida Lucía: me alegro mucho de que vayas a estudiar a Berlín.", "Dear Lucía: I'm very glad you're going to study in Berlin."],
          ["Si necesitas algo, llámanos. Yo que tú, aprendería alemán cuanto antes.", "If you need anything, call us. If I were you, I'd learn German as soon as possible."],
          ["No gastes todo el dinero el primer mes y ojalá que hagas buenos amigos.", "Don't spend all the money in the first month, and I hope you make good friends."],
        ],
        [
          ms(
            "¿Qué formas de la carta están en subjuntivo?",
            ["vayas", "llámanos", "gastes", "hagas"],
            [0, 2, 3],
            "Vayas, gastes y hagas son subjuntivo (tras «no» o tras «que»). «Llámanos» es un mandato afirmativo de tú, con el pronombre pegado."
          ),
          fb("Responde al abuelo.", "Te prometo que te ___ todas las semanas. (escribir, futuro)", "escribiré", "Una promesa sobre el futuro va en futuro: «escribiré». «Prometer que» afirma lo que harás, así que no pide subjuntivo."),
        ]
      ),
    ],
    [
      fb("Completa.", "Es importante que ___ la lengua del país. (aprender, tú)", "aprendas", "«Es importante que» es una valoración: subjuntivo, «aprendas»."),
      fb("Completa.", "Si hace frío, ___ ropa de abrigo. (comprar, tú, mandato)", "compra", "Si + presente + mandato: el afirmativo de tú coincide con la forma de «él», «compra»."),
      fb("Completa.", "¿___ enviarme fotos de la ciudad? (poder, tú, condicional)", "Podrías", "Petición cortés: condicional, «podrías» + infinitivo."),
      mc(
        "«I doubt it's easy.»",
        ["Dudo que sea fácil.", "Dudo que es fácil.", "No dudo que sea fácil.", "Dudo que fue fácil mañana."],
        0,
        "«Dudar que» pide subjuntivo: dudo que sea fácil. «Dudo que es» usa indicativo, «No dudo que sea» dice lo contrario y «fue… mañana» mezcla tiempos."
      ),
      mt(
        "Relaciona cada frase con su estructura.",
        [
          ["Ojalá llueva.", "deseo + subjuntivo"],
          ["No lo toques.", "mandato negativo"],
          ["Me encantaría ir.", "condicional"],
          ["Si puedo, iré.", "si + presente + futuro"],
        ],
        "Cuatro estructuras clave de la primera mitad del B1."
      ),
      toEs("Abre la maleta.", "No abras la maleta.", "Negativo de tú: no + subjuntivo, abrir → «abras».", [], "Cambia al negativo."),
      toEs("Vas a encontrar piso pronto.", "Ojalá encuentres piso pronto.", "«Ojalá» convierte la afirmación en un deseo y siempre va con subjuntivo: encontrar → «encuentres» (o → ue).", ["Ojalá que encuentres piso pronto."], "Transforma la frase en un deseo con «ojalá»."),
      toEs("Debes llamar a tus padres más a menudo.", "Deberías llamar a tus padres más a menudo.", "El condicional «deberías» suaviza el consejo; «debes» suena a obligación.", ["Yo que tú, llamaría a tus padres más a menudo."], "Cambia al condicional para que suene más amable."),
      toEs("Me alegro de que estás contenta allí.", "Me alegro de que estés contenta allí.", "«Alegrarse de que» expresa emoción: subjuntivo, «estés». «Estás» afirmaría un hecho neutro.", ["Me alegro de que estés contento allí.", "Me alegra que estés contenta allí."], "Corrige la frase."),
      toEs("No te olvides de nosotros y nos llama el domingo.", "No te olvides de nosotros y llámanos el domingo.", "En el mandato afirmativo el pronombre va pegado al final: «llámanos», con tilde porque es esdrújula. «Nos llama» significaría «he calls us».", [], "Corrige la frase."),
      toEs("Yo que tú, aprenderé alemán antes de ir.", "Yo que tú, aprendería alemán antes de ir.", "«Yo que tú» presenta una situación imaginada: va con condicional, «aprendería», no con futuro.", [], "Corrige la frase."),
      wo("Espero que no te olvides de nosotros.", "Esperar que + subjuntivo reflexivo.", "I hope you don't forget about us."),
      { type: "speak", prompt: "Responde en voz alta al abuelo en español: «I'm glad you wrote to me. If I need money, I'll call you.»", text: "Me alegro de que me hayas escrito. Si necesito dinero, os llamaré.", explanation: "Emoción + que → subjuntivo (me hayas escrito); si + presente (necesito) + futuro (llamaré). También vale «te llamaré» si hablas solo al abuelo." },
    ]
  ),
  L(
    "vosotros-commands-2",
    "b1r-spiral-b1-second-half",
    "Repaso en espiral: los perfectos, los relativos y los pronombres",
    "Repasa en una sola sesión la segunda mitad del B1 (pretérito perfecto y pluscuamperfecto, relativos, se pasivo y pronombres combinados), con guiños a la primera mitad.",
    "9 min",
    [
      sec(
        "Recuerda: cuatro herramientas de la segunda mitad",
        [
          "Recuerda la regla. Perfecto (he enviado) para lo que ha pasado en un periodo que llega hasta hoy (ya, todavía no, este año); pluscuamperfecto (había cambiado) para lo que ocurrió antes de otro momento pasado. Relativos: «que» sin preposición; con preposición, artículo + que o quien (con la que, al que, con quien). Se pasivo: el verbo concuerda con la cosa (se busca un voluntario, se buscan voluntarios).",
          "Pronombres combinados: primero la persona, luego la cosa (me lo, te la), y le/les se convierten en «se» delante de lo/la/los/las, porque «le lo» sonaba mal y la lengua lo cambió. En el afirmativo se pegan al verbo: decídmelo.",
        ],
        [
          ["Cuando llegué, la reunión ya había empezado.", "When I arrived, the meeting had already started. (antes de otro pasado)"],
          ["La compañera con la que comparto despacho es de Vigo.", "The colleague I share an office with is from Vigo. (preposición + la que)"],
          ["Se necesitan dos voluntarios.", "Two volunteers are needed. (se pasivo: plural)"],
          ["¿El informe? Se lo mando a los clientes hoy.", "The report? I'm sending it to the clients today. (les + lo → se lo)"],
        ],
        [
          fb("Completa.", "Cuando el jefe me llamó, yo ya ___ el informe. (terminar, pluscuamperfecto)", "había terminado", "Terminar el informe ocurrió antes de la llamada (otro pasado): pluscuamperfecto, había + participio."),
          toEs("Les mando la factura a los clientes.", "Se la mando.", "Les + la → «se la»: la persona va primero y «les» se convierte en «se».", [], "Sustituye los complementos por pronombres."),
        ]
      ),
      sec(
        "Un correo de trabajo",
        "Lee el correo que Marta le manda a su equipo.",
        [
          ["Hola a todos: ya he enviado el informe que me pedisteis.", "Hi all: I've already sent the report you asked me for."],
          ["Cuando llegué a la oficina, alguien ya había cambiado la presentación.", "When I got to the office, someone had already changed the presentation."],
          ["¿Quién fue? Si fuisteis vosotros, decídmelo, por favor.", "Who was it? If it was you, tell me, please."],
          ["Por cierto, se busca voluntario para la reunión del viernes.", "By the way, a volunteer is needed for Friday's meeting."],
        ],
        [
          mt(
            "Relaciona cada forma del correo con su estructura.",
            [
              ["he enviado", "pretérito perfecto"],
              ["había cambiado", "pluscuamperfecto"],
              ["decídmelo", "mandato de vosotros + dos pronombres"],
              ["se busca", "se pasivo"],
            ],
            "Cuatro estructuras de la segunda mitad del B1."
          ),
        ]
      ),
    ],
    [
      fb("Responde a Marta.", "Fui yo; la cambié porque ___ un error en los datos. (haber, pluscuamperfecto)", "había habido", "Haber en pluscuamperfecto: había habido (el error existía antes de que la cambiaras)."),
      fb("Completa con un relativo.", "El informe ___ enviaste está perfecto.", "que", "Sin preposición, el relativo es «que»: el informe que enviaste."),
      fb("Completa con el pronombre que falta.", "¿La presentación nueva? ___ la mando ahora mismo a todos. (a ellos)", "Se", "Les + la → se la."),
      fb("Completa con un posesivo.", "Mi parte está lista. ¿Y la ___? (vosotros)", "vuestra", "La parte → la vuestra: el posesivo concuerda con la cosa (la parte), no con el poseedor."),
      ms(
        "¿Qué frases son correctas?",
        ["Todavía no lo he leído.", "Se venden dos oficinas.", "El compañero con quien trabajo es muy amable.", "Nunca había vido algo así."],
        [0, 1, 2],
        "«Nunca había vido algo así» es incorrecta: el participio de ver es visto. Las otras usan bien el perfecto, el se pasivo y con quien."
      ),
      toEs("Se busca un traductor para el congreso.", "Se buscan dos traductores para el congreso.", "En la pasiva con se el verbo concuerda con la cosa o persona buscada: dos traductores → «se buscan».", [], "Cambia a «dos traductores»."),
      toEs("La directora es muy simpática. Ya he hablado con ella.", "La directora con la que ya he hablado es muy simpática.", "«Hablar con» lleva preposición, así que el relativo también: «con la que» (o «con quien», para personas). El artículo concuerda con «la directora».", ["La directora con quien ya he hablado es muy simpática.", "La directora con la que he hablado ya es muy simpática."], "Transforma las dos frases en una con un relativo."),
      toEs("Cuando llegué, el tren ya ha salido.", "Cuando llegué, el tren ya había salido.", "La salida del tren es anterior a mi llegada (pasado): pluscuamperfecto, «había salido». El perfecto no puede depender de un pasado.", [], "Corrige la frase."),
      toEs("La empresa para que trabajo tiene la sede en Bilbao.", "La empresa para la que trabajo tiene la sede en Bilbao.", "«Trabajar para» lleva preposición, y detrás hace falta el artículo: «para la que». «Para que» es otra cosa: una conjunción de finalidad (para que vengas).", ["La empresa para la cual trabajo tiene la sede en Bilbao."], "Corrige la frase."),
      toEs("¿Los documentos? Le los di a la secretaria.", "¿Los documentos? Se los di a la secretaria.", "«Le los» no existe: delante de lo/la/los/las, «le» se convierte en «se».", [], "Corrige la frase."),
      toEs("Nobody had told me, so I didn't know.", "Nadie me lo había dicho, así que no lo sabía.", "Pluscuamperfecto (antes de que lo supiera) + dos pronombres + imperfecto para el estado.", ["Nadie me lo había dicho, por eso no lo sabía.", "Nadie me lo había dicho y no lo sabía."]),
      wo("Lo que más me ha gustado del proyecto es el equipo.", "Lo que + pretérito perfecto.", "What I've liked most about the project is the team."),
      { type: "speak", prompt: "Contesta a Marta en voz alta: «I've read the report. The figures? Send them to me today.» (vosotros)", text: "He leído el informe. ¿Las cifras? Mandádmelas hoy.", explanation: "Perfecto para lo recién hecho (he leído); mandato de vosotros + me + las pegados: «mandádmelas», con tilde." },
    ]
  ),
  L(
    "subjunctive-formation-drill-3",
    "b1r-transform-stem-changes-nosotros",
    "Transformaciones: los cambios de raíz en nosotros",
    "Aprende que en nosotros/vosotros los verbos -ar/-er con cambio de raíz no diptongan (pensemos, volvamos) y los -ir cambian solo e→i u o→u (sintamos, durmamos, pidamos).",
    "7 min",
    [
      sec(
        "La idea: el diptongo sigue al acento",
        [
          "Los verbos -AR y -ER con cambio de raíz no cambian en nosotros y vosotros: piense → pensemos; vuelva → volvamos.",
          "¿Por qué? El diptongo (ie, ue) solo aparece en la sílaba que lleva el acento: PIEN-se, VUEL-vas. En nosotros y vosotros el acento se va a la terminación (pen-SE-mos, vol-VÁIS), y la raíz queda como en el infinitivo.",
        ],
        [
          ["que yo piense / que nosotros pensemos", "that I think / that we think"],
          ["que tú vuelvas / que vosotros volváis", "that you return / that you all return"],
        ],
        [
          fb("Pasa a nosotros.", "que yo cierre → que nosotros ___", "cerremos", "Cerrar (-ar) cambia e→ie, pero no en nosotros: cerremos."),
        ]
      ),
      sec(
        "-IR: un cambio pequeño en nosotros",
        "Los verbos -IR con cambio sí cambian en nosotros y vosotros, pero solo e→i u o→u: sienta → sintamos; duerma → durmamos; pida → pidamos. Es la misma vocal que ves en el gerundio: sintiendo, durmiendo, pidiendo.",
        [
          ["que yo sienta / que nosotros sintamos", "that I feel / that we feel"],
          ["que yo muera / que nosotros muramos", "that I die / that we die"],
        ],
        [
          fb("Pasa a nosotros.", "que yo prefiera → que nosotros ___", "prefiramos", "Preferir (-ir, e→ie) cambia e→i en nosotros: prefiramos."),
        ]
      ),
    ],
    [
      fb("Pasa a nosotros.", "que yo encuentre → que nosotros ___", "encontremos", "-AR o→ue: sin cambio en nosotros."),
      fb("Pasa a nosotros.", "que yo sirva → que nosotros ___", "sirvamos", "Servir (-ir, e→i) mantiene la i en todas las personas: sirvamos."),
      fb("Pasa a vosotros.", "que yo mienta → que vosotros ___", "mintáis", "Mentir (-ir, e→ie) cambia e→i en vosotros: mintáis."),
      fb("Pasa a nosotros.", "que yo pueda → que nosotros ___", "podamos", "Poder (-er) no cambia la raíz en nosotros: podamos."),
      mt(
        "Relaciona cada infinitivo con su forma de nosotros.",
        [
          ["divertirse", "nos divirtamos"],
          ["acostarse", "nos acostemos"],
          ["vestirse", "nos vistamos"],
          ["entender", "entendamos"],
        ],
        "Solo los verbos -IR cambian en nosotros: divertirse y vestirse toman i (como en divirtiendo, vistiendo); acostarse (-ar) y entender (-er) se quedan como el infinitivo."
      ),
      mc(
        "Aplica la regla a un verbo nuevo: «Es mejor que no ___ entre nosotros.» (competir, nosotros)",
        ["compitamos", "competamos", "compiamos", "compitemos"],
        0,
        "Competir es -ir con e → i, y los verbos -ir mantienen la i en nosotros: compitamos (como compitiendo). «Competamos» olvida el cambio; «compitemos» usa la terminación de -ar."
      ),
      toEs("«Ojalá que nos divertamos mucho en la boda.»", "Ojalá que nos divirtamos mucho en la boda.", "Divertirse es -ir: en nosotros cambia e → i (nos divirtamos), aunque no tenga el diptongo ie.", [], "Corrige la frase."),
      toEs("«No es necesario que cuentemos el dinero otra vez.»", "No es necesario que contemos el dinero otra vez.", "Contar es -ar: en nosotros el acento va a la terminación y no hay diptongo: contemos.", [], "Corrige la frase."),
      mc(
        "«Es mejor que ___ temprano esta noche.» (dormir, nosotros)",
        ["durmamos", "duermamos", "dormamos", "dormimos"],
        0,
        "Los verbos -ir con o→ue cambian o→u en nosotros del subjuntivo: durmamos. «Duermamos» usa el diptongo de otras personas, «dormamos» no hace el cambio y «dormimos» es indicativo."
      ),
      wo("Espero que nos sintamos mejor mañana.", "Sentirse (-IR, e → ie) cambia e → i en nosotros: nos sintamos.", "I hope we feel better tomorrow."),
    ]
  ),
  L(
    "subjunctive-formation-drill-3",
    "b1r-contrast-spelling-verbs",
    "Contraste: conozca, escoja, siga, construya",
    "Aprende los cambios de ortografía del subjuntivo en verbos en -cer/-cir (conozca), -ger/-gir (escoja), -guir (siga) y -uir (construya).",
    "7 min",
    [
      sec(
        "La idea: el subjuntivo copia el sonido de la forma yo",
        [
          "El subjuntivo sale de la forma yo, y la ortografía cambia solo para que el sonido sea el mismo que en yo. Escojo suena «jo», así que el subjuntivo es escoja (con j, no «escoga», que sonaría «ga»). Sigo suena «go», así que siga (sin u). Construyo tiene y, así que construya.",
          "Cuatro familias: vocal + -cer/-cir → -zca (conozca, traduzca; pero hacer → haga, decir → diga, vencer → venza). -ger/-gir → -ja (escoja, dirija). -guir → -ga (siga, consiga). -uir → -ya (construya, huya).",
        ],
        [
          ["conocer → que conozca", "that (I/he) know"],
          ["elegir → que elija", "that (I/he) choose"],
          ["seguir → que siga", "that (I/he) follow"],
          ["incluir → que incluya", "that (I/he) include"],
        ],
        [
          fb("Forma el subjuntivo (yo).", "proteger → que yo ___", "proteja", "-ger → -ja delante de a, para conservar el sonido: proteja."),
        ]
      ),
    ],
    [
      fb("Forma el subjuntivo (ellos).", "traducir → que ellos ___", "traduzcan", "Los verbos en -ducir toman -zc- en subjuntivo (traduzco): traduzcan."),
      fb("Forma el subjuntivo (tú).", "conseguir → que tú ___", "consigas", "Conseguir: gu → g delante de a, y e→i: consigas."),
      fb("Forma el subjuntivo (usted).", "construir → que usted ___", "construya", "Los verbos en -uir añaden y: construyo → construya."),
      fb("Forma el subjuntivo (nosotros).", "recoger → que nosotros ___", "recojamos", "-ger → -j- delante de a: recojamos."),
      mt(
        "Relaciona cada infinitivo con su subjuntivo (yo).",
        [
          ["parecer", "parezca"],
          ["dirigir", "dirija"],
          ["distinguir", "distinga"],
          ["destruir", "destruya"],
        ],
        "Cada subjuntivo copia la forma yo: parezco → parezca, dirijo → dirija, distingo → distinga, destruyo → destruya."
      ),
      mc(
        "Aplica la regla a un verbo nuevo. ¿Cuál es el subjuntivo de «exigir» (yo)?",
        ["exija", "exiga", "exijo", "exiza"],
        0,
        "La forma yo es exijo (con j para sonar «jo»), así que el subjuntivo es exija. «Exiga» sonaría «ga»; «exijo» es indicativo."
      ),
      toEs("Conozco bien la ciudad.", "Es importante que conozca bien la ciudad.", "Es importante que + subjuntivo; conocer copia la forma yo conozco: conozca.", ["Es importante que yo conozca bien la ciudad."], "Transforma la frase empezando con «Es importante que...»."),
      toEs("Espero que tú sigas estudiando.", "Espero que vosotros sigáis estudiando.", "Seguir: e → i y gu → g delante de a en todas las personas, también en vosotros: sigáis.", ["Espero que ustedes sigan estudiando."], "Cambia a vosotros."),
      toEs("«Es necesario que escogas un número.»", "Es necesario que escojas un número.", "La forma yo es escojo, con j; para conservar ese sonido el subjuntivo es escojas, no «escogas».", ["Es necesario que elijas un número."], "Corrige la frase."),
      toEs("«Ojalá que los turistas no destruigan la playa.»", "Ojalá que los turistas no destruyan la playa.", "Los verbos en -uir añaden y (destruyo), así que el subjuntivo es destruyan.", [], "Corrige la frase."),
      ms(
        "¿Qué formas son correctas?",
        ["ofrezca", "escoga", "siga", "huiga"],
        [0, 2],
        "Ofrecer → ofrezca (desde ofrezco) y seguir → siga (desde sigo) son correctas. «Escoga» debe ser escoja (g → j) y «huiga» debe ser huya."
      ),
      wo("Espero que el gobierno construya más escuelas.", "Construir → construya.", "I hope the government builds more schools."),
    ]
  ),
  L(
    "subjunctive-formation-drill-3",
    "b1r-mission-childs-wish-list",
    "Misión real: la carta a los Reyes Magos",
    "Ayuda a un niño a escribir su carta: quiero que me traigáis…, espero que…, ojalá…",
    "7 min",
    [
      sec(
        "Recuerda la regla y conoce la tradición",
        [
          "En España y otros países, los niños escriben una carta a los Reyes Magos, que traen los regalos la noche del 5 de enero. Las cartas están llenas de subjuntivo.",
          "Recuerda: cuando quieres que OTRA persona haga algo (quiero que, os pido que, espero que), el segundo verbo va en subjuntivo, porque es un deseo, no un hecho. A los tres Reyes se les habla de vosotros: traigáis, deis. En América se usaría ustedes: traigan, den.",
        ],
        [
          ["Queridos Reyes Magos: este año he sido muy bueno.", "Dear Three Kings: this year I've been very good."],
          ["Quiero que me traigáis una bici roja.", "I want you to bring me a red bike."],
          ["Espero que mi hermana no reciba carbón.", "I hope my sister doesn't get coal."],
        ],
        [
          fb("Completa la carta.", "También quiero que mis padres ___ más tiempo libre. (tener)", "tengan", "Querer que + subjuntivo: tengan."),
        ]
      ),
      sec(
        "Las peticiones más difíciles",
        "Los deseos que no dependen de los Reyes se expresan con ojalá.",
        [
          ["Ojalá que nieve en Navidad.", "I hope it snows at Christmas."],
        ],
        [
          fb("Completa la carta.", "Ojalá que mi abuelo ___ pronto del hospital. (salir)", "salga", "Ojalá + subjuntivo: salga."),
        ]
      ),
    ],
    [
      fb("Completa la carta.", "Os pido que ___ un regalo a los niños que no tienen nada. (dar, vosotros)", "deis", "Pedir que + subjuntivo; dar → deis."),
      fb("Completa la carta.", "Espero que ___ fácil encontrar mi casa. (ser)", "sea", "Esperar que + subjuntivo."),
      fb("Completa la carta.", "Prefiero que no me ___ ropa. (traer, vosotros)", "traigáis", "Traer → traigáis."),
      mc(
        "¿Cuál es la frase correcta para la carta?",
        ["Quiero que mi perro se ponga bueno.", "Quiero que mi perro se pone bueno.", "Quiero mi perro se ponga bueno.", "Quiero que mi perro ponerse bueno."],
        0,
        "«Querer que» + otro sujeto pide subjuntivo: se ponga. «Se pone» es indicativo, la tercera omite el «que» y «ponerse» es infinitivo."
      ),
      ms(
        "¿Qué deseos están bien escritos?",
        ["Ojalá que haya mucha nieve.", "Quiero que venís pronto.", "Espero que os guste mi dibujo.", "Deseo que todos estén felices."],
        [0, 2, 3],
        "«Quiero que venís» es incorrecta: querer que pide subjuntivo, vengáis. Ojalá, esperar y desear que también llevan subjuntivo, como en las otras frases."
      ),
      toEs("I want you (vosotros) to bring me a book.", "Quiero que me traigáis un libro.", "Querer que + subjuntivo de vosotros.", ["Quiero que me traigáis un libro, por favor.", "Quiero que me traigan un libro."]),
      wo("Espero que este año me traigáis muchos juegos.", "Esperar que + subjuntivo.", "I hope you bring me lots of games this year."),
      toEs("Traedme un patinete.", "Quiero que me traigáis un patinete.", "Una petición más educada: quiero que + subjuntivo. Traer toma la raíz de traigo: traigáis.", ["Os pido que me traigáis un patinete.", "Quiero que me traigan un patinete."], "Transforma el mandato en un deseo con «Quiero que...»."),
      toEs("Quiero un perro.", "Quiero que mis padres me dejen tener un perro.", "Con otro sujeto (mis padres) ya no basta el sustantivo: querer que + subjuntivo (dejen).", [], "Reescribe el deseo para que lo cumplan «mis padres», con «Quiero que mis padres me dejen tener...»."),
      toEs("«Queridos Reyes: quiero que me traéis un tren y que mi hermano no recibe carbón.»", "Queridos Reyes: quiero que me traigáis un tren y que mi hermano no reciba carbón.", "Querer que pide subjuntivo en las dos partes: traigáis (de traigo) y reciba.", [], "Corrige la carta de Pablo."),
      mc(
        "Lucía quiere que nieve, pero los Reyes no pueden hacer nevar. ¿Qué escribe?",
        ["Ojalá que nieve en Navidad.", "Quiero que nevéis en Navidad.", "Ojalá que nieva en Navidad.", "Os pido que nieve en Navidad."],
        0,
        "Para un deseo que no depende de nadie se usa ojalá + subjuntivo (nieve). «Nieva» es indicativo; pedírselo a los Reyes no tiene sentido porque ellos no controlan el tiempo."
      ),
    ]
  ),
  L(
    "subjunctive-wishes-doubt-emotion-drill-3",
    "b1r-dialogue-family-debate",
    "Laboratorio de diálogo: el debate familiar",
    "La familia discute las vacaciones: cada uno opina, duda, desea y se queja.",
    "8 min",
    [
      sec(
        "Recuerda la regla: ¿playa o montaña?",
        [
          "Recuerda: en una discusión, quien afirma usa indicativo (creo que, estoy seguro de que + es, hay); quien desea, duda o se queja de lo que hacen otros usa subjuntivo (quiero que, no creo que, me molesta que, ojalá + vayamos, haya).",
          "Escucha a la familia y luego participa tú en el debate.",
        ],
        [
          ["Papá: Creo que la playa es mejor para los niños.", "I think the beach is better for the kids."],
          ["Mamá: No creo que haya sitio en ningún hotel.", "I don't think there's room in any hotel."],
          ["Hija: Quiero que vayamos a la montaña. Me molesta que siempre elijáis vosotros.", "I want us to go to the mountains. It bothers me that you always choose."],
          ["Hijo: A mí me da igual, pero ojalá que tenga wifi.", "I don't care, but I hope it has wifi."],
        ],
        [
          mt(
            "Relaciona cada persona con lo que opina o desea.",
            [
              ["Papá", "ir a la playa"],
              ["Mamá", "duda que haya hotel"],
              ["La hija", "ir a la montaña"],
              ["El hijo", "tener wifi"],
            ],
            "Papá afirma (creo que + indicativo); mamá duda (no creo que haya); la hija desea (quiero que vayamos); el hijo desea algo que no depende de nadie (ojalá que tenga)."
          ),
        ]
      ),
      sec(
        "Mismo sujeto: infinitivo",
        "Si el sujeto no cambia, se usa el infinitivo: Quiero ir (yo quiero, yo voy). Si cambia, que + subjuntivo: Quiero que vayas.",
        [
          ["Prefiero quedarme en casa.", "I prefer to stay home."],
          ["Prefiero que te quedes en casa.", "I prefer that you stay home."],
        ],
        [
          fb("Completa.", "La hija quiere ___ a la montaña. (ir, ella misma)", "ir", "Mismo sujeto → infinitivo."),
        ]
      ),
    ],
    [
      fb("Completa.", "Mamá teme que el viaje ___ muy caro. (ser)", "sea", "Temer que + subjuntivo."),
      { ...fb("Completa.", "Papá está seguro de que los niños lo ___ bien. (pasar)", "pasarán", "Certeza → indicativo (futuro)."), altAnswers: ["pasan", "van a pasar"] },
      fb("Completa.", "Al hijo le da igual que ___ a la playa o a la montaña. (ir, ellos)", "vayan", "Dar igual que + subjuntivo."),
      mc(
        "«La hija se alegra de ___ elegir esta vez.» (ella misma)",
        ["poder", "que pueda", "que puede", "puede"],
        0,
        "Ella se alegra y ella puede: mismo sujeto → infinitivo, se alegra de poder. «Que pueda» se usaría con otro sujeto, «que puede» usa indicativo y «puede» no puede seguir a «de»."
      ),
      ms(
        "¿Qué frases son correctas?",
        ["Prefiero que decidamos juntos.", "Espero ir a la playa.", "Quiero que tú vienes.", "No creo que tengamos tiempo."],
        [0, 1, 3],
        "«Quiero que tú vienes» es incorrecta: querer que pide subjuntivo, vengas. Las otras usan bien el subjuntivo con preferir y no creer, y el infinitivo con el mismo sujeto."
      ),
      toEs("I'm sorry that you (vosotros) always argue.", "Siento que siempre discutáis.", "«Siento que» → subjuntivo, forma de vosotros: discutáis.", ["Siento que discutáis siempre.", "Me da pena que siempre discutáis."]),
      wo("Al final decidieron que irían a la costa norte.", "Decidir que + condicional (futuro en el pasado).", "In the end they decided they would go to the north coast."),
      mc(
        "Papá dice: «Creo que la playa es mejor.» Tú no estás de acuerdo. ¿Qué respondes?",
        ["Pues yo no creo que sea mejor.", "Pues yo no creo que es mejor.", "Pues yo creo que sea peor.", "Pues yo no creer que sea mejor."],
        0,
        "Para llevar la contraria se niega creer, y no creer que pide subjuntivo: sea. «No creo que es» usa indicativo; «creo que sea» pone subjuntivo detrás de una afirmación."
      ),
      toEs("Creo que el hotel tiene piscina.", "No creo que el hotel tenga piscina.", "Al negar creer, el verbo pasa a subjuntivo: tiene → tenga (de tengo).", [], "Cambia la opinión a negativa, como diría mamá."),
      toEs("Siempre elegís vosotros.", "Me molesta que siempre elijáis vosotros.", "Una queja sobre lo que hacen otros pide subjuntivo: elegís → elijáis (e → i, g → j).", [], "Transforma la frase en una queja con «Me molesta que...»."),
      toEs("«Quiero que vamos a la montaña y que no hay mucha gente.»", "Quiero que vayamos a la montaña y que no haya mucha gente.", "Querer que pide subjuntivo en las dos partes: vayamos (ir) y haya (haber).", [], "Corrige el mensaje de la hija."),
      toEs("«Estoy seguro de que los niños lo pasen bien.»", "Estoy seguro de que los niños lo pasarán bien.", "Estar seguro de que expresa certeza: indicativo (pasarán o pasan), no subjuntivo.", ["Estoy seguro de que los niños lo pasan bien.", "Estoy seguro de que los niños lo van a pasar bien."], "Corrige la frase de papá."),
    ]
  ),
  L(
    "subjunctive-wishes-doubt-emotion-drill-3",
    "b1r-transform-infinitive-subjunctive",
    "Transformaciones: ¿infinitivo o que + subjuntivo?",
    "Cambia el sujeto de la segunda parte de la frase y observa cómo cambia la estructura.",
    "7 min",
    [
      sec(
        "La idea: el subjuntivo aparece cuando entra otra persona",
        [
          "Quiero viajar (yo… yo). Quiero que viajes (yo… tú). Lo mismo con esperar, preferir, necesitar, alegrarse de, tener miedo de…",
          "¿Por qué? El infinitivo no tiene persona: solo sirve si se entiende que actúa el mismo sujeto. Cuando actúa otra persona, hace falta un verbo conjugado que diga quién, y que + subjuntivo es esa forma. Las preposiciones se quedan: tener miedo de llegar → tener miedo de que lleguen.",
        ],
        [
          ["Me alegro de estar aquí. → Me alegro de que estés aquí.", "I'm glad to be here. → I'm glad you're here."],
          ["Necesito descansar. → Necesito que descanses.", "I need to rest. → I need you to rest."],
        ],
        [
          fb("Cambia el sujeto (tú).", "Espero aprobar. → Espero que ___.", "apruebes", "Con otro sujeto, espero que + subjuntivo; aprobar cambia o→ue: apruebes."),
        ]
      ),
    ],
    [
      fb("Cambia el sujeto (ellos).", "Prefiero cenar en casa. → Prefiero que ___ en casa.", "cenen", "Con otro sujeto, prefiero que + subjuntivo: cenen."),
      fb("Cambia el sujeto (nosotros).", "Tengo miedo de llegar tarde. → Tengo miedo de que ___ tarde.", "lleguemos", "Con otro sujeto, tener miedo de que + subjuntivo; llegar → lleguemos (g → gu)."),
      fb("Vuelve al mismo sujeto (yo).", "Quiero que salgas. → Quiero ___.", "salir", "Si el sujeto es el mismo (yo quiero, yo salgo), se usa el infinitivo: quiero salir."),
      fb("Cambia el sujeto (usted).", "Siento tener que irme. → Siento que usted ___ que irse. (tener)", "tenga", "«Sentir que» + otro sujeto → subjuntivo: tenga."),
      mc(
        "«She's afraid of being alone.»",
        ["Tiene miedo de estar sola.", "Tiene miedo de que esté sola.", "Tiene miedo que está sola.", "Tiene miedo estar sola."],
        0,
        "Ella tiene miedo y ella estaría sola: mismo sujeto → de + infinitivo: tiene miedo de estar sola. «De que esté» sería otro sujeto, «que está» usa indicativo y «miedo estar» omite el «de»."
      ),
      mc(
        "«She's afraid that her son is alone.»",
        ["Tiene miedo de que su hijo esté solo.", "Tiene miedo de su hijo estar solo.", "Tiene miedo de que su hijo está solo.", "Tiene miedo que su hijo estar solo."],
        0,
        "Con otro sujeto (su hijo) se usa de que + subjuntivo: tiene miedo de que su hijo esté solo. «De su hijo estar» no es posible, «está» debe ir en subjuntivo (esté) y la última omite el «de»."
      ),
      wo("Me encanta que mis amigos vengan a cenar.", "Sujeto diferente → que + subjuntivo.", "I love it when my friends come to dinner."),
      toEs("«Me alegro de que yo esté de vacaciones.»", "Me alegro de estar de vacaciones.", "Yo me alegro y yo estoy: con el mismo sujeto se usa de + infinitivo, sin que.", [], "Corrige la frase."),
      toEs("«Tengo miedo que mi perro se pierde.»", "Tengo miedo de que mi perro se pierda.", "Con otro sujeto: tener miedo de que + subjuntivo. La preposición de se mantiene y perderse pasa a se pierda.", ["Tengo miedo de que se pierda mi perro."], "Corrige la frase."),
      fb("Aplica la regla a un verbo nuevo (vosotros).", "Odio madrugar. → Odio que ___. (madrugar)", "madruguéis", "Otro sujeto → que + subjuntivo; madrugar es -gar: g → gu delante de e, madruguéis."),
    ]
  ),
  L(
    "subjunctive-wishes-doubt-emotion-drill-3",
    "b1r-mission-restaurant-review",
    "Misión real: reseñas con emoción",
    "Escribe reseñas de un restaurante — lo que te encantó, lo que te molestó y lo que esperas que mejoren.",
    "7 min",
    [
      sec(
        "Una reseña de cinco estrellas",
        "Las reseñas combinan hechos (indicativo) con reacciones (subjuntivo).",
        [
          ["El restaurante está en el centro y es muy bonito.", "The restaurant is downtown and it's very pretty."],
          ["Me encanta que el chef salga a saludar a los clientes.", "I love that the chef comes out to greet the customers."],
          ["Me alegra que sigan usando productos locales.", "I'm glad they keep using local products."],
        ],
        [
          fb("Completa la reseña.", "Me sorprende que los precios ___ tan razonables. (ser)", "sean", "Sorprender que + subjuntivo."),
        ]
      ),
      sec(
        "Una reseña de una estrella",
        "Las quejas también piden subjuntivo: Me molesta que…, No me parece normal que…, Espero que…",
        [
          ["Me molesta que no acepten tarjetas.", "It bothers me that they don't take cards."],
          ["Espero que contraten a más camareros.", "I hope they hire more waiters."],
        ],
        [
          fb("Completa la queja.", "No me parece normal que la comida ___ fría. (llegar)", "llegue", "No parecer normal que + subjuntivo."),
        ]
      ),
    ],
    [
      fb("Completa la reseña.", "Es una pena que no ___ opciones vegetarianas. (haber)", "haya", "Es una pena que + subjuntivo."),
      fb("Completa la reseña.", "Recomiendo que ___ con antelación. (reservar, ustedes)", "reserven", "Recomendar que + subjuntivo."),
      fb("Completa la reseña.", "Estoy seguro de que ___ a volver. (ir, yo)", "voy", "Certeza → indicativo."),
      mt(
        "Relaciona cada reacción con su estrella.",
        [
          ["Me encanta que el pan sea casero.", "5 estrellas"],
          ["Me molesta que la música esté tan alta.", "2 estrellas"],
          ["Es inaceptable que tarden una hora en servir.", "1 estrella"],
          ["Me gusta que tengan terraza, aunque es caro.", "3 estrellas"],
        ],
        "Todas las reacciones llevan subjuntivo."
      ),
      ms(
        "¿Qué frases de reseña son correctas?",
        ["Me gusta que el personal sea amable.", "Es obvio que el chef tiene talento.", "Me molesta que no hay aparcamiento.", "Ojalá que abran otro local."],
        [0, 1, 3],
        "«Me molesta que no hay aparcamiento» es incorrecta: molestar que pide subjuntivo, no haya. Las otras usan bien gustar que, es obvio que y ojalá."
      ),
      toEs("I'm surprised that there are so few people.", "Me sorprende que haya tan poca gente.", "Sorprender que + subjuntivo; gente es singular.", ["Me sorprende que haya tan pocas personas."]),
      wo("Espero que el próximo año mantengan la calidad.", "Esperar que + subjuntivo (mantener → mantengan).", "I hope next year they keep up the quality."),
    ]
  ),
  L(
    "subjunctive-impersonal-ojala-drill-3",
    "b1r-mission-letter-city-council",
    "Misión real: carta al ayuntamiento",
    "Escribe una carta formal a tu ayuntamiento con propuestas para el barrio — es necesario que, es urgente que, es fundamental que…",
    "8 min",
    [
      sec(
        "Recuerda la regla: hechos y peticiones",
        [
          "Recuerda: una carta formal combina hechos y peticiones, y cada uno tiene su modo. Los hechos se presentan como verdad: es evidente que, es cierto que, está claro que + indicativo. Las peticiones dicen lo que debería pasar, que todavía no es real: es necesario que, es urgente que, es fundamental que + subjuntivo.",
          "Al ayuntamiento se le habla de ustedes (o con la forma impersonal se: que se limpie el parque).",
        ],
        [
          ["Es evidente que el parque está abandonado.", "It's evident that the park is neglected."],
          ["Es urgente que el ayuntamiento lo limpie.", "It's urgent that the city council clean it."],
          ["Es fundamental que haya más iluminación.", "It's essential that there be more lighting."],
        ],
        [
          fb("Completa la carta.", "Es necesario que ___ más papeleras en la plaza. (poner, ustedes)", "pongan", "Es necesario que + subjuntivo."),
        ]
      ),
      sec(
        "El cierre",
        "Las cartas formales terminan con deseos corteses.",
        [
          ["Espero que tengan en cuenta nuestra propuesta.", "I hope you take our proposal into account."],
          ["Atentamente, los vecinos del barrio.", "Sincerely, the neighborhood residents."],
        ],
        [
          mc(
            "¿Qué cierre es el más adecuado para una carta formal?",
            ["Atentamente,", "Besos,", "¡Chao!", "Un abrazote,"],
            0,
            "«Atentamente» es la despedida formal estándar. «Besos», «¡Chao!» y «Un abrazote» son para amigos y familia."
          ),
        ]
      ),
    ],
    [
      fb("Completa la carta.", "Es importante que los niños ___ jugar con seguridad. (poder)", "puedan", "Es importante que + subjuntivo."),
      fb("Completa la carta.", "Es cierto que el tráfico ___ mucho en los últimos años. (aumentar, pretérito perfecto)", "ha aumentado", "Certeza → indicativo."),
      fb("Completa la carta.", "Es conveniente que el autobús ___ por nuestra calle. (pasar)", "pase", "Es conveniente que + subjuntivo: pase."),
      mt(
        "Relaciona cada problema con una propuesta.",
        [
          ["Hay mucha basura.", "Es necesario que se limpie más a menudo."],
          ["Los coches van muy rápido.", "Es urgente que pongan badenes."],
          ["No hay sitio para los niños.", "Es fundamental que se construya un parque."],
          ["Las calles están oscuras.", "Es importante que haya más farolas."],
        ],
        "Cada propuesta usa una expresión de necesidad + subjuntivo (se limpie, pongan, se construya, haya): piden algo que todavía no existe."
      ),
      fb("Aplica la regla a una petición nueva.", "Es imprescindible que el ayuntamiento ___ las aceras rotas. (arreglar)", "arregle", "Es imprescindible que es una petición: subjuntivo, arregle."),
      toEs("El ayuntamiento limpia el parque.", "Es urgente que el ayuntamiento limpie el parque.", "La petición convierte el hecho en algo deseado: limpia → limpie.", [], "Transforma la frase en una petición con «Es urgente que...»."),
      toEs("Hay poca luz en la calle.", "Es evidente que hay poca luz en la calle.", "Es evidente que presenta un hecho: el verbo se queda en indicativo, hay.", [], "Transforma la frase en un hecho con «Es evidente que...»."),
      toEs("«Es fundamental que el ayuntamiento escucha a los vecinos.»", "Es fundamental que el ayuntamiento escuche a los vecinos.", "Es fundamental que es una petición: subjuntivo, escuche.", [], "Corrige la carta."),
      toEs("«Es evidente que la plaza esté sucia y es necesario de que la limpien.»", "Es evidente que la plaza está sucia y es necesario que la limpien.", "Es evidente que presenta un hecho (indicativo, está). Y es necesario que no lleva de.", [], "Corrige la carta."),
      ms(
        "¿Qué frases son correctas?",
        ["Es obvio que falta un centro de salud.", "Es imprescindible que actúen ya.", "Es verdad que los vecinos estén preocupados.", "Es lógico que la gente se queje."],
        [0, 1, 3],
        "«Es verdad que los vecinos estén» es incorrecta: la certeza pide indicativo, están. Es obvio que + indicativo, y es imprescindible / es lógico que + subjuntivo, están bien."
      ),
      toEs("It is essential that you (ustedes) listen to the residents.", "Es fundamental que escuchen a los vecinos.", "Es fundamental que + subjuntivo; a personal.", ["Es imprescindible que escuchen a los vecinos.", "Es esencial que escuchen a los vecinos."]),
      wo("Esperamos que nos respondan lo antes posible.", "Esperar que + subjuntivo.", "We hope you will reply as soon as possible."),
    ]
  ),
  L(
    "subjunctive-impersonal-ojala-drill-3",
    "b1r-error-hunt-ojala-impersonal",
    "Caza de errores: ojalá y las expresiones impersonales",
    "«Ojalá que vienes», «es verdad que sea», «es importante de que» — corrige cada uno.",
    "7 min",
    [
      sec(
        "Recuerda la regla: tres trampas",
        [
          "Recuerda: (1) Ojalá siempre con subjuntivo, porque solo expresa un deseo. (2) Expresiones de certeza (es verdad, es cierto, es evidente, está claro que) con indicativo, porque afirman un hecho; las de valoración, necesidad o posibilidad, con subjuntivo. (3) Nada de «de» entre la expresión y que: ✗ es importante de que → ✓ es importante que.",
        ],
        [
          ["✗ Ojalá que puedes venir. → ✓ Ojalá que puedas venir.", "I hope you can come."],
          ["✗ Es necesario de que estudies. → ✓ Es necesario que estudies.", "It's necessary that you study."],
        ],
        [
          mc(
            "Corrige: «Es cierto que tenga razón.»",
            ["Es cierto que tiene razón.", "Es cierto de que tiene razón.", "Es cierto que tuviera razón.", "No hay error."],
            0,
            "«Es cierto que» expresa certeza → indicativo: tiene razón. «Es cierto de que» añade un «de» que sobra, «tuviera» es subjuntivo y la frase original sí tiene error."
          ),
        ]
      ),
    ],
    [
      fb("Corrige.", "Ojalá que no ___ tráfico. (haber; el alumno escribió: hay)", "haya", "Ojalá siempre va con subjuntivo: haya, no «hay»."),
      fb("Corrige.", "Es mejor que no le ___ nada. (decir, tú; el alumno escribió: dices)", "digas", "«Es mejor que» → subjuntivo: digas, no «dices»."),
      fb("Corrige.", "Es evidente que ___ cansados. (estar, ellos; el alumno escribió: estén)", "están", "«Es evidente que» expresa certeza → indicativo: están, no «estén»."),
      ms(
        "¿Qué frases tienen un error?",
        ["Es posible que llueva.", "Es importante de que comas bien.", "Ojalá tengas suerte.", "Está claro que no quiere venir."],
        [1],
        "«Es importante de que» es incorrecta: la expresión no lleva «de», es importante que comas bien. Las otras usan bien el subjuntivo o el indicativo."
      ),
      mc(
        "¿Cuál es correcta?",
        ["Es raro que no conteste.", "Es raro que no contesta.", "Es raro de que no conteste.", "Raro es que no contesta."],
        0,
        "«Es raro que» valora un hecho y pide subjuntivo: no conteste. «Es raro que no contesta» usa indicativo, «Es raro de que» añade un «de» que sobra y «Raro es que no contesta» también usa indicativo."
      ),
      mt(
        "Relaciona el principio con el final correcto.",
        [
          ["Es verdad que", "estudia mucho."],
          ["Es bueno que", "estudie mucho."],
          ["Ojalá", "que apruebe."],
          ["Es importante", "estudiar cada día."],
        ],
        "Solo la certeza afirmativa («Es verdad que») lleva indicativo; «Es bueno que» pide subjuntivo; «Ojalá» admite «que» + subjuntivo; y «Es importante» sin «que» va con infinitivo porque no hay sujeto concreto."
      ),
      wo("Es una suerte que hayamos encontrado sitio.", "Es una suerte que + perfecto de subjuntivo.", "It's lucky that we found a spot."),
      toEs("«Ojalá que mis padres me dejan ir al concierto.»", "Ojalá que mis padres me dejen ir al concierto.", "Ojalá siempre lleva subjuntivo: dejen.", ["Ojalá mis padres me dejen ir al concierto."], "Corrige la frase."),
      toEs("«Está claro de que el equipo juegue mejor este año.»", "Está claro que el equipo juega mejor este año.", "Dos errores: está claro que no lleva de, y expresa certeza, así que va con indicativo (juega).", [], "Corrige la frase."),
      toEs("Es verdad que el museo está cerrado.", "Es una pena que el museo esté cerrado.", "Al pasar de certeza a valoración, el verbo cambia a subjuntivo: está → esté.", ["Es una lástima que el museo esté cerrado."], "Cambia «Es verdad que» por «Es una pena que»."),
      toEs("Espero que encuentres trabajo.", "Ojalá encuentres trabajo.", "Ojalá funciona como espero que y lleva el mismo subjuntivo: encuentres.", ["Ojalá que encuentres trabajo."], "Transforma el deseo con ojalá."),
    ]
  ),
  L(
    "subjunctive-impersonal-ojala-drill-3",
    "b1r-transform-personal-impersonal",
    "Transformaciones: de «creo que» a «es importante que»",
    "Convierte opiniones personales en frases impersonales — y decide si el modo cambia.",
    "7 min",
    [
      sec(
        "La idea: el modo lo decide la nueva expresión",
        [
          "«Creo que debes descansar» → «Es importante que descanses». El verbo de opinión desaparece; si la expresión impersonal valora o expresa necesidad (es importante que), el modo cambia a subjuntivo, pero si expresa certeza (es verdad que), se queda en indicativo.",
          "¿Por qué? Lo que manda no es el contenido de la frase sino lo que hace la expresión con él: afirmarlo (indicativo) o valorarlo, pedirlo o verlo solo como posible (subjuntivo).",
        ],
        [
          ["Pienso que tienes que dormir más. → Es necesario que duermas más.", "It's necessary that you sleep more."],
          ["Sé que tienes razón. → Es verdad que tienes razón.", "It's true you're right."],
        ],
        [
          fb("Transforma.", "Creo que debemos salir ya. → Es mejor que ___ ya.", "salgamos", "«Es mejor que» → subjuntivo, desde salgo: salgamos."),
        ]
      ),
    ],
    [
      fb("Transforma.", "Sé que el examen es mañana. → Es seguro que el examen ___ mañana.", "es", "Certeza → se queda en indicativo."),
      fb("Transforma.", "Pienso que hace falta más tiempo. → Es posible que ___ falta más tiempo.", "haga", "«Es posible que» → subjuntivo de hacer: haga falta."),
      fb("Transforma.", "Me parece que tienes que llamarla. → Es importante que la ___.", "llames", "«Es importante que» → subjuntivo, con el pronombre delante: la llames."),
      fb("Transforma.", "Creo que no vienen. → Es probable que no ___.", "vengan", "«Es probable que» → subjuntivo, desde vengo: vengan."),
      mc(
        "«Todo el mundo sabe que fumar es malo.» → impersonal:",
        ["Es sabido que fumar es malo.", "Es sabido que fumar sea malo.", "Es posible que fumar es malo.", "Es sabido de que fumar es malo."],
        0,
        "«Es sabido que» presenta un hecho y lleva indicativo: es malo. «Sea malo» usa subjuntivo, «Es posible que… es» debería llevar subjuntivo y «Es sabido de que» añade un «de» que sobra."
      ),
      ms(
        "¿Qué transformaciones mantienen el indicativo?",
        ["Es verdad que…", "Es obvio que…", "Es probable que…", "Está claro que…"],
        [0, 1, 3],
        "«Es verdad», «es obvio» y «está claro que» expresan certeza y mantienen el indicativo. «Es probable que» expresa probabilidad y pide subjuntivo."
      ),
      wo("Es normal que estés nervioso antes de la entrevista.", "Es normal que + subjuntivo.", "It's normal for you to be nervous before the interview."),
      toEs("«Pienso que tienes que comer mejor. → Es necesario que comes mejor.»", "Es necesario que comas mejor.", "Es necesario que expresa necesidad: subjuntivo, comas. El indicativo de la frase original no se conserva.", [], "Corrige la transformación."),
      toEs("«Sé que la reunión es a las diez. → Es cierto que la reunión sea a las diez.»", "Es cierto que la reunión es a las diez.", "Es cierto que expresa certeza, igual que sé que: el verbo se queda en indicativo, es.", [], "Corrige la transformación."),
      fb("Aplica la regla a una expresión nueva.", "Creo que nos van a subir el sueldo. → Es dudoso que nos ___ el sueldo. (subir, ellos)", "suban", "Es dudoso que expresa duda: subjuntivo, suban."),
    ]
  ),
  L(
    "commands-drill-3",
    "b1r-mission-tour-guide",
    "Misión real: el guía turístico",
    "Eres guía en Toledo. Da instrucciones a un grupo con mandatos de ustedes — y avisos con negativos.",
    "7 min",
    [
      sec(
        "Recuerda la regla: a un grupo se le habla de ustedes",
        [
          "Recuerda la regla: un guía habla al grupo de ustedes, y ustedes manda siempre con el presente de subjuntivo: yo del presente, se quita la -o y se cambia la vocal (sigo → sigan, tengo → tengan, miro → miren). En afirmativo los pronombres se pegan al final con tilde (síganme, fíjense).",
          "Tu misión: guiar a un grupo por Toledo. Da instrucciones, avisa de los peligros y reacciona a lo que pasa durante la visita.",
        ],
        [
          ["Síganme, por favor, y no se separen del grupo.", "Follow me, please, and don't get separated from the group. (sigo → sigan + me)"],
          ["Fíjense en los detalles de la puerta.", "Notice the details on the door. (fijen + se, con tilde)"],
          ["Tengan cuidado con el escalón.", "Watch the step. (tengo → tengan)"],
        ],
        [
          fb("Completa la instrucción.", "___ las cámaras; aquí no se pueden hacer fotos. (guardar)", "Guarden", "Ustedes usa el subjuntivo: guardo → guarden (-ar → -en). «Guardan» sería una descripción, no una instrucción."),
          mc(
            "Un turista va a tocar una espada antigua de la vitrina. ¿Qué le dice el guía al grupo?",
            ["No la toquen, por favor.", "No tóquenla, por favor.", "No la tocan, por favor.", "No la toques, por favor."],
            0,
            "Prohibición al grupo: no + pronombre + subjuntivo de ustedes, no la toquen (c → qu delante de e). «No tóquenla» pega el pronombre en negativo, «tocan» es indicativo y «toques» es para tú."
          ),
        ]
      ),
      sec(
        "Avisos",
        "Para prohibir o advertir: no + subjuntivo, con los pronombres delante del verbo. El subjuntivo es el mismo que en afirmativo; solo cambia el sitio del pronombre: siéntense → no se sienten.",
        [
          ["No toquen las paredes, por favor.", "Please don't touch the walls."],
          ["No se olviden de volver al autobús a las cinco.", "Don't forget to come back to the bus at five. (se delante)"],
        ],
        [
          fb("Completa el aviso.", "No ___ comida dentro de la catedral. (traer)", "traigan", "Negativo de ustedes = subjuntivo, que sale del yo «traigo»: no traigan."),
          toEs("No hacen ruido en la biblioteca.", "No hagan ruido en la biblioteca.", "«No hacen» describe lo que hacen; para prohibir hace falta el subjuntivo, que sale del yo «hago»: no hagan.", [], "Corrige el aviso del guía."),
        ]
      ),
    ],
    [
      fb("Completa.", "___ aquí un momento, por favor. (sentarse)", "Siéntense", "Ustedes afirmativo: sienten (e → ie) + se pegado, con tilde para mantener el acento: siéntense."),
      fb("Completa.", "No ___ prisa; tenemos tiempo. (darse)", "se den", "Negativo: el pronombre va delante del subjuntivo: no se den. Afirmativo sería «dense prisa»."),
      fb("Completa.", "___ a la derecha al salir. (girar)", "Giren", "Girar → giren: subjuntivo de ustedes, -ar → -en."),
      mt(
        "Relaciona cada situación con el mandato del guía.",
        [
          ["Hace calor.", "Beban agua."],
          ["El suelo está mojado.", "Tengan cuidado."],
          ["Van a entrar a la iglesia.", "Hablen en voz baja."],
          ["Termina la visita.", "Disfruten del resto del día."],
        ],
        "Cada situación pide una instrucción al grupo, siempre en subjuntivo de ustedes: beban, tengan (de tengo), hablen, disfruten."
      ),
      mc(
        "«Don't lose your tickets.» (ustedes)",
        ["No pierdan las entradas.", "No pierden las entradas.", "No perded las entradas.", "No las pierdan sus entradas."],
        0,
        "Negativo de ustedes: subjuntivo con e→ie: no pierdan. «No pierden» es indicativo, «No perded» mezcla el afirmativo de vosotros y «No las pierdan sus entradas» repite el objeto."
      ),
      toEs("Look at (ustedes) this painting and tell me what you see.", "Miren este cuadro y díganme qué ven.", "Mandatos de ustedes; el pronombre se pega en afirmativo y la tilde mantiene el acento: díganme.", ["Miren este cuadro y díganme lo que ven.", "Observen este cuadro y díganme qué ven."]),
      wo("Por favor, no se acerquen demasiado a las obras.", "Negativo de ustedes con reflexivo: el «se» va delante del verbo, no se acerquen (c → qu delante de e).", "Please don't get too close to the artworks. (ustedes)"),
    ]
  ),
  L(
    "commands-drill-3",
    "b1r-contrast-direct-polite",
    "Contraste: directo o cortés",
    "¡Cierra la puerta! / ¿Podrías cerrar la puerta? / ¿Cierras la puerta? — cuándo usar cada forma.",
    "7 min",
    [
      sec(
        "Recuerda la regla: cuanto más lejos del mandato, más cortés",
        [
          "Recuerda la regla: el mandato impone (Cierra la puerta). Cada paso que te alejas de él deja más libertad al otro y suena más cortés: una pregunta en presente deja decidir (¿Cierras la puerta?), «poder» pregunta si puede (¿Puedes cerrar…?), el condicional añade distancia hipotética (¿Podrías cerrar…?) y «¿Te importaría…?» pide permiso para molestar.",
          "La forma depende de la relación y de la situación: con familia y amigos, el mandato o la pregunta en presente son normales; con un desconocido o en un servicio, usted + condicional. Demasiada cortesía con tu madre suena fría o irónica.",
        ],
        [
          ["Pásame la sal.", "Pass me the salt. (familia: normal)"],
          ["¿Me pasas la sal?", "Could you pass the salt? (presente en pregunta: casual, amable)"],
          ["¿Podrías pasarme la sal?", "Could you pass me the salt? (condicional: cortés, con tú)"],
          ["¿Le importaría pasarme la sal?", "Would you mind passing me the salt? (usted: muy cortés)"],
        ],
        [
          mc(
            "Con un desconocido en el tren, ¿qué es más adecuado?",
            ["¿Le importaría bajar la voz?", "¡Baja la voz!", "Baja la voz ya.", "¡Cállate!"],
            0,
            "Con un desconocido lo adecuado es una petición cortés con usted y condicional: ¿Le importaría bajar la voz? «¡Baja la voz!», «Baja la voz ya» y «¡Cállate!» son órdenes bruscas de tú."
          ),
          mc(
            "A tu compañero de piso, de forma amable pero sin formalidad:",
            ["¿Me pasas el mando?", "¿Le importaría pasarme el mando?", "Páseme el mando.", "¡El mando!"],
            0,
            "Con alguien de confianza, el presente en pregunta con tú es amable y natural: ¿Me pasas el mando? Las opciones con usted suenan frías con un compañero de piso, y «¡El mando!» es una orden brusca."
          ),
        ]
      ),
    ],
    [
      toEs("Ayúdame.", "¿Me podrías ayudar?", "Un paso más cortés que el mandato: condicional de poder + infinitivo. El pronombre puede ir delante de «podrías» o pegado al infinitivo.", ["¿Podrías ayudarme?"], "Transforma la orden en una petición cortés con «podrías»."),
      toEs("Espere aquí.", "¿Le importaría esperar aquí?", "«¿Le importaría + infinitivo?» es el escalón más cortés con usted: el verbo vuelve al infinitivo (esperar) y la persona va en «le».", [], "Transforma la orden en una petición muy cortés con «le importaría»."),
      fb("Hazlo más directo (tú).", "¿Podrías traer pan? → ___ pan.", "Trae", "Bajar la escalera hasta el mandato: traer tiene un mandato de tú regular, igual que la forma él: trae."),
      mt(
        "Relaciona cada situación con la forma adecuada.",
        [
          ["Tu hermano pequeño deja la puerta abierta.", "¡Cierra la puerta!"],
          ["Tu compañera de trabajo está cerca de la ventana.", "¿Puedes abrir la ventana?"],
          ["Una señora mayor en el autobús.", "¿Le importaría dejarme pasar?"],
          ["Tu amigo en la cena.", "¿Me pasas el agua?"],
        ],
        "La relación decide el nivel: al hermano pequeño, mandato; a la compañera, «poder» con tú; a la desconocida mayor, usted + condicional; al amigo, presente en pregunta."
      ),
      ms(
        "¿Qué peticiones son corteses?",
        ["¿Sería tan amable de ayudarme?", "¿Me dejas tu boli un momento?", "¡Dame eso!", "¿Podría decirme dónde está el baño?"],
        [0, 1, 3],
        "«¿Sería tan amable…?», «¿Me dejas…?» y «¿Podría…?» son peticiones corteses. «¡Dame eso!» es una orden muy directa."
      ),
      toEs("Would you mind turning off your phone? (usted)", "¿Le importaría apagar el móvil?", "«Would you mind» con usted = ¿Le importaría + infinitivo?", ["¿Le importaría apagar su móvil?", "¿Le importaría apagar el celular?", "¿Le importaría apagar su teléfono?"]),
      wo("¿Me harías un favor muy grande?", "El condicional (harías, de har-) convierte la petición en una pregunta cortés con tú.", "Would you do me a big favor? (tú)"),
    ]
  ),
  L(
    "commands-drill-3",
    "b1r-dialogue-personal-trainer",
    "Laboratorio de diálogo: el entrenador personal",
    "Un entrenador da órdenes, anima y corrige a su cliente — mandatos de tú en acción.",
    "7 min",
    [
      sec(
        "Recuerda la regla: el entrenador tutea",
        [
          "Recuerda la regla: en el gimnasio el entrenador tutea al cliente. Tú afirmativo = la forma él del presente (levanta, respira, dobla), salvo los ocho irregulares cortos (haz, pon, ten, sal, ven, di, ve, sé). Tú negativo = no + subjuntivo (no dobles, no pares).",
          "Con los reflexivos, el pronombre se pega en afirmativo (túmbate, relájate) y va delante en negativo (no te muevas). Escucha al entrenador y responde como él en cada situación.",
        ],
        [
          ["—Levanta los brazos y respira hondo.", "Raise your arms and breathe deeply. (levanta = él levanta)"],
          ["—No dobles las rodillas. ¡Así, muy bien!", "Don't bend your knees. Like that, very good! (negativo: subjuntivo)"],
          ["—Ahora túmbate y haz diez abdominales.", "Now lie down and do ten sit-ups. (túmba + te; hacer → haz)"],
        ],
        [
          fb("Completa la orden.", "___ la espalda recta. (mantener)", "Mantén", "Mantener se conjuga como tener, y el tú afirmativo copia «ten»: mantén, con tilde."),
          mc(
            "El cliente levanta la pesa con la espalda doblada. ¿Qué le dice el entrenador?",
            ["Pon la espalda recta.", "Pone la espalda recta.", "No pon la espalda recta.", "Pones la espalda recta."],
            0,
            "Poner es uno de los ocho irregulares cortos: pon. «Pone» sería la forma él (no sirve con los irregulares), «no pon» mezcla la forma afirmativa con el negativo y «pones» es indicativo."
          ),
        ]
      ),
      sec(
        "Ánimos",
        "Para animar: ¡Vamos!, ¡Sigue!, ¡No te rindas!, ¡Dale! Fíjate en que «no te rindas» es negativo: subjuntivo (rindas, de rindo) y el pronombre delante.",
        [
          ["¡Sigue, que ya casi terminas!", "Keep going, you're almost done! (seguir: e → i)"],
          ["¡No te rindas ahora!", "Don't give up now! (te delante)"],
        ],
        [
          fb("Anima al cliente.", "¡No ___ ahora! (parar)", "pares", "Negativo de tú → subjuntivo: paro → no pares."),
          toEs("Relájate ahora.", "No te relajes ahora.", "En negativo el verbo pasa al subjuntivo (relajes) y el reflexivo se despega y va delante: no te relajes.", [], "Cambia la orden a negativo: el cliente aún no ha terminado."),
        ]
      ),
    ],
    [
      fb("Completa.", "___ el peso despacio. (bajar)", "Baja", "Mandato de tú regular = forma él del presente: (él) baja → baja."),
      fb("Completa.", "___ agua cada quince minutos. (beber)", "Bebe", "Beber es regular: la forma él, bebe, sirve de mandato."),
      fb("Completa.", "No ___ el desayuno antes de entrenar. (saltarse)", "te saltes", "Negativo reflexivo: pronombre delante + subjuntivo, no te saltes."),
      mt(
        "Relaciona cada orden con su significado.",
        [
          ["Estira las piernas.", "Stretch your legs."],
          ["Aguanta diez segundos.", "Hold for ten seconds."],
          ["Relájate.", "Relax."],
          ["No te muevas.", "Don't move."],
        ],
        "Mandatos de tú: afirmativos con la forma él (estira, aguanta, relája + te) y negativo con subjuntivo y pronombre delante (no te muevas)."
      ),
      mc(
        "El cliente dice: «Estoy muy cansado.» El entrenador responde…",
        ["Descansa un minuto y sigue.", "Descansas un minuto y sigues ayer.", "Descanse un minuto, señor Presidente.", "No descansa."],
        0,
        "En el gimnasio el entrenador tutea al cliente: descansa, sigue (mandatos de tú). «Descansas… ayer» es indicativo y pasado, «señor Presidente» no encaja con el tono y «No descansa» no es una orden."
      ),
      toEs("Breathe in, hold the air and breathe out slowly. (tú)", "Inspira, aguanta el aire y espira despacio.", "Tres mandatos afirmativos de tú: forma de él del presente (inspira, aguanta, espira).", ["Respira, aguanta el aire y suéltalo despacio.", "Inspira, aguanta el aire y suéltalo despacio.", "Inhala, aguanta el aire y exhala despacio.", "Inhala, aguanta la respiración y exhala despacio.", "Inspira, aguanta la respiración y espira despacio."]),
      wo("Ponte las zapatillas y sal a correr conmigo.", "Dos irregulares cortos: ponerse → ponte (pon + te) y salir → sal.", "Put on your sneakers and come out running with me. (tú)"),
    ]
  ),
  L(
    "conditional-tense-drill-3",
    "b1r-error-hunt-conditional",
    "Caza de errores: el condicional",
    "Raíces inventadas, terminaciones de futuro y el condicional después de si — corrige cada error.",
    "7 min",
    [
      sec(
        "Recuerda la regla: las raíces del futuro",
        [
          "Recuerda la regla: el condicional usa exactamente las mismas raíces que el futuro. Si sabes el futuro (tendré, haré, diré), cambias -é por -ía y ya tienes el condicional (tendría, haría, diría). Por eso formas como «teneríamos» o «haceríais» son errores: mezclan el infinitivo entero con un verbo que tiene raíz propia.",
          "Busca tres tipos de error en esta lección: raíces inventadas, condicional después de «si» y futuro donde hace falta condicional (tras «dijo que» o «yo que tú»).",
        ],
        [
          ["✗ Yo diciría que sí. → ✓ Yo diría que sí.", "I would say yes. (decir → dir-, como diré)"],
          ["✗ ¿Poderías ayudarme? → ✓ ¿Podrías ayudarme?", "Could you help me? (poder → podr-, como podré)"],
        ],
        [
          fb("Corrige.", "Nosotros ___ antes, pero hay tráfico. (salir; el alumno escribió: saliríamos)", "saldríamos", "Salir usa la raíz irregular del futuro (saldré), así que el condicional es saldríamos."),
          mc(
            "¿Qué forma está bien?",
            ["valdría", "valería", "valdería", "valíría"],
            0,
            "Valer forma el futuro con -dr- (valdrá), y el condicional copia esa raíz: valdría. «Valería» usa el infinitivo entero, «valdería» mezcla las dos raíces y «valíría» no existe."
          ),
        ]
      ),
      sec(
        "Nunca después de si",
        "El condicional va en la otra parte de la frase, nunca justo después del si de condición: ✗ Si tendría dinero… (Para condiciones irreales se usa el imperfecto de subjuntivo: Si tuviera dinero…)",
        [
          ["✗ Si podría, iría. → ✓ Si pudiera, iría.", "If I could, I'd go."],
        ],
        [
          mc(
            "Corrige: «Si me llamarías, te contaría todo.»",
            ["Si me llamaras, te lo contaría todo.", "Si me llamarías, te lo contarías.", "Si me llamaré, te lo contaría.", "No hay error."],
            0,
            "Tras el «si» de condición nunca va el condicional; la frase es irreal, así que lleva imperfecto de subjuntivo: si me llamaras, te lo contaría todo. (Como condición real sería: si me llamas, te lo contaré.) «Si me llamaré» usa futuro y la frase original sí tiene error."
          ),
        ]
      ),
    ],
    [
      fb("Corrige.", "¿___ usted repetirlo? (poder; el alumno escribió: Podería)", "Podría", "Poder usa la raíz podr- en condicional: podría, no «podería»."),
      fb("Corrige.", "Yo en tu lugar no ___ nada. (decir; el alumno escribió: deciría)", "diría", "Decir usa la raíz dir- en condicional: diría, no «deciría»."),
      fb("Corrige.", "¿Qué ___ vosotros en mi situación? (hacer; el alumno escribió: haceríais)", "haríais", "Hacer usa la raíz har- en condicional: haríais, no «haceríais»."),
      ms(
        "¿Qué frases tienen un error?",
        ["Me gustaría viajar más.", "¿Querríais venir a cenar?", "Él sabría la respuesta.", "Nosotros poneríamos la mesa."],
        [3],
        "«Nosotros poneríamos» es incorrecta: poner usa la raíz pondr-: pondríamos. Gustaría, querríais y sabría están bien formados."
      ),
      mc(
        "¿Cuál es correcta?",
        ["Dijo que vendría a las ocho.", "Dijo que veniría a las ocho.", "Dijo que vendrá a las ocho ayer.", "Dijo que vendríe a las ocho."],
        0,
        "En estilo indirecto (dijo que…) el futuro pasa a condicional; venir usa la raíz vendr-: vendría. «Veniría» y «vendríe» no existen, y «vendrá… ayer» mezcla tiempos."
      ),
      toEs("Será mejor salir ahora.", "Sería mejor salir ahora.", "Del futuro al condicional con la misma raíz (ser- es regular): será → sería. El condicional presenta la idea como sugerencia, más suave.", ["Sería mejor irnos ahora."], "Cambia el verbo al condicional para suavizar la sugerencia."),
      wo("En tu lugar yo no le contaría nada a nadie.", "Consejo con «en tu lugar» + condicional (contaría); en español la doble negación (no… nada… nadie) es correcta.", "If I were you, I wouldn't tell anyone anything."),
    ]
  ),
  L(
    "conditional-tense-drill-3",
    "b1r-mission-moral-dilemmas",
    "Misión real: dilemas morales",
    "¿Devolverías una cartera llena de dinero? ¿Mentirías por un amigo? Responde y justifica con el condicional.",
    "8 min",
    [
      sec(
        "Dilema 1: la cartera",
        [
          "Recuerda la regla: un dilema es una situación imaginada, así que preguntas y respuestas van en condicional (¿Qué harías? — Lo devolvería). Se forma con el infinitivo entero + -ía, y los irregulares usan la raíz del futuro: haría, diría, podría, me quedaría. El futuro (lo devolveré) sonaría a plan real, no a hipótesis.",
          "Tu misión: responde a cada dilema, justifica tu decisión y reacciona a lo que harían otros. Primer dilema: encuentras una cartera con 500 euros y el carné de su dueño. ¿Qué harías?",
        ],
        [
          ["Yo la devolvería, pero me quedaría con un poco de dinero. — ¡Eso no estaría bien!", "I'd return it, but I'd keep a bit of the money. — That wouldn't be right!"],
          ["La llevaría a la policía inmediatamente.", "I'd take it to the police immediately. (llevar + ía)"],
        ],
        [
          fb("Responde.", "Yo ___ al dueño para devolvérsela. (llamar)", "llamaría", "Situación imaginada → condicional regular: infinitivo entero + -ía, llamaría. «Llamaré» sería un plan real."),
          mc(
            "Tu amigo dice: «Yo me quedaría con todo el dinero.» No estás de acuerdo. ¿Qué respondes?",
            ["Pues yo no lo haría nunca.", "Pues yo no lo hice nunca.", "Pues yo no lo haré ayer.", "Pues yo no lo hacía nunca."],
            0,
            "Respondes a una hipótesis con otra hipótesis: condicional, haría (raíz har-). «Hice» y «hacía» hablan del pasado real, y «haré ayer» mezcla futuro y pasado."
          ),
        ]
      ),
      sec(
        "Dilema 2: la mentira",
        "Tu mejor amigo te pide que mientas a su novia. ¿Lo harías? Para justificar, encadena dos condicionales: no mentiría, pero le aconsejaría…",
        [
          ["No, no mentiría. Le aconsejaría hablar con ella.", "No, I wouldn't lie. I'd advise him to talk to her."],
        ],
        [
          fb("Responde.", "Yo no le ___ nada a su novia, pero tampoco mentiría. (decir)", "diría", "Decir usa la raíz del futuro (diré) en el condicional: diría."),
          toEs("No, yo no lo haré nunca.", "No, yo no lo haría nunca.", "La pregunta era hipotética (¿lo harías?), así que la respuesta también: condicional, haría. El futuro «haré» lo convierte en un plan.", ["No, yo nunca lo haría."], "Corrige la respuesta al dilema."),
        ]
      ),
    ],
    [
      fb("Dilema 3: ves a alguien robar en una tienda. ¿Qué harías?", "Yo ___ al guardia de seguridad. (avisar)", "avisaría", "Es una situación imaginada, así que va en condicional: infinitivo completo + -ía (no el futuro avisaré)."),
      fb("Dilema 4: ¿aceptarías un trabajo que odias por mucho dinero?", "Sí, pero solo lo ___ un año. (hacer)", "haría", "Hacer usa la raíz har- (como haré): haría."),
      fb("Dilema 5: ¿qué le dirías a un amigo que canta fatal?", "Le ___ la verdad con cariño. (decir)", "diría", "La pregunta usa «dirías», y la respuesta sigue en condicional: diría."),
      mt(
        "Relaciona cada dilema con una respuesta lógica.",
        [
          ["¿Leerías el diario de tu hermana?", "No, nunca lo leería."],
          ["¿Saldrías con el ex de tu amiga?", "No, no le haría eso."],
          ["¿Te irías a vivir a Marte?", "Sí, me encantaría."],
          ["¿Cambiarías algo de tu pasado?", "No cambiaría nada."],
        ],
        "Pregunta en condicional → respuesta en condicional, y el sentido debe encajar: leerías → lo leería, te irías → me encantaría."
      ),
      ms(
        "¿Qué respuestas son correctas?",
        ["Yo no podría hacerlo.", "Mis padres nunca lo aceptarían.", "Nosotros lo devolveríamos.", "Tú no lo harías nunca ayer."],
        [0, 1, 2],
        "El condicional expresa lo que haríamos en una situación imaginada. «Tú no lo harías nunca ayer» es incorrecta: «ayer» no encaja con una hipótesis."
      ),
      toEs("I would never lie to my best friend.", "Nunca le mentiría a mi mejor amigo.", "Nunca + condicional; le + a mi mejor amigo.", ["Nunca le mentiría a mi mejor amiga.", "No le mentiría nunca a mi mejor amigo.", "Yo nunca le mentiría a mi mejor amigo."]),
      wo("¿Tú qué harías en mi lugar?", "Condicional para una situación imaginada: harías (raíz har-).", "What would you do in my place?"),
    ]
  ),
  L(
    "conditional-tense-drill-3",
    "b1r-dialogue-travel-agency",
    "Laboratorio de diálogo: en la agencia de viajes",
    "Un cliente indeciso y una agente paciente: sugerencias, preferencias y peticiones en condicional.",
    "7 min",
    [
      sec(
        "Las opciones",
        [
          "Recuerda la regla: en un servicio, el condicional suaviza todo lo que dices porque lo presenta como hipótesis, no como exigencia. La agente sugiere (le recomendaría, podría quedarse) y el cliente expresa preferencias (me gustaría, preferiría, no me importaría). Se habla de usted.",
          "Escucha el diálogo y responde como el cliente o como la agente en cada situación.",
        ],
        [
          ["—¿Adónde le gustaría ir?", "Where would you like to go?"],
          ["—Preferiría un sitio tranquilo, con playa.", "I'd prefer a quiet place with a beach. (más suave que «prefiero»)"],
          ["—Le recomendaría la costa de Oaxaca. Podría quedarse en una cabaña.", "I'd recommend the Oaxaca coast. You could stay in a cabin."],
        ],
        [
          fb("Completa la respuesta del cliente.", "No me ___ pagar un poco más por las vistas. (importar)", "importaría", "«No me importaría» + infinitivo: lo que importa es la acción (pagar), así que el verbo va en tercera persona: importaría."),
          mc(
            "La agente pregunta: «¿Le gustaría un hotel con piscina?» Respondes, con cortesía, que prefieres un apartamento:",
            ["Preferiría un apartamento, gracias.", "Prefiero que un apartamento.", "Preferiré un apartamento ayer.", "Preferí un apartamento, gracias."],
            0,
            "Una preferencia cortés va en condicional: preferiría. «Prefiero que» necesitaría un verbo detrás, «preferiré ayer» mezcla futuro y pasado, y «preferí» habla del pasado."
          ),
        ]
      ),
      sec(
        "Cerrar el trato",
        "Las peticiones finales también suenan mejor en condicional: ¿Podría…? + infinitivo, ¿Sería posible…? + infinitivo.",
        [
          ["¿Podría enviarme el presupuesto por correo?", "Could you email me the quote?"],
          ["¿Sería posible pagar a plazos?", "Would it be possible to pay in installments?"],
        ],
        [
          mc(
            "«Would it be possible to change the date?»",
            ["¿Sería posible cambiar la fecha?", "¿Será posible cambiar la fecha ayer?", "¿Es posible que cambiaría la fecha?", "¿Sería posible cambiaría la fecha?"],
            0,
            "«Would it be possible» = ¿Sería posible + infinitivo? «Será… ayer» mezcla tiempos, «que cambiaría» usa condicional tras es posible que y «posible cambiaría» junta dos verbos conjugados."
          ),
          toEs("¿Podería darme un folleto?", "¿Podría darme un folleto?", "Poder pierde la e en el futuro (podrá) y en el condicional: podría.", [], "Corrige la petición del cliente."),
        ]
      ),
    ],
    [
      fb("Completa.", "Yo en su lugar ___ en temporada baja. (viajar)", "viajaría", "Consejo con «yo en su lugar» → condicional: viajaría."),
      fb("Completa.", "¿Le ___ bien salir el día 3? (venir)", "vendría", "Venir usa la raíz vendr- del futuro: vendría (¿le vendría bien…? = would it suit you?)."),
      fb("Completa.", "Con el paquete completo, ustedes no ___ que preocuparse de nada. (tener)", "tendrían", "Tener usa la raíz tendr-: tendrían."),
      mt(
        "Relaciona cada pregunta de la agente con la respuesta del cliente.",
        [
          ["¿Viajaría solo?", "No, iría con mi pareja."],
          ["¿Cuánto querría gastar?", "Unos dos mil euros."],
          ["¿Le interesaría una excursión?", "Sí, me encantaría."],
          ["¿Preferiría hotel o apartamento?", "Preferiría un apartamento."],
        ],
        "Pregunta y respuesta en condicional: cada respuesta contesta exactamente lo que se pregunta (con quién, cuánto, si le interesa, qué prefiere)."
      ),
      ms(
        "¿Qué frases son correctas y corteses?",
        ["Me gustaría reservar dos noches.", "¿Podría darme más información?", "Quiero que usted me dará un folleto.", "¿Tendrían habitaciones libres?"],
        [0, 1, 3],
        "«Quiero que usted me dará» es incorrecta: querer que pide subjuntivo (que me dé), y además suena brusco; mejor: ¿Podría darme un folleto? Las demás son peticiones corteses en condicional."
      ),
      toEs("I'd like a room with a sea view.", "Me gustaría una habitación con vistas al mar.", "«I'd like» = me gustaría, aquí con un sustantivo.", ["Querría una habitación con vista al mar.", "Me gustaría una habitación con vista al mar.", "Querría una habitación con vistas al mar.", "Quisiera una habitación con vistas al mar.", "Quisiera una habitación con vista al mar."]),
      wo("¿Qué me recomendaría para una luna de miel?", "Condicional de cortesía con usted: recomendaría.", "What would you recommend for a honeymoon? (usted)"),
    ]
  ),
  L(
    "si-clauses-drill-3",
    "b1r-chain-of-conditions",
    "Cadena de condiciones",
    "Si esto, entonces aquello; y si aquello, entonces… Construye cadenas de consecuencias lógicas.",
    "7 min",
    [
      sec(
        "Recuerda la regla: el resultado vuelve como condición",
        [
          "Recuerda la regla: en una condición real, tras si va el presente y el resultado va en futuro (o en presente si es un hábito). En una cadena, cada resultado se convierte en la condición siguiente.",
          "La trampa: al pasar de resultado a condición, el verbo cambia de tiempo. «Perderé el tren» es resultado (futuro); como condición se dice «si pierdo el tren», nunca «si perderé», porque tras si nunca va futuro.",
        ],
        [
          ["Si llueve, no iremos a la playa.", "If it rains, we won't go to the beach. (si + presente, futuro)"],
          ["Si no vamos a la playa, iremos al cine.", "If we don't go to the beach, we'll go to the cinema. (iremos → si vamos)"],
          ["Si me levanto tarde, pierdo el autobús; si pierdo el autobús, llego tarde.", "If I get up late, I miss the bus; if I miss the bus, I'm late. (hábito: presente + presente)"],
        ],
        [
          fb("Continúa la cadena.", "Si mi jefe se enfada, no me ___ el aumento. (dar, futuro)", "dará", "Condición en presente (se enfada) y resultado en futuro: dar → dará. Ese resultado podrá ser la próxima condición: «si no me da el aumento…»."),
          mc(
            "«Si ahorro, compraré una moto. Si ___ una moto, iré al trabajo en ella.»",
            ["compro", "compraré", "compre", "compraría"],
            0,
            "El resultado «compraré» vuelve como condición, y tras si va presente: si compro. «Compraré» es futuro y «compre» subjuntivo, que no van tras este si; «compraría» es condicional."
          ),
        ]
      ),
    ],
    [
      fb("Continúa la cadena.", "Si no me dan el aumento, no ___ viajar este verano. (poder, yo, futuro)", "podré", "Resultado en futuro con raíz irregular: poder → podr- → podré."),
      fb("Continúa la cadena.", "Si no viajo, ___ en casa y leeré mucho. (quedarse, yo, futuro)", "me quedaré", "Resultado en futuro; el pronombre reflexivo va delante del verbo conjugado: me quedaré."),
      fb("Empieza otra cadena.", "Si ___ la lotería, dejaré de trabajar. (ganar, yo)", "gano", "Es la condición: tras si va presente (gano), aunque hable del futuro. «Ganaré» sería el error típico."),
      mc(
        "Ordena la cadena: (A) Si como mucho, me duele el estómago. (B) Si voy a la fiesta, como mucho. (C) Si me duele el estómago, no duermo.",
        ["B → A → C", "A → B → C", "C → A → B", "A → C → B"],
        0,
        "La cadena va de causa a efecto: ir a la fiesta → comer mucho → dolor de estómago → no dormir. Por eso el orden es B → A → C; los otros órdenes rompen esa lógica."
      ),
      mt(
        "Relaciona cada condición con su consecuencia lógica.",
        [
          ["Si estudias,", "aprobarás."],
          ["Si no riegas las plantas,", "se morirán."],
          ["Si calientas el hielo,", "se derrite."],
          ["Si tienes sed,", "bebe agua."],
        ],
        "Resultado en futuro (aprobarás, se morirán), en presente para una verdad general (se derrite) o en imperativo (bebe)."
      ),
      toEs("If you (tú) don't sleep, you'll be tired; and if you're tired, you won't work well.", "Si no duermes, estarás cansado; y si estás cansado, no trabajarás bien.", "Dos condiciones encadenadas: «estarás» (resultado, futuro) vuelve como «si estás» (condición, presente).", ["Si no duermes, estarás cansada; y si estás cansada, no trabajarás bien.", "Si no duermes, vas a estar cansado; y si estás cansado, no vas a trabajar bien."]),
      wo("Si no sales ahora, no llegarás a tiempo.", "Si + presente + futuro.", "If you don't leave now, you won't get there on time."),
    ]
  ),
  L(
    "si-clauses-drill-3",
    "b1r-mission-emergency-instructions",
    "Misión real: instrucciones de emergencia",
    "Lee y completa el cartel de seguridad de un edificio: si hay fuego, si suena la alarma, si alguien se hace daño.",
    "7 min",
    [
      sec(
        "Recuerda la regla: si + presente, + mandato",
        [
          "Recuerda la regla: un cartel de emergencia une una condición real con una instrucción. Tras si va el presente (si hay humo, nunca «si habrá»), y después un mandato. Como el cartel habla a desconocidos, el mandato va de usted (salga) o de ustedes (salgan).",
          "El mandato de usted usa la forma del subjuntivo: el verbo cambia de vocal (-ar → -e, -er/-ir → -a). En negativo los pronombres van delante (no lo toque); en afirmativo se pegan al final (tóquelo). «No toca» o «sale» son descripciones, no órdenes.",
        ],
        [
          ["Si suena la alarma, salga por la escalera más cercana.", "If the alarm sounds, exit by the nearest stairs. (salir → salga)"],
          ["Si hay humo, agáchese y cúbrase la boca.", "If there's smoke, get down low and cover your mouth. (afirmativo: pronombre pegado)"],
          ["Si oyen la sirena, no vuelvan a sus mesas.", "If you hear the siren, don't go back to your desks. (ustedes, negativo)"],
        ],
        [
          fb("Completa el cartel.", "Si hay fuego, no ___ el ascensor. (usar, usted)", "use", "Mandato negativo de usted: no + forma del subjuntivo, use. «No usa» sería una descripción, no una orden."),
          mc(
            "Escribes el cartel de la cocina del hotel. ¿Qué frase sirve?",
            ["Si se derrama aceite, limpie el suelo enseguida.", "Si se derramará aceite, limpie el suelo enseguida.", "Si se derrama aceite, limpia el suelo enseguida, señor.", "Si se derrama aceite, limpiará el suelo enseguida."],
            0,
            "Si + presente (se derrama) y mandato de usted (limpie). «Se derramará» pone futuro tras si, «limpia» es tú (no encaja con «señor») y «limpiará» es una predicción, no una instrucción."
          ),
        ]
      ),
    ],
    [
      fb("Completa el cartel.", "Si la puerta está caliente, no la ___. (abrir, usted)", "abra", "Negativo de usted: no + abra (-ir → -a); el pronombre «la» va delante del verbo."),
      fb("Completa el cartel.", "Si se queda atrapado, ___ una toalla mojada bajo la puerta. (poner, usted)", "ponga", "Poner tiene raíz irregular pong- (de pongo): ponga."),
      fb("Completa el cartel.", "Si ven a alguien herido, ___ a los bomberos. (avisar, ustedes)", "avisen", "Ustedes: avisar → avisen (-ar → -en). «Avisan» sería solo una descripción."),
      mt(
        "Relaciona cada situación con la instrucción correcta.",
        [
          ["Si tiembla la tierra,", "póngase debajo de una mesa."],
          ["Si se va la luz,", "use una linterna."],
          ["Si huele a gas,", "no encienda ninguna luz."],
          ["Si alguien se desmaya,", "llame a una ambulancia."],
        ],
        "Si + presente + mandato de usted: cada instrucción responde a su situación."
      ),
      ms(
        "¿Qué instrucciones están bien escritas?",
        ["Si suena la alarma, mantenga la calma.", "Si hay fuego, no corre.", "Si está herido, no se mueva.", "Si necesita ayuda, grite."],
        [0, 2, 3],
        "«Si hay fuego, no corre» es incorrecta: el mandato negativo usa subjuntivo, no corra (usted) o no corras (tú). Las otras dan bien la instrucción con usted."
      ),
      toEs("If the alarm goes off, leave the building calmly. (ustedes)", "Si suena la alarma, salgan del edificio con calma.", "Si + presente + mandato de ustedes (salir → salgan).", ["Si suena la alarma, salgan del edificio tranquilamente.", "Si se activa la alarma, salgan del edificio con calma."]),
      wo("Si ve humo, no utilice el ascensor bajo ningún concepto.", "Si + presente + mandato negativo de usted.", "If you see smoke (usted), do not use the elevator under any circumstances."),
    ]
  ),
  L(
    "si-clauses-drill-3",
    "b1r-transform-command-to-condition",
    "Transformaciones: de mandato a condición",
    "«Estudia y aprobarás» → «Si estudias, aprobarás». Reescribe consejos y advertencias con si.",
    "7 min",
    [
      sec(
        "Recuerda la regla: y = si, o = si no",
        [
          "Recuerda la regla: un consejo con mandato + y + futuro dice lo mismo que si + presente + futuro (Come y te sentirás mejor = Si comes, te sentirás mejor). Una advertencia con mandato + o + futuro equivale a si no + presente + futuro (Date prisa o perderás el tren = Si no te das prisa, perderás el tren).",
          "¿Por qué? «Y» une la acción con su premio: si la haces, llega el resultado. «O» presenta una alternativa: o haces esto, o pasa lo otro; es decir, si no lo haces. Al transformar, el imperativo pasa a presente de indicativo (come → comes; ponte → te pones), porque tras si nunca va un mandato ni un futuro.",
        ],
        [
          ["Come y te sentirás mejor. → Si comes, te sentirás mejor.", "Eat and you'll feel better. (y → si)"],
          ["Date prisa o perderás el tren. → Si no te das prisa, perderás el tren.", "Hurry or you'll miss the train. (o → si no; el pronombre va delante: te das)"],
          ["Haz la reserva y tendrás mesa. → Si haces la reserva, tendrás mesa.", "Make the booking and you'll get a table. (haz → haces)"],
        ],
        [
          fb("Transforma con si.", "Llama y te abrirán. → Si ___, te abrirán.", "llamas", "Mandato + y = si + presente: el imperativo «llama» pasa a presente, «si llamas». Sin «no», porque la «y» une acción y resultado."),
          mc(
            "«Sal ya o llegarás tarde.» → con si:",
            ["Si no sales ya, llegarás tarde.", "Si sales ya, llegarás tarde.", "Si no saldrás ya, llegarás tarde.", "Si no sal ya, llegarás tarde."],
            0,
            "Mandato + o = si no + presente: si no sales. Sin «no» cambia el sentido, «saldrás» pone futuro tras si y «sal» es un imperativo, que no va tras si."
          ),
        ]
      ),
    ],
    [
      fb("Transforma con si.", "Duerme más y estarás menos cansado. → Si ___ más, estarás menos cansado.", "duermes", "Mandato + y = si + presente: duerme → duermes (o → ue, igual que en el imperativo)."),
      fb("Transforma con si.", "Abrígate o te resfriarás. → Si no ___, te resfriarás.", "te abrigas", "Mandato + o = si no + presente; el pronombre, pegado en el imperativo (abrígate), pasa delante del verbo conjugado: si no te abrigas."),
      fb("Transforma con si.", "Estudiad o suspenderéis. → Si no ___, suspenderéis.", "estudiáis", "Mandato + o = si no + presente de vosotros: estudiad → estudiáis."),
      fb("Transforma al mandato.", "Si practicas, mejorarás. → ___ y mejorarás.", "Practica", "Camino inverso: si + presente (practicas) → mandato de tú + y (Practica y mejorarás)."),
      mc(
        "«Si no te callas, te vas a quedar sin postre.» → con mandato:",
        ["Cállate o te quedarás sin postre.", "Cállate y te quedarás sin postre.", "No te calles o te quedarás sin postre.", "Callarse o quedarse sin postre."],
        0,
        "«Si no…, consecuencia» equivale a mandato + o: Cállate o te quedarás sin postre. «Cállate y» significa lo contrario, «No te calles» invierte la orden y «Callarse o quedarse» usa infinitivos."
      ),
      ms(
        "¿Qué pares tienen el mismo significado?",
        ["Corre y llegarás. = Si corres, llegarás.", "Descansa o te enfermarás. = Si no descansas, te enfermarás.", "Ven y verás. = Si no vienes, verás.", "Pregunta y te ayudarán. = Si preguntas, te ayudarán."],
        [0, 1, 3],
        "«Ven y verás» equivale a «si vienes, verás», sin «no». Los otros pares sí son equivalentes: mandato + y = si…, y mandato + o = si no…"
      ),
      wo("Termina los deberes y podrás salir a jugar.", "Mandato + y + futuro: la acción y su premio.", "Finish your homework and you'll be able to go out and play."),
    ]
  ),
  L(
    "present-past-perfect-drill-3",
    "b1r-mission-cv",
    "Misión real: el currículum y la entrevista",
    "Presenta tu experiencia en una entrevista: lo que has hecho, lo que hiciste y lo que ya habías hecho antes.",
    "8 min",
    [
      sec(
        "Recuerda la regla: tres pasados para contar tu carrera",
        [
          "Recuerda la regla: en una entrevista usas tres pasados, cada uno con su función. El pretérito perfecto (he trabajado) resume tu experiencia hasta hoy, sin fecha. El indefinido (trabajé) da detalles con fecha cerrada (en 2019, el año pasado). El pluscuamperfecto (había trabajado) cuenta lo que ya habías hecho antes de otro momento pasado.",
          "¿Por qué importa? Porque el entrevistador oye la diferencia: «he dirigido equipos» vende experiencia que sigue contigo; «en 2018 he empezado» suena mal, porque una fecha cerrada pide indefinido (empecé).",
        ],
        [
          ["He trabajado en tres empresas internacionales.", "I've worked at three international companies. (resumen, sin fecha)"],
          ["He dirigido equipos de hasta diez personas.", "I've led teams of up to ten people. (experiencia hasta hoy)"],
        ],
        [
          fb("Completa.", "___ proyectos en cinco países distintos. (coordinar, yo)", "He coordinado", "Resumen de experiencia sin fecha, hasta hoy: pretérito perfecto, he + coordinado."),
          mc(
            "Escribes el resumen de tu perfil en LinkedIn. ¿Qué frase encaja?",
            ["He formado a más de cien empleados nuevos.", "Formé a más de cien empleados nuevos ayer.", "Había formado a más de cien empleados nuevos.", "Formaba a más de cien empleados nuevos mañana."],
            0,
            "Un resumen de experiencia sin fecha va en pretérito perfecto: he formado. «Ayer» no encaja con un resumen, el pluscuamperfecto necesita otro momento pasado de referencia y «formaba… mañana» mezcla tiempos."
          ),
        ]
      ),
      sec(
        "Detalles y antecedentes",
        "Los detalles concretos van en pretérito; lo que ya habías hecho antes de un momento pasado, en pluscuamperfecto.",
        [
          ["En 2019 empecé en una startup en Lima.", "In 2019 I started at a startup in Lima. (fecha cerrada)"],
          ["Antes de eso, ya había trabajado dos años como becario.", "Before that, I had already worked two years as an intern. (anterior a 2019)"],
        ],
        [
          fb("Completa.", "Cuando me contrataron, ya ___ el máster. (terminar, yo)", "había terminado", "Terminar el máster fue antes de otro pasado (me contrataron): pluscuamperfecto, había terminado."),
        ]
      ),
    ],
    [
      fb("Responde al entrevistador.", "—¿Ha usado alguna vez este programa? —Sí, lo ___ en mi último trabajo. (usar, pretérito)", "usé", "«En mi último trabajo» es una etapa cerrada: detalle concreto en indefinido, usé."),
      fb("Responde al entrevistador.", "—¿Por qué dejó su último empleo? —Porque la empresa ___ a otra ciudad. (mudarse)", "se mudó", "Un hecho puntual y terminado: indefinido, se mudó."),
      fb("Responde al entrevistador.", "Nunca ___ en el sector público hasta ahora. (trabajar, yo)", "he trabajado", "«Hasta ahora» llega al presente: pretérito perfecto, he trabajado."),
      mt(
        "Relaciona cada pregunta con su respuesta.",
        [
          ["¿Qué ha aprendido en su último trabajo?", "He aprendido a trabajar bajo presión."],
          ["¿Cuándo terminó la carrera?", "La terminé en 2020."],
          ["¿Había vivido en el extranjero antes?", "Sí, había vivido un año en Canadá."],
          ["¿Ha tenido algún problema con un jefe?", "No, nunca he tenido problemas."],
        ],
        "La pregunta indica el tiempo de la respuesta: perfecto con perfecto, indefinido con indefinido, pluscuamperfecto con pluscuamperfecto."
      ),
      ms(
        "¿Qué frases de entrevista son correctas?",
        ["He gestionado presupuestos grandes.", "En 2018 he empezado a trabajar.", "Antes de la universidad, ya había hecho prácticas.", "Siempre me ha gustado trabajar en equipo."],
        [0, 2, 3],
        "«En 2018 he empezado a trabajar» es incorrecta: con una fecha terminada se usa el pretérito, empecé. Las demás usan bien el perfecto y el pluscuamperfecto."
      ),
      toEs("I have always wanted to work in this company.", "Siempre he querido trabajar en esta empresa.", "Siempre + pretérito perfecto (hasta hoy).", ["Siempre he querido trabajar para esta empresa."]),
      wo("Cuando llegué a la empresa, el proyecto ya había empezado.", "Pretérito (llegué) + pluscuamperfecto para lo anterior (había empezado).", "When I joined the company, the project had already started."),
    ]
  ),
  L(
    "present-past-perfect-drill-3",
    "b1r-error-hunt-perfects",
    "Caza de errores: he, había y los participios",
    "«He ido ayer», «había escribido», «ya lo he hacido» — corrige los errores de los tiempos compuestos.",
    "7 min",
    [
      sec(
        "Recuerda la regla: tres errores típicos",
        [
          "Recuerda la regla: los tiempos compuestos fallan en tres puntos. 1) El marcador: con ayer, el año pasado o una fecha cerrada no va el pretérito perfecto, porque el presente de haber ata la acción al ahora (✗ Ayer he ido → ✓ Ayer fui). Esto vale en España y en América.",
          "2) El participio: muchos verbos frecuentes son irregulares (hecho, dicho, escrito, roto, vuelto, puesto, abierto, cubierto, muerto), y «hacido» o «escribido» no existen. 3) El orden: haber y el participio no se separan; pronombres y negación van delante (no se lo he dicho).",
        ],
        [
          ["✗ El lunes he visto a Pedro. → ✓ El lunes vi a Pedro.", "On Monday I saw Pedro. (tiempo cerrado → indefinido)"],
          ["✓ Esta semana he visto a Pedro.", "This week I've seen Pedro. (periodo abierto → perfecto)"],
          ["✗ He lo puesto. → ✓ Lo he puesto.", "I've put it. (pronombre delante de haber)"],
        ],
        [
          fb("Corrige el tiempo.", "Anoche ___ muy tarde. (acostarse, yo; el alumno escribió: me he acostado)", "me acosté", "«Anoche» es un tiempo terminado: pretérito, me acosté."),
          toEs("Ya hemos lo resuelto.", "Ya lo hemos resuelto.", "El pronombre nunca va entre haber y el participio: va delante de haber (lo hemos). El participio irregular «resuelto» está bien.", [], "Corrige la frase."),
        ]
      ),
      sec(
        "El pluscuamperfecto necesita un pasado de referencia",
        "El pluscuamperfecto expresa algo anterior a otro pasado. Sin ese segundo pasado, suele sobrar.",
        [
          ["✗ Había comido paella en Valencia. (¿antes de qué?)", "(needs another past moment)"],
          ["✓ Cuando llegaste, ya había comido.", "When you arrived, I had already eaten."],
        ],
        [
          mc(
            "¿Cuál es correcta?",
            ["Cuando llamaste, ya había salido.", "Cuando había llamado, ya salí.", "Cuando llamaste, ya he salido.", "Ya había salido ayer que llamaste."],
            0,
            "El pluscuamperfecto marca lo anterior a «llamaste»: ya había salido. «Cuando había llamado, ya salí» invierte la relación, «ya he salido» se liga al presente y la última está mal construida."
          ),
        ]
      ),
    ],
    [
      fb("Corrige el participio.", "Todavía no he ___ la carta. (abrir; el alumno escribió: abrido)", "abierto", "Abrir tiene participio irregular: abierto. «Abrido» no existe."),
      fb("Corrige el participio.", "Nunca había ___ tanto. (reír; el alumno escribió: reido)", "reído", "Reír → reído, con tilde para separar las vocales."),
      fb("Corrige el tiempo.", "En 2010 ___ a Japón. (ir, nosotros; el alumno escribió: hemos ido)", "fuimos", "Una fecha terminada (2010) pide el pretérito: fuimos."),
      ms(
        "¿Qué frases tienen un error?",
        ["Este año he leído veinte libros.", "La semana pasada he estado enfermo.", "Me dijo que había perdido las llaves.", "Hoy he desayunado tarde."],
        [1],
        "«La semana pasada he estado enfermo» es incorrecta: un periodo terminado pide el pretérito, estuve. Este año, hoy y el estilo indirecto con pluscuamperfecto están bien usados."
      ),
      mc(
        "¿Cuál es correcta?",
        ["Ya lo he hecho.", "Ya he lo hecho.", "Ya lo he hacido.", "Lo ya he hecho."],
        0,
        "El pronombre va delante de haber, y el participio de hacer es hecho: Ya lo he hecho. «He lo» y «Lo ya he» colocan mal el pronombre, y «hacido» no existe."
      ),
      toEs("When the police arrived, the thieves had already escaped.", "Cuando llegó la policía, los ladrones ya se habían escapado.", "La llegada va en pretérito (llegó) y la huida anterior en pluscuamperfecto (se habían escapado).", ["Cuando la policía llegó, los ladrones ya se habían escapado.", "Cuando llegó la policía, los ladrones ya habían escapado."]),
      wo("¿Has visto alguna vez un eclipse de sol?", "Experiencia de vida → pretérito perfecto.", "Have you ever seen a solar eclipse?"),
    ]
  ),
  L(
    "present-past-perfect-drill-3",
    "b1r-story-crime-scene",
    "Detective de historias: la escena del crimen",
    "Un inspector reconstruye lo que había pasado antes de que llegara la policía. Resuelve el caso con el pluscuamperfecto.",
    "8 min",
    [
      sec(
        "Recuerda la regla: lo que ya había pasado",
        [
          "Recuerda la regla: el pluscuamperfecto (había + participio) cuenta una acción terminada antes de otro momento pasado. En una investigación, ese momento es la llegada de la policía o el descubrimiento: todo lo que ocurrió antes va en pluscuamperfecto; lo que pasa en el relato, en indefinido; y lo que se ve en la escena, en imperfecto.",
          "¿Por qué no el pretérito perfecto (ha roto)? Porque el perfecto mide desde ahora, y el detective reconstruye desde un momento pasado. Lo mismo ocurre al contar lo que dijo un testigo: «He oído un ruido» pasa a «dijo que había oído un ruido».",
        ],
        [
          ["Cuando llegó el inspector, alguien había movido el cuerpo.", "When the inspector arrived, someone had moved the body. (anterior a llegó)"],
          ["La puerta estaba cerrada, pero el ladrón había entrado por el tejado.", "The door was locked, but the thief had got in through the roof. (escena: imperfecto)"],
          ["El testigo dijo que había visto un coche rojo.", "The witness said he had seen a red car. (estilo indirecto)"],
        ],
        [
          fb("Completa el informe con el pluscuamperfecto de salir.", "Cuando llegamos a la casa, el sospechoso ya ___ por la puerta de atrás.", "había salido", "La salida ocurrió antes de «llegamos»: pluscuamperfecto, había + salido. «Ha salido» mediría desde ahora."),
          mc(
            "El portero declara: «He visto a un hombre con gorra». ¿Cómo lo cuenta el inspector?",
            ["El portero dijo que había visto a un hombre con gorra.", "El portero dijo que ha visto a un hombre con gorra ayer.", "El portero dijo que veía a un hombre con gorra mañana.", "El portero dijo que había vista a un hombre con gorra."],
            0,
            "Al contar lo que alguien dijo en el pasado, el perfecto (he visto) pasa a pluscuamperfecto (había visto). «Ha visto… ayer» mezcla un perfecto con un tiempo cerrado, «veía… mañana» no tiene sentido y el participio no concuerda (vista)."
          ),
        ]
      ),
      sec(
        "La escena",
        "Cuando la policía llegó al museo, encontró pistas de todo lo que había ocurrido antes.",
        [
          ["Alguien había roto la ventana del segundo piso.", "Someone had broken the second-floor window."],
          ["El ladrón había desconectado la alarma.", "The thief had disconnected the alarm."],
          ["El vigilante se había dormido en su silla.", "The guard had fallen asleep in his chair."],
        ],
        [
          mc(
            "¿Por qué no sonó la alarma?",
            ["El ladrón la había desconectado.", "El vigilante la había roto.", "No había alarma.", "La policía la apagó."],
            0,
            "La alarma no sonó porque el ladrón la había desconectado. No la rompió el vigilante, sí había alarma y la policía no la apagó."
          ),
        ]
      ),
      sec(
        "Las declaraciones",
        "Los testigos cuentan lo que vieron (pretérito) y lo que ya había pasado (pluscuamperfecto).",
        [
          ["La limpiadora: «Cuando entré, el cuadro ya había desaparecido».", "The cleaner: \"When I went in, the painting had already disappeared.\""],
        ],
        [
          fb("Completa la declaración del vigilante.", "Cuando me desperté, el ladrón ya se ___ ido. (haber)", "había", "Lo anterior a «me desperté» va en pluscuamperfecto: imperfecto de haber (había) + participio (ido)."),
        ]
      ),
    ],
    [
      fb("Completa el informe.", "El ladrón ___ por la ventana que había roto. (entrar)", "entró", "Es la acción principal del relato: indefinido, entró. Romper la ventana fue antes, por eso va en pluscuamperfecto."),
      fb("Completa el informe.", "Antes del robo, el ladrón ___ el museo varias veces. (visitar, pluscuamperfecto)", "había visitado", "Anterior al robo (otro momento pasado): pluscuamperfecto, había visitado."),
      fb("Completa el informe.", "Esa noche ___ mucha niebla y no se veía nada. (haber, imperfecto)", "había", "Descripción de la escena, no una acción: imperfecto, había (igual que «se veía»)."),
      mt(
        "Relaciona cada pista con lo que revela.",
        [
          ["huellas en la ventana", "El ladrón había tocado el cristal."],
          ["un café frío en la mesa", "El vigilante no se lo había tomado."],
          ["una puerta abierta", "Alguien la había dejado abierta."],
          ["barro en el suelo", "El ladrón había llegado del jardín."],
        ],
        "Cada pista revela una acción anterior al descubrimiento: pluscuamperfecto."
      ),
      mc(
        "El inspector concluye: «El ladrón ___ el museo antes, porque conocía el camino.»",
        ["había visitado", "visitaba ayer", "ha visitado", "visitará"],
        0,
        "Visitar el museo ocurrió antes de los hechos: pluscuamperfecto, había visitado. «Visitaba ayer» y «ha visitado» no marcan esa anterioridad, y «visitará» es futuro."
      ),
      toEs("The inspector discovered that the guard had lied.", "El inspector descubrió que el vigilante había mentido.", "Descubrir va en pretérito; mentir fue antes: pluscuamperfecto, había mentido.", []),
      wo("Nadie se había dado cuenta de que faltaba el cuadro.", "Pluscuamperfecto reflexivo (se había dado cuenta) + imperfecto (faltaba).", "Nobody had noticed that the painting was missing."),
    ]
  ),
  L(
    "relative-pronouns-drill-3",
    "b1r-mission-flat-ads",
    "Misión real: anuncios de pisos",
    "Escribe y lee anuncios inmobiliarios llenos de relativas: un piso que tiene, un barrio donde, una zona en la que…",
    "7 min",
    [
      sec(
        "Recuerda la regla: una relativa por cada dato",
        [
          "Los anuncios describen con relativas porque así se mete mucha información en poco espacio: cada relativa añade un dato al sustantivo sin empezar una frase nueva. El relativo depende del antecedente y de lo que va delante: «que» para cosas o personas sin preposición, «donde» (= en el que) para lugares, preposición + el/la que o quien cuando el verbo la exige (un vecino con quien compartes…), y «lo que» cuando no hay sustantivo (todo lo que necesitas).",
          "En esta misión vas a leer anuncios, escribirlos a partir de notas y corregir los que están mal redactados.",
        ],
        [
          ["Piso luminoso que tiene tres habitaciones y terraza.", "Bright apartment that has three bedrooms and a terrace."],
          ["Situado en un barrio donde hay colegios y parques.", "Located in a neighborhood where there are schools and parks."],
          ["Ideal para familias que buscan tranquilidad.", "Ideal for families looking for peace and quiet."],
        ],
        [
          fb("Completa el anuncio.", "Estudio pequeño ___ está a dos minutos del metro.", "que", "Sin preposición, el relativo es «que»: estudio que está…"),
        ]
      ),
      sec(
        "Buscar piso",
        "Cuando buscas algo que no sabes si existe, la relativa va en subjuntivo (lo verás a fondo en el B2): Busco un piso que tenga ascensor.",
        [
          ["Busco un piso que tenga jardín.", "I'm looking for an apartment that has a garden. (I don't know if one exists)"],
          ["Vivo en un piso que tiene jardín.", "I live in an apartment that has a garden. (it exists)"],
        ],
        [
          mc(
            "«Alquilo una habitación ___ da al parque.» (la habitación existe)",
            ["que", "quien", "donde que", "lo que"],
            0,
            "Para una cosa, sin preposición, se usa «que». «Quien» es para personas, «donde que» junta dos relativos y «lo que» es para ideas."
          ),
        ]
      ),
    ],
    [
      fb("Completa el anuncio.", "Chalet con jardín en el ___ pueden jugar los niños.", "que", "Los niños juegan EN el jardín: la preposición y el artículo ya están (en el), solo falta «que». Con «el» delante no puede ir «donde» ni «quien»."),
      { ...fb("Completa el anuncio.", "Zona ___ se puede aparcar fácilmente.", "donde", "Para un lugar se usa «donde»: zona donde se puede aparcar."), altAnswers: ["en la que", "en que"] },
      fb("Completa el anuncio.", "Todo ___ necesitas, a cinco minutos a pie.", "lo que", "Todo lo que = everything (that)."),
      mt(
        "Relaciona cada frase con su final.",
        [
          ["Es un piso", "que tiene mucha luz."],
          ["Es una calle", "donde hay poco ruido."],
          ["Es el vecino", "con quien comparto el jardín."],
          ["Es la zona", "en la que crecí."],
        ],
        "Cada final encaja con su antecedente: una cosa sin preposición → que (el piso que tiene luz); un lugar → donde (la calle donde hay poco ruido); una persona tras preposición → con quien; y un lugar con preposición + artículo concordado → en la que (la zona)."
      ),
      ms(
        "¿Qué frases son correctas?",
        ["La casa en la que vivo es antigua.", "El dueño quien me alquila el piso es simpático.", "El barrio donde trabajo es caro.", "Lo que más me gusta es la terraza."],
        [0, 2, 3],
        "«El dueño quien me alquila el piso» es incorrecta: sin preposición ni coma se usa «que». Las otras usan bien en la que, donde y lo que."
      ),
      toEs("It's the neighborhood where I grew up.", "Es el barrio donde crecí.", "«Where» con un lugar = donde.", ["Es el barrio en el que crecí.", "Es el barrio en donde crecí."]),
      wo("Alquilo una habitación que tiene baño propio.", "Relativa con que (la habitación existe → indicativo).", "I'm renting out a room that has its own bathroom."),
    ]
  ),
  L(
    "relative-pronouns-drill-3",
    "b1r-contrast-que-lo-que-el-que",
    "Contraste: que, lo que, el que",
    "Tres relativos que se parecen mucho — elige el correcto según lo que sustituyen.",
    "7 min",
    [
      sec(
        "Recuerda la regla: ¿qué sustituye el relativo?",
        [
          "Que: va detrás de un sustantivo que acabas de nombrar (el libro que leo). El que / la que / los que / las que: el sustantivo no se repite porque ya se sabe cuál es; el artículo lo sustituye y por eso lleva su género y número (el que está en la mesa = el libro). Lo que: no hay ningún sustantivo, sino una idea, algo sin nombre o toda una frase anterior (lo que dices; ganamos, lo que nadie esperaba).",
          "Truco: si puedes poner un sustantivo concreto detrás del artículo (el [libro] que), usa el/la que; si solo cabe «la cosa» o «eso», usa lo que.",
        ],
        [
          ["El coche que compré es rojo.", "The car I bought is red."],
          ["¿Qué coche? El que está aparcado ahí.", "Which car? The one parked there."],
          ["Lo que compré fue un coche.", "What I bought was a car."],
        ],
        [
          mc(
            "«De todos los vestidos, me gusta ___ es azul.»",
            ["el que", "que", "lo que", "quien"],
            0,
            "El sustantivo se sobrentiende (el vestido), así que se usa artículo + que: el que es azul. «Que» solo no basta, «lo que» es para ideas y «quien» para personas."
          ),
          mc(
            "«Llovió toda la semana, ___ arruinó nuestras vacaciones.»",
            ["lo que", "la que", "que", "el que"],
            0,
            "Lo que arruinó las vacaciones no es «la semana» sino todo el hecho de que lloviera: una idea, por eso «lo que». «La que» señalaría la semana, y «que» o «el que» exigen un sustantivo concreto."
          ),
        ]
      ),
    ],
    [
      fb("Elige que, lo que, el que o la que.", "No entiendo ___ quieres decir.", "lo que", "Sin antecedente, «lo que» = what: lo que quieres decir."),
      fb("Elige que, lo que, el que o la que.", "La película ___ vimos ayer era de terror.", "que", "Con un sustantivo mencionado (la película) y sin preposición: que."),
      fb("Elige que, lo que, el que o la que.", "De las dos chaquetas, prefiero ___ tiene capucha.", "la que", "La chaqueta (implícita) → la que."),
      fb("Elige que, lo que, el que o la que.", "Los ___ lleguen tarde no podrán entrar.", "que", "«Los que» = those who; aquí la relativa habla de personas aún sin identificar y en el futuro, por eso el verbo va en subjuntivo: lleguen."),
      mt(
        "Relaciona cada frase con su traducción.",
        [
          ["Lo que necesito es tiempo.", "What I need is time."],
          ["El que necesito es este.", "The one I need is this one."],
          ["El libro que necesito…", "The book I need…"],
          ["Todo lo que necesito…", "Everything I need…"],
        ],
        "Lo que = what; el que = the one that; que = that/which."
      ),
      ms(
        "¿Qué frases son correctas?",
        ["Haz lo que quieras.", "Los que estudian aprueban.", "La que me gusta es la roja.", "Me dijo el que pasó."],
        [0, 1, 2],
        "«Me dijo el que pasó» es incorrecta: para una idea se usa «lo que», me dijo lo que pasó. Lo que, los que y la que están bien usados en las otras."
      ),
      wo("Lo que más echo de menos es la comida de mi madre.", "No hay sustantivo detrás: lo que echo de menos es una idea (= what), así que se usa «lo que»; «más» va justo después para marcar el grado máximo.", "What I miss most is my mother's cooking."),
    ]
  ),
  L(
    "relative-pronouns-drill-3",
    "b1r-dialogue-who-is-who",
    "Laboratorio de diálogo: ¿quién es quién en la foto?",
    "Identifica a la gente de una foto de boda: el que lleva gafas, la que está sentada, los que se ríen…",
    "7 min",
    [
      sec(
        "Recuerda la regla: el artículo señala a la persona",
        [
          "Para identificar a alguien en una foto no repites «el hombre», «la mujer»: el artículo ocupa su lugar y concuerda con la persona (el que = el hombre que, la que = la mujer que, los/las que = las personas que). Detrás va un verbo que la distingue de las demás: el que lleva corbata, la que está sentada.",
          "Si el verbo lleva preposición (bailar con, hablar con, saludar a), esa preposición va delante del relativo: con quien / con el que, a quien / al que. En el diálogo vas a preguntar y responder quién es quién.",
        ],
        [
          ["—¿Quién es el que lleva corbata roja? —Es mi tío Paco.", "Who's the one wearing the red tie? — That's my uncle Paco."],
          ["—¿Y la que está a su lado? —Es su mujer, con quien lleva treinta años casado.", "And the woman next to him? — His wife, to whom he's been married for thirty years."],
          ["—¿Y los que se ríen al fondo? —Son mis primos, que siempre están de broma.", "And the ones laughing at the back? — My cousins, who are always joking."],
        ],
        [
          fb("Completa.", "—¿Quién es la ___ lleva el vestido verde? —Mi hermana.", "que", "«La» ya señala a una mujer; falta «que» para unirla con el verbo que la identifica: la que lleva el vestido verde."),
          mc(
            "—¿Quién es la que está al lado del novio? Elige la respuesta natural.",
            ["Es su hermana, la que vive en Roma.", "Es su hermana, lo que vive en Roma.", "Es su hermana, el que vive en Roma.", "Es su hermana, quien que vive en Roma."],
            0,
            "Se identifica a una mujer, así que el artículo es femenino: la que vive en Roma. «Lo que» es para ideas, «el que» no concuerda con «hermana» y «quien que» junta dos relativos."
          ),
        ]
      ),
    ],
    [
      { ...fb("Completa.", "El chico con ___ baila mi prima es su novio.", "quien", "Preposición + persona → quien (o el que)."), altAnswers: ["el que", "el cual"] },
      fb("Completa.", "Las ___ están sentadas son mis abuelas.", "que", "Las que = the ones who."),
      fb("Completa.", "El señor ___ está al lado de la novia es su padre.", "que", "Para una persona sin preposición ni coma: que."),
      mt(
        "Relaciona cada descripción con la persona.",
        [
          ["El que toca la guitarra", "mi primo Luis"],
          ["La que lleva sombrero", "mi tía Rosa"],
          ["Los que bailan", "los novios"],
          ["La que habla conmigo en la foto", "mi mejor amiga"],
        ],
        "Para identificar, el artículo concuerda con la persona o personas descritas: el que (un hombre), la que (una mujer), los que (un grupo); el verbo que sigue es lo que las distingue."
      ),
      mc(
        "«The ones who arrived late sat at the back.»",
        ["Los que llegaron tarde se sentaron al fondo.", "Quienes que llegaron tarde se sentaron al fondo.", "Lo que llegaron tarde se sentaron al fondo.", "Los cuales llegaron tarde se sentaron al fondo."],
        0,
        "«The ones who» = los que: Los que llegaron tarde… «Quienes que» junta dos relativos, «lo que» es para ideas y «los cuales» necesita un antecedente delante."
      ),
      toEs("The one who is laughing is my brother.", "El que se ríe es mi hermano.", "«The one who» = el que + verbo.", ["El que se está riendo es mi hermano.", "El que está riéndose es mi hermano."]),
      wo("La mujer con quien habla mi padre es la madre del novio.", "Con quien para personas tras preposición.", "The woman my father is talking to is the groom's mother."),
    ]
  ),
  L(
    "passive-voice-possessive-pronouns-drill-3",
    "b1r-mission-newspaper",
    "Misión real: la noticia del periódico",
    "Redacta titulares y noticias con la pasiva con ser y el se pasivo, como un periodista.",
    "8 min",
    [
      sec(
        "Recuerda la regla: en una noticia, lo importante va delante",
        [
          "Los titulares prefieren la pasiva y el se porque ponen el foco en lo que pasó, no en quién lo hizo: lo afectado (los ladrones, el hospital) pasa a ser el sujeto. Con «se», el verbo concuerda con ese sujeto (se inaugura el hospital, se inauguran dos hospitales). En el titular más breve se suprime incluso el verbo «ser» y queda solo el participio concordado (Detenidos dos ladrones).",
          "En esta misión vas a convertir hechos en titulares, completar la noticia y corregir titulares mal redactados.",
        ],
        [
          ["Detenidos dos ladrones en el centro.", "Two thieves arrested downtown."],
          ["Se inaugura el nuevo hospital.", "New hospital opens."],
          ["El premio fue entregado por la reina.", "The prize was presented by the queen."],
        ],
        [
          fb("Completa el titular.", "Se ___ las obras del metro. (terminar, pretérito)", "terminaron", "En la pasiva refleja el verbo concuerda con lo que se termina: «las obras» es plural → se terminaron."),
        ]
      ),
      sec(
        "El cuerpo de la noticia",
        "La noticia da detalles con la pasiva con ser + por + agente cuando el agente importa. El participio funciona como un adjetivo y concuerda con el sujeto.",
        [
          ["El edificio fue diseñado por un equipo de arquitectas.", "The building was designed by a team of architects."],
        ],
        [
          fb("Completa la noticia.", "Los heridos fueron ___ al hospital. (trasladar)", "trasladados", "El participio concuerda con el sujeto «los heridos» (masculino plural): trasladados."),
        ]
      ),
    ],
    [
      fb("Completa la noticia.", "La exposición será ___ por el alcalde. (inaugurar)", "inaugurada", "Pasiva con ser en futuro: el participio concuerda con «la exposición» (femenino singular): inaugurada."),
      fb("Completa la noticia.", "Se ___ más de mil entradas en una hora. (vender, pretérito)", "vendieron", "Las entradas son el sujeto de la pasiva refleja: plural → se vendieron, no «se vendió»."),
      fb("Completa la noticia.", "El incendio fue ___ por los bomberos en dos horas. (apagar)", "apagado", "El participio concuerda con «el incendio» (masculino singular): apagado."),
      mt(
        "Relaciona cada titular con su versión activa.",
        [
          ["Se aprueba la nueva ley.", "El Congreso aprueba la nueva ley."],
          ["Rescatados tres montañeros.", "Los bomberos rescatan a tres montañeros."],
          ["El récord fue batido por una joven.", "Una joven bate el récord."],
          ["Se cierra la fábrica.", "La empresa cierra la fábrica."],
        ],
        "En cada titular, lo que era el objeto de la versión activa (la ley, los montañeros, el récord, la fábrica) pasa a ser el sujeto: la pasiva y el se quitan el foco del agente o lo dejan para el final con «por»."
      ),
      ms(
        "¿Qué titulares son correctos?",
        ["Se buscan testigos del accidente.", "Fueron encontrados los niños perdidos.", "Se abrió dos nuevas tiendas.", "La carretera fue cortada por la nieve."],
        [0, 1, 3],
        "«Se abrió dos nuevas tiendas» es incorrecta: el verbo concuerda con el plural, se abrieron. Los otros titulares concuerdan bien con se pasivo o con ser + participio."
      ),
      toEs("The museum was visited by two million people.", "El museo fue visitado por dos millones de personas.", "Pasiva con ser + participio concordado + por: fue visitado por…", []),
      wo("Según la policía, el coche fue robado durante la noche.", "Pasiva con ser en pretérito.", "According to the police, the car was stolen during the night."),
    ]
  ),
  L(
    "passive-voice-possessive-pronouns-drill-3",
    "b1r-error-hunt-se-possessives",
    "Caza de errores: se y posesivos",
    "«Se vende pisos», «Es mío libro», «mi es azul» — corrige los errores típicos del se pasivo y de los posesivos.",
    "7 min",
    [
      sec(
        "Recuerda la regla: con se, el verbo concuerda con lo que se vende",
        [
          "En «Se venden pisos», los pisos son el sujeto gramatical (son lo que se vende), así que el verbo concuerda con ellos: plural. El error típico es dejar el verbo siempre en singular. Excepción: si lo que sigue es una persona con «a» (se busca a los testigos), el se es impersonal y el verbo se queda en singular.",
          "En la pasiva con ser, la misma lógica: el participio concuerda con el sujeto (la reunión fue cancelada).",
        ],
        [
          ["✗ Se necesita camareros. → ✓ Se necesitan camareros.", "Waiters needed."],
        ],
        [
          fb("Corrige.", "Se ___ ordenadores. (reparar; el alumno escribió: repara)", "reparan", "Con se pasivo el verbo concuerda con «ordenadores» (plural): se reparan."),
        ]
      ),
      sec(
        "Posesivos fuera de lugar",
        "Recuerda la regla: los átonos (mi, tu, su) solo existen pegados delante de un sustantivo, por eso nunca van solos ni con artículo. Los tónicos (mío, tuyo, suyo) van detrás del sustantivo, después de ser, o con artículo cuando sustituyen al sustantivo (el mío, la tuya).",
        [
          ["✗ Es mío libro. → ✓ Es mi libro. / Es mío.", "It's my book. / It's mine."],
          ["✗ Tu coche es rojo y mi es azul. → ✓ … y el mío es azul.", "…and mine is blue."],
        ],
        [
          fb("Corrige.", "Tus padres son de Lima y los ___ son de Quito. (yo; el alumno escribió: mis)", "míos", "Sin sustantivo detrás hace falta el tónico con artículo: los míos sustituye a «mis padres». «Mis» solo funciona delante de un sustantivo."),
        ]
      ),
    ],
    [
      fb("Corrige.", "La reunión del lunes fue ___. (cancelar; el alumno escribió: cancelado)", "cancelada", "El participio concuerda con «la reunión» (femenino): cancelada."),
      fb("Corrige.", "—¿Esta mochila es de tu hermano? —No, es ___. (tú; el alumno escribió: tu)", "tuya", "Después de ser y sin sustantivo, el posesivo es tónico y concuerda con «mochila»: tuya. «Tu» necesitaría un sustantivo detrás."),
      fb("Corrige.", "En esta academia se ___ clases de cocina. (dar; el alumno escribió: da)", "dan", "El verbo concuerda con «clases» (plural): se dan."),
      ms(
        "¿Qué frases tienen un error?",
        ["Se alquilan bicicletas.", "Los nuestros hijos son mayores.", "El premio fue ganado por una niña.", "Esta idea es suya."],
        [1],
        "«Los nuestros hijos» es incorrecta: delante del sustantivo, el posesivo va sin artículo: nuestros hijos. Las otras frases están bien."
      ),
      mc(
        "¿Cuál es correcta?",
        ["Mi opinión es diferente de la tuya.", "Mi opinión es diferente de tu.", "Mía opinión es diferente de la tuya.", "Mi opinión es diferente de la tu."],
        0,
        "«La tuya» sustituye a «tu opinión» y lleva artículo. «De tu» y «de la tu» usan la forma átona sin sustantivo, y «Mía opinión» usa la tónica delante del sustantivo."
      ),
      toEs("These keys aren't mine; they're his.", "Estas llaves no son mías; son suyas.", "Posesivos solos después de ser; o: son de él.", ["Estas llaves no son mías, son de él.", "Estas llaves no son mías; son de él.", "Estas llaves no son mías, son suyas."]),
      wo("Se busca a la dueña de este perro.", "Con «a» + persona el se es impersonal: el verbo va en singular (se busca) aunque se buscara a varias personas.", "The owner of this dog is being sought."),
    ]
  ),
  L(
    "passive-voice-possessive-pronouns-drill-3",
    "b1r-dialogue-moving-day",
    "Laboratorio de diálogo: el día de la mudanza",
    "Practica los posesivos (mío, tuyo, suyo, nuestro; el mío, la tuya) para repartir las cosas cuando tres compañeros de piso se separan.",
    "7 min",
    [
      sec(
        "Recuerda la regla: el posesivo concuerda con la cosa, no con el dueño",
        [
          "Al repartir cosas, los posesivos tónicos evitan repetir el sustantivo: —¿Esta lámpara es tuya? —No, la mía es la blanca. Tras «ser» van solos (es tuya); como sujeto u objeto llevan artículo (la mía, los nuestros). Siempre concuerdan con lo poseído: unas tazas mías, aunque el dueño sea un hombre.",
          "Como «suyo» puede ser de él, de ella, de usted o de ellos, cuando hay duda se aclara con de + persona: es de Lucas, es de ellos.",
        ],
        [
          ["—¿De quién son estos platos? —Son míos, me los regaló mi madre.", "Whose are these plates? — They're mine, my mother gave them to me."],
          ["—¿Y el sofá? —El sofá es de Lucas, pero los cojines son nuestros.", "And the sofa? — The sofa is Lucas's, but the cushions are ours."],
        ],
        [
          fb("Completa.", "—¿Es tuya esta planta? —No, es de Ana. La ___ está en el balcón. (yo)", "mía", "«La mía» sustituye a «mi planta»: artículo + tónico en femenino singular, como «planta»."),
        ]
      ),
    ],
    [
      fb("Completa.", "—¿Son vuestros los libros? —Sí, son ___.", "nuestros", "Los libros son nuestros (masculino plural): nuestros."),
      fb("Completa.", "—¿La tele es de Lucas? —Sí, es ___.", "suya", "La tele es de él (Lucas) y es femenina: suya."),
      fb("Completa.", "Tus toallas son azules y las ___ son verdes. (nosotros)", "nuestras", "«Las nuestras» sustituye a «nuestras toallas»: femenino plural, como «toallas»."),
      mt(
        "Relaciona cada pregunta con su respuesta.",
        [
          ["¿De quién es la bici?", "Es mía."],
          ["¿Son tuyas las tazas?", "No, son de Ana."],
          ["¿Este es vuestro espejo?", "Sí, es nuestro."],
          ["¿El microondas es suyo?", "Sí, es de ellos."],
        ],
        "Tras «ser», el tónico va sin artículo y concuerda con lo poseído (es mía, es nuestro); cuando el dueño no está claro, de + persona (es de Ana, es de ellos)."
      ),
      mc(
        "«That chair is yours (usted), not his.»",
        ["Esa silla es suya, no de él.", "Esa silla es su, no de él.", "Esa silla es la suya de usted, no la de él suya.", "Esa silla es tuya de usted."],
        0,
        "Con usted, después de ser, se usa «suya»; para el otro dueño se aclara con «de él». «Su» necesita sustantivo detrás, la tercera repite posesivos y «tuya» es de tú."
      ),
      toEs("Your (vosotros) cups are in the box; ours are on the table.", "Vuestras tazas están en la caja; las nuestras están en la mesa.", "Delante del sustantivo, el adjetivo posesivo (vuestras tazas); sin sustantivo, artículo + pronombre (las nuestras).", ["Vuestras tazas están en la caja, las nuestras están en la mesa."]),
      wo("Al final cada uno se quedó con lo suyo.", "Lo + posesivo: «lo suyo» = what is his/her own; «cada uno» va con el verbo en singular.", "In the end each of us kept what was his own."),
    ]
  ),
  L(
    "b1-vocabulary-practice-10",
    "b1r-word-web-emotions",
    "Red de palabras: emociones y reacciones",
    "Clasifica emociones, busca opuestos y reacciona a situaciones con el subjuntivo.",
    "7 min",
    [
      sec(
        "Recuerda la regla: tres formas de hablar de emociones",
        [
          "Recuerda la regla: una emoción se puede decir de tres maneras. Para el estado, estar + adjetivo (estoy preocupada, está enfadado). Para el momento en que empieza la emoción, un verbo pronominal o ponerse + adjetivo (se enfadó, me puse nerviosa). Y para la causa, me da miedo / me molesta / me pone nervioso + lo que la provoca.",
          "¿Infinitivo o subjuntivo? Si la persona que siente y la que hace la acción son la misma, va infinitivo (me da rabia perder el autobús: yo siento, yo pierdo). Si la acción es de otra persona, va que + subjuntivo (me da rabia que mi vecino ponga la música alta), porque es una reacción emocional a lo que hace otro, no una información.",
        ],
        [
          ["Estoy preocupada por el examen.", "I'm worried about the exam. (estado: estar + adjetivo)"],
          ["Mi padre se puso nervioso en la entrevista.", "My father got nervous in the interview. (cambio: ponerse + adjetivo)"],
          ["Me da rabia perder el autobús.", "It makes me mad to miss the bus. (yo siento y yo pierdo: infinitivo)"],
          ["Me da rabia que mi vecino ponga la música tan alta.", "It makes me mad that my neighbour plays music so loud. (otra persona: que + subjuntivo)"],
        ],
        [
          fb("Completa con infinitivo o subjuntivo.", "A mi abuela le preocupa que sus nietos ___ tan poco. (dormir)", "duerman", "Quien siente (la abuela) y quien duerme (los nietos) son personas distintas: que + subjuntivo, «duerman» (o → ue)."),
          fb("Completa con infinitivo o subjuntivo.", "Me encanta ___ con mis sobrinos los domingos. (jugar, yo)", "jugar", "Yo siento y yo juego: la misma persona, así que va el infinitivo, sin «que»."),
        ]
      ),
    ],
    [
      mt(
        "Relaciona cada emoción con su opuesto.",
        [
          ["la alegría", "la tristeza"],
          ["la calma", "los nervios"],
          ["la confianza", "la desconfianza"],
          ["el entusiasmo", "el aburrimiento"],
        ],
        "Pares de opuestos: muchos se forman con des- (confianza / desconfianza) y otros son palabras distintas."
      ),
      mc("¿Cuál no encaja?", ["asustado", "aterrorizado", "tranquilo", "nervioso"], 2, "«Tranquilo» expresa calma; asustado, aterrorizado y nervioso expresan miedo o tensión."),
      { ...fb("Completa.", "Me da mucha ___ cantar delante de la gente; me pongo rojo.", "vergüenza", "«Dar vergüenza» = to be embarrassed. Yo siento y yo canto: va infinitivo, «cantar»."), altAnswers: ["pena"] },
      fb("Completa.", "Mis padres están muy ___ de mí porque terminé la carrera.", "orgullosos", "Estado: estar + adjetivo, «estar orgulloso de alguien». El adjetivo concuerda con «mis padres»: orgullosos."),
      fb("Completa con subjuntivo.", "Me pone nerviosa que la gente ___ tarde. (llegar)", "llegue", "Me pone nerviosa (yo) + que la gente llegue (otra persona): subjuntivo, «llegue» (g → gu delante de e)."),
      toEs("It scares me that you (tú) drive so fast.", "Me da miedo que conduzcas tan rápido.", "La acción es tuya y el miedo, mío: que + subjuntivo. Desde «conduzco» sale «conduzcas».", ["Me asusta que conduzcas tan rápido.", "Me da miedo que manejes tan rápido."]),
      toEs("Mi hermano usa mi ordenador sin preguntar.", "Me molesta que mi hermano use mi ordenador sin preguntar.", "Con «me molesta que», la acción del otro va en subjuntivo: usa → «use».", ["Me molesta que mi hermano use mi computadora sin preguntar.", "Me molesta que mi hermano use mi computador sin preguntar.", "Me molesta que mi hermano use mi ordenador sin pedir permiso."], "Transforma la frase con «Me molesta que…»."),
      toEs("Ana estaba muy enfadada.", "Ana se enfadó mucho.", "«Estaba enfadada» describe el estado; para el momento en que empieza la emoción se usa el verbo pronominal en indefinido: «se enfadó».", ["Ana se enojó mucho."], "Cambia la frase para contar el momento en que empezó la emoción: usa «enfadarse» en indefinido."),
      toEs("Me da miedo que viajo sola de noche.", "Me da miedo viajar sola de noche.", "Yo siento el miedo y yo viajo: es la misma persona, así que va el infinitivo, sin «que».", [], "Corrige la frase."),
      toEs("Mi jefa es muy preocupada por las ventas.", "Mi jefa está muy preocupada por las ventas.", "Una emoción del momento es un estado: estar + adjetivo, «está preocupada». «Es» describiría su carácter.", [], "Corrige la frase."),
      toEs("Me alegro de que puedes venir a la cena.", "Me alegro de que puedas venir a la cena.", "«Alegrarse de que» expresa una reacción a lo que hace otra persona: subjuntivo, «puedas».", [], "Corrige la frase."),
      wo("Siento una mezcla de alegría y nostalgia.", "Sentir + sustantivos de emoción: una mezcla de alegría y nostalgia.", "I feel a mixture of joy and nostalgia."),
      { type: "speak", prompt: "Di en voz alta: «It makes me nervous that my son doesn't answer the phone.»", text: "Me pone nervioso que mi hijo no conteste el teléfono.", explanation: "Me pone nervioso (yo) + que mi hijo no conteste (otra persona): subjuntivo. También: me pone nerviosa." },
    ]
  ),
  L(
    "b1-vocabulary-practice-10",
    "b1r-word-web-opinions",
    "Red de palabras: opiniones y certezas",
    "De «estoy seguro» a «lo dudo»: aprende expresiones de opinión y certeza y elige indicativo o subjuntivo según el grado de certeza.",
    "7 min",
    [
      sec(
        "Recuerda la regla: la escala de certeza",
        [
          "Recuerda la regla: lo que presentas como cierto va en indicativo (estoy convencido de que, sin duda, es evidente que, no me cabe duda de que, creo que). Lo que presentas como posible o dudoso va en subjuntivo (puede que, es posible que, dudo que, no creo que, no estoy seguro de que).",
          "¿Por qué? El subjuntivo marca que no afirmas el hecho. Por eso, al negar una expresión de certeza cambia el modo: creo que viene → no creo que venga. «No sé si» es la excepción: va con indicativo (no sé si vendrá).",
        ],
        [
          ["Sin duda es la mejor opción.", "It's undoubtedly the best option. (certeza: indicativo)"],
          ["Puede que llueva esta tarde.", "It might rain this afternoon. (posibilidad: subjuntivo)"],
          ["Creo que el bar cierra a las doce. / No creo que cierre tan tarde.", "I think the bar closes at twelve. / I don't think it closes so late. (al negar, subjuntivo)"],
        ],
        [
          mc(
            "¿Qué expresión indica más certeza?",
            ["Estoy convencido de que…", "Puede que…", "No sé si…", "Dudo que…"],
            0,
            "«Estoy convencido de que» = estoy muy seguro, y lleva indicativo. «Puede que», «No sé si» y «Dudo que» expresan posibilidad o duda."
          ),
          fb("Completa con indicativo o subjuntivo.", "No creo que el tren ___ a tiempo con esta nieve. (llegar)", "llegue", "«No creo que» niega la certeza, así que no afirmas el hecho: subjuntivo, «llegue»."),
        ]
      ),
    ],
    [
      mt(
        "Relaciona cada expresión con su significado.",
        [
          ["A mi modo de ver", "In my view"],
          ["Me da la impresión de que", "I get the impression that"],
          ["No me cabe duda de que", "I have no doubt that"],
          ["Estoy de acuerdo con", "I agree with"],
        ],
        "Expresiones frecuentes para opinar."
      ),
      mc("¿Cuál no encaja?", ["opino", "considero", "pienso", "olvido"], 3, "Opino, considero y pienso sirven para dar una opinión. Olvidar (to forget) no es un verbo de opinión."),
      fb("Completa.", "No me cabe duda de que ___ razón. (tener, tú)", "tienes", "«No me cabe duda» presenta el hecho como cierto: indicativo, «tienes»."),
      fb("Completa.", "Puede que mañana ___ más frío. (hacer)", "haga", "«Puede que» expresa posibilidad y siempre lleva subjuntivo: «haga»."),
      fb("Completa.", "No estoy de ___ con tu propuesta.", "acuerdo", "La expresión fija es «estar de acuerdo con»."),
      toEs("In my opinion, it's a good idea.", "En mi opinión, es una buena idea.", "«En mi opinión» presenta lo que piensas como cierto y va con indicativo: es.", ["Para mí, es una buena idea.", "A mi parecer, es una buena idea.", "Desde mi punto de vista, es una buena idea."]),
      toEs("Creo que el museo abre los lunes.", "No creo que el museo abra los lunes.", "Al negar «creo que» ya no afirmas el hecho: subjuntivo, «abra».", [], "Cambia la frase a negativa: empieza con «No creo que…»."),
      toEs("Dudo que Marta llegue a tiempo.", "Estoy seguro de que Marta llegará a tiempo.", "Con «estoy seguro de que» presentas el hecho como cierto: indicativo, «llegará» (o «llega»).", ["Estoy seguro de que Marta llega a tiempo.", "Estoy segura de que Marta llegará a tiempo.", "Estoy segura de que Marta llega a tiempo.", "Estoy seguro de que Marta va a llegar a tiempo.", "Estoy segura de que Marta va a llegar a tiempo."], "Cambia la duda por certeza: empieza con «Estoy seguro de que…»."),
      toEs("Es evidente que el precio sea demasiado alto.", "Es evidente que el precio es demasiado alto.", "«Es evidente que» presenta el hecho como cierto: indicativo, «es». El subjuntivo sería para la duda.", [], "Corrige la frase."),
      toEs("Puede que mi primo viene mañana.", "Puede que mi primo venga mañana.", "«Puede que» expresa posibilidad: siempre subjuntivo, «venga».", [], "Corrige la frase."),
      toEs("No creo que este restaurante está abierto hoy.", "No creo que este restaurante esté abierto hoy.", "«No creo que» niega la certeza: subjuntivo, «esté».", [], "Corrige la frase."),
      wo("Me da la impresión de que no está contento.", "«Dar la impresión de que» presenta lo que crees como un hecho: indicativo, «está».", "I get the impression he isn't happy."),
      { type: "speak", prompt: "Di en voz alta: «I'm sure it's a good idea, but I don't think the boss will like it.»", text: "Estoy seguro de que es una buena idea, pero no creo que al jefe le guste.", explanation: "Certeza → indicativo (es); certeza negada → subjuntivo (le guste). También: estoy segura." },
    ]
  ),
  L(
    "b1-vocabulary-practice-10",
    "b1r-word-web-nature",
    "Red de palabras: la naturaleza y el medio ambiente",
    "Paisajes, animales y problemas ambientales — y deseos para el planeta con ojalá.",
    "7 min",
    [
      sec(
        "La idea: el sustantivo sale del verbo, y la terminación te da el género",
        [
          "Muchas palabras del medio ambiente son familias: conoces el verbo y de él sale el sustantivo. contaminar → la contaminación, deforestar → la deforestación, calentar → el calentamiento, reciclar → el reciclaje.",
          "La terminación decide el género, aunque no conozcas la palabra: -ción y -sión son siempre femeninas (la contaminación, la erosión); -miento y -aje son siempre masculinos (el calentamiento, el reciclaje). Por eso puedes poner bien el artículo y el adjetivo: la contaminación es grave, el calentamiento es global.",
        ],
        [
          ["La contaminación del aire es peor en invierno.", "Air pollution is worse in winter. (contaminar → contaminación: -ción, femenina)"],
          ["La deforestación avanza en la selva.", "Deforestation is advancing in the rainforest. (deforestar → deforestación)"],
          ["El calentamiento global derrite los glaciares.", "Global warming is melting the glaciers. (calentar → calentamiento: -miento, masculino)"],
          ["El reciclaje de vidrio es obligatorio aquí.", "Glass recycling is compulsory here. (-aje, masculino como el paisaje)"],
          ["La sequía afecta a los agricultores del sur.", "The drought affects farmers in the south. (de seco: la sequía)"],
        ],
        [
          mc(
            "¿Qué sustantivo sale de «conservar» (to conserve)?",
            ["la conservación", "el conservación", "el conservamiento", "la conservaje"],
            0,
            "Conservar → la conservación: el verbo en -ar da -ación, y -ción es siempre femenina. «El conservación» tiene mal el artículo; «conservamiento» y «conservaje» no existen."
          ),
          fb(
            "Completa con el artículo (el / la).",
            "___ crecimiento de las ciudades destruye zonas verdes.",
            "El",
            "Crecer → el crecimiento. Las palabras en -miento son siempre masculinas, así que el artículo es «el»."
          ),
        ]
      ),
      sec(
        "Problemas, soluciones y deseos",
        [
          "Agrupa las palabras: paisajes (la sierra, el valle, la costa, la selva, la cordillera), problemas (la contaminación, la sequía, los incendios forestales) y soluciones (reciclar, ahorrar agua y energía, plantar árboles, proteger).",
          "Para pedir o desear un cambio usamos ojalá (que) o es necesario / es importante que + subjuntivo: la acción todavía no es real, es lo que queremos.",
        ],
        [
          ["Ojalá que protejan la selva.", "I hope they protect the rainforest. (ojalá + subjuntivo)"],
          ["Es urgente que las fábricas contaminen menos.", "It's urgent that factories pollute less. (es urgente que + subjuntivo)"],
          ["Si plantamos árboles, habrá menos erosión.", "If we plant trees, there will be less erosion. (si + presente, futuro)"],
        ],
        [
          ms(
            "¿Qué palabras son problemas ambientales?",
            ["la deforestación", "la contaminación", "la cordillera", "la sequía"],
            [0, 1, 3],
            "La deforestación, la contaminación y la sequía son problemas ambientales. La cordillera es un paisaje: una cadena de montañas."
          ),
          fb(
            "Completa con el subjuntivo.",
            "Ojalá que los turistas no ___ basura en el bosque. (tirar)",
            "tiren",
            "Ojalá + subjuntivo: tirar → tiren (verbo en -ar, cambia a -e). «Tiran» sería indicativo y aquí expresamos un deseo."
          ),
        ]
      ),
    ],
    [
      mt(
        "Relaciona cada problema con una solución.",
        [
          ["la contaminación del aire", "usar el transporte público"],
          ["la basura de plástico", "reciclar"],
          ["la deforestación", "plantar árboles"],
          ["la sequía", "ahorrar agua"],
        ],
        "Cada problema tiene su remedio lógico: menos coches para un aire más limpio, reciclar el plástico, plantar donde se cortaron árboles y ahorrar agua cuando no llueve."
      ),
      mc("¿Cuál no encaja?", ["el río", "el lago", "el mar", "el desierto"], 3, "El río, el lago y el mar tienen agua. El desierto es justo lo contrario: un lugar casi sin agua."),
      ms(
        "Fíjate en la terminación. ¿Qué sustantivos son femeninos?",
        ["inundación", "crecimiento", "reciclaje", "explotación"],
        [0, 3],
        "La inundación y la explotación terminan en -ción: femeninas. El crecimiento (-miento) y el reciclaje (-aje) son masculinos."
      ),
      fb("Completa.", "Es necesario que todos ___ agua. (ahorrar, nosotros)", "ahorremos", "Es necesario que + subjuntivo: ahorrar → ahorremos (-ar cambia a -e). «Ahorramos» sería un hecho, no una necesidad."),
      fb("Completa.", "Las especies en peligro de ___ necesitan protección.", "extinción", "Extinguir → la extinción (-ción, femenina). «En peligro de extinción» = endangered."),
      fb("Completa.", "Ojalá que el gobierno ___ más parques naturales. (crear)", "cree", "Ojalá + subjuntivo: crear → cree (la raíz cre- + la vocal contraria -e)."),
      toEs(
        "Es importante conservar los bosques.",
        "La conservación de los bosques es importante.",
        "Conservar → la conservación (-ción, femenina): el sustantivo pasa a ser el sujeto y el adjetivo «importante» concuerda con él.",
        ["Es importante la conservación de los bosques."],
        "Reescribe la frase con el sustantivo que sale del verbo «conservar»."
      ),
      toEs(
        "Espero que llueva este mes.",
        "Ojalá llueva este mes.",
        "Ojalá también va con subjuntivo, así que «llueva» no cambia; solo desaparece «espero que». Puedes decir «ojalá» u «ojalá que».",
        ["Ojalá que llueva este mes."],
        "Transforma la frase con ojalá."
      ),
      toEs(
        "El incendio forestal destruyó el bosque.",
        "Los incendios forestales destruyeron los bosques.",
        "Todo concuerda en plural: los incendios forestales (forestal → forestales) y el verbo destruyeron.",
        [],
        "Cambia al plural."
      ),
      toEs("«El contaminación del río es un problema grave.»", "La contaminación del río es un problema grave.", "Contaminación termina en -ción, y -ción es siempre femenina: la contaminación.", [], "Corrige la frase."),
      toEs("«Ojalá que el gobierno protege los parques.»", "Ojalá que el gobierno proteja los parques.", "Ojalá pide subjuntivo: proteger → proteja (g → j delante de a para conservar el sonido).", [], "Corrige la frase."),
      toEs("It's important that we recycle more.", "Es importante que reciclemos más.", "«Es importante que» → subjuntivo: reciclemos.", ["Es importante que nosotros reciclemos más."]),
      wo("Los incendios forestales han destruido miles de hectáreas.", "Pretérito perfecto: destruir → destruido (participio regular).", "Forest fires have destroyed thousands of hectares."),
      {
        type: "speak",
        prompt: "Dilo en español: I hope my children can still see the glaciers.",
        text: "Ojalá que mis hijos todavía puedan ver los glaciares.",
        explanation: "Ojalá + subjuntivo: poder → puedan (o → ue). «Todavía» va delante del verbo.",
      },
    ]
  ),
  L(
    "b1-vocabulary-practice-10",
    "b1r-word-web-kitchen",
    "Red de palabras: la cocina",
    "Utensilios, verbos de cocina y alimentos — y recetas con mandatos de tú y usted.",
    "7 min",
    [
      sec(
        "La idea: el utensilio se nombra por lo que hace",
        [
          "Muchos utensilios y aparatos de cocina salen del verbo de su acción. Raíz del verbo + -dor / -dora: rallar → el rallador, batir → la batidora, exprimir → el exprimidor. Si conoces la acción, puedes adivinar el nombre del aparato.",
          "Otro molde muy español: verbo + objeto en plural = una herramienta masculina y singular: abrir + latas → el abrelatas, sacar + corchos → el sacacorchos. Y al revés, a veces el verbo sale del lugar: el horno → hornear.",
        ],
        [
          ["Ralla el queso con el rallador.", "Grate the cheese with the grater. (rallar → rallador)"],
          ["Bate la nata con la batidora.", "Whip the cream with the mixer. (batir → batidora)"],
          ["¿Dónde está el abrelatas?", "Where's the can opener? (abre + latas: masculino singular)"],
          ["Fríe los huevos en la sartén.", "Fry the eggs in the frying pan. (la sartén es femenina)"],
          ["Hornea el pescado veinte minutos.", "Bake the fish for twenty minutes. (el horno → hornear)"],
        ],
        [
          mc(
            "¿Cómo se llama el aparato que sirve para tostar el pan?",
            ["la tostadora", "el tostamiento", "la tostación", "el tostapán"],
            0,
            "Tostar → la tostadora: raíz del verbo + -dora para un aparato. -miento y -ción forman nombres de acciones, no de objetos; «tostapán» no existe."
          ),
          mt(
            "Relaciona cada utensilio con su acción.",
            [
              ["la sartén", "freír"],
              ["el horno", "hornear"],
              ["el exprimidor", "exprimir"],
              ["el cuchillo", "cortar"],
            ],
            "El exprimidor sale de exprimir (-dor). La sartén y el cuchillo no siguen el molde, así que se aprenden de memoria: con la sartén se fríe y con el cuchillo se corta."
          ),
        ]
      ),
      sec(
        "Las recetas usan el imperativo",
        [
          "Una receta da instrucciones: imperativo de tú (pica, fríe, añade) o de usted (pique, fría, añada). En negativo, tú usa el subjuntivo: no quemes, no abras.",
          "Los pronombres van pegados al imperativo afirmativo y delante del negativo: córtalas / no las cortes.",
        ],
        [
          ["Hierve el agua en una olla grande.", "Boil the water in a big pot. (tú: hierve, e → ie)"],
          ["Pele las zanahorias y córtelas en rodajas.", "Peel the carrots and slice them. (usted: pele, córtelas)"],
          ["No sales la carne todavía.", "Don't salt the meat yet. (negativo de tú = subjuntivo)"],
        ],
        [
          fb("Completa la receta (tú).", "___ la mantequilla en una sartén. (derretir)", "Derrite", "Imperativo de tú de derretir: derrite (como la 3.ª persona del presente, sin cambio de raíz)."),
        ]
      ),
    ],
    [
      mc("¿Cuál no encaja?", ["pelar", "trocear", "picar", "fregar"], 3, "Pelar, trocear y picar son formas de preparar alimentos. Fregar es lavar los platos."),
      ms(
        "Aplica el molde verbo + objeto. ¿Qué palabras nombran una herramienta?",
        ["el sacacorchos", "el abrebotellas", "el pelapatatas", "la sacacorchos"],
        [0, 1, 2],
        "Sacacorchos, abrebotellas y pelapatatas siguen el molde verbo + plural, y estas palabras son masculinas: el sacacorchos. «La sacacorchos» tiene mal el artículo."
      ),
      fb("Completa la receta (tú).", "___ la cebolla muy fina. (picar)", "Pica", "Mandato afirmativo de tú = 3.ª persona del presente: pica."),
      fb("Completa la receta (usted).", "___ el horno a 200 grados. (precalentar)", "Precaliente", "Usted usa la forma del subjuntivo: precalentar (e → ie) → precaliente."),
      fb("Completa.", "Añade una ___ de sal. (a pinch)", "pizca", "Una pizca = a pinch, la cantidad que coges con dos dedos."),
      ms(
        "¿Qué verbos se usan con huevos?",
        ["batir", "freír", "cocer", "colgar"],
        [0, 1, 2],
        "Los huevos se baten, se fríen o se cuecen. «Colgar» (to hang) no tiene nada que ver con cocinar."
      ),
      toEs(
        "Pica la cebolla y fríela despacio.",
        "Pique la cebolla y fríala despacio.",
        "De tú a usted: pica → pique (c → qu delante de e), fríe → fría; el pronombre sigue pegado: fríala.",
        [],
        "Cambia la receta a usted."
      ),
      toEs(
        "Corta el pan en rebanadas.",
        "No cortes el pan en rebanadas.",
        "El negativo de tú usa el subjuntivo: corta → no cortes.",
        [],
        "Cambia al negativo."
      ),
      toEs("«Usa la batidor para la nata.»", "Usa la batidora para la nata.", "Los aparatos en -dora son femeninos (la batidora); el rallador o el exprimidor son masculinos. Batidor sin -a sería otro utensilio (el batidor de varillas), y no va con «la».", [], "Corrige la frase."),
      toEs("«No echas más sal a la salsa.»", "No eches más sal a la salsa.", "Un mandato negativo de tú usa el subjuntivo: echar → no eches. «Echas» es indicativo: describe, no ordena.", ["No le eches más sal a la salsa."], "Corrige la frase."),
      toEs("Don't burn the rice! (tú)", "¡No quemes el arroz!", "Negativo de tú → subjuntivo; quemar → quemes.", ["¡No se te queme el arroz!"]),
      wo("Sirve la sopa caliente con un poco de perejil.", "Mandato de tú (servir → sirve, e → i).", "Serve the soup hot with a little parsley."),
      {
        type: "speak",
        prompt: "Dilo en español (a un amigo): Squeeze two oranges with the juicer and add the juice to the cake.",
        text: "Exprime dos naranjas con el exprimidor y añade el zumo al bizcocho.",
        explanation: "Exprimir → exprime (tú) y el aparato es el exprimidor (-dor). En América se dice también «el jugo» y «el pastel».",
      },
    ]
  ),
  L(
    "b1-vocabulary-practice-10",
    "b1r-word-web-money",
    "Red de palabras: el dinero y las finanzas",
    "Ahorrar, gastar, pedir un préstamo — el vocabulario del dinero con el condicional y el subjuntivo.",
    "8 min",
    [
      sec(
        "La idea: cada verbo tiene su pareja, según quién da el dinero",
        [
          "El dinero siempre pasa de una persona a otra, y el español tiene un verbo para cada lado. Quien da: prestar (to lend), pagar (to pay). Quien recibe: pedir prestado (to borrow), cobrar (to get paid / to charge). Pregúntate siempre: ¿el sujeto da o recibe?",
          "Los otros verbos básicos: ahorrar (to save), gastar (to spend), deber (to owe), invertir (to invest), ganar (to earn).",
        ],
        [
          ["Mi hermano me prestó cien euros.", "My brother lent me a hundred euros. (él da: prestar)"],
          ["Le pedí prestados cien euros a mi hermano.", "I borrowed a hundred euros from my brother. (yo recibo: pedir prestado)"],
          ["Cobro el día treinta de cada mes.", "I get paid on the 30th of each month. (yo recibo: cobrar)"],
          ["El fontanero me cobró ochenta euros.", "The plumber charged me eighty euros. (él recibe, yo pago)"],
          ["Le debo cincuenta euros a mi hermano.", "I owe my brother fifty euros."],
        ],
        [
          mc(
            "«I borrowed my neighbour's ladder.» ¿Qué verbo necesitas?",
            ["Le pedí prestada la escalera a mi vecino.", "Le presté la escalera a mi vecino.", "Mi vecino pidió prestada la escalera.", "Le cobré la escalera a mi vecino."],
            0,
            "Yo recibo la escalera, así que es pedir prestado (y «prestada» concuerda con «la escalera»). «Le presté» significa que yo la di: es el lado contrario."
          ),
        ]
      ),
      sec(
        "Del verbo al sustantivo: -o, -ión",
        [
          "Muchos nombres del dinero son la raíz del verbo + -o, y son masculinos: ahorrar → el ahorro, gastar → el gasto, pagar → el pago, cobrar → el cobro. Prestar da el préstamo. Invertir da la inversión (-ión, femenina).",
        ],
        [
          ["Este mes los gastos han sido enormes.", "This month expenses have been huge. (gastar → el gasto)"],
          ["El banco nos ha concedido un préstamo.", "The bank has granted us a loan. (prestar → el préstamo)"],
        ],
        [
          fb("Completa con el sustantivo de «cambiar».", "¿Dónde puedo hacer el ___ de dólares a euros?", "cambio", "Cambiar → el cambio: raíz + -o, masculino, como el gasto o el pago."),
        ]
      ),
    ],
    [
      mt(
        "Relaciona cada verbo con su significado.",
        [
          ["cobrar", "to charge / get paid"],
          ["invertir", "to invest"],
          ["gastar", "to spend"],
          ["deber", "to owe"],
        ],
        "Cobrar es recibir dinero (tu sueldo) o pedirlo por un servicio; gastar es usarlo; deber es tener una deuda; invertir es ponerlo a trabajar."
      ),
      mc("¿Cuál no encaja?", ["la tarjeta", "el efectivo", "el cheque", "el cajero"], 3, "La tarjeta, el efectivo y el cheque son formas de pago. El cajero es la máquina (o la persona) donde se saca o se paga el dinero."),
      mc(
        "¿Qué sustantivo sale de «depositar»?",
        ["el depósito", "la depositación", "el depositamiento", "la depósita"],
        0,
        "Depositar → el depósito, el mismo molde raíz + -o que el ahorro o el gasto. Las otras formas no existen."
      ),
      fb("Completa.", "Con un millón de euros, yo ___ en una casa. (invertir, condicional)", "invertiría", "Condicional regular: infinitivo + -ía → invertiría. Se usa para una situación imaginaria."),
      fb("Completa.", "¿Me ___ diez euros hasta mañana? (prestar, tú, presente)", "prestas", "Tú me das el dinero, así que es prestar; en una petición informal: ¿me prestas?"),
      fb("Completa.", "El banco me ___ una comisión por sacar dinero. (cobrar, pretérito)", "cobró", "El banco recibe el dinero, yo lo pago: el banco me cobró."),
      toEs(
        "Mi amiga me prestó su coche.",
        "Le pedí prestado el coche a mi amiga.",
        "Ahora el sujeto (yo) recibe, así que cambia el verbo: prestar → pedir prestado. La amiga pasa a ser «le... a mi amiga».",
        ["Le pedí prestado su coche a mi amiga.", "Le pedí el coche prestado a mi amiga.", "Le pedí prestado el carro a mi amiga."],
        "Reescribe la frase desde el punto de vista de «yo» (empieza con «Le pedí...»)."
      ),
      toEs(
        "Ahorro mucho, pero gasto poco en ropa.",
        "Ahorraría mucho, pero gastaría poco en ropa.",
        "Condicional regular: infinitivo + -ía (ahorraría, gastaría). Pasa de un hecho a algo imaginado.",
        [],
        "Cambia los verbos al condicional."
      ),
      toEs("«Mi padre me pidió prestado dinero para el coche, y ahora le debo mil euros.»", "Mi padre me prestó dinero para el coche, y ahora le debo mil euros.", "Si yo le debo dinero a mi padre, él me lo dio: él me prestó. «Me pidió prestado» diría que él lo recibió de mí.", ["Mi padre me prestó dinero para el carro, y ahora le debo mil euros."], "Corrige la frase."),
      ms(
        "¿Qué frases son correctas?",
        ["¿Puedo pagar con tarjeta?", "Pedí prestado dinero a mi padre.", "Tengo que ahorrar para el verano.", "Me prestó dinero de mí."],
        [0, 1, 2],
        "«Me prestó dinero de mí» es incorrecta: me ya indica a quién, así que sobra «de mí». Las otras frases usan bien pagar con, pedir prestado y tener que."
      ),
      toEs("I would save more, but everything is very expensive.", "Ahorraría más, pero todo es muy caro.", "Condicional para lo que harías + presente para la realidad.", ["Ahorraría más pero todo es muy caro.", "Yo ahorraría más, pero todo es muy caro."]),
      wo("Es mejor que no gastes todo tu sueldo.", "Es mejor que + subjuntivo: gastar → gastes.", "It's better if you don't spend your whole salary."),
    ]
  ),
  L(
    "b1-vocabulary-practice-10",
    "b1r-word-web-education",
    "Red de palabras: la educación",
    "Asignaturas, exámenes, notas y títulos — la vida estudiantil con condiciones y consejos.",
    "8 min",
    [
      sec(
        "La idea: en la escuela hay muchos falsos amigos",
        [
          "Las palabras de estudios se parecen al inglés pero muchas no significan lo mismo. el colegio = school (no college), la carrera = degree course (estudiar una carrera), la asignatura = school subject (no «sujeto»), la nota = grade, el título = degree / diploma, la facultad = university faculty.",
          "Y los verbos van sin preposición: aprobar un examen (to pass), suspender un examen (to fail; en América también reprobar), sacar una nota (to get a grade). No digas «pasar el examen» ni «fallar el examen».",
        ],
        [
          ["Mi hija va al colegio en autobús.", "My daughter goes to school by bus. (colegio = school, no college)"],
          ["Estudió la carrera de Derecho en Salamanca.", "She did a law degree in Salamanca. (carrera = degree course)"],
          ["He aprobado todas las asignaturas menos una.", "I've passed every subject but one. (aprobar + objeto, sin preposición)"],
          ["Me dieron una beca para el máster.", "They gave me a scholarship for the master's."],
        ],
        [
          mc(
            "«My son is in his third year at university.» ¿Qué frase es correcta?",
            ["Mi hijo está en tercero de carrera.", "Mi hijo está en tercero de colegio.", "Mi hijo está en tercero de asignatura.", "Mi hijo está en tercero de nota."],
            0,
            "La carrera es el estudio universitario: estar en tercero de carrera. El colegio es la escuela de niños, así que esa opción describiría a un niño, no a un universitario."
          ),
          mt(
            "Relaciona cada palabra con su significado.",
            [
              ["suspender", "to fail"],
              ["la beca", "scholarship"],
              ["matricularse", "to enroll"],
              ["la asignatura", "subject"],
            ],
            "Suspender (no «fallar») es no aprobar; la asignatura es la materia (no «sujeto»); matricularse es pronominal: me matriculo."
          ),
        ]
      ),
      sec(
        "Condiciones y consejos de estudiante",
        [
          "Para hablar de resultados posibles: si + presente, futuro (si estudias, aprobarás). Para consejos o deseos de otra persona: querer / recomendar que + subjuntivo (quiero que repases).",
        ],
        [
          ["Si estudias, aprobarás.", "If you study, you'll pass."],
          ["El tutor me recomienda que repase los apuntes cada día.", "My tutor recommends that I review my notes every day. (recomendar que + subjuntivo)"],
        ],
        [
          fb("Completa.", "Si ___ un nueve en el examen final, tendré matrícula de honor. (sacar, yo)", "saco", "Después de si va presente, nunca futuro: si saco."),
        ]
      ),
    ],
    [
      mc("¿Cuál no encaja?", ["la matrícula", "el examen", "la nota", "la receta"], 3, "La matrícula, el examen y la nota son del mundo de la educación. La receta es de la cocina o del médico."),
      mc(
        "«I'm studying for a degree in Biology.»",
        ["Estudio la carrera de Biología.", "Estudio el colegio de Biología.", "Estudio el título de Biología.", "Estudio la asignatura de colegio."],
        0,
        "Estudiar una carrera = to study for a degree. El título es el papel que recibes al terminarla, no lo que estudias."
      ),
      fb("Completa.", "Si no estudias, ___ el examen. (suspender, futuro)", "suspenderás", "Si + presente, futuro: suspenderás. Suspender lleva el objeto directo, sin preposición."),
      fb("Completa.", "Mi profesora quiere que ___ el trabajo antes del viernes. (entregar, nosotros)", "entreguemos", "Querer que + subjuntivo; g → gu delante de e para mantener el sonido: entreguemos."),
      { ...fb("Completa.", "Este año he ___ un diez en matemáticas. (sacar)", "sacado", "Sacar una nota = to get a grade; pretérito perfecto: he sacado."), altAnswers: ["obtenido", "conseguido"] },
      toEs(
        "He suspendido dos asignaturas.",
        "He aprobado dos asignaturas.",
        "Aprobar es lo contrario de suspender, y los dos llevan el objeto directo sin preposición.",
        [],
        "Cambia la frase al resultado contrario."
      ),
      toEs(
        "Estudia más.",
        "Te recomiendo que estudies más.",
        "Recomendar que + otra persona + subjuntivo: estudia → que estudies.",
        [],
        "Transforma el mandato en un consejo con «Te recomiendo que...»."
      ),
      toEs("«Mi hermano ha pasado el examen de conducir y ha fallado el de historia.»", "Mi hermano ha aprobado el examen de conducir y ha suspendido el de historia.", "Con exámenes se dice aprobar (to pass) y suspender (to fail). «Pasar» y «fallar» son calcos del inglés.", ["Mi hermano ha aprobado el examen de conducir y ha reprobado el de historia."], "Corrige la frase."),
      toEs("«En el colegio de mi ciudad estudio la carrera de Medicina.»", "En la universidad de mi ciudad estudio la carrera de Medicina.", "El colegio es la escuela de niños. Una carrera se estudia en la universidad (o en una facultad).", ["En la facultad de mi ciudad estudio la carrera de Medicina."], "Corrige la frase."),
      ms(
        "¿Qué frases son correctas?",
        ["Aprobé todas las asignaturas.", "Me matriculé en tres cursos.", "Saqué una nota muy alta.", "Suspendí el examen de bueno."],
        [0, 1, 2],
        "«Suspendí el examen de bueno» no tiene sentido: «de bueno» no es una expresión posible aquí. Aprobar, matricularse y sacar una nota están bien usados."
      ),
      toEs("If you (tú) get a scholarship, you will study in Madrid.", "Si consigues una beca, estudiarás en Madrid.", "Si + presente (consigues) + futuro (estudiarás).", ["Si te dan una beca, estudiarás en Madrid.", "Si obtienes una beca, estudiarás en Madrid."]),
      wo("Nunca había sacado tan buena nota en química.", "Pluscuamperfecto + tan + adjetivo.", "I had never gotten such a good grade in chemistry."),
    ]
  ),
  L(
    "b1-vocabulary-practice-10",
    "b1r-word-web-life-experiences",
    "Red de palabras: experiencias de vida",
    "Logros, primeras veces y momentos clave — en pretérito perfecto y pluscuamperfecto.",
    "8 min",
    [
      sec(
        "La idea: estos verbos traen su preposición (y a veces su pronombre)",
        [
          "Muchos verbos de experiencias van siempre con la misma preposición, y se aprenden en bloque: atreverse a, acostumbrarse a, enamorarse de, arrepentirse de, darse cuenta de, soñar con. Delante de un infinitivo o de un sustantivo la preposición no desaparece: me atreví a saltar, sueño con ese viaje.",
          "Los que llevan -se son pronominales: el pronombre cambia con la persona (me atreví, te has atrevido, se arrepintió) y va delante del verbo conjugado, también delante de haber: nunca me había atrevido.",
        ],
        [
          ["Nunca me había atrevido a saltar en paracaídas.", "I had never dared to go skydiving. (atreverse a; me delante de había)"],
          ["Mi abuela soñaba con conocer el mar.", "My grandmother dreamed of seeing the sea. (soñar con, no «soñar de»)"],
          ["Al final me acostumbré a vivir sola.", "In the end I got used to living alone. (acostumbrarse a)"],
          ["Se dio cuenta de su error demasiado tarde.", "He realised his mistake too late. (darse cuenta de)"],
        ],
        [
          mc(
            "«She has never regretted leaving.» ¿Qué frase es correcta?",
            ["Nunca se ha arrepentido de irse.", "Nunca ha arrepentido de irse.", "Nunca se ha arrepentido irse.", "Nunca se ha arrepentido a irse."],
            0,
            "Arrepentirse es pronominal (se ha arrepentido) y lleva siempre de. Sin «se», o sin «de», o con «a», la frase está mal."
          ),
          fb("Completa con la preposición.", "Me enamoré ___ esta ciudad el primer día.", "de", "Enamorarse de: la preposición va con el verbo, como darse cuenta de o arrepentirse de."),
        ]
      ),
      sec(
        "Logros y primeras veces",
        [
          "Lograr / conseguir (to achieve), cumplir un sueño (to fulfill a dream), superar un miedo (to overcome a fear), valer la pena (to be worth it). Un logro que llega hasta hoy va en pretérito perfecto (he cumplido); algo anterior a otro pasado, en pluscuamperfecto (nunca había estado).",
        ],
        [
          ["Por fin he cumplido mi sueño de viajar a Japón.", "I've finally fulfilled my dream of traveling to Japan."],
          ["Antes de los treinta, nunca había vivido fuera de casa.", "Before I was thirty, I had never lived away from home. (anterior a otro pasado)"],
        ],
        [
          fb("Completa.", "Este año he ___ mi miedo a volar. (superar)", "superado", "Pretérito perfecto: he + participio regular (superar → superado)."),
        ]
      ),
    ],
    [
      mt(
        "Relaciona cada expresión con su significado.",
        [
          ["cumplir un sueño", "to fulfill a dream"],
          ["atreverse a", "to dare to"],
          ["lograr", "to achieve"],
          ["valer la pena", "to be worth it"],
        ],
        "Se aprenden en bloque: cumplir un sueño (no «realizar» en este sentido), atreverse siempre con a, valer la pena con valer conjugado (valió la pena)."
      ),
      mc("¿Cuál no encaja?", ["lograr", "conseguir", "alcanzar", "fracasar"], 3, "Lograr, conseguir y alcanzar significan obtener lo que buscas. Fracasar es lo contrario: no lograrlo."),
      ms(
        "¿Qué frases usan bien la preposición?",
        ["Por fin me he acostumbrado al horario.", "Sueño con correr un maratón.", "No me di cuenta que era tarde.", "Me atreví de hablar con ella."],
        [0, 1],
        "Acostumbrarse a (a + el = al) y soñar con están bien. Darse cuenta lleva de (me di cuenta de que era tarde) y atreverse lleva a (me atreví a hablar)."
      ),
      fb("Completa.", "¿Alguna vez te has ___ a cantar en público? (atreverse)", "atrevido", "Atreverse → te has atrevido: el pronombre te va delante de has y la a se queda."),
      fb("Completa.", "Fue la primera vez que ___ un maratón. (correr, yo, pretérito)", "corrí", "La primera vez que + pretérito indefinido: un momento concreto y terminado."),
      fb("Completa.", "Antes de ese viaje, nunca ___ fuera de mi país. (estar, pluscuamperfecto)", "había estado", "Pluscuamperfecto (había + participio): la experiencia es anterior a otro pasado, «ese viaje»."),
      toEs(
        "Me atrevo a viajar sola.",
        "Me atreví a viajar sola.",
        "Al pasar al indefinido, el pronombre me y la preposición a no cambian: solo cambia el verbo (atrevo → atreví).",
        [],
        "Cambia al pretérito indefinido."
      ),
      toEs(
        "Mi hermano se arrepiente de su decisión.",
        "Mis hermanos se arrepienten de su decisión.",
        "En plural cambia el verbo (arrepiente → arrepienten); se y de se quedan igual.",
        ["Mis hermanos se arrepienten de sus decisiones."],
        "Cambia al plural (mis hermanos)."
      ),
      toEs("«Nunca había atrevido a bucear.»", "Nunca me había atrevido a bucear.", "Atreverse es pronominal: falta me, que va delante de había.", [], "Corrige la frase."),
      toEs("«Siempre he soñado de vivir en una isla.»", "Siempre he soñado con vivir en una isla.", "En español se sueña con algo, no «de»: soñar con.", [], "Corrige la frase."),
      toEs("It was worth it.", "Valió la pena.", "Valer la pena = to be worth it; pretérito para una experiencia terminada.", ["Mereció la pena.", "Ha valido la pena.", "Ha merecido la pena."]),
      wo("Aprender a nadar de adulto ha sido mi mayor logro.", "Infinitivo como sujeto + pretérito perfecto.", "Learning to swim as an adult has been my biggest achievement."),
      {
        type: "speak",
        prompt: "Dilo en español: When I arrived in Mexico, I quickly got used to spicy food.",
        text: "Cuando llegué a México, me acostumbré rápido a la comida picante.",
        explanation: "Acostumbrarse a + sustantivo: me acostumbré a la comida. Indefinido para hechos terminados (llegué, me acostumbré).",
      },
    ]
  ),
  L(
    "b1-vocabulary-practice-10",
    "b1r-word-web-news",
    "Red de palabras: noticias y sucesos",
    "Accidentes, robos, elecciones y catástrofes — el vocabulario de las noticias con la pasiva.",
    "8 min",
    [
      sec(
        "La idea: en las noticias, el participio concuerda con lo que le pasa",
        [
          "Las noticias ponen delante lo que ha ocurrido y a quién, no quién lo hizo. Por eso usan la pasiva: ser + participio (el ladrón fue detenido). El participio funciona como un adjetivo y concuerda en género y número con el sujeto: detenido, detenida, detenidos, detenidas.",
          "Los titulares quitan incluso el verbo: «Detenido un hombre...», «Heridas tres personas...». El participio sigue concordando, ahora con el sustantivo que viene detrás.",
        ],
        [
          ["Detenido un hombre por robar en una joyería.", "Man arrested for robbing a jewelry store. (titular: detenido concuerda con un hombre)"],
          ["Las joyas fueron encontradas en un coche.", "The jewels were found in a car. (encontradas: femenino plural, como las joyas)"],
          ["Tres personas resultaron heridas en el accidente.", "Three people were injured in the accident. (personas → heridas)"],
          ["El paro ha bajado un dos por ciento.", "Unemployment has dropped by two percent. (sin pasiva: el paro es el sujeto que actúa)"],
        ],
        [
          mc(
            "Titular: «___ dos ciclistas en un accidente en la autopista.»",
            ["Heridos", "Herido", "Herida", "Heridas"],
            0,
            "El participio del titular concuerda con «dos ciclistas»: masculino plural, heridos (si fueran dos mujeres, heridas). «Herido» solo vale para uno."
          ),
          fb("Completa con el participio de «cerrar».", "La autopista fue ___ por la nieve.", "cerrada", "Pasiva con ser: el participio concuerda con la autopista (femenino singular): cerrada."),
        ]
      ),
      sec(
        "Secciones del periódico",
        [
          "Sucesos (accidentes, robos, incendios), política (elecciones, el gobierno), economía (la crisis, el paro), deportes y cultura. Muchas palabras de sucesos salen de un verbo: robar → el robo, herir → el herido, atracar → el atraco, inundar → la inundación.",
        ],
        [
          ["El incendio fue provocado, según la policía.", "The fire was started deliberately, according to the police."],
          ["Se han convocado elecciones para marzo.", "Elections have been called for March. (se pasivo: concuerda con elecciones)"],
        ],
        [
          ms(
            "¿Qué palabras pertenecen a la sección de sucesos?",
            ["el atraco", "el incendio", "las elecciones", "el accidente"],
            [0, 1, 3],
            "El atraco, el incendio y el accidente son sucesos. Las elecciones pertenecen a la sección de política."
          ),
        ]
      ),
    ],
    [
      mt(
        "Relaciona cada palabra con su significado.",
        [
          ["el paro", "unemployment"],
          ["el atraco", "robbery / hold-up"],
          ["el herido", "injured person"],
          ["el testigo", "witness"],
        ],
        "El herido sale de herir y el atraco de atracar. El paro (en América, el desempleo) y el testigo se aprenden de memoria."
      ),
      mc("¿Cuál no encaja?", ["el terremoto", "la inundación", "el huracán", "el titular"], 3, "El terremoto, la inundación y el huracán son catástrofes naturales. El titular es el título de una noticia."),
      { ...fb("Completa (injured).", "Tres niñas resultaron ___ leves en el parque.", "heridas", "«Resultar herido» concuerda con el sujeto: tres niñas → heridas (femenino plural)."), altAnswers: ["lesionadas"] },
      fb("Completa.", "El ladrón fue ___ por la policía. (detener)", "detenido", "Pasiva con ser: detener → detenido, masculino singular como el ladrón."),
      fb("Completa.", "Se ___ las elecciones para noviembre. (convocar, pretérito)", "convocaron", "Se pasivo: el verbo concuerda con las elecciones (plural): se convocaron."),
      toEs(
        "La policía detuvo a dos sospechosas.",
        "Dos sospechosas fueron detenidas por la policía.",
        "En pasiva, lo que recibe la acción pasa a sujeto y el participio concuerda con él: dos sospechosas → detenidas. Quien lo hace va con por.",
        ["Dos sospechosas fueron detenidas."],
        "Reescribe en pasiva con ser (empieza por «Dos sospechosas...»)."
      ),
      toEs(
        "El museo fue robado anoche.",
        "Los museos fueron robados anoche.",
        "En plural cambian el verbo ser (fue → fueron) y el participio (robado → robados).",
        [],
        "Cambia al plural."
      ),
      toEs("«La nueva ley fue aprobado ayer por el Parlamento.»", "La nueva ley fue aprobada ayer por el Parlamento.", "El participio de la pasiva concuerda con el sujeto: la ley es femenina, así que aprobada.", [], "Corrige la frase."),
      toEs("«Evacuados cien familias por la inundación.»", "Evacuadas cien familias por la inundación.", "En el titular el participio concuerda con el sustantivo que sigue: familias es femenino plural → evacuadas.", [], "Corrige el titular."),
      toEs("According to the witnesses, the driver had been drinking.", "Según los testigos, el conductor había bebido.", "El conductor bebió antes del accidente: pluscuamperfecto, había bebido.", ["Según los testigos, el conductor había estado bebiendo."]),
      wo("La inundación ha obligado a evacuar a cien familias.", "Obligar a + infinitivo; a personal delante de cien familias.", "The flood has forced a hundred families to evacuate."),
      {
        type: "speak",
        prompt: "Dilo en español como un titular de periódico (sin verbo): Two women injured in a fire in the city centre.",
        text: "Heridas dos mujeres en un incendio en el centro de la ciudad.",
        explanation: "Titular sin verbo: el participio va delante y concuerda con dos mujeres (heridas).",
      },
    ]
  ),
  L(
    "b1-vocabulary-practice-10",
    "b1r-word-web-city",
    "Red de palabras: la ciudad",
    "Calles, edificios y servicios — describe tu ciudad con relativas.",
    "8 min",
    [
      sec(
        "La idea: el núcleo va primero, y de une las palabras",
        [
          "El inglés pone el sustantivo principal al final (bus stop, pedestrian crossing). El español lo pone primero y añade el detalle con de: la parada de autobús, el paso de peatones, la estación de tren. El artículo y el género los decide la primera palabra: el paso (de peatones), la parada (de autobús).",
          "Por eso puedes formar palabras nuevas: pregúntate qué cosa es (una parada, una zona, una estación) y luego para qué o de qué es.",
        ],
        [
          ["El paso de peatones está junto al semáforo.", "The crosswalk is next to the traffic light. (paso = el núcleo; de peatones = el detalle)"],
          ["Espérame en la parada de autobús.", "Wait for me at the bus stop. (la parada, femenino)"],
          ["El casco antiguo es zona peatonal.", "The old town is a pedestrian zone. (zona peatonal: aquí el detalle es un adjetivo)"],
          ["El ayuntamiento está en la plaza mayor.", "City hall is on the main square."],
        ],
        [
          mc(
            "¿Cómo se dice «taxi rank»?",
            ["la parada de taxis", "el taxi de parada", "la taxi parada", "el parada de taxis"],
            0,
            "El núcleo es la parada (lo que es) y va primero; de taxis añade el detalle. El artículo lo pone parada: la parada. «El taxi de parada» invierte el orden inglés."
          ),
          fb("Completa con la palabra que falta.", "Aparca en el ___ de bicicletas, delante de la biblioteca.", "aparcamiento", "Bike park = el aparcamiento de bicicletas: núcleo (aparcamiento) + de + detalle. En América también se dice «el estacionamiento»."),
        ]
      ),
      sec(
        "Describe lugares con relativos",
        [
          "Para decir qué hay en un lugar usamos donde (o en el que / en la que): el barrio donde vivo. Para identificar una cosa, que: el edificio que ves. En español el relativo nunca se puede quitar.",
        ],
        [
          ["Vivo en un barrio donde hay muchos parques.", "I live in a neighborhood where there are many parks."],
          ["Es el puente que cruzamos ayer.", "It's the bridge (that) we crossed yesterday. (que no se omite)"],
        ],
        [
          mt(
            "Relaciona cada palabra con su significado.",
            [
              ["la acera", "sidewalk"],
              ["el paso de peatones", "crosswalk"],
              ["la rotonda", "roundabout"],
              ["las afueras", "outskirts"],
            ],
            "Las afueras siempre va en plural; la rotonda se llama también glorieta; en México la acera es la banqueta."
          ),
        ]
      ),
    ],
    [
      mc("¿Cuál no encaja?", ["el semáforo", "la esquina", "la cuadra", "la almohada"], 3, "El semáforo, la esquina y la cuadra son de la calle. La almohada es de la cama."),
      ms(
        "Aplica el orden núcleo + de + detalle. ¿Qué expresiones están bien formadas?",
        ["la estación de metro", "el carril bici", "la de metro estación", "la oficina de turismo"],
        [0, 1, 3],
        "Estación de metro y oficina de turismo siguen el orden núcleo + de + detalle. «Carril bici» es una excepción fija sin de, pero el núcleo (carril) también va primero. «La de metro estación» sigue el orden inglés."
      ),
      { ...fb("Completa con un relativo.", "Es la plaza ___ nos conocimos.", "donde", "Para un lugar se usa «donde»: la plaza donde nos conocimos."), altAnswers: ["en la que", "en que"] },
      fb("Completa con un relativo.", "El puente ___ cruzamos es del siglo XV.", "que", "Sin preposición, el relativo es «que»: el puente que cruzamos. En español no se puede quitar."),
      fb("Completa.", "Cruza siempre por el ___ de peatones.", "paso", "El cruce para peatones se llama «el paso de peatones»: núcleo + de + detalle."),
      toEs(
        "En este barrio hay muchos bares.",
        "Este es el barrio donde hay muchos bares.",
        "Para unir un lugar con lo que hay en él se usa donde (o en el que).",
        ["Este es el barrio en el que hay muchos bares.", "Este es un barrio donde hay muchos bares.", "Este es un barrio en el que hay muchos bares."],
        "Reescribe la frase con «Este es el barrio donde...»."
      ),
      toEs(
        "Hay una parada de autobús en mi calle.",
        "Hay dos paradas de autobús en mi calle.",
        "En plural cambia solo el núcleo: la parada → las paradas; «de autobús» se queda igual, como en paradas de taxi o pasos de peatones.",
        [],
        "Cambia a «dos» paradas."
      ),
      toEs("«Te espero en la autobús parada.»", "Te espero en la parada de autobús.", "En español el núcleo va primero y el detalle se añade con de: la parada de autobús.", ["Te espero en la parada del autobús."], "Corrige la frase."),
      toEs("«La ciudad que nací es muy pequeña.»", "La ciudad donde nací es muy pequeña.", "La ciudad es el lugar en el que ocurre la acción (nací allí), así que hace falta donde o en la que; «que» solo no basta.", ["La ciudad en la que nací es muy pequeña.", "La ciudad en que nací es muy pequeña."], "Corrige la frase."),
      ms(
        "¿Qué frases describen bien una ciudad?",
        ["Tiene un casco antiguo precioso.", "Las afueras son más baratas que el centro.", "Hay mucho tráfico en hora punta.", "La acera cocina muy bien."],
        [0, 1, 2],
        "Casco antiguo, afueras y hora punta describen bien una ciudad. «La acera cocina muy bien» no tiene sentido: la acera es donde caminan los peatones."
      ),
      toEs("It's the street where the market is.", "Es la calle donde está el mercado.", "«Where» = donde, y la ubicación va con estar: donde está el mercado.", ["Es la calle en la que está el mercado.", "Es la calle en donde está el mercado."]),
      wo("En el centro histórico se prohíbe circular en coche.", "Se impersonal con prohibir: se prohíbe + infinitivo.", "Driving is prohibited in the historic center."),
    ]
  ),
  L(
    "b1-vocabulary-practice-10",
    "b1r-word-web-business",
    "Red de palabras: el mundo del trabajo",
    "Empresas, reuniones y contratos — el vocabulario profesional con la pasiva y los pronombres.",
    "8 min",
    [
      sec(
        "La idea: cada sustantivo tiene «su» verbo",
        [
          "En el trabajo, los sustantivos van con verbos fijos (colocaciones), y traducir palabra por palabra no funciona: firmar un contrato, cumplir un plazo (to meet a deadline), convocar una reunión (to call a meeting), pedir un aumento (to ask for a raise), presentar un informe.",
          "Muchos de estos sustantivos salen de un verbo: contratar → el contrato, despedir → el despido, ascender → el ascenso, jubilarse → la jubilación. Si conoces el verbo, reconoces el sustantivo.",
        ],
        [
          ["El contrato fue firmado ayer.", "The contract was signed yesterday. (firmar un contrato)"],
          ["No vamos a cumplir el plazo.", "We aren't going to meet the deadline. (cumplir, no «encontrar»)"],
          ["La jefa ha convocado una reunión urgente.", "The boss has called an urgent meeting. (convocar, no «llamar»)"],
          ["Después de diez años, pedí un aumento.", "After ten years, I asked for a raise."],
        ],
        [
          mc(
            "«We have to meet the deadline.»",
            ["Tenemos que cumplir el plazo.", "Tenemos que encontrar el plazo.", "Tenemos que conocer el plazo.", "Tenemos que reunir el plazo."],
            0,
            "Con plazo el verbo fijo es cumplir. «Encontrar» y «conocer» son calcos de meet; un plazo no se encuentra ni se conoce."
          ),
          mt(
            "Relaciona cada palabra con su significado.",
            [
              ["la plantilla", "staff"],
              ["el plazo", "deadline"],
              ["el ascenso", "promotion"],
              ["la jornada", "working day"],
            ],
            "El ascenso sale de ascender (subir de puesto). La plantilla es el conjunto de empleados, y la jornada es el horario de un día de trabajo."
          ),
        ]
      ),
      sec(
        "Contar lo que pasó: la pasiva y los pronombres",
        [
          "En la oficina se habla mucho de documentos: la pasiva pone el documento delante (el informe fue enviado) y los pronombres lo sustituyen (se lo envié: le + lo → se lo).",
        ],
        [
          ["Se lo mandé al cliente antes del plazo.", "I sent it to the client before the deadline. (le + lo → se lo)"],
          ["La propuesta fue rechazada por la dirección.", "The proposal was rejected by management. (rechazada concuerda con la propuesta)"],
        ],
        [
          fb("Completa.", "¿El presupuesto? Ya ___ lo envié al cliente.", "se", "Le + lo → se lo: le se convierte en se delante de lo, la, los, las."),
        ]
      ),
    ],
    [
      mc("¿Cuál no encaja?", ["el contrato", "la factura", "el presupuesto", "el paraguas"], 3, "El contrato, la factura y el presupuesto son documentos de negocios. El paraguas es un objeto para la lluvia."),
      mc(
        "¿Qué sustantivo sale de «despedir» (to fire)?",
        ["el despido", "la despedición", "el despedimiento", "la despida"],
        0,
        "Despedir → el despido (raíz + -o, como contratar → el contrato). Las otras formas no existen. Ojo: la despedida es decir adiós."
      ),
      fb("Completa.", "La reunión fue ___ para el jueves. (aplazar)", "aplazada", "Pasiva con ser: el participio concuerda con la reunión (femenino): aplazada."),
      fb("Completa.", "Trabajo a jornada ___: ocho horas al día.", "completa", "«Jornada completa» = full-time (frente a media jornada o jornada parcial)."),
      fb("Completa con el verbo adecuado.", "Mañana ___ el informe trimestral ante la dirección. (to present, yo)", "presento", "La colocación es presentar un informe; en presente con valor de futuro: presento."),
      toEs(
        "La directora firmó el contrato.",
        "El contrato fue firmado por la directora.",
        "En pasiva, el contrato pasa a sujeto y el participio concuerda con él (firmado); quien lo hace va con por.",
        [],
        "Reescribe en pasiva con ser (empieza por «El contrato...»)."
      ),
      toEs(
        "Le envié el informe a mi jefe.",
        "Se lo envié a mi jefe.",
        "El informe → lo; le + lo → se lo. «A mi jefe» puede quedarse para aclarar a quién.",
        ["Se lo envié."],
        "Sustituye «el informe» por un pronombre."
      ),
      toEs("«Ayer llamamos una reunión para hablar del despido.»", "Ayer convocamos una reunión para hablar del despido.", "Una reunión se convoca (to call a meeting). «Llamar» es telefonear o dar nombre, no se usa con reunión.", [], "Corrige la frase."),
      toEs("«¿La factura? Le la mandé esta mañana.»", "¿La factura? Se la mandé esta mañana.", "Le no puede ir delante de la: se convierte en se. Le + la → se la.", [], "Corrige la frase."),
      ms(
        "¿Qué frases son correctas?",
        ["Me han ofrecido un ascenso.", "Se necesitan nuevos empleados.", "Firmamos el contrato ayer.", "El plazo se termina ayer mañana."],
        [0, 1, 2],
        "«El plazo se termina ayer mañana» es contradictoria: ayer es pasado y mañana es futuro. Las otras frases usan bien el perfecto, el se pasivo y el indefinido."
      ),
      toEs("The company was founded in 1998.", "La empresa fue fundada en 1998.", "Pasiva con ser; también: La empresa se fundó en 1998.", ["La empresa se fundó en 1998."]),
      wo("Si terminamos antes del plazo, nos darán una prima.", "Si + presente + futuro.", "If we finish before the deadline, they'll give us a bonus."),
      {
        type: "speak",
        prompt: "Dilo en español: My colleague retired last month, and they haven't hired anyone yet.",
        text: "Mi compañero se jubiló el mes pasado y todavía no han contratado a nadie.",
        explanation: "Jubilarse es pronominal (se jubiló); contratar a + persona lleva a personal: no han contratado a nadie.",
      },
    ]
  ),
  L(
    "b1-comprehensive-review-3",
    "b1r-challenge-big-error-hunt",
    "Desafío B1: la gran caza de errores",
    "Empieza el desafío final del B1: detecta y corrige errores, y traduce frases, de todos los temas del nivel.",
    "9 min",
    [
      sec(
        "Recuerda la regla: busca el error por su causa",
        [
          "Casi todos los errores del B1 vienen de unas pocas decisiones. Repásalas en este orden para cada frase: ¿indicativo o subjuntivo? (hecho o deseo/duda/emoción) ¿mandato bien formado? (negativo = subjuntivo) ¿condicional o futuro? (hipótesis o plan) ¿perfecto, pretérito o pluscuamperfecto? (desde dónde se mira) ¿relativo correcto? (antecedente y preposición) ¿pronombres en orden? (persona antes que cosa; le → se) ¿se concordado? (con lo que se vende).",
          "Corregir no es adivinar: nombra la regla que se ha roto y la corrección sale sola.",
        ],
        [
          ["✗ Espero que vienes. → ✓ Espero que vengas.", "I hope you come."],
          ["✗ Le lo dije. → ✓ Se lo dije.", "I told him."],
        ],
        [
          mc(
            "«Si tendré tiempo, te llamaré.» ¿Qué falla?",
            ["Después de si va presente: si tengo tiempo.", "Te llamaré debería ser te llamaría.", "Tiempo debería ser el tiempo.", "Nada."],
            0,
            "Después de «si» condicional va el presente: si tengo tiempo, te llamaré. «Te llamaré» está bien (no hace falta el condicional), «tiempo» no necesita artículo y la frase sí tiene error."
          ),
          mc(
            "«La chica quien conocí es de Perú.» ¿Qué falla?",
            ["Sin preposición se usa que: la chica que conocí.", "Conocí debería ser conocía.", "Es debería ser está.", "Nada."],
            0,
            "Sin preposición ni coma se usa «que»: la chica que conocí. «Conocí» es correcto (un hecho puntual) y «es de Perú» usa bien ser para el origen."
          ),
        ]
      ),
    ],
    [
      fb("Corrige.", "No creo que ___ razón. (tener, él; el alumno escribió: tiene)", "tenga", "«No creer que» expresa duda → subjuntivo: tenga, no «tiene»."),
      fb("Corrige.", "¡No me ___ eso! (decir, tú; el alumno escribió: dices)", "digas", "Negativo de tú = subjuntivo: no me digas, no «dices»."),
      fb("Corrige.", "Ayer ___ a mis primos. (ver, yo; el alumno escribió: he visto)", "vi", "«Ayer» es un tiempo terminado: pretérito, vi. El perfecto «he visto» solo va con periodos abiertos (hoy, este año)."),
      fb("Corrige.", "Se ___ muchos pisos en esta zona. (construir, pretérito; el alumno escribió: construyó)", "construyeron", "Con se pasivo el verbo concuerda con «pisos» (plural): se construyeron."),
      ms(
        "¿Qué frases son correctas?",
        ["Me alegro de que hayas venido.", "Nunca había visto algo así.", "Sentaos, por favor.", "Te lo he dicho mil veces."],
        [0, 1, 2, 3],
        "Las cuatro son correctas: alegrarse de que + perfecto de subjuntivo, nunca había + participio, sentaos (vosotros, sin -d) y te lo delante de haber."
      ),
      mc(
        "¿Cuál NO tiene errores?",
        ["Es obvio que está cansado.", "Es obvio que esté cansado.", "Es posible que está cansado.", "Ojalá que está cansado."],
        0,
        "«Es obvio que» expresa certeza → indicativo: está cansado. «Es obvio que esté» usa subjuntivo, y «Es posible que está» y «Ojalá que está» necesitan subjuntivo (esté)."
      ),
      toEs("I would tell it to her, but I don't want her to get angry.", "Se lo diría, pero no quiero que se enfade.", "Hipótesis → condicional (diría); le + lo → se lo; «querer que» con otro sujeto → subjuntivo (se enfade).", ["Se lo diría, pero no quiero que se enoje.", "Yo se lo diría, pero no quiero que se enfade."]),
      wo("Lo que más me molesta es que nadie me haya avisado.", "«Lo que» abre la frase porque no hay sustantivo; una emoción (molestar que) sobre otro sujeto pide subjuntivo: haya avisado.", "What bothers me most is that nobody warned me."),
    ]
  ),
  L(
    "b1-comprehensive-review-3",
    "b1r-challenge-dialogue-marathon",
    "Desafío B1: maratón de diálogos",
    "Cuatro escenas seguidas: una entrevista, una queja, un consejo y una despedida.",
    "9 min",
    [
      sec(
        "Escena 1: la entrevista",
        [
          "Recuerda la regla: en cada escena, la situación decide la forma. En una entrevista, la experiencia se pregunta y se cuenta en pretérito perfecto (¿ha trabajado alguna vez?) y lo que harías en una situación imaginada, en condicional (¿qué haría…?). En una queja, las emociones y las peticiones a otros van en subjuntivo; en un consejo, «yo que tú» + condicional; en una despedida, los deseos con que / ojalá + subjuntivo.",
          "En el maratón no traduces las frases del diálogo: respondes, eliges la réplica adecuada y corriges lo que otro dice mal.",
        ],
        [
          ["—¿Ha trabajado alguna vez en atención al cliente? —Sí, he trabajado tres años en una tienda.", "Have you ever worked in customer service? — Yes, I've worked three years in a store."],
          ["—¿Qué haría con un cliente enfadado? —Lo escucharía con calma.", "What would you do with an angry customer? — I'd listen to him calmly."],
        ],
        [
          fb("Completa la respuesta.", "Después le ___ una solución rápida. (ofrecer, condicional)", "ofrecería", "La pregunta plantea una situación imaginada (¿qué haría?), así que la respuesta sigue en condicional: ofrecería."),
        ]
      ),
      sec(
        "Escena 2: la queja",
        "Emociones y peticiones con subjuntivo.",
        [
          ["—Me molesta mucho que el pedido no haya llegado.", "It really bothers me that the order hasn't arrived."],
          ["—Lo siento. Le prometo que se lo enviaremos mañana.", "I'm sorry. I promise we'll send it to you tomorrow."],
        ],
        [
          fb("Completa.", "Exijo que me ___ el dinero. (devolver, ustedes)", "devuelvan", "Exigir algo a otros es influir en lo que hacen: «exigir que» + subjuntivo, con el cambio o → ue de devolver: devuelvan."),
        ]
      ),
      sec(
        "Escena 3: el consejo",
        "Recomendaciones con subjuntivo y condicional.",
        [
          ["—No sé si aceptar el trabajo en Londres. —Yo que tú, lo aceptaría. Es importante que pienses en tu futuro.", "I don't know whether to take the job in London. — If I were you, I'd take it. It's important you think about your future."],
        ],
        [
          mc(
            "«Yo que tú, lo ___.»",
            ["aceptaría", "acepto", "acepte", "aceptaré"],
            0,
            "«Yo que tú» + condicional para aconsejar: lo aceptaría. «Acepto» es presente, «acepte» es subjuntivo y «aceptaré» es futuro."
          ),
        ]
      ),
    ],
    [
      mc(
        "Escena 4: la despedida. «¡Que te vaya muy bien!» significa…",
        ["All the best! Good luck!", "Go away!", "It went very well!", "Go well yesterday!"],
        0,
        "Que + subjuntivo expresa un deseo: ¡Que te vaya muy bien! = All the best! No significa «Go away!» (¡Vete!) ni habla del pasado."
      ),
      fb("Completa la despedida.", "Cuando ___ a Londres, mándame fotos. (llegar, tú)", "llegues", "«Cuando» habla de algo que todavía no ha pasado: subjuntivo, llegues (con -gu- para mantener el sonido)."),
      fb("Completa la despedida.", "Ojalá que nos ___ a ver pronto. (volver, nosotros)", "volvamos", "«Ojalá» siempre pide subjuntivo; en nosotros, volver no cambia la raíz: volvamos."),
      mt(
        "Relaciona cada frase con su respuesta.",
        [
          ["¿Has visto mis gafas?", "Sí, las he dejado en la mesa."],
          ["¿Me prestas tu coche?", "Sí, te lo presto."],
          ["¿Podrías ayudarme?", "Claro, ¿qué necesitas?"],
          ["Me han despedido.", "¡Cuánto siento que te hayan despedido!"],
        ],
        "Cada respuesta retoma la frase: las gafas → las he dejado; tu coche → te lo presto; ¿podrías ayudarme? → ¿qué necesitas?; y para una mala noticia, sentir que + perfecto de subjuntivo (te hayan despedido)."
      ),
      toEs("Call me (tú) when you get home.", "Llámame cuando llegues a casa.", "Cuando + subjuntivo para algo futuro: cuando llegues; mandato con pronombre pegado: llámame.", ["Llámame cuando llegues a tu casa.", "Llámame cuando estés en casa."]),
      wo("Me encantaría verte en mi boda el año que viene.", "El condicional (me encantaría) suaviza el deseo; el pronombre «te» se pega al infinitivo: verte.", "I'd love to see you at my wedding next year."),
    ]
  ),
  L(
    "b1-comprehensive-review-3",
    "b1r-challenge-translation-relay",
    "Desafío B1: relevo de traducción",
    "Traduce en las dos direcciones, un tema del B1 tras otro.",
    "9 min",
    [
      sec(
        "Recuerda la regla: traducir es decidir",
        [
          "Una traducción palabra por palabra falla justo donde el español decide algo que el inglés no marca. Antes de traducir, busca la trampa: «I want you to…» no es un infinitivo sino que + subjuntivo; «had + participio» es pluscuamperfecto; «it to him» son dos pronombres (se lo); «are sold» suele ser se + verbo concordado.",
          "En este relevo traduces en las dos direcciones, cambias frases de una forma a otra y corriges traducciones mal hechas.",
        ],
        [
          ["I want you to come. → Quiero que vengas.", "(want + different subject → subjuntivo)"],
          ["I had already eaten. → Ya había comido.", "(pluscuamperfecto)"],
        ],
        [
          toEs("I hope it doesn't rain tomorrow.", "Espero que no llueva mañana.", "«Esperar que» → subjuntivo; llover (o → ue): no llueva.", ["Ojalá que no llueva mañana.", "Ojalá no llueva mañana.", "Espero que mañana no llueva."]),
        ]
      ),
    ],
    [
      toEs("Don't tell it to them! (tú)", "¡No se lo digas!", "Negativo: pronombres delante (les → se + lo) + subjuntivo: no se lo digas.", ["¡No se lo cuentes!"]),
      toEs("The book that you (tú) lent me is fantastic.", "El libro que me prestaste es fantástico.", "Relativo que sin preposición + pretérito: el libro que me prestaste.", ["El libro que me dejaste es fantástico."]),
      toEs("Houses are sold here.", "Aquí se venden casas.", "Se pasivo concordando con «casas» (plural): se venden.", ["Se venden casas aquí."]),
      toEn("Si me necesitas, llámame.", "If you need me, call me.", "Si + presente + mandato: if you need me, call me.", ["Call me if you need me."]),
      toEn("No creo que lo sepa todavía.", "I don't think he knows yet.", "No creer que + subjuntivo = I don't think.", ["I don't think she knows yet.", "I don't believe he knows it yet."]),
      toEn("Cuando me desperté, mis padres ya habían salido de casa.", "When I woke up, my parents had already left home.", "Pretérito (me desperté) + pluscuamperfecto para lo anterior (habían salido) = had already left.", ["When I woke up, my parents had already left the house.", "When I woke up, my parents had already gone out."]),
      toEn("¿Te importaría cerrar la ventana?", "Would you mind closing the window?", "¿Te importaría + infinitivo? = Would you mind + -ing?", []),
    ]
  ),
  L(
    "b1-comprehensive-review-3",
    "b1r-challenge-build-a-sentence",
    "Desafío B1: construye la frase",
    "Frases largas del B1 con subjuntivo, pronombres dobles y relativos — pon cada pieza en su sitio.",
    "8 min",
    [
      sec(
        "Recuerda la regla: cada pieza tiene su sitio",
        [
          "Las frases largas del B1 se construyen uniendo cláusulas, y cada unión tiene sus reglas: principal de deseo, duda o emoción + que + subjuntivo; sustantivo + relativa (con la preposición delante); si + presente, y luego futuro, presente o imperativo. Dentro de cada cláusula, los pronombres van delante del verbo conjugado o pegados al infinitivo, gerundio o mandato afirmativo.",
        ],
        [
          ["Quiero que me expliques lo que pasó.", "I want you to explain to me what happened."],
          ["Si ves a la chica que trabaja aquí, dáselo.", "If you see the girl who works here, give it to her."],
        ],
        [
          wo("Es importante que le digas la verdad a tu madre.", "Es importante que + subjuntivo + le … a tu madre.", "It's important that you tell your mother the truth."),
        ]
      ),
    ],
    [
      wo("No creo que el restaurante que nos recomendaste esté abierto.", "«No creo que» expresa duda y pide subjuntivo (esté); la relativa sobre un restaurante concreto va en indicativo (recomendaste).", "I don't think the restaurant you recommended to us is open."),
      wo("Ya se lo había contado a mis padres cuando llamaste.", "Contarlo fue antes de la llamada: pluscuamperfecto, con «ya» y «se lo» delante de había.", "I had already told my parents when you called."),
      wo("Si tienes tiempo esta tarde, ¿me ayudarías con la mudanza?", "Si + presente para la condición; el condicional (ayudarías) hace la petición más cortés.", "If you have time this afternoon, would you help me with the move?"),
      wo("Ojalá que encontremos un piso que tenga terraza.", "Ojalá + subjuntivo; y la relativa también va en subjuntivo porque ese piso aún no existe para nosotros.", "I hope we find an apartment that has a terrace."),
      wo("Me alegro mucho de que por fin hayáis vuelto a casa.", "Una emoción sobre lo que han hecho otros: alegrarse de que + perfecto de subjuntivo (hayáis vuelto).", "I'm so glad you've finally come back home."),
      mc(
        "¿Qué frase está bien construida?",
        ["Dile que me lo traiga mañana.", "Dile que me lo trae mañana.", "Dile que lo me traiga mañana.", "Le di que me lo traiga mañana."],
        0,
        "Una orden indirecta: mandato + que + subjuntivo, con me lo delante: Dile que me lo traiga. «Trae» es indicativo, «lo me» invierte el orden y «Le di» es pasado de dar."
      ),
      { ...fb("Termina la frase.", "El chico con ___ salgo se llama Diego.", "quien", "Tras preposición, para personas: con quien."), altAnswers: ["el que", "el cual"] },
    ]
  ),
  L(
    "b1-comprehensive-review-3",
    "b1r-challenge-subjunctive-gauntlet",
    "Desafío B1: el subjuntivo sin pistas",
    "Decisiones rápidas sin pistas: ¿indicativo o subjuntivo? Deseo, duda, emoción, necesidad y «cuando» + futuro frente a certeza y hábito.",
    "8 min",
    [
      sec(
        "Recuerda la regla: hecho o no hecho",
        [
          "El indicativo presenta algo como un hecho: lo que sabes, crees o ves que pasa (sé que vienes, creo que llueve, siempre que llueve…). El subjuntivo aparece cuando la segunda frase no se afirma como hecho, sino que se desea, se duda, se valora o todavía no ha ocurrido: quiero que vengas, no creo que llueva, me alegra que estés, cuando llegues.",
          "Por eso «creo que» va con indicativo y «no creo que» con subjuntivo, y «cuando» va con indicativo para hábitos o el pasado, pero con subjuntivo para el futuro.",
        ],
        [
          ["Sé que vienes. / Quiero que vengas.", "I know you're coming. / I want you to come."],
        ],
        [
          { ...fb("¿Indicativo o subjuntivo?", "Estoy seguro de que todo ___ bien. (salir)", "saldrá", "«Estoy seguro de que» afirma algo como cierto: indicativo, aquí en futuro (saldrá)."), altAnswers: ["va a salir"] },
          fb("¿Indicativo o subjuntivo?", "Me sorprende que no ___ nadie. (haber)", "haya", "Una emoción (me sorprende que) valora el hecho en lugar de afirmarlo: subjuntivo, haya."),
        ]
      ),
    ],
    [
      fb("¿Indicativo o subjuntivo?", "Creo que ___ en casa. (estar, ellos)", "están", "«Creo que» afirmativo presenta tu opinión como un hecho: indicativo, están."),
      fb("¿Indicativo o subjuntivo?", "Te pido que no ___ ruido. (hacer, tú)", "hagas", "Pedir algo a otro es influir en lo que hace: subjuntivo, hagas."),
      fb("¿Indicativo o subjuntivo?", "Cuando ___ mayor, viviré en el campo. (ser, yo)", "sea", "«Cuando» mira a un futuro que aún no ha llegado: subjuntivo, sea (nunca «cuando seré»)."),
      fb("¿Indicativo o subjuntivo?", "Siempre que ___, me mojo. (llover)", "llueve", "Es un hábito real que se repite: indicativo, llueve."),
      fb("¿Indicativo o subjuntivo?", "Es evidente que no ___ la verdad. (decir, él)", "dice", "«Es evidente que» afirma una certeza: indicativo, dice."),
      fb("¿Indicativo o subjuntivo?", "Es una pena que ___ tan lejos. (vivir, tú)", "vivas", "«Es una pena que» valora el hecho: subjuntivo, vivas."),
      fb("¿Indicativo o subjuntivo?", "Necesito que me ___ un favor. (hacer, tú)", "hagas", "Una necesidad sobre otra persona (necesito que tú…): subjuntivo, hagas."),
      mc(
        "«No es que no ___, es que no puedo.»",
        ["quiera", "quiero", "querré", "quería"],
        0,
        "«No es que» niega una razón y pide subjuntivo: no es que no quiera. «Quiero», «querré» y «quería» son indicativo."
      ),
    ]
  ),
  L(
    "b1-comprehensive-review-3",
    "b1r-challenge-past-perfects-gauntlet",
    "Desafío B1: pasados y perfectos",
    "Pretérito, imperfecto, pretérito perfecto y pluscuamperfecto — elige el tiempo en cada frase.",
    "8 min",
    [
      sec(
        "Recuerda la regla: desde dónde miras y cómo ves la acción",
        [
          "Dos preguntas bastan. ¿Desde dónde se mira? Desde ahora, con un periodo abierto (hoy, esta semana, alguna vez) → pretérito perfecto; desde otro momento pasado, para algo anterior → pluscuamperfecto. Si no, ¿cómo se ve la acción? Cerrada, como un hecho con principio y fin → pretérito; abierta, como escena o costumbre → imperfecto.",
        ],
        [
          ["Hoy he visto a Juan.", "I've seen Juan today. (periodo abierto → perfecto)"],
          ["Ayer vi a Ana.", "I saw Ana yesterday. (hecho cerrado → pretérito)"],
          ["De niño veía mucho la tele.", "As a child I watched a lot of TV. (costumbre → imperfecto)"],
          ["Ya había visto la película.", "I had already seen the film. (anterior a otro pasado → pluscuamperfecto)"],
        ],
        [
          fb("Elige el tiempo.", "Esta mañana ___ un café con mi jefe. (tomar, yo)", "he tomado", "«Esta mañana» es parte de hoy, un periodo abierto: pretérito perfecto (uso de España; en América, también «tomé»)."),
          fb("Elige el tiempo.", "El año pasado ___ a Cuba. (viajar, nosotros)", "viajamos", "«El año pasado» es un periodo cerrado y el viaje un hecho terminado: pretérito, viajamos."),
        ]
      ),
    ],
    [
      fb("Elige el tiempo.", "Cuando ___ pequeña, vivía en un pueblo. (ser, yo)", "era", "Una etapa de la vida se ve como escena, sin principio ni fin: imperfecto, era."),
      fb("Elige el tiempo.", "Cuando llegamos, el tren ya ___. (salir)", "había salido", "El tren salió antes de «llegamos»: se mira desde un momento pasado → pluscuamperfecto."),
      fb("Elige el tiempo.", "¿Alguna vez ___ paella? (comer, tú)", "has comido", "«Alguna vez» pregunta por la experiencia hasta hoy: pretérito perfecto."),
      fb("Elige el tiempo.", "Mientras ___ la cena, sonó el timbre. (preparar, yo)", "preparaba", "La acción en curso que sirve de fondo va en imperfecto; la que la interrumpe (sonó), en pretérito."),
      fb("Elige el tiempo.", "Me dijo que nunca ___ en avión. (volar)", "había volado", "La experiencia es anterior a «me dijo», que ya es pasado: pluscuamperfecto."),
      mc(
        "«I've lost my keys and I can't get in.»",
        ["He perdido las llaves y no puedo entrar.", "Perdía las llaves y no puedo entrar.", "Había perdido las llaves y no puedo entrar.", "Pierdo las llaves y no podía entrar."],
        0,
        "Un hecho reciente con resultado presente (no puedo entrar) va en pretérito perfecto: he perdido. «Perdía» es imperfecto, «había perdido» es anterior a otro pasado y «pierdo… podía» mezcla los tiempos."
      ),
      toEs("When I was a child, I had never seen the sea.", "Cuando era niño, nunca había visto el mar.", "Imperfecto para la etapa (era niño) + pluscuamperfecto: nunca había visto.", ["Cuando era niña, nunca había visto el mar.", "De niño, nunca había visto el mar.", "De niña, nunca había visto el mar."]),
      wo("Esta semana he dormido muy poco porque he tenido exámenes.", "«Esta semana» sigue abierta: los dos verbos en pretérito perfecto (he dormido, he tenido).", "This week I've slept very little because I've had exams."),
    ]
  ),
  L(
    "b1-comprehensive-review-3",
    "b1r-challenge-pronoun-gauntlet",
    "Desafío B1: pronombres de todo tipo",
    "Pronombres dobles, relativos y posesivos — el trío que más cuesta del B1.",
    "8 min",
    [
      sec(
        "Recuerda la regla: cada pronombre mira a algo distinto",
        [
          "Los tres tipos de pronombre sustituyen algo ya conocido, pero cada uno concuerda con una cosa diferente. Los dobles (me lo, se la) sustituyen a la persona y a la cosa: primero la persona, y le/les se convierte en se delante de lo/la. Los relativos (que, quien, el que, lo que, donde) dependen del antecedente y de la preposición que pide el verbo. Los posesivos (el mío, la tuya) concuerdan con la cosa poseída y llevan artículo cuando la sustituyen.",
        ],
        [
          ["¿Tu móvil? Se lo di a Marta, la que vive arriba.", "Your phone? I gave it to Marta, the one who lives upstairs."],
          ["El mío está roto.", "Mine is broken."],
        ],
        [
          fb("Completa.", "¿Las fotos? Ya ___ las mandé a tus padres.", "se", "A tus padres → les; delante de «las», «les» se convierte en «se»: se las mandé."),
        ]
      ),
    ],
    [
      fb("Completa con un relativo.", "Esta es la canción ___ más me gusta.", "que", "Sin preposición, el relativo es «que»: la canción que más me gusta."),
      fb("Completa con un relativo.", "No sé ___ quieres para tu cumpleaños.", "lo que", "Sin antecedente, «lo que» = what."),
      fb("Completa con un posesivo.", "Mi coche es viejo; el ___ es nuevo, ¿verdad? (tú)", "tuyo", "Sustituye a «tu coche»: el artículo ya está (el) y el tónico concuerda con «coche», masculino: el tuyo."),
      fb("Completa con el pronombre que falta.", "¿El secreto? No ___ lo cuentes a nadie. (tú)", "se", "«A nadie» se anticipa con «le», que delante de «lo» se convierte en «se»: no se lo cuentes."),
      ms(
        "¿Qué frases son correctas?",
        ["Te lo explico luego.", "La casa en la que nací ya no existe.", "Esas llaves son suyas.", "Me los prestó quien lo conocí."],
        [0, 1, 2],
        "«Me los prestó quien lo conocí» está mal construida: sobra «lo», y «quien» (sujeto de prestó) no casa con un verbo en primera persona. Correcto: Me los prestó alguien a quien conocí."
      ),
      mc(
        "«Give it (the book) to the woman who is at reception.» (tú)",
        ["Dáselo a la señora que está en recepción.", "Dálelo a la señora quien está en recepción.", "Dáselo a la señora lo que está en recepción.", "Se lo da a la señora que está en recepción."],
        0,
        "Mandato de tú con le → se + lo pegados (dáselo) y relativo que sin preposición. «Dálelo» no cambia le a se, «quien» y «lo que» no encajan, y «Se lo da» no es una orden."
      ),
      wo("¿Es tuya esta chaqueta o es la de Pedro?", "Tras «ser», el tónico va sin artículo (tuya); con un dueño nombrado se usa «la de» + persona, concordando con «chaqueta».", "Is this jacket yours or is it Pedro's?"),
    ]
  ),
  L(
    "b1-comprehensive-review-3",
    "b1r-challenge-seville-1",
    "Desafío B1: una semana en Sevilla (1)",
    "Emma se muda a Sevilla para trabajar. Sigue sus primeros días: el piso, la oficina y los vecinos.",
    "8 min",
    [
      sec(
        "Lunes: el piso",
        [
          "Recuerda la regla: en la vida real, cada situación pide su forma. Las normas se dan con mandatos (no dejes la basura) o con es importante que / te pido que + subjuntivo; para presentar a alguien se usan relativas (la que lleva los clientes, con quien vas a compartir despacho); y para invitar o aceptar con cortesía, el condicional (¿te gustaría…? —¡Me encantaría!).",
          "En el desafío sigues a Emma: respondes por ella, eliges lo que diría y corriges su diario.",
        ],
        [
          ["—Es importante que cierres bien la puerta. Y no dejes la basura en el rellano.", "It's important that you lock the door properly. And don't leave the trash on the landing."],
          ["—Si tienes cualquier problema, llámame.", "If you have any problem, call me."],
        ],
        [
          fb("Completa la norma.", "Te pido que no ___ ruido después de las once. (hacer)", "hagas", "Pedir algo a otra persona es influir en ella: «pedir que» + subjuntivo, hagas."),
        ]
      ),
      sec(
        "Martes: la oficina",
        "Su jefe le presenta al equipo con relativas.",
        [
          ["—Esta es Carmen, la que lleva los clientes internacionales. Y ese es Luis, con quien vas a compartir despacho.", "This is Carmen, who handles international clients. And that's Luis, whom you'll share an office with."],
        ],
        [
          fb("Completa.", "El proyecto en el ___ trabajarás empieza la semana que viene.", "que", "Se trabaja EN un proyecto: la preposición y el artículo van delante del relativo, en el que."),
        ]
      ),
      sec(
        "Miércoles: los vecinos",
        "Los vecinos la invitan a cenar.",
        [
          ["—¿Te gustaría cenar con nosotros el viernes? —¡Me encantaría!", "Would you like to have dinner with us on Friday? — I'd love to!"],
        ],
        [
          mc(
            "¿Por qué los vecinos dicen «¿te gustaría…?»?",
            ["Es una invitación cortés en condicional.", "Es un mandato.", "Es un pasado.", "Es un error."],
            0,
            "«¿Te gustaría…?» usa el condicional para hacer la invitación más suave y cortés. No es un mandato, no habla del pasado y no es un error."
          ),
        ]
      ),
    ],
    [
      fb("Completa el diario de Emma.", "Hoy ___ a mis compañeros. Son muy simpáticos. (conocer, perfecto)", "he conocido", "«Hoy» es un periodo abierto: pretérito perfecto, he conocido."),
      fb("Completa el diario de Emma.", "Nunca ___ en una ciudad tan bonita. (vivir, perfecto)", "había vivido", "Emma habla de lo que no había vivido antes de llegar a Sevilla (un momento pasado): pluscuamperfecto."),
      fb("Completa el diario de Emma.", "Ojalá que el calor no ___ tan fuerte en verano. (ser)", "sea", "«Ojalá» expresa un deseo y siempre pide subjuntivo: sea."),
      mt(
        "Relaciona cada día con lo que pasó.",
        [
          ["el lunes", "La casera le explicó las normas."],
          ["el martes", "Conoció al equipo."],
          ["el miércoles", "Los vecinos la invitaron."],
        ],
        "Cada día corresponde a una escena del desafío; al contar lo que pasó, cada hecho terminado va en pretérito (explicó, conoció, invitaron)."
      ),
      toEs("I'm glad that my neighbors are so friendly.", "Me alegro de que mis vecinos sean tan simpáticos.", "«Alegrarse de que» → subjuntivo: sean.", ["Me alegra que mis vecinos sean tan simpáticos.", "Me alegro de que mis vecinos sean tan amables."]),
      wo("Luis me ha dicho que me enseñará la ciudad el sábado.", "Pretérito perfecto + futuro en estilo indirecto.", "Luis told me he'll show me the city on Saturday."),
    ]
  ),
  L(
    "b1-comprehensive-review-3",
    "b1r-challenge-seville-2",
    "Desafío B1: una semana en Sevilla (2)",
    "Termina la semana de Emma: la cena con los vecinos, una excursión y una llamada a casa.",
    "8 min",
    [
      sec(
        "Viernes: la cena",
        [
          "Recuerda la regla: para aconsejar se usa yo que tú + condicional (yo que tú, iría…), es mejor que / te recomiendo que + subjuntivo, o un mandato (no te pierdas…). Para hablar de monumentos, la pasiva (fue construida) y el se impersonal (se dice que) ponen el foco en el edificio, no en quién lo hizo.",
          "En esta segunda parte respondes por Emma, cambias consejos de forma y corriges lo que escribe a su familia.",
        ],
        [
          ["—Yo que tú, iría a la Feria de Abril. Es algo que tienes que ver.", "If I were you, I'd go to the April Fair. It's something you have to see."],
          ["—Y no te pierdas las tapas de la calle Feria.", "And don't miss the tapas on Feria Street."],
        ],
        [
          fb("Completa el consejo.", "Es mejor que ___ en bici; en coche es imposible aparcar. (moverse, tú)", "te muevas", "«Es mejor que» valora y aconseja: subjuntivo, con el reflexivo delante y el cambio o → ue: te muevas."),
        ]
      ),
      sec(
        "Sábado: la excursión",
        "Luis le enseña la ciudad.",
        [
          ["Subimos a la Giralda, que fue construida como torre de una mezquita.", "We climbed the Giralda, which was built as the tower of a mosque."],
          ["Se dice que la Giralda es el símbolo de la ciudad.", "It's said that the Giralda is the city's symbol."],
        ],
        [
          fb("Completa.", "El Alcázar ___ usado como palacio por los reyes. (ser, pretérito)", "fue", "Pasiva con ser: el sujeto es el Alcázar, singular, y el hecho está cerrado en el pasado: fue usado."),
        ]
      ),
    ],
    [
      fb("Domingo: la llamada a casa.", "Mamá, no te ___; estoy muy bien. (preocupar, tú, negativo)", "preocupes", "El mandato negativo de tú usa el subjuntivo, con el pronombre delante: no te preocupes."),
      fb("Domingo: la llamada a casa.", "Si vienes en mayo, te ___ la ciudad. (enseñar, yo, futuro)", "enseñaré", "Condición real: si + presente (vienes) y futuro en la consecuencia (enseñaré)."),
      fb("Domingo: la llamada a casa.", "Quiero que ___ a mis vecinos; son encantadores. (conocer, tú)", "conozcas", "«Querer que» con otro sujeto pide subjuntivo; conocer hace -zc-: conozcas."),
      mc(
        "«The cathedral, which I visited on Saturday, is enormous.»",
        ["La catedral, que visité el sábado, es enorme.", "La catedral, quien visité el sábado, es enorme.", "La catedral, lo que visité el sábado, es enorme.", "La catedral, donde visité el sábado, es enorme."],
        0,
        "En una explicativa (entre comas) para una cosa se usa «que». «Quien» es para personas, «lo que» para ideas y «donde» indicaría lugar donde se hace algo, no el objeto de visité."
      ),
      ms(
        "¿Qué frases de Emma son correctas?",
        ["Esta semana he aprendido muchísimo.", "Me encanta que la gente sea tan abierta.", "Se comen tapas en todas partes.", "Ojalá que me quedo aquí para siempre."],
        [0, 1, 2],
        "«Ojalá que me quedo» es incorrecta: ojalá pide subjuntivo, me quede. Las demás usan bien el perfecto, me encanta que + subjuntivo y el se pasivo."
      ),
      toEs("I never imagined that I would like Seville so much.", "Nunca imaginé que me gustaría tanto Sevilla.", "Pretérito + condicional como «futuro del pasado».", ["Nunca me imaginé que me gustaría tanto Sevilla.", "Nunca pensé que me gustaría tanto Sevilla."]),
      wo("Ha sido la mejor semana de mi vida.", "Emma valora la semana que acaba de terminar desde hoy: pretérito perfecto (ha sido); el superlativo es la mejor + de.", "It's been the best week of my life."),
    ]
  ),
  L(
    "b1-comprehensive-review-3",
    "b1r-challenge-formal-complaint",
    "Desafío B1: escribe una reclamación",
    "Redacta un correo formal de queja a una aerolínea — hechos en pasado, emociones y exigencias en subjuntivo.",
    "8 min",
    [
      sec(
        "Recuerda la regla: hechos, reacción y petición",
        [
          "Una reclamación eficaz tiene tres partes, y cada una tiene su gramática. Lo que pasó son hechos: pretérito para lo que ocurrió (viajé, llegué) y pluscuamperfecto para lo que ya había pasado antes (mi maleta no había llegado). Cómo te afectó es una valoración: me parece inaceptable que / me molesta que + subjuntivo. Lo que pides es influir en otros: solicito que / les ruego que + subjuntivo. Y todo en usted/ustedes.",
        ],
        [
          ["Estimados señores: el pasado 3 de mayo viajé en el vuelo IB345.", "Dear Sirs: on May 3rd I traveled on flight IB345."],
          ["Cuando llegué a Madrid, mi maleta no había llegado.", "When I arrived in Madrid, my suitcase hadn't arrived."],
          ["Me parece inaceptable que nadie me haya dado una explicación.", "I find it unacceptable that nobody has given me an explanation."],
          ["Solicito que me devuelvan el dinero de los gastos.", "I request that you refund my expenses."],
        ],
        [
          ms(
            "¿Qué tiempos y modos usa la carta?",
            ["pretérito", "pluscuamperfecto", "subjuntivo", "imperativo de tú"],
            [0, 1, 2],
            "La carta usa pretérito, pluscuamperfecto y subjuntivo. No usa el imperativo de tú, que no encaja en una carta formal."
          ),
        ]
      ),
      sec(
        "Tu reclamación",
        "Completa la reclamación de Tomás a un hotel: la habitación estaba sucia, el aire acondicionado no funcionaba y nadie lo arregló.",
        [
          ["Estimada directora:", "Dear Director,"],
        ],
        [
          fb("La reclamación de Tomás.", "Cuando ___ a la habitación, estaba sucia. (entrar, yo)", "entré", "Entrar es un hecho puntual del relato: pretérito, entré; el estado de la habitación es descripción (estaba)."),
        ]
      ),
    ],
    [
      { ...fb("La reclamación de Tomás.", "El aire acondicionado no ___ en toda la semana. (funcionar)", "funcionó", "Periodo cerrado → pretérito (también: no funcionaba, como descripción)."), altAnswers: ["funcionaba"] },
      fb("La reclamación de Tomás.", "Me molesta que nadie lo ___ arreglado. (haber)", "haya", "Una reacción (me molesta que) sobre algo que no ha pasado hasta ahora: perfecto de subjuntivo, haya arreglado."),
      fb("La reclamación de Tomás.", "Les pido que me ___ una parte del importe. (reembolsar)", "reembolsen", "La petición a la empresa (ustedes) pide subjuntivo: reembolsen."),
      mc(
        "¿Qué despedida es la adecuada?",
        ["A la espera de su respuesta, les saluda atentamente,", "¡Un besito y hasta luego!", "Chao, pescado.", "Bueno, pues nada."],
        0,
        "«A la espera de su respuesta, les saluda atentamente» es la fórmula formal estándar. «¡Un besito!», «Chao, pescado» y «Bueno, pues nada» son coloquiales."
      ),
      mc(
        "¿Qué frase es demasiado informal para la carta?",
        ["¡Oye, arreglad esto ya!", "Les ruego que revisen mi caso.", "Espero que tomen medidas.", "Agradezco de antemano su atención."],
        0,
        "«¡Oye, arreglad esto ya!» usa oye y un mandato de vosotros: demasiado informal para una carta formal. «Les ruego que», «Espero que» y «Agradezco de antemano» son fórmulas formales."
      ),
      toEs("I hope you (ustedes) answer me soon.", "Espero que me respondan pronto.", "«Esperar que» → subjuntivo, forma de ustedes: respondan.", ["Espero que me contesten pronto.", "Espero que me respondan pronto, gracias."]),
      wo("Espero que este problema no vuelva a ocurrir.", "«Espero que» expresa un deseo sobre otro sujeto (el problema): subjuntivo, vuelva.", "I hope this problem doesn't happen again."),
    ]
  ),
  L(
    "b1-comprehensive-review-3",
    "b1r-challenge-city-or-country",
    "Desafío B1: debate — ¿ciudad o campo?",
    "Argumenta a favor y en contra: opiniones, dudas, condiciones e hipótesis en un solo debate.",
    "8 min",
    [
      sec(
        "Recuerda la regla: cada tipo de argumento tiene su forma",
        "Un buen debate combina opinión (creo que + indicativo, porque afirmas lo que piensas), duda o rechazo (no creo que + subjuntivo, porque no lo afirmas), hipótesis (yo en tu lugar, viviría…: condicional) y condiciones reales (si vives en el campo, tendrás…: si + presente, futuro). En el debate vas a argumentar, reformular argumentos y corregir los mal construidos.",
        [
          ["Creo que la vida en el campo es más sana.", "I think life in the country is healthier."],
          ["No creo que sea tan fácil encontrar trabajo allí.", "I don't think it's that easy to find work there."],
          ["Si vives en la ciudad, tienes más oportunidades.", "If you live in the city, you have more opportunities."],
        ],
        [
          fb("Argumenta.", "Es verdad que en la ciudad ___ más contaminación. (haber)", "hay", "«Es verdad que» afirma un hecho: indicativo, hay."),
        ]
      ),
    ],
    [
      fb("Argumenta.", "Dudo que en el campo ___ buenos hospitales. (haber)", "haya", "«Dudo que» no afirma el hecho: subjuntivo, haya."),
      fb("Argumenta.", "Si te mudas al campo, ___ menos estrés. (tener, futuro)", "tendrás", "Condición real: si + presente, futuro en la consecuencia (tendrás)."),
      fb("Argumenta.", "Es fundamental que los pueblos ___ internet rápido. (tener)", "tengan", "«Es fundamental que» expresa necesidad sobre otro sujeto: subjuntivo, tengan."),
      mt(
        "Relaciona cada argumento con su tema.",
        [
          ["En el campo se respira aire puro.", "salud"],
          ["En la ciudad hay más vida cultural.", "cultura"],
          ["Me preocupa que los pueblos se queden vacíos.", "despoblación"],
          ["El transporte público es mejor en la ciudad.", "transporte"],
        ],
        "Cada argumento trata un tema distinto: aire puro → salud; vida cultural → cultura; pueblos vacíos → despoblación; transporte público → transporte. «Me preocupa que» + subjuntivo (se queden) expresa una preocupación."
      ),
      ms(
        "¿Qué argumentos están bien construidos?",
        ["Me parece que el campo es aburrido.", "No me parece que el campo sea aburrido.", "Opino que la ciudad sea mejor.", "Es posible que me mude pronto."],
        [0, 1, 3],
        "«Opino que la ciudad sea mejor» es incorrecta: opinar afirmativo lleva indicativo, es mejor. Me parece que + indicativo, no me parece que + subjuntivo y es posible que + subjuntivo están bien."
      ),
      toEs("In my opinion, the ideal would be to live in a small town near a city.", "En mi opinión, lo ideal sería vivir en un pueblo pequeño cerca de una ciudad.", "«Lo ideal» + condicional para una situación imaginada: lo ideal sería vivir…", ["Para mí, lo ideal sería vivir en un pueblo pequeño cerca de una ciudad.", "En mi opinión, lo ideal sería vivir en un pueblo cerca de una ciudad."]),
      wo("Aunque me encanta la ciudad, necesito escaparme al campo.", "«Aunque» + indicativo presenta la concesión como un hecho real (me encanta); el pronombre se pega al infinitivo: escaparme.", "Although I love the city, I need to escape to the country."),
    ]
  ),
  L(
    "b1-comprehensive-review-3",
    "b1r-exit-ticket",
    "Billete de salida del B1: ¿listo para el B2?",
    "La última lección del B1: diez destrezas que el B2 da por sabidas, una pregunta cada una, sin pistas.",
    "9 min",
    [
      sec(
        "Las diez destrezas",
        "(1) formación del subjuntivo (2) deseo/duda/emoción (3) expresiones impersonales y ojalá (4) mandatos (5) condicional (6) si + presente (7) perfecto (8) pluscuamperfecto (9) relativos (10) se, pronombres dobles y posesivos.",
        [
          ["¡A por el B2!", "On to B2!"],
        ],
        [
          fb("Destreza 1: formación.", "que nosotros ___ (dormir)", "durmamos", "-IR o→u en nosotros."),
          fb("Destreza 2: deseo/duda/emoción.", "Me alegra que ___ aquí. (estar, vosotros)", "estéis", "Emoción → subjuntivo."),
        ]
      ),
    ],
    [
      fb("Destreza 3: ojalá.", "Ojalá que ___ suerte en la entrevista. (tener, tú)", "tengas", "Ojalá + subjuntivo."),
      fb("Destreza 4: mandatos.", "No ___ lo digas a nadie.", "se", "Le → se delante de lo, y en el negativo van delante: no se lo digas."),
      fb("Destreza 5: condicional.", "¿___ abrir la ventana, por favor? (poder, usted)", "Podría", "Cortesía."),
      fb("Destreza 6: si.", "Si ___ tiempo, pasaré por tu casa. (tener, yo)", "tengo", "Si + presente."),
      fb("Destreza 7: perfecto.", "Todavía no he ___ el correo. (abrir)", "abierto", "Participio irregular."),
      fb("Destreza 8: pluscuamperfecto.", "Cuando llegué, ya se ___ ido. (haber, ellos)", "habían", "Habían + participio."),
      fb("Destreza 9: relativos.", "Esa es la razón por la ___ me fui.", "que", "«La razón por la que» es la forma fija para explicar un motivo."),
      mc(
        "Destreza 10: se. «___ alquilan apartamentos.»",
        ["Se", "Le", "Lo", "Les"],
        0,
        "Es se pasivo: el verbo concuerda con «apartamentos». «Le», «lo» y «les» son pronombres de objeto y no forman esta construcción."
      ),
    ]
  ),
  // ---- Themed spiral reviews between the reading stories (lessons 69+). ----
  // Each one takes the theme of the story it follows and drills mixed B1
  // grammar through it -- it never depends on the story's plot details.
  L(
    "el-sendero-perdido",
    "b1r-tema-montana",
    "Repaso temático: perdidos en la montaña",
    "Excursiones, mapas y decisiones difíciles — subjuntivo, mandatos y pasados en un contexto de montaña.",
    "7 min",
    [
      sec(
        "Antes de la excursión",
        [
          "Recuerda la regla: cada intención pide su forma. Para aconsejar: mandato (lleva, no salgas) o expresión de necesidad + que + subjuntivo (es importante que vayas). Para una condición real: si + presente, nunca futuro (si llueve, volvemos). Para contar lo que pasó: indefinido para los hechos, imperfecto para el fondo y pluscuamperfecto para lo que ya había pasado.",
          "¿Por qué subjuntivo tras «es importante que»? Porque no afirmas un hecho: valoras algo que todavía no ha pasado.",
        ],
        [
          ["Lleva siempre agua y un mapa.", "Always carry water and a map. (mandato afirmativo de tú)"],
          ["Es importante que no salgas del sendero marcado.", "It's important that you don't leave the marked trail. (valoración + subjuntivo)"],
          ["Si se hace de noche, no sigas caminando.", "If it gets dark, don't keep walking. (si + presente; negativo = subjuntivo)"],
          ["Cuando llegamos al refugio, ya había anochecido.", "When we reached the hut, night had already fallen. (lo anterior en pluscuamperfecto)"],
        ],
        [
          fb("Completa el consejo.", "Es mejor que ___ a alguien adónde vas. (avisar, tú)", "avises", "Es mejor que es una valoración, así que pide subjuntivo: avises (no «avisas»)."),
          fb("Completa el consejo.", "___ calzado cómodo y resistente. (ponerse, tú)", "Ponte", "Poner tiene un mandato irregular de tú (pon), y el pronombre se pega detrás en el afirmativo: ponte."),
        ]
      ),
    ],
    [
      fb("Completa la historia.", "Cuando nos dimos cuenta, ya ___ el camino. (perder, nosotros, pluscuamperfecto)", "habíamos perdido", "Perder el camino ocurrió antes de darnos cuenta (indefinido): pluscuamperfecto, habíamos perdido."),
      fb("Completa la historia.", "Mientras ___ el mapa, empezó a llover. (mirar, nosotros)", "mirábamos", "Mientras introduce la acción en curso (fondo): imperfecto, mirábamos. La lluvia que interrumpe va en indefinido (empezó)."),
      mc(
        "«If we don't find the trail, we'll call the rescue team.»",
        ["Si no encontramos el sendero, llamaremos a los rescatistas.", "Si no encontraremos el sendero, llamamos a los rescatistas.", "Si no encontremos el sendero, llamaremos a los rescatistas.", "Si no encontrábamos el sendero, llamaremos a los rescatistas."],
        0,
        "Condición real: si + presente (encontramos) y resultado en futuro (llamaremos). «Encontraremos», «encontremos» y «encontrábamos» no van tras si en una condición real."
      ),
      ms(
        "¿Qué consejos son correctos?",
        ["No bebas agua de los ríos.", "Ojalá que no llueva.", "Es necesario que llevas linterna.", "Yo que tú, volvería."],
        [0, 1, 3],
        "«Es necesario que llevas» es incorrecta: necesidad → subjuntivo, lleves. Las otras usan bien el negativo, ojalá y yo que tú + condicional."
      ),
      toEs("I've never been so scared in my life.", "Nunca he tenido tanto miedo en mi vida.", "«Never in my life» hasta ahora → pretérito perfecto; «so scared» = tanto miedo.", ["Nunca en mi vida he tenido tanto miedo.", "Nunca tuve tanto miedo en mi vida.", "Nunca en mi vida tuve tanto miedo.", "Nunca he estado tan asustado en mi vida.", "Nunca he estado tan asustada en mi vida."]),
      wo("El guardabosques nos aconsejó seguir el río hasta el pueblo.", "Aconsejar admite infinitivo cuando el pronombre (nos) ya dice a quién se aconseja: nos aconsejó seguir. También se puede decir «nos aconsejó que siguiéramos».", "The ranger advised us to follow the river to the village."),
      toEs(
        "Si te pierdes, quédate donde estás.",
        "Si se pierde, quédese donde está.",
        "Con usted, el verbo va en tercera persona (se pierde, está) y el mandato afirmativo usa el subjuntivo con el pronombre pegado: quédese.",
        ["Si usted se pierde, quédese donde está."],
        "Cambia a la forma de usted."
      ),
      toEs(
        "Es necesario que llevamos una linterna.",
        "Es necesario que llevemos una linterna.",
        "Es necesario que expresa necesidad, no un hecho: pide subjuntivo, llevemos (-ar → -e).",
        [],
        "Corrige la frase."
      ),
    ]
  ),
  L(
    "primer-concierto",
    "b1r-tema-miedo-escenico",
    "Repaso temático: el miedo escénico",
    "Nervios, ánimos y actuaciones — reacciones emocionales, consejos y experiencias.",
    "7 min",
    [
      sec(
        "Los nervios",
        [
          "Recuerda las reglas que vas a mezclar: 1) Emoción + que + subjuntivo cuando el miedo es por lo que hace otro (Me da miedo que el público se ría); si eres tú, infinitivo (Me da miedo equivocarme). 2) Consejos con imperativo: afirmativo de tú = forma de él del presente (respira), negativo = no + subjuntivo (no mires). 3) Experiencias: «alguna vez» + pretérito perfecto; lo que ya había pasado antes de otro pasado, pluscuamperfecto.",
        ],
        [
          ["Me da miedo que el público se ría de mí.", "I'm scared the audience will laugh at me. (otro sujeto → subjuntivo)"],
          ["Me da miedo equivocarme.", "I'm scared of making a mistake. (mismo sujeto → infinitivo)"],
          ["Respira hondo y no mires al público al principio.", "Breathe deeply and don't look at the audience at first. (afirmativo: respira; negativo: no mires)"],
        ],
        [
          fb("Completa.", "Me pone nervioso que mis amigos me ___ tocar. (ver)", "vean", "Poner nervioso es una emoción y el sujeto cambia (mis amigos) → subjuntivo: vean."),
          fb("Completa el consejo.", "No ___ en los errores; sigue tocando. (pensar, tú)", "pienses", "Negativo de tú: no + la forma tú del presente de subjuntivo (no pienses). Los mandatos se estudian a fondo más adelante."),
        ]
      ),
    ],
    [
      fb("Completa.", "¿Alguna vez ___ en un escenario? (actuar, tú)", "has actuado", "«Alguna vez» pregunta por la experiencia de toda la vida → pretérito perfecto: has actuado."),
      fb("Completa.", "Antes del concierto, nunca ___ delante de tanta gente. (tocar, yo)", "había tocado", "Es anterior a otro momento pasado (el concierto) → pluscuamperfecto: había tocado."),
      mc(
        "«I hope everything goes well for you!»",
        ["¡Ojalá que te salga todo bien!", "¡Ojalá que te sale todo bien!", "¡Ojalá te saldrá todo bien!", "¡Ojalá salirte todo bien!"],
        0,
        "Ojalá siempre va con subjuntivo: salga. «Sale» y «saldrá» son indicativo, y «salirte» es infinitivo, imposible después de ojalá."
      ),
      mt(
        "Relaciona cada frase con su significado.",
        [
          ["¡Mucha mierda!", "Break a leg! (teatro)"],
          ["Me quedé en blanco.", "My mind went blank."],
          ["Me temblaban las manos.", "My hands were shaking."],
          ["¡Lo has bordado!", "You nailed it!"],
        ],
        "Expresiones típicas del mundo del espectáculo. «¡Mucha mierda!» se dice antes de actuar (desear «suerte» trae mala suerte en el teatro); «¡Lo has bordado!» se dice después."
      ),
      toEs("If you practice a lot, you'll be less nervous. (tú)", "Si practicas mucho, estarás menos nervioso.", "Condición real: si + presente (practicas) + futuro (estarás).", ["Si practicas mucho, estarás menos nerviosa.", "Si ensayas mucho, estarás menos nervioso."]),
      wo("Cuando terminé la canción, todo el mundo aplaudió.", "Dos acciones puntuales y terminadas, una tras otra → pretérito indefinido: terminé, aplaudió.", "When I finished the song, everyone applauded."),
    ]
  ),
  L(
    "el-concurso-de-cocina",
    "b1r-tema-competicion",
    "Repaso temático: la competición",
    "Concursos, jueces y resultados — el condicional, la pasiva y las expresiones de opinión.",
    "8 min",
    [
      sec(
        "Recuerda la regla: tres herramientas del jurado",
        [
          "Recuerda las reglas que usa un jurado. Para opinar: creo que + indicativo (lo afirmas), no creo que / no me parece que + subjuntivo (lo niegas). Para aconsejar con suavidad: yo en tu lugar + condicional (pondría, haría). Para anunciar resultados: la pasiva, con ser + participio si dices quién decide (fue elegido por el público) o con se si no (se entregaron los premios).",
          "¿Por qué el condicional en los consejos? Porque habla de lo que harías en una situación imaginada (si fuera tú), y eso suena menos directo que un mandato.",
        ],
        [
          ["Creo que tu plato tiene mucha personalidad.", "I think your dish has a lot of personality. (creo que → indicativo)"],
          ["No creo que el postre esté terminado.", "I don't think the dessert is finished. (no creo que → subjuntivo)"],
          ["Yo en tu lugar añadiría un poco de limón.", "If I were you, I'd add a bit of lemon. (consejo → condicional)"],
          ["El premio fue concedido a la concursante más joven.", "The prize was awarded to the youngest contestant. (pasiva con ser; concedido concuerda con «el premio»)"],
        ],
        [
          fb("Opina como un juez.", "No me parece que la salsa ___ suficiente sal. (tener)", "tenga", "«No me parece que» niega una opinión → subjuntivo: tenga."),
          fb("Aconseja como un juez.", "Yo en tu lugar ___ el arroz cinco minutos más. (dejar)", "dejaría", "«Yo en tu lugar» presenta una situación imaginada → condicional: dejaría. «Dejaré» sería un plan tuyo, no un consejo."),
        ]
      ),
    ],
    [
      fb("Completa.", "Los ganadores ___ anunciados al final del programa. (ser, futuro)", "serán", "Pasiva con ser en futuro: serán + participio, que concuerda con «los ganadores» (anunciados)."),
      fb("Completa.", "Yo en tu lugar ___ menos picante. (poner)", "pondría", "Consejo con «yo en tu lugar» → condicional; «poner» es irregular: pondría."),
      fb("Completa.", "Es increíble que ___ en solo treinta minutos. (cocinarlo, tú)", "lo cocines", "«Es increíble que» valora un hecho → subjuntivo; con verbo conjugado, el pronombre va delante: lo cocines."),
      mc(
        "«The contestant who won is only sixteen.»",
        ["La concursante que ganó tiene solo dieciséis años.", "La concursante quien ganó tiene solo dieciséis años.", "La concursante lo que ganó tiene solo dieciséis años.", "La concursante que ganó es solo dieciséis años."],
        0,
        "Sin preposición se usa «que», y la edad se expresa con tener: tiene dieciséis años. «Quien» sin coma, «lo que» y «es solo dieciséis años» son incorrectos."
      ),
      ms(
        "¿Qué frases son correctas?",
        ["Me sorprende que no hayas ganado.", "Se eligió el mejor plato.", "Ojalá gano el año que viene.", "Estoy seguro de que ganarás."],
        [0, 1, 3],
        "«Ojalá gano el año que viene» es incorrecta: ojalá pide subjuntivo, gane. Me sorprende que + subjuntivo y estoy seguro de que + indicativo están bien usados."
      ),
      toEs("I want you (tú) to taste my recipe.", "Quiero que pruebes mi receta.", "«Querer que» con otra persona → subjuntivo: pruebes (probar, o → ue).", ["Quiero que tú pruebes mi receta.", "Quiero que pruebes mi plato."]),
      wo("Lo que más valoraron los jueces fue la originalidad.", "«Lo que» = 'what' sin sustantivo antes; valoraron va en pretérito porque el concurso ya pasó, y «fue» concuerda con «la originalidad» (singular).", "What the judges valued most was originality."),
    ]
  ),
  L(
    "la-estudiante-de-intercambio",
    "b1r-tema-choque-cultural",
    "Repaso temático: el choque cultural",
    "Costumbres nuevas, familias de acogida y malentendidos — con el se impersonal y la emoción.",
    "8 min",
    [
      sec(
        "Recuerda la regla: describir con se, reaccionar con subjuntivo",
        [
          "Recuerda la regla: para describir una costumbre general usa el se: se impersonal en singular si no hay sustantivo (se cena tarde) o si hay personas con «a» (se saluda a todos), y se pasivo que concuerda si hay una cosa (se comen tamales). Para reaccionar ante esa costumbre usa un verbo de emoción + que + subjuntivo: me sorprende que, me extraña que, me molesta que.",
          "¿Por qué? El se borra a la persona concreta: habla de lo que hace «la gente» en general. La emoción, en cambio, no informa de la costumbre, la valora; por eso va en subjuntivo.",
        ],
        [
          ["En Argentina se saluda con un beso.", "In Argentina people greet each other with a kiss. (sin sustantivo → singular)"],
          ["En Japón se quitan los zapatos en casa.", "In Japan people take their shoes off at home. (los zapatos → plural)"],
          ["Me sorprende que la gente cene tan tarde.", "It surprises me that people eat dinner so late. (emoción → subjuntivo)"],
        ],
        [
          fb("Describe la costumbre.", "En España se ___ la siesta en verano. (dormir)", "duerme", "«La siesta» es singular (o lo tomas como impersonal): el verbo va en singular, se duerme."),
          fb("Reacciona.", "Me extraña que todo el mundo ___ tan alto. (hablar)", "hable", "«Me extraña que» expresa una emoción → subjuntivo; «todo el mundo» es singular: hable."),
        ]
      ),
    ],
    [
      fb("Completa.", "Al principio, no ___ las bromas de mi familia de acogida. (entender, yo)", "entendía", "Situación que duraba en el pasado → imperfecto: entendía."),
      fb("Completa.", "Ahora ya ___ a sus costumbres. (acostumbrarse, yo, perfecto)", "me he acostumbrado", "Resultado que llega hasta hoy (ahora ya) → pretérito perfecto, con el pronombre delante: me he acostumbrado."),
      mt(
        "Relaciona cada costumbre con el país donde es típica.",
        [
          ["tomar mate", "Argentina"],
          ["comer las doce uvas", "España"],
          ["celebrar el Día de Muertos", "México"],
          ["bailar cumbia en las fiestas", "Colombia"],
        ],
        "Costumbres del mundo hispano: el mate en Argentina (y Uruguay), las doce uvas en Nochevieja en España, el Día de Muertos en México y la cumbia en Colombia."
      ),
      mc(
        "«It's normal for you to miss your family.»",
        ["Es normal que eches de menos a tu familia.", "Es normal que echas de menos a tu familia.", "Es normal de que eches de menos a tu familia.", "Es normal echar de menos a tu familia ayer."],
        0,
        "«Es normal que» + sujeto concreto pide subjuntivo: eches. «Echas» es indicativo, «Es normal de que» añade un «de» que sobra y «echar… ayer» cambia el sentido."
      ),
      toEs("They told me that it's rude to arrive on time to a party.", "Me dijeron que es de mala educación llegar puntual a una fiesta.", "«Decir que» para informar lleva indicativo: es de mala educación.", ["Me dijeron que es de mala educación llegar a tiempo a una fiesta.", "Me dijeron que es maleducado llegar puntual a una fiesta."]),
      wo("Lo que más me costó fue acostumbrarme a los horarios.", "«Lo que más me costó» = 'what was hardest for me'; después va «fue» + infinitivo, y el infinitivo reflexivo lleva el pronombre de «me»: acostumbrarme.", "What was hardest for me was getting used to the schedules."),
    ]
  ),
  L(
    "el-negocio-de-paseos",
    "b1r-tema-primer-negocio",
    "Repaso temático: mi primer negocio",
    "Clientes, precios y responsabilidades — el condicional, el si y los pronombres dobles.",
    "7 min",
    [
      sec(
        "La idea: si + presente para un plan posible",
        [
          "Recuerda la regla: cuando la condición es posible de verdad, «si» va con presente de indicativo, y el resultado va en futuro, en presente o en imperativo.",
          "¿Por qué presente? «Si» ya coloca la acción en el futuro, así que el verbo de la condición no necesita marcarlo. Por eso nunca se dice «si tendré» ni «si tenga».",
        ],
        [
          ["Si consigo diez clientes, ganaré lo suficiente.", "If I get ten clients, I'll earn enough. (consigo: presente tras si; ganaré: futuro)"],
          ["Si un cliente no paga, no le mando más pedidos.", "If a client doesn't pay, I don't send him more orders. (resultado en presente: una norma)"],
          ["Si necesitas ayuda con las cuentas, llama a mi hermana.", "If you need help with the accounts, call my sister. (resultado en imperativo)"],
        ],
        [
          fb("Completa el plan.", "Si los clientes están contentos, se lo ___ a sus amigos. (recomendar, futuro)", "recomendarán", "La condición ya está en presente (están), así que el resultado va en futuro: recomendarán."),
          mc(
            "Si ___ el sábado, cerraremos la terraza del bar.",
            ["llueve", "lloverá", "llueva", "llovería"],
            0,
            "Tras «si» real va presente de indicativo: llueve. «Lloverá» repite el futuro que ya da «si»; «llueva» es subjuntivo, que no va detrás de «si»; «llovería» es una hipótesis."
          ),
        ]
      ),
      sec(
        "Imaginar y aconsejar: el condicional",
        [
          "Cuando no es un plan sino una idea imaginada o un consejo, se usa el condicional: cobraría, haría, buscaría.",
          "«Yo que tú» y «Yo en tu lugar» + condicional es la fórmula del consejo: te pones en la situación del otro, que es imaginaria, y por eso el verbo va en condicional.",
        ],
        [
          ["Yo cobraría un poco más por los fines de semana.", "I'd charge a bit more for weekends. (una idea, no una decisión)"],
          ["Yo que tú, pediría un préstamo pequeño.", "If I were you, I'd ask for a small loan. (consejo)"],
        ],
        [
          fb("Completa el consejo.", "Yo en tu lugar ___ publicidad en el barrio. (hacer)", "haría", "Consejo con «yo en tu lugar» → condicional. Hacer es irregular: har- + ía = haría."),
        ]
      ),
      sec(
        "Dar, mandar, cobrar: dos pronombres",
        [
          "En un negocio todo se da, se manda y se cobra a alguien, así que a menudo hay dos pronombres. El indirecto (a quién) va primero y el directo (qué) después: me lo, te la, nos los.",
          "Le y les se convierten en «se» delante de lo, la, los, las. La razón es solo de sonido: «le lo» suena mal y el español lo evita.",
        ],
        [
          ["¿El presupuesto? Se lo mando mañana a la clienta.", "The estimate? I'll send it to the client tomorrow. (le + lo → se lo)"],
          ["¿Las facturas? Mi socio ya me las ha enviado.", "The invoices? My partner has already sent them to me. (me + las, delante de ha)"],
        ],
        [
          fb("Sustituye «las llaves del local» y «al electricista» por pronombres.", "Di las llaves del local al electricista. → ___ di.", "Se las", "Las llaves → las; al electricista → le, que delante de las se convierte en se: se las di."),
        ]
      ),
    ],
    [
      fb("Completa.", "¿El dinero? El cliente ya ___ lo ha pagado. (a mí)", "me", "A mí → me, y va antes de lo: me lo ha pagado."),
      fb("Completa.", "Es necesario que ___ puntual con los clientes. (ser, tú)", "seas", "Es necesario que + subjuntivo."),
      mc(
        "«I've earned more money this month than last month.»",
        ["Este mes he ganado más dinero que el mes pasado.", "Este mes gané más dinero de el mes pasado.", "Este mes había ganado más dinero que el mes pasado.", "Este mes he ganado más dinero como el mes pasado."],
        0,
        "«Este mes» no ha terminado: pretérito perfecto; la comparación es más… que. «Gané… de el mes» usa mal la preposición, «había ganado» es anterior a otro pasado y «como» es para igualdad."
      ),
      ms(
        "¿Qué frases son correctas?",
        ["Se buscan clientes responsables.", "Te lo cobro mañana.", "Ojalá que el negocio funcione.", "Si tendré más tiempo, crecerá."],
        [0, 1, 2],
        "«Si tendré más tiempo» es incorrecta: tras si va el presente, si tengo más tiempo. Las otras usan bien el se pasivo, los pronombres y ojalá + subjuntivo."
      ),
      toEs("Don't worry (tú), I'll return it to you tomorrow.", "No te preocupes, te lo devuelvo mañana.", "Negativo de tú con subjuntivo (no te preocupes) y te lo delante del verbo: te lo devuelvo.", ["No te preocupes, te lo devolveré mañana.", "Tranquilo, te lo devuelvo mañana."]),
      wo("Nunca pensé que sería tan difícil tener un negocio.", "Pretérito + condicional como futuro del pasado.", "I never thought having a business would be so hard."),
    ]
  ),
  L(
    "el-primer-campamento",
    "b1r-tema-sin-tecnologia",
    "Repaso temático: la vida sin tecnología",
    "Acampar sin móvil, sin wifi y sin enchufes — hipótesis, quejas y descubrimientos.",
    "7 min",
    [
      sec(
        "Sin pantallas",
        [
          "Recuerda las dos reglas del tema. 1) Quejarse y reaccionar: me molesta que, no soporto que, me preocupa que + subjuntivo, porque no informas de un hecho, reaccionas ante él (no soporto que no haya cobertura). Con el mismo sujeto va el infinitivo (no soporto esperar). Echar de menos (to miss) se conjuga en echar: echo, echas, echa de menos.",
          "2) Imaginar: «sin + algo» funciona como una condición escondida (sin móvil = si no tuviera móvil), así que el resultado va en condicional: leería, haríamos, nos perderíamos. Y para contar lo que pasó en el campamento: imperfecto para describir, indefinido para los hechos, pluscuamperfecto para lo anterior.",
        ],
        [
          ["No soporto que no haya cobertura.", "I can't stand that there's no signal. (reacción → haya)"],
          ["Sin móvil, leería más y hablaría más con mi familia.", "Without a phone, I'd read more and talk more with my family. (sin = condición → condicional)"],
          ["Echamos de menos la ducha caliente.", "We miss the hot shower. (echar se conjuga: echamos)"],
        ],
        [
          fb("Quéjate.", "Me molesta que no ___ enchufes. (haber)", "haya", "Me molesta que expresa una reacción → subjuntivo; el de hay es haya, siempre en singular. «Hay» sería informar, no quejarse."),
          fb("Imagina.", "Sin internet, yo ___ más tiempo al aire libre. (pasar)", "pasaría", "«Sin internet» es una condición imaginada → condicional: pasar + -ía. «Pasaré» sería un plan real."),
        ]
      ),
    ],
    [
      fb("Completa.", "El primer día ___ muy aburridos. (estar, nosotros)", "estábamos", "Describir cómo estábamos en el pasado → imperfecto: estábamos. «Estuvimos» resumiría el estado como un bloque cerrado, menos natural para una descripción."),
      fb("Completa.", "Al final, ___ que no necesitábamos tanto. (descubrir, nosotros)", "descubrimos", "Un descubrimiento puntual que hace avanzar la historia → indefinido: descubrimos. El imperfecto «descubríamos» sonaría a costumbre."),
      fb("Completa.", "Nunca ___ tantas estrellas. (ver, yo, pluscuamperfecto)", "había visto", "Nunca hasta ese momento del pasado → pluscuamperfecto: había + visto (participio irregular de ver)."),
      mt(
        "Relaciona cada objeto con su uso en el campamento.",
        [
          ["la linterna", "para ver de noche"],
          ["el saco de dormir", "para dormir"],
          ["la brújula", "para orientarse"],
          ["la hoguera", "para calentarse y cocinar"],
        ],
        "Vocabulario de acampada con para + infinitivo, que expresa la finalidad del objeto."
      ),
      toEs("I hope we do it again next year.", "Ojalá que lo repitamos el año que viene.", "«I hope» como deseo = ojalá + subjuntivo: lo repitamos.", ["Espero que lo repitamos el año que viene.", "Ojalá lo repitamos el año que viene.", "Ojalá que lo volvamos a hacer el año que viene."]),
      wo("Fue el fin de semana más tranquilo que habíamos tenido en años.", "Superlativo + relativa en pluscuamperfecto: habíamos tenido mira hacia los años anteriores a ese fin de semana.", "It was the most peaceful weekend we'd had in years."),
    ]
  ),
  L(
    "la-escritora-persistente",
    "b1r-tema-rechazo",
    "Repaso temático: aprender del rechazo",
    "Rechazos, segundas oportunidades y perseverancia — dar ánimos con el subjuntivo y el condicional.",
    "7 min",
    [
      sec(
        "Dar ánimos",
        [
          "Recuerda: cada frase para animar trae su propia regla. No te rindas → mandato negativo: no + pronombre + subjuntivo. Es normal que → valoración: subjuntivo (es normal que te rechacen). Estoy seguro de que → certeza: indicativo, a menudo en futuro (lo conseguirás). Yo que tú → consejo imaginado: condicional (lo intentaría).",
          "Fíjate en qué hace cada frase con la idea: si la afirmas, indicativo; si la valoras, la deseas o la mandas en negativo, subjuntivo; si la imaginas, condicional.",
        ],
        [
          ["No te rindas; es normal que te rechacen al principio.", "Don't give up; it's normal for them to reject you at first. (mandato negativo; valoración → rechacen)"],
          ["Estoy seguro de que la próxima vez lo conseguirás.", "I'm sure you'll make it next time. (certeza → indicativo)"],
          ["Yo que tú, se lo enseñaría a otra editorial.", "If I were you, I'd show it to another publisher. (consejo → condicional)"],
        ],
        [
          fb("Anima a tu amiga.", "No ___ el primer rechazo como algo personal. (tomarse, tú)", "te tomes", "Mandato negativo de tú con reflexivo: no + te + subjuntivo (tomes). «No tómate» es el error típico."),
          fb("Anima a tu amiga.", "Estoy convencido de que ___ talento. (tener, tú)", "tienes", "«Estar convencido de que» expresa certeza → indicativo: tienes, no «tengas»."),
        ]
      ),
    ],
    [
      fb("Completa.", "Me han ___ tres veces, pero sigo escribiendo. (rechazar)", "rechazado", "Pretérito perfecto: han + participio en -ado, que no cambia con el sujeto."),
      fb("Completa.", "Yo que tú, lo ___ a otra revista. (enviar)", "enviaría", "Yo que tú + condicional en primera persona: enviaría, no «enviarías»."),
      mc(
        "«It's a shame they didn't publish your story.»",
        ["Es una pena que no hayan publicado tu cuento.", "Es una pena que no han publicado tu cuento.", "Es una pena que no publicarán tu cuento.", "Es una pena de que no publicaron tu cuento."],
        0,
        "«Es una pena que» pide subjuntivo; para algo ya ocurrido, perfecto de subjuntivo: no hayan publicado. «Han publicado» y «publicarán» son indicativo, y «Es una pena de que» añade un «de» que sobra."
      ),
      ms(
        "¿Qué frases animan correctamente?",
        ["¡Sigue intentándolo!", "Ojalá que la próxima vez tengas suerte.", "No te preocupas.", "Estoy segura de que lo lograrás."],
        [0, 1, 3],
        "«¡Sigue intentándolo!», ojalá + subjuntivo y «estoy segura de que» + indicativo están bien. «No te preocupas» es incorrecta: el negativo usa subjuntivo, no te preocupes."
      ),
      toEs("Many famous writers were rejected before they succeeded.", "Muchos escritores famosos fueron rechazados antes de tener éxito.", "Pasiva con ser (fueron rechazados: el participio concuerda con escritores) + antes de + infinitivo, porque el sujeto es el mismo.", ["Muchos escritores famosos fueron rechazados antes de triunfar."]),
      wo("Lo importante es que nunca dejes de escribir.", "Lo importante es que + subjuntivo (dejes): es una valoración, como es importante que.", "The important thing is that you never stop writing."),
    ]
  ),
  L(
    "el-refugio-de-animales",
    "b1r-tema-voluntariado-animales",
    "Repaso temático: el refugio de animales",
    "Adoptar, cuidar y ayudar — relativas, mandatos y la voz pasiva en un refugio.",
    "8 min",
    [
      sec(
        "Recuerda la regla: tres herramientas del refugio",
        [
          "Recuerda las reglas. Relativas: indicativo para un animal o una persona concreta (el perro que adoptamos es muy tranquilo); subjuntivo para alguien que todavía buscas (buscamos a alguien que pueda pasear a los perros). Mandatos: afirmativo de tú con su forma propia y los pronombres pegados (pon, dáselo); negativo con no + subjuntivo (no le grites); ustedes siempre con subjuntivo (adopten, no compren). Pasiva con ser: el participio concuerda con el sujeto (la perra fue encontrada).",
          "¿Por qué el subjuntivo en «buscamos a alguien que pueda»? Porque esa persona todavía no existe para ti: la describes, pero no sabes quién es.",
        ],
        [
          ["Buscamos a alguien que pueda pasear a los perros.", "We're looking for someone who can walk the dogs. (alguien que buscas → subjuntivo)"],
          ["Este es el perro que fue abandonado en la carretera.", "This is the dog that was abandoned on the road. (perro concreto → indicativo; pasiva con ser)"],
          ["Acércate despacio y no le grites.", "Approach slowly and don't shout at him. (afirmativo con pronombre pegado; negativo con subjuntivo)"],
        ],
        [
          fb("Completa la instrucción.", "___ agua limpia a los gatos cada mañana. (poner, tú)", "Pon", "Mandato afirmativo de tú: poner tiene forma irregular, pon."),
          fb("Completa.", "La perra ___ encontrada por unos niños. (ser, pretérito)", "fue", "Pasiva con ser en indefinido: fue + participio, que concuerda con «la perra» (encontrada)."),
        ]
      ),
    ],
    [
      fb("Completa con un relativo.", "El gato ___ adoptamos se llama Mishi.", "que", "Sin preposición, el relativo es «que»: el gato que adoptamos."),
      fb("Completa.", "Es importante que los perros ___ ejercicio todos los días. (hacer)", "hagan", "«Es importante que» valora algo que debe ocurrir → subjuntivo: hagan."),
      fb("Completa.", "¿La correa? ___ a la voluntaria nueva. (dar, tú + se + la)", "Dásela", "Afirmativo de tú con dos pronombres pegados: da + se + la → dásela (con tilde)."),
      mc(
        "«Adopt, don't buy.» (ustedes)",
        ["Adopten, no compren.", "Adoptan, no compran.", "Adoptad, no compren.", "Adopten, no compran."],
        0,
        "Los mandatos de ustedes, afirmativos y negativos, usan el subjuntivo: adopten, no compren. «Adoptan / compran» son indicativo y «Adoptad» es de vosotros."
      ),
      ms(
        "¿Qué frases son correctas?",
        ["Se buscan familias de acogida.", "El perro que adopté es muy cariñoso.", "Ojalá que todos encuentren un hogar.", "Los gatos fueron vacunado ayer."],
        [0, 1, 2],
        "«Los gatos fueron vacunado» es incorrecta: el participio concuerda con el sujeto, fueron vacunados. Las otras frases usan bien el se pasivo, que y ojalá + subjuntivo."
      ),
      toEs("Since I adopted him, my dog has changed a lot.", "Desde que lo adopté, mi perro ha cambiado mucho.", "«Desde que» + indefinido marca el comienzo; el cambio hasta hoy va en perfecto (ha cambiado).", ["Desde que lo adopté, mi perro cambió mucho."]),
      wo("Nunca había visto un perro tan asustado como aquel.", "«Nunca había visto» (pluscuamperfecto) expresa una experiencia anterior a ese momento del pasado; la igualdad es tan + adjetivo + como: tan asustado como aquel.", "I had never seen a dog as frightened as that one."),
    ]
  ),
  L(
    "las-clases-de-conducir",
    "b1r-tema-conducir",
    "Repaso temático: aprender a conducir",
    "Instrucciones, nervios y el examen práctico — mandatos, si y reacciones emocionales.",
    "7 min",
    [
      sec(
        "En el coche",
        [
          "Recuerda la regla: el mandato afirmativo de tú es la forma él del presente (mira, frena), con algunos irregulares (pon, ten, mantén, sal); el negativo es el subjuntivo (no frenes, no conduzcas). En las condiciones reales, si + presente, nunca futuro ni subjuntivo (si llueve, enciende las luces). Y tras una emoción (me preocupa que, me pone nervioso que), subjuntivo.",
          "Ojo con la ortografía del subjuntivo: para mantener el sonido, -car → -que (aparques), -gar → -gue (pagues), -zar → -ce (empieces).",
        ],
        [
          ["Mira por el retrovisor antes de girar.", "Check the mirror before turning. (afirmativo = forma él)"],
          ["¡No frenes tan fuerte!", "Don't brake so hard! (negativo = subjuntivo)"],
          ["Si ves un peatón, para.", "If you see a pedestrian, stop. (si + presente, luego mandato)"],
          ["Me preocupa que conduzcas cansado.", "It worries me that you drive tired. (emoción → subjuntivo)"],
        ],
        [
          fb("Da la instrucción.", "___ el cinturón antes de arrancar. (ponerse, tú)", "Ponte", "Poner tiene mandato irregular de tú (pon) y el pronombre se pega detrás en el afirmativo: ponte."),
          fb("Da la instrucción.", "No ___ el móvil mientras conduces. (usar, tú)", "uses", "El negativo de tú es el subjuntivo: no uses (-ar → -e), no «no usas»."),
        ]
      ),
    ],
    [
      fb("Completa.", "Si ___ el examen, te regalaré el coche viejo. (aprobar, tú)", "apruebas", "En una condición real, si va con presente de indicativo (apruebas, con o → ue); el futuro va en la otra parte (regalaré)."),
      fb("Completa.", "Me pone nerviosa que mi padre me ___ todo el rato. (corregir)", "corrija", "Me pone nerviosa que es una emoción: subjuntivo. Corregir cambia e → i (corrijo) y g → j delante de a: corrija."),
      fb("Completa.", "Cuando por fin ___ el carné, lo celebramos. (sacarse, yo, pretérito)", "me saqué", "Un hecho puntual del pasado: indefinido. En yo, sacar escribe qu delante de e para mantener el sonido: me saqué."),
      mt(
        "Relaciona cada señal con su significado.",
        [
          ["Ceda el paso", "Yield"],
          ["Prohibido aparcar", "No parking"],
          ["Dirección prohibida", "Do not enter"],
          ["Obras", "Road work"],
        ],
        "Las señales usan formas fijas: ceda el paso es un mandato de usted, y prohibido + infinitivo indica lo que no se puede hacer."
      ),
      toEs("I'd drive more slowly if I were you.", "Yo que tú, conduciría más despacio.", "«If I were you» = yo que tú + condicional; conducir es irregular en presente (conduzco) y en indefinido (conduje), pero regular en el condicional: conduciría.", ["Yo en tu lugar, conduciría más despacio.", "Yo que tú, manejaría más despacio."]),
      wo("Nunca había conducido de noche hasta aquel día.", "Hasta aquel día es un límite pasado: nunca + pluscuamperfecto (había conducido).", "I had never driven at night until that day."),
      toEs(
        "Gira a la derecha y aparca aquí.",
        "No gires a la derecha ni aparques aquí.",
        "En negativo los dos mandatos pasan al subjuntivo: gires (-ar → -e) y aparques (c → qu delante de e).",
        ["No gires a la derecha y no aparques aquí."],
        "Cambia las instrucciones a negativo."
      ),
      toEs(
        "Si lloverá, conduce despacio.",
        "Si llueve, conduce despacio.",
        "Tras si, en una condición real, va presente de indicativo: llueve. El futuro (lloverá) nunca va después de este si.",
        ["Si llueve, maneja despacio."],
        "Corrige la frase."
      ),
    ]
  ),
  L(
    "el-teatro-comunitario",
    "b1r-tema-teatro",
    "Repaso temático: salvar la obra de teatro",
    "Un imprevisto antes del estreno — soluciones en condicional, peticiones y el se.",
    "7 min",
    [
      sec(
        "El imprevisto",
        [
          "Recuerda la regla: para proponer soluciones y pedir favores se usa el condicional (sería mejor, ¿podrías…?, yo que tú…), porque presenta la idea como posible y no como una orden; el futuro («cambiaré») suena a decisión ya tomada.",
          "Para anunciar lo que se necesita sin decir quién, se usa el se pasivo, y el verbo concuerda con lo que se necesita: se necesita un actor, se necesitan dos actores.",
          "Y para contar lo que ya había pasado antes de otro momento pasado, el pluscuamperfecto: dijo que se había roto la pierna.",
        ],
        [
          ["¿Podrías aprenderte el papel en tres días?", "Could you learn the part in three days?"],
          ["Se necesita un actor urgentemente.", "An actor is urgently needed."],
          ["Sería mejor cancelar la función.", "It would be better to cancel the show."],
        ],
        [
          fb("Propón una solución.", "Yo ___ el estreno una semana. (retrasar)", "retrasaría", "Una propuesta va en condicional: retrasaría. «Retrasaré» sonaría a decisión tomada, no a propuesta."),
          fb("Pide un favor.", "¿Te ___ ayudarnos con los decorados? (importar)", "importaría", "¿Te importaría + infinitivo? es una petición cortés; «¿te importa?» es más directo."),
        ]
      ),
    ],
    [
      fb("Completa.", "Es increíble que ___ el papel en tan poco tiempo. (aprenderse, ella)", "se aprenda", "Es increíble que + subjuntivo reflexivo."),
      fb("Completa.", "Las entradas ___ vendidas en dos días. (ser, pretérito)", "fueron", "Pasiva con ser."),
      mc(
        "«The actor who dropped out broke his leg.»",
        ["El actor que abandonó se rompió la pierna.", "El actor quien abandonó se rompió su pierna.", "El actor lo que abandonó se rompió la pierna.", "El actor que abandonó rompió su la pierna."],
        0,
        "Sin preposición se usa «que», y con partes del cuerpo el español usa el artículo, no el posesivo: se rompió la pierna. «Quien» sin coma, «lo que» y «su la pierna» son incorrectos."
      ),
      ms(
        "¿Qué frases son correctas?",
        ["Cuando llegué, ya se habían ido.", "Nunca había visto tanta gente.", "Me dijo que había perdido el tren.", "Cuando llegué, ya se han ido."],
        [0, 1, 2],
        "«Cuando llegué, ya se han ido» mezcla un pasado con el perfecto: ya se habían ido. Las otras usan bien el pluscuamperfecto."
      ),
      toEs("When the curtain went up, the audience had already filled the theater.", "Cuando se levantó el telón, el público ya había llenado el teatro.", "El momento de referencia va en pretérito (se levantó) y lo anterior en pluscuamperfecto (había llenado).", ["Cuando subió el telón, el público ya había llenado el teatro."]),
      wo("Al final, la función fue un éxito que nadie esperaba.", "Pretérito + relativa en imperfecto.", "In the end, the show was a success nobody expected."),
    ]
  ),
  L(
    "el-trabajo-en-equipo",
    "b1r-tema-trabajo-en-grupo",
    "Repaso temático: el trabajo en grupo",
    "Repartir tareas, quejarse con tacto y llegar a acuerdos — subjuntivo, mandatos de nosotros y condicional.",
    "7 min",
    [
      sec(
        "Organizar el grupo",
        [
          "Recuerda la regla: para proponer algo al grupo se usa el mandato de nosotros, que es el subjuntivo (hagamos, repartamos, no discutamos), o vamos a + infinitivo. Para sugerir, quejarse o valorar lo que hacen otros (propongo que, me molesta que, es justo que) también va subjuntivo, porque no describes un hecho: influyes o reaccionas.",
          "Para pedir con tacto, el condicional suaviza: ¿podrías...?, ¿te importaría...?, yo haría... En el afirmativo de nosotros los pronombres se pegan detrás (enviémoslo).",
        ],
        [
          ["Repartamos el trabajo de forma justa.", "Let's divide up the work fairly. (mandato de nosotros)"],
          ["Propongo que cada uno haga una parte.", "I propose that each person do one part. (propongo que + subjuntivo)"],
          ["¿Te importaría revisar mi parte?", "Would you mind checking my part? (condicional de cortesía)"],
        ],
        [
          fb("Propón al grupo.", "___ una reunión el lunes. (hacer, nosotros)", "Hagamos", "El mandato de nosotros es el subjuntivo, que sale de hago: hagamos. «Hacemos» sería una simple descripción."),
          fb("Propón al grupo.", "Sugiero que ___ un calendario. (crear, nosotros)", "creemos", "Sugerir que + subjuntivo: crear → creemos (-ar → -e, por eso dos e)."),
        ]
      ),
    ],
    [
      fb("Quéjate con tacto.", "Me molesta un poco que no ___ a las reuniones. (venir, tú)", "vengas", "Una reacción emocional (me molesta que) pide subjuntivo: vengas, de vengo."),
      fb("Completa.", "¿Podrías encargar___ de la presentación? (tú)", "te", "Con infinitivo, el pronombre reflexivo se pega al final: encargarte."),
      fb("Completa.", "Hasta ahora, solo Ana ___ su parte. (terminar, perfecto)", "ha terminado", "Hasta ahora mira hacia atrás desde el presente: pretérito perfecto, ha terminado."),
      mc(
        "«Let's not argue.»",
        ["No discutamos.", "No discutimos.", "No discutáis.", "No discutir nosotros."],
        0,
        "El mandato negativo de nosotros usa el subjuntivo: no discutamos. «No discutimos» es indicativo, «no discutáis» es de vosotros y «No discutir nosotros» no es una estructura posible."
      ),
      ms(
        "¿Qué frases son buenas para llegar a un acuerdo?",
        ["¿Qué os parece si dividimos las tareas?", "Yo haría la introducción, si os parece bien.", "Es mejor que todos participemos.", "Haz tú todo."],
        [0, 1, 2],
        "Proponer (¿Qué os parece si…?), ofrecerse con condicional y «es mejor que todos participemos» ayudan a llegar a un acuerdo. «Haz tú todo» es una orden poco colaborativa."
      ),
      toEs("It's fair that everyone works the same.", "Es justo que todos trabajen lo mismo.", "«Es justo que» es una valoración y pide subjuntivo: trabajen.", ["Es justo que todo el mundo trabaje lo mismo.", "Es justo que todos trabajemos lo mismo."]),
      wo("Al final entregamos el proyecto que habíamos preparado juntos.", "Entregamos (indefinido) es el hecho; preparar el proyecto fue antes, así que la oración con que va en pluscuamperfecto.", "In the end we handed in the project we had prepared together."),
      toEs(
        "Vamos a hacer una pausa.",
        "Hagamos una pausa.",
        "El mandato de nosotros sustituye a vamos a + infinitivo con el subjuntivo: hagamos (de hago).",
        [],
        "Cambia la propuesta al mandato de nosotros."
      ),
      toEs(
        "Me molesta que nadie lee mis correos.",
        "Me molesta que nadie lea mis correos.",
        "Me molesta que expresa una emoción y pide subjuntivo: lea, no «lee».",
        [],
        "Corrige la frase."
      ),
    ]
  ),
  L(
    "la-reunion-familiar",
    "b1r-tema-reunion-familiar",
    "Repaso temático: la reunión familiar",
    "Reencuentros, viejos conflictos y reconciliaciones — pasados, emociones y deseos.",
    "8 min",
    [
      sec(
        "La idea: cada tiempo cuenta una parte del reencuentro",
        [
          "Recuerda la regla: al contar un reencuentro, cada tiempo tiene su trabajo. Lo que ya había pasado antes de otro momento pasado va en pluscuamperfecto (ya se habían ido). Lo que ha cambiado hasta hoy va en pretérito perfecto (ha crecido). Las costumbres de antes van en imperfecto (nos peleábamos). Lo que sientes o deseas sobre otra persona va en subjuntivo (me alegro de que estés aquí).",
          "¿Por qué? El tiempo verbal coloca cada hecho en la línea del tiempo, y el subjuntivo indica que la frase no informa de un hecho: lo valora o lo desea.",
        ],
        [
          ["Hacía diez años que no veía a mi hermano.", "I hadn't seen my brother in ten years. (hacía… que no + imperfecto)"],
          ["Cuando llegué, todos ya habían comido.", "When I arrived, everyone had already eaten. (antes de «llegué» → pluscuamperfecto)"],
          ["Mi abuela ha envejecido, pero sigue igual de alegre.", "My grandmother has got older, but she's as cheerful as ever. (cambio hasta hoy → perfecto)"],
          ["De pequeños, veraneábamos en el pueblo.", "As kids, we used to spend the summer in the village. (costumbre → imperfecto)"],
          ["Me alegro de que por fin estemos todos juntos.", "I'm glad we're finally all together. (emoción + que → subjuntivo)"],
        ],
        [
          fb("Completa.", "Mis primos ___ mucho desde la última vez. (cambiar, perfecto)", "han cambiado", "«Desde la última vez» llega hasta hoy: el cambio se mide ahora, por eso pretérito perfecto (han cambiado). «Cambiaron» cerraría el periodo en el pasado."),
          fb("Completa.", "Ojalá que ___ más a menudo. (verse, nosotros)", "nos veamos", "«Ojalá» expresa un deseo y siempre pide subjuntivo; el verbo es recíproco, así que lleva «nos»: nos veamos."),
        ]
      ),
    ],
    [
      fb("Completa.", "Cuando llegué, mi abuela ya ___ la comida. (preparar, pluscuamperfecto)", "había preparado", "La comida estaba hecha antes de que yo llegara: lo anterior a otro pasado va en pluscuamperfecto (había preparado). «Preparó» diría que cocinó después de que yo llegué."),
      fb("Completa.", "De niños, mi hermano y yo ___ mucho. (pelearse)", "nos peleábamos", "«De niños» marca una costumbre del pasado → imperfecto: nos peleábamos. El indefinido «nos peleamos» contaría una sola pelea."),
      fb("Completa.", "Siento que no ___ hablado antes. (haber, nosotros)", "hayamos", "«Siento que» expresa una emoción → subjuntivo. Como lo que lamentas ya ha pasado, va en perfecto de subjuntivo: hayamos hablado."),
      mt(
        "Relaciona cada familiar con su definición.",
        [
          ["mi cuñado", "el marido de mi hermana"],
          ["mi suegra", "la madre de mi pareja"],
          ["mi sobrina", "la hija de mi hermano"],
          ["mi bisabuelo", "el padre de mi abuelo"],
        ],
        "Cuñado/a = la pareja de tu hermano/a; suegro/a = los padres de tu pareja; sobrino/a = los hijos de tus hermanos; bisabuelo/a = los padres de tus abuelos."
      ),
      toEs("I hope you (vosotros) stay a few more days.", "Espero que os quedéis unos días más.", "«Esperar que» expresa un deseo sobre otras personas → subjuntivo. Para vosotros: os quedéis (con ustedes: se queden).", ["Ojalá que os quedéis unos días más.", "Espero que se queden unos días más."]),
      wo("Nos abrazamos y nos prometimos no esperar tanto otra vez.", "Dos acciones puntuales del reencuentro → indefinido recíproco (nos abrazamos, nos prometimos); después de «prometer» va el infinitivo.", "We hugged and promised each other not to wait so long again."),
    ]
  ),
  L(
    "el-periodico-escolar",
    "b1r-tema-rumores",
    "Repaso temático: rumores y verdades",
    "Periodismo escolar: distinguir lo que es cierto de lo que se dice — se dice que, es verdad que, dudo que.",
    "8 min",
    [
      sec(
        "Rumor o noticia",
        [
          "Recuerda la regla: si presentas algo como información (aunque sea un rumor) o como cierto, va indicativo: se dice que, dicen que, es verdad que, es evidente que, creo que + indicativo. Si lo pones en duda, lo niegas o solo lo ves posible, va subjuntivo: dudo que, no es verdad que, no creo que, es posible que + subjuntivo.",
          "¿Por qué «se dice que» lleva indicativo si no es seguro? Porque estás transmitiendo lo que se cuenta, no juzgándolo. El subjuntivo aparece solo cuando tú cuestionas la información. Por eso basta con añadir «no» para cambiar el modo: es verdad que cierra → no es verdad que cierre.",
        ],
        [
          ["Se dice que van a cerrar la cafetería.", "They say they're going to close the cafeteria. [transmites un rumor → indicativo]"],
          ["Dudo que la cierren; es muy popular.", "I doubt they'll close it; it's very popular. [dudar → subjuntivo]"],
          ["Es evidente que alguien ha filtrado las preguntas.", "It's obvious someone has leaked the questions. [certeza → indicativo]"],
          ["No creo que el director lo sepa.", "I don't think the principal knows. [no creer → subjuntivo]"],
        ],
        [
          fb("Cuestiona el rumor.", "No es verdad que el director ___ a dimitir. (ir)", "vaya", "«No es verdad que» niega la información → subjuntivo: vaya. Con «es verdad que» iría «va»."),
          fb("Confirma el hecho.", "Es verdad que ___ una nueva profesora. (llegar, futuro)", "llegará", "«Es verdad que» presenta algo como cierto → indicativo: llegará."),
          mc(
            "«Dicen que el comedor ___ más barato el próximo curso.»",
            ["será", "sea", "fuera", "sería"],
            0,
            "«Dicen que» solo transmite información, aunque sea un rumor → indicativo: será. «Sea» y «fuera» son subjuntivo, que aparece cuando tú lo cuestionas (dudo que sea), y «sería» es condicional."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "Según las fuentes, el rumor ___ en las redes sociales. (empezar, pretérito)", "empezó", "El inicio del rumor es un hecho puntual y terminado → pretérito: empezó."),
      fb("Completa.", "El artículo ___ publicado el lunes. (ser, futuro)", "será", "Pasiva con ser en futuro: será + participio concordando con «el artículo» (publicado)."),
      fb("Completa.", "Es importante que los periodistas ___ la información. (comprobar)", "comprueben", "«Es importante que» expresa una valoración → subjuntivo. Comprobar diptonga (o → ue): comprueben."),
      mc(
        "«Someone had invented the whole story.»",
        ["Alguien se había inventado toda la historia.", "Alguien se ha inventado toda la historia ayer.", "Alguien inventaba toda la historia una vez.", "Alguien se había inventando toda la historia."],
        0,
        "«Had invented» = pluscuamperfecto, con el pronombre delante: se había inventado. «Se ha inventado… ayer» mezcla tiempos, «inventaba» es imperfecto e «inventando» es gerundio, no participio."
      ),
      ms(
        "¿Qué frases son correctas?",
        ["Se rumorea que habrá examen sorpresa.", "Dudo que sea cierto.", "Creo que sea mentira.", "No creo que sea mentira."],
        [0, 1, 3],
        "«Creo que sea mentira» es incorrecta: creer afirmativo lleva indicativo, creo que es mentira. «Dudo que» y «no creo que» sí piden subjuntivo, y «se rumorea que» presenta información."
      ),
      toEs("What they told me wasn't true.", "Lo que me contaron no era verdad.", "«Lo que» = what (una idea sin sustantivo). Contar es un hecho cerrado (pretérito: contaron) y «no era verdad» describe la situación (imperfecto).", ["Lo que me dijeron no era verdad.", "Lo que me contaron no era cierto."]),
      wo("El periodista que descubrió la verdad es de mi clase.", "«El periodista que descubrió…»: «que» sin preposición introduce la relativa, y el verbo va en pretérito porque descubrir la verdad ya pasó.", "The journalist who discovered the truth is in my class."),
    ]
  ),
  L(
    "el-jardin-comunitario",
    "b1r-tema-activismo-vecinal",
    "Repaso temático: salvar el barrio",
    "Recogida de firmas, protestas y propuestas — expresiones impersonales, pasiva y mandatos de ustedes.",
    "7 min",
    [
      sec(
        "Valorar o constatar: ¿subjuntivo o indicativo?",
        [
          "Recuerda la regla: las expresiones que valoran o exigen (es inaceptable que, es urgente que, exigimos que) llevan subjuntivo, porque juzgan o piden algo; no lo informan. Las que constatan un hecho (está claro que, es evidente que) llevan indicativo.",
          "Para llamar a la acción a un grupo se usa el mandato de ustedes, que tiene la forma del subjuntivo: firmen, vengan, no se queden. En positivo, el pronombre va pegado (compártanla); en negativo, delante (no la compartan).",
        ],
        [
          ["Es inaceptable que quieran destruir el jardín.", "It's unacceptable that they want to destroy the garden. (valoración: subjuntivo)"],
          ["Está claro que el barrio necesita zonas verdes.", "It's clear the neighbourhood needs green spaces. (hecho: indicativo)"],
          ["Firmen la petición y compártanla.", "Sign the petition and share it. (ustedes: forma de subjuntivo)"],
        ],
        [
          fb("Completa el cartel.", "¡___ a la reunión del jueves! (venir, ustedes)", "Vengan", "Mandato de ustedes = subjuntivo, que sale de la forma yo (vengo): vengan."),
          fb("Completa el cartel.", "Es urgente que el ayuntamiento nos ___. (escuchar)", "escuche", "«Es urgente que» exige algo, no lo informa: subjuntivo, escuche."),
        ]
      ),
      sec(
        "Contar lo que se ha hecho: la pasiva",
        [
          "Cuando importa la acción y no quién la hace, se usa la pasiva. Con se, el verbo concuerda con la cosa: se han recogido mil firmas. Con ser + participio, el participio concuerda también: la petición fue entregada.",
        ],
        [
          ["Ya se han recogido más de mil firmas.", "More than a thousand signatures have already been collected. (se + verbo en plural: firmas)"],
          ["El huerto fue inaugurado por los vecinos en 2010.", "The vegetable garden was opened by the neighbours in 2010. (inaugurado: concuerda con el huerto)"],
        ],
        [
          mc(
            "Ayer ___ cien camisetas con el lema de la campaña.",
            ["se vendieron", "se vendió", "vendieron se", "fue vendidas"],
            0,
            "Pasiva con se: el verbo concuerda con «cien camisetas» (plural), se vendieron. «Se vendió» no concuerda y «fue vendidas» mezcla singular y plural."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "El jardín ___ creado por los vecinos hace veinte años. (ser, pretérito)", "fue", "Pasiva con ser."),
      fb("Completa.", "Si no hacemos nada, lo ___ en un aparcamiento. (convertir, ellos, futuro)", "convertirán", "Si + presente + futuro."),
      fb("Completa.", "Exigimos que ___ el proyecto. (paralizar, ustedes)", "paralicen", "Exigir que + subjuntivo; z → c."),
      mt(
        "Relaciona cada acción con su propósito.",
        [
          ["recoger firmas", "demostrar el apoyo vecinal"],
          ["hablar con la prensa", "dar visibilidad"],
          ["organizar una fiesta en el jardín", "atraer a más gente"],
          ["pedir una reunión", "negociar con el ayuntamiento"],
        ],
        "Acciones típicas de una campaña."
      ),
      toEs("It's important that everyone participates.", "Es importante que todo el mundo participe.", "«Es importante que» pide subjuntivo; «todo el mundo» es singular: participe.", ["Es importante que todos participen.", "Es importante que participe todo el mundo."]),
      wo("Gracias a la campaña, el jardín no será destruido.", "Pasiva con ser en futuro.", "Thanks to the campaign, the garden won't be destroyed."),
    ]
  ),
  L(
    "factura-que-nunca-llega",
    "b1r-tema-reclamar-pago",
    "Repaso temático: reclamar un pago",
    "Correos firmes pero educados: pedir, recordar y exigir — cortesía, subjuntivo y pretérito perfecto.",
    "8 min",
    [
      sec(
        "Recuerda la regla: del recordatorio a la exigencia",
        [
          "Recuerda la regla: el tono sube paso a paso, pero la gramática es la misma. Primer correo, cortés: condicional (¿podría…?, le agradecería…). Segundo, más directo: le ruego que + subjuntivo. Tercero, firme: exijo que + subjuntivo. Lo que todavía no ha pasado va en pretérito perfecto (todavía no he recibido el pago), y la amenaza final, con si + presente + futuro.",
          "¿Por qué subjuntivo después de rogar y exigir? Porque pides que otra persona haga algo que aún no ha hecho: es una influencia sobre otro, no un hecho.",
        ],
        [
          ["¿Podría confirmarme la fecha de pago?", "Could you confirm the payment date? (condicional de cortesía)"],
          ["Le ruego que realice el pago cuanto antes.", "I ask that you make the payment as soon as possible. (rogar que + subjuntivo)"],
          ["Todavía no he recibido el pago de la factura de marzo.", "I still haven't received payment for the March invoice. (todavía no + perfecto)"],
          ["Si no recibo el dinero, tomaré medidas legales.", "If I don't receive the money, I'll take legal action. (si + presente, futuro)"],
        ],
        [
          fb("Completa el recordatorio.", "Le ruego que me ___ el pago esta semana. (hacer)", "haga", "«Rogar que» pide algo a otra persona → subjuntivo: haga (hago → haga)."),
          fb("Completa el recordatorio.", "Todavía no ___ la transferencia. (recibir, yo, perfecto)", "he recibido", "«Todavía no» habla de algo que no ha ocurrido hasta ahora → pretérito perfecto: he recibido."),
        ]
      ),
    ],
    [
      fb("Completa.", "Le ___ tres correos y no me ha contestado. (enviar, yo, perfecto)", "he enviado", "Los correos se cuentan hasta ahora → perfecto: le he enviado."),
      fb("Completa.", "Es necesario que ___ la situación antes del viernes. (resolver, usted)", "resuelva", "«Es necesario que» → subjuntivo; resolver cambia o → ue: resuelva."),
      fb("Completa.", "Si no recibo el pago, ___ que tomar medidas. (tener, yo, futuro)", "tendré", "Condición real: si + presente, consecuencia en futuro; tener es irregular: tendré."),
      mc(
        "¿Qué frase es la más cortés?",
        ["Le agradecería que revisara la factura.", "¡Pague ya!", "Me debe dinero.", "Revise la factura, rápido."],
        0,
        "«Le agradecería que…» usa usted y el condicional de cortesía (con imperfecto de subjuntivo, que verás en el nivel Avanzado). «¡Pague ya!», «Me debe dinero» y «Revise la factura, rápido» son directos o bruscos."
      ),
      ms(
        "¿Qué frases son correctas en un correo formal?",
        ["Adjunto le envío la factura.", "Quedo a la espera de su respuesta.", "Oye, págame ya.", "Le recuerdo que el plazo venció ayer."],
        [0, 1, 3],
        "«Adjunto le envío», «Quedo a la espera de su respuesta» y «Le recuerdo que» son fórmulas de correo formal. «Oye, págame ya» es demasiado informal y brusco."
      ),
      toEs("I have sent you (usted) the invoice again.", "Le he enviado la factura otra vez.", "«You» (usted) → le, delante de haber: le he enviado.", ["Le he vuelto a enviar la factura.", "Le he enviado otra vez la factura.", "Le he mandado la factura otra vez."]),
      wo("Espero que podamos resolverlo sin problemas.", "«Esperar que» + subjuntivo (podamos); el pronombre se pega al infinitivo: resolverlo.", "I hope we can resolve it without problems."),
    ]
  ),
  L(
    "error-del-becario",
    "b1r-tema-admitir-errores",
    "Repaso temático: admitir un error",
    "Confesar, disculparse y proponer soluciones — pasados, pronombres dobles y subjuntivo.",
    "7 min",
    [
      sec(
        "La confesión",
        [
          "Recuerda las tres partes de una buena disculpa y su gramática. Explicar lo que pasó: pretérito perfecto o indefinido para el error, y pluscuamperfecto para lo que ya había pasado antes (no sabía que ya lo había enviado).",
          "Disculparse: «siento que» + subjuntivo, porque es una reacción ante un hecho; si el hecho ya pasó, perfecto de subjuntivo (siento que haya pasado). Proponer: el condicional (podría, ayudaría) ofrece una solución sin imponerla.",
        ],
        [
          ["Tengo que decirle algo: he borrado el archivo por error.", "I have to tell you something: I deleted the file by mistake."],
          ["Siento mucho que haya pasado esto.", "I'm very sorry this happened."],
          ["Podría recuperarlo con la copia de seguridad.", "I could recover it with the backup."],
        ],
        [
          fb("Completa la confesión.", "No me di cuenta de que ya lo ___ enviado. (haber, yo)", "había", "El envío fue antes de darme cuenta (otro pasado): pluscuamperfecto, había enviado."),
          fb("Completa la disculpa.", "Siento que ___ que trabajar el fin de semana por mi culpa. (tener, ustedes)", "tengan", "«Siento que» reacciona ante un hecho y pide subjuntivo: tengan."),
        ]
      ),
    ],
    [
      fb("Completa.", "¿El informe? Se ___ mandé al cliente equivocado.", "lo", "El informe → lo, detrás de se (le → se): se lo mandé."),
      fb("Completa.", "Es mejor que ___ la verdad cuanto antes. (decir, tú)", "digas", "«Es mejor que» aconseja a una persona concreta: subjuntivo, digas (de digo)."),
      { ...fb("Completa.", "Si lo ocultas, será peor cuando lo ___. (descubrir, ellos)", "descubran", "«Cuando» habla de algo futuro, que aún no ha pasado: subjuntivo, descubran."), altAnswers: ["sepan"] },
      mt(
        "Relaciona cada frase con su función.",
        [
          ["Ha sido culpa mía.", "admitir"],
          ["Lo siento muchísimo.", "disculparse"],
          ["Lo arreglaré hoy mismo.", "ofrecer una solución"],
          ["No volverá a pasar.", "prometer"],
        ],
        "Pasos de una buena disculpa."
      ),
      mc(
        "Tu jefa responde: «Gracias por decírmelo.» ¿Qué significa?",
        ["Thanks for telling me.", "Thanks for saying it to them.", "Tell me thanks.", "Thanks, tell it."],
        0,
        "Decírmelo = decir + me (a mí) + lo (eso): thanks for telling me. No es «to them» (sería decírselo), ni una orden («tell me»)."
      ),
      toEs("I didn't know that the file was so important.", "No sabía que el archivo era tan importante.", "Imperfecto para estados en el pasado.", ["Yo no sabía que el archivo era tan importante."]),
      wo("Lo importante es que aprendas de tus errores.", "Lo importante es que + subjuntivo.", "The important thing is that you learn from your mistakes."),
    ]
  ),
  L(
    "competencia-por-el-ascenso",
    "b1r-tema-ascenso",
    "Repaso temático: el ascenso",
    "Competir con un amigo, entrevistas internas y felicitaciones — comparaciones, subjuntivo y condicional.",
    "8 min",
    [
      sec(
        "Dos candidatos",
        [
          "Recuerda la regla para comparar: más / menos + adjetivo o sustantivo + que (más experiencia que); para la igualdad, tan + adjetivo + como (tan creativo como), pero tanto/a/os/as + sustantivo + como (tantos proyectos como). ¿Por qué cambia? «Tan» acompaña a cualidades y no varía; «tanto» acompaña a cosas que se cuentan, por eso concuerda con ellas.",
          "Para reaccionar ante el resultado: emoción + que + otra persona → subjuntivo (me alegro de que, es una pena que, ojalá). Si el hecho acaba de ocurrir, perfecto de subjuntivo: me alegro de que te hayan elegido. Y para aconsejar, yo que tú + condicional: yo que tú, me presentaría.",
        ],
        [
          ["Ana tiene más experiencia que Luis, pero Luis es tan creativo como ella.", "Ana has more experience than Luis, but Luis is as creative as she is. [más + sustantivo + que; tan + adjetivo + como]"],
          ["Me alegro de que te hayan elegido a ti.", "I'm glad they chose you. [emoción + que → subjuntivo; reciente → perfecto]"],
          ["Ella ha dirigido tantos equipos como él.", "She has led as many teams as he has. [tantos concuerda con «equipos»]"],
        ],
        [
          fb("Compara.", "Luis ha trabajado aquí ___ tiempo que Ana. (menos)", "menos", "Inferioridad con sustantivo: menos + tiempo + que. «Menos» nunca cambia de forma."),
          fb("Reacciona.", "¡Enhorabuena! Me alegro mucho de que ___ el puesto. (conseguir, tú, perfecto)", "hayas conseguido", "Alegrarse de que + otra persona → subjuntivo; como acaba de pasar, perfecto de subjuntivo: hayas conseguido."),
          mc(
            "La nueva jefa tiene ___ paciencia como la anterior.",
            ["tanta", "tan", "tanto", "tantas"],
            0,
            "Delante de un sustantivo va «tanto», concordando con él: «paciencia» es femenino singular → tanta. «Tan» solo va con adjetivos o adverbios (tan paciente), y «tanto» / «tantas» no concuerdan con «paciencia»."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "Yo en tu lugar ___ al puesto. (presentarse)", "me presentaría", "Consejo con «yo en tu lugar» → condicional; el verbo es reflexivo (presentarse a un puesto), así que el pronombre va delante: me presentaría."),
      fb("Completa.", "No creo que la amistad ___ por esto. (cambiar)", "cambie", "«No creo que» expresa duda → subjuntivo: cambie. Con «creo que» (afirmativo) iría indicativo."),
      fb("Completa.", "La decisión ___ tomada por el comité. (ser, pretérito)", "fue", "Pasiva con ser: ser + participio concordando con el sujeto (la decisión → tomada) + por + quien lo hace. Es un hecho cerrado: fue."),
      mc(
        "«Congratulations! You deserve it.»",
        ["¡Enhorabuena! Te lo mereces.", "¡Enhorabuena! Te lo merezcas.", "¡Enhorabuena! Lo te mereces.", "¡Enhorabuena! Se lo mereces."],
        0,
        "«Merecerse algo» en presente de indicativo: te lo mereces (es un hecho). «Merezcas» es subjuntivo sin motivo, «Lo te» invierte el orden y «Se lo mereces» usa el pronombre de otra persona."
      ),
      ms(
        "¿Qué frases son correctas?",
        ["Es la persona más trabajadora del equipo.", "Ojalá que me elijan a mí.", "Tiene tanta experiencia como yo.", "Es más mejor candidato."],
        [0, 1, 2],
        "«Es más mejor candidato» es incorrecta: mejor ya es comparativo y no lleva «más». Las otras usan bien el superlativo, ojalá + subjuntivo y tanto… como."
      ),
      toEs("Whatever happens, we will still be friends.", "Pase lo que pase, seguiremos siendo amigos.", "Pase lo que pase = whatever happens (subjuntivo fijo).", ["Pase lo que pase, seguiremos siendo amigas.", "Pase lo que pase, vamos a seguir siendo amigos."]),
      wo("Lo que más me importa es que sigamos siendo amigos.", "«Lo que más me importa» = 'what matters most to me'; «es que» + otro sujeto (nosotros) pide subjuntivo: sigamos.", "What matters most to me is that we stay friends."),
    ]
  ),
  L(
    "ruido-piso-arriba",
    "b1r-tema-convivencia-vecinos",
    "Repaso temático: problemas de convivencia",
    "Ruidos, normas del edificio y soluciones pactadas — peticiones corteses, se impersonal y subjuntivo.",
    "7 min",
    [
      sec(
        "Hablar con el vecino",
        [
          "Recuerda la estructura de una queja educada: disculpa (perdona que te moleste), problema (me molesta que…, se oye…), petición (¿podrías…?, ¿te importaría…?) y propuesta (¿qué te parece si…?).",
          "Cada parte tiene su regla. Perdona que y me molesta que llevan subjuntivo, porque reaccionan ante algo. El condicional (podrías, te importaría) suaviza la petición porque la presenta como una posibilidad, no como una orden. Y «¿qué te parece si…?» va con presente de indicativo, como cualquier «si» real.",
        ],
        [
          ["Perdona que te moleste, pero se oye mucho ruido por la noche.", "Sorry to bother you, but a lot of noise can be heard at night. (perdona que + subjuntivo)"],
          ["¿Podrías poner la música más baja después de las once?", "Could you turn the music down after eleven? (condicional: petición suave)"],
          ["¿Qué te parece si hablamos con el presidente de la comunidad?", "How about we talk to the residents' association chair? (si + presente)"],
        ],
        [
          fb("Completa la queja.", "Perdona que te ___ tan tarde. (llamar, yo)", "llame", "«Perdona que» reacciona ante algo y pide subjuntivo: llame."),
          fb("Completa la propuesta.", "¿Qué te parece si ___ unas normas para todo el edificio? (hacer, nosotros)", "hacemos", "Tras «¿qué te parece si…?» va presente de indicativo, como con cualquier si real: hacemos."),
        ]
      ),
    ],
    [
      fb("Completa las normas.", "No se ___ hacer obras los domingos. (poder)", "pueden", "Se + poder + infinitivo con un plural (obras): lo normal es concordar, pueden (también se oye puede)."),
      fb("Completa las normas.", "Es necesario que todos ___ el descanso de los demás. (respetar)", "respeten", "«Es necesario que» exige algo: subjuntivo, respeten."),
      fb("Completa.", "Desde que hablamos, no ___ ningún problema. (haber, perfecto)", "ha habido", "Haber en perfecto: ha habido."),
      mt(
        "Relaciona cada problema con una petición adecuada.",
        [
          ["El perro ladra todo el día.", "¿Podrías sacarlo más a menudo?"],
          ["Los tacones suenan mucho.", "¿Te importaría usar zapatillas en casa?"],
          ["Tiran basura al patio.", "Les ruego que usen los contenedores."],
          ["Aparcan en mi plaza.", "Por favor, no aparquen aquí."],
        ],
        "Peticiones con condicional, subjuntivo o mandato."
      ),
      toEs("I'm sorry, I didn't know that you could hear it.", "Lo siento, no sabía que se oía.", "«You could hear it» en general = se oía (se impersonal en imperfecto).", ["Lo siento, no sabía que se escuchaba.", "Perdona, no sabía que se oía.", "Lo siento, no sabía que se podía oír.", "Perdona, no sabía que se podía oír.", "Lo siento, no sabía que se podía escuchar."]),
      wo("Al final nos hicimos amigos del vecino de arriba.", "Hacerse amigos + del (de + el).", "In the end we became friends with the upstairs neighbor."),
    ]
  ),
  L(
    "la-vecina-nueva",
    "b1r-tema-inmigracion",
    "Repaso temático: empezar en un país nuevo",
    "Adaptarse, echar de menos y hacer amigos — emociones, pasados y relativas.",
    "8 min",
    [
      sec(
        "Recuerda la regla: tres pasados para una adaptación",
        [
          "Recuerda la regla: al contar cómo te adaptaste, el imperfecto describe cómo eran las cosas y cómo te sentías (no conocía a nadie), el indefinido cuenta lo que pasó en un momento concreto (un día una vecina me invitó) y el perfecto resume lo que has conseguido hasta hoy (he hecho amigos). Las emociones sobre otras personas van en subjuntivo (me alegra que la gente sea acogedora).",
          "¿Por qué? El imperfecto es el decorado de la historia; el indefinido, los hechos que la hacen avanzar; el perfecto, el balance desde el presente.",
        ],
        [
          ["Al principio no conocía a nadie y echaba de menos a mi familia.", "At first I didn't know anyone and I missed my family. (decorado → imperfecto)"],
          ["Un día una vecina me invitó a tomar café.", "One day a neighbor invited me for coffee. (hecho puntual → indefinido)"],
          ["Desde entonces he hecho muchos amigos.", "Since then I've made many friends. (balance hasta hoy → perfecto)"],
          ["Me alegra que mis compañeros sean tan pacientes.", "I'm glad my colleagues are so patient. (emoción → subjuntivo)"],
        ],
        [
          fb("Completa.", "Lo que más me ___ era el idioma. (costar)", "costaba", "Una dificultad que duraba en el pasado es decorado → imperfecto: costaba. «Costó» la presentaría como algo cerrado."),
          fb("Completa.", "Me alegra que la gente ___ tan acogedora. (ser)", "sea", "«Me alegra que» expresa una emoción → subjuntivo: sea."),
        ]
      ),
    ],
    [
      fb("Completa.", "La vecina ___ me ayudó se llama Pilar.", "que", "Sin preposición, el relativo es «que», también para personas: la vecina que me ayudó."),
      fb("Completa.", "Cuando llegué, nunca ___ comido tortilla de patatas. (haber, yo)", "había", "La experiencia es anterior a «llegué» → pluscuamperfecto: había comido."),
      fb("Completa.", "Espero que mis padres ___ a visitarme pronto. (venir)", "vengan", "«Esperar que» expresa un deseo sobre otras personas → subjuntivo: vengan."),
      mc(
        "«I miss the food from my country.»",
        ["Echo de menos la comida de mi país.", "Echo de menos a la comida de mi país.", "Extraño de la comida de mi país.", "Me echa de menos la comida de mi país."],
        0,
        "Con cosas, «echar de menos» va sin a: echo de menos la comida. La a solo se pone con personas. «Extraño de» añade una preposición que sobra y «Me echa de menos» invierte quién siente la falta."
      ),
      ms(
        "¿Qué frases son correctas?",
        ["Me he adaptado muy bien.", "Echo de menos a mis amigos.", "Es normal que te sientas solo al principio.", "Cuando llegaré, no hablaba español."],
        [0, 1, 2],
        "«Cuando llegaré, no hablaba español» es incorrecta: para un hecho pasado se usa el pretérito, cuando llegué. Las otras usan bien el perfecto, echar de menos a + persona y es normal que + subjuntivo."
      ),
      toEs("It's the neighbor with whom I cook every Sunday.", "Es la vecina con quien cocino todos los domingos.", "«With whom» = con quien (tras preposición, para personas).", ["Es la vecina con la que cocino todos los domingos.", "Es la vecina con quien cocino cada domingo."]),
      wo("Nunca pensé que me sentiría en casa tan pronto.", "Pretérito + condicional: el condicional es el futuro visto desde el pasado (pensé que me sentiría).", "I never thought I would feel at home so soon."),
    ]
  ),
  L(
    "aviso-de-desalojo",
    "b1r-tema-derechos-inquilinos",
    "Repaso temático: los derechos de los inquilinos",
    "Contratos, abogados y asambleas de vecinos — la voz pasiva, el subjuntivo de necesidad y las condiciones.",
    "7 min",
    [
      sec(
        "La asamblea",
        [
          "Recuerda las tres herramientas de una asamblea. Informar sin decir quién: la pasiva, con se (se ha convocado una reunión) o con ser + participio, que concuerda con la cosa (el aviso fue enviado, las cartas fueron enviadas).",
          "Exigir: es necesario que, pedimos que, exigimos que + subjuntivo, porque piden algo que todavía no pasa. Plantear consecuencias: si + presente, futuro (si nos unimos, tendremos más fuerza).",
        ],
        [
          ["El aviso fue enviado a todos los inquilinos.", "The notice was sent to all tenants. (enviado: concuerda con el aviso)"],
          ["Es necesario que consultemos a un abogado.", "It's necessary that we consult a lawyer. (exigencia: subjuntivo)"],
          ["Si nos unimos, tendremos más fuerza.", "If we unite, we'll be stronger. (si + presente, futuro)"],
        ],
        [
          fb("Completa.", "Pedimos que el propietario ___ nuestros derechos. (respetar)", "respete", "«Pedimos que» pide algo que aún no pasa: subjuntivo, respete."),
          fb("Completa.", "Se ___ una reunión para el martes. (convocar, perfecto)", "ha convocado", "Pasiva con se en perfecto: el verbo concuerda con «una reunión» (singular), se ha convocado."),
          mc(
            "Las llaves del portal ___ cambiadas ayer sin avisar.",
            ["fueron", "fue", "se fueron", "han sido ayer"],
            0,
            "Pasiva con ser en pasado: concuerda con «las llaves» (plural), fueron cambiadas. «Fue» no concuerda y «se fueron» significa otra cosa (marcharse)."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "Según el contrato, no nos ___ echar antes de junio. (poder, ellos)", "pueden", "«Según el contrato» presenta un hecho, no una exigencia: indicativo, pueden."),
      fb("Completa.", "Si el propietario vende, los nuevos dueños ___ que respetar el contrato. (tener, futuro)", "tendrán", "Si + presente + futuro."),
      fb("Completa.", "Es injusto que ___ subir el alquiler tanto. (querer, ellos)", "quieran", "«Es injusto que» valora un hecho: subjuntivo, quieran (e → ie)."),
      mt(
        "Relaciona cada palabra con su significado.",
        [
          ["el inquilino", "tenant"],
          ["el propietario", "landlord"],
          ["el desalojo", "eviction"],
          ["la fianza", "deposit"],
        ],
        "Vocabulario de la vivienda."
      ),
      mc(
        "«The lawyer we hired says we're right.»",
        ["El abogado que contratamos dice que tenemos razón.", "El abogado quien contratamos dice que tengamos razón.", "El abogado lo que contratamos dice que tenemos razón.", "El abogado que contratamos dice que tengamos razón."],
        0,
        "Sin preposición se usa «que», y decir que informa de un hecho lleva indicativo: tenemos razón. «Quien» sin coma, «lo que» y «tengamos» (subjuntivo) son incorrectos aquí."
      ),
      toEs("We will not leave until they listen to us.", "No nos iremos hasta que nos escuchen.", "Hasta que + subjuntivo para el futuro.", ["No nos vamos a ir hasta que nos escuchen.", "No nos iremos hasta que nos oigan."]),
      wo("Gracias a la asamblea, ningún inquilino tuvo que irse.", "«Ningún» va delante del sustantivo en singular; «tuvo que» + infinitivo con el pronombre pegado: irse.", "Thanks to the meeting, no tenant had to leave."),
    ]
  ),
  L(
    "las-fotos-perfectas",
    "b1r-tema-redes-sociales",
    "Repaso temático: la vida en las redes",
    "Fotos perfectas, seguidores y autenticidad — opiniones, dudas y consejos sobre las redes sociales.",
    "7 min",
    [
      sec(
        "Opinar sobre las redes",
        [
          "Recuerda la regla: cuando afirmas tu opinión (creo que, me parece que, pienso que), el verbo va en indicativo, porque lo presentas como verdad. Cuando dudas o niegas (no creo que, no me parece que) o reaccionas con una emoción o valoración (me preocupa que, es triste que), va en subjuntivo.",
          "La negación cambia el modo: Creo que es verdad → No creo que sea verdad. Para aconsejar a alguien, mandato negativo con subjuntivo: no compares, no te creas.",
        ],
        [
          ["Me parece que la gente solo publica lo bueno.", "It seems to me people only post the good stuff. (opinión afirmada: indicativo)"],
          ["Me preocupa que los jóvenes se comparen tanto.", "It worries me that young people compare themselves so much. (emoción: subjuntivo)"],
          ["No me parece que los filtros sean malos.", "I don't think filters are bad. (opinión negada: subjuntivo)"],
        ],
        [
          fb("Opina.", "No creo que las fotos ___ la realidad. (mostrar)", "muestren", "No creo que niega la idea → subjuntivo; mostrar cambia o → ue como en muestro: muestren."),
          fb("Opina.", "Creo que ___ importante ser auténtico. (ser)", "es", "Creo que (sin no) afirma la opinión → indicativo: es. «Sea» solo iría con no creo que."),
        ]
      ),
    ],
    [
      fb("Aconseja.", "No ___ tu vida con la de los demás. (comparar, tú)", "compares", "El mandato negativo de tú usa el subjuntivo: no compares (-ar → -es)."),
      fb("Completa.", "Esta semana ___ más de cien fotos. (subir, yo, perfecto)", "he subido", "Esta semana todavía no ha terminado: pretérito perfecto, he subido."),
      fb("Completa.", "Si publicas algo real, la gente te lo ___. (agradecer, futuro)", "agradecerá", "En una condición real, si + presente (publicas) y el resultado en futuro: agradecerá."),
      mt(
        "Relaciona cada palabra con su significado.",
        [
          ["los seguidores", "followers"],
          ["publicar", "to post"],
          ["dar me gusta", "to like"],
          ["el filtro", "filter"],
        ],
        "Vocabulario de redes sociales: muchas palabras se dicen con un verbo español (publicar, subir, dar me gusta) aunque también oirás anglicismos."
      ),
      mc(
        "«It's sad that people only show the perfect side.»",
        ["Es triste que la gente solo muestre el lado perfecto.", "Es triste que la gente solo muestra el lado perfecto.", "Es triste de que la gente solo muestre el lado perfecto.", "Es triste la gente solo muestre el lado perfecto."],
        0,
        "«Es triste que» pide subjuntivo, y «la gente» es singular: muestre. «Muestra» es indicativo, «Es triste de que» añade un «de» que sobra y la última omite el «que»."
      ),
      toEs("I've decided to post something real for the first time.", "He decidido publicar algo real por primera vez.", "Una decisión reciente con efecto actual va en perfecto: he decidido + infinitivo.", ["Decidí publicar algo real por primera vez.", "He decidido subir algo real por primera vez."]),
      wo("Lo que ves en las redes no siempre es verdad.", "Lo que = what, sin sustantivo delante; ves va en indicativo porque hablas de algo real.", "What you see on social media isn't always true."),
      toEs(
        "Creo que las redes son peligrosas.",
        "No creo que las redes sean peligrosas.",
        "Al negar la opinión, el verbo pasa de indicativo a subjuntivo: son → sean.",
        [],
        "Cambia la frase a negativa: empieza con «No creo que...»."
      ),
      toEs(
        "Me molesta que mis amigos publican fotos mías sin permiso.",
        "Me molesta que mis amigos publiquen fotos mías sin permiso.",
        "Me molesta que expresa una emoción → subjuntivo: publiquen, con c → qu delante de e.",
        [],
        "Corrige la frase."
      ),
    ]
  ),
  L(
    "llamadas-de-los-domingos",
    "b1r-tema-familia-a-distancia",
    "Repaso temático: la familia a distancia",
    "Videollamadas, nostalgia y reencuentros — deseos, emociones y pasados para hablar de la distancia.",
    "7 min",
    [
      sec(
        "Recuerda: sentir y desear piden subjuntivo",
        [
          "Recuerda la regla: cuando la frase principal expresa un sentimiento o un deseo (echo de menos que, me molesta que, espero que, ojalá), el verbo que sigue va en subjuntivo.",
          "¿Por qué? Esa segunda parte no se informa como un hecho nuevo: es algo que deseas o que te provoca una emoción. Si solo hay una persona, se usa el infinitivo: echo de menos cenar contigo.",
        ],
        [
          ["Echo de menos que cenemos juntas.", "I miss us having dinner together. (emoción + que + subjuntivo)"],
          ["Me da pena que no conozcas a tus primos.", "It makes me sad that you don't know your cousins. (otra persona: subjuntivo)"],
          ["Echo de menos pasear por mi barrio.", "I miss walking around my neighbourhood. (la misma persona: infinitivo)"],
        ],
        [
          fb("Completa.", "Ojalá que ___ pronto a casa. (volver, tú)", "vuelvas", "Ojalá expresa un deseo, así que siempre va con subjuntivo: vuelvas (o→ue)."),
          mc(
            "A mi padre le encanta que sus nietos le ___ por teléfono.",
            ["canten", "cantan", "cantar", "cantarán"],
            0,
            "«Le encanta que» es una emoción y hay otra persona (los nietos): subjuntivo, canten. «Cantan» informaría de un hecho; «cantar» solo sirve si es la misma persona."
          ),
        ]
      ),
      sec(
        "Cuando + subjuntivo: el reencuentro que aún no ha llegado",
        [
          "Con «cuando», mira si la acción ya es real o todavía no. Para una costumbre o un pasado, indicativo: cuando vienes, cuando vino. Para el futuro, subjuntivo: cuando vengas.",
          "La razón es la misma: el futuro aún no es un hecho. Por eso nunca se dice «cuando vendrás».",
        ],
        [
          ["Cuando vuelvas, haremos una fiesta.", "When you come back, we'll have a party. (futuro: subjuntivo)"],
          ["Cuando mi tía viene, siempre trae turrón.", "When my aunt comes, she always brings turrón. (costumbre: indicativo)"],
        ],
        [
          fb("Completa.", "Cuando ___ en agosto, iremos a la playa. (llegar, tú)", "llegues", "Es un viaje futuro, así que cuando + subjuntivo: llegues (con -gue para mantener el sonido g)."),
        ]
      ),
    ],
    [
      fb("Completa.", "Antes hablábamos todos los días, pero últimamente no ___ mucho. (hablar, perfecto)", "hemos hablado", "Últimamente → perfecto."),
      fb("Completa.", "Me molesta que siempre ___ mirando el móvil durante la llamada. (estar, tú)", "estés", "Molestar que + subjuntivo."),
      fb("Completa.", "¿Te ___ llamarme los miércoles también? (importar, condicional)", "importaría", "Petición cortés."),
      mc(
        "«When I was your age, I also wanted to be independent.»",
        ["Cuando tenía tu edad, yo también quería ser independiente.", "Cuando tuve tu edad, yo también quise ser independiente.", "Cuando tenga tu edad, quería ser independiente.", "Cuando tenía tu edad, también he querido ser independiente."],
        0,
        "Una etapa de la vida (tenía tu edad) y un deseo continuado (quería) van en imperfecto. «Tuve / quise» los presentan como hechos cerrados, «tenga» es subjuntivo y «he querido» se liga al presente."
      ),
      ms(
        "¿Qué frases son correctas?",
        ["Te echo mucho de menos.", "Me alegro de que te vaya bien.", "Espero que me llamas pronto.", "Cuéntame qué has hecho esta semana."],
        [0, 1, 3],
        "«Espero que me llamas» es incorrecta: esperar que pide subjuntivo, me llames. Las otras usan bien echar de menos, alegrarse de que + subjuntivo y el imperativo."
      ),
      toEs("I want you (tú) to tell me everything.", "Quiero que me lo cuentes todo.", "Querer que + subjuntivo + me lo.", ["Quiero que me cuentes todo.", "Quiero que me lo digas todo."]),
      wo("Aunque estamos lejos, siempre te llevo en el corazón.", "Aunque + indicativo (hecho real).", "Although we're far apart, I always carry you in my heart."),
    ]
  ),
  L(
    "la-oficina-vacia",
    "b1r-tema-teletrabajo",
    "Repaso temático: teletrabajo u oficina",
    "Ventajas, desventajas y preferencias — comparaciones, condicional e hipótesis sobre el trabajo remoto.",
    "7 min",
    [
      sec(
        "Pros y contras: comparar",
        [
          "Recuerda la regla: para la desigualdad, más / menos + adjetivo o sustantivo + que. Para la igualdad, tan + adjetivo + como, y tanto/tanta/tantos/tantas + sustantivo + como (tanto concuerda con el sustantivo, porque funciona como un adjetivo).",
          "Para dar tu preferencia con suavidad, usa el condicional (preferiría, elegiría): presenta la idea como una opción, no como una exigencia.",
        ],
        [
          ["Trabajar desde casa es más cómodo, pero me siento más solo.", "Working from home is more comfortable, but I feel lonelier. (más + adjetivo)"],
          ["En la oficina no tengo tanta tranquilidad como en casa.", "At the office I don't have as much peace as at home. (tanta: concuerda con tranquilidad)"],
          ["Preferiría ir a la oficina dos días a la semana.", "I'd prefer to go to the office two days a week. (condicional: preferencia suave)"],
        ],
        [
          fb("Compara.", "En casa tengo ___ distracciones que en la oficina. (more)", "más", "Desigualdad con sustantivo: más + distracciones + que."),
          fb("Expresa una preferencia.", "Yo ___ un modelo híbrido. (elegir, condicional)", "elegiría", "Una preferencia suave va en condicional: infinitivo + -ía, elegiría."),
          mc(
            "Mi compañera tiene ___ reuniones como yo.",
            ["tantas", "tantos", "tan", "más"],
            0,
            "Igualdad con sustantivo: tanto + sustantivo + como, y tanto concuerda con «reuniones» (femenino plural): tantas. «Tan» va con adjetivos y «más» pide «que», no «como»."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "Desde que teletrabajo, ___ más tiempo con mi familia. (pasar, perfecto)", "he pasado", "Desde que + presente; en la oración principal, pretérito perfecto (periodo que llega hasta hoy)."),
      fb("Completa.", "Mi jefe quiere que ___ a la oficina los lunes. (ir, nosotros)", "vayamos", "Querer que + subjuntivo."),
      fb("Completa.", "Antes de la pandemia, nunca ___ desde casa. (trabajar, pluscuamperfecto)", "había trabajado", "Anterior → pluscuamperfecto."),
      ms(
        "¿Qué frases son ventajas del teletrabajo?",
        ["No pierdo tiempo en el transporte.", "Veo a mis compañeros cara a cara.", "Tengo un horario más flexible.", "Separo mejor el trabajo de la vida personal."],
        [0, 2],
        "No perder tiempo en el transporte y el horario flexible son ventajas del teletrabajo. Ver a los compañeros cara a cara y separar trabajo y vida personal son ventajas de la oficina."
      ),
      toEs("It's important that we see each other at least once a week.", "Es importante que nos veamos al menos una vez a la semana.", "Es importante que + subjuntivo recíproco.", ["Es importante que nos veamos por lo menos una vez por semana.", "Es importante que nos veamos al menos una vez por semana."]),
      wo("Lo que más echo de menos son los cafés con mis compañeros.", "Lo que + echar de menos.", "What I miss most are the coffees with my coworkers."),
    ]
  ),
  L(
    "treinta-dias-sin-notificaciones",
    "b1r-tema-desconexion-digital",
    "Repaso temático: la desconexión digital",
    "Habla de un reto de un mes sin móvil: cuenta tus propósitos, tus dificultades y lo que has descubierto.",
    "7 min",
    [
      sec(
        "Recuerda: cada función tiene su tiempo",
        [
          "Recuerda la regla: lo que vas a hacer (propósitos) va en futuro: no miraré el móvil. Lo que aconsejas va en mandato (deja el móvil) o en una expresión + que + subjuntivo (es importante que desactives), porque un consejo no afirma un hecho. Lo que has vivido en un periodo que aún no ha terminado (este mes, esta semana) va en pretérito perfecto: he leído dos libros. Y lo que hacías por costumbre antes del reto va en imperfecto: lo miraba cada cinco minutos.",
        ],
        [
          ["Durante un mes, no miraré el móvil antes de las diez.", "For a month, I won't look at my phone before ten. (propósito: futuro)"],
          ["Es importante que desactives las notificaciones.", "It's important that you turn off notifications. (consejo: que + subjuntivo)"],
          ["Esta semana he leído dos libros.", "This week I've read two books. (periodo actual: perfecto)"],
          ["Antes del reto, dormía con el móvil en la almohada.", "Before the challenge, I slept with my phone on the pillow. (costumbre pasada: imperfecto)"],
        ],
        [
          fb("Completa el propósito.", "Este mes no ___ vídeos en la cama. (ver, yo, futuro)", "veré", "Un propósito mira al futuro: «veré». El futuro de ver es regular (ver + -é)."),
          toEs("Apaga el wifi por la noche.", "Es mejor que apagues el wifi por la noche.", "Una expresión de consejo + que pide subjuntivo: apagar → «apagues» (g → gu delante de e).", [], "Transforma el mandato en un consejo con «Es mejor que»."),
        ]
      ),
    ],
    [
      { ...fb("Completa.", "Al principio, ___ el móvil cada cinco minutos sin darme cuenta. (buscar, yo)", "buscaba", "Hábito repetido en el pasado → imperfecto: «buscaba»."), altAnswers: ["cogía", "agarraba", "tomaba"] },
      fb("Completa.", "Nunca ___ lo dependiente que era. (imaginar, pluscuamperfecto)", "había imaginado", "Algo anterior a otro pasado (era): pluscuamperfecto, había + participio."),
      fb("Completa.", "Me sorprende que el día ___ tan largo sin pantallas. (parecer)", "parezca", "Sorprender que + subjuntivo: parecer → parezca (c → zc, como «conozca»)."),
      mc(
        "«If you get bored, go for a walk.»",
        ["Si te aburres, sal a pasear.", "Si te aburrirás, sal a pasear.", "Si te aburras, sales a pasear.", "Si aburres, sal a pasear."],
        0,
        "Si + presente con el reflexivo (te aburres) + imperativo (sal). «Si te aburrirás» y «si te aburras» no van tras si, y «Si aburres» pierde el «te», que cambia el sentido (bore someone)."
      ),
      ms(
        "¿Qué frases son correctas?",
        ["He dormido mejor este mes.", "Ojalá que aguante hasta el final.", "No mires el móvil en la cama.", "Es difícil que no lo miro."],
        [0, 1, 2],
        "«Es difícil que no lo miro» es incorrecta: es difícil que pide subjuntivo (que no lo mire), o infinitivo sin sujeto (no mirarlo). Las otras usan bien los tiempos y modos."
      ),
      toEs("Miro el móvil al despertarme.", "Antes miraba el móvil al despertarme.", "Una costumbre que ya no tienes va en imperfecto: «miraba».", ["Antes, miraba el móvil al despertarme."], "Cambia al pasado: es algo que hacías antes del reto (empieza con «Antes»)."),
      toEs("Hoy no he usado las redes sociales.", "Mañana no usaré las redes sociales.", "Al pasar de lo vivido a un propósito, el perfecto pasa a futuro: «usaré».", [], "Cambia la frase a un propósito para mañana (empieza con «Mañana»)."),
      toEs("Este mes he escribido un diario cada noche.", "Este mes he escrito un diario cada noche.", "Con «este mes» va el pretérito perfecto, y escribir tiene participio irregular: «escrito», nunca «escribido».", [], "Corrige la frase."),
      toEs("Te aconsejo que borras las aplicaciones que no usas.", "Te aconsejo que borres las aplicaciones que no usas.", "«Aconsejar que» pide subjuntivo: «borres». El segundo verbo («usas») sigue en indicativo porque describe un hecho.", [], "Corrige la frase."),
      toEs("Since I turned off my phone, I've had more time for myself.", "Desde que apagué el móvil, he tenido más tiempo para mí.", "Desde que + pretérito (el momento puntual) + perfecto (el periodo hasta hoy).", ["Desde que apagué el teléfono, he tenido más tiempo para mí.", "Desde que apagué el celular, he tenido más tiempo para mí."]),
      wo("Nunca pensé que un mes sin notificaciones cambiaría tanto mi vida.", "Pretérito + condicional (futuro del pasado).", "I never thought a month without notifications would change my life so much."),
      { type: "speak", prompt: "Cuéntalo en voz alta en español: «This week I've slept better, and tomorrow I'll leave my phone at home.»", text: "Esta semana he dormido mejor, y mañana dejaré el móvil en casa.", explanation: "Reflexión sobre un periodo actual → perfecto (he dormido); propósito → futuro (dejaré)." },
    ]
  ),
  L(
    "los-arboles-de-la-plaza",
    "b1r-tema-arboles-ciudad",
    "Repaso temático: la naturaleza en la ciudad",
    "Árboles, parques y aire limpio — argumentar con expresiones impersonales y condiciones.",
    "7 min",
    [
      sec(
        "Argumentos verdes: hecho o exigencia",
        [
          "Recuerda la regla: si la expresión afirma que algo es cierto (está demostrado que, es evidente que, todo el mundo sabe que), el verbo va en indicativo, porque presentas un hecho. Si valora, pide o exige (es fundamental que, es urgente que, pedimos que), va en subjuntivo, porque hablas de algo que debería pasar.",
          "Ojo: al negar la certeza (no es verdad que, no creo que) el hecho deja de ser seguro y el verbo pasa a subjuntivo.",
        ],
        [
          ["Está demostrado que los árboles reducen la temperatura.", "It's proven that trees reduce temperatures. (hecho: indicativo)"],
          ["Es fundamental que se protejan los parques.", "It's essential that parks are protected. (exigencia: subjuntivo)"],
          ["No es cierto que las raíces rompan todas las aceras.", "It isn't true that the roots break all the pavements. (certeza negada: subjuntivo)"],
        ],
        [
          fb("Argumenta.", "Está claro que los árboles ___ el aire. (limpiar)", "limpian", "«Está claro que» afirma un hecho: indicativo, limpian."),
          fb("Argumenta.", "Es fundamental que no se ___ ningún árbol. (cortar)", "corte", "«Es fundamental que» exige: subjuntivo. Con se pasivo, el verbo concuerda con «ningún árbol» (singular): se corte."),
          mc(
            "No creo que el nuevo parque ___ listo antes del verano.",
            ["esté", "está", "estará", "estar"],
            0,
            "«No creo que» niega la certeza, así que el verbo va en subjuntivo: esté. Con «creo que» (sin no) sí diríamos «está» o «estará»."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "Si cortan los árboles, la plaza ___ un horno en verano. (ser, futuro)", "será", "Si + presente + futuro."),
      fb("Completa.", "Estos árboles ___ plantados hace cien años. (ser, pretérito)", "fueron", "Pasiva con ser."),
      fb("Completa.", "Pedimos al ayuntamiento que ___ otra solución para el aparcamiento. (buscar)", "busque", "Pedir que + subjuntivo; c → qu."),
      mt(
        "Relaciona cada beneficio con su explicación.",
        [
          ["dar sombra", "bajar la temperatura"],
          ["absorber CO₂", "mejorar el aire"],
          ["reducir el ruido", "hacer la calle más tranquila"],
          ["atraer pájaros", "aumentar la biodiversidad"],
        ],
        "Beneficios de los árboles urbanos."
      ),
      mc(
        "«It would be a mistake to cut them down.»",
        ["Sería un error cortarlos.", "Será un error cortarlos ayer.", "Sería un error que los cortar.", "Sería un error de cortarlos."],
        0,
        "«Would be» → sería, y el infinitivo lleva el pronombre pegado: cortarlos. «Será… ayer» mezcla tiempos, «que los cortar» usa infinitivo tras que y «de cortarlos» añade un «de» que sobra."
      ),
      toEs("The trees that you see in the square are older than the church. (tú)", "Los árboles que ves en la plaza son más antiguos que la iglesia.", "Relativo que sin preposición y comparación más… que: más antiguos que la iglesia.", ["Los árboles que ves en la plaza son más viejos que la iglesia."]),
      wo("Gracias a los vecinos, los árboles siguen en pie.", "Seguir en pie = to still be standing.", "Thanks to the neighbors, the trees are still standing."),
    ]
  ),
  L(
    "supermercado-sin-plastico",
    "b1r-tema-residuo-cero",
    "Repaso temático: comprar sin plástico",
    "Hábitos de consumo, reciclaje y cambios pequeños — se impersonal, mandatos y el si real.",
    "7 min",
    [
      sec(
        "Recuerda la regla: carteles con ustedes y con se",
        [
          "Recuerda la regla: los carteles de una tienda hablan a todos los clientes con ustedes, y el mandato de ustedes es la forma del subjuntivo: lavar → laven, traer → traigan, no tiren. Los pronombres se pegan en el afirmativo (tráiganlos) y van delante en el negativo (no los tiren).",
          "Para hablar de lo que se hace en general, sin decir quién, se usa se + verbo, y el verbo concuerda con la cosa: se vende pan, se venden frutas. Y para una condición real, si + presente: si no tiene bolsa, le prestamos una.",
        ],
        [
          ["Traigan sus propios envases.", "Bring your own containers. (traer → traigo → traigan)"],
          ["Aquí se vende todo a granel.", "Everything is sold in bulk here. (todo: singular)"],
          ["Aquí se venden frutas sin envoltorio.", "Fruit is sold without wrapping here. (frutas: plural)"],
          ["Si no tiene bolsa, le prestamos una de tela.", "If you don't have a bag, we'll lend you a cloth one. (si + presente)"],
        ],
        [
          fb("Completa el cartel.", "___ los tarros en la estantería del fondo. (dejar, ustedes)", "Dejen", "Mandato de ustedes = subjuntivo: dejar → «dejen». «Dejan» sería el presente de indicativo."),
          toEs("Aquí se recicla una botella.", "Aquí se reciclan las botellas.", "Con se pasivo el verbo concuerda con la cosa: si «botellas» es plural, «se reciclan».", [], "Cambia a «las botellas»."),
        ]
      ),
    ],
    [
      fb("Completa.", "Es increíble que ___ tanto plástico en un solo día. (usar, nosotros)", "usemos", "«Es increíble que» valora un hecho: subjuntivo, «usemos»."),
      fb("Completa.", "Desde que compro aquí, ___ la basura a la mitad. (reducir, perfecto)", "he reducido", "Desde que + presente; en la oración principal, pretérito perfecto (periodo que llega hasta hoy)."),
      fb("Completa.", "Si todos hacemos un pequeño esfuerzo, ___ una gran diferencia. (haber, futuro)", "habrá", "Si + presente + futuro: haber → «habrá»."),
      mt(
        "Relaciona cada producto con su alternativa sin plástico.",
        [
          ["la botella de plástico", "la botella de vidrio"],
          ["la bolsa de plástico", "la bolsa de tela"],
          ["el champú en bote", "la pastilla de champú"],
          ["el film transparente", "el envoltorio de cera"],
        ],
        "Alternativas de residuo cero."
      ),
      ms(
        "¿Qué frases son correctas?",
        ["Se aceptan envases reutilizables.", "Recomiendo que traigas tu bolsa.", "Ojalá que más tiendas hacen lo mismo.", "No compres lo que no necesitas."],
        [0, 1, 3],
        "«Ojalá que más tiendas hacen lo mismo» es incorrecta: ojalá pide subjuntivo, hagan. Las otras usan bien el se pasivo, recomendar que + subjuntivo y el negativo de tú."
      ),
      toEs("Tiren el aceite usado al fregadero.", "No tiren el aceite usado al fregadero.", "Negativo de ustedes: «no» delante del mismo subjuntivo, «no tiren».", [], "Cambia al negativo."),
      toEs("Traigan las botellas vacías.", "Tráiganlas vacías.", "En el afirmativo el pronombre se pega: traigan + las → «tráiganlas», con tilde.", [], "Sustituye «las botellas» por un pronombre."),
      toEs("Por favor, separan el vidrio del papel.", "Por favor, separen el vidrio del papel.", "Una instrucción a los clientes usa el mandato de ustedes (subjuntivo): «separen». «Separan» describe lo que hacen.", [], "Corrige la frase."),
      toEs("En esta tienda se vende productos locales.", "En esta tienda se venden productos locales.", "El verbo concuerda con «productos» (plural): «se venden».", [], "Corrige la frase."),
      toEs("I hope other shops copy the idea.", "Espero que otras tiendas copien la idea.", "«Esperar que» + otro sujeto → subjuntivo: copien.", ["Ojalá que otras tiendas copien la idea.", "Ojalá otras tiendas copien la idea."]),
      wo("Lo que empezó como un experimento se ha convertido en un éxito.", "Lo que + pretérito + perfecto.", "What started as an experiment has become a success."),
      { type: "speak", prompt: "Eres el dependiente. Di en voz alta a dos clientes: «If you don't have a jar, buy one here, but don't use plastic bags.» (ustedes)", text: "Si no tienen tarro, compren uno aquí, pero no usen bolsas de plástico.", explanation: "Si + presente (no tienen) + mandato de ustedes (compren); negativo: no + subjuntivo (no usen)." },
    ]
  ),
  L(
    "la-energia-del-futuro",
    "b1r-tema-energia",
    "Repaso temático: la energía del futuro",
    "Paneles solares, escepticismo y cambio — predicciones, dudas y la voz pasiva.",
    "7 min",
    [
      sec(
        "Recuerda la regla: certeza → indicativo, duda → subjuntivo",
        [
          "Recuerda la regla: cuando presentas algo como seguro (es verdad que, está claro que, es evidente que, está comprobado que), el verbo va en indicativo, porque afirmas un hecho. Cuando lo pones en duda o lo ves solo como posible (dudo que, no creo que, no es verdad que, es posible que), va en subjuntivo, porque no lo afirmas. Al negar una certeza cambias de modo: es verdad que son caros → no es verdad que sean caros.",
          "Las predicciones van en futuro (en diez años usaremos…). Y la pasiva con ser concuerda con lo que recibe la acción: los paneles fueron instalados, la central fue construida.",
        ],
        [
          ["Dudo que esos paneles funcionen en invierno.", "I doubt those panels work in winter. (duda → subjuntivo)"],
          ["Está comprobado que producen energía incluso con nubes.", "It's proven they produce energy even with clouds. (certeza → indicativo)"],
          ["En diez años, todo el pueblo usará energía solar.", "In ten years, the whole village will use solar energy. (predicción → futuro)"],
          ["El parque eólico fue inaugurado en marzo.", "The wind farm was opened in March. (pasiva: inaugurado concuerda con el parque)"],
        ],
        [
          fb("Responde al escéptico.", "Es verdad que al principio ___ caros. (ser, presente)", "son", "«Es verdad que» presenta un hecho: indicativo, «son»."),
          toEs("Creo que la energía solar es el futuro.", "No creo que la energía solar sea el futuro.", "Al negar la opinión, pasa a ser una duda: «no creo que» + subjuntivo, «sea».", [], "Cambia al negativo."),
        ]
      ),
    ],
    [
      fb("Predice.", "Dentro de poco, las facturas ___ mucho. (bajar, futuro)", "bajarán", "Predicción → futuro: «bajarán», con tilde en la última sílaba."),
      fb("Completa.", "Los paneles ___ instalados la semana pasada. (ser, pretérito)", "fueron", "Pasiva con ser en indefinido (la semana pasada): «fueron», en plural por «los paneles»."),
      fb("Completa.", "No creo que ___ vuelta atrás. (haber)", "haya", "«No creer que» expresa duda: subjuntivo de haber, «haya»."),
      fb("Completa.", "Si el proyecto funciona, se ___ a otros pueblos. (extender, futuro)", "extenderá", "Si + presente + futuro en el resultado: «se extenderá»."),
      mt(
        "Relaciona cada fuente de energía con su descripción.",
        [
          ["la energía solar", "viene del sol"],
          ["la energía eólica", "viene del viento"],
          ["la energía hidráulica", "viene del agua"],
          ["la energía geotérmica", "viene del calor de la Tierra"],
        ],
        "Energías renovables."
      ),
      mc(
        "«I had never seen a solar panel up close.»",
        ["Nunca había visto un panel solar de cerca.", "Nunca he visto un panel solar de cerca ayer.", "Nunca he vido un panel solar de cerca.", "Nunca había vido un panel solar de cerca."],
        0,
        "«Had never seen» = nunca había visto (pluscuamperfecto; ver → visto). «He visto… ayer» mezcla tiempos, y «vido» no existe."
      ),
      toEs("Es posible que el precio baje.", "Es seguro que el precio bajará.", "Al pasar de posibilidad a certeza, el subjuntivo («baje») pasa a indicativo; para el futuro, «bajará».", ["Es seguro que el precio va a bajar.", "Es seguro que el precio baja."], "Cambia la posibilidad por una certeza (empieza con «Es seguro que»)."),
      toEs("El ayuntamiento instaló las placas en 2020.", "Las placas fueron instaladas por el ayuntamiento en 2020.", "En la pasiva con ser, el objeto pasa a ser sujeto y el participio concuerda con él: «las placas fueron instaladas».", ["Las placas fueron instaladas en 2020 por el ayuntamiento."], "Cambia a la voz pasiva con «ser»."),
      toEs("Está claro que los coches eléctricos contaminen menos.", "Está claro que los coches eléctricos contaminan menos.", "«Está claro que» afirma un hecho: indicativo, «contaminan». El subjuntivo sería para una duda (dudo que contaminen menos).", [], "Corrige la frase."),
      toEs("Las turbinas fueron revisado ayer.", "Las turbinas fueron revisadas ayer.", "En la pasiva con ser el participio concuerda en género y número con el sujeto: «las turbinas» → «revisadas».", [], "Corrige la frase."),
      toEs("It's necessary that we invest in renewable energy.", "Es necesario que invirtamos en energías renovables.", "«Es necesario que» → subjuntivo; invertir (-ir) cambia e→i en nosotros: invirtamos.", ["Es necesario que invirtamos en energía renovable."]),
      wo("El técnico que dudaba al principio ahora es el más entusiasta.", "Relativa en imperfecto + superlativo.", "The technician who had doubts at first is now the most enthusiastic."),
      { type: "speak", prompt: "Responde en voz alta a un vecino escéptico: «It's true that the panels are expensive, but I doubt that electricity will be cheaper.»", text: "Es verdad que los paneles son caros, pero dudo que la luz sea más barata.", explanation: "Certeza (es verdad que) → indicativo «son»; duda (dudo que) → subjuntivo «sea». También vale «la electricidad»." },
    ]
  ),
  L(
    "la-mochila-que-pesaba-menos",
    "b1r-tema-camino",
    "Repaso temático: el Camino de Santiago",
    "Peregrinos, albergues y reflexiones — consejos, experiencias y el pretérito perfecto.",
    "7 min",
    [
      sec(
        "Consejos para el Camino",
        [
          "Recuerda la regla: para aconsejar se usa un mandato (sal temprano, no camines) o un verbo de consejo + que + subjuntivo (te recomiendo que lleves, es mejor que vayas). Para hablar de tu experiencia hasta hoy, pretérito perfecto (he hecho el Camino tres veces); para contar un momento concreto del viaje, indefinido (cuando llegué, lloré).",
          "¿Por qué subjuntivo tras recomendar? Porque intentas influir en lo que hará otra persona, no describes un hecho.",
        ],
        [
          ["Te recomiendo que no lleves más de siete kilos.", "I recommend you don't carry more than seven kilos. (consejo + subjuntivo)"],
          ["Sal temprano para evitar el calor.", "Leave early to avoid the heat. (mandato irregular de salir)"],
          ["He hecho el Camino tres veces.", "I've done the Camino three times. (experiencia hasta hoy)"],
          ["El primer día me salieron dos ampollas.", "On the first day I got two blisters. (momento concreto: indefinido)"],
        ],
        [
          fb("Aconseja.", "Es mejor que ___ botas ya usadas. (llevar, tú)", "lleves", "Es mejor que es un consejo, así que subjuntivo: lleves (-ar → -es)."),
          fb("Aconseja.", "___ agua en cada fuente. (beber, tú)", "Bebe", "Mandato afirmativo de tú = forma él del presente: bebe."),
        ]
      ),
    ],
    [
      fb("Completa.", "¿Alguna vez ___ el Camino de Santiago? (hacer, tú)", "has hecho", "Alguna vez pregunta por la experiencia hasta hoy: pretérito perfecto, con el participio irregular hecho."),
      fb("Completa.", "El albergue en el ___ dormimos era muy sencillo.", "que", "Se duerme en el albergue: la preposición va delante del relativo, con artículo masculino: en el que."),
      fb("Completa.", "Cuando ___ a Santiago, lloré de emoción. (llegar, yo)", "llegué", "Un momento concreto del viaje: indefinido, llegué (g → gu delante de e)."),
      mt(
        "Relaciona cada palabra con su significado.",
        [
          ["el peregrino", "pilgrim"],
          ["el albergue", "hostel"],
          ["la etapa", "stage (of the route)"],
          ["la ampolla", "blister"],
        ],
        "Vocabulario del Camino: el peregrino hace el Camino por etapas y duerme en albergues; las ampollas son el problema más común."
      ),
      ms(
        "¿Qué frases son correctas?",
        ["Ojalá que no te salgan ampollas.", "Si te cansas, descansa.", "Lo que más me gustó fue la gente.", "Te recomiendo que llevas poco peso."],
        [0, 1, 2],
        "«Te recomiendo que llevas» es incorrecta: recomendar que pide subjuntivo, lleves. Las demás usan bien ojalá, si + presente + imperativo y lo que."
      ),
      toEs("I've learned that I need much less than I thought.", "He aprendido que necesito mucho menos de lo que pensaba.", "He aprendido (pretérito perfecto: experiencia hasta hoy). Para comparar con un verbo se usa de lo que: menos de lo que pensaba.", ["He aprendido que necesito mucho menos de lo que creía."]),
      wo("Nunca había caminado tanto en mi vida.", "Pluscuamperfecto: hasta aquel momento del pasado, nunca había caminado tanto.", "I had never walked so much in my life."),
      toEs(
        "Lleva poco peso en la mochila.",
        "Te recomiendo que lleves poco peso en la mochila.",
        "El mandato (lleva) se convierte en consejo con te recomiendo que + subjuntivo: lleves.",
        [],
        "Transforma el mandato en consejo: empieza con «Te recomiendo que...»."
      ),
      toEs(
        "Ayer he caminado treinta kilómetros.",
        "Ayer caminé treinta kilómetros.",
        "Con ayer, un tiempo ya terminado, se usa el indefinido (caminé), no el pretérito perfecto.",
        ["Ayer anduve treinta kilómetros."],
        "Corrige la frase."
      ),
    ]
  ),
  L(
    "las-manos-en-el-barro",
    "b1r-tema-aficiones",
    "Repaso temático: una nueva afición",
    "Cerámica, pintura o baile — hablar de aficiones con experiencias, deseos y recomendaciones.",
    "8 min",
    [
      sec(
        "Descubrir una pasión",
        [
          "Recuerda la regla: al contar una afición, el momento decide el tiempo verbal. Cómo empezó (un hecho cerrado) → pretérito: empecé, me apunté. Lo que ha cambiado hasta hoy (un periodo abierto: este año, desde entonces) → pretérito perfecto: he aprendido. Lo que había antes de empezar → pluscuamperfecto: nunca había pintado.",
          "Y al recomendar o expresar gustos sobre otra persona: verbo de influencia o emoción + que + otro sujeto → subjuntivo (te recomiendo que pruebes, me encanta que no haya exámenes). ¿Por qué? Porque no informas de un hecho, sino de lo que quieres o sientes sobre él. Si el sujeto es el mismo, va el infinitivo: me gustaría vender mis piezas.",
        ],
        [
          ["Empecé a hacer cerámica hace un año.", "I started doing pottery a year ago. [inicio cerrado → pretérito]"],
          ["Desde entonces, he aprendido a relajarme.", "Since then, I've learned to relax. [periodo hasta hoy → perfecto]"],
          ["Te recomiendo que pruebes una clase.", "I recommend you try a class. [recomendar que + otra persona → subjuntivo]"],
          ["Me gustaría exponer mis cuadros.", "I'd like to exhibit my paintings. [mismo sujeto → infinitivo]"],
        ],
        [
          fb("Completa.", "Me encanta que en la clase no ___ exámenes. (haber)", "haya", "Encantar que + otra cosa como sujeto → subjuntivo: haya. Expresas lo que sientes, no informas de un hecho."),
          fb("Completa.", "Hace un año que ___ a pintar. (empezar, yo, pretérito)", "empecé", "Hace + tiempo + que + pretérito para el inicio de algo; ojo con la ortografía: empec-é (z → c delante de e)."),
          mc(
            "Mi monitor de escalada prefiere que ___ con cuerda los primeros meses.",
            ["subamos", "subimos", "subir", "subiremos"],
            0,
            "«Preferir que» + otro sujeto (nosotros) → subjuntivo: subamos. «Subimos» es indicativo, un simple hecho; el infinitivo solo vale si el sujeto es el mismo (él prefiere subir)."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "Si tienes tiempo libre, ___ algo con las manos. (hacer, tú, mandato)", "haz", "El mandato afirmativo de tú de hacer es irregular y corto: haz (como pon, sal, ven)."),
      fb("Completa.", "Antes de empezar, nunca ___ tocado el barro. (haber, yo)", "había", "Algo anterior a otro momento del pasado («antes de empezar») → pluscuamperfecto: había tocado."),
      fb("Completa.", "Me gustaría ___ mis piezas en una feria. (vender)", "vender", "El que quiere y el que vende son la misma persona (yo) → infinitivo, sin «que»."),
      mt(
        "Relaciona cada afición con su material.",
        [
          ["la cerámica", "el barro"],
          ["la pintura", "los pinceles"],
          ["la costura", "la aguja y el hilo"],
          ["la fotografía", "la cámara"],
        ],
        "Aficiones y sus herramientas: el barro se modela, los pinceles pintan, la aguja y el hilo cosen y la cámara hace fotos."
      ),
      mc(
        "«What I like most is that nobody judges me.»",
        ["Lo que más me gusta es que nadie me juzgue.", "Lo que más me gusta es de que nadie me juzgue.", "El que más me gusta es que nadie me juzgue.", "Lo que más me gusta es nadie me juzgue."],
        0,
        "«Lo que» = what, y «me gusta que» + otro sujeto pide subjuntivo: que nadie me juzgue. «Es de que» añade un «de» que sobra, «El que» no encaja sin sustantivo y la última omite el «que»."
      ),
      toEs("Pottery has changed my life.", "La cerámica me ha cambiado la vida.", "Pretérito perfecto con efecto actual; con «vida» el español usa el artículo: me ha cambiado la vida.", ["La cerámica ha cambiado mi vida."]),
      wo("El jarrón que hice la primera semana está un poco torcido.", "«El jarrón que hice»: relativa con «que» + pretérito (acción terminada); «está torcido» usa estar porque describe el estado actual del jarrón.", "The vase I made the first week is a bit crooked."),
    ]
  ),
  L(
    "la-cena-de-los-martes",
    "b1r-tema-voluntariado",
    "Repaso temático: el voluntariado",
    "Ayudar a los demás: motivos, experiencias y deseos — con todo el B1.",
    "7 min",
    [
      sec(
        "Recuerda la regla: para + infinitivo o para que + subjuntivo",
        [
          "Recuerda la regla: para explicar un motivo, «para + infinitivo» cuando quien actúa y quien se beneficia del propósito es la misma persona (me hice voluntario para sentirme útil: yo me siento útil). Si el propósito es que otra persona haga algo, «para que + subjuntivo» (recogemos comida para que ninguna familia pase hambre), porque el propósito todavía no es un hecho.",
          "Lo mismo pasa con las emociones y los deseos: me emociona ayudar (yo) / me emociona que la gente me dé las gracias (otra persona → subjuntivo). Y la experiencia que llega hasta hoy va en pretérito perfecto: desde que soy voluntario, he conocido a gente increíble.",
        ],
        [
          ["Me hice voluntario para sentirme útil.", "I became a volunteer to feel useful. (mismo sujeto: para + infinitivo)"],
          ["Damos clases de apoyo para que los niños no dejen el colegio.", "We give tutoring so that the children don't drop out of school. (otro sujeto: para que + subjuntivo)"],
          ["Me emociona que la gente me dé las gracias.", "It moves me when people thank me. (emoción + que + subjuntivo)"],
        ],
        [
          fb("Completa.", "Llevamos mantas al albergue para que nadie ___ frío esta noche. (pasar)", "pase", "El propósito es que otra persona (nadie) no pase frío: para que + subjuntivo, «pase»."),
          toEs("Voy a la residencia. Los ancianos no se sienten solos.", "Voy a la residencia para que los ancianos no se sientan solos.", "Dos sujetos distintos (yo / los ancianos): «para que» + subjuntivo, «se sientan».", [], "Transforma las dos frases en una con «para que»."),
        ]
      ),
    ],
    [
      fb("Completa.", "Es importante que nadie ___ solo en Navidad. (estar)", "esté", "«Es importante que» es una valoración: subjuntivo, «esté»."),
      fb("Completa.", "Desde que soy voluntario, ___ a gente increíble. (conocer, perfecto)", "he conocido", "Desde que + presente; en la oración principal, pretérito perfecto (periodo que llega hasta hoy)."),
      fb("Completa.", "Cada martes ___ la cena para cincuenta personas. (preparar, nosotros)", "preparamos", "Hábito presente: «cada martes» + presente."),
      { ...fb("Completa.", "El señor con ___ siempre hablo era profesor de historia.", "quien", "Se habla con alguien: con quien, para personas."), altAnswers: ["el que", "el cual"] },
      fb("Completa.", "Si quieres ayudar, ___ al comedor el martes. (venir, tú)", "ven", "Mandato irregular de tú: venir → «ven»."),
      mt(
        "Relaciona cada tarea con su lugar.",
        [
          ["servir comidas", "el comedor social"],
          ["leer a los ancianos", "la residencia"],
          ["clasificar ropa", "el banco de ropa"],
          ["dar clases de apoyo", "el centro juvenil"],
        ],
        "Tipos de voluntariado."
      ),
      ms(
        "¿Qué frases son correctas?",
        ["Me alegra que vengas a ayudar.", "Ojalá haya más voluntarios el año que viene.", "Nunca había cocinado para tanta gente.", "Es necesario que todos colaboran."],
        [0, 1, 2],
        "«Es necesario que todos colaboran» es incorrecta: necesidad → subjuntivo, colaboren. Las otras usan bien me alegra que, ojalá y el pluscuamperfecto."
      ),
      toEs("Estudio enfermería para ayudar a la gente.", "Estudio enfermería para que mi pueblo tenga un centro de salud.", "Cuando el propósito tiene otro sujeto (mi pueblo), «para + infinitivo» pasa a «para que + subjuntivo»: «tenga».", [], "Cambia el propósito: que tu pueblo tenga un centro de salud."),
      toEs("Hago voluntariado para que conozco gente nueva.", "Hago voluntariado para conocer gente nueva.", "El sujeto es el mismo (yo hago voluntariado, yo conozco gente): para + infinitivo, sin «que».", ["Hago voluntariado para conocer a gente nueva."], "Corrige la frase."),
      toEs("Recogemos juguetes para que los niños tienen regalos.", "Recogemos juguetes para que los niños tengan regalos.", "«Para que» expresa un propósito todavía no cumplido: siempre subjuntivo, «tengan».", [], "Corrige la frase."),
      toEs("I have received more than I have given.", "He recibido más de lo que he dado.", "Más de lo que + cláusula; perfecto para la experiencia hasta hoy.", ["Recibí más de lo que di."]),
      wo("Lo que empezó como un favor se convirtió en una amistad.", "Lo que + pretérito + convertirse en.", "What began as a favor became a friendship."),
      { type: "speak", prompt: "Explica en voz alta por qué eres voluntario: «I volunteer to feel useful and so that nobody eats alone.»", text: "Soy voluntario para sentirme útil y para que nadie coma solo.", explanation: "Mismo sujeto → para + infinitivo (sentirme); otro sujeto → para que + subjuntivo (coma). También: «Soy voluntaria…»." },
    ]
  ),
  L(
    "aprender-a-flotar",
    "b1r-tema-superar-miedos",
    "Repaso temático: superar un miedo",
    "Miedos de la infancia y cómo enfrentarlos — emociones, experiencias y consejos.",
    "7 min",
    [
      sec(
        "La idea: ¿quién tiene miedo y quién hace la acción?",
        [
          "Recuerda la regla: si la persona que tiene miedo es la misma que hace la acción, usa tener miedo de + infinitivo. Si es otra persona u otra cosa, usa tener miedo de que + subjuntivo: el miedo habla de algo que todavía no es un hecho.",
          "«Dar miedo» funciona como gustar: el verbo concuerda con lo que asusta. Me da miedo el mar; me dan miedo las arañas.",
        ],
        [
          ["Tenía miedo de meter la cabeza en el agua.", "I was afraid of putting my head under water. (yo tengo miedo, yo meto: infinitivo)"],
          ["Mis padres tienen miedo de que me haga daño.", "My parents are afraid I'll hurt myself. (ellos / yo: de que + subjuntivo)"],
          ["Me daban miedo las olas grandes.", "I used to be scared of big waves. (daban: concuerda con las olas)"],
          ["Por fin he superado mi miedo.", "I've finally overcome my fear."],
        ],
        [
          fb("Completa.", "De pequeña, ___ miedo al agua. (tener, yo)", "tenía", "Un estado que duraba en el pasado (de pequeña) va en imperfecto: tenía."),
          fb("Completa.", "Tengo miedo de ___ en público. (hablar, yo mismo)", "hablar", "Quien tiene miedo y quien habla es la misma persona: de + infinitivo, hablar."),
          mc(
            "Al abuelo le ___ miedo los ascensores.",
            ["dan", "da", "tiene", "dé"],
            0,
            "Dar miedo concuerda con lo que asusta, como gustar: los ascensores es plural → dan. «Da» sería para una sola cosa y «tiene» no funciona con «le»."
          ),
        ]
      ),
    ],
    [
      fb("Aconseja.", "No ___ prisa; ve poco a poco. (tener, tú)", "tengas", "No tengas prisa."),
      fb("Aconseja.", "Es normal que ___ nervioso la primera vez. (estar, tú)", "estés", "Es normal que + subjuntivo."),
      fb("Completa.", "Nunca ___ que a los treinta años aprendería a nadar. (imaginar, pluscuamperfecto)", "había imaginado", "Pluscuamperfecto."),
      mc(
        "«If you face your fear, it will get smaller.»",
        ["Si te enfrentas a tu miedo, se hará más pequeño.", "Si te enfrentarás a tu miedo, se hace más pequeño.", "Si te enfrentes a tu miedo, se hará más pequeño.", "Si enfrentas tu miedo, se hacía más pequeño."],
        0,
        "Condición real: si + presente (te enfrentas) y resultado en futuro (se hará). «Te enfrentarás» y «te enfrentes» no van tras si, y «se hacía» es pasado."
      ),
      ms(
        "¿Qué frases son correctas?",
        ["Me da miedo la oscuridad.", "Me dan miedo las arañas.", "Tengo miedo que me vean.", "He conseguido flotar sola."],
        [0, 1, 3],
        "«Tengo miedo que me vean» es incorrecta: la expresión es «tener miedo de que» + subjuntivo. «Me da(n) miedo» concuerda con lo que da miedo, y «he conseguido flotar» está bien."
      ),
      toEs("I'm proud that I didn't give up.", "Estoy orgullosa de no haberme rendido.", "Mismo sujeto → de + infinitivo compuesto.", ["Estoy orgulloso de no haberme rendido."]),
      wo("Lo más difícil fue dar el primer paso.", "Lo más + adjetivo + pretérito.", "The hardest thing was taking the first step."),
    ]
  ),
  L(
    "la-banda-de-garaje",
    "b1r-tema-musica-grupo",
    "Repaso temático: formar una banda",
    "Buscar músicos, ensayar y dar el primer concierto — relativas, subjuntivo y planes.",
    "7 min",
    [
      sec(
        "Recuerda la regla: ¿existe ya esa persona?",
        [
          "Recuerda la regla: en una oración de relativo (un batería que…), el modo depende de lo que sabes de la persona o la cosa. Si existe y la conoces, describes un hecho: indicativo (tenemos una cantante que compone). Si todavía no sabes quién es, o niegas que exista, solo describes el perfil que buscas: subjuntivo (buscamos un batería que tenga experiencia, no hay nadie que toque el violín).",
          "Por eso el mismo verbo cambia según la situación: «busco a alguien que sabe tocar» se refiere a una persona concreta que ya conoces; «busco a alguien que sepa tocar» vale para cualquiera que cumpla el requisito.",
        ],
        [
          ["Buscamos un batería que tenga experiencia.", "We're looking for a drummer who has experience. (aún no sabemos quién: subjuntivo)"],
          ["Tenemos una cantante que compone sus propias canciones.", "We have a singer who writes her own songs. (existe: indicativo)"],
          ["En el barrio no hay ningún local que sea barato.", "There isn't a single cheap venue in the area. (negamos que exista: subjuntivo)"],
          ["¿Conoces a alguien que preste amplificadores?", "Do you know anyone who lends amplifiers? (pregunta por alguien desconocido: subjuntivo)"],
        ],
        [
          fb("Completa.", "El bajista que ___ el sábado nos encantó. (venir, pretérito)", "vino", "El bajista es una persona concreta y el hecho ya pasó: indicativo, «vino»."),
          mc(
            "«Necesitamos un teclista que ___ leer partituras.»",
            ["sepa", "sabe", "sabrá", "saber"],
            0,
            "«Necesitamos» habla de alguien que todavía no conocemos: subjuntivo, «sepa». «Sabe» describiría a un teclista concreto que ya existe."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "Es importante que todos ___ a los ensayos. (venir)", "vengan", "«Es importante que» es una valoración: subjuntivo, «vengan»."),
      fb("Completa.", "Si ensayamos cada semana, ___ listos para el concierto. (estar, futuro)", "estaremos", "Si + presente (ensayamos) + futuro en el resultado (estaremos)."),
      fb("Completa.", "Desde que tocamos juntos, ___ diez canciones. (escribir, perfecto)", "hemos escrito", "Periodo que llega hasta hoy: pretérito perfecto. Escribir → «escrito», participio irregular."),
      fb("Completa.", "Yo que tú, ___ el volumen del bajo. (bajar)", "bajaría", "«Yo que tú» introduce un consejo: condicional, «bajaría»."),
      mt(
        "Relaciona cada músico con su instrumento.",
        [
          ["el batería", "la batería"],
          ["el bajista", "el bajo"],
          ["la teclista", "el teclado"],
          ["el guitarrista", "la guitarra"],
        ],
        "Músicos e instrumentos (ojo: el batería = drummer, la batería = drums). En España se dice «el batería»; en muchos países, «el baterista»."
      ),
      mc(
        "«Let's play that song again.»",
        ["Toquemos esa canción otra vez.", "Tocamos esa canción otra vez ayer.", "Toquéis esa canción otra vez.", "Tocar esa canción otra vez nosotros."],
        0,
        "El mandato de nosotros usa el subjuntivo, con c → qu delante de e: toquemos. «Tocamos… ayer» es pasado, «toquéis» es de vosotros y «Tocar… nosotros» no es una forma posible."
      ),
      toEs("Buscamos una guitarrista que viva cerca del local.", "Tenemos una guitarrista que vive cerca del local.", "Cuando la persona ya existe y la conocéis, la relativa describe un hecho: indicativo, «vive». «Viva» solo vale mientras la buscáis.", [], "Cambia la frase: ya la habéis encontrado (empieza con «Tenemos»)."),
      toEs("Conozco a alguien que tiene una furgoneta.", "No conozco a nadie que tenga una furgoneta.", "Al negar que exista la persona, la relativa pasa a subjuntivo: «nadie que tenga».", [], "Cambia al negativo."),
      toEs("Buscamos un cantante que canta en inglés y en español.", "Buscamos un cantante que cante en inglés y en español.", "Todavía no sabemos quién será: subjuntivo, «cante». Con indicativo hablarías de un cantante concreto.", [], "Corrige la frase."),
      toEs("No hay nadie en el grupo que sabe arreglar los cables.", "No hay nadie en el grupo que sepa arreglar los cables.", "Tras «no hay nadie que» la persona no existe: subjuntivo, «sepa».", [], "Corrige la frase."),
      toEs("I hope a lot of people come to the concert.", "Espero que venga mucha gente al concierto.", "Esperar que + subjuntivo; «gente» es singular: venga.", ["Ojalá que venga mucha gente al concierto.", "Ojalá venga mucha gente al concierto."]),
      wo("La música es lo que nos une a pesar de las diferencias.", "Lo que + a pesar de.", "Music is what unites us despite our differences."),
      { type: "speak", prompt: "Graba un anuncio en voz alta: «We're a rock band and we're looking for a drummer who can rehearse on Fridays.»", text: "Somos un grupo de rock y buscamos un batería que pueda ensayar los viernes.", explanation: "No sabemos quién responderá al anuncio: relativa en subjuntivo, «pueda»." },
    ]
  ),
  L(
    "la-cumbre-del-teide",
    "b1r-tema-decisiones-dificiles",
    "Repaso temático: seguir o volver",
    "En la montaña, a veces hay que renunciar — hipótesis, consejos y el valor de decir que no.",
    "7 min",
    [
      sec(
        "Recuerda: tres maneras de valorar una opción",
        [
          "Recuerda la regla. Para calcular consecuencias reales: si + presente, y el resultado en futuro (si seguimos, llegaremos de noche). Para aconsejar desde tu punto de vista: yo que tú / yo en tu lugar + condicional (yo que tú, volvería), porque te imaginas en otra situación. Para valorar qué conviene: es mejor / es importante / es necesario que + subjuntivo (es mejor que volvamos), porque no afirmas un hecho, sino lo que debería pasar.",
          "Si no hay otro sujeto, la valoración va con infinitivo: es mejor volver (en general) / es mejor que volvamos (nosotros).",
        ],
        [
          ["Si seguimos, llegaremos de noche.", "If we continue, we'll arrive at night. (consecuencia real)"],
          ["Es mejor que volvamos; el tiempo está empeorando.", "It's better that we go back; the weather is getting worse. (valoración + subjuntivo)"],
          ["Yo en tu lugar, no cargaría tanto peso.", "In your place, I wouldn't carry so much weight. (consejo: condicional)"],
          ["Es importante beber agua cada hora.", "It's important to drink water every hour. (sin sujeto concreto: infinitivo)"],
        ],
        [
          fb("Completa.", "Yo que tú, ___ la mochila más ligera. (llevar)", "llevaría", "«Yo que tú» introduce un consejo imaginado: condicional, «llevaría»."),
          toEs("Es mejor descansar un rato.", "Es mejor que descanséis un rato.", "Cuando la valoración se refiere a otras personas (vosotros), el infinitivo pasa a que + subjuntivo: «descanséis».", [], "Cambia la frase para hablar a vosotros (es mejor que…)."),
        ]
      ),
    ],
    [
      fb("Completa.", "No creo que ___ fuerzas para llegar arriba. (tener, tú)", "tengas", "«No creer que» expresa duda: subjuntivo, «tengas»."),
      fb("Completa.", "Cuando llegamos al refugio, ya ___ oscuro. (estar, imperfecto)", "estaba", "Descripción de la escena → imperfecto. La oscuridad del momento va con estar: ya estaba oscuro (o «ya era de noche»)."),
      fb("Completa.", "Mis amigos ___ a la cima al día siguiente. (subir, pretérito)", "subieron", "Acción puntual y terminada → pretérito indefinido."),
      fb("Completa.", "Me alegro de que ___ la decisión correcta. (tomar, tú, perfecto)", "hayas tomado", "Alegrarse de que + perfecto de subjuntivo (la decisión ya está tomada)."),
      mc(
        "«The mountain will still be there next year.»",
        ["La montaña seguirá ahí el año que viene.", "La montaña seguiría ahí el año pasado.", "La montaña siga ahí el año que viene.", "La montaña ha seguido ahí el año que viene."],
        0,
        "Una predicción sobre el año que viene va en futuro: seguirá. «Seguiría… el año pasado» cambia a condicional y pasado, «siga» es subjuntivo y «ha seguido… el año que viene» mezcla tiempos."
      ),
      ms(
        "¿Qué frases son correctas?",
        ["Renunciar también es una forma de valor.", "Si te duele la cabeza, bajamos.", "Es importante que escuches a tu cuerpo.", "Ojalá que llegamos a la cima."],
        [0, 1, 2],
        "«Ojalá que llegamos a la cima» es incorrecta: ojalá pide subjuntivo, lleguemos. Las otras están bien, incluida si + presente + presente para una decisión inmediata."
      ),
      toEs("Debes ponerte el casco.", "Yo que tú, me pondría el casco.", "«Yo que tú» + condicional suena a consejo amistoso, no a obligación. El pronombre va delante del verbo conjugado: me pondría.", ["Yo que tú, me pondría el casco ya."], "Transforma la obligación en un consejo con «Yo que tú»."),
      toEs("Si la niebla baja, nos perdemos.", "Si la niebla baja, nos perderemos.", "Para una predicción sobre lo que puede pasar, el resultado va en futuro: «nos perderemos».", [], "Cambia el resultado a una predicción (futuro)."),
      toEs("Es mejor que bajamos antes de que oscurezca.", "Es mejor que bajemos antes de que oscurezca.", "«Es mejor que» es una valoración: subjuntivo, «bajemos».", [], "Corrige la frase."),
      toEs("Yo que tú, esperaré a que pase la tormenta.", "Yo que tú, esperaría a que pase la tormenta.", "«Yo que tú» va con condicional, no con futuro: «esperaría».", ["Yo que tú, esperaría a que pasara la tormenta."], "Corrige la frase."),
      toEs("I would like to try again next year.", "Me gustaría intentarlo otra vez el año que viene.", "Condicional de deseo + infinitivo con pronombre.", ["Me gustaría intentarlo de nuevo el año que viene.", "Me gustaría volver a intentarlo el año que viene.", "Me gustaría intentarlo otra vez el próximo año."]),
      wo("A veces lo más valiente es saber cuándo parar.", "Lo más + adjetivo + saber cuándo + infinitivo.", "Sometimes the bravest thing is knowing when to stop."),
      { type: "speak", prompt: "Tu compañera quiere seguir subiendo con mal tiempo. Aconséjala en voz alta: «If I were you, I'd go back. If we keep going, we'll arrive at night.»", text: "Yo que tú, volvería. Si seguimos, llegaremos de noche.", explanation: "Consejo → yo que tú + condicional (volvería); consecuencia real → si + presente + futuro (llegaremos)." },
    ]
  ),
  L(
    "el-silencio-del-retiro",
    "b1r-tema-estres",
    "Repaso temático: el estrés y el descanso",
    "Trabajo, agotamiento y pausas necesarias — consejos, reacciones y cambios de hábitos.",
    "7 min",
    [
      sec(
        "Señales de alarma y consejos",
        [
          "Recuerda las tres maneras de aconsejar y su gramática. Deberías + infinitivo (el condicional suaviza el consejo). Te recomiendo que / es mejor que + subjuntivo (aconsejas a otra persona, no informas). Mandato: tómate un respiro; en negativo, no + subjuntivo: no trabajes tanto.",
          "Para describir el estrés, «costar» funciona como gustar: me cuesta dormir, me cuestan las mañanas. Y los estados van con estar: estoy agotado, está quemada.",
        ],
        [
          ["Últimamente me cuesta mucho dormir.", "Lately I find it very hard to sleep. (costar como gustar)"],
          ["Deberías tomarte unos días libres.", "You should take a few days off. (deberías + infinitivo)"],
          ["Te recomiendo que hagas deporte por la tarde.", "I recommend you do some exercise in the afternoon. (recomendar que + subjuntivo)"],
        ],
        [
          fb("Aconseja.", "Te recomiendo que ___ el ordenador a las siete. (apagar)", "apagues", "«Te recomiendo que» aconseja a otra persona: subjuntivo. La g pasa a gu para mantener el sonido: apagues."),
          fb("Aconseja.", "No ___ correos el fin de semana. (contestar, tú)", "contestes", "El mandato negativo de tú usa el subjuntivo: no contestes."),
        ]
      ),
    ],
    [
      fb("Completa.", "Este año ___ más de sesenta horas a la semana. (trabajar, perfecto)", "he trabajado", "Este año → perfecto."),
      fb("Completa.", "Me preocupa que no ___ tiempo para ti misma. (tener, tú)", "tengas", "«Me preocupa que» expresa una emoción ante algo que hace otra persona: subjuntivo, tengas."),
      fb("Completa.", "Chicos, no ___ tantas horas; descansad un poco. (trabajar, vosotros)", "trabajéis", "Negativo de vosotros → subjuntivo: no trabajéis."),
      mt(
        "Relaciona cada expresión con su significado.",
        [
          ["estar quemado", "to be burned out"],
          ["desconectar", "to switch off"],
          ["no dar abasto", "to be overwhelmed"],
          ["tomarse un respiro", "to take a breather"],
        ],
        "Expresiones sobre el estrés."
      ),
      ms(
        "¿Qué consejos son correctos?",
        ["Tómate un descanso.", "Es mejor que duermas ocho horas.", "Yo que tú, iría a un retiro.", "No trabajas tanto."],
        [0, 1, 2],
        "«No trabajas tanto» es incorrecta: el negativo de tú usa subjuntivo, no trabajes tanto. Las otras usan bien el imperativo, es mejor que + subjuntivo y yo que tú + condicional."
      ),
      toEs("I had never been in silence for so many hours.", "Nunca había estado en silencio tantas horas.", "«Had never been» = nunca había estado; «so many hours» = tantas horas.", ["Nunca había pasado tantas horas en silencio.", "Nunca había estado tantas horas en silencio."]),
      wo("Lo que necesito es aprender a decir que no.", "Lo que + necesitar + infinitivo.", "What I need is to learn to say no."),
    ]
  ),
  L(
    "la-playa-despues-de-la-tormenta",
    "b1r-tema-limpieza-playa",
    "Repaso temático: después de la tormenta",
    "Organizar una limpieza colectiva: llamamientos, instrucciones y resultados con la pasiva.",
    "7 min",
    [
      sec(
        "Recuerda la regla: dos pasivas para contar resultados",
        [
          "Recuerda la regla: para contar lo que se hizo sin decir quién, se usa el se pasivo, y el verbo concuerda con la cosa (se recogió una bolsa / se recogieron cien bolsas). Si quieres decir quién lo hizo, usa ser + participio + por (la playa fue limpiada por los vecinos), y el participio concuerda con la cosa en género y número.",
          "¿Por qué? Con «se» la cosa es el sujeto gramatical, por eso manda en el verbo; y esta forma no admite «por + persona». Con «ser», el participio funciona como un adjetivo: limpiada (la playa), limpiados (los caminos).",
        ],
        [
          ["Se recogieron más de cien bolsas.", "More than a hundred bags were collected. (se + plural: concuerda con «bolsas»)"],
          ["La playa fue limpiada por los vecinos.", "The beach was cleaned by the neighbours. (ser + participio femenino + por)"],
          ["Se necesitan voluntarios para el sábado.", "Volunteers are needed for Saturday. (se + plural: concuerda con «voluntarios»)"],
        ],
        [
          fb("Completa con el se pasivo.", "En el paseo marítimo se ___ tres contenedores nuevos. (instalar, pretérito)", "instalaron", "Se pasivo: el verbo concuerda con la cosa, «tres contenedores», plural: «se instalaron»."),
          fb("Completa con ser + participio.", "Las redes de pesca fueron ___ por los buzos. (retirar)", "retiradas", "Con «ser», el participio concuerda con la cosa como un adjetivo: las redes → «retiradas» (femenino plural)."),
        ]
      ),
      sec(
        "El llamamiento",
        "Para invitar a la gente: mandatos de ustedes o vosotros, y es necesario que / ojalá + subjuntivo, porque expresan necesidad o deseo, no hechos.",
        [
          ["Vengan el sábado a las nueve y traigan guantes.", "Come on Saturday at nine and bring gloves."],
          ["Es necesario que seamos muchos.", "We need a lot of people."],
          ["Ojalá que no llueva.", "I hope it doesn't rain."],
        ],
        [
          fb("Completa el llamamiento.", "___ a vuestros amigos. (traer, vosotros)", "Traed", "Mandato afirmativo de vosotros: infinitivo sin -r + d, «traed»."),
          fb("Completa el llamamiento.", "Es importante que nadie ___ solo cerca de las rocas. (trabajar)", "trabaje", "«Es importante que» expresa necesidad: subjuntivo, «trabaje»."),
        ]
      ),
    ],
    [
      fb("Completa el informe.", "Se ___ más de dos toneladas de basura. (recoger, pretérito)", "recogieron", "Se pasivo: el verbo concuerda con «dos toneladas», plural: «se recogieron»."),
      fb("Completa el informe.", "La basura ___ separada para reciclarla. (ser, pretérito)", "fue", "Pasiva con ser: «fue separada», con el participio en femenino singular como «la basura»."),
      fb("Completa.", "Nunca ___ tanta gente en una limpieza. (ver, yo, pluscuamperfecto)", "había visto", "Algo que no había pasado antes de ese día: pluscuamperfecto, «había visto»."),
      mc(
        "«Thanks to everyone who came!»",
        ["¡Gracias a todos los que vinieron!", "¡Gracias a todos quienes vinieron que!", "¡Gracias a todos lo que vinieron!", "¡Gracias por todos los que venían!"],
        0,
        "«Those who» = los que: gracias a todos los que vinieron. «Quienes… que» repite relativos, «lo que» es para ideas y «por… venían» cambia la preposición y el tiempo."
      ),
      ms(
        "¿Qué frases son correctas?",
        ["Se encontraron muchas botellas.", "Me alegra que tantos vecinos hayan participado.", "Si hay otra tormenta, volveremos.", "Es necesario que reciclamos más."],
        [0, 1, 2],
        "«Es necesario que reciclamos» es incorrecta: necesidad → subjuntivo, reciclemos. Las otras usan bien el se pasivo, me alegra que + perfecto de subjuntivo y si + presente."
      ),
      toEs("Los vecinos limpiaron las rocas.", "Las rocas fueron limpiadas por los vecinos.", "En la pasiva con ser, la cosa pasa a sujeto y el participio concuerda con ella: las rocas → «limpiadas»; quien lo hace va con «por».", [], "Transforma la frase a pasiva con «ser», empezando por «Las rocas…»."),
      toEs("Se encontró una botella con un mensaje.", "Se encontraron dos botellas con un mensaje.", "En el se pasivo el verbo concuerda con la cosa: dos botellas → «se encontraron».", [], "Cambia a «dos botellas»."),
      toEs("Por la mañana se repartió cincuenta pares de guantes.", "Por la mañana se repartieron cincuenta pares de guantes.", "El verbo del se pasivo concuerda con la cosa: «cincuenta pares» es plural, así que «se repartieron».", [], "Corrige la frase."),
      toEs("La arena fue limpiado por los niños del colegio.", "La arena fue limpiada por los niños del colegio.", "Con «ser», el participio concuerda con la cosa, no con quien lo hace: la arena → «limpiada».", [], "Corrige la frase."),
      toEs("Ojalá que mañana hace buen tiempo.", "Ojalá que mañana haga buen tiempo.", "«Ojalá» expresa un deseo: siempre subjuntivo, «haga».", ["Ojalá mañana haga buen tiempo."], "Corrige la frase."),
      toEs("What began as a cleanup has become a tradition.", "Lo que empezó como una limpieza se ha convertido en una tradición.", "«Lo que» = what (sin sustantivo); indefinido para el comienzo y perfecto para el resultado que llega hasta hoy.", ["Lo que comenzó como una limpieza se ha convertido en una tradición."]),
      wo("La playa quedó más limpia que antes de la tormenta.", "Quedar + adjetivo describe el resultado; «limpia» concuerda con «la playa».", "The beach ended up cleaner than before the storm."),
      { type: "speak", prompt: "Di en voz alta: «More than three hundred bottles were collected.»", text: "Se recogieron más de trescientas botellas.", explanation: "Se pasivo en plural porque concuerda con «botellas»; «trescientas» también concuerda en femenino." },
    ]
  ),
  L(
    "quince-dias-en-kioto",
    "b1r-tema-viajar-solo",
    "Repaso temático: viajar solo",
    "Salir de la zona de confort: miedos, descubrimientos y consejos para el primer viaje en solitario.",
    "7 min",
    [
      sec(
        "Recuerda la regla: antes, durante y después del viaje",
        [
          "Recuerda la regla: los miedos que tenías antes del viaje son un estado en el pasado: imperfecto (tenía miedo de perderme, me daba miedo comer sola). Lo que no habías hecho nunca antes de ese momento va en pluscuamperfecto (nunca había viajado sola). Los hechos concretos del viaje, en indefinido (conocí a una chica, me perdí). Y lo que has aprendido hasta hoy, en pretérito perfecto (he aprendido a pedir ayuda).",
          "Tener miedo de / me daba miedo van con infinitivo cuando el miedo y la acción son de la misma persona: tenía miedo de sentirme sola, me daba miedo perderme.",
        ],
        [
          ["Tenía miedo de sentirme sola.", "I was afraid of feeling lonely. (estado pasado: imperfecto)"],
          ["Hasta entonces, nunca había ido de viaje sin mi familia.", "Until then, I had never gone on a trip without my family. (antes de otro pasado)"],
          ["El segundo día me perdí en el metro.", "On the second day I got lost on the metro. (hecho concreto: indefinido)"],
          ["He aprendido a pedir ayuda a desconocidos.", "I've learned to ask strangers for help. (hasta hoy: perfecto)"],
        ],
        [
          fb("Completa.", "Antes de ese viaje, nunca ___ sola en un restaurante. (comer, pluscuamperfecto)", "había comido", "Algo que no había pasado antes de otro momento pasado (el viaje): pluscuamperfecto, había + participio."),
          toEs("Tengo miedo de perder el pasaporte.", "Tenía miedo de perder el pasaporte.", "Un miedo que tenías antes del viaje es un estado en el pasado: imperfecto, «tenía».", ["Me daba miedo perder el pasaporte."], "Cambia al pasado: era un miedo que tenías antes del viaje."),
        ]
      ),
    ],
    [
      fb("Completa.", "Ahora sé que ___ capaz de todo. (ser, yo)", "soy", "«Saber que» afirma un hecho: indicativo, «soy»."),
      fb("Aconseja.", "Si viajas sola, ___ a alguien tu itinerario. (dejar, tú)", "deja", "Si + presente + mandato: el afirmativo de tú coincide con la forma de «él», «deja»."),
      fb("Aconseja.", "Es mejor que ___ unas palabras del idioma local. (aprender, tú)", "aprendas", "«Es mejor que» es una valoración: subjuntivo, «aprendas»."),
      fb("Completa.", "El templo que más me ___ fue el del Pabellón de Oro. (gustar, pretérito)", "gustó", "Una visita concreta y terminada: pretérito indefinido, «gustó»."),
      mt(
        "Relaciona cada situación con un buen consejo.",
        [
          ["Te pierdes.", "Pregunta en una tienda."],
          ["Te sientes sola.", "Únete a una visita guiada."],
          ["No entiendes el menú.", "Señala lo que come otra persona."],
          ["Estás cansada.", "Tómate una tarde libre."],
        ],
        "Mandatos de tú."
      ),
      mc(
        "«I hope you (tú) dare to travel alone one day.»",
        ["Espero que algún día te atrevas a viajar sola.", "Espero que algún día te atreves a viajar sola.", "Espero que algún día atreverte a viajar sola.", "Espero algún día que te atrevas viajar sola."],
        0,
        "Esperar que + subjuntivo (te atrevas) y atreverse a + infinitivo. «Te atreves» es indicativo, «atreverte» sin «que» no encaja y la última desordena la frase y pierde la «a»."
      ),
      toEs("Viajo sola por primera vez.", "Nunca había viajado sola antes de aquel verano.", "Para contar que algo no había pasado antes de un momento del pasado: nunca + pluscuamperfecto, «había viajado».", [], "Transforma la frase con «Nunca había…» y añade «antes de aquel verano»."),
      toEs("Aprendo a orientarme sin el móvil.", "Este año he aprendido a orientarme sin el móvil.", "Con «este año», un periodo que llega hasta hoy, se usa el pretérito perfecto: «he aprendido».", [], "Cambia al pretérito perfecto empezando con «Este año»."),
      toEs("La primera noche me sentía muy sola y lloré.", "La primera noche me sentí muy sola y lloré.", "«La primera noche» es un momento concreto y terminado: indefinido, «me sentí».", [], "Corrige la frase."),
      toEs("Cuando bajé del tren, mi amiga ya se ha ido.", "Cuando bajé del tren, mi amiga ya se había ido.", "Mi amiga se fue antes de que yo bajara del tren (otro pasado): pluscuamperfecto, «se había ido».", [], "Corrige la frase."),
      toEs("It was the best decision I have ever made.", "Fue la mejor decisión que he tomado nunca.", "Superlativo + relativo que + perfecto de experiencia: la mejor decisión que he tomado nunca.", ["Ha sido la mejor decisión que he tomado nunca.", "Fue la mejor decisión que he tomado en mi vida.", "Fue la mejor decisión que tomé en mi vida."]),
      wo("Volví a casa siendo una persona un poco diferente.", "El gerundio «siendo» describe cómo volviste (en qué estado); no es una perífrasis con «volver».", "I came home a slightly different person."),
      { type: "speak", prompt: "Cuenta en voz alta: «Before the trip I was afraid of feeling lonely, but I've learned a lot.»", text: "Antes del viaje tenía miedo de sentirme solo, pero he aprendido mucho.", explanation: "Miedo como estado pasado → imperfecto (tenía); lo aprendido hasta hoy → perfecto (he aprendido). También: sentirme sola." },
    ]
  ),
  L(
    "la-bicicleta-de-mi-padre",
    "b1r-tema-memoria-familiar",
    "Repaso temático: la memoria de un padre",
    "Recuerdos, herencias y viajes en honor de alguien — los tres pasados y el estilo indirecto.",
    "7 min",
    [
      sec(
        "Recuerda la regla: contar lo que él decía",
        [
          "Recuerda la regla: cuando cuentas lo que alguien dijo en el pasado (me dijo que, me contaba que, me prometió que), los verbos dan un paso atrás en el tiempo. El presente pasa a imperfecto (es → era), el perfecto y el indefinido pasan a pluscuamperfecto (he hecho / hice → había hecho) y el futuro pasa a condicional (vendré → vendría).",
          "¿Por qué? Porque ahora todo se mira desde un momento que ya pasó: lo que entonces era presente ahora es pasado, lo que ya había ocurrido queda más atrás y lo que iba a ocurrir es un futuro visto desde el pasado. Y cambian también las personas: «mis hermanos» en boca de él pasa a «sus hermanos».",
        ],
        [
          ["Mi padre me contaba que había cruzado el país en bici.", "My father used to tell me he had crossed the country by bike. (crucé → había cruzado)"],
          ["Me prometió que algún día lo haríamos juntos.", "He promised me that one day we'd do it together. (haremos → haríamos)"],
          ["Mi abuela decía que el pan del pueblo era el mejor.", "My grandmother used to say the village bread was the best. (es → era)"],
        ],
        [
          fb("Completa en estilo indirecto.", "«Estoy agotado.» → Mi padre me dijo que ___ agotado.", "estaba", "Lo que él dijo en presente (estoy) da un paso atrás: imperfecto, «estaba»."),
          toEs("«Te llevaré al mar.»", "Me prometió que me llevaría al mar.", "El futuro (llevaré) visto desde el pasado pasa a condicional: «llevaría». «Te» (a mí, desde su boca) pasa a «me».", [], "Pasa la frase al estilo indirecto empezando con «Me prometió que…»."),
        ]
      ),
    ],
    [
      fb("Completa.", "Siempre decía que aquel ___ el mejor viaje de su vida. (ser, pluscuamperfecto)", "había sido", "El viaje ocurrió antes de que él lo contara: pluscuamperfecto, «había sido»."),
      fb("Completa.", "Cuando ___ niño, mi padre me llevaba en su bici. (ser, yo)", "era", "Una etapa de la vida es un fondo, no un hecho puntual: imperfecto, «era»."),
      fb("Completa.", "El año pasado ___ su antigua bicicleta en el garaje. (encontrar, yo)", "encontré", "Hecho puntual con fecha cerrada (el año pasado): indefinido, «encontré»."),
      fb("Completa.", "Ojalá que él ___ orgulloso de mí. (estar)", "esté", "«Ojalá» expresa un deseo y siempre lleva subjuntivo: «esté»."),
      mc(
        "«The bike that my father left me is forty years old.»",
        ["La bici que me dejó mi padre tiene cuarenta años.", "La bici quien me dejó mi padre tiene cuarenta años.", "La bici que me dejaba mi padre es cuarenta años.", "La bici lo que me dejó mi padre tiene cuarenta años."],
        0,
        "Sin preposición se usa «que», y la edad se expresa con tener: tiene cuarenta años. «Quien» es para personas, «dejaba… es» cambia el tiempo y usa ser, y «lo que» no encaja con un sustantivo."
      ),
      ms(
        "¿Qué frases son correctas?",
        ["Me dijo que nunca había sido tan feliz.", "Me contaba que de joven vivía en el norte.", "Me prometió que vendría a verme.", "Me dijo que ha llegado ayer."],
        [0, 1, 2],
        "«Me dijo que ha llegado ayer» es incorrecta: en estilo indirecto con dijo, el perfecto pasa a pluscuamperfecto (había llegado el día anterior). Las otras frases hacen bien ese cambio."
      ),
      toEs("«He cerrado el taller.»", "Mi tío me contó que había cerrado el taller.", "El perfecto (he cerrado) da un paso atrás y pasa a pluscuamperfecto: «había cerrado».", ["Mi tío me dijo que había cerrado el taller."], "Pasa la frase al estilo indirecto empezando con «Mi tío me contó que…»."),
      toEs("«Vivo con mis hermanos.»", "Mi abuela decía que vivía con sus hermanos.", "Presente (vivo) → imperfecto (vivía); y como ya no habla ella, «mis hermanos» pasa a «sus hermanos».", [], "Pasa la frase al estilo indirecto empezando con «Mi abuela decía que…»."),
      toEs("Mi padre me dijo que ha trabajado en Alemania de joven.", "Mi padre me dijo que había trabajado en Alemania de joven.", "Tras «me dijo que», lo que ya había pasado va en pluscuamperfecto: «había trabajado». El perfecto «ha trabajado» se queda en el presente.", ["Mi padre me dijo que trabajó en Alemania de joven."], "Corrige la frase."),
      toEs("Me prometió que vendrá a mi graduación.", "Me prometió que vendría a mi graduación.", "Una promesa hecha en el pasado mira a un futuro desde el pasado: condicional, «vendría».", [], "Corrige la frase."),
      toEs("Cuando era niño, mi abuelo me contó un cuento cada noche.", "Cuando era niño, mi abuelo me contaba un cuento cada noche.", "«Cada noche» indica costumbre: imperfecto, «me contaba». El indefinido es para hechos puntuales.", [], "Corrige la frase."),
      toEs("I've done this trip for him.", "He hecho este viaje por él.", "«Por» = en su honor, por él. «Para él» significaría que el viaje es un regalo para él.", ["Hice este viaje por él."]),
      wo("Cada kilómetro me recordaba las historias que me contaba.", "Imperfecto para lo repetido (cada kilómetro) y para las historias que él contaba siempre.", "Every kilometer reminded me of the stories he used to tell me."),
      { type: "speak", prompt: "Cuenta en voz alta: «My mother used to tell me that she had grown up by the sea.»", text: "Mi madre me contaba que había crecido junto al mar.", explanation: "Me contaba (costumbre: imperfecto) + había crecido (antes de contarlo: pluscuamperfecto)." },
    ]
  ),
  L(
    "el-primer-paso-de-salsa",
    "b1r-tema-timidez",
    "Repaso temático: vencer la timidez",
    "Clases de baile, conversaciones con desconocidos y pequeños logros — emociones y consejos.",
    "7 min",
    [
      sec(
        "Recuerda la regla: ¿quién hace la acción?",
        [
          "Recuerda la regla: «me cuesta», «me da vergüenza» y «me da miedo» funcionan como «gustar» (lo que cuesta es el sujeto). Si la acción la haces tú, van con infinitivo: me cuesta hablar, me da vergüenza bailar. Si la hace otra persona, van con que + subjuntivo, porque expresan una emoción ante un hecho: me da vergüenza que me miren.",
          "En cambio, «cuando» para algo que pasa siempre (un hábito) va con indicativo: me pongo nervioso cuando hablo en público. Y para el cambio de estado se usa «ponerse»: me pongo rojo, se pone nerviosa.",
        ],
        [
          ["Me cuesta hablar con gente que no conozco.", "I find it hard to talk to people I don't know. (yo hablo: infinitivo)"],
          ["Me da vergüenza que me miren cuando bailo.", "I'm embarrassed when people look at me dancing. (ellos miran: subjuntivo)"],
          ["A mi hermana le da miedo conducir de noche.", "My sister is scared of driving at night. (ella conduce: infinitivo)"],
          ["Se pone roja cada vez que la saludan.", "She turns red every time they greet her. (hábito: indicativo)"],
        ],
        [
          fb("Completa.", "Me pongo rojo cuando alguien me ___ la palabra. (dirigir)", "dirige", "«Cuando» + algo que pasa siempre (hábito) → indicativo, «dirige»."),
          toEs("Me da vergüenza cantar en el karaoke.", "Me da vergüenza que mis amigos me graben en el karaoke.", "Cuando la acción la hace otra persona (mis amigos), el infinitivo pasa a que + subjuntivo: «me graben».", [], "Cambia la frase: lo que te da vergüenza es que tus amigos te graben."),
        ]
      ),
    ],
    [
      fb("Completa.", "Me da vergüenza que la gente ___ mis errores. (ver)", "vea", "Otra persona (la gente) hace la acción: dar vergüenza que + subjuntivo, «vea»."),
      fb("Aconseja.", "No ___ tanto en lo que piensan los demás. (pensar, tú)", "pienses", "Consejo negativo de tú: no + subjuntivo, pensar → «pienses» (e → ie)."),
      fb("Aconseja.", "___ un paso cada día, aunque sea pequeño. (dar, tú)", "Da", "Mandato afirmativo de tú = forma de «él»: «da»."),
      fb("Completa.", "Desde que voy a clases de salsa, ___ a mucha gente. (conocer, perfecto)", "he conocido", "Desde que + presente; en la oración principal, pretérito perfecto (periodo que llega hasta hoy)."),
      mt(
        "Relaciona cada frase con su significado.",
        [
          ["romper el hielo", "to break the ice"],
          ["tener dos pies izquierdos", "to have two left feet"],
          ["soltarse", "to loosen up"],
          ["sacar a bailar", "to ask to dance"],
        ],
        "Expresiones del baile y la vida social."
      ),
      mc(
        "«I never thought I would dance in public.»",
        ["Nunca pensé que bailaría en público.", "Nunca pensé que bailaré en público.", "Nunca pienso que bailaba en público.", "Nunca pensé que baile en público."],
        0,
        "El futuro visto desde el pasado (pensé que…) se expresa con el condicional: bailaría. «Bailaré» es futuro desde el presente, «pienso… bailaba» cambia los tiempos y «baile» es subjuntivo."
      ),
      toEs("Me cuesta bailar.", "A mi novio le cuesta bailar.", "«Costar» funciona como «gustar»: cambia el pronombre (me → le) y, si nombras a la persona, va con «a»: a mi novio le cuesta.", [], "Cambia la persona: a tu novio."),
      toEs("Me cuestan hablar en público.", "Me cuesta hablar en público.", "Lo que cuesta es un infinitivo (hablar), y con un infinitivo el verbo va siempre en singular: «me cuesta».", [], "Corrige la frase."),
      toEs("Me pongo nervioso cuando tenga que llamar por teléfono.", "Me pongo nervioso cuando tengo que llamar por teléfono.", "Para un hábito (siempre que pasa), «cuando» va con indicativo: «tengo». El subjuntivo es para el futuro (cuando tenga que llamar mañana…).", ["Me pongo nerviosa cuando tengo que llamar por teléfono."], "Corrige la frase."),
      toEs("It's normal that you (tú) feel shy at first.", "Es normal que te sientas tímido al principio.", "Es normal que + subjuntivo reflexivo.", ["Es normal que te sientas tímida al principio.", "Es normal sentirse tímido al principio."]),
      wo("Lo que más me ayudó fue reírme de mí mismo.", "Lo que + pretérito + infinitivo reflexivo.", "What helped me most was laughing at myself."),
      { type: "speak", prompt: "Cuenta en voz alta: «I find it hard to talk to strangers, and I'm embarrassed when people look at me.»", text: "Me cuesta hablar con desconocidos, y me da vergüenza que la gente me mire.", explanation: "Yo hablo → me cuesta + infinitivo; la gente mira → me da vergüenza que + subjuntivo (mire)." },
    ]
  ),
  L(
    "el-aula-bajo-el-puente",
    "b1r-tema-ensenar",
    "Repaso temático: enseñar y aprender",
    "Una profesora jubilada y sus nuevos alumnos — instrucciones de clase, deseos y experiencias.",
    "7 min",
    [
      sec(
        "Recuerda la regla: instrucciones y deseos en clase",
        [
          "Recuerda la regla: para dar instrucciones a un grupo, en España se usa vosotros (abrid, escribid; negativo: no copiéis) y en América ustedes, que es la forma del subjuntivo (abran, escriban; no copien). Los dos negativos usan el subjuntivo.",
          "Para expresar lo que quieres que hagan los alumnos: quiero que / espero que + subjuntivo, porque hay dos sujetos (yo quiero, ellos leen). Si el sujeto es el mismo, infinitivo: quiero enseñar, espero aprender.",
        ],
        [
          ["Abrid el cuaderno y escribid la fecha.", "Open your notebook and write the date. (vosotros: -d)"],
          ["Saquen un lápiz y no hablen.", "Take out a pencil and don't talk. (ustedes: subjuntivo)"],
          ["Quiero que cada uno lea una frase en voz alta.", "I want each of you to read a sentence aloud. (otro sujeto: subjuntivo)"],
          ["Espero aprender mucho de vosotros.", "I hope to learn a lot from you. (mismo sujeto: infinitivo)"],
        ],
        [
          fb("Da la instrucción.", "___ atención, por favor. (prestar, vosotros)", "Prestad", "Mandato afirmativo de vosotros: prestar sin -r + -d, «prestad»."),
          toEs("Abrid el libro por la página diez.", "Abran el libro por la página diez.", "De vosotros a ustedes: el mandato de ustedes es la forma del subjuntivo, abrir → «abran».", ["Abran los libros por la página diez."], "Cambia a ustedes."),
        ]
      ),
    ],
    [
      fb("Expresa un deseo.", "Espero que todos ___ a leer este año. (aprender)", "aprendan", "«Esperar que» con otro sujeto (todos) pide subjuntivo: «aprendan»."),
      fb("Completa.", "En cuarenta años de profesión, ___ a miles de alumnos. (enseñar, perfecto)", "he enseñado", "Perfecto para una trayectoria que llega hasta hoy."),
      fb("Completa.", "Cuando me jubilé, pensé que ya no ___ a dar clase. (volver, condicional)", "volvería", "Futuro visto desde el pasado (pensé que…) → condicional, «volvería»."),
      fb("Completa.", "No habléis mientras ___ vuestros compañeros. (hablar)", "hablan", "Mientras + acción simultánea en presente → indicativo, «hablan»."),
      mc(
        "«The children who come to class have taught me a lot.»",
        ["Los niños que vienen a clase me han enseñado mucho.", "Los niños quienes vienen a clase me han enseñado mucho.", "Los niños que vienen a clase me enseñaban mucho ayer.", "Los niños lo que vienen a clase me han enseñado mucho."],
        0,
        "Sin preposición ni coma se usa «que», y una experiencia que llega al presente va en perfecto: me han enseñado. «Quienes» sin coma, «enseñaban… ayer» y «lo que» son incorrectos."
      ),
      ms(
        "¿Qué instrucciones son correctas?",
        ["No copiéis del compañero.", "Levantad la mano para hablar.", "Sentaos en círculo.", "No gritad."],
        [0, 1, 2],
        "«No gritad» es incorrecta: el negativo de vosotros usa subjuntivo, no gritéis. «No copiéis», «Levantad» y «Sentaos» están bien formados."
      ),
      toEs("Leéis en voz alta.", "Quiero que leáis en voz alta.", "Con «quiero que» y otro sujeto (vosotros), el verbo pasa a subjuntivo: «leáis».", [], "Transforma la frase en un deseo con «Quiero que»."),
      toEs("Usad el diccionario.", "No uséis el diccionario.", "Negativo de vosotros: no + subjuntivo, «no uséis».", [], "Cambia al negativo."),
      toEs("Quiero que aprendo a tocar el piano.", "Quiero aprender a tocar el piano.", "Si el sujeto es el mismo (yo quiero, yo aprendo), «querer» va con infinitivo, sin «que».", [], "Corrige la frase."),
      toEs("Espero que hacéis los ejercicios en casa.", "Espero que hagáis los ejercicios en casa.", "«Esperar que» con otro sujeto pide subjuntivo: hacer → hago → «hagáis».", [], "Corrige la frase."),
      toEs("I didn't know that teaching again would make me so happy.", "No sabía que volver a enseñar me haría tan feliz.", "Imperfecto + condicional (futuro del pasado).", ["No sabía que enseñar otra vez me haría tan feliz."]),
      wo("Nunca es tarde para aprender algo nuevo.", "Nunca es tarde para + infinitivo.", "It's never too late to learn something new."),
      { type: "speak", prompt: "Eres la profesora (en España). Di en voz alta: «Close your books and listen. I want you to repeat after me.» (vosotros)", text: "Cerrad los libros y escuchad. Quiero que repitáis después de mí.", explanation: "Mandatos de vosotros con -d (cerrad, escuchad); quiero que + subjuntivo (repitáis, con e → i)." },
    ]
  ),
  L(
    "el-fotografo-accidental",
    "b1r-tema-talento-oculto",
    "Repaso temático: un talento inesperado",
    "Aficiones que se convierten en algo más — sorpresas, logros y el reconocimiento de los demás.",
    "8 min",
    [
      sec(
        "Recuerda la regla: reaccionar con sorpresa o con certeza",
        [
          "Recuerda: cuando reaccionas ante lo que hace otra persona (me sorprende que, no me puedo creer que, me alegra que), el segundo verbo va en subjuntivo, porque no informas de un hecho: das tu reacción. Cuando estás seguro (estoy seguro de que, sé que), va en indicativo.",
          "Y para contar el antes de la historia, el pluscuamperfecto: nunca había pensado que...",
        ],
        [
          ["No me puedo creer que mi foto esté en una galería.", "I can't believe my photo is in a gallery. (sorpresa → esté)"],
          ["Estoy segura de que venderás más fotos.", "I'm sure you'll sell more photos. (certeza → indicativo, venderás)"],
          ["Nunca había enseñado mis fotos a nadie.", "I had never shown my photos to anyone. (antes de la exposición)"],
        ],
        [
          fb("Reacciona.", "Me sorprende que alguien ___ comprar mi foto. (querer)", "quiera", "Sorprender que + otra persona → subjuntivo: querer → quiera (e → ie)."),
          fb("Reacciona.", "Estoy seguro de que ___ más oportunidades. (tener, tú, futuro)", "tendrás", "Estar seguro de que expresa certeza → indicativo; futuro irregular de tener: tendrás."),
        ]
      ),
    ],
    [
      fb("Completa.", "La foto ___ tomada desde la furgoneta de reparto. (ser, pretérito)", "fue", "Pasiva con ser en indefinido: fue tomada (la foto, femenino → tomada)."),
      fb("Completa.", "Llevo años haciendo fotos, pero nunca las ___ enseñado a nadie. (haber, yo, perfecto)", "he", "Perfecto: nunca las he enseñado. El pronombre las va delante del auxiliar."),
      fb("Completa.", "Si sigues así, algún día ___ tu propia exposición. (tener, futuro)", "tendrás", "Si + presente + futuro: tendrás."),
      mt(
        "Relaciona cada término con su significado.",
        [
          ["la exposición", "exhibition"],
          ["el encuadre", "framing"],
          ["revelar", "to develop (photos)"],
          ["la galería", "gallery"],
        ],
        "Vocabulario de fotografía: la exposición es donde se muestran las obras (falso amigo de «exposure» en otros contextos); el encuadre sale de cuadro."
      ),
      ms(
        "¿Qué frases son correctas?",
        ["Me encanta que te reconozcan por fin.", "La foto que más me gusta es la del mercado.", "Te recomiendo que te presentes a un concurso.", "Ojalá que ganarás el premio."],
        [0, 1, 2],
        "«Ojalá que ganarás el premio» es incorrecta: ojalá pide subjuntivo, ganes. Las otras usan bien me encanta que, la que y recomendar que + subjuntivo."
      ),
      toEs(
        "Sé que mi hermana pinta muy bien.",
        "Me sorprende que mi hermana pinte muy bien.",
        "Saber que informa de un hecho (indicativo, pinta); me sorprende que es una reacción y pide subjuntivo: pinte.",
        [],
        "Cambia «Sé que» por «Me sorprende que»."
      ),
      toEs(
        "No me puedo creer que mi hijo toque la guitarra en un grupo.",
        "Estoy seguro de que mi hijo toca la guitarra en un grupo.",
        "Con certeza (estoy seguro de que) el verbo vuelve al indicativo: toque → toca.",
        ["Estoy segura de que mi hijo toca la guitarra en un grupo."],
        "Cambia «No me puedo creer que» por «Estoy seguro de que»."
      ),
      toEs("«Me alegra que por fin publicas tus poemas.»", "Me alegra que por fin publiques tus poemas.", "Me alegra que + otra persona pide subjuntivo: publicar → publiques (c → qu delante de e).", [], "Corrige la frase."),
      toEs("The photo that changed everything was taken by accident.", "La foto que lo cambió todo fue tomada por casualidad.", "Relativo que + pasiva con ser; el participio concuerda con «la foto»: fue tomada.", ["La foto que cambió todo fue tomada por casualidad.", "La foto que lo cambió todo se tomó por casualidad.", "La foto que lo cambió todo fue hecha por accidente."]),
      wo("A veces el talento aparece donde menos lo esperas.", "Aquí donde va con indicativo (esperas) porque es una verdad general, no un lugar desconocido.", "Sometimes talent turns up where you least expect it."),
    ]
  ),
];
