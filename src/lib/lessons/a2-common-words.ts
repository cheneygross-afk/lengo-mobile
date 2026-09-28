// Synced from cheneygross-afk/lengo:src/lib/lessons/a2-common-words.ts by scripts/sync-content.mjs -- edit it there, not here.
import { anchored, authoring } from "./authoring";
import type { AnchoredLesson } from "./weave";

// Vocabulary lessons for common words the A2 lessons never used. The
// content check (scripts/content-check) compares the lessons against the
// most frequent Spanish words and found words like "de acuerdo",
// "aunque", "quizás" and "información" missing through the end of A2.
// Each lesson teaches one themed set, as chunks where that's how the word
// is used. Woven in after the level's Vocabulary Practice parts (see
// weave.ts and sequencing.ts), so they travel with those parts.

const { mc, fb, toEs, toEn, wo, mt, sec } = authoring("en");
const L = (
  after: string,
  slug: string,
  title: string,
  summary: string,
  duration: string,
  sections: Parameters<typeof anchored>[6],
  exercises: Parameters<typeof anchored>[7]
) => anchored("A2", after, slug, title, summary, duration, sections, exercises);

export const A2_COMMON_WORDS: AnchoredLesson[] = [
  L(
    "a2-vocabulary-practice-1",
    "a2-common-words-opinions",
    "Common Words: Opinions and Guesses",
    "Agree, disagree, guess and judge with some of the most frequent words in spoken Spanish.",
    "9 min",
    [
      sec(
        "Agreeing and giving your opinion",
        [
          "Estar de acuerdo (con) means \"to agree (with)\". On its own, ¡De acuerdo! means \"OK, fine\" when you accept a plan.",
          "Parecer works like gustar: me parece, te parece. ¿Qué te parece...? is the everyday way to ask \"What do you think of...?\". Parece que... means \"it seems that...\".",
        ],
        [
          ["Estoy de acuerdo contigo.", "I agree with you."],
          ["—¿Nos vemos a las ocho? —De acuerdo.", "—Shall we meet at eight? —OK."],
          ["No estamos de acuerdo con el plan.", "We don't agree with the plan."],
          ["Me parece una buena idea.", "It seems like a good idea to me."],
          ["¿Qué te parece el nuevo jefe?", "What do you think of the new boss?"],
          ["Parece que va a llover.", "It looks like it's going to rain."],
        ],
        [
          mc(
            "Which sentence means \"I agree with you\"?",
            ["Estoy de acuerdo contigo.", "Soy de acuerdo contigo.", "Tengo acuerdo contigo.", "Hago acuerdo contigo."],
            0,
            "The fixed phrase uses estar: estar de acuerdo con alguien."
          ),
        ]
      ),
      sec(
        "Guessing: maybe, I suppose, no doubt",
        [
          "Quizá and quizás both mean \"maybe\". They are the same word; use whichever you like.",
          "Supongo que... means \"I suppose / I guess that...\". Se supone que... means \"it's supposed to...\". Sin duda means \"without a doubt, definitely\".",
        ],
        [
          ["Quizás está en casa.", "Maybe he's at home."],
          ["Quizá tienes razón.", "Maybe you're right."],
          ["—¿Viene Pedro? —Quizá.", "—Is Pedro coming? —Maybe."],
          ["Supongo que Ana ya lo sabe.", "I suppose Ana already knows."],
          ["Se supone que el tren sale a las diez.", "The train is supposed to leave at ten."],
          ["Sin duda, es el mejor restaurante de la ciudad.", "Without a doubt, it's the best restaurant in the city."],
        ],
        [
          fb("Complete: \"I guess so. I'm not sure.\"", "___ que sí. No estoy seguro.", "Supongo", "Supongo que sí = I guess so / I suppose so."),
          mc(
            "Which word means \"maybe\"?",
            ["quizás", "supongo", "parece", "sin duda"],
            0,
            "Quizás (or quizá) = maybe. Supongo = I suppose, parece = it seems, sin duda = no doubt."
          ),
        ]
      ),
      sec(
        "Really, actually, true, what it means",
        [
          "Realmente means \"really\". En realidad means \"actually, in fact\". Careful: actualmente does NOT mean \"actually\"; it means \"currently\".",
          "Verdadero means \"true, real\" (un amigo verdadero = a true friend). ¿Qué significa...? asks \"What does ... mean?\".",
        ],
        [
          ["¿Realmente quieres ir?", "Do you really want to go?"],
          ["En realidad, no me gusta el café.", "Actually, I don't like coffee."],
          ["Parece fácil, pero en realidad es difícil.", "It looks easy, but actually it's hard."],
          ["Es un amigo verdadero.", "He's a true friend."],
          ["¿Qué significa esta palabra?", "What does this word mean?"],
          ["Realmente no sé qué significa.", "I really don't know what it means."],
        ],
        [
          fb("Complete: \"Actually, he doesn't live here.\"", "En ___, él no vive aquí.", "realidad", "En realidad = actually, in fact."),
        ]
      ),
      sec(
        "Possible, necessary, strange, capable",
        [
          "Es posible / es imposible / es necesario + infinitive: \"it's (im)possible / necessary to...\". ¡Qué raro! means \"How strange!\".",
          "Ser capaz de + infinitive means \"to be able to, to be capable of\". It often appears in the negative: no soy capaz de... = I can't manage to...",
        ],
        [
          ["¿Es posible cambiar la fecha?", "Is it possible to change the date?"],
          ["Es imposible terminar hoy.", "It's impossible to finish today."],
          ["No es necesario traer comida.", "It's not necessary to bring food."],
          ["¡Qué raro! Nadie contesta el teléfono.", "How strange! Nobody answers the phone."],
          ["No soy capaz de dormir con ruido.", "I can't sleep with noise."],
          ["Mi hijo ya es capaz de leer solo.", "My son is already able to read by himself."],
        ],
        [
          mc(
            "\"It's not necessary.\"",
            ["No es necesario.", "No es imposible.", "No es posible.", "No es raro."],
            0,
            "Necesario = necessary. The others mean impossible, possible and strange."
          ),
        ]
      ),
    ],
    [
      mt(
        "Match each word to its meaning.",
        [
          ["quizás", "maybe"],
          ["supongo", "I suppose"],
          ["raro", "strange"],
          ["capaz", "capable"],
          ["verdadero", "true, real"],
        ],
        "Five high-frequency words for guessing and judging."
      ),
      fb("Complete the sentence.", "¿Estás de ___ con Luis?", "acuerdo", "Estar de acuerdo con = to agree with."),
      fb("Complete: \"The meeting is supposed to start at three.\"", "Se ___ que la reunión empieza a las tres.", "supone", "Se supone que = it's supposed to."),
      toEs("Maybe you're right.", "Quizá tienes razón.", "Quizá and quizás are both correct.", ["Quizás tienes razón.", "Quizá tengas razón.", "Quizás tengas razón."]),
      toEn("Es imposible saberlo.", "It's impossible to know.", "Es imposible + infinitive = it's impossible to...", ["It is impossible to know.", "It's impossible to know it."]),
      toEn("¿Qué significa «raro»?", "What does «raro» mean?", "¿Qué significa...? = What does ... mean? Raro means strange.", ["What does raro mean?", "What does \"raro\" mean?"]),
      mc(
        "\"Actually, I don't like it.\" → ___, no me gusta.",
        ["En realidad", "Actualmente", "Sin duda", "De acuerdo"],
        0,
        "En realidad = actually. Actualmente is a false friend: it means \"currently\"."
      ),
      wo("Supongo que es posible terminar mañana.", "Supongo que + a full sentence; es posible + infinitive.", "I suppose it's possible to finish tomorrow."),
      fb("Complete: \"You don't need to bring an umbrella; it's sunny.\"", "No es ___ llevar paraguas; hace sol.", "necesario", "No es necesario + infinitive = it's not necessary to..."),
      toEs("He's a true friend.", "Es un amigo verdadero.", "Verdadero = true, real.", ["Él es un amigo verdadero.", "Es un verdadero amigo.", "Él es un verdadero amigo."]),
      mc(
        "What is someone asking when they say \"¿Qué te parece mi idea?\"",
        ["What you think of my idea", "If my idea looks pretty", "If my idea is possible", "Where my idea came from"],
        0,
        "¿Qué te parece...? = What do you think of...?"
      ),
      toEn("Realmente no sé qué hacer.", "I really don't know what to do.", "Realmente = really.", ["I truly don't know what to do."]),
      toEn("Se supone que es fácil.", "It's supposed to be easy.", "Se supone que = it's supposed to.", ["It is supposed to be easy."]),
    ]
  ),
  L(
    "a2-vocabulary-practice-2",
    "a2-common-words-linking",
    "Common Words: Linking Ideas",
    "Although, however, besides, even, any, both and except: the small words that connect your sentences.",
    "10 min",
    [
      sec(
        "Contrast: aunque and sin embargo",
        [
          "Aunque means \"although, even though\" and joins two parts of one sentence.",
          "Sin embargo means \"however\". It usually starts a new sentence or comes after a semicolon, followed by a comma.",
        ],
        [
          ["Aunque llueve, vamos a salir.", "Although it's raining, we're going to go out."],
          ["Salí a correr aunque estaba cansado.", "I went running even though I was tired."],
          ["El hotel era caro; sin embargo, la habitación era pequeña.", "The hotel was expensive; however, the room was small."],
          ["Estudié mucho. Sin embargo, no aprobé el examen.", "I studied a lot. However, I didn't pass the exam."],
        ],
        [
          mc(
            "Which one means \"however\"?",
            ["sin embargo", "aunque", "además", "incluso"],
            0,
            "Sin embargo = however. Aunque = although, además = besides, incluso = even."
          ),
        ]
      ),
      sec(
        "Adding: besides, even, not even, never",
        [
          "Además means \"besides, also, what's more\". Además de + noun = \"as well as, apart from\".",
          "Incluso means \"even\" (positive). Ni siquiera means \"not even\". Jamás means \"never\", a stronger nunca.",
        ],
        [
          ["El piso es grande y, además, es barato.", "The apartment is big and, what's more, it's cheap."],
          ["Además de inglés, habla francés.", "As well as English, she speaks French."],
          ["Todos vinieron, incluso mi abuela.", "Everyone came, even my grandmother."],
          ["Ni siquiera me dijo hola.", "He didn't even say hello to me."],
          ["Jamás como carne.", "I never eat meat."],
          ["Se fue y no volvió jamás.", "He left and never came back."],
        ],
        [
          fb("Complete: \"He didn't call me; he didn't even send me a message.\"", "No me llamó; ni ___ me escribió un mensaje.", "siquiera", "Ni siquiera = not even."),
        ]
      ),
      sec(
        "Any, both, the rest, most, others",
        [
          "Cualquier + noun = \"any\" (cualquier día = any day). Ambos / ambas = \"both\". Los demás / las demás = \"the others, the rest\". La mayoría de = \"most of\".",
          "Otro / otra / otros / otras = \"other, another\". Never put un before it: otro café, not \"un otro café\".",
        ],
        [
          ["Puedes venir cualquier día.", "You can come any day."],
          ["Cualquier persona puede aprender.", "Anyone can learn."],
          ["Ambos hermanos viven en Madrid.", "Both brothers live in Madrid."],
          ["Yo me quedo; los demás van a la playa.", "I'm staying; the others are going to the beach."],
          ["La mayoría de los estudiantes vive cerca.", "Most of the students live nearby."],
          ["Unos quieren pizza; otros prefieren pasta.", "Some want pizza; others prefer pasta."],
          ["Estas camisas no me gustan. ¿Tiene otras?", "I don't like these shirts. Do you have any others?"],
        ],
        [
          fb("Complete: \"I have two brothers and both are doctors.\"", "Tengo dos hermanos y ___ son médicos.", "ambos", "Hermanos is masculine plural, so ambos (ambas for feminine)."),
          toEn("La mayoría de mis amigos vive en el centro.", "Most of my friends live downtown.", "La mayoría de = most of.", ["Most of my friends live in the city center.", "Most of my friends live in the centre.", "Most of my friends live in the center."]),
        ]
      ),
      sec(
        "Through, after, except",
        [
          "A través de means \"through\" (a window, a person, a process). Tras means \"after\"; it's a little more formal than después de, but very common in the news and in día tras día (day after day).",
          "Salvo means \"except\", like excepto and menos.",
        ],
        [
          ["La luz entra a través de la ventana.", "The light comes in through the window."],
          ["Encontré el trabajo a través de un amigo.", "I found the job through a friend."],
          ["Tras la reunión, fuimos a comer.", "After the meeting, we went to eat."],
          ["Día tras día, trabaja sin descansar.", "Day after day, she works without resting."],
          ["Todos vinieron salvo Marta.", "Everyone came except Marta."],
          ["La tienda abre todos los días salvo el domingo.", "The shop opens every day except Sunday."],
        ],
        [
          mc(
            "Which word means \"except\"?",
            ["salvo", "tras", "través", "incluso"],
            0,
            "Salvo = except. Tras = after, a través de = through, incluso = even."
          ),
        ]
      ),
    ],
    [
      fb("Complete: \"Although he was sick, he went to work.\"", "___ estaba enfermo, fue a trabajar.", "Aunque", "Aunque = although."),
      fb("Complete: \"It's expensive. However, I'm going to buy it.\"", "Es caro. Sin ___, lo voy a comprar.", "embargo", "Sin embargo = however."),
      toEs("Even my grandmother came.", "Incluso vino mi abuela.", "Incluso = even.", ["Incluso mi abuela vino.", "Hasta vino mi abuela.", "Hasta mi abuela vino."]),
      toEn("No quiere ni siquiera probarlo.", "He doesn't even want to try it.", "Ni siquiera = not even.", ["She doesn't even want to try it.", "He doesn't even want to taste it.", "She doesn't even want to taste it."]),
      toEn("Jamás miento.", "I never lie.", "Jamás = never.", ["I never tell lies."]),
      mt(
        "Match each word to its meaning.",
        [
          ["además", "besides, what's more"],
          ["ambos", "both"],
          ["los demás", "the others, the rest"],
          ["la mayoría", "most, the majority"],
          ["cualquier", "any"],
        ],
        "Five high-frequency words for linking and counting."
      ),
      wo("Unos amigos llegaron temprano y otros llegaron tarde.", "Unos... otros... = some... others...", "Some friends arrived early and others arrived late."),
      fb("Complete: \"This cup is dirty. Are there any other clean ones?\"", "Esta taza está sucia. ¿Hay ___ limpias?", "otras", "Taza is feminine, so the plural is otras."),
      mc(
        "Choose the correct sentence.",
        ["Quiero otro café.", "Quiero un otro café.", "Quiero uno otro café.", "Quiero el otro un café."],
        0,
        "Otro never takes un in front of it: otro café = another coffee."
      ),
      toEs("I found the apartment through a friend.", "Encontré el piso a través de un amigo.", "A través de = through.", ["Encontré el apartamento a través de un amigo.", "Encontré el departamento a través de un amigo."]),
      toEn("Tras la cena, los demás se fueron a casa.", "After dinner, the others went home.", "Tras = after; los demás = the others, the rest.", ["After dinner, the rest went home.", "After the dinner, the others went home."]),
      toEs("Some girls play soccer; others play tennis.", "Unas chicas juegan al fútbol; otras juegan al tenis.", "Chicas is feminine, so otras.", ["Unas chicas juegan al fútbol y otras juegan al tenis.", "Algunas chicas juegan al fútbol; otras juegan al tenis."]),
      mc(
        "\"The others\" (talking about a group of men) is...",
        ["los otros", "las otras", "otros los", "los otras"],
        0,
        "Masculine plural: los otros. For a group of women: las otras."
      ),
    ]
  ),
  L(
    "a2-vocabulary-practice-2",
    "a2-common-words-place",
    "Common Words: Where Things Are",
    "Up, down, behind, in front, against and about, plus handy words for space, half and a lot.",
    "9 min",
    [
      sec(
        "Up, down, back, here",
        [
          "Arriba = up, upstairs. Abajo = down, downstairs. Atrás = back, behind (hacia atrás = backwards). De arriba abajo = from top to bottom.",
          "Acá means \"here\", like aquí. It's especially common in Latin America: ¡Ven acá! = Come here!",
        ],
        [
          ["Mi habitación está arriba.", "My room is upstairs."],
          ["Los niños juegan abajo, en el jardín.", "The kids are playing downstairs, in the garden."],
          ["Sube la escalera: el baño está arriba, a la derecha.", "Go up the stairs: the bathroom is upstairs, on the right."],
          ["Me senté atrás, al fondo del autobús.", "I sat at the back of the bus."],
          ["Ven acá, por favor.", "Come here, please."],
        ],
        [
          mc(
            "Which word is the opposite of arriba?",
            ["abajo", "atrás", "acá", "frente"],
            0,
            "Arriba (up) ↔ abajo (down)."
          ),
        ]
      ),
      sec(
        "In front of and against",
        [
          "Frente a means \"opposite, facing, in front of\". Frente a frente = face to face.",
          "Contra means \"against\": against a wall, against a team. Estar en contra de = to be against (an idea).",
        ],
        [
          ["El banco está frente al hotel.", "The bank is opposite the hotel."],
          ["Nos sentamos frente a frente.", "We sat face to face."],
          ["Puse la mesa contra la pared.", "I put the table against the wall."],
          ["El sábado jugamos contra el equipo de Lucía.", "On Saturday we're playing against Lucía's team."],
          ["Estoy en contra de esa idea.", "I'm against that idea."],
        ],
        [
          fb("Complete: \"Tomorrow Real Madrid plays against Barcelona.\"", "Mañana el Real Madrid juega ___ el Barcelona.", "contra", "Contra = against."),
        ]
      ),
      sec(
        "About, land, space",
        [
          "Acerca de means \"about\", like sobre. Don't mix it up with cerca de (near).",
          "Tierra means earth, soil or land: tocar tierra = to land, por tierra = by land. With a capital letter, la Tierra is the planet Earth. Espacio means room (free space) and outer space.",
        ],
        [
          ["Leí un libro acerca de la historia de México.", "I read a book about the history of Mexico."],
          ["Hablamos acerca del viaje.", "We talked about the trip."],
          ["El avión tocó tierra a las cinco.", "The plane touched down at five."],
          ["Mis zapatos están llenos de tierra.", "My shoes are full of dirt."],
          ["No hay espacio en la maleta.", "There's no room in the suitcase."],
          ["Los astronautas viajan al espacio.", "Astronauts travel into space."],
        ],
        [
          mc(
            "\"We talked about the trip.\"",
            ["Hablamos acerca del viaje.", "Hablamos cerca del viaje.", "Hablamos acerca el viaje.", "Hablamos acerca a viaje."],
            0,
            "Acerca de = about (de + el = del). Cerca de means near."
          ),
        ]
      ),
      sec(
        "Way, half, a lot",
        [
          "Manera means \"way, manner\": de esta manera = this way, de otra manera = another way.",
          "La mitad de = half of. With a group noun the verb is usually singular. Un montón de = a lot of, loads of (informal and very common).",
        ],
        [
          ["De esta manera es más fácil.", "It's easier this way."],
          ["No hay otra manera de hacerlo.", "There's no other way to do it."],
          ["Comí la mitad de la pizza.", "I ate half of the pizza."],
          ["La mitad de la clase está enferma.", "Half of the class is sick."],
          ["Tengo un montón de trabajo.", "I have loads of work."],
          ["Había un montón de gente en la plaza.", "There were loads of people in the square."],
        ],
        [
          fb("Complete: \"I have no time: I have loads of things to do.\"", "No tengo tiempo: tengo un ___ de cosas que hacer.", "montón", "Un montón de = a lot of. Don't forget the accent."),
        ]
      ),
    ],
    [
      mt(
        "Match each word to its meaning.",
        [
          ["arriba", "up, upstairs"],
          ["abajo", "down, downstairs"],
          ["atrás", "back, behind"],
          ["acá", "here"],
          ["frente a", "opposite, facing"],
        ],
        "Five everyday place words."
      ),
      fb("Complete: \"The pharmacy is opposite the supermarket.\"", "La farmacia está ___ al supermercado.", "frente", "Frente a + el = frente al."),
      toEs("The table is against the wall.", "La mesa está contra la pared.", "Contra = against.", []),
      toEn("Es una película acerca de la guerra.", "It's a movie about the war.", "Acerca de = about.", ["It's a film about the war.", "It is a movie about the war.", "It's a movie about war."]),
      toEn("Viajamos por tierra, no en avión.", "We traveled by land, not by plane.", "Por tierra = by land.", ["We travelled by land, not by plane.", "We travel by land, not by plane."]),
      fb("Complete: \"There's little room in the car for the suitcases.\"", "Hay poco ___ en el coche para las maletas.", "espacio", "Espacio = room, space."),
      toEs("Half of the students live here.", "La mitad de los estudiantes vive aquí.", "La mitad de = half of.", ["La mitad de los estudiantes viven aquí.", "La mitad de los alumnos vive aquí.", "La mitad de los alumnos viven aquí.", "La mitad de los estudiantes vive acá."]),
      wo("No hay otra manera de abrir esta puerta.", "Otra manera de + infinitive = another way to...", "There's no other way to open this door."),
      mc(
        "\"I have a lot of homework.\"",
        ["Tengo un montón de deberes.", "Tengo un montón deberes.", "Tengo montón de deberes.", "Tengo un montón los deberes."],
        0,
        "The chunk is un montón de + noun."
      ),
      toEn("Ven acá y mira hacia arriba.", "Come here and look up.", "Acá = here; hacia arriba = upwards.", ["Come here and look upwards."]),
      mc(
        "\"I'm against the plan.\"",
        ["Estoy en contra del plan.", "Estoy frente al plan.", "Estoy acerca del plan.", "Estoy atrás del plan."],
        0,
        "Estar en contra de = to be against (an idea or plan)."
      ),
      toEs("The bathroom is downstairs.", "El baño está abajo.", "Abajo = downstairs.", ["El servicio está abajo."]),
    ]
  ),
  L(
    "a2-vocabulary-practice-3",
    "a2-common-words-people",
    "Common Words: People and Relationships",
    "Love, marriage, guys, groups and \"mine\": the words Spanish speakers use most for the people around them.",
    "10 min",
    [
      sec(
        "Love and the heart",
        [
          "Amor = love; mi amor is a very common term of endearment. De corazón = from the heart, sincerely.",
          "Con + tú becomes contigo (and con + yo becomes conmigo). Matrimonio means marriage, and also a married couple.",
        ],
        [
          ["Ella es el amor de mi vida.", "She's the love of my life."],
          ["Mi amor, ¿quieres un café?", "Honey, do you want a coffee?"],
          ["Te lo digo de corazón.", "I mean it from the heart."],
          ["Tiene un corazón de oro.", "She has a heart of gold."],
          ["Quiero pasar el fin de semana contigo.", "I want to spend the weekend with you."],
          ["Su matrimonio duró cuarenta años.", "Their marriage lasted forty years."],
        ],
        [
          mc(
            "\"With you\" (tú) is...",
            ["contigo", "con ti", "con tú", "conmigo"],
            0,
            "Con + tú = contigo. Conmigo means \"with me\"."
          ),
          fb("Complete: \"My grandparents celebrated fifty years of marriage.\"", "Mis abuelos celebraron cincuenta años de ___.", "matrimonio", "Matrimonio = marriage."),
        ]
      ),
      sec(
        "Young people and polite address",
        [
          "Muchacho / muchacha = boy, girl, young man, young woman. Los muchachos can mean \"the guys\" in a friendly way.",
          "Señorita = miss (to a young woman). Some people find it old-fashioned for adults, so señora is often safer. Damas y caballeros = ladies and gentlemen; caballeros alone is also the sign on a men's restroom.",
        ],
        [
          ["Un muchacho me ayudó con las maletas.", "A young man helped me with the suitcases."],
          ["Los muchachos juegan al fútbol en el parque.", "The boys are playing soccer in the park."],
          ["Perdone, señorita, ¿dónde está la estación?", "Excuse me, miss, where is the station?"],
          ["Damas y caballeros, bienvenidos.", "Ladies and gentlemen, welcome."],
          ["El baño de caballeros está a la izquierda.", "The men's restroom is on the left."],
        ],
        [
          fb("Complete: \"Ladies and gentlemen, the show is about to begin.\"", "Damas y ___, el espectáculo va a empezar.", "caballeros", "Damas y caballeros = ladies and gentlemen."),
          mc(
            "\"The boys\" is...",
            ["los muchachos", "los muchacho", "las muchachos", "el muchachos"],
            0,
            "Article and noun both plural and masculine: los muchachos."
          ),
        ]
      ),
      sec(
        "Kind, guy, group, company",
        [
          "Tipo has two meanings: \"type, kind\" (¿qué tipo de...?) and, informally, \"guy\" (un tipo = a guy).",
          "Grupo = group. Compañía = a company (a business) and also company (being with someone): gracias por tu compañía.",
        ],
        [
          ["¿Qué tipo de música te gusta?", "What kind of music do you like?"],
          ["Hay dos tipos de café: solo y con leche.", "There are two kinds of coffee: black and with milk."],
          ["Ayer conocí a un tipo muy simpático.", "Yesterday I met a really nice guy."],
          ["Esos tipos trabajan con mi hermano.", "Those guys work with my brother."],
          ["Viajamos en grupo.", "We travel in a group."],
          ["Trabaja en una compañía de teléfonos.", "She works for a phone company."],
          ["Gracias por tu compañía.", "Thanks for your company."],
        ],
        [
          mc(
            "In \"Conocí a un tipo en el tren\", tipo means...",
            ["a guy", "a type", "a ticket", "a seat"],
            0,
            "With un and a person verb like conocer, tipo is informal for \"guy\"."
          ),
        ]
      ),
      sec(
        "Relationships, contact and \"mine\"",
        [
          "Relación = relationship. Estar en contacto = to be in touch; perder el contacto = to lose touch.",
          "Mío / mía / míos / mías = mine, of mine. It comes after the noun or after ser: una amiga mía = a friend of mine, es mía = it's mine.",
        ],
        [
          ["Tengo una buena relación con mis padres.", "I have a good relationship with my parents."],
          ["Su relación terminó el año pasado.", "Their relationship ended last year."],
          ["Estamos en contacto por correo.", "We're in touch by email."],
          ["Perdí el contacto con mis amigos del colegio.", "I lost touch with my school friends."],
          ["Esa maleta es mía.", "That suitcase is mine."],
          ["Una amiga mía vive en Lima.", "A friend of mine lives in Lima."],
        ],
        [
          fb("Complete: \"—Is this your jacket, Ana? —Yes, it's mine.\"", "—¿Es tu chaqueta, Ana? —Sí, es ___.", "mía", "Chaqueta is feminine, so mía."),
        ]
      ),
    ],
    [
      mt(
        "Match each word to its meaning.",
        [
          ["el corazón", "heart"],
          ["el matrimonio", "marriage"],
          ["la compañía", "company"],
          ["el grupo", "group"],
          ["el contacto", "contact"],
        ],
        "Five everyday words about people and relationships."
      ),
      fb("Complete with \"with you\" (tú).", "Me gusta mucho hablar ___, Pablo.", "contigo", "Con + tú = contigo."),
      toEs("I have a good relationship with my sister.", "Tengo una buena relación con mi hermana.", "Relación = relationship; don't forget the accent.", []),
      toEn("¿Qué tipo de libros lees?", "What kind of books do you read?", "¿Qué tipo de...? = What kind of...?", ["What type of books do you read?", "What kind of books do you like to read?"]),
      toEn("Esos tipos son amigos de mi hermano.", "Those guys are my brother's friends.", "Informally, tipos = guys.", ["Those guys are friends of my brother's.", "Those guys are friends of my brother."]),
      wo("Un muchacho del grupo me ayudó con la maleta.", "Subject (un muchacho del grupo) + me + verb.", "A young man from the group helped me with the suitcase."),
      mc(
        "\"Excuse me, miss.\"",
        ["Perdone, señorita.", "Perdone, caballeros.", "Perdone, muchacho.", "Perdone, mi amor."],
        0,
        "Señorita = miss. Caballeros = gentlemen, muchacho = young man, mi amor = my love."
      ),
      toEs("She's the love of my life.", "Ella es el amor de mi vida.", "El amor de mi vida = the love of my life.", ["Es el amor de mi vida."]),
      fb("Complete with \"the boys\".", "Los ___ del equipo celebraron la victoria.", "muchachos", "Los muchachos = the boys, the guys."),
      toEn("Te lo digo de corazón: gracias por tu compañía.", "I mean it from the heart: thank you for your company.", "De corazón = sincerely; compañía = company.", ["I'm telling you from the heart: thank you for your company.", "I mean it sincerely: thanks for your company."]),
      mc(
        "Choose the correct sentence.",
        ["Un amigo mío y una amiga mía vienen hoy.", "Un amigo mía y una amiga mío vienen hoy.", "Un mío amigo y una mía amiga vienen hoy.", "Un amigo mi y una amiga mi vienen hoy."],
        0,
        "Mío/mía goes after the noun and agrees with it: amigo mío, amiga mía."
      ),
      toEs("We're in touch by email.", "Estamos en contacto por correo.", "Estar en contacto = to be in touch.", ["Estamos en contacto por correo electrónico.", "Estamos en contacto por email."]),
      toEn("Perdone, señorita, ¿es este su bolso?", "Excuse me, miss, is this your bag?", "Señorita = miss; su = your (usted).", ["Excuse me, miss, is this your purse?", "Excuse me, miss, is this your handbag?"]),
    ]
  ),
  L(
    "a2-vocabulary-practice-3",
    "a2-common-words-feelings",
    "Common Words: Feelings and Character",
    "Crazy, silly, nice, to blame, sorry: everyday words for people, feelings and the big things in life.",
    "10 min",
    [
      sec(
        "Crazy, silly, nice",
        [
          "Loco / loca means crazy. Between friends it's often friendly: ¡Estás loca! can just mean \"You're nuts!\". Estar loco por means to be crazy about something. The noun is la locura (madness), and ¡Qué locura! is \"That's crazy!\".",
          "Tonto (silly, dumb) and estúpido (stupid) are useful to understand, but be careful: said to a person, tonto can be rude and estúpido is an insult. Loco can be rude too, depending on the tone. For people you like, agradable (pleasant, nice) is always safe.",
        ],
        [
          ["Mi hermano está loco por el fútbol.", "My brother is crazy about soccer."],
          ["¡Estás loca! El agua está muy fría.", "You're crazy! The water is really cold."],
          ["¡Qué locura! Hay tres horas de tráfico.", "That's crazy! There are three hours of traffic."],
          ["Trabajar doce horas al día es una locura.", "Working twelve hours a day is madness."],
          ["No es tonto, solo está cansado.", "He isn't dumb, he's just tired."],
          ["Fue un error estúpido, pero no pasó nada.", "It was a stupid mistake, but nothing happened."],
          ["La nueva profesora es muy agradable.", "The new teacher is very nice."],
        ],
        [
          fb("Complete the sentence.", "Mi primo está ___ por los videojuegos; juega todo el día.", "loco", "Estar loco por = to be crazy about. Mi primo is masculine: loco."),
          mc(
            "You want to say something kind about your new neighbor. Which word do you use?",
            ["agradable", "tonto", "estúpido", "loco"],
            0,
            "Agradable (pleasant, nice) is a compliment. Tonto, estúpido and loco can all sound rude about a person."
          ),
        ]
      ),
      sec(
        "Blame and apologies: la culpa, lo lamento",
        [
          "La culpa means fault or blame. Learn the chunks: tener la culpa (to be to blame), es mi culpa / fue culpa mía (it's / it was my fault), echar la culpa a alguien (to blame someone).",
          "Lamentar means to regret or be sorry. Lo lamento (mucho) is a serious \"I'm (very) sorry\", good for bad news. Lamento + noun or infinitive: lamento la espera, lamento llegar tarde.",
        ],
        [
          ["No es mi culpa.", "It's not my fault."],
          ["¿Quién tiene la culpa del accidente?", "Who is to blame for the accident?"],
          ["Siempre me echas la culpa a mí.", "You always blame me."],
          ["Lo lamento mucho, de verdad.", "I'm really very sorry."],
          ["Lamento llegar tarde.", "I'm sorry for being late."],
        ],
        [
          fb("Complete the sentence.", "Tranquilo, el problema no fue ___ tuya.", "culpa", "Fue culpa tuya / no fue culpa tuya = it was / wasn't your fault."),
          mc(
            "A friend tells you her grandfather died. What do you say?",
            ["Lo lamento mucho.", "¡Qué sorpresa!", "Es una broma.", "No es mi culpa."],
            0,
            "Lo lamento mucho is the right thing to say for sad news."
          ),
        ]
      ),
      sec(
        "Surprises and jokes",
        [
          "La sorpresa is a surprise: ¡Qué sorpresa! (What a surprise!), una fiesta sorpresa (a surprise party).",
          "La broma is a joke or prank: es una broma (it's a joke), en broma (jokingly, as a joke), hacer una broma (to play a joke).",
        ],
        [
          ["¡Qué sorpresa! No sabía que estabas aquí.", "What a surprise! I didn't know you were here."],
          ["Le preparamos una fiesta sorpresa a Marta.", "We prepared a surprise party for Marta."],
          ["Tranquilo, es una broma.", "Relax, it's a joke."],
          ["Lo dije en broma.", "I said it as a joke."],
          ["Mi hermano siempre me hace bromas.", "My brother always plays jokes on me."],
        ],
        [
          fb("Complete the sentence.", "No es verdad, es solo una ___.", "broma", "Es una broma = it's (only) a joke."),
        ]
      ),
      sec(
        "Big words: paz, peligro, alma, honor",
        [
          "La paz is peace. Dejar en paz means to leave alone: ¡Déjame en paz! (Leave me alone!). El peligro is danger: en peligro (in danger), ¡Peligro! on signs.",
          "El alma (soul) is feminine, but it takes el because it starts with a stressed a, like el agua: el alma, but el alma está tranquila. Con toda mi alma = with all my heart. El honor is honor: es un honor (it's an honor), en honor de (in honor of).",
        ],
        [
          ["Después de la guerra, por fin llegó la paz.", "After the war, peace finally came."],
          ["¡Déjame en paz, por favor!", "Leave me alone, please!"],
          ["Ese animal está en peligro.", "That animal is in danger."],
          ["Te quiero con toda mi alma.", "I love you with all my heart."],
          ["Es un honor conocerle, señor.", "It's an honor to meet you, sir."],
          ["Hicieron una cena en honor de su abuelo.", "They had a dinner in honor of their grandfather."],
        ],
        [
          mc(
            "Which sentence is correct?",
            ["El alma está tranquila.", "La alma está tranquila.", "El alma está tranquilo.", "La alma está tranquilo."],
            0,
            "Alma takes el (stressed a-), but it is still feminine, so the adjective is tranquila."
          ),
          fb("Complete the sentence.", "Aquí los niños no están en ___; es un lugar seguro.", "peligro", "Estar en peligro = to be in danger."),
        ]
      ),
    ],
    [
      mt(
        "Match each word to its meaning.",
        [
          ["la culpa", "fault, blame"],
          ["la broma", "joke"],
          ["la sorpresa", "surprise"],
          ["el peligro", "danger"],
          ["la paz", "peace"],
        ],
        "Core words for feelings and situations."
      ),
      fb("Complete the sentence.", "Tu hermana está ___: quiere nadar en el mar en enero.", "loca", "Tu hermana is feminine: loca."),
      fb("Complete the sentence.", "Mi abuelo es un hombre muy ___; siempre sonríe y habla con todos.", "agradable", "Agradable = pleasant, nice. It has the same form for men and women."),
      mc(
        "Your friend wants to drive 900 km tonight without sleeping. You say:",
        ["¡Qué locura!", "¡Qué sorpresa!", "¡Qué broma!", "¡Qué paz!"],
        0,
        "¡Qué locura! = That's crazy! / What madness!"
      ),
      toEs("It's not your fault.", "No es tu culpa.", "Culpa = fault. You can also say No es culpa tuya.", ["No es culpa tuya.", "No es culpa tuya", "No es tu culpa"]),
      toEn("Lo lamento, no puedo ir a tu fiesta.", "I'm sorry, I can't go to your party.", "Lo lamento = I'm sorry.", ["I am sorry, I can't go to your party.", "I'm sorry, I cannot go to your party."]),
      wo("Mis amigos me prepararon una fiesta sorpresa.", "Una fiesta sorpresa = a surprise party; sorpresa goes after fiesta.", "My friends prepared a surprise party for me."),
      toEn("No lo dije en serio, fue una broma.", "I didn't mean it, it was a joke.", "En serio = seriously; una broma = a joke.", ["I didn't say it seriously, it was a joke.", "I wasn't serious, it was a joke."]),
      toEs("It's an honor to be here.", "Es un honor estar aquí.", "Es un honor + infinitive.", ["Es un honor estar aqui."]),
      fb("Complete the sentence.", "Te quiero con toda mi ___.", "alma", "Con toda mi alma = with all my soul, with all my heart."),
      toEn("Solo quiero un poco de paz.", "I just want a little peace.", "La paz = peace.", ["I only want a little peace.", "I just want some peace.", "I just want a bit of peace."]),
      mc(
        "Your classmate made a small mistake. Which sentence is the kindest?",
        ["No pasa nada, es un error pequeño.", "Eres tonto.", "Eres estúpido.", "¡Estás loco!"],
        0,
        "Tonto, estúpido and loco can hurt when you say them to a person."
      ),
      toEn("Mi tía está un poco loca, pero es muy divertida.", "My aunt is a bit crazy, but she's a lot of fun.", "Loca agrees with mi tía. Between family and friends, loco / loca is often affectionate.", ["My aunt is a little crazy, but she's very funny.", "My aunt is a bit crazy, but she is very fun.", "My aunt is a little crazy, but she's a lot of fun."]),
      wo("Fue una pregunta estúpida, lo siento.", "Estúpida agrees with pregunta (feminine). Remember that estúpido is strong.", "It was a stupid question, I'm sorry."),
    ]
  ),
  L(
    "a2-vocabulary-practice-4",
    "a2-common-words-happen",
    "Common Words: When Things Happen",
    "Suceder, ocurrir, acabar de and short everyday phrases like ¡Basta! and Te lo juro.",
    "10 min",
    [
      sec(
        "What's happening? suceder and ocurrir",
        [
          "Suceder and ocurrir both mean to happen, like pasar. They are a little more formal and very common in the news: ¿Qué sucede? (What's going on?), ¿Qué sucedió? (What happened?), Esto ocurre... (This happens...).",
          "Ocurrir also has a special use: se me ocurre una idea = an idea occurs to me, I have an idea.",
        ],
        [
          ["¿Qué sucede? Estás muy callado.", "What's the matter? You're very quiet."],
          ["¿Qué sucedió anoche?", "What happened last night?"],
          ["El accidente sucedió a las diez.", "The accident happened at ten."],
          ["Esto ocurre todos los inviernos.", "This happens every winter."],
          ["Se me ocurre una idea.", "I have an idea."],
        ],
        [
          mc(
            "Choose the right form: \"¿Qué ___ ayer en la reunión?\"",
            ["sucedió", "sucede", "suceden", "sucedo"],
            0,
            "Ayer = yesterday, so use the preterite: sucedió."
          ),
          fb("Complete with suceder (present).", "No sé qué ___; hoy la tienda está cerrada.", "sucede", "Present tense of suceder for \"it\": sucede."),
        ]
      ),
      sec(
        "Acabar and acabar de",
        [
          "Acabar means to finish or to end: La película acaba a las once. El partido acabó 2-1.",
          "Acabar de + infinitive means to have just done something. Use the present: Acabo de llegar = I have just arrived. Acaba de salir = She has just left.",
        ],
        [
          ["La película acaba a las once.", "The movie ends at eleven."],
          ["El partido acabó dos a uno.", "The match ended two to one."],
          ["Acabo de llegar a casa.", "I've just got home."],
          ["Ana acaba de salir.", "Ana has just left."],
          ["Acabo los deberes y luego salimos.", "I'll finish my homework and then we'll go out."],
        ],
        [
          toEn("Acabo de comer.", "I have just eaten.", "Acabar de + infinitive = to have just done something.", ["I've just eaten.", "I just ate.", "I have just eaten"]),
          fb("Complete with acabar (preterite).", "La clase ___ a las cinco ayer.", "acabó", "Ayer + la clase (ella) → acabó."),
        ]
      ),
      sec(
        "Using and keeping: usar, mantener",
        [
          "Usar means to use: ¿Puedo usar tu teléfono? Saber usar = to know how to use.",
          "Mantener means to keep or maintain. It conjugates like tener (mantengo, mantienes...). Common chunks: mantener la calma (to stay calm), mantener el contacto (to keep in touch), mantener algo limpio (to keep something clean).",
        ],
        [
          ["¿Puedo usar tu teléfono?", "Can I use your phone?"],
          ["No sé usar esta máquina.", "I don't know how to use this machine."],
          ["Hay que mantener la calma.", "You have to stay calm."],
          ["Es difícil mantener la casa limpia con tres niños.", "It's hard to keep the house clean with three kids."],
          ["Vamos a mantener el contacto.", "We're going to keep in touch."],
        ],
        [
          fb("Complete the sentence.", "¿Sabes ___ esta aplicación? Yo no la entiendo.", "usar", "Saber + infinitive: saber usar = to know how to use."),
        ]
      ),
      sec(
        "Short words for strong moments",
        [
          "¡Basta! means \"Enough!\". Basta de + noun: ¡Basta de excusas! ¡Cállate! means \"Shut up! / Be quiet!\"; it's direct and can be rude, so with strangers say silencio, por favor.",
          "Entra is \"come in\" (to a friend), but also \"he / she enters\". Anda means \"he / she walks\", and ¡Anda! is also a way to say \"Wow!\" or \"Come on!\". Te lo juro = I swear (to you). Creí que... = I thought that... (preterite of creer).",
        ],
        [
          ["¡Basta! No quiero discutir más.", "Enough! I don't want to argue anymore."],
          ["¡Cállate un momento! Quiero escuchar la noticia.", "Be quiet a moment! I want to hear the news."],
          ["Entra, la puerta está abierta.", "Come in, the door is open."],
          ["¡Anda! ¡Qué coche tan bonito!", "Wow! What a nice car!"],
          ["Te lo juro, no fui yo.", "I swear, it wasn't me."],
          ["Creí que era tu hermano.", "I thought it was your brother."],
        ],
        [
          mc(
            "Which expression means \"That's enough!\"?",
            ["¡Basta!", "¡Anda!", "¡Entra!", "¡Cállate!"],
            0,
            "¡Basta! = Enough! ¡Anda! = Wow / Come on, ¡Entra! = Come in, ¡Cállate! = Shut up."
          ),
          toEn("Creí que no venías.", "I thought you weren't coming.", "Creí que = I thought that.", ["I thought that you weren't coming.", "I thought you were not coming."]),
        ]
      ),
    ],
    [
      fb("Complete with suceder (present).", "¿Qué ___ aquí? ¿Por qué hay tanta gente?", "sucede", "¿Qué sucede? = What's going on?"),
      fb("Complete with ocurrir (present).", "Esto ___ cuando no duermes bien.", "ocurre", "Esto (it) → ocurre."),
      mt(
        "Match each word to its meaning.",
        [
          ["acabo de llegar", "I have just arrived"],
          ["juro", "I swear"],
          ["creí", "I thought"],
          ["mantener", "to keep"],
          ["usar", "to use"],
        ],
        "Acabar de + infinitive = to have just done something."
      ),
      mc(
        "Choose the right form: \"Ayer el partido ___ dos a uno.\"",
        ["acabó", "acaba", "acabo", "acabé"],
        0,
        "Ayer → preterite; el partido (él) → acabó. Acabo without an accent is \"I finish\"."
      ),
      toEs("The movie ends at ten.", "La película acaba a las diez.", "Acabar = to end.", ["La pelicula acaba a las diez.", "La película termina a las diez."]),
      toEs("I have just finished my homework.", "Acabo de terminar mis deberes.", "Acabar de + infinitive, in the present tense.", ["Acabo de terminar la tarea.", "Acabo de hacer mis deberes.", "Acabo de terminar los deberes.", "Acabo de terminar mi tarea."]),
      toEn("¿Qué sucedió después de la fiesta?", "What happened after the party?", "Sucedió = happened (preterite).", ["What happened after the party"]),
      wo("El concierto acabó muy tarde anoche.", "Acabó = ended (preterite).", "The concert ended very late last night."),
      fb("Complete the sentence.", "En un examen hay que ___ la calma.", "mantener", "Mantener la calma = to stay calm."),
      toEn("Te lo juro, no sé nada.", "I swear, I don't know anything.", "Te lo juro = I swear (to you).", ["I swear I don't know anything.", "I swear, I know nothing."]),
      toEn("Mi abuelo anda muy despacio.", "My grandfather walks very slowly.", "Anda = walks (andar, él).", ["My grandpa walks very slowly."]),
      fb("Complete the sentence.", "¡___ ya! No quiero oír más quejas.", "Basta", "¡Basta ya! = That's enough now!"),
      mc(
        "At the movies, the people behind you are talking. Which is the most polite?",
        ["Silencio, por favor.", "¡Cállate!", "¡Cállate ya!", "¡Basta, cállate!"],
        0,
        "¡Cállate! is very direct and can sound rude, especially with strangers."
      ),
      wo("Ana entra en la cocina y abre la ventana.", "Entra = she enters (entrar en).", "Ana goes into the kitchen and opens the window."),
    ]
  ),
  L(
    "a2-vocabulary-practice-4",
    "a2-common-words-news",
    "Common Words: Information and the News",
    "Government, situation, business, advice and permission: the words you meet in the news and at the service desk.",
    "10 min",
    [
      sec(
        "In the news",
        [
          "News Spanish is full of words that look like English: el gobierno (government), la situación, la investigación, el sistema, oficial.",
          "Words ending in -ción are feminine and lose the accent in the plural: la situación → las situaciones. Watch out for sistema and programa: they end in -a but are masculine: el sistema, el programa.",
        ],
        [
          ["El gobierno anunció nuevas medidas ayer.", "The government announced new measures yesterday."],
          ["La situación económica es difícil.", "The economic situation is difficult."],
          ["La policía abrió una investigación.", "The police opened an investigation."],
          ["Según la información oficial, no hay heridos.", "According to official information, there are no injured."],
          ["El sistema de transporte funciona mal.", "The transportation system works badly."],
          ["El español es la lengua oficial del país.", "Spanish is the official language of the country."],
        ],
        [
          mc(
            "Which sentence is correct?",
            ["El sistema es nuevo.", "La sistema es nueva.", "El sistema es nueva.", "La sistema es nuevo."],
            0,
            "Sistema ends in -a but is masculine: el sistema nuevo."
          ),
          fb("Complete the sentence.", "La policía empezó una ___ sobre el robo.", "investigación", "Una investigación = an investigation (feminine, -ción)."),
        ]
      ),
      sec(
        "Services and programs",
        [
          "El servicio is service: el servicio está incluido (service is included), servicio al cliente (customer service). El programa is a TV or radio show, a computer program, or a plan.",
          "La información is usually uncountable, like English \"information\": mucha información, más información.",
        ],
        [
          ["¿El servicio está incluido en la cuenta?", "Is service included in the bill?"],
          ["El servicio al cliente no contesta el teléfono.", "Customer service doesn't answer the phone."],
          ["Veo ese programa todos los domingos.", "I watch that show every Sunday."],
          ["Necesito instalar un programa nuevo.", "I need to install a new program."],
          ["Hay mucha información en internet.", "There's a lot of information on the internet."],
        ],
        [
          fb("Complete the sentence.", "Busqué ___ sobre el museo en internet.", "información", "Información is feminine and has an accent on the o."),
        ]
      ),
      sec(
        "Business, matters and proof",
        [
          "El negocio is a business or a deal: tiene un negocio (he has a business), es un buen negocio (it's a good deal). Los negocios is business in general: un viaje de negocios (a business trip), por negocios (on business).",
          "El asunto is a matter or issue: un asunto importante. No es asunto tuyo = it's none of your business. La prueba is a test or a proof; las pruebas often means evidence.",
        ],
        [
          ["Mi tía tiene un negocio de ropa.", "My aunt has a clothing business."],
          ["Viajo mucho por negocios.", "I travel a lot on business."],
          ["Comprar este piso es un buen negocio.", "Buying this apartment is a good deal."],
          ["Tenemos que hablar de un asunto importante.", "We need to talk about an important matter."],
          ["No es asunto tuyo.", "It's none of your business."],
          ["Mañana tengo una prueba de inglés.", "Tomorrow I have an English test."],
          ["La policía no tiene pruebas.", "The police don't have any evidence."],
        ],
        [
          mc(
            "You're in Madrid for work. \"Estoy aquí por ___.\"",
            ["negocios", "servicios", "programas", "sistemas"],
            0,
            "Por negocios = on business."
          ),
          fb("Complete the sentence.", "No hay ___ de que él tomó el dinero.", "pruebas", "Las pruebas = the evidence, the proof."),
        ]
      ),
      sec(
        "Polite phrases: atención, consejo, permiso",
        [
          "Prestar atención = to pay attention (not hacer atención). Gracias por su atención = thank you for your attention.",
          "Un consejo is one piece of advice, and it's countable: un consejo, dos consejos. El permiso is permission: pedir permiso (to ask for permission), con permiso (excuse me, when you pass someone), el permiso de conducir (driver's license).",
        ],
        [
          ["Los alumnos no prestan atención en clase.", "The students don't pay attention in class."],
          ["Gracias por su atención.", "Thank you for your attention."],
          ["¿Me das un consejo?", "Can you give me some advice?"],
          ["Mi padre siempre me da buenos consejos.", "My father always gives me good advice."],
          ["Con permiso, ¿puedo pasar?", "Excuse me, can I get past?"],
          ["¿Tienes permiso de conducir?", "Do you have a driver's license?"],
        ],
        [
          mc(
            "You need to get past someone on a crowded bus. You say:",
            ["Con permiso.", "Con atención.", "Con consejo.", "Con servicio."],
            0,
            "Con permiso = excuse me (may I pass)."
          ),
          toEn("¿Puedo darte un consejo?", "Can I give you some advice?", "Un consejo = a piece of advice.", ["Can I give you a piece of advice?", "Can I give you advice?", "May I give you some advice?"]),
        ]
      ),
    ],
    [
      mt(
        "Match each word to its meaning.",
        [
          ["el gobierno", "the government"],
          ["el asunto", "the matter"],
          ["la prueba", "the test"],
          ["el permiso", "permission"],
          ["el consejo", "piece of advice"],
        ],
        "Common nouns from the news and daily life."
      ),
      fb("Complete the sentence.", "El ___ de este restaurante es excelente; los camareros son muy amables.", "servicio", "El servicio = the service."),
      fb("Complete the sentence.", "Mi padre tiene un pequeño ___ en el centro: una panadería.", "negocio", "Un negocio = a business."),
      fb("Complete the sentence.", "El ___ de metro de esta ciudad es muy moderno.", "sistema", "El sistema is masculine even though it ends in -a."),
      toEs("The situation is very serious.", "La situación es muy grave.", "La situación (feminine, accent on the o).", ["La situación es muy seria.", "La situacion es muy grave."]),
      toEs("I need more information about the situation.", "Necesito más información sobre la situación.", "Información is uncountable: más información.", ["Yo necesito más información sobre la situación.", "Necesito mas informacion sobre la situacion."]),
      toEn("El gobierno no dio información oficial.", "The government didn't give official information.", "Oficial comes after the noun.", ["The government did not give official information.", "The government gave no official information."]),
      wo("Mi hermano viaja a Madrid por negocios.", "Por negocios = on business.", "My brother travels to Madrid on business."),
      mc(
        "\"You're not paying attention.\"",
        ["No prestas atención.", "No haces atención.", "No das atención.", "No tienes atención."],
        0,
        "The chunk is prestar atención."
      ),
      toEn("Esto no es asunto tuyo.", "This is none of your business.", "No es asunto tuyo = it's none of your business.", ["This isn't your business.", "This is not your business.", "It's none of your business."]),
      fb("Complete the sentence.", "La policía no tiene ___ contra él.", "pruebas", "Las pruebas = the evidence."),
      wo("Mi programa favorito empieza a las nueve.", "El programa is masculine: mi programa favorito.", "My favorite show starts at nine."),
      mc(
        "\"Mañana tengo una ___ de matemáticas.\"",
        ["prueba", "sistema", "asunto", "permiso"],
        0,
        "Una prueba = a test. The others are masculine and don't fit."
      ),
      toEn("La investigación empezó hace un mes.", "The investigation began a month ago.", "Hace + time = ago.", ["The investigation started a month ago."]),
    ]
  ),
  L(
    "a2-vocabulary-practice-5",
    "a2-common-words-body-world",
    "Common Words: Body, Strength and Everyday Things",
    "Blood, brain, strength and energy, plus hacer daño, trash, gold, horses, Christmas and words for stories.",
    "10 min",
    [
      sec(
        "The body: sangre, cerebro, fuerza, energía",
        [
          "La sangre is blood: donar sangre (to give blood). El cerebro is the brain.",
          "La fuerza is strength or force: tener fuerza, con fuerza (hard, strongly). La energía is energy, for people and for machines: tener mucha energía, la energía solar.",
        ],
        [
          ["Doné sangre en el hospital.", "I gave blood at the hospital."],
          ["Me corté el dedo y salió un poco de sangre.", "I cut my finger and a little blood came out."],
          ["El cerebro necesita dormir.", "The brain needs sleep."],
          ["No tengo fuerza para levantar esta caja.", "I don't have the strength to lift this box."],
          ["Los niños tienen mucha energía.", "Kids have a lot of energy."],
          ["Usamos energía solar en casa.", "We use solar energy at home."],
        ],
        [
          fb("Complete the sentence.", "Después de dormir bien, tengo mucha ___.", "energía", "La energía = energy. Don't forget the accent on the í."),
          mc(
            "Which part of the body do you think with?",
            ["el cerebro", "el corazón", "el estómago", "el pulmón"],
            0,
            "El cerebro = the brain."
          ),
        ]
      ),
      sec(
        "Hacer daño",
        [
          "El daño means harm or damage. The key chunk is hacer daño (to hurt): Me haces daño = You're hurting me. Hacerse daño = to hurt yourself: Me hice daño en la rodilla.",
        ],
        [
          ["Me hice daño en la rodilla.", "I hurt my knee."],
          ["Estos zapatos me hacen daño.", "These shoes hurt me."],
          ["El sol fuerte hace daño a la piel.", "Strong sun harms the skin."],
          ["La tormenta hizo mucho daño en el pueblo.", "The storm did a lot of damage in the town."],
        ],
        [
          toEn("Me hice daño jugando al fútbol.", "I hurt myself playing soccer.", "Hacerse daño = to hurt yourself.", ["I hurt myself playing football.", "I got hurt playing soccer."]),
        ]
      ),
      sec(
        "Everyday things: basura, oro, caballo, Navidad",
        [
          "La basura is trash: sacar la basura (to take out the trash). It is also used for something very bad: Esta película es basura. El oro is gold: de oro (made of gold), la medalla de oro.",
          "El caballo is a horse: montar a caballo (to ride a horse). La Navidad is Christmas, written with a capital N: ¡Feliz Navidad!, en Navidad (at Christmas).",
        ],
        [
          ["¿Quién saca la basura hoy?", "Who's taking out the trash today?"],
          ["Mi abuela tiene un anillo de oro.", "My grandmother has a gold ring."],
          ["Montamos a caballo en el campo.", "We rode horses in the countryside."],
          ["¡Feliz Navidad a todos!", "Merry Christmas, everyone!"],
          ["En Navidad comemos con toda la familia.", "At Christmas we eat with the whole family."],
        ],
        [
          fb("Complete the sentence.", "Por favor, saca la ___ antes de las ocho.", "basura", "Sacar la basura = to take out the trash."),
        ]
      ),
      sec(
        "Stories and films: matar, escena",
        [
          "Matar means to kill. You'll see it in stories and the news: el caballero mató al dragón. Matar a + person or animal. A friendly idiom: matar el tiempo (to kill time).",
          "La escena is a scene in a film or play, and also a place in the news: la escena del crimen.",
        ],
        [
          ["En la historia, el caballero mató al dragón.", "In the story, the knight killed the dragon."],
          ["Leo en el tren para matar el tiempo.", "I read on the train to kill time."],
          ["No quiero matar las plantas otra vez.", "I don't want to kill the plants again."],
          ["La última escena de la película es muy triste.", "The last scene of the movie is very sad."],
          ["La policía llegó a la escena del crimen.", "The police arrived at the crime scene."],
        ],
        [
          mc(
            "\"Hace mil años, una noche, el caballero ___ al dragón.\"",
            ["mató", "mataba", "matará", "matamos"],
            0,
            "One finished action in the past (una noche): preterite, mató."
          ),
        ]
      ),
    ],
    [
      mt(
        "Match each word to its meaning.",
        [
          ["la sangre", "blood"],
          ["el cerebro", "brain"],
          ["la basura", "trash"],
          ["el oro", "gold"],
          ["el caballo", "horse"],
        ],
        "Everyday nouns."
      ),
      fb("Complete the sentence.", "Ganó la medalla de ___ en los Juegos Olímpicos.", "oro", "La medalla de oro = the gold medal."),
      fb("Complete the sentence.", "Mi prima monta a ___ todos los sábados.", "caballo", "Montar a caballo = to ride a horse."),
      toEs("Merry Christmas!", "¡Feliz Navidad!", "Navidad is written with a capital N.", ["Feliz Navidad", "Feliz Navidad!", "¡Feliz navidad!"]),
      toEs("These shoes hurt me.", "Estos zapatos me hacen daño.", "Hacer daño = to hurt.", ["Estos zapatos me hacen daño", "Estos zapatos me duelen."]),
      toEn("No tengo fuerza para correr más.", "I don't have the strength to run anymore.", "La fuerza = strength.", ["I don't have the strength to run any more.", "I have no strength to run anymore.", "I don't have the strength to run more."]),
      wo("Leo novelas en el tren para matar el tiempo.", "Para + infinitive: para matar el tiempo = to kill time.", "I read novels on the train to kill time."),
      mc(
        "\"To take out the trash\" is...",
        ["sacar la basura", "hacer la basura", "poner la basura", "dar la basura"],
        0,
        "Sacar la basura = to take out the trash."
      ),
      fb("Complete the sentence.", "En la última ___ de la película, los dos amigos se despiden.", "escena", "La escena = the scene."),
      wo("El cerebro necesita agua y descanso.", "El cerebro = the brain.", "The brain needs water and rest."),
      fb("Complete the sentence.", "¿Qué haces en ___? Normalmente cenamos con mis abuelos.", "Navidad", "En Navidad = at Christmas."),
      toEn("En la película, nadie sabe quién mató al rey.", "In the movie, nobody knows who killed the king.", "Mató = killed (preterite of matar).", ["In the film, nobody knows who killed the king.", "In the movie, no one knows who killed the king."]),
      toEs("They gave blood at the hospital.", "Donaron sangre en el hospital.", "Donar sangre = to give blood.", ["Ellos donaron sangre en el hospital.", "Dieron sangre en el hospital."]),
      toEs("I pushed the door with all my strength.", "Empujé la puerta con toda mi fuerza.", "Con toda mi fuerza = with all my strength.", ["Empujé la puerta con todas mis fuerzas."]),
    ]
  ),
];
