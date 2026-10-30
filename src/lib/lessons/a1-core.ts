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
    "Seventeen regular and stem-changing verbs you'll use every day: perder, ganar, olvidar, sacar, enviar and more.",
    "9 min",
    [
      sec(
        "Losing, winning, forgetting",
        [
          "The idea: a new verb only costs you its meaning. The infinitive ending (-ar, -er, -ir) tells you the endings, and a note like (ie), (ue) or (i) tells you it's a boot verb. After that, every rule you know applies: perder (ie) → pierdo, but perdemos; recordar (ue) → recuerdo, but recordamos.",
          "One spelling note: seguir (i) loses the u in yo to keep the hard g sound: sigo, sigues, sigue. Conseguir works the same: consigo.",
        ],
        [
          ["Siempre pierdo las llaves.", "I always lose my keys. (perder: e → ie)"],
          ["Nuestro equipo gana casi todos los partidos.", "Our team wins almost every match. (regular -ar)"],
          ["¿Olvidas algo? —No, creo que no.", "Are you forgetting something? — No, I don't think so."],
          ["No recuerdo su nombre.", "I don't remember her name. (recordar: o → ue)"],
          ["Sigo aquí, en la oficina.", "I'm still here, at the office. (seguir: sigo)"],
        ],
        [
          fe("Mi hijo siempre ___ el móvil.", "pierde", "My son always [loses] his phone.", "perder → pierde: e → ie inside the boot."),
          mc(
            "Perder is an e → ie verb. How do you say \"we lose\"?",
            ["perdemos", "pierdemos", "pierden", "perdimos"],
            0,
            "Nosotros is outside the boot, so the e stays: perdemos. \"Pierdemos\" puts the change in nosotros, pierden is they, and perdimos is the past tense."
          ),
        ]
      ),
      sec(
        "Taking out, sending, using",
        "Sacar (to take out, to get), enviar (to send), usar (to use), entrar (to go in) and mover (to move, o → ue) are all over daily life. Enviar is regular but carries an accent on the í wherever the stress falls on it: envío, envías, envía, envían (but enviamos).",
        [
          ["Saco dinero del cajero.", "I take money out of the cash machine."],
          ["Te envío la dirección por mensaje.", "I'll send you the address by text."],
          ["¿Usas el coche para ir al trabajo?", "Do you use the car to go to work?"],
          ["Entramos en el museo a las diez.", "We go into the museum at ten."],
          ["¿Puedes mover tu coche, por favor?", "Can you move your car, please?"],
        ],
        [
          mc(
            "\"My parents send a lot of messages.\"",
            ["Mis padres envían muchos mensajes.", "Mis padres envian muchos mensajes.", "Mis padres enviamos muchos mensajes.", "Mis padres envía muchos mensajes."],
            0,
            "Mis padres is ellos, so -an, and the stress falls on the í, which needs its accent: envían. \"Envian\" is missing the accent, enviamos is we, and envía is one person."
          ),
        ]
      ),
      sec(
        "Fixing, explaining, showing",
        "Arreglar (to fix, to tidy), explicar (to explain), mostrar (to show, o → ue), enseñar (to teach, to show), comenzar (to begin, e → ie), aceptar (to accept) and conseguir (to get, to manage, e → i).",
        [
          ["El técnico arregla la lavadora.", "The technician fixes the washing machine."],
          ["La profesora explica la lección otra vez.", "The teacher explains the lesson again."],
          ["Te muestro el apartamento.", "I'll show you the apartment. (mostrar: o → ue)"],
          ["La clase comienza a las seis.", "The class begins at six. (comenzar: e → ie)"],
          ["¿Aceptan tarjeta?", "Do you accept cards?"],
          ["No consigo abrir la puerta.", "I can't manage to open the door. (conseguir: consigo)"],
        ],
        [
          fe("¿Me ___ el problema, por favor?", "explicas", "Can you [explain] the problem to me, please?", "explicar → explicas (tú) or explica (usted). A present-tense question works as a polite request.", ["explica"]),
        ]
      ),
    ],
    [
      fe("Hoy el Real Madrid ___ el partido.", "gana", "Today Real Madrid [wins] the match.", "ganar → gana."),
      fe("Nunca ___ tu cumpleaños.", "olvido", "I never [forget] your birthday.", "olvidar → olvido (yo)."),
      fe("¿Por qué no ___ tú?", "entras", "Why don't [you go in]?", "entrar → entras."),
      fe("La película ___ a las siete.", "comienza", "The film [starts] at seven.", "comenzar → comienza: e → ie in the boot. Empezar means the same.", ["empieza"]),
      toEs("I always lose my glasses.", "Siempre pierdo mis gafas.", "perder → pierdo: e → ie. Lentes is common in Latin America.", ["Siempre pierdo las gafas.", "Siempre pierdo mis lentes.", "Siempre pierdo los lentes.", "Yo siempre pierdo mis gafas.", "Pierdo siempre mis gafas."]),
      toEs("Can you show me the room?", "¿Puedes mostrarme la habitación?", "poder + mostrar; the pronoun me goes on the end of the infinitive or before puedes.", ["¿Me puedes mostrar la habitación?", "¿Puede mostrarme la habitación?", "¿Me puede mostrar la habitación?", "¿Puedes enseñarme la habitación?", "¿Me puedes enseñar la habitación?"]),
      toEs("I'll send you an email tonight.", "Te envío un correo esta noche.", "enviar → envío (yo). Spanish often uses the present for a plan.", ["Te envío un email esta noche.", "Esta noche te envío un correo.", "Te mando un correo esta noche.", "Le envío un correo esta noche.", "Esta noche le envío un correo."]),
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
      fe("Nosotros ___ el partido.", "ganamos", "We [win] the match.", "Ganar is regular: ganamos."),
      fe("Yo no ___ tu nombre.", "recuerdo", "I don't [remember] your name.", "Recordar: o → ue: recuerdo."),
      fe("Ella ___ fotos de todo.", "saca", "She [takes] photos of everything.", "Sacar: ella → saca. Sacar fotos = to take photos."),
      toEs("The teacher (m.) explains the problem.", "El profesor explica el problema.", "Explicar: él → explica."),
      toEs("Uso el coche los sábados.", "Usamos el coche los sábados.", "Usar is a regular -ar verb: nosotros → usamos.", ["Nosotros usamos el coche los sábados.", "Usamos el carro los sábados.", "Nosotras usamos el coche los sábados."], "Change to nosotros."),
      toEs("Siempre perdemos el partido.", "Siempre pierden el partido.", "Ellos is inside the boot, so perder changes e → ie: pierden. Nosotros (perdemos) was outside it.", ["Pierden siempre el partido.", "Ellos siempre pierden el partido."], "Change to ellos."),
      toEs("Can you (informal) fix the lamp?", "¿Puedes arreglar la lámpara?", "Poder + arreglar (infinitive).", ["¿Tú puedes arreglar la lámpara?"]),
      toEs("Nosotros pierdemos las llaves.", "Nosotros perdemos las llaves.", "Nosotros is outside the boot, so perder keeps its e: perdemos.", ["Perdemos las llaves.", "Nosotras perdemos las llaves."], "Correct the sentence."),
      toEs("Yo no recordo la dirección.", "Yo no recuerdo la dirección.", "Recordar is an o → ue verb and yo is inside the boot: recuerdo.", ["No recuerdo la dirección."], "Correct the sentence."),
      toEs("La clase comenza a las ocho.", "La clase comienza a las ocho.", "Comenzar is an e → ie verb, and la clase (ella) is inside the boot: comienza.", ["La clase empieza a las ocho."], "Correct the sentence."),
      mc(
        "Devolver (to give back) works like volver (o → ue). \"I give back the book tomorrow.\"",
        ["Devuelvo el libro mañana.", "Devolvo el libro mañana.", "Devuelvemos el libro mañana.", "Devuelve el libro mañana."],
        0,
        "A verb built on volver copies its boot: vuelvo → devuelvo. \"Devolvo\" is missing the change, \"devuelvemos\" puts it in nosotros, and devuelve is he/she."
      ),
      { type: "speak", prompt: "Say it in Spanish: I always forget my password, so I can't send the email.", text: "Siempre olvido mi contraseña, así que no puedo enviar el correo.", explanation: "Olvido (regular, yo), puedo (o → ue) and enviar staying in the infinitive after poder." },
    ]
  ),
  L(
    "a1-my-day-routine",
    "My Day: Me Levanto, Me Ducho",
    "Describe an ordinary day from waking up to going to bed, using me levanto, me ducho and friends as set phrases.",
    "9 min",
    [
      sec(
        "The idea: me means \"myself\"",
        [
          "Many routine verbs describe something you do to yourself, and Spanish says so with me in front: levanto la caja is \"I lift the box\", so me levanto is \"I lift myself\": I get up. Despierto a mi hijo is \"I wake my son\"; me despierto is \"I wake (myself) up\". The me always goes right before the verb.",
          "Verbs that aren't done to yourself have no me: desayuno (I have breakfast), salgo (I leave), trabajo (I work). For now, learn the me-verbs as phrases for yo: me despierto, me levanto, me ducho, me visto. You'll see the full pattern (te levantas, se levanta) in the Elementary level.",
        ],
        [
          ["Levanto la caja. / Me levanto.", "I lift the box. / I get up. (me: I lift myself)"],
          ["Me despierto a las seis y media.", "I wake up at six thirty."],
          ["Me levanto a las siete.", "I get up at seven."],
          ["Me ducho y me visto.", "I shower and get dressed."],
          ["Desayuno café con tostadas.", "I have coffee and toast for breakfast. (no me: not done to yourself)"],
        ],
        [
          fe("___ a las siete menos cuarto.", "Me levanto", "[I get up] at a quarter to seven.", "Me levanto = I get up (I lift myself): the me is part of the phrase.", ["me levanto"]),
          mc(
            "Afeitar means \"to shave\". How do you say \"I shave every morning\"?",
            ["Me afeito todas las mañanas.", "Afeito todas las mañanas.", "Me afeita todas las mañanas.", "Afeito me todas las mañanas."],
            0,
            "You shave yourself, so the verb takes me, right before the yo form: me afeito. Without me you'd be shaving someone else, \"afeita\" is the él / ella form, and me never goes after the verb here."
          ),
        ]
      ),
      sec(
        "Day and evening",
        [
          "Link the steps of your day with sequence words: luego and entonces both mean then; durante means during; mientras means while; casi siempre means almost always. Times use a las (a la una): Regreso a casa a las seis.",
        ],
        [
          ["Luego salgo de casa y tomo el autobús.", "Then I leave home and take the bus."],
          ["Durante el día trabajo en una oficina.", "During the day I work in an office."],
          ["Regreso a casa a las seis.", "I come back home at six."],
          ["Me siento en el sofá y leo un rato.", "I sit down on the sofa and read for a while. (me siento: I sit myself down)"],
          ["Mientras ceno, escucho la radio.", "While I have dinner, I listen to the radio."],
          ["Entonces me acuesto, normalmente a las once.", "Then I go to bed, normally at eleven."],
        ],
        [
          mc(
            "\"I go to bed at midnight.\"",
            ["Me acuesto a medianoche.", "Acuesto a medianoche.", "Me acuesta a medianoche.", "Yo acostar a medianoche."],
            0,
            "Me acuesto = I go to bed (I put myself to bed). Without me it means putting someone else to bed, \"acuesta\" is he/she, and \"acostar\" is the infinitive."
          ),
          fe(
            "Escucho música ___ cocino.",
            "mientras",
            "I listen to music [while] I cook.",
            "Mientras = while: two things happening at the same time. Luego (then) would put them one after the other."
          ),
        ]
      ),
    ],
    [
      fe("Los lunes ___ muy temprano.", "me despierto", "On Mondays [I wake up] very early.", "Me despierto = I wake up: you wake yourself, so me.", ["Me despierto"]),
      fe("___ con agua fría.", "Me ducho", "[I shower] with cold water.", "Me ducho = I shower (myself).", ["me ducho"]),
      fe("___ a casa a las siete.", "Regreso", "[I come back] home at seven.", "regresar → regreso, with no me: you don't do it to yourself. Volver means the same: vuelvo.", ["Vuelvo"]),
      fe("Leo ___ el desayuno.", "durante", "I read [during] breakfast.", "Durante = during, followed by a noun (el desayuno)."),
      fe("Me ducho y ___ salgo de casa.", "luego", "I shower and [then] I leave home.", "Luego (or entonces) = then.", ["entonces"]),
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
      mc(
        "\"I get up at eight.\"",
        ["Levanto a las ocho.", "Me levanto a las ocho.", "Me levanta a las ocho.", "Yo levanto me a las ocho."],
        1,
        "The me goes before the verb, and the verb is in the yo form. \"Levanto\" alone would need an object (levanto la caja), \"levanta\" is he/she, and me can't follow the verb here."
      ),
      toEs("Me levanto a las siete.", "Me levanto a las seis y media.", "Only the time changes: a las seis y media. Me levanto stays the same.", [], "Change the time to 6:30."),
      toEs("Me ducho por la noche.", "Me ducho por la mañana.", "Por la mañana = in the morning; me ducho doesn't change.", ["Me ducho en la mañana."], "Change it to the morning."),
      toEs("Me acuesto a las once.", "Me acuesto a las diez y media.", "Half past ten: a las diez y media. Me acuesto = I go to bed.", [], "Change the time to half past ten."),
      toEs(
        "Desayuno y leo el periódico.",
        "Mientras desayuno, leo el periódico.",
        "Mientras (while) joins two things happening at the same time. Desayunar needs no me.",
        ["Leo el periódico mientras desayuno."],
        "Turn it into one sentence with mientras."
      ),
      toEs("Despierto a las cinco.", "Me despierto a las cinco.", "You wake yourself up, so the phrase needs me: me despierto.", [], "Correct the sentence."),
      toEs("Me trabajo en una oficina.", "Trabajo en una oficina.", "Working isn't something you do to yourself, so trabajar takes no me.", [], "Correct the sentence."),
      toEs("Yo visto me en mi habitación.", "Me visto en mi habitación.", "Me goes right before the verb: me visto. (Yo me visto is also fine.)", ["Yo me visto en mi habitación."], "Correct the sentence."),
      toEs("Me acuesta a las doce.", "Me acuesto a las doce.", "With me (yo), the verb takes the yo ending: acuesto. Acuesta is the él / ella form.", [], "Correct the sentence."),
      toEs(
        "I get up, I shower and then I have breakfast.",
        "Me levanto, me ducho y luego desayuno.",
        "Me levanto and me ducho take me; desayuno doesn't. Luego = then.",
        ["Me levanto, me ducho y después desayuno.", "Me levanto, me ducho y entonces desayuno."]
      ),
      toEs(
        "I get dressed while I listen to the news.",
        "Me visto mientras escucho las noticias.",
        "Mientras = while; me visto takes me, escucho doesn't.",
        ["Me visto mientras oigo las noticias.", "Mientras escucho las noticias, me visto."]
      ),
      toEs(
        "I almost always go to bed at eleven.",
        "Casi siempre me acuesto a las once.",
        "Casi siempre = almost always; it usually goes before me acuesto.",
        ["Me acuesto casi siempre a las once.", "Casi siempre me acuesto a las 11."]
      ),
      toEn(
        "Me siento en la terraza y tomo un café.",
        "I sit down on the terrace and have a coffee.",
        "Me siento = I sit (myself) down.",
        ["I sit on the terrace and have a coffee.", "I sit down on the terrace and drink a coffee."]
      ),
      wo("Durante la semana me levanto a las seis.", "Time phrase first, then me + verb.", "During the week I get up at six."),
      wo("Luego me visto y tomo el autobús", "Luego (then) opens the sentence; me goes right before visto.", "Then I get dressed and take the bus"),
      {
        type: "speak",
        prompt: "Say it in Spanish: I wake up at seven, I shower and then I have breakfast.",
        text: "Me despierto a las siete, me ducho y luego desayuno.",
        explanation: "Me despierto and me ducho take me (you do them to yourself); desayuno doesn't. A las + time says when.",
      },
    ]
  ),
  L(
    "a1-core-words-time-linking",
    "Core Words: Then, Still, Almost, Also",
    "The small words that hold sentences together: entonces, todavía, aún, casi, además, aunque, quizás and more.",
    "10 min",
    [
      sec(
        "Time words: where you are on the timeline",
        [
          "Todavía and aún both mean still: the situation goes on. Add no and they mean the thing hasn't started: todavía no = not yet (literally \"still not\"). Casi (almost) sits right before the word it softens: casi siempre, casi las diez.",
          "Entonces is then or so: what follows from what was said. Luego is later or afterwards: what comes next in time (hasta luego = see you later).",
        ],
        [
          ["Todavía vivo con mis padres.", "I still live with my parents. (the situation continues)"],
          ["Aún no sé la respuesta.", "I don't know the answer yet. (aún no: still not = not yet)"],
          ["¿Entonces vienes o no?", "So are you coming or not? (entonces: what follows)"],
          ["Hasta luego.", "See you later. (luego: later in time)"],
          ["Son casi las diez.", "It's almost ten. (casi right before what it softens)"],
        ],
        [
          fe("___ no tengo coche.", "Todavía", "I [still] don't have a car.", "Todavía no = not yet / still not. Aún no means the same.", ["Aún"]),
          mc("\"She isn't here yet.\"", ["Todavía no está aquí.", "Todavía está aquí.", "Entonces no está aquí.", "Casi está aquí."], 0, "Not yet = todavía no (still not). Without no, todavía está aquí means she's still here; entonces means so, and casi means almost."),
        ]
      ),
      sec(
        "Adding and contrasting",
        [
          "Además adds a point that pushes the same way (besides, also). Aunque introduces an obstacle that doesn't stop the main idea (although). Incluso pushes to the extreme (even). Pues at the start of a sentence buys time: well, so.",
          "Ni... ni denies both things (neither... nor). When it comes after the verb, Spanish keeps no in front of the verb as well. Ni siquiera (not even) can open the sentence on its own, and then it replaces no.",
        ],
        [
          ["El piso es grande y, además, es barato.", "The flat is big and, besides, it's cheap. (además: same direction)"],
          ["Trabaja incluso los domingos.", "She works even on Sundays. (incluso: the extreme)"],
          ["Aunque estoy cansado, salgo con mis amigos.", "Although I'm tired, I go out with my friends. (aunque: an obstacle that doesn't stop you)"],
          ["Pues… no sé.", "Well… I don't know."],
          ["No bebo ni café ni té.", "I drink neither coffee nor tea. (no before the verb, ni... ni after it)"],
          ["Ni siquiera sé su nombre.", "I don't even know her name. (ni siquiera first: no extra no)"],
        ],
        [
          mc(
            "\"Although it's late, I keep working.\"",
            ["Aunque es tarde, sigo trabajando.", "Además es tarde, sigo trabajando.", "Pues es tarde, sigo trabajando.", "Incluso es tarde, sigo trabajando."],
            0,
            "Being late is an obstacle that doesn't stop you, so aunque. Además would add a reason in the same direction, pues is \"well\", and incluso means even."
          ),
          mc("\"I don't even have time.\"", ["Ni siquiera tengo tiempo.", "Ni siquiera no tengo tiempo.", "Incluso tengo tiempo.", "Además no tengo tiempo."], 0, "Ni siquiera opens the sentence and already carries the negative, so no extra no. Incluso tengo tiempo means \"I even have time\", and además adds a separate point (besides)."),
        ]
      ),
      sec(
        "How sure, how much",
        [
          "Quizás and probablemente show doubt; realmente and simplemente add weight; por supuesto means of course.",
          "Amount words (bastante, suficiente, demasiado, tanto) agree like adjectives when they come before a noun: suficientes sillas, demasiada comida, tantos libros. After a verb they describe the action and never change: trabajas demasiado, trabajas tanto.",
        ],
        [
          ["Quizás llueve mañana.", "Maybe it'll rain tomorrow. (doubt)"],
          ["Probablemente es su hermano.", "He's probably her brother. (doubt)"],
          ["¿Puedo pasar? —¡Por supuesto!", "Can I come in? — Of course!"],
          ["Realmente no entiendo el problema.", "I really don't understand the problem."],
          ["Hay bastante comida para todos.", "There's quite enough food for everyone. (before a noun: agrees with comida)"],
          ["No tengo suficiente dinero.", "I don't have enough money."],
          ["¡Trabajas tanto!", "You work so much! (after a verb: no change)"],
          ["Hoy estoy mal; simplemente necesito dormir.", "I feel bad today; I simply need to sleep."],
        ],
        [
          fe("¿Me ayudas? —¡___!", "Por supuesto", "Will you help me? — [Of course]!", "Por supuesto = of course. Claro means the same.", ["por supuesto", "Claro"]),
          fe("Hay ___ gente en el metro.", "demasiada", "There are [too many] people on the metro.", "Before a noun, demasiado agrees with it: gente is feminine singular, so demasiada gente.", ["mucha"]),
        ]
      ),
    ],
    [
      fe("Es ___ medianoche.", "casi", "It's [almost] midnight.", "Casi = almost; it goes right before what it softens."),
      fe("No tengo hambre, ___ como un poco.", "aunque", "I'm not hungry, [although] I'll eat a little.", "Not being hungry is an obstacle that doesn't stop you eating: aunque."),
      fe("___ el lunes es mejor.", "Quizás", "[Maybe] Monday is better.", "Quizás = maybe, perhaps: it shows doubt. Tal vez means the same.", ["Tal vez", "Quizá"]),
      fe("No hay ___ sillas para todos.", "suficientes", "There aren't [enough] chairs for everyone.", "Before a noun, suficiente agrees in number: suficientes sillas. Bastantes works too.", ["bastantes"]),
      toEs("I still work in the same office.", "Todavía trabajo en la misma oficina.", "Todavía = still: the situation goes on.", ["Aún trabajo en la misma oficina.", "Sigo trabajando en la misma oficina.", "Yo todavía trabajo en la misma oficina."]),
      toEs("The hotel is cheap and, besides, it's near the beach.", "El hotel es barato y, además, está cerca de la playa.", "Además adds a second point in the same direction; estar for location.", ["El hotel es barato y además está cerca de la playa."]),
      toEs("Ni siquiera no tiene teléfono.", "Ni siquiera tiene teléfono.", "When ni siquiera opens the sentence it is already negative, so the extra no goes. (After the verb you'd keep no: No tiene ni siquiera teléfono.)", ["No tiene ni siquiera teléfono.", "Ella ni siquiera tiene teléfono.", "Ni siquiera tiene un teléfono."], "Correct the sentence."),
      toEs("You work too much.", "Trabajas demasiado.", "After a verb, demasiado describes the action and never changes form.", ["Tú trabajas demasiado.", "Usted trabaja demasiado."]),
      mc("Someone asks you a hard question and you answer \"Pues... no sé qué decir.\" What does pues do here?", ["It buys time, like \"Well...\"", "It gives a reason, like \"Because...\"", "It means \"Then\" in time", "It means \"Of course\""], 0, "At the start of a reply, pues is a thinking word: well, so. Because is porque, then (later) is luego, and of course is por supuesto."),
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
      toEs("No hay suficiente dinero.", "No hay suficientes personas.", "Before a noun, suficiente agrees: personas is plural, so suficientes.", ["No hay bastantes personas."], "Change dinero to personas."),
      toEs("Todavía vivo en Madrid.", "Todavía no vivo en Madrid.", "Todavía + no = not yet: the move hasn't happened. No goes right after todavía (or no... todavía).", ["Aún no vivo en Madrid.", "No vivo en Madrid todavía.", "Todavía no vivo en Madrid."], "Make it negative."),
      toEs("Además es muy caro, compro el libro.", "Aunque es muy caro, compro el libro.", "The price is an obstacle that doesn't stop you, so aunque (although). Además would add a reason in the same direction.", ["Aunque es muy caro, yo compro el libro."], "Correct the sentence."),
    ]
  ),
  L(
    "a1-core-words-some-none-other",
    "Core Words: Other, Some, None, Last, Only",
    "Otro, alguno, ninguno, cualquier, último, único, próximo, propio: the words that pick out which one.",
    "10 min",
    [
      sec(
        "Otro: another, other",
        "Otro already contains the \"a\" of English an-other, so it never takes un: otro café, not un otro café (that would say \"a an-other coffee\"). It agrees like any adjective: otro día, otra vez, otros amigos, otras cosas.",
        [
          ["¿Quieres otro café?", "Do you want another coffee? (no un)"],
          ["Otra vez, por favor.", "Once more, please. (otra: vez is feminine)"],
          ["Los otros están en la cocina.", "The others are in the kitchen. (el / los is fine: \"the other\")"],
        ],
        [
          mc(
            "\"I need another chair.\"",
            ["Necesito otra silla.", "Necesito una otra silla.", "Necesito otro silla.", "Necesito otras silla."],
            0,
            "Otra agrees with silla (feminine singular), and there's no una in front, because otro already means \"another\"."
          ),
          fe("¿Tienes ___ bolígrafo?", "otro", "Do you have [another] pen?", "Bolígrafo is masculine singular, so otro, with no un before it."),
        ]
      ),
      sec(
        "Alguno, ninguno, cualquier",
        [
          "Alguno (some, any) and ninguno (no, none) lose their -o right before a masculine singular noun, just like uno → un and bueno → buen: algún día, ningún problema. Before feminine or plural nouns they keep their full form: alguna pregunta, algunos amigos.",
          "When ninguno comes after the verb, Spanish keeps no in front of the verb too (no hay ningún problema). Cualquier means any at all and goes before a noun; cualquiera stands alone: anyone, any one.",
        ],
        [
          ["¿Tienes alguna pregunta?", "Do you have any questions? (feminine: full form)"],
          ["Algún día quiero vivir en la playa.", "Some day I want to live at the beach. (masculine singular: algún)"],
          ["No hay ningún problema.", "There's no problem at all. (no + verb + ningún)"],
          ["Ninguno de mis amigos habla inglés.", "None of my friends speaks English. (alone: full form)"],
          ["Puedes venir cualquier día.", "You can come any day."],
        ],
        [
          fe("No tengo ___ idea.", "ninguna", "I have [no] idea.", "Idea is feminine, so the full form ninguna (only masculine singular shortens). The everyday phrase no tengo ni idea is also right.", ["ni"]),
          mc("\"Is there a bus at night?\" (any bus at all)", ["¿Hay algún autobús por la noche?", "¿Hay alguno autobús por la noche?", "¿Hay alguna autobús por la noche?", "¿Hay algunos autobús por la noche?"], 0, "Autobús is masculine singular, so alguno shortens to algún right before it, like uno → un. Alguna is feminine and algunos plural."),
        ]
      ),
      sec(
        "Último, único, próximo, propio, cierto",
        "These pick out which one, so they usually go before the noun, like a number would: el último tren (the last train), el único hotel (the only hotel), la próxima semana (next week), mi propio negocio (my own business). Próximo can also follow (la semana próxima); after the noun, único means \"unique\". Cierto means certain or true: es cierto (it's true).",
        [
          ["El último autobús sale a las doce.", "The last bus leaves at twelve."],
          ["Es el único restaurante abierto.", "It's the only restaurant that's open."],
          ["La próxima semana estoy de vacaciones.", "Next week I'm on vacation."],
          ["Quiero tener mi propio negocio.", "I want to have my own business."],
          ["¿Es cierto que te vas? —Sí, es cierto.", "Is it true you're leaving? — Yes, it's true."],
          ["Eres el único amigo que tengo aquí. Siempre estoy contigo.", "You're the only friend I have here. I'm always with you."],
        ],
        [
          fe("La ___ semana empiezo un trabajo nuevo.", "próxima", "[Next] week I start a new job.", "Próximo agrees with semana: la próxima semana."),
        ]
      ),
    ],
    [
      fe("¿Hay ___ farmacia cerca?", "alguna", "Is there [a / any] pharmacy nearby?", "Farmacia is feminine, so the full form alguna. Una is also fine here.", ["una"]),
      fe("Es la ___ vez que vengo aquí.", "última", "It's the [last] time I come here.", "Último agrees with vez (feminine): última."),
      fe("No hay ___ problema.", "ningún", "There's [no] problem.", "Ninguno → ningún right before a masculine singular noun, and no stays before hay."),
      fe("Puedes llamar a ___ hora.", "cualquier", "You can call at [any] time.", "Cualquier before a noun, masculine or feminine; cualquiera only when it stands alone."),
      toEs("Do you want another beer?", "¿Quieres otra cerveza?", "Otra agrees with cerveza, with no una in front.", ["¿Quiere otra cerveza?", "¿Quiere usted otra cerveza?", "¿Tú quieres otra cerveza?"]),
      toEs("She's my only sister.", "Es mi única hermana.", "Único → única with hermana, before the noun because it means 'only'.", ["Ella es mi única hermana."]),
      toEs("I want to go with you.", "Quiero ir contigo.", "Ir = to go; con + ti → contigo; con + mí → conmigo.", ["Yo quiero ir contigo.", "Quiero ir con usted."]),
      toEs("Next year I want my own apartment.", "El próximo año quiero mi propio apartamento.", "Propio goes before the noun; próximo usually does too, though el año próximo is also correct.", ["El año próximo quiero mi propio apartamento.", "El próximo año quiero mi propio piso.", "El año que viene quiero mi propio apartamento.", "El año que viene quiero mi propio piso."]),
      mc("¿Es cierto? No tengo ninguna noticia. What does the speaker mean?", ["Is it true? I haven't heard any news.", "It's certain: I have some news.", "Is it true? I have only one piece of news.", "It's close. I have no idea."], 0, "Cierto = true, and no + ninguna = not any: \"I don't have any news.\" Ninguna is feminine because noticia is."),
      ms(
        "Which sentences are correct?",
        ["Quiero un otro té.", "Quiero otro té.", "No tengo ningún hermano.", "No tengo ninguno hermano."],
        [1, 2],
        "Otro takes no un, and ninguno shortens to ningún before a masculine singular noun."
      ),
      toEs("Necesito otro libro.", "Necesito otros libros.", "Otro agrees like an adjective: otros libros.", ["Yo necesito otros libros."], "Make it plural."),
      toEs("Hay algún banco cerca.", "No hay ningún banco cerca.", "Alguno → ninguno, and Spanish keeps no before the verb: no hay ningún banco. Both shorten before masculine banco.", [], "Make it negative."),
      toEs("No tengo ninguno libro de español.", "No tengo ningún libro de español.", "Right before a masculine singular noun, ninguno drops its -o: ningún libro.", ["No tengo ningún libro en español."], "Correct the sentence."),
      toEs("Cualquiera persona puede venir.", "Cualquier persona puede venir.", "Before a noun the short form cualquier is used (for masculine and feminine). Cualquiera stands alone: Cualquiera puede venir.", ["Cualquiera puede venir."], "Correct the sentence."),
    ]
  ),
  L(
    "a1-word-web-body",
    "Word Web: The Body & Feeling Unwell",
    "Head, eyes, feet and heart, plus me duele and tengo dolor de for telling a doctor what's wrong.",
    "10 min",
    [
      sec(
        "The idea: the pronoun already says whose",
        [
          "With body parts Spanish uses el / la / los / las, not mi / tu: Me duele la cabeza (my head hurts). The small pronoun (me, te, le) already tells you whose body it is, so a possessive would say it twice.",
          "Learn each part with its article. Most -o words are masculine and most -a words feminine, but watch la mano: feminine, even though it ends in -o.",
        ],
        [
          ["la cabeza", "the head"],
          ["el ojo, los ojos", "the eye, the eyes"],
          ["el oído / la oreja", "the (inner) ear / the (outer) ear"],
          ["la mano, el brazo", "the hand, the arm (la mano: feminine despite the -o)"],
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
            "Four body words from this lesson, each learned with its article."
          ),
          mc("Which is correct?", ["la mano derecha", "el mano derecho", "la mano derecho", "el mano derecha"], 0, "Mano is the famous exception: it ends in -o but is feminine, so la mano and the adjective agrees too: derecha."),
        ]
      ),
      sec(
        "Me duele: it hurts",
        [
          "Doler (to hurt) works like gustar: the part that hurts is the subject. One part → me duele; several → me duelen. Change the person with the pronoun: te duele, le duele, nos duele, and add a + person to make le clear.",
          "Another way: tengo dolor de + body part, with no article after de: tengo dolor de cabeza.",
        ],
        [
          ["Me duele la cabeza.", "I have a headache. (My head hurts: one part, duele)"],
          ["Me duelen los pies.", "My feet hurt. (several parts: duelen)"],
          ["Tengo dolor de oído.", "I have an earache. (dolor de + part, no article)"],
          ["¿Te duele el estómago?", "Does your stomach hurt? (te: your)"],
        ],
        [
          fe("Me ___ los ojos.", "duelen", "My eyes [hurt].", "Los ojos is plural → duelen, just like gustan."),
          mc("\"Her throat hurts.\" (la garganta = the throat)", ["Le duele la garganta.", "Le duelen la garganta.", "Le duele su garganta.", "Ella duele la garganta."], 0, "One part, so duele; le says it's her throat, so the part just takes la. Duelen is plural, su repeats what le already says, and ella duele makes her the subject instead of the throat."),
        ]
      ),
      sec(
        "At the doctor's",
        "The doctor asks ¿Qué le pasa? (What's wrong?, usted) and might say ten cuidado (be careful) or no es nada serio (it's nothing serious).",
        [
          ["—¿Qué le pasa? —Me duele la espalda.", "What's wrong? — My back hurts."],
          ["—No es nada serio. Tiene que descansar.", "It's nothing serious. You have to rest."],
          ["Ten cuidado con el pie.", "Be careful with your foot. (el pie: no tu needed)"],
          ["El cuerpo necesita dormir.", "The body needs sleep."],
        ],
        [
          mc("The doctor says: \"No es nada serio, pero tiene que descansar.\" What should you do?", ["Rest: it's nothing serious.", "Go to hospital: it's very serious.", "Nothing at all: you're not ill.", "Exercise more."], 0, "No es nada serio = it's nothing serious, and tiene que descansar = you have to rest (tener que + infinitive)."),
        ]
      ),
    ],
    [
      fe("Me ___ la espalda.", "duele", "My back [hurts].", "La espalda is singular → duele."),
      fe("Tengo dolor de ___.", "cabeza", "I have a [head]ache.", "Tener dolor de + body part, with no article after de."),
      fe("Mi abuelo tiene un problema de ___.", "corazón", "My grandfather has a [heart] problem.", "El corazón = the heart."),
      toEs("My knees hurt. (la rodilla = the knee)", "Me duelen las rodillas.", "A new word, the same rule: several knees → duelen, with las, not mis."),
      toEs("Does your head hurt?", "¿Te duele la cabeza?", "Te duele + la cabeza: te already says 'your'.", ["¿Le duele la cabeza?"]),
      toEs("It's nothing serious.", "No es nada serio.", "No… nada = nothing; serio agrees with nada (masculine).", ["No es nada grave."]),
      toEs("I have an earache and my eyes hurt.", "Tengo dolor de oído y me duelen los ojos.", "Dolor de oído; los ojos → duelen.", ["Me duele el oído y me duelen los ojos."]),
      mc("A sign says: \"¡Ten cuidado! El suelo está mojado.\" What does it tell you?", ["Be careful: the floor is wet.", "Take care of the floor: clean it.", "Hurry: the floor is closed.", "Careful: the floor is dirty."], 0, "Ten cuidado = be careful, and mojado = wet. Estar describes the floor's state right now."),
      mc(
        "\"My hands hurt.\"",
        ["Me duelen las manos.", "Me duele las manos.", "Me duelen mis manos.", "Yo duelo las manos."],
        0,
        "Plural manos → duelen, with las. \"Duele\" is singular, Spanish uses las rather than mis here, and \"yo duelo\" wrongly makes the person the subject: with doler, the part that hurts is the subject."
      ),
      wo("Me duele mucho el brazo derecho.", "Me duele + mucho + the body part.", "My right arm hurts a lot."),
      toEs("Me duelen los ojos.", "A Pedro le duelen los ojos.", "Only the pronoun changes: me → le, with a Pedro to say who le is. The eyes are still plural, so duelen.", ["Le duelen los ojos."], "Change it to Pedro."),
      toEs("Me duele mis piernas.", "Me duelen las piernas.", "Two fixes: las piernas is plural, so duelen; and with body parts Spanish uses las, not mis, because me already says whose.", [], "Correct the sentence."),
      toEs("Mi hermana le duele el brazo.", "A mi hermana le duele el brazo.", "Your sister isn't the subject (el brazo is), so she needs a in front: a mi hermana le duele, exactly like gustar.", [], "Correct the sentence."),
    ]
  ),
  L(
    "a1-word-web-weather",
    "Word Web: Weather & Seasons",
    "Hace frío, llueve, está nublado: talk about the weather, the sky and the seasons.",
    "9 min",
    [
      sec(
        "The idea: hace + a noun",
        [
          "Weather you feel on your skin is a noun after hace (from hacer): hace frío, hace calor, hace sol, hace viento, hace buen / mal tiempo. Literally it's \"it makes cold\", so there's no word for \"it\" and the verb is always hace.",
          "Because frío, calor and viento are nouns, \"very\" is mucho, never muy: hace mucho frío. To ask: ¿Qué tiempo hace?",
        ],
        [
          ["¿Qué tiempo hace hoy? —Hace sol.", "What's the weather like today? — It's sunny."],
          ["En invierno hace mucho frío.", "In winter it's very cold. (frío is a noun: mucho)"],
          ["Hoy hace demasiado calor para salir.", "Today it's too hot to go out."],
        ],
        [
          fe("Hoy ___ viento.", "hace", "Today [it's] windy.", "Weather you feel takes hace + noun: hace viento."),
          mc("\"It's very windy.\"", ["Hace mucho viento.", "Hace muy viento.", "Es mucho viento.", "Está mucho viento."], 0, "Viento is a noun, so \"very\" is mucho, and weather takes hace. Muy only goes with adjectives, and ser / estar don't make weather with a noun."),
        ]
      ),
      sec(
        "Rain, snow, clouds",
        [
          "What falls from the sky has its own verb, so no hace: llover → llueve (it's raining, it rains), nevar → nieva (it snows).",
          "How the sky looks is estar + adjective: está nublado (it's cloudy), el cielo está gris. Things you see in the sky or the air are hay + noun: hay nubes (there are clouds).",
        ],
        [
          ["Llueve mucho en Galicia.", "It rains a lot in Galicia. (own verb: llueve)"],
          ["En la montaña nieva en enero.", "In the mountains it snows in January. (own verb: nieva)"],
          ["El cielo está nublado y hay poca luz.", "The sky is cloudy and there's little light. (estar + adjective; hay + noun)"],
          ["La tierra está mojada.", "The ground is wet."],
        ],
        [
          mc(
            "\"It's raining.\"",
            ["Llueve.", "Hace lluvia.", "Es lluvia.", "Está llover."],
            0,
            "Rain has its own verb: llueve (or está lloviendo). \"Hace lluvia\" isn't used, es lluvia means \"it is rain\", and está can't go with an infinitive."
          ),
          fe("Hoy ___ niebla y no veo nada.", "hay", "Today [there's] fog and I can't see anything.", "Niebla (fog) is a new word, but it's a thing in the air, like clouds: hay niebla."),
        ]
      ),
      sec(
        "The seasons",
        "la primavera (spring), el verano (summer), el otoño (autumn), el invierno (winter). As a subject, a season takes its article (el verano es...); after en it usually drops it (en verano). In the southern hemisphere, summer is December to February.",
        [
          ["En verano hace calor y los días son largos.", "In summer it's hot and the days are long. (en verano: no article)"],
          ["El otoño es mi estación favorita.", "Autumn is my favorite season. (subject: el otoño)"],
          ["En primavera hace buen tiempo, pero a veces llueve.", "In spring the weather is nice, but sometimes it rains."],
        ],
        [
          mc("\"Winter is very long here.\"", ["El invierno es muy largo aquí.", "Invierno es muy largo aquí.", "En invierno es muy largo aquí.", "El invierno hace muy largo aquí."], 0, "Winter is the subject, so it takes its article: el invierno es... Without el it sounds like a label, en invierno means \"in winter\", and hacer is only for weather nouns."),
        ]
      ),
    ],
    [
      fe("En invierno ___ mucho en la montaña.", "nieva", "In winter it [snows] a lot in the mountains.", "Snow falls from the sky, so it has its own verb: nevar → nieva."),
      fe("El ___ está azul y no hay nubes.", "cielo", "The [sky] is blue and there are no clouds.", "El cielo = the sky, described with estar."),
      fe("Hoy ___ mal tiempo.", "hace", "Today the weather [is] bad.", "Hace mal tiempo = the weather is bad."),
      toEs("It's very cold today.", "Hoy hace mucho frío.", "Frío is a noun here, so mucho, not muy.", ["Hace mucho frío hoy."]),
      toEs("It's cloudy and it's raining.", "Está nublado y llueve.", "Estar for how the sky looks; llueve for rain.", ["Está nublado y está lloviendo."]),
      toEs("In summer it's hot.", "En verano hace calor.", "Hace calor = it's hot (weather).", ["En el verano hace calor.", "Hace calor en verano."]),
      toEs("En primavera hay mucho luz y hace bueno tiempo.", "En primavera hay mucha luz y hace buen tiempo.", "Two fixes: luz is feminine, so mucha; and bueno shortens to buen before a masculine noun: buen tiempo.", [], "Correct the sentence."),
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
      toEs("Hoy hace sol.", "Hoy no hace sol.", "No goes right before hace.", ["No hace sol hoy."], "Make it negative."),
      toEs("Hoy hace lluvia.", "Hoy llueve.", "Rain has its own verb, llover → llueve; it never goes with hace.", ["Hoy está lloviendo.", "Llueve hoy."], "Correct the sentence."),
    ]
  ),
  L(
    "a1-word-web-clothes",
    "Word Web: Clothes",
    "Shirts, trousers, shoes and coats, plus llevar (to wear) and me pongo (I put on).",
    "8 min",
    [
      sec(
        "The idea: llevar is what you have on; ponerse is the moment you put it on",
        [
          "Llevar means to wear (and to carry): it describes clothes already on you. Ponerse means to put on: it's the action, so it goes with moments like \"it's cold, so…\" or \"before I go out…\". Me pongo = I put on, te pones = you put on, se pone = he / she puts on.",
          "With clothes on your own body, Spanish normally uses el / la / los / las, not mi / tu: the me in me pongo already says whose it is. Me pongo el abrigo = I put on my coat.",
        ],
        [
          ["la camisa, la camiseta", "the shirt, the T-shirt"],
          ["los pantalones, la falda, el vestido", "the trousers, the skirt, the dress"],
          ["los zapatos, las botas, los calcetines", "the shoes, the boots, the socks"],
          ["el abrigo, la chaqueta, el jersey", "the coat, the jacket, the sweater"],
          ["Hoy llevo una camisa blanca.", "Today I'm wearing a white shirt. (what's on me now: llevar)"],
          ["Hace frío, así que me pongo el abrigo.", "It's cold, so I put on my coat. (the action: ponerse; el, not mi)"],
        ],
        [
          fe("Siempre ___ vaqueros al trabajo.", "llevo", "I always [wear] jeans to work.", "Wearing as a habit or state is llevar → llevo (usar is also common in Latin America).", ["uso"]),
          mc(
            "It starts to rain. \"I put on my boots.\" Which is best?",
            ["Me pongo las botas.", "Llevo las botas.", "Me pongo a las botas.", "Pongo las botas."],
            0,
            "Putting on is the action, so ponerse: me pongo, with las (the me already says whose). Llevo las botas means you already have them on, a doesn't belong after ponerse, and pongo without me means to put something somewhere."
          ),
        ]
      ),
      sec(
        "Describing clothes: noun first, then a matching adjective",
        [
          "Colors and other adjectives go after the noun and agree with it: una chaqueta vieja, unos zapatos nuevos. Adjectives ending in -o change to -a, -os, -as; those ending in -e or a consonant (verde, azul, gris) only add -s / -es for the plural.",
          "The gender comes from the noun, and the ending is a good guide: -a is usually feminine (la camisa, la falda), -o masculine (el vestido, el abrigo).",
        ],
        [
          ["Estos zapatos son viejos, pero son cómodos.", "These shoes are old, but they're comfortable."],
          ["Es un vestido muy especial: es de mi abuela.", "It's a very special dress: it's my grandmother's."],
          ["Esta camisa es diferente. Es un poco rara, pero es bonita.", "This shirt is different. It's a bit strange, but it's nice."],
          ["¡Qué abrigo tan lindo!", "What a lovely coat!"],
          ["Es una chaqueta hermosa.", "It's a beautiful jacket."],
          ["Llevo unos calcetines azules.", "I'm wearing blue socks. (azul → azules: no -o/-a)"],
        ],
        [
          mc(
            "\"These trousers are old.\"",
            ["Estos pantalones son viejos.", "Estos pantalones son viejas.", "Este pantalones es viejo.", "Estas pantalones son viejos."],
            0,
            "Pantalones is masculine plural, so estos and viejos. Viejas and estas are feminine, and este … es is singular."
          ),
          toEs("La falda es corta.", "Las faldas son cortas.", "Everything that agrees goes plural: las faldas son cortas. Corta ends in -a, so it becomes cortas.", [], "Make it plural."),
        ]
      ),
    ],
    [
      fe("Me ___ los zapatos y salgo.", "pongo", "I [put on] my shoes and go out.", "The action of putting on is ponerse: me pongo."),
      fe("Mi jefe siempre ___ corbata.", "lleva", "My boss always [wears] a tie.", "A habit of wearing is llevar → lleva (usa is also common in Latin America).", ["usa"]),
      fe("Necesito un ___ para el invierno.", "abrigo", "I need a [coat] for the winter.", "el abrigo = the coat."),
      toEs("I'm wearing black trousers and a white shirt.", "Llevo pantalones negros y una camisa blanca.", "llevar = to wear; each color agrees with its own noun.", ["Llevo unos pantalones negros y una camisa blanca.", "Yo llevo pantalones negros y una camisa blanca."]),
      toEs("These boots are very old.", "Estas botas son muy viejas.", "Botas is feminine plural → estas, viejas.", []),
      toEs("I put on a sweater because it's cold.", "Me pongo un jersey porque hace frío.", "Me pongo = I put on (the action). Suéter is common in Latin America.", ["Me pongo un suéter porque hace frío.", "Me pongo un jersey porque tengo frío.", "Me pongo un suéter porque tengo frío."]),
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
        [
          "Many of these verbs are cognates: take off -ar / -er / -ir and the English is often right there: ocurr-ir (occur), imagin-ar (imagine), escap-ar (escape), descubr-ir (discover), salv-ar (save). So when you meet a new verb, try that first.",
          "Ocurrir and suceder mean to happen; ¿Qué pasa? is the everyday way to ask. Significar means to mean: ¿Qué significa…?",
        ],
        [
          ["¿Qué ocurre? —Nada, todo bien.", "What's going on? — Nothing, all good."],
          ["Estas cosas suceden.", "These things happen."],
          ["¿Qué significa esta palabra?", "What does this word mean?"],
          ["Supongo que sí.", "I suppose so."],
          ["Imagino que estás cansado.", "I imagine you're tired."],
        ],
        [
          fe("¿Qué ___ \"lluvia\"?", "significa", "What does \"lluvia\" [mean]?", "significar = to mean."),
          mc(
            "Aceptar is a verb you haven't met. What does it most likely mean?",
            ["to accept", "to escape", "to happen", "to steal"],
            0,
            "Take off -ar and you're left with acept-, which looks like English accept. Escapar is to escape, ocurrir to happen, robar to steal."
          ),
        ]
      ),
      sec(
        "Falling, catching, escaping",
        "Caer (to fall) has a -go yo form like traer → traigo and poner → pongo: caigo. Only yo is odd; the rest is regular (caes, cae, caemos). Coger (to take, to catch) is everyday in Spain; in much of Latin America people say tomar or agarrar instead.",
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
            "Caer → caigo for yo, a -go form like traigo. Me cae is he / she / it, and me caer isn't conjugated."
          ),
          toEs("Él cae en la nieve.", "Yo caigo en la nieve.", "Only the yo form of caer is irregular: caigo, with the -go of traigo and pongo.", ["Caigo en la nieve.", "Me caigo en la nieve.", "Yo me caigo en la nieve."], "Change to yo."),
        ]
      ),
      sec(
        "Trust and secrets",
        [
          "Two patterns help here. Mentir changes e → ie when the stem is stressed (miento, mientes, but mentimos). Molestar (to bother) and bastar (to be enough) work like gustar: the thing that bothers is the subject, so the verb agrees with it (me molesta el ruido, me molestan los coches).",
          "The verbs: mentir (to lie), confiar en (to trust), asegurar (to assure, to make sure), descubrir (to discover, to find out), molestar (to bother), bastar (to be enough), salvar (to save, to rescue) and robar (to steal).",
        ],
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
          mc(
            "\"The cars bother me.\"",
            ["Me molestan los coches.", "Me molesta los coches.", "Molesto los coches.", "Yo molesto los coches."],
            0,
            "Molestar works like gustar: los coches do the bothering, so they're the subject and the verb is plural, molestan. Molesto / yo molesto would mean I bother the cars."
          ),
        ]
      ),
    ],
    [
      fe("¿Por qué ___ tú? Necesito la verdad.", "mientes", "Why [are you lying]? I need the truth.", "mentir → mientes: e → ie."),
      fe("No me ___ el ruido.", "molesta", "The noise doesn't [bother] me.", "molestar works like gustar: el ruido molesta."),
      fe("El perro ___ al niño del agua.", "salva", "The dog [saves] the boy from the water.", "salvar → salva."),
      fe("¿Qué ___ aquí?", "ocurre", "What's [happening] here?", "ocurrir → ocurre. ¿Qué pasa aquí? means the same."),
      toEs("Confío en ti.", "Confiamos en ti.", "Confiar is regular apart from the accent on confío: nosotros is confiamos. En ti stays.", ["Nosotros confiamos en ti.", "Nosotras confiamos en ti."], "Change to nosotros."),
      toEs("I suppose that he's right.", "Supongo que tiene razón.", "suponer → supongo, a -go form like poner.", ["Supongo que él tiene razón."]),
      toEs("Estas cosas pasa.", "Estas cosas pasan.", "Estas cosas is plural, so the verb is plural: pasan (ocurren and suceden work too).", ["Estas cosas ocurren.", "Estas cosas suceden."], "Correct the sentence."),
      toEs("¿Qué significa esta palabra?", "¿Qué significan estas palabras?", "The words are the subject of significar, so plural words take the plural verb: significan.", ["¿Qué quieren decir estas palabras?"], "Make it plural."),
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
        [
          "Place words follow the same three distances as este / ese / aquel: aquí is here (near me, like este), ahí is there (near you, like ese), allí is over there (far from both, like aquel).",
          "Arriba is up or upstairs, abajo is down or downstairs (you can hear bajo, low, inside it). Put de in front and the place word describes a noun: los vecinos de arriba = the upstairs neighbors.",
        ],
        [
          ["¿Dónde está mi bolso? —Ahí, en la silla.", "Where's my bag? — There, on the chair."],
          ["Mi habitación está arriba.", "My room is upstairs."],
          ["La cocina está abajo.", "The kitchen is downstairs."],
          ["Los vecinos de arriba hacen mucho ruido.", "The upstairs neighbors make a lot of noise."],
        ],
        [
          fe("El baño está ___, en el segundo piso.", "arriba", "The bathroom is [upstairs], on the second floor.", "arriba = up, upstairs."),
          mc(
            "Your car is across the street, far from you and your friend. \"Mi coche está ___.\"",
            ["allí", "aquí", "ahí", "arriba"],
            0,
            "Far from both people is the aquel distance, and its place word is allí. Aquí is next to you, ahí next to your friend, and arriba means upstairs."
          ),
        ]
      ),
      sec(
        "Forward, back, towards, against",
        [
          "Adelante means forward (and also come in! when someone knocks). Atrás means back or behind. Hacia means towards (the direction you move in), contra means against (touching or opposing).",
          "Acerca de means about (a topic). Don't confuse it with cerca de, near: un libro acerca de México is about Mexico, but la casa está cerca de la playa is near the beach.",
        ],
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
          toEs("El libro está acerca de la mesa.", "El libro está cerca de la mesa.", "Location (near) is cerca de. Acerca de means about a topic, as in un libro acerca de la historia.", [], "Correct the sentence."),
        ]
      ),
    ],
    [
      fe("Tus bolsas están ___, en la mesa.", "ahí", "Your bags are [there], on the table.", "ahí = there, near the listener."),
      fe("El garaje está ___.", "abajo", "The garage is [downstairs].", "abajo = down, downstairs."),
      fe("Hay un problema en la parte de ___ del coche.", "atrás", "There's a problem at the [back] of the car.", "atrás = back, behind; la parte de atrás = the back part."),
      toEs("Mi habitación está arriba.", "Mi habitación está abajo.", "Arriba (upstairs) and abajo (downstairs) are opposites; estar stays for location.", ["Mi cuarto está abajo.", "Mi dormitorio está abajo."], "Change arriba to its opposite."),
      toEs("The bus goes towards the center.", "El autobús va hacia el centro.", "hacia = towards.", ["El bus va hacia el centro.", "El autobús va hacia el centro de la ciudad."]),
      toEs("I'm against the plan.", "Estoy en contra del plan.", "estar en contra de = to be against (estar contra is also heard).", ["Estoy contra el plan.", "Yo estoy en contra del plan.", "Yo estoy contra el plan."]),
      toEs("Vamos contra el norte.", "Vamos hacia el norte.", "Direction of movement is hacia (towards). Contra means against, as in leaning against a wall.", ["Vamos al norte."], "Correct the sentence."),
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
        [
          "Many of these words appear in set phrases: ¡Qué suerte! (How lucky!), en este momento (right now), de acuerdo (OK, agreed), de todas formas (anyway), en realidad (actually). Learn each phrase whole, the way you'd learn a single word.",
          "Where English says \"to be lucky\", Spanish treats luck as something you have: tener suerte (tengo suerte, ¡qué suerte tienes!), never estar or ser suerte.",
        ],
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
        [
          "A pattern worth knowing: nouns ending in -dad are always feminine and usually match English words in -ty: la oportunidad (opportunity), la realidad (reality), la ciudad (city). And gran (great) goes before the noun: una gran oportunidad.",
          "La noticia (a piece of news), el asunto (matter, issue), el negocio (business), el puesto (job, position; a market stall), la oportunidad (opportunity), el cambio (change), el plan, el secreto, la palabra (word), la manera / el modo (way).",
        ],
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
        [
          mc(
            "Actividad is new to you. \"It's a fun activity.\"",
            ["Es una actividad divertida.", "Es un actividad divertido.", "Es una actividad divertido.", "Es un actividad divertida."],
            0,
            "Every -dad noun is feminine, so una and divertida both agree: una actividad divertida."
          ),
        ]
      ),
    ],
    [
      fe("¡Qué ___! Mañana viajas a Cancún.", "suerte", "What [luck]! Tomorrow you're traveling to Cancún.", "¡Qué suerte! = how lucky!"),
      fe("Es la mejor ciudad del ___.", "mundo", "It's the best city in the [world].", "el mundo = the world."),
      fe("Tengo una mala ___.", "noticia", "I have some bad [news].", "una noticia = a piece of news."),
      fe("No hay otra ___ de hacerlo.", "manera", "There's no other [way] to do it.", "la manera = the way. Forma works too (otra forma); modo is masculine, so it would need otro: no hay otro modo.", ["forma"]),
      mc("Posibilidad is a new word for you. What does it mean, and which article does it take?", ["la posibilidad: possibility", "el posibilidad: possibility", "la posibilidad: position", "el posibilidad: possible"], 0, "-dad matches English -ty (possibility), and every -dad noun is feminine: la posibilidad. It's a noun, so it can't mean possible."),
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
          ["la suerte", "luck"],
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
