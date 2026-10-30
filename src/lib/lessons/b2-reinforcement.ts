// Synced from cheneygross-afk/lengo:src/lib/lessons/b2-reinforcement.ts by scripts/sync-content.mjs -- edit it there, not here.
import { anchored, authoring } from "./authoring";
import type { AnchoredLesson } from "./weave";

// B2 reinforcement lessons -- woven into B2_LESSONS right after the lesson
// each one reinforces (see weave.ts). Written in Spanish, like the base B2
// lessons, and built the same way as b1-reinforcement.ts: fresh formats
// (transformations, error hunts, contrast clinics, dialogue labs, story
// detectives, missions, spiral reviews, word webs, a B2 Challenge series)
// plus themed spiral reviews between the reading stories.
const { mc, ms, fb, toEs, toEn, wo, mt, sec } = authoring("es");
const L = (
  after: string,
  slug: string,
  title: string,
  summary: string,
  duration: string,
  sections: Parameters<typeof anchored>[6],
  exercises: Parameters<typeof anchored>[7]
) => anchored("B2", after, slug, title, summary, duration, sections, exercises);

export const B2_REINFORCEMENT: AnchoredLesson[] = [
  L(
    "subjunctive-adjective-clauses-2",
    "b2r-mission-wanted-ads",
    "Misión real: anuncios de «se busca»",
    "Escribe y lee anuncios en los que se busca algo que quizá no existe — el subjuntivo en las relativas.",
    "7 min",
    [
      sec(
        "Lo que buscamos",
        [
          "Recuerda la regla: cuando buscas algo sin saber si existe, la relativa va en subjuntivo (Se busca piso que tenga terraza). Cuando ya lo tienes o sabes que existe, en indicativo (Vendo piso que tiene terraza).",
          "En un tablón de anuncios esto decide el tipo de anuncio: «se busca», «se necesita», «busco» describen condiciones (subjuntivo); «vendo», «regalo», «se ofrece» presentan algo real (indicativo). Ojo: un gato perdido o una cartera perdida también se «buscan», pero existen y son concretos, así que van en indicativo: Se busca perro que responde al nombre de Toby. Los anuncios suelen omitir el artículo: Se busca camarero…",
        ],
        [
          ["Buscamos un diseñador que hable alemán.", "We're looking for a designer who speaks German. (no sabemos quién será)"],
          ["Tenemos una diseñadora que habla alemán.", "We have a designer who speaks German. (ella existe)"],
          ["Se busca perro que responde al nombre de Toby.", "Lost dog that answers to the name Toby. (un perro concreto: indicativo)"],
        ],
        [
          fb("Completa el anuncio.", "Se busca piso que ___ cerca del metro. (estar)", "esté", "«Se busca» + piso aún desconocido → subjuntivo (esté). La ubicación va con estar."),
          fb("Completa el anuncio.", "Vendo una bici que solo ___ un año. (tener)", "tiene", "Lo que vendes existe: antecedente conocido → indicativo (tiene)."),
        ]
      ),
      sec(
        "Nada ni nadie",
        "Con antecedentes negados (no hay nadie que, no conozco ningún sitio que), el subjuntivo es obligatorio: niegas que exista, así que no puedes afirmar nada de él.",
        [
          ["No hay nadie que cocine como mi abuela.", "There's nobody who cooks like my grandmother."],
        ],
        [
          mc(
            "«No conozco ningún restaurante que ___ abierto a las cinco de la mañana.»",
            ["esté", "está", "estaba", "estará"],
            0,
            "Si el antecedente no existe («ningún restaurante»), la relativa va en subjuntivo: «esté». «Está» sería para un restaurante concreto que sí existe; «estaba» y «estará» son indicativo en otros tiempos."
          ),
        ]
      ),
    ],
    [
      fb("Completa el anuncio.", "Necesitamos voluntarios que ___ disponibles los fines de semana. (estar)", "estén", "Voluntarios aún desconocidos → subjuntivo (estén, plural)."),
      fb("Completa el anuncio.", "Busco a la persona que ___ mi cartera ayer en el bus. (encontrar)", "encontró", "Aunque digas «busco», esa persona existe y hizo algo concreto ayer → indicativo (encontró). El artículo «la» lo señala: es alguien determinado."),
      fb("Completa.", "¿Hay alguien aquí que ___ primeros auxilios? (saber)", "sepa", "Pregunta sobre la existencia → subjuntivo irregular de saber (sepa)."),
      mt(
        "Relaciona cada principio con su final lógico.",
        [
          ["Busco un compañero de piso que", "no fume."],
          ["Mi compañero de piso es alguien que", "no fuma."],
          ["No hay ningún candidato que", "cumpla los requisitos."],
          ["Contratamos al candidato que", "cumplía los requisitos."],
        ],
        "Desconocido o inexistente → subjuntivo (fume, cumpla); conocido → indicativo (fuma, cumplía)."
      ),
      ms(
        "¿Qué frases son correctas?",
        ["Quiero un trabajo que me permita viajar.", "Tengo un trabajo que me permita viajar.", "No hay nada que me guste más.", "Cualquiera que lo vea lo entenderá."],
        [0, 2, 3],
        "Con un antecedente buscado, negado o indeterminado va subjuntivo. En «Tengo un trabajo que me permita viajar» el trabajo ya existe, así que debe ser «que me permite»."
      ),
      toEs("I don't know anyone who can help you.", "No conozco a nadie que pueda ayudarte.", "Con un antecedente negativo («nadie»), la relativa va en subjuntivo: «pueda».", ["No conozco a nadie que te pueda ayudar."]),
      wo("Se busca profesora que tenga experiencia con niños pequeños.", "Anuncio con antecedente desconocido → subjuntivo (tenga). El artículo se omite, como es habitual en los anuncios.", "Teacher wanted who has experience with young children."),
      mc(
        "Has perdido a tu gata Luna. ¿Qué anuncio pones en el portal?",
        ["Se busca gata blanca que responde al nombre de Luna.", "Se busca gata blanca que responda al nombre de Luna.", "Se busca gata blanca que respondiera al nombre de Luna.", "Se busca gata blanca que responderá al nombre de Luna."],
        0,
        "Luna existe y es tu gata: antecedente concreto → indicativo (responde), aunque el anuncio diga «se busca». «Responda» sería para cualquier gata que cumpliera la condición, no para la tuya."
      ),
    ]
  ),
  L(
    "subjunctive-adjective-clauses-2",
    "b2r-contrast-antecedent",
    "Contraste: «que sabe» / «que sepa»",
    "Pares mínimos con relativas: el mismo verbo en indicativo y en subjuntivo, y lo que cambia el significado.",
    "7 min",
    [
      sec(
        "Conocido o desconocido",
        [
          "Recuerda la regla: la relativa en indicativo afirma que el antecedente existe y está identificado; en subjuntivo lo presenta como hipotético, todavía por saber.",
          "Por eso el modo cambia el significado de frases casi iguales, y el inglés lo traduce a veces con «-ever» (whatever, wherever, whoever) o con «any». Fíjate también en el artículo: «el vestido que es rojo» señala uno concreto; «un vestido que sea rojo», cualquiera. Y en el tiempo: lo que ya pasó (los que llegaron) es un hecho; lo que está por llegar (los que lleguen) todavía no tiene nombres.",
        ],
        [
          ["Quiero el vestido que es rojo.", "I want the dress that is red. (uno concreto que ya he visto)"],
          ["Quiero un vestido que sea rojo.", "I want a dress that's red. (cualquiera que sea rojo)"],
          ["Haz lo que te dice tu madre.", "Do what your mother tells you. (ya lo ha dicho)"],
          ["Haz lo que te diga tu madre.", "Do whatever your mother tells you. (lo dirá)"],
        ],
        [
          mc(
            "«Pide lo que ___.» (cualquier cosa: el menú todavía no está decidido)",
            ["quieras", "quieres", "querías", "querrás"],
            0,
            "«Lo que» + subjuntivo significa «cualquier cosa que»: «quieras». «Quieres» hablaría de algo concreto que ya sabemos; «querías» y «querrás» son indicativo en otros tiempos."
          ),
          fb("¿Indicativo o subjuntivo?", "Sentaos en la mesa que ___ libre; da igual cuál. (estar)", "esté", "«Da igual cuál»: cualquier mesa que cumpla la condición → subjuntivo (esté). Con «la mesa que está libre» señalarías una mesa concreta."),
        ]
      ),
    ],
    [
      fb("¿Indicativo o subjuntivo?", "Voy a comprar el coche que ___ en el escaparate ayer. (ver, nosotros)", "vimos", "Un coche concreto que ya hemos visto → indicativo (vimos, indefinido)."),
      fb("¿Indicativo o subjuntivo?", "Voy a comprar un coche que ___ poco. (gastar)", "gaste", "Cualquier coche con esa característica, aún sin elegir → subjuntivo (gaste)."),
      fb("¿Indicativo o subjuntivo?", "Los alumnos que ___ tarde no podrán entrar. (llegar)", "lleguen", "Habla del futuro: los alumnos aún no están identificados → subjuntivo (lleguen, con gu delante de e)."),
      fb("¿Indicativo o subjuntivo?", "Los alumnos que ___ tarde ayer no pudieron entrar. (llegar)", "llegaron", "Hecho pasado y alumnos concretos → indicativo (llegaron)."),
      mt(
        "Relaciona cada frase con su traducción.",
        [
          ["Donde tú dices.", "Where you say (it is)."],
          ["Donde tú digas.", "Wherever you say."],
          ["Como quieres.", "The way you want (I know how)."],
          ["Como quieras.", "However you like."],
        ],
        "El subjuntivo añade el matiz de «-ever»: lo que sea, donde sea, como sea. El indicativo remite a algo ya dicho o conocido."
      ),
      toEs("We'll eat wherever you (tú) want.", "Comeremos donde quieras.", "«Donde» + subjuntivo significa «en cualquier sitio que»: «donde quieras».", ["Comemos donde quieras.", "Vamos a comer donde tú quieras.", "Comeremos donde tú quieras.", "Vamos a comer donde quieras."]),
      wo("El que termine primero puede irse a casa.", "El que + subjuntivo = whoever: todavía no sabemos quién terminará primero.", "Whoever finishes first can go home."),
      toEs("El que terminó primero se fue a casa.", "El que termine primero podrá irse a casa.", "Al pasar al futuro, la persona deja de ser concreta: todavía no sabemos quién será → subjuntivo (termine). En pasado era alguien identificado → indicativo (terminó).", ["El que termine primero se podrá ir a casa."], "Cambia al futuro: todavía no ha terminado nadie."),
    ]
  ),
  L(
    "subjunctive-adjective-clauses-2",
    "b2r-error-hunt-relative-subjunctive",
    "Caza de errores: las relativas con subjuntivo",
    "«Busco a alguien que sabe», «No hay nadie que puede», «Tengo un amigo que sepa» — diagnostica y corrige.",
    "7 min",
    [
      sec(
        "Dos errores simétricos",
        [
          "Recuerda la regla: antecedente real y conocido → indicativo; desconocido, buscado, preguntado o negado → subjuntivo. Hay dos errores simétricos: Error 1, indicativo con un antecedente desconocido o inexistente (el que comete quien piensa en inglés, donde no cambia nada). Error 2, subjuntivo con un antecedente real (el que comete quien ya ha aprendido el subjuntivo y lo pone en todas partes).",
          "Para diagnosticar, no mires solo el verbo principal: pregúntate si quien habla sabe que esa persona o cosa existe. «Leí un libro que explica…» lleva indicativo aunque tenga «un»; «No encuentro a nadie que quiera…» lleva subjuntivo aunque «encontrar» no sea un verbo de deseo.",
        ],
        [
          ["✗ No hay nadie que puede ayudarte. → ✓ No hay nadie que pueda ayudarte.", "There's nobody who can help you."],
          ["✗ Tengo una hermana que viva en Roma. → ✓ Tengo una hermana que vive en Roma.", "I have a sister who lives in Rome."],
          ["✗ Quiero un trabajo donde puedo viajar. → ✓ Quiero un trabajo donde pueda viajar.", "I want a job where I can travel. (donde también sigue la regla)"],
        ],
        [
          ms(
            "¿Qué frases tienen un error?",
            ["Busco un libro que explica la historia de Perú.", "Leí un libro que explica la historia de Perú.", "¿Conoces a alguien que tenga coche?", "No encuentro a nadie que quiere venir."],
            [0, 3],
            "Tienen error «Busco un libro que explica…» (libro aún desconocido → «explique») y «No encuentro a nadie que quiere venir» (antecedente negado → «quiera»). En «Leí un libro que explica…» el libro es concreto, así que el indicativo es correcto."
          ),
        ]
      ),
    ],
    [
      fb("Corrige.", "Necesito una app que me ___ a organizarme. (ayudar; el alumno escribió: ayuda)", "ayude", "Una app que aún no tenemos es un antecedente desconocido, así que va en subjuntivo: «ayude», no «ayuda»."),
      fb("Corrige.", "Mi jefa es una persona que ___ escuchar. (saber; el alumno escribió: sepa)", "sabe", "Hablas de tu jefa, una persona real y conocida → indicativo (sabe). Es el error 2: poner subjuntivo donde no hay duda."),
      fb("Corrige.", "No existe ningún método que ___ para todos. (funcionar; el alumno escribió: funciona)", "funcione", "Con un antecedente que no existe («ningún método»), la relativa va en subjuntivo: «funcione», no «funciona»."),
      mc(
        "¿Cuál es correcta?",
        ["Quien quiera participar, que levante la mano.", "Quien quiere participar, que levanta la mano.", "Quien quiera participar, que levanta la mano.", "Quien quiere participar, que levante la mano."],
        0,
        "«Quien» + subjuntivo se refiere a una persona indeterminada («quien quiera») y «que» + subjuntivo expresa una orden («que levante»). Las versiones con «quiere» o «levanta» rompen alguna de las dos reglas."
      ),
      mc(
        "¿Cuál es correcta?",
        ["Hay muchas personas que piensan lo mismo.", "Hay muchas personas que piensen lo mismo.", "No hay ninguna persona que piensan lo mismo.", "Hay pocas personas que pensaran lo mismo mañana."],
        0,
        "Si afirmamos que esas personas existen, la relativa va en indicativo: «piensan». «Que piensen» sería para personas no confirmadas, y «No hay ninguna persona que piensan» niega la existencia y exigiría subjuntivo («piensen»)."
      ),
      toEs("Is there a pharmacy that is open on Sundays?", "¿Hay alguna farmacia que esté abierta los domingos?", "Pregunta sobre la existencia → subjuntivo (esté). «Está» daría por hecho que existe.", ["¿Hay una farmacia que esté abierta los domingos?", "¿Hay alguna farmacia que abra los domingos?"]),
      wo("Cualquier persona que venga será bienvenida.", "Cualquier + relativa en subjuntivo (venga): no sabemos quién vendrá.", "Anyone who comes will be welcome."),
      toEs("En este pueblo hay un médico que atiende por la noche.", "En este pueblo no hay ningún médico que atienda por la noche.", "Al negar, el médico deja de existir → subjuntivo (atienda). Si mantuvieras «atiende», cometerías el error 1.", ["No hay ningún médico en este pueblo que atienda por la noche."], "Cambia a negativa."),
    ]
  ),
  L(
    "subjunctive-adverbial-clauses-2",
    "b2r-contrast-cuando-llega-llegue",
    "Contraste: cuando llega / cuando llegue",
    "Hábito frente a futuro: las conjunciones temporales con indicativo y con subjuntivo.",
    "7 min",
    [
      sec(
        "Lo habitual y lo que todavía no ha pasado",
        [
          "Recuerda la regla: cuando, en cuanto, tan pronto como, hasta que, después de que + indicativo = hábito o pasado (algo real). + subjuntivo = futuro todavía no realizado.",
          "Mira la otra mitad de la frase para decidir: presente de costumbre o pasado → indicativo; futuro, «ir a» o imperativo → subjuntivo. Nunca pongas futuro detrás de estas conjunciones (✗ cuando llegará).",
        ],
        [
          ["Cuando llega a casa, se ducha.", "When he gets home, he showers. (habit)"],
          ["Cuando llegue a casa, se duchará.", "When he gets home, he'll shower. (future)"],
          ["En cuanto terminó, se fue.", "As soon as he finished, he left. (past)"],
        ],
        [
          fb("¿Hábito o futuro?", "En cuanto ___ el sueldo, pagaré el alquiler. (cobrar, yo)", "cobre", "La principal está en futuro (pagaré): todavía no has cobrado → en cuanto + subjuntivo (cobre)."),
          fb("¿Hábito o futuro?", "Siempre llamo a mi madre cuando ___ del trabajo. (salir, yo)", "salgo", "«Siempre llamo» es una costumbre → cuando + indicativo (salgo)."),
        ]
      ),
      sec(
        "Antes de que: siempre subjuntivo",
        "Antes de que es la excepción: siempre lleva subjuntivo, también en hábitos y en pasado, porque lo que introduce todavía no ha ocurrido en relación con la otra acción.",
        [
          ["Siempre me voy antes de que llegue el jefe.", "I always leave before the boss arrives."],
        ],
        [
          mc(
            "«Salgamos antes de que ___ a llover.»",
            ["empiece", "empieza", "empezará", "empezó"],
            0,
            "«Antes de que» siempre exige subjuntivo, también en futuro: «empiece». «Empieza» y «empezará» son indicativo."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "No me iré hasta que me ___ la verdad. (decir, tú)", "digas", "«No me iré» es futuro: hasta que + subjuntivo (digas, de digo)."),
      fb("Completa.", "Esperé hasta que ___ el autobús. (llegar)", "llegó", "«Esperé» es pasado: el autobús llegó de verdad → indicativo (llegó)."),
      fb("Completa.", "Tan pronto como ___ las notas, te aviso. (saber, yo)", "sepa", "Te aviso (presente con valor de futuro): todavía no sabes las notas → subjuntivo irregular: sepa."),
      fb("Completa.", "Después de que los niños ___ la película, siempre hablamos de ella. (ver)", "ven", "Hábito → indicativo (con «después de que» también es frecuente el subjuntivo: vean)."),
      mt(
        "Relaciona cada principio con su final.",
        [
          ["Te llamaré cuando", "llegue al hotel."],
          ["Me llamó cuando", "llegó al hotel."],
          ["Siempre me llama cuando", "llega al hotel."],
          ["Llámame antes de que", "sea demasiado tarde."],
        ],
        "Futuro → subjuntivo; pasado o hábito → indicativo; antes de que → subjuntivo."
      ),
      toEs("As soon as you (tú) know something, tell me.", "En cuanto sepas algo, dímelo.", "Con un mandato en la principal, la acción de en cuanto es futura → subjuntivo (sepas).", ["Tan pronto como sepas algo, dímelo.", "En cuanto sepas algo, avísame."]),
      wo("Cuando sea mayor quiero vivir cerca del mar.", "Ser mayor está en el futuro → cuando + subjuntivo (sea), aunque «quiero» vaya en presente.", "When I'm older I want to live near the sea."),
      toEs("Cuando me jubilaré, viviré cerca del mar.", "Cuando me jubile, viviré cerca del mar.", "Detrás de cuando nunca va el futuro: la acción aún no realizada va en presente de subjuntivo (me jubile).", ["Cuando me jubile, voy a vivir cerca del mar."], "Corrige la frase."),
    ]
  ),
  L(
    "subjunctive-adverbial-clauses-2",
    "b2r-mission-plan-event",
    "Misión real: organizar un evento",
    "Planifica una fiesta sorpresa con conjunciones de propósito, anterioridad, condición y precaución que llevan subjuntivo (para que, antes de que, a menos que, siempre que, con tal de que, en caso de que, no sea que) y con en cuanto referido al futuro.",
    "8 min",
    [
      sec(
        "La fiesta sorpresa",
        [
          "Recuerda la regla: planificar exige muchas conjunciones: para que (propósito), antes de que (anterioridad), a menos que (condición negativa), siempre que y con tal de que (condición), en caso de que (eventualidad) y no sea que (precaución). Todas llevan subjuntivo, salvo siempre que con el sentido de «cada vez que», que lleva indicativo.",
          "¿Por qué todas igual? Un plan habla de lo que todavía no ha pasado: lo que quieres conseguir, lo que puede ocurrir, lo que temes. Ojo con dos parejas: si y por si van con indicativo (si llueve, por si llueve), mientras que a menos que y en caso de que, que dicen casi lo mismo, piden subjuntivo (a menos que llueva, en caso de que llueva).",
        ],
        [
          ["Escondeos antes de que llegue Ana.", "Hide before Ana arrives."],
          ["Apagad las luces para que no sospeche.", "Turn off the lights so she doesn't suspect."],
          ["La haremos en el jardín, a menos que llueva.", "We'll have it in the garden, unless it rains."],
        ],
        [
          fb("Completa el plan.", "Compra el pastel el viernes para que ___ fresco. (estar)", "esté", "Tú compras, el pastel está fresco: sujetos distintos → para que + subjuntivo (esté)."),
          fb("Completa el plan.", "Invitaremos a sus compañeros siempre que ___ guardar el secreto. (saber)", "sepan", "Aquí siempre que significa «con la condición de que» → subjuntivo (sepan). Con indicativo significaría «cada vez que»."),
        ]
      ),
    ],
    [
      fb("Completa el plan.", "No le digas nada a menos que te lo ___ directamente. (preguntar, ella)", "pregunte", "A menos que (= salvo si) expresa una condición negativa y lleva siempre subjuntivo: pregunte."),
      fb("Completa el plan.", "En cuanto ___ el coche, gritad «¡sorpresa!». (oír, vosotros)", "oigáis", "En cuanto + futuro → subjuntivo; oír → oigáis."),
      fb("Completa el plan.", "Te doy mi llave para que ___ antes. (entrar, tú)", "entres", "Sujetos distintos (yo doy, tú entras) → para que + subjuntivo."),
      mc(
        "«I'll lend you my car so you can go to the party.»",
        ["Te presto el coche para que puedas ir a la fiesta.", "Te presto el coche para que puedes ir a la fiesta.", "Te presto el coche para poder ir a la fiesta tú.", "Te presto el coche para que podrás ir a la fiesta."],
        0,
        "Con sujetos distintos (yo presto, tú puedes) se usa «para que» + subjuntivo: «puedas». «Para que puedes» y «para que podrás» usan indicativo, y «para poder» exige el mismo sujeto."
      ),
      ms(
        "¿Qué frases son correctas?",
        ["Sal ahora, no sea que pierdas el tren.", "Iremos con tal de que tú vengas.", "Te ayudo con tal de que me invitas a cenar.", "Avísame en caso de que haya problemas."],
        [0, 1, 3],
        "«No sea que», «con tal de que» y «en caso de que» exigen siempre subjuntivo. Por eso «con tal de que me invitas» es incorrecta: debe ser «me invites»."
      ),
      toEs("Call me in case you (tú) need anything.", "Llámame en caso de que necesites algo.", "En caso de que + subjuntivo (necesites). Con «por si» se usa indicativo: «Llámame por si necesitas algo».", ["Llámame por si necesitas algo."]),
      wo("Hablad bajo para que el bebé no se despierte.", "Vosotros habláis, el bebé se despierta: sujetos distintos → para que + subjuntivo (se despierte).", "Talk quietly so the baby doesn't wake up."),
      toEs("Nota para Marta: «Compra las velas, a menos que ya las tienes.»", "Compra las velas, a menos que ya las tengas.", "A menos que lleva siempre subjuntivo: tengas. Si quieres usar indicativo, cambia la conjunción: «si no las tienes ya».", ["Compra las velas, a no ser que ya las tengas."], "Corrige la nota."),
    ]
  ),
  L(
    "subjunctive-adverbial-clauses-2",
    "b2r-transform-infinitive-que",
    "Transformaciones: para / para que, antes de / antes de que",
    "Cambia el sujeto de la segunda acción y observa cómo para / antes de / sin + infinitivo pasan a para que / antes de que / sin que + subjuntivo.",
    "7 min",
    [
      sec(
        "Mismo sujeto, distinto sujeto",
        [
          "Recuerda la regla: mismo sujeto → preposición + infinitivo (para salir, antes de comer, sin decir). Distinto sujeto → conjunción + subjuntivo (para que salgas, antes de que comas, sin que digas).",
          "¿Por qué? El infinitivo no dice quién hace la acción, así que se entiende que es el sujeto de la oración principal. Si la hace otra persona, necesitas un verbo conjugado que lo diga, y como para que, antes de que y sin que hablan de algo no realizado, ese verbo va en subjuntivo. En pasado, el subjuntivo pasa al imperfecto: sin que nadie me viera.",
        ],
        [
          ["Estudio para aprobar. → Estudio para que mis padres estén orgullosos.", "I study to pass. → I study so my parents are proud."],
          ["Me fui sin despedirme. → Me fui sin que nadie me viera.", "I left without saying goodbye. → I left without anyone seeing me."],
        ],
        [
          fb("Cambia el sujeto (tú).", "Lo repito para entenderlo. → Lo repito para que lo ___.", "entiendas", "Con sujetos distintos (yo repito, tú entiendes) se usa «para que» + subjuntivo: «entiendas»."),
        ]
      ),
    ],
    [
      fb("Cambia el sujeto (ellos).", "Cenamos antes de salir. → Cenamos antes de que ___.", "salgan", "Con sujetos distintos (nosotros cenamos, ellos salen) se usa «antes de que» + subjuntivo: «salgan», de salgo."),
      fb("Vuelve al mismo sujeto (yo).", "Llamo antes de que tú llegues. → Llamo antes de ___.", "llegar", "Yo llamo y yo llego: mismo sujeto → antes de + infinitivo, sin «que»."),
      fb("Cambia el sujeto (nosotros).", "Siempre entra sin hacer ruido. → Siempre entra sin que ___ nada. (oír)", "oigamos", "Él entra, nosotros no oímos: sin que + subjuntivo; oír toma la raíz de oigo: oigamos."),
      fb("Cambia el sujeto (usted).", "Te lo explico para ayudarte. → Se lo explico para que usted ___ decidir. (poder)", "pueda", "Con sujetos distintos se usa «para que» + subjuntivo; con la principal en presente, presente: «pueda»."),
      mc(
        "«She always leaves without me noticing.»",
        ["Siempre se va sin que yo me dé cuenta.", "Siempre se va sin darme cuenta.", "Siempre se va sin que yo me doy cuenta.", "Siempre se va sin que me daré cuenta."],
        0,
        "Con sujetos distintos (ella se va, yo no me doy cuenta) se usa «sin que» + subjuntivo: «me dé cuenta». «Sin darme cuenta» no es posible: el infinitivo exige el mismo sujeto (ella) y «me» remite a yo; «sin darse cuenta» significaría que es ella quien no se da cuenta."
      ),
      toEs("Turn off (tú) the TV before you go to bed.", "Apaga la tele antes de acostarte.", "Mismo sujeto (tú apagas, tú te acuestas) → antes de + infinitivo, aunque en inglés haya «you go».", ["Apaga la televisión antes de acostarte.", "Apaga la tele antes de irte a la cama."]),
      wo("Te dejo mi abrigo para que no pases frío.", "Yo dejo, tú no pasas frío: sujetos distintos → para que + subjuntivo (pases).", "I'll leave you my coat so you don't get cold."),
      toEs("Os lo explico para que no repetir los mismos fallos.", "Os lo explico para que no repitáis los mismos fallos.", "«Para que» nunca va con infinitivo: con otro sujeto (vosotros) necesita subjuntivo, repitáis (e → i). Si fuera el mismo sujeto, sería «para no repetir».", [], "Corrige la frase."),
    ]
  ),
  L(
    "imperfect-subjunctive-sequence-2",
    "b2r-transform-sequence-of-tenses",
    "Transformaciones: la secuencia de tiempos",
    "Pasa frases del presente al pasado: quiere que venga → quería que viniera.",
    "8 min",
    [
      sec(
        "El verbo principal manda",
        [
          "La regla: principal en presente, futuro o imperativo → presente de subjuntivo. Principal en pasado (indefinido, imperfecto, pluscuamperfecto) o en condicional → imperfecto de subjuntivo.",
          "¿Por qué? La subordinada se sitúa en el tiempo del verbo que la rige. Al trasladar la frase al pasado, el disparador (querer, pedir, es importante, no hay nadie que) sigue pidiendo subjuntivo, pero el subjuntivo se desplaza con él. Si solo cambias un verbo, la frase queda con dos relojes distintos.",
        ],
        [
          ["Quiero que vengas. → Quería que vinieras.", "I want you to come. → I wanted you to come. (deseo)"],
          ["Es importante que lo sepa. → Era importante que lo supiera.", "It's important that he knows. → It was important that he knew. (valoración)"],
          ["Busco a alguien que hable ruso. → Buscaba a alguien que hablara ruso.", "I'm looking for someone who speaks Russian. → I was looking for... (antecedente desconocido)"],
        ],
        [
          fb("Pasa al pasado.", "Me pide que le ayude. → Me pidió que le ___.", "ayudara", "Con «pidió» en pasado, el subjuntivo pasa a imperfecto: ayudaron → ayudara. «Ayude» solo concuerda con «pide»."),
        ]
      ),
      sec(
        "Formación en tres pasos",
        "Ellos del indefinido (tuvieron) → quita -ron (tuvie-) → añade -ra/-se (tuviera/tuviese). Cualquier irregularidad del indefinido se conserva (dijeron → dijera, durmieron → durmiera), y la forma nosotros lleva tilde (tuviéramos).",
        [
          ["dijeron → dijera · fueron → fuera · pudieron → pudiera", "said · was/went · could"],
        ],
        [
          fb("Forma el imperfecto de subjuntivo (yo).", "pedir → pidieron → que yo ___", "pidiera", "El cambio e → i del indefinido (pidieron) pasa al imperfecto de subjuntivo: se quita -ron y se añade -ra → pidiera, no «pediera»."),
        ]
      ),
    ],
    [
      toEs("Dudo que tenga razón.", "Dudaba que tuviera razón.", "Dudaba (duda en pasado) → imperfecto de subjuntivo; de «tuvieron» sale «tuviera».", ["Dudé que tuviera razón.", "Dudaba que tuviese razón."], "Cambia la frase al pasado (imperfecto)."),
      toEs("Me alegro de que estés aquí.", "Me alegré de que estuvieras allí.", "Me alegré (emoción en pasado) → imperfecto de subjuntivo; de «estuvieron» sale «estuvieras». En pasado, aquí suele pasar a allí.", ["Me alegré de que estuvieras aquí.", "Me alegraba de que estuvieras allí.", "Me alegré de que estuvieses allí."], "Cambia la frase al pasado (indefinido)."),
      fb("Expresa el deseo como poco probable.", "Ojalá que vengan. → Ojalá que ___ (aunque es poco probable).", "vinieran", "Ojalá + imperfecto de subjuntivo: deseo improbable o irreal (ojalá no tiene tiempo propio; el tiempo del subjuntivo marca la probabilidad)."),
      toEs("No hay nadie que lo sepa.", "No había nadie que lo supiera.", "No había nadie (antecedente inexistente en pasado) → imperfecto de subjuntivo; de «supieron» sale «supiera».", ["No había nadie que lo supiese."], "Cambia la frase al pasado (imperfecto)."),
      toEs("Mis padres querían que yo estudie Derecho.", "Mis padres querían que yo estudiara Derecho.", "Querían está en pasado: la subordinada va en imperfecto de subjuntivo (estudiara). «Estudie» mezcla un principal pasado con un subjuntivo presente.", ["Mis padres querían que estudiara Derecho.", "Mis padres querían que yo estudiase Derecho."], "Corrige la frase."),
      mc(
        "«Mi madre me dice que me ponga el abrigo.» → en pasado:",
        ["Mi madre me dijo que me pusiera el abrigo.", "Mi madre me dijo que me puse el abrigo.", "Mi madre me dijo que me ponía el abrigo.", "Mi madre me dijo que me pondría el abrigo ahora."],
        0,
        "Una orden contada en pasado (me dijo) pide imperfecto de subjuntivo: que me pusiera. «Me puse» y «me ponía» son indicativo y cuentan lo que hice, no lo que me ordenó, y «pondría» tampoco expresa una orden. Si la orden sigue vigente, también se acepta «me dijo que me ponga el abrigo», frecuente en el habla cotidiana."
      ),
      mt(
        "Relaciona cada infinitivo con su imperfecto de subjuntivo (él).",
        [
          ["ir", "fuera"],
          ["poder", "pudiera"],
          ["leer", "leyera"],
          ["conducir", "condujera"],
        ],
        "Todos derivan de la tercera persona plural del indefinido: fueron, pudieron, leyeron, condujeron → quita -ron y añade -ra."
      ),
      wo("Me sorprendió que nadie me llamara ese día.", "Sorprendió (emoción en pasado) → imperfecto de subjuntivo: llamara.", "It surprised me that nobody called me that day."),
    ]
  ),
  L(
    "imperfect-subjunctive-sequence-2",
    "b2r-error-hunt-imperfect-subjunctive",
    "Caza de errores: el imperfecto de subjuntivo",
    "Formas inventadas, tildes olvidadas y secuencias rotas — corrige los errores más frecuentes.",
    "7 min",
    [
      sec(
        "Formas inventadas",
        [
          "La regla: el imperfecto de subjuntivo sale de la forma ellos del indefinido, no del infinitivo: tuvieron → tuviera, hicieron → hiciera. Por eso ✗ tenera o ✗ hacera no existen: toda irregularidad del indefinido (tuv-, hic-, dij-, pus-) pasa al subjuntivo.",
          "Dos trampas más: la forma nosotros siempre lleva tilde (tuviéramos, fuéramos), y los verbos en -ducir y decir/traer no añaden i (condujeron → condujera, dijeron → dijera, no ✗ dijiera).",
        ],
        [
          ["✗ Si yo sabera la respuesta… → ✓ Si yo supiera la respuesta…", "If I knew the answer… (supieron → supiera)"],
          ["✗ Queríais que fueramos. → ✓ Queríais que fuéramos.", "You wanted us to go. (tilde en nosotros)"],
          ["✗ Me pidió que se lo dijiera. → ✓ Me pidió que se lo dijera.", "He asked me to tell him. (dijeron → dijera)"],
        ],
        [
          fb("Corrige la forma.", "Me pidió que ___ más despacio. (conducir; el alumno escribió: conduciera)", "condujera", "«Conducir» hace el indefinido «condujeron», así que el imperfecto de subjuntivo es «condujera», no «conduciera»."),
        ]
      ),
      sec(
        "Secuencias rotas",
        "Principal en pasado o condicional + subjuntivo presente suele ser un error: el subjuntivo debe ir en imperfecto. La excepción es una petición que sigue vigente ahora (Me pidió que lo llame mañana), que se oye mucho en el habla, pero en caso de duda la secuencia segura es la del imperfecto.",
        [
          ["✗ Quería que me llames. → ✓ Quería que me llamaras.", "I wanted you to call me."],
          ["✗ Sería mejor que te quedes. → ✓ Sería mejor que te quedaras.", "It would be better if you stayed. (condicional → imperfecto)"],
        ],
        [
          mc(
            "Corrige: «Era necesario que todos estén presentes.»",
            ["Era necesario que todos estuvieran presentes.", "Era necesario que todos estaban presentes.", "Es necesario que todos estuvieran presentes.", "No hay error."],
            0,
            "Con «era» en pasado, el subjuntivo va en imperfecto: «estuvieran». «Estaban» es indicativo, y «Es necesario que… estuvieran» mezcla presente con imperfecto."
          ),
        ]
      ),
    ],
    [
      fb("Corrige la forma.", "Si ___ más tiempo, viajaría más. (tener, yo; el alumno escribió: tenería)", "tuviera", "El imperfecto de subjuntivo sale de «tuvieron»: «tuviera». «Tenería» no existe, y tras si hipotético nunca va una forma de condicional."),
      fb("Corrige la forma.", "Nos pidieron que ___ la puerta. (cerrar, nosotros; el alumno escribió: cerraramos)", "cerráramos", "La forma de «nosotros» del imperfecto de subjuntivo siempre lleva tilde: «cerráramos»."),
      fb("Corrige la forma.", "Esperaba que ___ a la fiesta. (ir, tú; el alumno escribió: vayas)", "fueras", "Con «esperaba» en pasado, el subjuntivo va en imperfecto: «fueras», no «vayas»."),
      ms(
        "¿Qué formas son correctas?",
        ["dijera", "trajera", "poniera", "anduviera"],
        [0, 1, 3],
        "El imperfecto de subjuntivo sale del indefinido: «dijeron» → «dijera», «trajeron» → «trajera», «anduvieron» → «anduviera». «Poniera» es incorrecta: de «pusieron» sale «pusiera»."
      ),
      mc(
        "¿Cuál transmite en pasado el consejo «No te preocupes»?",
        ["Le dije que no se preocupara.", "Le dije que no se preocupará.", "Le dije que no se preocupaba.", "Le digo que no se preocupara."],
        0,
        "Un consejo u orden en estilo indirecto en pasado va en imperfecto de subjuntivo: «que no se preocupara». «Se preocupará» es futuro de indicativo; «no se preocupaba» informaría de un hecho (que no estaba preocupado), no de un consejo; y «Le digo que no se preocupara» mezcla presente e imperfecto."
      ),
      toEs("Te pido que traigas el postre.", "Te pedí que trajeras el postre.", "Al pasar pido → pedí, la subordinada pasa al imperfecto de subjuntivo: trajeron → trajeras (sin i añadida: no «trajieras»).", ["Te pedía que trajeras el postre.", "Te pedí que trajeses el postre."], "Cambia la frase al pasado (indefinido)."),
      toEs("Es una pena que no podamos ir.", "Fue una pena que no pudiéramos ir.", "Fue (valoración en pasado) → imperfecto de subjuntivo: pudieron → pudiéramos, con tilde en nosotros.", ["Era una pena que no pudiéramos ir.", "Fue una lástima que no pudiéramos ir.", "Fue una pena que no pudiésemos ir."], "Cambia «es» por «fue»."),
      toEs("I wish they had more time.", "Ojalá tuvieran más tiempo.", "Ojalá + imperfecto de subjuntivo para un deseo irreal en el presente: tuvieran, de tuvieron.", ["Ojalá que tuvieran más tiempo.", "Ojalá tuviesen más tiempo."]),
      wo("Nadie esperaba que el equipo ganara la final.", "Esperaba (pasado) → imperfecto de subjuntivo: ganara.", "Nobody expected the team to win the final."),
    ]
  ),
  L(
    "imperfect-subjunctive-sequence-2",
    "b2r-dialogue-parents-wanted",
    "Laboratorio de diálogo: lo que nuestros padres querían",
    "Dos amigos recuerdan las expectativas de sus padres — y lo que ellos mismos querían.",
    "7 min",
    [
      sec(
        "Recuerda la regla",
        [
          "Recuerda la regla: al recordar lo que otros querían, esperaban o no soportaban, el verbo principal va en pasado (querían que, esperaban que, les molestaba que, no dejaban que) y la subordinada en imperfecto de subjuntivo: Querían que estudiara Derecho.",
          "Cuando la persona que desea y la que actúa es la misma, va infinitivo: Yo quería ser actriz (no «quería que fuera»). En la conversación, fíjate en quién quiere qué.",
        ],
        [
          ["—Mis padres querían que estudiara Derecho.", "My parents wanted me to study law. (ellos quieren, yo estudio)"],
          ["—Pues yo quería ser actriz.", "Well, I wanted to be an actress. (yo quiero, yo soy → infinitivo)"],
          ["—A mi madre le molestaba que llegara tarde los sábados.", "It bothered my mother when I came home late on Saturdays."],
        ],
        [
          fb("Completa el recuerdo.", "Mi padre no dejaba que ___ la tele entre semana. (ver, nosotros)", "viéramos", "No dejaba que (permiso en pasado) + otra persona → imperfecto de subjuntivo: vieron → viéramos, con tilde."),
        ]
      ),
      sec(
        "La conversación",
        "Lucía: —¿Tus padres eran muy estrictos? Andrés: —Bastante. Esperaban que me hiciera cargo de la tienda de mi abuelo. Lucía: —¿Y tú qué querías? Andrés: —Yo quería estudiar música, pero no les parecía bien que me dedicara a algo tan inestable. Lucía: —A los míos les preocupaba que viajara sola.",
        [],
        [
          mc(
            "Lucía pregunta: «¿Y tú qué querías?». ¿Qué responde Andrés?",
            ["Yo quería estudiar música.", "Yo quería que estudiara música.", "Yo quiero que estudie música.", "Yo quería que estudio música."],
            0,
            "Andrés habla de su propio deseo: mismo sujeto → infinitivo (quería estudiar). «Quería que estudiara» significaría que quería que OTRA persona estudiara."
          ),
          fb("Completa lo que cuenta Andrés.", "A mis padres no les parecía bien que me ___ a la música. (dedicar)", "dedicara", "No les parecía bien (valoración en pasado) + otra persona → imperfecto de subjuntivo: dedicaron → me dedicara."),
        ]
      ),
    ],
    [
      fb("Completa.", "Yo quería que me ___ más libertad. (dar, ellos)", "dieran", "Quería + otra persona → imperfecto de subjuntivo: dieron → dieran."),
      fb("Completa.", "Era normal que ___ con ellos por todo. (discutir, yo)", "discutiera", "Era normal (valoración en pasado) → imperfecto de subjuntivo: discutiera."),
      fb("Completa el recuerdo.", "Mis abuelos preferían que la familia ___ junta los domingos. (comer)", "comiera", "Preferían (deseo en pasado) → imperfecto de subjuntivo: comieron → comiera; la familia es singular."),
      fb("Completa.", "Me daba rabia que mis hermanos ___ salir y yo no. (poder)", "pudieran", "Me daba rabia (emoción en pasado) → imperfecto de subjuntivo: pudieron → pudieran."),
      mc(
        "Andrés te cuenta: «Mis padres querían que fuera médico». ¿Qué le respondes con naturalidad?",
        ["¿Y a ti te habría gustado serlo?", "¿Y tú querías que fueras médico?", "¿Y tú quieres que seas médico?", "¿Y ellos querían ser médicos?"],
        0,
        "La respuesta natural pregunta por su propio deseo. «¿Querías que fueras?» es imposible: con el mismo sujeto se usa infinitivo (¿querías serlo?). La última cambia el sentido: serían ellos los que querían ser médicos."
      ),
      mt(
        "Relaciona cada expectativa con su traducción.",
        [
          ["Querían que fuera médico.", "They wanted me to be a doctor."],
          ["Esperaban que me casara joven.", "They expected me to marry young."],
          ["Les preocupaba que viajara solo.", "They worried about me traveling alone."],
          ["Me pedían que ayudara en casa.", "They asked me to help at home."],
        ],
        "En las cuatro, el verbo principal en pasado (querían, esperaban, preocupaba, pedían) pide imperfecto de subjuntivo."
      ),
      mc(
        "«My parents didn't let me go out at night.»",
        ["Mis padres no me dejaban que saliera de noche.", "Mis padres no me dejaban que salgo de noche.", "Mis padres no me dejaban que salga de noche ayer.", "Mis padres no dejaban salgo de noche."],
        0,
        "«Dejar que» exige subjuntivo y, en pasado, imperfecto: «saliera» (también «no me dejaban salir»). «Salgo» es indicativo y «salga» no concuerda con el pasado."
      ),
      toEs("—Los míos querían que me quedo en el pueblo.", "—Los míos querían que me quedara en el pueblo.", "Querían + otra persona → imperfecto de subjuntivo: me quedara. «Me quedo» es indicativo presente.", ["—Los míos querían que me quedase en el pueblo.", "Los míos querían que me quedara en el pueblo."], "Corrige la frase de Lucía."),
      toEs("Mis padres quieren que vuelva a casa por Navidad.", "Mis padres querían que volviera a casa por Navidad.", "Al contarlo como recuerdo (querían), la subordinada pasa a imperfecto de subjuntivo: volvieron → volviera.", ["Mis padres querían que volviese a casa por Navidad."], "Cambia la frase al pasado (imperfecto)."),
      { type: "speak", prompt: "Lucía te pregunta: «¿Y qué querían tus padres que estudiaras?». Responde en voz alta con «Querían que…» (por ejemplo: Medicina).", text: "Querían que estudiara Medicina.", explanation: "Querían (pasado) + otra persona (yo) → imperfecto de subjuntivo: estudiara." },
      toEs("I would like my children to be happy.", "Me gustaría que mis hijos fueran felices.", "Tras «me gustaría que», la subordinada va en imperfecto de subjuntivo: «fueran».", ["Me gustaría que mis hijos fuesen felices.", "Quisiera que mis hijos fueran felices."]),
      wo("Nunca quisieron que acabara siendo actriz.", "Nunca quisieron (pasado) → imperfecto de subjuntivo: acabara.", "They never wanted me to end up being an actress."),
    ]
  ),
  L(
    "hypothetical-si-clauses-2",
    "b2r-mission-hypothetical-interview",
    "Misión real: la entrevista hipotética",
    "Una revista te entrevista con preguntas imposibles. Responde con si + imperfecto de subjuntivo + condicional.",
    "7 min",
    [
      sec(
        "Recuerda la regla",
        [
          "Recuerda la regla: una situación imposible o imaginaria va con si + imperfecto de subjuntivo, y lo que harías en ella, en condicional. La periodista te pregunta con tú (si pudieras..., ¿qué harías?) y tú contestas con yo (si pudiera..., haría).",
          "En una entrevista no hace falta repetir siempre la condición: basta con el condicional (—¿Con quién cenarías? —Cenaría con Frida Kahlo).",
        ],
        [
          ["—Si pudieras cenar con cualquier persona de la historia, ¿con quién cenarías?", "If you could have dinner with anyone in history, who would it be? (pudieras / cenarías)"],
          ["—Cenaría con Frida Kahlo.", "I'd have dinner with Frida Kahlo. (solo el condicional basta)"],
        ],
        [
          fb("Responde.", "Si ___ un superpoder, sería volar. (tener, yo)", "tuviera", "La condición imaginada va en imperfecto de subjuntivo: tuviera. «Tendría» no puede ir tras si."),
          fb("Responde.", "Si viviera en otra época, ___ en el siglo XIX. (vivir, yo)", "viviría", "La consecuencia imaginada va en condicional: viviría."),
        ]
      ),
      sec(
        "La entrevista",
        "Periodista: —Imagina que mañana te despiertas con otra profesión. ¿Cuál te gustaría? —Y si pudieras cambiar una sola cosa del mundo, ¿qué cambiarías? —Por último: si tuvieras que vivir en una película, ¿en cuál vivirías?",
        [],
        [
          mc(
            "La periodista pregunta: «Si pudieras cambiar una sola cosa del mundo, ¿qué cambiarías?». ¿Qué respondes?",
            ["Acabaría con el hambre.", "Acabo con el hambre.", "Acabara con el hambre.", "Acabaré con el hambre si podría."],
            0,
            "A una pregunta hipotética se responde con condicional: acabaría. «Acabo» y «acabaré» son reales, «acabara» es subjuntivo sin si, y «si podría» lleva condicional tras si."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "Si ___ presidente, lo primero que haría sería mejorar la educación. (ser, yo)", "fuera", "Si + imperfecto de subjuntivo de ser: fuera."),
      fb("Completa.", "Si no tuvieras que trabajar, ¿qué ___? (hacer, tú)", "harías", "La pregunta hipotética va en condicional: hacer → harías (raíz irregular har-)."),
      fb("Completa.", "Si ___ hablar con los animales, hablaría con mi gato. (saber, yo)", "supiera", "Si + imperfecto de subjuntivo: supieron → supiera."),
      mt(
        "Relaciona cada condición con una consecuencia lógica.",
        [
          ["Si me tocara la lotería,", "dejaría de trabajar."],
          ["Si fuera invisible,", "entraría en los museos de noche."],
          ["Si hablara diez idiomas,", "trabajaría en la ONU."],
          ["Si viviera en una isla,", "iría a todas partes en barco."],
        ],
        "Si + imperfecto de subjuntivo, + condicional: cada condición imaginada lleva una consecuencia imaginada."
      ),
      ms(
        "¿Qué frases son correctas?",
        ["Si pudiera, viajaría por el mundo.", "Si tendría dinero, compraría una casa.", "Viviría en el campo si no tuviera que trabajar en la ciudad.", "Si fuese más joven, aprendería a surfear."],
        [0, 2, 3],
        "Tras «si» condicional va imperfecto de subjuntivo («pudiera», «tuviera», «fuese») y en la consecuencia condicional. «Si tendría dinero» es incorrecta: nunca va condicional después de este «si»."
      ),
      toEs("Si pudieras elegir otra profesión, ¿cuál elegirías?", "Si pudiera elegir otra profesión, ¿cuál elegiría?", "Con usted, la pregunta pasa a tercera persona en las dos mitades: pudiera (imperfecto de subjuntivo) y elegiría (condicional).", ["Si usted pudiera elegir otra profesión, ¿cuál elegiría?", "Si pudiera elegir otra profesión, ¿cuál escogería?"], "Cambia la pregunta a usted."),
      toEs("Si viviría en una película, viviría en una de Almodóvar.", "Si viviera en una película, viviría en una de Almodóvar.", "Tus notas repiten el condicional. Tras si va imperfecto de subjuntivo (viviera); el condicional solo va en la consecuencia.", ["Si viviese en una película, viviría en una de Almodóvar."], "Corrige la respuesta de tus notas."),
      { type: "speak", prompt: "La periodista pregunta: «Si mañana te despertaras con otra profesión, ¿cuál te gustaría?». Responde en voz alta (por ejemplo: ser chef).", text: "Me gustaría ser chef.", explanation: "Respondes a la hipótesis con condicional: me gustaría + infinitivo, porque el sujeto (yo) es el mismo." },
      toEs("If I were you, I'd accept the offer.", "Si yo fuera tú, aceptaría la oferta.", "Si + imperfecto de subjuntivo (fuera) + condicional (aceptaría): la fórmula clásica para dar consejos.", ["Si fuera tú, aceptaría la oferta.", "Si yo fuese tú, aceptaría la oferta."]),
      wo("¿Qué cambiarías de tu vida si pudieras empezar de nuevo?", "Condicional (cambiarías) + si + imperfecto de subjuntivo (pudieras).", "What would you change about your life if you could start over?"),
    ]
  ),
  L(
    "hypothetical-si-clauses-2",
    "b2r-contrast-si-tengo-tuviera",
    "Contraste: si tengo / si tuviera",
    "Posible frente a improbable o irreal: la misma condición con dos grados de realidad.",
    "7 min",
    [
      sec(
        "Dos grados de realidad",
        [
          "La regla: si + presente de indicativo = condición posible y real (quizá pase): la otra parte va en presente, futuro o imperativo. Si + imperfecto de subjuntivo = condición improbable o contraria a la realidad actual: la otra parte va en condicional.",
          "Las dos mitades se arrastran: si cambias una, cambia la otra. Si tengo → te ayudo / te ayudaré; si tuviera → te ayudaría. Mezclar (✗ si tuviera, te ayudo) suena incoherente.",
        ],
        [
          ["Si tengo tiempo, te ayudo.", "If I have time, I'll help you. (posible)"],
          ["Si tuviera tiempo, te ayudaría.", "If I had time, I'd help you. (pero no lo tengo)"],
          ["Si tienes dudas, pregúntame.", "If you have questions, ask me. (real + imperativo)"],
        ],
        [
          mc(
            "Sabes que mañana no puedes ir. ¿Qué dices?",
            ["Si pudiera, iría.", "Si puedo, iré.", "Si podré, iría.", "Si pueda, iré."],
            0,
            "Para algo contrario a la realidad se usa «si» + imperfecto de subjuntivo y condicional: «Si pudiera, iría». «Si puedo, iré» sería una posibilidad real, y «si podré» o «si pueda» no se usan en una condición con «si»."
          ),
        ]
      ),
      sec(
        "Como si",
        "Como si (as if) compara con algo irreal, así que siempre lleva imperfecto de subjuntivo (o pluscuamperfecto para algo anterior), con cualquier tiempo en la principal: Habla como si fuera el jefe.",
        [
          ["Me mira como si no me conociera.", "He looks at me as if he didn't know me."],
        ],
        [
          fb("Completa.", "Gasta dinero como si ___ millonario. (ser)", "fuera", "Como si + imperfecto de subjuntivo: fuera. No es millonario: por eso la forma irreal."),
        ]
      ),
    ],
    [
      fb("¿Real o irreal?", "Si ___ mañana, iremos al cine. (llover)", "llueve", "Iremos (futuro) indica condición posible → si + presente de indicativo: llueve."),
      fb("¿Real o irreal?", "Si no ___ tanto, iríamos a la playa. (llover)", "lloviera", "Iríamos (condicional) y está lloviendo: contrario a la realidad → si + imperfecto de subjuntivo, lloviera."),
      fb("¿Real o irreal?", "Si ___ el tren de las ocho, llegarás a tiempo. (coger, tú)", "coges", "Llegarás (futuro): posible → si + presente de indicativo, coges."),
      fb("Completa.", "Nos trata como si ___ niños. (ser, nosotros)", "fuéramos", "Como si + imperfecto de subjuntivo: fuéramos, con tilde."),
      toEs("Si me llaman de la empresa, acepto el trabajo.", "Si me llamaran de la empresa, aceptaría el trabajo.", "Al presentar la llamada como improbable, cambian las dos mitades: llamaran (imperfecto de subjuntivo) y aceptaría (condicional).", ["Si me llamasen de la empresa, aceptaría el trabajo.", "Aceptaría el trabajo si me llamaran de la empresa."], "Cambia la condición real por una hipotética."),
      toEs("Si tuviera hambre, hay fruta en la cocina.", "Si tienes hambre, hay fruta en la cocina.", "La oferta es real (hay fruta), así que la condición va en presente de indicativo: si tienes. «Si tuviera» exigiría condicional en la otra mitad.", [], "Corrige la frase."),
      mt(
        "Relaciona cada frase con su significado.",
        [
          ["Si estudio, apruebo.", "Real: it depends on me."],
          ["Si estudiara, aprobaría.", "Unlikely: I'm not studying."],
          ["Actúa como si supiera.", "He acts as though he knew."],
          ["Si sabes algo, dímelo.", "Possible: you might know."],
        ],
        "El tiempo de la condición marca el grado de realidad: presente = real, imperfecto de subjuntivo = improbable o irreal."
      ),
      toEs("He talks as if he knew everything.", "Habla como si lo supiera todo.", "Como si + imperfecto de subjuntivo: supiera.", ["Habla como si supiera todo.", "Habla como si lo supiese todo."]),
      wo("Si me dieran el trabajo, me mudaría a Barcelona.", "Lo ve improbable → si + imperfecto de subjuntivo (dieran) + condicional (mudaría).", "If they gave me the job, I'd move to Barcelona."),
    ]
  ),
  L(
    "hypothetical-si-clauses-2",
    "b2r-error-hunt-si-clauses",
    "Caza de errores: las condicionales hipotéticas",
    "«Si tendría», «si sería», «como si es» — los errores más frecuentes en las hipótesis con si + imperfecto de subjuntivo, corregidos.",
    "7 min",
    [
      sec(
        "La regla de oro",
        [
          "La regla: nunca condicional después de si en una condición. ✗ Si tendría → ✓ Si tuviera. ✗ Si sería → ✓ Si fuera. El condicional pertenece a la consecuencia (la otra mitad de la frase).",
          "¿Por qué se cuela? En inglés coloquial se oye «if I would have», y en algunas zonas de España y América se dice «si tendría» en el habla popular, pero la norma culta lo rechaza. Igual con como si: siempre imperfecto (o pluscuamperfecto) de subjuntivo, nunca indicativo.",
        ],
        [
          ["✗ Si sabría nadar, iría contigo. → ✓ Si supiera nadar, iría contigo.", "If I could swim, I'd go with you."],
          ["✗ Actúa como si es el dueño. → ✓ Actúa como si fuera el dueño.", "He acts as if he were the owner."],
          ["✗ Si tuviera tiempo, te ayudo. → ✓ Si tuviera tiempo, te ayudaría.", "If I had time, I'd help you. (consecuencia en condicional)"],
        ],
        [
          fb("Corrige la forma.", "Si ___ más cerca, te visitaría más. (vivir, yo; el alumno escribió: viviría)", "viviera", "Tras «si» condicional nunca va condicional: «si viviera», no «si viviría»."),
        ]
      ),
    ],
    [
      fb("Corrige la forma.", "Si yo ___ tú, no lo haría. (ser; el alumno escribió: sería)", "fuera", "Tras «si» condicional nunca va condicional: «si yo fuera tú», no «si yo sería»."),
      fb("Corrige la forma.", "Si tuviera coche, te ___ a casa. (llevar; el alumno escribió: llevara)", "llevaría", "Consecuencia → condicional (llevara en la principal es literario o regional; en el habla corriente se oye el imperfecto «te llevaba», pero la norma es el condicional)."),
      fb("Corrige la forma.", "Me habla como si ___ tonto. (ser, yo; el alumno escribió: soy)", "fuera", "Como si compara con algo irreal: imperfecto de subjuntivo, fuera. Nunca indicativo."),
      ms(
        "¿Qué frases tienen un error?",
        ["Si pudiera, te ayudaría.", "Si habría sabido, no habría venido.", "Si fueras más paciente, entenderías.", "Si me llamas, te contesto."],
        [1],
        "El error está en «Si habría sabido…»: tras el «si» condicional nunca va condicional; lo correcto es «Si hubiera sabido». Las otras tres frases son correctas."
      ),
      mc(
        "¿Cuál es correcta?",
        ["Si tuviéramos tiempo, cocinaríamos más.", "Si tuvieramos tiempo, cocinaríamos más.", "Si tendríamos tiempo, cocinaríamos más.", "Si tuviéramos tiempo, cocinaremos más."],
        0,
        "Tras «si» va imperfecto de subjuntivo con tilde en «nosotros» («tuviéramos») y en la consecuencia condicional. «Tuvieramos» no lleva tilde, «tendríamos» es condicional y «cocinaremos» es futuro."
      ),
      toEs("Si puedo, te acompaño al médico.", "Si pudiera, te acompañaría al médico.", "Para convertirlo en hipótesis cambian las dos mitades: pudiera (imperfecto de subjuntivo) tras si y acompañaría (condicional) en la consecuencia.", ["Si pudiese, te acompañaría al médico.", "Te acompañaría al médico si pudiera."], "Cambia la condición real por una hipotética."),
      toEs("Se comportaba como si era el jefe.", "Se comportaba como si fuera el jefe.", "Tras como si va siempre imperfecto de subjuntivo (fuera), también cuando el verbo principal está en pasado. «Era» es indicativo: es el error más frecuente.", ["Se comportaba como si fuese el jefe."], "Corrige la frase."),
      toEs("If it weren't so expensive, I'd buy it.", "Si no fuera tan caro, lo compraría.", "Si + imperfecto de subjuntivo (fuera) + condicional con pronombre (lo compraría).", ["Si no fuese tan caro, lo compraría.", "Lo compraría si no fuera tan caro."]),
      wo("No lo haría ni aunque me pagaran un millón.", "Ni aunque + imperfecto de subjuntivo = ni siquiera si: una concesión hipotética, como si + imperfecto de subjuntivo.", "I wouldn't do it even if they paid me a million."),
    ]
  ),
  L(
    "conditional-perfect-pluperfect-subjunctive-mastery-check",
    "b2r-dialogue-regrets",
    "Laboratorio de diálogo: arrepentimientos",
    "Dos amigos repasan decisiones del pasado: si hubiera…, habría…; ojalá hubiera…",
    "8 min",
    [
      sec(
        "Mirando atrás",
        [
          "Recuerda la regla: para hablar de una decisión que ya no tiene arreglo, la condición va en pluscuamperfecto de subjuntivo (si hubiera estudiado) y la consecuencia en condicional compuesto (no habrías conocido). Si la consecuencia llega hasta hoy, va en condicional simple (ahora sería). Ojalá + hubiera + participio es el lamento.",
          "En una conversación real, estas frases sirven para lamentarse, reprochar con suavidad (si me lo hubieras dicho…) o consolar (si no te hubieras ido, no la habrías conocido). Fíjate en cómo responde cada amigo.",
        ],
        [
          ["—Si hubiera estudiado Medicina, ahora sería médico.", "If I had studied medicine, I'd be a doctor now. (mixed)"],
          ["—Y si no te hubieras ido a Londres, no habrías conocido a tu mujer.", "And if you hadn't gone to London, you wouldn't have met your wife."],
          ["—Ojalá hubiera aprendido a tocar el piano de niño.", "I wish I had learned to play the piano as a child."],
        ],
        [
          fb("Completa.", "Si ___ el despertador, no habría llegado tarde. (oír, yo; pluscuamperfecto de subjuntivo)", "hubiera oído", "Hubiera + participio."),
          fb("Completa.", "Si hubieras venido, ___ muy bien. (pasarlo, tú; condicional perfecto)", "lo habrías pasado", "Condicional perfecto con el pronombre delante: lo habrías pasado (en América también «la habrías pasado»)."),
        ]
      ),
    ],
    [
      fb("Completa.", "Ojalá ___ más tiempo con mis abuelos. (pasar, yo; pluscuamperfecto de subjuntivo)", "hubiera pasado", "Los abuelos ya no están o el tiempo ya pasó: ojalá + pluscuamperfecto de subjuntivo (hubiera pasado, o hubiese pasado) expresa arrepentimiento."),
      fb("Completa.", "Yo en tu lugar no ___ esa decisión. (tomar; condicional perfecto)", "habría tomado", "«Yo en tu lugar» equivale a una condición (si yo hubiera estado en tu lugar), así que la decisión imaginada en el pasado va en condicional compuesto: habría tomado."),
      fb("Completa.", "Si me lo ___ antes, te habría ayudado. (decir, tú)", "hubieras dicho", "Tras si, el pluscuamperfecto de subjuntivo (hubieras dicho, participio irregular de decir). «Habrías dicho» no va nunca detrás de si."),
      mt(
        "Relaciona cada arrepentimiento con su consecuencia.",
        [
          ["Si hubiera ahorrado,", "habría podido comprar la casa."],
          ["Si no hubiera fumado,", "no habría tenido problemas de salud."],
          ["Si hubiera aprendido inglés,", "habría conseguido ese trabajo."],
          ["Si me hubiera disculpado,", "seguiríamos siendo amigos."],
        ],
        "La última es mixta: pasado → consecuencia presente (condicional simple)."
      ),
      mc(
        "«I wouldn't have said anything.»",
        ["No habría dicho nada.", "No habrá dicho nada.", "No habría decido nada.", "No he dicho nada."],
        0,
        "«No habría dicho nada» es condicional perfecto: una acción hipotética en el pasado. «Habrá dicho» es futuro perfecto (probabilidad), «decido» no es el participio de «decir» y «he dicho» es un hecho real."
      ),
      toEs("Salimos tarde de casa y perdimos el avión.", "Si hubiéramos salido antes, no habríamos perdido el avión.", "El reproche invierte los hechos: salimos tarde → si hubiéramos salido antes; perdimos el avión → no habríamos perdido. Pluscuamperfecto de subjuntivo tras si y condicional compuesto en la consecuencia.", ["Si hubiésemos salido antes, no habríamos perdido el avión.", "Si hubiéramos salido antes, no hubiéramos perdido el avión.", "Si hubiéramos salido más temprano, no habríamos perdido el avión.", "Si hubiéramos salido antes de casa, no habríamos perdido el avión."], "Transforma los hechos en una frase con si: imagina que salisteis antes."),
      wo("Ojalá me hubieras avisado de que venías.", "Ojalá + pluscuamperfecto de subjuntivo.", "I wish you had let me know you were coming."),
    ]
  ),
  L(
    "conditional-perfect-pluperfect-subjunctive-mastery-check",
    "b2r-chain-alternative-history",
    "Cadena: historia alternativa",
    "¿Y si las cosas hubieran sido distintas? Encadena consecuencias en el pasado y en el presente.",
    "7 min",
    [
      sec(
        "Una cadena de «si»",
        [
          "Recuerda la regla: cada eslabón tiene su propio tiempo. Si la consecuencia es pasada, va en condicional compuesto (no habría conocido a Marta); si llega hasta hoy, en condicional simple (ahora no hablaría español). Cuando una consecuencia pasa a ser la condición del eslabón siguiente, cambia de forma: no habría conocido → si no hubiera conocido.",
          "El truco para no perderte: pregúntate en cada frase «¿esto ya pasó o es la situación de hoy?». Palabras como hoy, ahora o todavía señalan el condicional simple.",
        ],
        [
          ["Si no hubiera perdido el tren, no habría conocido a Marta.", "If I hadn't missed the train, I wouldn't have met Marta."],
          ["Si no hubiera conocido a Marta, no me habría mudado a Chile.", "If I hadn't met Marta, I wouldn't have moved to Chile."],
          ["Si no me hubiera mudado a Chile, ahora no hablaría español.", "If I hadn't moved to Chile, I wouldn't speak Spanish now."],
        ],
        [
          fb("Continúa la cadena.", "Si no hablara español, no ___ en esta empresa. (trabajar, yo; ahora)", "trabajaría", "Hipótesis sobre el presente (si + imperfecto de subjuntivo): consecuencia presente → condicional simple."),
        ]
      ),
    ],
    [
      fb("Completa.", "Si Colón no ___ a América, la historia habría sido distinta. (llegar)", "hubiera llegado", "Un hecho histórico imaginado al revés: si + pluscuamperfecto de subjuntivo (hubiera llegado). «Habría llegado» no va nunca detrás de si."),
      fb("Completa.", "Si no se hubiera inventado internet, hoy no ___ redes sociales. (existir)", "existirían", "«Hoy» marca que la consecuencia es actual: condicional simple (existirían), aunque la condición sea pasada. «Habrían existido» hablaría de un resultado ya terminado."),
      fb("Completa.", "Si hubiera nacido en Japón, ___ japonés. (hablar, yo; ahora)", "hablaría", "Nacer es pasado, pero hablar japonés sería una situación de hoy: condicional simple (hablaría)."),
      mc(
        "Ordena la cadena: (A) no habría ido al hospital. (B) Si no me hubiera caído de la bici, (C) y no habría conocido a mi mejor amiga, que era enfermera.",
        ["B → A → C", "A → B → C", "C → B → A", "B → C → A"],
        0,
        "Primero va la condición (B: «Si no me hubiera caído…»), después su consecuencia (A) y al final la consecuencia de esta (C, que empieza con «y»). Empezar por A o C deja las consecuencias sin su condición."
      ),
      ms(
        "¿Qué frases son correctas?",
        ["Si hubiera dormido más, ahora no estaría cansado.", "Si fuera más organizado, no habría perdido el pasaporte.", "Si hubiera estudiado más, habría aprobado.", "Si hubiera estudiado más, apruebo."],
        [0, 1, 2],
        "«Si hubiera estudiado más, apruebo» mezcla un pasado irreal con un presente de indicativo; lo normativo es «habría aprobado»."
      ),
      toEs("Me mudé y por eso ya no vivo con mis padres.", "Si no me hubiera mudado, todavía viviría con mis padres.", "Condicional mixta: el hecho pasado (me mudé) se invierte en pluscuamperfecto de subjuntivo (si no me hubiera mudado) y la situación de hoy, en condicional simple (todavía viviría).", ["Si no me hubiese mudado, todavía viviría con mis padres.", "Si no me hubiera mudado, aún viviría con mis padres.", "Si no me hubiera mudado, seguiría viviendo con mis padres."], "Transforma los hechos en una condicional mixta: imagina que no te mudaste. Usa «todavía»."),
      wo("Si no hubiera llovido aquel día, nunca nos habríamos conocido.", "Pasado irreal completo: si + hubiera llovido, + nos habríamos conocido (condicional perfecto).", "If it hadn't rained that day, we'd never have met."),
    ]
  ),
  L(
    "conditional-perfect-pluperfect-subjunctive-mastery-check",
    "b2r-error-hunt-type-three",
    "Caza de errores: las condicionales del pasado",
    "«Si habría sabido», «ojalá habría», «hubiera ponido» — corrige los errores típicos de las condicionales del pasado.",
    "7 min",
    [
      sec(
        "Los errores clásicos",
        [
          "Recuerda la regla: tras si y tras ojalá va el pluscuamperfecto de subjuntivo (hubiera / hubiese + participio); habría + participio solo va en la consecuencia. Y el participio no cambia aunque cambie el auxiliar: puesto, visto, hecho, escrito, roto.",
          "Los errores clásicos: (1) Condicional compuesto tras si: ✗ si habría sabido → ✓ si hubiera sabido. (2) Ojalá + condicional: ✗ ojalá habría → ✓ ojalá hubiera. (3) Participios regularizados: ✗ hubiera ponido → ✓ hubiera puesto. (4) Consecuencia en un tiempo que no encaja: ✗ me divertiría anoche → ✓ me habría divertido anoche.",
          "Por qué ocurren: el inglés usa «would have» en la consecuencia y los hablantes lo copian también tras si; y los participios irregulares se regularizan por analogía con los regulares (comido → «ponido»).",
        ],
        [
          ["✗ Si habría estudiado, habría aprobado. → ✓ Si hubiera estudiado, habría aprobado.", "If I had studied, I would have passed."],
        ],
        [
          fb("Corrige.", "Ojalá lo ___ antes. (saber, yo; el alumno escribió: habría sabido)", "hubiera sabido", "«Ojalá» va con subjuntivo, nunca con condicional: «hubiera sabido», no «habría sabido»."),
        ]
      ),
    ],
    [
      fb("Corrige.", "Si me ___ la verdad, te habría perdonado. (decir, tú; el alumno escribió: habrías dicho)", "hubieras dicho", "Tras «si» nunca va «habrías»: se usa el pluscuamperfecto de subjuntivo «hubieras dicho»."),
      fb("Corrige.", "Si hubieras ___ la mesa, habríamos cenado antes. (poner; el alumno escribió: ponido)", "puesto", "El participio de «poner» es irregular: «puesto», no «ponido»."),
      fb("Corrige.", "Si hubiéramos salido antes, no ___ el tren. (perder; el alumno escribió: perdíamos)", "habríamos perdido", "Consecuencia en el pasado → condicional perfecto."),
      ms(
        "¿Qué frases son correctas?",
        ["Si lo hubiera sabido, no habría venido.", "Si lo hubiese sabido, no hubiera venido.", "Si lo habría sabido, no habría venido.", "Ojalá hubieras estado allí."],
        [0, 1, 3],
        "Tras «si» se usan «hubiera» o «hubiese» indistintamente, y en la consecuencia se acepta «hubiera» además de «habría». «Si lo habría sabido» es incorrecta: nunca va «habría» tras «si»."
      ),
      mc(
        "«I wish you had seen it.»",
        ["Ojalá lo hubieras visto.", "Ojalá lo habrías visto.", "Ojalá lo hubieras vido.", "Ojalá lo viste."],
        0,
        "«Ojalá» + pluscuamperfecto de subjuntivo expresa un deseo sobre el pasado: «hubieras visto». «Habrías visto» es condicional, «vido» no existe (el participio es «visto») y «viste» es indicativo."
      ),
      toEs("Iremos si nos invitas.", "Habríamos ido si nos hubieras invitado.", "Aunque la consecuencia vaya primero, la regla no cambia: la parte con si lleva pluscuamperfecto de subjuntivo (hubieras invitado) y la otra, condicional compuesto (habríamos ido).", ["Hubiéramos ido si nos hubieras invitado.", "Habríamos ido si nos hubieses invitado."], "Pasa la frase al irreal de pasado: no os invitó."),
      wo("Nunca me lo habría imaginado de ti.", "Condicional perfecto con pronombres.", "I would never have imagined it of you."),
    ]
  ),
  L(
    "reported-speech-2",
    "b2r-mission-gossip",
    "Misión real: el cotilleo",
    "Cuenta a tus amigos lo que te dijeron otros — el estilo indirecto en conversaciones cotidianas.",
    "7 min",
    [
      sec(
        "¿Qué te dijo?",
        [
          "Recuerda la regla: al contar lo que te dijeron, los tiempos retroceden: presente → imperfecto, pretérito → pluscuamperfecto, futuro → condicional. Las órdenes y ruegos pasan a que + imperfecto de subjuntivo (me pidió que la llamara). Las preguntas de sí o no se cuentan con «si» (Me preguntó si tenía tiempo) y las demás con el interrogativo con tilde (Me preguntó dónde vivía).",
          "Tu misión: contar cotilleos a tus amigos sin mezclar quién dijo qué. Por eso cambian también los pronombres y posesivos: «mi hermana» de Marta es «su hermana» cuando lo cuentas tú.",
        ],
        [
          ["Ana: «Estoy embarazada». → Ana me dijo que estaba embarazada.", "Ana told me she was pregnant."],
          ["Luis: «Me voy a mudar». → Luis dijo que se iba a mudar.", "Luis said he was going to move."],
          ["Marta: «Rompí con Pablo». → Marta me contó que había roto con Pablo.", "Marta told me she had broken up with Pablo."],
        ],
        [
          fb("Cuéntalo.", "Pedro: «Tengo un trabajo nuevo». → Pedro me dijo que ___ un trabajo nuevo.", "tenía", "En estilo indirecto con «dijo», el presente «tengo» pasa a imperfecto: «tenía»."),
        ]
      ),
    ],
    [
      fb("Cuéntalo.", "Lucía: «Iré a la boda». → Lucía dijo que ___ a la boda.", "iría", "En estilo indirecto con «dijo», el futuro «iré» pasa a condicional: «iría»."),
      fb("Cuéntalo.", "Sergio: «He suspendido». → Sergio me contó que ___.", "había suspendido", "En estilo indirecto con verbo en pasado, el perfecto «he suspendido» pasa a pluscuamperfecto."),
      fb("Cuéntalo.", "Eva: «Llámame». → Eva me pidió que la ___.", "llamara", "Mandato → que + imperfecto de subjuntivo."),
      fb("Cuéntalo.", "Raúl: «¿Tienes tiempo?» → Raúl me preguntó si ___ tiempo.", "tenía", "Pregunta sí/no → si + imperfecto."),
      mt(
        "Relaciona cada frase directa con su versión indirecta.",
        [
          ["«Estoy cansado.»", "Dijo que estaba cansado."],
          ["«Estuve enfermo.»", "Dijo que había estado enfermo."],
          ["«Estaré allí.»", "Dijo que estaría allí."],
          ["«Estate tranquilo.»", "Me dijo que estuviera tranquilo."],
        ],
        "Presente, pretérito, futuro e imperativo en estilo indirecto."
      ),
      toEs("«¿Dónde vives ahora?»", "Me preguntó dónde vivía.", "Pregunta con interrogativo: se cuenta sin «si» y con la tilde (dónde); el presente retrocede al imperfecto (vives → vivía). «Ahora» pasa a «entonces» o desaparece.", ["Ella me preguntó dónde vivía.", "Me preguntó dónde vivía entonces."], "Transforma la pregunta en estilo indirecto: empieza por «Me preguntó»."),
      wo("Me juró que nunca se lo había contado a nadie.", "Jurar que + pluscuamperfecto.", "He swore to me he had never told anyone."),
    ]
  ),
  L(
    "reported-speech-2",
    "b2r-transform-voice-messages",
    "Transformaciones: los mensajes de voz",
    "Resume mensajes de voz de tu buzón en estilo indirecto: cambian tiempos, pronombres y referencias de tiempo y lugar.",
    "8 min",
    [
      sec(
        "Más allá de los tiempos",
        [
          "Recuerda la regla: al resumir un mensaje, retroceden los tiempos (presente → imperfecto, perfecto → pluscuamperfecto, futuro → condicional, imperativo → imperfecto de subjuntivo). También cambian las referencias: hoy → aquel día, mañana → al día siguiente, ayer → el día anterior, aquí → allí, este → aquel. Y los pronombres: «Mañana te llamo» → que me llamaría (te → me; el presente con valor de futuro pasa a condicional).",
          "Por qué cambian los pronombres y posesivos: cada palabra se mide desde quien habla. El «te» y el «tu» del mensaje eras tú, así que al contarlo tú pasan a «me» y «mi»; el «yo» y el «mi» de quien dejó el mensaje pasan a «él / ella» y «su».",
        ],
        [
          ["«Mañana te llamo desde aquí.» → Dijo que me llamaría al día siguiente desde allí.", "He said he'd call me the next day from there."],
        ],
        [
          fb("Transforma.", "«Ayer vi a tu hermano.» → Me dijo que había visto a mi hermano el día ___.", "anterior", "En estilo indirecto, «ayer» pasa a «el día anterior»."),
          fb("Transforma.", "«Hoy no puedo ir.» → Dijo que aquel día no ___ ir.", "podía", "Presente → imperfecto; hoy → aquel día."),
        ]
      ),
    ],
    [
      fb("Transforma.", "«Te espero aquí.» → Me dijo que me esperaría ___.", "allí", "En estilo indirecto, «aquí» suele pasar a «allí», porque ya no estamos en ese lugar."),
      fb("Transforma.", "«Este viernes cenamos juntos.» → Dijo que ___ viernes cenaríamos juntos.", "aquel", "En estilo indirecto, «este» pasa a «aquel» o «ese», porque ese viernes ya queda lejos."),
      fb("Transforma.", "«Mañana te devuelvo el libro.» → Me dijo que me devolvería el libro al día ___.", "siguiente", "En estilo indirecto, «mañana» pasa a «al día siguiente»."),
      mc(
        "Mensaje: «No te preocupes, ya he pagado la factura.» → en estilo indirecto:",
        ["Me dijo que no me preocupara, que ya había pagado la factura.", "Me dijo que no te preocupes, que ya ha pagado la factura.", "Me dijo que no me preocupaba, que ya pagaba la factura.", "Me dijo que no se preocupara, que ya había pagado la factura."],
        0,
        "La orden pasa a imperfecto de subjuntivo («no me preocupara»), el perfecto pasa a pluscuamperfecto («había pagado») y «te» pasa a «me». «Que no se preocupara» cambia la persona: el mensaje era para mí."
      ),
      mt(
        "Relaciona cada expresión con su equivalente en estilo indirecto.",
        [
          ["hoy", "aquel día"],
          ["ayer", "el día anterior"],
          ["mañana", "al día siguiente"],
          ["la semana que viene", "la semana siguiente"],
        ],
        "Cambios de referencias temporales."
      ),
      toEs("She said she would come back the next day.", "Dijo que volvería al día siguiente.", "Futuro → condicional; mañana → al día siguiente.", ["Ella dijo que volvería al día siguiente.", "Dijo que regresaría al día siguiente."]),
      wo("Me explicó que no había podido llamarme antes.", "Explicar que + pluscuamperfecto.", "He explained that he hadn't been able to call me earlier."),
    ]
  ),
  L(
    "reported-speech-2",
    "b2r-error-hunt-reported-speech",
    "Caza de errores: el estilo indirecto",
    "Tiempos que no retroceden, mandatos en indicativo y preguntas sin si — corrige los errores del estilo indirecto.",
    "7 min",
    [
      sec(
        "Tres errores frecuentes",
        [
          "Recuerda la regla: con el verbo introductorio en pasado, los tiempos retroceden (venía, había visto, iría); las órdenes pasan a que + imperfecto de subjuntivo (que me callara); las preguntas de sí o no se cuentan con si, y las demás con el interrogativo con tilde (cómo, dónde).",
          "Los tres errores frecuentes: (1) No retroceder el tiempo: ✗ Dijo que viene → ✓ Dijo que venía (si ya no es vigente). (2) Mandatos en indicativo: ✗ Me dijo que me callaba → ✓ que me callara. (3) Preguntas sí/no sin si: ✗ Me preguntó que tenía hambre → ✓ Me preguntó si tenía hambre.",
          "Por qué importan: cada error cambia el mensaje. «Me dijo que me callaba» cuenta un hecho (yo me callaba), no una orden; «me preguntó que tenía hambre» no es una pregunta.",
        ],
        [
          ["✗ Me pidió que le ayudaba. → ✓ Me pidió que le ayudara.", "He asked me to help him."],
        ],
        [
          fb("Corrige.", "Me preguntó ___ quería café. (el alumno escribió: que)", "si", "Una pregunta de sí o no se transmite con «si», no con «que»."),
        ]
      ),
    ],
    [
      fb("Corrige.", "El profesor nos dijo que ___ los móviles. (apagar; el alumno escribió: apagábamos)", "apagáramos", "Orden → que + imperfecto de subjuntivo."),
      fb("Corrige.", "Dijo que el año siguiente ___ a estudiar a Italia. (ir; el alumno escribió: irá)", "iría", "En estilo indirecto con «dijo», el futuro pasa a condicional: «iría», no «irá»."),
      fb("Corrige.", "Me contó que ___ a su exnovia la semana anterior. (ver; el alumno escribió: veía)", "había visto", "Pretérito → pluscuamperfecto (el imperfecto «veía» presenta la acción como habitual o en curso; para una acción terminada y anterior a «me contó» se usa el pluscuamperfecto: «había visto»)."),
      ms(
        "¿Qué frases son correctas?",
        ["Me preguntó dónde estaba el baño.", "Le dije que no se preocupara.", "Me preguntó si quería bailar.", "Dijo que llegará ayer."],
        [0, 1, 2],
        "Las preguntas de sí o no se transmiten con «si» (Me preguntó si quería bailar). «Dijo que llegará ayer» es incoherente: mezcla un futuro con «ayer»; lo correcto sería «Dijo que había llegado ayer»."
      ),
      mc(
        "«Close the door», he told me. → en estilo indirecto:",
        ["Me dijo que cerrara la puerta.", "Me dijo que cerraba la puerta.", "Me dijo que cierre la puerta ayer.", "Me dijo cerrar que la puerta."],
        0,
        "Una orden en estilo indirecto en pasado va con «que» + imperfecto de subjuntivo: «que cerrara». «Cerraba» contaría lo que hacía, no una orden, y «cierre… ayer» no concuerda con el pasado."
      ),
      toEs("«¿Habéis comido?»", "Nos preguntaron si habíamos comido.", "Pregunta de sí o no → «si» (no «que»); el pretérito perfecto pasa a pluscuamperfecto: habéis comido → habíamos comido.", ["Nos preguntaron si ya habíamos comido."], "Transforma la pregunta en estilo indirecto: empieza por «Nos preguntaron»."),
      wo("El médico me recomendó que durmiera al menos ocho horas.", "Recomendar que + imperfecto de subjuntivo.", "The doctor recommended I sleep at least eight hours."),
    ]
  ),
  L(
    "ser-estar-haber-nuanced-2",
    "b2r-contrast-meaning-adjectives",
    "Contraste: es listo / está listo",
    "Adjetivos que cambian de significado con ser y estar — pares mínimos para no volver a confundirlos.",
    "7 min",
    [
      sec(
        "Pares que cambian de sentido",
        [
          "La idea: con ser, el adjetivo clasifica a alguien o algo, dice cómo es; con estar, describe un estado o la impresión de este momento. En la mayoría de adjetivos solo cambia el matiz (es alto / está altísimo), pero en algunos el cambio es tan grande que el significado ya es otro.",
          "Pregúntate: ¿hablo de un rasgo que define a la persona o de cómo está ahora? Ser listo = inteligente; estar listo = preparado. Ser rico = tener dinero; estar rico = saber bien. Ser despierto = espabilado; estar despierto = no dormir. Ser atento = considerado; estar atento = prestar atención.",
        ],
        [
          ["Es listo. / Está listo.", "He's clever. / He's ready."],
          ["Es rico. / Está rico.", "He's rich. / It's delicious."],
          ["Es despierto. / Está despierto.", "He's sharp. / He's awake."],
          ["Es atento. / Está atento.", "He's considerate. / He's paying attention."],
        ],
        [
          mc(
            "«Pruébala: hoy la sopa ___ riquísima.»",
            ["está", "es", "hay", "son"],
            0,
            "Para el sabor de una comida en un momento concreto («hoy») se usa «estar»: «está riquísima». «Es rica» describiría una característica permanente, y «hay» solo expresa existencia."
          ),
          fb("Completa.", "Nuestro camarero ___ muy atento: nos trae agua sin que se la pidamos.", "es", "Traer agua sin que se la pidan describe su forma de ser con los clientes: ser atento = considerado. «Está atento» diría solo que presta atención en este momento."),
        ]
      ),
      sec(
        "Más pares avanzados",
        [
          "Con estar aparecen también sentidos figurados y coloquiales que no existen con ser: estar verde (sin madurar; también inexperto: «estar verde en algo»), estar negro (furioso), no estar muy católico (no encontrarse bien).",
          "Con ser, los mismos adjetivos vuelven a su sentido literal: ser verde o ser negro = el color; ser católico = la religión. Por eso «soy negro» y «estoy negro» no se parecen en nada.",
        ],
        [
          ["Está muy verde en este trabajo.", "He's very green (inexperienced) in this job."],
          ["Los plátanos están verdes.", "The bananas are unripe."],
          ["Estoy negro con este ordenador.", "I'm furious with this computer."],
        ],
        [
          fb("Completa.", "Todavía no puedes comerte las fresas; ___ verdes.", "están", "«Estar verde» significa no estar maduro; «ser verde» es el color."),
        ]
      ),
    ],
    [
      mt(
        "Relaciona cada frase con su significado.",
        [
          ["Es aburrido.", "He's boring."],
          ["Está aburrido.", "He's bored."],
          ["Es malo.", "He's bad (a bad person)."],
          ["Está malo.", "He's sick."],
        ],
        "Con ser, el adjetivo es un rasgo (aburrido = aburre a otros; malo = mala persona); con estar, un estado (aburrido = siente aburrimiento; malo = enfermo)."
      ),
      { ...fb("Completa.", "Mi abuelo tiene noventa años, pero ___ muy despierto; lo entiende todo.", "es", "Cualidad (agudo, listo) → ser despierto; «está muy despierto» (sigue lúcido) también es correcto."), altAnswers: ["está"] },
      fb("Completa.", "Son las seis de la mañana y ya ___ despierto.", "estoy", "Estado (no dormido) → estar despierto. «Soy despierto» hablaría de ser espabilado, algo que no depende de la hora."),
      fb("Completa.", "Ese chico ___ muy atento: siempre te abre la puerta.", "es", "«Ser atento» describe a una persona amable y considerada; «estar atento» es prestar atención."),
      ms(
        "¿Qué frases son correctas?",
        ["La reunión es en la sala 3.", "El jefe está en la sala 3.", "La fiesta está en mi casa.", "Hay un problema con el ordenador."],
        [0, 1, 3],
        "Para dónde tiene lugar un evento se usa «ser»: «la fiesta es en mi casa». Por eso «La fiesta está en mi casa» es incorrecta; «el jefe está» es correcto porque es una persona."
      ),
      toEs("The cake is ready; it's delicious.", "El pastel está listo; está riquísimo.", "Dos estados del momento, los dos con estar: estar listo (preparado) y estar rico (sabe bien). Con ser, «es listo» y «es rico» hablarían de inteligencia y de dinero.", ["La tarta está lista; está riquísima.", "El pastel está listo, está buenísimo.", "El pastel está listo; está delicioso."]),
      wo("No te fíes de él; es muy listo pero poco sincero.", "Ser listo = inteligente, un rasgo; por eso conviene desconfiar. «Está listo» diría solo que está preparado.", "Don't trust him; he's very clever but not very honest."),
    ]
  ),
  L(
    "ser-estar-haber-nuanced-2",
    "b2r-mission-character-sketch",
    "Misión real: retrato de un personaje",
    "Escribe el perfil de un personaje para una novela: quién es, cómo está, dónde está y qué hay en su vida.",
    "7 min",
    [
      sec(
        "El perfil",
        [
          "Tu misión: escribir la ficha de un personaje para una novela. Recuerda la regla antes de empezar: ser define quién es y cómo es (identidad, profesión, carácter, origen, material, y el lugar o la hora de un evento); estar dice cómo o dónde se encuentra (estado, ubicación, resultado); haber presenta algo nuevo que existe (hay un secreto, no hay fotos).",
          "En un buen retrato se mezclan los tres: un rasgo fijo (es tímida), un estado que la novela puede cambiar (está agotada) y algo que hay en su vida (hay demasiado trabajo). Algunas palabras tienen verbo fijo: estar muerto, estar casado con, estar embarazada (estados, aunque duren), y ser de + material.",
        ],
        [
          ["Elena es arquitecta y es de Valparaíso.", "Elena is an architect and is from Valparaíso. (profesión y origen → ser)"],
          ["Últimamente está agotada porque hay demasiado trabajo en su estudio.", "Lately she's exhausted because there's too much work at her studio. (estado → estar; existencia → hay)"],
          ["Su casa está en lo alto de un cerro y es de madera.", "Her house is on top of a hill and is made of wood. (ubicación → estar; material → ser)"],
        ],
        [
          fb("Completa el perfil.", "Elena ___ una persona muy perfeccionista.", "es", "Para el carácter de una persona se usa «ser»: «es perfeccionista». «Está perfeccionista» sugeriría que solo lo es estos días."),
          fb("Completa el perfil.", "En su escritorio ___ planos por todas partes.", "hay", "«Hay» presenta la existencia de algo sin artículo determinado: «hay planos». «Están planos» no es posible; con artículo diríamos «los planos están por todas partes»."),
        ]
      ),
    ],
    [
      fb("Completa el perfil.", "Su padre ___ muerto desde hace años.", "está", "«Muerto» se usa con «estar», aunque sea un estado permanente: «está muerto»."),
      fb("Completa el perfil.", "La inauguración de su último edificio ___ en marzo.", "fue", "Para un evento se usa «ser»; como ya ocurrió, va en indefinido: «fue en marzo»."),
      fb("Completa el perfil.", "Ahora ___ enamorada de un músico, pero no se lo ha dicho a nadie.", "está", "Los estados emocionales van con «estar»: «está enamorada»."),
      ms(
        "Describiendo su casa: ¿qué rasgos se expresan con estar?",
        ["de madera", "en el tercer piso", "tres ventanas", "recién pintada"],
        [1, 3],
        "Material → ser (es de madera); existencia → haber (hay tres ventanas); ubicación y resultado → estar."
      ),
      mc(
        "«The conference will be in the main auditorium.»",
        ["La conferencia será en el auditorio principal.", "La conferencia estará en el auditorio principal.", "La conferencia habrá en el auditorio principal.", "La conferencia es estando en el auditorio principal."],
        0,
        "Para dónde tiene lugar un evento se usa «ser»: «será en el auditorio». «Estará» es para personas o cosas, y «habrá en» no funciona con sujeto determinado."
      ),
      toEs("She is very calm, but today she is nervous.", "Es muy tranquila, pero hoy está nerviosa.", "Carácter → ser (es tranquila); «hoy» marca el estado del día → estar (está nerviosa).", ["Ella es muy tranquila, pero hoy está nerviosa."]),
      wo("En el pueblo donde nació no había ni una sola biblioteca.", "Haber en imperfecto describe la existencia (o la ausencia) en el pasado, siempre en singular: no había ni una sola biblioteca.", "In the village where she was born there wasn't a single library."),
    ]
  ),
  L(
    "ser-estar-haber-nuanced-2",
    "b2r-error-hunt-ser-estar-haber",
    "Caza de errores: ser, estar y haber en el nivel Avanzado",
    "Los errores que siguen apareciendo en niveles avanzados: eventos, resultados, existencia y adjetivos de doble sentido.",
    "7 min",
    [
      sec(
        "Errores avanzados",
        [
          "Recuerda las reglas que estos errores rompen. (1) El lugar de un evento va con ser, porque el evento tiene lugar allí: ✗ El concierto está en el estadio → ✓ es. (2) Haber presenta algo no identificado; con artículo definido se sitúa con estar: ✗ Hay el libro en la mesa → ✓ El libro está en la mesa.",
          "(3) Haber impersonal no tiene sujeto, así que nunca va en plural, en ningún tiempo ni con perífrasis: había, hubo, ha habido, habrá, haya, va a haber, puede haber. (4) En los adjetivos de doble sentido, ser da el rasgo y estar el estado: la película es aburrida (aburre) / estoy aburrido (siento aburrimiento).",
        ],
        [
          ["✗ Habían tres opciones. → ✓ Había tres opciones.", "There were three options."],
          ["✗ La boda está en la iglesia. → ✓ La boda es en la iglesia.", "The wedding is at the church."],
          ["✗ Van a haber cambios. → ✓ Va a haber cambios.", "There are going to be changes. (la perífrasis también en singular)"],
        ],
        [
          fb("Corrige.", "___ muchos problemas en la reunión de ayer. (haber; el alumno escribió: Hubieron)", "Hubo", "«Haber» impersonal va siempre en singular: «hubo», nunca «hubieron»."),
        ]
      ),
    ],
    [
      fb("Corrige.", "El examen ___ en el aula 12. (el alumno escribió: está)", "es", "Para dónde tiene lugar un evento se usa «ser»: «el examen es en el aula 12», no «está»."),
      fb("Corrige.", "Tus llaves ___ encima de la mesa. (el alumno escribió: hay)", "están", "Con algo concreto y determinado («tus llaves») se usa «estar» para la ubicación, no «hay»."),
      fb("Corrige.", "Esa película ___ muy aburrida; me dormí. (el alumno escribió: está)", "es", "La película aburre a quien la ve: es un rasgo suyo → ser aburrida. «Está aburrida» diría que la película siente aburrimiento; quien se aburre soy yo (estaba aburrido)."),
      ms(
        "¿Qué frases tienen un error?",
        ["Había mucha gente en la plaza.", "Habrán más oportunidades.", "La cena está lista.", "El partido es a las nueve."],
        [1],
        "«Haber» impersonal va siempre en singular: «habrá más oportunidades», no «habrán». Las demás frases son correctas."
      ),
      mc(
        "¿Cuál es correcta?",
        ["Puede que haya más personas de las que esperábamos.", "Puede que hayan más personas de las que esperábamos.", "Puede que estén más personas de las que esperábamos.", "Puede que son más personas de las que esperábamos."],
        0,
        "«Haber» impersonal va siempre en singular, también en subjuntivo: «haya». «Hayan» concuerda sin motivo con «personas», y «estén» o «son» no expresan existencia."
      ),
      toEs("There will be many changes next year.", "Habrá muchos cambios el año que viene.", "«Haber» impersonal va siempre en singular, también en futuro: «habrá muchos cambios».", ["Habrá muchos cambios el próximo año."]),
      wo("La exposición es en el museo que está junto al río.", "La exposición es un evento → es en el museo; el museo es un edificio que se encuentra en un lugar → está junto al río.", "The exhibition is at the museum that's next to the river."),
    ]
  ),
  L(
    "verbs-of-change-mastery-check",
    "b2r-story-biographies-of-change",
    "Detective de historias: biografías del cambio",
    "Practica la elección entre ponerse, volverse, hacerse, llegar a ser, convertirse en y quedarse con frases sobre la vida de distintas personas.",
    "8 min",
    [
      sec(
        "Tres vidas",
        [
          "Recuerda la regla: en una biografía, el verbo de cambio depende de cómo ocurre el cambio. Ponerse: rápido y temporal (se puso nerviosa). Volverse: profundo y a menudo involuntario (se volvió callado). Hacerse: por decisión o esfuerzo (se hizo vegetariana, se hizo abogado). Llegar a ser: la meta de un largo proceso (llegó a ser director). Convertirse en: una cosa o persona pasa a ser otra (el taller se convirtió en una empresa).",
          "¿Por qué hay tantos? Porque el español distingue lo que dura, lo que se elige y lo que se consigue. Ponerse nunca va con profesiones (✗ se puso abogado) y solo convertirse lleva «en».",
        ],
        [
          ["Carlos empezó como camarero y llegó a ser director del hotel.", "Carlos started as a waiter and became hotel director. (meta tras un largo camino)"],
          ["Tras la guerra, el pintor se volvió muy callado.", "After the war, the painter became very quiet. (cambio de carácter involuntario)"],
          ["Lucía se hizo vegetariana a los veinte años.", "Lucía became vegetarian at twenty. (decisión personal)"],
        ],
        [
          mc(
            "«Empezó repartiendo periódicos y, treinta años después, ___ dueño de la editorial.»",
            ["llegó a ser", "se puso", "se quedó", "se volvió"],
            0,
            "Alcanzar una posición al final de un proceso largo → llegar a ser. «Se puso» es un cambio momentáneo, «se volvió» un cambio de carácter y «se quedó» un resultado, a menudo negativo."
          ),
        ]
      ),
      sec(
        "Más cambios",
        [
          "Quedarse indica el estado en que alguien queda después de algo, a menudo una pérdida: quedarse ciego, quedarse sin trabajo, quedarse viudo. ¿Por qué no volverse? Porque no es un cambio de carácter, sino la consecuencia de un hecho (una enfermedad, un cierre, una muerte).",
        ],
        [
          ["Mi abuela se quedó viuda muy joven.", "My grandmother was widowed very young. (resultado de una pérdida)"],
          ["El pueblo se convirtió en un destino turístico.", "The village became a tourist destination. (pasa a ser otra cosa)"],
        ],
        [
          fb("Completa.", "Cuando quebró la empresa, mi vecina ___ sin empleo. (quedarse, pretérito)", "se quedó", "Resultado negativo de un hecho (la quiebra) → quedarse sin + sustantivo: se quedó sin empleo."),
        ]
      ),
    ],
    [
      fb("Completa la biografía.", "Al ver al público, la cantante ___ muy nerviosa. (ponerse, pretérito)", "se puso", "Cambio rápido y temporal, solo en ese momento → ponerse: se puso nerviosa."),
      fb("Completa la biografía.", "Con los años, el empresario ___ cada vez más desconfiado. (volverse, pretérito)", "se volvió", "Cambio de carácter gradual («con los años», «cada vez más») → volverse."),
      { ...fb("Completa la biografía.", "Estudió muchísimo y ___ abogada. (hacerse, pretérito)", "se hizo", "Profesión conseguida con esfuerzo → hacerse: se hizo abogada. «Llegó a ser» también es posible."), altAnswers: ["llegó a ser"] },
      fb("Completa la biografía.", "Aquel pequeño taller ___ en una gran empresa. (convertirse, pretérito)", "se convirtió", "Una cosa pasa a ser otra distinta → convertirse en: se convirtió en una gran empresa."),
      mt(
        "Relaciona cada cambio con su verbo.",
        [
          ["rojo de vergüenza", "ponerse"],
          ["millonario tras años de trabajo", "hacerse"],
          ["loco", "volverse"],
          ["sin palabras", "quedarse"],
        ],
        "Rojo de vergüenza es pasajero (ponerse); millonario con esfuerzo es un logro buscado (hacerse); volverse loco es una expresión fija; quedarse sin palabras es el resultado de una sorpresa."
      ),
      toEs("Her dream became reality.", "Su sueño se hizo realidad.", "«Hacerse realidad» es la expresión fija; «convertirse en realidad» también es correcto.", ["Su sueño se convirtió en realidad.", "Su sueño se cumplió.", "Su sueño se volvió realidad."]),
      wo("Con el tiempo, aquella niña tímida llegó a ser una gran líder.", "Llegar a ser expresa la meta alcanzada tras un largo proceso («con el tiempo»).", "Over time, that shy girl became a great leader."),
      toEs("Mi vecino se puso músico profesional a los cuarenta.", "Mi vecino se hizo músico profesional a los cuarenta.", "Una profesión elegida → hacerse. Ponerse solo va con adjetivos de estados pasajeros, nunca con profesiones.", ["Mi vecino se hizo músico profesional a los cuarenta años.", "Mi vecino llegó a ser músico profesional a los cuarenta."], "Corrige la frase."),
      fb("Transforma con el verbo de cambio adecuado.", "Antes veía perfectamente; ahora es ciego por una enfermedad. → Por una enfermedad, ___ ciego. (pretérito)", "se quedó", "Una pérdida causada por un hecho (la enfermedad) se cuenta con quedarse: se quedó ciego. Volverse sugeriría un cambio de carácter."),
    ]
  ),
  L(
    "verbs-of-change-mastery-check",
    "b2r-contrast-ponerse-volverse-hacerse",
    "Contraste: se puso, se volvió, se hizo",
    "La misma persona, tres cambios distintos — elige el verbo según la duración y la voluntad.",
    "7 min",
    [
      sec(
        "Dos preguntas para decidir",
        [
          "Recuerda la regla con dos preguntas. ¿Cuánto dura? Si es rápido y temporal → ponerse (se puso triste al oír la noticia). Si es profundo y duradero → volverse (se volvió una persona triste). ¿Quién lo decide? Si es voluntario o fruto del esfuerzo → hacerse (se hizo budista, se hizo rico).",
          "¿Por qué importa? Porque el mismo adjetivo cambia de sentido según el verbo: se puso triste (un momento) no es lo mismo que se volvió triste (su carácter cambió). Y ponerse nunca va con profesiones, religiones ni sustantivos: ✗ se puso médico.",
        ],
        [
          ["Se puso triste al oír la noticia.", "She got sad when she heard the news. (momentary)"],
          ["Se volvió muy triste después de la pérdida.", "She became a very sad person after the loss. (lasting)"],
          ["Se hizo budista.", "She became a Buddhist. (her choice)"],
        ],
        [
          mc(
            "«Desde que trabaja de noche, ___ muy irritable.»",
            ["se ha vuelto", "se ha puesto", "se ha hecho", "ha llegado a ser"],
            0,
            "«Desde que» marca un cambio que dura y que no ha buscado → volverse: se ha vuelto irritable. «Se ha puesto» sería solo un momento, «se ha hecho» implicaría voluntad y «llegar a ser» un logro."
          ),
        ]
      ),
    ],
    [
      fb("Elige el verbo.", "Desde que ganó la lotería, ___ muy arrogante. (volverse, perfecto)", "se ha vuelto", "Cambio de carácter duradero y no buscado («desde que») → volverse: se ha vuelto arrogante."),
      fb("Elige el verbo.", "Mi hermano ___ socio del club de ajedrez. (hacerse, pretérito)", "se hizo", "Afiliación voluntaria → hacerse: se hizo socio."),
      fb("Elige el verbo.", "No ___ así; solo era una broma. (ponerse, tú, negativo)", "te pongas", "Reacción emocional momentánea → ponerse; en imperativo negativo de tú, presente de subjuntivo: no te pongas."),
      fb("Elige el verbo.", "El cielo ___ gris de repente. (ponerse, pretérito)", "se puso", "Cambio rápido de aspecto («de repente») → ponerse: se puso gris."),
      ms(
        "¿Qué frases son naturales?",
        ["Se hizo rico con su negocio.", "Se volvió loco de alegría.", "Se puso médico.", "Me pongo nerviosa en los exámenes."],
        [0, 1, 3],
        "Una profesión se consigue con «hacerse»: «se hizo médico». «Se puso médico» es incorrecta porque «ponerse» es solo para estados pasajeros."
      ),
      mc(
        "«He became famous overnight.»",
        ["Se hizo famoso de la noche a la mañana.", "Se puso famoso de la noche a la mañana.", "Se quedó famoso de la noche a la mañana.", "Llegó a famoso de la noche a la mañana."],
        0,
        "«Hacerse famoso» (o «volverse famoso») expresa ese cambio. «Ponerse» es para estados pasajeros, «quedarse» para resultados, y «llegar a (ser)» implica un proceso largo, incompatible con «de la noche a la mañana»."
      ),
      wo("Cuando vio el precio, se quedó sin palabras.", "Quedarse sin + sustantivo expresa el resultado de algo (aquí, la sorpresa al ver el precio).", "When he saw the price, he was left speechless."),
      toEs("Cada vez que pierde su equipo, se vuelve furioso.", "Cada vez que pierde su equipo, se pone furioso.", "Una reacción pasajera que se repite («cada vez que») → ponerse: se pone furioso. Volverse indicaría que su carácter ha cambiado para siempre.", ["Cada vez que su equipo pierde, se pone furioso."], "Corrige la frase."),
      fb("Transforma el estado en el cambio.", "Está pálido. → Al ver la sangre, ___ pálido. (pretérito)", "se puso", "Estar describe el estado; el momento en que empieza ese estado pasajero se cuenta con ponerse: se puso pálido."),
    ]
  ),
  L(
    "verbs-of-change-mastery-check",
    "b2r-transform-adjective-to-change",
    "Transformaciones: de «estar» a «ponerse»",
    "Convierte estados en cambios: está nervioso → se puso nervioso; es famoso → se hizo famoso.",
    "7 min",
    [
      sec(
        "Del estado al proceso",
        [
          "Recuerda la regla: estar + adjetivo describe un estado; ponerse + el mismo adjetivo cuenta el momento en que empieza (está furioso → se puso furioso). Ser + adjetivo o sustantivo describe una cualidad; el proceso que llevó a ella se cuenta con volverse si fue involuntario (es desconfiado → se volvió desconfiado), con hacerse si fue buscado (es ingeniera → se hizo ingeniera), con quedarse si es el resultado de una pérdida (está sordo → se quedó sordo) y con convertirse en si algo pasa a ser otra cosa.",
          "¿Por qué no sirve siempre ponerse? Porque ponerse solo marca el inicio de un estado pasajero: no va con sustantivos (✗ se puso abogada) ni con rasgos que llegan poco a poco.",
        ],
        [
          ["Estaba furioso. → Se puso furioso cuando lo vio.", "He was furious. → He got furious when he saw it. (estado → inicio)"],
          ["Es independiente. → Se hizo independiente a los dieciocho.", "She's independent. → She became independent at eighteen. (cualidad buscada)"],
          ["Está sin trabajo. → Se quedó sin trabajo cuando cerró la tienda.", "He's out of work. → He lost his job when the shop closed. (resultado de un suceso)"],
        ],
        [
          { ...fb("Transforma.", "Está pálido. → ___ pálido de repente. (pretérito)", "Se puso", "«Ponerse» + adjetivo expresa un cambio físico rápido y pasajero («de repente»): se puso pálido."), altAnswers: ["Se quedó","Se volvió"] },
        ]
      ),
    ],
    [
      { ...fb("Transforma.", "Es muy desconfiado. → Con los años, ___ muy desconfiado. (pretérito)", "se volvió", "«Volverse» + adjetivo expresa un cambio de carácter gradual y duradero («con los años»)."), altAnswers: ["se hizo"] },
      { ...fb("Transforma.", "Es ingeniero. → Estudió cinco años y ___ ingeniero. (pretérito)", "se hizo", "«Hacerse» expresa un cambio conseguido por esfuerzo, como una profesión."), altAnswers: ["llegó a ser","se convirtió en"] },
      fb("Transforma.", "Está sordo. → Tras el accidente, ___ sordo. (pretérito)", "se quedó", "«Quedarse» + adjetivo expresa el resultado de un suceso, a menudo una pérdida."),
      fb("Transforma.", "Es una ciudad moderna. → En diez años ___ en una ciudad moderna. (pretérito)", "se convirtió", "«Convertirse en» + sustantivo expresa una transformación completa; es el único de estos verbos que lleva «en»."),
      mc(
        "«Está muy contento.» → proceso (momento en que empieza):",
        ["Se puso muy contento.", "Se volvió muy contento para siempre.", "Se hizo muy contento.", "Llegó a ser muy contento."],
        0,
        "Una emoción que empieza en un momento se expresa con «ponerse»: «se puso muy contento». «Se hizo» y «llegó a ser» son para cambios por esfuerzo, y «se volvió» para un cambio de carácter."
      ),
      toEs("My grandfather became very forgetful.", "Mi abuelo se volvió muy olvidadizo.", "Cambio gradual e involuntario del carácter → volverse.", ["Mi abuelo se ha vuelto muy olvidadizo."]),
      wo("La pequeña librería se convirtió en el centro cultural del barrio.", "Convertirse en + sustantivo: la librería pasa a ser otra cosa (el centro cultural).", "The small bookstore became the neighborhood's cultural center."),
      toEs("Cuando cerraron la fábrica, mi padre se puso sin trabajo.", "Cuando cerraron la fábrica, mi padre se quedó sin trabajo.", "El resultado de un suceso, sobre todo una pérdida, se expresa con quedarse: se quedó sin trabajo. Ponerse solo va con adjetivos de estados pasajeros, nunca con «sin + sustantivo».", ["Cuando cerró la fábrica, mi padre se quedó sin trabajo.", "Cuando cerraron la fábrica, mi padre se quedó sin empleo."], "Corrige la frase."),
    ]
  ),
  L(
    "advanced-connectors-2",
    "b2r-build-argumentative-paragraph",
    "Construye: un párrafo argumentativo",
    "Practica los conectores de causa, consecuencia, contraste y adición en frases sueltas, como piezas de un párrafo argumentativo.",
    "8 min",
    [
      sec(
        "Las piezas",
        [
          "Recuerda la regla: un párrafo argumentativo avanza en pasos, y cada conector le dice al lector qué paso viene. Causa (ya que, puesto que, dado que) → la razón; contraste (sin embargo, no obstante, a pesar de que) → una objeción; adición (además, asimismo, incluso) → otro argumento a favor; consecuencia (por lo tanto, por consiguiente, así que) → la conclusión.",
          "Un orden que funciona casi siempre: idea + razón → objeción → otro argumento → conclusión. Si el conector no coincide con la relación real entre las ideas (por ejemplo, además delante de una objeción), el lector se pierde aunque la gramática sea correcta. Incluso es especial: añade el caso más extremo o sorprendente.",
        ],
        [
          ["Dado que el transporte público es barato, cada vez más gente lo usa.", "Given that public transport is cheap, more and more people use it. (idea + razón)"],
          ["Sin embargo, todavía hay barrios mal comunicados.", "However, there are still poorly connected neighborhoods. (objeción)"],
          ["Por lo tanto, es necesario ampliar la red.", "Therefore, it's necessary to expand the network. (conclusión)"],
        ],
        [
          fb("Elige el conector.", "El centro está peatonalizado; ___, el aire es más limpio. (therefore)", "por lo tanto", "Un aire más limpio es el resultado de peatonalizar: conector de consecuencia, por lo tanto (o por consiguiente)."),
        ]
      ),
    ],
    [
      fb("Elige el conector.", "___ que llueve mucho, los embalses están llenos. (given)", "Dado", "La lluvia es la razón y va al principio: dado que + indicativo, una causa conocida."),
      fb("Elige el conector.", "Es una buena medida; ___, tiene algunos inconvenientes. (however)", "sin embargo", "Los inconvenientes se oponen a «buena medida»: contraste, sin embargo."),
      fb("Elige el conector.", "Reduce la contaminación y, ___, ahorra dinero. (moreover)", "además", "Ahorrar dinero es otra ventaja del mismo signo: adición, además."),
      wo("A pesar de que la ley es reciente, ya ha dado buenos resultados.", "A pesar de que + indicativo (un hecho conocido) presenta la objeción que no impide lo principal.", "Despite the fact that the law is recent, it has already produced good results."),
      wo("Puesto que nadie se opuso, la propuesta fue aprobada.", "Puesto que + causa conocida al principio; después, la idea principal en pasiva.", "Since nobody objected, the proposal was approved."),
      mc(
        "¿Qué conector encaja? «No estudió nada; ___, suspendió.»",
        ["por consiguiente", "no obstante", "además", "a pesar de"],
        0,
        "«Por consiguiente» introduce una consecuencia lógica: no estudió y por eso suspendió. «No obstante» marca contraste, «además» añade información y «a pesar de» necesita un sustantivo."
      ),
      toEs("The project is expensive; nevertheless, it's necessary.", "El proyecto es caro; no obstante, es necesario.", "«No obstante» es un conector de contraste formal, equivalente a «sin embargo».", ["El proyecto es caro; sin embargo, es necesario.", "El proyecto es caro, no obstante es necesario."]),
    ]
  ),
  L(
    "advanced-connectors-2",
    "b2r-error-hunt-connectors",
    "Caza de errores: los conectores",
    "«A pesar de que el frío», «sin embargo que», «debido a llovía» — corrige los conectores mal construidos.",
    "7 min",
    [
      sec(
        "Preposición o conjunción",
        [
          "Algunos conectores cambian según lo que sigue: a pesar de + sustantivo/infinitivo, a pesar de que + verbo conjugado. Lo mismo con debido a / debido a que, gracias a / gracias a que.",
          "¿Por qué? A pesar de y debido a terminan en una preposición (de, a), y una preposición no puede ir directamente delante de un verbo conjugado: necesita que para introducir la oración entera. Por eso «debido a llovía» falla, y «a pesar de que el frío» sobra el que, porque detrás solo hay un sustantivo.",
        ],
        [
          ["✗ A pesar de que el frío, salimos. → ✓ A pesar del frío, salimos.", "Despite the cold, we went out."],
          ["✗ Debido a llovía, se canceló. → ✓ Debido a que llovía, se canceló.", "Because it was raining, it was canceled."],
        ],
        [
          fb("Corrige.", "___ la lluvia, el partido continuó. (el alumno escribió: A pesar de que)", "A pesar de", "Con un sustantivo («la lluvia») se usa «a pesar de», sin «que»; «a pesar de que» necesita un verbo."),
        ]
      ),
      sec(
        "Posición y puntuación",
        "Sin embargo y no obstante no son preposiciones ni conjunciones, sino conectores del discurso: unen dos oraciones completas, suelen ir tras punto o punto y coma y llevan coma detrás. Nunca llevan que ni de. Si quieres unir dentro de la misma frase, usa aunque o pero.",
        [
          ["✗ Es caro, sin embargo que es bueno. → ✓ Es caro; sin embargo, es bueno.", "It's expensive; however, it's good."],
        ],
        [
          mc(
            "¿Cuál es correcta?",
            ["Estaba cansado; sin embargo, siguió trabajando.", "Estaba cansado, sin embargo que siguió trabajando.", "Sin embargo estaba cansado que siguió trabajando.", "Estaba cansado sin embargo de siguió trabajando."],
            0,
            "«Sin embargo» es un conector independiente: va entre punto y coma y coma. No se une con «que» ni con «de», como en «sin embargo que siguió»."
          ),
        ]
      ),
    ],
    [
      fb("Corrige.", "El vuelo se retrasó debido ___ la niebla. (el alumno escribió: que)", "a", "«Debido a» va con sustantivo: «debido a la niebla»; «debido a que» necesita un verbo."),
      fb("Corrige.", "___ tenía fiebre, fue a trabajar. (el alumno escribió: A pesar de)", "A pesar de que", "Verbo conjugado → a pesar de que."),
      { ...fb("Corrige.", "No vino; ___, no nos avisó. (el alumno escribió: sin embargo)", "además", "Se suma otra queja → adición, no contraste."), altAnswers: ["es más", "encima"] },
      ms(
        "¿Qué frases son correctas?",
        ["Ya que estás aquí, ayúdame.", "Aunque llueve, iremos.", "Por lo tanto que no vino, empezamos.", "Gracias a tu ayuda, terminamos a tiempo."],
        [0, 1, 3],
        "«Por lo tanto» introduce una consecuencia y nunca va con «que». Para dar una causa hace falta un conector causal, por ejemplo «como»: «como no vino, empezamos»."
      ),
      mc(
        "«Since you know the answer, tell me.»",
        ["Ya que sabes la respuesta, dímela.", "Ya que sepas la respuesta, dímela.", "Por lo tanto sabes la respuesta, dímela.", "Sin embargo sabes la respuesta, dímela."],
        0,
        "«Ya que» + indicativo presenta una causa conocida: «sabes». «Ya que sepas» no es correcto, y «por lo tanto» o «sin embargo» no introducen una causa."
      ),
      toEs("Despite being tired, she finished the race.", "A pesar de estar cansada, terminó la carrera.", "«A pesar de» + infinitivo se usa cuando el sujeto es el mismo.", ["A pesar de que estaba cansada, terminó la carrera.", "Pese a estar cansada, terminó la carrera."]),
      wo("Como no había entradas, nos quedamos en casa.", "Como (causal) al principio de la oración.", "Since there were no tickets, we stayed home."),
    ]
  ),
  L(
    "advanced-connectors-2",
    "b2r-transform-pero-sin-embargo",
    "Transformaciones: del registro coloquial al formal",
    "Sustituye pero, porque y así que por sus equivalentes formales en un texto académico.",
    "7 min",
    [
      sec(
        "Subir el registro",
        [
          "Recuerda la regla: en un texto académico o formal, los conectores de la conversación se sustituyen por sus equivalentes cultos. Pero → sin embargo / no obstante. Porque → ya que / puesto que / dado que. Así que → por lo tanto / por consiguiente. Y también → además / asimismo.",
          "Al cambiar el conector cambia también la puntuación, porque los formales de contraste, consecuencia y adición enlazan oraciones completas: punto y coma (o punto) delante y coma detrás (Es útil; no obstante, es caro). Ya que y puesto que pueden ir al principio o detrás de una coma. Y no basta con el conector: el registro formal también pide léxico preciso (carecer de en lugar de no tener, resultar necesario en lugar de hacer falta).",
        ],
        [
          ["Es útil, pero es caro. → Es útil; no obstante, es caro.", "It's useful; nevertheless, it's expensive."],
          ["Lo cancelaron porque no había dinero. → Lo cancelaron, puesto que no había fondos.", "It was canceled since there were no funds."],
        ],
        [
          { ...fb("Sube el registro.", "No hubo acuerdo, así que se aplazó la votación. → No hubo acuerdo; ___, se aplazó la votación.", "por consiguiente", "Así que marca una consecuencia en registro coloquial; su equivalente formal es por consiguiente (o por lo tanto), entre punto y coma y coma."), altAnswers: ["por lo tanto", "por tanto"] },
        ]
      ),
    ],
    [
      { ...fb("Sube el registro.", "Aumentó la demanda porque bajaron los precios. → Aumentó la demanda, ___ que bajaron los precios.", "dado", "«Dado que» es una alternativa formal a «porque» (también «puesto que» o «ya que»)."), altAnswers: ["puesto", "ya"] },
      fb("Sube el registro.", "El estudio es serio y también es innovador. → El estudio es serio; ___, es innovador.", "asimismo", "«Asimismo» es la versión formal de «y también»."),
      { ...fb("Sube el registro.", "Tiene ventajas, pero hay riesgos. → Tiene ventajas; ___, hay riesgos.", "no obstante", "«No obstante» (o «sin embargo») es la versión formal de «pero»; va entre punto y coma y coma."), altAnswers: ["sin embargo"] },
      mt(
        "Relaciona cada conector coloquial con uno formal.",
        [
          ["pero", "no obstante"],
          ["porque", "puesto que"],
          ["así que", "por consiguiente"],
          ["y también", "asimismo"],
        ],
        "Equivalencias de registro."
      ),
      mc(
        "¿Qué versión es la más formal?",
        ["Dado que los datos son insuficientes, resulta prematuro extraer conclusiones.", "Como no tenemos muchos datos, pues no sé.", "No hay datos, así que nada.", "Porque faltan datos, no podemos decir nada, ¿vale?"],
        0,
        "«Dado que» y el vocabulario formal («resulta prematuro», «extraer conclusiones») marcan el registro culto. «Pues no sé», «nada» o «¿vale?» son coloquiales."
      ),
      toEs("Therefore, further research is needed.", "Por lo tanto, se necesita más investigación.", "Por lo tanto + se pasivo.", ["Por consiguiente, se necesita más investigación.", "Por lo tanto, es necesaria más investigación.", "Por tanto, se necesita más investigación."]),
      wo("Asimismo, conviene destacar la participación de los vecinos.", "Asimismo (adición formal) + conviene + infinitivo.", "Likewise, it's worth highlighting the residents' participation."),
    ]
  ),
  L(
    "emphasis-word-order-2",
    "b2r-transform-cleft-sentences",
    "Transformaciones: frases hendidas",
    "Destaca quién, qué, cuándo o dónde con ser … que: «Fue María quien lo encontró».",
    "7 min",
    [
      sec(
        "Mover el foco",
        [
          "Recuerda la regla: para transformar una frase normal en hendida, saca el elemento que quieres destacar, ponlo detrás de ser y une el resto con el relativo adecuado. Personas: quien / el que (plural: quienes / los que). Cosas o ideas: lo que. Tiempo: cuando. Lugar: donde. Modo: como.",
          "¿Por qué hacerlo? Porque así el oyente sabe qué parte es la información nueva o la corrección (Fue María quien las encontró, no yo). Ser concuerda en número con lo destacado y suele ir en el mismo tiempo que el verbo: Fueron mis padres quienes… / Lo que quiero son vacaciones.",
        ],
        [
          ["María encontró las llaves. → Fue María quien encontró las llaves.", "It was María who found the keys."],
          ["Nos conocimos en Lima. → Fue en Lima donde nos conocimos.", "It was in Lima that we met."],
          ["Necesito tiempo. → Lo que necesito es tiempo.", "What I need is time."],
        ],
        [
          fb("Destaca el tiempo.", "Llegó el lunes. → Fue el lunes ___ llegó.", "cuando", "En las hendidas de tiempo se usa «cuando»: «Fue el lunes cuando…»."),
        ]
      ),
    ],
    [
      { ...fb("Destaca a la persona.", "Tu hermana me lo dijo. → Fue tu hermana ___ me lo dijo.", "quien", "Lo destacado es una persona (tu hermana): quien o la que, en singular."), altAnswers: ["la que"] },
      fb("Destaca el lugar.", "Estudié en Salamanca. → Fue en Salamanca ___ estudié.", "donde", "En las hendidas de lugar se usa «donde»: «Fue en Salamanca donde…»."),
      fb("Destaca el objeto.", "Me molesta su actitud. → ___ que me molesta es su actitud.", "Lo", "Para destacar una cosa se usa «lo que»: «Lo que me molesta es…»."),
      fb("Destaca el modo.", "Lo arreglé así. → Fue así ___ lo arreglé.", "como", "En las hendidas de modo se usa «como»: «Fue así como…»."),
      mc(
        "«It was my parents who taught me to read.»",
        ["Fueron mis padres quienes me enseñaron a leer.", "Fue mis padres quien me enseñaron a leer.", "Eran mis padres lo que me enseñaron a leer.", "Fueron mis padres que me enseñaron leer."],
        0,
        "En la hendida, «ser» concuerda con el elemento destacado («fueron mis padres») y para personas se usa «quienes». «Fue mis padres» no concuerda, y «que» o «lo que» no sirven aquí."
      ),
      toEs("What I like most is the silence.", "Lo que más me gusta es el silencio.", "Para destacar una cosa: lo que + verbo + ser + elemento destacado; ser concuerda con el silencio (es).", ["Lo que más me gusta es la tranquilidad."]),
      wo("Fue precisamente en ese momento cuando entendí todo.", "Frase hendida temporal: ser + momento destacado + cuando + el resto.", "It was precisely at that moment that I understood everything."),
    ]
  ),
  L(
    "emphasis-word-order-2",
    "b2r-mission-passionate-review",
    "Misión real: una crítica apasionada",
    "Escribe una crítica de un concierto que te encantó (o que odiaste) con todas las estructuras de énfasis.",
    "7 min",
    [
      sec(
        "Recursos de énfasis",
        "Lo + adjetivo/adverbio + que (lo bien que canta), anteposición con pronombre (La canción, la cantó como nadie), frases hendidas (Fue el batería quien me impresionó), ¡Qué + sustantivo + tan/más + adjetivo! (¡Qué voz tan potente!) y adverbios enfáticos al inicio (Jamás había visto…).",
        [
          ["¡No te imaginas lo bien que tocaron!", "You can't imagine how well they played!"],
          ["Esa canción la cantó a capela.", "That song, she sang a cappella."],
          ["Jamás había oído una voz así.", "Never had I heard a voice like that."],
        ],
        [
          fb("Enfatiza.", "¡No sabes lo ___ que eran las canciones! (emocionante)", "emocionantes", "Lo + adjetivo + que: el adjetivo concuerda con el sustantivo (las canciones)."),
          fb("Enfatiza con anteposición.", "El último tema, ___ tocaron dos veces.", "lo", "Complemento antepuesto + pronombre que lo retoma."),
        ]
      ),
    ],
    [
      fb("Enfatiza.", "Me sorprendió lo ___ que eran las entradas. (barato)", "baratas", "Lo + adjetivo concordado con el sustantivo (entradas)."),
      fb("Enfatiza con anteposición.", "A la cantante, ___ conocí en el camerino.", "la", "El complemento directo de persona antepuesto se retoma con pronombre: «a la cantante» → «la»."),
      fb("Enfatiza con inversión.", "Apenas ___ empezado cuando se fue la luz. (haber, ellos)", "habían", "Apenas + pluscuamperfecto."),
      mt(
        "Relaciona cada frase neutra con su versión enfática.",
        [
          ["Toca muy bien.", "¡Lo bien que toca!"],
          ["No había visto nunca nada igual.", "Jamás había visto nada igual."],
          ["Compré las entradas ayer.", "Las entradas las compré ayer."],
          ["El batería me impresionó.", "Fue el batería quien me impresionó."],
        ],
        "Exclamación, adverbio negativo al principio (sin «no»), anteposición y frase hendida."
      ),
      ms(
        "¿Qué frases son correctas?",
        ["¡Qué voz tan bonita!", "¡Lo difícil que es conseguir entradas!", "El concierto lo vi desde la primera fila.", "Lo bonitos que son las canciones."],
        [0, 1, 2],
        "En «lo + adjetivo + que», el adjetivo concuerda con el sustantivo: «lo bonitas que son las canciones». «Lo bonitos» es incorrecta porque «canciones» es femenino."
      ),
      toEs("You can't imagine how much I enjoyed it!", "¡No te imaginas lo mucho que lo disfruté!", "«Lo mucho que» + verbo expresa intensidad: «lo mucho que lo disfruté».", ["¡No te imaginas cuánto lo disfruté!", "¡No te puedes imaginar lo mucho que lo disfruté!"]),
      wo("Nunca en mi vida había llorado tanto en un concierto.", "Nunca en mi vida + pluscuamperfecto (énfasis).", "Never in my life had I cried so much at a concert."),
    ]
  ),
  L(
    "emphasis-word-order-2",
    "b2r-contrast-neutral-emphatic",
    "Contraste: neutro o enfático",
    "La misma información con y sin énfasis: aprende qué matiz añade cada estructura.",
    "7 min",
    [
      sec(
        "¿Qué destaca cada versión?",
        [
          "Recuerda la regla: la misma información cambia de matiz según el orden. Orden neutro (sujeto + verbo + objeto): solo informa, todo es nuevo. Anteposición: el objeto pasa al principio porque ya se está hablando de él (es el tema), y se retoma con lo / la / los / las.",
          "Frase hendida (ser + elemento + quien / donde / cuando / lo que): contrasta o corrige, es decir, fue X y no otro. Por eso es la respuesta natural cuando alguien se equivoca de persona. Lo + adjetivo o adverbio + que: no añade información, sino grado, normalmente sorpresa o admiración.",
          "Para elegir, pregúntate qué quieres hacer: ¿informar, retomar un tema, corregir a alguien o mostrar asombro?",
        ],
        [
          ["Juan rompió el jarrón.", "Juan broke the vase. (neutral)"],
          ["El jarrón lo rompió Juan.", "The vase, Juan broke it. (topic: the vase)"],
          ["Fue Juan quien rompió el jarrón.", "It was Juan who broke the vase. (not someone else)"],
        ],
        [
          mc(
            "Alguien acusa a Pedro. Tú sabes que fue Ana. ¿Qué dices?",
            ["No, fue Ana quien lo hizo.", "Ana lo hizo, sí.", "Lo hizo.", "Lo que hizo Ana."],
            0,
            "Para corregir a alguien y destacar quién lo hizo se usa una hendida: «No, fue Ana quien lo hizo». «Ana lo hizo, sí» confirma en vez de corregir, y «Lo hizo» no dice quién."
          ),
        ]
      ),
    ],
    [
      fb("Transforma la frase: antepón el tema.", "Compré el pan esta mañana. → El pan ___ compré esta mañana.", "lo", "El complemento directo antepuesto se retoma con pronombre: «el pan» → «lo»."),
      { ...fb("Transforma la frase en una hendida de contraste.", "Llamé a tu madre, no a tu padre. → Fue a tu madre a ___ llamé.", "quien", "Frase hendida con preposición: la preposición se repite delante del relativo (a tu madre → a quien / a la que). Sin la segunda «a» la frase queda incompleta."), altAnswers: ["la que"] },
      fb("Transforma la frase para expresar el grado.", "Hemos subido montañas enormes. → ¡No sabes lo ___ que son las montañas! (alto)", "altas", "Lo es neutro, pero el adjetivo concuerda con montañas: lo altas que son. «Lo alto» solo valdría con un sustantivo masculino singular."),
      mt(
        "Relaciona cada versión con su función.",
        [
          ["Ana escribió el informe.", "informar"],
          ["El informe lo escribió Ana.", "marcar el tema"],
          ["Fue Ana quien escribió el informe.", "contrastar"],
          ["¡Lo bien que escribe Ana!", "expresar admiración"],
        ],
        "El orden neutro informa, la anteposición retoma un tema ya conocido (el informe), la hendida contrasta (Ana y no otra persona) y lo + adverbio + que expresa admiración por el grado."
      ),
      ms(
        "¿Qué versiones enfáticas son correctas?",
        ["A mi abuela la visito cada domingo.", "Es aquí donde vivo.", "Fue ayer cuando llegó.", "Los deberes, no los he hecho."],
        [0, 1, 2, 3],
        "Las cuatro son correctas: en las hendidas de tiempo la forma estándar es «cuando» («fue ayer cuando llegó»)."
      ),
      toEs("It's the price that worries me, not the quality.", "Es el precio lo que me preocupa, no la calidad.", "Para destacar una cosa se usa «ser» + elemento + «lo que»: «Es el precio lo que…».", ["Lo que me preocupa es el precio, no la calidad.", "Es el precio lo que me preocupa y no la calidad.", "Es el precio el que me preocupa, no la calidad."]),
      wo("A ese restaurante no vuelvo nunca más.", "Anteposición del complemento para marcar el tema.", "I'm never going back to that restaurant."),
    ]
  ),
  L(
    "cuyo-el-cual-2",
    "b2r-transform-join-cuyo",
    "Transformaciones: une las frases con cuyo",
    "Convierte «su» en «cuyo»: un escritor cuyos libros…, una ciudad cuyas calles…",
    "7 min",
    [
      sec(
        "De «su» a «cuyo»",
        [
          "Recuerda la regla: cuyo sustituye a un posesivo (su/sus), y por eso concuerda como él, con lo poseído y no con el poseedor: la mujer cuyo hijo…, el hombre cuyas hijas… El bloque «cuyo + sustantivo» va siempre al principio de la relativa, aunque en la frase original estuviera al final (Leí su novela → cuya novela leí).",
          "Si lo poseído llevaba preposición, la preposición viaja con él y se coloca delante de cuyo: Me quedé en su casa → la amiga en cuya casa me quedé; Gané gracias a su ayuda → el abogado gracias a cuya ayuda gané. Nunca «que en su casa»: en un registro cuidado, «que su» se considera incorrecto.",
        ],
        [
          ["Conocí a una escritora. Sus libros son famosos. → Conocí a una escritora cuyos libros son famosos.", "I met a writer whose books are famous. (sus libros → cuyos libros)"],
          ["Es el autor. Leí su novela. → Es el autor cuya novela leí.", "He's the author whose novel I read. (cuya novela pasa al principio)"],
          ["Es la amiga. Me quedé en su casa. → Es la amiga en cuya casa me quedé.", "She's the friend at whose house I stayed. (la preposición va delante)"],
        ],
        [
          fb("Une con cuyo.", "Es el vecino. Su perro ladra toda la noche. → Es el vecino ___ perro ladra toda la noche.", "cuyo", "«Su» se sustituye por «cuyo», que concuerda con «perro» (masculino singular)."),
          fb("Une con preposición + cuyo.", "Es el profesor. Aprobé gracias a sus apuntes. → Es el profesor gracias a ___ apuntes aprobé.", "cuyos", "La locución gracias a se adelanta con lo poseído, y cuyos concuerda con apuntes (masculino plural)."),
        ]
      ),
    ],
    [
      fb("Une con cuyo.", "Es una empresa. Sus empleados trabajan desde casa. → Es una empresa ___ empleados trabajan desde casa.", "cuyos", "«Sus» se sustituye por «cuyos», que concuerda con «empleados» (masculino plural)."),
      fb("Une con cuyo.", "Visitamos un pueblo. Sus calles son estrechas. → Visitamos un pueblo ___ calles son estrechas.", "cuyas", "«Sus» se sustituye por «cuyas», que concuerda con «calles» (femenino plural)."),
      fb("Une con cuyo.", "Es la directora. Vi su documental. → Es la directora ___ documental vi.", "cuyo", "«Su documental» era el objeto de vi: pasa al principio como «cuyo documental», masculino aunque la directora sea mujer."),
      fb("Une con preposición + cuyo.", "Es el pueblo. Nací en sus montañas. → Es el pueblo en ___ montañas nací.", "cuyas", "La preposición en se adelanta con lo poseído: en cuyas montañas, que concuerda con montañas (femenino plural)."),
      mc(
        "«The student whose parents are doctors…»",
        ["El alumno cuyos padres son médicos…", "El alumno cuyo padres son médicos…", "El alumno quien padres son médicos…", "El alumno que sus padres son médicos…"],
        0,
        "«Cuyo» concuerda con lo poseído: cuyos padres (masculino plural). «Cuyo padres» no concuerda, «quien» no expresa posesión, y «que sus padres» se oye en el habla, pero la norma no lo acepta."
      ),
      toEs("It's a country whose history I don't know well.", "Es un país cuya historia no conozco bien.", "«Cuyo» concuerda con lo poseído («historia»), no con «un país».", ["Es un país cuya historia no conozco muy bien."]),
      wo("La película, cuyo final nadie esperaba, ganó tres premios.", "Cuyo también funciona en una relativa explicativa, entre comas; concuerda con final (masculino), no con película.", "The film, whose ending nobody expected, won three awards."),
    ]
  ),
  L(
    "cuyo-el-cual-2",
    "b2r-error-hunt-cuyo-el-cual",
    "Caza de errores: cuyo, el cual y lo cual",
    "Corrige los errores típicos con cuyo (concordancia, «que su»), el cual (necesita preposición y artículo) y lo cual (idea completa).",
    "7 min",
    [
      sec(
        "Errores con cuyo",
        [
          "Recuerda la regla y los tres errores que provoca. Cuyo ocupa el lugar de «su», así que concuerda con lo poseído y no lleva artículo. (1) Concordar con el poseedor, por influencia del inglés: ✗ la mujer cuya hijo → ✓ cuyo hijo. (2) Usar «que su», muy oído en la conversación pero incorrecto en un registro cuidado: ✗ el chico que su padre → ✓ el chico cuyo padre. (3) Añadir artículo: ✗ cuyos los libros → ✓ cuyos libros.",
          "Para cazar el error, pregúntate primero: ¿hay posesión? Si la hay, busca cuyo; después mira solo el sustantivo que viene detrás.",
        ],
        [
          ["✗ Es la profesora que su clase me encanta. → ✓ Es la profesora cuya clase me encanta.", "She's the teacher whose class I love. (que su → cuya)"],
          ["✗ El escritor cuyos las novelas leí. → ✓ El escritor cuyas novelas leí.", "The writer whose novels I read. (sin artículo, concordando con novelas)"],
        ],
        [
          fb("Corrige.", "Es el museo ___ colección es la más grande del país. (el alumno escribió: que su)", "cuya", "Hay posesión (su colección), así que el relativo es cuyo, no «que su»; concuerda con colección: cuya."),
        ]
      ),
      sec(
        "El cual y lo cual",
        [
          "El cual / la cual concuerdan con un sustantivo antecedente y se usan sobre todo tras preposiciones (siempre con artículo: ✗ por cual → ✓ por la cual) o en explicativas formales. Lo cual, neutro, no tiene sustantivo detrás: retoma toda una idea anterior.",
          "Los errores típicos: usar el cual / la cual para una idea completa (✗ Llegó tarde, el cual me molestó), quitar el artículo tras preposición (✗ en cual) y olvidar la preposición que exige el verbo (hablar de → los problemas de los cuales hablamos).",
        ],
        [
          ["Llegó tarde, lo cual me molestó.", "He arrived late, which bothered me. (lo cual → el hecho de llegar tarde)"],
          ["La razón por la cual no vine…", "The reason why I didn't come… (la cual → razón, tras preposición)"],
        ],
        [
          mc(
            "«Suspendió el examen, ___ sorprendió a todos.»",
            ["lo cual", "la cual", "el cual", "cuyo"],
            0,
            "Cuando el relativo se refiere a toda la idea anterior (que suspendió), se usa el neutro «lo cual». «La cual» y «el cual» necesitan un sustantivo, y «cuyo» expresa posesión."
          ),
        ]
      ),
    ],
    [
      fb("Corrige.", "El señor ___ hijas viven en Canadá es mi tío. (el alumno escribió: cuyo)", "cuyas", "«Cuyo» concuerda con lo poseído («hijas»), no con «el señor»: «cuyas»."),
      { ...fb("Corrige.", "Perdí el tren, ___ significa que llegaré tarde. (el alumno escribió: el cual)", "lo cual", "Para referirse a toda la idea anterior se usa el neutro «lo cual», no «el cual»."), altAnswers: ["lo que"] },
      fb("Corrige.", "Es el puente debajo ___ dormían los mendigos. (el alumno escribió: que)", "del cual", "«Debajo» necesita «de» + artículo: «debajo del cual» (o «debajo del que»); «debajo que» es incorrecto."),
      ms(
        "¿Qué frases son correctas?",
        ["La casa en la cual crecí ya no existe.", "El autor cuya obra estudiamos es chileno.", "Me mintió, lo cual no le perdono.", "El chico cuyo la madre es médica."],
        [0, 1, 2],
        "Tras «cuyo» nunca va artículo: «el chico cuya madre es médica». En «cuyo la madre» sobra «la», y además «cuyo» debe concordar con «madre»."
      ),
      mc(
        "¿Cuál es correcta?",
        ["Los motivos por los cuales dimitió no están claros.", "Los motivos por los cuyos dimitió no están claros.", "Los motivos por lo cual dimitió no están claros.", "Los motivos por cuales dimitió no están claros."],
        0,
        "Tras preposición, «el cual» concuerda con el antecedente: «motivos» → «por los cuales». «Los cuyos» no existe, y «lo cual» o «cuales» sin artículo no concuerdan."
      ),
      toEs("She won the prize, which surprised nobody.", "Ganó el premio, lo cual no sorprendió a nadie.", "Lo que no sorprendió es el hecho de ganar, una idea completa: lo cual. «El cual» se referiría al premio.", ["Ganó el premio, lo que no sorprendió a nadie."]),
      wo("Hay decisiones cuyas consecuencias duran toda la vida.", "Cuyas concuerda con consecuencias (lo poseído), no con decisiones.", "There are decisions whose consequences last a lifetime."),
    ]
  ),
  L(
    "cuyo-el-cual-2",
    "b2r-mission-formal-text",
    "Misión real: un texto formal",
    "Practica cuyo, el cual, lo cual y los conectores formales en una ficha de museo, una nota de prensa y un correo formal al ayuntamiento.",
    "8 min",
    [
      sec(
        "La ficha del museo",
        [
          "Tu misión: redactar la ficha de un museo, una nota de prensa y un correo al ayuntamiento. Recuerda por qué los textos formales usan cuyo, el cual y lo cual: condensan en una sola frase lo que en la conversación serían dos o tres. Cuyo (concordando con lo poseído) sustituye a «y su…»; el cual tras preposición (en la cual, según el cual) sustituye a «y en ella…»; lo cual, tras coma, comenta toda la idea anterior («y eso…»).",
          "El registro también se nota en el léxico: «la falta de fondos» en vez de «no había pasta», «se aplaza» en vez de «lo pasan para otro día», y en la pasiva refleja (se exponen, se guardan), que evita decir quién lo hace.",
        ],
        [
          ["El museo, cuya colección supera las diez mil piezas, fue fundado en 1890.", "The museum, whose collection exceeds ten thousand pieces, was founded in 1890. (= y su colección…)"],
          ["La sala principal, en la cual se exponen obras de Goya, reabrirá en mayo.", "The main hall, in which works by Goya are displayed, will reopen in May. (= y en ella…)"],
          ["La obra se retrasó, lo cual obligó a aplazar la apertura.", "The building work was delayed, which forced the opening to be postponed. (= y eso…)"],
        ],
        [
          fb("Completa la ficha.", "El arquitecto, ___ proyectos se encuentran en tres continentes, diseñó la nueva ala.", "cuyos", "«Cuyo» concuerda con lo poseído («proyectos»), no con «el arquitecto»."),
          mc("Escribes la ficha. ¿Qué frase condensa mejor «El palacio es del siglo XVI. En él vivió la reina»?", ["El palacio, en el cual vivió la reina, es del siglo XVI.", "El palacio, cuyo vivió la reina, es del siglo XVI.", "El palacio, lo cual vivió la reina, es del siglo XVI.", "El palacio, que vivió en él la reina, es del siglo XVI."], 0, "«En él» se convierte en preposición + el cual (en el cual), concordando con palacio. Cuyo indica posesión, lo cual retoma ideas completas y «que… en él» es coloquial."),
        ]
      ),
    ],
    [
      { ...fb("Completa la nota de prensa.", "La exposición se prorrogará hasta junio, ___ permitirá recibir a más visitantes.", "lo cual", "Para referirse a toda la idea anterior (la prórroga) se usa el neutro «lo cual»."), altAnswers: ["lo que"] },
      { ...fb("Completa la nota de prensa.", "Los cuadros, algunos de ___ nunca se habían expuesto, llegarán de Madrid.", "los cuales", "Tras cuantificadores como «algunos de» se usa «los cuales», concordando con «cuadros»."), altAnswers: ["los que"] },
      fb("Completa la nota de prensa.", "La directora, ___ gestión ha sido muy elogiada, se jubila este año.", "cuya", "«Cuyo» concuerda con lo poseído: «gestión» es femenino singular."),
      mt(
        "Relaciona cada relativo con su uso.",
        [
          ["cuyo/a/os/as", "posesión"],
          ["lo cual", "idea completa"],
          ["el/la cual", "tras preposición (formal)"],
          ["quien", "persona"],
        ],
        "Resumen de relativos avanzados: cada uno tiene un trabajo distinto en el texto formal."
      ),
      mc(
        "¿Qué versión es más formal?",
        ["La razón por la cual se cerró el museo fue la falta de fondos.", "Cerraron el museo porque no había pasta.", "El museo cerró por lo del dinero.", "Lo cerraron y ya."],
        0,
        "«La razón por la cual» y «la falta de fondos» son de registro formal. «Pasta», «lo del dinero» y «y ya» son coloquiales."
      ),
      toEs("The city, whose streets are very narrow, has banned cars.", "La ciudad, cuyas calles son muy estrechas, ha prohibido los coches.", "«Cuyo» concuerda con lo poseído («calles»); «ha prohibido» presenta un hecho reciente.", ["La ciudad, cuyas calles son muy estrechas, prohibió los coches."]),
      wo("Se presentó un informe según el cual la situación ha mejorado.", "Según el cual = according to which: tras según hace falta artículo + cual, que concuerda con informe.", "A report was presented according to which the situation has improved."),
    ]
  ),
  L(
    "cuyo-el-cual-2",
    "b2r-spiral-subjunctive-universe",
    "Repaso en espiral: el universo del subjuntivo",
    "Repaso de las primeras unidades del nivel Avanzado: relativas, adverbiales, imperfecto de subjuntivo y condicionales de tipo 2 y 3.",
    "9 min",
    [
      sec(
        "Una carta de un mentor",
        [
          "Recuerda el hilo común de todos los usos del subjuntivo: aparece cuando lo que dices no se presenta como un hecho comprobado. Un antecedente que todavía no existe (busca un trabajo que te apasione), una acción futura tras cuando, en cuanto o antes de que (cuando tengas mi edad), una concesión hipotética (aunque te paguen menos), una finalidad (para que) o una hipótesis (si tuviera, si hubiera sido).",
          "Lee el fragmento de la carta de un mentor y fíjate en cuántos usos distintos aparecen. Recuerda también la concordancia: con el verbo principal en pasado o condicional, imperfecto de subjuntivo (me pidió que no lo dijera).",
        ],
        [
          ["Busca un trabajo que te apasione, aunque te paguen menos.", "Look for a job that you're passionate about, even if they pay you less."],
          ["Cuando tengas mi edad, entenderás lo que te digo.", "When you're my age, you'll understand what I'm telling you."],
          ["Si yo tuviera veinte años, viajaría más; si hubiera sido más valiente, habría cambiado de carrera.", "If I were twenty, I'd travel more; if I'd been braver, I'd have changed careers."],
        ],
        [
          ms(
            "¿Qué estructuras aparecen en la carta?",
            ["relativa con subjuntivo", "aunque + subjuntivo", "cuando + subjuntivo", "estilo indirecto"],
            [0, 1, 2],
            "El fragmento usa una relativa con subjuntivo, «aunque» + subjuntivo y «cuando» + subjuntivo. En cambio, no reproduce palabras de otra persona, así que no hay estilo indirecto."
          ),
          fb("Responde al mentor.", "Si no me lo ___ dicho, no lo habría intentado. (haber, usted)", "hubiera", "Si + pluscuamperfecto de subjuntivo."),
        ]
      ),
    ],
    [
      fb("Completa.", "No hay nadie que ___ tanto como tú. (saber)", "sepa", "Antecedente inexistente (no hay nadie) → subjuntivo irregular de saber: sepa."),
      fb("Completa.", "Te lo explico para que no ___ el mismo error. (cometer, tú)", "cometas", "Para que con otro sujeto → subjuntivo; explico está en presente, así que presente de subjuntivo: cometas."),
      fb("Completa.", "Me pidió que no se lo ___ a nadie. (decir, yo)", "dijera", "Pedir en pasado → que + imperfecto de subjuntivo, con la raíz irregular de decir: dijera."),
      fb("Completa.", "Si ___ más dinero, me compraría un piso. (ganar, yo)", "ganara", "Hipótesis sobre el presente: si + imperfecto de subjuntivo (ganara) y condicional (compraría)."),
      mc(
        "«I wish I had listened to you.»",
        ["Ojalá te hubiera hecho caso.", "Ojalá te hacía caso.", "Ojalá te haga caso ayer.", "Ojalá te habría hecho caso."],
        0,
        "«Ojalá» + pluscuamperfecto de subjuntivo expresa lamento por el pasado: «hubiera hecho caso». «Habría hecho» es condicional y «hacía» es indicativo."
      ),
      toEs("Even if it rains, we'll go.", "Aunque llueva, iremos.", "«Aunque» + subjuntivo presenta una posibilidad no confirmada: «aunque llueva».", ["Aunque llueva, vamos a ir.", "Iremos aunque llueva."]),
      wo("Me habló como si nos conociéramos de toda la vida.", "Como si compara con algo irreal: siempre imperfecto (o pluscuamperfecto) de subjuntivo.", "He talked to me as if we'd known each other all our lives."),
    ]
  ),
  L(
    "cuyo-el-cual-2",
    "b2r-spiral-precision-tools",
    "Repaso en espiral: las herramientas de precisión",
    "Repaso de las unidades centrales del nivel Avanzado: estilo indirecto, ser/estar/haber, verbos de cambio, conectores, énfasis y relativos.",
    "9 min",
    [
      sec(
        "Una noticia",
        [
          "Recuerda las herramientas de precisión del nivel Avanzado y la pregunta que resuelve cada una. Estilo indirecto: ¿desde cuándo cuento lo dicho? (futuro → condicional: estaría listo). Ser, estar, haber: ¿es un evento, una cosa localizada o algo que existe? Verbos de cambio: ¿es pasajero (ponerse), de carácter (volverse), un logro (hacerse, llegar a ser) o una transformación (convertirse en)?",
          "Conectores: ¿qué relación hay con la idea anterior (sin embargo, no obstante = contraste)? Énfasis: ¿qué quiero destacar (lo que más…, fue… quien)? Relativos: ¿hay posesión (cuyo, concordando con lo poseído)? Lee la noticia y localiza cada herramienta.",
        ],
        [
          ["El alcalde declaró que el nuevo parque estaría listo en junio.", "The mayor stated that the new park would be ready in June."],
          ["Sin embargo, los vecinos, cuyas quejas se han multiplicado, se han puesto nerviosos.", "However, the residents, whose complaints have multiplied, have become nervous."],
          ["Lo que más les preocupa es que no hay suficientes árboles.", "What worries them most is that there aren't enough trees."],
        ],
        [
          mt(
            "Relaciona cada fragmento con la herramienta del nivel Avanzado.",
            [
              ["declaró que estaría listo", "estilo indirecto"],
              ["cuyas quejas", "relativo posesivo"],
              ["se han puesto nerviosos", "verbo de cambio"],
              ["Lo que más les preocupa", "énfasis"],
            ],
            "Cuatro herramientas en tres frases."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "El alcalde prometió que ___ más árboles. (plantar, ellos)", "plantarían", "Estilo indirecto: el futuro de la promesa («plantaremos») pasa a condicional, plantarían."),
      fb("Completa.", "La inauguración ___ en la plaza mayor. (ser, futuro)", "será", "Una inauguración es un evento: su lugar se expresa con ser, nunca con estar."),
      fb("Completa.", "Con los años, el barrio ___ en uno de los más caros. (convertirse, perfecto)", "se ha convertido", "Convertirse en + sustantivo para una transformación completa; perfecto porque llega hasta hoy."),
      { ...fb("Completa.", "El proyecto es caro; ___, es necesario. (nevertheless)", "no obstante", "Conector de contraste formal: no obstante (= sin embargo) introduce una idea que se opone a la anterior."), altAnswers: ["sin embargo"] },
      ms(
        "¿Qué frases son correctas?",
        ["Fue el alcalde quien lo anunció.", "Había muchos vecinos en la reunión.", "Me dijo que venía al día siguiente.", "El parque, cuyos diseño es moderno, ya está listo."],
        [0, 1, 2],
        "«Cuyo» concuerda con lo poseído, no con el poseedor: «cuyo diseño». «Cuyos diseño» es incorrecta porque «diseño» es singular."
      ),
      toEs("She told me that she had become a vegetarian.", "Me dijo que se había hecho vegetariana.", "En estilo indirecto, el pasado pasa a pluscuamperfecto; «hacerse» expresa un cambio decidido.", ["Me contó que se había hecho vegetariana.", "Me dijo que se había vuelto vegetariana."]),
      wo("Lo difícil que es encontrar piso en esta ciudad es increíble.", "Lo + adjetivo + que funciona como sujeto enfático: «lo difícil que es» = how hard it is.", "How hard it is to find an apartment in this city is incredible."),
    ]
  ),
  L(
    "subjunctive-adjective-clauses-drill-3",
    "b2r-dialogue-ideal-partner",
    "Laboratorio de diálogo: en busca de la pareja ideal",
    "Una agencia de citas pregunta qué buscas — y tú describes a alguien que quizá no existe.",
    "7 min",
    [
      sec(
        "La entrevista",
        [
          "Recuerda la regla: describir a la pareja ideal (alguien que aún no conoces y que quizá no existe) exige subjuntivo en la relativa: busco a alguien que tenga sentido del humor. Describir a tu ex o a alguien con quien sales (una persona real y conocida) va en indicativo: mi ex era alguien que nunca quería salir.",
          "En la conversación con la agencia, fíjate en qué persona se describe en cada respuesta: el deseo pide subjuntivo; la realidad, indicativo. Las preguntas sobre si existe alguien (¿tienen a alguien que…?) y las negaciones (no soporto a nadie que…) también van en subjuntivo.",
        ],
        [
          ["—Busco a alguien que tenga sentido del humor y a quien le guste viajar.", "I'm looking for someone who has a sense of humor and likes to travel."],
          ["—Mi ex era alguien que nunca quería salir de casa.", "My ex was someone who never wanted to leave the house."],
        ],
        [
          fb("Completa.", "Quiero a alguien que me ___ tal como soy. (aceptar)", "acepte", "Persona desconocida → subjuntivo."),
          fb("Completa.", "Mi última pareja era una persona que ___ demasiado. (trabajar, imperfecto)", "trabajaba", "Persona conocida → indicativo."),
          mc(
            "La agente pregunta: «¿Y cómo era su última pareja?» ¿Qué contesta usted?",
            ["Era alguien que no tenía tiempo para nada.", "Era alguien que no tuviera tiempo para nada.", "Sería alguien que no tenga tiempo para nada.", "Es alguien que no tuviera tiempo para nada."],
            0,
            "Su última pareja es una persona real y conocida, descrita en el pasado: indicativo imperfecto (tenía). Las formas de subjuntivo la presentarían como alguien imaginado."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "No me interesa nadie que ___ fumador. (ser)", "sea", "Antecedente indeterminado negado → subjuntivo."),
      fb("Completa.", "¿Conoce usted a alguien que ___ con mi perfil? (encajar)", "encaje", "Pregunta sobre la existencia → subjuntivo."),
      fb("Completa.", "Tenemos un cliente que ___ exactamente lo mismo que usted. (buscar)", "busca", "Cliente real → indicativo."),
      mt(
        "Relaciona cada deseo con su versión real.",
        [
          ["Busco a alguien que cocine.", "Salgo con alguien que cocina."],
          ["Quiero una casa que tenga jardín.", "Vivo en una casa que tiene jardín."],
          ["Necesito un trabajo que me guste.", "Tengo un trabajo que me gusta."],
          ["Prefiero un perro que sea tranquilo.", "Tengo un perro que es tranquilo."],
        ],
        "Deseo (desconocido) → subjuntivo; realidad (conocido) → indicativo."
      ),
      toEs("I've never met anyone who understands me like you.", "Nunca he conocido a nadie que me entienda como tú.", "Con un antecedente negativo («nadie»), la relativa va en subjuntivo: «entienda».", ["Nunca conocí a nadie que me entendiera como tú.", "No he conocido a nadie que me entienda como tú."]),
      wo("Lo que busco es alguien con quien pueda hablar de todo.", "Relativa con preposición + subjuntivo.", "What I'm looking for is someone I can talk to about everything."),
      mc(
        "La agente pregunta: «¿Hay algo que no soporte en una pareja?» ¿Qué responde usted?",
        ["No soporto a nadie que sea impuntual.", "No soporto a nadie que es impuntual.", "No soporto a nadie que fue impuntual.", "No soporto a nadie que será impuntual."],
        0,
        "Con nadie el antecedente es negativo, así que la relativa va en subjuntivo: sea. Las formas de indicativo describirían a una persona concreta."
      ),
      toEs("Busco a alguien que sepa cocinar.", "Salgo con alguien que sabe cocinar.", "Del deseo (persona desconocida, sepa) a la realidad (persona con la que ya sales, sabe): la relativa pasa a indicativo.", [], "Cambia del deseo a la realidad empezando por «Salgo con alguien que…»."),
      toEs("Mi ex era alguien que nunca mentía.", "Mi pareja ideal sería alguien que nunca mintiera.", "Tu ex es real (indicativo: mentía); la pareja ideal es imaginada, y con el condicional sería la relativa va en imperfecto de subjuntivo: mintiera.", ["Mi pareja ideal sería alguien que nunca mintiese.", "Mi pareja ideal sería alguien que no mintiera nunca."], "Cambia «Mi ex era» por «Mi pareja ideal sería» y adapta el verbo."),
      toEs("Mi vecino habla tres idiomas.", "¿Tienen ustedes a alguien que hable tres idiomas?", "Al preguntar a la agencia si existe esa persona, el antecedente es desconocido y la relativa va en subjuntivo: hable.", ["¿Tienen a alguien que hable tres idiomas?"], "Transforma en una pregunta a la agencia: «¿Tienen ustedes a alguien que…?»."),
    ]
  ),
  L(
    "subjunctive-adjective-clauses-drill-3",
    "b2r-mission-hotel-review",
    "Misión real: la reseña de un hotel",
    "Un hotel desastroso: no había nada que funcionara, no encontramos a nadie que nos ayudara…",
    "7 min",
    [
      sec(
        "La queja",
        "En el pasado, las relativas con antecedente inexistente usan el imperfecto de subjuntivo.",
        [
          ["No había ni un solo enchufe que funcionara.", "There wasn't a single socket that worked."],
          ["No encontramos a nadie que hablara inglés.", "We didn't find anyone who spoke English."],
        ],
        [
          fb("Completa la reseña.", "No había nadie en recepción que ___ resolver el problema. (saber)", "supiera", "Antecedente inexistente en pasado → imperfecto de subjuntivo."),
        ]
      ),
      sec(
        "Lo positivo",
        "Lo que sí existía se describe en indicativo.",
        [
          ["El único que nos ayudó fue un camarero que hablaba cuatro idiomas.", "The only one who helped us was a waiter who spoke four languages."],
        ],
        [
          fb("Completa.", "La habitación tenía unas vistas que ___ increíbles. (ser, imperfecto)", "eran", "Algo que existía → indicativo."),
        ]
      ),
    ],
    [
      fb("Completa.", "Pedimos una habitación que no ___ ruido. (tener)", "tuviera", "Algo buscado (desconocido) en pasado → imperfecto de subjuntivo."),
      fb("Completa.", "Nos dieron una habitación que ___ encima de la discoteca. (estar)", "estaba", "Habitación concreta → indicativo."),
      fb("Completa.", "Recomiendo este hotel a cualquiera que ___ dormir poco. (querer)", "quiera", "Cualquiera que + subjuntivo."),
      ms(
        "¿Qué frases son correctas?",
        ["No había nada que me gustara.", "Buscábamos un restaurante que estuviera abierto.", "Encontramos un bar que tuviera terraza.", "El recepcionista, que era muy amable, nos ayudó."],
        [0, 1, 3],
        "Si el bar ya lo encontramos, existe y es concreto, así que la relativa va en indicativo: «que tenía terraza». «Que tuviera» es incorrecta aquí."
      ),
      mc(
        "«There was nothing on the menu that we could eat.»",
        ["No había nada en la carta que pudiéramos comer.", "No había nada en la carta que podíamos comer.", "No había nada en la carta que podamos comer ayer.", "No hay nada en la carta que pudimos comer."],
        0,
        "Con un antecedente inexistente en pasado («no había nada»), la relativa va en imperfecto de subjuntivo: «pudiéramos». «Podíamos» es indicativo, y «podamos… ayer» no concuerda."
      ),
      toEs("We didn't see anything that was worth the price.", "No vimos nada que valiera lo que costaba.", "Con un antecedente inexistente en pasado («nada»), la relativa va en imperfecto de subjuntivo: «valiera».", ["No vimos nada que mereciera la pena por ese precio.", "No vimos nada que valiera el precio."]),
      wo("Busqué por todas partes una farmacia que estuviera abierta toda la noche.", "Buscar + relativa en imperfecto de subjuntivo.", "I looked everywhere for a pharmacy that was open all night."),
    ]
  ),
  L(
    "subjunctive-adjective-clauses-drill-3",
    "b2r-transform-affirm-negate-antecedent",
    "Transformaciones: hay alguien que sabe → no hay nadie que sepa",
    "Niega el antecedente y observa cómo el indicativo se convierte en subjuntivo.",
    "7 min",
    [
      sec(
        "Afirmar y negar la existencia",
        [
          "Recuerda la regla: hay alguien que + indicativo → no hay nadie que + subjuntivo. Conozco un sitio donde + indicativo → no conozco ningún sitio donde + subjuntivo. Al negar, alguien pasa a nadie, algo a nada y un/una a ningún/ninguna, y el verbo de la relativa cambia de modo. En pasado, el subjuntivo es el imperfecto: no había nadie que pudiera.",
          "Por qué: el indicativo describe algo que el hablante presenta como real; si niegas que exista, ya no hay nada real que describir, y el español lo marca con el subjuntivo. Ojo: con nadie como sujeto directo (nadie sabe) no hay relativa, así que va indicativo.",
        ],
        [
          ["Hay alguien que sabe la respuesta. → No hay nadie que sepa la respuesta.", "Somebody knows. → Nobody knows."],
          ["Tengo un amigo que vive allí. → No tengo ningún amigo que viva allí.", "I have a friend who lives there. → I don't have any friend who lives there."],
        ],
        [
          fb("Niega el antecedente.", "Hay algo que me preocupa. → No hay nada que me ___.", "preocupe", "Al negar el antecedente («nada»), la relativa pasa a subjuntivo: «preocupe»."),
          mc(
            "Niega: «Conozco a alguien que baila tango.»",
            ["No conozco a nadie que baile tango.", "No conozco a nadie que baila tango.", "No conozco a alguien que baile tango.", "Conozco a nadie que baile tango."],
            0,
            "Alguien pasa a nadie, se añade no delante del verbo y la relativa cambia a subjuntivo: baile. «No conozco a alguien» no es la negación natural y «conozco a nadie» necesita el no."
          ),
        ]
      ),
    ],
    [
      fb("Niega el antecedente.", "Conozco un restaurante que abre los lunes. → No conozco ningún restaurante que ___ los lunes.", "abra", "Al negar el antecedente («ningún restaurante»), la relativa pasa a subjuntivo: «abra»."),
      fb("Afirma el antecedente.", "No hay ninguna tienda que venda eso. → Hay una tienda que ___ eso.", "vende", "Si el antecedente existe («hay una tienda»), la relativa va en indicativo: «vende»."),
      fb("Niega el antecedente (pasado).", "Había alguien que podía ayudarnos. → No había nadie que ___ ayudarnos.", "pudiera", "Al negar el antecedente en pasado («no había nadie»), la relativa va en imperfecto de subjuntivo: «pudiera»."),
      fb("Niega el antecedente.", "Tengo un libro que explica esto. → No tengo ningún libro que lo ___.", "explique", "Al negar el antecedente («ningún libro»), la relativa pasa a subjuntivo: «explique»."),
      mc(
        "«Alguien entiende este manual.» → negado:",
        ["Nadie entiende este manual.", "No hay nadie que entienda este manual.", "Las dos son correctas.", "Ninguna es correcta."],
        2,
        "Las dos son correctas: «Nadie entiende este manual» niega con «nadie» como sujeto y lleva indicativo, y «No hay nadie que entienda» usa una relativa con antecedente inexistente, que pide subjuntivo. Por eso «Ninguna es correcta» no vale."
      ),
      toEs("There's no one in my family who speaks French.", "No hay nadie en mi familia que hable francés.", "Con un antecedente negativo («nadie»), la relativa va en subjuntivo: «hable».", ["En mi familia no hay nadie que hable francés."]),
      wo("No existe ninguna fórmula que garantice el éxito.", "No existe + relativa en subjuntivo.", "There's no formula that guarantees success."),
    ]
  ),
  L(
    "subjunctive-adverbial-clauses-drill-3",
    "b2r-contrast-aunque",
    "Contraste: aunque llueve / aunque llueva",
    "Aunque con indicativo (hecho conocido) y con subjuntivo (hipótesis o hecho que no importa).",
    "7 min",
    [
      sec(
        "Recuerda la regla",
        [
          "Recuerda la regla: aunque + indicativo = although (es un hecho y lo reconozco). Aunque + presente de subjuntivo = even if (no sé si es cierto) o even though (es cierto, pero no me importa). Aunque + imperfecto de subjuntivo = hipótesis poco probable o irreal, con condicional en la otra parte: aunque tuviera tiempo, no iría.",
          "Por qué: con el indicativo el hablante informa de algo que sabe que es verdad; con el subjuntivo no lo afirma, solo lo admite como posible o lo deja de lado como irrelevante. Ojo: detrás de aunque nunca va el condicional (aunque tendría ✗) para una hipótesis.",
        ],
        [
          ["Aunque llueve, voy a salir.", "Although it's raining, I'm going out. (it IS raining)"],
          ["Aunque llueva, voy a salir.", "Even if it rains, I'm going out. (it might)"],
        ],
        [
          mc(
            "Está nevando ahora mismo. ¿Qué dices?",
            ["Aunque nieva, iremos a la montaña.", "Aunque nieve mañana, iremos.", "Aunque nevaría, iremos.", "Aunque nevar, iremos."],
            0,
            "Para un hecho real y conocido (está nevando), «aunque» va con indicativo: «aunque nieva». «Aunque nieve mañana» sería una posibilidad, y «nevaría» o «nevar» no funcionan tras «aunque»."
          ),
          fb("¿Hecho o hipótesis?", "Aunque me ___ el doble, no cambiaría de trabajo. (pagar, ellos; hipótesis poco probable)", "pagaran", "Hipótesis poco probable con condicional en la otra parte (cambiaría): aunque + imperfecto de subjuntivo (pagaran). Pagarían (condicional) no va detrás de aunque."),
        ]
      ),
    ],
    [
      fb("¿Hecho o hipótesis?", "Aunque ___ mucho dinero, no es feliz. (tener, él; es un hecho)", "tiene", "Es un hecho que reconoces → aunque + indicativo (tiene)."),
      fb("¿Hecho o hipótesis?", "Aunque me ___ un millón, no lo haría. (ofrecer, ellos; hipótesis)", "ofrecieran", "Hipótesis improbable con condicional (haría) → imperfecto de subjuntivo (ofrecieran)."),
      fb("¿Hecho o hipótesis?", "Aunque ___ cansado, terminaré el informe. (estar, yo; quizá lo esté)", "esté", "Hipótesis futura, no sabes si lo estarás → presente de subjuntivo (esté)."),
      mt(
        "Relaciona cada frase con su traducción.",
        [
          ["Aunque es caro, lo compro.", "Although it's expensive, I'm buying it."],
          ["Aunque sea caro, lo compraré.", "Even if it's expensive, I'll buy it."],
          ["Aunque fuera caro, lo compraría.", "Even if it were expensive, I'd buy it."],
          ["Aunque hubiera sido caro, lo habría comprado.", "Even if it had been expensive, I'd have bought it."],
        ],
        "Cuatro grados de realidad con aunque: indicativo (hecho), presente de subjuntivo (posible), imperfecto de subjuntivo (improbable) y pluscuamperfecto de subjuntivo (irreal en el pasado)."
      ),
      ms(
        "¿Qué frases son correctas?",
        ["Aunque no me creas, es verdad.", "Aunque estaba enfermo, fue a trabajar.", "Aunque tendría tiempo, no iría.", "Aunque me lo pidas de rodillas, no pienso ir."],
        [0, 1, 3],
        "Para una hipótesis, aunque + imperfecto de subjuntivo, no condicional: aunque tuviera tiempo, no iría. (El condicional de cortesía sí cabe con un hecho real: «Aunque me gustaría, no puedo».)"
      ),
      toEs("Even if you (tú) don't like it, you have to eat it.", "Aunque no te guste, tienes que comértelo.", "Aunque + subjuntivo (no importa si te gusta).", ["Aunque no te guste, te lo tienes que comer.", "Aunque no te guste, tienes que comerlo."]),
      wo("Aunque parezca mentira, nunca he visto el mar.", "Aunque parezca mentira = believe it or not.", "Believe it or not, I've never seen the sea."),
      toEs("Aunque hace sol, me llevo el paraguas.", "Aunque haga sol mañana, me llevaré el paraguas.", "Con un hecho real aunque lleva indicativo (hace); si no sabes qué tiempo hará, es una hipótesis y pasa a subjuntivo (haga).", ["Aunque mañana haga sol, me llevaré el paraguas.", "Aunque haga sol mañana, me voy a llevar el paraguas."], "Transforma la frase en una hipótesis sobre mañana: «Aunque … mañana, me llevaré el paraguas»."),
      toEs("Aunque tengo tiempo, no voy a ir.", "Aunque tuviera tiempo, no iría.", "Para una hipótesis poco probable, aunque + imperfecto de subjuntivo (tuviera) y condicional en la otra parte (iría).", ["Aunque tuviese tiempo, no iría."], "Transforma la frase en una hipótesis poco probable (no tienes tiempo): «Aunque…, no iría»."),
      toEs("Aunque el hotel es caro, lo reservaremos.", "Aunque el hotel sea caro, lo reservaremos.", "Si todavía no sabes el precio, no es un hecho que reconoces sino una posibilidad: aunque + subjuntivo (es → sea).", ["Aunque el hotel sea caro, lo vamos a reservar."], "Cambia la frase para decir que aún no sabes si el hotel es caro."),
    ]
  ),
  L(
    "subjunctive-adverbial-clauses-drill-3",
    "b2r-dialogue-negotiation",
    "Laboratorio de diálogo: la negociación familiar",
    "Una hija negocia con sus padres para ir a un festival: con tal de que, siempre que, a menos que, a condición de que.",
    "7 min",
    [
      sec(
        "Recuerda la regla",
        [
          "Recuerda la regla: las conjunciones condicionales llevan subjuntivo: con tal de que, siempre que (= con tal de que), a condición de que, y las de excepción a menos que y a no ser que. Ojo: siempre que con indicativo significa cada vez que (siempre que viene, trae flores). Y a menos que ya es negativo: a menos que llueva = si no llueve.",
          "Por qué: una condición habla de algo que todavía no se ha cumplido y que puede no cumplirse; el hablante no lo presenta como un hecho, así que usa el subjuntivo. Nunca va detrás el futuro (con tal de que vendrás ✗).",
        ],
        [
          ["—Puedes ir con tal de que nos llames cada noche.", "You can go as long as you call us every night."],
          ["—No irás a menos que apruebes todo.", "You won't go unless you pass everything."],
        ],
        [
          fb("Completa la condición.", "Te dejamos ir siempre que ___ con tus primos. (ir, tú)", "vayas", "Aquí siempre que expresa condición (= con tal de que) y pide subjuntivo: vayas."),
          fb("Completa la condición.", "No te daremos dinero a no ser que ___ en casa. (ayudar, tú)", "ayudes", "A no ser que introduce una excepción y siempre lleva subjuntivo: ayudes."),
          mc(
            "Elige: «Te dejo el móvil ___ no lo uses para jugar.»",
            ["con tal de que", "a menos que", "porque", "cada vez que"],
            0,
            "La frase pone una condición (as long as): con tal de que + subjuntivo. A menos que significa lo contrario (unless) y porque o cada vez que no expresan condición."
          ),
        ]
      ),
    ],
    [
      fb("La hija responde.", "Os llamaré todas las noches, a menos que no ___ cobertura. (haber)", "haya", "A menos que introduce una excepción y pide subjuntivo: haya."),
      fb("La hija responde.", "Lo haré con tal de que me ___ quedarme hasta el domingo. (dejar, vosotros)", "dejéis", "Con tal de que expresa condición y pide subjuntivo: dejéis."),
      fb("Los padres ceden.", "Vale, pero a condición de que ___ antes del lunes. (volver, tú)", "vuelvas", "A condición de que expresa condición y pide subjuntivo: vuelvas."),
      mc(
        "«Siempre que viene, trae flores.» ¿Qué significa aquí «siempre que»?",
        ["Whenever (hábito, con indicativo)", "As long as (condición)", "Unless", "Although"],
        0,
        "Con indicativo, «siempre que» significa «cada vez que» (whenever). Con subjuntivo significaría «con tal de que» (as long as)."
      ),
      ms(
        "¿Qué frases son correctas?",
        ["Iré a la fiesta siempre que tú vengas.", "Te ayudo con tal de que me invitas.", "No saldré a no ser que me llames.", "Siempre que llueve, se inunda la calle."],
        [0, 2, 3],
        "«Con tal de que» exige siempre subjuntivo: «con tal de que me invites». Por eso «con tal de que me invitas» es incorrecta."
      ),
      toEs("I'll lend you the car as long as you bring it back tomorrow.", "Te presto el coche con tal de que me lo devuelvas mañana.", "Con tal de que + subjuntivo + me lo.", ["Te dejo el coche con tal de que me lo devuelvas mañana.", "Te presto el coche siempre que me lo devuelvas mañana."]),
      wo("No pienso ceder a menos que me ofrezcan algo mejor.", "A menos que + subjuntivo.", "I won't give in unless they offer me something better."),
      toEs("Te dejo ir al concierto si vuelves en el último metro.", "Te dejo ir al concierto con tal de que vuelvas en el último metro.", "Si va con indicativo (vuelves), pero con tal de que expresa condición y exige subjuntivo (vuelvas).", ["Te dejo ir al concierto siempre que vuelvas en el último metro."], "Sustituye «si» por «con tal de que» y adapta el verbo."),
      toEs("Iremos de excursión si no llueve.", "Iremos de excursión a menos que llueva.", "A menos que ya contiene la negación (= si no): se quita el no y el verbo pasa a subjuntivo (llueva).", ["Iremos de excursión a no ser que llueva."], "Sustituye «si no» por «a menos que» y adapta el verbo."),
      toEs("Mis padres me dejan salir a condición de que estudie.", "Mis padres me dejaron salir a condición de que estudiara.", "A condición de que sigue con subjuntivo en pasado, pero en imperfecto: estudie → estudiara.", ["Mis padres me dejaron salir a condición de que estudiase."], "Cambia «me dejan» por «me dejaron» y adapta el verbo."),
    ]
  ),
  L(
    "subjunctive-adverbial-clauses-drill-3",
    "b2r-chain-time-conjunctions",
    "Cadena: planes con conjunciones temporales",
    "Planifica una mudanza paso a paso: en cuanto…, antes de que…, hasta que…, después de que…",
    "7 min",
    [
      sec(
        "La regla: lo que todavía no ha pasado va en subjuntivo",
        [
          "Recuerda la regla: cuando, en cuanto, tan pronto como, hasta que y después de que llevan subjuntivo si la acción todavía no ha ocurrido (un plan, una orden, el futuro) e indicativo si cuentan algo real: un hábito o un hecho pasado. Antes de que es la excepción: lleva subjuntivo siempre, también en pasado.",
          "¿Por qué? El subjuntivo marca lo que aún no es un hecho. «En cuanto firmemos» = todavía no hemos firmado; «en cuanto firmamos» = ya firmamos (o siempre lo hacemos así). Por eso detrás de estas conjunciones nunca va el futuro: «en cuanto firmaremos» es incorrecto. Lo que antes de que introduce siempre es posterior a la acción principal, así que nunca es un hecho en ese momento.",
        ],
        [
          ["En cuanto firmemos el contrato, empezaremos a empaquetar.", "As soon as we sign the contract, we'll start packing. (todavía no hemos firmado → subjuntivo)"],
          ["No nos iremos hasta que el piso esté limpio.", "We won't leave until the flat is clean. (plan → esté)"],
          ["En cuanto firmamos el contrato, empezamos a empaquetar.", "As soon as we signed the contract, we started packing. (hecho pasado → indicativo)"],
          ["Antes de que llegara el camión, ya habíamos desmontado los muebles.", "Before the truck arrived, we had already taken the furniture apart. (antes de que: subjuntivo también en pasado)"],
        ],
        [
          fb("Completa el plan.", "Después de que ___ los muebles, pintaremos. (llegar)", "lleguen", "Los muebles todavía no han llegado: después de que + acción futura → presente de subjuntivo (lleguen). «Llegarán» es imposible detrás de la conjunción."),
          mc(
            "«Tan pronto como el casero nos ___ la fianza, buscaremos otro piso.»",
            ["devuelva", "devuelve", "devolverá", "devolvió"],
            0,
            "La devolución todavía no ha ocurrido y la principal está en futuro (buscaremos): tan pronto como + presente de subjuntivo, devuelva. «Devuelve» describiría un hábito, «devolverá» es futuro (prohibido tras la conjunción) y «devolvió» un hecho pasado."
          ),
        ]
      ),
      sec(
        "Encadenar pasos",
        "En un plan, cada paso abre el siguiente: la conjunción marca el paso que tiene que ocurrir primero y el verbo principal (futuro o imperativo) el que viene después. El subjuntivo va siempre en el paso pendiente; si quieres subrayar que ese paso estará terminado, usa el pretérito perfecto de subjuntivo (haya revisado).",
        [
          ["Cuando el casero haya revisado el piso, le devolveremos las llaves.", "When the landlord has checked the flat, we'll give him back the keys. (haya revisado: paso terminado antes del siguiente)"],
          ["Avísame en cuanto salgas del trabajo.", "Let me know as soon as you leave work. (imperativo + en cuanto + subjuntivo)"],
        ],
        [
          mc(
            "Ordena el plan: (A) cuando el casero haya revisado el piso (B) devolveremos las llaves al casero (C) en cuanto terminemos de limpiar",
            ["C → A → B", "B → A → C", "A → B → C", "C → B → A"],
            0,
            "El orden lógico es: primero limpiar (C), luego el casero revisa el piso (A) y por último devolver las llaves (B). Empezar por B pone el final antes que el principio."
          ),
        ]
      ),
    ],
    [
      fb("Completa el plan.", "Tan pronto como ___ las llaves, os aviso. (tener, yo)", "tenga", "Todavía no tengo las llaves: tan pronto como + acción futura → presente de subjuntivo (tenga). El presente «os aviso» funciona aquí como futuro."),
      fb("Completa el plan.", "Dejaremos las cajas en el pasillo hasta que ___ sitio. (haber)", "haya", "Hasta que + algo que aún no existe → subjuntivo: haya (de haber). «Hay» describiría la situación actual."),
      fb("Completa el recuerdo (pasado).", "En cuanto ___ las llaves, fuimos a ver el piso. (recibir, nosotros)", "recibimos", "Es un hecho pasado y real (fuimos): en cuanto + indicativo, recibimos. «Recibamos» solo es posible para un plan futuro."),
      ms(
        "¿Qué frases son correctas?",
        ["Cuando terminemos, pediremos pizza.", "Antes de que te vayas, dame tu nueva dirección.", "Hasta que no firmes, no hay trato.", "En cuanto llegaremos, te llamaré."],
        [0, 1, 2],
        "«En cuanto» + acción futura exige subjuntivo: «en cuanto lleguemos». «En cuanto llegaremos» usa futuro y es incorrecta. «Hasta que no firmes» es correcta: el «no» es expletivo y no cambia el sentido."
      ),
      toEs("We'll wait until everyone arrives.", "Esperaremos hasta que lleguen todos.", "«Hasta que» + acción futura exige subjuntivo: «lleguen».", ["Esperaremos hasta que llegue todo el mundo.", "Vamos a esperar hasta que lleguen todos."]),
      wo("Te lo devolveré en cuanto me paguen el sueldo.", "Todavía no me han pagado: en cuanto + presente de subjuntivo (paguen) y la principal en futuro (devolveré).", "I'll give it back to you as soon as I get paid."),
      toEs(
        "En cuanto llegamos a la casa nueva, abrimos una botella de cava.",
        "En cuanto lleguemos a la casa nueva, abriremos una botella de cava.",
        "En el plan, la llegada todavía no ha ocurrido: en cuanto + presente de subjuntivo (lleguemos) y la principal en futuro (abriremos). «En cuanto llegaremos» sería incorrecto.",
        ["En cuanto lleguemos a la casa nueva, vamos a abrir una botella de cava.", "Tan pronto como lleguemos a la casa nueva, abriremos una botella de cava.", "En cuanto lleguemos a la casa nueva, abrimos una botella de cava."],
        "Pasa la frase al futuro: todavía no os habéis mudado."
      ),
      toEs(
        "Siempre desmontamos las camas cuando llegan los de la mudanza.",
        "Mañana desmontaremos las camas cuando lleguen los de la mudanza.",
        "Con «siempre» es un hábito: cuando + indicativo (llegan). Con «mañana» es un plan: cuando + presente de subjuntivo (lleguen).",
        ["Mañana vamos a desmontar las camas cuando lleguen los de la mudanza.", "Mañana desmontamos las camas cuando lleguen los de la mudanza.", "Mañana desmontaremos las camas cuando lleguen los de las mudanzas."],
        "Cambia «siempre» por «mañana»."
      ),
      toEs(
        "Esperaremos en el portal hasta que llegue el camión.",
        "Esperamos en el portal hasta que llegó el camión.",
        "Contado como hecho pasado, hasta que va con indicativo: llegó. El subjuntivo (llegue) solo sirve mientras el camión aún no ha llegado.",
        ["Ayer esperamos en el portal hasta que llegó el camión.", "Estuvimos esperando en el portal hasta que llegó el camión."],
        "Pasa la frase al pasado: ya ocurrió ayer."
      ),
      toEs(
        "Te llamaré en cuanto el camión saldrá del almacén.",
        "Te llamaré en cuanto el camión salga del almacén.",
        "Detrás de en cuanto nunca va el futuro: una acción que todavía no ha ocurrido va en presente de subjuntivo (salga).",
        ["Te llamaré en cuanto salga el camión del almacén.", "Te voy a llamar en cuanto el camión salga del almacén."],
        "Corrige la frase."
      ),
      toEs(
        "No firmaremos nada hasta que el casero arreglará la caldera.",
        "No firmaremos nada hasta que el casero arregle la caldera.",
        "Hasta que + acción pendiente → presente de subjuntivo (arregle), nunca futuro.",
        ["No firmaremos nada hasta que el casero no arregle la caldera.", "No vamos a firmar nada hasta que el casero arregle la caldera."],
        "Corrige la frase."
      ),
      toEs(
        "Antes de que los vecinos salían a trabajar, ya habíamos subido todas las cajas.",
        "Antes de que los vecinos salieran a trabajar, ya habíamos subido todas las cajas.",
        "Antes de que lleva subjuntivo siempre, también al contar el pasado: imperfecto de subjuntivo (salieran), no imperfecto de indicativo (salían).",
        ["Antes de que los vecinos saliesen a trabajar, ya habíamos subido todas las cajas."],
        "Corrige la frase."
      ),
    ]
  ),
  L(
    "imperfect-subjunctive-sequence-tenses-drill-3",
    "b2r-story-letter-from-past",
    "Detective de historias: la carta del pasado",
    "Una abuela escribe a su nieta sobre su juventud: lo que le permitían, le prohibían y le pedían.",
    "8 min",
    [
      sec(
        "La carta: lo que no me dejaban hacer",
        [
          "Recuerda la regla: los verbos de influencia (permitir, prohibir, pedir, obligar a, dejar, conseguir) llevan que + subjuntivo cuando la persona que influye y la que actúa son distintas. Si el verbo principal está en pasado, el subjuntivo va en imperfecto: no permitía que estudiaran.",
          "¿Por qué? Lo que se permite o se prohíbe todavía no ha ocurrido cuando se da la norma: es una acción posterior, vista desde el pasado de la abuela. Por eso no vale el presente de subjuntivo (estudien), que miraría hacia adelante desde hoy.",
        ],
        [
          ["Mi padre no permitía que las chicas estudiaran en la universidad.", "My father didn't allow girls to study at university. (permitía → estudiaran)"],
          ["Mi madre me pedía que no discutiera con él.", "My mother asked me not to argue with him."],
          ["Aun así, conseguí que me dejara ir a Madrid.", "Even so, I got him to let me go to Madrid. (conseguir que también es influencia)"],
        ],
        [
          fb("Completa la carta.", "Nos obligaban a que ___ vestido los domingos. (llevar, nosotras)", "lleváramos", "Obligar a que + otro sujeto → subjuntivo; con obligaban (pasado), imperfecto: lleváramos (con tilde en nosotras)."),
          mc(
            "Según la carta, ¿qué consiguió la abuela?",
            ["Que su padre la dejara ir a Madrid.", "Que su padre estudiara en la universidad.", "Que su madre discutiera con su padre.", "Que las chicas no fueran a la universidad."],
            0,
            "La carta dice «conseguí que me dejara ir a Madrid»: conseguir que + imperfecto de subjuntivo (dejara). Las otras opciones cambian quién hace qué: el padre no estudiaba y la madre le pedía justo no discutir."
          ),
        ]
      ),
      sec(
        "Lo que desea para su nieta",
        "Cuando la abuela habla de hoy y del futuro de su nieta, el verbo principal está en presente (espero que, quiero que) y el subjuntivo vuelve al presente. La regla es la misma; solo cambia el punto de vista.",
        [
          ["Espero que tú tengas la libertad que yo no tuve.", "I hope you have the freedom I didn't have. (presente → tengas)"],
        ],
        [
          fb("Completa.", "Quiero que ___ lo que te haga feliz. (estudiar, tú)", "estudies", "Quiero (presente) → presente de subjuntivo: estudies."),
        ]
      ),
    ],
    [
      fb("Completa la carta.", "Me prohibieron que ___ con tu abuelo. (salir, yo)", "saliera", "Prohibir que (pasado) + imperfecto de subjuntivo: saliera (de salieron)."),
      fb("Completa la carta.", "Era impensable que una mujer ___ sola. (viajar)", "viajara", "Era impensable que (valoración en pasado) + imperfecto de subjuntivo: viajara."),
      fb("Completa la carta.", "Ojalá ___ conocer a mi madre; te encantaría. (poder, tú)", "pudieras", "«Ojalá» + imperfecto de subjuntivo expresa un deseo irreal o muy improbable: la madre ya no vive."),
      mt(
        "Relaciona cada principio con su final.",
        [
          ["Mi padre no quería que", "me cortara el pelo."],
          ["Hoy quiero que", "hagas lo que quieras."],
          ["Me pidieron que", "no dijera nada."],
          ["Siempre te pediré que", "seas tú misma."],
        ],
        "Principal en pasado (quería, pidieron) → imperfecto de subjuntivo; en presente o futuro (quiero, pediré) → presente de subjuntivo."
      ),
      mc(
        "¿Qué frase respeta la secuencia de tiempos?",
        ["Mi abuela no permitía que yo jugara en la calle.", "Mi abuela no permitía que yo juegue en la calle.", "Mi abuela no permite que yo jugara en la calle ayer.", "Mi abuela no permitió que jugaba en la calle."],
        0,
        "Con «permitía» en pasado, el subjuntivo va en imperfecto: «jugara». «Juegue» no concuerda con el pasado, y «permitió que jugaba» usa indicativo."
      ),
      toEs("They didn't let me choose my own profession.", "No dejaron que eligiera mi propia profesión.", "Dejar que + otro sujeto → subjuntivo; en pasado, imperfecto: eligiera (e → i, como eligieron). También vale dejar + infinitivo: no me dejaron elegir.", ["No me dejaron elegir mi propia profesión.", "No permitieron que eligiera mi propia profesión."]),
      wo("Nunca pensé que llegaría a contarte todo esto.", "«Nunca pensé que» + condicional (llegaría) = futuro del pasado, muy frecuente; con «llegara» también es correcto, como en «no creía que pudieras» de esta unidad.", "I never thought I'd end up telling you all this."),
      toEs(
        "Mi padre no permitía que las chicas llevaran pantalones.",
        "Hoy nadie impide que las chicas lleven pantalones.",
        "Con la principal en presente (impide), el subjuntivo vuelve al presente: lleven. La regla de influencia + que + subjuntivo no cambia.",
        ["Hoy nadie prohíbe que las chicas lleven pantalones."],
        "Cambia la frase al presente: «Hoy nadie impide que…»."
      ),
      toEs(
        "Espero que estudies lo que te guste.",
        "Esperaba que estudiaras lo que te gustara.",
        "Con esperaba (pasado), los dos subjuntivos retroceden: estudies → estudiaras y guste → gustara.",
        ["Esperaba que estudiases lo que te gustase."],
        "Pasa la frase al pretérito imperfecto: «Esperaba…»."
      ),
      toEs(
        "Mis padres me obligan a que vuelva antes de las diez.",
        "Mis padres me obligaban a que volviera antes de las diez.",
        "Obligaban (pasado) → imperfecto de subjuntivo: volviera (de volvieron).",
        ["Mis padres me obligaban a que volviese antes de las diez.", "Mis padres me obligaban a volver antes de las diez."],
        "Pasa la frase al pretérito imperfecto: es un recuerdo de la abuela."
      ),
      toEs(
        "Mi madre no dejaba que mis hermanos me ayuden en la cocina.",
        "Mi madre no dejaba que mis hermanos me ayudaran en la cocina.",
        "Dejaba está en pasado: el subjuntivo va en imperfecto (ayudaran), no en presente.",
        ["Mi madre no dejaba que mis hermanos me ayudasen en la cocina."],
        "Corrige la frase."
      ),
      toEs(
        "En mi pueblo prohibían que las mujeres entraban en el bar.",
        "En mi pueblo prohibían que las mujeres entraran en el bar.",
        "Prohibir que lleva subjuntivo siempre: entraran (imperfecto de subjuntivo), no entraban (indicativo).",
        ["En mi pueblo prohibían que las mujeres entrasen en el bar.", "En mi pueblo prohibían a las mujeres entrar en el bar."],
        "Corrige la frase."
      ),
      toEs(
        "Querida nieta: quiero que seas libre y que no dejaras que nadie te mande.",
        "Querida nieta: quiero que seas libre y que no dejes que nadie te mande.",
        "La abuela habla de hoy (quiero): todos los subjuntivos van en presente, seas, dejes, mande. «Dejaras» rompe la secuencia.",
        [],
        "Corrige la frase."
      ),
    ]
  ),
  L(
    "imperfect-subjunctive-sequence-tenses-drill-3",
    "b2r-contrast-ra-se-quisiera",
    "Contraste: -ra, -se y el «quisiera» cortés",
    "Las dos formas del imperfecto de subjuntivo y sus usos especiales de cortesía.",
    "7 min",
    [
      sec(
        "La regla: dos formas equivalentes",
        [
          "Recuerda la regla: el imperfecto de subjuntivo tiene dos terminaciones con el mismo valor: -ra y -se, sobre la misma raíz (la de ellos del indefinido): cantaron → cantara / cantase, tuvieron → tuviera / tuviese. En nosotros, las dos llevan tilde en el mismo sitio: fuéramos / fuésemos.",
          "¿Por qué hay dos? Vienen de dos tiempos latinos distintos que acabaron con el mismo uso. Hoy -ra es la más frecuente en todas partes; -se se oye más en España y aparece más en textos escritos. En una subordinada puedes elegir cualquiera.",
        ],
        [
          ["Si tuviera tiempo… = Si tuviese tiempo…", "If I had time… (misma raíz tuv-)"],
          ["Me pidió que viniera. = Me pidió que viniese.", "She asked me to come."],
          ["Ojalá supiéramos la verdad. = Ojalá supiésemos la verdad.", "If only we knew the truth. (tilde en la misma sílaba)"],
        ],
        [
          fb("Da la forma en -se.", "fuera → ___", "fuese", "Las formas en «-ra» y «-se» son equivalentes: «fuera» = «fuese»."),
          mc(
            "¿Cuál es la forma en -se de «condujeran»?",
            ["condujesen", "conduciesen", "condujiesen", "conduzcan"],
            0,
            "Se cambia -ran por -sen sobre la misma raíz (conduj-): condujesen. «Conduciesen» usa la raíz del infinitivo, «condujiesen» añade una i que no existe tras j, y «conduzcan» es presente de subjuntivo."
          ),
        ]
      ),
      sec(
        "Quisiera y debiera: solo con -ra",
        "La diferencia aparece fuera de la subordinada: solo las formas en -ra de querer, deber y poder funcionan como condicional cortés. Quisiera un café (= querría) suaviza la petición; debieras descansar (= deberías) suaviza el consejo. «Quisiese un café» no se dice.",
        [
          ["Quisiera hacer una reserva.", "I'd like to make a reservation. (= querría)"],
          ["Debieras llamar a tu madre.", "You ought to call your mother. (= deberías, más culto)"],
        ],
        [
          mc(
            "¿Qué forma es más cortés en una tienda?",
            ["Quisiera ver ese reloj.", "Quiero ver ese reloj ya.", "Quisiese ver ese reloj.", "Querré ver ese reloj."],
            0,
            "«Quisiera» es la forma de cortesía para pedir algo. «Quiero… ya» es brusco, «querré» es futuro, y la forma en -se («quisiese») no se usa para la cortesía."
          ),
        ]
      ),
    ],
    [
      fb("Da la forma en -se.", "pudiéramos → ___", "pudiésemos", "Como «pudiéramos», la forma en -se es esdrújula y lleva tilde en la «e» de «-ié-»: pudiésemos."),
      fb("Da la forma en -ra.", "hiciese → ___", "hiciera", "Las formas en «-se» y «-ra» son equivalentes: «hiciese» = «hiciera»."),
      fb("Da la forma en -ra.", "dijesen → ___", "dijeran", "Las formas en «-se» y «-ra» son equivalentes: «dijesen» = «dijeran» (sin i tras la j)."),
      mt(
        "Relaciona las formas equivalentes.",
        [
          ["estuviera", "estuviese"],
          ["supiéramos", "supiésemos"],
          ["trajeran", "trajesen"],
          ["condujera", "condujese"],
        ],
        "-ra y -se son intercambiables: se cambia solo la terminación y la raíz queda igual."
      ),
      ms(
        "¿Qué frases son correctas?",
        ["Quisiera hablar con la directora.", "Si lo supiese, te lo diría.", "Me alegré de que vinieses.", "Quisiese un vaso de agua, por favor."],
        [0, 1, 2],
        "Las formas en -ra y -se son intercambiables en la subordinada («supiese», «vinieses»). Pero la cortesía solo usa «quisiera»: «Quisiese un vaso de agua» es incorrecta."
      ),
      toEs("I would like to ask you a question.", "Quisiera hacerle una pregunta.", "«Quisiera» (imperfecto de subjuntivo) es la forma más cortés de «quiero»; con usted, «hacerle».", ["Me gustaría hacerle una pregunta.", "Querría hacerle una pregunta.", "Quisiera hacerte una pregunta."]),
      wo("Si fuese más valiente, le diría lo que siento.", "Forma en -se en la oración con si (fuese = fuera); el condicional (diría) va en la otra parte.", "If I were braver, I'd tell her how I feel."),
      toEs(
        "Nos pidieron que lo hiciéramos en silencio.",
        "Nos pidieron que lo hiciésemos en silencio.",
        "Solo cambia la terminación: hiciéramos → hiciésemos, con la tilde en la misma sílaba. El significado no cambia.",
        [],
        "Cambia a la forma en -se."
      ),
      toEs(
        "Quiero hablar con el director.",
        "Quisiera hablar con el director.",
        "Para suavizar una petición se usa quisiera (forma en -ra), equivalente a querría. «Quisiese» no tiene este uso.",
        ["Querría hablar con el director.", "Me gustaría hablar con el director."],
        "Transforma en una petición cortés."
      ),
      toEs(
        "Me alegré de que me escribieses.",
        "Me alegro de que me escribas.",
        "Con la principal en presente (me alegro), el imperfecto de subjuntivo (escribieses) pasa a presente: escribas.",
        [],
        "Pasa la frase al presente: «Me alegro…»."
      ),
      toEs(
        "Quisiese reservar una mesa para dos, por favor.",
        "Quisiera reservar una mesa para dos, por favor.",
        "En la cortesía solo vale la forma en -ra: quisiera (= querría).",
        ["Querría reservar una mesa para dos, por favor.", "Me gustaría reservar una mesa para dos, por favor."],
        "Corrige la frase."
      ),
      toEs(
        "Mi médico dice que debiese caminar más.",
        "Mi médico dice que debiera caminar más.",
        "Como consejo cortés (= debería) solo se usa la forma en -ra: debiera.",
        ["Mi médico dice que debería caminar más.", "Mi médica dice que debiera caminar más."],
        "Corrige la frase."
      ),
      toEs(
        "Ayer me pide que se lo explicase otra vez.",
        "Ayer me pidió que se lo explicase otra vez.",
        "Explicase va bien en la subordinada, pero ayer exige pasado en la principal: pidió. Con me pide, el subjuntivo iría en presente (explique).",
        ["Ayer me pidió que se lo explicara otra vez."],
        "Corrige la frase."
      ),
    ]
  ),
  L(
    "imperfect-subjunctive-sequence-tenses-drill-3",
    "b2r-mission-study-trip-diary",
    "Misión real: el diario del viaje de estudios",
    "Escribe lo que los profesores os pidieron, os prohibieron y os recomendaron durante un viaje escolar.",
    "7 min",
    [
      sec(
        "Recuerda la regla: contar normas pasadas",
        [
          "Recuerda la regla: las normas se dan con verbos de influencia (pedir, prohibir, recomendar, no dejar) y con valoraciones (era obligatorio, estaba prohibido, fue una pena). Las dos llevan que + subjuntivo, y en el diario, como el verbo principal está en pasado, el subjuntivo va en imperfecto.",
          "Ojo con prometer y decir: prometer que informa de un hecho futuro y va con condicional (nos prometieron que tendríamos tiempo libre); decir que lleva subjuntivo solo cuando transmite una orden (nos dijo que nos calláramos).",
        ],
        [
          ["Nos pidieron que estuviéramos en el hotel a las diez.", "They asked us to be at the hotel by ten. (influencia → estuviéramos)"],
          ["Era obligatorio que lleváramos el pasaporte siempre.", "We had to carry our passports at all times. (valoración → lleváramos)"],
          ["Nos prometieron que iríamos a la playa.", "They promised us we'd go to the beach. (promesa → condicional)"],
        ],
        [
          fb("Completa el diario.", "No dejaban que ___ solos por la ciudad. (salir, nosotros)", "saliéramos", "No dejar que + otro sujeto → subjuntivo; en pasado, imperfecto con tilde: saliéramos."),
          mc(
            "Tu amiga no fue al viaje y te pregunta: «¿Os dejaban usar el móvil?» ¿Qué le contestas?",
            ["No, no permitían que lo usáramos durante las visitas.", "No, no permitían que lo usemos durante las visitas.", "No, no permitían que lo usábamos durante las visitas.", "No, no permitían que lo usaríamos durante las visitas."],
            0,
            "Permitían (pasado) + que → imperfecto de subjuntivo: usáramos. «Usemos» iría con un presente, «usábamos» es indicativo y el condicional no sigue a permitir que."
          ),
        ]
      ),
    ],
    [
      fb("Completa el diario.", "La guía nos recomendó que ___ el museo por la mañana. (visitar, nosotros)", "visitáramos", "Recomendar (pasado) + que → imperfecto de subjuntivo: visitáramos."),
      fb("Completa el diario.", "Me sorprendió que la comida ___ tan picante. (ser)", "fuera", "Sorprender que (emoción en pasado) → imperfecto de subjuntivo: fuera."),
      fb("Completa el diario.", "Nos prometieron que el último día ___ tiempo libre. (tener, nosotros)", "tendríamos", "Prometer que informa de un hecho futuro visto desde el pasado: condicional (tendríamos), no subjuntivo."),
      mc(
        "«The teacher told us to be quiet.»",
        ["La profesora nos dijo que nos calláramos.", "La profesora nos dijo que nos callábamos.", "La profesora nos dijo que nos callemos ayer.", "La profesora nos dijo callarnos que."],
        0,
        "Si «decir» transmite una orden en pasado, va con imperfecto de subjuntivo: «nos calláramos». «Nos callábamos» cuenta un hecho, y «nos callemos ayer» no concuerda con el pasado."
      ),
      ms(
        "¿Qué frases del diario son correctas?",
        ["Era necesario que todos firmaran.", "No permitían que usáramos el móvil en las visitas.", "Nos pidieron que llegamos puntuales.", "Me encantó que hubiera tanta gente simpática."],
        [0, 1, 3],
        "«Pedir que» exige subjuntivo, y en pasado imperfecto: «que llegáramos puntuales». «Que llegamos» usa indicativo y es incorrecta."
      ),
      toEs("They didn't allow us to go out at night.", "No nos permitían que saliéramos de noche.", "Permitir que + imperfecto de subjuntivo (saliéramos); también vale permitir + infinitivo: no nos permitían salir.", ["No nos dejaron salir de noche.", "No nos permitieron salir de noche.", "No nos dejaban salir de noche.", "No nos permitían salir por la noche.", "No nos dejaban salir por la noche."]),
      wo("Fue el mejor viaje que habíamos hecho nunca.", "Pluscuamperfecto (habíamos hecho): los viajes anteriores son previos al momento del relato; la relativa tras el superlativo va en indicativo porque es una experiencia real.", "It was the best trip we had ever taken."),
      toEs(
        "Normas del viaje: es obligatorio que todos llevéis el carné del instituto.",
        "Era obligatorio que todos lleváramos el carné del instituto.",
        "En el diario la norma ya es pasado: era obligatorio + imperfecto de subjuntivo (lleváramos). La persona pasa de vosotros a nosotros porque escribes tú.",
        ["Era obligatorio que todos llevásemos el carné del instituto."],
        "Transforma la norma en una frase del diario: «Era obligatorio que todos…»."
      ),
      toEs(
        "Os pedimos que no salgáis del hotel sin permiso.",
        "Nos pidieron que no saliéramos del hotel sin permiso.",
        "Pidieron (pasado) → imperfecto de subjuntivo: saliéramos. El que escribe el diario es uno de los alumnos: nos.",
        ["Nos pidieron que no saliésemos del hotel sin permiso."],
        "Transforma la norma en una frase del diario: «Nos pidieron que…»."
      ),
      toEs(
        "Estaba prohibido que nos bañáramos en el río.",
        "Está prohibido que os bañéis en el río.",
        "La norma escrita para los alumnos va en presente: está prohibido + presente de subjuntivo (os bañéis).",
        ["Está prohibido bañarse en el río."],
        "Cambia la frase a la hoja de normas, en presente: «Está prohibido que os…»."
      ),
      toEs(
        "La guía nos rogó que no tocáramos los cuadros y que no hacíamos fotos con flash.",
        "La guía nos rogó que no tocáramos los cuadros y que no hiciéramos fotos con flash.",
        "Las dos peticiones dependen de rogó: las dos van en imperfecto de subjuntivo (tocáramos, hiciéramos).",
        ["La guía nos rogó que no tocásemos los cuadros y que no hiciésemos fotos con flash."],
        "Corrige la frase."
      ),
      toEs(
        "Fue una pena que no podamos ver la catedral por dentro.",
        "Fue una pena que no pudiéramos ver la catedral por dentro.",
        "Fue una pena (pasado) → imperfecto de subjuntivo: pudiéramos.",
        ["Fue una pena que no pudiésemos ver la catedral por dentro."],
        "Corrige la frase."
      ),
      toEs(
        "Nos prometieron que el último día fuéramos a la playa.",
        "Nos prometieron que el último día iríamos a la playa.",
        "Prometer que no es un verbo de influencia: informa de un hecho futuro visto desde el pasado, así que va con condicional (iríamos).",
        [],
        "Corrige la frase."
      ),
    ]
  ),
  L(
    "hypothetical-si-clauses-drill-3",
    "b2r-dialogue-what-would-happen",
    "Laboratorio de diálogo: ¿qué pasaría si…?",
    "Dos amigos debaten escenarios de ciencia ficción: si no existiera internet, si pudiéramos vivir en Marte…",
    "7 min",
    [
      sec(
        "Recuerda la regla: imaginar en cadena",
        [
          "Recuerda la regla: para imaginar una situación que no es real ahora (o es muy improbable), se usa si + imperfecto de subjuntivo y la consecuencia en condicional: si no existiera internet, leeríamos más. En un debate, la respuesta sigue en condicional aunque ya no repitas el si: «Pues escribiríamos cartas».",
          "¿Por qué? El condicional mantiene la conversación dentro del mundo imaginado. Si alguien contesta en presente o futuro («leeremos más»), sale de la hipótesis y suena a predicción real. Y tras el si nunca va el condicional: «si no existiría» es un error típico.",
        ],
        [
          ["—¿Qué pasaría si no existiera internet?", "What would happen if the internet didn't exist? (existiera + pasaría)"],
          ["—Pues leeríamos más y escribiríamos cartas.", "Well, we'd read more and write letters. (la respuesta sigue en condicional)"],
          ["—Ya, pero sería imposible trabajar como ahora.", "Yeah, but it would be impossible to work as we do now."],
          ["—Yo no iría a Marte ni aunque me pagaran.", "I wouldn't go to Mars even if they paid me. (ni aunque + imperfecto de subjuntivo)"],
        ],
        [
          fb("Continúa el debate.", "Si ___ vivir en Marte, ¿irías? (poder, tú)", "pudieras", "Hipótesis: si + imperfecto de subjuntivo (pudieras), con la pregunta en condicional (irías)."),
          fb("Continúa el debate.", "Yo no iría ni aunque me ___ el viaje. (regalar, ellos)", "regalaran", "Ni aunque + imperfecto de subjuntivo con condicional en la principal: regalaran."),
          mc(
            "—¿Qué harías si los coches volaran? ¿Qué respuesta sigue el debate?",
            ["Iría al trabajo por el aire, claro.", "Iré al trabajo por el aire, claro.", "Voy al trabajo por el aire, claro.", "Fuera al trabajo por el aire, claro."],
            0,
            "La pregunta es hipotética (volaran, harías), así que la respuesta sigue en condicional: iría. «Iré» y «voy» la convierten en un plan real, y «fuera» es subjuntivo, que no va solo en la consecuencia."
          ),
        ]
      ),
    ],
    [
      { ...fb("Completa.", "Si los animales ___ hablar, ¿qué nos dirían? (saber)", "supieran", "Si + imperfecto de subjuntivo: saber → supieran; «pudieran» también vale."), altAnswers: ["pudieran"] },
      fb("Completa.", "Si no hubiera coches, las ciudades ___ más silenciosas. (ser)", "serían", "Con si + imperfecto de subjuntivo (hubiera), la consecuencia va en condicional: serían."),
      fb("Completa.", "¿Qué harías si ___ invisible un día? (ser, tú)", "fueras", "Si + imperfecto de subjuntivo: ser → fueras."),
      mt(
        "Relaciona cada escenario con una consecuencia lógica.",
        [
          ["Si no durmiéramos nunca,", "tendríamos más horas para trabajar."],
          ["Si los robots hicieran todo,", "nadie tendría que trabajar."],
          ["Si viviéramos doscientos años,", "tendríamos varias carreras."],
          ["Si no hubiera gravedad,", "flotaríamos por la casa."],
        ],
        "Si + imperfecto de subjuntivo + condicional: cada consecuencia sigue dentro del mundo imaginado."
      ),
      mc(
        "«If we could travel in time, where would you go?»",
        ["Si pudiéramos viajar en el tiempo, ¿adónde irías?", "Si podríamos viajar en el tiempo, ¿adónde irías?", "Si pudiéramos viajar en el tiempo, ¿adónde irás?", "Si podemos viajar en el tiempo, ¿adónde irías?"],
        0,
        "Condición hipotética: «si» + imperfecto de subjuntivo («pudiéramos») y condicional («irías»). «Si podríamos» es incorrecto, «irás» es futuro y «si podemos» sería una condición real."
      ),
      toEs("If there were no money, the world would be very different.", "Si no hubiera dinero, el mundo sería muy diferente.", "Haber impersonal en imperfecto de subjuntivo (hubiera, siempre en singular) y consecuencia en condicional (sería).", ["Si no existiera el dinero, el mundo sería muy diferente.", "Si no hubiese dinero, el mundo sería muy distinto.", "Si no hubiera dinero, el mundo sería muy distinto."]),
      wo("No sé qué haría yo si me quedara sin móvil una semana.", "Condicional (haría) + si + imperfecto de subjuntivo (me quedara).", "I don't know what I'd do if I were left without my phone for a week."),
      toEs(
        "—¿Y si no hay luz mañana? —Pues cenaremos con velas.",
        "—¿Y si no hubiera luz nunca más? —Pues cenaríamos con velas.",
        "Al convertir el plan en un escenario imaginario, si pasa al imperfecto de subjuntivo (hubiera) y la respuesta al condicional (cenaríamos).",
        ["¿Y si no hubiera luz nunca más? Pues cenaríamos con velas.", "—¿Y si no hubiese luz nunca más? —Pues cenaríamos con velas."],
        "Transforma el diálogo en un escenario imaginario: «¿Y si no hubiera luz nunca más?»."
      ),
      toEs(
        "Si los robots trabajan por nosotros, tendremos más tiempo libre.",
        "Si los robots trabajaran por nosotros, tendríamos más tiempo libre.",
        "Para presentarlo como hipótesis: si + imperfecto de subjuntivo (trabajaran) y condicional (tendríamos).",
        ["Si los robots trabajasen por nosotros, tendríamos más tiempo libre."],
        "Transforma en una hipótesis: hoy no es así."
      ),
      toEs(
        "Si pudiera hablar con un dinosaurio, le preguntaría por qué desaparecieron.",
        "Si pudieras hablar con un dinosaurio, ¿qué le preguntarías?",
        "Al pasar a tú, cambian el subjuntivo (pudieras) y el condicional (preguntarías); la estructura hipotética se mantiene.",
        ["¿Qué le preguntarías a un dinosaurio si pudieras hablar con él?"],
        "Transforma la frase en una pregunta para tu amigo: «Si pudieras…, ¿qué le…?»."
      ),
      toEs(
        "—¿Qué pasaría si no existiría la electricidad? —No sé, viviríamos como en el siglo XVIII.",
        "—¿Qué pasaría si no existiera la electricidad? —No sé, viviríamos como en el siglo XVIII.",
        "Tras el si condicional nunca va el condicional: existiera (imperfecto de subjuntivo).",
        ["¿Qué pasaría si no existiera la electricidad? No sé, viviríamos como en el siglo XVIII.", "—¿Qué pasaría si no existiese la electricidad? —No sé, viviríamos como en el siglo XVIII."],
        "Corrige la frase."
      ),
      toEs(
        "—Si viviéramos en Marte, ¿qué echarías de menos? —Echaré de menos el mar.",
        "—Si viviéramos en Marte, ¿qué echarías de menos? —Echaría de menos el mar.",
        "La respuesta sigue dentro de la hipótesis: condicional (echaría), no futuro.",
        ["Si viviéramos en Marte, ¿qué echarías de menos? Echaría de menos el mar.", "—Si viviéramos en Marte, ¿qué extrañarías? —Extrañaría el mar."],
        "Corrige la frase."
      ),
      toEs(
        "Si nadie tuviera que trabajar, la gente se aburre mucho.",
        "Si nadie tuviera que trabajar, la gente se aburriría mucho.",
        "Con si + imperfecto de subjuntivo (tuviera), la consecuencia va en condicional: se aburriría.",
        [],
        "Corrige la frase."
      ),
    ]
  ),
  L(
    "hypothetical-si-clauses-drill-3",
    "b2r-transform-real-to-unreal",
    "Transformaciones: de lo posible a lo imposible",
    "Convierte condiciones reales en hipotéticas: si tengo → si tuviera; iré → iría.",
    "7 min",
    [
      sec(
        "La regla: cambiar el grado de realidad",
        [
          "Recuerda la regla: condición posible → si + presente de indicativo, y futuro, presente o imperativo en la consecuencia (si llueve, no saldremos). Condición improbable o contraria a la realidad presente → si + imperfecto de subjuntivo, y condicional (si lloviera, no saldríamos).",
          "¿Por qué cambian los dos verbos? Porque la distancia de la realidad se marca en las dos partes: el imperfecto de subjuntivo aleja la condición y el condicional aleja la consecuencia. Si solo cambias una («si lloviera, no saldremos»), la frase queda a medias. Y nunca van tras si ni el futuro ni el condicional ni el presente de subjuntivo.",
        ],
        [
          ["Si llueve, no saldremos. → Si lloviera, no saldríamos.", "If it rains… → If it rained…"],
          ["Si me llamas, te ayudo. → Si me llamaras, te ayudaría.", "If you call me… → If you called me… (presente → condicional)"],
          ["Si tienes tiempo, ven. → Si tuvieras tiempo, vendrías.", "If you have time, come. → If you had time, you'd come. (el imperativo pasa a condicional)"],
        ],
        [
          fb("Transforma en hipótesis.", "Si tengo tiempo, iré. → Si ___ tiempo, iría.", "tuviera", "Para hacer la condición hipotética: «si» + imperfecto de subjuntivo («tuviera») y condicional."),
          fb("Transforma en hipótesis.", "Si salimos ahora, llegaremos a tiempo. → Si saliéramos ahora, ___ a tiempo.", "llegaríamos", "La consecuencia también se aleja de la realidad: futuro (llegaremos) → condicional (llegaríamos)."),
        ]
      ),
    ],
    [
      fb("Transforma en hipótesis.", "Si vienes, te enseñaré la casa. → Si vinieras, te ___ la casa.", "enseñaría", "Con «si» + imperfecto de subjuntivo, la consecuencia va en condicional: «enseñaría»."),
      fb("Transforma en hipótesis.", "Si puedo, te acompaño. → Si ___, te acompañaría.", "pudiera", "Para hacer la condición hipotética: «si» + imperfecto de subjuntivo: «pudiera»."),
      fb("Transforma en hipótesis.", "Si sabemos algo, os avisaremos. → Si ___ algo, os avisaríamos.", "supiéramos", "Para hacer la condición hipotética: «si» + imperfecto de subjuntivo, con tilde en «supiéramos»."),
      fb("Transforma en condición real.", "Si lo viera, lo reconocería. → Si lo ___, lo reconoceré.", "veo", "Con la consecuencia en futuro («reconoceré»), la condición es real y va en presente: «si lo veo»."),
      mc(
        "«Si hace buen tiempo, comeremos fuera.» → hipotética:",
        ["Si hiciera buen tiempo, comeríamos fuera.", "Si haría buen tiempo, comeríamos fuera.", "Si hiciera buen tiempo, comeremos fuera.", "Si hacía buen tiempo, comíamos fuera ayer."],
        0,
        "Para hacerla hipotética: «si» + imperfecto de subjuntivo («hiciera») y condicional («comeríamos»). «Si haría» es incorrecto, y «comeremos» mantiene el futuro de la condición real."
      ),
      toEs("If I spoke Japanese, I would work in Tokyo.", "Si hablara japonés, trabajaría en Tokio.", "Condición irreal presente: «si hablara» + condicional «trabajaría».", ["Si hablase japonés, trabajaría en Tokio."]),
      wo("Si no fuera por ti, no estaría aquí hoy.", "«Si no fuera por ti» (imperfecto de subjuntivo) + «no estaría» (condicional simple) forman una hipótesis sobre el presente, muy habitual con «si no fuera por».", "If it weren't for you, I wouldn't be here today."),
      toEs(
        "Si me invitan a la boda, iré con mi hermana.",
        "Si me invitaran a la boda, iría con mi hermana.",
        "Las dos partes se alejan de la realidad: invitan → invitaran (imperfecto de subjuntivo) e iré → iría (condicional).",
        ["Si me invitasen a la boda, iría con mi hermana."],
        "Transforma en hipótesis: es muy poco probable que te inviten."
      ),
      toEs(
        "Si estás cansado, acuéstate pronto.",
        "Si estuvieras cansado, te acostarías pronto.",
        "Con una condición hipotética, el imperativo pasa a condicional: acuéstate → te acostarías; estás → estuvieras.",
        ["Si estuvieses cansado, te acostarías pronto.", "Si estuvieras cansada, te acostarías pronto."],
        "Transforma en hipótesis: no estás cansado."
      ),
      toEs(
        "Si fuera más barato, lo compraría.",
        "Si es más barato, lo compraré.",
        "Para volver a una condición posible: si + presente de indicativo (es) y futuro (compraré).",
        ["Si es más barato, lo compro.", "Si es más barato, me lo compraré."],
        "Transforma en una condición real: puede que lo rebajen."
      ),
      toEs(
        "Si tuviera coche, te llevaré al aeropuerto.",
        "Si tuviera coche, te llevaría al aeropuerto.",
        "La transformación quedó a medias: con si + imperfecto de subjuntivo (tuviera), la consecuencia va en condicional (llevaría).",
        ["Si tuviese coche, te llevaría al aeropuerto.", "Si tengo coche, te llevaré al aeropuerto.", "Si tuviera carro, te llevaría al aeropuerto."],
        "Corrige la frase."
      ),
      toEs(
        "Si sería verano, iríamos a la playa.",
        "Si fuera verano, iríamos a la playa.",
        "Tras el si condicional nunca va el condicional: fuera (imperfecto de subjuntivo).",
        ["Si fuese verano, iríamos a la playa."],
        "Corrige la frase."
      ),
      toEs(
        "Si me llame mi jefe, no contestaré.",
        "Si me llama mi jefe, no contestaré.",
        "Tras si nunca va el presente de subjuntivo: una condición posible va en presente de indicativo (llama).",
        ["Si me llamara mi jefe, no contestaría.", "Si mi jefe me llama, no contestaré."],
        "Corrige la frase."
      ),
    ]
  ),
  L(
    "hypothetical-si-clauses-drill-3",
    "b2r-mission-if-i-were-you",
    "Misión real: consejos con «si yo fuera tú»",
    "Responde a mensajes de amigos con problemas usando si yo fuera tú, yo en tu lugar y yo que tú.",
    "7 min",
    [
      sec(
        "Recuerda la regla: tres fórmulas, un condicional",
        [
          "Recuerda la regla: para aconsejar poniéndote en el lugar del otro tienes tres fórmulas equivalentes: si yo fuera tú, yo en tu lugar y yo que tú (la más coloquial). Las tres van seguidas del condicional: yo que tú, hablaría con él.",
          "¿Por qué el condicional? Porque es una hipótesis imposible (no eres la otra persona): el condicional presenta el consejo como lo que harías en ese mundo imaginado, sin imponerlo. Con presente o futuro («yo que tú, hablo con él») suena a orden o a tu propio plan. Ojo: solo la primera lleva si, y con imperfecto de subjuntivo (fuera), nunca «si yo era» ni «si yo sería».",
        ],
        [
          ["Si yo fuera tú, hablaría con tu jefe.", "If I were you, I'd talk to your boss."],
          ["Yo en tu lugar, no le diría nada todavía.", "If I were you, I wouldn't tell him anything yet. (negativo: no + condicional)"],
          ["Yo que tú, me compraría unas botas.", "If I were you, I'd buy myself some boots. (pronombre delante del condicional)"],
        ],
        [
          fb("Aconseja.", "Yo que tú, ___ un poco antes de decidir. (esperar)", "esperaría", "«Yo que tú» va con condicional: esperaría."),
          mc(
            "Mensaje: «Mi vecino pone la música altísima a las tres de la mañana.» ¿Qué le contestas?",
            ["Yo en tu lugar, hablaría con él mañana mismo.", "Yo en tu lugar, hablo con él mañana mismo.", "Si yo sería tú, hablaría con él.", "Si yo era tú, hablaría con él."],
            0,
            "Yo en tu lugar + condicional (hablaría). «Hablo» suena a tu propio plan, «si yo sería» pone el condicional tras si y «si yo era» usa indicativo en lugar de fuera."
          ),
        ]
      ),
    ],
    [
      fb("Mensaje: «Mi compañero de piso nunca limpia».", "Si yo fuera tú, le ___ un horario de limpieza. (proponer)", "propondría", "Condicional irregular: proponer → propondr- (como poner → pondría)."),
      fb("Mensaje: «Me han ofrecido un trabajo en otra ciudad».", "Yo en tu lugar, lo ___ sin dudarlo. (aceptar)", "aceptaría", "Yo en tu lugar + condicional: aceptaría."),
      fb("Mensaje: «Mi ex me ha escrito».", "Yo que tú, no le ___ todavía. (contestar)", "contestaría", "Consejo negativo: no + condicional (contestaría)."),
      mt(
        "Relaciona cada problema con un consejo.",
        [
          ["Duermo fatal.", "Yo que tú, dejaría el café por la tarde."],
          ["Me aburro en el trabajo.", "Yo en tu lugar, buscaría otro puesto."],
          ["No tengo amigos en la ciudad.", "Si yo fuera tú, me apuntaría a un club."],
          ["Gasto demasiado.", "Yo que tú, haría un presupuesto."],
        ],
        "Tres fórmulas equivalentes + condicional."
      ),
      ms(
        "¿Qué consejos están bien formados?",
        ["Si yo fuera tú, iría al médico.", "Si yo sería tú, iría al médico.", "Yo en tu lugar, pediría perdón.", "Yo que tú, lo pensaría dos veces."],
        [0, 2, 3],
        "Tras el «si» condicional nunca va condicional: «Si yo fuera tú». «Si yo sería tú» es incorrecta; «yo en tu lugar» y «yo que tú» son fórmulas correctas."
      ),
      toEs("If I were you, I wouldn't buy that car.", "Si yo fuera tú, no compraría ese coche.", "Si yo fuera tú + condicional.", ["Yo que tú, no compraría ese coche.", "Yo en tu lugar, no compraría ese coche.", "Si fuera tú, no compraría ese coche."]),
      wo("Yo en tu lugar le diría exactamente lo que piensas.", "Yo en tu lugar + condicional (diría); le va delante del verbo.", "If I were you, I'd tell him exactly what you think."),
      toEs(
        "Habla con tu profesora.",
        "Yo que tú, hablaría con tu profesora.",
        "Para suavizar la orden, se pasa del imperativo al condicional con una fórmula de consejo: yo que tú, hablaría.",
        ["Yo en tu lugar, hablaría con tu profesora.", "Si yo fuera tú, hablaría con tu profesora.", "Si fuera tú, hablaría con tu profesora."],
        "Transforma la orden en un consejo con «yo que tú»."
      ),
      toEs(
        "No firmes nada todavía.",
        "Yo en tu lugar, no firmaría nada todavía.",
        "Del imperativo negativo (no firmes) al condicional (no firmaría), que presenta el consejo sin imponerlo.",
        ["Yo que tú, no firmaría nada todavía.", "Si yo fuera tú, no firmaría nada todavía.", "Si fuera tú, no firmaría nada todavía."],
        "Transforma la orden en un consejo con «yo en tu lugar»."
      ),
      toEs(
        "Yo que tú, me iría de vacaciones.",
        "Si yo fuera tú, me iría de vacaciones.",
        "Las fórmulas son equivalentes: si yo fuera tú (imperfecto de subjuntivo) + el mismo condicional.",
        ["Si fuera tú, me iría de vacaciones."],
        "Reescribe el consejo con «si yo fuera tú»."
      ),
      toEs(
        "Yo que tú, le pido perdón hoy mismo.",
        "Yo que tú, le pediría perdón hoy mismo.",
        "Yo que tú va con condicional (pediría); el presente lo convierte en tu propio plan.",
        ["Yo en tu lugar, le pediría perdón hoy mismo.", "Si yo fuera tú, le pediría perdón hoy mismo."],
        "Corrige la frase."
      ),
      toEs(
        "Si yo sería tú, cambiaría de médico.",
        "Si yo fuera tú, cambiaría de médico.",
        "Tras el si condicional va el imperfecto de subjuntivo (fuera); el condicional solo en el consejo.",
        ["Si fuera tú, cambiaría de médico.", "Yo que tú, cambiaría de médico.", "Yo en tu lugar, cambiaría de médico."],
        "Corrige la frase."
      ),
      toEs(
        "Yo en tu lugar, no comería tanto azúcar y harás más deporte.",
        "Yo en tu lugar, no comería tanto azúcar y haría más deporte.",
        "Los dos consejos dependen de yo en tu lugar: los dos en condicional (comería, haría).",
        ["Yo que tú, no comería tanto azúcar y haría más deporte.", "Si yo fuera tú, no comería tanto azúcar y haría más deporte."],
        "Corrige la frase."
      ),
    ]
  ),
  L(
    "conditional-perfect-pluperfect-subjunctive-drill-3",
    "b2r-story-alternative-lives",
    "Detective de historias: vidas alternativas",
    "¿Qué habría pasado si…? Reescribe momentos clave de biografías con el tipo 3.",
    "8 min",
    [
      sec(
        "Momentos decisivos",
        [
          "Recuerda la regla: para reescribir una biografía, el momento decisivo va en si + pluscuamperfecto de subjuntivo (si no hubiera tenido el accidente), porque ya ocurrió. Lo que habría cambiado en aquella vida va en condicional perfecto (no habría empezado a pintar); lo que cambiaría hoy, en condicional simple (hoy sería otra persona).",
          "¿Por qué? Una biografía mezcla pasado lejano y presente. Antes de elegir la consecuencia, pregúntate: ¿se nota en aquella época o se nota todavía hoy? «Quizá» y «tal vez» suavizan la hipótesis y admiten el condicional.",
        ],
        [
          ["Si Frida Kahlo no hubiera tenido el accidente, quizá no habría empezado a pintar.", "If Frida Kahlo hadn't had the accident, she might not have started painting."],
          ["Si Cervantes no hubiera estado en la cárcel, tal vez no habría escrito el Quijote.", "If Cervantes hadn't been in prison, perhaps he wouldn't have written Don Quixote."],
          ["Si mi madre no hubiera emigrado, hoy yo no hablaría dos idiomas.", "If my mother hadn't emigrated, I wouldn't speak two languages today. (efecto actual)"],
        ],
        [
          fb("Completa.", "Si Colón no ___ el viaje, la historia habría sido distinta. (hacer)", "hubiera hecho", "El viaje de Colón es un hecho pasado: si + pluscuamperfecto de subjuntivo, con el participio irregular hecho."),
          mc(
            "«Si Gabriel García Márquez no hubiera trabajado como periodista, quizá su estilo ___ otro.»",
            ["habría sido", "hubiera sido", "fue", "sea"],
            0,
            "La consecuencia de una hipótesis pasada va en condicional perfecto: habría sido. «Hubiera sido» también se oye en la consecuencia, pero aquí la opción esperada es el condicional; «fue» es un hecho real y «sea» no encaja."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "Si no hubiera perdido aquel tren, nunca ___ a su futura esposa. (conocer)", "habría conocido", "Conocerla ocurrió en aquella época: condicional perfecto, habría conocido."),
      fb("Completa.", "Si sus padres no ___ emigrado, hoy no hablaría español. (haber)", "hubieran", "La emigración es pasada: auxiliar en pluscuamperfecto de subjuntivo (hubieran). El efecto es de hoy (hablaría): es una mixta."),
      fb("Completa.", "Si hubiera nacido cien años antes, no ___ votar. (poder, ella; en ese pasado)", "habría podido", "La consecuencia se sitúa en aquel pasado: condicional perfecto de poder + infinitivo."),
      mc(
        "¿Qué frase es una mixta (pasado → presente)?",
        ["Si hubiera estudiado Medicina, ahora sería cirujana.", "Si estudiara Medicina, sería cirujana.", "Si hubiera estudiado Medicina, habría sido cirujana.", "Si estudia Medicina, será cirujana."],
        0,
        "La mixta combina una condición pasada («si hubiera estudiado») con un efecto presente («ahora sería»). «Si estudiara… sería» es irreal presente, y «habría sido» es irreal pasado."
      ),
      ms(
        "¿Qué frases son correctas?",
        ["Si no hubiera llovido, habríamos ganado.", "Si hubiera sabido la verdad, no estaría aquí.", "Si habría tenido dinero, habría viajado.", "Ojalá hubiera nacido en otra época."],
        [0, 1, 3],
        "Tras «si» nunca va «habría»: lo correcto es «si hubiera tenido dinero». Las otras frases son correctas (una es mixta: «no estaría aquí»)."
      ),
      toEs("If they hadn't invented the printing press, few people would have learned to read.", "Si no hubieran inventado la imprenta, pocas personas habrían aprendido a leer.", "Condición irreal en el pasado: «si no hubieran inventado» + «habrían aprendido».", ["Si no se hubiera inventado la imprenta, pocas personas habrían aprendido a leer.", "Si no hubieran inventado la imprenta, poca gente habría aprendido a leer."]),
      wo("¿Qué habría sido de nosotros si no nos hubiéramos conocido?", "La pregunta va en condicional perfecto (habría sido) y la condición en pluscuamperfecto de subjuntivo (hubiéramos conocido).", "What would have become of us if we hadn't met?"),
      toEs("Mozart murió joven y no compuso más óperas.", "Si Mozart no hubiera muerto joven, habría compuesto más óperas.", "El hecho real (murió) pasa a condición imposible en pluscuamperfecto de subjuntivo; lo que no ocurrió (no compuso) pasa a condicional perfecto y cambia de signo.", ["Si Mozart no hubiera muerto joven, hubiera compuesto más óperas.", "Si Mozart no hubiera muerto tan joven, habría compuesto más óperas."], "Transforma los hechos en una hipótesis: «Si Mozart no…»."),
      toEs("Si Van Gogh habría vendido sus cuadros, no habría vivido en la pobreza.", "Si Van Gogh hubiera vendido sus cuadros, no habría vivido en la pobreza.", "Tras «si» va el pluscuamperfecto de subjuntivo (hubiera vendido); «habría» solo aparece en la consecuencia.", ["Si Van Gogh hubiera vendido sus cuadros, no hubiera vivido en la pobreza."], "Corrige la frase."),
    ]
  ),
  L(
    "conditional-perfect-pluperfect-subjunctive-drill-3",
    "b2r-transform-reproaches",
    "Transformaciones: reproches y lamentos",
    "Convierte quejas directas en reproches con deberías haber, habría sido mejor que y ojalá hubieras.",
    "7 min",
    [
      sec(
        "Del «¿por qué no…?» al reproche",
        [
          "Recuerda la regla: una queja directa sobre el pasado (¿Por qué no me llamaste?) se puede convertir en tres reproches más elaborados: deberías / podrías + haber + participio; habría sido mejor que + pluscuamperfecto de subjuntivo; ojalá + pluscuamperfecto de subjuntivo.",
          "¿Por qué? El pretérito de la pregunta (llamaste) se convierte en «haber + participio» porque la acción no realizada sigue en el pasado. Tras «habría sido mejor que» y «ojalá» va subjuntivo, porque hablan de algo que no ocurrió. Para reprocharte a ti mismo, cambia solo la persona: debería haberte llamado.",
        ],
        [
          ["¿Por qué no me llamaste? → Deberías haberme llamado.", "You should have called me."],
          ["¿Por qué no estudiaste? → Habría sido mejor que hubieras estudiado.", "It would have been better if you had studied."],
          ["¿Por qué no vinisteis? → Ojalá hubierais venido.", "I wish you had come. (vosotros)"],
        ],
        [
          fb("Transforma.", "¿Por qué no me lo dijiste? → Deberías ___ dicho.", "habérmelo", "Deberías + haber + participio, con los dos pronombres pegados a haber: habérmelo (lleva tilde)."),
        ]
      ),
    ],
    [
      fb("Transforma.", "¿Por qué no reservaste? → Deberías haber ___ antes.", "reservado", "El reproche sobre el pasado se forma con «deberías haber» + participio: «reservado»."),
      fb("Transforma.", "¿Por qué no viniste? → Ojalá ___ venido.", "hubieras", "«Ojalá» + pluscuamperfecto de subjuntivo expresa lamento por algo pasado: «hubieras venido»."),
      fb("Transforma.", "¿Por qué no preguntaste? → Habría sido mejor que ___ preguntado.", "hubieras", "«Habría sido mejor que» habla de algo que no ocurrió y pide pluscuamperfecto de subjuntivo: hubieras preguntado."),
      fb("Transforma (autorreproche).", "No debí gritarle. → No ___ haberle gritado.", "debería", "Autorreproche: no debería haber + participio. Solo cambia la persona del modal (yo → debería)."),
      mc(
        "«You could have warned me!»",
        ["¡Podrías haberme avisado!", "¡Podrías habiendo avisado!", "¡Podrías avisarme haber!", "¡Pudieras me haber avisado!"],
        0,
        "El reproche se forma con «podrías haber» + participio: «podrías haberme avisado». «Habiendo avisado» es gerundio, y en las otras el orden no es correcto."
      ),
      ms(
        "¿Qué reproches son correctos?",
        ["Tendrías que haberlo pensado antes.", "Deberías haber llegado antes.", "Habría sido mejor que te hubieras quedado.", "Ojalá habrías venido."],
        [0, 1, 2],
        "«Ojalá» va con subjuntivo, nunca con condicional: «ojalá hubieras venido». Por eso «Ojalá habrías venido» es incorrecta."
      ),
      wo("Nunca debería haber aceptado aquel trabajo.", "Autorreproche con debería haber + participio; «nunca» va delante del modal.", "I should never have accepted that job."),
      toEs("¿Por qué no me esperasteis?", "Podríais haberme esperado.", "La queja pasa a reproche con podríais (vosotros) + haber + participio; el pronombre me se pega a haber.", ["Habríais podido esperarme.", "Me podríais haber esperado.", "Deberíais haberme esperado."], "Transforma la queja en un reproche con «podríais»."),
      toEs("Habría sido mejor que me hubieras avisado.", "Ojalá me hubieras avisado.", "Con «ojalá» el reproche se vuelve un lamento, pero el verbo sigue igual: pluscuamperfecto de subjuntivo (hubieras avisado).", ["Ojalá me hubieses avisado."], "Cambia el reproche a un lamento con «ojalá»."),
      toEs("Habría sido mejor que habrías traído la chaqueta.", "Habría sido mejor que hubieras traído la chaqueta.", "Tras «habría sido mejor que» va el pluscuamperfecto de subjuntivo (hubieras traído); el condicional no puede repetirse en la subordinada.", ["Habría sido mejor que hubieras llevado la chaqueta.", "Hubiera sido mejor que hubieras traído la chaqueta."], "Corrige la frase."),
      toEs("Deberías haber me pedido permiso.", "Deberías haberme pedido permiso.", "El pronombre se escribe pegado al infinitivo haber (haberme) o delante del modal (Me deberías haber pedido permiso), nunca suelto entre los dos.", ["Me deberías haber pedido permiso."], "Corrige la frase."),
    ]
  ),
  L(
    "conditional-perfect-pluperfect-subjunctive-drill-3",
    "b2r-dialogue-courtroom",
    "Laboratorio de diálogo: el juicio",
    "Practicarás los condicionales de tipo 3 (si + pluscuamperfecto de subjuntivo, condicional perfecto) en las preguntas y respuestas de un juicio.",
    "8 min",
    [
      sec(
        "El interrogatorio",
        [
          "Recuerda la regla: las hipótesis sobre el pasado dominan un juicio. La pregunta y la respuesta van en condicional perfecto (¿lo habría reconocido? — Sí, lo habría reconocido) y la condición, en si + pluscuamperfecto de subjuntivo (si hubiera visto…). Con usted, el verbo va en tercera persona.",
          "¿Por qué? El abogado no pregunta qué pasó, sino qué habría pasado en otras circunstancias. Para responder, repite el tiempo de la pregunta: a «¿habría…?» se contesta con «habría…», nunca con «hubiera» detrás de «sí» ni con un pretérito.",
        ],
        [
          ["—Si hubiera visto al ladrón, ¿lo habría reconocido?", "If you had seen the thief, would you have recognized him?"],
          ["—Sí, si hubiera estado más cerca, lo habría reconocido.", "Yes, if I had been closer, I would have recognized him."],
          ["—¿Y habría llamado a la policía?", "And would you have called the police?"],
        ],
        [
          fb("Responde como testigo.", "Si ___ algo sospechoso, habría llamado inmediatamente. (notar, yo)", "hubiera notado", "La condición va en pluscuamperfecto de subjuntivo: hubiera notado. «Habría notado» solo va en la consecuencia."),
          mc(
            "El fiscal pregunta: «¿Habría abierto usted la puerta a un desconocido?» ¿Qué responde la testigo?",
            ["No, nunca se la habría abierto.", "No, nunca se la abrí.", "No, nunca se la abriera.", "No, nunca se la abriría ayer."],
            0,
            "A una pregunta hipotética sobre el pasado se responde en condicional perfecto: se la habría abierto. «Se la abrí» cuenta un hecho real, «abriera» no puede ir solo en la oración principal y «abriría ayer» mezcla el condicional simple con un momento pasado."
          ),
        ]
      ),
    ],
    [
      fb("Completa la pregunta del abogado.", "¿Qué ___ usted si hubiera oído un grito? (hacer)", "habría hecho", "Pregunta sobre una reacción hipotética en el pasado: condicional perfecto, con el participio irregular hecho."),
      fb("Completa la declaración.", "Si la puerta no hubiera estado abierta, nadie ___ entrar. (poder)", "habría podido", "Consecuencia de una condición pasada: condicional perfecto de poder + infinitivo."),
      fb("Completa el alegato final.", "Si mi cliente fuera culpable, no ___ venido a declarar voluntariamente. (haber)", "habría", "Mixta: ser culpable es un estado actual (fuera) y venir a declarar es un hecho pasado (habría venido)."),
      mt(
        "Relaciona cada pregunta con su respuesta.",
        [
          ["¿Habría ido a la fiesta si lo hubieran invitado?", "Sí, habría ido encantado."],
          ["¿Qué habría hecho con el dinero?", "Lo habría devuelto."],
          ["¿Lo habría denunciado?", "No, no me habría atrevido."],
          ["¿Habría cambiado algo?", "No habría cambiado nada."],
        ],
        "Cada respuesta retoma el verbo de la pregunta y mantiene el condicional perfecto."
      ),
      mc(
        "«If I had known it was him, I wouldn't have opened the door.»",
        ["Si hubiera sabido que era él, no habría abierto la puerta.", "Si habría sabido que era él, no hubiera abierto la puerta.", "Si supiera que era él, no habría abierto la puerta.", "Si hubiera sabido que era él, no abría la puerta."],
        0,
        "Irreal pasado: «si hubiera sabido» + «no habría abierto». Tras «si» nunca va «habría», «si supiera» es presente, y «no abría» es imperfecto de indicativo."
      ),
      toEs("Nobody would have noticed if the alarm hadn't sounded.", "Nadie se habría dado cuenta si no hubiera sonado la alarma.", "Consecuencia en condicional perfecto (se habría dado cuenta) y condición en pluscuamperfecto de subjuntivo (si no hubiera sonado).", ["Nadie se habría dado cuenta si la alarma no hubiera sonado.", "Nadie se hubiera dado cuenta si no hubiera sonado la alarma."]),
      wo("Si lo hubiera sabido, habría actuado de otra manera.", "Si + pluscuamperfecto de subjuntivo (hubiera sabido) + condicional perfecto (habría actuado). Variante: «de haberlo sabido».", "If I had known, I would have acted differently."),
      mc(
        "La abogada pregunta: «Si su jefe no lo hubiera despedido, ¿habría robado usted el dinero?» ¿Cuál es la respuesta más coherente del acusado?",
        ["Claro que no. Yo nunca habría robado nada.", "Claro que no. Yo nunca robaré nada.", "Claro que no. Yo nunca robara nada.", "Claro que no. Yo nunca habré robado nada."],
        0,
        "La respuesta mantiene el condicional perfecto de la pregunta: nunca habría robado. «Robaré» habla del futuro, «robara» no puede ir solo en la oración principal y «habré robado» es futuro perfecto."
      ),
      toEs("El testigo no llevaba gafas y no vio la matrícula.", "Si el testigo hubiera llevado gafas, habría visto la matrícula.", "Los hechos reales se invierten: llevaba → si hubiera llevado (pluscuamperfecto de subjuntivo) y no vio → habría visto (condicional perfecto).", ["Si el testigo hubiera llevado gafas, hubiera visto la matrícula.", "Si el testigo hubiera llevado lentes, habría visto la matrícula.", "Si el testigo hubiera llevado anteojos, habría visto la matrícula."], "Transforma los hechos en la hipótesis del abogado: «Si el testigo…»."),
      toEs("Si usted habría estado en casa, habría oído los disparos.", "Si usted hubiera estado en casa, habría oído los disparos.", "En la cláusula de «si» va hubiera + participio; «habría» se reserva para la consecuencia.", ["Si usted hubiera estado en casa, hubiera oído los disparos."], "Corrige la frase."),
      { type: "speak", prompt: "Responde en voz alta como testigo: «¿Qué habría hecho usted si hubiera visto el robo?»", text: "Si hubiera visto el robo, habría llamado a la policía.", explanation: "Responde con la misma estructura: si + pluscuamperfecto de subjuntivo y condicional perfecto (habría llamado)." },
    ]
  ),
  L(
    "reported-speech-drill-3",
    "b2r-mission-meeting-minutes",
    "Misión real: el acta de la reunión",
    "Redacta el acta de una reunión: quién dijo qué, quién propuso qué y qué se acordó.",
    "8 min",
    [
      sec(
        "Verbos de habla",
        [
          "Recuerda la regla: un acta evita repetir «dijo» y usa verbos precisos. Los verbos que informan (afirmar, explicar, reconocer, advertir, coincidir en) van con indicativo; los que influyen en otros (proponer, sugerir, pedir, insistir en) van con subjuntivo. Como el acta se escribe después, todo retrocede: presente → imperfecto, futuro → condicional, subjuntivo → imperfecto de subjuntivo.",
          "¿Por qué? El verbo introductor dice qué tipo de acto fue: un dato (afirmó que las ventas habían subido) o una propuesta que aún no se ha cumplido (propuso que se contratara a alguien). Esa diferencia es la que marca el modo.",
        ],
        [
          ["La directora afirmó que las ventas habían subido.", "The director stated that sales had gone up. (dato → indicativo)"],
          ["Luis propuso que se contratara a dos personas más.", "Luis proposed hiring two more people. (propuesta → subjuntivo)"],
          ["Ana advirtió que el presupuesto no sería suficiente.", "Ana warned that the budget wouldn't be enough. (futuro → condicional)"],
        ],
        [
          fb("Completa el acta.", "El gerente sugirió que ___ la reunión al viernes. (trasladar, nosotros)", "trasladáramos", "Sugerir expresa una propuesta: subjuntivo, y como el verbo está en pasado, imperfecto de subjuntivo."),
          mc(
            "En la reunión, Rosa dijo: «Yo me encargo de las facturas». ¿Qué verbo resume mejor su intervención en el acta?",
            ["Rosa se ofreció a encargarse de las facturas.", "Rosa propuso que se encargara de las facturas.", "Rosa pidió que se encarga de las facturas.", "Rosa advirtió encargarse de las facturas."],
            0,
            "Rosa se ofrece ella misma, así que lo natural es «ofrecerse a» + infinitivo. «Propuso que se encargara» sugiere que encarga la tarea a otra persona, «pidió que se encarga» mezcla petición e indicativo y «advertir» no admite ese infinitivo."
          ),
        ]
      ),
    ],
    [
      fb("Completa el acta.", "Marta explicó que el proyecto ___ retrasado por la lluvia. (haberse)", "se había", "Explicar transmite información (indicativo) y el retraso fue anterior a la reunión: pluscuamperfecto, se había retrasado."),
      fb("Completa el acta.", "El director preguntó si alguien ___ alguna objeción. (tener)", "tenía", "Pregunta de sí/no: «preguntó si» + imperfecto (¿Alguien tiene…? → si alguien tenía)."),
      fb("Completa el acta.", "Se acordó que la próxima reunión ___ en marzo. (celebrarse, condicional)", "se celebraría", "Lo acordado para el futuro se cuenta desde el pasado con condicional: se celebraría."),
      mt(
        "Relaciona cada verbo con su construcción típica.",
        [
          ["afirmar que", "+ indicativo"],
          ["proponer que", "+ subjuntivo"],
          ["preguntar si", "+ indicativo (pregunta sí/no)"],
          ["pedir que", "+ subjuntivo (petición)"],
        ],
        "Los verbos de información van con indicativo; los de influencia (proponer, pedir), con subjuntivo."
      ),
      mc(
        "«Let's postpone the vote», she said. → en el acta:",
        ["Propuso que se aplazara la votación.", "Propuso que se aplazaba la votación.", "Propuso aplazar se la votación.", "Propuso que aplacemos la votación ayer."],
        0,
        "«Proponer que» en pasado exige imperfecto de subjuntivo: «se aplazara». «Se aplazaba» es indicativo, y «aplacemos… ayer» no concuerda con el pasado."
      ),
      toEs("The director acknowledged that there had been mistakes.", "La directora reconoció que había habido errores.", "Reconocer informa (indicativo) y los errores son anteriores: pluscuamperfecto del haber impersonal, siempre en singular (había habido).", ["El director reconoció que había habido errores."]),
      wo("Todos coincidieron en que era necesario cambiar de estrategia.", "Coincidir en que expresa acuerdo sobre un dato: indicativo (era).", "Everyone agreed that it was necessary to change strategy."),
      toEs("Javier: «Hay que revisar el contrato antes del lunes.»", "Javier insistió en que había que revisar el contrato antes del lunes.", "«Insistir en que» + indicativo cuando se insiste en una idea; el presente «hay que» retrocede a «había que».", ["Javier afirmó que había que revisar el contrato antes del lunes.", "Javier dijo que había que revisar el contrato antes del lunes.", "Javier explicó que había que revisar el contrato antes del lunes."], "Transforma la intervención en una línea del acta con «insistió en que»."),
      toEs("Luisa: «Propongo que cambiemos de proveedor.»", "Luisa propuso que cambiáramos de proveedor.", "Propongo → propuso, y el subjuntivo retrocede: cambiemos → cambiáramos.", ["Luisa propuso cambiar de proveedor."], "Transforma la intervención en una línea del acta."),
      toEs("El director afirmó que las cuentas estuvieran claras.", "El director afirmó que las cuentas estaban claras.", "Afirmar transmite un dato: va con indicativo (estaban). El subjuntivo solo iría con un verbo de influencia como pedir o exigir.", ["El director afirmó que las cuentas eran claras."], "Corrige la frase."),
      toEs("La jefa pidió que todos entregaban el informe el viernes.", "La jefa pidió que todos entregaran el informe el viernes.", "Pedir que expresa una petición: subjuntivo, y con «pidió», imperfecto de subjuntivo (entregaran).", [], "Corrige la frase."),
    ]
  ),
  L(
    "reported-speech-drill-3",
    "b2r-dialogue-broken-telephone",
    "Laboratorio de diálogo: el teléfono escacharrado",
    "Un mensaje pasa de persona en persona y cambia en cada paso: practica el estilo indirecto en cadena.",
    "7 min",
    [
      sec(
        "La cadena",
        [
          "Recuerda la regla: en cada paso de la cadena, quien cuenta mira hacia atrás. Lo que la persona anterior «dijo» se cuenta con pluscuamperfecto si ya había ocurrido (le había dicho), el presente retrocede a imperfecto, el futuro a condicional y las órdenes a imperfecto de subjuntivo. Los pronombres y posesivos cambian según quién habla.",
          "¿Por qué? Cada eslabón añade un pasado más: Ana habla, Luis cuenta lo que dijo Ana, Eva cuenta lo que le había dicho Luis… El tiempo verbal ordena esos niveles y evita que el mensaje se confunda.",
        ],
        [
          ["Ana a Luis: «Mañana no vengo porque estoy enferma».", "Ana to Luis: \"I'm not coming tomorrow because I'm sick.\""],
          ["Luis a Eva: «Ana me dijo que al día siguiente no venía porque estaba enferma».", "Luis to Eva: \"Ana told me she wasn't coming the next day because she was sick.\""],
          ["Eva a Pablo: «Luis me contó que Ana le había dicho que no iba a venir».", "Eva to Pablo: \"Luis told me Ana had told him she wasn't going to come.\""],
        ],
        [
          fb("Continúa la cadena.", "Pablo: «Eva me contó que Luis le ___ contado que Ana estaba enferma».", "había", "Lo que Luis le contó a Eva es anterior a lo que Eva cuenta ahora: pluscuamperfecto, le había contado."),
        ]
      ),
    ],
    [
      fb("Transforma.", "Jefe: «Terminad el informe hoy». → El jefe nos pidió que ___ el informe ese día.", "termináramos", "Una orden en estilo indirecto en pasado va en imperfecto de subjuntivo: «termináramos»."),
      fb("Transforma.", "Lucía: «¿Has visto mi móvil?» → Lucía me preguntó si ___ su móvil.", "había visto", "En estilo indirecto con «preguntó», el pretérito perfecto pasa a pluscuamperfecto: «había visto»."),
      fb("Transforma.", "Pedro: «Nunca volveré a este restaurante». → Pedro juró que nunca ___ a aquel restaurante.", "volvería", "El futuro (volveré) pasa a condicional (volvería), y «este» se aleja a «aquel»."),
      mc(
        "Madre: «No toques eso». → en estilo indirecto:",
        ["Mi madre me dijo que no tocara eso.", "Mi madre me dijo que no toques eso ayer.", "Mi madre me dijo que no tocaba eso.", "Mi madre me dijo no tocar que eso."],
        0,
        "Una orden negativa en estilo indirecto en pasado va con «que no» + imperfecto de subjuntivo: «que no tocara». «Que no toques… ayer» no concuerda, y «no tocaba» es indicativo."
      ),
      ms(
        "Una semana después cuentas lo que te dijeron: «Estoy cansado.» / «¿Dónde vivimos?» / «Espérame.» / «Ven mañana.» ¿Qué versiones indirectas son correctas?",
        ["Dijo que estaba cansado.", "Preguntó dónde vivíamos.", "Me pidió que la esperara.", "Me dijo que venga mañana."],
        [0, 1, 2],
        "Con «dijo» en pasado, una orden va en imperfecto de subjuntivo y «mañana» pasa a «al día siguiente»: «que viniera al día siguiente». «Me dijo que venga mañana» no hace esos cambios (solo valdría si la orden siguiera vigente)."
      ),
      toEs("He told me he would call me when he arrived.", "Me dijo que me llamaría cuando llegara.", "Futuro → condicional (llamaría); «cuando» con valor de futuro pasa de presente de subjuntivo a imperfecto de subjuntivo (llegara).", ["Me dijo que me llamaría cuando llegase."]),
      wo("Al final nadie sabía exactamente qué había dicho Ana.", "Pregunta indirecta con «qué» y pluscuamperfecto, porque lo que dijo Ana fue anterior.", "In the end nobody knew exactly what Ana had said."),
      mc(
        "Eva te pregunta: «¿Qué te dijo Luis?». Luis te había dicho: «Llegaré tarde». ¿Qué le respondes a Eva?",
        ["Me dijo que llegaría tarde.", "Me dijo que llegaré tarde.", "Me dijo que llegara tarde.", "Me dijo que había llegado tarde."],
        0,
        "Al contar lo que dijo Luis, su futuro pasa a condicional (llegaría) y la persona cambia: él, no yo. «Llegara» sería una orden y «había llegado» cambia el sentido."
      ),
      toEs("Luis me dijo que Ana dijo que venía.", "Luis me dijo que Ana le había dicho que venía.", "Lo que Ana dijo es anterior a lo que cuenta Luis: pluscuamperfecto (le había dicho). Así se ven los dos niveles de la cadena.", ["Luis me dijo que Ana le había dicho que vendría."], "Corrige la frase: Ana habló antes que Luis."),
      toEs("Marta me pidió que la llamo al día siguiente.", "Marta me pidió que la llamara al día siguiente.", "«Pedir que» exige subjuntivo, y con «pidió», imperfecto de subjuntivo: la llamara.", [], "Corrige la frase."),
    ]
  ),
  L(
    "reported-speech-drill-3",
    "b2r-contrast-decir-que",
    "Contraste: «dice que viene» / «dice que vengas»",
    "Decir, escribir o avisar que pueden informar (indicativo) u ordenar (subjuntivo). Aprende a distinguirlos.",
    "7 min",
    [
      sec(
        "Informar u ordenar",
        [
          "Recuerda la regla: los verbos de comunicación (decir, escribir, avisar, insistir en) tienen dos sentidos. Si transmiten un dato van con indicativo (Dice que viene); si transmiten una orden o una petición, con subjuntivo (Dice que vengas). En pasado: Dijo que venía / Dijo que vinieras.",
          "¿Por qué? El modo es lo único que distingue «he says he's coming» de «he says you should come»; por eso confundirlos cambia el mensaje. Pregúntate: ¿me cuenta algo o me pide que haga algo?",
        ],
        [
          ["Mamá dice que la cena está lista.", "Mom says dinner is ready. (dato)"],
          ["Mamá dice que pongas la mesa.", "Mom says to set the table. (orden)"],
          ["Me escribió que llegaba tarde. / Me escribió que lo esperara.", "He wrote that he was arriving late. / He wrote asking me to wait for him."],
        ],
        [
          mc(
            "«El médico dice que ___ reposo.» (instrucción)",
            ["hagas", "haces", "hiciste", "harás"],
            0,
            "Cuando «decir» transmite una instrucción, va con subjuntivo: «que hagas reposo». «Haces» solo informaría, y «hiciste» y «harás» no son órdenes."
          ),
          fb("¿Información u orden?", "Insiste en que ___ en el coche; no quiere ir andando. (ir, nosotros)", "vayamos", "Aquí insistir transmite una exigencia: subjuntivo, vayamos. «Vamos» significaría que insiste en que ya vamos en coche."),
        ]
      ),
    ],
    [
      fb("¿Información u orden?", "Dice Juan que no ___ a cenar; se queda en la oficina. (venir, él)", "viene", "Es un dato sobre Juan: indicativo, viene."),
      fb("¿Información u orden?", "Dice Juan que ___ sin él. (empezar, nosotros)", "empecemos", "Juan nos pide algo: subjuntivo, empecemos."),
      fb("¿Información u orden? (pasado)", "Me avisaron que el vuelo ___ retraso. (tener)", "tenía", "Avisar de un dato: indicativo, y como «avisaron» está en pasado, imperfecto (tenía)."),
      fb("¿Información u orden? (pasado)", "Me avisaron que ___ con tiempo al aeropuerto. (ir, yo)", "fuera", "Avisar con valor de consejo u orden: subjuntivo, y en pasado, imperfecto de subjuntivo (fuera)."),
      mt(
        "Relaciona cada frase con su significado.",
        [
          ["Te digo que te calles.", "I'm telling you to be quiet."],
          ["Te digo que se calla.", "I'm telling you he goes quiet."],
          ["Insiste en que vengas.", "She insists that you come."],
          ["Insiste en que vino.", "She insists that he came."],
        ],
        "El modo cambia el sentido del verbo de habla: subjuntivo para pedir, indicativo para informar."
      ),
      toEs("The teacher says (that) we should read chapter three.", "La profesora dice que leamos el capítulo tres.", "Cuando «decir» transmite una orden, va con subjuntivo: «dice que leamos».", ["El profesor dice que leamos el capítulo tres."]),
      wo("Me escribió que la esperara en la puerta del cine.", "Escribir que + imperfecto de subjuntivo transmite una petición en pasado.", "She wrote asking me to wait for her at the cinema door."),
      toEs("Papá dice: «Saca la basura.»", "Papá dice que saques la basura.", "La orden (saca) se transmite con «dice que» + presente de subjuntivo: saques.", [], "Cambia la orden al estilo indirecto, empezando por «Papá dice»."),
      toEs("Papá dice que saques la basura.", "Papá dijo que sacaras la basura.", "Con el verbo de comunicación en pasado, el subjuntivo de la orden retrocede a imperfecto: saques → sacaras.", [], "Cambia «dice» por «dijo» y ajusta el otro verbo."),
      toEs("El médico dice que haces reposo una semana.", "El médico dice que hagas reposo una semana.", "Es una instrucción del médico, así que va con subjuntivo: hagas. Con «haces» parecería que informa de lo que ya haces.", [], "Corrige la frase: es una instrucción del médico."),
      toEs("Insiste en que vengas ayer.", "Insiste en que viniste ayer.", "Con «ayer» no puede ser una orden: insiste en un dato pasado, así que va con indicativo (viniste).", ["Insiste en que vino ayer."], "Corrige la frase."),
    ]
  ),
  L(
    "ser-estar-haber-nuanced-drill-3",
    "b2r-mission-doctor-visit",
    "Misión real: en la consulta",
    "Describe síntomas, estados y rasgos en una consulta médica: ser y estar con adjetivos de salud y carácter.",
    "7 min",
    [
      sec(
        "Síntomas y rasgos",
        [
          "Recuerda la regla: en la consulta, estar describe cómo te encuentras ahora (estoy mareado, está hinchado, estoy resfriada, está mejor) y ser, lo que forma parte de ti o lo que valoras (soy alérgico, es diabético, no es grave). Para preguntar si existe algo, hay.",
          "¿Por qué? Un síntoma cambia, una condición crónica no. Algunos adjetivos cambian de sentido: está grave (el paciente está muy enfermo) / es grave (el asunto es serio); está mejor (se encuentra mejor) / es mejor (es una opción mejor).",
        ],
        [
          ["Estoy mareada desde esta mañana.", "I've been dizzy since this morning. (síntoma → estar)"],
          ["Soy alérgica a la penicilina.", "I'm allergic to penicillin. (rasgo → ser)"],
          ["El tobillo está muy hinchado.", "The ankle is very swollen."],
        ],
        [
          fb("Completa.", "Mi padre ___ diabético desde hace años.", "es", "La diabetes es una condición crónica, un rasgo de la persona: ser."),
          { ...fb("Completa.", "Hoy ___ muy cansado y sin apetito.", "estoy", "Un estado físico de hoy se expresa con «estar»: «estoy cansado»."), altAnswers: ["está"] },
        ]
      ),
    ],
    [
      fb("Completa.", "La herida ya ___ cicatrizada.", "está", "«Estar» + participio expresa el resultado de un proceso: «está cicatrizada»."),
      fb("Completa.", "¿___ algún efecto secundario con este medicamento?", "Hay", "«Hay» pregunta por la existencia de algo: «¿Hay algún efecto secundario?»."),
      fb("Completa.", "Tranquilo, no ___ nada grave; es solo un resfriado.", "es", "Para valorar la gravedad de algo se usa «ser»: «no es grave»."),
      mt(
        "Relaciona cada frase con su significado.",
        [
          ["Está grave.", "He's seriously ill."],
          ["Es grave.", "It's serious (a serious matter)."],
          ["Está mejor.", "He's feeling better."],
          ["Es mejor.", "It's better (a better option)."],
        ],
        "Con ser, valoras un asunto; con estar, describes cómo se encuentra el paciente."
      ),
      ms(
        "¿Qué frases son correctas?",
        ["Estoy embarazada de tres meses.", "Soy resfriado.", "Hay una farmacia de guardia cerca.", "El análisis está listo."],
        [0, 2, 3],
        "«Resfriado» es un estado temporal, así que va con «estar»: «estoy resfriado». «Soy resfriado» es incorrecta."
      ),
      toEs("I'm allergic to pollen, and today I'm very congested.", "Soy alérgico al polen y hoy estoy muy congestionado.", "La alergia es un rasgo (ser); la congestión de hoy es un estado (estar).", ["Soy alérgica al polen y hoy estoy muy congestionada."]),
      wo("No es necesario que vuelva si ya está recuperado.", "Ser necesario (valoración) + estar recuperado (estado).", "There's no need to come back if you've already recovered."),
      mc(
        "La médica te pregunta: «¿Cómo se encuentra hoy?» ¿Qué respondes?",
        ["Estoy mucho mejor, gracias.", "Soy mucho mejor, gracias.", "Hay mucho mejor, gracias.", "Es mucho mejor, gracias."],
        0,
        "Para cómo te encuentras se usa estar: estoy mejor. «Soy mejor» significaría que eres mejor persona, y «es mejor» valora una opción, no tu salud."
      ),
      toEs("Hoy estoy mareado.", "Ayer estuve mareado toda la tarde.", "El síntoma sigue yendo con estar en pasado; como es un periodo cerrado (toda la tarde), pretérito: estuve.", ["Ayer estuve mareado durante toda la tarde.", "Ayer estuve mareada toda la tarde.", "Ayer estuve mareada durante toda la tarde."], "Cambia la frase al pasado: «ayer, toda la tarde»."),
      toEs("Soy resfriada desde el lunes.", "Estoy resfriada desde el lunes.", "Un resfriado es un estado pasajero: estar. Con ser no es posible.", ["Estoy resfriado desde el lunes."], "Corrige la frase."),
      toEs("Mi madre está alérgica a los gatos.", "Mi madre es alérgica a los gatos.", "La alergia es un rasgo de la persona, no un estado del momento: ser alérgico a.", [], "Corrige la frase."),
      { type: "speak", prompt: "Responde en voz alta a la médica: «¿Qué le pasa?». Estás mareado desde ayer y eres alérgico a la penicilina.", text: "Estoy mareado desde ayer y soy alérgico a la penicilina.", explanation: "El síntoma va con estar (estoy mareado) y la alergia, un rasgo, con ser (soy alérgico)." },
    ]
  ),
  L(
    "ser-estar-haber-nuanced-drill-3",
    "b2r-contrast-ser-estar-participle",
    "Contraste: fue cerrada / estaba cerrada",
    "Ser + participio (acción, pasiva) frente a estar + participio (resultado, estado).",
    "7 min",
    [
      sec(
        "Acción o resultado",
        [
          "Recuerda la regla: ser + participio cuenta la acción (la pasiva): quién la hizo o cuándo (La tienda fue cerrada por la policía). Estar + participio describe el estado que queda después (La tienda estaba cerrada). En los dos casos el participio concuerda con el sujeto.",
          "¿Por qué? Ser mira el momento en que algo se hace; estar, el resultado. Pistas: «por + agente», una fecha o una duración → ser; «ya», «todavía», «cuando llegué» → estar.",
        ],
        [
          ["La tienda fue cerrada por la policía.", "The shop was closed (down) by the police. (acción)"],
          ["Cuando llegué, la tienda estaba cerrada.", "When I arrived, the shop was closed. (estado)"],
          ["Las cartas ya están enviadas.", "The letters are already sent. (resultado; enviadas concuerda con cartas)"],
        ],
        [
          mc(
            "«El puente ___ construido en 1850 por ingenieros franceses.»",
            ["fue", "estuvo", "estaba", "había"],
            0,
            "Una acción con agente y fecha se expresa con la pasiva de «ser»: «fue construido». «Estuvo» y «estaba» expresan estado, y «había» no forma la pasiva."
          ),
        ]
      ),
    ],
    [
      fb("¿Acción o estado?", "La carta ya ___ escrita; solo falta firmarla.", "está", "«Estar» + participio expresa el estado resultante: «ya está escrita»."),
      fb("¿Acción o estado?", "La carta ___ escrita por el propio presidente.", "fue", "La pasiva de una acción con agente se forma con «ser» + participio: «fue escrita por…»."),
      fb("¿Acción o estado?", "Cuando entramos, la mesa ya ___ puesta. (imperfecto)", "estaba", "«Ya» y «cuando entramos» describen cómo estaba la mesa: estado, estar + participio."),
      fb("¿Acción o estado?", "Los ganadores ___ elegidos por votación popular. (pretérito)", "fueron", "Se cuenta cómo se hizo la elección («por votación»): acción, ser + participio."),
      mt(
        "Relaciona cada frase con su traducción.",
        [
          ["La puerta fue abierta a las ocho.", "The door was opened at eight."],
          ["La puerta estaba abierta.", "The door was open."],
          ["El problema fue resuelto.", "The problem was solved."],
          ["El problema está resuelto.", "The problem is solved."],
        ],
        "Con ser, la acción (was opened, was solved); con estar, el estado resultante (was open, is solved)."
      ),
      toEs("The museum is closed on Mondays.", "El museo está cerrado los lunes.", "«Estar» + participio expresa el estado resultante, también habitual: «está cerrado los lunes».", ["Los lunes el museo está cerrado."]),
      wo("La novela fue traducida a más de treinta idiomas.", "Pasiva con ser + participio concordado (traducida) para contar la acción.", "The novel was translated into more than thirty languages."),
      toEs("Los ladrones robaron el cuadro en 2010.", "El cuadro fue robado por los ladrones en 2010.", "En la pasiva, el objeto pasa a sujeto, el verbo va con ser + participio concordado (robado) y el agente con «por».", ["El cuadro fue robado en 2010 por los ladrones.", "En 2010 el cuadro fue robado por los ladrones."], "Transforma la frase en pasiva con ser."),
      toEs("Cerraron la puerta a las diez.", "Cuando llegué, la puerta estaba cerrada.", "Para describir el resultado que encontraste, no la acción, se usa estar + participio: estaba cerrada.", ["Cuando llegué la puerta ya estaba cerrada.", "Cuando llegué, la puerta ya estaba cerrada."], "Transforma la frase para describir el estado: «Cuando llegué, la puerta…»."),
      toEs("La catedral estuvo construida en el siglo XIII.", "La catedral fue construida en el siglo XIII.", "Con una fecha se cuenta la acción de construir: pasiva con ser (fue construida).", [], "Corrige la frase."),
      toEs("Tranquilo, la mesa ya es reservada.", "Tranquilo, la mesa ya está reservada.", "«Ya» señala el resultado de reservar: estar + participio.", [], "Corrige la frase."),
    ]
  ),
  L(
    "ser-estar-haber-nuanced-drill-3",
    "b2r-transform-hay-esta",
    "Transformaciones: hay un / está el",
    "Pasa de presentar algo nuevo (hay) a localizar algo ya conocido (está) — y al revés.",
    "7 min",
    [
      sec(
        "Nuevo o conocido",
        [
          "Recuerda la regla: hay (había, habrá) + indefinido, número, cantidad o sustantivo sin artículo presenta algo nuevo y no cambia nunca a plural. Está / están + definido, posesivo o nombre propio localiza algo ya conocido y concuerda con el sujeto.",
          "¿Por qué? El artículo te dice si el oyente ya sabe de qué hablas. Si cambias «una farmacia» por «la farmacia», cambia también el verbo: hay → está.",
        ],
        [
          ["Hay una farmacia en la esquina. → La farmacia está en la esquina.", "There's a pharmacy on the corner. → The pharmacy is on the corner."],
          ["Había dos policías en la puerta. → Los policías estaban en la puerta.", "There were two police officers at the door. → The police officers were at the door. (había no concuerda; estaban sí)"],
        ],
        [
          fb("Transforma a estar.", "Hay un gato en el tejado. → El gato ___ en el tejado.", "está", "Con algo ya conocido («el gato») la ubicación se expresa con «estar», no con «hay»."),
        ]
      ),
    ],
    [
      fb("Transforma a haber.", "Los libros están en la mesa. → ___ libros en la mesa.", "Hay", "Para presentar algo nuevo, sin artículo, se usa «hay»: «hay libros»."),
      fb("Transforma a estar (pasado).", "Había una ambulancia en la puerta. → La ambulancia ___ en la puerta.", "estaba", "Con algo ya conocido («la ambulancia») se usa «estar»; en pasado descriptivo, «estaba»."),
      fb("Transforma a haber (futuro).", "Los invitados estarán en el jardín. → ___ invitados en el jardín.", "Habrá", "Para presentar algo sin artículo se usa «haber», siempre en singular: «habrá invitados»."),
      mc(
        "¿Cuál es correcta?",
        ["¿Hay un banco por aquí?", "¿Está un banco por aquí?", "¿Hay el banco por aquí?", "¿Están bancos por aquí?"],
        0,
        "Para presentar algo nuevo, con artículo indefinido, se usa «hay»: «¿Hay un banco por aquí?». «Está un banco» y «hay el banco» mezclan mal artículo y verbo."
      ),
      ms(
        "¿Qué frases son correctas?",
        ["¿Dónde está el baño?", "Hay mucha gente en la calle.", "Hay mis padres en casa.", "Mis padres están en casa."],
        [0, 1, 3],
        "Con algo determinado (un posesivo como «mis padres») se usa «estar», no «hay»: «mis padres están en casa». «Hay mis padres» es incorrecta."
      ),
      toEs("There will be a concert in the square; the stage is already there.", "Habrá un concierto en la plaza; el escenario ya está allí.", "«Habrá» presenta algo nuevo (un concierto) y «está» sitúa algo ya conocido (el escenario).", ["Habrá un concierto en la plaza; el escenario ya está ahí."]),
      wo("Hay leche en la nevera, pero el queso está en la despensa.", "Hay (sin artículo) frente a está (con artículo).", "There's milk in the fridge, but the cheese is in the pantry."),
      toEs("Hay el cine al final de la calle.", "El cine está al final de la calle.", "«El cine» ya es conocido: se localiza con estar. Hay no se combina con el artículo definido.", ["Hay un cine al final de la calle."], "Corrige la frase."),
      toEs("Están dos coches en el garaje.", "Hay dos coches en el garaje.", "Un número + sustantivo presenta algo nuevo: hay, que además no cambia a plural.", [], "Corrige la frase."),
    ]
  ),
  L(
    "verbs-of-change-drill-3",
    "b2r-dialogue-reunion-old-classmates",
    "Laboratorio de diálogo: el reencuentro de antiguos compañeros",
    "Veinte años después: ¿en qué se ha convertido cada uno? Verbos de cambio en conversación.",
    "7 min",
    [
      sec(
        "¿Qué ha sido de…?",
        [
          "Recuerda la regla: para contar trayectorias se elige el verbo según el tipo de cambio. Hacerse = profesión, religión o estatus elegido; llegar a ser = meta lenta y positiva; volverse = cambio de carácter involuntario; convertirse en + sustantivo = transformación completa; quedarse = estado que deja un hecho; ponerse = reacción de un momento.",
          "¿Por qué? En un reencuentro hablamos de cambios que siguen vigentes hoy, por eso usamos el pretérito perfecto (se ha hecho, se ha vuelto). Pero la reacción al ver a alguien es un instante ya cerrado: se puso rojo, se puso muy contenta.",
        ],
        [
          ["—¿Te acuerdas de Marcos? Se ha hecho millonario.", "Remember Marcos? He's become a millionaire."],
          ["—¡No me digas! Y Laura ha llegado a ser jueza.", "No way! And Laura has become a judge."],
          ["—Pues Pedro se ha vuelto muy serio; no parece el mismo.", "Well, Pedro has become very serious; he doesn't seem the same."],
        ],
        [
          fb("Completa.", "El más gamberro de la clase ___ policía. (hacerse, perfecto)", "se ha hecho", "Una profesión elegida se expresa con hacerse: se ha hecho policía. «Se ha puesto policía» es imposible, porque ponerse solo va con estados pasajeros."),
        ]
      ),
    ],
    [
      fb("Completa.", "La tímida de la clase ___ en una actriz famosa. (convertirse, perfecto)", "se ha convertido", "Convertirse en + sustantivo expresa una transformación completa de la persona. La preposición «en» descarta hacerse y volverse, que no la llevan."),
      fb("Completa.", "Cuando me vio, ___ rojo como un tomate. (ponerse, pretérito)", "se puso", "Ponerse rojo es una reacción física de un momento; el pretérito la presenta como un instante cerrado. Volverse rojo sugeriría un cambio permanente."),
      fb("Completa.", "Desde que se divorció, ___ muy solitario. (volverse, perfecto)", "se ha vuelto", "«Desde que se divorció» marca un cambio de carácter que dura hasta hoy: se ha vuelto. Ponerse solitario no existe, porque no es una reacción pasajera."),
      mt(
        "Relaciona cada cambio con su verbo.",
        [
          ["directora del colegio", "llegar a ser"],
          ["calvo", "quedarse"],
          ["vegano", "hacerse"],
          ["más tranquilo con los años", "volverse"],
        ],
        "Un cargo alto es un logro (llegar a ser), la calvicie es un estado resultante (quedarse), una dieta elegida es una decisión (hacerse) y un cambio de carácter lento va con volverse."
      ),
      mc(
        "«She's become a very important person in the company.»",
        ["Se ha convertido en una persona muy importante en la empresa.", "Se ha puesto una persona muy importante en la empresa.", "Se ha quedado en una persona muy importante.", "Ha hecho una persona muy importante."],
        0,
        "«Convertirse en» + sustantivo expresa una transformación: «se ha convertido en una persona muy importante». «Se ha puesto», «se ha quedado en» y «ha hecho» no expresan ese cambio."
      ),
      toEs("We have all changed a lot.", "Todos hemos cambiado mucho.", "Para el cambio en general, sin decir en qué, se usa cambiar sin pronombre. Un verbo de cambio como volverse necesitaría un adjetivo (nos hemos vuelto más serios).", ["Todos hemos cambiado muchísimo.", "Hemos cambiado todos mucho."]),
      wo("Nadie esperaba que llegara a ser alcalde del pueblo.", "Esperar que + imperfecto de subjuntivo + llegar a ser.", "Nobody expected him to become the town's mayor."),
      mc(
        "Tu antigua compañera te pregunta: «¿Y qué ha sido de Andrés, el que quería ser médico?» ¿Qué respondes?",
        ["Pues al final se hizo enfermero y es feliz.", "Pues al final se puso enfermero y es feliz.", "Pues al final se quedó en enfermero y es feliz.", "Pues al final se volvió enfermero y es feliz."],
        0,
        "Una profesión elegida lleva hacerse: se hizo enfermero. Ponerse no va con profesiones, «quedarse en» sugiere que no llegó a más (y contradice «es feliz») y volverse es para el carácter."
      ),
      toEs("Lucía era muy tímida en el instituto.", "Lucía se ha vuelto muy extrovertida desde el instituto.", "Un cambio de carácter que dura hasta hoy se expresa con volverse en pretérito perfecto. Ponerse extrovertida sería solo un momento.", ["Desde el instituto, Lucía se ha vuelto muy extrovertida.", "Lucía se ha vuelto muy abierta desde el instituto."], "Transforma la frase para contar el cambio: usa volverse, «extrovertida» y «desde el instituto»."),
      toEs("El restaurante de Sergio tiene ahora tres estrellas.", "El restaurante de Sergio ha llegado a ser uno de los mejores del país.", "Un logro lento y positivo se cuenta con llegar a ser. Hacerse sonaría a una decisión, no al resultado de años de trabajo.", ["El restaurante de Sergio se ha convertido en uno de los mejores del país."], "Reescribe la frase con llegar a ser y «uno de los mejores del país»."),
      toEs("Desde que perdió el trabajo, Óscar se ha puesto muy pesimista.", "Desde que perdió el trabajo, Óscar se ha vuelto muy pesimista.", "«Desde que» marca un cambio de carácter que se mantiene: volverse. Ponerse pesimista describiría solo un mal día.", [], "Corrige la frase."),
      toEs("Al vernos entrar, la profesora se volvió muy emocionada.", "Al vernos entrar, la profesora se puso muy emocionada.", "La emoción de un instante concreto (al vernos entrar) es pasajera: ponerse. Volverse se reserva para cambios duraderos de carácter.", ["Al vernos entrar, la profesora se emocionó mucho."], "Corrige la frase."),
      { type: "speak", prompt: "Cuéntale a un antiguo compañero en qué ha cambiado tu vida: di que te has hecho profesor y que te has vuelto más paciente.", text: "Me he hecho profesor y me he vuelto mucho más paciente.", explanation: "La profesión elegida va con hacerse y el cambio de carácter con volverse; el perfecto conecta los cambios con hoy." },
    ]
  ),
  L(
    "verbs-of-change-drill-3",
    "b2r-error-hunt-verbs-of-change",
    "Caza de errores: los verbos de cambio",
    "«Se puso médico», «se volvió rojo», «se hizo cansado» — corrige los verbos de cambio mal elegidos.",
    "7 min",
    [
      sec(
        "Combinaciones imposibles",
        [
          "Recuerda la regla: ponerse no va con profesiones ni identidades; hacerse no va con estados físicos o emocionales de un momento; volverse no suele ir con emociones pasajeras; quedarse necesita un hecho que provoque el estado.",
          "¿Por qué? Cada verbo lleva su propio significado: ponerse = algo que se pone y se quita, hacerse = algo que el sujeto hace o consigue, volverse = un cambio que se queda sin que lo elijas, quedarse = permanecer en un estado tras un hecho. Si el significado no encaja con la situación, la frase falla.",
        ],
        [
          ["✗ Se puso abogado. → ✓ Se hizo abogado.", "He became a lawyer."],
          ["✗ Se hizo nervioso antes del examen. → ✓ Se puso nervioso.", "He got nervous before the exam."],
        ],
        [
          fb("Corrige.", "Al oír la noticia, ___ pálida. (el alumno escribió: se volvió)", "se puso", "Un cambio físico instantáneo se expresa con «ponerse», no con «volverse»: «se puso pálida»."),
        ]
      ),
    ],
    [
      fb("Corrige.", "Después de años de estudio, ___ arquitecta. (el alumno escribió: se puso)", "se hizo", "Una profesión alcanzada por esfuerzo se expresa con «hacerse», no con «ponerse»: «se hizo arquitecta»."),
      fb("Corrige.", "Con la edad, mi abuelo ___ muy cascarrabias. (el alumno escribió: se puso)", "se volvió", "«Con la edad» indica un cambio de carácter lento y duradero: volverse. Ponerse cascarrabias sería un enfado de un momento."),
      fb("Corrige.", "Tras el concierto, ___ afónico. (el alumno escribió: se hizo)", "se quedó", "El resultado de algo, a menudo una pérdida, se expresa con «quedarse»: «se quedó afónico»."),
      ms(
        "¿Qué frases tienen un error?",
        ["Se hizo famoso con su primera novela.", "Se puso contenta al verme.", "Se volvió médico en 2010.", "Se quedó dormido en el sofá."],
        [2],
        "Para una profesión se usa «hacerse», no «volverse»: «se hizo médico». Por eso «Se volvió médico» tiene un error; las otras frases son correctas."
      ),
      mc(
        "¿Cuál es correcta?",
        ["El pueblo se convirtió en ciudad.", "El pueblo se puso ciudad.", "El pueblo se hizo en ciudad.", "El pueblo llegó a ciudad en."],
        0,
        "«Convertirse en» + sustantivo expresa una transformación: «se convirtió en ciudad». «Se puso ciudad» y «se hizo en ciudad» no son correctas."
      ),
      toEs("He fell asleep watching TV.", "Se quedó dormido viendo la tele.", "«Quedarse dormido» significa dormirse sin querer. «Se puso dormido» es un error: dormido es el estado que resulta, no una reacción.", ["Se durmió viendo la tele.", "Se quedó dormido viendo la televisión."]),
      wo("Me pongo de mal humor cuando tengo hambre.", "Ponerse de + sustantivo (mal humor).", "I get grumpy when I'm hungry."),
      toEs("El año pasado se hizo enfermo y estuvo dos semanas en cama.", "El año pasado se puso enfermo y estuvo dos semanas en cama.", "Enfermar es un cambio físico pasajero: ponerse enfermo. Hacerse supone un cambio elegido o conseguido, y nadie elige enfermar.", ["El año pasado se enfermó y estuvo dos semanas en cama."], "Corrige la frase."),
      toEs("Mi hermano se puso budista.", "Mi hermano se hizo budista hace unos años.", "Una religión elegida es un cambio que el sujeto decide: hacerse. «Hace unos años» confirma que no es un estado de un momento.", ["Hace unos años, mi hermano se hizo budista."], "Corrige el verbo y añade «hace unos años» al final."),
      toEs("Nuestro barrio era tranquilo. Ahora es peligroso.", "Nuestro barrio se ha vuelto peligroso.", "Un cambio negativo y duradero que nadie eligió se expresa con volverse; el perfecto conecta el cambio con hoy. Ponerse peligroso no existe y hacerse peligroso sugeriría intención.", ["Nuestro barrio, que era tranquilo, se ha vuelto peligroso."], "Transforma las dos frases en una con volverse en pretérito perfecto."),
      { type: "speak", prompt: "Corrige en voz alta la frase de un compañero: «Se volvió nerviosa antes de la entrevista».", text: "Se puso nerviosa antes de la entrevista.", explanation: "Los nervios antes de una entrevista son pasajeros: ponerse. Volverse nerviosa diría que su carácter cambió para siempre." },
    ]
  ),
  L(
    "verbs-of-change-drill-3",
    "b2r-mission-city-before-after",
    "Misión real: el antes y el después de una ciudad",
    "Describe cómo ha cambiado tu ciudad en veinte años — verbos de cambio, comparaciones y pasados.",
    "7 min",
    [
      sec(
        "Recuerda la regla: tres tiempos, tres funciones",
        [
          "Para contar el antes y el después de un lugar, cada tiempo tiene un trabajo: el imperfecto describe cómo ERA el lugar (era, había, estaba); el pretérito perfecto o el indefinido cuentan el CAMBIO (se ha convertido, se volvió); el presente describe el AHORA (es, hay, está).",
          "¿Por qué? El imperfecto no tiene principio ni final: pinta un fondo. El cambio es un hecho con resultado, y por eso va en perfecto (si el periodo llega hasta hoy: en los últimos años, desde que…) o en indefinido (si es un momento cerrado: en 2010, cuando cerró la fábrica).",
        ],
        [
          ["Antes el puerto era una zona peligrosa; ahora es el barrio de moda.", "The port used to be dangerous; now it's the trendy neighbourhood. (era = el fondo de antes; es = el ahora)"],
          ["En los últimos años el centro se ha vuelto muy caro.", "In recent years the centre has become very expensive. (periodo que llega hasta hoy → perfecto)"],
          ["En 2015 cerraron la fábrica y muchos vecinos se quedaron sin trabajo.", "In 2015 they closed the factory and many residents were left without work. (fecha cerrada → indefinido)"],
        ],
        [
          mc(
            "«Cuando yo era niño, en esta plaza ___ un mercado; hoy hay un aparcamiento.»",
            ["había", "ha habido", "hubo", "hay"],
            0,
            "Describes lo que existía en el fondo del pasado: imperfecto, había. «Hubo» y «ha habido» presentan la existencia como un hecho puntual, y «hay» es el ahora, que la frase ya da al final."
          ),
        ]
      ),
      sec(
        "¿Qué verbo de cambio?",
        [
          "Español no tiene un solo «to become»: el verbo depende del tipo de cambio. Convertirse en + sustantivo = transformación completa (se convirtió en un museo). Volverse + adjetivo = cambio duradero, a menudo gradual o no buscado (se ha vuelto caro). Ponerse + adjetivo = cambio rápido o de estado (se puso feo; ponerse de moda es fijo). Quedarse + adjetivo / sin + sustantivo = el resultado que queda, casi siempre una pérdida (se quedó vacío, sin trabajo). Hacerse y llegar a ser = una evolución larga, con esfuerzo o trayectoria (se hizo famoso, llegó a ser la capital).",
          "El error típico es mezclar los marcos: «volverse en» no existe (en solo va con convertirse), y quedarse no sirve para mejoras.",
        ],
        [
          ["El antiguo mercado se ha convertido en un centro cultural.", "The old market has become a cultural centre. (sustantivo → convertirse en)"],
          ["El barrio se puso de moda casi de un día para otro.", "The neighbourhood became trendy almost overnight. (expresión fija: ponerse de moda)"],
          ["Con la autopista, el pueblo se quedó aislado.", "With the motorway, the village was left isolated. (resultado negativo → quedarse)"],
        ],
        [
          fb("Completa.", "La vieja cárcel ___ en un hotel de lujo. (convertirse, perfecto)", "se ha convertido", "Antes cárcel, ahora hotel: es una transformación en otra cosa (un sustantivo), así que convertirse en. Volverse solo va con adjetivos."),
        ]
      ),
    ],
    [
      fb("Completa.", "Hace veinte años, el barrio ___ muy tranquilo. (ser)", "era", "Hace veinte años marca el antes: el imperfecto describe cómo era el barrio, sin principio ni final. «Fue» lo presentaría como un hecho cerrado."),
      fb("Completa.", "Con el turismo, el centro ___ ruidoso. (volverse, perfecto)", "se ha vuelto", "Ruidoso es un adjetivo y el cambio es gradual y no buscado: volverse. En perfecto porque el proceso llega hasta hoy."),
      fb("Completa.", "Muchas tiendas pequeñas ___ sin clientes. (quedarse, perfecto)", "se han quedado", "Quedarse sin + sustantivo expresa el resultado negativo de un cambio; concuerda con tiendas (plural): se han quedado."),
      mt(
        "Relaciona cada antes con su ahora.",
        [
          ["Era un pueblo de pescadores.", "Se ha convertido en un destino turístico."],
          ["La fábrica estaba abandonada.", "Ahora es un museo."],
          ["El río estaba contaminado.", "Se ha vuelto a poder nadar en él."],
          ["No había carril bici.", "Ahora hay kilómetros de carriles."],
        ],
        "Cada pareja une el imperfecto del antes (era, estaba, había) con el presente o el perfecto del ahora. Fíjate en el tema: pescadores → turismo, fábrica → museo, contaminado → nadar, carril bici → carriles."
      ),
      ms(
        "¿Qué frases son correctas?",
        ["La ciudad se ha hecho más verde.", "El barrio se ha puesto de moda.", "El alquiler se ha quedado barato.", "La plaza se convirtió en un aparcamiento."],
        [0, 1, 3],
        "«Hacerse» (evolución gradual), «ponerse de moda» (expresión fija) y «convertirse en» + sustantivo expresan bien estos cambios. «El alquiler se ha quedado barato» no es natural: «quedarse» suele indicar pérdida, y del alquiler se diría «se ha puesto por las nubes»."
      ),
      toEs("The neighborhood has become one of the most expensive in the city.", "El barrio se ha convertido en uno de los más caros de la ciudad.", "Uno de los más caros funciona como sustantivo, así que convertirse en; el superlativo lleva de: de la ciudad.", ["El barrio ha llegado a ser uno de los más caros de la ciudad."]),
      wo("Lo que más ha cambiado es la forma de moverse por la ciudad.", "Lo que + perfecto destaca el cambio principal: «Lo que más ha cambiado es…». El perfecto, porque el cambio llega hasta hoy.", "What has changed most is the way of getting around the city."),
    ]
  ),
  L(
    "advanced-connectors-emphasis-drill-3",
    "b2r-mission-letter-to-editor",
    "Misión real: carta al director",
    "Escribe una carta a un periódico: argumentos, contraargumentos, conclusión — con conectores y énfasis.",
    "8 min",
    [
      sec(
        "Recuerda la regla: cada parte de la carta tiene sus conectores",
        [
          "Una carta al director es un texto argumentativo formal, y los conectores son su esqueleto: le dicen al lector qué papel tiene cada frase. Introducción → en relación con…, me dirijo a ustedes para… Argumentos → en primer lugar, en segundo lugar, además, asimismo. Concesión + contraargumento → si bien es cierto que… (+ indicativo), no obstante / sin embargo… Conclusión → en definitiva, en conclusión, por todo ello.",
          "¿Por qué conceder antes de contraargumentar? Porque reconocer el punto del otro (si bien es cierto que el tráfico ha aumentado) hace más fuerte tu objeción: muestras que lo has pensado. Y el registro es de usted / ustedes: nada de «hola», «os» ni «un saludo» informal.",
        ],
        [
          ["En relación con el artículo publicado el lunes, quisiera expresar mi desacuerdo.", "Regarding the article published on Monday, I would like to express my disagreement. (introducción; quisiera = petición cortés)"],
          ["Si bien es cierto que el tráfico ha aumentado, no es justo culpar a los ciclistas.", "While it's true that traffic has increased, it's not fair to blame cyclists. (concesión + indicativo, luego la objeción)"],
          ["Por todo ello, pido al ayuntamiento que reconsidere su postura.", "For all these reasons, I ask the city council to reconsider its position. (conclusión; pedir que + subjuntivo)"],
        ],
        [
          fb("Completa la carta.", "En primer lugar, la medida es injusta; ___, es ineficaz. (in addition)", "además", "Además añade un segundo argumento del mismo lado; asimismo también vale en registro formal. Sin embargo o no obstante cambiarían el sentido: anunciarían una objeción."),
          mc(
            "Quieres reconocer que el servicio de autobuses ha mejorado y, aun así, criticarlo. ¿Qué frase eliges?",
            ["Si bien es cierto que el servicio ha mejorado, sigue siendo insuficiente.", "Por todo ello, el servicio ha mejorado y es insuficiente.", "En primer lugar, el servicio ha mejorado; además, es insuficiente.", "Si bien es cierto que el servicio haya mejorado, sigue siendo insuficiente."],
            0,
            "Si bien es cierto que concede el punto y la principal lo rebate; va con indicativo porque reconoces un hecho (ha mejorado). Por todo ello concluye, además suma (no contrasta) y el subjuntivo (haya) no se usa tras «es cierto que» afirmativo."
          ),
        ]
      ),
    ],
    [
      fb("Completa la carta.", "Si bien es cierto que ___ problemas, la solución no es prohibir. (haber, presente)", "hay", "Si bien es cierto que + indicativo: reconoces algo como un hecho real. Haber para la existencia, en singular: hay."),
      fb("Completa la carta.", "___ definitiva, la propuesta perjudica a los vecinos.", "En", "«En definitiva» introduce una conclusión o un resumen final; es una locución fija con en."),
      fb("Completa la carta.", "Lo que más me indigna es que nadie nos ___ consultado. (haber)", "haya", "Tras una reacción emocional (me indigna que…) va subjuntivo; para algo ya ocurrido, perfecto de subjuntivo: haya consultado."),
      mt(
        "Relaciona cada conector con su función en la carta.",
        [
          ["En relación con", "introducir el tema"],
          ["Si bien es cierto que", "conceder un argumento"],
          ["No obstante", "contraargumentar"],
          ["Por todo ello", "concluir"],
        ],
        "Cada parte del texto argumentativo tiene su conector: presentar el tema, conceder, objetar y concluir. Si los cambias de sitio, el lector pierde el hilo."
      ),
      mc(
        "¿Qué despedida es adecuada para una carta al director?",
        ["Atentamente,", "¡Chao!", "Un besazo,", "Nos vemos,"],
        0,
        "En una carta formal se cierra con «Atentamente». «¡Chao!», «Un besazo» y «Nos vemos» son despedidas informales."
      ),
      toEs("It is the residents who will suffer the consequences.", "Son los vecinos quienes sufrirán las consecuencias.", "Frase hendida para señalar a los afectados: ser concuerda con los vecinos (son) y el relativo de persona es quienes o los que.", ["Son los vecinos los que sufrirán las consecuencias."]),
      wo("No obstante, conviene reconocer el esfuerzo del ayuntamiento.", "No obstante abre la matización en registro formal; conviene + infinitivo es una forma cortés de recomendar.", "Nevertheless, it's worth acknowledging the city council's effort."),
    ]
  ),
  L(
    "advanced-connectors-emphasis-drill-3",
    "b2r-contrast-aunque-a-pesar-sin-embargo",
    "Contraste: aunque, a pesar de, sin embargo",
    "Tres formas de expresar contraste con estructuras distintas — mismo significado, distinta gramática.",
    "7 min",
    [
      sec(
        "Recuerda la regla: una idea, tres construcciones",
        [
          "Las tres expresan lo mismo (algo no impide otra cosa), pero cada una es una pieza gramatical distinta, y eso decide qué va detrás. Aunque es una conjunción: necesita un verbo conjugado (indicativo si el hecho es real, «aunque llueve»; subjuntivo si es hipotético o no te importa, «aunque insistas»). A pesar de es una preposición: va con un sustantivo o un infinitivo («a pesar del cansancio», «a pesar de estar cansado»); para meter un verbo conjugado necesita que: a pesar de que. Sin embargo es un conector: abre una oración nueva, tras punto o punto y coma.",
          "¿Infinitivo o verbo conjugado tras a pesar de? Infinitivo cuando el sujeto es el mismo en las dos partes (A pesar de ser joven, ella…); a pesar de que + verbo cuando cambia o quieres marcar el tiempo.",
        ],
        [
          ["Aunque estaba cansado, fue a trabajar.", "Although he was tired, he went to work. (conjunción + verbo conjugado)"],
          ["A pesar del cansancio, fue a trabajar.", "Despite the tiredness, he went to work. (preposición + sustantivo: de + el = del)"],
          ["Estaba cansado. Sin embargo, fue a trabajar.", "He was tired. However, he went to work. (conector: oración nueva)"],
          ["Aunque me lo pidas de rodillas, no iré.", "Even if you beg me on your knees, I won't go. (hipotético → subjuntivo)"],
        ],
        [
          fb("Transforma con a pesar de.", "Aunque había niebla, aterrizamos. → A pesar ___ la niebla, aterrizamos.", "de", "A pesar de + sustantivo equivale a aunque + verbo. Sin «de» la preposición queda incompleta."),
          mc(
            "«___ las críticas, el alcalde mantuvo el proyecto.»",
            ["Aunque", "A pesar de", "Sin embargo", "A pesar de que"],
            1,
            "Detrás viene un sustantivo (las críticas), así que hace falta una preposición: a pesar de (o pese a). Aunque y a pesar de que necesitan un verbo conjugado, y sin embargo abre una oración nueva."
          ),
        ]
      ),
    ],
    [
      fb("Transforma con a pesar de + infinitivo.", "Aunque es joven, tiene mucha experiencia. → A pesar de ___ joven, tiene mucha experiencia.", "ser", "Con el mismo sujeto en las dos partes, a pesar de va seguido de infinitivo: a pesar de ser joven."),
      fb("Transforma con aunque.", "A pesar del frío, salimos. → Aunque ___ frío, salimos. (hacer)", "hacía", "Aunque necesita verbo conjugado; para un hecho real y pasado que describe el fondo, indicativo imperfecto: hacía."),
      fb("Transforma con sin embargo.", "Aunque estudió, suspendió. → Estudió; ___, suspendió.", "sin embargo", "Al pasar a dos oraciones, el conector va tras punto y coma y con coma detrás: ; sin embargo,."),
      mt(
        "Relaciona cada estructura con lo que la sigue.",
        [
          ["aunque", "verbo conjugado"],
          ["a pesar de", "sustantivo o infinitivo"],
          ["a pesar de que", "que + verbo conjugado"],
          ["sin embargo", "una nueva oración"],
        ],
        "Mismo significado, distinta gramática: conjunción + verbo, preposición + sustantivo o infinitivo, conector + oración nueva."
      ),
      ms(
        "¿Qué frases son correctas?",
        ["Pese a las críticas, siguió adelante.", "A pesar de que no tenía dinero, viajó.", "Aunque el ruido, dormí bien.", "Sin embargo, nadie se quejó."],
        [0, 1, 3],
        "«Aunque» necesita un verbo conjugado: «aunque había ruido». «Aunque el ruido» es incorrecta; con sustantivo se usa «a pesar de» o «pese a»."
      ),
      toEs("In spite of having little time, she helped us.", "A pesar de tener poco tiempo, nos ayudó.", "Con el mismo sujeto, «a pesar de» va seguido de infinitivo: «a pesar de tener».", ["Aunque tenía poco tiempo, nos ayudó.", "Pese a tener poco tiempo, nos ayudó."]),
      wo("Aunque insistas, no voy a cambiar de opinión.", "Aunque + subjuntivo: concesión sobre algo posible o hipotético; no sé si insistirás, pero da igual.", "Even if you insist, I'm not going to change my mind."),
    ]
  ),
  L(
    "advanced-connectors-emphasis-drill-3",
    "b2r-transform-flat-to-emphatic",
    "Transformaciones: de párrafo plano a párrafo con fuerza",
    "Reescribe un texto monótono con conectores, anteposiciones y frases hendidas.",
    "8 min",
    [
      sec(
        "Recuerda la regla: tres herramientas para dar fuerza",
        [
          "Un texto plano pone frases cortas una detrás de otra sin decir cómo se relacionan ni qué es lo importante: «El proyecto es bueno. Es caro. Mucha gente lo apoya. El alcalde lo presentó.» Tres herramientas lo arreglan:",
          "1) Conectores: dicen la relación lógica (si bien… = concesión, además = suma, sin embargo = contraste, por consiguiente = consecuencia, no solo… sino que… = suma con fuerza). 2) Frases hendidas: sacan el elemento importante y lo ponen detrás de ser (Fue el alcalde quien…, Lo que me sorprendió fue…). 3) Anteposición: el elemento que es tema va al principio y se retoma con un pronombre (El proyecto lo presentaron en marzo). ¿Por qué funcionan? Porque en español la información nueva e importante tiende a ir al final, y estas estructuras la colocan allí.",
        ],
        [
          ["Si bien el proyecto es caro, es sin duda bueno.", "While the project is expensive, it's undoubtedly good. (concesión: si bien + indicativo)"],
          ["Además, cuenta con un apoyo enorme.", "Moreover, it has enormous support. (suma de argumentos)"],
          ["Fue el propio alcalde quien lo presentó.", "It was the mayor himself who presented it. (hendida: ser + persona + quien)"],
          ["Las entradas las compré yo ayer.", "I bought the tickets yesterday. (anteposición: el CD antepuesto vuelve como las)"],
        ],
        [
          { ...fb("Transforma con énfasis.", "La directora firmó el acuerdo. → Fue la directora ___ firmó el acuerdo.", "quien", "En las hendidas de persona se usa quien (o la que, que concuerda en género): «Fue la directora quien…». Que solo no basta en el español general."), altAnswers: ["la que"] },
        ]
      ),
    ],
    [
      { ...fb("Transforma con un conector.", "Es caro. Vale la pena. → Es caro; ___, vale la pena.", "no obstante", "«No obstante» marca contraste en registro formal, igual que «sin embargo» o «aun así»: lo segundo va en contra de lo esperado por lo primero."), altAnswers: ["sin embargo", "aun así"] },
      fb("Transforma con énfasis.", "Me sorprendió su éxito. → ___ que me sorprendió fue su éxito.", "Lo", "Para destacar una cosa se usa «lo que» + verbo + ser: «Lo que me sorprendió fue…». Lo es neutro porque no se refiere a un sustantivo concreto."),
      fb("Transforma anteponiendo el complemento.", "Presentaron el proyecto en marzo. → El proyecto ___ presentaron en marzo.", "lo", "El complemento directo antepuesto se retoma con pronombre: «el proyecto» → «lo». Sin el pronombre la frase suena incompleta."),
      fb("Transforma con un conector de consecuencia.", "Nadie se opuso; ___, se aprobó por unanimidad.", "por consiguiente", "La aprobación es el resultado de que nadie se opusiera: conector de consecuencia formal (también por lo tanto o en consecuencia)."),
      mc(
        "¿Qué versión tiene más fuerza?",
        ["No solo es barato, sino que además es ecológico.", "Es barato. Es ecológico.", "Es barato y ecológico también, pues.", "Barato, ecológico, sí."],
        0,
        "«No solo…, sino que además…» suma dos argumentos y da fuerza al segundo. Las otras versiones solo enumeran, sin ese énfasis."
      ),
      toEs("Not only is it useful, but it's also beautiful.", "No solo es útil, sino que también es bonito.", "No solo … sino que también: con verbo conjugado detrás de sino hace falta que; sin verbo, «sino también bonito».", ["No solo es útil, sino que además es bonito.", "No solo es útil sino también bonito."]),
      wo("Es precisamente por eso por lo que merece nuestro apoyo.", "Frase hendida con causa: es por eso por lo que (la versión más formal de «es por eso que»); precisamente refuerza aún más.", "It's precisely for that reason that it deserves our support."),
    ]
  ),
  L(
    "b2-vocabulary-practice-10",
    "b2r-word-web-art-literature",
    "Red de palabras: arte y literatura",
    "Obras, géneros, técnicas y críticas — el vocabulario del arte con relativas en subjuntivo.",
    "7 min",
    [
      sec(
        "Géneros y oficios",
        "Recuerda dos reglas. Primera, cada obra tiene su autor, y casi siempre se forma con -ista o -or a partir de la obra o del verbo: la novela → el novelista, el ensayo → el ensayista, el guion → el guionista, esculpir → el escultor, pintar → el pintor; el poema → el poeta es la excepción que hay que memorizar. Segunda, cuando hablas de una obra que buscas pero no conoces, o que no existe («no hay ninguna…»), la relativa va en subjuntivo: busco una novela que no sea larga. ¿Por qué? Porque el subjuntivo marca que ese antecedente no está identificado. Si la obra ya existe y la conoces, va indicativo: leí una novela que es muy larga. Y para la posesión se usa cuyo, que concuerda con lo poseído: un cuadro cuyo autor se desconoce.",
        [
          ["Busco una novela que no sea demasiado larga.", "I'm looking for a novel that isn't too long."],
          ["Es un cuadro cuyo autor se desconoce.", "It's a painting whose author is unknown."],
          ["No hay ningún pintor que capte la luz como él.", "There is no painter who captures light like him."],
        ],
        [
          mt(
            "Relaciona cada obra con su autor.",
            [
              ["el ensayo", "el ensayista"],
              ["la escultura", "el escultor"],
              ["el guion", "el guionista"],
              ["el poemario", "el poeta"],
            ],
            "Vocabulario de creación artística."
          ),
          fb("Completa.", "La editorial necesita un ilustrador que ___ dibujar animales. (saber)", "sepa", "El ilustrador todavía no está identificado (la editorial lo necesita), así que la relativa va en subjuntivo: sepa, no «sabe»."),
        ]
      ),
    ],
    [
      mc("¿Cuál no encaja?", ["el soneto", "la novela", "el cuento", "el pincel"], 3, "«El pincel» es una herramienta de pintura. «El soneto», «la novela» y «el cuento» son géneros literarios."),
      fb("Completa.", "El ___ de la novela es un detective retirado. (main character)", "protagonista", "El/la protagonista es el personaje principal; acaba en -ista y no cambia de forma: el protagonista, la protagonista."),
      fb("Completa.", "Quiero leer un libro que me ___ reflexionar. (hacer)", "haga", "No sé todavía qué libro es: antecedente desconocido → subjuntivo (haga). «Hace» supondría un libro concreto."),
      fb("Completa.", "La obra fue ___ en el Museo del Prado. (exponer)", "expuesta", "En la pasiva con ser se usa el participio, que concuerda con obra: exponer tiene participio irregular, expuesto → expuesta."),
      ms(
        "¿Qué palabras pertenecen a la pintura?",
        ["el lienzo", "el óleo", "la acuarela", "la rima"],
        [0, 1, 2],
        "«El lienzo», «el óleo» y «la acuarela» son de la pintura. «La rima» pertenece a la poesía."
      ),
      toEs("It's the most moving poem I've ever read.", "Es el poema más conmovedor que he leído nunca.", "Tras un superlativo, la relativa puede ir en indicativo («que he leído nunca») o en subjuntivo («que haya leído nunca»).", ["Es el poema más emocionante que he leído nunca.", "Es el poema más conmovedor que jamás he leído.", "Es el poema más conmovedor que haya leído nunca.", "Es el poema más emocionante que haya leído nunca.", "Es el poema más conmovedor que jamás haya leído."]),
      wo("La crítica elogió la novela, cuyo final sorprendió a todos.", "Cuyo concuerda con final.", "The critics praised the novel, whose ending surprised everyone."),
    ]
  ),
  L(
    "b2-vocabulary-practice-10",
    "b2r-word-web-politics",
    "Red de palabras: política y gobierno",
    "Elecciones, leyes y partidos — el vocabulario político con conjunciones y la voz pasiva.",
    "7 min",
    [
      sec(
        "El patrón: verbo → acción → persona",
        [
          "El vocabulario político se aprende por familias: de un verbo salen el sustantivo de la acción y el de la persona. Verbos en -ar suelen dar -ación (votar → la votación, manifestarse → la manifestación) y la persona en -ante (el votante, el manifestante, el gobernante). Muchos verbos en -er/-ir dan -ción o -sión (elegir → la elección, dimitir → la dimisión) y la persona en -or o -ente (el elector, el dirigente).",
          "Por qué te sirve: si conoces el verbo, puedes construir y entender las otras dos palabras sin haberlas estudiado. Ojo con las excepciones frecuentes: gobernar → el gobierno, votar → también el voto (cada papeleta).",
        ],
        [
          ["La votación duró toda la tarde.", "The vote lasted all afternoon. (votar → votación)"],
          ["Los manifestantes pedían elecciones anticipadas.", "The demonstrators were calling for early elections. (manifestarse → manifestante)"],
          ["Su dimisión sorprendió al partido.", "His resignation surprised the party. (dimitir → dimisión)"],
        ],
        [
          mc(
            "¿Qué palabra nombra la acción de legislar (hacer leyes)?",
            ["la legislación", "el legislador", "legislativo", "la legislatura"],
            0,
            "Legislar es un verbo en -ar, así que la acción termina en -ación: la legislación. El legislador es la persona, legislativo es un adjetivo y la legislatura es el periodo de mandato de un parlamento."
          ),
        ]
      ),
      sec(
        "Instituciones y procesos",
        "El gobierno, el parlamento, el partido, la ley, el ministro, votar, aprobar, derogar, la campaña electoral, la oposición. Con estas palabras se combinan dos estructuras de la unidad: la pasiva (la ley fue aprobada, se aprobó la ley) y el subjuntivo con conjunciones de futuro (hasta que, en cuanto, cuando).",
        [
          ["La ley fue aprobada por mayoría absoluta.", "The law was passed by an absolute majority."],
          ["No se aprobará hasta que la oposición dé su apoyo.", "It won't be passed until the opposition gives its support."],
        ],
        [
          mt(
            "Relaciona cada palabra con su significado.",
            [
              ["derogar", "to repeal"],
              ["el escaño", "seat (in parliament)"],
              ["la abstención", "abstention"],
              ["el sondeo", "poll"],
            ],
            "Abstención sigue el patrón -ción de abstenerse; derogar (anular una ley) es lo contrario de aprobar."
          ),
        ]
      ),
    ],
    [
      mc("¿Cuál no encaja?", ["el diputado", "el senador", "el alcalde", "el sindicato"], 3, "«El diputado», «el senador» y «el alcalde» son cargos políticos. «El sindicato» es una organización de trabajadores, no un cargo."),
      fb("Completa.", "La reforma ___ aprobada el año pasado. (ser, pretérito)", "fue", "Pasiva con ser: ser en pretérito (fue) + participio que concuerda con reforma (aprobada)."),
      fb("Completa.", "Votaré por quien ___ mejores propuestas. (tener)", "tenga", "Quien sin identificar (no sé quién será) pide subjuntivo: tenga. Con indicativo hablaría de una persona concreta."),
      fb("Completa.", "El partido perdió varios ___ en las últimas elecciones. (seats)", "escaños", "El escaño es el asiento de un diputado en el parlamento; en plural, escaños."),
      ms(
        "¿Qué frases son correctas?",
        ["Es necesario que todos voten.", "La campaña empezará en cuanto se convoquen las elecciones.", "Se derogó la ley el mes pasado.", "El ministro dimitido ayer."],
        [0, 1, 2],
        "«Dimitir» es intransitivo y se conjuga: «el ministro dimitió ayer». «El ministro dimitido ayer» no tiene verbo conjugado."
      ),
      toEs("The president said he would lower taxes.", "El presidente dijo que bajaría los impuestos.", "En estilo indirecto con «dijo», el futuro pasa a condicional: «bajaría».", ["El presidente dijo que iba a bajar los impuestos."]),
      wo("A pesar de las protestas, el gobierno mantuvo la reforma.", "A pesar de + sustantivo.", "Despite the protests, the government maintained the reform."),
      toEs("El ministro dimitió y sorprendió a todos.", "La dimisión del ministro sorprendió a todos.", "Dimitir da el sustantivo la dimisión; al nominalizar, el sujeto pasa a complemento con «de»: la dimisión del ministro.", [], "Transforma el verbo en sustantivo y empieza la frase con «La»."),
      toEs("Eligieron al nuevo alcalde en marzo.", "La elección del nuevo alcalde fue en marzo.", "Elegir da la elección (-ción); la persona elegida pasa a complemento con «de».", ["La elección del nuevo alcalde tuvo lugar en marzo.", "La elección del alcalde nuevo fue en marzo."], "Transforma el verbo en sustantivo y empieza la frase con «La»."),
      toEs("Los que votan están cansados de promesas.", "Los votantes están cansados de promesas.", "La persona que hace la acción de un verbo en -ar termina en -ante: votar → el votante.", ["Los electores están cansados de promesas."], "Sustituye «los que votan» por un solo sustantivo."),
      toEs("La gente que gobierna no escucha a los jóvenes.", "Los gobernantes no escuchan a los jóvenes.", "Gobernar → el gobernante (-ante, persona que gobierna). Al pasar a plural, el verbo también cambia: escuchan.", [], "Sustituye «la gente que gobierna» por un solo sustantivo."),
      toEs("Los manifestadores cortaron la avenida principal.", "Los manifestantes cortaron la avenida principal.", "Manifestarse es un verbo en -ar: la persona termina en -ante (manifestante), no en -dor.", [], "Corrige la frase."),
      toEs("El ministro fue dimitido ayer por la tarde.", "El ministro dimitió ayer por la tarde.", "Dimitir es intransitivo (uno dimite, nadie «lo dimite»), así que no admite pasiva: el ministro dimitió.", ["El ministro presentó su dimisión ayer por la tarde."], "Corrige la frase."),
    ]
  ),
  L(
    "b2-vocabulary-practice-10",
    "b2r-word-web-dreams",
    "Red de palabras: sueños e imaginación",
    "Soñar, imaginar, fantasear — el mundo interior con el imperfecto de subjuntivo y el como si.",
    "7 min",
    [
      sec(
        "Soñar con, soñar que",
        [
          "Recuerda la regla: soñar con + sustantivo o infinitivo es desear algo (sueño con vivir junto al mar); soñar que + verbo conjugado cuenta lo que pasó en el sueño, y va en indicativo porque lo narras como un hecho (soñé que volaba). Nunca «soñar de». Fantasear también va con con.",
          "Como si siempre lleva imperfecto (o pluscuamperfecto) de subjuntivo, aunque el verbo principal esté en presente: la comparación es irreal por definición.",
        ],
        [
          ["Sueño con vivir junto al mar.", "I dream of living by the sea. (deseo: con + infinitivo)"],
          ["Anoche soñé que volaba.", "Last night I dreamed that I was flying. (contenido del sueño: que + indicativo)"],
          ["Era como si estuviera despierto.", "It was as if I were awake. (como si + imperfecto de subjuntivo)"],
        ],
        [
          fb("Completa.", "De niña soñaba ___ ser astronauta.", "con", "«Soñar» va con la preposición «con» cuando expresa un deseo: «soñar con ser astronauta»."),
          mc(
            "Elige: «Anoche soñé ___ mi perro hablaba.»",
            ["que", "con", "de", "con que"],
            0,
            "Le sigue un verbo conjugado (hablaba) que cuenta lo que pasó en el sueño: soñar que. Con va con sustantivo o infinitivo, y «soñar de» no existe."
          ),
        ]
      ),
      sec(
        "Una raíz, varias palabras",
        "Las palabras del mundo interior forman familias: soñar → el sueño (dream y también sleep) → el soñador; imaginar → la imaginación → imaginario (que no existe) / imaginativo (que tiene mucha imaginación); fantasear → la fantasía → fantasioso. La terminación cambia el significado: -ario dice cómo es una cosa, -ivo cómo es una persona.",
        [
          ["Es un niño muy imaginativo.", "He's a very imaginative child."],
          ["Tiene un amigo imaginario.", "He has an imaginary friend."],
        ],
        [
          mc(
            "«Las fronteras entre países son, en parte, líneas ___.» ¿Qué palabra encaja?",
            ["imaginarias", "imaginativas", "imaginadas", "imaginantes"],
            0,
            "Imaginario/a describe algo que no existe físicamente: líneas imaginarias. Imaginativo se dice de una persona con mucha imaginación, e «imaginantes» no se usa."
          ),
        ]
      ),
    ],
    [
      mt(
        "Relaciona cada palabra con su significado.",
        [
          ["la pesadilla", "nightmare"],
          ["el insomnio", "insomnia"],
          ["la ensoñación", "daydream"],
          ["despertarse sobresaltado", "to wake up startled"],
        ],
        "Vocabulario de los sueños: ensoñación pertenece a la familia de soñar."
      ),
      mc("¿Cuál no encaja?", ["imaginar", "fantasear", "soñar", "madrugar"], 3, "«Imaginar», «fantasear» y «soñar» tienen que ver con la imaginación. «Madrugar» significa levantarse temprano."),
      fb("Completa.", "Soñé que ___ en un país desconocido. (estar, yo)", "estaba", "Soñar que + indicativo: la escena del sueño se describe en imperfecto."),
      fb("Completa.", "Todo parecía tan real, como si ___ de verdad. (pasar)", "pasara", "Como si + imperfecto de subjuntivo, aunque el resto vaya en pasado o en presente."),
      fb("Completa.", "Ojalá ___ realidad todos tus sueños. (hacerse)", "se hagan", "Ojalá + presente de subjuntivo para un deseo posible."),
      toEs("I dreamed that I could speak with animals.", "Soñé que podía hablar con los animales.", "Soñar que + imperfecto de indicativo.", ["Soñé que hablaba con los animales."]),
      wo("Siempre he soñado con recorrer Sudamérica en moto.", "Soñar con + infinitivo.", "I've always dreamed of traveling around South America by motorcycle."),
      toEs("Anoche soñé con un incendio.", "Anoche soñé que había un incendio.", "Para contar la escena del sueño se usa soñar que + verbo conjugado en indicativo; el imperfecto describe la situación.", ["Anoche soñé que hubo un incendio.", "Anoche soñé que se quemaba la casa."], "Cambia a «soñar que» + verbo conjugado."),
      toEs("Habla como si fuera el jefe.", "Hablaba como si fuera el jefe.", "Como si + imperfecto de subjuntivo no cambia con el tiempo del verbo principal: fuera se queda igual.", ["Habló como si fuera el jefe.", "Hablaba como si fuese el jefe."], "Cambia el verbo principal al imperfecto."),
      toEs("Mi sueño es abrir un restaurante.", "Sueño con abrir un restaurante.", "Para expresar un deseo con el verbo se usa soñar con + infinitivo.", ["Yo sueño con abrir un restaurante."], "Transforma la frase con el verbo soñar."),
    ]
  ),
  L(
    "b2-vocabulary-practice-10",
    "b2r-word-web-technology-ai",
    "Red de palabras: tecnología e inteligencia artificial",
    "Algoritmos, datos y automatización — hablar del futuro tecnológico con hipótesis.",
    "7 min",
    [
      sec(
        "Cómo se forman las palabras",
        [
          "El vocabulario tecnológico se construye con tres moldes que puedes aplicar a palabras nuevas. Verbos en -izar → acción en -ización: automatizar → la automatización, digitalizar → la digitalización. Aparato o programa que hace algo → -dor/-dora: buscar → el buscador, navegar → el navegador, procesar → el procesador; la persona suele ir en -ante o -ario (el navegante, el usuario). Y los anglicismos entran como verbos regulares en -ear: hackear, chatear, escanear (hackeé, chateamos, escanearon).",
          "Por qué te sirve: si sabes el verbo, entiendes el aparato y la acción, y puedes conjugar cualquier anglicismo nuevo como un verbo en -ar.",
        ],
        [
          ["La automatización eliminará algunos empleos.", "Automation will eliminate some jobs. (automatizar → automatización)"],
          ["Instala otro navegador.", "Install another browser. (navegar → navegador: el programa)"],
          ["Ayer hackearon la web del ayuntamiento.", "Yesterday they hacked the town hall's website. (hackear: verbo regular en -ar)"],
        ],
        [
          mc(
            "¿Qué sustantivo corresponde a «actualizar» (el software)?",
            ["la actualización", "la actualidad", "lo actual", "la actuación"],
            0,
            "Actualizar es un verbo en -izar, así que la acción termina en -ización: la actualización. La actualidad es el tiempo presente y la actuación viene de actuar."
          ),
        ]
      ),
      sec(
        "Conceptos clave",
        "El algoritmo, los datos, la privacidad, el aprendizaje automático, automatizar, la ciberseguridad, el hackeo, la nube. Para hablar del futuro tecnológico se combinan con hipótesis (si + imperfecto de subjuntivo) y con expresiones de necesidad (es fundamental que + subjuntivo).",
        [
          ["Si las máquinas pensaran por sí solas, ¿quién sería responsable?", "If machines thought for themselves, who would be responsible?"],
          ["Es fundamental que se proteja la privacidad de los datos.", "It's essential that data privacy be protected."],
        ],
        [
          mt(
            "Relaciona cada término con su definición.",
            [
              ["el algoritmo", "conjunto de instrucciones"],
              ["la nube", "almacenamiento en internet"],
              ["automatizar", "hacer que una máquina lo haga sola"],
              ["el hackeo", "acceso no autorizado"],
            ],
            "El hackeo es el sustantivo de hackear, un anglicismo convertido en verbo regular en -ear."
          ),
        ]
      ),
    ],
    [
      mc("¿Cuál no encaja?", ["el software", "el hardware", "la contraseña", "el martillo"], 3, "«El software», «el hardware» y «la contraseña» son de informática. «El martillo» es una herramienta manual."),
      fb("Completa.", "Si la IA ___ todos los trabajos, ¿qué haríamos nosotros? (hacer)", "hiciera", "Hipótesis irreal del presente: si + imperfecto de subjuntivo, condicional en la principal."),
      fb("Completa.", "Necesitamos un sistema que ___ los datos de forma segura. (almacenar)", "almacene", "Antecedente desconocido (aún no lo tenemos) → subjuntivo."),
      fb("Completa.", "Los datos ___ robados por un grupo de hackers. (ser, pretérito)", "fueron", "Pasiva con ser: concuerda con datos (plural) y el agente va con por."),
      ms(
        "¿Qué frases son correctas?",
        ["Es importante que actualices el software.", "Si no tuviera móvil, estaría más tranquilo.", "Cambia tu contraseña antes de que sea tarde.", "La app que descargué no funcionara."],
        [0, 1, 2],
        "Si la app es concreta y ya la descargué, la relativa va en indicativo: «no funcionaba». «No funcionara» es subjuntivo sin motivo."
      ),
      toEs("Artificial intelligence will change the way we work.", "La inteligencia artificial cambiará la forma en que trabajamos.", "La forma en que + indicativo.", ["La inteligencia artificial va a cambiar la forma en que trabajamos.", "La inteligencia artificial cambiará nuestra forma de trabajar."]),
      wo("Nadie sabe qué pasará cuando las máquinas aprendan solas.", "Cuando + subjuntivo (futuro).", "Nobody knows what will happen when machines learn on their own."),
      mc("Completa: «Mi ___ no abre esta página; voy a probar con otro.» (el programa para navegar)", ["navegador", "navegante", "navegación", "navío"], 0, "El programa o aparato que hace la acción termina en -dor: navegar → el navegador. El navegante es la persona, la navegación es la acción y el navío es un barco."),
      fb("Completa.", "Mi hijo se pasa la tarde ___ con sus amigos. (chatear, gerundio)", "chateando", "Los anglicismos en -ear son verbos regulares en -ar: chatear → chateando, como pasear → paseando."),
      toEs("Digitalizaron el archivo municipal en 2020.", "La digitalización del archivo municipal fue en 2020.", "Digitalizar (-izar) da la digitalización (-ización); el objeto pasa a complemento con «de».", ["La digitalización del archivo municipal tuvo lugar en 2020."], "Transforma el verbo en sustantivo y empieza la frase con «La»."),
      toEs("Los datos son almacenados en servidores externos.", "Los datos se almacenan en servidores externos.", "La pasiva refleja (se + verbo en tercera persona) es más natural que la pasiva con ser para hechos generales; el verbo concuerda con datos.", ["Se almacenan los datos en servidores externos."], "Cambia a la pasiva refleja."),
      toEs("Si la app falla, perderemos los datos.", "Si la app fallara, perderíamos los datos.", "Para una hipótesis poco probable o irreal: si + imperfecto de subjuntivo y condicional simple.", ["Si la app fallase, perderíamos los datos.", "Si la aplicación fallara, perderíamos los datos."], "Cambia a una hipótesis irreal del presente."),
    ]
  ),
  L(
    "b2-vocabulary-practice-10",
    "b2r-word-web-life-decisions",
    "Red de palabras: decisiones y arrepentimientos",
    "Elegir, dudar, arrepentirse — el vocabulario de las grandes decisiones con el tipo 3.",
    "7 min",
    [
      sec(
        "La familia de cada decisión",
        [
          "Cada verbo de decisión trae su familia: decidir → la decisión → decidido / indeciso; dudar → la duda → dudoso; arriesgarse → el riesgo → arriesgado; arrepentirse → el arrepentimiento → arrepentido. El prefijo in- da el contrario de muchos adjetivos (decidido → indeciso, seguro → inseguro), y el participio funciona como adjetivo de la persona (está arrepentida).",
          "Por qué te sirve: con un verbo puedes nombrar la acción, la persona y su estado, y entender palabras que no has estudiado.",
        ],
        [
          ["Es una persona muy indecisa.", "She's a very indecisive person. (in- + decidido)"],
          ["Fue una inversión arriesgada.", "It was a risky investment. (arriesgarse → arriesgado)"],
          ["Su arrepentimiento parecía sincero.", "His regret seemed sincere. (arrepentirse → arrepentimiento)"],
        ],
        [
          mc(
            "Alguien que no se siente seguro de sí mismo es una persona…",
            ["insegura", "asegurada", "segurísima", "indecente"],
            0,
            "El prefijo in- da el contrario: seguro → inseguro. Asegurado significa que tiene un seguro (de coche, de salud) e indecente no tiene relación con seguro."
          ),
        ]
      ),
      sec(
        "Decidir y arrepentirse",
        "Recuerda la regla: arrepentirse de + infinitivo (compuesto si la acción es anterior: me arrepiento de no haber estudiado). Para lamentar el pasado, ojalá + pluscuamperfecto de subjuntivo. Y en las condicionales, si la consecuencia es pasada se usa el condicional compuesto (habría vivido); si es presente, el condicional simple (ahora viviría).",
        [
          ["Me arrepiento de no haber estudiado idiomas.", "I regret not having studied languages."],
          ["Si hubiera aprovechado aquella oportunidad, ahora viviría en Londres.", "If I'd taken that chance, I'd live in London now. (consecuencia presente: viviría)"],
        ],
        [
          mt(
            "Relaciona cada expresión con su significado.",
            [
              ["arriesgarse", "to take a risk"],
              ["arrepentirse de", "to regret"],
              ["la encrucijada", "crossroads"],
              ["dar el paso", "to take the plunge"],
            ],
            "Vocabulario de decisiones: arriesgarse y arrepentirse son pronominales (me arriesgo, me arrepiento)."
          ),
        ]
      ),
    ],
    [
      mc("¿Cuál no encaja?", ["dudar", "vacilar", "titubear", "celebrar"], 3, "«Dudar», «vacilar» y «titubear» expresan indecisión. «Celebrar» no tiene nada que ver con dudar."),
      fb("Completa.", "No me arrepiento de ___ aquel trabajo. (dejar, infinitivo compuesto)", "haber dejado", "Arrepentirse de + infinitivo compuesto: haber + participio."),
      fb("Completa.", "Si no me ___ arriesgado, nunca habría montado mi empresa. (haber)", "hubiera", "Pluscuamperfecto de subjuntivo en la parte del si de una condición irreal pasada."),
      fb("Completa.", "Ojalá ___ aceptado aquella oferta. (haber, yo)", "hubiera", "Ojalá + pluscuamperfecto de subjuntivo para un deseo imposible sobre el pasado."),
      ms(
        "¿Qué frases son correctas?",
        ["Tomé la decisión sin pensarlo mucho.", "Me arrepiento de que no te lo dije.", "Fue la mejor decisión que he tomado.", "Estoy en una encrucijada."],
        [0, 2, 3],
        "Con el mismo sujeto, «arrepentirse de» va con infinitivo: «me arrepiento de no habértelo dicho». «Me arrepiento de que no te lo dije» es incorrecta."
      ),
      toEs("I would have made the same decision.", "Yo habría tomado la misma decisión.", "El condicional perfecto («habría tomado») habla de una acción hipotética en el pasado.", ["Yo hubiera tomado la misma decisión.", "Habría tomado la misma decisión."]),
      wo("A veces la decisión más difícil es la más acertada.", "Superlativos con la más.", "Sometimes the hardest decision is the wisest one."),
      toEs("Si hubiera aceptado, habría ganado más.", "Si hubiera aceptado, ahora ganaría más.", "Cuando la consecuencia de un pasado irreal se nota hoy, se usa el condicional simple (ganaría) en vez del compuesto.", ["Si hubiera aceptado, ganaría más ahora.", "Si hubiese aceptado, ahora ganaría más."], "Cambia la consecuencia al presente con «ahora»."),
      toEs("Lamento haber vendido la casa.", "Me arrepiento de haber vendido la casa.", "Arrepentirse es pronominal y lleva de + infinitivo compuesto (la venta ya ocurrió).", ["Me arrepiento de vender la casa."], "Transforma la frase con «arrepentirse de»."),
      toEs("Me habría gustado estudiar Medicina.", "Ojalá hubiera estudiado Medicina.", "Para lamentar el pasado: ojalá + pluscuamperfecto de subjuntivo (hubiera + participio).", ["Ojalá hubiese estudiado Medicina."], "Transforma la frase con «ojalá»."),
    ]
  ),
  L(
    "b2-vocabulary-practice-10",
    "b2r-word-web-media",
    "Red de palabras: periodismo y medios",
    "Titulares, fuentes y entrevistas — el vocabulario de los medios con el estilo indirecto.",
    "7 min",
    [
      sec(
        "Quién hace y quién recibe",
        [
          "Muchos verbos del periodismo dan tres palabras: la acción, quien la hace (-dor/-dora) y quien la recibe (-do/-da, el participio). Entrevistar → la entrevista, el entrevistador (pregunta), el entrevistado (responde). Encuestar → la encuesta, el encuestador, el encuestado. Filtrar → la filtración; desmentir → el desmentido; informar → la información, el informe.",
          "Por qué te sirve: -dor señala al que actúa y -do al que recibe la acción; con eso entiendes palabras nuevas como el espectador o el afectado sin diccionario.",
        ],
        [
          ["La entrevistadora le hizo preguntas incómodas al entrevistado.", "The (female) interviewer asked the interviewee awkward questions."],
          ["La filtración del informe obligó a convocar una rueda de prensa.", "The leak of the report forced them to call a press conference. (filtrar → filtración)"],
        ],
        [
          mc(
            "En una encuesta, ¿cómo se llama la persona que responde a las preguntas?",
            ["el encuestado", "el encuestador", "la encuesta", "el encuestante"],
            0,
            "Quien recibe la acción lleva -do, como el participio: el encuestado. El encuestador es quien hace las preguntas, y «encuestante» no se usa."
          ),
        ]
      ),
      sec(
        "La redacción",
        "El titular, la portada, la fuente, el corresponsal, la rueda de prensa, desmentir, filtrar, informar, las noticias falsas (bulos). Recuerda la regla del estilo indirecto: con un verbo de lengua en pasado, el presente pasa a imperfecto, el pretérito a pluscuamperfecto y el futuro a condicional. Afirmar que va con indicativo; desmentir que y negar que, con subjuntivo, porque niegan la información.",
        [
          ["Según fuentes oficiales, el acuerdo se firmará mañana.", "According to official sources, the agreement will be signed tomorrow."],
          ["El ministro desmintió que fuera a dimitir.", "The minister denied he was going to resign. (desmentir que + subjuntivo)"],
        ],
        [
          mt(
            "Relaciona cada término con su significado.",
            [
              ["desmentir", "to deny"],
              ["filtrar", "to leak"],
              ["el bulo", "hoax / fake news"],
              ["el corresponsal", "correspondent"],
            ],
            "Vocabulario periodístico: desmentir da el desmentido y filtrar da la filtración."
          ),
        ]
      ),
    ],
    [
      mc("¿Cuál no encaja?", ["el titular", "la portada", "la columna", "el andén"], 3, "«El titular», «la portada» y «la columna» son partes de un periódico. «El andén» es de una estación de tren."),
      fb("Completa.", "El portavoz afirmó que la situación ___ bajo control. (estar, imperfecto)", "estaba", "Estilo indirecto: presente → imperfecto. Afirmar que presenta un hecho, así que va en indicativo."),
      fb("Completa.", "La empresa desmintió que ___ despidos. (haber, imperfecto de subjuntivo)", "hubiera", "Desmentir que + subjuntivo (niega la información)."),
      fb("Completa.", "Es importante que los periodistas ___ sus fuentes. (contrastar)", "contrasten", "Es importante que + subjuntivo."),
      ms(
        "¿Qué frases son correctas?",
        ["El diario publicó una exclusiva.", "Se filtró el documento a la prensa.", "Según el corresponsal, la situación había empeorado.", "La noticia fue desmentido."],
        [0, 1, 2],
        "En la pasiva, el participio concuerda con el sujeto: «la noticia fue desmentida». «Desmentido» no concuerda con «noticia»."
      ),
      toEs("The spokesperson said that they would give more information the next day.", "El portavoz dijo que darían más información al día siguiente.", "Futuro → condicional; mañana → al día siguiente.", ["La portavoz dijo que darían más información al día siguiente."]),
      wo("La noticia que se hizo viral resultó ser un bulo.", "Relativa + resultar ser.", "The news that went viral turned out to be a hoax."),
      toEs("Mañana publicaremos los resultados.", "El portavoz dijo que al día siguiente publicarían los resultados.", "En estilo indirecto pasado, el futuro pasa a condicional (publicarían) y mañana pasa a al día siguiente.", ["El portavoz dijo que publicarían los resultados al día siguiente."], "Pasa al estilo indirecto empezando por «El portavoz dijo que…»."),
      toEs("El club afirmó que el jugador estaba lesionado.", "El club desmintió que el jugador estuviera lesionado.", "Afirmar que presenta un hecho (indicativo); desmentir que niega la información y pide subjuntivo: estuviera.", ["El club desmintió que el jugador estuviese lesionado."], "Cambia «afirmó» por «desmintió» y adapta el verbo."),
      toEs("Filtraron el documento en marzo.", "La filtración del documento fue en marzo.", "Filtrar (-ar) da la filtración (-ación); el objeto pasa a complemento con «de».", ["La filtración del documento tuvo lugar en marzo.", "La filtración del documento se produjo en marzo."], "Transforma el verbo en sustantivo y empieza la frase con «La»."),
      toEs("El ministerio negó que las cifras eran falsas.", "El ministerio negó que las cifras fueran falsas.", "Negar que (como desmentir que) rechaza la información y pide subjuntivo: fueran.", ["El ministerio negó que las cifras fuesen falsas."], "Corrige la frase."),
      toEs("Los entrevistadores respondieron a todas las preguntas del periodista.", "Los entrevistados respondieron a todas las preguntas del periodista.", "Quien responde recibe la entrevista: -do (entrevistado). El entrevistador (-dor) es quien pregunta.", [], "Corrige la frase."),
      toEs("El director pidió a los periodistas que no publican el nombre.", "El director pidió a los periodistas que no publicaran el nombre.", "Pedir que + otro sujeto pide subjuntivo; con pidió (pasado), imperfecto de subjuntivo: publicaran.", ["El director pidió a los periodistas que no publicasen el nombre.", "El director les pidió a los periodistas que no publicaran el nombre."], "Corrige la frase."),
    ]
  ),
  L(
    "b2-vocabulary-practice-10",
    "b2r-word-web-psychology",
    "Red de palabras: psicología y personalidad",
    "Rasgos, estados y emociones complejas — ser y estar con adjetivos de personalidad.",
    "7 min",
    [
      sec(
        "La terminación da una pista",
        [
          "Los adjetivos de personalidad suelen terminar en -ivo (impulsivo, reflexivo, creativo), -oso (orgulloso, celoso, ansioso) o -ista (optimista, perfeccionista, que no cambia en femenino). Describen cómo es alguien, así que van con ser. Los que terminan en -ado / -ido vienen de un participio (agobiar → agobiado, deprimir → deprimido, ilusionar → ilusionado) y describen el estado en que algo te ha dejado: van con estar.",
          "Por qué funciona: un participio es el resultado de una acción, y los resultados se expresan con estar. Para los contrarios, fíjate en los prefijos in- y des-: seguro → inseguro, motivado → desmotivado, confiado → desconfiado.",
        ],
        [
          ["Es muy perfeccionista, por eso está agobiado.", "He's very much a perfectionist; that's why he's overwhelmed. (-ista: ser; -ado: estar)"],
          ["Mi abuela es muy creativa.", "My grandmother is very creative. (-iva: rasgo)"],
        ],
        [
          mc(
            "Completa: «Desde que perdió el trabajo, mi vecino ___ muy desanimado.»",
            ["está", "es", "se hace", "llega a ser"],
            0,
            "Desanimado es un participio (desanimar → desanimado): describe el estado en que lo ha dejado algo, así que va con estar. Ser lo convertiría en un rasgo permanente."
          ),
        ]
      ),
      sec(
        "Rasgos y estados",
        "Ser: extrovertido, introvertido, empático, perfeccionista, impulsivo. Estar: agobiado, desmotivado, deprimido, ilusionado. Y para los cambios: ponerse + adjetivo para una reacción del momento, volverse + adjetivo para un cambio de carácter duradero.",
        [
          ["Se ha vuelto más empática con los años.", "She's become more empathetic over the years."],
        ],
        [
          mt(
            "Relaciona cada adjetivo con su opuesto.",
            [
              ["extrovertido", "introvertido"],
              ["optimista", "pesimista"],
              ["impulsivo", "reflexivo"],
              ["seguro de sí mismo", "inseguro"],
            ],
            "Pares de rasgos de personalidad: inseguro forma su contrario con el prefijo in-."
          ),
        ]
      ),
    ],
    [
      mc("¿Cuál no encaja?", ["empático", "comprensivo", "sensible", "egoísta"], 3, "«Empático», «comprensivo» y «sensible» describen a alguien que entiende a los demás. «Egoísta» es lo contrario."),
      fb("Completa con ser o estar.", "Últimamente ___ muy desmotivada con el trabajo.", "estoy", "Un estado temporal se expresa con «estar»: «estoy desmotivada»."),
      fb("Completa con ser o estar.", "Mi hermano ___ una persona muy reservada.", "es", "Un rasgo de carácter se expresa con «ser»: «es reservada»."),
      fb("Completa con un verbo de cambio.", "Tras la pérdida, ___ muy retraído. (volverse, pretérito)", "se volvió", "Cambio de carácter → volverse."),
      ms(
        "¿Qué frases son correctas?",
        ["Está ilusionada con su nuevo proyecto.", "Es muy susceptible; se ofende por todo.", "Soy agobiado esta semana.", "Se puso triste al despedirse."],
        [0, 1, 3],
        "«Agobiado» describe un estado pasajero, así que va con «estar»: «estoy agobiado esta semana». «Soy agobiado» es incorrecta."
      ),
      toEs("She is very sensitive, so she's hurt by criticism.", "Es muy sensible, así que le duelen las críticas.", "«Ser sensible» es un rasgo de carácter; «doler» concuerda con lo que duele: «le duelen las críticas».", ["Es muy sensible, por eso le afectan las críticas.", "Es muy sensible, así que las críticas le duelen."]),
      wo("La psicóloga le recomendó que expresara sus emociones.", "Recomendar (pasado) + imperfecto de subjuntivo.", "The psychologist recommended that she express her emotions."),
      toEs("Mi socio está agobiado.", "Mi socio es perfeccionista.", "Agobiado (-ado) es un estado: estar. Perfeccionista (-ista) es un rasgo: ser.", [], "Cambia «agobiado» por «perfeccionista» y adapta el verbo."),
      toEs("Se puso desconfiado al ver el contrato.", "Se volvió desconfiado con los años.", "Una reacción ante algo concreto va con ponerse; un cambio que se instala con el tiempo, con volverse.", ["Con los años se volvió desconfiado."], "Cambia «al ver el contrato» por «con los años» y adapta el verbo."),
      toEs("Mi hermano es muy optimista, pero hoy está preocupado.", "Mis hermanas son muy optimistas, pero hoy están preocupadas.", "Los adjetivos en -ista no cambian de género (optimista), solo de número; preocupado sí concuerda: preocupadas.", [], "Cambia el sujeto a «mis hermanas»."),
    ]
  ),
  L(
    "b2-vocabulary-practice-10",
    "b2r-word-web-personal-growth",
    "Red de palabras: desarrollo personal",
    "Metas, hábitos y superación — hablar del crecimiento personal con verbos de cambio y conjunciones.",
    "7 min",
    [
      sec(
        "De la cualidad al sustantivo",
        [
          "Muchas cualidades del crecimiento personal forman pareja: un adjetivo en -nte y un sustantivo en -ncia. Constante → la constancia, perseverante → la perseverancia, paciente → la paciencia, exigente → la exigencia, tolerante → la tolerancia. Los verbos dan otros moldes: superarse → la superación, crecer → el crecimiento.",
          "Por qué te sirve: si conoces el adjetivo, puedes nombrar la cualidad (y al revés) sin haberla estudiado. Ojo: las palabras en -ancia y -encia son femeninas.",
        ],
        [
          ["Con paciencia y constancia, todo se aprende.", "With patience and consistency, anything can be learned. (paciente → paciencia)"],
          ["La superación de un miedo da mucha autoestima.", "Overcoming a fear gives you a lot of self-esteem. (superarse → superación)"],
        ],
        [
          mc(
            "Una persona resiliente se recupera de los golpes. ¿Cómo se llama esa cualidad?",
            ["la resiliencia", "la resilianza", "el resilimiento", "la resiliación"],
            0,
            "Adjetivo en -nte → sustantivo en -ncia: resiliente → la resiliencia, como paciente → paciencia. Las otras formas no existen."
          ),
        ]
      ),
      sec(
        "Crecer",
        "Fijarse una meta, superarse, la autoestima, la constancia, salir de la zona de confort, aprender de los errores, llegar a ser. Recuerda la regla de las conjunciones: para que, a menos que y antes de que llevan siempre subjuntivo; cuando, en cuanto y hasta que llevan subjuntivo si la acción es futura e indicativo si es habitual o ya pasó.",
        [
          ["Para que un hábito se consolide, hace falta constancia.", "For a habit to stick, you need consistency."],
          ["Con esfuerzo, llegó a ser la mejor de su promoción.", "With effort, she became the best in her class."],
        ],
        [
          mt(
            "Relaciona cada expresión con su significado.",
            [
              ["la autoestima", "self-esteem"],
              ["la constancia", "perseverance"],
              ["superarse", "to better oneself"],
              ["fijarse una meta", "to set a goal"],
            ],
            "Vocabulario del desarrollo personal: constancia es el sustantivo de constante."
          ),
        ]
      ),
    ],
    [
      mc("¿Cuál no encaja?", ["la perseverancia", "la disciplina", "la constancia", "la pereza"], 3, "«La perseverancia», «la disciplina» y «la constancia» son cualidades de esfuerzo. «La pereza» es lo contrario."),
      fb("Completa.", "No lograrás nada a menos que ___ constante. (ser, tú)", "seas", "A menos que + subjuntivo."),
      fb("Completa.", "Desde que medito, ___ más tranquilo. (volverse, perfecto)", "me he vuelto", "Cambio de carácter."),
      fb("Completa.", "Lo importante no es caer, sino ___. (levantarse)", "levantarse", "Infinitivo como sustantivo."),
      ms(
        "¿Qué frases son correctas?",
        ["Me he propuesto leer un libro al mes.", "En cuanto termine el curso, buscaré trabajo.", "Salir de la zona de confort da miedo.", "Hasta que no lo intentas, no lo sabrás."],
        [0, 1, 2],
        "«Hasta que» + acción futura exige subjuntivo: «hasta que no lo intentes, no lo sabrás». «Hasta que no lo intentas» usa indicativo y es incorrecta."
      ),
      toEs("Every mistake has made me stronger.", "Cada error me ha hecho más fuerte.", "Hacer + adjetivo (causar un cambio).", ["Cada error me ha vuelto más fuerte.", "Cada equivocación me ha hecho más fuerte."]),
      wo("Nunca es tarde para convertirse en la persona que quieres ser.", "Convertirse en + relativa.", "It's never too late to become the person you want to be."),
      toEs("Hay que ser paciente para aprender un idioma.", "Hace falta paciencia para aprender un idioma.", "Paciente (-nte) da el sustantivo paciencia (-ncia); hace falta va seguido del sustantivo.", ["Hace falta mucha paciencia para aprender un idioma."], "Transforma la frase con el sustantivo de «paciente», empezando por «Hace falta…»."),
      toEs("Cuando consiga el título, me mudaré.", "Cuando conseguí el título, me mudé.", "Cuando + subjuntivo es para el futuro; si el hecho ya ocurrió, cuando va con indicativo (conseguí).", [], "Cambia la frase al pasado: ya ocurrió."),
      toEs("Si no practicas cada día, no mejorarás.", "A menos que practiques cada día, no mejorarás.", "A menos que equivale a «si no» y siempre lleva subjuntivo; ya incluye la negación, así que desaparece el «no».", ["No mejorarás a menos que practiques cada día."], "Transforma la frase con «a menos que»."),
      toEs("Ahorro cada mes para que mis hijos pueden estudiar.", "Ahorro cada mes para que mis hijos puedan estudiar.", "Para que expresa finalidad y siempre lleva subjuntivo: puedan.", [], "Corrige la frase."),
      toEs("Su perseveranza es admirable.", "Su perseverancia es admirable.", "Perseverante (-nte) da perseverancia (-ncia), como constante → constancia.", [], "Corrige la frase."),
      toEs("Me apunté a un curso de oratoria para que yo perdiera el miedo.", "Me apunté a un curso de oratoria para perder el miedo.", "Para que + subjuntivo se usa cuando cambia el sujeto; si el sujeto es el mismo (yo me apunté, yo pierdo el miedo), para + infinitivo.", [], "Corrige la frase."),
    ]
  ),
  L(
    "b2-vocabulary-practice-10",
    "b2r-word-web-debate",
    "Red de palabras: debate y argumentación",
    "Argumentar, rebatir, matizar y conceder — el vocabulario del debate con conectores.",
    "7 min",
    [
      sec(
        "El verbo decide el modo",
        [
          "En un debate, el verbo que introduce una idea dice si la presentas como verdad o la pones en duda. Los verbos que afirman o reconocen (sostener, afirmar, argumentar, conceder, reconocer, es evidente que) van con indicativo: sostengo que la medida es injusta. Los que niegan o dudan (negar, dudar, no creer, no es cierto que) van con subjuntivo: niego que la medida sea justa. Y cuando valoras lo que dice el otro (lo que no acepto es que…, no es que…) también va subjuntivo.",
          "Las palabras del debate forman familias: argumentar → el argumento, refutar → la refutación, matizar → el matiz, conceder → la concesión.",
        ],
        [
          ["Sostengo que la medida es injusta, aunque reconozco que tiene ventajas.", "I maintain that the measure is unfair, though I recognize it has advantages. (afirmar: indicativo)"],
          ["Dudo que esos datos sean fiables.", "I doubt that data is reliable. (dudar: subjuntivo)"],
        ],
        [
          mc(
            "Elige: «La oposición niega que la reforma ___ los precios.»",
            ["baje", "baja", "bajará", "bajaba"],
            0,
            "Negar que rechaza la idea, así que pide subjuntivo: baje. Con un verbo que afirma (sostiene que) iría indicativo: baja o bajará."
          ),
        ]
      ),
      sec(
        "Los verbos del debate",
        "Argumentar, sostener, rebatir, refutar, matizar, conceder, defender una postura, el argumento, el contraargumento.",
        [
          ["Permíteme matizar lo que acabas de decir.", "Allow me to qualify what you've just said."],
        ],
        [
          mt(
            "Relaciona cada verbo con su significado.",
            [
              ["rebatir", "to refute"],
              ["matizar", "to qualify / nuance"],
              ["sostener", "to maintain / argue"],
              ["conceder", "to concede"],
            ],
            "Verbos de argumentación: matizar viene de matiz (un pequeño detalle que cambia el sentido)."
          ),
        ]
      ),
    ],
    [
      mc("¿Cuál no encaja?", ["por un lado", "por otro lado", "en cambio", "de postre"], 3, "«Por un lado», «por otro lado» y «en cambio» son conectores para argumentar. «De postre» habla de comida, no organiza ideas."),
      fb("Completa.", "No comparto tu opinión; ___, creo que te equivocas. (moreover)", "además", "Además añade un argumento en la misma dirección."),
      fb("Completa.", "No es que no ___ razón, es que exageras. (tener, tú)", "tengas", "No es que + subjuntivo niega una explicación; es que + indicativo da la real."),
      fb("Completa.", "Tu argumento es interesante; no ___, carece de datos.", "obstante", "«No obstante» es un conector de contraste formal, equivalente a «sin embargo»."),
      ms(
        "¿Qué frases sirven para rebatir?",
        ["No estoy de acuerdo en absoluto.", "Eso no es del todo cierto.", "Tienes toda la razón.", "Discrepo de lo que acabas de decir."],
        [0, 1, 3],
        "«No estoy de acuerdo», «Eso no es del todo cierto» y «Discrepo» sirven para rebatir. «Tienes toda la razón» expresa acuerdo."
      ),
      toEs("Although you (tú) may be right, I don't agree.", "Aunque puede que tengas razón, no estoy de acuerdo.", "«Puede que» va con subjuntivo; aquí «aunque» lleva indicativo (puede). «Aunque tengas razón» (aunque + subjuntivo) también es correcta.", ["Aunque tengas razón, no estoy de acuerdo.", "Puede que tengas razón, pero no estoy de acuerdo."]),
      wo("Lo que no se puede negar es que el problema existe.", "Lo que + se impersonal + negar.", "What can't be denied is that the problem exists."),
      toEs("Sostengo que el plan funciona.", "Niego que el plan funcione.", "Sostener afirma (indicativo: funciona); negar rechaza la idea y pide subjuntivo: funcione.", [], "Cambia «Sostengo» por «Niego» y adapta el verbo."),
      toEs("Creo que tienes razón.", "No creo que tengas razón.", "Creer que afirma (indicativo); no creer que expresa duda y pide subjuntivo: tengas.", [], "Cambia la frase a negativa y adapta el verbo."),
      toEs("No estoy enfadado; estoy cansado.", "No es que esté enfadado, es que estoy cansado.", "No es que + subjuntivo descarta una explicación (esté); es que + indicativo da la verdadera (estoy).", ["No es que esté enfadada, es que estoy cansada."], "Transforma con «No es que…, es que…»."),
    ]
  ),
  L(
    "b2-vocabulary-practice-10",
    "b2r-word-web-performing-arts",
    "Red de palabras: música y artes escénicas",
    "Ensayos, estrenos y críticas — el vocabulario del escenario con estructuras de énfasis.",
    "7 min",
    [
      sec(
        "Quién toca, quién actúa",
        [
          "El nombre del músico se forma con el instrumento + -ista: piano → el/la pianista, violín → el/la violinista, guitarra → el/la guitarrista. Las palabras en -ista no cambian en femenino; solo cambia el artículo. En el teatro, en cambio, actor tiene femenino propio: la actriz. Y muchos verbos del escenario dan su sustantivo en -o: ensayar → el ensayo, estrenar → el estreno, aplaudir → el aplauso.",
          "Por qué te sirve: con estos moldes puedes nombrar a cualquier músico o acción del escenario aunque no hayas visto la palabra antes.",
        ],
        [
          ["La violinista recibió un largo aplauso.", "The (female) violinist received a long round of applause. (-ista: invariable)"],
          ["El estreno fue un éxito.", "The premiere was a success. (estrenar → estreno)"],
        ],
        [
          mc(
            "¿Cómo se llama la persona que toca la flauta?",
            ["el flautista", "el flautero", "el flautor", "el flautante"],
            0,
            "Instrumento + -ista: flauta → flautista (el flautista, la flautista). Las otras terminaciones no se usan para músicos."
          ),
        ]
      ),
      sec(
        "Detrás del telón",
        "El ensayo, el estreno, el reparto, el papel, el director de escena, la función, la gira, el aforo, la ovación. Para hablar de una función se usan las estructuras de énfasis: hendidas (fue en el estreno cuando…), lo + adjetivo + que, y la anteposición con pronombre (ese papel lo interpretó…).",
        [
          ["Fue en el estreno cuando la actriz se consagró.", "It was at the premiere that the actress made her name."],
          ["¡Lo bien que actuó todo el reparto!", "How well the whole cast performed!"],
        ],
        [
          mt(
            "Relaciona cada palabra con su significado.",
            [
              ["el estreno", "premiere"],
              ["el reparto", "cast"],
              ["el aforo", "capacity (of a venue)"],
              ["la gira", "tour"],
            ],
            "Vocabulario escénico: el estreno viene del verbo estrenar."
          ),
        ]
      ),
    ],
    [
      mc("¿Cuál no encaja?", ["el violín", "el violonchelo", "la viola", "la batuta"], 3, "«El violín», «el violonchelo» y «la viola» son instrumentos de cuerda. «La batuta» es el palo que usa el director."),
      { ...fb("Completa.", "Fue la soprano ___ recibió la ovación más larga.", "quien", "En las oraciones hendidas de persona se usa «quien» (o «la que»): «Fue la soprano quien…»."), altAnswers: ["la que"] },
      fb("Completa.", "No te imaginas lo ___ que estaban los músicos. (nervioso)", "nerviosos", "Lo + adjetivo + que: lo no cambia y el adjetivo concuerda con músicos (masculino plural)."),
      fb("Completa.", "La obra ___ estrenada en 1936. (ser, pretérito)", "fue", "Pasiva con ser."),
      ms(
        "¿Qué frases son correctas?",
        ["Las entradas se agotaron en diez minutos.", "Actuó como si fuera su última función.", "El reparto fue elegido por el director.", "Fue en el estreno cuando se fue la luz."],
        [0, 1, 2, 3],
        "Las cuatro son correctas: «agotarse», «como si» + imperfecto de subjuntivo, la pasiva con «ser» y la hendida de tiempo «fue… cuando»."
      ),
      toEs("It was the best performance I have ever seen.", "Fue la mejor actuación que he visto nunca.", "Tras un superlativo, la relativa puede ir en indicativo («que he visto nunca») o en subjuntivo («que haya visto nunca»).", ["Ha sido la mejor actuación que he visto nunca.", "Fue la mejor función que he visto nunca.", "Fue la mejor actuación que haya visto nunca.", "Fue la mejor función que haya visto nunca.", "Ha sido la mejor actuación que haya visto nunca."]),
      wo("El público se puso en pie para aplaudir a la orquesta.", "Ponerse en pie + para + infinitivo.", "The audience stood up to applaud the orchestra."),
      mc("¿Cómo se llama la persona que toca el saxofón?", ["el saxofonista", "el saxofonero", "el saxofón", "el saxofónico"], 0, "Instrumento + -ista da el nombre del músico: saxofón → saxofonista. Saxofónico sería un adjetivo y saxofonero no se usa."),
      toEs("El violinista y el actor saludaron al público.", "La violinista y la actriz saludaron al público.", "Las palabras en -ista solo cambian el artículo (la violinista); actor tiene femenino propio: actriz.", [], "Cambia los dos sustantivos al femenino."),
      toEs("La soprano se cayó en el último acto.", "Fue en el último acto cuando la soprano se cayó.", "Para destacar un momento: fue + expresión de tiempo + cuando.", ["Fue en el último acto cuando se cayó la soprano."], "Transforma en una hendida que destaque «en el último acto»."),
      toEs("Un joven compositor escribió la ópera.", "La ópera fue escrita por un joven compositor.", "En la pasiva con ser, el participio concuerda con el nuevo sujeto (ópera → escrita) y el agente va con por.", [], "Cambia a la pasiva con ser."),
      toEs("Esa actora ganó un premio por su papel.", "Esa actriz ganó un premio por su papel.", "Actor no forma el femenino en -a: la forma es actriz (como emperador → emperatriz).", [], "Corrige la frase."),
      toEs("¡Lo cansado que acabaron las bailarinas tras la gira!", "¡Lo cansadas que acabaron las bailarinas tras la gira!", "En lo + adjetivo + que, lo es invariable, pero el adjetivo concuerda con el sustantivo: las bailarinas → cansadas.", [], "Corrige la frase."),
      toEs("La obra fue estrenado en el Teatro Real.", "La obra fue estrenada en el Teatro Real.", "En la pasiva con ser, el participio concuerda con el sujeto: la obra → estrenada.", [], "Corrige la frase."),
    ]
  ),
  L(
    "b2-comprehensive-review-3",
    "b2r-challenge-big-error-hunt",
    "Desafío de nivel Avanzado: la gran caza de errores",
    "Desafío final del nivel Avanzado: corrige errores y repasa relativas, subjuntivo, condicionales, estilo indirecto, verbos de cambio, conectores y énfasis.",
    "9 min",
    [
      sec(
        "Recuerda la regla: la lista de control del nivel Avanzado",
        [
          "Para cazar un error, no leas la frase entera de golpe: pásale esta lista. 1) Relativas: ¿existe y conozco el antecedente? Si no (nadie, alguien que busco), subjuntivo. 2) Cuando / en cuanto: ¿futuro? → subjuntivo, nunca futuro. 3) Secuencia: ¿verbo principal en pasado? → subjuntivo en -ra. 4) Si condicional: nunca condicional detrás (tras el si de una pregunta indirecta, sí: «No sé si vendría»). 5) Estilo indirecto: futuro → condicional, pretérito → pluscuamperfecto. 6) Haber impersonal: siempre singular. 7) Verbos de cambio: ponerse (pasajero), hacerse (elegido), volverse (carácter). 8) Conectores: ¿la relación lógica es la correcta? 9) Cuyo: concuerda con lo poseído; nunca «que su».",
          "¿Por qué una lista? Porque los errores de B2 casi nunca son de vocabulario: son de estructura, y cada estructura tiene una pregunta que la delata.",
        ],
        [
          ["✗ Si tendría tiempo, iría. → ✓ Si tuviera tiempo, iría.", "If I had time, I'd go. (punto 4: nunca condicional tras si)"],
          ["✗ Me pidió que le llamo. → ✓ Me pidió que lo/le llamara.", "He asked me to call him. (punto 3: pidió en pasado → -ra)"],
        ],
        [
          mc(
            "«Cuando llegaré a casa, te llamo.» ¿Qué falla?",
            ["Cuando + futuro → subjuntivo: cuando llegue.", "Te llamo debería ser te llamaría.", "Casa lleva artículo.", "Nada."],
            0,
            "«Cuando» con una acción futura exige subjuntivo: «cuando llegue». «Te llamo» es correcto en el habla, y «casa» no necesita artículo aquí."
          ),
          mc(
            "«Es el autor cuyo novelas leí.» ¿Qué falla?",
            ["Cuyo concuerda con lo poseído: cuyas novelas.", "Debería ser quien.", "Leí debería ser leía.", "Nada."],
            0,
            "«Cuyo» concuerda con lo poseído, no con el poseedor: «cuyas novelas». «Quien» no expresa posesión, y «leí» es correcto."
          ),
        ]
      ),
    ],
    [
      fb("Corrige.", "No hay nadie que ___ la respuesta. (saber; el alumno escribió: sabe)", "sepa", "Con un antecedente inexistente («nadie»), la relativa va en subjuntivo: «sepa», no «sabe»."),
      fb("Corrige.", "Quería que ___ conmigo. (venir, tú; el alumno escribió: vengas)", "vinieras", "Con «quería» en pasado, el subjuntivo va en imperfecto: «vinieras», no «vengas»."),
      fb("Corrige.", "___ muchos problemas el año pasado. (haber; el alumno escribió: Hubieron)", "Hubo", "«Haber» impersonal va siempre en singular: «hubo», nunca «hubieron»."),
      fb("Corrige.", "Al ver la nota, ___ muy contento. (ponerse; el alumno escribió: se hizo)", "se puso", "Una emoción momentánea se expresa con «ponerse», no con «hacerse»: «se puso contento»."),
      ms(
        "¿Qué frases son correctas?",
        ["Si lo hubiera sabido, no habría venido.", "A pesar de que llovía, salimos.", "Fue María quien lo encontró.", "Dijo que vendría al día siguiente."],
        [0, 1, 2, 3],
        "Las cuatro son correctas: condicional irreal de pasado, «a pesar de que» + verbo, hendida con «quien» y estilo indirecto con el futuro pasado a condicional."
      ),
      toEs("I'll tell you when I know something, unless it's a secret.", "Te lo diré cuando sepa algo, a menos que sea un secreto.", "Cuando + subjuntivo para algo futuro (sepa); a menos que siempre lleva subjuntivo (sea).", ["Te lo diré cuando sepa algo, salvo que sea un secreto.", "Te lo digo cuando sepa algo, a menos que sea un secreto."]),
      wo("Lo que más me sorprendió fue que nadie se quejara.", "Hendida (lo que más me sorprendió fue…) + emoción en pasado → que + imperfecto de subjuntivo (se quejara).", "What surprised me most was that nobody complained."),
    ]
  ),
  L(
    "b2-comprehensive-review-3",
    "b2r-challenge-dialogue-marathon",
    "Desafío de nivel Avanzado: maratón de diálogos",
    "Cuatro escenas: una negociación, un reencuentro, una consulta y una discusión de pareja.",
    "9 min",
    [
      sec(
        "Escena 1: la negociación",
        [
          "Recuerda la regla: con tal de que, siempre que (= si, como condición) y a menos que (= excepto si) llevan SIEMPRE subjuntivo, porque la condición todavía no se ha cumplido. Si hablas en condicional o en pasado, el subjuntivo va en -ra (siempre que el pedido fuera mayor).",
          "Matiz: con tal de que y siempre que ponen una condición mínima («acepto si…»); a menos que pone la única excepción («acepto, salvo si…»). Cambiar uno por otro invierte el trato.",
        ],
        [
          ["—Firmamos hoy con tal de que nos hagan un descuento.", "We'll sign today provided you give us a discount. (condición → subjuntivo)"],
          ["—Podríamos hacerlo siempre que el pedido fuera mayor.", "We could do it as long as the order were bigger. (podríamos → -ra)"],
        ],
        [
          fb("Completa.", "Aceptaremos a menos que el precio ___. (subir)", "suba", "A menos que siempre lleva subjuntivo: la subida es solo una posibilidad futura. Es la excepción: si sube, no aceptamos."),
        ]
      ),
      sec(
        "Escena 2: el reencuentro",
        "Para hablar de cómo ha cambiado alguien: volverse + adjetivo (carácter, poco a poco), convertirse en + sustantivo (pasar a ser otra cosa); en perfecto si el cambio llega hasta hoy, en indefinido si fue en un momento concreto (desde que me convertí en padre).",
        [
          ["—¡Cuánto has cambiado! Te has vuelto muy paciente.", "You've changed so much! You've become very patient. (carácter → volverse)"],
          ["—Es que desde que me convertí en padre, veo las cosas de otra manera.", "Since I became a father, I see things differently. (sustantivo → convertirse en)"],
        ],
        [
          fb("Completa.", "Y tú ___ en toda una experta en arte. (convertirse, perfecto)", "te has convertido", "Experta es un sustantivo y el cambio llega hasta hoy: convertirse en, en pretérito perfecto (te has convertido). Volverse no admite «en»."),
        ]
      ),
      sec(
        "Escena 3: la consulta",
        "Estar + adjetivo describe cómo se encuentra el paciente ahora (está agotado); ser, cómo es de carácter. Las recomendaciones (le recomiendo que, es fundamental que, es mejor que) llevan subjuntivo porque expresan lo que se quiere que pase, no lo que pasa.",
        [
          ["—Está usted agotado. Le recomiendo que se tome unos días.", "You're exhausted. I recommend you take a few days off. (estado → estar; recomendar que + subjuntivo)"],
        ],
        [
          fb("Completa.", "Es fundamental que ___ al menos siete horas. (dormir, usted)", "duerma", "Es fundamental que + subjuntivo (una recomendación); dormir cambia o → ue: duerma."),
        ]
      ),
    ],
    [
      mc(
        "Escena 4: la discusión. «Me hablas como si fuera tonto.» ¿Qué expresa?",
        ["Una queja: te sientes tratado como alguien que no entiende.", "Una pregunta sobre inteligencia.", "Un deseo.", "Un plan."],
        0,
        "«Como si» + imperfecto de subjuntivo compara con una situación irreal: la persona se queja de que la tratan como a un tonto. No es una pregunta, ni un deseo, ni un plan."
      ),
      fb("Escena 4.", "Si me lo ___ dicho antes, no me habría enfadado. (haber, tú)", "hubieras", "Condición irreal de pasado: si + pluscuamperfecto de subjuntivo (hubieras dicho); habría va solo en la consecuencia."),
      fb("Escena 4.", "Te pedí que me ___ si llegabas tarde. (avisar, tú)", "avisaras", "Pedir que en pasado (pedí) + imperfecto de subjuntivo: avisaras."),
      mt(
        "Relaciona cada frase con su función.",
        [
          ["Ojalá no hubiera dicho eso.", "arrepentimiento"],
          ["Yo en tu lugar, me disculparía.", "consejo"],
          ["Me dijo que lo sentía.", "estilo indirecto"],
          ["Fue él quien empezó.", "énfasis"],
        ],
        "«Ojalá» + pluscuamperfecto de subjuntivo lamenta el pasado; «yo en tu lugar» + condicional aconseja; «me dijo que» reporta las palabras de otro; «fue él quien» destaca al sujeto."
      ),
      toEs("I wish we had talked earlier.", "Ojalá hubiéramos hablado antes.", "«Ojalá» + pluscuamperfecto de subjuntivo expresa lamento por algo pasado.", ["Ojalá hubiésemos hablado antes.", "Ojalá que hubiéramos hablado antes."]),
      wo("No es que no te quiera, es que necesito tiempo.", "No es que + subjuntivo niega la explicación que el otro supone; es que + indicativo da la razón real.", "It's not that I don't love you, it's that I need time."),
    ]
  ),
  L(
    "b2-comprehensive-review-3",
    "b2r-challenge-translation-relay",
    "Desafío de nivel Avanzado: relevo de traducción",
    "Traduce en ambas direcciones, un tema del nivel Avanzado tras otro.",
    "9 min",
    [
      sec(
        "Recuerda la regla: las trampas están donde el inglés no distingue",
        [
          "Traducir bien a este nivel no es buscar palabras: es ver dónde el inglés usa una sola forma y el español necesita elegir. «Would» puede ser condicional (I would go → iría) o desaparecer en la condición (if I had → si tuviera, nunca «si tendría»). «Told me to + verbo» es una orden indirecta → que + subjuntivo (me dijo que esperara). «A flat that has» es subjuntivo si el piso aún no existe para ti (busco un piso que tenga). «Was» puede ser era, estaba, fue o había. «Whose» → cuyo, que concuerda con lo poseído.",
          "Método: antes de traducir, identifica la trampa (¿subjuntivo? ¿qué tipo de condicional? ¿estilo indirecto? ¿ser, estar o haber?) y solo entonces elige la forma.",
        ],
        [
          ["If I had known… → Si hubiera sabido…", "(condición irreal de pasado: nunca «si habría sabido»)"],
          ["He told me to wait. → Me dijo que esperara.", "(orden indirecta: que + subjuntivo en -ra)"],
          ["The flat was empty. → El piso estaba vacío.", "(estado → estar, aunque en inglés sea «was»)"],
        ],
        [
          toEs("I'm looking for a flat that has a balcony.", "Busco un piso que tenga balcón.", "El piso buscado aún no es concreto, así que la relativa va en subjuntivo: «tenga».", ["Busco un apartamento que tenga balcón.", "Estoy buscando un piso que tenga balcón."]),
        ]
      ),
    ],
    [
      toEs("She said she had already eaten.", "Dijo que ya había comido.", "En estilo indirecto con «dijo», el pasado pasa a pluscuamperfecto: «había comido».", ["Ella dijo que ya había comido."]),
      toEs("If you (tú) had called me, I would have come.", "Si me hubieras llamado, habría venido.", "Condición irreal en el pasado: «si me hubieras llamado» + «habría venido». «Would have» va solo en la consecuencia.", ["Si me hubieras llamado, hubiera venido.", "Si me hubieses llamado, habría venido."]),
      toEs("He became a doctor after ten years of study.", "Se hizo médico después de diez años de estudio.", "«Became» no tiene una sola traducción: una profesión alcanzada por esfuerzo se expresa con «hacerse» (se hizo médico), no con ponerse ni volverse.", ["Llegó a ser médico después de diez años de estudio."]),
      toEn("En cuanto sepa los resultados, te llamo.", "As soon as I know the results, I'll call you.", "En cuanto + subjuntivo = as soon as + presente: el inglés no usa will en la parte temporal, igual que el español no usa futuro.", ["I'll call you as soon as I know the results."]),
      toEn("Me habla como si fuera su hijo.", "He talks to me as if I were his son.", "Como si + imperfecto de subjuntivo = as if + were / past: una comparación irreal.", ["He speaks to me as if I were his son.", "He talks to me as though I were his son."]),
      toEn("Lo que más me preocupa es la salud de mi madre.", "What worries me most is my mother's health.", "«Lo que» destaca una cosa y se traduce por «what»: «What worries me most is…».", []),
      toEn("La ciudad, cuyas calles son estrechas, es preciosa.", "The city, whose streets are narrow, is beautiful.", "«Cuyo» expresa posesión y se traduce por «whose»; en inglés no cambia, en español concuerda con calles.", []),
    ]
  ),
  L(
    "b2-comprehensive-review-3",
    "b2r-challenge-build-a-sentence",
    "Desafío de nivel Avanzado: construye la frase",
    "Frases complejas del nivel Avanzado con varias cláusulas: ordena cada pieza.",
    "8 min",
    [
      sec(
        "Recuerda la regla: cada cláusula hereda el tiempo de la que la contiene",
        [
          "Las frases del nivel Avanzado anidan estructuras: una relativa dentro de una condicional, un estilo indirecto con un cuando dentro… Para construirlas, ve de fuera hacia dentro. Primero el verbo principal; luego, cada cláusula que depende de él elige su modo (¿hecho o no hecho?) y su tiempo según el verbo del que cuelga: presente / futuro → presente de subjuntivo; pasado / condicional → imperfecto de subjuntivo (-ra).",
          "¿Por qué funciona? Porque el español mantiene la «perspectiva temporal» de toda la frase: si el marco es hipotético o pasado (encontrara, pidió), todas las piezas que dependen de él lo acompañan (hablara, ayudara).",
        ],
        [
          ["Si encontrara a alguien que hablara ruso, le pediría que me ayudara.", "If I found someone who spoke Russian, I'd ask them to help me. (marco hipotético → todo en -ra)"],
          ["Si encuentro a alguien que hable ruso, le pediré que me ayude.", "If I find someone who speaks Russian, I'll ask them to help me. (marco real → presente de subjuntivo)"],
        ],
        [
          wo("Me dijo que lo llamara en cuanto supiera algo.", "De fuera hacia dentro: dijo (pasado) → orden indirecta en -ra (llamara) → en cuanto pendiente, también en -ra (supiera).", "He told me to call him as soon as I knew anything."),
        ]
      ),
    ],
    [
      wo("Si no hubiera sido por ti, nunca me habría atrevido a cambiar de vida.", "Condición irreal de pasado con «si no hubiera sido por» (= sin ti) y consecuencia en condicional compuesto.", "If it hadn't been for you, I'd never have dared to change my life."),
      wo("Fue en aquel pueblo donde mi abuelo se hizo carpintero.", "Hendida de lugar (fue en… donde) + hacerse para una profesión elegida.", "It was in that village that my grandfather became a carpenter."),
      wo("Aunque me lo hubieras pedido, no habría podido ayudarte.", "Aunque + pluscuamperfecto de subjuntivo: una hipótesis sobre el pasado que no ocurrió.", "Even if you had asked me, I couldn't have helped you."),
      wo("La casa cuya fachada restauraron está en venta.", "Cuya concuerda con fachada (lo poseído) y la relativa va entre el antecedente y el verbo principal (está).", "The house whose facade they restored is for sale."),
      wo("No creo que haya nadie que lo haga mejor que ella.", "No creo que → subjuntivo (haya); dentro, antecedente inexistente (nadie) → otro subjuntivo (haga).", "I don't think there's anyone who does it better than she does."),
      mc(
        "¿Qué frase está bien construida?",
        ["Le pedí que me avisara antes de que se fuera.", "Le pedí que me avisaba antes de que se iba.", "Le pedí que me avise antes de que se fuera ayer.", "Le pedí avisarme que antes de irse."],
        0,
        "Con «pedí» en pasado, las dos subordinadas van en imperfecto de subjuntivo: «avisara» y «se fuera». «Avisaba… se iba» usa indicativo, y «avise… ayer» no concuerda."
      ),
      fb("Termina la frase.", "___ difícil es encontrar tiempo para todo.", "Lo", "Lo + adjetivo funciona como sustantivo: lo difícil = the hard part."),
    ]
  ),
  L(
    "b2-comprehensive-review-3",
    "b2r-challenge-subjunctive-gauntlet",
    "Desafío de nivel Avanzado: el subjuntivo total",
    "Relativas, adverbiales, concesivas, emoción, duda y secuencia de tiempos: decide el modo y el tiempo en cada frase, sin pistas.",
    "8 min",
    [
      sec(
        "Recuerda la regla: primero el modo, después el tiempo",
        [
          "Dos decisiones, siempre en este orden. 1) Modo: indicativo si afirmas algo como hecho o certeza (es evidente que, estoy seguro de que, un hábito con cuando, aunque + algo que sabes); subjuntivo si no lo afirmas (deseo, influencia, emoción, duda o negación de certeza, antecedente desconocido, futuro con cuando / hasta que, finalidad con para que, sin que, a menos que, aunque hipotético). 2) Tiempo: el verbo principal manda. Principal en presente o futuro → presente de subjuntivo; en pasado o condicional → imperfecto de subjuntivo.",
          "Ojo con las parejas engañosas: cuando + hábito pasado (cuando era joven) es indicativo, pero cuando + futuro (cuando sea mayor) es subjuntivo; es verdad que → indicativo, no es verdad que → subjuntivo.",
        ],
        [
          ["Quiero que vengas. / Quería que vinieras.", "I want you to come. / I wanted you to come. (presente → presente; pasado → imperfecto)"],
          ["Es verdad que miente. / No es verdad que mienta.", "It's true he lies. / It's not true he lies. (certeza → indicativo; negada → subjuntivo)"],
        ],
        [
          fb("Modo y tiempo.", "Buscaban a alguien que ___ chino. (hablar)", "hablara", "Antecedente desconocido → subjuntivo; buscaban (pasado) → imperfecto: hablara."),
          fb("Modo y tiempo.", "Te lo explicaré para que lo ___. (entender, tú)", "entiendas", "Para que siempre lleva subjuntivo; explicaré (futuro) → presente: entiendas."),
        ]
      ),
    ],
    [
      fb("Modo y tiempo.", "Aunque ___ cansada, fue a la fiesta. (estar; era un hecho)", "estaba", "Aunque + un hecho conocido → indicativo; imperfecto porque describe su estado en ese momento."),
      fb("Modo y tiempo.", "Me alegré de que ___ el premio. (ganar, tú)", "ganaras", "Emoción → subjuntivo; me alegré (pasado) → imperfecto: ganaras."),
      fb("Modo y tiempo.", "Cuando ___ joven, viajaba mucho. (ser, yo)", "era", "Cuando + un hábito del pasado es un hecho → indicativo imperfecto."),
      fb("Modo y tiempo.", "Cuando ___ mayor, viajaré mucho. (ser, yo)", "sea", "Cuando + un momento futuro → presente de subjuntivo, nunca «cuando seré»."),
      fb("Modo y tiempo.", "Salimos sin que nadie nos ___. (ver)", "viera", "Sin que + subjuntivo; imperfecto porque el verbo principal (salimos) está en pasado."),
      fb("Modo y tiempo.", "No es verdad que ___ tanto dinero. (ganar, él)", "gane", "Negar una certeza (no es verdad que) → subjuntivo; presente porque «es» está en presente."),
      fb("Modo y tiempo.", "Es evidente que ___ razón. (tener, tú)", "tienes", "Es evidente que afirma una certeza → indicativo."),
      mc(
        "«Por mucho que ___, no lo conseguirás.»",
        ["insistas", "insistes", "insistirás", "insistías"],
        0,
        "«Por mucho que» + subjuntivo presenta una concesión: «por mucho que insistas». «Insistes» e «insistirás» son indicativo, e «insistías» no encaja con el futuro."
      ),
    ]
  ),
  L(
    "b2-comprehensive-review-3",
    "b2r-challenge-conditionals-gauntlet",
    "Desafío de nivel Avanzado: condicionales de todos los tipos",
    "Tipo 1, tipo 2, tipo 3 y mixtas — elige la estructura según la realidad de la condición.",
    "8 min",
    [
      sec(
        "Recuerda la regla: el grado de realidad decide el tiempo",
        [
          "Recuerda la regla: lo que eliges no es «una fórmula», sino cuánto crees en la condición. Tipo 1 (posible): si + presente de indicativo → presente, futuro o imperativo. Tipo 2 (improbable o falsa ahora): si + imperfecto de subjuntivo → condicional. Tipo 3 (pasado que ya no se puede cambiar): si + pluscuamperfecto de subjuntivo → condicional perfecto.",
          "Mixtas: cada mitad lleva el tiempo de SU momento. Condición pasada con efecto presente: si hubiera + participio → condicional simple (ahora…). Condición presente con efecto pasado: si + imperfecto de subjuntivo → condicional perfecto.",
          "La regla de oro: después de «si» nunca va futuro ni condicional (ni «si lloverá» ni «si tendría» ni «si habría ido»). ¿Por qué? Porque «si» ya marca la hipótesis; el futuro y el condicional van en la otra mitad, la consecuencia.",
        ],
        [
          ["Si llueve, me mojaré. / Si lloviera, me mojaría. / Si hubiera llovido, me habría mojado.", "Three degrees of reality. (posible → presente; improbable → imperfecto de subjuntivo; pasado → pluscuamperfecto)"],
          ["Si hubiera cenado, ahora no tendría hambre.", "If I had had dinner, I wouldn't be hungry now. (mixta: condición pasada → efecto ahora)"],
        ],
        [
          fb("Elige el tiempo.", "Si me ___ a la boda, iré encantado. (invitar, ellos; es posible)", "invitan", "Condición posible (tipo 1): si + presente de indicativo. «Si me invitarán» es incorrecto: tras «si» no va futuro."),
          fb("Elige el tiempo.", "Si ___ alas, volaría hasta tu casa. (tener, yo)", "tuviera", "Condición imposible ahora (tipo 2): si + imperfecto de subjuntivo. «Si tendría» es el error típico: el condicional solo va en la consecuencia."),
        ]
      ),
    ],
    [
      fb("Tipo 3.", "Si ___ tiempo, te habría ayudado. (tener, yo)", "hubiera tenido", "La consecuencia está en condicional perfecto (habría ayudado), así que la condición es un pasado irreal: pluscuamperfecto de subjuntivo. «Tuviera» hablaría del presente."),
      fb("Mixta.", "Si hubiera estudiado Derecho, ahora ___ abogado. (ser, yo)", "sería", "Condición pasada con efecto en el presente (ahora): condicional simple. «Habría sido» no encaja con «ahora»."),
      fb("Tipo 2.", "¿Qué harías si te ___ la lotería? (tocar)", "tocara", "Hipótesis improbable con «harías» (condicional): tras «si» va imperfecto de subjuntivo, no «tocaría»."),
      fb("Tipo 3.", "Si no ___ el despertador, habría llegado tarde. (sonar)", "hubiera sonado", "Hablamos de algo que ya pasó (el despertador sonó): pasado irreal, pluscuamperfecto de subjuntivo con «habría llegado»."),
      mt(
        "Relaciona cada condición con su consecuencia.",
        [
          ["Si estudias,", "aprobarás."],
          ["Si estudiaras,", "aprobarías."],
          ["Si hubieras estudiado,", "habrías aprobado."],
          ["Si hubieras desayunado,", "ahora no tendrías hambre."],
        ],
        "Cada condición pide su consecuencia: presente → futuro (tipo 1), imperfecto de subjuntivo → condicional (tipo 2), pluscuamperfecto de subjuntivo → condicional perfecto (tipo 3), y pluscuamperfecto con «ahora» → condicional simple (mixta)."
      ),
      mc(
        "¿Cuál es la traducción correcta de «If I were rich, I would have bought that house last year.»? (mixta)",
        ["Si fuera rico, habría comprado esa casa el año pasado.", "Si hubiera sido rico, compraría esa casa el año pasado.", "Si sería rico, habría comprado esa casa.", "Si soy rico, habría comprado esa casa."],
        0,
        "La mixta combina una condición presente («si fuera rico») con una consecuencia pasada («habría comprado»). «Si hubiera sido… compraría» invierte los tiempos, «si sería» es incorrecto y «si soy» es real."
      ),
      toEs("If you (tú) hadn't helped me, I wouldn't be here now.", "Si no me hubieras ayudado, ahora no estaría aquí.", "Condicional mixta: condición pasada («si no me hubieras ayudado») con efecto presente («no estaría»). «No habría estado» hablaría del pasado, no de ahora.", ["Si no me hubieras ayudado, no estaría aquí ahora.", "Si no me hubieses ayudado, ahora no estaría aquí."]),
    ]
  ),
  L(
    "b2-comprehensive-review-3",
    "b2r-challenge-reported-speech-gauntlet",
    "Desafío de nivel Avanzado: estilo indirecto total",
    "Informaciones, preguntas, órdenes y promesas — transfórmalas todas al estilo indirecto.",
    "8 min",
    [
      sec(
        "Recuerda la regla: todo lo que cambia",
        [
          "Recuerda la regla: cuando cuentas con un verbo en pasado (dijo, preguntó, pidió) lo que alguien dijo, todo se traslada a tu momento y a tu lugar. ¿Por qué? Porque ya no hablas desde la situación original. Por eso retroceden los tiempos (presente → imperfecto, perfecto o indefinido → pluscuamperfecto, futuro → condicional), cambian los pronombres (te → me, mi → su) y las referencias (aquí → allí, mañana → al día siguiente, la semana que viene → la semana siguiente).",
          "Cada tipo de frase tiene su enlace: información → que + indicativo; orden o petición → que + subjuntivo (imperfecto si el verbo introductor está en pasado: pidió que viniera); pregunta de sí o no → si; pregunta con interrogativo → el interrogativo con tilde (dónde, qué, cuándo), sin «si» delante.",
        ],
        [
          ["«¿Dónde has estado?» → Me preguntó dónde había estado.", "She asked me where I had been. (interrogativo sin «si»; perfecto → pluscuamperfecto)"],
          ["«Ven mañana.» → Me pidió que fuera al día siguiente.", "He asked me to come the next day. (orden → que + imperfecto de subjuntivo; mañana → al día siguiente)"],
        ],
        [
          fb("Transforma.", "«Estoy harta». → Dijo que ___ harta.", "estaba", "En estilo indirecto con «dijo», el presente «estoy» pasa a imperfecto: «estaba». Dejar «está» solo es posible si la situación sigue siendo verdad ahora."),
          fb("Transforma.", "«¿Te gusta el picante?» → Me preguntó ___ me gustaba el picante.", "si", "Es una pregunta de sí o no: se introduce con «si». «Que» solo introduce informaciones y órdenes."),
        ]
      ),
    ],
    [
      fb("Transforma.", "«Lo haré mañana». → Prometió que lo ___ al día siguiente.", "haría", "En estilo indirecto con «prometió», el futuro pasa a condicional: «haría». «Hará» hablaría desde el momento original, no desde el nuestro."),
      fb("Transforma.", "«No lo toquéis». → Nos dijo que no lo ___.", "tocáramos", "Una orden transmitida con «dijo» va en que + imperfecto de subjuntivo: «no lo tocáramos». «Tocábamos» (indicativo) la convertiría en una simple información."),
      fb("Transforma.", "«¿Has terminado?» → Me preguntó si ___.", "había terminado", "En estilo indirecto con «preguntó», el pretérito perfecto pasa a pluscuamperfecto: «había terminado»."),
      { ...fb("Transforma.", "«Aquí hace mucho frío». → Comentó que ___ hacía mucho frío.", "allí", "En estilo indirecto, «aquí» suele pasar a «allí», porque ya no estamos en ese lugar."), altAnswers: ["ahí"] },
      mc(
        "«¿Qué quieres cenar?» → en estilo indirecto:",
        ["Me preguntó qué quería cenar.", "Me preguntó que qué quiero cenar ayer.", "Me preguntó si qué quería cenar.", "Me preguntó quería qué cenar."],
        0,
        "La pregunta con «qué» se transmite con el interrogativo con tilde y el presente pasa a imperfecto: «qué quería cenar». No se añade «si», y «quiero… ayer» no concuerda."
      ),
      ms(
        "¿Qué transformaciones son correctas?",
        ["«Llámame» → Me pidió que la llamara.", "«Iré» → Dijo que iría.", "«Estuve enfermo» → Dijo que había estado enfermo.", "«¿Vienes?» → Preguntó que venía."],
        [0, 1, 2],
        "Una pregunta de sí o no se transmite con «si», no con «que»: «¿Vienes?» → «Preguntó si venía» (o «si iba»). Las otras tres transformaciones son correctas."
      ),
      toEs("They warned us not to swim there.", "Nos advirtieron que no nadáramos allí.", "Advertir que no… transmite una orden, así que lleva que + imperfecto de subjuntivo (nadáramos); «nadábamos» lo convertiría en información.", ["Nos advirtieron de que no nadáramos allí.", "Nos avisaron que no nadáramos allí."]),
    ]
  ),
  L(
    "b2-comprehensive-review-3",
    "b2r-challenge-ser-estar-change-gauntlet",
    "Desafío de nivel Avanzado: ser, estar, haber y los cambios",
    "Los verbos más pequeños y los más engañosos: ser, estar, haber, ponerse, volverse, hacerse, quedarse.",
    "8 min",
    [
      sec(
        "Recuerda la regla: cada verbo tiene su territorio",
        [
          "Recuerda la regla: ser identifica y clasifica (qué es algo, su carácter, su origen) y sitúa EVENTOS (la boda es en la catedral). Estar describe cómo está algo ahora o el resultado de un cambio (la puerta está rota) y sitúa personas y cosas ya conocidas (el museo está en el centro). Haber (hay, había, hubo) presenta la EXISTENCIA de algo nuevo, con un, algún, números o sin artículo: «Hay un banco cerca», nunca «está un banco».",
          "Verbos de cambio: el español no tiene un único «to become». Ponerse + adjetivo: cambio rápido y pasajero (se puso rojo). Volverse: cambio de carácter duradero (se volvió desconfiado). Hacerse: cambio buscado o por esfuerzo, con profesiones e ideologías (se hizo médico). Quedarse: resultado de un suceso, a menudo una pérdida (se quedó sordo, sin dinero). Convertirse en + sustantivo: transformación completa.",
        ],
        [
          ["La fiesta es en casa de Ana, que está enfrente. Hay mucha gente.", "The party is at Ana's, which is across the street. There are lots of people. (evento → ser; lugar conocido → estar; existencia → hay)"],
          ["Se puso nervioso. / Se volvió muy desconfiado. / Se hizo abogado.", "He got nervous. / He became very distrustful. / He became a lawyer. (pasajero / carácter / esfuerzo)"],
        ],
        [
          fb("Completa.", "El concierto ___ en el estadio a las nueve. (evento)", "es", "Un evento se sitúa con ser, aunque hablemos de lugar y hora. «Está en el estadio» solo sirve para la ubicación de cosas o personas."),
          fb("Completa.", "El estadio ___ a las afueras de la ciudad.", "está", "Para la ubicación de un lugar o edificio concreto se usa estar. «Es» solo vale para eventos, y «hay» presentaría un estadio nuevo («hay un estadio…»)."),
        ]
      ),
    ],
    [
      fb("Completa.", "¿___ algún problema? Te veo preocupado.", "Hay", "Con «algún» se pregunta por la existencia de algo no conocido, así que va haber: «¿Hay algún problema?». «¿Está algún problema?» es incorrecto."),
      fb("Completa.", "Tras el divorcio, ___ muy desconfiado. (volverse, pretérito)", "se volvió", "Es un cambio de carácter duradero, el territorio de volverse; «se puso desconfiado» sonaría a algo pasajero."),
      fb("Completa.", "Se ___ sin batería en mitad de la llamada. (quedar, él, pretérito)", "quedó", "Quedarse sin + sustantivo expresa el resultado de perder algo (la batería), no un cambio voluntario."),
      fb("Completa.", "Esta fruta ___ verde; no te la comas.", "está", "«Estar verde» significa no estar maduro; «ser verde» es el color."),
      mc(
        "¿Cuál es la traducción correcta de «He's a very lively person, but today he's quiet.»?",
        ["Es una persona muy animada, pero hoy está callado.", "Está una persona muy animada, pero hoy es callado.", "Es una persona muy animada, pero hoy es callado.", "Hay una persona muy animada, pero hoy está callado."],
        0,
        "Un rasgo de carácter va con «ser» («es una persona animada») y el estado de hoy con «estar» («está callado»). «Es callado» describiría su carácter, no cómo está hoy."
      ),
      mt(
        "Relaciona cada cambio con el verbo adecuado.",
        [
          ["rojo de vergüenza", "ponerse"],
          ["socio del club", "hacerse"],
          ["huérfano", "quedarse"],
          ["en un símbolo nacional", "convertirse"],
        ],
        "Ponerse: cambio rápido y pasajero (rojo); hacerse: cambio voluntario o por esfuerzo (socio); quedarse: resultado de una pérdida (huérfano); convertirse en: transformación completa (un símbolo)."
      ),
      toEs("There was an accident and the road is closed.", "Hubo un accidente y la carretera está cortada.", "«Hubo» presenta un suceso puntual (existencia → haber) y «está cortada» describe el resultado (estar). «Estuvo un accidente» es imposible.", ["Ha habido un accidente y la carretera está cortada.", "Hubo un accidente y la carretera está cerrada."]),
    ]
  ),
  L(
    "b2-comprehensive-review-3",
    "b2r-challenge-mexico-city-1",
    "Desafío de nivel Avanzado: una semana en Ciudad de México (1)",
    "Laura, periodista española, pasa una semana en la capital mexicana. Sigue sus primeros días.",
    "8 min",
    [
      sec(
        "Lunes: la llegada",
        [
          "Laura escribe a su editor. Recuerda la regla: al contar el pasado, lo que ocurrió ANTES de otro momento pasado va en pluscuamperfecto (nunca había visto…), y con nunca o jamás delante del verbo no se añade otro «no».",
          "Y si el verbo principal está en pasado (me recomendaron, me pidió, quería), lo que se recomienda, se pide o se desea va en imperfecto de subjuntivo: me recomendaron que no saliera. ¿Por qué? Porque no es un hecho, sino algo que alguien quería que pasara, y el tiempo sigue al del verbo principal.",
        ],
        [
          ["Me aconsejaron que cambiara dinero en el aeropuerto, y menos mal que lo hice.", "They advised me to change money at the airport, and luckily I did. (aconsejaron → imperfecto de subjuntivo)"],
          ["La ciudad es mucho más grande de lo que imaginaba.", "The city is much bigger than I imagined. (comparación con una oración → de lo que)"],
        ],
        [
          fb("Completa.", "Jamás ___ un tráfico como este. (sufrir, yo, pluscuamperfecto)", "había sufrido", "Antes de llegar a México, nunca le había pasado: pluscuamperfecto (había + participio). Con «jamás» delante no se añade «no»."),
        ]
      ),
      sec(
        "Martes: la entrevista",
        [
          "Laura entrevista a una artista cuyo mural se ha hecho famoso. Recuerda la regla: cuyo significa «de quien / del que» y concuerda con lo POSEÍDO, no con el dueño: la artista, cuyo mural…; el pintor, cuya obra…; los artistas, cuyas paredes… En lugar de «que su» (incorrecto en registro cuidado) se usa cuyo.",
        ],
        [
          ["La artista, cuyo mural cubre todo un edificio, me dijo que había tardado dos años en pintarlo.", "The artist, whose mural covers an entire building, told me she had taken two years to paint it. (cuyo concuerda con mural)"],
        ],
        [
          fb("Completa.", "Me explicó que quería que la gente ___ en el mural su propia historia. (ver)", "viera", "Querer que + otra persona lleva subjuntivo, y como «quería» está en pasado, imperfecto: viera. «Veía» lo presentaría como un hecho."),
          fb("Completa.", "Es una pintora ___ colores recuerdan a Frida Kahlo.", "cuyos", "Cuyo concuerda con lo poseído, «colores» (masculino plural): cuyos. «Que sus» es el error típico; «cuya» concordaría con la pintora, el dueño."),
        ]
      ),
    ],
    [
      fb("Miércoles: el mercado.", "Me encantó que los vendedores me ___ probar todo. (dejar)", "dejaran", "Una emoción (me encantó) sobre lo que hacen otros lleva subjuntivo; con el verbo en pasado, imperfecto: dejaran. «Dejaban» no sirve tras «me encantó que»."),
      fb("Miércoles: el mercado.", "Si ___ más espacio en la maleta, me llevaría todas las artesanías. (tener, yo)", "tuviera", "Hipótesis irreal del presente (no tiene espacio): si + imperfecto de subjuntivo con «me llevaría». «Si tendría» es incorrecto."),
      fb("Miércoles: el mercado.", "Busco una salsa que no ___ demasiado picante. (ser)", "sea", "No sabe qué salsa será (antecedente desconocido), así que la relativa va en subjuntivo: sea. «Es» indicaría una salsa concreta que ya conoce."),
      mc(
        "¿Qué significa «¡Qué padre!» en México?",
        ["¡Qué genial!", "¡Qué papá tan bueno!", "¡Qué aburrido!", "¡Qué caro!"],
        0,
        "En México, «padre» como adjetivo coloquial significa «genial». No tiene que ver con el papá, ni significa «aburrido» o «caro»."
      ),
      mt(
        "Relaciona cada mexicanismo con su equivalente general.",
        [
          ["el camión", "el autobús"],
          ["la chamba", "el trabajo"],
          ["¿mande?", "¿perdón? / ¿qué?"],
          ["ahorita", "ahora mismo / en un rato"],
        ],
        "Vocabulario de México: el camión es el autobús urbano, la chamba es el trabajo, «¿mande?» es la forma cortés de pedir que te repitan algo, y ahorita puede significar «ahora mismo» o «dentro de un rato», según el contexto."
      ),
      toEs("If I had known the food was so good, I would have come earlier.", "Si hubiera sabido que la comida era tan buena, habría venido antes.", "Condición irreal en el pasado: «si hubiera sabido» + «habría venido». «Si habría sabido» es el error típico: tras «si» no va condicional.", ["Si hubiera sabido que la comida era tan rica, habría venido antes.", "Si hubiese sabido que la comida era tan buena, habría venido antes."]),
      wo("Fue en el mercado de Coyoacán donde probé el mejor mole.", "Frase hendida de lugar: ser + lugar + donde destaca el mercado; el relativo de lugar es donde, no quien ni cuando.", "It was at the Coyoacán market that I tried the best mole."),
    ]
  ),
  L(
    "b2-comprehensive-review-3",
    "b2r-challenge-mexico-city-2",
    "Desafío de nivel Avanzado: una semana en Ciudad de México (2)",
    "La semana de Laura termina: un temblor, un reportaje y una despedida.",
    "8 min",
    [
      sec(
        "Jueves: el temblor",
        [
          "Un pequeño sismo sorprende a Laura en el hotel. Recuerda la regla: para contar una interrupción, la acción que estaba en curso va en imperfecto (estaba escribiendo) y la que la corta, en indefinido (empezó a sonar). ¿Por qué? El imperfecto pinta el fondo; el indefinido cuenta el suceso que pasa sobre él.",
          "Y lo que alguien pide u ordena (nos pidió que, nos dijeron que + orden) va en subjuntivo; si el verbo que pide está en pasado, en imperfecto de subjuntivo: nos pidió que saliéramos. Como si también va siempre con imperfecto de subjuntivo, porque compara con algo irreal.",
        ],
        [
          ["Estaba escribiendo cuando empezó a sonar la alarma sísmica.", "I was writing when the earthquake alarm started to sound. (fondo → imperfecto; interrupción → indefinido)"],
          ["Todos salieron a la calle como si fuera un simulacro.", "Everyone went out into the street as if it were a drill. (como si → imperfecto de subjuntivo)"],
        ],
        [
          fb("Completa.", "El recepcionista nos pidió que ___ la calma. (mantener)", "mantuviéramos", "Pedir que + subjuntivo; como «pidió» está en pasado, imperfecto: mantuviéramos (con tilde en la forma de nosotros). «Manteníamos» presentaría un hecho, no una petición."),
        ]
      ),
      sec(
        "Viernes: el reportaje",
        [
          "Laura resume sus entrevistas. Recuerda la regla: al contar lo que dijeron otros con un verbo en pasado, los tiempos retroceden: «ha cambiado» → había cambiado; «hay» → había; «volveré» → volvería.",
          "Haber impersonal (hay, había, hubo) va siempre en singular, aunque lo que existe sea plural: «había pocas galerías», nunca «habían pocas galerías». ¿Por qué? Porque las galerías no son el sujeto, sino lo que existe.",
        ],
        [
          ["Los vecinos me contaron que el barrio se había convertido en un centro cultural.", "The residents told me the neighborhood had become a cultural hub. (ha convertido → había convertido)"],
        ],
        [
          fb("Completa.", "Una vecina me aseguró que antes no ___ ni una galería. (haber)", "había", "Haber impersonal en imperfecto, porque describe cómo era el barrio antes, y en singular: siempre había, nunca habían."),
        ]
      ),
    ],
    [
      fb("Sábado: la despedida.", "Mis nuevos amigos me hicieron prometer que ___. (volver, yo, condicional)", "volvería", "Lo prometido es futuro desde un momento pasado (me hicieron prometer), así que va en condicional: volvería. «Volveré» sería la promesa en estilo directo."),
      fb("Sábado: la despedida.", "Ojalá ___ quedarme un mes más. (poder, yo)", "pudiera", "Ojalá + imperfecto de subjuntivo expresa un deseo poco probable o imposible (sabe que se va). «Pueda» lo presentaría como algo posible."),
      { ...fb("Sábado: la despedida.", "Lo que más echaré de menos ___ la gente.", "es", "La hendida «lo que + verbo» se completa con «es» + lo destacado (con «echaré» también vale «será»)."), altAnswers: ["será"] },
      mc(
        "¿Cuál es la traducción correcta de «I'll write the article as soon as I get to Madrid.»?",
        ["Escribiré el artículo en cuanto llegue a Madrid.", "Escribiré el artículo en cuanto llegaré a Madrid.", "Escribiría el artículo en cuanto llegue a Madrid ayer.", "Escribo el artículo en cuanto llegara a Madrid."],
        0,
        "«En cuanto» + acción futura exige subjuntivo, y la principal va en futuro: «escribiré… en cuanto llegue». «En cuanto llegaré» usa futuro tras «en cuanto», que es incorrecto."
      ),
      ms(
        "¿Qué frases del reportaje son correctas?",
        ["La colonia Roma se ha puesto de moda.", "Los precios se han vuelto altísimos.", "Hay artistas cuyas obras se venden en Europa.", "El barrio es muy cambiado."],
        [0, 1, 2],
        "Un resultado se expresa con «estar» + participio: «el barrio está muy cambiado» (o «ha cambiado mucho»). «El barrio es muy cambiado» es incorrecta."
      ),
      toEs("It was the most intense week of my life.", "Fue la semana más intensa de mi vida.", "El superlativo en español usa «de» para el grupo: «la más intensa de mi vida», no «en mi vida». «Fue» cierra la semana como etapa terminada.", ["Ha sido la semana más intensa de mi vida."]),
      wo("Aunque solo estuve siete días, me sentí como en casa.", "Aunque + indicativo cuando lo que se concede es un hecho conocido (estuvo siete días); el subjuntivo lo presentaría como hipótesis.", "Although I was only there seven days, I felt at home."),
    ]
  ),
  L(
    "b2-comprehensive-review-3",
    "b2r-challenge-opinion-essay",
    "Desafío de nivel Avanzado: el ensayo de opinión",
    "Escribe un ensayo breve sobre el turismo masivo: tesis, argumentos, concesión y conclusión.",
    "8 min",
    [
      sec(
        "Recuerda la regla: la estructura y sus modos",
        [
          "Recuerda la regla: un ensayo de opinión avanza en cinco pasos, y cada uno tiene su fórmula: tesis (Considero que…), argumentos (En primer lugar… Además…), concesión (Si bien es cierto que…), refutación (No obstante… / Sin embargo…) y conclusión (En definitiva… / Por todo lo expuesto…). Los conectores le dicen al lector qué función tiene cada frase.",
          "El modo depende de lo que hace la frase. Afirmar la tesis o conceder un hecho → indicativo (considero que es…, si bien es cierto que genera…). Negar la opinión o valorar y proponer (no creo que, es necesario que, es preciso que) → subjuntivo, porque no afirmas un hecho, sino lo que dudas o quieres que pase.",
        ],
        [
          ["Considero que el turismo masivo perjudica a las ciudades históricas.", "I believe mass tourism harms historic cities. (tesis afirmada → indicativo)"],
          ["Si bien es cierto que genera empleo, no es menos cierto que expulsa a los vecinos.", "While it's true that it creates jobs, it's equally true that it drives out residents. (hecho concedido → indicativo)"],
          ["En definitiva, es necesario que se regule.", "In short, it needs to be regulated. (propuesta → subjuntivo)"],
        ],
        [
          fb("Completa la tesis.", "Considero que el turismo ___ regularse. (deber)", "debe", "Considerar que afirmativo presenta tu opinión como algo que afirmas, así que va indicativo: debe. «Deba» solo aparecería con «no considero que»."),
          fb("Completa la concesión.", "Si bien es cierto que los coches eléctricos ___ menos, siguen ocupando espacio. (contaminar)", "contaminan", "Lo que se concede con «si bien es cierto que» es un hecho que aceptas, así que va indicativo: contaminan. El subjuntivo le quitaría fuerza de hecho."),
        ]
      ),
    ],
    [
      fb("Completa.", "No creo que prohibir el turismo ___ la solución. (ser)", "sea", "Negar una opinión (no creo que) quita la certeza, así que va subjuntivo: sea. Con «creo que» afirmativo sería «es»."),
      fb("Completa.", "Si los ayuntamientos no ___, los barrios perderán su identidad. (actuar)", "actúan", "Condición posible con consecuencia en futuro (perderán): si + presente de indicativo. «Actúen» es incorrecto tras «si»."),
      fb("Completa.", "Es preciso que ___ un equilibrio entre economía y convivencia. (buscarse)", "se busque", "Es preciso que expresa necesidad y exige subjuntivo; con «se» pasivo y un sujeto singular (un equilibrio): se busque."),
      mt(
        "Relaciona cada conector con su función en el ensayo.",
        [
          ["Considero que", "tesis"],
          ["Si bien es cierto que", "concesión"],
          ["No obstante", "refutación"],
          ["En definitiva", "conclusión"],
        ],
        "Cada fórmula marca un paso del ensayo: considero que presenta la tesis, si bien es cierto que concede un punto al contrario, no obstante lo refuta y en definitiva cierra con la conclusión."
      ),
      mc(
        "¿Qué frase de conclusión es más adecuada?",
        ["Por todo lo expuesto, resulta urgente adoptar medidas.", "Y ya está, eso es todo.", "Bueno, pues nada.", "Vale, se acabó."],
        0,
        "Para concluir un texto formal se usa una fórmula como «Por todo lo expuesto». «Y ya está», «Bueno, pues nada» y «Vale, se acabó» son coloquiales."
      ),
      toEs("It's the residents who suffer the consequences most.", "Son los vecinos quienes más sufren las consecuencias.", "En la hendida plural, «ser» y el relativo concuerdan con lo destacado: «Son los vecinos quienes…», no «es… quien».", ["Son los vecinos los que más sufren las consecuencias."]),
      wo("Lo que está en juego no es solo la economía, sino la identidad de la ciudad.", "No solo… sino… suma dos elementos y destaca el segundo; tras una negación se usa sino, no pero.", "What's at stake is not only the economy but the city's identity."),
    ]
  ),
  L(
    "b2-comprehensive-review-3",
    "b2r-exit-ticket",
    "Billete de salida del nivel Avanzado: ¿listo para el nivel Maestría?",
    "La última lección del nivel Avanzado: diez destrezas que el nivel Maestría da por sabidas, una pregunta cada una.",
    "9 min",
    [
      sec(
        "Las diez destrezas",
        "(1) relativas (2) adverbiales (3) imperfecto de subjuntivo (4) tipo 2 (5) tipo 3 (6) estilo indirecto (7) ser/estar/haber (8) verbos de cambio (9) conectores (10) énfasis y cuyo.",
        [
          ["¡Rumbo al nivel Maestría!", "On to the Mastery level!"],
        ],
        [
          fb("Destreza 1.", "No conozco a nadie que ___ tan bien como tú. (bailar)", "baile", "Antecedente inexistente."),
          fb("Destreza 2.", "Llámame en cuanto ___. (llegar, tú)", "llegues", "En cuanto + subjuntivo."),
        ]
      ),
    ],
    [
      fb("Destreza 3.", "Mis padres querían que ___ Medicina. (estudiar, yo)", "estudiara", "Imperfecto de subjuntivo."),
      fb("Destreza 4.", "Si ___ más tiempo, aprendería a tocar el piano. (tener, yo)", "tuviera", "Tipo 2."),
      fb("Destreza 5.", "Si me lo ___ dicho, te habría ayudado. (haber, tú)", "hubieras", "Tipo 3."),
      fb("Destreza 6.", "Me dijo que me ___ al día siguiente. (llamar, él)", "llamaría", "Futuro → condicional."),
      fb("Destreza 7.", "El concierto ___ en el estadio.", "es", "Para dónde tiene lugar un evento se usa «ser»: «El concierto es en el estadio»."),
      fb("Destreza 8.", "Al oír su nombre, ___ nervioso. (ponerse, pretérito)", "se puso", "Cambio momentáneo."),
      fb("Destreza 9.", "Es caro; ___, merece la pena. (nevertheless)", "no obstante", "Contraste formal."),
      fb("Destreza 10.", "Es un pintor ___ obras están en el Louvre.", "cuyas", "«Cuyo» concuerda con lo poseído («obras»), no con «un pintor»: «cuyas»."),
    ]
  ),
  // ---- Themed spiral reviews between the reading stories (lessons 65+). ----
  // Each takes the theme of the story it follows and drills mixed B2
  // grammar through it -- never depending on the story's plot details.
  L(
    "chef-against-family-wishes",
    "b2r-tema-tradicion-innovacion",
    "Repaso temático: tradición o innovación",
    "Romper con lo que se espera de ti: expectativas familiares, riesgos y decisiones — con el subjuntivo del nivel Avanzado.",
    "7 min",
    [
      sec(
        "Lo que esperaban de ella",
        [
          "Recuerda la concordancia de tiempos: lo que otros esperaban, querían o exigían en el pasado va en imperfecto de subjuntivo (esperaba que continuara), porque el verbo de deseo está en pasado; con el verbo en presente sería presente de subjuntivo (espera que continúe).",
          "Para revisar decisiones, la condicional irreal: si + pluscuamperfecto de subjuntivo, con condicional compuesto si la consecuencia también es pasada (nunca habría descubierto) o simple si llega hasta hoy (ahora sería infeliz). Y tras «ojalá», siempre subjuntivo, nunca condicional.",
        ],
        [
          ["Su familia esperaba que continuara con el restaurante tradicional.", "Her family expected her to continue the traditional restaurant. (esperaba → continuara)"],
          ["Su familia espera que continúe con el restaurante.", "Her family expects her to continue the restaurant. (espera → continúe)"],
          ["Si hubiera seguido sus consejos, nunca habría descubierto su propio estilo.", "If she'd followed their advice, she'd never have found her own style. (todo en el pasado)"],
        ],
        [
          fb("Completa.", "Sus padres no querían que ___ la receta de la abuela. (cambiar, ella)", "cambiara", "Querer en pasado (querían) + que + otro sujeto → imperfecto de subjuntivo: cambiara."),
          fb("Completa.", "Busca un sabor que nadie ___ probado antes. (haber)", "haya", "Antecedente desconocido (un sabor que quizá no exista) → subjuntivo; como habla de algo ya ocurrido, perfecto: haya probado."),
        ]
      ),
    ],
    [
      fb("Completa.", "Aunque ___ críticas, no pensaba rendirse. (recibir, ella; hipótesis)", "recibiera", "Aunque + imperfecto de subjuntivo (hipotético en el pasado)."),
      fb("Completa.", "Con los años, su restaurante ___ en un referente. (convertirse, perfecto)", "se ha convertido", "Convertirse en + sustantivo para una transformación profunda; pretérito perfecto porque el resultado llega hasta hoy."),
      { ...fb("Completa.", "Fue su abuela ___ la animó a arriesgarse.", "quien", "En las oraciones hendidas de persona se usa «quien» (o «la que»): «Fue su abuela quien…»."), altAnswers: ["la que"] },
      mc(
        "«If I had listened to them, I would be unhappy now.»",
        ["Si los hubiera escuchado, ahora sería infeliz.", "Si los escuchara, ahora habría sido infeliz.", "Si los habría escuchado, ahora sería infeliz.", "Si los escucho, ahora sería infeliz."],
        0,
        "Condicional mixta: condición pasada («si los hubiera escuchado») con efecto presente («ahora sería»). «Si los escuchara… habría sido» invierte los tiempos, y tras «si» nunca va «habría»."
      ),
      ms(
        "¿Qué frases son correctas?",
        ["Innovar no significa olvidar de dónde vienes.", "Me alegra que por fin te hayas atrevido.", "Nadie creía que tuviera éxito.", "Ojalá mis padres me apoyarían."],
        [0, 1, 2],
        "«Ojalá» siempre va con subjuntivo: «ojalá me apoyaran». «Ojalá mis padres me apoyarían» es incorrecta porque usa condicional."
      ),
      toEs("Tradition is not something you keep, but something you transform.", "La tradición no es algo que se guarda, sino algo que se transforma.", "«No…, sino…» corrige una idea con otra; el «se» impersonal habla de la gente en general.", ["La tradición no es algo que se conserva, sino algo que se transforma."]),
      wo("Lo que para unos era una traición, para otros era una evolución.", "Lo que (neutro) + imperfecto descriptivo; para unos / para otros contrasta dos puntos de vista.", "What was a betrayal for some was an evolution for others."),
    ]
  ),
  L(
    "architect-saves-historic-building",
    "b2r-tema-patrimonio",
    "Repaso temático: salvar el patrimonio",
    "Edificios históricos, demoliciones y protestas — la voz pasiva, los conectores y la argumentación.",
    "7 min",
    [
      sec(
        "Argumentar para conservar",
        [
          "Recuerda las reglas: los textos sobre patrimonio usan mucho la pasiva, porque lo importante es el edificio, no quién actúa. Con ser + participio (fue construido, será demolido) el participio concuerda con el sujeto y el agente, si aparece, va con por. Si no interesa el agente, lo más natural es la pasiva refleja con se: se aprobó el derribo. Estar + participio no es una pasiva: describe el resultado (está restaurado).",
          "Cuyo, cuya, cuyos, cuyas (whose) concuerda con lo poseído, no con el poseedor: la iglesia, cuyos muros… Y si bien es una forma formal de aunque, con indicativo.",
        ],
        [
          ["El edificio fue construido en 1890 por un arquitecto modernista.", "The building was built in 1890 by a modernist architect. (ser + participio + por)"],
          ["Si bien necesita reformas, su valor histórico es incalculable.", "Although it needs renovations, its historical value is incalculable. (si bien = aunque)"],
          ["El museo, cuyas salas acaban de reformarse, reabre el lunes.", "The museum, whose rooms have just been refurbished, reopens on Monday. (cuyas concuerda con salas)"],
        ],
        [
          fb("Completa.", "Está previsto que el edificio ___ demolido en otoño. (ser)", "sea", "Está previsto que presenta algo que todavía no ha ocurrido: pide subjuntivo, y la pasiva se forma con ser: sea demolido."),
          fb("Completa con el relativo posesivo correcto (whose).", "La fachada, ___ azulejos son originales, debe protegerse.", "cuyos", "«Cuyo» concuerda con lo poseído, no con el poseedor: «azulejos» (masculino plural) → «cuyos», aunque fachada sea femenino."),
        ]
      ),
    ],
    [
      fb("Completa.", "Es inaceptable que se ___ un edificio con tanta historia. (derribar)", "derribe", "Una valoración (es inaceptable que) va con subjuntivo: se derribe."),
      fb("Completa.", "Si lo derriban, la ciudad ___ parte de su memoria. (perder, futuro)", "perderá", "Condición real o posible: si + presente, futuro en la consecuencia."),
      fb("Completa.", "Si no se hubieran movilizado los vecinos, ya lo ___ derribado. (haber, ellos)", "habrían", "Condición irreal en el pasado (si + hubieran movilizado): consecuencia en condicional perfecto, habrían derribado."),
      mt(
        "Relaciona cada término con su significado.",
        [
          ["la fachada", "facade"],
          ["el derribo", "demolition"],
          ["la restauración", "restoration"],
          ["el patrimonio", "heritage"],
        ],
        "Vocabulario de arquitectura y patrimonio. Fíjate en las familias: derribar → el derribo, restaurar → la restauración."
      ),
      mc(
        "«The building, which had been abandoned for decades, will be turned into a library.»",
        ["El edificio, que llevaba décadas abandonado, se convertirá en una biblioteca.", "El edificio, que llevaba décadas abandonado, se pondrá en una biblioteca.", "El edificio, quien llevaba décadas abandonado, se convertirá en biblioteca.", "El edificio, que llevaba décadas abandonado, se hará una biblioteca en."],
        0,
        "«Que» es el relativo para cosas en una explicativa, y la transformación se expresa con «se convertirá en». «Quien» es solo para personas, y «se pondrá en» no expresa transformación."
      ),
      toEs("Despite the protests, the demolition was approved.", "A pesar de las protestas, se aprobó el derribo.", "A pesar de + sustantivo; la pasiva refleja (se aprobó) es lo más natural cuando no importa quién aprueba.", ["Pese a las protestas, se aprobó el derribo.", "A pesar de las protestas, el derribo fue aprobado."]),
      wo("Lo que se pierde al derribar un edificio no se puede reconstruir.", "Lo que + se impersonal: lo que se pierde = what is lost.", "What is lost when a building is torn down can't be rebuilt."),
    ]
  ),
  L(
    "small-town-doctor-dilemma",
    "b2r-tema-medicina-rural",
    "Repaso temático: la medicina rural",
    "El único médico de un pueblo, sus dilemas y sus pacientes — deber, riesgo y decisiones en condicional.",
    "7 min",
    [
      sec(
        "Deber y riesgo",
        [
          "Recuerda las reglas: los dilemas imaginarios van con si + imperfecto de subjuntivo y condicional (¿Qué harías si fueras el único médico?). La necesidad va con es imprescindible / es necesario que + subjuntivo, en presente o, si hablas del pasado, en imperfecto (Era necesario que respetaran la cuarentena).",
          "Y un clásico del registro médico: haber impersonal siempre en singular (hubo muchos contagios, había dos pacientes), aunque lo que sigue sea plural.",
        ],
        [
          ["¿Qué harías si fueras el único médico en cien kilómetros?", "What would you do if you were the only doctor for a hundred kilometers? (hipótesis)"],
          ["Es imprescindible que los pacientes graves sean trasladados cuanto antes.", "It's essential that serious patients be transferred as soon as possible. (necesidad, presente)"],
          ["Ese invierno hubo muchos casos de gripe.", "That winter there were many cases of flu. (haber impersonal: singular)"],
        ],
        [
          fb("Completa.", "Si ___ un hospital más cerca, muchos vecinos vivirían más tranquilos. (haber)", "hubiera", "Si + imperfecto de subjuntivo (hipótesis); el haber impersonal queda en singular: hubiera un hospital."),
          fb("Completa.", "El médico pidió que nadie ___ del pueblo hasta que se aclarara la situación. (salir)", "saliera", "Pidió (influencia en pasado) → imperfecto de subjuntivo: salieron → saliera."),
        ]
      ),
    ],
    [
      { ...fb("Completa.", "Los síntomas ___ muy extraños; nunca había visto nada igual. (ser, imperfecto)", "eran", "Descripción en el pasado → imperfecto de indicativo: eran. Es un hecho, no hay disparador de subjuntivo."), altAnswers: ["fueron"] },
      fb("Completa.", "Tras meses de trabajo sin descanso, ___ agotado. (quedarse, pretérito)", "se quedó", "Un cambio de estado como resultado puntual → indefinido: se quedó agotado."),
      fb("Completa.", "En cuanto ___ los resultados del laboratorio, sabremos qué hacer. (llegar)", "lleguen", "En cuanto + acción futura → presente de subjuntivo: lleguen."),
      mt(
        "Relaciona cada término con su significado.",
        [
          ["el ambulatorio", "health center"],
          ["el contagio", "contagion"],
          ["la cuarentena", "quarantine"],
          ["la guardia", "on-call shift"],
        ],
        "Vocabulario médico: contagio y cuarentena se parecen al inglés; ambulatorio y guardia, no."
      ),
      ms(
        "¿Qué frases son correctas?",
        ["Si no actuáramos rápido, la situación empeoraría.", "Es necesario que todos se vacunen.", "El paciente está grave, pero estable.", "Hubieron muchos contagios."],
        [0, 1, 2],
        "«Haber» impersonal va siempre en singular: «hubo muchos contagios», no «hubieron». Las otras frases son correctas."
      ),
      toEs("Habían muchos pacientes en la sala de espera.", "Había muchos pacientes en la sala de espera.", "Haber impersonal (= there was/were) va siempre en singular: había, aunque pacientes sea plural.", [], "Corrige la frase."),
      toEs("Es imprescindible que el paciente descanse.", "Era imprescindible que el paciente descansara.", "Al pasar la necesidad al pasado (era imprescindible), la subordinada pasa al imperfecto de subjuntivo: descansara.", ["Fue imprescindible que el paciente descansara.", "Era imprescindible que el paciente descansase."], "Cambia «es» por «era»."),
      toEs("Nobody had told him that the job would be so hard.", "Nadie le había dicho que el trabajo sería tan duro.", "En estilo indirecto, el futuro visto desde el pasado se expresa con condicional: «sería».", ["Nadie le había dicho que el trabajo iba a ser tan duro."]),
      wo("A pesar del cansancio, atendió a todos los pacientes que llegaron.", "A pesar de + sustantivo (del cansancio); la relativa va en indicativo porque los pacientes llegaron de verdad.", "Despite his exhaustion, he saw every patient who came in."),
    ]
  ),
  L(
    "siblings-dividing-inheritance",
    "b2r-tema-herencia",
    "Repaso temático: repartir una herencia",
    "Objetos con memoria, desacuerdos entre hermanos y decisiones difíciles — proponer, discrepar y conceder (propongo que, no creo que, aunque): repaso del nivel Avanzado.",
    "7 min",
    [
      sec(
        "¿Qué hacemos con la casa?",
        [
          "Recuerda las tres funciones de esta conversación y el modo que pide cada una. Proponer y preferir (propongo que, sugiero que, prefiero que) introducen algo que todavía no es un hecho: subjuntivo. Discrepar con «no creo que» niega la verdad de lo que sigue: subjuntivo (no creo que valga); en afirmativo, «creo que» lo da por cierto y lleva indicativo (creo que vale).",
          "Conceder con «aunque» depende de lo que sepas: aunque + indicativo para un hecho que reconoces (aunque es vieja, la quiero); aunque + subjuntivo para algo posible o hipotético (aunque valiera una fortuna, no la vendería).",
        ],
        [
          ["Propongo que vendamos la casa y repartamos el dinero.", "I propose we sell the house and split the money. (propuesta → subjuntivo)"],
          ["Creo que vale mucho, pero no creo que la vendamos.", "I think it's worth a lot, but I don't think we'll sell it. (creo que → indicativo; no creo que → subjuntivo)"],
          ["Aunque es vieja, tiene mucho valor sentimental.", "Although it's old, it has a lot of sentimental value. (hecho reconocido → indicativo)"],
        ],
        [
          fb("Completa.", "Prefiero que la casa se ___ en la familia. (quedar)", "quede", "Preferir que con otro sujeto → subjuntivo: se quede."),
          fb("Completa.", "Aunque ___ mucho dinero, no la vendería. (valer, hipótesis)", "valiera", "Una hipótesis (vendería, en condicional) pide aunque + imperfecto de subjuntivo: valiera."),
        ]
      ),
    ],
    [
      fb("Completa.", "Mamá siempre nos pedía que no ___ por dinero. (pelearse, nosotros)", "nos peleáramos", "Pedir en imperfecto (pedía) + que → imperfecto de subjuntivo, con el pronombre delante: nos peleáramos."),
      fb("Completa.", "El reloj, ___ dueño original era el abuelo, es para ti.", "cuyo", "«Cuyo» concuerda con lo poseído: «dueño» es masculino singular."),
      fb("Completa.", "Si mamá ___ viva, esto no estaría pasando. (estar)", "estuviera", "Situación irreal en el presente: si + imperfecto de subjuntivo (estuviera) y condicional (estaría)."),
      mc(
        "«It's the piano that I want to keep, not the house.»",
        ["Es el piano lo que quiero conservar, no la casa.", "Es el piano quien quiero conservar, no la casa.", "Es el piano que lo quiero conservar.", "El piano es lo quiero conservar, no la casa."],
        0,
        "Para destacar una cosa en una hendida se usa «lo que» (o «el que»): «Es el piano lo que quiero conservar». «Quien» es solo para personas, y «que lo quiero» repite el pronombre."
      ),
      ms(
        "¿Qué frases son correctas?",
        ["No es que no quiera la casa, es que no puedo mantenerla.", "Ojalá hubiéramos hablado de esto antes.", "Fue ella quien cuidó de mamá.", "Me dijo que quiere vender ayer."],
        [0, 1, 2],
        "En estilo indirecto con «dijo», el presente pasa a imperfecto: «me dijo que quería vender». En «me dijo que quiere vender ayer», el presente no encaja con «ayer»."
      ),
      toEs("We should have talked about it while she was alive.", "Deberíamos haberlo hablado cuando estaba viva.", "«Deberíamos haber» + participio expresa un reproche sobre el pasado.", ["Tendríamos que haberlo hablado cuando estaba viva.", "Deberíamos haber hablado de ello cuando estaba viva."]),
      wo("Hay cosas cuyo valor no se puede medir en dinero.", "Cuyo concuerda con valor (masculino), no con cosas; «se puede medir» es impersonal.", "There are things whose value can't be measured in money."),
    ]
  ),
  L(
    "musician-two-paths",
    "b2r-tema-dos-caminos",
    "Repaso temático: estabilidad o pasión",
    "Un trabajo seguro frente a un sueño arriesgado — hipótesis, consejos y consecuencias.",
    "7 min",
    [
      sec(
        "Pros y contras",
        [
          "Recuerda la regla: para sopesar opciones que todavía no has elegido, usa si + imperfecto de subjuntivo y condicional (si aceptara, tendría). Para lo que ya no tiene remedio, si + hubiera + participio (si hubiera elegido, habría conocido / ahora sería). Para aconsejar: yo que tú + condicional, o te aconsejo que + subjuntivo.",
          "Por qué el imperfecto de subjuntivo y no el presente: «si acepto» presenta la opción como real y casi decidida; «si aceptara» la mantiene en el terreno de lo imaginado, que es justo lo que haces al pensar pros y contras.",
        ],
        [
          ["Si aceptara el puesto en la orquesta, tendría un sueldo fijo.", "If I accepted the orchestra position, I'd have a fixed salary."],
          ["Pero si lo rechazara, podría ir de gira con mi banda.", "But if I turned it down, I could go on tour with my band."],
        ],
        [
          fb("Completa.", "Si ___ la gira, quizá me arrepentiría toda la vida. (rechazar, yo)", "rechazara", "Hipótesis sobre una opción todavía abierta: si + imperfecto de subjuntivo (rechazara, o rechazase), con la consecuencia en condicional (me arrepentiría). «Si rechazaría» es incorrecto."),
          fb("Completa.", "Yo que tú, ___ lo que te hace feliz. (elegir)", "elegiría", "«Yo que tú» equivale a «si yo fuera tú», así que el consejo va en condicional: elegiría. «Elija» o «elijo» no dan consejo."),
        ]
      ),
    ],
    [
      fb("Completa.", "Mis padres prefieren que ___ algo seguro. (tener, yo)", "tenga", "Preferir que con otro sujeto pide subjuntivo; como prefieren está en presente, presente de subjuntivo: tenga."),
      fb("Completa.", "Nadie puede decidir por ti, a menos que tú se lo ___. (permitir)", "permitas", "A menos que siempre lleva subjuntivo, porque presenta una condición que aún no se ha cumplido: permitas."),
      { ...fb("Completa.", "Si hubiera elegido la seguridad, nunca ___ el mundo. (conocer, yo)", "habría conocido", "Condición pasada que no se cumplió (hubiera elegido) y consecuencia también pasada: condicional compuesto, habría conocido."), altAnswers: ["habría visto", "hubiera conocido"] },
      ms(
        "¿Qué argumentos favorecen el puesto en la orquesta?",
        ["un sueldo fijo cada mes", "la libertad de crear", "vacaciones pagadas", "la emoción de las giras"],
        [0, 2],
        "Los argumentos de estabilidad («un sueldo fijo cada mes», «vacaciones pagadas») favorecen la orquesta. «La libertad de crear» y «la emoción de las giras» son argumentos de pasión para la otra opción."
      ),
      mc(
        "«Whatever you decide, I'll support you.»",
        ["Decidas lo que decidas, te apoyaré.", "Decides lo que decides, te apoyaré.", "Decidirás lo que decidas, te apoyo.", "Lo que decides, te apoyaría."],
        0,
        "La estructura reduplicativa «verbo en subjuntivo + lo que + mismo verbo» significa «no importa qué»: «decidas lo que decidas». Con indicativo («decides lo que decides») no funciona."
      ),
      toEs("It's not the money that worries me, but the time.", "No es el dinero lo que me preocupa, sino el tiempo.", "Para destacar una cosa se usa «lo que», y para corregir tras una negación, «sino».", ["Lo que me preocupa no es el dinero, sino el tiempo."]),
      wo("Nunca sabremos qué habría pasado si hubiera elegido el otro camino.", "Pregunta indirecta + tipo 3.", "We'll never know what would have happened if he'd chosen the other path."),
    ]
  ),
  L(
    "teacher-last-year",
    "b2r-tema-jubilacion",
    "Repaso temático: el último año en el aula",
    "Jubilación, legado y despedidas — hacer balance con perfecto, imperfecto, condicional perfecto y ojalá: repaso del nivel Avanzado.",
    "7 min",
    [
      sec(
        "Balance de una carrera",
        [
          "Recuerda qué tiempo hace cada trabajo al hacer balance. El pretérito perfecto mira un periodo que llega hasta hoy (en treinta años ha cambiado, este año me he despedido). El imperfecto describe cómo eran las cosas antes, como un decorado (no había ordenadores, escribíamos con tiza). El indefinido cuenta hechos cerrados (cuando empecé).",
          "Para lo que no fue: el condicional compuesto imagina otro pasado (habría sido más paciente) y ojalá + pluscuamperfecto de subjuntivo lo lamenta (ojalá hubiera tenido más tiempo). Para el futuro de los demás, esperar que / ojalá + presente de subjuntivo (espero que me recuerden).",
        ],
        [
          ["En treinta años, la enseñanza ha cambiado muchísimo.", "In thirty years, teaching has changed enormously."],
          ["Cuando empecé, no había ordenadores en las aulas.", "When I started, there were no computers in classrooms."],
          ["Quizá habría sido más paciente con algunos alumnos.", "Perhaps I would have been more patient with some students."],
        ],
        [
          fb("Completa.", "Espero que mis alumnos ___ de mí algo más que fechas y fórmulas. (recordar)", "recuerden", "Esperar que con otro sujeto → presente de subjuntivo, con diptongo o → ue: recuerden."),
          fb("Completa.", "Antes los exámenes se ___ a mano. (corregir, imperfecto)", "corregían", "Describe cómo eran las cosas antes, una costumbre: imperfecto (se corregían), en plural porque concuerda con exámenes."),
        ]
      ),
    ],
    [
      fb("Completa.", "Mis antiguos alumnos me dijeron que nunca me ___. (olvidar, condicional)", "olvidarían", "Estilo indirecto: el futuro del mensaje («nunca te olvidaremos») pasa a condicional, olvidarían."),
      fb("Completa.", "Ojalá ___ tenido más tiempo para cada alumno. (haber, yo)", "hubiera", "Lamento sobre el pasado: ojalá + pluscuamperfecto de subjuntivo (hubiera tenido)."),
      fb("Completa.", "Con los años, ___ más tolerante. (volverse, perfecto)", "me he vuelto", "Volverse para un cambio de carácter duradero; perfecto porque el periodo llega hasta hoy."),
      mc(
        "«What I'll miss most is the students' laughter.»",
        ["Lo que más echaré de menos es la risa de los alumnos.", "El que más echaré de menos son la risa de los alumnos.", "Lo que más echaré de menos serán los alumnos risa.", "Lo más que echaré de menos es la risa."],
        0,
        "Para destacar una cosa se usa «lo que» con «es» en singular: «Lo que más echaré de menos es la risa». «El que… son» no concuerda, y «lo más que» no es la estructura correcta."
      ),
      ms(
        "¿Qué frases son correctas?",
        ["Me pidieron que diera un discurso.", "Fue en este colegio donde di mi primera clase.", "Cuando me jubile, viajaré.", "Aunque me jubile el año pasado, sigo enseñando."],
        [0, 1, 2],
        "«Aunque me jubile el año pasado» es incorrecta: para un hecho pasado y real se usa indicativo (aunque me jubilé el año pasado, sigo enseñando)."
      ),
      toEs("If I had to choose again, I would be a teacher again.", "Si tuviera que elegir de nuevo, volvería a ser profesora.", "Condición hipotética: «si tuviera» + condicional; «volver a» + infinitivo significa hacerlo otra vez.", ["Si tuviera que elegir otra vez, volvería a ser profesor.", "Si tuviera que elegir de nuevo, sería profesora otra vez."]),
      wo("No hay mayor recompensa que ver crecer a tus alumnos.", "No hay mayor… que + infinitivo: comparación de superioridad absoluta; ver crecer a alguien lleva la a personal.", "There's no greater reward than watching your students grow."),
    ]
  ),
  L(
    "astronaut-return-ordinary-life",
    "b2r-tema-volver-a-la-rutina",
    "Repaso temático: volver a la vida normal",
    "Después de una experiencia extraordinaria, la rutina parece extraña — contrastes, como si y verbos de cambio.",
    "7 min",
    [
      sec(
        "Readaptarse",
        [
          "Recuerda la regla: detrás de como si solo va el subjuntivo en pasado. Como si + imperfecto de subjuntivo compara con algo irreal al mismo tiempo (como si fuera la primera vez); como si + pluscuamperfecto de subjuntivo, con algo irreal anterior (como si hubiera estado fuera años). ¿Por qué? Porque como si introduce siempre una comparación imaginaria, nunca un hecho; por eso no admite indicativo (✗ como si era) ni presente de subjuntivo (✗ como si sea).",
          "Para contar cómo te ha cambiado la experiencia, usa los verbos de cambio: volverse para un cambio duradero de actitud (me he vuelto más paciente), ponerse para una reacción del momento (me puse nervioso) y convertirse en para algo que pasa a ser otra cosa.",
        ],
        [
          ["Caminaba por la calle como si fuera la primera vez.", "I walked down the street as if it were the first time. (irreal y simultáneo)"],
          ["Me abrazó como si hubiéramos estado separados una década.", "She hugged me as if we had been apart for a decade. (irreal y anterior)"],
          ["Desde que volví, me he vuelto más consciente de las cosas pequeñas.", "Since I came back, I've become more aware of small things. (cambio duradero)"],
        ],
        [
          fb("Completa.", "Todo me parecía tan lento, como si el tiempo se ___ detenido. (haber)", "hubiera", "La detención del tiempo es anterior e imaginaria → como si + pluscuamperfecto de subjuntivo: se hubiera detenido. «Había» es indicativo y no va tras como si."),
          fb("Completa.", "Me costaba creer que ___ en casa de nuevo. (estar, yo)", "estuviera", "Costar creer que expresa duda → subjuntivo; con el verbo principal en pasado (costaba), imperfecto de subjuntivo: estuviera."),
        ]
      ),
    ],
    [
      fb("Completa.", "Antes del viaje, nunca ___ en lo frágil que es la Tierra. (pensar, pluscuamperfecto)", "había pensado", "Pluscuamperfecto para una acción anterior a otro momento pasado (antes del viaje): había pensado."),
      fb("Completa.", "Si no hubiera ido al espacio, no ___ el planeta de la misma manera. (ver, yo; ahora)", "vería", "Condicional mixta: condición pasada (si no hubiera ido) y consecuencia en el presente (ahora) → condicional simple: vería."),
      fb("Completa.", "Mi familia me pidió que les ___ todo con detalle. (contar)", "contara", "Pedir que + subjuntivo; con pidió en pasado, imperfecto de subjuntivo: contara."),
      mt(
        "Relaciona cada frase con su significado.",
        [
          ["echar de menos la ingravidez", "to miss weightlessness"],
          ["readaptarse", "to readjust"],
          ["sentirse fuera de lugar", "to feel out of place"],
          ["recuperar la rutina", "to get back into the routine"],
        ],
        "Vocabulario de la readaptación: re- significa «de nuevo» (readaptarse = adaptarse otra vez)."
      ),
      mc(
        "«It's as if I had been away for years.»",
        ["Es como si hubiera estado fuera durante años.", "Es como si he estado fuera durante años.", "Es como si estaría fuera durante años.", "Es como si estuve fuera durante años."],
        0,
        "«Como si» + pluscuamperfecto de subjuntivo habla de algo anterior e irreal: «hubiera estado». «He estado», «estaría» y «estuve» nunca van tras «como si»."
      ),
      toEs("Nobody understood what I had felt up there.", "Nadie entendía lo que había sentido allí arriba.", "«Lo que» introduce algo sin nombrar; «había sentido» es anterior a «entendía».", ["Nadie entendió lo que había sentido allí arriba.", "Nadie comprendía lo que yo había sentido allí arriba.", "Nadie comprendió lo que yo había sentido allí arriba."]),
      wo("Lo más difícil no fue irse, sino volver.", "No… sino contrapone lo negado y lo correcto: no fue irse, sino volver. «Lo más difícil» es «la parte más difícil».", "The hardest part wasn't leaving but coming back."),
      toEs("Mis vecinos me pidieron que les cuento cómo era la vida allí.", "Mis vecinos me pidieron que les contara cómo era la vida allí.", "Pedir que exige subjuntivo, y con pidieron en pasado va el imperfecto de subjuntivo: contara. «Cuento» es presente de indicativo.", ["Mis vecinos me pidieron que les contase cómo era la vida allí."], "Corrige la frase."),
      fb("Transforma con como si.", "Parece que estoy soñando. → Me siento como si ___ soñando.", "estuviera", "Una comparación irreal en el mismo momento → como si + imperfecto de subjuntivo: estuviera. Aunque la frase está en presente, como si nunca lleva «estoy» ni «esté»."),
    ]
  ),
  L(
    "rower-comeback-injury",
    "b2r-tema-lesion-y-vuelta",
    "Repaso temático: volver tras una lesión",
    "Rehabilitación, paciencia y competición — conjunciones temporales, condiciones y verbos de cambio.",
    "7 min",
    [
      sec(
        "El plan de recuperación",
        [
          "Recuerda la regla: con hasta que, en cuanto, cuando o tan pronto como, el modo depende de si el hecho ya ha ocurrido. Si mira al futuro (todavía no ha pasado), va en subjuntivo: Volverás en cuanto te den el alta. Si es pasado o habitual (es un hecho comprobado), va en indicativo: Volvió en cuanto le dieron el alta. Antes de que lleva siempre subjuntivo, porque lo que introduce todavía no ha pasado respecto a la acción principal.",
          "Siempre que cambia de significado según el modo: con subjuntivo es una condición (= con tal de que); con indicativo significa «cada vez que».",
        ],
        [
          ["No podrás competir hasta que el hombro esté totalmente curado.", "You won't be able to compete until your shoulder is fully healed. (futuro → subjuntivo)"],
          ["En cuanto el médico le dio el alta, volvió al agua.", "As soon as the doctor discharged her, she went back to the water. (pasado → indicativo)"],
          ["Siempre que llueve, me duele la rodilla.", "Whenever it rains, my knee hurts. (siempre que + indicativo = cada vez que)"],
        ],
        [
          fb("Completa.", "Puedes entrenar siempre que no ___ dolor. (sentir, tú)", "sientas", "Aquí siempre que pone una condición (= con tal de que), así que pide subjuntivo: sientas. Con indicativo (sientes) significaría «cada vez que sientes dolor»."),
          fb("Completa.", "Tienes que parar antes de que la lesión ___. (empeorar)", "empeore", "Antes de que siempre lleva subjuntivo: lo que introduce todavía no ha ocurrido."),
        ]
      ),
      sec(
        "Cambios: ponerse, volverse, llegar a ser",
        "Recuerda también los verbos de cambio: ponerse + adjetivo para un estado de ánimo o físico pasajero (se puso nerviosa); volverse para un cambio de carácter más duradero (se volvió desconfiado); llegar a ser / convertirse en para un logro o una transformación al final de un proceso (llegó a ser campeona).",
        [
          ["Al ver la resonancia, se puso pálido.", "When he saw the MRI, he went pale. (cambio pasajero)"],
          ["Con los años se volvió más paciente.", "Over the years she became more patient. (cambio de carácter)"],
        ],
        [
          mc(
            "«Después de tantas lesiones, ___ muy desconfiado con su cuerpo.»",
            ["se volvió", "se puso", "llegó a ser", "se hizo"],
            0,
            "Es un cambio de carácter que se instala con el tiempo: volverse. Ponerse indicaría un estado pasajero, llegar a ser un logro tras un esfuerzo, y hacerse se usa sobre todo con profesiones, ideologías o con rico/mayor."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "Si hubiera descansado más, no me ___ lesionado. (haber, yo)", "habría", "Condición irreal en el pasado (si + hubiera descansado): la consecuencia va en condicional perfecto, habría lesionado. Hubiera también se oye, pero nunca en la parte del si."),
      fb("Completa.", "Tras la operación, ___ muy impaciente. (ponerse, pretérito)", "se puso", "Un estado de ánimo momentáneo se expresa con ponerse + adjetivo: se puso impaciente."),
      fb("Completa.", "Su entrenadora le dijo que ___ paciencia. (tener, ella)", "tuviera", "Una orden en estilo indirecto con el verbo introductor en pasado (dijo) pasa a imperfecto de subjuntivo: tuviera."),
      mt(
        "Relaciona cada palabra con su significado.",
        [
          ["la rehabilitación", "rehabilitation"],
          ["dar el alta", "to discharge (medically)"],
          ["la recaída", "relapse"],
          ["el fisioterapeuta", "physical therapist"],
        ],
        "Vocabulario deportivo y médico."
      ),
      ms(
        "¿Qué frases son correctas?",
        ["Por mucho que entrenes, necesitas descansar.", "Volvió a competir como si nada hubiera pasado.", "Cuando esté recuperada, lo intentaré.", "Cuando estaré recuperada, lo intentaré."],
        [0, 1, 2],
        "«Cuando estaré recuperada» es incorrecta: cuando con un hecho futuro lleva subjuntivo (cuando esté recuperada), nunca futuro. Por mucho que + subjuntivo y como si + pluscuamperfecto de subjuntivo están bien."
      ),
      toEs("It was her patience that allowed her to return.", "Fue su paciencia lo que le permitió volver.", "Para destacar un elemento se usa ser + elemento + lo que / la que: Fue su paciencia lo que…", ["Fue su paciencia la que le permitió volver."]),
      wo("Aunque tarde meses, volveré a remar con el equipo.", "Aunque + subjuntivo (tarde) para algo futuro que todavía no se sabe.", "Even if it takes months, I'll row with the team again."),
    ]
  ),
  L(
    "photographer-disappearing-tradition",
    "b2r-tema-oficios-perdidos",
    "Repaso temático: los oficios que desaparecen",
    "Artesanos, técnicas antiguas y el paso del tiempo — relativas, pasiva y deseos.",
    "7 min",
    [
      sec(
        "Documentar lo que se va",
        [
          "Recuerda las reglas de este tema. (1) En las relativas, el modo depende de si el antecedente existe y lo conoces: busco artesanos que trabajen el cuero (no sé si los hay → subjuntivo); encontré a un anciano que hacía cestas (existe → indicativo). Con nadie, ningún o quedan pocos que…, subjuntivo.",
          "(2) La pasiva de acción se forma con ser + participio concordado + por: estas cestas fueron hechas por mi bisabuela. (3) Ojalá + imperfecto de subjuntivo expresa un deseo poco probable sobre el presente: ojalá hubiera más talleres. Y cuyo concuerda con lo poseído: el taller, cuyas herramientas…",
        ],
        [
          ["Busco artesanos que todavía trabajen el cuero a mano.", "I'm looking for artisans who still work leather by hand. (no sé si existen → subjuntivo)"],
          ["Encontré a un anciano que llevaba sesenta años haciendo cestas.", "I found an old man who had been making baskets for sixty years. (existe → indicativo)"],
          ["El retablo fue restaurado por un equipo de expertos.", "The altarpiece was restored by a team of experts. (pasiva: ser + participio + por)"],
        ],
        [
          fb("Completa.", "Quedan pocos maestros que ___ enseñar este oficio. (saber)", "sepan", "«Quedan pocos que» presenta un antecedente casi inexistente e indeterminado → subjuntivo: sepan. Con un maestro concreto diríamos «el maestro que sabe»."),
          fb("Completa.", "Este oficio ___ transmitido de padres a hijos durante siglos. (ser, perfecto)", "ha sido", "Pasiva de acción con ser, en pretérito perfecto porque el proceso llega hasta hoy: ha sido transmitido."),
        ]
      ),
    ],
    [
      fb("Completa.", "Ojalá los jóvenes ___ interés por estas técnicas. (mostrar)", "mostraran", "Ojalá + imperfecto de subjuntivo presenta el deseo como poco probable ahora mismo: mostraran. Con «muestren» lo verías más posible."),
      fb("Completa.", "Si nadie lo aprende, el oficio ___ con él. (desaparecer, futuro)", "desaparecerá", "Condición posible: si + presente (aprende) → futuro en la consecuencia: desaparecerá."),
      fb("Completa con el relativo posesivo correcto (whose).", "El taller, ___ herramientas tienen cien años, parece un museo.", "cuyas", "«Cuyo» concuerda con lo poseído, no con el poseedor: «herramientas» → «cuyas»."),
      mc(
        "«He works as if he had all the time in the world.»",
        ["Trabaja como si tuviera todo el tiempo del mundo.", "Trabaja como si tiene todo el tiempo del mundo.", "Trabaja como si tendría todo el tiempo del mundo.", "Trabaja como si tenga todo el tiempo del mundo."],
        0,
        "«Como si» siempre va con imperfecto (o pluscuamperfecto) de subjuntivo: «tuviera». «Tiene», «tendría» y «tenga» no se usan nunca tras «como si»."
      ),
      ms(
        "¿Qué frases son correctas?",
        ["Es una lástima que se pierdan estas técnicas.", "No hay nadie en el pueblo que lo sepa hacer.", "Fue su abuelo quien le enseñó.", "El oficio se ha convertido de un lujo."],
        [0, 1, 2],
        "La transformación se expresa con «convertirse en»: «se ha convertido en un lujo». «Convertido de» usa la preposición equivocada."
      ),
      toEs("When he retires, nobody will make these pieces anymore.", "Cuando se jubile, ya nadie hará estas piezas.", "«Cuando» + acción futura exige subjuntivo: «cuando se jubile».", ["Cuando se retire, ya nadie hará estas piezas.", "Cuando se jubile, nadie hará ya estas piezas."]),
      wo("Cada pieza que sale de sus manos cuenta una historia.", "Relativa en indicativo (sale): hablamos de piezas reales que existen.", "Every piece that comes out of his hands tells a story."),
    ]
  ),
  L(
    "expat-cultural-identity",
    "b2r-tema-identidad-dos-paises",
    "Repaso temático: entre dos países",
    "Crecer entre dos culturas: pertenencia, idiomas y nostalgia — con hipótesis, como si y verbos de cambio.",
    "7 min",
    [
      sec(
        "¿De dónde eres?",
        [
          "Recuerda las reglas para hablar de una identidad mezclada. Como si compara con algo irreal y va siempre en subjuntivo: imperfecto para lo simultáneo (como si fuera extranjera), pluscuamperfecto para lo anterior (como si nunca me hubiera ido). Las hipótesis mixtas combinan un pasado irreal con un efecto actual: si hubiera crecido en un solo país (pasado), no me haría estas preguntas (ahora).",
          "Para los cambios de identidad, volverse + adjetivo indica una transformación gradual de carácter o actitud (me he vuelto más abierta), y convertirse en + sustantivo un cambio profundo (se ha convertido en mi hogar). Y si un lugar o persona no existe, la relativa va en subjuntivo: no hay ningún sitio donde me sienta en casa.",
        ],
        [
          ["En España me siento como si fuera extranjera, y en Argentina también.", "In Spain I feel as if I were a foreigner, and in Argentina too."],
          ["Si hubiera crecido en un solo país, quizá no me haría estas preguntas.", "If I had grown up in one country, maybe I wouldn't ask myself these questions."],
        ],
        [
          fb("Completa.", "Me miran como si no ___ de aquí. (ser, yo)", "fuera", "Como si compara con algo irreal y simultáneo: imperfecto de subjuntivo, fuera. Nunca indicativo («como si no soy»)."),
          { ...fb("Completa.", "Con los años, ___ más consciente de mis raíces. (volverse, perfecto)", "me he vuelto", "Volverse + adjetivo: cambio gradual de carácter o actitud («hacerse» también es posible)."), altAnswers: ["me he hecho"] },
        ]
      ),
    ],
    [
      fb("Completa.", "Mis padres querían que ___ los dos idiomas. (hablar, yo)", "hablara", "Querer en pasado + que con otro sujeto → imperfecto de subjuntivo: hablara."),
      fb("Completa.", "No hay ningún lugar donde me ___ completamente en casa. (sentir)", "sienta", "El lugar no existe (ningún lugar), así que la relativa va en subjuntivo: sienta."),
      fb("Completa.", "Si pudiera elegir, ___ entre los dos países. (vivir, yo)", "viviría", "Hipótesis en el presente: si + imperfecto de subjuntivo (pudiera) y condicional en la consecuencia (viviría)."),
      mt(
        "Relaciona cada expresión con su significado.",
        [
          ["sentirse dividido", "to feel torn"],
          ["las raíces", "roots"],
          ["el desarraigo", "rootlessness"],
          ["pertenecer a", "to belong to"],
        ],
        "Vocabulario de identidad."
      ),
      mc(
        "«It's not that I don't love Spain, it's that I miss Argentina.»",
        ["No es que no quiera a España, es que echo de menos Argentina.", "No es que no quiero a España, es que echo de menos Argentina.", "No es que no quisiera a España, es que echaba de menos mañana.", "No es no quiera a España, que echo de menos Argentina."],
        0,
        "«No es que» + subjuntivo niega una causa y «es que» + indicativo da la verdadera: «no quiera… echo de menos». «No es que no quiero» usa indicativo tras «no es que»."
      ),
      toEs("Wherever I live, I'll always be a bit of both.", "Viva donde viva, siempre seré un poco de los dos.", "La estructura «viva donde viva» (subjuntivo repetido) significa «no importa dónde».", ["Viva donde viva, siempre seré un poco de ambos lugares."]),
      wo("Lo que antes era una carga ahora se ha convertido en mi mayor riqueza.", "Lo que + imperfecto + convertirse en.", "What used to be a burden has now become my greatest asset."),
    ]
  ),
  L(
    "grandmother-secret-talent",
    "b2r-tema-secretos-familia",
    "Repaso temático: los secretos de familia",
    "Descubrir el pasado oculto de alguien cercano — pluscuamperfecto, estilo indirecto y sorpresa.",
    "7 min",
    [
      sec(
        "El descubrimiento",
        [
          "Recuerda las reglas: al contar un secreto, lo que ya había pasado antes del descubrimiento va en pluscuamperfecto (había expuesto, había vendido). Los verbos que presentan hechos (descubrir, saber, contar, confesar) llevan indicativo.",
          "Si el verbo principal es una reacción o una valoración (me sorprendió que, nos dolió que, es increíble que), la subordinada va en subjuntivo; con la reacción en pasado y el hecho anterior a ella, en pluscuamperfecto de subjuntivo: hubiera contado. La emoción pide subjuntivo y el pasado lo empuja un paso atrás.",
        ],
        [
          ["Descubrimos que la abuela había expuesto sus cuadros en París.", "We discovered Grandma had exhibited her paintings in Paris. (hecho → indicativo)"],
          ["Nos sorprendió que nunca nos lo hubiera contado.", "It surprised us that she'd never told us. (reacción → subjuntivo)"],
          ["Mi tío confesó que había vendido la casa sin avisar a nadie.", "My uncle confessed he had sold the house without telling anyone. (confesar presenta un hecho)"],
        ],
        [
          fb("Completa.", "Nadie sabía que ___ tanto talento. (tener, ella; imperfecto)", "tenía", "«Saber que» presenta un hecho real → indicativo; un rasgo que duraba en el pasado va en imperfecto: tenía. «Tuviera» sería subjuntivo sin motivo."),
          fb("Completa.", "Me dolió que nos lo ___ ocultado tantos años. (haber, ella)", "hubiera", "«Me dolió» es una reacción en pasado → subjuntivo; ocultarlo fue anterior al dolor → pluscuamperfecto de subjuntivo: hubiera ocultado. «Había» sería indicativo, que no va tras una emoción."),
        ]
      ),
    ],
    [
      fb("Completa.", "Nos contó que ___ de pintar cuando se casó. (dejar, pluscuamperfecto)", "había dejado", "«Contar» presenta un hecho → indicativo; dejar de pintar ocurrió antes de que nos lo contara → pluscuamperfecto: había dejado."),
      fb("Completa.", "Si no hubiéramos encontrado aquella caja, nunca lo ___. (saber, nosotros)", "habríamos sabido", "Condición irreal en el pasado: si + pluscuamperfecto de subjuntivo → condicional compuesto (habríamos sabido). «Sabríamos» hablaría del presente."),
      fb("Completa.", "Es increíble que una mujer tan tímida ___ sido tan famosa. (haber)", "haya", "«Es increíble que» es una valoración en presente → subjuntivo; sobre algo ya pasado, perfecto de subjuntivo: haya sido. «Hubiera» exigiría un verbo principal en pasado (era increíble que)."),
      mc(
        "«Why didn't you ever tell us?» → estilo indirecto:",
        ["Le preguntamos por qué nunca nos lo había contado.", "Le preguntamos por qué nunca nos lo contara.", "Le preguntamos que por qué nunca nos lo cuenta ayer.", "Le preguntamos por qué nunca se lo había contado a ella."],
        0,
        "La pregunta con «por qué» se transmite sin «que» y el pasado pasa a pluscuamperfecto: «nos lo había contado». «Contara» es subjuntivo sin motivo, y «se lo había contado a ella» cambia a quién se lo contó."
      ),
      ms(
        "¿Qué frases son correctas?",
        ["Fue en el desván donde encontramos los cuadros.", "Nos pidió que no se lo dijéramos a nadie.", "Ojalá la hubiéramos conocido de joven.", "Los cuadros estuvieron pintados por ella."],
        [0, 1, 2],
        "La pasiva con agente («por ella») se forma con «ser»: «fueron pintados por ella». «Estar» + participio expresa un estado resultante; con agente expreso la pasiva de acción lleva «ser» (fueron pintados por ella), y «estuvieron pintados por ella» suena anómalo."
      ),
      toEs("She had given up her dream so that her children could study.", "Había renunciado a su sueño para que sus hijos pudieran estudiar.", "Renunciar ocurrió antes del relato → pluscuamperfecto (había renunciado); «para que» exige subjuntivo y, tras un pasado, imperfecto: pudieran.", ["Había renunciado a su sueño para que sus hijos pudiesen estudiar."]),
      wo("Nunca imaginamos que detrás de aquella mujer tranquila hubiera una artista.", "«Nunca imaginamos que» niega lo que se pensaba → subjuntivo; en pasado, imperfecto: hubiera. Con «imaginamos que» afirmativo iría indicativo (había).", "We never imagined there was an artist behind that quiet woman."),
    ]
  ),
  L(
    "startup-founder-ethical-dilemma",
    "b2r-tema-etica-datos",
    "Repaso temático: la ética de los datos",
    "Privacidad, inversores y dilemas morales — condicionales, concesiones y argumentación formal.",
    "7 min",
    [
      sec(
        "El dilema",
        [
          "Recuerda las reglas para plantear un dilema. Una hipótesis que no es real (todavía no lo has hecho) va con si + imperfecto de subjuntivo y condicional: si vendiéramos los datos, salvaríamos la empresa. Aunque + subjuntivo concede algo hipotético sin cambiar la conclusión: aunque salvara la empresa, no lo haríamos. Con indicativo (aunque salva la empresa) lo darías por un hecho.",
          "Las valoraciones morales (no es ético que, no es justo que, es inaceptable que) llevan subjuntivo, porque no informan de un hecho sino que lo juzgan. Y por mucho que + subjuntivo dice que ninguna cantidad cambiará tu decisión.",
        ],
        [
          ["Si vendiéramos los datos, salvaríamos la empresa.", "If we sold the data, we'd save the company."],
          ["Aunque salvara la empresa, traicionaríamos a los usuarios.", "Even if it saved the company, we'd betray our users."],
        ],
        [
          fb("Completa.", "No es ético que ___ información personal sin permiso. (compartirse)", "se comparta", "Una valoración moral (no es ético que) va con subjuntivo: se comparta. No informa de un hecho, lo juzga."),
          { ...fb("Completa.", "Los usuarios confían en que ___ sus datos. (proteger, nosotros)", "protejamos", "Confiar en que + subjuntivo (también admite futuro de indicativo: «protegeremos»)."), altAnswers: ["protegeremos"] },
        ]
      ),
    ],
    [
      fb("Completa.", "Si los usuarios se ___, la empresa perdería su reputación. (enterar)", "enteraran", "Hipótesis no real: si + imperfecto de subjuntivo (se enteraran) con condicional en la consecuencia (perdería)."),
      fb("Completa.", "Por mucho dinero que nos ___, no deberíamos aceptar. (ofrecer, ellos)", "ofrezcan", "Por mucho (dinero) que + subjuntivo: ninguna cantidad cambiará la decisión. Con indicativo hablarías de una oferta concreta ya hecha."),
      fb("Completa.", "El inversor exigió que ___ los datos antes de firmar. (entregar, nosotros)", "entregáramos", "Exigir en pasado + que con otro sujeto → imperfecto de subjuntivo: entregáramos."),
      mt(
        "Relaciona cada término con su significado.",
        [
          ["la privacidad", "privacy"],
          ["el consentimiento", "consent"],
          ["la filtración", "leak"],
          ["el inversor", "investor"],
        ],
        "Vocabulario de ética tecnológica."
      ),
      mc(
        "¿Qué conector encaja? «La oferta es tentadora; ___, pondría en riesgo nuestra integridad.»",
        ["sin embargo", "por lo tanto", "además", "ya que"],
        0,
        "«Sin embargo» marca contraste: la oferta atrae, pero tiene un riesgo. «Por lo tanto» indicaría consecuencia, «además» adición y «ya que» causa."
      ),
      toEs("I would rather close the company than betray our users.", "Preferiría cerrar la empresa antes que traicionar a nuestros usuarios.", "Para comparar dos opciones con «preferir» se usa «antes que» (o simplemente «que»).", ["Prefiero cerrar la empresa antes que traicionar a nuestros usuarios.", "Preferiría cerrar la empresa a traicionar a nuestros usuarios."]),
      wo("Lo que está en juego es la confianza de millones de personas.", "Lo que + estar en juego.", "What's at stake is the trust of millions of people."),
    ]
  ),
  L(
    "diplomat-tense-negotiation",
    "b2r-tema-diplomacia",
    "Repaso temático: la negociación diplomática",
    "Acuerdos, condiciones y lenguaje cuidadoso — conjunciones condicionales, condicional de cortesía y estilo indirecto.",
    "7 min",
    [
      sec(
        "Negociar con palabras",
        [
          "Recuerda las tres herramientas de la diplomacia. (1) El condicional de cortesía suaviza ofertas, peticiones y amenazas: estaríamos dispuestos, les rogaríamos, nos veríamos obligados. Al presentarlas como hipotéticas, dejan espacio al otro. (2) Siempre que, con tal de que y a menos que ponen condiciones y siempre llevan subjuntivo: presente si la principal va en presente o futuro (firmaremos con tal de que cumplan), imperfecto si va en condicional o pasado (estaríamos dispuestos siempre que se respetara).",
          "(3) En estilo indirecto con el verbo introductor en pasado, el futuro pasa a condicional (no aceptará → declaró que no aceptaría) y el presente a imperfecto (avanzan → aseguró que avanzaban).",
        ],
        [
          ["Estaríamos dispuestos a ceder siempre que se respetara la frontera actual.", "We'd be willing to compromise as long as the current border was respected."],
          ["El ministro declaró que su país no aceptaría ninguna amenaza.", "The minister declared his country would accept no threats. (aceptará → aceptaría)"],
          ["Les rogaríamos que reconsideraran su postura.", "We would ask you to reconsider your position. (condicional de cortesía + imperfecto de subjuntivo)"],
        ],
        [
          fb("Completa.", "Firmaremos con tal de que ambas partes ___ el acuerdo. (cumplir)", "cumplan", "«Con tal de que» siempre pide subjuntivo; con la principal en futuro (firmaremos), presente: cumplan. «Cumplen» es indicativo y «cumplieran» exigiría un condicional en la principal."),
        ]
      ),
    ],
    [
      fb("Completa.", "La delegación advirtió que ___ la mesa si no había avances. (abandonar, condicional)", "abandonaría", "En estilo indirecto tras «advirtió», el futuro «abandonará» pasa a condicional: abandonaría."),
      fb("Completa.", "Sería conveniente que ambas partes ___ gestos de buena voluntad. (hacer)", "hicieran", "«Sería conveniente que» es una valoración en condicional → imperfecto de subjuntivo: hicieran (hacer es irregular). «Hagan» iría con «es conveniente que»."),
      fb("Completa.", "No habrá acuerdo a menos que se ___ las sanciones. (levantar)", "levanten", "«A menos que» siempre lleva subjuntivo; con la principal en futuro, presente: se levanten (en plural, concuerda con «las sanciones»)."),
      mt(
        "Relaciona cada frase directa con su versión diplomática.",
        [
          ["No queremos eso.", "No estaríamos en condiciones de aceptarlo."],
          ["Hagan esto.", "Les rogaríamos que lo consideraran."],
          ["Están equivocados.", "Quizá haya un malentendido."],
          ["Nos vamos.", "Nos veríamos obligados a retirarnos."],
        ],
        "El condicional y el subjuntivo suavizan el mensaje."
      ),
      ms(
        "¿Qué frases son adecuadas en una negociación formal?",
        ["Les agradecería que reconsideraran su postura.", "¡Eso es una tontería!", "Estaríamos abiertos a nuevas propuestas.", "Siempre que haya reciprocidad, cederemos."],
        [0, 2, 3],
        "En una negociación formal se usan el condicional de cortesía y condiciones («siempre que haya…»). «¡Eso es una tontería!» es demasiado directa y descortés."
      ),
      toEs("Both governments stated that they would continue talking.", "Ambos gobiernos afirmaron que seguirían dialogando.", "En estilo indirecto con «afirmaron», el futuro pasa a condicional: «seguirían».", ["Los dos gobiernos afirmaron que seguirían dialogando.", "Ambos gobiernos declararon que seguirían dialogando."]),
      wo("Fue gracias a la mediación de un tercer país como se llegó a un acuerdo.", "Para destacar la causa («gracias a…») con ser, la norma culta prefiere «como» al «que» (en el uso general también se oye «que»): «Fue gracias a… como se llegó a un acuerdo».", "It was thanks to a third country's mediation that an agreement was reached."),
    ]
  ),
  L(
    "mountain-guide-difficult-rescue",
    "b2r-tema-rescate",
    "Repaso temático: el rescate en la montaña",
    "Emergencias, decisiones rápidas y trabajo en equipo — conjunciones temporales, órdenes indirectas y tipo 3.",
    "7 min",
    [
      sec(
        "La operación",
        [
          "Recuerda las reglas. (1) Cuando, en cuanto, hasta que, mientras + algo que todavía no ha ocurrido → subjuntivo (en cuanto amaine el viento); si ya ocurrió o es costumbre → indicativo (no despegó hasta que se levantó la niebla). Antes de que lleva subjuntivo siempre. (2) Las órdenes a terceros van con que + subjuntivo (que nadie se mueva), y en pasado, con imperfecto de subjuntivo (ordenó que nadie se separara).",
          "(3) Para revisar lo que pudo pasar y no pasó: si + pluscuamperfecto de subjuntivo, condicional compuesto (si hubieran salido antes, lo habrían encontrado). ¿Por qué tanto subjuntivo en una emergencia? Porque casi todo lo que se dice son planes, órdenes y posibilidades, no hechos.",
        ],
        [
          ["Tenemos que llegar antes de que anochezca.", "We have to get there before dark. (antes de que → siempre subjuntivo)"],
          ["El guía ordenó que nadie se separara del grupo.", "The guide ordered that nobody separate from the group. (orden en pasado → imperfecto de subjuntivo)"],
          ["El helicóptero despegó en cuanto paró la nieve.", "The helicopter took off as soon as the snow stopped. (hecho ya ocurrido → indicativo)"],
        ],
        [
          fb("Completa.", "Saldremos en cuanto ___ el viento. (amainar)", "amaine", "«En cuanto» + algo futuro que aún no ha pasado → presente de subjuntivo: amaine. «Amaina» solo valdría para una costumbre o un hecho real."),
          fb("Completa.", "Le pidieron al escalador que no se ___ hasta que llegaran. (mover)", "moviera", "Una petición en pasado (pidieron) → que + imperfecto de subjuntivo: moviera. «Mueva» rompería la secuencia de tiempos."),
        ]
      ),
    ],
    [
      fb("Completa.", "Si hubieran salido una hora después, no lo ___ encontrado con vida. (haber, ellos)", "habrían", "Condición irreal en el pasado: si + pluscuamperfecto de subjuntivo, y en la consecuencia condicional compuesto: habrían encontrado (también se acepta «hubieran»)."),
      fb("Completa.", "El helicóptero no pudo despegar hasta que ___ la niebla. (levantarse, pretérito)", "se levantó", "«Hasta que» con un hecho que ya ocurrió en el pasado → indicativo (se levantó). El subjuntivo solo va cuando el hecho aún no ha pasado."),
      fb("Completa.", "Cuando lo encontraron, ___ inconsciente pero vivo.", "estaba", "Un estado en un momento pasado se expresa con «estar» en imperfecto: «estaba inconsciente»."),
      mt(
        "Relaciona cada término con su significado.",
        [
          ["la ventisca", "blizzard"],
          ["el alud", "avalanche"],
          ["la cordada", "roped team"],
          ["la hipotermia", "hypothermia"],
        ],
        "Vocabulario de montaña."
      ),
      mc(
        "«Nobody moves until I say so.»",
        ["Que nadie se mueva hasta que yo lo diga.", "Que nadie se mueve hasta que yo lo digo.", "Nadie se moverá hasta que yo lo diré.", "Que nadie se moviera hasta que lo digo."],
        0,
        "«Que» + subjuntivo expresa una orden a terceros («que nadie se mueva») y «hasta que» + futuro exige subjuntivo («lo diga»). «Se mueve» y «lo digo» son indicativo, y «lo diré» es futuro."
      ),
      toEs("It was his experience that saved the climber's life.", "Fue su experiencia lo que salvó la vida del escalador.", "Para destacar una cosa se usa «ser» + elemento + «lo que»: «Fue su experiencia lo que…».", ["Fue su experiencia la que salvó la vida del escalador."]),
      wo("A pesar de la tormenta, el equipo consiguió bajarlo a salvo.", "«A pesar de» + sustantivo presenta un obstáculo que no impide la acción; con verbo conjugado sería «a pesar de que».", "Despite the storm, the team managed to get him down safely."),
    ]
  ),
  L(
    "lo-que-no-se-hereda",
    "b2r-tema-tierra-familia",
    "Repaso temático: la tierra de la familia",
    "Olivares, campos y decisiones entre generaciones — deseos con ojalá, hipótesis con si y recuerdos en imperfecto: repaso del nivel Avanzado.",
    "7 min",
    [
      sec(
        "¿Vender o conservar?",
        [
          "Recuerda las tres piezas de esta discusión. Los recuerdos y costumbres del pasado van en imperfecto (cuando éramos niños, pasábamos los veranos). Las hipótesis, en si + imperfecto de subjuntivo → condicional (si lo vendiéramos, no conocerían este lugar); nunca condicional detrás de si.",
          "Con ojalá, el tiempo del subjuntivo indica cuánto crees en el deseo: presente para algo posible (ojalá llueva este año), imperfecto para algo improbable o imposible ahora (ojalá la abuela pudiera verlo), pluscuamperfecto para lamentar el pasado (ojalá hubiéramos venido más).",
        ],
        [
          ["Cuando éramos niños, pasábamos los veranos en el olivar.", "When we were kids, we spent summers at the olive grove. (recuerdo → imperfecto)"],
          ["Si lo vendiéramos, nuestros hijos nunca conocerían este lugar.", "If we sold it, our children would never know this place. (hipótesis)"],
          ["Ojalá llueva este año; ojalá la abuela pudiera verlo.", "I hope it rains this year; if only Grandma could see it. (posible / imposible)"],
        ],
        [
          fb("Completa.", "Papá siempre quiso que alguno de nosotros ___ cargo del campo. (hacerse)", "se hiciera", "Querer en pasado (quiso) + que + otro sujeto → imperfecto de subjuntivo: se hiciera (cargo)."),
          fb("Completa.", "Ojalá no ___ que decidir esto nunca. (tener, nosotros)", "tuviéramos", "Ojalá + imperfecto de subjuntivo para un deseo que ya no es posible: tuviéramos."),
        ]
      ),
    ],
    [
      { ...fb("Completa.", "Aunque ___ poco dinero, este campo vale mucho para nosotros. (dar)", "da", "Aunque + indicativo si reconoces un hecho (el campo da poco dinero); con subjuntivo (dé) le quitarías importancia."), altAnswers: ["dé", "deja", "deje"] },
      fb("Completa.", "No hay nadie en la familia que ___ cultivar olivos. (saber)", "sepa", "Antecedente inexistente (no hay nadie) → subjuntivo irregular de saber: sepa."),
      fb("Completa.", "Lo que se hereda no es solo la tierra, ___ también la responsabilidad.", "sino", "«No solo…, sino también…» suma una segunda idea a la primera."),
      mc(
        "«If Dad were here, he would know what to do.»",
        ["Si papá estuviera aquí, sabría qué hacer.", "Si papá estaría aquí, sabría qué hacer.", "Si papá está aquí, sabría qué hacer.", "Si papá estuvo aquí, sabría qué hacer."],
        0,
        "Condición irreal presente: «si» + imperfecto de subjuntivo («estuviera») y condicional («sabría»). «Si estaría» es incorrecto porque tras el «si» condicional nunca va condicional, y «si está» sería una condición real."
      ),
      ms(
        "¿Qué frases son correctas?",
        ["Fue aquí donde mi padre aprendió el oficio.", "Me pidió que cuidara los árboles.", "Hay olivos cuya edad supera los quinientos años.", "Si hubiéramos venido más, ahora sabríamos cuidar el olivar."],
        [0, 1, 2, 3],
        "Las cuatro son correctas; «Si hubiéramos venido más, ahora sabríamos cuidar el olivar» es una condicional mixta (pasado irreal → consecuencia presente)."
      ),
      toEs("We'll decide when we're all together.", "Decidiremos cuando estemos todos juntos.", "«Cuando» + acción futura exige subjuntivo: «cuando estemos».", ["Lo decidiremos cuando estemos todos juntos."]),
      wo("Hay cosas que se heredan y otras que hay que ganarse.", "Pasiva refleja (se heredan, en plural con cosas) + hay que + infinitivo con pronombre (ganarse).", "Some things are inherited and others have to be earned."),
    ]
  ),
  L(
    "la-voz-que-hereda-el-viento",
    "b2r-tema-musica-generaciones",
    "Repaso temático: la música entre generaciones",
    "Tradición musical, reinvención y conflicto generacional — opiniones, concesiones y énfasis.",
    "7 min",
    [
      sec(
        "Dos visiones",
        [
          "Recuerda las reglas para opinar con matices. «No es que» niega una causa que otro podría suponer, y lo negado va en subjuntivo; la causa verdadera, introducida por «sino que» o «es que», va en indicativo, porque sí la afirmas: No es que no me guste, sino que ha perdido la esencia.",
          "«Por mucho que» + subjuntivo concede algo sin que cambie el resultado (por mucho que la modernice, sigue siendo una copla). Y las reacciones ante un hecho (lo que me molesta / me duele / me sorprende es que…) suelen llevar subjuntivo, porque valoras el hecho más que informar de él. Ojo con «aunque»: con indicativo presenta un hecho que sabes cierto; con subjuntivo, algo posible o que no te importa.",
        ],
        [
          ["No es que no me guste su versión, sino que ha perdido la esencia.", "It's not that I don't like her version, but that it's lost the essence. (lo negado: subjuntivo; lo real: indicativo)"],
          ["Por mucho que la modernice, sigue siendo una copla.", "However much she modernizes it, it's still a copla. (concesión: subjuntivo)"],
          ["Lo que me sorprende es que los niños se sepan la letra.", "What surprises me is that the kids know the lyrics. (reacción ante un hecho: subjuntivo)"],
        ],
        [
          fb("Completa.", "Lo que me duele es que no ___ las letras originales. (respetar, ella)", "respete", "Lo que me duele es que… expresa una reacción ante un hecho: subjuntivo (respete)."),
          { ...fb("Completa.", "Aunque la ___ con guitarra eléctrica, la emoción es la misma. (cantar, ella; hecho)", "canta", "La pista dice «hecho»: aunque + indicativo (canta) para algo que sabes cierto. Con subjuntivo (cante) lo presentarías como posible o irrelevante."), altAnswers: ["cante"] },
        ]
      ),
    ],
    [
      fb("Completa.", "Mi madre quería que ___ las canciones tal como ella las cantaba. (interpretar, yo)", "interpretara", "Querer en pasado con otro sujeto → que + imperfecto de subjuntivo: interpretara."),
      fb("Completa.", "Si la tradición no ___, moriría. (evolucionar)", "evolucionara", "Hipótesis sobre el presente: si + imperfecto de subjuntivo (evolucionara) y condicional en la consecuencia (moriría)."),
      { ...fb("Completa.", "Fue su hija ___ llevó la copla a los jóvenes.", "quien", "En las oraciones hendidas de persona se usa «quien» (o «la que»): «Fue su hija quien…»."), altAnswers: ["la que"] },
      mt(
        "Relaciona cada término con su significado.",
        [
          ["la letra", "lyrics"],
          ["la versión", "cover / version"],
          ["el repertorio", "repertoire"],
          ["el compás", "rhythm / beat"],
        ],
        "Vocabulario musical: la letra son las palabras de una canción; la versión, la interpretación nueva de una canción ya existente."
      ),
      mc(
        "«It's not that I'm against change; it's that I'm afraid of losing the tradition.»",
        ["No es que esté en contra del cambio; es que tengo miedo de perder la tradición.", "No es que estoy en contra del cambio; es que tenga miedo de perder la tradición.", "No es que estuviera en contra; es que tendría miedo ayer.", "No es estar en contra, que tengo miedo perder la tradición."],
        0,
        "«No es que» + subjuntivo niega una causa y «es que» + indicativo da la real: «no esté… tengo». En «estoy… tenga» los modos están al revés."
      ),
      toEs("Every generation makes the songs its own.", "Cada generación hace suyas las canciones.", "Hacer suyo/a = to make one's own.", ["Cada generación se apropia de las canciones.", "Cada generación hace suyas las canciones a su manera."]),
      wo("La canción suena distinta, pero sigue emocionando como el primer día.", "Seguir + gerundio expresa que algo continúa: sigue emocionando = todavía emociona.", "The song sounds different, but it's still as moving as on the first day."),
    ]
  ),
  L(
    "el-farero-de-punta-fria",
    "b2r-tema-automatizacion",
    "Repaso temático: cuando una máquina ocupa tu puesto",
    "Automatización, oficios en extinción y reinvención — hipótesis, arrepentimientos y verbos de cambio.",
    "7 min",
    [
      sec(
        "Un oficio automatizado",
        [
          "Recuerda las reglas que se repiten al hablar de la automatización. Para un cambio que deja a alguien sin algo, el español usa quedarse sin (se quedó sin trabajo) o quedarse + adjetivo (se ha quedado obsoleto): es el resultado final del cambio, no una pasiva de «leave».",
          "La acción de la máquina o la empresa se cuenta con la pasiva: se automatizó el faro / el faro fue automatizado (ser + participio concordado). Y para lamentar el pasado o imaginar otro presente: si + pluscuamperfecto de subjuntivo (si no hubieran instalado…), con condicional simple si el efecto llega a hoy (él seguiría allí) o compuesto si se quedó en el pasado (no habría perdido el trabajo).",
        ],
        [
          ["El faro se automatizó y el farero se quedó sin trabajo.", "The lighthouse was automated and the keeper was left without work. (pasiva refleja + quedarse sin)"],
          ["Si no hubieran instalado el sistema, él seguiría allí.", "If they hadn't installed the system, he'd still be there. (condición pasada, efecto presente)"],
          ["Al perder el empleo, su vecina se hizo fotógrafa.", "When she lost her job, his neighbour became a photographer. (hacerse + profesión: cambio voluntario)"],
        ],
        [
          fb("Completa.", "Muchos empleos ___ sustituidos por máquinas en los próximos años. (ser, futuro)", "serán", "Pasiva con ser en futuro: serán + participio, que concuerda con empleos (sustituidos)."),
          fb("Completa.", "Es triste que un oficio tan antiguo ___. (desaparecer)", "desaparezca", "Una valoración (es triste que) exige subjuntivo: desaparezca, con -zc- como conozca."),
        ]
      ),
    ],
    [
      fb("Completa.", "Tras el cierre, el farero ___ guía turístico. (hacerse, pretérito)", "se hizo", "Una profesión nueva elegida por uno mismo → hacerse (se hizo); convertirse en exigiría la preposición."),
      fb("Completa.", "Nadie le preguntó qué ___ hacer después. (querer, él; imperfecto)", "quería", "Pregunta indirecta con el introductor en pasado: qué (con tilde) + imperfecto, quería."),
      fb("Completa.", "Si las máquinas ___ todo, ¿qué haríamos los humanos? (hacer)", "hicieran", "Hipótesis sobre el presente: si + imperfecto de subjuntivo (hicieran) y condicional en la consecuencia (haríamos)."),
      mt(
        "Relaciona cada palabra con su significado.",
        [
          ["automatizar", "to automate"],
          ["sustituir", "to replace"],
          ["reinventarse", "to reinvent oneself"],
          ["quedarse obsoleto", "to become obsolete"],
        ],
        "Vocabulario del cambio laboral: reinventarse es pronominal porque uno se cambia a sí mismo."
      ),
      ms(
        "¿Qué frases son correctas?",
        ["Su puesto se ha quedado obsoleto.", "Ojalá hubiera sabido que esto pasaría.", "Lo que más echa de menos es el silencio del faro.", "El faro está automatizado por la empresa ayer."],
        [0, 1, 2],
        "Una acción concreta con agente y fecha se expresa con la pasiva de «ser»: «fue automatizado por la empresa ayer». «Está automatizado… ayer» mezcla estado con acción puntual."
      ),
      toEs("Machines can do the work, but they can't tell the stories.", "Las máquinas pueden hacer el trabajo, pero no pueden contar las historias.", "«Pero» contrasta dos ideas: lo que pueden hacer y lo que no pueden hacer.", ["Las máquinas pueden hacer el trabajo, pero no saben contar las historias."]),
      wo("Por mucho que avance la tecnología, algunas cosas no se pueden automatizar.", "Por mucho que + subjuntivo (avance): la concesión no cambia el resultado, aunque la tecnología avance de verdad.", "However far technology advances, some things can't be automated."),
    ]
  ),
  L(
    "el-ultimo-mural-de-la-fabrica",
    "b2r-tema-arte-efimero",
    "Repaso temático: el arte efímero",
    "Pintar algo que va a desaparecer — concesiones, finalidad y el valor de lo temporal.",
    "7 min",
    [
      sec(
        "Pintar para nada",
        [
          "Recuerda la regla: hablar de arte que va a desaparecer pide dos estructuras. Concesión con aunque: + indicativo si presentas un hecho que conoces (aunque estaba mal pagado), + subjuntivo si es una posibilidad o algo que no te importa (aunque lo derriben, aunque llueva). En ambos casos el obstáculo no cambia el resultado.",
          "Finalidad con para que: siempre subjuntivo cuando el sujeto cambia (yo pinto para que la gente recuerde). El tiempo sigue al verbo principal: presente → presente de subjuntivo (pinto para que recuerden), pasado → imperfecto de subjuntivo (pintaron para que recordaran). Lo mismo vale para antes de que.",
        ],
        [
          ["Aunque la nieve se derrita mañana, la escultura habrá existido.", "Even if the snow melts tomorrow, the sculpture will have existed. (aunque + subjuntivo: posibilidad)"],
          ["Grabaron la performance para que otros pudieran verla.", "They filmed the performance so that others could see it. (pasado → imperfecto de subjuntivo)"],
        ],
        [
          { ...fb("Completa.", "Quiero pintar algo que ___ a los trabajadores. (homenajear)", "homenajee", "El mural todavía no existe: una relativa sobre algo que se busca o se desea va en subjuntivo (algo que homenajee). Con un mural concreto ya pintado diríamos «que homenajea»."), altAnswers: ["rinda homenaje"] },
          fb("Completa.", "Aunque el mural ___ pronto, habrá valido la pena. (desaparecer)", "desaparezca", "La desaparición todavía no ha ocurrido y no cambia la conclusión (habrá valido la pena): aunque + presente de subjuntivo."),
        ]
      ),
    ],
    [
      fb("Completa.", "La fábrica ___ cerrada en 1998. (ser, pretérito)", "fue", "Pasiva con ser: la fábrica recibe la acción (alguien la cerró). Indefinido porque es un hecho terminado con fecha (1998); el participio concuerda: cerrada."),
      fb("Completa.", "Me encargaron que ___ la historia del barrio. (pintar, yo)", "pintara", "Encargar que es una petición, así que pide subjuntivo; como encargaron está en pasado, imperfecto de subjuntivo: pintara."),
      fb("Completa.", "Si el mural ___ en un museo, duraría siglos. (estar)", "estuviera", "El mural no está en un museo: hipótesis irreal en el presente, si + imperfecto de subjuntivo (estuviera) → condicional (duraría)."),
      mt(
        "Relaciona cada término con su significado.",
        [
          ["efímero", "ephemeral"],
          ["el encargo", "commission"],
          ["el boceto", "sketch"],
          ["derribar", "to tear down"],
        ],
        "Vocabulario del arte."
      ),
      mc(
        "«The fact that it disappears is what makes it valuable.»",
        ["El hecho de que desaparezca es lo que lo hace valioso.", "El hecho de que desaparecer es lo que lo hace valioso.", "El hecho que desaparecerá es quien lo hace valioso.", "El hecho de desaparezca es lo que lo hace valioso."],
        0,
        "«El hecho de que» + valoración suele ir con subjuntivo: «desaparezca». «Desaparecer» tras «de que» no es posible (falta un verbo conjugado); «quien» es solo para personas, y «el hecho de desaparezca» omite «que»."
      ),
      toEs("Many neighbors came to see it before it was demolished.", "Muchos vecinos vinieron a verlo antes de que lo derribaran.", "Antes de que siempre lleva subjuntivo, porque lo que viene después todavía no había ocurrido; con vinieron en pasado, imperfecto: derribaran.", ["Muchos vecinos fueron a verlo antes de que lo derribaran.", "Muchos vecinos vinieron a verlo antes de que lo demolieran."]),
      wo("Lo que queda de un mural no es la pared, sino el recuerdo.", "Lo que + no… sino.", "What remains of a mural isn't the wall but the memory."),
    ]
  ),
  L(
    "la-lonja-de-las-seis",
    "b2r-tema-pueblos-pesqueros",
    "Repaso temático: los pueblos que se vacían",
    "Pueblos pesqueros, despoblación y rituales que se pierden — imperfecto, verbos de cambio, deseos y relativos formales (cuyo, según el cual, lo cual).",
    "7 min",
    [
      sec(
        "Antes y ahora",
        [
          "Recuerda las reglas para contar cómo cambia un pueblo. Lo que era habitual antes se describe en imperfecto (antes la lonja se llenaba cada mañana) y contrasta con el presente (ahora apenas quedan barcos). Un hecho puntual que lo cambió todo va en indefinido (cuando cerró la lonja…).",
          "Cada cambio tiene su verbo: quedarse + adjetivo o quedarse sin para el resultado final (se ha quedado vacío, se quedó sin escuela), convertirse en + sustantivo para una transformación (se ha convertido en un destino turístico), volverse para un cambio de carácter (se ha vuelto tranquilo) y ponerse para un estado de ánimo pasajero (se puso triste).",
        ],
        [
          ["Antes la lonja se llenaba cada mañana; ahora apenas quedan cinco barcos.", "The fish market used to fill up every morning; now barely five boats are left. (costumbre → imperfecto)"],
          ["El pueblo se ha quedado casi vacío.", "The village has been left almost empty. (resultado → quedarse)"],
          ["La vieja fábrica se ha convertido en un hotel.", "The old factory has become a hotel. (transformación → convertirse en)"],
        ],
        [
          fb("Completa.", "Cuando era niño, el puerto ___ lleno de vida. (estar)", "estaba", "Descripción de cómo era algo en el pasado → imperfecto: estaba."),
          fb("Completa.", "Los jóvenes se van porque no hay nada que los ___. (retener)", "retenga", "Antecedente inexistente (no hay nada) → subjuntivo: retenga, irregular como tener."),
        ]
      ),
    ],
    [
      fb("Completa.", "Si hubiera más trabajo, los jóvenes no se ___. (ir)", "irían", "Hipótesis sobre el presente: si + imperfecto de subjuntivo (hubiera) → condicional (se irían)."),
      fb("Completa.", "El subastador lamentó que la tradición se ___ perdiendo. (estar)", "estuviera", "Lamentar en pasado → que + imperfecto de subjuntivo: estuviera (perdiendo)."),
      fb("Completa.", "El pueblo ___ en un destino de fin de semana. (convertirse, perfecto)", "se ha convertido", "Convertirse en + sustantivo para una transformación; pretérito perfecto porque llega hasta hoy."),
      mt(
        "Relaciona cada palabra con su significado.",
        [
          ["la lonja", "fish market / auction hall"],
          ["la despoblación", "depopulation"],
          ["la subasta", "auction"],
          ["el pescador", "fisherman"],
        ],
        "Vocabulario del mar."
      ),
      ms(
        "¿Qué frases son correctas?",
        ["Ya no queda nadie que sepa reparar redes.", "Ojalá volvieran los tiempos de antes.", "Hace veinte años había treinta barcos.", "El pueblo se ha puesto vacío."],
        [0, 1, 2],
        "Un resultado final se expresa con «quedarse»: «el pueblo se ha quedado vacío». «Se ha puesto vacío» es incorrecta, porque «ponerse» es para cambios pasajeros."
      ),
      toEs("When the old people die, nobody will remember these customs.", "Cuando mueran los mayores, nadie recordará estas costumbres.", "«Cuando» + acción futura exige subjuntivo: «cuando mueran».", ["Cuando se mueran los mayores, nadie recordará estas costumbres.", "Cuando los mayores mueran, nadie recordará estas costumbres."]),
      wo("Lo que antes era un ritual diario ahora es casi un recuerdo.", "Lo que + imperfecto + ahora.", "What used to be a daily ritual is now almost a memory."),
    ]
  ),
  L(
    "los-titiriteros-de-siempre",
    "b2r-tema-negocio-familiar",
    "Repaso temático: continuar el negocio familiar",
    "Heredar un oficio itinerante: expectativas, dudas y futuro — subjuntivo, condicionales, estilo indirecto y conectores para argumentar.",
    "7 min",
    [
      sec(
        "¿Seguir o dejarlo?",
        [
          "Recuerda las reglas que necesitas para hablar de esta decisión. Lo que otros esperan de ti va en subjuntivo, porque es un deseo ajeno, no un hecho: Mis padres esperan que siga. Tu duda, en cambio, va en indicativo tras «no sé si»: No sé si seré capaz (la duda ya está en «si»; el verbo no la repite).",
          "Para imaginar otra vida usa la condicional irreal: si + imperfecto de subjuntivo, y condicional en la consecuencia (Si lo dejara, sentiría…). Nunca condicional detrás de si: ✗ si lo dejaría.",
        ],
        [
          ["Mis padres esperan que siga con la compañía.", "My parents expect me to carry on with the company. (deseo de otros → subjuntivo)"],
          ["No sé si seré capaz de hacerlo como ellos.", "I don't know if I'll be able to do it like them. (no sé si → indicativo)"],
          ["Si lo dejara, sentiría que los traiciono.", "If I quit, I'd feel I was betraying them. (si + imperfecto de subjuntivo → condicional)"],
        ],
        [
          fb("Completa.", "No sé si mi hermana ___ quedarse con el taller. (querer, futuro)", "querrá", "Tras «no sé si» va indicativo, aquí futuro irregular: querrá. El subjuntivo (quiera) es el error típico."),
          fb("Completa.", "Mi abuelo quería que la compañía ___ viva siempre. (seguir)", "siguiera", "Querer en pasado + que + otro sujeto → imperfecto de subjuntivo: siguiera (e → i)."),
        ]
      ),
    ],
    [
      fb("Completa.", "Me dijeron que ___ libre de elegir. (ser, yo)", "era", "Estilo indirecto con verbo introductor en pasado: el presente «eres libre» pasa a imperfecto, era."),
      fb("Completa.", "Aunque me ___ otro trabajo, no lo aceptaría. (ofrecer, ellos)", "ofrecieran", "Aunque + imperfecto de subjuntivo presenta una hipótesis poco probable; por eso la consecuencia va en condicional (aceptaría)."),
      { ...fb("Completa.", "Fue mi madre ___ me enseñó a mover las marionetas.", "quien", "Para destacar a una persona con «fue… quien» se usa «quien» (o «la que»): «Fue mi madre quien…». «Que» solo no basta en esta estructura enfática."), altAnswers: ["la que"] },
      mt(
        "Relaciona cada palabra con su significado.",
        [
          ["el titiritero", "puppeteer"],
          ["la marioneta", "marionette"],
          ["itinerante", "traveling"],
          ["la función", "show / performance"],
        ],
        "Vocabulario del teatro de títeres: itinerante viene de itinerario, el que va de un sitio a otro."
      ),
      mc(
        "«Whatever I decide, I'll always be part of this family.»",
        ["Decida lo que decida, siempre seré parte de esta familia.", "Decido lo que decido, siempre seré parte de esta familia.", "Decidiré lo que decida, siempre soy parte.", "Lo que decidiera, siempre seré parte ayer."],
        0,
        "La estructura «decida lo que decida» (subjuntivo repetido) significa «no importa qué». «Decido lo que decido» usa indicativo y no expresa esa idea."
      ),
      toEs("If I hadn't grown up on the road, I wouldn't be who I am.", "Si no hubiera crecido en la carretera, no sería quien soy.", "Condicional mixta: condición pasada («si no hubiera crecido») con efecto presente («no sería»).", ["Si no me hubiera criado en la carretera, no sería quien soy.", "Si no hubiese crecido en la carretera, no sería quien soy."]),
      wo("Cada verano volvíamos a los mismos pueblos como si fuera la primera vez.", "Imperfecto para la costumbre (volvíamos) + como si + imperfecto de subjuntivo (fuera), porque compara con algo irreal.", "Every summer we returned to the same towns as if it were the first time."),
    ]
  ),
  L(
    "la-trashumancia-de-don-silvestre",
    "b2r-tema-tradiciones-rurales",
    "Repaso temático: tradiciones rurales",
    "La trashumancia, los caminos antiguos y el relevo generacional — subjuntivo de influencia y concesión, y relativos formales (cuyo, el cual).",
    "7 min",
    [
      sec(
        "Un camino antiguo",
        "Recuerda la regla: cuando alguien quiere, pide o considera importante que otra persona haga algo (querer que, pedir que, es importante que), el segundo verbo va en subjuntivo: es importante que se mantengan. ¿Por qué? Porque no describes un hecho, sino un deseo o una influencia sobre otro. Si el verbo principal está en pasado, el subjuntivo pasa a imperfecto: no quería que lo hiciera. Antes de que lleva siempre subjuntivo, porque la acción aún no ha pasado. Y aunque va en subjuntivo cuando presentas algo como posible (aunque cueste), pero en indicativo cuando es un hecho comprobado (aunque cuesta, lo hacemos cada año).",
        [
          ["Es importante que se mantengan las vías pecuarias.", "It's important that the old drove roads be maintained."],
          ["Aunque cueste, haremos el camino a pie como siempre.", "Even if it's hard, we'll walk the route as always."],
          ["El pastor nos pidió que cerráramos la cancela al pasar.", "The shepherd asked us to close the gate as we went through."],
        ],
        [
          { ...fb("Completa.", "Su padre no quería que ___ el camino sola. (hacer, ella)", "hiciera", "Querer que con otro sujeto pide subjuntivo; como quería está en pasado, va el imperfecto: hiciera, no «haga»."), altAnswers: ["hiciese"] },
          fb("Completa.", "Debemos documentarlo antes de que ___. (perderse)", "se pierda", "Antes de que siempre lleva subjuntivo (se pierda), porque la pérdida todavía no ha ocurrido."),
          { ...fb("Completa.", "Los vecinos exigieron que el ayuntamiento ___ el puente viejo. (arreglar)", "arreglara", "Exigir que es un verbo de influencia como querer o pedir; en pasado (exigieron) lleva imperfecto de subjuntivo: arreglara."), altAnswers: ["arreglase"] },
        ]
      ),
    ],
    [
      { ...fb("Completa.", "Si no hubiera insistido, su padre no la ___ llevado. (haber)", "habría", "Condicional de tipo 3 (algo que no pasó): si + pluscuamperfecto de subjuntivo, y en la otra parte condicional compuesto: habría llevado."), altAnswers: ["hubiera"] },
      fb("Completa.", "Es la última generación que ___ este oficio. (conocer)", "conoce", "La generación existe y está identificada (la última), así que la relativa va en indicativo: conoce. El subjuntivo sería para un antecedente desconocido."),
      { ...fb("Completa.", "Por muchos kilómetros que ___, no se quejaba. (caminar, ella)", "caminara", "Por mucho que + imperfecto de subjuntivo (pasado)."), altAnswers: ["caminaba", "caminase"] },
      mt(
        "Relaciona cada palabra con su significado.",
        [
          ["el rebaño", "flock"],
          ["el pastor", "shepherd"],
          ["la trashumancia", "seasonal livestock migration"],
          ["el pasto", "pasture"],
        ],
        "Vocabulario rural."
      ),
      ms(
        "¿Qué frases son correctas?",
        ["Fue su hija quien decidió continuar.", "No hay nadie en el pueblo que siga haciéndolo.", "Ojalá los jóvenes valoraran más estas costumbres.", "Ojalá que no se pierde esta tradición."],
        [0, 1, 2],
        "«Ojalá que no se pierde» es incorrecta: ojalá exige subjuntivo (ojalá que no se pierda)."
      ),
      toEs("She walked as if she had done it all her life.", "Caminaba como si lo hubiera hecho toda la vida.", "Como si + pluscuamperfecto de subjuntivo.", ["Caminaba como si lo hubiese hecho toda su vida.", "Caminaba como si lo hubiera hecho toda su vida."]),
      wo("Lo que su padre veía como una carga ella lo veía como un regalo.", "Con «lo que» al inicio, la segunda parte retoma el complemento con «lo»: «Lo que su padre veía… ella lo veía…».", "What her father saw as a burden she saw as a gift."),
    ]
  ),
  L(
    "los-azulejos-de-la-casa-azul",
    "b2r-tema-restauracion",
    "Repaso temático: restaurar el pasado",
    "Artesanía, encargos y el valor del trabajo bien hecho — pasiva, relativas con cuyo y condicionales.",
    "7 min",
    [
      sec(
        "Recuerda la regla",
        [
          "Hablar de una restauración junta cuatro estructuras. Pasiva con ser para el proceso (la casa fue construida en 1750) frente a estar + participio para el resultado (las ventanas estaban rotas). Cuyo concuerda con lo poseído, no con el poseedor (la iglesia, cuyo campanario…). Habría que + infinitivo para una necesidad impersonal. Y las condicionales: si + presente para lo posible, si + pluscuamperfecto de subjuntivo para lo que ya no tiene remedio.",
          "Por qué importa: ser cuenta lo que alguien hizo; estar describe cómo quedó. Y cuyo mira hacia delante, al sustantivo que lo sigue.",
        ],
        [
          ["La casa, cuyos azulejos datan del siglo XVIII, se está cayendo.", "The house, whose tiles date back to the 18th century, is falling apart. (cuyos → azulejos)"],
          ["Habría que restaurarla antes de que sea demasiado tarde.", "It would need to be restored before it's too late."],
          ["La puerta ya estaba pintada cuando llegamos.", "The door was already painted when we arrived. (resultado: estar)"],
        ],
        [
          fb("Completa.", "Los azulejos ___ pintados a mano uno por uno. (ser, pretérito)", "fueron", "Pasiva con ser: el proceso (alguien los pintó). Ser concuerda con azulejos (plural): fueron."),
          fb("Completa.", "Aceptó el encargo aunque le ___ muy poco. (pagar, ellos; hecho)", "pagaban", "Aunque + indicativo cuando el hablante presenta un hecho conocido: le pagaban poco y aun así aceptó."),
          mc(
            "Elige: «Es un convento ___ claustro tiene arcos góticos.»",
            ["cuyo", "cuya", "cuyos", "que su"],
            0,
            "Cuyo concuerda con lo poseído (claustro, masculino singular), no con convento. «Que su» es un error frecuente en el habla, pero no es correcto en la lengua cuidada."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "Si no la restauran, la fachada se ___. (derrumbar, futuro)", "derrumbará", "Condicional posible: si + presente en la condición, futuro en la consecuencia."),
      fb("Completa.", "Busca un aprendiz que ___ paciencia. (tener)", "tenga", "Antecedente desconocido (todavía no lo tiene): subjuntivo."),
      fb("Completa.", "Trabajaba con tanto cuidado como si la casa ___ suya. (ser)", "fuera", "Como si siempre va con imperfecto de subjuntivo cuando la comparación es irreal."),
      mt(
        "Relaciona cada palabra con su significado.",
        [
          ["el azulejo", "glazed tile"],
          ["el esmalte", "glaze"],
          ["el horno", "kiln"],
          ["la fachada", "facade"],
        ],
        "Vocabulario de cerámica y construcción: el azulejo se cubre de esmalte y se cuece en el horno."
      ),
      mc(
        "«It's the details that make the difference.»",
        ["Son los detalles los que marcan la diferencia.", "Es los detalles lo que marcan la diferencia.", "Son los detalles quienes marca la diferencia.", "Los detalles son que marcan la diferencia."],
        0,
        "En la hendida plural, «ser» y el relativo concuerdan con el elemento destacado: «Son los detalles los que marcan». «Es los detalles lo que» no concuerda, y «quienes» es solo para personas."
      ),
      toEs("If they had asked me earlier, I would have saved more tiles.", "Si me lo hubieran pedido antes, habría salvado más azulejos.", "Condición irreal en el pasado: «si me lo hubieran pedido» + «habría salvado».", ["Si me lo hubiesen pedido antes, habría salvado más azulejos."]),
      wo("No hay dinero que pague el tiempo que dedicó a esa casa.", "Antecedente inexistente → subjuntivo.", "No amount of money could pay for the time she devoted to that house."),
      toEs("Un arquitecto francés diseñó la estación.", "La estación fue diseñada por un arquitecto francés.", "En la pasiva con ser, el objeto pasa a sujeto y el participio concuerda con él (estación → diseñada); el agente va con por.", [], "Cambia a la pasiva con ser."),
      toEs("Los azulejos fueron restaurados en 2003.", "Se restauraron los azulejos en 2003.", "En la pasiva refleja (se + verbo) no se menciona agente y el verbo concuerda con el sujeto plural: se restauraron.", ["Los azulejos se restauraron en 2003.", "En 2003 se restauraron los azulejos."], "Pasa a la pasiva refleja."),
      toEs("El museo cerró en mayo. Sus salas necesitaban obras.", "El museo, cuyas salas necesitaban obras, cerró en mayo.", "Cuyas sustituye a «sus» y concuerda con salas (femenino plural), no con museo.", ["El museo cuyas salas necesitaban obras cerró en mayo."], "Une las dos frases con una forma de cuyo."),
      toEs("Si limpian la fachada, recuperará su color.", "Si hubieran limpiado la fachada, habría recuperado su color.", "Para lo que ya no tiene remedio: si + pluscuamperfecto de subjuntivo y condicional compuesto en la consecuencia.", ["Si hubiesen limpiado la fachada, habría recuperado su color."], "Cambia a una condición irreal del pasado."),
    ]
  ),
  L(
    "el-luthier-de-paracho",
    "b2r-tema-aprendiz",
    "Repaso temático: aprender de un maestro",
    "El aprendizaje de un oficio artesanal — consejos, órdenes indirectas y verbos de cambio.",
    "7 min",
    [
      sec(
        "El maestro enseña",
        [
          "Recuerda la regla: cuando cuentas lo que te aconsejaba o mandaba un maestro, decir, pedir, aconsejar o insistir en van seguidos de que + imperfecto de subjuntivo (me decía que tuviera paciencia), porque transmites una orden, no un hecho. Si «decir» solo informa, va con indicativo: me decía que la madera respiraba.",
          "Para contar cómo cambiaste por el camino, cada verbo de cambio tiene su trabajo: ponerse + adjetivo para un estado de ánimo pasajero (me ponía nervioso), hacerse o llegar a ser para una profesión o un logro (llegó a ser maestra), volverse para el carácter. Y enseñar a + infinitivo: me enseñó a afinar.",
        ],
        [
          ["Mi tío siempre me decía que escuchara la madera.", "My uncle always told me to listen to the wood. (consejo → subjuntivo)"],
          ["Me decía que la madera respiraba.", "He used to tell me that wood breathes. (información → indicativo)"],
          ["Al principio me ponía nervioso con cada corte.", "At first I'd get nervous with every cut. (ponerse: estado pasajero)"],
        ],
        [
          fb("Completa.", "Me enseñó ___ elegir la madera antes de cortarla.", "a", "«Enseñar» va con la preposición «a» + infinitivo: «enseñar a elegir»."),
          fb("Completa.", "Insistía en que ___ cada pieza a mano. (lijar, yo)", "lijara", "Insistir en que transmite una exigencia: que + imperfecto de subjuntivo (lijara), porque insistía está en pasado."),
        ]
      ),
    ],
    [
      fb("Completa.", "Con los años, ___ una verdadera maestra. (llegar a ser, pretérito)", "llegó a ser", "Llegar a ser expresa un logro gradual, conseguido con esfuerzo; pretérito porque el cambio está cerrado."),
      fb("Completa.", "Al principio, cada error me ___ de mal humor. (poner)", "ponía", "Poner de mal humor es un cambio de ánimo pasajero; imperfecto porque se repetía con cada error."),
      fb("Completa.", "Si no me hubiera aceptado como aprendiz, hoy no ___ guitarras. (hacer, yo)", "haría", "Condicional mixta: la condición es pasada (hubiera aceptado), pero el efecto llega a hoy, así que condicional simple: haría."),
      mt(
        "Relaciona cada palabra con su significado.",
        [
          ["el luthier", "instrument maker"],
          ["el mástil", "neck (of a guitar)"],
          ["el barniz", "varnish"],
          ["la caja de resonancia", "sound box"],
        ],
        "Vocabulario de lutería."
      ),
      ms(
        "¿Qué frases son correctas?",
        ["Me dijo que no forzara la madera.", "Fue él quien me enseñó todo lo que sé.", "No hay dos guitarras que suenen igual.", "Me pidió que tengo paciencia."],
        [0, 1, 2],
        "«Pedir que» en pasado exige imperfecto de subjuntivo: «me pidió que tuviera paciencia». «Que tengo paciencia» usa indicativo y es incorrecta."
      ),
      toEs("He taught me that every guitar has its own voice.", "Me enseñó que cada guitarra tiene su propia voz.", "Enseñar que + indicativo (verdad general).", ["Me enseñó que cada guitarra tenía su propia voz."]),
      wo("Por mucho que practiques, nunca dejarás de aprender.", "Por mucho que + subjuntivo (practiques): la concesión no cambia el resultado.", "However much you practice, you'll never stop learning."),
    ]
  ),
  L(
    "el-turron-de-los-marin",
    "b2r-tema-modernizar-empresa",
    "Repaso temático: modernizar el taller familiar",
    "Máquinas o manos, crecer o conservar — argumentación, condicionales y conectores.",
    "7 min",
    [
      sec(
        "Dos hermanos, dos visiones",
        [
          "Recuerda las piezas de una buena argumentación. Las propuestas y condiciones mueven el verbo al subjuntivo: propongo que, sugiero que, a menos que, siempre que (= con tal de que) + subjuntivo, porque hablan de algo que todavía no es un hecho. «Dado que», en cambio, presenta una causa conocida y lleva indicativo.",
          "Los conectores ordenan el razonamiento: sin embargo (contraste), por consiguiente / por lo tanto (consecuencia), asimismo (adición), dado que (causa). Y las hipótesis van con si + imperfecto de subjuntivo → condicional: si compráramos, produciríamos.",
        ],
        [
          ["Si compráramos máquinas, produciríamos el triple.", "If we bought machines, we'd produce three times as much. (hipótesis)"],
          ["Sin embargo, el turrón dejaría de ser artesanal.", "However, the nougat would stop being handmade. (contraste)"],
          ["Propongo que mantengamos la receta, siempre que la calidad no baje.", "I propose we keep the recipe, as long as quality doesn't drop. (propuesta y condición → subjuntivo)"],
        ],
        [
          fb("Completa.", "Propongo que ___ solo una parte de la producción. (automatizar, nosotros)", "automaticemos", "Proponer que + presente de subjuntivo; la z de automatizar pasa a c delante de e: automaticemos."),
          fb("Completa.", "Papá nunca habría permitido que ___ la receta. (cambiar, nosotros)", "cambiáramos", "Un verbo de permiso en condicional compuesto (habría permitido) pide imperfecto de subjuntivo: cambiáramos."),
        ]
      ),
    ],
    [
      fb("Completa.", "A menos que ___ la producción, no podremos competir. (aumentar, nosotros)", "aumentemos", "A menos que introduce la única condición que evitaría el resultado: siempre lleva subjuntivo (aumentemos)."),
      fb("Completa.", "El obrador ___ fundado por nuestro bisabuelo en 1920. (ser, pretérito)", "fue", "Pasiva de un hecho puntual del pasado: fue + participio; el agente va con por."),
      fb("Completa.", "___ que más valoran los clientes es el sabor de siempre.", "Lo", "Para destacar una cosa se usa «lo que»: «Lo que más valoran es…»."),
      mt(
        "Relaciona cada conector con su función.",
        [
          ["por consiguiente", "consecuencia"],
          ["sin embargo", "contraste"],
          ["dado que", "causa"],
          ["asimismo", "adición"],
        ],
        "Conectores de argumentación: cada uno anuncia qué relación tiene la idea siguiente con la anterior."
      ),
      ms(
        "¿Qué argumentos están bien construidos?",
        ["Dado que la demanda ha crecido, necesitamos producir más.", "Aunque ganemos más, perderemos nuestra identidad.", "Si modernizáramos, podríamos exportar.", "Por lo tanto que es caro, no lo hacemos."],
        [0, 1, 2],
        "«Por lo tanto» introduce una consecuencia y nunca va con «que». Para dar una causa se diría «como es caro, no lo hacemos»."
      ),
      toEs("We can grow as long as we keep the original recipe.", "Podemos crecer siempre que mantengamos la receta original.", "«Siempre que» + subjuntivo significa «con tal de que»: «siempre que mantengamos».", ["Podemos crecer con tal de que mantengamos la receta original."]),
      wo("No se trata de elegir entre tradición y futuro, sino de unirlos.", "No se trata de… sino de…: sino corrige la idea negada; el pronombre los se une al infinitivo (unirlos).", "It's not about choosing between tradition and the future, but about joining them."),
    ]
  ),
  L(
    "el-molino-que-no-calla",
    "b2r-tema-desarrollo-vs-patrimonio",
    "Repaso temático: progreso o conservación",
    "Un molino, un complejo turístico y una comunidad dividida — argumentación y subjuntivo de valoración.",
    "7 min",
    [
      sec(
        "Los dos bandos",
        [
          "Recuerda la diferencia entre valorar y afirmar. Las expresiones de valoración (es lógico que, es normal que, es una vergüenza que, me parece justo que) llevan subjuntivo aunque hablen de un hecho real: lo que cuenta es tu juicio, no la información. En cambio, las que afirman que algo es verdad (es cierto que, es evidente que, si bien es cierto que) llevan indicativo.",
          "Por eso «si bien es cierto que» sirve para conceder: reconoces un hecho (indicativo) antes de dar tu argumento contrario. Y para poner condiciones al proyecto, siempre que / con tal de que + subjuntivo.",
        ],
        [
          ["Es lógico que el pueblo quiera más empleo.", "It's logical that the town wants more jobs. (valoración → subjuntivo)"],
          ["Es cierto que el pueblo necesita empleo.", "It's true that the town needs jobs. (afirmación → indicativo)"],
          ["Si bien es cierto que el hotel traería dinero, destruiría el paisaje.", "While the hotel would bring money, it would destroy the landscape. (concesión)"],
        ],
        [
          fb("Completa.", "Es una vergüenza que se ___ un molino del siglo XVI. (demoler)", "demuela", "Valoración (es una vergüenza que) → subjuntivo; demoler cambia o → ue: demuela."),
          fb("Completa.", "Es evidente que la carretera ___ el tráfico. (aumentar, futuro)", "aumentará", "«Es evidente que» afirma algo como verdadero: indicativo, aquí futuro (aumentará). Con una valoración (es triste que) iría en subjuntivo."),
        ]
      ),
    ],
    [
      fb("Completa.", "La constructora prometió que ___ doscientos puestos de trabajo. (crear, condicional)", "crearía", "Estilo indirecto: el futuro de la promesa («crearemos») pasa a condicional, crearía."),
      fb("Completa.", "No aceptaremos ningún proyecto que ___ el molino. (destruir)", "destruya", "Antecedente negado o indeterminado (ningún proyecto) → subjuntivo: destruya, con y."),
      fb("Completa.", "Si el molino desapareciera, el pueblo ___ su símbolo. (perder)", "perdería", "Hipótesis: si + imperfecto de subjuntivo (desapareciera) → condicional (perdería)."),
      mt(
        "Relaciona cada argumento con la idea que defiende.",
        [
          ["Traerá empleo y turismo.", "beneficio económico"],
          ["Destruirá el paisaje y la memoria.", "daño irreparable"],
          ["Los jóvenes podrán quedarse en el pueblo.", "freno a la despoblación"],
          ["El molino es patrimonio de todos.", "valor cultural compartido"],
        ],
        "Argumentos del debate: dos defienden el proyecto (empleo, despoblación) y dos lo rechazan (paisaje, patrimonio)."
      ),
      mc(
        "«Even if they offered us millions, we wouldn't sell.»",
        ["Aunque nos ofrecieran millones, no venderíamos.", "Aunque nos ofrecen millones, no venderíamos ayer.", "Aunque nos ofrecerían millones, no vendemos.", "Aunque nos ofrezcan millones, no vendimos."],
        0,
        "«Aunque» + imperfecto de subjuntivo presenta una hipótesis poco probable («ofrecieran») y la consecuencia va en condicional («no venderíamos»). «Ofrecerían» no se usa tras «aunque» con este valor."
      ),
      toEs("It was the grandfather who started the campaign.", "Fue el abuelo quien empezó la campaña.", "En las oraciones hendidas de persona se usa «quien» (o «el que»): «Fue el abuelo quien…».", ["Fue el abuelo el que empezó la campaña.", "Fue el abuelo quien inició la campaña."]),
      wo("Lo que no se protege hoy mañana ya no existirá.", "«Lo que no se protege hoy» funciona como sujeto de la frase; el verbo principal va después.", "What isn't protected today won't exist tomorrow."),
    ]
  ),
  L(
    "el-acero-de-los-bermudez",
    "b2r-tema-volver-a-casa",
    "Repaso temático: volver al taller del padre",
    "Huir, regresar y reconciliarse — pasados, arrepentimientos y estilo indirecto.",
    "7 min",
    [
      sec(
        "La vuelta",
        [
          "Recuerda la regla: contar un regreso obliga a ordenar tres capas del pasado. El indefinido cuenta lo que pasó en el relato (volvió, abrió); el pluscuamperfecto (había + participio) marca lo que ya había ocurrido antes de ese momento (ya se había casado); y el tipo 3 (si + hubiera + participio, habría + participio) imagina lo que pudo ser y no fue.",
          "¿Por qué no basta el indefinido? «Cuando llegó, el tren salió» significa que salió después de que llegara; «ya había salido» dice que salió antes. Y en estilo indirecto, lo que alguien contó del pasado retrocede al pluscuamperfecto (dijo que había guardado…), mientras que las peticiones van con imperfecto de subjuntivo (le pidió que se quedara).",
        ],
        [
          ["Cuando entró en la cocina, alguien ya había preparado café.", "When she went into the kitchen, someone had already made coffee. (antes del momento del relato)"],
          ["Si no se hubieran peleado, no habrían estado diez años sin hablarse.", "If they hadn't fallen out, they wouldn't have gone ten years without speaking. (tipo 3)"],
        ],
        [
          fb("Completa.", "Se fue a la ciudad porque no quería que su padre le ___ la vida. (decidir)", "decidiera", "No quería que expresa voluntad sobre otra persona, así que pide subjuntivo; como quería está en pasado, imperfecto de subjuntivo: decidiera (no decida ni decidía)."),
          fb("Completa.", "Llevaba diez años ___ pisar su pueblo.", "sin", "Llevar + tiempo + sin + infinitivo = hadn't done something for (time)."),
        ]
      ),
    ],
    [
      fb("Completa.", "Su padre le confesó que siempre ___ que volviera. (esperar, pluscuamperfecto)", "había esperado", "La espera es anterior a la confesión (confesó), así que en estilo indirecto va en pluscuamperfecto de indicativo: había esperado. Confesar informa, por eso no lleva subjuntivo."),
      fb("Completa.", "Ojalá ___ hablado antes. (haber, nosotros)", "hubiéramos", "Lamento sobre algo que ya no tiene remedio: ojalá + pluscuamperfecto de subjuntivo (hubiéramos hablado). «Habíamos» es indicativo, que nunca va tras ojalá."),
      fb("Completa.", "Tras el accidente, su padre ___ sin fuerza en las manos. (quedarse, pretérito)", "se quedó", "Quedarse + adjetivo o sin + sustantivo expresa el estado en que alguien queda tras un hecho (el accidente); indefinido porque es un cambio puntual."),
      mc(
        "«It's not that I didn't love you; it's that I needed to leave.»",
        ["No es que no te quisiera; es que necesitaba irme.", "No es que no te quería; es que necesitara irme.", "No era que no te quiero; es que necesité irme mañana.", "No es no te quisiera, necesitaba irme."],
        0,
        "«No es que» + imperfecto de subjuntivo niega una causa en pasado («no te quisiera») y «es que» + indicativo da la verdadera («necesitaba»). En «no te quería… necesitara» los modos están al revés."
      ),
      ms(
        "¿Qué frases son correctas?",
        ["Le pidió que se quedara unos días.", "Nunca se había sentido tan en casa.", "Fue en el taller donde se reconciliaron.", "Si hubiera sabido, había vuelto antes."],
        [0, 1, 2],
        "En la condicional irreal de pasado, la consecuencia va en condicional perfecto: «si hubiera sabido, habría vuelto antes». «Había vuelto» (pluscuamperfecto de indicativo) es incorrecta."
      ),
      toEs("He realized that he had missed his father more than he thought.", "Se dio cuenta de que había echado de menos a su padre más de lo que pensaba.", "Echar de menos ocurrió antes de darse cuenta, así que va en pluscuamperfecto (había echado de menos). Ante un verbo, la comparación es más de lo que, no más que.", ["Se dio cuenta de que había extrañado a su padre más de lo que creía."]),
      wo("A veces hay que irse lejos para entender de dónde vienes.", "Hay que + infinitivo + para + infinitivo.", "Sometimes you have to go far away to understand where you come from."),
    ]
  ),
  L(
    "el-cantero-de-la-torre",
    "b2r-tema-mentores",
    "Repaso temático: un mentor inesperado",
    "Un maestro mayor y un joven con problemas — expectativas, cambios y segundas oportunidades.",
    "7 min",
    [
      sec(
        "Segundas oportunidades",
        [
          "Recuerda la regla: para contar cómo cambia una persona, el verbo dice qué clase de cambio es. Ponerse = reacción pasajera (se ponía agresivo). Volverse = cambio de carácter duradero (se volvió paciente). Convertirse en + sustantivo = pasar a ser otra cosa (se convirtió en un buen artesano). Llegar a ser = meta alcanzada con tiempo. Dejar de + infinitivo = algo que se interrumpe (dejó de faltar a clase).",
          "Y las expectativas de los demás: con verbos de influencia o duda en pasado (ordenó que, nadie creía que) la subordinada va en imperfecto de subjuntivo; con gracias a que va en indicativo, porque es una causa real.",
        ],
        [
          ["Al principio el chico se ponía agresivo por cualquier cosa.", "At first the boy got aggressive over anything. (pasajero: ponerse)"],
          ["Con el tiempo, se volvió más paciente y responsable.", "Over time, he became more patient and responsible. (carácter: volverse)"],
          ["Dejó de meterse en peleas.", "He stopped getting into fights. (dejar de + infinitivo)"],
        ],
        [
          fb("Completa.", "El juez ordenó que ___ cien horas de trabajo comunitario. (cumplir, él)", "cumpliera", "Ordenar en pasado + otro sujeto → imperfecto de subjuntivo: cumpliera."),
          fb("Completa.", "Nadie creía que ___ a cambiar. (ir, él)", "fuera", "Nadie creía que (duda negada en pasado) + imperfecto de subjuntivo."),
          mc(
            "Elige: «Aquella niña tímida ___ una gran actriz.»",
            ["se convirtió en", "se puso", "se volvió en", "dejó de"],
            0,
            "Ante un sustantivo (una gran actriz) se usa convertirse en (o llegar a ser). Ponerse va con adjetivos pasajeros, «volverse en» no existe y dejar de necesita un infinitivo."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "Gracias a que el cantero ___ en él, el chico cambió. (confiar, pretérito)", "confió", "Gracias a que + indicativo (causa real)."),
      fb("Completa.", "Si no lo hubieran enviado allí, quizá ___ en la cárcel. (acabar, condicional perfecto)", "habría acabado", "Irreal del pasado: si + pluscuamperfecto de subjuntivo, condicional compuesto."),
      fb("Completa.", "Lo que el chico necesitaba no era castigo, ___ alguien que creyera en él.", "sino", "Tras una negación, para dar la alternativa correcta se usa «sino», no «pero»."),
      mt(
        "Relaciona cada palabra con su significado.",
        [
          ["el cantero", "stonemason"],
          ["el cincel", "chisel"],
          ["la cantera", "quarry"],
          ["el trabajo comunitario", "community service"],
        ],
        "Vocabulario del oficio: el cantero saca la piedra de la cantera y la trabaja con el cincel."
      ),
      ms(
        "¿Qué frases son correctas?",
        ["Le enseñó a trabajar la piedra con paciencia.", "El chico llegó a ser un buen artesano.", "Es importante que los jóvenes tengan referentes.", "Se hizo más paciente de repente en un segundo."],
        [0, 1, 2],
        "Un cambio gradual de carácter no ocurre «en un segundo»; además, lo natural sería volverse."
      ),
      toEs("He treated him as if he were his own grandson.", "Lo trataba como si fuera su propio nieto.", "Como si + imperfecto de subjuntivo.", ["Le trataba como si fuera su propio nieto.", "Lo trataba como si fuese su propio nieto."]),
      wo("Fue la piedra la que le enseñó a tener paciencia.", "Frase hendida.", "It was the stone that taught him to be patient."),
      toEs("Con los años se volvió responsable.", "Con los años se convirtió en un adulto responsable.", "Con un adjetivo solo, volverse; con un sustantivo (un adulto responsable), convertirse en.", ["Con los años llegó a ser un adulto responsable."], "Cambia «responsable» por «un adulto responsable» y adapta el verbo."),
      toEs("Ya no falta a clase.", "Ha dejado de faltar a clase.", "Dejar de + infinitivo expresa que una costumbre se interrumpe; equivale a «ya no».", ["Dejó de faltar a clase.", "Ya ha dejado de faltar a clase."], "Transforma la frase con «dejar de»."),
      toEs("La entrenadora le pide que no abandone.", "La entrenadora le pidió que no abandonara.", "Si el verbo de influencia pasa al pasado (pidió), la subordinada pasa a imperfecto de subjuntivo.", ["La entrenadora le pidió que no abandonase.", "La entrenadora le pedía que no abandonara."], "Cambia el verbo principal al pretérito."),
    ]
  ),
  L(
    "la-voz-que-quedo",
    "b2r-tema-duelo-tecnologia",
    "Repaso temático: el duelo en la era digital",
    "Voces grabadas, recuerdos y despedidas — deseos imposibles, como si y reflexiones.",
    "7 min",
    [
      sec(
        "Hablar con una voz",
        [
          "Recuerda la regla: con ojalá, el tiempo del subjuntivo dice si el deseo es posible. Presente de subjuntivo → todavía puede ocurrir (ojalá venga mañana). Imperfecto de subjuntivo → imposible o muy improbable ahora (ojalá estuviera aquí). Pluscuamperfecto → un pasado que ya no se puede cambiar (ojalá le hubiera dicho la verdad).",
          "Como si compara con algo irreal, por eso solo admite imperfecto de subjuntivo (algo simultáneo: como si estuviera vivo) o pluscuamperfecto (algo anterior: como si no hubiera pasado nada); nunca presente ni indicativo. Y tras una negación, la idea que sustituye a la negada va con sino, no con pero: no es la voz, sino la persona.",
        ],
        [
          ["Ojalá pudiera hablar con él una vez más.", "I wish I could talk to him one more time. (imposible ahora → imperfecto)"],
          ["Le hablaba al altavoz como si él estuviera allí.", "She talked to the speaker as if he were there. (como si + imperfecto)"],
          ["Ojalá nos veamos pronto.", "I hope we see each other soon. (posible → presente)"],
        ],
        [
          fb("Completa.", "Ojalá le ___ dicho cuánto lo quería. (haber, yo)", "hubiera", "Es un arrepentimiento sobre el pasado, que ya no se puede cambiar: ojalá + pluscuamperfecto de subjuntivo, hubiera dicho."),
          fb("Completa.", "La voz sonaba como si ___ vivo. (estar, él)", "estuviera", "Como si compara con algo irreal y simultáneo: imperfecto de subjuntivo, estuviera. Nunca «como si está»."),
        ]
      ),
    ],
    [
      fb("Completa.", "La psicóloga le aconsejó que ___ poco a poco. (despedirse, ella)", "se despidiera", "Aconsejar en pasado + otra persona → que + imperfecto de subjuntivo; el pronombre va delante: se despidiera."),
      fb("Completa.", "No es la voz lo que echa de menos, ___ la persona.", "sino", "Tras una negación, para dar la alternativa correcta se usa «sino», no «pero»."),
      fb("Completa.", "Si la tecnología no ___, quizá habría aceptado antes la pérdida. (existir, pluscuamperfecto de subjuntivo)", "hubiera existido", "Condición irreal en el pasado: si + pluscuamperfecto de subjuntivo, con la consecuencia en condicional perfecto (habría aceptado)."),
      mt(
        "Relaciona cada expresión con su significado.",
        [
          ["el duelo", "grief / mourning"],
          ["pasar página", "to turn the page"],
          ["aferrarse a", "to cling to"],
          ["despedirse", "to say goodbye"],
        ],
        "Vocabulario del duelo."
      ),
      mc(
        "«What she needed wasn't to hear his voice, but to say goodbye.»",
        ["Lo que necesitaba no era oír su voz, sino despedirse.", "Lo que necesitaba no era oír su voz, pero despedirse.", "El que necesitaba no era oír su voz, sino despedirse.", "Lo que necesitaba no fuera oír su voz, sino despedirse."],
        0,
        "Tras una negación, para corregir se usa «sino», no «pero»: «no era oír su voz, sino despedirse». Para destacar una idea se usa «lo que», no «el que», y «fuera» no tiene sentido en una afirmación real."
      ),
      toEs("It's normal that you (tú) want to hold on to his memory.", "Es normal que quieras aferrarte a su recuerdo.", "Las valoraciones como «es normal que» exigen subjuntivo: «quieras».", ["Es normal que quieras agarrarte a su recuerdo.", "Es normal que te quieras aferrar a su recuerdo."]),
      wo("Por mucho que la tecnología avance, no puede devolvernos a quienes hemos perdido.", "Por mucho que + subjuntivo para una concesión: avance.", "However much technology advances, it can't bring back those we've lost."),
    ]
  ),
  L(
    "el-rostro-reconocido",
    "b2r-tema-vigilancia",
    "Repaso temático: la vigilancia y la privacidad",
    "Reconocimiento facial, responsabilidad del ingeniero y derechos — hipótesis y argumentación ética.",
    "7 min",
    [
      sec(
        "La responsabilidad del creador",
        [
          "Recuerda las tres formas de hablar de responsabilidad. El reproche sobre el pasado usa debería + haber + participio (no debería haber firmado): debería solo hablaría del presente. La hipótesis irreal del pasado, si + pluscuamperfecto de subjuntivo → condicional compuesto (si hubiera sabido, no lo habría diseñado); nunca condicional detrás de si.",
          "Y la valoración ética (es inadmisible que, es necesario que) exige subjuntivo, porque juzgas el hecho en lugar de informar de él: es inadmisible que se vigile a ciudadanos.",
        ],
        [
          ["Si hubiera sabido cómo lo iban a usar, no lo habría diseñado.", "If I'd known how they would use it, I wouldn't have designed it. (hipótesis sobre el pasado)"],
          ["No deberían haber instalado cámaras sin avisar.", "They shouldn't have installed cameras without warning. (reproche: debería haber + participio)"],
          ["Es inadmisible que se vigile a ciudadanos sin orden judicial.", "It's unacceptable that citizens be monitored without a court order. (valoración → subjuntivo)"],
        ],
        [
          fb("Completa.", "Nunca debería ___ ese contrato. (firmar, yo; infinitivo compuesto)", "haber firmado", "Reproche sobre el pasado: debería + haber + participio (haber firmado)."),
          fb("Completa.", "La empresa le pidió que no ___ nada a la prensa. (decir, él)", "dijera", "Pedir en pasado → que + imperfecto de subjuntivo, irregular: dijera."),
        ]
      ),
    ],
    [
      fb("Completa.", "Si los datos ___ en malas manos, las consecuencias serían graves. (caer)", "cayeran", "Hipótesis: si + imperfecto de subjuntivo (cayeran) → condicional (serían)."),
      fb("Completa.", "Es necesario que ___ leyes más estrictas. (aprobarse)", "se aprueben", "Es necesario que + subjuntivo; la pasiva refleja concuerda con leyes: se aprueben (o → ue)."),
      fb("Completa.", "Las cámaras ___ instaladas sin informar a los vecinos. (ser, pretérito)", "fueron", "Pasiva de un hecho puntual: fueron + participio concordado con cámaras (instaladas)."),
      mt(
        "Relaciona cada término con su significado.",
        [
          ["el reconocimiento facial", "facial recognition"],
          ["la orden judicial", "court order"],
          ["el denunciante", "whistleblower"],
          ["los derechos civiles", "civil rights"],
        ],
        "Vocabulario de privacidad."
      ),
      ms(
        "¿Qué frases son correctas?",
        ["Lo que más le preocupaba era el uso político de la tecnología.", "No hay ningún sistema que sea infalible.", "Aunque lo prohibieran, seguiría existiendo.", "Si habría sabido, no lo habría hecho."],
        [0, 1, 2],
        "Tras «si» condicional nunca va «habría»: lo correcto es «Si hubiera sabido, no lo habría hecho». Las otras tres frases son correctas."
      ),
      toEs("Technology is not good or bad; it depends on who uses it.", "La tecnología no es buena ni mala; depende de quién la use.", "Tras «depender de quién» lo más habitual es el subjuntivo, porque la persona no está determinada: «la use»; el indicativo («la usa») también es correcto.", ["La tecnología no es buena ni mala; depende de quién la usa.", "La tecnología no es buena ni mala: depende de quién la use.", "La tecnología no es ni buena ni mala; depende de quién la utilice."]),
      wo("Fue en ese momento cuando decidió hacerlo público.", "Frase hendida temporal: para destacar un momento se usa ser + expresión de tiempo + cuando.", "It was at that moment that he decided to make it public."),
    ]
  ),
  L(
    "buenas-noches-elena",
    "b2r-tema-soledad-robots",
    "Repaso temático: la soledad y los robots de compañía",
    "Envejecer, la soledad y la tecnología que acompaña — deseos, hipótesis y reacciones.",
    "7 min",
    [
      sec(
        "Una compañía artificial",
        [
          "Recuerda cómo se reacciona ante algo nuevo. Valorar un hecho (me parece extraño que, me preocupa que, es normal que) pide subjuntivo, porque lo que importa es tu reacción, no informar. Dudar o negar (no creo que, dudo que) también: no afirmas lo que sigue.",
          "«Como si» compara con algo irreal, y por eso solo admite imperfecto o pluscuamperfecto de subjuntivo, nunca presente: lo trata como si fuera su nieto. Y «para que» con otro sujeto lleva subjuntivo, en imperfecto si la acción principal es pasada (le regalaron el robot para que no estuviera sola).",
        ],
        [
          ["Me parece extraño que una máquina te dé las buenas noches.", "It seems strange to me that a machine says good night to you. (valoración → subjuntivo)"],
          ["Al principio lo trataba como si fuera un electrodoméstico.", "At first she treated it as if it were an appliance. (como si + imperfecto de subjuntivo)"],
          ["Dudo que una máquina sienta algo.", "I doubt a machine feels anything. (duda → subjuntivo)"],
        ],
        [
          fb("Completa.", "No creo que un robot ___ sustituir a una persona. (poder)", "pueda", "No creer que niega lo que sigue: subjuntivo, pueda."),
          fb("Completa.", "Sus hijos le regalaron el robot para que no ___ tan sola. (estar, ella)", "estuviera", "Para que con otro sujeto + subjuntivo; como regalaron es pasado, imperfecto de subjuntivo: estuviera."),
        ]
      ),
    ],
    [
      fb("Completa.", "Con el tiempo, el robot ___ en parte de su rutina. (convertirse, pretérito)", "se convirtió", "Convertirse en + sustantivo para una transformación (en parte de su rutina); pretérito porque es un cambio cerrado."),
      fb("Completa.", "Si sus hijos la ___ más, quizá no necesitaría el robot. (visitar)", "visitaran", "Hipótesis sobre el presente: si + imperfecto de subjuntivo (visitaran) y condicional (necesitaría)."),
      fb("Completa.", "Le sorprendió que la máquina ___ su nombre. (recordar)", "recordara", "Reacción en pasado (le sorprendió) → que + imperfecto de subjuntivo: recordara."),
      mt(
        "Relaciona cada expresión con su significado.",
        [
          ["sentirse acompañado", "to feel accompanied"],
          ["la soledad no deseada", "unwanted loneliness"],
          ["la tercera edad", "old age / seniors"],
          ["el cuidador", "caregiver"],
        ],
        "Vocabulario de la vejez."
      ),
      mc(
        "«Whatever the robot says, it's not the same as a hug.»",
        ["Diga lo que diga el robot, no es lo mismo que un abrazo.", "Dice lo que dice el robot, no es lo mismo que un abrazo.", "Dijera lo que dijera el robot, no es igual ayer.", "Lo que diga el robot, no fuera lo mismo que un abrazo."],
        0,
        "«Diga lo que diga» (subjuntivo repetido) significa «no importa lo que diga». «Dice lo que dice» usa indicativo y no expresa esa idea."
      ),
      toEs("Loneliness has become one of the great problems of our time.", "La soledad se ha convertido en uno de los grandes problemas de nuestro tiempo.", "«Convertirse en» + sustantivo expresa una transformación: «se ha convertido en uno de…».", ["La soledad se ha convertido en uno de los grandes problemas de nuestra época."]),
      wo("Lo que ella echaba de menos no era hablar, sino que alguien la escuchara.", "Lo que + no… sino que: lo deseado y no real va en imperfecto de subjuntivo (escuchara).", "What she missed wasn't talking, but having someone listen to her."),
    ]
  ),
  L(
    "las-palabras-exactas",
    "b2r-tema-traducir-fielmente",
    "Repaso temático: traducir las palabras exactas",
    "Intérpretes, fidelidad y dilemas — el estilo indirecto al servicio de la ética profesional.",
    "7 min",
    [
      sec(
        "Transmitir lo que otro dice",
        [
          "Recuerda la regla: un intérprete transmite palabras ajenas, y al contarlo después cada cambio de tiempo importa, porque ser fiel es no cambiar el sentido. Con el verbo introductor en pasado: presente → imperfecto (tengo → tenía), pasado → pluscuamperfecto (me persiguieron → lo habían perseguido), futuro → condicional (volveré → volvería). También cambian las personas (me → lo) y las referencias de tiempo (mañana → al día siguiente, anoche → la noche anterior).",
          "El verbo introductor decide el modo: informar (dijo, explicó, declaró) → indicativo; pedir, suplicar u ordenar → que + imperfecto de subjuntivo; preguntar sí/no → si; preguntar con dónde, por qué… → la palabra interrogativa con tilde.",
        ],
        [
          ["El solicitante dijo que había huido porque temía por su vida.", "The applicant said he had fled because he feared for his life."],
          ["El juez le pidió que repitiera exactamente lo que había dicho.", "The judge asked her to repeat exactly what he had said. (petición → imperfecto de subjuntivo)"],
          ["Le preguntaron si volvería al día siguiente.", "They asked him if he would come back the next day. (sí/no → si; mañana → al día siguiente)"],
        ],
        [
          fb("Completa.", "«Tengo miedo» → Dijo que ___ miedo.", "tenía", "En estilo indirecto con «dijo», el presente «tengo» pasa a imperfecto: «tenía»."),
          fb("Completa.", "«No me devuelvan a mi país» → Suplicó que no lo ___ a su país.", "devolvieran", "Una súplica en estilo indirecto en pasado va en imperfecto de subjuntivo: «no lo devolvieran»."),
        ]
      ),
    ],
    [
      fb("Completa.", "Si hubiera suavizado sus palabras, ___ traicionado su confianza. (haber, ella)", "habría", "Hipótesis sobre el pasado: si + pluscuamperfecto de subjuntivo → condicional compuesto (habría traicionado)."),
      fb("Completa.", "Es fundamental que el intérprete no ___ su opinión. (añadir)", "añada", "Es fundamental que + subjuntivo, porque expresa una exigencia, no un hecho."),
      fb("Completa.", "Tradujo cada frase como si ___ la suya. (ser)", "fuera", "Como si compara con algo irreal: siempre imperfecto (o pluscuamperfecto) de subjuntivo, fuera."),
      mt(
        "Relaciona cada término con su significado.",
        [
          ["el intérprete", "interpreter"],
          ["el solicitante de asilo", "asylum seeker"],
          ["la fidelidad", "faithfulness"],
          ["el matiz", "nuance"],
        ],
        "Vocabulario de interpretación."
      ),
      ms(
        "¿Qué transformaciones al estilo indirecto son correctas?",
        ["«Me persiguieron» → Dijo que lo habían perseguido.", "«Ayúdenme» → Pidió que lo ayudaran.", "«Volveré» → Dijo que volvería.", "«¿Me creen?» → Preguntó que lo creían."],
        [0, 1, 2],
        "Una pregunta de sí o no se transmite con «si», no con «que»: «¿Me creen?» → «Preguntó si lo creían». Las otras tres transformaciones cambian bien tiempos y personas."
      ),
      toEs("A single word can change a person's destiny.", "Una sola palabra puede cambiar el destino de una persona.", "El presente sirve para verdades generales: «puede cambiar».", ["Una única palabra puede cambiar el destino de una persona."]),
      wo("Lo que está en juego no son palabras, sino vidas.", "Lo que + ser concuerda con el sustantivo plural (son palabras); sino corrige tras la negación.", "What's at stake isn't words but lives."),
    ]
  ),
  L(
    "detras-del-mostrador",
    "b2r-tema-dilemas-profesionales",
    "Repaso temático: dilemas detrás del mostrador",
    "Cuando el deber profesional choca con la sospecha — hipótesis, deber y argumentación.",
    "7 min",
    [
      sec(
        "¿Qué harías tú?",
        [
          "Recuerda la regla: un dilema se plantea como hipótesis, y la hipótesis tiene su pareja de tiempos. Presente imaginado: si + imperfecto de subjuntivo → condicional (si sospecharas, ¿la dispensarías?). Pasado que ya no se puede cambiar: si + pluscuamperfecto de subjuntivo → condicional compuesto. Para aconsejar: yo en tu lugar / yo que tú + condicional. Para reprochar: debería haber + participio.",
          "Las normas y las condiciones van en subjuntivo porque no describen hechos: es obligatorio que comunique, no diré nada hasta que me lo confirme.",
        ],
        [
          ["Si sospecharas que una receta es falsa, ¿la dispensarías?", "If you suspected a prescription was fake, would you fill it?"],
          ["Debería llamar al médico antes de decidir.", "I should call the doctor before deciding."],
          ["Deberías haberme avisado.", "You should have warned me. (reproche: debería haber + participio)"],
        ],
        [
          fb("Completa.", "Yo en su lugar, ___ al médico que la firmó. (llamar)", "llamaría", "En su lugar / yo que tú + condicional: imaginas lo que harías."),
          fb("Completa.", "Es obligatorio que el farmacéutico ___ cualquier irregularidad. (comunicar)", "comunique", "Es obligatorio que + subjuntivo: una norma, no un hecho."),
          mc(
            "Una compañera te cuenta: «Mi jefe quiere que firme un informe falso.» ¿Qué le aconsejas?",
            ["Yo en tu lugar no lo firmaría.", "Yo en tu lugar no lo firmaré.", "Yo en tu lugar no lo firmara.", "Yo en tu lugar no lo haya firmado."],
            0,
            "Para aconsejar desde una situación imaginada (yo en tu lugar) se usa el condicional: firmaría. El futuro es una decisión real, y firmara / haya firmado son formas de subjuntivo que no van solas aquí."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "Si se la hubiera dado, quizá ___ contribuido a una adicción. (haber, ella)", "habría", "Irreal del pasado: si + pluscuamperfecto de subjuntivo, condicional compuesto (habría contribuido)."),
      fb("Completa.", "No dispensaré nada hasta que el médico me lo ___. (confirmar)", "confirme", "Hasta que referido al futuro + subjuntivo."),
      fb("Completa.", "El cliente insistió en que se la ___ inmediatamente. (dar, ella)", "diera", "Insistir en que en pasado + otro sujeto → imperfecto de subjuntivo."),
      mt(
        "Relaciona cada término con su significado.",
        [
          ["la receta", "prescription"],
          ["dispensar", "to dispense"],
          ["el deber profesional", "professional duty"],
          ["la sospecha", "suspicion"],
        ],
        "Vocabulario de farmacia: el farmacéutico dispensa lo que indica la receta."
      ),
      mc(
        "«She acted as she thought was right, although it cost her a client.»",
        ["Actuó como creía que era correcto, aunque le costó un cliente.", "Actuó como creyera que fuera correcto, aunque le cueste un cliente.", "Actuó como creía que sea correcto, aunque le costara ayer.", "Actuó como cree que es correcto, aunque le costaría."],
        0,
        "Se cuentan hechos reales del pasado, así que todo va en indicativo: «creía», «era», «costó». Las versiones con «creyera», «sea» o «cueste» usan subjuntivo sin motivo."
      ),
      toEs("It's not easy to say no to someone who is suffering.", "No es fácil decirle que no a alguien que está sufriendo.", "No es fácil + infinitivo; relativa con indicativo (persona concreta).", ["No es fácil decir que no a alguien que sufre.", "No es fácil decirle que no a alguien que sufre."]),
      wo("Por mucho que insistiera, no pensaba cambiar de opinión.", "Por mucho que + imperfecto de subjuntivo.", "However much he insisted, she had no intention of changing her mind."),
      toEs("Si encuentras un error en la factura, ¿lo dirás?", "Si encontraras un error en la factura, ¿lo dirías?", "Para plantear un dilema imaginado: si + imperfecto de subjuntivo y condicional en la pregunta.", ["Si encontrases un error en la factura, ¿lo dirías?"], "Cambia a una hipótesis irreal del presente."),
      toEs("Deberías avisar a tu jefa.", "Deberías haber avisado a tu jefa.", "El reproche sobre algo que ya no se hizo es debería + haber + participio.", ["Tendrías que haber avisado a tu jefa."], "Cambia a un reproche sobre el pasado."),
      toEs("La empresa exige que guardemos el secreto.", "La empresa exigió que guardáramos el secreto.", "Con el verbo de influencia en pasado, la subordinada pasa a imperfecto de subjuntivo.", ["La empresa exigió que guardásemos el secreto.", "La empresa exigía que guardáramos el secreto."], "Cambia el verbo principal al pretérito."),
    ]
  ),
  L(
    "el-nombre-equivocado",
    "b2r-tema-integridad-periodistica",
    "Repaso temático: la integridad periodística",
    "Filtraciones, fuentes y consecuencias — estilo indirecto, pasiva y dilemas en condicional.",
    "7 min",
    [
      sec(
        "Publicar o no publicar",
        [
          "Recuerda las tres herramientas del periodismo. Para contar lo que alguien dijo, el estilo indirecto: con el verbo introductor en pasado, los tiempos retroceden (sé → sabía, he verificado → había verificado, publicaremos → publicarían). Para centrar la noticia en lo que pasó y no en quién lo hizo, la pasiva con ser: el dinero fue desviado, con el participio concordado con el sujeto.",
          "Para los dilemas, la condicional irreal: si + imperfecto de subjuntivo → condicional (si publicara, perjudicaría); si + pluscuamperfecto de subjuntivo → condicional compuesto para lo que ya no tiene remedio (si hubiera callado, se habría arrepentido). Detrás de si, nunca condicional.",
        ],
        [
          ["Según los documentos filtrados, el dinero había sido desviado.", "According to the leaked documents, the money had been diverted. (pasiva en pluscuamperfecto)"],
          ["El ministro aseguró que no sabía nada.", "The minister claimed he knew nothing. (estilo indirecto: sé → sabía)"],
          ["Si publicara la noticia, perjudicaría a alguien cercano.", "If she published the story, she'd harm someone close to her. (si + imperfecto de subjuntivo → condicional)"],
        ],
        [
          fb("Completa.", "Los documentos ___ enviados de forma anónima. (ser, pretérito)", "fueron", "Pasiva de un hecho puntual: ser en pretérito (fueron) + participio concordado con documentos (enviados)."),
          fb("Completa.", "La fuente le pidió que no ___ su nombre. (revelar, ella)", "revelara", "Pedir en pasado es un verbo de influencia: que + imperfecto de subjuntivo (revelara)."),
        ]
      ),
    ],
    [
      fb("Completa.", "Es imprescindible que se ___ los datos antes de publicar. (verificar)", "verifiquen", "Es imprescindible que + subjuntivo; la pasiva refleja concuerda con datos (se verifiquen), y la c pasa a qu delante de e."),
      fb("Completa.", "El director dijo que la noticia ___ en portada. (ir, condicional)", "iría", "Estilo indirecto: el futuro del mensaje («irá en portada») pasa a condicional, iría."),
      { ...fb("Completa.", "Aunque ___ a su propio hermano, publicó la verdad. (afectar; era un hecho)", "afectaba", "Aunque + indicativo cuando se trata de un hecho conocido: sabía que afectaba a su hermano y aun así publicó."), altAnswers: ["afectó"] },
      mt(
        "Relaciona cada término con su significado.",
        [
          ["la fuente", "source"],
          ["la filtración", "leak"],
          ["la exclusiva", "scoop"],
          ["desviar fondos", "to divert funds"],
        ],
        "Vocabulario periodístico: una filtración es información que sale sin permiso; una exclusiva, una noticia que solo publica un medio."
      ),
      ms(
        "¿Qué frases son correctas?",
        ["Fue la verdad lo que la obligó a publicarlo.", "Si hubiera callado, nunca se lo habría perdonado.", "Nadie esperaba que tuviera el valor de hacerlo.", "Según las fuentes, el dinero fuera desviado."],
        [0, 1, 2],
        "Tras «según» para informar se usa indicativo: «el dinero había sido desviado». «Fuera desviado» es subjuntivo y no corresponde aquí."
      ),
      toEs("Journalism exists so that citizens know the truth.", "El periodismo existe para que los ciudadanos conozcan la verdad.", "«Para que» con sujetos distintos exige subjuntivo: «conozcan».", ["El periodismo existe para que la ciudadanía conozca la verdad."]),
      wo("No es su trabajo proteger a nadie, sino informar con rigor.", "No… sino: tras una negación, sino introduce la alternativa correcta (aquí, con infinitivo).", "Her job isn't to protect anyone, but to report rigorously."),
    ]
  ),
  L(
    "la-firma-pendiente",
    "b2r-tema-denunciar",
    "Repaso temático: callar o denunciar",
    "Accidentes laborales, presiones y valentía — el subjuntivo de influencia y los arrepentimientos.",
    "7 min",
    [
      sec(
        "La presión",
        [
          "Recuerda la regla: los verbos de influencia (pedir, sugerir, prohibir, exigir, aconsejar, rogar) y los de emoción o temor (dar miedo, temer, sorprender) llevan que + subjuntivo cuando el sujeto cambia, porque expresan lo que alguien quiere o teme que ocurra, no un hecho. El tiempo del subjuntivo sigue al verbo principal: presente → presente de subjuntivo (le piden que firme); pasado → imperfecto de subjuntivo (le pidieron que firmara).",
          "Si el sujeto es el mismo, se usa el infinitivo: se arrepiente de no haber dicho nada (no «de que no dijera»).",
        ],
        [
          ["Su jefe le sugirió que firmara el informe sin hacer preguntas.", "Her boss suggested she sign the report without asking questions."],
          ["Sus compañeros le pedían que no complicara las cosas.", "Her coworkers asked her not to complicate things."],
        ],
        [
          fb("Completa.", "Le prohibieron que ___ con los inspectores. (hablar, ella)", "hablara", "Prohibir en pasado + que con otro sujeto → imperfecto de subjuntivo: hablara."),
          fb("Completa.", "Le daba miedo que la ___ si decía la verdad. (despedir, ellos)", "despidieran", "Dar miedo expresa temor: va con subjuntivo, y como daba está en pasado, imperfecto: despidieran."),
        ]
      ),
    ],
    [
      fb("Completa.", "Si hubiera firmado, ___ la conciencia intranquila para siempre. (tener, ella; ahora)", "tendría", "Hipótesis mixta: la condición es pasada (si hubiera firmado), pero la consecuencia es actual (ahora), así que va en condicional simple: tendría."),
      fb("Completa.", "Es inaceptable que la empresa ___ ocultar el accidente. (querer)", "quiera", "Una valoración (es inaceptable que) juzga el hecho en lugar de informar: subjuntivo, quiera."),
      fb("Completa.", "Al final, ___ la valentía de denunciarlo. (tener, ella, pretérito)", "tuvo", "Aquí no hay influencia ni valoración: es un hecho puntual y real del pasado, en indicativo (pretérito indefinido): tuvo."),
      mt(
        "Relaciona cada término con su significado.",
        [
          ["denunciar", "to report / blow the whistle"],
          ["el accidente laboral", "workplace accident"],
          ["encubrir", "to cover up"],
          ["las represalias", "reprisals"],
        ],
        "Vocabulario laboral."
      ),
      mc(
        "«If nobody speaks up, it will happen again.»",
        ["Si nadie habla, volverá a pasar.", "Si nadie hablara, volverá a pasar.", "Si nadie hablará, vuelve a pasar.", "Si nadie hable, volverá a pasar."],
        0,
        "Condición real o probable: «si» + presente («habla») y futuro en la consecuencia. «Si nadie hablara» es hipotética, y «hablará» o «hable» no se usan tras «si»."
      ),
      toEs("She would never have forgiven herself if she had kept quiet.", "Nunca se habría perdonado si se hubiera callado.", "Condición irreal en el pasado; la consecuencia puede ir primero: «nunca se habría perdonado si se hubiera callado».", ["Nunca se lo habría perdonado a sí misma si se hubiera callado.", "Nunca se hubiera perdonado si se hubiera callado."]),
      wo("Lo más difícil no fue hablar, sino soportar las consecuencias.", "No… sino contrapone lo negado y lo correcto: no fue hablar, sino soportar las consecuencias.", "The hardest part wasn't speaking up but bearing the consequences."),
    ]
  ),
  L(
    "cartas-para-despues",
    "b2r-tema-mensajes-despues",
    "Repaso temático: mensajes para después",
    "Cartas que se leerán en el futuro — cuando + subjuntivo, deseos y consejos a los que quedan.",
    "7 min",
    [
      sec(
        "Escribir para el futuro",
        [
          "Recuerda la regla: una carta para después habla de momentos que todavía no han llegado. Por eso cuando, en cuanto y hasta que van con presente de subjuntivo si se refieren al futuro (cuando leas esto), nunca con futuro (cuando leerás). La otra parte de la frase sí puede ir en futuro o en imperativo (abre, recuerda, no tengas miedo).",
          "Los deseos y consejos a otra persona también piden subjuntivo, porque no afirman hechos: espero que, quiero que, no dejes que, ojalá + presente de subjuntivo para lo posible. Si el deseo ya es imposible, ojalá pasa a pluscuamperfecto de subjuntivo (ojalá hubiera estado allí).",
        ],
        [
          ["Cuando abras este sobre, estarás en otra ciudad.", "When you open this envelope, you'll be in another city. (cuando + subjuntivo, futuro en la otra parte)"],
          ["Ojalá encuentres un trabajo que te guste.", "I hope you find a job you like. (deseo posible)"],
        ],
        [
          fb("Completa.", "Cuando ___ tu primer trabajo, recuerda lo orgullosa que estoy de ti. (conseguir, tú)", "consigas", "Conseguir el trabajo es un momento futuro, así que cuando va con presente de subjuntivo (consigas); «cuando conseguirás» es un error típico."),
          fb("Completa.", "Quiero que ___ que siempre te quise. (saber, tú)", "sepas", "Querer que con otro sujeto (yo quiero, tú sabes) pide subjuntivo: sepas."),
        ]
      ),
    ],
    [
      fb("Completa.", "Ojalá ___ estado ahí para verlo. (haber, yo)", "hubiera", "El momento ya pasó y no estuvo: deseo imposible sobre el pasado, ojalá + pluscuamperfecto de subjuntivo (hubiera estado). «Había» es indicativo, que no va tras ojalá."),
      fb("Completa.", "No dejes que nadie te ___ lo que puedes hacer. (decir)", "diga", "Dejar que expresa permiso sobre otra persona, así que va con subjuntivo: diga."),
      fb("Completa.", "Si tuviera más tiempo, te ___ cien cartas más. (escribir)", "escribiría", "Hipótesis irreal en el presente: si + imperfecto de subjuntivo (tuviera) → condicional (escribiría), no futuro."),
      mt(
        "Relaciona cada momento con el mensaje.",
        [
          ["Cuando te gradúes,", "celebra como si yo estuviera ahí."],
          ["Cuando te enamores,", "no tengas miedo."],
          ["Cuando estés triste,", "relee esta carta."],
          ["Cuando tengas hijos,", "cuéntales historias de mí."],
        ],
        "Cada momento futuro va con cuando + presente de subjuntivo (te gradúes, te enamores, estés, tengas) y el consejo va en imperativo."
      ),
      mc(
        "«Whatever happens, never stop laughing.»",
        ["Pase lo que pase, nunca dejes de reír.", "Pasa lo que pasa, nunca dejes de reír.", "Pase lo que pasara, nunca dejas de reír.", "Lo que pase, nunca deja de reír."],
        0,
        "«Pase lo que pase» significa «ocurra lo que ocurra», y el mandato negativo va en subjuntivo: «nunca dejes». «Pasa lo que pasa» usa indicativo y «nunca dejas» no es mandato."
      ),
      toEs("I want you to remember me smiling.", "Quiero que me recuerdes sonriendo.", "Querer que + subjuntivo + gerundio.", ["Quiero que me recuerdes sonriente."]),
      wo("Aunque no me veas, estaré en cada cosa que hagas.", "Aunque + subjuntivo; relativa con subjuntivo (futuro).", "Even if you can't see me, I'll be in everything you do."),
    ]
  ),
  L(
    "la-llave-que-no-abria-nada",
    "b2r-tema-casa-infancia",
    "Repaso temático: la casa de la infancia",
    "Volver al lugar donde creciste — imperfecto, pluscuamperfecto, relativas y nostalgia.",
    "7 min",
    [
      sec(
        "Todo había cambiado",
        [
          "Recuerda cómo se reparten el trabajo los tres pasados al contar un regreso. El indefinido cuenta lo que hiciste el día que volviste (llegué, abrí la puerta). El imperfecto describe cómo era todo y lo que hacías de niño (jugaba, estaba pintada). El pluscuamperfecto mira aún más atrás: lo que ya había cambiado antes de tu llegada (habían cortado el árbol).",
          "Las relativas con preposición necesitan artículo (la habitación en la que dormía, el árbol al que me subía), y «como si» + pluscuamperfecto de subjuntivo compara con un pasado irreal (como si nunca hubiera vivido allí).",
        ],
        [
          ["Cuando llegué, la casa estaba pintada de otro color.", "When I arrived, the house was painted a different color. (llegué: hecho; estaba: descripción)"],
          ["Habían cortado el árbol al que me subía de niño.", "They had cut down the tree I used to climb as a child. (pluscuamperfecto: antes de volver)"],
          ["Todo parecía pequeño, como si la casa hubiera encogido.", "Everything looked small, as if the house had shrunk. (como si + pluscuamperfecto de subjuntivo)"],
        ],
        [
          fb("Completa.", "Los nuevos dueños ___ la cocina por completo. (reformar, pluscuamperfecto)", "habían reformado", "La reforma ocurrió antes de que volvieras: pluscuamperfecto (habían reformado)."),
          fb("Completa.", "De niña, ___ las tardes en el desván. (pasar, yo)", "pasaba", "Costumbre de la infancia → imperfecto: pasaba. El indefinido (pasé) contaría una sola tarde."),
        ]
      ),
    ],
    [
      fb("Completa.", "La habitación en la ___ dormía era ahora un despacho.", "que", "Tras preposición + artículo se usa «que»: «en la que» (también «en la cual»)."),
      fb("Completa.", "Les pedí que me ___ entrar un momento. (dejar, ellos)", "dejaran", "Pedir en pasado → que + imperfecto de subjuntivo: dejaran."),
      fb("Completa.", "Si no hubiera vuelto, ___ el recuerdo intacto. (conservar, yo; ahora)", "conservaría", "Condicional mixta: condición pasada (no hubiera vuelto) con efecto en el presente («ahora»): condicional simple, conservaría."),
      fb("Completa.", "Era como si nunca ___ vivido allí. (haber, yo)", "hubiera", "Como si + pluscuamperfecto de subjuntivo compara con un pasado irreal: hubiera vivido."),
      mt(
        "Relaciona cada palabra con su significado.",
        [
          ["la nostalgia", "longing for the past"],
          ["el desván", "attic"],
          ["reformar", "to renovate"],
          ["el recuerdo", "memory (of something)"],
        ],
        "Vocabulario de la casa y la memoria."
      ),
      ms(
        "¿Qué frases son correctas?",
        ["Todo parecía más pequeño de lo que recordaba.", "Fue en ese pasillo donde aprendí a andar.", "No quedaba nada que me resultara familiar.", "La llave que guardaba no abrió ninguna puerta ya no."],
        [0, 1, 2],
        "La frase de la llave está mal: «no… ninguna… ya no» acumula negaciones y el tiempo no encaja. Lo correcto es «ya no abría ninguna puerta»."
      ),
      toEs("The key I had kept for thirty years didn't open anything.", "La llave que había guardado durante treinta años no abría nada.", "«Había guardado» es anterior a la acción pasada; «no abría» describe la situación en ese momento.", ["La llave que había guardado treinta años no abría nada."]),
      wo("Lo que buscaba no estaba en la casa, sino en mí.", "Lo que + imperfecto (buscaba) como sujeto; no… sino corrige el lugar.", "What I was looking for wasn't in the house but in me."),
    ]
  ),
  L(
    "grabaciones-para-marina",
    "b2r-tema-memoria",
    "Repaso temático: grabar la memoria",
    "Enfermedad, olvido y mensajes a uno mismo — futuro, subjuntivo temporal y consejos.",
    "7 min",
    [
      sec(
        "Mensajes al yo del futuro",
        "Recuerda la regla: cuando una conjunción de tiempo (cuando, en cuanto, antes de que, hasta que) habla de algo que todavía no ha pasado, lleva presente de subjuntivo, nunca futuro: cuando no te acuerdes, escucha esto. ¿Por qué? Porque ese momento aún no es real; el subjuntivo marca lo no vivido. La otra mitad suele ser una orden (imperativo) o un futuro. Lo mismo pasa con para que (finalidad, otro sujeto) y con aunque cuando presenta una posibilidad: aunque no me reconozcas, yo te reconoceré.",
        [
          ["Cuando no recuerdes quién eres, escucha esta grabación.", "When you don't remember who you are, listen to this recording."],
          ["Quiero que sepas que tu vida ha sido buena.", "I want you to know that your life has been good."],
          ["Hasta que llegue tu hermano, quédate en casa.", "Until your brother arrives, stay at home."],
        ],
        [
          fb("Completa.", "Cuando ___ miedo, recuerda que no estás sola. (tener, tú)", "tengas", "Cuando mira a un momento futuro, así que lleva subjuntivo (tengas); «tendrás» es imposible tras cuando."),
          fb("Completa.", "Te grabo esto para que no ___ quién eres. (olvidar, tú)", "olvides", "Para que con otro sujeto (yo grabo, tú olvidas) siempre lleva subjuntivo: olvides."),
          fb("Completa.", "En cuanto ___ la carta, guárdala en el cajón. (encontrar, tú)", "encuentres", "En cuanto con una orden mira al futuro: subjuntivo (encuentres), no «encontrarás» ni «encuentras»."),
        ]
      ),
    ],
    [
      fb("Completa.", "Aunque ___ mi nombre, seguiré siendo tu hija. (olvidar, tú)", "olvides", "Aunque presenta una posibilidad futura, no un hecho comprobado: subjuntivo (olvides). Con «olvidas» afirmarías que ya ocurre."),
      fb("Completa.", "El médico nos dijo que la enfermedad ___ lentamente. (avanzar, condicional)", "avanzaría", "Estilo indirecto: un futuro dicho en el pasado («avanzará») pasa a condicional (avanzaría) detrás de nos dijo."),
      fb("Completa.", "Ojalá ___ detener el tiempo. (poder, nosotros)", "pudiéramos", "Ojalá + imperfecto de subjuntivo (pudiéramos) para un deseo imposible; «podamos» sería un deseo realizable."),
      mt(
        "Relaciona cada frase con su significado.",
        [
          ["perder la memoria", "to lose one's memory"],
          ["el diagnóstico", "diagnosis"],
          ["olvidarse de", "to forget about"],
          ["reconocer a alguien", "to recognize someone"],
        ],
        "Vocabulario de la memoria."
      ),
      mc(
        "«Even if you don't recognize me, I'll recognize you.»",
        ["Aunque no me reconozcas, yo te reconoceré.", "Aunque no me reconoces, yo te reconocería.", "Aunque no me reconocieras, yo te reconozco ayer.", "Aunque no me reconocerás, te reconozco."],
        0,
        "«Aunque» + presente de subjuntivo presenta una posibilidad («no me reconozcas») y la consecuencia va en futuro («reconoceré»). «Reconoces», «reconocieras… ayer» y «reconocerás» no encajan."
      ),
      toEs("What matters is not remembering, but having lived.", "Lo que importa no es recordar, sino haber vivido.", "Lo que + no… sino + infinitivo compuesto.", ["Lo importante no es recordar, sino haber vivido."]),
      wo("Si algún día me olvido de todo, que alguien me cuente esta historia.", "Si + presente + que + subjuntivo (deseo).", "If one day I forget everything, may someone tell me this story."),
    ]
  ),
  L(
    "el-chico-del-otro-lado-de-la-pantalla",
    "b2r-tema-identidad-online",
    "Repaso temático: quién hay al otro lado",
    "Amistades en línea, engaños y confianza — como si, pluscuamperfecto y consejos.",
    "7 min",
    [
      sec(
        "El engaño",
        [
          "Recuerda la regla: contar un engaño pide tres herramientas. Como si + imperfecto de subjuntivo (o pluscuamperfecto, si lo comparado es anterior) para lo que parecía y no era: hablaba como si tuviera mi edad. Pluscuamperfecto para lo que ya había pasado antes del descubrimiento: nunca había sospechado nada. Y si + pluscuamperfecto de subjuntivo + condicional compuesto para lamentarlo: si lo hubiera sabido, no le habría escrito.",
          "Por qué el modo cambia: lo que descubres es un hecho (me di cuenta de que era falso, indicativo); lo que solo parecía o lo que no ocurrió va en subjuntivo.",
        ],
        [
          ["Hablaba como si tuviera mi edad.", "He talked as if he were my age."],
          ["Nunca había sospechado que no fuera quien decía.", "I had never suspected he wasn't who he claimed to be."],
          ["Al final descubrí que su foto era de otra persona.", "In the end I found out his photo was of someone else. (hecho: indicativo)"],
        ],
        [
          fb("Completa.", "Me escribía como si me ___ desde siempre. (conocer, él)", "conociera", "Como si + imperfecto de subjuntivo: no me conocía, solo lo parecía."),
          fb("Completa.", "Si lo ___ sabido antes, no le habría contado tantas cosas. (haber, yo)", "hubiera", "Irreal del pasado: si + hubiera + participio; habría va en la otra mitad."),
          mc(
            "Elige: «Un día me di cuenta de que el perfil ___ falso.»",
            ["era", "fuera", "sería", "hubiera sido"],
            0,
            "Darse cuenta de que presenta un hecho descubierto, así que va en indicativo: era. Fuera o hubiera sido solo aparecen tras como si, dudas o negaciones."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "Mis padres me aconsejaron que nunca ___ datos personales en internet. (dar, yo)", "diera", "Aconsejar en pasado + otro sujeto → imperfecto de subjuntivo."),
      fb("Completa.", "Es importante que ___ con un adulto si algo te parece raro. (hablar, tú)", "hables", "Es importante que + subjuntivo."),
      fb("Completa.", "Resultó que la persona con ___ hablaba era mucho mayor.", "quien", "Tras preposición y referido a una persona se usa «quien»: «con quien»."),
      mt(
        "Relaciona cada término con su significado.",
        [
          ["el perfil falso", "fake profile"],
          ["suplantar", "to impersonate"],
          ["bloquear", "to block"],
          ["denunciar una cuenta", "to report an account"],
        ],
        "Vocabulario de seguridad en línea."
      ),
      ms(
        "¿Qué frases son correctas?",
        ["No confíes en nadie que te pida fotos.", "Fue su madre quien descubrió el engaño.", "Ojalá le hubiera hecho caso a mi hermana.", "Se comportaba como si era un amigo de verdad."],
        [0, 1, 2],
        "«Como si» va con imperfecto (o pluscuamperfecto) de subjuntivo: «como si fuera un amigo». «Como si era» es incorrecta."
      ),
      toEs("He understood me better than anyone, or so I thought.", "Me entendía mejor que nadie, o eso creía yo.", "El imperfecto describe cómo eran las cosas; «mejor que nadie» es la comparación con todos.", ["Me comprendía mejor que nadie, o eso creía yo.", "Me entendía mejor que nadie, o eso pensaba."]),
      wo("Lo que parecía una amistad resultó ser una mentira.", "Lo que + resultar ser.", "What seemed like a friendship turned out to be a lie."),
      toEs("Si lees bien los mensajes, notarás que algo falla.", "Si hubieras leído bien los mensajes, habrías notado que algo fallaba.", "Para lo que ya no tiene remedio: si + pluscuamperfecto de subjuntivo y condicional compuesto. Lo que notarías (algo fallaba) es un hecho y sigue en indicativo.", ["Si hubieses leído bien los mensajes, habrías notado que algo fallaba.", "Si hubieras leído bien los mensajes, hubieras notado que algo fallaba."], "Cambia a una condición irreal del pasado."),
      toEs("No he visto nunca su cara.", "No había visto nunca su cara.", "Lo anterior a otro momento del pasado va en pluscuamperfecto: había + participio.", ["Nunca había visto su cara."], "Pasa al pluscuamperfecto."),
      toEs("No aceptes solicitudes de desconocidos.", "Mi madre me aconsejó que no aceptara solicitudes de desconocidos.", "Un consejo transmitido en pasado se convierte en aconsejar que + imperfecto de subjuntivo.", ["Mi madre me aconsejó que no aceptase solicitudes de desconocidos."], "Pasa al estilo indirecto empezando por «Mi madre me aconsejó que…»."),
      toEs("Me escribía como si fue mi mejor amigo.", "Me escribía como si fuera mi mejor amigo.", "Como si nunca va con indicativo: la comparación irreal pide imperfecto de subjuntivo (fuera).", ["Me escribía como si fuese mi mejor amigo."], "Corrige la frase."),
      toEs("Si lo habría sabido, no le habría mandado fotos.", "Si lo hubiera sabido, no le habría mandado fotos.", "En la parte del si nunca va el condicional: si + pluscuamperfecto de subjuntivo (hubiera sabido).", ["Si lo hubiese sabido, no le habría mandado fotos.", "Si lo hubiera sabido, no le hubiera mandado fotos."], "Corrige la frase."),
      toEs("Le aconsejé que denuncia la cuenta.", "Le aconsejé que denunciara la cuenta.", "Aconsejar que + otro sujeto pide subjuntivo; con aconsejé (pasado), imperfecto de subjuntivo: denunciara.", ["Le aconsejé que denunciase la cuenta."], "Corrige la frase."),
    ]
  ),
  L(
    "cien-palabras-nuevas",
    "b2r-tema-aprender-idioma-nino",
    "Repaso temático: cien palabras nuevas",
    "Un niño que llega a un país nuevo y aprende su idioma — logros, emociones y cambios.",
    "7 min",
    [
      sec(
        "Las primeras palabras",
        [
          "Recuerda la regla: un proceso de aprendizaje se cuenta con perífrasis que dicen en qué punto está el cambio. Empezar a + infinitivo: el comienzo (empezó a entender). Ir + gerundio: el avance gradual (se fue soltando). Llegar a + infinitivo: el logro final, tras esfuerzo (llegó a hablar sin acento). Y las emociones del pasado sobre lo que hacían otros piden imperfecto de subjuntivo: le daba vergüenza que se rieran.",
          "Por qué: el infinitivo y el gerundio no cambian; es el verbo auxiliar (empezar, ir, llegar) el que lleva el tiempo y la persona.",
        ],
        [
          ["Al principio se sentía como si estuviera en otro planeta.", "At first he felt as if he were on another planet."],
          ["Poco a poco se fue soltando y hizo su primer amigo.", "Little by little he loosened up and made his first friend. (ir + gerundio)"],
        ],
        [
          fb("Completa.", "Su profesora le pidió a un compañero que lo ___. (ayudar)", "ayudara", "Pedir en pasado + otro sujeto → imperfecto de subjuntivo."),
          fb("Completa.", "Le daba vergüenza que los demás se ___ de su acento. (reír)", "rieran", "Dar vergüenza (emoción en pasado) + que + imperfecto de subjuntivo."),
          mc(
            "Elige: «Con los meses, el niño ___ entendiendo cada vez más.»",
            ["fue", "llegó", "empezó", "se puso"],
            0,
            "Con un gerundio y un avance progresivo (cada vez más) se usa ir + gerundio: fue entendiendo. Llegar y empezar van con a + infinitivo, y ponerse con a + infinitivo para un comienzo brusco."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "En seis meses, ___ a hablar casi sin acento. (llegar, pretérito)", "llegó", "Llegar a + infinitivo = conseguir algo tras un proceso."),
      fb("Completa.", "Si no hubiera tenido a su amigo, le ___ costado mucho más. (haber)", "habría", "Irreal del pasado: condicional compuesto en la consecuencia."),
      { ...fb("Completa.", "Cada palabra que ___ era una pequeña victoria. (aprender, él)", "aprendía", "Relativa con imperfecto (hábito)."), altAnswers: ["aprendió"] },
      mt(
        "Relaciona cada expresión con su significado.",
        [
          ["soltarse", "to loosen up"],
          ["el acento", "accent"],
          ["adaptarse", "to adapt"],
          ["hacerse entender", "to make oneself understood"],
        ],
        "Vocabulario del aprendizaje de idiomas."
      ),
      mc(
        "«It was his friend who taught him the first hundred words.»",
        ["Fue su amigo quien le enseñó las primeras cien palabras.", "Fue su amigo que le enseñó las primeras cien palabras.", "Era su amigo quien le enseñaba las primeras cien palabras ayer.", "Fue su amigo lo que le enseñó las cien primeras."],
        0,
        "En las oraciones hendidas de persona se usa «quien» (o «el que»): «Fue su amigo quien le enseñó». «Fue su amigo que» es poco correcto en la norma, y «lo que» es para cosas."
      ),
      toEs("Now he speaks as if he had been born here.", "Ahora habla como si hubiera nacido aquí.", "Como si + pluscuamperfecto de subjuntivo.", ["Ahora habla como si hubiese nacido aquí."]),
      wo("No hay idioma que no se pueda aprender con paciencia.", "Antecedente inexistente + se pasivo.", "There's no language that can't be learned with patience."),
      toEs("Poco a poco se acostumbró al clima.", "Poco a poco se fue acostumbrando al clima.", "Ir + gerundio presenta el cambio como gradual; el pronombre puede ir delante (se fue) o pegado al gerundio (fue acostumbrándose).", ["Poco a poco fue acostumbrándose al clima."], "Transforma con ir + gerundio para mostrar un cambio gradual."),
      toEs("Quiere que sus hijos aprendan los dos idiomas.", "Quería que sus hijos aprendieran los dos idiomas.", "Con el verbo de deseo en pasado, el subjuntivo pasa a imperfecto: aprendieran.", ["Quería que sus hijos aprendiesen los dos idiomas."], "Cambia «Quiere» por «Quería» y adapta la frase."),
      toEs("Con el tiempo consiguió escribir poemas en español.", "Con el tiempo llegó a escribir poemas en español.", "Llegar a + infinitivo expresa un logro alcanzado al final de un proceso.", [], "Transforma con «llegar a» + infinitivo."),
    ]
  ),
  L(
    "vidas-extra",
    "b2r-tema-amistad-online",
    "Repaso temático: amistades que empiezan en línea",
    "Videojuegos, confianza y amistades reales — relativas, conjunciones y estilo indirecto.",
    "7 min",
    [
      sec(
        "Del juego a la vida real",
        [
          "Recuerda la regla: contar una amistad mezcla tres estructuras. Estilo indirecto: lo que alguien te contó retrocede un tiempo (me siento solo → me contó que se sentía solo). Relativas: indicativo si la persona o cosa existe y la conoces (el jugador que siempre ayuda), subjuntivo si no existe o no la conoces (no había nadie que me entendiera, buscaba un equipo que me aceptara). Conjunciones de tiempo: subjuntivo para lo que aún no había pasado (en cuanto empezaran las vacaciones), indicativo para lo que pasó (hablamos hasta que nos dormimos).",
          "La clave en todos los casos es la misma: ¿es un hecho real y conocido o algo pendiente o inexistente?",
        ],
        [
          ["Nos conocimos en un juego en línea en el que había que cooperar.", "We met in an online game where you had to cooperate."],
          ["Me contó que en el colegio se sentía muy solo.", "He told me that at school he felt very lonely. (se siente → se sentía)"],
        ],
        [
          fb("Completa.", "Nunca pensé que ___ tan buenos amigos. (llegar a ser, nosotros; condicional)", "llegaríamos a ser", "Futuro visto desde el pasado → condicional (llegaríamos); llegar a ser expresa un logro con el tiempo."),
          fb("Completa.", "Me pidió que no se lo ___ a nadie. (contar, yo)", "contara", "Pedir en pasado + otro sujeto → imperfecto de subjuntivo."),
          mc(
            "Elige: «Me contó que de pequeño ___ muy tímido.»",
            ["era", "sea", "fuera", "será"],
            0,
            "Contar que transmite un hecho, así que va en indicativo; al estar en pasado, el presente «es» retrocede a imperfecto: era. Sea y fuera son subjuntivo sin motivo."
          ),
        ]
      ),
    ],
    [
      fb("Completa.", "Quedamos en vernos en cuanto ___ las vacaciones. (empezar)", "empezaran", "En cuanto + imperfecto de subjuntivo: era futuro visto desde el pasado."),
      fb("Completa.", "No había nadie en clase que lo ___ como yo. (entender)", "entendiera", "Antecedente inexistente (nadie) en pasado → imperfecto de subjuntivo."),
      fb("Completa.", "Si no nos hubiéramos conocido en el juego, nunca ___ hablado en el colegio. (haber, nosotros)", "habríamos", "Irreal del pasado: condicional compuesto en la consecuencia."),
      mt(
        "Relaciona cada término con su significado.",
        [
          ["la partida", "game / match"],
          ["cooperar", "to cooperate"],
          ["quedar con alguien", "to meet up with someone"],
          ["la vida extra", "extra life"],
        ],
        "Vocabulario de videojuegos."
      ),
      ms(
        "¿Qué frases son correctas?",
        ["Fue en el juego donde empezamos a confiar el uno en el otro.", "Aunque apenas hablábamos en clase, en línea éramos inseparables.", "Me alegro de que por fin nos hayamos visto en persona.", "Me dijo que se sienta solo en el colegio ayer."],
        [0, 1, 2],
        "En estilo indirecto con «dijo», el presente pasa a imperfecto: «me dijo que se sentía solo». «Que se sienta solo… ayer» usa subjuntivo y no concuerda con el pasado."
      ),
      toEs("A real friend is someone who is there when you need them.", "Un amigo de verdad es alguien que está ahí cuando lo necesitas.", "Relativa con indicativo (definición general) + cuando + indicativo (hábito).", ["Un verdadero amigo es alguien que está ahí cuando lo necesitas.", "Un amigo de verdad es alguien que está cuando lo necesitas."]),
      wo("Lo que empezó como un juego se convirtió en una amistad para toda la vida.", "Lo que + convertirse en.", "What started as a game became a lifelong friendship."),
      toEs("Juego todas las noches con mi primo.", "Me contó que jugaba todas las noches con su primo.", "En estilo indirecto pasado, el presente pasa a imperfecto (jugaba) y los posesivos cambian de persona (mi → su).", [], "Pasa al estilo indirecto empezando por «Me contó que…»."),
      toEs("Busco a alguien que juegue al ajedrez conmigo.", "Buscaba a alguien que jugara al ajedrez conmigo.", "Si el verbo principal pasa al pasado, el subjuntivo de la relativa pasa a imperfecto: jugara.", ["Buscaba a alguien que jugase al ajedrez conmigo.", "Buscaba alguien que jugara al ajedrez conmigo."], "Cambia «Busco» por «Buscaba» y adapta la frase."),
      toEs("Tengo un amigo que me entiende.", "No tengo a nadie que me entienda.", "Con un antecedente que existe, indicativo (entiende); con nadie, el antecedente no existe y la relativa pasa a subjuntivo (entienda).", ["No tengo nadie que me entienda.", "No tengo ningún amigo que me entienda."], "Cambia «un amigo» por «nadie» y adapta la frase."),
    ]
  ),
];
