// Synced from cheneygross-afk/lengo:src/lib/lessons/a1-irregulars.ts by scripts/sync-content.mjs -- edit it there, not here.
import { anchored, authoring } from "./authoring";
import type { AnchoredLesson } from "./weave";

// A1 unit "Everyday irregulars", added after the 2026-10 curriculum audit:
// the required A1 path never used dar, poner, decir, conocer or oír, nor
// pongo, digo, vengo, salgo or conozco, and no lesson anywhere taught the
// yo-go verbs or saber vs. conocer. These eight lessons come right after
// the regular and stem-changing present (sequencing.ts moves the block in
// front of the Ser vs. Estar unit). Exercises ask for English → Spanish
// production; the grammar note comes in the explanation afterwards.
const { mc, ms, fe, toEs, toEn, wo, mt, sec } = authoring("en");
const L = (
  slug: string,
  title: string,
  summary: string,
  duration: string,
  sections: Parameters<typeof anchored>[6],
  exercises: Parameters<typeof anchored>[7]
) => anchored("A1", "review-adjectives-ar-er-ir-verbs", slug, title, summary, duration, sections, exercises);

/** First and last slug of the unit, for sequencing.ts and units.ts. */
export const A1_IRREGULARS_FIRST = "a1-irregulars-yo-go";
export const A1_IRREGULARS_LAST = "a1-irregulars-mission-first-day";

export const A1_IRREGULARS: AnchoredLesson[] = [
  L(
    "a1-irregulars-yo-go",
    "Yo-Go Verbs: Pongo, Salgo, Traigo, Hago",
    "Four everyday verbs that are regular except for one form: yo ends in -go.",
    "9 min",
    [
      sec(
        "Only yo is different",
        [
          "Some of the most common Spanish verbs add a g in the yo form. Poner (to put) becomes pongo, salir (to go out, to leave) becomes salgo, traer (to bring) becomes traigo and hacer (to do, to make) becomes hago.",
          "Every other form is regular: you already know the endings. Learn the yo form by heart and the rest takes care of itself.",
        ],
        [
          ["poner → pongo, pones, pone, ponemos, ponéis, ponen", "to put"],
          ["salir → salgo, sales, sale, salimos, salís, salen", "to go out, to leave"],
          ["traer → traigo, traes, trae, traemos, traéis, traen", "to bring"],
          ["hacer → hago, haces, hace, hacemos, hacéis, hacen", "to do, to make"],
        ],
        [
          fe("Yo ___ las llaves en la mesa.", "pongo", "I [put] the keys on the table.", "poner → pongo: only the yo form has the g."),
        ]
      ),
      sec(
        "In real life",
        "These verbs fill an ordinary day. Salir de means to leave a place; salir con means to go out with someone.",
        [
          ["Salgo de casa a las ocho.", "I leave home at eight."],
          ["Traigo café para todos.", "I'm bringing coffee for everyone."],
          ["¿Qué haces esta noche? —Salgo con unos amigos.", "What are you doing tonight? — I'm going out with some friends."],
          ["Ella pone música cuando trabaja.", "She puts on music when she works."],
          ["Hago la cena y luego leo un rato.", "I make dinner and then read for a while."],
        ],
        [
          mc(
            "\"I leave work at six.\"",
            ["Salgo del trabajo a las seis.", "Salo del trabajo a las seis.", "Sale del trabajo a las seis.", "Salimos del trabajo a las seis."],
            0,
            "Salir → salgo for yo. \"Salo\" is the regular form that doesn't exist, \"sale\" is he/she and \"salimos\" is we."
          ),
        ]
      ),
    ],
    [
      fe("Siempre ___ el teléfono en el bolso.", "pongo", "I always [put] my phone in my bag.", "poner → pongo (yo)."),
      fe("Los viernes ___ tarde de la oficina.", "salgo", "On Fridays I [leave] the office late.", "salir → salgo (yo)."),
      fe("¿Qué ___ tú los domingos?", "haces", "What [do you do] on Sundays?", "hacer → haces: only yo is irregular, tú is regular."),
      fe("Mis compañeros ___ comida de casa.", "traen", "My coworkers [bring] food from home.", "traer → traen (ellos): regular outside yo."),
      toEs("I'm bringing the wine and you're bringing the bread.", "Yo traigo el vino y tú traes el pan.", "traer → traigo (yo), traes (tú).", ["Traigo el vino y tú traes el pan."]),
      toEs("I do my homework at night.", "Hago la tarea por la noche.", "hacer → hago. Tarea or deberes both work.", ["Yo hago la tarea por la noche.", "Hago los deberes por la noche.", "Hago mi tarea por la noche."]),
      toEs("We go out on Saturdays.", "Salimos los sábados.", "salir → salimos: nosotros is regular.", ["Nosotros salimos los sábados.", "Salimos los sábados por la noche."]),
      toEn("¿Dónde pongo las bolsas?", "Where do I put the bags?", "Pongo is the yo form of poner.", ["Where should I put the bags?", "Where shall I put the bags?"]),
      mt(
        "Match each infinitive to its yo form.",
        [
          ["poner", "pongo"],
          ["salir", "salgo"],
          ["traer", "traigo"],
          ["hacer", "hago"],
        ],
        "All four add a g in the yo form; the other forms are regular."
      ),
      wo("Salgo de casa y pongo música en el coche.", "Salgo and pongo are both yo forms with -go.", "I leave home and put music on in the car."),
    ]
  ),
  L(
    "a1-irregulars-tengo-vengo-digo-oigo",
    "Yo-Go Plus a Vowel Change: Tengo, Vengo, Digo, Oigo",
    "Tener, venir, decir and oír: a -go yo form plus the boot-shaped vowel change you already know.",
    "10 min",
    [
      sec(
        "Tener and venir: -go, then e → ie",
        [
          "Tener (to have) and venir (to come) have a -go yo form, and the other boot forms change e → ie, like querer: tengo, tienes, tiene, tenemos, tienen.",
          "Venir is the same pattern with -ir endings: vengo, vienes, viene, venimos, vienen.",
        ],
        [
          ["tener → tengo, tienes, tiene, tenemos, tenéis, tienen", "to have"],
          ["venir → vengo, vienes, viene, venimos, venís, vienen", "to come"],
          ["Vengo de la oficina.", "I'm coming from the office."],
          ["¿Vienes conmigo? —Sí, ahora voy.", "Are you coming with me? — Yes, I'm coming."],
        ],
        [
          fe("Mi jefa ___ mañana a las nueve.", "viene", "My boss [is coming] tomorrow at nine.", "venir → viene: e → ie inside the boot."),
        ]
      ),
      sec(
        "Decir: digo, dices, dice",
        "Decir (to say, to tell) has digo for yo and changes e → i in the boot, like pedir: digo, dices, dice, decimos, dicen. To tell someone something: decir algo a alguien.",
        [
          ["decir → digo, dices, dice, decimos, decís, dicen", "to say, to tell"],
          ["¿Qué dice el mensaje?", "What does the message say?"],
          ["Siempre digo la verdad.", "I always tell the truth."],
          ["¿Cómo se dice \"thank you\" en español?", "How do you say \"thank you\" in Spanish?"],
        ],
        [
          mc(
            "\"They say it's a good restaurant.\"",
            ["Dicen que es un buen restaurante.", "Decen que es un buen restaurante.", "Digen que es un buen restaurante.", "Dice que es un buen restaurante."],
            0,
            "Decir → dicen (ellos): e → i in the boot. \"Decen\" misses the change, \"digen\" copies the g from digo, and \"dice\" is singular."
          ),
        ]
      ),
      sec(
        "Oír: oigo, oyes, oye",
        "Oír (to hear) has oigo for yo, and a y appears between vowels: oyes, oye, oyen. Nosotros is oímos. You hear ¡Oye! all day: it's how you get a friend's attention.",
        [
          ["oír → oigo, oyes, oye, oímos, oís, oyen", "to hear"],
          ["No oigo nada. ¿Puedes hablar más alto?", "I can't hear anything. Can you speak louder?"],
          ["¡Oye! ¿Tienes un momento?", "Hey! Have you got a moment?"],
        ],
        [
          fe("Perdón, no te ___ bien.", "oigo", "Sorry, I can't [hear] you well.", "oír → oigo (yo). Spanish often skips \"can\" with verbs of the senses."),
        ]
      ),
    ],
    [
      fe("___ dos hijos y un perro.", "Tengo", "[I have] two kids and a dog.", "tener → tengo (yo)."),
      fe("¿A qué hora ___ tú a casa?", "vienes", "What time [are you coming] home?", "venir → vienes: e → ie for tú."),
      fe("Mi madre siempre ___ que trabajo demasiado.", "dice", "My mother always [says] I work too much.", "decir → dice: e → i for él/ella."),
      fe("Nosotros no ___ la música desde aquí.", "oímos", "We can't [hear] the music from here.", "oír → oímos, with an accent on the í."),
      toEs("I'm coming from work and I'm hungry.", "Vengo del trabajo y tengo hambre.", "venir → vengo, tener → tengo: both yo forms end in -go.", ["Vengo del trabajo y tengo mucha hambre."]),
      toEs("What do you say? Yes or no?", "¿Qué dices? ¿Sí o no?", "decir → dices: e → i for tú.", ["¿Qué dices tú? ¿Sí o no?"]),
      toEs("I always tell the truth.", "Siempre digo la verdad.", "decir → digo (yo).", ["Yo siempre digo la verdad.", "Digo siempre la verdad."]),
      toEn("No oigo bien, el tren hace mucho ruido.", "I can't hear well, the train is making a lot of noise.", "Oigo = I hear; hace ruido = makes noise.", ["I don't hear well, the train is making a lot of noise.", "I can't hear well, the train makes a lot of noise."]),
      ms(
        "Which forms are correct?",
        ["vengo", "tieno", "digo", "oyo", "vienen"],
        [0, 2, 4],
        "Vengo, digo and vienen are right. \"Tieno\" should be tengo, and \"oyo\" should be oigo."
      ),
      mt(
        "Match each yo form to its verb.",
        [
          ["tengo", "tener"],
          ["vengo", "venir"],
          ["digo", "decir"],
          ["oigo", "oír"],
        ],
        "All four end in -go in the yo form."
      ),
    ]
  ),
  L(
    "a1-irregulars-dar-ver-saber",
    "Dar, Ver and Saber: Doy, Veo, Sé",
    "Three short, very common verbs with one odd form each: doy (I give), veo (I see) and sé (I know).",
    "8 min",
    [
      sec(
        "Dar: to give",
        "Dar is short and irregular only in yo: doy, das, da, damos, dais, dan. It also appears in many fixed phrases: dar las gracias (to thank), dar un paseo (to go for a walk), dar una vuelta (to take a stroll, a spin).",
        [
          ["dar → doy, das, da, damos, dais, dan", "to give"],
          ["Te doy mi número.", "I'll give you my number."],
          ["El hotel da un mapa a los clientes.", "The hotel gives a map to guests."],
          ["Damos una vuelta por el centro.", "We take a stroll around downtown."],
        ],
        [
          fe("Yo te ___ las llaves mañana.", "doy", "I'll [give] you the keys tomorrow.", "dar → doy (yo). Spanish often uses the present for a near future."),
        ]
      ),
      sec(
        "Ver: to see, to watch",
        "Ver keeps the e in the yo form: veo, ves, ve, vemos, veis, ven. It covers both see and watch.",
        [
          ["ver → veo, ves, ve, vemos, veis, ven", "to see, to watch"],
          ["No veo bien sin gafas.", "I don't see well without glasses."],
          ["¿Vemos una película esta noche?", "Shall we watch a film tonight?"],
          ["Nos vemos luego.", "See you later."],
        ],
        [
          mc(
            "\"I see the problem.\"",
            ["Veo el problema.", "Vo el problema.", "Ve el problema.", "Vio el problema."],
            0,
            "Ver → veo for yo. \"Ve\" is he/she sees and \"vio\" is the past (he saw); \"vo\" doesn't exist."
          ),
        ]
      ),
      sec(
        "Saber: to know (facts, how to)",
        "Saber means to know a fact or to know how to do something. Yo is sé, with an accent so it doesn't look like the pronoun se. The rest is regular: sabes, sabe, sabemos, saben.",
        [
          ["saber → sé, sabes, sabe, sabemos, sabéis, saben", "to know"],
          ["No sé dónde está la estación.", "I don't know where the station is."],
          ["¿Sabes nadar?", "Do you know how to swim? / Can you swim?"],
          ["Ella sabe tres idiomas.", "She knows three languages."],
        ],
        [
          fe("No ___ la respuesta.", "sé", "I don't [know] the answer.", "saber → sé, with an accent."),
        ]
      ),
    ],
    [
      fe("¿Tú ___ dónde vive Marta?", "sabes", "Do you [know] where Marta lives?", "saber → sabes: regular outside yo."),
      fe("Los domingos ___ un paseo por el parque.", "damos", "On Sundays we [go for] a walk in the park.", "dar un paseo = to go for a walk; dar → damos."),
      fe("Desde mi ventana ___ el mar.", "veo", "From my window I [see] the sea.", "ver → veo."),
      toEs("I don't know.", "No sé.", "saber → sé: accent on the é.", ["Yo no sé.", "No lo sé."]),
      toEs("I give my seat to an older man.", "Doy mi asiento a un hombre mayor.", "dar → doy (yo); a + person for the receiver.", ["Le doy mi asiento a un hombre mayor.", "Doy mi sitio a un hombre mayor.", "Le doy mi sitio a un hombre mayor."]),
      toEs("Do you know how to cook?", "¿Sabes cocinar?", "saber + infinitive = know how to.", ["¿Tú sabes cocinar?", "¿Sabe cocinar?", "¿Sabe usted cocinar?"]),
      toEn("Nos vemos mañana en la oficina.", "See you tomorrow at the office.", "Nos vemos = we see each other: see you.", ["We'll see each other tomorrow at the office.", "See you tomorrow in the office."]),
      mc(
        "Which sentence is correct?",
        ["Yo se la dirección.", "Yo sé la dirección.", "Yo sabo la dirección.", "Yo sabe la dirección."],
        1,
        "Yo sé, with the accent. Without it, se is a pronoun; \"sabo\" isn't a word, and \"sabe\" is he/she."
      ),
      wo("No sé qué ver esta noche.", "Sé (saber) + qué + infinitive.", "I don't know what to watch tonight."),
    ]
  ),
  L(
    "a1-irregulars-conocer",
    "Conocer and Parecer: Conozco, Parezco",
    "Verbs in -cer add a z in the yo form. Conocer also brings a little a before people.",
    "8 min",
    [
      sec(
        "-cer verbs: conozco",
        [
          "Conocer (to know a person, to be familiar with a place) has a z in the yo form: conozco. The rest is regular: conoces, conoce, conocemos, conocen.",
          "Parecer (to seem, to look) works the same way: parezco, pareces, parece. ¿Qué te parece? (What do you think of it?) is one of its most useful phrases.",
        ],
        [
          ["conocer → conozco, conoces, conoce, conocemos, conocéis, conocen", "to know (people, places)"],
          ["Conozco Madrid, pero no conozco Barcelona.", "I know Madrid, but I don't know Barcelona."],
          ["Pareces cansado. ¿Estás bien?", "You look tired. Are you OK?"],
          ["El plan parece fácil.", "The plan seems easy."],
        ],
        [
          fe("No ___ esta parte de la ciudad.", "conozco", "I don't [know] this part of the city.", "conocer → conozco (yo)."),
        ]
      ),
      sec(
        "A before a person",
        "When the thing you know, see or call is a specific person, Spanish puts a in front of it: Conozco a Ana. Conozco Madrid has no a because Madrid is a place. A + el contracts to al.",
        [
          ["Conozco a tu hermano.", "I know your brother."],
          ["¿Conoces al nuevo jefe?", "Do you know the new boss?"],
          ["Veo a mis padres los domingos.", "I see my parents on Sundays."],
        ],
        [
          mc(
            "\"I know Laura.\"",
            ["Conozco a Laura.", "Conozco Laura.", "Sé a Laura.", "Conoco a Laura."],
            0,
            "Conocer for a person, and a before the person: conozco a Laura. \"Sé\" is for facts, and \"conoco\" is missing the z."
          ),
        ]
      ),
    ],
    [
      fe("¿___ a mi novia?", "Conoces", "[Do you know] my girlfriend?", "conocer → conoces (tú), with a before the person."),
      fe("El restaurante ___ caro, pero no lo es.", "parece", "The restaurant [seems] expensive, but it isn't.", "parecer → parece."),
      fe("Mis amigos no ___ a mi familia.", "conocen", "My friends don't [know] my family.", "conocer → conocen (ellos)."),
      toEs("I know a good restaurant near here.", "Conozco un buen restaurante cerca de aquí.", "conocer → conozco: familiar with a place.", ["Yo conozco un buen restaurante cerca de aquí.", "Conozco un restaurante bueno cerca de aquí."]),
      toEs("Do you know Pedro?", "¿Conoces a Pedro?", "A specific person → a before the name.", ["¿Tú conoces a Pedro?", "¿Conoce a Pedro?", "¿Conoce usted a Pedro?"]),
      toEs("You look happy today.", "Pareces contento hoy.", "parecer + adjective; the adjective agrees with the person.", ["Pareces contenta hoy.", "Hoy pareces contento.", "Hoy pareces contenta.", "Pareces feliz hoy.", "Hoy pareces feliz."]),
      toEn("¿Qué te parece el plan?", "What do you think of the plan?", "¿Qué te parece…? asks for an opinion.", ["What do you think about the plan?", "How does the plan seem to you?"]),
      ms(
        "Which sentences need the little word a?",
        ["Conozco ___ Carlos.", "Conozco ___ Lima.", "Veo ___ mi madre.", "Veo ___ la televisión."],
        [0, 2],
        "Carlos and mi madre are people, so they take a. Lima and la televisión aren't people."
      ),
      wo("No conozco a nadie en esta ciudad.", "Conozco + a + person; nadie is a person too.", "I don't know anyone in this city."),
    ]
  ),
  L(
    "saber-vs-conocer",
    "Saber vs. Conocer",
    "Two verbs for \"to know\": saber for facts and skills, conocer for people, places and things you've experienced.",
    "9 min",
    [
      sec(
        "Facts and skills → saber",
        "Use saber for information (a fact, a name, an address, the answer) and before an infinitive for a skill. Saber is also the verb before que, dónde, cuándo, si and other question words.",
        [
          ["Sé tu número de teléfono.", "I know your phone number."],
          ["¿Sabes si el museo abre los lunes?", "Do you know if the museum opens on Mondays?"],
          ["Mi hijo sabe leer.", "My son knows how to read."],
          ["No sabemos cuándo viene el técnico.", "We don't know when the technician is coming."],
        ],
        [
          fe("¿___ a qué hora sale el tren?", "Sabes", "[Do you know] what time the train leaves?", "A fact (a time) → saber."),
        ]
      ),
      sec(
        "People, places, experience → conocer",
        "Use conocer for being acquainted with a person, having been to a place, or being familiar with a book, a song, a dish or a system. Conocer a alguien can also mean to meet someone for the first time.",
        [
          ["Conozco a la profesora de mi hija.", "I know my daughter's teacher."],
          ["¿Conoces Perú?", "Have you been to Peru? (Do you know Peru?)"],
          ["Conocemos bien este barrio.", "We know this neighborhood well."],
          ["Quiero conocer a tus amigos.", "I want to meet your friends."],
        ],
        [
          mc(
            "\"Do you know this song?\"",
            ["¿Conoces esta canción?", "¿Sabes esta canción?", "¿Conoces a esta canción?", "¿Sabes a esta canción?"],
            0,
            "Being familiar with a song → conocer, and no a because a song isn't a person. Saber a canción would mean knowing it by heart, which isn't what's asked."
          ),
        ]
      ),
      sec(
        "Side by side",
        "The same person or place can go with either verb, with a different meaning.",
        [
          ["Conozco a Luis. / Sé dónde vive Luis.", "I know Luis. / I know where Luis lives."],
          ["Conozco Roma. / Sé que Roma es la capital de Italia.", "I've been to Rome. / I know that Rome is the capital of Italy."],
        ],
        []
      ),
    ],
    [
      fe("No ___ a nadie en la fiesta.", "conozco", "I don't [know] anyone at the party.", "People → conocer, yo form conozco."),
      fe("¿Ustedes ___ dónde está el baño?", "saben", "Do you [know] where the bathroom is?", "Dónde + information → saber (ustedes: saben)."),
      fe("Ana ___ hablar alemán.", "sabe", "Ana [knows how to] speak German.", "Saber + infinitive = a skill."),
      fe("¿___ el centro de Sevilla?", "Conoces", "[Are you familiar with] downtown Seville?", "A place you've been → conocer."),
      toEs("I know that she works here.", "Sé que ella trabaja aquí.", "Saber + que + a fact.", ["Yo sé que ella trabaja aquí.", "Sé que trabaja aquí."]),
      toEs("I don't know your husband.", "No conozco a tu marido.", "A person → conocer, plus a.", ["No conozco a tu esposo.", "Yo no conozco a tu marido.", "Yo no conozco a tu esposo."]),
      toEs("Do you know how to drive?", "¿Sabes conducir?", "A skill → saber + infinitive. Manejar is the usual verb in much of Latin America.", ["¿Sabes manejar?", "¿Tú sabes conducir?", "¿Tú sabes manejar?", "¿Sabe conducir?", "¿Sabe manejar?"]),
      toEs("We want to meet your parents.", "Queremos conocer a tus padres.", "Conocer a alguien = to meet someone for the first time.", ["Nosotros queremos conocer a tus padres.", "Queremos conocer a sus padres."]),
      mt(
        "Match each sentence start to the verb it needs.",
        [
          ["___ a mi vecino.", "Conozco"],
          ["___ su dirección.", "Sé"],
          ["___ Buenos Aires.", "Conozco"],
          ["___ cocinar.", "Sé"],
        ],
        "People and places → conozco; facts and skills → sé."
      ),
    ]
  ),
  L(
    "saber-vs-conocer-mastery-check",
    "Mastery Check: Saber vs. Conocer",
    "No new rules: choose the right \"to know\" in real sentences, and say them in Spanish.",
    "8 min",
    [
      sec(
        "The quick test",
        "Ask: is it a fact, an answer or a skill? → saber. Is it a person, a place or something I've experienced? → conocer. If a question word or que follows, it's saber.",
        [
          ["¿Sabes qué hora es?", "Do you know what time it is?"],
          ["¿Conoces un buen médico?", "Do you know a good doctor?"],
        ],
        [
          ms(
            "Which sentences are correct?",
            ["Sé a María.", "Conozco a María.", "Sé que María es médica.", "Conozco que María es médica."],
            [1, 2],
            "Conocer a for the person, saber que for the fact. \"Sé a María\" and \"Conozco que…\" mix them up."
          ),
        ]
      ),
    ],
    [
      fe("¿___ por qué está cerrado el banco?", "Sabes", "[Do you know] why the bank is closed?", "Por qué + a fact → saber."),
      fe("Mis padres ___ a mi jefe.", "conocen", "My parents [know] my boss.", "A person → conocer + a."),
      fe("Yo no ___ nadar muy bien.", "sé", "I don't [know how to] swim very well.", "A skill → saber + infinitive."),
      fe("Nosotros no ___ este restaurante.", "conocemos", "We [aren't familiar with] this restaurant.", "A place you know from experience → conocer."),
      fe("¿Usted ___ si hay una farmacia cerca?", "sabe", "[Do you know] if there's a pharmacy nearby?", "Si + a fact → saber."),
      toEs("I know where you live.", "Sé dónde vives.", "Dónde + information → saber.", ["Yo sé dónde vives.", "Sé dónde vive usted.", "Sé dónde vive."]),
      toEs("Do you know Mexico City?", "¿Conoces la Ciudad de México?", "A place → conocer, no a.", ["¿Conoces Ciudad de México?", "¿Conoce la Ciudad de México?", "¿Conoces México?", "¿Conoces la ciudad de México?"]),
      toEs("I want to meet your sister.", "Quiero conocer a tu hermana.", "Conocer a = meet someone for the first time.", ["Yo quiero conocer a tu hermana.", "Quiero conocer a su hermana."]),
      toEn("No sé su nombre, pero conozco a su hermano.", "I don't know her name, but I know her brother.", "Saber for the name, conocer for the person.", ["I don't know his name, but I know his brother.", "I don't know their name, but I know their brother."]),
      mc(
        "\"She can play the guitar.\" (She knows how.)",
        ["Sabe tocar la guitarra.", "Conoce tocar la guitarra.", "Sabe a tocar la guitarra.", "Conoce la guitarra tocar."],
        0,
        "A skill → saber + infinitive, with nothing in between. Conocer never takes an infinitive."
      ),
    ]
  ),
  L(
    "a1-modal-verbs-infinitive",
    "Can, Want, Need, Have To: Verb + Infinitive",
    "Poder, querer, necesitar, tener que, deber and saber: conjugate the first verb and leave the second as it is.",
    "9 min",
    [
      sec(
        "One conjugated verb, one infinitive",
        [
          "To say can, want to, need to, have to or should, conjugate the first verb and put the second one in the infinitive (the -ar, -er, -ir form). Nothing goes between them except que in tener que.",
          "Poder (o → ue) and querer (e → ie) are stem-changers; necesitar and deber are regular.",
        ],
        [
          ["Puedo ayudar.", "I can help."],
          ["Quiero aprender.", "I want to learn."],
          ["Necesito descansar.", "I need to rest."],
          ["Tengo que trabajar.", "I have to work."],
          ["Debes llamar a tu madre.", "You should call your mother."],
        ],
        [
          fe("Mañana ___ trabajar temprano.", "tengo que", "Tomorrow I [have to] work early.", "tener que + infinitive = have to.", ["Tengo que"]),
        ]
      ),
      sec(
        "Asking and offering",
        "¿Puedes…? and ¿Puede…? are the everyday way to ask for something. ¿Quieres…? is how you invite or offer.",
        [
          ["¿Puedes abrir la ventana, por favor?", "Can you open the window, please?"],
          ["¿Puede repetir, por favor?", "Could you repeat that, please?"],
          ["¿Quieres tomar algo?", "Do you want something to drink?"],
          ["No puedo ir hoy, pero puedo ir mañana.", "I can't go today, but I can go tomorrow."],
        ],
        [
          mc(
            "\"We need to talk.\"",
            ["Necesitamos hablar.", "Necesitamos hablamos.", "Necesitamos a hablar.", "Necesitar hablamos."],
            0,
            "Conjugate necesitar (necesitamos) and leave hablar as an infinitive, with nothing in between."
          ),
        ]
      ),
      sec(
        "Small verbs that work the same way",
        "A few more everyday verbs take an infinitive: intentar (to try), esperar (to hope), pensar (to plan, to intend), preferir (to prefer). Acabar de + infinitive means to have just done something, and dejar de means to stop doing it.",
        [
          ["Intento hablar solo en español.", "I try to speak only in Spanish."],
          ["Espero llegar a tiempo.", "I hope to arrive on time."],
          ["Acabo de llegar.", "I've just arrived."],
          ["Quiero dejar de fumar.", "I want to stop smoking."],
        ],
        [
          fe("___ de comer, gracias.", "Acabo", "[I've just] eaten, thanks.", "acabar de + infinitive = to have just done something."),
        ]
      ),
    ],
    [
      fe("¿___ cerrar la puerta, por favor?", "Puedes", "[Can you] close the door, please?", "poder → puedes (o → ue) + infinitive."),
      fe("Mis hijos ___ ir a la playa.", "quieren", "My kids [want to] go to the beach.", "querer → quieren (e → ie) + infinitive."),
      fe("Usted ___ descansar más.", "debe", "You [should] rest more.", "deber + infinitive = should."),
      fe("Mi hermano ___ de trabajar a las tres.", "deja", "My brother [stops] working at three.", "dejar de + infinitive = to stop doing."),
      toEs("I can't come today.", "No puedo venir hoy.", "poder → puedo + venir (infinitive).", ["Hoy no puedo venir.", "Yo no puedo venir hoy."]),
      toEs("We have to pay now.", "Tenemos que pagar ahora.", "tener que + infinitive.", ["Nosotros tenemos que pagar ahora.", "Ahora tenemos que pagar."]),
      toEs("Do you want to come with me?", "¿Quieres venir conmigo?", "querer + infinitive; conmigo = with me.", ["¿Tú quieres venir conmigo?", "¿Quiere venir conmigo?", "¿Quiere usted venir conmigo?"]),
      toEs("I need to change my password.", "Necesito cambiar mi contraseña.", "necesitar + infinitive.", ["Yo necesito cambiar mi contraseña.", "Necesito cambiar la contraseña."]),
      toEn("Intento recordar su nombre.", "I'm trying to remember his name.", "intentar + infinitive = to try to.", ["I try to remember his name.", "I'm trying to remember her name.", "I try to remember her name.", "I'm trying to remember their name."]),
      wo("No puedo encontrar mis llaves.", "Poder conjugated, encontrar in the infinitive.", "I can't find my keys."),
    ]
  ),
  L(
    "a1-irregulars-mission-first-day",
    "Real-World Mission: First Day at a New Job",
    "A new job, a new city: every irregular verb from this unit in one ordinary day.",
    "9 min",
    [
      sec(
        "Morning",
        "Read Sofía's first morning. Notice the yo forms: salgo, traigo, conozco, sé, digo.",
        [
          ["Hoy es mi primer día en una empresa nueva.", "Today is my first day at a new company."],
          ["Salgo de casa a las ocho y traigo un café para el camino.", "I leave home at eight and bring a coffee for the way."],
          ["No conozco a nadie y no sé dónde está mi mesa.", "I don't know anyone and I don't know where my desk is."],
          ["Un hombre muy amable me dice: \"Hola, soy Andrés. Te enseño la oficina.\"", "A very kind man tells me: \"Hi, I'm Andrés. I'll show you the office.\""],
        ],
        [
          mc(
            "Why does Sofía say \"no conozco a nadie\" but \"no sé dónde está mi mesa\"?",
            [
              "People → conocer; where something is (a fact) → saber.",
              "Conocer is for mornings and saber for afternoons.",
              "Nadie is feminine.",
              "Both verbs mean the same thing here.",
            ],
            0,
            "Conocer for people (a nadie), saber for information (dónde está)."
          ),
        ]
      ),
      sec(
        "Afternoon",
        "The afternoon brings meetings, a problem and a plan. Pongo, oigo, doy, tengo que, puedo.",
        [
          ["A las dos tenemos una reunión con todo el equipo.", "At two we have a meeting with the whole team."],
          ["Pongo el teléfono en silencio, pero no oigo bien: hay mucho ruido.", "I put my phone on silent, but I can't hear well: there's a lot of noise."],
          ["Mi jefa dice que el ordenador nuevo no funciona.", "My boss says that the new computer doesn't work."],
          ["\"No pasa nada\", le digo. \"Puedo usar el mío.\"", "\"No problem,\" I tell her. \"I can use mine.\""],
          ["Al final del día, doy las gracias a todos y salgo contenta.", "At the end of the day, I thank everyone and leave happy."],
        ],
        [
          fe("Mi jefa ___ que el ordenador no funciona.", "dice", "My boss [says] the computer doesn't work.", "decir → dice (ella): e → i."),
        ]
      ),
    ],
    [
      fe("___ de casa a las ocho.", "Salgo", "[I leave] home at eight.", "salir → salgo."),
      fe("No ___ a nadie en la oficina.", "conozco", "I don't [know] anyone in the office.", "conocer → conozco, + a before people."),
      fe("Andrés me ___ la oficina.", "enseña", "Andrés [shows] me the office.", "enseñar = to show, to teach."),
      fe("El ordenador nuevo no ___.", "funciona", "The new computer doesn't [work].", "funcionar = to work (machines)."),
      toEs("I bring coffee for the whole team.", "Traigo café para todo el equipo.", "traer → traigo.", ["Yo traigo café para todo el equipo.", "Traigo un café para todo el equipo."]),
      toEs("I don't hear anything, there's a lot of noise.", "No oigo nada, hay mucho ruido.", "oír → oigo; no… nada = nothing.", ["Yo no oigo nada, hay mucho ruido."]),
      toEs("I have to use your computer.", "Tengo que usar tu ordenador.", "tener que + infinitive. Computadora is the word in most of Latin America.", ["Tengo que usar tu computadora.", "Tengo que usar su ordenador.", "Tengo que usar su computadora."]),
      toEn("Doy las gracias a todos y salgo de la oficina.", "I thank everyone and leave the office.", "Dar las gracias = to thank; salgo = I leave.", ["I say thank you to everyone and leave the office.", "I thank everybody and leave the office."]),
      ms(
        "Which sentences are correct?",
        ["Pongo el móvil en la mesa.", "Sé a Andrés.", "Vengo a las nueve.", "Conozco que el jefe es simpático."],
        [0, 2],
        "Pongo and vengo are right. You conocer a person (conozco a Andrés) and saber a fact (sé que el jefe es simpático)."
      ),
      wo("Mañana vengo temprano y traigo el desayuno.", "Vengo and traigo: two -go verbs.", "Tomorrow I'm coming early and bringing breakfast."),
    ]
  ),
];
