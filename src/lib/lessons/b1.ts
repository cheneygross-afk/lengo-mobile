import type { Lesson } from "./types";
import { weaveLessons } from "./weave";
import { B1_REINFORCEMENT } from "./b1-reinforcement";

const B1_BASE_LESSONS: Lesson[] = [
  {
    "slug": "present-subjunctive-formation-1",
    "level": "B1",
    "number": 1,
    "title": "Present Subjunctive: Formation, Part 1 of 2",
    "summary": "Build the mood you'll use to express wishes, doubt, and emotion — starting with how it's formed.",
    "duration": "6 min",
    "sections": [
      {
        "heading": "¿Qué es el subjuntivo?",
        "body": [
          "Hasta ahora has usado el modo indicativo, que describe hechos y realidades. El subjuntivo es diferente: expresa deseos, dudas, emociones, y situaciones hipotéticas — cosas que no son necesariamente hechos (things that aren't necessarily facts).",
          "El subjuntivo casi siempre aparece en la segunda parte de una oración, después de \"que\": Quiero que tú vengas."
        ],
        "examples": [
          {
            "es": "Espero que tengas un buen día."
          },
          {
            "es": "Es posible que llueva mañana."
          }
        ]
      },
      {
        "heading": "Formación: verbos regulares",
        "body": [
          "Para formar el subjuntivo presente regular, toma la forma \"yo\" del presente indicativo, quita la -o, y agrega las terminaciones opuestas: los verbos -ar usan terminaciones de -er/-ir, y viceversa.",
          "hablar → hablo → hable, hables, hable, hablemos, habléis, hablen. comer → como → coma, comas, coma, comamos, comáis, coman."
        ],
        "examples": [
          {
            "es": "Quiero que hables con ella."
          },
          {
            "es": "Es importante que comas bien."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Conjuga el verbo en subjuntivo.",
            "sentence": "Espero que tú ___ (escribir) la carta pronto.",
            "answer": "escribas",
            "explanation": "Escribir sigue el patrón regular: escribo → escriba, escribas, escriba..."
          }
        ]
      },
      {
        "heading": "Verbos con cambios en la raíz",
        "body": [
          "Los verbos que cambian de raíz en el presente indicativo (e→ie, o→ue, e→i) mantienen ese cambio en el subjuntivo, excepto en nosotros y vosotros.",
          "querer → quiera, quieras, quiera, queramos, queráis, quieran. pedir → pida, pidas, pida, pidamos, pidáis, pidan (este cambia en todas las formas porque es -ir)."
        ],
        "examples": [
          {
            "es": "Quiero que tú quieras esto tanto como yo."
          },
          {
            "es": "Ojalá que ella pida el mismo plato."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Cuál es la forma correcta de \"volver\" para \"nosotros\" en subjuntivo?",
            "options": [
              "volvamos",
              "volvemos",
              "vuelvamos",
              "volvámos"
            ],
            "correctIndex": 0,
            "explanation": "Los verbos -ar/-er con cambio o→ue no cambian en nosotros: volvamos, no vuelvamos."
          }
        ]
      },
      {
        "heading": "Verbos irregulares comunes",
        "body": [
          "Seis verbos son completamente irregulares en el subjuntivo: ser (sea), estar (esté), ir (vaya), saber (sepa), dar (dé), haber (haya)."
        ],
        "examples": [
          {
            "es": "Espero que estés bien."
          },
          {
            "es": "Es posible que ella sea la nueva jefa."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Conjuga el verbo irregular.",
            "sentence": "Ojalá que nosotros ___ (ir) a la fiesta juntos.",
            "answer": "vayamos",
            "explanation": "Ir es irregular en el subjuntivo: vaya, vayas, vaya, vayamos, vayáis, vayan."
          }
        ]
      },
      {
        "heading": "En la práctica",
        "body": [
          "Una conversación entre dos hermanos sobre los planes del fin de semana."
        ],
        "examples": [
          {
            "es": "Espero que tengamos buen tiempo este fin de semana."
          },
          {
            "es": "Yo también. Quiero que vayamos a la playa si hace sol."
          },
          {
            "es": "Es posible que llueva el sábado, según el pronóstico."
          },
          {
            "es": "Bueno, ojalá que se equivoquen. ¡Necesito unas vacaciones!"
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Qué espera el primer hermano?",
            "options": [
              "Que llueva",
              "Que tengan buen tiempo",
              "Que trabajen el fin de semana",
              "Que se queden en casa"
            ],
            "correctIndex": 1,
            "explanation": "Dice: \"Espero que tengamos buen tiempo este fin de semana.\""
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "fill-blank",
        "prompt": "Conjuga el verbo.",
        "sentence": "Espero que tú ___ (hablar) con el profesor.",
        "answer": "hables",
        "explanation": "Subjuntivo regular de -ar: hable, hables, hable..."
      },
      {
        "type": "multiple-choice",
        "question": "¿Cuál es la forma correcta de \"ser\" para \"yo\" en subjuntivo?",
        "options": [
          "soy",
          "sea",
          "sera",
          "fuera"
        ],
        "correctIndex": 1,
        "explanation": "Ser es irregular en subjuntivo: sea, seas, sea, seamos, seáis, sean."
      },
      {
        "type": "fill-blank",
        "prompt": "Conjuga el verbo.",
        "sentence": "Ojalá que ellos ___ (poder) venir a la boda.",
        "answer": "puedan",
        "explanation": "Poder cambia o→ue en subjuntivo, excepto en nosotros/vosotros: pueda, puedas, pueda, podamos, podáis, puedan."
      }
    ]
  },
  {
    "slug": "present-subjunctive-formation-2",
    "level": "B1",
    "number": 2,
    "title": "Present Subjunctive: Formation, Part 2 of 2",
    "summary": "Build the mood you'll use to express wishes, doubt, and emotion — starting with how it's formed.",
    "duration": "6 min",
    "sections": [
      {
        "heading": "Vocabulario: Emociones y reacciones",
        "body": [
          "Cincuenta palabras para expresar emociones y reacciones — el terreno natural del subjuntivo."
        ],
        "examples": [
          {
            "es": "alegrarse (de)",
            "en": "to be glad (about)"
          },
          {
            "es": "sentir",
            "en": "to feel / to be sorry"
          },
          {
            "es": "temer",
            "en": "to fear"
          },
          {
            "es": "sorprender",
            "en": "to surprise"
          },
          {
            "es": "molestar",
            "en": "to bother"
          },
          {
            "es": "preocupar",
            "en": "to worry"
          },
          {
            "es": "emocionarse",
            "en": "to get excited"
          },
          {
            "es": "frustrarse",
            "en": "to get frustrated"
          },
          {
            "es": "enojarse",
            "en": "to get angry"
          },
          {
            "es": "calmarse",
            "en": "to calm down"
          },
          {
            "es": "la alegría",
            "en": "joy"
          },
          {
            "es": "la tristeza",
            "en": "sadness"
          },
          {
            "es": "el miedo",
            "en": "fear"
          },
          {
            "es": "la sorpresa",
            "en": "surprise"
          },
          {
            "es": "el enojo",
            "en": "anger"
          },
          {
            "es": "la esperanza",
            "en": "hope"
          },
          {
            "es": "el orgullo",
            "en": "pride"
          },
          {
            "es": "los celos",
            "en": "jealousy"
          },
          {
            "es": "la vergüenza",
            "en": "embarrassment"
          },
          {
            "es": "el alivio",
            "en": "relief"
          },
          {
            "es": "sentirse orgulloso",
            "en": "to feel proud"
          },
          {
            "es": "sentirse aliviado",
            "en": "to feel relieved"
          },
          {
            "es": "dar pena",
            "en": "to make one feel sorry"
          },
          {
            "es": "dar rabia",
            "en": "to make one furious"
          },
          {
            "es": "estar harto",
            "en": "to be fed up"
          },
          {
            "es": "agradecer",
            "en": "to be thankful for"
          },
          {
            "es": "lamentar",
            "en": "to regret"
          },
          {
            "es": "consolar",
            "en": "to console"
          },
          {
            "es": "animar",
            "en": "to encourage"
          },
          {
            "es": "desanimarse",
            "en": "to get discouraged"
          },
          {
            "es": "conmover",
            "en": "to move (emotionally)"
          },
          {
            "es": "asustarse",
            "en": "to get scared"
          },
          {
            "es": "tranquilizarse",
            "en": "to relax / settle down"
          },
          {
            "es": "entusiasmarse",
            "en": "to become enthusiastic"
          },
          {
            "es": "decepcionar",
            "en": "to disappoint"
          },
          {
            "es": "la decepción",
            "en": "disappointment"
          },
          {
            "es": "el asombro",
            "en": "amazement"
          },
          {
            "es": "asombrarse",
            "en": "to be amazed"
          },
          {
            "es": "indignarse",
            "en": "to become indignant"
          },
          {
            "es": "compadecerse",
            "en": "to sympathize"
          },
          {
            "es": "el nerviosismo",
            "en": "nervousness"
          },
          {
            "es": "ponerse nervioso",
            "en": "to get nervous"
          },
          {
            "es": "reponerse",
            "en": "to recover / compose oneself"
          },
          {
            "es": "el bienestar",
            "en": "well-being"
          },
          {
            "es": "el malestar",
            "en": "discomfort / unease"
          },
          {
            "es": "sentirse agobiado",
            "en": "to feel overwhelmed"
          },
          {
            "es": "desahogarse",
            "en": "to vent / get something off one's chest"
          },
          {
            "es": "la ternura",
            "en": "tenderness"
          },
          {
            "es": "la impotencia",
            "en": "helplessness"
          },
          {
            "es": "la satisfacción",
            "en": "satisfaction"
          }
        ],
        "checkpoint": [
          {
            "type": "matching",
            "instructions": "Empareja cada palabra con su significado.",
            "pairs": [
              {
                "left": "alegrarse",
                "right": "to be glad"
              },
              {
                "left": "temer",
                "right": "to fear"
              },
              {
                "left": "la vergüenza",
                "right": "embarrassment"
              },
              {
                "left": "agradecer",
                "right": "to be thankful for"
              },
              {
                "left": "desanimarse",
                "right": "to get discouraged"
              },
              {
                "left": "la decepción",
                "right": "disappointment"
              },
              {
                "left": "asombrarse",
                "right": "to be amazed"
              },
              {
                "left": "sentirse agobiado",
                "right": "to feel overwhelmed"
              },
              {
                "left": "el alivio",
                "right": "relief"
              },
              {
                "left": "los celos",
                "right": "jealousy"
              }
            ],
            "explanation": "Estas diez palabras cubren emociones comunes que activan el subjuntivo."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multi-select",
        "question": "¿Qué verbos son irregulares en subjuntivo? (Elige todas las correctas)",
        "options": [
          "ser",
          "hablar",
          "estar",
          "saber"
        ],
        "correctIndexes": [
          0,
          2,
          3
        ],
        "explanation": "Hablar es regular; ser, estar y saber son tres de los seis verbos totalmente irregulares."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras.",
        "words": [
          "Espero",
          "que",
          "tengas",
          "un",
          "buen",
          "viaje"
        ],
        "explanation": "Espero que + subjuntivo expresa un deseo.",
        "translation": "I hope you have a good trip."
      },
      {
        "type": "multiple-choice",
        "question": "¿Después de qué palabra suele aparecer el subjuntivo?",
        "options": [
          "y",
          "que",
          "pero",
          "o"
        ],
        "correctIndex": 1,
        "explanation": "El subjuntivo casi siempre sigue a \"que\" en una cláusula subordinada."
      }
    ]
  },
  {
    "slug": "subjunctive-wishes-doubt-emotion-1",
    "level": "B1",
    "number": 3,
    "title": "Subjunctive with Wishes, Doubt & Emotion, Part 1 of 2",
    "summary": "Use the subjunctive to say what you want, what you doubt, and how you feel about what others do.",
    "duration": "6 min",
    "sections": [
      {
        "heading": "Verbos de deseo",
        "body": [
          "Cuando un verbo de deseo (querer, esperar, desear, preferir) tiene un sujeto diferente en la segunda cláusula, esa cláusula lleva subjuntivo.",
          "Si el sujeto es el mismo, se usa el infinitivo: Quiero viajar (yo) vs. Quiero que viajes (tú)."
        ],
        "examples": [
          {
            "es": "Quiero que tú vengas a mi fiesta."
          },
          {
            "es": "Prefiero que comamos en casa hoy."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Conjuga el verbo.",
            "sentence": "Deseo que ustedes ___ (tener) éxito en el examen.",
            "answer": "tengan",
            "explanation": "Tener es irregular con e→ie en subjuntivo: tenga, tengas, tenga, tengamos, tengáis, tengan."
          }
        ]
      },
      {
        "heading": "Verbos de duda y negación",
        "body": [
          "Dudar, no creer, no pensar y negar requieren subjuntivo, porque expresan incertidumbre sobre la realidad de algo.",
          "Ojo: creer y pensar (en afirmativo) llevan indicativo, porque expresan certeza: Creo que viene. / No creo que venga."
        ],
        "examples": [
          {
            "es": "Dudo que él llegue a tiempo."
          },
          {
            "es": "No creo que sea tan difícil."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Cuál oración usa el subjuntivo correctamente?",
            "options": [
              "Creo que tiene razón.",
              "Dudo que tiene razón.",
              "Dudo que tenga razón.",
              "Creo que tenga razón."
            ],
            "correctIndex": 2,
            "explanation": "\"Dudar\" expresa incertidumbre, así que requiere subjuntivo: dudo que tenga razón."
          }
        ]
      },
      {
        "heading": "Verbos de emoción",
        "body": [
          "Alegrarse, sentir, sorprender, molestar y temer expresan una reacción emocional ante una acción, y esa acción va en subjuntivo."
        ],
        "examples": [
          {
            "es": "Me alegro de que estés aquí."
          },
          {
            "es": "Siento que no puedas venir."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Conjuga el verbo.",
            "sentence": "Nos sorprende que ellos no ___ (saber) la noticia.",
            "answer": "sepan",
            "explanation": "Saber es irregular en subjuntivo: sepa, sepas, sepa, sepamos, sepáis, sepan."
          }
        ]
      },
      {
        "heading": "Expresiones impersonales con emoción",
        "body": [
          "Frases como qué bueno que, qué lástima que y es una pena que también activan el subjuntivo, porque comunican una reacción, no un hecho neutral."
        ],
        "examples": [
          {
            "es": "Qué bueno que hayas venido."
          },
          {
            "es": "Es una lástima que no puedan quedarse más tiempo."
          }
        ],
        "checkpoint": [
          {
            "type": "multi-select",
            "question": "¿Qué verbos requieren subjuntivo en la cláusula siguiente? (Elige todas las correctas)",
            "options": [
              "dudar",
              "saber (afirmativo)",
              "alegrarse de",
              "temer"
            ],
            "correctIndexes": [
              0,
              2,
              3
            ],
            "explanation": "\"Saber\" en afirmativo expresa certeza y lleva indicativo, no subjuntivo."
          }
        ]
      },
      {
        "heading": "En la práctica",
        "body": [
          "Dos colegas hablan sobre un proyecto en el trabajo."
        ],
        "examples": [
          {
            "es": "Dudo que terminemos el proyecto para el viernes."
          },
          {
            "es": "Yo también lo dudo. Espero que el jefe entienda."
          },
          {
            "es": "Me preocupa que se enoje si no cumplimos el plazo."
          },
          {
            "es": "Ojalá que podamos explicarle la situación con calma."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Qué le preocupa a la segunda persona?",
            "options": [
              "Que pierdan el proyecto",
              "Que el jefe se enoje",
              "Que no les paguen",
              "Que cambien de equipo"
            ],
            "correctIndex": 1,
            "explanation": "Dice: \"Me preocupa que se enoje si no cumplimos el plazo.\""
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "fill-blank",
        "prompt": "Conjuga el verbo.",
        "sentence": "Dudo que ella ___ (venir) hoy.",
        "answer": "venga",
        "explanation": "Venir es irregular en subjuntivo: venga, vengas, venga..."
      },
      {
        "type": "multiple-choice",
        "question": "¿Cuál oración es correcta?",
        "options": [
          "Creo que él viene.",
          "Creo que él venga.",
          "No creo que él viene.",
          "Dudo que él viene."
        ],
        "correctIndex": 0,
        "explanation": "Creer en afirmativo lleva indicativo: creo que viene."
      },
      {
        "type": "fill-blank",
        "prompt": "Conjuga el verbo.",
        "sentence": "Me alegro de que tú ___ (estar) mejor.",
        "answer": "estés",
        "explanation": "Estar es irregular en subjuntivo: esté, estés, esté..."
      }
    ]
  },
  {
    "slug": "subjunctive-wishes-doubt-emotion-2",
    "level": "B1",
    "number": 4,
    "title": "Subjunctive with Wishes, Doubt & Emotion, Part 2 of 2",
    "summary": "Use the subjunctive to say what you want, what you doubt, and how you feel about what others do.",
    "duration": "6 min",
    "sections": [
      {
        "heading": "Vocabulario: Opiniones e incertidumbre",
        "body": [
          "Cincuenta palabras para expresar opiniones, dudas y certezas."
        ],
        "examples": [
          {
            "es": "opinar",
            "en": "to have an opinion"
          },
          {
            "es": "la opinión",
            "en": "the opinion"
          },
          {
            "es": "estar de acuerdo",
            "en": "to agree"
          },
          {
            "es": "estar en desacuerdo",
            "en": "to disagree"
          },
          {
            "es": "dudar",
            "en": "to doubt"
          },
          {
            "es": "la duda",
            "en": "the doubt"
          },
          {
            "es": "la certeza",
            "en": "the certainty"
          },
          {
            "es": "cierto",
            "en": "certain / true"
          },
          {
            "es": "incierto",
            "en": "uncertain"
          },
          {
            "es": "negar",
            "en": "to deny"
          },
          {
            "es": "afirmar",
            "en": "to affirm"
          },
          {
            "es": "suponer",
            "en": "to suppose"
          },
          {
            "es": "la suposición",
            "en": "the assumption"
          },
          {
            "es": "convencer",
            "en": "to convince"
          },
          {
            "es": "convencido",
            "en": "convinced"
          },
          {
            "es": "dudoso",
            "en": "doubtful"
          },
          {
            "es": "probable",
            "en": "probable"
          },
          {
            "es": "improbable",
            "en": "improbable"
          },
          {
            "es": "posible",
            "en": "possible"
          },
          {
            "es": "imposible",
            "en": "impossible"
          },
          {
            "es": "es evidente",
            "en": "it's evident"
          },
          {
            "es": "es obvio",
            "en": "it's obvious"
          },
          {
            "es": "aparentemente",
            "en": "apparently"
          },
          {
            "es": "supuestamente",
            "en": "supposedly"
          },
          {
            "es": "cuestionar",
            "en": "to question"
          },
          {
            "es": "confirmar",
            "en": "to confirm"
          },
          {
            "es": "desmentir",
            "en": "to disprove / deny"
          },
          {
            "es": "la prueba",
            "en": "the proof"
          },
          {
            "es": "el argumento",
            "en": "the argument"
          },
          {
            "es": "el punto de vista",
            "en": "the point of view"
          },
          {
            "es": "desde mi punto de vista",
            "en": "from my point of view"
          },
          {
            "es": "estar seguro",
            "en": "to be sure"
          },
          {
            "es": "tener razón",
            "en": "to be right"
          },
          {
            "es": "equivocarse",
            "en": "to be wrong / make a mistake"
          },
          {
            "es": "cambiar de opinión",
            "en": "to change one's mind"
          },
          {
            "es": "reconsiderar",
            "en": "to reconsider"
          },
          {
            "es": "el prejuicio",
            "en": "the bias / prejudice"
          },
          {
            "es": "objetivo",
            "en": "objective"
          },
          {
            "es": "subjetivo",
            "en": "subjective"
          },
          {
            "es": "razonable",
            "en": "reasonable"
          },
          {
            "es": "cuestionable",
            "en": "questionable"
          },
          {
            "es": "sin duda",
            "en": "without a doubt"
          },
          {
            "es": "tal vez",
            "en": "maybe"
          },
          {
            "es": "quizás",
            "en": "perhaps"
          },
          {
            "es": "a lo mejor",
            "en": "maybe"
          },
          {
            "es": "en mi opinión",
            "en": "in my opinion"
          },
          {
            "es": "discrepar",
            "en": "to disagree strongly"
          },
          {
            "es": "comprobar",
            "en": "to verify"
          },
          {
            "es": "el hecho",
            "en": "the fact"
          },
          {
            "es": "la creencia",
            "en": "the belief"
          }
        ],
        "checkpoint": [
          {
            "type": "matching",
            "instructions": "Empareja cada palabra con su significado.",
            "pairs": [
              {
                "left": "dudoso",
                "right": "doubtful"
              },
              {
                "left": "suponer",
                "right": "to suppose"
              },
              {
                "left": "convencido",
                "right": "convinced"
              },
              {
                "left": "desmentir",
                "right": "to disprove"
              },
              {
                "left": "equivocarse",
                "right": "to be wrong"
              },
              {
                "left": "el prejuicio",
                "right": "the bias"
              },
              {
                "left": "razonable",
                "right": "reasonable"
              },
              {
                "left": "comprobar",
                "right": "to verify"
              },
              {
                "left": "discrepar",
                "right": "to disagree strongly"
              },
              {
                "left": "la creencia",
                "right": "the belief"
              }
            ],
            "explanation": "Estas diez palabras describen cómo formamos y defendemos opiniones."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multi-select",
        "question": "¿Qué expresiones requieren subjuntivo? (Elige todas las correctas)",
        "options": [
          "es obvio que",
          "qué lástima que",
          "me alegro de que",
          "es cierto que"
        ],
        "correctIndexes": [
          1,
          2
        ],
        "explanation": "\"Es obvio que\" y \"es cierto que\" expresan certeza: llevan indicativo."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras.",
        "words": [
          "Espero",
          "que",
          "puedas",
          "venir",
          "a",
          "la",
          "cena"
        ],
        "explanation": "Espero que + subjuntivo.",
        "translation": "I hope you can come to dinner."
      },
      {
        "type": "multiple-choice",
        "question": "¿Qué significa \"a lo mejor\"?",
        "options": [
          "the best",
          "maybe",
          "at best",
          "never"
        ],
        "correctIndex": 1,
        "explanation": "\"A lo mejor\" es una forma coloquial de decir \"maybe\" / \"perhaps\"."
      }
    ]
  },
  {
    "slug": "subjunctive-wishes-doubt-emotion-mastery-check",
    "level": "B1",
    "number": 5,
    "title": "Mastery Check: Subjunctive with Wishes, Doubt & Emotion",
    "summary": "A focused review test on choosing subjunctive vs. indicative after verbs and phrases of desire, doubt, and emotion.",
    "duration": "10 min",
    "sections": [],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "¿Cuál oración expresa correctamente un deseo con sujetos diferentes?",
        "options": [
          "Espero que tú llegues temprano mañana.",
          "Espero que yo llegue temprano mañana.",
          "Espero llegar tú temprano mañana.",
          "Espero que tú llegas temprano mañana."
        ],
        "correctIndex": 0,
        "explanation": "Cuando el sujeto de la segunda cláusula es diferente (tú), se necesita \"que\" + subjuntivo: espero que tú llegues. Si el sujeto fuera el mismo, se usaría el infinitivo sin \"que\"."
      },
      {
        "type": "fill-blank",
        "prompt": "Conjuga el verbo. (Mismo sujeto → infinitivo; sujeto diferente → subjuntivo.)",
        "sentence": "Preferimos ___ (salir) temprano para evitar el tráfico.",
        "answer": "salir",
        "explanation": "El sujeto de \"preferimos\" es el mismo que hace la acción de salir, así que se usa el infinitivo, no el subjuntivo: preferimos salir."
      },
      {
        "type": "fill-blank",
        "prompt": "Conjuga el verbo.",
        "sentence": "Mis padres quieren que yo ___ (estudiar) medicina.",
        "answer": "estudie",
        "explanation": "El sujeto de la segunda cláusula (yo) es diferente del de \"quieren\" (mis padres), así que se necesita subjuntivo: estudie."
      },
      {
        "type": "multiple-choice",
        "question": "¿Cuál oración es gramaticalmente correcta?",
        "options": [
          "No dudo que ella tiene mucho talento.",
          "No dudo que ella tenga mucho talento.",
          "Dudo que ella tiene mucho talento.",
          "Creo que ella tenga mucho talento."
        ],
        "correctIndex": 0,
        "explanation": "\"No dudar\" expresa certeza (lo contrario de duda), así que lleva indicativo: no dudo que tiene. \"Dudar\" sin \"no\" sí requiere subjuntivo, y \"creer\" en afirmativo también lleva indicativo."
      },
      {
        "type": "multi-select",
        "question": "¿Qué oraciones usan el subjuntivo correctamente? (Elige todas las correctas)",
        "options": [
          "Tememos que el vuelo se retrase.",
          "Pensamos que el vuelo se retrase.",
          "Nos molesta que la gente hable durante la película.",
          "Es evidente que llueva mucho aquí."
        ],
        "correctIndexes": [
          0,
          2
        ],
        "explanation": "\"Temer\" y \"molestar\" son verbos de emoción y requieren subjuntivo. \"Pensar\" en afirmativo y \"es evidente que\" expresan certeza y llevan indicativo, no subjuntivo."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Translate to Spanish.",
        "source": "I'm surprised that they haven't called.",
        "answer": "Me sorprende que no hayan llamado.",
        "altAnswers": [
          "Me sorprende que ellos no hayan llamado."
        ],
        "explanation": "\"Sorprender\" es un verbo de emoción; activa el subjuntivo en la cláusula siguiente: que no hayan llamado."
      },
      {
        "type": "translate",
        "direction": "es-en",
        "prompt": "Translate to English.",
        "source": "Qué lástima que no encuentres trabajo todavía.",
        "answer": "What a shame that you haven't found a job yet.",
        "altAnswers": [
          "It's a shame you still haven't found a job.",
          "What a pity you haven't found work yet."
        ],
        "explanation": "\"Qué lástima que\" expresa una reacción emocional y requiere subjuntivo: encuentres."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras.",
        "words": [
          "Nos",
          "molesta",
          "que",
          "los",
          "vecinos",
          "hagan",
          "tanto",
          "ruido"
        ],
        "translation": "It bothers us that the neighbors make so much noise.",
        "explanation": "\"Molestar\" es un verbo de emoción: nos molesta que + subjuntivo (hagan)."
      },
      {
        "type": "matching",
        "instructions": "Empareja cada palabra con su significado.",
        "pairs": [
          {
            "left": "afirmar",
            "right": "to affirm"
          },
          {
            "left": "la certeza",
            "right": "the certainty"
          },
          {
            "left": "cuestionable",
            "right": "questionable"
          },
          {
            "left": "objetivo",
            "right": "objective"
          },
          {
            "left": "subjetivo",
            "right": "subjective"
          },
          {
            "left": "sin duda",
            "right": "without a doubt"
          },
          {
            "left": "reconsiderar",
            "right": "to reconsider"
          },
          {
            "left": "el hecho",
            "right": "the fact"
          },
          {
            "left": "improbable",
            "right": "improbable"
          },
          {
            "left": "estar en desacuerdo",
            "right": "to disagree"
          }
        ],
        "explanation": "Estas diez palabras del vocabulario de opiniones e incertidumbre aparecen con frecuencia a nivel B1."
      },
      {
        "type": "fill-blank",
        "prompt": "Conjuga el verbo.",
        "sentence": "Es una pena que tu hermano no ___ (conocer) a mis padres todavía.",
        "answer": "conozca",
        "explanation": "\"Es una pena que\" es una expresión impersonal de emoción: requiere subjuntivo. Conocer es irregular en subjuntivo: conozca, conozcas, conozca..."
      },
      {
        "type": "multiple-choice",
        "question": "Un colega dice: \"Niego que yo ___ el error.\" ¿Qué forma completa la oración?",
        "options": [
          "cometí",
          "cometo",
          "cometa",
          "cometiendo"
        ],
        "correctIndex": 2,
        "explanation": "\"Negar que\" expresa negación de un hecho y requiere subjuntivo: niego que yo cometa el error."
      },
      {
        "type": "multi-select",
        "question": "¿Qué verbos o frases activan el subjuntivo en la cláusula siguiente? (Elige todas las correctas)",
        "options": [
          "esperar",
          "es obvio que",
          "sorprender",
          "estar seguro de que"
        ],
        "correctIndexes": [
          0,
          2
        ],
        "explanation": "\"Esperar\" (deseo) y \"sorprender\" (emoción) requieren subjuntivo. \"Es obvio que\" y \"estar seguro de que\" expresan certeza y llevan indicativo."
      },
      {
        "type": "fill-blank",
        "prompt": "Conjuga el verbo. Presta atención al sujeto.",
        "sentence": "Sentimos mucho que tú no ___ (ir) a poder asistir a la boda.",
        "answer": "vayas",
        "explanation": "\"Sentir\" es un verbo de emoción; con sujeto diferente (tú) requiere subjuntivo. Ir es muy irregular en subjuntivo: vaya, vayas, vaya..."
      },
      {
        "type": "multiple-choice",
        "question": "¿Cuál es la mejor traducción de \"Dudamos que el plan funcione\"?",
        "options": [
          "We doubt the plan works.",
          "We doubt that the plan will work.",
          "We don't doubt the plan works.",
          "We doubted the plan worked."
        ],
        "correctIndex": 1,
        "explanation": "\"Dudamos que\" + subjuntivo expresa incertidumbre sobre algo futuro o hipotético: we doubt (that) the plan will work."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras.",
        "words": [
          "Qué",
          "bueno",
          "que",
          "hayan",
          "llegado",
          "sin",
          "problemas"
        ],
        "translation": "How great that they arrived without problems.",
        "explanation": "\"Qué bueno que\" es una expresión de emoción/reacción: siempre lleva subjuntivo (hayan llegado)."
      },
      {
        "type": "multiple-choice",
        "question": "Elige la opción que completa correctamente: \"Mi jefa prefiere que nosotros ___ el informe antes del viernes.\"",
        "options": [
          "terminamos",
          "terminemos",
          "terminar",
          "terminaríamos"
        ],
        "correctIndex": 1,
        "explanation": "\"Preferir que\" con sujeto diferente (nosotros) requiere subjuntivo: terminemos."
      }
    ]
  },
  {
    "slug": "subjunctive-impersonal-ojala-1",
    "level": "B1",
    "number": 6,
    "title": "Subjunctive with Impersonal Expressions & Ojalá, Part 1 of 2",
    "summary": "Master the impersonal phrases and the one Arabic-derived word every Spanish speaker uses to say \"I hope so.\"",
    "duration": "5 min",
    "sections": [
      {
        "heading": "Expresiones impersonales de necesidad y opinión",
        "body": [
          "Frases como es importante que, es necesario que, es mejor que y es raro que no tienen un sujeto específico, y casi siempre requieren subjuntivo en la cláusula que sigue."
        ],
        "examples": [
          {
            "es": "Es importante que estudies para el examen."
          },
          {
            "es": "Es necesario que lleguemos temprano."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Conjuga el verbo.",
            "sentence": "Es mejor que nosotros ___ (salir) antes de las ocho.",
            "answer": "salgamos",
            "explanation": "Salir es irregular en subjuntivo: salga, salgas, salga, salgamos, salgáis, salgan."
          }
        ]
      },
      {
        "heading": "Excepción: certeza objetiva",
        "body": [
          "Algunas expresiones impersonales indican un hecho, no una opinión: es verdad que, es cierto que, es obvio que. Estas llevan indicativo."
        ],
        "examples": [
          {
            "es": "Es verdad que el español es útil."
          },
          {
            "es": "Es obvio que ella trabaja mucho."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Cuál expresión lleva indicativo?",
            "options": [
              "es raro que",
              "es necesario que",
              "es verdad que",
              "es mejor que"
            ],
            "correctIndex": 2,
            "explanation": "\"Es verdad que\" expresa un hecho objetivo, así que va con indicativo."
          }
        ]
      },
      {
        "heading": "Ojalá (que)",
        "body": [
          "Ojalá viene del árabe \"law šā' allāh\" (\"si Dios quiere\") y hoy significa \"I hope\" o \"I wish\". Siempre lleva subjuntivo, con o sin \"que\"."
        ],
        "examples": [
          {
            "es": "¡Ojalá tengamos suerte!"
          },
          {
            "es": "Ojalá que no llueva mañana."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Conjuga el verbo.",
            "sentence": "¡Ojalá ___ (ganar, nosotros) el partido!",
            "answer": "ganemos",
            "explanation": "Ojalá siempre exige subjuntivo: ganemos."
          }
        ]
      },
      {
        "heading": "Combinando estas estructuras",
        "body": [
          "En una sola conversación puedes combinar deseo, duda, emoción y expresiones impersonales — todas comparten la misma estructura de subjuntivo después de \"que\"."
        ],
        "examples": [
          {
            "es": "Ojalá que sea posible, porque es importante que lleguemos a un acuerdo."
          }
        ],
        "checkpoint": [
          {
            "type": "multi-select",
            "question": "¿Qué frases requieren subjuntivo? (Elige todas las correctas)",
            "options": [
              "ojalá que",
              "es evidente que",
              "es raro que",
              "es cierto que"
            ],
            "correctIndexes": [
              0,
              2
            ],
            "explanation": "Es evidente que y es cierto que expresan certeza, así que llevan indicativo."
          }
        ]
      },
      {
        "heading": "En la práctica",
        "body": [
          "Un mensaje entre amigos antes de un viaje."
        ],
        "examples": [
          {
            "es": "Ojalá que el vuelo salga a tiempo mañana."
          },
          {
            "es": "Sí, es importante que lleguemos antes del mediodía."
          },
          {
            "es": "Es necesario que confirmemos el hotel esta noche."
          },
          {
            "es": "Buena idea. ¡Ojalá que todo salga perfecto!"
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Qué es necesario confirmar esta noche?",
            "options": [
              "El vuelo",
              "El hotel",
              "El coche",
              "El restaurante"
            ],
            "correctIndex": 1,
            "explanation": "El texto dice: \"Es necesario que confirmemos el hotel esta noche.\""
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "fill-blank",
        "prompt": "Conjuga el verbo.",
        "sentence": "Es importante que tú ___ (dormir) lo suficiente.",
        "answer": "duermas",
        "explanation": "Dormir cambia o→ue en subjuntivo: duerma, duermas, duerma..."
      },
      {
        "type": "multiple-choice",
        "question": "¿Cuál lleva indicativo?",
        "options": [
          "es necesario que",
          "es obvio que",
          "es raro que",
          "ojalá que"
        ],
        "correctIndex": 1,
        "explanation": "\"Es obvio que\" expresa certeza: indicativo."
      },
      {
        "type": "fill-blank",
        "prompt": "Conjuga el verbo.",
        "sentence": "¡Ojalá ___ (hacer) buen tiempo el sábado!",
        "answer": "haga",
        "explanation": "Hacer es irregular en subjuntivo: haga, hagas, haga..."
      }
    ]
  },
  {
    "slug": "subjunctive-impersonal-ojala-2",
    "level": "B1",
    "number": 7,
    "title": "Subjunctive with Impersonal Expressions & Ojalá, Part 2 of 2",
    "summary": "Master the impersonal phrases and the one Arabic-derived word every Spanish speaker uses to say \"I hope so.\"",
    "duration": "7 min",
    "sections": [
      {
        "heading": "Vocabulario: Esperanzas y el mundo natural",
        "body": [
          "Cincuenta palabras sobre la naturaleza y el medio ambiente — territorio perfecto para \"ojalá\"."
        ],
        "examples": [
          {
            "es": "la naturaleza",
            "en": "nature"
          },
          {
            "es": "el medio ambiente",
            "en": "the environment"
          },
          {
            "es": "el planeta",
            "en": "the planet"
          },
          {
            "es": "el bosque",
            "en": "the forest"
          },
          {
            "es": "la selva",
            "en": "the jungle"
          },
          {
            "es": "el desierto",
            "en": "the desert"
          },
          {
            "es": "el río",
            "en": "the river"
          },
          {
            "es": "el lago",
            "en": "the lake"
          },
          {
            "es": "el océano",
            "en": "the ocean"
          },
          {
            "es": "la montaña",
            "en": "the mountain"
          },
          {
            "es": "el valle",
            "en": "the valley"
          },
          {
            "es": "la costa",
            "en": "the coast"
          },
          {
            "es": "la isla",
            "en": "the island"
          },
          {
            "es": "la tierra",
            "en": "the earth / land"
          },
          {
            "es": "el suelo",
            "en": "the ground / soil"
          },
          {
            "es": "el aire",
            "en": "the air"
          },
          {
            "es": "contaminar",
            "en": "to pollute"
          },
          {
            "es": "la contaminación",
            "en": "pollution"
          },
          {
            "es": "reciclar",
            "en": "to recycle"
          },
          {
            "es": "proteger",
            "en": "to protect"
          },
          {
            "es": "conservar",
            "en": "to conserve"
          },
          {
            "es": "la especie",
            "en": "the species"
          },
          {
            "es": "en peligro de extinción",
            "en": "endangered"
          },
          {
            "es": "el cambio climático",
            "en": "climate change"
          },
          {
            "es": "el calentamiento global",
            "en": "global warming"
          },
          {
            "es": "sostenible",
            "en": "sustainable"
          },
          {
            "es": "renovable",
            "en": "renewable"
          },
          {
            "es": "la energía solar",
            "en": "solar energy"
          },
          {
            "es": "el recurso natural",
            "en": "the natural resource"
          },
          {
            "es": "escaso",
            "en": "scarce"
          },
          {
            "es": "abundante",
            "en": "abundant"
          },
          {
            "es": "la sequía",
            "en": "the drought"
          },
          {
            "es": "la inundación",
            "en": "the flood"
          },
          {
            "es": "el incendio forestal",
            "en": "the wildfire"
          },
          {
            "es": "plantar",
            "en": "to plant"
          },
          {
            "es": "cultivar",
            "en": "to cultivate / grow"
          },
          {
            "es": "la cosecha",
            "en": "the harvest"
          },
          {
            "es": "el ecosistema",
            "en": "the ecosystem"
          },
          {
            "es": "la biodiversidad",
            "en": "biodiversity"
          },
          {
            "es": "silvestre",
            "en": "wild"
          },
          {
            "es": "el hábitat",
            "en": "the habitat"
          },
          {
            "es": "preservar",
            "en": "to preserve"
          },
          {
            "es": "dañar",
            "en": "to damage / harm"
          },
          {
            "es": "el daño",
            "en": "the damage"
          },
          {
            "es": "restaurar",
            "en": "to restore"
          },
          {
            "es": "la huella de carbono",
            "en": "the carbon footprint"
          },
          {
            "es": "consciente",
            "en": "conscious / aware"
          },
          {
            "es": "el equilibrio",
            "en": "the balance"
          },
          {
            "es": "florecer",
            "en": "to bloom / flourish"
          },
          {
            "es": "marchitarse",
            "en": "to wither"
          }
        ],
        "checkpoint": [
          {
            "type": "matching",
            "instructions": "Empareja cada palabra con su significado.",
            "pairs": [
              {
                "left": "el bosque",
                "right": "the forest"
              },
              {
                "left": "contaminar",
                "right": "to pollute"
              },
              {
                "left": "en peligro de extinción",
                "right": "endangered"
              },
              {
                "left": "sostenible",
                "right": "sustainable"
              },
              {
                "left": "la sequía",
                "right": "the drought"
              },
              {
                "left": "el ecosistema",
                "right": "the ecosystem"
              },
              {
                "left": "preservar",
                "right": "to preserve"
              },
              {
                "left": "la huella de carbono",
                "right": "the carbon footprint"
              },
              {
                "left": "florecer",
                "right": "to bloom"
              },
              {
                "left": "el equilibrio",
                "right": "the balance"
              }
            ],
            "explanation": "Estas diez palabras describen la naturaleza y su cuidado."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multi-select",
        "question": "¿Qué expresiones requieren subjuntivo? (Elige todas las correctas)",
        "options": [
          "es mejor que",
          "es verdad que",
          "es raro que",
          "es cierto que"
        ],
        "correctIndexes": [
          0,
          2
        ],
        "explanation": "Es verdad que y es cierto que expresan hechos: indicativo."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras.",
        "words": [
          "Es",
          "necesario",
          "que",
          "reciclemos",
          "más"
        ],
        "explanation": "Es necesario que + subjuntivo.",
        "translation": "It's necessary that we recycle more."
      },
      {
        "type": "multiple-choice",
        "question": "¿De qué idioma viene \"ojalá\"?",
        "options": [
          "latín",
          "árabe",
          "francés",
          "griego"
        ],
        "correctIndex": 1,
        "explanation": "Ojalá viene del árabe \"law šā' allāh\" (si Dios quiere)."
      }
    ]
  },
  {
    "slug": "commands-imperative-1",
    "level": "B1",
    "number": 8,
    "title": "Commands: Tú, Usted, Nosotros & Negatives, Part 1 of 2",
    "summary": "Give instructions, make requests, and issue friendly suggestions with the imperative mood.",
    "duration": "6 min",
    "sections": [
      {
        "heading": "Mandatos afirmativos con tú",
        "body": [
          "Para la mayoría de los verbos, el mandato afirmativo de tú es idéntico a la forma \"él/ella\" del presente indicativo: habla, come, escribe.",
          "Ocho verbos tienen formas irregulares: di (decir), haz (hacer), ve (ir), pon (poner), sal (salir), sé (ser), ten (tener), ven (venir)."
        ],
        "examples": [
          {
            "es": "Habla más despacio, por favor."
          },
          {
            "es": "Ten paciencia."
          },
          {
            "es": "Ve a la tienda."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Da el mandato afirmativo de tú.",
            "sentence": "___ (hacer) la tarea antes de salir.",
            "answer": "Haz",
            "explanation": "Hacer tiene mandato irregular de tú: haz."
          }
        ]
      },
      {
        "heading": "Mandatos con usted y ustedes",
        "body": [
          "Los mandatos de usted/ustedes usan la forma del subjuntivo presente: hable (usted), hablen (ustedes); coma (usted), coman (ustedes)."
        ],
        "examples": [
          {
            "es": "Por favor, espere un momento."
          },
          {
            "es": "Firmen aquí, por favor."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Cuál es el mandato correcto de \"usted\" para \"cerrar\"?",
            "options": [
              "cierre",
              "cierra",
              "cerre",
              "cierras"
            ],
            "correctIndex": 0,
            "explanation": "Cerrar cambia e→ie; el mandato de usted usa la forma del subjuntivo: cierre."
          }
        ]
      },
      {
        "heading": "Mandatos negativos",
        "body": [
          "Todos los mandatos negativos (tú, usted, ustedes) usan el subjuntivo presente con \"no\" delante: no hables, no hable, no hablen.",
          "El tú negativo es diferente del tú afirmativo: habla (afirmativo) vs. no hables (negativo)."
        ],
        "examples": [
          {
            "es": "No llegues tarde."
          },
          {
            "es": "No se preocupe."
          },
          {
            "es": "No hagan ruido, por favor."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Da el mandato negativo de tú.",
            "sentence": "No ___ (comer) tan rápido.",
            "answer": "comas",
            "explanation": "El tú negativo usa la forma del subjuntivo: no comas."
          }
        ]
      },
      {
        "heading": "Mandatos con nosotros: \"vamos a\" o subjuntivo",
        "body": [
          "Para sugerir una acción conjunta (\"let's...\"), usa la forma \"nosotros\" del subjuntivo, o simplemente vamos a + infinitivo (más común en el habla cotidiana).",
          "Con verbos reflexivos y pronombres, el mandato afirmativo de nosotros pierde la -s final: vámonos (no vamos + nos)."
        ],
        "examples": [
          {
            "es": "Vamos a comer algo."
          },
          {
            "es": "Sentémonos aquí."
          },
          {
            "es": "¡Vámonos ya!"
          }
        ],
        "checkpoint": [
          {
            "type": "multi-select",
            "question": "¿Qué formas expresan \"let's eat\"? (Elige todas las correctas)",
            "options": [
              "Comamos.",
              "Vamos a comer.",
              "Come.",
              "Comemos."
            ],
            "correctIndexes": [
              0,
              1
            ],
            "explanation": "Comamos (subjuntivo de nosotros) y vamos a comer expresan \"let's eat\"; comemos es simplemente el presente indicativo."
          }
        ]
      },
      {
        "heading": "En la práctica",
        "body": [
          "Una receta de cocina, escrita con mandatos de usted (formato típico de recetas)."
        ],
        "examples": [
          {
            "es": "Corte las cebollas en trozos pequeños."
          },
          {
            "es": "Caliente el aceite en una sartén grande."
          },
          {
            "es": "Añada las cebollas y cocine por cinco minutos."
          },
          {
            "es": "No se olvide de agregar sal y pimienta al final."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Qué tiempo debe cocinar la cebolla?",
            "options": [
              "Dos minutos",
              "Cinco minutos",
              "Diez minutos",
              "Quince minutos"
            ],
            "correctIndex": 1,
            "explanation": "El texto dice: \"cocine por cinco minutos.\""
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "fill-blank",
        "prompt": "Da el mandato afirmativo de tú.",
        "sentence": "___ (venir) aquí, por favor.",
        "answer": "Ven",
        "explanation": "Venir tiene mandato irregular de tú: ven."
      },
      {
        "type": "multiple-choice",
        "question": "¿Cuál es el mandato negativo de tú para \"salir\"?",
        "options": [
          "no salgas",
          "no sales",
          "no sal",
          "no salga"
        ],
        "correctIndex": 0,
        "explanation": "El tú negativo usa el subjuntivo: no salgas."
      },
      {
        "type": "fill-blank",
        "prompt": "Da el mandato de usted.",
        "sentence": "___ (esperar) un momento, por favor.",
        "answer": "Espere",
        "explanation": "El mandato de usted usa la forma del subjuntivo: espere."
      }
    ]
  },
  {
    "slug": "commands-imperative-2",
    "level": "B1",
    "number": 9,
    "title": "Commands: Tú, Usted, Nosotros & Negatives, Part 2 of 2",
    "summary": "Give instructions, make requests, and issue friendly suggestions with the imperative mood.",
    "duration": "6 min",
    "sections": [
      {
        "heading": "Vocabulario: La cocina",
        "body": [
          "Cincuenta palabras de cocina — perfectas para practicar mandatos, como en una receta."
        ],
        "examples": [
          {
            "es": "cortar",
            "en": "to cut"
          },
          {
            "es": "picar",
            "en": "to chop / mince"
          },
          {
            "es": "mezclar",
            "en": "to mix"
          },
          {
            "es": "batir",
            "en": "to beat / whisk"
          },
          {
            "es": "hervir",
            "en": "to boil"
          },
          {
            "es": "freír",
            "en": "to fry"
          },
          {
            "es": "hornear",
            "en": "to bake"
          },
          {
            "es": "asar",
            "en": "to roast / grill"
          },
          {
            "es": "saltear",
            "en": "to sauté"
          },
          {
            "es": "calentar",
            "en": "to heat"
          },
          {
            "es": "enfriar",
            "en": "to cool"
          },
          {
            "es": "incorporar",
            "en": "to incorporate / fold in"
          },
          {
            "es": "agregar",
            "en": "to add"
          },
          {
            "es": "revolver",
            "en": "to stir"
          },
          {
            "es": "colar",
            "en": "to strain"
          },
          {
            "es": "pelar",
            "en": "to peel"
          },
          {
            "es": "rallar",
            "en": "to grate"
          },
          {
            "es": "exprimir",
            "en": "to squeeze"
          },
          {
            "es": "la sartén",
            "en": "the frying pan"
          },
          {
            "es": "la olla",
            "en": "the pot"
          },
          {
            "es": "el horno",
            "en": "the oven"
          },
          {
            "es": "la estufa",
            "en": "the stove"
          },
          {
            "es": "el cuchillo",
            "en": "the knife"
          },
          {
            "es": "la tabla de cortar",
            "en": "the cutting board"
          },
          {
            "es": "la cuchara",
            "en": "the spoon"
          },
          {
            "es": "el tenedor",
            "en": "the fork"
          },
          {
            "es": "el plato",
            "en": "the dish"
          },
          {
            "es": "el ingrediente",
            "en": "the ingredient"
          },
          {
            "es": "la porción",
            "en": "the portion"
          },
          {
            "es": "la cucharadita",
            "en": "the teaspoon"
          },
          {
            "es": "la cucharada",
            "en": "the tablespoon"
          },
          {
            "es": "una pizca de",
            "en": "a pinch of"
          },
          {
            "es": "al gusto",
            "en": "to taste"
          },
          {
            "es": "el aceite",
            "en": "the oil"
          },
          {
            "es": "la sal",
            "en": "the salt"
          },
          {
            "es": "la pimienta",
            "en": "the pepper"
          },
          {
            "es": "el ajo",
            "en": "the garlic"
          },
          {
            "es": "la cebolla",
            "en": "the onion"
          },
          {
            "es": "la harina",
            "en": "the flour"
          },
          {
            "es": "el azúcar",
            "en": "the sugar"
          },
          {
            "es": "la masa",
            "en": "the dough"
          },
          {
            "es": "cocido",
            "en": "cooked"
          },
          {
            "es": "crudo",
            "en": "raw"
          },
          {
            "es": "a fuego lento",
            "en": "on low heat"
          },
          {
            "es": "a fuego alto",
            "en": "on high heat"
          },
          {
            "es": "dejar reposar",
            "en": "to let rest"
          },
          {
            "es": "servir",
            "en": "to serve"
          },
          {
            "es": "decorar",
            "en": "to garnish"
          },
          {
            "es": "el sabor",
            "en": "the flavor"
          },
          {
            "es": "sabroso",
            "en": "tasty"
          }
        ],
        "checkpoint": [
          {
            "type": "matching",
            "instructions": "Empareja cada palabra con su significado.",
            "pairs": [
              {
                "left": "picar",
                "right": "to chop"
              },
              {
                "left": "hervir",
                "right": "to boil"
              },
              {
                "left": "saltear",
                "right": "to sauté"
              },
              {
                "left": "rallar",
                "right": "to grate"
              },
              {
                "left": "la sartén",
                "right": "the frying pan"
              },
              {
                "left": "una pizca de",
                "right": "a pinch of"
              },
              {
                "left": "a fuego lento",
                "right": "on low heat"
              },
              {
                "left": "dejar reposar",
                "right": "to let rest"
              },
              {
                "left": "crudo",
                "right": "raw"
              },
              {
                "left": "sabroso",
                "right": "tasty"
              }
            ],
            "explanation": "Estas diez palabras aparecen constantemente en recetas."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multi-select",
        "question": "¿Qué mandatos son irregulares para tú? (Elige todas las correctas)",
        "options": [
          "decir → di",
          "hablar → habla",
          "hacer → haz",
          "comer → come"
        ],
        "correctIndexes": [
          0,
          2
        ],
        "explanation": "Hablar y comer son regulares; decir y hacer son irregulares."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras.",
        "words": [
          "No",
          "te",
          "preocupes",
          "por",
          "eso"
        ],
        "explanation": "El mandato negativo de tú (reflexivo) usa el subjuntivo con el pronombre antes.",
        "translation": "Don't worry about that."
      },
      {
        "type": "multiple-choice",
        "question": "¿Cómo se dice \"let's go\"?",
        "options": [
          "Vamos",
          "Vayamos",
          "Íbamos",
          "Vayan"
        ],
        "correctIndex": 0,
        "explanation": "\"Vamos\" es la forma más común y natural de decir \"let's go\"."
      }
    ]
  },
  {
    "slug": "conditional-tense-1",
    "level": "B1",
    "number": 10,
    "title": "The Conditional Tense, Part 1 of 2",
    "summary": "Say what you would do — for polite requests, hypotheticals, and softened advice.",
    "duration": "6 min",
    "sections": [
      {
        "heading": "Formación regular",
        "body": [
          "El condicional se forma añadiendo las mismas terminaciones al infinitivo completo, para los tres grupos de verbos: -ía, -ías, -ía, -íamos, -íais, -ían."
        ],
        "examples": [
          {
            "es": "hablaría, hablarías, hablaría, hablaríamos, hablaríais, hablarían"
          },
          {
            "es": "Yo viajaría a Japón si tuviera dinero."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Conjuga el verbo en condicional.",
            "sentence": "Nosotros ___ (comer) fuera todos los días si pudiéramos.",
            "answer": "comeríamos",
            "explanation": "El condicional regular añade -íamos al infinitivo completo: comeríamos."
          }
        ]
      },
      {
        "heading": "Raíces irregulares (las mismas del futuro)",
        "body": [
          "El condicional usa exactamente las mismas raíces irregulares que el futuro: tendría, pondría, saldría, vendría, diría, haría, podría, querría, sabría, habría."
        ],
        "examples": [
          {
            "es": "¿Podrías ayudarme con esto?"
          },
          {
            "es": "Yo diría que sí."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Cuál es la forma correcta de \"tener\" para \"yo\" en condicional?",
            "options": [
              "tenería",
              "tendría",
              "tenía",
              "tuviera"
            ],
            "correctIndex": 1,
            "explanation": "Tener usa la raíz irregular tendr- tanto en futuro como en condicional: tendría."
          }
        ]
      },
      {
        "heading": "Usos: peticiones corteses y consejos suaves",
        "body": [
          "El condicional suaviza una petición o una sugerencia, haciéndola sonar más educada que el presente o el mandato directo.",
          "Yo que tú... / Yo en tu lugar... son frases comunes para dar consejos con el condicional."
        ],
        "examples": [
          {
            "es": "¿Me pasarías la sal, por favor?"
          },
          {
            "es": "Yo que tú, hablaría con ella primero."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Conjuga el verbo.",
            "sentence": "___ (querer, yo) hacer una pregunta.",
            "answer": "Querría",
            "explanation": "El condicional suaviza la petición: querría (más educado que quiero)."
          }
        ]
      },
      {
        "heading": "El condicional en situaciones hipotéticas",
        "body": [
          "El condicional también describe lo que pasaría bajo ciertas condiciones — una idea que exploraremos más a fondo con las cláusulas con \"si\" en la próxima lección."
        ],
        "examples": [
          {
            "es": "Con más tiempo, terminaría el proyecto hoy."
          },
          {
            "es": "En tu situación, yo pediría ayuda."
          }
        ],
        "checkpoint": [
          {
            "type": "multi-select",
            "question": "¿Qué situaciones usan el condicional? (Elige todas las correctas)",
            "options": [
              "Una petición cortés",
              "Una acción habitual del pasado",
              "Un consejo suave",
              "Un hecho del presente"
            ],
            "correctIndexes": [
              0,
              2
            ],
            "explanation": "El condicional no se usa para hábitos pasados ni hechos del presente — eso corresponde al imperfecto y al presente."
          }
        ]
      },
      {
        "heading": "En la práctica",
        "body": [
          "Una llamada a un restaurante para hacer una reserva."
        ],
        "examples": [
          {
            "es": "Buenas tardes, ¿podría hacer una reserva para esta noche?"
          },
          {
            "es": "Claro, ¿para cuántas personas sería?"
          },
          {
            "es": "Seríamos cuatro personas, a las ocho."
          },
          {
            "es": "Perfecto. ¿Preferirían una mesa adentro o afuera?"
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Para cuántas personas es la reserva?",
            "options": [
              "Dos",
              "Tres",
              "Cuatro",
              "Seis"
            ],
            "correctIndex": 2,
            "explanation": "El cliente dice: \"Seríamos cuatro personas.\""
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "fill-blank",
        "prompt": "Conjuga el verbo.",
        "sentence": "Yo ___ (hacer) lo mismo en tu lugar.",
        "answer": "haría",
        "explanation": "Hacer usa la raíz irregular har- en condicional: haría."
      },
      {
        "type": "multiple-choice",
        "question": "¿Cómo se dice \"I would like\" de forma educada?",
        "options": [
          "Quiero",
          "Querría",
          "Quería",
          "Quiero que"
        ],
        "correctIndex": 1,
        "explanation": "\"Querría\" suaviza la petición, sonando más educado que \"quiero\"."
      },
      {
        "type": "fill-blank",
        "prompt": "Conjuga el verbo.",
        "sentence": "¿___ (poder, tú) cerrar la ventana?",
        "answer": "Podrías",
        "explanation": "El condicional de poder: podría, podrías, podría..."
      }
    ]
  },
  {
    "slug": "conditional-tense-2",
    "level": "B1",
    "number": 11,
    "title": "The Conditional Tense, Part 2 of 2",
    "summary": "Say what you would do — for polite requests, hypotheticals, and softened advice.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "Vocabulario: Dinero y finanzas",
        "body": [
          "Cincuenta palabras sobre el dinero — un tema perfecto para el condicional (\"gastaría\", \"ahorraría\")."
        ],
        "examples": [
          {
            "es": "el dinero",
            "en": "the money"
          },
          {
            "es": "la cuenta bancaria",
            "en": "the bank account"
          },
          {
            "es": "el banco",
            "en": "the bank"
          },
          {
            "es": "administrar",
            "en": "to manage (money)"
          },
          {
            "es": "derrochar",
            "en": "to squander"
          },
          {
            "es": "invertir",
            "en": "to invest"
          },
          {
            "es": "la inversión",
            "en": "the investment"
          },
          {
            "es": "el presupuesto",
            "en": "the budget"
          },
          {
            "es": "el ingreso",
            "en": "the income"
          },
          {
            "es": "el gasto",
            "en": "the expense"
          },
          {
            "es": "la deuda",
            "en": "the debt"
          },
          {
            "es": "el préstamo",
            "en": "the loan"
          },
          {
            "es": "pedir prestado",
            "en": "to borrow"
          },
          {
            "es": "prestar",
            "en": "to lend"
          },
          {
            "es": "deber (dinero)",
            "en": "to owe"
          },
          {
            "es": "la tarjeta de débito",
            "en": "the debit card"
          },
          {
            "es": "el cajero automático",
            "en": "the ATM"
          },
          {
            "es": "retirar",
            "en": "to withdraw"
          },
          {
            "es": "depositar",
            "en": "to deposit"
          },
          {
            "es": "transferir",
            "en": "to transfer"
          },
          {
            "es": "la factura",
            "en": "the bill / invoice"
          },
          {
            "es": "pagar en efectivo",
            "en": "to pay in cash"
          },
          {
            "es": "a plazos",
            "en": "in installments"
          },
          {
            "es": "el interés",
            "en": "the interest"
          },
          {
            "es": "la tasa de interés",
            "en": "the interest rate"
          },
          {
            "es": "el impuesto",
            "en": "the tax"
          },
          {
            "es": "gratis",
            "en": "free"
          },
          {
            "es": "el valor",
            "en": "the value"
          },
          {
            "es": "valer la pena",
            "en": "to be worth it"
          },
          {
            "es": "el lujo",
            "en": "the luxury"
          },
          {
            "es": "lo esencial",
            "en": "the essential"
          },
          {
            "es": "la nómina",
            "en": "the payroll"
          },
          {
            "es": "el bono",
            "en": "the bonus"
          },
          {
            "es": "la ganancia",
            "en": "the profit / earnings"
          },
          {
            "es": "la pérdida",
            "en": "the loss"
          },
          {
            "es": "rentable",
            "en": "profitable"
          },
          {
            "es": "costoso",
            "en": "costly"
          },
          {
            "es": "económico",
            "en": "affordable / economical"
          },
          {
            "es": "la moneda",
            "en": "the currency"
          },
          {
            "es": "el cambio",
            "en": "the change / exchange rate"
          },
          {
            "es": "cambiar dinero",
            "en": "to exchange money"
          },
          {
            "es": "la cotización",
            "en": "the exchange rate / quote"
          },
          {
            "es": "el patrimonio",
            "en": "the net worth / estate"
          },
          {
            "es": "financiero",
            "en": "financial"
          },
          {
            "es": "el asesor financiero",
            "en": "the financial advisor"
          },
          {
            "es": "planificar",
            "en": "to plan"
          },
          {
            "es": "la meta financiera",
            "en": "the financial goal"
          },
          {
            "es": "el fondo",
            "en": "the fund"
          },
          {
            "es": "la jubilación",
            "en": "retirement"
          },
          {
            "es": "heredar",
            "en": "to inherit"
          }
        ],
        "checkpoint": [
          {
            "type": "matching",
            "instructions": "Empareja cada palabra con su significado.",
            "pairs": [
              {
                "left": "administrar",
                "right": "to manage (money)"
              },
              {
                "left": "invertir",
                "right": "to invest"
              },
              {
                "left": "el préstamo",
                "right": "the loan"
              },
              {
                "left": "la factura",
                "right": "the bill"
              },
              {
                "left": "a plazos",
                "right": "in installments"
              },
              {
                "left": "la tasa de interés",
                "right": "the interest rate"
              },
              {
                "left": "valer la pena",
                "right": "to be worth it"
              },
              {
                "left": "rentable",
                "right": "profitable"
              },
              {
                "left": "la cotización",
                "right": "the exchange rate"
              },
              {
                "left": "la jubilación",
                "right": "retirement"
              }
            ],
            "explanation": "Estas diez palabras cubren el vocabulario financiero cotidiano."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multi-select",
        "question": "¿Qué usos tiene el condicional? (Elige todas las correctas)",
        "options": [
          "Peticiones corteses",
          "Hábitos pasados",
          "Consejos suaves",
          "Situaciones hipotéticas"
        ],
        "correctIndexes": [
          0,
          2,
          3
        ],
        "explanation": "Los hábitos pasados usan el imperfecto, no el condicional."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras.",
        "words": [
          "Yo",
          "que",
          "tú,",
          "ahorraría",
          "más",
          "dinero"
        ],
        "explanation": "Yo que tú + condicional da un consejo.",
        "translation": "If I were you, I would save more money."
      },
      {
        "type": "translate",
        "direction": "es-en",
        "prompt": "Translate this sentence to English.",
        "source": "En tu situación, yo hablaría con el jefe primero.",
        "answer": "In your situation, I would talk to the boss first.",
        "explanation": "Hablaría is the conditional of hablar, used here for advice."
      }
    ]
  },
  {
    "slug": "si-clauses-simple-1",
    "level": "B1",
    "number": 12,
    "title": "Simple If-Clauses: Si + Presente, Part 1 of 2",
    "summary": "Talk about real, likely conditions — if this happens, then that happens.",
    "duration": "6 min",
    "sections": [
      {
        "heading": "La estructura básica",
        "body": [
          "Para condiciones reales o probables, usa: si + presente indicativo, + presente indicativo o futuro (o mandato).",
          "Esta estructura no lleva subjuntivo — es un uso especial donde \"si\" se combina con el indicativo."
        ],
        "examples": [
          {
            "es": "Si llueve, no vamos al parque."
          },
          {
            "es": "Si tienes hambre, come algo."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa la oración.",
            "sentence": "Si ___ (tener, tú) tiempo, llámame.",
            "answer": "tienes",
            "explanation": "La cláusula con \"si\" para condiciones reales usa el presente indicativo: tienes."
          }
        ]
      },
      {
        "heading": "El resultado en futuro",
        "body": [
          "Cuando el resultado es algo que pasará más adelante, se usa el futuro en la segunda cláusula."
        ],
        "examples": [
          {
            "es": "Si estudias, aprobarás el examen."
          },
          {
            "es": "Si no salimos ahora, llegaremos tarde."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Cuál oración es correcta?",
            "options": [
              "Si llueva, me quedaré en casa.",
              "Si llueve, me quedaré en casa.",
              "Si lloverá, me quedo en casa.",
              "Si llovía, me quedo en casa."
            ],
            "correctIndex": 1,
            "explanation": "La cláusula con \"si\" usa presente indicativo (llueve); el resultado puede ir en futuro."
          }
        ]
      },
      {
        "heading": "El resultado como mandato",
        "body": [
          "También puedes terminar la oración con un mandato, para dar una instrucción basada en una condición."
        ],
        "examples": [
          {
            "es": "Si necesitas ayuda, pregúntame."
          },
          {
            "es": "Si ves a Carlos, dile que lo llamé."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa la oración con un mandato.",
            "sentence": "Si tienes dudas, ___ (preguntar, tú).",
            "answer": "pregunta",
            "explanation": "El mandato afirmativo de tú de preguntar es pregunta."
          }
        ]
      },
      {
        "heading": "Si vs. cuando",
        "body": [
          "\"Si\" introduce una condición incierta (puede pasar o no); \"cuando\" con presente indicativo introduce una rutina segura."
        ],
        "examples": [
          {
            "es": "Si voy a España, visitaré Sevilla. (no es seguro)"
          },
          {
            "es": "Cuando voy a España, visito a mi familia. (rutina)"
          }
        ],
        "checkpoint": [
          {
            "type": "multi-select",
            "question": "¿Qué oraciones usan \"si\" correctamente con una condición incierta? (Elige todas las correctas)",
            "options": [
              "Si gano la lotería, viajaré por el mundo.",
              "Cuando gano dinero, lo ahorro.",
              "Si tengo tiempo libre, leo.",
              "Cuando tengo tiempo libre, leo."
            ],
            "correctIndexes": [
              0,
              2
            ],
            "explanation": "\"Cuando\" describe rutinas seguras; \"si\" describe condiciones inciertas o hipotéticas."
          }
        ]
      },
      {
        "heading": "En la práctica",
        "body": [
          "Dos estudiantes hablan sobre sus planes de estudio."
        ],
        "examples": [
          {
            "es": "Si estudiamos juntos esta noche, entenderemos mejor el tema."
          },
          {
            "es": "Buena idea. Si terminamos temprano, podemos ver una película."
          },
          {
            "es": "Perfecto. Y si tienes preguntas, pregúntale al profesor mañana."
          },
          {
            "es": "Sí, si no entiendo algo, se lo preguntaré."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Qué harán si terminan temprano?",
            "options": [
              "Estudiarán más",
              "Verán una película",
              "Irán a dormir",
              "Llamarán al profesor"
            ],
            "correctIndex": 1,
            "explanation": "Dice: \"Si terminamos temprano, podemos ver una película.\""
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "fill-blank",
        "prompt": "Completa la oración.",
        "sentence": "Si ___ (llover), no saldremos.",
        "answer": "llueve",
        "explanation": "La cláusula con \"si\" para condiciones reales usa presente indicativo: llueve."
      },
      {
        "type": "multiple-choice",
        "question": "¿Cuál es correcta?",
        "options": [
          "Si estudias, aprobarás.",
          "Si estudias, apruebes.",
          "Si estudias, aprueba.",
          "Si estudies, aprobarás."
        ],
        "correctIndex": 0,
        "explanation": "Si + presente indicativo, + futuro: si estudias, aprobarás."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa con un mandato.",
        "sentence": "Si tienes frío, ___ (ponerse) un abrigo.",
        "answer": "ponte",
        "explanation": "El mandato afirmativo de tú (reflexivo) de ponerse es ponte."
      }
    ]
  },
  {
    "slug": "si-clauses-simple-2",
    "level": "B1",
    "number": 13,
    "title": "Simple If-Clauses: Si + Presente, Part 2 of 2",
    "summary": "Talk about real, likely conditions — if this happens, then that happens.",
    "duration": "6 min",
    "sections": [
      {
        "heading": "Vocabulario: La educación",
        "body": [
          "Cincuenta palabras sobre la educación y la vida estudiantil."
        ],
        "examples": [
          {
            "es": "la escuela",
            "en": "the school"
          },
          {
            "es": "la universidad",
            "en": "the university"
          },
          {
            "es": "la maestría",
            "en": "the master's degree"
          },
          {
            "es": "la materia",
            "en": "the subject"
          },
          {
            "es": "la asignatura",
            "en": "the course / subject"
          },
          {
            "es": "el semestre",
            "en": "the semester"
          },
          {
            "es": "la matrícula",
            "en": "enrollment / tuition"
          },
          {
            "es": "matricularse",
            "en": "to enroll"
          },
          {
            "es": "aprobar",
            "en": "to pass (a class)"
          },
          {
            "es": "reprobar",
            "en": "to fail (a class)"
          },
          {
            "es": "la nota",
            "en": "the grade"
          },
          {
            "es": "el examen final",
            "en": "the final exam"
          },
          {
            "es": "el examen parcial",
            "en": "the midterm"
          },
          {
            "es": "entregar",
            "en": "to hand in"
          },
          {
            "es": "la tarea",
            "en": "the homework"
          },
          {
            "es": "el ensayo",
            "en": "the essay"
          },
          {
            "es": "la investigación",
            "en": "the research"
          },
          {
            "es": "citar",
            "en": "to cite"
          },
          {
            "es": "la bibliografía",
            "en": "the bibliography"
          },
          {
            "es": "el plagio",
            "en": "plagiarism"
          },
          {
            "es": "la beca",
            "en": "the scholarship"
          },
          {
            "es": "el título",
            "en": "the degree / title"
          },
          {
            "es": "graduarse",
            "en": "to graduate"
          },
          {
            "es": "la graduación",
            "en": "the graduation"
          },
          {
            "es": "el profesor / la profesora",
            "en": "the professor"
          },
          {
            "es": "el compañero de clase",
            "en": "the classmate"
          },
          {
            "es": "el salón de clases",
            "en": "the classroom"
          },
          {
            "es": "la biblioteca",
            "en": "the library"
          },
          {
            "es": "el laboratorio",
            "en": "the lab"
          },
          {
            "es": "la beca completa",
            "en": "the full scholarship"
          },
          {
            "es": "aprender de memoria",
            "en": "to memorize"
          },
          {
            "es": "repasar",
            "en": "to review"
          },
          {
            "es": "el repaso",
            "en": "the review"
          },
          {
            "es": "subrayar",
            "en": "to underline"
          },
          {
            "es": "tomar apuntes",
            "en": "to take notes"
          },
          {
            "es": "el apunte",
            "en": "the note"
          },
          {
            "es": "el horario de clases",
            "en": "the class schedule"
          },
          {
            "es": "el requisito",
            "en": "the requirement"
          },
          {
            "es": "optativo",
            "en": "elective"
          },
          {
            "es": "obligatorio",
            "en": "mandatory"
          },
          {
            "es": "el semestre de intercambio",
            "en": "exchange semester"
          },
          {
            "es": "estudiar en el extranjero",
            "en": "to study abroad"
          },
          {
            "es": "el conocimiento",
            "en": "knowledge"
          },
          {
            "es": "el aprendizaje",
            "en": "learning"
          },
          {
            "es": "el desafío",
            "en": "the challenge"
          },
          {
            "es": "superarse",
            "en": "to better oneself"
          },
          {
            "es": "el esfuerzo",
            "en": "the effort"
          },
          {
            "es": "esforzarse",
            "en": "to make an effort"
          },
          {
            "es": "la disciplina",
            "en": "discipline"
          },
          {
            "es": "el objetivo académico",
            "en": "the academic goal"
          }
        ],
        "checkpoint": [
          {
            "type": "matching",
            "instructions": "Empareja cada palabra con su significado.",
            "pairs": [
              {
                "left": "aprobar",
                "right": "to pass (a class)"
              },
              {
                "left": "reprobar",
                "right": "to fail (a class)"
              },
              {
                "left": "la beca",
                "right": "the scholarship"
              },
              {
                "left": "el plagio",
                "right": "plagiarism"
              },
              {
                "left": "tomar apuntes",
                "right": "to take notes"
              },
              {
                "left": "optativo",
                "right": "elective"
              },
              {
                "left": "el requisito",
                "right": "the requirement"
              },
              {
                "left": "esforzarse",
                "right": "to make an effort"
              },
              {
                "left": "el desafío",
                "right": "the challenge"
              },
              {
                "left": "graduarse",
                "right": "to graduate"
              }
            ],
            "explanation": "Estas diez palabras cubren la vida académica."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multi-select",
        "question": "¿Qué palabra introduce una rutina segura, no una condición incierta?",
        "options": [
          "si",
          "cuando",
          "ojalá",
          "tal vez"
        ],
        "correctIndexes": [
          1
        ],
        "explanation": "\"Cuando\" con presente indicativo describe una rutina; \"si\" describe una condición incierta."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras.",
        "words": [
          "Si",
          "no",
          "entiendes,",
          "pregúntale",
          "al",
          "profesor"
        ],
        "explanation": "Si + presente, + mandato.",
        "translation": "If you don't understand, ask the teacher."
      },
      {
        "type": "multiple-choice",
        "question": "¿Qué tiempo verbal sigue a \"si\" en una condición real?",
        "options": [
          "subjuntivo",
          "presente indicativo",
          "condicional",
          "futuro"
        ],
        "correctIndex": 1,
        "explanation": "Las condiciones reales usan si + presente indicativo."
      }
    ]
  },
  {
    "slug": "present-perfect-1",
    "level": "B1",
    "number": 14,
    "title": "Present Perfect: Pretérito Perfecto, Part 1 of 2",
    "summary": "Talk about what you have done, using haber and the past participle.",
    "duration": "6 min",
    "sections": [
      {
        "heading": "Formación: haber + participio",
        "body": [
          "El pretérito perfecto combina el verbo haber conjugado (he, has, ha, hemos, habéis, han) con el participio pasado del verbo principal.",
          "Los participios regulares terminan en -ado (-ar) o -ido (-er/-ir): hablado, comido, vivido."
        ],
        "examples": [
          {
            "es": "He hablado con ella esta mañana."
          },
          {
            "es": "¿Has comido ya?"
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Conjuga el verbo en pretérito perfecto.",
            "sentence": "Nosotros ___ (vivir) aquí por diez años.",
            "answer": "hemos vivido",
            "explanation": "Haber (hemos) más el participio de vivir (vivido): hemos vivido."
          }
        ]
      },
      {
        "heading": "Participios irregulares",
        "body": [
          "Algunos participios son irregulares y hay que memorizarlos: hacer → hecho, decir → dicho, escribir → escrito, ver → visto, poner → puesto, volver → vuelto, romper → roto, abrir → abierto, morir → muerto, cubrir → cubierto."
        ],
        "examples": [
          {
            "es": "He hecho la tarea."
          },
          {
            "es": "¿Has visto la nueva película?"
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Cuál es el participio de \"escribir\"?",
            "options": [
              "escribido",
              "escrito",
              "escribiendo",
              "escribió"
            ],
            "correctIndex": 1,
            "explanation": "Escribir tiene un participio irregular: escrito."
          }
        ]
      },
      {
        "heading": "Cuándo se usa",
        "body": [
          "El pretérito perfecto conecta una acción pasada con el presente: experiencias de vida, acciones recientes, o algo que continúa siendo relevante ahora.",
          "En España se usa mucho con hoy, esta semana, este mes; en gran parte de Latinoamérica se prefiere el pretérito simple para lo mismo."
        ],
        "examples": [
          {
            "es": "Nunca he estado en Argentina."
          },
          {
            "es": "Esta semana he trabajado mucho."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Conjuga el verbo.",
            "sentence": "¿___ (leer, tú) ese libro alguna vez?",
            "answer": "Has leído",
            "explanation": "Leer tiene un participio con tilde: leído. Con haber (has): has leído."
          }
        ]
      },
      {
        "heading": "Posición de los pronombres",
        "body": [
          "Los pronombres de objeto (directo, indirecto, reflexivo) siempre van antes de \"haber\" — nunca entre haber y el participio."
        ],
        "examples": [
          {
            "es": "Se lo he dicho muchas veces."
          },
          {
            "es": "Ya me he duchado."
          }
        ],
        "checkpoint": [
          {
            "type": "multi-select",
            "question": "¿Cuál oración es correcta? (Elige todas las correctas)",
            "options": [
              "Lo he visto.",
              "He lo visto.",
              "He visto lo.",
              "Ya me he levantado."
            ],
            "correctIndexes": [
              0,
              3
            ],
            "explanation": "El pronombre siempre va antes de haber, nunca entre haber y el participio."
          }
        ]
      },
      {
        "heading": "En la práctica",
        "body": [
          "Una entrevista sobre experiencias de viaje."
        ],
        "examples": [
          {
            "es": "¿Alguna vez has viajado a Sudamérica?"
          },
          {
            "es": "Sí, he estado en Perú y Colombia. He probado platos increíbles."
          },
          {
            "es": "¿Qué es lo más interesante que has visto?"
          },
          {
            "es": "He visto Machu Picchu al amanecer. Nunca he olvidado esa vista."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Qué ha visto la persona al amanecer?",
            "options": [
              "El mar",
              "Machu Picchu",
              "Un volcán",
              "Un desierto"
            ],
            "correctIndex": 1,
            "explanation": "Dice: \"He visto Machu Picchu al amanecer.\""
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "fill-blank",
        "prompt": "Conjuga el verbo.",
        "sentence": "Yo ___ (hacer) todo lo posible.",
        "answer": "he hecho",
        "explanation": "Haber (he) más el participio irregular de hacer (hecho): he hecho."
      },
      {
        "type": "multiple-choice",
        "question": "¿Cuál es el participio de \"poner\"?",
        "options": [
          "ponido",
          "puesto",
          "poniendo",
          "puso"
        ],
        "correctIndex": 1,
        "explanation": "Poner tiene un participio irregular: puesto."
      },
      {
        "type": "fill-blank",
        "prompt": "Conjuga el verbo.",
        "sentence": "¿___ (ver, ustedes) esa serie?",
        "answer": "Han visto",
        "explanation": "Haber (han) más el participio irregular de ver (visto): han visto."
      }
    ]
  },
  {
    "slug": "present-perfect-2",
    "level": "B1",
    "number": 15,
    "title": "Present Perfect: Pretérito Perfecto, Part 2 of 2",
    "summary": "Talk about what you have done, using haber and the past participle.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "Vocabulario: Experiencias de vida",
        "body": [
          "Cincuenta palabras para hablar de experiencias, logros, y \"primeras veces\" — el terreno natural del pretérito perfecto."
        ],
        "examples": [
          {
            "es": "la experiencia",
            "en": "the experience"
          },
          {
            "es": "el logro",
            "en": "the achievement"
          },
          {
            "es": "alcanzar",
            "en": "to attain / reach"
          },
          {
            "es": "jamás",
            "en": "never (emphatic)"
          },
          {
            "es": "alguna vez",
            "en": "ever / at some point"
          },
          {
            "es": "varias veces",
            "en": "several times"
          },
          {
            "es": "por primera vez",
            "en": "for the first time"
          },
          {
            "es": "hasta ahora",
            "en": "so far / until now"
          },
          {
            "es": "hace poco",
            "en": "recently / a while ago"
          },
          {
            "es": "todavía no",
            "en": "not yet"
          },
          {
            "es": "hasta la fecha",
            "en": "to date / so far"
          },
          {
            "es": "superar un miedo",
            "en": "to overcome a fear"
          },
          {
            "es": "cumplir una meta",
            "en": "to achieve a goal"
          },
          {
            "es": "intentar",
            "en": "to attempt / try"
          },
          {
            "es": "atreverse a",
            "en": "to dare to"
          },
          {
            "es": "arriesgarse",
            "en": "to take a risk"
          },
          {
            "es": "el riesgo",
            "en": "the risk"
          },
          {
            "es": "la ventaja",
            "en": "the advantage"
          },
          {
            "es": "aprovechar",
            "en": "to take advantage of"
          },
          {
            "es": "perderse (algo)",
            "en": "to miss out (on something)"
          },
          {
            "es": "descubrir",
            "en": "to discover"
          },
          {
            "es": "el descubrimiento",
            "en": "the discovery"
          },
          {
            "es": "sorprendente",
            "en": "surprising"
          },
          {
            "es": "inolvidable",
            "en": "unforgettable"
          },
          {
            "es": "memorable",
            "en": "memorable"
          },
          {
            "es": "la vivencia",
            "en": "the lived experience"
          },
          {
            "es": "el hito",
            "en": "the milestone"
          },
          {
            "es": "el desafío personal",
            "en": "the personal challenge"
          },
          {
            "es": "crecer como persona",
            "en": "to grow as a person"
          },
          {
            "es": "madurar",
            "en": "to mature"
          },
          {
            "es": "aventurarse",
            "en": "to venture"
          },
          {
            "es": "adentrarse en",
            "en": "to delve into"
          },
          {
            "es": "probar algo nuevo",
            "en": "to try something new"
          },
          {
            "es": "mudarse de país",
            "en": "to move to another country"
          },
          {
            "es": "aprender un idioma",
            "en": "to learn a language"
          },
          {
            "es": "titularse",
            "en": "to graduate / earn a degree"
          },
          {
            "es": "emprender",
            "en": "to start a venture"
          },
          {
            "es": "el emprendimiento",
            "en": "the venture / startup"
          },
          {
            "es": "fracasar",
            "en": "to fail"
          },
          {
            "es": "el fracaso",
            "en": "the failure"
          },
          {
            "es": "levantarse (después de caer)",
            "en": "to pick oneself back up"
          },
          {
            "es": "perseverar",
            "en": "to persevere"
          },
          {
            "es": "la perseverancia",
            "en": "perseverance"
          },
          {
            "es": "valorar",
            "en": "to value / appreciate"
          },
          {
            "es": "agradecido",
            "en": "grateful"
          },
          {
            "es": "reflexionar",
            "en": "to reflect"
          },
          {
            "es": "mirar atrás",
            "en": "to look back"
          },
          {
            "es": "el camino recorrido",
            "en": "the journey / path traveled"
          },
          {
            "es": "dejar huella",
            "en": "to leave a mark"
          },
          {
            "es": "marcar la diferencia",
            "en": "to make a difference"
          }
        ],
        "checkpoint": [
          {
            "type": "matching",
            "instructions": "Empareja cada palabra con su significado.",
            "pairs": [
              {
                "left": "el logro",
                "right": "the achievement"
              },
              {
                "left": "atreverse a",
                "right": "to dare to"
              },
              {
                "left": "arriesgarse",
                "right": "to take a risk"
              },
              {
                "left": "descubrir",
                "right": "to discover"
              },
              {
                "left": "inolvidable",
                "right": "unforgettable"
              },
              {
                "left": "el hito",
                "right": "the milestone"
              },
              {
                "left": "emprender",
                "right": "to start a venture"
              },
              {
                "left": "el fracaso",
                "right": "the failure"
              },
              {
                "left": "perseverar",
                "right": "to persevere"
              },
              {
                "left": "dejar huella",
                "right": "to leave a mark"
              }
            ],
            "explanation": "Estas diez palabras describen momentos y logros importantes en la vida."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multi-select",
        "question": "¿Qué participios son irregulares? (Elige todas las correctas)",
        "options": [
          "hablado",
          "escrito",
          "comido",
          "hecho"
        ],
        "correctIndexes": [
          1,
          3
        ],
        "explanation": "Hablado y comido son regulares; escrito y hecho son irregulares."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras.",
        "words": [
          "Nunca",
          "he",
          "estado",
          "en",
          "Japón"
        ],
        "explanation": "Nunca + haber + participio.",
        "translation": "I have never been to Japan."
      },
      {
        "type": "multiple-choice",
        "question": "¿Dónde va el pronombre con el pretérito perfecto?",
        "options": [
          "Antes de haber",
          "Entre haber y el participio",
          "Después del participio",
          "No se puede usar pronombres"
        ],
        "correctIndex": 0,
        "explanation": "El pronombre siempre va antes de haber: lo he visto."
      }
    ]
  },
  {
    "slug": "past-perfect-1",
    "level": "B1",
    "number": 16,
    "title": "Past Perfect: Pluscuamperfecto, Part 1 of 2",
    "summary": "Describe what had already happened before another moment in the past.",
    "duration": "6 min",
    "sections": [
      {
        "heading": "Formación: haber (imperfecto) + participio",
        "body": [
          "El pluscuamperfecto combina el imperfecto de haber (había, habías, había, habíamos, habíais, habían) con el participio pasado."
        ],
        "examples": [
          {
            "es": "Ya había comido cuando llegaste."
          },
          {
            "es": "Nunca habíamos visitado ese país."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Conjuga el verbo.",
            "sentence": "Cuando llegué, ella ya ___ (salir).",
            "answer": "había salido",
            "explanation": "Había (imperfecto de haber) más el participio de salir (salido): había salido."
          }
        ]
      },
      {
        "heading": "Un pasado antes de otro pasado",
        "body": [
          "El pluscuamperfecto describe una acción que ya había terminado antes de otro momento en el pasado — el \"pasado del pasado\"."
        ],
        "examples": [
          {
            "es": "Cuando el avión aterrizó, ya había oscurecido."
          },
          {
            "es": "Ellos ya se habían ido cuando yo llegué."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Qué acción ocurre primero en esta oración: \"Cuando llegué, ella ya había salido\"?",
            "options": [
              "Llegué",
              "Ella salió",
              "Las dos al mismo tiempo",
              "No está claro"
            ],
            "correctIndex": 1,
            "explanation": "El pluscuamperfecto (había salido) indica que esa acción ocurrió antes de \"llegué\"."
          }
        ]
      },
      {
        "heading": "Con expresiones de tiempo",
        "body": [
          "Frases como ya, todavía no, y nunca antes acompañan frecuentemente al pluscuamperfecto para marcar la secuencia de eventos."
        ],
        "examples": [
          {
            "es": "Todavía no habíamos terminado cuando se fue la luz."
          },
          {
            "es": "Nunca antes había probado la comida tailandesa."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Conjuga el verbo.",
            "sentence": "Antes de mudarnos, nosotros ya ___ (vender) la casa vieja.",
            "answer": "habíamos vendido",
            "explanation": "Habíamos (imperfecto de haber, nosotros) más el participio de vender (vendido)."
          }
        ]
      },
      {
        "heading": "Comparando los tres pasados",
        "body": [
          "Pretérito: acción completa (llegué). Imperfecto: acción de fondo o habitual (llegaba siempre a las cinco). Pluscuamperfecto: acción anterior a otra acción pasada (ya había llegado cuando empezó la reunión)."
        ],
        "examples": [
          {
            "es": "Cuando llegué a la fiesta, ya se habían ido todos."
          }
        ],
        "checkpoint": [
          {
            "type": "multi-select",
            "question": "¿Qué oraciones usan correctamente el pluscuamperfecto? (Elige todas las correctas)",
            "options": [
              "Ya habíamos cenado cuando llamaste.",
              "Cenamos a las ocho.",
              "Nunca había viajado tan lejos.",
              "Cenábamos juntos cada noche."
            ],
            "correctIndexes": [
              0,
              2
            ],
            "explanation": "Las otras dos oraciones usan el pretérito y el imperfecto, no el pluscuamperfecto."
          }
        ]
      },
      {
        "heading": "En la práctica",
        "body": [
          "Alguien cuenta una historia sobre llegar tarde a una boda."
        ],
        "examples": [
          {
            "es": "Cuando llegamos a la iglesia, la ceremonia ya había empezado."
          },
          {
            "es": "¡Qué vergüenza! ¿Por qué llegaron tarde?"
          },
          {
            "es": "Habíamos salido a tiempo, pero el tráfico era terrible."
          },
          {
            "es": "Al menos no se habían casado todavía cuando entraron, ¿no?"
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Qué había pasado ya cuando llegaron?",
            "options": [
              "La boda había terminado",
              "La ceremonia había empezado",
              "Los novios se habían ido",
              "Nadie había llegado"
            ],
            "correctIndex": 1,
            "explanation": "El texto dice: \"la ceremonia ya había empezado.\""
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "fill-blank",
        "prompt": "Conjuga el verbo.",
        "sentence": "Cuando desperté, ya ___ (amanecer).",
        "answer": "había amanecido",
        "explanation": "Había (imperfecto de haber) más el participio de amanecer."
      },
      {
        "type": "multiple-choice",
        "question": "¿Qué describe el pluscuamperfecto?",
        "options": [
          "Una acción habitual",
          "Una acción anterior a otra acción pasada",
          "Una acción futura",
          "Una orden"
        ],
        "correctIndex": 1,
        "explanation": "El pluscuamperfecto describe el \"pasado del pasado\": algo que ya había ocurrido."
      },
      {
        "type": "fill-blank",
        "prompt": "Conjuga el verbo.",
        "sentence": "Ellos ya ___ (irse) cuando llamé.",
        "answer": "se habían ido",
        "explanation": "Se habían ido: reflexivo + habían (imperfecto de haber) + ido (participio irregular de ir)."
      }
    ]
  },
  {
    "slug": "past-perfect-2",
    "level": "B1",
    "number": 17,
    "title": "Past Perfect: Pluscuamperfecto, Part 2 of 2",
    "summary": "Describe what had already happened before another moment in the past.",
    "duration": "6 min",
    "sections": [
      {
        "heading": "Vocabulario: Noticias y sucesos",
        "body": [
          "Cincuenta palabras para hablar de noticias y eventos — útiles para narrar secuencias con el pluscuamperfecto."
        ],
        "examples": [
          {
            "es": "la noticia",
            "en": "the news item"
          },
          {
            "es": "el suceso",
            "en": "the event / incident"
          },
          {
            "es": "ocurrir",
            "en": "to occur"
          },
          {
            "es": "el acontecimiento",
            "en": "the happening / event"
          },
          {
            "es": "informar",
            "en": "to report"
          },
          {
            "es": "el reportaje",
            "en": "the report / news story"
          },
          {
            "es": "el periodista",
            "en": "the journalist"
          },
          {
            "es": "la fuente",
            "en": "the source"
          },
          {
            "es": "investigar",
            "en": "to investigate"
          },
          {
            "es": "el comunicado",
            "en": "the press release / statement"
          },
          {
            "es": "corroborar",
            "en": "to corroborate"
          },
          {
            "es": "rectificar",
            "en": "to retract / correct"
          },
          {
            "es": "anunciar",
            "en": "to announce"
          },
          {
            "es": "el anuncio",
            "en": "the announcement"
          },
          {
            "es": "el titular",
            "en": "the headline"
          },
          {
            "es": "la portada",
            "en": "the front page"
          },
          {
            "es": "difundir",
            "en": "to spread / broadcast"
          },
          {
            "es": "el rumor",
            "en": "the rumor"
          },
          {
            "es": "desatar",
            "en": "to trigger / unleash"
          },
          {
            "es": "la polémica",
            "en": "the controversy"
          },
          {
            "es": "el escándalo",
            "en": "the scandal"
          },
          {
            "es": "estallar",
            "en": "to break out / erupt"
          },
          {
            "es": "la crisis",
            "en": "the crisis"
          },
          {
            "es": "la manifestación",
            "en": "the protest / demonstration"
          },
          {
            "es": "protestar",
            "en": "to protest"
          },
          {
            "es": "el conflicto",
            "en": "the conflict"
          },
          {
            "es": "resolver",
            "en": "to resolve"
          },
          {
            "es": "la solución",
            "en": "the solution"
          },
          {
            "es": "el gobierno",
            "en": "the government"
          },
          {
            "es": "la política",
            "en": "politics / policy"
          },
          {
            "es": "la elección",
            "en": "the election"
          },
          {
            "es": "votar",
            "en": "to vote"
          },
          {
            "es": "el candidato",
            "en": "the candidate"
          },
          {
            "es": "ganar las elecciones",
            "en": "to win the election"
          },
          {
            "es": "la ley",
            "en": "the law"
          },
          {
            "es": "aprobar una ley",
            "en": "to pass a law"
          },
          {
            "es": "el juicio",
            "en": "the trial"
          },
          {
            "es": "el testigo",
            "en": "the witness"
          },
          {
            "es": "declarar",
            "en": "to state / testify"
          },
          {
            "es": "el veredicto",
            "en": "the verdict"
          },
          {
            "es": "la sentencia",
            "en": "the sentence / ruling"
          },
          {
            "es": "el desastre natural",
            "en": "the natural disaster"
          },
          {
            "es": "el terremoto",
            "en": "the earthquake"
          },
          {
            "es": "evacuar",
            "en": "to evacuate"
          },
          {
            "es": "los daños",
            "en": "the damages"
          },
          {
            "es": "la reconstrucción",
            "en": "the reconstruction"
          },
          {
            "es": "la ayuda humanitaria",
            "en": "humanitarian aid"
          },
          {
            "es": "donar",
            "en": "to donate"
          },
          {
            "es": "la donación",
            "en": "the donation"
          },
          {
            "es": "la portavoz",
            "en": "the spokesperson"
          }
        ],
        "checkpoint": [
          {
            "type": "matching",
            "instructions": "Empareja cada palabra con su significado.",
            "pairs": [
              {
                "left": "el suceso",
                "right": "the event"
              },
              {
                "left": "rectificar",
                "right": "to retract / correct"
              },
              {
                "left": "el titular",
                "right": "the headline"
              },
              {
                "left": "desatar",
                "right": "to trigger"
              },
              {
                "left": "la polémica",
                "right": "the controversy"
              },
              {
                "left": "estallar",
                "right": "to break out"
              },
              {
                "left": "la manifestación",
                "right": "the protest"
              },
              {
                "left": "aprobar una ley",
                "right": "to pass a law"
              },
              {
                "left": "el veredicto",
                "right": "the verdict"
              },
              {
                "left": "evacuar",
                "right": "to evacuate"
              }
            ],
            "explanation": "Estas diez palabras aparecen constantemente en las noticias."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multi-select",
        "question": "¿Qué palabras acompañan frecuentemente al pluscuamperfecto? (Elige todas las correctas)",
        "options": [
          "ya",
          "nunca antes",
          "mañana",
          "todavía no"
        ],
        "correctIndexes": [
          0,
          1,
          3
        ],
        "explanation": "\"Mañana\" es una expresión de futuro, no de pluscuamperfecto."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras.",
        "words": [
          "Ya",
          "habíamos",
          "salido",
          "cuando",
          "empezó",
          "a",
          "llover"
        ],
        "explanation": "Pluscuamperfecto para la acción anterior; pretérito para la interrupción.",
        "translation": "We had already left when it started to rain."
      },
      {
        "type": "multiple-choice",
        "question": "¿Qué combinación forma el pluscuamperfecto?",
        "options": [
          "presente de haber + participio",
          "imperfecto de haber + participio",
          "futuro de haber + participio",
          "condicional de haber + participio"
        ],
        "correctIndex": 1,
        "explanation": "El pluscuamperfecto usa el imperfecto de haber: había, habías, había..."
      }
    ]
  },
  {
    "slug": "relative-pronouns-1",
    "level": "B1",
    "number": 18,
    "title": "Relative Pronouns: Que, Quien, El Que, Lo Que, Part 1 of 2",
    "summary": "Combine two ideas into one elegant sentence with que, quien, el que/la que, and lo que.",
    "duration": "6 min",
    "sections": [
      {
        "heading": "Que: el pronombre relativo universal",
        "body": [
          "\"Que\" se refiere a personas o cosas y es, por mucho, el pronombre relativo más común. Conecta una cláusula con información adicional sobre el sustantivo anterior."
        ],
        "examples": [
          {
            "es": "El libro que compré es excelente."
          },
          {
            "es": "La mujer que trabaja aquí es mi tía."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa la oración con el pronombre correcto.",
            "sentence": "Esta es la casa ___ compramos el año pasado.",
            "answer": "que",
            "explanation": "\"Que\" conecta la cláusula con \"la casa\", el sustantivo anterior."
          }
        ]
      },
      {
        "heading": "Quien / quienes",
        "body": [
          "\"Quien\" (singular) y \"quienes\" (plural) se refieren solo a personas, y se usan típicamente después de una preposición o entre comas."
        ],
        "examples": [
          {
            "es": "Mi hermano, quien vive en Chile, viene de visita."
          },
          {
            "es": "La persona con quien hablé era muy amable."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Cuál es correcto?",
            "options": [
              "El libro quien leí es interesante.",
              "La chica quien conocí es simpática.",
              "La chica con quien hablé es simpática.",
              "La casa quien compré es grande."
            ],
            "correctIndex": 2,
            "explanation": "\"Quien\" se usa solo para personas, frecuentemente después de una preposición: con quien."
          }
        ]
      },
      {
        "heading": "El que / la que / los que / las que",
        "body": [
          "Estas formas concuerdan en género y número con el sustantivo, y son útiles para dar énfasis o evitar ambigüedad, especialmente después de preposiciones."
        ],
        "examples": [
          {
            "es": "La chica de la que te hablé llegó ayer."
          },
          {
            "es": "Los libros que compré, los que están en la mesa, son míos."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa la oración.",
            "sentence": "Esa es la razón por ___ me fui.",
            "answer": "la que",
            "explanation": "\"Por la que\" concuerda con \"razón\", femenino singular."
          }
        ]
      },
      {
        "heading": "Lo que: ideas, no sustantivos específicos",
        "body": [
          "\"Lo que\" se refiere a una idea abstracta o a algo no mencionado directamente — equivale a \"what\" o \"that which\" en inglés."
        ],
        "examples": [
          {
            "es": "No entiendo lo que dices."
          },
          {
            "es": "Lo que más me gusta de aquí es la comida."
          }
        ],
        "checkpoint": [
          {
            "type": "multi-select",
            "question": "¿En qué oraciones se usa \"lo que\" correctamente? (Elige todas las correctas)",
            "options": [
              "Lo que necesito es tiempo.",
              "El libro lo que leí es bueno.",
              "No sé lo que pasó.",
              "La mujer lo que vive aquí es mi vecina."
            ],
            "correctIndexes": [
              0,
              2
            ],
            "explanation": "\"Lo que\" se refiere a ideas abstractas, no a sustantivos específicos como \"libro\" o \"mujer\" — ahí se usa \"que\"."
          }
        ]
      },
      {
        "heading": "En la práctica",
        "body": [
          "Una descripción de un vecindario, usando varios pronombres relativos."
        ],
        "examples": [
          {
            "es": "El barrio en el que vivo es muy tranquilo."
          },
          {
            "es": "La panadería que está en la esquina tiene el mejor pan."
          },
          {
            "es": "Mi vecina, quien es maestra, siempre me ayuda con el jardín."
          },
          {
            "es": "Lo que más aprecio de este lugar es la comunidad."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Qué aprecia más la persona de su barrio?",
            "options": [
              "El pan",
              "La comunidad",
              "El jardín",
              "La escuela"
            ],
            "correctIndex": 1,
            "explanation": "Dice: \"Lo que más aprecio de este lugar es la comunidad.\""
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "fill-blank",
        "prompt": "Completa con el pronombre correcto.",
        "sentence": "El restaurante ___ recomendaste está cerrado hoy.",
        "answer": "que",
        "explanation": "\"Que\" conecta con \"restaurante\", el sustantivo anterior."
      },
      {
        "type": "multiple-choice",
        "question": "¿Cuál es correcto?",
        "options": [
          "Mi jefe, que es de México, habla tres idiomas.",
          "Mi jefe, quien es de México, habla tres idiomas.",
          "Las dos son correctas.",
          "Ninguna es correcta."
        ],
        "correctIndex": 2,
        "explanation": "\"Que\" y \"quien\" pueden referirse a personas entre comas; ambas son correctas aquí."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la oración.",
        "sentence": "___ me sorprende es su generosidad.",
        "answer": "Lo que",
        "explanation": "\"Lo que\" introduce una idea abstracta, no un sustantivo específico."
      }
    ]
  },
  {
    "slug": "relative-pronouns-2",
    "level": "B1",
    "number": 19,
    "title": "Relative Pronouns: Que, Quien, El Que, Lo Que, Part 2 of 2",
    "summary": "Combine two ideas into one elegant sentence with que, quien, el que/la que, and lo que.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "Vocabulario: La ciudad y las direcciones",
        "body": [
          "Cincuenta palabras para describir lugares y dar direcciones — terreno natural para los pronombres relativos."
        ],
        "examples": [
          {
            "es": "el distrito",
            "en": "the district"
          },
          {
            "es": "la cuadra",
            "en": "the block"
          },
          {
            "es": "la esquina",
            "en": "the corner"
          },
          {
            "es": "la avenida",
            "en": "the avenue"
          },
          {
            "es": "el semáforo",
            "en": "the traffic light"
          },
          {
            "es": "el cruce",
            "en": "the crossing / intersection"
          },
          {
            "es": "la acera",
            "en": "the sidewalk"
          },
          {
            "es": "el edificio",
            "en": "the building"
          },
          {
            "es": "el rascacielos",
            "en": "the skyscraper"
          },
          {
            "es": "la plaza",
            "en": "the square"
          },
          {
            "es": "el parque",
            "en": "the park"
          },
          {
            "es": "el ayuntamiento",
            "en": "the city hall"
          },
          {
            "es": "la estación",
            "en": "the station"
          },
          {
            "es": "el metro",
            "en": "the subway"
          },
          {
            "es": "la parada de autobús",
            "en": "the bus stop"
          },
          {
            "es": "cruzar",
            "en": "to cross"
          },
          {
            "es": "doblar",
            "en": "to turn"
          },
          {
            "es": "seguir derecho",
            "en": "to go straight"
          },
          {
            "es": "a la izquierda",
            "en": "to the left"
          },
          {
            "es": "a la derecha",
            "en": "to the right"
          },
          {
            "es": "cerca de",
            "en": "near"
          },
          {
            "es": "distante de",
            "en": "distant from"
          },
          {
            "es": "al lado de",
            "en": "next to"
          },
          {
            "es": "enfrente de",
            "en": "across from"
          },
          {
            "es": "al fondo de",
            "en": "at the back / end of"
          },
          {
            "es": "en medio de",
            "en": "in the middle of"
          },
          {
            "es": "la cuadra siguiente",
            "en": "the next block"
          },
          {
            "es": "perderse",
            "en": "to get lost"
          },
          {
            "es": "orientarse",
            "en": "to get one's bearings"
          },
          {
            "es": "el plano",
            "en": "the (street) map"
          },
          {
            "es": "las señales de tráfico",
            "en": "the traffic signs"
          },
          {
            "es": "el peatón",
            "en": "the pedestrian"
          },
          {
            "es": "el embotellamiento",
            "en": "the traffic jam"
          },
          {
            "es": "el estacionamiento",
            "en": "the parking lot"
          },
          {
            "es": "estacionar",
            "en": "to park"
          },
          {
            "es": "la multa",
            "en": "the fine / ticket"
          },
          {
            "es": "el vecindario",
            "en": "the neighborhood"
          },
          {
            "es": "residencial",
            "en": "residential"
          },
          {
            "es": "comercial",
            "en": "commercial"
          },
          {
            "es": "las afueras",
            "en": "the outskirts"
          },
          {
            "es": "el centro histórico",
            "en": "the historic center"
          },
          {
            "es": "la muchedumbre",
            "en": "the crowd"
          },
          {
            "es": "concurrido",
            "en": "crowded / busy"
          },
          {
            "es": "tranquilo",
            "en": "quiet"
          },
          {
            "es": "seguro",
            "en": "safe"
          },
          {
            "es": "peligroso",
            "en": "dangerous"
          },
          {
            "es": "la comunidad",
            "en": "the community"
          },
          {
            "es": "el vecino",
            "en": "the neighbor"
          },
          {
            "es": "mudarse a",
            "en": "to move to"
          },
          {
            "es": "instalarse",
            "en": "to settle in"
          }
        ],
        "checkpoint": [
          {
            "type": "matching",
            "instructions": "Empareja cada palabra con su significado.",
            "pairs": [
              {
                "left": "la cuadra",
                "right": "the block"
              },
              {
                "left": "el cruce",
                "right": "the intersection"
              },
              {
                "left": "doblar",
                "right": "to turn"
              },
              {
                "left": "enfrente de",
                "right": "across from"
              },
              {
                "left": "perderse",
                "right": "to get lost"
              },
              {
                "left": "el embotellamiento",
                "right": "the traffic jam"
              },
              {
                "left": "las afueras",
                "right": "the outskirts"
              },
              {
                "left": "concurrido",
                "right": "crowded"
              },
              {
                "left": "instalarse",
                "right": "to settle in"
              },
              {
                "left": "el peatón",
                "right": "the pedestrian"
              }
            ],
            "explanation": "Estas diez palabras ayudan a describir un barrio y dar direcciones."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multi-select",
        "question": "¿Qué pronombres se refieren solo a personas? (Elige todas las correctas)",
        "options": [
          "que",
          "quien",
          "quienes",
          "lo que"
        ],
        "correctIndexes": [
          1,
          2
        ],
        "explanation": "\"Que\" y \"lo que\" pueden referirse a cosas; quien/quienes son exclusivos para personas."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras.",
        "words": [
          "La",
          "ciudad",
          "en",
          "la",
          "que",
          "nací",
          "es",
          "pequeña"
        ],
        "explanation": "El pronombre relativo va después de la preposición.",
        "translation": "The city where I was born is small."
      },
      {
        "type": "multiple-choice",
        "question": "¿Qué forma concuerda con \"las razones\"?",
        "options": [
          "el que",
          "la que",
          "los que",
          "las que"
        ],
        "correctIndex": 3,
        "explanation": "Las que concuerda en género y número con \"las razones\", femenino plural."
      }
    ]
  },
  {
    "slug": "relative-pronouns-mastery-check",
    "level": "B1",
    "number": 20,
    "title": "Mastery Check: Relative Pronouns",
    "summary": "A focused review test on choosing between que, quien, el que/la que, and lo que in context.",
    "duration": "10 min",
    "sections": [],
    "exercises": [
      {
        "type": "fill-blank",
        "prompt": "Completa con el pronombre correcto.",
        "sentence": "La empresa ___ contrató a mi hermano es muy grande.",
        "answer": "que",
        "explanation": "\"Que\" se refiere a \"la empresa\" (una cosa) sin necesidad de preposición."
      },
      {
        "type": "multiple-choice",
        "question": "¿Cuál es correcto?",
        "options": [
          "El doctor a que consulté me recomendó descansar.",
          "El doctor a quien consulté me recomendó descansar.",
          "El doctor a lo que consulté me recomendó descansar.",
          "El doctor a los que consulté me recomendó descansar."
        ],
        "correctIndex": 1,
        "explanation": "Después de una preposición, cuando el antecedente es una persona, se usa \"quien\"; \"que\" no se usa directamente tras preposición con personas, \"lo que\" es para ideas abstractas, y \"los que\" no concuerda en número con \"el doctor\" (singular)."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa con la forma correcta (el que/la que/los que/las que).",
        "sentence": "Estas son las herramientas con ___ reparamos el motor.",
        "answer": "las que",
        "explanation": "\"Las que\" concuerda en género y número con \"herramientas\" (femenino plural) y sigue a la preposición \"con\"."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la oración.",
        "sentence": "___ realmente importa es la salud, no el dinero.",
        "answer": "Lo que",
        "explanation": "\"Lo que\" introduce una idea abstracta (lo que importa), no un sustantivo específico."
      },
      {
        "type": "multiple-choice",
        "question": "¿Cuál oración distingue correctamente entre dos objetos con \"el que\"?",
        "options": [
          "Compré dos coches: el que es rojo y el que es azul.",
          "Compré dos coches: que es rojo y que es azul.",
          "Compré dos coches: quien es rojo y quien es azul.",
          "Compré dos coches: lo que es rojo y lo que es azul."
        ],
        "correctIndex": 0,
        "explanation": "\"El que\" (y sus formas) se usan para distinguir entre varias opciones o dar énfasis. \"Que\" solo no puede iniciar una cláusula así, \"quien\" es solo para personas, y \"lo que\" es para ideas abstractas, no para coches."
      },
      {
        "type": "multi-select",
        "question": "¿En qué oraciones se usa \"quien/quienes\" correctamente? (Elige todas las correctas)",
        "options": [
          "Los estudiantes, quienes llegaron tarde, se disculparon.",
          "El coche quien compré es nuevo.",
          "La profesora con quien estudié el año pasado ahora vive en España.",
          "La ciudad quien visitamos es hermosa."
        ],
        "correctIndexes": [
          0,
          2
        ],
        "explanation": "\"Quien/quienes\" solo se refiere a personas (los estudiantes, la profesora); \"el coche\" y \"la ciudad\" son cosas y necesitan \"que\"."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Translate to Spanish.",
        "source": "The house that we bought last year needs repairs.",
        "answer": "La casa que compramos el año pasado necesita reparaciones.",
        "altAnswers": [
          "La casa que compramos el año pasado necesita reparación."
        ],
        "explanation": "\"Que\" se refiere a \"la casa\" (una cosa) y no necesita preposición aquí."
      },
      {
        "type": "translate",
        "direction": "es-en",
        "prompt": "Translate to English.",
        "source": "Lo que me molesta es la impuntualidad.",
        "answer": "What bothers me is unpunctuality.",
        "altAnswers": [
          "What annoys me is lateness.",
          "What bothers me is people being late."
        ],
        "explanation": "\"Lo que\" se refiere a una idea abstracta (\"lo que me molesta\"), no a un sustantivo específico."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras.",
        "words": [
          "La",
          "razón",
          "por",
          "la",
          "que",
          "renuncié",
          "es",
          "personal"
        ],
        "translation": "The reason why I resigned is personal.",
        "explanation": "\"Por la que\" concuerda con \"razón\" (femenino singular) y sigue a la preposición \"por\"."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras.",
        "words": [
          "Mi",
          "vecino",
          "quien",
          "es",
          "abogado",
          "me",
          "ayudó",
          "con",
          "el",
          "contrato"
        ],
        "translation": "My neighbor, who is a lawyer, helped me with the contract.",
        "explanation": "\"Quien\" se usa entre comas para referirse a una persona (mi vecino)."
      },
      {
        "type": "matching",
        "instructions": "Empareja cada palabra con su significado.",
        "pairs": [
          {
            "left": "el rascacielos",
            "right": "the skyscraper"
          },
          {
            "left": "el ayuntamiento",
            "right": "the city hall"
          },
          {
            "left": "la parada de autobús",
            "right": "the bus stop"
          },
          {
            "left": "seguir derecho",
            "right": "to go straight"
          },
          {
            "left": "a la izquierda",
            "right": "to the left"
          },
          {
            "left": "el estacionamiento",
            "right": "the parking lot"
          },
          {
            "left": "la multa",
            "right": "the fine / ticket"
          },
          {
            "left": "residencial",
            "right": "residential"
          },
          {
            "left": "el centro histórico",
            "right": "the historic center"
          },
          {
            "left": "mudarse a",
            "right": "to move to"
          }
        ],
        "explanation": "Estas diez palabras del vocabulario de la ciudad y las direcciones aparecen a menudo junto con los pronombres relativos."
      },
      {
        "type": "matching",
        "instructions": "Empareja cada situación con el pronombre relativo que debe usarse.",
        "pairs": [
          {
            "left": "Referirse a una persona después de una preposición",
            "right": "quien / quienes"
          },
          {
            "left": "Referirse a una idea abstracta, no a un sustantivo específico",
            "right": "lo que"
          },
          {
            "left": "Referirse a personas o cosas sin preposición (el caso más común)",
            "right": "que"
          },
          {
            "left": "Dar énfasis o evitar ambigüedad, concordando en género y número",
            "right": "el que / la que / los que / las que"
          }
        ],
        "explanation": "Cada pronombre relativo tiene un uso principal distinto en español, aunque a veces se solapan."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa con la forma correcta (el que/la que/los que/las que).",
        "sentence": "De los dos abrigos, compré ___ es más barato.",
        "answer": "el que",
        "explanation": "\"El que\" concuerda con \"abrigo\" (masculino singular) y distingue entre las dos opciones mencionadas."
      },
      {
        "type": "multiple-choice",
        "question": "¿Cuál oración es correcta?",
        "options": [
          "La empresa para que trabajo tiene oficinas en Madrid.",
          "La empresa para la que trabajo tiene oficinas en Madrid.",
          "La empresa para quien trabajo tiene oficinas en Madrid.",
          "La empresa para lo que trabajo tiene oficinas en Madrid."
        ],
        "correctIndex": 1,
        "explanation": "Después de preposiciones con cosas, se prefiere \"el/la que\" en vez de \"que\" solo; \"quien\" es solo para personas y \"lo que\" es para ideas abstractas, no para una empresa."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Translate to Spanish.",
        "source": "The colleague with whom I traveled speaks four languages.",
        "answer": "La colega con la que viajé habla cuatro idiomas.",
        "altAnswers": [
          "La colega con quien viajé habla cuatro idiomas."
        ],
        "explanation": "Con personas después de preposición, se puede usar \"quien\" o \"la que\"; ambas son correctas aquí."
      },
      {
        "type": "multi-select",
        "question": "¿Qué oraciones son gramaticalmente correctas? (Elige todas las correctas)",
        "options": [
          "No entiendo lo que quieres decir.",
          "El hombre lo que conocí ayer es mi tío.",
          "Los que trabajan duro merecen éxito.",
          "La mujer que conocí ayer es mi tía."
        ],
        "correctIndexes": [
          0,
          2,
          3
        ],
        "explanation": "\"Lo que\" no puede referirse a un sustantivo específico como \"el hombre\" — ahí se necesita \"que\". Las otras tres oraciones usan los pronombres correctamente."
      },
      {
        "type": "multiple-choice",
        "question": "¿Qué pronombre se usa para introducir una idea sin sustantivo específico, equivalente a \"what\" en inglés?",
        "options": [
          "que",
          "quien",
          "lo que",
          "el que"
        ],
        "correctIndex": 2,
        "explanation": "\"Lo que\" equivale a \"what\"/\"that which\" cuando no hay un sustantivo específico al que referirse."
      }
    ]
  },
  {
    "slug": "passive-voice-se-1",
    "level": "B1",
    "number": 21,
    "title": "Passive Voice & Impersonal Se, Part 1 of 2",
    "summary": "Describe actions without naming who did them — the way signs, news, and reports usually do.",
    "duration": "6 min",
    "sections": [
      {
        "heading": "La voz pasiva con ser",
        "body": [
          "Ser + participio pasado + por (agente) forma la voz pasiva formal: el objeto de la acción se convierte en el sujeto de la oración.",
          "El participio concuerda en género y número con el sujeto."
        ],
        "examples": [
          {
            "es": "La novela fue escrita por Gabriel García Márquez."
          },
          {
            "es": "Los documentos fueron firmados ayer."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa la oración en voz pasiva.",
            "sentence": "El edificio ___ (construir) en 1920.",
            "answer": "fue construido",
            "explanation": "Ser (fue) más el participio de construir (construido), concordando con \"el edificio\", masculino singular."
          }
        ]
      },
      {
        "heading": "El se pasivo",
        "body": [
          "En español hablado, la voz pasiva con ser es poco común. En su lugar, se usa \"se\" + verbo en tercera persona, concordando con el sustantivo."
        ],
        "examples": [
          {
            "es": "Se venden casas en esta calle."
          },
          {
            "es": "Se habla español en toda Latinoamérica."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Cuál es correcto?",
            "options": [
              "Se vende libros aquí.",
              "Se venden libros aquí.",
              "Se vendes libros aquí.",
              "Son vendidos libros aquí."
            ],
            "correctIndex": 1,
            "explanation": "El verbo concuerda con \"libros\" (plural): se venden."
          }
        ]
      },
      {
        "heading": "El se impersonal",
        "body": [
          "Cuando no hay un sujeto claro y la acción es general, se usa \"se\" + verbo en tercera persona singular, sin importar el número: equivale a \"you/one/people\" en inglés."
        ],
        "examples": [
          {
            "es": "Se dice que va a llover mañana."
          },
          {
            "es": "Aquí se come muy bien."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa la oración.",
            "sentence": "___ (poder) pagar con tarjeta o en efectivo.",
            "answer": "Se puede",
            "explanation": "El se impersonal usa la tercera persona singular: se puede."
          }
        ]
      },
      {
        "heading": "Se pasivo vs. se impersonal",
        "body": [
          "La diferencia clave: en el se pasivo, hay un sustantivo que recibe la acción y determina el número del verbo (se venden casas). En el se impersonal, no hay un sustantivo así, y el verbo siempre queda en singular (se vive bien aquí)."
        ],
        "examples": [
          {
            "es": "Se venden casas. (pasivo, plural)"
          },
          {
            "es": "Se vive bien aquí. (impersonal, sin sustantivo)"
          }
        ],
        "checkpoint": [
          {
            "type": "multi-select",
            "question": "¿Cuáles son ejemplos del se impersonal? (Elige todas las correctas)",
            "options": [
              "Se trabaja mucho en esta empresa.",
              "Se necesitan voluntarios.",
              "Se dice que es cierto.",
              "Se venden boletos aquí."
            ],
            "correctIndexes": [
              0,
              2
            ],
            "explanation": "\"Se necesitan voluntarios\" y \"se venden boletos\" son se pasivo (concuerdan con el sustantivo plural)."
          }
        ]
      },
      {
        "heading": "En la práctica",
        "body": [
          "Anuncios y letreros típicos que usan estas estructuras."
        ],
        "examples": [
          {
            "es": "Se alquila apartamento. Se requiere depósito."
          },
          {
            "es": "Se prohíbe fumar dentro del edificio."
          },
          {
            "es": "Aquí se habla inglés y español."
          },
          {
            "es": "Este museo fue fundado en 1950."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Qué se prohíbe dentro del edificio?",
            "options": [
              "Comer",
              "Fumar",
              "Hablar",
              "Grabar"
            ],
            "correctIndex": 1,
            "explanation": "El letrero dice: \"Se prohíbe fumar dentro del edificio.\""
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "fill-blank",
        "prompt": "Completa en voz pasiva.",
        "sentence": "La carta ___ (enviar) ayer.",
        "answer": "fue enviada",
        "explanation": "Ser (fue) más el participio de enviar (enviada), concordando con \"la carta\"."
      },
      {
        "type": "multiple-choice",
        "question": "¿Cuál usa correctamente el se impersonal?",
        "options": [
          "Se venden casas.",
          "Se vive bien en esta ciudad.",
          "Se necesitan empleados.",
          "Se hablan idiomas."
        ],
        "correctIndex": 1,
        "explanation": "\"Se vive bien\" no tiene un sustantivo que determine el número: es se impersonal, siempre singular."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la oración.",
        "sentence": "___ (prohibir) estacionar aquí.",
        "answer": "Se prohíbe",
        "explanation": "El se impersonal usa la tercera persona singular: se prohíbe."
      }
    ]
  },
  {
    "slug": "passive-voice-se-2",
    "level": "B1",
    "number": 22,
    "title": "Passive Voice & Impersonal Se, Part 2 of 2",
    "summary": "Describe actions without naming who did them — the way signs, news, and reports usually do.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "Vocabulario: Negocios y el trabajo",
        "body": [
          "Cincuenta palabras del mundo empresarial — común en anuncios y reportes que usan la voz pasiva y el se impersonal."
        ],
        "examples": [
          {
            "es": "la empresa",
            "en": "the company"
          },
          {
            "es": "el negocio",
            "en": "the business"
          },
          {
            "es": "la junta directiva",
            "en": "the board of directors"
          },
          {
            "es": "el socio",
            "en": "the partner"
          },
          {
            "es": "fundar",
            "en": "to found"
          },
          {
            "es": "el fundador",
            "en": "the founder"
          },
          {
            "es": "la sede",
            "en": "the headquarters"
          },
          {
            "es": "la sucursal",
            "en": "the branch"
          },
          {
            "es": "reclutar",
            "en": "to recruit"
          },
          {
            "es": "despedir",
            "en": "to fire / lay off"
          },
          {
            "es": "el empleado",
            "en": "the employee"
          },
          {
            "es": "el empleador",
            "en": "the employer"
          },
          {
            "es": "el contrato",
            "en": "the contract"
          },
          {
            "es": "firmar",
            "en": "to sign"
          },
          {
            "es": "el acuerdo",
            "en": "the agreement"
          },
          {
            "es": "negociar",
            "en": "to negotiate"
          },
          {
            "es": "la negociación",
            "en": "the negotiation"
          },
          {
            "es": "la propuesta",
            "en": "the proposal"
          },
          {
            "es": "proponer",
            "en": "to propose"
          },
          {
            "es": "aprobar (una propuesta)",
            "en": "to approve (a proposal)"
          },
          {
            "es": "rechazar",
            "en": "to reject"
          },
          {
            "es": "la fusión",
            "en": "the merger"
          },
          {
            "es": "fusionarse",
            "en": "to merge"
          },
          {
            "es": "la competencia",
            "en": "the competition"
          },
          {
            "es": "competir",
            "en": "to compete"
          },
          {
            "es": "el mercado",
            "en": "the market"
          },
          {
            "es": "la demanda",
            "en": "the demand"
          },
          {
            "es": "la vacante",
            "en": "the job vacancy"
          },
          {
            "es": "el cliente potencial",
            "en": "the potential customer"
          },
          {
            "es": "la estrategia",
            "en": "the strategy"
          },
          {
            "es": "implementar",
            "en": "to implement"
          },
          {
            "es": "el plazo",
            "en": "the deadline"
          },
          {
            "es": "cumplir un plazo",
            "en": "to meet a deadline"
          },
          {
            "es": "el informe",
            "en": "the report"
          },
          {
            "es": "presentar un informe",
            "en": "to present a report"
          },
          {
            "es": "la ganancia neta",
            "en": "the net profit"
          },
          {
            "es": "la pérdida neta",
            "en": "the net loss"
          },
          {
            "es": "el crecimiento",
            "en": "the growth"
          },
          {
            "es": "crecer (una empresa)",
            "en": "to grow (a company)"
          },
          {
            "es": "la expansión",
            "en": "the expansion"
          },
          {
            "es": "expandirse",
            "en": "to expand"
          },
          {
            "es": "la sucursal internacional",
            "en": "the international branch"
          },
          {
            "es": "el mercado global",
            "en": "the global market"
          },
          {
            "es": "la reputación",
            "en": "the reputation"
          },
          {
            "es": "posicionar",
            "en": "to position (a brand)"
          },
          {
            "es": "el departamento",
            "en": "the department"
          },
          {
            "es": "el recurso humano",
            "en": "human resources"
          },
          {
            "es": "la política de la empresa",
            "en": "company policy"
          },
          {
            "es": "el reglamento",
            "en": "the regulation"
          },
          {
            "es": "cumplir con",
            "en": "to comply with"
          }
        ],
        "checkpoint": [
          {
            "type": "matching",
            "instructions": "Empareja cada palabra con su significado.",
            "pairs": [
              {
                "left": "fundar",
                "right": "to found"
              },
              {
                "left": "despedir",
                "right": "to fire"
              },
              {
                "left": "la negociación",
                "right": "the negotiation"
              },
              {
                "left": "la fusión",
                "right": "the merger"
              },
              {
                "left": "cumplir un plazo",
                "right": "to meet a deadline"
              },
              {
                "left": "la ganancia neta",
                "right": "the net profit"
              },
              {
                "left": "expandirse",
                "right": "to expand"
              },
              {
                "left": "posicionar",
                "right": "to position (a brand)"
              },
              {
                "left": "el reglamento",
                "right": "the regulation"
              },
              {
                "left": "cumplir con",
                "right": "to comply with"
              }
            ],
            "explanation": "Estas diez palabras aparecen frecuentemente en el mundo de los negocios."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multi-select",
        "question": "¿Qué oraciones son ejemplos del se pasivo? (Elige todas las correctas)",
        "options": [
          "Se alquilan apartamentos.",
          "Se trabaja mucho aquí.",
          "Se venden boletos.",
          "Se vive bien aquí."
        ],
        "correctIndexes": [
          0,
          2
        ],
        "explanation": "Se alquilan y se venden concuerdan con un sustantivo plural: se pasivo."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras.",
        "words": [
          "El",
          "puente",
          "fue",
          "construido",
          "en",
          "1930"
        ],
        "explanation": "Ser + participio + por (agente, opcional) forma la voz pasiva.",
        "translation": "The bridge was built in 1930."
      },
      {
        "type": "multiple-choice",
        "question": "¿Con qué concuerda el verbo en el se pasivo?",
        "options": [
          "Siempre está en singular",
          "Con el sustantivo que recibe la acción",
          "Con la persona que habla",
          "No concuerda con nada"
        ],
        "correctIndex": 1,
        "explanation": "En el se pasivo, el verbo concuerda con el sustantivo: se venden casas."
      }
    ]
  },
  {
    "slug": "combined-object-pronouns-1",
    "level": "B1",
    "number": 23,
    "title": "Pronombres de Objeto Combinados, Part 1 of 2",
    "summary": "Combina pronombres de objeto indirecto y directo en la misma oración, incluida la regla clave de le/les → se.",
    "duration": "6 min",
    "sections": [
      {
        "heading": "El orden: el objeto indirecto siempre va primero",
        "body": [
          "Cuando una oración lleva a la vez un pronombre de objeto indirecto (me, te, le, nos, os, les) y un pronombre de objeto directo (lo, la, los, las), el objeto indirecto siempre se coloca antes del objeto directo. Este orden es fijo en español y nunca se invierte."
        ],
        "examples": [
          {
            "es": "¿Me prestas tu bolígrafo? —Sí, te lo presto.",
            "en": "Will you lend me your pen? —Yes, I'll lend it to you."
          },
          {
            "es": "Necesito la contraseña. ¿Me la puedes dar?",
            "en": "I need the password. Can you give it to me?"
          },
          {
            "es": "Siempre nos cuenta sus historias. Siempre nos las cuenta.",
            "en": "He always tells us his stories. He always tells them to us."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa la oración con los pronombres combinados correctos.",
            "sentence": "¿Me traes las llaves? —Sí, ___ traigo ahora mismo.",
            "answer": "te las",
            "explanation": "El objeto indirecto (te) va antes del objeto directo (las), y juntos preceden al verbo conjugado."
          }
        ]
      },
      {
        "heading": "La regla de oro: le y les se convierten en se",
        "body": [
          "Cuando el pronombre de objeto indirecto de tercera persona (le o les) se combina con un pronombre de objeto directo que empieza con l- (lo, la, los, las), le/les cambia obligatoriamente a se. Esto evita la combinación imposible 'le lo' o 'les la': nunca digas 'le lo di'; di siempre 'se lo di'.",
          "Ojo: esta 'se' no tiene relación con los verbos reflexivos ni con el 'se' impersonal. Aquí es simplemente una forma alternativa de le/les."
        ],
        "examples": [
          {
            "es": "¿Le diste la carta a Juan? —Sí, se la di.",
            "en": "Did you give Juan the letter? —Yes, I gave it to him."
          },
          {
            "es": "¿Les compraste los boletos a tus padres? —Sí, se los compré.",
            "en": "Did you buy your parents the tickets? —Yes, I bought them for them."
          },
          {
            "es": "Le expliqué el problema a mi jefa. Se lo expliqué con calma.",
            "en": "I explained the problem to my boss. I explained it to her calmly."
          },
          {
            "es": "Nunca les cuentan la verdad a los niños. Nunca se la cuentan.",
            "en": "They never tell the children the truth. They never tell it to them."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Cuál oración es correcta?",
            "options": [
              "Le lo di ayer.",
              "Se lo di ayer.",
              "Lo le di ayer.",
              "Se le di ayer."
            ],
            "correctIndex": 1,
            "explanation": "Le, delante de un pronombre de objeto directo que empieza con l- (lo), se convierte obligatoriamente en se: 'se lo di'."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "Completa correctamente: '¿Le regalaste las flores a tu madre?' —'Sí, ___ regalé esta mañana.'",
        "options": [
          "le las",
          "se las",
          "la le",
          "se los"
        ],
        "correctIndex": 1,
        "explanation": "Le se transforma en se al combinarse con las (objeto directo femenino plural): se las regalé."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con los pronombres combinados.",
        "sentence": "¿Me devuelves mi diccionario? —Sí, ___ devuelvo mañana.",
        "answer": "te lo",
        "explanation": "El objeto indirecto (te) precede al objeto directo (lo, por 'diccionario'), y ambos van antes del verbo conjugado."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Traduce la oración al español usando pronombres combinados.",
        "source": "I already told it to them.",
        "answer": "Ya se lo dije.",
        "altAnswers": [
          "Se lo dije ya."
        ],
        "explanation": "'Les' (a ellos) se convierte en 'se' antes de 'lo'. El orden en español es siempre objeto indirecto + objeto directo + verbo."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras para formar una oración correcta.",
        "words": [
          "Se",
          "la",
          "expliqué",
          "con",
          "mucha",
          "paciencia"
        ],
        "translation": "I explained it to her/him with a lot of patience.",
        "explanation": "El pronombre combinado 'se la' (le + la) va antes del verbo conjugado 'expliqué'."
      }
    ]
  },
  {
    "slug": "combined-object-pronouns-2",
    "level": "B1",
    "number": 24,
    "title": "Pronombres de Objeto Combinados, Part 2 of 2",
    "summary": "Combina pronombres de objeto indirecto y directo en la misma oración, incluida la regla clave de le/les → se.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "Colocación: antes del verbo o pegados al final",
        "body": [
          "Los pronombres combinados, igual que los pronombres simples, van inmediatamente antes de un verbo conjugado. Pero cuando el verbo está en infinitivo, gerundio o es un mandato afirmativo, los pronombres se pegan al final, formando una sola palabra.",
          "Con el infinitivo o el gerundio existe también la opción de colocar los pronombres antes del verbo auxiliar conjugado. Cuando se pegan al final y la nueva palabra tiene tres o más sílabas, se añade una tilde para conservar el acento original del verbo. Con los mandatos negativos, los pronombres nunca se pegan: siempre van antes del verbo."
        ],
        "examples": [
          {
            "es": "Te lo voy a explicar. / Voy a explicártelo.",
            "en": "I'm going to explain it to you."
          },
          {
            "es": "Nos las está preparando. / Está preparándonoslas.",
            "en": "She is preparing them for us."
          },
          {
            "es": "¡Dámelo ahora mismo!",
            "en": "Give it to me right now!"
          },
          {
            "es": "No me lo digas.",
            "en": "Don't tell me that."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa transformando el infinitivo con los pronombres pegados.",
            "sentence": "Quiero comprarte un regalo. Quiero ___.",
            "answer": "comprártelo",
            "explanation": "Con el infinitivo, los pronombres se pegan al final: comprar + te + lo = comprártelo. Se añade una tilde para mantener el acento original en la 'a'."
          }
        ]
      },
      {
        "heading": "En la práctica: un diálogo cotidiano",
        "body": [
          "Lee este diálogo entre Marta y su compañero de piso, Diego. Fíjate en cómo los pronombres combinados sustituyen a los sustantivos ya mencionados para evitar repeticiones. Nota también que cuando alguien pide algo usando 'nos', quien responde usa 'os' porque ahora se dirige directamente a ese grupo."
        ],
        "examples": [
          {
            "es": "MARTA: ¿Me prestaste las llaves del coche ayer?",
            "en": "Marta: Did you lend me the car keys yesterday?"
          },
          {
            "es": "DIEGO: Sí, te las presté por la tarde. ¿No te acuerdas?",
            "en": "Diego: Yes, I lent them to you in the afternoon. Don't you remember?"
          },
          {
            "es": "MARTA: Ah, es verdad. Oye, ¿le devolviste el libro a Ana?",
            "en": "Marta: Oh, that's right. Hey, did you return the book to Ana?"
          },
          {
            "es": "DIEGO: Todavía no. Voy a devolvérselo este fin de semana.",
            "en": "Diego: Not yet. I'm going to return it to her this weekend."
          },
          {
            "es": "MARTA: Perfecto. Y las fotos del viaje, ¿nos las vas a enviar pronto?",
            "en": "Marta: Perfect. And the trip photos, are you going to send them to us soon?"
          },
          {
            "es": "DIEGO: Claro, os las envío en cuanto las tenga editadas.",
            "en": "Diego: Of course, I'll send them to you all as soon as I have them edited."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Según el diálogo, completa la respuesta de Diego.",
            "sentence": "¿Le devolviste el libro a Ana? —Todavía no, voy a devolvér___ este fin de semana.",
            "answer": "selo",
            "explanation": "Le (a Ana) se convierte en se porque va seguido de lo (el libro): devolvérselo."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "matching",
        "instructions": "Une cada pregunta con la respuesta que usa los pronombres combinados correctamente.",
        "pairs": [
          {
            "left": "¿Me prestas tu paraguas?",
            "right": "Sí, te lo presto."
          },
          {
            "left": "¿Le diste el recado a tu jefe?",
            "right": "Sí, se lo di."
          },
          {
            "left": "¿Te traigo la cuenta?",
            "right": "Sí, tráemela, por favor."
          },
          {
            "left": "¿Les explicaste la tarea a los estudiantes?",
            "right": "Sí, se la expliqué."
          }
        ],
        "explanation": "En cada respuesta, el objeto indirecto precede al objeto directo, y le/les se convierte en se antes de lo/la/los/las."
      },
      {
        "type": "multi-select",
        "question": "¿En cuáles de las siguientes oraciones se usa correctamente la combinación de pronombres? (Elige todas las correctas)",
        "options": [
          "Se lo dije ayer.",
          "Le lo dije ayer.",
          "Voy a dártelo mañana.",
          "Voy a te lo dar mañana.",
          "Dámelo, por favor."
        ],
        "correctIndexes": [
          0,
          2,
          4
        ],
        "explanation": "'Le lo' nunca es correcto (debe ser 'se lo'), y los pronombres pegados al infinitivo van al final del verbo completo, no sueltos antes de él: 'dártelo', no 'te lo dar'."
      }
    ]
  },
  {
    "slug": "possessive-pronouns-1",
    "level": "B1",
    "number": 25,
    "title": "Pronombres Posesivos, Part 1 of 2",
    "summary": "Sustituye un sustantivo por completo con los pronombres posesivos: el mío, el tuyo, el suyo, el nuestro y el vuestro.",
    "duration": "6 min",
    "sections": [
      {
        "heading": "El mío, el tuyo, el suyo: la forma con artículo",
        "body": [
          "A diferencia de los adjetivos posesivos (mi, tu, su, nuestro, vuestro), que siempre acompañan a un sustantivo, los pronombres posesivos lo sustituyen por completo. Se forman con el artículo definido (el, la, los, las) seguido de la forma larga del posesivo: mío/mía/míos/mías, tuyo/tuya/tuyos/tuyas, suyo/suya/suyos/suyas, nuestro/nuestra/nuestros/nuestras, vuestro/vuestra/vuestros/vuestras.",
          "El pronombre posesivo concuerda en género y número con lo que se posee, no con la persona que posee. Si un hombre habla de 'su' bicicleta (femenina), el pronombre correcto es 'la suya', no 'el suyo'."
        ],
        "examples": [
          {
            "es": "¿Es tu libro? —Sí, es el mío.",
            "en": "Is it your book? —Yes, it's mine."
          },
          {
            "es": "Mi casa es pequeña, pero la tuya es enorme.",
            "en": "My house is small, but yours is huge."
          },
          {
            "es": "Nuestro equipo perdió; el vuestro ganó.",
            "en": "Our team lost; yours (Spain, plural) won."
          },
          {
            "es": "Estos son mis apuntes; esos son los suyos.",
            "en": "These are my notes; those are theirs."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa con el pronombre posesivo correcto.",
            "sentence": "Tengo mi mochila, pero no encuentro ___ (la mochila de Pedro).",
            "answer": "la suya",
            "hint": "de él",
            "explanation": "'Mochila' es femenina singular y pertenece a él (Pedro), así que el pronombre es 'la suya', concordando con 'mochila', no con 'Pedro'."
          }
        ]
      },
      {
        "heading": "El artículo: obligatorio casi siempre, opcional después de ser",
        "body": [
          "El artículo definido es obligatorio cuando el pronombre posesivo funciona como sujeto o complemento directo de la oración: 'El mío está roto' o 'Prefiero el tuyo'.",
          "Después del verbo ser, el artículo puede omitirse sin cambiar el significado, y en el habla cotidiana es incluso más natural omitirlo: 'Este paraguas es mío' resulta más común que 'Este paraguas es el mío'. La versión con artículo se reserva sobre todo para contrastar o elegir entre varias opciones."
        ],
        "examples": [
          {
            "es": "Este abrigo es mío.",
            "en": "This coat is mine."
          },
          {
            "es": "De todos los coches del garaje, el mío es el rojo.",
            "en": "Of all the cars in the garage, mine is the red one."
          },
          {
            "es": "Esas llaves no son tuyas; son nuestras.",
            "en": "Those keys aren't yours; they're ours."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Cuál oración es gramaticalmente correcta?",
            "options": [
              "Prefiero mío a tuyo.",
              "Prefiero el mío al tuyo.",
              "Prefiero lo mío a tuyo.",
              "Prefiero lo mío a lo tuyo."
            ],
            "correctIndex": 1,
            "explanation": "Fuera de la construcción con 'ser', el artículo definido (el, la) es obligatorio delante del pronombre posesivo: 'el mío', nunca simplemente 'mío'."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "Completa: 'Nuestra casa tiene jardín, pero ___ (la casa de ellos) no.'",
        "options": [
          "la suyo",
          "la suya",
          "el suyo",
          "la suyas"
        ],
        "correctIndex": 1,
        "explanation": "'Casa' es femenina singular, así que el pronombre posesivo debe concordar: la suya."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa con el pronombre posesivo apropiado.",
        "sentence": "Tú tienes tu opinión, y yo tengo ___.",
        "answer": "la mía",
        "explanation": "'Opinión' es femenina singular; el pronombre posesivo que la reemplaza es 'la mía'."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Traduce la oración al español.",
        "source": "This backpack isn't mine; it's yours.",
        "answer": "Esta mochila no es mía; es tuya.",
        "altAnswers": [
          "Esta mochila no es la mía; es la tuya."
        ],
        "explanation": "Después de 'ser' el artículo suele omitirse en el habla natural ('es mía'), aunque la forma con artículo ('es la mía') también es correcta."
      }
    ]
  },
  {
    "slug": "possessive-pronouns-2",
    "level": "B1",
    "number": 26,
    "title": "Pronombres Posesivos, Part 2 of 2",
    "summary": "Sustituye un sustantivo por completo con los pronombres posesivos: el mío, el tuyo, el suyo, el nuestro y el vuestro.",
    "duration": "6 min",
    "sections": [
      {
        "heading": "Cuidado con el suyo/la suya: aclarando la ambigüedad",
        "body": [
          "Las formas suyo/suya/suyos/suyas son ambiguas porque pueden significar 'de él', 'de ella', 'de usted', 'de ellos', 'de ellas' o 'de ustedes'. Cuando el contexto no deja claro a quién se refieren, los hispanohablantes prefieren la construcción 'el/la/los/las de + pronombre' (el de él, la de ella, el de ustedes) en lugar del posesivo."
        ],
        "examples": [
          {
            "es": "Ana y Luis tienen coches nuevos. El de ella es azul; el de él es negro.",
            "en": "Ana and Luis have new cars. Hers is blue; his is black."
          },
          {
            "es": "¿Esta es la maleta de usted? —No, la mía es la verde; la suya está allí.",
            "en": "Is this your suitcase (formal)? —No, mine is the green one; yours is over there."
          },
          {
            "es": "Si el de Marta no funciona, puede usar el nuestro.",
            "en": "If Marta's doesn't work, she can use ours."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Reescribe la oración evitando la ambigüedad de 'las suyas'.",
            "sentence": "Pedro y Marta perdieron sus llaves. Encontramos las de Marta, pero no ___ (las de Pedro).",
            "answer": "las de él",
            "explanation": "En vez de 'las suyas' (que podría referirse a Marta o a Pedro), se usa 'las de él' para especificar con claridad el poseedor."
          }
        ]
      },
      {
        "heading": "En la práctica: separando el equipaje",
        "body": [
          "Lee esta conversación entre dos amigas, Lucía y Sara, que están separando su equipaje después de un viaje. Observa cómo usan los pronombres posesivos para evitar repetir los sustantivos."
        ],
        "examples": [
          {
            "es": "LUCÍA: Esta maleta gris, ¿es tuya o mía?",
            "en": "Lucía: This gray suitcase, is it yours or mine?"
          },
          {
            "es": "SARA: Es mía. La tuya es la negra, ¿no te acuerdas?",
            "en": "Sara: It's mine. Yours is the black one, don't you remember?"
          },
          {
            "es": "LUCÍA: Ah, cierto. Oye, ¿estos pasaportes son nuestros o son los de Carlos y Rita?",
            "en": "Lucía: Oh, right. Hey, are these passports ours or Carlos and Rita's?"
          },
          {
            "es": "SARA: El azul es el mío; el rojo debe de ser el tuyo. Los de ellos están en su mochila.",
            "en": "Sara: The blue one is mine; the red one must be yours. Theirs are in their backpack."
          },
          {
            "es": "LUCÍA: Entonces esta chaqueta no es ni la mía ni la tuya... —SARA: Es la suya, de Rita. Se le quedó aquí.",
            "en": "Lucía: Then this jacket isn't mine or yours... —Sara: It's hers, Rita's. She left it here."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "Según el diálogo, ¿de quién es la chaqueta que encontraron?",
            "options": [
              "De Lucía",
              "De Sara",
              "De Rita",
              "De Carlos"
            ],
            "correctIndex": 2,
            "explanation": "Sara aclara que la chaqueta 'es la suya, de Rita', añadiendo 'de Rita' para eliminar la ambigüedad de 'suya'."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "word-order",
        "prompt": "Ordena las palabras.",
        "words": [
          "El",
          "coche",
          "rojo",
          "es",
          "el",
          "nuestro"
        ],
        "translation": "The red car is ours.",
        "explanation": "El pronombre posesivo 'el nuestro' concuerda en género y número con 'coche' (masculino singular)."
      },
      {
        "type": "matching",
        "instructions": "Une cada adjetivo posesivo con su pronombre posesivo correspondiente (forma femenina singular).",
        "pairs": [
          {
            "left": "mi",
            "right": "la mía"
          },
          {
            "left": "tu",
            "right": "la tuya"
          },
          {
            "left": "su",
            "right": "la suya"
          },
          {
            "left": "nuestra",
            "right": "la nuestra"
          }
        ],
        "explanation": "Cada pronombre posesivo se forma con el artículo definido más la forma larga del posesivo, concordando con el sustantivo que reemplaza."
      },
      {
        "type": "multi-select",
        "question": "¿Cuáles de las siguientes oraciones usan correctamente el pronombre posesivo? (Elige todas las correctas)",
        "options": [
          "Esta bici es la mía.",
          "Esta bici es la mío.",
          "Prefiero el tuyo al mío.",
          "Prefiero tuyo al mío.",
          "Son las suyas, de ellas."
        ],
        "correctIndexes": [
          0,
          2,
          4
        ],
        "explanation": "El pronombre debe concordar en género con el sustantivo ('la mía', no 'la mío'), y fuera de 'ser' necesita artículo ('el tuyo', no simplemente 'tuyo')."
      }
    ]
  },
  {
    "slug": "vosotros-commands-1",
    "level": "B1",
    "number": 27,
    "title": "El Imperativo de Vosotros, Part 1 of 2",
    "summary": "Completa la lección de mandatos añadiendo la forma de vosotros, usada en España para el plural informal.",
    "duration": "5 min",
    "sections": [
      {
        "heading": "Vosotros: el plural informal de España",
        "body": [
          "En la lección de mandatos de tú, usted y nosotros faltaba una forma: vosotros. En España, cuando te diriges informalmente a un grupo de personas (en vez de a una sola), se usa vosotros en lugar de ustedes. En Latinoamérica, ustedes cubre tanto el trato formal como el informal en plural, así que la forma de vosotros casi no se usa allí; pero en España es esencial para hablar con amigos, familiares o compañeros en plural."
        ],
        "examples": [
          {
            "es": "¡Chicos, esperad un momento!",
            "en": "Guys, wait a moment! (Spain)"
          },
          {
            "es": "Un profesor en Madrid le dice a la clase: 'Escuchad, por favor', no 'Escuchen'.",
            "en": "A teacher in Madrid tells the class: 'Listen, please' (vosotros), not 'Escuchen' (ustedes)."
          },
          {
            "es": "En España decimos 'Hablad más despacio'; en Latinoamérica se diría 'Hablen más despacio' para el mismo grupo de amigos.",
            "en": "In Spain we say 'Hablad más despacio'; in Latin America you'd say 'Hablen más despacio' for the same group of friends."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "Un grupo de amigos en Madrid le dice a otro grupo: '¡Entrad!' ¿Qué forma verbal están usando?",
            "options": [
              "La forma de ustedes",
              "La forma de vosotros",
              "La forma de tú",
              "La forma de nosotros"
            ],
            "correctIndex": 1,
            "explanation": "En España, entre amigos (trato informal) en plural se usa la forma de vosotros; en Latinoamérica se usaría 'ustedes' (entren)."
          }
        ]
      },
      {
        "heading": "El mandato afirmativo: quita la -r, añade -d",
        "body": [
          "Para formar el mandato afirmativo de vosotros se toma el infinitivo, se elimina la -r final y se añade una -d: hablar → hablad, comer → comed, vivir → vivid.",
          "Esta regla no tiene excepciones, ni siquiera con los verbos que son irregulares en el mandato de tú: decir → decid, hacer → haced, ir → id, ser → sed, tener → tened, venir → venid."
        ],
        "examples": [
          {
            "es": "Hablad más alto, no os oigo bien.",
            "en": "Speak louder, I can't hear you well."
          },
          {
            "es": "Comed despacio, hay tiempo de sobra.",
            "en": "Eat slowly, there's plenty of time."
          },
          {
            "es": "Escribid vuestros nombres en la pizarra.",
            "en": "Write your names on the board."
          },
          {
            "es": "Venid a la fiesta el sábado.",
            "en": "Come to the party on Saturday."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Forma el mandato de vosotros a partir del infinitivo.",
            "sentence": "abrir → ___ la ventana, por favor.",
            "answer": "abrid",
            "explanation": "Se quita la -r del infinitivo 'abrir' y se añade -d: abrid."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "¿Cuál es el mandato afirmativo de vosotros para 'escribir'?",
        "options": [
          "escribid",
          "escribed",
          "escribir",
          "escribáis"
        ],
        "correctIndex": 0,
        "explanation": "Se quita la -r del infinitivo 'escribir' y se añade -d: escribid."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa con el mandato afirmativo de vosotros (reflexivo).",
        "sentence": "Niños, ___ (bañarse) antes de cenar.",
        "answer": "bañaos",
        "explanation": "bañar + os, con pérdida de la -d final: bañad + os → bañaos."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Traduce el mandato al español usando la forma de vosotros.",
        "source": "Don't be late, guys.",
        "answer": "No lleguéis tarde, chicos.",
        "altAnswers": [
          "No lleguéis tarde, chavales."
        ],
        "explanation": "El mandato negativo de vosotros usa el presente de subjuntivo: llegar → lleguéis."
      }
    ]
  },
  {
    "slug": "vosotros-commands-2",
    "level": "B1",
    "number": 28,
    "title": "El Imperativo de Vosotros, Part 2 of 2",
    "summary": "Completa la lección de mandatos añadiendo la forma de vosotros, usada en España para el plural informal.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "Verbos reflexivos: se pierde la -d (excepto irse)",
        "body": [
          "Cuando el mandato afirmativo de vosotros se combina con un verbo reflexivo, el pronombre 'os' se pega al final, pero la -d final del verbo desaparece antes de añadir '-os'. Así, levantar + os no da 'levantados', sino 'levantaos'. Lo mismo ocurre con sentaos (sentar) y vestíos (vestir, con tilde porque la i queda sola formando hiato).",
          "La única excepción de toda la lengua española es el verbo irse, cuyo mandato de vosotros irregular es idos, que sí conserva la -d."
        ],
        "examples": [
          {
            "es": "¡Levantaos, ya es tarde!",
            "en": "Get up, it's already late!"
          },
          {
            "es": "Sentaos, por favor, la reunión va a empezar.",
            "en": "Sit down, please, the meeting is about to start."
          },
          {
            "es": "Vestíos rápido, que perdemos el autobús.",
            "en": "Get dressed quickly, we're going to miss the bus."
          },
          {
            "es": "Idos ya; se está haciendo de noche.",
            "en": "Go away now; it's getting dark. (irregular: irse)"
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Cuál es el mandato correcto de vosotros para 'lavarse las manos'?",
            "options": [
              "Lavados las manos.",
              "Lavaos las manos.",
              "Lavados os las manos.",
              "Os lavad las manos."
            ],
            "correctIndex": 1,
            "explanation": "Con los reflexivos, la -d final del mandato de vosotros desaparece antes de añadir -os: lavad + os → lavaos, nunca 'lavados'."
          }
        ]
      },
      {
        "heading": "El mandato negativo: el subjuntivo de vosotros",
        "body": [
          "El mandato negativo de vosotros no usa la regla de -d; en cambio, usa la forma de vosotros del presente de subjuntivo, igual que ocurre con tú, usted y nosotros: no habléis, no comáis, no viváis.",
          "En el negativo, los pronombres siempre van delante del verbo, nunca pegados al final: no os levantéis, no os vayáis."
        ],
        "examples": [
          {
            "es": "No habléis todos a la vez.",
            "en": "Don't all talk at once."
          },
          {
            "es": "No comáis tan rápido.",
            "en": "Don't eat so fast."
          },
          {
            "es": "No os preocupéis por eso.",
            "en": "Don't worry about that."
          },
          {
            "es": "No os vayáis todavía.",
            "en": "Don't leave yet."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa el mandato negativo de vosotros.",
            "sentence": "No ___ (llegar) tarde a la boda.",
            "answer": "lleguéis",
            "explanation": "El mandato negativo de vosotros usa el presente de subjuntivo: llegar → lleguéis. Nótese el cambio ortográfico g→gu para conservar el sonido."
          }
        ]
      },
      {
        "heading": "En la práctica: antes de salir de casa",
        "body": [
          "Lee las instrucciones que una madre en Sevilla les da a sus hijos antes de salir de casa. Fíjate en la mezcla de mandatos afirmativos, negativos y reflexivos con vosotros."
        ],
        "examples": [
          {
            "es": "¡Venga, niños, levantaos ya! No os quedéis en la cama.",
            "en": "Come on, kids, get up already! Don't stay in bed."
          },
          {
            "es": "Vestíos rápido y no olvidéis los abrigos.",
            "en": "Get dressed quickly and don't forget your coats."
          },
          {
            "es": "Comed el desayuno, no salgáis con el estómago vacío.",
            "en": "Eat breakfast, don't leave with an empty stomach."
          },
          {
            "es": "Coged las mochilas y no las dejéis tiradas por ahí.",
            "en": "Grab your backpacks and don't leave them lying around."
          },
          {
            "es": "Y por favor, ¡no os peleéis en el coche!",
            "en": "And please, don't fight in the car!"
          }
        ],
        "checkpoint": [
          {
            "type": "multi-select",
            "question": "¿Cuáles de estas frases del monólogo usan la forma NEGATIVA del mandato de vosotros? (Elige todas las correctas)",
            "options": [
              "Levantaos ya",
              "No os quedéis en la cama",
              "Vestíos rápido",
              "No olvidéis los abrigos",
              "No os peleéis en el coche"
            ],
            "correctIndexes": [
              1,
              3,
              4
            ],
            "explanation": "Los mandatos negativos ('no os quedéis', 'no olvidéis', 'no os peleéis') usan el subjuntivo; los afirmativos ('levantaos', 'vestíos') usan la forma de -d/-os."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "word-order",
        "prompt": "Ordena las palabras para formar un mandato negativo de vosotros.",
        "words": [
          "No",
          "os",
          "preocupéis",
          "por",
          "nada"
        ],
        "translation": "Don't worry about anything.",
        "explanation": "En el mandato negativo, los pronombres van delante del verbo: no os preocupéis."
      },
      {
        "type": "matching",
        "instructions": "Une cada infinitivo con su mandato afirmativo de vosotros correcto.",
        "pairs": [
          {
            "left": "hablar",
            "right": "hablad"
          },
          {
            "left": "comer",
            "right": "comed"
          },
          {
            "left": "vivir",
            "right": "vivid"
          },
          {
            "left": "irse",
            "right": "idos"
          },
          {
            "left": "levantarse",
            "right": "levantaos"
          }
        ],
        "explanation": "El mandato afirmativo de vosotros quita la -r y añade -d; con reflexivos se pierde también la -d antes de añadir -os, excepto en el irregular 'idos' (de irse)."
      },
      {
        "type": "multi-select",
        "question": "¿Cuáles formas de mandato de vosotros están escritas correctamente? (Elige todas las correctas)",
        "options": [
          "Sentaos aquí.",
          "Sentados aquí.",
          "No habléis tan alto.",
          "No hablad tan alto.",
          "Idos de aquí."
        ],
        "correctIndexes": [
          0,
          2,
          4
        ],
        "explanation": "El reflexivo pierde la -d (sentaos, no 'sentados'); el negativo usa el subjuntivo (no habléis, no 'no hablad'); idos es la excepción irregular de irse."
      }
    ]
  },
  {
    "slug": "subjunctive-formation-drill-1",
    "level": "B1",
    "number": 29,
    "title": "Formación del Subjuntivo: Práctica Extra, Part 1 of 3",
    "summary": "Práctica adicional para reforzar la formación del subjuntivo presente en todas sus variantes: verbos regulares, con cambios ortográficos, con cambio de raíz e irregulares.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Verbos -ar regulares",
        "body": [
          "Recuerda: para los verbos -ar, quita la -o de la forma \"yo\" y añade las terminaciones de -e (e, es, e, emos, éis, en)."
        ],
        "examples": [
          {
            "es": "hablar → hable, hables, hable, hablemos, habléis, hablen"
          },
          {
            "es": "Es importante que trabajes duro."
          },
          {
            "es": "Ojalá que estudiemos juntos para el examen."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa la oración con la forma correcta.",
            "sentence": "Espero que tú ___ (llamar) a tu abuela esta noche.",
            "answer": "llames",
            "explanation": "Llamar es regular: llame, llames, llame, llamemos, llaméis, llamen."
          },
          {
            "type": "multiple-choice",
            "question": "¿Cuál es la forma correcta de \"ayudar\" para \"nosotros\" en subjuntivo?",
            "options": [
              "ayudemos",
              "ayudamos",
              "ayudéis",
              "ayuden"
            ],
            "correctIndex": 0,
            "explanation": "Los verbos -ar regulares usan las terminaciones -e, -es, -e, -emos, -éis, -en: nosotros → ayudemos."
          }
        ]
      },
      {
        "heading": "Verbos -er/-ir regulares",
        "body": [
          "Recuerda: para los verbos -er e -ir, quita la -o de la forma \"yo\" y añade las terminaciones de -a (a, as, a, amos, áis, an)."
        ],
        "examples": [
          {
            "es": "comer → coma, comas, coma, comamos, comáis, coman"
          },
          {
            "es": "vivir → viva, vivas, viva, vivamos, viváis, vivan"
          },
          {
            "es": "Quiero que leas este libro."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa la oración con la forma correcta.",
            "sentence": "Es necesario que ustedes ___ (aprender) las reglas.",
            "answer": "aprendan",
            "explanation": "Aprender es regular: aprenda, aprendas, aprenda, aprendamos, aprendáis, aprendan."
          }
        ]
      },
      {
        "heading": "Cambios ortográficos",
        "body": [
          "Recuerda: los verbos terminados en -car, -gar y -zar cambian la consonante para conservar el sonido (c→qu, g→gu, z→c)."
        ],
        "examples": [
          {
            "es": "buscar → busque, busques, busque, busquemos, busquéis, busquen"
          },
          {
            "es": "llegar → llegue, llegues, llegue, lleguemos, lleguéis, lleguen"
          },
          {
            "es": "empezar → empiece, empieces, empiece, empecemos, empecéis, empiecen"
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa la oración con la forma correcta.",
            "sentence": "Espero que tú ___ (sacar) buenas notas este semestre.",
            "answer": "saques",
            "explanation": "Sacar cambia c→qu antes de e: saque, saques, saque, saquemos, saquéis, saquen."
          },
          {
            "type": "multiple-choice",
            "question": "¿Cuál es la forma correcta de \"pagar\" para \"nosotros\" en subjuntivo?",
            "options": [
              "paguemos",
              "pagemos",
              "paguéis",
              "pague"
            ],
            "correctIndex": 0,
            "explanation": "Pagar cambia g→gu antes de e: pague, pagues, pague, paguemos, paguéis, paguen."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con la forma correcta.",
        "sentence": "Es importante que tú ___ (estudiar) para el examen.",
        "answer": "estudies",
        "explanation": "Estudiar es regular: estudie, estudies, estudie, estudiemos, estudiéis, estudien."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con la forma correcta.",
        "sentence": "Ojalá que ellos ___ (escribir) pronto.",
        "answer": "escriban",
        "explanation": "Escribir es regular: escriba, escribas, escriba, escribamos, escribáis, escriban."
      },
      {
        "type": "multiple-choice",
        "question": "¿Cuál es la forma correcta de \"buscar\" para \"yo\" en subjuntivo?",
        "options": [
          "busco",
          "busque",
          "busqué",
          "buscaré"
        ],
        "correctIndex": 1,
        "explanation": "Buscar cambia c→qu antes de e: busque, busques, busque..."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con la forma correcta.",
        "sentence": "Espero que nosotros ___ (empezar) el proyecto mañana.",
        "answer": "empecemos",
        "explanation": "Empezar cambia z→c antes de e; en nosotros no hay cambio de raíz: empecemos."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con la forma correcta.",
        "sentence": "Es raro que él ___ (pensar) eso.",
        "answer": "piense",
        "explanation": "Pensar cambia e→ie excepto en nosotros/vosotros: piense, pienses, piense..."
      },
      {
        "type": "multiple-choice",
        "question": "¿Cuál es la forma correcta de \"volver\" para \"nosotros\" en subjuntivo?",
        "options": [
          "volvamos",
          "vuelvan",
          "volváis",
          "vuelva"
        ],
        "correctIndex": 0,
        "explanation": "Volver cambia o→ue excepto en nosotros: volvamos, no vuelvan."
      }
    ]
  },
  {
    "slug": "subjunctive-formation-drill-2",
    "level": "B1",
    "number": 30,
    "title": "Formación del Subjuntivo: Práctica Extra, Part 2 of 3",
    "summary": "Práctica adicional para reforzar la formación del subjuntivo presente en todas sus variantes: verbos regulares, con cambios ortográficos, con cambio de raíz e irregulares.",
    "duration": "9 min",
    "sections": [
      {
        "heading": "Verbos con cambio de raíz (-ar, -er)",
        "body": [
          "Recuerda: los verbos -ar y -er con cambio de raíz (e→ie, o→ue) mantienen el cambio en todas las formas excepto en nosotros y vosotros."
        ],
        "examples": [
          {
            "es": "pensar → piense, pienses, piense, pensemos, penséis, piensen"
          },
          {
            "es": "volver → vuelva, vuelvas, vuelva, volvamos, volváis, vuelvan"
          },
          {
            "es": "entender → entienda, entiendas, entienda, entendamos, entendáis, entiendan"
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa la oración con la forma correcta.",
            "sentence": "Prefiero que nosotros ___ (contar) el dinero juntos.",
            "answer": "contemos",
            "explanation": "Contar cambia o→ue excepto en nosotros: cuente, cuentes, cuente, contemos, contéis, cuenten."
          },
          {
            "type": "multiple-choice",
            "question": "¿Cuál es la forma correcta de \"perder\" para \"ellos\" en subjuntivo?",
            "options": [
              "pierdan",
              "perdan",
              "pierden",
              "perdieran"
            ],
            "correctIndex": 0,
            "explanation": "Perder cambia e→ie excepto en nosotros/vosotros: pierda, pierdas, pierda, perdamos, perdáis, pierdan."
          }
        ]
      },
      {
        "heading": "Verbos -ir con cambio de raíz",
        "body": [
          "Recuerda: los verbos -ir con cambio de raíz cambian en casi todas las formas, y además tienen un cambio adicional (e→i o o→u) en nosotros y vosotros."
        ],
        "examples": [
          {
            "es": "pedir → pida, pidas, pida, pidamos, pidáis, pidan"
          },
          {
            "es": "dormir → duerma, duermas, duerma, durmamos, durmáis, duerman"
          },
          {
            "es": "sentir → sienta, sientas, sienta, sintamos, sintáis, sientan"
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa la oración con la forma correcta.",
            "sentence": "Ojalá que nosotros ___ (dormir) bien esta noche.",
            "answer": "durmamos",
            "explanation": "Dormir cambia o→ue, pero en nosotros/vosotros el cambio es o→u: durmamos, durmáis."
          },
          {
            "type": "multiple-choice",
            "question": "¿Cuál es la forma correcta de \"preferir\" para \"vosotros\" en subjuntivo?",
            "options": [
              "prefiráis",
              "prefiéis",
              "preferáis",
              "prefiramos"
            ],
            "correctIndex": 0,
            "explanation": "Preferir cambia e→ie, pero en vosotros el cambio es e→i: prefiráis."
          }
        ]
      },
      {
        "heading": "Los seis verbos irregulares",
        "body": [
          "Recuerda: ser, estar, ir, saber, dar y haber no siguen ningún patrón y hay que memorizarlos."
        ],
        "examples": [
          {
            "es": "ser → sea, seas, sea, seamos, seáis, sean"
          },
          {
            "es": "estar → esté, estés, esté, estemos, estéis, estén"
          },
          {
            "es": "ir → vaya, vayas, vaya, vayamos, vayáis, vayan"
          },
          {
            "es": "saber → sepa, sepas, sepa, sepamos, sepáis, sepan"
          },
          {
            "es": "dar → dé, des, dé, demos, deis, den"
          },
          {
            "es": "haber → haya, hayas, haya, hayamos, hayáis, hayan"
          }
        ],
        "checkpoint": [
          {
            "type": "multi-select",
            "question": "¿Cuáles de estos verbos son irregulares en subjuntivo? (Elige todas las correctas)",
            "options": [
              "dar",
              "hablar",
              "saber",
              "comer"
            ],
            "correctIndexes": [
              0,
              2
            ],
            "explanation": "Dar y saber están entre los seis verbos totalmente irregulares; hablar y comer son regulares."
          },
          {
            "type": "fill-blank",
            "prompt": "Completa la oración con la forma correcta.",
            "sentence": "Es dudoso que ella ___ (saber) la respuesta.",
            "answer": "sepa",
            "explanation": "Saber es irregular en subjuntivo: sepa, sepas, sepa, sepamos, sepáis, sepan."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con la forma correcta.",
        "sentence": "Ojalá que nosotros ___ (pedir) la cuenta pronto.",
        "answer": "pidamos",
        "explanation": "Pedir cambia e→i en todas las formas, incluida nosotros: pidamos."
      },
      {
        "type": "multi-select",
        "question": "¿Qué verbos tienen un cambio adicional en nosotros/vosotros en subjuntivo? (Elige todas las correctas)",
        "options": [
          "dormir",
          "hablar",
          "sentir",
          "pensar"
        ],
        "correctIndexes": [
          0,
          2
        ],
        "explanation": "Dormir (o→u) y sentir (e→i) son verbos -ir con cambio adicional en nosotros/vosotros; hablar es regular y pensar no tiene ese cambio extra."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con la forma correcta.",
        "sentence": "Espero que tú ___ (ir) con nosotros a la fiesta.",
        "answer": "vayas",
        "explanation": "Ir es irregular en subjuntivo: vaya, vayas, vaya, vayamos, vayáis, vayan."
      },
      {
        "type": "multiple-choice",
        "question": "¿Cuál es la forma correcta de \"dar\" para \"yo\" en subjuntivo?",
        "options": [
          "doy",
          "dé",
          "di",
          "daré"
        ],
        "correctIndex": 1,
        "explanation": "Dar es irregular en subjuntivo: dé, des, dé, demos, deis, den."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con la forma correcta.",
        "sentence": "Quiero que ella ___ (tener) paciencia.",
        "answer": "tenga",
        "explanation": "Tener es irregular en \"yo\" (tengo), y esa raíz pasa a todo el subjuntivo: tenga."
      },
      {
        "type": "multiple-choice",
        "question": "¿Cuál es la forma correcta de \"decir\" para \"nosotros\" en subjuntivo?",
        "options": [
          "digamos",
          "decimos",
          "dicemos",
          "digáis"
        ],
        "correctIndex": 0,
        "explanation": "Decir es irregular en \"yo\" (digo), y esa raíz pasa a todo el subjuntivo: digamos."
      }
    ]
  },
  {
    "slug": "subjunctive-formation-drill-3",
    "level": "B1",
    "number": 31,
    "title": "Formación del Subjuntivo: Práctica Extra, Part 3 of 3",
    "summary": "Práctica adicional para reforzar la formación del subjuntivo presente en todas sus variantes: verbos regulares, con cambios ortográficos, con cambio de raíz e irregulares.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "Irregularidad de la forma \"yo\" en todo el subjuntivo",
        "body": [
          "Recuerda: si un verbo es irregular solo en la forma \"yo\" del presente indicativo, esa misma raíz irregular aparece en todas las formas del subjuntivo."
        ],
        "examples": [
          {
            "es": "tener → tengo → tenga, tengas, tenga, tengamos, tengáis, tengan"
          },
          {
            "es": "hacer → hago → haga, hagas, haga, hagamos, hagáis, hagan"
          },
          {
            "es": "conocer → conozco → conozca, conozcas, conozca, conozcamos, conozcáis, conozcan"
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa la oración con la forma correcta.",
            "sentence": "Quiero que tú ___ (poner) la mesa antes de cenar.",
            "answer": "pongas",
            "explanation": "Poner es irregular en \"yo\" (pongo), y esa raíz pasa a todo el subjuntivo: ponga, pongas, ponga..."
          },
          {
            "type": "multiple-choice",
            "question": "¿Cuál es la forma correcta de \"salir\" para \"yo\" en subjuntivo?",
            "options": [
              "salgo",
              "salga",
              "salió",
              "saliera"
            ],
            "correctIndex": 1,
            "explanation": "Salir es irregular en \"yo\" (salgo), y esa raíz da la forma de subjuntivo: salga."
          }
        ]
      },
      {
        "heading": "Práctica mixta",
        "body": [
          "Recuerda: identifica primero el tipo de verbo (regular, con cambio ortográfico, con cambio de raíz o irregular) antes de conjugar."
        ],
        "examples": [
          {
            "es": "Espero que llegues a tiempo."
          },
          {
            "es": "Ojalá que hagamos un buen viaje."
          },
          {
            "es": "Es posible que ellos no sepan la verdad."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa la oración con la forma correcta.",
            "sentence": "Dudo que él ___ (dormir) más de seis horas.",
            "answer": "duerma",
            "explanation": "Dormir cambia o→ue en la forma de él: duerma."
          },
          {
            "type": "fill-blank",
            "prompt": "Completa la oración con la forma correcta.",
            "sentence": "Ojalá que ustedes ___ (llegar) antes del anochecer.",
            "answer": "lleguen",
            "explanation": "Llegar cambia g→gu antes de e: llegue, llegues, llegue, lleguemos, lleguéis, lleguen."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "translate",
        "direction": "es-en",
        "prompt": "Traduce la oración al inglés.",
        "source": "Espero que tengas un buen viaje.",
        "answer": "I hope you have a good trip.",
        "explanation": "Espero que + subjuntivo expresa un deseo sobre otra persona."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Traduce la oración al español.",
        "source": "I hope we arrive on time.",
        "answer": "Espero que lleguemos a tiempo.",
        "altAnswers": [
          "Ojalá que lleguemos a tiempo."
        ],
        "explanation": "Llegar cambia g→gu antes de e; en nosotros: lleguemos."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras.",
        "words": [
          "Es",
          "posible",
          "que",
          "ellos",
          "no",
          "sepan",
          "la",
          "verdad"
        ],
        "translation": "It's possible that they don't know the truth.",
        "explanation": "Es posible que + subjuntivo expresa una posibilidad; saber es irregular: sepan."
      },
      {
        "type": "matching",
        "instructions": "Empareja cada verbo con su forma correcta de subjuntivo para \"yo\".",
        "pairs": [
          {
            "left": "hablar",
            "right": "hable"
          },
          {
            "left": "comer",
            "right": "coma"
          },
          {
            "left": "buscar",
            "right": "busque"
          },
          {
            "left": "pensar",
            "right": "piense"
          },
          {
            "left": "dormir",
            "right": "duerma"
          },
          {
            "left": "ser",
            "right": "sea"
          },
          {
            "left": "tener",
            "right": "tenga"
          },
          {
            "left": "ir",
            "right": "vaya"
          }
        ],
        "explanation": "Estos ocho verbos representan las seis categorías de formación del subjuntivo presente."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con la forma correcta.",
        "sentence": "Es probable que ella ___ (conocer) a mi hermano.",
        "answer": "conozca",
        "explanation": "Conocer es irregular en \"yo\" (conozco), y esa raíz pasa a todo el subjuntivo: conozca."
      }
    ]
  },
  {
    "slug": "subjunctive-wishes-doubt-emotion-drill-1",
    "level": "B1",
    "number": 32,
    "title": "Subjuntivo con Deseos, Duda y Emoción: Práctica Extra, Part 1 of 3",
    "summary": "Esta lección es práctica adicional para repasar el subjuntivo con verbos de deseo, duda y emoción ya estudiados.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Verbos de deseo: querer que, esperar que, desear que",
        "body": [
          "Cuando el sujeto de la oración principal desea algo para otra persona, el verbo que sigue a 'que' va en subjuntivo."
        ],
        "examples": [
          {
            "es": "Quiero que vengas a la fiesta.",
            "en": "I want you to come to the party."
          },
          {
            "es": "Esperamos que ella apruebe el examen.",
            "en": "We hope she passes the exam."
          },
          {
            "es": "Mis padres desean que yo sea feliz.",
            "en": "My parents wish that I be happy."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa con la forma correcta del subjuntivo.",
            "sentence": "Quiero que (tú) ___ (venir) conmigo al cine.",
            "answer": "vengas",
            "hint": "verbo venir, presente de subjuntivo",
            "explanation": "Como hay cambio de sujeto (yo quiero / tú vengas), se usa el subjuntivo después de 'que'."
          },
          {
            "type": "multiple-choice",
            "question": "¿Cuál oración usa correctamente el subjuntivo?",
            "options": [
              "Esperan que nosotros ganemos el partido.",
              "Esperan que nosotros ganamos el partido.",
              "Esperan que nosotros ganaremos el partido.",
              "Esperan que nosotros ganar el partido."
            ],
            "correctIndex": 0,
            "explanation": "Después de 'esperar que' con cambio de sujeto se necesita el subjuntivo: ganemos, no el indicativo ni el infinitivo."
          }
        ]
      },
      {
        "heading": "Duda y negación: dudar que, no creer que, negar que",
        "body": [
          "Los verbos que expresan duda o negación exigen subjuntivo, pero sus opuestos afirmativos (creer que, no dudar que) llevan indicativo."
        ],
        "examples": [
          {
            "es": "Dudo que él tenga razón.",
            "en": "I doubt he is right."
          },
          {
            "es": "No creo que llueva mañana.",
            "en": "I don't think it will rain tomorrow."
          },
          {
            "es": "No dudo que ella es inteligente.",
            "en": "I don't doubt that she is intelligent."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa con indicativo o subjuntivo según corresponda.",
            "sentence": "No dudo que tú ___ (ser) capaz de lograrlo.",
            "answer": "eres",
            "hint": "no dudar que + indicativo",
            "explanation": "'No dudar que' expresa certeza, así que se usa el indicativo: eres."
          },
          {
            "type": "multiple-choice",
            "question": "Elige la opción correcta: 'Niego que ellos ___ la verdad.'",
            "options": [
              "dicen",
              "dijeron",
              "digan",
              "decir"
            ],
            "correctIndex": 2,
            "explanation": "'Negar que' expresa negación y requiere subjuntivo: digan."
          }
        ]
      },
      {
        "heading": "Verbos de emoción: alegrarse de que, temer que, sentir que, sorprender que",
        "body": [
          "Cuando el verbo principal expresa una emoción o reacción, la cláusula con 'que' va en subjuntivo, sin importar si la emoción es positiva o negativa."
        ],
        "examples": [
          {
            "es": "Me alegro de que estés aquí.",
            "en": "I'm glad you're here."
          },
          {
            "es": "Temo que perdamos el vuelo.",
            "en": "I fear we'll miss the flight."
          },
          {
            "es": "Nos sorprende que no hayan llamado.",
            "en": "It surprises us that they haven't called."
          }
        ],
        "checkpoint": [
          {
            "type": "translate",
            "direction": "en-es",
            "prompt": "Traduce la oración usando el subjuntivo.",
            "source": "I'm sorry that you can't come.",
            "answer": "Siento que no puedas venir.",
            "altAnswers": [
              "Lamento que no puedas venir."
            ],
            "explanation": "'Sentir que' expresa emoción y requiere subjuntivo: puedas."
          },
          {
            "type": "fill-blank",
            "prompt": "Completa con el subjuntivo.",
            "sentence": "Nos sorprende que tú no ___ (saber) la noticia.",
            "answer": "sepas",
            "explanation": "'Sorprender que' es una expresión de emoción; se usa el subjuntivo: sepas."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "¿Cuál oración es correcta?",
        "options": [
          "Espero que tú estés bien.",
          "Espero que tú estás bien.",
          "Espero que tú ser bien.",
          "Espero tú estés bien."
        ],
        "correctIndex": 0,
        "explanation": "'Esperar que' con cambio de sujeto requiere subjuntivo: estés."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa con el subjuntivo.",
        "sentence": "Mis padres quieren que yo ___ (estudiar) medicina.",
        "answer": "estudie",
        "explanation": "'Querer que' con cambio de sujeto exige subjuntivo: estudie."
      },
      {
        "type": "translate",
        "direction": "es-en",
        "prompt": "Traduce la oración al inglés.",
        "source": "Dudo que él llegue a tiempo.",
        "answer": "I doubt he'll arrive on time.",
        "altAnswers": [
          "I doubt that he will arrive on time."
        ],
        "explanation": "'Dudar que' expresa incertidumbre; en español requiere subjuntivo (llegue), aunque en inglés se traduce con futuro simple."
      },
      {
        "type": "multiple-choice",
        "question": "¿Qué verbo principal NO requiere subjuntivo?",
        "options": [
          "dudar que",
          "negar que",
          "creer que (afirmativo)",
          "es una lástima que"
        ],
        "correctIndex": 2,
        "explanation": "'Creer que' en forma afirmativa expresa certeza y lleva indicativo; los demás requieren subjuntivo."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con la forma correcta.",
        "sentence": "No creo que ellos ___ (tener) tiempo para venir.",
        "answer": "tengan",
        "explanation": "'No creer que' expresa duda y requiere subjuntivo: tengan."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras para formar una oración correcta.",
        "words": [
          "me",
          "alegro",
          "de",
          "que",
          "vengas"
        ],
        "translation": "I'm glad that you're coming.",
        "explanation": "'Alegrarse de que' es una expresión de emoción y requiere subjuntivo: vengas."
      }
    ]
  },
  {
    "slug": "subjunctive-wishes-doubt-emotion-drill-2",
    "level": "B1",
    "number": 33,
    "title": "Subjuntivo con Deseos, Duda y Emoción: Práctica Extra, Part 2 of 3",
    "summary": "Esta lección es práctica adicional para repasar el subjuntivo con verbos de deseo, duda y emoción ya estudiados.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "Expresiones impersonales de emoción y opinión",
        "body": [
          "Las expresiones impersonales como 'es una lástima que' o 'es sorprendente que' también van seguidas de subjuntivo cuando expresan emoción, duda o valoración subjetiva."
        ],
        "examples": [
          {
            "es": "Es una lástima que no puedas venir a la boda.",
            "en": "It's a shame you can't come to the wedding."
          },
          {
            "es": "Es sorprendente que ellos hayan terminado tan rápido.",
            "en": "It's surprising that they finished so fast."
          },
          {
            "es": "Es posible que llegue tarde.",
            "en": "It's possible that I'll arrive late."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Qué expresión requiere subjuntivo?",
            "options": [
              "Es verdad que...",
              "Es obvio que...",
              "Es una lástima que...",
              "Es cierto que..."
            ],
            "correctIndex": 2,
            "explanation": "Las expresiones de valoración subjetiva como 'es una lástima que' requieren subjuntivo; las de certeza (es verdad, es obvio, es cierto) llevan indicativo."
          },
          {
            "type": "fill-blank",
            "prompt": "Completa la oración impersonal con subjuntivo.",
            "sentence": "Es sorprendente que ella ___ (hablar) cuatro idiomas.",
            "answer": "hable",
            "explanation": "'Es sorprendente que' expresa valoración subjetiva y pide subjuntivo: hable."
          }
        ]
      },
      {
        "heading": "Infinitivo vs. subjuntivo: mismo sujeto o sujeto distinto",
        "body": [
          "Si el sujeto de las dos partes de la oración es el mismo, se usa el infinitivo; si cambia el sujeto, se usa 'que' + subjuntivo."
        ],
        "examples": [
          {
            "es": "Quiero ir al cine.",
            "en": "I want to go to the movies."
          },
          {
            "es": "Quiero que vayas al cine.",
            "en": "I want you to go to the movies."
          },
          {
            "es": "Prefiero salir temprano.",
            "en": "I prefer to leave early."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Cuál es la oración correcta si el sujeto cambia?",
            "options": [
              "Espero llegar a tiempo.",
              "Espero que llegues a tiempo.",
              "Espero que llegar a tiempo.",
              "Espero llegue a tiempo."
            ],
            "correctIndex": 1,
            "explanation": "Como el sujeto cambia (yo espero / tú llegues), se necesita 'que' + subjuntivo: llegues."
          },
          {
            "type": "word-order",
            "prompt": "Ordena las palabras para formar una oración lógica.",
            "words": [
              "quiero",
              "que",
              "estudies",
              "más"
            ],
            "translation": "I want you to study more.",
            "explanation": "Con cambio de sujeto se usa 'quiero que' + subjuntivo: quiero que estudies más."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multi-select",
        "question": "¿Qué oraciones expresan emoción y usan correctamente el subjuntivo?",
        "options": [
          "Siento que no puedas quedarte.",
          "Siento que no puedes quedarte.",
          "Nos sorprende que hayan llegado tarde.",
          "Es obvio que hayan llegado tarde."
        ],
        "correctIndexes": [
          0,
          2
        ],
        "explanation": "'Sentir que' y 'sorprender que' son expresiones de emoción y requieren subjuntivo (puedas, hayan llegado); las otras opciones usan mal el modo."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Traduce usando una expresión impersonal + subjuntivo.",
        "source": "It's a shame that you can't travel with us.",
        "answer": "Es una lástima que no puedas viajar con nosotros.",
        "altAnswers": [
          "Es una pena que no puedas viajar con nosotros."
        ],
        "explanation": "'Es una lástima que' exige subjuntivo: puedas."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa con indicativo o subjuntivo.",
        "sentence": "Es evidente que ella ___ (saber) la verdad.",
        "answer": "sabe",
        "explanation": "'Es evidente que' expresa certeza y lleva indicativo: sabe."
      },
      {
        "type": "multiple-choice",
        "question": "¿Cuál oración refleja mismo sujeto (infinitivo)?",
        "options": [
          "Quiero que salgas temprano.",
          "Quiero salir temprano.",
          "Quiero que salga temprano.",
          "Quiero que salgamos temprano."
        ],
        "correctIndex": 1,
        "explanation": "Cuando el sujeto es el mismo en ambas partes, se usa el infinitivo: quiero salir."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras para formar una oración lógica.",
        "words": [
          "esperamos",
          "que",
          "ustedes",
          "disfruten",
          "del",
          "viaje"
        ],
        "translation": "We hope you all enjoy the trip.",
        "explanation": "'Esperar que' con cambio de sujeto requiere subjuntivo: disfruten."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa con la forma correcta del verbo.",
        "sentence": "Es sorprendente que tú no ___ (conocer) este restaurante.",
        "answer": "conozcas",
        "explanation": "'Es sorprendente que' expresa valoración subjetiva y exige subjuntivo: conozcas."
      }
    ]
  },
  {
    "slug": "subjunctive-wishes-doubt-emotion-drill-3",
    "level": "B1",
    "number": 34,
    "title": "Subjuntivo con Deseos, Duda y Emoción: Práctica Extra, Part 3 of 3",
    "summary": "Esta lección es práctica adicional para repasar el subjuntivo con verbos de deseo, duda y emoción ya estudiados.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "Repaso de disparadores comunes del subjuntivo",
        "body": [
          "Repasa distintos disparadores del subjuntivo —deseo, duda, emoción— combinados con varios sujetos para practicar las conjugaciones."
        ],
        "examples": [
          {
            "es": "Ojalá que todos aprueben el curso.",
            "en": "Hopefully everyone passes the course."
          },
          {
            "es": "Es importante que ustedes lleguen puntuales.",
            "en": "It's important that you all arrive on time."
          },
          {
            "es": "No pienso que él tenga la culpa.",
            "en": "I don't think he's to blame."
          }
        ],
        "checkpoint": [
          {
            "type": "multi-select",
            "question": "¿Qué oraciones usan correctamente el subjuntivo?",
            "options": [
              "Ojalá que llueva pronto.",
              "Es importante que estudien más.",
              "Creo que ella viene mañana.",
              "No pienso que él sepa la respuesta."
            ],
            "correctIndexes": [
              0,
              1,
              3
            ],
            "explanation": "'Ojalá que', 'es importante que' y 'no pensar que' requieren subjuntivo (llueva, estudien, sepa); 'creer que' afirmativo lleva indicativo (viene)."
          },
          {
            "type": "fill-blank",
            "prompt": "Completa con el subjuntivo correcto.",
            "sentence": "Ojalá que (nosotros) ___ (poder) viajar este verano.",
            "answer": "podamos",
            "explanation": "'Ojalá que' siempre exige subjuntivo: podamos."
          }
        ]
      },
      {
        "heading": "Práctica mixta: indicativo o subjuntivo",
        "body": [
          "Antes de conjugar, identifica si el verbo principal expresa certeza (indicativo) o deseo, duda, emoción u opinión (subjuntivo)."
        ],
        "examples": [
          {
            "es": "Sé que ella trabaja los sábados.",
            "en": "I know she works on Saturdays."
          },
          {
            "es": "Dudo que ella trabaje los sábados.",
            "en": "I doubt she works on Saturdays."
          },
          {
            "es": "Me alegra que trabaje cerca de casa.",
            "en": "I'm glad she works close to home."
          }
        ],
        "checkpoint": [
          {
            "type": "matching",
            "instructions": "Empareja cada verbo principal con el modo que exige.",
            "pairs": [
              {
                "left": "creer que (afirmativo)",
                "right": "indicativo"
              },
              {
                "left": "dudar que",
                "right": "subjuntivo"
              },
              {
                "left": "es obvio que",
                "right": "indicativo"
              },
              {
                "left": "alegrarse de que",
                "right": "subjuntivo"
              }
            ],
            "explanation": "Los verbos de certeza (creer, es obvio) llevan indicativo; los de duda o emoción (dudar, alegrarse) llevan subjuntivo."
          },
          {
            "type": "fill-blank",
            "prompt": "Elige la forma correcta según el verbo principal.",
            "sentence": "Sé que mi hermano ___ (estudiar) medicina.",
            "answer": "estudia",
            "explanation": "'Saber que' expresa certeza, así que se usa el indicativo: estudia."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "¿Qué opción completa correctamente: 'No dudamos que ella ___ el puesto.'?",
        "options": [
          "merezca",
          "merece",
          "merecer",
          "mereció"
        ],
        "correctIndex": 1,
        "explanation": "'No dudar que' expresa certeza, por lo que se usa el indicativo: merece."
      },
      {
        "type": "translate",
        "direction": "es-en",
        "prompt": "Traduce la oración al inglés.",
        "source": "Tememos que el vuelo se retrase.",
        "answer": "We're afraid the flight will be delayed.",
        "altAnswers": [
          "We fear that the flight will be delayed."
        ],
        "explanation": "'Temer que' es un verbo de emoción y en español requiere subjuntivo: retrase."
      },
      {
        "type": "matching",
        "instructions": "Empareja cada expresión con el modo verbal que exige.",
        "pairs": [
          {
            "left": "es cierto que",
            "right": "indicativo"
          },
          {
            "left": "es posible que",
            "right": "subjuntivo"
          },
          {
            "left": "negar que",
            "right": "subjuntivo"
          },
          {
            "left": "estar seguro de que",
            "right": "indicativo"
          }
        ],
        "explanation": "Las expresiones de certeza (es cierto que, estar seguro de que) llevan indicativo; las de duda o posibilidad (es posible que, negar que) llevan subjuntivo."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con el subjuntivo.",
        "sentence": "Ojalá que (nosotros) ___ (encontrar) una solución pronto.",
        "answer": "encontremos",
        "explanation": "'Ojalá que' siempre requiere subjuntivo: encontremos."
      },
      {
        "type": "multi-select",
        "question": "¿Qué oraciones necesitan subjuntivo porque hay cambio de sujeto y deseo/emoción?",
        "options": [
          "Quiero que vayas a la reunión.",
          "Quiero ir a la reunión.",
          "Nos alegra que hayas venido.",
          "Sabemos que has venido."
        ],
        "correctIndexes": [
          0,
          2
        ],
        "explanation": "'Quiero que vayas' y 'nos alegra que hayas venido' tienen cambio de sujeto con deseo/emoción, así que requieren subjuntivo; las otras usan infinitivo (mismo sujeto) o indicativo (certeza)."
      }
    ]
  },
  {
    "slug": "subjunctive-impersonal-ojala-drill-1",
    "level": "B1",
    "number": 35,
    "title": "Subjuntivo con Expresiones Impersonales y Ojalá: Práctica Extra, Part 1 of 3",
    "summary": "Esta lección ofrece práctica adicional para reforzar el uso del subjuntivo con expresiones impersonales y con ojalá.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "Expresiones impersonales de necesidad",
        "body": [
          "Recuerda: expresiones como es necesario que, es importante que y hace falta que siempre llevan subjuntivo cuando hay un sujeto específico."
        ],
        "examples": [
          {
            "es": "Es necesario que todos lleguemos a tiempo.",
            "en": "It's necessary that we all arrive on time."
          },
          {
            "es": "Hace falta que alguien lo explique mejor.",
            "en": "Someone needs to explain it better."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa con la forma correcta del subjuntivo.",
            "sentence": "Es importante que tú ___ (estudiar) para el examen.",
            "answer": "estudies",
            "hint": "presente de subjuntivo, segunda persona singular",
            "explanation": "Después de es importante que con un sujeto específico (tú), se usa el subjuntivo: estudies."
          },
          {
            "type": "multiple-choice",
            "question": "Es necesario que nosotros ___ el proyecto hoy.",
            "options": [
              "terminemos",
              "terminamos",
              "terminaremos",
              "terminar"
            ],
            "correctIndex": 0,
            "explanation": "Es necesario que exige subjuntivo; la forma de nosotros es terminemos."
          }
        ]
      },
      {
        "heading": "Expresiones impersonales de posibilidad y probabilidad",
        "body": [
          "Las expresiones de posibilidad y probabilidad, como es posible que, es probable que y puede que, también requieren subjuntivo porque no expresan certeza."
        ],
        "examples": [
          {
            "es": "Es posible que llueva esta tarde.",
            "en": "It's possible that it will rain this afternoon."
          },
          {
            "es": "Puede que ellos ya lo sepan.",
            "en": "They might already know it."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa con la forma correcta del subjuntivo.",
            "sentence": "Es probable que ella ___ (llegar) tarde.",
            "answer": "llegue",
            "hint": "presente de subjuntivo",
            "explanation": "Es probable que expresa duda, así que se necesita el subjuntivo: llegue."
          },
          {
            "type": "multiple-choice",
            "question": "Puede que no ___ (haber) suficiente tiempo.",
            "options": [
              "haya",
              "hay",
              "habrá",
              "había"
            ],
            "correctIndex": 0,
            "explanation": "Puede que siempre va seguido de subjuntivo; la forma impersonal de haber es haya."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "Es necesario que nosotros ___ el informe hoy mismo.",
        "options": [
          "terminemos",
          "terminamos",
          "terminaremos",
          "terminar"
        ],
        "correctIndex": 0,
        "explanation": "Es necesario que + sujeto específico requiere subjuntivo: terminemos."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa con la forma correcta del subjuntivo.",
        "sentence": "Es probable que ella ___ (llegar) tarde a la reunión.",
        "answer": "llegue",
        "hint": "presente de subjuntivo",
        "explanation": "Es probable que expresa duda, por lo que se necesita el subjuntivo: llegue."
      },
      {
        "type": "multi-select",
        "question": "¿Cuáles de estas expresiones requieren subjuntivo?",
        "options": [
          "es posible que",
          "es verdad que",
          "es importante que",
          "es obvio que",
          "puede que",
          "es cierto que"
        ],
        "correctIndexes": [
          0,
          2,
          4
        ],
        "explanation": "Es posible que, es importante que y puede que expresan duda o necesidad y llevan subjuntivo; las demás expresan certeza y llevan indicativo."
      },
      {
        "type": "translate",
        "direction": "es-en",
        "prompt": "Traduce la oración al inglés.",
        "source": "Ojalá que todos estén bien.",
        "answer": "I hope everyone is well.",
        "altAnswers": [
          "Hopefully everyone is well."
        ],
        "explanation": "Ojalá que expresa un deseo y siempre va seguido de subjuntivo: estén."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Traduce la oración al español.",
        "source": "It's necessary that you (tú) finish the report.",
        "answer": "Es necesario que termines el informe.",
        "altAnswers": [
          "Es necesario que tú termines el informe."
        ],
        "explanation": "Con un sujeto específico, es necesario que exige subjuntivo: termines."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras para formar una oración correcta.",
        "words": [
          "Es",
          "importante",
          "que",
          "estudiemos",
          "más"
        ],
        "translation": "It's important that we study more.",
        "explanation": "Con sujeto específico (nosotros), se usa que + subjuntivo: que estudiemos."
      }
    ]
  },
  {
    "slug": "subjunctive-impersonal-ojala-drill-2",
    "level": "B1",
    "number": 36,
    "title": "Subjuntivo con Expresiones Impersonales y Ojalá: Práctica Extra, Part 2 of 3",
    "summary": "Esta lección ofrece práctica adicional para reforzar el uso del subjuntivo con expresiones impersonales y con ojalá.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "Contraste: certeza (indicativo) frente a duda (subjuntivo)",
        "body": [
          "Ojo: las expresiones que afirman certeza, como es verdad que, es obvio que y es cierto que, llevan indicativo, no subjuntivo."
        ],
        "examples": [
          {
            "es": "Es verdad que el examen es difícil.",
            "en": "It's true that the exam is hard."
          },
          {
            "es": "Es obvio que ella tiene razón.",
            "en": "It's obvious that she is right."
          }
        ],
        "checkpoint": [
          {
            "type": "multi-select",
            "question": "¿Cuáles expresiones van seguidas de subjuntivo?",
            "options": [
              "es posible que",
              "es verdad que",
              "es importante que",
              "es obvio que",
              "puede que",
              "es cierto que"
            ],
            "correctIndexes": [
              0,
              2,
              4
            ],
            "explanation": "Es posible que, es importante que y puede que expresan duda o necesidad y llevan subjuntivo; las otras expresan certeza y llevan indicativo."
          },
          {
            "type": "fill-blank",
            "prompt": "Completa con la forma correcta.",
            "sentence": "Es cierto que él ___ (saber) la respuesta.",
            "answer": "sabe",
            "hint": "presente de indicativo",
            "explanation": "Es cierto que expresa certeza, por lo que se usa el indicativo: sabe."
          }
        ]
      },
      {
        "heading": "Ojalá (que) + subjuntivo",
        "body": [
          "Ojalá (que) expresa un deseo o una esperanza y siempre va seguido del subjuntivo, con o sin la palabra que."
        ],
        "examples": [
          {
            "es": "Ojalá que apruebes el examen.",
            "en": "I hope you pass the exam."
          },
          {
            "es": "Ojalá tengamos buen tiempo mañana.",
            "en": "I hope we have good weather tomorrow."
          }
        ],
        "checkpoint": [
          {
            "type": "translate",
            "direction": "en-es",
            "prompt": "Traduce la oración usando ojalá.",
            "source": "I hope everyone is well.",
            "answer": "Ojalá que todos estén bien.",
            "altAnswers": [
              "Ojalá todos estén bien."
            ],
            "explanation": "Ojalá (que) siempre lleva subjuntivo: estén."
          },
          {
            "type": "fill-blank",
            "prompt": "Completa con la forma correcta del subjuntivo.",
            "sentence": "Ojalá no ___ (llover) mañana.",
            "answer": "llueva",
            "hint": "presente de subjuntivo",
            "explanation": "Después de ojalá siempre se usa el subjuntivo: llueva."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "Es obvio que ella ___ razón.",
        "options": [
          "tiene",
          "tenga",
          "tendría",
          "tuviera"
        ],
        "correctIndex": 0,
        "explanation": "Es obvio que expresa certeza y lleva indicativo: tiene."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa con la forma correcta del subjuntivo.",
        "sentence": "Puede que no ___ (haber) suficiente tiempo.",
        "answer": "haya",
        "hint": "presente de subjuntivo de haber",
        "explanation": "Puede que siempre lleva subjuntivo; la forma impersonal de haber es haya."
      },
      {
        "type": "matching",
        "instructions": "Empareja cada expresión con el modo verbal que exige.",
        "pairs": [
          {
            "left": "es necesario que",
            "right": "subjuntivo"
          },
          {
            "left": "es verdad que",
            "right": "indicativo"
          },
          {
            "left": "ojalá que",
            "right": "subjuntivo"
          },
          {
            "left": "es obvio que",
            "right": "indicativo"
          },
          {
            "left": "puede que",
            "right": "subjuntivo"
          }
        ],
        "explanation": "Las expresiones de duda, deseo o necesidad llevan subjuntivo; las de certeza llevan indicativo."
      },
      {
        "type": "multiple-choice",
        "question": "Es necesario ___ temprano para conseguir buenos asientos. (sin sujeto específico)",
        "options": [
          "llegar",
          "lleguemos",
          "llegamos",
          "llegaríamos"
        ],
        "correctIndex": 0,
        "explanation": "Sin un sujeto específico, se usa el infinitivo en vez de que + subjuntivo: llegar."
      },
      {
        "type": "translate",
        "direction": "es-en",
        "prompt": "Traduce la oración al inglés.",
        "source": "Tal vez tengamos suerte.",
        "answer": "Maybe we'll be lucky.",
        "altAnswers": [
          "Maybe we will have luck.",
          "Perhaps we'll be lucky."
        ],
        "explanation": "Tal vez + subjuntivo (tengamos) expresa una posibilidad incierta."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa con la forma correcta.",
        "sentence": "Es cierto que él ___ (saber) la respuesta.",
        "answer": "sabe",
        "hint": "presente de indicativo",
        "explanation": "Es cierto que expresa certeza, por lo que se usa el indicativo: sabe."
      }
    ]
  },
  {
    "slug": "subjunctive-impersonal-ojala-drill-3",
    "level": "B1",
    "number": 37,
    "title": "Subjuntivo con Expresiones Impersonales y Ojalá: Práctica Extra, Part 3 of 3",
    "summary": "Esta lección ofrece práctica adicional para reforzar el uso del subjuntivo con expresiones impersonales y con ojalá.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Quizás y tal vez + subjuntivo",
        "body": [
          "Quizás y tal vez suelen llevar subjuntivo cuando expresan duda sobre algo futuro o incierto."
        ],
        "examples": [
          {
            "es": "Quizás venga más tarde.",
            "en": "Maybe she'll come later."
          },
          {
            "es": "Tal vez no lo sepan todavía.",
            "en": "Maybe they don't know yet."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "Quizás ella ___ (venir) a la fiesta.",
            "options": [
              "venga",
              "viene",
              "vendrá",
              "vino"
            ],
            "correctIndex": 0,
            "explanation": "Cuando quizás expresa duda, se prefiere el subjuntivo: venga."
          },
          {
            "type": "translate",
            "direction": "es-en",
            "prompt": "Traduce la oración al inglés.",
            "source": "Tal vez tengamos suerte.",
            "answer": "Maybe we'll be lucky.",
            "altAnswers": [
              "Maybe we will have luck.",
              "Perhaps we'll be lucky."
            ],
            "explanation": "Tal vez + subjuntivo (tengamos) expresa una posibilidad incierta sobre el futuro."
          }
        ]
      },
      {
        "heading": "Infinitivo frente a que + subjuntivo",
        "body": [
          "Cuando la expresión impersonal no tiene un sujeto específico, se usa el infinitivo en vez de que + subjuntivo."
        ],
        "examples": [
          {
            "es": "Es importante estudiar todos los días.",
            "en": "It's important to study every day."
          },
          {
            "es": "Es importante que estudies todos los días.",
            "en": "It's important that you study every day."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "Es necesario ___ temprano. (sin sujeto específico)",
            "options": [
              "llegar",
              "lleguemos",
              "llegamos",
              "llegaríamos"
            ],
            "correctIndex": 0,
            "explanation": "Sin un sujeto específico, se usa el infinitivo: llegar."
          },
          {
            "type": "word-order",
            "prompt": "Ordena las palabras para formar una oración correcta.",
            "words": [
              "Es",
              "importante",
              "que",
              "estudiemos",
              "más"
            ],
            "translation": "It's important that we study more.",
            "explanation": "Con un sujeto específico (nosotros), se usa que + subjuntivo: que estudiemos."
          }
        ]
      },
      {
        "heading": "Práctica mixta",
        "body": [
          "En esta sección combinamos todas las estructuras para reforzar cuándo usar indicativo, subjuntivo o infinitivo."
        ],
        "examples": [
          {
            "es": "Es probable que lleguemos tarde, pero es verdad que salimos a tiempo.",
            "en": "We'll probably arrive late, but it's true that we left on time."
          }
        ],
        "checkpoint": [
          {
            "type": "matching",
            "instructions": "Empareja cada expresión impersonal con el modo verbal que exige.",
            "pairs": [
              {
                "left": "es necesario que",
                "right": "subjuntivo"
              },
              {
                "left": "es verdad que",
                "right": "indicativo"
              },
              {
                "left": "ojalá que",
                "right": "subjuntivo"
              },
              {
                "left": "es obvio que",
                "right": "indicativo"
              },
              {
                "left": "puede que",
                "right": "subjuntivo"
              }
            ],
            "explanation": "Las expresiones de duda, deseo o necesidad llevan subjuntivo; las de certeza llevan indicativo."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multi-select",
        "question": "¿Cuáles oraciones están escritas correctamente?",
        "options": [
          "Es verdad que él trabaja mucho.",
          "Es posible que él trabaja mucho.",
          "Ojalá que él trabaje mucho.",
          "Es obvio que él trabaje mucho."
        ],
        "correctIndexes": [
          0,
          2
        ],
        "explanation": "Es verdad que lleva indicativo (trabaja) y ojalá que lleva subjuntivo (trabaje); las otras dos combinan mal la expresión con el modo verbal."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras para formar una oración correcta.",
        "words": [
          "Ojalá",
          "no",
          "llueva",
          "mañana"
        ],
        "translation": "I hope it doesn't rain tomorrow.",
        "explanation": "Ojalá siempre va seguido del subjuntivo: llueva."
      },
      {
        "type": "multiple-choice",
        "question": "Quizás ella ___ a la fiesta esta noche.",
        "options": [
          "venga",
          "viene",
          "vendrá",
          "vino"
        ],
        "correctIndex": 0,
        "explanation": "Cuando quizás expresa duda sobre el futuro, se prefiere el subjuntivo: venga."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa con el infinitivo o el subjuntivo, según corresponda.",
        "sentence": "Es importante ___ (llegar) a tiempo para todos los pasajeros.",
        "answer": "llegar",
        "hint": "no hay sujeto específico",
        "explanation": "Sin sujeto específico, se usa el infinitivo: llegar, en vez de que + subjuntivo."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Traduce la oración al español.",
        "source": "It's obvious that they are tired.",
        "answer": "Es obvio que están cansados.",
        "altAnswers": [
          "Es obvio que ellos están cansados."
        ],
        "explanation": "Es obvio que expresa certeza y lleva indicativo: están."
      }
    ]
  },
  {
    "slug": "commands-drill-1",
    "level": "B1",
    "number": 38,
    "title": "Los Mandatos: Práctica Extra, Part 1 of 3",
    "summary": "Esta lección es práctica adicional para reforzar los mandatos afirmativos y negativos con tú, usted, ustedes y nosotros, incluyendo la colocación de pronombres.",
    "duration": "9 min",
    "sections": [
      {
        "heading": "Mandatos afirmativos regulares con tú",
        "body": [
          "Los mandatos afirmativos regulares con tú usan la misma forma que él/ella en el presente de indicativo."
        ],
        "examples": [
          {
            "es": "Habla más despacio.",
            "en": "Speak more slowly."
          },
          {
            "es": "Come las verduras.",
            "en": "Eat the vegetables."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa el mandato afirmativo con tú.",
            "sentence": "___ (cerrar) la puerta, por favor.",
            "answer": "Cierra",
            "hint": "Usa la forma de él/ella en presente.",
            "explanation": "El mandato afirmativo regular con tú usa la forma de él/ella del presente de indicativo: cierra."
          }
        ]
      },
      {
        "heading": "Mandatos afirmativos irregulares con tú",
        "body": [
          "Ocho verbos tienen una forma irregular especial para el mandato afirmativo con tú: ven, ten, sal, pon, haz, di, ve y sé."
        ],
        "examples": [
          {
            "es": "Ven aquí ahora mismo.",
            "en": "Come here right now."
          },
          {
            "es": "Sé paciente con tu hermano.",
            "en": "Be patient with your brother."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Cuál es el mandato afirmativo correcto con tú para 'hacer'?",
            "options": [
              "Hace",
              "Haz",
              "Hagas",
              "Haces"
            ],
            "correctIndex": 1,
            "explanation": "El mandato afirmativo irregular con tú de 'hacer' es 'haz', no la forma regular."
          }
        ]
      },
      {
        "heading": "Mandatos negativos con tú",
        "body": [
          "Los mandatos negativos con tú se forman con el presente de subjuntivo, nunca con la forma afirmativa irregular."
        ],
        "examples": [
          {
            "es": "No hables tan rápido.",
            "en": "Don't speak so fast."
          },
          {
            "es": "No vengas tarde.",
            "en": "Don't come late."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa el mandato negativo con tú.",
            "sentence": "No ___ (salir) sin avisarme.",
            "answer": "salgas",
            "hint": "Usa el presente de subjuntivo.",
            "explanation": "Los mandatos negativos con tú requieren el presente de subjuntivo: no salgas."
          },
          {
            "type": "translate",
            "direction": "en-es",
            "prompt": "Traduce al español usando un mandato negativo con tú.",
            "source": "Don't do that.",
            "answer": "No hagas eso.",
            "explanation": "El mandato negativo de 'hacer' con tú en subjuntivo es 'no hagas'."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "¿Cuál es el mandato afirmativo correcto con tú de 'escribir'?",
        "options": [
          "Escribe",
          "Escribes",
          "Escribas",
          "Escribo"
        ],
        "correctIndex": 0,
        "explanation": "El mandato afirmativo regular con tú usa la forma de él/ella: escribe."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa el mandato afirmativo irregular con tú.",
        "sentence": "___ (poner) la mesa antes de comer.",
        "answer": "Pon",
        "hint": "Es uno de los ocho verbos irregulares.",
        "explanation": "El mandato afirmativo irregular con tú de 'poner' es 'pon'."
      },
      {
        "type": "translate",
        "direction": "es-en",
        "prompt": "Traduce al inglés.",
        "source": "No te preocupes por eso.",
        "answer": "Don't worry about that.",
        "explanation": "'No te preocupes' es el mandato negativo con tú del verbo reflexivo 'preocuparse'."
      },
      {
        "type": "multi-select",
        "question": "¿Qué oraciones usan correctamente el mandato con usted?",
        "options": [
          "Venga temprano mañana.",
          "Viene temprano mañana.",
          "No pierda la paciencia.",
          "No pierde la paciencia."
        ],
        "correctIndexes": [
          0,
          2
        ],
        "explanation": "Los mandatos con usted usan el subjuntivo: 'venga' y 'no pierda' son correctos."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras para formar un mandato de nosotros.",
        "words": [
          "Vamos",
          "a",
          "empezar",
          "la",
          "reunión"
        ],
        "translation": "Let's start the meeting.",
        "explanation": "'Vamos a' + infinitivo es una forma común del mandato de nosotros."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa con la forma correcta del mandato de nosotros.",
        "sentence": "No ___ (ir) todavía, esperemos un poco.",
        "answer": "vayamos",
        "hint": "Es la excepción del verbo ir en negativo.",
        "explanation": "El mandato negativo de nosotros con 'ir' es siempre 'no vayamos', usando el subjuntivo."
      }
    ]
  },
  {
    "slug": "commands-drill-2",
    "level": "B1",
    "number": 39,
    "title": "Los Mandatos: Práctica Extra, Part 2 of 3",
    "summary": "Esta lección es práctica adicional para reforzar los mandatos afirmativos y negativos con tú, usted, ustedes y nosotros, incluyendo la colocación de pronombres.",
    "duration": "9 min",
    "sections": [
      {
        "heading": "Mandatos con usted y ustedes",
        "body": [
          "Los mandatos con usted y ustedes, afirmativos y negativos, siempre usan la forma del presente de subjuntivo."
        ],
        "examples": [
          {
            "es": "Hable más alto, por favor.",
            "en": "Speak louder, please."
          },
          {
            "es": "No se preocupen tanto.",
            "en": "Don't worry so much."
          }
        ],
        "checkpoint": [
          {
            "type": "multi-select",
            "question": "¿Qué mandatos con usted/ustedes están formados correctamente?",
            "options": [
              "Hable despacio.",
              "Habla despacio.",
              "No coman eso.",
              "No comen eso."
            ],
            "correctIndexes": [
              0,
              2
            ],
            "explanation": "Con usted y ustedes se usa siempre el subjuntivo: 'hable' y 'no coman' son correctos; 'habla' es forma de tú y 'no comen' es indicativo."
          }
        ]
      },
      {
        "heading": "Mandatos con nosotros",
        "body": [
          "Para el mandato de nosotros se usa 'vamos a' + infinitivo o la forma de subjuntivo, excepto en el caso especial de ir: 'vamos' en afirmativo y 'no vayamos' en negativo."
        ],
        "examples": [
          {
            "es": "Vamos a comer algo.",
            "en": "Let's eat something."
          },
          {
            "es": "No vayamos a esa fiesta.",
            "en": "Let's not go to that party."
          }
        ],
        "checkpoint": [
          {
            "type": "translate",
            "direction": "en-es",
            "prompt": "Traduce al español con un mandato de nosotros.",
            "source": "Let's leave now.",
            "answer": "Salgamos ahora.",
            "altAnswers": [
              "Vamos a salir ahora."
            ],
            "explanation": "El mandato de nosotros puede formarse con el subjuntivo 'salgamos' o con 'vamos a salir'."
          }
        ]
      },
      {
        "heading": "Colocación de pronombres con mandatos afirmativos",
        "body": [
          "Con los mandatos afirmativos, los pronombres se colocan después del verbo y se unen a él, a menudo con un acento escrito."
        ],
        "examples": [
          {
            "es": "Dímelo ahora.",
            "en": "Tell it to me now."
          },
          {
            "es": "Levántate temprano.",
            "en": "Get up early."
          }
        ],
        "checkpoint": [
          {
            "type": "word-order",
            "prompt": "Ordena las palabras para formar un mandato afirmativo con pronombre.",
            "words": [
              "Cómpralo",
              "en",
              "el",
              "mercado"
            ],
            "translation": "Buy it at the market.",
            "explanation": "En los mandatos afirmativos el pronombre 'lo' se une al final del verbo: 'Cómpralo'."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "¿Cuál es la forma correcta de decir 'Tell it to her' como mandato con tú?",
        "options": [
          "Dísela",
          "Se la di",
          "No se la digas",
          "Dila se"
        ],
        "correctIndex": 0,
        "explanation": "En el mandato afirmativo, los pronombres se unen al final del verbo: 'Dísela'."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa el mandato negativo con el pronombre correcto.",
        "sentence": "No ___ despiertes; está durmiendo.",
        "answer": "lo",
        "hint": "El pronombre va justo antes del verbo.",
        "explanation": "En los mandatos negativos, el pronombre precede al verbo: 'no lo despiertes'."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Traduce al español usando un mandato con usted.",
        "source": "Please sit down.",
        "answer": "Siéntese, por favor.",
        "altAnswers": [
          "Por favor, siéntese."
        ],
        "explanation": "El mandato afirmativo con usted del verbo reflexivo 'sentarse' es 'siéntese'."
      },
      {
        "type": "multiple-choice",
        "question": "¿Cuál es el mandato afirmativo correcto con tú de 'decir'?",
        "options": [
          "Dice",
          "Dices",
          "Di",
          "Digas"
        ],
        "correctIndex": 2,
        "explanation": "El mandato afirmativo irregular con tú de 'decir' es 'di'."
      },
      {
        "type": "matching",
        "instructions": "Empareja cada mandato en español con su traducción en inglés.",
        "pairs": [
          {
            "left": "Ven acá.",
            "right": "Come here."
          },
          {
            "left": "No vengas tarde.",
            "right": "Don't come late."
          },
          {
            "left": "Vengan temprano.",
            "right": "Come early. (ustedes)"
          },
          {
            "left": "Vengamos juntos.",
            "right": "Let's come together."
          }
        ],
        "explanation": "El verbo 'venir' cambia de forma según la persona y la polaridad del mandato."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa el mandato negativo con ustedes.",
        "sentence": "No ___ (hacer) ruido durante la reunión.",
        "answer": "hagan",
        "hint": "Usa la forma de subjuntivo para ustedes.",
        "explanation": "El mandato negativo con ustedes usa el subjuntivo: no hagan."
      }
    ]
  },
  {
    "slug": "commands-drill-3",
    "level": "B1",
    "number": 40,
    "title": "Los Mandatos: Práctica Extra, Part 3 of 3",
    "summary": "Esta lección es práctica adicional para reforzar los mandatos afirmativos y negativos con tú, usted, ustedes y nosotros, incluyendo la colocación de pronombres.",
    "duration": "6 min",
    "sections": [
      {
        "heading": "Colocación de pronombres con mandatos negativos",
        "body": [
          "Con los mandatos negativos, los pronombres se colocan antes del verbo, nunca unidos a él."
        ],
        "examples": [
          {
            "es": "No me lo digas.",
            "en": "Don't tell it to me."
          },
          {
            "es": "No te levantes todavía.",
            "en": "Don't get up yet."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa el mandato negativo con el pronombre en el lugar correcto.",
            "sentence": "No ___ olvides.",
            "answer": "lo",
            "hint": "El pronombre va antes del verbo conjugado.",
            "explanation": "En los mandatos negativos el pronombre se coloca antes del verbo: 'no lo olvides'."
          }
        ]
      },
      {
        "heading": "Práctica mixta de mandatos",
        "body": [
          "Esta práctica combina mandatos afirmativos y negativos con tú, usted, ustedes y nosotros."
        ],
        "checkpoint": [
          {
            "type": "matching",
            "instructions": "Empareja cada mandato con la persona gramatical que le corresponde.",
            "pairs": [
              {
                "left": "Habla más despacio.",
                "right": "tú, afirmativo"
              },
              {
                "left": "No hables tan rápido.",
                "right": "tú, negativo"
              },
              {
                "left": "Hablen con respeto.",
                "right": "ustedes, afirmativo"
              },
              {
                "left": "Hablemos de esto mañana.",
                "right": "nosotros, afirmativo"
              }
            ],
            "explanation": "Cada mandato tiene una forma verbal distinta según la persona gramatical y la polaridad."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "word-order",
        "prompt": "Ordena las palabras para formar un mandato negativo con pronombre.",
        "words": [
          "No",
          "me",
          "lo",
          "des"
        ],
        "translation": "Don't give it to me.",
        "explanation": "En los mandatos negativos el pronombre va antes del verbo conjugado: 'No me lo des'."
      },
      {
        "type": "translate",
        "direction": "es-en",
        "prompt": "Traduce al inglés.",
        "source": "Comamos algo antes de salir.",
        "answer": "Let's eat something before leaving.",
        "explanation": "'Comamos' es el mandato de nosotros en subjuntivo, equivalente a 'let's eat'."
      },
      {
        "type": "multiple-choice",
        "question": "¿Cuál es el mandato afirmativo correcto con tú de 'ser'?",
        "options": [
          "Eres",
          "Sé",
          "Sea",
          "Seas"
        ],
        "correctIndex": 1,
        "explanation": "El mandato afirmativo irregular con tú de 'ser' es 'sé'."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa el mandato afirmativo con el pronombre unido al verbo.",
        "sentence": "___ (levantar + te) ya, se hace tarde.",
        "answer": "Levántate",
        "hint": "El pronombre se une al final y puede requerir acento escrito.",
        "explanation": "Al unir 'te' al mandato 'levanta', se añade un acento escrito para mantener la sílaba tónica: levántate."
      },
      {
        "type": "multi-select",
        "question": "¿Qué mandatos están formados correctamente?",
        "options": [
          "No lo hagas ahora.",
          "No hazlo ahora.",
          "Háganlo con cuidado.",
          "Hagan lo con cuidado."
        ],
        "correctIndexes": [
          0,
          2
        ],
        "explanation": "En los negativos el pronombre va antes del verbo ('no lo hagas'), y en los afirmativos se une al final sin espacio ('Háganlo')."
      }
    ]
  },
  {
    "slug": "conditional-tense-drill-1",
    "level": "B1",
    "number": 41,
    "title": "El Condicional: Práctica Extra, Part 1 of 3",
    "summary": "Esta lección es práctica adicional del condicional — repaso y repetición, no una introducción nueva al tema.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "Repaso: formación regular",
        "body": [
          "El condicional regular se forma añadiendo -ía, -ías, -ía, -íamos, -íais, -ían al infinitivo completo, y las terminaciones son iguales para verbos -ar, -er e -ir."
        ],
        "examples": [
          {
            "es": "hablar → hablaría, hablarías, hablaría, hablaríamos, hablaríais, hablarían"
          },
          {
            "es": "vivir → viviría, vivirías, viviría, viviríamos, viviríais, vivirían"
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Conjuga el verbo en condicional.",
            "sentence": "Nosotros ___ (comer) en ese restaurante si tuviéramos dinero.",
            "answer": "comeríamos",
            "hint": "infinitivo + íamos",
            "explanation": "Comer es regular: comer → comería, comerías, comería, comeríamos, comeríais, comerían."
          }
        ]
      },
      {
        "heading": "Repaso: raíces irregulares (las mismas del futuro)",
        "body": [
          "El condicional usa exactamente las mismas raíces irregulares que el futuro: poder→podr-, tener→tendr-, decir→dir-, hacer→har-, saber→sabr-, poner→pondr-, salir→saldr-, venir→vendr-, querer→querr-."
        ],
        "examples": [
          {
            "es": "Yo no podría hacerlo solo."
          },
          {
            "es": "¿Qué dirías tú en esa situación?"
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Conjuga el verbo irregular en condicional.",
            "sentence": "Ellos ___ (tener) que salir temprano.",
            "answer": "tendrían",
            "hint": "tener → tendr-",
            "explanation": "Tener comparte su raíz irregular con el futuro: tendr-, así que el condicional es tendría, tendrías, tendría, tendríamos, tendríais, tendrían."
          },
          {
            "type": "multiple-choice",
            "question": "¿Cuál es la forma correcta de \"hacer\" para \"nosotros\" en condicional?",
            "options": [
              "haceríamos",
              "haríamos",
              "haremos",
              "hacimos"
            ],
            "correctIndex": 1,
            "explanation": "Hacer usa la raíz irregular har- en el condicional (igual que en el futuro): haríamos, no haceríamos."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "fill-blank",
        "prompt": "Conjuga el verbo regular en condicional.",
        "sentence": "Yo ___ (hablar) con el profesor si tuviera la oportunidad.",
        "answer": "hablaría",
        "hint": "infinitivo + ía",
        "explanation": "Hablar es regular en condicional: hablar → hablaría."
      },
      {
        "type": "fill-blank",
        "prompt": "Conjuga el verbo regular en condicional.",
        "sentence": "¿Tú ___ (vivir) en otro país si pudieras?",
        "answer": "vivirías",
        "hint": "infinitivo + ías",
        "explanation": "Vivir es regular en condicional: vivir → vivirías."
      },
      {
        "type": "fill-blank",
        "prompt": "Conjuga el verbo irregular en condicional.",
        "sentence": "Nosotros ___ (decir) la verdad si nos preguntaran.",
        "answer": "diríamos",
        "hint": "decir → dir-",
        "explanation": "Decir tiene la raíz irregular dir- en el condicional: diría, dirías, diría, diríamos, diríais, dirían."
      },
      {
        "type": "fill-blank",
        "prompt": "Conjuga el verbo irregular en condicional.",
        "sentence": "Con más práctica, yo ___ (poder) hablar español fluidamente.",
        "answer": "podría",
        "hint": "poder → podr-",
        "explanation": "Poder tiene la raíz irregular podr- en el condicional: podría, podrías, podría..."
      },
      {
        "type": "multiple-choice",
        "question": "¿Cuál es la forma correcta de \"salir\" para \"ellos\" en condicional?",
        "options": [
          "saldrían",
          "salirían",
          "saliían",
          "saldrán"
        ],
        "correctIndex": 0,
        "explanation": "Salir usa la raíz irregular sald- en el condicional: saldrían, no salirían."
      },
      {
        "type": "multiple-choice",
        "question": "¿Cuál oración usa correctamente el condicional para una situación hipotética?",
        "options": [
          "Si tengo tiempo, viajo más.",
          "Si tendría tiempo, viajaría más.",
          "Si tuviera tiempo, viajaría más.",
          "Si tuviera tiempo, viajo más."
        ],
        "correctIndex": 2,
        "explanation": "La estructura correcta combina imperfecto de subjuntivo en la cláusula con \"si\" y condicional en la consecuencia: \"Si tuviera tiempo, viajaría más\"."
      },
      {
        "type": "translate",
        "direction": "es-en",
        "prompt": "Traduce la oración al inglés.",
        "source": "Si fuera rico, no trabajaría tanto.",
        "answer": "If I were rich, I wouldn't work so much.",
        "altAnswers": [
          "If I were rich, I would not work so much."
        ],
        "explanation": "\"Fuera\" es imperfecto de subjuntivo de ser, y \"trabajaría\" es el condicional que expresa el resultado hipotético."
      }
    ]
  },
  {
    "slug": "conditional-tense-drill-2",
    "level": "B1",
    "number": 42,
    "title": "El Condicional: Práctica Extra, Part 2 of 3",
    "summary": "Esta lección es práctica adicional del condicional — repaso y repetición, no una introducción nueva al tema.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Situaciones hipotéticas",
        "body": [
          "El condicional expresa lo que pasaría en una situación imaginaria, muchas veces junto a una cláusula con \"si\" + imperfecto de subjuntivo."
        ],
        "examples": [
          {
            "es": "Si tuviera más tiempo, viajaría más.",
            "en": "If I had more time, I would travel more."
          },
          {
            "es": "Si ganara la lotería, compraría una casa."
          }
        ],
        "checkpoint": [
          {
            "type": "translate",
            "direction": "en-es",
            "prompt": "Traduce la oración hipotética.",
            "source": "If I had more money, I would buy a new car.",
            "answer": "Si tuviera más dinero, compraría un carro nuevo.",
            "altAnswers": [
              "Si tuviera más dinero, compraría un coche nuevo."
            ],
            "explanation": "La situación hipotética usa imperfecto de subjuntivo (tuviera) en la cláusula con \"si\" y condicional (compraría) en la consecuencia."
          }
        ]
      },
      {
        "heading": "Peticiones corteses",
        "body": [
          "El condicional suaviza las peticiones y las hace más corteses, como en \"¿Podrías ayudarme?\" y \"Me gustaría un café.\""
        ],
        "examples": [
          {
            "es": "¿Podrías pasarme la sal, por favor?",
            "en": "Could you pass me the salt, please?"
          },
          {
            "es": "Me gustaría reservar una mesa para dos."
          }
        ],
        "checkpoint": [
          {
            "type": "translate",
            "direction": "en-es",
            "prompt": "Traduce la petición cortés.",
            "source": "Could you help me with this exercise?",
            "answer": "¿Podrías ayudarme con este ejercicio?",
            "explanation": "\"Podrías\" (condicional de poder) suaviza la petición y suena más cortés que \"¿Puedes ayudarme?\"."
          }
        ]
      },
      {
        "heading": "Dar consejos",
        "body": [
          "Para dar consejos usamos \"yo que tú\" o \"yo en tu lugar\" seguido del condicional, algo como \"if I were you\" en inglés."
        ],
        "examples": [
          {
            "es": "Yo que tú, hablaría con ella hoy mismo.",
            "en": "If I were you, I would talk to her today."
          },
          {
            "es": "Yo en tu lugar, no aceptaría esa oferta."
          }
        ],
        "checkpoint": [
          {
            "type": "word-order",
            "prompt": "Ordena las palabras para formar un consejo.",
            "words": [
              "yo",
              "que",
              "tú,",
              "descansaría",
              "más"
            ],
            "translation": "If I were you, I would rest more.",
            "explanation": "El orden natural es \"Yo que tú, descansaría más\": la expresión fija \"yo que tú\" va seguida del verbo en condicional."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Traduce la oración al español.",
        "source": "I would travel more if I had money.",
        "answer": "Viajaría más si tuviera dinero.",
        "explanation": "El condicional (viajaría) expresa el resultado imaginario, y el imperfecto de subjuntivo (tuviera) va en la cláusula con \"si\"."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Traduce la petición cortés al español.",
        "source": "I would like a glass of water, please.",
        "answer": "Me gustaría un vaso de agua, por favor.",
        "explanation": "\"Me gustaría\" (condicional de gustar) es una forma cortés de pedir algo, más suave que \"quiero\"."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la petición cortés.",
        "sentence": "___ (poder) usted decirme dónde está la estación, por favor?",
        "answer": "Podría",
        "hint": "petición cortés con poder",
        "explanation": "\"¿Podría usted...?\" es una forma cortés y formal de pedir información, usando el condicional de poder."
      },
      {
        "type": "multiple-choice",
        "question": "¿Qué expresión se usa típicamente para dar un consejo con el condicional?",
        "options": [
          "yo antes de ti",
          "yo que tú",
          "yo por ti",
          "yo sobre ti"
        ],
        "correctIndex": 1,
        "explanation": "\"Yo que tú\" (o \"yo en tu lugar\") seguido del condicional es la forma habitual de dar consejos: \"Yo que tú, se lo diría\"."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras para formar un consejo con el condicional.",
        "words": [
          "yo",
          "en",
          "tu",
          "lugar,",
          "aceptaría",
          "el",
          "trabajo"
        ],
        "translation": "In your place, I would accept the job.",
        "explanation": "\"Yo en tu lugar\" introduce el consejo, seguido del verbo en condicional: \"aceptaría el trabajo\"."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa con el condicional de especulación sobre el pasado.",
        "sentence": "No contestó el teléfono; ___ (estar) ocupado, supongo.",
        "answer": "estaría",
        "hint": "conjetura sobre el pasado",
        "explanation": "El condicional aquí no habla del futuro sino de una conjetura sobre el pasado: \"estaría ocupado\" equivale a \"probablemente estaba ocupado\"."
      }
    ]
  },
  {
    "slug": "conditional-tense-drill-3",
    "level": "B1",
    "number": 43,
    "title": "El Condicional: Práctica Extra, Part 3 of 3",
    "summary": "Esta lección es práctica adicional del condicional — repaso y repetición, no una introducción nueva al tema.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "Especular sobre el pasado",
        "body": [
          "El condicional también expresa conjeturas sobre el pasado, como preguntarse qué pasaría o qué hora sería en aquel momento."
        ],
        "examples": [
          {
            "es": "Me pregunté qué pasaría con el proyecto.",
            "en": "I wondered what would happen with the project."
          },
          {
            "es": "Serían las diez cuando por fin llegó."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa con el condicional de especulación.",
            "sentence": "No sé qué hora era, pero ___ (ser) las once de la noche.",
            "answer": "serían",
            "hint": "conjetura sobre el pasado",
            "explanation": "Para especular sobre una hora o situación pasada se usa el condicional: \"serían las once\" equivale a \"probablemente eran las once\"."
          }
        ]
      },
      {
        "heading": "Práctica mixta: condicional, futuro e imperfecto",
        "body": [
          "El futuro predice, el condicional imagina o suaviza, y el imperfecto describe hábitos o situaciones pasadas, así que hay que fijarse bien en las terminaciones y el contexto."
        ],
        "examples": [
          {
            "es": "Mañana iré al médico (futuro). / Dijo que iría al médico (condicional). / Antes iba al médico cada mes (imperfecto)."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "\"Cuando era niño, ___ al parque todos los sábados.\" ¿Qué tiempo verbal completa mejor la oración?",
            "options": [
              "iré (futuro)",
              "iría (condicional)",
              "iba (imperfecto)",
              "voy (presente)"
            ],
            "correctIndex": 2,
            "explanation": "\"Cuando era niño\" describe un hábito repetido en el pasado, así que se usa el imperfecto (iba), no el condicional ni el futuro."
          },
          {
            "type": "multiple-choice",
            "question": "\"Ella dijo que ___ temprano al día siguiente.\" ¿Qué tiempo verbal completa mejor la oración?",
            "options": [
              "llegará",
              "llegaría",
              "llegaba",
              "llega"
            ],
            "correctIndex": 1,
            "explanation": "Dentro de un discurso indirecto en pasado (\"dijo que...\"), el futuro se convierte en condicional: llegaría."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "translate",
        "direction": "es-en",
        "prompt": "Traduce la oración al inglés.",
        "source": "Me pregunté qué pasaría si le contaba la verdad.",
        "answer": "I wondered what would happen if I told him/her the truth.",
        "explanation": "\"Qué pasaría\" es el condicional usado para especular sobre un resultado posible, pasado o hipotético."
      },
      {
        "type": "multi-select",
        "question": "¿Cuáles de estas formas verbales están correctamente conjugadas en condicional? (Selecciona todas las correctas)",
        "options": [
          "tendría (tener)",
          "haceria (hacer)",
          "querría (querer)",
          "pondría (poner)",
          "sabería (saber)"
        ],
        "correctIndexes": [
          0,
          2,
          3
        ],
        "explanation": "Correctas: tendría (tener→tendr-), querría (querer→querr-) y pondría (poner→pondr-). \"Haceria\" debería escribirse \"haría\" (hacer→har-) y \"sabería\" debería ser \"sabría\" (saber→sabr-)."
      },
      {
        "type": "multiple-choice",
        "question": "\"El año que viene, ___ a estudiar medicina.\" ¿Qué tiempo verbal completa mejor la oración?",
        "options": [
          "empezaría",
          "empezaré",
          "empezaba",
          "empiece"
        ],
        "correctIndex": 1,
        "explanation": "\"El año que viene\" señala un plan futuro concreto, así que se usa el futuro simple (empezaré), no el condicional."
      },
      {
        "type": "matching",
        "instructions": "Empareja cada infinitivo con su raíz irregular correcta para el condicional.",
        "pairs": [
          {
            "left": "tener",
            "right": "tendr-"
          },
          {
            "left": "decir",
            "right": "dir-"
          },
          {
            "left": "hacer",
            "right": "har-"
          },
          {
            "left": "poder",
            "right": "podr-"
          },
          {
            "left": "venir",
            "right": "vendr-"
          }
        ],
        "explanation": "Estas raíces irregulares son las mismas que usa el futuro: tendr-, dir-, har-, podr-, vendr-, y luego se les añaden las terminaciones del condicional (-ía, -ías, -ía, -íamos, -íais, -ían)."
      },
      {
        "type": "fill-blank",
        "prompt": "Elige entre imperfecto y condicional según el contexto.",
        "sentence": "De joven, mi abuela ___ (cantar) todas las noches; ahora dice que ___ (cantar) otra vez si tuviera fuerzas.",
        "answer": "cantaba / cantaría",
        "hint": "hábito pasado vs. situación hipotética",
        "explanation": "\"Cantaba\" describe un hábito repetido en el pasado (imperfecto), mientras que \"cantaría\" expresa una posibilidad hipotética en el presente (condicional)."
      }
    ]
  },
  {
    "slug": "si-clauses-drill-1",
    "level": "B1",
    "number": 44,
    "title": "Oraciones con Si: Práctica Extra, Part 1 of 3",
    "summary": "Esta lección es práctica adicional para reforzar las oraciones con si de condición real o posible, ya presentadas anteriormente en el curso.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "El presente habitual: si + presente, + presente",
        "body": [
          "Cuando ambas partes de la oración están en presente, hablamos de verdades generales, hábitos o reacciones automáticas, no de un evento futuro concreto."
        ],
        "examples": [
          {
            "es": "Si llueve, las calles se mojan.",
            "en": "If it rains, the streets get wet."
          },
          {
            "es": "Si tengo tiempo libre, leo novelas.",
            "en": "If I have free time, I read novels."
          },
          {
            "es": "Si mezclas azul y amarillo, sale verde.",
            "en": "If you mix blue and yellow, you get green."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Qué combinación de tiempos verbales expresa un hábito o una verdad general con si?",
            "options": [
              "presente + presente",
              "pretérito + futuro",
              "imperfecto + condicional",
              "presente + subjuntivo"
            ],
            "correctIndex": 0,
            "explanation": "Para hábitos y verdades generales, el español usa presente en la cláusula con si y presente también en el resultado."
          },
          {
            "type": "fill-blank",
            "prompt": "Completa la oración con el verbo en presente.",
            "sentence": "Si hace frío, mi abuela ___ (ponerse) un abrigo.",
            "answer": "se pone",
            "hint": "presente de ponerse, reflexivo",
            "explanation": "La reacción habitual ante el frío se expresa con presente + presente: 'se pone' es el presente de 'ponerse'."
          }
        ]
      },
      {
        "heading": "La posibilidad real futura: si + presente, + futuro o imperativo",
        "body": [
          "Para hablar de una condición real que puede cumplirse en el futuro, usamos si + presente en la primera parte y futuro o imperativo en la segunda."
        ],
        "examples": [
          {
            "es": "Si estudias esta noche, aprobarás el examen.",
            "en": "If you study tonight, you will pass the exam."
          },
          {
            "es": "Si tienes dudas, pregúntame.",
            "en": "If you have doubts, ask me."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Cuál es la opción correcta para completar 'Si no llamas antes, no ___ (nosotros) reserva'?",
            "options": [
              "tenemos",
              "tendremos",
              "tuvimos",
              "tendríamos"
            ],
            "correctIndex": 1,
            "explanation": "Con una condición real sobre el futuro, la consecuencia se expresa normalmente en futuro simple: 'tendremos'."
          },
          {
            "type": "fill-blank",
            "prompt": "Completa con un imperativo lógico.",
            "sentence": "Si necesitas ayuda, ___ (llamar, tú) a la oficina.",
            "answer": "llama",
            "hint": "imperativo afirmativo de tú",
            "explanation": "El imperativo 'llama' da una instrucción directa como consecuencia de una condición real."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "Completa: 'Si ___ (nosotros, llegar) temprano, cogemos buenos asientos.'",
        "options": [
          "llegamos",
          "llegaremos",
          "llegábamos",
          "lleguemos"
        ],
        "correctIndex": 0,
        "explanation": "Un hábito o rutina con si se expresa con presente + presente: 'Si llegamos temprano, cogemos buenos asientos.'"
      },
      {
        "type": "multiple-choice",
        "question": "¿Cuál es la traducción correcta de 'If you need anything, call me'?",
        "options": [
          "Si necesitas algo, llámame.",
          "Si necesitarás algo, me llamas.",
          "Si necesitaras algo, me llamarías.",
          "Si necesites algo, llámame."
        ],
        "correctIndex": 0,
        "explanation": "La condición real con petición se traduce con presente + imperativo: 'Si necesitas algo, llámame.'"
      },
      {
        "type": "multi-select",
        "question": "¿Cuáles oraciones usan correctamente si + presente + futuro?",
        "options": [
          "Si trabajas duro, conseguirás el puesto.",
          "Si trabajas duro, consigues el puesto.",
          "Si trabajarás duro, conseguirás el puesto.",
          "Si viajas a México, visitarás las pirámides."
        ],
        "correctIndexes": [
          0,
          3
        ],
        "explanation": "En 'si + presente, + futuro', la cláusula con si siempre va en presente y el resultado en futuro; 'trabajarás' en la cláusula con si es incorrecto."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con el verbo correcto en presente.",
        "sentence": "Si ___ (yo, tener) prisa, tomo un taxi en vez del autobús.",
        "answer": "tengo",
        "hint": "presente de tener, primera persona",
        "explanation": "Es un hábito personal, así que ambas partes van en presente: 'Si tengo prisa, tomo un taxi.'"
      },
      {
        "type": "fill-blank",
        "prompt": "Completa con ir a + infinitivo.",
        "sentence": "Si el jefe aprueba el proyecto, ___ (nosotros, empezar) la próxima semana.",
        "answer": "vamos a empezar",
        "hint": "ir a + infinitivo, primera persona plural",
        "explanation": "Para un plan casi seguro, se usa ir a + infinitivo: 'vamos a empezar'."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa con 'si' o 'sí'.",
        "sentence": "No estoy segura de ___ el tren sale a las ocho o a las nueve.",
        "answer": "si",
        "hint": "pregunta indirecta, sin tilde",
        "explanation": "Aquí 'si' introduce una pregunta indirecta (whether) y no lleva tilde, a diferencia del 'sí' afirmativo."
      }
    ]
  },
  {
    "slug": "si-clauses-drill-2",
    "level": "B1",
    "number": 45,
    "title": "Oraciones con Si: Práctica Extra, Part 2 of 3",
    "summary": "Esta lección es práctica adicional para reforzar las oraciones con si de condición real o posible, ya presentadas anteriormente en el curso.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "El plan inmediato: si + presente, + ir a + infinitivo",
        "body": [
          "Para condiciones reales con una consecuencia planeada o casi segura, usamos si + presente y luego ir a + infinitivo."
        ],
        "examples": [
          {
            "es": "Si terminamos pronto, vamos a salir a cenar.",
            "en": "If we finish soon, we are going to go out for dinner."
          },
          {
            "es": "Si no llega el autobús, voy a caminar.",
            "en": "If the bus doesn't arrive, I'm going to walk."
          }
        ],
        "checkpoint": [
          {
            "type": "translate",
            "direction": "en-es",
            "prompt": "Traduce usando ir a + infinitivo.",
            "source": "If it's sunny tomorrow, we are going to go to the beach.",
            "answer": "Si hace sol mañana, vamos a ir a la playa.",
            "altAnswers": [
              "Si mañana hace sol, vamos a ir a la playa."
            ],
            "explanation": "La consecuencia planeada se expresa con ir a + infinitivo: 'vamos a ir'."
          }
        ]
      },
      {
        "heading": "Si, sí y si en preguntas indirectas",
        "body": [
          "No confundas 'si' condicional (sin tilde) con 'sí' afirmativo (con tilde), ni con el 'si' que introduce una pregunta indirecta con el sentido de 'whether'."
        ],
        "examples": [
          {
            "es": "¿Vienes a la fiesta? —Sí, claro.",
            "en": "Are you coming to the party? — Yes, of course."
          },
          {
            "es": "No sé si voy a poder ir.",
            "en": "I don't know if / whether I'll be able to go."
          },
          {
            "es": "Si vienes, avísame.",
            "en": "If you come, let me know."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Cuál de estas oraciones usa 'si' en una pregunta indirecta (whether)?",
            "options": [
              "Si llueve, me quedo en casa.",
              "No sé si él ya comió.",
              "Sí, tienes razón.",
              "Si quieres, cenamos juntos."
            ],
            "correctIndex": 1,
            "explanation": "'No sé si él ya comió' equivale a 'I don't know whether he already ate', un uso de pregunta indirecta, no de condición."
          },
          {
            "type": "fill-blank",
            "prompt": "Completa con 'si' o 'sí' según corresponda.",
            "sentence": "—¿Puedo entrar? —___, adelante.",
            "answer": "Sí",
            "hint": "respuesta afirmativa, lleva tilde",
            "explanation": "Como respuesta afirmativa, 'sí' siempre lleva tilde para distinguirse de la conjunción condicional 'si'."
          }
        ]
      },
      {
        "heading": "Expresiones fijas con si",
        "body": [
          "Algunas expresiones con si son muy comunes en la conversación diaria, como 'si quieres', 'si puedes' y 'si tienes tiempo'."
        ],
        "examples": [
          {
            "es": "Si quieres, te ayudo con la tarea.",
            "en": "If you want, I'll help you with the homework."
          },
          {
            "es": "Si puedes, llámame más tarde.",
            "en": "If you can, call me later."
          },
          {
            "es": "Si tienes tiempo, pasa por mi casa.",
            "en": "If you have time, stop by my house."
          }
        ],
        "checkpoint": [
          {
            "type": "matching",
            "instructions": "Une cada expresión fija con si con su traducción correcta.",
            "pairs": [
              {
                "left": "si quieres",
                "right": "if you want"
              },
              {
                "left": "si puedes",
                "right": "if you can"
              },
              {
                "left": "si tienes tiempo",
                "right": "if you have time"
              },
              {
                "left": "si te parece bien",
                "right": "if it's okay with you"
              }
            ],
            "explanation": "Estas expresiones fijas con si son muletillas muy frecuentes para suavizar una petición o una sugerencia."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "translate",
        "direction": "es-en",
        "prompt": "Traduce la oración al inglés.",
        "source": "Si tienes hambre, hay fruta en la cocina.",
        "answer": "If you're hungry, there's fruit in the kitchen.",
        "altAnswers": [
          "If you are hungry, there is fruit in the kitchen."
        ],
        "explanation": "Condición real habitual con presente + presente: 'tienes' y 'hay'."
      },
      {
        "type": "translate",
        "direction": "es-en",
        "prompt": "Traduce la oración al inglés.",
        "source": "Si puedes, mándame el informe antes del viernes.",
        "answer": "If you can, send me the report before Friday.",
        "altAnswers": [
          "If you can, send me the report by Friday."
        ],
        "explanation": "'Si puedes' es una expresión fija muy común para suavizar una petición."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Traduce la oración al español.",
        "source": "If it's cold tonight, we're going to light the fireplace.",
        "answer": "Si hace frío esta noche, vamos a encender la chimenea.",
        "altAnswers": [
          "Si esta noche hace frío, vamos a encender la chimenea."
        ],
        "explanation": "Consecuencia planeada con ir a + infinitivo: 'vamos a encender'."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Traduce la oración al español.",
        "source": "If you don't know the answer, raise your hand.",
        "answer": "Si no sabes la respuesta, levanta la mano.",
        "altAnswers": [
          "Si no sabes la respuesta, levanta tu mano."
        ],
        "explanation": "Condición real con instrucción: presente + imperativo, 'levanta'."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras para formar una oración lógica.",
        "words": [
          "si",
          "tienes",
          "tiempo,",
          "llámame",
          "esta",
          "tarde"
        ],
        "translation": "If you have time, call me this afternoon.",
        "explanation": "La cláusula con si va primero y lleva coma: 'Si tienes tiempo, llámame esta tarde.'"
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras para formar una oración con el resultado primero.",
        "words": [
          "voy",
          "al",
          "gimnasio",
          "si",
          "no",
          "llueve"
        ],
        "translation": "I go to the gym if it doesn't rain.",
        "explanation": "Cuando el resultado va primero, no se usa coma: 'Voy al gimnasio si no llueve.'"
      }
    ]
  },
  {
    "slug": "si-clauses-drill-3",
    "level": "B1",
    "number": 46,
    "title": "Oraciones con Si: Práctica Extra, Part 3 of 3",
    "summary": "Esta lección es práctica adicional para reforzar las oraciones con si de condición real o posible, ya presentadas anteriormente en el curso.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Orden flexible de las cláusulas",
        "body": [
          "La cláusula con si puede ir antes o después del resultado, pero solo lleva coma cuando va primero."
        ],
        "examples": [
          {
            "es": "Si llegas tarde, avísame.",
            "en": "If you arrive late, let me know."
          },
          {
            "es": "Avísame si llegas tarde.",
            "en": "Let me know if you arrive late."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Cuándo se usa una coma en una oración con si?",
            "options": [
              "Siempre, sin importar el orden.",
              "Solo cuando la cláusula con si va primero.",
              "Solo cuando el resultado va primero.",
              "Nunca se usa coma con si."
            ],
            "correctIndex": 1,
            "explanation": "La coma marca el final de la cláusula con si cuando esta abre la oración; si el resultado va primero, no hace falta coma."
          },
          {
            "type": "word-order",
            "prompt": "Ordena las palabras para formar una oración con el resultado primero.",
            "words": [
              "cenamos",
              "afuera",
              "si",
              "hace",
              "buen",
              "tiempo"
            ],
            "translation": "We eat outside if the weather is good.",
            "explanation": "Cuando el resultado va primero, no se usa coma: 'Cenamos afuera si hace buen tiempo.'"
          }
        ]
      },
      {
        "heading": "Práctica mixta: oraciones completas",
        "body": [
          "Ahora combina todo lo practicado para construir oraciones completas de condición real con si."
        ],
        "examples": [
          {
            "es": "Si ahorro un poco cada mes, voy a comprarme una bicicleta.",
            "en": "If I save a little each month, I'm going to buy myself a bicycle."
          }
        ],
        "checkpoint": [
          {
            "type": "translate",
            "direction": "es-en",
            "prompt": "Traduce la oración al inglés.",
            "source": "Si no entiendes la lección, pregunta al profesor.",
            "answer": "If you don't understand the lesson, ask the teacher.",
            "altAnswers": [
              "If you do not understand the lesson, ask the teacher."
            ],
            "explanation": "Condición real con presente ('no entiendes') e imperativo como consecuencia ('pregunta')."
          },
          {
            "type": "multi-select",
            "question": "¿Cuáles de estas oraciones son ejemplos correctos de condición real con si (nivel B1)?",
            "options": [
              "Si tengo hambre, como algo.",
              "Si tuviera dinero, viajaría por el mundo.",
              "Si terminas pronto, vamos al cine.",
              "Si hubiera sabido, te habría llamado."
            ],
            "correctIndexes": [
              0,
              2
            ],
            "explanation": "Las oraciones con imperfecto de subjuntivo o pluscuamperfecto de subjuntivo expresan condiciones hipotéticas o contrarias a la realidad, que se estudian en B2; aquí solo las de condición real cuentan."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "matching",
        "instructions": "Une cada cláusula con si con su continuación más lógica.",
        "pairs": [
          {
            "left": "Si tengo hambre,",
            "right": "como algo ligero."
          },
          {
            "left": "Si vas al supermercado,",
            "right": "compra leche, por favor."
          },
          {
            "left": "Si terminas el proyecto a tiempo,",
            "right": "vamos a celebrarlo."
          },
          {
            "left": "No sé",
            "right": "si va a llover mañana."
          }
        ],
        "explanation": "Cada cláusula con si se combina con una consecuencia real que mantiene la coherencia lógica y el tiempo verbal adecuado."
      },
      {
        "type": "multiple-choice",
        "question": "¿Cuál de estas oraciones usa correctamente 'si' en una pregunta indirecta?",
        "options": [
          "Pregúntale si quiere venir con nosotros.",
          "Sí quiere venir con nosotros.",
          "Si, quiere venir con nosotros.",
          "Pregúntale sí quiere venir."
        ],
        "correctIndex": 0,
        "explanation": "'Si quiere venir' funciona aquí como 'whether he/she wants to come', sin tilde porque no es la respuesta afirmativa."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con la expresión fija correcta.",
        "sentence": "___ (si quieres / si sí), podemos ver una película esta noche.",
        "answer": "Si quieres",
        "hint": "expresión fija para ofrecer algo",
        "explanation": "'Si quieres' es la expresión fija correcta para hacer una sugerencia amable; 'si sí' no existe."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Traduce la oración al español usando una expresión fija con si.",
        "source": "If it's okay with you, we can meet at six.",
        "answer": "Si te parece bien, podemos vernos a las seis.",
        "altAnswers": [
          "Si te parece bien, nos podemos ver a las seis."
        ],
        "explanation": "'Si te parece bien' es una expresión fija muy usada para proponer un plan."
      },
      {
        "type": "multi-select",
        "question": "¿Cuáles oraciones son ejemplos de condición real o posible (no hipotética) con si?",
        "options": [
          "Si estudias, apruebas.",
          "Si estudiaras más, aprobarías.",
          "Si tienes tiempo, ven a visitarnos.",
          "Si hubieras estudiado, habrías aprobado."
        ],
        "correctIndexes": [
          0,
          2
        ],
        "explanation": "Las oraciones con presente + presente o presente + imperativo son condiciones reales; las que usan imperfecto o pluscuamperfecto de subjuntivo son hipotéticas y pertenecen a B2."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras para formar una pregunta indirecta con si.",
        "words": [
          "no",
          "sabemos",
          "si",
          "el",
          "vuelo",
          "sale",
          "a",
          "tiempo"
        ],
        "translation": "We don't know if the flight leaves on time.",
        "explanation": "Aquí 'si' introduce una pregunta indirecta equivalente a 'whether': 'No sabemos si el vuelo sale a tiempo.'"
      }
    ]
  },
  {
    "slug": "present-past-perfect-drill-1",
    "level": "B1",
    "number": 47,
    "title": "El Pretérito Perfecto y el Pluscuamperfecto: Práctica Extra, Part 1 of 3",
    "summary": "Practica más el pretérito perfecto y el pluscuamperfecto, dos tiempos que ya conoces, con ejercicios extra de repaso.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Formación del pretérito perfecto",
        "body": [
          "El pretérito perfecto se forma con el presente de haber (he, has, ha, hemos, habéis, han) seguido del participio pasado del verbo principal."
        ],
        "examples": [
          {
            "es": "He viajado mucho este año.",
            "en": "I have traveled a lot this year."
          },
          {
            "es": "¿Has visto la nueva película?",
            "en": "Have you seen the new movie?"
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Conjuga el verbo en pretérito perfecto.",
            "sentence": "Nosotros ___ (trabajar) todo el día.",
            "answer": "hemos trabajado",
            "explanation": "El pretérito perfecto se forma con hemos (presente de haber para 'nosotros') más el participio regular trabajado."
          }
        ]
      },
      {
        "heading": "Participios regulares",
        "body": [
          "Los participios regulares terminan en -ado para los verbos -ar y en -ido para los verbos -er e -ir."
        ],
        "examples": [
          {
            "es": "hablar → hablado",
            "en": "to speak → spoken"
          },
          {
            "es": "comer → comido; vivir → vivido",
            "en": "to eat → eaten; to live → lived"
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Cuál es el participio correcto de 'aprender'?",
            "options": [
              "aprendido",
              "aprendado",
              "aprendo",
              "aprendiendo"
            ],
            "correctIndex": 0,
            "explanation": "Los verbos -er forman el participio con -ido: aprender → aprendido."
          }
        ]
      },
      {
        "heading": "Participios irregulares",
        "body": [
          "Algunos verbos muy comunes tienen participios irregulares que hay que memorizar, como hecho, dicho, visto, puesto, escrito, roto, vuelto, abierto y muerto."
        ],
        "examples": [
          {
            "es": "Ella ha hecho la cena.",
            "en": "She has made dinner."
          },
          {
            "es": "Hemos abierto todas las ventanas.",
            "en": "We have opened all the windows."
          }
        ],
        "checkpoint": [
          {
            "type": "matching",
            "instructions": "Empareja cada infinitivo con su participio irregular.",
            "pairs": [
              {
                "left": "hacer",
                "right": "hecho"
              },
              {
                "left": "decir",
                "right": "dicho"
              },
              {
                "left": "ver",
                "right": "visto"
              },
              {
                "left": "poner",
                "right": "puesto"
              },
              {
                "left": "escribir",
                "right": "escrito"
              }
            ],
            "explanation": "Estos verbos no siguen el patrón regular -ado/-ido; sus participios son excepciones que se aprenden de memoria."
          },
          {
            "type": "fill-blank",
            "prompt": "Conjuga el verbo irregular en pretérito perfecto.",
            "sentence": "Alguien ___ (romper) la ventana de la cocina.",
            "answer": "ha roto",
            "explanation": "Romper tiene un participio irregular: roto. Con 'alguien' (él/ella) se usa ha."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "¿Cuál es la forma correcta del pretérito perfecto de 'escribir' para 'ella'?",
        "options": [
          "ha escrito",
          "ha escribido",
          "había escrito",
          "ha escribo"
        ],
        "correctIndex": 0,
        "explanation": "Escribir tiene un participio irregular: escrito, no escribido. 'Ella ha escrito' es correcto."
      },
      {
        "type": "multiple-choice",
        "question": "Elige la oración correcta.",
        "options": [
          "Nosotros hemos vuelto tarde anoche.",
          "Nosotros hemos volvido tarde anoche.",
          "Nosotros habemos vuelto tarde anoche.",
          "Nosotros hemos vuelvido tarde anoche."
        ],
        "correctIndex": 0,
        "explanation": "El participio de volver es irregular: vuelto. El auxiliar correcto para 'nosotros' es hemos."
      },
      {
        "type": "multi-select",
        "question": "¿Cuáles de estos participios son irregulares?",
        "options": [
          "roto",
          "comido",
          "dicho",
          "hablado",
          "visto",
          "vivido"
        ],
        "correctIndexes": [
          0,
          2,
          4
        ],
        "explanation": "Roto (romper), dicho (decir) y visto (ver) son participios irregulares; comido, hablado y vivido son regulares."
      },
      {
        "type": "multi-select",
        "question": "¿Cuáles oraciones están en pretérito perfecto (no pluscuamperfecto)?",
        "options": [
          "He comido ya.",
          "Había comido antes de salir.",
          "¿Has visto mi teléfono?",
          "Habíamos llegado tarde.",
          "Hemos abierto la tienda."
        ],
        "correctIndexes": [
          0,
          2,
          4
        ],
        "explanation": "El pretérito perfecto usa el presente de haber (he, has, hemos); las otras dos oraciones usan el imperfecto de haber (había, habíamos), que es pluscuamperfecto."
      },
      {
        "type": "fill-blank",
        "prompt": "Conjuga el verbo en pretérito perfecto.",
        "sentence": "¿Tú ___ (leer) el correo que te mandé?",
        "answer": "has leído",
        "hint": "presente de haber + participio",
        "explanation": "Leer es regular en el participio: leído. Con 'tú' se usa has."
      },
      {
        "type": "fill-blank",
        "prompt": "Conjuga el verbo irregular en pretérito perfecto.",
        "sentence": "Los niños ___ (romper) el jarrón sin querer.",
        "answer": "han roto",
        "explanation": "Romper tiene un participio irregular: roto. Con 'los niños' se usa han."
      }
    ]
  },
  {
    "slug": "present-past-perfect-drill-2",
    "level": "B1",
    "number": 48,
    "title": "El Pretérito Perfecto y el Pluscuamperfecto: Práctica Extra, Part 2 of 3",
    "summary": "Practica más el pretérito perfecto y el pluscuamperfecto, dos tiempos que ya conoces, con ejercicios extra de repaso.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "Uso: acciones recientes o con relevancia presente",
        "body": [
          "El pretérito perfecto se usa para acciones que acaban de ocurrir o que tienen relevancia en el presente, muchas veces con palabras como ya, todavía no y hoy."
        ],
        "examples": [
          {
            "es": "Ya he terminado la tarea.",
            "en": "I have already finished the homework."
          },
          {
            "es": "Todavía no hemos comido.",
            "en": "We haven't eaten yet."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Cuál oración usa el pretérito perfecto correctamente para algo que acaba de pasar?",
            "options": [
              "Ya he terminado el proyecto.",
              "Ya terminaba el proyecto.",
              "Ya había terminado el proyecto ayer mismo.",
              "Ya termino el proyecto mañana."
            ],
            "correctIndex": 0,
            "explanation": "'Ya he terminado' conecta una acción reciente con el momento presente, que es justamente el uso del pretérito perfecto."
          }
        ]
      },
      {
        "heading": "Formación del pluscuamperfecto",
        "body": [
          "El pluscuamperfecto se forma con el imperfecto de haber (había, habías, había, habíamos, habíais, habían) más el participio, y describe una acción ya terminada antes de otra acción en el pasado."
        ],
        "examples": [
          {
            "es": "Cuando llegué, ella ya había salido.",
            "en": "When I arrived, she had already left."
          },
          {
            "es": "Nunca habíamos visto algo así.",
            "en": "We had never seen anything like that."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Conjuga el verbo en pluscuamperfecto.",
            "sentence": "Cuando yo llamé, tú ya ___ (salir) de casa.",
            "answer": "habías salido",
            "explanation": "La salida ocurrió antes de la llamada (otro momento pasado), así que se usa el pluscuamperfecto: habías salido."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "fill-blank",
        "prompt": "Conjuga el verbo en pluscuamperfecto.",
        "sentence": "Antes de mudarnos, nosotros nunca ___ (vivir) en una ciudad tan grande.",
        "answer": "habíamos vivido",
        "explanation": "El pluscuamperfecto usa el imperfecto de haber, habíamos, más el participio regular vivido."
      },
      {
        "type": "fill-blank",
        "prompt": "Conjuga el verbo irregular en pluscuamperfecto.",
        "sentence": "Cuando entré, ellos ya ___ (poner) la mesa.",
        "answer": "habían puesto",
        "explanation": "Poner tiene un participio irregular: puesto. Con 'ellos' se usa habían en el pluscuamperfecto."
      },
      {
        "type": "translate",
        "direction": "es-en",
        "prompt": "Traduce al inglés.",
        "source": "Todavía no he terminado el informe.",
        "answer": "I haven't finished the report yet.",
        "altAnswers": [
          "I have not finished the report yet."
        ],
        "explanation": "El pretérito perfecto (he terminado) se traduce con 'have/has + past participle' en inglés."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Traduce al español.",
        "source": "We have already seen that movie.",
        "answer": "Ya hemos visto esa película.",
        "altAnswers": [
          "Ya hemos visto esa peli."
        ],
        "explanation": "'Have seen' corresponde al pretérito perfecto: hemos visto, con el participio irregular de ver."
      },
      {
        "type": "translate",
        "direction": "es-en",
        "prompt": "Traduce al inglés.",
        "source": "Cuando llegamos, la película ya había empezado.",
        "answer": "When we arrived, the movie had already started.",
        "explanation": "'Había empezado' es pluscuamperfecto y se traduce como 'had started' en inglés."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Traduce al español.",
        "source": "I had never eaten sushi before that trip.",
        "answer": "Nunca había comido sushi antes de ese viaje.",
        "altAnswers": [
          "No había comido sushi nunca antes de ese viaje."
        ],
        "explanation": "'Had eaten' es pluscuamperfecto: había comido, formado con el imperfecto de haber más el participio."
      }
    ]
  },
  {
    "slug": "present-past-perfect-drill-3",
    "level": "B1",
    "number": 49,
    "title": "El Pretérito Perfecto y el Pluscuamperfecto: Práctica Extra, Part 3 of 3",
    "summary": "Practica más el pretérito perfecto y el pluscuamperfecto, dos tiempos que ya conoces, con ejercicios extra de repaso.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "Contraste: pretérito perfecto vs. pretérito indefinido",
        "body": [
          "A diferencia del pretérito indefinido, que se usa para hechos terminados en un momento específico del pasado, el pretérito perfecto conecta la acción con el presente, sobre todo con marcadores como esta mañana, este año u hoy."
        ],
        "examples": [
          {
            "es": "Esta mañana he desayunado tarde.",
            "en": "This morning I ate breakfast late."
          },
          {
            "es": "Ayer desayuné muy temprano.",
            "en": "Yesterday I ate breakfast very early."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Qué forma verbal completa mejor la oración: 'Ayer ___ (ver) a mi prima'?",
            "options": [
              "vi",
              "he visto",
              "había visto",
              "veo"
            ],
            "correctIndex": 0,
            "explanation": "'Ayer' marca un momento específico y terminado del pasado, así que se usa el pretérito indefinido: vi."
          }
        ]
      },
      {
        "heading": "Práctica mixta en contexto narrativo",
        "body": [
          "En una narración, se usa el pluscuamperfecto para lo que ya había pasado antes del momento principal de la historia, y el pretérito perfecto para los hechos con relevancia en el presente de quien habla."
        ],
        "examples": [
          {
            "es": "Cuando llegamos al aeropuerto, el vuelo ya había salido, así que hemos tenido que esperar el siguiente.",
            "en": "When we arrived at the airport, the flight had already left, so we've had to wait for the next one."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa la narración con el tiempo perfecto correcto.",
            "sentence": "Para cuando sonó el despertador, mis padres ya ___ (salir) para el trabajo.",
            "answer": "habían salido",
            "explanation": "La salida ocurrió antes de que sonara el despertador (otro momento pasado), por eso se usa el pluscuamperfecto."
          },
          {
            "type": "multiple-choice",
            "question": "¿Qué tiempo verbal completa mejor: 'Esta semana ___ (yo/trabajar) mucho, así que estoy cansado'?",
            "options": [
              "he trabajado",
              "había trabajado",
              "trabajé",
              "trabajaba"
            ],
            "correctIndex": 0,
            "explanation": "'Esta semana' todavía no termina y el resultado (estar cansado) es relevante ahora, así que se usa el pretérito perfecto."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "word-order",
        "prompt": "Ordena las palabras.",
        "words": [
          "Todavía",
          "no",
          "he",
          "hablado",
          "con",
          "ella"
        ],
        "translation": "I still haven't talked with her.",
        "explanation": "El pretérito perfecto (he hablado) sigue el orden: marcador + presente de haber + participio."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras.",
        "words": [
          "Ya",
          "habíamos",
          "cenado",
          "cuando",
          "llegaste"
        ],
        "translation": "We had already had dinner when you arrived.",
        "explanation": "El pluscuamperfecto (habíamos cenado) describe una acción anterior a otra acción pasada (llegaste)."
      },
      {
        "type": "matching",
        "instructions": "Empareja cada infinitivo con su participio irregular.",
        "pairs": [
          {
            "left": "decir",
            "right": "dicho"
          },
          {
            "left": "hacer",
            "right": "hecho"
          },
          {
            "left": "ver",
            "right": "visto"
          },
          {
            "left": "escribir",
            "right": "escrito"
          },
          {
            "left": "morir",
            "right": "muerto"
          },
          {
            "left": "abrir",
            "right": "abierto"
          }
        ],
        "explanation": "Estos verbos no siguen el patrón regular -ado/-ido; sus participios hay que memorizarlos."
      },
      {
        "type": "multiple-choice",
        "question": "Completa: 'Ayer ___ a mi abuela; hoy ___ a mis primos.'",
        "options": [
          "visité / he visto",
          "he visitado / vi",
          "había visitado / veo",
          "visito / he visto"
        ],
        "correctIndex": 0,
        "explanation": "Con 'ayer' (momento específico y terminado) se usa el pretérito indefinido: visité. Con 'hoy' (relevancia presente) se usa el pretérito perfecto: he visto."
      },
      {
        "type": "fill-blank",
        "prompt": "Elige el tiempo verbal correcto según el contexto de la narración.",
        "sentence": "Cuando por fin salió el sol, ya ___ (llover) toda la noche.",
        "answer": "había llovido",
        "explanation": "La lluvia terminó antes de que saliera el sol, otro momento del pasado, así que se usa el pluscuamperfecto: había llovido."
      }
    ]
  },
  {
    "slug": "relative-pronouns-drill-1",
    "level": "B1",
    "number": 50,
    "title": "Los Pronombres Relativos: Práctica Extra, Part 1 of 3",
    "summary": "Esta lección es práctica adicional para reforzar el uso de los pronombres relativos ya estudiados, sin introducir reglas nuevas.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "Que: el pronombre relativo más común",
        "body": [
          "El pronombre 'que' es el más común y se usa tanto para personas como para cosas, con o sin preposición cuando es objeto directo."
        ],
        "examples": [
          {
            "es": "La mujer que llegó tarde es mi jefa.",
            "en": "The woman who arrived late is my boss."
          },
          {
            "es": "El libro que compré ayer es fascinante.",
            "en": "The book that I bought yesterday is fascinating."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa la oración con el pronombre relativo correcto.",
            "sentence": "El coche ___ compré la semana pasada ya tiene un problema.",
            "answer": "que",
            "hint": "Es el pronombre relativo más común, válido para personas y cosas.",
            "explanation": "'Que' es el pronombre relativo general y se usa aquí porque 'coche' es una cosa y no hay preposición."
          },
          {
            "type": "multiple-choice",
            "question": "¿Cuál es el pronombre relativo correcto? 'La chica ___ conocí ayer es muy simpática.'",
            "options": [
              "que",
              "quien",
              "cuyo",
              "donde"
            ],
            "correctIndex": 0,
            "explanation": "'Que' funciona como objeto directo del verbo 'conocí' sin necesidad de preposición ni coma."
          }
        ]
      },
      {
        "heading": "Quien y quienes: solo para personas",
        "body": [
          "Quien y quienes se refieren solo a personas y se usan típicamente después de una preposición o una coma, no pegados directamente al sustantivo."
        ],
        "examples": [
          {
            "es": "Mi hermano, quien vive en Madrid, viene a visitarnos.",
            "en": "My brother, who lives in Madrid, is coming to visit us."
          },
          {
            "es": "La persona con quien hablé no sabía la respuesta.",
            "en": "The person with whom I spoke didn't know the answer."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa con 'quien' o 'quienes'.",
            "sentence": "Mi vecina, ___ trabaja como enfermera, me ayudó mucho.",
            "answer": "quien",
            "hint": "Persona, singular, después de una coma.",
            "explanation": "'Quien' se refiere a una persona y aparece tras una coma, sin antecedente inmediato pegado al verbo."
          },
          {
            "type": "multiple-choice",
            "question": "Elige la opción correcta: 'Los estudiantes a ___ les expliqué la tarea entendieron todo.'",
            "options": [
              "que",
              "quienes",
              "cuyas",
              "donde"
            ],
            "correctIndex": 1,
            "explanation": "Después de la preposición 'a' y refiriéndose a personas en plural, se usa 'quienes'."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "¿Qué pronombre relativo es más apropiado? 'El museo ___ visitamos ayer tiene una exposición nueva.'",
        "options": [
          "que",
          "quien",
          "cuyo",
          "lo que"
        ],
        "correctIndex": 0,
        "explanation": "'Museo' es una cosa y no hay preposición ni coma, así que se usa 'que'."
      },
      {
        "type": "multiple-choice",
        "question": "'Los vecinos, ___ perro ladra toda la noche, se mudan pronto.'",
        "options": [
          "que",
          "quienes",
          "cuyo",
          "cuyos"
        ],
        "correctIndex": 2,
        "explanation": "'Perro' es masculino singular, así que corresponde 'cuyo', aunque 'vecinos' sea plural."
      },
      {
        "type": "multi-select",
        "question": "¿En cuáles de las siguientes oraciones se usa 'donde' correctamente? (Selecciona todas las que apliquen)",
        "options": [
          "Ese es el pueblo donde crecí.",
          "No sé donde quieres decir.",
          "La oficina donde trabajo está cerca del centro.",
          "El libro donde compré fue caro."
        ],
        "correctIndexes": [
          0,
          2
        ],
        "explanation": "'Donde' solo es correcto cuando el antecedente es un lugar ('pueblo', 'oficina'); con ideas abstractas se usa 'lo que' y con objetos como 'libro' se usa 'que'."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa con 'que', 'quien' o 'donde' según corresponda.",
        "sentence": "Esta es la playa ___ pasamos las vacaciones.",
        "answer": "donde",
        "hint": "El antecedente 'playa' es un lugar.",
        "explanation": "'Playa' es un lugar, así que el pronombre correcto es 'donde'."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa con el pronombre relativo correcto.",
        "sentence": "El hombre ___ me ayudó era un desconocido.",
        "answer": "que",
        "hint": "Sujeto, persona, sin preposición ni coma.",
        "explanation": "Como sujeto de persona sin preposición ni coma, se usa 'que'."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa con 'quien' o 'quienes'.",
        "sentence": "Mis padres, a ___ quiero mucho, viven en el campo.",
        "answer": "quienes",
        "hint": "Persona plural después de una preposición.",
        "explanation": "Con la preposición 'a' y un antecedente de personas en plural, corresponde 'quienes'."
      }
    ]
  },
  {
    "slug": "relative-pronouns-drill-2",
    "level": "B1",
    "number": 51,
    "title": "Los Pronombres Relativos: Práctica Extra, Part 2 of 3",
    "summary": "Esta lección es práctica adicional para reforzar el uso de los pronombres relativos ya estudiados, sin introducir reglas nuevas.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "El que / la que / los que / las que: énfasis y claridad",
        "body": [
          "El que, la que, los que y las que se usan para dar énfasis o para aclarar a cuál de varios antecedentes nos referimos, y concuerdan en género y número con el sustantivo."
        ],
        "examples": [
          {
            "es": "De mis dos primas, la que vive en Sevilla es médica.",
            "en": "Of my two cousins, the one who lives in Seville is a doctor."
          },
          {
            "es": "Los que llegaron primero consiguieron los mejores asientos.",
            "en": "Those who arrived first got the best seats."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa con la forma correcta de 'el que'.",
            "sentence": "Tengo tres primos; ___ vive en Lima es ingeniero.",
            "answer": "el que",
            "hint": "Se refiere a uno de varios, masculino singular.",
            "explanation": "'El que' distingue a un primo específico entre varios, concordando en masculino singular."
          },
          {
            "type": "multiple-choice",
            "question": "¿Cuál es correcto para dar énfasis? 'De todas las propuestas, ___ presentaste tú fue la mejor.'",
            "options": [
              "que",
              "la que",
              "donde",
              "cuyo"
            ],
            "correctIndex": 1,
            "explanation": "'La que' enfatiza cuál propuesta específica, concordando en femenino singular con 'propuesta'."
          }
        ]
      },
      {
        "heading": "Lo que: ideas sin antecedente concreto",
        "body": [
          "Lo que se refiere a una idea, una situación o algo no especificado, y equivale a 'what' en inglés cuando no hay un antecedente concreto."
        ],
        "examples": [
          {
            "es": "No entiendo lo que dices.",
            "en": "I don't understand what you're saying."
          },
          {
            "es": "Lo que más me gusta de este trabajo es la flexibilidad.",
            "en": "What I like most about this job is the flexibility."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa la oración con 'lo que'.",
            "sentence": "___ necesito ahora es un descanso.",
            "answer": "Lo que",
            "hint": "No hay un sustantivo específico como antecedente.",
            "explanation": "'Lo que' introduce una idea general (lo necesario) sin referirse a un sustantivo concreto."
          },
          {
            "type": "multiple-choice",
            "question": "Completa: '___ me sorprende es su actitud.'",
            "options": [
              "Que",
              "Lo que",
              "Quien",
              "Donde"
            ],
            "correctIndex": 1,
            "explanation": "El sujeto es una idea abstracta ('lo que me sorprende'), por eso se usa 'lo que'."
          }
        ]
      },
      {
        "heading": "Donde: para lugares",
        "body": [
          "Donde reemplaza a 'en que' o 'en el que' cuando el antecedente es un lugar."
        ],
        "examples": [
          {
            "es": "Esa es la casa donde nací.",
            "en": "That is the house where I was born."
          },
          {
            "es": "El restaurante donde cenamos anoche cerró.",
            "en": "The restaurant where we had dinner last night closed."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa con 'donde'.",
            "sentence": "Visitamos el pueblo ___ pasamos nuestra luna de miel.",
            "answer": "donde",
            "hint": "El antecedente es un lugar.",
            "explanation": "'Donde' se usa porque 'pueblo' es un lugar y equivale a 'en el que pasamos'."
          },
          {
            "type": "multiple-choice",
            "question": "¿Cuál es correcto? 'La oficina ___ trabajo está cerca del centro.'",
            "options": [
              "que",
              "quien",
              "donde",
              "cuyo"
            ],
            "correctIndex": 2,
            "explanation": "'Oficina' es un lugar, así que corresponde usar 'donde'."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con 'lo que'.",
        "sentence": "___ importa aquí es tu esfuerzo, no el resultado.",
        "answer": "Lo que",
        "hint": "No hay un sustantivo específico como antecedente.",
        "explanation": "Se refiere a una idea general (lo importante), por eso se necesita 'lo que'."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa con la forma correcta de 'cuyo'.",
        "sentence": "La chica ___ hermana es doctora vive en mi edificio.",
        "answer": "cuya",
        "hint": "Concuerda con 'hermana': femenino singular.",
        "explanation": "'Cuya' concuerda con 'hermana', el sustantivo poseído, en femenino singular."
      },
      {
        "type": "translate",
        "direction": "es-en",
        "prompt": "Traduce al inglés.",
        "source": "El libro que estás leyendo es mío.",
        "answer": "The book that you are reading is mine.",
        "altAnswers": [
          "The book you are reading is mine."
        ],
        "explanation": "'Que' se traduce como 'that' o se omite en inglés cuando es objeto directo."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Traduce al español.",
        "source": "The woman whose car was stolen called the police.",
        "answer": "La mujer cuyo coche fue robado llamó a la policía.",
        "explanation": "'Cuyo' concuerda con 'coche', masculino singular, no con 'mujer'."
      },
      {
        "type": "translate",
        "direction": "es-en",
        "prompt": "Traduce al inglés.",
        "source": "No entiendo lo que quieres decir.",
        "answer": "I don't understand what you mean.",
        "altAnswers": [
          "I don't understand what you want to say."
        ],
        "explanation": "'Lo que' equivale a 'what' cuando no hay un antecedente concreto."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Traduce al español.",
        "source": "This is the city where I grew up.",
        "answer": "Esta es la ciudad donde crecí.",
        "explanation": "Con un antecedente de lugar como 'ciudad', se usa 'donde'."
      }
    ]
  },
  {
    "slug": "relative-pronouns-drill-3",
    "level": "B1",
    "number": 52,
    "title": "Los Pronombres Relativos: Práctica Extra, Part 3 of 3",
    "summary": "Esta lección es práctica adicional para reforzar el uso de los pronombres relativos ya estudiados, sin introducir reglas nuevas.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "Cuyo, cuya, cuyos, cuyas: posesión",
        "body": [
          "Cuyo, cuya, cuyos y cuyas significan 'whose' y concuerdan en género y número con el sustantivo que los sigue, no con el poseedor."
        ],
        "examples": [
          {
            "es": "El autor cuya novela ganó el premio vive en Chile.",
            "en": "The author whose novel won the prize lives in Chile."
          },
          {
            "es": "La empresa cuyos empleados están más satisfechos tiene menos rotación.",
            "en": "The company whose employees are most satisfied has less turnover."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa con la forma correcta de 'cuyo'.",
            "sentence": "El escritor ___ libros son tan populares vendrá a la conferencia.",
            "answer": "cuyos",
            "hint": "Concuerda con 'libros': masculino plural.",
            "explanation": "'Cuyos' concuerda en género y número con 'libros', el sustantivo poseído, no con 'escritor'."
          },
          {
            "type": "multiple-choice",
            "question": "¿Cuál es correcto? 'La profesora ___ clases son las más difíciles se jubila este año.'",
            "options": [
              "cuyo",
              "cuya",
              "cuyos",
              "cuyas"
            ],
            "correctIndex": 3,
            "explanation": "'Clases' es femenino plural, por eso se necesita 'cuyas', aunque 'profesora' sea femenino singular."
          }
        ]
      },
      {
        "heading": "Práctica mixta: eligiendo el pronombre correcto",
        "body": [
          "En la práctica real, elegir el pronombre relativo correcto depende de si el antecedente es persona o cosa, si hay preposición o coma, y si se necesita énfasis o claridad."
        ],
        "examples": [
          {
            "es": "La ciudad donde vivo, cuyos parques son enormes, es muy verde.",
            "en": "The city where I live, whose parks are huge, is very green."
          }
        ],
        "checkpoint": [
          {
            "type": "word-order",
            "prompt": "Ordena las palabras para formar una oración correcta.",
            "words": [
              "El",
              "hombre",
              "a",
              "quien",
              "conocí",
              "ayer",
              "es",
              "mi",
              "profesor"
            ],
            "translation": "The man whom I met yesterday is my professor.",
            "explanation": "Con antecedente de persona y preposición 'a', el orden correcto usa 'a quien' antes del verbo 'conocí'."
          },
          {
            "type": "matching",
            "instructions": "Une cada oración incompleta con el pronombre relativo que corresponde.",
            "pairs": [
              {
                "left": "La casa ___ vivimos tiene un jardín grande.",
                "right": "donde"
              },
              {
                "left": "El escritor ___ novelas son best-sellers vendrá.",
                "right": "cuyas"
              },
              {
                "left": "___ dijiste no tiene sentido.",
                "right": "Lo que"
              },
              {
                "left": "La persona con ___ hablé fue muy amable.",
                "right": "quien"
              }
            ],
            "explanation": "Cada oración exige un pronombre distinto según el tipo de antecedente: lugar, posesión, idea abstracta o persona con preposición."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "word-order",
        "prompt": "Ordena las palabras para formar una oración correcta.",
        "words": [
          "El",
          "hombre",
          "a",
          "quien",
          "conocí",
          "ayer",
          "es",
          "mi",
          "profesor"
        ],
        "translation": "The man whom I met yesterday is my professor.",
        "explanation": "Con antecedente de persona y preposición 'a', se usa 'a quien' antes del verbo."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras para formar una oración correcta.",
        "words": [
          "Los",
          "que",
          "trabajan",
          "duro",
          "consiguen",
          "sus",
          "metas"
        ],
        "translation": "Those who work hard achieve their goals.",
        "explanation": "'Los que' introduce un grupo de personas no especificado con énfasis, seguido del verbo en plural."
      },
      {
        "type": "matching",
        "instructions": "Une cada oración con el pronombre relativo que falta.",
        "pairs": [
          {
            "left": "La casa ___ vivimos tiene un jardín grande.",
            "right": "donde"
          },
          {
            "left": "El escritor ___ novelas son best-sellers vendrá.",
            "right": "cuyas"
          },
          {
            "left": "___ dijiste no tiene sentido.",
            "right": "Lo que"
          },
          {
            "left": "La persona con ___ hablé fue muy amable.",
            "right": "quien"
          }
        ],
        "explanation": "Cada oración requiere un pronombre distinto según el antecedente: lugar, posesión, idea abstracta o persona con preposición."
      },
      {
        "type": "multiple-choice",
        "question": "'Necesito hablar con el gerente, ___ oficina está en el tercer piso.'",
        "options": [
          "que",
          "quien",
          "cuyo",
          "cuya"
        ],
        "correctIndex": 3,
        "explanation": "'Oficina' es femenino singular, así que corresponde 'cuya', aunque 'gerente' pueda ser masculino."
      },
      {
        "type": "multi-select",
        "question": "¿Cuáles oraciones usan correctamente 'el que / la que / los que / las que'? (Selecciona todas las que apliquen)",
        "options": [
          "De las dos casas, la que tiene jardín es más cara.",
          "Los que estudian aprueban el examen.",
          "El que vive en Madrid, quien es mi tío, viene mañana.",
          "Las que compraste ayer están en la mesa."
        ],
        "correctIndexes": [
          0,
          1,
          3
        ],
        "explanation": "Las tres primeras oraciones usan 'el que / la que / los que / las que' correctamente para distinguir o generalizar; la tercera repite el antecedente con 'quien', lo cual es redundante e incorrecto."
      }
    ]
  },
  {
    "slug": "passive-voice-possessive-pronouns-drill-1",
    "level": "B1",
    "number": 53,
    "title": "Voz Pasiva y Pronombres Posesivos: Práctica Extra, Part 1 of 3",
    "summary": "Esta lección de repaso combina práctica adicional de la voz pasiva (con 'ser' y con 'se') y de los pronombres posesivos tónicos, dos temas ya vistos anteriormente.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "Voz pasiva con 'ser' + participio + 'por'",
        "body": [
          "Recuerda que en la voz pasiva formal el participio concuerda en género y número con el sujeto: 'La novela fue escrita por Cervantes'."
        ],
        "examples": [
          {
            "es": "El puente fue construido por los romanos.",
            "en": "The bridge was built by the Romans."
          },
          {
            "es": "Las cartas fueron enviadas por la secretaria.",
            "en": "The letters were sent by the secretary."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa la oración en voz pasiva con la forma correcta del participio.",
            "sentence": "La casa ___ (construir) por mi abuelo en 1950.",
            "answer": "fue construida",
            "hint": "ser + participio, concuerda con 'la casa'",
            "explanation": "En la voz pasiva con 'ser', el participio concuerda en género y número con el sujeto ('la casa' → 'construida')."
          },
          {
            "type": "multiple-choice",
            "question": "¿Cuál es la forma correcta de esta oración en voz pasiva?",
            "options": [
              "Los cuadros fueron pintado por Goya.",
              "Los cuadros fueron pintados por Goya.",
              "Los cuadros fue pintados por Goya.",
              "Los cuadros son pintados por Goya en 1800."
            ],
            "correctIndex": 1,
            "explanation": "El participio 'pintados' debe concordar en género y número con el sujeto plural masculino 'los cuadros', y el verbo 'ser' va en pasado porque la acción ya terminó."
          }
        ]
      },
      {
        "heading": "La pasiva con 'se': la alternativa más hablada",
        "body": [
          "En el habla cotidiana, la pasiva con 'se' sustituye a menudo a la pasiva con 'ser', y el verbo concuerda con el sustantivo que sigue: 'Se venden casas'."
        ],
        "examples": [
          {
            "es": "Se venden casas en esta calle.",
            "en": "Houses are sold on this street."
          },
          {
            "es": "Se firmó el contrato ayer.",
            "en": "The contract was signed yesterday."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa con la pasiva refleja (se + verbo).",
            "sentence": "___ (vender) muchos libros en esa librería.",
            "answer": "Se venden",
            "hint": "el verbo concuerda con 'libros', plural",
            "explanation": "En la pasiva con 'se', el verbo concuerda con el sustantivo que sigue: 'libros' es plural, así que el verbo va en plural: 'se venden'."
          },
          {
            "type": "translate",
            "direction": "es-en",
            "prompt": "Traduce al inglés.",
            "source": "Se alquilan apartamentos en el centro.",
            "answer": "Apartments are rented in the center.",
            "altAnswers": [
              "Apartments are rented downtown.",
              "Apartments for rent in the center."
            ],
            "explanation": "La construcción 'se alquilan apartamentos' es una pasiva refleja; en inglés se traduce con la voz pasiva 'apartments are rented'."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "¿Cuál es la voz pasiva correcta de 'El gobierno aprobó la ley'?",
        "options": [
          "La ley fue aprobada por el gobierno.",
          "La ley fue aprobado por el gobierno.",
          "La ley se ha aprobado por el gobierno.",
          "El gobierno fue aprobado por la ley."
        ],
        "correctIndex": 0,
        "explanation": "El sujeto pasivo es 'la ley' (femenino singular), así que el participio debe concordar: 'aprobada'. El agente introducido por 'por' es 'el gobierno'."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la oración en voz pasiva formal.",
        "sentence": "Los premios ___ (entregar) por la directora del museo.",
        "answer": "fueron entregados",
        "hint": "ser (pretérito) + participio en plural masculino",
        "explanation": "El sujeto 'los premios' es plural masculino, así que el verbo 'ser' va en tercera persona del plural ('fueron') y el participio concuerda: 'entregados'."
      },
      {
        "type": "translate",
        "direction": "es-en",
        "prompt": "Traduce al inglés esta oración con pasiva refleja.",
        "source": "Se habla inglés en esta tienda.",
        "answer": "English is spoken in this store.",
        "altAnswers": [
          "English spoken here.",
          "They speak English in this store."
        ],
        "explanation": "'Se habla' es una construcción pasiva con 'se'; en inglés equivale a la voz pasiva 'is spoken'."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa con la pasiva refleja.",
        "sentence": "___ (buscar) empleados con experiencia.",
        "answer": "Se buscan",
        "hint": "el verbo concuerda con 'empleados', plural",
        "explanation": "'Empleados' es el sujeto gramatical plural, así que el verbo va en plural: 'se buscan'."
      },
      {
        "type": "multi-select",
        "question": "¿Cuáles de estas oraciones son ejemplos de pasiva refleja (no impersonal)?",
        "options": [
          "Se alquilan bicicletas.",
          "Se duerme bien en verano.",
          "Se reparan zapatos aquí.",
          "Se sale poco los domingos."
        ],
        "correctIndexes": [
          0,
          2
        ],
        "explanation": "'Se alquilan bicicletas' y 'se reparan zapatos' concuerdan con un sustantivo plural (bicicletas, zapatos), por lo que son pasivas reflejas. Las otras dos no tienen sustantivo con el que concordar y son impersonales."
      },
      {
        "type": "multiple-choice",
        "question": "En la oración 'Se trabaja mucho en esta empresa', el 'se' es...",
        "options": [
          "pasivo, porque hay un sujeto plural",
          "impersonal, porque no hay sujeto expreso y el verbo va en singular",
          "reflexivo, porque el sujeto se afecta a sí mismo",
          "recíproco, porque hay dos sujetos"
        ],
        "correctIndex": 1,
        "explanation": "No hay ningún sustantivo con el que el verbo pueda concordar; el verbo queda fijo en singular, lo que indica un 'se' impersonal."
      }
    ]
  },
  {
    "slug": "passive-voice-possessive-pronouns-drill-2",
    "level": "B1",
    "number": 54,
    "title": "Voz Pasiva y Pronombres Posesivos: Práctica Extra, Part 2 of 3",
    "summary": "Esta lección de repaso combina práctica adicional de la voz pasiva (con 'ser' y con 'se') y de los pronombres posesivos tónicos, dos temas ya vistos anteriormente.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "Pasiva refleja vs. 'se' impersonal",
        "body": [
          "Distingue la pasiva refleja, donde el sustantivo es el sujeto gramatical, del 'se' impersonal, donde no hay sujeto expreso y el verbo va siempre en singular: 'Se trabaja mucho aquí'."
        ],
        "examples": [
          {
            "es": "Se necesitan camareros.",
            "en": "Waiters are needed."
          },
          {
            "es": "Se vive bien en este barrio.",
            "en": "One lives well in this neighborhood."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Qué tipo de 'se' aparece en 'Se buscan camareros'?",
            "options": [
              "Se impersonal",
              "Se pasivo (pasiva refleja)",
              "Se reflexivo",
              "Se recíproco"
            ],
            "correctIndex": 1,
            "explanation": "Es pasiva refleja porque 'camareros' es el sujeto gramatical y concuerda con el verbo en plural ('se buscan')."
          },
          {
            "type": "multi-select",
            "question": "Selecciona las oraciones que usan el 'se' impersonal (sin sujeto expreso, verbo siempre en singular).",
            "options": [
              "Se vive bien en este pueblo.",
              "Se venden pisos nuevos.",
              "Se come temprano en España.",
              "Se necesitan voluntarios."
            ],
            "correctIndexes": [
              0,
              2
            ],
            "explanation": "'Se vive' y 'se come' son impersonales: no hay sujeto y el verbo queda en singular. 'Se venden pisos' y 'se necesitan voluntarios' son pasivas reflejas porque el sustantivo plural concuerda con el verbo."
          }
        ]
      },
      {
        "heading": "Pronombres posesivos tónicos: sustituir al sustantivo",
        "body": [
          "Los pronombres posesivos tónicos sustituyen al sustantivo y concuerdan en género y número con lo poseído, no con el poseedor: 'Este libro es mío'."
        ],
        "examples": [
          {
            "es": "Estas llaves son tuyas.",
            "en": "These keys are yours."
          },
          {
            "es": "El coche rojo es el nuestro.",
            "en": "The red car is ours."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Sustituye el sustantivo por el pronombre posesivo tónico correcto.",
            "sentence": "Esta maleta no es de Juan, es ___.",
            "answer": "mía",
            "hint": "concuerda con 'maleta', femenino singular",
            "explanation": "El pronombre posesivo tónico concuerda con lo poseído ('maleta', femenino singular), no con el poseedor, por eso es 'mía'."
          },
          {
            "type": "translate",
            "direction": "en-es",
            "prompt": "Traduce al español usando un pronombre posesivo tónico.",
            "source": "These keys are ours.",
            "answer": "Estas llaves son nuestras.",
            "altAnswers": [
              "Estas llaves son las nuestras."
            ],
            "explanation": "'Ours' se traduce por el pronombre tónico 'nuestras', que concuerda en género y número con 'llaves'."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "fill-blank",
        "prompt": "Sustituye el sustantivo por el pronombre posesivo tónico correcto.",
        "sentence": "¿De quién es este paraguas? Es ___.",
        "answer": "suyo",
        "hint": "posesivo tónico masculino singular",
        "explanation": "El pronombre tónico 'suyo' sustituye a 'paraguas' (masculino singular) y concuerda con él, no con el poseedor."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Traduce al español.",
        "source": "This backpack is not mine; it's hers.",
        "answer": "Esta mochila no es mía; es suya.",
        "altAnswers": [
          "Esta mochila no es mía, es la suya."
        ],
        "explanation": "'Mine' y 'hers' se traducen con los pronombres posesivos tónicos 'mía' y 'suya', que concuerdan con 'mochila' (femenino singular)."
      },
      {
        "type": "multiple-choice",
        "question": "¿Cuál oración coloca correctamente el posesivo tónico como adjetivo?",
        "options": [
          "Suya casa está cerca de la mía.",
          "Su casa suya está cerca de la mía.",
          "La casa suya está cerca de la mía.",
          "La suya casa está cerca de mía."
        ],
        "correctIndex": 2,
        "explanation": "Como adjetivo pospuesto, el posesivo tónico va después del sustantivo y suele llevar artículo: 'la casa suya'."
      },
      {
        "type": "fill-blank",
        "prompt": "Elige la forma átona o tónica según corresponda.",
        "sentence": "Tenemos que llevar ___ documentos; los tuyos ya están listos.",
        "answer": "nuestros",
        "hint": "posesivo átono, va antes del sustantivo",
        "explanation": "Antes del sustantivo se usa siempre la forma átona corta: 'nuestros documentos', no la tónica 'los nuestros documentos'."
      },
      {
        "type": "multi-select",
        "question": "Selecciona las formas posesivas tónicas correctas para el plural femenino.",
        "options": [
          "mías",
          "mis",
          "tuyas",
          "tus",
          "suyas"
        ],
        "correctIndexes": [
          0,
          2,
          4
        ],
        "explanation": "'Mías', 'tuyas' y 'suyas' son formas tónicas femeninas plurales. 'Mis' y 'tus' son formas átonas y no cambian según el género."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras para formar una oración en voz pasiva.",
        "words": [
          "Las",
          "ventanas",
          "fueron",
          "rotas",
          "por",
          "el",
          "viento"
        ],
        "translation": "The windows were broken by the wind.",
        "explanation": "El orden es: sujeto ('las ventanas') + ser ('fueron') + participio ('rotas') + por + agente ('el viento')."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras para formar una oración con posesivo tónico.",
        "words": [
          "Este",
          "problema",
          "es",
          "también",
          "nuestro"
        ],
        "translation": "This problem is also ours.",
        "explanation": "El posesivo tónico 'nuestro' sustituye al sustantivo y va después del verbo 'ser': 'Este problema es también nuestro.'"
      }
    ]
  },
  {
    "slug": "passive-voice-possessive-pronouns-drill-3",
    "level": "B1",
    "number": 55,
    "title": "Voz Pasiva y Pronombres Posesivos: Práctica Extra, Part 3 of 3",
    "summary": "Esta lección de repaso combina práctica adicional de la voz pasiva (con 'ser' y con 'se') y de los pronombres posesivos tónicos, dos temas ya vistos anteriormente.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Posesivo tónico tras 'ser' vs. como adjetivo pospuesto",
        "body": [
          "Cuando el posesivo tónico acompaña a un sustantivo en vez de sustituirlo, se coloca después de él y suele llevar artículo: 'un amigo mío', 'la casa suya'."
        ],
        "examples": [
          {
            "es": "Un amigo mío vive en Madrid.",
            "en": "A friend of mine lives in Madrid."
          },
          {
            "es": "¿Es tuya esta bufanda?",
            "en": "Is this scarf yours?"
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Cuál oración usa correctamente el posesivo tónico como adjetivo pospuesto?",
            "options": [
              "Un mío amigo llegó tarde.",
              "Un amigo mío llegó tarde.",
              "Mi amigo tónico llegó tarde.",
              "Un amigo suyo mío llegó tarde."
            ],
            "correctIndex": 1,
            "explanation": "Cuando el posesivo tónico acompaña a un sustantivo, se coloca después de él: 'un amigo mío', no antes."
          }
        ]
      },
      {
        "heading": "Posesivos átonos vs. tónicos: repaso",
        "body": [
          "Repasa la diferencia: los posesivos átonos (mi, tu, su...) van siempre antes del sustantivo, mientras que los tónicos (mío, tuyo, suyo...) van después o sustituyen al sustantivo."
        ],
        "examples": [
          {
            "es": "Mi hermana llega hoy; la tuya llega mañana.",
            "en": "My sister arrives today; yours arrives tomorrow."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Elige entre el posesivo átono y el tónico según la posición.",
            "sentence": "___ coche es nuevo; el tuyo es más viejo.",
            "answer": "Mi",
            "hint": "posesivo átono, va antes del sustantivo",
            "explanation": "Antes del sustantivo se usa el posesivo átono ('mi coche'); después o en sustitución se usa el tónico ('el tuyo')."
          },
          {
            "type": "multi-select",
            "question": "Selecciona los pronombres posesivos tónicos (forma larga).",
            "options": [
              "su",
              "suyo",
              "tu",
              "tuya",
              "mis",
              "nuestro"
            ],
            "correctIndexes": [
              1,
              3,
              5
            ],
            "explanation": "Las formas tónicas o largas son 'suyo', 'tuya' y 'nuestro'. 'Su', 'tu' y 'mis' son formas átonas cortas que siempre van antes del sustantivo."
          }
        ]
      },
      {
        "heading": "Práctica mixta: voz pasiva y posesivos tónicos",
        "body": [
          "Esta última sección combina la voz pasiva y los pronombres posesivos tónicos en un solo repaso."
        ],
        "examples": [
          {
            "es": "El premio fue entregado por un colega mío.",
            "en": "The prize was awarded by a colleague of mine."
          }
        ],
        "checkpoint": [
          {
            "type": "word-order",
            "prompt": "Ordena las palabras para formar una oración en voz pasiva.",
            "words": [
              "El",
              "premio",
              "fue",
              "entregado",
              "por",
              "el",
              "director"
            ],
            "translation": "The prize was awarded by the director.",
            "explanation": "El orden correcto en la voz pasiva con 'ser' es: sujeto + ser + participio + por + agente: 'El premio fue entregado por el director.'"
          },
          {
            "type": "matching",
            "instructions": "Relaciona cada oración con la estructura gramatical que representa.",
            "pairs": [
              {
                "left": "Se habla español en Argentina.",
                "right": "Se impersonal"
              },
              {
                "left": "Se venden flores en el mercado.",
                "right": "Pasiva refleja"
              },
              {
                "left": "Este anillo es mío.",
                "right": "Pronombre posesivo tónico"
              },
              {
                "left": "Un colega suyo lo llamó.",
                "right": "Posesivo tónico como adjetivo"
              }
            ],
            "explanation": "Cada estructura se reconoce por su función: el 'se' impersonal no tiene sujeto expreso, la pasiva refleja concuerda con el sustantivo, el pronombre tónico sustituye al sustantivo, y el posesivo tónico pospuesto acompaña al sustantivo como adjetivo."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "matching",
        "instructions": "Relaciona cada oración con su estructura gramatical.",
        "pairs": [
          {
            "left": "Se vive tranquilo en este pueblo.",
            "right": "Se impersonal"
          },
          {
            "left": "Se construyeron dos puentes nuevos.",
            "right": "Pasiva refleja"
          },
          {
            "left": "El coche azul es el mío.",
            "right": "Pronombre posesivo tónico"
          },
          {
            "left": "Una prima suya nos visitó.",
            "right": "Posesivo tónico como adjetivo"
          }
        ],
        "explanation": "El 'se' impersonal no concuerda con ningún sustantivo; la pasiva refleja concuerda con el sustantivo plural; el pronombre tónico sustituye al sustantivo; y el posesivo tónico pospuesto funciona como adjetivo."
      },
      {
        "type": "translate",
        "direction": "es-en",
        "prompt": "Traduce al inglés.",
        "source": "La catedral fue diseñada por un arquitecto famoso.",
        "answer": "The cathedral was designed by a famous architect.",
        "explanation": "Es una pasiva formal con 'ser': sujeto + fue + participio + por + agente, que en inglés se traduce igual con 'was' + participio + 'by'."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Traduce al español usando la pasiva refleja.",
        "source": "Newspapers are sold on that corner.",
        "answer": "Se venden periódicos en esa esquina.",
        "altAnswers": [
          "Los periódicos se venden en esa esquina."
        ],
        "explanation": "En español, para hablar de una acción sin mencionar quién la hace, se prefiere la pasiva refleja: 'se venden periódicos'."
      },
      {
        "type": "fill-blank",
        "prompt": "Transforma la oración activa en pasiva refleja.",
        "sentence": "Preparan la comida en la cocina. → ___ la comida en la cocina.",
        "answer": "Se prepara",
        "hint": "el verbo concuerda con 'comida', singular",
        "explanation": "Al pasar a la pasiva refleja, el verbo concuerda con el sustantivo 'comida' (singular), así que queda 'se prepara'."
      },
      {
        "type": "multiple-choice",
        "question": "¿Qué oración combina correctamente la voz pasiva y un posesivo tónico?",
        "options": [
          "Este cuadro fue pintado por un tío mío.",
          "Este cuadro fue pintó por un tío mío.",
          "Este cuadro es pintado por un tío mi.",
          "Este cuadro fue pintado por un mío tío."
        ],
        "correctIndex": 0,
        "explanation": "La voz pasiva requiere 'ser' + participio concordado ('fue pintado') y el posesivo tónico pospuesto 'mío' va después del sustantivo 'tío'."
      }
    ]
  },
  {
    "slug": "b1-vocabulary-practice-1",
    "level": "B1",
    "number": 56,
    "title": "B1 Vocabulary Practice, Part 1 of 10",
    "summary": "Test yourself on all 500 words from the B1 vocabulary lists, grouped by lesson.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "Emociones y reacciones",
        "body": [
          "Las 50 palabras de la Lección 1, agrupadas para repasar."
        ],
        "checkpoint": [
          {
            "type": "matching",
            "instructions": "Empareja cada palabra con su significado (Emociones y reacciones, parte 1).",
            "pairs": [
              {
                "left": "alegrarse (de)",
                "right": "to be glad (about)"
              },
              {
                "left": "sentir",
                "right": "to feel / to be sorry"
              },
              {
                "left": "temer",
                "right": "to fear"
              },
              {
                "left": "sorprender",
                "right": "to surprise"
              },
              {
                "left": "molestar",
                "right": "to bother"
              },
              {
                "left": "preocupar",
                "right": "to worry"
              },
              {
                "left": "emocionarse",
                "right": "to get excited"
              },
              {
                "left": "frustrarse",
                "right": "to get frustrated"
              },
              {
                "left": "enojarse",
                "right": "to get angry"
              },
              {
                "left": "calmarse",
                "right": "to calm down"
              }
            ],
            "explanation": "Palabras 1-10 de este tema."
          },
          {
            "type": "matching",
            "instructions": "Empareja cada palabra con su significado (Emociones y reacciones, parte 2).",
            "pairs": [
              {
                "left": "la alegría",
                "right": "joy"
              },
              {
                "left": "la tristeza",
                "right": "sadness"
              },
              {
                "left": "el miedo",
                "right": "fear"
              },
              {
                "left": "la sorpresa",
                "right": "surprise"
              },
              {
                "left": "el enojo",
                "right": "anger"
              },
              {
                "left": "la esperanza",
                "right": "hope"
              },
              {
                "left": "el orgullo",
                "right": "pride"
              },
              {
                "left": "los celos",
                "right": "jealousy"
              },
              {
                "left": "la vergüenza",
                "right": "embarrassment"
              },
              {
                "left": "el alivio",
                "right": "relief"
              }
            ],
            "explanation": "Palabras 11-20 de este tema."
          },
          {
            "type": "matching",
            "instructions": "Empareja cada palabra con su significado (Emociones y reacciones, parte 3).",
            "pairs": [
              {
                "left": "sentirse orgulloso",
                "right": "to feel proud"
              },
              {
                "left": "sentirse aliviado",
                "right": "to feel relieved"
              },
              {
                "left": "dar pena",
                "right": "to make one feel sorry"
              },
              {
                "left": "dar rabia",
                "right": "to make one furious"
              },
              {
                "left": "estar harto",
                "right": "to be fed up"
              },
              {
                "left": "agradecer",
                "right": "to be thankful for"
              },
              {
                "left": "lamentar",
                "right": "to regret"
              },
              {
                "left": "consolar",
                "right": "to console"
              },
              {
                "left": "animar",
                "right": "to encourage"
              },
              {
                "left": "desanimarse",
                "right": "to get discouraged"
              }
            ],
            "explanation": "Palabras 21-30 de este tema."
          },
          {
            "type": "matching",
            "instructions": "Empareja cada palabra con su significado (Emociones y reacciones, parte 4).",
            "pairs": [
              {
                "left": "conmover",
                "right": "to move (emotionally)"
              },
              {
                "left": "asustarse",
                "right": "to get scared"
              },
              {
                "left": "tranquilizarse",
                "right": "to relax / settle down"
              },
              {
                "left": "entusiasmarse",
                "right": "to become enthusiastic"
              },
              {
                "left": "decepcionar",
                "right": "to disappoint"
              },
              {
                "left": "la decepción",
                "right": "disappointment"
              },
              {
                "left": "el asombro",
                "right": "amazement"
              },
              {
                "left": "asombrarse",
                "right": "to be amazed"
              },
              {
                "left": "indignarse",
                "right": "to become indignant"
              },
              {
                "left": "compadecerse",
                "right": "to sympathize"
              }
            ],
            "explanation": "Palabras 31-40 de este tema."
          },
          {
            "type": "matching",
            "instructions": "Empareja cada palabra con su significado (Emociones y reacciones, parte 5).",
            "pairs": [
              {
                "left": "el nerviosismo",
                "right": "nervousness"
              },
              {
                "left": "ponerse nervioso",
                "right": "to get nervous"
              },
              {
                "left": "reponerse",
                "right": "to recover / compose oneself"
              },
              {
                "left": "el bienestar",
                "right": "well-being"
              },
              {
                "left": "el malestar",
                "right": "discomfort / unease"
              },
              {
                "left": "sentirse agobiado",
                "right": "to feel overwhelmed"
              },
              {
                "left": "desahogarse",
                "right": "to vent / get something off one's chest"
              },
              {
                "left": "la ternura",
                "right": "tenderness"
              },
              {
                "left": "la impotencia",
                "right": "helplessness"
              },
              {
                "left": "la satisfacción",
                "right": "satisfaction"
              }
            ],
            "explanation": "Palabras 41-50 de este tema."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multi-select",
        "question": "¿Cuáles de estas palabras describen emociones? (Elige todas las correctas)",
        "options": [
          "la alegría",
          "el edificio",
          "el miedo",
          "la deuda"
        ],
        "correctIndexes": [
          0,
          2
        ],
        "explanation": "La alegría y el miedo son emociones; el edificio y la deuda pertenecen a otros temas."
      }
    ]
  },
  {
    "slug": "b1-vocabulary-practice-2",
    "level": "B1",
    "number": 57,
    "title": "B1 Vocabulary Practice, Part 2 of 10",
    "summary": "Test yourself on all 500 words from the B1 vocabulary lists, grouped by lesson.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "Opiniones e incertidumbre",
        "body": [
          "Las 50 palabras de la Lección 2, agrupadas para repasar."
        ],
        "checkpoint": [
          {
            "type": "matching",
            "instructions": "Empareja cada palabra con su significado (Opiniones e incertidumbre, parte 1).",
            "pairs": [
              {
                "left": "opinar",
                "right": "to have an opinion"
              },
              {
                "left": "la opinión",
                "right": "the opinion"
              },
              {
                "left": "estar de acuerdo",
                "right": "to agree"
              },
              {
                "left": "estar en desacuerdo",
                "right": "to disagree"
              },
              {
                "left": "dudar",
                "right": "to doubt"
              },
              {
                "left": "la duda",
                "right": "the doubt"
              },
              {
                "left": "la certeza",
                "right": "the certainty"
              },
              {
                "left": "cierto",
                "right": "certain / true"
              },
              {
                "left": "incierto",
                "right": "uncertain"
              },
              {
                "left": "negar",
                "right": "to deny"
              }
            ],
            "explanation": "Palabras 1-10 de este tema."
          },
          {
            "type": "matching",
            "instructions": "Empareja cada palabra con su significado (Opiniones e incertidumbre, parte 2).",
            "pairs": [
              {
                "left": "afirmar",
                "right": "to affirm"
              },
              {
                "left": "suponer",
                "right": "to suppose"
              },
              {
                "left": "la suposición",
                "right": "the assumption"
              },
              {
                "left": "convencer",
                "right": "to convince"
              },
              {
                "left": "convencido",
                "right": "convinced"
              },
              {
                "left": "dudoso",
                "right": "doubtful"
              },
              {
                "left": "probable",
                "right": "probable"
              },
              {
                "left": "improbable",
                "right": "improbable"
              },
              {
                "left": "posible",
                "right": "possible"
              },
              {
                "left": "imposible",
                "right": "impossible"
              }
            ],
            "explanation": "Palabras 11-20 de este tema."
          },
          {
            "type": "matching",
            "instructions": "Empareja cada palabra con su significado (Opiniones e incertidumbre, parte 3).",
            "pairs": [
              {
                "left": "es evidente",
                "right": "it's evident"
              },
              {
                "left": "es obvio",
                "right": "it's obvious"
              },
              {
                "left": "aparentemente",
                "right": "apparently"
              },
              {
                "left": "supuestamente",
                "right": "supposedly"
              },
              {
                "left": "cuestionar",
                "right": "to question"
              },
              {
                "left": "confirmar",
                "right": "to confirm"
              },
              {
                "left": "desmentir",
                "right": "to disprove / deny"
              },
              {
                "left": "la prueba",
                "right": "the proof"
              },
              {
                "left": "el argumento",
                "right": "the argument"
              },
              {
                "left": "el punto de vista",
                "right": "the point of view"
              }
            ],
            "explanation": "Palabras 21-30 de este tema."
          },
          {
            "type": "matching",
            "instructions": "Empareja cada palabra con su significado (Opiniones e incertidumbre, parte 4).",
            "pairs": [
              {
                "left": "desde mi punto de vista",
                "right": "from my point of view"
              },
              {
                "left": "estar seguro",
                "right": "to be sure"
              },
              {
                "left": "tener razón",
                "right": "to be right"
              },
              {
                "left": "equivocarse",
                "right": "to be wrong / make a mistake"
              },
              {
                "left": "cambiar de opinión",
                "right": "to change one's mind"
              },
              {
                "left": "reconsiderar",
                "right": "to reconsider"
              },
              {
                "left": "el prejuicio",
                "right": "the bias / prejudice"
              },
              {
                "left": "objetivo",
                "right": "objective"
              },
              {
                "left": "subjetivo",
                "right": "subjective"
              },
              {
                "left": "razonable",
                "right": "reasonable"
              }
            ],
            "explanation": "Palabras 31-40 de este tema."
          },
          {
            "type": "matching",
            "instructions": "Empareja cada palabra con su significado (Opiniones e incertidumbre, parte 5).",
            "pairs": [
              {
                "left": "cuestionable",
                "right": "questionable"
              },
              {
                "left": "sin duda",
                "right": "without a doubt"
              },
              {
                "left": "tal vez",
                "right": "maybe"
              },
              {
                "left": "quizás",
                "right": "perhaps"
              },
              {
                "left": "a lo mejor",
                "right": "maybe"
              },
              {
                "left": "en mi opinión",
                "right": "in my opinion"
              },
              {
                "left": "discrepar",
                "right": "to disagree strongly"
              },
              {
                "left": "comprobar",
                "right": "to verify"
              },
              {
                "left": "el hecho",
                "right": "the fact"
              },
              {
                "left": "la creencia",
                "right": "the belief"
              }
            ],
            "explanation": "Palabras 41-50 de este tema."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Traduce al español.",
        "source": "the payroll",
        "answer": "la nómina",
        "explanation": "\"La nómina\" significa \"the payroll\"."
      }
    ]
  },
  {
    "slug": "b1-vocabulary-practice-3",
    "level": "B1",
    "number": 58,
    "title": "B1 Vocabulary Practice, Part 3 of 10",
    "summary": "Test yourself on all 500 words from the B1 vocabulary lists, grouped by lesson.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Esperanzas y el mundo natural",
        "body": [
          "Las 50 palabras de la Lección 3, agrupadas para repasar."
        ],
        "checkpoint": [
          {
            "type": "matching",
            "instructions": "Empareja cada palabra con su significado (Esperanzas y el mundo natural, parte 1).",
            "pairs": [
              {
                "left": "la naturaleza",
                "right": "nature"
              },
              {
                "left": "el medio ambiente",
                "right": "the environment"
              },
              {
                "left": "el planeta",
                "right": "the planet"
              },
              {
                "left": "el bosque",
                "right": "the forest"
              },
              {
                "left": "la selva",
                "right": "the jungle"
              },
              {
                "left": "el desierto",
                "right": "the desert"
              },
              {
                "left": "el río",
                "right": "the river"
              },
              {
                "left": "el lago",
                "right": "the lake"
              },
              {
                "left": "el océano",
                "right": "the ocean"
              },
              {
                "left": "la montaña",
                "right": "the mountain"
              }
            ],
            "explanation": "Palabras 1-10 de este tema."
          },
          {
            "type": "matching",
            "instructions": "Empareja cada palabra con su significado (Esperanzas y el mundo natural, parte 2).",
            "pairs": [
              {
                "left": "el valle",
                "right": "the valley"
              },
              {
                "left": "la costa",
                "right": "the coast"
              },
              {
                "left": "la isla",
                "right": "the island"
              },
              {
                "left": "la tierra",
                "right": "the earth / land"
              },
              {
                "left": "el suelo",
                "right": "the ground / soil"
              },
              {
                "left": "el aire",
                "right": "the air"
              },
              {
                "left": "contaminar",
                "right": "to pollute"
              },
              {
                "left": "la contaminación",
                "right": "pollution"
              },
              {
                "left": "reciclar",
                "right": "to recycle"
              },
              {
                "left": "proteger",
                "right": "to protect"
              }
            ],
            "explanation": "Palabras 11-20 de este tema."
          },
          {
            "type": "matching",
            "instructions": "Empareja cada palabra con su significado (Esperanzas y el mundo natural, parte 3).",
            "pairs": [
              {
                "left": "conservar",
                "right": "to conserve"
              },
              {
                "left": "la especie",
                "right": "the species"
              },
              {
                "left": "en peligro de extinción",
                "right": "endangered"
              },
              {
                "left": "el cambio climático",
                "right": "climate change"
              },
              {
                "left": "el calentamiento global",
                "right": "global warming"
              },
              {
                "left": "sostenible",
                "right": "sustainable"
              },
              {
                "left": "renovable",
                "right": "renewable"
              },
              {
                "left": "la energía solar",
                "right": "solar energy"
              },
              {
                "left": "el recurso natural",
                "right": "the natural resource"
              },
              {
                "left": "escaso",
                "right": "scarce"
              }
            ],
            "explanation": "Palabras 21-30 de este tema."
          },
          {
            "type": "matching",
            "instructions": "Empareja cada palabra con su significado (Esperanzas y el mundo natural, parte 4).",
            "pairs": [
              {
                "left": "abundante",
                "right": "abundant"
              },
              {
                "left": "la sequía",
                "right": "the drought"
              },
              {
                "left": "la inundación",
                "right": "the flood"
              },
              {
                "left": "el incendio forestal",
                "right": "the wildfire"
              },
              {
                "left": "plantar",
                "right": "to plant"
              },
              {
                "left": "cultivar",
                "right": "to cultivate / grow"
              },
              {
                "left": "la cosecha",
                "right": "the harvest"
              },
              {
                "left": "el ecosistema",
                "right": "the ecosystem"
              },
              {
                "left": "la biodiversidad",
                "right": "biodiversity"
              },
              {
                "left": "silvestre",
                "right": "wild"
              }
            ],
            "explanation": "Palabras 31-40 de este tema."
          },
          {
            "type": "matching",
            "instructions": "Empareja cada palabra con su significado (Esperanzas y el mundo natural, parte 5).",
            "pairs": [
              {
                "left": "el hábitat",
                "right": "the habitat"
              },
              {
                "left": "preservar",
                "right": "to preserve"
              },
              {
                "left": "dañar",
                "right": "to damage / harm"
              },
              {
                "left": "el daño",
                "right": "the damage"
              },
              {
                "left": "restaurar",
                "right": "to restore"
              },
              {
                "left": "la huella de carbono",
                "right": "the carbon footprint"
              },
              {
                "left": "consciente",
                "right": "conscious / aware"
              },
              {
                "left": "el equilibrio",
                "right": "the balance"
              },
              {
                "left": "florecer",
                "right": "to bloom / flourish"
              },
              {
                "left": "marchitarse",
                "right": "to wither"
              }
            ],
            "explanation": "Palabras 41-50 de este tema."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "matching",
        "instructions": "Empareja cada palabra de negocios con su significado.",
        "pairs": [
          {
            "left": "reclutar",
            "right": "to recruit"
          },
          {
            "left": "la vacante",
            "right": "the job vacancy"
          },
          {
            "left": "la reputación",
            "right": "the reputation"
          },
          {
            "left": "negociar",
            "right": "to negotiate"
          },
          {
            "left": "fusionarse",
            "right": "to merge"
          }
        ],
        "explanation": "Estas cinco palabras describen procesos comunes en el mundo empresarial."
      }
    ]
  },
  {
    "slug": "b1-vocabulary-practice-4",
    "level": "B1",
    "number": 59,
    "title": "B1 Vocabulary Practice, Part 4 of 10",
    "summary": "Test yourself on all 500 words from the B1 vocabulary lists, grouped by lesson.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "La cocina",
        "body": [
          "Las 50 palabras de la Lección 4, agrupadas para repasar."
        ],
        "checkpoint": [
          {
            "type": "matching",
            "instructions": "Empareja cada palabra con su significado (La cocina, parte 1).",
            "pairs": [
              {
                "left": "cortar",
                "right": "to cut"
              },
              {
                "left": "picar",
                "right": "to chop / mince"
              },
              {
                "left": "mezclar",
                "right": "to mix"
              },
              {
                "left": "batir",
                "right": "to beat / whisk"
              },
              {
                "left": "hervir",
                "right": "to boil"
              },
              {
                "left": "freír",
                "right": "to fry"
              },
              {
                "left": "hornear",
                "right": "to bake"
              },
              {
                "left": "asar",
                "right": "to roast / grill"
              },
              {
                "left": "saltear",
                "right": "to sauté"
              },
              {
                "left": "calentar",
                "right": "to heat"
              }
            ],
            "explanation": "Palabras 1-10 de este tema."
          },
          {
            "type": "matching",
            "instructions": "Empareja cada palabra con su significado (La cocina, parte 2).",
            "pairs": [
              {
                "left": "enfriar",
                "right": "to cool"
              },
              {
                "left": "incorporar",
                "right": "to incorporate / fold in"
              },
              {
                "left": "agregar",
                "right": "to add"
              },
              {
                "left": "revolver",
                "right": "to stir"
              },
              {
                "left": "colar",
                "right": "to strain"
              },
              {
                "left": "pelar",
                "right": "to peel"
              },
              {
                "left": "rallar",
                "right": "to grate"
              },
              {
                "left": "exprimir",
                "right": "to squeeze"
              },
              {
                "left": "la sartén",
                "right": "the frying pan"
              },
              {
                "left": "la olla",
                "right": "the pot"
              }
            ],
            "explanation": "Palabras 11-20 de este tema."
          },
          {
            "type": "matching",
            "instructions": "Empareja cada palabra con su significado (La cocina, parte 3).",
            "pairs": [
              {
                "left": "el horno",
                "right": "the oven"
              },
              {
                "left": "la estufa",
                "right": "the stove"
              },
              {
                "left": "el cuchillo",
                "right": "the knife"
              },
              {
                "left": "la tabla de cortar",
                "right": "the cutting board"
              },
              {
                "left": "la cuchara",
                "right": "the spoon"
              },
              {
                "left": "el tenedor",
                "right": "the fork"
              },
              {
                "left": "el plato",
                "right": "the dish"
              },
              {
                "left": "el ingrediente",
                "right": "the ingredient"
              },
              {
                "left": "la porción",
                "right": "the portion"
              },
              {
                "left": "la cucharadita",
                "right": "the teaspoon"
              }
            ],
            "explanation": "Palabras 21-30 de este tema."
          },
          {
            "type": "matching",
            "instructions": "Empareja cada palabra con su significado (La cocina, parte 4).",
            "pairs": [
              {
                "left": "la cucharada",
                "right": "the tablespoon"
              },
              {
                "left": "una pizca de",
                "right": "a pinch of"
              },
              {
                "left": "al gusto",
                "right": "to taste"
              },
              {
                "left": "el aceite",
                "right": "the oil"
              },
              {
                "left": "la sal",
                "right": "the salt"
              },
              {
                "left": "la pimienta",
                "right": "the pepper"
              },
              {
                "left": "el ajo",
                "right": "the garlic"
              },
              {
                "left": "la cebolla",
                "right": "the onion"
              },
              {
                "left": "la harina",
                "right": "the flour"
              },
              {
                "left": "el azúcar",
                "right": "the sugar"
              }
            ],
            "explanation": "Palabras 31-40 de este tema."
          },
          {
            "type": "matching",
            "instructions": "Empareja cada palabra con su significado (La cocina, parte 5).",
            "pairs": [
              {
                "left": "la masa",
                "right": "the dough"
              },
              {
                "left": "cocido",
                "right": "cooked"
              },
              {
                "left": "crudo",
                "right": "raw"
              },
              {
                "left": "a fuego lento",
                "right": "on low heat"
              },
              {
                "left": "a fuego alto",
                "right": "on high heat"
              },
              {
                "left": "dejar reposar",
                "right": "to let rest"
              },
              {
                "left": "servir",
                "right": "to serve"
              },
              {
                "left": "decorar",
                "right": "to garnish"
              },
              {
                "left": "el sabor",
                "right": "the flavor"
              },
              {
                "left": "sabroso",
                "right": "tasty"
              }
            ],
            "explanation": "Palabras 41-50 de este tema."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "¿Qué palabra significa \"the district\"?",
        "options": [
          "el distrito",
          "la cuadra",
          "la esquina",
          "el cruce"
        ],
        "correctIndex": 0,
        "explanation": "\"El distrito\" significa \"the district\"."
      }
    ]
  },
  {
    "slug": "b1-vocabulary-practice-5",
    "level": "B1",
    "number": 60,
    "title": "B1 Vocabulary Practice, Part 5 of 10",
    "summary": "Test yourself on all 500 words from the B1 vocabulary lists, grouped by lesson.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Dinero y finanzas",
        "body": [
          "Las 50 palabras de la Lección 5, agrupadas para repasar."
        ],
        "checkpoint": [
          {
            "type": "matching",
            "instructions": "Empareja cada palabra con su significado (Dinero y finanzas, parte 1).",
            "pairs": [
              {
                "left": "el dinero",
                "right": "the money"
              },
              {
                "left": "la cuenta bancaria",
                "right": "the bank account"
              },
              {
                "left": "el banco",
                "right": "the bank"
              },
              {
                "left": "administrar",
                "right": "to manage (money)"
              },
              {
                "left": "derrochar",
                "right": "to squander"
              },
              {
                "left": "invertir",
                "right": "to invest"
              },
              {
                "left": "la inversión",
                "right": "the investment"
              },
              {
                "left": "el presupuesto",
                "right": "the budget"
              },
              {
                "left": "el ingreso",
                "right": "the income"
              },
              {
                "left": "el gasto",
                "right": "the expense"
              }
            ],
            "explanation": "Palabras 1-10 de este tema."
          },
          {
            "type": "matching",
            "instructions": "Empareja cada palabra con su significado (Dinero y finanzas, parte 2).",
            "pairs": [
              {
                "left": "la deuda",
                "right": "the debt"
              },
              {
                "left": "el préstamo",
                "right": "the loan"
              },
              {
                "left": "pedir prestado",
                "right": "to borrow"
              },
              {
                "left": "prestar",
                "right": "to lend"
              },
              {
                "left": "deber (dinero)",
                "right": "to owe"
              },
              {
                "left": "la tarjeta de débito",
                "right": "the debit card"
              },
              {
                "left": "el cajero automático",
                "right": "the ATM"
              },
              {
                "left": "retirar",
                "right": "to withdraw"
              },
              {
                "left": "depositar",
                "right": "to deposit"
              },
              {
                "left": "transferir",
                "right": "to transfer"
              }
            ],
            "explanation": "Palabras 11-20 de este tema."
          },
          {
            "type": "matching",
            "instructions": "Empareja cada palabra con su significado (Dinero y finanzas, parte 3).",
            "pairs": [
              {
                "left": "la factura",
                "right": "the bill / invoice"
              },
              {
                "left": "pagar en efectivo",
                "right": "to pay in cash"
              },
              {
                "left": "a plazos",
                "right": "in installments"
              },
              {
                "left": "el interés",
                "right": "the interest"
              },
              {
                "left": "la tasa de interés",
                "right": "the interest rate"
              },
              {
                "left": "el impuesto",
                "right": "the tax"
              },
              {
                "left": "gratis",
                "right": "free"
              },
              {
                "left": "el valor",
                "right": "the value"
              },
              {
                "left": "valer la pena",
                "right": "to be worth it"
              },
              {
                "left": "el lujo",
                "right": "the luxury"
              }
            ],
            "explanation": "Palabras 21-30 de este tema."
          },
          {
            "type": "matching",
            "instructions": "Empareja cada palabra con su significado (Dinero y finanzas, parte 4).",
            "pairs": [
              {
                "left": "lo esencial",
                "right": "the essential"
              },
              {
                "left": "la nómina",
                "right": "the payroll"
              },
              {
                "left": "el bono",
                "right": "the bonus"
              },
              {
                "left": "la ganancia",
                "right": "the profit / earnings"
              },
              {
                "left": "la pérdida",
                "right": "the loss"
              },
              {
                "left": "rentable",
                "right": "profitable"
              },
              {
                "left": "costoso",
                "right": "costly"
              },
              {
                "left": "económico",
                "right": "affordable / economical"
              },
              {
                "left": "la moneda",
                "right": "the currency"
              },
              {
                "left": "el cambio",
                "right": "the change / exchange rate"
              }
            ],
            "explanation": "Palabras 31-40 de este tema."
          },
          {
            "type": "matching",
            "instructions": "Empareja cada palabra con su significado (Dinero y finanzas, parte 5).",
            "pairs": [
              {
                "left": "cambiar dinero",
                "right": "to exchange money"
              },
              {
                "left": "la cotización",
                "right": "the exchange rate / quote"
              },
              {
                "left": "el patrimonio",
                "right": "the net worth / estate"
              },
              {
                "left": "financiero",
                "right": "financial"
              },
              {
                "left": "el asesor financiero",
                "right": "the financial advisor"
              },
              {
                "left": "planificar",
                "right": "to plan"
              },
              {
                "left": "la meta financiera",
                "right": "the financial goal"
              },
              {
                "left": "el fondo",
                "right": "the fund"
              },
              {
                "left": "la jubilación",
                "right": "retirement"
              },
              {
                "left": "heredar",
                "right": "to inherit"
              }
            ],
            "explanation": "Palabras 41-50 de este tema."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multi-select",
        "question": "¿Cuáles palabras se relacionan con la cocina? (Elige todas las correctas)",
        "options": [
          "picar",
          "la factura",
          "hervir",
          "el horno"
        ],
        "correctIndexes": [
          0,
          2,
          3
        ],
        "explanation": "\"La factura\" (the bill) pertenece al tema de finanzas, no de cocina."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Traduce al español.",
        "source": "the milestone",
        "answer": "el hito",
        "explanation": "\"El hito\" significa \"the milestone\"."
      }
    ]
  },
  {
    "slug": "b1-vocabulary-practice-6",
    "level": "B1",
    "number": 61,
    "title": "B1 Vocabulary Practice, Part 6 of 10",
    "summary": "Test yourself on all 500 words from the B1 vocabulary lists, grouped by lesson.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "La educación",
        "body": [
          "Las 50 palabras de la Lección 6, agrupadas para repasar."
        ],
        "checkpoint": [
          {
            "type": "matching",
            "instructions": "Empareja cada palabra con su significado (La educación, parte 1).",
            "pairs": [
              {
                "left": "la escuela",
                "right": "the school"
              },
              {
                "left": "la universidad",
                "right": "the university"
              },
              {
                "left": "la maestría",
                "right": "the master's degree"
              },
              {
                "left": "la materia",
                "right": "the subject"
              },
              {
                "left": "la asignatura",
                "right": "the course / subject"
              },
              {
                "left": "el semestre",
                "right": "the semester"
              },
              {
                "left": "la matrícula",
                "right": "enrollment / tuition"
              },
              {
                "left": "matricularse",
                "right": "to enroll"
              },
              {
                "left": "aprobar",
                "right": "to pass (a class)"
              },
              {
                "left": "reprobar",
                "right": "to fail (a class)"
              }
            ],
            "explanation": "Palabras 1-10 de este tema."
          },
          {
            "type": "matching",
            "instructions": "Empareja cada palabra con su significado (La educación, parte 2).",
            "pairs": [
              {
                "left": "la nota",
                "right": "the grade"
              },
              {
                "left": "el examen final",
                "right": "the final exam"
              },
              {
                "left": "el examen parcial",
                "right": "the midterm"
              },
              {
                "left": "entregar",
                "right": "to hand in"
              },
              {
                "left": "la tarea",
                "right": "the homework"
              },
              {
                "left": "el ensayo",
                "right": "the essay"
              },
              {
                "left": "la investigación",
                "right": "the research"
              },
              {
                "left": "citar",
                "right": "to cite"
              },
              {
                "left": "la bibliografía",
                "right": "the bibliography"
              },
              {
                "left": "el plagio",
                "right": "plagiarism"
              }
            ],
            "explanation": "Palabras 11-20 de este tema."
          },
          {
            "type": "matching",
            "instructions": "Empareja cada palabra con su significado (La educación, parte 3).",
            "pairs": [
              {
                "left": "la beca",
                "right": "the scholarship"
              },
              {
                "left": "el título",
                "right": "the degree / title"
              },
              {
                "left": "graduarse",
                "right": "to graduate"
              },
              {
                "left": "la graduación",
                "right": "the graduation"
              },
              {
                "left": "el profesor / la profesora",
                "right": "the professor"
              },
              {
                "left": "el compañero de clase",
                "right": "the classmate"
              },
              {
                "left": "el salón de clases",
                "right": "the classroom"
              },
              {
                "left": "la biblioteca",
                "right": "the library"
              },
              {
                "left": "el laboratorio",
                "right": "the lab"
              },
              {
                "left": "la beca completa",
                "right": "the full scholarship"
              }
            ],
            "explanation": "Palabras 21-30 de este tema."
          },
          {
            "type": "matching",
            "instructions": "Empareja cada palabra con su significado (La educación, parte 4).",
            "pairs": [
              {
                "left": "aprender de memoria",
                "right": "to memorize"
              },
              {
                "left": "repasar",
                "right": "to review"
              },
              {
                "left": "el repaso",
                "right": "the review"
              },
              {
                "left": "subrayar",
                "right": "to underline"
              },
              {
                "left": "tomar apuntes",
                "right": "to take notes"
              },
              {
                "left": "el apunte",
                "right": "the note"
              },
              {
                "left": "el horario de clases",
                "right": "the class schedule"
              },
              {
                "left": "el requisito",
                "right": "the requirement"
              },
              {
                "left": "optativo",
                "right": "elective"
              },
              {
                "left": "obligatorio",
                "right": "mandatory"
              }
            ],
            "explanation": "Palabras 31-40 de este tema."
          },
          {
            "type": "matching",
            "instructions": "Empareja cada palabra con su significado (La educación, parte 5).",
            "pairs": [
              {
                "left": "el semestre de intercambio",
                "right": "exchange semester"
              },
              {
                "left": "estudiar en el extranjero",
                "right": "to study abroad"
              },
              {
                "left": "el conocimiento",
                "right": "knowledge"
              },
              {
                "left": "el aprendizaje",
                "right": "learning"
              },
              {
                "left": "el desafío",
                "right": "the challenge"
              },
              {
                "left": "superarse",
                "right": "to better oneself"
              },
              {
                "left": "el esfuerzo",
                "right": "the effort"
              },
              {
                "left": "esforzarse",
                "right": "to make an effort"
              },
              {
                "left": "la disciplina",
                "right": "discipline"
              },
              {
                "left": "el objetivo académico",
                "right": "the academic goal"
              }
            ],
            "explanation": "Palabras 41-50 de este tema."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "matching",
        "instructions": "Empareja cada palabra sobre la naturaleza con su significado.",
        "pairs": [
          {
            "left": "el bosque",
            "right": "the forest"
          },
          {
            "left": "la sequía",
            "right": "the drought"
          },
          {
            "left": "sostenible",
            "right": "sustainable"
          },
          {
            "left": "preservar",
            "right": "to preserve"
          },
          {
            "left": "el ecosistema",
            "right": "the ecosystem"
          }
        ],
        "explanation": "Estas cinco palabras describen la naturaleza y su cuidado."
      }
    ]
  },
  {
    "slug": "b1-vocabulary-practice-7",
    "level": "B1",
    "number": 62,
    "title": "B1 Vocabulary Practice, Part 7 of 10",
    "summary": "Test yourself on all 500 words from the B1 vocabulary lists, grouped by lesson.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Experiencias de vida",
        "body": [
          "Las 50 palabras de la Lección 7, agrupadas para repasar."
        ],
        "checkpoint": [
          {
            "type": "matching",
            "instructions": "Empareja cada palabra con su significado (Experiencias de vida, parte 1).",
            "pairs": [
              {
                "left": "la experiencia",
                "right": "the experience"
              },
              {
                "left": "el logro",
                "right": "the achievement"
              },
              {
                "left": "alcanzar",
                "right": "to attain / reach"
              },
              {
                "left": "jamás",
                "right": "never (emphatic)"
              },
              {
                "left": "alguna vez",
                "right": "ever / at some point"
              },
              {
                "left": "varias veces",
                "right": "several times"
              },
              {
                "left": "por primera vez",
                "right": "for the first time"
              },
              {
                "left": "hasta ahora",
                "right": "so far / until now"
              },
              {
                "left": "hace poco",
                "right": "recently / a while ago"
              },
              {
                "left": "todavía no",
                "right": "not yet"
              }
            ],
            "explanation": "Palabras 1-10 de este tema."
          },
          {
            "type": "matching",
            "instructions": "Empareja cada palabra con su significado (Experiencias de vida, parte 2).",
            "pairs": [
              {
                "left": "hasta la fecha",
                "right": "to date / so far"
              },
              {
                "left": "superar un miedo",
                "right": "to overcome a fear"
              },
              {
                "left": "cumplir una meta",
                "right": "to achieve a goal"
              },
              {
                "left": "intentar",
                "right": "to attempt / try"
              },
              {
                "left": "atreverse a",
                "right": "to dare to"
              },
              {
                "left": "arriesgarse",
                "right": "to take a risk"
              },
              {
                "left": "el riesgo",
                "right": "the risk"
              },
              {
                "left": "la ventaja",
                "right": "the advantage"
              },
              {
                "left": "aprovechar",
                "right": "to take advantage of"
              },
              {
                "left": "perderse (algo)",
                "right": "to miss out (on something)"
              }
            ],
            "explanation": "Palabras 11-20 de este tema."
          },
          {
            "type": "matching",
            "instructions": "Empareja cada palabra con su significado (Experiencias de vida, parte 3).",
            "pairs": [
              {
                "left": "descubrir",
                "right": "to discover"
              },
              {
                "left": "el descubrimiento",
                "right": "the discovery"
              },
              {
                "left": "sorprendente",
                "right": "surprising"
              },
              {
                "left": "inolvidable",
                "right": "unforgettable"
              },
              {
                "left": "memorable",
                "right": "memorable"
              },
              {
                "left": "la vivencia",
                "right": "the lived experience"
              },
              {
                "left": "el hito",
                "right": "the milestone"
              },
              {
                "left": "el desafío personal",
                "right": "the personal challenge"
              },
              {
                "left": "crecer como persona",
                "right": "to grow as a person"
              },
              {
                "left": "madurar",
                "right": "to mature"
              }
            ],
            "explanation": "Palabras 21-30 de este tema."
          },
          {
            "type": "matching",
            "instructions": "Empareja cada palabra con su significado (Experiencias de vida, parte 4).",
            "pairs": [
              {
                "left": "aventurarse",
                "right": "to venture"
              },
              {
                "left": "adentrarse en",
                "right": "to delve into"
              },
              {
                "left": "probar algo nuevo",
                "right": "to try something new"
              },
              {
                "left": "mudarse de país",
                "right": "to move to another country"
              },
              {
                "left": "aprender un idioma",
                "right": "to learn a language"
              },
              {
                "left": "titularse",
                "right": "to graduate / earn a degree"
              },
              {
                "left": "emprender",
                "right": "to start a venture"
              },
              {
                "left": "el emprendimiento",
                "right": "the venture / startup"
              },
              {
                "left": "fracasar",
                "right": "to fail"
              },
              {
                "left": "el fracaso",
                "right": "the failure"
              }
            ],
            "explanation": "Palabras 31-40 de este tema."
          },
          {
            "type": "matching",
            "instructions": "Empareja cada palabra con su significado (Experiencias de vida, parte 5).",
            "pairs": [
              {
                "left": "levantarse (después de caer)",
                "right": "to pick oneself back up"
              },
              {
                "left": "perseverar",
                "right": "to persevere"
              },
              {
                "left": "la perseverancia",
                "right": "perseverance"
              },
              {
                "left": "valorar",
                "right": "to value / appreciate"
              },
              {
                "left": "agradecido",
                "right": "grateful"
              },
              {
                "left": "reflexionar",
                "right": "to reflect"
              },
              {
                "left": "mirar atrás",
                "right": "to look back"
              },
              {
                "left": "el camino recorrido",
                "right": "the journey / path traveled"
              },
              {
                "left": "dejar huella",
                "right": "to leave a mark"
              },
              {
                "left": "marcar la diferencia",
                "right": "to make a difference"
              }
            ],
            "explanation": "Palabras 41-50 de este tema."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "¿Qué significa \"jamás\"?",
        "options": [
          "always",
          "never (emphatic)",
          "sometimes",
          "already"
        ],
        "correctIndex": 1,
        "explanation": "\"Jamás\" es una forma enfática de decir \"never\"."
      }
    ]
  },
  {
    "slug": "b1-vocabulary-practice-8",
    "level": "B1",
    "number": 63,
    "title": "B1 Vocabulary Practice, Part 8 of 10",
    "summary": "Test yourself on all 500 words from the B1 vocabulary lists, grouped by lesson.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Noticias y sucesos",
        "body": [
          "Las 50 palabras de la Lección 8, agrupadas para repasar."
        ],
        "checkpoint": [
          {
            "type": "matching",
            "instructions": "Empareja cada palabra con su significado (Noticias y sucesos, parte 1).",
            "pairs": [
              {
                "left": "la noticia",
                "right": "the news item"
              },
              {
                "left": "el suceso",
                "right": "the event / incident"
              },
              {
                "left": "ocurrir",
                "right": "to occur"
              },
              {
                "left": "el acontecimiento",
                "right": "the happening / event"
              },
              {
                "left": "informar",
                "right": "to report"
              },
              {
                "left": "el reportaje",
                "right": "the report / news story"
              },
              {
                "left": "el periodista",
                "right": "the journalist"
              },
              {
                "left": "la fuente",
                "right": "the source"
              },
              {
                "left": "investigar",
                "right": "to investigate"
              },
              {
                "left": "el comunicado",
                "right": "the press release / statement"
              }
            ],
            "explanation": "Palabras 1-10 de este tema."
          },
          {
            "type": "matching",
            "instructions": "Empareja cada palabra con su significado (Noticias y sucesos, parte 2).",
            "pairs": [
              {
                "left": "corroborar",
                "right": "to corroborate"
              },
              {
                "left": "rectificar",
                "right": "to retract / correct"
              },
              {
                "left": "anunciar",
                "right": "to announce"
              },
              {
                "left": "el anuncio",
                "right": "the announcement"
              },
              {
                "left": "el titular",
                "right": "the headline"
              },
              {
                "left": "la portada",
                "right": "the front page"
              },
              {
                "left": "difundir",
                "right": "to spread / broadcast"
              },
              {
                "left": "el rumor",
                "right": "the rumor"
              },
              {
                "left": "desatar",
                "right": "to trigger / unleash"
              },
              {
                "left": "la polémica",
                "right": "the controversy"
              }
            ],
            "explanation": "Palabras 11-20 de este tema."
          },
          {
            "type": "matching",
            "instructions": "Empareja cada palabra con su significado (Noticias y sucesos, parte 3).",
            "pairs": [
              {
                "left": "el escándalo",
                "right": "the scandal"
              },
              {
                "left": "estallar",
                "right": "to break out / erupt"
              },
              {
                "left": "la crisis",
                "right": "the crisis"
              },
              {
                "left": "la manifestación",
                "right": "the protest / demonstration"
              },
              {
                "left": "protestar",
                "right": "to protest"
              },
              {
                "left": "el conflicto",
                "right": "the conflict"
              },
              {
                "left": "resolver",
                "right": "to resolve"
              },
              {
                "left": "la solución",
                "right": "the solution"
              },
              {
                "left": "el gobierno",
                "right": "the government"
              },
              {
                "left": "la política",
                "right": "politics / policy"
              }
            ],
            "explanation": "Palabras 21-30 de este tema."
          },
          {
            "type": "matching",
            "instructions": "Empareja cada palabra con su significado (Noticias y sucesos, parte 4).",
            "pairs": [
              {
                "left": "la elección",
                "right": "the election"
              },
              {
                "left": "votar",
                "right": "to vote"
              },
              {
                "left": "el candidato",
                "right": "the candidate"
              },
              {
                "left": "ganar las elecciones",
                "right": "to win the election"
              },
              {
                "left": "la ley",
                "right": "the law"
              },
              {
                "left": "aprobar una ley",
                "right": "to pass a law"
              },
              {
                "left": "el juicio",
                "right": "the trial"
              },
              {
                "left": "el testigo",
                "right": "the witness"
              },
              {
                "left": "declarar",
                "right": "to state / testify"
              },
              {
                "left": "el veredicto",
                "right": "the verdict"
              }
            ],
            "explanation": "Palabras 31-40 de este tema."
          },
          {
            "type": "matching",
            "instructions": "Empareja cada palabra con su significado (Noticias y sucesos, parte 5).",
            "pairs": [
              {
                "left": "la sentencia",
                "right": "the sentence / ruling"
              },
              {
                "left": "el desastre natural",
                "right": "the natural disaster"
              },
              {
                "left": "el terremoto",
                "right": "the earthquake"
              },
              {
                "left": "evacuar",
                "right": "to evacuate"
              },
              {
                "left": "los daños",
                "right": "the damages"
              },
              {
                "left": "la reconstrucción",
                "right": "the reconstruction"
              },
              {
                "left": "la ayuda humanitaria",
                "right": "humanitarian aid"
              },
              {
                "left": "donar",
                "right": "to donate"
              },
              {
                "left": "la donación",
                "right": "the donation"
              },
              {
                "left": "la portavoz",
                "right": "the spokesperson"
              }
            ],
            "explanation": "Palabras 41-50 de este tema."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multi-select",
        "question": "¿Cuáles palabras se relacionan con la educación? (Elige todas las correctas)",
        "options": [
          "la beca",
          "aprobar",
          "el veredicto",
          "matricularse"
        ],
        "correctIndexes": [
          0,
          1,
          3
        ],
        "explanation": "\"El veredicto\" (the verdict) pertenece al tema de noticias y sucesos."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Traduce al español.",
        "source": "the lived experience",
        "answer": "la vivencia",
        "explanation": "\"La vivencia\" significa \"the lived experience\"."
      }
    ]
  },
  {
    "slug": "b1-vocabulary-practice-9",
    "level": "B1",
    "number": 64,
    "title": "B1 Vocabulary Practice, Part 9 of 10",
    "summary": "Test yourself on all 500 words from the B1 vocabulary lists, grouped by lesson.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "La ciudad y las direcciones",
        "body": [
          "Las 50 palabras de la Lección 9, agrupadas para repasar."
        ],
        "checkpoint": [
          {
            "type": "matching",
            "instructions": "Empareja cada palabra con su significado (La ciudad y las direcciones, parte 1).",
            "pairs": [
              {
                "left": "el distrito",
                "right": "the district"
              },
              {
                "left": "la cuadra",
                "right": "the block"
              },
              {
                "left": "la esquina",
                "right": "the corner"
              },
              {
                "left": "la avenida",
                "right": "the avenue"
              },
              {
                "left": "el semáforo",
                "right": "the traffic light"
              },
              {
                "left": "el cruce",
                "right": "the crossing / intersection"
              },
              {
                "left": "la acera",
                "right": "the sidewalk"
              },
              {
                "left": "el edificio",
                "right": "the building"
              },
              {
                "left": "el rascacielos",
                "right": "the skyscraper"
              },
              {
                "left": "la plaza",
                "right": "the square"
              }
            ],
            "explanation": "Palabras 1-10 de este tema."
          },
          {
            "type": "matching",
            "instructions": "Empareja cada palabra con su significado (La ciudad y las direcciones, parte 2).",
            "pairs": [
              {
                "left": "el parque",
                "right": "the park"
              },
              {
                "left": "el ayuntamiento",
                "right": "the city hall"
              },
              {
                "left": "la estación",
                "right": "the station"
              },
              {
                "left": "el metro",
                "right": "the subway"
              },
              {
                "left": "la parada de autobús",
                "right": "the bus stop"
              },
              {
                "left": "cruzar",
                "right": "to cross"
              },
              {
                "left": "doblar",
                "right": "to turn"
              },
              {
                "left": "seguir derecho",
                "right": "to go straight"
              },
              {
                "left": "a la izquierda",
                "right": "to the left"
              },
              {
                "left": "a la derecha",
                "right": "to the right"
              }
            ],
            "explanation": "Palabras 11-20 de este tema."
          },
          {
            "type": "matching",
            "instructions": "Empareja cada palabra con su significado (La ciudad y las direcciones, parte 3).",
            "pairs": [
              {
                "left": "cerca de",
                "right": "near"
              },
              {
                "left": "distante de",
                "right": "distant from"
              },
              {
                "left": "al lado de",
                "right": "next to"
              },
              {
                "left": "enfrente de",
                "right": "across from"
              },
              {
                "left": "al fondo de",
                "right": "at the back / end of"
              },
              {
                "left": "en medio de",
                "right": "in the middle of"
              },
              {
                "left": "la cuadra siguiente",
                "right": "the next block"
              },
              {
                "left": "perderse",
                "right": "to get lost"
              },
              {
                "left": "orientarse",
                "right": "to get one's bearings"
              },
              {
                "left": "el plano",
                "right": "the (street) map"
              }
            ],
            "explanation": "Palabras 21-30 de este tema."
          },
          {
            "type": "matching",
            "instructions": "Empareja cada palabra con su significado (La ciudad y las direcciones, parte 4).",
            "pairs": [
              {
                "left": "las señales de tráfico",
                "right": "the traffic signs"
              },
              {
                "left": "el peatón",
                "right": "the pedestrian"
              },
              {
                "left": "el embotellamiento",
                "right": "the traffic jam"
              },
              {
                "left": "el estacionamiento",
                "right": "the parking lot"
              },
              {
                "left": "estacionar",
                "right": "to park"
              },
              {
                "left": "la multa",
                "right": "the fine / ticket"
              },
              {
                "left": "el vecindario",
                "right": "the neighborhood"
              },
              {
                "left": "residencial",
                "right": "residential"
              },
              {
                "left": "comercial",
                "right": "commercial"
              },
              {
                "left": "las afueras",
                "right": "the outskirts"
              }
            ],
            "explanation": "Palabras 31-40 de este tema."
          },
          {
            "type": "matching",
            "instructions": "Empareja cada palabra con su significado (La ciudad y las direcciones, parte 5).",
            "pairs": [
              {
                "left": "el centro histórico",
                "right": "the historic center"
              },
              {
                "left": "la muchedumbre",
                "right": "the crowd"
              },
              {
                "left": "concurrido",
                "right": "crowded / busy"
              },
              {
                "left": "tranquilo",
                "right": "quiet"
              },
              {
                "left": "seguro",
                "right": "safe"
              },
              {
                "left": "peligroso",
                "right": "dangerous"
              },
              {
                "left": "la comunidad",
                "right": "the community"
              },
              {
                "left": "el vecino",
                "right": "the neighbor"
              },
              {
                "left": "mudarse a",
                "right": "to move to"
              },
              {
                "left": "instalarse",
                "right": "to settle in"
              }
            ],
            "explanation": "Palabras 41-50 de este tema."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "matching",
        "instructions": "Empareja cada palabra sobre las noticias con su significado.",
        "pairs": [
          {
            "left": "el titular",
            "right": "the headline"
          },
          {
            "left": "la polémica",
            "right": "the controversy"
          },
          {
            "left": "evacuar",
            "right": "to evacuate"
          },
          {
            "left": "aprobar una ley",
            "right": "to pass a law"
          },
          {
            "left": "desatar",
            "right": "to trigger"
          }
        ],
        "explanation": "Estas cinco palabras aparecen frecuentemente en las noticias."
      }
    ]
  },
  {
    "slug": "b1-vocabulary-practice-10",
    "level": "B1",
    "number": 65,
    "title": "B1 Vocabulary Practice, Part 10 of 10",
    "summary": "Test yourself on all 500 words from the B1 vocabulary lists, grouped by lesson.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Negocios y el trabajo",
        "body": [
          "Las 50 palabras de la Lección 10, agrupadas para repasar."
        ],
        "checkpoint": [
          {
            "type": "matching",
            "instructions": "Empareja cada palabra con su significado (Negocios y el trabajo, parte 1).",
            "pairs": [
              {
                "left": "la empresa",
                "right": "the company"
              },
              {
                "left": "el negocio",
                "right": "the business"
              },
              {
                "left": "la junta directiva",
                "right": "the board of directors"
              },
              {
                "left": "el socio",
                "right": "the partner"
              },
              {
                "left": "fundar",
                "right": "to found"
              },
              {
                "left": "el fundador",
                "right": "the founder"
              },
              {
                "left": "la sede",
                "right": "the headquarters"
              },
              {
                "left": "la sucursal",
                "right": "the branch"
              },
              {
                "left": "reclutar",
                "right": "to recruit"
              },
              {
                "left": "despedir",
                "right": "to fire / lay off"
              }
            ],
            "explanation": "Palabras 1-10 de este tema."
          },
          {
            "type": "matching",
            "instructions": "Empareja cada palabra con su significado (Negocios y el trabajo, parte 2).",
            "pairs": [
              {
                "left": "el empleado",
                "right": "the employee"
              },
              {
                "left": "el empleador",
                "right": "the employer"
              },
              {
                "left": "el contrato",
                "right": "the contract"
              },
              {
                "left": "firmar",
                "right": "to sign"
              },
              {
                "left": "el acuerdo",
                "right": "the agreement"
              },
              {
                "left": "negociar",
                "right": "to negotiate"
              },
              {
                "left": "la negociación",
                "right": "the negotiation"
              },
              {
                "left": "la propuesta",
                "right": "the proposal"
              },
              {
                "left": "proponer",
                "right": "to propose"
              },
              {
                "left": "aprobar (una propuesta)",
                "right": "to approve (a proposal)"
              }
            ],
            "explanation": "Palabras 11-20 de este tema."
          },
          {
            "type": "matching",
            "instructions": "Empareja cada palabra con su significado (Negocios y el trabajo, parte 3).",
            "pairs": [
              {
                "left": "rechazar",
                "right": "to reject"
              },
              {
                "left": "la fusión",
                "right": "the merger"
              },
              {
                "left": "fusionarse",
                "right": "to merge"
              },
              {
                "left": "la competencia",
                "right": "the competition"
              },
              {
                "left": "competir",
                "right": "to compete"
              },
              {
                "left": "el mercado",
                "right": "the market"
              },
              {
                "left": "la demanda",
                "right": "the demand"
              },
              {
                "left": "la vacante",
                "right": "the job vacancy"
              },
              {
                "left": "el cliente potencial",
                "right": "the potential customer"
              },
              {
                "left": "la estrategia",
                "right": "the strategy"
              }
            ],
            "explanation": "Palabras 21-30 de este tema."
          },
          {
            "type": "matching",
            "instructions": "Empareja cada palabra con su significado (Negocios y el trabajo, parte 4).",
            "pairs": [
              {
                "left": "implementar",
                "right": "to implement"
              },
              {
                "left": "el plazo",
                "right": "the deadline"
              },
              {
                "left": "cumplir un plazo",
                "right": "to meet a deadline"
              },
              {
                "left": "el informe",
                "right": "the report"
              },
              {
                "left": "presentar un informe",
                "right": "to present a report"
              },
              {
                "left": "la ganancia neta",
                "right": "the net profit"
              },
              {
                "left": "la pérdida neta",
                "right": "the net loss"
              },
              {
                "left": "el crecimiento",
                "right": "the growth"
              },
              {
                "left": "crecer (una empresa)",
                "right": "to grow (a company)"
              },
              {
                "left": "la expansión",
                "right": "the expansion"
              }
            ],
            "explanation": "Palabras 31-40 de este tema."
          },
          {
            "type": "matching",
            "instructions": "Empareja cada palabra con su significado (Negocios y el trabajo, parte 5).",
            "pairs": [
              {
                "left": "expandirse",
                "right": "to expand"
              },
              {
                "left": "la sucursal internacional",
                "right": "the international branch"
              },
              {
                "left": "el mercado global",
                "right": "the global market"
              },
              {
                "left": "la reputación",
                "right": "the reputation"
              },
              {
                "left": "posicionar",
                "right": "to position (a brand)"
              },
              {
                "left": "el departamento",
                "right": "the department"
              },
              {
                "left": "el recurso humano",
                "right": "human resources"
              },
              {
                "left": "la política de la empresa",
                "right": "company policy"
              },
              {
                "left": "el reglamento",
                "right": "the regulation"
              },
              {
                "left": "cumplir con",
                "right": "to comply with"
              }
            ],
            "explanation": "Palabras 41-50 de este tema."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "¿Qué palabra significa \"to squander\"?",
        "options": [
          "administrar",
          "derrochar",
          "invertir",
          "ahorrar"
        ],
        "correctIndex": 1,
        "explanation": "\"Derrochar\" significa \"to squander\"."
      }
    ]
  },
  {
    "slug": "b1-comprehensive-review-1",
    "level": "B1",
    "number": 66,
    "title": "B1 Comprehensive Review, Part 1 of 3",
    "summary": "Recap every grammar principle from B1, then take a 30-question final test.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "Present Subjunctive: Formation",
        "body": [
          "El subjuntivo expresa deseos, dudas y emociones, casi siempre después de \"que\". Regulares: quita la -o de yo, agrega terminaciones opuestas. Seis verbos irregulares: sea, esté, vaya, sepa, dé, haya."
        ]
      },
      {
        "heading": "Subjunctive with Wishes, Doubt & Emotion",
        "body": [
          "Verbos de deseo (querer que), duda (dudar que) y emoción (alegrarse de que) requieren subjuntivo en la cláusula siguiente, si el sujeto cambia."
        ]
      },
      {
        "heading": "Subjunctive with Impersonal Expressions & Ojalá",
        "body": [
          "Es importante que, es necesario que, y ojalá (que) requieren subjuntivo. Es verdad que y es obvio que llevan indicativo, porque expresan certeza."
        ]
      }
    ],
    "exercises": [
      {
        "type": "fill-blank",
        "prompt": "Conjuga el verbo.",
        "sentence": "Espero que tú ___ (poder) venir.",
        "answer": "puedas",
        "explanation": "Poder cambia o→ue en subjuntivo, excepto en nosotros/vosotros: pueda, puedas..."
      },
      {
        "type": "multiple-choice",
        "question": "¿Cuál es la forma correcta de \"ir\" para \"nosotros\" en subjuntivo?",
        "options": [
          "vamos",
          "vayamos",
          "iríamos",
          "íbamos"
        ],
        "correctIndex": 1,
        "explanation": "Ir es irregular en subjuntivo: vaya, vayas, vaya, vayamos, vayáis, vayan."
      },
      {
        "type": "fill-blank",
        "prompt": "Conjuga el verbo.",
        "sentence": "Dudo que ella ___ (saber) la respuesta.",
        "answer": "sepa",
        "explanation": "Saber es irregular en subjuntivo: sepa, sepas, sepa..."
      },
      {
        "type": "multiple-choice",
        "question": "¿Cuál oración es correcta?",
        "options": [
          "Creo que él tiene razón.",
          "Creo que él tenga razón.",
          "Dudo que él tiene razón.",
          "No creo que él tiene razón."
        ],
        "correctIndex": 0,
        "explanation": "Creer en afirmativo lleva indicativo: creo que tiene razón."
      },
      {
        "type": "fill-blank",
        "prompt": "Conjuga el verbo.",
        "sentence": "Es importante que nosotros ___ (llegar) a tiempo.",
        "answer": "lleguemos",
        "explanation": "Llegar cambia g→gu en subjuntivo para mantener el sonido: llegue, llegues, lleguemos..."
      },
      {
        "type": "multiple-choice",
        "question": "¿Cuál expresión lleva indicativo?",
        "options": [
          "es raro que",
          "es evidente que",
          "ojalá que",
          "es mejor que"
        ],
        "correctIndex": 1,
        "explanation": "\"Es evidente que\" expresa certeza: indicativo."
      },
      {
        "type": "fill-blank",
        "prompt": "Da el mandato afirmativo de tú.",
        "sentence": "___ (decir) la verdad.",
        "answer": "Di",
        "explanation": "Decir tiene mandato irregular de tú: di."
      },
      {
        "type": "multiple-choice",
        "question": "¿Cuál es el mandato de usted para \"cerrar\"?",
        "options": [
          "cierre",
          "cierra",
          "cerra",
          "cerrando"
        ],
        "correctIndex": 0,
        "explanation": "El mandato de usted usa la forma del subjuntivo: cierre."
      },
      {
        "type": "fill-blank",
        "prompt": "Da el mandato negativo de tú.",
        "sentence": "No ___ (llegar) tarde.",
        "answer": "llegues",
        "explanation": "El tú negativo usa el subjuntivo: no llegues."
      },
      {
        "type": "fill-blank",
        "prompt": "Conjuga el verbo en condicional.",
        "sentence": "Yo ___ (poder) ayudarte mañana.",
        "answer": "podría",
        "explanation": "Poder usa la raíz irregular podr- en condicional: podría."
      },
      {
        "type": "multiple-choice",
        "question": "¿Cuál es la forma correcta de \"decir\" para \"yo\" en condicional?",
        "options": [
          "deciría",
          "diría",
          "dijería",
          "diciría"
        ],
        "correctIndex": 1,
        "explanation": "Decir usa la raíz irregular dir- en condicional: diría."
      }
    ]
  },
  {
    "slug": "b1-comprehensive-review-2",
    "level": "B1",
    "number": 67,
    "title": "B1 Comprehensive Review, Part 2 of 3",
    "summary": "Recap every grammar principle from B1, then take a 30-question final test.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "Commands: Tú, Usted, Nosotros & Negatives",
        "body": [
          "Mandatos afirmativos de tú suelen ser como la forma él/ella, con ocho irregulares. Usted/ustedes usan el subjuntivo. Todos los negativos usan el subjuntivo con no."
        ]
      },
      {
        "heading": "The Conditional Tense",
        "body": [
          "El condicional añade -ía, -ías, -ía, -íamos, -íais, -ían al infinitivo. Usa las mismas raíces irregulares que el futuro. Sirve para peticiones corteses y consejos suaves."
        ]
      },
      {
        "heading": "Simple If-Clauses: Si + Presente",
        "body": [
          "Si + presente indicativo, + presente/futuro/mandato describe condiciones reales o probables. No lleva subjuntivo."
        ]
      },
      {
        "heading": "Present Perfect: Pretérito Perfecto",
        "body": [
          "Haber (he, has, ha, hemos, habéis, han) + participio pasado. Conecta el pasado con el presente. Participios irregulares: hecho, dicho, escrito, visto, puesto, vuelto, roto, abierto, muerto, cubierto."
        ]
      }
    ],
    "exercises": [
      {
        "type": "fill-blank",
        "prompt": "Completa la oración.",
        "sentence": "Si ___ (tener, tú) tiempo, ayúdame.",
        "answer": "tienes",
        "explanation": "La cláusula con \"si\" para condiciones reales usa presente indicativo."
      },
      {
        "type": "multiple-choice",
        "question": "¿Cuál oración es correcta?",
        "options": [
          "Si llueve, iremos igual.",
          "Si llueva, iremos igual.",
          "Si lloverá, iremos igual.",
          "Si llovía, iremos igual."
        ],
        "correctIndex": 0,
        "explanation": "Si + presente indicativo describe una condición real."
      },
      {
        "type": "fill-blank",
        "prompt": "Conjuga el verbo.",
        "sentence": "Nosotros ___ (escribir) tres cartas ya.",
        "answer": "hemos escrito",
        "explanation": "Hemos (haber, nosotros) más el participio irregular de escribir (escrito)."
      },
      {
        "type": "multiple-choice",
        "question": "¿Cuál es el participio de \"morir\"?",
        "options": [
          "morido",
          "muerto",
          "muriendo",
          "murió"
        ],
        "correctIndex": 1,
        "explanation": "Morir tiene un participio irregular: muerto."
      },
      {
        "type": "fill-blank",
        "prompt": "Conjuga el verbo.",
        "sentence": "Cuando llegamos, la película ya ___ (empezar).",
        "answer": "había empezado",
        "explanation": "Pluscuamperfecto: había (imperfecto de haber) + participio de empezar."
      },
      {
        "type": "multi-select",
        "question": "¿Qué palabras acompañan al pluscuamperfecto? (Elige todas las correctas)",
        "options": [
          "ya",
          "nunca antes",
          "mañana",
          "todavía no"
        ],
        "correctIndexes": [
          0,
          1,
          3
        ],
        "explanation": "\"Mañana\" es una expresión de futuro, no de pluscuamperfecto."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa con el pronombre correcto.",
        "sentence": "El hombre ___ conocí ayer es mi vecino.",
        "answer": "que",
        "explanation": "\"Que\" conecta con \"el hombre\", el sustantivo anterior."
      },
      {
        "type": "multiple-choice",
        "question": "¿Cuál es correcto?",
        "options": [
          "La mujer quien vive aquí es doctora.",
          "La mujer que vive aquí es doctora.",
          "Las dos son correctas.",
          "Ninguna es correcta."
        ],
        "correctIndex": 2,
        "explanation": "Tanto \"quien\" como \"que\" pueden usarse para personas en este contexto."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la oración.",
        "sentence": "___ más me gusta es el clima.",
        "answer": "Lo que",
        "explanation": "\"Lo que\" introduce una idea abstracta."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa en voz pasiva.",
        "sentence": "El puente ___ (construir) hace cien años.",
        "answer": "fue construido",
        "explanation": "Ser (fue) más el participio de construir (construido)."
      }
    ]
  },
  {
    "slug": "b1-comprehensive-review-3",
    "level": "B1",
    "number": 68,
    "title": "B1 Comprehensive Review, Part 3 of 3",
    "summary": "Recap every grammar principle from B1, then take a 30-question final test.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "Past Perfect: Pluscuamperfecto",
        "body": [
          "Había, habías, había, habíamos, habíais, habían + participio. Describe una acción anterior a otra acción pasada — el \"pasado del pasado\"."
        ]
      },
      {
        "heading": "Relative Pronouns",
        "body": [
          "Que se refiere a personas o cosas. Quien/quienes solo a personas. El que/la que concuerdan en género y número. Lo que se refiere a ideas abstractas."
        ]
      },
      {
        "heading": "Passive Voice & Impersonal Se",
        "body": [
          "Ser + participio + por forma la voz pasiva formal. Se + verbo en tercera persona forma el se pasivo (concuerda con el sustantivo) o el se impersonal (siempre singular, sin sustantivo)."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "¿Cuál usa correctamente el se impersonal?",
        "options": [
          "Se venden libros.",
          "Se vive bien aquí.",
          "Se necesitan voluntarios.",
          "Se alquilan casas."
        ],
        "correctIndex": 1,
        "explanation": "\"Se vive bien\" no tiene sustantivo que determine el número: se impersonal."
      },
      {
        "type": "multi-select",
        "question": "¿Qué verbos son irregulares en subjuntivo presente? (Elige todas las correctas)",
        "options": [
          "ser",
          "hablar",
          "estar",
          "comer"
        ],
        "correctIndexes": [
          0,
          2
        ],
        "explanation": "Hablar y comer son regulares; ser y estar son irregulares."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras.",
        "words": [
          "Ojalá",
          "que",
          "tengamos",
          "buena",
          "suerte"
        ],
        "explanation": "Ojalá siempre lleva subjuntivo.",
        "translation": "I hope we have good luck."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras.",
        "words": [
          "Si",
          "estudias",
          "más,",
          "aprobarás",
          "el",
          "examen"
        ],
        "explanation": "Si + presente, + futuro.",
        "translation": "If you study more, you will pass the exam."
      },
      {
        "type": "translate",
        "direction": "es-en",
        "prompt": "Translate this sentence to English.",
        "source": "Cuando llegamos a casa, ya habían apagado las luces.",
        "answer": "When we got home, they had already turned off the lights.",
        "explanation": "Habían apagado is the past perfect — an action completed before another past action."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Translate this sentence to Spanish.",
        "source": "I hope you can come to the party.",
        "answer": "Ojalá que puedas venir a la fiesta.",
        "explanation": "Ojalá always triggers the subjunctive: puedas."
      },
      {
        "type": "fill-blank",
        "prompt": "Conjuga el verbo.",
        "sentence": "Es una lástima que ellos no ___ (poder) venir.",
        "answer": "puedan",
        "explanation": "Es una lástima que expresa emoción: requiere subjuntivo."
      },
      {
        "type": "multiple-choice",
        "question": "En la voz pasiva formal (ser + participio), ¿qué palabra introduce al agente de la acción?",
        "options": [
          "para",
          "por",
          "de",
          "con"
        ],
        "correctIndex": 1,
        "explanation": "La voz pasiva formal usa \"por\" para introducir quién realizó la acción: El puente fue construido por ingenieros famosos."
      },
      {
        "type": "matching",
        "instructions": "Empareja cada verbo irregular con su forma de subjuntivo (yo).",
        "pairs": [
          {
            "left": "ser",
            "right": "sea"
          },
          {
            "left": "estar",
            "right": "esté"
          },
          {
            "left": "ir",
            "right": "vaya"
          },
          {
            "left": "saber",
            "right": "sepa"
          },
          {
            "left": "dar",
            "right": "dé"
          }
        ],
        "explanation": "Estos cinco verbos son completamente irregulares en el subjuntivo presente."
      }
    ]
  },
  {
    "slug": "el-sendero-perdido",
    "level": "B1",
    "number": 69,
    "title": "El sendero perdido",
    "summary": "Four friends hiking in a Chilean national park wander off the marked trail and must work together to find their way back before dark.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Valentina, Mateo, Camila y Diego llevaban meses planeando esta excursión al Parque Nacional Torres del Paine. Los cuatro eran amigos desde la escuela secundaria y querían celebrar el verano con una caminata de un día por las montañas del sur de Chile. Salieron muy temprano, con mochilas llenas de agua, sándwiches y mapas del parque.",
          "El cielo estaba despejado y el sol brillaba sobre los picos nevados. Caminaron por el sendero principal durante casi dos horas, sacando fotos y riendo. Valentina, que siempre llevaba la cámara, quería encontrar el mirador perfecto para fotografiar el lago turquesa que se veía a lo lejos.",
          "Cuando vio un pequeño camino que se separaba del sendero oficial, Valentina dijo que probablemente llevaba a una vista mejor. \"Solo será un momento\", prometió. Sus amigos, curiosos, la siguieron sin pensarlo mucho. El camino era estrecho y estaba cubierto de piedras sueltas, pero ellos siguieron avanzando entre los árboles.",
          "Después de veinte minutos, Diego se dio cuenta de que ya no había señales ni marcadores en los árboles. \"Creo que nos hemos alejado demasiado del sendero principal\", dijo, mirando su teléfono, que no tenía señal. El grupo se detuvo, y por primera vez sintieron un poco de miedo.",
          "\"Esto es tu culpa\", le dijo Diego a Valentina, un poco enojado. Ella se defendió diciendo que todos habían decidido seguir el camino juntos. Mateo, que normalmente era tranquilo, pidió que dejaran de discutir. \"Pelear no nos va a ayudar a salir de aquí\", explicó con calma.",
          "Camila, que había hecho muchas excursiones con su padre cuando era niña, recordó un consejo importante: si te pierdes en la montaña, es mejor buscar un río o un arroyo, porque el agua siempre baja hacia los valles, donde suele haber caminos y gente. \"Escuchen\", dijo, \"oigo agua correr hacia la izquierda\".",
          "Siguieron el sonido del agua durante casi una hora. El terreno era difícil, con rocas resbaladizas y ramas que les cortaban el paso. Empezó a hacer más frío, y unas nubes grises cubrieron el cielo. Todos estaban cansados, pero nadie quería parar hasta encontrar el camino correcto.",
          "Cuando llegaron al arroyo, tuvieron que cruzarlo saltando de piedra en piedra. Mateo resbaló y se mojó un pie, pero no se lastimó. Diego lo ayudó a levantarse y, por primera vez en horas, todos se rieron un poco, aliviados de que no hubiera sido algo peor.",
          "Después de seguir el arroyo durante otra media hora, escucharon voces a lo lejos. Era un grupo de guardaparques que hacía su ronda diaria por la zona. Los guardaparques les explicaron que estaban a solo quince minutos del sendero principal y los acompañaron hasta llegar a él.",
          "Ya en el camino correcto, el grupo caminó en silencio durante un rato, pensando en lo que había pasado. Valentina rompió el silencio para pedir disculpas por haber sugerido el atajo. \"Aprendí que es importante que sigamos siempre el sendero marcado\", admitió.",
          "Llegaron al refugio antes de que oscureciera completamente, justos a tiempo para ver una puesta de sol espectacular sobre las montañas. Esa noche, mientras comían alrededor de una pequeña fogata, todos estuvieron de acuerdo en que, aunque habían pasado un momento difícil, la experiencia los había unido más como amigos.",
          "Desde ese día, cada vez que planean una excursión, siempre revisan el mapa juntos antes de salir y prometen no separarse del camino oficial, sin importar cuán tentadora parezca una vista."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "Why did the group leave the main trail?",
        "options": [
          "They wanted to avoid other hikers",
          "Valentina thought there was a better view down a side path",
          "Diego needed to make a phone call",
          "They were looking for a place to camp"
        ],
        "correctIndex": 1,
        "explanation": "Valentina says the side path \"probablemente llevaba a una vista mejor\" (probably led to a better view) of the lake."
      },
      {
        "type": "multiple-choice",
        "question": "What advice did Camila remember for getting unlost in the mountains?",
        "options": [
          "Climb to the highest point",
          "Stay perfectly still and wait for help",
          "Follow water downhill because it leads to valleys and roads",
          "Follow the direction of the wind"
        ],
        "correctIndex": 2,
        "explanation": "Camila recalls that \"el agua siempre baja hacia los valles, donde suele haber caminos y gente.\""
      },
      {
        "type": "multiple-choice",
        "question": "Who eventually helped the group find the main trail again?",
        "options": [
          "A group of park rangers",
          "A local farmer",
          "Another group of hikers",
          "A helicopter rescue team"
        ],
        "correctIndex": 0,
        "explanation": "The text says \"Era un grupo de guardaparques que hacía su ronda diaria\" who guided them back to the trail."
      }
    ]
  },
  {
    "slug": "primer-concierto",
    "level": "B1",
    "number": 70,
    "title": "El primer concierto de Rodrigo",
    "summary": "A nervous amateur guitarist gets his first chance to perform live at a small café and has to overcome his stage fright.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Rodrigo llevaba tres años tocando la guitarra en su habitación, pero nunca había tocado delante de otras personas. Aprendió solo, mirando videos en internet, y soñaba con tocar en un escenario de verdad algún día. Vivía en Valparaíso, una ciudad llena de música y colores en las calles.",
          "Un día, mientras caminaba por el centro, vio un cartel en la ventana de un café: \"Noche de talentos: los jueves a las ocho\". El corazón le empezó a latir muy rápido. Entró y preguntó cómo podía participar. La dueña del café, una mujer amable llamada Teresa, le dijo que solo necesitaba apuntarse en una lista.",
          "Esa noche, Rodrigo no pudo dormir. Pensaba en todas las cosas que podían salir mal: olvidar la letra, romper una cuerda de la guitarra, o simplemente quedarse congelado frente al público. Le contó su miedo a su hermana mayor, Isabel, quien le dijo: \"Es normal que estés nervioso, pero eso no significa que vayas a fallar\".",
          "Durante los días siguientes, Rodrigo practicó su canción favorita, una composición propia que había escrito sobre el mar de su ciudad. Ensayó frente al espejo, frente a su perro y hasta frente a su abuela, que aplaudía cada vez que terminaba, aunque no entendía mucho de música.",
          "El jueves de la presentación llegó más rápido de lo que Rodrigo esperaba. Cuando entró al café, vio que había casi veinte personas sentadas en las mesas, tomando café y conversando. Sintió que las piernas le temblaban y por un momento pensó en irse antes de que lo llamaran.",
          "Isabel, que había ido a apoyarlo, le tomó la mano y le dijo: \"No importa si te equivocas. Lo importante es que lo intentes\". Esas palabras le dieron un poco de valor. Cuando Teresa anunció su nombre, Rodrigo respiró profundo y caminó hacia el pequeño escenario con la guitarra en la mano.",
          "Al principio, sus dedos temblaban tanto que casi no podía tocar la primera nota. El público esperaba en silencio. Rodrigo cerró los ojos, pensó en el mar y en las olas que había visto tantas veces desde su ventana, y finalmente comenzó a tocar.",
          "La canción empezó despacio, pero poco a poco Rodrigo se fue relajando. Su voz, aunque temblorosa al principio, se volvió más segura con cada verso. Notó que algunas personas del público sonreían y movían la cabeza al ritmo de la música, y eso lo animó todavía más.",
          "Cuando terminó la canción, hubo un momento de silencio que a Rodrigo le pareció eterno. Después, el café entero explotó en aplausos. Una mujer mayor, sentada cerca del escenario, le dijo que la canción le había recordado a su propia juventud junto al mar.",
          "Teresa se acercó después y le preguntó si quería tocar otra vez el jueves siguiente. Rodrigo, todavía sorprendido por lo que había pasado, aceptó sin dudarlo. Se dio cuenta de que el miedo que había sentido antes de subir al escenario había valido la pena.",
          "Esa noche, mientras caminaba a casa con Isabel, Rodrigo le dijo que quería componer canciones nuevas para el próximo concierto. Había descubierto que, aunque los nervios nunca desaparecen completamente, se pueden superar si uno confía en su propio trabajo y práctica.",
          "Con el tiempo, Rodrigo se convirtió en una presencia habitual en el café de Teresa, y algunos clientes empezaron a ir solo para escucharlo tocar los jueves por la noche."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "What did Rodrigo see that inspired him to sign up to perform?",
        "options": [
          "An online contest advertisement",
          "A sign in a café window announcing a talent night",
          "A flyer at his school",
          "A message from a friend"
        ],
        "correctIndex": 1,
        "explanation": "He sees a sign that reads \"Noche de talentos: los jueves a las ocho\" and decides to sign up."
      },
      {
        "type": "multiple-choice",
        "question": "What did Rodrigo's song describe?",
        "options": [
          "His guitar",
          "His sister Isabel",
          "The sea near his city",
          "His grandmother's kitchen"
        ],
        "correctIndex": 2,
        "explanation": "The story says he wrote \"una composición propia que había escrito sobre el mar de su ciudad.\""
      },
      {
        "type": "multiple-choice",
        "question": "What happened right after Rodrigo finished his song?",
        "options": [
          "Everyone left the café",
          "There was a brief silence, then the whole café applauded",
          "Teresa asked him to stop",
          "He forgot the last verse"
        ],
        "correctIndex": 1,
        "explanation": "The text says \"hubo un momento de silencio... Después, el café entero explotó en aplausos.\""
      }
    ]
  },
  {
    "slug": "los-regalos-misteriosos",
    "level": "B1",
    "number": 71,
    "title": "Los regalos misteriosos",
    "summary": "A curious teenager investigates who has been secretly leaving small gifts on neighbors' doorsteps in her small town.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "En el pequeño pueblo de Villaflor, en el sur de España, empezaron a suceder cosas extrañas durante el invierno. Cada mañana, algunos vecinos encontraban pequeños regalos frente a sus puertas: una bufanda tejida a mano, una canasta de frutas, un dibujo hecho por un niño, o incluso una nota con palabras de ánimo.",
          "Lucía, una estudiante de quince años que vivía con su madre en la calle principal del pueblo, se sintió muy intrigada por el misterio. Todos en el pueblo hablaban del tema en la panadería y en la plaza, pero nadie sabía quién dejaba los regalos ni por qué lo hacía.",
          "Algunos vecinos, como el señor Antúnez, pensaban que era una broma de mal gusto. Otros creían que era una señal de buena suerte. Lucía, sin embargo, quería descubrir la verdad. Decidió que investigaría el misterio como si fuera una verdadera detective.",
          "Empezó a anotar en un cuaderno los días y las horas en que aparecían los regalos, además de las casas donde ocurría. Notó un patrón: los regalos siempre aparecían los martes y los viernes por la mañana, muy temprano, antes de que saliera el sol.",
          "Una noche, Lucía le pidió permiso a su madre para quedarse despierta hasta muy tarde, escondida detrás de la ventana de su habitación, que daba a la calle. Su madre, curiosa también, aceptó ayudarla, aunque le dijo que era importante que no hicieran ruido para no asustar a nadie.",
          "Esperaron durante horas, tomando té caliente para no dormirse. Alrededor de las cinco de la mañana, Lucía vio una figura pequeña caminando despacio por la calle, cargando una bolsa de tela. La figura se detuvo frente a la casa de la señora Rosa, una mujer anciana que vivía sola.",
          "Con mucho cuidado, Lucía y su madre salieron a la calle para ver mejor. Descubrieron que la persona era Tomás, un niño de doce años que vivía a dos calles de distancia. Al verlas, Tomás se puso muy nervioso y casi se le cayó la bolsa de las manos.",
          "Lucía le preguntó por qué dejaba los regalos en secreto. Tomás, con lágrimas en los ojos, explicó que su abuela había muerto el año anterior y que ella siempre decía que ayudar a los demás sin esperar nada a cambio era lo más importante de la vida.",
          "Tomás contó que había decidido continuar la tradición de su abuela, que también dejaba pequeños regalos a los vecinos cuando él era más pequeño. No quería que nadie supiera que era él, porque pensaba que el gesto perdía valor si la gente sabía quién lo hacía.",
          "Conmovida por la historia, Lucía prometió guardar el secreto de Tomás, pero le sugirió que quizás algún día podría contarle la verdad al pueblo, para que todos entendieran el significado detrás de los regalos. Tomás dijo que lo pensaría con calma.",
          "Esa primavera, cuando el pueblo organizó una fiesta para celebrar el aniversario de la plaza, Tomás finalmente decidió contar su historia frente a todos. Muchos vecinos lloraron al escuchar sobre la abuela de Tomás y su deseo de ayudar sin buscar reconocimiento.",
          "Desde entonces, varios vecinos de Villaflor empezaron a dejar pequeños regalos anónimos también, y el pueblo entero adoptó la costumbre como una manera especial de cuidarse los unos a los otros."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "What pattern did Lucía notice about when the gifts appeared?",
        "options": [
          "Only on Sundays at noon",
          "Every day at midnight",
          "Tuesdays and Fridays, early in the morning before sunrise",
          "Only during full moons"
        ],
        "correctIndex": 2,
        "explanation": "She noted the gifts \"siempre aparecían los martes y los viernes por la mañana, muy temprano, antes de que saliera el sol.\""
      },
      {
        "type": "multiple-choice",
        "question": "Why did Tomás leave the gifts secretly?",
        "options": [
          "He wanted to win a prize",
          "He was continuing a tradition his late grandmother had started",
          "He was trying to apologize to a neighbor",
          "He was collecting money for charity"
        ],
        "correctIndex": 1,
        "explanation": "Tomás explains his grandmother believed helping others without expecting anything back was important, and he continued her tradition."
      },
      {
        "type": "multiple-choice",
        "question": "What did Tomás eventually do at the town's plaza anniversary party?",
        "options": [
          "He gave a musical performance",
          "He publicly told everyone his story",
          "He moved away from the town",
          "He asked Lucía to keep helping him secretly forever"
        ],
        "correctIndex": 1,
        "explanation": "The text says \"Tomás finalmente decidió contar su historia frente a todos.\""
      }
    ]
  },
  {
    "slug": "el-concurso-de-cocina",
    "level": "B1",
    "number": 72,
    "title": "El concurso de cocina",
    "summary": "A teenage cooking enthusiast enters a local competition and must find his own voice instead of copying his idol.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Andrés tenía dieciséis años y, desde pequeño, pasaba horas en la cocina de su casa en Oaxaca, México, ayudando a su madre a preparar mole, tamales y otros platillos tradicionales. Su sueño era convertirse en chef algún día, y por eso decidió inscribirse en el concurso de cocina joven de su ciudad.",
          "El concurso tenía tres etapas y ofrecía como premio una beca para estudiar en una escuela de gastronomía. Andrés admiraba mucho a un chef famoso de la televisión, y por eso pensó que la mejor estrategia era copiar exactamente sus recetas para impresionar a los jueces.",
          "Durante las semanas antes del concurso, Andrés practicó una receta complicada de pasta italiana que había visto en un programa de televisión. Su madre le preguntó por qué no preparaba algo relacionado con su propia cultura, pero Andrés insistió en que los jueces preferirían algo más \"sofisticado\".",
          "El día de la primera ronda, Andrés se puso muy nervioso al ver a los otros competidores, todos preparando platos elegantes con ingredientes que él nunca había usado. Cuando llegó su turno, cocinó la pasta italiana, pero se equivocó con las cantidades de sal y el plato quedó demasiado salado.",
          "Los jueces probaron su plato con expresiones serias. Uno de ellos, la chef Patricia, le preguntó por qué un joven de Oaxaca había decidido cocinar un plato italiano en lugar de algo más personal. Andrés no supo qué responder y se sintió muy avergonzado frente a todos.",
          "Aunque no fue eliminado esa primera ronda, Andrés quedó en último lugar entre los finalistas que avanzaron. Esa noche, mientras cenaba en silencio con su madre, ella le dijo con cariño: \"Espero que la próxima vez cocines algo que realmente venga de tu corazón, no de la televisión\".",
          "Las palabras de su madre lo hicieron reflexionar durante varios días. Recordó las tardes de su infancia preparando mole con su abuela, mezclando chiles, chocolate y especias durante horas hasta lograr el sabor perfecto. Decidió que, para la segunda ronda, cocinaría ese plato familiar.",
          "Practicó la receta de su abuela varias veces, ajustando pequeños detalles con la ayuda de su madre. Cada vez que probaba el mole, recordaba historias de su familia y sentía que estaba cocinando algo con verdadero significado, no solo para impresionar a los jueces.",
          "El día de la segunda ronda, Andrés presentó su mole con mucha más confianza que antes. Cuando la chef Patricia lo probó, cerró los ojos por un momento y sonrió. \"Esto sabe a tradición, a historia y a amor\", dijo frente a todo el público.",
          "Andrés avanzó a la ronda final, donde decidió cocinar otro platillo tradicional, esta vez con un pequeño toque personal que había inventado él mismo. Aunque no ganó el primer lugar del concurso, obtuvo el premio especial a la \"autenticidad culinaria\".",
          "Al final del concurso, la chef Patricia le dijo que sus dos últimos platillos mostraban un talento genuino, algo que ningún competidor podía copiar de la televisión. Le ofreció una pasantía en su restaurante durante el verano para seguir aprendiendo.",
          "Andrés volvió a casa esa noche muy orgulloso, no por haber ganado el primer premio, sino por haber aprendido que la mejor cocina viene de quién eres, no de quién intentas imitar."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "What strategy did Andrés first choose for the competition?",
        "options": [
          "To cook his grandmother's recipes",
          "To copy the recipes of a famous TV chef",
          "To invent a completely new dish",
          "To ask his mother to cook for him"
        ],
        "correctIndex": 1,
        "explanation": "The text says he thought \"la mejor estrategia era copiar exactamente sus recetas\" (of the famous TV chef)."
      },
      {
        "type": "multiple-choice",
        "question": "What went wrong with his dish in the first round?",
        "options": [
          "He burned the pasta",
          "He used the wrong pan",
          "He added too much salt",
          "He forgot an ingredient entirely"
        ],
        "correctIndex": 2,
        "explanation": "The story says \"se equivocó con las cantidades de sal y el plato quedó demasiado salado.\""
      },
      {
        "type": "multiple-choice",
        "question": "What dish did Andrés cook for the second round, and how did the judge react?",
        "options": [
          "Italian pasta again; she was unimpressed",
          "His grandmother's mole; she said it tasted like tradition and love",
          "A French dessert; she asked for the recipe",
          "Tamales; she said they needed more spice"
        ],
        "correctIndex": 1,
        "explanation": "Chef Patricia tastes his mole and says, \"Esto sabe a tradición, a historia y a amor.\""
      }
    ]
  },
  {
    "slug": "la-estudiante-de-intercambio",
    "level": "B1",
    "number": 73,
    "title": "La estudiante de intercambio",
    "summary": "A Japanese exchange student in Argentina struggles to adjust to her host family's noisy, affectionate household.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Yuki llegó a Buenos Aires en marzo, al comienzo del año escolar en Argentina, con una maleta grande y muchos nervios. Iba a vivir seis meses con la familia Fernández como parte de un programa de intercambio estudiantil, algo que había soñado desde que empezó a estudiar español en Japón.",
          "La familia Fernández era muy diferente a lo que Yuki había imaginado. Eran cinco personas viviendo en un departamento pequeño: los padres, dos hijos adolescentes y una abuela que hablaba muy rápido y siempre contaba historias largas durante la cena. En su casa en Japón, las comidas eran mucho más tranquilas y silenciosas.",
          "Durante la primera semana, Yuki se sintió abrumada. Todos hablaban al mismo tiempo, se abrazaban constantemente y discutían sobre fútbol con mucha pasión. Además, la comida se servía muy tarde, a las nueve o diez de la noche, algo completamente distinto a los horarios que ella conocía.",
          "Una noche, después de la cena, Yuki se encerró en su habitación y le escribió un mensaje a su madre en Japón, contándole que extrañaba mucho su casa y que no sabía si podría acostumbrarse a tanto ruido y tanta gente hablando a la vez.",
          "Camila, la hija menor de los Fernández, que tenía la misma edad que Yuki, notó que su nueva \"hermana\" parecía triste durante los últimos días. Decidió tocar la puerta de su habitación y preguntarle si estaba bien, aunque al principio Yuki solo respondió con frases cortas.",
          "Poco a poco, Camila logró que Yuki hablara sobre lo que sentía. Yuki explicó que en su cultura la gente suele ser más callada y que no estaba acostumbrada a tanto contacto físico ni a tantas conversaciones ruidosas durante las comidas. Camila escuchó con atención, sin juzgarla.",
          "\"Es importante que nos digas cuando algo te incomode\", le dijo Camila. \"Queremos que te sientas cómoda aquí, no solo que te adaptes a todo en silencio\". Esa conversación ayudó a Yuki a entender que la familia realmente se preocupaba por ella.",
          "A partir de esa noche, la familia Fernández empezó a hacer pequeños cambios: bajaban un poco el volumen de las conversaciones cuando notaban que Yuki necesitaba tranquilidad, y le preguntaban antes de abrazarla. Yuki, por su parte, decidió esforzarse un poco más por participar en las conversaciones familiares.",
          "Con el paso de las semanas, Yuki empezó a disfrutar de las cenas largas y ruidosas. Aprendió a contar historias sobre su vida en Japón, y la abuela de la familia se convirtió en su persona favorita de la casa, porque siempre tenía anécdotas divertidas sobre su juventud.",
          "Para el final de su intercambio, Yuki ya abrazaba a todos sin pensarlo dos veces y participaba activamente en las discusiones sobre fútbol, aunque nunca entendió del todo las reglas del juego. Había encontrado un equilibrio entre su propia forma de ser y las costumbres de su nueva familia.",
          "El día que Yuki tuvo que regresar a Japón, toda la familia Fernández fue al aeropuerto a despedirla. Camila lloró mucho y le prometió que algún día viajaría a Japón para visitarla y conocer a su familia.",
          "Yuki volvió a su país con una maleta llena de regalos y el corazón lleno de recuerdos. Había aprendido que, aunque las costumbres de dos culturas pueden parecer muy diferentes al principio, siempre es posible encontrar comprensión y cariño si las personas se escuchan de verdad."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "What overwhelmed Yuki during her first week with the Fernández family?",
        "options": [
          "The lack of food",
          "Everyone talking at once, hugging constantly, and late dinners",
          "Having to cook for herself",
          "Not being allowed to go to school"
        ],
        "correctIndex": 1,
        "explanation": "The text says \"Todos hablaban al mismo tiempo, se abrazaban constantemente\" and dinner was served \"a las nueve o diez de la noche.\""
      },
      {
        "type": "multiple-choice",
        "question": "What did Camila tell Yuki was important?",
        "options": [
          "That Yuki should just stay silent and adapt",
          "That Yuki should tell them when something made her uncomfortable",
          "That Yuki should go back to Japan",
          "That Yuki needed to learn to cook Argentine food immediately"
        ],
        "correctIndex": 1,
        "explanation": "Camila says, \"Es importante que nos digas cuando algo te incomode.\""
      },
      {
        "type": "multiple-choice",
        "question": "How had Yuki changed by the end of her exchange?",
        "options": [
          "She refused to hug anyone",
          "She hugged everyone freely and joined in soccer conversations",
          "She stopped eating dinner with the family",
          "She moved out to live alone"
        ],
        "correctIndex": 1,
        "explanation": "The text says \"Yuki ya abrazaba a todos sin pensarlo dos veces y participaba activamente en las discusiones sobre fútbol.\""
      }
    ]
  },
  {
    "slug": "el-partido-solidario",
    "level": "B1",
    "number": 74,
    "title": "El partido solidario",
    "summary": "Two rival youth soccer teams must combine forces for a single charity match, testing old grudges and new friendships.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "En la ciudad de Medellín, los equipos juveniles Águilas y Halcones eran rivales desde hacía años. Cada vez que jugaban entre ellos, los partidos terminaban con gritos, discusiones y, a veces, jugadores expulsados por el árbitro. Los aficionados de ambos equipos también se llevaban muy mal.",
          "Un día, el club deportivo del barrio anunció que el hospital infantil de la ciudad necesitaba dinero urgente para comprar equipo médico nuevo. Para ayudar, organizarían un partido solidario, pero con una condición especial: los jugadores de Águilas y Halcones tendrían que combinarse en un solo equipo mixto.",
          "La noticia no le gustó a nadie al principio. Sebastián, el capitán de Águilas, dijo que sería imposible jugar en el mismo equipo que sus rivales de toda la vida. Nicolás, el capitán de Halcones, pensaba exactamente lo mismo, y durante el primer entrenamiento conjunto, casi nadie se hablaba.",
          "El entrenador encargado del equipo combinado, don Fabio, notó la tensión enseguida. \"Espero que todos recuerden por qué estamos aquí\", les dijo a los jugadores reunidos. \"No estamos jugando por orgullo esta vez, sino por los niños del hospital\". Sus palabras, sin embargo, no cambiaron mucho el ambiente esa primera semana.",
          "Durante los entrenamientos, Sebastián y Nicolás competían constantemente por ser el líder del equipo, dando órdenes contradictorias a sus compañeros. Esto causó confusión en la cancha y varios errores durante los ejercicios. Los demás jugadores empezaron a frustrarse con la actitud de ambos capitanes.",
          "Una tarde, después de un entrenamiento especialmente desastroso, don Fabio reunió a Sebastián y Nicolás por separado. Les preguntó si realmente querían que el equipo perdiera el partido solidario solo por no querer cooperar el uno con el otro. Ninguno de los dos supo qué responder.",
          "Esa noche, por casualidad, Sebastián y Nicolás coincidieron en la misma parada de autobús. En vez de ignorarse como siempre, empezaron a hablar sobre el partido. Nicolás admitió que estaba cansado de la rivalidad y que, en el fondo, admiraba la manera de jugar de Sebastián.",
          "Sebastián, sorprendido por la sinceridad de Nicolás, confesó que él pensaba lo mismo. Los dos se dieron cuenta de que llevaban años peleando por una rivalidad que ni siquiera recordaban cómo había empezado exactamente. Decidieron que, para el bien del equipo, trabajarían juntos como colíderes.",
          "A partir de ese momento, los entrenamientos cambiaron completamente. Sebastián y Nicolás empezaron a dar instrucciones coordinadas, y el resto del equipo, al ver que sus capitanes se llevaban mejor, también comenzó a colaborar con más entusiasmo. La cancha, antes llena de tensión, se llenó de risas.",
          "El día del partido solidario llegó, y el estadio estaba lleno de familias y aficionados de ambos equipos, todos unidos por la misma causa. El equipo combinado jugó con una coordinación sorprendente, y Sebastián y Nicolás se pasaron el balón varias veces con una confianza que nadie esperaba ver entre ellos.",
          "El equipo ganó el partido tres a uno, pero lo más importante fue que lograron recaudar más dinero del esperado para el hospital infantil. Al final del juego, Sebastián y Nicolás se abrazaron frente a todo el público, un gesto que sorprendió a los aficionados de ambos equipos.",
          "Después de ese día, Águilas y Halcones siguieron siendo rivales en la liga local, pero cada año organizaron juntos un partido solidario nuevo. Sebastián y Nicolás, además, se convirtieron en verdaderos amigos fuera de la cancha."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "What special condition came with the charity match?",
        "options": [
          "Only girls could play",
          "Players from Águilas and Halcones had to form one combined team",
          "The match had to be played without a referee",
          "Ticket sales would fund new team uniforms"
        ],
        "correctIndex": 1,
        "explanation": "The rivals had to combine into one team: \"los jugadores de Águilas y Halcones tendrían que combinarse en un solo equipo mixto.\""
      },
      {
        "type": "multiple-choice",
        "question": "Where did Sebastián and Nicolás first have an honest conversation?",
        "options": [
          "In the coach's office",
          "At a bus stop",
          "During the final match",
          "At the hospital"
        ],
        "correctIndex": 1,
        "explanation": "The text says \"Sebastián y Nicolás coincidieron en la misma parada de autobús\" and began talking honestly."
      },
      {
        "type": "multiple-choice",
        "question": "What was the outcome of the charity match?",
        "options": [
          "The team lost badly",
          "The team won 3-1 and raised more money than expected for the hospital",
          "The match was cancelled due to rain",
          "Sebastián quit the team"
        ],
        "correctIndex": 1,
        "explanation": "The story states \"El equipo ganó el partido tres a uno\" and they raised more money than expected for the children's hospital."
      }
    ]
  },
  {
    "slug": "el-negocio-de-paseos",
    "level": "B1",
    "number": 75,
    "title": "El negocio de paseos",
    "summary": "A teenager starts a neighborhood dog-walking business to save money for a bike, but quickly learns it's harder than it looks.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Martín tenía catorce años y quería ahorrar dinero para comprarse una bicicleta nueva. Vivía en un barrio tranquilo de Montevideo, donde muchas familias tenían perros pero poco tiempo para pasearlos durante el día. Un día, mientras paseaba al perro de su vecina, tuvo una idea: podía empezar un pequeño negocio de paseos de perros.",
          "Hizo carteles a mano con su número de teléfono y los pegó en los postes de luz de su calle. También le pidió a su madre que compartiera la información en el grupo de vecinos del barrio. En menos de una semana, ya tenía tres clientes interesados en contratar sus servicios.",
          "El primer cliente fue la señora Beatriz, dueña de un perro grande y muy energético llamado Rocco. Martín pensó que sería un paseo fácil, pero Rocco tiraba tan fuerte de la correa que casi lo hizo caer varias veces. Al final del primer paseo, Martín estaba agotado y con las manos rojas.",
          "El segundo cliente fue el señor Osvaldo, quien tenía dos perros pequeños que se peleaban constantemente entre ellos. Martín tuvo que aprender rápidamente a separarlos cada vez que se enojaban por cualquier cosa, algo que no había previsto cuando empezó el negocio.",
          "Después de dos semanas, Martín se dio cuenta de que ganar dinero paseando perros era mucho más difícil de lo que había imaginado al principio. Llegaba a casa cansado, con la ropa sucia y a veces con pequeñas mordidas de correa en las manos. Pensó en dejar el negocio por completo.",
          "Su padre, al notar su frustración, le preguntó por qué había querido empezar el negocio originalmente. Martín le recordó su sueño de comprar una bicicleta nueva, y su padre le dijo: \"Todo negocio tiene problemas al principio. Lo importante es que aprendas a resolverlos, no que te rindas enseguida\".",
          "Motivado por el consejo de su padre, Martín decidió investigar más sobre el comportamiento de los perros. Miró varios videos en internet sobre cómo pasear perros nerviosos y aprendió técnicas simples, como usar una correa más corta o llevar pequeños premios para calmarlos durante el paseo.",
          "La próxima vez que paseó a Rocco, Martín aplicó las nuevas técnicas y notó una gran diferencia: el perro caminaba mucho más tranquilo a su lado. Con los perros del señor Osvaldo, empezó a pasearlos por separado en distintos horarios, lo cual eliminó por completo las peleas entre ellos.",
          "Poco a poco, Martín se hizo más conocido en el barrio como \"el chico de los perros\", y recibió más solicitudes de vecinos que querían contratarlo. Organizó un horario semanal en un cuaderno para no confundirse entre los diferentes clientes y sus necesidades específicas.",
          "Después de tres meses de trabajo constante, Martín finalmente ahorró suficiente dinero para comprar la bicicleta que tanto quería. Pero, para su sorpresa, decidió seguir paseando perros incluso después de comprarla, porque había empezado a disfrutar realmente del tiempo que pasaba con los animales.",
          "La señora Beatriz le comentó un día que Rocco parecía mucho más feliz desde que Martín lo paseaba regularmente, y que ella también se sentía más tranquila sabiendo que su perro hacía ejercicio todos los días.",
          "Al final del verano, Martín ya tenía siete clientes regulares y había aprendido una lección importante: los negocios pequeños requieren paciencia, y los problemas iniciales no significan que uno deba abandonar sus metas."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "Why did Martín want to earn money in the first place?",
        "options": [
          "To buy a new phone",
          "To save up for a new bicycle",
          "To pay for school supplies",
          "To help his mother with rent"
        ],
        "correctIndex": 1,
        "explanation": "The text says he \"quería ahorrar dinero para comprarse una bicicleta nueva.\""
      },
      {
        "type": "multiple-choice",
        "question": "What problem did Martín have with Mr. Osvaldo's two dogs?",
        "options": [
          "They refused to walk at all",
          "They constantly fought with each other",
          "They ran away every time",
          "They were too old to walk"
        ],
        "correctIndex": 1,
        "explanation": "The story says the dogs \"se peleaban constantemente entre ellos,\" so he had to separate them."
      },
      {
        "type": "multiple-choice",
        "question": "What did Martín do after finally saving enough for the bicycle?",
        "options": [
          "He immediately quit walking dogs",
          "He kept walking dogs because he had grown to enjoy it",
          "He sold the business to a friend",
          "He gave the bicycle to his sister"
        ],
        "correctIndex": 1,
        "explanation": "The text says he \"decidió seguir paseando perros incluso después de comprarla, porque había empezado a disfrutar realmente\" of the time with the animals."
      }
    ]
  },
  {
    "slug": "el-primer-campamento",
    "level": "B1",
    "number": 76,
    "title": "El primer campamento sin nada moderno",
    "summary": "A family's first camping trip without phones or modern comforts starts as a disaster but becomes an unexpectedly meaningful bonding experience.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "La familia Salinas siempre pasaba sus vacaciones en hoteles con aire acondicionado y televisión por cable. Este año, sin embargo, el padre, Ricardo, propuso algo diferente: acampar en las montañas cerca de Bariloche durante un fin de semana, sin teléfonos, sin electricidad y sin ninguna comodidad moderna.",
          "Sus dos hijos, Julieta de trece años y Bruno de diez, no estaban nada contentos con la idea. Julieta protestó diciendo que no podría vivir sin su teléfono durante tres días, mientras que Bruno se quejaba de que dormir en una tienda de campaña sonaba incómodo y aburrido.",
          "La madre, Verónica, aunque también tenía dudas, decidió apoyar la idea de su esposo. \"Espero que esto nos ayude a pasar más tiempo juntos como familia\", dijo, mientras empacaba las mochilas con linternas, fósforos y comida enlatada en lugar de su celular y su computadora portátil.",
          "El primer día en el campamento fue un desastre casi total. Ricardo tardó más de una hora en armar la tienda de campaña porque había olvidado las instrucciones en casa. Bruno se quejó constantemente del calor, y Julieta se sentó en una piedra, mirando su teléfono apagado con tristeza.",
          "Para la cena, Ricardo intentó encender una fogata para cocinar, pero la madera estaba húmeda y no lograba prender el fuego. Después de varios intentos fallidos, toda la familia terminó comiendo galletas frías directamente de la bolsa, en completo silencio.",
          "Esa noche, dentro de la tienda, Julieta le susurró a su madre que quería volver a casa al día siguiente. Verónica le respondió que entendía su frustración, pero le pidió que le dieran una oportunidad más al día siguiente antes de tomar cualquier decisión.",
          "A la mañana siguiente, Bruno se despertó temprano por el frío y salió de la tienda. Vio algo que nunca había visto tan claramente en la ciudad: el cielo lleno de estrellas todavía visibles antes del amanecer. Corrió a despertar a su hermana para que lo viera también.",
          "Julieta, aunque de mal humor, salió de la tienda y se quedó completamente sorprendida por la vista. Los dos hermanos se sentaron juntos, en silencio, observando cómo el cielo cambiaba de color mientras salía el sol detrás de las montañas.",
          "Esa mañana, Ricardo finalmente logró encender la fogata, y toda la familia cocinó huevos y pan juntos, riéndose de los errores del día anterior. Sin pantallas ni distracciones, empezaron a contar historias antiguas de la familia que ni Julieta ni Bruno conocían bien.",
          "Durante el resto del fin de semana, la familia caminó por senderos cercanos, nadó en un lago frío y jugó juegos de cartas por las noches, iluminados solo por linternas. Julieta admitió, sorprendida de sí misma, que no había pensado en su teléfono en horas.",
          "El día que regresaron a casa, Bruno preguntó si podían repetir el campamento el próximo verano. Julieta, sonriendo, dijo que estaba de acuerdo, siempre y cuando encendieran la fogata más rápido esta vez.",
          "Ricardo y Verónica se miraron con satisfacción, sabiendo que, a pesar del comienzo difícil, habían logrado exactamente lo que esperaban: acercar a la familia de una manera que la vida moderna casi nunca permitía."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "What did Ricardo propose for the family vacation this year?",
        "options": [
          "A trip to a luxury hotel",
          "Camping in the mountains without phones or electricity",
          "A cruise around South America",
          "Staying home and relaxing"
        ],
        "correctIndex": 1,
        "explanation": "Ricardo proposes \"acampar en las montañas cerca de Bariloche... sin teléfonos, sin electricidad y sin ninguna comodidad moderna.\""
      },
      {
        "type": "multiple-choice",
        "question": "What went wrong on the first night at the campsite?",
        "options": [
          "It rained heavily",
          "The tent collapsed",
          "The firewood was wet and they couldn't cook, so they ate cold crackers",
          "A bear approached the camp"
        ],
        "correctIndex": 2,
        "explanation": "The text says \"la madera estaba húmeda y no lograba prender el fuego\" so they ended up eating cold crackers."
      },
      {
        "type": "multiple-choice",
        "question": "What moment changed Bruno and Julieta's attitude toward the trip?",
        "options": [
          "Winning a card game",
          "Seeing the sky full of stars before dawn",
          "Catching a fish",
          "Getting phone signal again"
        ],
        "correctIndex": 1,
        "explanation": "Bruno wakes early and sees \"el cielo lleno de estrellas todavía visibles antes del amanecer\" and calls Julieta to see it too."
      }
    ]
  },
  {
    "slug": "el-examen-final",
    "level": "B1",
    "number": 77,
    "title": "El examen final",
    "summary": "A stressed-out student learns healthier ways to cope with exam anxiety before her biology final with the help of a classmate.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Faltaban solo tres días para el examen final de biología, y Renata sentía que el mundo se le venía encima. Era una estudiante aplicada del último año de secundaria en Lima, pero esta vez el temario era enorme y sentía que no le alcanzaría el tiempo para prepararse bien.",
          "Renata había decidido estudiar todas las noches hasta muy tarde, durmiendo solo cuatro o cinco horas, y tomando muchas bebidas con cafeína para mantenerse despierta. Pensaba que, cuanto más estudiara, mejor le iría en el examen, sin importar cómo se sintiera físicamente.",
          "El segundo día antes del examen, Renata se sintió mareada durante la clase de historia y tuvo que salir del salón para tomar aire. Su amigo Joaquín, que se sentaba a su lado, la siguió al pasillo, preocupado por lo que acababa de pasar.",
          "\"¿Estás bien?\", le preguntó Joaquín. Renata le explicó que apenas había dormido en los últimos días y que sentía mucha ansiedad por el examen. Joaquín, que también había pasado por situaciones parecidas en el pasado, le sugirió que hablaran con calma sobre lo que estaba sucediendo.",
          "Joaquín le contó que el año anterior él también había estudiado de esa manera para un examen importante, y que terminó enfermándose justo el día del examen por el estrés y la falta de sueño. \"Aprendí que dormir bien es tan importante como estudiar\", le dijo.",
          "Renata admitió que tenía miedo de no aprobar el examen y decepcionar a sus padres, quienes esperaban que ella entrara a la universidad con buenas calificaciones. Joaquín le recordó que sus padres probablemente preferirían que ella estuviera sana antes que exhausta y enferma por el estrés.",
          "Esa tarde, Joaquín le propuso estudiar juntos de una manera diferente: harían pausas de diez minutos cada hora, tomarían agua en lugar de bebidas con cafeína, y se irían a dormir antes de la medianoche, sin importar cuánto material quedara por repasar.",
          "Al principio, Renata dudó del plan, pensando que necesitaba más horas de estudio, no menos. Sin embargo, decidió confiar en el consejo de su amigo, ya que su propio método claramente no estaba funcionando bien para su salud ni para su concentración.",
          "Durante los siguientes dos días, Renata y Joaquín estudiaron juntos en la biblioteca, usando tarjetas de repaso y explicándose los conceptos difíciles el uno al otro. Descubrió que explicar un tema en voz alta la ayudaba a entenderlo mucho mejor que simplemente leerlo en silencio.",
          "La noche antes del examen, Renata se acostó temprano, algo que no había hecho en semanas. Al principio le costó dormir porque seguía pensando en el examen, pero poco a poco logró relajarse, respirando profundamente como Joaquín le había enseñado.",
          "El día del examen, Renata se sintió sorprendentemente tranquila. Aunque todavía tenía algunos nervios normales, ya no sentía el pánico de los días anteriores. Cuando terminó el examen, se dio cuenta de que había podido recordar la mayoría de los conceptos con claridad.",
          "Una semana después, cuando recibió su calificación, Renata descubrió que había aprobado con una nota muy buena. Más importante aún, aprendió que cuidar su cuerpo y su mente era tan esencial como estudiar, una lección que decidió aplicar en todos sus exámenes futuros."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "How was Renata studying for her exam at the start of the story?",
        "options": [
          "Not studying at all",
          "Sleeping only four or five hours and drinking a lot of caffeine",
          "Studying only with her parents",
          "Skipping school to study alone"
        ],
        "correctIndex": 1,
        "explanation": "The text says she was \"durmiendo solo cuatro o cinco horas, y tomando muchas bebidas con cafeína.\""
      },
      {
        "type": "multiple-choice",
        "question": "What happened to Joaquín the previous year when he studied the same way?",
        "options": [
          "He failed the exam",
          "He got sick from stress and lack of sleep on exam day",
          "He lost his notes",
          "He fell asleep during the exam"
        ],
        "correctIndex": 1,
        "explanation": "Joaquín says he \"terminó enfermándose justo el día del examen por el estrés y la falta de sueño.\""
      },
      {
        "type": "multiple-choice",
        "question": "What new study method did Renata and Joaquín try together?",
        "options": [
          "Studying all night without breaks",
          "Taking ten-minute breaks each hour, drinking water instead of caffeine, and sleeping before midnight",
          "Only studying on the day of the exam",
          "Hiring a private tutor"
        ],
        "correctIndex": 1,
        "explanation": "Joaquín proposes they \"harían pausas de diez minutos cada hora, tomarían agua... y se irían a dormir antes de la medianoche.\""
      }
    ]
  },
  {
    "slug": "la-escritora-persistente",
    "level": "B1",
    "number": 78,
    "title": "La escritora persistente",
    "summary": "A teenage writer faces repeated rejection from a literary magazine and must decide whether to give up or keep trying.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Desde los doce años, Antonia soñaba con ver su nombre impreso en una revista literaria. Vivía en Bogotá y llenaba cuadernos enteros con cuentos cortos sobre viajes, misterios y personajes inventados. A los diecisiete años, decidió que finalmente enviaría uno de sus cuentos a una revista juvenil reconocida.",
          "Escribió y reescribió su cuento durante casi un mes, un relato sobre una niña que descubre una carta antigua escondida en la pared de su casa. Cuando por fin quedó satisfecha con el resultado, lo envió por correo electrónico a la revista, junto con una breve carta de presentación.",
          "Durante las semanas siguientes, Antonia revisaba su correo electrónico varias veces al día, esperando una respuesta. Cuando finalmente llegó, sintió que el corazón se le detenía por un segundo. Sin embargo, el mensaje comenzaba con las palabras: \"Lamentamos informarle que su cuento no ha sido seleccionado\".",
          "Antonia se sintió devastada. Cerró la computadora y se quedó llorando en su habitación durante casi una hora. Pensó que tal vez no tenía suficiente talento para ser escritora y que debía olvidarse de ese sueño de una vez por todas.",
          "Su hermano mayor, Felipe, quien estudiaba literatura en la universidad, entró a su habitación al escuchar el llanto. Cuando Antonia le contó lo que había pasado, Felipe le explicó que casi todos los escritores famosos habían recibido rechazos antes de publicar algo importante.",
          "\"Es normal que te sientas triste ahora\", le dijo Felipe, \"pero espero que no dejes que un rechazo decida si vas a seguir escribiendo o no\". Le contó que un escritor que ambos admiraban había sido rechazado más de treinta veces antes de publicar su primera novela.",
          "Aunque las palabras de su hermano la ayudaron un poco, Antonia todavía no se sentía lista para volver a escribir. Guardó su cuaderno en un cajón y no lo tocó durante casi dos meses, evitando pensar en la revista y en el cuento rechazado.",
          "Un día, mientras ayudaba a su abuela a limpiar el ático de la casa familiar, Antonia encontró cartas antiguas escritas por su bisabuela hace más de setenta años. Las cartas hablaban de la vida difícil pero llena de esperanza que había tenido durante su juventud en el campo.",
          "Inspirada por las cartas verdaderas de su bisabuela, Antonia sintió unas ganas enormes de escribir de nuevo. Decidió escribir un nuevo cuento, esta vez basado libremente en la historia de su bisabuela, mezclando hechos reales con elementos inventados por ella.",
          "Escribió este segundo cuento con más cuidado que nunca, pidiéndole a Felipe que lo leyera y le diera su opinión honesta antes de enviarlo. Felipe sugirió algunos cambios pequeños, y Antonia los aceptó, entendiendo que la crítica constructiva podía mejorar su trabajo.",
          "Cuando terminó el cuento, Antonia decidió enviarlo a la misma revista, aunque sentía mucho miedo de recibir otro rechazo. Esta vez, sin embargo, no revisó su correo obsesivamente cada hora; siguió escribiendo otras historias mientras esperaba la respuesta.",
          "Tres semanas después, recibió un correo electrónico que comenzaba con las palabras: \"Nos complace informarle que su cuento ha sido seleccionado para publicación\". Antonia gritó de alegría y corrió a abrazar a Felipe, quien le recordó que su persistencia finalmente había dado frutos."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "What was Antonia's first submitted story about?",
        "options": [
          "A girl who discovers an old letter hidden in a wall",
          "A boy who learns to fish",
          "A trip to the mountains",
          "Her grandmother's garden"
        ],
        "correctIndex": 0,
        "explanation": "The story is described as \"un relato sobre una niña que descubre una carta antigua escondida en la pared de su casa.\""
      },
      {
        "type": "multiple-choice",
        "question": "What did Felipe tell Antonia about famous writers to comfort her?",
        "options": [
          "That they never faced rejection",
          "That a writer they admired was rejected more than thirty times before publishing",
          "That writing is not a real career",
          "That she should give up writing fiction"
        ],
        "correctIndex": 1,
        "explanation": "Felipe tells her a writer they admired \"había sido rechazado más de treinta veces antes de publicar su primera novela.\""
      },
      {
        "type": "multiple-choice",
        "question": "What inspired Antonia to start writing again?",
        "options": [
          "A new writing contest advertisement",
          "Finding her great-grandmother's old letters in the attic",
          "A conversation with a stranger",
          "Watching a movie about writers"
        ],
        "correctIndex": 1,
        "explanation": "She found \"cartas antiguas escritas por su bisabuela\" while cleaning the attic, which inspired her new story."
      }
    ]
  },
  {
    "slug": "el-refugio-de-animales",
    "level": "B1",
    "number": 79,
    "title": "El refugio de animales",
    "summary": "A shy teenager volunteers at an animal shelter and forms an unexpected bond with an anxious dog that no one wants to adopt.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Emilia tenía dieciséis años y era bastante tímida, especialmente con personas nuevas. Cuando su consejera escolar le sugirió hacer trabajo voluntario para completar horas de servicio comunitario, decidió apuntarse al refugio de animales de su ciudad en Guadalajara, pensando que sería más fácil trabajar con animales que con personas.",
          "Su primer día en el refugio fue abrumador. Había perros y gatos de todos los tamaños ladrando y maullando al mismo tiempo, y el olor era mucho más fuerte de lo que había imaginado. La encargada del refugio, Marisol, le explicó rápidamente sus tareas: limpiar jaulas, dar de comer a los animales y ayudar durante los paseos.",
          "Mientras recorría las jaulas, Emilia notó a un perro mediano de color café que se escondía en la esquina de su jaula, temblando cada vez que alguien se acercaba. Marisol le explicó que el perro, llamado Café, había llegado hace meses después de sufrir maltrato en su hogar anterior, y que nadie quería adoptarlo por lo asustado que se mostraba siempre.",
          "Emilia sintió una conexión inmediata con Café, quizás porque ella también se sentía nerviosa frecuentemente en situaciones nuevas. Le pidió permiso a Marisol para intentar acercarse al perro con calma, sin forzarlo a nada, y Marisol aceptó, aunque le advirtió que podría tomar mucho tiempo ganarse su confianza.",
          "Durante las primeras semanas, Emilia se sentaba simplemente cerca de la jaula de Café, sin intentar tocarlo, hablándole en voz baja mientras leía un libro o comía su almuerzo. Al principio, el perro se mantenía alejado, pero poco a poco empezó a acercarse un poco más cada día.",
          "Un mes después, Café finalmente se acercó lo suficiente para que Emilia pudiera acariciarlo suavemente detrás de las orejas. Fue un momento muy emotivo para ella, ya que sentía que había logrado algo importante después de tanta paciencia y dedicación constante.",
          "Marisol notó el progreso y le sugirió a Emilia que empezara a sacar a Café a caminar por el patio del refugio, siempre con mucho cuidado. Poco a poco, el perro comenzó a mover la cola cuando veía llegar a Emilia, algo que nunca había hecho con ningún otro voluntario.",
          "Emilia empezó a preocuparse por el futuro de Café. Aunque él confiaba en ella, seguía teniendo miedo de la mayoría de las personas nuevas, y Emilia temía que nunca encontrara una familia que quisiera adoptarlo y tuviera la paciencia necesaria para cuidarlo bien.",
          "Un día, Emilia les contó a sus padres sobre Café durante la cena, explicándoles con detalle todo el progreso que habían logrado juntos. Su madre notó cuánto le brillaban los ojos a Emilia al hablar del perro y le preguntó si le gustaría que ellos consideraran adoptarlo.",
          "Emilia se emocionó tanto con la idea que casi no pudo hablar durante un momento. Sus padres decidieron visitar el refugio ese fin de semana para conocer a Café en persona y hablar con Marisol sobre lo que implicaría cuidar a un perro con ese tipo de necesidades especiales.",
          "Después de la visita, y tras varias conversaciones sobre la responsabilidad que representaba, los padres de Emilia decidieron adoptar a Café oficialmente. Marisol les explicó los cuidados especiales que necesitaría durante los primeros meses en su nuevo hogar.",
          "El día que Café llegó a su nueva casa, se escondió debajo de una mesa durante horas, pero esa noche, cuando Emilia se sentó cerca sin presionarlo, el perro finalmente salió y se acostó a su lado. Emilia supo en ese momento que había encontrado no solo un compañero para Café, sino también una amistad que duraría toda la vida."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "Why did Emilia choose to volunteer at an animal shelter?",
        "options": [
          "She wanted to become a veterinarian",
          "She thought it would be easier than working with people because she was shy",
          "Her best friend convinced her",
          "She needed money"
        ],
        "correctIndex": 1,
        "explanation": "The text says she was shy and \"pensando que sería más fácil trabajar con animales que con personas.\""
      },
      {
        "type": "multiple-choice",
        "question": "Why had no one adopted the dog named Café?",
        "options": [
          "He was too old",
          "He had suffered mistreatment before and seemed very frightened",
          "He was too aggressive with other dogs",
          "The shelter wouldn't allow it"
        ],
        "correctIndex": 1,
        "explanation": "Marisol explains Café \"había sufrido maltrato en su hogar anterior\" and no one wanted him because he was always so scared."
      },
      {
        "type": "multiple-choice",
        "question": "What happened when Café arrived at his new home?",
        "options": [
          "He immediately felt comfortable",
          "He hid under a table for hours, then came out to lie beside Emilia that night",
          "He ran away",
          "He refused to eat for a week"
        ],
        "correctIndex": 1,
        "explanation": "The text says Café \"se escondió debajo de una mesa durante horas,\" but that night he came out and lay down beside Emilia."
      }
    ]
  },
  {
    "slug": "la-averia-en-la-carretera",
    "level": "B1",
    "number": 80,
    "title": "La avería en la carretera",
    "summary": "Two strangers whose cars break down on the same remote highway end up helping each other and forming an unlikely friendship.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Beatriz manejaba sola por una carretera solitaria del norte de Argentina, regresando de visitar a su tía en un pueblo pequeño, cuando escuchó un ruido extraño en el motor de su auto. Segundos después, el coche empezó a perder velocidad hasta que finalmente se detuvo por completo en medio de la nada.",
          "Sin señal en el teléfono y sin ninguna casa a la vista, Beatriz salió del auto sintiéndose muy nerviosa. El sol comenzaba a bajar, y ella sabía que quedarse ahí de noche, sola en una carretera vacía, no era una buena idea. Decidió esperar a que pasara algún vehículo.",
          "Media hora después, apareció una camioneta vieja conducida por un hombre mayor llamado don Rogelio, quien también parecía tener problemas con su vehículo, ya que se detuvo un poco más adelante con humo saliendo del capó. Ambos se acercaron el uno al otro, sorprendidos de encontrarse en la misma situación.",
          "Don Rogelio le explicó que su camioneta se había recalentado por el calor extremo del día, y que necesitaría esperar a que el motor se enfriara antes de poder continuar. Beatriz, aliviada de no estar completamente sola, le contó sobre el ruido extraño de su propio auto.",
          "Como ninguno de los dos tenía buena señal de teléfono, decidieron esperar juntos mientras el motor de la camioneta se enfriaba. Don Rogelio, un hombre de pocas palabras al principio, poco a poco empezó a contarle a Beatriz sobre su vida en el campo y sobre los años que había pasado trabajando la tierra.",
          "Beatriz, por su parte, le contó que estaba pasando por un momento difícil, ya que recientemente había perdido su trabajo en la ciudad y no sabía qué hacer con su futuro. Don Rogelio la escuchó con atención y le dijo que, a veces, los momentos más difíciles terminan llevándonos a caminos inesperados.",
          "Después de una hora, don Rogelio intentó encender su camioneta de nuevo, y para su alivio, el motor finalmente arrancó. Antes de irse, insistió en revisar el auto de Beatriz, ya que había trabajado como mecánico años atrás, antes de dedicarse completamente al campo.",
          "Al abrir el capó del auto de Beatriz, don Rogelio identificó rápidamente el problema: una manguera del radiador se había desconectado. Con las herramientas que tenía en su camioneta, logró arreglarla temporalmente, lo suficiente para que Beatriz pudiera llegar hasta el próximo pueblo con un taller mecánico.",
          "Agradecida, Beatriz le ofreció dinero a don Rogelio por su ayuda, pero él lo rechazó amablemente, diciendo que en el campo la gente se ayuda sin esperar nada a cambio. En lugar de dinero, le pidió que, si algún día pasaba de nuevo por esa zona, se detuviera a saludarlo en su finca.",
          "Beatriz anotó la dirección de la finca de don Rogelio en su teléfono antes de despedirse, prometiendo que lo visitaría pronto. Condujo con cuidado hasta el próximo pueblo, donde un mecánico confirmó que don Rogelio había hecho un trabajo excelente con los materiales que tenía disponibles.",
          "Un mes después, Beatriz, todavía pensando en su conversación con don Rogelio sobre caminos inesperados, decidió tomar un curso de mecánica automotriz, algo que nunca antes había considerado. También cumplió su promesa y visitó la finca de don Rogelio ese fin de semana.",
          "Con el tiempo, Beatriz y don Rogelio se convirtieron en amigos cercanos, y ella visitaba su finca cada pocos meses. Beatriz solía decir que aquel día de mala suerte en la carretera terminó siendo uno de los más importantes de su vida."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "Why did Beatriz's car stop working?",
        "options": [
          "It ran out of gasoline",
          "A radiator hose had come loose",
          "The battery died",
          "She got a flat tire"
        ],
        "correctIndex": 1,
        "explanation": "Don Rogelio identifies the problem: \"una manguera del radiador se había desconectado.\""
      },
      {
        "type": "multiple-choice",
        "question": "How was don Rogelio able to fix Beatriz's car?",
        "options": [
          "He called a tow truck",
          "He had once worked as a mechanic before farming and used tools from his truck",
          "He used his phone to find instructions",
          "He couldn't fix it and they waited for help"
        ],
        "correctIndex": 1,
        "explanation": "The text explains he \"había trabajado como mecánico años atrás, antes de dedicarse completamente al campo\" and fixed it with tools from his truck."
      },
      {
        "type": "multiple-choice",
        "question": "What did Beatriz decide to do a month after the breakdown?",
        "options": [
          "Move to the countryside permanently",
          "Take a course in automotive mechanics",
          "Buy a new car",
          "Stop driving on highways"
        ],
        "correctIndex": 1,
        "explanation": "The story says she \"decidió tomar un curso de mecánica automotriz, algo que nunca antes había considerado.\""
      }
    ]
  },
  {
    "slug": "las-clases-de-conducir",
    "level": "B1",
    "number": 81,
    "title": "Las clases de conducir",
    "summary": "A teenager learning to drive must navigate her nervous father's constant backseat instructions during their practice sessions.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Camila acababa de cumplir diecisiete años, la edad mínima para obtener el permiso de conducir en su provincia de Argentina. Estaba emocionada por aprender a manejar, pero su padre, Marcelo, se había ofrecido como su instructor principal, algo que pronto se convirtió en un problema para ambos.",
          "Marcelo era, según su propia esposa, \"el copiloto más nervioso del mundo\". Desde el primer día de práctica en el estacionamiento vacío de un supermercado, no dejaba de dar instrucciones constantes: \"¡Frena despacio! ¡Mira el espejo! ¡Cuidado con ese cono!\", incluso cuando Camila conducía a solo diez kilómetros por hora.",
          "Después de la tercera clase, Camila llegó a casa frustrada y le dijo a su madre que ya no quería practicar más con su padre. \"Cada vez que grita, me pongo tan nerviosa que cometo más errores\", explicó. Su madre le prometió que hablaría con Marcelo sobre el tema.",
          "Esa noche, la madre de Camila le explicó a Marcelo que su forma de enseñar estaba causando el efecto contrario al que él quería. En lugar de ayudar a Camila a sentirse segura, sus gritos constantes la hacían sentirse todavía más insegura al volante.",
          "Marcelo se sorprendió al escuchar esto, ya que él pensaba que estaba ayudando a su hija a evitar accidentes. \"Solo quiero que esté segura\", admitió. Su esposa le sugirió que intentara un enfoque diferente: dar menos instrucciones y confiar un poco más en la capacidad de Camila.",
          "Al día siguiente, antes de la práctica, Marcelo le pidió disculpas a Camila por haber sido tan estricto durante las clases anteriores. Le propuso un nuevo sistema: solo hablaría si veía un peligro real, y por lo demás, dejaría que Camila condujera sin interrupciones constantes.",
          "La siguiente práctica fue notablemente diferente. Camila condujo por calles tranquilas del barrio mientras su padre se mantenía callado, apretando los puños solo un poco cuando se ponía nervioso, pero sin decir nada innecesario. Camila notó la diferencia inmediatamente y se sintió mucho más relajada.",
          "Con el paso de las semanas, Camila mejoró rápidamente su manejo. Aprendió a estacionar en paralelo, a manejar en avenidas con más tráfico y hasta a manejar durante una llovizna ligera, algo que antes le daba mucho miedo hacer con su padre gritando instrucciones a cada segundo.",
          "Sin embargo, hubo un momento difícil cuando Camila, distraída por un perro que cruzó la calle, frenó demasiado tarde y estuvo a punto de chocar contra el auto de adelante. Marcelo, a pesar de su promesa, no pudo evitar gritar \"¡Frena!\" en ese momento de verdadero peligro.",
          "Después de ese susto, en lugar de enojarse, padre e hija hablaron con calma sobre lo que había pasado. Camila admitió que se había distraído, y Marcelo reconoció que, en momentos de peligro real, es normal y necesario que un instructor hable con firmeza.",
          "Con esa experiencia, ambos entendieron mejor los límites del nuevo sistema: silencio durante la conducción normal, pero comunicación clara y rápida cuando surgiera un peligro verdadero. Esta combinación funcionó mucho mejor para los dos.",
          "El día del examen de conducir, Camila aprobó sin ningún problema. Cuando salió de la oficina de tránsito con su nuevo permiso en la mano, abrazó a su padre y le agradeció por finalmente haber aprendido a confiar en ella detrás del volante."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "What was Camila's main complaint about her father's teaching style?",
        "options": [
          "He never wanted to practice with her",
          "His constant shouted instructions made her more nervous and cause more mistakes",
          "He refused to let her drive at all",
          "He was always late to practice sessions"
        ],
        "correctIndex": 1,
        "explanation": "Camila says \"Cada vez que grita, me pongo tan nerviosa que cometo más errores.\""
      },
      {
        "type": "multiple-choice",
        "question": "What new system did Marcelo propose after apologizing?",
        "options": [
          "He would only speak if he saw real danger, otherwise stay quiet",
          "He would stop teaching her entirely",
          "He would hire a professional instructor instead",
          "He would only let her practice at night"
        ],
        "correctIndex": 0,
        "explanation": "Marcelo proposes he \"solo hablaría si veía un peligro real, y por lo demás, dejaría que Camila condujera sin interrupciones.\""
      },
      {
        "type": "multiple-choice",
        "question": "What happened when a dog crossed the street during practice?",
        "options": [
          "Camila hit the dog",
          "Camila braked late and almost hit the car ahead, so Marcelo shouted despite his promise",
          "Marcelo took over the wheel",
          "They stopped practicing driving altogether"
        ],
        "correctIndex": 1,
        "explanation": "Camila \"frenó demasiado tarde y estuvo a punto de chocar,\" and Marcelo \"no pudo evitar gritar '¡Frena!'\" in that real danger."
      }
    ]
  },
  {
    "slug": "el-teatro-comunitario",
    "level": "B1",
    "number": 82,
    "title": "El teatro comunitario",
    "summary": "A community theater group scrambles to save their play after the lead actor drops out just days before opening night.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "El grupo de teatro comunitario de un pequeño pueblo en Costa Rica llevaba dos meses preparando una obra sobre la historia local, escrita especialmente para celebrar el aniversario del pueblo. Todos los actores eran vecinos voluntarios, desde estudiantes hasta jubilados, y ensayaban tres veces por semana en el salón municipal.",
          "Daniel, un profesor de historia de cuarenta años, tenía el papel principal: un fundador ficticio del pueblo que enfrentaba grandes desafíos para construir una comunidad próspera. Había memorizado todas sus líneas y practicaba sus escenas incluso en su casa, frente al espejo del baño.",
          "Cinco días antes del estreno, Daniel recibió una llamada urgente de su hermana: su padre había sufrido una caída y necesitaba que Daniel viajara inmediatamente a otra ciudad para ayudar a cuidarlo durante su recuperación. Sin dudarlo, Daniel empacó una maleta y se fue esa misma tarde.",
          "La directora de la obra, una mujer enérgica llamada Rocío, se enteró de la noticia esa noche y sintió que el proyecto entero se derrumbaba. Sin un actor principal y con solo cinco días para el estreno, parecía imposible encontrar una solución a tiempo.",
          "Rocío reunió al elenco al día siguiente para explicar la situación. Algunos actores sugirieron cancelar la función, pero otros, especialmente los más jóvenes, insistieron en que debían intentar encontrar una solución antes de rendirse por completo.",
          "Valeria, la hija adolescente de Rocío, quien ayudaba con el vestuario de la obra, se ofreció a intentar el papel principal. Aunque nunca había actuado antes en un escenario grande, había memorizado accidentalmente muchas de las líneas de Daniel simplemente por escucharlas tantas veces durante los ensayos.",
          "Al principio, Rocío dudó de la idea, preocupada porque el papel había sido escrito para un hombre adulto. Sin embargo, después de pensarlo, decidió que podían hacer pequeños ajustes al guion para que el personaje funcionara igual de bien interpretado por una joven.",
          "Durante los siguientes cuatro días, todo el elenco trabajó horas extra para ayudar a Valeria a prepararse. Practicaron todas las tardes después de la escuela y hasta los fines de semana, ajustando algunos diálogos y asegurándose de que Valeria se sintiera cómoda con los movimientos en el escenario.",
          "Valeria estaba nerviosa, especialmente porque sabía que mucha gente del pueblo, incluidos sus propios compañeros de escuela, asistiría al estreno. Rocío le recordó que lo más importante no era ser perfecta, sino contar la historia con sinceridad y esfuerzo genuino.",
          "La noche del estreno llegó rápidamente. El salón municipal estaba completamente lleno, con casi todos los vecinos del pueblo sentados esperando ansiosamente el inicio de la función. Valeria, detrás del telón, sentía que las piernas le temblaban, pero respiró profundo y recordó todo lo que había practicado.",
          "La obra comenzó, y para sorpresa de todos, incluida ella misma, Valeria interpretó su papel con una energía y una emoción genuinas que conmovieron al público. Al final de la función, el pueblo entero se puso de pie para aplaudir, y varios vecinos tenían lágrimas en los ojos.",
          "Esa misma noche, Daniel llamó a Rocío desde el hospital donde estaba su padre para preguntar cómo había salido todo. Cuando Rocío le contó sobre la actuación sorprendente de Valeria, Daniel se rió y dijo que quizás la obra había encontrado a su verdadera protagonista por accidente."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "Why did Daniel have to leave right before the play's opening?",
        "options": [
          "He got a new job in another city",
          "His father fell and he needed to help care for him",
          "He lost his voice",
          "He decided he no longer wanted to act"
        ],
        "correctIndex": 1,
        "explanation": "Daniel's sister calls saying \"su padre había sufrido una caída y necesitaba que Daniel viajara inmediatamente.\""
      },
      {
        "type": "multiple-choice",
        "question": "How did Valeria already know many of the lead role's lines?",
        "options": [
          "She had read the script cover to cover on her own",
          "She had accidentally memorized them from hearing them so often during rehearsals",
          "Daniel taught them to her directly",
          "She had played the role before in a different town"
        ],
        "correctIndex": 1,
        "explanation": "The text says she \"había memorizado accidentalmente muchas de las líneas de Daniel simplemente por escucharlas tantas veces.\""
      },
      {
        "type": "multiple-choice",
        "question": "How did the audience react at the end of the performance?",
        "options": [
          "They left quietly, unimpressed",
          "The whole town stood up applauding, some with tears in their eyes",
          "They demanded a refund",
          "They asked for Daniel to be brought back"
        ],
        "correctIndex": 1,
        "explanation": "The story says \"el pueblo entero se puso de pie para aplaudir, y varios vecinos tenían lágrimas en los ojos.\""
      }
    ]
  },
  {
    "slug": "la-recuperacion-de-marta",
    "level": "B1",
    "number": 83,
    "title": "La recuperación de Marta",
    "summary": "A young swimmer recovering from a shoulder injury must decide whether to rush back for a big competition or accept a slower path.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Marta tenía quince años y era una de las nadadoras más prometedoras de su club deportivo en Sevilla. Llevaba años entrenando cada mañana antes de ir a la escuela, con la esperanza de clasificar algún día para el campeonato regional de natación.",
          "Dos meses antes del campeonato más importante de su carrera, Marta sintió un dolor agudo en el hombro durante un entrenamiento. El médico del equipo le explicó que tenía una pequeña lesión en el hombro, probablemente causada por el uso excesivo, y que necesitaría descansar al menos seis semanas para recuperarse completamente.",
          "La noticia fue devastadora para Marta. El campeonato regional era justo cinco semanas después de la fecha límite de recuperación, y ella temía que no tendría suficiente tiempo para volver a entrenar al nivel necesario para competir bien. Pensó en ignorar el consejo médico y seguir entrenando de todos modos.",
          "Su entrenador, Ignacio, notó la frustración de Marta durante la siguiente semana. \"Sé que quieres competir\", le dijo, \"pero si sigues nadando con esa lesión, podrías empeorarla tanto que no puedas competir nunca más de la misma manera\". Sus palabras asustaron a Marta, pero también la hicieron reflexionar seriamente.",
          "Marta decidió seguir el consejo médico, aunque le resultó muy difícil quedarse fuera del agua durante las primeras semanas. Veía a sus compañeros de equipo entrenar todos los días mientras ella solo podía hacer ejercicios suaves de rehabilitación con una fisioterapeuta llamada Susana.",
          "Susana le explicó a Marta que la paciencia era la parte más difícil de cualquier recuperación, pero también la más importante. \"Es mejor que llegues al campeonato con un ochenta por ciento de tu fuerza normal que arriesgarte a no llegar en absoluto\", le dijo durante una de sus sesiones de terapia.",
          "Durante las semanas de recuperación, Marta encontró formas alternativas de mantenerse involucrada con el equipo. Ayudaba a cronometrar los entrenamientos de sus compañeros y estudiaba videos de sus propias competencias anteriores para analizar su técnica sin forzar el hombro lesionado.",
          "Después de seis semanas, el médico finalmente le dio permiso a Marta para volver al agua, aunque le advirtió que debía aumentar la intensidad de sus entrenamientos poco a poco, sin apurarse demasiado rápido, para evitar una nueva lesión.",
          "Con solo cinco semanas antes del campeonato, Ignacio ajustó el plan de entrenamiento de Marta, enfocándose en recuperar la técnica y la resistencia sin sobrecargar el hombro. Algunos días eran frustrantes para Marta, porque sentía que no avanzaba tan rápido como quería.",
          "Una semana antes de la competencia, Marta nadó una prueba de tiempo y descubrió que, aunque su tiempo no era su mejor marca personal, estaba mucho más cerca de su nivel normal de lo que había esperado. Esto le dio confianza para el campeonato.",
          "El día del campeonato regional, Marta compitió en su prueba favorita, los doscientos metros de estilo libre. Aunque no ganó la medalla de oro, terminó en tercer lugar, un resultado que la llenó de orgullo considerando todo lo que había pasado en los últimos dos meses.",
          "Después de la carrera, Ignacio le dijo que estaba más orgulloso de cómo había manejado su recuperación que del resultado de la carrera misma. Marta entendió que había aprendido algo más valioso que ganar una medalla: la importancia de escuchar a su cuerpo y ser paciente con el proceso de sanación."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "What did the doctor say about Marta's shoulder injury?",
        "options": [
          "It required immediate surgery",
          "It was nothing serious and she could keep training normally",
          "She needed at least six weeks of rest to recover fully",
          "It would never heal completely"
        ],
        "correctIndex": 2,
        "explanation": "The doctor explains she would \"necesitaría descansar al menos seis semanas para recuperarse completamente.\""
      },
      {
        "type": "multiple-choice",
        "question": "What did the physical therapist Susana tell Marta about patience?",
        "options": [
          "It didn't matter for recovery",
          "It was better to arrive at the championship at 80% strength than risk not competing at all",
          "She should quit swimming permanently",
          "She should train twice as hard to make up for lost time"
        ],
        "correctIndex": 1,
        "explanation": "Susana says, \"Es mejor que llegues al campeonato con un ochenta por ciento de tu fuerza normal que arriesgarte a no llegar en absoluto.\""
      },
      {
        "type": "multiple-choice",
        "question": "How did Marta do at the regional championship?",
        "options": [
          "She won first place",
          "She finished third and felt proud given her recovery",
          "She didn't finish the race",
          "She decided not to compete after all"
        ],
        "correctIndex": 1,
        "explanation": "The text says she \"terminó en tercer lugar, un resultado que la llenó de orgullo.\""
      }
    ]
  },
  {
    "slug": "el-trabajo-en-equipo",
    "level": "B1",
    "number": 84,
    "title": "El trabajo en equipo",
    "summary": "A school group project nearly falls apart due to unequal effort, until the students find a fairer way to collaborate.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "En la clase de ciencias sociales de un colegio en Quito, la profesora Alejandra dividió a los estudiantes en grupos de cuatro para realizar un proyecto sobre el cambio climático. El grupo de Pablo, Nayeli, Ismael y Fernanda tenía tres semanas para preparar una presentación completa con carteles y un video corto.",
          "Desde el principio, las cosas no salieron bien. Nayeli, muy organizada, propuso dividir las tareas equitativamente entre los cuatro integrantes, pero Ismael, quien prefería jugar videojuegos por las tardes, no cumplió con la fecha límite para entregar su parte de la investigación.",
          "Una semana después, Fernanda notó que Pablo tampoco había avanzado mucho con su sección sobre las soluciones al cambio climático. Cuando le preguntó al respecto, Pablo admitió que pensaba que Nayeli, siendo tan organizada, terminaría haciendo todo el trabajo de todos modos.",
          "Nayeli, frustrada al escuchar esto, explotó durante la siguiente reunión del grupo. \"No es justo que yo trabaje el doble mientras ustedes no hacen nada\", dijo, casi al borde de las lágrimas. Fernanda intentó calmar la situación, pero Ismael respondió a la defensiva, diciendo que también tenía otras responsabilidades.",
          "La discusión se volvió tan tensa que decidieron hablar con la profesora Alejandra sobre el problema. Ella escuchó con atención las quejas de cada estudiante y les preguntó si habían intentado resolver el conflicto entre ellos antes de buscar su ayuda directamente.",
          "\"Espero que aprendan a comunicarse mejor como equipo\", les dijo la profesora. \"En el mundo real, ustedes tendrán que trabajar con personas que no siempre hacen su parte, y necesitan aprender a manejarlo sin simplemente enojarse\". Les dio un día más para intentar resolver el problema por su cuenta.",
          "Esa tarde, los cuatro estudiantes se reunieron en la biblioteca para hablar con más calma. Fernanda propuso que, en lugar de dividir el trabajo por temas, cada uno debía informar diariamente sobre su progreso en un chat grupal, para que nadie pudiera atrasarse sin que los demás lo notaran.",
          "Ismael admitió que había subestimado cuánto tiempo necesitaría el proyecto y que se había distraído demasiado con otras actividades. Se disculpó con Nayeli por haberla dejado con tanto trabajo y prometió comprometerse más seriamente durante la semana restante.",
          "Pablo también reconoció su error y aceptó que había actuado injustamente al esperar que Nayeli hiciera todo el trabajo. Propuso que él se encargara de crear el video final, una tarea que realmente disfrutaba y para la que tenía experiencia editando videos en su teléfono.",
          "Con las nuevas reglas del grupo, cada estudiante comenzó a cumplir con sus responsabilidades de manera más consistente. Nayeli notó con alivio que ya no tenía que revisar constantemente el trabajo de los demás, porque todos reportaban su progreso voluntariamente cada día.",
          "Durante la última semana, el grupo trabajó de manera mucho más armoniosa. Ismael terminó su investigación a tiempo, Pablo produjo un video con imágenes impresionantes sobre el derretimiento de los glaciares, y Fernanda diseñó carteles coloridos y bien organizados.",
          "El día de la presentación, el grupo obtuvo una de las mejores calificaciones de la clase. Más importante aún, los cuatro estudiantes se dieron cuenta de que, aunque tuvieron un comienzo difícil, habían aprendido una lección valiosa sobre comunicación y responsabilidad compartida que les serviría mucho más allá de ese proyecto escolar."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "Why did Nayeli become frustrated with her group?",
        "options": [
          "They wanted to work more than her",
          "Ismael and Pablo weren't completing their parts, leaving her to do everything",
          "They finished the project without her",
          "They kept changing the topic"
        ],
        "correctIndex": 1,
        "explanation": "Nayeli says \"No es justo que yo trabaje el doble mientras ustedes no hacen nada.\""
      },
      {
        "type": "multiple-choice",
        "question": "What solution did Fernanda propose to fix the group's problem?",
        "options": [
          "Report progress daily in a group chat so no one falls behind unnoticed",
          "Split into two separate projects",
          "Ask the teacher to assign new groups",
          "Do all the work over one weekend"
        ],
        "correctIndex": 0,
        "explanation": "Fernanda proposed that \"cada uno debía informar diariamente sobre su progreso en un chat grupal.\""
      },
      {
        "type": "multiple-choice",
        "question": "What task did Pablo take responsibility for after apologizing?",
        "options": [
          "Writing the research report",
          "Creating the final video, since he enjoyed editing",
          "Designing the posters",
          "Presenting alone to the class"
        ],
        "correctIndex": 1,
        "explanation": "Pablo proposed \"que él se encargara de crear el video final, una tarea que realmente disfrutaba.\""
      }
    ]
  },
  {
    "slug": "la-reunion-familiar",
    "level": "B1",
    "number": 85,
    "title": "La reunión familiar",
    "summary": "A family reunites after many years apart, and old tensions between two brothers threaten to resurface before the gathering is over.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Después de doce años sin verse en persona, la familia Rivas se reunió finalmente en la casa de la abuela Consuelo, en un pueblo cerca de Cuenca, Ecuador. La ocasión era el cumpleaños número ochenta de la abuela, y todos sus hijos, nietos y bisnietos viajaron desde diferentes países para celebrar juntos.",
          "Sofía, de catorce años, apenas recordaba a algunos de sus tíos, ya que su familia vivía en Canadá desde que ella era muy pequeña. Estaba emocionada pero también nerviosa por conocer mejor a parientes que solo había visto en fotografías y videollamadas ocasionales durante los años anteriores.",
          "Sin embargo, no todos en la familia estaban tan emocionados por la reunión. Sofía notó una tensión extraña entre su padre, Ernesto, y su tío Gustavo, quienes casi no se hablaban directamente y evitaban quedarse solos en la misma habitación durante los primeros días.",
          "Cuando Sofía le preguntó a su madre sobre la situación, ella le explicó que Ernesto y Gustavo habían tenido una fuerte discusión hace más de una década, relacionada con dinero y con decisiones sobre el cuidado de su padre, el abuelo de Sofía, quien había fallecido varios años atrás.",
          "\"Espero que esta reunión los ayude a resolver las cosas\", le dijo su madre, \"pero no puedo prometerte que será fácil\". Sofía se sintió preocupada de que la celebración del cumpleaños de su abuela pudiera arruinarse por un conflicto entre sus padres.",
          "Durante los primeros dos días, la familia disfrutó de comidas tradicionales, juegos y largas conversaciones sobre recuerdos de infancia. Sin embargo, la tensión entre Ernesto y Gustavo era evidente para todos, especialmente cuando ambos evitaban sentarse cerca el uno del otro durante las cenas familiares.",
          "La abuela Consuelo, a pesar de su edad avanzada, notó rápidamente lo que estaba pasando entre sus dos hijos. La noche antes de su cumpleaños oficial, pidió hablar con Ernesto y Gustavo a solas en la cocina, mientras el resto de la familia jugaba cartas en la sala.",
          "Nadie supo exactamente qué se dijeron en esa conversación privada, pero cuando los tres salieron de la cocina casi una hora después, Ernesto y Gustavo tenían los ojos rojos, como si hubieran estado llorando. Sofía notó que, por primera vez en días, sus padres caminaban juntos y hablaban con calma.",
          "Al día siguiente, durante la fiesta de cumpleaños de la abuela, Gustavo se levantó para dar un pequeño discurso. Con voz temblorosa, agradeció a su hermano Ernesto por haber cuidado de su padre durante sus últimos años, algo que él mismo no había podido hacer por estar viviendo lejos.",
          "Ernesto, sorprendido y emocionado por las palabras de su hermano, se levantó también y admitió que él nunca había explicado completamente lo difícil que había sido esa época, y que probablemente había guardado resentimiento sin darle a Gustavo la oportunidad de entender la situación completa.",
          "Los dos hermanos se abrazaron frente a toda la familia, un momento que hizo llorar a varios de los presentes, incluida la abuela Consuelo, quien dijo sentirse la mujer más feliz del mundo al ver a sus hijos reconciliados en su cumpleaños número ochenta.",
          "Esa noche, mientras la familia bailaba y celebraba hasta tarde, Sofía observó a su padre y a su tío riendo juntos por primera vez en toda la reunión. Entendió entonces que, a veces, el tiempo y una conversación honesta pueden sanar heridas que parecían imposibles de resolver."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "Why was there tension between Ernesto and Gustavo?",
        "options": [
          "They disagreed about where to hold the reunion",
          "They had a serious argument years ago about money and caring for their late father",
          "They never got along as children",
          "Gustavo missed the grandmother's birthday before"
        ],
        "correctIndex": 1,
        "explanation": "The mother explains they \"habían tenido una fuerte discusión hace más de una década, relacionada con dinero y con decisiones sobre el cuidado de su padre.\""
      },
      {
        "type": "multiple-choice",
        "question": "Who arranged the private conversation between the two brothers?",
        "options": [
          "Sofía",
          "Their mother",
          "Grandmother Consuelo",
          "A family friend"
        ],
        "correctIndex": 2,
        "explanation": "The text says \"La abuela Consuelo... pidió hablar con Ernesto y Gustavo a solas en la cocina.\""
      },
      {
        "type": "multiple-choice",
        "question": "What did Gustavo say in his speech at the birthday party?",
        "options": [
          "He criticized Ernesto for not visiting enough",
          "He thanked Ernesto for caring for their father in his last years",
          "He announced he was moving back permanently",
          "He asked for money"
        ],
        "correctIndex": 1,
        "explanation": "Gustavo \"agradeció a su hermano Ernesto por haber cuidado de su padre durante sus últimos años.\""
      }
    ]
  },
  {
    "slug": "el-abuelo-y-el-telefono",
    "level": "B1",
    "number": 86,
    "title": "El abuelo y el teléfono",
    "summary": "A teenager patiently teaches her tech-resistant grandfather how to use a smartphone so he can video call his grandchildren abroad.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "El abuelo Ramón tenía setenta y cinco años y vivía solo en una casa pequeña en las afueras de Asunción, Paraguay, desde que su esposa había fallecido dos años atrás. Nunca había usado un teléfono inteligente, y prefería su viejo teléfono de botones, que solo servía para hacer llamadas y mandar mensajes simples.",
          "Su nieta Camila, de trece años, vivía con sus padres en España desde hacía un año, debido al trabajo de su padre. Extrañaba mucho a su abuelo y quería poder hacer videollamadas con él regularmente, pero eso era imposible con su teléfono antiguo.",
          "Durante las vacaciones de verano, Camila viajó a Paraguay para visitar a su abuelo durante tres semanas. Al llegar, notó que Ramón se sentía muy solo la mayor parte del tiempo, ya que sus otros hijos y nietos vivían lejos y solo hablaban con él por teléfono ocasionalmente.",
          "Camila decidió que quería enseñarle a su abuelo a usar un teléfono inteligente, para que pudiera hacer videollamadas y ver a toda su familia más seguido, sin importar dónde estuvieran. Le propuso la idea a Ramón, pero él respondió que era demasiado viejo para aprender esas cosas nuevas.",
          "\"Espero que lo intentes, aunque sea una vez\", le dijo Camila con paciencia. \"Si no te gusta, no tienes que seguir usándolo\". Después de pensarlo unos días, Ramón finalmente aceptó, aunque dejó claro que no esperaba entender mucho.",
          "Camila compró un teléfono inteligente sencillo con la ayuda de sus padres, quienes enviaron dinero especialmente para ese propósito. Durante los siguientes días, empezó a enseñarle a su abuelo paso a paso, comenzando con cosas simples como desbloquear la pantalla y encontrar los íconos de las aplicaciones.",
          "Al principio, Ramón se frustraba fácilmente. Olvidaba constantemente cómo abrir las aplicaciones y a veces presionaba botones equivocados sin darse cuenta. Un día, incluso llegó a decir que prefería regresar a su teléfono viejo, ya que sentía que nunca aprendería a usar el nuevo correctamente.",
          "Camila, sin embargo, no se rindió. Le explicó que ella también había tenido que aprender cosas nuevas y difíciles, como el idioma de su nueva escuela en España, y que al principio todo parece imposible hasta que uno practica lo suficiente. Sus palabras animaron a Ramón a seguir intentándolo.",
          "Practicaron todos los días durante las tres semanas de la visita de Camila. Ella le enseñó cómo hacer videollamadas, cómo tomar fotografías y hasta cómo mandar mensajes con emojis, algo que a Ramón le pareció particularmente divertido una vez que entendió cómo funcionaba.",
          "El día antes de que Camila regresara a España, hicieron una videollamada de prueba con los padres de Camila. Cuando Ramón vio la cara de su hija en la pantalla del teléfono, moviéndose en tiempo real, se emocionó tanto que casi se le caen las lágrimas frente a Camila.",
          "Después de que Camila regresó a España, ambos mantuvieron su promesa de hacer videollamadas cada domingo por la tarde. Ramón, con el tiempo, se volvió mucho más cómodo con el teléfono y hasta empezó a mandarle fotografías de su jardín y de la comida que cocinaba cada semana.",
          "Un año después, durante otra visita de Camila, Ramón le mostró orgulloso que había aprendido a usar varias aplicaciones nuevas por su cuenta, incluyendo una para jugar juegos simples de palabras. Le agradeció a su nieta por haberle abierto una nueva forma de sentirse cerca de su familia, sin importar la distancia."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "Why did Camila want to teach her grandfather to use a smartphone?",
        "options": [
          "So he could play video games",
          "So he could video call his family who lived far away, like Camila in Spain",
          "Because he asked her to teach him",
          "So he could use it for work"
        ],
        "correctIndex": 1,
        "explanation": "Camila wanted him \"que pudiera hacer videollamadas y ver a toda su familia más seguido, sin importar dónde estuvieran.\""
      },
      {
        "type": "multiple-choice",
        "question": "What almost made Ramón give up on learning the new phone?",
        "options": [
          "He broke the phone",
          "He kept forgetting how to open apps and pressed wrong buttons, feeling frustrated",
          "His eyesight was too poor",
          "Camila stopped helping him"
        ],
        "correctIndex": 1,
        "explanation": "The text says \"Olvidaba constantemente cómo abrir las aplicaciones\" and he said he preferred his old phone."
      },
      {
        "type": "multiple-choice",
        "question": "What did Ramón and Camila agree to do every week after she returned to Spain?",
        "options": [
          "Send letters by mail",
          "Have a video call every Sunday afternoon",
          "Meet in person",
          "Call only on birthdays"
        ],
        "correctIndex": 1,
        "explanation": "The story says they \"mantuvieron su promesa de hacer videollamadas cada domingo por la tarde.\""
      }
    ]
  },
  {
    "slug": "el-periodico-escolar",
    "level": "B1",
    "number": 87,
    "title": "El periódico escolar",
    "summary": "A student journalist investigates a rumor spreading through school and discovers the harmless truth behind it for the newspaper's biggest story yet.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Camilo era el editor jefe del periódico escolar de su instituto en Santiago, Chile, un pequeño boletín mensual llamado \"La Voz Estudiantil\" que la mayoría de los estudiantes leía distraídamente entre clases. Su sueño era publicar alguna vez una historia que realmente le importara a todo el colegio.",
          "Un lunes, un rumor comenzó a circular rápidamente por los pasillos: se decía que el director del colegio planeaba cancelar el viaje de graduación de los estudiantes de último año debido a problemas de presupuesto. Los estudiantes de cuarto año estaban indignados y algunos incluso hablaban de organizar una protesta.",
          "Camilo, junto con su compañera de periódico, Antonella, decidió investigar si el rumor era realmente cierto antes de que la situación se saliera de control. \"No podemos simplemente repetir lo que la gente dice\", explicó Antonella. \"Como periodistas, necesitamos verificar los hechos primero\".",
          "Los dos estudiantes solicitaron una entrevista con el director del colegio, el señor Fuentes, quien aceptó reunirse con ellos esa misma semana. Antes de la entrevista, Camilo y Antonella prepararon una lista cuidadosa de preguntas específicas sobre el presupuesto y el viaje de graduación.",
          "Durante la entrevista, el señor Fuentes se mostró sorprendido por el rumor. Explicó que, en realidad, el colegio nunca había considerado cancelar el viaje completamente. Lo que sí era cierto era que el costo del viaje había aumentado este año, y la administración estaba buscando maneras de reducir esos gastos adicionales.",
          "El director les mostró documentos que confirmaban que se estaban considerando cambios en el itinerario, como reducir el viaje de cinco días a cuatro, o buscar un hotel más económico, pero que cancelar la tradición completamente nunca había sido parte del plan real.",
          "Camilo y Antonella se dieron cuenta de que el rumor probablemente había comenzado después de que un estudiante escuchara una conversación parcial entre profesores sobre los ajustes de presupuesto, y luego había exagerado la información al contársela a sus amigos.",
          "Antes de publicar la historia, Antonella sugirió que también entrevistaran a algunos estudiantes de cuarto año para entender mejor sus preocupaciones y expectativas sobre el viaje. Esto ayudaría a que el artículo mostrara todas las perspectivas del tema, no solo la del director.",
          "Escribieron el artículo cuidadosamente, explicando la verdad detrás del rumor, incluyendo citas directas del señor Fuentes y de varios estudiantes preocupados. Camilo se aseguró de que el tono del artículo fuera claro y calmado, sin exagerar la situación como lo había hecho el rumor original.",
          "Cuando el periódico se publicó esa semana, con el titular \"El viaje de graduación no será cancelado: la verdad detrás del rumor\", los estudiantes de cuarto año se sintieron mucho más tranquilos. Muchos comentaron que apreciaban tener información clara en lugar de rumores confusos.",
          "El señor Fuentes también felicitó a Camilo y Antonella por su trabajo periodístico responsable, mencionando que su artículo había ayudado a calmar una situación que podría haberse vuelto mucho más problemática si el rumor hubiera seguido creciendo sin control.",
          "Esa edición se convirtió en la más leída en la historia de \"La Voz Estudiantil\", y Camilo finalmente sintió que había logrado su sueño de escribir algo que realmente le importaba a todo el colegio. Antonella y él decidieron que, a partir de ese momento, siempre verificarían los hechos antes de publicar cualquier historia importante."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "What was the rumor spreading through the school?",
        "options": [
          "That the school was closing early for summer",
          "That the principal planned to cancel the senior graduation trip due to budget problems",
          "That a new principal was being hired",
          "That final exams were being cancelled"
        ],
        "correctIndex": 1,
        "explanation": "The rumor was \"que el director del colegio planeaba cancelar el viaje de graduación de los estudiantes de último año debido a problemas de presupuesto.\""
      },
      {
        "type": "multiple-choice",
        "question": "What was actually true, according to the principal?",
        "options": [
          "The trip was completely cancelled",
          "The trip's cost had increased and the school was considering changes like a shorter trip, not cancellation",
          "The rumor was entirely made up with no basis",
          "The trip had already happened early"
        ],
        "correctIndex": 1,
        "explanation": "The principal explains \"el costo del viaje había aumentado... la administración estaba buscando maneras de reducir esos gastos,\" but cancellation was never the plan."
      },
      {
        "type": "multiple-choice",
        "question": "What was the headline of Camilo and Antonella's published article?",
        "options": [
          "\"The Principal Resigns\"",
          "\"El viaje de graduación no será cancelado: la verdad detrás del rumor\"",
          "\"Budget Cuts Hit Our School\"",
          "\"Students Protest Graduation Trip\""
        ],
        "correctIndex": 1,
        "explanation": "The article's headline was \"El viaje de graduación no será cancelado: la verdad detrás del rumor.\""
      }
    ]
  },
  {
    "slug": "el-jardin-comunitario",
    "level": "B1",
    "number": 88,
    "title": "El jardín comunitario",
    "summary": "Neighbors unite to save a beloved community garden from being paved over for a parking lot, organizing to make their case to the city.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "En el barrio de La Candelaria, en el centro de Bogotá, existía desde hacía quince años un jardín comunitario donde los vecinos cultivaban vegetales, flores y hierbas juntos. El jardín era especialmente importante para las familias que vivían en apartamentos pequeños sin espacio propio para plantar nada.",
          "Un día, apareció un aviso oficial pegado en la entrada del jardín: la alcaldía local había aprobado un proyecto para convertir el terreno en un estacionamiento público, ya que consideraban que el barrio necesitaba más espacios para vehículos. Los vecinos se enteraron con mucha sorpresa y tristeza.",
          "Isabela, una estudiante universitaria de veinte años que había ayudado a cuidar el jardín desde niña junto a su abuela, se sintió profundamente afectada por la noticia. Su abuela, doña Marlene, había sido una de las fundadoras originales del jardín y siempre decía que ese pequeño espacio verde le recordaba a su pueblo natal.",
          "Isabela decidió que no permitiría que el jardín desapareciera sin luchar primero. Organizó una reunión urgente con los demás vecinos que participaban en el cuidado del jardín, para discutir qué podían hacer antes de que comenzara la construcción del estacionamiento.",
          "Durante la reunión, algunos vecinos se mostraron pesimistas, diciendo que era imposible cambiar las decisiones de la alcaldía una vez aprobadas. Sin embargo, don Rafael, un vecino mayor que también ayudaba en el jardín, sugirió que organizaran una petición firmada por todos los residentes del barrio.",
          "Isabela, con conocimientos de redes sociales gracias a sus estudios universitarios, propuso además crear una página en internet para explicar la importancia del jardín y recolectar firmas digitales de personas de todo Bogotá, no solo del barrio inmediato.",
          "Durante las siguientes dos semanas, Isabela y varios vecinos recorrieron las calles cercanas explicando la situación y pidiendo firmas. También tomaron fotografías del jardín en su mejor momento, mostrando las flores coloridas y los vegetales frescos que producían cada temporada.",
          "La petición en internet se hizo viral rápidamente después de que un periodista local escribiera un artículo sobre la historia del jardín y su importancia para la comunidad. En pocos días, la petición reunió más de cinco mil firmas de personas preocupadas por la posible pérdida del espacio verde.",
          "Con la petición y el apoyo mediático, Isabela y un pequeño grupo de vecinos solicitaron una reunión oficial con la alcaldesa local para presentar su caso directamente. Prepararon cuidadosamente una presentación explicando los beneficios ambientales y sociales del jardín para la comunidad.",
          "Durante la reunión, doña Marlene, a pesar de sus nervios, decidió hablar personalmente sobre lo que el jardín significaba para ella y para muchas otras personas mayores del barrio que ya no tenían la fuerza para tener sus propios terrenos, pero que encontraban alegría cuidando plantas junto a sus vecinos.",
          "La alcaldesa, conmovida por la presentación y sorprendida por la cantidad de apoyo público, prometió reconsiderar el proyecto. Una semana después, anunció oficialmente que el estacionamiento se construiría en otro terreno cercano que estaba desocupado, permitiendo que el jardín comunitario permaneciera intacto.",
          "Cuando la noticia llegó al barrio, los vecinos organizaron una pequeña celebración en el jardín, con música y comida compartida entre todos. Doña Marlene, con lágrimas de felicidad, le dijo a Isabela que estaba muy orgullosa de que su nieta hubiera aprendido a luchar por las cosas que realmente importaban en la vida."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "What did the city government originally plan to do with the community garden's land?",
        "options": [
          "Build new apartments",
          "Turn it into a public parking lot",
          "Sell it to a private company",
          "Expand a nearby school"
        ],
        "correctIndex": 1,
        "explanation": "The notice announced a project \"para convertir el terreno en un estacionamiento público.\""
      },
      {
        "type": "multiple-choice",
        "question": "What did Isabela do to help gather wider support besides collecting signatures in person?",
        "options": [
          "She organized a march",
          "She created an online petition page that went viral after a local journalist wrote about it",
          "She contacted a lawyer to sue the city",
          "She moved the garden to a new location"
        ],
        "correctIndex": 1,
        "explanation": "Isabela \"propuso además crear una página en internet\" and the petition \"se hizo viral rápidamente después de que un periodista local escribiera un artículo.\""
      },
      {
        "type": "multiple-choice",
        "question": "What was the final outcome after the meeting with the mayor?",
        "options": [
          "The garden was destroyed anyway",
          "The parking lot would be built on a different empty lot nearby instead",
          "The neighbors had to pay for the garden themselves",
          "The mayor resigned"
        ],
        "correctIndex": 1,
        "explanation": "The mayor announced \"que el estacionamiento se construiría en otro terreno cercano que estaba desocupado,\" so the garden stayed intact."
      }
    ]
  },
  {
    "slug": "primer-dia-oficina",
    "level": "B1",
    "number": 89,
    "title": "El primer día en la oficina",
    "summary": "A young designer's nerve-wracking first day at a new job teaches her that asking for help is a strength, not a weakness.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Marina se despertó nerviosa antes de que sonara el despertador. Era su primer día como diseñadora gráfica en una agencia de publicidad en el centro de la ciudad. Había soñado con este trabajo durante meses, pero ahora que por fin había llegado el momento, sentía que las manos le temblaban un poco. Se vistió con cuidado y salió de casa temprano, porque no quería llegar tarde.",
          "Cuando entró en la oficina, todo le pareció más grande y más ruidoso de lo que había imaginado. Su jefe, el señor Contreras, la saludó rápidamente y le dijo que revisara los archivos del proyecto antes de las diez. \"Es importante que aprendas rápido\", le explicó, \"porque aquí no hay mucho tiempo para explicaciones largas\". Marina asintió, aunque por dentro pensaba que sería difícil hacerlo todo tan rápido.",
          "Durante la primera hora, tuvo que usar un programa de diseño que nunca había utilizado antes. Sus compañeros trabajaban en silencio, concentrados en sus pantallas, y a ella le daba vergüenza pedir ayuda. Sin embargo, recordó lo que su madre siempre le decía: que era mejor preguntar que cometer un error grande. Así que se acercó a una compañera, Lucía, y le preguntó si podía explicarle cómo funcionaba el programa.",
          "Lucía sonrió y le dijo que no se preocupara, que todos habían pasado por lo mismo cuando empezaron. Le mostró paso a paso cómo abrir los archivos y cómo guardar el trabajo correctamente. Marina se sintió aliviada y le dio las gracias varias veces.",
          "A mediodía, el señor Contreras la llamó a su oficina para revisar lo que había hecho. Miró la pantalla en silencio durante unos segundos que a Marina le parecieron eternos. Luego dijo: \"No está mal, pero cambia estos colores y hazlo más simple\". Marina tomó notas rápidamente y prometió que lo corregiría antes del final del día.",
          "Por la tarde, mientras corregía el diseño, pensó en lo distinto que era el trabajo real de lo que había estudiado en la universidad. Es posible que los profesores no puedan enseñar todo lo que se aprende en una oficina de verdad. Cuando terminó, le envió el archivo actualizado a su jefe y esperó su respuesta con el corazón acelerado.",
          "El señor Contreras respondió con un simple mensaje: \"Mejor. Sigue así\". No era un elogio muy grande, pero para Marina fue suficiente. Sintió que, aunque el día había sido difícil, había aprendido más en ocho horas que en muchas clases de la universidad.",
          "Al salir de la oficina, Lucía la invitó a tomar un café para celebrar que había sobrevivido su primer día. Caminaron juntas hasta una cafetería cercana y hablaron sobre los proyectos futuros de la agencia. Marina se dio cuenta de que, si seguía esforzándose y pedía ayuda cuando la necesitaba, podría llegar a ser una buena diseñadora. Esa noche, antes de dormir, escribió en su diario: \"Hoy empezó todo\"."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "Why were Marina's hands trembling that morning?",
        "options": [
          "She was cold on the walk to work",
          "It was her first day at a new job and she was nervous",
          "She had slept badly all week",
          "She arrived late to the office"
        ],
        "correctIndex": 1,
        "explanation": "The story says she felt her hands tremble because \"Era su primer día como diseñadora gráfica en una agencia de publicidad\" — it was her first day at a new job, which made her nervous."
      },
      {
        "type": "multiple-choice",
        "question": "What did Lucía do when Marina asked for help?",
        "options": [
          "She told her she was too busy",
          "She showed her step by step how to use the program",
          "She called the boss to complain",
          "She gave the task to someone else"
        ],
        "correctIndex": 1,
        "explanation": "The text states \"Le mostró paso a paso cómo abrir los archivos y cómo guardar el trabajo correctamente\" — Lucía showed her step by step how to open and save files."
      },
      {
        "type": "multiple-choice",
        "question": "What did señor Contreras ask Marina to change in her design?",
        "options": [
          "The size of the text",
          "The colors",
          "The logo",
          "The project deadline"
        ],
        "correctIndex": 1,
        "explanation": "He told her: \"cambia estos colores y hazlo más simple\" — change these colors and make it simpler."
      },
      {
        "type": "multiple-choice",
        "question": "How did Marina feel by the end of her first day?",
        "options": [
          "Determined to quit the job",
          "Angry with Lucía",
          "Aware she had learned a lot despite the difficulties",
          "Indifferent about the whole experience"
        ],
        "correctIndex": 2,
        "explanation": "She felt that \"aunque el día había sido difícil, había aprendido más en ocho horas que en muchas clases de la universidad\" — despite the hard day, she had learned more than in many university classes."
      }
    ]
  },
  {
    "slug": "factura-que-nunca-llega",
    "level": "B1",
    "number": 90,
    "title": "La factura que nunca llega",
    "summary": "A freelance web developer must find the courage to confront a client who keeps delaying payment for months.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Diego trabajaba como diseñador web independiente desde hacía dos años. Le gustaba la libertad de elegir sus propios horarios, pero también sabía que ese tipo de trabajo tenía sus riesgos. Uno de esos riesgos apareció cuando terminó un proyecto grande para una clienta llamada la señora Rojas, dueña de una tienda de ropa. Ella le había pedido un sitio web completo, con tienda en línea incluida, y él había trabajado casi dos meses sin parar.",
          "Cuando entregó el proyecto, la señora Rojas quedó muy contenta y le prometió que pagaría la factura en una semana. Diego confiaba en ella, así que no se preocupó al principio. Sin embargo, pasaron dos semanas y el dinero nunca llegó a su cuenta. Le escribió un mensaje educado, preguntando si todo estaba bien con el pago.",
          "La señora Rojas respondió que había tenido problemas con el banco y que le pagaría pronto. Diego decidió esperar, porque entendía que a veces surgen complicaciones inesperadas. Pero pasó otro mes, y luego otro, sin ninguna noticia clara sobre el pago. Empezó a preguntarse si la clienta realmente tenía la intención de pagarle.",
          "Un amigo, que también trabajaba de forma independiente, le sugirió hablar con un abogado. \"Es normal que un cliente pague tarde alguna vez\", le dijo, \"pero no es normal que no pague nada después de tres meses\". Diego sabía que su amigo tenía razón, aunque le daba miedo perder a la clienta si insistía demasiado.",
          "Finalmente, Diego escribió un correo formal en el que explicaba que, si no recibía el pago antes de fin de mes, tendría que tomar medidas legales. Fue la carta más difícil que había escrito en su vida, porque nunca le había gustado el conflicto. Después de enviarla, se quedó mirando la pantalla, esperando una respuesta que no sabía si llegaría.",
          "Dos días después, la señora Rojas lo llamó por teléfono, algo enfadada, pero finalmente le explicó la verdad: su tienda no estaba ganando tanto dinero como esperaba, y le costaba pagar todas sus deudas. Diego escuchó con paciencia y le propuso pagar la factura en tres partes, en vez de todo junto. Ella aceptó aliviada, y prometió que cumpliría el nuevo acuerdo.",
          "Durante los meses siguientes, la señora Rojas pagó cada parte a tiempo, tal como habían acordado. Diego aprendió una lección importante: era mejor tener contratos claros desde el principio, en los que se especificara cuándo y cómo se pagaría el trabajo. A partir de entonces, empezó a pedir siempre una parte del dinero por adelantado.",
          "Meses más tarde, la señora Rojas le recomendó a otros dueños de tiendas, y Diego consiguió más clientes gracias a ella. Se dio cuenta de que, aunque el conflicto había sido estresante, también le había enseñado a proteger mejor su negocio. Ahora, cada vez que firmaba un contrato nuevo, se sentía más seguro de sí mismo."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "Why didn't Diego worry when the payment was first late?",
        "options": [
          "He didn't need the money",
          "He trusted the client, who had promised to pay within a week",
          "He had already been paid in cash",
          "He forgot about the invoice"
        ],
        "correctIndex": 1,
        "explanation": "The señora Rojas \"le prometió que pagaría la factura en una semana\" and \"Diego confiaba en ella, así que no se preocupó al principio\" — he trusted her promise."
      },
      {
        "type": "multiple-choice",
        "question": "What did Diego's friend suggest he do?",
        "options": [
          "Stop working as a freelancer",
          "Talk to a lawyer",
          "Ignore the missing payment",
          "Give the client a discount"
        ],
        "correctIndex": 1,
        "explanation": "His friend \"le sugirió hablar con un abogado\" — suggested he speak with a lawyer."
      },
      {
        "type": "multiple-choice",
        "question": "What solution did Diego propose to resolve the payment issue?",
        "options": [
          "Cancel the debt completely",
          "Take the client to court immediately",
          "Pay the invoice in three parts instead of all at once",
          "Refuse to ever work with her again"
        ],
        "correctIndex": 2,
        "explanation": "Diego \"le propuso pagar la factura en tres partes, en vez de todo junto\" — he proposed splitting the payment into three parts."
      },
      {
        "type": "multiple-choice",
        "question": "What lesson did Diego learn from this experience?",
        "options": [
          "Never trust any client again",
          "Always work for free the first time",
          "It was better to have clear contracts specifying payment terms",
          "Freelance work is not worth doing"
        ],
        "correctIndex": 2,
        "explanation": "The story says he learned it \"era mejor tener contratos claros desde el principio, en los que se especificara cuándo y cómo se pagaría el trabajo\"."
      }
    ]
  },
  {
    "slug": "error-del-becario",
    "level": "B1",
    "number": 91,
    "title": "El error del becario",
    "summary": "An intern must decide whether to hide a costly mistake or admit it to his boss right away.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Pablo llevaba tres semanas haciendo prácticas en un despacho de contabilidad en el centro de Madrid. Era su primera experiencia real en el mundo laboral, y quería demostrar que merecía la oportunidad. Su jefa, la señora Núñez, le había confiado una tarea importante: enviar un informe financiero a uno de los clientes más grandes de la empresa. Pablo revisó el archivo dos veces antes de enviarlo, o al menos eso creyó.",
          "Media hora después de enviar el correo, se dio cuenta de que había cometido un error grave: había mandado la versión antigua del informe, la que todavía tenía cifras equivocadas. Sintió que el estómago se le encogía. No sabía si debía confesar el error inmediatamente o esperar a ver si alguien lo notaba.",
          "Pasó el resto de la mañana nervioso, mirando la puerta de la oficina de la señora Núñez cada pocos minutos. Un compañero, que se dio cuenta de su cara de preocupación, le preguntó qué le pasaba. Pablo le contó todo, y su compañero le dijo: \"Es mejor que se lo digas tú antes de que lo descubra el cliente. Así demuestras que eres responsable\".",
          "Pablo sabía que su compañero tenía razón, aunque le costaba mucho reunir el valor necesario. Pensó en lo que pasaría si no decía nada y el cliente notaba el error: probablemente sería peor para todos, y también para la reputación de la empresa. Finalmente, decidió tocar la puerta de la señora Núñez.",
          "\"Necesito contarle algo\", dijo Pablo, con la voz un poco temblorosa. Le explicó lo que había ocurrido, sin excusas ni justificaciones. La señora Núñez lo escuchó en silencio, con una expresión seria que a Pablo le pareció eterna.",
          "Cuando terminó de hablar, ella le dijo: \"Gracias por decírmelo tan pronto. Ahora escribe un correo al cliente, discúlpate y envía el informe correcto\". Pablo obedeció inmediatamente, aliviado al ver que su jefa no estaba enfadada, sino tranquila y práctica ante el problema.",
          "Pablo redactó el correo con mucho cuidado, pidiendo disculpas por el error y adjuntando el informe correcto. El cliente respondió con amabilidad, diciendo que entendía que a veces ocurren estos problemas y que agradecía la rapidez de la corrección. Pablo sintió un gran alivio al leer esas palabras.",
          "Esa tarde, la señora Núñez lo llamó de nuevo a su oficina, pero esta vez para decirle algo distinto. \"Todos cometemos errores, Pablo, pero pocos becarios tienen el valor de admitirlos tan rápido. Eso es lo que buscamos en esta empresa\". Pablo salió de la oficina con una sonrisa, sabiendo que, aunque había fallado, también había demostrado quién era de verdad."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "What mistake did Pablo make?",
        "options": [
          "He was late to work",
          "He sent an old version of the report with wrong figures",
          "He lost an important client",
          "He forgot to attend a meeting"
        ],
        "correctIndex": 1,
        "explanation": "He realized \"había mandado la versión antigua del informe, la que todavía tenía cifras equivocadas\" — he had sent the old, incorrect version."
      },
      {
        "type": "multiple-choice",
        "question": "What advice did Pablo's coworker give him?",
        "options": [
          "To hide the mistake and hope no one noticed",
          "To quit the internship",
          "To tell señora Núñez himself before the client found out",
          "To blame someone else for the error"
        ],
        "correctIndex": 2,
        "explanation": "His coworker said: \"Es mejor que se lo digas tú antes de que lo descubra el cliente\" — it's better that you tell her yourself before the client discovers it."
      },
      {
        "type": "multiple-choice",
        "question": "How did señora Núñez react when Pablo confessed?",
        "options": [
          "She fired him immediately",
          "She thanked him and asked him to correct the error",
          "She yelled at him in front of everyone",
          "She ignored what he said"
        ],
        "correctIndex": 1,
        "explanation": "She said \"Gracias por decírmelo tan pronto. Ahora escribe un correo al cliente, discúlpate y envía el informe correcto\" — thanking him and telling him to fix it."
      },
      {
        "type": "multiple-choice",
        "question": "What did señora Núñez say she valued in the final conversation?",
        "options": [
          "Perfect work with no mistakes ever",
          "Employees who work the longest hours",
          "The courage to admit mistakes quickly",
          "Never asking questions"
        ],
        "correctIndex": 2,
        "explanation": "She told him \"pocos becarios tienen el valor de admitirlos tan rápido. Eso es lo que buscamos en esta empresa\" — few interns have the courage to admit mistakes so fast, and that's what the company looks for."
      }
    ]
  },
  {
    "slug": "cliente-mesa-siete",
    "level": "B1",
    "number": 92,
    "title": "El cliente de la mesa siete",
    "summary": "A waitress discovers the painful reason behind a rude customer's behavior, and an unlikely friendship begins.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Elena llevaba dos años trabajando como camarera en un pequeño restaurante del barrio. Le gustaba su trabajo, aunque algunos clientes hacían que los días fueran más difíciles de lo normal. Un jueves por la noche, un hombre se sentó solo en la mesa siete y, desde el primer momento, se mostró impaciente y grosero. Le pidió el menú de mala manera y se quejó de que el restaurante estaba muy lleno.",
          "Elena intentó mantener la calma, como le habían enseñado a hacer en todos los trabajos de atención al público. Le trajo el agua que había pedido, pero él dijo que estaba demasiado fría. Cuando le sirvió la comida, el hombre apenas la probó antes de decir que no le gustaba. Elena respiró hondo y le preguntó, con toda la educación posible, si podía traerle otra cosa.",
          "El hombre, cuyo nombre era el señor Beltrán, no respondió con amabilidad. \"No entiendo cómo la gente puede trabajar aquí sin saber hacer bien su trabajo\", dijo en voz alta, lo suficiente para que otras mesas lo oyeran. Elena sintió que las mejillas se le ponían rojas de vergüenza, pero no dijo nada más y se alejó hacia la cocina.",
          "Su compañero de trabajo, Iván, le preguntó si estaba bien. \"No pasa nada\", respondió ella, aunque por dentro estaba muy afectada. \"Hay clientes así. No hay que tomárselo personalmente\". Sin embargo, esa noche le costó no pensar en las palabras del señor Beltrán.",
          "Cuando llegó la hora de pagar, el señor Beltrán sacó su teléfono y, mientras esperaba la cuenta, recibió una llamada. Elena, que estaba cerca, escuchó sin querer parte de la conversación: su esposa estaba en el hospital y los médicos no sabían todavía qué le pasaba. La expresión del hombre cambió por completo; ya no parecía enfadado, sino asustado.",
          "Cuando Elena le llevó la cuenta, decidió decir algo, aunque no sabía si era buena idea. \"Disculpe que le pregunte, pero ¿está usted bien?\" El señor Beltrán la miró sorprendido y, después de un momento de silencio, le contó que su esposa llevaba dos días en el hospital y que él no sabía cómo manejar el miedo que sentía.",
          "Elena le habló con calma. \"Espero que todo salga bien\", le dijo, \"y no se preocupe, a veces el estrés hace que actuemos de maneras que normalmente no tendríamos\". El señor Beltrán se disculpó por su actitud durante la cena y le agradeció la paciencia que había tenido con él.",
          "Antes de irse, el señor Beltrán dejó una propina generosa y le pidió disculpas una vez más. Volvió al restaurante unas semanas después, esta vez con una sonrisa, para contarle a Elena que su esposa ya estaba mejor. Desde entonces, siempre que iba a cenar allí, pedía que lo atendiera Elena, y los dos se saludaban como viejos conocidos. Elena aprendió que, detrás de un cliente difícil, muchas veces hay una historia que no se conoce."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "How did señor Beltrán behave when he first arrived at the restaurant?",
        "options": [
          "Friendly and talkative",
          "Impatient and rude",
          "Silent and shy",
          "Cheerful and generous"
        ],
        "correctIndex": 1,
        "explanation": "The story says \"desde el primer momento, se mostró impaciente y grosero\" — from the first moment he was impatient and rude."
      },
      {
        "type": "multiple-choice",
        "question": "What did Elena accidentally overhear while he was on the phone?",
        "options": [
          "He was talking about a work problem",
          "His wife was in the hospital and doctors didn't know what was wrong",
          "He was complaining about the restaurant to a friend",
          "He was arguing with his boss"
        ],
        "correctIndex": 1,
        "explanation": "She heard that \"su esposa estaba en el hospital y los médicos no sabían todavía qué le pasaba\"."
      },
      {
        "type": "multiple-choice",
        "question": "What did Elena say to señor Beltrán when she brought the bill?",
        "options": [
          "She told him he was a terrible customer",
          "She asked if he was okay",
          "She refused to serve him again",
          "She called the manager"
        ],
        "correctIndex": 1,
        "explanation": "She asked him: \"Disculpe que le pregunte, pero ¿está usted bien?\""
      },
      {
        "type": "multiple-choice",
        "question": "What lesson does Elena take away from the experience?",
        "options": [
          "Rude customers should never be forgiven",
          "Behind a difficult customer there is often a story you don't know about",
          "It's better to avoid all customers",
          "Restaurant work is not worth the stress"
        ],
        "correctIndex": 1,
        "explanation": "The story ends: \"Elena aprendió que, detrás de un cliente difícil, muchas veces hay una historia que no se conoce\"."
      }
    ]
  },
  {
    "slug": "competencia-por-el-ascenso",
    "level": "B1",
    "number": 93,
    "title": "La competencia por el ascenso",
    "summary": "Two close coworkers apply for the same promotion, and their friendship is tested before a surprising resolution.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Sara y Julián habían trabajado juntos durante cuatro años en el departamento de ventas de una empresa mediana. Eran buenos amigos, almorzaban juntos casi todos los días y se ayudaban mutuamente cuando surgían problemas. Todo cambió el día en que la empresa anunció que buscaba un nuevo jefe de equipo, y que el puesto se elegiría entre los empleados actuales.",
          "Tanto Sara como Julián decidieron presentarse al puesto. Al principio, bromeaban sobre la situación, pero poco a poco el ambiente entre ellos se volvió más tenso. Cada uno quería demostrar que merecía el ascenso más que el otro, y empezaron a evitar hablar del tema durante los almuerzos.",
          "Durante las semanas siguientes, ambos trabajaron más horas de las habituales. Sara se quedaba hasta tarde preparando propuestas para nuevos clientes, mientras que Julián organizaba reuniones extra con el equipo para mostrar sus habilidades de liderazgo. Es normal que dos personas compitan por un mismo puesto, pero para ellos, que habían sido tan cercanos, la competencia empezaba a doler.",
          "Un día, Sara descubrió que Julián había mencionado, sin darse cuenta, un error que ella había cometido meses atrás, delante de la directora. Se sintió traicionada y furiosa. Esa tarde, en el pasillo, le dijo directamente lo que pensaba: \"No puedo creer que hayas dicho eso delante de todos. Pensé que éramos amigos\".",
          "Julián se quedó sorprendido y le explicó que no lo había hecho a propósito, que simplemente se le había escapado durante la conversación. Sara no estaba segura de creerle del todo, pero decidió darle el beneficio de la duda. Los dos se quedaron callados un momento, incómodos, sin saber cómo seguir la conversación.",
          "Esa noche, Julián le escribió un mensaje largo en el que le pedía perdón de verdad y le decía que, ganara quien ganara el ascenso, no quería perder su amistad. Sara leyó el mensaje varias veces antes de responder. Al final, escribió que ella tampoco quería que un puesto de trabajo destruyera algo que habían construido durante años.",
          "Cuando llegó el día de la decisión, la directora los llamó a los dos juntos a su oficina, lo cual les pareció extraño. Les explicó que había decidido dividir el puesto en dos roles distintos, porque ambos tenían fortalezas diferentes que la empresa necesitaba. Sara se encargaría de las relaciones con los clientes, y Julián coordinaría al equipo interno.",
          "Al salir de la oficina, se miraron y, después de un segundo de silencio, empezaron a reír por el alivio que sentían. \"Ojalá siempre resolvamos los problemas hablando, como hoy\", dijo Julián, y Sara estuvo de acuerdo con una sonrisa. Desde ese día, aunque ahora tenían puestos distintos dentro de la empresa, siguieron almorzando juntos todos los días, tal como lo habían hecho siempre."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "What caused tension between Sara and Julián?",
        "options": [
          "They both wanted the same vacation dates",
          "They both applied for the same team leader position",
          "Julián was fired and Sara wasn't",
          "They disagreed about a client's contract"
        ],
        "correctIndex": 1,
        "explanation": "The story explains \"la empresa anunció que buscaba un nuevo jefe de equipo, y que el puesto se elegiría entre los empleados actuales\", and both applied."
      },
      {
        "type": "multiple-choice",
        "question": "How did Sara feel when she found out Julián had mentioned her old mistake to the director?",
        "options": [
          "Amused",
          "Betrayed and furious",
          "Grateful",
          "Indifferent"
        ],
        "correctIndex": 1,
        "explanation": "The text says directly: \"Se sintió traicionada y furiosa\"."
      },
      {
        "type": "multiple-choice",
        "question": "What was Julián's explanation for mentioning the mistake?",
        "options": [
          "He did it on purpose to win the promotion",
          "It slipped out unintentionally during the conversation",
          "The director asked him directly about it",
          "He didn't remember saying it"
        ],
        "correctIndex": 1,
        "explanation": "He explained \"que no lo había hecho a propósito, que simplemente se le había escapado durante la conversación\"."
      },
      {
        "type": "multiple-choice",
        "question": "How did the director resolve the competition for the promotion?",
        "options": [
          "She chose Julián over Sara",
          "She canceled the promotion entirely",
          "She split the position into two different roles",
          "She asked them to reapply in a year"
        ],
        "correctIndex": 2,
        "explanation": "The director \"había decidido dividir el puesto en dos roles distintos, porque ambos tenían fortalezas diferentes que la empresa necesitaba\"."
      }
    ]
  },
  {
    "slug": "ruido-piso-arriba",
    "level": "B1",
    "number": 94,
    "title": "El ruido del piso de arriba",
    "summary": "A noise conflict between neighbors turns into an unexpected friendship after the building agrees on shared rules.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Rosa llevaba quince años viviendo en el mismo apartamento y, hasta hacía poco, siempre había disfrutado de la tranquilidad del edificio. Todo cambió cuando una pareja joven, Marta y Óscar, se mudó al piso de arriba con su bebé recién nacido. Durante las primeras semanas, Rosa escuchaba pasos, llantos y música a todas horas, incluso muy tarde por la noche.",
          "Al principio, Rosa intentó tener paciencia, porque sabía que tener un bebé pequeño no era fácil. Sin embargo, después de un mes sin poder dormir bien, decidió subir a hablar con sus nuevos vecinos. Tocó la puerta con cierto nerviosismo, sin saber cómo reaccionarían.",
          "Marta abrió la puerta con el bebé en brazos y una expresión de cansancio evidente. Rosa le explicó, con la mayor amabilidad posible, que el ruido por las noches le estaba afectando mucho el sueño. \"Entiendo que es difícil con un bebé\", dijo Rosa, \"pero espero que podamos encontrar una solución juntas\".",
          "Marta se disculpó, un poco avergonzada, y le explicó que el bebé lloraba mucho por las noches porque le estaban saliendo los primeros dientes. Le prometió que hablaría con Óscar para poner alfombras en el suelo y así reducir el ruido de los pasos. Rosa agradeció su disposición a resolver el problema sin discutir.",
          "Durante las semanas siguientes, la situación mejoró un poco, pero el ruido no desapareció por completo. Rosa decidió entonces proponer el tema en la próxima reunión de vecinos del edificio, no para quejarse de Marta y Óscar en particular, sino para hablar de las reglas generales de convivencia. \"Es importante que todos respetemos ciertas horas de silencio\", dijo durante la reunión, \"sobre todo por la noche\".",
          "Los vecinos discutieron el tema y, entre todos, decidieron crear un pequeño acuerdo escrito: después de las diez de la noche, se debía mantener el volumen bajo en cada apartamento, y se recomendaba usar alfombras para reducir el ruido de los pasos. El acuerdo se colgó en la entrada del edificio para que todos pudieran verlo.",
          "Marta y Óscar, lejos de sentirse señalados, dijeron que preferían tener un acuerdo claro para todo el edificio, en vez de un problema solo entre ellos y Rosa. Compraron unas alfombras gruesas para la sala y el pasillo, y el ruido de los pasos se redujo notablemente.",
          "Con el tiempo, Rosa y Marta se hicieron amigas, y Rosa incluso empezó a cuidar del bebé algunas tardes, cuando Marta necesitaba descansar. Lo que había empezado como un conflicto terminó uniendo más a los vecinos del edificio. Rosa comprendió que hablar directamente con los demás, en vez de quedarse callada, casi siempre trae mejores resultados."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "Why couldn't Rosa sleep well for over a month?",
        "options": [
          "Construction noise on her street",
          "Noise from her upstairs neighbors' new baby",
          "A broken heater",
          "Loud traffic outside"
        ],
        "correctIndex": 1,
        "explanation": "The upstairs baby caused it: \"el ruido por las noches le estaba afectando mucho el sueño\", and the baby was \"un bebé recién nacido\"."
      },
      {
        "type": "multiple-choice",
        "question": "What solution did Marta first propose to reduce noise?",
        "options": [
          "Move to a different apartment",
          "Put rugs on the floor to reduce footstep noise",
          "Stop having visitors",
          "Soundproof the walls"
        ],
        "correctIndex": 1,
        "explanation": "Marta promised \"que hablaría con Óscar para poner alfombras en el suelo y así reducir el ruido de los pasos\"."
      },
      {
        "type": "multiple-choice",
        "question": "What did Rosa propose at the building meeting?",
        "options": [
          "Evicting Marta and Óscar",
          "A written agreement about quiet hours for everyone",
          "Banning babies from the building",
          "Raising everyone's rent"
        ],
        "correctIndex": 1,
        "explanation": "She said \"Es importante que todos respetemos ciertas horas de silencio\", leading to a written agreement for the whole building."
      },
      {
        "type": "multiple-choice",
        "question": "What did Rosa ultimately learn from the experience?",
        "options": [
          "It's best to avoid conflict by staying silent",
          "Speaking directly with others usually brings better results than staying quiet",
          "Babies should not live in apartment buildings",
          "Neighbors can never really become friends"
        ],
        "correctIndex": 1,
        "explanation": "The story concludes: \"hablar directamente con los demás, en vez de quedarse callada, casi siempre trae mejores resultados\"."
      }
    ]
  },
  {
    "slug": "herencia-panaderia",
    "level": "B1",
    "number": 95,
    "title": "La herencia de la panadería",
    "summary": "Two siblings clash over what to do with their late father's bakery, until an old letter changes everything.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Cuando el padre de Ana y Tomás murió, dejó como herencia algo más que dinero: una pequeña panadería que había abierto hacía treinta años en el barrio. Los dos hermanos, que llevaban tiempo sin hablarse mucho por sus propias vidas ocupadas, tuvieron que reunirse para decidir qué hacer con el negocio. Ana vivía en otra ciudad y trabajaba como abogada, mientras que Tomás seguía viviendo cerca del barrio donde habían crecido.",
          "Desde el primer momento, quedó claro que tenían opiniones muy distintas. Tomás quería mantener la panadería abierta, tal como su padre siempre había soñado, mientras que Ana pensaba que sería más práctico venderla. \"No tengo tiempo para manejar un negocio a distancia\", le dijo a su hermano, \"y tú tampoco puedes hacerlo solo\".",
          "Tomás se sintió herido por esas palabras. Para él, la panadería no era solo un negocio; era el lugar donde había pasado su infancia, ayudando a su padre a hacer pan cada madrugada. \"Es importante que entiendas que esto significa más para mí que el dinero\", le respondió, con la voz cargada de emoción.",
          "Durante varios días, los hermanos apenas se hablaron, aunque compartían la misma casa mientras arreglaban los papeles de la herencia. Una noche, mientras revisaban viejas fotografías de la panadería, Ana encontró una carta que su padre había escrito años atrás, en la que explicaba por qué había abierto el negocio: quería crear un lugar donde la gente del barrio pudiera reunirse cada mañana.",
          "Leer esa carta cambió la manera en que Ana veía la situación. Se dio cuenta de que, aunque su vida estaba en otra ciudad, todavía le importaba lo que su padre había construido. Le propuso a Tomás una idea distinta: ella invertiría dinero para modernizar la panadería, y él se encargaría de dirigirla día a día.",
          "Tomás escuchó la propuesta con sorpresa; no esperaba un cambio de opinión tan rápido en su hermana. \"¿Estás segura de que quieres hacer esto?\" le preguntó. Ana asintió. \"Si trabajamos juntos\", dijo, \"la panadería tendrá un futuro mejor del que ninguno de los dos imagina solo\".",
          "Con el acuerdo hecho, empezaron a planear los cambios: pintarían el local, comprarían un horno nuevo y añadirían algunos productos modernos a la carta tradicional. Tomás sugirió mantener las recetas originales de su padre, porque eran las que la gente del barrio más apreciaba. Ana estuvo de acuerdo enseguida.",
          "Meses después, la panadería reabrió con una pequeña fiesta a la que asistieron muchos vecinos que habían conocido a su padre durante años. Ana y Tomás, trabajando codo a codo detrás del mostrador, se dieron cuenta de que habían recuperado no solo un negocio familiar, sino también su relación de hermanos. El cartel de la entrada seguía diciendo el mismo nombre de siempre: \"Panadería López, desde hace treinta años\"."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "What did the father leave as an inheritance to Ana and Tomás?",
        "options": [
          "A house in the countryside",
          "A small neighborhood bakery",
          "A car repair shop",
          "A large sum of money only"
        ],
        "correctIndex": 1,
        "explanation": "He left \"una pequeña panadería que había abierto hacía treinta años en el barrio\"."
      },
      {
        "type": "multiple-choice",
        "question": "What did Ana initially want to do with the bakery?",
        "options": [
          "Keep it open and run it herself",
          "Sell it",
          "Turn it into a different kind of business",
          "Give it to a stranger"
        ],
        "correctIndex": 1,
        "explanation": "She thought \"que sería más práctico venderla\" — that it would be more practical to sell it."
      },
      {
        "type": "multiple-choice",
        "question": "What changed Ana's mind about the bakery?",
        "options": [
          "A phone call from a buyer",
          "Finding a letter their father had written explaining why he opened it",
          "A visit from an old family friend",
          "Losing her job as a lawyer"
        ],
        "correctIndex": 1,
        "explanation": "\"Ana encontró una carta que su padre había escrito años atrás, en la que explicaba por qué había abierto el negocio\", and this changed how she saw things."
      },
      {
        "type": "multiple-choice",
        "question": "What arrangement did the siblings finally agree on?",
        "options": [
          "Ana would sell her share to Tomás",
          "Ana would invest money to modernize it, and Tomás would manage it daily",
          "They would close the bakery permanently",
          "Tomás would move to Ana's city"
        ],
        "correctIndex": 1,
        "explanation": "Ana proposed that \"ella invertiría dinero para modernizar la panadería, y él se encargaría de dirigirla día a día\"."
      }
    ]
  },
  {
    "slug": "la-vecina-nueva",
    "level": "B1",
    "number": 96,
    "title": "La vecina nueva",
    "summary": "An immigrant woman's cooking breaks the ice with a distant elderly neighbor, sparking an unexpected friendship.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Amara llegó al edificio un sábado de septiembre, con dos maletas grandes y una caja llena de libros. Había emigrado de Colombia hacía apenas un mes, en busca de nuevas oportunidades de trabajo, y todavía no conocía a nadie en la ciudad. El edificio le pareció tranquilo, aunque algo frío: nadie salió a saludarla mientras subía sus cosas por las escaleras.",
          "Su vecino de al lado, el señor Domínguez, un hombre mayor que vivía solo desde hacía años, la observó desde su puerta entreabierta, pero no dijo nada. A Amara le pareció que la miraba con desconfianza, aunque no estaba segura de si eran imaginaciones suyas. Los primeros días fueron solitarios: iba a trabajar, volvía a casa y apenas hablaba con nadie.",
          "Una tarde, mientras cocinaba un plato tradicional de su país, el olor a especias llenó todo el pasillo del edificio. El señor Domínguez, curioso a pesar de sí mismo, tocó la puerta para preguntar qué estaba cocinando. \"Huele muy bien\", admitió, algo incómodo. Amara sonrió, sorprendida, y lo invitó a probar un poco.",
          "Al principio, el señor Domínguez pensó que probablemente no le gustaría una comida tan diferente de la suya, pero aceptó por curiosidad. Le encantó el sabor y le preguntó a Amara cómo se preparaba. Ella le explicó la receta con entusiasmo, feliz de tener por fin una conversación real con alguien del edificio.",
          "A partir de ese día, empezaron a visitarse de vez en cuando. El señor Domínguez le enseñó a Amara algunas costumbres del barrio, como qué mercado tenía las mejores frutas o qué autobús era más rápido para llegar al centro. Amara, a cambio, le enseñaba palabras y expresiones de su país, y le preparaba platos nuevos cada semana.",
          "Un día, el señor Domínguez le confesó que, al principio, había sentido cierta desconfianza simplemente porque no estaba acostumbrado a los cambios. \"Llevo mucho tiempo viviendo solo\", dijo, \"y a veces es difícil que alguien nuevo entre en tu vida\". Amara le explicó que ella también había sentido miedo, el miedo de no ser bien recibida en un lugar tan distinto a su hogar.",
          "Con el tiempo, otros vecinos del edificio empezaron a notar la amistad entre ellos y también se acercaron a Amara para conocerla mejor. Ella organizó una pequeña reunión en el patio del edificio, en la que cada vecino llevó un plato típico de su región. Fue la primera vez que se reunían todos juntos desde que Amara había llegado.",
          "Esa noche, mientras recogían los platos, el señor Domínguez le dijo a Amara que se alegraba mucho de haberla conocido. Amara sonrió y pensó que, aunque había llegado sola a un país desconocido, ya empezaba a sentir que tenía una familia en ese edificio. Lo que había comenzado como un simple plato de comida se había convertido en el inicio de una verdadera comunidad."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "Where had Amara emigrated from?",
        "options": [
          "Mexico",
          "Colombia",
          "Argentina",
          "Peru"
        ],
        "correctIndex": 1,
        "explanation": "The story says \"Había emigrado de Colombia hacía apenas un mes\"."
      },
      {
        "type": "multiple-choice",
        "question": "What made señor Domínguez first knock on Amara's door?",
        "options": [
          "A noise complaint",
          "The smell of the food she was cooking",
          "A package delivered to the wrong address",
          "A building meeting notice"
        ],
        "correctIndex": 1,
        "explanation": "\"El olor a especias llenó todo el pasillo del edificio\" and he \"tocó la puerta para preguntar qué estaba cocinando\"."
      },
      {
        "type": "multiple-choice",
        "question": "What did señor Domínguez admit about his initial distrust of Amara?",
        "options": [
          "He thought she was too loud",
          "He simply wasn't used to changes after living alone a long time",
          "He didn't like her cooking style",
          "He was afraid of losing his apartment"
        ],
        "correctIndex": 1,
        "explanation": "He confessed \"había sentido cierta desconfianza simplemente porque no estaba acostumbrado a los cambios\" after \"Llevo mucho tiempo viviendo solo\"."
      },
      {
        "type": "multiple-choice",
        "question": "How did the friendship between Amara and señor Domínguez affect the rest of the building?",
        "options": [
          "It caused jealousy among other neighbors",
          "It led to a gathering where neighbors shared food from their regions",
          "It had no effect on anyone else",
          "It caused Amara to move out"
        ],
        "correctIndex": 1,
        "explanation": "Amara \"organizó una pequeña reunión en el patio del edificio, en la que cada vecino llevó un plato típico de su región\"."
      }
    ]
  },
  {
    "slug": "aviso-de-desalojo",
    "level": "B1",
    "number": 97,
    "title": "El aviso de desalojo",
    "summary": "When their building's owner decides to sell, a group of tenants must organize together to protect their rights.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Lucía encontró el sobre debajo de la puerta un lunes por la mañana, justo antes de salir para el trabajo. Al abrirlo, sintió que el corazón se le detenía por un segundo: era un aviso de desalojo. El dueño del edificio había decidido vender el inmueble, y por eso todos los inquilinos debían irse en un plazo de dos meses.",
          "Lucía llevaba cinco años viviendo en ese apartamento, el primero que había alquilado sola después de terminar la universidad. Dos meses le parecían un tiempo terriblemente corto para encontrar otro lugar, sobre todo con los precios de alquiler tan altos que había en la ciudad. Esa noche, no pudo dormir pensando en qué hacer.",
          "Al día siguiente, decidió hablar con sus vecinos para saber si a ellos también les había llegado el mismo aviso. Descubrió que, en efecto, todos los inquilinos del edificio habían recibido la misma carta. \"Es mejor que hablemos con un abogado antes de tomar cualquier decisión\", sugirió uno de los vecinos, un hombre mayor llamado don Ernesto.",
          "Juntos, organizaron una reunión con una abogada especializada en temas de vivienda. Ella les explicó que, según la ley, el dueño no podía echarlos de un día para otro sin respetar ciertos plazos y derechos que protegían a los inquilinos. \"Ustedes tienen más tiempo del que el dueño quiere hacerles creer\", les aseguró la abogada.",
          "Con esta información, Lucía y sus vecinos escribieron una carta conjunta al dueño en la que pedían más tiempo para organizar la mudanza y el cumplimiento de los plazos legales. Firmaron la carta todos los inquilinos del edificio, mostrando que actuaban unidos.",
          "El dueño, sorprendido por la respuesta organizada de los inquilinos, aceptó reunirse con ellos. Durante la reunión, se mostró menos agresivo de lo que Lucía esperaba, y finalmente accedió a extender el plazo a cuatro meses, en vez de los dos que había propuesto originalmente. También prometió ayudar a los inquilinos que necesitaran una carta de referencia para alquilar en otro lugar.",
          "Con más tiempo, Lucía pudo buscar un nuevo apartamento con calma, sin la presión de encontrar algo en solo unas semanas. Visitó varios lugares antes de decidirse por uno cerca de su trabajo, un poco más pequeño, pero con un alquiler razonable. Sus vecinos, mientras tanto, también encontraron nuevos hogares, algunos incluso en el mismo barrio.",
          "El día de la mudanza, varios vecinos se ayudaron mutuamente a cargar cajas y muebles, como si fueran una pequeña familia que se despedía. Lucía entendió que, aunque había perdido su apartamento, había ganado algo valioso: la certeza de que, cuando la gente se organiza, puede defender sus derechos de manera efectiva."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "Why did Lucía receive an eviction notice?",
        "options": [
          "She had stopped paying rent",
          "The building's owner decided to sell it",
          "The building was being demolished",
          "She had broken building rules"
        ],
        "correctIndex": 1,
        "explanation": "\"El dueño del edificio había decidido vender el inmueble\", so all tenants had to leave."
      },
      {
        "type": "multiple-choice",
        "question": "What did the housing lawyer explain to the tenants?",
        "options": [
          "They had no legal protections at all",
          "The owner had legal deadlines and rights he had to respect",
          "They should move out immediately",
          "Only Lucía had rights, not the other tenants"
        ],
        "correctIndex": 1,
        "explanation": "The lawyer explained \"el dueño no podía echarlos de un día para otro sin respetar ciertos plazos y derechos que protegían a los inquilinos\"."
      },
      {
        "type": "multiple-choice",
        "question": "What did the tenants do together after learning their rights?",
        "options": [
          "They sued the owner immediately",
          "They wrote a joint letter asking for more time",
          "They refused to leave under any circumstances",
          "They each negotiated separately"
        ],
        "correctIndex": 1,
        "explanation": "They \"escribieron una carta conjunta al dueño en la que pedían más tiempo... Firmaron la carta todos los inquilinos del edificio\"."
      },
      {
        "type": "multiple-choice",
        "question": "What was the final outcome of the negotiation with the owner?",
        "options": [
          "The owner canceled the sale of the building",
          "The deadline was extended to four months, and he offered reference letters",
          "The tenants were forced out in two months anyway",
          "The owner lowered everyone's rent instead"
        ],
        "correctIndex": 1,
        "explanation": "The owner \"accedió a extender el plazo a cuatro meses... También prometió ayudar a los inquilinos que necesitaran una carta de referencia\"."
      }
    ]
  },
  {
    "slug": "grupo-whatsapp-edificio",
    "level": "B1",
    "number": 98,
    "title": "El grupo de WhatsApp del edificio",
    "summary": "A small parking complaint explodes into a heated group chat war, until the neighbors decide to talk face to face instead.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "El grupo de WhatsApp del edificio se había creado originalmente para avisar sobre cortes de agua o reparaciones importantes. Sin embargo, con el tiempo, se había convertido en un espacio donde los vecinos discutían por cualquier motivo. Todo empeoró una noche, cuando alguien escribió un mensaje quejándose de que un vecino dejaba su coche mal aparcado en el garaje.",
          "El mensaje, escrito con mayúsculas y varios signos de exclamación, provocó una respuesta inmediata. El dueño del coche, ofendido, respondió que no era el único que aparcaba mal alguna vez y que no entendía por qué lo señalaban a él específicamente. En pocos minutos, el grupo se llenó de decenas de mensajes, cada uno más tenso que el anterior.",
          "Carmen, la administradora del edificio, observaba la conversación con preocupación mientras leía los mensajes desde su teléfono. Pensó que, si la discusión continuaba así, algunos vecinos terminarían enfadados de verdad por algo que, en realidad, no era tan grave. Decidió escribir un mensaje para pedir calma a todos.",
          "\"Por favor, dejemos de discutir por aquí\", escribió Carmen. \"Propongo que organicemos una reunión presencial para hablar de las normas del garaje, en vez de seguir escribiendo mensajes que solo generan más enfado\". Algunos vecinos estuvieron de acuerdo enseguida, mientras que otros siguieron enviando mensajes sarcásticos durante un rato más.",
          "Finalmente, se acordó una reunión para el sábado siguiente, en el salón comunitario del edificio. Carmen no estaba segura de cuántos vecinos asistirían, pero, para su sorpresa, casi todos aparecieron, incluidos los que habían discutido con más fuerza en el chat.",
          "Durante la reunión, resultó mucho más fácil hablar cara a cara que a través de mensajes de texto. El dueño del coche explicó que había tenido un problema con la rueda esa noche y que por eso había aparcado mal, algo que nunca había mencionado en el grupo. El vecino que se había quejado se disculpó al enterarse de la razón.",
          "Juntos, decidieron crear unas normas claras y sencillas para el uso del garaje, y también acordaron algo importante sobre el propio grupo de WhatsApp: usarlo solo para avisos útiles, y resolver los desacuerdos personales en persona, no por mensaje. \"Es más fácil malinterpretar un mensaje escrito que una conversación real\", comentó Carmen.",
          "Desde entonces, el ambiente en el edificio mejoró notablemente. El grupo de WhatsApp volvió a ser lo que había sido al principio: un lugar útil para avisos importantes. Y cuando surgía algún problema entre vecinos, la mayoría prefería tocar una puerta y hablar, en lugar de escribir un mensaje que pudiera malinterpretarse."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "What started the conflict in the building's WhatsApp group?",
        "options": [
          "A complaint about noise",
          "A complaint about a badly parked car",
          "A dispute over unpaid fees",
          "A disagreement about pets"
        ],
        "correctIndex": 1,
        "explanation": "It began when \"alguien escribió un mensaje quejándose de que un vecino dejaba su coche mal aparcado en el garaje\"."
      },
      {
        "type": "multiple-choice",
        "question": "What did Carmen propose to calm the situation down?",
        "options": [
          "Deleting the WhatsApp group entirely",
          "An in-person meeting instead of arguing in the chat",
          "Fining whoever complained the most",
          "Ignoring the messages completely"
        ],
        "correctIndex": 1,
        "explanation": "She proposed \"que organicemos una reunión presencial para hablar de las normas del garaje, en vez de seguir escribiendo mensajes\"."
      },
      {
        "type": "multiple-choice",
        "question": "What turned out to be the real reason for the bad parking?",
        "options": [
          "He was in a hurry for work",
          "He had a problem with his tire that night",
          "He didn't know the parking rules",
          "His car was broken permanently"
        ],
        "correctIndex": 1,
        "explanation": "He explained \"que había tenido un problema con la rueda esa noche y que por eso había aparcado mal\"."
      },
      {
        "type": "multiple-choice",
        "question": "What new rule did the neighbors agree on for the WhatsApp group?",
        "options": [
          "No one could post more than once a day",
          "Use it only for useful notices and resolve disagreements in person",
          "Only Carmen could post messages",
          "The group would be deleted after the meeting"
        ],
        "correctIndex": 1,
        "explanation": "They agreed to \"usarlo solo para avisos útiles, y resolver los desacuerdos personales en persona, no por mensaje\"."
      }
    ]
  },
  {
    "slug": "las-fotos-perfectas",
    "level": "B1",
    "number": 99,
    "title": "Las fotos perfectas",
    "summary": "An exhausted young influencer decides to post something real for the first time, and discovers she isn't alone in her struggle.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Valentina llevaba dos años publicando fotos y vídeos en sus redes sociales, y poco a poco había conseguido miles de seguidores que admiraban su vida aparentemente perfecta. Cada foto que subía mostraba viajes, ropa nueva o comidas elegantes, cuidadosamente organizadas antes de tomar la imagen. Lo que sus seguidores no sabían era cuánto tiempo y esfuerzo se necesitaba para crear esa imagen de perfección.",
          "Una tarde, mientras preparaba una foto para promocionar un producto, se dio cuenta de que llevaba más de una hora repitiendo la misma pose, buscando la luz perfecta. Se sintió agotada, no físicamente, sino de una manera distinta, más profunda. Empezó a preguntarse si realmente disfrutaba de lo que hacía o si solo actuaba para complacer a un público que nunca veía.",
          "Esa noche, no pudo dormir bien, pensando en cuánto se había alejado de su vida real desde que empezó a dedicarse a las redes sociales por completo. Recordó que antes de tener tantos seguidores, disfrutaba simplemente de salir con amigos sin pensar en si debía fotografiar el momento. Ahora, en cambio, cada experiencia parecía existir solo para ser publicada.",
          "Decidió hablar con su hermana, que siempre le daba consejos honestos. \"Es normal que sientas esto\", le dijo su hermana, \"porque llevas mucho tiempo mostrando solo una parte de tu vida. Ojalá te atrevas a mostrar algo más real de vez en cuando\". Valentina escuchó el consejo con atención, aunque le daba miedo la reacción de sus seguidores.",
          "Unos días después, decidió publicar algo distinto: una foto sin editar, tomada por la mañana, en la que se la veía cansada y sin maquillaje, junto a un texto en el que explicaba cómo se había sentido últimamente. Le temblaban las manos al presionar el botón de publicar, temiendo que la gente dejara de seguirla.",
          "Para su sorpresa, la respuesta fue completamente distinta a lo que esperaba. Cientos de comentarios llegaron en pocas horas, muchos de seguidores que le agradecían su honestidad y que compartían que ellos también sentían presión por mostrar vidas perfectas en internet. Valentina entendió que no era la única persona que se sentía así.",
          "A partir de ese momento, empezó a publicar con más naturalidad, mezclando momentos cuidados con otros más espontáneos y reales. Algunos seguidores se fueron, es cierto, pero los que se quedaron parecían conectar con ella de una manera más profunda que antes. Valentina se sintió, por primera vez en mucho tiempo, más libre.",
          "Meses después, dio una pequeña charla en un instituto sobre el uso responsable de las redes sociales. \"Es importante que recuerden que lo que se ve en una pantalla casi nunca es la historia completa\", les dijo a los estudiantes. \"Las fotos pueden ser perfectas, pero las personas detrás de ellas no lo son, y está bien que así sea\"."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "What made Valentina feel deeply exhausted one afternoon?",
        "options": [
          "A long day at a second job",
          "Spending over an hour repeating the same pose to get the perfect light",
          "An argument with her sister",
          "Losing followers suddenly"
        ],
        "correctIndex": 1,
        "explanation": "She had spent \"más de una hora repitiendo la misma pose, buscando la luz perfecta\" and felt exhausted in a deeper way."
      },
      {
        "type": "multiple-choice",
        "question": "What did Valentina's sister advise her to do?",
        "options": [
          "Quit social media completely",
          "Dare to show something more real sometimes",
          "Hire someone to manage her account",
          "Post even more frequently"
        ],
        "correctIndex": 1,
        "explanation": "Her sister said: \"Ojalá te atrevas a mostrar algo más real de vez en cuando\"."
      },
      {
        "type": "multiple-choice",
        "question": "How did followers respond to Valentina's honest, unedited post?",
        "options": [
          "Most of them unfollowed her immediately",
          "Many thanked her for her honesty and said they felt similar pressure",
          "No one noticed the post",
          "They demanded she delete it"
        ],
        "correctIndex": 1,
        "explanation": "\"Muchos de seguidores que le agradecían su honestidad y que compartían que ellos también sentían presión por mostrar vidas perfectas\"."
      },
      {
        "type": "multiple-choice",
        "question": "What message did Valentina share with students during her talk?",
        "options": [
          "Everyone should become an influencer",
          "What you see on a screen is rarely the whole story",
          "Social media should be banned for teenagers",
          "Perfect photos always tell the truth"
        ],
        "correctIndex": 1,
        "explanation": "She told them: \"lo que se ve en una pantalla casi nunca es la historia completa\"."
      }
    ]
  },
  {
    "slug": "llamadas-de-los-domingos",
    "level": "B1",
    "number": 100,
    "title": "Las llamadas de los domingos",
    "summary": "A mother working abroad and her teenage daughter must relearn how to truly connect during their weekly video calls.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Carmen se había mudado a Alemania hacía ocho meses para trabajar cuidando a personas mayores, un empleo que pagaba mucho mejor que cualquier cosa que había encontrado en su país. Su hija Sofía, de catorce años, se había quedado viviendo con la abuela mientras Carmen enviaba dinero cada mes para sus estudios. Habían acordado hablar todos los domingos por videollamada, sin falta.",
          "Al principio, las llamadas duraban una hora o más: Sofía le contaba todo lo que había pasado en la semana, sus exámenes, sus amigas, incluso los chismes del colegio. Carmen escuchaba con atención, aunque a veces la conexión a internet fallaba y las palabras se cortaban en momentos importantes. Con el tiempo, sin embargo, las llamadas empezaron a acortarse.",
          "Un domingo, Sofía apareció en la pantalla con el teléfono en una mano y respondiendo mensajes con la otra, apenas mirando a la cámara. Carmen sintió una tristeza profunda al notar que su hija parecía distraída, casi ausente. \"¿Puedes dejar el teléfono un momento?\" le pidió Carmen, tratando de no sonar demasiado dura. \"Solo tenemos esta hora a la semana\".",
          "Sofía, algo irritada, respondió que tenía muchas cosas que hacer y que no siempre podía dedicarle toda su atención a la llamada. Carmen sintió que se le formaba un nudo en la garganta, pero prefirió no discutir en ese momento. Colgaron la llamada antes de lo habitual, y ninguna de las dos se sintió bien después.",
          "Esa semana, Carmen pensó mucho en la situación mientras trabajaba. Entendía que Sofía era una adolescente con su propia vida, pero también echaba muchísimo de menos formar parte de su día a día. Decidió escribirle una carta, algo que no había hecho desde que Sofía era pequeña, en la que le explicaba cuánto la extrañaba y por qué esas llamadas eran tan importantes para ella.",
          "Cuando Sofía recibió la carta por correo, la leyó varias veces en su habitación. Se dio cuenta de que, aunque hablaba con su madre casi todos los domingos, en realidad no le prestaba la atención que ella merecía. Sintió vergüenza al pensar en las últimas llamadas, en las que apenas había mirado a la pantalla.",
          "El domingo siguiente, Sofía dejó el teléfono en otra habitación antes de empezar la videollamada. Le contó a su madre, con más detalle que en semanas anteriores, cómo se sentía viviendo sin ella, lo mucho que la extrañaba y lo difícil que era a veces no tenerla cerca. Carmen, emocionada, le prometió que, en cuanto pudiera ahorrar suficiente dinero, viajaría a casa para pasar las vacaciones juntas.",
          "Desde ese domingo, ambas se esforzaron por hacer de esas llamadas un momento especial, sin distracciones. Acordaron proteger siempre ese momento semanal, sin importar la distancia que las separaba. Para Sofía, aprender a valorar esa hora se convirtió en una manera de sentir a su madre un poco más cerca, a pesar de los kilómetros que las separaban."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "Why had Carmen moved to Germany?",
        "options": [
          "To study at a university",
          "To work caring for elderly people, for better pay",
          "To join her husband",
          "To open her own business"
        ],
        "correctIndex": 1,
        "explanation": "She moved \"para trabajar cuidando a personas mayores, un empleo que pagaba mucho mejor que cualquier cosa que había encontrado en su país\"."
      },
      {
        "type": "multiple-choice",
        "question": "What changed about the Sunday video calls over time?",
        "options": [
          "They became longer and more detailed",
          "They got shorter as Sofía grew distracted by her phone",
          "They stopped happening altogether",
          "They moved to a different day"
        ],
        "correctIndex": 1,
        "explanation": "Sofía \"apareció en la pantalla con el teléfono en una mano y respondiendo mensajes con la otra, apenas mirando a la cámara\", and the calls became shorter."
      },
      {
        "type": "multiple-choice",
        "question": "What did Carmen do to express how she felt about the distant calls?",
        "options": [
          "She stopped calling for a month",
          "She wrote her daughter a letter",
          "She asked the grandmother to intervene",
          "She flew home immediately"
        ],
        "correctIndex": 1,
        "explanation": "\"Decidió escribirle una carta... en la que le explicaba cuánto la extrañaba y por qué esas llamadas eran tan importantes para ella\"."
      },
      {
        "type": "multiple-choice",
        "question": "What did Sofía do differently on the following Sunday?",
        "options": [
          "She canceled the call",
          "She left her phone in another room during the call",
          "She invited a friend to join the call",
          "She asked to shorten the calls further"
        ],
        "correctIndex": 1,
        "explanation": "\"Sofía dejó el teléfono en otra habitación antes de empezar la videollamada\" and talked to her mother with more attention."
      }
    ]
  },
  {
    "slug": "mensaje-de-la-aplicacion",
    "level": "B1",
    "number": 101,
    "title": "Un mensaje de la aplicación",
    "summary": "After many disappointing matches, a man finally connects with someone whose honesty matches her online profile.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Andrés llevaba casi un año sin tener ninguna cita, ocupado entre el trabajo y la mudanza a un piso nuevo. Sus amigos lo animaron a instalar una aplicación de citas, asegurándole que era la mejor manera de conocer gente en una ciudad grande. Al principio, se sintió incómodo creando un perfil, eligiendo fotos y escribiendo una breve descripción de sí mismo.",
          "Durante las primeras semanas, tuvo varias conversaciones que nunca llegaron a nada. Algunas personas dejaban de responder de repente, y otras parecían muy distintas de como se mostraban en sus fotos. Andrés empezó a pensar que quizás la aplicación no era para él, aunque decidió darle una oportunidad más antes de borrarla definitivamente.",
          "Entonces apareció el perfil de Laura, una chica que trabajaba como enfermera y que, en su descripción, había escrito algo que le hizo reír: \"Ojalá encuentre a alguien a quien no le moleste que hable de mi trabajo todo el tiempo\". Andrés le escribió un mensaje sencillo, comentando que a él tampoco le molestaría escuchar historias del hospital.",
          "Hablaron por mensajes durante casi dos semanas antes de decidirse a quedar en persona. Andrés estaba nervioso; había tenido citas antes que resultaron muy distintas de lo que esperaba después de hablar tanto por la aplicación. \"Es normal que estés nervioso\", le dijo su hermana antes de salir. \"Solo sé tú mismo\".",
          "La cita fue en una cafetería tranquila del centro. Al principio, ambos estaban un poco callados, pero poco a poco la conversación fluyó con naturalidad, como si ya se conocieran de antes. Laura le contó historias divertidas de su trabajo en el hospital, y Andrés se dio cuenta de que se reía más de lo que se había reído en meses.",
          "Después de esa primera cita, siguieron viéndose regularmente. Andrés notó que, a diferencia de otras personas que había conocido por la aplicación, Laura era exactamente como se mostraba en sus mensajes: honesta, divertida y directa. Eso le dio confianza para abrirse también él, sin actuar ni fingir ser alguien distinto.",
          "Meses después, cuando alguien le preguntaba cómo se habían conocido, Andrés contaba la historia con una sonrisa, admitiendo que al principio no confiaba mucho en las aplicaciones de citas.",
          "\"Lo importante no es la aplicación\", decía siempre, \"sino estar dispuesto a mostrarte tal como eres, incluso cuando da miedo\". Laura y Andrés siguieron juntos, y lo que había empezado como un simple mensaje en una pantalla se convirtió en una relación real, construida sobre conversaciones honestas."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "Why did Andrés's friends convince him to try the dating app?",
        "options": [
          "It was the cheapest way to meet people",
          "It was, according to them, the best way to meet people in a big city",
          "His sister worked for the company",
          "He had already tried everything else"
        ],
        "correctIndex": 1,
        "explanation": "His friends assured him \"que era la mejor manera de conocer gente en una ciudad grande\"."
      },
      {
        "type": "multiple-choice",
        "question": "What made Andrés reach out to Laura specifically?",
        "options": [
          "A mutual friend introduced them",
          "Her profile description made him laugh, about wanting someone who wouldn't mind her talking about work",
          "She messaged him first",
          "They matched on a random swipe"
        ],
        "correctIndex": 1,
        "explanation": "Her profile said \"Ojalá encuentre a alguien a quien no le moleste que hable de mi trabajo todo el tiempo\", which made him laugh and message her."
      },
      {
        "type": "multiple-choice",
        "question": "What did Andrés notice was different about Laura compared to other people from the app?",
        "options": [
          "She never wanted to meet in person",
          "She was exactly as she seemed in her messages: honest, funny, and direct",
          "She only talked about her job",
          "She lived very far away"
        ],
        "correctIndex": 1,
        "explanation": "\"Laura era exactamente como se mostraba en sus mensajes: honesta, divertida y directa\"."
      },
      {
        "type": "multiple-choice",
        "question": "According to Andrés, what really matters in dating, regardless of the app?",
        "options": [
          "Having the most attractive photos",
          "Being willing to show yourself as you really are",
          "Never being nervous on a first date",
          "Choosing the most popular app"
        ],
        "correctIndex": 1,
        "explanation": "He said: \"Lo importante no es la aplicación... sino estar dispuesto a mostrarte tal como eres, incluso cuando da miedo\"."
      }
    ]
  },
  {
    "slug": "la-oficina-vacia",
    "level": "B1",
    "number": 102,
    "title": "La oficina vacía",
    "summary": "After years working from home, an employee must decide how he really feels about returning to the office.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Fernando llevaba casi tres años trabajando desde casa, desde que la empresa había cambiado su política durante una crisis sanitaria. Al principio, disfrutaba mucho de la libertad de no tener que desplazarse cada mañana y de poder organizar su propio horario. Con el tiempo, sin embargo, empezó a notar que pasaban días enteros en los que apenas hablaba con otra persona en voz alta.",
          "Su piso, que antes le parecía cómodo, ahora se sentía a veces como una jaula silenciosa. Trabajaba desde la mesa de la cocina, rodeado de las mismas paredes todos los días, y las videollamadas con sus compañeros, aunque frecuentes, no sustituían del todo el contacto real. Notaba que le costaba concentrarse y que se sentía más cansado que antes, a pesar de trabajar las mismas horas.",
          "Un día, la empresa anunció que, a partir del mes siguiente, todos los empleados debían volver a la oficina al menos tres días por semana. La noticia generó reacciones muy distintas entre sus compañeros: algunos se alegraron, mientras que otros protestaron, argumentando que perderían la flexibilidad que tanto valoraban.",
          "Fernando no sabía bien qué sentir. Por un lado, echaba de menos el contacto humano; por otro, temía perder la comodidad de trabajar en pijama y sin tener que pasar una hora en el transporte público cada día. \"Es normal que tengas sentimientos encontrados\", le dijo su jefa durante una reunión individual, \"a casi todo el equipo le pasa lo mismo\".",
          "El primer día que volvió a la oficina, Fernando se sorprendió de cuánto había cambiado el ambiente: había caras nuevas que solo conocía por videollamada, y la oficina, antes ruidosa, ahora tenía un diseño más abierto, pensado para fomentar la colaboración. Se sentó junto a un compañero al que apenas conocía en persona, y hablaron durante el almuerzo sobre proyectos que nunca habían discutido a fondo por videollamada.",
          "A lo largo de las semanas siguientes, Fernando notó algo que no esperaba: ciertas conversaciones espontáneas, esas que surgen simplemente por estar en el mismo espacio, resolvían problemas mucho más rápido que largas cadenas de mensajes escritos. También descubrió que extrañaba menos su casa de lo que había imaginado, porque los días en la oficina le daban una estructura que había perdido durante el trabajo remoto.",
          "Sin embargo, seguía valorando los días que trabajaba desde casa, sobre todo para tareas que requerían concentración total sin interrupciones. Llegó a la conclusión de que ni el trabajo completamente remoto ni la oficina de siempre eran la solución perfecta; lo ideal, para él, era un equilibrio entre ambos.",
          "Meses después, cuando un amigo le preguntó si prefería trabajar desde casa o en la oficina, Fernando respondió que ya no pensaba en términos tan extremos. \"Lo que de verdad importa\", dijo, \"no es el lugar donde trabajas, sino sentir que perteneces a un equipo de verdad, y eso a veces se construye mejor cara a cara\"."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "What began to bother Fernando after years of full remote work?",
        "options": [
          "His salary was too low",
          "The isolation, going entire days without speaking to anyone out loud",
          "His apartment was too small",
          "He missed traveling for work"
        ],
        "correctIndex": 1,
        "explanation": "He noticed \"pasaban días enteros en los que apenas hablaba con otra persona en voz alta\"."
      },
      {
        "type": "multiple-choice",
        "question": "How did his coworkers react to the return-to-office announcement?",
        "options": [
          "Everyone was thrilled",
          "Everyone quit immediately",
          "Reactions were mixed — some were happy, others upset about losing flexibility",
          "No one had any opinion"
        ],
        "correctIndex": 2,
        "explanation": "\"La noticia generó reacciones muy distintas entre sus compañeros: algunos se alegraron, mientras que otros protestaron\"."
      },
      {
        "type": "multiple-choice",
        "question": "What did Fernando notice once he was back in the office?",
        "options": [
          "Nothing had changed at all",
          "Spontaneous conversations solved problems faster than message chains",
          "He preferred working alone in silence",
          "The office was completely empty"
        ],
        "correctIndex": 1,
        "explanation": "He noticed that \"ciertas conversaciones espontáneas... resolvían problemas mucho más rápido que largas cadenas de mensajes escritos\"."
      },
      {
        "type": "multiple-choice",
        "question": "What conclusion did Fernando reach about remote work versus the office?",
        "options": [
          "Remote work is always better",
          "The office is always better",
          "A balance between both was ideal for him",
          "Neither option was worth considering"
        ],
        "correctIndex": 2,
        "explanation": "He concluded that \"ni el trabajo completamente remoto ni la oficina de siempre eran la solución perfecta; lo ideal, para él, era un equilibrio entre ambos\"."
      }
    ]
  },
  {
    "slug": "treinta-dias-sin-notificaciones",
    "level": "B1",
    "number": 103,
    "title": "Treinta días sin notificaciones",
    "summary": "A woman addicted to checking her phone tries a month-long digital detox and discovers what she had been missing.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Claudia revisaba su teléfono, en promedio, más de cien veces al día. Lo hacía casi sin pensar: al despertarse, mientras desayunaba, incluso en medio de conversaciones con amigos. Un domingo por la noche, mientras veía un documental sobre el uso excesivo de la tecnología, decidió hacer algo que le pareció casi imposible: pasar treinta días sin notificaciones en el teléfono.",
          "Al día siguiente, apagó todas las notificaciones de sus aplicaciones, dejando solo las llamadas y los mensajes de su familia más cercana. Los primeros días fueron extraños; sentía la necesidad constante de revisar el teléfono, aunque no hubiera ninguna razón real para hacerlo. \"Es normal que sientas ansiedad al principio\", le explicó una amiga que ya había intentado algo parecido. \"El cuerpo se acostumbra a esa recompensa rápida\".",
          "Durante la primera semana, Claudia notó que tenía mucho más tiempo del que pensaba. Sin las constantes interrupciones de las notificaciones, terminaba sus tareas en el trabajo más rápido y le sobraba tiempo por las tardes. Empezó a leer un libro que llevaba meses sin terminar, algo que antes le parecía imposible por falta de tiempo.",
          "A las dos semanas, sin embargo, llegó un momento difícil: se enteró, por una amiga y no por redes sociales, de que se había organizado una fiesta importante a la que no la habían invitado directamente por mensaje. Se sintió excluida y, por un momento, pensó en volver a activar todas las notificaciones. En vez de eso, decidió llamar a la amiga que organizaba la fiesta para preguntar directamente qué había pasado.",
          "Resultó que había sido un simple malentendido: la invitación se había enviado a un grupo antiguo del que Claudia ya no formaba parte. El problema se resolvió con una llamada de cinco minutos, mucho más simple que quedarse mirando fotos de la fiesta en las redes sociales sin ningún contexto.",
          "Hacia el final del mes, Claudia se dio cuenta de que su relación con el teléfono había cambiado por completo. Ya no sentía la necesidad de revisarlo constantemente, y cuando lo hacía, era porque realmente quería hacerlo, no por costumbre. Sus conversaciones con amigos y familia, dijo ella, se habían vuelto más profundas, porque prestaba atención completa en vez de mirar la pantalla a la vez.",
          "Cuando terminaron los treinta días, Claudia tuvo que decidir si volvía a activar las notificaciones o si continuaba sin ellas. Decidió activar solo las más importantes, como los mensajes directos, pero mantuvo desactivadas las de las redes sociales, que eran las que más tiempo le habían robado. \"No se trata de vivir sin teléfono\", explicó a sus amigos, \"sino de que el teléfono no controle tu vida\".",
          "Meses después, Claudia seguía recomendando el reto a sus amigos, sobre todo a los que se sentían siempre distraídos por el teléfono. \"Prueba una semana sin notificaciones\", les decía, \"y verás cuánto tiempo recuperas\"."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "What inspired Claudia to start her thirty-day challenge?",
        "options": [
          "Her doctor recommended it",
          "Watching a documentary about excessive technology use",
          "She lost her phone for a week",
          "A friend dared her to do it"
        ],
        "correctIndex": 1,
        "explanation": "The idea came \"mientras veía un documental sobre el uso excesivo de la tecnología\"."
      },
      {
        "type": "multiple-choice",
        "question": "What almost made Claudia give up the challenge in week two?",
        "options": [
          "She missed an important work email",
          "She found out about a party she wasn't invited to via message, and felt excluded",
          "Her phone broke completely",
          "She got lost without GPS"
        ],
        "correctIndex": 1,
        "explanation": "She learned \"de que se había organizado una fiesta importante a la que no la habían invitado directamente por mensaje. Se sintió excluida\"."
      },
      {
        "type": "multiple-choice",
        "question": "How was the misunderstanding about the party resolved?",
        "options": [
          "She never found out what happened",
          "A five-minute phone call revealed the invite went to an old group she wasn't in anymore",
          "She showed up uninvited",
          "Her friend apologized in writing"
        ],
        "correctIndex": 1,
        "explanation": "\"El problema se resolvió con una llamada de cinco minutos\" — the invitation had gone to \"un grupo antiguo del que Claudia ya no formaba parte\"."
      },
      {
        "type": "multiple-choice",
        "question": "What did Claudia decide to do once the thirty days were over?",
        "options": [
          "Turn all notifications back on",
          "Keep only the most important notifications on, like direct messages, and leave social media off",
          "Delete her phone number",
          "Give up on the idea entirely"
        ],
        "correctIndex": 1,
        "explanation": "\"Decidió activar solo las más importantes, como los mensajes directos, pero mantuvo desactivadas las de las redes sociales\"."
      }
    ]
  },
  {
    "slug": "el-correo-sospechoso",
    "level": "B1",
    "number": 104,
    "title": "El correo sospechoso",
    "summary": "A man narrowly avoids a bank phishing scam and later helps his mother recognize a similar trick.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Ricardo estaba desayunando cuando recibió un correo electrónico que parecía ser de su banco. El mensaje decía que su cuenta había sido bloqueada por actividad sospechosa y que debía hacer clic en un enlace para verificar su identidad inmediatamente. El corazón le dio un vuelco; sin pensarlo mucho, abrió el enlace desde su teléfono.",
          "La página que se abrió parecía idéntica al sitio web de su banco: mismo logotipo, mismos colores, mismo diseño. Le pedía que introdujera su número de cuenta, su contraseña y el código de seguridad de su tarjeta. Justo cuando estaba a punto de escribir la contraseña, notó algo extraño en la dirección web: no terminaba como el sitio oficial del banco, sino con una serie de letras y números que no reconocía.",
          "Se detuvo de golpe, con el dedo todavía sobre la pantalla. Recordó que, en el trabajo, les habían explicado que nunca se debía introducir información bancaria a través de un enlace recibido por correo. Cerró la aplicación inmediatamente y decidió llamar directamente al número oficial del banco, el que tenía guardado desde hacía años, en vez de usar cualquier número que apareciera en el correo.",
          "La persona que atendió la llamada le confirmó lo que ya sospechaba: el banco nunca enviaba correos pidiendo contraseñas ni códigos de seguridad, y su cuenta no tenía ningún problema real. Era un intento de estafa, diseñado para parecer completamente oficial. Ricardo sintió un gran alivio, mezclado con cierto enfado por haber estado a punto de caer en la trampa.",
          "Esa misma tarde, decidió llamar a su madre, que también tenía cuenta en el mismo banco, para explicarle cómo reconocer este tipo de estafas. \"Revisa siempre bien la dirección del remitente\", le dijo, \"y nunca hagas clic en enlaces de correos inesperados, por muy oficiales que parezcan\".",
          "Dos semanas después, su madre lo llamó, un poco nerviosa, porque había recibido un mensaje de texto muy parecido, esta vez fingiendo ser de la empresa de electricidad. Gracias al consejo de Ricardo, se dio cuenta de inmediato de que algo no encajaba y no hizo clic en el enlace. En vez de eso, llamó a la empresa directamente para confirmar que todo estaba en orden.",
          "Ricardo se sintió muy orgulloso al ver que su madre había identificado la estafa tan rápido. Empezaron a hablar más seguido sobre seguridad digital, y Ricardo le explicó otros consejos básicos, como usar contraseñas diferentes para cada cuenta y activar la verificación en dos pasos en todas las cuentas importantes.",
          "Con el tiempo, tanto Ricardo como su madre se volvieron mucho más cuidadosos con los correos y mensajes que recibían. Él pensaba a menudo en lo cerca que había estado de perder el control de su cuenta bancaria aquella mañana. \"Basta un segundo de duda\", decía siempre, \"para evitar un problema mucho más grande\"."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "What did the suspicious email claim?",
        "options": [
          "That Ricardo had won a prize",
          "That his bank account had been blocked and he needed to verify his identity",
          "That his package was delayed",
          "That his subscription had expired"
        ],
        "correctIndex": 1,
        "explanation": "The email said \"su cuenta había sido bloqueada por actividad sospechosa y que debía hacer clic en un enlace para verificar su identidad\"."
      },
      {
        "type": "multiple-choice",
        "question": "What made Ricardo stop before entering his password?",
        "options": [
          "The page loaded too slowly",
          "He noticed the web address didn't match the bank's official site",
          "He got a phone call",
          "The page asked for too much information"
        ],
        "correctIndex": 1,
        "explanation": "He \"notó algo extraño en la dirección web: no terminaba como el sitio oficial del banco\"."
      },
      {
        "type": "multiple-choice",
        "question": "What did the bank confirm when Ricardo called?",
        "options": [
          "That there really was a problem with his account",
          "That the bank never emails asking for passwords or security codes, and it was a scam",
          "That he needed to visit a branch immediately",
          "That his card had already been used fraudulently"
        ],
        "correctIndex": 1,
        "explanation": "The bank confirmed \"el banco nunca enviaba correos pidiendo contraseñas ni códigos de seguridad\" and that it was \"un intento de estafa\"."
      },
      {
        "type": "multiple-choice",
        "question": "How did Ricardo's advice help his mother later on?",
        "options": [
          "It didn't help her at all",
          "She recognized a similar fake text message about an electricity company and avoided clicking it",
          "She stopped using her phone completely",
          "She changed banks"
        ],
        "correctIndex": 1,
        "explanation": "She received a fake message \"fingiendo ser de la empresa de electricidad\" and, \"Gracias al consejo de Ricardo, se dio cuenta de inmediato de que algo no encajaba y no hizo clic en el enlace\"."
      }
    ]
  },
  {
    "slug": "los-arboles-de-la-plaza",
    "level": "B1",
    "number": 105,
    "title": "Los árboles de la plaza",
    "summary": "When the city plans to cut down a neighborhood's old trees for a parking lot, a young woman organizes her neighbors to find a compromise.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "La plaza del barrio tenía diez árboles enormes que llevaban más de cincuenta años dando sombra a los vecinos. Un día, apareció un cartel del ayuntamiento anunciando que los árboles serían cortados para construir un aparcamiento nuevo, pensado para aliviar la falta de espacio para coches en la zona. La noticia dividió rápidamente al barrio entre quienes apoyaban el proyecto y quienes querían proteger los árboles.",
          "Valeria, una joven que había jugado bajo esos árboles de niña, se sintió indignada al leer el cartel. Esa misma tarde, empezó a hablar con sus vecinos, tocando puertas y explicando lo que planeaba hacer el ayuntamiento. Muchos compartían su preocupación, aunque algunos, sobre todo los que tenían dificultades para aparcar cada noche, entendían la necesidad de más espacio.",
          "Valeria decidió organizar una reunión en la plaza misma, bajo los árboles que querían proteger. \"Es importante que todos escuchemos las distintas opiniones antes de que se tome una decisión definitiva\", dijo al abrir la reunión. Muchos vecinos asistieron, algunos a favor del aparcamiento y otros completamente en contra.",
          "Durante la reunión, surgieron ideas interesantes. Un hombre mayor propuso buscar un terreno alternativo para el aparcamiento, lejos de los árboles de la plaza. Otra vecina sugirió reducir el número de plazas planeadas: así, el proyecto cortaría solo dos o tres árboles en vez de los diez.",
          "Con estas ideas recogidas, Valeria y un pequeño grupo de vecinos prepararon una propuesta formal para presentar en el ayuntamiento. Reunieron firmas de apoyo por todo el barrio y consiguieron más de quinientas en menos de una semana. \"Si el ayuntamiento ve que la comunidad está organizada, es más probable que consideren otras opciones\", explicó Valeria a los vecinos que la ayudaban.",
          "La reunión con el ayuntamiento fue tensa al principio. El representante municipal explicó que el proyecto ya estaba aprobado y que cambiarlo por completo sería complicado. Sin embargo, después de escuchar la propuesta de reducir el número de árboles cortados y de buscar espacio adicional en un terreno cercano que estaba sin uso, aceptó revisar el plan.",
          "Tres semanas después, el ayuntamiento anunció una versión modificada del proyecto: se construiría un aparcamiento más pequeño, usando parte del terreno cercano, y solo se cortarían dos árboles, los que estaban más dañados por una enfermedad que ya afectaba sus raíces. Los demás árboles de la plaza se quedarían exactamente donde siempre habían estado.",
          "El día en que empezaron las obras, Valeria fue a observar, un poco nerviosa todavía. Cuando vio que los ocho árboles principales permanecían intactos, sintió un gran alivio. Aprendió que, cuando los vecinos se organizan y proponen soluciones concretas en vez de solo quejarse, es más fácil que las autoridades escuchen y cambien de opinión."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "Why did the city hall want to cut down the trees in the plaza?",
        "options": [
          "The trees were diseased and dangerous",
          "To build a new parking lot",
          "To widen the street",
          "To build a new school"
        ],
        "correctIndex": 1,
        "explanation": "The sign announced that the trees \"serían cortados para construir un aparcamiento nuevo\"."
      },
      {
        "type": "multiple-choice",
        "question": "What did Valeria organize in response to the announcement?",
        "options": [
          "A petition to fire the mayor",
          "A neighborhood meeting under the trees to discuss the plan",
          "A boycott of local businesses",
          "A lawsuit against the city"
        ],
        "correctIndex": 1,
        "explanation": "She organized \"una reunión en la plaza misma, bajo los árboles que querían proteger\"."
      },
      {
        "type": "multiple-choice",
        "question": "What compromise did the city hall finally agree to?",
        "options": [
          "Canceling the parking lot completely",
          "Building a smaller lot on nearby land and cutting only two damaged trees instead of ten",
          "Cutting all ten trees but planting new ones elsewhere",
          "Building the parking lot exactly as originally planned"
        ],
        "correctIndex": 1,
        "explanation": "The final plan was that \"se construiría un aparcamiento más pequeño, usando parte del terreno cercano, y solo se cortarían dos árboles\"."
      },
      {
        "type": "multiple-choice",
        "question": "What lesson did Valeria learn from the experience?",
        "options": [
          "Complaining loudly is the most effective strategy",
          "Organizing with concrete solutions makes it easier for authorities to listen and change their minds",
          "City hall never listens to residents",
          "It's better not to get involved in local issues"
        ],
        "correctIndex": 1,
        "explanation": "She learned that \"cuando los vecinos se organizan y proponen soluciones concretas en vez de solo quejarse, es más fácil que las autoridades escuchen y cambien de opinión\"."
      }
    ]
  },
  {
    "slug": "supermercado-sin-plastico",
    "level": "B1",
    "number": 106,
    "title": "El supermercado sin plástico",
    "summary": "A shop owner's dream of a plastic-free grocery store slowly wins over a skeptical neighborhood, one customer at a time.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Bea había soñado durante años con abrir una tienda distinta: un supermercado sin envases de plástico, donde los clientes llevaran sus propios recipientes para comprar arroz, pasta, detergente y muchos otros productos a granel. Después de ahorrar durante mucho tiempo y de pedir un pequeño préstamo, finalmente abrió las puertas de su tienda en una calle tranquila del barrio.",
          "Los primeros días fueron difíciles. Muchos vecinos pasaban por la puerta, miraban con curiosidad los grandes contenedores de cristal llenos de legumbres y cereales, pero seguían comprando en el supermercado grande de siempre, donde todo era más rápido y conocido. Bea empezaba a preocuparse de que su idea, tan importante para ella, no funcionara en un barrio acostumbrado a otra forma de comprar.",
          "Una vecina mayor, doña Pilar, entró un día solo por curiosidad. Le explicó a Bea que le parecía complicado tener que traer sus propios recipientes cada vez. Bea, con paciencia, le mostró cómo funcionaba el sistema: se pesaba el recipiente vacío primero, se llenaba con la cantidad deseada de producto, y luego se pagaba solo por el peso de lo que realmente se llevaba.",
          "Doña Pilar decidió probarlo con un poco de arroz y unas lentejas. Cuando volvió a casa, se dio cuenta de que había gastado menos dinero que en el supermercado habitual, porque solo pagaba por la cantidad exacta que necesitaba, sin desperdiciar nada. Contenta con la experiencia, empezó a recomendar la tienda a sus amigas del barrio.",
          "Poco a poco, gracias a recomendaciones como la de doña Pilar, más vecinos empezaron a visitar la tienda. Bea organizó pequeños talleres los sábados para enseñar a la gente cómo reducir el uso de plástico en casa, no solo en la compra de alimentos, sino también con productos de limpieza e higiene personal. \"Es importante que entendamos que cada pequeño cambio suma\", decía siempre durante estos talleres.",
          "No todo fue fácil, sin embargo. Algunos meses, Bea apenas ganaba lo suficiente para pagar el alquiler de la tienda, y llegó a dudar de si había tomado la decisión correcta al dejar su antiguo trabajo estable para abrir el negocio. Una amiga la animó a seguir adelante, recordándole cuántas personas del barrio ya habían cambiado sus hábitos de compra gracias a ella. Bea decidió continuar, aunque ajustó algunos precios para hacer la tienda más accesible.",
          "Un año después de la apertura, la tienda de Bea se había convertido en un punto de encuentro del barrio. Los vecinos no solo iban a comprar, sino también a intercambiar consejos sobre cómo vivir con menos plástico. Incluso el supermercado grande de la zona empezó a ofrecer una pequeña sección a granel, una idea que, según admitió su gerente, habían tomado directamente del ejemplo de la tienda de Bea.",
          "Bea, al ver esto, sintió que su pequeño negocio había logrado algo más grande de lo que había imaginado al principio: cambiar, poco a poco, la manera en que todo un barrio pensaba sobre el plástico y los residuos. \"No se trata de ser perfectos\", le decía a doña Pilar de vez en cuando, \"sino de intentarlo cada día un poco más\"."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "What kind of store did Bea open?",
        "options": [
          "A store that only sold plastic products",
          "A plastic-free store where customers bring their own containers for bulk goods",
          "A regular supermarket with lower prices",
          "An online-only grocery delivery service"
        ],
        "correctIndex": 1,
        "explanation": "She opened \"un supermercado sin envases de plástico, donde los clientes llevaran sus propios recipientes para comprar... productos a granel\"."
      },
      {
        "type": "multiple-choice",
        "question": "How does the payment system in Bea's store work?",
        "options": [
          "A flat fee no matter how much you buy",
          "You weigh the empty container, fill it, and pay only for the weight of the product",
          "You pay a monthly subscription",
          "Everything is free with a membership card"
        ],
        "correctIndex": 1,
        "explanation": "\"Se pesaba el recipiente vacío primero, se llenaba con la cantidad deseada de producto, y luego se pagaba solo por el peso de lo que realmente se llevaba\"."
      },
      {
        "type": "multiple-choice",
        "question": "What convinced doña Pilar to keep shopping at Bea's store?",
        "options": [
          "The store gave her a discount coupon",
          "She realized she spent less money because she only paid for what she needed",
          "Her friends pressured her to shop there",
          "The store was closer to her home"
        ],
        "correctIndex": 1,
        "explanation": "She noticed \"que había gastado menos dinero que en el supermercado habitual, porque solo pagaba por la cantidad exacta que necesitaba, sin desperdiciar nada\"."
      },
      {
        "type": "multiple-choice",
        "question": "What did the big neighborhood supermarket eventually do?",
        "options": [
          "It closed down due to competition",
          "It started offering its own bulk section, inspired by Bea's store",
          "It banned plastic bags entirely",
          "It bought Bea's store"
        ],
        "correctIndex": 1,
        "explanation": "\"El supermercado grande de la zona empezó a ofrecer una pequeña sección a granel, una idea que... habían tomado directamente del ejemplo de la tienda de Bea\"."
      }
    ]
  },
  {
    "slug": "la-caja-de-compost",
    "level": "B1",
    "number": 107,
    "title": "La caja de compost",
    "summary": "A school project about food waste changes one family's habits, starting with a skeptical father and a determined son.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Todo empezó con un proyecto escolar. Mateo, de trece años, tenía que investigar cuánta comida se desperdiciaba en su propia casa durante una semana, y presentar los resultados en clase de ciencias. Su profesora les había pedido anotar, cada día, todo lo que su familia tiraba a la basura sin comer.",
          "Al final de la semana, Mateo quedó impresionado por la cantidad de comida que su familia había desperdiciado: pan duro, verduras que se habían echado a perder en el frigorífico, arroz sobrante que nadie había querido recalentar. Le mostró la lista a su madre, Teresa, que se sorprendió tanto como él al ver todo junto.",
          "\"Deberíamos hacer algo con esto\", dijo Mateo, entusiasmado con la idea de mejorar su proyecto. Teresa estuvo de acuerdo y propuso empezar a hacer compost con los restos de comida, en vez de tirarlo todo a la basura normal. Buscaron información en internet sobre cómo construir una caja de compost sencilla para el pequeño patio de la casa.",
          "El padre de Mateo, Julio, se mostró escéptico al principio. \"¿No va a oler mal?\" preguntó, mirando con desconfianza la caja de madera que habían comprado. Teresa le explicó que, si se hacía correctamente, el compost no debía oler mal, y que además reducirían mucho la cantidad de basura que sacaban cada semana.",
          "Durante el primer mes, la familia tuvo que aprender qué restos de comida podían ponerse en la caja de compost y cuáles no. Mateo se convirtió en el experto de la casa, revisando en internet cada duda que surgía. \"No se debe echar carne ni productos lácteos\", explicaba a sus padres, \"solo restos de frutas, verduras, café y cáscaras de huevo\".",
          "Poco a poco, la caja de compost se convirtió en parte de la rutina diaria de la familia. Julio, que al principio dudaba del proyecto, terminó siendo quien más cuidaba la caja, revisándola cada tarde al volver del trabajo. Le sorprendía cuánto había cambiado su actitud hacia algo que, meses atrás, le parecía una pérdida de tiempo.",
          "Cuando Mateo presentó su proyecto final en clase, no solo mostró los datos de cuánta comida se había desperdiciado antes, sino también cuánto había disminuido después de empezar a compostar y de planificar mejor las comidas de la semana. Su profesora quedó tan impresionada que le pidió compartir la experiencia con el resto de la escuela.",
          "Meses después, varias familias del barrio, inspiradas por la presentación de Mateo, también habían empezado a hacer su propio compost. Teresa se sentía orgullosa al pensar que un simple proyecto escolar había cambiado tanto los hábitos de su familia, y de todo un pequeño rincón del barrio."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "What was Mateo's school project about?",
        "options": [
          "Recycling paper at school",
          "Tracking how much food his family wasted in a week",
          "Planting trees in the neighborhood",
          "Studying local wildlife"
        ],
        "correctIndex": 1,
        "explanation": "He had to \"investigar cuánta comida se desperdiciaba en su propia casa durante una semana\"."
      },
      {
        "type": "multiple-choice",
        "question": "What was Julio's initial reaction to the composting idea?",
        "options": [
          "He was immediately enthusiastic",
          "He was skeptical and worried it would smell bad",
          "He refused to let them try it",
          "He didn't notice the compost box at all"
        ],
        "correctIndex": 1,
        "explanation": "He asked, worried, \"¿No va a oler mal?\" and \"se mostró escéptico al principio\"."
      },
      {
        "type": "multiple-choice",
        "question": "What role did Mateo take on within the family?",
        "options": [
          "He refused to help after the project ended",
          "He became the household expert on what could and couldn't go in the compost",
          "He built the compost box alone without help",
          "He convinced the family to stop composting"
        ],
        "correctIndex": 1,
        "explanation": "\"Mateo se convirtió en el experto de la casa, revisando en internet cada duda que surgía\"."
      },
      {
        "type": "multiple-choice",
        "question": "What happened after Mateo presented his project at school?",
        "options": [
          "Nothing changed for anyone else",
          "His teacher asked him to share the experience with the whole school, and other families started composting too",
          "The school banned the project topic",
          "His family stopped composting"
        ],
        "correctIndex": 1,
        "explanation": "\"Su profesora quedó tan impresionada que le pidió compartir la experiencia con el resto de la escuela\", and \"varias familias del barrio... también habían empezado a hacer su propio compost\"."
      }
    ]
  },
  {
    "slug": "la-energia-del-futuro",
    "level": "B1",
    "number": 108,
    "title": "La energía del futuro",
    "summary": "A newly graduated engineer must win over a skeptical veteran technician while bringing solar power to a rural school.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Iris se graduó como ingeniera y, apenas dos semanas después, consiguió su primer trabajo en una pequeña empresa dedicada a instalar paneles solares en pueblos y barrios que hasta entonces dependían completamente de la electricidad tradicional. Estaba emocionada, aunque también un poco nerviosa: era su primer proyecto real fuera de la universidad.",
          "Su primer encargo consistió en ayudar a instalar paneles solares en una escuela rural que sufría cortes de electricidad constantes, sobre todo durante las tormentas de verano. El director de la escuela le explicó que, sin electricidad estable, los ordenadores y las luces dejaban de funcionar con frecuencia, lo que afectaba directamente a las clases de los niños.",
          "En el equipo de trabajo también estaba Rogelio, un técnico con más de veinte años de experiencia en electricidad tradicional. Al principio, Rogelio se mostraba desconfiado con las ideas de Iris, y a menudo cuestionaba sus cálculos delante de los demás compañeros. \"En mis tiempos, esto se hacía de otra manera\", repetía con frecuencia, sin mucho entusiasmo por los cambios.",
          "Iris intentó no tomárselo como algo personal, aunque a veces le costaba mantener la calma. Decidió que la mejor manera de ganarse el respeto de Rogelio era demostrando, con hechos, que sus cálculos eran correctos. Cada noche, revisaba sus planes varias veces, buscando cualquier error posible antes de presentarlos al equipo.",
          "Durante la instalación, surgió un problema técnico complicado: el tejado de la escuela no tenía la inclinación ideal para los paneles solares, lo que reducía la cantidad de energía que podrían generar. Rogelio insistía en que el proyecto necesitaba más paneles de los planeados, lo que aumentaría mucho el costo total.",
          "Iris propuso una solución distinta: instalar los paneles con una estructura especial que ajustara el ángulo, en vez de simplemente añadir más unidades. Rogelio pensaba que probablemente esa estructura no funcionaría tan bien como predecían los cálculos de Iris, pero, ante la falta de otra opción mejor, aceptó probarlo.",
          "La instalación con la nueva estructura funcionó mejor de lo esperado: los paneles generaban suficiente energía incluso en días nublados, gracias al ángulo ajustado. Cuando la escuela finalmente tuvo electricidad estable por primera vez en años, el director organizó una pequeña celebración con los estudiantes y los profesores.",
          "Rogelio, al ver los resultados, se acercó a Iris al final de la celebración. \"Tenías razón con lo de la estructura\", admitió, algo incómodo pero sincero. \"Todavía me queda mucho que aprender de la nueva generación\". Iris sonrió y le respondió que ella también había aprendido muchísimo de su experiencia durante el proyecto. Desde entonces, trabajaron juntos en varios proyectos más, combinando la experiencia de Rogelio con las ideas nuevas de Iris."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "What was Iris's first real project as an engineer?",
        "options": [
          "Designing wind turbines in a city",
          "Installing solar panels at a rural school with frequent power outages",
          "Repairing electrical wires in an office building",
          "Building a new university lab"
        ],
        "correctIndex": 1,
        "explanation": "Her first assignment was \"ayudar a instalar paneles solares en una escuela rural que sufría cortes de electricidad constantes\"."
      },
      {
        "type": "multiple-choice",
        "question": "How did Rogelio initially treat Iris's ideas?",
        "options": [
          "With immediate enthusiasm and support",
          "With distrust, often questioning her calculations in front of others",
          "He refused to work on the project at all",
          "He asked to be transferred to another team"
        ],
        "correctIndex": 1,
        "explanation": "\"Rogelio se mostraba desconfiado con las ideas de Iris, y a menudo cuestionaba sus cálculos delante de los demás compañeros\"."
      },
      {
        "type": "multiple-choice",
        "question": "What technical problem came up during the installation?",
        "options": [
          "The school had no budget for the project",
          "The roof didn't have the ideal angle for the solar panels",
          "The panels arrived broken",
          "There was no sunlight in the area"
        ],
        "correctIndex": 1,
        "explanation": "\"El tejado de la escuela no tenía la inclinación ideal para los paneles solares, lo que reducía la cantidad de energía que podrían generar\"."
      },
      {
        "type": "multiple-choice",
        "question": "What solution did Iris propose instead of Rogelio's idea of adding more panels?",
        "options": [
          "Canceling the project entirely",
          "A special structure that adjusted the angle of the panels",
          "Moving the school to a different building",
          "Using only traditional electricity"
        ],
        "correctIndex": 1,
        "explanation": "\"Iris propuso una solución distinta: instalar los paneles con una estructura especial que ajustara el ángulo, en vez de simplemente añadir más unidades\"."
      }
    ]
  },
  {
    "slug": "la-mochila-que-pesaba-menos",
    "level": "B1",
    "number": 109,
    "title": "La mochila que pesaba menos",
    "summary": "A woman walking the Camino de Santiago alone learns that carrying less might mean living better.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Elena tenía veintiocho años cuando decidió caminar el Camino de Santiago sola. Acababa de terminar una relación de seis años y necesitaba pensar en su vida. Compró unas botas nuevas, un mapa y una mochila enorme que llenó de cosas que probablemente no necesitaría. El primer día, mientras subía la primera colina, ya sentía que la mochila pesaba demasiado.",
          "Durante los primeros tres días, a Elena le dolían la espalda y los pies. Caminaba despacio y otros peregrinos la adelantaban sin esfuerzo. En un albergue de Pamplona conoció a Miguel, un hombre de sesenta años que había hecho el Camino cuatro veces. Miguel llevaba una mochila mucho más pequeña que la suya.",
          "No cargues lo que no necesitas, le dijo Miguel una noche, mientras cenaban juntos, el Camino te enseña eso rápido. Elena se rió, pero al día siguiente no pudo levantarse sin sentir dolor en los hombros. Empezó a pensar que quizás Miguel tenía razón.",
          "Esa tarde, Elena sacó todo lo que había en la mochila y lo puso sobre la cama del albergue. Decidió quedarse solo con lo que necesitaba de verdad: dos camisetas, un jersey, y poco más. Es importante que uno se dé cuenta de lo que realmente hace falta, pensó, y no de lo que da miedo perder. Regaló tres libros y un secador de pelo a otra peregrina.",
          "Elena nunca había caminado tanto en su vida, y por eso cada día era un descubrimiento. Con la mochila más ligera, sus pasos también se volvieron más ligeros. Hablaba con Miguel casi todas las tardes sobre su ex pareja, sobre su trabajo, sobre lo que quería hacer cuando volviera a casa. Él la escuchaba sin juzgarla y solo le hacía preguntas sencillas.",
          "Cuando por fin llegó a Santiago de Compostela, Elena lloró frente a la catedral. Había caminado casi ochocientos kilómetros y ahora se sentía diferente, más fuerte. He aprendido que no necesito tanto como pensaba, le escribió a su hermana esa noche. Si hubiera sabido esto antes, habría empezado el Camino mucho más ligera.",
          "Se dice que el Camino cambia a las personas, y en el caso de Elena eso fue completamente cierto. Volvió a casa con una mochila pequeña y con una idea muy clara: no quería volver a llenar su vida de cosas ni de relaciones que no le hacían bien. Ojalá todos pudiéramos aprender esa lección sin tener que caminar ochocientos kilómetros, pensó, sonriendo mientras deshacía la maleta por última vez."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "Why was Elena's backpack too heavy at the start of the trip?",
        "options": [
          "She packed things she probably didn't need",
          "She was carrying gifts for other pilgrims",
          "Miguel gave her his heavy bag to carry",
          "She had an injury that made everything feel heavier"
        ],
        "correctIndex": 0,
        "explanation": "The story says she packed \"una mochila enorme que llenó de cosas que probablemente no necesitaría\" (an enormous backpack she filled with things she probably wouldn't need)."
      },
      {
        "type": "multiple-choice",
        "question": "What advice does Miguel give Elena?",
        "options": [
          "Walk faster to keep up with the group",
          "Don't carry what you don't need",
          "Buy new boots before continuing",
          "Sleep more at each albergue"
        ],
        "correctIndex": 1,
        "explanation": "Miguel tells her, \"No cargues lo que no necesitas\" (Don't carry what you don't need), which becomes the turning point of the story."
      },
      {
        "type": "multiple-choice",
        "question": "What did Elena do with her extra belongings?",
        "options": [
          "She sold them at a market",
          "She mailed them back home",
          "She gave away books and a hair dryer to another pilgrim",
          "She threw them in the trash"
        ],
        "correctIndex": 2,
        "explanation": "The text states, \"Regaló tres libros y un secador de pelo a otra peregrina\" (She gave away three books and a hair dryer to another pilgrim)."
      },
      {
        "type": "multiple-choice",
        "question": "What lesson does Elena take home at the end of the story?",
        "options": [
          "She wants to keep traveling forever",
          "She wants to simplify her belongings and relationships",
          "She wants to become a tour guide",
          "She wants to open a hostel on the Camino"
        ],
        "correctIndex": 1,
        "explanation": "The story explains she \"no quería volver a llenar su vida de cosas ni de relaciones que no le hacían bien\" (didn't want to fill her life again with things or relationships that weren't good for her)."
      }
    ]
  },
  {
    "slug": "el-maraton-de-los-cuarenta",
    "level": "B1",
    "number": 110,
    "title": "El maratón de los cuarenta",
    "summary": "A man turning forty decides to run his first marathon to prove to himself that midlife can be a beginning, not an end.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Cuando Andrés cumplió cuarenta años, no sintió ganas de celebrar. Su médico le había dicho que el colesterol estaba muy alto y que debía hacer más ejercicio. Andrés nunca había corrido más de diez minutos seguidos, pero esa noche, después de la fiesta, tomó una decisión: correría un maratón antes de cumplir los cuarenta y uno.",
          "Al principio, correr era un desastre. Le costaba respirar después de cinco minutos y sus piernas le dolían durante días. Su esposa, Lucía, le dijo: empieza poco a poco, no corras tan rápido el primer mes. Andrés hizo caso y bajó el ritmo, y poco a poco empezó a notar cambios.",
          "Se apuntó a un grupo de corredores que se reunía los sábados en el parque. Allí conoció a personas de todas las edades que también habían empezado tarde. Es normal que al principio te sientas ridículo, le dijo una compañera del grupo, todos hemos pasado por eso. Con el grupo, correr se volvió menos solitario y más divertido.",
          "Después de tres meses, Andrés ya podía correr diez kilómetros sin parar. Había perdido peso y dormía mejor que antes. Nunca había imaginado que correr pudiera hacerlo sentir tan bien, ni física ni mentalmente. Lo que más le sorprendía era lo mucho que había cambiado su forma de pensar sobre sí mismo.",
          "Sin embargo, dos semanas antes del maratón, Andrés se lesionó el tobillo durante un entrenamiento. El médico le recomendó que no corriera durante diez días. Andrés estaba desesperado: si no entrenaba, temía no poder terminar la carrera. Su entrenador le dijo: descansa ahora, o te arrepentirás después.",
          "El día del maratón llegó por fin, y Andrés se puso al lado de miles de corredores en la línea de salida. Los primeros veinte kilómetros fueron bien, pero después el cansancio y el dolor del tobillo lo hicieron dudar. Si dejara de correr ahora, pensó, nunca me lo perdonaría. Siguió corriendo, paso a paso, hasta que vio la línea de meta.",
          "Andrés cruzó la meta en cinco horas y veinte minutos, mucho más lento de lo que había imaginado al principio. Pero cuando abrazó a Lucía después de la carrera, no le importó el tiempo. He hecho algo que nunca pensé que podría hacer, le dijo, llorando de cansancio y de alegría. Ojalá hubiera empezado a correr mucho antes, pero ahora sabía que nunca era demasiado tarde para empezar de nuevo."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "Why did Andrés decide to run a marathon?",
        "options": [
          "His doctor said his cholesterol was high and he needed exercise",
          "He wanted to win prize money",
          "His wife challenged him to a bet",
          "He lost a bet with his coworkers"
        ],
        "correctIndex": 0,
        "explanation": "The story says \"su médico le había dicho que el colesterol estaba muy alto y que debía hacer más ejercicio\" (his doctor had told him his cholesterol was very high and he needed more exercise)."
      },
      {
        "type": "multiple-choice",
        "question": "What happened two weeks before the marathon?",
        "options": [
          "He quit training entirely",
          "He injured his ankle during a training session",
          "He got sick with the flu",
          "He moved to another city for work"
        ],
        "correctIndex": 1,
        "explanation": "The text states \"Andrés se lesionó el tobillo durante un entrenamiento\" (Andrés injured his ankle during a training session)."
      },
      {
        "type": "multiple-choice",
        "question": "What did his coach tell him about the injury?",
        "options": [
          "\"Rest now, or you'll regret it later\"",
          "\"Keep running through the pain\"",
          "\"You should give up the marathon\"",
          "\"See a different doctor immediately\""
        ],
        "correctIndex": 0,
        "explanation": "His coach says, \"Descansa ahora, o te arrepentirás después\" (Rest now, or you'll regret it later)."
      },
      {
        "type": "multiple-choice",
        "question": "How did Andrés feel crossing the finish line, despite his slow time?",
        "options": [
          "Disappointed in himself",
          "Indifferent about the whole race",
          "Proud and happy",
          "Angry that he was so slow"
        ],
        "correctIndex": 2,
        "explanation": "The story says \"no le importó el tiempo\" (the time didn't matter to him) and he was \"llorando de cansancio y de alegría\" (crying from exhaustion and joy)."
      }
    ]
  },
  {
    "slug": "las-manos-en-el-barro",
    "level": "B1",
    "number": 111,
    "title": "Las manos en el barro",
    "summary": "A stressed office worker discovers an unexpected passion for pottery that changes how she spends her evenings.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Carmen trabajaba doce horas al día en una oficina de contabilidad y, al llegar a casa, solo tenía energía para ver la televisión. Una amiga la invitó a probar una clase de cerámica los jueves por la noche. Carmen dudó al principio porque nunca había hecho nada artístico en su vida. Al final aceptó, sobre todo porque no quería decepcionar a su amiga.",
          "La primera clase fue un desastre. El barro se le escapaba de las manos y el jarrón que intentaba hacer se cayó dos veces. El profesor, un hombre paciente llamado Óscar, le dijo: no te preocupes, relaja las manos y deja que el barro se mueva contigo. Carmen se rió, pero decidió volver la semana siguiente.",
          "Con el paso de las semanas, algo cambió. Cuando Carmen se sentaba frente al torno, se olvidaba completamente del trabajo y de los correos sin contestar. Es raro que algo tan simple me haga sentir tan tranquila, le confesó a Óscar una noche. Él sonrió y le contestó que eso era exactamente lo que buscaba mucha gente en su clase.",
          "Después de dos meses, Carmen ya había hecho varios tazones y un plato que, aunque torcido, le encantaba. Lo que más le gustaba era que nadie esperaba perfección; el barro permitía errores y segundas oportunidades. Nunca había pensado que trabajar con las manos pudiera calmarla tanto como una hora de meditación.",
          "Un día, Óscar le propuso que presentara una pieza en la exposición anual del taller. Carmen se negó al principio, convencida de que sus piezas no eran lo suficientemente buenas para mostrarlas. Preséntala, insistió Óscar, aunque no sea perfecta, forma parte de tu proceso. Después de pensarlo varios días, Carmen aceptó.",
          "La noche de la exposición, Carmen llevó un jarrón azul con pequeñas imperfecciones en la superficie. Varias personas se acercaron a preguntarle sobre la pieza, y una mujer incluso quiso comprarla. Carmen no supo qué decir; nunca había imaginado que alguien pagaría por algo que ella había hecho con sus propias manos.",
          "Esa noche, mientras volvía a casa, Carmen pensó en cuánto había cambiado desde la primera clase. Si alguien me hubiera dicho hace un año que dejaría la oficina antes de tiempo para ir a hacer cerámica, no le habría creído. Ahora sabía que necesitaba esas horas con las manos en el barro tanto como necesitaba el sueldo de su trabajo."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "Why did Carmen start pottery classes?",
        "options": [
          "Her boss required it as team building",
          "A friend invited her and she didn't want to disappoint her",
          "She wanted a complete career change",
          "It was cheaper than seeing a therapist"
        ],
        "correctIndex": 1,
        "explanation": "The story says \"Una amiga la invitó...Al final aceptó, sobre todo porque no quería decepcionar a su amiga\" (A friend invited her...she accepted mainly because she didn't want to disappoint her friend)."
      },
      {
        "type": "multiple-choice",
        "question": "What did Carmen find valuable about working with clay?",
        "options": [
          "It earned her extra money",
          "It allowed mistakes and second chances",
          "It was faster than her office job",
          "It impressed her boss"
        ],
        "correctIndex": 1,
        "explanation": "The text explains \"el barro permitía errores y segundas oportunidades\" (the clay allowed for mistakes and second chances)."
      },
      {
        "type": "multiple-choice",
        "question": "What happened at the exhibition?",
        "options": [
          "Nobody noticed her piece",
          "A woman wanted to buy her vase",
          "She won first prize",
          "She accidentally broke her piece"
        ],
        "correctIndex": 1,
        "explanation": "The story states \"una mujer incluso quiso comprarla\" (a woman even wanted to buy it), referring to Carmen's vase."
      },
      {
        "type": "multiple-choice",
        "question": "What does the ending suggest about Carmen's transformation?",
        "options": [
          "She quit her office job entirely",
          "She found pottery as necessary to her as her salary",
          "She became a full-time professional potter",
          "She stopped going to work altogether"
        ],
        "correctIndex": 1,
        "explanation": "The final line says she \"necesitaba esas horas con las manos en el barro tanto como necesitaba el sueldo de su trabajo\" (needed those hours with her hands in clay as much as she needed her paycheck)."
      }
    ]
  },
  {
    "slug": "la-cena-de-los-martes",
    "level": "B1",
    "number": 112,
    "title": "La cena de los martes",
    "summary": "A lonely retiree begins volunteering at a soup kitchen and forms an unlikely friendship with a young man who eats there.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Desde que se jubiló, Ramón pasaba los días solo en su piso, sin mucho que hacer. Su hija le sugirió que se apuntara como voluntario en el comedor social del barrio, donde siempre necesitaban gente para cocinar y servir la cena. Ramón aceptó sin mucho entusiasmo, pensando que sería solo una manera de llenar las tardes de los martes.",
          "El primer martes, Ramón se puso un delantal y empezó a cortar verduras junto a otros voluntarios. La coordinadora le explicó las reglas: sirve con una sonrisa y trata a todos con respeto, sin importar su situación. Ramón, que había sido cocinero durante treinta años, se sintió útil por primera vez en meses.",
          "Entre las personas que iban a cenar cada semana, había un joven llamado Iker que siempre se sentaba solo, cerca de la puerta. Ramón notó que Iker apenas hablaba con nadie y que a veces se quedaba mirando el plato sin comer. Una noche, Ramón se sentó a su lado y le preguntó cómo estaba, algo que nadie parecía haberle preguntado en mucho tiempo.",
          "Poco a poco, Iker empezó a contarle su historia: había perdido su trabajo y, después, su piso, y ahora dormía en casa de un amigo. Es difícil que la gente entienda lo rápido que puede cambiar todo, le dijo Iker una noche. Ramón lo escuchaba sin interrumpir, recordando lo solo que él mismo se había sentido antes de empezar a ir al comedor.",
          "Ramón había trabajado toda su vida en restaurantes, así que le ofreció a Iker enseñarle algunas recetas básicas los sábados por la mañana. Al principio, Iker dudaba de que fuera capaz de aprender, pero Ramón insistió: prueba primero, ya verás que puedes. Con el tiempo, Iker empezó a ayudar también en la cocina del comedor los martes.",
          "Un día, un pequeño restaurante del barrio buscaba a alguien para trabajar en la cocina, y Ramón le habló de Iker al dueño, a quien conocía desde hacía años. Le dijeron a Iker que fuera a una entrevista, y esa misma semana consiguió el trabajo. Ramón nunca había sentido tanto orgullo por alguien que no fuera de su propia familia.",
          "Meses después, Iker seguía yendo al comedor los martes, pero ya no como comensal, sino como voluntario, igual que Ramón. Los dos cocinaban juntos, riéndose de sus propios errores en la cocina. Si alguien me hubiera dicho que un comedor social me daría un amigo así, no lo habría creído, pensaba Ramón cada martes, mientras cerraba la puerta del local."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "Why did Ramón start volunteering?",
        "options": [
          "He needed extra money",
          "His daughter suggested it because he was often alone and idle",
          "A friend forced him to sign up",
          "He wanted free meals every week"
        ],
        "correctIndex": 1,
        "explanation": "The story says \"Su hija le sugirió que se apuntara como voluntario\" (His daughter suggested he sign up as a volunteer) because he was alone with little to do."
      },
      {
        "type": "multiple-choice",
        "question": "What did Ramón notice about Iker?",
        "options": [
          "He was rude to the volunteers",
          "He always sat alone and sometimes didn't eat",
          "He stole food from the kitchen",
          "He never came back after the first night"
        ],
        "correctIndex": 1,
        "explanation": "The text describes Iker as someone who \"siempre se sentaba solo...a veces se quedaba mirando el plato sin comer\" (always sat alone...sometimes just stared at his plate without eating)."
      },
      {
        "type": "multiple-choice",
        "question": "How did Ramón help Iker beyond serving him dinner?",
        "options": [
          "He gave him cash directly",
          "He taught him cooking skills and helped him get a kitchen job",
          "He let Iker move into his apartment",
          "He paid Iker's rent for a year"
        ],
        "correctIndex": 1,
        "explanation": "Ramón \"le ofreció a Iker enseñarle algunas recetas básicas\" and later \"le habló de Iker al dueño\" of a restaurant, leading Iker to get hired that same week."
      },
      {
        "type": "multiple-choice",
        "question": "What is Iker's role at the soup kitchen by the end of the story?",
        "options": [
          "He stopped going entirely",
          "He became a volunteer alongside Ramón",
          "He became the head coordinator",
          "He opened his own restaurant"
        ],
        "correctIndex": 1,
        "explanation": "The final paragraph says Iker kept coming on Tuesdays \"ya no como comensal, sino como voluntario, igual que Ramón\" (no longer as a diner, but as a volunteer, just like Ramón)."
      }
    ]
  },
  {
    "slug": "el-autobus-equivocado",
    "level": "B1",
    "number": 113,
    "title": "El autobús equivocado",
    "summary": "A cautious traveler gets on the wrong bus in a foreign country and discovers an adventure she never planned.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Sofía viajaba sola por Portugal por primera vez y había planeado cada día del viaje con mucho cuidado. Llevaba un itinerario impreso, horarios de autobuses y reservas de hotel para cada noche. La mañana en que debía ir de Coímbra a Óbidos, subió rápido a un autobús que salía de la estación sin fijarse bien en el destino.",
          "Después de dos horas de viaje, Sofía se dio cuenta de que el paisaje no coincidía con lo que había visto en fotos de Óbidos. Le preguntó a la señora sentada a su lado adónde iba ese autobús, y la mujer le contestó, sorprendida, que iban camino de un pequeño pueblo llamado Piódão, en las montañas. Sofía sintió pánico: había subido al autobús equivocado.",
          "No te preocupes, le dijo la señora, viendo la cara de Sofía, Piódão es un pueblo precioso, no te vas a arrepentir. Sofía no tenía reserva de hotel allí ni sabía cómo volver a su ruta original ese mismo día. Respiró hondo y decidió que, ya que estaba allí, intentaría disfrutar del error en vez de luchar contra él.",
          "El pueblo, construido en la ladera de una montaña con casas de piedra oscura, era más bonito de lo que Sofía había imaginado. Encontró una pequeña posada donde una familia le ofreció una habitación por una noche y le sirvió una cena casera. Nunca había comido nada tan simple y tan bueno como aquella sopa, preparada con verduras del huerto de la casa.",
          "Esa noche, mientras cenaba, Sofía habló con el dueño de la posada sobre lo que la había llevado hasta allí. Es curioso que los mejores momentos de un viaje casi nunca estén en el plan, le dijo el hombre, riéndose. Sofía pensó que tenía razón: en tres días de viaje planeado no había sentido lo que sentía esa noche, perdida en un pueblo del que nunca había oído hablar.",
          "Al día siguiente, Sofía caminó por las calles empinadas del pueblo antes de tomar el autobús de vuelta hacia su ruta original. Se dio cuenta de que, si no se hubiera equivocado de autobús, jamás habría conocido Piódão ni a la familia que la había recibido como a una hija. Guardó el itinerario impreso en el fondo de la mochila y decidió no volver a mirarlo tanto.",
          "El resto del viaje, Sofía siguió visitando los lugares que había planeado, pero con una diferencia: dejaba tiempo libre cada día para lo inesperado. A veces se perdía a propósito por calles desconocidas, solo para ver qué encontraba. Aprendí que un error también puede ser un regalo, escribió en su diario de viaje esa última noche en Portugal."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "Why did Sofía end up in Piódão?",
        "options": [
          "She had planned to visit it all along",
          "She got on the wrong bus by mistake",
          "Her original hotel booking failed",
          "A friend recommended a detour"
        ],
        "correctIndex": 1,
        "explanation": "The story says \"Sofía sintió pánico: había subido al autobús equivocado\" (Sofía panicked: she had gotten on the wrong bus)."
      },
      {
        "type": "multiple-choice",
        "question": "How did Sofía initially react to being lost?",
        "options": [
          "She panicked",
          "She was completely indifferent",
          "She felt excited right away",
          "She called the police immediately"
        ],
        "correctIndex": 0,
        "explanation": "The text explicitly states \"Sofía sintió pánico\" (Sofía felt panic) when she realized her mistake."
      },
      {
        "type": "multiple-choice",
        "question": "What did the innkeeper say about travel plans?",
        "options": [
          "Plans are always necessary for a good trip",
          "The best moments of a trip are rarely in the plan",
          "Tourists should avoid small villages",
          "She should complain to the bus company"
        ],
        "correctIndex": 1,
        "explanation": "He tells her, \"los mejores momentos de un viaje casi nunca estén en el plan\" (the best moments of a trip are almost never part of the plan)."
      },
      {
        "type": "multiple-choice",
        "question": "How did the experience change Sofía's approach for the rest of the trip?",
        "options": [
          "She stopped traveling and went home",
          "She left free time each day for the unexpected",
          "She returned to Piódão instead of continuing",
          "She planned her days even more strictly"
        ],
        "correctIndex": 1,
        "explanation": "The story says she \"dejaba tiempo libre cada día para lo inesperado\" (left free time each day for the unexpected)."
      }
    ]
  },
  {
    "slug": "aprender-a-flotar",
    "level": "B1",
    "number": 114,
    "title": "Aprender a flotar",
    "summary": "A woman in her thirties finally confronts a childhood fear of water by taking swimming lessons.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Marisol tenía treinta y cuatro años y nunca había aprendido a nadar. De niña, había estado a punto de ahogarse en una piscina, y desde entonces evitaba cualquier lugar con agua profunda. Cuando sus amigas la invitaron a un viaje a la playa con actividades de kayak, Marisol se dio cuenta de que su miedo le estaba impidiendo vivir cosas que le gustaría vivir.",
          "Decidió apuntarse a clases de natación para adultos en la piscina municipal. El primer día, ni siquiera quiso meter la cabeza bajo el agua. La profesora, una mujer llamada Dolores, le dijo: no te obligues a nada, ve a tu ritmo, el agua no tiene prisa. Esas palabras la ayudaron a relajarse un poco.",
          "Durante las primeras semanas, Marisol solo practicaba cómo respirar cerca del borde de la piscina. Le daba vergüenza que los demás alumnos ya supieran flotar mientras ella seguía agarrada al bordillo. Es normal tener miedo después de una mala experiencia, le explicó Dolores, lo importante es que no dejes de intentarlo.",
          "Poco a poco, Marisol empezó a confiar más en el agua y en su propio cuerpo. Un día, Dolores le pidió que se dejara llevar boca arriba mientras ella la sostenía con una mano bajo la espalda. Cierra los ojos y respira, le dijo, yo no te voy a soltar hasta que tú quieras. Marisol cerró los ojos y, por primera vez en veinticinco años, sintió que el agua la sostenía en vez de tragarla.",
          "Esa noche, llamó a su madre llorando de alegría y le contó lo que había pasado en la piscina. Nunca había flotado en el agua desde aquel día en la piscina de niña, y ahora, por fin, lo había conseguido. Su madre, que recordaba bien el susto de aquel verano, también se emocionó al escucharla.",
          "Con el tiempo, Marisol aprendió a nadar varios largos seguidos sin parar. Dolores le decía siempre que confiara en lo que su cuerpo ya sabía hacer, que el miedo estaba solo en su cabeza. Si me hubieran dicho hace un año que nadaría en el mar, no lo habría creído, pensaba Marisol cada vez que se metía en la piscina.",
          "El día del viaje con sus amigas, Marisol se puso el chaleco salvavidas para el kayak, pero, para su propia sorpresa, no sintió el pánico de siempre. Al final de la tarde, se metió en el mar hasta la cintura y se dejó flotar bajo el sol. Aprender a flotar no fue solo aprender a nadar, pensó, fue aprender a confiar en mí misma otra vez."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "Why was Marisol afraid of water?",
        "options": [
          "She simply never learned as a child by choice",
          "She nearly drowned in a pool as a child",
          "She got seasick easily",
          "A movie about sharks frightened her"
        ],
        "correctIndex": 1,
        "explanation": "The story says she \"había estado a punto de ahogarse en una piscina\" (had nearly drowned in a pool) as a child."
      },
      {
        "type": "multiple-choice",
        "question": "What did swimming teacher Dolores emphasize?",
        "options": [
          "Swimming as fast as possible",
          "Going at her own pace, without forcing anything",
          "Competing with the other students",
          "Holding her breath as long as she could"
        ],
        "correctIndex": 1,
        "explanation": "Dolores tells her, \"no te obligues a nada, ve a tu ritmo\" (don't force yourself into anything, go at your own pace)."
      },
      {
        "type": "multiple-choice",
        "question": "What breakthrough moment does Marisol experience?",
        "options": [
          "She wins a swimming competition",
          "She floats on her back for the first time in 25 years",
          "She teaches another student to swim",
          "She buys her own kayak"
        ],
        "correctIndex": 1,
        "explanation": "The text says she \"sintió que el agua la sostenía en vez de tragarla\" (felt the water holding her up instead of swallowing her), the first time in 25 years."
      },
      {
        "type": "multiple-choice",
        "question": "What does Marisol do at the beach with her friends?",
        "options": [
          "She refuses to go near the water",
          "She floats in the sea without panicking",
          "She goes home early from the trip",
          "She only watches from the sand"
        ],
        "correctIndex": 1,
        "explanation": "The final paragraph says \"se metió en el mar hasta la cintura y se dejó flotar bajo el sol\" (she went into the sea up to her waist and let herself float under the sun)."
      }
    ]
  },
  {
    "slug": "la-banda-de-garaje",
    "level": "B1",
    "number": 115,
    "title": "La banda de garaje",
    "summary": "Four strangers who answer the same online ad form a band and discover that making music together means more than they expected.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Diego llevaba años tocando la guitarra solo en su habitación, sin atreverse nunca a tocar delante de otras personas. Un día vio un anuncio en una aplicación: se buscan músicos para formar una banda, no importa el nivel, solo las ganas. Después de pensarlo varios días, escribió un mensaje y quedó con los otros interesados en un garaje del barrio.",
          "Allí conoció a Nuria, una baterista que llevaba tres años sin tocar; a Pablo, un bajista tímido que casi no hablaba; y a Carla, una cantante que había estudiado música pero nunca había estado en una banda de verdad. Ninguno de los cuatro se conocía de antes, y al principio los ensayos eran torpes y llenos de silencios incómodos.",
          "Toquemos algo simple primero, no compliquemos las cosas, propuso Carla en el segundo ensayo. Empezaron con una canción conocida, fácil de tocar, y aunque sonó bastante mal, todos se rieron al terminar. Fue la primera vez que Diego tocó la guitarra delante de otras personas sin sentir que se moría de vergüenza.",
          "Con los meses, la banda mejoró mucho más de lo que cualquiera de ellos había imaginado. Empezaron a escribir canciones propias, algo que a Diego le parecía casi imposible al principio. Lo que más le gustaba de los ensayos era que, durante esas dos horas, se olvidaba completamente de sus problemas del trabajo.",
          "Nuria propuso que tocaran en un bar pequeño donde un amigo suyo organizaba noches de música en directo. Pablo se puso muy nervioso: no sé si estoy listo, nunca he tocado delante de desconocidos. Carla le contestó que todos habían sentido lo mismo la primera vez y que, aun así, debían intentarlo juntos.",
          "La noche del concierto, los cuatro estaban muertos de miedo detrás del escenario. Cuando por fin subieron y empezaron a tocar, Diego sintió que las manos le temblaban durante la primera canción. Pero para la tercera canción, algo cambió: el público empezó a moverse con la música y la banda, por fin, sonó como una banda de verdad.",
          "Después del concierto, los cuatro se abrazaron entre risas y nervios, todavía sin creer lo que acababan de hacer. Nunca habíamos tocado tan bien juntos, dijo Nuria, y los demás estuvieron de acuerdo. Esa noche decidieron seguir ensayando cada semana, porque habían descubierto algo que ninguno de ellos esperaba encontrar en un anuncio de internet: una verdadera amistad."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "How did the four band members meet?",
        "options": [
          "At a music school",
          "Through an online ad looking for musicians",
          "They were childhood friends",
          "At a family wedding"
        ],
        "correctIndex": 1,
        "explanation": "Diego saw \"un anuncio en una aplicación: se buscan músicos para formar una banda\" (an ad in an app: musicians wanted to form a band)."
      },
      {
        "type": "multiple-choice",
        "question": "How did Diego feel playing guitar in front of others for the first time?",
        "options": [
          "Completely confident",
          "Embarrassed, but he managed to do it anyway",
          "Bored by the experience",
          "Angry at his bandmates"
        ],
        "correctIndex": 1,
        "explanation": "The story notes it was \"la primera vez que Diego tocó la guitarra delante de otras personas sin sentir que se moría de vergüenza\" (the first time Diego played in front of others without feeling like he was dying of embarrassment)."
      },
      {
        "type": "multiple-choice",
        "question": "How did Pablo feel about performing at the bar?",
        "options": [
          "Excited from the very start",
          "Nervous and unsure he was ready",
          "Completely indifferent",
          "He refused to play at all"
        ],
        "correctIndex": 1,
        "explanation": "Pablo says, \"No sé si estoy listo, nunca he tocado delante de desconocidos\" (I don't know if I'm ready, I've never played in front of strangers)."
      },
      {
        "type": "multiple-choice",
        "question": "What did the band members gain beyond musical skill?",
        "options": [
          "A record deal",
          "A genuine friendship",
          "A large sum of money",
          "Widespread fame"
        ],
        "correctIndex": 1,
        "explanation": "The ending says they found \"algo que ninguno de ellos esperaba encontrar en un anuncio de internet: una verdadera amistad\" (something none of them expected to find in an online ad: a real friendship)."
      }
    ]
  },
  {
    "slug": "los-libros-para-rosa",
    "level": "B1",
    "number": 116,
    "title": "Los libros para Rosa",
    "summary": "A university student volunteers to teach an elderly woman to read, and learns as much from her as she teaches.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Valentina estudiaba magisterio en la universidad y, como parte de un programa de voluntariado, empezó a visitar a Rosa, una mujer de setenta y ocho años que nunca había aprendido a leer bien. Rosa había dejado la escuela de niña para trabajar en el campo y, aunque sabía reconocer algunas letras, le costaba mucho leer frases completas.",
          "El primer día, Valentina llegó con libros infantiles, pensando que serían los más fáciles para empezar. Rosa se sintió avergonzada: no quiero leer cuentos de niños, quiero leer el periódico como hace mi vecina. Valentina entendió que se había equivocado y cambió de plan para la siguiente visita.",
          "A partir de entonces, empezaron a trabajar con el periódico local y con cartas que Rosa había guardado durante años sin poder leer completamente. Es importante que aprendas con cosas que te interesen de verdad, le explicó Valentina, y Rosa asintió, mucho más animada que la primera semana.",
          "Cada martes por la tarde, Rosa y Valentina se sentaban en la cocina de la mujer mayor, rodeadas de café y galletas caseras. Rosa nunca había tenido tanta paciencia consigo misma como la que Valentina le pedía que tuviera. Lee esta frase despacio, no te preocupes si te equivocas, le repetía Valentina cada vez que Rosa dudaba.",
          "Después de tres meses, Rosa leyó sola, por primera vez en su vida, una carta que su nieto le había enviado desde otra ciudad. Lloró durante varios minutos sin poder hablar, mientras Valentina la abrazaba en silencio. Nunca pensé que a mis setenta y ocho años iba a poder leer una carta de mi nieto yo sola, le dijo finalmente.",
          "Valentina, por su parte, aprendió algo que ningún libro de la universidad le había enseñado: la paciencia y el valor de alguien que empieza de cero sin sentir vergüenza. Rosa le contaba historias de su vida en el campo, de cuando era joven, de las cosas que había vivido y que jamás había escrito porque no sabía cómo hacerlo.",
          "Un año después, Rosa había empezado a escribir, con letra insegura pero clara, un cuaderno con recuerdos de su vida para sus nietos. Ojalá hubiera aprendido esto hace cincuenta años, le dijo a Valentina un día, aunque también reconoció que nunca es tarde para aprender algo tan importante. Valentina supo entonces que aquel voluntariado le había cambiado la vida a las dos."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "Why was Rosa unable to read well?",
        "options": [
          "She had an untreated learning disability",
          "She left school as a child to work in the fields",
          "She refused to be taught by anyone",
          "She had lost her reading glasses"
        ],
        "correctIndex": 1,
        "explanation": "The story explains \"Rosa había dejado la escuela de niña para trabajar en el campo\" (Rosa had left school as a child to work in the fields)."
      },
      {
        "type": "multiple-choice",
        "question": "Why did Rosa reject the children's books Valentina first brought?",
        "options": [
          "They were too expensive",
          "She wanted to read the newspaper like her neighbor, not children's stories",
          "She couldn't see the pictures well",
          "They were written in the wrong language"
        ],
        "correctIndex": 1,
        "explanation": "Rosa says, \"No quiero leer cuentos de niños, quiero leer el periódico como hace mi vecina\" (I don't want to read children's stories, I want to read the newspaper like my neighbor does)."
      },
      {
        "type": "multiple-choice",
        "question": "What emotional milestone did Rosa reach after three months?",
        "options": [
          "She read a letter from her grandson alone for the first time",
          "She published a short story",
          "She started teaching another student",
          "She got a library card for the first time"
        ],
        "correctIndex": 0,
        "explanation": "The text says Rosa \"leyó sola, por primera vez en su vida, una carta que su nieto le había enviado\" (read alone, for the first time in her life, a letter her grandson had sent her)."
      },
      {
        "type": "multiple-choice",
        "question": "What did Rosa begin doing a year later?",
        "options": [
          "Teaching literacy classes to other elders",
          "Writing a notebook of memories for her grandchildren",
          "Attending school full-time",
          "Working as a professional translator"
        ],
        "correctIndex": 1,
        "explanation": "The story says Rosa \"había empezado a escribir...un cuaderno con recuerdos de su vida para sus nietos\" (had begun writing a notebook of memories from her life for her grandchildren)."
      }
    ]
  },
  {
    "slug": "la-cumbre-del-teide",
    "level": "B1",
    "number": 117,
    "title": "La cumbre del Teide",
    "summary": "A group of friends attempts to reach the summit of Mount Teide, and one of them must decide whether to turn back.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Cuatro amigos de la universidad decidieron reunirse después de varios años sin verse para subir juntos al Teide, el volcán más alto de España. Habían planeado la ruta durante meses: saldrían de madrugada para ver el amanecer desde la cumbre. Todos estaban emocionados, aunque ninguno tenía mucha experiencia en montañas tan altas.",
          "Empezaron a caminar a las tres de la madrugada, con linternas frontales y mochilas llenas de agua y comida. Los primeros kilómetros fueron fáciles, entre risas y recuerdos de la universidad. Pero a medida que subían, el aire se hacía más frío y más difícil de respirar.",
          "Hacia las cinco de la mañana, Teresa, una de las cuatro amigas, empezó a sentirse mareada y con dolor de cabeza. Es normal que a esta altura te sientas así, le dijo Marcos, que había subido montañas antes, pero avísanos si empeora. Teresa intentó seguir caminando, aunque cada paso le costaba más que el anterior.",
          "A dos horas de la cumbre, Teresa se detuvo completamente y admitió que no podía continuar. Los otros tres se miraron sin saber qué hacer: si seguían subiendo, llegarían a tiempo para el amanecer, pero dejarían a Teresa sola en la montaña. No la vamos a dejar aquí, dijo Marcos, bajaremos con ella, la cumbre estará ahí otro día.",
          "Teresa se sintió culpable por arruinar el plan de sus amigos, pero ellos insistieron en que su seguridad era lo más importante. Bajaron juntos, despacio, deteniéndose cada pocos minutos para que Teresa descansara. Nunca me había sentido tan mal en una montaña, les confesó Teresa, mientras bajaban en silencio bajo las primeras luces del día.",
          "Ya en la base de la montaña, sentados en el coche, los cuatro amigos vieron el amanecer de todos modos, aunque desde mucho más abajo de lo planeado. Fue distinto a lo que habíamos imaginado, dijo Laura, la cuarta amiga, pero fue igual de bonito. Teresa, ya recuperada, sonrió y dijo que algún día volvería para terminar lo que había empezado.",
          "Un año después, Teresa volvió al Teide, esta vez sola y mejor preparada, y llegó a la cumbre justo antes del amanecer. Les mandó una foto a sus tres amigos con un mensaje: lo conseguí, y esta vez lo hice por las dos. Marcos le contestó enseguida que estaba orgulloso de ella, y que la próxima montaña la subirían todos juntos otra vez."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "What happened to Teresa during the climb?",
        "options": [
          "She twisted her ankle on loose rocks",
          "She felt dizzy and had a headache from the altitude",
          "She got separated from the group",
          "She ran out of drinking water"
        ],
        "correctIndex": 1,
        "explanation": "The story says Teresa \"empezó a sentirse mareada y con dolor de cabeza\" (began to feel dizzy and had a headache) as they climbed higher."
      },
      {
        "type": "multiple-choice",
        "question": "What did the group decide to do when Teresa couldn't continue?",
        "options": [
          "Leave her behind and continue to the summit",
          "All turn back together to keep her safe",
          "Call for a helicopter rescue",
          "Argue and split into two groups"
        ],
        "correctIndex": 1,
        "explanation": "Marcos says, \"No la vamos a dejar aquí...bajaremos con ella, la cumbre estará ahí otro día\" (We're not going to leave her here...we'll go down with her, the summit will still be there another day)."
      },
      {
        "type": "multiple-choice",
        "question": "How did the friends experience the sunrise that day?",
        "options": [
          "They missed it entirely",
          "They saw it from much lower on the mountain than planned",
          "They saw it from the summit as originally planned",
          "They rescheduled the whole trip"
        ],
        "correctIndex": 1,
        "explanation": "The text says they \"vieron el amanecer de todos modos, aunque desde mucho más abajo de lo planeado\" (saw the sunrise anyway, although from much lower than planned)."
      },
      {
        "type": "multiple-choice",
        "question": "What did Teresa do a year later?",
        "options": [
          "She never attempted the climb again",
          "She returned alone and reached the summit",
          "She moved permanently to Tenerife",
          "She became a professional mountain guide"
        ],
        "correctIndex": 1,
        "explanation": "The story says Teresa \"volvió al Teide, esta vez sola y mejor preparada, y llegó a la cumbre justo antes del amanecer\" (returned to the Teide, this time alone and better prepared, and reached the summit just before sunrise)."
      }
    ]
  },
  {
    "slug": "el-silencio-del-retiro",
    "level": "B1",
    "number": 118,
    "title": "El silencio del retiro",
    "summary": "An overworked lawyer attends a weekend silent retreat and discovers how uncomfortable — and necessary — silence can be.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Beatriz trabajaba como abogada en un bufete grande y llevaba meses sin dormir bien, revisando correos hasta la medianoche. Su hermana, preocupada, le regaló una plaza en un retiro de fin de semana en la montaña donde estaba prohibido hablar durante dos días. Beatriz aceptó a regañadientes, pensando que sería fácil aguantar sin hablar cuarenta y ocho horas.",
          "El primer día fue mucho más difícil de lo que había imaginado. Sin el teléfono ni conversaciones, Beatriz se dio cuenta de lo acostumbrada que estaba a llenar cada silencio con ruido. La organizadora del retiro les había dicho al llegar: no luchen contra el silencio, dejen que les enseñe algo.",
          "Durante las primeras horas, Beatriz sintió una ansiedad que no esperaba, como si le faltara algo importante. Se sentaba a comer junto a otras diez personas sin poder hablar con ninguna, y aquello le parecía casi insoportable. Es curioso que algo tan simple como el silencio pueda dar tanto miedo, pensó mientras caminaba sola por el bosque.",
          "Hacia el final del primer día, algo empezó a cambiar. Beatriz notó sonidos que normalmente ignoraba: el viento entre los árboles, sus propios pasos sobre las hojas, su respiración. Nunca había prestado tanta atención a cosas tan pequeñas, y por primera vez en meses no pensaba en el trabajo ni en los correos pendientes.",
          "Durante una meditación guiada, la organizadora les pidió que pensaran en algo que quisieran soltar antes de volver a sus vidas normales. Beatriz pensó en la costumbre de contestar correos a cualquier hora, algo que le había robado años de tranquilidad. Ojalá pueda mantener esto cuando vuelva a la oficina, pensó, aunque no estaba segura de si sería capaz.",
          "El último día, cuando por fin se les permitió hablar de nuevo, muchas personas del grupo se sorprendieron de lo raro que sonaba su propia voz después de dos días de silencio. Beatriz habló con una mujer que había hecho el retiro cinco veces. Si no lo hubiera vivido yo misma, no habría entendido por qué alguien repite esto varias veces, le dijo Beatriz, riéndose.",
          "De vuelta en la ciudad, Beatriz decidió apagar el teléfono todas las noches a partir de las nueve, algo que antes le habría parecido imposible. No consiguió mantener el silencio total de la montaña, pero sí guardó pequeños momentos de silencio cada día. Aprendí que no puedo vivir sin descansar la cabeza de vez en cuando, le contó a su hermana, agradeciéndole por fin el extraño regalo."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "Why did Beatriz's sister give her a spot at the silent retreat?",
        "options": [
          "Beatriz had asked for it herself",
          "Beatriz was overworked and not sleeping well",
          "It was an annual family tradition",
          "Beatriz was recovering from surgery"
        ],
        "correctIndex": 1,
        "explanation": "The story says Beatriz \"llevaba meses sin dormir bien, revisando correos hasta la medianoche\" (had gone months without sleeping well, checking emails until midnight)."
      },
      {
        "type": "multiple-choice",
        "question": "How did Beatriz feel during the first hours of silence?",
        "options": [
          "Relaxed right away",
          "Anxious, as if something important were missing",
          "Bored but calm",
          "Sleepy the entire time"
        ],
        "correctIndex": 1,
        "explanation": "The text says she \"sintió una ansiedad que no esperaba, como si le faltara algo importante\" (felt an anxiety she didn't expect, as if something important were missing)."
      },
      {
        "type": "multiple-choice",
        "question": "What habit did Beatriz decide to let go of during the guided meditation?",
        "options": [
          "Her job entirely",
          "The habit of answering emails at any hour",
          "Her phone forever",
          "Talking to her sister"
        ],
        "correctIndex": 1,
        "explanation": "She thought about \"la costumbre de contestar correos a cualquier hora, algo que le había robado años de tranquilidad\" (the habit of answering emails at any hour, something that had stolen years of peace from her)."
      },
      {
        "type": "multiple-choice",
        "question": "What change did Beatriz make after returning to the city?",
        "options": [
          "She quit her job at the law firm",
          "She turned off her phone every night after nine",
          "She moved to live in the mountains",
          "She stopped speaking to her sister"
        ],
        "correctIndex": 1,
        "explanation": "The story says she \"decidió apagar el teléfono todas las noches a partir de las nueve\" (decided to turn off her phone every night starting at nine)."
      }
    ]
  },
  {
    "slug": "el-lienzo-en-blanco",
    "level": "B1",
    "number": 119,
    "title": "El lienzo en blanco",
    "summary": "A widower picks up a paintbrush for the first time in decades and finds an unexpected way to process his grief.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Después de la muerte de su esposa, Fernando pasaba las tardes sentado frente a la ventana, sin muchas ganas de hacer nada. Su hija, preocupada por verlo tan apagado, le regaló un set de pinturas y un lienzo en blanco, recordando que de joven a Fernando le había gustado dibujar. Él dejó la caja cerrada durante semanas, encima de la mesa del comedor.",
          "Una tarde de lluvia, sin saber muy bien por qué, Fernando abrió por fin la caja de pinturas. No había pintado nada desde los veinte años, cuando decidió dejar el arte para estudiar algo más práctico. Mezcló los colores sin ningún plan, solo por hacer algo diferente con las manos.",
          "El primer cuadro fue un desastre de colores mezclados sin orden, pero Fernando sintió algo que no sentía desde hacía meses: concentración. Empezó a pintar todos los días, sobre todo por las tardes, cuando la casa se sentía más vacía. Lo que más le sorprendía era que, mientras pintaba, no pensaba en su esposa con tanta tristeza.",
          "Se apuntó a una clase de pintura para principiantes en el centro cultural del barrio. Es normal que al principio te sientas perdido, le dijo la profesora, el arte no tiene una manera correcta de hacerse. Fernando, que llevaba toda su vida siguiendo reglas estrictas en su trabajo de ingeniero, encontró aquella idea liberadora.",
          "Con el tiempo, sus cuadros empezaron a mostrar algo muy claro: casi todos tenían el color azul que tanto le gustaba a su esposa. Un compañero de clase le preguntó por qué pintaba tanto azul, y Fernando, sorprendido, se dio cuenta de que ni siquiera lo había hecho a propósito. Creo que sigo pintándola a ella sin saberlo, le confesó, con la voz un poco quebrada.",
          "Su hija, al ver los cuadros nuevos, le pidió que expusiera algunos en la cafetería donde trabajaba, un lugar pequeño que a veces mostraba arte local. Fernando dudó mucho antes de aceptar, pero al final decidió que su esposa habría querido que se atreviera. Cuelga los cuadros que más te gusten, no los que creas que van a gustar a otros, le aconsejó su hija.",
          "El día de la pequeña exposición, varios vecinos se acercaron a felicitarlo, sorprendidos de que un hombre de setenta años hubiera empezado a pintar tan tarde. Nunca es tarde para empezar algo que te haga sentir vivo, le dijo una mujer que también había perdido a su marido. Fernando sonrió y pensó que, si su esposa pudiera verlo, se habría sentido orgullosa de él."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "Why did Fernando's daughter give him painting supplies?",
        "options": [
          "He had specifically asked for them",
          "He seemed withdrawn and depressed after his wife's death",
          "It was a long family tradition",
          "His doctor recommended art therapy"
        ],
        "correctIndex": 1,
        "explanation": "The story says she was \"preocupada por verlo tan apagado\" (worried about seeing him so withdrawn) and gave him the paint set for that reason."
      },
      {
        "type": "multiple-choice",
        "question": "What did Fernando notice about his paintings over time?",
        "options": [
          "They were all portraits of strangers",
          "They mostly contained the color blue that his wife loved",
          "They were all landscapes of the countryside",
          "They were signed with his wife's name"
        ],
        "correctIndex": 1,
        "explanation": "The text says \"casi todos tenían el color azul que tanto le gustaba a su esposa\" (almost all of them had the blue color his wife loved so much)."
      },
      {
        "type": "multiple-choice",
        "question": "What did Fernando say when a classmate asked why he painted so much blue?",
        "options": [
          "He denied noticing the pattern",
          "\"Creo que sigo pintándola a ella sin saberlo\"",
          "He said blue paint was simply cheaper",
          "He said it was a coincidence and changed the subject"
        ],
        "correctIndex": 1,
        "explanation": "Fernando admits, \"Creo que sigo pintándola a ella sin saberlo\" (I think I keep painting her without realizing it)."
      },
      {
        "type": "multiple-choice",
        "question": "What did the woman at the exhibition tell Fernando?",
        "options": [
          "He should stop painting and rest",
          "It's never too late to start something that makes you feel alive",
          "He should sell his paintings for more money",
          "His art needed brighter colors"
        ],
        "correctIndex": 1,
        "explanation": "She tells him, \"Nunca es tarde para empezar algo que te haga sentir vivo\" (It's never too late to start something that makes you feel alive)."
      }
    ]
  },
  {
    "slug": "la-playa-despues-de-la-tormenta",
    "level": "B1",
    "number": 120,
    "title": "La playa después de la tormenta",
    "summary": "After a storm fills the coastline with trash, a group of strangers organizes a beach cleanup that becomes something bigger.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Después de tres días de tormenta fuerte, la playa del pueblo amaneció cubierta de plástico, redes de pesca rotas y basura que el mar había arrastrado desde muy lejos. Nadia, que corría todas las mañanas por esa misma playa, se quedó horrorizada al ver el paisaje que tanto le gustaba convertido en un basurero.",
          "Esa misma tarde, Nadia publicó un mensaje en el grupo de WhatsApp del barrio: mañana a las nueve voy a limpiar la playa, quien quiera venir es bienvenido. No esperaba que apareciera casi nadie, pero a la mañana siguiente, más de treinta personas llegaron con guantes, bolsas y ganas de ayudar.",
          "Entre los voluntarios estaba Hugo, un pescador jubilado que conocía esa playa desde niño. Es una pena que el mar nos devuelva ahora lo que nosotros mismos le hemos tirado durante años, dijo mientras recogía una red vieja. Sus palabras hicieron que varios voluntarios se quedaran pensando en silencio mientras seguían trabajando.",
          "Durante toda la mañana, el grupo llenó más de cien bolsas de basura, separando el plástico del vidrio y de los restos de pesca. Nadia nunca había visto tanta gente desconocida trabajar junta con tanta energía por algo que no les daba ningún beneficio personal. Lo que empezó como un mensaje rápido en un grupo de móvil se había convertido en algo mucho más grande.",
          "Al mediodía, cuando la playa por fin volvió a estar limpia, alguien propuso que hicieran la limpieza cada primer sábado de mes, no solo después de tormentas. Hagámoslo un grupo fijo, propuso Hugo, así no esperamos a que llegue otra tormenta para actuar. Varios voluntarios intercambiaron números de teléfono para organizar la siguiente cita.",
          "Con el paso de los meses, el pequeño grupo creció hasta convertirse en una asociación con nombre propio, que organizaba limpiezas y también charlas en el colegio del pueblo sobre el cuidado del mar. Nadia, que nunca había organizado nada parecido, se convirtió en la coordinadora sin haberlo planeado.",
          "Un año después de aquella primera tormenta, la playa se mantenía limpia casi todo el tiempo, gracias al trabajo constante del grupo. Si aquella tormenta no hubiera pasado, quizás nunca nos habríamos conocido todos nosotros, le dijo Hugo a Nadia una mañana, mientras recogían las últimas bolsas. Nadia estuvo de acuerdo: a veces, hasta los desastres traen algo bueno con ellos."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "What caused the beach to be covered in trash?",
        "options": [
          "A music festival left it dirty",
          "A storm washed debris ashore",
          "Tourists littered heavily over the summer",
          "A nearby shipwreck"
        ],
        "correctIndex": 1,
        "explanation": "The story says the beach \"amaneció cubierta de plástico, redes de pesca rotas y basura que el mar había arrastrado\" (woke up covered in plastic, broken fishing nets, and trash the sea had dragged in) after the storm."
      },
      {
        "type": "multiple-choice",
        "question": "How many volunteers showed up after Nadia's WhatsApp message?",
        "options": [
          "Almost no one came",
          "More than thirty people",
          "Exactly ten people",
          "Only her own family"
        ],
        "correctIndex": 1,
        "explanation": "The text says \"más de treinta personas llegaron con guantes, bolsas y ganas de ayudar\" (more than thirty people arrived with gloves, bags, and a desire to help)."
      },
      {
        "type": "multiple-choice",
        "question": "What did the group decide to do going forward?",
        "options": [
          "Never clean the beach again",
          "Clean it every first Saturday of the month, not just after storms",
          "Wait for the government to take action",
          "Move their efforts to a different beach"
        ],
        "correctIndex": 1,
        "explanation": "Hugo proposes, \"Hagámoslo un grupo fijo...así no esperamos a que llegue otra tormenta para actuar\" (Let's make this a regular group...that way we don't wait for another storm to act)."
      },
      {
        "type": "multiple-choice",
        "question": "What did the cleanup group eventually become?",
        "options": [
          "A local political party",
          "An official association that also gave talks at the school",
          "A commercial fishing company",
          "A tourism agency"
        ],
        "correctIndex": 1,
        "explanation": "The story says the group grew into \"una asociación con nombre propio, que organizaba limpiezas y también charlas en el colegio del pueblo\" (an association with its own name, which organized cleanups and also talks at the village school)."
      }
    ]
  },
  {
    "slug": "quince-dias-en-kioto",
    "level": "B1",
    "number": 121,
    "title": "Quince días en Kioto",
    "summary": "A shy university graduate travels alone to Japan for two weeks and slowly learns to step outside her comfort zone.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Yolanda acababa de terminar la universidad y, antes de empezar a buscar trabajo, decidió cumplir un sueño que tenía desde la adolescencia: viajar sola a Japón durante quince días. Sus padres se preocuparon mucho, porque Yolanda era tímida y nunca había viajado sola a ningún sitio, ni siquiera dentro de su propio país.",
          "Los primeros días en Kioto fueron abrumadores. Yolanda no hablaba japonés y, aunque había estudiado un poco antes del viaje, le costaba entender los carteles y pedir comida en los restaurantes. Se quedaba en su habitación del hostal más tiempo del que había planeado, con miedo a equivocarse al hablar con desconocidos.",
          "En el hostal conoció a Hana, una chica japonesa que trabajaba en la recepción y hablaba un poco de español. Sal a caminar sin plan, le recomendó Hana, en Kioto te vas a perder muchas veces, pero eso es parte del viaje. Yolanda decidió seguir su consejo al día siguiente, aunque con bastante miedo.",
          "Esa mañana, Yolanda caminó sin rumbo por un barrio tradicional lleno de templos pequeños. Se perdió dos veces, pero en vez de sentir pánico, sintió algo parecido a la libertad. Nunca había caminado tanto sin saber exactamente adónde iba, y descubrió que le gustaba esa sensación mucho más de lo que esperaba.",
          "Una tarde, en un pequeño restaurante, un hombre mayor que estaba sentado cerca notó que Yolanda tenía problemas para pedir la comida y, con gestos y algo de inglés, la ayudó a elegir un plato. Es importante que pruebes cosas nuevas aunque no sepas exactamente qué son, le dijo el hombre, riéndose. Yolanda terminó comiendo el mejor ramen de todo el viaje gracias a aquel desconocido.",
          "Hacia el final de las dos semanas, Yolanda ya se atrevía a hablar con desconocidos, a pedir ayuda cuando se perdía y a comer sola en restaurantes sin sentirse incómoda. Hana, con quien había hablado casi cada noche del viaje, le dijo el último día: llegaste como una persona muy callada y te vas siendo otra completamente distinta.",
          "De vuelta en España, Yolanda se dio cuenta de que el viaje le había cambiado algo más profundo que solo la manera de viajar. Empezó a apuntarse a actividades que antes le habrían dado demasiado miedo, como hablar en público en las entrevistas de trabajo. Si no me hubiera perdido tantas veces en Kioto, no sé si habría encontrado esta versión de mí misma, le escribió a Hana meses después."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "Why were Yolanda's parents worried about her trip?",
        "options": [
          "She had ongoing health problems",
          "She was shy and had never traveled alone before",
          "Japan was extremely expensive",
          "She didn't speak any foreign language at all"
        ],
        "correctIndex": 1,
        "explanation": "The story says \"Yolanda era tímida y nunca había viajado sola a ningún sitio\" (Yolanda was shy and had never traveled alone anywhere)."
      },
      {
        "type": "multiple-choice",
        "question": "What did Hana advise Yolanda to do?",
        "options": [
          "Stay in the hostel where it's safe",
          "Go out walking without any plan",
          "Only eat food from the hostel",
          "Avoid speaking with locals"
        ],
        "correctIndex": 1,
        "explanation": "Hana tells her, \"Sal a caminar sin plan...en Kioto te vas a perder muchas veces, pero eso es parte del viaje\" (Go walk without a plan...in Kyoto you'll get lost many times, but that's part of the trip)."
      },
      {
        "type": "multiple-choice",
        "question": "What did the old man at the restaurant tell Yolanda?",
        "options": [
          "To always order the same dish for safety",
          "To try new things even without knowing exactly what they are",
          "To avoid restaurants entirely",
          "To bring her own food from the hostel"
        ],
        "correctIndex": 1,
        "explanation": "He says, \"Es importante que pruebes cosas nuevas aunque no sepas exactamente qué son\" (It's important to try new things even if you don't know exactly what they are)."
      },
      {
        "type": "multiple-choice",
        "question": "How did Yolanda change by the end of her trip?",
        "options": [
          "She became fluent in Japanese",
          "She became more willing to talk to strangers and ask for help",
          "She decided she never wanted to travel again",
          "She decided to stay in Japan permanently"
        ],
        "correctIndex": 1,
        "explanation": "The story says she \"ya se atrevía a hablar con desconocidos, a pedir ayuda cuando se perdía\" (already dared to talk to strangers, to ask for help when lost)."
      }
    ]
  },
  {
    "slug": "el-buceo-en-la-isla",
    "level": "B1",
    "number": 122,
    "title": "El buceo en la isla",
    "summary": "A man terrified of deep water forces himself to get a scuba diving certification during a trip meant to help him move past fear.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Tomás tenía un miedo profundo al agua desde que, de adolescente, había estado a punto de ahogarse en una excursión escolar. Durante un viaje a una isla del Caribe con amigos, todos se apuntaron a un curso de buceo, y Tomás, avergonzado de admitir su miedo, se apuntó también sin pensarlo demasiado.",
          "El primer día de curso, el instructor, un hombre llamado Julio, notó enseguida que Tomás respiraba de forma rápida y nerviosa dentro del agua poco profunda de la piscina de prácticas. Cuéntame qué te pasa, no vamos a avanzar hasta que te sientas seguro, le dijo Julio, apartándolo un momento del grupo. Tomás, aliviado, por fin confesó su miedo de años atrás.",
          "Julio le explicó que muchos buceadores habían empezado con miedos parecidos y que era normal sentir ansiedad al principio. Es importante que respetes tu propio ritmo, no el de tus amigos, le dijo Julio, y Tomás pasó dos días extra practicando en la piscina antes de bajar al mar abierto con el resto del grupo.",
          "La primera vez que Tomás bajó al mar de verdad, con el equipo completo de buceo, sintió que el corazón le latía con mucha fuerza. Julio nadaba justo a su lado, haciéndole señales tranquilas con la mano cada pocos segundos. Poco a poco, la respiración de Tomás se fue calmando, y empezó a fijarse en los peces de colores que nadaban a su alrededor.",
          "Nunca había visto nada parecido bajo el agua, un mundo silencioso y lleno de vida que, desde la superficie, era imposible imaginar. Durante casi veinte minutos, Tomás se olvidó completamente de su miedo, concentrado solo en respirar despacio y en observar los corales. Al salir a la superficie, sus amigos lo esperaban con gritos de celebración.",
          "Los días siguientes, Tomás bajó al mar cada mañana, cada vez con más confianza y menos miedo. Julio le dijo el último día del curso: si me hubieras dicho el primer día que ibas a terminar el curso, no te habría creído, tenías demasiado miedo. Tomás se rió, todavía sorprendido de sí mismo.",
          "Al final del viaje, Tomás recibió su certificado de buceo, algo que meses atrás le habría parecido completamente imposible. Guardó el certificado en su cartera, no tanto por el buceo en sí, sino como recuerdo de que había logrado enfrentar un miedo de casi quince años. Ojalá hubiera intentado esto mucho antes, pensó, mientras miraba el mar desde el barco de vuelta a la isla."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "Why did Tomás sign up for the scuba diving course despite his fear?",
        "options": [
          "He genuinely loved deep water",
          "He was embarrassed to admit his fear in front of his friends",
          "It was required for his job",
          "He lost a bet with a friend"
        ],
        "correctIndex": 1,
        "explanation": "The story says he was \"avergonzado de admitir su miedo, se apuntó también sin pensarlo demasiado\" (embarrassed to admit his fear, he signed up too without thinking much about it)."
      },
      {
        "type": "multiple-choice",
        "question": "What did instructor Julio do when he noticed Tomás's anxiety?",
        "options": [
          "He made him quit the course",
          "He stopped to talk with him and let him practice extra time",
          "He ignored it and continued the lesson",
          "He told the group to laugh it off"
        ],
        "correctIndex": 1,
        "explanation": "Julio tells him, \"Cuéntame qué te pasa, no vamos a avanzar hasta que te sientas seguro\" (Tell me what's wrong, we won't move forward until you feel safe)."
      },
      {
        "type": "multiple-choice",
        "question": "What happened during Tomás's first real dive in the ocean?",
        "options": [
          "He panicked and left the water immediately",
          "His fear gradually calmed as he watched the colorful fish",
          "He got separated from the group",
          "His equipment malfunctioned"
        ],
        "correctIndex": 1,
        "explanation": "The text says \"la respiración de Tomás se fue calmando, y empezó a fijarse en los peces de colores\" (Tomás's breathing gradually calmed, and he started noticing the colorful fish)."
      },
      {
        "type": "multiple-choice",
        "question": "What did the certificate mean to Tomás?",
        "options": [
          "Just a formality needed for future travel",
          "A reminder that he had faced a fear he'd carried for almost fifteen years",
          "A requirement for a new job",
          "Nothing particularly important to him"
        ],
        "correctIndex": 1,
        "explanation": "The story says he kept it \"como recuerdo de que había logrado enfrentar un miedo de casi quince años\" (as a reminder that he had managed to face a fear of almost fifteen years)."
      }
    ]
  },
  {
    "slug": "la-bicicleta-de-mi-padre",
    "level": "B1",
    "number": 123,
    "title": "La bicicleta de mi padre",
    "summary": "A young man rides his late father's old bicycle across the country, retracing a journey his father once told him about.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Cuando el padre de Bruno murió, entre sus cosas encontró una bicicleta vieja, guardada en el garaje desde hacía años. Su padre le había contado muchas veces, de joven, que había recorrido en bicicleta los quinientos kilómetros entre su pueblo natal y la ciudad donde después había vivido toda su vida. Bruno siempre había pensado que era una historia exagerada.",
          "Un año después de la muerte de su padre, Bruno decidió arreglar la bicicleta y hacer él mismo esa misma ruta. Sus amigos pensaban que era una idea un poco extraña, pero Bruno sentía que necesitaba hacerlo, aunque no supiera explicar exactamente por qué. Compró un mapa antiguo de la zona y empezó a planear el viaje.",
          "El primer día de viaje fue duro: la bicicleta, aunque reparada, era mucho más pesada que las bicicletas modernas, y las piernas de Bruno no estaban acostumbradas a tanto esfuerzo. Un hombre que lo vio pasar por un pueblo pequeño le preguntó adónde iba. Sigo el camino que hizo mi padre hace cuarenta años, le contestó Bruno, y el hombre, emocionado, le ofreció agua y pan para el viaje.",
          "Durante los siguientes días, Bruno pasó por pueblos que su padre le había mencionado en sus historias, algunos de los cuales apenas existían ya. En uno de ellos, una mujer mayor recordó a un joven con el mismo apellido que había pasado por allí décadas atrás. Es posible que fuera tu padre, le dijo la mujer, aquí no pasa mucha gente en bicicleta.",
          "Bruno nunca había sentido tan cerca a su padre como durante ese viaje, pedaleando por los mismos caminos que él había recorrido de joven. Lo que su padre nunca le había contado era lo duro que era físicamente ese recorrido, algo que Bruno ahora entendía en sus propias piernas cansadas. Cada noche, escribía en un cuaderno lo que había sentido durante el día.",
          "El sexto día, después de subir una cuesta larga bajo el sol, Bruno por fin vio la ciudad donde su padre había construido su vida adulta. Se paró en lo alto de la colina, exactamente donde su padre le había dicho que se había parado él mismo aquel día, hacía tantos años. Lloró durante varios minutos, solo, con la bicicleta apoyada a su lado.",
          "De vuelta a casa, Bruno colgó la bicicleta de su padre en la pared del salón, ya no como un objeto viejo del garaje, sino como algo que ahora entendía de verdad. Si mi padre no me hubiera contado tantas veces esa historia, nunca habría hecho este viaje, pensó Bruno. Ahora sabía que algunas herencias no se guardan en un banco, sino en las piernas y en la memoria."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "What did Bruno find among his father's belongings?",
        "options": [
          "An old car",
          "An old bicycle",
          "A small boat",
          "Only travel journals"
        ],
        "correctIndex": 1,
        "explanation": "The story says he found \"una bicicleta vieja, guardada en el garaje desde hacía años\" (an old bicycle, stored in the garage for years)."
      },
      {
        "type": "multiple-choice",
        "question": "What had Bruno's father told him about the bicycle?",
        "options": [
          "He had won it in a raffle",
          "He had once ridden it 500 km between his hometown and the city",
          "He built it himself as a hobby",
          "It had belonged to Bruno's grandfather"
        ],
        "correctIndex": 1,
        "explanation": "His father had said he \"había recorrido en bicicleta los quinientos kilómetros entre su pueblo natal y la ciudad\" (had ridden the 500 kilometers between his hometown and the city by bicycle)."
      },
      {
        "type": "multiple-choice",
        "question": "What did the old woman in one village tell Bruno?",
        "options": [
          "She had never heard of anyone like his father",
          "It was possible that a young man with the same surname had passed through decades earlier",
          "His father had lived in that village",
          "The road ahead was too dangerous"
        ],
        "correctIndex": 1,
        "explanation": "She tells him, \"Es posible que fuera tu padre...aquí no pasa mucha gente en bicicleta\" (It's possible it was your father...not many people pass through here by bicycle)."
      },
      {
        "type": "multiple-choice",
        "question": "What did Bruno realize about inheritance at the end of the story?",
        "options": [
          "Money is the only real inheritance",
          "Some inheritances live in memory and physical effort, not in a bank",
          "He wished he had sold the bicycle",
          "His father left him nothing meaningful"
        ],
        "correctIndex": 1,
        "explanation": "The final line says \"algunas herencias no se guardan en un banco, sino en las piernas y en la memoria\" (some inheritances aren't kept in a bank, but in one's legs and memory)."
      }
    ]
  },
  {
    "slug": "el-primer-paso-de-salsa",
    "level": "B1",
    "number": 124,
    "title": "El primer paso de salsa",
    "summary": "A painfully shy accountant signs up for salsa classes to overcome his social anxiety and ends up finding much more than dance skills.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Iván tenía treinta y dos años y llevaba toda la vida evitando cualquier situación social que implicara ser el centro de atención. Trabajaba como contable, un trabajo tranquilo donde apenas tenía que hablar con nadie durante el día. Su terapeuta le sugirió que probara una actividad que lo sacara completamente de su zona de confort, y él, sin saber muy bien por qué, eligió clases de salsa.",
          "La primera clase fue una tortura para Iván. Tenía que tocar la mano de desconocidas, moverse al ritmo de la música delante de un espejo enorme y contar los pasos en voz alta con el resto del grupo. No pares de moverte aunque te equivoques, le dijo la profesora, Marisela, todos aquí empezamos exactamente igual que tú.",
          "Durante las primeras semanas, Iván pisaba a sus compañeras de baile constantemente y se disculpaba tanto que casi no podían terminar los ejercicios. Es normal que al principio te sientas torpe, le dijo una de sus compañeras, riéndose con amabilidad, a mí también me costó mucho al principio. Poco a poco, Iván empezó a preocuparse menos por hacer el ridículo.",
          "Con los meses, algo cambió en la manera en que Iván se movía y también en la manera en que hablaba con la gente. Lo que más le sorprendía era que bailar lo obligaba a mirar a los ojos a su pareja de baile, algo que en cualquier otra situación social le resultaba casi imposible. Nunca había hablado tanto con desconocidos como en aquellas clases de los martes.",
          "Marisela organizó una pequeña fiesta al final del curso, donde los alumnos debían bailar frente a los familiares y amigos que quisieran venir. Iván pensó en no ir, pero al final decidió que, si había llegado hasta ahí, debía terminar lo que había empezado. Baila para ti mismo, no para el público, le aconsejó Marisela antes de subir a la pista.",
          "Esa noche, Iván bailó con una compañera llamada Cecilia, con quien había practicado los últimos meses. Se equivocaron dos veces durante el baile, pero, en vez de detenerse avergonzados, ambos se rieron y siguieron bailando. El público aplaudió con fuerza, y por primera vez en su vida, Iván no sintió ganas de desaparecer.",
          "Después de la fiesta, Iván le pidió a Cecilia si querían seguir practicando juntos fuera de la academia, y ella aceptó encantada. Meses después, Iván no solo bailaba mucho mejor, sino que también hablaba con más confianza en el trabajo y con su familia. Ojalá hubiera empezado a bailar hace diez años, pensaba a veces, aunque sabía que había llegado justo en el momento en que más lo necesitaba."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "Why did Iván's therapist suggest a new activity?",
        "options": [
          "To help him lose weight",
          "To push him out of his social comfort zone",
          "To help him earn more money",
          "To help him quit his accounting job"
        ],
        "correctIndex": 1,
        "explanation": "The therapist suggested \"una actividad que lo sacara completamente de su zona de confort\" (an activity that would take him completely out of his comfort zone)."
      },
      {
        "type": "multiple-choice",
        "question": "What made the first salsa class especially difficult for Iván?",
        "options": [
          "The music was too loud for him",
          "He had to touch strangers' hands and move in front of a huge mirror",
          "The class was too expensive for him",
          "He didn't understand Spanish"
        ],
        "correctIndex": 1,
        "explanation": "The story says he had to \"tocar la mano de desconocidas, moverse al ritmo de la música delante de un espejo enorme\" (touch the hands of strangers, move to the music in front of a huge mirror)."
      },
      {
        "type": "multiple-choice",
        "question": "What did Iván notice that dancing forced him to do?",
        "options": [
          "Avoid eye contact entirely",
          "Look his dance partner in the eyes, something nearly impossible for him elsewhere",
          "Speak much louder than usual",
          "Memorize long complicated routines"
        ],
        "correctIndex": 1,
        "explanation": "The text says \"bailar lo obligaba a mirar a los ojos a su pareja de baile\" (dancing forced him to look his dance partner in the eyes)."
      },
      {
        "type": "multiple-choice",
        "question": "What happened at the end-of-course performance when Iván and Cecilia made mistakes?",
        "options": [
          "They stopped and left the dance floor",
          "They laughed and kept dancing",
          "The teacher scolded them in front of everyone",
          "The audience booed them"
        ],
        "correctIndex": 1,
        "explanation": "The story says \"ambos se rieron y siguieron bailando\" (both of them laughed and kept dancing)."
      }
    ]
  },
  {
    "slug": "la-casa-que-construimos",
    "level": "B1",
    "number": 125,
    "title": "La casa que construimos",
    "summary": "A group of volunteers spends two weeks building a house for a family in need and forms bonds that outlast the project.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Cuando Marta vio un anuncio de una organización que construía casas para familias sin vivienda propia en Centroamérica, decidió apuntarse sin pensarlo demasiado. Nunca había usado un martillo en su vida y trabajaba como diseñadora gráfica, pero algo en el anuncio la convenció de que necesitaba hacer algo distinto ese verano.",
          "Al llegar al pueblo donde se construiría la casa, Marta conoció al resto del grupo de voluntarios: gente de distintos países, edades y profesiones, casi ninguno con experiencia en construcción. También conoció a la familia que recibiría la casa: Doña Elvira y sus tres hijos, que llevaban años viviendo en una vivienda de láminas de metal.",
          "El primer día, el coordinador del proyecto les explicó las reglas básicas: sigan las instrucciones, trabajen en equipo y, sobre todo, no tengan miedo de hacer preguntas. Marta, que apenas sabía sujetar un martillo, pasó la primera mañana entera aprendiendo a clavar clavos rectos, algo que le pareció más difícil de lo que había imaginado.",
          "Con el paso de los días, el grupo aprendió a levantar paredes, a mezclar cemento y a trabajar bajo el sol fuerte de las tardes. Doña Elvira solía llevarles agua fresca y, a veces, se quedaba a ayudar, contándoles historias sobre su vida y sobre sus hijos mientras trabajaban juntos. Nunca había hablado tanto con desconocidos como durante esas dos semanas, pensaba Marta cada noche.",
          "Hacia la mitad del proyecto, empezó a llover mucho más de lo esperado, y varios días de trabajo se perdieron por el mal tiempo. El coordinador les dijo: no se preocupen, terminaremos igual, solo tenemos que trabajar más rápido los días que no llueva. El grupo, cansado pero decidido, empezó a levantarse una hora antes cada mañana.",
          "El último día, con la casa casi terminada, todo el grupo trabajó hasta el atardecer para colocar el techo antes de que llegara la próxima tormenta. Doña Elvira lloró al ver, por fin, una casa de verdad, con paredes fuertes y un techo que no dejaba pasar el agua. Es la primera vez en veinte años que mis hijos van a dormir sin miedo a la lluvia, les dijo, abrazando a cada voluntario.",
          "Marta volvió a su país con las manos llenas de callos y con una idea muy diferente de lo que significaba ayudar a alguien. Meses después, seguía en contacto con Doña Elvira a través de mensajes de voz, y ya estaba ahorrando para volver el año siguiente con el mismo proyecto. Nunca pensé que dos semanas pudieran cambiarme tanto, le escribió a una amiga, todavía pensando en la casa que habían construido juntos."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "What convinced Marta to volunteer for the house-building trip?",
        "options": [
          "She already had construction experience",
          "Something in the ad convinced her she needed to do something different that summer",
          "Her company required it as a work project",
          "She needed the extra money"
        ],
        "correctIndex": 1,
        "explanation": "The story says \"algo en el anuncio la convenció de que necesitaba hacer algo distinto ese verano\" (something in the ad convinced her she needed to do something different that summer)."
      },
      {
        "type": "multiple-choice",
        "question": "What setback did the group face during the project?",
        "options": [
          "They ran out of building materials",
          "Heavy rain caused them to lose several days of work",
          "A volunteer was seriously injured",
          "The family changed their minds about the house"
        ],
        "correctIndex": 1,
        "explanation": "The text says \"empezó a llover mucho más de lo esperado, y varios días de trabajo se perdieron por el mal tiempo\" (it started raining much more than expected, and several work days were lost due to the weather)."
      },
      {
        "type": "multiple-choice",
        "question": "What did Doña Elvira say when the house was finished?",
        "options": [
          "She complained about the design",
          "It was the first time in twenty years her children would sleep without fear of rain",
          "She wanted an even bigger house",
          "She only thanked the coordinator"
        ],
        "correctIndex": 1,
        "explanation": "She says, \"Es la primera vez en veinte años que mis hijos van a dormir sin miedo a la lluvia\" (It's the first time in twenty years that my children will sleep without fear of the rain)."
      },
      {
        "type": "multiple-choice",
        "question": "What did Marta plan to do after returning home?",
        "options": [
          "Never volunteer again",
          "Save money to return the next year for the same project",
          "Move to Centroamérica permanently",
          "Stop working as a designer"
        ],
        "correctIndex": 1,
        "explanation": "The story says she \"ya estaba ahorrando para volver el año siguiente con el mismo proyecto\" (was already saving to return the following year for the same project)."
      }
    ]
  },
  {
    "slug": "el-aula-bajo-el-puente",
    "level": "B1",
    "number": 126,
    "title": "El aula bajo el puente",
    "summary": "A retired teacher starts an informal Spanish class for migrant children living near her city and rediscovers her purpose.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Después de treinta años como maestra, Custodia se había jubilado, pero pasaba los días sintiendo que le faltaba algo importante. Un día, caminando por un parque cerca de su casa, vio a un grupo de niños migrantes que vivían con sus familias en un campamento improvisado bajo un puente, sin ir a la escuela porque los papeles todavía no estaban en regla.",
          "Custodia se acercó y habló con algunas de las madres, que le explicaron que sus hijos llevaban meses sin clases mientras esperaban que se resolviera su situación legal. Yo fui maestra durante treinta años, les dijo Custodia, si quieren, puedo venir algunas tardes a enseñarles español y matemáticas básicas. Las madres, sorprendidas y agradecidas, aceptaron enseguida.",
          "Al principio, Custodia llevaba solo un cuaderno, unos lápices y su propia paciencia. Se sentaban en el suelo, bajo el puente, y ella enseñaba las letras y los números como si estuvieran en un aula normal. Es importante que aprendan a leer, aunque sea aquí, les decía a las madres, la escuela oficial ya llegará cuando llegue.",
          "Con el tiempo, otros vecinos del barrio se enteraron de las clases y empezaron a donar libros, mochilas y hasta una pequeña pizarra que colgaron de una de las columnas del puente. Custodia nunca había dado clases en condiciones tan difíciles, sin sillas ni calefacción, pero tampoco había visto nunca a niños tan agradecidos por aprender.",
          "Uno de los niños, un chico de nueve años llamado Yusuf, aprendió a leer su primera palabra completa después de dos meses de clases bajo el puente. Corrió a abrazar a Custodia gritando que por fin podía leer el nombre de la calle donde vivían. Custodia sintió que ese abrazo valía más que cualquier sueldo que hubiera recibido en su vida profesional.",
          "La historia de las clases bajo el puente llegó, gracias a un vecino, hasta una asociación local que ofreció un local pequeño y calefacción para el invierno. Custodia dudó al principio, preocupada de que el cambio de lugar hiciera que las familias dejaran de sentirse cómodas, pero al final aceptó, pensando en el frío que se acercaba.",
          "Meses después, con las clases ya instaladas en el local, la mayoría de los niños había empezado por fin la escuela oficial, gracias también a que sus papeles se habían resuelto. Custodia siguió dando clases de refuerzo dos tardes por semana, sin cobrar nada. Ojalá hubiera encontrado antes esta manera de seguir siendo maestra, pensaba, cada vez que veía a Yusuf leer un libro entero sin ayuda."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "Why weren't the migrant children in school?",
        "options": [
          "They didn't want to attend classes",
          "Their legal papers were not yet in order",
          "There was no school nearby",
          "Their parents refused to send them"
        ],
        "correctIndex": 1,
        "explanation": "The story says they were \"sin ir a la escuela porque los papeles todavía no estaban en regla\" (not attending school because their papers were not yet in order)."
      },
      {
        "type": "multiple-choice",
        "question": "How did Custodia start teaching the children?",
        "options": [
          "In a rented classroom with desks",
          "Sitting on the ground under the bridge with just a notebook and pencils",
          "Through online video calls",
          "At her own house"
        ],
        "correctIndex": 1,
        "explanation": "The text says \"Se sentaban en el suelo, bajo el puente\" and she \"llevaba solo un cuaderno, unos lápices\" (they sat on the ground under the bridge, and she brought just a notebook and some pencils)."
      },
      {
        "type": "multiple-choice",
        "question": "What milestone did Yusuf reach?",
        "options": [
          "He learned to write his full name",
          "He read his first complete word and could read the street name where he lived",
          "He passed an official school exam",
          "He started teaching another child"
        ],
        "correctIndex": 1,
        "explanation": "The story says he \"aprendió a leer su primera palabra completa...por fin podía leer el nombre de la calle donde vivían\" (learned to read his first complete word...he could finally read the name of the street where they lived)."
      },
      {
        "type": "multiple-choice",
        "question": "What happened to the class eventually?",
        "options": [
          "It was shut down by the authorities",
          "A local association offered a small heated space, and most children later joined official school",
          "Custodia stopped teaching entirely",
          "The children's families moved away"
        ],
        "correctIndex": 1,
        "explanation": "The story mentions \"una asociación local que ofreció un local pequeño y calefacción\" and that later \"la mayoría de los niños había empezado por fin la escuela oficial\" (a local association offered a small space and heating, and most of the children finally started official school)."
      }
    ]
  },
  {
    "slug": "el-fotografo-accidental",
    "level": "B1",
    "number": 127,
    "title": "El fotógrafo accidental",
    "summary": "A delivery driver who takes photos as a hobby is stunned when one of his casual shots ends up in a real gallery exhibition.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Ezequiel trabajaba repartiendo paquetes en moto por toda la ciudad, un trabajo que le dejaba las piernas cansadas pero la mente relativamente libre. Desde hacía dos años, llevaba siempre una cámara pequeña colgada del cuello y, cada vez que paraba en un semáforo o esperaba para entregar un paquete, sacaba fotos de la ciudad: gente esperando el autobús, palomas en un charco, luces de neón reflejadas en la lluvia.",
          "Nunca había estudiado fotografía ni pensaba en sí mismo como un artista; simplemente le gustaba mirar la ciudad de una manera distinta a través de la cámara. Subía las fotos a una cuenta de redes sociales que apenas tenía seguidores, sobre todo amigos y algún compañero de trabajo. Le parecía suficiente con que a él mismo le gustara el resultado.",
          "Un día, una mujer que organizaba exposiciones en una galería pequeña del centro le escribió un mensaje después de ver sus fotos por casualidad. Es raro que alguien capture la ciudad así, tan de cerca y tan real, le escribió, ¿te interesaría exponer algunas fotos en mi galería? Ezequiel pensó que era una broma y tardó dos días en contestar.",
          "Cuando por fin entendió que la oferta era real, Ezequiel sintió una mezcla de emoción y pánico. Nunca había impreso una foto en grande, ni había pensado en cuáles de sus cientos de fotos elegiría para mostrar al público. Pasó varias noches, después de terminar su turno de repartidor, seleccionando las imágenes que más le gustaban.",
          "La dueña de la galería le aconsejó: no elijas las fotos más bonitas, elige las que cuenten algo sobre ti y sobre tu ciudad. Ezequiel siguió su consejo y escogió veinte fotos tomadas siempre desde su moto o durante sus descansos de reparto, imágenes que mostraban una ciudad que la mayoría de la gente no se molestaba en mirar.",
          "La noche de la inauguración, Ezequiel llegó todavía con el uniforme de repartidor, porque había terminado su turno solo media hora antes. Varias personas se acercaron a preguntarle sobre las fotos, sorprendidas al saber que el fotógrafo trabajaba entregando paquetes durante el día. Nunca me habían tratado como a un artista antes de esta noche, les confesó a sus amigos, todavía sin creerlo del todo.",
          "Después de la exposición, Ezequiel siguió repartiendo paquetes, porque necesitaba el sueldo fijo, pero también empezó a recibir encargos pequeños de fotografía los fines de semana. Si alguien me hubiera dicho hace un año que expondría fotos en una galería, no le habría creído, le contó a la dueña de la galería semanas después. Ella le contestó que las mejores fotos casi siempre las hacía la gente que no buscaba hacerse famosa, sino solo mirar el mundo con atención."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "What was Ezequiel's day job?",
        "options": [
          "Professional photographer",
          "Delivery driver on a motorcycle",
          "Gallery owner",
          "Newspaper journalist"
        ],
        "correctIndex": 1,
        "explanation": "The story says he \"trabajaba repartiendo paquetes en moto por toda la ciudad\" (worked delivering packages by motorcycle around the city)."
      },
      {
        "type": "multiple-choice",
        "question": "How did the gallery owner discover his photos?",
        "options": [
          "He submitted them to a contest",
          "She saw them by chance on his social media account",
          "A mutual friend recommended him",
          "He walked into her gallery uninvited"
        ],
        "correctIndex": 1,
        "explanation": "The text says she wrote to him \"después de ver sus fotos por casualidad\" (after seeing his photos by chance)."
      },
      {
        "type": "multiple-choice",
        "question": "What advice did the gallery owner give him about choosing photos?",
        "options": [
          "Choose only the prettiest photos",
          "Choose the ones that tell something about him and his city",
          "Choose only black-and-white photos",
          "Choose only his most recent photos"
        ],
        "correctIndex": 1,
        "explanation": "She tells him, \"no elijas las fotos más bonitas, elige las que cuenten algo sobre ti y sobre tu ciudad\" (don't choose the prettiest photos, choose the ones that tell something about you and your city)."
      },
      {
        "type": "multiple-choice",
        "question": "What did Ezequiel do after the exhibition?",
        "options": [
          "He quit his delivery job immediately",
          "He kept delivering packages but also started taking small photography jobs on weekends",
          "He moved to another country",
          "He stopped taking photos altogether"
        ],
        "correctIndex": 1,
        "explanation": "The story says he \"siguió repartiendo paquetes...también empezó a recibir encargos pequeños de fotografía los fines de semana\" (kept delivering packages...also started getting small photography jobs on weekends)."
      }
    ]
  },
  {
    "slug": "el-rio-que-nos-enseno",
    "level": "B1",
    "number": 128,
    "title": "El río que nos enseñó",
    "summary": "A group of coworkers who barely know each other go on a whitewater rafting trip that forces them to trust one another.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "La empresa donde trabajaba Cristina organizó una salida de fin de semana para todo el equipo, y entre las actividades propuestas había una bajada en balsa por un río con rápidos moderados. Cristina, que apenas conocía a la mitad de sus compañeros fuera de las reuniones de oficina, se apuntó más por compromiso que por ganas reales de hacerlo.",
          "El guía del río, un hombre llamado Néstor con más de quince años de experiencia, reunió al grupo antes de subir a las balsas. Aquí, la confianza en el equipo lo es todo, les explicó, si uno de ustedes no rema cuando yo lo pida, todos podemos terminar en el agua. Varios compañeros se miraron nerviosos, sin saber si estaban preparados para algo así.",
          "Los primeros minutos en el agua fueron tranquilos, y el grupo empezó a coordinarse mejor de lo que Cristina había esperado. Su compañero de trabajo, Álvaro, con quien apenas había hablado en la oficina más de dos frases seguidas, resultó ser quien mejor seguía las órdenes del guía, remando con fuerza y avisando a los demás cuando venía una roca.",
          "Al llegar al primer rápido fuerte, el guía gritó: remen ahora, remen fuerte, no paren. La balsa se movió con violencia entre las rocas, y por un momento Cristina pensó que iban a volcar. Todo el equipo remó a la vez, como si llevaran años practicando juntos, y consiguieron pasar el rápido sin caerse al agua.",
          "Después de ese primer susto, algo cambió en el ambiente del grupo. Empezaron a gritar de emoción en vez de miedo, y a animarse entre ellos antes de cada nuevo rápido. Nunca había sentido tanta confianza en gente que apenas conocía, pensó Cristina, mientras el agua fría le salpicaba la cara.",
          "En un tramo más tranquilo del río, Néstor les dejó parar para descansar y nadar un poco en una zona segura. Álvaro le contó a Cristina que llevaba meses sintiéndose invisible en la oficina, que nadie parecía notar su trabajo. Es curioso que aquí, en el río, todos hayamos tenido que confiar los unos en los otros de una manera que nunca hacemos en la oficina, le contestó Cristina.",
          "De vuelta en la oficina, el lunes siguiente, algo había cambiado sutilmente entre los compañeros que habían compartido la balsa. Se saludaban con más confianza, bromeaban sobre el susto del primer rápido y, sobre todo, se ayudaban más entre ellos durante el trabajo. Si no hubiéramos remado juntos ese río, dudo que hoy confiara tanto en este equipo, le dijo Cristina a su jefa, semanas después, cuando le preguntaron qué le había parecido la actividad."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "Why did Cristina sign up for the rafting trip?",
        "options": [
          "She loved extreme sports",
          "More out of obligation than real desire, since it was a company retreat",
          "She wanted to impress her boss specifically",
          "It was mandatory safety training"
        ],
        "correctIndex": 1,
        "explanation": "The story says she signed up \"más por compromiso que por ganas reales de hacerlo\" (more out of obligation than real desire to do it)."
      },
      {
        "type": "multiple-choice",
        "question": "What did the guide Néstor emphasize before starting?",
        "options": [
          "Setting speed records on the river",
          "That trust in the team was everything",
          "Individual skill above teamwork",
          "Staying completely silent at all times"
        ],
        "correctIndex": 1,
        "explanation": "Néstor tells them, \"Aquí, la confianza en el equipo lo es todo\" (Here, trust in the team is everything)."
      },
      {
        "type": "multiple-choice",
        "question": "What did Cristina learn about her coworker Álvaro during the trip?",
        "options": [
          "He was secretly afraid of water",
          "He felt invisible at the office and that no one noticed his work",
          "He wanted to quit his job soon",
          "He was the best swimmer in the company"
        ],
        "correctIndex": 1,
        "explanation": "Álvaro tells her he had spent months \"sintiéndose invisible en la oficina, que nadie parecía notar su trabajo\" (feeling invisible at the office, like no one noticed his work)."
      },
      {
        "type": "multiple-choice",
        "question": "How did the team's office dynamic change after the trip?",
        "options": [
          "It stayed exactly the same as before",
          "Coworkers greeted each other with more confidence and helped each other more",
          "They started avoiding each other",
          "Several coworkers quit their jobs"
        ],
        "correctIndex": 1,
        "explanation": "The story says they \"se saludaban con más confianza...se ayudaban más entre ellos durante el trabajo\" (greeted each other with more confidence...helped each other more during work)."
      }
    ]
  }
];

// The reinforcement lessons (b1-reinforcement.ts) are woven in right after
// the lesson each one reinforces, and the whole level is renumbered -- see
// weave.ts. Everything above this line is the original lesson data.
export const B1_LESSONS: Lesson[] = weaveLessons(B1_BASE_LESSONS, B1_REINFORCEMENT);
