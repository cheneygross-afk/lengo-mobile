import type { Lesson } from "./types";
import { weaveLessons } from "./weave";
import { A2_REINFORCEMENT } from "./a2-reinforcement";

const A2_BASE_LESSONS: Lesson[] = [
  {
    "slug": "preterite-regular-verbs-1",
    "level": "A2",
    "number": 1,
    "title": "The Preterite Tense: Regular Verbs, Part 1 of 2",
    "summary": "Talk about completed actions in the past with regular -ar, -er, and -ir verbs.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "What is the preterite?",
        "body": [
          "The preterite tense describes actions that were completed at a specific point in the past — something that started and finished. It's the tense you reach for when you say what happened.",
          "Spanish has two simple past tenses: the preterite (for completed events) and the imperfect (for ongoing or habitual ones, coming in Lesson 3). For now, focus on the preterite's own forms."
        ],
        "examples": [
          {
            "es": "Ayer trabajé ocho horas.",
            "en": "Yesterday I worked eight hours."
          },
          {
            "es": "Ella llegó a las tres.",
            "en": "She arrived at three."
          }
        ]
      },
      {
        "heading": "-AR verbs in the preterite",
        "body": [
          "Drop the -ar and add: -é, -aste, -ó, -amos, -asteis, -aron. Notice the accent marks on the yo and él/ella/usted forms — they matter, since they shift the stress.",
          "The nosotros form (hablamos) looks identical to the present tense. Context tells you which one is meant."
        ],
        "examples": [
          {
            "es": "hablé, hablaste, habló, hablamos, hablasteis, hablaron",
            "en": "I/you/he... talked"
          },
          {
            "es": "Hablé con mi jefe esta mañana.",
            "en": "I talked with my boss this morning."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Conjugate the verb in parentheses.",
            "sentence": "Nosotros ___ (viajar) a Perú el año pasado.",
            "answer": "viajamos",
            "explanation": "The nosotros preterite ending for -ar verbs is -amos, same spelling as the present tense."
          }
        ]
      },
      {
        "heading": "-ER and -IR verbs in the preterite",
        "body": [
          "-er and -ir verbs share the same preterite endings: -í, -iste, -ió, -imos, -isteis, -ieron.",
          "Just like with -ar verbs, watch the accent marks on the yo and él/ella/usted forms."
        ],
        "examples": [
          {
            "es": "comí, comiste, comió, comimos, comisteis, comieron",
            "en": "I/you/he... ate"
          },
          {
            "es": "viví, viviste, vivió, vivimos, vivisteis, vivieron",
            "en": "I/you/he... lived"
          },
          {
            "es": "Comimos en un restaurante nuevo.",
            "en": "We ate at a new restaurant."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Cuál es la forma correcta de \"salir\" para \"él\"?",
            "options": [
              "salió",
              "salio",
              "salí",
              "salíó"
            ],
            "correctIndex": 0,
            "explanation": "The third-person singular preterite of -ir verbs ends in -ió, with an accent: salió."
          }
        ]
      },
      {
        "heading": "Spelling changes: -car, -gar, -zar verbs",
        "body": [
          "Verbs ending in -car, -gar, and -zar change their spelling only in the yo form, to keep the original sound: buscar → busqué, llegar → llegué, empezar → empecé.",
          "Every other form of these verbs is completely regular."
        ],
        "examples": [
          {
            "es": "busqué mis llaves",
            "en": "I looked for my keys"
          },
          {
            "es": "llegué temprano",
            "en": "I arrived early"
          },
          {
            "es": "empecé el proyecto",
            "en": "I started the project"
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Conjugate the verb in the yo form.",
            "sentence": "Anoche ___ (jugar) fútbol con mis amigos.",
            "answer": "jugué",
            "explanation": "Jugar ends in -gar, so the yo form changes g → gu to keep the hard g sound: jugué."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "fill-blank",
        "prompt": "Conjugate the verb.",
        "sentence": "Yo ___ (estudiar) toda la noche.",
        "answer": "estudié",
        "explanation": "Regular -ar preterite, yo form: estudié."
      },
      {
        "type": "fill-blank",
        "prompt": "Conjugate the verb.",
        "sentence": "Ellos ___ (comer) en casa de mi abuela.",
        "answer": "comieron",
        "explanation": "Regular -er preterite, ellos form: comieron."
      },
      {
        "type": "multiple-choice",
        "question": "¿Cuál oración usa el pretérito correctamente?",
        "options": [
          "Ella escribo una carta.",
          "Ella escribió una carta.",
          "Ella escribe una carta ayer.",
          "Ella escribiendo una carta."
        ],
        "correctIndex": 1,
        "explanation": "\"Escribió\" is the correct third-person preterite of escribir."
      },
      {
        "type": "multiple-choice",
        "question": "¿Cómo se dice \"I arrived\" (from llegar)?",
        "options": [
          "llegué",
          "llegue",
          "llegó",
          "llego"
        ],
        "correctIndex": 0,
        "explanation": "The yo form of llegar in the preterite has the spelling change g→gu plus the accented -é ending: llegué."
      }
    ]
  },
  {
    "slug": "preterite-regular-verbs-2",
    "level": "A2",
    "number": 2,
    "title": "The Preterite Tense: Regular Verbs, Part 2 of 2",
    "summary": "Talk about completed actions in the past with regular -ar, -er, and -ir verbs.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "Put it into practice",
        "body": [
          "Dos amigas hablan sobre su fin de semana."
        ],
        "examples": [
          {
            "es": "¿Qué hiciste el fin de semana?",
            "en": "What did you do this weekend?"
          },
          {
            "es": "Viajé a la playa con mi familia."
          },
          {
            "es": "¿Cómo llegaron?"
          },
          {
            "es": "Manejamos cuatro horas y llegamos por la tarde."
          },
          {
            "es": "¡Qué bien! ¿Nadaron en el mar?"
          },
          {
            "es": "Sí, y también caminamos por la playa y sacamos muchas fotos."
          }
        ],
        "checkpoint": [
          {
            "type": "multi-select",
            "question": "¿Qué hizo la familia en la playa? (Elige todas las correctas)",
            "options": [
              "Manejaron cuatro horas",
              "Nadaron en el mar",
              "Caminaron por la playa",
              "Alquilaron un barco"
            ],
            "correctIndexes": [
              0,
              1,
              2
            ],
            "explanation": "El diálogo menciona que manejaron, nadaron y caminaron — no menciona un barco."
          }
        ]
      },
      {
        "heading": "Vocabulary: Travel & Trips",
        "body": [
          "Thirty words for planning and describing a trip — useful with all the preterite verbs from this lesson."
        ],
        "examples": [
          {
            "es": "hacer escala",
            "en": "to make a layover"
          },
          {
            "es": "el viaje",
            "en": "the trip"
          },
          {
            "es": "la maleta",
            "en": "the suitcase"
          },
          {
            "es": "el boleto",
            "en": "the ticket"
          },
          {
            "es": "el aeropuerto",
            "en": "the airport"
          },
          {
            "es": "el vuelo",
            "en": "the flight"
          },
          {
            "es": "despegar",
            "en": "to take off (a plane)"
          },
          {
            "es": "salir",
            "en": "to leave / depart"
          },
          {
            "es": "el hotel",
            "en": "the hotel"
          },
          {
            "es": "la reserva",
            "en": "the reservation"
          },
          {
            "es": "el pasaporte",
            "en": "the passport"
          },
          {
            "es": "la aduana",
            "en": "customs"
          },
          {
            "es": "el equipaje",
            "en": "the luggage"
          },
          {
            "es": "la excursión",
            "en": "the excursion / tour"
          },
          {
            "es": "el mapa",
            "en": "the map"
          },
          {
            "es": "la guía",
            "en": "the guidebook / guide"
          },
          {
            "es": "alquilar",
            "en": "to rent"
          },
          {
            "es": "el coche",
            "en": "the car"
          },
          {
            "es": "la playa",
            "en": "the beach"
          },
          {
            "es": "las montañas",
            "en": "the mountains"
          },
          {
            "es": "el crucero",
            "en": "the cruise"
          },
          {
            "es": "la aventura",
            "en": "the adventure"
          },
          {
            "es": "explorar",
            "en": "to explore"
          },
          {
            "es": "el/la turista",
            "en": "the tourist"
          },
          {
            "es": "el recuerdo",
            "en": "the souvenir / memory"
          },
          {
            "es": "la salida",
            "en": "the departure"
          },
          {
            "es": "el destino",
            "en": "the destination"
          },
          {
            "es": "hacer las maletas",
            "en": "to pack"
          },
          {
            "es": "el itinerario",
            "en": "the itinerary"
          },
          {
            "es": "quedarse",
            "en": "to stay"
          }
        ],
        "checkpoint": [
          {
            "type": "matching",
            "instructions": "Match each word to its meaning.",
            "pairs": [
              {
                "left": "el equipaje",
                "right": "the luggage"
              },
              {
                "left": "la aduana",
                "right": "customs"
              },
              {
                "left": "el crucero",
                "right": "the cruise"
              },
              {
                "left": "alquilar",
                "right": "to rent"
              },
              {
                "left": "explorar",
                "right": "to explore"
              },
              {
                "left": "la excursión",
                "right": "the excursion"
              },
              {
                "left": "el pasaporte",
                "right": "the passport"
              },
              {
                "left": "las montañas",
                "right": "the mountains"
              },
              {
                "left": "la reserva",
                "right": "the reservation"
              },
              {
                "left": "el recuerdo",
                "right": "the souvenir"
              }
            ],
            "explanation": "These are ten of the trip-planning words from this section."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "word-order",
        "prompt": "Ordena las palabras para formar una oración.",
        "words": [
          "Nosotros",
          "viajamos",
          "a",
          "México",
          "el",
          "verano",
          "pasado"
        ],
        "explanation": "The sentence follows subject–verb–object–time word order.",
        "translation": "We traveled to Mexico last summer."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Translate this sentence to Spanish.",
        "source": "They arrived at the hotel very late.",
        "answer": "Llegaron al hotel muy tarde.",
        "explanation": "\"They\" is ellos/ellas, so the preterite form is llegaron.",
        "altAnswers": [
          "Llegaron al hotel muy tarde."
        ]
      },
      {
        "type": "matching",
        "instructions": "Match the infinitive to its yo preterite form.",
        "pairs": [
          {
            "left": "empezar",
            "right": "empecé"
          },
          {
            "left": "buscar",
            "right": "busqué"
          },
          {
            "left": "jugar",
            "right": "jugué"
          },
          {
            "left": "vivir",
            "right": "viví"
          },
          {
            "left": "hablar",
            "right": "hablé"
          }
        ],
        "explanation": "These verbs all follow regular preterite patterns, with spelling changes for -car/-gar/-zar verbs in the yo form."
      },
      {
        "type": "multi-select",
        "question": "¿Qué palabras necesitas para hablar de un viaje? (Elige todas las correctas)",
        "options": [
          "el equipaje",
          "el aeropuerto",
          "la aduana",
          "el jefe"
        ],
        "correctIndexes": [
          0,
          1,
          2
        ],
        "explanation": "\"El jefe\" (the boss) is a work word, not a travel word."
      }
    ]
  },
  {
    "slug": "preterite-irregular-verbs-1",
    "level": "A2",
    "number": 3,
    "title": "Common Irregular Preterites, Part 1 of 2",
    "summary": "Master the high-frequency irregular verbs you'll need to tell almost any story.",
    "duration": "6 min",
    "sections": [
      {
        "heading": "Ser and ir: identical in the preterite",
        "body": [
          "Ser (to be) and ir (to go) share the exact same preterite forms: fui, fuiste, fue, fuimos, fuisteis, fueron. Context always makes clear which verb is meant."
        ],
        "examples": [
          {
            "es": "Fui estudiante en esa universidad.",
            "en": "I was a student at that university. (ser)"
          },
          {
            "es": "Fui a la universidad en autobús.",
            "en": "I went to the university by bus. (ir)"
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "En \"Fuimos al cine anoche\", ¿qué verbo es \"fuimos\"?",
            "options": [
              "ser",
              "ir",
              "hacer",
              "estar"
            ],
            "correctIndex": 1,
            "explanation": "Fuimos al cine (we went to the movies) uses ir, not ser."
          }
        ]
      },
      {
        "heading": "Tener, estar, poder, poner: the \"u\" stem group",
        "body": [
          "These verbs replace their stem with one containing a u, then take a shared set of irregular endings: -e, -iste, -o, -imos, -isteis, -ieron — no accent marks this time.",
          "tener → tuv-, estar → estuv-, poder → pud-, poner → pus-."
        ],
        "examples": [
          {
            "es": "tuve, tuviste, tuvo, tuvimos, tuvisteis, tuvieron",
            "en": "I/you/he... had"
          },
          {
            "es": "Estuvimos en la fiesta hasta la medianoche.",
            "en": "We were at the party until midnight."
          },
          {
            "es": "No pude terminar la tarea.",
            "en": "I couldn't finish the homework."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Conjugate the verb.",
            "sentence": "Ayer ___ (tener) una cita con el médico.",
            "answer": "tuve",
            "explanation": "Tener's irregular preterite stem is tuv-, with the yo ending -e: tuve."
          }
        ]
      },
      {
        "heading": "Hacer, querer, venir: the \"i\" stem group",
        "body": [
          "hacer → hic- (hizo in the él/ella form, with a c→z spelling change to keep the soft sound), querer → quis-, venir → vin-. Same irregular endings as above."
        ],
        "examples": [
          {
            "es": "hice, hiciste, hizo, hicimos, hicisteis, hicieron",
            "en": "I/you/he... did / made"
          },
          {
            "es": "Ella vino a mi fiesta de cumpleaños.",
            "en": "She came to my birthday party."
          },
          {
            "es": "¿Qué hiciste anoche?",
            "en": "What did you do last night?"
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Cuál es la forma correcta de \"hacer\" para \"él\"?",
            "options": [
              "hacía",
              "hizo",
              "hace",
              "haciendo"
            ],
            "correctIndex": 1,
            "explanation": "The él/ella preterite of hacer is hizo, spelled with z instead of c."
          }
        ]
      },
      {
        "heading": "Decir and traer: the \"j\" stem group",
        "body": [
          "decir → dij-, traer → traj-. These take the same endings, but the ellos/ellas form drops the i: dijeron, trajeron — not dijieron."
        ],
        "examples": [
          {
            "es": "dije, dijiste, dijo, dijimos, dijisteis, dijeron",
            "en": "I/you/he... said"
          },
          {
            "es": "Trajeron comida a la reunión.",
            "en": "They brought food to the meeting."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Conjugate the verb.",
            "sentence": "Mis padres ___ (decir) que sí.",
            "answer": "dijeron",
            "explanation": "The ellos form of decir drops the i: dijeron, not dijieron."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "fill-blank",
        "prompt": "Conjugate the verb.",
        "sentence": "Nosotros ___ (estar) en la playa todo el día.",
        "answer": "estuvimos",
        "explanation": "Estar's irregular preterite stem is estuv-, nosotros ending -imos: estuvimos."
      },
      {
        "type": "multiple-choice",
        "question": "¿Cómo se dice \"they said\"?",
        "options": [
          "dijieron",
          "dijeron",
          "decieron",
          "dijaron"
        ],
        "correctIndex": 1,
        "explanation": "The ellos preterite of decir drops the i: dijeron."
      },
      {
        "type": "multi-select",
        "question": "¿Cuáles verbos usan la raíz irregular con \"u\"? (Elige todas las correctas)",
        "options": [
          "tener",
          "poner",
          "hacer",
          "estar"
        ],
        "correctIndexes": [
          0,
          1,
          3
        ],
        "explanation": "Hacer belongs to the \"i\" stem group (hic-), not the \"u\" group."
      },
      {
        "type": "fill-blank",
        "prompt": "Conjugate the verb.",
        "sentence": "¿___ (poder) tú terminar el examen?",
        "answer": "Pudiste",
        "explanation": "Poder's irregular stem is pud-, with the tú ending -iste: pudiste."
      }
    ]
  },
  {
    "slug": "preterite-irregular-verbs-2",
    "level": "A2",
    "number": 4,
    "title": "Common Irregular Preterites, Part 2 of 2",
    "summary": "Master the high-frequency irregular verbs you'll need to tell almost any story.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Put it into practice",
        "body": [
          "Dos compañeros de trabajo hablan sobre una reunión importante."
        ],
        "examples": [
          {
            "es": "¿Qué pasó en la reunión?",
            "en": "What happened at the meeting?"
          },
          {
            "es": "El jefe vino tarde y no pudo empezar a tiempo."
          },
          {
            "es": "¿Y qué dijo sobre el proyecto?"
          },
          {
            "es": "Dijo que tuvimos que terminar todo antes del viernes."
          },
          {
            "es": "¡Qué estrés! ¿Hiciste el reporte ya?"
          },
          {
            "es": "Sí, lo hice anoche. Estuve trabajando hasta las once."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Por qué no pudo empezar el jefe a tiempo?",
            "options": [
              "Porque llegó tarde",
              "Porque no trajo la computadora",
              "Porque estuvo enfermo",
              "Porque olvidó la reunión"
            ],
            "correctIndex": 0,
            "explanation": "El diálogo dice: \"El jefe vino tarde y no pudo empezar a tiempo.\""
          }
        ]
      },
      {
        "heading": "Vocabulary: Time Expressions & Frequency",
        "body": [
          "Thirty words that pair naturally with the preterite and imperfect to say when and how often something happened."
        ],
        "examples": [
          {
            "es": "actualmente",
            "en": "currently / nowadays"
          },
          {
            "es": "anoche",
            "en": "last night"
          },
          {
            "es": "anteayer",
            "en": "the day before yesterday"
          },
          {
            "es": "la semana pasada",
            "en": "last week"
          },
          {
            "es": "el mes pasado",
            "en": "last month"
          },
          {
            "es": "el año pasado",
            "en": "last year"
          },
          {
            "es": "de repente",
            "en": "suddenly"
          },
          {
            "es": "de pronto",
            "en": "suddenly / all at once"
          },
          {
            "es": "entonces",
            "en": "then"
          },
          {
            "es": "luego",
            "en": "then / later"
          },
          {
            "es": "después",
            "en": "afterward"
          },
          {
            "es": "primero",
            "en": "first"
          },
          {
            "es": "finalmente",
            "en": "finally"
          },
          {
            "es": "mientras tanto",
            "en": "meanwhile"
          },
          {
            "es": "durante",
            "en": "during"
          },
          {
            "es": "puntual",
            "en": "punctual"
          },
          {
            "es": "a tiempo",
            "en": "on time"
          },
          {
            "es": "la próxima vez",
            "en": "next time"
          },
          {
            "es": "recientemente",
            "en": "recently"
          },
          {
            "es": "todavía",
            "en": "still"
          },
          {
            "es": "ya",
            "en": "already"
          },
          {
            "es": "ya no",
            "en": "no longer"
          },
          {
            "es": "una vez",
            "en": "once"
          },
          {
            "es": "a veces",
            "en": "sometimes"
          },
          {
            "es": "de nuevo",
            "en": "again"
          },
          {
            "es": "la vez",
            "en": "the time / occurrence"
          },
          {
            "es": "pasado",
            "en": "past"
          },
          {
            "es": "próximo",
            "en": "next"
          },
          {
            "es": "cada",
            "en": "each"
          },
          {
            "es": "últimamente",
            "en": "lately"
          }
        ],
        "checkpoint": [
          {
            "type": "matching",
            "instructions": "Match each time expression to its meaning.",
            "pairs": [
              {
                "left": "de repente",
                "right": "suddenly"
              },
              {
                "left": "mientras tanto",
                "right": "meanwhile"
              },
              {
                "left": "la próxima vez",
                "right": "next time"
              },
              {
                "left": "ya no",
                "right": "no longer"
              },
              {
                "left": "recientemente",
                "right": "recently"
              },
              {
                "left": "a tiempo",
                "right": "on time"
              },
              {
                "left": "anteayer",
                "right": "the day before yesterday"
              },
              {
                "left": "finalmente",
                "right": "finally"
              },
              {
                "left": "todavía",
                "right": "still"
              },
              {
                "left": "una vez",
                "right": "once"
              }
            ],
            "explanation": "These ten time expressions help you sequence a story."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "word-order",
        "prompt": "Ordena las palabras.",
        "words": [
          "Ella",
          "vino",
          "a",
          "la",
          "fiesta",
          "muy",
          "tarde"
        ],
        "explanation": "Subject–verb–prepositional phrase–time word order.",
        "translation": "She came to the party very late."
      },
      {
        "type": "translate",
        "direction": "es-en",
        "prompt": "Translate this sentence to English.",
        "source": "No pudimos ir porque tuvimos que trabajar.",
        "answer": "We couldn't go because we had to work.",
        "explanation": "Pudimos (poder) and tuvimos (tener) are both irregular preterites here."
      },
      {
        "type": "matching",
        "instructions": "Match the infinitive to its irregular preterite stem.",
        "pairs": [
          {
            "left": "tener",
            "right": "tuv-"
          },
          {
            "left": "hacer",
            "right": "hic-"
          },
          {
            "left": "decir",
            "right": "dij-"
          },
          {
            "left": "venir",
            "right": "vin-"
          },
          {
            "left": "poner",
            "right": "pus-"
          }
        ],
        "explanation": "Recognizing these five stems unlocks most irregular preterite verbs."
      },
      {
        "type": "multiple-choice",
        "question": "¿Qué significa \"de repente\"?",
        "options": [
          "always",
          "suddenly",
          "sometimes",
          "still"
        ],
        "correctIndex": 1,
        "explanation": "\"De repente\" means \"suddenly.\""
      }
    ]
  },
  {
    "slug": "imperfect-tense-1",
    "level": "A2",
    "number": 5,
    "title": "The Imperfect Tense, Part 1 of 2",
    "summary": "Describe ongoing situations, habits, and background scenes from the past.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "Forming the imperfect: -AR verbs",
        "body": [
          "Drop -ar and add: -aba, -abas, -aba, -ábamos, -abais, -aban. The imperfect has no irregular -ar or -er/-ir stem changes except for three totally irregular verbs (next section).",
          "Notice that the yo and él/ella/usted forms are identical — context or a subject pronoun tells you which one is meant."
        ],
        "examples": [
          {
            "es": "hablaba, hablabas, hablaba, hablábamos, hablabais, hablaban",
            "en": "I/you/he... used to talk"
          },
          {
            "es": "De niño, jugaba en el parque todos los días.",
            "en": "As a kid, I used to play in the park every day."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Conjugate the verb.",
            "sentence": "Nosotros ___ (cocinar) juntos los domingos.",
            "answer": "cocinábamos",
            "explanation": "The nosotros imperfect ending for -ar verbs is -ábamos, with an accent."
          }
        ]
      },
      {
        "heading": "Forming the imperfect: -ER/-IR verbs",
        "body": [
          "Drop -er or -ir and add: -ía, -ías, -ía, -íamos, -íais, -ían. Every form carries an accent on the í."
        ],
        "examples": [
          {
            "es": "comía, comías, comía, comíamos, comíais, comían",
            "en": "I/you/he... used to eat"
          },
          {
            "es": "vivía, vivías, vivía, vivíamos, vivíais, vivían",
            "en": "I/you/he... used to live"
          },
          {
            "es": "Vivíamos en una casa pequeña.",
            "en": "We used to live in a small house."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Cuál es la forma correcta de \"tener\" para \"ellos\" en el imperfecto?",
            "options": [
              "tenieron",
              "tenían",
              "tuvieron",
              "tenía"
            ],
            "correctIndex": 1,
            "explanation": "Tener is regular in the imperfect: tenían."
          }
        ]
      },
      {
        "heading": "Only three irregulars: ser, ir, ver",
        "body": [
          "ser → era, eras, era, éramos, erais, eran. ir → iba, ibas, iba, íbamos, ibais, iban. ver → veía, veías, veía, veíamos, veíais, veían."
        ],
        "examples": [
          {
            "es": "Cuando era niño, iba a la escuela a pie.",
            "en": "When I was a kid, I used to walk to school."
          },
          {
            "es": "Veíamos dibujos animados los sábados.",
            "en": "We used to watch cartoons on Saturdays."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Conjugate the verb.",
            "sentence": "Mis abuelos ___ (ser) muy trabajadores.",
            "answer": "eran",
            "explanation": "Ser's imperfect ellos form is eran."
          }
        ]
      },
      {
        "heading": "When to use the imperfect",
        "body": [
          "Use the imperfect for background description, ongoing or repeated past actions, age, time, weather, and emotional states in the past: things without a clear beginning or end.",
          "Signal phrases like todos los días, siempre, de niño, and mientras often point to the imperfect."
        ],
        "examples": [
          {
            "es": "Eran las ocho de la noche.",
            "en": "It was eight at night."
          },
          {
            "es": "Hacía mucho frío ese invierno.",
            "en": "It was very cold that winter."
          },
          {
            "es": "Yo tenía diez años.",
            "en": "I was ten years old."
          }
        ],
        "checkpoint": [
          {
            "type": "multi-select",
            "question": "¿Qué situaciones normalmente usan el imperfecto? (Elige todas las correctas)",
            "options": [
              "Describir la edad en el pasado",
              "Un evento que pasó una sola vez",
              "Una acción habitual de la infancia",
              "Describir el clima"
            ],
            "correctIndexes": [
              0,
              2,
              3
            ],
            "explanation": "\"Un evento que pasó una sola vez\" (a one-time event) calls for the preterite, not the imperfect."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "fill-blank",
        "prompt": "Conjugate the verb.",
        "sentence": "Cuando yo ___ (ser) joven, vivía en el campo.",
        "answer": "era",
        "explanation": "Ser's imperfect yo form is era."
      },
      {
        "type": "multiple-choice",
        "question": "¿Cuál oración describe una acción habitual?",
        "options": [
          "Ayer comí pizza.",
          "Todos los días comía pizza.",
          "De repente comí pizza.",
          "Comí pizza una vez."
        ],
        "correctIndex": 1,
        "explanation": "\"Todos los días\" signals a repeated, habitual action — the imperfect."
      },
      {
        "type": "fill-blank",
        "prompt": "Conjugate the verb.",
        "sentence": "Nosotros ___ (ir) a la playa cada verano.",
        "answer": "íbamos",
        "explanation": "Ir's imperfect nosotros form is íbamos."
      },
      {
        "type": "multi-select",
        "question": "¿Qué verbos son totalmente irregulares en el imperfecto? (Elige todas las correctas)",
        "options": [
          "ser",
          "hablar",
          "ir",
          "ver"
        ],
        "correctIndexes": [
          0,
          2,
          3
        ],
        "explanation": "Ser, ir, and ver are the only three irregular verbs in the imperfect."
      }
    ]
  },
  {
    "slug": "imperfect-tense-2",
    "level": "A2",
    "number": 6,
    "title": "The Imperfect Tense, Part 2 of 2",
    "summary": "Describe ongoing situations, habits, and background scenes from the past.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "Put it into practice",
        "body": [
          "Una mujer recuerda su infancia con su abuela."
        ],
        "examples": [
          {
            "es": "Cuando era pequeña, pasaba los veranos con mi abuela.",
            "en": "When I was little, I used to spend summers with my grandmother."
          },
          {
            "es": "Vivíamos cerca de la playa y todos los días caminábamos por la arena."
          },
          {
            "es": "Ella cocinaba platos deliciosos y siempre cantaba en la cocina."
          },
          {
            "es": "Yo la extrañaba mucho cuando volvía a casa en septiembre."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Qué hacía la abuela en la cocina?",
            "options": [
              "Leía el periódico",
              "Cantaba",
              "Dormía",
              "Trabajaba"
            ],
            "correctIndex": 1,
            "explanation": "El texto dice: \"siempre cantaba en la cocina.\""
          }
        ]
      },
      {
        "heading": "Vocabulary: Childhood & Memories",
        "body": [
          "Thirty words for talking about the past — perfect company for the imperfect tense."
        ],
        "examples": [
          {
            "es": "de niño / de niña",
            "en": "as a child"
          },
          {
            "es": "la infancia",
            "en": "childhood"
          },
          {
            "es": "recordar",
            "en": "to remember"
          },
          {
            "es": "el recuerdo",
            "en": "the memory"
          },
          {
            "es": "soñar",
            "en": "to dream"
          },
          {
            "es": "jugar",
            "en": "to play"
          },
          {
            "es": "la muñeca",
            "en": "the doll"
          },
          {
            "es": "el juguete",
            "en": "the toy"
          },
          {
            "es": "el patio",
            "en": "the yard / playground"
          },
          {
            "es": "el barrio",
            "en": "the neighborhood"
          },
          {
            "es": "la escuela primaria",
            "en": "elementary school"
          },
          {
            "es": "el maestro / la maestra",
            "en": "the teacher"
          },
          {
            "es": "el recreo",
            "en": "recess"
          },
          {
            "es": "crecer",
            "en": "to grow up"
          },
          {
            "es": "cambiar",
            "en": "to change"
          },
          {
            "es": "mudarse",
            "en": "to move (house)"
          },
          {
            "es": "extrañar",
            "en": "to miss (someone/something)"
          },
          {
            "es": "la costumbre",
            "en": "the habit / custom"
          },
          {
            "es": "soler",
            "en": "to usually do"
          },
          {
            "es": "aburrirse",
            "en": "to get bored"
          },
          {
            "es": "divertirse",
            "en": "to have fun"
          },
          {
            "es": "imaginar",
            "en": "to imagine"
          },
          {
            "es": "contar cuentos",
            "en": "to tell stories"
          },
          {
            "es": "la abuela",
            "en": "the grandmother"
          },
          {
            "es": "celebrar",
            "en": "to celebrate"
          },
          {
            "es": "el vecino / la vecina",
            "en": "the neighbor"
          },
          {
            "es": "el columpio",
            "en": "the swing"
          },
          {
            "es": "la bicicleta",
            "en": "the bicycle"
          },
          {
            "es": "el helado",
            "en": "the ice cream"
          },
          {
            "es": "travieso",
            "en": "mischievous"
          }
        ],
        "checkpoint": [
          {
            "type": "matching",
            "instructions": "Match each word to its meaning.",
            "pairs": [
              {
                "left": "la infancia",
                "right": "childhood"
              },
              {
                "left": "el recreo",
                "right": "recess"
              },
              {
                "left": "mudarse",
                "right": "to move (house)"
              },
              {
                "left": "extrañar",
                "right": "to miss"
              },
              {
                "left": "soler",
                "right": "to usually do"
              },
              {
                "left": "divertirse",
                "right": "to have fun"
              },
              {
                "left": "el barrio",
                "right": "the neighborhood"
              },
              {
                "left": "crecer",
                "right": "to grow up"
              },
              {
                "left": "el juguete",
                "right": "the toy"
              },
              {
                "left": "contar cuentos",
                "right": "to tell stories"
              }
            ],
            "explanation": "These ten words describe growing up and looking back."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "word-order",
        "prompt": "Ordena las palabras.",
        "words": [
          "De",
          "niña,",
          "yo",
          "jugaba",
          "con",
          "mis",
          "primos"
        ],
        "explanation": "Time phrase, subject, verb, prepositional phrase.",
        "translation": "As a little girl, I used to play with my cousins."
      },
      {
        "type": "multiple-choice",
        "question": "¿Qué significa \"soler\"?",
        "options": [
          "to sell",
          "to usually do",
          "to solve",
          "to be alone"
        ],
        "correctIndex": 1,
        "explanation": "\"Soler\" + infinitive means \"to usually do (something).\""
      },
      {
        "type": "matching",
        "instructions": "Match the infinitive to its yo imperfect form.",
        "pairs": [
          {
            "left": "tener",
            "right": "tenía"
          },
          {
            "left": "ser",
            "right": "era"
          },
          {
            "left": "ir",
            "right": "iba"
          },
          {
            "left": "vivir",
            "right": "vivía"
          },
          {
            "left": "ver",
            "right": "veía"
          }
        ],
        "explanation": "The imperfect is one of the most regular tenses in Spanish — only ser, ir, and ver break the pattern."
      }
    ]
  },
  {
    "slug": "preterite-vs-imperfect-1",
    "level": "A2",
    "number": 7,
    "title": "Preterite vs. Imperfect, Part 1 of 2",
    "summary": "Learn to choose the right past tense — and combine both in a single story.",
    "duration": "6 min",
    "sections": [
      {
        "heading": "Dos pasados diferentes",
        "body": [
          "El pretérito cuenta lo que pasó: una acción completa, con principio y fin claros. El imperfecto describe cómo eran las cosas: el fondo de la historia, sin un final marcado.",
          "Piensa en el pretérito como la línea de la historia y el imperfecto como el escenario."
        ],
        "examples": [
          {
            "es": "Llovía (imperfecto) cuando salí (pretérito) de casa.",
            "en": "It was raining when I left the house."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Qué tiempo verbal describe el \"fondo\" de una historia?",
            "options": [
              "El pretérito",
              "El imperfecto",
              "El futuro",
              "El presente"
            ],
            "correctIndex": 1,
            "explanation": "El imperfecto describe el escenario o fondo, mientras el pretérito avanza la acción."
          }
        ]
      },
      {
        "heading": "Acciones interrumpidas",
        "body": [
          "Un patrón muy común: el imperfecto describe una acción en progreso, y el pretérito es la acción que la interrumpe."
        ],
        "examples": [
          {
            "es": "Yo dormía cuando sonó el teléfono."
          },
          {
            "es": "Comíamos cuando empezó a llover."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa la oración con el verbo correcto.",
            "sentence": "Ella ___ (caminar, imperfecto) por el parque cuando vio a su amigo.",
            "answer": "caminaba",
            "explanation": "La acción en progreso (caminar) va en imperfecto; la interrupción (vio) va en pretérito."
          }
        ]
      },
      {
        "heading": "Palabras clave",
        "body": [
          "Ciertas palabras casi siempre acompañan a un tiempo verbal específico. Pretérito: ayer, una vez, de repente, anoche, el año pasado. Imperfecto: siempre, mientras, todos los días, de niño, normalmente."
        ],
        "examples": [
          {
            "es": "Una vez fui a Perú."
          },
          {
            "es": "De niño, iba a Perú cada verano."
          }
        ],
        "checkpoint": [
          {
            "type": "multi-select",
            "question": "¿Qué palabras sugieren el imperfecto? (Elige todas las correctas)",
            "options": [
              "siempre",
              "de repente",
              "todos los días",
              "mientras"
            ],
            "correctIndexes": [
              0,
              2,
              3
            ],
            "explanation": "\"De repente\" (suddenly) señala una acción completa y puntual: el pretérito."
          }
        ]
      },
      {
        "heading": "Los dos juntos en una historia",
        "body": [
          "La mayoría de las historias reales mezclan ambos tiempos: el imperfecto pinta la escena, y el pretérito mueve la trama hacia adelante."
        ],
        "examples": [
          {
            "es": "Era una noche fría. Los niños dormían cuando alguien llamó a la puerta."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa con el verbo correcto.",
            "sentence": "___ (ser, imperfecto) las diez de la noche cuando llegó mi hermano.",
            "answer": "Eran",
            "explanation": "\"Ser\" para describir la hora siempre va en imperfecto: eran."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "fill-blank",
        "prompt": "Elige pretérito o imperfecto.",
        "sentence": "___ (llover, imperfecto) toda la tarde cuando decidimos salir.",
        "answer": "Llovía",
        "explanation": "La lluvia continua en el fondo va en imperfecto: llovía."
      },
      {
        "type": "multiple-choice",
        "question": "¿Qué oración es correcta?",
        "options": [
          "Yo tenía veinte años cuando me gradué.",
          "Yo tuve veinte años cuando me gradué.",
          "Yo tenía veinte años cuando me graduaba.",
          "Yo tuve veinte años cuando me graduaba."
        ],
        "correctIndex": 0,
        "explanation": "La edad se describe en imperfecto (tenía); el evento puntual va en pretérito (me gradué)."
      },
      {
        "type": "fill-blank",
        "prompt": "Elige pretérito o imperfecto.",
        "sentence": "Nosotros ___ (comer, pretérito) rápido porque teníamos prisa.",
        "answer": "comimos",
        "explanation": "\"Comer rápido\" es una acción completa: pretérito."
      },
      {
        "type": "multi-select",
        "question": "¿Qué frases normalmente van con el pretérito? (Elige todas las correctas)",
        "options": [
          "ayer",
          "siempre",
          "una vez",
          "de repente"
        ],
        "correctIndexes": [
          0,
          2,
          3
        ],
        "explanation": "\"Siempre\" señala una acción habitual: imperfecto."
      }
    ]
  },
  {
    "slug": "preterite-vs-imperfect-2",
    "level": "A2",
    "number": 8,
    "title": "Preterite vs. Imperfect, Part 2 of 2",
    "summary": "Learn to choose the right past tense — and combine both in a single story.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "Put it into practice",
        "body": [
          "Un hombre cuenta una historia sobre un día inolvidable."
        ],
        "examples": [
          {
            "es": "Era un día normal. Yo caminaba al trabajo cuando vi algo extraño en la calle."
          },
          {
            "es": "Un perro pequeño corría solo, sin dueño a la vista."
          },
          {
            "es": "Me acerqué despacio y el perro me miró. Tenía mucho miedo."
          },
          {
            "es": "Al final, encontré a su dueña dos calles más adelante. ¡Qué alivio sentí!"
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Por qué se acercó despacio el hombre al perro?",
            "options": [
              "Porque tenía prisa",
              "Porque el perro tenía miedo",
              "Porque llovía",
              "Porque era de noche"
            ],
            "correctIndex": 1,
            "explanation": "El texto dice que el perro \"tenía mucho miedo\", así que el hombre se acercó despacio."
          }
        ]
      },
      {
        "heading": "Vocabulary: Weather & Seasons",
        "body": [
          "Thirty words for describing weather — a natural fit for the scene-setting imperfect."
        ],
        "examples": [
          {
            "es": "el clima",
            "en": "the climate"
          },
          {
            "es": "hacer sol",
            "en": "to be sunny"
          },
          {
            "es": "hacer calor",
            "en": "to be hot"
          },
          {
            "es": "hacer frío",
            "en": "to be cold"
          },
          {
            "es": "hacer viento",
            "en": "to be windy"
          },
          {
            "es": "llover",
            "en": "to rain"
          },
          {
            "es": "la lluvia",
            "en": "the rain"
          },
          {
            "es": "nevar",
            "en": "to snow"
          },
          {
            "es": "la nieve",
            "en": "the snow"
          },
          {
            "es": "la tormenta",
            "en": "the storm"
          },
          {
            "es": "el trueno",
            "en": "the thunder"
          },
          {
            "es": "el relámpago",
            "en": "the lightning"
          },
          {
            "es": "la nube",
            "en": "the cloud"
          },
          {
            "es": "nublado",
            "en": "cloudy"
          },
          {
            "es": "despejado",
            "en": "clear (sky)"
          },
          {
            "es": "húmedo",
            "en": "humid"
          },
          {
            "es": "seco",
            "en": "dry"
          },
          {
            "es": "la primavera",
            "en": "spring"
          },
          {
            "es": "el verano",
            "en": "summer"
          },
          {
            "es": "el otoño",
            "en": "autumn"
          },
          {
            "es": "el invierno",
            "en": "winter"
          },
          {
            "es": "el pronóstico",
            "en": "the forecast"
          },
          {
            "es": "los grados",
            "en": "the degrees"
          },
          {
            "es": "la temperatura",
            "en": "the temperature"
          },
          {
            "es": "el paraguas",
            "en": "the umbrella"
          },
          {
            "es": "el arcoíris",
            "en": "the rainbow"
          },
          {
            "es": "la sombra",
            "en": "the shade"
          },
          {
            "es": "el hielo",
            "en": "the ice"
          },
          {
            "es": "la ola de calor",
            "en": "the heat wave"
          },
          {
            "es": "empapado",
            "en": "soaked"
          }
        ],
        "checkpoint": [
          {
            "type": "matching",
            "instructions": "Match each word to its meaning.",
            "pairs": [
              {
                "left": "el pronóstico",
                "right": "the forecast"
              },
              {
                "left": "nublado",
                "right": "cloudy"
              },
              {
                "left": "despejado",
                "right": "clear (sky)"
              },
              {
                "left": "húmedo",
                "right": "humid"
              },
              {
                "left": "el trueno",
                "right": "the thunder"
              },
              {
                "left": "el relámpago",
                "right": "the lightning"
              },
              {
                "left": "la tormenta",
                "right": "the storm"
              },
              {
                "left": "los grados",
                "right": "the degrees"
              },
              {
                "left": "el paraguas",
                "right": "the umbrella"
              },
              {
                "left": "hacer viento",
                "right": "to be windy"
              }
            ],
            "explanation": "These ten weather words often appear in imperfect-tense scene-setting."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "word-order",
        "prompt": "Ordena las palabras.",
        "words": [
          "Hacía",
          "mucho",
          "frío",
          "cuando",
          "llegamos",
          "al",
          "pueblo"
        ],
        "explanation": "Imperfecto (hacía) para el fondo, pretérito (llegamos) para la acción puntual.",
        "translation": "It was very cold when we arrived at the town."
      },
      {
        "type": "multiple-choice",
        "question": "En la historia del perro, ¿qué tiempo verbal describe \"el perro corría solo\"?",
        "options": [
          "Pretérito",
          "Imperfecto",
          "Futuro",
          "Presente"
        ],
        "correctIndex": 1,
        "explanation": "\"Corría\" describe una acción en progreso, sin final marcado: imperfecto."
      },
      {
        "type": "translate",
        "direction": "es-en",
        "prompt": "Translate this sentence to English.",
        "source": "Yo leía un libro cuando se fue la luz.",
        "answer": "I was reading a book when the power went out.",
        "explanation": "Leía (imperfect, ongoing) is interrupted by se fue (preterite, sudden event)."
      }
    ]
  },
  {
    "slug": "preterite-vs-imperfect-mastery-check",
    "level": "A2",
    "number": 9,
    "title": "Mastery Check: Preterite vs. Imperfect",
    "summary": "A focused test that pushes you to choose correctly between the preterite and imperfect — including irregular imperfects, key time markers, and meaning-changing verbs — across fresh narrative contexts.",
    "duration": "10 min",
    "sections": [],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "¿Qué oración usa correctamente el patrón \"acción en progreso interrumpida\"?",
        "options": [
          "Yo estudiaba cuando mis padres llegaron a casa.",
          "Yo estudié cuando mis padres llegaban a casa.",
          "Yo estudiaba cuando mis padres llegaban a casa.",
          "Yo estudié cuando mis padres llegaron a casa."
        ],
        "correctIndex": 0,
        "explanation": "La acción en progreso (estudiaba, imperfecto) es interrumpida por un evento puntual (llegaron, pretérito)."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la primera parte de la historia.",
        "sentence": "___ (ser, imperfecto) un sábado de verano y hacía mucho calor.",
        "answer": "Era",
        "explanation": "\"Ser\" en el fondo de una historia (para describir el día) va en imperfecto: era."
      },
      {
        "type": "fill-blank",
        "prompt": "Sigue completando la historia.",
        "sentence": "El cielo ___ (estar, imperfecto) despejado cuando salimos de casa.",
        "answer": "estaba",
        "explanation": "La descripción del cielo es parte del fondo de la escena: imperfecto."
      },
      {
        "type": "fill-blank",
        "prompt": "Sigue completando la historia.",
        "sentence": "Mis amigos y yo ___ (caminar, imperfecto) por la playa cuando el cielo se puso gris.",
        "answer": "caminábamos",
        "explanation": "\"Caminar\" describe una acción en progreso interrumpida por otro evento: imperfecto."
      },
      {
        "type": "fill-blank",
        "prompt": "Sigue completando la historia.",
        "sentence": "De repente ___ (empezar, pretérito) a llover fuerte.",
        "answer": "empezó",
        "explanation": "\"De repente\" señala una acción puntual y repentina: pretérito."
      },
      {
        "type": "fill-blank",
        "prompt": "Termina esta parte de la historia.",
        "sentence": "Todos nosotros ___ (correr, pretérito) a buscar refugio.",
        "answer": "corrimos",
        "explanation": "Una reacción rápida y completa se expresa en pretérito."
      },
      {
        "type": "translate",
        "direction": "es-en",
        "prompt": "Translate this sentence to English.",
        "source": "Nos reímos mucho después, porque nadie tenía paraguas.",
        "answer": "We laughed a lot afterward, because nobody had an umbrella.",
        "explanation": "Reímos (pretérito) es la reacción puntual; tenía (imperfecto) describe el estado de fondo (nadie tenía paraguas)."
      },
      {
        "type": "multiple-choice",
        "question": "¿Qué oración es correcta?",
        "options": [
          "Mi abuelo tenía ochenta años cuando aprendió a nadar.",
          "Mi abuelo tuvo ochenta años cuando aprendió a nadar.",
          "Mi abuelo tenía ochenta años cuando aprendía a nadar.",
          "Mi abuelo tuvo ochenta años cuando aprendía a nadar."
        ],
        "correctIndex": 0,
        "explanation": "La edad se describe siempre en imperfecto (tenía); aprender a nadar es un logro puntual, así que va en pretérito (aprendió)."
      },
      {
        "type": "multiple-choice",
        "question": "¿Qué oración significa que dos personas se conocieron por primera vez en una fiesta?",
        "options": [
          "Ana y Luis se conocían en una fiesta.",
          "Ana y Luis se conocieron en una fiesta.",
          "Ana y Luis se conocen en una fiesta.",
          "Ana y Luis se van a conocer en una fiesta."
        ],
        "correctIndex": 1,
        "explanation": "\"Conocer\" en pretérito (conocieron) significa \"met for the first time\"; en imperfecto (conocían) significaría que ya se conocían de antes."
      },
      {
        "type": "multi-select",
        "question": "¿Qué expresiones normalmente señalan el pretérito? (Elige todas las correctas)",
        "options": [
          "el mes pasado",
          "constantemente",
          "en aquel momento",
          "cada verano"
        ],
        "correctIndexes": [
          0,
          2
        ],
        "explanation": "\"Constantemente\" y \"cada verano\" describen acciones habituales y van con el imperfecto."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras.",
        "words": [
          "Nosotros",
          "esperábamos",
          "el",
          "autobús",
          "cuando",
          "empezó",
          "a",
          "nevar"
        ],
        "translation": "We were waiting for the bus when it started to snow.",
        "explanation": "Imperfecto (esperábamos) para la acción en progreso; pretérito (empezó) para la interrupción puntual."
      },
      {
        "type": "matching",
        "instructions": "Match each time expression to the tense it usually signals.",
        "pairs": [
          {
            "left": "todos los veranos",
            "right": "imperfecto (acción habitual)"
          },
          {
            "left": "anoche",
            "right": "pretérito (acción puntual)"
          },
          {
            "left": "mientras",
            "right": "imperfecto (acción en progreso)"
          },
          {
            "left": "de pronto",
            "right": "pretérito (acción repentina)"
          },
          {
            "left": "normalmente",
            "right": "imperfecto (costumbre)"
          }
        ],
        "explanation": "Reconocer estas palabras clave ayuda a elegir el tiempo verbal correcto con rapidez."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa con el verbo correcto.",
        "sentence": "De niña, yo ___ (ver, imperfecto) dibujos animados todos los sábados.",
        "answer": "veía",
        "explanation": "\"Ver\" es uno de los pocos verbos irregulares en imperfecto: veía, veías, veía, veíamos..."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa con el verbo correcto.",
        "sentence": "Antes, nosotros ___ (ir, imperfecto) a la playa cada verano, pero el año pasado no fuimos.",
        "answer": "íbamos",
        "explanation": "\"Ir\" es irregular en imperfecto (iba, ibas, iba, íbamos...); aquí describe una costumbre pasada, en contraste con \"fuimos\" (pretérito)."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Translate this sentence to Spanish.",
        "source": "It was midnight when the phone rang.",
        "answer": "Era medianoche cuando sonó el teléfono.",
        "altAnswers": [
          "Eran las doce de la noche cuando sonó el teléfono."
        ],
        "explanation": "La hora en el pasado siempre va en imperfecto (era); el timbrazo puntual va en pretérito (sonó)."
      },
      {
        "type": "multiple-choice",
        "question": "Cuando leí la carta, ___ (saber) la verdad por primera vez.",
        "options": [
          "sabía",
          "supe",
          "sabré",
          "sé"
        ],
        "correctIndex": 1,
        "explanation": "\"Saber\" en pretérito (supe) significa \"found out\"; en imperfecto (sabía) significaría que ya lo sabía de antes."
      },
      {
        "type": "multi-select",
        "question": "¿Qué oraciones usan correctamente el pretérito y el imperfecto? (Elige todas las correctas)",
        "options": [
          "Mientras cocinaba, sonó el timbre.",
          "Mientras cociné, sonó el timbre.",
          "Eran las tres cuando llegamos.",
          "Fueron las tres cuando llegábamos."
        ],
        "correctIndexes": [
          0,
          2
        ],
        "explanation": "La hora siempre va en imperfecto (eran) y una acción en progreso también (cocinaba); \"cociné\" y \"fueron\" están mal usados en este contexto."
      }
    ]
  },
  {
    "slug": "direct-object-pronouns-1",
    "level": "A2",
    "number": 10,
    "title": "Direct Object Pronouns, Part 1 of 2",
    "summary": "Stop repeating nouns — replace them with lo, la, los, and las.",
    "duration": "6 min",
    "sections": [
      {
        "heading": "What is a direct object?",
        "body": [
          "The direct object receives the action of the verb directly — it answers \"what?\" or \"whom?\". In \"Compro el libro,\" el libro is the direct object."
        ],
        "examples": [
          {
            "es": "Compro el libro.",
            "en": "I buy the book."
          },
          {
            "es": "Veo a mi hermana.",
            "en": "I see my sister."
          }
        ]
      },
      {
        "heading": "Direct object pronouns: me, te, lo/la, nos, os, los/las",
        "body": [
          "These pronouns replace a direct object already mentioned: me (me), te (you), lo/la (him/her/it), nos (us), os (you all, Spain), los/las (them).",
          "Lo and los replace masculine nouns; la and las replace feminine ones — matching gender and number, not meaning."
        ],
        "examples": [
          {
            "es": "¿Tienes el libro? Sí, lo tengo.",
            "en": "Do you have the book? Yes, I have it."
          },
          {
            "es": "¿Ves a María? Sí, la veo.",
            "en": "Do you see María? Yes, I see her."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Reemplaza el objeto directo con el pronombre correcto.",
            "sentence": "¿Compraste las entradas? Sí, ___ compré.",
            "answer": "las",
            "explanation": "\"Las entradas\" es femenino plural, así que el pronombre es las."
          }
        ]
      },
      {
        "heading": "Placement: before conjugated verbs",
        "body": [
          "Direct object pronouns go right before a conjugated verb — not after it, unlike English."
        ],
        "examples": [
          {
            "es": "Lo necesito ahora.",
            "en": "I need it now."
          },
          {
            "es": "No la conozco.",
            "en": "I don't know her."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Cuál es correcto?",
            "options": [
              "Necesito lo ahora.",
              "Lo necesito ahora.",
              "Necesito ahora lo.",
              "Lo ahora necesito."
            ],
            "correctIndex": 1,
            "explanation": "El pronombre de objeto directo va antes del verbo conjugado: lo necesito."
          }
        ]
      },
      {
        "heading": "Placement: infinitives and gerunds",
        "body": [
          "With an infinitive or a gerund (-ando/-iendo form), the pronoun can either attach to the end, or move in front of the whole verb phrase — both are correct."
        ],
        "examples": [
          {
            "es": "Voy a comprarlo. / Lo voy a comprar.",
            "en": "I'm going to buy it."
          },
          {
            "es": "Estoy leyéndolo. / Lo estoy leyendo.",
            "en": "I'm reading it."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Reescribe la oración usando el pronombre.",
            "sentence": "Voy a llamar a mis padres. → Voy a ___.",
            "answer": "llamarlos",
            "explanation": "Con un infinitivo, el pronombre puede unirse al final: llamarlos."
          }
        ]
      },
      {
        "heading": "Put it into practice",
        "body": [
          "Una clienta y un vendedor hablan en una tienda de ropa."
        ],
        "examples": [
          {
            "es": "¿Tiene esta camisa en talla mediana?",
            "en": "Do you have this shirt in medium?"
          },
          {
            "es": "Sí, la tenemos. ¿La quiere probar?"
          },
          {
            "es": "Sí, por favor. También busco unos zapatos negros."
          },
          {
            "es": "Los tenemos en la sección de allá. ¿Se los muestro?"
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Qué pronombre reemplaza \"esta camisa\"?",
            "options": [
              "lo",
              "la",
              "los",
              "las"
            ],
            "correctIndex": 1,
            "explanation": "\"Camisa\" es femenino singular, así que el pronombre correcto es la."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "fill-blank",
        "prompt": "Reemplaza el objeto directo.",
        "sentence": "¿Ves la tienda? Sí, ___ veo.",
        "answer": "la",
        "explanation": "\"La tienda\" es femenino singular: la."
      },
      {
        "type": "multiple-choice",
        "question": "¿Cuál es correcto?",
        "options": [
          "Voy a comprarlos.",
          "Voy comprarlos a.",
          "Los voy a comprarlos.",
          "A comprarlos voy."
        ],
        "correctIndex": 0,
        "explanation": "El pronombre puede unirse al infinitivo: comprarlos."
      },
      {
        "type": "fill-blank",
        "prompt": "Reemplaza el objeto directo.",
        "sentence": "¿Tienes los boletos? No, no ___ tengo.",
        "answer": "los",
        "explanation": "\"Los boletos\" es masculino plural: los."
      },
      {
        "type": "multi-select",
        "question": "¿Qué pronombres son femeninos? (Elige todas las correctas)",
        "options": [
          "lo",
          "la",
          "los",
          "las"
        ],
        "correctIndexes": [
          1,
          3
        ],
        "explanation": "La (singular) y las (plural) son los pronombres femeninos."
      }
    ]
  },
  {
    "slug": "direct-object-pronouns-2",
    "level": "A2",
    "number": 11,
    "title": "Direct Object Pronouns, Part 2 of 2",
    "summary": "Stop repeating nouns — replace them with lo, la, los, and las.",
    "duration": "6 min",
    "sections": [
      {
        "heading": "Vocabulary: Shopping & Objects",
        "body": [
          "Thirty shopping words to practice with direct object pronouns."
        ],
        "examples": [
          {
            "es": "la tienda",
            "en": "the store"
          },
          {
            "es": "el centro comercial",
            "en": "the mall"
          },
          {
            "es": "el precio",
            "en": "the price"
          },
          {
            "es": "la oferta",
            "en": "the deal / offer"
          },
          {
            "es": "la rebaja",
            "en": "the discount"
          },
          {
            "es": "caro",
            "en": "expensive"
          },
          {
            "es": "barato",
            "en": "cheap"
          },
          {
            "es": "probarse",
            "en": "to try on"
          },
          {
            "es": "la talla",
            "en": "the size"
          },
          {
            "es": "el color",
            "en": "the color"
          },
          {
            "es": "el efectivo",
            "en": "cash"
          },
          {
            "es": "la tarjeta de crédito",
            "en": "the credit card"
          },
          {
            "es": "pagar",
            "en": "to pay"
          },
          {
            "es": "el recibo",
            "en": "the receipt"
          },
          {
            "es": "devolver",
            "en": "to return (an item)"
          },
          {
            "es": "cambiar",
            "en": "to exchange"
          },
          {
            "es": "el mostrador",
            "en": "the counter"
          },
          {
            "es": "el probador",
            "en": "the fitting room"
          },
          {
            "es": "elegir",
            "en": "to choose"
          },
          {
            "es": "comprar",
            "en": "to buy"
          },
          {
            "es": "regatear",
            "en": "to haggle"
          },
          {
            "es": "el vendedor / la vendedora",
            "en": "the salesperson"
          },
          {
            "es": "el cliente",
            "en": "the customer"
          },
          {
            "es": "hacer fila",
            "en": "to wait in line"
          },
          {
            "es": "la caja",
            "en": "the checkout"
          },
          {
            "es": "gastar",
            "en": "to spend (money)"
          },
          {
            "es": "ahorrar",
            "en": "to save (money)"
          },
          {
            "es": "el descuento",
            "en": "the discount"
          },
          {
            "es": "la marca",
            "en": "the brand"
          },
          {
            "es": "de segunda mano",
            "en": "secondhand"
          }
        ],
        "checkpoint": [
          {
            "type": "matching",
            "instructions": "Match each word to its meaning.",
            "pairs": [
              {
                "left": "la rebaja",
                "right": "the discount"
              },
              {
                "left": "probarse",
                "right": "to try on"
              },
              {
                "left": "el probador",
                "right": "the fitting room"
              },
              {
                "left": "devolver",
                "right": "to return (an item)"
              },
              {
                "left": "el recibo",
                "right": "the receipt"
              },
              {
                "left": "hacer fila",
                "right": "to wait in line"
              },
              {
                "left": "la caja",
                "right": "the checkout"
              },
              {
                "left": "el mostrador",
                "right": "the counter"
              },
              {
                "left": "elegir",
                "right": "to choose"
              },
              {
                "left": "el vendedor",
                "right": "the salesperson"
              }
            ],
            "explanation": "These ten words describe a typical shopping trip."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "word-order",
        "prompt": "Ordena las palabras.",
        "words": [
          "No",
          "lo",
          "necesito",
          "ahora",
          "mismo"
        ],
        "explanation": "El pronombre va antes del verbo conjugado.",
        "translation": "I don't need it right now."
      },
      {
        "type": "multiple-choice",
        "question": "¿Qué significa \"probarse\"?",
        "options": [
          "to prove",
          "to try on",
          "to taste",
          "to probe"
        ],
        "correctIndex": 1,
        "explanation": "\"Probarse\" means \"to try on\" (clothing)."
      },
      {
        "type": "matching",
        "instructions": "Match the sentence to its direct object pronoun.",
        "pairs": [
          {
            "left": "¿Tienes el mapa? Sí, ___ tengo.",
            "right": "lo"
          },
          {
            "left": "¿Ves a mis hermanas? Sí, ___ veo.",
            "right": "las"
          },
          {
            "left": "¿Compraste la fruta? Sí, ___ compré.",
            "right": "la"
          },
          {
            "left": "¿Trajiste los libros? Sí, ___ traje.",
            "right": "los"
          }
        ],
        "explanation": "Match gender and number to the noun being replaced, not to the meaning."
      }
    ]
  },
  {
    "slug": "indirect-object-pronouns-1",
    "level": "A2",
    "number": 12,
    "title": "Indirect Object Pronouns, Part 1 of 2",
    "summary": "Say to whom or for whom something happens with me, te, le, nos, os, and les.",
    "duration": "6 min",
    "sections": [
      {
        "heading": "¿Qué es un objeto indirecto?",
        "body": [
          "El objeto indirecto indica a quién o para quién ocurre la acción. Responde a la pregunta \"¿a quién?\" o \"¿para quién?\"."
        ],
        "examples": [
          {
            "es": "Le doy un regalo a mi mamá.",
            "en": "I give my mom a gift."
          }
        ]
      },
      {
        "heading": "Los pronombres: me, te, le, nos, os, les",
        "body": [
          "A diferencia del objeto directo, le y les no cambian según el género — solo según la persona y el número."
        ],
        "examples": [
          {
            "es": "Me escribe una carta.",
            "en": "He/she writes me a letter."
          },
          {
            "es": "Les mando un mensaje.",
            "en": "I send them a message."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Elige el pronombre correcto.",
            "sentence": "___ doy las gracias a mis amigos. (a ellos)",
            "answer": "Les",
            "explanation": "\"A ellos\" corresponde al pronombre plural les."
          }
        ]
      },
      {
        "heading": "Verbos que casi siempre llevan objeto indirecto",
        "body": [
          "dar, decir, escribir, mandar, prestar, regalar, contar, explicar, mostrar — todos describen algo que se transmite a otra persona."
        ],
        "examples": [
          {
            "es": "Te presto mi computadora.",
            "en": "I'll lend you my computer."
          },
          {
            "es": "Nos regalaron flores.",
            "en": "They gave us flowers as a gift."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Qué pronombre completa la oración? \"___ explico la tarea a ti.\"",
            "options": [
              "Le",
              "Te",
              "Les",
              "Nos"
            ],
            "correctIndex": 1,
            "explanation": "\"A ti\" corresponde al pronombre te."
          }
        ]
      },
      {
        "heading": "Le/les con una frase aclaratoria",
        "body": [
          "Como le y les no indican género, a menudo se agrega \"a + persona\" para aclarar de quién se habla: le escribo a mi hermano."
        ],
        "examples": [
          {
            "es": "Le escribo a mi hermano.",
            "en": "I write to my brother."
          },
          {
            "es": "Les compro un regalo a mis padres.",
            "en": "I buy my parents a gift."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa la oración con la frase aclaratoria correcta.",
            "sentence": "Le mando un mensaje ___ mi jefa.",
            "answer": "a",
            "explanation": "La frase aclaratoria empieza con \"a\": a mi jefa."
          }
        ]
      },
      {
        "heading": "Put it into practice",
        "body": [
          "Un mensaje de texto entre dos amigos sobre un regalo de cumpleaños."
        ],
        "examples": [
          {
            "es": "¿Le compraste algo a Marta para su cumpleaños?",
            "en": "Did you buy Marta something for her birthday?"
          },
          {
            "es": "Sí, le compré un libro. ¿Y tú?"
          },
          {
            "es": "Yo le voy a regalar unos audífonos. Los pedí por internet."
          },
          {
            "es": "Perfecto. ¿Le mandamos un mensaje para avisarle de la fiesta?"
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Qué le va a regalar el segundo amigo a Marta?",
            "options": [
              "Un libro",
              "Unos audífonos",
              "Flores",
              "Una tarjeta"
            ],
            "correctIndex": 1,
            "explanation": "El texto dice: \"le voy a regalar unos audífonos.\""
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "fill-blank",
        "prompt": "Elige el pronombre correcto.",
        "sentence": "¿___ prestas tu carro a mí?",
        "answer": "Me",
        "explanation": "\"A mí\" corresponde al pronombre me."
      },
      {
        "type": "multiple-choice",
        "question": "¿Cuál oración es correcta?",
        "options": [
          "Doy le un regalo.",
          "Le doy un regalo.",
          "Le regalo doy.",
          "Doy un regalo le."
        ],
        "correctIndex": 1,
        "explanation": "El pronombre indirecto va antes del verbo conjugado: le doy."
      },
      {
        "type": "multi-select",
        "question": "¿Qué verbos suelen llevar objeto indirecto? (Elige todas las correctas)",
        "options": [
          "dar",
          "correr",
          "prestar",
          "explicar"
        ],
        "correctIndexes": [
          0,
          2,
          3
        ],
        "explanation": "\"Correr\" (to run) no suele llevar objeto indirecto."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa con el pronombre correcto.",
        "sentence": "___ escribimos una carta a nuestros abuelos.",
        "answer": "Les",
        "explanation": "\"A nuestros abuelos\" es plural: les."
      }
    ]
  },
  {
    "slug": "indirect-object-pronouns-2",
    "level": "A2",
    "number": 13,
    "title": "Indirect Object Pronouns, Part 2 of 2",
    "summary": "Say to whom or for whom something happens with me, te, le, nos, os, and les.",
    "duration": "6 min",
    "sections": [
      {
        "heading": "Vocabulary: Communication & Technology",
        "body": [
          "Thirty words for phones, messages, and screens — natural territory for indirect objects."
        ],
        "examples": [
          {
            "es": "el celular",
            "en": "the cell phone"
          },
          {
            "es": "la pantalla",
            "en": "the screen"
          },
          {
            "es": "la aplicación",
            "en": "the app"
          },
          {
            "es": "mandar un mensaje",
            "en": "to send a message"
          },
          {
            "es": "llamar",
            "en": "to call"
          },
          {
            "es": "la llamada",
            "en": "the call"
          },
          {
            "es": "el correo electrónico",
            "en": "the email"
          },
          {
            "es": "escribir",
            "en": "to write"
          },
          {
            "es": "enviar",
            "en": "to send"
          },
          {
            "es": "bloquear",
            "en": "to block (a contact)"
          },
          {
            "es": "silenciar",
            "en": "to mute (a phone)"
          },
          {
            "es": "la contraseña",
            "en": "the password"
          },
          {
            "es": "descargar",
            "en": "to download"
          },
          {
            "es": "actualizar",
            "en": "to update (an app)"
          },
          {
            "es": "la red social",
            "en": "the social network"
          },
          {
            "es": "publicar",
            "en": "to post"
          },
          {
            "es": "reenviar",
            "en": "to forward"
          },
          {
            "es": "grabar",
            "en": "to record"
          },
          {
            "es": "la batería",
            "en": "the battery"
          },
          {
            "es": "cargar",
            "en": "to charge"
          },
          {
            "es": "conectar",
            "en": "to connect"
          },
          {
            "es": "el wifi",
            "en": "the wifi"
          },
          {
            "es": "la señal",
            "en": "the signal"
          },
          {
            "es": "navegar",
            "en": "to browse"
          },
          {
            "es": "la computadora",
            "en": "the computer"
          },
          {
            "es": "el mensaje de voz",
            "en": "the voice message"
          },
          {
            "es": "la videollamada",
            "en": "the video call"
          },
          {
            "es": "el altavoz",
            "en": "the speaker"
          },
          {
            "es": "el correo no deseado",
            "en": "spam email"
          },
          {
            "es": "instalar",
            "en": "to install"
          }
        ],
        "checkpoint": [
          {
            "type": "matching",
            "instructions": "Match each word to its meaning.",
            "pairs": [
              {
                "left": "la contraseña",
                "right": "the password"
              },
              {
                "left": "descargar",
                "right": "to download"
              },
              {
                "left": "bloquear",
                "right": "to block (a contact)"
              },
              {
                "left": "actualizar",
                "right": "to update (an app)"
              },
              {
                "left": "grabar",
                "right": "to record"
              },
              {
                "left": "cargar",
                "right": "to charge"
              },
              {
                "left": "la señal",
                "right": "the signal"
              },
              {
                "left": "navegar",
                "right": "to browse"
              },
              {
                "left": "publicar",
                "right": "to post"
              },
              {
                "left": "la red social",
                "right": "the social network"
              }
            ],
            "explanation": "These ten words cover phones, apps, and social media."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "word-order",
        "prompt": "Ordena las palabras.",
        "words": [
          "Te",
          "mando",
          "el",
          "documento",
          "por",
          "correo"
        ],
        "explanation": "El pronombre indirecto va justo antes del verbo.",
        "translation": "I'll send you the document by email."
      },
      {
        "type": "translate",
        "direction": "es-en",
        "prompt": "Translate this sentence to English.",
        "source": "Mi abuela nos contaba historias todas las noches.",
        "answer": "My grandmother used to tell us stories every night.",
        "explanation": "Nos is the indirect object pronoun: \"to us.\""
      },
      {
        "type": "multiple-choice",
        "question": "¿Cambia le/les según el género?",
        "options": [
          "Sí, siempre",
          "No, solo según persona y número",
          "Solo en plural",
          "Solo con verbos irregulares"
        ],
        "correctIndex": 1,
        "explanation": "Le y les no distinguen género — solo persona y número."
      }
    ]
  },
  {
    "slug": "reflexive-verbs-daily-routine-1",
    "level": "A2",
    "number": 14,
    "title": "Reflexive Verbs & Daily Routine, Part 1 of 2",
    "summary": "Describe your morning and night routines with verbs that act back on the subject.",
    "duration": "6 min",
    "sections": [
      {
        "heading": "¿Qué hace que un verbo sea reflexivo?",
        "body": [
          "Un verbo reflexivo indica que el sujeto hace la acción a sí mismo. En el infinitivo, lleva \"se\" al final: levantarse, bañarse, vestirse."
        ],
        "examples": [
          {
            "es": "Me levanto a las siete.",
            "en": "I get (myself) up at seven."
          }
        ]
      },
      {
        "heading": "Los pronombres reflexivos: me, te, se, nos, os, se",
        "body": [
          "El pronombre reflexivo va antes del verbo conjugado, igual que los objetos directo e indirecto."
        ],
        "examples": [
          {
            "es": "me levanto, te levantas, se levanta, nos levantamos, os levantáis, se levantan",
            "en": "I/you/he... get(s) up"
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Conjugate the reflexive verb.",
            "sentence": "Ella ___ (despertarse) a las seis todos los días.",
            "answer": "se despierta",
            "explanation": "Despertarse conjugates like a stem-changing e→ie verb, plus the reflexive pronoun se."
          }
        ]
      },
      {
        "heading": "Verbos reflexivos comunes de la rutina diaria",
        "body": [
          "despertarse, bañarse, ducharse, vestirse, cepillarse (los dientes), peinarse, acostarse, dormirse — todos describen pasos de un día típico."
        ],
        "examples": [
          {
            "es": "Me ducho y luego me visto.",
            "en": "I shower and then I get dressed."
          },
          {
            "es": "Nos acostamos temprano entre semana.",
            "en": "We go to bed early on weekdays."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Cuál verbo describe cepillarse el pelo?",
            "options": [
              "peinarse",
              "afeitarse",
              "maquillarse",
              "vestirse"
            ],
            "correctIndex": 0,
            "explanation": "Peinarse means \"to comb/style one's hair.\""
          }
        ]
      },
      {
        "heading": "Reflexivo vs. no reflexivo: mismo verbo, distinto significado",
        "body": [
          "Muchos verbos cambian de significado con \"se\": lavar (to wash something) vs. lavarse (to wash oneself); poner (to put) vs. ponerse (to put on / become)."
        ],
        "examples": [
          {
            "es": "Lavo los platos. / Me lavo las manos.",
            "en": "I wash the dishes. / I wash my hands."
          },
          {
            "es": "Pongo la mesa. / Me pongo el abrigo.",
            "en": "I set the table. / I put on my coat."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Elige la forma correcta.",
            "sentence": "Antes de comer, yo ___ (lavarse) las manos.",
            "answer": "me lavo",
            "explanation": "La acción recae sobre el propio sujeto (sus manos): forma reflexiva."
          }
        ]
      },
      {
        "heading": "Put it into practice",
        "body": [
          "Una descripción de la rutina matutina de Carlos."
        ],
        "examples": [
          {
            "es": "Carlos se despierta a las seis y media."
          },
          {
            "es": "Se ducha, se cepilla los dientes y se viste rápido."
          },
          {
            "es": "Después se peina, desayuna algo ligero y se va al trabajo."
          },
          {
            "es": "Los fines de semana, se levanta más tarde y se relaja en casa."
          }
        ],
        "checkpoint": [
          {
            "type": "multi-select",
            "question": "¿Qué hace Carlos por la mañana? (Elige todas las correctas)",
            "options": [
              "Se ducha",
              "Se maquilla",
              "Se cepilla los dientes",
              "Se viste rápido"
            ],
            "correctIndexes": [
              0,
              2,
              3
            ],
            "explanation": "El texto no menciona que Carlos se maquille."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "fill-blank",
        "prompt": "Conjugate the reflexive verb.",
        "sentence": "Yo ___ (acostarse) a las once de la noche.",
        "answer": "me acuesto",
        "explanation": "Acostarse: stem-changing o→ue, plus reflexive pronoun me."
      },
      {
        "type": "multiple-choice",
        "question": "¿Cuál oración es reflexiva?",
        "options": [
          "Baño al perro.",
          "Me baño antes de dormir.",
          "Baño la ropa.",
          "Bañamos el carro."
        ],
        "correctIndex": 1,
        "explanation": "\"Me baño\" indica que la acción recae sobre el propio sujeto: reflexivo."
      },
      {
        "type": "multi-select",
        "question": "¿Qué verbos son reflexivos en su forma de rutina diaria? (Elige todas las correctas)",
        "options": [
          "despertarse",
          "comer",
          "vestirse",
          "cepillarse"
        ],
        "correctIndexes": [
          0,
          2,
          3
        ],
        "explanation": "\"Comer\" no es reflexivo por sí mismo."
      }
    ]
  },
  {
    "slug": "reflexive-verbs-daily-routine-2",
    "level": "A2",
    "number": 15,
    "title": "Reflexive Verbs & Daily Routine, Part 2 of 2",
    "summary": "Describe your morning and night routines with verbs that act back on the subject.",
    "duration": "5 min",
    "sections": [
      {
        "heading": "Vocabulary: Body & Daily Routine",
        "body": [
          "Thirty words for the body and the daily routine described above."
        ],
        "examples": [
          {
            "es": "la cara",
            "en": "the face"
          },
          {
            "es": "el pelo",
            "en": "the hair"
          },
          {
            "es": "los dientes",
            "en": "the teeth"
          },
          {
            "es": "la mano",
            "en": "the hand"
          },
          {
            "es": "el cuerpo",
            "en": "the body"
          },
          {
            "es": "despertarse",
            "en": "to wake up"
          },
          {
            "es": "levantarse",
            "en": "to get up"
          },
          {
            "es": "ducharse",
            "en": "to shower"
          },
          {
            "es": "bañarse",
            "en": "to bathe"
          },
          {
            "es": "cepillarse",
            "en": "to brush"
          },
          {
            "es": "peinarse",
            "en": "to comb/style one's hair"
          },
          {
            "es": "vestirse",
            "en": "to get dressed"
          },
          {
            "es": "maquillarse",
            "en": "to put on makeup"
          },
          {
            "es": "afeitarse",
            "en": "to shave"
          },
          {
            "es": "estirarse",
            "en": "to stretch"
          },
          {
            "es": "arreglarse",
            "en": "to get ready"
          },
          {
            "es": "acostarse",
            "en": "to go to bed"
          },
          {
            "es": "dormirse",
            "en": "to fall asleep"
          },
          {
            "es": "la rutina",
            "en": "the routine"
          },
          {
            "es": "la toalla",
            "en": "the towel"
          },
          {
            "es": "el jabón",
            "en": "the soap"
          },
          {
            "es": "el champú",
            "en": "the shampoo"
          },
          {
            "es": "el cepillo de dientes",
            "en": "the toothbrush"
          },
          {
            "es": "secarse",
            "en": "to dry off"
          },
          {
            "es": "relajarse",
            "en": "to relax"
          },
          {
            "es": "el brazo",
            "en": "the arm"
          },
          {
            "es": "la pierna",
            "en": "the leg"
          },
          {
            "es": "el pie",
            "en": "the foot"
          },
          {
            "es": "el ojo",
            "en": "the eye"
          },
          {
            "es": "la oreja",
            "en": "the ear"
          }
        ],
        "checkpoint": [
          {
            "type": "matching",
            "instructions": "Match each word to its meaning.",
            "pairs": [
              {
                "left": "arreglarse",
                "right": "to get ready"
              },
              {
                "left": "secarse",
                "right": "to dry off"
              },
              {
                "left": "relajarse",
                "right": "to relax"
              },
              {
                "left": "el cepillo de dientes",
                "right": "the toothbrush"
              },
              {
                "left": "el champú",
                "right": "the shampoo"
              },
              {
                "left": "dormirse",
                "right": "to fall asleep"
              },
              {
                "left": "acostarse",
                "right": "to go to bed"
              },
              {
                "left": "maquillarse",
                "right": "to put on makeup"
              },
              {
                "left": "afeitarse",
                "right": "to shave"
              },
              {
                "left": "la rutina",
                "right": "the routine"
              }
            ],
            "explanation": "These ten words round out the daily-routine vocabulary."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "fill-blank",
        "prompt": "Conjugate the reflexive verb.",
        "sentence": "Nosotros ___ (vestirse) rápido para no llegar tarde.",
        "answer": "nos vestimos",
        "explanation": "Vestirse: stem-changing e→i, plus reflexive pronoun nos."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras.",
        "words": [
          "Ella",
          "se",
          "cepilla",
          "los",
          "dientes",
          "cada",
          "noche"
        ],
        "explanation": "El pronombre reflexivo va antes del verbo conjugado.",
        "translation": "She brushes her teeth every night."
      },
      {
        "type": "multiple-choice",
        "question": "¿Qué significa \"ponerse el abrigo\"?",
        "options": [
          "to set the coat",
          "to put on the coat",
          "to remove the coat",
          "to wash the coat"
        ],
        "correctIndex": 1,
        "explanation": "\"Ponerse\" + ropa significa \"to put on\" that clothing."
      }
    ]
  },
  {
    "slug": "comparisons-superlatives-1",
    "level": "A2",
    "number": 16,
    "title": "Comparisons & Superlatives, Part 1 of 2",
    "summary": "Compare people and things, and single out the best or worst of a group.",
    "duration": "6 min",
    "sections": [
      {
        "heading": "Comparaciones de desigualdad: más/menos...que",
        "body": [
          "Para comparar dos cosas desiguales, usa más...que (more...than) o menos...que (less...than)."
        ],
        "examples": [
          {
            "es": "Este vestido es más caro que ese.",
            "en": "This dress is more expensive than that one."
          },
          {
            "es": "Tengo menos dinero que tú.",
            "en": "I have less money than you."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa la comparación.",
            "sentence": "Mi hermano es ___ alto que yo. (more...than)",
            "answer": "más",
            "explanation": "\"Más...que\" expresa una comparación de superioridad: más llena el hueco y que se queda fijo."
          }
        ]
      },
      {
        "heading": "Comparaciones de igualdad: tan...como / tanto...como",
        "body": [
          "Para cosas iguales: tan + adjetivo/adverbio + como (as...as); tanto/a/os/as + sustantivo + como (as much/many...as)."
        ],
        "examples": [
          {
            "es": "Esta camisa es tan bonita como esa.",
            "en": "This shirt is as pretty as that one."
          },
          {
            "es": "Tengo tantos zapatos como mi hermana.",
            "en": "I have as many shoes as my sister."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Cuál es correcto para comparar cantidades de algo contable?",
            "options": [
              "tan...como",
              "tanto/a/os/as...como",
              "más que",
              "menos que"
            ],
            "correctIndex": 1,
            "explanation": "Tanto/a/os/as...como se usa con sustantivos, concordando en género y número."
          }
        ]
      },
      {
        "heading": "Comparativos irregulares",
        "body": [
          "Algunos adjetivos tienen formas comparativas especiales: bueno → mejor, malo → peor, viejo → mayor, joven → menor."
        ],
        "examples": [
          {
            "es": "Esta tienda es mejor que la otra.",
            "en": "This store is better than the other one."
          },
          {
            "es": "Mi hermano mayor vive en Madrid.",
            "en": "My older brother lives in Madrid."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Elige la forma comparativa correcta.",
            "sentence": "Este restaurante es ___ que el otro. (worse)",
            "answer": "peor",
            "explanation": "Malo tiene la forma irregular peor, no \"más malo\"."
          }
        ]
      },
      {
        "heading": "Superlativos: el/la/los/las más/menos...de",
        "body": [
          "El superlativo señala el extremo dentro de un grupo: el/la/los/las + más/menos + adjetivo + de."
        ],
        "examples": [
          {
            "es": "Es la tienda más grande de la ciudad.",
            "en": "It's the biggest store in the city."
          },
          {
            "es": "Son los zapatos más baratos de la tienda.",
            "en": "They're the cheapest shoes in the store."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa el superlativo.",
            "sentence": "Este es ___ vestido más elegante de la tienda.",
            "answer": "el",
            "explanation": "El superlativo lleva el artículo definido que concuerda con el sustantivo: el vestido."
          }
        ]
      },
      {
        "heading": "Put it into practice",
        "body": [
          "Dos amigas comparan ropa en una tienda."
        ],
        "examples": [
          {
            "es": "Mira, esta chaqueta es más bonita que la otra, ¿no crees?",
            "en": "Look, this jacket is prettier than the other one, don't you think?"
          },
          {
            "es": "Sí, pero es tan cara como el vestido azul."
          },
          {
            "es": "Es verdad. Creo que la roja es la mejor opción de todas."
          },
          {
            "es": "Y también es la más cómoda. ¡Me la llevo!"
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "Según la conversación, ¿cuál chaqueta es la mejor opción?",
            "options": [
              "La azul",
              "La roja",
              "La verde",
              "La negra"
            ],
            "correctIndex": 1,
            "explanation": "El texto dice: \"la roja es la mejor opción de todas.\""
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "fill-blank",
        "prompt": "Completa la comparación.",
        "sentence": "Este suéter es ___ caliente como ese abrigo. (as...as)",
        "answer": "tan",
        "explanation": "Tan...como compara cualidades iguales: tan llena el hueco y como se queda fijo."
      },
      {
        "type": "multiple-choice",
        "question": "¿Cómo se dice \"younger\"?",
        "options": [
          "más joven",
          "menor",
          "más pequeño",
          "menos joven"
        ],
        "correctIndex": 1,
        "explanation": "\"Menor\" es la forma comparativa irregular de joven cuando se habla de edad."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa el superlativo.",
        "sentence": "Esta es ___ falda más elegante de la tienda.",
        "answer": "la",
        "explanation": "El artículo concuerda con \"falda\", femenino: la."
      }
    ]
  },
  {
    "slug": "comparisons-superlatives-2",
    "level": "A2",
    "number": 17,
    "title": "Comparisons & Superlatives, Part 2 of 2",
    "summary": "Compare people and things, and single out the best or worst of a group.",
    "duration": "6 min",
    "sections": [
      {
        "heading": "Vocabulary: Clothing & Sizes",
        "body": [
          "Thirty words for clothing, sizes, and fit — perfect for practicing comparisons."
        ],
        "examples": [
          {
            "es": "la ropa",
            "en": "the clothing"
          },
          {
            "es": "la camisa",
            "en": "the shirt"
          },
          {
            "es": "el pantalón",
            "en": "the pants"
          },
          {
            "es": "el vestido",
            "en": "the dress"
          },
          {
            "es": "la falda",
            "en": "the skirt"
          },
          {
            "es": "el suéter",
            "en": "the sweater"
          },
          {
            "es": "la chaqueta",
            "en": "the jacket"
          },
          {
            "es": "los zapatos",
            "en": "the shoes"
          },
          {
            "es": "las botas",
            "en": "the boots"
          },
          {
            "es": "pequeño",
            "en": "small"
          },
          {
            "es": "mediano",
            "en": "medium"
          },
          {
            "es": "apretado",
            "en": "tight / snug"
          },
          {
            "es": "quedar bien / mal",
            "en": "to fit well / poorly"
          },
          {
            "es": "ancho",
            "en": "wide / loose"
          },
          {
            "es": "estrecho",
            "en": "narrow / tight"
          },
          {
            "es": "largo",
            "en": "long"
          },
          {
            "es": "corto",
            "en": "short"
          },
          {
            "es": "de moda",
            "en": "in style"
          },
          {
            "es": "cómodo",
            "en": "comfortable"
          },
          {
            "es": "el algodón",
            "en": "cotton"
          },
          {
            "es": "la tela",
            "en": "the fabric"
          },
          {
            "es": "el estilo",
            "en": "the style"
          },
          {
            "es": "elegante",
            "en": "elegant"
          },
          {
            "es": "combinar",
            "en": "to match / pair"
          },
          {
            "es": "el cinturón",
            "en": "the belt"
          },
          {
            "es": "el abrigo",
            "en": "the coat"
          },
          {
            "es": "la bufanda",
            "en": "the scarf"
          },
          {
            "es": "el sombrero",
            "en": "the hat"
          },
          {
            "es": "los guantes",
            "en": "the gloves"
          },
          {
            "es": "las medias",
            "en": "the socks / stockings"
          }
        ],
        "checkpoint": [
          {
            "type": "matching",
            "instructions": "Match each word to its meaning.",
            "pairs": [
              {
                "left": "quedar bien",
                "right": "to fit well"
              },
              {
                "left": "ancho",
                "right": "wide / loose"
              },
              {
                "left": "estrecho",
                "right": "narrow / tight"
              },
              {
                "left": "de moda",
                "right": "in style"
              },
              {
                "left": "la tela",
                "right": "the fabric"
              },
              {
                "left": "el algodón",
                "right": "cotton"
              },
              {
                "left": "combinar",
                "right": "to match / pair"
              },
              {
                "left": "el cinturón",
                "right": "the belt"
              },
              {
                "left": "cómodo",
                "right": "comfortable"
              },
              {
                "left": "el estilo",
                "right": "the style"
              }
            ],
            "explanation": "These ten words describe fit and style."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multi-select",
        "question": "¿Qué adjetivos tienen comparativos irregulares? (Elige todas las correctas)",
        "options": [
          "bueno",
          "caro",
          "malo",
          "viejo"
        ],
        "correctIndexes": [
          0,
          2,
          3
        ],
        "explanation": "\"Caro\" usa la forma regular: más caro."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras.",
        "words": [
          "Estos",
          "zapatos",
          "son",
          "tan",
          "cómodos",
          "como",
          "las",
          "botas"
        ],
        "explanation": "Comparación de igualdad: tan + adjetivo + como.",
        "translation": "These shoes are as comfortable as the boots."
      },
      {
        "type": "translate",
        "direction": "es-en",
        "prompt": "Translate this sentence to English.",
        "source": "Es el vestido más caro de toda la tienda.",
        "answer": "It's the most expensive dress in the whole store.",
        "explanation": "El superlativo usa el/la + más + adjetivo + de."
      }
    ]
  },
  {
    "slug": "future-tense-1",
    "level": "A2",
    "number": 18,
    "title": "The Future Tense, Part 1 of 2",
    "summary": "Talk about what will happen using the simple future — and its handful of irregular stems.",
    "duration": "6 min",
    "sections": [
      {
        "heading": "El futuro simple: verbos regulares",
        "body": [
          "Para los verbos regulares, no se cambia el infinitivo — simplemente se agregan las terminaciones: -é, -ás, -á, -emos, -éis, -án. Esto aplica a los tres grupos (-ar, -er, -ir) por igual."
        ],
        "examples": [
          {
            "es": "trabajaré, trabajarás, trabajará, trabajaremos, trabajaréis, trabajarán",
            "en": "I/you/he... will work"
          },
          {
            "es": "Mañana viajaré a Bogotá.",
            "en": "Tomorrow I will travel to Bogotá."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Conjugate the verb in the future.",
            "sentence": "Nosotros ___ (vivir) en esta ciudad por un año.",
            "answer": "viviremos",
            "explanation": "El futuro regular no cambia el infinitivo: vivir + emos = viviremos."
          }
        ]
      },
      {
        "heading": "Raíces irregulares del futuro",
        "body": [
          "Un grupo pequeño de verbos usa una raíz irregular, pero las mismas terminaciones: tener → tendr-, poner → pondr-, salir → saldr-, venir → vendr-, decir → dir-, hacer → har-, poder → podr-, querer → querr-, saber → sabr-, haber → habr-."
        ],
        "examples": [
          {
            "es": "tendré, tendrás, tendrá, tendremos, tendréis, tendrán",
            "en": "I/you/he... will have"
          },
          {
            "es": "¿Qué harás este fin de semana?",
            "en": "What will you do this weekend?"
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Cuál es la raíz irregular de \"decir\" en futuro?",
            "options": [
              "decir-",
              "dic-",
              "dir-",
              "dij-"
            ],
            "correctIndex": 2,
            "explanation": "El futuro de decir usa la raíz irregular dir-: diré, dirás, dirá..."
          }
        ]
      },
      {
        "heading": "Ir a + infinitivo vs. el futuro simple",
        "body": [
          "Ir a + infinitivo suena más informal, para planes cercanos o decididos. El futuro simple suena más formal, para predicciones o planes lejanos — y también expresa probabilidad en el presente."
        ],
        "examples": [
          {
            "es": "Voy a estudiar esta noche.",
            "en": "I'm going to study tonight. (near plan)"
          },
          {
            "es": "Estudiaré medicina algún día.",
            "en": "I will study medicine someday. (distant plan)"
          },
          {
            "es": "¿Qué hora será?",
            "en": "I wonder what time it is. (probability)"
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa con la forma correcta del futuro.",
            "sentence": "Algún día, ella ___ (ser) doctora.",
            "answer": "será",
            "explanation": "El futuro simple expresa un plan o predicción a largo plazo."
          }
        ]
      },
      {
        "heading": "Hablar de planes y predicciones",
        "body": [
          "El futuro es ideal para hacer predicciones, prometer algo, y hablar de metas profesionales o personales."
        ],
        "examples": [
          {
            "es": "Algún día tendré mi propia empresa.",
            "en": "Someday I will have my own company."
          },
          {
            "es": "Dentro de cinco años, viviremos en otro país.",
            "en": "Within five years, we will live in another country."
          }
        ],
        "checkpoint": [
          {
            "type": "multi-select",
            "question": "¿Qué expresiones se usan con el futuro? (Elige todas las correctas)",
            "options": [
              "algún día",
              "dentro de cinco años",
              "ayer",
              "en el futuro"
            ],
            "correctIndexes": [
              0,
              1,
              3
            ],
            "explanation": "\"Ayer\" (yesterday) es una expresión de pasado, no de futuro."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "fill-blank",
        "prompt": "Conjugate the verb in the future.",
        "sentence": "Yo ___ (tener) una reunión mañana.",
        "answer": "tendré",
        "explanation": "Tener toma la raíz irregular tendr- en el futuro."
      },
      {
        "type": "multiple-choice",
        "question": "¿Cuál es la raíz irregular de \"hacer\" en futuro?",
        "options": [
          "hac-",
          "hic-",
          "har-",
          "hag-"
        ],
        "correctIndex": 2,
        "explanation": "El futuro de hacer usa la raíz irregular har-: haré, harás, hará..."
      },
      {
        "type": "fill-blank",
        "prompt": "Conjugate the verb in the future.",
        "sentence": "Ellos ___ (poder) terminar el proyecto a tiempo.",
        "answer": "podrán",
        "explanation": "Poder toma la raíz irregular podr- en el futuro."
      },
      {
        "type": "multi-select",
        "question": "¿Qué verbos tienen raíz irregular en el futuro? (Elige todas las correctas)",
        "options": [
          "tener",
          "hablar",
          "salir",
          "saber"
        ],
        "correctIndexes": [
          0,
          2,
          3
        ],
        "explanation": "\"Hablar\" es regular en el futuro: hablaré, hablarás..."
      }
    ]
  },
  {
    "slug": "future-tense-2",
    "level": "A2",
    "number": 19,
    "title": "The Future Tense, Part 2 of 2",
    "summary": "Talk about what will happen using the simple future — and its handful of irregular stems.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "Put it into practice",
        "body": [
          "Una entrevista de trabajo sobre planes futuros."
        ],
        "examples": [
          {
            "es": "¿Dónde se ve usted dentro de cinco años?",
            "en": "Where do you see yourself in five years?"
          },
          {
            "es": "Creo que tendré más experiencia y seré gerente de mi propio equipo."
          },
          {
            "es": "¿Y qué hará para lograr esa meta?"
          },
          {
            "es": "Trabajaré duro, aprenderé nuevas habilidades y buscaré oportunidades de ascenso."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Qué meta menciona la persona entrevistada?",
            "options": [
              "Renunciar al trabajo",
              "Ser gerente de su propio equipo",
              "Trabajar desde casa",
              "Jubilarse pronto"
            ],
            "correctIndex": 1,
            "explanation": "La persona dice: \"seré gerente de mi propio equipo.\""
          }
        ]
      },
      {
        "heading": "Vocabulary: Work & Future Plans",
        "body": [
          "Thirty words for careers and plans — the natural home of the future tense."
        ],
        "examples": [
          {
            "es": "el trabajo",
            "en": "the job"
          },
          {
            "es": "la carrera",
            "en": "the career"
          },
          {
            "es": "el empleo",
            "en": "the employment"
          },
          {
            "es": "la entrevista",
            "en": "the interview"
          },
          {
            "es": "el currículum",
            "en": "the résumé"
          },
          {
            "es": "solicitar",
            "en": "to apply for"
          },
          {
            "es": "contratar",
            "en": "to hire"
          },
          {
            "es": "renunciar",
            "en": "to quit / resign"
          },
          {
            "es": "jubilarse",
            "en": "to retire"
          },
          {
            "es": "la meta",
            "en": "the goal"
          },
          {
            "es": "el sueño",
            "en": "the dream"
          },
          {
            "es": "lograr",
            "en": "to achieve"
          },
          {
            "es": "conseguir",
            "en": "to get / obtain"
          },
          {
            "es": "el proyecto",
            "en": "the project"
          },
          {
            "es": "la reunión",
            "en": "the meeting"
          },
          {
            "es": "el jefe / la jefa",
            "en": "the boss"
          },
          {
            "es": "el sueldo",
            "en": "the salary"
          },
          {
            "es": "el horario",
            "en": "the schedule"
          },
          {
            "es": "a tiempo completo",
            "en": "full time"
          },
          {
            "es": "a tiempo parcial",
            "en": "part time"
          },
          {
            "es": "trabajar desde casa",
            "en": "to work from home"
          },
          {
            "es": "la oficina",
            "en": "the office"
          },
          {
            "es": "el equipo",
            "en": "the team"
          },
          {
            "es": "ascender",
            "en": "to get promoted"
          },
          {
            "es": "planear",
            "en": "to plan"
          },
          {
            "es": "el compañero de trabajo",
            "en": "the coworker"
          },
          {
            "es": "la capacitación",
            "en": "the training"
          },
          {
            "es": "el beneficio",
            "en": "the benefit"
          },
          {
            "es": "el aumento",
            "en": "the raise"
          },
          {
            "es": "la oportunidad",
            "en": "the opportunity"
          }
        ],
        "checkpoint": [
          {
            "type": "matching",
            "instructions": "Match each word to its meaning.",
            "pairs": [
              {
                "left": "solicitar",
                "right": "to apply for"
              },
              {
                "left": "contratar",
                "right": "to hire"
              },
              {
                "left": "renunciar",
                "right": "to quit / resign"
              },
              {
                "left": "jubilarse",
                "right": "to retire"
              },
              {
                "left": "lograr",
                "right": "to achieve"
              },
              {
                "left": "ascender",
                "right": "to get promoted"
              },
              {
                "left": "el currículum",
                "right": "the résumé"
              },
              {
                "left": "la meta",
                "right": "the goal"
              },
              {
                "left": "a tiempo parcial",
                "right": "part time"
              },
              {
                "left": "trabajar desde casa",
                "right": "to work from home"
              }
            ],
            "explanation": "These ten words describe a career and its milestones."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "word-order",
        "prompt": "Ordena las palabras.",
        "words": [
          "Algún",
          "día",
          "viviremos",
          "en",
          "otro",
          "país"
        ],
        "explanation": "El futuro simple con la expresión de tiempo al principio.",
        "translation": "Someday we will live in another country."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Translate this sentence to Spanish.",
        "source": "She will be a doctor someday.",
        "answer": "Ella será doctora algún día.",
        "explanation": "Ser toma la forma irregular será en el futuro."
      },
      {
        "type": "multiple-choice",
        "question": "¿Qué diferencia hay entre \"voy a estudiar\" y \"estudiaré\"?",
        "options": [
          "No hay diferencia",
          "El primero es más informal / cercano",
          "El segundo no existe",
          "El primero solo se usa en España"
        ],
        "correctIndex": 1,
        "explanation": "Ir a + infinitivo suena más cercano e informal; el futuro simple suena más formal o lejano."
      }
    ]
  },
  {
    "slug": "por-vs-para-1",
    "level": "A2",
    "number": 20,
    "title": "Por vs. Para, Part 1 of 2",
    "summary": "Untangle Spanish's trickiest preposition pair — both mean \"for,\" but they're rarely interchangeable.",
    "duration": "6 min",
    "sections": [
      {
        "heading": "Para: destino, plazo, propósito, destinatario",
        "body": [
          "Para se usa para un destino (hacia dónde), un plazo (fecha límite), un propósito (para qué), o un destinatario (para quién)."
        ],
        "examples": [
          {
            "es": "Salgo para Madrid mañana.",
            "en": "I'm leaving for Madrid tomorrow."
          },
          {
            "es": "El proyecto es para el viernes.",
            "en": "The project is due Friday."
          },
          {
            "es": "Este regalo es para ti.",
            "en": "This gift is for you."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Elige por o para.",
            "sentence": "Estudio ___ ser doctora.",
            "answer": "para",
            "explanation": "\"Para\" expresa el propósito: estudio con el fin de ser doctora."
          }
        ]
      },
      {
        "heading": "Por: duración, causa, intercambio, movimiento",
        "body": [
          "Por se usa para una duración de tiempo, una causa o razón, un intercambio, o un movimiento a través de un lugar."
        ],
        "examples": [
          {
            "es": "Estudié por tres horas.",
            "en": "I studied for three hours."
          },
          {
            "es": "No fuimos por la lluvia.",
            "en": "We didn't go because of the rain."
          },
          {
            "es": "Pagué veinte dólares por el libro.",
            "en": "I paid twenty dollars for the book."
          },
          {
            "es": "Caminamos por el parque.",
            "en": "We walked through the park."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Qué preposición expresa una causa o razón?",
            "options": [
              "para",
              "por",
              "las dos",
              "ninguna"
            ],
            "correctIndex": 1,
            "explanation": "\"Por\" expresa causa: por la lluvia (because of the rain)."
          }
        ]
      },
      {
        "heading": "Expresiones fijas con por",
        "body": [
          "Algunas frases con por son fijas y muy comunes: por favor, por eso, por supuesto, por ejemplo, por fin, por lo general."
        ],
        "examples": [
          {
            "es": "Por favor, ayúdame.",
            "en": "Please, help me."
          },
          {
            "es": "Por fin llegamos.",
            "en": "We finally arrived."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa la expresión fija.",
            "sentence": "___ ejemplo, me gusta el café con leche.",
            "answer": "Por",
            "explanation": "\"Por ejemplo\" (for example) es una expresión fija con por."
          }
        ]
      },
      {
        "heading": "Comparación directa",
        "body": [
          "Un mismo par de palabras puede cambiar de sentido según la preposición: para mí (in my opinion / for me) vs. por mí (on my behalf / because of me)."
        ],
        "examples": [
          {
            "es": "Para mí, esta película es excelente.",
            "en": "In my opinion, this movie is excellent."
          },
          {
            "es": "Lo hice por mí, no por ti.",
            "en": "I did it for my own sake, not for yours."
          }
        ],
        "checkpoint": [
          {
            "type": "multi-select",
            "question": "¿Qué usos corresponden a \"por\"? (Elige todas las correctas)",
            "options": [
              "Duración de tiempo",
              "Fecha límite",
              "Causa o razón",
              "Intercambio de dinero"
            ],
            "correctIndexes": [
              0,
              2,
              3
            ],
            "explanation": "\"Fecha límite\" (deadline) usa para, no por."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "fill-blank",
        "prompt": "Elige por o para.",
        "sentence": "Este café es ___ ti.",
        "answer": "para",
        "explanation": "\"Para ti\" indica el destinatario del regalo."
      },
      {
        "type": "multiple-choice",
        "question": "¿Qué expresión significa \"of course\"?",
        "options": [
          "por eso",
          "por fin",
          "por supuesto",
          "por ejemplo"
        ],
        "correctIndex": 2,
        "explanation": "\"Por supuesto\" significa \"of course.\""
      },
      {
        "type": "fill-blank",
        "prompt": "Elige por o para.",
        "sentence": "Caminamos ___ el centro de la ciudad.",
        "answer": "por",
        "explanation": "\"Por\" indica movimiento a través de un lugar."
      },
      {
        "type": "multi-select",
        "question": "¿Qué usos corresponden a \"para\"? (Elige todas las correctas)",
        "options": [
          "Destino",
          "Causa",
          "Plazo",
          "Destinatario"
        ],
        "correctIndexes": [
          0,
          2,
          3
        ],
        "explanation": "\"Causa\" (reason) corresponde a por, no a para."
      }
    ]
  },
  {
    "slug": "por-vs-para-2",
    "level": "A2",
    "number": 21,
    "title": "Por vs. Para, Part 2 of 2",
    "summary": "Untangle Spanish's trickiest preposition pair — both mean \"for,\" but they're rarely interchangeable.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "Put it into practice",
        "body": [
          "Una consulta médica breve."
        ],
        "examples": [
          {
            "es": "Vengo por un dolor de cabeza muy fuerte.",
            "en": "I've come in because of a very bad headache."
          },
          {
            "es": "¿Desde cuándo tiene el dolor?"
          },
          {
            "es": "Por dos días. Tomé una pastilla, pero no funcionó."
          },
          {
            "es": "Le voy a recetar algo para el dolor. Tómelo por la mañana y por la noche."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Por qué vino el paciente al consultorio?",
            "options": [
              "Por fiebre",
              "Por un dolor de cabeza",
              "Por una alergia",
              "Por una herida"
            ],
            "correctIndex": 1,
            "explanation": "El paciente dice: \"Vengo por un dolor de cabeza muy fuerte.\""
          }
        ]
      },
      {
        "heading": "Vocabulary: Health & The Doctor",
        "body": [
          "Thirty words for the doctor's office — full of natural por/para contrasts."
        ],
        "examples": [
          {
            "es": "la salud",
            "en": "the health"
          },
          {
            "es": "el doctor / la doctora",
            "en": "the doctor"
          },
          {
            "es": "el consultorio",
            "en": "the doctor's office"
          },
          {
            "es": "la cita",
            "en": "the appointment"
          },
          {
            "es": "el dolor",
            "en": "the pain"
          },
          {
            "es": "doler",
            "en": "to hurt"
          },
          {
            "es": "la fiebre",
            "en": "the fever"
          },
          {
            "es": "la tos",
            "en": "the cough"
          },
          {
            "es": "el resfriado",
            "en": "the cold"
          },
          {
            "es": "la gripe",
            "en": "the flu"
          },
          {
            "es": "la receta",
            "en": "the prescription"
          },
          {
            "es": "la medicina",
            "en": "the medicine"
          },
          {
            "es": "la pastilla",
            "en": "the pill"
          },
          {
            "es": "el jarabe",
            "en": "the syrup"
          },
          {
            "es": "la farmacia",
            "en": "the pharmacy"
          },
          {
            "es": "sentirse",
            "en": "to feel"
          },
          {
            "es": "enfermarse",
            "en": "to get sick"
          },
          {
            "es": "mejorar",
            "en": "to improve / get better"
          },
          {
            "es": "empeorar",
            "en": "to get worse"
          },
          {
            "es": "el síntoma",
            "en": "the symptom"
          },
          {
            "es": "la alergia",
            "en": "the allergy"
          },
          {
            "es": "respirar",
            "en": "to breathe"
          },
          {
            "es": "la enfermera / el enfermero",
            "en": "the nurse"
          },
          {
            "es": "la herida",
            "en": "the wound"
          },
          {
            "es": "romperse",
            "en": "to break (a bone)"
          },
          {
            "es": "la vacuna",
            "en": "the vaccine"
          },
          {
            "es": "el termómetro",
            "en": "the thermometer"
          },
          {
            "es": "la venda",
            "en": "the bandage"
          },
          {
            "es": "torcerse",
            "en": "to twist / sprain"
          },
          {
            "es": "la sala de emergencias",
            "en": "the emergency room"
          }
        ],
        "checkpoint": [
          {
            "type": "matching",
            "instructions": "Match each word to its meaning.",
            "pairs": [
              {
                "left": "el resfriado",
                "right": "the cold"
              },
              {
                "left": "la gripe",
                "right": "the flu"
              },
              {
                "left": "el jarabe",
                "right": "the syrup"
              },
              {
                "left": "empeorar",
                "right": "to get worse"
              },
              {
                "left": "mejorar",
                "right": "to improve"
              },
              {
                "left": "el síntoma",
                "right": "the symptom"
              },
              {
                "left": "respirar",
                "right": "to breathe"
              },
              {
                "left": "romperse",
                "right": "to break (a bone)"
              },
              {
                "left": "la herida",
                "right": "the wound"
              },
              {
                "left": "enfermarse",
                "right": "to get sick"
              }
            ],
            "explanation": "These ten words describe a visit to the doctor."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "word-order",
        "prompt": "Ordena las palabras.",
        "words": [
          "Estudié",
          "por",
          "cinco",
          "horas",
          "para",
          "el",
          "examen"
        ],
        "explanation": "Por indica duración; para indica propósito.",
        "translation": "I studied for five hours for the exam."
      },
      {
        "type": "translate",
        "direction": "es-en",
        "prompt": "Translate this sentence to English.",
        "source": "Para mí, el español es más fácil que el francés.",
        "answer": "In my opinion, Spanish is easier than French.",
        "explanation": "\"Para mí\" here means \"in my opinion,\" a common fixed use of para."
      },
      {
        "type": "multiple-choice",
        "question": "¿Qué preposición usarías para \"I paid $10 for the ticket\"?",
        "options": [
          "para",
          "por",
          "las dos son iguales",
          "ninguna"
        ],
        "correctIndex": 1,
        "explanation": "El intercambio de dinero usa por: pagué diez dólares por el boleto."
      }
    ]
  },
  {
    "slug": "por-vs-para-mastery-check",
    "level": "A2",
    "number": 22,
    "title": "Mastery Check: Por vs. Para",
    "summary": "A focused test of Spanish's trickiest preposition pair, with ambiguous-looking sentences where only context reveals whether por or para is correct.",
    "duration": "10 min",
    "sections": [],
    "exercises": [
      {
        "type": "fill-blank",
        "prompt": "Elige por o para.",
        "sentence": "Trabajo ___ una empresa internacional.",
        "answer": "para",
        "explanation": "\"Para\" indica el destinatario o empleador: trabajo para (soy empleado de) esta empresa."
      },
      {
        "type": "fill-blank",
        "prompt": "Elige por o para.",
        "sentence": "El sábado trabajé ___ mi colega, que estaba enferma.",
        "answer": "por",
        "explanation": "\"Por\" indica sustitución: trabajé en lugar de mi colega, no como su empleado."
      },
      {
        "type": "fill-blank",
        "prompt": "Elige por o para.",
        "sentence": "Compré estas flores ___ mi madre; es su cumpleaños.",
        "answer": "para",
        "explanation": "\"Para\" indica el destinatario del regalo."
      },
      {
        "type": "fill-blank",
        "prompt": "Elige por o para.",
        "sentence": "Compré estas flores ___ mi madre, porque a ella no le gusta ir a la floristería.",
        "answer": "por",
        "explanation": "Aquí \"por\" indica que actuaste en nombre de / a causa de tu madre, no que las flores sean para ella."
      },
      {
        "type": "multiple-choice",
        "question": "¿Qué oración explica la RAZÓN (causa) por la que alguien actuó?",
        "options": [
          "Gritó por miedo.",
          "Gritó para asustar a su hermano.",
          "Estudió para el examen.",
          "Viajó para Madrid."
        ],
        "correctIndex": 0,
        "explanation": "\"Por miedo\" expresa la causa del grito; las demás opciones usan para (propósito o destino)."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras.",
        "words": [
          "Caminamos",
          "por",
          "la",
          "ciudad",
          "toda",
          "la",
          "tarde"
        ],
        "translation": "We walked through the city all afternoon.",
        "explanation": "\"Por\" expresa movimiento a través de un lugar."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras.",
        "words": [
          "Salimos",
          "para",
          "la",
          "costa",
          "al",
          "amanecer"
        ],
        "translation": "We left for the coast at dawn.",
        "explanation": "\"Para\" expresa el destino del viaje."
      },
      {
        "type": "multi-select",
        "question": "¿Qué usos corresponden a \"por\"? (Elige todas las correctas)",
        "options": [
          "Duración de una acción",
          "Un destino final",
          "Una causa o motivo",
          "Un intercambio (dinero, favores)"
        ],
        "correctIndexes": [
          0,
          2,
          3
        ],
        "explanation": "\"Un destino final\" corresponde a para, no a por."
      },
      {
        "type": "matching",
        "instructions": "Match each fixed expression to its meaning.",
        "pairs": [
          {
            "left": "por favor",
            "right": "please"
          },
          {
            "left": "por eso",
            "right": "that's why / therefore"
          },
          {
            "left": "por supuesto",
            "right": "of course"
          },
          {
            "left": "por ejemplo",
            "right": "for example"
          },
          {
            "left": "por fin",
            "right": "finally"
          },
          {
            "left": "por lo general",
            "right": "generally"
          }
        ],
        "explanation": "These six expressions always use por, never para."
      },
      {
        "type": "fill-blank",
        "prompt": "Elige por o para.",
        "sentence": "Necesito el informe terminado ___ el lunes por la mañana.",
        "answer": "para",
        "explanation": "\"Para\" indica la fecha límite (deadline)."
      },
      {
        "type": "fill-blank",
        "prompt": "Elige por o para.",
        "sentence": "Estuvimos revisando el informe ___ tres días seguidos.",
        "answer": "por",
        "explanation": "\"Por\" indica la duración de la acción."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Translate this sentence to Spanish.",
        "source": "This medicine is for the pain. Take it for seven days, please.",
        "answer": "Esta medicina es para el dolor. Tómala por siete días, por favor.",
        "explanation": "\"Para el dolor\" expresa propósito; \"por siete días\" expresa duración; \"por favor\" es una expresión fija con por."
      },
      {
        "type": "translate",
        "direction": "es-en",
        "prompt": "Translate this sentence to English.",
        "source": "Pagué cuarenta dólares por estos zapatos, pero los compré para mi hermano.",
        "answer": "I paid forty dollars for these shoes, but I bought them for my brother.",
        "explanation": "\"Por\" marca el precio pagado (intercambio); \"para\" marca el destinatario de los zapatos."
      },
      {
        "type": "multiple-choice",
        "question": "¿Cuál es la versión correcta de esta oración?",
        "options": [
          "David estudia por las noches para terminar su tarea a tiempo.",
          "David estudia para las noches por terminar su tarea a tiempo.",
          "David estudia por las noches por terminar su tarea a tiempo.",
          "David estudia para las noches para terminar su tarea a tiempo."
        ],
        "correctIndex": 0,
        "explanation": "\"Por las noches\" expresa el período de tiempo (at night); \"para terminar\" expresa el propósito de estudiar."
      },
      {
        "type": "multiple-choice",
        "question": "\"Ana trabaja para Aceites S.A. desde hace diez años.\" ¿Qué significa esta oración?",
        "options": [
          "Ana es empleada permanente de la empresa.",
          "Ana sustituye a otra persona por un día.",
          "Ana compró la empresa.",
          "Ana viaja hacia la empresa cada mañana."
        ],
        "correctIndex": 0,
        "explanation": "\"Trabajar para\" una empresa indica una relación laboral permanente (empleador), a diferencia de \"trabajar por alguien\" (sustitución)."
      },
      {
        "type": "fill-blank",
        "prompt": "Elige por o para.",
        "sentence": "Salimos ___ el aeropuerto a las cinco de la mañana.",
        "answer": "para",
        "explanation": "\"Para\" indica el destino hacia el que salimos."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Translate this sentence to Spanish.",
        "source": "We walked through the park for two hours.",
        "answer": "Caminamos por el parque por dos horas.",
        "explanation": "El primer \"por\" indica movimiento a través de un lugar; el segundo indica duración de tiempo."
      }
    ]
  },
  {
    "slug": "personal-a",
    "level": "A2",
    "number": 23,
    "title": "La \"a\" Personal",
    "summary": "Aprende cuándo colocar la a personal antes de un objeto directo que es una persona específica.",
    "duration": "10 min",
    "sections": [
      {
        "heading": "¿Qué es la \"a\" personal?",
        "body": [
          "En español, cuando el objeto directo de una oración es una persona específica (o una mascota que consideramos un individuo con nombre propio), se coloca la palabra a justo antes de ese objeto directo. Esta a personal no se traduce al inglés: simplemente marca que el objeto directo es alguien, no algo.",
          "Compara estas dos oraciones: Veo a María (I see María) y Veo la casa (I see the house). En la primera, María es una persona específica, así que usamos a. En la segunda, la casa es una cosa, así que no la usamos.",
          "Recuerda que a se combina con el artículo el para formar al: Veo al profesor (a + el profesor = al profesor)."
        ],
        "examples": [
          {
            "es": "Veo a María en el parque.",
            "en": "I see María in the park."
          },
          {
            "es": "Busco a mi hermano.",
            "en": "I'm looking for my brother."
          },
          {
            "es": "Llamo a mi amiga todos los días.",
            "en": "I call my friend every day."
          },
          {
            "es": "Veo al profesor en la oficina.",
            "en": "I see the professor in the office."
          },
          {
            "es": "Veo la casa desde aquí.",
            "en": "I see the house from here."
          },
          {
            "es": "Compro el libro nuevo.",
            "en": "I buy the new book."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa la oración con la a personal si es necesaria.",
            "sentence": "Visito ___ mi abuela los domingos.",
            "answer": "a",
            "hint": "El objeto directo es una persona específica.",
            "explanation": "Mi abuela es una persona específica y objeto directo del verbo visitar, así que se usa la a personal."
          }
        ]
      },
      {
        "heading": "Cuándo no se usa la a personal",
        "body": [
          "La a personal no se usa cuando el objeto directo es una cosa, un lugar o un animal que no tratamos como individuo. Tampoco se usa normalmente después del verbo hay, porque hay siempre introduce algo indefinido o general.",
          "Con animales depende del contexto: si es tu mascota con nombre propio, la tratamos como una persona (Quiero a mi perro Rex). Si hablamos de animales en general, no se usa (Veo animales en el zoológico).",
          "También se usa la a personal con pronombres indefinidos que se refieren a personas, como alguien y nadie: No veo a nadie en la calle."
        ],
        "examples": [
          {
            "es": "Hay dos estudiantes en la clase.",
            "en": "There are two students in class."
          },
          {
            "es": "Quiero a mi perro Rex.",
            "en": "I love my dog Rex."
          },
          {
            "es": "Veo animales en el zoológico.",
            "en": "I see animals at the zoo."
          },
          {
            "es": "No veo a nadie en la calle.",
            "en": "I don't see anybody on the street."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Cuál oración NO necesita la a personal?",
            "options": [
              "Busco ___ mi hermana.",
              "Leo ___ el periódico.",
              "Visito ___ mi tío.",
              "Llamo ___ Carlos."
            ],
            "correctIndex": 1,
            "explanation": "El periódico es una cosa, no una persona, así que no se usa la a personal en esta oración."
          }
        ]
      },
      {
        "heading": "La a personal con el verbo tener",
        "body": [
          "Con el verbo tener, la a personal generalmente NO se usa cuando tener expresa posesión simple, como relaciones familiares, características o cantidades: Tengo dos hermanos, no Tengo a dos hermanos.",
          "Sin embargo, sí se usa cuando tener significa tener a alguien físicamente presente contigo en ese momento, en un sentido de ubicación: Tengo a mi hija en brazos."
        ],
        "examples": [
          {
            "es": "Tengo dos hermanos.",
            "en": "I have two brothers."
          },
          {
            "es": "Tengo tres hijos.",
            "en": "I have three children."
          },
          {
            "es": "Tengo a mi hija en brazos.",
            "en": "I have my daughter in my arms."
          },
          {
            "es": "Tengo al perro en el coche.",
            "en": "I have the dog in the car."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Qué oración usa correctamente el verbo tener?",
            "options": [
              "Tengo a dos hermanos menores.",
              "Tengo a mi hijo dormido en los brazos.",
              "Tengo a tres gatos en casa.",
              "Tengo a una prima en México."
            ],
            "correctIndex": 1,
            "explanation": "Aquí tener indica que la persona está físicamente presente en ese momento, así que se usa la a personal. Las otras oraciones expresan posesión simple y no deben llevar a."
          }
        ]
      },
      {
        "heading": "Vocabulario: verbos que suelen llevar la a personal",
        "body": [
          "Estos verbos casi siempre tienen personas como objeto directo, así que es muy común usarlos con la a personal. Apréndelos como grupo."
        ],
        "examples": [
          {
            "es": "buscar",
            "en": "to look for"
          },
          {
            "es": "ver",
            "en": "to see"
          },
          {
            "es": "conocer",
            "en": "to know / to meet"
          },
          {
            "es": "llamar",
            "en": "to call"
          },
          {
            "es": "visitar",
            "en": "to visit"
          },
          {
            "es": "ayudar",
            "en": "to help"
          },
          {
            "es": "esperar",
            "en": "to wait for"
          },
          {
            "es": "invitar",
            "en": "to invite"
          },
          {
            "es": "saludar",
            "en": "to greet"
          },
          {
            "es": "extrañar",
            "en": "to miss (someone)"
          },
          {
            "es": "encontrar",
            "en": "to find"
          },
          {
            "es": "acompañar",
            "en": "to accompany"
          }
        ],
        "checkpoint": [
          {
            "type": "matching",
            "instructions": "Empareja cada verbo en español con su significado en inglés.",
            "pairs": [
              {
                "left": "buscar",
                "right": "to look for"
              },
              {
                "left": "ver",
                "right": "to see"
              },
              {
                "left": "conocer",
                "right": "to know / to meet"
              },
              {
                "left": "llamar",
                "right": "to call"
              },
              {
                "left": "visitar",
                "right": "to visit"
              },
              {
                "left": "ayudar",
                "right": "to help"
              },
              {
                "left": "esperar",
                "right": "to wait for"
              },
              {
                "left": "invitar",
                "right": "to invite"
              },
              {
                "left": "saludar",
                "right": "to greet"
              },
              {
                "left": "extrañar",
                "right": "to miss (someone)"
              },
              {
                "left": "encontrar",
                "right": "to find"
              },
              {
                "left": "acompañar",
                "right": "to accompany"
              }
            ],
            "explanation": "Todos estos verbos suelen tener personas como objeto directo, por eso van acompañados de la a personal con mucha frecuencia."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "¿Qué oración es correcta?",
        "options": [
          "Conozco a Pedro desde hace años.",
          "Conozco Pedro desde hace años.",
          "Conozco a la ciudad de Roma.",
          "Conozco al libro nuevo."
        ],
        "correctIndex": 0,
        "explanation": "Pedro es una persona específica, objeto directo de conocer, así que necesita la a personal. Roma es un lugar y el libro es una cosa: no llevan a personal."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa con a, al, o deja el espacio vacío si no se necesita.",
        "sentence": "Cuido ___ mis abuelos los fines de semana.",
        "answer": "a",
        "hint": "Mis abuelos son personas específicas.",
        "explanation": "Mis abuelos es un objeto directo de personas específicas, así que se usa la a personal: Cuido a mis abuelos."
      },
      {
        "type": "translate",
        "direction": "es-en",
        "prompt": "Translate this sentence to English.",
        "source": "No conozco a nadie en esta oficina todavía.",
        "answer": "I don't know anybody in this office yet.",
        "explanation": "Nadie es un pronombre que se refiere a una persona; los pronombres indefinidos de persona como alguien y nadie también llevan la a personal cuando son objeto directo."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras.",
        "words": [
          "Busco",
          "a",
          "mi",
          "amigo",
          "en",
          "el",
          "café"
        ],
        "translation": "I'm looking for my friend at the café.",
        "explanation": "Mi amigo es una persona específica y objeto directo de buscar, así que necesita la a personal antes de mi."
      },
      {
        "type": "multi-select",
        "question": "¿En qué oraciones se necesita la a personal? (Elige todas las correctas)",
        "options": [
          "Veo ___ Juan en la tienda.",
          "Veo ___ la tienda desde mi casa.",
          "Ayudo ___ mi vecina con las compras.",
          "Leo ___ el periódico por la mañana.",
          "Invito ___ mis primos a la boda."
        ],
        "correctIndexes": [
          0,
          2,
          4
        ],
        "explanation": "Juan, mi vecina y mis primos son personas específicas y objetos directos, así que necesitan la a personal. La tienda y el periódico son cosas."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Translate this sentence to Spanish.",
        "source": "I love my dog Max very much.",
        "answer": "Quiero mucho a mi perro Max.",
        "altAnswers": [
          "Amo mucho a mi perro Max."
        ],
        "explanation": "Max es una mascota con nombre propio, tratada como un individuo, así que lleva la a personal."
      }
    ]
  },
  {
    "slug": "negation-words-1",
    "level": "A2",
    "number": 24,
    "title": "Palabras Negativas y la Doble Negación, Part 1 of 2",
    "summary": "Domina nunca, nadie, ninguno, tampoco y ni...ni, y la doble negación obligatoria del español.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "La doble negación en español",
        "body": [
          "A diferencia del inglés, el español exige el uso de dos negaciones en la misma oración cuando la palabra negativa va después del verbo: no + verbo + palabra negativa. Esta doble negación es obligatoria y correcta en español, aunque en inglés suene redundante.",
          "Compara: No veo a nadie se traduce literalmente como I don't see nobody, pero en inglés natural decimos I don't see anybody. La estructura española siempre necesita el no antes del verbo cuando la palabra negativa aparece después.",
          "Si la palabra negativa se coloca antes del verbo, el no desaparece: Nadie viene a la fiesta (Nobody is coming to the party), sin no."
        ],
        "examples": [
          {
            "es": "No veo a nadie en la sala.",
            "en": "I don't see anybody in the room."
          },
          {
            "es": "Nadie viene a la fiesta.",
            "en": "Nobody is coming to the party."
          },
          {
            "es": "No tengo nada en la mochila.",
            "en": "I don't have anything in my backpack."
          },
          {
            "es": "Nunca voy al gimnasio los domingos.",
            "en": "I never go to the gym on Sundays."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa con la doble negación correcta.",
            "sentence": "___ como nada antes de las ocho de la mañana.",
            "answer": "No",
            "hint": "La palabra negativa nada va después del verbo.",
            "explanation": "Como nada va después del verbo, la oración necesita no antes del verbo: No como nada."
          }
        ]
      },
      {
        "heading": "Las palabras negativas principales: nunca, nadie, ninguno/ninguna",
        "body": [
          "nunca (never) es lo opuesto de siempre (always). nadie (nobody, no one) es lo opuesto de alguien (somebody). ninguno y ninguna (none, not any) son lo opuesto de alguno y alguna, y concuerdan en género con el sustantivo que modifican.",
          "Ninguno se acorta a ningún delante de un sustantivo masculino singular, igual que uno se acorta a un. Ninguna no cambia de forma delante de un sustantivo femenino: Ningún libro me interesa, pero Ninguna película me interesa. Casi siempre se usan en singular, incluso cuando la idea es plural en inglés: No tengo ningún problema (I don't have any problems)."
        ],
        "examples": [
          {
            "es": "Nunca como carne los viernes.",
            "en": "I never eat meat on Fridays."
          },
          {
            "es": "No conozco a nadie en esta ciudad.",
            "en": "I don't know anybody in this city."
          },
          {
            "es": "No tengo ningún interés en ese tema.",
            "en": "I have no interest in that topic."
          },
          {
            "es": "Ninguna de mis amigas habla alemán.",
            "en": "None of my friends speak German."
          },
          {
            "es": "No hay ninguna razón para preocuparse.",
            "en": "There's no reason to worry."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Cuál es la forma correcta?",
            "options": [
              "No tengo ninguno problema.",
              "No tengo ningún problema.",
              "No tengo ninguna problema.",
              "No tengo nadie problema."
            ],
            "correctIndex": 1,
            "explanation": "Ninguno se acorta a ningún delante de un sustantivo masculino singular; problema es masculino (el problema) aunque termine en -a, así que se usa ningún."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "¿Cuál oración usa correctamente la doble negación?",
        "options": [
          "Nadie no viene a la fiesta.",
          "No viene nadie a la fiesta.",
          "No nadie viene a la fiesta.",
          "Viene no nadie a la fiesta."
        ],
        "correctIndex": 1,
        "explanation": "Cuando la palabra negativa va después del verbo, se necesita no antes: No viene nadie. Nunca se combinan no y una palabra negativa antes del verbo."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con la palabra negativa correcta.",
        "sentence": "No hay ___ estudiante en la clase hoy; todos están enfermos.",
        "answer": "ningún",
        "hint": "Estudiante es masculino singular.",
        "explanation": "Ninguno se acorta a ningún delante de un sustantivo masculino singular: ningún estudiante."
      },
      {
        "type": "translate",
        "direction": "es-en",
        "prompt": "Translate this sentence to English.",
        "source": "Ella nunca llega tarde a las reuniones.",
        "answer": "She never arrives late to meetings.",
        "altAnswers": [
          "She's never late to meetings."
        ],
        "explanation": "Nunca antes del verbo niega la oración sin necesidad de no."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Translate this sentence to Spanish.",
        "source": "I don't want dessert, and I don't want coffee either.",
        "answer": "No quiero postre, y tampoco quiero café.",
        "altAnswers": [
          "No quiero postre y no quiero café tampoco."
        ],
        "explanation": "Tampoco es la respuesta negativa a también; se usa para añadir una segunda negación relacionada."
      }
    ]
  },
  {
    "slug": "negation-words-2",
    "level": "A2",
    "number": 25,
    "title": "Palabras Negativas y la Doble Negación, Part 2 of 2",
    "summary": "Domina nunca, nadie, ninguno, tampoco y ni...ni, y la doble negación obligatoria del español.",
    "duration": "6 min",
    "sections": [
      {
        "heading": "tampoco y ni...ni",
        "body": [
          "tampoco significa neither o not...either, y es la respuesta negativa a también. Se usa para añadir una negación a algo que ya se negó: No me gusta el café. A mí tampoco. (I don't like coffee. Me neither.)",
          "La estructura ni...ni significa neither...nor y niega dos elementos a la vez: No como ni carne ni pescado (I eat neither meat nor fish). Cuando ni...ni va antes del verbo, no se necesita no: Ni Juan ni Pedro vinieron a la reunión."
        ],
        "examples": [
          {
            "es": "No hablo francés. Mi hermana tampoco habla francés.",
            "en": "I don't speak French. My sister doesn't speak French either."
          },
          {
            "es": "No quiero salir esta noche. Yo tampoco.",
            "en": "I don't want to go out tonight. Me neither."
          },
          {
            "es": "No como ni carne ni pescado.",
            "en": "I eat neither meat nor fish."
          },
          {
            "es": "Ni Juan ni Pedro vinieron a la reunión.",
            "en": "Neither Juan nor Pedro came to the meeting."
          },
          {
            "es": "No tengo ni tiempo ni dinero para el viaje.",
            "en": "I have neither time nor money for the trip."
          }
        ],
        "checkpoint": [
          {
            "type": "word-order",
            "prompt": "Ordena las palabras.",
            "words": [
              "Ni",
              "mi",
              "padre",
              "ni",
              "mi",
              "madre",
              "cocinan",
              "hoy"
            ],
            "translation": "Neither my father nor my mother is cooking today.",
            "explanation": "Cuando ni...ni va antes del verbo, no se añade no: la doble ni ya expresa la negación completa."
          }
        ]
      },
      {
        "heading": "Vocabulario: pares afirmativos y negativos",
        "body": [
          "Estas palabras suelen aparecer en pares opuestos. Aprenderlas juntas te ayuda a recordar cuándo usar cada una."
        ],
        "examples": [
          {
            "es": "siempre",
            "en": "always"
          },
          {
            "es": "nunca",
            "en": "never"
          },
          {
            "es": "alguien",
            "en": "somebody"
          },
          {
            "es": "nadie",
            "en": "nobody"
          },
          {
            "es": "algo",
            "en": "something"
          },
          {
            "es": "nada",
            "en": "nothing"
          },
          {
            "es": "alguno / alguna",
            "en": "some"
          },
          {
            "es": "ninguno / ninguna",
            "en": "none, not any"
          },
          {
            "es": "también",
            "en": "also"
          },
          {
            "es": "tampoco",
            "en": "neither, not either"
          },
          {
            "es": "o...o",
            "en": "either...or"
          },
          {
            "es": "ni...ni",
            "en": "neither...nor"
          }
        ],
        "checkpoint": [
          {
            "type": "matching",
            "instructions": "Empareja cada palabra en español con su significado en inglés.",
            "pairs": [
              {
                "left": "siempre",
                "right": "always"
              },
              {
                "left": "nunca",
                "right": "never"
              },
              {
                "left": "alguien",
                "right": "somebody"
              },
              {
                "left": "nadie",
                "right": "nobody"
              },
              {
                "left": "algo",
                "right": "something"
              },
              {
                "left": "nada",
                "right": "nothing"
              },
              {
                "left": "alguno / alguna",
                "right": "some"
              },
              {
                "left": "ninguno / ninguna",
                "right": "none, not any"
              },
              {
                "left": "también",
                "right": "also"
              },
              {
                "left": "tampoco",
                "right": "neither, not either"
              },
              {
                "left": "o...o",
                "right": "either...or"
              },
              {
                "left": "ni...ni",
                "right": "neither...nor"
              }
            ],
            "explanation": "Cada palabra negativa tiene un par afirmativo correspondiente: siempre/nunca, alguien/nadie, algo/nada, alguno/ninguno, también/tampoco."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "word-order",
        "prompt": "Ordena las palabras.",
        "words": [
          "No",
          "hablo",
          "ni",
          "alemán",
          "ni",
          "italiano"
        ],
        "translation": "I speak neither German nor Italian.",
        "explanation": "No + verbo + ni...ni forma la doble negación: no se omite el no porque ni...ni va después del verbo."
      },
      {
        "type": "multi-select",
        "question": "¿Qué oraciones son gramaticalmente correctas? (Elige todas las correctas)",
        "options": [
          "No tengo ningún problema.",
          "Tengo ningún problema.",
          "Nadie llama a la puerta.",
          "No nadie llama a la puerta.",
          "No hablo ni inglés ni francés."
        ],
        "correctIndexes": [
          0,
          2,
          4
        ],
        "explanation": "No tengo ningún problema es correcta porque ningún va después del verbo y necesita no antes. Tengo ningún problema es incorrecta porque falta el no. Nadie llama a la puerta es correcta porque nadie va antes del verbo y no lleva no. No nadie llama a la puerta es incorrecta porque nunca se combinan no y una palabra negativa antes del verbo. No hablo ni inglés ni francés es correcta: ni...ni después de no niega ambos elementos."
      }
    ]
  },
  {
    "slug": "mente-adverbs-1",
    "level": "A2",
    "number": 26,
    "title": "Adverbios en -mente, Part 1 of 2",
    "summary": "Forma adverbios de modo a partir de adjetivos usando el sufijo -mente y aprende sus reglas de acentuación.",
    "duration": "6 min",
    "sections": [
      {
        "heading": "Cómo formar adverbios en -mente",
        "body": [
          "Para formar un adverbio de modo a partir de un adjetivo, se usa la forma femenina singular del adjetivo más el sufijo -mente. Esta terminación equivale a -ly en inglés.",
          "Si el adjetivo termina en -o en masculino, cambia a -a antes de añadir -mente: rápido se convierte en rápida y luego en rápidamente. Si el adjetivo tiene una sola forma para masculino y femenino (termina en -e o en consonante), simplemente se añade -mente a esa única forma: fácil se convierte directamente en fácilmente; elegante se convierte en elegantemente."
        ],
        "examples": [
          {
            "es": "rápido → rápidamente",
            "en": "quickly"
          },
          {
            "es": "lento → lentamente",
            "en": "slowly"
          },
          {
            "es": "fácil → fácilmente",
            "en": "easily"
          },
          {
            "es": "feliz → felizmente",
            "en": "happily"
          },
          {
            "es": "elegante → elegantemente",
            "en": "elegantly"
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Convierte el adjetivo en adverbio.",
            "sentence": "Ana camina ___ (lento) porque le duele el pie.",
            "answer": "lentamente",
            "hint": "Forma femenina del adjetivo + -mente.",
            "explanation": "Lento se convierte en lenta (femenino) y luego se añade -mente: lentamente."
          }
        ]
      },
      {
        "heading": "Acentos: qué pasa con la tilde del adjetivo",
        "body": [
          "Si el adjetivo base lleva tilde (acento escrito), el adverbio en -mente conserva esa misma tilde, en el mismo lugar, aunque la palabra sea ahora más larga. La regla es simple: no se quita ni se mueve el acento escrito del adjetivo original.",
          "Por ejemplo, fácil ya lleva tilde en la a, así que fácilmente también la lleva. Lo mismo pasa con rápido, que lleva tilde en la primera a: su adverbio rápidamente conserva esa tilde. En cambio, un adjetivo sin tilde, como lento, forma un adverbio sin tilde: lentamente."
        ],
        "examples": [
          {
            "es": "fácil → fácilmente",
            "en": "easily"
          },
          {
            "es": "difícil → difícilmente",
            "en": "with difficulty"
          },
          {
            "es": "rápido → rápidamente",
            "en": "quickly"
          },
          {
            "es": "común → comúnmente",
            "en": "commonly"
          },
          {
            "es": "cortés → cortésmente",
            "en": "courteously"
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Cuál adverbio está escrito correctamente?",
            "options": [
              "dificilmente",
              "difícilmente",
              "difícilménte",
              "dificílmente"
            ],
            "correctIndex": 1,
            "explanation": "Difícil ya lleva tilde en la i, y esa tilde se conserva en la misma posición al formar el adverbio: difícilmente."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con el adverbio correcto.",
        "sentence": "Mi jefe siempre explica las instrucciones ___ (claro).",
        "answer": "claramente",
        "hint": "Forma femenina del adjetivo + -mente.",
        "explanation": "Claro se convierte en clara (femenino) y luego se añade -mente: claramente."
      },
      {
        "type": "multiple-choice",
        "question": "¿Cuál oración forma correctamente el adverbio?",
        "options": [
          "Ella conduce cuidadosomente.",
          "Ella conduce cuidadosamente.",
          "Ella conduce cuidadomente.",
          "Ella conduce cuidadosoamente."
        ],
        "correctIndex": 1,
        "explanation": "Cuidadoso se convierte en cuidadosa (femenino) y luego se añade -mente: cuidadosamente."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Translate this sentence to Spanish.",
        "source": "He answered the question honestly and directly.",
        "answer": "Respondió la pregunta honesta y directamente.",
        "explanation": "Cuando dos adverbios en -mente van seguidos y unidos por y, solo el último lleva el sufijo: honesta y directamente."
      }
    ]
  },
  {
    "slug": "mente-adverbs-2",
    "level": "A2",
    "number": 27,
    "title": "Adverbios en -mente, Part 2 of 2",
    "summary": "Forma adverbios de modo a partir de adjetivos usando el sufijo -mente y aprende sus reglas de acentuación.",
    "duration": "5 min",
    "sections": [
      {
        "heading": "Dos o más adverbios en -mente seguidos",
        "body": [
          "Cuando dos o más adverbios en -mente aparecen seguidos en una serie, unidos por y o pero, solo el último adverbio lleva el sufijo -mente. Los adverbios anteriores se quedan en su forma femenina simple, sin -mente.",
          "Por ejemplo, no decimos Habló claramente y lentamente, sino Habló clara y lentamente. El sufijo -mente del último adverbio se entiende que también se aplica a los anteriores."
        ],
        "examples": [
          {
            "es": "Habló clara y lentamente.",
            "en": "She spoke clearly and slowly."
          },
          {
            "es": "Explicó el problema simple y directamente.",
            "en": "He explained the problem simply and directly."
          },
          {
            "es": "Trabaja rápida pero cuidadosamente.",
            "en": "She works quickly but carefully."
          },
          {
            "es": "Respondió honesta y abiertamente.",
            "en": "He answered honestly and openly."
          }
        ],
        "checkpoint": [
          {
            "type": "word-order",
            "prompt": "Ordena las palabras.",
            "words": [
              "Escribió",
              "el",
              "informe",
              "clara",
              "y",
              "cuidadosamente"
            ],
            "translation": "She wrote the report clearly and carefully.",
            "explanation": "Cuando hay dos adverbios en -mente unidos por y, solo el segundo lleva el sufijo: clara y cuidadosamente, no claramente y cuidadosamente."
          }
        ]
      },
      {
        "heading": "Vocabulario: adjetivos y sus adverbios",
        "body": [
          "Estos adjetivos comunes forman adverbios muy frecuentes en español. Practica la transformación de cada uno."
        ],
        "examples": [
          {
            "es": "rápidamente",
            "en": "quickly"
          },
          {
            "es": "lentamente",
            "en": "slowly"
          },
          {
            "es": "fácilmente",
            "en": "easily"
          },
          {
            "es": "difícilmente",
            "en": "with difficulty"
          },
          {
            "es": "claramente",
            "en": "clearly"
          },
          {
            "es": "simplemente",
            "en": "simply"
          },
          {
            "es": "felizmente",
            "en": "happily"
          },
          {
            "es": "honestamente",
            "en": "honestly"
          },
          {
            "es": "directamente",
            "en": "directly"
          },
          {
            "es": "cuidadosamente",
            "en": "carefully"
          },
          {
            "es": "generalmente",
            "en": "generally"
          },
          {
            "es": "especialmente",
            "en": "especially"
          }
        ],
        "checkpoint": [
          {
            "type": "matching",
            "instructions": "Empareja cada adverbio con su significado en inglés.",
            "pairs": [
              {
                "left": "rápidamente",
                "right": "quickly"
              },
              {
                "left": "lentamente",
                "right": "slowly"
              },
              {
                "left": "fácilmente",
                "right": "easily"
              },
              {
                "left": "difícilmente",
                "right": "with difficulty"
              },
              {
                "left": "claramente",
                "right": "clearly"
              },
              {
                "left": "simplemente",
                "right": "simply"
              },
              {
                "left": "felizmente",
                "right": "happily"
              },
              {
                "left": "honestamente",
                "right": "honestly"
              },
              {
                "left": "directamente",
                "right": "directly"
              },
              {
                "left": "cuidadosamente",
                "right": "carefully"
              },
              {
                "left": "generalmente",
                "right": "generally"
              },
              {
                "left": "especialmente",
                "right": "especially"
              }
            ],
            "explanation": "Cada uno de estos adverbios se forma con la femenina del adjetivo correspondiente más -mente."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "translate",
        "direction": "es-en",
        "prompt": "Translate this sentence to English.",
        "source": "Normalmente llego al trabajo a las ocho.",
        "answer": "I normally arrive at work at eight.",
        "altAnswers": [
          "I usually get to work at eight."
        ],
        "explanation": "Normalmente se forma con normal (una sola forma, termina en consonante) + -mente, sin cambios adicionales."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras.",
        "words": [
          "Hablamos",
          "lenta",
          "y",
          "claramente",
          "en",
          "la",
          "reunión"
        ],
        "translation": "We spoke slowly and clearly in the meeting.",
        "explanation": "Solo el último adverbio de la serie lleva -mente: lenta y claramente, no lentamente y claramente."
      },
      {
        "type": "multi-select",
        "question": "¿Qué adverbios están escritos correctamente? (Elige todas las correctas)",
        "options": [
          "rápidamente",
          "rapidamente",
          "fácilmente",
          "facilmente",
          "felizmente"
        ],
        "correctIndexes": [
          0,
          2,
          4
        ],
        "explanation": "Rápidamente y fácilmente conservan la tilde del adjetivo original (rápido, fácil). Felizmente no lleva tilde porque feliz tampoco la lleva."
      }
    ]
  },
  {
    "slug": "asking-giving-directions-1",
    "level": "A2",
    "number": 28,
    "title": "Cómo Pedir y Dar Direcciones, Part 1 of 2",
    "summary": "Aprende a pedir direcciones cortésmente y a darlas usando mandatos formales de usted, preposiciones de ubicación y vocabulario de la calle.",
    "duration": "5 min",
    "sections": [
      {
        "heading": "Cómo Pedir Direcciones Cortésmente",
        "body": [
          "Cuando estás perdido/a en la calle, lo primero es llamar la atención de otra persona con cortesía. Usa Perdón o Disculpe antes de hacer tu pregunta.",
          "Para preguntar cómo llegar a un lugar, usa ¿Cómo llego a...? o ¿Sabe dónde está...?",
          "También puedes preguntar si un lugar está cerca o lejos con ¿Está cerca/lejos de aquí?"
        ],
        "examples": [
          {
            "es": "Disculpe, ¿me puede ayudar? Estoy perdido.",
            "en": "Excuse me, can you help me? I'm lost."
          },
          {
            "es": "¿Cómo llego a la estación de tren?",
            "en": "How do I get to the train station?"
          },
          {
            "es": "¿Está lejos de aquí la farmacia?",
            "en": "Is the pharmacy far from here?"
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Cuál es la forma más cortés de comenzar a pedir direcciones a un desconocido en la calle?",
            "options": [
              "Oye, dime cómo llegar.",
              "Perdón, ¿me puede ayudar?",
              "¿Qué haces?",
              "Ven aquí."
            ],
            "correctIndex": 1,
            "explanation": "Con un desconocido se usa un saludo cortés como Perdón junto con el registro formal (usted), ya que no existe confianza previa entre las dos personas."
          }
        ]
      },
      {
        "heading": "Cómo Dar Direcciones: Mandatos con Usted",
        "body": [
          "Para dar direcciones a un desconocido en la calle, lo normal en español es usar el mandato formal de usted, no el mandato de tú, porque le hablas a una persona que no conoces.",
          "Los verbos más comunes son seguir (siga), continuar (continúe), girar (gire), doblar (doble), cruzar (cruce) y tomar (tome).",
          "Siga/continúe derecho significa go straight. Gire/doble a la derecha o a la izquierda significa turn right/left. Cruce la calle significa cross the street. Tome la primera/segunda calle significa take the first/second street."
        ],
        "examples": [
          {
            "es": "Siga derecho hasta el semáforo.",
            "en": "Go straight until the traffic light."
          },
          {
            "es": "Gire a la izquierda en la esquina.",
            "en": "Turn left at the corner."
          },
          {
            "es": "Tome la segunda calle a la derecha.",
            "en": "Take the second street on the right."
          },
          {
            "es": "Cruce la calle y el museo está enfrente.",
            "en": "Cross the street and the museum is in front."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa el mandato formal para dar direcciones.",
            "sentence": "___ derecho dos cuadras y después gire a la derecha.",
            "answer": "Siga",
            "hint": "Mandato de usted del verbo seguir.",
            "explanation": "Siga es el mandato formal (usted) del verbo seguir, la forma correcta para darle una instrucción a un desconocido."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "¿Qué mandato usarías para decirle a un desconocido que doble a la izquierda?",
        "options": [
          "Dobla a la izquierda",
          "Doble a la izquierda",
          "Doblas a la izquierda",
          "Doblar a la izquierda"
        ],
        "correctIndex": 1,
        "explanation": "Doble es el mandato formal (usted) del verbo doblar. Al hablar con un desconocido en la calle se usa la forma de usted, no la de tú (dobla)."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con la preposición correcta.",
        "sentence": "La panadería está ___ el banco y la farmacia.",
        "answer": "entre",
        "hint": "Significa 'between' en inglés.",
        "explanation": "Entre se usa para indicar que algo está en medio de dos lugares, como between en inglés."
      },
      {
        "type": "multi-select",
        "question": "¿Cuáles de estas expresiones sirven para preguntar por una dirección?",
        "options": [
          "¿Cómo llego a...?",
          "Me gusta mucho este lugar.",
          "¿Dónde está...?",
          "Vivo aquí desde hace años.",
          "¿Está cerca de aquí?"
        ],
        "correctIndexes": [
          0,
          2,
          4
        ],
        "explanation": "¿Cómo llego a...?, ¿Dónde está...? y ¿Está cerca de aquí? son preguntas directas para pedir direcciones; las otras opciones no piden una dirección."
      },
      {
        "type": "matching",
        "instructions": "Relaciona cada mandato en español con su significado en inglés.",
        "pairs": [
          {
            "left": "Siga derecho",
            "right": "Go straight"
          },
          {
            "left": "Gire a la derecha",
            "right": "Turn right"
          },
          {
            "left": "Cruce la calle",
            "right": "Cross the street"
          },
          {
            "left": "Tome la primera calle",
            "right": "Take the first street"
          }
        ],
        "explanation": "Estos son los mandatos formales (usted) más comunes para dar direcciones a un desconocido."
      }
    ]
  },
  {
    "slug": "asking-giving-directions-2",
    "level": "A2",
    "number": 29,
    "title": "Cómo Pedir y Dar Direcciones, Part 2 of 2",
    "summary": "Aprende a pedir direcciones cortésmente y a darlas usando mandatos formales de usted, preposiciones de ubicación y vocabulario de la calle.",
    "duration": "6 min",
    "sections": [
      {
        "heading": "Preposiciones y Expresiones de Ubicación",
        "body": [
          "Para describir dónde está un lugar, se usan preposiciones y expresiones de ubicación: al lado de (next to), enfrente de (in front of / across from), detrás de (behind), entre (between), en la esquina de (on the corner of), a dos cuadras/manzanas de (two blocks from), cerca de (close to) y lejos de (far from).",
          "La palabra cuadra se usa en Latinoamérica y manzana en España para referirse a un bloque de calles."
        ],
        "examples": [
          {
            "es": "El banco está al lado del supermercado.",
            "en": "The bank is next to the supermarket."
          },
          {
            "es": "La plaza está entre la iglesia y el parque.",
            "en": "The square is between the church and the park."
          },
          {
            "es": "El hotel está a dos cuadras de aquí.",
            "en": "The hotel is two blocks from here."
          }
        ],
        "checkpoint": [
          {
            "type": "matching",
            "instructions": "Relaciona cada expresión de ubicación con su significado en inglés.",
            "pairs": [
              {
                "left": "al lado de",
                "right": "next to"
              },
              {
                "left": "enfrente de",
                "right": "in front of / across from"
              },
              {
                "left": "detrás de",
                "right": "behind"
              },
              {
                "left": "a dos cuadras de",
                "right": "two blocks from"
              }
            ],
            "explanation": "Estas expresiones de ubicación son esenciales para describir dónde está un lugar en relación con otro cuando das direcciones."
          }
        ]
      },
      {
        "heading": "Puntos de Referencia y Vocabulario de la Calle",
        "body": [
          "Al dar o pedir direcciones, es útil mencionar puntos de referencia: la esquina (corner), la cuadra/la manzana (city block), el semáforo (traffic light), la plaza (square), el cruce (crossing/intersection), la calle (street) y la avenida (avenue).",
          "Mencionar un punto de referencia después del mandato ayuda a la otra persona a confirmar que va por el camino correcto."
        ],
        "examples": [
          {
            "es": "Doble en la esquina donde está el semáforo.",
            "en": "Turn at the corner where the traffic light is."
          },
          {
            "es": "Cruce el cruce con mucho cuidado.",
            "en": "Cross the intersection very carefully."
          },
          {
            "es": "La plaza principal está cerca del cruce.",
            "en": "The main square is near the intersection."
          }
        ],
        "checkpoint": [
          {
            "type": "multi-select",
            "question": "¿Cuáles de las siguientes palabras son puntos de referencia útiles para dar direcciones?",
            "options": [
              "el semáforo",
              "la esquina",
              "el cumpleaños",
              "la plaza",
              "el paraguas",
              "el cruce"
            ],
            "correctIndexes": [
              0,
              1,
              3,
              5
            ],
            "explanation": "El semáforo, la esquina, la plaza y el cruce son puntos de referencia comunes en la calle; el cumpleaños y el paraguas no tienen relación con dar direcciones."
          }
        ]
      },
      {
        "heading": "En Práctica: Pidiendo Direcciones en la Calle",
        "body": [
          "Lee el siguiente diálogo entre un turista perdido y una señora que vive en el barrio. Observa cómo el turista pide direcciones cortésmente y cómo la señora usa mandatos de usted para explicar el camino paso a paso."
        ],
        "examples": [
          {
            "es": "Turista: Disculpe, señora, ¿me puede ayudar? Busco el Museo de Arte.",
            "en": "Tourist: Excuse me, ma'am, can you help me? I'm looking for the Art Museum."
          },
          {
            "es": "Señora: Claro. Siga derecho por esta calle dos cuadras.",
            "en": "Woman: Of course. Go straight down this street two blocks."
          },
          {
            "es": "Señora: Luego gire a la derecha en la esquina, al lado de la farmacia.",
            "en": "Woman: Then turn right at the corner, next to the pharmacy."
          },
          {
            "es": "Señora: Cruce la plaza y el museo está enfrente, detrás del semáforo.",
            "en": "Woman: Cross the square and the museum is in front, behind the traffic light."
          },
          {
            "es": "Turista: Muchas gracias, ¡es usted muy amable!",
            "en": "Tourist: Thank you very much, you're very kind!"
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa la respuesta de la señora con la preposición correcta.",
            "sentence": "El museo está ___ del semáforo, no delante.",
            "answer": "detrás",
            "hint": "Es lo opuesto de enfrente.",
            "explanation": "Detrás de significa behind, lo contrario de enfrente de (in front of / across from)."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "translate",
        "direction": "es-en",
        "prompt": "Traduce la oración al inglés.",
        "source": "Continúe derecho hasta la plaza y después gire a la izquierda.",
        "answer": "Continue straight until the square and then turn left.",
        "altAnswers": [
          "Go straight until the square and then turn left.",
          "Keep going straight to the square and then turn left."
        ],
        "explanation": "Continúe es el mandato formal de continuar; hasta indica el punto donde termina esa parte del recorrido."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Traduce la oración al español.",
        "source": "Excuse me, is the museum far from here?",
        "answer": "Disculpe, ¿está lejos de aquí el museo?",
        "altAnswers": [
          "Perdón, ¿el museo está lejos de aquí?",
          "Disculpe, ¿el museo está lejos de aquí?"
        ],
        "explanation": "Disculpe/Perdón son formas corteses de dirigirse a un desconocido, y lejos de aquí pregunta por la distancia."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras para formar una oración lógica.",
        "words": [
          "Gire",
          "a",
          "la",
          "derecha",
          "en",
          "la",
          "esquina"
        ],
        "translation": "Turn right at the corner.",
        "explanation": "El mandato formal Gire va primero, seguido de la dirección (a la derecha) y el punto de referencia (en la esquina)."
      },
      {
        "type": "multiple-choice",
        "question": "Estás en la calle y un turista te pregunta por el correo. ¿Cuál es la mejor manera de empezar tu respuesta usando el mandato formal?",
        "options": [
          "Sigue derecho dos cuadras.",
          "Siga derecho dos cuadras.",
          "Sigues derecho dos cuadras.",
          "Seguir derecho dos cuadras."
        ],
        "correctIndex": 1,
        "explanation": "Siga es el mandato formal (usted) del verbo seguir, apropiado para hablarle a un desconocido que pide direcciones."
      }
    ]
  },
  {
    "slug": "at-the-restaurant-1",
    "level": "A2",
    "number": 30,
    "title": "En el Restaurante, Part 1 of 2",
    "summary": "Aprende a reservar mesa, pedir la comida, hacer peticiones educadas, indicar necesidades dietéticas y pagar la cuenta en un restaurante.",
    "duration": "6 min",
    "sections": [
      {
        "heading": "Al llegar: la reserva y la mesa",
        "body": [
          "Antes de sentarte, es normal decir si tienes una reserva o no. Si no tienes reserva, puedes preguntar directamente si hay una mesa disponible.",
          "La frase Tengo una reserva a nombre de... se usa para dar tu nombre al camarero o a la camarera cuando llegas.",
          "También puedes pedir un lugar específico, como una mesa junto a la ventana (a table by the window) o una mesa para dos.",
          "En restaurantes más antiguos o formales, a veces todavía preguntan ¿Fuma o no fuma? (Smoking or non-smoking?), aunque hoy en día casi todos los restaurantes son completamente sin fumar."
        ],
        "examples": [
          {
            "es": "Tengo una reserva a nombre de Carlos.",
            "en": "I have a reservation under the name Carlos."
          },
          {
            "es": "¿Tiene una mesa para dos, por favor?",
            "en": "Do you have a table for two, please?"
          },
          {
            "es": "¿Podríamos sentarnos junto a la ventana?",
            "en": "Could we sit by the window?"
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa la frase para dar tu nombre al hacer una reserva.",
            "sentence": "Tengo una reserva a ___ de Ana.",
            "answer": "nombre",
            "hint": "Literalmente: 'in the name of'.",
            "explanation": "La expresión fija es a nombre de + persona, equivalente a 'under the name of' en inglés."
          }
        ]
      },
      {
        "heading": "Vocabulario clave del restaurante",
        "body": [
          "Hay palabras esenciales que necesitas reconocer en cualquier restaurante hispanohablante.",
          "Una diferencia importante es regional: en España se dice el camarero / la camarera para 'waiter/waitress', mientras que en gran parte de Latinoamérica se prefiere el mesero / la mesera. Ambas formas se entienden en casi todas partes, pero es útil saber cuál es más común según el país.",
          "El menú (también llamado la carta en España) lista las opciones. El plato del día es la sugerencia especial de hoy. Una comida típica se organiza en la entrada (starter), el plato principal (main course) y el postre (dessert), acompañados de una bebida. Al final, no olvides la propina (tip)."
        ],
        "examples": [
          {
            "es": "¿Nos puede traer la carta, por favor?",
            "en": "Could you bring us the menu, please?"
          },
          {
            "es": "El mesero nos recomendó el plato del día.",
            "en": "The waiter recommended the daily special to us."
          },
          {
            "es": "De postre, quiero un flan.",
            "en": "For dessert, I want a flan."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Cuál palabra se usa más comúnmente para 'waiter' en muchos países de Latinoamérica?",
            "options": [
              "el camarero",
              "el mesero",
              "el cocinero",
              "el cliente"
            ],
            "correctIndex": 1,
            "explanation": "Mesero es la forma más común en gran parte de Latinoamérica, mientras que camarero predomina en España."
          }
        ]
      },
      {
        "heading": "Pedir la comida",
        "body": [
          "Para pedir, existen varias formas educadas y muy naturales en español.",
          "Para mí... es una manera simple de indicar qué plato quieres tú, especialmente cuando cada persona en la mesa va diciendo su pedido por turno.",
          "Yo quisiera... es aún más educado. Quisiera viene del verbo querer en una forma que suaviza la petición, similar a 'I would like' en inglés, y es la manera más común y cortés de pedir en un restaurante (más suave que Yo quiero...).",
          "Si no sabes qué elegir, puedes preguntar ¿Qué me recomienda? o pedir más información con ¿Cómo es el plato de pollo?"
        ],
        "examples": [
          {
            "es": "Para mí, la ensalada César, por favor.",
            "en": "For me, the Caesar salad, please."
          },
          {
            "es": "Yo quisiera el pescado a la plancha.",
            "en": "I would like the grilled fish."
          },
          {
            "es": "¿Qué me recomienda usted?",
            "en": "What do you recommend (to me)?"
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Cuál de estas frases suena más educada y natural al pedir en un restaurante?",
            "options": [
              "Yo quiero el pollo.",
              "Yo quisiera el pollo.",
              "Dame el pollo.",
              "Yo como el pollo."
            ],
            "correctIndex": 1,
            "explanation": "Quisiera suaviza la petición y es la forma más cortés y natural de pedir comida, mientras que quiero puede sonar más directo o incluso brusco."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "¿Cuál frase se usa típicamente para pedir una mesa al llegar sin reserva?",
        "options": [
          "¿Me podría traer la cuenta?",
          "¿Tiene una mesa para dos?",
          "Soy vegetariano.",
          "¿Está incluida la propina?"
        ],
        "correctIndex": 1,
        "explanation": "¿Tiene una mesa para dos? se usa para preguntar si hay disponibilidad al llegar sin reserva previa."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la frase educada para pedir comida.",
        "sentence": "Yo ___ el pescado, por favor.",
        "answer": "quisiera",
        "hint": "Forma cortés de 'I would like', del verbo querer.",
        "explanation": "Quisiera es la forma educada y suave de expresar un deseo al pedir, más cortés que quiero."
      },
      {
        "type": "multi-select",
        "question": "¿Cuáles de estas palabras significan 'waiter/waitress' en español? Selecciona todas las correctas.",
        "options": [
          "el camarero",
          "el mesero",
          "el cocinero",
          "la camarera"
        ],
        "correctIndexes": [
          0,
          1,
          3
        ],
        "explanation": "Camarero/camarera (España) y mesero/mesera (Latinoamérica) significan 'waiter/waitress'; cocinero significa 'cook', no camarero."
      },
      {
        "type": "matching",
        "instructions": "Une cada frase en español con su significado en inglés.",
        "pairs": [
          {
            "left": "La cuenta, por favor.",
            "right": "The check, please."
          },
          {
            "left": "Soy alérgico a los mariscos.",
            "right": "I'm allergic to shellfish."
          },
          {
            "left": "¿Está incluida la propina?",
            "right": "Is the tip included?"
          },
          {
            "left": "¿Podemos dividir la cuenta?",
            "right": "Can we split the check?"
          }
        ],
        "explanation": "Estas son frases esenciales al momento de pagar y de indicar restricciones alimentarias en un restaurante."
      }
    ]
  },
  {
    "slug": "at-the-restaurant-2",
    "level": "A2",
    "number": 31,
    "title": "En el Restaurante, Part 2 of 2",
    "summary": "Aprende a reservar mesa, pedir la comida, hacer peticiones educadas, indicar necesidades dietéticas y pagar la cuenta en un restaurante.",
    "duration": "6 min",
    "sections": [
      {
        "heading": "Peticiones educadas y necesidades especiales",
        "body": [
          "Para pedir algo adicional de manera cortés, se usa la estructura ¿Me podría traer...? (Could you bring me...?), que usa el condicional de poder para sonar más suave que un simple imperativo.",
          "Esta misma estructura funciona en plural: ¿Nos podría traer la cuenta, por favor? es una de las frases más útiles para terminar la comida.",
          "Si tienes alguna restricción alimentaria, es importante saber decirlo con claridad: Soy alérgico/a a los frutos secos, Soy vegetariano/a, o Necesito algo sin gluten.",
          "También puedes preguntar directamente si hay opciones disponibles: ¿Tiene algo sin carne?"
        ],
        "examples": [
          {
            "es": "¿Me podría traer un poco más de pan?",
            "en": "Could you bring me a bit more bread?"
          },
          {
            "es": "Soy alérgica a los mariscos.",
            "en": "I'm allergic to shellfish."
          },
          {
            "es": "¿Tienen algo sin gluten?",
            "en": "Do you have anything gluten-free?"
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa la petición educada.",
            "sentence": "¿Me ___ traer la sal, por favor?",
            "answer": "podría",
            "hint": "Forma condicional de poder.",
            "explanation": "¿Me podría traer...? usa el condicional podría para suavizar la petición y sonar más cortés que un mandato directo."
          }
        ]
      },
      {
        "heading": "Pagar la cuenta",
        "body": [
          "Cuando terminas de comer, la frase más común para pedir la cuenta es simplemente La cuenta, por favor.",
          "En algunos países la propina ya está incluida en el precio; por eso es útil preguntar ¿Está incluida la propina?",
          "También puedes indicar cómo vas a pagar: pagar en efectivo (to pay in cash) o pagar con tarjeta (to pay by card).",
          "Si van varias personas, a veces conviene dividir la cuenta (to split the check) entre todos."
        ],
        "examples": [
          {
            "es": "La cuenta, por favor.",
            "en": "The check, please."
          },
          {
            "es": "¿Está incluida la propina?",
            "en": "Is the tip included?"
          },
          {
            "es": "¿Podemos dividir la cuenta?",
            "en": "Can we split the check?"
          }
        ],
        "checkpoint": [
          {
            "type": "translate",
            "direction": "en-es",
            "prompt": "Traduce al español.",
            "source": "Can we pay by card?",
            "answer": "¿Podemos pagar con tarjeta?",
            "altAnswers": [
              "¿Podemos pagar con la tarjeta?"
            ],
            "explanation": "Pagar con tarjeta significa 'to pay by/with card'; pagar en efectivo sería la opción contraria, 'to pay in cash'."
          }
        ]
      },
      {
        "heading": "En práctica: una visita al restaurante",
        "body": [
          "Lee este diálogo completo, desde la llegada hasta el pago, para ver cómo se combinan todas las frases en una conversación real.",
          "Mesero: Buenas noches, ¿tiene una reserva? / Cliente: Sí, tengo una reserva a nombre de Laura, para dos personas.",
          "Mesero: Perfecto, síganme. ¿Les gustaría una mesa junto a la ventana? / Cliente: Sí, perfecto, gracias.",
          "Mesero: Aquí tienen la carta. ¿Qué le puedo ofrecer para beber? / Cliente: Para mí, agua mineral, por favor.",
          "Mesero: ¿Ya saben qué van a pedir? / Cliente: Yo quisiera el plato del día. Y una pregunta: soy alérgica a los frutos secos, ¿el plato del día los lleva? / Mesero: No, no se preocupe, no lleva frutos secos.",
          "(Al terminar de comer) Cliente: ¿Nos podría traer la cuenta, por favor? / Mesero: Claro, enseguida. / Cliente: ¿Está incluida la propina? / Mesero: No, se agrega aparte. / Cliente: Entendido, vamos a pagar con tarjeta y dividir la cuenta, por favor."
        ],
        "examples": [
          {
            "es": "¿Qué le puedo ofrecer para beber?",
            "en": "What can I get you to drink?"
          },
          {
            "es": "No se preocupe, no lleva frutos secos.",
            "en": "Don't worry, it doesn't have nuts in it."
          }
        ],
        "checkpoint": [
          {
            "type": "multi-select",
            "question": "Según el diálogo, ¿qué dos cosas pide la clienta al final de la comida? Selecciona ambas.",
            "options": [
              "La carta",
              "La cuenta",
              "Pagar con tarjeta",
              "Una mesa junto a la ventana"
            ],
            "correctIndexes": [
              1,
              2
            ],
            "explanation": "Al final, la clienta pide la cuenta (¿Nos podría traer la cuenta?) y dice que van a pagar con tarjeta."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "translate",
        "direction": "es-en",
        "prompt": "Traduce al inglés.",
        "source": "¿Me podría traer un poco más de agua, por favor?",
        "answer": "Could you bring me a little more water, please?",
        "altAnswers": [
          "Could you bring me a bit more water, please?"
        ],
        "explanation": "¿Me podría traer...? usa el condicional para hacer una petición educada, equivalente a 'Could you bring me...?'."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Traduce al español.",
        "source": "I am vegetarian. Do you have anything without meat?",
        "answer": "Soy vegetariano. ¿Tiene algo sin carne?",
        "altAnswers": [
          "Soy vegetariana. ¿Tiene algo sin carne?",
          "Soy vegetariano/a. ¿Tienen algo sin carne?"
        ],
        "explanation": "Soy vegetariano/a se usa para indicar una restricción dietética, y ¿Tiene algo sin carne? pregunta por opciones disponibles."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras para formar una petición educada y correcta.",
        "words": [
          "¿Nos",
          "podría",
          "traer",
          "la",
          "cuenta,",
          "por",
          "favor?"
        ],
        "translation": "Could you bring us the check, please?",
        "explanation": "El orden correcto es ¿Nos podría traer la cuenta, por favor?, usando el condicional podría para suavizar la petición."
      },
      {
        "type": "multiple-choice",
        "question": "En el diálogo de práctica, ¿por qué la clienta menciona que es alérgica a los frutos secos?",
        "options": [
          "Para pedir la cuenta",
          "Para confirmar que el plato del día no los contiene",
          "Para reservar una mesa",
          "Para pagar con tarjeta"
        ],
        "correctIndex": 1,
        "explanation": "La clienta menciona su alergia antes de confirmar su pedido, para asegurarse de que el plato del día no contenga frutos secos."
      }
    ]
  },
  {
    "slug": "preterite-drill-1",
    "level": "A2",
    "number": 32,
    "title": "El Pretérito: Práctica Extra, Part 1 of 3",
    "summary": "Practica la conjugación y el uso del pretérito con verbos regulares e irregulares en contextos variados.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Verbos regulares en -ar",
        "body": [
          "Recuerda las terminaciones regulares del pretérito para verbos en -ar: -é, -aste, -ó, -amos, -asteis, -aron."
        ],
        "examples": [
          {
            "es": "Ayer hablé con mi jefe sobre el proyecto.",
            "en": "Yesterday I talked with my boss about the project."
          },
          {
            "es": "Ellos compraron una casa nueva el mes pasado.",
            "en": "They bought a new house last month."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa la oración con la forma correcta.",
            "sentence": "Nosotros ___ (cocinar) la cena anoche.",
            "answer": "cocinamos",
            "hint": "pretérito, nosotros",
            "explanation": "La terminación de nosotros en -ar es -amos."
          },
          {
            "type": "multiple-choice",
            "question": "¿Cuál es la forma correcta de 'trabajar' en pretérito, yo?",
            "options": [
              "trabajo",
              "trabajé",
              "trabajaba",
              "trabajaré"
            ],
            "correctIndex": 1,
            "explanation": "La terminación de yo en -ar es -é."
          }
        ]
      },
      {
        "heading": "Verbos regulares en -er/-ir",
        "body": [
          "Recuerda que los verbos en -er e -ir comparten las mismas terminaciones en pretérito: -í, -iste, -ió, -imos, -isteis, -ieron."
        ],
        "examples": [
          {
            "es": "Comí en ese restaurante la semana pasada.",
            "en": "I ate at that restaurant last week."
          },
          {
            "es": "Vivieron en Madrid por dos años.",
            "en": "They lived in Madrid for two years."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa la oración con la forma correcta.",
            "sentence": "Tú ___ (escribir) una carta muy bonita.",
            "answer": "escribiste",
            "hint": "pretérito, tú",
            "explanation": "Repasa la regla de esta sección para confirmar la respuesta."
          },
          {
            "type": "multiple-choice",
            "question": "¿Cuál es la forma correcta de 'volver' en pretérito, ella?",
            "options": [
              "volvió",
              "volvía",
              "volverá",
              "vuelve"
            ],
            "correctIndex": 0,
            "explanation": "Repasa la regla de esta sección para confirmar la respuesta."
          }
        ]
      },
      {
        "heading": "Verbos irregulares: raíz cambiada",
        "body": [
          "Algunos verbos cambian completamente la raíz en pretérito: tener→tuv-, estar→estuv-, poder→pud-, poner→pus-."
        ],
        "examples": [
          {
            "es": "Tuve que salir temprano ayer.",
            "en": "I had to leave early yesterday."
          },
          {
            "es": "Estuvimos en la reunión toda la mañana.",
            "en": "We were in the meeting all morning."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa la oración con la forma correcta.",
            "sentence": "Ella ___ (poner) las llaves en la mesa.",
            "answer": "puso",
            "hint": "raíz pus-",
            "explanation": "Repasa la regla de esta sección para confirmar la respuesta."
          },
          {
            "type": "multiple-choice",
            "question": "¿Cuál es la forma correcta de 'poder' en pretérito, yo?",
            "options": [
              "podí",
              "pude",
              "puedí",
              "podió"
            ],
            "correctIndex": 1,
            "explanation": "Repasa la regla de esta sección para confirmar la respuesta."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con la forma correcta.",
        "sentence": "Ayer ___ (yo, estudiar) toda la tarde.",
        "answer": "estudié",
        "hint": "pretérito, yo",
        "explanation": "Repasa la regla de esta sección para confirmar la respuesta."
      },
      {
        "type": "multiple-choice",
        "question": "¿Cuál es la forma correcta de 'tener' en pretérito, tú?",
        "options": [
          "tuviste",
          "tenías",
          "tendrás",
          "tienes"
        ],
        "correctIndex": 0,
        "explanation": "Repasa la regla de esta sección para confirmar la respuesta."
      },
      {
        "type": "translate",
        "direction": "es-en",
        "prompt": "Traduce la oración al inglés.",
        "source": "Anoche vimos una película muy interesante.",
        "answer": "Last night we watched a very interesting movie.",
        "explanation": "Repasa la regla de esta sección para confirmar la respuesta."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con la forma correcta.",
        "sentence": "Mis padres ___ (venir) a visitarme el fin de semana pasado.",
        "answer": "vinieron",
        "hint": "raíz vin-",
        "explanation": "Repasa la regla de esta sección para confirmar la respuesta."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras para formar una oración.",
        "words": [
          "semana",
          "pasada",
          "fuimos",
          "playa",
          "a",
          "la"
        ],
        "explanation": "Pretérito de ir + complemento de lugar y tiempo."
      },
      {
        "type": "multiple-choice",
        "question": "¿Cuál es la forma correcta de 'hacer', ella?",
        "options": [
          "hació",
          "hizo",
          "hace",
          "hacía"
        ],
        "correctIndex": 1,
        "explanation": "Repasa la regla de esta sección para confirmar la respuesta."
      }
    ]
  },
  {
    "slug": "preterite-drill-2",
    "level": "A2",
    "number": 33,
    "title": "El Pretérito: Práctica Extra, Part 2 of 3",
    "summary": "Practica la conjugación y el uso del pretérito con verbos regulares e irregulares en contextos variados.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "Irregulares: decir, traer, verbos en -ucir",
        "body": [
          "Los verbos decir, traer y los terminados en -ucir usan la terminación -eron en vez de -ieron en la tercera persona plural."
        ],
        "examples": [
          {
            "es": "Ellos dijeron la verdad al final.",
            "en": "They told the truth in the end."
          },
          {
            "es": "Trajeron comida para todos.",
            "en": "They brought food for everyone."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Cuál es la forma correcta de 'decir' en pretérito, ellos?",
            "options": [
              "dijeron",
              "dijieron",
              "decieron",
              "dijaron"
            ],
            "correctIndex": 0,
            "explanation": "Repasa la regla de esta sección para confirmar la respuesta."
          },
          {
            "type": "fill-blank",
            "prompt": "Completa la oración con la forma correcta.",
            "sentence": "Yo ___ (traducir) el documento al inglés.",
            "answer": "traduje",
            "hint": "raíz traduj-",
            "explanation": "Repasa la regla de esta sección para confirmar la respuesta."
          }
        ]
      },
      {
        "heading": "Ser e ir: formas idénticas",
        "body": [
          "Ser e ir comparten exactamente las mismas formas en pretérito, y el contexto indica cuál se usa."
        ],
        "examples": [
          {
            "es": "Fui al cine el sábado.",
            "en": "I went to the movies on Saturday."
          },
          {
            "es": "Fue un día muy largo.",
            "en": "It was a very long day."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "En '___ profesora durante veinte años', ¿qué verbo es?",
            "options": [
              "ser",
              "ir",
              "estar",
              "tener"
            ],
            "correctIndex": 0,
            "explanation": "Aquí 'fue' viene de 'ser', describiendo una profesión."
          },
          {
            "type": "fill-blank",
            "prompt": "Completa la oración con la forma correcta.",
            "sentence": "Nosotros ___ (ir) a la playa el domingo.",
            "answer": "fuimos",
            "hint": "pretérito de ir",
            "explanation": "Repasa la regla de esta sección para confirmar la respuesta."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con la forma correcta.",
        "sentence": "Yo ___ (pagar) la cuenta ayer.",
        "answer": "pagué",
        "hint": "cambio g→gu",
        "explanation": "Repasa la regla de esta sección para confirmar la respuesta."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Traduce la oración al español.",
        "source": "She said she wasn't hungry.",
        "answer": "Ella dijo que no tenía hambre.",
        "explanation": "Repasa la regla de esta sección para confirmar la respuesta."
      },
      {
        "type": "multiple-choice",
        "question": "¿Cuál es correcta para 'saber' en pretérito, nosotros?",
        "options": [
          "supimos",
          "sabíamos",
          "sabremos",
          "sepimos"
        ],
        "correctIndex": 0,
        "explanation": "Repasa la regla de esta sección para confirmar la respuesta."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con la forma correcta.",
        "sentence": "Los niños ___ (pedir) helado de postre.",
        "answer": "pidieron",
        "hint": "e→i, ellos",
        "explanation": "Repasa la regla de esta sección para confirmar la respuesta."
      },
      {
        "type": "matching",
        "instructions": "Relaciona cada elemento con su pareja correcta.",
        "pairs": [
          {
            "left": "fui",
            "right": "I went / I was"
          },
          {
            "left": "tuve",
            "right": "I had"
          },
          {
            "left": "hice",
            "right": "I did / I made"
          },
          {
            "left": "dije",
            "right": "I said"
          },
          {
            "left": "pude",
            "right": "I could"
          },
          {
            "left": "puse",
            "right": "I put"
          }
        ],
        "explanation": "Repasa la regla de esta sección para confirmar la respuesta."
      },
      {
        "type": "multiple-choice",
        "question": "¿Cuál oración usa correctamente el pretérito?",
        "options": [
          "Ella trabaja aquí desde 2015.",
          "Ella trabajó aquí el año pasado.",
          "Ella trabajando aquí ahora.",
          "Ella trabaja aquí ayer."
        ],
        "correctIndex": 1,
        "explanation": "Repasa la regla de esta sección para confirmar la respuesta."
      }
    ]
  },
  {
    "slug": "preterite-drill-3",
    "level": "A2",
    "number": 34,
    "title": "El Pretérito: Práctica Extra, Part 3 of 3",
    "summary": "Practica la conjugación y el uso del pretérito con verbos regulares e irregulares en contextos variados.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "Verbos con cambio ortográfico",
        "body": [
          "Verbos como buscar, llegar y empezar cambian la ortografía solo en la forma yo: busqué, llegué, empecé."
        ],
        "examples": [
          {
            "es": "Llegué tarde a la clase.",
            "en": "I arrived late to class."
          },
          {
            "es": "Empecé el trabajo nuevo ayer.",
            "en": "I started the new job yesterday."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa la oración con la forma correcta.",
            "sentence": "Yo ___ (buscar) las llaves por todas partes.",
            "answer": "busqué",
            "hint": "cambio c→qu en yo",
            "explanation": "Repasa la regla de esta sección para confirmar la respuesta."
          },
          {
            "type": "multiple-choice",
            "question": "¿Cuál es correcta para 'jugar', yo?",
            "options": [
              "jugué",
              "juegué",
              "jugé",
              "juegé"
            ],
            "correctIndex": 0,
            "explanation": "Repasa la regla de esta sección para confirmar la respuesta."
          }
        ]
      },
      {
        "heading": "Verbos con e→i en la tercera persona",
        "body": [
          "Verbos -ir como pedir, servir y dormir cambian la vocal de la raíz solo en él/ella y ellos/ellas."
        ],
        "examples": [
          {
            "es": "Ella pidió un café con leche.",
            "en": "She ordered a coffee with milk."
          },
          {
            "es": "Ellos durmieron ocho horas anoche.",
            "en": "They slept eight hours last night."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa la oración con la forma correcta.",
            "sentence": "El camarero ___ (servir) la comida rápido.",
            "answer": "sirvió",
            "hint": "e→i",
            "explanation": "Repasa la regla de esta sección para confirmar la respuesta."
          },
          {
            "type": "multiple-choice",
            "question": "¿Cuál es correcta para 'dormir', ella?",
            "options": [
              "dormió",
              "durmió",
              "durmía",
              "duermió"
            ],
            "correctIndex": 1,
            "explanation": "Repasa la regla de esta sección para confirmar la respuesta."
          }
        ]
      },
      {
        "heading": "Contraste con el presente",
        "body": [
          "Recuerda distinguir claramente entre las formas del presente y del pretérito al conjugar."
        ],
        "examples": [
          {
            "es": "Normalmente como a las dos, pero ayer comí a la una.",
            "en": "I usually eat at two, but yesterday I ate at one."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Cuál oración está en pretérito?",
            "options": [
              "Como pan todos los días.",
              "Comí pan ayer.",
              "Estoy comiendo pan.",
              "Voy a comer pan."
            ],
            "correctIndex": 1,
            "explanation": "Repasa la regla de esta sección para confirmar la respuesta."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con la forma correcta.",
        "sentence": "¿Dónde ___ (tú, poner) mis llaves?",
        "answer": "pusiste",
        "hint": "raíz pus-",
        "explanation": "Repasa la regla de esta sección para confirmar la respuesta."
      },
      {
        "type": "translate",
        "direction": "es-en",
        "prompt": "Traduce la oración al inglés.",
        "source": "Llegamos al aeropuerto muy tarde.",
        "answer": "We arrived at the airport very late.",
        "explanation": "Repasa la regla de esta sección para confirmar la respuesta."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras para formar una oración.",
        "words": [
          "dijeron",
          "verdad",
          "no",
          "la",
          "me"
        ],
        "explanation": "Pretérito de decir con pronombre de objeto indirecto."
      },
      {
        "type": "multiple-choice",
        "question": "¿Cuál es correcta para 'leer', él?",
        "options": [
          "leyó",
          "leió",
          "leó",
          "leiió"
        ],
        "correctIndex": 0,
        "explanation": "Repasa la regla de esta sección para confirmar la respuesta."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con la forma correcta.",
        "sentence": "Nosotros ___ (dormir) muy poco anoche.",
        "answer": "dormimos",
        "hint": "nosotros no cambia la vocal",
        "explanation": "Repasa la regla de esta sección para confirmar la respuesta."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Traduce la oración al español.",
        "source": "They brought their own food to the party.",
        "answer": "Trajeron su propia comida a la fiesta.",
        "explanation": "Repasa la regla de esta sección para confirmar la respuesta."
      }
    ]
  },
  {
    "slug": "imperfect-drill-1",
    "level": "A2",
    "number": 35,
    "title": "El Imperfecto: Práctica Extra, Part 1 of 3",
    "summary": "Practica la conjugación y el uso del imperfecto para describir el pasado, hábitos y descripciones.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "Verbos regulares en -ar",
        "body": [
          "Recuerda las terminaciones del imperfecto para verbos en -ar: -aba, -abas, -aba, -ábamos, -abais, -aban."
        ],
        "examples": [
          {
            "es": "Cuando era niño, jugaba en el parque todos los días.",
            "en": "When I was a kid, I used to play in the park every day."
          },
          {
            "es": "Mis abuelos vivían en el campo.",
            "en": "My grandparents used to live in the countryside."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa la oración con la forma correcta.",
            "sentence": "Nosotros ___ (cocinar) juntos los domingos.",
            "answer": "cocinábamos",
            "hint": "imperfecto, nosotros",
            "explanation": "Repasa la regla de esta sección para confirmar la respuesta."
          },
          {
            "type": "multiple-choice",
            "question": "¿Cuál es correcta para 'hablar', yo, imperfecto?",
            "options": [
              "hablé",
              "hablaba",
              "hablo",
              "hablaré"
            ],
            "correctIndex": 1,
            "explanation": "Repasa la regla de esta sección para confirmar la respuesta."
          }
        ]
      },
      {
        "heading": "Verbos regulares en -er/-ir",
        "body": [
          "Los verbos -er e -ir comparten las terminaciones del imperfecto: -ía, -ías, -ía, -íamos, -íais, -ían."
        ],
        "examples": [
          {
            "es": "Comíamos juntos cada noche.",
            "en": "We used to eat together every night."
          },
          {
            "es": "Vivía en esa ciudad de pequeño.",
            "en": "I lived in that city as a child."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa la oración con la forma correcta.",
            "sentence": "Ellos ___ (escribir) cartas a sus amigos.",
            "answer": "escribían",
            "hint": "imperfecto, ellos",
            "explanation": "Repasa la regla de esta sección para confirmar la respuesta."
          },
          {
            "type": "multiple-choice",
            "question": "¿Cuál es correcta para 'tener', tú, imperfecto?",
            "options": [
              "tuviste",
              "tenías",
              "tendrás",
              "tienes"
            ],
            "correctIndex": 1,
            "explanation": "Repasa la regla de esta sección para confirmar la respuesta."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con la forma correcta.",
        "sentence": "De niña, yo ___ (jugar) con muñecas.",
        "answer": "jugaba",
        "hint": "imperfecto, yo",
        "explanation": "Repasa la regla de esta sección para confirmar la respuesta."
      },
      {
        "type": "multiple-choice",
        "question": "¿Cuál es correcta para 'ver', nosotros, imperfecto?",
        "options": [
          "veíamos",
          "vimos",
          "vemos",
          "veremos"
        ],
        "correctIndex": 0,
        "explanation": "Repasa la regla de esta sección para confirmar la respuesta."
      },
      {
        "type": "translate",
        "direction": "es-en",
        "prompt": "Traduce la oración al inglés.",
        "source": "Cuando vivíamos en México, comíamos tacos cada semana.",
        "answer": "When we lived in Mexico, we used to eat tacos every week.",
        "explanation": "Repasa la regla de esta sección para confirmar la respuesta."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con la forma correcta.",
        "sentence": "Mis padres ___ (trabajar) en el mismo edificio.",
        "answer": "trabajaban",
        "hint": "imperfecto, ellos",
        "explanation": "Repasa la regla de esta sección para confirmar la respuesta."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras para formar una oración.",
        "words": [
          "niño",
          "de",
          "mucho",
          "leía"
        ],
        "explanation": "Imperfecto para describir un hábito de la infancia."
      },
      {
        "type": "multiple-choice",
        "question": "¿Cuál es correcta para 'ser', yo, imperfecto?",
        "options": [
          "fui",
          "era",
          "soy",
          "seré"
        ],
        "correctIndex": 1,
        "explanation": "Repasa la regla de esta sección para confirmar la respuesta."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con la forma correcta.",
        "sentence": "___ (ser) las ocho cuando empezó la película.",
        "answer": "Eran",
        "hint": "la hora en el pasado",
        "explanation": "Repasa la regla de esta sección para confirmar la respuesta."
      }
    ]
  },
  {
    "slug": "imperfect-drill-2",
    "level": "A2",
    "number": 36,
    "title": "El Imperfecto: Práctica Extra, Part 2 of 3",
    "summary": "Practica la conjugación y el uso del imperfecto para describir el pasado, hábitos y descripciones.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Los tres verbos irregulares: ser, ir, ver",
        "body": [
          "Solo tres verbos son irregulares en imperfecto: ser (era), ir (iba) y ver (veía)."
        ],
        "examples": [
          {
            "es": "Cuando era joven, iba a la escuela caminando.",
            "en": "When I was young, I used to walk to school."
          },
          {
            "es": "Veíamos esa serie todos los viernes.",
            "en": "We used to watch that show every Friday."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa la oración con la forma correcta.",
            "sentence": "Mi hermano ___ (ser) muy tímido de niño.",
            "answer": "era",
            "hint": "imperfecto irregular de ser",
            "explanation": "Repasa la regla de esta sección para confirmar la respuesta."
          },
          {
            "type": "multiple-choice",
            "question": "¿Cuál es correcta para 'ir', ellos, imperfecto?",
            "options": [
              "iban",
              "fueron",
              "van",
              "irán"
            ],
            "correctIndex": 0,
            "explanation": "Repasa la regla de esta sección para confirmar la respuesta."
          }
        ]
      },
      {
        "heading": "Descripciones en el pasado",
        "body": [
          "Usamos el imperfecto para describir personas, lugares y estados en el pasado."
        ],
        "examples": [
          {
            "es": "La casa era grande y tenía un jardín bonito.",
            "en": "The house was big and had a nice garden."
          },
          {
            "es": "Hacía mucho frío esa noche.",
            "en": "It was very cold that night."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa la oración con la forma correcta.",
            "sentence": "El cielo ___ (estar) muy nublado esa tarde.",
            "answer": "estaba",
            "hint": "descripción del pasado",
            "explanation": "Repasa la regla de esta sección para confirmar la respuesta."
          }
        ]
      },
      {
        "heading": "Acciones habituales o repetidas",
        "body": [
          "Usamos el imperfecto para hablar de acciones que se repetían habitualmente en el pasado."
        ],
        "examples": [
          {
            "es": "Todos los veranos íbamos a la playa.",
            "en": "Every summer we used to go to the beach."
          },
          {
            "es": "Siempre desayunaba café con pan.",
            "en": "I always used to have coffee with bread for breakfast."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Cuál oración describe un hábito del pasado?",
            "options": [
              "Ayer comí pizza.",
              "De niña, comía pizza todos los viernes.",
              "Voy a comer pizza mañana.",
              "Comí pizza una vez."
            ],
            "correctIndex": 1,
            "explanation": "Repasa la regla de esta sección para confirmar la respuesta."
          },
          {
            "type": "fill-blank",
            "prompt": "Completa la oración con la forma correcta.",
            "sentence": "Nosotros ___ (visitar) a los abuelos cada mes.",
            "answer": "visitábamos",
            "hint": "hábito repetido",
            "explanation": "Repasa la regla de esta sección para confirmar la respuesta."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Traduce la oración al español.",
        "source": "She was very happy when she was young.",
        "answer": "Ella era muy feliz cuando era joven.",
        "explanation": "Repasa la regla de esta sección para confirmar la respuesta."
      },
      {
        "type": "multiple-choice",
        "question": "¿Cuál oración describe algo en progreso en el pasado?",
        "options": [
          "Comí una manzana.",
          "Estaba comiendo una manzana cuando llamaste.",
          "Como una manzana.",
          "Comeré una manzana."
        ],
        "correctIndex": 1,
        "explanation": "Repasa la regla de esta sección para confirmar la respuesta."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con la forma correcta.",
        "sentence": "Cada verano, nosotros ___ (ir) a la casa de la playa.",
        "answer": "íbamos",
        "hint": "hábito repetido",
        "explanation": "Repasa la regla de esta sección para confirmar la respuesta."
      },
      {
        "type": "matching",
        "instructions": "Relaciona cada elemento con su pareja correcta.",
        "pairs": [
          {
            "left": "era",
            "right": "I was / he was"
          },
          {
            "left": "iba",
            "right": "I used to go"
          },
          {
            "left": "veía",
            "right": "I used to see"
          },
          {
            "left": "tenía",
            "right": "I used to have"
          },
          {
            "left": "hacía",
            "right": "I used to do / make"
          },
          {
            "left": "quería",
            "right": "I used to want / love"
          }
        ],
        "explanation": "Repasa la regla de esta sección para confirmar la respuesta."
      },
      {
        "type": "multiple-choice",
        "question": "¿Cuál oración usa correctamente el imperfecto?",
        "options": [
          "Ayer estudié toda la noche.",
          "Cuando era estudiante, estudiaba toda la noche.",
          "Mañana estudiaré toda la noche.",
          "He estudiado toda la noche."
        ],
        "correctIndex": 1,
        "explanation": "Repasa la regla de esta sección para confirmar la respuesta."
      }
    ]
  },
  {
    "slug": "imperfect-drill-3",
    "level": "A2",
    "number": 37,
    "title": "El Imperfecto: Práctica Extra, Part 3 of 3",
    "summary": "Practica la conjugación y el uso del imperfecto para describir el pasado, hábitos y descripciones.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "La edad y la hora en el pasado",
        "body": [
          "Para decir la edad o la hora en el pasado, siempre se usa el imperfecto."
        ],
        "examples": [
          {
            "es": "Tenía diez años cuando aprendí a nadar.",
            "en": "I was ten years old when I learned to swim."
          },
          {
            "es": "Eran las tres de la tarde cuando llegamos.",
            "en": "It was three in the afternoon when we arrived."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa la oración con la forma correcta.",
            "sentence": "___ (ser) las nueve de la noche cuando llamó.",
            "answer": "Eran",
            "hint": "la hora en el pasado",
            "explanation": "Repasa la regla de esta sección para confirmar la respuesta."
          },
          {
            "type": "multiple-choice",
            "question": "¿Qué tiempo se usa para la edad en el pasado?",
            "options": [
              "pretérito",
              "imperfecto",
              "presente",
              "futuro"
            ],
            "correctIndex": 1,
            "explanation": "Repasa la regla de esta sección para confirmar la respuesta."
          }
        ]
      },
      {
        "heading": "Acciones en progreso: imperfecto continuo",
        "body": [
          "Usamos estaba + gerundio para describir una acción que estaba en progreso en un momento del pasado."
        ],
        "examples": [
          {
            "es": "Estaba durmiendo cuando sonó el teléfono.",
            "en": "I was sleeping when the phone rang."
          },
          {
            "es": "Estábamos cenando cuando llegaron.",
            "en": "We were having dinner when they arrived."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa la oración con la forma correcta.",
            "sentence": "Yo ___ (estar) leyendo cuando se fue la luz.",
            "answer": "estaba",
            "hint": "imperfecto continuo",
            "explanation": "Repasa la regla de esta sección para confirmar la respuesta."
          }
        ]
      },
      {
        "heading": "Contraste con el presente y el pretérito",
        "body": [
          "Compara siempre las terminaciones del imperfecto con las del presente y el pretérito para no confundirlas."
        ],
        "examples": [
          {
            "es": "Ahora vivo en Lima, pero antes vivía en Cusco.",
            "en": "Now I live in Lima, but before I lived in Cusco."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Cuál oración está en imperfecto?",
            "options": [
              "Comí a las dos.",
              "Como a las dos.",
              "Comía a las dos todos los días.",
              "Voy a comer a las dos."
            ],
            "correctIndex": 2,
            "explanation": "Repasa la regla de esta sección para confirmar la respuesta."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con la forma correcta.",
        "sentence": "Ella ___ (tener) quince años cuando se mudó.",
        "answer": "tenía",
        "hint": "la edad en el pasado",
        "explanation": "Repasa la regla de esta sección para confirmar la respuesta."
      },
      {
        "type": "translate",
        "direction": "es-en",
        "prompt": "Traduce la oración al inglés.",
        "source": "Siempre llovía en abril en esa ciudad.",
        "answer": "It always used to rain in April in that city.",
        "explanation": "Repasa la regla de esta sección para confirmar la respuesta."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras para formar una oración.",
        "words": [
          "dormíamos",
          "cuando",
          "llegaron",
          "nosotros"
        ],
        "explanation": "Imperfecto continuo en contexto con pretérito."
      },
      {
        "type": "multiple-choice",
        "question": "¿Cuál es correcta para 'querer', tú, imperfecto?",
        "options": [
          "querías",
          "quisiste",
          "quieres",
          "querrás"
        ],
        "correctIndex": 0,
        "explanation": "Repasa la regla de esta sección para confirmar la respuesta."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con la forma correcta.",
        "sentence": "El restaurante ___ (estar) lleno de gente.",
        "answer": "estaba",
        "hint": "descripción en el pasado",
        "explanation": "Repasa la regla de esta sección para confirmar la respuesta."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Traduce la oración al español.",
        "source": "We used to visit our grandparents every Sunday.",
        "answer": "Visitábamos a nuestros abuelos cada domingo.",
        "explanation": "Repasa la regla de esta sección para confirmar la respuesta."
      }
    ]
  },
  {
    "slug": "preterite-vs-imperfect-drill-1",
    "level": "A2",
    "number": 38,
    "title": "Pretérito vs. Imperfecto: Práctica Extra, Part 1 of 3",
    "summary": "Práctica adicional para reforzar la elección entre el pretérito y el imperfecto en contextos narrativos y descriptivos variados.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Acción completada vs. estado de fondo",
        "body": [
          "El pretérito narra el evento puntual que ocurrió una vez; el imperfecto describe la situación que servía de fondo."
        ],
        "examples": [
          {
            "es": "Cuando yo era niño, vivíamos en una casa pequeña.",
            "en": "When I was a child, we lived in a small house."
          },
          {
            "es": "Ayer compré un boleto de tren.",
            "en": "Yesterday I bought a train ticket."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Qué opción describe correctamente una acción completada en el pasado?",
            "options": [
              "Llovía toda la tarde.",
              "Llegamos a las ocho.",
              "Hacía mucho frío.",
              "Ella tenía veinte años."
            ],
            "correctIndex": 1,
            "explanation": "«Llegamos» es pretérito: marca un evento completado en un momento específico."
          }
        ]
      },
      {
        "heading": "La acción interrumpida",
        "body": [
          "Usa el imperfecto para la acción en curso y el pretérito para la acción que la interrumpe."
        ],
        "examples": [
          {
            "es": "Dormía cuando sonó el teléfono.",
            "en": "I was sleeping when the phone rang."
          },
          {
            "es": "Caminaba por el parque cuando empezó a llover.",
            "en": "I was walking through the park when it started to rain."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa la oración con la forma correcta.",
            "sentence": "Yo ___ (leer) el periódico cuando alguien tocó la puerta.",
            "answer": "leía",
            "hint": "acción en curso, interrumpida",
            "explanation": "La acción en curso va en imperfecto (leía); la que interrumpe va en pretérito (tocó)."
          },
          {
            "type": "multiple-choice",
            "question": "¿Qué oración usa correctamente el pretérito para interrumpir una acción en curso?",
            "options": [
              "Veía la tele cuando llamaste.",
              "Veía la tele cuando llamabas.",
              "Vi la tele cuando llamaste.",
              "Veo la tele cuando llamaste."
            ],
            "correctIndex": 0,
            "explanation": "La acción de fondo (veía) va en imperfecto; la interrupción (llamaste) va en pretérito."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "Elige la oración que describe una acción completada en un momento específico del pasado.",
        "options": [
          "Hacía calor todo el día.",
          "Compré un regalo para mi hermana.",
          "Yo tenía muchos amigos.",
          "Vivíamos cerca del mar."
        ],
        "correctIndex": 1,
        "explanation": "«Compré» es pretérito: señala una acción completada en un momento concreto."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con la forma correcta.",
        "sentence": "Nosotros ___ (cenar) cuando se fue la luz.",
        "answer": "cenábamos",
        "hint": "acción en curso",
        "explanation": "La acción interrumpida (cenar) va en imperfecto: cenábamos."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con la forma correcta.",
        "sentence": "Yo hablaba por teléfono cuando de repente ___ (cortarse) la línea.",
        "answer": "se cortó",
        "hint": "acción que interrumpe",
        "explanation": "La acción que interrumpe (cortarse) va en pretérito: se cortó."
      },
      {
        "type": "translate",
        "direction": "es-en",
        "prompt": "Traduce la oración al inglés.",
        "source": "Cuando era joven, jugaba al fútbol todos los sábados.",
        "answer": "When I was young, I used to play soccer every Saturday.",
        "explanation": "El imperfecto «jugaba» expresa un hábito repetido en el pasado, traducido con «used to» o «would»."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Traduce la oración al español.",
        "source": "Last night we watched a movie and then went to sleep.",
        "answer": "Anoche vimos una película y luego nos dormimos.",
        "explanation": "Las dos acciones son puntuales y ocurrieron una vez, así que ambas van en pretérito."
      },
      {
        "type": "multiple-choice",
        "question": "¿Qué oración describe correctamente el clima como telón de fondo?",
        "options": [
          "Hizo sol por cinco minutos.",
          "Hacía sol y mucho calor.",
          "Hizo sol de repente.",
          "Ha hecho sol toda la semana."
        ],
        "correctIndex": 1,
        "explanation": "Para describir el clima como telón de fondo se usa el imperfecto: hacía sol."
      }
    ]
  },
  {
    "slug": "preterite-vs-imperfect-drill-2",
    "level": "A2",
    "number": 39,
    "title": "Pretérito vs. Imperfecto: Práctica Extra, Part 2 of 3",
    "summary": "Práctica adicional para reforzar la elección entre el pretérito y el imperfecto en contextos narrativos y descriptivos variados.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Acciones habituales vs. acciones puntuales",
        "body": [
          "El imperfecto expresa lo que pasaba con frecuencia; el pretérito expresa lo que pasó una sola vez."
        ],
        "examples": [
          {
            "es": "Todos los veranos visitábamos a mis abuelos.",
            "en": "Every summer we used to visit my grandparents."
          },
          {
            "es": "El verano pasado visitamos Cancún.",
            "en": "Last summer we visited Cancún."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Cuál oración expresa un hábito del pasado?",
            "options": [
              "Comíamos pizza los viernes.",
              "Comimos pizza el viernes pasado.",
              "Comí pizza ayer.",
              "Comieron pizza una vez."
            ],
            "correctIndex": 0,
            "explanation": "El imperfecto «comíamos» indica una rutina repetida; las otras describen eventos puntuales."
          }
        ]
      },
      {
        "heading": "Descripciones en el pasado: personas, lugares y clima",
        "body": [
          "Para describir cómo eran las personas, los lugares o el clima en el pasado, se usa el imperfecto."
        ],
        "examples": [
          {
            "es": "La casa era grande y tenía un jardín enorme.",
            "en": "The house was big and had a huge garden."
          },
          {
            "es": "Hacía sol y el cielo estaba despejado.",
            "en": "It was sunny and the sky was clear."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa la oración con la forma correcta.",
            "sentence": "El pueblo ___ (ser) pequeño y tranquilo.",
            "answer": "era",
            "explanation": "Las descripciones de lugares en el pasado usan el imperfecto: era, no fue."
          }
        ]
      },
      {
        "heading": "La edad y la hora en el pasado",
        "body": [
          "La edad y la hora en el pasado casi siempre se expresan con el imperfecto."
        ],
        "examples": [
          {
            "es": "Tenía diez años cuando aprendí a nadar.",
            "en": "I was ten years old when I learned to swim."
          },
          {
            "es": "Eran las nueve de la noche cuando llegamos.",
            "en": "It was nine at night when we arrived."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Cómo se dice correctamente la hora en el pasado?",
            "options": [
              "Fueron las tres.",
              "Eran las tres.",
              "Fue las tres.",
              "Es las tres."
            ],
            "correctIndex": 1,
            "explanation": "La hora en el pasado se expresa casi siempre con el imperfecto: eran las tres."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con la forma correcta.",
        "sentence": "Mi abuelo ___ (ser) alto y siempre llevaba sombrero.",
        "answer": "era",
        "explanation": "Las características físicas de una persona en el pasado se describen con el imperfecto."
      },
      {
        "type": "multiple-choice",
        "question": "¿Cuál es la forma correcta para decir la edad en el pasado?",
        "options": [
          "Tuve quince años.",
          "Tenía quince años.",
          "Tuvo quince años.",
          "Tengo quince años."
        ],
        "correctIndex": 1,
        "explanation": "La edad en el pasado casi siempre se expresa con el imperfecto: tenía quince años."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con la forma correcta.",
        "sentence": "___ (Ser) las siete de la mañana cuando salimos de casa.",
        "answer": "Eran",
        "explanation": "La hora en el pasado se expresa con el imperfecto: eran las siete."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras para formar una oración.",
        "words": [
          "Entramos",
          "al",
          "cine,",
          "compramos",
          "palomitas",
          "y",
          "nos",
          "sentamos."
        ],
        "explanation": "Cada acción puntual de la secuencia va en pretérito porque hace avanzar la historia."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras para formar una oración.",
        "words": [
          "Después",
          "del",
          "trabajo,",
          "volvió",
          "a",
          "casa,",
          "preparó",
          "la",
          "cena",
          "y",
          "llamó",
          "a",
          "su",
          "madre."
        ],
        "explanation": "Las acciones que se suceden una tras otra en una narración van en pretérito."
      },
      {
        "type": "multiple-choice",
        "question": "¿Qué significa «supe» en la oración «Supe la noticia esta mañana»?",
        "options": [
          "La sabía desde hace tiempo.",
          "Me enteré de la noticia en ese momento.",
          "Sabía la noticia pero la olvidé.",
          "Iba a saber la noticia pronto."
        ],
        "correctIndex": 1,
        "explanation": "«Supe» en pretérito significa «me enteré», es decir, el momento en que se descubrió la información."
      }
    ]
  },
  {
    "slug": "preterite-vs-imperfect-drill-3",
    "level": "A2",
    "number": 40,
    "title": "Pretérito vs. Imperfecto: Práctica Extra, Part 3 of 3",
    "summary": "Práctica adicional para reforzar la elección entre el pretérito y el imperfecto en contextos narrativos y descriptivos variados.",
    "duration": "9 min",
    "sections": [
      {
        "heading": "Secuencias de acciones que avanzan la historia",
        "body": [
          "El pretérito encadena los sucesos que empujan la historia hacia adelante, uno después de otro."
        ],
        "examples": [
          {
            "es": "Me desperté, me duché y salí de casa.",
            "en": "I woke up, showered, and left the house."
          },
          {
            "es": "Llegó a la estación, compró el boleto y subió al tren.",
            "en": "He arrived at the station, bought the ticket, and got on the train."
          }
        ],
        "checkpoint": [
          {
            "type": "word-order",
            "prompt": "Ordena las palabras para formar una oración.",
            "words": [
              "Ella",
              "cerró",
              "la",
              "puerta",
              "y",
              "caminó",
              "hacia",
              "la",
              "estación."
            ],
            "explanation": "Las acciones puntuales que forman la secuencia van en pretérito: cerró, caminó."
          }
        ]
      },
      {
        "heading": "Verbos que cambian de significado: saber, conocer, querer, poder",
        "body": [
          "Estos verbos cambian de sentido según el tiempo: el pretérito marca un cambio o un resultado, y el imperfecto describe un estado mental."
        ],
        "examples": [
          {
            "es": "Supe la verdad ayer.",
            "en": "I found out the truth yesterday."
          },
          {
            "es": "Conocí a mi esposa en la universidad.",
            "en": "I met my wife in college."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Qué significa «conocí» en esta oración: «Conocí a Marta en la fiesta»?",
            "options": [
              "La conocía desde hacía años.",
              "La vi por primera vez.",
              "Sabía todo sobre ella.",
              "Quería conocerla pero no pude."
            ],
            "correctIndex": 1,
            "explanation": "«Conocí» en pretérito significa que la vio por primera vez, es decir, el momento del encuentro."
          },
          {
            "type": "fill-blank",
            "prompt": "Completa la oración con la forma correcta.",
            "sentence": "Ana no ___ (querer) ir a la fiesta, pero al final fue.",
            "answer": "quería",
            "explanation": "«No quería» en imperfecto describe el estado de ánimo antes del resultado."
          }
        ]
      },
      {
        "heading": "Práctica mixta: narrar historias cortas",
        "body": [
          "En una narración típica, el imperfecto pinta el fondo de la escena y el pretérito cuenta lo que pasó."
        ],
        "examples": [
          {
            "es": "Era una noche fría. Yo caminaba solo por la calle cuando vi una luz extraña.",
            "en": "It was a cold night. I was walking alone down the street when I saw a strange light."
          },
          {
            "es": "De repente, un perro salió corriendo y me asusté.",
            "en": "Suddenly, a dog ran out and I got scared."
          }
        ],
        "checkpoint": [
          {
            "type": "multi-select",
            "question": "En «Era una noche fría. Yo caminaba solo cuando vi una luz extraña», ¿qué verbos están en imperfecto? (Elige todas las correctas)",
            "options": [
              "Era",
              "caminaba",
              "vi",
              "asusté"
            ],
            "correctIndexes": [
              0,
              1
            ],
            "explanation": "«Era» y «caminaba» describen el fondo de la escena; «vi» es la acción puntual en pretérito."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con la forma correcta.",
        "sentence": "Yo no ___ (conocer) a nadie en la fiesta al principio, pero luego hice amigos.",
        "answer": "conocía",
        "explanation": "«Conocía» en imperfecto describe un estado: no tener relación previa con nadie."
      },
      {
        "type": "translate",
        "direction": "es-en",
        "prompt": "Traduce la oración al inglés.",
        "source": "Pude terminar el examen a tiempo.",
        "answer": "I managed to finish the exam on time.",
        "explanation": "«Pude» en pretérito indica que la acción se logró: «managed to», no solo «era capaz de»."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Traduce la oración al español.",
        "source": "I didn't want to go, but I went anyway.",
        "answer": "No quería ir, pero fui de todos modos.",
        "explanation": "«No quería» (imperfecto) describe el deseo; «fui» (pretérito) es la acción que sí ocurrió."
      },
      {
        "type": "matching",
        "instructions": "Relaciona cada elemento con su pareja correcta.",
        "pairs": [
          {
            "left": "Sabía la respuesta.",
            "right": "I knew the answer (ongoing knowledge)."
          },
          {
            "left": "Supe la respuesta.",
            "right": "I found out the answer (at that moment)."
          },
          {
            "left": "Conocía el restaurante.",
            "right": "I was familiar with the restaurant."
          },
          {
            "left": "Conocí el restaurante.",
            "right": "I visited the restaurant for the first time."
          }
        ],
        "explanation": "El significado de estos verbos cambia según el tiempo: el imperfecto describe un estado y el pretérito marca el momento en que algo cambió."
      },
      {
        "type": "multiple-choice",
        "question": "Completa la historia con el tiempo correcto: «Cuando ___ (llegar) al aeropuerto, ___ (llover) mucho.»",
        "options": [
          "llegué / llovía",
          "llegaba / llovió",
          "llegué / llovió",
          "llegaba / llovía"
        ],
        "correctIndex": 0,
        "explanation": "La acción puntual de llegar va en pretérito (llegué); la lluvia de fondo va en imperfecto (llovía)."
      }
    ]
  },
  {
    "slug": "object-pronouns-drill-1",
    "level": "A2",
    "number": 41,
    "title": "Pronombres de Objeto Directo e Indirecto: Práctica Extra, Part 1 of 3",
    "summary": "Practica extra para reforzar el uso y la colocación de los pronombres de objeto directo e indirecto ya estudiados.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "Pronombres de objeto directo: lo, la, los, las",
        "body": [
          "Los pronombres de objeto directo reemplazan el sustantivo que recibe la acción del verbo directamente, y deben concordar en género y número con él."
        ],
        "examples": [
          {
            "es": "Compro el regalo. → Lo compro.",
            "en": "I buy the gift. → I buy it."
          },
          {
            "es": "Veo a las chicas. → Las veo.",
            "en": "I see the girls. → I see them."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa la oración con la forma correcta.",
            "sentence": "¿El pastel? Mi madre ___ preparó para la fiesta.",
            "answer": "lo",
            "hint": "el pastel → masculino singular",
            "explanation": "El pastel es masculino singular, así que se reemplaza con \"lo\"."
          }
        ]
      },
      {
        "heading": "Pronombres de objeto indirecto: le, les",
        "body": [
          "Los pronombres de objeto indirecto indican a quién o para quién se hace la acción, y se usan mucho con verbos como dar, decir y escribir."
        ],
        "examples": [
          {
            "es": "Le doy un regalo a mi hermana.",
            "en": "I give a gift to my sister."
          },
          {
            "es": "Les escribo un correo a mis colegas.",
            "en": "I write an email to my colleagues."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Qué pronombre completa la oración? \"Mi abuela ___ cuenta historias a los niños.\"",
            "options": [
              "lo",
              "la",
              "les",
              "los"
            ],
            "correctIndex": 2,
            "explanation": "\"A los niños\" es un objeto indirecto plural, así que se usa \"les\"."
          }
        ]
      },
      {
        "heading": "Colocación antes del verbo conjugado",
        "body": [
          "Con un verbo conjugado, el pronombre de objeto va normalmente justo antes del verbo."
        ],
        "examples": [
          {
            "es": "Te llamo esta tarde.",
            "en": "I call you this afternoon."
          },
          {
            "es": "No lo entiendo.",
            "en": "I don't understand it."
          }
        ],
        "checkpoint": [
          {
            "type": "word-order",
            "prompt": "Ordena las palabras para formar una oración.",
            "words": [
              "No",
              "la",
              "conozco",
              "todavía"
            ],
            "explanation": "El pronombre de objeto directo \"la\" va justo antes del verbo conjugado \"conozco\"."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "¿Qué pronombre reemplaza \"las cartas\" en \"Escribo las cartas\"?",
        "options": [
          "lo",
          "la",
          "los",
          "las"
        ],
        "correctIndex": 3,
        "explanation": "\"Las cartas\" es femenino plural, así que se reemplaza con \"las\"."
      },
      {
        "type": "multiple-choice",
        "question": "Completa: \"¿El pastel? Mi tía ___ hizo.\"",
        "options": [
          "lo",
          "la",
          "le",
          "les"
        ],
        "correctIndex": 0,
        "explanation": "\"El pastel\" es masculino singular, así que el pronombre correcto es \"lo\"."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con la forma correcta.",
        "sentence": "Compro flores para mi novia. → ___ compro para mi novia.",
        "answer": "Las",
        "hint": "flores = femenino plural",
        "explanation": "\"Flores\" es femenino plural, así que se reemplaza con \"las\"."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con la forma correcta.",
        "sentence": "Mi jefe ___ manda un correo a los clientes todos los lunes.",
        "answer": "les",
        "hint": "a los clientes = objeto indirecto plural",
        "explanation": "\"A los clientes\" es un objeto indirecto plural, así que se usa \"les\"."
      },
      {
        "type": "translate",
        "direction": "es-en",
        "prompt": "Traduce la oración al inglés.",
        "source": "Se lo doy a mi hermano.",
        "answer": "I give it to my brother.",
        "explanation": "\"Le\" cambia a \"se\" antes de \"lo\": se lo doy."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Traduce la oración al español.",
        "source": "I write to her every week.",
        "answer": "Le escribo a ella cada semana.",
        "explanation": "El objeto indirecto \"le\" se aclara con \"a ella\"."
      }
    ]
  },
  {
    "slug": "object-pronouns-drill-2",
    "level": "A2",
    "number": 42,
    "title": "Pronombres de Objeto Directo e Indirecto: Práctica Extra, Part 2 of 3",
    "summary": "Practica extra para reforzar el uso y la colocación de los pronombres de objeto directo e indirecto ya estudiados.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "Colocación con infinitivos y gerundios",
        "body": [
          "Con un infinitivo o un gerundio, el pronombre puede ir antes del verbo conjugado o pegado al final del infinitivo o gerundio."
        ],
        "examples": [
          {
            "es": "Voy a llamarte. / Te voy a llamar.",
            "en": "I'm going to call you."
          },
          {
            "es": "Estoy escribiéndolo. / Lo estoy escribiendo.",
            "en": "I am writing it."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Cuáles son formas correctas para \"Quiero comprar el regalo\"?",
            "options": [
              "Quiero comprarlo. / Lo quiero comprar.",
              "Quiero lo comprar.",
              "Comprarlo quiero.",
              "Quiero comprar lo."
            ],
            "correctIndex": 0,
            "explanation": "Con un infinitivo, el pronombre puede ir antes del verbo conjugado o pegado al final: \"Lo quiero comprar\" o \"Quiero comprarlo\"."
          },
          {
            "type": "fill-blank",
            "prompt": "Completa la oración con la forma correcta.",
            "sentence": "Ana está terminando la tarea. → Ana está terminándo___.",
            "answer": "la",
            "hint": "objeto directo: la tarea (femenino)",
            "explanation": "Al pegar el pronombre al gerundio, el verbo necesita un acento escrito: terminándola."
          }
        ]
      },
      {
        "heading": "Colocación con mandatos afirmativos",
        "body": [
          "En los mandatos afirmativos, el pronombre siempre se pega al final del verbo y suele añadir un acento escrito."
        ],
        "examples": [
          {
            "es": "¡Cómpralo!",
            "en": "Buy it!"
          },
          {
            "es": "¡Escríbeles pronto!",
            "en": "Write to them soon!"
          }
        ],
        "checkpoint": [
          {
            "type": "translate",
            "direction": "en-es",
            "prompt": "Traduce la oración al español.",
            "source": "Call her! (a tu hermana)",
            "answer": "¡Llámala!",
            "explanation": "En los mandatos afirmativos, el pronombre se pega al final y el verbo lleva acento escrito: llámala."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Traduce la oración al español.",
        "source": "Call me tonight!",
        "answer": "¡Llámame esta noche!",
        "explanation": "En los mandatos afirmativos, el pronombre se pega al final del verbo: llámame."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras para formar una oración.",
        "words": [
          "Se",
          "la",
          "explico",
          "a",
          "mi",
          "abuela"
        ],
        "explanation": "\"Le\" cambia a \"se\" antes de \"la\", y el indirecto va antes del directo: se la explico."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras para formar una oración.",
        "words": [
          "Voy",
          "a",
          "dártelo",
          "mañana"
        ],
        "explanation": "Con un infinitivo, los dos pronombres pueden pegarse al final: dártelo."
      },
      {
        "type": "multiple-choice",
        "question": "¿Cuál es la traducción correcta de \"I'm sending it to them\" (el paquete)?",
        "options": [
          "Se lo mando.",
          "Le lo mando.",
          "Los mando.",
          "Se los mando."
        ],
        "correctIndex": 0,
        "explanation": "\"El paquete\" es masculino singular (lo) y \"les\" cambia a \"se\": se lo mando."
      },
      {
        "type": "multi-select",
        "question": "¿Cuáles oraciones usan correctamente los pronombres de objeto?",
        "options": [
          "Se lo doy.",
          "Le lo doy.",
          "Te la explico.",
          "La te explico."
        ],
        "correctIndexes": [
          0,
          2
        ],
        "explanation": "El pronombre indirecto siempre va antes del directo, y \"le\" cambia a \"se\" ante \"lo/la/los/las\"."
      },
      {
        "type": "matching",
        "instructions": "Relaciona cada elemento con su pareja correcta.",
        "pairs": [
          {
            "left": "Lo veo todos los días.",
            "right": "I see him/it every day."
          },
          {
            "left": "Le hablo por teléfono.",
            "right": "I talk to him/her on the phone."
          },
          {
            "left": "Se los doy mañana.",
            "right": "I give them to them tomorrow."
          }
        ],
        "explanation": "Cada oración combina un tipo distinto de pronombre de objeto según el contexto."
      }
    ]
  },
  {
    "slug": "object-pronouns-drill-3",
    "level": "A2",
    "number": 43,
    "title": "Pronombres de Objeto Directo e Indirecto: Práctica Extra, Part 3 of 3",
    "summary": "Practica extra para reforzar el uso y la colocación de los pronombres de objeto directo e indirecto ya estudiados.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Dos pronombres juntos: indirecto + directo",
        "body": [
          "Cuando un verbo lleva pronombre de objeto indirecto y directo a la vez, el indirecto va primero y el directo después."
        ],
        "examples": [
          {
            "es": "Me lo da.",
            "en": "He gives it to me."
          },
          {
            "es": "Te la explico.",
            "en": "I explain it to you."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa la oración con la forma correcta.",
            "sentence": "¿Mis llaves? ___ presto ahora mismo.",
            "answer": "Te las",
            "hint": "objeto indirecto (te) + objeto directo (las llaves)",
            "explanation": "El pronombre indirecto va antes del directo: te las presto."
          }
        ]
      },
      {
        "heading": "El cambio de le/les a se",
        "body": [
          "Cuando le o les se combina con lo, la, los o las, el pronombre indirecto cambia a se para evitar dos sonidos de \"l\" seguidos."
        ],
        "examples": [
          {
            "es": "Le doy el libro. → Se lo doy.",
            "en": "I give him/her the book. → I give it to him/her."
          },
          {
            "es": "Les mando la carta. → Se la mando.",
            "en": "I send them the letter. → I send it to them."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "Transforma: \"Le doy el consejo a mi amigo.\" ¿Cuál es la forma correcta con los dos pronombres?",
            "options": [
              "Le lo doy.",
              "Se lo doy.",
              "Lo le doy.",
              "Se la doy."
            ],
            "correctIndex": 1,
            "explanation": "\"Le\" cambia a \"se\" antes de \"lo\": se lo doy."
          }
        ]
      },
      {
        "heading": "Aclarar el objeto indirecto con \"a + persona\"",
        "body": [
          "Como le y les pueden referirse a varias personas, a menudo se aclara el objeto indirecto con \"a él\", \"a ella\", \"a usted\" o el nombre de la persona."
        ],
        "examples": [
          {
            "es": "Le doy el regalo a ella, no a él.",
            "en": "I give the gift to her, not to him."
          },
          {
            "es": "Les escribo a ustedes cada semana.",
            "en": "I write to you all every week."
          }
        ],
        "checkpoint": [
          {
            "type": "matching",
            "instructions": "Relaciona cada elemento con su pareja correcta.",
            "pairs": [
              {
                "left": "Le escribo a él, no a ella.",
                "right": "I write to him, not to her."
              },
              {
                "left": "Les doy las gracias a ustedes.",
                "right": "I thank you all."
              },
              {
                "left": "Le regalo flores a mi mamá.",
                "right": "I give flowers to my mom."
              }
            ],
            "explanation": "La frase \"a + persona\" aclara o enfatiza a quién se refiere le o les."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con la forma correcta.",
        "sentence": "¡Ábre___ ahora! (la puerta)",
        "answer": "la",
        "hint": "mandato afirmativo + objeto directo femenino",
        "explanation": "En los mandatos afirmativos, el pronombre se pega al final del verbo: ábrela."
      },
      {
        "type": "multiple-choice",
        "question": "¿A quién se puede referir \"le\" en \"Le doy el libro\" sin más contexto?",
        "options": [
          "Solo a él",
          "Solo a ella",
          "A él, a ella o a usted",
          "Solo a ellos"
        ],
        "correctIndex": 2,
        "explanation": "\"Le\" es ambiguo, por eso a menudo se aclara con \"a él\", \"a ella\" o \"a usted\"."
      },
      {
        "type": "translate",
        "direction": "es-en",
        "prompt": "Traduce la oración al inglés.",
        "source": "¿Le compraste el regalo a tu papá?",
        "answer": "Did you buy the gift for your dad?",
        "explanation": "\"A tu papá\" aclara a quién se refiere el pronombre indirecto \"le\"."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con la forma correcta.",
        "sentence": "Necesito hablar con Marta. Voy a llamar___ hoy.",
        "answer": "la",
        "hint": "a Marta = objeto directo femenino",
        "explanation": "Con un infinitivo, el pronombre puede pegarse al final: llamarla."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras para formar una oración.",
        "words": [
          "Se",
          "los",
          "regalé",
          "a",
          "mis",
          "primos"
        ],
        "explanation": "\"Les\" cambia a \"se\" ante \"los\", y el indirecto va antes del directo: se los regalé."
      }
    ]
  },
  {
    "slug": "reflexive-verbs-drill-1",
    "level": "A2",
    "number": 44,
    "title": "Verbos Reflexivos y Rutina Diaria: Práctica Extra, Part 1 of 3",
    "summary": "Esta lección ofrece práctica adicional con los verbos reflexivos y el vocabulario de la rutina diaria ya estudiados.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Los pronombres reflexivos con verbos en -arse",
        "body": [
          "Recuerda que cada persona usa su propio pronombre reflexivo: me, te, se, nos, os, se."
        ],
        "examples": [
          {
            "es": "Yo me levanto a las siete.",
            "en": "I get up at seven."
          },
          {
            "es": "Tú te duchas por la mañana.",
            "en": "You shower in the morning."
          },
          {
            "es": "Nosotros nos levantamos temprano.",
            "en": "We get up early."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa la oración con la forma correcta.",
            "sentence": "Ella ___ ducha antes de desayunar.",
            "answer": "se",
            "hint": "pronombre reflexivo para 'ella'",
            "explanation": "Con la tercera persona singular se usa el pronombre 'se'."
          },
          {
            "type": "multiple-choice",
            "question": "¿Qué pronombre corresponde a 'nosotros'?",
            "options": [
              "me",
              "te",
              "nos",
              "se"
            ],
            "correctIndex": 2,
            "explanation": "'Nos' corresponde a la primera persona del plural."
          }
        ]
      },
      {
        "heading": "La posición del pronombre con verbos conjugados",
        "body": [
          "Recuerda que el pronombre reflexivo va justo antes del verbo conjugado."
        ],
        "examples": [
          {
            "es": "Me lavo las manos.",
            "en": "I wash my hands."
          },
          {
            "es": "¿Te acuestas tarde?",
            "en": "Do you go to bed late?"
          }
        ],
        "checkpoint": [
          {
            "type": "word-order",
            "prompt": "Ordena las palabras para formar una oración.",
            "words": [
              "Nosotros",
              "nos",
              "despertamos",
              "a",
              "las",
              "seis"
            ],
            "explanation": "El pronombre 'nos' precede al verbo conjugado 'despertamos'."
          }
        ]
      },
      {
        "heading": "El pronombre con infinitivos y gerundios",
        "body": [
          "Recuerda que con infinitivos y gerundios el pronombre puede ir antes del verbo conjugado o unido al final."
        ],
        "examples": [
          {
            "es": "Voy a levantarme temprano.",
            "en": "I'm going to get up early."
          },
          {
            "es": "Me voy a levantar temprano.",
            "en": "I'm going to get up early."
          },
          {
            "es": "Estoy duchándome ahora.",
            "en": "I am showering right now."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Cuál es correcta?",
            "options": [
              "Voy a me levantar temprano.",
              "Voy a levantarme temprano.",
              "Me voy levantar temprano.",
              "Voy levantarme a me temprano."
            ],
            "correctIndex": 1,
            "explanation": "El pronombre se une al final del infinitivo: levantarme."
          },
          {
            "type": "fill-blank",
            "prompt": "Completa la oración con la forma correcta.",
            "sentence": "Estoy vistiéndo___ para la fiesta.",
            "answer": "me",
            "hint": "pronombre unido al gerundio",
            "explanation": "Con el gerundio, el pronombre se puede unir al final: vistiéndome."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con la forma correcta.",
        "sentence": "Yo ___ levanto a las siete todos los días.",
        "answer": "me",
        "hint": "primera persona singular",
        "explanation": "Con 'yo' se usa el pronombre reflexivo 'me'."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con la forma correcta.",
        "sentence": "¿A qué hora ___ acuestas normalmente?",
        "answer": "te",
        "hint": "segunda persona singular",
        "explanation": "Con 'tú' se usa el pronombre reflexivo 'te'."
      },
      {
        "type": "multiple-choice",
        "question": "¿Cuál es el pronombre correcto para 'vosotros'?",
        "options": [
          "se",
          "os",
          "nos",
          "les"
        ],
        "correctIndex": 1,
        "explanation": "'Os' corresponde a la segunda persona del plural en España."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras para formar una oración.",
        "words": [
          "Ella",
          "se",
          "viste",
          "muy",
          "rápido"
        ],
        "explanation": "El pronombre 'se' va justo antes del verbo conjugado 'viste'."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras para formar una oración.",
        "words": [
          "Quiero",
          "ducharme",
          "antes",
          "de",
          "cenar"
        ],
        "explanation": "El pronombre se une al final del infinitivo 'ducharme'."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Traduce la oración al español.",
        "source": "We brush our teeth every morning.",
        "answer": "Nos cepillamos los dientes todas las mañanas.",
        "explanation": "Cepillarse en presente: nosotros nos cepillamos."
      }
    ]
  },
  {
    "slug": "reflexive-verbs-drill-2",
    "level": "A2",
    "number": 45,
    "title": "Verbos Reflexivos y Rutina Diaria: Práctica Extra, Part 2 of 3",
    "summary": "Esta lección ofrece práctica adicional con los verbos reflexivos y el vocabulario de la rutina diaria ya estudiados.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "Verbos comunes de la rutina en presente",
        "body": [
          "Recuerda los verbos de la rutina diaria: despertarse, vestirse, acostarse y cepillarse los dientes."
        ],
        "examples": [
          {
            "es": "Me despierto a las seis y media.",
            "en": "I wake up at six thirty."
          },
          {
            "es": "Los niños se visten solos.",
            "en": "The children get dressed by themselves."
          },
          {
            "es": "Nos cepillamos los dientes después de comer.",
            "en": "We brush our teeth after eating."
          }
        ],
        "checkpoint": [
          {
            "type": "translate",
            "direction": "en-es",
            "prompt": "Traduce la oración al español.",
            "source": "He goes to bed at eleven at night.",
            "answer": "Él se acuesta a las once de la noche.",
            "explanation": "Acostarse: él se acuesta."
          },
          {
            "type": "multi-select",
            "question": "¿Cuáles son verbos reflexivos de la rutina diaria?",
            "options": [
              "despertarse",
              "comer",
              "vestirse",
              "cepillarse los dientes"
            ],
            "correctIndexes": [
              0,
              2,
              3
            ],
            "explanation": "'Comer' no es un verbo reflexivo en este contexto."
          }
        ]
      },
      {
        "heading": "Los verbos reflexivos en pretérito",
        "body": [
          "Recuerda que en pretérito el pronombre reflexivo se mantiene delante del verbo conjugado."
        ],
        "examples": [
          {
            "es": "Ayer me levanté a las ocho.",
            "en": "Yesterday I got up at eight."
          },
          {
            "es": "Ella se duchó antes de salir.",
            "en": "She showered before leaving."
          },
          {
            "es": "Nos acostamos muy tarde anoche.",
            "en": "We went to bed very late last night."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa la oración con la forma correcta.",
            "sentence": "Anoche ellos ___ acostaron a medianoche.",
            "answer": "se",
            "hint": "pronombre reflexivo para 'ellos'",
            "explanation": "El pronombre 'se' se usa con la tercera persona plural."
          },
          {
            "type": "translate",
            "direction": "es-en",
            "prompt": "Traduce la oración al inglés.",
            "source": "Me desperté tarde esta mañana.",
            "answer": "I woke up late this morning.",
            "explanation": "Despertarse en pretérito: yo me desperté."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "translate",
        "direction": "es-en",
        "prompt": "Traduce la oración al inglés.",
        "source": "Los niños se acuestan a las nueve.",
        "answer": "The children go to bed at nine.",
        "explanation": "Acostarse: ellos se acuestan."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Traduce la oración al español.",
        "source": "She got up very early yesterday.",
        "answer": "Ella se levantó muy temprano ayer.",
        "explanation": "Levantarse en pretérito: ella se levantó."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con la forma correcta.",
        "sentence": "Nosotros ___ despertamos con el ruido del despertador.",
        "answer": "nos",
        "hint": "primera persona plural",
        "explanation": "Con 'nosotros' se usa el pronombre reflexivo 'nos'."
      },
      {
        "type": "multiple-choice",
        "question": "¿Cuál oración usa correctamente el pronombre con el gerundio?",
        "options": [
          "Está me duchando.",
          "Está duchándome.",
          "Está duchándose.",
          "Se está duchándo."
        ],
        "correctIndex": 2,
        "explanation": "Para 'él/ella', el pronombre unido al gerundio es 'duchándose'."
      },
      {
        "type": "multi-select",
        "question": "¿Cuáles oraciones están en pretérito?",
        "options": [
          "Me levanto temprano.",
          "Me levanté temprano.",
          "Ella se duchó rápido.",
          "Ella se ducha rápido."
        ],
        "correctIndexes": [
          1,
          2
        ],
        "explanation": "'Me levanté' y 'se duchó' son formas del pretérito."
      },
      {
        "type": "matching",
        "instructions": "Relaciona cada elemento con su pareja correcta.",
        "pairs": [
          {
            "left": "despertarse",
            "right": "to wake up"
          },
          {
            "left": "vestirse",
            "right": "to get dressed"
          },
          {
            "left": "acostarse",
            "right": "to go to bed"
          },
          {
            "left": "cepillarse los dientes",
            "right": "to brush one's teeth"
          }
        ],
        "explanation": "Estos son los verbos reflexivos más comunes de la rutina diaria."
      }
    ]
  },
  {
    "slug": "reflexive-verbs-drill-3",
    "level": "A2",
    "number": 46,
    "title": "Verbos Reflexivos y Rutina Diaria: Práctica Extra, Part 3 of 3",
    "summary": "Esta lección ofrece práctica adicional con los verbos reflexivos y el vocabulario de la rutina diaria ya estudiados.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "Verbos que cambian de significado con el pronombre reflexivo",
        "body": [
          "Recuerda que algunos verbos cambian de significado según lleven o no el pronombre reflexivo."
        ],
        "examples": [
          {
            "es": "Voy al mercado.",
            "en": "I'm going to the market."
          },
          {
            "es": "Me voy ahora mismo.",
            "en": "I'm leaving right now."
          },
          {
            "es": "Duermo ocho horas.",
            "en": "I sleep eight hours."
          },
          {
            "es": "Me duermo viendo la televisión.",
            "en": "I fall asleep watching television."
          }
        ],
        "checkpoint": [
          {
            "type": "matching",
            "instructions": "Relaciona cada elemento con su pareja correcta.",
            "pairs": [
              {
                "left": "ir",
                "right": "to go"
              },
              {
                "left": "irse",
                "right": "to leave"
              },
              {
                "left": "dormir",
                "right": "to sleep"
              },
              {
                "left": "dormirse",
                "right": "to fall asleep"
              }
            ],
            "explanation": "El pronombre reflexivo cambia el significado del verbo base."
          },
          {
            "type": "multiple-choice",
            "question": "¿Qué significa 'ponerse' en 'Me pongo el abrigo'?",
            "options": [
              "to put something somewhere",
              "to put on (clothing)",
              "to place an object",
              "to bet"
            ],
            "correctIndex": 1,
            "explanation": "'Ponerse' con ropa significa 'to put on'."
          }
        ]
      },
      {
        "heading": "El uso recíproco de los pronombres reflexivos",
        "body": [
          "Recuerda que 'nos' y 'se' también expresan una acción mutua entre dos o más personas."
        ],
        "examples": [
          {
            "es": "Nos vemos todos los sábados.",
            "en": "We see each other every Saturday."
          },
          {
            "es": "Mis abuelos se escriben cartas.",
            "en": "My grandparents write letters to each other."
          },
          {
            "es": "Nos llamamos por teléfono cada semana.",
            "en": "We call each other on the phone every week."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa la oración con la forma correcta.",
            "sentence": "Los amigos ___ abrazan cuando se encuentran.",
            "answer": "se",
            "hint": "acción mutua entre ellos",
            "explanation": "'Se' indica una acción recíproca entre los amigos."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "matching",
        "instructions": "Relaciona cada elemento con su pareja correcta.",
        "pairs": [
          {
            "left": "ir",
            "right": "to go"
          },
          {
            "left": "irse",
            "right": "to leave"
          },
          {
            "left": "poner",
            "right": "to put"
          },
          {
            "left": "ponerse",
            "right": "to put on"
          }
        ],
        "explanation": "El pronombre reflexivo cambia el significado de estos verbos."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con la forma correcta.",
        "sentence": "Mis padres ___ escriben mensajes todos los días.",
        "answer": "se",
        "hint": "acción recíproca",
        "explanation": "'Se' indica que la acción es mutua entre los padres."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Traduce la oración al español.",
        "source": "We see each other every weekend.",
        "answer": "Nos vemos todos los fines de semana.",
        "explanation": "El uso recíproco de 'nos' expresa una acción mutua."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras para formar una oración.",
        "words": [
          "Voy",
          "a",
          "vestirme",
          "antes",
          "de",
          "salir"
        ],
        "explanation": "El pronombre 'me' se une al infinitivo 'vestirme'."
      },
      {
        "type": "multiple-choice",
        "question": "¿Qué oración expresa la misma idea que 'Voy a levantarme temprano'?",
        "options": [
          "Me voy a levantar temprano.",
          "Voy me a levantar temprano.",
          "Voy a me levantar temprano.",
          "Levantar me voy a temprano."
        ],
        "correctIndex": 0,
        "explanation": "El pronombre también puede colocarse antes del verbo conjugado 'voy'."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con la forma correcta.",
        "sentence": "Anoche nosotros ___ dormimos muy tarde viendo una película.",
        "answer": "nos",
        "hint": "pronombre reflexivo para 'nosotros'",
        "explanation": "Dormirse en pretérito: nosotros nos dormimos."
      }
    ]
  },
  {
    "slug": "comparisons-superlatives-drill-1",
    "level": "A2",
    "number": 47,
    "title": "Comparaciones y Superlativos: Práctica Extra, Part 1 of 3",
    "summary": "Práctica adicional de comparaciones y superlativos ya vistos: más/menos...que, tan...como, comparativos irregulares, y superlativos regulares y absolutos.",
    "duration": "6 min",
    "sections": [
      {
        "heading": "Comparaciones de superioridad: más...que",
        "body": [
          "Para comparar dos elementos donde uno destaca más en una cualidad, usa más + adjetivo/sustantivo + que."
        ],
        "examples": [
          {
            "es": "Bogotá es más grande que Cartagena.",
            "en": "Bogotá is bigger than Cartagena."
          },
          {
            "es": "Mi hermano es más alto que yo.",
            "en": "My brother is taller than me."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa la oración con la forma correcta.",
            "sentence": "Esta pizza es ___ deliciosa que la otra.",
            "answer": "más",
            "hint": "more...than",
            "explanation": "\"Más...que\" expresa que un elemento supera al otro en la cualidad mencionada."
          }
        ]
      },
      {
        "heading": "Comparaciones de inferioridad: menos...que",
        "body": [
          "Para comparar dos elementos donde uno tiene menos de una cualidad, usa menos + adjetivo/sustantivo + que."
        ],
        "examples": [
          {
            "es": "Esta ciudad es menos ruidosa que la capital.",
            "en": "This city is less noisy than the capital."
          },
          {
            "es": "Tengo menos primos que tú.",
            "en": "I have fewer cousins than you."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Qué oración expresa una comparación de inferioridad?",
            "options": [
              "Ana es menos tímida que su hermana.",
              "Ana es tan tímida como su hermana.",
              "Ana es la más tímida de la familia.",
              "Ana es timidísima."
            ],
            "correctIndex": 0,
            "explanation": "\"Menos...que\" indica que Ana tiene menos de esa cualidad que su hermana."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con la forma correcta.",
        "sentence": "Este restaurante es ___ caro que aquel.",
        "answer": "más",
        "hint": "more...than",
        "explanation": "\"Más...que\" es la comparación de superioridad."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con la forma correcta.",
        "sentence": "Mi primo es ___ alto que su hermano.",
        "answer": "menos",
        "hint": "less...than",
        "explanation": "\"Menos...que\" es la comparación de inferioridad."
      },
      {
        "type": "multiple-choice",
        "question": "¿Cuál es la forma correcta? \"Este flan es ___ dulce como aquel.\"",
        "options": [
          "tan",
          "tanto",
          "más",
          "mejor"
        ],
        "correctIndex": 0,
        "explanation": "Con adjetivos se usa tan...como, no tanto...como."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con la forma correcta.",
        "sentence": "Tengo ___ hermanas como primos.",
        "answer": "tantas",
        "hint": "as many sisters as",
        "explanation": "\"Tantas\" concuerda en género y número con \"hermanas\" (femenino plural)."
      },
      {
        "type": "multiple-choice",
        "question": "¿Cuál es el comparativo irregular de \"malo\"?",
        "options": [
          "peor",
          "más malo",
          "menor",
          "mayor"
        ],
        "correctIndex": 0,
        "explanation": "\"Malo\" tiene la forma irregular \"peor\"; no se dice \"más malo\"."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con la forma correcta.",
        "sentence": "Mi abuelo es ___ que mi padre.",
        "answer": "mayor",
        "hint": "older, referring to age",
        "explanation": "Para la edad de las personas se usa \"mayor\", no \"más viejo\"."
      }
    ]
  },
  {
    "slug": "comparisons-superlatives-drill-2",
    "level": "A2",
    "number": 48,
    "title": "Comparaciones y Superlativos: Práctica Extra, Part 2 of 3",
    "summary": "Práctica adicional de comparaciones y superlativos ya vistos: más/menos...que, tan...como, comparativos irregulares, y superlativos regulares y absolutos.",
    "duration": "9 min",
    "sections": [
      {
        "heading": "Comparaciones de igualdad: tan...como y tanto/a/os/as...como",
        "body": [
          "Para comparar elementos iguales, usa tan + adjetivo/adverbio + como, o tanto/a/os/as + sustantivo + como."
        ],
        "examples": [
          {
            "es": "Mi abuela cocina tan bien como mi madre.",
            "en": "My grandmother cooks as well as my mother."
          },
          {
            "es": "Tengo tantas primas como primos.",
            "en": "I have as many female cousins as male cousins."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa la oración con la forma correcta.",
            "sentence": "Este mercado es ___ barato como el otro.",
            "answer": "tan",
            "hint": "as...as",
            "explanation": "\"Tan\" se usa con adjetivos y adverbios; \"como\" se mantiene fijo."
          },
          {
            "type": "fill-blank",
            "prompt": "Completa la oración con la forma correcta.",
            "sentence": "Ella tiene ___ dinero como su hermano.",
            "answer": "tanto",
            "hint": "as much money as",
            "explanation": "Con sustantivos se usa tanto/a/os/as, que concuerda en género y número; aquí concuerda con \"dinero\" (masculino singular)."
          }
        ]
      },
      {
        "heading": "Comparativos irregulares: mejor, peor, mayor, menor",
        "body": [
          "Los adjetivos bueno, malo, viejo y joven tienen formas comparativas irregulares: mejor, peor, mayor y menor."
        ],
        "examples": [
          {
            "es": "Este mercado es mejor que el otro para las verduras.",
            "en": "This market is better than the other one for vegetables."
          },
          {
            "es": "Mi hermano mayor vive en Sevilla.",
            "en": "My older brother lives in Seville."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa la oración con la forma correcta.",
            "sentence": "Mi hermana ___ tiene diez años.",
            "answer": "menor",
            "hint": "younger",
            "explanation": "\"Menor\" es la forma irregular de joven cuando se refiere a la edad de una persona."
          }
        ]
      },
      {
        "heading": "Superlativos regulares: el/la/los/las más...de",
        "body": [
          "El superlativo regular usa el/la/los/las + más/menos + adjetivo + de para señalar el extremo de un grupo."
        ],
        "examples": [
          {
            "es": "Es la ciudad más turística de España.",
            "en": "It's the most touristy city in Spain."
          },
          {
            "es": "Son los tacos más picantes del menú.",
            "en": "They are the spiciest tacos on the menu."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa la oración con la forma correcta.",
            "sentence": "Este es ___ plato más sabroso del restaurante.",
            "answer": "el",
            "explanation": "El artículo concuerda con \"plato\" (masculino singular): el plato."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con la forma correcta.",
        "sentence": "Estas son ___ tiendas más baratas de la ciudad.",
        "answer": "las",
        "explanation": "El artículo concuerda con \"tiendas\" (femenino plural): las tiendas."
      },
      {
        "type": "multiple-choice",
        "question": "¿Cuál oración es un superlativo correcto?",
        "options": [
          "Es el pastel más rico de la panadería.",
          "Es el pastel muy rico de la panadería.",
          "Es el pastel tan rico de la panadería.",
          "Es el pastel más rico que la panadería."
        ],
        "correctIndex": 0,
        "explanation": "El superlativo regular es el/la + más + adjetivo + de: el pastel más rico de la panadería."
      },
      {
        "type": "multiple-choice",
        "question": "¿Cuál es la forma correcta del superlativo absoluto de \"rico\"?",
        "options": [
          "riquísimo",
          "ricísimo",
          "más rico",
          "tan rico"
        ],
        "correctIndex": 0,
        "explanation": "Los adjetivos terminados en -co cambian c → qu antes de -ísimo para conservar el sonido: rico → riquísimo."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con la forma correcta.",
        "sentence": "La película fue ___.",
        "answer": "aburridísima",
        "hint": "extremely boring",
        "explanation": "\"Aburrido\" pierde la -o final y añade -ísima para concordar con \"película\" (femenino singular)."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras para formar una oración.",
        "words": [
          "Madrid",
          "es",
          "más",
          "grande",
          "que",
          "Toledo"
        ],
        "explanation": "Comparación de superioridad: más + adjetivo + que."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras para formar una oración.",
        "words": [
          "Esta",
          "sopa",
          "está",
          "tan",
          "rica",
          "como",
          "esa"
        ],
        "explanation": "Comparación de igualdad: tan + adjetivo + como."
      }
    ]
  },
  {
    "slug": "comparisons-superlatives-drill-3",
    "level": "A2",
    "number": 49,
    "title": "Comparaciones y Superlativos: Práctica Extra, Part 3 of 3",
    "summary": "Práctica adicional de comparaciones y superlativos ya vistos: más/menos...que, tan...como, comparativos irregulares, y superlativos regulares y absolutos.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "Superlativos absolutos: -ísimo/a",
        "body": [
          "El superlativo absoluto añade -ísimo/a/os/as al adjetivo, quitando la vocal final, para expresar \"muy + adjetivo\" sin comparar con nada."
        ],
        "examples": [
          {
            "es": "Esta sopa está riquísima.",
            "en": "This soup is extremely tasty."
          },
          {
            "es": "El examen fue facilísimo.",
            "en": "The exam was extremely easy."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Cómo se dice \"extremely good\" con el superlativo absoluto?",
            "options": [
              "buenísimo",
              "más bueno",
              "mejorísimo",
              "tan bueno"
            ],
            "correctIndex": 0,
            "explanation": "El superlativo absoluto de \"bueno\" es \"buenísimo\"; -ísimo no se combina con más ni con mejor."
          }
        ]
      },
      {
        "heading": "Práctica mixta: elige la estructura correcta",
        "body": [
          "Con estas estructuras ya puedes elegir la comparación correcta según el contexto: superioridad, inferioridad, igualdad, irregulares y los dos tipos de superlativo."
        ],
        "examples": [
          {
            "es": "En mi familia, mi tío es el más gracioso de todos.",
            "en": "In my family, my uncle is the funniest of all."
          },
          {
            "es": "Esta tienda tiene precios tan buenos como la otra.",
            "en": "This store has prices as good as the other one."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Qué estructura necesitas para decir \"my sister is the youngest of the family\"?",
            "options": [
              "superlativo regular con \"menor\"",
              "comparativo de igualdad",
              "comparativo de inferioridad",
              "superlativo absoluto"
            ],
            "correctIndex": 0,
            "explanation": "\"The youngest\" combina el superlativo (la más...de) con la forma irregular \"menor\": mi hermana es la menor de la familia."
          },
          {
            "type": "fill-blank",
            "prompt": "Completa la oración con la forma correcta.",
            "sentence": "Esta hamburguesa es ___ grande de todo el menú.",
            "answer": "la más",
            "hint": "the biggest",
            "explanation": "El superlativo regular usa el/la más + adjetivo + de para señalar el extremo del grupo."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Traduce la oración al español.",
        "source": "This jacket is cheaper than that one.",
        "answer": "Esta chaqueta es más barata que esa.",
        "explanation": "\"Cheaper than\" se traduce como más barata que, con concordancia femenina en \"chaqueta\"."
      },
      {
        "type": "translate",
        "direction": "es-en",
        "prompt": "Traduce la oración al inglés.",
        "source": "Mi hermana menor es más alta que yo.",
        "answer": "My younger sister is taller than me.",
        "explanation": "\"Menor\" es el comparativo irregular de joven, y \"más alta que\" es una comparación de superioridad regular."
      },
      {
        "type": "matching",
        "instructions": "Relaciona cada elemento con su pareja correcta.",
        "pairs": [
          {
            "left": "más...que",
            "right": "more...than"
          },
          {
            "left": "menos...que",
            "right": "less...than"
          },
          {
            "left": "tan...como",
            "right": "as...as (with an adjective)"
          },
          {
            "left": "tanto/a/os/as...como",
            "right": "as much/many...as"
          },
          {
            "left": "el/la más...de",
            "right": "the most...in/of"
          },
          {
            "left": "-ísimo/a",
            "right": "extremely..."
          }
        ],
        "explanation": "Estas seis estructuras cubren todos los tipos de comparación y superlativo del A2."
      },
      {
        "type": "multi-select",
        "question": "¿Qué palabras son comparativos irregulares? (Elige todas las correctas)",
        "options": [
          "mejor",
          "más caro",
          "peor",
          "mayor",
          "tan alto"
        ],
        "correctIndexes": [
          0,
          2,
          3
        ],
        "explanation": "\"Más caro\" y \"tan alto\" son formas regulares, no comparativos irregulares."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con la forma correcta.",
        "sentence": "De todos mis primos, Carlos es ___ inteligente.",
        "answer": "el más",
        "hint": "the most intelligent",
        "explanation": "Para señalar el extremo dentro de un grupo se usa el superlativo regular: el/la más + adjetivo."
      }
    ]
  },
  {
    "slug": "future-tense-drill-1",
    "level": "A2",
    "number": 50,
    "title": "El Futuro: Práctica Extra, Part 1 of 3",
    "summary": "Esta lección es práctica adicional para reforzar el futuro con ir a + infinitivo y el futuro simple, ya presentados en lecciones anteriores.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "Ir a + infinitivo: planes cercanos",
        "body": [
          "Para hablar de planes o decisiones ya tomadas para el futuro cercano, se usa el presente de ir + a + infinitivo."
        ],
        "examples": [
          {
            "es": "Voy a estudiar para el examen esta noche.",
            "en": "I'm going to study for the exam tonight."
          },
          {
            "es": "¿Vas a salir con tus amigos el sábado?",
            "en": "Are you going to go out with your friends on Saturday?"
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa la oración con la forma correcta.",
            "sentence": "Nosotros ___ a viajar a México en diciembre.",
            "answer": "vamos",
            "hint": "presente de 'ir', forma de nosotros",
            "explanation": "Con 'ir a + infinitivo', el verbo 'ir' se conjuga en presente: nosotros vamos."
          },
          {
            "type": "multiple-choice",
            "question": "¿Cuál oración expresa un plan cercano con 'ir a + infinitivo'?",
            "options": [
              "Ella va a cocinar la cena.",
              "Ella cocinará la cena.",
              "Ella cocinó la cena.",
              "Ella cocina la cena todos los días."
            ],
            "correctIndex": 0,
            "explanation": "'va a cocinar' usa ir a + infinitivo para un plan ya decidido; las otras opciones usan futuro simple, pretérito y presente habitual."
          }
        ]
      },
      {
        "heading": "Formación regular del futuro simple",
        "body": [
          "El futuro simple se forma añadiendo las terminaciones -é, -ás, -á, -emos, -éis, -án directamente al infinitivo, sin importar si el verbo es -ar, -er o -ir."
        ],
        "examples": [
          {
            "es": "Viajaré a Colombia el próximo año.",
            "en": "I will travel to Colombia next year."
          },
          {
            "es": "Ellos hablarán con el profesor mañana.",
            "en": "They will talk with the professor tomorrow."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa la oración con la forma correcta.",
            "sentence": "Yo ___ (comprar) un regalo para mi hermana.",
            "answer": "compraré",
            "explanation": "Futuro regular: infinitivo + -é → compraré."
          },
          {
            "type": "translate",
            "direction": "en-es",
            "prompt": "Traduce la oración al español.",
            "source": "We will travel next summer.",
            "answer": "Viajaremos el próximo verano.",
            "explanation": "Futuro regular, forma de nosotros: viajar + -emos."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "¿Cuál es la forma correcta del futuro para 'yo' con el verbo 'viajar'?",
        "options": [
          "viajaré",
          "viajaría",
          "viajo",
          "viajaba"
        ],
        "correctIndex": 0,
        "explanation": "El futuro simple de 'viajar' en primera persona singular es 'viajaré': infinitivo + -é."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con la forma correcta.",
        "sentence": "Esta noche, mis padres ___ a cenar en un restaurante italiano.",
        "answer": "van",
        "hint": "presente de 'ir', forma de ellos",
        "explanation": "'ir a + infinitivo' requiere el presente de 'ir'; con 'mis padres' (ellos) es 'van'."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con la forma correcta.",
        "sentence": "Con más práctica, ___ (poder) hablar español con fluidez.",
        "answer": "podré",
        "explanation": "'poder' pierde la 'e' en el futuro: podr- + é = podré."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con la forma correcta.",
        "sentence": "El próximo mes, nosotros ___ (tener) más tiempo libre.",
        "answer": "tendremos",
        "explanation": "'tener' añade una 'd': tendr- + emos = tendremos."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con la forma correcta.",
        "sentence": "¿___ (hacer) tú la tarea esta tarde?",
        "answer": "Harás",
        "explanation": "'hacer' tiene una raíz corta en el futuro: har- + ás = harás."
      },
      {
        "type": "multiple-choice",
        "question": "¿Cuál es la raíz correcta del futuro para 'saber'?",
        "options": [
          "sabr-",
          "saber-",
          "sabir-",
          "sabre-"
        ],
        "correctIndex": 0,
        "explanation": "'saber' pierde la 'e' antes de las terminaciones del futuro: sabr-."
      }
    ]
  },
  {
    "slug": "future-tense-drill-2",
    "level": "A2",
    "number": 51,
    "title": "El Futuro: Práctica Extra, Part 2 of 3",
    "summary": "Esta lección es práctica adicional para reforzar el futuro con ir a + infinitivo y el futuro simple, ya presentados en lecciones anteriores.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Raíces irregulares que pierden la vocal",
        "body": [
          "Algunos verbos pierden la vocal del infinitivo antes de añadir las terminaciones del futuro: poder → podr-, saber → sabr-, querer → querr-, haber → habr-."
        ],
        "examples": [
          {
            "es": "No podré ir a la fiesta.",
            "en": "I won't be able to go to the party."
          },
          {
            "es": "¿Sabrás la respuesta mañana?",
            "en": "Will you know the answer tomorrow?"
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Cuál es la raíz correcta del futuro para 'querer'?",
            "options": [
              "querr-",
              "querer-",
              "quer-",
              "queir-"
            ],
            "correctIndex": 0,
            "explanation": "'querer' pierde la 'e' antes de las terminaciones del futuro: querr-."
          },
          {
            "type": "fill-blank",
            "prompt": "Completa la oración con la forma correcta.",
            "sentence": "Ella no ___ (saber) la noticia hasta mañana.",
            "answer": "sabrá",
            "explanation": "'saber' → sabr- + á = sabrá."
          }
        ]
      },
      {
        "heading": "Raíces irregulares que añaden una d",
        "body": [
          "Otros verbos añaden una 'd' entre la raíz y las terminaciones del futuro: poner → pondr-, tener → tendr-, salir → saldr-, venir → vendr-."
        ],
        "examples": [
          {
            "es": "Pondré la mesa antes de la cena.",
            "en": "I will set the table before dinner."
          },
          {
            "es": "Tendremos una reunión el lunes.",
            "en": "We will have a meeting on Monday."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa la oración con la forma correcta.",
            "sentence": "Yo ___ (tener) que trabajar el sábado.",
            "answer": "tendré",
            "explanation": "'tener' → tendr- + é = tendré."
          },
          {
            "type": "multiple-choice",
            "question": "¿Cuál es la forma correcta del futuro para 'salir' con 'nosotros'?",
            "options": [
              "saldremos",
              "saliremos",
              "saldiremos",
              "salremos"
            ],
            "correctIndex": 0,
            "explanation": "'salir' → saldr- + emos = saldremos."
          }
        ]
      },
      {
        "heading": "Raíces irregulares acortadas",
        "body": [
          "Decir y hacer tienen raíces muy cortas e irregulares en el futuro: decir → dir-, hacer → har-."
        ],
        "examples": [
          {
            "es": "Te diré la verdad.",
            "en": "I will tell you the truth."
          },
          {
            "es": "¿Qué harás este verano?",
            "en": "What will you do this summer?"
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa la oración con la forma correcta.",
            "sentence": "¿Qué ___ (hacer) tú este fin de semana?",
            "answer": "harás",
            "explanation": "'hacer' tiene una raíz corta en el futuro: har- + ás = harás."
          },
          {
            "type": "translate",
            "direction": "es-en",
            "prompt": "Traduce la oración al inglés.",
            "source": "Te lo diré mañana.",
            "answer": "I will tell it to you tomorrow.",
            "explanation": "'decir' → dir- + é = diré."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Traduce la oración al español.",
        "source": "It will probably rain tomorrow.",
        "answer": "Probablemente lloverá mañana.",
        "explanation": "El futuro simple 'lloverá' expresa una predicción."
      },
      {
        "type": "translate",
        "direction": "es-en",
        "prompt": "Traduce la oración al inglés.",
        "source": "Vamos a visitar a mis abuelos el domingo.",
        "answer": "We are going to visit my grandparents on Sunday.",
        "explanation": "'vamos a visitar' es 'ir a + infinitivo' en primera persona plural."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Traduce la oración al español.",
        "source": "I will call you as soon as I arrive.",
        "answer": "Te llamaré en cuanto llegue.",
        "explanation": "'llamaré' es el futuro simple regular de 'llamar'."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras para formar una oración.",
        "words": [
          "nosotros",
          "estudiaremos",
          "para",
          "el",
          "examen"
        ],
        "explanation": "El sujeto va primero, seguido del verbo en futuro y el complemento."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras para formar una oración.",
        "words": [
          "ella",
          "va",
          "a",
          "comprar",
          "un",
          "coche"
        ],
        "explanation": "La estructura es sujeto + ir (presente) + a + infinitivo + complemento."
      },
      {
        "type": "multiple-choice",
        "question": "¿Qué expresa la oración '¿Dónde estará Juan?' en este contexto?",
        "options": [
          "Una suposición sobre dónde está Juan ahora",
          "Una orden para que Juan venga",
          "Un plan futuro confirmado",
          "Una acción terminada en el pasado"
        ],
        "correctIndex": 0,
        "explanation": "El futuro de probabilidad expresa una suposición sobre el presente."
      }
    ]
  },
  {
    "slug": "future-tense-drill-3",
    "level": "A2",
    "number": 52,
    "title": "El Futuro: Práctica Extra, Part 3 of 3",
    "summary": "Esta lección es práctica adicional para reforzar el futuro con ir a + infinitivo y el futuro simple, ya presentados en lecciones anteriores.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "El futuro para predicciones y probabilidad",
        "body": [
          "El futuro simple también sirve para hacer predicciones y expresar suposiciones sobre el presente o el futuro."
        ],
        "examples": [
          {
            "es": "Mañana lloverá en la costa.",
            "en": "Tomorrow it will rain on the coast."
          },
          {
            "es": "Serán las diez de la noche.",
            "en": "It must be about ten at night."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Qué expresa la oración '¿Dónde estará mi teléfono?'?",
            "options": [
              "Una suposición sobre el presente",
              "Una orden directa",
              "Un plan confirmado para mañana",
              "Una acción terminada en el pasado"
            ],
            "correctIndex": 0,
            "explanation": "El futuro de probabilidad expresa una suposición sobre algo presente: 'dónde estará' equivale a 'dónde crees que está'."
          },
          {
            "type": "fill-blank",
            "prompt": "Completa la oración con la forma correcta.",
            "sentence": "Según el pronóstico, ___ (nevar) este fin de semana.",
            "answer": "nevará",
            "explanation": "Predicción con futuro simple: nevar + -á = nevará."
          }
        ]
      },
      {
        "heading": "Práctica mixta: ir a + infinitivo o futuro simple",
        "body": [
          "En una conversación real se alterna entre ir a + infinitivo para planes inmediatos y el futuro simple para promesas, predicciones o eventos más lejanos."
        ],
        "examples": [
          {
            "es": "Voy a llamar al médico hoy.",
            "en": "I'm going to call the doctor today."
          },
          {
            "es": "Con esta dieta, te sentirás mejor pronto.",
            "en": "With this diet, you'll feel better soon."
          }
        ],
        "checkpoint": [
          {
            "type": "multi-select",
            "question": "¿Qué oraciones usan el futuro simple (no 'ir a')? (Elige todas las correctas)",
            "options": [
              "Iré al gimnasio mañana.",
              "Voy a limpiar la casa.",
              "Ellos llegarán tarde.",
              "Vamos a comer pizza."
            ],
            "correctIndexes": [
              0,
              2
            ],
            "explanation": "'Iré' y 'llegarán' son formas del futuro simple; las otras dos usan 'ir a + infinitivo'."
          },
          {
            "type": "word-order",
            "prompt": "Ordena las palabras para formar una oración.",
            "words": [
              "mañana",
              "estudiaré",
              "toda",
              "la",
              "tarde"
            ],
            "explanation": "El adverbio de tiempo puede ir al inicio de la oración: Mañana estudiaré toda la tarde."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multi-select",
        "question": "¿Qué verbos tienen una raíz irregular en el futuro? (Elige todas las correctas)",
        "options": [
          "tener",
          "hablar",
          "hacer",
          "comer",
          "salir"
        ],
        "correctIndexes": [
          0,
          2,
          4
        ],
        "explanation": "'tener', 'hacer' y 'salir' tienen raíces irregulares (tendr-, har-, saldr-); 'hablar' y 'comer' son regulares."
      },
      {
        "type": "matching",
        "instructions": "Relaciona cada elemento con su pareja correcta.",
        "pairs": [
          {
            "left": "Iré al cine el viernes.",
            "right": "I will go to the movies on Friday."
          },
          {
            "left": "Vamos a cenar tarde.",
            "right": "We are going to have dinner late."
          },
          {
            "left": "Ellos tendrán mucho trabajo.",
            "right": "They will have a lot of work."
          },
          {
            "left": "¿Qué harás mañana?",
            "right": "What will you do tomorrow?"
          }
        ],
        "explanation": "Cada oración en español combina con su traducción correcta al inglés."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con la forma correcta.",
        "sentence": "Mira esas nubes negras — ___ a llover pronto.",
        "answer": "va",
        "hint": "presente de 'ir', forma impersonal",
        "explanation": "Con el uso impersonal ('va a llover'), 'ir' se conjuga en tercera persona singular: va."
      },
      {
        "type": "multiple-choice",
        "question": "¿Cuál es la forma correcta de 'decir' en futuro para 'tú'?",
        "options": [
          "dirás",
          "decirás",
          "dijiste",
          "dirías"
        ],
        "correctIndex": 0,
        "explanation": "'decir' → dir- + ás = dirás."
      },
      {
        "type": "translate",
        "direction": "es-en",
        "prompt": "Traduce la oración al inglés.",
        "source": "Voy a llamar al médico, pero no sé si tendré tiempo mañana.",
        "answer": "I'm going to call the doctor, but I don't know if I'll have time tomorrow.",
        "explanation": "La oración combina 'ir a + infinitivo' para un plan inmediato con el futuro simple 'tendré' para una incertidumbre futura."
      }
    ]
  },
  {
    "slug": "por-vs-para-drill-1",
    "level": "A2",
    "number": 53,
    "title": "Por vs. Para: Práctica Extra, Part 1 of 3",
    "summary": "Practica el uso de “por” y “para” en contextos cotidianos con ejercicios de repaso, sin nueva teoría.",
    "duration": "9 min",
    "sections": [
      {
        "heading": "Por: duración de tiempo",
        "body": [
          "Usamos “por” para expresar cuánto tiempo dura una acción."
        ],
        "examples": [
          {
            "es": "Estudié español por dos años.",
            "en": "I studied Spanish for two years."
          },
          {
            "es": "Vamos a estar en la playa por una semana.",
            "en": "We're going to be at the beach for a week."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa la oración con la forma correcta.",
            "sentence": "Trabajé en esa oficina ___ cinco años.",
            "answer": "por",
            "hint": "duración de tiempo",
            "explanation": "“Por” se usa para indicar cuánto tiempo duró la acción."
          },
          {
            "type": "multiple-choice",
            "question": "¿Qué oración expresa correctamente la duración de una acción?",
            "options": [
              "Viajamos por tres semanas.",
              "Viajamos para tres semanas.",
              "Viajamos por a tres semanas.",
              "Viajamos para de tres semanas."
            ],
            "correctIndex": 0,
            "explanation": "Para hablar de cuánto tiempo dura algo, se usa “por”: por tres semanas."
          }
        ]
      },
      {
        "heading": "Por: causa o razón",
        "body": [
          "Usamos “por” para indicar la causa o el motivo de una acción, es decir, “a causa de”."
        ],
        "examples": [
          {
            "es": "No salimos por la lluvia.",
            "en": "We didn't go out because of the rain."
          },
          {
            "es": "Llegó tarde por el tráfico.",
            "en": "He arrived late because of the traffic."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa la oración con la forma correcta.",
            "sentence": "Cancelaron el partido ___ la tormenta.",
            "answer": "por",
            "hint": "causa",
            "explanation": "“Por” introduce la causa de algo: por la tormenta."
          }
        ]
      },
      {
        "heading": "Por: intercambio y precio",
        "body": [
          "Usamos “por” para hablar de un intercambio, especialmente cuando se trata de dinero o de cambiar una cosa por otra."
        ],
        "examples": [
          {
            "es": "Compré esta chaqueta por treinta dólares.",
            "en": "I bought this jacket for thirty dollars."
          },
          {
            "es": "Cambié mi entrada por una mejor.",
            "en": "I exchanged my ticket for a better one."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Cuál oración expresa un intercambio de dinero?",
            "options": [
              "Pagué diez euros por el libro.",
              "Pagué diez euros para el libro.",
              "Compré el libro para diez euros.",
              "El libro cuesta para diez euros."
            ],
            "correctIndex": 0,
            "explanation": "Cuando se paga una cantidad a cambio de algo, se usa “por”: pagué diez euros por el libro."
          },
          {
            "type": "fill-blank",
            "prompt": "Completa la oración con la forma correcta.",
            "sentence": "Te doy quince dólares ___ esa camisa.",
            "answer": "por",
            "hint": "intercambio de dinero",
            "explanation": "El dinero que se paga a cambio de algo se introduce con “por”."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con la forma correcta.",
        "sentence": "Viví en Chile ___ tres años.",
        "answer": "por",
        "hint": "duración",
        "explanation": "“Por” expresa cuánto tiempo duró la acción."
      },
      {
        "type": "multiple-choice",
        "question": "No fuimos al partido ___ la lluvia.",
        "options": [
          "por",
          "para"
        ],
        "correctIndex": 0,
        "explanation": "“Por” introduce la causa de algo: por la lluvia."
      },
      {
        "type": "translate",
        "direction": "es-en",
        "prompt": "Traduce la oración al inglés.",
        "source": "Compré el coche por ocho mil dólares.",
        "answer": "I bought the car for eight thousand dollars.",
        "explanation": "“Por” se usa aquí porque indica el precio pagado a cambio del coche."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con la forma correcta.",
        "sentence": "Necesito la tarea ___ el lunes.",
        "answer": "para",
        "hint": "fecha límite",
        "explanation": "“Para” marca el plazo o la fecha límite."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras para formar una oración.",
        "words": [
          "parque",
          "el",
          "por",
          "esta",
          "mañana",
          "Corrimos"
        ],
        "explanation": "“Por” describe el movimiento a través de un lugar."
      },
      {
        "type": "multiple-choice",
        "question": "Voy al gimnasio ___ mantenerme en forma.",
        "options": [
          "por",
          "para"
        ],
        "correctIndex": 1,
        "explanation": "“Para” + infinitivo expresa el propósito de una acción."
      }
    ]
  },
  {
    "slug": "por-vs-para-drill-2",
    "level": "A2",
    "number": 54,
    "title": "Por vs. Para: Práctica Extra, Part 2 of 3",
    "summary": "Practica el uso de “por” y “para” en contextos cotidianos con ejercicios de repaso, sin nueva teoría.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Por: movimiento a través de un lugar",
        "body": [
          "Usamos “por” para describir un movimiento a través de, por, o alrededor de un lugar, sin un destino específico."
        ],
        "examples": [
          {
            "es": "Caminamos por el parque toda la tarde.",
            "en": "We walked through the park all afternoon."
          },
          {
            "es": "El autobús pasa por mi calle.",
            "en": "The bus goes down my street."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa la oración con la forma correcta.",
            "sentence": "Pasamos ___ el centro antes de llegar al hotel.",
            "answer": "por",
            "hint": "movimiento a través de un lugar",
            "explanation": "“Por” describe el movimiento a través de un lugar, sin destino fijo."
          }
        ]
      },
      {
        "heading": "Por: medio o manera",
        "body": [
          "Usamos “por” para indicar el medio por el cual se hace algo, como por teléfono, por correo o por internet."
        ],
        "examples": [
          {
            "es": "Te aviso por teléfono esta noche.",
            "en": "I'll let you know by phone tonight."
          },
          {
            "es": "Enviaron el paquete por correo.",
            "en": "They sent the package by mail."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Cuál oración indica el medio por el cual se hace algo?",
            "options": [
              "Hablamos por teléfono todos los días.",
              "Hablamos para teléfono todos los días.",
              "Hablamos por a teléfono todos los días.",
              "Hablamos para de teléfono todos los días."
            ],
            "correctIndex": 0,
            "explanation": "El medio de comunicación se expresa con “por”: por teléfono, por correo, por internet."
          }
        ]
      },
      {
        "heading": "Para: fecha límite",
        "body": [
          "Usamos “para” para indicar una fecha límite o el momento en que algo debe estar listo."
        ],
        "examples": [
          {
            "es": "Necesito el informe para el viernes.",
            "en": "I need the report by Friday."
          },
          {
            "es": "Todo tiene que estar listo para las ocho.",
            "en": "Everything has to be ready by eight."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa la oración con la forma correcta.",
            "sentence": "La tarea es ___ el lunes.",
            "answer": "para",
            "hint": "fecha límite",
            "explanation": "“Para” introduce el plazo o la fecha límite: para el lunes."
          },
          {
            "type": "multiple-choice",
            "question": "¿Cuál oración indica una fecha límite?",
            "options": [
              "Necesito los documentos para mañana.",
              "Necesito los documentos por mañana.",
              "Necesito los documentos por de mañana.",
              "Necesito los documentos para de mañana."
            ],
            "correctIndex": 0,
            "explanation": "El plazo o fecha límite se expresa con “para”: para mañana."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con la forma correcta.",
        "sentence": "Mandé el mensaje ___ correo electrónico.",
        "answer": "por",
        "hint": "medio",
        "explanation": "El medio de comunicación se expresa con “por”."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Traduce la oración al español.",
        "source": "This letter is for my grandmother.",
        "answer": "Esta carta es para mi abuela.",
        "explanation": "“Para” indica el destinatario de algo."
      },
      {
        "type": "multiple-choice",
        "question": "Cambié mi teléfono viejo ___ uno nuevo.",
        "options": [
          "por",
          "para"
        ],
        "correctIndex": 0,
        "explanation": "“Por” expresa un intercambio: una cosa por otra."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con la forma correcta.",
        "sentence": "Salen ___ Buenos Aires el sábado.",
        "answer": "para",
        "hint": "destino",
        "explanation": "“Para” indica el destino de un viaje."
      },
      {
        "type": "matching",
        "instructions": "Relaciona cada elemento con su pareja correcta.",
        "pairs": [
          {
            "left": "por fin",
            "right": "finally"
          },
          {
            "left": "por favor",
            "right": "please"
          },
          {
            "left": "por supuesto",
            "right": "of course"
          },
          {
            "left": "para siempre",
            "right": "forever"
          },
          {
            "left": "para nada",
            "right": "not at all"
          },
          {
            "left": "por eso",
            "right": "that's why"
          }
        ],
        "explanation": "Estas son expresiones fijas comunes con “por” y “para”."
      },
      {
        "type": "multiple-choice",
        "question": "Trabajo ___ una empresa de tecnología.",
        "options": [
          "por",
          "para"
        ],
        "correctIndex": 1,
        "explanation": "“Trabajar para” indica el empleador; “para” marca el beneficiario del trabajo."
      }
    ]
  },
  {
    "slug": "por-vs-para-drill-3",
    "level": "A2",
    "number": 55,
    "title": "Por vs. Para: Práctica Extra, Part 3 of 3",
    "summary": "Practica el uso de “por” y “para” en contextos cotidianos con ejercicios de repaso, sin nueva teoría.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "Para: destino y propósito",
        "body": [
          "Usamos “para” para indicar un destino o el propósito de una acción, es decir, “con el fin de”."
        ],
        "examples": [
          {
            "es": "Salimos para Madrid mañana.",
            "en": "We're leaving for Madrid tomorrow."
          },
          {
            "es": "Estudio para aprender un idioma nuevo.",
            "en": "I study in order to learn a new language."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Cuál oración expresa el propósito de una acción?",
            "options": [
              "Ahorro dinero para viajar.",
              "Ahorro dinero por viajar.",
              "Ahorro dinero por a viajar.",
              "Ahorro dinero para de viajar."
            ],
            "correctIndex": 0,
            "explanation": "“Para” + infinitivo expresa el propósito de una acción: para viajar."
          }
        ]
      },
      {
        "heading": "Para: destinatario y expresiones fijas",
        "body": [
          "Usamos “para” para indicar el destinatario de algo, y además existen expresiones fijas con “por” y “para” que conviene memorizar, como por fin, por favor, por supuesto, para siempre y para nada."
        ],
        "examples": [
          {
            "es": "Este regalo es para ti.",
            "en": "This gift is for you."
          },
          {
            "es": "Por fin llegamos a casa.",
            "en": "We finally arrived home."
          },
          {
            "es": "Gracias por todo, y por favor escríbeme pronto.",
            "en": "Thanks for everything, and please write to me soon."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Qué expresión significa “not at all” en inglés?",
            "options": [
              "para nada",
              "por fin",
              "para siempre",
              "por supuesto"
            ],
            "correctIndex": 0,
            "explanation": "“Para nada” significa “not at all”; es una expresión fija con “para”."
          },
          {
            "type": "fill-blank",
            "prompt": "Completa la oración con la forma correcta.",
            "sentence": "Este correo electrónico es ___ mi jefe.",
            "answer": "para",
            "hint": "destinatario",
            "explanation": "“Para” indica el destinatario, es decir, para quién es algo."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con la forma correcta.",
        "sentence": "Este café es ___ ti.",
        "answer": "para",
        "hint": "destinatario",
        "explanation": "“Para” indica para quién es algo."
      },
      {
        "type": "translate",
        "direction": "es-en",
        "prompt": "Traduce la oración al inglés.",
        "source": "Fuimos al mercado por pan.",
        "answer": "We went to the market for bread.",
        "explanation": "“Ir por algo” significa ir a buscar algo; “por” expresa el motivo del viaje."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras para formar una oración.",
        "words": [
          "puerta",
          "favor",
          "la",
          "por",
          "Cierra"
        ],
        "explanation": "“Por favor” es una expresión fija que significa “please”."
      },
      {
        "type": "multiple-choice",
        "question": "Pasamos ___ el puente para llegar al centro.",
        "options": [
          "por",
          "para"
        ],
        "correctIndex": 0,
        "explanation": "“Por” describe el movimiento a través de un lugar, en este caso el puente."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con la forma correcta.",
        "sentence": "Te doy veinte dólares ___ ese libro.",
        "answer": "por",
        "hint": "intercambio",
        "explanation": "El dinero pagado a cambio de algo se expresa con “por”."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Traduce la oración al español.",
        "source": "I need this by Monday.",
        "answer": "Necesito esto para el lunes.",
        "explanation": "“Para” marca la fecha límite en la que algo debe estar listo."
      }
    ]
  },
  {
    "slug": "personal-a-negation-mente-drill-1",
    "level": "A2",
    "number": 56,
    "title": "La A Personal, Negación y Adverbios en -mente: Práctica Extra, Part 1 of 3",
    "summary": "Esta lección es una práctica adicional que combina tres temas ya estudiados: la a personal, las palabras de negación y los adverbios terminados en -mente.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "La a personal con personas específicas",
        "body": [
          "Recuerda usar la a personal cuando el objeto directo es una persona específica y conocida."
        ],
        "examples": [
          {
            "es": "Veo a mi hermana en el parque los domingos.",
            "en": "I see my sister in the park on Sundays."
          },
          {
            "es": "Busco a Carlos, pero no lo encuentro.",
            "en": "I'm looking for Carlos, but I can't find him."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa la oración con la forma correcta.",
            "sentence": "Visito ___ mi abuela todos los domingos.",
            "answer": "a",
            "hint": "el objeto directo es una persona específica",
            "explanation": "Con personas específicas y conocidas, el objeto directo lleva la a personal."
          },
          {
            "type": "multiple-choice",
            "question": "¿Cuál oración usa correctamente la a personal?",
            "options": [
              "Veo a el gato en la calle.",
              "Llamo a mi médico cada mes.",
              "Compro a un libro nuevo.",
              "Necesito a dinero para el viaje."
            ],
            "correctIndex": 1,
            "explanation": "Solo 'mi médico' es una persona específica; los demás objetos no son personas."
          }
        ]
      },
      {
        "heading": "Excepciones de la a personal: tener y personas indefinidas",
        "body": [
          "Con el verbo tener y con personas indefinidas o no específicas, normalmente se omite la a personal."
        ],
        "examples": [
          {
            "es": "Tengo tres hermanos y una hermana.",
            "en": "I have three brothers and one sister."
          },
          {
            "es": "Busco un compañero de cuarto para el próximo semestre.",
            "en": "I'm looking for a roommate for next semester (any roommate)."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Qué oración NO necesita la a personal?",
            "options": [
              "Tengo dos primos en México.",
              "Veo a mi profesora en la cafetería.",
              "Conozco a tu hermano.",
              "Llamo a la doctora Pérez."
            ],
            "correctIndex": 0,
            "explanation": "Con 'tener', normalmente se omite la a personal, incluso con personas."
          },
          {
            "type": "multiple-choice",
            "question": "Con el verbo tener, ¿cuándo se usa generalmente la a personal?",
            "options": [
              "Siempre, sin excepción.",
              "Casi nunca; normalmente se omite.",
              "Solo los fines de semana.",
              "Solo con nombres propios."
            ],
            "correctIndex": 1,
            "explanation": "La regla general en este nivel es que 'tener' no lleva a personal."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "¿Cuál oración usa la a personal correctamente?",
        "options": [
          "Conozco a tu vecino desde hace años.",
          "Conozco a tu casa desde hace años.",
          "Conozco a un problema grave.",
          "Conozco a la verdad."
        ],
        "correctIndex": 0,
        "explanation": "'Tu vecino' es una persona específica, así que necesita la a personal."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con la forma correcta.",
        "sentence": "No conozco ___ nadie en esta ciudad todavía.",
        "answer": "a",
        "hint": "doble negación + a personal con 'nadie'",
        "explanation": "'Nadie' se refiere a una persona, así que también lleva la a personal: 'a nadie'."
      },
      {
        "type": "translate",
        "direction": "es-en",
        "prompt": "Traduce la oración al inglés.",
        "source": "Ella nunca llega tarde a las citas.",
        "answer": "She never arrives late to appointments.",
        "explanation": "Repasa la regla de esta sección para confirmar la respuesta."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras para formar una oración.",
        "words": [
          "hermano",
          "veo",
          "fiesta",
          "a",
          "mi",
          "en",
          "la"
        ],
        "explanation": "El orden es verbo + a personal + objeto directo + complemento."
      },
      {
        "type": "matching",
        "instructions": "Relaciona cada elemento con su pareja correcta.",
        "pairs": [
          {
            "left": "alguien",
            "right": "someone"
          },
          {
            "left": "nadie",
            "right": "no one"
          },
          {
            "left": "algo",
            "right": "something"
          },
          {
            "left": "nada",
            "right": "nothing"
          },
          {
            "left": "siempre",
            "right": "always"
          },
          {
            "left": "nunca",
            "right": "never"
          }
        ],
        "explanation": "Repasa la regla de esta sección para confirmar la respuesta."
      },
      {
        "type": "multiple-choice",
        "question": "Completa: '¿Buscas a alguien?' — 'No, no busco ___.'",
        "options": [
          "nadie",
          "a nadie",
          "alguien",
          "a alguien"
        ],
        "correctIndex": 1,
        "explanation": "'Nadie' se refiere a una persona, así que lleva la a personal: 'a nadie'."
      }
    ]
  },
  {
    "slug": "personal-a-negation-mente-drill-2",
    "level": "A2",
    "number": 57,
    "title": "La A Personal, Negación y Adverbios en -mente: Práctica Extra, Part 2 of 3",
    "summary": "Esta lección es una práctica adicional que combina tres temas ya estudiados: la a personal, las palabras de negación y los adverbios terminados en -mente.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "Palabras negativas y afirmativas básicas",
        "body": [
          "Las parejas opuestas más comunes son alguien/nadie, algo/nada, siempre/nunca y alguno/ninguno."
        ],
        "examples": [
          {
            "es": "¿Hay alguien en casa? No, no hay nadie.",
            "en": "Is anyone home? No, there's no one."
          },
          {
            "es": "Siempre desayuno, pero mi hermano nunca desayuna.",
            "en": "I always eat breakfast, but my brother never eats breakfast."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa la oración con la forma correcta.",
            "sentence": "No tengo ___ que decir en la reunión.",
            "answer": "nada",
            "hint": "opuesto de 'algo'",
            "explanation": "'Nada' es la forma negativa de 'algo'."
          },
          {
            "type": "multiple-choice",
            "question": "¿Cuál es el opuesto de 'siempre'?",
            "options": [
              "nunca",
              "nadie",
              "ninguno",
              "nada"
            ],
            "correctIndex": 0,
            "explanation": "Repasa la regla de esta sección para confirmar la respuesta."
          }
        ]
      },
      {
        "heading": "La doble negación: no + verbo + palabra negativa",
        "body": [
          "Cuando la palabra negativa va después del verbo, es obligatorio poner 'no' antes del verbo."
        ],
        "examples": [
          {
            "es": "No hablo con nadie los lunes por la mañana.",
            "en": "I don't talk to anyone on Monday mornings."
          },
          {
            "es": "No hay ningún problema con tu solicitud.",
            "en": "There's no problem with your application."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa la oración con la forma correcta.",
            "sentence": "___ voy nunca a ese restaurante.",
            "answer": "No",
            "hint": "la doble negación necesita 'no' antes del verbo",
            "explanation": "Cuando 'nunca' va después del verbo, se necesita 'no' antes."
          },
          {
            "type": "multiple-choice",
            "question": "¿Cuál oración tiene la doble negación correcta?",
            "options": [
              "No como nada antes de dormir.",
              "Como no nada antes de dormir.",
              "No como algo antes de dormir.",
              "Como nada no antes de dormir."
            ],
            "correctIndex": 0,
            "explanation": "Repasa la regla de esta sección para confirmar la respuesta."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con la forma correcta.",
        "sentence": "Mi padre habla muy ___ cuando está enojado.",
        "answer": "tranquilamente",
        "hint": "forma femenina de 'tranquilo' + mente",
        "explanation": "Repasa la regla de esta sección para confirmar la respuesta."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Traduce la oración al español.",
        "source": "I don't have any patience today.",
        "answer": "No tengo ninguna paciencia hoy.",
        "explanation": "Repasa la regla de esta sección para confirmar la respuesta."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras para formar una oración.",
        "words": [
          "viene",
          "nadie",
          "reunión",
          "a",
          "la"
        ],
        "explanation": "Cuando la palabra negativa va antes del verbo, no se usa 'no'."
      },
      {
        "type": "multiple-choice",
        "question": "¿Qué oración es incorrecta?",
        "options": [
          "No veo a nadie en la calle.",
          "No tengo a ningún problema.",
          "Tengo dos hijos.",
          "Busco un trabajo nuevo."
        ],
        "correctIndex": 1,
        "explanation": "Con 'tener' no se usa la a personal, y 'problema' tampoco es una persona."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con la forma correcta.",
        "sentence": "Escribió el informe clara y ___.",
        "answer": "cuidadosamente",
        "hint": "solo el segundo adverbio termina en -mente",
        "explanation": "Repasa la regla de esta sección para confirmar la respuesta."
      },
      {
        "type": "translate",
        "direction": "es-en",
        "prompt": "Traduce la oración al inglés.",
        "source": "Busco a mi amiga; no la veo por ningún lado.",
        "answer": "I'm looking for my friend; I don't see her anywhere.",
        "explanation": "Repasa la regla de esta sección para confirmar la respuesta."
      }
    ]
  },
  {
    "slug": "personal-a-negation-mente-drill-3",
    "level": "A2",
    "number": 58,
    "title": "La A Personal, Negación y Adverbios en -mente: Práctica Extra, Part 3 of 3",
    "summary": "Esta lección es una práctica adicional que combina tres temas ya estudiados: la a personal, las palabras de negación y los adverbios terminados en -mente.",
    "duration": "9 min",
    "sections": [
      {
        "heading": "Palabras negativas antes del verbo, sin 'no'",
        "body": [
          "Cuando la palabra negativa se coloca antes del verbo, no se usa 'no'."
        ],
        "examples": [
          {
            "es": "Nadie llama a esta hora de la noche.",
            "en": "Nobody calls at this hour of the night."
          },
          {
            "es": "Nunca llego tarde al trabajo.",
            "en": "I never arrive late to work."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Cuál oración es correcta?",
            "options": [
              "No nadie viene a la fiesta.",
              "Nadie viene a la fiesta.",
              "No viene nadie no.",
              "Nadie no viene a la fiesta."
            ],
            "correctIndex": 1,
            "explanation": "Repasa la regla de esta sección para confirmar la respuesta."
          },
          {
            "type": "fill-blank",
            "prompt": "Completa la oración con la forma correcta.",
            "sentence": "___ estudia los sábados en mi familia.",
            "answer": "Nadie",
            "hint": "palabra negativa antes del verbo, sin 'no'",
            "explanation": "Repasa la regla de esta sección para confirmar la respuesta."
          }
        ]
      },
      {
        "heading": "Formación de adverbios en -mente",
        "body": [
          "Para formar un adverbio en -mente, se añade -mente a la forma femenina singular del adjetivo."
        ],
        "examples": [
          {
            "es": "rápido → rápida → rápidamente",
            "en": "fast → quickly"
          },
          {
            "es": "fácil → fácilmente",
            "en": "easy → easily"
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa la oración con la forma correcta.",
            "sentence": "Ella habla muy ___ en las reuniones.",
            "answer": "claramente",
            "hint": "adjetivo 'clara' + mente",
            "explanation": "Repasa la regla de esta sección para confirmar la respuesta."
          },
          {
            "type": "multiple-choice",
            "question": "¿Cuál es el adverbio correcto de 'feliz'?",
            "options": [
              "felizmente",
              "felizamente",
              "felisamente",
              "felizomente"
            ],
            "correctIndex": 0,
            "explanation": "Repasa la regla de esta sección para confirmar la respuesta."
          }
        ]
      },
      {
        "heading": "Dos adverbios en -mente unidos por 'y'",
        "body": [
          "Cuando dos adverbios en -mente se unen con 'y', solo el segundo lleva la terminación -mente."
        ],
        "examples": [
          {
            "es": "Habló clara y sinceramente sobre el problema.",
            "en": "He spoke clearly and sincerely about the problem."
          },
          {
            "es": "Actuó rápida y eficazmente durante la emergencia.",
            "en": "She acted quickly and effectively during the emergency."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa la oración con la forma correcta.",
            "sentence": "Me explicó el problema lenta y ___.",
            "answer": "cuidadosamente",
            "hint": "solo el segundo adverbio lleva -mente",
            "explanation": "Repasa la regla de esta sección para confirmar la respuesta."
          },
          {
            "type": "multiple-choice",
            "question": "¿Cuál oración es correcta?",
            "options": [
              "Trabaja rápidamente y eficazmente.",
              "Trabaja rápida y eficazmente.",
              "Trabaja rápida y eficaz.",
              "Trabaja rápido y eficazmente."
            ],
            "correctIndex": 1,
            "explanation": "Repasa la regla de esta sección para confirmar la respuesta."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "matching",
        "instructions": "Relaciona cada elemento con su pareja correcta.",
        "pairs": [
          {
            "left": "rápido",
            "right": "fast"
          },
          {
            "left": "rápidamente",
            "right": "quickly"
          },
          {
            "left": "fácil",
            "right": "easy"
          },
          {
            "left": "fácilmente",
            "right": "easily"
          },
          {
            "left": "feliz",
            "right": "happy"
          },
          {
            "left": "felizmente",
            "right": "happily"
          }
        ],
        "explanation": "Repasa la regla de esta sección para confirmar la respuesta."
      },
      {
        "type": "multiple-choice",
        "question": "¿Cuál oración combina correctamente la a personal y la negación?",
        "options": [
          "No veo nadie en el parque.",
          "No veo a nadie en el parque.",
          "No veo a alguien en el parque.",
          "Veo no a nadie en el parque."
        ],
        "correctIndex": 1,
        "explanation": "Repasa la regla de esta sección para confirmar la respuesta."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con la forma correcta.",
        "sentence": "___ tengo tiempo para descansar esta semana.",
        "answer": "Nunca",
        "hint": "palabra negativa antes del verbo, sin 'no'",
        "explanation": "Repasa la regla de esta sección para confirmar la respuesta."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras para formar una oración.",
        "words": [
          "profesor",
          "clara",
          "habló",
          "y",
          "el",
          "sinceramente"
        ],
        "explanation": "El primer adverbio pierde -mente cuando se une al segundo con 'y'."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Traduce la oración al español.",
        "source": "I always visit my grandmother, but my brother never visits her.",
        "answer": "Siempre visito a mi abuela, pero mi hermano nunca la visita.",
        "explanation": "Repasa la regla de esta sección para confirmar la respuesta."
      },
      {
        "type": "multiple-choice",
        "question": "¿Cuál es la forma correcta de decir 'sincerely and calmly' en español?",
        "options": [
          "sincera y tranquilamente",
          "sinceramente y tranquila",
          "sinceramente y tranquilamente",
          "sincero y tranquilamente"
        ],
        "correctIndex": 0,
        "explanation": "Solo el segundo adverbio conserva -mente; el primero usa la forma femenina del adjetivo."
      }
    ]
  },
  {
    "slug": "a2-vocabulary-practice-1",
    "level": "A2",
    "number": 59,
    "title": "A2 Vocabulary Practice, Part 1 of 5",
    "summary": "Test yourself on all 300 words from the A2 vocabulary lists, grouped by lesson.",
    "duration": "9 min",
    "sections": [
      {
        "heading": "Travel & Trips",
        "body": [
          "All 30 words from Lesson 1's vocabulary section, grouped for review."
        ],
        "checkpoint": [
          {
            "type": "matching",
            "instructions": "Match each word to its meaning (Travel & Trips, part 1).",
            "pairs": [
              {
                "left": "viajar",
                "right": "to travel"
              },
              {
                "left": "el viaje",
                "right": "the trip"
              },
              {
                "left": "la maleta",
                "right": "the suitcase"
              },
              {
                "left": "el boleto",
                "right": "the ticket"
              },
              {
                "left": "el aeropuerto",
                "right": "the airport"
              },
              {
                "left": "el vuelo",
                "right": "the flight"
              },
              {
                "left": "llegar",
                "right": "to arrive"
              },
              {
                "left": "salir",
                "right": "to leave / depart"
              },
              {
                "left": "el hotel",
                "right": "the hotel"
              },
              {
                "left": "la reserva",
                "right": "the reservation"
              }
            ],
            "explanation": "The first ten words from this theme."
          },
          {
            "type": "matching",
            "instructions": "Match each word to its meaning (Travel & Trips, part 2).",
            "pairs": [
              {
                "left": "el pasaporte",
                "right": "the passport"
              },
              {
                "left": "la aduana",
                "right": "customs"
              },
              {
                "left": "el equipaje",
                "right": "the luggage"
              },
              {
                "left": "la excursión",
                "right": "the excursion / tour"
              },
              {
                "left": "el mapa",
                "right": "the map"
              },
              {
                "left": "la guía",
                "right": "the guidebook / guide"
              },
              {
                "left": "alquilar",
                "right": "to rent"
              },
              {
                "left": "el coche",
                "right": "the car"
              },
              {
                "left": "la playa",
                "right": "the beach"
              },
              {
                "left": "las montañas",
                "right": "the mountains"
              }
            ],
            "explanation": "The next ten words from this theme."
          },
          {
            "type": "matching",
            "instructions": "Match each word to its meaning (Travel & Trips, part 3).",
            "pairs": [
              {
                "left": "el crucero",
                "right": "the cruise"
              },
              {
                "left": "la aventura",
                "right": "the adventure"
              },
              {
                "left": "explorar",
                "right": "to explore"
              },
              {
                "left": "el/la turista",
                "right": "the tourist"
              },
              {
                "left": "el recuerdo",
                "right": "the souvenir / memory"
              },
              {
                "left": "la salida",
                "right": "the departure"
              },
              {
                "left": "el destino",
                "right": "the destination"
              },
              {
                "left": "hacer las maletas",
                "right": "to pack"
              },
              {
                "left": "el itinerario",
                "right": "the itinerary"
              },
              {
                "left": "quedarse",
                "right": "to stay"
              }
            ],
            "explanation": "The final ten words from this theme."
          }
        ]
      },
      {
        "heading": "Time Expressions & Frequency",
        "body": [
          "All 30 words from Lesson 2's vocabulary section, grouped for review."
        ],
        "checkpoint": [
          {
            "type": "matching",
            "instructions": "Match each word to its meaning (Time Expressions & Frequency, part 1).",
            "pairs": [
              {
                "left": "ayer",
                "right": "yesterday"
              },
              {
                "left": "anoche",
                "right": "last night"
              },
              {
                "left": "anteayer",
                "right": "the day before yesterday"
              },
              {
                "left": "la semana pasada",
                "right": "last week"
              },
              {
                "left": "el mes pasado",
                "right": "last month"
              },
              {
                "left": "el año pasado",
                "right": "last year"
              },
              {
                "left": "de repente",
                "right": "suddenly"
              },
              {
                "left": "de pronto",
                "right": "suddenly / all at once"
              },
              {
                "left": "entonces",
                "right": "then"
              },
              {
                "left": "luego",
                "right": "then / later"
              }
            ],
            "explanation": "The first ten words from this theme."
          },
          {
            "type": "matching",
            "instructions": "Match each word to its meaning (Time Expressions & Frequency, part 2).",
            "pairs": [
              {
                "left": "después",
                "right": "afterward"
              },
              {
                "left": "primero",
                "right": "first"
              },
              {
                "left": "finalmente",
                "right": "finally"
              },
              {
                "left": "mientras tanto",
                "right": "meanwhile"
              },
              {
                "left": "durante",
                "right": "during"
              },
              {
                "left": "temprano",
                "right": "early"
              },
              {
                "left": "a tiempo",
                "right": "on time"
              },
              {
                "left": "la próxima vez",
                "right": "next time"
              },
              {
                "left": "recientemente",
                "right": "recently"
              },
              {
                "left": "todavía",
                "right": "still"
              }
            ],
            "explanation": "The next ten words from this theme."
          },
          {
            "type": "matching",
            "instructions": "Match each word to its meaning (Time Expressions & Frequency, part 3).",
            "pairs": [
              {
                "left": "ya",
                "right": "already"
              },
              {
                "left": "ya no",
                "right": "no longer"
              },
              {
                "left": "una vez",
                "right": "once"
              },
              {
                "left": "a veces",
                "right": "sometimes"
              },
              {
                "left": "siempre",
                "right": "always"
              },
              {
                "left": "la vez",
                "right": "the time / occurrence"
              },
              {
                "left": "pasado",
                "right": "past"
              },
              {
                "left": "próximo",
                "right": "next"
              },
              {
                "left": "cada",
                "right": "each"
              },
              {
                "left": "últimamente",
                "right": "lately"
              }
            ],
            "explanation": "The final ten words from this theme."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multi-select",
        "question": "¿Cuáles de estas palabras significan un lugar donde compras ropa o comida? (Elige todas las correctas)",
        "options": [
          "la tienda",
          "el aeropuerto",
          "la farmacia",
          "el mostrador"
        ],
        "correctIndexes": [
          0,
          2,
          3
        ],
        "explanation": "La tienda, la farmacia, and el mostrador are all shopping-related; el aeropuerto is not."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Traduce al español.",
        "source": "the departure (from Lesson 1's vocabulary)",
        "answer": "la salida",
        "explanation": "\"La salida\" means \"the departure.\""
      }
    ]
  },
  {
    "slug": "a2-vocabulary-practice-2",
    "level": "A2",
    "number": 60,
    "title": "A2 Vocabulary Practice, Part 2 of 5",
    "summary": "Test yourself on all 300 words from the A2 vocabulary lists, grouped by lesson.",
    "duration": "10 min",
    "sections": [
      {
        "heading": "Childhood & Memories",
        "body": [
          "All 30 words from Lesson 3's vocabulary section, grouped for review."
        ],
        "checkpoint": [
          {
            "type": "matching",
            "instructions": "Match each word to its meaning (Childhood & Memories, part 1).",
            "pairs": [
              {
                "left": "de niño / de niña",
                "right": "as a child"
              },
              {
                "left": "la infancia",
                "right": "childhood"
              },
              {
                "left": "recordar",
                "right": "to remember"
              },
              {
                "left": "el recuerdo",
                "right": "the memory"
              },
              {
                "left": "soñar",
                "right": "to dream"
              },
              {
                "left": "jugar",
                "right": "to play"
              },
              {
                "left": "la muñeca",
                "right": "the doll"
              },
              {
                "left": "el juguete",
                "right": "the toy"
              },
              {
                "left": "el patio",
                "right": "the yard / playground"
              },
              {
                "left": "el barrio",
                "right": "the neighborhood"
              }
            ],
            "explanation": "The first ten words from this theme."
          },
          {
            "type": "matching",
            "instructions": "Match each word to its meaning (Childhood & Memories, part 2).",
            "pairs": [
              {
                "left": "la escuela primaria",
                "right": "elementary school"
              },
              {
                "left": "el maestro / la maestra",
                "right": "the teacher"
              },
              {
                "left": "el recreo",
                "right": "recess"
              },
              {
                "left": "crecer",
                "right": "to grow up"
              },
              {
                "left": "cambiar",
                "right": "to change"
              },
              {
                "left": "mudarse",
                "right": "to move (house)"
              },
              {
                "left": "extrañar",
                "right": "to miss (someone/something)"
              },
              {
                "left": "la costumbre",
                "right": "the habit / custom"
              },
              {
                "left": "soler",
                "right": "to usually do"
              },
              {
                "left": "aburrirse",
                "right": "to get bored"
              }
            ],
            "explanation": "The next ten words from this theme."
          },
          {
            "type": "matching",
            "instructions": "Match each word to its meaning (Childhood & Memories, part 3).",
            "pairs": [
              {
                "left": "divertirse",
                "right": "to have fun"
              },
              {
                "left": "imaginar",
                "right": "to imagine"
              },
              {
                "left": "contar cuentos",
                "right": "to tell stories"
              },
              {
                "left": "la abuela",
                "right": "the grandmother"
              },
              {
                "left": "celebrar",
                "right": "to celebrate"
              },
              {
                "left": "el vecino / la vecina",
                "right": "the neighbor"
              },
              {
                "left": "el columpio",
                "right": "the swing"
              },
              {
                "left": "la bicicleta",
                "right": "the bicycle"
              },
              {
                "left": "el helado",
                "right": "the ice cream"
              },
              {
                "left": "travieso",
                "right": "mischievous"
              }
            ],
            "explanation": "The final ten words from this theme."
          }
        ]
      },
      {
        "heading": "Weather & Seasons",
        "body": [
          "All 30 words from Lesson 4's vocabulary section, grouped for review."
        ],
        "checkpoint": [
          {
            "type": "matching",
            "instructions": "Match each word to its meaning (Weather & Seasons, part 1).",
            "pairs": [
              {
                "left": "el clima",
                "right": "the climate"
              },
              {
                "left": "hacer sol",
                "right": "to be sunny"
              },
              {
                "left": "hacer calor",
                "right": "to be hot"
              },
              {
                "left": "hacer frío",
                "right": "to be cold"
              },
              {
                "left": "hacer viento",
                "right": "to be windy"
              },
              {
                "left": "llover",
                "right": "to rain"
              },
              {
                "left": "la lluvia",
                "right": "the rain"
              },
              {
                "left": "nevar",
                "right": "to snow"
              },
              {
                "left": "la nieve",
                "right": "the snow"
              },
              {
                "left": "la tormenta",
                "right": "the storm"
              }
            ],
            "explanation": "The first ten words from this theme."
          },
          {
            "type": "matching",
            "instructions": "Match each word to its meaning (Weather & Seasons, part 2).",
            "pairs": [
              {
                "left": "el trueno",
                "right": "the thunder"
              },
              {
                "left": "el relámpago",
                "right": "the lightning"
              },
              {
                "left": "la nube",
                "right": "the cloud"
              },
              {
                "left": "nublado",
                "right": "cloudy"
              },
              {
                "left": "despejado",
                "right": "clear (sky)"
              },
              {
                "left": "húmedo",
                "right": "humid"
              },
              {
                "left": "seco",
                "right": "dry"
              },
              {
                "left": "la primavera",
                "right": "spring"
              },
              {
                "left": "el verano",
                "right": "summer"
              },
              {
                "left": "el otoño",
                "right": "autumn"
              }
            ],
            "explanation": "The next ten words from this theme."
          },
          {
            "type": "matching",
            "instructions": "Match each word to its meaning (Weather & Seasons, part 3).",
            "pairs": [
              {
                "left": "el invierno",
                "right": "winter"
              },
              {
                "left": "el pronóstico",
                "right": "the forecast"
              },
              {
                "left": "los grados",
                "right": "the degrees"
              },
              {
                "left": "la temperatura",
                "right": "the temperature"
              },
              {
                "left": "el paraguas",
                "right": "the umbrella"
              },
              {
                "left": "el arcoíris",
                "right": "the rainbow"
              },
              {
                "left": "la sombra",
                "right": "the shade"
              },
              {
                "left": "el hielo",
                "right": "the ice"
              },
              {
                "left": "la ola de calor",
                "right": "the heat wave"
              },
              {
                "left": "empapado",
                "right": "soaked"
              }
            ],
            "explanation": "The final ten words from this theme."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "matching",
        "instructions": "Match each work-related word to its meaning.",
        "pairs": [
          {
            "left": "solicitar",
            "right": "to apply for"
          },
          {
            "left": "contratar",
            "right": "to hire"
          },
          {
            "left": "renunciar",
            "right": "to quit"
          },
          {
            "left": "jubilarse",
            "right": "to retire"
          },
          {
            "left": "ascender",
            "right": "to get promoted"
          }
        ],
        "explanation": "These verbs cover the arc of a career, from applying to retiring."
      },
      {
        "type": "multiple-choice",
        "question": "¿Qué palabra significa \"the fever\"?",
        "options": [
          "la tos",
          "la fiebre",
          "el resfriado",
          "la gripe"
        ],
        "correctIndex": 1,
        "explanation": "\"La fiebre\" means \"the fever.\""
      }
    ]
  },
  {
    "slug": "a2-vocabulary-practice-3",
    "level": "A2",
    "number": 61,
    "title": "A2 Vocabulary Practice, Part 3 of 5",
    "summary": "Test yourself on all 300 words from the A2 vocabulary lists, grouped by lesson.",
    "duration": "10 min",
    "sections": [
      {
        "heading": "Shopping & Objects",
        "body": [
          "All 30 words from Lesson 5's vocabulary section, grouped for review."
        ],
        "checkpoint": [
          {
            "type": "matching",
            "instructions": "Match each word to its meaning (Shopping & Objects, part 1).",
            "pairs": [
              {
                "left": "la tienda",
                "right": "the store"
              },
              {
                "left": "el centro comercial",
                "right": "the mall"
              },
              {
                "left": "el precio",
                "right": "the price"
              },
              {
                "left": "la oferta",
                "right": "the deal / offer"
              },
              {
                "left": "la rebaja",
                "right": "the discount"
              },
              {
                "left": "caro",
                "right": "expensive"
              },
              {
                "left": "barato",
                "right": "cheap"
              },
              {
                "left": "probarse",
                "right": "to try on"
              },
              {
                "left": "la talla",
                "right": "the size"
              },
              {
                "left": "el color",
                "right": "the color"
              }
            ],
            "explanation": "The first ten words from this theme."
          },
          {
            "type": "matching",
            "instructions": "Match each word to its meaning (Shopping & Objects, part 2).",
            "pairs": [
              {
                "left": "el efectivo",
                "right": "cash"
              },
              {
                "left": "la tarjeta de crédito",
                "right": "the credit card"
              },
              {
                "left": "pagar",
                "right": "to pay"
              },
              {
                "left": "el recibo",
                "right": "the receipt"
              },
              {
                "left": "devolver",
                "right": "to return (an item)"
              },
              {
                "left": "cambiar",
                "right": "to exchange"
              },
              {
                "left": "el mostrador",
                "right": "the counter"
              },
              {
                "left": "el probador",
                "right": "the fitting room"
              },
              {
                "left": "elegir",
                "right": "to choose"
              },
              {
                "left": "comprar",
                "right": "to buy"
              }
            ],
            "explanation": "The next ten words from this theme."
          },
          {
            "type": "matching",
            "instructions": "Match each word to its meaning (Shopping & Objects, part 3).",
            "pairs": [
              {
                "left": "vender",
                "right": "to sell"
              },
              {
                "left": "el vendedor / la vendedora",
                "right": "the salesperson"
              },
              {
                "left": "el cliente",
                "right": "the customer"
              },
              {
                "left": "hacer fila",
                "right": "to wait in line"
              },
              {
                "left": "la caja",
                "right": "the checkout"
              },
              {
                "left": "gastar",
                "right": "to spend (money)"
              },
              {
                "left": "ahorrar",
                "right": "to save (money)"
              },
              {
                "left": "el descuento",
                "right": "the discount"
              },
              {
                "left": "la marca",
                "right": "the brand"
              },
              {
                "left": "de segunda mano",
                "right": "secondhand"
              }
            ],
            "explanation": "The final ten words from this theme."
          }
        ]
      },
      {
        "heading": "Communication & Technology",
        "body": [
          "All 30 words from Lesson 6's vocabulary section, grouped for review."
        ],
        "checkpoint": [
          {
            "type": "matching",
            "instructions": "Match each word to its meaning (Communication & Technology, part 1).",
            "pairs": [
              {
                "left": "el celular",
                "right": "the cell phone"
              },
              {
                "left": "la pantalla",
                "right": "the screen"
              },
              {
                "left": "la aplicación",
                "right": "the app"
              },
              {
                "left": "mandar un mensaje",
                "right": "to send a message"
              },
              {
                "left": "llamar",
                "right": "to call"
              },
              {
                "left": "la llamada",
                "right": "the call"
              },
              {
                "left": "el correo electrónico",
                "right": "the email"
              },
              {
                "left": "escribir",
                "right": "to write"
              },
              {
                "left": "enviar",
                "right": "to send"
              },
              {
                "left": "recibir",
                "right": "to receive"
              }
            ],
            "explanation": "The first ten words from this theme."
          },
          {
            "type": "matching",
            "instructions": "Match each word to its meaning (Communication & Technology, part 2).",
            "pairs": [
              {
                "left": "contestar",
                "right": "to answer"
              },
              {
                "left": "la contraseña",
                "right": "the password"
              },
              {
                "left": "descargar",
                "right": "to download"
              },
              {
                "left": "subir",
                "right": "to upload"
              },
              {
                "left": "la red social",
                "right": "the social network"
              },
              {
                "left": "publicar",
                "right": "to post"
              },
              {
                "left": "compartir",
                "right": "to share"
              },
              {
                "left": "grabar",
                "right": "to record"
              },
              {
                "left": "la batería",
                "right": "the battery"
              },
              {
                "left": "cargar",
                "right": "to charge"
              }
            ],
            "explanation": "The next ten words from this theme."
          },
          {
            "type": "matching",
            "instructions": "Match each word to its meaning (Communication & Technology, part 3).",
            "pairs": [
              {
                "left": "conectar",
                "right": "to connect"
              },
              {
                "left": "el wifi",
                "right": "the wifi"
              },
              {
                "left": "la señal",
                "right": "the signal"
              },
              {
                "left": "navegar",
                "right": "to browse"
              },
              {
                "left": "la computadora",
                "right": "the computer"
              },
              {
                "left": "el mensaje de voz",
                "right": "the voice message"
              },
              {
                "left": "la videollamada",
                "right": "the video call"
              },
              {
                "left": "el altavoz",
                "right": "the speaker"
              },
              {
                "left": "el correo no deseado",
                "right": "spam email"
              },
              {
                "left": "instalar",
                "right": "to install"
              }
            ],
            "explanation": "The final ten words from this theme."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multi-select",
        "question": "¿Cuáles palabras describen la rutina diaria? (Elige todas las correctas)",
        "options": [
          "despertarse",
          "el vuelo",
          "cepillarse",
          "acostarse"
        ],
        "correctIndexes": [
          0,
          2,
          3
        ],
        "explanation": "\"El vuelo\" (the flight) belongs to the travel theme, not the daily routine."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Traduce al español.",
        "source": "as many as (comparing quantities)",
        "answer": "tanto como",
        "altAnswers": [
          "tanta como",
          "tantos como",
          "tantas como"
        ],
        "explanation": "This phrase compares equal quantities of a noun -- tanto/a/os/as agrees in gender and number with the noun it modifies."
      }
    ]
  },
  {
    "slug": "a2-vocabulary-practice-4",
    "level": "A2",
    "number": 62,
    "title": "A2 Vocabulary Practice, Part 4 of 5",
    "summary": "Test yourself on all 300 words from the A2 vocabulary lists, grouped by lesson.",
    "duration": "10 min",
    "sections": [
      {
        "heading": "Body & Daily Routine",
        "body": [
          "All 30 words from Lesson 7's vocabulary section, grouped for review."
        ],
        "checkpoint": [
          {
            "type": "matching",
            "instructions": "Match each word to its meaning (Body & Daily Routine, part 1).",
            "pairs": [
              {
                "left": "la cara",
                "right": "the face"
              },
              {
                "left": "el pelo",
                "right": "the hair"
              },
              {
                "left": "los dientes",
                "right": "the teeth"
              },
              {
                "left": "la mano",
                "right": "the hand"
              },
              {
                "left": "el cuerpo",
                "right": "the body"
              },
              {
                "left": "despertarse",
                "right": "to wake up"
              },
              {
                "left": "levantarse",
                "right": "to get up"
              },
              {
                "left": "ducharse",
                "right": "to shower"
              },
              {
                "left": "bañarse",
                "right": "to bathe"
              },
              {
                "left": "cepillarse",
                "right": "to brush"
              }
            ],
            "explanation": "The first ten words from this theme."
          },
          {
            "type": "matching",
            "instructions": "Match each word to its meaning (Body & Daily Routine, part 2).",
            "pairs": [
              {
                "left": "peinarse",
                "right": "to comb/style one's hair"
              },
              {
                "left": "vestirse",
                "right": "to get dressed"
              },
              {
                "left": "maquillarse",
                "right": "to put on makeup"
              },
              {
                "left": "afeitarse",
                "right": "to shave"
              },
              {
                "left": "desayunar",
                "right": "to have breakfast"
              },
              {
                "left": "arreglarse",
                "right": "to get ready"
              },
              {
                "left": "acostarse",
                "right": "to go to bed"
              },
              {
                "left": "dormirse",
                "right": "to fall asleep"
              },
              {
                "left": "la rutina",
                "right": "the routine"
              },
              {
                "left": "la toalla",
                "right": "the towel"
              }
            ],
            "explanation": "The next ten words from this theme."
          },
          {
            "type": "matching",
            "instructions": "Match each word to its meaning (Body & Daily Routine, part 3).",
            "pairs": [
              {
                "left": "el jabón",
                "right": "the soap"
              },
              {
                "left": "el champú",
                "right": "the shampoo"
              },
              {
                "left": "el cepillo de dientes",
                "right": "the toothbrush"
              },
              {
                "left": "secarse",
                "right": "to dry off"
              },
              {
                "left": "relajarse",
                "right": "to relax"
              },
              {
                "left": "el brazo",
                "right": "the arm"
              },
              {
                "left": "la pierna",
                "right": "the leg"
              },
              {
                "left": "el pie",
                "right": "the foot"
              },
              {
                "left": "el ojo",
                "right": "the eye"
              },
              {
                "left": "la oreja",
                "right": "the ear"
              }
            ],
            "explanation": "The final ten words from this theme."
          }
        ]
      },
      {
        "heading": "Clothing & Sizes",
        "body": [
          "All 30 words from Lesson 8's vocabulary section, grouped for review."
        ],
        "checkpoint": [
          {
            "type": "matching",
            "instructions": "Match each word to its meaning (Clothing & Sizes, part 1).",
            "pairs": [
              {
                "left": "la ropa",
                "right": "the clothing"
              },
              {
                "left": "la camisa",
                "right": "the shirt"
              },
              {
                "left": "el pantalón",
                "right": "the pants"
              },
              {
                "left": "el vestido",
                "right": "the dress"
              },
              {
                "left": "la falda",
                "right": "the skirt"
              },
              {
                "left": "el suéter",
                "right": "the sweater"
              },
              {
                "left": "la chaqueta",
                "right": "the jacket"
              },
              {
                "left": "los zapatos",
                "right": "the shoes"
              },
              {
                "left": "las botas",
                "right": "the boots"
              },
              {
                "left": "pequeño",
                "right": "small"
              }
            ],
            "explanation": "The first ten words from this theme."
          },
          {
            "type": "matching",
            "instructions": "Match each word to its meaning (Clothing & Sizes, part 2).",
            "pairs": [
              {
                "left": "mediano",
                "right": "medium"
              },
              {
                "left": "grande",
                "right": "large"
              },
              {
                "left": "quedar bien / mal",
                "right": "to fit well / poorly"
              },
              {
                "left": "ancho",
                "right": "wide / loose"
              },
              {
                "left": "estrecho",
                "right": "narrow / tight"
              },
              {
                "left": "largo",
                "right": "long"
              },
              {
                "left": "corto",
                "right": "short"
              },
              {
                "left": "de moda",
                "right": "in style"
              },
              {
                "left": "cómodo",
                "right": "comfortable"
              },
              {
                "left": "el algodón",
                "right": "cotton"
              }
            ],
            "explanation": "The next ten words from this theme."
          },
          {
            "type": "matching",
            "instructions": "Match each word to its meaning (Clothing & Sizes, part 3).",
            "pairs": [
              {
                "left": "la tela",
                "right": "the fabric"
              },
              {
                "left": "el estilo",
                "right": "the style"
              },
              {
                "left": "elegante",
                "right": "elegant"
              },
              {
                "left": "combinar",
                "right": "to match / pair"
              },
              {
                "left": "el cinturón",
                "right": "the belt"
              },
              {
                "left": "el abrigo",
                "right": "the coat"
              },
              {
                "left": "la bufanda",
                "right": "the scarf"
              },
              {
                "left": "el sombrero",
                "right": "the hat"
              },
              {
                "left": "los guantes",
                "right": "the gloves"
              },
              {
                "left": "las medias",
                "right": "the socks / stockings"
              }
            ],
            "explanation": "The final ten words from this theme."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "matching",
        "instructions": "Match each weather word to its meaning.",
        "pairs": [
          {
            "left": "nublado",
            "right": "cloudy"
          },
          {
            "left": "despejado",
            "right": "clear"
          },
          {
            "left": "húmedo",
            "right": "humid"
          },
          {
            "left": "la tormenta",
            "right": "the storm"
          },
          {
            "left": "el pronóstico",
            "right": "the forecast"
          }
        ],
        "explanation": "These five words describe conditions and forecasts."
      },
      {
        "type": "multiple-choice",
        "question": "¿Qué palabra significa \"the neighbor\"?",
        "options": [
          "el vecino",
          "el barrio",
          "el patio",
          "la infancia"
        ],
        "correctIndex": 0,
        "explanation": "\"El vecino\" means \"the neighbor.\" El barrio is \"the neighborhood.\""
      },
      {
        "type": "multi-select",
        "question": "¿Cuáles palabras se relacionan con la tecnología? (Elige todas las correctas)",
        "options": [
          "descargar",
          "la pantalla",
          "el jarabe",
          "la contraseña"
        ],
        "correctIndexes": [
          0,
          1,
          3
        ],
        "explanation": "\"El jarabe\" (cough syrup) belongs to the health theme, not technology."
      }
    ]
  },
  {
    "slug": "a2-vocabulary-practice-5",
    "level": "A2",
    "number": 63,
    "title": "A2 Vocabulary Practice, Part 5 of 5",
    "summary": "Test yourself on all 300 words from the A2 vocabulary lists, grouped by lesson.",
    "duration": "10 min",
    "sections": [
      {
        "heading": "Work & Future Plans",
        "body": [
          "All 30 words from Lesson 9's vocabulary section, grouped for review."
        ],
        "checkpoint": [
          {
            "type": "matching",
            "instructions": "Match each word to its meaning (Work & Future Plans, part 1).",
            "pairs": [
              {
                "left": "el trabajo",
                "right": "the job"
              },
              {
                "left": "la carrera",
                "right": "the career"
              },
              {
                "left": "el empleo",
                "right": "the employment"
              },
              {
                "left": "la entrevista",
                "right": "the interview"
              },
              {
                "left": "el currículum",
                "right": "the résumé"
              },
              {
                "left": "solicitar",
                "right": "to apply for"
              },
              {
                "left": "contratar",
                "right": "to hire"
              },
              {
                "left": "renunciar",
                "right": "to quit / resign"
              },
              {
                "left": "jubilarse",
                "right": "to retire"
              },
              {
                "left": "la meta",
                "right": "the goal"
              }
            ],
            "explanation": "The first ten words from this theme."
          },
          {
            "type": "matching",
            "instructions": "Match each word to its meaning (Work & Future Plans, part 2).",
            "pairs": [
              {
                "left": "el sueño",
                "right": "the dream"
              },
              {
                "left": "lograr",
                "right": "to achieve"
              },
              {
                "left": "conseguir",
                "right": "to get / obtain"
              },
              {
                "left": "el proyecto",
                "right": "the project"
              },
              {
                "left": "la reunión",
                "right": "the meeting"
              },
              {
                "left": "el jefe / la jefa",
                "right": "the boss"
              },
              {
                "left": "el sueldo",
                "right": "the salary"
              },
              {
                "left": "el horario",
                "right": "the schedule"
              },
              {
                "left": "a tiempo completo",
                "right": "full time"
              },
              {
                "left": "a tiempo parcial",
                "right": "part time"
              }
            ],
            "explanation": "The next ten words from this theme."
          },
          {
            "type": "matching",
            "instructions": "Match each word to its meaning (Work & Future Plans, part 3).",
            "pairs": [
              {
                "left": "trabajar desde casa",
                "right": "to work from home"
              },
              {
                "left": "la oficina",
                "right": "the office"
              },
              {
                "left": "el equipo",
                "right": "the team"
              },
              {
                "left": "ascender",
                "right": "to get promoted"
              },
              {
                "left": "planear",
                "right": "to plan"
              },
              {
                "left": "el compañero de trabajo",
                "right": "the coworker"
              },
              {
                "left": "la capacitación",
                "right": "the training"
              },
              {
                "left": "el beneficio",
                "right": "the benefit"
              },
              {
                "left": "el aumento",
                "right": "the raise"
              },
              {
                "left": "la oportunidad",
                "right": "the opportunity"
              }
            ],
            "explanation": "The final ten words from this theme."
          }
        ]
      },
      {
        "heading": "Health & The Doctor",
        "body": [
          "All 30 words from Lesson 10's vocabulary section, grouped for review."
        ],
        "checkpoint": [
          {
            "type": "matching",
            "instructions": "Match each word to its meaning (Health & The Doctor, part 1).",
            "pairs": [
              {
                "left": "la salud",
                "right": "the health"
              },
              {
                "left": "el doctor / la doctora",
                "right": "the doctor"
              },
              {
                "left": "el consultorio",
                "right": "the doctor's office"
              },
              {
                "left": "la cita",
                "right": "the appointment"
              },
              {
                "left": "el dolor",
                "right": "the pain"
              },
              {
                "left": "doler",
                "right": "to hurt"
              },
              {
                "left": "la fiebre",
                "right": "the fever"
              },
              {
                "left": "la tos",
                "right": "the cough"
              },
              {
                "left": "el resfriado",
                "right": "the cold"
              },
              {
                "left": "la gripe",
                "right": "the flu"
              }
            ],
            "explanation": "The first ten words from this theme."
          },
          {
            "type": "matching",
            "instructions": "Match each word to its meaning (Health & The Doctor, part 2).",
            "pairs": [
              {
                "left": "la receta",
                "right": "the prescription"
              },
              {
                "left": "la medicina",
                "right": "the medicine"
              },
              {
                "left": "la pastilla",
                "right": "the pill"
              },
              {
                "left": "el jarabe",
                "right": "the syrup"
              },
              {
                "left": "la farmacia",
                "right": "the pharmacy"
              },
              {
                "left": "sentirse",
                "right": "to feel"
              },
              {
                "left": "enfermarse",
                "right": "to get sick"
              },
              {
                "left": "mejorar",
                "right": "to improve / get better"
              },
              {
                "left": "empeorar",
                "right": "to get worse"
              },
              {
                "left": "el síntoma",
                "right": "the symptom"
              }
            ],
            "explanation": "The next ten words from this theme."
          },
          {
            "type": "matching",
            "instructions": "Match each word to its meaning (Health & The Doctor, part 3).",
            "pairs": [
              {
                "left": "la alergia",
                "right": "the allergy"
              },
              {
                "left": "respirar",
                "right": "to breathe"
              },
              {
                "left": "la enfermera / el enfermero",
                "right": "the nurse"
              },
              {
                "left": "la herida",
                "right": "the wound"
              },
              {
                "left": "romperse",
                "right": "to break (a bone)"
              },
              {
                "left": "la vacuna",
                "right": "the vaccine"
              },
              {
                "left": "el termómetro",
                "right": "the thermometer"
              },
              {
                "left": "la venda",
                "right": "the bandage"
              },
              {
                "left": "torcerse",
                "right": "to twist / sprain"
              },
              {
                "left": "la sala de emergencias",
                "right": "the emergency room"
              }
            ],
            "explanation": "The final ten words from this theme."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Traduce al español.",
        "source": "the appointment (at the doctor)",
        "answer": "la cita",
        "explanation": "\"La cita\" means \"the appointment.\""
      },
      {
        "type": "matching",
        "instructions": "Match each clothing word to its meaning.",
        "pairs": [
          {
            "left": "la bufanda",
            "right": "the scarf"
          },
          {
            "left": "los guantes",
            "right": "the gloves"
          },
          {
            "left": "el cinturón",
            "right": "the belt"
          },
          {
            "left": "quedar bien",
            "right": "to fit well"
          },
          {
            "left": "de moda",
            "right": "in style"
          }
        ],
        "explanation": "These five words describe clothing and fit."
      },
      {
        "type": "multiple-choice",
        "question": "¿Qué significa \"últimamente\"?",
        "options": [
          "lately",
          "last night",
          "next",
          "each"
        ],
        "correctIndex": 0,
        "explanation": "\"Últimamente\" means \"lately.\""
      }
    ]
  },
  {
    "slug": "a2-comprehensive-review-1",
    "level": "A2",
    "number": 64,
    "title": "A2 Comprehensive Review, Part 1 of 3",
    "summary": "Recap every grammar principle from A2, then take a 34-question final test.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Preterite: Regular Verbs",
        "body": [
          "Completed past actions. -ar → -é, -aste, -ó, -amos, -asteis, -aron. -er/-ir → -í, -iste, -ió, -imos, -isteis, -ieron. Watch spelling changes in -car, -gar, -zar verbs (busqué, llegué, empecé)."
        ]
      },
      {
        "heading": "Preterite: Common Irregulars",
        "body": [
          "Ser/ir share fui, fuiste, fue... The u-stem group (tuve, estuve, pude, puse), i-stem group (hice, quise, vine), and j-stem group (dije, trajeron) all take shared irregular endings."
        ]
      },
      {
        "heading": "The Imperfect Tense",
        "body": [
          "Ongoing, habitual, or background past actions. -ar → -aba endings; -er/-ir → -ía endings. Only ser (era), ir (iba), and ver (veía) are irregular."
        ]
      }
    ],
    "exercises": [
      {
        "type": "fill-blank",
        "prompt": "Conjugate the verb.",
        "sentence": "Yo ___ (llegar) tarde a la reunión.",
        "answer": "llegué",
        "explanation": "Llegar has a spelling change in the yo preterite: llegué."
      },
      {
        "type": "fill-blank",
        "prompt": "Conjugate the verb.",
        "sentence": "Nosotros ___ (vivir) en Chile por dos años.",
        "answer": "vivimos",
        "explanation": "Regular -ir preterite, nosotros form: vivimos."
      },
      {
        "type": "multiple-choice",
        "question": "¿Cuál es la forma correcta de \"hacer\" para \"ellos\" en pretérito?",
        "options": [
          "hicieron",
          "hacieron",
          "hizieron",
          "hicieran"
        ],
        "correctIndex": 0,
        "explanation": "El pretérito irregular de hacer, ellos: hicieron."
      },
      {
        "type": "fill-blank",
        "prompt": "Conjugate the verb.",
        "sentence": "¿___ (tener) tú tiempo para llamarme ayer?",
        "answer": "Tuviste",
        "explanation": "Tener toma la raíz irregular tuv- en el pretérito."
      },
      {
        "type": "multiple-choice",
        "question": "¿Cómo se dice \"they said\"?",
        "options": [
          "dijieron",
          "dijeron",
          "decieron",
          "dijaron"
        ],
        "correctIndex": 1,
        "explanation": "El pretérito de decir, ellos, pierde la i: dijeron."
      },
      {
        "type": "fill-blank",
        "prompt": "Conjugate the verb.",
        "sentence": "De niña, yo ___ (jugar, imperfecto) en el parque todos los días.",
        "answer": "jugaba",
        "explanation": "Acción habitual del pasado: imperfecto."
      },
      {
        "type": "multiple-choice",
        "question": "¿Cuál es la forma irregular de \"ser\" en imperfecto, nosotros?",
        "options": [
          "fuimos",
          "éramos",
          "seríamos",
          "somos"
        ],
        "correctIndex": 1,
        "explanation": "El imperfecto de ser, nosotros: éramos."
      },
      {
        "type": "fill-blank",
        "prompt": "Conjugate the verb.",
        "sentence": "Nosotros ___ (ir, imperfecto) a la playa cada verano.",
        "answer": "íbamos",
        "explanation": "Ir es uno de los tres verbos irregulares en el imperfecto: íbamos."
      },
      {
        "type": "multiple-choice",
        "question": "¿Qué tiempo verbal describe una acción interrumpida en progreso?",
        "options": [
          "El pretérito",
          "El imperfecto",
          "El futuro",
          "El presente"
        ],
        "correctIndex": 1,
        "explanation": "El imperfecto describe la acción en progreso que fue interrumpida."
      },
      {
        "type": "fill-blank",
        "prompt": "Elige el tiempo correcto.",
        "sentence": "___ (llover, imperfecto) cuando salimos de casa.",
        "answer": "Llovía",
        "explanation": "La lluvia continua en el fondo va en imperfecto."
      },
      {
        "type": "multi-select",
        "question": "¿Qué palabras señalan el pretérito? (Elige todas las correctas)",
        "options": [
          "ayer",
          "siempre",
          "de repente",
          "anoche"
        ],
        "correctIndexes": [
          0,
          2,
          3
        ],
        "explanation": "\"Siempre\" señala una acción habitual: imperfecto."
      },
      {
        "type": "fill-blank",
        "prompt": "Reemplaza el objeto directo.",
        "sentence": "¿Compraste el pan? Sí, ___ compré.",
        "answer": "lo",
        "explanation": "\"El pan\" es masculino singular: lo."
      },
      {
        "type": "multiple-choice",
        "question": "¿Cuál es correcto?",
        "options": [
          "Voy a leerlo.",
          "Voy a lo leer.",
          "Lo voy leer a.",
          "Voy leerlo a."
        ],
        "correctIndex": 0,
        "explanation": "El pronombre puede unirse al infinitivo: leerlo."
      }
    ]
  },
  {
    "slug": "a2-comprehensive-review-2",
    "level": "A2",
    "number": 65,
    "title": "A2 Comprehensive Review, Part 2 of 3",
    "summary": "Recap every grammar principle from A2, then take a 34-question final test.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Preterite vs. Imperfect",
        "body": [
          "Imperfect sets the scene; preterite moves the story forward. Signal words like ayer and de repente point to preterite; siempre and mientras point to imperfect."
        ]
      },
      {
        "heading": "Direct Object Pronouns",
        "body": [
          "Me, te, lo/la, nos, os, los/las replace a direct object, matching its gender and number. They go before a conjugated verb, or attach to an infinitive/gerund."
        ]
      },
      {
        "heading": "Indirect Object Pronouns",
        "body": [
          "Me, te, le, nos, os, les say to/for whom something happens. Le and les don't change for gender — a clarifying \"a + person\" phrase is often added."
        ]
      }
    ],
    "exercises": [
      {
        "type": "fill-blank",
        "prompt": "Reemplaza el objeto directo.",
        "sentence": "¿Ves a mis primas? Sí, ___ veo.",
        "answer": "las",
        "explanation": "\"Mis primas\" es femenino plural: las."
      },
      {
        "type": "fill-blank",
        "prompt": "Elige el pronombre de objeto indirecto correcto.",
        "sentence": "___ escribo un correo a mi jefe. (a él)",
        "answer": "Le",
        "explanation": "\"A él\" corresponde al pronombre le."
      },
      {
        "type": "multiple-choice",
        "question": "¿Cuál verbo casi siempre lleva objeto indirecto?",
        "options": [
          "correr",
          "dormir",
          "prestar",
          "nadar"
        ],
        "correctIndex": 2,
        "explanation": "\"Prestar\" (to lend) casi siempre involucra a quién se le presta algo."
      },
      {
        "type": "fill-blank",
        "prompt": "Conjugate the reflexive verb.",
        "sentence": "Yo ___ (despertarse) muy temprano los lunes.",
        "answer": "me despierto",
        "explanation": "Despertarse: e→ie, más el pronombre reflexivo me."
      },
      {
        "type": "multiple-choice",
        "question": "¿Cuál oración es reflexiva?",
        "options": [
          "Lavo el carro.",
          "Me lavo las manos.",
          "Lavamos la ropa.",
          "Lavan los platos."
        ],
        "correctIndex": 1,
        "explanation": "\"Me lavo\" indica que la acción recae sobre el propio sujeto."
      },
      {
        "type": "fill-blank",
        "prompt": "Conjugate the reflexive verb.",
        "sentence": "Ellos ___ (acostarse) muy tarde los viernes.",
        "answer": "se acuestan",
        "explanation": "Acostarse: o→ue, más el pronombre reflexivo se."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la comparación.",
        "sentence": "Mi casa es ___ grande como la tuya. (as...as)",
        "answer": "tan",
        "explanation": "Tan...como compara cualidades iguales: tan llena el hueco y como se queda fijo."
      },
      {
        "type": "multiple-choice",
        "question": "¿Cómo se dice \"older\" (comparativo irregular)?",
        "options": [
          "más viejo",
          "mayor",
          "más grande",
          "menos joven"
        ],
        "correctIndex": 1,
        "explanation": "\"Mayor\" es el comparativo irregular de viejo cuando se habla de edad."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa el superlativo.",
        "sentence": "Este es ___ restaurante más caro de la ciudad.",
        "answer": "el",
        "explanation": "El artículo concuerda con \"restaurante\", masculino: el."
      },
      {
        "type": "multi-select",
        "question": "¿Qué adjetivos tienen comparativos irregulares? (Elige todas las correctas)",
        "options": [
          "bueno",
          "malo",
          "barato",
          "joven"
        ],
        "correctIndexes": [
          0,
          1,
          3
        ],
        "explanation": "\"Barato\" es regular: más barato."
      },
      {
        "type": "fill-blank",
        "prompt": "Conjugate the verb in the future.",
        "sentence": "Mañana yo ___ (llamar) al médico.",
        "answer": "llamaré",
        "explanation": "El futuro regular agrega -é al infinitivo: llamaré."
      },
      {
        "type": "multiple-choice",
        "question": "¿Cuál es la raíz irregular de \"poner\" en futuro?",
        "options": [
          "pon-",
          "pond-",
          "pondr-",
          "pun-"
        ],
        "correctIndex": 2,
        "explanation": "El futuro irregular de poner usa la raíz pondr-: pondré, pondrás..."
      }
    ]
  },
  {
    "slug": "a2-comprehensive-review-3",
    "level": "A2",
    "number": 66,
    "title": "A2 Comprehensive Review, Part 3 of 3",
    "summary": "Recap every grammar principle from A2, then take a 34-question final test.",
    "duration": "9 min",
    "sections": [
      {
        "heading": "Reflexive Verbs & Daily Routine",
        "body": [
          "Reflexive verbs (levantarse, ducharse, vestirse...) use me/te/se/nos/os/se because the subject acts on itself. Many verbs shift meaning with se: lavar vs. lavarse."
        ]
      },
      {
        "heading": "Comparisons & Superlatives",
        "body": [
          "Más/menos...que compares inequality; tan/tanto...como compares equality. Bueno/malo/viejo/joven have irregular comparatives: mejor, peor, mayor, menor. Superlatives use el/la/los/las + más/menos + de."
        ]
      },
      {
        "heading": "The Future Tense",
        "body": [
          "Regular futures add -é, -ás, -á, -emos, -éis, -án straight to the infinitive. A handful of verbs use irregular stems: tendr-, pondr-, saldr-, vendr-, dir-, har-, podr-, querr-, sabr-, habr-."
        ]
      },
      {
        "heading": "Por vs. Para",
        "body": [
          "Para: destination, deadline, purpose, recipient. Por: duration, cause, exchange, movement through. Fixed expressions like por favor and por supuesto always use por."
        ]
      }
    ],
    "exercises": [
      {
        "type": "fill-blank",
        "prompt": "Conjugate the verb in the future.",
        "sentence": "¿Qué ___ (hacer) tú este fin de semana?",
        "answer": "harás",
        "explanation": "El futuro irregular de hacer usa la raíz har-: harás."
      },
      {
        "type": "multiple-choice",
        "question": "¿Qué expresión se usa típicamente con el futuro?",
        "options": [
          "ayer",
          "anoche",
          "algún día",
          "de niño"
        ],
        "correctIndex": 2,
        "explanation": "\"Algún día\" (someday) apunta hacia el futuro."
      },
      {
        "type": "fill-blank",
        "prompt": "Elige por o para.",
        "sentence": "Este regalo es ___ mi mamá.",
        "answer": "para",
        "explanation": "\"Para\" indica el destinatario del regalo."
      },
      {
        "type": "multiple-choice",
        "question": "¿Qué preposición expresa duración de tiempo?",
        "options": [
          "para",
          "por",
          "las dos",
          "ninguna"
        ],
        "correctIndex": 1,
        "explanation": "\"Por\" expresa duración: estudié por tres horas."
      },
      {
        "type": "fill-blank",
        "prompt": "Elige por o para.",
        "sentence": "Salimos ___ Barcelona el lunes.",
        "answer": "para",
        "explanation": "\"Para\" indica un destino."
      },
      {
        "type": "multi-select",
        "question": "¿Qué expresiones fijas usan \"por\"? (Elige todas las correctas)",
        "options": [
          "por favor",
          "por eso",
          "para siempre",
          "por fin"
        ],
        "correctIndexes": [
          0,
          1,
          3
        ],
        "explanation": "\"Para siempre\" (forever) usa para, no por."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras.",
        "words": [
          "Cuando",
          "era",
          "niño,",
          "vivía",
          "en",
          "una",
          "granja"
        ],
        "explanation": "Imperfecto para descripción de fondo de la niñez.",
        "translation": "When I was a boy, I lived on a farm."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras.",
        "words": [
          "Ayer",
          "compré",
          "un",
          "regalo",
          "para",
          "mi",
          "hermano"
        ],
        "explanation": "Pretérito para una acción completa y puntual.",
        "translation": "Yesterday I bought a gift for my brother."
      },
      {
        "type": "translate",
        "direction": "es-en",
        "prompt": "Translate this sentence to English.",
        "source": "Cuando tenía diez años, mis padres me llevaban a la playa todos los veranos.",
        "answer": "When I was ten years old, my parents used to take me to the beach every summer.",
        "explanation": "Tenía and llevaban are both imperfect — describing an ongoing childhood habit."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Translate this sentence to Spanish.",
        "source": "I will call you tomorrow because I need to ask you something.",
        "answer": "Te llamaré mañana porque necesito preguntarte algo.",
        "explanation": "Llamaré is the regular future of llamar; te is the direct object pronoun.",
        "altAnswers": [
          "Te voy a llamar mañana porque necesito preguntarte algo."
        ]
      },
      {
        "type": "matching",
        "instructions": "Match each irregular preterite verb to its yo form.",
        "pairs": [
          {
            "left": "tener",
            "right": "tuve"
          },
          {
            "left": "hacer",
            "right": "hice"
          },
          {
            "left": "decir",
            "right": "dije"
          },
          {
            "left": "estar",
            "right": "estuve"
          },
          {
            "left": "venir",
            "right": "vine"
          }
        ],
        "explanation": "These five irregular preterite stems come up constantly in storytelling."
      }
    ]
  },
  {
    "slug": "first-day-new-school",
    "level": "A2",
    "number": 67,
    "title": "El primer día en la escuela nueva",
    "summary": "A girl who just moved to a new city feels nervous on her first day, until a classmate who loves drawing sits with her at recess.",
    "duration": "5 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Marta se despierta muy temprano. Hoy es su primer día en la escuela nueva. Su familia se mudó a una ciudad diferente el mes pasado, y Marta todavía no conoce a nadie. Ella está nerviosa y no quiere desayunar.",
          "Su mamá la lleva a la escuela en carro. Durante el viaje, Marta mira por la ventana y piensa en su escuela antigua. Allí tenía muchos amigos y conocía todos los pasillos. Ahora todo es nuevo y diferente.",
          "Cuando Marta entra en la clase, todos los estudiantes la miran. La profesora, la señora López, le sonríe y dice: \"Clase, esta es Marta. Es nueva en la escuela.\" Marta se sienta en una silla vacía cerca de la ventana.",
          "En el recreo, Marta come sola en el patio. De repente, un chico se acerca. Se llama Diego y tiene una carpeta llena de dibujos. \"¿Puedo sentarme aquí?\", pregunta. Marta dice que sí y le muestra su propio cuaderno de dibujos.",
          "Diego mira los dibujos de Marta y dice: \"¡Son fantásticos! ¿Te gusta dibujar animales?\" Marta sonríe por primera vez ese día. Los dos hablan sobre sus dibujos favoritos y descubren que a ambos les gusta el arte.",
          "Después del recreo, Diego invita a Marta a sentarse con su grupo de amigos en el almuerzo. Marta conoce a otros tres estudiantes: Ana, Pablo y Sofía. Todos son simpáticos y hacen muchas preguntas sobre su ciudad antigua.",
          "Al final del día, Marta camina hacia el carro de su mamá con una sonrisa grande. \"¿Cómo estuvo tu primer día?\", pregunta su mamá. \"Fue difícil por la mañana, pero ahora tengo nuevos amigos,\" responde Marta. \"Se llaman Diego, Ana, Pablo y Sofía.\"",
          "Esa noche, Marta escribe en su diario sobre su nuevo amigo Diego y sus dibujos. Piensa que quizás la escuela nueva no es tan mala. Mañana va a llevar más dibujos para mostrarle a Diego y a sus nuevos amigos."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "What does Marta not want to do because she is nervous?",
        "options": [
          "Talk to her mom",
          "Eat breakfast",
          "Wear her uniform",
          "Take the bus"
        ],
        "correctIndex": 1,
        "explanation": "The text says \"Ella está nerviosa y no quiere desayunar\" — she is nervous and doesn't want to eat breakfast."
      },
      {
        "type": "multiple-choice",
        "question": "Who approaches Marta at recess?",
        "options": [
          "Her teacher",
          "A boy named Diego",
          "Her mom",
          "A girl named Ana"
        ],
        "correctIndex": 1,
        "explanation": "\"un chico se acerca. Se llama Diego\" — a boy named Diego approaches her."
      },
      {
        "type": "multiple-choice",
        "question": "What do Marta and Diego discover they have in common?",
        "options": [
          "They both play soccer",
          "They both like drawing",
          "They both are new students",
          "They both live nearby"
        ],
        "correctIndex": 1,
        "explanation": "They talk about their drawings and \"descubren que a ambos les gusta el arte\" — they discover they both like art."
      }
    ]
  },
  {
    "slug": "lost-dog-kind-stranger",
    "level": "A2",
    "number": 68,
    "title": "El perro perdido",
    "summary": "A boy's dog runs off in the park chasing a cat, and a kind stranger who finds him helps reunite the family.",
    "duration": "6 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Tomás tiene un perro pequeño y marrón que se llama Toby. Todos los días, Tomás pasea a Toby por el parque cerca de su casa. Toby es muy juguetón y le gusta correr detrás de las pelotas.",
          "Un sábado por la tarde, Tomás lleva a Toby al parque como siempre. De repente, un gato cruza el camino y Toby corre muy rápido detrás de él. Tomás grita \"¡Toby, vuelve!\", pero el perro no lo escucha y desaparece entre los árboles.",
          "Tomás busca a Toby por todo el parque, pero no lo encuentra. Está muy triste y empieza a llorar. Su hermana lo ayuda a hacer carteles con una foto de Toby para poner en las calles del barrio.",
          "Mientras tanto, una mujer llamada Rosa camina por su jardín y ve un perro pequeño y marrón cerca de su casa. El perro tiene hambre y está asustado. Rosa le da un poco de agua y comida, y el perro se calma poco a poco.",
          "Rosa mira el collar del perro y ve un número de teléfono. Ella llama inmediatamente a la familia de Tomás. \"Encontré a un perro marrón con un collar azul,\" dice Rosa. \"Creo que es de ustedes.\"",
          "La mamá de Tomás recibe la llamada y le dice a Tomás la buena noticia. Toda la familia va rápidamente a la casa de Rosa. Cuando Tomás ve a Toby, corre hacia él y lo abraza fuerte. Toby mueve la cola con mucha alegría.",
          "Tomás le da las gracias a Rosa muchas veces. \"Usted es muy amable,\" dice Tomás. Rosa sonríe y responde: \"Me gustan mucho los animales. Estoy feliz de ayudar.\" La familia de Tomás decide invitar a Rosa a tomar un café la próxima semana.",
          "Desde ese día, Tomás siempre pone un collar más seguro en Toby y nunca lo deja correr sin correa en el parque. También visita a Rosa de vez en cuando con Toby, y los dos se hacen buenos amigos del barrio."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "Why does Toby run away from Tomás?",
        "options": [
          "He hears a loud noise",
          "He chases a cat",
          "He sees another dog",
          "He runs after a ball"
        ],
        "correctIndex": 1,
        "explanation": "\"un gato cruza el camino y Toby corre muy rápido detrás de él\" — a cat crosses the path and Toby runs fast after it."
      },
      {
        "type": "multiple-choice",
        "question": "How does Rosa figure out how to contact Tomás's family?",
        "options": [
          "A neighbor recognizes the dog",
          "She sees a poster",
          "She reads the phone number on his collar",
          "She asks people in the park"
        ],
        "correctIndex": 2,
        "explanation": "\"Rosa mira el collar del perro y ve un número de teléfono\" — Rosa looks at the dog's collar and sees a phone number."
      },
      {
        "type": "multiple-choice",
        "question": "What does Tomás do differently after this experience?",
        "options": [
          "He never walks Toby again",
          "He gets a new dog",
          "He puts a more secure collar on Toby and never lets him run off-leash",
          "He moves to a new house"
        ],
        "correctIndex": 2,
        "explanation": "\"Tomás siempre pone un collar más seguro en Toby y nunca lo deja correr sin correa\" — he always puts a safer collar on Toby and never lets him run without a leash."
      }
    ]
  },
  {
    "slug": "class-camping-trip",
    "level": "A2",
    "number": 69,
    "title": "El campamento de la clase",
    "summary": "A class trip to the mountains includes tricky tents, campfire stories, and an unexpected rainy morning.",
    "duration": "6 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "La clase de la señora Vidal va de campamento por dos días a las montañas. Todos los estudiantes están muy emocionados porque es su primer viaje sin sus padres. Cada estudiante lleva una mochila con ropa, una linterna y un saco de dormir.",
          "El autobús llega al bosque después de dos horas de viaje. Los estudiantes bajan del autobús y ven árboles altos y un lago azul. \"¡Es hermoso!\", dice Carla, mirando el paisaje. La profesora organiza a los estudiantes en grupos pequeños.",
          "Cada grupo tiene que armar su propia tienda de campaña. Al principio, es difícil para todos. Marco y su grupo no entienden las instrucciones, y la tienda se cae dos veces. Al final, con la ayuda de un guía, todas las tiendas están listas antes de la noche.",
          "Por la tarde, los estudiantes caminan por un sendero cerca del lago. Ven pájaros de colores y aprenden los nombres de varias plantas. El guía les explica cómo identificar las huellas de los animales en la tierra.",
          "Cuando llega la noche, todos se sientan alrededor de una fogata grande. La profesora cocina malvaviscos y los estudiantes cuentan historias divertidas. Carla canta una canción y todos la acompañan. El cielo está lleno de estrellas y nadie quiere dormir todavía.",
          "A la mañana siguiente, empieza a llover mucho. Los estudiantes tienen que quedarse dentro de las tiendas. Al principio están tristes porque no pueden caminar por el bosque, pero después juegan a las cartas y cuentan chistes dentro de la tienda.",
          "Por la tarde, la lluvia para y sale el sol. Todos salen de las tiendas y juegan un partido de fútbol en un campo cerca del lago. Marco anota el gol de la victoria y todo el grupo celebra con mucha alegría.",
          "Cuando el autobús regresa a la escuela, los estudiantes están cansados pero muy contentos. \"Fue el mejor viaje de mi vida,\" dice Marco. La señora Vidal sonríe y dice que el próximo año van a organizar otro campamento todavía más grande."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "What problem does Marco's group have while setting up camp?",
        "options": [
          "They lose their flashlight",
          "Their tent falls down twice",
          "They get lost on the trail",
          "They forget their sleeping bags"
        ],
        "correctIndex": 1,
        "explanation": "\"la tienda se cae dos veces\" — the tent falls down twice."
      },
      {
        "type": "multiple-choice",
        "question": "What do the students do when it starts raining the next morning?",
        "options": [
          "They go home early",
          "They play cards and tell jokes inside the tent",
          "They keep hiking anyway",
          "They build a fire inside the tent"
        ],
        "correctIndex": 1,
        "explanation": "\"juegan a las cartas y cuentan chistes dentro de la tienda\" — they play cards and tell jokes inside the tent."
      },
      {
        "type": "multiple-choice",
        "question": "Who scores the winning goal in the soccer match?",
        "options": [
          "Carla",
          "The teacher",
          "Marco",
          "The guide"
        ],
        "correctIndex": 2,
        "explanation": "\"Marco anota el gol de la victoria\" — Marco scores the winning goal."
      }
    ]
  },
  {
    "slug": "sibling-rivalry-resolved",
    "level": "A2",
    "number": 70,
    "title": "Los hermanos competitivos",
    "summary": "Two siblings who compete over everything are forced to team up on a science project — and discover they work well together.",
    "duration": "5 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Lucía y Mateo son hermanos, pero siempre compiten por todo. Compiten por quién come más rápido, quién corre más rápido y quién saca mejores notas en la escuela. Sus padres están cansados de las peleas constantes entre ellos.",
          "Un día, la profesora anuncia un proyecto especial de ciencias. Los estudiantes tienen que trabajar en parejas y construir un modelo del sistema solar. La profesora decide las parejas, y Lucía y Mateo tienen que trabajar juntos.",
          "Al principio, los dos hermanos no están contentos. \"Yo quiero hacer el sol,\" dice Lucía. \"No, yo quiero hacer el sol,\" responde Mateo. Discuten durante media hora sin decidir nada, y no empiezan el proyecto.",
          "Esa noche, su papá habla con ellos. \"Ustedes son un buen equipo cuando no compiten,\" dice. \"¿Por qué no prueban a trabajar juntos por una vez?\" Lucía y Mateo se miran y deciden intentarlo.",
          "Al día siguiente, dividen las tareas de una manera diferente. Lucía pinta los planetas porque le gusta el arte. Mateo escribe la información sobre cada planeta porque le gusta leer y escribir. Los dos trabajan en la mesa de la cocina toda la tarde.",
          "Poco a poco, los hermanos empiezan a hablar sin pelear. Mateo ayuda a Lucía a pintar las líneas de Saturno, y Lucía le da ideas a Mateo para su presentación. Los dos se ríen cuando el planeta Marte se cae de la mesa.",
          "El día de la presentación, Lucía y Mateo muestran su modelo del sistema solar a toda la clase. Es el proyecto más colorido y organizado del salón. La profesora les da la nota más alta de la clase.",
          "Después de la escuela, Lucía y Mateo caminan juntos a casa con el modelo. \"Trabajamos bien juntos,\" dice Mateo. \"Sí, deberíamos hacerlo más,\" responde Lucía. Desde ese día, los hermanos todavía compiten un poco, pero también se ayudan mucho más."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "Why are Lucía and Mateo unhappy when the project starts?",
        "options": [
          "They don't like science",
          "They both want to paint the sun",
          "The teacher separates them",
          "They don't have enough supplies"
        ],
        "correctIndex": 1,
        "explanation": "\"Yo quiero hacer el sol\" dice Lucía, and Mateo says the same thing — they both want to make the sun."
      },
      {
        "type": "multiple-choice",
        "question": "Who convinces them to try working together?",
        "options": [
          "Their teacher",
          "Their father",
          "Their friend",
          "Nobody, they figure it out alone"
        ],
        "correctIndex": 1,
        "explanation": "\"su papá habla con ellos\" and suggests they try working together — their dad talks to them."
      },
      {
        "type": "multiple-choice",
        "question": "What grade do they get on the project?",
        "options": [
          "A failing grade",
          "An average grade",
          "The highest grade in the class",
          "They don't finish in time"
        ],
        "correctIndex": 2,
        "explanation": "\"La profesora les da la nota más alta de la clase\" — the teacher gives them the highest grade in the class."
      }
    ]
  },
  {
    "slug": "road-trip-car-trouble",
    "level": "A2",
    "number": 71,
    "title": "El viaje en carro",
    "summary": "A family's car breaks down on the way to the beach, and the kind strangers who help them turn a bad day into a memorable one.",
    "duration": "5 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "La familia Ramírez sale de vacaciones a la playa. El viaje dura seis horas en carro, y todos están emocionados. Los dos hijos, Elena y Javier, juegan videojuegos en el asiento trasero y cantan canciones con sus padres.",
          "Después de tres horas de viaje, el carro empieza a hacer un ruido extraño. El papá, Roberto, mira el motor con cara de preocupación. \"Creo que tenemos un problema,\" dice. El carro para completamente en una carretera pequeña, lejos de la ciudad.",
          "La familia no tiene señal de teléfono y no sabe qué hacer. Javier está nervioso porque no hay nadie cerca. Después de veinte minutos, un camión pasa por la carretera y el conductor para para ayudar.",
          "El conductor se llama Carlos y vive en un pueblo pequeño cerca de allí. \"Puedo llevarlos al taller de mi primo,\" dice Carlos. La familia sube al camión con las maletas, y Carlos los lleva al pueblo.",
          "El taller está cerrado los domingos, pero el mecánico, que se llama Pedro, vive al lado y decide ayudar de todas formas. Pedro revisa el motor y encuentra el problema rápidamente. \"Necesito una pieza nueva, pero la tengo en mi taller,\" dice.",
          "Mientras Pedro repara el carro, la familia camina por el pueblo. Descubren una plaza pequeña con una heladería y compran helados de chocolate. Elena habla con unos niños del pueblo y juegan a la pelota en la plaza.",
          "Después de dos horas, Pedro termina de reparar el carro. \"Ya está listo,\" dice con una sonrisa. Roberto le paga y le da las gracias muchas veces. La familia también le da las gracias a Carlos por su ayuda.",
          "Finalmente, la familia llega a la playa por la noche, más tarde de lo planeado. Pero todos están de buen humor. \"El problema del carro fue malo, pero conocimos a personas muy buenas,\" dice la mamá. Elena está de acuerdo: fue un día diferente, pero divertido."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "What does Carlos do when he sees the family stranded?",
        "options": [
          "He calls the police",
          "He stops his truck to help",
          "He drives away",
          "He takes their picture"
        ],
        "correctIndex": 1,
        "explanation": "\"un camión pasa por la carretera y el conductor para para ayudar\" — a truck passes and the driver stops to help."
      },
      {
        "type": "multiple-choice",
        "question": "Why is it notable that Pedro fixes the car?",
        "options": [
          "He is not actually a mechanic",
          "The shop is closed but he helps anyway",
          "He charges too much money",
          "He refuses at first"
        ],
        "correctIndex": 1,
        "explanation": "\"El taller está cerrado los domingos... y decide ayudar de todas formas\" — the shop is closed on Sundays but he decides to help anyway."
      },
      {
        "type": "multiple-choice",
        "question": "What does the family do while waiting for the repair?",
        "options": [
          "They sleep in the truck",
          "They walk around town and buy ice cream",
          "They call another mechanic",
          "They go back to the car"
        ],
        "correctIndex": 1,
        "explanation": "\"Descubren una plaza pequeña con una heladería y compran helados de chocolate\" — they discover a small plaza with an ice cream shop and buy chocolate ice cream."
      }
    ]
  },
  {
    "slug": "talent-show-performance",
    "level": "A2",
    "number": 72,
    "title": "El show de talentos",
    "summary": "A girl who only sings alone in her room musters the courage to perform in front of the whole school.",
    "duration": "5 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Valentina quiere participar en el show de talentos de su escuela. A ella le encanta cantar, pero solo canta en su habitación, nunca delante de otras personas. Su mejor amiga, Camila, la anima a inscribirse en el show.",
          "\"Tienes una voz hermosa,\" dice Camila. \"Todos van a amar tu canción.\" Valentina está nerviosa, pero finalmente decide participar. Escribe su nombre en la lista y elige una canción sobre la amistad.",
          "Durante las siguientes dos semanas, Valentina practica todos los días después de la escuela. Camila la escucha y le da consejos. A veces Valentina quiere abandonar porque tiene miedo de olvidar la letra en frente de todos.",
          "La noche del show de talentos, el auditorio está lleno de estudiantes, profesores y padres. Valentina espera detrás del escenario con las manos frías y el corazón acelerado. Ve a otros estudiantes bailar, tocar el piano y hacer magia.",
          "Cuando el presentador dice su nombre, Valentina camina hacia el escenario muy despacio. Mira al público y ve a Camila en la primera fila, sonriendo y levantando el pulgar. Eso le da un poco de confianza.",
          "La música empieza, y Valentina abre la boca para cantar. Al principio, su voz tiembla un poco, pero luego se relaja y canta con todo su corazón. El público escucha en silencio y algunos empiezan a sonreír.",
          "Cuando termina la canción, todo el auditorio aplaude fuerte. Algunas personas se levantan de sus sillas. Valentina no puede creer lo que está pasando. Baja del escenario con una sonrisa enorme en la cara.",
          "Después del show, Camila corre a abrazarla. \"¡Estuviste increíble!\", dice. Valentina responde: \"No pude hacerlo sin ti.\" Esa noche, Valentina decide que quiere cantar en más shows en el futuro, y ya no tiene tanto miedo del escenario."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "Where does Valentina normally sing before the show?",
        "options": [
          "At school assemblies",
          "Only in her room",
          "At family parties",
          "In the school choir"
        ],
        "correctIndex": 1,
        "explanation": "\"solo canta en su habitación, nunca delante de otras personas\" — she only sings in her room, never in front of other people."
      },
      {
        "type": "multiple-choice",
        "question": "Who encourages Valentina to sign up for the talent show?",
        "options": [
          "Her mom",
          "Her teacher",
          "Camila, her best friend",
          "The presenter"
        ],
        "correctIndex": 2,
        "explanation": "\"Su mejor amiga, Camila, la anima a inscribirse en el show\" — her best friend Camila encourages her to sign up."
      },
      {
        "type": "multiple-choice",
        "question": "What does Camila do during Valentina's performance that helps her?",
        "options": [
          "She sings along loudly",
          "She sits in the front row smiling and giving a thumbs up",
          "She records a video",
          "She waits backstage"
        ],
        "correctIndex": 1,
        "explanation": "Valentina sees Camila \"en la primera fila, sonriendo y levantando el pulgar\" — in the front row, smiling and giving a thumbs up."
      }
    ]
  },
  {
    "slug": "science-fair-project",
    "level": "A2",
    "number": 73,
    "title": "La feria de ciencias",
    "summary": "Two classmates test how light affects plant growth and learn that a clear presentation matters as much as winning first place.",
    "duration": "6 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Andrés y su compañera de clase, Julia, tienen que hacer un proyecto para la feria de ciencias. Deciden estudiar cómo crecen las plantas con diferentes tipos de luz. Compran tres plantas pequeñas y las ponen en lugares diferentes de la casa de Andrés.",
          "La primera planta está cerca de la ventana con mucha luz del sol. La segunda planta está en una habitación con poca luz. La tercera planta está en un armario oscuro, sin luz. Andrés y Julia riegan las tres plantas todos los días.",
          "Durante dos semanas, los dos amigos escriben notas sobre el crecimiento de cada planta. La planta con mucha luz crece rápido y tiene hojas verdes y grandes. La planta con poca luz crece más despacio. La planta sin luz empieza a ponerse amarilla.",
          "Una semana antes de la feria, Julia se pone nerviosa. \"Nuestras fotos no son muy claras,\" dice. \"Necesitamos un cartel mejor.\" Los dos deciden hacer un cartel nuevo con fotos más grandes y gráficos de colores para mostrar los resultados.",
          "El día antes de la feria, Andrés practica su presentación frente al espejo. Explica por qué las plantas necesitan luz para crecer bien. Julia practica también, y los dos se ayudan a recordar todos los detalles importantes.",
          "El día de la feria, muchos estudiantes muestran sus proyectos en el gimnasio de la escuela. Hay proyectos sobre volcanes, robots y el clima. Andrés y Julia ponen sus tres plantas en la mesa junto con su cartel colorido.",
          "Los jueces caminan por el gimnasio y hacen preguntas a cada estudiante. Cuando llegan a la mesa de Andrés y Julia, los dos explican su experimento con mucha confianza. Los jueces sonríen y anotan algo en su lista.",
          "Al final del día, el director anuncia los ganadores. Andrés y Julia no ganan el primer premio, pero reciben una mención especial por su presentación clara. Los dos están felices porque aprendieron mucho sobre las plantas y trabajaron muy bien en equipo."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "What do Andrés and Julia test in their experiment?",
        "options": [
          "How much water plants need",
          "How light affects plant growth",
          "How music affects plants",
          "How soil type affects plants"
        ],
        "correctIndex": 1,
        "explanation": "\"Deciden estudiar cómo crecen las plantas con diferentes tipos de luz\" — they decide to study how plants grow with different types of light."
      },
      {
        "type": "multiple-choice",
        "question": "What happens to the plant kept without any light?",
        "options": [
          "It grows the fastest",
          "It turns yellow",
          "It grows flowers",
          "Nothing changes"
        ],
        "correctIndex": 1,
        "explanation": "\"La planta sin luz empieza a ponerse amarilla\" — the plant without light starts turning yellow."
      },
      {
        "type": "multiple-choice",
        "question": "What do they receive at the end of the fair?",
        "options": [
          "First prize",
          "Nothing at all",
          "A special mention for their clear presentation",
          "A trip to a science museum"
        ],
        "correctIndex": 2,
        "explanation": "\"reciben una mención especial por su presentación clara\" — they receive a special mention for their clear presentation."
      }
    ]
  },
  {
    "slug": "museum-trip",
    "level": "A2",
    "number": 74,
    "title": "La visita al museo",
    "summary": "A boy gets so absorbed by a dinosaur skeleton that he loses track of his class, but a kind museum guide helps him.",
    "duration": "6 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "La clase de historia del señor Fernández visita el museo de la ciudad. El museo tiene salas de dinosaurios, arte antiguo y objetos de diferentes países. Los estudiantes caminan en fila detrás del profesor, pero Bruno está muy emocionado por ver los dinosaurios.",
          "Cuando el grupo entra en la sala de dinosaurios, Bruno se queda mirando un esqueleto enorme. Es el más grande que ha visto en su vida. Lee cada palabra del cartel y no se da cuenta de que su clase ya sale de la sala.",
          "Unos minutos después, Bruno mira a su alrededor y no ve a nadie de su clase. Empieza a sentirse un poco asustado. Camina por varios pasillos, pero no encuentra a sus compañeros ni a su profesor.",
          "Una guía del museo, llamada Marisol, ve a Bruno solo cerca de la sala de arte. \"¿Estás perdido?\", le pregunta con voz amable. Bruno le explica que perdió a su clase mientras miraba los dinosaurios.",
          "Marisol saca su radio y habla con otros trabajadores del museo. \"Tenemos un estudiante perdido de la escuela San Martín,\" dice. Mientras esperan noticias, Marisol le muestra a Bruno una sala con objetos de Egipto antiguo para calmarlo.",
          "Después de diez minutos, otro trabajador encuentra al señor Fernández, que está buscando a Bruno con mucha preocupación. El profesor corre hacia la sala de Egipto y abraza a Bruno con alivio. \"¡No puedes separarte del grupo así!\", le dice, pero también está feliz de encontrarlo.",
          "Bruno le da las gracias a Marisol por su ayuda y le pregunta sobre los dinosaurios. Marisol le cuenta datos interesantes sobre el esqueleto que él estaba mirando. Bruno escucha con mucha atención y hace muchas preguntas más.",
          "Al final de la visita, Bruno camina siempre cerca de su profesor. En el autobús de regreso a la escuela, le cuenta a sus amigos toda la aventura. \"Me perdí, pero conocí a una guía muy simpática que sabe todo sobre dinosaurios,\" dice con una sonrisa."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "Why does Bruno get separated from his class?",
        "options": [
          "He goes to the bathroom",
          "He is absorbed reading about a dinosaur skeleton and doesn't notice the class leave",
          "He falls asleep on a bench",
          "He decides to leave early"
        ],
        "correctIndex": 1,
        "explanation": "\"Lee cada palabra del cartel y no se da cuenta de que su clase ya sale de la sala\" — he reads every word of the sign and doesn't notice his class already leaving."
      },
      {
        "type": "multiple-choice",
        "question": "Who helps Bruno while he is lost?",
        "options": [
          "A security guard",
          "A museum guide named Marisol",
          "Another student",
          "His teacher immediately"
        ],
        "correctIndex": 1,
        "explanation": "\"Una guía del museo, llamada Marisol, ve a Bruno solo\" — a museum guide named Marisol sees Bruno alone."
      },
      {
        "type": "multiple-choice",
        "question": "How does Mr. Fernández react when he finds Bruno?",
        "options": [
          "He is angry and ignores him",
          "He hugs him with relief but tells him not to separate from the group",
          "He doesn't notice anything wrong",
          "He sends Bruno home"
        ],
        "correctIndex": 1,
        "explanation": "\"abraza a Bruno con alivio... pero también está feliz de encontrarlo\" — he hugs Bruno with relief and is happy to find him, while also warning him."
      }
    ]
  },
  {
    "slug": "lake-house-weekend",
    "level": "A2",
    "number": 75,
    "title": "El fin de semana en la casa del lago",
    "summary": "A girl who is afraid of deep water slowly overcomes her fear with her grandfather's help during a weekend at the lake.",
    "duration": "6 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "La familia Torres pasa un fin de semana en la casa del lago de sus abuelos. Los dos primos, Sara y Nico, están muy contentos porque pueden nadar y pasear en kayak. Pero Sara tiene un poco de miedo al agua profunda.",
          "El sábado por la mañana, el abuelo saca dos kayaks pequeños del garaje. \"¿Quién quiere ir al lago conmigo?\", pregunta. Nico corre inmediatamente hacia el agua, pero Sara se queda cerca de la casa, mirando el lago desde lejos.",
          "\"¿Qué pasa, Sara?\", pregunta su abuela. Sara explica que tiene miedo del agua profunda porque no sabe nadar muy bien. Su abuela la abraza y le dice: \"No tienes que hacerlo hoy. Podemos caminar por la orilla del lago.\"",
          "Sara y su abuela caminan por la orilla mientras Nico y el abuelo reman en los kayaks. Sara observa cómo su primo se divierte en el agua, y poco a poco empieza a sentir curiosidad en lugar de miedo.",
          "Por la tarde, el abuelo le ofrece a Sara un chaleco salvavidas especial. \"Este chaleco te ayuda a flotar. Podemos empezar en la parte del lago donde el agua no es profunda,\" dice. Sara piensa un momento y decide intentarlo.",
          "Con el chaleco puesto, Sara entra al agua poco a poco, primero hasta las rodillas y después hasta la cintura. El abuelo está a su lado todo el tiempo. Al principio, Sara está muy tensa, pero después de unos minutos empieza a relajarse.",
          "Nico rema hasta donde está Sara y le ofrece subir a su kayak por un momento. Sara se sube con cuidado y los dos primos reman juntos cerca de la orilla. Sara sonríe y dice: \"¡Esto no es tan malo!\"",
          "El domingo, antes de regresar a casa, Sara nada un poco más lejos con su chaleco salvavidas, sin ayuda de nadie. Su abuela la aplaude desde la orilla. \"Estoy muy orgullosa de ti,\" dice. Sara se siente valiente y ya no tiene tanto miedo del lago."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "Why is Sara afraid at the beginning?",
        "options": [
          "She doesn't like her cousin",
          "She is scared of deep water because she doesn't swim well",
          "She is afraid of the kayaks",
          "She dislikes the lake house"
        ],
        "correctIndex": 1,
        "explanation": "\"tiene miedo del agua profunda porque no sabe nadar muy bien\" — she is afraid of deep water because she doesn't swim very well."
      },
      {
        "type": "multiple-choice",
        "question": "What does grandpa give Sara to help her feel safer?",
        "options": [
          "A kayak of her own",
          "A life jacket",
          "Swimming goggles",
          "A pool float"
        ],
        "correctIndex": 1,
        "explanation": "\"el abuelo le ofrece a Sara un chaleco salvavidas especial\" — grandpa offers Sara a special life jacket."
      },
      {
        "type": "multiple-choice",
        "question": "What does Sara do on Sunday before leaving?",
        "options": [
          "She refuses to go near the water again",
          "She swims a bit farther on her own with the life jacket",
          "She only walks along the shore again",
          "She goes home without trying the water"
        ],
        "correctIndex": 1,
        "explanation": "\"Sara nada un poco más lejos con su chaleco salvavidas, sin ayuda de nadie\" — Sara swims a bit farther with her life jacket, without anyone's help."
      }
    ]
  },
  {
    "slug": "cooking-competition-friends",
    "level": "A2",
    "number": 76,
    "title": "La competencia de cocina",
    "summary": "Two friends compete to make the best dessert for a school fundraiser, but a broken oven turns rivals into teammates.",
    "duration": "6 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Cada año, la escuela organiza una competencia de cocina para recaudar dinero para la biblioteca. Los estudiantes preparan postres y los venden en el patio. Este año, Emma y su amigo Leo deciden participar, pero en equipos diferentes.",
          "Emma decide hacer un pastel de chocolate con fresas. Practica la receta tres veces en su casa con la ayuda de su papá. Leo, por su parte, decide hacer galletas de limón, una receta secreta de su abuela.",
          "Los dos amigos hablan sobre la competencia todos los días en la escuela. \"Mi pastel va a ser mejor,\" dice Emma, riendo. \"No, mis galletas van a ganar,\" responde Leo. Es una competencia amistosa, sin problemas entre ellos.",
          "El día antes de la competencia, Emma tiene un problema grande. El horno de su casa se rompe y no puede terminar su pastel. Está muy preocupada porque no tiene tiempo para comprar otro horno o ir a otra casa.",
          "Leo se entera del problema de Emma por mensaje de texto. Sin pensarlo mucho, decide ir a la casa de Emma con los ingredientes para sus galletas. \"Vamos a mi casa a cocinar los dos,\" dice Leo.",
          "Emma y Leo pasan la tarde en la cocina de Leo. Preparan el pastel de chocolate y las galletas de limón juntos, ayudándose el uno al otro. Se ríen mucho y también prueban un poco de la masa antes de hornear todo.",
          "El día de la competencia, Emma y Leo llegan con sus dos postres. Muchos estudiantes compran el pastel y las galletas, y todos dicen que están deliciosos. Al final del día, el director anuncia que las galletas de Leo ganan el primer premio.",
          "Emma se alegra por su amigo, sin ningún problema. \"Gracias por ayudarme. Sin ti, no puedo terminar mi pastel,\" dice Emma. Leo responde: \"Y tú me ayudaste mucho con la masa de las galletas.\" Los dos deciden que el próximo año van a competir juntos, como un solo equipo."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "Why can't Emma finish her cake at home?",
        "options": [
          "She runs out of chocolate",
          "Her oven breaks",
          "She forgets the recipe",
          "Her dad won't help her"
        ],
        "correctIndex": 1,
        "explanation": "\"El horno de su casa se rompe y no puede terminar su pastel\" — her home oven breaks and she can't finish her cake."
      },
      {
        "type": "multiple-choice",
        "question": "What does Leo do when he learns about Emma's problem?",
        "options": [
          "He tells her to give up",
          "He invites her to cook at his house",
          "He buys her a new oven",
          "He enters the contest for her"
        ],
        "correctIndex": 1,
        "explanation": "\"Vamos a mi casa a cocinar los dos,\" dice Leo — Leo says let's go to my house to cook together."
      },
      {
        "type": "multiple-choice",
        "question": "Who wins first prize in the competition?",
        "options": [
          "Emma's chocolate cake",
          "Leo's lemon cookies",
          "Neither of them",
          "Both tie for first"
        ],
        "correctIndex": 1,
        "explanation": "\"el director anuncia que las galletas de Leo ganan el primer premio\" — the director announces that Leo's cookies win first prize."
      }
    ]
  },
  {
    "slug": "chess-club-hobby",
    "level": "A2",
    "number": 77,
    "title": "El nuevo pasatiempo: el ajedrez",
    "summary": "A boy learns chess from a neighbor, joins the school club, and handles his first tournament loss with grace.",
    "duration": "6 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Iker ve a su vecino, el señor Ortiz, jugar ajedrez en el parque todos los domingos. Un día, Iker se acerca y pregunta: \"¿Qué es ese juego?\" El señor Ortiz sonríe y le explica que es ajedrez, un juego muy antiguo.",
          "\"¿Me puede enseñar?\", pregunta Iker con curiosidad. El señor Ortiz acepta felizmente. Empiezan con las reglas básicas: cómo se mueve cada pieza y cuál es el objetivo del juego. Iker aprende rápido porque le encantan los juegos de estrategia.",
          "Durante las siguientes semanas, Iker practica ajedrez con el señor Ortiz cada domingo en el parque. También compra un libro sobre estrategias de ajedrez y lo lee todas las noches antes de dormir. Poco a poco, empieza a ganar algunas partidas contra su maestro.",
          "En la escuela, Iker descubre que hay un club de ajedrez los martes por la tarde. Decide unirse porque quiere jugar contra más personas. Al principio está nervioso porque los otros miembros del club llevan más tiempo jugando que él.",
          "El club organiza un pequeño torneo entre los estudiantes. Iker juega su primera partida contra una chica llamada Valeria, que es una de las mejores jugadoras del club. Iker juega con cuidado, pero después de cuarenta minutos, pierde la partida.",
          "Al principio, Iker se siente un poco triste por perder. Pero Valeria le dice: \"Jugaste muy bien para ser nuevo. Mira, aquí cometiste un pequeño error.\" Valeria le muestra el error con paciencia, y esto ayuda a Iker a entender mejor el juego.",
          "Iker sigue practicando cada semana, tanto en el parque con el señor Ortiz como en el club de la escuela. Poco a poco, gana más partidas y aprende nuevas estrategias. Sus compañeros del club notan que mejora rápidamente cada mes.",
          "Tres meses después, Iker participa en otro torneo del club y gana su primera partida contra un estudiante mayor. Corre a contarle la noticia al señor Ortiz ese domingo. \"Sabía que ibas a mejorar mucho,\" dice el señor Ortiz con orgullo. Iker sonríe: el ajedrez ya es su pasatiempo favorito."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "Who first teaches Iker how to play chess?",
        "options": [
          "His teacher",
          "His neighbor, Mr. Ortiz",
          "Valeria",
          "His father"
        ],
        "correctIndex": 1,
        "explanation": "Iker asks his neighbor to teach him: \"¿Me puede enseñar?\" and \"El señor Ortiz acepta felizmente.\""
      },
      {
        "type": "multiple-choice",
        "question": "What happens in Iker's first tournament game?",
        "options": [
          "He wins easily",
          "He loses to Valeria",
          "The game is canceled",
          "He ties with his opponent"
        ],
        "correctIndex": 1,
        "explanation": "\"después de cuarenta minutos, pierde la partida\" — after forty minutes, he loses the game."
      },
      {
        "type": "multiple-choice",
        "question": "How does Valeria react after beating Iker?",
        "options": [
          "She brags about winning",
          "She kindly shows him his mistake",
          "She refuses to talk to him",
          "She tells him to quit chess"
        ],
        "correctIndex": 1,
        "explanation": "\"Valeria le muestra el error con paciencia\" — Valeria patiently shows him the mistake, telling him he played well for being new."
      }
    ]
  },
  {
    "slug": "misunderstanding-friends-resolved",
    "level": "A2",
    "number": 78,
    "title": "El malentendido",
    "summary": "Two best friends stop speaking after one thinks she was ignored, until they discover a phone glitch was to blame.",
    "duration": "6 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Nora y Bea son mejores amigas desde hace cinco años. Todos los viernes, se juntan para ver películas en la casa de una de las dos. Pero un viernes, algo extraño pasa entre ellas.",
          "Nora le envía un mensaje a Bea para invitarla a su casa a las cinco de la tarde. Espera toda la tarde, pero Bea nunca llega ni responde el mensaje. Nora se siente triste y un poco enojada.",
          "El lunes en la escuela, Nora ve a Bea en el pasillo, pero no le habla. Bea nota que Nora está distante y le pregunta: \"¿Está todo bien?\" Nora responde con voz seria: \"No fuiste a mi casa el viernes y ni siquiera respondiste mi mensaje.\"",
          "Bea se sorprende mucho. \"¿Qué mensaje? Yo no recibí nada de ti,\" dice. Nora no le cree al principio porque piensa que Bea solo busca una excusa. Las dos amigas no se hablan durante toda la semana, y ambas están tristes por la situación.",
          "El sábado, la mamá de Bea encuentra el teléfono viejo de Bea en un cajón. \"Creo que tu teléfono nuevo tiene un problema con los mensajes,\" dice. Bea revisa la configuración de su teléfono y descubre que los mensajes de Nora nunca llegaron por un error técnico.",
          "Bea llama a Nora inmediatamente y le explica todo. \"Mi teléfono tenía un problema. Nunca vi tus mensajes, lo prometo,\" dice Bea. Nora escucha con atención y se da cuenta de que juzgó a su amiga sin tener toda la información.",
          "\"Lo siento mucho por no creerte,\" dice Nora. \"Debí preguntarte primero antes de enojarme.\" Bea responde: \"Está bien, yo también entiendo por qué pensaste eso.\" Las dos amigas se ríen un poco, aliviadas de resolver el problema.",
          "El viernes siguiente, Nora y Bea se juntan de nuevo para ver una película, como siempre. Esta vez, las dos deciden llamarse por teléfono en lugar de solo enviar mensajes, para evitar otro malentendido. Su amistad es más fuerte después de este pequeño problema."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "Why does Nora think Bea ignored her?",
        "options": [
          "Bea said something mean at school",
          "Bea didn't come over or reply to her invitation message",
          "Bea canceled plans out loud",
          "Bea moved to a new house"
        ],
        "correctIndex": 1,
        "explanation": "\"Bea nunca llega ni responde el mensaje\" — Bea never arrives or responds to the message."
      },
      {
        "type": "multiple-choice",
        "question": "What was the real reason Bea didn't respond?",
        "options": [
          "She was busy with family",
          "Her phone had a technical problem, so the messages never arrived",
          "She was angry at Nora",
          "She forgot about the invitation"
        ],
        "correctIndex": 1,
        "explanation": "\"descubre que los mensajes de Nora nunca llegaron por un error técnico\" — she discovers Nora's messages never arrived due to a technical error."
      },
      {
        "type": "multiple-choice",
        "question": "What do the two friends decide to do differently going forward?",
        "options": [
          "Never text again",
          "Call each other by phone instead of only texting",
          "Stop hanging out on Fridays",
          "Get new phones together"
        ],
        "correctIndex": 1,
        "explanation": "\"las dos deciden llamarse por teléfono en lugar de solo enviar mensajes\" — the two decide to call each other by phone instead of only sending messages."
      }
    ]
  },
  {
    "slug": "parents-birthday-surprise",
    "level": "A2",
    "number": 79,
    "title": "La sorpresa de cumpleaños",
    "summary": "Two siblings secretly plan a surprise birthday party for their overworked mom, despite a small cake disaster.",
    "duration": "6 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Los hermanos Dani y Paula quieren organizar una fiesta sorpresa para el cumpleaños de su mamá. Su mamá trabaja mucho y nunca tiene tiempo para celebrar su propio cumpleaños. Los dos hermanos deciden cambiar eso este año.",
          "Primero, hablan en secreto con su papá, quien está muy contento con la idea. \"Podemos invitar a los tíos y a los abuelos,\" sugiere Dani. Paula escribe una lista de invitados mientras su papá piensa en cómo mantener a mamá ocupada ese día.",
          "Durante dos semanas, los hermanos planean todo con mucho cuidado. Compran globos y decoraciones cuando su mamá no está en casa. Esconden todo en el garaje para que ella no encuentre nada por accidente.",
          "El día del cumpleaños, el papá lleva a su esposa a comer a un restaurante especial, mientras Dani y Paula preparan la casa con la ayuda de sus abuelos. Cuelgan globos de colores, ponen una mesa larga y hacen un cartel grande que dice \"¡Feliz cumpleaños, mamá!\"",
          "Paula intenta hacer un pastel de vainilla, pero se le olvida poner un ingrediente importante y el pastel no crece bien en el horno. Dani la ayuda a arreglarlo con un poco de crema y frutas encima, y el pastel se ve bonito de todas formas.",
          "A las siete de la tarde, todos los invitados llegan a la casa y se esconden detrás del sofá. Cuando el papá y la mamá entran por la puerta, todos gritan \"¡Sorpresa!\" al mismo tiempo. La mamá se lleva las manos a la cara, sorprendida y emocionada.",
          "\"No puedo creer que hicieron todo esto,\" dice la mamá con lágrimas de felicidad. Abraza a Dani y a Paula muy fuerte. Todos cantan la canción de cumpleaños y comen el pastel, que sabe mejor de lo que parece.",
          "Después de la fiesta, la mamá les da las gracias a sus hijos por el esfuerzo y el cariño. \"Este es el mejor cumpleaños que he tenido en años,\" dice. Dani y Paula deciden que van a organizar una fiesta sorpresa cada año a partir de ahora."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "Why do Dani and Paula want to plan the surprise party?",
        "options": [
          "Their mom asked for one",
          "Their mom works a lot and never celebrates her own birthday",
          "It's a family tradition",
          "Their dad forgot her birthday last year"
        ],
        "correctIndex": 1,
        "explanation": "\"Su mamá trabaja mucho y nunca tiene tiempo para celebrar su propio cumpleaños\" — their mom works a lot and never has time to celebrate her own birthday."
      },
      {
        "type": "multiple-choice",
        "question": "What goes wrong with the cake?",
        "options": [
          "It burns completely",
          "Paula forgets an ingredient and it doesn't rise well",
          "It falls on the floor",
          "They run out of time to make it"
        ],
        "correctIndex": 1,
        "explanation": "\"se le olvida poner un ingrediente importante y el pastel no crece bien\" — she forgets to add an important ingredient and the cake doesn't rise well."
      },
      {
        "type": "multiple-choice",
        "question": "How does the family keep mom away while preparing?",
        "options": [
          "They send her shopping",
          "Dad takes her to a restaurant",
          "She goes to work",
          "She takes a nap"
        ],
        "correctIndex": 1,
        "explanation": "\"el papá lleva a su esposa a comer a un restaurante especial\" — dad takes his wife to eat at a special restaurant."
      }
    ]
  },
  {
    "slug": "rainy-vacation-day",
    "level": "A2",
    "number": 80,
    "title": "El día de lluvia en la playa",
    "summary": "A family's first beach vacation day is ruined by rain, so they invent an indoor day of games, pizza, and a movie instead.",
    "duration": "6 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "La familia Vega está de vacaciones en un pequeño pueblo junto a la playa. Los niños, Rafael e Isabel, esperan todo el año para nadar en el mar y construir castillos de arena. Pero el primer día de las vacaciones, empieza a llover mucho.",
          "Rafael mira por la ventana con cara triste. \"No podemos ir a la playa,\" dice. Isabel también está desanimada porque planeaba jugar al vóleibol con otros niños del hotel. Sus padres ven a los dos niños tristes y deciden hacer algo diferente.",
          "\"Si no podemos ir afuera, vamos a tener un día de juegos aquí dentro,\" dice su papá con una sonrisa grande. Saca una baraja de cartas y un juego de mesa que trajo por si acaso. Los niños se animan un poco al escuchar la idea.",
          "Primero, la familia juega varias partidas de un juego de mesa sobre piratas. Isabel gana dos veces y celebra con un baile chistoso. Rafael se enoja un poco al principio, pero después se ríe también porque el baile de su hermana es muy gracioso.",
          "Después de los juegos, la mamá propone cocinar algo especial en la pequeña cocina del hotel. Los cuatro preparan pizza casera con ingredientes que compraron en el mercado el día anterior. Isabel pone demasiado queso, y todos se ríen de su pizza gigante.",
          "Por la tarde, la lluvia sigue muy fuerte, así que la familia decide ver una película en la habitación del hotel usando la computadora del papá. Todos se sientan juntos en la cama grande, comen la pizza y ven una película de aventuras.",
          "Cuando termina la película, Rafael dice: \"Este día no fue tan malo como pensaba.\" Isabel está de acuerdo. \"Me divertí mucho, aunque no fuimos a la playa,\" dice. Los padres se miran felices porque el plan improvisado funcionó muy bien.",
          "Al día siguiente, el sol sale y la familia finalmente va a la playa. Nadan en el mar y construyen un castillo de arena enorme. Pero esa noche, en la cena, todos hablan sobre el día de lluvia como uno de los mejores recuerdos del viaje."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "What ruins the family's original beach plans?",
        "options": [
          "The car breaks down",
          "It rains all day",
          "The hotel closes",
          "They lose their swimsuits"
        ],
        "correctIndex": 1,
        "explanation": "\"empieza a llover mucho\" — it starts to rain a lot on the first day."
      },
      {
        "type": "multiple-choice",
        "question": "What do they cook together in the hotel kitchen?",
        "options": [
          "Tacos",
          "Homemade pizza",
          "A birthday cake",
          "Soup"
        ],
        "correctIndex": 1,
        "explanation": "\"Los cuatro preparan pizza casera\" — the four of them prepare homemade pizza."
      },
      {
        "type": "multiple-choice",
        "question": "How do the kids feel about the rainy day by the end?",
        "options": [
          "They are still upset about it",
          "They think it was one of the best memories of the trip",
          "They want to leave the vacation early",
          "They forget about it quickly"
        ],
        "correctIndex": 1,
        "explanation": "\"todos hablan sobre el día de lluvia como uno de los mejores recuerdos del viaje\" — everyone talks about the rainy day as one of the best memories of the trip."
      }
    ]
  },
  {
    "slug": "pets-first-vet-visit",
    "level": "A2",
    "number": 81,
    "title": "La primera visita al veterinario",
    "summary": "A girl feels nervous taking her new kitten for its first checkup, but learns the visit helps keep her pet healthy.",
    "duration": "6 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Martina recibe un gatito nuevo de regalo de sus papás. El gatito es gris con ojos verdes, y Martina decide llamarlo Luna. Desde el primer día, Luna duerme en la cama de Martina y juega con una pelota de lana por toda la casa.",
          "Una semana después, la mamá de Martina dice que Luna necesita ir al veterinario para un chequeo. Martina se pone nerviosa porque nunca ha llevado a un animal al doctor. \"¿Le va a doler algo a Luna?\", pregunta con preocupación.",
          "Su mamá le explica que el veterinario solo va a revisar que Luna esté sana y le va a poner unas vacunas importantes. \"Las vacunas protegen a Luna de enfermedades,\" dice su mamá. \"Es normal sentir un poco de miedo, pero es algo bueno para ella.\"",
          "El día de la cita, Martina pone a Luna en una caja de transporte especial. Luna maúlla mucho durante el viaje en carro porque no le gusta estar encerrada. Martina habla con ella suavemente todo el camino para calmarla.",
          "En la clínica veterinaria, hay otros animales esperando: un perro grande, dos gatos y un conejo. Luna se esconde en el fondo de la caja, asustada por los ruidos. Martina la abraza a través de la puerta de la caja y le dice que todo va a estar bien.",
          "Cuando llega su turno, la veterinaria, la doctora Ríos, examina a Luna con mucho cuidado. Revisa sus ojos, sus oídos y su corazón con un instrumento especial. \"Luna está muy sana,\" dice la doctora Ríos con una sonrisa.",
          "Después, la doctora le pone dos vacunas pequeñas a Luna. La gatita maúlla un poco, pero no parece sentir mucho dolor. Martina la sostiene con cuidado durante todo el proceso y le habla con voz dulce.",
          "Al final de la visita, la doctora le da a Martina algunos consejos sobre cómo cuidar a Luna. Martina se siente orgullosa porque ayudó a su gatita durante una experiencia difícil. En el camino de regreso a casa, Luna ya está más tranquila, y Martina promete llevarla al veterinario cada año sin miedo."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "Why is Martina nervous before the vet visit?",
        "options": [
          "Luna is very sick",
          "She has never taken an animal to the doctor before",
          "The vet clinic is far away",
          "Luna doesn't like her mom"
        ],
        "correctIndex": 1,
        "explanation": "\"se pone nerviosa porque nunca ha llevado a un animal al doctor\" — she gets nervous because she has never taken an animal to the doctor."
      },
      {
        "type": "multiple-choice",
        "question": "What does the vet do besides examine Luna?",
        "options": [
          "Gives her a haircut",
          "Gives her two vaccines",
          "Takes her home for a night",
          "Puts her on a diet"
        ],
        "correctIndex": 1,
        "explanation": "\"la doctora le pone dos vacunas pequeñas a Luna\" — the doctor gives Luna two small vaccines."
      },
      {
        "type": "multiple-choice",
        "question": "How does Martina help Luna during the visit?",
        "options": [
          "She leaves the room",
          "She talks to her softly and holds her carefully",
          "She gives her treats constantly",
          "She lets another kid hold her"
        ],
        "correctIndex": 1,
        "explanation": "\"Martina la sostiene con cuidado... y le habla con voz dulce\" — Martina holds her carefully and speaks to her in a sweet voice."
      }
    ]
  },
  {
    "slug": "neighborhood-clean-up-day",
    "level": "A2",
    "number": 82,
    "title": "El día de limpieza del barrio",
    "summary": "Three friends organize a neighborhood clean-up and uncover a hidden corner of the park nobody knew was there.",
    "duration": "6 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "El parque del barrio de Teo está lleno de basura desde hace meses. Botellas de plástico, papeles y bolsas cubren el césped donde antes los niños jugaban fútbol. Teo y sus amigos, Yolanda y Simón, están tristes por el estado del parque.",
          "\"Deberíamos hacer algo,\" dice Yolanda un día después de la escuela. Los tres amigos deciden organizar un día de limpieza para todo el barrio. Hacen carteles con marcadores de colores e invitan a los vecinos a participar el sábado siguiente.",
          "Al principio, Teo tiene miedo de que nadie llegue al evento. Pasa toda la semana poniendo carteles en las puertas de las casas cercanas. También le pide ayuda a la señora del supermercado, quien acepta donar bolsas de basura y guantes para los voluntarios.",
          "El sábado por la mañana, Teo, Yolanda y Simón llegan al parque temprano con nervios. Poco a poco, empiezan a llegar vecinos: familias con niños, una pareja de ancianos y hasta el dueño de la panadería con café gratis para todos.",
          "Todos trabajan juntos durante tres horas. Recogen botellas, papeles y bolsas plásticas del césped y de debajo de los árboles. Los niños más pequeños ayudan a poner la basura en bolsas grandes, mientras los adultos cargan las bolsas hasta los camiones de basura.",
          "Durante la limpieza, encuentran una parte del parque que nadie usaba porque estaba cubierta de plantas y basura. Después de limpiarla, descubren un pequeño espacio con bancos de madera, perfecto para sentarse y descansar. \"¡No sabía que esto estaba aquí!\", dice Simón sorprendido.",
          "Al final del día, el parque se ve completamente diferente. El césped está limpio, los bancos nuevos están listos para usarse, y todos los vecinos están orgullosos de su trabajo. El dueño de la panadería trae más café y pan para celebrar.",
          "Esa tarde, Teo mira el parque limpio con una sonrisa enorme. \"Hicimos esto entre todos,\" dice a sus amigos. Yolanda propone organizar una limpieza cada tres meses para mantener el parque bonito, y todos los vecinos presentes están de acuerdo con la idea."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "Why do the friends organize the clean-up day?",
        "options": [
          "The park is getting a new playground",
          "The neighborhood park is full of trash",
          "The school asked them to",
          "They want to earn money"
        ],
        "correctIndex": 1,
        "explanation": "\"El parque del barrio de Teo está lleno de basura desde hace meses\" — the neighborhood park has been full of trash for months."
      },
      {
        "type": "multiple-choice",
        "question": "Who donates bags and gloves for the volunteers?",
        "options": [
          "The school",
          "The supermarket lady",
          "The city government",
          "The bakery owner"
        ],
        "correctIndex": 1,
        "explanation": "\"la señora del supermercado... acepta donar bolsas de basura y guantes\" — the supermarket lady agrees to donate trash bags and gloves."
      },
      {
        "type": "multiple-choice",
        "question": "What do they discover while cleaning the park?",
        "options": [
          "An old bicycle",
          "A hidden area with wooden benches",
          "A lost dog",
          "A small pond"
        ],
        "correctIndex": 1,
        "explanation": "\"descubren un pequeño espacio con bancos de madera\" — they discover a small space with wooden benches, previously covered by plants and trash."
      }
    ]
  },
  {
    "slug": "school-play-rehearsal",
    "level": "A2",
    "number": 83,
    "title": "El ensayo de la obra de teatro",
    "summary": "A girl with the lead role in her school play forgets her lines at a rehearsal, but practice and a friend's help save opening night.",
    "duration": "6 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "La escuela de Alicia prepara una obra de teatro sobre un reino mágico. Alicia consigue el papel principal: una princesa valiente que salva su reino. Al principio, está muy emocionada, pero después empieza a sentir miedo de olvidar sus líneas.",
          "Los ensayos empiezan tres semanas antes de la función. Cada tarde, los estudiantes practican en el auditorio de la escuela. Alicia lee su guion muchas veces en casa, pero cuando está en el escenario, se pone nerviosa y olvida las palabras.",
          "Durante un ensayo importante, Alicia olvida completamente una parte larga de su diálogo. Se queda parada en silencio frente a sus compañeros, sin saber qué decir. Algunos estudiantes se ríen un poco, y Alicia siente ganas de llorar.",
          "El profesor de teatro, el señor Cabrera, para el ensayo y habla con Alicia en privado. \"A todos nos pasa esto al principio,\" le dice con calma. \"Vamos a practicar tu parte más despacio, paso a paso.\" Alicia respira profundo y decide seguir intentándolo.",
          "Su amigo Diego, que también actúa en la obra, le ofrece ayuda. Todas las tardes después de los ensayos, los dos practican las líneas de Alicia en el patio de la escuela. Diego actúa como los otros personajes para ayudarla a recordar cuándo debe hablar.",
          "Poco a poco, Alicia mejora mucho. Empieza a recordar sus líneas sin mirar el guion y se mueve por el escenario con más confianza. El señor Cabrera nota el cambio y le dice: \"Estás lista para la función.\"",
          "La noche de la función, el auditorio está lleno de padres y estudiantes. Alicia espera detrás del telón con el corazón acelerado, pero también recuerda las palabras de Diego: \"Tú puedes hacerlo, solo respira.\" Cuando sale al escenario, se siente más tranquila de lo que esperaba.",
          "Alicia actúa toda la obra sin olvidar ni una sola línea. Al final, el público aplaude fuerte y ella hace una reverencia con una sonrisa enorme. Después de la función, abraza a Diego. \"Gracias por ayudarme tanto,\" dice Alicia, feliz y orgullosa de sí misma."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "What role does Alicia get in the play?",
        "options": [
          "A talking tree",
          "The lead role of a princess",
          "The narrator",
          "A background dancer"
        ],
        "correctIndex": 1,
        "explanation": "\"Alicia consigue el papel principal: una princesa valiente\" — Alicia gets the main role: a brave princess."
      },
      {
        "type": "multiple-choice",
        "question": "What happens during an important rehearsal?",
        "options": [
          "She trips on the stage",
          "She forgets a long part of her dialogue",
          "She arrives late",
          "She loses her costume"
        ],
        "correctIndex": 1,
        "explanation": "\"Alicia olvida completamente una parte larga de su diálogo\" — Alicia completely forgets a long part of her dialogue."
      },
      {
        "type": "multiple-choice",
        "question": "Who helps Alicia practice her lines after rehearsals?",
        "options": [
          "The teacher, Mr. Cabrera",
          "Her friend Diego",
          "Her parents",
          "Nobody, she practices alone"
        ],
        "correctIndex": 1,
        "explanation": "\"los dos practican las líneas de Alicia en el patio de la escuela\" — Diego and Alicia practice her lines together in the school yard."
      }
    ]
  },
  {
    "slug": "grandmother-teaches-knitting",
    "level": "A2",
    "number": 84,
    "title": "Mi abuela me enseña a tejer",
    "summary": "A girl spending the summer with her grandmother learns to knit, overcoming frustration to finish a scarf for her mom.",
    "duration": "5 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Valeria pasa el verano en la casa de su abuela en el campo. Cada tarde, ve a su abuela sentada en el porche, tejiendo con dos agujas largas y lana de colores. Valeria siempre tiene curiosidad, pero nunca pregunta cómo se hace.",
          "Un día, Valeria finalmente pregunta: \"Abuela, ¿me puedes enseñar a tejer?\" Su abuela sonríe con alegría porque nadie en la familia le ha pedido esto antes. \"Por supuesto, mi amor. Vamos a empezar mañana,\" responde.",
          "A la mañana siguiente, la abuela le da a Valeria dos agujas pequeñas y un poco de lana azul. \"Primero, tienes que aprender el punto básico,\" explica la abuela. Le muestra cómo mover las agujas despacio, paso a paso.",
          "Al principio, es muy difícil para Valeria. Sus manos no se mueven de la manera correcta, y la lana se enreda varias veces. Se frustra y quiere dejar de intentarlo. \"No puedo hacerlo,\" dice, tirando las agujas al sofá.",
          "Su abuela la mira con paciencia y dice: \"Cuando yo aprendí, también cometí muchos errores. Necesitas práctica, no perfección.\" Valeria recoge las agujas de nuevo y sigue practicando, aunque las primeras líneas de su tejido no son perfectas.",
          "Durante las siguientes semanas, Valeria practica todos los días con su abuela. Poco a poco, sus manos se mueven más rápido y con más seguridad. Un día, se da cuenta de que puede tejer sin mirar constantemente sus manos.",
          "Al final del verano, Valeria termina su primer proyecto: una bufanda pequeña de color azul con algunos errores, pero hecha con mucho amor. Decide dársela a su mamá como regalo cuando regrese a casa.",
          "Cuando Valeria le muestra la bufanda a su mamá, ella se emociona mucho. \"¡La hiciste tú misma!\", dice, abrazándola fuerte. Valeria explica que su abuela le enseñó pacientemente durante todo el verano. Desde ese día, Valeria sigue tejiendo cada vez que visita a su abuela, y ya sabe hacer bufandas mucho mejores."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "What does Valeria ask her grandmother to teach her?",
        "options": [
          "Cooking",
          "Knitting",
          "Gardening",
          "Painting"
        ],
        "correctIndex": 1,
        "explanation": "\"Abuela, ¿me puedes enseñar a tejer?\" — Valeria asks her grandmother to teach her to knit."
      },
      {
        "type": "multiple-choice",
        "question": "What problem does Valeria have when she first tries?",
        "options": [
          "She has no yarn",
          "Her hands don't move correctly and the yarn gets tangled",
          "She loses the needles",
          "Her grandmother refuses to help"
        ],
        "correctIndex": 1,
        "explanation": "\"Sus manos no se mueven de la manera correcta, y la lana se enreda varias veces\" — her hands don't move the right way and the yarn tangles several times."
      },
      {
        "type": "multiple-choice",
        "question": "What does Valeria make by the end of the summer?",
        "options": [
          "A sweater for herself",
          "A small blue scarf she gives to her mom",
          "A blanket for her grandmother",
          "A hat for her cousin"
        ],
        "correctIndex": 1,
        "explanation": "\"una bufanda pequeña de color azul... Decide dársela a su mamá como regalo\" — a small blue scarf, which she decides to give to her mom as a gift."
      }
    ]
  },
  {
    "slug": "lemonade-stand-business",
    "level": "A2",
    "number": 85,
    "title": "El puesto de limonada",
    "summary": "A boy and his sister set up a lemonade stand to save for a new bicycle, learning the basics of running a small business.",
    "duration": "6 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Óscar quiere comprar una bicicleta nueva, pero no tiene suficiente dinero ahorrado. Su hermana Renata tiene una idea: \"¿Por qué no ponemos un puesto de limonada en frente de la casa?\" Óscar piensa que es una buena idea y acepta ayudar.",
          "Los dos hermanos hacen una lista de lo que necesitan: limones, azúcar, agua, vasos de papel y una mesa pequeña. Le piden dinero prestado a su mamá para comprar los ingredientes, y prometen devolverlo con las ganancias del negocio.",
          "El sábado por la mañana, Óscar y Renata preparan la limonada en la cocina. Exprimen muchos limones y mezclan el jugo con azúcar y agua fría. Renata prueba la mezcla varias veces hasta que sabe perfecta, ni muy ácida ni muy dulce.",
          "Ponen la mesa en frente de su casa con un cartel que dice \"Limonada fría: un dólar el vaso.\" Al principio, no pasa casi nadie por la calle, y los hermanos se preocupan un poco. \"Quizás nadie va a comprar,\" dice Óscar con tristeza.",
          "Después de una hora, un vecino que camina con su perro se detiene y compra dos vasos de limonada. \"Está deliciosa,\" dice, y les da una moneda extra de propina. Los hermanos se emocionan mucho y deciden gritar \"¡Limonada fría!\" para atraer a más clientes.",
          "Poco a poco, más personas se detienen: unos niños en bicicleta, una señora que va al mercado y hasta el cartero. Renata anota cuánto dinero ganan en un cuaderno pequeño. Al final del día, tienen quince dólares en la caja de dinero.",
          "Al día siguiente, deciden poner el puesto otra vez porque el primer día fue un éxito. Esta vez, agregan galletas caseras para vender junto con la limonada. Ganan todavía más dinero que el día anterior, y Óscar está cada vez más cerca de comprar su bicicleta.",
          "Después de tres fines de semana, Óscar finalmente tiene suficiente dinero para su bicicleta nueva. Le da las gracias a Renata por su idea y por toda su ayuda. \"Fuimos un buen equipo de negocios,\" dice Renata, riendo. Los hermanos deciden seguir vendiendo limonada los fines de semana, solo por diversión."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "Why does Óscar want to earn money?",
        "options": [
          "To buy a video game",
          "To buy a new bicycle",
          "To pay for school supplies",
          "To go on a trip"
        ],
        "correctIndex": 1,
        "explanation": "\"Óscar quiere comprar una bicicleta nueva, pero no tiene suficiente dinero ahorrado\" — Óscar wants to buy a new bicycle but hasn't saved enough money."
      },
      {
        "type": "multiple-choice",
        "question": "What do they add on the second day to sell more?",
        "options": [
          "Ice cream",
          "Homemade cookies",
          "Fruit juice",
          "Sandwiches"
        ],
        "correctIndex": 1,
        "explanation": "\"agregan galletas caseras para vender junto con la limonada\" — they add homemade cookies to sell along with the lemonade."
      },
      {
        "type": "multiple-choice",
        "question": "How long does it take Óscar to save enough money for the bike?",
        "options": [
          "One weekend",
          "Three weekends",
          "A whole summer",
          "One year"
        ],
        "correctIndex": 1,
        "explanation": "\"Después de tres fines de semana, Óscar finalmente tiene suficiente dinero\" — after three weekends, Óscar finally has enough money."
      }
    ]
  },
  {
    "slug": "market-in-new-country",
    "level": "A2",
    "number": 86,
    "title": "El mercado en un país nuevo",
    "summary": "A girl visiting Mexico for the first time discovers a colorful market, tries new foods, and makes an unexpected friend.",
    "duration": "6 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "La familia Solís viaja a México para visitar a unos parientes. Es el primer viaje de Camila fuera de su país, y todo le parece nuevo y emocionante. Un día, su tía los lleva a un mercado grande y colorido en el centro de la ciudad.",
          "Cuando Camila entra al mercado, ve puestos llenos de frutas de colores que nunca ha probado: mango, guayaba y tamarindo. También hay puestos con telas bordadas, sombreros y artesanías de madera. El mercado tiene mucha gente y muchos ruidos diferentes.",
          "Su tía le explica que en el mercado, a veces se puede negociar el precio de las cosas. \"Si el vendedor dice un precio alto, puedes ofrecer un poco menos,\" dice su tía. Camila piensa que es una idea interesante, muy diferente de las tiendas de su país.",
          "En un puesto de artesanías, Camila ve una pequeña muñeca de tela hecha a mano. Le pregunta el precio al vendedor, un señor mayor con una sonrisa amable. El señor le dice un precio, y con la ayuda de su tía, Camila ofrece un poco menos.",
          "El vendedor se ríe y acepta el precio nuevo. \"Tienes buen ojo para el arte,\" le dice a Camila. Ella paga con el dinero que trajo de su casa y guarda la muñeca con mucho cuidado en su mochila.",
          "Después, la familia se detiene en un puesto de comida donde una señora prepara tacos frescos. Camila prueba un taco de queso por primera vez y le encanta el sabor. También prueba un jugo de tamarindo, que al principio le parece raro, pero después le gusta mucho.",
          "Mientras comen, Camila conoce a una niña llamada Ximena, la hija de la vendedora de comida. Las dos niñas hablan sobre sus juegos favoritos y descubren que a ambas les gusta dibujar. Ximena le muestra a Camila algunos dibujos que hizo esa mañana.",
          "Antes de irse, Camila le promete a Ximena que va a escribirle cartas cuando regrese a su país. Guarda la dirección en un papel dentro de su mochila, junto a la muñeca de tela. En el camino de regreso a la casa de sus parientes, Camila piensa que este mercado fue la mejor parte de todo el viaje."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "What does the aunt teach Camila about shopping at the market?",
        "options": [
          "You must always pay the full listed price",
          "You can negotiate the price of things",
          "Only adults can buy items",
          "The market only accepts exact change"
        ],
        "correctIndex": 1,
        "explanation": "\"en el mercado, a veces se puede negociar el precio de las cosas\" — at the market, you can sometimes negotiate the price of things."
      },
      {
        "type": "multiple-choice",
        "question": "What food does Camila try for the first time?",
        "options": [
          "A cheese taco",
          "A hamburger",
          "Fried chicken",
          "Ice cream"
        ],
        "correctIndex": 0,
        "explanation": "\"Camila prueba un taco de queso por primera vez y le encanta el sabor\" — Camila tries a cheese taco for the first time and loves the taste."
      },
      {
        "type": "multiple-choice",
        "question": "Who does Camila meet at the market, and what do they have in common?",
        "options": [
          "Ximena, who also likes drawing",
          "A boy who also likes soccer",
          "A tourist from her own country",
          "Her cousin, who she hadn't seen in years"
        ],
        "correctIndex": 0,
        "explanation": "Camila meets Ximena and they \"descubren que a ambas les gusta dibujar\" — they discover they both like drawing."
      }
    ]
  },
  {
    "slug": "la-fiesta-de-aniversario-de-los-abuelos",
    "level": "A2",
    "number": 87,
    "title": "La fiesta de aniversario de los abuelos",
    "summary": "A family throws a surprise fiftieth wedding anniversary party for their grandparents.",
    "duration": "6 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Los abuelos de Elena, Rosa y Antonio, celebraban cincuenta años de casados. Toda la familia decidió organizar una fiesta sorpresa en el jardín de la casa. Elena y su hermano Pablo ayudaron a preparar todo.",
          "El sábado por la mañana, Elena colgó globos azules y blancos en el jardín. Su mamá cocinó un pastel grande con flores de azúcar. Pablo llamó a todos los primos para invitarlos.",
          "A las cuatro de la tarde, los abuelos llegaron a la casa. Pensaban que iban a comer un almuerzo tranquilo con su hija. Cuando abrieron la puerta del jardín, treinta personas gritaron: \"¡Felicidades!\"",
          "La abuela Rosa se puso muy emocionada y empezó a llorar de alegría. El abuelo Antonio la abrazó y le dio un beso. \"No sabíamos nada de esto,\" dijo él con una sonrisa grande.",
          "Durante la fiesta, la familia miró fotos viejas de la boda de los abuelos. En las fotos, Rosa llevaba un vestido blanco muy simple y Antonio tenía el pelo negro. Todos se rieron mucho al ver la ropa antigua.",
          "Elena le dio a su abuela un álbum nuevo con fotos de toda la familia. La abuela lo abrió despacio y miró cada foto con cuidado. \"Este es el mejor regalo,\" le dijo a Elena.",
          "Después de comer el pastel, los abuelos bailaron una canción lenta en el centro del jardín. Todos los invitados los miraron y aplaudieron. Fue un momento muy especial para la familia.",
          "Al final de la noche, el abuelo Antonio dio las gracias a todos por venir. Dijo que cincuenta años con Rosa pasaron muy rápido. La familia prometió celebrar juntos otra fiesta en el futuro."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "What were Elena's grandparents celebrating?",
        "options": [
          "Their 50th wedding anniversary",
          "Rosa's birthday",
          "Antonio's retirement",
          "Elena's birthday"
        ],
        "correctIndex": 0,
        "explanation": "The story says they \"celebraban cincuenta años de casados\" (they were celebrating fifty years of marriage), meaning their anniversary."
      },
      {
        "type": "multiple-choice",
        "question": "What did the grandparents think would happen when they arrived at the house?",
        "options": [
          "A surprise party",
          "A quiet lunch with their daughter",
          "A trip to the market",
          "A doctor's appointment"
        ],
        "correctIndex": 1,
        "explanation": "The text says \"Pensaban que iban a comer un almuerzo tranquilo con su hija\" (They thought they were going to have a quiet lunch with their daughter)."
      },
      {
        "type": "multiple-choice",
        "question": "What gift did Elena give her grandmother?",
        "options": [
          "A photo album",
          "A new dress",
          "Flowers",
          "A cake"
        ],
        "correctIndex": 0,
        "explanation": "\"Elena le dio a su abuela un álbum nuevo con fotos de toda la familia\" means Elena gave her grandmother a new photo album."
      },
      {
        "type": "multiple-choice",
        "question": "What did the grandparents do after eating the cake?",
        "options": [
          "They opened more presents",
          "They danced a slow song",
          "They went home early",
          "They played games with the kids"
        ],
        "correctIndex": 1,
        "explanation": "\"los abuelos bailaron una canción lenta en el centro del jardín\" states the grandparents danced a slow song in the middle of the garden."
      }
    ]
  },
  {
    "slug": "el-bebe-nuevo-de-la-familia",
    "level": "A2",
    "number": 88,
    "title": "El bebé nuevo de la familia",
    "summary": "A boy learns to be a patient big cousin when his aunt brings home a new baby.",
    "duration": "6 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Diego tenía ocho años y esperaba con mucha emoción la llegada de su primo nuevo. Su tía Carmen estaba embarazada desde hacía nueve meses. Toda la familia hablaba del bebé todos los días.",
          "Un domingo por la mañana, el teléfono sonó muy temprano. Era el tío Luis, y dijo que el bebé nació esa noche en el hospital. Toda la familia se puso muy contenta con la noticia.",
          "La familia fue al hospital para conocer al nuevo bebé. Se llamaba Mateo y era muy pequeño. Diego lo miró con los ojos muy abiertos.",
          "\"¿Puedo cargarlo?\" preguntó Diego con cuidado. La tía Carmen le dijo que sí, pero le explicó que debía sentarse primero. Diego se sentó despacio y su tía le puso al bebé en los brazos.",
          "Mateo abrió los ojos y miró a Diego por un momento. Diego sonrió y le habló muy bajito. \"Voy a ser tu primo favorito,\" le dijo con una voz suave.",
          "Los primeros días, el bebé lloraba mucho por la noche. La tía Carmen estaba cansada, y Diego decidió ayudarla. Fue a la tienda para comprarle flores y una tarjeta.",
          "Cuando Diego le dio las flores, la tía Carmen se puso muy contenta. \"Eres un primo muy bueno,\" le dijo, y lo abrazó fuerte. Diego se sintió muy orgulloso de sí mismo.",
          "Con el tiempo, Mateo creció rápido y empezó a sonreír más. Diego lo visitaba cada fin de semana y jugaba con él. En el futuro, Diego le enseñará a andar en bicicleta."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "How old was Diego?",
        "options": [
          "Six",
          "Eight",
          "Ten",
          "Twelve"
        ],
        "correctIndex": 1,
        "explanation": "The story states \"Diego tenía ocho años\" (Diego was eight years old)."
      },
      {
        "type": "multiple-choice",
        "question": "What did Diego do to help his tired aunt?",
        "options": [
          "He cooked dinner for her",
          "He bought her flowers and a card",
          "He cleaned her house",
          "He babysat all night"
        ],
        "correctIndex": 1,
        "explanation": "\"Fue a la tienda para comprarle flores y una tarjeta\" means he went to the store to buy her flowers and a card."
      },
      {
        "type": "multiple-choice",
        "question": "What did Diego say while holding baby Mateo?",
        "options": [
          "\"You are so small\"",
          "\"I will be your favorite cousin\"",
          "\"Please stop crying\"",
          "\"You look like your mom\""
        ],
        "correctIndex": 1,
        "explanation": "Diego whispered \"Voy a ser tu primo favorito\" (I am going to be your favorite cousin)."
      },
      {
        "type": "multiple-choice",
        "question": "According to the story, what will Diego do in the future?",
        "options": [
          "Move away",
          "Teach Mateo to ride a bike",
          "Become a teacher",
          "Travel to Argentina"
        ],
        "correctIndex": 1,
        "explanation": "The final line says \"En el futuro, Diego le enseñará a andar en bicicleta\" (In the future, Diego will teach him to ride a bike)."
      }
    ]
  },
  {
    "slug": "el-desayuno-sorpresa-para-mama",
    "level": "A2",
    "number": 89,
    "title": "El desayuno sorpresa para mamá",
    "summary": "Two siblings secretly cook their mother a Mother's Day breakfast, with a small kitchen mishap.",
    "duration": "6 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Era el Día de las Madres, y Camila y su hermano Tomás querían hacer algo especial para su mamá. Decidieron levantarse muy temprano y preparar el desayuno. Su papá les ayudó a comprar los ingredientes el día anterior.",
          "A las seis de la mañana, Camila se despertó primero y despertó a Tomás en silencio. Se vistieron rápido y bajaron a la cocina sin hacer ruido. Su mamá todavía dormía.",
          "Tomás quería hacer huevos y pan tostado. Camila quería preparar jugo de naranja y fruta. Los dos trabajaron juntos, pero Tomás rompió un plato sin querer.",
          "El ruido del plato despertó a su mamá. Ella bajó las escaleras rápidamente porque pensaba que algo malo pasaba en la cocina.",
          "Cuando su mamá entró en la cocina, vio a sus hijos con harina en la ropa y el piso un poco sucio. Camila le dijo: \"¡Sorpresa! Feliz Día de las Madres, mamá.\" Su mamá se rió y los abrazó a los dos.",
          "\"No importa el plato roto,\" dijo su mamá. \"Este es el mejor regalo del mundo.\" Se sentaron los tres juntos a la mesa para comer.",
          "El desayuno no era perfecto, pero a su mamá le encantó cada parte. Los huevos estaban un poco quemados, y el jugo era muy dulce. Aun así, su mamá comió todo con una sonrisa grande.",
          "Después de comer, su mamá les dio las gracias por el esfuerzo. Camila y Tomás prometieron hacer el desayuno otra vez el próximo año. Fue una mañana perfecta para toda la familia."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "What holiday were Camila and Tomás celebrating?",
        "options": [
          "Father's Day",
          "Mother's Day",
          "Christmas",
          "A birthday"
        ],
        "correctIndex": 1,
        "explanation": "The story begins \"Era el Día de las Madres\" (It was Mother's Day)."
      },
      {
        "type": "multiple-choice",
        "question": "Why did their mom come downstairs quickly?",
        "options": [
          "She smelled smoke",
          "She heard a plate break",
          "The doorbell rang",
          "She heard the kids arguing"
        ],
        "correctIndex": 1,
        "explanation": "\"El ruido del plato despertó a su mamá\" means the noise of the plate woke up their mom."
      },
      {
        "type": "multiple-choice",
        "question": "What happened to the eggs?",
        "options": [
          "They were perfect",
          "They were a little burnt",
          "They were too salty",
          "They were cold"
        ],
        "correctIndex": 1,
        "explanation": "\"Los huevos estaban un poco quemados\" states the eggs were a little burnt."
      },
      {
        "type": "multiple-choice",
        "question": "What did the kids promise to do?",
        "options": [
          "Never cook again",
          "Make breakfast again next year",
          "Buy their mom a gift",
          "Clean the kitchen every day"
        ],
        "correctIndex": 1,
        "explanation": "\"Camila y Tomás prometieron hacer el desayuno otra vez el próximo año\" means they promised to make breakfast again next year."
      }
    ]
  },
  {
    "slug": "la-reunion-familiar-en-el-parque",
    "level": "A2",
    "number": 90,
    "title": "La reunión familiar en el parque",
    "summary": "A big family picnic is nearly ruined by ants until a helpful stranger saves the day.",
    "duration": "6 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Cada verano, la familia Ramírez organizaba una gran reunión en el parque central. Este año, invitaron a todos los tíos, primos y abuelos. Prepararon mucha comida: sándwiches, ensaladas y un pastel de chocolate.",
          "El día de la reunión, hacía mucho sol y el parque estaba lleno de gente. La familia puso las mantas debajo de un árbol grande. Pusieron toda la comida sobre una mesa de madera.",
          "Después de jugar fútbol por una hora, todos tenían mucha hambre. Cuando fueron a comer, vieron que cientos de hormigas caminaban por toda la comida. Los niños gritaron y se alejaron de la mesa.",
          "La abuela dijo que ya no había nada que comer. Todos estaban tristes porque perdieron casi toda la comida. Los primos más pequeños empezaron a llorar un poco.",
          "En ese momento, un señor que estaba cerca los escuchó hablar del problema. Se acercó y les dijo: \"Yo vendo comida allí, cerca del lago. Puedo ayudarlos.\" Señaló un pequeño puesto de comida.",
          "El señor les vendió pan, queso y frutas frescas a un precio muy bueno. La familia le dio las gracias muchas veces por su ayuda. Compraron suficiente comida para todos.",
          "Los niños comieron sándwiches nuevos debajo del árbol, lejos de las hormigas. Esta vez, pusieron la comida sobre una manta limpia, no en el suelo. Todos se rieron del problema de las hormigas.",
          "Al final del día, la familia decidió que el próximo año llevará la comida en cajas cerradas. Fue una tarde divertida a pesar del problema. Todos volvieron a casa cansados pero felices."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "What ruined most of the family's food?",
        "options": [
          "Rain",
          "Ants",
          "A dog",
          "The heat"
        ],
        "correctIndex": 1,
        "explanation": "\"cientos de hormigas caminaban por toda la comida\" tells us hundreds of ants were walking all over the food."
      },
      {
        "type": "multiple-choice",
        "question": "Who helped the family after the food problem?",
        "options": [
          "A park ranger",
          "A man selling food nearby",
          "Another relative",
          "A police officer"
        ],
        "correctIndex": 1,
        "explanation": "A stranger said \"Yo vendo comida allí, cerca del lago. Puedo ayudarlos\" (I sell food there, near the lake. I can help you)."
      },
      {
        "type": "multiple-choice",
        "question": "Where did the family eat the second time?",
        "options": [
          "At a restaurant",
          "In their car",
          "Under the tree, away from the ants",
          "At the man's food stand"
        ],
        "correctIndex": 2,
        "explanation": "\"Los niños comieron sándwiches nuevos debajo del árbol, lejos de las hormigas\" means the kids ate new sandwiches under the tree, away from the ants."
      },
      {
        "type": "multiple-choice",
        "question": "What did the family decide to do differently next year?",
        "options": [
          "Not have the reunion",
          "Bring the food in closed boxes",
          "Eat at a restaurant instead",
          "Invite fewer people"
        ],
        "correctIndex": 1,
        "explanation": "The story ends: \"el próximo año llevará la comida en cajas cerradas\" (next year they will bring the food in closed boxes)."
      }
    ]
  },
  {
    "slug": "la-visita-del-tio-jose",
    "level": "A2",
    "number": 91,
    "title": "La visita del tío José",
    "summary": "A family prepares an emotional welcome for an uncle visiting from Argentina after many years away.",
    "duration": "6 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "El tío José vivía en Argentina desde hacía quince años. Trabajaba allí como ingeniero y casi nunca podía visitar a la familia. Por fin, un mes de julio, José compró un boleto de avión para ver a sus hermanos y sobrinos.",
          "Cuando la familia recibió la noticia, todos se pusieron muy contentos. Los niños, Valentina y Bruno, no conocían a su tío en persona; solo lo veían por videollamada.",
          "La familia limpió la casa y preparó el cuarto de invitados para José. Valentina hizo un cartel grande que decía \"Bienvenido, tío José\" con letras de colores. Bruno ayudó a colgar el cartel en la puerta.",
          "El día de la llegada, toda la familia fue al aeropuerto por la tarde. Esperaron cerca de una hora porque el avión llegó tarde. Cuando José finalmente salió, todos corrieron hacia él.",
          "José abrazó a sus hermanos primero y después se arrodilló para saludar a los niños. \"Ustedes son más altos que en las fotos,\" dijo con una sonrisa. Valentina le dio el cartel que ella misma pintó.",
          "En casa, la abuela preparó la comida favorita de José: empanadas y arroz con pollo. Todos se sentaron juntos a la mesa y hablaron por horas. José contó historias divertidas de su vida en Argentina.",
          "Durante las dos semanas de visita, José llevó a los niños al zoológico y al cine. Les enseñó palabras nuevas en un acento diferente al de ellos. Bruno decidió que quería visitar Argentina algún día.",
          "El día en que José regresó a su país, todos lloraron un poco en el aeropuerto. José prometió que la próxima visita será más pronto. La familia esperará su regreso con mucha alegría."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "Where did tío José live?",
        "options": [
          "Argentina",
          "Spain",
          "Mexico",
          "Chile"
        ],
        "correctIndex": 0,
        "explanation": "The story opens with \"El tío José vivía en Argentina desde hacía quince años\" (Uncle José had lived in Argentina for fifteen years)."
      },
      {
        "type": "multiple-choice",
        "question": "How did the children know their uncle before his visit?",
        "options": [
          "They had met him many times",
          "Only through video calls",
          "From photos their dad showed them",
          "They had never heard of him"
        ],
        "correctIndex": 1,
        "explanation": "\"no conocían a su tío en persona; solo lo veían por videollamada\" means they didn't know their uncle in person, only through video calls."
      },
      {
        "type": "multiple-choice",
        "question": "What did José say when he saw the kids at the airport?",
        "options": [
          "\"You are taller than in the photos\"",
          "\"You look just like your mother\"",
          "\"I almost didn't recognize you\"",
          "\"You are much older than I thought\""
        ],
        "correctIndex": 0,
        "explanation": "He said \"Ustedes son más altos que en las fotos\" (You are taller than in the photos)."
      },
      {
        "type": "multiple-choice",
        "question": "What did the grandmother cook for José?",
        "options": [
          "Pizza",
          "His favorite food: empanadas and rice with chicken",
          "A birthday cake",
          "Fish and vegetables"
        ],
        "correctIndex": 1,
        "explanation": "\"la abuela preparó la comida favorita de José: empanadas y arroz con pollo\" describes grandma making José's favorite food: empanadas and chicken with rice."
      }
    ]
  },
  {
    "slug": "la-boda-de-mi-prima",
    "level": "A2",
    "number": 92,
    "title": "La boda de mi prima",
    "summary": "A girl serves as flower girl at her cousin's wedding and worries about tripping in front of everyone.",
    "duration": "6 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Mi prima Valeria se casaba con su novio Andrés en junio, y yo estaba muy emocionada. Valeria me pidió ser la niña de las flores en la boda. Nunca antes hice algo tan importante en una fiesta.",
          "Dos semanas antes de la boda, fui con mi mamá a comprar mi vestido. Elegimos un vestido rosado con una cinta blanca en la cintura. Me quedaba un poco largo, así que una costurera lo arregló.",
          "La noche antes de la boda, no pude dormir bien porque estaba nerviosa. Pensaba en caminar por el pasillo delante de cien personas. Tenía miedo de tropezar con el vestido.",
          "El día de la boda, mi tía me ayudó a peinarme y me puso flores pequeñas en el pelo. Me dio una canasta llena de pétalos de rosa. \"Camina despacio y sonríe,\" me dijo con cariño.",
          "Cuando la música empezó, caminé por el pasillo muy despacio. Tiré los pétalos con las dos manos, como practicamos en casa. Todos los invitados me miraron y sonrieron.",
          "Llegué al frente sin ningún problema, y me senté al lado de mi mamá. Valeria entró después, más bonita que nunca, con un vestido blanco largo. Andrés la miraba con los ojos llenos de lágrimas.",
          "Durante la fiesta, bailé mucho con mis primos y comí un pedazo enorme de pastel. Valeria me buscó y me dio las gracias por hacer todo tan bien. \"Fuiste la mejor niña de las flores,\" me dijo.",
          "Esa noche, volví a casa muy cansada pero feliz. Guardé unos pétalos de rosa en una caja como recuerdo. Fue uno de los días más especiales de mi vida."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "What role did the narrator have in the wedding?",
        "options": [
          "Bridesmaid",
          "Flower girl",
          "Singer",
          "Photographer"
        ],
        "correctIndex": 1,
        "explanation": "\"Valeria me pidió ser la niña de las flores en la boda\" means Valeria asked her to be the flower girl at the wedding."
      },
      {
        "type": "multiple-choice",
        "question": "What worried the narrator the night before the wedding?",
        "options": [
          "Forgetting the vows",
          "Tripping in her dress in front of everyone",
          "Losing the flowers",
          "Being late"
        ],
        "correctIndex": 1,
        "explanation": "\"Tenía miedo de tropezar con el vestido\" means she was afraid of tripping in her dress."
      },
      {
        "type": "multiple-choice",
        "question": "What did the aunt tell the narrator to do while walking?",
        "options": [
          "Run fast",
          "Walk slowly and smile",
          "Sing a song",
          "Hold her mom's hand"
        ],
        "correctIndex": 1,
        "explanation": "Her aunt said \"Camina despacio y sonríe\" (Walk slowly and smile)."
      },
      {
        "type": "multiple-choice",
        "question": "What did Valeria tell the narrator after the ceremony?",
        "options": [
          "\"You were the best flower girl\"",
          "\"You should be a bridesmaid next time\"",
          "\"You dropped too many petals\"",
          "\"I didn't see you walk in\""
        ],
        "correctIndex": 0,
        "explanation": "Valeria said \"Fuiste la mejor niña de las flores\" (You were the best flower girl)."
      }
    ]
  },
  {
    "slug": "el-dolor-de-estomago",
    "level": "A2",
    "number": 93,
    "title": "El dolor de estómago",
    "summary": "A boy eats too much cake at a party and learns a lesson about moderation after a trip to the doctor.",
    "duration": "6 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "En la fiesta de cumpleaños de su amigo Iván, Samuel comió tres pedazos de pastel de chocolate. También comió muchos dulces y tomó dos vasos de refresco. Nadie le dijo que parara.",
          "Esa noche, Samuel empezó a sentir un dolor fuerte en el estómago. Se acostó en la cama, pero el dolor no desaparecía. Fue a la habitación de sus papás y les dijo que se sentía muy mal.",
          "Su mamá le tocó la frente y vio que no tenía fiebre. \"Creo que comiste demasiado dulce,\" le dijo con calma. Aun así, decidieron llevarlo al médico por la mañana, porque el dolor era muy fuerte.",
          "En el consultorio, la doctora le preguntó a Samuel qué comió en la fiesta. Él le contó todo, un poco avergonzado. La doctora sonrió y le explicó que su estómago necesitaba descansar.",
          "\"No es nada serio,\" dijo la doctora. \"Solo debes comer menos azúcar por unos días.\" Le recomendó tomar mucha agua y comer cosas suaves, como arroz y plátano.",
          "Samuel siguió los consejos de la doctora durante toda la semana. Comió sopa, arroz y frutas, y evitó los dulces por completo. Poco a poco, el dolor de estómago desapareció.",
          "La próxima vez que fue a una fiesta, Samuel recordó lo que pasó. Comió solo un pedazo de pastel y tomó agua en vez de refresco. Se sintió mucho mejor al día siguiente.",
          "Ahora, Samuel siempre piensa antes de comer demasiado dulce. Le explica a sus amigos por qué es importante comer con moderación. Aprendió una lección importante sobre cuidar su cuerpo."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "What did Samuel eat too much of at the party?",
        "options": [
          "Pizza",
          "Cake and candy",
          "Ice cream",
          "Fruit"
        ],
        "correctIndex": 1,
        "explanation": "\"Samuel comió tres pedazos de pastel de chocolate. También comió muchos dulces\" shows he ate three pieces of cake and lots of candy."
      },
      {
        "type": "multiple-choice",
        "question": "What did the doctor say was the problem?",
        "options": [
          "A serious infection",
          "Too much sugar",
          "A broken bone",
          "An allergy"
        ],
        "correctIndex": 1,
        "explanation": "The doctor's mother figure said \"Creo que comiste demasiado dulce\" (I think you ate too much candy), which the doctor confirmed."
      },
      {
        "type": "multiple-choice",
        "question": "What foods did the doctor recommend?",
        "options": [
          "Only water",
          "Rice and banana",
          "More cake",
          "Spicy food"
        ],
        "correctIndex": 1,
        "explanation": "The doctor recommended \"comer cosas suaves, como arroz y plátano\" (eating soft things, like rice and banana)."
      },
      {
        "type": "multiple-choice",
        "question": "What did Samuel do differently at the next party?",
        "options": [
          "He didn't eat anything",
          "He ate only one piece of cake and drank water",
          "He left early",
          "He brought his own food"
        ],
        "correctIndex": 1,
        "explanation": "\"Comió solo un pedazo de pastel y tomó agua en vez de refresco\" means he ate only one piece of cake and drank water instead of soda."
      }
    ]
  },
  {
    "slug": "el-tobillo-torcido",
    "level": "A2",
    "number": 94,
    "title": "El tobillo torcido",
    "summary": "A girl sprains her ankle skateboarding at the park and has to adjust to using crutches for weeks.",
    "duration": "6 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "A Lucía le encantaba andar en patineta en el parque cerca de su casa. Practicaba todos los días después de la escuela con sus amigos. Un sábado, intentó un truco nuevo que vio en un video.",
          "Cuando saltó con la patineta, perdió el equilibrio y cayó al suelo. Sintió un dolor muy fuerte en el tobillo derecho. No podía pararse sin ayuda.",
          "Sus amigos corrieron a buscar a la mamá de Lucía, que estaba sentada en un banco cerca. Ella vio el tobillo hinchado de su hija y decidió llevarla al hospital inmediatamente. Lucía lloraba un poco por el dolor.",
          "En el hospital, un doctor le tomó una radiografía del pie. Le explicó que el tobillo no estaba roto, pero sí estaba torcido. \"Vas a necesitar muletas por dos semanas,\" le dijo el doctor.",
          "Al principio, caminar con muletas era muy difícil para Lucía. Se caía a veces y sus brazos se cansaban rápido. Su hermano mayor le enseñó a moverse mejor por la casa.",
          "Durante esas dos semanas, Lucía no pudo ir al parque ni andar en patineta. Sus amigos la visitaban después de la escuela y le contaban las noticias. Le trajeron su tarea todos los días.",
          "Poco a poco, el tobillo mejoró y el dolor desapareció. Cuando volvió al doctor, él le dijo que ya podía caminar sin muletas. Lucía se sintió muy feliz de recuperar su libertad.",
          "Ahora, Lucía todavía anda en patineta, pero es más cuidadosa que antes. Siempre usa protectores para las rodillas y los codos. Aprendió que la seguridad es más importante que la velocidad."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "What was Lucía doing when she got hurt?",
        "options": [
          "Riding a bike",
          "Skateboarding",
          "Playing soccer",
          "Running"
        ],
        "correctIndex": 1,
        "explanation": "The story is about Lucía trying a new trick while she \"andar en patineta\" (skateboarding)."
      },
      {
        "type": "multiple-choice",
        "question": "What did the doctor say about her ankle?",
        "options": [
          "It was broken",
          "It was sprained, not broken",
          "Nothing was wrong with it",
          "It needed surgery"
        ],
        "correctIndex": 1,
        "explanation": "The doctor explained that \"el tobillo no estaba roto, pero sí estaba torcido\" (the ankle wasn't broken, but it was sprained)."
      },
      {
        "type": "multiple-choice",
        "question": "How long did Lucía need crutches?",
        "options": [
          "One week",
          "Two weeks",
          "One month",
          "Three days"
        ],
        "correctIndex": 1,
        "explanation": "The doctor told her \"Vas a necesitar muletas por dos semanas\" (You are going to need crutches for two weeks)."
      },
      {
        "type": "multiple-choice",
        "question": "What lesson did Lucía learn by the end of the story?",
        "options": [
          "Skateboarding is too dangerous to continue",
          "Safety is more important than speed",
          "She should quit skateboarding forever",
          "She only needs a helmet"
        ],
        "correctIndex": 1,
        "explanation": "The final line says she learned that \"la seguridad es más importante que la velocidad\" (safety is more important than speed)."
      }
    ]
  },
  {
    "slug": "la-gripe-de-marco",
    "level": "A2",
    "number": 95,
    "title": "La gripe de Marco",
    "summary": "A boy comes down with the flu and has to miss his cousin's birthday party, but his grandmother's care makes him feel better.",
    "duration": "6 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Marco se despertó un lunes con dolor de cabeza y mucho frío. Se levantó de la cama, pero las piernas le temblaban un poco. Fue a la cocina y le dijo a su mamá que no se sentía bien.",
          "Su mamá le puso una mano en la frente y sintió que tenía mucha fiebre. Le tomó la temperatura con un termómetro: treinta y nueve grados. \"Tienes gripe,\" le dijo. \"Hoy no vas a la escuela.\"",
          "El problema era que esa tarde, la fiesta de cumpleaños de su primo Bruno era en el club del barrio. Marco esperaba esa fiesta desde hacía semanas.",
          "Marco le pidió a su mamá ir a la fiesta, pero ella le explicó que necesitaba descansar. \"Si vas así, puedes contagiar a tus primos,\" le dijo con cariño. Marco se puso triste, pero entendió la razón.",
          "Su abuela llegó por la tarde para cuidarlo mientras sus papás trabajaban. Le preparó una sopa caliente de pollo y le trajo té con miel y limón. También le puso una manta suave sobre las piernas.",
          "Bruno lo llamó por teléfono desde la fiesta para contarle todo. Le dijo que guardó un pedazo de pastel para él. Marco se rió un poco, aunque todavía se sentía mal.",
          "Al día siguiente, Marco se sintió mucho mejor gracias al descanso y la sopa de su abuela. La fiebre bajó y pudo comer normalmente otra vez. Su abuela le dijo que el cuerpo necesita tiempo para curarse.",
          "El fin de semana, Bruno visitó a Marco y le trajo el pedazo de pastel prometido. Los dos primos comieron juntos y hablaron de la fiesta. Marco prometió que la próxima vez no se perdería ninguna fiesta."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "Why couldn't Marco go to school?",
        "options": [
          "He was on vacation",
          "He had the flu",
          "He was grounded",
          "The school was closed"
        ],
        "correctIndex": 1,
        "explanation": "His mom said \"Tienes gripe... Hoy no vas a la escuela\" (You have the flu... today you're not going to school)."
      },
      {
        "type": "multiple-choice",
        "question": "What event did Marco miss?",
        "options": [
          "A soccer game",
          "His cousin Bruno's birthday party",
          "A school trip",
          "A family dinner"
        ],
        "correctIndex": 1,
        "explanation": "The story mentions \"la fiesta de cumpleaños de su primo Bruno\" (his cousin Bruno's birthday party) that Marco missed."
      },
      {
        "type": "multiple-choice",
        "question": "What did his grandmother make for him?",
        "options": [
          "A sandwich",
          "Hot chicken soup",
          "A cake",
          "Ice cream"
        ],
        "correctIndex": 1,
        "explanation": "\"Le preparó una sopa caliente de pollo\" means she made him hot chicken soup."
      },
      {
        "type": "multiple-choice",
        "question": "What did Bruno save for Marco?",
        "options": [
          "A gift",
          "A piece of cake",
          "Photos from the party",
          "A video game"
        ],
        "correctIndex": 1,
        "explanation": "Bruno told Marco \"guardó un pedazo de pastel para él\" (he saved a piece of cake for him)."
      }
    ]
  },
  {
    "slug": "la-alergia-nueva",
    "level": "A2",
    "number": 96,
    "title": "La alergia nueva",
    "summary": "A girl discovers she has a food allergy after trying shrimp for the first time at a family dinner.",
    "duration": "6 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "En la cena de Navidad, la abuela de Paula preparó un plato nuevo con camarones. Paula nunca comía camarones en casa, así que quería probarlos.",
          "Después de comer unos camarones, Paula sintió que la boca le picaba un poco. Unos minutos después, le salieron manchas rojas en el cuello y los brazos. Le costaba respirar bien.",
          "Su papá vio las manchas y se asustó mucho. \"Vamos al hospital ahora mismo,\" dijo, y todos salieron rápido de la casa. En el carro, Paula tenía miedo porque nunca se había sentido así.",
          "En el hospital, un doctor le dio una medicina rápidamente para bajar la reacción. Poco a poco, la picazón desapareció y Paula pudo respirar mejor. El doctor le explicó que era alérgica a los mariscos.",
          "\"Debes evitar los camarones y otros mariscos para siempre,\" le dijo el doctor. También le dio una tarjeta con información sobre su alergia, para llevarla siempre. Sus papás escucharon todo con mucha atención.",
          "De vuelta en casa, la abuela se sintió muy mal por lo que pasó. \"No lo sabíamos,\" le dijo a Paula, y la abrazó fuerte. Paula le dijo que no era culpa de nadie.",
          "Desde ese día, la familia siempre le pregunta al mesero en los restaurantes si la comida tiene mariscos. Paula aprendió a leer las etiquetas de los alimentos con cuidado. Su mamá guarda la tarjeta del doctor en su bolso siempre.",
          "Ahora, Paula sabe cuidarse mejor y no le tiene miedo a comer cosas nuevas. Solo pregunta primero qué ingredientes tienen. En el futuro, ella misma revisará cada plato antes de probarlo."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "What food gave Paula an allergic reaction?",
        "options": [
          "Peanuts",
          "Shrimp",
          "Strawberries",
          "Eggs"
        ],
        "correctIndex": 1,
        "explanation": "The story describes \"un plato nuevo con camarones\" (a new dish with shrimp) that caused her reaction."
      },
      {
        "type": "multiple-choice",
        "question": "What symptoms did Paula have?",
        "options": [
          "A stomachache only",
          "Red spots and trouble breathing",
          "A headache",
          "Just a fever"
        ],
        "correctIndex": 1,
        "explanation": "The text says \"le salieron manchas rojas en el cuello y los brazos. Le costaba respirar bien\" (red spots appeared on her neck and arms; she had trouble breathing)."
      },
      {
        "type": "multiple-choice",
        "question": "What did the doctor tell Paula to avoid forever?",
        "options": [
          "Sugar",
          "Shellfish, like shrimp",
          "Dairy",
          "Spicy food"
        ],
        "correctIndex": 1,
        "explanation": "The doctor said \"Debes evitar los camarones y otros mariscos para siempre\" (You must avoid shrimp and other shellfish forever)."
      },
      {
        "type": "multiple-choice",
        "question": "What does the family do now at restaurants?",
        "options": [
          "Order the same dish every time",
          "Ask the waiter if the food has shellfish",
          "Avoid restaurants entirely",
          "Bring their own food"
        ],
        "correctIndex": 1,
        "explanation": "\"la familia siempre le pregunta al mesero en los restaurantes si la comida tiene mariscos\" means the family always asks the waiter if the food has shellfish."
      }
    ]
  },
  {
    "slug": "el-diente-flojo",
    "level": "A2",
    "number": 97,
    "title": "El diente flojo",
    "summary": "A boy is nervous about his first loose tooth and eventually visits the dentist to have it removed.",
    "duration": "6 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Un día en la escuela, Andrés sintió algo raro cuando comió una manzana. Uno de sus dientes de abajo se movía un poco. Se tocó el diente con la lengua durante toda la clase.",
          "Cuando llegó a casa, le contó a su mamá sobre el diente flojo. Ella se lo miró con cuidado y le dijo que era normal a su edad. \"Vas a perder varios dientes este año,\" le explicó con una sonrisa.",
          "Andrés tenía un poco de miedo de que le doliera mucho al caerse el diente. Su hermana mayor le dijo que a ella no le dolió nada cuando perdió los suyos. Aun así, Andrés estaba nervioso.",
          "Durante una semana, el diente se movió cada vez más. Andrés comía con mucho cuidado para no tocarlo. Por las noches, jugaba con el diente con la lengua sin querer.",
          "Como el diente no se caía solo, sus papás decidieron llevarlo al dentista. En el consultorio, la dentista lo examinó y le dijo que el diente ya estaba muy flojo. \"Esto no va a doler,\" le prometió.",
          "La dentista puso un poco de algodón y sacó el diente rápidamente. Andrés sintió solo una pequeña molestia, nada del otro mundo. Se sorprendió de lo fácil que fue todo.",
          "Esa noche, Andrés puso el diente debajo de la almohada, como le contó su abuela. Por la mañana, encontró una moneda en su lugar. Se puso muy contento con la sorpresa.",
          "Ahora, Andrés ya no tiene miedo de perder dientes. Cada vez que siente uno flojo, se lo muestra a su mamá con orgullo. Sabe que pronto tendrá una sonrisa completamente nueva."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "What did Andrés first notice while eating an apple?",
        "options": [
          "A stomachache",
          "A loose tooth",
          "A sore throat",
          "A cut on his lip"
        ],
        "correctIndex": 1,
        "explanation": "\"Uno de sus dientes de abajo se movía un poco\" means one of his bottom teeth was a little loose."
      },
      {
        "type": "multiple-choice",
        "question": "Who told Andrés that losing teeth didn't hurt?",
        "options": [
          "His mom",
          "His older sister",
          "The dentist",
          "His teacher"
        ],
        "correctIndex": 1,
        "explanation": "\"Su hermana mayor le dijo que a ella no le dolió nada cuando perdió los suyos\" means his older sister told him it didn't hurt her at all when she lost her own teeth."
      },
      {
        "type": "multiple-choice",
        "question": "What did the dentist do?",
        "options": [
          "Filled a cavity",
          "Removed the loose tooth quickly",
          "Gave him braces",
          "Just cleaned his teeth"
        ],
        "correctIndex": 1,
        "explanation": "\"La dentista puso un poco de algodón y sacó el diente rápidamente\" means the dentist put some cotton and pulled the tooth quickly."
      },
      {
        "type": "multiple-choice",
        "question": "What did Andrés find under his pillow the next morning?",
        "options": [
          "A note",
          "A coin",
          "A toy",
          "Candy"
        ],
        "correctIndex": 1,
        "explanation": "\"Por la mañana, encontró una moneda en su lugar\" means in the morning he found a coin in its place."
      }
    ]
  },
  {
    "slug": "la-alcancia-de-sofia",
    "level": "A2",
    "number": 98,
    "title": "La alcancía de Sofía",
    "summary": "A girl saves her allowance for months to buy a special gift for her father's birthday.",
    "duration": "6 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Sofía recibía dos dólares cada semana por ayudar en casa. En vez de gastar el dinero en dulces, decidió guardarlo en una alcancía en forma de cerdo. Quería comprarle un regalo especial a su papá.",
          "El cumpleaños de su papá era en tres meses, y Sofía calculó cuánto dinero necesitaba. Vio en una tienda una gorra de su equipo de fútbol favorito por veinte dólares. Empezó a ahorrar con mucha disciplina.",
          "Cada semana, Sofía ponía su dinero en la alcancía y la agitaba para escuchar las monedas. A veces quería comprar chicles o revistas, pero se controlaba. \"Es para mi papá,\" se decía a sí misma.",
          "Un mes antes del cumpleaños, Sofía contó todo el dinero de la alcancía. Tenía dieciséis dólares, todavía no era suficiente. Le pidió a su mamá trabajo extra para ganar más dinero.",
          "Su mamá le pagó por ayudar a organizar el garaje durante dos sábados. Con ese dinero extra, Sofía por fin llegó a los veinte dólares. Se sintió muy orgullosa de su esfuerzo.",
          "El día antes del cumpleaños, Sofía fue a la tienda con su mamá. Compró la gorra y pidió que la envolvieran en papel de regalo azul. Caminó a casa con una sonrisa enorme.",
          "El día del cumpleaños, Sofía le dio el regalo a su papá después de la cena. Él abrió la caja despacio y vio la gorra de su equipo favorito. \"¿Cómo pagaste esto?\" preguntó, muy sorprendido.",
          "Sofía le explicó que ahorró el dinero durante tres meses, poquito a poco. Su papá la abrazó fuerte y le dijo que era el mejor regalo que recibió en años. Desde ese día, Sofía sigue ahorrando para su próxima meta."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "Why was Sofía saving money?",
        "options": [
          "To buy herself candy",
          "To buy her dad a birthday gift",
          "To go on a trip",
          "To buy a toy"
        ],
        "correctIndex": 1,
        "explanation": "\"Quería comprarle un regalo especial a su papá\" means she wanted to buy her dad a special gift."
      },
      {
        "type": "multiple-choice",
        "question": "What did Sofía do to earn extra money?",
        "options": [
          "Sold her toys",
          "Helped organize the garage",
          "Asked her grandmother for money",
          "Found money on the street"
        ],
        "correctIndex": 1,
        "explanation": "\"Su mamá le pagó por ayudar a organizar el garaje durante dos sábados\" means her mom paid her for helping organize the garage."
      },
      {
        "type": "multiple-choice",
        "question": "What gift did Sofía buy?",
        "options": [
          "A soccer ball",
          "A cap from his favorite team",
          "A book",
          "A watch"
        ],
        "correctIndex": 1,
        "explanation": "She bought \"una gorra de su equipo de fútbol favorito\" (a cap from his favorite soccer team)."
      },
      {
        "type": "multiple-choice",
        "question": "About how long did it take Sofía to save the money?",
        "options": [
          "One week",
          "One month",
          "Three months",
          "A year"
        ],
        "correctIndex": 2,
        "explanation": "The story states \"ahorró el dinero durante tres meses\" (she saved the money for three months)."
      }
    ]
  },
  {
    "slug": "la-lista-del-supermercado",
    "level": "A2",
    "number": 99,
    "title": "La lista del supermercado",
    "summary": "A boy helps his mother shop on a tight budget and learns to compare prices at the supermarket.",
    "duration": "6 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Este mes, la familia de Bruno necesitaba gastar menos dinero en comida. Su mamá le explicó que iban a hacer una lista antes de ir al supermercado. Bruno quería ayudar a ahorrar dinero.",
          "El sábado, Bruno y su mamá fueron al supermercado con la lista y cien dólares en efectivo. \"Solo podemos comprar lo que está en la lista,\" le dijo su mamá. Bruno llevó el carrito con cuidado.",
          "En el pasillo de las frutas, Bruno vio dos tipos de manzanas: unas más caras y otras más baratas. Le preguntó a su mamá por qué había tanta diferencia de precio. Ella le explicó que las manzanas caras venían de otro país.",
          "Decidieron comprar las manzanas más baratas porque sabían casi igual de ricas. Bruno empezó a comparar precios en cada pasillo, como un juego. Encontró arroz más barato en una marca diferente.",
          "En la caja, la cajera sumó todo el precio de las compras. El total fue noventa y dos dólares, menos de lo que esperaban gastar. Su mamá le sonrió a Bruno y le dijo que ayudó mucho.",
          "De regreso a casa, su mamá le dio a Bruno los ocho dólares que sobraron. \"Puedes guardarlos o gastarlos en algo pequeño,\" le dijo. Bruno decidió guardarlos para el futuro.",
          "Esa noche, cocinaron juntos con todo lo que compraron. Bruno se sintió orgulloso porque ayudó a su familia a ahorrar dinero. Su mamá le dijo: \"Voy a ir contigo al supermercado cada semana.\"",
          "Desde ese día, Bruno siempre revisa los precios antes de poner algo en el carrito. Aprendió que comparar precios es una manera fácil de ahorrar. Ahora, ayuda a su mamá con la lista cada semana."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "Why did Bruno's family need to shop carefully this month?",
        "options": [
          "They lost their jobs",
          "They wanted to spend less money on food",
          "They were moving",
          "The store raised prices"
        ],
        "correctIndex": 1,
        "explanation": "The story opens with \"la familia de Bruno necesitaba gastar menos dinero en comida\" (Bruno's family needed to spend less money on food)."
      },
      {
        "type": "multiple-choice",
        "question": "What rule did mom set at the store?",
        "options": [
          "Only buy what's on the list",
          "Buy only fruit",
          "Spend as much as needed",
          "Let Bruno choose everything"
        ],
        "correctIndex": 0,
        "explanation": "His mom said \"Solo podemos comprar lo que está en la lista\" (We can only buy what's on the list)."
      },
      {
        "type": "multiple-choice",
        "question": "Why did they choose the cheaper apples?",
        "options": [
          "They looked better",
          "They tasted almost the same and cost less",
          "They were on sale",
          "The expensive ones were sold out"
        ],
        "correctIndex": 1,
        "explanation": "The text says they bought the cheaper apples because \"sabían casi igual de ricas\" (they tasted almost as good) as the pricier ones."
      },
      {
        "type": "multiple-choice",
        "question": "How much money was left over after shopping?",
        "options": [
          "$8",
          "$92",
          "$100",
          "$20"
        ],
        "correctIndex": 0,
        "explanation": "\"su mamá le dio a Bruno los ocho dólares que sobraron\" means his mom gave him the eight dollars that were left over."
      }
    ]
  },
  {
    "slug": "los-zapatos-nuevos",
    "level": "A2",
    "number": 100,
    "title": "Los zapatos nuevos",
    "summary": "A girl outgrows her sneakers and must adjust her expectations when the store doesn't have her favorite color in stock.",
    "duration": "6 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "A Camila le quedaban pequeños los zapatos deportivos, y le dolían los pies cuando caminaba. Su mamá se dio cuenta y decidió llevarla a comprar zapatos nuevos. Fueron a la zapatería del centro comercial el sábado.",
          "Camila quería unos zapatos rosados con brillos, iguales a los de su amiga Valentina. Buscaron por toda la tienda, pero no encontraron su talla en ese color. El vendedor les dijo que solo quedaban en azul o en morado.",
          "Camila se puso un poco triste porque quería exactamente el color rosado. Su mamá le dijo: \"A veces no podemos tener todo lo que queremos. ¿Cuál de estos dos te gusta más?\" Camila pensó un momento.",
          "Se probó los zapatos morados primero y caminó por la tienda. Después se probó los azules, que le quedaban un poco más cómodos. Decidió que los azules eran mejores para correr.",
          "El vendedor le explicó a la mamá de Camila el precio de cada par. Los zapatos azules costaban treinta y cinco dólares, un poco menos que los otros. Su mamá pagó con tarjeta y le dio las gracias al vendedor.",
          "De camino a casa, Camila miraba sus zapatos nuevos con curiosidad. Ya no estaba triste por el color; le gustaban mucho la comodidad y la forma. \"Son más ligeros que mis zapatos viejos,\" le dijo a su mamá.",
          "El lunes, Camila llevó los zapatos nuevos a la escuela por primera vez. Corrió en el recreo y sintió que sus pies estaban muy cómodos. Valentina le dijo que los zapatos azules se veían geniales también.",
          "Camila aprendió que no siempre podemos elegir exactamente lo que queremos, pero podemos encontrar algo igual de bueno. Ahora cuida mucho sus zapatos nuevos para que le duren más tiempo. Los usa casi todos los días para jugar y correr."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "Why did Camila need new shoes?",
        "options": [
          "She lost them",
          "Her old ones were too small",
          "They were the wrong color",
          "They got wet"
        ],
        "correctIndex": 1,
        "explanation": "\"A Camila le quedaban pequeños los zapatos deportivos\" means her sneakers had become too small for her."
      },
      {
        "type": "multiple-choice",
        "question": "What color did Camila originally want?",
        "options": [
          "Blue",
          "Purple",
          "Pink with glitter",
          "Green"
        ],
        "correctIndex": 2,
        "explanation": "\"Camila quería unos zapatos rosados con brillos\" means Camila wanted pink shoes with glitter."
      },
      {
        "type": "multiple-choice",
        "question": "Why did Camila end up choosing the blue shoes?",
        "options": [
          "They were the only color left",
          "They were more comfortable",
          "Her mom picked them",
          "They were free"
        ],
        "correctIndex": 1,
        "explanation": "She tried the blue ones, \"que le quedaban un poco más cómodos\" (which fit a little more comfortably)."
      },
      {
        "type": "multiple-choice",
        "question": "What lesson did Camila learn?",
        "options": [
          "Always buy the most expensive item",
          "We can't always choose exactly what we want, but can find something just as good",
          "Never go shopping on Saturdays",
          "Pink shoes are the best"
        ],
        "correctIndex": 1,
        "explanation": "The final paragraph says she learned \"no siempre podemos elegir exactamente lo que queremos, pero podemos encontrar algo igual de bueno\" (we can't always choose exactly what we want, but we can find something just as good)."
      }
    ]
  },
  {
    "slug": "la-venta-de-garaje",
    "level": "A2",
    "number": 101,
    "title": "La venta de garaje",
    "summary": "Siblings organize a garage sale to earn money for a new bicycle, learning to negotiate prices with neighbors.",
    "duration": "6 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Iván quería una bicicleta nueva, pero costaba mucho dinero. Su hermana Daniela tuvo una idea: organizar una venta de garaje con juguetes y ropa vieja. Los dos empezaron a buscar cosas por toda la casa.",
          "Encontraron libros que ya no leían, juguetes viejos y ropa que ya no les quedaba. Pusieron un precio a cada cosa, desde cincuenta centavos hasta cinco dólares. Su papá les ayudó a hacer un cartel grande.",
          "El sábado por la mañana, pusieron todo sobre unas mesas frente a la casa. Colgaron el cartel que decía \"Venta de garaje, todo barato\" cerca de la calle. Esperaron con emoción a los primeros clientes.",
          "Una vecina llegó primero y compró unos libros y un rompecabezas. Después, otras personas del barrio se acercaron a mirar las cosas. Un hombre quiso comprar una bicicleta vieja de Iván por menos dinero del que pedía.",
          "\"¿Puedes bajar el precio a tres dólares?\" preguntó el hombre. Iván pensó un momento y decidió aceptar, porque igual ya no usaba esa bicicleta. Le dio las gracias y guardó el dinero con cuidado.",
          "Durante todo el día, muchos vecinos pasaron por la venta. Daniela era muy buena hablando con los clientes y explicando los precios. Al final de la tarde, vendieron casi todo lo que tenían.",
          "Contaron el dinero juntos en la cocina: sesenta y cinco dólares en total. No era suficiente para la bicicleta completa, pero era un buen comienzo. Su papá prometió pagar la otra mitad si ellos ahorraban el resto.",
          "Iván guardó el dinero en un sobre especial y siguió ahorrando cada semana. Dos meses después, por fin compró la bicicleta que quería. Recordó que trabajar y vender cosas juntos con su hermana fue divertido."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "Why did Iván and Daniela organize a garage sale?",
        "options": [
          "To clean the house for a party",
          "To earn money for a new bicycle",
          "Their parents told them to",
          "To help a neighbor"
        ],
        "correctIndex": 1,
        "explanation": "\"Iván quería una bicicleta nueva, pero costaba mucho dinero\" leads Daniela to suggest \"organizar una venta de garaje\" to raise money."
      },
      {
        "type": "multiple-choice",
        "question": "What happened when a man wanted to buy Iván's old bike?",
        "options": [
          "Iván refused to sell it",
          "Iván lowered the price to $3",
          "Iván gave it away for free",
          "The man didn't buy it"
        ],
        "correctIndex": 1,
        "explanation": "The man asked \"¿Puedes bajar el precio a tres dólares?\" and Iván \"decidió aceptar\" (decided to accept)."
      },
      {
        "type": "multiple-choice",
        "question": "How much did they earn in total?",
        "options": [
          "$35",
          "$50",
          "$65",
          "$100"
        ],
        "correctIndex": 2,
        "explanation": "\"Contaron el dinero juntos... sesenta y cinco dólares en total\" means they counted the money together: sixty-five dollars total."
      },
      {
        "type": "multiple-choice",
        "question": "What did their dad promise?",
        "options": [
          "To buy the whole bike himself",
          "To pay the other half if they saved the rest",
          "To return all the sold items",
          "To take them shopping"
        ],
        "correctIndex": 1,
        "explanation": "\"Su papá prometió pagar la otra mitad si ellos ahorraban el resto\" means their dad promised to pay the other half if they saved the rest."
      }
    ]
  },
  {
    "slug": "el-regalo-perfecto",
    "level": "A2",
    "number": 102,
    "title": "El regalo perfecto",
    "summary": "A boy visits several stores to compare prices before choosing the right birthday gift for his best friend.",
    "duration": "6 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "El cumpleaños de Tomás, el mejor amigo de Nico, era la próxima semana. Nico quería comprarle un regalo perfecto, pero no sabía qué elegir. Su mamá le dio quince dólares para gastar.",
          "Primero, Nico fue a una tienda de juguetes cerca de su casa. Vio un carro de control remoto, pero costaba veinticinco dólares, demasiado caro para él. Decidió seguir buscando en otra tienda.",
          "En la segunda tienda, encontró una pelota de fútbol firmada por un jugador famoso. Costaba dieciocho dólares, todavía más de lo que tenía. Nico empezó a preocuparse un poco.",
          "Su mamá le sugirió ir a una librería, porque a Tomás le gustaba mucho leer cómics. Allí, Nico encontró un cómic nuevo de su superhéroe favorito por doce dólares. Era menos caro que las otras opciones.",
          "Nico recordó que Tomás hablaba siempre de ese superhéroe en la escuela. Decidió comprar el cómic y, con el dinero que sobraba, también compró un lápiz especial. Pagó todo en la caja y guardó el cambio.",
          "El día del cumpleaños, Nico le dio el regalo envuelto en papel verde, el color favorito de Tomás. Tomás lo abrió con emoción y vio el cómic que tanto quería. \"¡Es exactamente el que buscaba!\" gritó feliz.",
          "Tomás le dio un abrazo fuerte a Nico y le dijo que era el mejor regalo de todos los que recibió. Los dos amigos leyeron el cómic juntos esa misma tarde. Nico se sintió muy contento de haber elegido bien.",
          "Después de ese día, Nico aprendió que un buen regalo no necesita ser el más caro. Lo importante es pensar en lo que la otra persona realmente quiere. La próxima vez, buscará con la misma atención."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "How much money did Nico's mom give him to spend?",
        "options": [
          "$10",
          "$12",
          "$15",
          "$25"
        ],
        "correctIndex": 2,
        "explanation": "\"Su mamá le dio quince dólares para gastar\" means his mom gave him fifteen dollars to spend."
      },
      {
        "type": "multiple-choice",
        "question": "Why didn't Nico buy the remote control car?",
        "options": [
          "Tomás didn't like cars",
          "It was too expensive",
          "The store didn't have it",
          "It was broken"
        ],
        "correctIndex": 1,
        "explanation": "The car \"costaba veinticinco dólares, demasiado caro para él\" (cost twenty-five dollars, too expensive for him)."
      },
      {
        "type": "multiple-choice",
        "question": "What gift did Nico finally choose?",
        "options": [
          "A soccer ball",
          "A comic book",
          "A video game",
          "A toy car"
        ],
        "correctIndex": 1,
        "explanation": "He found \"un cómic nuevo de su superhéroe favorito por doce dólares\" (a new comic of his favorite superhero for twelve dollars)."
      },
      {
        "type": "multiple-choice",
        "question": "What lesson did Nico learn?",
        "options": [
          "Always buy the most expensive gift",
          "A good gift doesn't need to be the most expensive one",
          "Never shop at bookstores",
          "Comics make bad gifts"
        ],
        "correctIndex": 1,
        "explanation": "The story ends with Nico learning \"un buen regalo no necesita ser el más caro\" (a good gift doesn't need to be the most expensive one)."
      }
    ]
  },
  {
    "slug": "los-vecinos-nuevos",
    "level": "A2",
    "number": 103,
    "title": "Los vecinos nuevos",
    "summary": "A shy girl becomes friends with the new family that moves in next door after a hesitant first meeting.",
    "duration": "6 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Una familia nueva se mudó a la casa de al lado el mes pasado. Emilia los veía desde su ventana, pero era muy tímida para saludarlos. Tenían una hija más o menos de su edad.",
          "Un día, mientras Emilia jugaba sola en el jardín, escuchó una voz al otro lado de la cerca. \"Hola, me llamo Zoe. ¿Quieres jugar?\" Emilia se puso nerviosa, pero le respondió que sí.",
          "Zoe le contó que su familia se mudó desde otra ciudad por el trabajo de su papá. Extrañaba a sus amigos antiguos y no conocía a nadie en el barrio todavía. Emilia le dijo que ella podía ser su nueva amiga.",
          "Las dos niñas empezaron a jugar juntas casi todos los días después de la escuela. Emilia le enseñó a Zoe los mejores lugares del parque cercano. Zoe le enseñó a Emilia un juego nuevo con cartas.",
          "Un fin de semana, la mamá de Zoe invitó a Emilia y a su familia a cenar. Comieron comida diferente a la que Emilia conocía, con especias que Emilia no probaba antes.",
          "Durante la cena, las dos familias hablaron y se rieron mucho. Los papás de Emilia y de Zoe descubrieron que trabajaban cerca uno del otro. Todos se sintieron muy cómodos, como si se conocieran desde hace tiempo.",
          "Con el paso de las semanas, Emilia y Zoe se hicieron mejores amigas. Se sentaban juntas en el autobús y compartían el almuerzo en la escuela. Zoe ya no se sentía tan sola en el barrio nuevo.",
          "Ahora, las dos familias organizan cenas juntas cada mes. Emilia aprendió que ser un poco valiente al principio puede traer una gran amistad. Está muy contenta de tener a Zoe como su vecina y mejor amiga."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "How did Emilia first feel about the new neighbors?",
        "options": [
          "Excited to meet them right away",
          "Too shy to say hello",
          "Angry that they moved in",
          "Indifferent"
        ],
        "correctIndex": 1,
        "explanation": "The story says \"era muy tímida para saludarlos\" (she was too shy to say hello to them)."
      },
      {
        "type": "multiple-choice",
        "question": "Why did Zoe's family move to the neighborhood?",
        "options": [
          "For her dad's job",
          "To be closer to family",
          "For the weather",
          "For a bigger house"
        ],
        "correctIndex": 0,
        "explanation": "\"su familia se mudó desde otra ciudad por el trabajo de su papá\" means her family moved because of her dad's job."
      },
      {
        "type": "multiple-choice",
        "question": "What did Zoe teach Emilia?",
        "options": [
          "A new sport",
          "A new card game",
          "How to cook",
          "A new language"
        ],
        "correctIndex": 1,
        "explanation": "\"Zoe le enseñó a Emilia un juego nuevo con cartas\" means Zoe taught Emilia a new card game."
      },
      {
        "type": "multiple-choice",
        "question": "What did Emilia learn from this experience?",
        "options": [
          "New neighbors are usually unfriendly",
          "Being a little brave can lead to a great friendship",
          "It's better to stay alone",
          "Moving is always hard"
        ],
        "correctIndex": 1,
        "explanation": "The final paragraph says Emilia learned that \"ser un poco valiente al principio puede traer una gran amistad\" (being a little brave at first can bring a great friendship)."
      }
    ]
  },
  {
    "slug": "la-senora-rosa-esta-sola",
    "level": "A2",
    "number": 104,
    "title": "La señora Rosa está sola",
    "summary": "Two children notice their elderly neighbor seems lonely and start visiting her, discovering she was once a teacher.",
    "duration": "6 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "La señora Rosa vivía sola en la casa azul al final de la calle. Su esposo murió hace dos años, y sus hijos vivían muy lejos. Los niños del barrio casi nunca hablaban con ella.",
          "Un día, Mateo y su hermana Luna la vieron sentada sola en su porche, mirando la calle. Decidieron acercarse y saludarla. \"Buenas tardes, señora Rosa. ¿Cómo está?\" preguntó Luna con timidez.",
          "La señora Rosa sonrió, sorprendida de que alguien le hablara. Les contó que antes era maestra de escuela primaria, hace muchos años. Los niños se sentaron en las escaleras del porche y escucharon sus historias.",
          "Desde ese día, Mateo y Luna empezaron a visitarla dos veces por semana. A veces le llevaban galletas que hacían con su mamá. Otras veces, solo se sentaban a hablar de la escuela y de sus amigos.",
          "La señora Rosa les enseñó a jugar dominó, un juego que ella jugaba de niña. Al principio los niños perdían casi siempre, pero poco a poco aprendieron los trucos del juego.",
          "Con el tiempo, Mateo y Luna la ayudaron también con pequeñas tareas, como regar las plantas y sacar la basura. La señora Rosa les daba las gracias con una gran sonrisa cada vez. Ya no se sentía tan sola como antes.",
          "Un sábado, los niños le organizaron una pequeña fiesta sorpresa para su cumpleaños. Invitaron a otros vecinos del barrio y compraron un pastel pequeño. La señora Rosa se emocionó mucho al ver a tantas personas.",
          "Ahora, la señora Rosa espera con alegría las visitas de Mateo y Luna cada semana. Ella dice que los niños le devolvieron las ganas de sonreír. El barrio entero aprendió que un poco de atención puede cambiar la vida de alguien."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "Why did Mateo and Luna first approach Mrs. Rosa?",
        "options": [
          "Their mom told them to",
          "They saw her sitting alone on her porch",
          "She called them over",
          "They needed help with homework"
        ],
        "correctIndex": 1,
        "explanation": "\"la vieron sentada sola en su porche, mirando la calle\" means they saw her sitting alone on her porch, watching the street."
      },
      {
        "type": "multiple-choice",
        "question": "What was Mrs. Rosa's former job?",
        "options": [
          "Doctor",
          "Elementary school teacher",
          "Chef",
          "Nurse"
        ],
        "correctIndex": 1,
        "explanation": "\"antes era maestra de escuela primaria\" means she used to be an elementary school teacher."
      },
      {
        "type": "multiple-choice",
        "question": "What game did Mrs. Rosa teach the kids?",
        "options": [
          "Chess",
          "Dominoes",
          "Cards",
          "Checkers"
        ],
        "correctIndex": 1,
        "explanation": "\"La señora Rosa les enseñó a jugar dominó\" means Mrs. Rosa taught them to play dominoes."
      },
      {
        "type": "multiple-choice",
        "question": "What did the kids organize for her?",
        "options": [
          "A garage sale",
          "A small surprise birthday party",
          "A trip",
          "A cooking class"
        ],
        "correctIndex": 1,
        "explanation": "\"los niños le organizaron una pequeña fiesta sorpresa para su cumpleaños\" means the kids organized a small surprise party for her birthday."
      }
    ]
  },
  {
    "slug": "el-gato-perdido-del-vecino",
    "level": "A2",
    "number": 105,
    "title": "El gato perdido del vecino",
    "summary": "Kids in the neighborhood work together to find a neighbor's missing cat, following clues around the block.",
    "duration": "6 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "El señor Díaz, un vecino del barrio, tenía un gato gris llamado Simón. Una tarde, dejó la puerta del jardín abierta, y Simón salió sin que nadie lo viera. Cuando el señor Díaz lo buscó por la casa, no lo encontró en ningún lado.",
          "Preocupado, el señor Díaz salió a la calle y les preguntó a los vecinos si vieron a su gato. Nadie sabía nada. Los niños del barrio, Elena y Marcos, decidieron ayudarlo a buscar.",
          "Hicieron carteles con una foto de Simón y el número de teléfono del señor Díaz. Pusieron los carteles en los postes de la calle y en la tienda de la esquina. Después, caminaron por el barrio llamando al gato por su nombre.",
          "Una vecina les dijo que escuchó un maullido cerca del árbol grande del parque. Elena y Marcos corrieron hacia allí y miraron entre las ramas. No vieron nada al principio, pero escucharon el mismo sonido.",
          "Marcos miró hacia arriba y vio a Simón atrapado en una rama alta del árbol. El gato estaba asustado y no quería bajar solo. Elena corrió a buscar al señor Díaz inmediatamente.",
          "El señor Díaz llegó con una escalera que le prestó otro vecino. Subió despacio y con cuidado agarró a Simón entre sus brazos. Todos los que estaban mirando aplaudieron cuando bajó del árbol sano y salvo.",
          "El señor Díaz les dio las gracias a Elena y a Marcos por su ayuda. Les regaló galletas caseras que su esposa preparó esa misma tarde. \"Ustedes son los mejores vecinos que puede tener alguien,\" les dijo.",
          "Desde ese día, el señor Díaz siempre cierra bien la puerta del jardín. Simón se quedó dentro de la casa, más seguro que antes. Todo el barrio recuerda ese día como el momento en que trabajaron juntos para ayudar a un vecino."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "How did Simón the cat get out?",
        "options": [
          "He jumped through a window",
          "The garden door was left open",
          "Someone let him out on purpose",
          "He escaped during a walk"
        ],
        "correctIndex": 1,
        "explanation": "\"dejó la puerta del jardín abierta, y Simón salió sin que nadie lo viera\" means he left the garden door open and Simón got out unnoticed."
      },
      {
        "type": "multiple-choice",
        "question": "What did the kids make to help find the cat?",
        "options": [
          "A trap",
          "Posters with his photo and phone number",
          "A video",
          "A map"
        ],
        "correctIndex": 1,
        "explanation": "\"Hicieron carteles con una foto de Simón y el número de teléfono del señor Díaz\" means they made posters with Simón's photo and Mr. Díaz's phone number."
      },
      {
        "type": "multiple-choice",
        "question": "Where did they find Simón?",
        "options": [
          "In a neighbor's yard",
          "Stuck in a tree at the park",
          "Under a car",
          "At the store"
        ],
        "correctIndex": 1,
        "explanation": "\"Marcos miró hacia arriba y vio a Simón atrapado en una rama alta del árbol\" means Marcos looked up and saw Simón stuck on a high branch of the tree."
      },
      {
        "type": "multiple-choice",
        "question": "What did Mr. Díaz give the kids to thank them?",
        "options": [
          "Money",
          "Homemade cookies",
          "A new toy",
          "A photo of Simón"
        ],
        "correctIndex": 1,
        "explanation": "\"Les regaló galletas caseras que su esposa preparó\" means he gave them homemade cookies that his wife made."
      }
    ]
  },
  {
    "slug": "la-fiesta-del-edificio",
    "level": "A2",
    "number": 106,
    "title": "La fiesta del edificio",
    "summary": "Neighbors in an apartment building organize a rooftop party to celebrate a longtime doorman's retirement.",
    "duration": "6 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "El señor Fernández vivía y trabajaba en el edificio de apartamentos desde hacía treinta años. Trabajaba como portero y conocía a todos los vecinos por su nombre. Después de tantos años, decidió jubilarse ese verano.",
          "Cuando los vecinos escucharon la noticia, quisieron organizarle una despedida especial. La señora del segundo piso propuso hacer una fiesta en la azotea del edificio. Todos estuvieron de acuerdo con la idea.",
          "Cada familia decidió traer algo diferente para la fiesta. Los García trajeron música y luces de colores. La familia de Valentina preparó un pastel enorme con el nombre del señor Fernández escrito con crema.",
          "Valentina y otros niños del edificio hicieron un cartel gigante que decía \"Gracias, señor Fernández, por treinta años.\" Lo colgaron en la pared de la azotea junto con globos amarillos. Todo se veía muy bonito para la ocasión.",
          "El día de la fiesta, le pidieron al señor Fernández que subiera a la azotea para \"revisar algo\". Cuando abrió la puerta, todos los vecinos gritaron: \"¡Sorpresa!\" El señor Fernández se quedó con la boca abierta.",
          "\"No puedo creer que hicieran esto por mí,\" dijo, muy emocionado. Caminó por la azotea y saludó a cada familia con un abrazo. Varios vecinos le contaron historias de los años que vivieron allí.",
          "Durante la fiesta, comieron el pastel y bailaron música de todos los tiempos. Los niños jugaron juntos mientras los adultos conversaban en grupos pequeños. Fue la primera vez que todo el edificio se reunió así.",
          "Al final de la noche, el señor Fernández les agradeció a todos por hacer del edificio un verdadero hogar. Prometió que iba a visitar el edificio de vez en cuando, aunque ya no era el portero. Todos los vecinos lo despidieron con un aplauso enorme."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "Why were the neighbors organizing a party for Mr. Fernández?",
        "options": [
          "His birthday",
          "His retirement after 30 years as doorman",
          "His wedding",
          "He was moving away"
        ],
        "correctIndex": 1,
        "explanation": "The story explains he \"trabajaba como portero\" for thirty years and \"decidió jubilarse ese verano\" (decided to retire that summer)."
      },
      {
        "type": "multiple-choice",
        "question": "Where was the party held?",
        "options": [
          "In the lobby",
          "In a restaurant",
          "On the rooftop",
          "In the park"
        ],
        "correctIndex": 2,
        "explanation": "\"hacer una fiesta en la azotea del edificio\" means to have a party on the building's rooftop."
      },
      {
        "type": "multiple-choice",
        "question": "What did the kids make for Mr. Fernández?",
        "options": [
          "A cake",
          "A giant thank-you sign",
          "A photo album",
          "A video"
        ],
        "correctIndex": 1,
        "explanation": "\"hicieron un cartel gigante que decía 'Gracias, señor Fernández, por treinta años'\" means they made a giant sign that said \"Thank you, Mr. Fernández, for thirty years.\""
      },
      {
        "type": "multiple-choice",
        "question": "What did Mr. Fernández promise at the end of the party?",
        "options": [
          "To come back to work",
          "To visit the building sometimes",
          "To move to another building",
          "To retire early next year"
        ],
        "correctIndex": 1,
        "explanation": "\"Prometió que iba a visitar el edificio de vez en cuando\" means he promised he was going to visit the building from time to time."
      }
    ]
  },
  {
    "slug": "el-concurso-de-ortografia",
    "level": "A2",
    "number": 107,
    "title": "El concurso de ortografía",
    "summary": "A girl practices hard for the school spelling bee and wins second place.",
    "duration": "6 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Valeria estaba en cuarto grado. Le gustaba mucho leer libros y aprender palabras nuevas. Un día, la maestra anunció un concurso de ortografía en la escuela. Todos los estudiantes de su clase podían participar.",
          "Valeria decidió participar porque quería ganar el primer premio. Su hermano mayor, Tomás, la ayudó a practicar todas las noches. Él le decía palabras difíciles y ella las escribía en un cuaderno.",
          "Durante dos semanas, Valeria practicó mucho. Aprendió palabras como «murciélago», «psicología» y «excelente». A veces se equivocaba, pero Tomás la animaba y le decía: —¡Vas a hacerlo muy bien!",
          "El día del concurso, Valeria estaba muy nerviosa. Había quince estudiantes en el escenario. La maestra decía una palabra y cada estudiante tenía que escribirla correctamente.",
          "Valeria escribió bien las primeras ocho palabras. Pero en la novena ronda, la maestra dijo «murciélago» y Valeria escribió «murcielago» sin el acento. Por eso, perdió un punto importante.",
          "Al final, Valeria ganó el segundo lugar. Una niña de otra clase, Camila, ganó el primer lugar porque escribió todas las palabras sin errores. Valeria estaba un poco triste, pero también estaba orgullosa de sí misma.",
          "Cuando volvió a casa, Tomás le dio un abrazo. —El segundo lugar es fantástico —le dijo—. El año próximo, practicaremos más y ganarás el primer premio. Valeria sonrió y guardó su medalla en su cuarto."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "Who helped Valeria practice for the contest?",
        "options": [
          "Her mother",
          "Her teacher",
          "Her brother Tomás",
          "Her friend Camila"
        ],
        "correctIndex": 2,
        "explanation": "The text says \"Su hermano mayor, Tomás, la ayudó a practicar todas las noches\" (Her older brother, Tomás, helped her practice every night)."
      },
      {
        "type": "multiple-choice",
        "question": "What mistake did Valeria make during the contest?",
        "options": [
          "She misspelled \"murciélago\" by forgetting the accent mark",
          "She arrived late to the contest",
          "She forgot the word completely",
          "She spelled a different word by mistake"
        ],
        "correctIndex": 0,
        "explanation": "The story says \"Valeria escribió 'murcielago' sin el acento\" (Valeria wrote it without the accent mark), which cost her a point."
      },
      {
        "type": "multiple-choice",
        "question": "What place did Valeria win in the contest?",
        "options": [
          "First place",
          "Second place",
          "Third place",
          "She did not place at all"
        ],
        "correctIndex": 1,
        "explanation": "The text states \"Valeria ganó el segundo lugar\" (Valeria won second place)."
      },
      {
        "type": "multiple-choice",
        "question": "How did Valeria feel about her result at the end?",
        "options": [
          "Angry and jealous of Camila",
          "Indifferent about the outcome",
          "Embarrassed in front of her class",
          "Sad but also proud of herself"
        ],
        "correctIndex": 3,
        "explanation": "The story says \"Valeria estaba un poco triste, pero también estaba orgullosa de sí misma\" (Valeria was a little sad, but also proud of herself)."
      }
    ]
  },
  {
    "slug": "la-tarea-olvidada",
    "level": "A2",
    "number": 108,
    "title": "La tarea olvidada",
    "summary": "A boy forgets his math homework and learns to manage his time better.",
    "duration": "6 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Diego era un niño muy divertido, pero no era muy organizado. Todos los lunes, su clase de matemáticas tenía tarea. Diego siempre hacía la tarea el domingo por la noche, muy rápido.",
          "Un domingo, Diego jugó videojuegos toda la tarde con sus amigos. Cuando por fin recordó la tarea, ya eran las diez de la noche y estaba muy cansado. Decidió hacerla por la mañana, antes de ir a la escuela.",
          "Pero el lunes, Diego se despertó tarde. Se vistió rápido, comió el desayuno en dos minutos y corrió para tomar el autobús. No tuvo tiempo para hacer la tarea.",
          "En la escuela, el maestro, el señor Paredes, pidió la tarea a todos los estudiantes. Diego buscó en su mochila, pero no encontró nada. Su cara se puso roja de vergüenza.",
          "—Lo siento, señor Paredes —dijo Diego—. Anoche jugué videojuegos y no hice la tarea. El maestro lo miró seriamente, pero no se enojó mucho.",
          "—Puedes traerla mañana —le dijo el maestro—, pero vas a recibir menos puntos. Diego asintió y entendió que necesitaba organizar mejor su tiempo.",
          "Esa noche, Diego hizo la tarea inmediatamente después de la escuela, antes de jugar videojuegos. También escribió un horario nuevo para la semana. Desde ese día, siempre terminó su tarea a tiempo."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "Why didn't Diego do his homework on Sunday night?",
        "options": [
          "He was sick",
          "He played video games all afternoon and evening",
          "He forgot his notebook at school",
          "He was helping his brother"
        ],
        "correctIndex": 1,
        "explanation": "The text says \"Diego jugó videojuegos toda la tarde con sus amigos\" (Diego played video games all afternoon with his friends)."
      },
      {
        "type": "multiple-choice",
        "question": "What happened Monday morning?",
        "options": [
          "He woke up early and finished the homework",
          "He got a ride to school early",
          "He woke up late and had no time to do it",
          "He stayed home from school"
        ],
        "correctIndex": 2,
        "explanation": "The story says \"Diego se despertó tarde... No tuvo tiempo para hacer la tarea\" (Diego woke up late... He had no time to do the homework)."
      },
      {
        "type": "multiple-choice",
        "question": "What did the teacher decide to do?",
        "options": [
          "Let Diego bring the homework tomorrow, but with fewer points",
          "Send Diego to the principal's office",
          "Call Diego's parents immediately",
          "Fail Diego for the whole class"
        ],
        "correctIndex": 0,
        "explanation": "The teacher tells him, \"Puedes traerla mañana... pero vas a recibir menos puntos\" (You can bring it tomorrow, but you'll get fewer points)."
      },
      {
        "type": "multiple-choice",
        "question": "What did Diego do differently after this experience?",
        "options": [
          "He stopped playing video games forever",
          "He did homework right after school and made a new schedule",
          "He asked his brother to do his homework for him",
          "He stopped going to school on Mondays"
        ],
        "correctIndex": 1,
        "explanation": "The text says \"Diego hizo la tarea inmediatamente después de la escuela... También escribió un horario nuevo\" (Diego did the homework right after school... He also wrote a new schedule)."
      }
    ]
  },
  {
    "slug": "la-final-de-futbol",
    "level": "A2",
    "number": 109,
    "title": "La final de fútbol",
    "summary": "A school soccer team loses the championship final on penalty kicks but stays united.",
    "duration": "6 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Mateo jugaba fútbol en el equipo de su escuela. El equipo se llamaba Los Tigres y practicaban tres veces por semana. Ese año, llegaron a la final del campeonato contra Los Águilas.",
          "Antes del partido, el entrenador, el señor Vega, habló con el equipo. —Ustedes son un equipo fuerte —les dijo—. No importa el resultado, jugaremos con corazón.",
          "El partido fue muy difícil. Los dos equipos jugaron bien y, al final del tiempo normal, el marcador estaba empatado dos a dos. Por eso, el partido terminó con tiros de penalti.",
          "El entrenador eligió a Mateo para tirar el último penalti. Mateo estaba muy nervioso, pero caminó hacia la pelota con confianza. Pateó la pelota, pero el portero de Los Águilas la atajó.",
          "Los Tigres perdieron el campeonato por un punto. Mateo se sintió muy triste y pensó que era culpa suya. Se sentó solo en el campo y no quería hablar con nadie.",
          "Sus compañeros de equipo caminaron hacia él. —No es tu culpa —le dijo su amigo Lucas—. Jugamos juntos como equipo, y ganamos y perdemos juntos también.",
          "El entrenador Vega también lo animó. —Ustedes jugaron mejor que el año pasado —dijo con una sonrisa—. El próximo año, entrenaremos más y volveremos a la final. Mateo se sintió mejor y sonrió con sus amigos."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "What was the score at the end of regular playing time?",
        "options": [
          "Los Tigres won 3-2",
          "The game was tied 2-2",
          "Los Águilas won 3-1",
          "The game was cancelled"
        ],
        "correctIndex": 1,
        "explanation": "The text says \"el marcador estaba empatado dos a dos\" (the score was tied two to two), which sent the game to penalty kicks."
      },
      {
        "type": "multiple-choice",
        "question": "What happened when Mateo took the final penalty kick?",
        "options": [
          "He scored the winning goal",
          "He refused to kick",
          "He missed the goal completely",
          "The goalkeeper stopped it"
        ],
        "correctIndex": 3,
        "explanation": "The story says \"el portero de Los Águilas la atajó\" (Los Águilas' goalkeeper stopped it)."
      },
      {
        "type": "multiple-choice",
        "question": "How did Mateo feel right after missing the kick?",
        "options": [
          "Proud of his effort",
          "Relieved it was over",
          "Sad, thinking it was his fault",
          "Angry at his teammates"
        ],
        "correctIndex": 2,
        "explanation": "The text says \"Mateo se sintió muy triste y pensó que era culpa suya\" (Mateo felt very sad and thought it was his fault)."
      },
      {
        "type": "multiple-choice",
        "question": "What did his friend Lucas tell him?",
        "options": [
          "That winning and losing are things the team shares together",
          "That he should quit the team",
          "That the coach was very angry",
          "That he played badly the whole game"
        ],
        "correctIndex": 0,
        "explanation": "Lucas tells him, \"Ganamos y perdemos juntos también\" (We win and we lose together too)."
      }
    ]
  },
  {
    "slug": "miedo-al-agua",
    "level": "A2",
    "number": 110,
    "title": "Miedo al agua",
    "summary": "A girl afraid of deep water takes swimming lessons and overcomes her fear.",
    "duration": "6 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Sofía tenía ocho años y nunca sabía nadar. Cada verano, sus amigas iban a la piscina, pero ella se quedaba en casa porque tenía miedo del agua profunda.",
          "Ese verano, la mamá de Sofía decidió inscribirla en clases de natación. Sofía no quería ir. —No me gusta el agua —le dijo a su mamá—. Tengo miedo.",
          "El primer día de clase, Sofía conoció a su instructora, la señorita Laura. La instructora era muy paciente y le explicó que iban a empezar despacio, en la parte poco profunda de la piscina.",
          "Durante las primeras clases, Sofía solo practicaba cómo poner la cara en el agua y cómo mover los brazos. No entraba en la parte profunda. Poco a poco, se sentía más segura.",
          "Después de dos semanas, la señorita Laura le dijo: —Hoy vamos a nadar juntas hasta el otro lado de la piscina. Sofía tenía miedo, pero confiaba en su instructora.",
          "Sofía respiró profundamente y empezó a nadar. Movió los brazos y las piernas como en sus clases. Cuando llegó al otro lado, no lo podía creer. Nadó sola por primera vez.",
          "Al final del verano, Sofía ya nadaba mejor que muchas de sus amigas. Ahora le encantaba ir a la piscina todos los días. Su miedo al agua desapareció completamente."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "Why didn't Sofía go to the pool in past summers?",
        "options": [
          "She didn't have a swimsuit",
          "She was afraid of deep water",
          "She was always sick during summer",
          "The pool near her house was closed"
        ],
        "correctIndex": 1,
        "explanation": "The text says \"tenía miedo del agua profunda\" (she was afraid of deep water)."
      },
      {
        "type": "multiple-choice",
        "question": "What did Sofía practice first in her lessons?",
        "options": [
          "Putting her face in the water and moving her arms",
          "Diving from a high board",
          "Swimming across the deep end",
          "Holding her breath for five minutes"
        ],
        "correctIndex": 0,
        "explanation": "The story says \"Sofía solo practicaba cómo poner la cara en el agua y cómo mover los brazos\" (Sofía only practiced putting her face in the water and moving her arms)."
      },
      {
        "type": "multiple-choice",
        "question": "What happened after two weeks of lessons?",
        "options": [
          "Sofía quit swimming lessons",
          "Sofía won a swimming competition",
          "Sofía swam across the pool alone for the first time",
          "The instructor changed to someone new"
        ],
        "correctIndex": 2,
        "explanation": "The text says \"Nadó sola por primera vez\" (She swam alone for the first time)."
      },
      {
        "type": "multiple-choice",
        "question": "How did Sofía feel about swimming by the end of summer?",
        "options": [
          "She still hated the water",
          "She felt indifferent about it",
          "She loved going to the pool every day",
          "She was still too scared to try again"
        ],
        "correctIndex": 2,
        "explanation": "The story says \"le encantaba ir a la piscina todos los días\" (she loved going to the pool every day)."
      }
    ]
  },
  {
    "slug": "la-carrera-de-relevos",
    "level": "A2",
    "number": 111,
    "title": "La carrera de relevos",
    "summary": "A relay team recovers after a dropped baton to finish the race together.",
    "duration": "6 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "En la escuela de Ana, había un día especial cada año: el día de atletismo. Los estudiantes participaban en carreras, saltos y otros deportes. Este año, Ana iba a correr en la carrera de relevos con tres compañeros: Pablo, Rosa e Iván.",
          "El equipo se llamaba Los Rápidos y practicó todas las tardes durante un mes. Cada persona corría una parte de la carrera y después le pasaba el bastón al siguiente corredor. Iván siempre corría el último y era el más rápido del grupo.",
          "El día de la carrera, muchos padres y maestros miraban desde las gradas. Ana corrió primero y le pasó el bastón a Pablo sin problemas. Pero cuando Pablo corría muy rápido, se puso nervioso y dejó caer el bastón al suelo.",
          "Pablo se detuvo por un segundo, muy avergonzado. Rosa, que esperaba el bastón, le gritó: —¡No pasa nada, Pablo! ¡Recógelo y sigue corriendo! Pablo tomó el bastón otra vez y corrió más rápido que antes.",
          "Rosa recibió el bastón y corrió su parte con mucha energía. Después, le pasó el bastón a Iván, el corredor más rápido del equipo. Iván corrió con todas sus fuerzas hasta la línea final.",
          "Los Rápidos terminaron en tercer lugar, no en primer lugar. Pablo estaba triste por el error con el bastón y pensaba que la culpa era suya.",
          "Pero sus compañeros no estaban enojados. —Corriste muy bien después de la caída —le dijo Ana—. El tercer lugar es un premio también. Pablo sonrió, y todo el equipo celebró juntos con un abrazo grupal."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "What happened when Pablo was running with the baton?",
        "options": [
          "He won the race easily",
          "He dropped it because he got nervous",
          "He ran in the wrong direction",
          "He passed it to Rosa too early"
        ],
        "correctIndex": 1,
        "explanation": "The text says \"se puso nervioso y dejó caer el bastón al suelo\" (he got nervous and dropped the baton on the ground)."
      },
      {
        "type": "multiple-choice",
        "question": "What did Rosa shout to Pablo after he dropped the baton?",
        "options": [
          "To give up and stop running",
          "To wait for a brand new baton",
          "To pick it up and keep running",
          "To walk instead of running"
        ],
        "correctIndex": 2,
        "explanation": "Rosa shouts \"¡Recógelo y sigue corriendo!\" (Pick it up and keep running!)."
      },
      {
        "type": "multiple-choice",
        "question": "What place did Los Rápidos finish in?",
        "options": [
          "First place",
          "Second place",
          "Third place",
          "Last place"
        ],
        "correctIndex": 2,
        "explanation": "The text says \"Los Rápidos terminaron en tercer lugar\" (Los Rápidos finished in third place)."
      },
      {
        "type": "multiple-choice",
        "question": "How did Pablo's teammates react to his mistake?",
        "options": [
          "They were angry and blamed him",
          "They stopped talking to him",
          "They asked the coach to remove him",
          "They supported him and said third place was a prize too"
        ],
        "correctIndex": 3,
        "explanation": "Ana tells him, \"El tercer lugar es un premio también\" (Third place is a prize too)."
      }
    ]
  },
  {
    "slug": "las-pruebas-de-baloncesto",
    "level": "A2",
    "number": 112,
    "title": "Las pruebas de baloncesto",
    "summary": "A boy who doesn't make the varsity basketball team practices hard for next year.",
    "duration": "6 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Bruno quería jugar en el equipo de baloncesto de la escuela desde hacía mucho tiempo. Cada tarde, practicaba tiros en la cancha de su barrio. Por fin, llegó el día de las pruebas para el equipo.",
          "En el gimnasio, había treinta estudiantes que querían un lugar en el equipo. El entrenador, el señor Fernández, solo podía escoger a doce jugadores. Bruno estaba muy nervioso porque quería mostrar su mejor juego.",
          "Durante las pruebas, los estudiantes corrieron, driblaron la pelota y practicaron tiros. Bruno driblaba bien, pero cuando tiraba a la canasta, fallaba muchos tiros. Su amigo Nico, en cambio, jugaba muy bien ese día.",
          "Al final de la semana, el entrenador puso una lista en la puerta del gimnasio con los nombres de los jugadores seleccionados. Bruno buscó su nombre, pero no lo encontró. El nombre de Nico sí estaba en la lista.",
          "Bruno se sintió muy decepcionado y casi lloró. Fue a hablar con el entrenador Fernández para entender qué pasó. —Tus tiros necesitan más práctica —le explicó el entrenador—, pero tienes mucho potencial.",
          "El entrenador le ofreció un lugar en el equipo júnior, para estudiantes más jóvenes o con menos experiencia. Bruno aceptó la oferta, aunque quería estar en el equipo principal. Decidió practicar tiros todos los días después de la escuela.",
          "Con el tiempo, Bruno mejoró mucho sus tiros. El año próximo, va a probar otra vez para el equipo principal, y esta vez está seguro de que lo va a lograr. Nico lo apoya y practican juntos cada semana."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "Why was Bruno so nervous during tryouts?",
        "options": [
          "He wanted to show his best game for one of only twelve spots",
          "He didn't really like basketball",
          "He was sick that day",
          "He forgot his basketball shoes"
        ],
        "correctIndex": 0,
        "explanation": "The text says the coach \"solo podía escoger a doce jugadores\" and \"Bruno estaba muy nervioso porque quería mostrar su mejor juego\" (could only choose twelve players, and Bruno wanted to show his best game)."
      },
      {
        "type": "multiple-choice",
        "question": "What was Bruno's weakness during tryouts?",
        "options": [
          "Dribbling the ball",
          "Shooting - he missed many shots",
          "Running fast",
          "Passing the ball"
        ],
        "correctIndex": 1,
        "explanation": "The story says \"cuando tiraba a la canasta, fallaba muchos tiros\" (when he shot at the basket, he missed many shots)."
      },
      {
        "type": "multiple-choice",
        "question": "What did the coach offer Bruno instead of the main team?",
        "options": [
          "A spot on the main team",
          "A coaching position",
          "A spot on the junior team",
          "Nothing at all"
        ],
        "correctIndex": 2,
        "explanation": "The text says \"El entrenador le ofreció un lugar en el equipo júnior\" (The coach offered him a spot on the junior team)."
      },
      {
        "type": "multiple-choice",
        "question": "What did Bruno decide to do after not making the main team?",
        "options": [
          "Quit basketball forever",
          "Ask the coach to change the list",
          "Join a completely different sport",
          "Practice shots every day to try again next year"
        ],
        "correctIndex": 3,
        "explanation": "The story says \"Decidió practicar tiros todos los días después de la escuela\" (He decided to practice shots every day after school)."
      }
    ]
  },
  {
    "slug": "el-primer-vuelo",
    "level": "A2",
    "number": 113,
    "title": "El primer vuelo",
    "summary": "A girl takes her first airplane flight and discovers she loves flying.",
    "duration": "6 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Camila tenía diez años y nunca viajaba en avión. Ese verano, su familia planeó un viaje a la casa de sus abuelos, que vivían en otra ciudad, muy lejos. Iban a viajar en avión por primera vez.",
          "Camila estaba emocionada, pero también un poco nerviosa. —¿Y si el avión se cae? —le preguntó a su papá la noche antes del viaje. Su papá se rió un poco y le explicó que viajar en avión era muy seguro.",
          "El día del viaje, la familia llegó al aeropuerto tres horas antes del vuelo. Caminaron por muchos pasillos y pasaron por el control de seguridad. Camila miraba todo con curiosidad: las tiendas, los aviones grandes por las ventanas, la gente de todas partes del mundo.",
          "Cuando subieron al avión, Camila se sentó junto a la ventana. Su corazón latía rápido. Cuando el avión empezó a moverse por la pista, ella cerró los ojos y tomó la mano de su mamá con fuerza.",
          "El avión despegó y subió muy alto en el cielo. Camila abrió los ojos poco a poco y miró por la ventana. Las casas y los carros parecían muy pequeños, como juguetes.",
          "Durante el vuelo, Camila comió un sándwich, vio una película y habló con su hermano sobre las nubes. Ya no tenía miedo. Por el contrario, ella pensaba que volar era la experiencia más increíble de su vida.",
          "Después de tres horas, el avión aterrizó sin problemas. Los abuelos de Camila esperaban en el aeropuerto con una sonrisa grande. Camila corrió hacia ellos y dijo: —¡Volar es fantástico! Quiero viajar en avión otra vez muy pronto."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "Why was the family traveling by plane?",
        "options": [
          "To visit grandparents who lived far away",
          "To move to a new house",
          "For a school trip",
          "To go to a soccer game"
        ],
        "correctIndex": 0,
        "explanation": "The text says they planned \"un viaje a la casa de sus abuelos, que vivían en otra ciudad, muy lejos\" (a trip to their grandparents' house, who lived in another city, very far away)."
      },
      {
        "type": "multiple-choice",
        "question": "How did Camila feel when the plane started moving on the runway?",
        "options": [
          "Excited and completely calm",
          "Scared - she closed her eyes and held her mom's hand",
          "Bored and sleepy",
          "Angry that the flight was delayed"
        ],
        "correctIndex": 1,
        "explanation": "The story says \"ella cerró los ojos y tomó la mano de su mamá con fuerza\" (she closed her eyes and held her mom's hand tightly)."
      },
      {
        "type": "multiple-choice",
        "question": "What did Camila do during the flight?",
        "options": [
          "She slept the whole time",
          "She cried the whole time",
          "She refused to eat anything",
          "She ate a sandwich, watched a movie, and talked about the clouds"
        ],
        "correctIndex": 3,
        "explanation": "The text says \"Camila comió un sándwich, vio una película y habló con su hermano sobre las nubes\" (Camila ate a sandwich, watched a movie, and talked with her brother about the clouds)."
      },
      {
        "type": "multiple-choice",
        "question": "How did Camila feel about flying by the end of the trip?",
        "options": [
          "She never wanted to fly again",
          "She was still very scared of flying",
          "She felt indifferent about flying",
          "She loved it and wanted to fly again soon"
        ],
        "correctIndex": 3,
        "explanation": "Camila says, \"Quiero viajar en avión otra vez muy pronto\" (I want to travel by plane again very soon)."
      }
    ]
  },
  {
    "slug": "el-tren-a-la-ciudad",
    "level": "A2",
    "number": 114,
    "title": "El tren a la ciudad",
    "summary": "A boy travels alone by train to visit his cousin and briefly gets off at the wrong stop.",
    "duration": "6 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Emilio tenía once años y vivía en un pueblo pequeño. Su prima Valentina vivía en la ciudad, a dos horas en tren. Ese fin de semana, Emilio iba a viajar solo en tren por primera vez para visitarla.",
          "Su mamá lo llevó a la estación de tren muy temprano. —Tienes que bajar en la tercera parada, la estación central —le explicó—. Valentina te va a esperar allí con un cartel con tu nombre.",
          "Emilio subió al tren con su mochila y se sentó junto a la ventana. Durante el viaje, miraba el paisaje: montañas, ríos y pueblos pequeños. Estaba emocionado, pero también contaba las paradas con cuidado.",
          "Después de dos horas, el tren llegó a una estación grande con mucha gente. Emilio pensó que era la estación central, así que bajó del tren rápidamente. Pero cuando miró el letrero, vio que no era la parada correcta.",
          "Emilio sintió pánico por un momento. No sabía qué hacer. Entonces recordó las palabras de su mamá: —Si tienes un problema, busca a un empleado del tren con uniforme.",
          "Emilio encontró a una empleada y le explicó su problema. La mujer fue muy amable y lo ayudó a subir al próximo tren hacia la estación central. Ella le dijo: —No te preocupes, esto les pasa a muchas personas.",
          "Veinte minutos después, Emilio por fin llegó a la estación central. Vio a Valentina con un cartel grande que decía su nombre. Se abrazaron y Emilio le contó toda la aventura, riéndose de su error."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "Why was Emilio traveling by train?",
        "options": [
          "To go to a new school",
          "To visit his cousin Valentina in the city",
          "To move to a new town",
          "To go on a school field trip"
        ],
        "correctIndex": 1,
        "explanation": "The story says \"Emilio iba a viajar solo en tren por primera vez para visitarla\" (Emilio was going to travel alone by train for the first time to visit her, his cousin Valentina)."
      },
      {
        "type": "multiple-choice",
        "question": "What mistake did Emilio make on the trip?",
        "options": [
          "He missed the train completely",
          "He got off at the wrong station",
          "He forgot his backpack",
          "He fell asleep and missed his stop"
        ],
        "correctIndex": 1,
        "explanation": "The text says \"vio que no era la parada correcta\" (he saw that it was not the correct stop)."
      },
      {
        "type": "multiple-choice",
        "question": "What did Emilio remember to do when he had a problem?",
        "options": [
          "Call his mom on the phone",
          "Cry until someone noticed him",
          "Look for a train employee in uniform",
          "Walk to find the station alone"
        ],
        "correctIndex": 2,
        "explanation": "He remembered his mom's words: \"busca a un empleado del tren con uniforme\" (look for a train employee in uniform)."
      },
      {
        "type": "multiple-choice",
        "question": "How did the story end?",
        "options": [
          "Emilio never found his cousin",
          "Emilio's mom had to come get him",
          "Emilio missed the visit entirely",
          "Emilio arrived and found Valentina, then told her about the adventure"
        ],
        "correctIndex": 3,
        "explanation": "The text says \"Emilio por fin llegó a la estación central. Vio a Valentina... Se abrazaron y Emilio le contó toda la aventura\" (Emilio finally arrived at the central station. He saw Valentina... They hugged and Emilio told her the whole adventure)."
      }
    ]
  },
  {
    "slug": "la-caminata-en-la-montana",
    "level": "A2",
    "number": 115,
    "title": "La caminata en la montaña",
    "summary": "A girl hikes a long mountain trail with her father and reaches the summit.",
    "duration": "6 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Renata y su papá decidieron hacer una caminata a la montaña un sábado por la mañana. El sendero era largo, casi ocho kilómetros hasta la cima. Renata nunca hacía una caminata tan larga.",
          "Se levantaron temprano y prepararon una mochila con agua, frutas y sándwiches. El papá de Renata le dijo: —Vamos a caminar despacio, paso a paso. No es una carrera.",
          "Durante la primera hora, Renata caminaba con mucha energía y hablaba sin parar. Pero después de dos horas, sus piernas empezaron a doler y quería regresar a casa. —Estoy muy cansada, papá. No puedo más —dijo.",
          "Su papá se sentó con ella en una roca grande. Le dio agua y una fruta. —Cada persona necesita descansar a veces —le explicó—. Después de descansar, vas a sentirte mejor.",
          "Después de quince minutos de descanso, Renata se sintió con más energía. Decidió continuar, aunque caminaba más lento que antes. Su papá caminaba a su lado y la animaba con cada paso.",
          "Por fin, después de cuatro horas, llegaron a la cima de la montaña. Desde allí, podían ver todo el valle, los ríos y los pueblos pequeños abajo. La vista era increíble.",
          "Renata se sentó en una roca y miró el paisaje con una sonrisa grande. —Valió la pena caminar tanto —dijo—. Ahora entiendo por qué te gusta tanto la montaña, papá. Los dos comieron sus sándwiches y disfrutaron del momento juntos."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "How long was the trail to the top of the mountain?",
        "options": [
          "Two kilometers",
          "Almost eight kilometers",
          "Twenty kilometers",
          "One kilometer"
        ],
        "correctIndex": 1,
        "explanation": "The text says \"El sendero era largo, casi ocho kilómetros hasta la cima\" (The trail was long, almost eight kilometers to the summit)."
      },
      {
        "type": "multiple-choice",
        "question": "What happened after two hours of hiking?",
        "options": [
          "Renata's legs started to hurt and she wanted to go back",
          "Renata ran ahead of her dad",
          "They got lost on the trail",
          "It started to rain heavily"
        ],
        "correctIndex": 0,
        "explanation": "The text says \"sus piernas empezaron a doler y quería regresar a casa\" (her legs started to hurt and she wanted to go back home)."
      },
      {
        "type": "multiple-choice",
        "question": "What did Renata's dad do when she got tired?",
        "options": [
          "He let her rest on a rock and gave her water and fruit",
          "He carried her the rest of the way",
          "He told her to give up and go home",
          "He called someone to pick them up"
        ],
        "correctIndex": 0,
        "explanation": "The story says \"Su papá se sentó con ella en una roca grande. Le dio agua y una fruta\" (Her dad sat with her on a big rock. He gave her water and fruit)."
      },
      {
        "type": "multiple-choice",
        "question": "How did Renata feel when they reached the top?",
        "options": [
          "She regretted going on the hike",
          "She was too tired to notice the view",
          "She wanted to leave immediately",
          "She felt it was worth it and understood why her dad loved the mountain"
        ],
        "correctIndex": 3,
        "explanation": "Renata says, \"Valió la pena caminar tanto... Ahora entiendo por qué te gusta tanto la montaña, papá\" (It was worth walking so much... Now I understand why you like the mountain so much, dad)."
      }
    ]
  },
  {
    "slug": "el-videojuego-nuevo",
    "level": "A2",
    "number": 116,
    "title": "El videojuego nuevo",
    "summary": "Two friends learn to share a new video game controller fairly.",
    "duration": "6 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Leo recibió una consola de videojuegos nueva como regalo. Estaba muy emocionado porque el juego más popular de la escuela era «Aventura Espacial», un juego de dos jugadores. Invitó a su mejor amigo, Sam, a jugar en su casa.",
          "Cuando Sam llegó, los dos niños empezaron a jugar juntos. Al principio, Leo quería jugar solo con el control mejor, el control nuevo. Le dio a Sam el control viejo, que no funcionaba muy bien.",
          "Sam se sintió un poco mal, pero no dijo nada al principio. Después de media hora, Sam perdió el juego varias veces porque su control no respondía bien. —Este control es difícil de usar —le dijo a Leo, un poco frustrado.",
          "Leo se dio cuenta de que estaba siendo egoísta con su mejor amigo. Pensó un momento y comprendió que la situación no era justa. Decidió cambiar los controles.",
          "—Toma, usa el control nuevo —le dijo Leo a Sam—. Es más justo si compartimos. Sam sonrió y aceptó el control nuevo con gusto.",
          "Con el control nuevo, Sam jugó mucho mejor y ganó varios niveles del juego. Los dos amigos se rieron mucho y trabajaron juntos como equipo para pasar la parte más difícil del juego.",
          "Al final de la tarde, Leo entendió algo importante: los videojuegos son más divertidos cuando los amigos comparten y juegan de manera justa. Desde ese día, Leo y Sam siempre alternaban quién usaba el control nuevo."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "What did Leo do at first with the new controller?",
        "options": [
          "He shared it right away",
          "He gave it to Sam immediately",
          "He broke it by accident",
          "He kept it for himself and gave Sam the old one"
        ],
        "correctIndex": 3,
        "explanation": "The text says \"Le dio a Sam el control viejo, que no funcionaba muy bien\" (He gave Sam the old controller, which didn't work very well)."
      },
      {
        "type": "multiple-choice",
        "question": "How did Sam feel about the old controller?",
        "options": [
          "He loved using it",
          "He found it difficult to use and felt frustrated",
          "He didn't notice any problem with it",
          "He broke it on purpose"
        ],
        "correctIndex": 1,
        "explanation": "Sam says, \"Este control es difícil de usar\" (This controller is hard to use)."
      },
      {
        "type": "multiple-choice",
        "question": "What did Leo decide to do after realizing the situation?",
        "options": [
          "Stop playing altogether",
          "Ask Sam to leave his house",
          "Give Sam the new controller because it was fairer to share",
          "Buy another game console"
        ],
        "correctIndex": 2,
        "explanation": "Leo says, \"Es más justo si compartimos\" (It's fairer if we share), and gives Sam the new controller."
      },
      {
        "type": "multiple-choice",
        "question": "What did Leo learn from this experience?",
        "options": [
          "Video games are only fun when played alone",
          "New controllers are always better than old ones",
          "Sam should always get the old controller",
          "Games are more fun when friends share and play fairly"
        ],
        "correctIndex": 3,
        "explanation": "The text says \"los videojuegos son más divertidos cuando los amigos comparten y juegan de manera justa\" (video games are more fun when friends share and play fairly)."
      }
    ]
  },
  {
    "slug": "el-club-de-robotica",
    "level": "A2",
    "number": 117,
    "title": "El club de robótica",
    "summary": "A robotics club fixes a last-minute problem with their robot before a competition.",
    "duration": "6 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "En la escuela de Julia, había un club de robótica después de las clases. Julia y sus tres compañeros de equipo, Kevin, Ana y Simón, construyeron un robot pequeño durante tres meses. El robot podía mover objetos y seguir una línea en el suelo.",
          "Su maestra, la señora Ortiz, los ayudó a preparar el robot para una competencia regional. Iban a competir contra otras diez escuelas. El equipo practicaba todos los días después de las clases.",
          "El día de la competencia, el equipo llegó temprano con el robot en una caja especial. Estaban muy nerviosos, pero también emocionados. Cuando llegó su turno, pusieron el robot en la pista de competencia.",
          "Pero cuando encendieron el robot, algo no funcionó bien. El robot se movía en círculos y no seguía la línea correctamente. Kevin sintió pánico porque no entendía el problema.",
          "Julia revisó rápidamente los cables del robot. Encontró un cable suelto cerca del sensor. Con mucho cuidado, conectó el cable de nuevo mientras los jueces esperaban.",
          "El equipo pidió unos minutos más para probar el robot otra vez. Los jueces lo permitieron. Esta vez, el robot funcionó perfectamente y siguió la línea sin errores.",
          "Al final del día, el equipo de Julia ganó el tercer lugar de la competencia, un resultado excelente para su primer año. Estaban muy orgullosos, y la señora Ortiz les dijo: —El próximo año, ustedes van a ganar el primer lugar, estoy segura."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "What could the robot do?",
        "options": [
          "Fly and take photos",
          "Move objects and follow a line on the ground",
          "Talk and answer questions",
          "Cook simple food"
        ],
        "correctIndex": 1,
        "explanation": "The text says \"El robot podía mover objetos y seguir una línea en el suelo\" (The robot could move objects and follow a line on the ground)."
      },
      {
        "type": "multiple-choice",
        "question": "What went wrong at the competition?",
        "options": [
          "The robot didn't turn on at all",
          "The robot moved in circles and didn't follow the line correctly",
          "They forgot the robot at home",
          "Another team's robot broke theirs"
        ],
        "correctIndex": 1,
        "explanation": "The story says \"El robot se movía en círculos y no seguía la línea correctamente\" (The robot moved in circles and didn't follow the line correctly)."
      },
      {
        "type": "multiple-choice",
        "question": "What was the problem, and who fixed it?",
        "options": [
          "A dead battery, fixed by Kevin",
          "A loose cable near the sensor, fixed by Julia",
          "A broken wheel, fixed by Ana",
          "A software error, fixed by the teacher"
        ],
        "correctIndex": 1,
        "explanation": "The text says \"Encontró un cable suelto cerca del sensor. Con mucho cuidado, conectó el cable de nuevo\" (She found a loose cable near the sensor. Carefully, she reconnected the cable) - Julia found and fixed it."
      },
      {
        "type": "multiple-choice",
        "question": "What place did the team finish in the competition?",
        "options": [
          "Third place",
          "First place",
          "Last place",
          "They were disqualified"
        ],
        "correctIndex": 0,
        "explanation": "The text says \"el equipo de Julia ganó el tercer lugar de la competencia\" (Julia's team won third place in the competition)."
      }
    ]
  },
  {
    "slug": "la-clase-de-mecanografia",
    "level": "A2",
    "number": 118,
    "title": "La clase de mecanografía",
    "summary": "A slow typist practices with a computer game to get ready for a typing test.",
    "duration": "6 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "En la clase de computación, el maestro anunció una prueba de mecanografía para el final del mes. Los estudiantes tenían que escribir en el teclado lo más rápido posible, sin mirar las teclas.",
          "Óscar escribía muy lento porque siempre miraba el teclado para encontrar cada letra. Sus compañeros ya escribían mucho más rápido que él. Óscar estaba preocupado por la prueba.",
          "Su hermana mayor, Carla, le mostró un juego de computadora para practicar mecanografía. En el juego, las palabras caían desde arriba de la pantalla. Si Óscar no escribía la palabra a tiempo, ella caía al suelo y él perdía un punto.",
          "Óscar practicó con el juego todos los días durante veinte minutos. Al principio, perdía el juego rápidamente porque las palabras caían muy rápido para él. Pero con la práctica, empezó a mejorar poco a poco.",
          "Después de dos semanas, Óscar ya no necesitaba mirar el teclado tanto. Sus dedos recordaban dónde estaban las letras. También escribía más palabras por minuto que antes.",
          "El día de la prueba, el maestro les dio un texto para escribir en cinco minutos. Óscar escribió con confianza, sin mirar el teclado casi nunca. Terminó el texto completo con dos minutos de sobra.",
          "Cuando el maestro anunció los resultados, Óscar se sorprendió: escribía casi tan rápido como los mejores estudiantes de la clase. Estaba muy orgulloso de su progreso y decidió seguir practicando con el juego de su hermana."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "Why was Óscar worried about the typing test?",
        "options": [
          "He didn't like computers",
          "He typed very slowly because he always looked at the keyboard",
          "He was going to be absent that day",
          "He didn't understand the assignment"
        ],
        "correctIndex": 1,
        "explanation": "The text says \"Óscar escribía muy lento porque siempre miraba el teclado\" (Óscar typed very slowly because he always looked at the keyboard)."
      },
      {
        "type": "multiple-choice",
        "question": "How did Óscar practice typing?",
        "options": [
          "He copied words from a book by hand",
          "He took private typing lessons",
          "He asked his teacher for extra homework",
          "He used a computer game where words fell down the screen"
        ],
        "correctIndex": 3,
        "explanation": "The text describes \"un juego de computadora para practicar mecanografía... las palabras caían desde arriba de la pantalla\" (a computer game to practice typing... words fell from the top of the screen)."
      },
      {
        "type": "multiple-choice",
        "question": "What changed after two weeks of practice?",
        "options": [
          "Nothing really changed",
          "He no longer needed to look at the keyboard as much",
          "He gave up on typing practice",
          "He got a brand new computer"
        ],
        "correctIndex": 1,
        "explanation": "The story says \"Óscar ya no necesitaba mirar el teclado tanto\" (Óscar no longer needed to look at the keyboard as much)."
      },
      {
        "type": "multiple-choice",
        "question": "How did Óscar do on the typing test?",
        "options": [
          "He failed the test completely",
          "He refused to take the test",
          "He was the slowest in the class",
          "He finished early and typed almost as fast as the best students"
        ],
        "correctIndex": 3,
        "explanation": "The text says he \"escribía casi tan rápido como los mejores estudiantes de la clase\" (typed almost as fast as the best students in the class)."
      }
    ]
  },
  {
    "slug": "la-eleccion-de-la-clase",
    "level": "A2",
    "number": 119,
    "title": "La elección de la clase",
    "summary": "Two friends run against each other for class president and stay close friends.",
    "duration": "6 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Todos los años, la clase de quinto grado elegía a un presidente de la clase. Este año, dos estudiantes decidieron participar: Sara y su amigo Rodrigo. Los dos eran buenos amigos desde primer grado.",
          "Sara quería ser presidenta porque tenía muchas ideas: más tiempo de recreo y una fiesta al final del año. Rodrigo también tenía buenas ideas, como un club de lectura y más actividades deportivas.",
          "Durante una semana, los dos candidatos hicieron carteles y hablaron con sus compañeros sobre sus ideas. A veces, era un poco incómodo porque competían el uno contra el otro, pero seguían siendo amigos.",
          "El día de las elecciones, cada candidato dio un discurso corto frente a la clase. Sara habló con confianza sobre sus planes. Después, Rodrigo también habló bien y explicó sus ideas para ser un buen líder.",
          "Los estudiantes votaron en secreto con papelitos. La maestra contó los votos frente a la clase. Al final, Rodrigo ganó la elección por solo tres votos más que Sara.",
          "Sara se sintió un poco decepcionada, pero no estaba enojada con Rodrigo. Después de la clase, ella caminó hacia él y le dio la mano. —Felicidades, Rodrigo. Vas a ser un gran presidente —le dijo con una sonrisa sincera.",
          "Rodrigo apreció mucho las palabras de Sara. —Gracias, Sara. Necesito tu ayuda para organizar el club de lectura —le dijo. Trabajaron juntos durante el año, y la amistad entre ellos se hizo aún más fuerte."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "Who ran for class president?",
        "options": [
          "Sara and her teacher",
          "Sara and her friend Rodrigo",
          "Rodrigo and his brother",
          "Three different students"
        ],
        "correctIndex": 1,
        "explanation": "The text says \"dos estudiantes decidieron participar: Sara y su amigo Rodrigo\" (two students decided to run: Sara and her friend Rodrigo)."
      },
      {
        "type": "multiple-choice",
        "question": "Who won the election, and by how much?",
        "options": [
          "Rodrigo won by three votes",
          "Sara won by ten votes",
          "The vote was a tie",
          "Neither of them won"
        ],
        "correctIndex": 0,
        "explanation": "The text says \"Rodrigo ganó la elección por solo tres votos más que Sara\" (Rodrigo won the election by only three more votes than Sara)."
      },
      {
        "type": "multiple-choice",
        "question": "How did Sara react to losing the election?",
        "options": [
          "She was angry and stopped talking to Rodrigo",
          "She demanded a recount of the votes",
          "She cried in front of the whole class",
          "She was disappointed but congratulated him sincerely"
        ],
        "correctIndex": 3,
        "explanation": "Sara tells him, \"Felicidades, Rodrigo. Vas a ser un gran presidente\" (Congratulations, Rodrigo. You're going to be a great president)."
      },
      {
        "type": "multiple-choice",
        "question": "What did Rodrigo ask Sara to help with?",
        "options": [
          "His math homework",
          "Writing his speech",
          "Counting the election votes",
          "Organizing the reading club"
        ],
        "correctIndex": 3,
        "explanation": "Rodrigo says, \"Necesito tu ayuda para organizar el club de lectura\" (I need your help to organize the reading club)."
      }
    ]
  },
  {
    "slug": "el-mural-de-la-escuela",
    "level": "A2",
    "number": 120,
    "title": "El mural de la escuela",
    "summary": "A shy girl's hidden talent for drawing is chosen for the school mural.",
    "duration": "6 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "La directora de la escuela quería pintar un mural grande en la pared del patio. Pidió ideas y dibujos a todos los estudiantes de arte. El tema del mural era «Nuestra comunidad».",
          "Paola era una niña muy tímida que casi nunca hablaba en clase. Pero le encantaba dibujar, y en su cuaderno tenía dibujos hermosos de árboles, animales y personas. Nadie en la escuela sabía sobre su talento.",
          "Su maestra de arte, la señora Campos, vio uno de los cuadernos de Paola por accidente. —Paola, tus dibujos son increíbles —le dijo—. ¿Por qué no compartes uno para el mural?",
          "Paola se puso nerviosa, pero decidió mostrar su dibujo de un árbol grande con pájaros de colores. La señora Campos y los otros estudiantes lo amaron inmediatamente. Eligieron el dibujo de Paola como la idea principal del mural.",
          "Durante dos semanas, un grupo de diez estudiantes trabajó en el mural después de las clases. Paola, aunque tímida, dirigía el proyecto porque sabía exactamente cómo debía verse cada parte.",
          "Al principio, a Paola le costaba dar instrucciones a sus compañeros porque no le gustaba hablar en público. Pero poco a poco, ganó más confianza y empezó a explicar sus ideas con claridad.",
          "Cuando terminaron el mural, toda la escuela lo celebró con una pequeña fiesta. El árbol grande de Paola, con sus pájaros de colores, estaba en el centro de la pared. Desde ese día, Paola habló mucho más en clase y se sintió orgullosa de su talento."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "What was special about Paola before this story happened?",
        "options": [
          "She was the best athlete in school",
          "She was shy but had a hidden talent for drawing",
          "She was the class president",
          "She didn't like school at all"
        ],
        "correctIndex": 1,
        "explanation": "The text says \"le encantaba dibujar, y en su cuaderno tenía dibujos hermosos... Nadie en la escuela sabía sobre su talento\" (she loved drawing, and her notebook had beautiful drawings... Nobody at school knew about her talent)."
      },
      {
        "type": "multiple-choice",
        "question": "How was Paola's drawing talent discovered?",
        "options": [
          "She showed it to the whole class herself",
          "Her mother sent it to the school",
          "She entered it in a contest",
          "Her art teacher saw her notebook by accident"
        ],
        "correctIndex": 3,
        "explanation": "The text says \"Su maestra de arte, la señora Campos, vio uno de los cuadernos de Paola por accidente\" (Her art teacher, Mrs. Campos, saw one of Paola's notebooks by accident)."
      },
      {
        "type": "multiple-choice",
        "question": "What was chosen as the main idea for the mural?",
        "options": [
          "A soccer field",
          "A photo of the school building",
          "A map of the city",
          "Paola's drawing of a big tree with colorful birds"
        ],
        "correctIndex": 3,
        "explanation": "The text says \"Eligieron el dibujo de Paola como la idea principal del mural\" (They chose Paola's drawing as the main idea for the mural)."
      },
      {
        "type": "multiple-choice",
        "question": "How did Paola change by the end of the story?",
        "options": [
          "She gained confidence and spoke much more in class",
          "She became less interested in art",
          "She left the mural project unfinished",
          "She remained just as shy as before"
        ],
        "correctIndex": 0,
        "explanation": "The text says \"Paola habló mucho más en clase y se sintió orgullosa de su talento\" (Paola spoke much more in class and felt proud of her talent)."
      }
    ]
  },
  {
    "slug": "el-concurso-de-matematicas",
    "level": "A2",
    "number": 121,
    "title": "El concurso de matemáticas",
    "summary": "A boy who dislikes math gets help from a classmate and does well in a math contest.",
    "duration": "6 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "A Iker no le gustaban mucho las matemáticas. Pensaba que los números eran aburridos y difíciles. Pero su maestro, el señor Domínguez, vio algo especial en él: Iker era muy bueno resolviendo problemas de lógica.",
          "El señor Domínguez lo invitó a participar en el concurso de matemáticas de la escuela. Al principio, Iker dijo que no, porque tenía miedo de perder frente a toda la escuela. Pero su maestro insistió.",
          "—No tienes que ganar —le dijo el señor Domínguez—. Solo tienes que intentarlo y aprender algo nuevo. Iker finalmente aceptó participar.",
          "Su compañera de clase, Noa, era muy buena en matemáticas y decidió ayudarlo a practicar. Todos los días, después de la escuela, estudiaban juntos problemas de multiplicación, división y fracciones.",
          "Al principio, Iker cometía muchos errores y se frustraba fácilmente. Pero Noa era paciente y le explicaba cada problema de una manera diferente hasta que él lo entendía. Poco a poco, Iker mejoró mucho.",
          "El día del concurso, Iker estaba nervioso, pero también preparado. Resolvió los problemas uno por uno, con calma y concentración. Usó las técnicas que Noa le enseñó durante las semanas de práctica.",
          "Al final, Iker no ganó el primer lugar, pero terminó en un sorprendente segundo lugar entre cincuenta estudiantes. Estaba muy feliz con su resultado. Desde ese día, empezó a pensar que las matemáticas no eran tan aburridas después de todo."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "What did the teacher notice about Iker?",
        "options": [
          "He was the best at spelling",
          "He was very good at solving logic problems",
          "He never did his homework",
          "He wanted to become a teacher"
        ],
        "correctIndex": 1,
        "explanation": "The text says \"Iker era muy bueno resolviendo problemas de lógica\" (Iker was very good at solving logic problems)."
      },
      {
        "type": "multiple-choice",
        "question": "Who helped Iker practice for the competition?",
        "options": [
          "His teacher, the señor Domínguez",
          "His older sister",
          "An online tutor",
          "His classmate Noa"
        ],
        "correctIndex": 3,
        "explanation": "The text says \"Su compañera de clase, Noa... decidió ayudarlo a practicar\" (His classmate Noa decided to help him practice)."
      },
      {
        "type": "multiple-choice",
        "question": "What place did Iker finish in the competition?",
        "options": [
          "First place",
          "A surprising second place out of fifty students",
          "Last place",
          "He did not finish the competition"
        ],
        "correctIndex": 1,
        "explanation": "The text says he \"terminó en un sorprendente segundo lugar entre cincuenta estudiantes\" (finished in a surprising second place among fifty students)."
      },
      {
        "type": "multiple-choice",
        "question": "How did Iker's attitude toward math change by the end?",
        "options": [
          "He still hated math",
          "He decided to quit school",
          "He became arrogant about his math skills",
          "He began to think math wasn't so boring after all"
        ],
        "correctIndex": 3,
        "explanation": "The text says he \"empezó a pensar que las matemáticas no eran tan aburridas después de todo\" (began to think that math wasn't so boring after all)."
      }
    ]
  },
  {
    "slug": "el-partido-de-voleibol",
    "level": "A2",
    "number": 122,
    "title": "El partido de vóleibol",
    "summary": "A volleyball player overcomes her fear of serving to help her team win.",
    "duration": "6 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Ximena jugaba vóleibol en el equipo de su escuela desde hacía un año. Le gustaba mucho el deporte, pero tenía un problema: le costaba mucho sacar bien la pelota. Sus saques casi siempre salían fuera de la cancha.",
          "Antes del partido más importante del año, contra la escuela rival, la entrenadora practicó saques con Ximena todos los días. —Necesitas doblar más las rodillas y mirar la pelota —le explicó la entrenadora.",
          "El día del partido, el gimnasio estaba lleno de estudiantes y padres. Ximena estaba muy nerviosa porque sabía que iba a sacar en algún momento del partido. Su equipo, Las Panteras, jugaba contra Las Estrellas.",
          "En el segundo set, el marcador estaba muy cerca: catorce a trece para Las Panteras. La entrenadora eligió a Ximena para el próximo saque, un momento muy importante del partido.",
          "Ximena caminó hacia la línea de saque con las manos temblorosas. Recordó las palabras de su entrenadora: doblar las rodillas y mirar la pelota. Respiró profundamente y sacó la pelota con fuerza.",
          "La pelota voló por encima de la red y cayó dentro de la cancha del equipo rival, que no pudo devolverla a tiempo. ¡Las Panteras ganaron el punto y el set! Todo el equipo gritó de alegría y corrió a abrazar a Ximena.",
          "Al final, Las Panteras ganaron el partido completo. Ximena se sintió muy orgullosa porque su saque difícil fue el punto decisivo. Después del partido, siguió practicando cada semana para mejorar aún más."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "What was Ximena's weakness in volleyball?",
        "options": [
          "Serving - her serves usually went out of bounds",
          "Blocking the ball",
          "Passing to teammates",
          "Running fast"
        ],
        "correctIndex": 0,
        "explanation": "The text says \"le costaba mucho sacar bien la pelota. Sus saques casi siempre salían fuera de la cancha\" (it was very hard for her to serve well; her serves almost always went outside the court)."
      },
      {
        "type": "multiple-choice",
        "question": "What advice did the coach give Ximena?",
        "options": [
          "To bend her knees more and watch the ball",
          "To always hit the ball as hard as possible",
          "To serve underhand only",
          "To let a teammate serve instead of her"
        ],
        "correctIndex": 0,
        "explanation": "The coach explains, \"Necesitas doblar más las rodillas y mirar la pelota\" (You need to bend your knees more and watch the ball)."
      },
      {
        "type": "multiple-choice",
        "question": "What happened when Ximena served at the important moment?",
        "options": [
          "The ball went out of bounds again",
          "She missed the ball completely",
          "The other team called a foul",
          "The ball landed in the opposing court and they couldn't return it"
        ],
        "correctIndex": 3,
        "explanation": "The text says the ball \"cayó dentro de la cancha del equipo rival, que no pudo devolverla a tiempo\" (landed inside the rival team's court, which couldn't return it in time)."
      },
      {
        "type": "multiple-choice",
        "question": "How did the match end?",
        "options": [
          "Las Panteras lost the match",
          "The match ended in a tie",
          "The match was cancelled",
          "Las Panteras won the whole match"
        ],
        "correctIndex": 3,
        "explanation": "The text says \"Las Panteras ganaron el partido completo\" (Las Panteras won the entire match)."
      }
    ]
  },
  {
    "slug": "las-clases-de-tenis",
    "level": "A2",
    "number": 123,
    "title": "Las clases de tenis",
    "summary": "A boy learns to stop comparing himself to a friend and focus on his own tennis progress.",
    "duration": "6 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Adrián empezó a tomar clases de tenis en el verano. Su amigo Beto también tomaba las mismas clases, pero Beto aprendía mucho más rápido. Adrián se sentía frustrado porque siempre comparaba su juego con el de Beto.",
          "Cada clase, el instructor, el señor Ibáñez, les enseñaba un golpe nuevo: el saque, el revés, la volea. Beto entendía todo rápidamente y golpeaba la pelota con mucha fuerza y precisión.",
          "Adrián, en cambio, necesitaba más tiempo para entender cada movimiento. Sus golpes eran más débiles que los de Beto, y muchas veces la pelota no pasaba por encima de la red. —Nunca voy a ser tan bueno como Beto —pensaba Adrián, triste.",
          "Un día, después de una clase difícil, el señor Ibáñez habló con Adrián en privado. —Cada estudiante aprende a su propio ritmo —le dijo—. No compares tu progreso con el de otra persona. Compáralo con tu propio progreso de la semana pasada.",
          "Adrián pensó mucho en esas palabras. Decidió dejar de mirar a Beto y, en cambio, empezó a fijarse en sus propios errores y mejoras. Practicaba solo contra la pared de su casa todos los días.",
          "Después de un mes, Adrián notó grandes cambios. Sus golpes eran más fuertes y más precisos que antes. Ya no fallaba tantos golpes, y empezó a disfrutar el tenis mucho más que al principio.",
          "Al final del verano, Adrián y Beto jugaron un partido amistoso. Adrián perdió el partido, pero jugó mucho mejor que en la primera clase. Se sintió orgulloso de su propio progreso, sin comparar más su juego con el de su amigo."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "Why did Adrián feel frustrated at first?",
        "options": [
          "He didn't like his instructor",
          "He kept comparing his tennis to his friend Beto, who learned faster",
          "He didn't want to play tennis at all",
          "He lost his racket"
        ],
        "correctIndex": 1,
        "explanation": "The text says \"Adrián se sentía frustrado porque siempre comparaba su juego con el de Beto\" (Adrián felt frustrated because he always compared his game to Beto's)."
      },
      {
        "type": "multiple-choice",
        "question": "What advice did the instructor give Adrián?",
        "options": [
          "To quit tennis and try another sport",
          "To compare his progress with his own past progress, not with Beto's",
          "To only ever practice with Beto",
          "To switch to a different sport entirely"
        ],
        "correctIndex": 1,
        "explanation": "The instructor tells him, \"No compares tu progreso con el de otra persona. Compáralo con tu propio progreso de la semana pasada\" (Don't compare your progress with someone else's. Compare it with your own progress from last week)."
      },
      {
        "type": "multiple-choice",
        "question": "How did Adrián practice after receiving this advice?",
        "options": [
          "He stopped practicing entirely",
          "He hired a private coach",
          "He switched to a different instructor",
          "He practiced alone against the wall at home every day"
        ],
        "correctIndex": 3,
        "explanation": "The text says \"Practicaba solo contra la pared de su casa todos los días\" (He practiced alone against the wall of his house every day)."
      },
      {
        "type": "multiple-choice",
        "question": "What happened at the friendly match at the end of summer?",
        "options": [
          "Adrián lost but played much better than in his first class, and felt proud",
          "Adrián won easily",
          "The match was cancelled",
          "Beto refused to play him"
        ],
        "correctIndex": 0,
        "explanation": "The text says \"Adrián perdió el partido, pero jugó mucho mejor que en la primera clase. Se sintió orgulloso de su propio progreso\" (Adrián lost the match, but played much better than in the first class. He felt proud of his own progress)."
      }
    ]
  },
  {
    "slug": "perdidos-en-el-aeropuerto",
    "level": "A2",
    "number": 124,
    "title": "Perdidos en el aeropuerto",
    "summary": "A little brother wanders off in a busy airport and his sister finds help to locate him.",
    "duration": "6 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "La familia de Mía viajaba a otro país para visitar a unos parientes. Durante el viaje, tuvieron que esperar en un aeropuerto muy grande para cambiar de avión. Mía tenía doce años y su hermano menor, Toby, tenía siete.",
          "Mientras esperaban su próximo vuelo, la mamá de Mía fue a comprar comida en una tienda cerca de la puerta. Les dijo a los niños: —Quédense aquí, sentados, no se muevan.",
          "Pero Toby vio una tienda de juguetes al otro lado del pasillo y, sin pensarlo, caminó hacia allí para mirar los aviones de juguete. Cuando Mía se dio cuenta, su hermano ya no estaba en su asiento.",
          "Mía sintió mucho miedo. Buscó a Toby por todos lados, pero no lo encontraba entre la multitud de gente. Recordó un consejo de su papá: —Si tienes un problema, busca a un empleado del aeropuerto. Decidió hacer exactamente eso.",
          "Una empleada con un uniforme azul escuchó la historia de Mía. Inmediatamente, usó su radio para hablar con otros empleados sobre un niño perdido de siete años. En pocos minutos, encontraron a Toby mirando los aviones por una ventana grande.",
          "Toby no sabía que había un problema. Estaba muy feliz mirando los aviones despegar y aterrizar. No entendía por qué su hermana y la empleada parecían tan preocupadas.",
          "Cuando la mamá regresó con la comida, Mía le contó todo lo que pasó. La mamá abrazó fuerte a los dos niños y le explicó a Toby por qué era importante quedarse cerca de la familia en lugares grandes como el aeropuerto. Desde ese día, Toby siempre caminaba de la mano de su hermana en los aeropuertos."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "What did Toby do while his mom went to buy food?",
        "options": [
          "He stayed seated the whole time",
          "He walked to a toy store to look at toy airplanes",
          "He fell asleep in his seat",
          "He went to find his mom"
        ],
        "correctIndex": 1,
        "explanation": "The text says \"Toby vio una tienda de juguetes al otro lado del pasillo... caminó hacia allí para mirar los aviones de juguete\" (Toby saw a toy store across the aisle... he walked over to look at the toy airplanes)."
      },
      {
        "type": "multiple-choice",
        "question": "What did Mía do when she realized Toby was missing?",
        "options": [
          "She panicked and did nothing",
          "She left the airport to search outside",
          "She called the police herself",
          "She looked for an airport employee to ask for help"
        ],
        "correctIndex": 3,
        "explanation": "The text says \"Decidió buscar a un empleado del aeropuerto para pedir ayuda\" (She decided to look for an airport employee to ask for help)."
      },
      {
        "type": "multiple-choice",
        "question": "Where did they find Toby?",
        "options": [
          "At the food store",
          "Asleep on a bench",
          "In the bathroom",
          "Looking at airplanes through a big window"
        ],
        "correctIndex": 3,
        "explanation": "The text says \"encontraron a Toby mirando los aviones por una ventana grande\" (they found Toby watching the planes through a big window)."
      },
      {
        "type": "multiple-choice",
        "question": "How did Toby feel during the whole situation?",
        "options": [
          "Terrified and crying",
          "Angry at his sister",
          "Hungry and tired",
          "Happy watching the planes, not realizing there was a problem"
        ],
        "correctIndex": 3,
        "explanation": "The text says \"Toby no sabía que había un problema. Estaba muy feliz mirando los aviones despegar y aterrizar\" (Toby didn't know there was a problem. He was very happy watching the planes take off and land)."
      }
    ]
  },
  {
    "slug": "el-dron-nuevo",
    "level": "A2",
    "number": 125,
    "title": "El dron nuevo",
    "summary": "A boy crashes his new drone but learns to fly it and finishes a school video project.",
    "duration": "6 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Simón recibió un dron pequeño como regalo de su tío. Estaba muy emocionado porque quería usarlo para un proyecto de la escuela: un video sobre su barrio desde el aire.",
          "El primer día, Simón llevó el dron al parque cerca de su casa. Sin leer las instrucciones, encendió el dron y lo hizo volar muy alto y muy rápido. No sabía controlarlo bien todavía.",
          "De repente, el dron chocó contra un árbol grande y cayó al suelo. Una de las hélices se rompió. Simón se sintió muy triste porque pensaba que arruinó su regalo nuevo.",
          "Su tío lo llamó por teléfono esa noche. —Todos los pilotos de drones chocan al principio —le dijo, riéndose—. Necesitas leer el manual y practicar en un espacio abierto y sin árboles.",
          "Simón pidió una hélice nueva y su tío se la envió por correo. Mientras esperaba, leyó todo el manual del dron con mucho cuidado. Aprendió sobre los controles, la velocidad y cómo aterrizar con seguridad.",
          "Con la hélice nueva, Simón practicó en un campo grande y vacío, lejos de árboles y edificios. Al principio, volaba despacio y con cuidado. Poco a poco, ganó más confianza y control.",
          "Después de dos semanas de práctica, Simón grabó un video hermoso de su barrio desde el aire para su proyecto escolar. Sus compañeros de clase quedaron impresionados con las imágenes. Su maestra le dio la nota más alta de la clase por su trabajo creativo."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "Why did Simón want to use the drone?",
        "options": [
          "To race his friends",
          "To make a video of his neighborhood for a school project",
          "To sell it to a classmate",
          "To take it apart and study it"
        ],
        "correctIndex": 1,
        "explanation": "The text says he wanted to use it \"para un proyecto de la escuela: un video sobre su barrio desde el aire\" (for a school project: a video of his neighborhood from the air)."
      },
      {
        "type": "multiple-choice",
        "question": "What happened the first time Simón flew the drone?",
        "options": [
          "It crashed into a tree and broke a propeller",
          "It worked perfectly",
          "It flew away and got lost forever",
          "It never turned on at all"
        ],
        "correctIndex": 0,
        "explanation": "The text says \"el dron chocó contra un árbol grande y cayó al suelo. Una de las hélices se rompió\" (the drone crashed into a big tree and fell to the ground. One of the propellers broke)."
      },
      {
        "type": "multiple-choice",
        "question": "What advice did his uncle give him?",
        "options": [
          "To give up on the drone completely",
          "To only fly the drone indoors",
          "To buy a completely new drone",
          "To read the manual and practice in an open space without trees"
        ],
        "correctIndex": 3,
        "explanation": "His uncle tells him, \"Necesitas leer el manual y practicar en un espacio abierto y sin árboles\" (You need to read the manual and practice in an open space without trees)."
      },
      {
        "type": "multiple-choice",
        "question": "How did the school project turn out in the end?",
        "options": [
          "Simón never finished the video",
          "The drone broke again and he couldn't finish",
          "His teacher didn't like the video at all",
          "Simón made a great video and got the highest grade in the class"
        ],
        "correctIndex": 3,
        "explanation": "The text says \"Su maestra le dio la nota más alta de la clase por su trabajo creativo\" (His teacher gave him the highest grade in the class for his creative work)."
      }
    ]
  },
  {
    "slug": "el-viaje-de-esqui",
    "level": "A2",
    "number": 126,
    "title": "El viaje de esquí",
    "summary": "A girl who has never skied falls many times but skis down the whole mountain by the trip's end.",
    "duration": "6 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "La escuela de Lucía organizó un viaje de tres días a las montañas para esquiar. Era la primera vez que Lucía iba a esquiar, y estaba muy nerviosa porque nunca practicaba este deporte.",
          "El primer día, un instructor les enseñó a todos los estudiantes cómo ponerse los esquís y cómo pararse sin caerse. Lucía escuchaba con atención, pero cuando intentó pararse por primera vez, se cayó inmediatamente.",
          "Durante toda la mañana, Lucía se cayó muchas veces: en la nieve, cerca del telesilla, y hasta en la pista más fácil de la montaña. Algunos estudiantes se reían un poco, y Lucía se sentía avergonzada.",
          "Su amiga Valeria, que ya sabía esquiar un poco, se quedó con ella para ayudarla. —No te preocupes por las caídas —le dijo—. Todos se caen cuando aprenden. Lo importante es levantarse otra vez.",
          "Con la ayuda de Valeria, Lucía practicó los movimientos básicos: cómo doblar las rodillas, cómo frenar y cómo girar. Poco a poco, se caía menos y esquiaba con más control.",
          "El segundo día, Lucía ya podía bajar la pista fácil sin caerse ni una vez. Se sentía mucho más segura que el primer día. Decidió intentar una pista un poco más difícil con Valeria.",
          "El último día del viaje, Lucía bajó toda la montaña, desde arriba hasta abajo, sin caerse. Cuando llegó al final, gritó de alegría y abrazó a Valeria. —¡Esquiar es mi deporte favorito ahora! —dijo, muy orgullosa de su progreso en solo tres días."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "How did Lucía feel before skiing for the first time?",
        "options": [
          "Confident and excited only",
          "Nervous because she had never done this sport",
          "Bored by the whole idea",
          "Angry that she had to go"
        ],
        "correctIndex": 1,
        "explanation": "The text says \"estaba muy nerviosa porque nunca practicaba este deporte\" (she was very nervous because she had never done this sport before)."
      },
      {
        "type": "multiple-choice",
        "question": "What happened during Lucía's first morning of skiing?",
        "options": [
          "She skied perfectly right away",
          "She refused to try at all",
          "She fell many times and felt embarrassed",
          "She hurt her leg badly"
        ],
        "correctIndex": 2,
        "explanation": "The text says \"Lucía se cayó muchas veces... Lucía se sentía avergonzada\" (Lucía fell many times... Lucía felt embarrassed)."
      },
      {
        "type": "multiple-choice",
        "question": "What did Valeria tell Lucía to encourage her?",
        "options": [
          "To quit skiing and go back to the hotel",
          "That everyone falls when learning, and the important thing is to get back up",
          "That she was skiing very badly",
          "That the instructor was angry with her"
        ],
        "correctIndex": 1,
        "explanation": "Valeria tells her, \"Todos se caen cuando aprenden. Lo importante es levantarse otra vez\" (Everyone falls when they're learning. The important thing is to get back up)."
      },
      {
        "type": "multiple-choice",
        "question": "How did the ski trip end for Lucía?",
        "options": [
          "She never improved at all",
          "She got hurt and went home early",
          "She decided never to ski again",
          "She skied down the whole mountain without falling and loved the sport"
        ],
        "correctIndex": 3,
        "explanation": "The text says \"Lucía bajó toda la montaña, desde arriba hasta abajo, sin caerse\" and she says \"¡Esquiar es mi deporte favorito ahora!\" (Lucía skied down the whole mountain, from top to bottom, without falling, and says skiing is now her favorite sport)."
      }
    ]
  }
];

// The reinforcement lessons (a2-reinforcement.ts) are woven in right after
// the lesson each one reinforces, and the whole level is renumbered -- see
// weave.ts. Everything above this line is the original lesson data.
export const A2_LESSONS: Lesson[] = weaveLessons(A2_BASE_LESSONS, A2_REINFORCEMENT);
