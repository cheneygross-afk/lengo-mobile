// Synced from cheneygross-afk/lengo:src/lib/lessons/level-test-a2.ts by scripts/sync-content.mjs -- edit it there, not here.
import { authoring } from "./authoring";
import { dict, wr } from "./skills-authoring";
import { listeningItems, readingSection, type LevelTest } from "./level-test-authoring";

// The A2 level test (see level-tests.ts): only A2 material -- preterite
// and imperfect, direct and indirect object pronouns, reflexives,
// comparisons, the future, por and para, the personal a and negatives,
// -mente adverbs, directions, tú commands with a pronoun and hace... que.
// No combined pronouns (me lo, se lo) and no subjunctive.
const { fe, sec } = authoring("en");

export const LEVEL_TEST_A2: LevelTest = {
  title: "Elementary Level Test: Ready for the Intermediate level?",
  summary:
    "The end-of-Elementary test: reading, listening, writing Spanish from English and a short email, 46 questions on what Elementary teaches. Pass with 70% to move on to the Intermediate level.",
  duration: "45 min",
  sections: [
    readingSection(
      "Part 1 · Reading: a travel blog",
      "Read the blog post, then answer the five questions under it.",
      [
        "El verano pasado fui a Asturias con mi amiga Elena. Llegamos un viernes por la noche y llovía mucho. El hotel era pequeño pero muy limpio, y la dueña era muy amable: nos preparó una sopa caliente aunque era tarde.",
        "El sábado hacía sol, así que subimos a una montaña cerca del pueblo. Desde arriba vimos el mar. El domingo Elena se levantó con fiebre y no pudimos ir a la playa. Fuimos a la farmacia y el farmacéutico le dio unas pastillas.",
        "Al final, fue un viaje corto, pero lo pasamos muy bien. Volveremos el año que viene.",
      ],
      [
        [
          "What was the weather like when they arrived?",
          ["It was raining hard", "It was sunny", "It was snowing", "It was very hot"],
          "\"Llegamos un viernes por la noche y llovía mucho.\" Llovía is imperfect: the background to their arrival.",
        ],
        [
          "What did the hotel owner do?",
          ["She made them hot soup", "She gave them a bigger room", "She took them up the mountain", "She called a doctor"],
          "\"Nos preparó una sopa caliente aunque era tarde.\"",
        ],
        [
          "What did they do on Saturday?",
          ["They climbed a mountain", "They went to the beach", "They stayed at the hotel", "They went to the pharmacy"],
          "\"El sábado hacía sol, así que subimos a una montaña.\"",
        ],
        [
          "Why didn't they go to the beach?",
          ["Elena had a fever", "It was raining", "The beach was closed", "They had to go home early"],
          "\"Elena se levantó con fiebre y no pudimos ir a la playa.\"",
        ],
        [
          "What are they going to do?",
          ["Go back next year", "Move to Asturias", "Buy the hotel", "Travel by train next time"],
          "\"Volveremos el año que viene\": they will come back next year.",
        ],
      ]
    ),
    readingSection(
      "Part 1 · Reading: an advert",
      "Read the advert, then answer the questions.",
      [
        "ESCUELA DE COCINA SABORES. Este mes empezamos un curso nuevo para principiantes. Las clases son los martes y los jueves, de seis a ocho de la tarde. El curso dura cuatro semanas y cuesta 120 euros, ingredientes incluidos.",
        "Es más barato que el curso de verano y los grupos son más pequeños: solo diez personas. En la primera clase aprenderás a hacer una tortilla de patatas. Para apuntarte, llámanos por teléfono o escríbenos un correo antes del viernes. ¡No esperes más!",
      ],
      [
        ["Who is the course for?", ["Beginners", "Professional cooks", "Children", "People who did the summer course"], "\"Un curso nuevo para principiantes.\""],
        ["How long does the course last?", ["Four weeks", "Two months", "Two hours", "Ten days"], "\"El curso dura cuatro semanas.\""],
        ["What is included in the price?", ["The ingredients", "A cookbook", "A dinner every Thursday", "A trip"], "\"Cuesta 120 euros, ingredientes incluidos.\""],
        [
          "How is it different from the summer course?",
          ["It's cheaper and the groups are smaller", "It's longer", "It's more expensive", "It's only at weekends"],
          "\"Es más barato que el curso de verano y los grupos son más pequeños.\"",
        ],
        [
          "What do you have to do before Friday?",
          ["Sign up by phone or email", "Buy the ingredients", "Pay at the school", "Make a tortilla"],
          "\"Para apuntarte, llámanos por teléfono o escríbenos un correo antes del viernes.\"",
        ],
      ]
    ),
    {
      heading: "Part 2 · Listening",
      body: [
        "Turn your sound on. Each question plays part of a recording: listen as many times as you like, then choose the answer. The last two are dictations: type exactly what you hear.",
      ],
      checkpoint: [
        ...listeningItems(
          [
            "Hola, Laura, soy Miguel. Te llamo porque ayer encontré tus gafas en mi coche. Las tengo aquí, en casa.",
            "Esta tarde no puedo verte porque tengo que trabajar hasta las ocho, pero mañana por la mañana estaré libre. ¿Quedamos en la cafetería de la estación a las diez? Llámame esta noche, por favor.",
          ],
          [
            [0, "Listen. What did Miguel find?", ["Laura's glasses", "Laura's keys", "Laura's phone", "Laura's car"], "\"Ayer encontré tus gafas en mi coche.\""],
            [0, "Where are they now?", ["At Miguel's house", "In the car", "At the station", "At Miguel's work"], "\"Las tengo aquí, en casa.\" Las = las gafas."],
            [
              1,
              "Why can't he meet this afternoon?",
              ["He has to work until eight", "He is going to the station", "He is ill", "He has no car"],
              "\"Esta tarde no puedo verte porque tengo que trabajar hasta las ocho.\"",
            ],
            [
              1,
              "What does he suggest?",
              ["Meeting at the station café at ten tomorrow", "Meeting tonight at eight", "Going to Laura's house", "Sending them by post"],
              "\"¿Quedamos en la cafetería de la estación a las diez?\" -- tomorrow morning.",
            ],
          ]
        ),
        ...listeningItems(
          [
            "Cuando era pequeña, vivía con mis abuelos en un pueblo. Mi abuelo se levantaba muy temprano y siempre me preparaba el desayuno.",
            "Un día, cuando tenía siete años, me perdí en el mercado. Tenía mucho miedo, pero una señora me ayudó y me llevó a casa.",
          ],
          [
            [0, "Listen. Who did she live with as a child?", ["Her grandparents", "Her parents", "An aunt", "A neighbour"], "\"Vivía con mis abuelos en un pueblo.\""],
            [
              0,
              "What did her grandfather always do?",
              ["Make her breakfast", "Take her to school", "Go to the market", "Read to her"],
              "\"Siempre me preparaba el desayuno\": imperfect for something he used to do.",
            ],
            [
              1,
              "What happened when she was seven?",
              ["She got lost at the market", "She moved to a city", "She broke her arm", "Her grandfather got ill"],
              "\"Cuando tenía siete años, me perdí en el mercado\": me perdí is preterite, one event.",
            ],
            [1, "Who helped her?", ["A woman", "A police officer", "Her grandfather", "A shop owner"], "\"Una señora me ayudó y me llevó a casa.\""],
          ]
        ),
        dict("Ayer me levanté a las siete.", "Ayer me levanté a las siete. -- \"Yesterday I got up at seven.\" Levanté has an accent on the last syllable."),
        dict("Hace dos años que vivo aquí.", "Hace dos años que vivo aquí. -- \"I've lived here for two years.\""),
      ],
    },
    sec(
      "Part 3 · Grammar and vocabulary",
      "Type the Spanish for the bold words. Small accent slips are accepted with a note.",
      [],
      [
        fe("Ayer ___ al médico.", "fui", "Yesterday [I went] to the doctor.", "Ir → yo fui (preterite)."),
        fe("El lunes ellos ___ hasta muy tarde.", "trabajaron", "On Monday they [worked] until very late.", "Trabajar → ellos trabajaron."),
        fe("¿Qué ___ el fin de semana pasado?", "hiciste", "What [did you do] last weekend?", "Hacer → tú hiciste (usted hizo).", ["hizo"]),
        fe(
          "Mis padres ___ en un pueblo cuando eran jóvenes.",
          "vivían",
          "My parents [used to live] in a village when they were young.",
          "\"Used to\" and life in the past: the imperfect, vivían."
        ),
        fe("Cuando ___ niña, tenía un perro.", "era", "When [I was] a girl, I had a dog.", "Age and childhood in the past: imperfect of ser, era."),
        fe(
          "___ la televisión cuando sonó el teléfono.",
          "Veía",
          "[I was watching] TV when the phone rang.",
          "The background action takes the imperfect (veía, or estaba viendo); the interruption the preterite (sonó).",
          ["Estaba viendo", "Miraba", "Estaba mirando"]
        ),
        fe("Ayer ___ una carta de mi abuela.", "recibí", "Yesterday [I received] a letter from my grandmother.", "Recibir → yo recibí."),
        fe("¿El libro? Ya ___ leí.", "lo", "The book? I already read [it].", "El libro is masculine singular: lo."),
        fe("¿Ves a Marta? —Sí, ___ veo.", "la", "Do you see Marta? —Yes, I see [her].", "Marta is the direct object, feminine singular: la."),
        fe("Mi hermano ___ escribe todas las semanas.", "me", "My brother writes [to me] every week.", "To me: the indirect object pronoun me."),
        fe("Todos los días ___ a las siete.", "me levanto", "Every day [I get up] at seven.", "Levantarse → me levanto."),
        fe("¿A qué hora ___ los niños?", "se acuestan", "What time do the children [go to bed]?", "Acostarse changes o → ue: se acuestan."),
        fe("Mi hermano es ___ que yo.", "más alto", "My brother is [taller] than me.", "Más + adjective + que."),
        fe("Este restaurante es ___ de la ciudad.", "el mejor", "This restaurant is [the best] in the city.", "Bueno → mejor; the best: el mejor."),
        fe("El año que viene ___ en Japón.", "viviré", "Next year [I will live] in Japan.", "Vivir → viviré (or voy a vivir).", ["voy a vivir"]),
        fe("Creo que mañana ___.", "lloverá", "I think [it will rain] tomorrow.", "Llover → lloverá (or va a llover).", ["va a llover"]),
        fe("Salgo ___ Madrid mañana.", "para", "I'm leaving [for] Madrid tomorrow.", "A destination: para."),
        fe("Gracias ___ tu ayuda.", "por", "Thanks [for] your help.", "Thanks for something: gracias por."),
        fe("Paseamos ___ el parque.", "por", "We walked [through] the park.", "Movement through a place: por."),
        fe("No conozco ___ aquí.", "a nadie", "I don't know [anyone] here.", "Nadie is a person, so it takes the personal a; after no, Spanish uses nadie (double negative)."),
        fe("Ella habla ___.", "rápidamente", "She speaks [quickly].", "Rápida + -mente keeps the accent: rápidamente. Rápido is also used as an adverb.", ["rápido"]),
        fe(
          "___ a la derecha y sigue todo recto.",
          "Gira",
          "[Turn] right and go straight on.",
          "Tú command of girar: gira (doblar → dobla also works).",
          ["Dobla", "Gire", "Doble", "Tuerce"]
        ),
        fe("¿La ventana? ___, por favor.", "Ciérrala", "The window? [Close it], please.", "Affirmative tú command + pronoun attached, with an accent: ciérrala.", ["Ciérrela"]),
        fe(
          "Mi abuela me ___ cuentos cuando era pequeña.",
          "contaba",
          "My grandmother [used to tell] me stories when I was little.",
          "A habit in the past: imperfect, contaba (leía, \"used to read\", also fits).",
          ["leía"]
        ),
        fe("Anoche no ___ nada.", "comí", "Last night I didn't [eat] anything.", "Comer → comí; no ... nada is the normal double negative."),
      ]
    ),
  ],
  exercises: [
    wr(
      "Part 4 · Writing. Write an email to a friend about your last holiday: where you went and who with, what the weather was like, two things you did, and how it was.",
      [50, 80],
      [
        "Say where you went and who with (fui a... con...)",
        "Describe the weather and the place with the imperfect (hacía sol, era...)",
        "Tell at least two things you did with the preterite (visitamos, comimos...)",
        "Say how it was overall and end the email",
      ],
      "¡Hola, Pedro! ¿Qué tal? El mes pasado fui a Lisboa con mi hermana. Hacía mucho calor y la ciudad era preciosa. El primer día visitamos el castillo y comimos pescado en un restaurante pequeño. El último día fuimos a la playa en tren. Fue un viaje muy bonito y quiero volver el año que viene. ¿Y tú? ¿Adónde fuiste en verano? Un abrazo, Marta",
      "Background and description take the imperfect (hacía calor, era preciosa); the things you did, one after another, take the preterite (visitamos, comimos, fuimos)."
    ),
  ],
};
