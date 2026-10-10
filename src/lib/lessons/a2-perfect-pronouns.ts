// Synced from cheneygross-afk/lengo:src/lib/lessons/a2-perfect-pronouns.ts by scripts/sync-content.mjs -- edit it there, not here.
import { anchored, authoring } from "./authoring";
import type { AnchoredLesson } from "./weave";

// A2 lessons added after the 2026-10 curriculum audit:
//   - the present perfect (he comido), which the course first taught at
//     B1 although A2 stories already use it and it is the everyday past
//     for "today" and "this week" in Spain. Six lessons right after the
//     preterite/imperfect units; B1's present-perfect lessons stay as
//     consolidation;
//   - double object pronouns (me lo, se lo), required late in A2, since
//     the A2 exit test asks for "se lo" and they were only in optional
//     drills before B1;
//   - two Common Words lessons for A2 frequency-deck words (decks/
//     frequency-a2.ts) no required lesson used.
// Anchored after the lesson before their place; sequencing.ts puts them
// where A2_PLACES says.
const { mc, ms, fe, toEs, toEn, wo, mt, sec } = authoring("en");
const L = (
  slug: string,
  title: string,
  summary: string,
  duration: string,
  sections: Parameters<typeof anchored>[6],
  exercises: Parameters<typeof anchored>[7]
) => anchored("A2", "preterite-vs-imperfect-1", slug, title, summary, duration, sections, exercises);

export const A2_PERFECT_PRONOUNS: AnchoredLesson[] = [
  // ---- The present perfect -------------------------------------------
  L(
    "a2-perfect-he-comido",
    "The Present Perfect: He Comido, Has Visto",
    "Haber + a participle: what has happened today, this week, this year.",
    "10 min",
    [
      sec(
        "Two parts: haber + participle",
        [
          "The present perfect is the present of haber (he, has, ha, hemos, habéis, han) plus a participle. Regular participles end in -ado for -ar verbs and -ido for -er and -ir verbs: hablado, comido, vivido.",
          "The participle never changes: ella ha comido, ellos han comido. And nothing goes between the two parts: ¿Has comido? not ¿Has tú comido?",
        ],
        [
          ["he trabajado", "I have worked"],
          ["has comido", "you have eaten"],
          ["ha salido", "he / she has gone out"],
          ["hemos terminado", "we have finished"],
          ["han llegado", "they have arrived"],
        ],
        [
          fe("Hoy ___ mucho.", "he trabajado", "Today I [have worked] a lot.", "haber (he) + trabajado: -ar verbs take -ado."),
        ]
      ),
      sec(
        "When to use it",
        "Use it for actions in a time that isn't over yet: hoy, esta mañana, esta semana, este mes, este año. Also for news and for something that has just happened. In Spain this is the normal past for today; much of Latin America uses the preterite for the same thing, and both are understood everywhere.",
        [
          ["Esta semana he dormido muy poco.", "This week I've slept very little."],
          ["¿Qué has hecho hoy?", "What have you done today?"],
          ["Este año hemos viajado mucho.", "This year we've traveled a lot."],
          ["Mira, ha empezado a llover.", "Look, it's started to rain."],
        ],
        [
          mc(
            "\"We have finished the project.\"",
            ["Hemos terminado el proyecto.", "Hemos terminamos el proyecto.", "Habemos terminado el proyecto.", "Hemos terminada el proyecto."],
            0,
            "Hemos + terminado. The participle doesn't change for the person or for proyecto, and the nosotros form of haber is hemos."
          ),
        ]
      ),
    ],
    [
      fe("¿___ el correo de la jefa?", "Has leído", "[Have you read] the boss's email?", "haber (has) + leído. Leído takes an accent so the í is its own syllable."),
      fe("Mis padres ___ a Madrid esta mañana.", "han llegado", "My parents [have arrived] in Madrid this morning.", "han + llegado."),
      fe("Este mes ___ dos kilos.", "he perdido", "This month [I've lost] two kilos.", "he + perdido: -er verbs take -ido."),
      fe("¿Ustedes ya ___ el museo?", "han visitado", "[Have you visited] the museum yet? (ustedes)", "han + visitado."),
      toEs("Today I've eaten too much.", "Hoy he comido demasiado.", "Hoy is a time that isn't over → present perfect: he comido.", ["He comido demasiado hoy.", "Hoy comí demasiado."]),
      toEs("Have you slept well?", "¿Has dormido bien?", "has + dormido; nothing between them.", ["¿Ha dormido bien?", "¿Dormiste bien?"]),
      toEs("This week we've worked a lot.", "Esta semana hemos trabajado mucho.", "esta semana → present perfect.", ["Hemos trabajado mucho esta semana.", "Esta semana trabajamos mucho."]),
      toEn("Ha empezado a llover y no tengo paraguas.", "It's started to rain and I don't have an umbrella.", "Ha empezado = has started.", ["It has started to rain and I don't have an umbrella.", "It's begun to rain and I don't have an umbrella."]),
      mt(
        "Match each form to its meaning.",
        [
          ["he hablado", "I have spoken"],
          ["has vivido", "you have lived"],
          ["hemos salido", "we have gone out"],
          ["han bebido", "they have drunk"],
        ],
        "Haber changes for the person; the participle doesn't."
      ),
      wo("Esta mañana he desayunado en un bar.", "Esta mañana + he + participle.", "This morning I've had breakfast in a bar."),
    ]
  ),
  L(
    "a2-perfect-irregular-participles",
    "Irregular Participles: Hecho, Dicho, Visto, Puesto",
    "Ten common verbs with irregular participles, from hecho to roto.",
    "9 min",
    [
      sec(
        "The ones to learn by heart",
        "A few very common verbs have irregular participles. You already know some from the preterite stems, but these are different words.",
        [
          ["hacer → hecho", "done, made"],
          ["decir → dicho", "said"],
          ["ver → visto", "seen"],
          ["poner → puesto", "put"],
          ["escribir → escrito", "written"],
          ["abrir → abierto", "opened"],
          ["volver → vuelto", "come back"],
          ["romper → roto", "broken"],
          ["morir → muerto", "died"],
          ["descubrir → descubierto", "discovered"],
        ],
        [
          fe("¿Qué has ___ hoy?", "hecho", "What have you [done] today?", "hacer → hecho."),
        ]
      ),
      sec(
        "In real sentences",
        "The participle still never changes after haber.",
        [
          ["¿Has visto mis gafas?", "Have you seen my glasses?"],
          ["Mi hijo ha roto la ventana.", "My son has broken the window."],
          ["Han abierto un restaurante nuevo en la esquina.", "They've opened a new restaurant on the corner."],
          ["¿Ya has vuelto del viaje?", "Are you back from your trip already?"],
          ["Todavía no he escrito el informe.", "I haven't written the report yet."],
          ["¿Qué ha dicho el médico?", "What did the doctor say?"],
        ],
        [
          mc(
            "\"I've put the keys on the table.\"",
            ["He puesto las llaves en la mesa.", "He ponido las llaves en la mesa.", "He puse las llaves en la mesa.", "He puestas las llaves en la mesa."],
            0,
            "Poner → puesto, and it doesn't agree with las llaves after haber."
          ),
        ]
      ),
    ],
    [
      fe("Todavía no he ___ la película.", "visto", "I haven't [seen] the film yet.", "ver → visto."),
      fe("¿Quién ha ___ el vaso?", "roto", "Who has [broken] the glass?", "romper → roto."),
      fe("La tienda ha ___ tarde hoy.", "abierto", "The shop has [opened] late today.", "abrir → abierto."),
      fe("Mi abuela ha ___ un libro.", "escrito", "My grandmother has [written] a book.", "escribir → escrito."),
      toEs("What have they said?", "¿Qué han dicho?", "decir → dicho.", ["¿Qué han dicho ellos?", "¿Qué dijeron?"]),
      toEs("Have you seen the new film?", "¿Has visto la nueva película?", "ver → visto.", ["¿Has visto la película nueva?", "¿Ha visto la nueva película?", "¿Ha visto la película nueva?", "¿Viste la nueva película?"]),
      toEs("We've done everything.", "Hemos hecho todo.", "hacer → hecho.", ["Lo hemos hecho todo.", "Ya hemos hecho todo."]),
      toEs("The scientists have discovered a new planet.", "Los científicos han descubierto un planeta nuevo.", "descubrir → descubierto.", ["Los científicos han descubierto un nuevo planeta."]),
      toEn("Mi gato ha muerto y estoy muy triste.", "My cat has died and I'm very sad.", "morir → muerto.", ["My cat died and I'm very sad."]),
      mt(
        "Match each verb to its participle.",
        [
          ["volver", "vuelto"],
          ["poner", "puesto"],
          ["decir", "dicho"],
          ["abrir", "abierto"],
        ],
        "Four irregular participles."
      ),
    ]
  ),
  L(
    "a2-perfect-ya-todavia-alguna-vez",
    "Ya, Todavía No, Alguna Vez: Experiences",
    "Already, not yet, ever, never: the present perfect for experiences and to-do lists.",
    "9 min",
    [
      sec(
        "Already and not yet",
        "Ya means already, todavía no or aún no means not yet. They go before haber, or at the end.",
        [
          ["Ya he terminado.", "I've already finished."],
          ["Todavía no he comido.", "I haven't eaten yet."],
          ["¿Ya has pagado? —No, aún no.", "Have you paid already? — No, not yet."],
          ["Han apagado las luces y han salido.", "They've turned off the lights and gone out."],
        ],
        [
          fe("___ he hecho la compra.", "Ya", "I've [already] done the shopping.", "ya = already."),
        ]
      ),
      sec(
        "Ever and never",
        "For life experiences, ask ¿Alguna vez has…? (Have you ever…?). Answer with nunca, una vez, dos veces, muchas veces.",
        [
          ["¿Alguna vez has estado en México?", "Have you ever been to Mexico?"],
          ["Nunca he probado el pulpo.", "I've never tried octopus."],
          ["He estado en Perú dos veces.", "I've been to Peru twice."],
          ["¿Has disfrutado del viaje?", "Have you enjoyed the trip?"],
        ],
        [
          mc(
            "\"I've never seen snow.\"",
            ["Nunca he visto la nieve.", "Nunca he veído la nieve.", "He nunca visto la nieve.", "No nunca he visto la nieve."],
            0,
            "Nunca goes before haber, and ver → visto. Nothing can go between he and visto."
          ),
        ]
      ),
    ],
    [
      fe("¿___ has viajado sola?", "Alguna vez", "Have you [ever] traveled alone?", "¿Alguna vez has…? = Have you ever…?", ["alguna vez"]),
      fe("___ no hemos recibido el paquete.", "Todavía", "We haven't received the package [yet].", "todavía no = not yet.", ["Aún"]),
      fe("Mi hermano ___ ha montado en avión.", "nunca", "My brother has [never] been on a plane.", "nunca + ha + participle."),
      toEs("I've already seen this film.", "Ya he visto esta película.", "ya + he visto.", ["He visto ya esta película.", "Ya vi esta película.", "Ya he visto esta peli."]),
      toEs("Have you ever eaten paella?", "¿Alguna vez has comido paella?", "¿Alguna vez has + participle?", ["¿Has comido paella alguna vez?", "¿Has comido alguna vez paella?", "¿Alguna vez ha comido paella?", "¿Ha comido paella alguna vez?"]),
      toEs("We haven't decided yet.", "Todavía no hemos decidido.", "todavía no + hemos decidido.", ["Aún no hemos decidido.", "No hemos decidido todavía.", "No hemos decidido aún."]),
      toEs("I've been to Mexico three times.", "He estado en México tres veces.", "estar → estado; tres veces.", ["He ido a México tres veces.", "Estuve en México tres veces."]),
      toEn("¿Alguna vez has perdido el pasaporte?", "Have you ever lost your passport?", "¿Alguna vez has…? = Have you ever…?", ["Have you ever lost the passport?"]),
      ms(
        "Which sentences are correct?",
        ["Ya he terminado.", "He ya terminado.", "Nunca he estado en Chile.", "¿Has tú visto a Marta?"],
        [0, 2],
        "Ya and nunca go before haber, and nothing goes between haber and the participle, not even tú."
      ),
    ]
  ),
  L(
    "a2-perfect-vs-preterite",
    "He Comido or Comí?",
    "Present perfect for a time that isn't over, preterite for a finished one, and how Spain and Latin America differ.",
    "10 min",
    [
      sec(
        "Is the time over?",
        "Hoy, esta semana, este año → present perfect: he comido. Ayer, la semana pasada, en 2020 → preterite: comí. If you name a finished time, use the preterite everywhere.",
        [
          ["Hoy he comido en casa, pero ayer comí en un restaurante.", "Today I've eaten at home, but yesterday I ate at a restaurant."],
          ["Este año he leído diez libros. El año pasado leí cinco.", "This year I've read ten books. Last year I read five."],
          ["¿Has visto a Ana esta semana? —Sí, vi a Ana el lunes.", "Have you seen Ana this week? — Yes, I saw Ana on Monday."],
        ],
        [
          fe("Ayer ___ al cine.", "fui", "Yesterday I [went] to the cinema.", "Ayer is a finished time → preterite: fui."),
        ]
      ),
      sec(
        "Spain and Latin America",
        "In Spain, he comido is the normal past for anything earlier today: ¿Qué has hecho esta mañana? In Mexico, Colombia, Argentina and most of Latin America, people usually say ¿Qué hiciste esta mañana? and keep he comido for experiences (¿Has estado en Cuba?). You can use either; just be consistent.",
        [
          ["España: Esta mañana he desayunado tarde.", "Spain: This morning I had a late breakfast."],
          ["México: Esta mañana desayuné tarde.", "Mexico: This morning I had a late breakfast."],
        ],
        [
          mc(
            "Which sentence is wrong?",
            ["Ayer he visto a tu hermano.", "Ayer vi a tu hermano.", "Hoy he visto a tu hermano.", "Hoy vi a tu hermano."],
            0,
            "Ayer is a finished time, so the preterite: ayer vi. With hoy both are fine, depending on where you are."
          ),
        ]
      ),
    ],
    [
      fe("La semana pasada ___ mucho.", "trabajé", "Last week I [worked] a lot.", "La semana pasada is over → preterite: trabajé."),
      fe("Esta semana ___ mucho.", "he trabajado", "This week I [have worked] a lot.", "Esta semana isn't over → present perfect.", ["trabajé"]),
      fe("En 2019 ___ en Chile.", "vivimos", "In 2019 we [lived] in Chile.", "A finished year → preterite: vivimos."),
      fe("¿Alguna vez ___ en Chile?", "has vivido", "[Have you ever lived] in Chile? (tú)", "Experience → present perfect, everywhere."),
      toEs("Yesterday I went out with my friends.", "Ayer salí con mis amigos.", "Ayer → preterite.", ["Ayer salí con mis amigas.", "Salí con mis amigos ayer."]),
      toEs("This year we've saved a lot of money.", "Este año hemos ahorrado mucho dinero.", "Este año → present perfect.", ["Este año ahorramos mucho dinero.", "Hemos ahorrado mucho dinero este año."]),
      toEs("Have you ever been to Spain? — Yes, I went in 2018.", "¿Alguna vez has estado en España? —Sí, fui en 2018.", "The experience → he estado; the date → fui.", ["¿Has estado en España alguna vez? —Sí, fui en 2018.", "¿Has estado alguna vez en España? —Sí, fui en 2018."]),
      toEn("Hoy no he hecho nada, pero ayer limpié toda la casa.", "Today I haven't done anything, but yesterday I cleaned the whole house.", "Hoy → he hecho; ayer → limpié.", ["Today I've done nothing, but yesterday I cleaned the whole house.", "Today I didn't do anything, but yesterday I cleaned the whole house."]),
      mt(
        "Match each time word to the tense it goes with.",
        [
          ["ayer", "preterite (comí)"],
          ["esta mañana", "present perfect in Spain (he comido)"],
          ["alguna vez", "present perfect (he comido)"],
          ["el año pasado", "preterite (comí)"],
        ],
        "Finished time → preterite; unfinished time or experience → present perfect."
      ),
    ]
  ),
  L(
    "a2-perfect-mastery-check",
    "Mastery Check: The Present Perfect",
    "No new rules: forms, irregular participles, ya / todavía no / alguna vez, and he comido vs. comí.",
    "9 min",
    [
      sec(
        "The checklist",
        "Haber + participle, nothing in between. The participle never changes. Hoy / esta semana / alguna vez → he comido. Ayer / el lunes / en 2020 → comí.",
        [
          ["¿Has terminado? —Sí, ya he terminado.", "Have you finished? — Yes, I've already finished."],
          ["Nunca he estado en Cuba.", "I've never been to Cuba."],
        ],
        [
          ms(
            "Which forms are correct?",
            ["he hecho", "he hacido", "han dicho", "hemos vuelto", "ha escribido"],
            [0, 2, 3],
            "Hecho, dicho and vuelto are irregular. \"Hacido\" and \"escribido\" don't exist: hecho, escrito."
          ),
        ]
      ),
    ],
    [
      fe("¿Ya ___ los billetes?", "has comprado", "[Have you bought] the tickets yet? (tú)", "has + comprado."),
      fe("Nosotros nunca ___ un accidente.", "hemos tenido", "We [have] never [had] an accident.", "hemos + tenido."),
      fe("¿Quién ha ___ la puerta?", "abierto", "Who has [opened] the door?", "abrir → abierto."),
      fe("El año pasado ___ a Japón.", "viajé", "Last year I [traveled] to Japan.", "A finished time → preterite."),
      toEs("I haven't seen the news yet.", "Todavía no he visto las noticias.", "todavía no + he visto.", ["Aún no he visto las noticias.", "No he visto las noticias todavía.", "No he visto las noticias aún."]),
      toEs("They've returned from their trip.", "Han vuelto de su viaje.", "volver → vuelto.", ["Han vuelto del viaje.", "Ya han vuelto de su viaje.", "Ellos han vuelto de su viaje.", "Han regresado de su viaje."]),
      toEs("What have you done this weekend?", "¿Qué has hecho este fin de semana?", "este fin de semana → present perfect; hacer → hecho.", ["¿Qué ha hecho este fin de semana?", "¿Qué hiciste este fin de semana?"]),
      toEn("Esta mañana he puesto la lavadora y he limpiado la cocina.", "This morning I've put the washing machine on and cleaned the kitchen.", "poner → puesto; limpiar → limpiado.", ["This morning I put the washing machine on and cleaned the kitchen.", "This morning I've done the laundry and cleaned the kitchen."]),
      mc(
        "\"Have you ever lied to a friend?\"",
        ["¿Alguna vez has mentido a un amigo?", "¿Alguna vez mentiste a un amigo ayer?", "¿Has alguna vez mentido a un amigo?", "¿Alguna vez has mentida a un amigo?"],
        0,
        "Alguna vez goes before haber, and mentido doesn't agree. \"Ayer\" doesn't fit an \"ever\" question."
      ),
    ]
  ),
  L(
    "a2-perfect-mission-news",
    "Real-World Mission: Today's News",
    "News reports use the present perfect for what has just happened. Read three headlines and say what's happened.",
    "10 min",
    [
      sec(
        "Local news",
        "Radio and TV in Spain report today's events in the present perfect.",
        [
          ["La policía ha detenido a dos sospechosos del robo del banco.", "Police have arrested two suspects in the bank robbery."],
          ["Un testigo ha visto a los ladrones huir en un coche negro.", "A witness saw the thieves flee in a black car."],
          ["Según el juez, los dos hombres son inocentes hasta el juicio.", "According to the judge, the two men are innocent until the trial."],
          ["La víctima, un cajero del banco, no ha sufrido heridas graves.", "The victim, a bank teller, hasn't suffered serious injuries."],
        ],
        [
          mc(
            "Who have the police arrested?",
            ["Two suspects", "A witness", "The judge", "The bank teller"],
            0,
            "\"Ha detenido a dos sospechosos\": two suspects. The witness saw them, and the teller is the victim."
          ),
        ]
      ),
      sec(
        "Missing and found",
        "Desaparecer (to disappear) and aparecer (to turn up) are everyday news verbs.",
        [
          ["Ha aparecido el perro que desapareció el lunes.", "The dog that went missing on Monday has turned up."],
          ["Estaba atrapado en un garaje cerca de su casa.", "It was trapped in a garage near its home."],
          ["Los vecinos han ayudado a buscar al perro con mucha energía.", "The neighbors have helped look for it with a lot of energy."],
          ["La familia ha agradecido a todos su ayuda.", "The family has thanked everyone for their help."],
        ],
        [
          fe("El perro ___.", "ha aparecido", "The dog [has turned up].", "aparecer → ha aparecido."),
        ]
      ),
      sec(
        "Sport and culture",
        "Sport and culture headlines too.",
        [
          ["El equipo local ha ganado la copa por primera vez.", "The local team has won the cup for the first time."],
          ["Los jugadores han demostrado un nivel impresionante.", "The players have shown an impressive level."],
          ["Una actriz famosa ha mencionado su ciudad en una entrevista.", "A famous actress has mentioned her city in an interview."],
          ["El museo ha reunido obras de cien artistas.", "The museum has brought together works by a hundred artists."],
        ],
        []
      ),
    ],
    [
      fe("La policía ___ a un sospechoso.", "ha detenido", "The police [have arrested] a suspect.", "detener → detenido."),
      fe("El equipo ___ la copa.", "ha ganado", "The team [has won] the cup.", "ganar → ganado."),
      fe("Un ___ ha visto el accidente.", "testigo", "A [witness] has seen the accident.", "el / la testigo = witness."),
      toEs("The thieves have escaped.", "Los ladrones han escapado.", "escapar → escapado. Huir also works: han huido.", ["Los ladrones se han escapado.", "Los ladrones han huido."]),
      toEs("The judge has said that the man is innocent.", "El juez ha dicho que el hombre es inocente.", "decir → dicho.", ["La jueza ha dicho que el hombre es inocente."]),
      toEs("A girl has disappeared, but she has turned up this morning.", "Una chica ha desaparecido, pero ha aparecido esta mañana.", "desaparecer / aparecer → -ido.", ["Una niña ha desaparecido, pero ha aparecido esta mañana.", "Una chica desapareció, pero ha aparecido esta mañana."]),
      toEn("La víctima no ha reconocido al ladrón.", "The victim hasn't recognized the thief.", "reconocer = to recognize.", ["The victim did not recognize the thief.", "The victim didn't recognize the thief."]),
      mt(
        "Match each news word to its meaning.",
        [
          ["el sospechoso", "the suspect"],
          ["la víctima", "the victim"],
          ["el juicio", "the trial"],
          ["la cárcel", "the prison"],
          ["culpable", "guilty"],
        ],
        "Words you'll hear in every news bulletin."
      ),
      wo("El ladrón ha pasado la noche en la cárcel.", "ha + participle; la cárcel = prison.", "The thief has spent the night in prison."),
    ]
  ),

  L(
    "a2-common-words-history-conflict",
    "Common Words: History, Conflict and Survival",
    "Words from history programs, documentaries and the news: el ejército, la libertad, sobrevivir, esconder, investigar.",
    "9 min",
    [
      sec(
        "History",
        "Documentaries tell history in the past tenses you know. These are the nouns and verbs they use most.",
        [
          ["Durante la guerra, el ejército destruyó el puente.", "During the war, the army destroyed the bridge."],
          ["Muchos soldados lucharon por la libertad del país.", "Many soldiers fought for the country's freedom."],
          ["El enemigo atacó la ciudad de noche.", "The enemy attacked the city at night."],
          ["Una bomba quemó la mitad del barrio.", "A bomb burned half of the neighborhood."],
          ["Mi abuela sobrevivió y es una heroína para nuestra familia.", "My grandmother survived and is a heroine to our family."],
          ["Su familia escondió a dos personas en el sótano.", "Her family hid two people in the basement."],
        ],
        [
          fe("Mi abuelo ___ la guerra.", "sobrevivió", "My grandfather [survived] the war.", "sobrevivir → sobrevivió (preterite, él)."),
        ]
      ),
      sec(
        "Today's news",
        "Crime and security reports mix the present, the present perfect (for what has just happened) and the preterite.",
        [
          ["La policía investiga el ataque a una tienda.", "The police are investigating the attack on a shop."],
          ["No hay ninguna pista, pero un vecino ha dado algunos detalles.", "There's no lead, but a neighbor has given some details."],
          ["Los ladrones ocultaron la droga en un coche.", "The thieves hid the drugs in a car."],
          ["Después de una pelea, un hombre golpeó a otro en la calle.", "After a fight, one man hit another in the street."],
          ["El golpe fue fuerte, pero el hombre está bien.", "The blow was hard, but the man is OK."],
          ["Hay más vigilancia en el centro por una amenaza.", "There's more surveillance downtown because of a threat."],
          ["El ladrón pasó tres años en prisión.", "The thief spent three years in prison."],
          ["La policía encontró una pistola y tres balas.", "The police found a pistol and three bullets."],
        ],
        [
          mc(
            "\"The police are investigating the case.\"",
            ["La policía investiga el caso.", "La policía investigan el caso.", "La policía investigando el caso.", "La policía es investiga el caso."],
            0,
            "La policía is singular in Spanish: investiga."
          ),
        ]
      ),
    ],
    [
      fe("Los soldados ___ durante tres días.", "lucharon", "The soldiers [fought] for three days.", "luchar → lucharon."),
      fe("¿Dónde ___ el dinero?", "escondiste", "Where did you [hide] the money?", "esconder → escondiste. Ocultar means the same.", ["ocultaste"]),
      fe("La policía no tiene ninguna ___.", "pista", "The police don't have a single [lead].", "la pista = the lead, the clue."),
      toEs("They fought for freedom.", "Lucharon por la libertad.", "luchar por = to fight for.", ["Ellos lucharon por la libertad."]),
      toEs("The fire destroyed the house.", "El fuego destruyó la casa.", "destruir → destruyó, with a y.", ["El incendio destruyó la casa."]),
      toEs("The police are investigating the threat.", "La policía investiga la amenaza.", "La policía is singular.", ["La policía está investigando la amenaza."]),
      toEn("Mi abuelo fue un héroe: escondió a una familia durante la guerra.", "My grandfather was a hero: he hid a family during the war.", "esconder → escondió.", ["My grandfather was a hero: he hid a family in the war."]),
      mt(
        "Match each word to its meaning.",
        [
          ["el ejército", "army"],
          ["la pelea", "fight"],
          ["la amenaza", "threat"],
          ["el detalle", "detail"],
          ["sobrevivir", "to survive"],
        ],
        "Words from history and the news."
      ),
    ]
  ),

  // ---- Common words ---------------------------------------------------
  L(
    "a2-common-words-praise-complaints",
    "Common Words: Praise, Complaints and Feelings",
    "Estupendo, impresionante, ridículo; aguantar, merecer, agradecer: how people react to each other.",
    "9 min",
    [
      sec(
        "Praise",
        "Strong positive adjectives: estupendo (great), impresionante (impressive), brillante (brilliant), adorable. Orgulloso de means proud of.",
        [
          ["¡Qué idea tan estupenda!", "What a great idea!"],
          ["Tu presentación fue impresionante.", "Your presentation was impressive."],
          ["Es una estudiante brillante.", "She's a brilliant student."],
          ["¡Qué bebé tan adorable!", "What an adorable baby!"],
          ["Estoy muy orgulloso de ti.", "I'm very proud of you."],
          ["Te mereces unas vacaciones.", "You deserve a holiday."],
          ["Te agradezco mucho la ayuda.", "I'm very grateful for your help."],
        ],
        [
          fe("Estoy muy ___ de mi hija.", "orgulloso", "I'm very [proud] of my daughter.", "orgulloso de = proud of. A woman says orgullosa.", ["orgullosa"]),
        ]
      ),
      sec(
        "Complaints",
        "Ridículo, falso and equivocado for things that are wrong; aguantar and soportar for putting up with something; no soporto means I can't stand.",
        [
          ["¡Es un precio ridículo!", "That's a ridiculous price!"],
          ["Esa noticia es falsa.", "That news is fake."],
          ["Creo que estás equivocado.", "I think you're wrong."],
          ["No aguanto más este calor.", "I can't take this heat any more."],
          ["No soporto a la gente que miente.", "I can't stand people who lie."],
          ["Me engañaron: el producto no funciona.", "They cheated me: the product doesn't work."],
          ["La lluvia arruinó nuestro picnic.", "The rain ruined our picnic."],
        ],
        [
          mc(
            "\"You're wrong.\"",
            ["Estás equivocado.", "Eres equivocado.", "Tienes equivocado.", "Haces equivocado."],
            0,
            "Estar equivocado = to be wrong (a state). Tener razón is the opposite: to be right."
          ),
        ]
      ),
      sec(
        "Feelings and relationships",
        "Enamorado de (in love with), el beso (kiss), el sentimiento (feeling), el respeto (respect), unido (close, united), llorar (to cry), sufrir (to suffer), disfrutar de (to enjoy), evitar (to avoid), negar (to deny).",
        [
          ["Está enamorado de su vecina.", "He's in love with his neighbor."],
          ["Mi familia está muy unida.", "My family is very close."],
          ["Lloro con las películas tristes.", "I cry at sad films."],
          ["Disfruto mucho de mi trabajo.", "I really enjoy my job."],
          ["Evito el centro los sábados.", "I avoid downtown on Saturdays."],
          ["Niega todo, pero nadie le cree.", "He denies everything, but nobody believes him."],
          ["Es una cuestión de respeto.", "It's a matter of respect."],
        ],
        []
      ),
    ],
    [
      fe("Te ___ unas vacaciones.", "mereces", "You [deserve] a holiday.", "merecerse → te mereces: here te is the reflexive pronoun (tú te mereces). Without te, \"Mereces unas vacaciones\" is also correct."),
      fe("No ___ más este ruido.", "aguanto", "I can't [take] this noise any more.", "aguantar = to put up with. Soportar works too.", ["soporto"]),
      fe("Mi hermano está ___ de su profesora.", "enamorado", "My brother is [in love] with his teacher.", "enamorado de = in love with."),
      fe("Siempre ___ el tráfico de la mañana.", "evito", "I always [avoid] the morning traffic.", "evitar → evito."),
      toEs("Thank you, your help is great.", "Gracias, tu ayuda es estupenda.", "estupendo agrees with ayuda.", ["Gracias, su ayuda es estupenda.", "Gracias, tu ayuda es genial."]),
      toEs("We really enjoy the beach.", "Disfrutamos mucho de la playa.", "disfrutar de = to enjoy.", ["Nosotros disfrutamos mucho de la playa.", "Disfrutamos mucho la playa."]),
      toEs("I think the news is fake.", "Creo que la noticia es falsa.", "falso agrees with noticia.", ["Pienso que la noticia es falsa."]),
      toEn("Me engañaron y arruinaron mis vacaciones.", "They cheated me and ruined my holiday.", "engañar = to cheat, deceive; arruinar = to ruin.", ["They deceived me and ruined my vacation.", "They cheated me and ruined my vacation.", "I was cheated and they ruined my holiday."]),
      mt(
        "Match each word to its meaning.",
        [
          ["el beso", "kiss"],
          ["llorar", "to cry"],
          ["sufrir", "to suffer"],
          ["el sentimiento", "feeling"],
          ["ridículo", "ridiculous"],
        ],
        "Words for how people feel and react."
      ),
    ]
  ),
  L(
    "a2-common-words-goals-rules",
    "Common Words: Goals, Rules and Possibilities",
    "El objetivo, la regla, el nivel, la posibilidad; obtener, utilizar, considerar: the words of work and plans.",
    "9 min",
    [
      sec(
        "At work",
        "El objetivo (goal), el nivel (level), la regla (rule), el miembro (member), la unidad (unit), la zona (area), la posición (position), el resto (the rest).",
        [
          ["Nuestro objetivo es abrir dos tiendas más.", "Our goal is to open two more stores."],
          ["Tengo un nivel intermedio de inglés.", "I have an intermediate level of English."],
          ["Las reglas del club son muy estrictas.", "The club's rules are very strict."],
          ["Soy miembro de un equipo pequeño.", "I'm a member of a small team."],
          ["El resto del grupo llega mañana.", "The rest of the group arrives tomorrow."],
          ["Vivo en una zona tranquila.", "I live in a quiet area."],
          ["En mi opinión, la imagen de la empresa es muy importante.", "In my opinion, the company's image is very important."],
          ["Obtengo buenos resultados con este método.", "I get good results with this method."],
          ["La misión del equipo es abrir una base en Lima.", "The team's mission is to open a base in Lima."],
          ["Es una posición difícil, pero tiene mucho valor.", "It's a difficult position, but it's very valuable."],
          ["Hay mucho movimiento en la oficina hoy.", "There's a lot of activity in the office today."],
          ["La entrega del pedido es el lunes.", "The order delivery is on Monday."],
        ],
        [
          fe("El ___ del proyecto es ahorrar energía.", "objetivo", "The [goal] of the project is to save energy.", "el objetivo = the goal."),
        ]
      ),
      sec(
        "Verbs for getting things done",
        "Obtener (to obtain, like tener: obtengo), utilizar (to use), considerar (to consider), averiguar (to find out), dirigir (to manage, to direct), guardar (to keep, to save), proteger (to protect), pertenecer a (to belong to), mencionar (to mention), fallar (to fail).",
        [
          ["Utilizo esta aplicación para aprender idiomas.", "I use this app to learn languages."],
          ["Estamos considerando la posibilidad de mudarnos.", "We're considering the possibility of moving."],
          ["Necesito averiguar el horario del tren.", "I need to find out the train timetable."],
          ["Mi madre dirige una escuela.", "My mother runs a school."],
          ["Guarda el documento antes de salir.", "Save the document before you leave."],
          ["Este coche pertenece a la empresa.", "This car belongs to the company."],
          ["El sistema ha fallado otra vez.", "The system has failed again."],
        ],
        [
          mc(
            "\"I need to find out the price.\"",
            ["Necesito averiguar el precio.", "Necesito averiguo el precio.", "Necesito a averiguar el precio.", "Necesito averiguando el precio."],
            0,
            "Necesitar + infinitive: necesito averiguar."
          ),
        ]
      ),
      sec(
        "Linking words",
        "Debido a (due to), respecto a (regarding), excepto (except), apenas (hardly, barely), inmediatamente (immediately), definitivamente (for good, once and for all; also definitely), afuera (outside).",
        [
          ["El vuelo está cancelado debido a la niebla.", "The flight is canceled due to the fog."],
          ["Respecto a tu pregunta, no tengo una respuesta.", "Regarding your question, I don't have an answer."],
          ["Abrimos todos los días excepto el lunes.", "We're open every day except Monday."],
          ["Apenas tengo tiempo para comer.", "I barely have time to eat."],
          ["Llama a un médico inmediatamente.", "Call a doctor immediately."],
          ["Hace buen tiempo; comemos afuera.", "The weather's nice; we're eating outside."],
        ],
        []
      ),
    ],
    [
      fe("Abrimos todos los días ___ el domingo.", "excepto", "We're open every day [except] Sunday.", "excepto = except. Menos works too.", ["menos"]),
      fe("___ duermo cinco horas.", "Apenas", "I [barely] sleep five hours.", "apenas = hardly, barely."),
      fe("¿Puedes ___ la hora de la reunión?", "averiguar", "Can you [find out] the time of the meeting?", "averiguar = to find out."),
      fe("Esta bici ___ a mi hermano.", "pertenece", "This bike [belongs] to my brother.", "pertenecer a = to belong to."),
      toEs("The train is late due to the snow.", "El tren llega tarde debido a la nieve.", "debido a = due to.", ["El tren está retrasado debido a la nieve.", "El tren viene tarde debido a la nieve."]),
      toEs("We have to protect the environment.", "Tenemos que proteger el medio ambiente.", "proteger = to protect.", ["Hay que proteger el medio ambiente.", "Debemos proteger el medio ambiente."]),
      toEs("She runs a small company.", "Dirige una empresa pequeña.", "dirigir → dirige.", ["Ella dirige una empresa pequeña.", "Dirige una pequeña empresa.", "Ella dirige una pequeña empresa."]),
      toEn("Respecto a la reunión, el jefe no ha mencionado nada.", "Regarding the meeting, the boss hasn't mentioned anything.", "respecto a = regarding; mencionar = to mention.", ["About the meeting, the boss hasn't mentioned anything.", "As for the meeting, the boss hasn't mentioned anything."]),
      mt(
        "Match each word to its meaning.",
        [
          ["la regla", "rule"],
          ["el nivel", "level"],
          ["el miembro", "member"],
          ["la posibilidad", "possibility"],
          ["la posición", "position"],
        ],
        "Words for plans, work and decisions."
      ),
    ]
  ),

  // ---- Double object pronouns ----------------------------------------
  L(
    "a2-double-pronouns-me-lo",
    "Two Pronouns Together: Me Lo, Te La, Nos Los",
    "When both the person and the thing become pronouns: the person comes first.",
    "10 min",
    [
      sec(
        "Person first, thing second",
        [
          "You know indirect pronouns (me, te, le, nos, les: to whom) and direct ones (lo, la, los, las: what). When you use both, the person goes first: Me das el libro → Me lo das.",
          "Both go before a conjugated verb, in that order, and agree like they always do: la carta → la, los papeles → los.",
        ],
        [
          ["¿Me prestas tu coche? —Sí, te lo presto.", "Will you lend me your car? — Yes, I'll lend it to you."],
          ["Mi madre nos hace la cena. → Mi madre nos la hace.", "My mother makes us dinner. → My mother makes it for us."],
          ["¿Las fotos? Te las mando esta noche.", "The photos? I'll send them to you tonight."],
        ],
        [
          fe("¿El dinero? Mañana ___ devuelvo.", "te lo", "The money? I'll give [it back to you] tomorrow.", "Te (to you) + lo (el dinero): person first."),
        ]
      ),
      sec(
        "Le and les become se",
        "Le or les can never sit next to lo, la, los or las. They turn into se: Le doy el regalo → Se lo doy. Because se can mean to him, to her, to you or to them, add a él, a ella, a usted or a ellos when it isn't clear.",
        [
          ["Le doy el regalo a Ana. → Se lo doy.", "I give the present to Ana. → I give it to her."],
          ["Les explico el plan a mis padres. → Se lo explico.", "I explain the plan to my parents. → I explain it to them."],
          ["¿La factura? Se la mando a usted por correo.", "The invoice? I'll send it to you by email."],
        ],
        [
          mc(
            "\"The keys? I gave them to Pedro.\"",
            ["¿Las llaves? Se las di a Pedro.", "¿Las llaves? Le las di a Pedro.", "¿Las llaves? Las le di a Pedro.", "¿Las llaves? Se los di a Pedro."],
            0,
            "Le becomes se before las, the person comes first, and las agrees with las llaves (feminine plural)."
          ),
        ]
      ),
    ],
    [
      fe("¿La sal? Ahora ___ paso.", "te la", "The salt? I'll pass [it to you] now.", "te + la (la sal)."),
      fe("¿El informe? Ya ___ he enviado al jefe.", "se lo", "The report? I've already sent [it to] the boss.", "le + lo → se lo."),
      fe("¿Los billetes? Mi hermana ___ compra.", "nos los", "The tickets? My sister buys [them for us].", "nos + los (los billetes)."),
      fe("¿Las flores? ___ regalo a mi madre.", "Se las", "The flowers? I'm giving [them to] my mother.", "le + las → se las."),
      toEs("The book? I'll give it to you tomorrow.", "¿El libro? Te lo doy mañana.", "te + lo, both before doy.", ["¿El libro? Mañana te lo doy.", "¿El libro? Se lo doy mañana."]),
      toEs("I told it to her.", "Se lo dije.", "le + lo → se lo; decir → dije.", ["Se lo dije a ella.", "Yo se lo dije."]),
      toEs("Can you explain it to me?", "¿Me lo puedes explicar?", "me + lo, before puedes (or on the end of explicar: explicármelo).", ["¿Puedes explicármelo?", "¿Me lo puede explicar?", "¿Puede explicármelo?"]),
      toEn("¿La contraseña? Ya se la he dado a Marta.", "The password? I've already given it to Marta.", "se (to Marta) + la (la contraseña).", ["The password? I already gave it to Marta."]),
      ms(
        "Which sentences are correct?",
        ["Se lo compro.", "Le lo compro.", "Me la das.", "La me das."],
        [0, 2],
        "Le becomes se before lo, and the person pronoun always comes first."
      ),
    ]
  ),
  L(
    "a2-double-pronouns-infinitive-command",
    "Two Pronouns with Infinitives, Gerunds and Commands",
    "Dármelo, explicándoselo, dímelo: where the pair goes when there's no conjugated verb in front.",
    "9 min",
    [
      sec(
        "Before the verb, or on the end",
        "With an infinitive or a gerund, the pair can go before the conjugated verb or join the end of the infinitive or gerund as one word. When they join, add an accent to keep the stress: explicar → explicártelo.",
        [
          ["Te lo quiero explicar. = Quiero explicártelo.", "I want to explain it to you."],
          ["Se lo estoy diciendo. = Estoy diciéndoselo.", "I'm telling him / her."],
          ["Me la vas a prestar, ¿no? = Vas a prestármela, ¿no?", "You're going to lend it to me, right?"],
        ],
        [
          fe("Quiero ___ antes de la reunión.", "dártelo", "I want to [give it to you] before the meeting.", "dar + te + lo joined, with an accent: dártelo."),
        ]
      ),
      sec(
        "With commands",
        "With a yes command, the pair always joins the end: dímelo (tell me it), dáselo (give it to him). With a no command, it goes before: no me lo digas.",
        [
          ["¿El secreto? Dímelo.", "The secret? Tell it to me."],
          ["¿El paquete? Dáselo al vecino.", "The package? Give it to the neighbor."],
          ["¿La sorpresa? Cuéntasela.", "The surprise? Tell it to her."],
        ],
        [
          mc(
            "\"Tell it to me.\" (tú)",
            ["Dímelo.", "Me lo di.", "Dilome.", "Lo me di."],
            0,
            "A yes command: the pronouns join the end, person first, with an accent: dímelo."
          ),
        ]
      ),
    ],
    [
      fe("¿La foto? Voy a ___ ahora.", "mandártela", "The photo? I'm going to [send it to you] now.", "mandar + te + la, joined with an accent."),
      fe("¿El café? Estoy ___.", "preparándotelo", "The coffee? I'm [making it for you].", "preparando + te + lo, accent on the á."),
      fe("¿Las llaves? ___, por favor.", "Dámelas", "The keys? [Give them to me], please.", "A yes command: da + me + las."),
      toEs("I can't tell you (it).", "No te lo puedo decir.", "te + lo before puedo, or joined: no puedo decírtelo.", ["No puedo decírtelo."]),
      toEs("Give it to me, please.", "Dámelo, por favor.", "A yes command joins the pair: dámelo.", ["Dámela, por favor.", "Démelo, por favor."]),
      toEs("Tell it to him.", "Díselo.", "A yes command: the pair joins the end, se before lo, with an accent: díselo.", ["Díselo a él."]),
      toEn("¿El regalo? Queremos dárselo mañana.", "The present? We want to give it to him tomorrow.", "dar + se + lo: to give it to him / her / them.", ["The present? We want to give it to her tomorrow.", "The gift? We want to give it to him tomorrow.", "The gift? We want to give it to her tomorrow.", "The present? We want to give it to them tomorrow."]),
      wo("No te lo voy a decir.", "Both pronouns before the conjugated verb.", "I'm not going to tell you."),
    ]
  ),
  L(
    "a2-double-pronouns-mission",
    "Real-World Mission: Moving Flat",
    "Moving day: who lends what to whom, without repeating a single noun.",
    "8 min",
    [
      sec(
        "The plan",
        "Lucía is moving flat. Notice how every second mention of a thing becomes a pronoun pair.",
        [
          ["—¿Me prestas la furgoneta el sábado? —Claro, te la presto.", "Will you lend me the van on Saturday? — Of course, I'll lend it to you."],
          ["—¿Y las cajas? —Mi primo nos las trae el viernes.", "And the boxes? — My cousin's bringing them to us on Friday."],
          ["—¿Le has dado las llaves al dueño? —Todavía no. Se las doy mañana.", "Have you given the keys to the landlord? — Not yet. I'm giving them to him tomorrow."],
        ],
        [
          fe("¿La furgoneta? Claro, ___ presto.", "te la", "The van? Sure, I'll lend [it to you].", "te + la (la furgoneta)."),
        ]
      ),
      sec(
        "The day after",
        "Once everything's done, Lucía thanks everyone.",
        [
          ["—¿Quién te ha regalado esa planta? —Me la han regalado los vecinos.", "Who gave you that plant? — The neighbors gave it to me."],
          ["—¿Y el sofá? —Se lo he vendido a una amiga.", "And the sofa? — I've sold it to a friend."],
        ],
        []
      ),
    ],
    [
      fe("¿Las cajas? Mi primo ___ trae.", "nos las", "The boxes? My cousin brings [them to us].", "nos + las."),
      fe("¿El sofá? ___ he vendido a una amiga.", "Se lo", "The sofa? I've sold [it to] a friend.", "le + lo → se lo."),
      fe("¿La planta? ___ han regalado los vecinos.", "Me la", "The plant? The neighbors gave [it to me].", "me + la."),
      toEs("The keys? I'll give them to him tomorrow.", "¿Las llaves? Se las doy mañana.", "le + las → se las.", ["¿Las llaves? Mañana se las doy.", "¿Las llaves? Se las daré mañana."]),
      toEs("Will you lend me your van? — Yes, I'll lend it to you.", "¿Me prestas tu furgoneta? —Sí, te la presto.", "me / te + la.", ["¿Me prestas la furgoneta? —Sí, te la presto."]),
      toEs("Can you bring it to us on Friday?", "¿Nos lo puedes traer el viernes?", "nos + lo before puedes, or joined: traérnoslo.", ["¿Puedes traérnoslo el viernes?", "¿Nos la puedes traer el viernes?", "¿Puedes traérnosla el viernes?"]),
      toEn("¿El mapa del barrio? Te lo envío por WhatsApp.", "The neighborhood map? I'll send it to you on WhatsApp.", "te + lo.", ["The map of the neighborhood? I'll send it to you by WhatsApp."]),
      mc(
        "\"The plant? I gave it to my mother.\"",
        ["¿La planta? Se la di a mi madre.", "¿La planta? Le la di a mi madre.", "¿La planta? Se lo di a mi madre.", "¿La planta? La se di a mi madre."],
        0,
        "Le → se before la, la agrees with planta, and the person pronoun comes first."
      ),
    ]
  ),
];

/** Where each group goes in the A2 course order (sequencing.ts). The
 * three optional double-pronoun drills move with the new lessons and
 * become required. */
export const A2_PLACES: { slugs: string[]; before: string }[] = [
  {
    slugs: [
      "a2-perfect-he-comido",
      "a2-perfect-irregular-participles",
      "a2-perfect-ya-todavia-alguna-vez",
      "a2-perfect-vs-preterite",
      "a2-perfect-mastery-check",
      "a2-perfect-mission-news",
      "a2-common-words-history-conflict",
    ],
    before: "direct-object-pronouns-1",
  },
  { slugs: ["a2-common-words-praise-complaints"], before: "a2r-error-hunt-pret-imp" },
  { slugs: ["a2-common-words-goals-rules"], before: "asking-giving-directions-1" },
  {
    slugs: [
      "a2-double-pronouns-me-lo",
      "a2d-se-lo-pattern",
      "a2-double-pronouns-infinitive-command",
      "a2d-double-pronoun-infinitive",
      "a2d-qa-double-pronouns",
      "a2-double-pronouns-mission",
    ],
    // The end of the core path, right before the Extra Practice block.
    before: "preterite-drill-1",
  },
];
