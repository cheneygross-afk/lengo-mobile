// Synced from cheneygross-afk/lengo:src/lib/lessons/a1-core.ts by scripts/sync-content.mjs -- edit it there, not here.
import { anchored, authoring } from "./authoring";
import type { AnchoredLesson } from "./weave";

// Required A1 lessons added after the 2026-10 curriculum audit:
//   - topics a beginner needs that A1 only had in optional lessons or not
//     at all: a daily routine with me levanto / me ducho as set phrases,
//     the body and feeling unwell, weather and seasons, and clothes;
//   - "Core words" lessons for the most frequent words of the A1 deck
//     (src/lib/decks/frequency-a1.ts) that no required A1 lesson used
//     (the content check reports what's still missing).
// Anchored next to the Everyday irregulars unit; sequencing.ts moves each
// one to its place in the course (A1_CORE_PLACES).
const { mc, ms, fe, toEs, toEn, wo, mt, sec } = authoring("en");
const L = (
  slug: string,
  title: string,
  summary: string,
  duration: string,
  sections: Parameters<typeof anchored>[6],
  exercises: Parameters<typeof anchored>[7]
) => anchored("A1", "review-adjectives-ar-er-ir-verbs", slug, title, summary, duration, sections, exercises);

export const A1_CORE: AnchoredLesson[] = [
  L(
    "a1-core-verbs-everyday-actions",
    "Core Verbs: Everyday Actions",
    "Fifteen regular and stem-changing verbs you'll use every day: perder, ganar, olvidar, sacar, enviar and more.",
    "9 min",
    [
      sec(
        "Losing, winning, forgetting",
        "All of these are verbs you can already conjugate: they follow the regular endings or a stem change you know (perder e → ie, recordar o → ue, seguir e → i).",
        [
          ["Siempre pierdo las llaves.", "I always lose my keys."],
          ["Nuestro equipo gana casi todos los partidos.", "Our team wins almost every match."],
          ["¿Olvidas algo? —No, creo que no.", "Are you forgetting something? — No, I don't think so."],
          ["No recuerdo su nombre.", "I don't remember her name."],
          ["Sigo aquí, en la oficina.", "I'm still here, at the office."],
        ],
        [
          fe("Mi hijo siempre ___ el móvil.", "pierde", "My son always [loses] his phone.", "perder → pierde: e → ie inside the boot."),
        ]
      ),
      sec(
        "Taking out, sending, using",
        "Sacar (to take out, to get), enviar (to send), usar (to use), entrar (to go in) and mover (to move, o → ue) are all over daily life.",
        [
          ["Saco dinero del cajero.", "I take money out of the cash machine."],
          ["Te envío la dirección por mensaje.", "I'll send you the address by text."],
          ["¿Usas el coche para ir al trabajo?", "Do you use the car to go to work?"],
          ["Entramos en el museo a las diez.", "We go into the museum at ten."],
          ["¿Puedes mover tu coche, por favor?", "Can you move your car, please?"],
        ],
        [
          mc(
            "\"I'm sending you the photos now.\"",
            ["Te envío las fotos ahora.", "Te envio las fotos ahora.", "Te enviamos las fotos ahora.", "Te envía las fotos ahora."],
            0,
            "Enviar → envío for yo, with an accent on the í. \"Enviamos\" is we and \"envía\" is he/she."
          ),
        ]
      ),
      sec(
        "Fixing, explaining, showing",
        "Arreglar (to fix, to tidy), explicar (to explain), mostrar (to show, o → ue), enseñar (to teach, to show), comenzar (to begin, e → ie), aceptar (to accept) and conseguir (to get, to manage, e → i).",
        [
          ["El técnico arregla la lavadora.", "The technician fixes the washing machine."],
          ["La profesora explica la lección otra vez.", "The teacher explains the lesson again."],
          ["Te muestro el apartamento.", "I'll show you the apartment."],
          ["La clase comienza a las seis.", "The class begins at six."],
          ["¿Aceptan tarjeta?", "Do you accept cards?"],
          ["No consigo abrir la puerta.", "I can't manage to open the door."],
        ],
        [
          fe("¿Me ___ el problema, por favor?", "explicas", "Can you [explain] the problem to me, please?", "explicar → explicas (tú). A present-tense question works as a polite request."),
        ]
      ),
    ],
    [
      fe("Hoy el Real Madrid ___ el partido.", "gana", "Today Real Madrid [wins] the match.", "ganar → gana."),
      fe("Nunca ___ tu cumpleaños.", "olvido", "I never [forget] your birthday.", "olvidar → olvido (yo)."),
      fe("¿Por qué no ___ tú?", "entras", "Why don't [you go in]?", "entrar → entras."),
      fe("El tren ___ a las siete.", "comienza", "The train [starts] at seven.", "comenzar → comienza: e → ie in the boot. Empezar means the same."),
      toEs("I always lose my glasses.", "Siempre pierdo mis gafas.", "perder → pierdo: e → ie. Lentes is common in Latin America.", ["Siempre pierdo las gafas.", "Siempre pierdo mis lentes.", "Siempre pierdo los lentes.", "Yo siempre pierdo mis gafas.", "Pierdo siempre mis gafas."]),
      toEs("Can you show me the room?", "¿Puedes mostrarme la habitación?", "poder + mostrar; the pronoun me goes on the end of the infinitive or before puedes.", ["¿Me puedes mostrar la habitación?", "¿Puede mostrarme la habitación?", "¿Me puede mostrar la habitación?", "¿Puedes enseñarme la habitación?", "¿Me puedes enseñar la habitación?"]),
      toEs("I'll send you an email tonight.", "Te envío un correo esta noche.", "enviar → envío (yo). Spanish often uses the present for a plan.", ["Te envío un email esta noche.", "Esta noche te envío un correo.", "Te mando un correo esta noche."]),
      toEn("No consigo recordar la contraseña.", "I can't remember the password.", "conseguir + infinitive = to manage to; recordar = to remember.", ["I can't manage to remember the password.", "I can't remember my password."]),
      mt(
        "Match each verb to its meaning.",
        [
          ["perder", "to lose"],
          ["ganar", "to win, to earn"],
          ["sacar", "to take out"],
          ["arreglar", "to fix"],
          ["seguir", "to follow, to keep going"],
        ],
        "Five everyday verbs from this lesson."
      ),
      wo("Uso el ordenador para trabajar y para estudiar.", "usar + noun; para + infinitive.", "I use the computer to work and to study."),
    ]
  ),
  L(
    "a1-my-day-routine",
    "My Day: Me Levanto, Me Ducho",
    "Describe an ordinary day from waking up to going to bed, using me levanto, me ducho and friends as set phrases.",
    "9 min",
    [
      sec(
        "Morning phrases",
        [
          "For your daily routine, Spanish uses verbs with me in front: me despierto (I wake up), me levanto (I get up), me ducho (I shower), me visto (I get dressed). The me shows you do it to yourself.",
          "For now, learn them as phrases for yo. You'll see the full pattern (te levantas, se levanta) in the Elementary level.",
        ],
        [
          ["Me despierto a las seis y media.", "I wake up at six thirty."],
          ["Me levanto a las siete.", "I get up at seven."],
          ["Me ducho y me visto.", "I shower and get dressed."],
          ["Desayuno café con tostadas.", "I have coffee and toast for breakfast."],
        ],
        [
          fe("___ a las siete menos cuarto.", "Me levanto", "[I get up] at a quarter to seven.", "Me levanto = I get up: the me is part of the phrase.", ["me levanto"]),
        ]
      ),
      sec(
        "Day and evening",
        "Entonces and luego both mean then; durante means during; mientras means while.",
        [
          ["Luego salgo de casa y tomo el autobús.", "Then I leave home and take the bus."],
          ["Durante el día trabajo en una oficina.", "During the day I work in an office."],
          ["Regreso a casa a las seis.", "I come back home at six."],
          ["Me siento en el sofá y leo un rato.", "I sit down on the sofa and read for a while."],
          ["Mientras ceno, escucho la radio.", "While I have dinner, I listen to the radio."],
          ["Entonces me acuesto, casi siempre a las once.", "Then I go to bed, almost always at eleven."],
        ],
        [
          mc(
            "\"I go to bed at midnight.\"",
            ["Me acuesto a medianoche.", "Acuesto a medianoche.", "Me acuesta a medianoche.", "Yo acostar a medianoche."],
            0,
            "Me acuesto = I go to bed. Without me it means putting someone else to bed, and \"acuesta\" is he/she."
          ),
        ]
      ),
    ],
    [
      fe("Los lunes ___ muy temprano.", "me despierto", "On Mondays [I wake up] very early.", "Me despierto = I wake up.", ["Me despierto"]),
      fe("___ con agua fría.", "Me ducho", "[I shower] with cold water.", "Me ducho = I shower.", ["me ducho"]),
      fe("___ a casa a las siete.", "Regreso", "[I come back] home at seven.", "regresar → regreso. Volver means the same: vuelvo."),
      fe("Leo ___ el desayuno.", "durante", "I read [during] breakfast.", "durante = during."),
      toEs("I get up, I shower and then I have breakfast.", "Me levanto, me ducho y luego desayuno.", "Me levanto and me ducho are set phrases; luego = then.", ["Me levanto, me ducho y después desayuno.", "Me levanto, me ducho y entonces desayuno."]),
      toEs("I get dressed while I listen to the news.", "Me visto mientras escucho las noticias.", "mientras = while.", ["Me visto mientras oigo las noticias.", "Mientras escucho las noticias, me visto."]),
      toEs("I almost always go to bed at eleven.", "Casi siempre me acuesto a las once.", "casi siempre = almost always.", ["Me acuesto casi siempre a las once.", "Casi siempre me acuesto a las 11."]),
      toEn("Me siento en la terraza y tomo un café.", "I sit down on the terrace and have a coffee.", "Me siento = I sit down.", ["I sit on the terrace and have a coffee.", "I sit down on the terrace and drink a coffee."]),
      mt(
        "Put each phrase with its meaning.",
        [
          ["me despierto", "I wake up"],
          ["me levanto", "I get up"],
          ["me visto", "I get dressed"],
          ["me acuesto", "I go to bed"],
        ],
        "The me in each phrase shows you do it to yourself."
      ),
      wo("Durante la semana me levanto a las seis.", "Time phrase first, then me + verb.", "During the week I get up at six."),
    ]
  ),
  L(
    "a1-core-words-time-linking",
    "Core Words: Then, Still, Almost, Also",
    "The small words that hold sentences together: entonces, todavía, aún, casi, además, aunque, quizás and more.",
    "9 min",
    [
      sec(
        "Time words",
        "Todavía and aún both mean still (and, with no, not yet). Entonces is then or so; luego is later or then.",
        [
          ["Todavía vivo con mis padres.", "I still live with my parents."],
          ["Aún no sé la respuesta.", "I don't know the answer yet."],
          ["¿Entonces vienes o no?", "So are you coming or not?"],
          ["Hasta luego.", "See you later."],
          ["Son casi las diez.", "It's almost ten."],
        ],
        [
          fe("___ no tengo coche.", "Todavía", "I [still] don't have a car.", "Todavía no = not yet / still not. Aún no means the same.", ["Aún"]),
        ]
      ),
      sec(
        "Adding and contrasting",
        "Además means besides or also; incluso means even; aunque means although; pues means well or so at the start of a sentence; ni means nor, and ni siquiera means not even.",
        [
          ["El piso es grande y, además, es barato.", "The flat is big and, besides, it's cheap."],
          ["Trabaja incluso los domingos.", "She works even on Sundays."],
          ["Aunque estoy cansado, salgo con mis amigos.", "Although I'm tired, I go out with my friends."],
          ["Pues… no sé.", "Well… I don't know."],
          ["No bebo ni café ni té.", "I drink neither coffee nor tea."],
          ["Ni siquiera sé su nombre.", "I don't even know her name."],
        ],
        [
          mc(
            "\"Although it's late, I keep working.\"",
            ["Aunque es tarde, sigo trabajando.", "Además es tarde, sigo trabajando.", "Pues es tarde, sigo trabajando.", "Incluso es tarde, sigo trabajando."],
            0,
            "Aunque = although. Además adds information, pues is \"well\", and incluso means even."
          ),
        ]
      ),
      sec(
        "How sure, how much",
        "Quizás and probablemente show doubt; realmente and simplemente add emphasis; por supuesto means of course. Bastante (quite, enough), suficiente (enough), demasiado (too much) and tanto (so much) measure amounts.",
        [
          ["Quizás llueve mañana.", "Maybe it'll rain tomorrow."],
          ["Probablemente es su hermano.", "He's probably her brother."],
          ["¿Puedo pasar? —¡Por supuesto!", "Can I come in? — Of course!"],
          ["Realmente no entiendo el problema.", "I really don't understand the problem."],
          ["Hay bastante comida para todos.", "There's quite enough food for everyone."],
          ["No tengo suficiente dinero.", "I don't have enough money."],
          ["¡Trabajas tanto!", "You work so much!"],
          ["Hoy estoy mal; simplemente necesito dormir.", "I feel bad today; I simply need to sleep."],
        ],
        [
          fe("¿Me ayudas? —¡___!", "Por supuesto", "Will you help me? — [Of course]!", "Por supuesto = of course. Claro means the same.", ["por supuesto", "Claro"]),
        ]
      ),
    ],
    [
      fe("Es ___ medianoche.", "casi", "It's [almost] midnight.", "casi = almost."),
      fe("No tengo hambre, ___ como un poco.", "aunque", "I'm not hungry, [although] I eat a little.", "aunque = although."),
      fe("___ el lunes es mejor.", "Quizás", "[Maybe] Monday is better.", "quizás = maybe, perhaps. Tal vez means the same.", ["Tal vez", "Quizá"]),
      fe("No hay ___ sillas para todos.", "suficientes", "There aren't [enough] chairs for everyone.", "suficiente agrees in number: suficientes sillas."),
      toEs("I still work in the same office.", "Todavía trabajo en la misma oficina.", "todavía = still.", ["Aún trabajo en la misma oficina.", "Sigo trabajando en la misma oficina.", "Yo todavía trabajo en la misma oficina."]),
      toEs("The hotel is cheap and, besides, it's near the beach.", "El hotel es barato y, además, está cerca de la playa.", "además = besides; estar for location.", ["El hotel es barato y además está cerca de la playa."]),
      toEs("She doesn't even have a phone.", "Ni siquiera tiene teléfono.", "ni siquiera = not even.", ["Ella ni siquiera tiene teléfono.", "Ni siquiera tiene un teléfono.", "No tiene ni siquiera teléfono."]),
      toEs("You work too much.", "Trabajas demasiado.", "demasiado = too much.", ["Tú trabajas demasiado.", "Usted trabaja demasiado."]),
      toEn("Pues, realmente, no sé qué decir.", "Well, really, I don't know what to say.", "pues at the start = well; realmente = really.", ["Well, honestly, I don't know what to say.", "Well, I really don't know what to say."]),
      mt(
        "Match each word to its meaning.",
        [
          ["entonces", "then, so"],
          ["incluso", "even"],
          ["bastante", "quite, enough"],
          ["probablemente", "probably"],
          ["simplemente", "simply"],
        ],
        "Small words that change the meaning of a whole sentence."
      ),
    ]
  ),
  L(
    "a1-core-words-some-none-other",
    "Core Words: Other, Some, None, Last, Only",
    "Otro, alguno, ninguno, cualquier, último, único, próximo, propio: the words that pick out which one.",
    "9 min",
    [
      sec(
        "Otro: another, other",
        "Otro already means another, so it never takes un: otro café, not un otro café. It agrees like any adjective: otro día, otra vez, otros amigos.",
        [
          ["¿Quieres otro café?", "Do you want another coffee?"],
          ["Otra vez, por favor.", "Once more, please."],
          ["Los otros están en la cocina.", "The others are in the kitchen."],
        ],
        [
          mc(
            "\"I need another chair.\"",
            ["Necesito otra silla.", "Necesito una otra silla.", "Necesito otro silla.", "Necesito otras silla."],
            0,
            "Otra agrees with silla (feminine singular), and there's no una in front."
          ),
        ]
      ),
      sec(
        "Alguno, ninguno, cualquier",
        "Alguno (some, any) and ninguno (no, none) drop the -o before a masculine noun: algún día, ningún problema. Cualquier means any at all, and cualquiera stands alone: anyone, any one.",
        [
          ["¿Tienes alguna pregunta?", "Do you have any questions?"],
          ["Algún día voy a vivir en la playa.", "Some day I'm going to live at the beach."],
          ["No hay ningún problema.", "There's no problem at all."],
          ["Ninguno de mis amigos habla inglés.", "None of my friends speaks English."],
          ["Puedes venir cualquier día.", "You can come any day."],
        ],
        [
          fe("No tengo ___ idea.", "ninguna", "I have [no] idea.", "ninguna agrees with idea (feminine)."),
        ]
      ),
      sec(
        "Último, único, próximo, propio, cierto",
        "These go before the noun: el último tren (the last train), el único hotel (the only hotel), la próxima semana (next week), mi propio negocio (my own business). Cierto means certain or true: es cierto (it's true).",
        [
          ["El último autobús sale a las doce.", "The last bus leaves at twelve."],
          ["Es el único restaurante abierto.", "It's the only restaurant that's open."],
          ["La próxima semana estoy de vacaciones.", "Next week I'm on vacation."],
          ["Quiero tener mi propio negocio.", "I want to have my own business."],
          ["¿Es cierto que te vas? —Sí, es cierto.", "Is it true you're leaving? — Yes, it's true."],
          ["Eres el único amigo que tengo aquí. Siempre estoy contigo.", "You're the only friend I have here. I'm always with you."],
        ],
        [
          fe("La ___ semana empiezo un trabajo nuevo.", "próxima", "[Next] week I start a new job.", "próximo agrees: la próxima semana."),
        ]
      ),
    ],
    [
      fe("¿Hay ___ farmacia cerca?", "alguna", "Is there [a / any] pharmacy nearby?", "alguna agrees with farmacia."),
      fe("Es la ___ vez que vengo aquí.", "última", "It's the [last] time I come here.", "último → última with vez."),
      fe("No hay ___ problema.", "ningún", "There's [no] problem.", "ninguno → ningún before a masculine noun."),
      fe("Puedes llamar a ___ hora.", "cualquier", "You can call at [any] time.", "cualquier before a noun, masculine or feminine."),
      toEs("Do you want another beer?", "¿Quieres otra cerveza?", "otra, with no una.", ["¿Quiere otra cerveza?", "¿Quiere usted otra cerveza?", "¿Tú quieres otra cerveza?"]),
      toEs("She's my only sister.", "Es mi única hermana.", "único → única with hermana.", ["Ella es mi única hermana."]),
      toEs("I want to go with you.", "Quiero ir contigo.", "con + ti → contigo; con + mí → conmigo.", ["Yo quiero ir contigo.", "Quiero ir con usted."]),
      toEs("Next year I want my own apartment.", "El próximo año quiero mi propio apartamento.", "próximo and propio go before the noun.", ["El año próximo quiero mi propio apartamento.", "El próximo año quiero mi propio piso.", "El año que viene quiero mi propio apartamento.", "El año que viene quiero mi propio piso."]),
      toEn("¿Es cierto? No tengo ninguna noticia.", "Is it true? I don't have any news.", "Cierto = true; ninguna = no, not any.", ["Is it true? I have no news.", "Is that true? I don't have any news."]),
      ms(
        "Which sentences are correct?",
        ["Quiero un otro té.", "Quiero otro té.", "No tengo ningún hermano.", "No tengo ninguno hermano."],
        [1, 2],
        "Otro takes no un, and ninguno shortens to ningún before a masculine noun."
      ),
    ]
  ),
  L(
    "a1-word-web-body",
    "Word Web: The Body & Feeling Unwell",
    "Head, eyes, feet and heart, plus me duele and tengo dolor de for telling a doctor what's wrong.",
    "9 min",
    [
      sec(
        "The body",
        "Spanish usually says el or la with body parts, not my: Me duele la cabeza (my head hurts), Tengo los ojos cansados (my eyes are tired).",
        [
          ["la cabeza", "the head"],
          ["el ojo, los ojos", "the eye, the eyes"],
          ["el oído / la oreja", "the (inner) ear / the (outer) ear"],
          ["la mano, el brazo", "the hand, the arm"],
          ["la pierna, el pie", "the leg, the foot"],
          ["la espalda, el estómago", "the back, the stomach"],
          ["el corazón, el cuerpo", "the heart, the body"],
        ],
        [
          mt(
            "Match each word to its meaning.",
            [
              ["la cabeza", "head"],
              ["el pie", "foot"],
              ["el ojo", "eye"],
              ["el corazón", "heart"],
            ],
            "Four body words from this lesson."
          ),
        ]
      ),
      sec(
        "Me duele: it hurts",
        "Doler (to hurt) works like gustar: the thing that hurts is the subject. One thing → me duele; several → me duelen. You can also say tengo dolor de + body part.",
        [
          ["Me duele la cabeza.", "I have a headache. (My head hurts.)"],
          ["Me duelen los pies.", "My feet hurt."],
          ["Tengo dolor de oído.", "I have an earache."],
          ["¿Te duele el estómago?", "Does your stomach hurt?"],
        ],
        [
          fe("Me ___ los ojos.", "duelen", "My eyes [hurt].", "Los ojos is plural → duelen."),
        ]
      ),
      sec(
        "At the doctor's",
        "The doctor might say ten cuidado (be careful) or no es nada serio (it's nothing serious).",
        [
          ["—¿Qué le pasa? —Me duele la espalda.", "What's wrong? — My back hurts."],
          ["—No es nada serio. Tiene que descansar.", "It's nothing serious. You have to rest."],
          ["Ten cuidado con el pie.", "Be careful with your foot."],
          ["El cuerpo necesita dormir.", "The body needs sleep."],
        ],
        []
      ),
    ],
    [
      fe("Me ___ la espalda.", "duele", "My back [hurts].", "La espalda is singular → duele."),
      fe("Tengo dolor de ___.", "cabeza", "I have a [head]ache.", "Tener dolor de + body part."),
      fe("Mi abuelo tiene un problema de ___.", "corazón", "My grandfather has a [heart] problem.", "el corazón = the heart."),
      toEs("My feet hurt.", "Me duelen los pies.", "Los pies is plural → duelen; Spanish uses los, not mis."),
      toEs("Does your head hurt?", "¿Te duele la cabeza?", "Te duele + la cabeza.", ["¿Le duele la cabeza?"]),
      toEs("It's nothing serious.", "No es nada serio.", "No… nada = nothing; serio agrees with nada (masculine).", ["No es nada grave."]),
      toEs("I have an earache and my eyes hurt.", "Tengo dolor de oído y me duelen los ojos.", "Dolor de oído; los ojos → duelen.", ["Me duele el oído y me duelen los ojos."]),
      toEn("Ten cuidado, el suelo está mojado.", "Be careful, the floor is wet.", "Ten cuidado = be careful.", ["Careful, the floor is wet."]),
      mc(
        "\"My hands hurt.\"",
        ["Me duelen las manos.", "Me duele las manos.", "Me duelen mis manos.", "Yo duelo las manos."],
        0,
        "Plural manos → duelen, with las. \"Duele\" is singular, Spanish uses las rather than mis here, and \"yo duelo\" would mean I hurt (someone)."
      ),
      wo("Me duele mucho el brazo derecho.", "Me duele + mucho + the body part.", "My right arm hurts a lot."),
    ]
  ),
  L(
    "a1-word-web-weather",
    "Word Web: Weather & Seasons",
    "Hace frío, llueve, está nublado: talk about the weather, the sky and the seasons.",
    "8 min",
    [
      sec(
        "Hace + weather",
        "Most weather phrases use hace (from hacer) + a noun: hace frío, hace calor, hace sol, hace viento, hace buen tiempo, hace mal tiempo. To ask: ¿Qué tiempo hace?",
        [
          ["¿Qué tiempo hace hoy? —Hace sol.", "What's the weather like today? — It's sunny."],
          ["En invierno hace mucho frío.", "In winter it's very cold."],
          ["Hoy hace demasiado calor para salir.", "Today it's too hot to go out."],
        ],
        [
          fe("Hoy ___ viento.", "hace", "Today [it's] windy.", "Weather with hace + noun: hace viento."),
        ]
      ),
      sec(
        "Rain, snow, clouds",
        "Llover and nevar have their own verbs: llueve (it's raining, it rains), nieva (it's snowing). For the sky, use estar: está nublado (it's cloudy), el cielo está gris.",
        [
          ["Llueve mucho en Galicia.", "It rains a lot in Galicia."],
          ["En la montaña nieva en enero.", "In the mountains it snows in January."],
          ["El cielo está nublado y hay poca luz.", "The sky is cloudy and there's little light."],
          ["La tierra está mojada.", "The ground is wet."],
        ],
        [
          mc(
            "\"It's raining.\"",
            ["Llueve.", "Hace lluvia.", "Es lluvia.", "Está llover."],
            0,
            "Rain has its own verb: llueve (or está lloviendo). \"Hace lluvia\" isn't used."
          ),
        ]
      ),
      sec(
        "The seasons",
        "la primavera (spring), el verano (summer), el otoño (autumn), el invierno (winter). In the southern hemisphere, summer is December to February.",
        [
          ["En verano hace calor y los días son largos.", "In summer it's hot and the days are long."],
          ["El otoño es mi estación favorita.", "Autumn is my favorite season."],
          ["En primavera hace buen tiempo, pero a veces llueve.", "In spring the weather is nice, but sometimes it rains."],
        ],
        []
      ),
    ],
    [
      fe("En invierno ___ mucho en la montaña.", "nieva", "In winter it [snows] a lot in the mountains.", "nevar → nieva."),
      fe("El ___ está azul y no hay nubes.", "cielo", "The [sky] is blue and there are no clouds.", "el cielo = the sky."),
      fe("Hoy ___ mal tiempo.", "hace", "Today the weather [is] bad.", "Hace mal tiempo = the weather is bad."),
      toEs("It's very cold today.", "Hoy hace mucho frío.", "Frío is a noun here, so mucho, not muy.", ["Hace mucho frío hoy."]),
      toEs("It's cloudy and it's raining.", "Está nublado y llueve.", "estar for the sky; llueve for rain.", ["Está nublado y está lloviendo."]),
      toEs("In summer it's hot.", "En verano hace calor.", "hace calor = it's hot (weather).", ["En el verano hace calor.", "Hace calor en verano."]),
      toEn("En primavera hay mucha luz y hace buen tiempo.", "In spring there's a lot of light and the weather is nice.", "Hay luz = there's light; hace buen tiempo = it's nice out.", ["In spring there is a lot of light and the weather is good.", "In spring there's lots of light and the weather is nice."]),
      mt(
        "Match each season to its name.",
        [
          ["la primavera", "spring"],
          ["el verano", "summer"],
          ["el otoño", "autumn"],
          ["el invierno", "winter"],
        ],
        "The four seasons."
      ),
      ms(
        "Which sentences are correct?",
        ["Hace mucho calor.", "Es mucho calor.", "Llueve mucho.", "Hace muy frío."],
        [0, 2],
        "Weather uses hace + noun with mucho (hace mucho calor), and llover has its own verb. \"Es mucho calor\" uses the wrong verb, and \"muy frío\" treats the noun frío as an adjective."
      ),
    ]
  ),
  L(
    "a1-word-web-clothes",
    "Word Web: Clothes",
    "Shirts, trousers, shoes and coats, plus llevar (to wear) and me pongo (I put on).",
    "8 min",
    [
      sec(
        "What you wear",
        "Llevar means to wear (and to carry). Me pongo means I put on, from ponerse.",
        [
          ["la camisa, la camiseta", "the shirt, the T-shirt"],
          ["los pantalones, la falda, el vestido", "the trousers, the skirt, the dress"],
          ["los zapatos, las botas, los calcetines", "the shoes, the boots, the socks"],
          ["el abrigo, la chaqueta, el jersey", "the coat, the jacket, the sweater"],
          ["Hoy llevo una camisa blanca.", "Today I'm wearing a white shirt."],
          ["Hace frío, así que me pongo el abrigo.", "It's cold, so I put on my coat."],
        ],
        [
          fe("Siempre ___ vaqueros al trabajo.", "llevo", "I always [wear] jeans to work.", "llevar = to wear."),
        ]
      ),
      sec(
        "Describing clothes",
        "Colors and other adjectives go after the noun and agree with it: una chaqueta vieja, unos zapatos nuevos.",
        [
          ["Estos zapatos son viejos, pero son cómodos.", "These shoes are old, but they're comfortable."],
          ["Es un vestido muy especial: es de mi abuela.", "It's a very special dress: it's my grandmother's."],
          ["Esta camisa es diferente. Es un poco rara, pero es bonita.", "This shirt is different. It's a bit strange, but it's nice."],
          ["¡Qué abrigo tan lindo!", "What a lovely coat!"],
          ["Es una chaqueta hermosa.", "It's a beautiful jacket."],
        ],
        [
          mc(
            "\"These trousers are old.\"",
            ["Estos pantalones son viejos.", "Estos pantalones son viejas.", "Este pantalones es viejo.", "Estas pantalones son viejos."],
            0,
            "Pantalones is masculine plural, so estos and viejos."
          ),
        ]
      ),
    ],
    [
      fe("Me ___ los zapatos y salgo.", "pongo", "I [put on] my shoes and go out.", "Me pongo = I put on."),
      fe("Mi jefe siempre ___ corbata.", "lleva", "My boss always [wears] a tie.", "llevar → lleva."),
      fe("Necesito un ___ para el invierno.", "abrigo", "I need a [coat] for the winter.", "el abrigo = the coat."),
      toEs("I'm wearing black trousers and a white shirt.", "Llevo pantalones negros y una camisa blanca.", "llevar = to wear; the colors agree.", ["Llevo unos pantalones negros y una camisa blanca.", "Yo llevo pantalones negros y una camisa blanca."]),
      toEs("These boots are very old.", "Estas botas son muy viejas.", "Botas is feminine plural → estas, viejas.", []),
      toEs("I put on a sweater because it's cold.", "Me pongo un jersey porque hace frío.", "Me pongo = I put on. Suéter is common in Latin America.", ["Me pongo un suéter porque hace frío.", "Me pongo un jersey porque tengo frío.", "Me pongo un suéter porque tengo frío."]),
      toEn("Es un vestido especial para la boda.", "It's a special dress for the wedding.", "especial follows the noun.", ["It is a special dress for the wedding."]),
      mt(
        "Match each item to its English.",
        [
          ["los calcetines", "socks"],
          ["la falda", "skirt"],
          ["la chaqueta", "jacket"],
          ["los zapatos", "shoes"],
        ],
        "Clothes words from this lesson."
      ),
      wo("Hoy llevo una chaqueta diferente.", "llevar + noun + adjective after it.", "Today I'm wearing a different jacket."),
    ]
  ),
  L(
    "a1-core-verbs-things-happen",
    "Core Verbs: When Things Happen",
    "Ocurrir, caer, escapar, descubrir, mentir, confiar: verbs for stories, news and everyday surprises.",
    "9 min",
    [
      sec(
        "What's happening?",
        "Ocurrir and suceder mean to happen; ¿Qué pasa? is the everyday way to ask. Significar means to mean: ¿Qué significa…?",
        [
          ["¿Qué ocurre? —Nada, todo bien.", "What's going on? — Nothing, all good."],
          ["Estas cosas suceden.", "These things happen."],
          ["¿Qué significa esta palabra?", "What does this word mean?"],
          ["Supongo que sí.", "I suppose so."],
          ["Imagino que estás cansado.", "I imagine you're tired."],
        ],
        [
          fe("¿Qué ___ \"lluvia\"?", "significa", "What does \"lluvia\" [mean]?", "significar = to mean."),
        ]
      ),
      sec(
        "Falling, catching, escaping",
        "Caer (to fall) has a -go yo form like traer: caigo. Coger (to take, to catch) is everyday in Spain; in much of Latin America people say tomar or agarrar instead.",
        [
          ["Cuidado, el vaso se cae.", "Careful, the glass is falling."],
          ["Cojo el tren de las ocho.", "I take the eight o'clock train. (Spain)"],
          ["El gato escapa por la ventana.", "The cat escapes through the window."],
          ["La policía detiene al ladrón.", "The police arrest the thief."],
          ["Echo la carta al buzón.", "I drop the letter in the mailbox."],
          ["Anda más despacio, por favor.", "Walk more slowly, please."],
        ],
        [
          mc(
            "\"I'm falling!\"",
            ["¡Me caigo!", "¡Me cao!", "¡Me cae!", "¡Me caer!"],
            0,
            "Caer → caigo for yo, a -go form like traigo."
          ),
        ]
      ),
      sec(
        "Trust and secrets",
        "Mentir (to lie, e → ie), confiar en (to trust), asegurar (to assure, to make sure), descubrir (to discover, to find out), molestar (to bother), bastar (to be enough), salvar (to save, to rescue) and robar (to steal).",
        [
          ["No miento: es la verdad.", "I'm not lying: it's the truth."],
          ["Confío en ti.", "I trust you."],
          ["Te aseguro que no hay problema.", "I assure you there's no problem."],
          ["Descubro un secreto de mi familia.", "I discover a family secret."],
          ["¿Te molesta la música?", "Does the music bother you?"],
          ["Basta con una foto.", "One photo is enough."],
          ["El médico salva muchas vidas.", "The doctor saves many lives."],
          ["Alguien roba bicicletas en el barrio.", "Someone steals bikes in the neighborhood."],
        ],
        [
          fe("Yo ___ en mis amigos.", "confío", "I [trust] my friends.", "confiar → confío, with an accent, + en."),
        ]
      ),
    ],
    [
      fe("¿Por qué ___ tú? Necesito la verdad.", "mientes", "Why [are you lying]? I need the truth.", "mentir → mientes: e → ie."),
      fe("No me ___ el ruido.", "molesta", "The noise doesn't [bother] me.", "molestar works like gustar: el ruido molesta."),
      fe("El perro ___ al niño del agua.", "salva", "The dog [saves] the boy from the water.", "salvar → salva."),
      fe("¿Qué ___ aquí?", "ocurre", "What's [happening] here?", "ocurrir → ocurre. ¿Qué pasa aquí? means the same."),
      toEs("I trust you.", "Confío en ti.", "confiar en + person.", ["Yo confío en ti.", "Confío en usted."]),
      toEs("I suppose that he's right.", "Supongo que tiene razón.", "suponer → supongo, a -go form like poner.", ["Supongo que él tiene razón."]),
      toEs("These things happen.", "Estas cosas pasan.", "pasar, ocurrir and suceder all work.", ["Estas cosas ocurren.", "Estas cosas suceden.", "Son cosas que pasan."]),
      toEs("What does this word mean?", "¿Qué significa esta palabra?", "significar = to mean.", ["¿Qué quiere decir esta palabra?"]),
      toEn("Te aseguro que no miento.", "I assure you I'm not lying.", "asegurar = to assure; mentir = to lie.", ["I assure you that I'm not lying.", "I promise you I'm not lying."]),
      mt(
        "Match each verb to its meaning.",
        [
          ["caer", "to fall"],
          ["descubrir", "to discover"],
          ["mentir", "to lie"],
          ["robar", "to steal"],
          ["imaginar", "to imagine"],
        ],
        "Verbs for stories and the news."
      ),
    ]
  ),
  L(
    "a1-core-words-where",
    "Core Words: Up, Down, Back, There",
    "Ahí, arriba, abajo, adelante, atrás, hacia, contra: words for where things are and which way they go.",
    "8 min",
    [
      sec(
        "Here, there, up, down",
        "Aquí is here, ahí is there (near you), allí is over there. Arriba is up or upstairs, abajo is down or downstairs.",
        [
          ["¿Dónde está mi bolso? —Ahí, en la silla.", "Where's my bag? — There, on the chair."],
          ["Mi habitación está arriba.", "My room is upstairs."],
          ["La cocina está abajo.", "The kitchen is downstairs."],
          ["Los vecinos de arriba hacen mucho ruido.", "The upstairs neighbors make a lot of noise."],
        ],
        [
          fe("El baño está ___, en el segundo piso.", "arriba", "The bathroom is [upstairs], on the second floor.", "arriba = up, upstairs."),
        ]
      ),
      sec(
        "Forward, back, towards, against",
        "Adelante means forward (and also come in! when someone knocks). Atrás means back or behind. Hacia means towards, contra means against, and acerca de means about.",
        [
          ["¿Se puede? —¡Adelante!", "May I come in? — Come in!"],
          ["Los niños van atrás, en el coche.", "The kids sit in the back of the car."],
          ["Camino hacia la estación.", "I walk towards the station."],
          ["Está contra la pared.", "It's against the wall."],
          ["Es un libro acerca de la historia de México.", "It's a book about the history of Mexico."],
        ],
        [
          mc(
            "\"We're walking towards the beach.\"",
            ["Caminamos hacia la playa.", "Caminamos contra la playa.", "Caminamos atrás la playa.", "Caminamos arriba la playa."],
            0,
            "Hacia = towards. Contra is against, and atrás and arriba aren't used like this."
          ),
        ]
      ),
    ],
    [
      fe("Tus bolsas están ___, en la mesa.", "ahí", "Your bags are [there], on the table.", "ahí = there, near the listener."),
      fe("El garaje está ___.", "abajo", "The garage is [downstairs].", "abajo = down, downstairs."),
      fe("Hay un problema en la parte de ___ del coche.", "atrás", "There's a problem at the [back] of the car.", "atrás = back, behind; la parte de atrás = the back part."),
      toEs("My room is upstairs.", "Mi habitación está arriba.", "estar for location; arriba = upstairs.", ["Mi cuarto está arriba.", "Mi dormitorio está arriba."]),
      toEs("The bus goes towards the center.", "El autobús va hacia el centro.", "hacia = towards.", ["El bus va hacia el centro.", "El autobús va hacia el centro de la ciudad."]),
      toEs("I'm against the plan.", "Estoy en contra del plan.", "estar en contra de = to be against (estar contra is also heard).", ["Estoy contra el plan.", "Yo estoy en contra del plan.", "Yo estoy contra el plan."]),
      toEn("—¿Se puede? —¡Adelante!", "May I come in? — Come in!", "Adelante! invites someone in.", ["Can I come in? — Come in!"]),
      toEn("Quiero un libro acerca de la cocina peruana.", "I want a book about Peruvian cooking.", "acerca de = about.", ["I want a book about Peruvian food.", "I'd like a book about Peruvian cooking."]),
      mt(
        "Match each word to its meaning.",
        [
          ["arriba", "up, upstairs"],
          ["abajo", "down, downstairs"],
          ["atrás", "back, behind"],
          ["adelante", "forward"],
        ],
        "Directions in and around the house."
      ),
    ]
  ),
  L(
    "a1-core-words-life",
    "Core Words: Life, Love & the World",
    "Big everyday nouns: la vida, el mundo, el amor, el momento, la suerte, la noticia, la manera and more.",
    "10 min",
    [
      sec(
        "Life and the world",
        "Many of these words appear in set phrases: ¡Qué suerte! (How lucky!), en este momento (right now), de acuerdo (OK, agreed), de todas formas (anyway), en realidad (actually).",
        [
          ["Así es la vida.", "That's life."],
          ["Es el mejor café del mundo.", "It's the best coffee in the world."],
          ["En este momento no puedo hablar.", "I can't talk right now."],
          ["¡Qué suerte tienes!", "You're so lucky!"],
          ["¿Vamos mañana? —De acuerdo.", "Shall we go tomorrow? — OK."],
          ["En realidad, no es mi casa: es de mi tía.", "Actually, it isn't my house: it's my aunt's."],
          ["¡Dios mío, qué tarde es!", "Oh my God, it's so late!"],
        ],
        [
          fe("En este ___ estoy en una reunión.", "momento", "At this [moment] I'm in a meeting.", "en este momento = right now."),
        ]
      ),
      sec(
        "People and feelings",
        "El amor (love), amar (to love, stronger than querer), el corazón (the heart), la esperanza (hope), la culpa (blame, fault), la paz (peace), la fuerza (strength).",
        [
          ["Te amo con todo mi corazón.", "I love you with all my heart."],
          ["No es tu culpa.", "It isn't your fault."],
          ["Necesito un poco de paz y tranquilidad.", "I need a bit of peace and quiet."],
          ["No tengo fuerza para nada.", "I don't have the strength for anything."],
          ["Mi mamá es una mujer muy fuerte.", "My mom is a very strong woman."],
          ["Ese hombre es un tipo muy serio.", "That man is a very serious guy."],
          ["La señorita de la recepción es muy amable.", "The young woman at reception is very kind."],
          ["El muchacho de la tienda habla tres idiomas.", "The young man at the shop speaks three languages."],
        ],
        [
          mc(
            "\"It's not your fault.\"",
            ["No es tu culpa.", "No es tu falta.", "No es tu suerte.", "No es tu cuidado."],
            0,
            "Culpa is blame or fault. Falta means a lack or a foul, suerte is luck, and cuidado is care."
          ),
        ]
      ),
      sec(
        "Work and news",
        "La noticia (a piece of news), el asunto (matter, issue), el negocio (business), el puesto (job, position; a market stall), la oportunidad (opportunity), el cambio (change), el plan, el secreto, la palabra (word), la manera / el modo (way).",
        [
          ["Tengo una buena noticia: tengo un puesto nuevo.", "I have good news: I have a new job."],
          ["Es una gran oportunidad.", "It's a great opportunity."],
          ["Mi tío tiene un negocio de muebles.", "My uncle has a furniture business."],
          ["Es un asunto privado.", "It's a private matter."],
          ["No hay manera de abrir esta caja.", "There's no way to open this box."],
          ["Cada uno tiene su modo de trabajar.", "Everyone has their own way of working."],
          ["No entiendo ni una palabra.", "I don't understand a word."],
          ["La camiseta cuesta veinte dólares.", "The T-shirt costs twenty dollars."],
          ["Me hace falta un cambio.", "I need a change."],
        ],
        []
      ),
    ],
    [
      fe("¡Qué ___! Ganas un viaje a Cancún.", "suerte", "What [luck]! You win a trip to Cancún.", "¡Qué suerte! = how lucky!"),
      fe("Es la mejor ciudad del ___.", "mundo", "It's the best city in the [world].", "el mundo = the world."),
      fe("Tengo una mala ___.", "noticia", "I have some bad [news].", "una noticia = a piece of news."),
      fe("No hay otra ___ de hacerlo.", "manera", "There's no other [way] to do it.", "la manera = the way. Forma and modo work too.", ["forma"]),
      toEs("That's life.", "Así es la vida.", "A set phrase.", ["Es la vida.", "Así es la vida!"]),
      toEs("OK, see you tomorrow.", "De acuerdo, hasta mañana.", "De acuerdo = OK, agreed.", ["De acuerdo, nos vemos mañana.", "Vale, hasta mañana.", "Vale, nos vemos mañana."]),
      toEs("It's a great opportunity for my business.", "Es una gran oportunidad para mi negocio.", "gran before the noun = great.", ["Es una oportunidad grande para mi negocio."]),
      toEs("Actually, I don't know the secret.", "En realidad, no sé el secreto.", "en realidad = actually.", ["En realidad no sé el secreto.", "En realidad, yo no sé el secreto."]),
      toEn("No es tu culpa, es un problema del sistema.", "It's not your fault, it's a problem with the system.", "la culpa = fault, blame.", ["It isn't your fault, it's a problem with the system.", "It's not your fault, it's a system problem."]),
      mt(
        "Match each word to its meaning.",
        [
          ["la vida", "life"],
          ["el amor", "love"],
          ["la paz", "peace"],
          ["la esperanza", "hope"],
          ["el recuerdo", "memory"],
        ],
        "Big words, small lesson."
      ),
    ]
  ),
];

/** Where each lesson goes in the A1 course order (sequencing.ts): the
 * lessons in each entry, in that order, right before the `before` slug.
 * Two optional missions (clothes shopping, the weather report) move with
 * them and become required. */
export const A1_CORE_PLACES: { slugs: string[]; before: string }[] = [
  { slugs: ["a1-core-verbs-everyday-actions"], before: "a1r-word-web-jobs" },
  { slugs: ["a1-my-day-routine"], before: "a1r-spiral-numbers-time-possessives" },
  { slugs: ["a1-core-words-time-linking", "a1-core-words-some-none-other"], before: "gustar-1" },
  { slugs: ["a1-word-web-body"], before: "a1r-dialogue-me-too-me-neither" },
  { slugs: ["a1-word-web-weather", "a1r-mission-weather-report"], before: "a1r-word-web-house" },
  { slugs: ["a1-word-web-clothes", "a1r-mission-clothes-shopping"], before: "a1r-spiral-people-descriptions" },
  { slugs: ["a1-core-verbs-things-happen", "a1-core-words-where", "a1-core-words-life"], before: "vocabulary-practice-4" },
];
