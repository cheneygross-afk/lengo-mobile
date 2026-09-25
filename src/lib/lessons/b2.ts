import type { Lesson } from "./types";
import { weaveLessons } from "./weave";
import { B2_REINFORCEMENT } from "./b2-reinforcement";
import { B2_DRILLS } from "./b2-drills";

const B2_BASE_LESSONS: Lesson[] = [
  {
    "slug": "subjunctive-adjective-clauses-1",
    "level": "B2",
    "number": 1,
    "title": "Subjuntivo en Cláusulas Adjetivas, Part 1 of 2",
    "summary": "Describe personas y cosas que quizás no existan, o cuya existencia es incierta.",
    "duration": "6 min",
    "sections": [
      {
        "heading": "Antecedente conocido vs. desconocido",
        "body": [
          "Una cláusula adjetiva describe un sustantivo (el antecedente). Si el antecedente es específico y conocido, la cláusula lleva indicativo. Si es desconocido, inexistente o incierto, lleva subjuntivo."
        ],
        "examples": [
          {
            "es": "Tengo un amigo que habla ruso."
          },
          {
            "es": "Busco un amigo que hable ruso."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa la oración con el verbo correcto.",
            "sentence": "Necesito una casa que ___ (tener) jardín.",
            "answer": "tenga",
            "explanation": "El antecedente \"una casa\" es incierto — no se sabe si existe tal casa — así que lleva subjuntivo."
          }
        ]
      },
      {
        "heading": "Antecedente inexistente",
        "body": [
          "Cuando el antecedente definitivamente no existe, el subjuntivo es obligatorio: no hay nadie que, no existe nada que, no conozco a nadie que."
        ],
        "examples": [
          {
            "es": "No hay nadie que pueda resolver este problema."
          },
          {
            "es": "No conozco a ningún restaurante que sirva esa comida aquí."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Cuál oración es correcta?",
            "options": [
              "No hay nadie que sabe la respuesta.",
              "No hay nadie que sepa la respuesta.",
              "No hay nadie que sabrá la respuesta.",
              "No hay nadie que sabía la respuesta."
            ],
            "correctIndex": 1,
            "explanation": "Con un antecedente inexistente (\"nadie\"), el verbo va en subjuntivo: sepa."
          }
        ]
      },
      {
        "heading": "Cualquiera que, quienquiera que",
        "body": [
          "Estas construcciones expresan \"whoever\" o \"whichever\" y siempre llevan subjuntivo, porque se refieren a una posibilidad abierta, no a una persona específica."
        ],
        "examples": [
          {
            "es": "Quienquiera que gane, será una victoria justa."
          },
          {
            "es": "Cualquier decisión que tomes, te apoyaré."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa la oración.",
            "sentence": "Cualquier libro que ___ (elegir, tú), lo voy a leer.",
            "answer": "elijas",
            "explanation": "\"Cualquier libro que\" introduce una posibilidad abierta, así que requiere subjuntivo."
          }
        ]
      },
      {
        "heading": "Preguntas: ¿existe o no existe?",
        "body": [
          "En preguntas sobre la existencia de algo, se suele usar subjuntivo, porque la respuesta es incierta para quien pregunta."
        ],
        "examples": [
          {
            "es": "¿Conoces a alguien que hable portugués?"
          },
          {
            "es": "¿Hay algún restaurante por aquí que esté abierto ahora?"
          }
        ],
        "checkpoint": [
          {
            "type": "multi-select",
            "question": "¿En qué oraciones el antecedente es incierto o inexistente? (Elige todas las correctas)",
            "options": [
              "Busco un traductor que sepa japonés.",
              "Tengo un traductor que sabe japonés.",
              "No hay ningún traductor que sepa japonés.",
              "Conozco al traductor que sabe japonés."
            ],
            "correctIndexes": [
              0,
              2
            ],
            "explanation": "Las dos primeras describen antecedentes conocidos y específicos: llevan indicativo. Las otras dos describen antecedentes inciertos o inexistentes: subjuntivo."
          }
        ]
      },
      {
        "heading": "En la práctica",
        "body": [
          "Una conversación en una galería de arte sobre una obra que buscan."
        ],
        "examples": [
          {
            "es": "Buscamos un cuadro que combine con este espacio."
          },
          {
            "es": "Tenemos varias piezas que podrían funcionar. ¿Qué estilo prefieren?"
          },
          {
            "es": "Algo que tenga colores cálidos, y que no sea demasiado abstracto."
          },
          {
            "es": "Perfecto. Conozco una obra que cumple exactamente con eso."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Qué tipo de cuadro buscan?",
            "options": [
              "Uno con colores fríos",
              "Uno abstracto",
              "Uno con colores cálidos",
              "Uno en blanco y negro"
            ],
            "correctIndex": 2,
            "explanation": "Piden \"algo que tenga colores cálidos.\""
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "fill-blank",
        "prompt": "Completa la oración.",
        "sentence": "Busco un empleado que ___ (tener) experiencia en marketing.",
        "answer": "tenga",
        "explanation": "El antecedente \"un empleado\" es incierto: subjuntivo."
      },
      {
        "type": "multiple-choice",
        "question": "¿Cuál es correcta?",
        "options": [
          "Tengo un coche que consume poco.",
          "Tengo un coche que consuma poco.",
          "Busco un coche que consume poco.",
          "Busco un coche que consumo poco."
        ],
        "correctIndex": 0,
        "explanation": "\"Tengo un coche\" describe algo específico y conocido: indicativo."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la oración.",
        "sentence": "No hay nada que ___ (poder) hacer al respecto.",
        "answer": "podamos",
        "explanation": "Con un antecedente inexistente (\"nada\"), el verbo va en subjuntivo."
      }
    ]
  },
  {
    "slug": "subjunctive-adjective-clauses-2",
    "level": "B2",
    "number": 2,
    "title": "Subjuntivo en Cláusulas Adjetivas, Part 2 of 2",
    "summary": "Describe personas y cosas que quizás no existan, o cuya existencia es incierta.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "Vocabulario: El arte y la literatura",
        "body": [
          "Cincuenta palabras del mundo del arte y la literatura."
        ],
        "examples": [
          {
            "es": "el lienzo",
            "en": "la superficie donde se pinta"
          },
          {
            "es": "el pincel",
            "en": "instrumento para pintar"
          },
          {
            "es": "la obra",
            "en": "creación artística"
          },
          {
            "es": "la exposición",
            "en": "muestra pública de arte"
          },
          {
            "es": "la galería",
            "en": "espacio donde se exhibe arte"
          },
          {
            "es": "el retrato",
            "en": "pintura de una persona"
          },
          {
            "es": "el paisaje",
            "en": "pintura de un lugar natural"
          },
          {
            "es": "la escultura",
            "en": "obra tridimensional"
          },
          {
            "es": "esculpir",
            "en": "crear una escultura"
          },
          {
            "es": "el trazo",
            "en": "línea hecha con el pincel o lápiz"
          },
          {
            "es": "la técnica",
            "en": "método artístico"
          },
          {
            "es": "la inspiración",
            "en": "impulso creativo"
          },
          {
            "es": "inspirarse en",
            "en": "tomar una idea de algo"
          },
          {
            "es": "plasmar",
            "en": "expresar una idea en una obra"
          },
          {
            "es": "el matiz",
            "en": "variación sutil de color o significado"
          },
          {
            "es": "la obra maestra",
            "en": "creación excepcional"
          },
          {
            "es": "el crítico de arte",
            "en": "quien evalúa obras de arte"
          },
          {
            "es": "la crítica",
            "en": "juicio sobre una obra"
          },
          {
            "es": "la novela",
            "en": "obra narrativa extensa"
          },
          {
            "es": "el cuento",
            "en": "narración breve"
          },
          {
            "es": "el poema",
            "en": "composición en verso"
          },
          {
            "es": "la estrofa",
            "en": "parte de un poema"
          },
          {
            "es": "el personaje",
            "en": "figura ficticia en una historia"
          },
          {
            "es": "la trama",
            "en": "sucesión de eventos de una historia"
          },
          {
            "es": "el narrador",
            "en": "quien cuenta la historia"
          },
          {
            "es": "el autor",
            "en": "quien escribe la obra"
          },
          {
            "es": "la editorial",
            "en": "empresa que publica libros"
          },
          {
            "es": "editar",
            "en": "preparar un texto para su publicación"
          },
          {
            "es": "el manuscrito",
            "en": "texto original antes de publicarse"
          },
          {
            "es": "la metáfora",
            "en": "comparación implícita"
          },
          {
            "es": "el simbolismo",
            "en": "uso de símbolos para representar ideas"
          },
          {
            "es": "la sátira",
            "en": "crítica mediante humor o ironía"
          },
          {
            "es": "conmovedor",
            "en": "que provoca emoción profunda"
          },
          {
            "es": "provocador",
            "en": "que incita a la reflexión o polémica"
          },
          {
            "es": "el género literario",
            "en": "categoría de una obra"
          },
          {
            "es": "la ficción",
            "en": "narrativa inventada"
          },
          {
            "es": "la reseña",
            "en": "opinión escrita sobre una obra"
          },
          {
            "es": "el tono",
            "en": "la actitud o matiz que transmite un texto o discurso"
          },
          {
            "es": "vanguardista",
            "en": "innovador, adelantado a su época"
          },
          {
            "es": "clásico",
            "en": "de valor reconocido y duradero"
          },
          {
            "es": "contemporáneo",
            "en": "de la época actual"
          },
          {
            "es": "el mecenas",
            "en": "quien financia a un artista"
          },
          {
            "es": "el taller",
            "en": "espacio de trabajo del artista"
          },
          {
            "es": "el boceto",
            "en": "dibujo preliminar"
          },
          {
            "es": "la restauración",
            "en": "proceso de reparar una obra dañada"
          },
          {
            "es": "auténtico",
            "en": "genuino, no falsificado"
          },
          {
            "es": "la réplica",
            "en": "copia de una obra original"
          },
          {
            "es": "interpretar",
            "en": "dar significado a una obra"
          },
          {
            "es": "cautivar",
            "en": "atraer fuertemente la atención"
          },
          {
            "es": "el mural",
            "en": "pintura de gran formato realizada directamente sobre un muro"
          }
        ],
        "checkpoint": [
          {
            "type": "matching",
            "instructions": "Empareja cada palabra con su definición.",
            "pairs": [
              {
                "left": "el lienzo",
                "right": "la superficie donde se pinta"
              },
              {
                "left": "plasmar",
                "right": "expresar una idea en una obra"
              },
              {
                "left": "la trama",
                "right": "sucesión de eventos de una historia"
              },
              {
                "left": "el simbolismo",
                "right": "uso de símbolos para representar ideas"
              },
              {
                "left": "vanguardista",
                "right": "innovador, adelantado a su época"
              },
              {
                "left": "el boceto",
                "right": "dibujo preliminar"
              },
              {
                "left": "auténtico",
                "right": "genuino, no falsificado"
              },
              {
                "left": "cautivar",
                "right": "atraer fuertemente la atención"
              },
              {
                "left": "el mecenas",
                "right": "quien financia a un artista"
              },
              {
                "left": "conmovedor",
                "right": "que provoca emoción profunda"
              }
            ],
            "explanation": "Estas diez palabras describen el proceso creativo y su recepción."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multi-select",
        "question": "¿En qué oraciones se requiere subjuntivo? (Elige todas las correctas)",
        "options": [
          "Busco a alguien que me ayude.",
          "Conozco a alguien que me ayuda.",
          "No hay nadie que me entienda.",
          "Tengo un amigo que me entiende."
        ],
        "correctIndexes": [
          0,
          2
        ],
        "explanation": "Las otras dos describen antecedentes específicos y conocidos: indicativo."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras.",
        "words": [
          "Quienquiera",
          "que",
          "sea",
          "el",
          "ganador",
          "merece",
          "respeto"
        ],
        "explanation": "\"Quienquiera que\" siempre lleva subjuntivo."
      },
      {
        "type": "multiple-choice",
        "question": "¿Qué palabra describe una copia de una obra original?",
        "options": [
          "el boceto",
          "la réplica",
          "el manuscrito",
          "la reseña"
        ],
        "correctIndex": 1,
        "explanation": "\"La réplica\" es una copia de una obra original."
      }
    ]
  },
  {
    "slug": "subjunctive-adverbial-clauses-1",
    "level": "B2",
    "number": 3,
    "title": "Subjuntivo en Cláusulas Adverbiales, Part 1 of 2",
    "summary": "Domina cuándo usar subjuntivo con cuando, aunque, para que, y otras conjunciones temporales y concesivas.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "Cuando: futuro vs. hábito",
        "body": [
          "\"Cuando\" con subjuntivo se refiere a un evento futuro, todavía no realizado. \"Cuando\" con indicativo describe un hábito o un hecho ya ocurrido."
        ],
        "examples": [
          {
            "es": "Cuando llegue a casa, te llamaré."
          },
          {
            "es": "Cuando llego a casa, ceno con mi familia."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa la oración.",
            "sentence": "Te avisaré cuando ___ (terminar) el proyecto.",
            "answer": "termine",
            "explanation": "\"Cuando\" se refiere a un evento futuro incierto: subjuntivo."
          }
        ]
      },
      {
        "heading": "Otras conjunciones temporales",
        "body": [
          "En cuanto, tan pronto como, hasta que y después de que siguen el mismo patrón que \"cuando\": subjuntivo para el futuro, indicativo para hábitos o el pasado."
        ],
        "examples": [
          {
            "es": "En cuanto tenga noticias, te escribiré."
          },
          {
            "es": "Esperé hasta que llegó el autobús."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Cuál oración se refiere a un evento futuro?",
            "options": [
              "Esperé hasta que llegó.",
              "Esperaré hasta que llegue.",
              "Espero hasta que llega.",
              "Esperaba hasta que llegaba."
            ],
            "correctIndex": 1,
            "explanation": "\"Esperaré hasta que llegue\" describe un evento futuro incierto: subjuntivo."
          }
        ]
      },
      {
        "heading": "Antes de que: siempre subjuntivo",
        "body": [
          "\"Antes de que\" siempre lleva subjuntivo, sin importar el tiempo, porque la acción de la cláusula nunca ha ocurrido en el momento de la acción principal."
        ],
        "examples": [
          {
            "es": "Salimos antes de que empezara la tormenta."
          },
          {
            "es": "Llama antes de que sea demasiado tarde."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa la oración.",
            "sentence": "Firmen el contrato antes de que ___ (cambiar) los términos.",
            "answer": "cambien",
            "explanation": "\"Antes de que\" siempre requiere subjuntivo."
          }
        ]
      },
      {
        "heading": "Aunque: concesión conocida vs. hipotética",
        "body": [
          "\"Aunque\" con indicativo reconoce un hecho conocido. \"Aunque\" con subjuntivo presenta la concesión como hipotética o desconocida para el hablante."
        ],
        "examples": [
          {
            "es": "Aunque llueve, vamos a salir. (sabe que llueve)"
          },
          {
            "es": "Aunque llueva, vamos a salir. (no sabe si lloverá)"
          }
        ],
        "checkpoint": [
          {
            "type": "multi-select",
            "question": "¿En qué oraciones \"aunque\" introduce un hecho conocido? (Elige todas las correctas)",
            "options": [
              "Aunque hace frío, salgo a correr.",
              "Aunque haga frío, saldré a correr.",
              "Aunque es caro, lo voy a comprar.",
              "Aunque sea caro, lo compraré."
            ],
            "correctIndexes": [
              0,
              2
            ],
            "explanation": "El indicativo (hace, es) presenta hechos que el hablante ya conoce como ciertos."
          }
        ]
      },
      {
        "heading": "Para que: propósito con sujeto distinto",
        "body": [
          "\"Para que\" siempre lleva subjuntivo cuando el sujeto de las dos cláusulas es diferente. Si el sujeto es el mismo, se usa \"para\" + infinitivo."
        ],
        "examples": [
          {
            "es": "Te lo explico para que entiendas. (sujetos distintos)"
          },
          {
            "es": "Estudio para entender mejor. (mismo sujeto, infinitivo)"
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa la oración.",
            "sentence": "Hablé más despacio para que todos ___ (comprender).",
            "answer": "comprendieran",
            "explanation": "\"Para que\" con sujetos distintos requiere subjuntivo."
          }
        ]
      },
      {
        "heading": "En la práctica",
        "body": [
          "Un debate político sobre una nueva ley."
        ],
        "examples": [
          {
            "es": "Cuando se apruebe la ley, muchas familias se beneficiarán."
          },
          {
            "es": "Aunque estemos de acuerdo con el objetivo, el método nos preocupa."
          },
          {
            "es": "Deberíamos revisar el texto antes de que se vote mañana."
          },
          {
            "es": "De acuerdo, para que todos entiendan bien los cambios primero."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Qué preocupa al segundo hablante?",
            "options": [
              "El objetivo de la ley",
              "El método propuesto",
              "El costo de la ley",
              "La fecha de la votación"
            ],
            "correctIndex": 1,
            "explanation": "Dice: \"el método nos preocupa,\" aunque estén de acuerdo con el objetivo."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "fill-blank",
        "prompt": "Completa la oración.",
        "sentence": "Iremos al parque cuando ___ (parar) de llover.",
        "answer": "pare",
        "explanation": "\"Cuando\" con un evento futuro incierto requiere subjuntivo."
      },
      {
        "type": "multiple-choice",
        "question": "¿Cuál es correcta?",
        "options": [
          "Antes de que llegues, limpio la casa.",
          "Antes de que llegues, limpiaré la casa.",
          "Antes de que llegas, limpiaré la casa.",
          "Antes de que llegarás, limpiaré la casa."
        ],
        "correctIndex": 1,
        "explanation": "\"Antes de que\" siempre lleva subjuntivo: llegues."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la oración.",
        "sentence": "Aunque ___ (ser) difícil, vamos a intentarlo.",
        "answer": "sea",
        "explanation": "\"Aunque\" con una concesión hipotética o desconocida lleva subjuntivo."
      }
    ]
  },
  {
    "slug": "subjunctive-adverbial-clauses-2",
    "level": "B2",
    "number": 4,
    "title": "Subjuntivo en Cláusulas Adverbiales, Part 2 of 2",
    "summary": "Domina cuándo usar subjuntivo con cuando, aunque, para que, y otras conjunciones temporales y concesivas.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Vocabulario: La política y el gobierno",
        "body": [
          "Cincuenta palabras sobre política y gobierno."
        ],
        "examples": [
          {
            "es": "el ministerio",
            "en": "departamento oficial encargado de un área del estado"
          },
          {
            "es": "el estado",
            "en": "entidad política y territorial"
          },
          {
            "es": "la democracia",
            "en": "sistema de gobierno del pueblo"
          },
          {
            "es": "el ciudadano",
            "en": "miembro de un estado con derechos y deberes"
          },
          {
            "es": "el senado",
            "en": "cámara legislativa alta"
          },
          {
            "es": "el congreso",
            "en": "cuerpo legislativo"
          },
          {
            "es": "el diputado",
            "en": "representante electo en el congreso"
          },
          {
            "es": "el partido político",
            "en": "organización con una ideología común"
          },
          {
            "es": "la campaña electoral",
            "en": "período de promoción antes de una elección"
          },
          {
            "es": "el electorado",
            "en": "conjunto de votantes"
          },
          {
            "es": "promulgar",
            "en": "hacer oficial una ley"
          },
          {
            "es": "el decreto",
            "en": "orden con fuerza de ley"
          },
          {
            "es": "la constitución",
            "en": "ley fundamental de un país"
          },
          {
            "es": "el poder judicial",
            "en": "rama que interpreta las leyes"
          },
          {
            "es": "la reforma",
            "en": "cambio significativo en un sistema"
          },
          {
            "es": "la subvención",
            "en": "ayuda económica que otorga el estado"
          },
          {
            "es": "el presupuesto público",
            "en": "plan de gastos del gobierno"
          },
          {
            "es": "la corrupción",
            "en": "abuso del poder para beneficio propio"
          },
          {
            "es": "la transparencia",
            "en": "claridad y apertura en la gestión pública"
          },
          {
            "es": "rendir cuentas",
            "en": "responder por las propias acciones"
          },
          {
            "es": "el discurso",
            "en": "declaración pública, a menudo política"
          },
          {
            "es": "la soberanía",
            "en": "autoridad suprema de un estado"
          },
          {
            "es": "la diplomacia",
            "en": "manejo de relaciones entre países"
          },
          {
            "es": "el tratado",
            "en": "acuerdo formal entre estados"
          },
          {
            "es": "la política exterior",
            "en": "relaciones de un país con otros"
          },
          {
            "es": "la oposición",
            "en": "grupo político contrario al gobierno"
          },
          {
            "es": "el mandato",
            "en": "período de gobierno de un cargo electo"
          },
          {
            "es": "gobernar",
            "en": "dirigir un estado"
          },
          {
            "es": "el poder ejecutivo",
            "en": "rama que aplica las leyes"
          },
          {
            "es": "la abstención",
            "en": "acción de no votar"
          },
          {
            "es": "el sufragio",
            "en": "derecho al voto"
          },
          {
            "es": "el referéndum",
            "en": "consulta directa al pueblo sobre un tema"
          },
          {
            "es": "la manifestación pacífica",
            "en": "protesta sin violencia"
          },
          {
            "es": "el activista",
            "en": "persona que promueve una causa social"
          },
          {
            "es": "la igualdad",
            "en": "trato equitativo entre personas"
          },
          {
            "es": "la justicia social",
            "en": "equidad en la distribución de recursos y derechos"
          },
          {
            "es": "el derecho civil",
            "en": "libertad garantizada al ciudadano"
          },
          {
            "es": "la sociedad civil",
            "en": "conjunto de organizaciones no gubernamentales"
          },
          {
            "es": "polarizado",
            "en": "dividido en posturas opuestas"
          },
          {
            "es": "moderado",
            "en": "que evita posturas extremas"
          },
          {
            "es": "radical",
            "en": "partidario de cambios profundos y drásticos"
          },
          {
            "es": "el electorado indeciso",
            "en": "votantes sin preferencia clara"
          },
          {
            "es": "la urna",
            "en": "recipiente donde se depositan los votos"
          },
          {
            "es": "el escrutinio",
            "en": "conteo oficial de los votos"
          },
          {
            "es": "el escaño",
            "en": "puesto que se ocupa en un parlamento tras ganar una elección"
          },
          {
            "es": "la plataforma política",
            "en": "conjunto de propuestas de un partido"
          },
          {
            "es": "el mandato popular",
            "en": "autoridad otorgada por el voto ciudadano"
          },
          {
            "es": "la asamblea",
            "en": "reunión de representantes para deliberar"
          },
          {
            "es": "el veto",
            "en": "poder de rechazar una decisión"
          },
          {
            "es": "la coalición",
            "en": "alianza entre partidos o grupos políticos"
          }
        ],
        "checkpoint": [
          {
            "type": "matching",
            "instructions": "Empareja cada palabra con su definición.",
            "pairs": [
              {
                "left": "promulgar",
                "right": "hacer oficial una ley"
              },
              {
                "left": "la soberanía",
                "right": "autoridad suprema de un estado"
              },
              {
                "left": "rendir cuentas",
                "right": "responder por las propias acciones"
              },
              {
                "left": "el referéndum",
                "right": "consulta directa al pueblo sobre un tema"
              },
              {
                "left": "polarizado",
                "right": "dividido en posturas opuestas"
              },
              {
                "left": "la abstención",
                "right": "acción de no votar"
              },
              {
                "left": "el sufragio",
                "right": "derecho al voto"
              },
              {
                "left": "el escrutinio",
                "right": "conteo oficial de los votos"
              },
              {
                "left": "la transparencia",
                "right": "claridad y apertura en la gestión pública"
              },
              {
                "left": "la coalición",
                "right": "alianza entre partidos o grupos políticos"
              }
            ],
            "explanation": "Estas diez palabras aparecen frecuentemente en el discurso político."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multi-select",
        "question": "¿Qué conjunciones siguen el patrón de \"cuando\" (subjuntivo para el futuro)? (Elige todas las correctas)",
        "options": [
          "en cuanto",
          "porque",
          "tan pronto como",
          "hasta que"
        ],
        "correctIndexes": [
          0,
          2,
          3
        ],
        "explanation": "\"Porque\" introduce una razón, no una condición temporal, y siempre lleva indicativo."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras.",
        "words": [
          "Te",
          "lo",
          "explico",
          "para",
          "que",
          "entiendas",
          "mejor"
        ],
        "explanation": "\"Para que\" con sujetos distintos requiere subjuntivo."
      },
      {
        "type": "multiple-choice",
        "question": "¿Qué palabra significa \"consulta directa al pueblo sobre un tema\"?",
        "options": [
          "el decreto",
          "el referéndum",
          "el tratado",
          "el mandato"
        ],
        "correctIndex": 1,
        "explanation": "\"El referéndum\" es una consulta directa al pueblo."
      }
    ]
  },
  {
    "slug": "imperfect-subjunctive-sequence-1",
    "level": "B2",
    "number": 5,
    "title": "Imperfecto de Subjuntivo y Secuencia de Tiempos, Part 1 of 2",
    "summary": "Usa el subjuntivo en el pasado, y aprende cuándo el verbo principal exige esta forma.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "Formación",
        "body": [
          "Toma la forma \"ellos\" del pretérito, quita \"-ron\", y agrega: -ra, -ras, -ra, -ramos (con tilde), -rais, -ran. Existe también la forma -se, más literaria, con el mismo significado.",
          "hablaron → hablara, hablaras, hablara, habláramos, hablarais, hablaran. tuvieron → tuviera, tuvieras, tuviera, tuviéramos, tuvierais, tuvieran."
        ],
        "examples": [
          {
            "es": "Quería que vinieras a la fiesta."
          },
          {
            "es": "Si yo tuviera más tiempo, viajaría más."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Conjuga el verbo en imperfecto de subjuntivo.",
            "sentence": "Esperaba que ellos ___ (llegar) temprano.",
            "answer": "llegaran",
            "explanation": "Llegaron → llegara, llegaras, llegara, llegáramos, llegarais, llegaran."
          }
        ]
      },
      {
        "heading": "Verbos irregulares: misma raíz que el pretérito",
        "body": [
          "Cualquier irregularidad del pretérito se mantiene en el imperfecto de subjuntivo, porque se deriva de la forma \"ellos\" de ese tiempo.",
          "ser/ir → fueron → fuera. tener → tuvieron → tuviera. decir → dijeron → dijera. poder → pudieron → pudiera."
        ],
        "examples": [
          {
            "es": "Ojalá fuera más fácil."
          },
          {
            "es": "Si pudiera, te ayudaría ahora mismo."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Cuál es la forma correcta de \"decir\" en imperfecto de subjuntivo, yo?",
            "options": [
              "dijera",
              "dijiera",
              "decyera",
              "diciera"
            ],
            "correctIndex": 0,
            "explanation": "Decir → dijeron → dijera, dijeras, dijera..."
          }
        ]
      },
      {
        "heading": "La secuencia de tiempos",
        "body": [
          "Cuando el verbo principal está en presente, se usa subjuntivo presente en la cláusula subordinada. Cuando el verbo principal está en un tiempo pasado (pretérito, imperfecto, condicional), se usa el imperfecto de subjuntivo."
        ],
        "examples": [
          {
            "es": "Quiero que vengas. (presente + subjuntivo presente)"
          },
          {
            "es": "Quería que vinieras. (pasado + imperfecto de subjuntivo)"
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa la oración con la secuencia correcta.",
            "sentence": "Dudaba que ellos ___ (tener) razón.",
            "answer": "tuvieran",
            "explanation": "El verbo principal (dudaba) está en pasado, así que la cláusula usa imperfecto de subjuntivo."
          }
        ]
      },
      {
        "heading": "Con expresiones impersonales y ojalá en pasado",
        "body": [
          "Las expresiones impersonales y ojalá también siguen la secuencia: en pasado, requieren imperfecto de subjuntivo."
        ],
        "examples": [
          {
            "es": "Era importante que llegáramos a tiempo."
          },
          {
            "es": "Ojalá hubiera más opciones. (deseo presente sobre algo improbable)"
          }
        ],
        "checkpoint": [
          {
            "type": "multi-select",
            "question": "¿En qué oraciones el verbo principal exige imperfecto de subjuntivo? (Elige todas las correctas)",
            "options": [
              "Espero que vengas.",
              "Esperaba que vinieras.",
              "Era necesario que estudiaras más.",
              "Es necesario que estudies más."
            ],
            "correctIndexes": [
              1,
              2
            ],
            "explanation": "El verbo principal en pasado (esperaba, era) exige imperfecto de subjuntivo en la cláusula siguiente."
          }
        ]
      },
      {
        "heading": "En la práctica",
        "body": [
          "Alguien recuerda un sueño de la infancia."
        ],
        "examples": [
          {
            "es": "De niño, siempre quería que mis padres me llevaran al circo."
          },
          {
            "es": "Soñaba con que algún día pudiera viajar por todo el mundo."
          },
          {
            "es": "Mis maestros dudaban que yo llegara a cumplir esas metas."
          },
          {
            "es": "Pero nunca dejé que sus dudas me detuvieran."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Qué dudaban los maestros?",
            "options": [
              "Que soñara demasiado",
              "Que llegara a cumplir sus metas",
              "Que viajara mucho",
              "Que fuera al circo"
            ],
            "correctIndex": 1,
            "explanation": "El texto dice: \"mis maestros dudaban que yo llegara a cumplir esas metas.\""
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "fill-blank",
        "prompt": "Conjuga el verbo.",
        "sentence": "Si yo ___ (poder), cambiaría de trabajo.",
        "answer": "pudiera",
        "explanation": "Poder → pudieron → pudiera, en la cláusula con \"si\" para lo hipotético."
      },
      {
        "type": "multiple-choice",
        "question": "¿Cuál es la forma correcta de \"ser\" en imperfecto de subjuntivo, nosotros?",
        "options": [
          "seríamos",
          "fuéramos",
          "seamos",
          "éramos"
        ],
        "correctIndex": 1,
        "explanation": "Ser/ir → fueron → fuéramos."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la secuencia de tiempos.",
        "sentence": "Me pidió que le ___ (ayudar).",
        "answer": "ayudara",
        "explanation": "El verbo principal (pidió) está en pasado: imperfecto de subjuntivo."
      }
    ]
  },
  {
    "slug": "imperfect-subjunctive-sequence-2",
    "level": "B2",
    "number": 6,
    "title": "Imperfecto de Subjuntivo y Secuencia de Tiempos, Part 2 of 2",
    "summary": "Usa el subjuntivo en el pasado, y aprende cuándo el verbo principal exige esta forma.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "Vocabulario: Los sueños y la imaginación",
        "body": [
          "Cincuenta palabras sobre los sueños, la imaginación y el mundo interior."
        ],
        "examples": [
          {
            "es": "el deseo ferviente",
            "en": "aspiración muy fuerte de conseguir algo"
          },
          {
            "es": "soñar despierto",
            "en": "imaginar mientras se está consciente"
          },
          {
            "es": "la fantasía",
            "en": "producto de la imaginación"
          },
          {
            "es": "imaginario",
            "en": "que no existe en la realidad"
          },
          {
            "es": "la pesadilla",
            "en": "sueño angustiante"
          },
          {
            "es": "el subconsciente",
            "en": "parte de la mente fuera de la conciencia"
          },
          {
            "es": "anhelar",
            "en": "desear intensamente algo"
          },
          {
            "es": "el anhelo",
            "en": "deseo profundo"
          },
          {
            "es": "aspirar a",
            "en": "tener como meta"
          },
          {
            "es": "la aspiración",
            "en": "meta o deseo elevado"
          },
          {
            "es": "vislumbrar",
            "en": "percibir algo de forma vaga o incipiente"
          },
          {
            "es": "concebir",
            "en": "formar una idea en la mente"
          },
          {
            "es": "idear",
            "en": "crear un plan o idea"
          },
          {
            "es": "el ideal",
            "en": "modelo perfecto imaginado"
          },
          {
            "es": "utópico",
            "en": "que representa un ideal difícil de alcanzar"
          },
          {
            "es": "la ilusión",
            "en": "esperanza o imagen mental sin base sólida"
          },
          {
            "es": "ilusionarse",
            "en": "hacerse esperanzas sobre algo"
          },
          {
            "es": "la ensoñación",
            "en": "estado de ensimismamiento imaginativo"
          },
          {
            "es": "evocar",
            "en": "traer un recuerdo o imagen a la mente"
          },
          {
            "es": "la evasión",
            "en": "escape mental de la realidad"
          },
          {
            "es": "etéreo",
            "en": "ligero, casi irreal"
          },
          {
            "es": "surrealista",
            "en": "que combina lo real con lo fantástico"
          },
          {
            "es": "lo insólito",
            "en": "lo inusual o extraordinario"
          },
          {
            "es": "desbordar la imaginación",
            "en": "superar los límites de lo imaginable"
          },
          {
            "es": "la premonición",
            "en": "sensación de que algo va a pasar"
          },
          {
            "es": "presentir",
            "en": "sentir que algo va a ocurrir"
          },
          {
            "es": "el sino",
            "en": "fuerza que, según la creencia popular, determina el curso de la vida"
          },
          {
            "es": "la incertidumbre",
            "en": "falta de certeza sobre el futuro"
          },
          {
            "es": "el potencial",
            "en": "capacidad no realizada aún"
          },
          {
            "es": "realizarse",
            "en": "cumplir una meta o sueño"
          },
          {
            "es": "plasmar un sueño",
            "en": "hacer realidad una idea"
          },
          {
            "es": "perseguir un sueño",
            "en": "trabajar activamente para lograrlo"
          },
          {
            "es": "el obstáculo",
            "en": "impedimento en el camino"
          },
          {
            "es": "la determinación",
            "en": "firmeza en lograr algo"
          },
          {
            "es": "inquebrantable",
            "en": "que no se puede romper o debilitar"
          },
          {
            "es": "la vacilación",
            "en": "falta de decisión firme ante algo"
          },
          {
            "es": "el escepticismo",
            "en": "actitud de duda ante algo"
          },
          {
            "es": "visionario",
            "en": "que tiene ideas innovadoras sobre el futuro"
          },
          {
            "es": "la clarividencia",
            "en": "capacidad de percibir con claridad más allá de lo evidente"
          },
          {
            "es": "el despertar",
            "en": "momento de tomar plena consciencia"
          },
          {
            "es": "meditar",
            "en": "reflexionar profundamente"
          },
          {
            "es": "la epifanía",
            "en": "comprensión súbita y reveladora"
          },
          {
            "es": "el propósito",
            "en": "razón de ser de algo"
          },
          {
            "es": "la vocación",
            "en": "inclinación natural hacia una actividad"
          },
          {
            "es": "trascender",
            "en": "ir más allá de un límite"
          },
          {
            "es": "materializarse",
            "en": "volverse real o tangible"
          },
          {
            "es": "el porvenir",
            "en": "el futuro"
          },
          {
            "es": "la quimera",
            "en": "ilusión o deseo imposible de realizar"
          },
          {
            "es": "el ensimismamiento",
            "en": "estado de estar absorto en los propios pensamientos"
          },
          {
            "es": "lo onírico",
            "en": "relacionado con los sueños"
          }
        ],
        "checkpoint": [
          {
            "type": "matching",
            "instructions": "Empareja cada palabra con su definición.",
            "pairs": [
              {
                "left": "anhelar",
                "right": "desear intensamente algo"
              },
              {
                "left": "vislumbrar",
                "right": "percibir algo de forma vaga o incipiente"
              },
              {
                "left": "la ilusión",
                "right": "esperanza o imagen mental sin base sólida"
              },
              {
                "left": "evocar",
                "right": "traer un recuerdo o imagen a la mente"
              },
              {
                "left": "presentir",
                "right": "sentir que algo va a ocurrir"
              },
              {
                "left": "perseguir un sueño",
                "right": "trabajar activamente para lograrlo"
              },
              {
                "left": "inquebrantable",
                "right": "que no se puede romper o debilitar"
              },
              {
                "left": "visionario",
                "right": "que tiene ideas innovadoras sobre el futuro"
              },
              {
                "left": "la epifanía",
                "right": "comprensión súbita y reveladora"
              },
              {
                "left": "materializarse",
                "right": "volverse real o tangible"
              }
            ],
            "explanation": "Estas diez palabras describen el mundo de los sueños y las aspiraciones."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multi-select",
        "question": "¿En qué oraciones se usa correctamente el imperfecto de subjuntivo? (Elige todas las correctas)",
        "options": [
          "Quería que fueras feliz.",
          "Quiero que seas feliz.",
          "Dudaba que tuviéramos razón.",
          "Dudo que tengamos razón."
        ],
        "correctIndexes": [
          0,
          2
        ],
        "explanation": "El verbo principal en pasado (quería, dudaba) exige imperfecto de subjuntivo."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras.",
        "words": [
          "Ojalá",
          "hubiera",
          "más",
          "tiempo",
          "para",
          "descansar"
        ],
        "explanation": "Ojalá con imperfecto de subjuntivo expresa un deseo sobre algo poco probable."
      },
      {
        "type": "multiple-choice",
        "question": "¿Qué palabra significa \"comprensión súbita y reveladora\"?",
        "options": [
          "la premonición",
          "la epifanía",
          "la ensoñación",
          "la clarividencia"
        ],
        "correctIndex": 1,
        "explanation": "\"La epifanía\" es una comprensión súbita y reveladora."
      }
    ]
  },
  {
    "slug": "hypothetical-si-clauses-1",
    "level": "B2",
    "number": 7,
    "title": "Cláusulas Hipotéticas con Si, Part 1 of 2",
    "summary": "Habla de situaciones imaginarias o contrarias a la realidad presente.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "La estructura hipotética",
        "body": [
          "Para condiciones hipotéticas o contrarias a la realidad actual: si + imperfecto de subjuntivo, + condicional."
        ],
        "examples": [
          {
            "es": "Si tuviera más dinero, viajaría por el mundo."
          },
          {
            "es": "Si fuéramos ricos, no trabajaríamos tanto."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa la oración.",
            "sentence": "Si yo ___ (saber) programar, crearía mi propia aplicación.",
            "answer": "supiera",
            "explanation": "La condición hipotética usa imperfecto de subjuntivo: supiera."
          }
        ]
      },
      {
        "heading": "Contraste con las condiciones reales",
        "body": [
          "Recuerda la diferencia: si + presente indicativo describe condiciones reales o probables (B1). Si + imperfecto de subjuntivo describe algo hipotético, poco probable, o contrario a la realidad presente."
        ],
        "examples": [
          {
            "es": "Si tengo tiempo, te ayudo. (real, probable)"
          },
          {
            "es": "Si tuviera tiempo, te ayudaría. (hipotético, quizás no lo tenga)"
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Cuál oración es hipotética?",
            "options": [
              "Si llueve, me quedo en casa.",
              "Si lloviera, me quedaría en casa.",
              "Si llueve, me quedaré en casa.",
              "Si llovió, me quedé en casa."
            ],
            "correctIndex": 1,
            "explanation": "\"Si lloviera\" presenta la lluvia como algo hipotético o poco probable en este momento."
          }
        ]
      },
      {
        "heading": "El condicional en la cláusula principal",
        "body": [
          "El condicional es casi siempre el tiempo correcto para la consecuencia hipotética, aunque en el habla informal a veces se usa también el imperfecto de subjuntivo en la cláusula principal."
        ],
        "examples": [
          {
            "es": "Si pudiéramos, cambiaríamos el sistema entero."
          },
          {
            "es": "Con más recursos, resolveríamos el problema más rápido."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa la oración.",
            "sentence": "Si la inteligencia artificial ___ (avanzar) más rápido, cambiaría todo.",
            "answer": "avanzara",
            "explanation": "La cláusula con \"si\" lleva imperfecto de subjuntivo: avanzara."
          }
        ]
      },
      {
        "heading": "Como si: siempre imperfecto de subjuntivo",
        "body": [
          "\"Como si\" (as if) siempre lleva imperfecto de subjuntivo, porque compara la realidad con algo que no es cierto."
        ],
        "examples": [
          {
            "es": "Habla como si lo supiera todo."
          },
          {
            "es": "Me trataron como si fuera un experto."
          }
        ],
        "checkpoint": [
          {
            "type": "multi-select",
            "question": "¿Qué oraciones usan correctamente el imperfecto de subjuntivo? (Elige todas las correctas)",
            "options": [
              "Si yo fuera tú, aceptaría la oferta.",
              "Actúa como si nada pasara.",
              "Si soy tú, acepto la oferta.",
              "Actúa como si nada pasa."
            ],
            "correctIndexes": [
              0,
              1
            ],
            "explanation": "\"Como si\" siempre requiere imperfecto de subjuntivo, igual que las condiciones hipotéticas con \"si\"."
          }
        ]
      },
      {
        "heading": "En la práctica",
        "body": [
          "Una discusión sobre el futuro de la inteligencia artificial."
        ],
        "examples": [
          {
            "es": "Si las máquinas pudieran razonar como nosotros, ¿qué cambiaría?"
          },
          {
            "es": "Cambiaría casi todo: el trabajo, la educación, hasta el arte."
          },
          {
            "es": "Algunos hablan como si eso ya fuera inevitable."
          },
          {
            "es": "Tal vez lo sea. Pero si actuáramos con más cuidado, evitaríamos ciertos riesgos."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Qué propone el segundo hablante para evitar riesgos?",
            "options": [
              "Detener el desarrollo por completo",
              "Actuar con más cuidado",
              "Ignorar el tema",
              "Acelerar el desarrollo"
            ],
            "correctIndex": 1,
            "explanation": "Dice: \"si actuáramos con más cuidado, evitaríamos ciertos riesgos.\""
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "fill-blank",
        "prompt": "Completa la oración.",
        "sentence": "Si nosotros ___ (vivir) en otra época, todo sería distinto.",
        "answer": "viviéramos",
        "explanation": "La condición hipotética usa imperfecto de subjuntivo: viviéramos."
      },
      {
        "type": "multiple-choice",
        "question": "¿Cuál oración describe una condición real, no hipotética?",
        "options": [
          "Si estudio, apruebo.",
          "Si estudiara, aprobaría.",
          "Si estudiara más, aprobaría el examen difícil.",
          "Si hubiera estudiado, habría aprobado."
        ],
        "correctIndex": 0,
        "explanation": "\"Si estudio, apruebo\" usa presente indicativo: condición real."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la oración.",
        "sentence": "Habla como si ___ (ser) el dueño de la empresa.",
        "answer": "fuera",
        "explanation": "\"Como si\" siempre lleva imperfecto de subjuntivo."
      }
    ]
  },
  {
    "slug": "hypothetical-si-clauses-2",
    "level": "B2",
    "number": 8,
    "title": "Cláusulas Hipotéticas con Si, Part 2 of 2",
    "summary": "Habla de situaciones imaginarias o contrarias a la realidad presente.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "Vocabulario: La tecnología y la inteligencia artificial",
        "body": [
          "Cincuenta palabras sobre tecnología avanzada e inteligencia artificial."
        ],
        "examples": [
          {
            "es": "la inteligencia artificial",
            "en": "sistemas capaces de simular procesos de razonamiento humano"
          },
          {
            "es": "el algoritmo",
            "en": "conjunto de instrucciones para resolver un problema"
          },
          {
            "es": "el aprendizaje automático",
            "en": "capacidad de un sistema de mejorar con la experiencia"
          },
          {
            "es": "la red neuronal",
            "en": "modelo computacional inspirado en el cerebro"
          },
          {
            "es": "el dato",
            "en": "unidad básica de información"
          },
          {
            "es": "procesar",
            "en": "analizar información sistemáticamente"
          },
          {
            "es": "automatizar",
            "en": "hacer que un proceso funcione sin intervención humana"
          },
          {
            "es": "la automatización",
            "en": "sustitución del trabajo manual por máquinas"
          },
          {
            "es": "el robot",
            "en": "máquina programable capaz de realizar tareas"
          },
          {
            "es": "la robótica",
            "en": "ciencia que diseña y construye robots"
          },
          {
            "es": "el sensor",
            "en": "dispositivo que detecta cambios físicos"
          },
          {
            "es": "el servidor",
            "en": "sistema que almacena y procesa datos a distancia"
          },
          {
            "es": "el software",
            "en": "programas que hacen funcionar una computadora"
          },
          {
            "es": "el hardware",
            "en": "componentes físicos de un dispositivo"
          },
          {
            "es": "programar",
            "en": "escribir instrucciones para una computadora"
          },
          {
            "es": "el desarrollador",
            "en": "persona que crea programas"
          },
          {
            "es": "la ciberseguridad",
            "en": "protección de sistemas contra ataques digitales"
          },
          {
            "es": "el hackeo",
            "en": "acceso no autorizado a un sistema"
          },
          {
            "es": "cifrar",
            "en": "proteger información mediante un código"
          },
          {
            "es": "la privacidad de datos",
            "en": "control sobre la información personal"
          },
          {
            "es": "la ética",
            "en": "principios que guían el comportamiento correcto"
          },
          {
            "es": "el sesgo",
            "en": "inclinación injusta o desequilibrada"
          },
          {
            "es": "el impacto social",
            "en": "efecto de algo sobre la sociedad"
          },
          {
            "es": "desplazar (empleos)",
            "en": "reemplazar puestos de trabajo"
          },
          {
            "es": "la eficiencia",
            "en": "capacidad de lograr algo con el mínimo esfuerzo"
          },
          {
            "es": "optimizar",
            "en": "mejorar el rendimiento de algo"
          },
          {
            "es": "la innovación",
            "en": "introducción de algo nuevo"
          },
          {
            "es": "innovador",
            "en": "que introduce novedades"
          },
          {
            "es": "de vanguardia",
            "en": "en la posición más avanzada de un campo"
          },
          {
            "es": "obsoleto",
            "en": "que ya no es útil o moderno"
          },
          {
            "es": "el dispositivo",
            "en": "aparato tecnológico"
          },
          {
            "es": "la interfaz",
            "en": "punto de interacción entre humano y máquina"
          },
          {
            "es": "el reconocimiento facial",
            "en": "tecnología que identifica rostros"
          },
          {
            "es": "el asistente virtual",
            "en": "programa que responde a comandos de voz"
          },
          {
            "es": "la realidad virtual",
            "en": "simulación digital de un entorno"
          },
          {
            "es": "la realidad aumentada",
            "en": "superposición de elementos digitales sobre el mundo real"
          },
          {
            "es": "la simulación",
            "en": "representación artificial de una situación real"
          },
          {
            "es": "predecir",
            "en": "anticipar algo antes de que ocurra"
          },
          {
            "es": "el modelo predictivo",
            "en": "sistema que estima resultados futuros"
          },
          {
            "es": "la brecha digital",
            "en": "desigualdad en el acceso a la tecnología"
          },
          {
            "es": "regular (una industria)",
            "en": "establecer normas para controlar algo"
          },
          {
            "es": "la normativa",
            "en": "conjunto de reglas oficiales"
          },
          {
            "es": "el avance tecnológico",
            "en": "progreso en el desarrollo de tecnología"
          },
          {
            "es": "irreversible",
            "en": "que no se puede deshacer"
          },
          {
            "es": "el riesgo existencial",
            "en": "amenaza a la supervivencia misma"
          },
          {
            "es": "la singularidad tecnológica",
            "en": "punto hipotético donde la IA supera la inteligencia humana"
          },
          {
            "es": "la autonomía",
            "en": "capacidad de actuar sin control externo"
          },
          {
            "es": "supervisar",
            "en": "controlar o vigilar un proceso"
          },
          {
            "es": "confiable",
            "en": "digno de confianza"
          },
          {
            "es": "la transparencia algorítmica",
            "en": "claridad sobre cómo funciona un sistema"
          }
        ],
        "checkpoint": [
          {
            "type": "matching",
            "instructions": "Empareja cada palabra con su definición.",
            "pairs": [
              {
                "left": "el algoritmo",
                "right": "conjunto de instrucciones para resolver un problema"
              },
              {
                "left": "automatizar",
                "right": "hacer que un proceso funcione sin intervención humana"
              },
              {
                "left": "el sesgo",
                "right": "inclinación injusta o desequilibrada"
              },
              {
                "left": "desplazar (empleos)",
                "right": "reemplazar puestos de trabajo"
              },
              {
                "left": "obsoleto",
                "right": "que ya no es útil o moderno"
              },
              {
                "left": "la brecha digital",
                "right": "desigualdad en el acceso a la tecnología"
              },
              {
                "left": "irreversible",
                "right": "que no se puede deshacer"
              },
              {
                "left": "la autonomía",
                "right": "capacidad de actuar sin control externo"
              },
              {
                "left": "confiable",
                "right": "digno de confianza"
              },
              {
                "left": "optimizar",
                "right": "mejorar el rendimiento de algo"
              }
            ],
            "explanation": "Estas diez palabras aparecen en debates sobre el futuro de la tecnología."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multi-select",
        "question": "¿Qué oraciones son hipotéticas? (Elige todas las correctas)",
        "options": [
          "Si tuviera alas, volaría.",
          "Si tengo tiempo, voy.",
          "Actúa como si supiera todo.",
          "Sabe mucho de este tema."
        ],
        "correctIndexes": [
          0,
          2
        ],
        "explanation": "Las otras dos describen realidad o condiciones probables, no hipótesis."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras.",
        "words": [
          "Si",
          "yo",
          "fuera",
          "presidente,",
          "cambiaría",
          "muchas",
          "cosas"
        ],
        "explanation": "Si + imperfecto de subjuntivo, + condicional."
      },
      {
        "type": "multiple-choice",
        "question": "¿Qué palabra significa \"que no se puede deshacer\"?",
        "options": [
          "obsoleto",
          "irreversible",
          "confiable",
          "escalable"
        ],
        "correctIndex": 1,
        "explanation": "\"Irreversible\" significa que no se puede deshacer."
      }
    ]
  },
  {
    "slug": "conditional-perfect-pluperfect-subjunctive-1",
    "level": "B2",
    "number": 9,
    "title": "Condicional Perfecto y Pluscuamperfecto de Subjuntivo, Part 1 of 2",
    "summary": "Expresa arrepentimientos y situaciones hipotéticas sobre el pasado: lo que habría pasado si...",
    "duration": "6 min",
    "sections": [
      {
        "heading": "El condicional perfecto",
        "body": [
          "Habría + participio expresa lo que habría ocurrido bajo otras circunstancias — una acción que no se realizó."
        ],
        "examples": [
          {
            "es": "Habría llamado, pero se me olvidó el teléfono."
          },
          {
            "es": "Con más tiempo, habríamos terminado el proyecto."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Conjuga el verbo.",
            "sentence": "Yo ___ (ir) a la fiesta, pero estaba enfermo.",
            "answer": "habría ido",
            "explanation": "Habría (condicional de haber) más el participio de ir (ido)."
          }
        ]
      },
      {
        "heading": "El pluscuamperfecto de subjuntivo",
        "body": [
          "Hubiera/hubiese + participio se usa para condiciones hipotéticas sobre el pasado, generalmente después de \"si\"."
        ],
        "examples": [
          {
            "es": "Si hubiera sabido, habría venido antes."
          },
          {
            "es": "Si hubieras estudiado más, habrías aprobado."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Cuál es la forma correcta de \"tener\" en pluscuamperfecto de subjuntivo, yo?",
            "options": [
              "habría tenido",
              "hubiera tenido",
              "tendría tenido",
              "tenía tenido"
            ],
            "correctIndex": 1,
            "explanation": "El pluscuamperfecto de subjuntivo usa hubiera + participio: hubiera tenido."
          }
        ]
      },
      {
        "heading": "Si + pluscuamperfecto de subjuntivo, + condicional perfecto",
        "body": [
          "Esta es la estructura clásica para arrepentimientos: describe cómo habría sido el pasado bajo otra circunstancia."
        ],
        "examples": [
          {
            "es": "Si hubiéramos salido antes, no habríamos perdido el vuelo."
          },
          {
            "es": "Si me hubieras avisado, habría llegado a tiempo."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa la oración.",
            "sentence": "Si ella ___ (practicar) más, habría ganado la competencia.",
            "answer": "hubiera practicado",
            "explanation": "La cláusula con \"si\" sobre el pasado usa pluscuamperfecto de subjuntivo."
          }
        ]
      },
      {
        "heading": "Ojalá + pluscuamperfecto de subjuntivo",
        "body": [
          "Ojalá con pluscuamperfecto de subjuntivo expresa un arrepentimiento sobre algo que ya no se puede cambiar."
        ],
        "examples": [
          {
            "es": "Ojalá hubiera aceptado ese trabajo."
          },
          {
            "es": "Ojalá no hubiéramos discutido tanto."
          }
        ],
        "checkpoint": [
          {
            "type": "multi-select",
            "question": "¿Qué oraciones expresan un arrepentimiento sobre el pasado? (Elige todas las correctas)",
            "options": [
              "Ojalá hubiera viajado más de joven.",
              "Ojalá viajara más este año.",
              "Si hubiera sabido, habría actuado distinto.",
              "Si supiera, actuaría distinto."
            ],
            "correctIndexes": [
              0,
              2
            ],
            "explanation": "Las otras dos se refieren al presente o futuro, no a un arrepentimiento sobre el pasado."
          }
        ]
      },
      {
        "heading": "En la práctica",
        "body": [
          "Una conversación entre dos amigos sobre decisiones pasadas."
        ],
        "examples": [
          {
            "es": "A veces pienso que si hubiera aceptado esa beca, mi vida sería diferente."
          },
          {
            "es": "Todos tenemos arrepentimientos así. Yo habría estudiado otra carrera si hubiera sabido lo que sé ahora."
          },
          {
            "es": "Es curioso cómo una sola decisión habría cambiado tanto."
          },
          {
            "es": "Sí, pero al final, no habríamos llegado hasta aquí sin esos errores."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Qué habría aceptado la primera persona?",
            "options": [
              "Un trabajo",
              "Una beca",
              "Una casa",
              "Un viaje"
            ],
            "correctIndex": 1,
            "explanation": "Dice: \"si hubiera aceptado esa beca.\""
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "fill-blank",
        "prompt": "Conjuga el verbo.",
        "sentence": "Si hubiéramos sabido, ___ (actuar, nosotros) diferente.",
        "answer": "habríamos actuado",
        "explanation": "Habríamos (condicional de haber) más el participio de actuar (actuado)."
      },
      {
        "type": "multiple-choice",
        "question": "¿Cuál es la forma correcta de \"decir\" en pluscuamperfecto de subjuntivo, tú?",
        "options": [
          "habrías dicho",
          "hubieras dicho",
          "dirías dicho",
          "decías dicho"
        ],
        "correctIndex": 1,
        "explanation": "El pluscuamperfecto de subjuntivo usa hubieras + participio irregular de decir (dicho)."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la oración.",
        "sentence": "Ojalá ___ (llegar, yo) a tiempo aquel día.",
        "answer": "hubiera llegado",
        "explanation": "Ojalá con pluscuamperfecto de subjuntivo expresa un arrepentimiento sobre el pasado."
      }
    ]
  },
  {
    "slug": "conditional-perfect-pluperfect-subjunctive-2",
    "level": "B2",
    "number": 10,
    "title": "Condicional Perfecto y Pluscuamperfecto de Subjuntivo, Part 2 of 2",
    "summary": "Expresa arrepentimientos y situaciones hipotéticas sobre el pasado: lo que habría pasado si...",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Vocabulario: Los arrepentimientos y las decisiones de vida",
        "body": [
          "Cincuenta palabras sobre decisiones de vida, arrepentimientos y sus consecuencias."
        ],
        "examples": [
          {
            "es": "el arrepentimiento",
            "en": "sentimiento de pesar por algo hecho o no hecho"
          },
          {
            "es": "arrepentirse de",
            "en": "sentir pesar por una acción propia"
          },
          {
            "es": "la encrucijada",
            "en": "momento de decisión difícil"
          },
          {
            "es": "la bifurcación",
            "en": "punto donde un camino se divide"
          },
          {
            "es": "el rumbo",
            "en": "dirección que toma la vida de alguien"
          },
          {
            "es": "replantearse",
            "en": "reconsiderar algo desde cero"
          },
          {
            "es": "la disyuntiva",
            "en": "situación con dos opciones incompatibles"
          },
          {
            "es": "sopesar",
            "en": "evaluar cuidadosamente los pros y contras"
          },
          {
            "es": "la consecuencia",
            "en": "resultado de una acción"
          },
          {
            "es": "irrevocable",
            "en": "que no se puede cambiar ni deshacer"
          },
          {
            "es": "el punto de no retorno",
            "en": "momento después del cual algo no se puede revertir"
          },
          {
            "es": "postergar",
            "en": "aplazar algo para después"
          },
          {
            "es": "la oportunidad perdida",
            "en": "posibilidad que no se aprovechó"
          },
          {
            "es": "dejar pasar",
            "en": "no aprovechar algo a tiempo"
          },
          {
            "es": "el camino no tomado",
            "en": "opción que no se eligió"
          },
          {
            "es": "cuestionarse",
            "en": "dudar de las propias decisiones"
          },
          {
            "es": "la resiliencia",
            "en": "capacidad de recuperarse ante la adversidad"
          },
          {
            "es": "aprender de los errores",
            "en": "extraer lecciones de las equivocaciones"
          },
          {
            "es": "hacer las paces (con algo)",
            "en": "aceptar y reconciliarse con una situación"
          },
          {
            "es": "el peso de la culpa",
            "en": "carga emocional de sentirse responsable"
          },
          {
            "es": "liberarse de",
            "en": "dejar atrás una carga emocional"
          },
          {
            "es": "mirar hacia atrás",
            "en": "reflexionar sobre el pasado"
          },
          {
            "es": "mirar hacia adelante",
            "en": "enfocarse en el futuro"
          },
          {
            "es": "el balance de vida",
            "en": "evaluación general de las propias decisiones"
          },
          {
            "es": "la sabiduría",
            "en": "conocimiento profundo obtenido con la experiencia"
          },
          {
            "es": "apreciar",
            "en": "reconocer el mérito o el valor de algo"
          },
          {
            "es": "dar por sentado",
            "en": "no apreciar algo por considerarlo garantizado"
          },
          {
            "es": "el segundo intento",
            "en": "nueva oportunidad después de un fracaso"
          },
          {
            "es": "el punto de inflexión",
            "en": "momento decisivo que cambia el curso de algo"
          },
          {
            "es": "asumir la responsabilidad",
            "en": "aceptar las consecuencias de las propias acciones"
          },
          {
            "es": "perdonarse a uno mismo",
            "en": "dejar de culparse por algo"
          },
          {
            "es": "el legado",
            "en": "lo que una persona deja tras de sí"
          },
          {
            "es": "trascender un error",
            "en": "superar algo negativo del pasado"
          },
          {
            "es": "la brújula moral",
            "en": "sentido interno de lo correcto e incorrecto"
          },
          {
            "es": "dejarse llevar",
            "en": "actuar sin planear, guiado por el momento"
          },
          {
            "es": "la prudencia",
            "en": "cautela al tomar decisiones"
          },
          {
            "es": "el arrepentimiento tardío",
            "en": "pesar que llega después de que ya no se puede actuar"
          },
          {
            "es": "aceptar la incertidumbre",
            "en": "hacer las paces con lo desconocido"
          },
          {
            "es": "el desenlace",
            "en": "resultado final de una situación"
          },
          {
            "es": "lo irremediable",
            "en": "lo que ya no tiene solución"
          },
          {
            "es": "superar",
            "en": "vencer una dificultad o un obstáculo"
          },
          {
            "es": "la gratitud",
            "en": "sentimiento de aprecio por lo vivido"
          },
          {
            "es": "el propósito de vida",
            "en": "sentido profundo que guía las decisiones"
          },
          {
            "es": "evolucionar como persona",
            "en": "crecer y cambiar positivamente con el tiempo"
          },
          {
            "es": "la plenitud",
            "en": "sensación de satisfacción completa"
          },
          {
            "es": "el remordimiento",
            "en": "sentimiento intenso de culpa por algo hecho"
          },
          {
            "es": "la nostalgia",
            "en": "añoranza del pasado"
          },
          {
            "es": "la lección aprendida",
            "en": "enseñanza obtenida de una experiencia"
          },
          {
            "es": "el destino alternativo",
            "en": "posible curso de vida distinto al vivido"
          },
          {
            "es": "aceptar el pasado",
            "en": "hacer las paces con lo ya ocurrido"
          }
        ],
        "checkpoint": [
          {
            "type": "matching",
            "instructions": "Empareja cada palabra con su definición.",
            "pairs": [
              {
                "left": "la encrucijada",
                "right": "momento de decisión difícil"
              },
              {
                "left": "sopesar",
                "right": "evaluar cuidadosamente los pros y contras"
              },
              {
                "left": "irrevocable",
                "right": "que no se puede cambiar ni deshacer"
              },
              {
                "left": "postergar",
                "right": "aplazar algo para después"
              },
              {
                "left": "la resiliencia",
                "right": "capacidad de recuperarse ante la adversidad"
              },
              {
                "left": "dar por sentado",
                "right": "no apreciar algo por considerarlo garantizado"
              },
              {
                "left": "el remordimiento",
                "right": "sentimiento intenso de culpa por algo hecho"
              },
              {
                "left": "asumir la responsabilidad",
                "right": "aceptar las consecuencias de las propias acciones"
              },
              {
                "left": "lo irremediable",
                "right": "lo que ya no tiene solución"
              },
              {
                "left": "la plenitud",
                "right": "sensación de satisfacción completa"
              }
            ],
            "explanation": "Estas diez palabras describen el proceso de reflexionar sobre decisiones de vida."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multi-select",
        "question": "¿Qué oraciones usan correctamente si + pluscuamperfecto de subjuntivo? (Elige todas las correctas)",
        "options": [
          "Si hubiera estudiado, habría aprobado.",
          "Si estudiara, aprobaría.",
          "Si hubieras llamado, habría contestado.",
          "Si llamas, contesto."
        ],
        "correctIndexes": [
          0,
          2
        ],
        "explanation": "Las otras dos usan estructuras diferentes: hipotética presente y condición real."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras.",
        "words": [
          "Si",
          "hubiéramos",
          "salido",
          "antes,",
          "no",
          "habríamos",
          "llegado",
          "tarde"
        ],
        "explanation": "Si + pluscuamperfecto de subjuntivo, + condicional perfecto."
      },
      {
        "type": "multiple-choice",
        "question": "¿Qué palabra describe \"el momento decisivo que cambia el curso de algo\"?",
        "options": [
          "la bifurcación",
          "el punto de inflexión",
          "el desenlace",
          "la disyuntiva"
        ],
        "correctIndex": 1,
        "explanation": "\"El punto de inflexión\" es el momento decisivo que cambia el curso de algo."
      }
    ]
  },
  {
    "slug": "conditional-perfect-pluperfect-subjunctive-mastery-check",
    "level": "B2",
    "number": 11,
    "title": "Prueba de Dominio: Condicional Perfecto y Pluscuamperfecto de Subjuntivo",
    "summary": "Un examen de dominio enfocado en el condicional perfecto y el pluscuamperfecto de subjuntivo para expresar arrepentimientos e hipótesis sobre el pasado.",
    "duration": "10 min",
    "sections": [],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "¿Cuál es la forma correcta de \"escribir\" en condicional perfecto, ellos?",
        "options": [
          "habrían escrito",
          "habrían escribido",
          "escribirían escrito",
          "habían escrito"
        ],
        "correctIndex": 0,
        "explanation": "El condicional perfecto usa habrían más el participio irregular de escribir: escrito."
      },
      {
        "type": "multiple-choice",
        "question": "¿Cuál es la forma correcta de \"poner\" en pluscuamperfecto de subjuntivo, nosotros?",
        "options": [
          "habríamos puesto",
          "hubiéramos puesto",
          "poníamos puesto",
          "pondríamos puesto"
        ],
        "correctIndex": 1,
        "explanation": "El pluscuamperfecto de subjuntivo usa hubiéramos más el participio irregular de poner: puesto."
      },
      {
        "type": "fill-blank",
        "prompt": "Conjuga el verbo entre paréntesis.",
        "sentence": "Si yo ___ (ver) la señal a tiempo, habría cambiado de rumbo.",
        "answer": "hubiera visto",
        "explanation": "La cláusula con \"si\" sobre el pasado usa pluscuamperfecto de subjuntivo: hubiera visto (participio irregular de ver: visto)."
      },
      {
        "type": "fill-blank",
        "prompt": "Conjuga el verbo entre paréntesis.",
        "sentence": "Si hubiéramos sopesado mejor las opciones, ___ (evitar, nosotros) ese error.",
        "answer": "habríamos evitado",
        "explanation": "La cláusula principal de una hipótesis sobre el pasado usa condicional perfecto: habríamos evitado."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras para formar una oración hipotética sobre el pasado.",
        "words": [
          "Si",
          "hubiera",
          "aceptado",
          "esa",
          "oferta,",
          "mi",
          "rumbo",
          "habría",
          "sido",
          "distinto"
        ],
        "translation": "If I had accepted that offer, my path would have been different.",
        "explanation": "Estructura clásica: si + pluscuamperfecto de subjuntivo, + condicional perfecto."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras.",
        "words": [
          "Ojalá",
          "no",
          "hubiéramos",
          "dejado",
          "pasar",
          "esa",
          "oportunidad"
        ],
        "translation": "I wish we hadn't let that opportunity pass.",
        "explanation": "Ojalá + pluscuamperfecto de subjuntivo expresa un arrepentimiento sobre algo irreversible."
      },
      {
        "type": "multi-select",
        "question": "¿Qué oraciones expresan correctamente una hipótesis o un arrepentimiento sobre el pasado? (Elige todas las correctas)",
        "options": [
          "Si hubiera insistido más, habría conseguido el puesto.",
          "Ojalá hubiera perdonado a tiempo.",
          "Si insisto más, consigo el puesto.",
          "Ojalá perdonara a tiempo."
        ],
        "correctIndexes": [
          0,
          1
        ],
        "explanation": "Las otras dos usan tiempos de hipótesis presente o futuro, no de arrepentimiento sobre el pasado."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Traduce al español.",
        "source": "If she had told me the truth, I would have forgiven her.",
        "answer": "Si ella me hubiera dicho la verdad, la habría perdonado.",
        "altAnswers": [
          "Si ella me hubiese dicho la verdad, la habría perdonado."
        ],
        "explanation": "Si + pluscuamperfecto de subjuntivo (hubiera dicho) más condicional perfecto (habría perdonado)."
      },
      {
        "type": "translate",
        "direction": "es-en",
        "prompt": "Traduce al inglés.",
        "source": "Si hubiéramos hablado antes, no habríamos llegado a este punto de no retorno.",
        "answer": "If we had talked earlier, we wouldn't have reached this point of no return.",
        "explanation": "Ambas cláusulas de la hipótesis pasada se traducen con \"had + participle\" y \"would have + participle\"."
      },
      {
        "type": "multiple-choice",
        "question": "¿Cuál oración combina correctamente el pluscuamperfecto de subjuntivo y el condicional perfecto?",
        "options": [
          "Si hubiera sabido la verdad, habría actuado distinto.",
          "Si habría sabido la verdad, hubiera actuado distinto.",
          "Si hubiera sabido la verdad, hubiera actuado distinto igual.",
          "Si sabría la verdad, habría actuado distinto."
        ],
        "correctIndex": 0,
        "explanation": "La cláusula con \"si\" lleva pluscuamperfecto de subjuntivo (hubiera sabido); la principal lleva condicional perfecto (habría actuado). \"Habría\" nunca aparece justo después de \"si\"."
      },
      {
        "type": "multiple-choice",
        "question": "¿Qué significa \"la brújula moral\"?",
        "options": [
          "dirección que toma la vida de alguien",
          "sentido interno de lo correcto e incorrecto",
          "capacidad de recuperarse ante la adversidad",
          "punto de decisión difícil"
        ],
        "correctIndex": 1,
        "explanation": "\"La brújula moral\" es el sentido interno de lo correcto e incorrecto."
      },
      {
        "type": "matching",
        "instructions": "Empareja cada palabra con su definición.",
        "pairs": [
          {
            "left": "la disyuntiva",
            "right": "situación con dos opciones incompatibles"
          },
          {
            "left": "el punto de no retorno",
            "right": "momento después del cual algo no se puede revertir"
          },
          {
            "left": "la oportunidad perdida",
            "right": "posibilidad que no se aprovechó"
          },
          {
            "left": "el camino no tomado",
            "right": "opción que no se eligió"
          },
          {
            "left": "cuestionarse",
            "right": "dudar de las propias decisiones"
          },
          {
            "left": "hacer las paces (con algo)",
            "right": "aceptar y reconciliarse con una situación"
          },
          {
            "left": "perdonarse a uno mismo",
            "right": "dejar de culparse por algo"
          },
          {
            "left": "el legado",
            "right": "lo que una persona deja tras de sí"
          },
          {
            "left": "trascender un error",
            "right": "superar algo negativo del pasado"
          },
          {
            "left": "el destino alternativo",
            "right": "posible curso de vida distinto al vivido"
          }
        ],
        "explanation": "Estas diez palabras describen la reflexión sobre decisiones irreversibles y sus consecuencias emocionales."
      },
      {
        "type": "fill-blank",
        "prompt": "Conjuga el verbo entre paréntesis.",
        "sentence": "Ojalá no ___ (romper, nosotros) esa amistad por un malentendido.",
        "answer": "hubiéramos roto",
        "explanation": "Ojalá + pluscuamperfecto de subjuntivo; participio irregular de romper: roto."
      },
      {
        "type": "multiple-choice",
        "question": "¿Cuál es la forma correcta de \"volver\" en condicional perfecto, yo?",
        "options": [
          "habría vuelto",
          "habría volvido",
          "hubiera vuelto",
          "volvería vuelto"
        ],
        "correctIndex": 0,
        "explanation": "Condicional perfecto: habría más el participio irregular de volver: vuelto."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras.",
        "words": [
          "Si",
          "hubiéramos",
          "asumido",
          "la",
          "responsabilidad",
          "antes,",
          "habríamos",
          "evitado",
          "el",
          "desenlace"
        ],
        "translation": "If we had taken responsibility earlier, we would have avoided the outcome.",
        "explanation": "Estructura clásica de arrepentimiento: si + pluscuamperfecto de subjuntivo + condicional perfecto."
      },
      {
        "type": "multi-select",
        "question": "¿En qué oraciones el participio está formado correctamente? (Elige todas las correctas)",
        "options": [
          "Si hubiera visto la señal, habría parado.",
          "Si hubiera veído la señal, habría parado.",
          "Habría escribido la carta si hubiera tenido tiempo.",
          "Habría escrito la carta si hubiera tenido tiempo."
        ],
        "correctIndexes": [
          0,
          3
        ],
        "explanation": "\"Veído\" no existe: el participio de ver es visto. \"Escribido\" no existe: el participio de escribir es escrito."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Traduce al español.",
        "source": "I wish I had asked for a second chance before it was too late.",
        "answer": "Ojalá hubiera pedido una segunda oportunidad antes de que fuera demasiado tarde.",
        "altAnswers": [
          "Ojalá hubiese pedido una segunda oportunidad antes de que fuera demasiado tarde."
        ],
        "explanation": "Ojalá + pluscuamperfecto de subjuntivo (hubiera pedido) expresa un arrepentimiento sobre algo que ya no se puede cambiar."
      }
    ]
  },
  {
    "slug": "reported-speech-1",
    "level": "B2",
    "number": 12,
    "title": "El Estilo Indirecto, Part 1 of 2",
    "summary": "Reporta lo que otros dijeron, con los cambios de tiempo verbal y de referencias que esto exige.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "El cambio básico de tiempo verbal",
        "body": [
          "Cuando el verbo introductorio está en pasado (dijo que, me contó que, explicó que), los tiempos verbales retroceden: presente → imperfecto, pretérito → pluscuamperfecto, futuro → condicional."
        ],
        "examples": [
          {
            "es": "\"Estoy cansado.\" → Dijo que estaba cansado."
          },
          {
            "es": "\"Llegué tarde.\" → Explicó que había llegado tarde."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Convierte al estilo indirecto.",
            "sentence": "\"Voy a estudiar medicina.\" → Dijo que ___ estudiar medicina.",
            "answer": "iba a",
            "explanation": "El futuro cercano (voy a) retrocede a imperfecto (iba a) en el estilo indirecto."
          }
        ]
      },
      {
        "heading": "El futuro se convierte en condicional",
        "body": [
          "\"Iré mañana\" se convierte en \"dijo que iría al día siguiente\" — el futuro simple retrocede al condicional."
        ],
        "examples": [
          {
            "es": "\"Volveré pronto.\" → Prometió que volvería pronto."
          },
          {
            "es": "\"Te ayudaré.\" → Aseguró que me ayudaría."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Cómo se reporta \"Terminaré el informe\"?",
            "options": [
              "Dijo que terminará el informe.",
              "Dijo que terminaría el informe.",
              "Dijo que termina el informe.",
              "Dijo que terminó el informe."
            ],
            "correctIndex": 1,
            "explanation": "El futuro (terminaré) retrocede al condicional (terminaría) en el estilo indirecto."
          }
        ]
      },
      {
        "heading": "Cambios de referencias temporales y espaciales",
        "body": [
          "Junto con los verbos, cambian ciertas palabras: hoy → ese día, mañana → al día siguiente, ayer → el día anterior, aquí → allí, este → aquel."
        ],
        "examples": [
          {
            "es": "\"Nos vemos aquí mañana.\" → Dijo que nos veríamos allí al día siguiente."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa la conversión.",
            "sentence": "\"Terminé esto ayer.\" → Explicó que había terminado eso ___.",
            "answer": "el día anterior",
            "explanation": "\"Ayer\" se convierte en \"el día anterior\" al reportar algo dicho en el pasado."
          }
        ]
      },
      {
        "heading": "Mandatos en estilo indirecto",
        "body": [
          "Los mandatos se convierten en \"que\" + subjuntivo, o con verbos como pedir/decir + subjuntivo."
        ],
        "examples": [
          {
            "es": "\"Ven aquí.\" → Me pidió que fuera allí."
          },
          {
            "es": "\"No llegues tarde.\" → Me dijo que no llegara tarde."
          }
        ],
        "checkpoint": [
          {
            "type": "multi-select",
            "question": "¿En qué oraciones se reportan mandatos correctamente? (Elige todas las correctas)",
            "options": [
              "Me pidió que la ayudara.",
              "Me pidió que la ayudo.",
              "Nos dijo que esperáramos.",
              "Nos dijo que esperamos."
            ],
            "correctIndexes": [
              0,
              2
            ],
            "explanation": "Los mandatos reportados siempre usan subjuntivo: ayudara, esperáramos."
          }
        ]
      },
      {
        "heading": "En la práctica",
        "body": [
          "Un periodista resume una declaración oficial."
        ],
        "examples": [
          {
            "es": "El portavoz dijo que la nueva política entraría en vigor el mes siguiente."
          },
          {
            "es": "También explicó que el gobierno había estudiado el tema durante meses."
          },
          {
            "es": "Añadió que esperaba que los ciudadanos apoyaran la medida."
          },
          {
            "es": "Finalmente, aseguró que responderían a todas las preguntas al día siguiente."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Cuándo entraría en vigor la nueva política, según el portavoz?",
            "options": [
              "Esa misma semana",
              "El mes siguiente",
              "El año siguiente",
              "Inmediatamente"
            ],
            "correctIndex": 1,
            "explanation": "Dijo que \"entraría en vigor el mes siguiente.\""
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "fill-blank",
        "prompt": "Convierte al estilo indirecto.",
        "sentence": "\"Estoy muy ocupado.\" → Dijo que ___ muy ocupado.",
        "answer": "estaba",
        "explanation": "El presente (estoy) retrocede a imperfecto (estaba) en el estilo indirecto."
      },
      {
        "type": "multiple-choice",
        "question": "¿Cómo se reporta \"Iré a la reunión\"?",
        "options": [
          "Dijo que va a la reunión.",
          "Dijo que iría a la reunión.",
          "Dijo que fue a la reunión.",
          "Dijo que va a ir a la reunión."
        ],
        "correctIndex": 1,
        "explanation": "El futuro (iré) retrocede al condicional (iría)."
      },
      {
        "type": "fill-blank",
        "prompt": "Convierte la referencia temporal.",
        "sentence": "\"Llegué hoy.\" → Dijo que había llegado ___.",
        "answer": "ese día",
        "explanation": "\"Hoy\" se convierte en \"ese día\" al reportar algo en pasado."
      }
    ]
  },
  {
    "slug": "reported-speech-2",
    "level": "B2",
    "number": 13,
    "title": "El Estilo Indirecto, Part 2 of 2",
    "summary": "Reporta lo que otros dijeron, con los cambios de tiempo verbal y de referencias que esto exige.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Vocabulario: El periodismo y los medios de comunicación",
        "body": [
          "Cincuenta palabras del mundo del periodismo, perfectas para practicar el estilo indirecto."
        ],
        "examples": [
          {
            "es": "el cronista",
            "en": "periodista que narra los hechos con detalle"
          },
          {
            "es": "el informante",
            "en": "persona que proporciona datos a un periodista"
          },
          {
            "es": "parafrasear",
            "en": "expresar con otras palabras lo que alguien dijo"
          },
          {
            "es": "el portavoz",
            "en": "persona que habla en nombre de un grupo"
          },
          {
            "es": "manifestar",
            "en": "expresar una postura de forma clara y pública"
          },
          {
            "es": "la declaración",
            "en": "afirmación pública y oficial"
          },
          {
            "es": "el comunicado de prensa",
            "en": "anuncio oficial dirigido a los medios"
          },
          {
            "es": "cubrir (una noticia)",
            "en": "reportar sobre un evento"
          },
          {
            "es": "la cobertura mediática",
            "en": "atención que los medios dan a un tema"
          },
          {
            "es": "el encabezado",
            "en": "frase destacada al inicio de una noticia"
          },
          {
            "es": "el editorial",
            "en": "artículo de opinión de un medio"
          },
          {
            "es": "imparcial",
            "en": "que no favorece ningún lado"
          },
          {
            "es": "el sesgo mediático",
            "en": "inclinación de un medio hacia una perspectiva"
          },
          {
            "es": "la desinformación",
            "en": "información falsa difundida intencionalmente"
          },
          {
            "es": "verificar los hechos",
            "en": "confirmar que una información es correcta"
          },
          {
            "es": "la credibilidad",
            "en": "cualidad de ser digno de confianza"
          },
          {
            "es": "el corresponsal",
            "en": "periodista que reporta desde otro lugar"
          },
          {
            "es": "la primicia",
            "en": "noticia publicada antes que otros medios"
          },
          {
            "es": "filtrar información",
            "en": "revelar datos de forma no autorizada"
          },
          {
            "es": "el anonimato",
            "en": "condición de no revelar la identidad"
          },
          {
            "es": "el reportaje de investigación",
            "en": "trabajo periodístico profundo sobre un tema"
          },
          {
            "es": "la difusión",
            "en": "acción de dar a conocer algo ampliamente"
          },
          {
            "es": "viralizarse",
            "en": "propagarse rápidamente en internet"
          },
          {
            "es": "la opinión pública",
            "en": "actitud general de la sociedad sobre un tema"
          },
          {
            "es": "influir en",
            "en": "afectar el pensamiento o comportamiento de otros"
          },
          {
            "es": "la libertad de prensa",
            "en": "derecho de los medios a informar sin censura"
          },
          {
            "es": "censurar",
            "en": "prohibir la difusión de cierta información"
          },
          {
            "es": "la transparencia informativa",
            "en": "claridad sobre cómo se obtiene la información"
          },
          {
            "es": "el conflicto de interés",
            "en": "situación donde intereses personales afectan la imparcialidad"
          },
          {
            "es": "el archivo periodístico",
            "en": "colección histórica de publicaciones"
          },
          {
            "es": "la exclusiva",
            "en": "noticia que solo un medio publica"
          },
          {
            "es": "desacreditar",
            "en": "quitarle credibilidad a una afirmación o persona"
          },
          {
            "es": "desmentir",
            "en": "negar públicamente que algo es cierto"
          },
          {
            "es": "aclarar",
            "en": "explicar algo para eliminar la confusión"
          },
          {
            "es": "el embargo informativo",
            "en": "acuerdo de no publicar algo hasta cierta fecha"
          },
          {
            "es": "el testigo presencial",
            "en": "persona que vio un evento directamente"
          },
          {
            "es": "la especulación",
            "en": "suposición sin confirmación oficial"
          },
          {
            "es": "verificar",
            "en": "comprobar que algo es exacto"
          },
          {
            "es": "el consenso mediático",
            "en": "acuerdo general entre distintos medios sobre un hecho"
          },
          {
            "es": "la polarización informativa",
            "en": "división marcada en cómo se interpreta la información"
          },
          {
            "es": "el algoritmo de noticias",
            "en": "sistema que selecciona qué contenido mostrar a cada usuario"
          },
          {
            "es": "la cámara de eco",
            "en": "entorno donde solo se escuchan opiniones similares"
          },
          {
            "es": "el análisis crítico",
            "en": "evaluación cuidadosa y razonada de una información"
          },
          {
            "es": "contrastar fuentes",
            "en": "comparar distintas versiones de un hecho"
          },
          {
            "es": "el derecho a réplica",
            "en": "posibilidad de responder públicamente a una acusación"
          },
          {
            "es": "la ética periodística",
            "en": "principios que guían el trabajo del periodista"
          },
          {
            "es": "investigar a fondo",
            "en": "examinar un tema con mucho detalle"
          },
          {
            "es": "la nota de última hora",
            "en": "información urgente y reciente"
          },
          {
            "es": "el enfoque narrativo",
            "en": "manera en que se presenta una historia"
          },
          {
            "es": "la objetividad",
            "en": "cualidad de no dejarse influir por opiniones personales"
          },
          {
            "es": "el rotativo",
            "en": "periódico, especialmente uno de tirada diaria"
          }
        ],
        "checkpoint": [
          {
            "type": "matching",
            "instructions": "Empareja cada palabra con su definición.",
            "pairs": [
              {
                "left": "el portavoz",
                "right": "persona que habla en nombre de un grupo"
              },
              {
                "left": "la primicia",
                "right": "noticia publicada antes que otros medios"
              },
              {
                "left": "filtrar información",
                "right": "revelar datos de forma no autorizada"
              },
              {
                "left": "desacreditar",
                "right": "quitarle credibilidad a una afirmación o persona"
              },
              {
                "left": "aclarar",
                "right": "explicar algo para eliminar la confusión"
              },
              {
                "left": "la cámara de eco",
                "right": "entorno donde solo se escuchan opiniones similares"
              },
              {
                "left": "contrastar fuentes",
                "right": "comparar distintas versiones de un hecho"
              },
              {
                "left": "el derecho a réplica",
                "right": "posibilidad de responder públicamente a una acusación"
              },
              {
                "left": "viralizarse",
                "right": "propagarse rápidamente en internet"
              },
              {
                "left": "la objetividad",
                "right": "cualidad de no dejarse influir por opiniones personales"
              }
            ],
            "explanation": "Estas diez palabras son esenciales para hablar del periodismo moderno."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multi-select",
        "question": "¿Qué cambios ocurren en el estilo indirecto con verbo introductorio en pasado? (Elige todas las correctas)",
        "options": [
          "presente → imperfecto",
          "futuro → condicional",
          "presente → presente",
          "pretérito → pluscuamperfecto"
        ],
        "correctIndexes": [
          0,
          1,
          3
        ],
        "explanation": "El presente no se mantiene igual: retrocede a imperfecto."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras.",
        "words": [
          "Me",
          "pidió",
          "que",
          "la",
          "llamara",
          "esa",
          "noche"
        ],
        "explanation": "Los mandatos reportados usan \"que\" + subjuntivo."
      },
      {
        "type": "multiple-choice",
        "question": "¿Qué palabra significa \"negar públicamente que algo es cierto\"?",
        "options": [
          "rectificar",
          "desmentir",
          "verificar",
          "censurar"
        ],
        "correctIndex": 1,
        "explanation": "\"Desmentir\" significa negar públicamente que algo es cierto."
      }
    ]
  },
  {
    "slug": "ser-estar-haber-nuanced-1",
    "level": "B2",
    "number": 14,
    "title": "Ser, Estar y Haber: Usos Matizados, Part 1 of 2",
    "summary": "Perfecciona el uso de estos tres verbos fundamentales, incluyendo los adjetivos que cambian de significado.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "El principio general",
        "body": [
          "Ser describe características inherentes e identidad; estar describe estados, condiciones y ubicaciones percibidas como temporales o cambiantes. Pero muchos adjetivos matizan este principio de forma interesante."
        ],
        "examples": [
          {
            "es": "Ella es inteligente. (característica)"
          },
          {
            "es": "Ella está distraída hoy. (estado temporal)"
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Elige el verbo correcto.",
            "sentence": "Mi abuelo ___ (ser/estar) un hombre muy sabio.",
            "answer": "es",
            "explanation": "\"Sabio\" describe una característica permanente de la persona: ser."
          }
        ]
      },
      {
        "heading": "Adjetivos que cambian de significado",
        "body": [
          "Algunos adjetivos tienen un significado con ser y otro, distinto, con estar: listo (inteligente / preparado), rico (adinerado / delicioso), malo (de mala calidad o persona / enfermo), aburrido (que aburre a otros / que siente aburrimiento)."
        ],
        "examples": [
          {
            "es": "Es listo. (inteligente) / Está listo. (preparado)"
          },
          {
            "es": "Es rico. (tiene mucho dinero) / Está rico. (sabe delicioso)"
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Qué significa \"Juan está aburrido\"?",
            "options": [
              "Juan es una persona aburrida",
              "Juan siente aburrimiento en este momento",
              "A Juan le gusta aburrir a otros",
              "Juan nunca se aburre"
            ],
            "correctIndex": 1,
            "explanation": "\"Estar aburrido\" describe el estado temporal de sentir aburrimiento."
          }
        ]
      },
      {
        "heading": "Haber impersonal vs. estar",
        "body": [
          "Hay (de haber) introduce la existencia de algo, generalmente por primera vez en la conversación. Estar ubica algo específico que ya se ha mencionado o que es conocido."
        ],
        "examples": [
          {
            "es": "Hay un parque cerca de mi casa."
          },
          {
            "es": "El parque está a dos cuadras de aquí."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Elige el verbo correcto.",
            "sentence": "___ (haber) mucha gente en la fiesta anoche.",
            "answer": "Había",
            "explanation": "Haber impersonal introduce la existencia de algo, sin artículo definido: había mucha gente."
          }
        ]
      },
      {
        "heading": "Ser para eventos, estar para ubicación física",
        "body": [
          "Cuando el sujeto es un evento (la reunión, la fiesta, el examen), se usa ser para indicar dónde tiene lugar. Estar se reserva para la ubicación de objetos y personas."
        ],
        "examples": [
          {
            "es": "La conferencia es en el auditorio."
          },
          {
            "es": "El auditorio está al final del pasillo."
          }
        ],
        "checkpoint": [
          {
            "type": "multi-select",
            "question": "¿En qué oraciones se usa correctamente \"ser\" o \"estar\"? (Elige todas las correctas)",
            "options": [
              "La boda es en la playa.",
              "La boda está en la playa.",
              "Mis llaves están en la mesa.",
              "Mis llaves son en la mesa."
            ],
            "correctIndexes": [
              0,
              2
            ],
            "explanation": "Para eventos se usa ser (la boda es); para la ubicación de objetos se usa estar (las llaves están)."
          }
        ]
      },
      {
        "heading": "En la práctica",
        "body": [
          "Una sesión con un psicólogo sobre el estado emocional de un paciente."
        ],
        "examples": [
          {
            "es": "¿Cómo se ha sentido esta semana?"
          },
          {
            "es": "La verdad, he estado bastante ansioso. No es normal en mí ser tan inseguro."
          },
          {
            "es": "¿Hay algo en particular que haya provocado ese cambio?"
          },
          {
            "es": "Sí, hay mucha presión en el trabajo últimamente, y eso me tiene agotado."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Qué ha sentido el paciente esta semana?",
            "options": [
              "Tristeza",
              "Ansiedad",
              "Alegría",
              "Aburrimiento"
            ],
            "correctIndex": 1,
            "explanation": "El paciente dice: \"he estado bastante ansioso.\""
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "fill-blank",
        "prompt": "Elige el verbo correcto.",
        "sentence": "Este café ___ (ser/estar) delicioso.",
        "answer": "está",
        "explanation": "\"Estar rico/delicioso\" describe una cualidad percibida en el momento: estar."
      },
      {
        "type": "multiple-choice",
        "question": "¿Qué significa \"Marta es lista\"?",
        "options": [
          "Marta está preparada ahora mismo",
          "Marta es inteligente",
          "Marta tiene prisa",
          "Marta está confundida"
        ],
        "correctIndex": 1,
        "explanation": "\"Ser listo\" significa ser inteligente; \"estar listo\" significa estar preparado."
      },
      {
        "type": "fill-blank",
        "prompt": "Elige el verbo correcto.",
        "sentence": "___ (haber) tres opciones diferentes para el postre.",
        "answer": "Hay",
        "explanation": "Haber impersonal introduce la existencia de algo: hay tres opciones."
      }
    ]
  },
  {
    "slug": "ser-estar-haber-nuanced-2",
    "level": "B2",
    "number": 15,
    "title": "Ser, Estar y Haber: Usos Matizados, Part 2 of 2",
    "summary": "Perfecciona el uso de estos tres verbos fundamentales, incluyendo los adjetivos que cambian de significado.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Vocabulario: La psicología y la personalidad",
        "body": [
          "Cincuenta palabras sobre psicología, personalidad y estados internos."
        ],
        "examples": [
          {
            "es": "la personalidad",
            "en": "conjunto de rasgos que definen a una persona"
          },
          {
            "es": "el rasgo",
            "en": "característica particular de alguien"
          },
          {
            "es": "el temperamento",
            "en": "manera natural de reaccionar emocionalmente"
          },
          {
            "es": "introvertido",
            "en": "que prefiere la reflexión interna a la interacción social"
          },
          {
            "es": "extrovertido",
            "en": "que se energiza mediante la interacción social"
          },
          {
            "es": "empático",
            "en": "capaz de comprender los sentimientos ajenos"
          },
          {
            "es": "la empatía",
            "en": "capacidad de ponerse en el lugar de otro"
          },
          {
            "es": "la autoestima",
            "en": "valoración que una persona tiene de sí misma"
          },
          {
            "es": "la inseguridad",
            "en": "falta de confianza en uno mismo"
          },
          {
            "es": "la ansiedad",
            "en": "estado de inquietud o preocupación intensa"
          },
          {
            "es": "el estrés",
            "en": "tensión física o mental provocada por exigencias"
          },
          {
            "es": "gestionar las emociones",
            "en": "manejar los propios sentimientos de forma saludable"
          },
          {
            "es": "la autoconciencia",
            "en": "capacidad de reconocer los propios pensamientos y emociones"
          },
          {
            "es": "el mecanismo de defensa",
            "en": "estrategia inconsciente para protegerse emocionalmente"
          },
          {
            "es": "reprimir",
            "en": "contener una emoción sin expresarla"
          },
          {
            "es": "proyectar",
            "en": "atribuir a otros los propios sentimientos"
          },
          {
            "es": "la terapia",
            "en": "tratamiento para mejorar el bienestar mental"
          },
          {
            "es": "el terapeuta",
            "en": "profesional que guía procesos terapéuticos"
          },
          {
            "es": "el vínculo afectivo",
            "en": "conexión emocional entre personas"
          },
          {
            "es": "el apego",
            "en": "lazo emocional profundo con otra persona"
          },
          {
            "es": "la vulnerabilidad",
            "en": "estado de estar expuesto emocionalmente"
          },
          {
            "es": "la resiliencia emocional",
            "en": "capacidad de recuperarse ante la adversidad"
          },
          {
            "es": "el patrón de comportamiento",
            "en": "forma repetida de actuar"
          },
          {
            "es": "la conducta",
            "en": "manera de comportarse"
          },
          {
            "es": "el instinto",
            "en": "impulso natural no razonado"
          },
          {
            "es": "la motivación",
            "en": "impulso que dirige el comportamiento hacia una meta"
          },
          {
            "es": "la autorrealización",
            "en": "logro pleno del propio potencial"
          },
          {
            "es": "el autoconocimiento",
            "en": "comprensión profunda de uno mismo"
          },
          {
            "es": "la introspección",
            "en": "examen de los propios pensamientos"
          },
          {
            "es": "proyectar confianza",
            "en": "transmitir seguridad a los demás"
          },
          {
            "es": "la perspectiva",
            "en": "manera particular de ver algo"
          },
          {
            "es": "el sesgo cognitivo",
            "en": "error sistemático en el pensamiento"
          },
          {
            "es": "racionalizar",
            "en": "justificar algo con razones lógicas, a veces falsas"
          },
          {
            "es": "la percepción",
            "en": "manera en que se interpreta la realidad"
          },
          {
            "es": "el umbral emocional",
            "en": "punto en el que una emoción se vuelve intensa"
          },
          {
            "es": "la impulsividad",
            "en": "tendencia a actuar sin reflexionar"
          },
          {
            "es": "la paciencia",
            "en": "capacidad de esperar sin frustrarse"
          },
          {
            "es": "la tolerancia a la frustración",
            "en": "capacidad de manejar contratiempos sin perder el control"
          },
          {
            "es": "el equilibrio emocional",
            "en": "estabilidad en los estados de ánimo"
          },
          {
            "es": "sincerarse",
            "en": "hablar con total franqueza sobre lo que se siente"
          },
          {
            "es": "el trauma",
            "en": "impacto emocional profundo causado por una experiencia difícil"
          },
          {
            "es": "sanar",
            "en": "recuperarse emocional o físicamente"
          },
          {
            "es": "procesar (una emoción)",
            "en": "asimilar y comprender un sentimiento"
          },
          {
            "es": "la autocompasión",
            "en": "trato amable hacia uno mismo ante el sufrimiento"
          },
          {
            "es": "el juicio propio",
            "en": "evaluación crítica de uno mismo"
          },
          {
            "es": "la introspección profunda",
            "en": "reflexión detallada sobre los propios procesos internos"
          },
          {
            "es": "el bienestar psicológico",
            "en": "estado general de salud mental"
          },
          {
            "es": "el crecimiento personal",
            "en": "desarrollo continuo de las propias capacidades"
          },
          {
            "es": "la congruencia",
            "en": "coherencia entre lo que se siente, piensa y hace"
          },
          {
            "es": "el autocontrol",
            "en": "capacidad de dominar los propios impulsos"
          }
        ],
        "checkpoint": [
          {
            "type": "matching",
            "instructions": "Empareja cada palabra con su definición.",
            "pairs": [
              {
                "left": "empático",
                "right": "capaz de comprender los sentimientos ajenos"
              },
              {
                "left": "reprimir",
                "right": "contener una emoción sin expresarla"
              },
              {
                "left": "el vínculo afectivo",
                "right": "conexión emocional entre personas"
              },
              {
                "left": "la vulnerabilidad",
                "right": "estado de estar expuesto emocionalmente"
              },
              {
                "left": "racionalizar",
                "right": "justificar algo con razones lógicas, a veces falsas"
              },
              {
                "left": "la impulsividad",
                "right": "tendencia a actuar sin reflexionar"
              },
              {
                "left": "sincerarse",
                "right": "hablar con total franqueza sobre lo que se siente"
              },
              {
                "left": "sanar",
                "right": "recuperarse emocional o físicamente"
              },
              {
                "left": "la autocompasión",
                "right": "trato amable hacia uno mismo ante el sufrimiento"
              },
              {
                "left": "la congruencia",
                "right": "coherencia entre lo que se siente, piensa y hace"
              }
            ],
            "explanation": "Estas diez palabras aparecen frecuentemente en contextos de psicología y bienestar emocional."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multi-select",
        "question": "¿En qué oraciones se usa \"ser\" para un evento? (Elige todas las correctas)",
        "options": [
          "El concierto es en el estadio.",
          "El estadio está lejos.",
          "La reunión es a las tres.",
          "Los documentos están en mi oficina."
        ],
        "correctIndexes": [
          0,
          2
        ],
        "explanation": "Ser se usa para el lugar u hora de un evento; estar para la ubicación de objetos."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras.",
        "words": [
          "Hay",
          "mucha",
          "gente",
          "que",
          "no",
          "entiende",
          "esto"
        ],
        "explanation": "Haber impersonal introduce algo sin artículo definido."
      },
      {
        "type": "multiple-choice",
        "question": "¿Qué palabra significa \"capacidad de reconocer los propios pensamientos y emociones\"?",
        "options": [
          "la empatía",
          "la autoconciencia",
          "el temperamento",
          "la resiliencia emocional"
        ],
        "correctIndex": 1,
        "explanation": "\"La autoconciencia\" es la capacidad de reconocer los propios pensamientos y emociones."
      }
    ]
  },
  {
    "slug": "verbs-of-change-1",
    "level": "B2",
    "number": 16,
    "title": "Verbos de Cambio, Part 1 of 2",
    "summary": "Distingue entre ponerse, volverse, hacerse, llegar a ser y convertirse en para describir transformaciones.",
    "duration": "6 min",
    "sections": [
      {
        "heading": "Ponerse: cambios temporales, emocionales o físicos",
        "body": [
          "Ponerse + adjetivo describe un cambio rápido y a menudo temporal, generalmente emocional o físico."
        ],
        "examples": [
          {
            "es": "Se puso rojo de vergüenza."
          },
          {
            "es": "Me pongo nervioso antes de hablar en público."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa la oración.",
            "sentence": "Cuando escuchó la noticia, ___ (ponerse) muy triste.",
            "answer": "se puso",
            "explanation": "Ponerse describe un cambio emocional repentino: se puso triste."
          }
        ]
      },
      {
        "heading": "Volverse: cambios más permanentes, a menudo involuntarios",
        "body": [
          "Volverse + adjetivo describe una transformación más duradera, frecuentemente gradual e involuntaria."
        ],
        "examples": [
          {
            "es": "Con los años, se volvió más paciente."
          },
          {
            "es": "La situación se volvió insostenible."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Cuál oración usa \"volverse\" correctamente?",
            "options": [
              "Se volvió profesor después de años de estudio.",
              "Con el tiempo, se volvió más desconfiado.",
              "Se volvió las ocho.",
              "Se volvió a casa temprano."
            ],
            "correctIndex": 1,
            "explanation": "Volverse describe un cambio gradual de carácter o actitud: se volvió más desconfiado."
          }
        ]
      },
      {
        "heading": "Hacerse: cambio con esfuerzo o proceso voluntario",
        "body": [
          "Hacerse + sustantivo/adjetivo describe un cambio de estatus, profesión o ideología, generalmente producto de un esfuerzo o decisión personal."
        ],
        "examples": [
          {
            "es": "Se hizo médico después de diez años de estudio."
          },
          {
            "es": "Con la práctica, se hizo experto en el tema."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa la oración.",
            "sentence": "Después de mucho esfuerzo, ella ___ (hacerse) abogada.",
            "answer": "se hizo",
            "explanation": "Hacerse describe un cambio de profesión logrado con esfuerzo: se hizo abogada."
          }
        ]
      },
      {
        "heading": "Llegar a ser y convertirse en",
        "body": [
          "Llegar a ser describe un logro gradual, a menudo positivo. Convertirse en describe una transformación más radical o completa, no necesariamente positiva."
        ],
        "examples": [
          {
            "es": "Llegó a ser directora de la empresa."
          },
          {
            "es": "El pequeño negocio se convirtió en una gran corporación."
          }
        ],
        "checkpoint": [
          {
            "type": "multi-select",
            "question": "¿Qué verbo de cambio corresponde a cada situación? (Elige todas las correctas)",
            "options": [
              "Se puso pálido al ver el accidente.",
              "Se hizo millonario invirtiendo con inteligencia.",
              "Se volvió las cinco de la tarde.",
              "El agua se convirtió en hielo."
            ],
            "correctIndexes": [
              0,
              1,
              3
            ],
            "explanation": "\"Se volvió las cinco\" no es correcto — para la hora se usa \"ser\" (eran las cinco), no \"volverse\"."
          }
        ]
      },
      {
        "heading": "En la práctica",
        "body": [
          "Una biografía breve sobre un cambio de carrera."
        ],
        "examples": [
          {
            "es": "Después del accidente, se puso muy reflexivo sobre su vida."
          },
          {
            "es": "Decidió dejar su trabajo y, con años de esfuerzo, se hizo chef profesional."
          },
          {
            "es": "Con el tiempo, se volvió una persona mucho más segura de sí misma."
          },
          {
            "es": "Hoy, su pequeño restaurante se ha convertido en un referente de la ciudad."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿En qué se convirtió el pequeño restaurante?",
            "options": [
              "En una cadena internacional",
              "En un referente de la ciudad",
              "En un museo",
              "En una escuela de cocina"
            ],
            "correctIndex": 1,
            "explanation": "El texto dice que \"se ha convertido en un referente de la ciudad.\""
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "fill-blank",
        "prompt": "Completa la oración.",
        "sentence": "Al oír la noticia, ___ (ponerse) pálida.",
        "answer": "se puso",
        "explanation": "Ponerse describe un cambio físico repentino: se puso pálida."
      },
      {
        "type": "multiple-choice",
        "question": "¿Cuál verbo describe un cambio de profesión logrado con esfuerzo?",
        "options": [
          "ponerse",
          "volverse",
          "hacerse",
          "estar"
        ],
        "correctIndex": 2,
        "explanation": "Hacerse describe un cambio de profesión o estatus logrado con esfuerzo."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la oración.",
        "sentence": "Con los años, el pueblo ___ (convertirse) en una ciudad próspera.",
        "answer": "se convirtió",
        "explanation": "Convertirse en describe una transformación radical y completa."
      }
    ]
  },
  {
    "slug": "verbs-of-change-2",
    "level": "B2",
    "number": 17,
    "title": "Verbos de Cambio, Part 2 of 2",
    "summary": "Distingue entre ponerse, volverse, hacerse, llegar a ser y convertirse en para describir transformaciones.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Vocabulario: El desarrollo personal y el cambio",
        "body": [
          "Cincuenta palabras sobre transformación, desarrollo personal y crecimiento."
        ],
        "examples": [
          {
            "es": "la revolución",
            "en": "cambio radical y repentino en algo"
          },
          {
            "es": "transformar",
            "en": "cambiar profundamente algo"
          },
          {
            "es": "la transformación",
            "en": "proceso de cambio profundo"
          },
          {
            "es": "evolucionar",
            "en": "desarrollarse gradualmente hacia algo mejor"
          },
          {
            "es": "la evolución personal",
            "en": "proceso de crecimiento a lo largo del tiempo"
          },
          {
            "es": "progresar",
            "en": "avanzar hacia una meta con el paso del tiempo"
          },
          {
            "es": "la superación personal",
            "en": "proceso de mejorar continuamente uno mismo"
          },
          {
            "es": "el punto de partida",
            "en": "situación inicial antes de un cambio"
          },
          {
            "es": "el punto de llegada",
            "en": "meta final de un proceso"
          },
          {
            "es": "reinventarse",
            "en": "cambiar profundamente el propio rumbo de vida"
          },
          {
            "es": "adaptarse",
            "en": "ajustarse a nuevas circunstancias"
          },
          {
            "es": "la adaptabilidad",
            "en": "capacidad de ajustarse a cambios"
          },
          {
            "es": "el hábito",
            "en": "conducta repetida regularmente"
          },
          {
            "es": "el empeño",
            "en": "esfuerzo constante dedicado a lograr un propósito"
          },
          {
            "es": "la constancia",
            "en": "perseverancia a lo largo del tiempo"
          },
          {
            "es": "el esfuerzo sostenido",
            "en": "trabajo continuo hacia una meta"
          },
          {
            "es": "la zona de confort",
            "en": "espacio de comodidad y familiaridad"
          },
          {
            "es": "salir de la zona de confort",
            "en": "enfrentar situaciones nuevas o incómodas"
          },
          {
            "es": "el avance",
            "en": "paso adelante en un proceso de desarrollo"
          },
          {
            "es": "fortalecerse",
            "en": "volverse más firme o resistente con el tiempo"
          },
          {
            "es": "la madurez",
            "en": "estado de desarrollo pleno"
          },
          {
            "es": "replantearse la vida",
            "en": "reconsiderar profundamente las propias decisiones"
          },
          {
            "es": "dejar atrás",
            "en": "abandonar algo del pasado"
          },
          {
            "es": "soltar (el pasado)",
            "en": "dejar de aferrarse emocionalmente a algo"
          },
          {
            "es": "renacer",
            "en": "comenzar de nuevo con una perspectiva distinta"
          },
          {
            "es": "la metamorfosis",
            "en": "transformación completa y profunda"
          },
          {
            "es": "el potencial oculto",
            "en": "capacidad no descubierta aún"
          },
          {
            "es": "desarrollar habilidades",
            "en": "adquirir nuevas capacidades con la práctica"
          },
          {
            "es": "la mentalidad de crecimiento",
            "en": "creencia de que las capacidades pueden desarrollarse"
          },
          {
            "es": "la mentalidad fija",
            "en": "creencia de que las capacidades son inmutables"
          },
          {
            "es": "el fracaso constructivo",
            "en": "error que aporta una lección valiosa"
          },
          {
            "es": "aprender de la adversidad",
            "en": "extraer lecciones de momentos difíciles"
          },
          {
            "es": "la disciplina emocional",
            "en": "capacidad de manejar impulsos y reacciones"
          },
          {
            "es": "comprometerse",
            "en": "asumir una responsabilidad con firmeza"
          },
          {
            "es": "el compromiso",
            "en": "obligación asumida con determinación"
          },
          {
            "es": "la voluntad",
            "en": "capacidad de decidir y actuar con determinación"
          },
          {
            "es": "insistir",
            "en": "mantenerse firme en un esfuerzo pese a los obstáculos"
          },
          {
            "es": "la constancia diaria",
            "en": "esfuerzo repetido cada día"
          },
          {
            "es": "dar el primer paso",
            "en": "iniciar un cambio o proyecto"
          },
          {
            "es": "el proceso gradual",
            "en": "cambio que ocurre poco a poco"
          },
          {
            "es": "el cambio radical",
            "en": "transformación repentina y profunda"
          },
          {
            "es": "las creencias limitantes",
            "en": "ideas que restringen el propio potencial"
          },
          {
            "es": "desafiar los propios límites",
            "en": "poner a prueba las propias capacidades"
          },
          {
            "es": "la autoexigencia",
            "en": "nivel alto de exigencia hacia uno mismo"
          },
          {
            "es": "la estabilidad",
            "en": "condición de mantenerse firme y constante"
          },
          {
            "es": "la plenitud personal",
            "en": "sensación de satisfacción y propósito"
          },
          {
            "es": "prosperar",
            "en": "alcanzar un buen desarrollo o éxito"
          },
          {
            "es": "la autoeficacia",
            "en": "creencia en la propia capacidad de lograr algo"
          },
          {
            "es": "el estancamiento",
            "en": "falta de progreso o cambio"
          },
          {
            "es": "la chispa inicial",
            "en": "motivación que da inicio a un cambio"
          }
        ],
        "checkpoint": [
          {
            "type": "matching",
            "instructions": "Empareja cada palabra con su definición.",
            "pairs": [
              {
                "left": "reinventarse",
                "right": "cambiar profundamente el propio rumbo de vida"
              },
              {
                "left": "salir de la zona de confort",
                "right": "enfrentar situaciones nuevas o incómodas"
              },
              {
                "left": "el estancamiento",
                "right": "falta de progreso o cambio"
              },
              {
                "left": "la metamorfosis",
                "right": "transformación completa y profunda"
              },
              {
                "left": "la mentalidad de crecimiento",
                "right": "creencia de que las capacidades pueden desarrollarse"
              },
              {
                "left": "insistir",
                "right": "mantenerse firme en un esfuerzo pese a los obstáculos"
              },
              {
                "left": "las creencias limitantes",
                "right": "ideas que restringen el propio potencial"
              },
              {
                "left": "desafiar los propios límites",
                "right": "poner a prueba las propias capacidades"
              },
              {
                "left": "prosperar",
                "right": "alcanzar un buen desarrollo o éxito"
              },
              {
                "left": "renacer",
                "right": "comenzar de nuevo con una perspectiva distinta"
              }
            ],
            "explanation": "Estas diez palabras describen procesos de transformación y crecimiento personal."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multi-select",
        "question": "¿Qué oraciones usan correctamente un verbo de cambio? (Elige todas las correctas)",
        "options": [
          "Se volvió muy exigente con el tiempo.",
          "Se hizo las tres de la tarde.",
          "Llegó a ser el mejor de su clase.",
          "Se puso ser doctor."
        ],
        "correctIndexes": [
          0,
          2
        ],
        "explanation": "\"Se hizo las tres\" y \"se puso ser doctor\" no son estructuras correctas para estos verbos."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras.",
        "words": [
          "Con",
          "los",
          "años,",
          "se",
          "volvió",
          "más",
          "sabio"
        ],
        "explanation": "Volverse describe un cambio gradual y a menudo involuntario."
      },
      {
        "type": "multiple-choice",
        "question": "¿Qué palabra significa \"espacio de comodidad y familiaridad\"?",
        "options": [
          "el punto de partida",
          "la zona de confort",
          "la disciplina",
          "la metamorfosis"
        ],
        "correctIndex": 1,
        "explanation": "\"La zona de confort\" es el espacio de comodidad y familiaridad."
      }
    ]
  },
  {
    "slug": "verbs-of-change-mastery-check",
    "level": "B2",
    "number": 18,
    "title": "Prueba de Dominio: Verbos de Cambio",
    "summary": "Un examen de dominio enfocado en distinguir ponerse, volverse, hacerse, llegar a ser y convertirse en según el contexto exacto de cada transformación.",
    "duration": "10 min",
    "sections": [],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "Completa: Después del divorcio, mi tío ___ mucho más reservado con los años.",
        "options": [
          "se puso",
          "se volvió",
          "se hizo",
          "llegó a ser"
        ],
        "correctIndex": 1,
        "explanation": "Volverse describe un cambio gradual e involuntario de carácter: se volvió más reservado."
      },
      {
        "type": "multiple-choice",
        "question": "Completa: Tras estudiar Derecho durante seis años, finalmente ___ abogado.",
        "options": [
          "se puso",
          "se volvió",
          "se hizo",
          "se convirtió"
        ],
        "correctIndex": 2,
        "explanation": "Hacerse describe un cambio de profesión logrado con esfuerzo y decisión personal: se hizo abogado."
      },
      {
        "type": "multiple-choice",
        "question": "Completa: Al ver el examen, ___ pálido de inmediato.",
        "options": [
          "se hizo",
          "se volvió",
          "se puso",
          "llegó a ser"
        ],
        "correctIndex": 2,
        "explanation": "Ponerse describe un cambio físico repentino y temporal: se puso pálido."
      },
      {
        "type": "multiple-choice",
        "question": "Completa: Con dedicación y disciplina, ___ presidenta de la compañía en solo cinco años.",
        "options": [
          "se puso",
          "se volvió",
          "llegó a ser",
          "se hizo las cinco"
        ],
        "correctIndex": 2,
        "explanation": "Llegar a ser describe un logro gradual y generalmente positivo: llegó a ser presidenta."
      },
      {
        "type": "multiple-choice",
        "question": "Completa: La pequeña disputa ___ en un conflicto que duró años.",
        "options": [
          "se puso",
          "se hizo",
          "se convirtió",
          "llegó a ser"
        ],
        "correctIndex": 2,
        "explanation": "Convertirse en describe una transformación radical y completa, no necesariamente positiva: se convirtió en un conflicto."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con el verbo de cambio correcto.",
        "sentence": "Después del susto, sus manos ___ (ponerse) temblorosas por unos minutos.",
        "answer": "se pusieron",
        "explanation": "Ponerse indica un cambio físico repentino y temporal."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con el verbo de cambio correcto.",
        "sentence": "Con el paso de las décadas, aquel pueblo pesquero ___ (convertirse) en un destino turístico de lujo.",
        "answer": "se convirtió",
        "explanation": "Convertirse en marca una transformación completa y radical con el tiempo."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con el verbo de cambio correcto.",
        "sentence": "Gracias a años de constancia y sacrificio, ___ (hacerse, él) un chef reconocido internacionalmente.",
        "answer": "se hizo",
        "explanation": "Hacerse implica un cambio de estatus logrado mediante esfuerzo voluntario."
      },
      {
        "type": "multi-select",
        "question": "¿Qué oraciones son gramaticalmente correctas? (Elige todas las correctas)",
        "options": [
          "Se volvieron las nueve de la noche.",
          "Con los años, se volvió más generosa.",
          "Se hizo médica tras una década de estudio.",
          "Se puso ingeniero después de graduarse."
        ],
        "correctIndexes": [
          1,
          2
        ],
        "explanation": "Para la hora se usa \"ser\" (eran las nueve), nunca \"volverse\"; y \"ponerse\" no se usa con profesiones, eso corresponde a hacerse o llegar a ser."
      },
      {
        "type": "multi-select",
        "question": "¿Qué oraciones usan \"convertirse en\" correctamente? (Elige todas las correctas)",
        "options": [
          "El experimento se convirtió en un éxito rotundo.",
          "Se convirtió muy tímido después del divorcio.",
          "La oruga se convierte en mariposa.",
          "Se convirtió médico tras años de estudio."
        ],
        "correctIndexes": [
          0,
          2
        ],
        "explanation": "Convertirse en siempre va seguido de \"en\" más un sustantivo, nunca directamente de un adjetivo (eso pide volverse) ni de una profesión sin \"en\" (eso pide hacerse en o llegar a ser)."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Traduce al español.",
        "source": "She turned red with embarrassment when they applauded her.",
        "answer": "Se puso roja de vergüenza cuando la aplaudieron.",
        "explanation": "Ponerse + adjetivo describe un cambio físico o emocional repentino."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Traduce al español.",
        "source": "Over the years, he became much more cynical.",
        "answer": "Con los años, se volvió mucho más cínico.",
        "explanation": "Volverse describe un cambio gradual e involuntario de carácter."
      },
      {
        "type": "translate",
        "direction": "es-en",
        "prompt": "Traduce al inglés.",
        "source": "Tras mucho esfuerzo, se hizo un referente en su campo, y con el tiempo llegó a ser mentor de cientos de jóvenes.",
        "answer": "After a lot of effort, he became a leading figure in his field, and over time he came to be a mentor to hundreds of young people.",
        "explanation": "\"Se hizo\" (esfuerzo voluntario) y \"llegó a ser\" (logro gradual y positivo) se traducen ambos como \"became\"/\"came to be\", aunque matizan procesos distintos en español."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras.",
        "words": [
          "Con",
          "el",
          "tiempo,",
          "la",
          "start-up",
          "se",
          "convirtió",
          "en",
          "un",
          "gigante",
          "tecnológico"
        ],
        "translation": "Over time, the start-up turned into a tech giant.",
        "explanation": "Convertirse en + sustantivo describe una transformación radical y completa."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras.",
        "words": [
          "Después",
          "de",
          "tantos",
          "fracasos,",
          "se",
          "hizo",
          "más",
          "resiliente"
        ],
        "translation": "After so many failures, he became more resilient.",
        "explanation": "Hacerse puede usarse con adjetivos para un cambio de carácter logrado con esfuerzo y superación."
      },
      {
        "type": "matching",
        "instructions": "Empareja cada palabra con su definición.",
        "pairs": [
          {
            "left": "evolucionar",
            "right": "desarrollarse gradualmente hacia algo mejor"
          },
          {
            "left": "progresar",
            "right": "avanzar hacia una meta con el paso del tiempo"
          },
          {
            "left": "la superación personal",
            "right": "proceso de mejorar continuamente uno mismo"
          },
          {
            "left": "el punto de partida",
            "right": "situación inicial antes de un cambio"
          },
          {
            "left": "el punto de llegada",
            "right": "meta final de un proceso"
          },
          {
            "left": "adaptarse",
            "right": "ajustarse a nuevas circunstancias"
          },
          {
            "left": "la adaptabilidad",
            "right": "capacidad de ajustarse a cambios"
          },
          {
            "left": "fortalecerse",
            "right": "volverse más firme o resistente con el tiempo"
          },
          {
            "left": "la madurez",
            "right": "estado de desarrollo pleno"
          },
          {
            "left": "la chispa inicial",
            "right": "motivación que da inicio a un cambio"
          }
        ],
        "explanation": "Estas diez palabras describen etapas y cualidades del proceso de desarrollo personal."
      },
      {
        "type": "multiple-choice",
        "question": "¿Qué significa \"el fracaso constructivo\"?",
        "options": [
          "falta de progreso o cambio",
          "error que aporta una lección valiosa",
          "capacidad no descubierta aún",
          "obligación asumida con determinación"
        ],
        "correctIndex": 1,
        "explanation": "\"El fracaso constructivo\" es un error que aporta una lección valiosa."
      }
    ]
  },
  {
    "slug": "advanced-connectors-1",
    "level": "B2",
    "number": 19,
    "title": "Conectores Avanzados, Part 1 of 2",
    "summary": "Enlaza tus ideas con precisión: contraste, consecuencia, causa y adición, al nivel de un debate formal.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "Conectores de contraste",
        "body": [
          "Sin embargo, no obstante y aunque introducen una idea que contrasta con la anterior. \"Sin embargo\" y \"no obstante\" empiezan una nueva oración; \"aunque\" conecta dos cláusulas dentro de la misma oración."
        ],
        "examples": [
          {
            "es": "El plan parecía sólido. Sin embargo, fracasó por falta de recursos."
          },
          {
            "es": "Aunque el plan parecía sólido, fracasó por falta de recursos."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa la oración.",
            "sentence": "El proyecto era ambicioso; ___, logramos completarlo a tiempo.",
            "answer": "sin embargo",
            "explanation": "\"Sin embargo\" introduce un contraste con la idea anterior."
          }
        ]
      },
      {
        "heading": "A pesar de (que)",
        "body": [
          "\"A pesar de\" + sustantivo/infinitivo, o \"a pesar de que\" + verbo conjugado, expresa una concesión: algo ocurre a pesar de un obstáculo."
        ],
        "examples": [
          {
            "es": "A pesar de la lluvia, salimos a caminar."
          },
          {
            "es": "A pesar de que llovía, salimos a caminar."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Cuál es correcta?",
            "options": [
              "A pesar de que la crisis, la empresa creció.",
              "A pesar de la crisis, la empresa creció.",
              "A pesar la crisis, la empresa creció.",
              "A pesar de crisis, la empresa creció."
            ],
            "correctIndex": 1,
            "explanation": "\"A pesar de\" + sustantivo no lleva \"que\": a pesar de la crisis."
          }
        ]
      },
      {
        "heading": "Conectores de consecuencia",
        "body": [
          "Por lo tanto, por consiguiente, así que y de modo que introducen el resultado o la consecuencia lógica de lo anterior."
        ],
        "examples": [
          {
            "es": "No hubo suficiente inversión; por lo tanto, el proyecto se canceló."
          },
          {
            "es": "Llovió toda la noche, así que el partido se pospuso."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa la oración.",
            "sentence": "Los precios subieron mucho; ___, muchas familias redujeron sus gastos.",
            "answer": "por lo tanto",
            "explanation": "\"Por lo tanto\" introduce la consecuencia lógica de la subida de precios."
          }
        ]
      },
      {
        "heading": "Conectores de causa y de adición",
        "body": [
          "Puesto que, ya que y dado que introducen una causa o razón (a menudo ya conocida por el oyente). Además, es más y asimismo añaden información que refuerza el argumento."
        ],
        "examples": [
          {
            "es": "Ya que insistes, aceptaré la propuesta."
          },
          {
            "es": "El plan es sólido; además, cuenta con el apoyo de todo el equipo."
          }
        ],
        "checkpoint": [
          {
            "type": "multi-select",
            "question": "¿Qué conectores introducen una consecuencia? (Elige todas las correctas)",
            "options": [
              "por lo tanto",
              "puesto que",
              "así que",
              "además"
            ],
            "correctIndexes": [
              0,
              2
            ],
            "explanation": "Puesto que introduce una causa, y además introduce información adicional — no consecuencias."
          }
        ]
      },
      {
        "heading": "En la práctica",
        "body": [
          "Un fragmento de un debate formal sobre educación."
        ],
        "examples": [
          {
            "es": "El sistema actual tiene serias limitaciones. Sin embargo, una reforma completa sería arriesgada."
          },
          {
            "es": "A pesar de esos riesgos, creo que el cambio es necesario, puesto que los resultados actuales son insuficientes."
          },
          {
            "es": "Estoy de acuerdo en parte. No obstante, propongo una reforma gradual, ya que evitaría una crisis institucional."
          },
          {
            "es": "Por lo tanto, ¿podríamos considerar un plan piloto antes de una reforma total?"
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Qué propone el segundo hablante para evitar una crisis institucional?",
            "options": [
              "Una reforma completa e inmediata",
              "Una reforma gradual",
              "No cambiar nada",
              "Eliminar el sistema actual"
            ],
            "correctIndex": 1,
            "explanation": "Dice: \"propongo una reforma gradual, ya que evitaría una crisis institucional.\""
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "fill-blank",
        "prompt": "Completa la oración.",
        "sentence": "El equipo perdió el partido. ___, mantuvieron una actitud positiva.",
        "answer": "Sin embargo",
        "explanation": "\"Sin embargo\" introduce un contraste con la idea anterior."
      },
      {
        "type": "multiple-choice",
        "question": "¿Cuál conector introduce una causa?",
        "options": [
          "por lo tanto",
          "puesto que",
          "sin embargo",
          "además"
        ],
        "correctIndex": 1,
        "explanation": "\"Puesto que\" introduce una causa o razón."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la oración.",
        "sentence": "___ de que estudió mucho, no aprobó el examen.",
        "answer": "A pesar",
        "explanation": "\"A pesar de que\" + verbo conjugado expresa una concesión."
      }
    ]
  },
  {
    "slug": "advanced-connectors-2",
    "level": "B2",
    "number": 20,
    "title": "Conectores Avanzados, Part 2 of 2",
    "summary": "Enlaza tus ideas con precisión: contraste, consecuencia, causa y adición, al nivel de un debate formal.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Vocabulario: El debate y la argumentación",
        "body": [
          "Cincuenta palabras para construir y defender argumentos con precisión."
        ],
        "examples": [
          {
            "es": "la tesis",
            "en": "idea central que alguien defiende con razones"
          },
          {
            "es": "la postura",
            "en": "posición que se defiende en un debate"
          },
          {
            "es": "sostener (una idea)",
            "en": "defender o mantener un argumento"
          },
          {
            "es": "refutar",
            "en": "demostrar que un argumento es incorrecto"
          },
          {
            "es": "la refutación",
            "en": "argumento que contradice otro"
          },
          {
            "es": "rebatir",
            "en": "responder a un argumento con otro contrario"
          },
          {
            "es": "la evidencia",
            "en": "datos o hechos que apoyan un argumento"
          },
          {
            "es": "fundamentar",
            "en": "dar bases sólidas a un argumento"
          },
          {
            "es": "la falacia",
            "en": "razonamiento aparentemente lógico pero erróneo"
          },
          {
            "es": "el contraargumento",
            "en": "argumento que se opone a otro"
          },
          {
            "es": "ceder terreno",
            "en": "aceptar parcialmente el punto de vista contrario"
          },
          {
            "es": "la concesión",
            "en": "aceptación parcial de un argumento ajeno"
          },
          {
            "es": "matizar",
            "en": "precisar o suavizar una afirmación"
          },
          {
            "es": "la premisa",
            "en": "idea de partida de un razonamiento"
          },
          {
            "es": "la conclusión",
            "en": "resultado final de un razonamiento"
          },
          {
            "es": "deducir",
            "en": "llegar a una conclusión a partir de premisas"
          },
          {
            "es": "inferir",
            "en": "concluir algo de forma indirecta"
          },
          {
            "es": "el razonamiento",
            "en": "proceso de pensar de forma lógica"
          },
          {
            "es": "coherente",
            "en": "que tiene lógica interna consistente"
          },
          {
            "es": "contundente",
            "en": "que convence de forma clara y fuerte"
          },
          {
            "es": "persuadir",
            "en": "convencer a alguien mediante argumentos"
          },
          {
            "es": "persuasivo",
            "en": "capaz de convencer"
          },
          {
            "es": "la retórica",
            "en": "arte de argumentar y convencer"
          },
          {
            "es": "el debate",
            "en": "intercambio formal de argumentos"
          },
          {
            "es": "moderar (un debate)",
            "en": "dirigir de forma imparcial una discusión"
          },
          {
            "es": "el moderador",
            "en": "quien dirige un debate"
          },
          {
            "es": "el turno de palabra",
            "en": "momento asignado para hablar"
          },
          {
            "es": "interrumpir",
            "en": "hablar mientras otro está hablando"
          },
          {
            "es": "el punto en cuestión",
            "en": "tema central de la discusión"
          },
          {
            "es": "desviarse del tema",
            "en": "apartarse del asunto principal"
          },
          {
            "es": "la objeción",
            "en": "argumento en contra de algo propuesto"
          },
          {
            "es": "plantear una objeción",
            "en": "presentar formalmente un desacuerdo"
          },
          {
            "es": "el consenso",
            "en": "acuerdo alcanzado entre las partes"
          },
          {
            "es": "el disenso",
            "en": "desacuerdo entre las partes"
          },
          {
            "es": "la postura intermedia",
            "en": "posición equilibrada entre dos extremos"
          },
          {
            "es": "polarizar",
            "en": "dividir opiniones en extremos opuestos"
          },
          {
            "es": "el sesgo de confirmación",
            "en": "tendencia a buscar solo información que confirme lo que ya se cree"
          },
          {
            "es": "la falta de rigor",
            "en": "ausencia de precisión o solidez en un argumento"
          },
          {
            "es": "la solidez argumentativa",
            "en": "fortaleza lógica de un razonamiento"
          },
          {
            "es": "el ejemplo ilustrativo",
            "en": "caso concreto que apoya una idea general"
          },
          {
            "es": "generalizar",
            "en": "extender una conclusión a casos no verificados"
          },
          {
            "es": "la excepción",
            "en": "caso que no sigue la regla general"
          },
          {
            "es": "la validez",
            "en": "cualidad de un argumento bien fundamentado"
          },
          {
            "es": "objetar",
            "en": "presentar una razón en contra de algo"
          },
          {
            "es": "profundizar en",
            "en": "examinar un tema con más detalle"
          },
          {
            "es": "el hilo argumental",
            "en": "línea lógica que conecta las ideas de un argumento"
          },
          {
            "es": "zanjar (una discusión)",
            "en": "poner fin de forma definitiva a un debate"
          },
          {
            "es": "la analogía",
            "en": "comparación para ilustrar un argumento"
          },
          {
            "es": "el argumento circular",
            "en": "razonamiento que repite la premisa como conclusión"
          },
          {
            "es": "la carga de la prueba",
            "en": "obligación de demostrar una afirmación"
          }
        ],
        "checkpoint": [
          {
            "type": "matching",
            "instructions": "Empareja cada palabra con su definición.",
            "pairs": [
              {
                "left": "refutar",
                "right": "demostrar que un argumento es incorrecto"
              },
              {
                "left": "la falacia",
                "right": "razonamiento aparentemente lógico pero erróneo"
              },
              {
                "left": "ceder terreno",
                "right": "aceptar parcialmente el punto de vista contrario"
              },
              {
                "left": "matizar",
                "right": "precisar o suavizar una afirmación"
              },
              {
                "left": "contundente",
                "right": "que convence de forma clara y fuerte"
              },
              {
                "left": "el sesgo de confirmación",
                "right": "tendencia a buscar solo información que confirme lo que ya se cree"
              },
              {
                "left": "la solidez argumentativa",
                "right": "fortaleza lógica de un razonamiento"
              },
              {
                "left": "generalizar",
                "right": "extender una conclusión a casos no verificados"
              },
              {
                "left": "zanjar (una discusión)",
                "right": "poner fin de forma definitiva a un debate"
              },
              {
                "left": "el disenso",
                "right": "desacuerdo entre las partes"
              }
            ],
            "explanation": "Estas diez palabras son esenciales para argumentar con precisión."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multi-select",
        "question": "¿Qué conectores introducen una consecuencia? (Elige todas las correctas)",
        "options": [
          "por consiguiente",
          "ya que",
          "así que",
          "a pesar de"
        ],
        "correctIndexes": [
          0,
          2
        ],
        "explanation": "Ya que introduce causa; a pesar de introduce concesión, no consecuencia."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras.",
        "words": [
          "A",
          "pesar",
          "de",
          "la",
          "lluvia,",
          "el",
          "evento",
          "continuó"
        ],
        "explanation": "\"A pesar de\" + sustantivo expresa una concesión."
      },
      {
        "type": "multiple-choice",
        "question": "¿Qué palabra significa \"poner fin de forma definitiva a un debate\"?",
        "options": [
          "matizar",
          "zanjar",
          "rebatir",
          "ceder"
        ],
        "correctIndex": 1,
        "explanation": "\"Zanjar\" significa poner fin de forma definitiva a una discusión."
      }
    ]
  },
  {
    "slug": "emphasis-word-order-1",
    "level": "B2",
    "number": 21,
    "title": "Énfasis y Orden de Palabras, Part 1 of 2",
    "summary": "Da fuerza a tus ideas con estructuras enfáticas: ser...que, lo + adjetivo + que, y la anteposición de elementos.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "Anteposición para dar énfasis",
        "body": [
          "Mover un complemento al inicio de la oración, junto con un pronombre que lo retoma, da énfasis a ese elemento. Esta estructura es mucho más común en español que en muchos otros idiomas."
        ],
        "examples": [
          {
            "es": "A mí me encanta esta canción."
          },
          {
            "es": "Ese libro ya lo leí."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa la oración con énfasis.",
            "sentence": "A ella ___ (encantar) viajar sola.",
            "answer": "le encanta",
            "explanation": "La anteposición de \"a ella\" requiere el pronombre \"le\" que la retoma."
          }
        ]
      },
      {
        "heading": "Estructuras con ser...que (oraciones hendidas)",
        "body": [
          "Fue/Es + elemento enfatizado + que introduce y resalta un elemento específico de la oración: quién, cuándo, dónde, o qué."
        ],
        "examples": [
          {
            "es": "Fue ella quien tomó la decisión final."
          },
          {
            "es": "Fue en 1990 cuando ocurrió el cambio."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Cuál oración enfatiza correctamente \"el lugar\"?",
            "options": [
              "Fue aquí que nos conocimos.",
              "Fue aquí donde nos conocimos.",
              "Aquí fue que nos conocimos.",
              "Fue donde nos conocimos aquí."
            ],
            "correctIndex": 1,
            "explanation": "Para enfatizar un lugar, se usa \"fue aquí donde\", con \"donde\" en vez de \"que\"."
          }
        ]
      },
      {
        "heading": "Lo + adjetivo + que",
        "body": [
          "Esta estructura enfatiza el grado de una cualidad: \"lo difícil que es\" equivale a \"qué difícil es\", pero suena más natural dentro de una oración subordinada."
        ],
        "examples": [
          {
            "es": "No te imaginas lo complicado que fue organizar todo esto."
          },
          {
            "es": "Se dio cuenta de lo importante que era su familia."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa la oración.",
            "sentence": "No sabes ___ contenta que estoy.",
            "answer": "lo",
            "explanation": "\"Lo + adjetivo + que\" enfatiza el grado de la cualidad: lo contenta que estoy."
          }
        ]
      },
      {
        "heading": "Inversión con adverbios",
        "body": [
          "Ciertos adverbios (apenas, difícilmente, jamás) al inicio de la oración provocan la inversión del sujeto y el verbo, en un registro más formal o literario."
        ],
        "examples": [
          {
            "es": "Apenas había llegado cuando sonó el teléfono."
          },
          {
            "es": "Jamás había visto algo tan hermoso."
          }
        ],
        "checkpoint": [
          {
            "type": "multi-select",
            "question": "¿En qué oraciones se usa correctamente una estructura enfática? (Elige todas las correctas)",
            "options": [
              "Fue él quien lo propuso primero.",
              "Él fue quien propuso primero lo.",
              "No sabes lo difícil que fue esto.",
              "No sabes que difícil fue esto lo."
            ],
            "correctIndexes": [
              0,
              2
            ],
            "explanation": "Las otras dos versiones invierten incorrectamente el orden de los elementos de la estructura."
          }
        ]
      },
      {
        "heading": "En la práctica",
        "body": [
          "Una crítica sobre un concierto reciente."
        ],
        "examples": [
          {
            "es": "Lo que más me impresionó fue la energía del público desde el primer momento."
          },
          {
            "es": "Fue en el segundo tema cuando la banda realmente conectó con la audiencia."
          },
          {
            "es": "No te imaginas lo intenso que fue el final del concierto."
          },
          {
            "es": "A mí, personalmente, me pareció una de las mejores noches del año."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Cuándo conectó realmente la banda con la audiencia?",
            "options": [
              "Desde el inicio",
              "En el segundo tema",
              "Al final",
              "Nunca del todo"
            ],
            "correctIndex": 1,
            "explanation": "El texto dice: \"Fue en el segundo tema cuando la banda realmente conectó con la audiencia.\""
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "fill-blank",
        "prompt": "Completa con énfasis.",
        "sentence": "A nosotros ___ (gustar) mucho el teatro clásico.",
        "answer": "nos gusta",
        "explanation": "La anteposición de \"a nosotros\" requiere el pronombre \"nos\" que la retoma."
      },
      {
        "type": "multiple-choice",
        "question": "¿Cuál enfatiza correctamente \"el momento\"?",
        "options": [
          "Fue entonces que decidí cambiar.",
          "Fue entonces cuando decidí cambiar.",
          "Entonces fue que decidí cambiar.",
          "Fue cuando entonces decidí cambiar."
        ],
        "correctIndex": 1,
        "explanation": "Para enfatizar un momento, se usa \"fue entonces cuando\"."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la oración.",
        "sentence": "No te imaginas ___ cansado que estoy.",
        "answer": "lo",
        "explanation": "\"Lo + adjetivo + que\" enfatiza el grado de una cualidad."
      }
    ]
  },
  {
    "slug": "emphasis-word-order-2",
    "level": "B2",
    "number": 22,
    "title": "Énfasis y Orden de Palabras, Part 2 of 2",
    "summary": "Da fuerza a tus ideas con estructuras enfáticas: ser...que, lo + adjetivo + que, y la anteposición de elementos.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Vocabulario: La música y las artes escénicas",
        "body": [
          "Cincuenta palabras sobre música, teatro y artes escénicas."
        ],
        "examples": [
          {
            "es": "el escenario",
            "en": "espacio donde se presenta un espectáculo"
          },
          {
            "es": "el público",
            "en": "conjunto de espectadores"
          },
          {
            "es": "la audiencia",
            "en": "conjunto de personas que asisten a un evento"
          },
          {
            "es": "el simulacro",
            "en": "ejercicio de práctica que imita una situación real"
          },
          {
            "es": "ensayar",
            "en": "practicar antes de una presentación en vivo"
          },
          {
            "es": "la gira",
            "en": "serie de presentaciones en distintos lugares"
          },
          {
            "es": "el repertorio",
            "en": "conjunto de obras que un artista interpreta"
          },
          {
            "es": "la interpretación",
            "en": "manera en que se ejecuta una obra"
          },
          {
            "es": "interpretar (una canción)",
            "en": "ejecutar artísticamente una pieza musical"
          },
          {
            "es": "la melodía",
            "en": "sucesión de notas musicales"
          },
          {
            "es": "el ritmo",
            "en": "patrón de tiempo en la música"
          },
          {
            "es": "la armonía",
            "en": "combinación agradable de sonidos"
          },
          {
            "es": "la letra",
            "en": "texto de una canción"
          },
          {
            "es": "componer",
            "en": "crear una obra musical"
          },
          {
            "es": "el compositor",
            "en": "quien crea obras musicales"
          },
          {
            "es": "la partitura",
            "en": "notación escrita de una obra musical"
          },
          {
            "es": "afinar",
            "en": "ajustar un instrumento al tono correcto"
          },
          {
            "es": "desafinado",
            "en": "que no está en el tono correcto"
          },
          {
            "es": "la banda sonora",
            "en": "música que acompaña una obra audiovisual"
          },
          {
            "es": "el telón",
            "en": "cortina grande de un teatro"
          },
          {
            "es": "el vestuario",
            "en": "conjunto de trajes para una presentación"
          },
          {
            "es": "la coreografía",
            "en": "secuencia de movimientos de una danza"
          },
          {
            "es": "el bailarín / la bailarina",
            "en": "persona que baila profesionalmente"
          },
          {
            "es": "la puesta en escena",
            "en": "conjunto de elementos visuales de una obra"
          },
          {
            "es": "el director de escena",
            "en": "quien coordina la producción de una obra"
          },
          {
            "es": "el guion",
            "en": "texto que estructura una obra teatral"
          },
          {
            "es": "el actor / la actriz",
            "en": "persona que interpreta un personaje"
          },
          {
            "es": "el papel protagónico",
            "en": "personaje principal de una obra"
          },
          {
            "es": "el aplauso",
            "en": "muestra de aprobación del público"
          },
          {
            "es": "la ovación",
            "en": "aplauso prolongado y entusiasta"
          },
          {
            "es": "conmover al público",
            "en": "provocar una emoción profunda en los espectadores"
          },
          {
            "es": "el estreno",
            "en": "primera presentación pública de una obra"
          },
          {
            "es": "la crítica especializada",
            "en": "opinión de expertos sobre una obra"
          },
          {
            "es": "la taquilla",
            "en": "recaudación por venta de boletos"
          },
          {
            "es": "agotar las entradas",
            "en": "vender todos los boletos disponibles"
          },
          {
            "es": "el escenario improvisado",
            "en": "espacio no diseñado originalmente para presentaciones"
          },
          {
            "es": "la acústica",
            "en": "cualidad de un espacio para transmitir el sonido"
          },
          {
            "es": "el sonido en vivo",
            "en": "audio producido durante la presentación misma"
          },
          {
            "es": "el instrumento de cuerda",
            "en": "instrumento como la guitarra o el violín"
          },
          {
            "es": "el instrumento de viento",
            "en": "instrumento como la flauta o la trompeta"
          },
          {
            "es": "la percusión",
            "en": "instrumentos que se tocan golpeando"
          },
          {
            "es": "el solista",
            "en": "intérprete que actúa individualmente"
          },
          {
            "es": "la orquesta",
            "en": "conjunto grande de músicos"
          },
          {
            "es": "el conjunto musical",
            "en": "grupo de músicos que tocan juntos"
          },
          {
            "es": "improvisar",
            "en": "crear música o actuación sin preparación previa"
          },
          {
            "es": "la energía escénica",
            "en": "intensidad y presencia de un artista en escena"
          },
          {
            "es": "conectar con el público",
            "en": "establecer una relación emocional con los espectadores"
          },
          {
            "es": "dejar constancia",
            "en": "registrar algo de forma que quede como prueba"
          },
          {
            "es": "el virtuosismo",
            "en": "dominio técnico excepcional de un instrumento o arte"
          },
          {
            "es": "cautivador",
            "en": "que atrae poderosamente la atención"
          }
        ],
        "checkpoint": [
          {
            "type": "matching",
            "instructions": "Empareja cada palabra con su definición.",
            "pairs": [
              {
                "left": "la puesta en escena",
                "right": "conjunto de elementos visuales de una obra"
              },
              {
                "left": "la ovación",
                "right": "aplauso prolongado y entusiasta"
              },
              {
                "left": "el estreno",
                "right": "primera presentación pública de una obra"
              },
              {
                "left": "agotar las entradas",
                "right": "vender todos los boletos disponibles"
              },
              {
                "left": "la acústica",
                "right": "cualidad de un espacio para transmitir el sonido"
              },
              {
                "left": "improvisar",
                "right": "crear música o actuación sin preparación previa"
              },
              {
                "left": "el virtuosismo",
                "right": "dominio técnico excepcional de un instrumento o arte"
              },
              {
                "left": "conectar con el público",
                "right": "establecer una relación emocional con los espectadores"
              },
              {
                "left": "cautivador",
                "right": "que atrae poderosamente la atención"
              },
              {
                "left": "desafinado",
                "right": "que no está en el tono correcto"
              }
            ],
            "explanation": "Estas diez palabras describen la experiencia de un espectáculo en vivo."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multi-select",
        "question": "¿En qué oraciones se usa correctamente una estructura enfática? (Elige todas las correctas)",
        "options": [
          "Ese proyecto ya lo terminé.",
          "Ese proyecto ya terminé lo.",
          "Fue mi hermana quien lo organizó todo.",
          "Mi hermana fue quien organizó lo todo."
        ],
        "correctIndexes": [
          0,
          2
        ],
        "explanation": "Las otras dos colocan el pronombre incorrectamente."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras.",
        "words": [
          "Apenas",
          "había",
          "empezado",
          "el",
          "concierto",
          "cuando",
          "llovió"
        ],
        "explanation": "El adverbio \"apenas\" al inicio provoca la inversión sujeto-verbo."
      },
      {
        "type": "multiple-choice",
        "question": "¿Qué palabra significa \"dominio técnico excepcional de un instrumento o arte\"?",
        "options": [
          "la acústica",
          "el virtuosismo",
          "la coreografía",
          "el repertorio"
        ],
        "correctIndex": 1,
        "explanation": "\"El virtuosismo\" es el dominio técnico excepcional de un arte."
      }
    ]
  },
  {
    "slug": "cuyo-el-cual-1",
    "level": "B2",
    "number": 23,
    "title": "Cuyo y El Cual: Pronombres Relativos Avanzados, Part 1 of 2",
    "summary": "Aprende a usar \"cuyo\" para expresar posesión y \"el cual\" para hablar con precisión y formalidad, especialmente después de preposiciones.",
    "duration": "6 min",
    "sections": [
      {
        "heading": "Cuyo: posesión y concordancia inesperada",
        "body": [
          "\"Cuyo\" es un pronombre relativo que expresa posesión, equivalente a \"whose\" en inglés. Introduce una cláusula que indica que algo pertenece a la persona o cosa mencionada antes.",
          "La regla más importante —y la que más confunde a los estudiantes de habla inglesa— es esta: \"cuyo\" concuerda en género y número con el sustantivo que viene DESPUÉS de él (la cosa poseída), no con el poseedor. Por eso una oración puede parecer \"incorrecta\" si piensas en inglés, donde \"whose\" nunca cambia de forma."
        ],
        "examples": [
          {
            "es": "El hombre cuya casa visitamos es mi abuelo.",
            "en": "the man whose house we visited"
          },
          {
            "es": "La empresa cuyos empleados protestaron cerró la semana pasada.",
            "en": "the company whose employees protested"
          },
          {
            "es": "El escritor cuyas novelas ganaron el premio nacional es colombiano.",
            "en": "the writer whose novels won the national award"
          },
          {
            "es": "La actriz cuyo esposo dirige la película llegó tarde.",
            "en": "the actress whose husband directs the film"
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa la oración con la forma correcta de \"cuyo\".",
            "sentence": "El profesor ___ clases son tan populares se jubila este año.",
            "answer": "cuyas",
            "explanation": "\"Cuyo\" concuerda con \"clases\" (femenino plural), el sustantivo poseído, no con \"el profesor\" (masculino singular). Por eso la forma correcta es \"cuyas\", no \"cuyo\"."
          }
        ]
      },
      {
        "heading": "El cual, la cual, los cuales, las cuales: concordancia con el antecedente",
        "body": [
          "A diferencia de \"cuyo\", las formas \"el cual\", \"la cual\", \"los cuales\" y \"las cuales\" concuerdan en género y número con el ANTECEDENTE, es decir, con el sustantivo al que se refieren, igual que \"que\", pero marcando explícitamente el género y el número.",
          "Se usan sobre todo después de preposiciones, en especial las preposiciones largas o compuestas (según, durante, mediante, sin, para, por, tras...), donde \"que\" solo puede sonar raro o quedar ambiguo."
        ],
        "examples": [
          {
            "es": "Este es el contrato según el cual debemos pagar en treinta días.",
            "en": "the contract according to which we must pay within thirty days"
          },
          {
            "es": "La reunión durante la cual se tomó la decisión duró tres horas.",
            "en": "the meeting during which the decision was made"
          },
          {
            "es": "Los documentos sin los cuales no podemos continuar se perdieron.",
            "en": "the documents without which we cannot continue"
          },
          {
            "es": "Las empleadas para las cuales trabajo son muy amables.",
            "en": "the employees for whom I work"
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "Elige la opción correcta: \"Este es el proyecto ___ dependen cientos de familias.\"",
            "options": [
              "cuyo",
              "el cual",
              "del cual",
              "la cual"
            ],
            "correctIndex": 2,
            "explanation": "El verbo \"depender\" exige la preposición \"de\". Como el antecedente es \"el proyecto\" (masculino singular), la forma correcta es \"del cual\" (de + el cual)."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "¿Cuál es la oración correcta?",
        "options": [
          "La mujer cuyo hijos son médicos vive aquí.",
          "La mujer cuyos hijos son médicos vive aquí.",
          "La mujer cuya hijos son médicos vive aquí.",
          "La mujer cuyas hijo son médicos vive aquí."
        ],
        "correctIndex": 1,
        "explanation": "\"Cuyo\" concuerda con \"hijos\" (masculino plural), el sustantivo poseído, así que la forma correcta es \"cuyos\", sin importar que \"la mujer\" sea femenino."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa con la forma correcta de \"cuyo\".",
        "sentence": "El equipo ___ jugadores ganaron la medalla de oro fue entrevistado por la prensa.",
        "answer": "cuyos",
        "explanation": "\"Cuyo\" concuerda con \"jugadores\" (masculino plural, lo poseído), no con \"el equipo\" (masculino singular, el poseedor). Aquí ambos coinciden en género, pero la concordancia sigue dependiendo de \"jugadores\"."
      },
      {
        "type": "multiple-choice",
        "question": "Elige la opción correcta: \"Las razones ___ decidimos cancelar el viaje son complicadas.\"",
        "options": [
          "cuyo",
          "por las cuales",
          "por el cual",
          "las cuales"
        ],
        "correctIndex": 1,
        "explanation": "El antecedente es \"las razones\" (femenino plural) y la expresión requiere la preposición \"por\". La forma que concuerda en género y número con \"razones\" es \"por las cuales\"."
      },
      {
        "type": "multi-select",
        "question": "¿En cuáles oraciones se debe usar \"lo cual\" (y no \"el cual\", \"la cual\", etc.)?",
        "options": [
          "No llegó a tiempo, ___ nos causó problemas.",
          "La decisión ___ tomamos fue difícil.",
          "El jefe canceló la reunión, ___ nos sorprendió a todos.",
          "Los documentos ___ necesitamos están en la otra oficina."
        ],
        "correctIndexes": [
          0,
          2
        ],
        "explanation": "\"Lo cual\" se usa en la primera y la tercera oración porque el pronombre retoma toda la acción anterior (no llegar a tiempo; cancelar la reunión), no un sustantivo específico. En la segunda y la cuarta, el pronombre se refiere a un sustantivo concreto (\"la decisión\", \"los documentos\"), así que corresponde \"la cual\" o \"que\", no \"lo cual\"."
      }
    ]
  },
  {
    "slug": "cuyo-el-cual-2",
    "level": "B2",
    "number": 24,
    "title": "Cuyo y El Cual: Pronombres Relativos Avanzados, Part 2 of 2",
    "summary": "Aprende a usar \"cuyo\" para expresar posesión y \"el cual\" para hablar con precisión y formalidad, especialmente después de preposiciones.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "\"El cual\" vs. \"que\": ¿cuándo usar cada uno?",
        "body": [
          "En cláusulas cortas y cotidianas, \"que\" sigue siendo la opción más natural y frecuente: no hace falta complicar la frase con \"el cual\" si el sentido ya está claro.",
          "\"El cual\" se prefiere en dos situaciones concretas: cuando el registro es formal o escrito (informes, ensayos, noticias, textos legales) y cuando hay riesgo de ambigüedad porque la oración menciona más de un posible antecedente. En ese caso, la concordancia de género y número de \"el cual\" señala con precisión a cuál de los dos sustantivos se refiere."
        ],
        "examples": [
          {
            "es": "La casa que compramos es enorme.",
            "en": "the house that we bought"
          },
          {
            "es": "El hijo de mi vecina, el cual estudia medicina, vino a cenar.",
            "en": "my neighbor's son, who studies medicine, came to dinner"
          },
          {
            "es": "El hijo de mi vecina, la cual estudia medicina, vino a cenar.",
            "en": "my neighbor, who studies medicine — her son came to dinner"
          }
        ],
        "checkpoint": [
          {
            "type": "multi-select",
            "question": "¿En cuáles de las siguientes oraciones es apropiado usar \"el cual\" (o su forma correspondiente) en vez de \"que\"?",
            "options": [
              "La chica que conocí ayer es italiana.",
              "El hermano de mi jefa, el cual vive en Chile, nos visitará.",
              "Este es el motivo por el cual renuncié.",
              "Compré el libro que me recomendaste."
            ],
            "correctIndexes": [
              1,
              2
            ],
            "explanation": "\"El cual\" es apropiado en la oración sobre \"el hermano de mi jefa\" porque evita la ambigüedad de a quién se refiere (¿el hermano o la jefa?), y en la oración con la preposición \"por\", donde \"el cual\" es habitual. En las oraciones cortas y sin ambigüedad, \"que\" es más natural y se prefiere en el uso cotidiano."
          }
        ]
      },
      {
        "heading": "Lo cual: referirse a toda una idea",
        "body": [
          "\"Lo cual\" es una forma neutra que no concuerda con ningún sustantivo, porque no se refiere a una persona o cosa concreta, sino a toda una idea, acción o situación mencionada antes. Cumple una función parecida a \"lo que\" cuando este se refiere hacia atrás.",
          "Se usa típicamente después de una coma, para añadir un comentario sobre lo que se acaba de decir."
        ],
        "examples": [
          {
            "es": "Llovió todo el fin de semana, lo cual arruinó nuestros planes.",
            "en": "it rained all weekend, which ruined our plans"
          },
          {
            "es": "No me avisó del cambio de horario, lo cual me pareció una falta de respeto.",
            "en": "he didn't tell me about the schedule change, which I found disrespectful"
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa la oración con \"lo cual\" o la forma correcta de \"el cual\", según corresponda.",
            "sentence": "El vuelo se retrasó cuatro horas, ___ nos hizo perder la conexión.",
            "answer": "lo cual",
            "explanation": "\"Lo cual\" se refiere a toda la idea anterior (\"el vuelo se retrasó cuatro horas\"), no a un sustantivo específico, por lo que se usa la forma neutra en vez de una forma con género."
          }
        ]
      },
      {
        "heading": "Ponlo en práctica: un fragmento periodístico",
        "body": [
          "Lee el siguiente fragmento de una noticia y observa cómo se combinan estos pronombres en un texto formal real:",
          "\"El alcalde, cuya gestión ha sido muy criticada en los últimos meses, presentó ayer un plan de vivienda según el cual se construirán mil apartamentos para familias de bajos ingresos. El proyecto, del cual dependen miles de personas, comenzará el próximo año. Muchos vecinos dudan de que el plan se cumpla, lo cual refleja la desconfianza generalizada hacia el gobierno municipal.\""
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "Según el fragmento, ¿a qué se refiere \"lo cual\" en la última oración?",
            "options": [
              "A que el alcalde tiene mala gestión",
              "A que el proyecto empezará el año que viene",
              "A que muchos vecinos dudan de que el plan se cumpla",
              "A los mil apartamentos"
            ],
            "correctIndex": 2,
            "explanation": "\"Lo cual\" retoma toda la idea anterior —que los vecinos dudan de que el plan se cumpla— y no un sustantivo concreto; por eso funciona como comentario sobre esa idea completa."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Traduce la siguiente oración al español.",
        "source": "The professor, whose research has won several international awards, will give a lecture tomorrow.",
        "answer": "El profesor, cuya investigación ha ganado varios premios internacionales, dará una conferencia mañana.",
        "altAnswers": [
          "El profesor, cuya investigación ha ganado varios premios internacionales, va a dar una conferencia mañana."
        ],
        "explanation": "\"Cuya\" concuerda con \"investigación\" (femenino singular, lo poseído), no con \"el profesor\" (masculino)."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras para formar una oración correcta.",
        "words": [
          "Este",
          "es",
          "el",
          "motivo",
          "por",
          "el",
          "cual",
          "renuncié"
        ],
        "translation": "This is the reason why I resigned.",
        "explanation": "\"Por el cual\" retoma \"el motivo\" (masculino singular) tras la preposición \"por\"; es una construcción más formal que \"por que\" en este contexto."
      },
      {
        "type": "matching",
        "instructions": "Une cada pronombre relativo con la descripción que explica su uso correcto.",
        "pairs": [
          {
            "left": "cuyo / cuya / cuyos / cuyas",
            "right": "concuerda con el sustantivo poseído, no con el poseedor"
          },
          {
            "left": "el cual / la cual / los cuales / las cuales",
            "right": "concuerda con el antecedente; frecuente tras preposiciones o para evitar ambigüedad"
          },
          {
            "left": "lo cual",
            "right": "se refiere a toda una idea o cláusula anterior, no a un sustantivo"
          },
          {
            "left": "que",
            "right": "la opción más simple y natural en cláusulas cortas sin ambigüedad"
          }
        ],
        "explanation": "Cada pronombre relativo cumple una función distinta: \"cuyo\" indica posesión y concuerda con lo poseído; \"el cual\" concuerda con el antecedente y es común tras preposiciones o para evitar ambigüedad; \"lo cual\" retoma una idea completa; y \"que\" sigue siendo la forma más común en el habla cotidiana."
      }
    ]
  },
  {
    "slug": "subjunctive-adjective-clauses-drill-1",
    "level": "B2",
    "number": 25,
    "title": "El Subjuntivo en Cláusulas Adjetivas (Relativas): Práctica Extra, Part 1 of 3",
    "summary": "Practica el contraste entre indicativo y subjuntivo en cláusulas relativas: antecedentes conocidos frente a indefinidos, desconocidos o inexistentes, con muchos verbos y contextos distintos.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Antecedente indefinido o desconocido",
        "body": [
          "Cuando el antecedente de la cláusula relativa es indefinido o desconocido, el verbo va en subjuntivo."
        ],
        "examples": [
          {
            "es": "Busco un apartamento que tenga dos baños.",
            "en": "I'm looking for an apartment that has two bathrooms."
          },
          {
            "es": "Necesitamos un empleado que hable alemán.",
            "en": "We need an employee who speaks German."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa la oración con la forma correcta del subjuntivo.",
            "sentence": "Quiero comprar una casa que ___ (tener) jardín.",
            "answer": "tenga",
            "hint": "El hablante todavía no ha encontrado esa casa.",
            "explanation": "El antecedente 'una casa' es indefinido (no se refiere a una casa específica todavía), así que se usa el subjuntivo: tenga."
          }
        ]
      },
      {
        "heading": "Antecedente conocido o específico",
        "body": [
          "Cuando el antecedente es conocido, específico o ya identificado, el verbo va en indicativo."
        ],
        "examples": [
          {
            "es": "Tengo un apartamento que tiene dos baños.",
            "en": "I have an apartment that has two bathrooms."
          },
          {
            "es": "Conozco a un empleado que habla alemán.",
            "en": "I know an employee who speaks German."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa la oración con la forma correcta del verbo.",
            "sentence": "Vivo en una casa que ___ (tener) jardín.",
            "answer": "tiene",
            "hint": "El hablante ya vive en esa casa concreta.",
            "explanation": "El antecedente 'una casa' es específica y conocida por el hablante (la casa donde vive), así que se usa el indicativo: tiene."
          }
        ]
      },
      {
        "heading": "Contraste: mismo verbo, distinto modo",
        "body": [
          "La diferencia entre indicativo y subjuntivo en cláusulas adjetivas depende únicamente de si el antecedente existe o se conoce."
        ],
        "examples": [
          {
            "es": "Hay un restaurante que sirve comida vegana.",
            "en": "There's a restaurant that serves vegan food."
          },
          {
            "es": "Busco un restaurante que sirva comida vegana.",
            "en": "I'm looking for a restaurant that serves vegan food."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Cuál oración usa correctamente el subjuntivo porque el hablante no sabe si existe tal persona?",
            "options": [
              "Tengo un amigo que vive en Madrid.",
              "Busco un amigo que viva en Madrid.",
              "Conozco a un amigo que vive en Madrid.",
              "Mi amigo que vive en Madrid es simpático."
            ],
            "correctIndex": 1,
            "explanation": "'Busco un amigo que viva en Madrid' implica que no se sabe si esa persona existe todavía, por eso se usa el subjuntivo 'viva'."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "Elige la forma correcta: Busco un traductor que ___ francés perfectamente.",
        "options": [
          "habla",
          "hable",
          "hablará",
          "ha hablado"
        ],
        "correctIndex": 1,
        "explanation": "El antecedente 'un traductor' es indefinido (no se sabe si existe tal persona todavía), así que se usa el subjuntivo: hable."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con la forma correcta del verbo.",
        "sentence": "Tengo una amiga que ___ (saber) tocar el piano.",
        "answer": "sabe",
        "hint": "El antecedente es específico y conocido.",
        "explanation": "'Una amiga' es una persona específica y conocida por el hablante, así que se usa el indicativo: sabe."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con la forma correcta del verbo.",
        "sentence": "No conozco a nadie que ___ (querer) trabajar los fines de semana.",
        "answer": "quiera",
        "hint": "El antecedente es negativo: nadie.",
        "explanation": "'Nadie' es un antecedente negativo, por lo que siempre requiere subjuntivo: quiera."
      },
      {
        "type": "translate",
        "direction": "es-en",
        "prompt": "Traduce la oración al inglés.",
        "source": "No hay ningún libro aquí que explique este tema.",
        "answer": "There isn't any book here that explains this topic.",
        "altAnswers": [
          "There's no book here that explains this topic."
        ],
        "explanation": "'Ningún libro' es un antecedente negativo e inexistente en español, lo cual requiere subjuntivo: explique."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Traduce la oración al español.",
        "source": "She's looking for a roommate who doesn't smoke.",
        "answer": "Ella busca una compañera de cuarto que no fume.",
        "altAnswers": [
          "Ella busca un compañero de cuarto que no fume.",
          "Ella está buscando una compañera de cuarto que no fume."
        ],
        "explanation": "Como todavía no se sabe si existe tal compañero/a de cuarto, se usa el subjuntivo: fume."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras para formar una oración correcta.",
        "words": [
          "Necesitamos",
          "un",
          "asistente",
          "que",
          "hable",
          "inglés",
          "y",
          "español"
        ],
        "translation": "We need an assistant who speaks English and Spanish.",
        "explanation": "El antecedente 'un asistente' todavía no se ha identificado, así que el verbo va en subjuntivo: hable."
      }
    ]
  },
  {
    "slug": "subjunctive-adjective-clauses-drill-2",
    "level": "B2",
    "number": 26,
    "title": "El Subjuntivo en Cláusulas Adjetivas (Relativas): Práctica Extra, Part 2 of 3",
    "summary": "Practica el contraste entre indicativo y subjuntivo en cláusulas relativas: antecedentes conocidos frente a indefinidos, desconocidos o inexistentes, con muchos verbos y contextos distintos.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Antecedente negativo: nadie, nada, ningún/a",
        "body": [
          "Cuando el antecedente es negativo (nadie, nada, ningún/a) porque no existe, siempre se usa el subjuntivo."
        ],
        "examples": [
          {
            "es": "No hay nadie que sepa la respuesta.",
            "en": "There's no one who knows the answer."
          },
          {
            "es": "No conozco a ningún médico que trabaje los domingos.",
            "en": "I don't know any doctor who works on Sundays."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa la oración con la forma correcta del verbo.",
            "sentence": "No hay ningún restaurante aquí que ___ (servir) comida tailandesa.",
            "answer": "sirva",
            "hint": "El antecedente es negativo.",
            "explanation": "'Ningún restaurante' es un antecedente negativo e inexistente para el hablante, por lo tanto requiere subjuntivo: sirva."
          }
        ]
      },
      {
        "heading": "Expresiones comunes: busco/necesito + subjuntivo",
        "body": [
          "Los verbos buscar, necesitar y querer suelen introducir cláusulas adjetivas con subjuntivo cuando el objeto aún no se ha encontrado."
        ],
        "examples": [
          {
            "es": "Necesito algo que me ayude a dormir.",
            "en": "I need something that will help me sleep."
          },
          {
            "es": "Quiero un coche que no consuma mucha gasolina.",
            "en": "I want a car that doesn't use much gas."
          }
        ],
        "checkpoint": [
          {
            "type": "translate",
            "direction": "en-es",
            "prompt": "Traduce la oración al español.",
            "source": "I need a job that pays well.",
            "answer": "Necesito un trabajo que pague bien.",
            "explanation": "Como el trabajo todavía no existe ni se ha identificado, se usa el subjuntivo: pague."
          }
        ]
      },
      {
        "heading": "Preguntas: ¿conoces a alguien que...?",
        "body": [
          "En preguntas donde no se sabe si algo o alguien existe, también se usa el subjuntivo en la cláusula adjetiva."
        ],
        "examples": [
          {
            "es": "¿Conoces a alguien que hable japonés?",
            "en": "Do you know anyone who speaks Japanese?"
          },
          {
            "es": "¿Hay algún hotel por aquí que acepte mascotas?",
            "en": "Is there a hotel around here that accepts pets?"
          }
        ],
        "checkpoint": [
          {
            "type": "word-order",
            "prompt": "Ordena las palabras para formar una pregunta correcta.",
            "words": [
              "¿Conoces",
              "a",
              "alguien",
              "que",
              "sepa",
              "reparar",
              "computadoras",
              "?"
            ],
            "translation": "Do you know anyone who knows how to fix computers?",
            "explanation": "Es una pregunta sobre una persona no identificada, así que el verbo va en subjuntivo: sepa."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "¿Indicativo o subjuntivo? Mi hermano tiene un carro que ___ mucha gasolina.",
        "options": [
          "consuma",
          "consume",
          "consumiera",
          "haya consumido"
        ],
        "correctIndex": 1,
        "explanation": "'Un carro' aquí es específico (el carro que mi hermano ya tiene), así que se usa el indicativo: consume."
      },
      {
        "type": "multi-select",
        "question": "¿Cuáles de estas oraciones requieren el subjuntivo?",
        "options": [
          "Vivo en un barrio que es muy tranquilo.",
          "Quiero vivir en un barrio que sea tranquilo.",
          "No hay ningún barrio aquí que sea tan tranquilo como el mío.",
          "Conozco un barrio que es tranquilo."
        ],
        "correctIndexes": [
          1,
          2
        ],
        "explanation": "Las oraciones con antecedente indefinido ('un barrio' que aún no se ha encontrado) o negativo ('ningún barrio') requieren subjuntivo; las que describen un lugar específico y conocido usan indicativo."
      },
      {
        "type": "matching",
        "instructions": "Empareja cada inicio de oración con el final que tenga el modo verbal correcto.",
        "pairs": [
          {
            "left": "Busco un profesor que...",
            "right": "sepa explicar bien la gramática."
          },
          {
            "left": "Tengo un profesor que...",
            "right": "sabe explicar bien la gramática."
          },
          {
            "left": "No hay ningún profesor que...",
            "right": "explique tan bien como el mío."
          }
        ],
        "explanation": "'Busco' y 'no hay ningún' llevan antecedentes indefinidos o negativos y requieren subjuntivo (sepa, explique); 'tengo' se refiere a un profesor específico y usa indicativo (sabe)."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con la forma correcta del verbo.",
        "sentence": "¿Hay alguna farmacia por aquí que ___ (estar) abierta las 24 horas?",
        "answer": "esté",
        "hint": "Se pregunta sobre algo cuya existencia no se conoce.",
        "explanation": "En preguntas sobre algo desconocido o no confirmado, se usa el subjuntivo: esté."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con la forma correcta del verbo.",
        "sentence": "El restaurante que ___ (estar) en la esquina sirve la mejor paella de la ciudad.",
        "answer": "está",
        "hint": "Se refiere a un restaurante específico.",
        "explanation": "El hablante se refiere a un restaurante concreto y conocido, así que se usa el indicativo: está."
      }
    ]
  },
  {
    "slug": "subjunctive-adjective-clauses-drill-3",
    "level": "B2",
    "number": 27,
    "title": "El Subjuntivo en Cláusulas Adjetivas (Relativas): Práctica Extra, Part 3 of 3",
    "summary": "Practica el contraste entre indicativo y subjuntivo en cláusulas relativas: antecedentes conocidos frente a indefinidos, desconocidos o inexistentes, con muchos verbos y contextos distintos.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Verbos irregulares en subjuntivo",
        "body": [
          "Los verbos irregulares (ser, estar, ir, saber, dar, haber) también siguen esta regla en cláusulas adjetivas."
        ],
        "examples": [
          {
            "es": "Busco a alguien que sea honesto.",
            "en": "I'm looking for someone who is honest."
          },
          {
            "es": "No hay nada que yo pueda hacer.",
            "en": "There's nothing I can do."
          }
        ],
        "checkpoint": [
          {
            "type": "multi-select",
            "question": "¿Cuáles de las siguientes oraciones requieren subjuntivo?",
            "options": [
              "Tengo un jefe que es muy estricto.",
              "Busco un jefe que sea comprensivo.",
              "No hay nadie que esté disponible ahora.",
              "Conozco a una chica que sabe cocinar paella."
            ],
            "correctIndexes": [
              1,
              2
            ],
            "explanation": "'Busco un jefe que sea comprensivo' y 'No hay nadie que esté disponible' tienen antecedentes indefinidos o negativos, así que llevan subjuntivo; las otras dos tienen antecedentes específicos y conocidos y llevan indicativo."
          }
        ]
      },
      {
        "heading": "Repaso mixto: indicativo vs. subjuntivo",
        "body": [
          "Antes de practicar, recuerda identificar si el antecedente es conocido (indicativo) o indefinido/inexistente (subjuntivo)."
        ],
        "examples": [
          {
            "es": "Ella tiene un perro que ladra mucho.",
            "en": "She has a dog that barks a lot."
          },
          {
            "es": "Ella quiere un perro que no ladre mucho.",
            "en": "She wants a dog that doesn't bark much."
          }
        ],
        "checkpoint": [
          {
            "type": "matching",
            "instructions": "Empareja cada oración en español con su traducción correcta en inglés.",
            "pairs": [
              {
                "left": "Busco una casa que tenga piscina.",
                "right": "I'm looking for a house that has a pool."
              },
              {
                "left": "Tengo una casa que tiene piscina.",
                "right": "I have a house that has a pool."
              },
              {
                "left": "No hay nadie que pueda ayudarte.",
                "right": "There's no one who can help you."
              }
            ],
            "explanation": "El uso del subjuntivo (tenga, pueda) indica un antecedente indefinido o inexistente; el indicativo (tiene) indica un antecedente específico y conocido."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "translate",
        "direction": "es-en",
        "prompt": "Traduce la oración al inglés.",
        "source": "¿Conoces a alguien que pueda arreglar mi computadora?",
        "answer": "Do you know anyone who can fix my computer?",
        "explanation": "Como no se sabe si existe tal persona, la cláusula adjetiva lleva subjuntivo en español: pueda."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras para formar una oración correcta.",
        "words": [
          "No",
          "conozco",
          "a",
          "nadie",
          "que",
          "haya",
          "vivido",
          "en",
          "Japón"
        ],
        "translation": "I don't know anyone who has lived in Japan.",
        "explanation": "'Nadie' es un antecedente negativo, así que el verbo va en subjuntivo (presente perfecto de subjuntivo): haya vivido."
      },
      {
        "type": "multiple-choice",
        "question": "Completa: Queremos contratar a alguien que ___ experiencia en marketing digital.",
        "options": [
          "tiene",
          "tenga",
          "tendrá",
          "tuvo"
        ],
        "correctIndex": 1,
        "explanation": "'Alguien' que todavía no se ha identificado es un antecedente indefinido, así que se usa el subjuntivo: tenga."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con la forma correcta del verbo.",
        "sentence": "Mis padres compraron una casa que ___ (tener) cuatro dormitorios.",
        "answer": "tiene",
        "hint": "La casa ya existe y ya la compraron.",
        "explanation": "La casa es un objeto específico y real que ya se compró, así que se usa el indicativo: tiene."
      },
      {
        "type": "multi-select",
        "question": "¿Cuáles oraciones usan correctamente el subjuntivo?",
        "options": [
          "No hay nada que me guste en este menú.",
          "Tengo un amigo que sea médico.",
          "Busco una app que me ayude a estudiar español.",
          "Ella conoce a un chico que hable ruso."
        ],
        "correctIndexes": [
          0,
          2
        ],
        "explanation": "'No hay nada que me guste' (antecedente negativo) y 'Busco una app que me ayude' (antecedente indefinido) usan correctamente el subjuntivo; las otras dos describen personas específicas y conocidas, por lo que deberían llevar indicativo (es médico, habla ruso)."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Traduce la oración al español.",
        "source": "There's nothing here that can help me.",
        "answer": "No hay nada aquí que me pueda ayudar.",
        "altAnswers": [
          "No hay nada aquí que pueda ayudarme."
        ],
        "explanation": "'Nada' es un antecedente negativo, así que siempre requiere subjuntivo: pueda."
      }
    ]
  },
  {
    "slug": "subjunctive-adverbial-clauses-drill-1",
    "level": "B2",
    "number": 28,
    "title": "El Subjuntivo en Cláusulas Adverbiales: Práctica Extra, Part 1 of 3",
    "summary": "Practica de forma intensiva el uso del subjuntivo con conjunciones temporales (cuando, en cuanto, hasta que, antes de que), de propósito (para que) y de concesión (aunque, a pesar de que), contrastándolo con el indicativo en contextos habituales o reales.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Cuando: futuro/hipotético vs. hábito/pasado",
        "body": [
          "Cuando + subjuntivo señala una acción futura o hipotética; cuando + indicativo señala un hábito o un hecho pasado."
        ],
        "examples": [
          {
            "es": "Te llamaré cuando llegue a casa.",
            "en": "I'll call you when I get home."
          },
          {
            "es": "Siempre te llamo cuando llego a casa.",
            "en": "I always call you when I get home."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa la oración con la forma correcta del verbo entre paréntesis.",
            "sentence": "Cuando ___ (tener) tiempo, te ayudaré con la mudanza.",
            "answer": "tenga",
            "hint": "subjuntivo presente",
            "explanation": "Como la acción es futura y aún no ha ocurrido, 'cuando' requiere el subjuntivo (tenga)."
          },
          {
            "type": "multiple-choice",
            "question": "¿Qué opción completa correctamente la oración?: 'Cuando era niño, ___ al parque todos los días.'",
            "options": [
              "voy",
              "iba",
              "vaya",
              "fuera"
            ],
            "correctIndex": 1,
            "explanation": "Se refiere a una acción habitual en el pasado, por eso se usa el indicativo (iba), no el subjuntivo."
          }
        ]
      },
      {
        "heading": "En cuanto, tan pronto como, hasta que, después de que",
        "body": [
          "En cuanto, tan pronto como, hasta que y después de que siguen la misma regla que cuando: subjuntivo para el futuro, indicativo para lo habitual o lo ya ocurrido."
        ],
        "examples": [
          {
            "es": "En cuanto termine el examen, saldré a celebrar.",
            "en": "As soon as I finish the exam, I'll go out to celebrate."
          },
          {
            "es": "Esperé hasta que terminó la película.",
            "en": "I waited until the movie ended."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "Elige la forma correcta: 'En cuanto ___ (llegar) el jefe, empezaremos la reunión.'",
            "options": [
              "llega",
              "llegue",
              "llegaba",
              "ha llegado"
            ],
            "correctIndex": 1,
            "explanation": "La llegada del jefe todavía no ha ocurrido, así que 'en cuanto' exige subjuntivo (llegue)."
          },
          {
            "type": "fill-blank",
            "prompt": "Completa la oración con la forma correcta del verbo entre paréntesis.",
            "sentence": "Esperamos hasta que ___ (terminar) la película anoche.",
            "answer": "terminó",
            "hint": "acción ya ocurrida, indicativo",
            "explanation": "Como la acción ya sucedió en el pasado, 'hasta que' va con indicativo (terminó), no subjuntivo."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "Elige la forma correcta: 'Cuando ___ (terminar) mis estudios, viajaré por Sudamérica.'",
        "options": [
          "termino",
          "termine",
          "terminé",
          "terminaba"
        ],
        "correctIndex": 1,
        "explanation": "La acción es futura y aún no ha sucedido, por lo que 'cuando' exige subjuntivo (termine)."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con la forma correcta del verbo entre paréntesis.",
        "sentence": "En cuanto ___ (saber) los resultados, te escribiré.",
        "answer": "sepa",
        "hint": "subjuntivo presente, acción futura",
        "explanation": "'En cuanto' introduce una acción futura e incierta, así que requiere subjuntivo (sepa)."
      },
      {
        "type": "translate",
        "direction": "es-en",
        "prompt": "Traduce la oración al inglés.",
        "source": "No podré dormir hasta que llegues a casa.",
        "answer": "I won't be able to sleep until you get home.",
        "altAnswers": [
          "I won't be able to sleep until you arrive home."
        ],
        "explanation": "'Hasta que' se refiere a un momento futuro incierto, por eso el verbo va en subjuntivo (llegues)."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Traduce la oración al español.",
        "source": "Even though I don't have much money, I'm happy.",
        "answer": "Aunque no tengo mucho dinero, soy feliz.",
        "altAnswers": [
          "Aunque no tengo mucho dinero, estoy feliz."
        ],
        "explanation": "Es un hecho real y conocido por el hablante, así que 'aunque' lleva indicativo (tengo), no subjuntivo."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras para formar una oración correcta.",
        "words": [
          "Te",
          "doy",
          "mi",
          "número",
          "para",
          "que",
          "me",
          "llames"
        ],
        "translation": "I'll give you my number so that you call me.",
        "explanation": "'Para que' expresa propósito y siempre necesita subjuntivo (llames)."
      },
      {
        "type": "matching",
        "instructions": "Une cada conjunción con el ejemplo que la usa correctamente.",
        "pairs": [
          {
            "left": "sin que",
            "right": "Salió de la casa sin que nadie lo viera."
          },
          {
            "left": "a menos que",
            "right": "No iremos a menos que deje de llover."
          },
          {
            "left": "con tal de que",
            "right": "Te ayudo con tal de que me lo agradezcas."
          },
          {
            "left": "en caso de que",
            "right": "Lleva el paraguas en caso de que llueva."
          }
        ],
        "explanation": "Estas cuatro conjunciones siempre exigen subjuntivo porque introducen condiciones, excepciones o situaciones hipotéticas."
      }
    ]
  },
  {
    "slug": "subjunctive-adverbial-clauses-drill-2",
    "level": "B2",
    "number": 29,
    "title": "El Subjuntivo en Cláusulas Adverbiales: Práctica Extra, Part 2 of 3",
    "summary": "Practica de forma intensiva el uso del subjuntivo con conjunciones temporales (cuando, en cuanto, hasta que, antes de que), de propósito (para que) y de concesión (aunque, a pesar de que), contrastándolo con el indicativo en contextos habituales o reales.",
    "duration": "9 min",
    "sections": [
      {
        "heading": "Antes de que: siempre subjuntivo",
        "body": [
          "Antes de que siempre va con subjuntivo, sin importar si la acción es futura, habitual o pasada."
        ],
        "examples": [
          {
            "es": "Antes de que empiece la reunión, prepara los documentos.",
            "en": "Before the meeting starts, prepare the documents."
          },
          {
            "es": "Llegamos antes de que empezara la reunión.",
            "en": "We arrived before the meeting started."
          }
        ],
        "checkpoint": [
          {
            "type": "translate",
            "direction": "es-en",
            "prompt": "Traduce la oración al inglés.",
            "source": "Llegamos antes de que empezara la reunión.",
            "answer": "We arrived before the meeting started.",
            "explanation": "'Antes de que' siempre lleva subjuntivo, incluso al hablar del pasado (empezara)."
          }
        ]
      },
      {
        "heading": "Aunque: concreto vs. hipotético",
        "body": [
          "Aunque lleva subjuntivo cuando la información es hipotética o desconocida, e indicativo cuando expresa un hecho real y conocido."
        ],
        "examples": [
          {
            "es": "Aunque llueve, saldremos a caminar.",
            "en": "Even though it's raining, we'll go for a walk."
          },
          {
            "es": "Aunque llueva mañana, saldremos a caminar.",
            "en": "Even if it rains tomorrow, we'll go for a walk."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "'Aunque ___ (llover), no cancelaremos el picnic mañana.' (No sabemos si va a llover o no)",
            "options": [
              "llueve",
              "llueva",
              "llovía",
              "ha llovido"
            ],
            "correctIndex": 1,
            "explanation": "Como no se sabe con certeza si lloverá, es información hipotética y 'aunque' requiere subjuntivo (llueva)."
          },
          {
            "type": "fill-blank",
            "prompt": "Completa la oración con la forma correcta del verbo entre paréntesis.",
            "sentence": "Aunque ___ (ser) las once de la noche, los niños siguen jugando.",
            "answer": "son",
            "hint": "hecho real y confirmado",
            "explanation": "Es un hecho constatado —de verdad son las once—, así que 'aunque' va con indicativo (son)."
          }
        ]
      },
      {
        "heading": "A pesar de que: la misma distinción",
        "body": [
          "A pesar de que sigue la misma regla que aunque: indicativo para hechos confirmados, subjuntivo para lo hipotético o incierto."
        ],
        "examples": [
          {
            "es": "A pesar de que tiene poco dinero, viaja mucho.",
            "en": "Even though he has little money, he travels a lot."
          },
          {
            "es": "A pesar de que sea difícil, lo intentaremos.",
            "en": "Even if it's difficult, we'll try it."
          }
        ],
        "checkpoint": [
          {
            "type": "word-order",
            "prompt": "Ordena las palabras para formar una oración correcta.",
            "words": [
              "A",
              "pesar",
              "de",
              "que",
              "tiene",
              "poco",
              "dinero,",
              "viaja",
              "mucho."
            ],
            "translation": "Even though he has little money, he travels a lot.",
            "explanation": "Es un hecho real y conocido —de verdad tiene poco dinero—, por eso 'a pesar de que' lleva indicativo (tiene)."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multi-select",
        "question": "¿Cuáles de estas oraciones usan correctamente el subjuntivo?",
        "options": [
          "Cuando tengo hambre, como algo ligero.",
          "Cuando tenga hambre, comeré algo ligero.",
          "Aunque llueva mañana, iremos al concierto.",
          "Te lo explico para que entiendes mejor."
        ],
        "correctIndexes": [
          1,
          2
        ],
        "explanation": "La segunda oración usa subjuntivo correctamente para una acción futura (tenga) y la tercera para una situación hipotética (llueva). La primera describe un hábito y debe llevar indicativo; la cuarta usa 'para que', que siempre exige subjuntivo (entiendas), no indicativo."
      },
      {
        "type": "multiple-choice",
        "question": "'Aunque ___ (ganar) mucho dinero, no es feliz.' (Sabemos que gana mucho dinero.)",
        "options": [
          "gana",
          "gane",
          "ganara",
          "ganaría"
        ],
        "correctIndex": 0,
        "explanation": "Es un hecho conocido y confirmado, por lo que 'aunque' lleva indicativo (gana)."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con la forma correcta del verbo entre paréntesis.",
        "sentence": "Tan pronto como ___ (poder), te devuelvo la llamada.",
        "answer": "pueda",
        "hint": "subjuntivo presente",
        "explanation": "'Tan pronto como' se refiere a una acción futura incierta, así que necesita subjuntivo (pueda)."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Traduce la oración al español.",
        "source": "Take an umbrella in case it rains.",
        "answer": "Lleva un paraguas en caso de que llueva.",
        "explanation": "'En caso de que' siempre requiere subjuntivo (llueva), sin importar el contexto."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras para formar una oración correcta.",
        "words": [
          "No",
          "saldremos",
          "a",
          "menos",
          "que",
          "termines",
          "la",
          "tarea"
        ],
        "translation": "We won't go out unless you finish the homework.",
        "explanation": "'A menos que' siempre exige subjuntivo (termines) porque introduce una excepción o condición."
      },
      {
        "type": "multiple-choice",
        "question": "Elige la opción correcta: 'Después de que ___ (graduarse), Marta se mudó a Madrid.' (ya ocurrió)",
        "options": [
          "se gradúa",
          "se graduara",
          "se graduó",
          "se graduaría"
        ],
        "correctIndex": 2,
        "explanation": "La acción ya sucedió en el pasado, así que 'después de que' lleva indicativo (se graduó), no subjuntivo."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con la forma correcta del verbo entre paréntesis.",
        "sentence": "A pesar de que ___ (ser) difícil, terminaremos el proyecto a tiempo.",
        "answer": "sea",
        "hint": "subjuntivo, situación no confirmada",
        "explanation": "Como no se sabe con certeza si el proyecto será difícil, 'a pesar de que' lleva subjuntivo (sea)."
      }
    ]
  },
  {
    "slug": "subjunctive-adverbial-clauses-drill-3",
    "level": "B2",
    "number": 30,
    "title": "El Subjuntivo en Cláusulas Adverbiales: Práctica Extra, Part 3 of 3",
    "summary": "Practica de forma intensiva el uso del subjuntivo con conjunciones temporales (cuando, en cuanto, hasta que, antes de que), de propósito (para que) y de concesión (aunque, a pesar de que), contrastándolo con el indicativo en contextos habituales o reales.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Para que: propósito, siempre subjuntivo",
        "body": [
          "Para que expresa propósito con dos sujetos distintos y siempre requiere subjuntivo."
        ],
        "examples": [
          {
            "es": "Te lo explico para que entiendas.",
            "en": "I'm explaining it to you so that you understand."
          },
          {
            "es": "Hablé más despacio para que me entendieran.",
            "en": "I spoke more slowly so that they would understand me."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Cuál es la opción correcta?: 'Te presto el libro para que lo ___ (leer).'",
            "options": [
              "lees",
              "leas",
              "leíste",
              "leerás"
            ],
            "correctIndex": 1,
            "explanation": "'Para que' expresa propósito y siempre exige subjuntivo (leas), nunca indicativo."
          }
        ]
      },
      {
        "heading": "Conjunciones que siempre llevan subjuntivo",
        "body": [
          "Sin que, a menos que, con tal de que y en caso de que siempre exigen subjuntivo porque introducen condiciones o excepciones."
        ],
        "examples": [
          {
            "es": "Iré a la fiesta con tal de que tú vengas también.",
            "en": "I'll go to the party as long as you come too."
          },
          {
            "es": "Llévate un paraguas en caso de que llueva.",
            "en": "Take an umbrella in case it rains."
          }
        ],
        "checkpoint": [
          {
            "type": "multi-select",
            "question": "Selecciona TODAS las conjunciones que siempre requieren subjuntivo.",
            "options": [
              "para que",
              "cuando",
              "sin que",
              "a menos que",
              "porque",
              "en caso de que"
            ],
            "correctIndexes": [
              0,
              2,
              3,
              5
            ],
            "explanation": "'Para que', 'sin que', 'a menos que' y 'en caso de que' siempre llevan subjuntivo; 'cuando' depende del contexto y 'porque' se usa con indicativo."
          }
        ]
      },
      {
        "heading": "Repaso general: contraste de todos los conectores",
        "body": [
          "Repasa todos los conectores juntos para reforzar la diferencia entre lo real o habitual y lo futuro o hipotético."
        ],
        "examples": [
          {
            "es": "Siempre salgo a correr cuando hace buen tiempo.",
            "en": "I always go running when the weather is nice."
          },
          {
            "es": "Vamos a la playa a menos que haya tormenta.",
            "en": "We're going to the beach unless there's a storm."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa la oración con la forma correcta del verbo entre paréntesis.",
            "sentence": "Vamos a la playa a menos que ___ (haber) tormenta.",
            "answer": "haya",
            "hint": "siempre subjuntivo",
            "explanation": "'A menos que' siempre requiere subjuntivo, sin importar el contexto temporal."
          },
          {
            "type": "multiple-choice",
            "question": "'Siempre salgo a correr cuando ___ (hacer) buen tiempo.'",
            "options": [
              "hace",
              "haga",
              "hizo",
              "hiciera"
            ],
            "correctIndex": 0,
            "explanation": "Se describe una rutina habitual, así que 'cuando' lleva indicativo (hace)."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "translate",
        "direction": "es-en",
        "prompt": "Traduce la oración al inglés.",
        "source": "Con tal de que me acompañes, iré a la fiesta.",
        "answer": "As long as you come with me, I'll go to the party.",
        "altAnswers": [
          "Provided that you accompany me, I'll go to the party."
        ],
        "explanation": "'Con tal de que' siempre requiere subjuntivo (acompañes) porque expresa una condición."
      },
      {
        "type": "multi-select",
        "question": "¿Cuáles oraciones describen una acción habitual y por eso usan indicativo correctamente?",
        "options": [
          "Cuando salgo del trabajo, paso por el supermercado.",
          "Cuando salga del trabajo, pasaré por el supermercado.",
          "Siempre estudio hasta que me canso.",
          "Estudiaré hasta que termine el capítulo."
        ],
        "correctIndexes": [
          0,
          2
        ],
        "explanation": "La primera y la tercera describen rutinas o hábitos, por lo que usan indicativo (salgo, canso). La segunda y la cuarta se refieren a acciones futuras aún no realizadas y requieren subjuntivo (salga, termine)."
      },
      {
        "type": "matching",
        "instructions": "Une cada inicio de oración con el final que use correctamente el subjuntivo o el indicativo.",
        "pairs": [
          {
            "left": "Cuando era pequeño,",
            "right": "jugaba en este parque todos los días."
          },
          {
            "left": "Cuando sea mayor,",
            "right": "quiero ser médico."
          },
          {
            "left": "Aunque hace frío ahora mismo,",
            "right": "no llevo abrigo."
          },
          {
            "left": "Aunque haga frío mañana,",
            "right": "iremos a la montaña."
          }
        ],
        "explanation": "El pasado habitual y los hechos conocidos van con indicativo (era, jugaba, hace); el futuro y lo hipotético van con subjuntivo (sea, haga)."
      },
      {
        "type": "multiple-choice",
        "question": "¿Qué opción es correcta?: 'Sin que nadie lo ___ (notar), el gato salió por la ventana.'",
        "options": [
          "nota",
          "note",
          "notó",
          "notara"
        ],
        "correctIndex": 3,
        "explanation": "'Sin que' siempre requiere subjuntivo; como la acción ya ocurrió en el pasado, se usa el imperfecto de subjuntivo (notara)."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con la forma correcta del verbo entre paréntesis.",
        "sentence": "Vamos a esperar aquí hasta que ___ (dejar) de llover.",
        "answer": "deje",
        "hint": "subjuntivo presente, acción futura",
        "explanation": "Como no sabemos cuándo dejará de llover, 'hasta que' requiere subjuntivo (deje)."
      }
    ]
  },
  {
    "slug": "imperfect-subjunctive-sequence-tenses-drill-1",
    "level": "B2",
    "number": 31,
    "title": "El Imperfecto de Subjuntivo y la Correlación de Tiempos: Práctica Extra, Part 1 of 3",
    "summary": "Practica la formación del imperfecto de subjuntivo (-ra y -se), sus raíces irregulares más comunes y la correlación de tiempos entre la cláusula principal y la cláusula subordinada.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Formación regular: verbos en -AR",
        "body": [
          "Recuerda: se quita '-ron' de la tercera persona plural del pretérito y se añaden las terminaciones -ra (hablara, hablaras, hablara, habláramos, hablarais, hablaran)."
        ],
        "examples": [
          {
            "es": "hablaron → hablara",
            "en": "they spoke → (that) I/he/she spoke"
          },
          {
            "es": "Ojalá tú hablaras con ella.",
            "en": "I wish you would talk to her."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa la oración con el imperfecto de subjuntivo.",
            "sentence": "Ojalá (tú) ___ (hablar) con ella ayer.",
            "answer": "hablaras",
            "hint": "quitar -ron de 'hablaron' y añadir -ra",
            "explanation": "El pretérito de 'hablar' en tercera persona plural es 'hablaron'; se quita '-ron' y se añade '-ras' para la forma de 'tú'."
          }
        ]
      },
      {
        "heading": "Formación regular: verbos en -ER e -IR",
        "body": [
          "Recuerda: los verbos en -er e -ir comparten las mismas terminaciones -iera (comiera, comieras... / viviera, vivieras...)."
        ],
        "examples": [
          {
            "es": "comieron → comiera",
            "en": "they ate → (that) I/he/she ate"
          },
          {
            "es": "vivieron → viviera",
            "en": "they lived → (that) I/he/she lived"
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Cuál es la forma correcta de 'vivir' para 'nosotros' en imperfecto de subjuntivo?",
            "options": [
              "viviéramos",
              "vivimos",
              "viviríamos",
              "vivamos"
            ],
            "correctIndex": 0,
            "explanation": "La forma de 'nosotros' lleva tilde: 'viviéramos', a partir de 'vivieron' + '-amos'."
          }
        ]
      },
      {
        "heading": "Raíces irregulares del pretérito (I): tener, estar, poder, poner, saber",
        "body": [
          "Recuerda: el imperfecto de subjuntivo usa la misma raíz irregular que la tercera persona plural del pretérito."
        ],
        "examples": [
          {
            "es": "tuvieron → tuviera",
            "en": "(that) I/he/she had"
          },
          {
            "es": "supieron → supiera",
            "en": "(that) I/he/she knew"
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa la oración con el imperfecto de subjuntivo.",
            "sentence": "Dudaba que ella ___ (saber) la respuesta.",
            "answer": "supiera",
            "hint": "raíz irregular: sup-",
            "explanation": "El pretérito de 'saber' es 'supieron'; la raíz irregular 'sup-' se mantiene en el imperfecto de subjuntivo: 'supiera'."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con la forma correcta.",
        "sentence": "Quería que (tú) ___ (venir) a la fiesta.",
        "answer": "vinieras",
        "hint": "verbo principal en pasado",
        "explanation": "'Quería' está en pasado, así que la cláusula subordinada usa el imperfecto de subjuntivo 'vinieras'."
      },
      {
        "type": "multiple-choice",
        "question": "Dudaba que ellos ___ la verdad.",
        "options": [
          "tuvieran",
          "tienen",
          "tuvieron",
          "tendrían"
        ],
        "correctIndex": 0,
        "explanation": "Después de 'dudaba' (pasado) con un verbo de duda, se usa el imperfecto de subjuntivo: 'tuvieran'."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Traduce la oración al español.",
        "source": "I wished that you were here.",
        "answer": "Deseaba que estuvieras aquí.",
        "altAnswers": [
          "Deseaba que tú estuvieras aquí.",
          "Deseaba que estuvieses aquí."
        ],
        "explanation": "'Deseaba' (pasado) exige el imperfecto de subjuntivo 'estuvieras', de la raíz irregular 'estuv-'."
      },
      {
        "type": "translate",
        "direction": "es-en",
        "prompt": "Traduce la oración al inglés.",
        "source": "Era importante que llegáramos temprano.",
        "answer": "It was important that we arrive early.",
        "altAnswers": [
          "It was important for us to arrive early.",
          "It was important that we arrived early."
        ],
        "explanation": "'Era importante' en pasado exige el imperfecto de subjuntivo 'llegáramos' en la cláusula subordinada."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras para formar una oración correcta.",
        "words": [
          "Esperaba",
          "que",
          "ellos",
          "supieran",
          "la",
          "respuesta."
        ],
        "translation": "I hoped that they knew the answer.",
        "explanation": "El verbo principal 'esperaba' está en pasado, así que la cláusula subordinada usa el imperfecto de subjuntivo 'supieran'."
      },
      {
        "type": "matching",
        "instructions": "Empareja cada infinitivo con su forma correcta del imperfecto de subjuntivo (primera persona singular).",
        "pairs": [
          {
            "left": "tener",
            "right": "tuviera"
          },
          {
            "left": "ser / ir",
            "right": "fuera"
          },
          {
            "left": "hacer",
            "right": "hiciera"
          },
          {
            "left": "decir",
            "right": "dijera"
          },
          {
            "left": "poder",
            "right": "pudiera"
          },
          {
            "left": "saber",
            "right": "supiera"
          },
          {
            "left": "querer",
            "right": "quisiera"
          }
        ],
        "explanation": "Estas son las raíces irregulares más comunes del imperfecto de subjuntivo, tomadas de la tercera persona plural del pretérito."
      }
    ]
  },
  {
    "slug": "imperfect-subjunctive-sequence-tenses-drill-2",
    "level": "B2",
    "number": 32,
    "title": "El Imperfecto de Subjuntivo y la Correlación de Tiempos: Práctica Extra, Part 2 of 3",
    "summary": "Practica la formación del imperfecto de subjuntivo (-ra y -se), sus raíces irregulares más comunes y la correlación de tiempos entre la cláusula principal y la cláusula subordinada.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Raíces irregulares del pretérito (II): decir, traer, conducir, hacer",
        "body": [
          "Recuerda: los verbos con raíz terminada en -j- pierden la 'i' de la terminación (dijeron → dijera, no 'dijiera')."
        ],
        "examples": [
          {
            "es": "dijeron → dijera",
            "en": "(that) I/he/she said"
          },
          {
            "es": "hicieron → hiciera",
            "en": "(that) I/he/she did/made"
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa la oración con el imperfecto de subjuntivo.",
            "sentence": "No creía que él ___ (decir) mentiras.",
            "answer": "dijera",
            "hint": "de 'dijeron', sin la 'i' extra",
            "explanation": "Los verbos como 'decir' cuya raíz termina en -j- forman el imperfecto de subjuntivo sin la 'i': 'dijera', no 'dijiera'."
          }
        ]
      },
      {
        "heading": "Raíces irregulares del pretérito (III): ser/ir y querer",
        "body": [
          "Recuerda: 'ser' e 'ir' comparten la misma forma, 'fuera', y solo el contexto indica cuál es cuál."
        ],
        "examples": [
          {
            "es": "fueron → fuera",
            "en": "(that) I/he/she was / went"
          },
          {
            "es": "quisieron → quisiera",
            "en": "(that) I/he/she wanted"
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa la oración con el imperfecto de subjuntivo.",
            "sentence": "Queríamos que (nosotros) ___ (ser) felices.",
            "answer": "fuéramos",
            "hint": "de 'fueron' + '-amos', con tilde",
            "explanation": "'Ser' e 'ir' comparten la raíz 'fue-'; la forma de 'nosotros' es 'fuéramos', con tilde en la 'e'."
          },
          {
            "type": "translate",
            "direction": "es-en",
            "prompt": "Traduce la oración al inglés.",
            "source": "Esperaba que lo hicieras bien.",
            "answer": "I hoped that you would do it well.",
            "altAnswers": [
              "I was hoping you would do it well.",
              "I hoped you did it well."
            ],
            "explanation": "'Esperaba' (pasado) exige el imperfecto de subjuntivo 'hicieras' en la cláusula subordinada."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con la forma correcta.",
        "sentence": "Si yo ___ (poder), iría contigo.",
        "answer": "pudiera",
        "hint": "raíz irregular: pud-",
        "explanation": "En oraciones condicionales con 'si' + imposibilidad o improbabilidad, se usa el imperfecto de subjuntivo: 'pudiera'."
      },
      {
        "type": "multi-select",
        "question": "¿Cuáles de las siguientes formas son correctas para el imperfecto de subjuntivo del verbo 'ir' (primera persona singular)?",
        "options": [
          "fuera",
          "iera",
          "fuese",
          "iba",
          "fue"
        ],
        "correctIndexes": [
          0,
          2
        ],
        "explanation": "'Fuera' y 'fuese' son las dos formas válidas (-ra y -se) del imperfecto de subjuntivo de 'ir'/'ser'. 'Iba' es imperfecto de indicativo y 'fue' es pretérito."
      },
      {
        "type": "multiple-choice",
        "question": "Ana pide que nosotros ___ temprano.",
        "options": [
          "vengamos",
          "viniéramos",
          "venimos",
          "vendremos"
        ],
        "correctIndex": 0,
        "explanation": "'Pide' está en presente, así que la cláusula subordinada usa el presente de subjuntivo 'vengamos', no el imperfecto."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con la forma correcta.",
        "sentence": "Ana pidió que nosotros ___ (venir) temprano.",
        "answer": "viniéramos",
        "hint": "verbo principal en pretérito",
        "explanation": "'Pidió' está en pretérito (pasado), así que la cláusula subordinada usa el imperfecto de subjuntivo 'viniéramos'."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Traduce la oración al español.",
        "source": "He hoped that we could finish on time.",
        "answer": "Esperaba que pudiéramos terminar a tiempo.",
        "altAnswers": [
          "Él esperaba que pudiéramos terminar a tiempo."
        ],
        "explanation": "'Esperaba' en pasado exige el imperfecto de subjuntivo 'pudiéramos', de la raíz irregular 'pud-'."
      },
      {
        "type": "translate",
        "direction": "es-en",
        "prompt": "Traduce la oración al inglés.",
        "source": "No creía que ella dijera eso.",
        "answer": "I didn't believe that she would say that.",
        "altAnswers": [
          "I didn't believe she said that.",
          "I didn't think she would say that."
        ],
        "explanation": "'No creía' (pasado) exige el imperfecto de subjuntivo 'dijera', de la raíz irregular 'dij-'."
      }
    ]
  },
  {
    "slug": "imperfect-subjunctive-sequence-tenses-drill-3",
    "level": "B2",
    "number": 33,
    "title": "El Imperfecto de Subjuntivo y la Correlación de Tiempos: Práctica Extra, Part 3 of 3",
    "summary": "Practica la formación del imperfecto de subjuntivo (-ra y -se), sus raíces irregulares más comunes y la correlación de tiempos entre la cláusula principal y la cláusula subordinada.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Correlación de tiempos: presente → presente de subjuntivo",
        "body": [
          "Recuerda: si el verbo principal está en presente, la cláusula subordinada normalmente usa el presente de subjuntivo."
        ],
        "examples": [
          {
            "es": "Espero que vengas mañana.",
            "en": "I hope you come tomorrow."
          },
          {
            "es": "Es importante que lleguemos a tiempo.",
            "en": "It's important that we arrive on time."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "Espero que (tú) ___ mañana.",
            "options": [
              "vengas",
              "vinieras",
              "vienes",
              "vendrás"
            ],
            "correctIndex": 0,
            "explanation": "El verbo principal 'espero' está en presente, así que la cláusula subordinada usa el presente de subjuntivo: 'vengas'."
          }
        ]
      },
      {
        "heading": "Correlación de tiempos: pasado → imperfecto de subjuntivo",
        "body": [
          "Recuerda: si el verbo principal está en un tiempo pasado (o condicional), la cláusula subordinada usa el imperfecto de subjuntivo."
        ],
        "examples": [
          {
            "es": "Esperaba que vinieras mañana.",
            "en": "I hoped you would come tomorrow."
          },
          {
            "es": "Era importante que llegáramos a tiempo.",
            "en": "It was important that we arrive on time."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa la oración con el imperfecto de subjuntivo.",
            "sentence": "Esperaba que (tú) ___ (venir) ayer.",
            "answer": "vinieras",
            "hint": "verbo principal en pasado → imperfecto de subjuntivo",
            "explanation": "'Esperaba' está en pasado, por lo que la cláusula subordinada exige el imperfecto de subjuntivo: 'vinieras'."
          }
        ]
      },
      {
        "heading": "Contraste final: presente vs. pasado",
        "body": [
          "Recuerda: compara siempre el tiempo del verbo principal antes de elegir entre el presente y el imperfecto de subjuntivo."
        ],
        "examples": [
          {
            "es": "Quiero que vengas. / Quería que vinieras.",
            "en": "I want you to come. / I wanted you to come."
          },
          {
            "es": "Dudo que tenga razón. / Dudaba que tuviera razón.",
            "en": "I doubt he's right. / I doubted he was right."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "Elige la opción correcta: 'Era importante que...'",
            "options": [
              "...lleguemos a tiempo.",
              "...llegáramos a tiempo.",
              "...llegamos a tiempo.",
              "...llegaremos a tiempo."
            ],
            "correctIndex": 1,
            "explanation": "'Era' es un verbo principal en pasado (imperfecto de indicativo), así que la cláusula subordinada necesita el imperfecto de subjuntivo: 'llegáramos'."
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
          "profesor",
          "sugirió",
          "que",
          "los",
          "estudiantes",
          "estudiaran",
          "más."
        ],
        "translation": "The teacher suggested that the students study more.",
        "explanation": "'Sugirió' está en pretérito, por lo que la cláusula subordinada exige el imperfecto de subjuntivo 'estudiaran'."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con la forma correcta.",
        "sentence": "Nos alegramos de que tú ___ (poder) venir.",
        "answer": "pudieras",
        "hint": "verbo principal en pasado",
        "explanation": "'Nos alegramos' (pretérito) exige el imperfecto de subjuntivo 'pudieras' en la cláusula subordinada."
      },
      {
        "type": "multiple-choice",
        "question": "¿Cuál es la forma -se equivalente de 'habláramos'?",
        "options": [
          "hablásemos",
          "habláramos",
          "hablaríamos",
          "hablábamos"
        ],
        "correctIndex": 0,
        "explanation": "El imperfecto de subjuntivo tiene dos formas intercambiables: -ra (habláramos) y -se (hablásemos)."
      },
      {
        "type": "multi-select",
        "question": "¿Cuáles oraciones usan correctamente el imperfecto de subjuntivo después de una cláusula principal en pasado?",
        "options": [
          "Quería que vinieras a la fiesta.",
          "Quiero que vengas a la fiesta.",
          "Dudaba que él tuviera razón.",
          "Dudo que él tenga razón.",
          "Esperaba que pudiéramos terminar a tiempo."
        ],
        "correctIndexes": [
          0,
          2,
          4
        ],
        "explanation": "Las oraciones con verbo principal en pasado (quería, dudaba, esperaba) requieren el imperfecto de subjuntivo; las que están en presente (quiero, dudo) requieren el presente de subjuntivo."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con la forma correcta.",
        "sentence": "Era necesario que ellos ___ (hacer) la tarea.",
        "answer": "hicieran",
        "hint": "raíz irregular: hic-",
        "explanation": "'Era necesario' (pasado) exige el imperfecto de subjuntivo 'hicieran', de la raíz irregular 'hic-'."
      },
      {
        "type": "translate",
        "direction": "es-en",
        "prompt": "Traduce la oración al inglés.",
        "source": "Quería que fueras feliz.",
        "answer": "I wanted you to be happy.",
        "altAnswers": [
          "I wanted you to be happy with your life.",
          "I wanted you to be happy."
        ],
        "explanation": "'Quería' (pasado) exige el imperfecto de subjuntivo 'fueras', de la raíz compartida entre 'ser' e 'ir'."
      }
    ]
  },
  {
    "slug": "hypothetical-si-clauses-drill-1",
    "level": "B2",
    "number": 34,
    "title": "Oraciones Condicionales Hipotéticas con Si: Práctica Extra, Part 1 of 3",
    "summary": "Practica la formación y el uso de las oraciones condicionales del Tipo 2 (si + imperfecto de subjuntivo + condicional), con contraste frente al Tipo 1 y al Tipo 3, y expresiones como 'yo que tú' y 'yo en tu lugar'.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Formación básica: si + imperfecto de subjuntivo + condicional",
        "body": [
          "Recuerda que el Tipo 2 expresa una situación hipotética o contraria a la realidad presente: si + imperfecto de subjuntivo, + condicional simple."
        ],
        "examples": [
          {
            "es": "Si tuviera más tiempo, viajaría más.",
            "en": "If I had more time, I would travel more."
          },
          {
            "es": "Si fuera rico, compraría una casa.",
            "en": "If I were rich, I would buy a house."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa la oración con la forma correcta del imperfecto de subjuntivo.",
            "sentence": "Si yo ___ (tener) tiempo, aprendería a tocar el piano.",
            "answer": "tuviera",
            "hint": "imperfecto de subjuntivo de 'tener', primera persona",
            "explanation": "En la cláusula con 'si' del Tipo 2 se usa el imperfecto de subjuntivo: 'tener' → 'tuviera'."
          }
        ]
      },
      {
        "heading": "Verbos irregulares en el imperfecto de subjuntivo",
        "body": [
          "El imperfecto de subjuntivo se forma con la raíz de la tercera persona plural del pretérito más -ra (o -se)."
        ],
        "examples": [
          {
            "es": "Si yo pudiera, te ayudaría.",
            "en": "If I could, I would help you."
          },
          {
            "es": "Si supieras la verdad, no dirías eso.",
            "en": "If you knew the truth, you wouldn't say that."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Cuál es la forma correcta del imperfecto de subjuntivo de 'decir' para 'si tú...'?",
            "options": [
              "dijeras",
              "decías",
              "dirías",
              "dijiste"
            ],
            "correctIndex": 0,
            "explanation": "'Decir' tiene pretérito irregular 'dijeron', por lo que el imperfecto de subjuntivo es 'dijera/dijeras', no 'decías' (imperfecto de indicativo) ni 'dirías' (condicional)."
          }
        ]
      },
      {
        "heading": "Verbos irregulares en el condicional",
        "body": [
          "El condicional irregular usa la misma raíz irregular que el futuro, con las terminaciones -ía, -ías, -ía, -íamos, -íais, -ían."
        ],
        "examples": [
          {
            "es": "Si tuviera el dinero, me lo compraría.",
            "en": "If I had the money, I would buy it."
          },
          {
            "es": "Si supiera cocinar, haría la cena esta noche.",
            "en": "If I knew how to cook, I would make dinner tonight."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa la oración con la forma correcta del condicional.",
            "sentence": "Si pudiéramos, ___ (salir) de viaje mañana mismo.",
            "answer": "saldríamos",
            "hint": "condicional irregular de 'salir'",
            "explanation": "'Salir' forma el condicional sobre la raíz irregular 'saldr-': saldría, saldrías, saldría, saldríamos, saldríais, saldrían."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con la forma correcta del verbo entre paréntesis.",
        "sentence": "Si yo ___ (ser) tú, no lo haría.",
        "answer": "fuera",
        "hint": "imperfecto de subjuntivo de 'ser'",
        "explanation": "'Ser' es irregular en el imperfecto de subjuntivo: fuera, fueras, fuera, fuéramos, fuerais, fueran."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con la forma correcta del condicional.",
        "sentence": "Si tuviéramos un jardín más grande, ___ (plantar) tomates.",
        "answer": "plantaríamos",
        "hint": "condicional regular, primera persona del plural",
        "explanation": "'Plantar' es regular en el condicional: se añade -íamos al infinitivo para la primera persona del plural."
      },
      {
        "type": "multiple-choice",
        "question": "Si ganara la lotería, ___ (poner) el dinero en el banco.",
        "options": [
          "pondría",
          "ponía",
          "pusiera",
          "pone"
        ],
        "correctIndex": 0,
        "explanation": "La cláusula de resultado del Tipo 2 requiere el condicional: 'poner' → 'pondría' (raíz irregular 'pondr-')."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Traduce la oración al español.",
        "source": "If I knew the answer, I would tell you.",
        "answer": "Si supiera la respuesta, te la diría.",
        "altAnswers": [
          "Si yo supiera la respuesta, te la diría."
        ],
        "explanation": "'Knew' (hipotético) se traduce con imperfecto de subjuntivo ('supiera') y 'would tell' con condicional ('diría')."
      },
      {
        "type": "translate",
        "direction": "es-en",
        "prompt": "Traduce la oración al inglés.",
        "source": "Si fuéramos más organizados, terminaríamos el proyecto a tiempo.",
        "answer": "If we were more organized, we would finish the project on time.",
        "altAnswers": [
          "We would finish the project on time if we were more organized."
        ],
        "explanation": "El imperfecto de subjuntivo 'fuéramos' equivale al 'were' hipotético en inglés, y el condicional 'terminaríamos' equivale a 'would finish'."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras para formar una oración condicional correcta.",
        "words": [
          "Si",
          "fueras",
          "más",
          "paciente",
          "tendrías",
          "menos",
          "problemas"
        ],
        "translation": "If you were more patient, you would have fewer problems.",
        "explanation": "Estructura Tipo 2: si + imperfecto de subjuntivo ('fueras'), + condicional ('tendrías')."
      },
      {
        "type": "multiple-choice",
        "question": "¿Qué tipo de condicional es esta oración: 'Si hubiéramos salido antes, no habríamos perdido el tren'?",
        "options": [
          "Tipo 1 (real/posible)",
          "Tipo 2 (hipotético presente)",
          "Tipo 3 (hipotético pasado)"
        ],
        "correctIndex": 2,
        "explanation": "Usa pluscuamperfecto de subjuntivo ('hubiéramos salido') + condicional perfecto ('habríamos perdido'), la estructura del Tipo 3, que se refiere a un hecho pasado que ya no se puede cambiar."
      }
    ]
  },
  {
    "slug": "hypothetical-si-clauses-drill-2",
    "level": "B2",
    "number": 35,
    "title": "Oraciones Condicionales Hipotéticas con Si: Práctica Extra, Part 2 of 3",
    "summary": "Practica la formación y el uso de las oraciones condicionales del Tipo 2 (si + imperfecto de subjuntivo + condicional), con contraste frente al Tipo 1 y al Tipo 3, y expresiones como 'yo que tú' y 'yo en tu lugar'.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "Contraste: Tipo 1 (real) vs. Tipo 2 (hipotético)",
        "body": [
          "El Tipo 1 (si + presente, futuro/presente) expresa condiciones reales o posibles; el Tipo 2 expresa condiciones hipotéticas o poco probables en el presente."
        ],
        "examples": [
          {
            "es": "Si llueve, no saldremos. (Tipo 1 – real)",
            "en": "If it rains, we won't go out."
          },
          {
            "es": "Si lloviera, no saldríamos. (Tipo 2 – hipotético)",
            "en": "If it rained, we wouldn't go out."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Qué oración expresa una condición hipotética y poco probable, en lugar de una condición real?",
            "options": [
              "Si tengo dinero, te lo presto.",
              "Si tuviera dinero, te lo prestaría."
            ],
            "correctIndex": 1,
            "explanation": "'Si tuviera dinero, te lo prestaría' usa imperfecto de subjuntivo + condicional, lo que marca una situación hipotética (implica que no tengo el dinero); la otra oración usa el Tipo 1, condición real o posible."
          }
        ]
      },
      {
        "heading": "Contraste: Tipo 2 (presente) vs. Tipo 3 (pasado)",
        "body": [
          "El Tipo 3 (si + pluscuamperfecto de subjuntivo, + condicional perfecto) se refiere a situaciones hipotéticas del pasado que ya no se pueden cambiar."
        ],
        "examples": [
          {
            "es": "Si estudiara más, aprobaría el examen. (Tipo 2)",
            "en": "If I studied more, I would pass the exam."
          },
          {
            "es": "Si hubiera estudiado más, habría aprobado el examen. (Tipo 3)",
            "en": "If I had studied more, I would have passed the exam."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa la oración con la forma correcta del condicional perfecto.",
            "sentence": "Si hubiera sabido que venías, ___ (preparar) algo de comer.",
            "answer": "habría preparado",
            "hint": "condicional perfecto: habría + participio",
            "explanation": "En el Tipo 3, la cláusula de resultado usa el condicional perfecto (habría + participio) porque se refiere a una situación pasada ya cerrada."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con la forma correcta del condicional perfecto.",
        "sentence": "Si hubiera tenido más cuidado, no ___ (romper) el jarrón.",
        "answer": "habría roto",
        "hint": "condicional perfecto: habría + participio irregular de 'romper'",
        "explanation": "El participio de 'romper' es irregular ('roto'), así que el condicional perfecto es 'habría roto'."
      },
      {
        "type": "matching",
        "instructions": "Empareja cada oración con el tipo de condicional que representa.",
        "pairs": [
          {
            "left": "Si llueve, llevaré paraguas.",
            "right": "Tipo 1 (real/posible)"
          },
          {
            "left": "Si lloviera, llevaría paraguas.",
            "right": "Tipo 2 (hipotético presente)"
          },
          {
            "left": "Si hubiera llovido, habría llevado paraguas.",
            "right": "Tipo 3 (hipotético pasado)"
          },
          {
            "left": "Yo que tú, llevaría paraguas.",
            "right": "Consejo equivalente a 'si yo fuera tú'"
          }
        ],
        "explanation": "Cada estructura verbal marca un tipo distinto de condición: presente real, presente hipotético, pasado hipotético, o un consejo con 'yo que tú' + condicional."
      },
      {
        "type": "multi-select",
        "question": "Selecciona todas las oraciones gramaticalmente correctas para el Tipo 2.",
        "options": [
          "Si tengo dinero, viajaría por el mundo.",
          "Si tuviera dinero, viajaría por el mundo.",
          "Si tuviera dinero, viajo por el mundo.",
          "Si fuera rico, viajaría por el mundo."
        ],
        "correctIndexes": [
          1,
          3
        ],
        "explanation": "Las opciones correctas combinan imperfecto de subjuntivo con condicional. Las otras dos mezclan incorrectamente presente de indicativo o presente con el condicional."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con la forma correcta del imperfecto de subjuntivo.",
        "sentence": "Si mis padres ___ (vivir) más cerca, los visitaría cada semana.",
        "answer": "vivieran",
        "hint": "imperfecto de subjuntivo, tercera persona del plural",
        "explanation": "'Vivir' es regular en el imperfecto de subjuntivo: viviera, vivieras, viviera, viviéramos, vivierais, vivieran."
      },
      {
        "type": "multiple-choice",
        "question": "¿Cuál es el equivalente de 'Yo que tú, se lo diría'?",
        "options": [
          "Si yo fuera tú, se lo diría.",
          "Si yo soy tú, se lo digo.",
          "Si yo fui tú, se lo habría dicho.",
          "Si yo sería tú, se lo diría."
        ],
        "correctIndex": 0,
        "explanation": "'Yo que tú' es una forma abreviada de 'si yo fuera tú', seguida del condicional; nunca se usa 'sería' en la cláusula con 'si'."
      }
    ]
  },
  {
    "slug": "hypothetical-si-clauses-drill-3",
    "level": "B2",
    "number": 36,
    "title": "Oraciones Condicionales Hipotéticas con Si: Práctica Extra, Part 3 of 3",
    "summary": "Practica la formación y el uso de las oraciones condicionales del Tipo 2 (si + imperfecto de subjuntivo + condicional), con contraste frente al Tipo 1 y al Tipo 3, y expresiones como 'yo que tú' y 'yo en tu lugar'.",
    "duration": "9 min",
    "sections": [
      {
        "heading": "Consejos con 'yo que tú' y 'yo en tu lugar'",
        "body": [
          "Las expresiones 'yo que tú' y 'yo en tu lugar' sustituyen a 'si yo fuera tú' y siempre van seguidas del condicional para dar consejos."
        ],
        "examples": [
          {
            "es": "Yo que tú, hablaría con ella.",
            "en": "If I were you, I would talk to her."
          },
          {
            "es": "Yo en tu lugar, no aceptaría esa oferta.",
            "en": "In your place, I wouldn't accept that offer."
          }
        ],
        "checkpoint": [
          {
            "type": "translate",
            "direction": "es-en",
            "prompt": "Traduce la oración al inglés.",
            "source": "Yo en tu lugar, buscaría otro trabajo.",
            "answer": "If I were you, I would look for another job.",
            "altAnswers": [
              "In your place, I would look for another job.",
              "If I were in your shoes, I would look for another job."
            ],
            "explanation": "'Yo en tu lugar' funciona como equivalente de 'si yo fuera tú' y se traduce como 'if I were you' seguido del condicional en inglés."
          }
        ]
      },
      {
        "heading": "Orden de las cláusulas",
        "body": [
          "La cláusula con 'si' y la cláusula del condicional pueden intercambiar su orden sin cambiar el significado de la oración."
        ],
        "examples": [
          {
            "es": "Viajaría más si tuviera más tiempo.",
            "en": "I would travel more if I had more time."
          },
          {
            "es": "No compraría esa casa si fuera tan cara.",
            "en": "I wouldn't buy that house if it were so expensive."
          }
        ],
        "checkpoint": [
          {
            "type": "word-order",
            "prompt": "Ordena las palabras para formar una oración condicional correcta.",
            "words": [
              "Viajaría",
              "más",
              "si",
              "tuviera",
              "más",
              "tiempo"
            ],
            "translation": "I would travel more if I had more time.",
            "explanation": "Cuando el condicional va primero, no se usa coma antes de 'si': 'Viajaría más si tuviera más tiempo.'"
          }
        ]
      },
      {
        "heading": "Repaso mixto de los tres tipos",
        "body": [
          "Practica identificando y produciendo los tres tipos de oraciones condicionales en diferentes contextos y con distintos sujetos."
        ],
        "examples": [
          {
            "es": "Si tuviéramos coche, no tomaríamos el autobús.",
            "en": "If we had a car, we wouldn't take the bus."
          },
          {
            "es": "Si fueran más responsables, les daría más libertad.",
            "en": "If they were more responsible, I would give them more freedom."
          }
        ],
        "checkpoint": [
          {
            "type": "multi-select",
            "question": "Selecciona todas las oraciones que son ejemplos correctos del Tipo 2 (hipotético en presente).",
            "options": [
              "Si tuviera más vacaciones, descansaría más.",
              "Si tengo más vacaciones, descansaré más.",
              "Si fuéramos ricos, ayudaríamos a más gente.",
              "Si hubiéramos sido ricos, habríamos ayudado a más gente."
            ],
            "correctIndexes": [
              0,
              2
            ],
            "explanation": "Las opciones 1 y 3 usan imperfecto de subjuntivo + condicional (Tipo 2, hipotético presente). La segunda es Tipo 1 (presente + futuro) y la cuarta es Tipo 3 (pluscuamperfecto de subjuntivo + condicional perfecto)."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Traduce la oración al español.",
        "source": "If I were you, I would apologize.",
        "answer": "Yo que tú, me disculparía.",
        "altAnswers": [
          "Yo en tu lugar, me disculparía.",
          "Si yo fuera tú, me disculparía."
        ],
        "explanation": "'If I were you' se puede traducir como 'yo que tú', 'yo en tu lugar' o 'si yo fuera tú', todas seguidas del condicional."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con la forma correcta del imperfecto de subjuntivo.",
        "sentence": "Si nosotros ___ (poder) elegir, viviríamos en la playa.",
        "answer": "pudiéramos",
        "hint": "imperfecto de subjuntivo irregular de 'poder'",
        "explanation": "'Poder' tiene pretérito irregular 'pudieron', de donde sale el imperfecto de subjuntivo 'pudiera/pudiéramos'."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras para formar una oración condicional correcta.",
        "words": [
          "No",
          "comprarían",
          "esa",
          "casa",
          "si",
          "fuera",
          "tan",
          "cara"
        ],
        "translation": "They wouldn't buy that house if it were so expensive.",
        "explanation": "El condicional ('no comprarían') puede ir antes de la cláusula con 'si' ('si fuera tan cara'), sin coma entre ellas."
      },
      {
        "type": "multiple-choice",
        "question": "Si estudiaran más, ___ (tener) mejores notas.",
        "options": [
          "tendrían",
          "tenían",
          "tuvieran",
          "tienen"
        ],
        "correctIndex": 0,
        "explanation": "La cláusula de resultado requiere el condicional: 'tener' → 'tendrían' (raíz irregular 'tendr-')."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con la forma correcta del condicional perfecto.",
        "sentence": "Si hubieras llamado antes, te ___ (esperar).",
        "answer": "habría esperado",
        "hint": "condicional perfecto: habría + participio",
        "explanation": "Como la cláusula con 'si' usa el pluscuamperfecto de subjuntivo ('hubieras llamado'), la oración es Tipo 3 y el resultado va en condicional perfecto: 'habría esperado'."
      },
      {
        "type": "multi-select",
        "question": "Selecciona todas las oraciones que combinan correctamente 'si + imperfecto de subjuntivo + condicional'.",
        "options": [
          "Si supiéramos la verdad, actuaríamos diferente.",
          "Si sabríamos la verdad, actuaríamos diferente.",
          "Si tuvieras más paciencia, entenderías mejor.",
          "Si tienes más paciencia, entenderías mejor."
        ],
        "correctIndexes": [
          0,
          2
        ],
        "explanation": "Las opciones correctas usan imperfecto de subjuntivo en la cláusula con 'si'. Las otras dos son incorrectas: nunca se usa el condicional ('sabríamos') ni el presente ('tienes') junto con un condicional en la cláusula de resultado del Tipo 2."
      }
    ]
  },
  {
    "slug": "conditional-perfect-pluperfect-subjunctive-drill-1",
    "level": "B2",
    "number": 37,
    "title": "El Condicional Perfecto y el Pluscuamperfecto de Subjuntivo: Práctica Extra, Part 1 of 3",
    "summary": "Practica intensivamente la formación y el uso de las oraciones condicionales de tipo 3 (hipótesis y arrepentimientos del pasado), combinando el pluscuamperfecto de subjuntivo con el condicional perfecto.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "Formación del pluscuamperfecto de subjuntivo",
        "body": [
          "Recuerda: hubiera/hubiese + participio pasado (hablado, comido, vivido)."
        ],
        "examples": [
          {
            "es": "Si yo hubiera sabido la verdad...",
            "en": "If I had known the truth..."
          },
          {
            "es": "Si tú hubieses llegado antes...",
            "en": "If you had arrived earlier..."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa la oración con el pluscuamperfecto de subjuntivo.",
            "sentence": "Si ella ___ (llegar) antes, habría visto todo.",
            "answer": "hubiera llegado",
            "hint": "hubiera/hubiese + participio pasado",
            "explanation": "El pluscuamperfecto de subjuntivo se forma con hubiera/hubiese + participio: hubiera llegado."
          },
          {
            "type": "multiple-choice",
            "question": "¿Cuál es la forma correcta del pluscuamperfecto de subjuntivo de 'comer' para 'ellos'?",
            "options": [
              "hubieran comido",
              "habían comido",
              "comieran",
              "comerían"
            ],
            "correctIndex": 0,
            "explanation": "Se usa hubieran (subjuntivo de haber) + comido, no habían (indicativo) ni comieran (imperfecto de subjuntivo simple)."
          }
        ]
      },
      {
        "heading": "Formación del condicional perfecto",
        "body": [
          "Recuerda: habría + participio pasado expresa lo que habría ocurrido en el pasado."
        ],
        "examples": [
          {
            "es": "Habría llamado, pero perdí tu número.",
            "en": "I would have called, but I lost your number."
          },
          {
            "es": "Ellos habrían venido si hubieran podido.",
            "en": "They would have come if they had been able to."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Cuál de estas frases usa correctamente el condicional perfecto?",
            "options": [
              "Yo habría ido a la fiesta.",
              "Yo hubiera ido a la fiesta.",
              "Yo iría a la fiesta.",
              "Yo he ido a la fiesta."
            ],
            "correctIndex": 0,
            "explanation": "El condicional perfecto se forma con habría + participio; 'hubiera ido' es pluscuamperfecto de subjuntivo, no condicional perfecto."
          },
          {
            "type": "fill-blank",
            "prompt": "Completa la oración con el condicional perfecto.",
            "sentence": "Yo ___ (ir) a la fiesta, pero tuve que trabajar.",
            "answer": "habría ido",
            "explanation": "El condicional perfecto (habría + participio) expresa lo que habría pasado bajo otra circunstancia."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "Si yo ___ (saber) la verdad, te lo habría dicho.",
        "options": [
          "hubiera sabido",
          "habría sabido",
          "supiera",
          "sabría"
        ],
        "correctIndex": 0,
        "explanation": "La cláusula con 'si' de un condicional tipo 3 requiere el pluscuamperfecto de subjuntivo: hubiera sabido."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con la forma correcta.",
        "sentence": "Si nosotros ___ (estudiar) más, habríamos aprobado el examen.",
        "answer": "hubiéramos estudiado",
        "hint": "pluscuamperfecto de subjuntivo, primera persona plural",
        "explanation": "Se necesita hubiéramos + participio (estudiado) para formar el pluscuamperfecto de subjuntivo de 'nosotros'."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Traduce la oración al español.",
        "source": "If you had told me, I would have helped you.",
        "answer": "Si me lo hubieras dicho, te habría ayudado.",
        "altAnswers": [
          "Si me lo hubieses dicho, te habría ayudado."
        ],
        "explanation": "La condición usa hubieras dicho (pluscuamperfecto de subjuntivo) y el resultado usa habría ayudado (condicional perfecto)."
      },
      {
        "type": "translate",
        "direction": "es-en",
        "prompt": "Traduce la oración al inglés.",
        "source": "Si hubiéramos llegado a tiempo, habríamos visto el comienzo de la película.",
        "answer": "If we had arrived on time, we would have seen the beginning of the movie.",
        "explanation": "Hubiéramos llegado equivale a 'had arrived' y habríamos visto equivale a 'would have seen'."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras para formar una oración condicional de tipo 3.",
        "words": [
          "Si",
          "hubiera",
          "tenido",
          "tiempo,",
          "habría",
          "terminado",
          "el",
          "proyecto."
        ],
        "translation": "If I had had time, I would have finished the project.",
        "explanation": "El orden correcto es: Si + pluscuamperfecto de subjuntivo, + condicional perfecto."
      },
      {
        "type": "multiple-choice",
        "question": "Habríamos llegado antes si no ___ tanto tráfico.",
        "options": [
          "hubiera habido",
          "había habido",
          "habría habido",
          "hay"
        ],
        "correctIndex": 0,
        "explanation": "Con el verbo impersonal 'haber' (hay), el pluscuamperfecto de subjuntivo es 'hubiera habido', no 'habría habido' ni el indicativo 'había habido'."
      }
    ]
  },
  {
    "slug": "conditional-perfect-pluperfect-subjunctive-drill-2",
    "level": "B2",
    "number": 38,
    "title": "El Condicional Perfecto y el Pluscuamperfecto de Subjuntivo: Práctica Extra, Part 2 of 3",
    "summary": "Practica intensivamente la formación y el uso de las oraciones condicionales de tipo 3 (hipótesis y arrepentimientos del pasado), combinando el pluscuamperfecto de subjuntivo con el condicional perfecto.",
    "duration": "9 min",
    "sections": [
      {
        "heading": "La estructura completa del tipo 3",
        "body": [
          "La estructura es: Si + pluscuamperfecto de subjuntivo, + condicional perfecto."
        ],
        "examples": [
          {
            "es": "Si hubiera estudiado más, habría aprobado el examen.",
            "en": "If I had studied more, I would have passed the exam."
          },
          {
            "es": "Si hubieras llegado a tiempo, no te habrías perdido el inicio.",
            "en": "If you had arrived on time, you wouldn't have missed the beginning."
          }
        ],
        "checkpoint": [
          {
            "type": "word-order",
            "prompt": "Ordena las palabras para formar una oración condicional de tipo 3.",
            "words": [
              "Si",
              "hubiera",
              "estudiado",
              "más,",
              "habría",
              "aprobado",
              "el",
              "examen."
            ],
            "translation": "If I had studied more, I would have passed the exam.",
            "explanation": "La cláusula con 'si' lleva el pluscuamperfecto de subjuntivo y la cláusula principal lleva el condicional perfecto."
          },
          {
            "type": "translate",
            "direction": "es-en",
            "prompt": "Traduce la oración al inglés.",
            "source": "Si hubieras llegado a tiempo, no te habrías perdido el inicio.",
            "answer": "If you had arrived on time, you wouldn't have missed the beginning.",
            "explanation": "El pluscuamperfecto de subjuntivo (hubieras llegado) corresponde a 'had arrived' y el condicional perfecto (no te habrías perdido) a 'wouldn't have missed'."
          }
        ]
      },
      {
        "heading": "Contraste con el tipo 2 (hipótesis presente vs. pasada)",
        "body": [
          "El tipo 2 (si + imperfecto de subjuntivo, condicional simple) habla de hipótesis presentes o futuras, no del pasado."
        ],
        "examples": [
          {
            "es": "Si tuviera dinero, viajaría (tipo 2, presente).",
            "en": "If I had money, I would travel (type 2, present)."
          },
          {
            "es": "Si hubiera tenido dinero, habría viajado (tipo 3, pasado).",
            "en": "If I had had money, I would have traveled (type 3, past)."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Qué tipo de condicional es esta oración: 'Si tuviera más dinero, compraría una casa'?",
            "options": [
              "Tipo 1 (real)",
              "Tipo 2 (hipótesis presente)",
              "Tipo 3 (hipótesis pasada)",
              "No es condicional"
            ],
            "correctIndex": 1,
            "explanation": "Usa imperfecto de subjuntivo (tuviera) + condicional simple (compraría), lo que corresponde al tipo 2, una hipótesis sobre el presente."
          },
          {
            "type": "multi-select",
            "question": "Selecciona las oraciones que son de tipo 3 (hipótesis sobre el pasado).",
            "options": [
              "Si hubiera llovido, habríamos cancelado el picnic.",
              "Si llueve, cancelaremos el picnic.",
              "Si hubieras estudiado, habrías aprobado.",
              "Si estudiaras más, aprobarías."
            ],
            "correctIndexes": [
              0,
              2
            ],
            "explanation": "Solo las oraciones con pluscuamperfecto de subjuntivo + condicional perfecto son de tipo 3; las otras son tipo 1 y tipo 2."
          }
        ]
      },
      {
        "heading": "Orden invertido de las cláusulas",
        "body": [
          "La cláusula con 'si' puede ir después de la cláusula principal sin cambiar el significado."
        ],
        "examples": [
          {
            "es": "Habríamos ganado el partido si hubiéramos entrenado más.",
            "en": "We would have won the match if we had trained more."
          }
        ],
        "checkpoint": [
          {
            "type": "word-order",
            "prompt": "Ordena las palabras para formar la oración con el orden invertido.",
            "words": [
              "Habríamos",
              "ganado",
              "el",
              "partido",
              "si",
              "hubiéramos",
              "entrenado",
              "más."
            ],
            "translation": "We would have won the match if we had trained more.",
            "explanation": "Cuando la cláusula principal va primero, no se usa coma antes de 'si' y el significado no cambia."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multi-select",
        "question": "Selecciona las oraciones que están correctamente formadas como condicional de tipo 3.",
        "options": [
          "Si hubiera llovido, habríamos cancelado el picnic.",
          "Si llueve, cancelaremos el picnic.",
          "Si hubieras estudiado, habrías aprobado.",
          "Si estudiaras más, aprobarías."
        ],
        "correctIndexes": [
          0,
          2
        ],
        "explanation": "Solo las oraciones con pluscuamperfecto de subjuntivo + condicional perfecto corresponden al tipo 3; las otras son tipo 1 y tipo 2."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con la forma correcta.",
        "sentence": "Ojalá ___ (poder) verte ayer.",
        "answer": "hubiera podido",
        "hint": "ojalá + pluscuamperfecto de subjuntivo",
        "explanation": "'Ojalá' con pluscuamperfecto de subjuntivo expresa un deseo no cumplido: ojalá hubiera podido."
      },
      {
        "type": "matching",
        "instructions": "Une cada cláusula con 'si' con su conclusión lógica.",
        "pairs": [
          {
            "left": "Si hubiera llamado antes,",
            "right": "habría reservado la mesa."
          },
          {
            "left": "Si hubieras leído las instrucciones,",
            "right": "no habrías cometido ese error."
          },
          {
            "left": "Si ellas hubieran salido temprano,",
            "right": "habrían llegado a la reunión."
          },
          {
            "left": "Si él hubiera ahorrado dinero,",
            "right": "se habría comprado el coche."
          },
          {
            "left": "Si tú hubieras practicado más,",
            "right": "habrías ganado la competencia."
          }
        ],
        "explanation": "Cada pluscuamperfecto de subjuntivo en la cláusula con 'si' se combina con un condicional perfecto lógico en la conclusión."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Traduce la oración al español.",
        "source": "I wish I had studied more for the exam.",
        "answer": "Ojalá hubiera estudiado más para el examen.",
        "altAnswers": [
          "Ojalá hubiese estudiado más para el examen."
        ],
        "explanation": "'Ojalá' + pluscuamperfecto de subjuntivo expresa arrepentimiento por algo que no se hizo en el pasado."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras para formar una oración con el orden invertido.",
        "words": [
          "Habría",
          "venido",
          "a",
          "la",
          "fiesta",
          "si",
          "me",
          "hubieras",
          "invitado."
        ],
        "translation": "I would have come to the party if you had invited me.",
        "explanation": "La cláusula principal (condicional perfecto) también puede ir antes de la cláusula con 'si' (pluscuamperfecto de subjuntivo)."
      }
    ]
  },
  {
    "slug": "conditional-perfect-pluperfect-subjunctive-drill-3",
    "level": "B2",
    "number": 39,
    "title": "El Condicional Perfecto y el Pluscuamperfecto de Subjuntivo: Práctica Extra, Part 3 of 3",
    "summary": "Practica intensivamente la formación y el uso de las oraciones condicionales de tipo 3 (hipótesis y arrepentimientos del pasado), combinando el pluscuamperfecto de subjuntivo con el condicional perfecto.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Expresar arrepentimiento con 'ojalá'",
        "body": [
          "'Ojalá' + pluscuamperfecto de subjuntivo expresa arrepentimiento por algo que no ocurrió."
        ],
        "examples": [
          {
            "es": "¡Ojalá hubiera sabido la verdad antes!",
            "en": "I wish I had known the truth sooner!"
          },
          {
            "es": "Ojalá no hubieras dicho eso.",
            "en": "I wish you hadn't said that."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa la oración con el pluscuamperfecto de subjuntivo.",
            "sentence": "Ojalá ___ (poder) verte ayer.",
            "answer": "hubiera podido",
            "hint": "ojalá + pluscuamperfecto de subjuntivo",
            "explanation": "'Ojalá' seguido del pluscuamperfecto de subjuntivo expresa un deseo no cumplido en el pasado."
          },
          {
            "type": "translate",
            "direction": "en-es",
            "prompt": "Traduce la oración al español.",
            "source": "I wish you hadn't said that.",
            "answer": "Ojalá no hubieras dicho eso.",
            "altAnswers": [
              "Ojalá no hubieses dicho eso."
            ],
            "explanation": "'Ojalá' + pluscuamperfecto de subjuntivo (hubieras dicho) traduce el arrepentimiento de 'I wish... had(n't)...'."
          }
        ]
      },
      {
        "heading": "Repaso de participios irregulares",
        "body": [
          "No olvides los participios irregulares: hecho, dicho, visto, puesto, escrito, vuelto, roto, muerto, abierto, cubierto."
        ],
        "examples": [
          {
            "es": "Si hubiéramos visto la señal, no habríamos roto la regla.",
            "en": "If we had seen the sign, we wouldn't have broken the rule."
          }
        ],
        "checkpoint": [
          {
            "type": "multi-select",
            "question": "Selecciona los participios irregulares.",
            "options": [
              "hecho",
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
            "explanation": "hecho (hacer), dicho (decir) y visto (ver) son participios irregulares; comido, hablado y vivido son regulares."
          },
          {
            "type": "fill-blank",
            "prompt": "Completa la oración con el participio irregular correcto.",
            "sentence": "Si hubiéramos ___ (cubrir) el agujero, nadie se habría caído.",
            "answer": "cubierto",
            "hint": "cubrir tiene un participio irregular",
            "explanation": "El participio irregular de 'cubrir' es 'cubierto', usado tras 'hubiéramos' para formar el pluscuamperfecto de subjuntivo."
          }
        ]
      },
      {
        "heading": "Práctica combinada con distintos sujetos",
        "body": [
          "Practica cambiando el sujeto y el verbo para dominar ambas formas compuestas."
        ],
        "examples": [
          {
            "es": "Si ellos hubieran salido antes, no habrían perdido el vuelo.",
            "en": "If they had left earlier, they wouldn't have missed the flight."
          }
        ],
        "checkpoint": [
          {
            "type": "matching",
            "instructions": "Une cada cláusula con 'si' con su conclusión lógica en condicional perfecto.",
            "pairs": [
              {
                "left": "Si hubiera tenido tiempo,",
                "right": "habría terminado el proyecto."
              },
              {
                "left": "Si hubieras llamado,",
                "right": "te habría explicado todo."
              },
              {
                "left": "Si ellos hubieran estudiado,",
                "right": "habrían aprobado el examen."
              },
              {
                "left": "Si nosotros hubiéramos sabido la verdad,",
                "right": "no habríamos actuado así."
              },
              {
                "left": "Si yo hubiera visto la señal,",
                "right": "no habría chocado."
              }
            ],
            "explanation": "Cada cláusula con pluscuamperfecto de subjuntivo se combina con una consecuencia lógica en condicional perfecto."
          },
          {
            "type": "translate",
            "direction": "en-es",
            "prompt": "Traduce la oración al español.",
            "source": "If they had left earlier, they wouldn't have missed the flight.",
            "answer": "Si hubieran salido antes, no habrían perdido el vuelo.",
            "altAnswers": [
              "Si hubiesen salido antes, no habrían perdido el vuelo."
            ],
            "explanation": "La cláusula 'si' usa hubieran salido (pluscuamperfecto de subjuntivo) y la principal usa habrían perdido (condicional perfecto)."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con la forma correcta.",
        "sentence": "Si tú ___ (ver) la película, habrías entendido la referencia.",
        "answer": "hubieras visto",
        "hint": "el participio de 'ver' es irregular",
        "explanation": "El pluscuamperfecto de subjuntivo de 'ver' es hubieras visto, con el participio irregular 'visto'."
      },
      {
        "type": "multiple-choice",
        "question": "Si tuviera más tiempo, ___ (viajar) por Europa.",
        "options": [
          "viajaría",
          "habría viajado",
          "hubiera viajado",
          "viajara"
        ],
        "correctIndex": 0,
        "explanation": "Con 'si tuviera' (imperfecto de subjuntivo, tipo 2) la conclusión lleva el condicional simple, no el perfecto: viajaría."
      },
      {
        "type": "translate",
        "direction": "es-en",
        "prompt": "Traduce la oración al inglés.",
        "source": "Si hubieran salido más temprano, no habrían perdido el tren.",
        "answer": "If they had left earlier, they wouldn't have missed the train.",
        "explanation": "Hubieran salido corresponde a 'had left' y no habrían perdido corresponde a 'wouldn't have missed'."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con la forma correcta.",
        "sentence": "Si yo ___ (escribir) la carta, la habría enviado.",
        "answer": "hubiera escrito",
        "hint": "el participio de 'escribir' es irregular",
        "explanation": "El pluscuamperfecto de subjuntivo de 'escribir' es hubiera escrito, usando el participio irregular 'escrito'."
      },
      {
        "type": "multi-select",
        "question": "Selecciona los participios irregulares.",
        "options": [
          "hecho",
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
        "explanation": "hecho, dicho y visto son participios irregulares (de hacer, decir y ver); comido, hablado y vivido son regulares."
      },
      {
        "type": "multiple-choice",
        "question": "___ hubiera sabido que venías, habría preparado la cena.",
        "options": [
          "Si",
          "Ojalá",
          "Cuando",
          "Aunque"
        ],
        "correctIndex": 0,
        "explanation": "Solo 'si' introduce la cláusula condicional que se combina con un pluscuamperfecto de subjuntivo y un condicional perfecto; 'ojalá' no forma este tipo de oración compuesta."
      }
    ]
  },
  {
    "slug": "reported-speech-drill-1",
    "level": "B2",
    "number": 40,
    "title": "El Estilo Indirecto: Práctica Extra, Part 1 of 3",
    "summary": "Practica la transformación de citas directas en estilo indirecto: cambios de tiempo verbal, pronombres, posesivos y expresiones de tiempo y lugar, con verbos declarativos, preguntas y mandatos.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Presente → Imperfecto",
        "body": [
          "Recuerda que el verbo en presente de indicativo retrocede a imperfecto cuando el verbo introductor está en pasado."
        ],
        "examples": [
          {
            "es": "Ana dijo: 'Estoy cansada.' → Ana dijo que estaba cansada.",
            "en": "Ana said: 'I'm tired.' → Ana said she was tired."
          },
          {
            "es": "Pedro dijo: 'Vivo en Madrid.' → Pedro dijo que vivía en Madrid."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa la oración con la forma correcta del estilo indirecto.",
            "sentence": "Carla dijo: 'Tengo hambre.' → Carla dijo que ___ hambre.",
            "answer": "tenía",
            "hint": "presente → imperfecto",
            "explanation": "El verbo 'tengo' (presente) se convierte en 'tenía' (imperfecto) al pasar a estilo indirecto."
          }
        ]
      },
      {
        "heading": "Pretérito y Pretérito Perfecto → Pluscuamperfecto",
        "body": [
          "Recuerda que las acciones pasadas retroceden un paso más y se convierten en pluscuamperfecto."
        ],
        "examples": [
          {
            "es": "Luis dijo: 'Comí en casa.' → Luis dijo que había comido en casa.",
            "en": "Luis said: 'I ate at home.' → Luis said he had eaten at home."
          },
          {
            "es": "Marta dijo: 'He terminado el informe.' → Marta dijo que había terminado el informe."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "Elige la transformación correcta: Sofía dijo: 'Ya salí de la oficina.'",
            "options": [
              "Sofía dijo que ya salía de la oficina.",
              "Sofía dijo que ya había salido de la oficina.",
              "Sofía dijo que ya saldría de la oficina.",
              "Sofía dijo que ya sale de la oficina."
            ],
            "correctIndex": 1,
            "explanation": "El pretérito 'salí' retrocede a pluscuamperfecto: 'había salido'."
          }
        ]
      },
      {
        "heading": "Futuro → Condicional",
        "body": [
          "Recuerda que el futuro simple retrocede a condicional simple en el estilo indirecto pasado."
        ],
        "examples": [
          {
            "es": "Diego dijo: 'Llegaré mañana.' → Diego dijo que llegaría al día siguiente.",
            "en": "Diego said: 'I will arrive tomorrow.' → Diego said he would arrive the next day."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa la oración con la forma correcta del estilo indirecto.",
            "sentence": "El jefe dijo: 'Terminaremos el proyecto.' → El jefe dijo que ___ el proyecto.",
            "answer": "terminarían",
            "hint": "futuro → condicional",
            "explanation": "El futuro 'terminaremos' se convierte en condicional 'terminarían'."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "Elige la transformación correcta: Laura dijo: 'Estudio medicina.'",
        "options": [
          "Laura dijo que estudia medicina.",
          "Laura dijo que estudiaba medicina.",
          "Laura dijo que había estudiado medicina.",
          "Laura dijo que estudiaría medicina."
        ],
        "correctIndex": 1,
        "explanation": "El presente 'estudio' retrocede a imperfecto 'estudiaba' en el estilo indirecto pasado."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con la forma correcta.",
        "sentence": "Antonio dijo: 'Fui al banco esta mañana.' → Antonio dijo que ___ al banco esa mañana.",
        "answer": "había ido",
        "hint": "pretérito → pluscuamperfecto",
        "explanation": "El pretérito 'fui' se convierte en pluscuamperfecto 'había ido'."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Traduce la oración al español.",
        "source": "He said that he would call me the next day.",
        "answer": "Dijo que me llamaría al día siguiente.",
        "altAnswers": [
          "Él dijo que me llamaría al día siguiente."
        ],
        "explanation": "El futuro del inglés 'would call' corresponde al condicional español 'llamaría', y 'the next day' se traduce como 'al día siguiente'."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras para formar la oración en estilo indirecto.",
        "words": [
          "Nos",
          "dijo",
          "que",
          "estaba",
          "muy",
          "contento"
        ],
        "translation": "He told us that he was very happy.",
        "explanation": "La estructura correcta es 'Nos dijo que estaba muy contento', con el verbo introductor seguido de 'que' y el verbo en imperfecto."
      },
      {
        "type": "multiple-choice",
        "question": "Elige la transformación correcta: 'He perdido las llaves.'",
        "options": [
          "Dijo que ha perdido las llaves.",
          "Dijo que perdió las llaves.",
          "Dijo que había perdido las llaves.",
          "Dijo que perdería las llaves."
        ],
        "correctIndex": 2,
        "explanation": "El pretérito perfecto 'he perdido' retrocede a pluscuamperfecto 'había perdido'."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con la forma correcta.",
        "sentence": "Elena preguntó: '¿Trabajas los fines de semana?' → Elena preguntó si ___ los fines de semana.",
        "answer": "trabajaba",
        "hint": "pregunta cerrada + presente → imperfecto",
        "explanation": "Al introducir la pregunta con 'si', el verbo en presente 'trabajas' pasa a imperfecto 'trabajaba'."
      }
    ]
  },
  {
    "slug": "reported-speech-drill-2",
    "level": "B2",
    "number": 41,
    "title": "El Estilo Indirecto: Práctica Extra, Part 2 of 3",
    "summary": "Practica la transformación de citas directas en estilo indirecto: cambios de tiempo verbal, pronombres, posesivos y expresiones de tiempo y lugar, con verbos declarativos, preguntas y mandatos.",
    "duration": "9 min",
    "sections": [
      {
        "heading": "Presente de Subjuntivo → Imperfecto de Subjuntivo",
        "body": [
          "Recuerda que el subjuntivo también retrocede: el presente de subjuntivo pasa a imperfecto de subjuntivo."
        ],
        "examples": [
          {
            "es": "Rosa dijo: 'Espero que vengas.' → Rosa dijo que esperaba que vinieras.",
            "en": "Rosa said: 'I hope you come.' → Rosa said she hoped I would come."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "Elige la transformación correcta: El profesor dijo: 'Dudo que aprueben el examen.'",
            "options": [
              "El profesor dijo que duda que aprueben el examen.",
              "El profesor dijo que dudaba que aprobaran el examen.",
              "El profesor dijo que dudó que aprueben el examen.",
              "El profesor dijo que dudaría que aprobaron el examen."
            ],
            "correctIndex": 1,
            "explanation": "El presente de subjuntivo 'aprueben' retrocede a imperfecto de subjuntivo 'aprobaran', y 'dudo' pasa a 'dudaba'."
          }
        ]
      },
      {
        "heading": "Preguntas cerradas: preguntó si...",
        "body": [
          "Recuerda que las preguntas de sí/no se introducen con 'si' y pierden los signos de interrogación."
        ],
        "examples": [
          {
            "es": "'¿Vienes a la fiesta?' → Me preguntó si iba a la fiesta.",
            "en": "'Are you coming to the party?' → He asked me if I was coming to the party."
          }
        ],
        "checkpoint": [
          {
            "type": "translate",
            "direction": "es-en",
            "prompt": "Traduce la oración al inglés.",
            "source": "Mi madre me preguntó si había llamado al médico.",
            "answer": "My mother asked me if I had called the doctor.",
            "altAnswers": [
              "My mom asked me whether I had called the doctor."
            ],
            "explanation": "'Preguntó si' introduce una pregunta cerrada, y 'había llamado' es el pluscuamperfecto correspondiente al pretérito perfecto original."
          }
        ]
      },
      {
        "heading": "Preguntas abiertas: preguntó qué / dónde / cuándo...",
        "body": [
          "Recuerda que las preguntas con palabra interrogativa conservan esa palabra pero sin signos de interrogación ni inversión enfática."
        ],
        "examples": [
          {
            "es": "'¿Dónde vives?' → Me preguntó dónde vivía.",
            "en": "'Where do you live?' → He asked me where I lived."
          },
          {
            "es": "'¿Qué hora es?' → Me preguntó qué hora era."
          }
        ],
        "checkpoint": [
          {
            "type": "word-order",
            "prompt": "Ordena las palabras para formar la oración en estilo indirecto.",
            "words": [
              "Me",
              "preguntó",
              "cuándo",
              "iba",
              "a",
              "volver"
            ],
            "translation": "He/She asked me when I was going to come back.",
            "explanation": "El orden correcto es sujeto tácito + verbo introductor + palabra interrogativa + verbo en imperfecto: 'Me preguntó cuándo iba a volver.'"
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "matching",
        "instructions": "Empareja cada oración en estilo directo con su versión correcta en estilo indirecto.",
        "pairs": [
          {
            "left": "'Iré a la reunión.'",
            "right": "Dijo que iría a la reunión."
          },
          {
            "left": "'¿Has comido?'",
            "right": "Me preguntó si había comido."
          },
          {
            "left": "'Llama a tu hermana.'",
            "right": "Me dijo que llamara a mi hermana."
          },
          {
            "left": "'Quiero que me ayudes.'",
            "right": "Dijo que quería que le ayudara."
          }
        ],
        "explanation": "Cada oración directa se transforma aplicando el cambio de tiempo verbal correspondiente: futuro→condicional, perfecto→pluscuamperfecto, mandato→subjuntivo imperfecto y presente de subjuntivo→imperfecto de subjuntivo."
      },
      {
        "type": "translate",
        "direction": "es-en",
        "prompt": "Traduce la oración al inglés.",
        "source": "Me preguntó dónde había puesto las llaves.",
        "answer": "He/She asked me where I had put the keys.",
        "altAnswers": [
          "She asked me where I'd put the keys."
        ],
        "explanation": "'Preguntó dónde' introduce una pregunta abierta, y 'había puesto' corresponde al pluscuamperfecto del pretérito original 'puse'."
      },
      {
        "type": "multi-select",
        "question": "¿Cuáles de las siguientes transformaciones de tiempo verbal son correctas en el estilo indirecto pasado? (elige todas las correctas)",
        "options": [
          "presente → imperfecto",
          "pretérito → pluscuamperfecto",
          "futuro → condicional",
          "imperfecto → presente"
        ],
        "correctIndexes": [
          0,
          1,
          2
        ],
        "explanation": "El presente retrocede a imperfecto, el pretérito a pluscuamperfecto y el futuro a condicional. El imperfecto no cambia a presente; normalmente se mantiene igual."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con la forma correcta.",
        "sentence": "El niño dijo: 'No quiero ir al colegio.' → El niño dijo que no ___ ir al colegio.",
        "answer": "quería",
        "hint": "presente → imperfecto",
        "explanation": "El presente 'quiero' retrocede a imperfecto 'quería'."
      },
      {
        "type": "multiple-choice",
        "question": "Elige la pregunta abierta transformada correctamente: '¿Cuánto cuesta el billete?'",
        "options": [
          "Preguntó cuánto cuesta el billete.",
          "Preguntó cuánto costaba el billete.",
          "Preguntó si cuánto costaba el billete.",
          "Preguntó cuánto costaría el billete."
        ],
        "correctIndex": 1,
        "explanation": "Las preguntas con palabra interrogativa conservan esa palabra ('cuánto') y el verbo retrocede de presente a imperfecto: 'costaba'."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras para formar la oración en estilo indirecto.",
        "words": [
          "El",
          "director",
          "nos",
          "dijo",
          "que",
          "termináramos",
          "el",
          "trabajo"
        ],
        "translation": "The director told us to finish the work.",
        "explanation": "El mandato directo 'Terminen el trabajo' se convierte en 'que termináramos el trabajo', con el verbo en imperfecto de subjuntivo."
      }
    ]
  },
  {
    "slug": "reported-speech-drill-3",
    "level": "B2",
    "number": 42,
    "title": "El Estilo Indirecto: Práctica Extra, Part 3 of 3",
    "summary": "Practica la transformación de citas directas en estilo indirecto: cambios de tiempo verbal, pronombres, posesivos y expresiones de tiempo y lugar, con verbos declarativos, preguntas y mandatos.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Mandatos: le dijo que + subjuntivo",
        "body": [
          "Recuerda que los mandatos directos se transforman en 'que' + subjuntivo (presente o imperfecto según el contexto)."
        ],
        "examples": [
          {
            "es": "'Cierra la puerta.' → Me dijo que cerrara la puerta.",
            "en": "'Close the door.' → He told me to close the door."
          },
          {
            "es": "'No fumes aquí.' → Me dijo que no fumara allí."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa la oración con la forma correcta del estilo indirecto.",
            "sentence": "El médico me dijo: 'Tome esta medicina.' → El médico me dijo que ___ esa medicina.",
            "answer": "tomara",
            "hint": "mandato → imperfecto de subjuntivo",
            "explanation": "Los mandatos en estilo indirecto pasado se convierten en 'que' + imperfecto de subjuntivo: 'tomara'."
          }
        ]
      },
      {
        "heading": "Pronombres, posesivos y expresiones de tiempo/lugar",
        "body": [
          "Recuerda que los pronombres, posesivos y marcadores de tiempo y lugar también cambian según la perspectiva del narrador."
        ],
        "examples": [
          {
            "es": "'Hoy es mi cumpleaños.' → Dijo que ese día era su cumpleaños.",
            "en": "'Today is my birthday.' → She said that day was her birthday."
          },
          {
            "es": "'Voy a llamarte mañana desde aquí.' → Dijo que iba a llamarme al día siguiente desde allí."
          }
        ],
        "checkpoint": [
          {
            "type": "multi-select",
            "question": "¿Qué cambios de expresiones de tiempo/lugar son correctos al pasar al estilo indirecto pasado? (elige todas las correctas)",
            "options": [
              "hoy → ese día",
              "mañana → al día siguiente",
              "aquí → allí",
              "ayer → mañana"
            ],
            "correctIndexes": [
              0,
              1,
              2
            ],
            "explanation": "'Hoy' cambia a 'ese día', 'mañana' a 'al día siguiente' y 'aquí' cambia a 'allí'. 'Ayer' no cambia a 'mañana', sino a 'el día anterior'."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con la forma correcta.",
        "sentence": "Marcos dijo: 'Espero que todo salga bien.' → Marcos dijo que esperaba que todo ___ bien.",
        "answer": "saliera",
        "hint": "presente de subjuntivo → imperfecto de subjuntivo",
        "explanation": "El presente de subjuntivo 'salga' retrocede a imperfecto de subjuntivo 'saliera'."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Traduce la oración al español.",
        "source": "She told me not to worry about it.",
        "answer": "Me dijo que no me preocupara por eso.",
        "altAnswers": [
          "Me dijo que no me preocupase por eso."
        ],
        "explanation": "El mandato negativo se transforma con 'que' + imperfecto de subjuntivo: 'no me preocupara'."
      },
      {
        "type": "multiple-choice",
        "question": "Elige la transformación correcta de los marcadores de tiempo: 'Te veo mañana aquí.'",
        "options": [
          "Dijo que me vería al día siguiente allí.",
          "Dijo que me vería mañana aquí.",
          "Dijo que me veía al día siguiente aquí.",
          "Dijo que me vería ese día allí."
        ],
        "correctIndex": 0,
        "explanation": "El futuro 'veo' (con valor de futuro inmediato) pasa a condicional 'vería', 'mañana' cambia a 'al día siguiente' y 'aquí' cambia a 'allí'."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con la forma correcta.",
        "sentence": "Los estudiantes preguntaron: '¿Cuándo es el examen?' → Los estudiantes preguntaron cuándo ___ el examen.",
        "answer": "era",
        "hint": "presente → imperfecto",
        "explanation": "El verbo 'es' (presente) retrocede a 'era' (imperfecto) al pasar al estilo indirecto."
      },
      {
        "type": "multi-select",
        "question": "¿Qué cambios de pronombres y posesivos ocurren normalmente al pasar del estilo directo al indirecto en tercera persona? (elige todas las correctas)",
        "options": [
          "mi → su",
          "yo → él/ella",
          "te → le",
          "nosotros → ellos/ellas (según contexto)"
        ],
        "correctIndexes": [
          0,
          1,
          2,
          3
        ],
        "explanation": "Al reportar en tercera persona, los pronombres y posesivos de primera y segunda persona se ajustan a la perspectiva del narrador: mi→su, yo→él/ella, te→le, y nosotros puede cambiar a ellos/ellas según quién habla."
      },
      {
        "type": "translate",
        "direction": "es-en",
        "prompt": "Traduce la oración al inglés.",
        "source": "El camarero nos dijo que pidiéramos la cuenta en la caja.",
        "answer": "The waiter told us to ask for the bill at the register.",
        "altAnswers": [
          "The waiter told us to request the check at the cashier."
        ],
        "explanation": "El mandato original 'Pidan la cuenta' se reporta con 'dijo que' + imperfecto de subjuntivo 'pidiéramos', equivalente en inglés a 'told us to ask'."
      }
    ]
  },
  {
    "slug": "ser-estar-haber-nuanced-drill-1",
    "level": "B2",
    "number": 43,
    "title": "Usos Matizados de Ser, Estar y Haber: Práctica Extra, Part 1 of 3",
    "summary": "Practica los usos avanzados y con frecuencia confusos de ser, estar y haber: adjetivos que cambian de significado, estar + gerundio, la diferencia entre haber y estar para expresar existencia o ubicación, y ser para la ubicación de eventos.",
    "duration": "9 min",
    "sections": [
      {
        "heading": "Ser listo vs. estar listo",
        "body": [
          "Recuerda que 'ser listo' significa ser inteligente y 'estar listo' significa estar preparado."
        ],
        "examples": [
          {
            "es": "Mi hermano es muy listo; siempre saca buenas notas.",
            "en": "My brother is very smart; he always gets good grades."
          },
          {
            "es": "¿Estás listo para el examen?",
            "en": "Are you ready for the exam?"
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "Selecciona la oración que significa que Ana es inteligente.",
            "options": [
              "Ana está lista.",
              "Ana es lista.",
              "Ana hay lista.",
              "Ana está siendo lista."
            ],
            "correctIndex": 1,
            "explanation": "'Ser listo' describe una cualidad permanente: la inteligencia. 'Estar listo' significaría que Ana está preparada, no que es inteligente."
          }
        ]
      },
      {
        "heading": "Ser aburrido vs. estar aburrido",
        "body": [
          "Con 'aburrido', 'ser' describe algo o alguien sin interés y 'estar' describe el estado de sentir aburrimiento."
        ],
        "examples": [
          {
            "es": "Esta película es aburrida; nadie quiere verla.",
            "en": "This movie is boring; nobody wants to watch it."
          },
          {
            "es": "Los niños están aburridos porque llueve todo el día.",
            "en": "The kids are bored because it's raining all day."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa la oración con la forma correcta de ser o estar.",
            "sentence": "El profesor ___ aburrido; nadie presta atención en su clase.",
            "answer": "es",
            "hint": "Describe una cualidad permanente de la clase, no un sentimiento temporal.",
            "explanation": "Se usa 'ser' porque la oración describe una característica inherente del profesor (sus clases no interesan a nadie), no un estado de ánimo temporal."
          }
        ]
      },
      {
        "heading": "Ser rico, ser malo, ser verde vs. estar rico, estar malo, estar verde",
        "body": [
          "Con adjetivos como 'rico', 'malo' y 'verde', 'ser' indica una cualidad permanente y 'estar' indica un estado temporal, un sabor o falta de madurez."
        ],
        "examples": [
          {
            "es": "El chocolate está muy rico.",
            "en": "The chocolate tastes really good."
          },
          {
            "es": "Esa empresa es rica.",
            "en": "That company is wealthy."
          },
          {
            "es": "Mi abuela está mala desde ayer.",
            "en": "My grandmother has been sick since yesterday."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Qué oración significa que la fruta todavía no ha madurado?",
            "options": [
              "La fruta es verde.",
              "La fruta está verde.",
              "La fruta hay verde.",
              "La fruta es estar verde."
            ],
            "correctIndex": 1,
            "explanation": "'Estar verde' indica un estado temporal de falta de madurez. 'Ser verde' significaría que el color natural de la fruta es verde."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "Selecciona la oración correcta para decir que Ana es inteligente.",
        "options": [
          "Ana está lista.",
          "Ana es lista.",
          "Ana hay lista.",
          "Ana es estar lista."
        ],
        "correctIndex": 1,
        "explanation": "'Ser listo' expresa la cualidad de ser inteligente, una característica permanente de la persona."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con la forma correcta de ser o estar.",
        "sentence": "El profesor ___ aburrido; nadie presta atención en su clase.",
        "answer": "es",
        "hint": "cualidad permanente, no sentimiento temporal",
        "explanation": "'Ser aburrido' describe una característica del profesor: sus clases no son interesantes."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Traduce la oración al español.",
        "source": "The soup is very tasty.",
        "answer": "La sopa está muy rica.",
        "altAnswers": [
          "La sopa está muy sabrosa."
        ],
        "explanation": "'Estar rico/a' se usa para describir el sabor de la comida en un momento dado."
      },
      {
        "type": "multi-select",
        "question": "¿Cuáles oraciones usan correctamente 'estar' para expresar un estado temporal?",
        "options": [
          "Mi hermano está aburrido en clase.",
          "Mi hermano es aburrido en clase.",
          "La sopa está rica hoy.",
          "La sopa es rica hoy."
        ],
        "correctIndexes": [
          0,
          2
        ],
        "explanation": "'Estar aburrido' describe el sentimiento temporal de mi hermano, y 'estar rica' describe el sabor de la sopa en este momento; ambas son opciones válidas con 'estar'."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras para formar una oración correcta.",
        "words": [
          "Los",
          "niños",
          "están",
          "jugando",
          "en",
          "el",
          "parque"
        ],
        "translation": "The kids are playing in the park.",
        "explanation": "'Estar' + gerundio ('están jugando') expresa una acción en curso en este momento."
      },
      {
        "type": "matching",
        "instructions": "Empareja cada oración en español con su traducción en inglés.",
        "pairs": [
          {
            "left": "Hay un libro en la mesa.",
            "right": "There is a book on the table."
          },
          {
            "left": "El libro está en la mesa.",
            "right": "The book is on the table."
          },
          {
            "left": "La fiesta es en mi casa.",
            "right": "The party is at my house."
          },
          {
            "left": "Mis llaves están en el cajón.",
            "right": "My keys are in the drawer."
          }
        ],
        "explanation": "Cada par distingue el uso de haber para existencia general, estar para ubicación de objetos específicos, y ser para el lugar de un evento."
      },
      {
        "type": "multiple-choice",
        "question": "¿Cuál es la oración correcta?",
        "options": [
          "Hay el libro en la mesa.",
          "Hay un libro en la mesa.",
          "Está un libro en la mesa.",
          "Es un libro en la mesa."
        ],
        "correctIndex": 1,
        "explanation": "'Hay' introduce algo no específico (un libro); no se combina con artículos definidos como 'el'."
      }
    ]
  },
  {
    "slug": "ser-estar-haber-nuanced-drill-2",
    "level": "B2",
    "number": 44,
    "title": "Usos Matizados de Ser, Estar y Haber: Práctica Extra, Part 2 of 3",
    "summary": "Practica los usos avanzados y con frecuencia confusos de ser, estar y haber: adjetivos que cambian de significado, estar + gerundio, la diferencia entre haber y estar para expresar existencia o ubicación, y ser para la ubicación de eventos.",
    "duration": "9 min",
    "sections": [
      {
        "heading": "Estar + gerundio para acciones en curso",
        "body": [
          "Se usa 'estar' + gerundio para describir una acción que está ocurriendo en un momento determinado."
        ],
        "examples": [
          {
            "es": "Los estudiantes están escribiendo un ensayo ahora mismo.",
            "en": "The students are writing an essay right now."
          },
          {
            "es": "Estábamos comiendo cuando llamaste.",
            "en": "We were eating when you called."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa la oración con estar + gerundio.",
            "sentence": "Mis padres ___ (ver) las noticias en este momento.",
            "answer": "están viendo",
            "hint": "estar + gerundio de 'ver'",
            "explanation": "Se usa 'estar' + gerundio ('están viendo') para expresar una acción que ocurre justo ahora."
          }
        ]
      },
      {
        "heading": "Haber vs. estar: existencia frente a ubicación",
        "body": [
          "Se usa 'hay' para introducir algo no específico y 'estar' para ubicar algo que ya se conoce o se ha mencionado antes."
        ],
        "examples": [
          {
            "es": "Hay un libro en la mesa.",
            "en": "There is a book on the table."
          },
          {
            "es": "El libro está en la mesa.",
            "en": "The book is on the table."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Cuál es la oración correcta?",
            "options": [
              "Hay el libro en la mesa.",
              "Hay un libro en la mesa.",
              "Está un libro en la mesa.",
              "Es un libro en la mesa."
            ],
            "correctIndex": 1,
            "explanation": "'Hay' se usa con sustantivos no específicos (un libro) para expresar existencia; nunca se usa con artículos definidos como 'el'."
          }
        ]
      },
      {
        "heading": "Ser para la ubicación de eventos",
        "body": [
          "Se usa 'ser' para indicar dónde tiene lugar un evento, no dónde está situado un objeto físico."
        ],
        "examples": [
          {
            "es": "La fiesta es en mi casa.",
            "en": "The party is at my house."
          },
          {
            "es": "El concierto es en el estadio.",
            "en": "The concert is at the stadium."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Cuál oración es correcta para indicar dónde ocurrirá la reunión?",
            "options": [
              "La reunión está en la sala de conferencias.",
              "La reunión es en la sala de conferencias.",
              "La reunión hay en la sala de conferencias.",
              "La reunión son en la sala de conferencias."
            ],
            "correctIndex": 1,
            "explanation": "Cuando 'reunión' se refiere al evento en sí (no a un objeto), se usa 'ser' para indicar su ubicación."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con la forma correcta de haber o estar.",
        "sentence": "___ un restaurante nuevo cerca de mi casa.",
        "answer": "Hay",
        "hint": "existencia de algo no mencionado antes",
        "explanation": "Se usa 'hay' porque se introduce la existencia de un restaurante nuevo, algo no específico ni mencionado previamente."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con la forma correcta de haber o estar.",
        "sentence": "El restaurante nuevo ___ en la calle principal.",
        "answer": "está",
        "hint": "ubicación de algo ya conocido",
        "explanation": "Una vez que el restaurante ya se ha mencionado (es específico), se usa 'estar' para indicar su ubicación."
      },
      {
        "type": "translate",
        "direction": "es-en",
        "prompt": "Traduce la oración al inglés.",
        "source": "La fiesta es en la playa este año.",
        "answer": "The party is at the beach this year.",
        "altAnswers": [
          "This year the party is at the beach."
        ],
        "explanation": "'Ser' se usa para indicar dónde tiene lugar el evento (la fiesta), no la ubicación física de un objeto."
      },
      {
        "type": "multiple-choice",
        "question": "¿Cuál oración es correcta para indicar dónde tendrá lugar la reunión?",
        "options": [
          "La reunión está en la sala de conferencias.",
          "La reunión es en la sala de conferencias.",
          "La reunión hay en la sala de conferencias.",
          "La reunión son en la sala de conferencias."
        ],
        "correctIndex": 1,
        "explanation": "Los eventos, como una reunión, usan 'ser' para expresar su ubicación."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Traduce la oración al español.",
        "source": "My phone is on the desk.",
        "answer": "Mi teléfono está en el escritorio.",
        "altAnswers": [
          "Mi celular está en el escritorio.",
          "Mi móvil está en el escritorio."
        ],
        "explanation": "'Estar' describe la ubicación física de un objeto específico, el teléfono."
      },
      {
        "type": "multi-select",
        "question": "¿Cuáles de las siguientes oraciones son gramaticalmente correctas?",
        "options": [
          "Hay tres sillas en la cocina.",
          "Están tres sillas en la cocina.",
          "El concierto es en el parque.",
          "El concierto hay en el parque."
        ],
        "correctIndexes": [
          0,
          2
        ],
        "explanation": "'Hay' se usa correctamente para introducir la existencia de las sillas, y 'ser' se usa correctamente para la ubicación del evento (el concierto); las otras dos opciones usan el verbo equivocado."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con la forma correcta de ser o estar.",
        "sentence": "Mi padre ___ malo; tiene fiebre desde esta mañana.",
        "answer": "está",
        "hint": "estado temporal de salud",
        "explanation": "'Estar malo' indica un estado temporal de salud (estar enfermo), no una cualidad permanente."
      }
    ]
  },
  {
    "slug": "ser-estar-haber-nuanced-drill-3",
    "level": "B2",
    "number": 45,
    "title": "Usos Matizados de Ser, Estar y Haber: Práctica Extra, Part 3 of 3",
    "summary": "Practica los usos avanzados y con frecuencia confusos de ser, estar y haber: adjetivos que cambian de significado, estar + gerundio, la diferencia entre haber y estar para expresar existencia o ubicación, y ser para la ubicación de eventos.",
    "duration": "6 min",
    "sections": [
      {
        "heading": "Estar para la ubicación física de personas y objetos",
        "body": [
          "Se usa 'estar' para describir dónde se encuentra físicamente una persona, un animal o un objeto."
        ],
        "examples": [
          {
            "es": "Mis llaves están en el cajón.",
            "en": "My keys are in the drawer."
          },
          {
            "es": "Mi hermana está en Madrid esta semana.",
            "en": "My sister is in Madrid this week."
          }
        ],
        "checkpoint": [
          {
            "type": "translate",
            "direction": "en-es",
            "prompt": "Traduce la oración al español.",
            "source": "My phone is on the desk.",
            "answer": "Mi teléfono está en el escritorio.",
            "altAnswers": [
              "Mi celular está en el escritorio.",
              "Mi móvil está en el escritorio."
            ],
            "explanation": "Se usa 'estar' porque la oración describe la ubicación física de un objeto específico, el teléfono."
          }
        ]
      },
      {
        "heading": "Repaso combinado: ser, estar y haber",
        "body": [
          "Contrasta ser, estar y haber según el contexto: identidad o eventos, estado o ubicación, o existencia general."
        ],
        "examples": [
          {
            "es": "Hay una fiesta esta noche; la fiesta es en el club y está muy cerca de aquí.",
            "en": "There's a party tonight; the party is at the club and it's very close to here."
          }
        ],
        "checkpoint": [
          {
            "type": "matching",
            "instructions": "Empareja cada oración en español con su traducción correcta en inglés.",
            "pairs": [
              {
                "left": "Hay dos gatos en el jardín.",
                "right": "There are two cats in the garden."
              },
              {
                "left": "Los gatos están en el jardín.",
                "right": "The cats are in the garden."
              },
              {
                "left": "La boda es en la iglesia.",
                "right": "The wedding is at the church."
              },
              {
                "left": "Marta es lista y está lista para el viaje.",
                "right": "Marta is smart and ready for the trip."
              }
            ],
            "explanation": "Cada par contrasta un uso distinto: haber para existencia, estar para ubicación física, ser para el lugar de un evento, y el doble sentido de 'listo' con ser y estar."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "word-order",
        "prompt": "Ordena las palabras para formar una oración correcta.",
        "words": [
          "Hay",
          "muchas",
          "personas",
          "en",
          "el",
          "concierto"
        ],
        "translation": "There are many people at the concert.",
        "explanation": "'Hay' se usa para expresar la existencia de una cantidad no específica de personas."
      },
      {
        "type": "multiple-choice",
        "question": "Diego acaba de empezar su trabajo y todavía no sabe mucho. ¿Qué oración es correcta?",
        "options": [
          "Diego es verde en este trabajo.",
          "Diego está verde en este trabajo.",
          "Diego hay verde en este trabajo.",
          "Diego son verde en este trabajo."
        ],
        "correctIndex": 1,
        "explanation": "'Estar verde' se usa en sentido figurado para expresar que alguien es inexperto o le falta madurez en algo, un estado que puede cambiar."
      },
      {
        "type": "translate",
        "direction": "es-en",
        "prompt": "Traduce la oración al inglés.",
        "source": "Las manzanas están verdes todavía.",
        "answer": "The apples are still green.",
        "altAnswers": [
          "The apples are still unripe."
        ],
        "explanation": "'Estar verde' con frutas indica que todavía no han madurado, un estado temporal."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con la forma correcta de ser o estar.",
        "sentence": "Esa familia ___ muy rica; tiene varias casas y negocios.",
        "answer": "es",
        "hint": "cualidad permanente de riqueza económica",
        "explanation": "'Ser rico' describe la cualidad permanente de tener mucho dinero, a diferencia de 'estar rico', que se refiere al sabor de la comida."
      },
      {
        "type": "multiple-choice",
        "question": "¿Cuál oración describe correctamente una acción que ocurre en este momento?",
        "options": [
          "Mis amigos son estudiando en la biblioteca.",
          "Mis amigos hay estudiando en la biblioteca.",
          "Mis amigos están estudiando en la biblioteca.",
          "Mis amigos es estudiando en la biblioteca."
        ],
        "correctIndex": 2,
        "explanation": "'Estar' + gerundio ('están estudiando') es la estructura correcta para expresar una acción en curso."
      }
    ]
  },
  {
    "slug": "verbs-of-change-drill-1",
    "level": "B2",
    "number": 46,
    "title": "Los Verbos de Cambio: Práctica Extra, Part 1 of 3",
    "summary": "Practica la diferencia entre ponerse, volverse, hacerse, llegar a ser y quedarse a través de ejercicios de repetición y contraste.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Ponerse: el cambio temporal",
        "body": [
          "Ponerse describe un cambio emocional o físico pasajero que no transforma la identidad de la persona."
        ],
        "examples": [
          {
            "es": "Cuando vio la nota, se puso pálida.",
            "en": "When she saw the grade, she turned pale."
          },
          {
            "es": "Nos pusimos nerviosos antes del examen.",
            "en": "We got nervous before the exam."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa la oración con la forma correcta de ponerse.",
            "sentence": "Al escuchar la noticia, Marta ___ muy contenta.",
            "answer": "se puso",
            "hint": "pretérito de ponerse + adjetivo",
            "explanation": "Ponerse + adjetivo indica un cambio emocional temporal, en este caso provocado por una noticia."
          }
        ]
      },
      {
        "heading": "Volverse: el cambio brusco e involuntario",
        "body": [
          "Volverse expresa un cambio súbito, involuntario y a menudo permanente, frecuentemente con connotación negativa."
        ],
        "examples": [
          {
            "es": "Después de la guerra, se volvió muy desconfiado.",
            "en": "After the war, he became very distrustful."
          },
          {
            "es": "El perro se volvió agresivo con el tiempo.",
            "en": "The dog became aggressive over time."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Cuál oración usa volverse correctamente?",
            "options": [
              "Se volvió médico después de la universidad.",
              "Con el estrés del trabajo, se volvió muy irritable.",
              "Se volvió las tres de la tarde.",
              "Llegó a volverse presidente en 2020."
            ],
            "correctIndex": 1,
            "explanation": "Volverse se usa para un cambio de carácter o comportamiento involuntario y profundo, como volverse irritable."
          }
        ]
      },
      {
        "heading": "Hacerse: el cambio logrado con esfuerzo",
        "body": [
          "Hacerse indica un cambio de profesión, estatus, religión o ideología conseguido mediante esfuerzo o decisión personal."
        ],
        "examples": [
          {
            "es": "Se hizo abogado después de seis años de estudio.",
            "en": "He became a lawyer after six years of study."
          },
          {
            "es": "Se hicieron budistas tras vivir en Asia.",
            "en": "They became Buddhists after living in Asia."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa la oración con la forma correcta de hacerse.",
            "sentence": "Mi abuelo ___ muy religioso en sus últimos años.",
            "answer": "se hizo",
            "hint": "cambio gradual por decisión propia, no por un evento repentino",
            "explanation": "Hacerse religioso refleja un proceso deliberado y gradual, típico de este verbo."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "¿Qué verbo se usa típicamente para 'llegar a ser presidente'?",
        "options": [
          "ponerse",
          "volverse",
          "llegar a ser",
          "quedarse"
        ],
        "correctIndex": 2,
        "explanation": "Llegar a ser expresa un logro gradual y prestigioso, como llegar a la presidencia."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con la forma correcta de volverse.",
        "sentence": "Con tanto estrés en el trabajo, Juan ___ loco.",
        "answer": "se volvió",
        "hint": "cambio brusco e involuntario",
        "explanation": "Volverse loco describe un cambio profundo e involuntario provocado por una presión sostenida."
      },
      {
        "type": "translate",
        "direction": "es-en",
        "prompt": "Traduce la oración al inglés.",
        "source": "Se quedó dormido durante la película.",
        "answer": "He fell asleep during the movie.",
        "altAnswers": [
          "He ended up asleep during the movie."
        ],
        "explanation": "Quedarse dormido describe el estado resultante de un evento (ver la película), equivalente a 'fell asleep' en inglés."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Traduce la oración al español.",
        "source": "She became a doctor after years of studying.",
        "answer": "Se hizo médica después de años de estudiar.",
        "altAnswers": [
          "Se hizo doctora después de años de estudio."
        ],
        "explanation": "Hacerse médica expresa un cambio de profesión logrado mediante esfuerzo y estudio."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras para formar una oración correcta.",
        "words": [
          "ella",
          "se",
          "puso",
          "roja",
          "de",
          "vergüenza"
        ],
        "translation": "She turned red with embarrassment.",
        "explanation": "Ponerse roja describe un cambio físico temporal causado por una emoción, en este caso la vergüenza."
      },
      {
        "type": "matching",
        "instructions": "Empareja cada oración en español con su traducción correcta al inglés.",
        "pairs": [
          {
            "left": "Se puso furioso con la respuesta.",
            "right": "He got furious with the answer."
          },
          {
            "left": "Se volvió muy desconfiado con los años.",
            "right": "He became very distrustful over the years."
          },
          {
            "left": "Se hizo rico vendiendo casas.",
            "right": "He became rich selling houses."
          },
          {
            "left": "Llegó a ser una figura muy respetada.",
            "right": "He became a highly respected figure."
          },
          {
            "left": "Se quedó ciego tras el accidente.",
            "right": "He was left blind after the accident."
          }
        ],
        "explanation": "Cada verbo de cambio corresponde a un matiz distinto en inglés: temporal (got), brusco (became distrustful), esfuerzo (became rich), logro gradual (became a figure) y resultado (was left blind)."
      }
    ]
  },
  {
    "slug": "verbs-of-change-drill-2",
    "level": "B2",
    "number": 47,
    "title": "Los Verbos de Cambio: Práctica Extra, Part 2 of 3",
    "summary": "Practica la diferencia entre ponerse, volverse, hacerse, llegar a ser y quedarse a través de ejercicios de repetición y contraste.",
    "duration": "9 min",
    "sections": [
      {
        "heading": "Llegar a ser: el logro gradual y positivo",
        "body": [
          "Llegar a ser señala un cambio gradual, a largo plazo y generalmente positivo, como alcanzar una meta o posición elevada."
        ],
        "examples": [
          {
            "es": "Llegó a ser presidente de la empresa.",
            "en": "He became president of the company."
          },
          {
            "es": "Con mucho esfuerzo, llegó a ser una gran pianista.",
            "en": "With a lot of effort, she became a great pianist."
          }
        ],
        "checkpoint": [
          {
            "type": "translate",
            "direction": "en-es",
            "prompt": "Traduce la oración al español.",
            "source": "Over the years, she became a very respected scientist.",
            "answer": "Con los años, llegó a ser una científica muy respetada.",
            "altAnswers": [
              "Con el paso de los años, llegó a ser una científica muy respetada."
            ],
            "explanation": "Llegar a ser enfatiza el proceso largo y el logro positivo, ideal para expresar 'con los años'."
          }
        ]
      },
      {
        "heading": "Quedarse: el estado resultante",
        "body": [
          "Quedarse describe el estado en el que alguien permanece como resultado directo de un evento específico."
        ],
        "examples": [
          {
            "es": "Se quedó ciego tras el accidente.",
            "en": "He was left blind after the accident."
          },
          {
            "es": "Nos quedamos sorprendidos con la noticia.",
            "en": "We were left surprised by the news."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Qué verbo completa mejor la oración: 'Después del choque, Pedro ___ paralizado'?",
            "options": [
              "se puso",
              "se volvió",
              "se hizo",
              "se quedó"
            ],
            "correctIndex": 3,
            "explanation": "Quedarse se usa para el estado resultante de un evento concreto, aquí el accidente."
          }
        ]
      },
      {
        "heading": "Contraste: ponerse vs. volverse",
        "body": [
          "Ponerse marca lo temporal y superficial, mientras que volverse marca lo súbito pero más duradero o estructural."
        ],
        "examples": [
          {
            "es": "Se puso rojo de vergüenza (un momento).",
            "en": "He turned red with embarrassment (a moment)."
          },
          {
            "es": "Se volvió muy tímido después de la mudanza (un cambio más duradero).",
            "en": "He became very shy after the move (a lasting change)."
          }
        ],
        "checkpoint": [
          {
            "type": "multi-select",
            "question": "¿Qué oraciones usan correctamente ponerse o volverse según el contexto?",
            "options": [
              "Se puso furioso al leer el mensaje.",
              "Se volvió loco después de tantos años de presión.",
              "Se puso abogado el año pasado.",
              "Se volvió las cinco en punto."
            ],
            "correctIndexes": [
              0,
              1
            ],
            "explanation": "Las dos primeras oraciones usan ponerse y volverse correctamente para cambios emocionales; las otras confunden hacerse (profesión) o la hora, que no se expresa con volverse."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multi-select",
        "question": "¿Qué verbos indican un cambio logrado principalmente por esfuerzo o mérito personal?",
        "options": [
          "ponerse",
          "hacerse",
          "llegar a ser",
          "quedarse",
          "volverse"
        ],
        "correctIndexes": [
          1,
          2
        ],
        "explanation": "Hacerse y llegar a ser implican esfuerzo o proceso deliberado; ponerse y volverse suelen ser más espontáneos, y quedarse describe un resultado, no un esfuerzo."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con la forma correcta de llegar a ser.",
        "sentence": "Con los años, aquel joven ambicioso ___ un empresario muy respetado.",
        "answer": "llegó a ser",
        "hint": "proceso largo y positivo",
        "explanation": "Llegar a ser subraya el largo proceso y el resultado positivo de convertirse en empresario respetado."
      },
      {
        "type": "multiple-choice",
        "question": "Después del accidente, Pedro ___ ciego.",
        "options": [
          "se puso",
          "se volvió",
          "se hizo",
          "se quedó"
        ],
        "correctIndex": 3,
        "explanation": "Quedarse ciego describe el estado permanente resultante de un evento específico, el accidente."
      },
      {
        "type": "translate",
        "direction": "es-en",
        "prompt": "Traduce la oración al inglés.",
        "source": "Se hizo médico después de diez años de estudio.",
        "answer": "He became a doctor after ten years of studying.",
        "altAnswers": [
          "He became a doctor after ten years of study."
        ],
        "explanation": "Hacerse médico refleja un cambio de profesión alcanzado con esfuerzo sostenido, aquí diez años de estudio."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras para formar una oración correcta.",
        "words": [
          "con",
          "el",
          "calor",
          "se",
          "volvió",
          "muy",
          "irritable"
        ],
        "translation": "With the heat, he became very irritable.",
        "explanation": "Volverse irritable describe un cambio de carácter provocado por una causa externa persistente, el calor."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con la forma correcta de ponerse.",
        "sentence": "Cuando le dijeron la verdad, ___ furioso.",
        "answer": "se puso",
        "hint": "reacción emocional inmediata y temporal",
        "explanation": "Ponerse furioso indica una reacción emocional pasajera ante un estímulo directo, aquí la verdad revelada."
      },
      {
        "type": "multiple-choice",
        "question": "Tras el shock de la noticia, ella ___ paralizada durante unos segundos.",
        "options": [
          "se puso",
          "se hizo",
          "llegó a ser",
          "se quedó"
        ],
        "correctIndex": 3,
        "explanation": "Quedarse paralizada describe el estado inmediato resultante de un evento impactante, la noticia."
      }
    ]
  },
  {
    "slug": "verbs-of-change-drill-3",
    "level": "B2",
    "number": 48,
    "title": "Los Verbos de Cambio: Práctica Extra, Part 3 of 3",
    "summary": "Practica la diferencia entre ponerse, volverse, hacerse, llegar a ser y quedarse a través de ejercicios de repetición y contraste.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "Contraste: hacerse vs. llegar a ser",
        "body": [
          "Ambos verbos implican esfuerzo, pero hacerse suele referirse a la identidad o profesión y llegar a ser al estatus final alcanzado."
        ],
        "examples": [
          {
            "es": "Se hizo médico a los treinta años.",
            "en": "He became a doctor at thirty."
          },
          {
            "es": "Llegó a ser el mejor médico del hospital.",
            "en": "He became the best doctor in the hospital."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Elige entre hacerse y llegar a ser según el contexto.",
            "sentence": "Empezó como voluntaria y, con los años, ___ directora de la organización.",
            "answer": "llegó a ser",
            "hint": "proceso largo hacia un puesto elevado",
            "explanation": "Llegar a ser resalta el proceso gradual hacia una posición de mayor estatus, distinto de hacerse, más ligado a la identidad o profesión inicial."
          }
        ]
      },
      {
        "heading": "Los cinco verbos juntos",
        "body": [
          "Elegir el verbo correcto depende de si el cambio es temporal, brusco, esforzado, gradual o simplemente resultante."
        ],
        "examples": [
          {
            "es": "Se puso triste, luego se volvió amargado, y finalmente se quedó solo.",
            "en": "He got sad, then became bitter, and finally ended up alone."
          }
        ],
        "checkpoint": [
          {
            "type": "matching",
            "instructions": "Empareja cada oración con el verbo de cambio que mejor describe la situación.",
            "pairs": [
              {
                "left": "Se ___ médico tras años de esfuerzo.",
                "right": "hacerse"
              },
              {
                "left": "Se ___ pálido al ver el fantasma.",
                "right": "ponerse"
              },
              {
                "left": "Se ___ loco de tanto trabajar sin descanso.",
                "right": "volverse"
              },
              {
                "left": "Se ___ presidente después de una larga carrera política.",
                "right": "llegar a ser"
              },
              {
                "left": "Se ___ dormido durante la reunión.",
                "right": "quedarse"
              }
            ],
            "explanation": "Cada verbo corresponde a un tipo de cambio distinto: esfuerzo (hacerse), temporal (ponerse), brusco (volverse), gradual y positivo (llegar a ser), y resultado de un evento (quedarse)."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "matching",
        "instructions": "Empareja cada verbo de cambio con su descripción correcta.",
        "pairs": [
          {
            "left": "ponerse",
            "right": "cambio emocional o físico temporal"
          },
          {
            "left": "volverse",
            "right": "cambio brusco e involuntario, más duradero"
          },
          {
            "left": "hacerse",
            "right": "cambio logrado con esfuerzo, a menudo profesión o religión"
          },
          {
            "left": "llegar a ser",
            "right": "cambio gradual y positivo a largo plazo"
          },
          {
            "left": "quedarse",
            "right": "estado resultante de un evento"
          }
        ],
        "explanation": "Cada verbo de cambio tiene un matiz distinto según la causa, la duración y el grado de voluntad involucrado."
      },
      {
        "type": "multi-select",
        "question": "¿Cuáles de las siguientes oraciones usan correctamente un verbo de cambio?",
        "options": [
          "Se hizo las tres de la tarde cuando llegamos.",
          "Se volvió muy desconfiado después de la traición.",
          "Llegó a ser directora del hospital tras veinte años.",
          "Se puso abogado el mes pasado."
        ],
        "correctIndexes": [
          1,
          2
        ],
        "explanation": "La primera oración usa mal hacerse (la hora no se expresa con este verbo) y la cuarta usa mal ponerse (las profesiones requieren hacerse, no ponerse)."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Traduce la oración al español.",
        "source": "He went crazy after losing his job.",
        "answer": "Se volvió loco después de perder su trabajo.",
        "altAnswers": [
          "Se volvió loco tras perder su trabajo."
        ],
        "explanation": "Volverse loco expresa un cambio brusco y profundo provocado por una situación traumática, perder el trabajo."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con la forma correcta de hacerse.",
        "sentence": "Mi abuelo ___ muy religioso en sus últimos años.",
        "answer": "se hizo",
        "hint": "proceso gradual por decisión personal",
        "explanation": "Hacerse religioso indica un cambio de creencias logrado mediante un proceso deliberado y personal."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras para formar una oración correcta.",
        "words": [
          "con",
          "los",
          "años",
          "llegó",
          "a",
          "ser",
          "una",
          "científica",
          "reconocida"
        ],
        "translation": "Over the years, she became a recognized scientist.",
        "explanation": "Llegar a ser una científica reconocida describe un logro gradual y positivo alcanzado con el paso del tiempo."
      }
    ]
  },
  {
    "slug": "advanced-connectors-emphasis-drill-1",
    "level": "B2",
    "number": 49,
    "title": "Conectores Avanzados y Estructuras de Énfasis: Práctica Extra, Part 1 of 3",
    "summary": "Practica el uso de conectores de contraste, causa, consecuencia y adición, además de las estructuras enfáticas con 'lo que...es que...' y 'ser + relativo'. Este es un repaso intensivo; se asume que ya conoces estas estructuras.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Contraste I: sin embargo / no obstante",
        "body": [
          "Sin embargo y no obstante introducen un contraste fuerte, suelen ir entre comas y son propios de un registro formal o escrito."
        ],
        "examples": [
          {
            "es": "El proyecto era arriesgado; sin embargo, decidieron continuar.",
            "en": "The project was risky; however, they decided to continue."
          },
          {
            "es": "No obstante las dificultades, el equipo logró terminar a tiempo.",
            "en": "Despite the difficulties, the team managed to finish on time."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Cuál de estas oraciones usa 'sin embargo' correctamente?",
            "options": [
              "Sin embargo llueve, saldré a correr.",
              "Llovía mucho; sin embargo, salimos a correr.",
              "Salimos a correr sin embargo llovía.",
              "Sin embargo que llovía, salimos a correr."
            ],
            "correctIndex": 1,
            "explanation": "'Sin embargo' conecta dos ideas contrastantes y suele ir precedido de punto y coma o punto, seguido de coma."
          }
        ]
      },
      {
        "heading": "Contraste II: aunque / por otro lado / en cambio",
        "body": [
          "Aunque introduce una cláusula subordinada de concesión, mientras que por otro lado y en cambio contrastan dos ideas expresadas como oraciones independientes."
        ],
        "examples": [
          {
            "es": "Aunque llovía mucho, salimos a caminar.",
            "en": "Although it was raining a lot, we went out for a walk."
          },
          {
            "es": "A él le encanta madrugar; en cambio, a mí me cuesta levantarme temprano.",
            "en": "He loves getting up early; I, on the other hand, find it hard to get up early."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa la oración con el conector adecuado.",
            "sentence": "Mi hermano estudia medicina; ___, yo estudio arquitectura.",
            "answer": "en cambio",
            "hint": "Contraste entre dos oraciones independientes, no subordinación.",
            "explanation": "'En cambio' contrasta dos oraciones independientes; 'aunque' necesitaría una cláusula subordinada, no dos oraciones separadas por punto y coma."
          }
        ]
      },
      {
        "heading": "Causa: ya que / puesto que",
        "body": [
          "Ya que y puesto que presentan una causa que el oyente ya conoce o da por sabida, y pueden colocarse al principio o en medio de la oración."
        ],
        "examples": [
          {
            "es": "Puesto que no había entradas, decidimos ver la película en casa.",
            "en": "Since there were no tickets, we decided to watch the movie at home."
          },
          {
            "es": "No hace falta que lo expliques, ya que todos lo sabemos.",
            "en": "You don't need to explain it, since we all know it already."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Qué distingue a 'ya que' y 'puesto que' de 'porque'?",
            "options": [
              "No se pueden usar al principio de la oración.",
              "Presentan una causa que el oyente ya conoce o da por hecha.",
              "Solo se usan en preguntas.",
              "Indican consecuencia, no causa."
            ],
            "correctIndex": 1,
            "explanation": "A diferencia de 'porque', que introduce información nueva, 'ya que' y 'puesto que' presentan causas ya conocidas o evidentes para el oyente."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "¿Qué conector introduce un contraste fuerte y formal, típico de textos escritos?",
        "options": [
          "así que",
          "no obstante",
          "además",
          "puesto que"
        ],
        "correctIndex": 1,
        "explanation": "'No obstante' introduce un contraste marcado y pertenece a un registro formal, a diferencia de 'así que' o 'además'."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con el conector de concesión adecuado.",
        "sentence": "___ el examen era difícil, muchos estudiantes aprobaron.",
        "answer": "Aunque",
        "hint": "Introduce una cláusula subordinada de concesión.",
        "explanation": "'Aunque' introduce una subordinada concesiva que contrasta con la oración principal."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Traduce la oración al español.",
        "source": "Since it was raining, we stayed home.",
        "answer": "Ya que llovía, nos quedamos en casa.",
        "altAnswers": [
          "Puesto que llovía, nos quedamos en casa."
        ],
        "explanation": "'Ya que' y 'puesto que' introducen una causa que se presenta como conocida o evidente, equivalente a 'since' en este contexto."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras para formar una oración enfática.",
        "words": [
          "lo",
          "que",
          "más",
          "me",
          "sorprendió",
          "fue",
          "que",
          "no",
          "dijo",
          "nada"
        ],
        "translation": "What surprised me most was that he/she said nothing.",
        "explanation": "La estructura 'lo que + verbo + fue que' destaca el hecho de que no dijera nada como la información principal."
      },
      {
        "type": "matching",
        "instructions": "Relaciona cada conector con su categoría.",
        "pairs": [
          {
            "left": "sin embargo",
            "right": "contraste"
          },
          {
            "left": "puesto que",
            "right": "causa"
          },
          {
            "left": "por lo tanto",
            "right": "consecuencia"
          },
          {
            "left": "incluso",
            "right": "adición"
          }
        ],
        "explanation": "Cada conector pertenece a una categoría distinta: contraste, causa, consecuencia o adición, según la relación lógica que expresa."
      },
      {
        "type": "multi-select",
        "question": "¿Cuáles de estos conectores expresan causa?",
        "options": [
          "ya que",
          "así que",
          "puesto que",
          "en cambio",
          "de modo que"
        ],
        "correctIndexes": [
          0,
          2
        ],
        "explanation": "'Ya que' y 'puesto que' introducen causa; 'así que' y 'de modo que' expresan consecuencia, y 'en cambio' expresa contraste."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con el conector de consecuencia adecuado.",
        "sentence": "Los precios subieron mucho; ___, las ventas cayeron un veinte por ciento.",
        "answer": "por lo tanto",
        "hint": "Registro formal, propio de un informe económico.",
        "explanation": "'Por lo tanto' es el conector de consecuencia más formal, adecuado para un contexto económico o técnico."
      }
    ]
  },
  {
    "slug": "advanced-connectors-emphasis-drill-2",
    "level": "B2",
    "number": 50,
    "title": "Conectores Avanzados y Estructuras de Énfasis: Práctica Extra, Part 2 of 3",
    "summary": "Practica el uso de conectores de contraste, causa, consecuencia y adición, además de las estructuras enfáticas con 'lo que...es que...' y 'ser + relativo'. Este es un repaso intensivo; se asume que ya conoces estas estructuras.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Consecuencia: por lo tanto / de modo que / así que",
        "body": [
          "Por lo tanto y de modo que son más formales que así que, que se usa con mucha frecuencia en la lengua hablada."
        ],
        "examples": [
          {
            "es": "No estudió nada; por lo tanto, suspendió el examen.",
            "en": "He didn't study at all; therefore, he failed the exam."
          },
          {
            "es": "Llegamos tarde, así que perdimos el tren.",
            "en": "We arrived late, so we missed the train."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa la oración con el conector de consecuencia más adecuado al registro.",
            "sentence": "El informe demuestra pérdidas constantes; ___, la empresa cerrará la sucursal.",
            "answer": "por lo tanto",
            "hint": "Registro formal, propio de un informe.",
            "explanation": "En un texto formal como un informe, 'por lo tanto' es más adecuado que 'así que', que es más coloquial."
          },
          {
            "type": "multiple-choice",
            "question": "¿Cuál de estos conectores es el más informal?",
            "options": [
              "por lo tanto",
              "de modo que",
              "así que",
              "por consiguiente"
            ],
            "correctIndex": 2,
            "explanation": "'Así que' se usa mucho en la conversación cotidiana, mientras que 'por lo tanto', 'de modo que' y 'por consiguiente' son más formales."
          }
        ]
      },
      {
        "heading": "Adición: además / es más / incluso",
        "body": [
          "Es más añade una idea que refuerza o supera lo anterior, e incluso destaca un caso extremo o sorprendente dentro de una serie."
        ],
        "examples": [
          {
            "es": "El hotel es barato; además, está muy bien situado.",
            "en": "The hotel is cheap; besides, it's very well located."
          },
          {
            "es": "Nadie lo esperaba; es más, ni siquiera él mismo lo creía posible.",
            "en": "No one expected it; in fact, not even he thought it was possible."
          }
        ],
        "checkpoint": [
          {
            "type": "matching",
            "instructions": "Relaciona cada conector con la función que cumple.",
            "pairs": [
              {
                "left": "además",
                "right": "añade información complementaria"
              },
              {
                "left": "es más",
                "right": "refuerza la idea anterior con algo más fuerte"
              },
              {
                "left": "incluso",
                "right": "destaca un caso extremo dentro de una lista"
              }
            ],
            "explanation": "Los tres conectores añaden información, pero 'es más' intensifica y 'incluso' señala el caso más extremo o inesperado."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "¿Cuál es el uso correcto de 'es por eso que'?",
        "options": [
          "Es por eso que él llegó tarde porque había tráfico.",
          "Había mucho tráfico; es por eso que él llegó tarde.",
          "Es por eso él llegó tarde por el tráfico.",
          "El tráfico es por eso que llegó tarde."
        ],
        "correctIndex": 1,
        "explanation": "'Es por eso que' introduce la consecuencia enfatizada, precedida por la causa ya mencionada en la oración anterior."
      },
      {
        "type": "translate",
        "direction": "es-en",
        "prompt": "Traduce la oración al inglés.",
        "source": "Fue entonces cuando comprendí que había cometido un error.",
        "answer": "It was then that I realized I had made a mistake.",
        "altAnswers": [
          "That was when I realized I had made a mistake."
        ],
        "explanation": "La estructura 'fue entonces cuando' equivale a 'it was then that', y sirve para destacar el momento en que ocurrió la acción."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con el conector de adición adecuado.",
        "sentence": "Todos llegaron tarde a la reunión; ___ el jefe olvidó los documentos.",
        "answer": "incluso",
        "hint": "Destaca un caso extremo o sorprendente dentro de una serie de hechos.",
        "explanation": "'Incluso' señala el hecho más sorprendente o extremo dentro de la enumeración de problemas."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras para formar una oración enfática.",
        "words": [
          "fue",
          "entonces",
          "cuando",
          "decidimos",
          "mudarnos",
          "de",
          "ciudad"
        ],
        "translation": "It was then that we decided to move to another city.",
        "explanation": "La estructura 'fue entonces cuando' destaca el momento exacto de la decisión."
      },
      {
        "type": "multiple-choice",
        "question": "¿Qué diferencia principal hay entre 'ya que' y 'puesto que' frente a 'porque'?",
        "options": [
          "'Porque' nunca puede ir al principio de la oración, mientras que 'ya que' y 'puesto que' sí.",
          "No hay ninguna diferencia; son intercambiables en todos los contextos.",
          "'Ya que' y 'puesto que' solo se usan en preguntas.",
          "'Porque' expresa consecuencia y los otros expresan causa."
        ],
        "correctIndex": 0,
        "explanation": "'Porque' generalmente responde a una pregunta implícita y no suele iniciar la oración, mientras que 'ya que' y 'puesto que' sí pueden colocarse al principio."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con el conector de consecuencia adecuado.",
        "sentence": "El sistema falló varias veces, ___ tuvimos que reiniciar el servidor por completo.",
        "answer": "de modo que",
        "hint": "Conector formal de consecuencia, similar a 'así que' pero más técnico.",
        "explanation": "'De modo que' introduce una consecuencia directa, con un registro algo más formal que 'así que'."
      }
    ]
  },
  {
    "slug": "advanced-connectors-emphasis-drill-3",
    "level": "B2",
    "number": 51,
    "title": "Conectores Avanzados y Estructuras de Énfasis: Práctica Extra, Part 3 of 3",
    "summary": "Practica el uso de conectores de contraste, causa, consecuencia y adición, además de las estructuras enfáticas con 'lo que...es que...' y 'ser + relativo'. Este es un repaso intensivo; se asume que ya conoces estas estructuras.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Énfasis con 'lo que... es que...'",
        "body": [
          "La estructura lo que + verbo + es que sirve para destacar la información que sigue como la parte más importante del enunciado."
        ],
        "examples": [
          {
            "es": "Lo que más me gusta de este barrio es que todo queda cerca.",
            "en": "What I like most about this neighborhood is that everything is nearby."
          },
          {
            "es": "Lo que pasó fue que perdimos el vuelo por el tráfico.",
            "en": "What happened was that we missed the flight because of traffic."
          }
        ],
        "checkpoint": [
          {
            "type": "word-order",
            "prompt": "Ordena las palabras para formar una oración enfática correcta.",
            "words": [
              "lo",
              "que",
              "más",
              "me",
              "molesta",
              "es",
              "que",
              "llegue",
              "tarde"
            ],
            "translation": "What bothers me most is that he/she arrives late.",
            "explanation": "La estructura enfática 'lo que + verbo + es que' coloca el elemento destacado al principio, seguido del verbo 'ser' y la cláusula con 'que'."
          }
        ]
      },
      {
        "heading": "Énfasis con 'ser + relativo'",
        "body": [
          "Las construcciones con ser + cláusula relativa, como fue entonces cuando o es por eso que, resaltan un elemento concreto de la oración."
        ],
        "examples": [
          {
            "es": "Fue entonces cuando comprendí que había cometido un error.",
            "en": "It was then that I realized I had made a mistake."
          },
          {
            "es": "Es por eso que decidí cambiar de trabajo.",
            "en": "That's why I decided to change jobs."
          }
        ],
        "checkpoint": [
          {
            "type": "translate",
            "direction": "en-es",
            "prompt": "Traduce la oración al español usando una estructura enfática.",
            "source": "It was there that we met for the first time.",
            "answer": "Fue allí donde nos conocimos por primera vez.",
            "altAnswers": [
              "Fue ahí donde nos conocimos por primera vez."
            ],
            "explanation": "Se usa 'fue + lugar + donde' para poner énfasis en el lugar en el que ocurrió la acción."
          }
        ]
      },
      {
        "heading": "Repaso de registro: formal e informal",
        "body": [
          "Conviene alternar conectores formales e informales según el contexto y evitar repetir siempre el mismo conector en un mismo texto."
        ],
        "examples": [
          {
            "es": "En un informe se prefiere 'no obstante' y 'por lo tanto'; entre amigos, 'pero' y 'así que'.",
            "en": "In a report, 'no obstante' and 'por lo tanto' are preferred; among friends, 'pero' and 'así que'."
          }
        ],
        "checkpoint": [
          {
            "type": "multi-select",
            "question": "¿Cuáles de estos conectores son apropiados para un texto académico formal?",
            "options": [
              "no obstante",
              "así que",
              "por consiguiente",
              "pero",
              "puesto que"
            ],
            "correctIndexes": [
              0,
              2,
              4
            ],
            "explanation": "'No obstante', 'por consiguiente' y 'puesto que' son propios del registro formal; 'así que' y 'pero' son más coloquiales."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Traduce la oración al español usando una estructura enfática con 'lo que...es que...'.",
        "source": "What I like most about this job is that I can work from home.",
        "answer": "Lo que más me gusta de este trabajo es que puedo trabajar desde casa.",
        "altAnswers": [
          "Lo que más me gusta de este empleo es que puedo trabajar desde casa."
        ],
        "explanation": "La estructura enfática 'lo que + verbo + es que' se usa para destacar el aspecto más importante, en este caso, poder trabajar desde casa."
      },
      {
        "type": "multi-select",
        "question": "¿Cuáles de estas expresiones son estructuras enfáticas?",
        "options": [
          "Lo que más me gusta es que...",
          "Fue entonces cuando...",
          "sin embargo",
          "Es por eso que...",
          "además"
        ],
        "correctIndexes": [
          0,
          1,
          3
        ],
        "explanation": "'Lo que más me gusta es que...', 'Fue entonces cuando...' y 'Es por eso que...' son construcciones enfáticas; 'sin embargo' y 'además' son conectores discursivos, no estructuras de énfasis."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con el conector de contraste adecuado.",
        "sentence": "A mí me encanta el café; ___, mi hermana prefiere el té.",
        "answer": "en cambio",
        "hint": "Contrasta dos oraciones independientes.",
        "explanation": "'En cambio' contrasta dos preferencias distintas expresadas en oraciones independientes."
      },
      {
        "type": "multiple-choice",
        "question": "¿Cuál de estas oraciones usa 'es más' correctamente para reforzar una idea?",
        "options": [
          "Es más tarde de lo que pensaba.",
          "No solo llegó tarde; es más, ni siquiera se disculpó.",
          "Es más grande que el otro edificio.",
          "Es más difícil aprender francés que español."
        ],
        "correctIndex": 1,
        "explanation": "'Es más' se usa aquí como conector discursivo para reforzar una idea negativa anterior, no como comparativo de cantidad o grado."
      },
      {
        "type": "translate",
        "direction": "es-en",
        "prompt": "Traduce la oración al inglés.",
        "source": "Puesto que no llegamos a un acuerdo, la reunión se pospuso para la próxima semana.",
        "answer": "Since we didn't reach an agreement, the meeting was postponed until next week.",
        "altAnswers": [
          "As we did not reach an agreement, the meeting was postponed to next week."
        ],
        "explanation": "'Puesto que' equivale a 'since' o 'as' cuando introducen una causa ya conocida o evidente para el oyente."
      }
    ]
  },
  {
    "slug": "b2-vocabulary-practice-1",
    "level": "B2",
    "number": 52,
    "title": "B2 Vocabulary Practice, Part 1 of 10",
    "summary": "Pon a prueba las 500 palabras del vocabulario de B2, organizadas por lección.",
    "duration": "6 min",
    "sections": [
      {
        "heading": "El arte y la literatura",
        "body": [
          "Las 50 palabras de la Lección 1, agrupadas para repasar."
        ],
        "checkpoint": [
          {
            "type": "matching",
            "instructions": "Empareja cada palabra con su significado (El arte y la literatura, parte 1).",
            "pairs": [
              {
                "left": "el lienzo",
                "right": "la superficie donde se pinta"
              },
              {
                "left": "el pincel",
                "right": "instrumento para pintar"
              },
              {
                "left": "la obra",
                "right": "creación artística"
              },
              {
                "left": "la exposición",
                "right": "muestra pública de arte"
              },
              {
                "left": "la galería",
                "right": "espacio donde se exhibe arte"
              },
              {
                "left": "el retrato",
                "right": "pintura de una persona"
              },
              {
                "left": "el paisaje",
                "right": "pintura de un lugar natural"
              },
              {
                "left": "la escultura",
                "right": "obra tridimensional"
              },
              {
                "left": "esculpir",
                "right": "crear una escultura"
              },
              {
                "left": "el trazo",
                "right": "línea hecha con el pincel o lápiz"
              }
            ],
            "explanation": "Palabras 1-10 de este tema."
          },
          {
            "type": "matching",
            "instructions": "Empareja cada palabra con su significado (El arte y la literatura, parte 2).",
            "pairs": [
              {
                "left": "la técnica",
                "right": "método artístico"
              },
              {
                "left": "la inspiración",
                "right": "impulso creativo"
              },
              {
                "left": "inspirarse en",
                "right": "tomar una idea de algo"
              },
              {
                "left": "plasmar",
                "right": "expresar una idea en una obra"
              },
              {
                "left": "el matiz",
                "right": "variación sutil de color o significado"
              },
              {
                "left": "la obra maestra",
                "right": "creación excepcional"
              },
              {
                "left": "el crítico de arte",
                "right": "quien evalúa obras de arte"
              },
              {
                "left": "la crítica",
                "right": "juicio sobre una obra"
              },
              {
                "left": "la novela",
                "right": "obra narrativa extensa"
              },
              {
                "left": "el cuento",
                "right": "narración breve"
              }
            ],
            "explanation": "Palabras 11-20 de este tema."
          },
          {
            "type": "matching",
            "instructions": "Empareja cada palabra con su significado (El arte y la literatura, parte 3).",
            "pairs": [
              {
                "left": "el poema",
                "right": "composición en verso"
              },
              {
                "left": "la estrofa",
                "right": "parte de un poema"
              },
              {
                "left": "el personaje",
                "right": "figura ficticia en una historia"
              },
              {
                "left": "la trama",
                "right": "sucesión de eventos de una historia"
              },
              {
                "left": "el narrador",
                "right": "quien cuenta la historia"
              },
              {
                "left": "el autor",
                "right": "quien escribe la obra"
              },
              {
                "left": "la editorial",
                "right": "empresa que publica libros"
              },
              {
                "left": "editar",
                "right": "preparar un texto para su publicación"
              },
              {
                "left": "el manuscrito",
                "right": "texto original antes de publicarse"
              },
              {
                "left": "la metáfora",
                "right": "comparación implícita"
              }
            ],
            "explanation": "Palabras 21-30 de este tema."
          },
          {
            "type": "matching",
            "instructions": "Empareja cada palabra con su significado (El arte y la literatura, parte 4).",
            "pairs": [
              {
                "left": "el simbolismo",
                "right": "uso de símbolos para representar ideas"
              },
              {
                "left": "la sátira",
                "right": "crítica mediante humor o ironía"
              },
              {
                "left": "conmovedor",
                "right": "que provoca emoción profunda"
              },
              {
                "left": "provocador",
                "right": "que incita a la reflexión o polémica"
              },
              {
                "left": "el género literario",
                "right": "categoría de una obra"
              },
              {
                "left": "la ficción",
                "right": "narrativa inventada"
              },
              {
                "left": "la reseña",
                "right": "opinión escrita sobre una obra"
              },
              {
                "left": "el tono",
                "right": "la actitud o matiz que transmite un texto o discurso"
              },
              {
                "left": "vanguardista",
                "right": "innovador, adelantado a su época"
              },
              {
                "left": "clásico",
                "right": "de valor reconocido y duradero"
              }
            ],
            "explanation": "Palabras 31-40 de este tema."
          },
          {
            "type": "matching",
            "instructions": "Empareja cada palabra con su significado (El arte y la literatura, parte 5).",
            "pairs": [
              {
                "left": "contemporáneo",
                "right": "de la época actual"
              },
              {
                "left": "el mecenas",
                "right": "quien financia a un artista"
              },
              {
                "left": "el taller",
                "right": "espacio de trabajo del artista"
              },
              {
                "left": "el boceto",
                "right": "dibujo preliminar"
              },
              {
                "left": "la restauración",
                "right": "proceso de reparar una obra dañada"
              },
              {
                "left": "auténtico",
                "right": "genuino, no falsificado"
              },
              {
                "left": "la réplica",
                "right": "copia de una obra original"
              },
              {
                "left": "interpretar",
                "right": "dar significado a una obra"
              },
              {
                "left": "cautivar",
                "right": "atraer fuertemente la atención"
              },
              {
                "left": "el mural",
                "right": "pintura de gran formato realizada directamente sobre un muro"
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
        "question": "¿Cuáles de estas palabras pertenecen al mundo del arte? (Elige todas las correctas)",
        "options": [
          "el lienzo",
          "el escaño",
          "la metáfora",
          "el arancel"
        ],
        "correctIndexes": [
          0,
          2
        ],
        "explanation": "\"El lienzo\" (la superficie sobre la que se pinta) y \"la metáfora\" son términos artísticos y literarios."
      }
    ]
  },
  {
    "slug": "b2-vocabulary-practice-2",
    "level": "B2",
    "number": 53,
    "title": "B2 Vocabulary Practice, Part 2 of 10",
    "summary": "Pon a prueba las 500 palabras del vocabulario de B2, organizadas por lección.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "La política y el gobierno",
        "body": [
          "Las 50 palabras de la Lección 2, agrupadas para repasar."
        ],
        "checkpoint": [
          {
            "type": "matching",
            "instructions": "Empareja cada palabra con su significado (La política y el gobierno, parte 1).",
            "pairs": [
              {
                "left": "el ministerio",
                "right": "departamento oficial encargado de un área del estado"
              },
              {
                "left": "el estado",
                "right": "entidad política y territorial"
              },
              {
                "left": "la democracia",
                "right": "sistema de gobierno del pueblo"
              },
              {
                "left": "el ciudadano",
                "right": "miembro de un estado con derechos y deberes"
              },
              {
                "left": "el senado",
                "right": "cámara legislativa alta"
              },
              {
                "left": "el congreso",
                "right": "cuerpo legislativo"
              },
              {
                "left": "el diputado",
                "right": "representante electo en el congreso"
              },
              {
                "left": "el partido político",
                "right": "organización con una ideología común"
              },
              {
                "left": "la campaña electoral",
                "right": "período de promoción antes de una elección"
              },
              {
                "left": "el electorado",
                "right": "conjunto de votantes"
              }
            ],
            "explanation": "Palabras 1-10 de este tema."
          },
          {
            "type": "matching",
            "instructions": "Empareja cada palabra con su significado (La política y el gobierno, parte 2).",
            "pairs": [
              {
                "left": "promulgar",
                "right": "hacer oficial una ley"
              },
              {
                "left": "el decreto",
                "right": "orden con fuerza de ley"
              },
              {
                "left": "la constitución",
                "right": "ley fundamental de un país"
              },
              {
                "left": "el poder judicial",
                "right": "rama que interpreta las leyes"
              },
              {
                "left": "la reforma",
                "right": "cambio significativo en un sistema"
              },
              {
                "left": "la subvención",
                "right": "ayuda económica que otorga el estado"
              },
              {
                "left": "el presupuesto público",
                "right": "plan de gastos del gobierno"
              },
              {
                "left": "la corrupción",
                "right": "abuso del poder para beneficio propio"
              },
              {
                "left": "la transparencia",
                "right": "claridad y apertura en la gestión pública"
              },
              {
                "left": "rendir cuentas",
                "right": "responder por las propias acciones"
              }
            ],
            "explanation": "Palabras 11-20 de este tema."
          },
          {
            "type": "matching",
            "instructions": "Empareja cada palabra con su significado (La política y el gobierno, parte 3).",
            "pairs": [
              {
                "left": "el discurso",
                "right": "declaración pública, a menudo política"
              },
              {
                "left": "la soberanía",
                "right": "autoridad suprema de un estado"
              },
              {
                "left": "la diplomacia",
                "right": "manejo de relaciones entre países"
              },
              {
                "left": "el tratado",
                "right": "acuerdo formal entre estados"
              },
              {
                "left": "la política exterior",
                "right": "relaciones de un país con otros"
              },
              {
                "left": "la oposición",
                "right": "grupo político contrario al gobierno"
              },
              {
                "left": "el mandato",
                "right": "período de gobierno de un cargo electo"
              },
              {
                "left": "gobernar",
                "right": "dirigir un estado"
              },
              {
                "left": "el poder ejecutivo",
                "right": "rama que aplica las leyes"
              },
              {
                "left": "la abstención",
                "right": "acción de no votar"
              }
            ],
            "explanation": "Palabras 21-30 de este tema."
          },
          {
            "type": "matching",
            "instructions": "Empareja cada palabra con su significado (La política y el gobierno, parte 4).",
            "pairs": [
              {
                "left": "el sufragio",
                "right": "derecho al voto"
              },
              {
                "left": "el referéndum",
                "right": "consulta directa al pueblo sobre un tema"
              },
              {
                "left": "la manifestación pacífica",
                "right": "protesta sin violencia"
              },
              {
                "left": "el activista",
                "right": "persona que promueve una causa social"
              },
              {
                "left": "la igualdad",
                "right": "trato equitativo entre personas"
              },
              {
                "left": "la justicia social",
                "right": "equidad en la distribución de recursos y derechos"
              },
              {
                "left": "el derecho civil",
                "right": "libertad garantizada al ciudadano"
              },
              {
                "left": "la sociedad civil",
                "right": "conjunto de organizaciones no gubernamentales"
              },
              {
                "left": "polarizado",
                "right": "dividido en posturas opuestas"
              },
              {
                "left": "moderado",
                "right": "que evita posturas extremas"
              }
            ],
            "explanation": "Palabras 31-40 de este tema."
          },
          {
            "type": "matching",
            "instructions": "Empareja cada palabra con su significado (La política y el gobierno, parte 5).",
            "pairs": [
              {
                "left": "radical",
                "right": "partidario de cambios profundos y drásticos"
              },
              {
                "left": "el electorado indeciso",
                "right": "votantes sin preferencia clara"
              },
              {
                "left": "la urna",
                "right": "recipiente donde se depositan los votos"
              },
              {
                "left": "el escrutinio",
                "right": "conteo oficial de los votos"
              },
              {
                "left": "el escaño",
                "right": "puesto que se ocupa en un parlamento tras ganar una elección"
              },
              {
                "left": "la plataforma política",
                "right": "conjunto de propuestas de un partido"
              },
              {
                "left": "el mandato popular",
                "right": "autoridad otorgada por el voto ciudadano"
              },
              {
                "left": "la asamblea",
                "right": "reunión de representantes para deliberar"
              },
              {
                "left": "el veto",
                "right": "poder de rechazar una decisión"
              },
              {
                "left": "la coalición",
                "right": "alianza entre partidos o grupos políticos"
              }
            ],
            "explanation": "Palabras 41-50 de este tema."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "fill-blank",
        "prompt": "Completa con la palabra correcta.",
        "sentence": "El candidato perdió su ___ en el parlamento tras las elecciones.",
        "answer": "escaño",
        "explanation": "\"El escaño\" es el puesto que ocupa un representante en el parlamento."
      }
    ]
  },
  {
    "slug": "b2-vocabulary-practice-3",
    "level": "B2",
    "number": 54,
    "title": "B2 Vocabulary Practice, Part 3 of 10",
    "summary": "Pon a prueba las 500 palabras del vocabulario de B2, organizadas por lección.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "Los sueños y la imaginación",
        "body": [
          "Las 50 palabras de la Lección 3, agrupadas para repasar."
        ],
        "checkpoint": [
          {
            "type": "matching",
            "instructions": "Empareja cada palabra con su significado (Los sueños y la imaginación, parte 1).",
            "pairs": [
              {
                "left": "el deseo ferviente",
                "right": "aspiración muy fuerte de conseguir algo"
              },
              {
                "left": "soñar despierto",
                "right": "imaginar mientras se está consciente"
              },
              {
                "left": "la fantasía",
                "right": "producto de la imaginación"
              },
              {
                "left": "imaginario",
                "right": "que no existe en la realidad"
              },
              {
                "left": "la pesadilla",
                "right": "sueño angustiante"
              },
              {
                "left": "el subconsciente",
                "right": "parte de la mente fuera de la conciencia"
              },
              {
                "left": "anhelar",
                "right": "desear intensamente algo"
              },
              {
                "left": "el anhelo",
                "right": "deseo profundo"
              },
              {
                "left": "aspirar a",
                "right": "tener como meta"
              },
              {
                "left": "la aspiración",
                "right": "meta o deseo elevado"
              }
            ],
            "explanation": "Palabras 1-10 de este tema."
          },
          {
            "type": "matching",
            "instructions": "Empareja cada palabra con su significado (Los sueños y la imaginación, parte 2).",
            "pairs": [
              {
                "left": "vislumbrar",
                "right": "percibir algo de forma vaga o incipiente"
              },
              {
                "left": "concebir",
                "right": "formar una idea en la mente"
              },
              {
                "left": "idear",
                "right": "crear un plan o idea"
              },
              {
                "left": "el ideal",
                "right": "modelo perfecto imaginado"
              },
              {
                "left": "utópico",
                "right": "que representa un ideal difícil de alcanzar"
              },
              {
                "left": "la ilusión",
                "right": "esperanza o imagen mental sin base sólida"
              },
              {
                "left": "ilusionarse",
                "right": "hacerse esperanzas sobre algo"
              },
              {
                "left": "la ensoñación",
                "right": "estado de ensimismamiento imaginativo"
              },
              {
                "left": "evocar",
                "right": "traer un recuerdo o imagen a la mente"
              },
              {
                "left": "la evasión",
                "right": "escape mental de la realidad"
              }
            ],
            "explanation": "Palabras 11-20 de este tema."
          },
          {
            "type": "matching",
            "instructions": "Empareja cada palabra con su significado (Los sueños y la imaginación, parte 3).",
            "pairs": [
              {
                "left": "etéreo",
                "right": "ligero, casi irreal"
              },
              {
                "left": "surrealista",
                "right": "que combina lo real con lo fantástico"
              },
              {
                "left": "lo insólito",
                "right": "lo inusual o extraordinario"
              },
              {
                "left": "desbordar la imaginación",
                "right": "superar los límites de lo imaginable"
              },
              {
                "left": "la premonición",
                "right": "sensación de que algo va a pasar"
              },
              {
                "left": "presentir",
                "right": "sentir que algo va a ocurrir"
              },
              {
                "left": "el sino",
                "right": "fuerza que, según la creencia popular, determina el curso de la vida"
              },
              {
                "left": "la incertidumbre",
                "right": "falta de certeza sobre el futuro"
              },
              {
                "left": "el potencial",
                "right": "capacidad no realizada aún"
              },
              {
                "left": "realizarse",
                "right": "cumplir una meta o sueño"
              }
            ],
            "explanation": "Palabras 21-30 de este tema."
          },
          {
            "type": "matching",
            "instructions": "Empareja cada palabra con su significado (Los sueños y la imaginación, parte 4).",
            "pairs": [
              {
                "left": "plasmar un sueño",
                "right": "hacer realidad una idea"
              },
              {
                "left": "perseguir un sueño",
                "right": "trabajar activamente para lograrlo"
              },
              {
                "left": "el obstáculo",
                "right": "impedimento en el camino"
              },
              {
                "left": "la determinación",
                "right": "firmeza en lograr algo"
              },
              {
                "left": "inquebrantable",
                "right": "que no se puede romper o debilitar"
              },
              {
                "left": "la vacilación",
                "right": "falta de decisión firme ante algo"
              },
              {
                "left": "el escepticismo",
                "right": "actitud de duda ante algo"
              },
              {
                "left": "visionario",
                "right": "que tiene ideas innovadoras sobre el futuro"
              },
              {
                "left": "la clarividencia",
                "right": "capacidad de percibir con claridad más allá de lo evidente"
              },
              {
                "left": "el despertar",
                "right": "momento de tomar plena consciencia"
              }
            ],
            "explanation": "Palabras 31-40 de este tema."
          },
          {
            "type": "matching",
            "instructions": "Empareja cada palabra con su significado (Los sueños y la imaginación, parte 5).",
            "pairs": [
              {
                "left": "meditar",
                "right": "reflexionar profundamente"
              },
              {
                "left": "la epifanía",
                "right": "comprensión súbita y reveladora"
              },
              {
                "left": "el propósito",
                "right": "razón de ser de algo"
              },
              {
                "left": "la vocación",
                "right": "inclinación natural hacia una actividad"
              },
              {
                "left": "trascender",
                "right": "ir más allá de un límite"
              },
              {
                "left": "materializarse",
                "right": "volverse real o tangible"
              },
              {
                "left": "el porvenir",
                "right": "el futuro"
              },
              {
                "left": "la quimera",
                "right": "ilusión o deseo imposible de realizar"
              },
              {
                "left": "el ensimismamiento",
                "right": "estado de estar absorto en los propios pensamientos"
              },
              {
                "left": "lo onírico",
                "right": "relacionado con los sueños"
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
        "instructions": "Empareja cada palabra de tecnología con su significado.",
        "pairs": [
          {
            "left": "el algoritmo",
            "right": "conjunto de pasos para resolver un problema"
          },
          {
            "left": "la brecha digital",
            "right": "la desigualdad de acceso a la tecnología"
          },
          {
            "left": "el servidor",
            "right": "sistema que almacena y procesa datos a distancia"
          },
          {
            "left": "automatizar",
            "right": "hacer que un proceso funcione sin intervención humana"
          },
          {
            "left": "el sesgo",
            "right": "una inclinación o prejuicio no intencionado"
          }
        ],
        "explanation": "Estas cinco palabras aparecen frecuentemente al hablar de tecnología e inteligencia artificial."
      }
    ]
  },
  {
    "slug": "b2-vocabulary-practice-4",
    "level": "B2",
    "number": 55,
    "title": "B2 Vocabulary Practice, Part 4 of 10",
    "summary": "Pon a prueba las 500 palabras del vocabulario de B2, organizadas por lección.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "La tecnología y la inteligencia artificial",
        "body": [
          "Las 50 palabras de la Lección 4, agrupadas para repasar."
        ],
        "checkpoint": [
          {
            "type": "matching",
            "instructions": "Empareja cada palabra con su significado (La tecnología y la inteligencia artificial, parte 1).",
            "pairs": [
              {
                "left": "la inteligencia artificial",
                "right": "sistemas capaces de simular procesos de razonamiento humano"
              },
              {
                "left": "el algoritmo",
                "right": "conjunto de instrucciones para resolver un problema"
              },
              {
                "left": "el aprendizaje automático",
                "right": "capacidad de un sistema de mejorar con la experiencia"
              },
              {
                "left": "la red neuronal",
                "right": "modelo computacional inspirado en el cerebro"
              },
              {
                "left": "el dato",
                "right": "unidad básica de información"
              },
              {
                "left": "procesar",
                "right": "analizar información sistemáticamente"
              },
              {
                "left": "automatizar",
                "right": "hacer que un proceso funcione sin intervención humana"
              },
              {
                "left": "la automatización",
                "right": "sustitución del trabajo manual por máquinas"
              },
              {
                "left": "el robot",
                "right": "máquina programable capaz de realizar tareas"
              },
              {
                "left": "la robótica",
                "right": "ciencia que diseña y construye robots"
              }
            ],
            "explanation": "Palabras 1-10 de este tema."
          },
          {
            "type": "matching",
            "instructions": "Empareja cada palabra con su significado (La tecnología y la inteligencia artificial, parte 2).",
            "pairs": [
              {
                "left": "el sensor",
                "right": "dispositivo que detecta cambios físicos"
              },
              {
                "left": "el servidor",
                "right": "sistema que almacena y procesa datos a distancia"
              },
              {
                "left": "el software",
                "right": "programas que hacen funcionar una computadora"
              },
              {
                "left": "el hardware",
                "right": "componentes físicos de un dispositivo"
              },
              {
                "left": "programar",
                "right": "escribir instrucciones para una computadora"
              },
              {
                "left": "el desarrollador",
                "right": "persona que crea programas"
              },
              {
                "left": "la ciberseguridad",
                "right": "protección de sistemas contra ataques digitales"
              },
              {
                "left": "el hackeo",
                "right": "acceso no autorizado a un sistema"
              },
              {
                "left": "cifrar",
                "right": "proteger información mediante un código"
              },
              {
                "left": "la privacidad de datos",
                "right": "control sobre la información personal"
              }
            ],
            "explanation": "Palabras 11-20 de este tema."
          },
          {
            "type": "matching",
            "instructions": "Empareja cada palabra con su significado (La tecnología y la inteligencia artificial, parte 3).",
            "pairs": [
              {
                "left": "la ética",
                "right": "principios que guían el comportamiento correcto"
              },
              {
                "left": "el sesgo",
                "right": "inclinación injusta o desequilibrada"
              },
              {
                "left": "el impacto social",
                "right": "efecto de algo sobre la sociedad"
              },
              {
                "left": "desplazar (empleos)",
                "right": "reemplazar puestos de trabajo"
              },
              {
                "left": "la eficiencia",
                "right": "capacidad de lograr algo con el mínimo esfuerzo"
              },
              {
                "left": "optimizar",
                "right": "mejorar el rendimiento de algo"
              },
              {
                "left": "la innovación",
                "right": "introducción de algo nuevo"
              },
              {
                "left": "innovador",
                "right": "que introduce novedades"
              },
              {
                "left": "de vanguardia",
                "right": "en la posición más avanzada de un campo"
              },
              {
                "left": "obsoleto",
                "right": "que ya no es útil o moderno"
              }
            ],
            "explanation": "Palabras 21-30 de este tema."
          },
          {
            "type": "matching",
            "instructions": "Empareja cada palabra con su significado (La tecnología y la inteligencia artificial, parte 4).",
            "pairs": [
              {
                "left": "el dispositivo",
                "right": "aparato tecnológico"
              },
              {
                "left": "la interfaz",
                "right": "punto de interacción entre humano y máquina"
              },
              {
                "left": "el reconocimiento facial",
                "right": "tecnología que identifica rostros"
              },
              {
                "left": "el asistente virtual",
                "right": "programa que responde a comandos de voz"
              },
              {
                "left": "la realidad virtual",
                "right": "simulación digital de un entorno"
              },
              {
                "left": "la realidad aumentada",
                "right": "superposición de elementos digitales sobre el mundo real"
              },
              {
                "left": "la simulación",
                "right": "representación artificial de una situación real"
              },
              {
                "left": "predecir",
                "right": "anticipar algo antes de que ocurra"
              },
              {
                "left": "el modelo predictivo",
                "right": "sistema que estima resultados futuros"
              },
              {
                "left": "la brecha digital",
                "right": "desigualdad en el acceso a la tecnología"
              }
            ],
            "explanation": "Palabras 31-40 de este tema."
          },
          {
            "type": "matching",
            "instructions": "Empareja cada palabra con su significado (La tecnología y la inteligencia artificial, parte 5).",
            "pairs": [
              {
                "left": "regular (una industria)",
                "right": "establecer normas para controlar algo"
              },
              {
                "left": "la normativa",
                "right": "conjunto de reglas oficiales"
              },
              {
                "left": "el avance tecnológico",
                "right": "progreso en el desarrollo de tecnología"
              },
              {
                "left": "irreversible",
                "right": "que no se puede deshacer"
              },
              {
                "left": "el riesgo existencial",
                "right": "amenaza a la supervivencia misma"
              },
              {
                "left": "la singularidad tecnológica",
                "right": "punto hipotético donde la IA supera la inteligencia humana"
              },
              {
                "left": "la autonomía",
                "right": "capacidad de actuar sin control externo"
              },
              {
                "left": "supervisar",
                "right": "controlar o vigilar un proceso"
              },
              {
                "left": "confiable",
                "right": "digno de confianza"
              },
              {
                "left": "la transparencia algorítmica",
                "right": "claridad sobre cómo funciona un sistema"
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
        "question": "¿Qué palabra describe el sentimiento de culpa que alguien siente al arrepentirse profundamente de una decisión?",
        "options": [
          "el remordimiento",
          "la ilusión",
          "el desenlace",
          "el empeño"
        ],
        "correctIndex": 0,
        "explanation": "\"El remordimiento\" es el sentimiento de culpa por algo que se hizo o se dejó de hacer."
      }
    ]
  },
  {
    "slug": "b2-vocabulary-practice-5",
    "level": "B2",
    "number": 56,
    "title": "B2 Vocabulary Practice, Part 5 of 10",
    "summary": "Pon a prueba las 500 palabras del vocabulario de B2, organizadas por lección.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Los arrepentimientos y las decisiones de vida",
        "body": [
          "Las 50 palabras de la Lección 5, agrupadas para repasar."
        ],
        "checkpoint": [
          {
            "type": "matching",
            "instructions": "Empareja cada palabra con su significado (Los arrepentimientos y las decisiones de vida, parte 1).",
            "pairs": [
              {
                "left": "el arrepentimiento",
                "right": "sentimiento de pesar por algo hecho o no hecho"
              },
              {
                "left": "arrepentirse de",
                "right": "sentir pesar por una acción propia"
              },
              {
                "left": "la encrucijada",
                "right": "momento de decisión difícil"
              },
              {
                "left": "la bifurcación",
                "right": "punto donde un camino se divide"
              },
              {
                "left": "el rumbo",
                "right": "dirección que toma la vida de alguien"
              },
              {
                "left": "replantearse",
                "right": "reconsiderar algo desde cero"
              },
              {
                "left": "la disyuntiva",
                "right": "situación con dos opciones incompatibles"
              },
              {
                "left": "sopesar",
                "right": "evaluar cuidadosamente los pros y contras"
              },
              {
                "left": "la consecuencia",
                "right": "resultado de una acción"
              },
              {
                "left": "irrevocable",
                "right": "que no se puede cambiar ni deshacer"
              }
            ],
            "explanation": "Palabras 1-10 de este tema."
          },
          {
            "type": "matching",
            "instructions": "Empareja cada palabra con su significado (Los arrepentimientos y las decisiones de vida, parte 2).",
            "pairs": [
              {
                "left": "el punto de no retorno",
                "right": "momento después del cual algo no se puede revertir"
              },
              {
                "left": "postergar",
                "right": "aplazar algo para después"
              },
              {
                "left": "la oportunidad perdida",
                "right": "posibilidad que no se aprovechó"
              },
              {
                "left": "dejar pasar",
                "right": "no aprovechar algo a tiempo"
              },
              {
                "left": "el camino no tomado",
                "right": "opción que no se eligió"
              },
              {
                "left": "cuestionarse",
                "right": "dudar de las propias decisiones"
              },
              {
                "left": "la resiliencia",
                "right": "capacidad de recuperarse ante la adversidad"
              },
              {
                "left": "aprender de los errores",
                "right": "extraer lecciones de las equivocaciones"
              },
              {
                "left": "hacer las paces (con algo)",
                "right": "aceptar y reconciliarse con una situación"
              },
              {
                "left": "el peso de la culpa",
                "right": "carga emocional de sentirse responsable"
              }
            ],
            "explanation": "Palabras 11-20 de este tema."
          },
          {
            "type": "matching",
            "instructions": "Empareja cada palabra con su significado (Los arrepentimientos y las decisiones de vida, parte 3).",
            "pairs": [
              {
                "left": "liberarse de",
                "right": "dejar atrás una carga emocional"
              },
              {
                "left": "mirar hacia atrás",
                "right": "reflexionar sobre el pasado"
              },
              {
                "left": "mirar hacia adelante",
                "right": "enfocarse en el futuro"
              },
              {
                "left": "el balance de vida",
                "right": "evaluación general de las propias decisiones"
              },
              {
                "left": "la sabiduría",
                "right": "conocimiento profundo obtenido con la experiencia"
              },
              {
                "left": "apreciar",
                "right": "reconocer el mérito o el valor de algo"
              },
              {
                "left": "dar por sentado",
                "right": "no apreciar algo por considerarlo garantizado"
              },
              {
                "left": "el segundo intento",
                "right": "nueva oportunidad después de un fracaso"
              },
              {
                "left": "el punto de inflexión",
                "right": "momento decisivo que cambia el curso de algo"
              },
              {
                "left": "asumir la responsabilidad",
                "right": "aceptar las consecuencias de las propias acciones"
              }
            ],
            "explanation": "Palabras 21-30 de este tema."
          },
          {
            "type": "matching",
            "instructions": "Empareja cada palabra con su significado (Los arrepentimientos y las decisiones de vida, parte 4).",
            "pairs": [
              {
                "left": "perdonarse a uno mismo",
                "right": "dejar de culparse por algo"
              },
              {
                "left": "el legado",
                "right": "lo que una persona deja tras de sí"
              },
              {
                "left": "trascender un error",
                "right": "superar algo negativo del pasado"
              },
              {
                "left": "la brújula moral",
                "right": "sentido interno de lo correcto e incorrecto"
              },
              {
                "left": "dejarse llevar",
                "right": "actuar sin planear, guiado por el momento"
              },
              {
                "left": "la prudencia",
                "right": "cautela al tomar decisiones"
              },
              {
                "left": "el arrepentimiento tardío",
                "right": "pesar que llega después de que ya no se puede actuar"
              },
              {
                "left": "aceptar la incertidumbre",
                "right": "hacer las paces con lo desconocido"
              },
              {
                "left": "el desenlace",
                "right": "resultado final de una situación"
              },
              {
                "left": "lo irremediable",
                "right": "lo que ya no tiene solución"
              }
            ],
            "explanation": "Palabras 31-40 de este tema."
          },
          {
            "type": "matching",
            "instructions": "Empareja cada palabra con su significado (Los arrepentimientos y las decisiones de vida, parte 5).",
            "pairs": [
              {
                "left": "superar",
                "right": "vencer una dificultad o un obstáculo"
              },
              {
                "left": "la gratitud",
                "right": "sentimiento de aprecio por lo vivido"
              },
              {
                "left": "el propósito de vida",
                "right": "sentido profundo que guía las decisiones"
              },
              {
                "left": "evolucionar como persona",
                "right": "crecer y cambiar positivamente con el tiempo"
              },
              {
                "left": "la plenitud",
                "right": "sensación de satisfacción completa"
              },
              {
                "left": "el remordimiento",
                "right": "sentimiento intenso de culpa por algo hecho"
              },
              {
                "left": "la nostalgia",
                "right": "añoranza del pasado"
              },
              {
                "left": "la lección aprendida",
                "right": "enseñanza obtenida de una experiencia"
              },
              {
                "left": "el destino alternativo",
                "right": "posible curso de vida distinto al vivido"
              },
              {
                "left": "aceptar el pasado",
                "right": "hacer las paces con lo ya ocurrido"
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
        "question": "¿Cuáles palabras se relacionan con el periodismo? (Elige todas las correctas)",
        "options": [
          "el cronista",
          "el encabezado",
          "la premisa",
          "verificar"
        ],
        "correctIndexes": [
          0,
          1,
          3
        ],
        "explanation": "\"La premisa\" pertenece al tema del debate y la argumentación, no del periodismo."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa con la palabra correcta.",
        "sentence": "Es una persona muy ___: siempre analiza sus propios sentimientos.",
        "answer": "introspectiva",
        "explanation": "\"Introspectivo/a\" describe a alguien que examina su propia mente y emociones."
      }
    ]
  },
  {
    "slug": "b2-vocabulary-practice-6",
    "level": "B2",
    "number": 57,
    "title": "B2 Vocabulary Practice, Part 6 of 10",
    "summary": "Pon a prueba las 500 palabras del vocabulario de B2, organizadas por lección.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "El periodismo y los medios de comunicación",
        "body": [
          "Las 50 palabras de la Lección 6, agrupadas para repasar."
        ],
        "checkpoint": [
          {
            "type": "matching",
            "instructions": "Empareja cada palabra con su significado (El periodismo y los medios de comunicación, parte 1).",
            "pairs": [
              {
                "left": "el cronista",
                "right": "periodista que narra los hechos con detalle"
              },
              {
                "left": "el informante",
                "right": "persona que proporciona datos a un periodista"
              },
              {
                "left": "parafrasear",
                "right": "expresar con otras palabras lo que alguien dijo"
              },
              {
                "left": "el portavoz",
                "right": "persona que habla en nombre de un grupo"
              },
              {
                "left": "manifestar",
                "right": "expresar una postura de forma clara y pública"
              },
              {
                "left": "la declaración",
                "right": "afirmación pública y oficial"
              },
              {
                "left": "el comunicado de prensa",
                "right": "anuncio oficial dirigido a los medios"
              },
              {
                "left": "cubrir (una noticia)",
                "right": "reportar sobre un evento"
              },
              {
                "left": "la cobertura mediática",
                "right": "atención que los medios dan a un tema"
              },
              {
                "left": "el encabezado",
                "right": "frase destacada al inicio de una noticia"
              }
            ],
            "explanation": "Palabras 1-10 de este tema."
          },
          {
            "type": "matching",
            "instructions": "Empareja cada palabra con su significado (El periodismo y los medios de comunicación, parte 2).",
            "pairs": [
              {
                "left": "el editorial",
                "right": "artículo de opinión de un medio"
              },
              {
                "left": "imparcial",
                "right": "que no favorece ningún lado"
              },
              {
                "left": "el sesgo mediático",
                "right": "inclinación de un medio hacia una perspectiva"
              },
              {
                "left": "la desinformación",
                "right": "información falsa difundida intencionalmente"
              },
              {
                "left": "verificar los hechos",
                "right": "confirmar que una información es correcta"
              },
              {
                "left": "la credibilidad",
                "right": "cualidad de ser digno de confianza"
              },
              {
                "left": "el corresponsal",
                "right": "periodista que reporta desde otro lugar"
              },
              {
                "left": "la primicia",
                "right": "noticia publicada antes que otros medios"
              },
              {
                "left": "filtrar información",
                "right": "revelar datos de forma no autorizada"
              },
              {
                "left": "el anonimato",
                "right": "condición de no revelar la identidad"
              }
            ],
            "explanation": "Palabras 11-20 de este tema."
          },
          {
            "type": "matching",
            "instructions": "Empareja cada palabra con su significado (El periodismo y los medios de comunicación, parte 3).",
            "pairs": [
              {
                "left": "el reportaje de investigación",
                "right": "trabajo periodístico profundo sobre un tema"
              },
              {
                "left": "la difusión",
                "right": "acción de dar a conocer algo ampliamente"
              },
              {
                "left": "viralizarse",
                "right": "propagarse rápidamente en internet"
              },
              {
                "left": "la opinión pública",
                "right": "actitud general de la sociedad sobre un tema"
              },
              {
                "left": "influir en",
                "right": "afectar el pensamiento o comportamiento de otros"
              },
              {
                "left": "la libertad de prensa",
                "right": "derecho de los medios a informar sin censura"
              },
              {
                "left": "censurar",
                "right": "prohibir la difusión de cierta información"
              },
              {
                "left": "la transparencia informativa",
                "right": "claridad sobre cómo se obtiene la información"
              },
              {
                "left": "el conflicto de interés",
                "right": "situación donde intereses personales afectan la imparcialidad"
              },
              {
                "left": "el archivo periodístico",
                "right": "colección histórica de publicaciones"
              }
            ],
            "explanation": "Palabras 21-30 de este tema."
          },
          {
            "type": "matching",
            "instructions": "Empareja cada palabra con su significado (El periodismo y los medios de comunicación, parte 4).",
            "pairs": [
              {
                "left": "la exclusiva",
                "right": "noticia que solo un medio publica"
              },
              {
                "left": "desacreditar",
                "right": "quitarle credibilidad a una afirmación o persona"
              },
              {
                "left": "aclarar",
                "right": "explicar algo para eliminar la confusión"
              },
              {
                "left": "el embargo informativo",
                "right": "acuerdo de no publicar algo hasta cierta fecha"
              },
              {
                "left": "el testigo presencial",
                "right": "persona que vio un evento directamente"
              },
              {
                "left": "la especulación",
                "right": "suposición sin confirmación oficial"
              },
              {
                "left": "verificar",
                "right": "comprobar que algo es exacto"
              },
              {
                "left": "el consenso mediático",
                "right": "acuerdo general entre distintos medios sobre un hecho"
              },
              {
                "left": "la polarización informativa",
                "right": "división marcada en cómo se interpreta la información"
              },
              {
                "left": "el algoritmo de noticias",
                "right": "sistema que selecciona qué contenido mostrar a cada usuario"
              }
            ],
            "explanation": "Palabras 31-40 de este tema."
          },
          {
            "type": "matching",
            "instructions": "Empareja cada palabra con su significado (El periodismo y los medios de comunicación, parte 5).",
            "pairs": [
              {
                "left": "la cámara de eco",
                "right": "entorno donde solo se escuchan opiniones similares"
              },
              {
                "left": "el análisis crítico",
                "right": "evaluación cuidadosa y razonada de una información"
              },
              {
                "left": "contrastar fuentes",
                "right": "comparar distintas versiones de un hecho"
              },
              {
                "left": "el derecho a réplica",
                "right": "posibilidad de responder públicamente a una acusación"
              },
              {
                "left": "la ética periodística",
                "right": "principios que guían el trabajo del periodista"
              },
              {
                "left": "investigar a fondo",
                "right": "examinar un tema con mucho detalle"
              },
              {
                "left": "la nota de última hora",
                "right": "información urgente y reciente"
              },
              {
                "left": "el enfoque narrativo",
                "right": "manera en que se presenta una historia"
              },
              {
                "left": "la objetividad",
                "right": "cualidad de no dejarse influir por opiniones personales"
              },
              {
                "left": "el rotativo",
                "right": "periódico, especialmente uno de tirada diaria"
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
        "instructions": "Empareja cada palabra sobre el desarrollo personal con su significado.",
        "pairs": [
          {
            "left": "la transformación",
            "right": "proceso profundo de convertirse en algo distinto"
          },
          {
            "left": "progresar",
            "right": "avanzar hacia una meta con el paso del tiempo"
          },
          {
            "left": "prosperar",
            "right": "alcanzar un buen desarrollo o éxito"
          },
          {
            "left": "la estabilidad",
            "right": "condición de mantenerse firme y constante"
          },
          {
            "left": "fortalecerse",
            "right": "volverse más firme o resistente con el tiempo"
          }
        ],
        "explanation": "Estas cinco palabras describen el proceso de cambiar y crecer como persona."
      }
    ]
  },
  {
    "slug": "b2-vocabulary-practice-7",
    "level": "B2",
    "number": 58,
    "title": "B2 Vocabulary Practice, Part 7 of 10",
    "summary": "Pon a prueba las 500 palabras del vocabulario de B2, organizadas por lección.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "La psicología y la personalidad",
        "body": [
          "Las 50 palabras de la Lección 7, agrupadas para repasar."
        ],
        "checkpoint": [
          {
            "type": "matching",
            "instructions": "Empareja cada palabra con su significado (La psicología y la personalidad, parte 1).",
            "pairs": [
              {
                "left": "la personalidad",
                "right": "conjunto de rasgos que definen a una persona"
              },
              {
                "left": "el rasgo",
                "right": "característica particular de alguien"
              },
              {
                "left": "el temperamento",
                "right": "manera natural de reaccionar emocionalmente"
              },
              {
                "left": "introvertido",
                "right": "que prefiere la reflexión interna a la interacción social"
              },
              {
                "left": "extrovertido",
                "right": "que se energiza mediante la interacción social"
              },
              {
                "left": "empático",
                "right": "capaz de comprender los sentimientos ajenos"
              },
              {
                "left": "la empatía",
                "right": "capacidad de ponerse en el lugar de otro"
              },
              {
                "left": "la autoestima",
                "right": "valoración que una persona tiene de sí misma"
              },
              {
                "left": "la inseguridad",
                "right": "falta de confianza en uno mismo"
              },
              {
                "left": "la ansiedad",
                "right": "estado de inquietud o preocupación intensa"
              }
            ],
            "explanation": "Palabras 1-10 de este tema."
          },
          {
            "type": "matching",
            "instructions": "Empareja cada palabra con su significado (La psicología y la personalidad, parte 2).",
            "pairs": [
              {
                "left": "el estrés",
                "right": "tensión física o mental provocada por exigencias"
              },
              {
                "left": "gestionar las emociones",
                "right": "manejar los propios sentimientos de forma saludable"
              },
              {
                "left": "la autoconciencia",
                "right": "capacidad de reconocer los propios pensamientos y emociones"
              },
              {
                "left": "el mecanismo de defensa",
                "right": "estrategia inconsciente para protegerse emocionalmente"
              },
              {
                "left": "reprimir",
                "right": "contener una emoción sin expresarla"
              },
              {
                "left": "proyectar",
                "right": "atribuir a otros los propios sentimientos"
              },
              {
                "left": "la terapia",
                "right": "tratamiento para mejorar el bienestar mental"
              },
              {
                "left": "el terapeuta",
                "right": "profesional que guía procesos terapéuticos"
              },
              {
                "left": "el vínculo afectivo",
                "right": "conexión emocional entre personas"
              },
              {
                "left": "el apego",
                "right": "lazo emocional profundo con otra persona"
              }
            ],
            "explanation": "Palabras 11-20 de este tema."
          },
          {
            "type": "matching",
            "instructions": "Empareja cada palabra con su significado (La psicología y la personalidad, parte 3).",
            "pairs": [
              {
                "left": "la vulnerabilidad",
                "right": "estado de estar expuesto emocionalmente"
              },
              {
                "left": "la resiliencia emocional",
                "right": "capacidad de recuperarse ante la adversidad"
              },
              {
                "left": "el patrón de comportamiento",
                "right": "forma repetida de actuar"
              },
              {
                "left": "la conducta",
                "right": "manera de comportarse"
              },
              {
                "left": "el instinto",
                "right": "impulso natural no razonado"
              },
              {
                "left": "la motivación",
                "right": "impulso que dirige el comportamiento hacia una meta"
              },
              {
                "left": "la autorrealización",
                "right": "logro pleno del propio potencial"
              },
              {
                "left": "el autoconocimiento",
                "right": "comprensión profunda de uno mismo"
              },
              {
                "left": "la introspección",
                "right": "examen de los propios pensamientos"
              },
              {
                "left": "proyectar confianza",
                "right": "transmitir seguridad a los demás"
              }
            ],
            "explanation": "Palabras 21-30 de este tema."
          },
          {
            "type": "matching",
            "instructions": "Empareja cada palabra con su significado (La psicología y la personalidad, parte 4).",
            "pairs": [
              {
                "left": "la perspectiva",
                "right": "manera particular de ver algo"
              },
              {
                "left": "el sesgo cognitivo",
                "right": "error sistemático en el pensamiento"
              },
              {
                "left": "racionalizar",
                "right": "justificar algo con razones lógicas, a veces falsas"
              },
              {
                "left": "la percepción",
                "right": "manera en que se interpreta la realidad"
              },
              {
                "left": "el umbral emocional",
                "right": "punto en el que una emoción se vuelve intensa"
              },
              {
                "left": "la impulsividad",
                "right": "tendencia a actuar sin reflexionar"
              },
              {
                "left": "la paciencia",
                "right": "capacidad de esperar sin frustrarse"
              },
              {
                "left": "la tolerancia a la frustración",
                "right": "capacidad de manejar contratiempos sin perder el control"
              },
              {
                "left": "el equilibrio emocional",
                "right": "estabilidad en los estados de ánimo"
              },
              {
                "left": "sincerarse",
                "right": "hablar con total franqueza sobre lo que se siente"
              }
            ],
            "explanation": "Palabras 31-40 de este tema."
          },
          {
            "type": "matching",
            "instructions": "Empareja cada palabra con su significado (La psicología y la personalidad, parte 5).",
            "pairs": [
              {
                "left": "el trauma",
                "right": "impacto emocional profundo causado por una experiencia difícil"
              },
              {
                "left": "sanar",
                "right": "recuperarse emocional o físicamente"
              },
              {
                "left": "procesar (una emoción)",
                "right": "asimilar y comprender un sentimiento"
              },
              {
                "left": "la autocompasión",
                "right": "trato amable hacia uno mismo ante el sufrimiento"
              },
              {
                "left": "el juicio propio",
                "right": "evaluación crítica de uno mismo"
              },
              {
                "left": "la introspección profunda",
                "right": "reflexión detallada sobre los propios procesos internos"
              },
              {
                "left": "el bienestar psicológico",
                "right": "estado general de salud mental"
              },
              {
                "left": "el crecimiento personal",
                "right": "desarrollo continuo de las propias capacidades"
              },
              {
                "left": "la congruencia",
                "right": "coherencia entre lo que se siente, piensa y hace"
              },
              {
                "left": "el autocontrol",
                "right": "capacidad de dominar los propios impulsos"
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
        "question": "¿Qué palabra significa lo opuesto de \"refutar\" en un debate?",
        "options": [
          "objetar",
          "respaldar",
          "la tesis",
          "insistir"
        ],
        "correctIndex": 1,
        "explanation": "\"Respaldar\" significa apoyar una idea, lo contrario de refutarla."
      },
      {
        "type": "multi-select",
        "question": "¿Cuáles palabras describen la música o las artes escénicas? (Elige todas las correctas)",
        "options": [
          "el ensayo general",
          "el telón",
          "la subvención",
          "la partitura"
        ],
        "correctIndexes": [
          0,
          1,
          3
        ],
        "explanation": "\"La subvención\" pertenece al tema de la política, no de las artes escénicas."
      }
    ]
  },
  {
    "slug": "b2-vocabulary-practice-8",
    "level": "B2",
    "number": 59,
    "title": "B2 Vocabulary Practice, Part 8 of 10",
    "summary": "Pon a prueba las 500 palabras del vocabulario de B2, organizadas por lección.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "El desarrollo personal y el cambio",
        "body": [
          "Las 50 palabras de la Lección 8, agrupadas para repasar."
        ],
        "checkpoint": [
          {
            "type": "matching",
            "instructions": "Empareja cada palabra con su significado (El desarrollo personal y el cambio, parte 1).",
            "pairs": [
              {
                "left": "la revolución",
                "right": "cambio radical y repentino en algo"
              },
              {
                "left": "transformar",
                "right": "cambiar profundamente algo"
              },
              {
                "left": "la transformación",
                "right": "proceso de cambio profundo"
              },
              {
                "left": "evolucionar",
                "right": "desarrollarse gradualmente hacia algo mejor"
              },
              {
                "left": "la evolución personal",
                "right": "proceso de crecimiento a lo largo del tiempo"
              },
              {
                "left": "progresar",
                "right": "avanzar hacia una meta con el paso del tiempo"
              },
              {
                "left": "la superación personal",
                "right": "proceso de mejorar continuamente uno mismo"
              },
              {
                "left": "el punto de partida",
                "right": "situación inicial antes de un cambio"
              },
              {
                "left": "el punto de llegada",
                "right": "meta final de un proceso"
              },
              {
                "left": "reinventarse",
                "right": "cambiar profundamente el propio rumbo de vida"
              }
            ],
            "explanation": "Palabras 1-10 de este tema."
          },
          {
            "type": "matching",
            "instructions": "Empareja cada palabra con su significado (El desarrollo personal y el cambio, parte 2).",
            "pairs": [
              {
                "left": "adaptarse",
                "right": "ajustarse a nuevas circunstancias"
              },
              {
                "left": "la adaptabilidad",
                "right": "capacidad de ajustarse a cambios"
              },
              {
                "left": "el hábito",
                "right": "conducta repetida regularmente"
              },
              {
                "left": "el empeño",
                "right": "esfuerzo constante dedicado a lograr un propósito"
              },
              {
                "left": "la constancia",
                "right": "perseverancia a lo largo del tiempo"
              },
              {
                "left": "el esfuerzo sostenido",
                "right": "trabajo continuo hacia una meta"
              },
              {
                "left": "la zona de confort",
                "right": "espacio de comodidad y familiaridad"
              },
              {
                "left": "salir de la zona de confort",
                "right": "enfrentar situaciones nuevas o incómodas"
              },
              {
                "left": "el avance",
                "right": "paso adelante en un proceso de desarrollo"
              },
              {
                "left": "fortalecerse",
                "right": "volverse más firme o resistente con el tiempo"
              }
            ],
            "explanation": "Palabras 11-20 de este tema."
          },
          {
            "type": "matching",
            "instructions": "Empareja cada palabra con su significado (El desarrollo personal y el cambio, parte 3).",
            "pairs": [
              {
                "left": "la madurez",
                "right": "estado de desarrollo pleno"
              },
              {
                "left": "replantearse la vida",
                "right": "reconsiderar profundamente las propias decisiones"
              },
              {
                "left": "dejar atrás",
                "right": "abandonar algo del pasado"
              },
              {
                "left": "soltar (el pasado)",
                "right": "dejar de aferrarse emocionalmente a algo"
              },
              {
                "left": "renacer",
                "right": "comenzar de nuevo con una perspectiva distinta"
              },
              {
                "left": "la metamorfosis",
                "right": "transformación completa y profunda"
              },
              {
                "left": "el potencial oculto",
                "right": "capacidad no descubierta aún"
              },
              {
                "left": "desarrollar habilidades",
                "right": "adquirir nuevas capacidades con la práctica"
              },
              {
                "left": "la mentalidad de crecimiento",
                "right": "creencia de que las capacidades pueden desarrollarse"
              },
              {
                "left": "la mentalidad fija",
                "right": "creencia de que las capacidades son inmutables"
              }
            ],
            "explanation": "Palabras 21-30 de este tema."
          },
          {
            "type": "matching",
            "instructions": "Empareja cada palabra con su significado (El desarrollo personal y el cambio, parte 4).",
            "pairs": [
              {
                "left": "el fracaso constructivo",
                "right": "error que aporta una lección valiosa"
              },
              {
                "left": "aprender de la adversidad",
                "right": "extraer lecciones de momentos difíciles"
              },
              {
                "left": "la disciplina emocional",
                "right": "capacidad de manejar impulsos y reacciones"
              },
              {
                "left": "comprometerse",
                "right": "asumir una responsabilidad con firmeza"
              },
              {
                "left": "el compromiso",
                "right": "obligación asumida con determinación"
              },
              {
                "left": "la voluntad",
                "right": "capacidad de decidir y actuar con determinación"
              },
              {
                "left": "insistir",
                "right": "mantenerse firme en un esfuerzo pese a los obstáculos"
              },
              {
                "left": "la constancia diaria",
                "right": "esfuerzo repetido cada día"
              },
              {
                "left": "dar el primer paso",
                "right": "iniciar un cambio o proyecto"
              },
              {
                "left": "el proceso gradual",
                "right": "cambio que ocurre poco a poco"
              }
            ],
            "explanation": "Palabras 31-40 de este tema."
          },
          {
            "type": "matching",
            "instructions": "Empareja cada palabra con su significado (El desarrollo personal y el cambio, parte 5).",
            "pairs": [
              {
                "left": "el cambio radical",
                "right": "transformación repentina y profunda"
              },
              {
                "left": "las creencias limitantes",
                "right": "ideas que restringen el propio potencial"
              },
              {
                "left": "desafiar los propios límites",
                "right": "poner a prueba las propias capacidades"
              },
              {
                "left": "la autoexigencia",
                "right": "nivel alto de exigencia hacia uno mismo"
              },
              {
                "left": "la estabilidad",
                "right": "condición de mantenerse firme y constante"
              },
              {
                "left": "la plenitud personal",
                "right": "sensación de satisfacción y propósito"
              },
              {
                "left": "prosperar",
                "right": "alcanzar un buen desarrollo o éxito"
              },
              {
                "left": "la autoeficacia",
                "right": "creencia en la propia capacidad de lograr algo"
              },
              {
                "left": "el estancamiento",
                "right": "falta de progreso o cambio"
              },
              {
                "left": "la chispa inicial",
                "right": "motivación que da inicio a un cambio"
              }
            ],
            "explanation": "Palabras 41-50 de este tema."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "fill-blank",
        "prompt": "Completa con la palabra correcta.",
        "sentence": "Antes del estreno, los actores hicieron un último ___ general.",
        "answer": "ensayo",
        "explanation": "\"El ensayo general\" es la práctica final antes de una función."
      }
    ]
  },
  {
    "slug": "b2-vocabulary-practice-9",
    "level": "B2",
    "number": 60,
    "title": "B2 Vocabulary Practice, Part 9 of 10",
    "summary": "Pon a prueba las 500 palabras del vocabulario de B2, organizadas por lección.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "El debate y la argumentación",
        "body": [
          "Las 50 palabras de la Lección 9, agrupadas para repasar."
        ],
        "checkpoint": [
          {
            "type": "matching",
            "instructions": "Empareja cada palabra con su significado (El debate y la argumentación, parte 1).",
            "pairs": [
              {
                "left": "la tesis",
                "right": "idea central que alguien defiende con razones"
              },
              {
                "left": "la postura",
                "right": "posición que se defiende en un debate"
              },
              {
                "left": "sostener (una idea)",
                "right": "defender o mantener un argumento"
              },
              {
                "left": "refutar",
                "right": "demostrar que un argumento es incorrecto"
              },
              {
                "left": "la refutación",
                "right": "argumento que contradice otro"
              },
              {
                "left": "rebatir",
                "right": "responder a un argumento con otro contrario"
              },
              {
                "left": "la evidencia",
                "right": "datos o hechos que apoyan un argumento"
              },
              {
                "left": "fundamentar",
                "right": "dar bases sólidas a un argumento"
              },
              {
                "left": "la falacia",
                "right": "razonamiento aparentemente lógico pero erróneo"
              },
              {
                "left": "el contraargumento",
                "right": "argumento que se opone a otro"
              }
            ],
            "explanation": "Palabras 1-10 de este tema."
          },
          {
            "type": "matching",
            "instructions": "Empareja cada palabra con su significado (El debate y la argumentación, parte 2).",
            "pairs": [
              {
                "left": "ceder terreno",
                "right": "aceptar parcialmente el punto de vista contrario"
              },
              {
                "left": "la concesión",
                "right": "aceptación parcial de un argumento ajeno"
              },
              {
                "left": "matizar",
                "right": "precisar o suavizar una afirmación"
              },
              {
                "left": "la premisa",
                "right": "idea de partida de un razonamiento"
              },
              {
                "left": "la conclusión",
                "right": "resultado final de un razonamiento"
              },
              {
                "left": "deducir",
                "right": "llegar a una conclusión a partir de premisas"
              },
              {
                "left": "inferir",
                "right": "concluir algo de forma indirecta"
              },
              {
                "left": "el razonamiento",
                "right": "proceso de pensar de forma lógica"
              },
              {
                "left": "coherente",
                "right": "que tiene lógica interna consistente"
              },
              {
                "left": "contundente",
                "right": "que convence de forma clara y fuerte"
              }
            ],
            "explanation": "Palabras 11-20 de este tema."
          },
          {
            "type": "matching",
            "instructions": "Empareja cada palabra con su significado (El debate y la argumentación, parte 3).",
            "pairs": [
              {
                "left": "persuadir",
                "right": "convencer a alguien mediante argumentos"
              },
              {
                "left": "persuasivo",
                "right": "capaz de convencer"
              },
              {
                "left": "la retórica",
                "right": "arte de argumentar y convencer"
              },
              {
                "left": "el debate",
                "right": "intercambio formal de argumentos"
              },
              {
                "left": "moderar (un debate)",
                "right": "dirigir de forma imparcial una discusión"
              },
              {
                "left": "el moderador",
                "right": "quien dirige un debate"
              },
              {
                "left": "el turno de palabra",
                "right": "momento asignado para hablar"
              },
              {
                "left": "interrumpir",
                "right": "hablar mientras otro está hablando"
              },
              {
                "left": "el punto en cuestión",
                "right": "tema central de la discusión"
              },
              {
                "left": "desviarse del tema",
                "right": "apartarse del asunto principal"
              }
            ],
            "explanation": "Palabras 21-30 de este tema."
          },
          {
            "type": "matching",
            "instructions": "Empareja cada palabra con su significado (El debate y la argumentación, parte 4).",
            "pairs": [
              {
                "left": "la objeción",
                "right": "argumento en contra de algo propuesto"
              },
              {
                "left": "plantear una objeción",
                "right": "presentar formalmente un desacuerdo"
              },
              {
                "left": "el consenso",
                "right": "acuerdo alcanzado entre las partes"
              },
              {
                "left": "el disenso",
                "right": "desacuerdo entre las partes"
              },
              {
                "left": "la postura intermedia",
                "right": "posición equilibrada entre dos extremos"
              },
              {
                "left": "polarizar",
                "right": "dividir opiniones en extremos opuestos"
              },
              {
                "left": "el sesgo de confirmación",
                "right": "tendencia a buscar solo información que confirme lo que ya se cree"
              },
              {
                "left": "la falta de rigor",
                "right": "ausencia de precisión o solidez en un argumento"
              },
              {
                "left": "la solidez argumentativa",
                "right": "fortaleza lógica de un razonamiento"
              },
              {
                "left": "el ejemplo ilustrativo",
                "right": "caso concreto que apoya una idea general"
              }
            ],
            "explanation": "Palabras 31-40 de este tema."
          },
          {
            "type": "matching",
            "instructions": "Empareja cada palabra con su significado (El debate y la argumentación, parte 5).",
            "pairs": [
              {
                "left": "generalizar",
                "right": "extender una conclusión a casos no verificados"
              },
              {
                "left": "la excepción",
                "right": "caso que no sigue la regla general"
              },
              {
                "left": "la validez",
                "right": "cualidad de un argumento bien fundamentado"
              },
              {
                "left": "objetar",
                "right": "presentar una razón en contra de algo"
              },
              {
                "left": "profundizar en",
                "right": "examinar un tema con más detalle"
              },
              {
                "left": "el hilo argumental",
                "right": "línea lógica que conecta las ideas de un argumento"
              },
              {
                "left": "zanjar (una discusión)",
                "right": "poner fin de forma definitiva a un debate"
              },
              {
                "left": "la analogía",
                "right": "comparación para ilustrar un argumento"
              },
              {
                "left": "el argumento circular",
                "right": "razonamiento que repite la premisa como conclusión"
              },
              {
                "left": "la carga de la prueba",
                "right": "obligación de demostrar una afirmación"
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
        "instructions": "Empareja cada palabra sobre los sueños y la imaginación con su significado.",
        "pairs": [
          {
            "left": "el deseo ferviente",
            "right": "aspiración muy fuerte de conseguir algo"
          },
          {
            "left": "la fantasía",
            "right": "idea alejada de la realidad que alguien imagina con gusto"
          },
          {
            "left": "el sino",
            "right": "fuerza que, según la creencia popular, determina el curso de la vida"
          },
          {
            "left": "vislumbrar",
            "right": "percibir algo de forma vaga o parcial"
          },
          {
            "left": "la premonición",
            "right": "presentimiento de algo que va a ocurrir"
          }
        ],
        "explanation": "Estas cinco palabras aparecen al hablar de sueños, deseos y el destino."
      }
    ]
  },
  {
    "slug": "b2-vocabulary-practice-10",
    "level": "B2",
    "number": 61,
    "title": "B2 Vocabulary Practice, Part 10 of 10",
    "summary": "Pon a prueba las 500 palabras del vocabulario de B2, organizadas por lección.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "La música y las artes escénicas",
        "body": [
          "Las 50 palabras de la Lección 10, agrupadas para repasar."
        ],
        "checkpoint": [
          {
            "type": "matching",
            "instructions": "Empareja cada palabra con su significado (La música y las artes escénicas, parte 1).",
            "pairs": [
              {
                "left": "el escenario",
                "right": "espacio donde se presenta un espectáculo"
              },
              {
                "left": "el público",
                "right": "conjunto de espectadores"
              },
              {
                "left": "la audiencia",
                "right": "conjunto de personas que asisten a un evento"
              },
              {
                "left": "el simulacro",
                "right": "ejercicio de práctica que imita una situación real"
              },
              {
                "left": "ensayar",
                "right": "practicar antes de una presentación en vivo"
              },
              {
                "left": "la gira",
                "right": "serie de presentaciones en distintos lugares"
              },
              {
                "left": "el repertorio",
                "right": "conjunto de obras que un artista interpreta"
              },
              {
                "left": "la interpretación",
                "right": "manera en que se ejecuta una obra"
              },
              {
                "left": "interpretar (una canción)",
                "right": "ejecutar artísticamente una pieza musical"
              },
              {
                "left": "la melodía",
                "right": "sucesión de notas musicales"
              }
            ],
            "explanation": "Palabras 1-10 de este tema."
          },
          {
            "type": "matching",
            "instructions": "Empareja cada palabra con su significado (La música y las artes escénicas, parte 2).",
            "pairs": [
              {
                "left": "el ritmo",
                "right": "patrón de tiempo en la música"
              },
              {
                "left": "la armonía",
                "right": "combinación agradable de sonidos"
              },
              {
                "left": "la letra",
                "right": "texto de una canción"
              },
              {
                "left": "componer",
                "right": "crear una obra musical"
              },
              {
                "left": "el compositor",
                "right": "quien crea obras musicales"
              },
              {
                "left": "la partitura",
                "right": "notación escrita de una obra musical"
              },
              {
                "left": "afinar",
                "right": "ajustar un instrumento al tono correcto"
              },
              {
                "left": "desafinado",
                "right": "que no está en el tono correcto"
              },
              {
                "left": "la banda sonora",
                "right": "música que acompaña una obra audiovisual"
              },
              {
                "left": "el telón",
                "right": "cortina grande de un teatro"
              }
            ],
            "explanation": "Palabras 11-20 de este tema."
          },
          {
            "type": "matching",
            "instructions": "Empareja cada palabra con su significado (La música y las artes escénicas, parte 3).",
            "pairs": [
              {
                "left": "el vestuario",
                "right": "conjunto de trajes para una presentación"
              },
              {
                "left": "la coreografía",
                "right": "secuencia de movimientos de una danza"
              },
              {
                "left": "el bailarín / la bailarina",
                "right": "persona que baila profesionalmente"
              },
              {
                "left": "la puesta en escena",
                "right": "conjunto de elementos visuales de una obra"
              },
              {
                "left": "el director de escena",
                "right": "quien coordina la producción de una obra"
              },
              {
                "left": "el guion",
                "right": "texto que estructura una obra teatral"
              },
              {
                "left": "el actor / la actriz",
                "right": "persona que interpreta un personaje"
              },
              {
                "left": "el papel protagónico",
                "right": "personaje principal de una obra"
              },
              {
                "left": "el aplauso",
                "right": "muestra de aprobación del público"
              },
              {
                "left": "la ovación",
                "right": "aplauso prolongado y entusiasta"
              }
            ],
            "explanation": "Palabras 21-30 de este tema."
          },
          {
            "type": "matching",
            "instructions": "Empareja cada palabra con su significado (La música y las artes escénicas, parte 4).",
            "pairs": [
              {
                "left": "conmover al público",
                "right": "provocar una emoción profunda en los espectadores"
              },
              {
                "left": "el estreno",
                "right": "primera presentación pública de una obra"
              },
              {
                "left": "la crítica especializada",
                "right": "opinión de expertos sobre una obra"
              },
              {
                "left": "la taquilla",
                "right": "recaudación por venta de boletos"
              },
              {
                "left": "agotar las entradas",
                "right": "vender todos los boletos disponibles"
              },
              {
                "left": "el escenario improvisado",
                "right": "espacio no diseñado originalmente para presentaciones"
              },
              {
                "left": "la acústica",
                "right": "cualidad de un espacio para transmitir el sonido"
              },
              {
                "left": "el sonido en vivo",
                "right": "audio producido durante la presentación misma"
              },
              {
                "left": "el instrumento de cuerda",
                "right": "instrumento como la guitarra o el violín"
              },
              {
                "left": "el instrumento de viento",
                "right": "instrumento como la flauta o la trompeta"
              }
            ],
            "explanation": "Palabras 31-40 de este tema."
          },
          {
            "type": "matching",
            "instructions": "Empareja cada palabra con su significado (La música y las artes escénicas, parte 5).",
            "pairs": [
              {
                "left": "la percusión",
                "right": "instrumentos que se tocan golpeando"
              },
              {
                "left": "el solista",
                "right": "intérprete que actúa individualmente"
              },
              {
                "left": "la orquesta",
                "right": "conjunto grande de músicos"
              },
              {
                "left": "el conjunto musical",
                "right": "grupo de músicos que tocan juntos"
              },
              {
                "left": "improvisar",
                "right": "crear música o actuación sin preparación previa"
              },
              {
                "left": "la energía escénica",
                "right": "intensidad y presencia de un artista en escena"
              },
              {
                "left": "conectar con el público",
                "right": "establecer una relación emocional con los espectadores"
              },
              {
                "left": "dejar constancia",
                "right": "registrar algo de forma que quede como prueba"
              },
              {
                "left": "el virtuosismo",
                "right": "dominio técnico excepcional de un instrumento o arte"
              },
              {
                "left": "cautivador",
                "right": "que atrae poderosamente la atención"
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
        "question": "¿Qué palabra describe la acción de persuadir a alguien mediante razones sólidas y bien construidas?",
        "options": [
          "convencer",
          "cuestionar",
          "cronista",
          "escaño"
        ],
        "correctIndex": 0,
        "explanation": "\"Convencer\" describe el acto de persuadir mediante razones sólidas."
      }
    ]
  },
  {
    "slug": "b2-comprehensive-review-1",
    "level": "B2",
    "number": 62,
    "title": "B2 Comprehensive Review, Part 1 of 3",
    "summary": "Repasa cada principio gramatical de B2 y luego realiza un examen final de 30 preguntas.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "Subjuntivo en Cláusulas Adjetivas",
        "body": [
          "El subjuntivo describe un antecedente cuya existencia es incierta, negada o indefinida (busco un empleado que hable alemán). El indicativo describe un antecedente conocido y específico (tengo un empleado que habla alemán)."
        ]
      },
      {
        "heading": "Subjuntivo en Cláusulas Adverbiales",
        "body": [
          "Conjunciones como para que, antes de que, a menos que y con tal de que siempre requieren subjuntivo. Otras, como cuando, en cuanto y hasta que, llevan subjuntivo solo si se refieren a una acción futura o hipotética."
        ]
      },
      {
        "heading": "Imperfecto de Subjuntivo y Secuencia de Tiempos",
        "body": [
          "El imperfecto de subjuntivo (-ra o -se) se usa cuando el verbo principal está en pasado o condicional. Sigue la secuencia: presente → presente de subjuntivo; pasado → imperfecto de subjuntivo."
        ]
      },
      {
        "heading": "Cláusulas Hipotéticas con Si",
        "body": [
          "Si + imperfecto de subjuntivo, + condicional describe situaciones hipotéticas o contrarias a la realidad actual (si tuviera tiempo, viajaría). No se usa el presente de subjuntivo después de \"si\"."
        ]
      }
    ],
    "exercises": [
      {
        "type": "fill-blank",
        "prompt": "Conjuga el verbo.",
        "sentence": "Busco un apartamento que ___ (tener) dos habitaciones.",
        "answer": "tenga",
        "explanation": "El antecedente \"un apartamento\" es indefinido, así que se usa subjuntivo."
      },
      {
        "type": "multiple-choice",
        "question": "¿Cuál oración usa correctamente el indicativo?",
        "options": [
          "Necesito un libro que explique esto.",
          "Tengo un libro que explica esto.",
          "Busco a alguien que sepa francés.",
          "No hay nadie que pueda ayudarme."
        ],
        "correctIndex": 1,
        "explanation": "\"Tengo un libro\" se refiere a un libro específico y conocido: indicativo."
      },
      {
        "type": "fill-blank",
        "prompt": "Conjuga el verbo.",
        "sentence": "Te llamaré en cuanto ___ (llegar) al aeropuerto.",
        "answer": "llegue",
        "explanation": "\"En cuanto\" con una acción futura requiere subjuntivo."
      },
      {
        "type": "multiple-choice",
        "question": "¿Cuál conjunción siempre requiere subjuntivo?",
        "options": [
          "cuando",
          "en cuanto",
          "para que",
          "hasta que"
        ],
        "correctIndex": 2,
        "explanation": "\"Para que\" siempre lleva subjuntivo, sin importar el contexto."
      },
      {
        "type": "fill-blank",
        "prompt": "Conjuga el verbo en imperfecto de subjuntivo.",
        "sentence": "Ella quería que yo la ___ (acompañar).",
        "answer": "acompañara",
        "explanation": "El verbo principal \"quería\" está en pasado, así que la cláusula subordinada usa imperfecto de subjuntivo."
      },
      {
        "type": "multi-select",
        "question": "¿En qué situaciones se usa el imperfecto de subjuntivo? (Elige todas las correctas)",
        "options": [
          "después de un verbo principal en pasado",
          "en cláusulas con si + hipótesis presente",
          "después de \"ojalá\" para deseos poco probables",
          "para hablar del futuro cercano"
        ],
        "correctIndexes": [
          0,
          1,
          2
        ],
        "explanation": "El imperfecto de subjuntivo se usa con verbos principales en pasado, hipótesis con si, y ojalá para deseos improbables."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la cláusula con si.",
        "sentence": "Si yo ___ (ser) tú, no aceptaría esa oferta.",
        "answer": "fuera",
        "explanation": "Si + imperfecto de subjuntivo describe una hipótesis contraria a la realidad presente."
      },
      {
        "type": "multiple-choice",
        "question": "¿Cuál oración es una hipótesis correcta sobre el presente?",
        "options": [
          "Si tengo dinero, viajaría más.",
          "Si tuviera dinero, viajaría más.",
          "Si tendría dinero, viajaría más.",
          "Si tuviera dinero, viajaré más."
        ],
        "correctIndex": 1,
        "explanation": "Si + imperfecto de subjuntivo, + condicional es la estructura correcta para hipótesis presentes."
      },
      {
        "type": "fill-blank",
        "prompt": "Conjuga el verbo en pluscuamperfecto de subjuntivo.",
        "sentence": "Si yo ___ (saber) la verdad antes, habría actuado diferente.",
        "answer": "hubiera sabido",
        "explanation": "Si + pluscuamperfecto de subjuntivo (hubiera + participio) describe una hipótesis sobre el pasado."
      }
    ]
  },
  {
    "slug": "b2-comprehensive-review-2",
    "level": "B2",
    "number": 63,
    "title": "B2 Comprehensive Review, Part 2 of 3",
    "summary": "Repasa cada principio gramatical de B2 y luego realiza un examen final de 30 preguntas.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "Condicional Perfecto y Pluscuamperfecto de Subjuntivo",
        "body": [
          "Si + pluscuamperfecto de subjuntivo (hubiera + participio), + condicional perfecto (habría + participio) describe situaciones hipotéticas sobre el pasado que ya no se pueden cambiar (si hubiera estudiado, habría aprobado)."
        ]
      },
      {
        "heading": "El Estilo Indirecto",
        "body": [
          "Al reportar lo que alguien dijo, los tiempos verbales suelen retroceder: presente → imperfecto, pretérito → pluscuamperfecto, futuro → condicional. Los mandatos se convierten en que + subjuntivo."
        ]
      },
      {
        "heading": "Ser, Estar y Haber: Usos Matizados",
        "body": [
          "Ser describe identidad y características esenciales; estar describe estados, ubicación y condiciones que pueden cambiar. Ciertos adjetivos cambian de significado según el verbo: \"ser aburrido\" describe una cualidad permanente de la persona o cosa, mientras que \"estar aburrido\" describe un estado temporal en un momento dado. Haber impersonal siempre es singular."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "¿Cuál es la forma correcta del condicional perfecto de \"hacer\"?",
        "options": [
          "habría hecho",
          "hubiera hecho",
          "haría hecho",
          "había hecho"
        ],
        "correctIndex": 0,
        "explanation": "El condicional perfecto se forma con habría + participio: habría hecho."
      },
      {
        "type": "fill-blank",
        "prompt": "Cambia al estilo indirecto.",
        "sentence": "Ella dijo: \"Voy a llegar tarde.\" → Ella dijo que ___ a llegar tarde.",
        "answer": "iba",
        "explanation": "El presente (voy) retrocede al imperfecto (iba) en el estilo indirecto."
      },
      {
        "type": "multiple-choice",
        "question": "¿Cómo se reporta un mandato en estilo indirecto?",
        "options": [
          "con el mismo mandato",
          "con que + subjuntivo",
          "con el futuro",
          "con el gerundio"
        ],
        "correctIndex": 1,
        "explanation": "Los mandatos reportados se convierten en que + subjuntivo: me pidió que la llamara."
      },
      {
        "type": "fill-blank",
        "prompt": "Elige ser o estar.",
        "sentence": "Mi hermano ___ médico desde hace diez años.",
        "answer": "es",
        "explanation": "Ser se usa para profesiones y características permanentes."
      },
      {
        "type": "multiple-choice",
        "question": "¿Cuál oración usa correctamente \"estar\" con un cambio de significado?",
        "options": [
          "El profesor es aburrido.",
          "El profesor está aburrido.",
          "El profesor está profesor.",
          "El profesor es está aburrido."
        ],
        "correctIndex": 1,
        "explanation": "\"Estar aburrido\" significa sentirse aburrido en ese momento, distinto de \"ser aburrido\" (tener la cualidad de ser tedioso)."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa con la forma correcta del verbo de cambio.",
        "sentence": "Con los años, mi abuelo se ___ (volver) más paciente.",
        "answer": "volvió",
        "explanation": "Volverse describe un cambio gradual o involuntario de carácter."
      },
      {
        "type": "multi-select",
        "question": "¿Qué verbo de cambio implica esfuerzo o elección deliberada? (Elige todas las correctas)",
        "options": [
          "hacerse",
          "volverse",
          "convertirse en",
          "ponerse"
        ],
        "correctIndexes": [
          0,
          2
        ],
        "explanation": "Hacerse y convertirse en pueden implicar un proceso más consciente o gradual que volverse o ponerse."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa con el conector adecuado.",
        "sentence": "Estudió mucho; ___, no aprobó el examen.",
        "answer": "sin embargo",
        "explanation": "\"Sin embargo\" introduce un contraste inesperado."
      },
      {
        "type": "multiple-choice",
        "question": "¿Qué conector expresa consecuencia?",
        "options": [
          "a pesar de",
          "en cambio",
          "por consiguiente",
          "no obstante"
        ],
        "correctIndex": 2,
        "explanation": "\"Por consiguiente\" introduce el resultado lógico de lo anterior."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras para dar énfasis.",
        "words": [
          "Nunca",
          "había",
          "visto",
          "algo",
          "tan",
          "hermoso"
        ],
        "explanation": "El adverbio \"nunca\" al inicio provoca la inversión sujeto-verbo."
      }
    ]
  },
  {
    "slug": "b2-comprehensive-review-3",
    "level": "B2",
    "number": 64,
    "title": "B2 Comprehensive Review, Part 3 of 3",
    "summary": "Repasa cada principio gramatical de B2 y luego realiza un examen final de 30 preguntas.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "Verbos de Cambio",
        "body": [
          "Volverse indica un cambio a menudo repentino o involuntario (se volvió loco). Hacerse implica esfuerzo o elección (se hizo médico). Ponerse describe cambios emocionales o físicos temporales (se puso nervioso). Convertirse en indica una transformación más completa (se convirtió en líder)."
        ]
      },
      {
        "heading": "Conectores Avanzados",
        "body": [
          "Conectores como sin embargo, no obstante, por consiguiente, en cambio y a pesar de organizan ideas complejas: contraste, consecuencia y concesión. Muchos van seguidos de coma y ayudan a estructurar un argumento formal."
        ]
      },
      {
        "heading": "Énfasis y Orden de Palabras",
        "body": [
          "El español permite invertir el orden habitual para dar énfasis: adverbios como apenas y nunca al inicio provocan la inversión sujeto-verbo. Estructuras como lo que... es y ser... quien también destacan un elemento de la oración."
        ]
      }
    ],
    "exercises": [
      {
        "type": "fill-blank",
        "prompt": "Completa la estructura enfática.",
        "sentence": "___ resolvió el problema fue mi colega, no yo.",
        "answer": "Quien",
        "explanation": "\"Quien\" al inicio de la oración enfatiza al sujeto que realizó la acción."
      },
      {
        "type": "multiple-choice",
        "question": "¿Cuál palabra describe el lienzo, el pincel y la exposición?",
        "options": [
          "el arte",
          "la política",
          "la psicología",
          "el debate"
        ],
        "correctIndex": 0,
        "explanation": "El lienzo, el pincel y la exposición son términos del mundo del arte."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa con la palabra correcta.",
        "sentence": "El periodista tuvo que ___ la información antes de publicarla.",
        "answer": "verificar",
        "explanation": "\"Verificar\" significa comprobar que una información es exacta."
      },
      {
        "type": "matching",
        "instructions": "Empareja cada tiempo verbal con su uso principal.",
        "pairs": [
          {
            "left": "el subjuntivo presente",
            "right": "deseos, dudas y emociones sobre el presente o futuro"
          },
          {
            "left": "el imperfecto de subjuntivo",
            "right": "hipótesis o deseos tras un verbo principal en pasado"
          },
          {
            "left": "el condicional",
            "right": "peticiones corteses e hipótesis"
          },
          {
            "left": "el pluscuamperfecto de subjuntivo",
            "right": "hipótesis sobre un pasado que ya no puede cambiar"
          },
          {
            "left": "el estilo indirecto",
            "right": "reportar lo que alguien más dijo"
          }
        ],
        "explanation": "Cada estructura gramatical de B2 tiene un uso comunicativo específico."
      },
      {
        "type": "multi-select",
        "question": "¿Cuáles palabras pertenecen al tema de la psicología? (Elige todas las correctas)",
        "options": [
          "la introspección",
          "la madurez",
          "el escaño",
          "el subconsciente"
        ],
        "correctIndexes": [
          0,
          1,
          3
        ],
        "explanation": "\"El escaño\" pertenece al tema de la política, no de la psicología."
      },
      {
        "type": "fill-blank",
        "prompt": "Conjuga el verbo.",
        "sentence": "Si hubiéramos salido antes, no ___ (perder) el tren.",
        "answer": "habríamos perdido",
        "explanation": "Pluscuamperfecto de subjuntivo en la cláusula con si, condicional perfecto en la principal."
      },
      {
        "type": "multiple-choice",
        "question": "¿Qué palabra describe el proceso de transformarse profundamente como persona?",
        "options": [
          "reinventarse",
          "cuestionar",
          "el escaño",
          "el cronista"
        ],
        "correctIndex": 0,
        "explanation": "\"Reinventarse\" significa cambiar profundamente la propia forma de ser o de vivir."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras.",
        "words": [
          "Apenas",
          "había",
          "empezado",
          "a",
          "llover",
          "cuando",
          "salimos"
        ],
        "explanation": "\"Apenas\" al inicio de la oración provoca la inversión sujeto-verbo."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa con la palabra correcta.",
        "sentence": "El escritor usó una ___ para comparar la vida con un viaje.",
        "answer": "metáfora",
        "explanation": "\"La metáfora\" es una figura literaria que compara dos cosas sin usar \"como\"."
      },
      {
        "type": "multiple-choice",
        "question": "¿Cuál oración reporta correctamente un mandato?",
        "options": [
          "Me dijo que la llame.",
          "Me dijo que la llamara.",
          "Me dijo que la llamo.",
          "Me dijo que la llamaría."
        ],
        "correctIndex": 1,
        "explanation": "Los mandatos reportados requieren que + imperfecto de subjuntivo."
      }
    ]
  },
  {
    "slug": "chef-against-family-wishes",
    "level": "B2",
    "number": 65,
    "title": "El sabor de lo nuevo",
    "summary": "A young chef risks her family's blessing to open a restaurant that breaks with tradition.",
    "duration": "10 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Marta llevaba diez años ayudando en la cocina de Casa Oliveira, el restaurante que su abuelo había fundado en 1968 y que su padre dirigía con mano firme y recetas que no admitían discusión. Desde niña había aprendido a picar cebolla sin llorar y a distinguir, con los ojos cerrados, el punto exacto en que el sofrito empezaba a dorarse. Sin embargo, cuanto más tiempo pasaba entre esas paredes, más sentía que la cocina de su familia se había convertido en un museo: hermoso, respetado, pero incapaz de moverse.",
          "Todo cambió la noche en que probó, en un pequeño local de Lisboa, un plato que mezclaba especias marroquíes con pescado del Atlántico. Aquella combinación le pareció una revelación, como si alguien hubiera abierto una ventana en un cuarto que llevaba años cerrado. Volvió a casa con la cabeza llena de ideas y con la certeza, todavía tímida, de que algún día tendría su propio restaurante.",
          "Cuando por fin reunió el valor para contárselo a su padre, este la escuchó en silencio, secándose las manos en el delantal que había pertenecido al abuelo. \"Si cambias las recetas de la familia\", le dijo finalmente, \"estás diciendo que lo que hemos construido no vale nada\". Marta intentó explicarle que no se trataba de rechazar el pasado, sino de continuarlo de otra manera, pero las palabras se le atascaron en la garganta.",
          "Durante meses, la relación entre ambos se volvió tensa. Su padre apenas le dirigía la palabra en la cocina, y su madre, atrapada entre los dos, evitaba mencionar el tema en la mesa. Marta empezó a ahorrar en secreto, a visitar locales vacíos los domingos por la mañana, a imaginar un menú que no tuviera miedo de mezclar lo heredado con lo descubierto.",
          "Encontró un pequeño espacio cerca del mercado, con las paredes desconchadas y una luz que entraba oblicua por una claraboya. No era gran cosa, pero en cuanto cruzó la puerta supo que aquel lugar podía convertirse en lo que ella soñaba. Firmó el contrato de alquiler sin decírselo a nadie, temerosa de que la disuadieran antes de intentarlo.",
          "Los primeros meses fueron agotadores. Trabajaba de día en Casa Oliveira y de noche reformaba su propio local, a menudo sola, subida a una escalera con un rodillo de pintura en la mano. Dudaba con frecuencia: se preguntaba si no estaría cometiendo un error, si el amor por lo nuevo no la habría cegado ante los riesgos evidentes de abandonar un negocio seguro.",
          "La noche de la inauguración, Marta esperaba con el estómago encogido a que llegaran los primeros clientes. No había invitado a su padre, convencida de que no vendría, pero cuando levantó la vista lo vio de pie junto a la puerta, con una chaqueta que no solía usar y una expresión que no supo interpretar del todo.",
          "Él se sentó en una mesa del rincón, sin decir palabra, y pidió el plato que encabezaba la carta: un guiso de garbanzos con especias del norte de África, inspirado, aunque él no lo supiera, en una receta que su propio abuelo solía preparar antes de emigrar. Marta lo observó desde la cocina, con el corazón latiéndole con fuerza, mientras su padre probaba el primer bocado.",
          "Pasaron varios minutos antes de que él levantara la mirada. \"Esto sabe a algo que yo conocía\", dijo por fin, \"pero que había olvidado que conocía\". Marta sintió que se le aflojaba un nudo que llevaba meses apretado en el pecho, aunque sabía que aquella frase no bastaba para borrar los meses de silencio.",
          "Con el paso de las semanas, la relación entre ambos fue mejorando, aunque despacio, como quien repara un jarrón con paciencia en lugar de pegamento. Su padre nunca llegó a decir explícitamente que aprobaba lo que ella había hecho, pero empezó a visitar el restaurante los martes, siempre a la misma hora, siempre sentado en la misma mesa del rincón.",
          "Marta comprendió entonces que no había tenido que elegir entre honrar a su familia y ser fiel a sí misma: ambas cosas, si se cocinaban con cuidado, podían convivir en el mismo plato. El restaurante prosperó poco a poco, no por rebeldía sino por convicción, y con el tiempo se convirtió en un lugar donde los clientes probaban, sin saberlo, la historia entera de dos generaciones.",
          "Una tarde de invierno, mientras limpiaba la cocina después del cierre, Marta encontró una nota escrita con la letra torpe de su padre, dejada bajo un plato: \"Tu abuelo habría estado orgulloso. Yo también lo estoy, aunque me haya costado decirlo\". Guardó el papel en el bolsillo del delantal y, por primera vez en mucho tiempo, sintió que su cocina y la de su familia eran, en el fondo, la misma."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "What was Marta's relationship to Casa Oliveira?",
        "options": [
          "She was a customer",
          "She had worked there for ten years helping in the kitchen",
          "She was a food critic",
          "She inherited it after her father's death"
        ],
        "correctIndex": 1,
        "explanation": "\"Marta llevaba diez años ayudando en la cocina de Casa Oliveira\" — Marta had spent ten years helping in the kitchen."
      },
      {
        "type": "multiple-choice",
        "question": "What inspired Marta's new restaurant concept?",
        "options": [
          "A cooking show she watched",
          "A dish she tried in Lisbon mixing Moroccan spices with Atlantic fish",
          "A recipe from her grandmother",
          "A trip to Morocco"
        ],
        "correctIndex": 1,
        "explanation": "\"probó, en un pequeño local de Lisboa, un plato que mezclaba especias marroquíes con pescado del Atlántico\"."
      },
      {
        "type": "multiple-choice",
        "question": "How did Marta's father initially react to her plan?",
        "options": [
          "He enthusiastically supported her",
          "He offered to invest money",
          "He felt she was rejecting the family's legacy",
          "He immediately disowned her"
        ],
        "correctIndex": 2,
        "explanation": "\"Si cambias las recetas de la familia... estás diciendo que lo que hemos construido no vale nada.\""
      },
      {
        "type": "multiple-choice",
        "question": "What happened when Marta's father visited on opening night?",
        "options": [
          "He refused to eat anything",
          "He tasted a dish and admitted it reminded him of something he had forgotten",
          "He left angrily",
          "He gave a public speech praising her"
        ],
        "correctIndex": 1,
        "explanation": "\"Esto sabe a algo que yo conocía... pero que había olvidado que conocía.\""
      }
    ]
  },
  {
    "slug": "architect-saves-historic-building",
    "level": "B2",
    "number": 66,
    "title": "Los planos del olvido",
    "summary": "An architect fights to save a historic building from demolition while confronting her own professional compromises.",
    "duration": "10 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Diego había diseñado edificios de cristal y acero durante quince años, estructuras que aparecían en revistas de arquitectura y que, según sus colegas, representaban el futuro de la ciudad. Sin embargo, ninguno de esos proyectos le había quitado el sueño como lo hizo la noticia de que el Ayuntamiento planeaba demoler el antiguo Teatro Esperanza para construir, en su lugar, un centro comercial.",
          "El teatro, cerrado desde hacía veinte años, conservaba todavía su fachada de piedra tallada y su cúpula pintada con motivos que representaban las cuatro estaciones. Diego había ido allí de niño, de la mano de su abuela, a ver funciones de títeres los domingos por la tarde, y aunque llevaba años sin pensar en ello, la sola idea de que aquellas paredes desaparecieran le provocó una tristeza que no supo nombrar de inmediato.",
          "Cuando se enteró de que la empresa constructora que había ganado el concurso era, precisamente, la misma para la que él trabajaba, sintió que el suelo se movía bajo sus pies. Su jefe le pidió que preparara los planos de demolición como un encargo más, sin darle mayor importancia, y Diego comprendió que tendría que decidir entre su carrera y algo que, hasta entonces, no sabía que le importaba tanto.",
          "Pasó varias noches investigando en los archivos municipales, donde descubrió que el teatro había sido diseñado por un arquitecto casi olvidado, una mujer que en su época tuvo que firmar sus proyectos con el nombre de su marido porque las autoridades no aceptaban planos firmados por una mujer. Aquel detalle lo conmovió profundamente y reforzó su convicción de que el edificio merecía algo más que el olvido.",
          "Decidió presentar una alternativa: en lugar de derribar el teatro, proponía restaurarlo y convertirlo en un centro cultural que conviviera con un pequeño espacio comercial, de modo que el proyecto siguiera siendo rentable sin borrar la memoria del lugar. Sabía que, al hacerlo, se enfrentaría abiertamente a su jefe y posiblemente pondría en riesgo su puesto.",
          "La reunión en la que presentó su propuesta fue tensa. Su jefe lo acusó de ser un sentimental que anteponía la nostalgia a la eficiencia, y varios socios de la empresa se mostraron visiblemente incómodos. No obstante, Diego había preparado los números con cuidado y demostró que la restauración, aunque más costosa a corto plazo, generaría beneficios sostenidos durante décadas.",
          "Aun así, la decisión final no dependía únicamente de los números. El Ayuntamiento convocó una audiencia pública para que los vecinos opinaran sobre el futuro del teatro, y Diego, contra el consejo de su jefe, decidió asistir para exponer su proyecto directamente ante la comunidad.",
          "La sala se llenó de vecinos mayores que recordaban haber asistido a bodas, conciertos y funciones escolares en aquel escenario, y también de jóvenes que jamás habían pisado el edificio pero que se emocionaron al ver las fotografías antiguas que Diego proyectó en la pantalla. Una anciana se levantó para contar que allí había conocido a su difunto esposo, y su testimonio conmovió a toda la sala.",
          "Cuando llegó su turno de hablar, Diego sintió que las manos le temblaban, pero se obligó a explicar con calma por qué creía que una ciudad no podía construir su futuro borrando por completo su pasado. Insistió en que un edificio no era solo ladrillo y piedra, sino un contenedor de recuerdos compartidos que, una vez destruido, jamás podría reconstruirse igual.",
          "La votación del concejo se retrasó varias semanas, durante las cuales Diego vivió con la incertidumbre de no saber si conservaría su empleo ni si su propuesta sería aceptada. Su jefe dejó de dirigirle la palabra directamente, y varios compañeros le advirtieron que se estaba jugando su futuro profesional por una causa que, según ellos, ya estaba perdida de antemano.",
          "Finalmente, el concejo aprobó, por un estrecho margen, la propuesta de restauración. La empresa constructora aceptó el proyecto revisado, más por presión pública que por convicción, y a Diego se le encargó dirigir personalmente las obras de rehabilitación, aunque su relación con la dirección quedó marcada para siempre por aquel episodio.",
          "Dos años después, en la reinauguración del Teatro Esperanza, Diego observó desde un rincón cómo cientos de personas entraban de nuevo bajo la cúpula pintada, algunas con lágrimas en los ojos. Comprendió entonces que, a veces, el verdadero trabajo de un arquitecto no consiste en construir algo nuevo, sino en tener el valor de defender lo que ya existe."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "What was Diego's profession before the story's events?",
        "options": [
          "A city council member",
          "An architect known for glass-and-steel buildings",
          "A theater actor",
          "A history teacher"
        ],
        "correctIndex": 1,
        "explanation": "\"Diego había diseñado edificios de cristal y acero durante quince años.\""
      },
      {
        "type": "multiple-choice",
        "question": "What personal connection did Diego have to the Teatro Esperanza?",
        "options": [
          "He had performed there as a child",
          "He had gone there with his grandmother to see puppet shows",
          "He designed it himself",
          "His parents got married there"
        ],
        "correctIndex": 1,
        "explanation": "\"Diego había ido allí de niño, de la mano de su abuela, a ver funciones de títeres.\""
      },
      {
        "type": "multiple-choice",
        "question": "What did Diego discover about the theater's original architect?",
        "options": [
          "She was famous and celebrated in her time",
          "She had to sign her plans with her husband's name because authorities rejected plans by women",
          "She never actually built the theater",
          "She was Diego's ancestor"
        ],
        "correctIndex": 1,
        "explanation": "\"tuvo que firmar sus proyectos con el nombre de su marido porque las autoridades no aceptaban planos firmados por una mujer.\""
      },
      {
        "type": "multiple-choice",
        "question": "What was the outcome of the council's vote?",
        "options": [
          "The theater was demolished as planned",
          "The restoration proposal was approved by a narrow margin",
          "Diego was fired before the vote",
          "The vote was cancelled"
        ],
        "correctIndex": 1,
        "explanation": "\"el concejo aprobó, por un estrecho margen, la propuesta de restauración.\""
      }
    ]
  },
  {
    "slug": "translator-forgotten-manuscript",
    "level": "B2",
    "number": 67,
    "title": "El manuscrito de la buhardilla",
    "summary": "A literary translator discovers a lost manuscript that may rewrite a famous author's legacy.",
    "duration": "9 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Elena se ganaba la vida traduciendo novelas del inglés al español, un oficio que ejercía con la discreción de quien trabaja siempre a la sombra de otro nombre. Le gustaba pensar que su trabajo consistía en tender un puente invisible entre dos idiomas, aunque pocas veces alguien reparara en el esfuerzo que había detrás de cada frase bien lograda.",
          "Todo cambió cuando una editorial pequeña le encargó revisar los archivos personales de Julián Bravo, un escritor argentino fallecido treinta años atrás cuya obra, aunque respetada, nunca había alcanzado el reconocimiento que muchos consideraban merecido. La familia había decidido, finalmente, donar sus papeles a una fundación literaria, y Elena fue contratada para catalogarlos antes de que se archivaran definitivamente.",
          "En la buhardilla de la casa familiar, entre cajas cubiertas de polvo y revistas amarillentas, encontró un cuaderno encuadernado en cuero que no aparecía en ningún inventario previo. Al abrirlo, reconoció de inmediato la letra pequeña y apretada de Bravo, aunque el contenido no se parecía a nada de lo que había publicado en vida.",
          "Se trataba de una novela inédita, casi terminada, que narraba la historia de un exiliado político que regresaba a su país después de décadas para descubrir que la ciudad de su memoria ya no existía. Elena leyó las primeras páginas sentada en el suelo polvoriento, con el corazón acelerado, consciente de que tenía entre las manos algo que podía cambiar por completo la manera en que se entendía la obra del autor.",
          "Sin embargo, cuanto más avanzaba en la lectura, más dudas le surgían. El manuscrito contradecía, en varios pasajes, la imagen pública que Bravo había cultivado durante toda su vida, la de un escritor optimista y conciliador. Aquella novela, en cambio, revelaba un profundo desencanto político que él jamás había expresado abiertamente, ni siquiera en sus entrevistas más sinceras.",
          "Elena se enfrentó entonces a un dilema que no había anticipado. Si publicaba el hallazgo, podía consagrar definitivamente el nombre de Bravo entre los grandes autores del continente, pero también corría el riesgo de traicionar la imagen que su familia y sus lectores habían construido durante décadas, una imagen que quizás el propio autor había cuidado deliberadamente en vida.",
          "Decidió hablar con la hija del escritor, una mujer mayor que apenas recordaba fragmentos de la vida bohemia de su padre. Cuando le mostró el cuaderno, la mujer palideció y confesó que sabía de la existencia de aquel texto, pero que su padre le había pedido expresamente, antes de morir, que nunca se publicara.",
          "\"Decía que ya había dicho demasiado en esas páginas\", explicó la hija, con la voz quebrada, \"y que el mundo no estaba preparado para leer lo que de verdad pensaba\". Elena comprendió entonces que la decisión no le correspondía únicamente a ella, por muy tentador que resultara el hallazgo desde el punto de vista profesional.",
          "Durante semanas, Elena investigó el contexto histórico en el que Bravo había escrito la novela, un periodo de represión política durante el cual muchos de sus amigos habían sido encarcelados o exiliados. Comprendió que el silencio del autor no había sido cobardía, sino una forma de protección, tanto para sí mismo como para quienes aparecían disimuladamente retratados en la trama.",
          "Finalmente, propuso una solución intermedia: la fundación conservaría el manuscrito en su archivo, accesible únicamente para investigadores académicos, sin publicarlo comercialmente, respetando así la voluntad del autor sin negar por completo su existencia a la posteridad. La hija de Bravo aceptó aliviada, agradecida de que alguien hubiera tomado en serio los deseos de su padre.",
          "Elena tradujo, con permiso especial, un breve fragmento para un artículo académico que ella misma firmó, el primer trabajo publicado bajo su propio nombre después de años de traducir bajo la sombra de otros autores. El texto causó cierto revuelo entre los críticos, que empezaron a reconsiderar la figura de Bravo bajo una luz distinta.",
          "Años después, cuando le preguntaban sobre el episodio, Elena solía responder que había aprendido algo que ninguna facultad de traducción le había enseñado: que hay silencios que merecen tanto respeto como las palabras, y que el verdadero oficio de traducir consiste, a veces, en saber cuándo no traducir."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "What was Elena's profession?",
        "options": [
          "A novelist",
          "A literary translator",
          "A librarian",
          "A journalist"
        ],
        "correctIndex": 1,
        "explanation": "\"Elena se ganaba la vida traduciendo novelas del inglés al español.\""
      },
      {
        "type": "multiple-choice",
        "question": "What did Elena find in the attic?",
        "options": [
          "Letters from Bravo's readers",
          "An unpublished, nearly finished novel in Bravo's handwriting",
          "A diary belonging to Bravo's wife",
          "Photographs from Bravo's youth"
        ],
        "correctIndex": 1,
        "explanation": "\"Se trataba de una novela inédita, casi terminada... reconoció de inmediato la letra pequeña y apretada de Bravo.\""
      },
      {
        "type": "multiple-choice",
        "question": "Why had Bravo asked that the manuscript never be published?",
        "options": [
          "He thought it was poorly written",
          "He felt he had already said too much and the world wasn't ready for his true thoughts",
          "He wanted to rewrite it first",
          "He was embarrassed about grammatical errors"
        ],
        "correctIndex": 1,
        "explanation": "\"Decía que ya había dicho demasiado en esas páginas... y que el mundo no estaba preparado para leer lo que de verdad pensaba.\""
      },
      {
        "type": "multiple-choice",
        "question": "What compromise did Elena propose?",
        "options": [
          "To publish the novel immediately as a bestseller",
          "To destroy the manuscript entirely",
          "To keep it in the archive for academic researchers only, without commercial publication",
          "To sell it to the highest bidder"
        ],
        "correctIndex": 2,
        "explanation": "\"la fundación conservaría el manuscrito en su archivo, accesible únicamente para investigadores académicos, sin publicarlo comercialmente.\""
      }
    ]
  },
  {
    "slug": "small-town-doctor-dilemma",
    "level": "B2",
    "number": 68,
    "title": "El único médico del pueblo",
    "summary": "A rural doctor must weigh personal risk and professional duty when a mysterious illness spreads through her village.",
    "duration": "10 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "La doctora Rosa Aguilar era, desde hacía doce años, la única médica de Piedrablanca, un pueblo de apenas cuatrocientos habitantes encaramado entre montañas donde el hospital más cercano quedaba a dos horas de coche por una carretera que en invierno solía cerrarse por la nieve. Había llegado allí recién graduada, con la intención de quedarse solo un par de años, pero el pueblo, con su lentitud y su gente, había terminado por atraparla.",
          "Todo empezó un martes de octubre, cuando tres vecinos acudieron a su consulta con fiebre alta, dolores musculares y una tos seca que no cedía con los remedios habituales. Rosa, acostumbrada a resfriados comunes y a alguna que otra fractura de tobillo, sintió una inquietud que no pudo disimular ante sus pacientes.",
          "Al cabo de una semana, el número de casos se había duplicado, y entre los afectados figuraban dos ancianos con enfermedades previas cuyo estado empeoraba con rapidez preocupante. Rosa se puso en contacto con las autoridades sanitarias de la capital, que le recomendaron enviar a los casos más graves al hospital regional, pero la carretera llevaba días cerrada por un temporal que nadie había previsto.",
          "Su padre, Ernesto, de setenta y ocho años y con el corazón delicado, vivía con ella desde que había enviudado. Rosa sabía que, si el virus llegaba a su propia casa, las probabilidades de que su padre lo superase sin complicaciones no eran precisamente alentadoras, y aquel temor personal se mezclaba, de manera incómoda, con su responsabilidad hacia el resto del pueblo.",
          "Para complicar aún más la situación, esa misma semana Rosa había recibido una oferta de trabajo de un hospital privado en la capital, con un sueldo tres veces superior al que ganaba en Piedrablanca y horarios que, por primera vez en años, le permitirían tener una vida fuera de la consulta. Debía dar una respuesta antes de que terminara el mes.",
          "Decidió, sin embargo, posponer cualquier decisión personal hasta controlar el brote. Organizó un pequeño centro de aislamiento en el antiguo local de la cooperativa agrícola, reclutó a dos vecinas con formación en enfermería para que la ayudaran, y estableció un protocolo estricto de higiene que muchos vecinos, acostumbrados a la vida comunitaria del pueblo, al principio recibieron con resistencia.",
          "Hubo quien se negó a aislarse, alegando que necesitaba trabajar el campo antes de que llegara el frío definitivo, y Rosa tuvo que emplear tanto paciencia como firmeza para convencer a esas familias de que el riesgo, aunque invisible, era real. En más de una ocasión discutió acaloradamente con vecinos que la habían visto crecer y que ahora ponían en duda su criterio profesional.",
          "La noche en que su padre empezó a tener fiebre, Rosa sintió que el mundo se le venía encima. Lo instaló en la habitación más ventilada de la casa, le administró los cuidados que había aprendido a dar a decenas de pacientes esa misma semana, y pasó la noche entera despierta, comprobando su temperatura cada hora, incapaz de separar por completo a la médica de la hija.",
          "Por fortuna, la fiebre de Ernesto cedió al tercer día, aunque la experiencia dejó en Rosa una fatiga que no era solo física. Aquella noche comprendió, con una claridad que la sorprendió, cuánto le importaba realmente aquel pueblo y cuánto se había equivocado al considerar la oferta de la capital como una simple mejora salarial.",
          "Con el paso de las semanas, el brote empezó a remitir gracias a las medidas que Rosa había impuesto, aunque no sin costo: dos ancianos del pueblo no sobrevivieron, y su pérdida se sintió con la intensidad propia de una comunidad tan pequeña que todos se conocían por su nombre de pila.",
          "En la asamblea vecinal que se celebró para agradecer su labor, varios vecinos, incluidos algunos de los que más se habían resistido al principio, le pidieron disculpas por sus dudas y le expresaron un reconocimiento que ella no supo cómo recibir sin emocionarse. Rosa comprendió entonces que aquel vínculo, forjado en la dificultad, no tenía equivalente en ningún sueldo.",
          "Semanas después, llamó al hospital de la capital para rechazar la oferta. Colgó el teléfono con una sensación de alivio genuino y, esa misma tarde, mientras caminaba hacia la consulta bajo la primera nevada del invierno, pensó que algunos médicos salvan vidas con tratamientos, y otros, como ella, simplemente deciden quedarse."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "How long had Dra. Rosa been the only doctor in Piedrablanca?",
        "options": [
          "Two years",
          "Twelve years",
          "Twenty years",
          "Six months"
        ],
        "correctIndex": 1,
        "explanation": "\"era, desde hacía doce años, la única médica de Piedrablanca.\""
      },
      {
        "type": "multiple-choice",
        "question": "What personal dilemma complicated Rosa's handling of the outbreak?",
        "options": [
          "She had a job offer from a private hospital in the capital",
          "She was pregnant",
          "She wanted to become mayor",
          "She had lost her medical license"
        ],
        "correctIndex": 0,
        "explanation": "\"esa misma semana Rosa había recibido una oferta de trabajo de un hospital privado en la capital.\""
      },
      {
        "type": "multiple-choice",
        "question": "What happened to Rosa's father during the outbreak?",
        "options": [
          "He was evacuated to the city",
          "He developed a fever but recovered by the third day",
          "He died from the illness",
          "He refused treatment"
        ],
        "correctIndex": 1,
        "explanation": "\"la fiebre de Ernesto cedió al tercer día.\""
      },
      {
        "type": "multiple-choice",
        "question": "What did Rosa decide at the end of the story?",
        "options": [
          "To accept the city job",
          "To reject the city job's offer and stay in the village",
          "To retire from medicine",
          "To move her father to the city"
        ],
        "correctIndex": 1,
        "explanation": "\"llamó al hospital de la capital para rechazar la oferta.\""
      }
    ]
  },
  {
    "slug": "siblings-dividing-inheritance",
    "level": "B2",
    "number": 69,
    "title": "La casa de las tres ventanas",
    "summary": "Three siblings must sort through their late mother's house and decide what to keep, sell, or let go.",
    "duration": "10 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Cuando murió su madre, Clara, Andrés y Beatriz se encontraron, por primera vez en años, reunidos bajo el mismo techo: la vieja casa de tres ventanas en la calle del Olivo, donde habían crecido y que ahora debían vaciar antes de ponerla en venta. Ninguno de los tres había imaginado que aquella tarea, en apariencia sencilla, removería tantos recuerdos y tantas diferencias que llevaban años disimulando bajo la cortesía familiar.",
          "Beatriz, la mayor, había asumido desde siempre el papel de organizadora, y llegó con cajas etiquetadas y una lista de tareas que pretendía completar en un solo fin de semana. Andrés, el hermano del medio, llegó tarde y de mal humor, todavía resentido porque, según él, había sido el único que había cuidado de su madre durante los últimos años sin recibir ayuda de sus hermanos.",
          "Clara, la menor, se limitó al principio a observar, incapaz de decidir si le apenaba más la muerte de su madre o la tensión evidente entre sus hermanos. Recorrió la casa despacio, tocando los muebles como quien busca reconocer algo que ya empieza a desvanecerse, y se detuvo largo rato frente al viejo piano vertical que nadie en la familia sabía tocar realmente bien.",
          "La primera discusión estalló por ese mismo piano. Beatriz insistía en venderlo, argumentando que ocupaba demasiado espacio y que ninguno de ellos tenía sitio en su casa para guardarlo; Andrés, en cambio, defendía conservarlo, alegando que su madre había pasado horas tocándolo cada tarde, aunque nunca llegara a dominar más de tres canciones.",
          "Clara propuso, para sorpresa de ambos, quedárselo ella misma, a pesar de que vivía en un apartamento pequeño donde apenas cabría. No sabía explicar del todo por qué le importaba tanto aquel instrumento desafinado, salvo que, cada vez que cerraba los ojos, todavía podía escuchar a su madre tocando la misma melodía imperfecta de siempre.",
          "Mientras vaciaban el armario del dormitorio principal, encontraron una caja de metal cerrada con llave que ninguno reconocía. Tras buscar durante una hora, Beatriz encontró la llave escondida dentro de un jarrón de la cocina, y al abrir la caja descubrieron un paquete de cartas escritas por un hombre llamado Tomás, fechadas décadas antes de que su madre conociera a su padre.",
          "Las cartas revelaban una historia de amor juvenil, interrumpida por circunstancias que las cartas no explicaban del todo, quizás la guerra, quizás la distancia, quizás simplemente la vida. Los tres hermanos leyeron los fragmentos en silencio, turnándose las hojas amarillentas, descubriendo una versión de su madre que ninguno había conocido: joven, enamorada, con sueños que quizás nunca llegaron a cumplirse del todo.",
          "El hallazgo, lejos de dividirlos aún más, los unió de una manera inesperada. Andrés admitió, con la voz quebrada, que siempre había sospechado que su madre guardaba una tristeza que nunca compartía del todo con ellos, y Beatriz reconoció que quizás había sido demasiado dura al insistir en vender rápido la casa, sin darles tiempo a procesar el duelo.",
          "Aquella noche, los tres se sentaron en el porche con una botella de vino que encontraron en la despensa, y por primera vez en mucho tiempo hablaron sin discutir, recordando anécdotas de su infancia, riendo de las manías de su madre, llorando también un poco, sin que nadie sintiera vergüenza por ello.",
          "Decidieron, finalmente, repartirse los objetos según lo que cada uno realmente valoraba, más allá de su precio: Beatriz se quedó con la vajilla de porcelana que su madre solo usaba en Navidad, Andrés con las herramientas del jardín que había heredado ya el hábito de cuidar, y Clara, como había propuesto desde el principio, con el piano desafinado.",
          "Vendieron la casa dos meses después a una pareja joven que, según les contaron, planeaba criar allí a sus hijos, y aunque a los tres se les hizo un nudo en la garganta al entregar las llaves, sintieron también un extraño alivio, como si hubieran cumplido con un ritual necesario antes de poder seguir adelante cada uno por su lado.",
          "Clara instaló el piano en su pequeño salón, apretujado entre el sofá y la ventana, y aunque jamás aprendió a tocarlo mejor que su madre, de vez en cuando pulsaba las mismas teclas desafinadas de siempre, no para hacer música, sino para sentir, aunque fuera por un instante, que su madre seguía un poco presente en la habitación."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "What event brings the three siblings together?",
        "options": [
          "A wedding",
          "Their mother's death and the need to empty her house",
          "A birthday party",
          "Their father's retirement"
        ],
        "correctIndex": 1,
        "explanation": "\"Cuando murió su madre, Clara, Andrés y Beatriz se encontraron... reunidos... para vaciar antes de ponerla en venta.\""
      },
      {
        "type": "multiple-choice",
        "question": "What did the siblings first argue about?",
        "options": [
          "Who would get the house",
          "What to do with their mother's old piano",
          "Who paid for the funeral",
          "Selling the car"
        ],
        "correctIndex": 1,
        "explanation": "\"La primera discusión estalló por ese mismo piano.\""
      },
      {
        "type": "multiple-choice",
        "question": "What did the siblings find in a locked metal box?",
        "options": [
          "Money and jewelry",
          "Old love letters from a man named Tomás written before their mother met their father",
          "Their mother's diary about them",
          "Legal documents about the house"
        ],
        "correctIndex": 1,
        "explanation": "\"descubrieron un paquete de cartas escritas por un hombre llamado Tomás, fechadas décadas antes de que su madre conociera a su padre.\""
      },
      {
        "type": "multiple-choice",
        "question": "Who ended up keeping the piano?",
        "options": [
          "Beatriz",
          "Andrés",
          "Clara",
          "They sold it"
        ],
        "correctIndex": 2,
        "explanation": "\"Clara, como había propuesto desde el principio, con el piano desafinado.\""
      }
    ]
  },
  {
    "slug": "journalist-local-corruption",
    "level": "B2",
    "number": 70,
    "title": "El precio del silencio",
    "summary": "A local journalist risks her career to expose a corruption scheme tied to a town's water contracts.",
    "duration": "9 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Valeria llevaba cinco años escribiendo para El Faro, el pequeño periódico local de Montegrís, cubriendo sobre todo fiestas municipales, resultados deportivos y alguna que otra inauguración de obras públicas. Nunca había imaginado que un simple comentario, escuchado por casualidad en la cola del supermercado, la llevaría a investigar el asunto más peligroso de su carrera.",
          "Una vecina se quejaba, en voz baja pero indignada, de que la factura del agua había subido de nuevo, a pesar de que el alcalde había prometido, en su última campaña, que la privatización del servicio abarataría los costos para las familias. Aquel comentario, aparentemente trivial, despertó en Valeria una curiosidad que no la dejó tranquila durante días.",
          "Empezó a revisar los archivos públicos del ayuntamiento, buscando el contrato original firmado entre el municipio y la empresa Aguavista, la compañía que gestionaba el suministro desde hacía tres años. Descubrió, para su sorpresa, que varios documentos clave habían sido clasificados como confidenciales, algo poco habitual para un contrato de servicios públicos.",
          "A través de un antiguo compañero de universidad que ahora trabajaba en la administración regional, consiguió acceso a una copia del contrato completo, en el que encontró una cláusula que permitía a Aguavista subir las tarifas cada seis meses sin necesidad de aprobación municipal, siempre que alegara un aumento en los costos de mantenimiento.",
          "Más inquietante aún resultó descubrir que el hermano del alcalde figuraba como accionista minoritario de una empresa subcontratada por Aguavista para las obras de mantenimiento, un dato que ningún medio había señalado hasta entonces y que sugería un conflicto de interés evidente.",
          "Cuando Valeria le mostró sus hallazgos a su director, este se mostró visiblemente nervioso y le advirtió que el periódico dependía en gran parte de la publicidad institucional del ayuntamiento, insinuando, sin decirlo del todo abiertamente, que publicar aquella información podría poner en riesgo la supervivencia del propio medio.",
          "Valeria pasó varias noches debatiéndose entre la prudencia y su sentido del deber profesional. Sabía que, si publicaba el artículo sin el respaldo de su director, se arriesgaba a perder su empleo, pero también sentía que callar la convertiría en cómplice de algo que afectaba directamente el bolsillo de vecinos que apenas llegaban a fin de mes.",
          "Decidió buscar corroboración adicional antes de dar el paso definitivo. Contactó a un antiguo empleado de Aguavista, despedido meses atrás, que aceptó hablar con ella bajo condición de anonimato y que confirmó, con detalles precisos, cómo se inflaban los costos de mantenimiento para justificar las subidas de tarifa.",
          "Con las pruebas reunidas, Valeria redactó el artículo con un cuidado casi obsesivo, verificando cada dato, citando cada documento, consciente de que un solo error podría dar al alcalde motivos legales para desacreditar toda la investigación. Cuando se lo entregó a su director, este tardó dos días enteros en darle una respuesta.",
          "Finalmente, el director accedió a publicarlo, aunque insistió en que se incluyera también la versión oficial del ayuntamiento, que por supuesto negó cualquier irregularidad. El artículo se publicó un jueves por la mañana, y para el mediodía ya se había compartido por todo el pueblo, generando una indignación que Valeria no había anticipado del todo.",
          "El alcalde intentó, sin éxito, presionar al periódico para que se retractara, pero la evidencia documental resultó demasiado sólida para ignorarla. Semanas después, la fiscalía regional abrió una investigación oficial sobre el contrato con Aguavista, y aunque el proceso judicial se prolongaría durante meses, el simple hecho de que se hubiera iniciado representaba una victoria significativa.",
          "Valeria recibió, en los días siguientes, tanto amenazas anónimas como mensajes de agradecimiento de vecinos que jamás había conocido personalmente. No se consideraba una heroína, pero por primera vez en su carrera sintió que su trabajo había servido para algo más que llenar páginas: había servido para que la verdad, aunque incómoda, saliera finalmente a la luz."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "What triggered Valeria's investigation?",
        "options": [
          "An anonymous tip sent to the newspaper",
          "Overhearing a neighbor complain about rising water bills at the supermarket",
          "A press conference by the mayor",
          "A leaked document mailed to her home"
        ],
        "correctIndex": 1,
        "explanation": "\"Una vecina se quejaba... de que la factura del agua había subido de nuevo.\""
      },
      {
        "type": "multiple-choice",
        "question": "What conflict of interest did Valeria discover?",
        "options": [
          "The mayor's brother was a minority shareholder in a company subcontracted by Aguavista",
          "The mayor owned Aguavista outright",
          "Valeria's editor was bribed",
          "The water company was foreign-owned"
        ],
        "correctIndex": 0,
        "explanation": "\"el hermano del alcalde figuraba como accionista minoritario de una empresa subcontratada por Aguavista.\""
      },
      {
        "type": "multiple-choice",
        "question": "Why was Valeria's director initially hesitant to publish the story?",
        "options": [
          "He didn't believe the evidence",
          "The newspaper depended heavily on institutional advertising from the town hall",
          "He was friends with the mayor",
          "He thought it wasn't newsworthy"
        ],
        "correctIndex": 1,
        "explanation": "\"el periódico dependía en gran parte de la publicidad institucional del ayuntamiento.\""
      },
      {
        "type": "multiple-choice",
        "question": "What was the ultimate result of the article's publication?",
        "options": [
          "Nothing happened",
          "The regional prosecutor's office opened an official investigation into the contract",
          "Valeria was fired",
          "The mayor resigned immediately"
        ],
        "correctIndex": 1,
        "explanation": "\"la fiscalía regional abrió una investigación oficial sobre el contrato con Aguavista.\""
      }
    ]
  },
  {
    "slug": "musician-two-paths",
    "level": "B2",
    "number": 71,
    "title": "Dos caminos, una guitarra",
    "summary": "A talented guitarist must choose between a stable orchestra position and a risky chance at solo stardom.",
    "duration": "9 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Iván llevaba tocando la guitarra clásica desde los seis años, cuando su abuelo, un aficionado sin formación pero con un oído excelente, le regaló su primer instrumento y le enseñó, con paciencia infinita, los acordes básicos de unas canciones que ya nadie recordaba. Veinte años después, aquella pasión infantil se había convertido en una carrera prometedora, aunque todavía incierta.",
          "Recién terminado el conservatorio, recibió dos ofertas casi al mismo tiempo, como si el destino hubiera decidido ponerlo a prueba deliberadamente. Por un lado, la Orquesta Sinfónica Nacional le ofrecía un puesto fijo como guitarrista de refuerzo en producciones especiales, con un sueldo modesto pero estable y la seguridad de un contrato indefinido.",
          "Por otro lado, un pequeño sello discográfico independiente le proponía grabar un álbum propio de composiciones originales, mezclando la técnica clásica con influencias del flamenco contemporáneo, y salir de gira durante seis meses por salas pequeñas de toda Latinoamérica. El riesgo era evidente: sin garantía de ingresos fijos y con la posibilidad real de que el proyecto no funcionara.",
          "Su familia, especialmente su madre, insistía en que aceptara el puesto en la orquesta. \"Con la música nunca se sabe\", le repetía, \"pero un contrato fijo es un contrato fijo\". Iván entendía la preocupación de su madre, que lo había visto pasar años de estrecheces económicas mientras estudiaba, pero algo dentro de él se resistía a conformarse con la seguridad si eso significaba renunciar a expresar su propia voz artística.",
          "Habló largamente con su antiguo profesor de composición, un hombre ya mayor que había pasado toda su vida en orquestas sin arrepentimiento, pero que también reconocía haber dejado de lado, hacía décadas, un proyecto personal similar al que ahora se le presentaba a Iván. \"No te digo qué elegir\", le dijo, \"pero pregúntate qué recordarás con más pesar dentro de treinta años: el riesgo que tomaste o el que dejaste pasar\".",
          "Durante semanas, Iván pospuso la decisión, incapaz de decantarse completamente por ninguna de las dos opciones. Grabó, casi a escondidas, tres canciones de su propuesta de álbum en el pequeño estudio de un amigo, solo para comprobar si el proyecto sonaba tan bien en la práctica como en su imaginación.",
          "El resultado lo convenció de que aquellas composiciones tenían algo genuino, algo que no había sentido al interpretar, por más veces que lo hubiera hecho con maestría, las partituras de otros compositores en la orquesta. Sin embargo, la idea de decepcionar a su familia y de renunciar a la seguridad económica seguía pesándole enormemente.",
          "Decidió proponer un compromiso poco convencional: solicitó a la orquesta un aplazamiento de seis meses antes de incorporarse, alegando compromisos previos, con la esperanza de que aceptaran esperarlo. Para su sorpresa, el director de la orquesta, lejos de negarse, le confesó que él mismo, de joven, había hecho algo parecido antes de asentarse definitivamente en la vida orquestal.",
          "Con el aplazamiento concedido, Iván se lanzó a grabar el álbum con una mezcla de entusiasmo y ansiedad que no había sentido nunca antes. Las giras por salas pequeñas resultaron agotadoras, con noches de hoteles baratos y públicos que a veces apenas llenaban la mitad del aforo, pero también con momentos de conexión genuina con el público que ninguna partitura orquestal le había proporcionado jamás.",
          "A mitad de la gira, un crítico influyente escribió una reseña elogiosa sobre su álbum, destacando precisamente la fusión entre técnica clásica y sensibilidad flamenca que Iván había cultivado con tanto cuidado. Aquella reseña le abrió puertas que antes le parecían inalcanzables, incluyendo la invitación a tocar en un festival internacional de renombre.",
          "Al finalizar los seis meses acordados, Iván tuvo que tomar la decisión definitiva. Su carrera solista, aunque todavía modesta, mostraba señales claras de crecimiento, y aunque significaba renunciar a la estabilidad que tanto tranquilizaba a su madre, decidió declinar finalmente la oferta de la orquesta.",
          "Su madre, al principio decepcionada, terminó por asistir a uno de sus conciertos meses después, y al verlo interpretar sus propias composiciones ante un público entregado, comprendió que la verdadera seguridad de su hijo no residía en un contrato, sino en la certeza tranquila de estar haciendo exactamente lo que había nacido para hacer."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "What two offers did Iván receive after finishing the conservatory?",
        "options": [
          "A teaching job and a recording contract",
          "A fixed position in the National Symphony Orchestra and a chance to record a solo album with an independent label",
          "Two orchestra positions in different cities",
          "A film score job and a wedding band job"
        ],
        "correctIndex": 1,
        "explanation": "\"la Orquesta Sinfónica Nacional le ofrecía un puesto fijo... un pequeño sello discográfico independiente le proponía grabar un álbum propio.\""
      },
      {
        "type": "multiple-choice",
        "question": "What did Iván's old composition professor tell him?",
        "options": [
          "To always choose stability",
          "To ask himself which choice he'd regret more in thirty years",
          "To quit music altogether",
          "To take both offers simultaneously"
        ],
        "correctIndex": 1,
        "explanation": "\"pregúntate qué recordarás con más pesar dentro de treinta años: el riesgo que tomaste o el que dejaste pasar.\""
      },
      {
        "type": "multiple-choice",
        "question": "How did the orchestra's director respond to Iván's request for a six-month delay?",
        "options": [
          "He refused and withdrew the offer",
          "He granted it, admitting he had done something similar when young",
          "He fired Iván on the spot",
          "He reported Iván to the union"
        ],
        "correctIndex": 1,
        "explanation": "\"el director de la orquesta... le confesó que él mismo, de joven, había hecho algo parecido.\""
      },
      {
        "type": "multiple-choice",
        "question": "What did Iván ultimately decide?",
        "options": [
          "He accepted the orchestra position",
          "He declined the orchestra offer to continue his solo career",
          "He gave up music entirely",
          "He joined a different orchestra"
        ],
        "correctIndex": 1,
        "explanation": "\"decidió declinar finalmente la oferta de la orquesta.\""
      }
    ]
  },
  {
    "slug": "teacher-last-year",
    "level": "B2",
    "number": 72,
    "title": "El último curso",
    "summary": "A veteran teacher confronts change and legacy during her final year in the classroom.",
    "duration": "10 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Amparo llevaba treinta y ocho años enseñando literatura en el instituto público de su ciudad, tantos que ya había dado clase a los hijos de algunos de sus primeros alumnos. Aquel curso, sin embargo, sería el último: había decidido jubilarse en junio, y la certeza de la fecha límite le provocaba una mezcla extraña de alivio y melancolía que no sabía bien cómo gestionar.",
          "El nuevo director del centro, un hombre joven recién llegado de la administración regional, insistía en modernizar los métodos de enseñanza, sustituyendo los libros de texto por tabletas y promoviendo evaluaciones basadas en proyectos digitales en lugar de los exámenes tradicionales que Amparo había perfeccionado durante décadas. Ella no se oponía por principio al cambio, pero sentía que aquellas reformas, impuestas con prisa, no siempre respetaban lo que de verdad funcionaba en el aula.",
          "Entre sus alumnos de aquel último curso destacaba, por razones equivocadas, un chico llamado Rubén, que apenas prestaba atención en clase y que, según los rumores del claustro, atravesaba serias dificultades familiares desde que sus padres se habían separado meses atrás. Amparo, lejos de rendirse con él como habían hecho ya varios de sus colegas, decidió dedicarle una atención especial, aunque el chico respondía casi siempre con indiferencia o sarcasmo.",
          "Una tarde, revisando los cuadernos de la clase, encontró entre las páginas de Rubén un poema breve, escrito con una sensibilidad que contrastaba enormemente con su comportamiento habitual. Los versos hablaban, sin nombrarlo directamente, de la sensación de sentirse invisible en la propia casa, y Amparo comprendió que aquel muchacho escondía, tras su actitud desafiante, una tristeza profunda que nadie parecía haber notado.",
          "Decidió, sin decírselo a nadie del claustro, dedicar parte de sus clases a un pequeño proyecto de escritura creativa, animando a todos los alumnos a expresar por escrito emociones que rara vez compartían en voz alta. El director, al enterarse, se mostró escéptico al principio, pues aquel proyecto no encajaba con el currículo digital que él mismo había diseñado.",
          "Sin embargo, cuando Amparo le mostró algunos de los textos producidos por sus alumnos, incluido, con permiso de Rubén, el poema que tanto la había conmovido, el director guardó silencio durante un buen rato antes de admitir que quizás había subestimado el valor de ciertos métodos que él mismo consideraba anticuados.",
          "Con el paso de los meses, Rubén empezó a mostrar un interés inesperado en la literatura, participando en clase con comentarios que sorprendían tanto a Amparo como a sus propios compañeros. No se trataba de una transformación milagrosa, pues seguía teniendo días difíciles, pero la chispa que Amparo había detectado en aquel poema parecía, poco a poco, encontrar espacio para crecer.",
          "Amparo, por su parte, empezó a preguntarse si no estaría cometiendo un error al aferrarse tanto a sus métodos tradicionales, y decidió incorporar, con cautela, algunas de las herramientas digitales que el director proponía, siempre que sirvieran para profundizar en la comprensión de los textos y no simplemente para sustituir el esfuerzo por la comodidad.",
          "La convivencia entre generaciones distintas de docentes, representada en aquel pulso silencioso entre Amparo y el director, terminó por convertirse en una colaboración inesperadamente fructífera, en la que ambos aprendieron a ceder sin renunciar a lo esencial de sus respectivas convicciones pedagógicas.",
          "Llegó el mes de junio, y con él la última clase de Amparo antes de su jubilación definitiva. Sus alumnos, sin que ella lo supiera, habían preparado una pequeña sorpresa: cada uno leyó en voz alta un breve fragmento escrito durante el curso, una suerte de antología improvisada que resumía, mejor que cualquier discurso, lo que aquel proyecto había significado para ellos.",
          "Rubén fue el último en leer, y su voz, generalmente apagada, sonó firme mientras compartía un texto en el que agradecía, sin dramatismo pero con sinceridad evidente, haber tenido una profesora que se hubiera fijado en él cuando nadie más lo hacía. Amparo tuvo que contener las lágrimas frente a toda la clase, algo que no recordaba haber hecho en sus treinta y ocho años de carrera.",
          "Al salir del instituto aquella tarde, cargando una caja con los objetos personales acumulados durante décadas, Amparo se detuvo un momento en el patio para observar el edificio donde había pasado la mayor parte de su vida adulta. Sintió que se marchaba, no con la sensación de haber terminado algo, sino con la certeza tranquila de haber sembrado semillas cuyo fruto probablemente nunca llegaría a ver del todo, y que precisamente por eso merecían la pena."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "How many years had Amparo been teaching?",
        "options": [
          "Fifteen",
          "Twenty",
          "Thirty-eight",
          "Fifty"
        ],
        "correctIndex": 2,
        "explanation": "\"Amparo llevaba treinta y ocho años enseñando literatura.\""
      },
      {
        "type": "multiple-choice",
        "question": "What did Amparo discover in Rubén's notebook?",
        "options": [
          "A failing test",
          "A short poem revealing hidden sadness about feeling invisible at home",
          "A note insulting her",
          "A drawing of the school"
        ],
        "correctIndex": 1,
        "explanation": "\"encontró entre las páginas de Rubén un poema breve... hablaban... de la sensación de sentirse invisible en la propia casa.\""
      },
      {
        "type": "multiple-choice",
        "question": "How did the new director initially react to Amparo's creative writing project?",
        "options": [
          "He enthusiastically endorsed it immediately",
          "He was skeptical because it didn't fit his digital curriculum",
          "He banned it outright",
          "He asked to co-teach it"
        ],
        "correctIndex": 1,
        "explanation": "\"El director, al enterarse, se mostró escéptico al principio, pues aquel proyecto no encajaba con el currículo digital.\""
      },
      {
        "type": "multiple-choice",
        "question": "What happened on Amparo's last day of class?",
        "options": [
          "Nothing special happened",
          "Students read aloud pieces they had written during the course, including Rubén's",
          "She was fired",
          "The director cancelled her retirement"
        ],
        "correctIndex": 1,
        "explanation": "\"cada uno leyó en voz alta un breve fragmento escrito durante el curso.\""
      }
    ]
  },
  {
    "slug": "farmer-climate-change",
    "level": "B2",
    "number": 73,
    "title": "La tierra que cambia",
    "summary": "A farmer must decide whether to abandon his family's traditional crop as drought reshapes the land.",
    "duration": "10 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Joaquín había heredado, junto con las tierras de su padre, una manera de entender la agricultura que se remontaba a generaciones: sembrar trigo en otoño, cosecharlo en verano, confiar en que las lluvias llegaran cuando debían llegar. Durante años, aquel ciclo se había repetido con la regularidad tranquilizadora de una costumbre asentada, hasta que el clima, poco a poco, dejó de cumplir su parte del acuerdo.",
          "Los últimos cinco veranos habían sido los más secos que se recordaban en la comarca, y el pozo que abastecía la finca familiar apenas daba ya la mitad del agua que solía dar una década atrás. Joaquín observaba, cada vez con mayor preocupación, cómo las espigas de trigo se marchitaban antes de tiempo, incapaz de encontrar una solución que no implicara sacrificios importantes.",
          "Un ingeniero agrónomo, contratado por la cooperativa local, le sugirió durante una visita que considerara sustituir parte del cultivo de trigo por almendros y otras variedades más resistentes a la sequía, además de instalar un sistema de riego por goteo alimentado con paneles solares que reduciría considerablemente el consumo de agua y energía.",
          "Su padre, Fermín, ya jubilado pero todavía muy presente en las decisiones de la finca, recibió la propuesta con un escepticismo que rozaba la indignación. \"Aquí siempre se ha sembrado trigo\", repetía, golpeando el suelo con el bastón, \"y no seré yo quien vea cómo mi hijo cambia lo que su abuelo construyó con sus propias manos\".",
          "Joaquín entendía el apego de su padre a la tradición, pero también sabía, por los datos que el ingeniero le había mostrado, que insistir en el trigo bajo aquellas condiciones climáticas equivalía, a mediano plazo, a condenar la finca a la ruina. La disyuntiva lo mantenía despierto por las noches: honrar el pasado o asegurar el futuro, sin encontrar una manera clara de conciliar ambas cosas.",
          "Decidió, como primer paso prudente, dedicar solo una parte de las tierras al experimento con almendros, conservando el resto para el trigo tradicional, con la esperanza de que los resultados le permitieran tomar una decisión más informada sin comprometer toda la finca de golpe. Fermín, aunque no del todo convencido, aceptó a regañadientes aquel compromiso.",
          "El primer año del experimento coincidió, irónicamente, con una de las peores sequías registradas en décadas. El trigo sembrado en la parte tradicional de la finca se perdió casi por completo, mientras que los almendros jóvenes, aunque exigentes en sus primeros meses, resistieron gracias al sistema de riego por goteo instalado con la ayuda de una subvención regional destinada a la adaptación climática.",
          "Fermín observó, con una mezcla de tristeza y asombro, cómo el campo de trigo se convertía en un páramo amarillento mientras la pequeña plantación de almendros, apenas unas hectáreas, se mantenía verde y vigorosa bajo el sol implacable del verano. No dijo nada durante días, pero Joaquín notó que su padre pasaba cada tarde caminando entre los almendros, observándolos con una atención que antes reservaba únicamente para el trigo.",
          "Una noche, mientras cenaban en silencio, Fermín rompió finalmente su mutismo: \"Quizás me equivoqué al pensar que amar esta tierra significaba negarme a que cambiara\". Joaquín, sorprendido por aquella confesión inesperada, comprendió que su padre no estaba renunciando a sus raíces, sino aprendiendo, con la dificultad propia de quien lleva toda una vida pensando de una manera, a adaptarse sin perder su identidad.",
          "Al año siguiente, ampliaron considerablemente la superficie dedicada a los almendros, aunque decidieron conservar una pequeña parcela de trigo, más simbólica que rentable, como homenaje a las generaciones anteriores de la familia. Aquel gesto, sugerido curiosamente por el propio Fermín, se convirtió en una especie de ritual anual que ambos cultivaban juntos cada otoño.",
          "La finca, reconvertida parcialmente, empezó a mostrar signos claros de recuperación económica, y varios vecinos de la comarca, enterados del éxito relativo del experimento, empezaron a acercarse a Joaquín para preguntarle sobre el sistema de riego y las variedades de almendro que había elegido, convirtiéndolo, sin buscarlo, en una especie de referente local para la adaptación agrícola.",
          "Una tarde de primavera, mientras padre e hijo revisaban juntos el sistema de riego bajo un cielo despejado, Fermín comentó, casi como si hablara consigo mismo, que quizás la verdadera tradición familiar no había sido nunca el trigo en sí, sino la capacidad de trabajar la tierra con el ingenio necesario para sobrevivir a lo que esta les fuera exigiendo con el paso del tiempo."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "What crop had Joaquín's family traditionally grown?",
        "options": [
          "Grapes",
          "Wheat",
          "Rice",
          "Corn"
        ],
        "correctIndex": 1,
        "explanation": "\"sembrar trigo en otoño, cosecharlo en verano.\""
      },
      {
        "type": "multiple-choice",
        "question": "What alternative did the agronomist suggest?",
        "options": [
          "Abandoning farming entirely",
          "Replacing part of the wheat with almond trees and drip irrigation powered by solar panels",
          "Moving to a different region",
          "Growing only wheat but at night"
        ],
        "correctIndex": 1,
        "explanation": "\"sustituir parte del cultivo de trigo por almendros... instalar un sistema de riego por goteo alimentado con paneles solares.\""
      },
      {
        "type": "multiple-choice",
        "question": "What happened during the first year of the almond experiment?",
        "options": [
          "Both crops failed",
          "The wheat failed in a severe drought while the young almond trees survived thanks to drip irrigation",
          "The almonds failed and the wheat thrived",
          "A flood destroyed everything"
        ],
        "correctIndex": 1,
        "explanation": "\"El trigo sembrado en la parte tradicional de la finca se perdió casi por completo, mientras que los almendros jóvenes... resistieron.\""
      },
      {
        "type": "multiple-choice",
        "question": "What did Fermín eventually conclude?",
        "options": [
          "That farming should be abandoned",
          "That perhaps loving the land didn't mean refusing to let it change",
          "That his son was wrong to experiment",
          "That they should sell the farm"
        ],
        "correctIndex": 1,
        "explanation": "\"Quizás me equivoqué al pensar que amar esta tierra significaba negarme a que cambiara.\""
      }
    ]
  },
  {
    "slug": "astronaut-return-ordinary-life",
    "level": "B2",
    "number": 74,
    "title": "La gravedad de lo cotidiano",
    "summary": "An astronaut struggles to readjust to everyday life after months aboard the space station.",
    "duration": "10 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Lucía había pasado doscientos treinta y cuatro días a bordo de la estación espacial, flotando entre experimentos científicos y una ventanilla desde la que veía la Tierra girar con una belleza que ningún entrenamiento la había preparado a asimilar del todo. Sin embargo, nadie le había advertido con suficiente claridad lo difícil que resultaría regresar a la vida ordinaria una vez que sus pies volvieran a tocar el suelo.",
          "Los primeros días tras el aterrizaje los pasó en un centro médico, sometida a pruebas que evaluaban cómo la ingravidez había afectado sus huesos, sus músculos y hasta su sentido del equilibrio. Le costaba caminar en línea recta, y la simple tarea de sostener un vaso de agua sin derramarlo requería una concentración que la avergonzaba, ella que había maniobrado equipos de precisión a cientos de kilómetros de altura.",
          "Cuando por fin volvió a casa, junto a su esposo Martín y su hija de nueve años, Valentina, descubrió que la vida doméstica le resultaba, paradójicamente, más desconcertante que la vida en órbita. Las discusiones sobre qué cocinar para la cena, las facturas acumuladas, las tareas escolares de Valentina: todo aquello, que antes de su misión le parecía natural, ahora se le antojaba absurdamente complicado.",
          "Martín, que había asumido solo la crianza de Valentina durante los ocho meses de ausencia de Lucía, había desarrollado rutinas propias que funcionaban perfectamente sin ella, y aunque se alegraba sinceramente de su regreso, Lucía percibió, con cierta tristeza, que su presencia interrumpía un equilibrio familiar que se había formado en su ausencia.",
          "Valentina, por su parte, se mostraba distante con su madre, como si el tiempo transcurrido hubiera creado una distancia emocional que ni los abrazos ni las explicaciones lograban del todo cerrar. Una noche, mientras Lucía intentaba ayudarla con los deberes de matemáticas, la niña le espetó, sin maldad pero con una honestidad dolorosa: \"Papá me lo explica mejor\".",
          "Lucía comprendió entonces que su hazaña profesional, celebrada por medios de comunicación de todo el mundo, había tenido un costo silencioso en su vida familiar que nadie le había mencionado durante el entrenamiento previo a la misión. Empezó a asistir a terapia, algo que la agencia espacial recomendaba pero que ella, hasta entonces, había considerado innecesario para alguien entrenado para resistir situaciones extremas.",
          "Su terapeuta le explicó que muchos astronautas atravesaban un fenómeno conocido informalmente como \"síndrome del regreso\", una sensación de desorientación y pérdida de propósito al volver a una vida cuyas rutinas parecían insignificantes comparadas con la intensidad de la experiencia espacial. Aquella explicación, aunque no resolvía nada de inmediato, le proporcionó al menos un nombre para lo que sentía.",
          "Con paciencia, Lucía empezó a reconstruir su relación con Valentina a través de pequeños gestos cotidianos: recogerla del colegio, aunque Martín se ofreciera a hacerlo, ayudarla con los deberes aunque tardara más tiempo que su padre, sentarse simplemente a su lado mientras la niña dibujaba, sin exigir conversación ni cercanía inmediata.",
          "Poco a poco, aquellos gestos empezaron a dar frutos. Una tarde, mientras Lucía preparaba la cena, Valentina se acercó espontáneamente y le preguntó cómo se sentía flotar en el espacio, una pregunta que nunca antes le había formulado directamente. Lucía se sentó con ella en el suelo de la cocina y le describió, con todo el detalle que pudo, la sensación de ingravidez, el silencio absoluto, el miedo y la maravilla mezclados en cada instante.",
          "Aquella conversación marcó un punto de inflexión en su relación. Valentina empezó a hacerle más preguntas, a mostrar curiosidad genuina por la experiencia de su madre, y Lucía descubrió que compartir su historia, en lugar de simplemente intentar retomar la rutina anterior, era la manera más efectiva de reconstruir el vínculo que la distancia había debilitado.",
          "Con Martín, la reconstrucción resultó más lenta, pues ambos tuvieron que aprender a redefinir roles que habían cambiado durante su ausencia, negociando con paciencia quién se encargaba de qué, sin que ninguno de los dos sintiera que estaba siendo desplazado o ignorado en su propia casa.",
          "Meses después, cuando la agencia espacial le propuso a Lucía una nueva misión, esta vez de mayor duración, ella pidió tiempo para pensarlo, algo que nunca antes había hecho ante una oportunidad profesional de tal magnitud. Comprendió que, por primera vez en su carrera, la decisión no dependía únicamente de su ambición personal, sino de un equilibrio familiar que había costado reconstruir y que no estaba dispuesta a arriesgar sin medirlo cuidadosamente."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "How many days had Lucía spent on the space station?",
        "options": [
          "100",
          "234",
          "365",
          "50"
        ],
        "correctIndex": 1,
        "explanation": "\"Lucía había pasado doscientos treinta y cuatro días a bordo de la estación espacial.\""
      },
      {
        "type": "multiple-choice",
        "question": "What physical difficulty did Lucía experience after landing?",
        "options": [
          "She couldn't see properly",
          "She had trouble walking straight and holding a glass of water without spilling it",
          "She lost her sense of smell",
          "She couldn't speak"
        ],
        "correctIndex": 1,
        "explanation": "\"Le costaba caminar en línea recta, y la simple tarea de sostener un vaso de agua sin derramarlo requería una concentración.\""
      },
      {
        "type": "multiple-choice",
        "question": "What did Valentina say that hurt Lucía?",
        "options": [
          "\"I don't love you anymore\"",
          "\"Papá me lo explica mejor\" (Dad explains it better)",
          "\"Go back to space\"",
          "\"You're not my mother\""
        ],
        "correctIndex": 1,
        "explanation": "\"Papá me lo explica mejor.\""
      },
      {
        "type": "multiple-choice",
        "question": "What did Lucía do when offered a new, longer space mission?",
        "options": [
          "She accepted immediately",
          "She asked for time to think it over, weighing her family's rebuilt balance",
          "She refused outright without thinking",
          "She asked Martín to decide for her"
        ],
        "correctIndex": 1,
        "explanation": "\"ella pidió tiempo para pensarlo... no estaba dispuesta a arriesgar sin medirlo cuidadosamente.\""
      }
    ]
  },
  {
    "slug": "rower-comeback-injury",
    "level": "B2",
    "number": 75,
    "title": "Contra la corriente",
    "summary": "An injured competitive rower fights to return to the national team before the qualifying regatta.",
    "duration": "9 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Nadia se rompió el hombro derecho seis meses antes de los Juegos Panamericanos, durante un entrenamiento rutinario en el que un movimiento mal calculado la hizo caer del bote hacia un lado con una violencia que ella misma no supo explicar después. El diagnóstico fue tajante: una lesión que requeriría cirugía y, según el médico, entre ocho y diez meses de recuperación completa.",
          "Aquella noticia llegó justo cuando Nadia atravesaba el mejor momento de su carrera como remera, tras haber conseguido meses antes su mejor marca personal en los mil metros individuales. La posibilidad de perderse la clasificación para el equipo nacional le resultaba tan dolorosa como la propia lesión física, quizás incluso más.",
          "Los primeros días después de la operación fueron los más difíciles. Nadia, acostumbrada a entrenar seis horas diarias, se veía reducida a ejercicios mínimos de fisioterapia, incapaz siquiera de levantar una taza de café sin sentir un dolor punzante que le recorría todo el brazo. La frustración la llevó, en más de una ocasión, a plantearse abandonar definitivamente el remo.",
          "Su entrenador, Óscar, un hombre que la había formado desde que tenía catorce años, se negó rotundamente a aceptar aquella posibilidad. \"Las lesiones se curan\", le repetía durante las sesiones de fisioterapia a las que la acompañaba casi a diario, \"pero el arrepentimiento de no haberlo intentado no se cura nunca\". Nadia, aunque escéptica al principio, encontró en aquella insistencia una motivación que no lograba generar por sí sola.",
          "La recuperación avanzó más lentamente de lo previsto, en parte porque Nadia, impaciente, forzaba los ejercicios más de lo recomendado, lo que en una ocasión le provocó una inflamación que retrasó el proceso casi tres semanas. Aquel episodio le enseñó, a la fuerza, una lección de paciencia que ningún entrenamiento físico le había inculcado hasta entonces.",
          "Mientras tanto, la fecha límite para la clasificación al equipo nacional se acercaba inexorablemente, y Nadia calculaba, con una angustia creciente, si su cuerpo estaría listo a tiempo. El comité técnico le concedió, gracias a la insistencia de Óscar, una prórroga excepcional de seis semanas para presentarse a la regata clasificatoria, aunque le advirtieron que no habría más excepciones.",
          "Retomó los entrenamientos en el agua apenas cinco meses después de la operación, mucho antes de lo que el médico había recomendado inicialmente, aunque bajo una supervisión médica estricta que limitaba la intensidad de cada sesión. Las primeras semanas resultaron desalentadoras: su técnica, antes impecable, se veía entorpecida por el miedo instintivo a repetir el movimiento que había causado la lesión.",
          "Óscar ideó un plan de entrenamiento progresivo, centrado tanto en la recuperación física como en superar el bloqueo psicológico que Nadia arrastraba desde el accidente. Le hizo practicar, primero en tierra y luego en aguas tranquilas, el movimiento exacto que temía repetir, descomponiéndolo en fases hasta que Nadia consiguiera ejecutarlo sin que el cuerpo se le tensara anticipando el dolor.",
          "Dos semanas antes de la regata clasificatoria, Nadia consiguió, por primera vez desde el accidente, completar una sesión completa de entrenamiento sin sentir miedo ni dolor significativo. Aquel logro, insignificante para cualquier observador externo, representó para ella una victoria mayor que cualquier medalla que hubiera ganado anteriormente en su carrera.",
          "El día de la regata, Nadia se subió al bote con una mezcla de nervios y determinación que no recordaba haber sentido con tanta intensidad en competiciones anteriores. Sabía que su marca no sería la mejor de su carrera, dadas las circunstancias, pero también sabía que simplemente estar allí, remando de nuevo con el hombro reconstruido, ya constituía en sí mismo un triunfo personal.",
          "Terminó la regata en segunda posición, un resultado suficiente para asegurar su plaza en el equipo nacional, aunque por un margen mucho más estrecho del que estaba acostumbrada. Al bajar del bote, rompió a llorar frente a Óscar, que la abrazó sin decir palabra, sabiendo que aquellas lágrimas contenían meses enteros de dolor, dudas y esfuerzo silencioso.",
          "Meses después, en los Juegos Panamericanos, Nadia no consiguió subir al podio, terminando en un discreto quinto lugar, pero cuando los periodistas le preguntaron si se sentía decepcionada, respondió con una sonrisa serena que sorprendió a más de uno: \"La verdadera medalla ya la gané el día que volví a remar sin miedo\"."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "What injury did Nadia suffer?",
        "options": [
          "A broken leg",
          "A shoulder injury requiring surgery and 8-10 months recovery",
          "A concussion",
          "A wrist sprain"
        ],
        "correctIndex": 1,
        "explanation": "\"una lesión que requeriría cirugía y... entre ocho y diez meses de recuperación completa.\""
      },
      {
        "type": "multiple-choice",
        "question": "What did coach Óscar tell Nadia to keep her from quitting?",
        "options": [
          "\"Injuries heal, but regret for not trying never heals\"",
          "\"You were never good enough anyway\"",
          "\"Take as long as you need, there's no rush\"",
          "\"Find a new sport\""
        ],
        "correctIndex": 0,
        "explanation": "\"Las lesiones se curan... pero el arrepentimiento de no haberlo intentado no se cura nunca.\""
      },
      {
        "type": "multiple-choice",
        "question": "What psychological obstacle did Nadia face during recovery?",
        "options": [
          "Fear of water",
          "An instinctive fear of repeating the exact movement that caused her injury",
          "Fear of her coach",
          "Loss of interest in rowing"
        ],
        "correctIndex": 1,
        "explanation": "\"su técnica... se veía entorpecida por el miedo instintivo a repetir el movimiento que había causado la lesión.\""
      },
      {
        "type": "multiple-choice",
        "question": "What was the result of the qualifying regatta?",
        "options": [
          "She won first place easily",
          "She finished second, enough to secure her spot on the national team",
          "She failed to qualify",
          "She withdrew from the race"
        ],
        "correctIndex": 1,
        "explanation": "\"Terminó la regata en segunda posición, un resultado suficiente para asegurar su plaza en el equipo nacional.\""
      }
    ]
  },
  {
    "slug": "winemaker-family-legacy",
    "level": "B2",
    "number": 76,
    "title": "El viñedo de los tres inviernos",
    "summary": "A winemaker faces pressure to modernize her family's centuries-old vineyard or risk losing it.",
    "duration": "10 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Camila heredó la Bodega Del Valle a los veintiocho años, tras la muerte repentina de su abuelo Vicente, quien había dedicado toda su vida a cultivar las mismas hectáreas de viñedo que su propio padre había plantado casi un siglo atrás. Nunca imaginó que aquella herencia, más que un regalo, se convertiría en la responsabilidad más pesada que había cargado en su vida.",
          "La bodega arrastraba deudas considerables, acumuladas durante los últimos años de enfermedad de su abuelo, cuando la producción había disminuido notablemente por falta de una gestión adecuada. El banco le concedió un plazo de dieciocho meses para regularizar la situación financiera, tras el cual, de no lograrlo, se vería obligada a vender las tierras.",
          "Su hermano mayor, Tomás, que vivía en la ciudad y trabajaba como consultor financiero, insistía en que la solución más razonable era vender la bodega a una corporación internacional que había mostrado interés en adquirir las tierras para integrarlas en una marca comercial de mayor escala. \"El vino artesanal es un sueño bonito\", le decía, \"pero los sueños no pagan las deudas del banco\".",
          "Camila, sin embargo, no estaba dispuesta a renunciar tan fácilmente a lo que representaba aquel viñedo: no solo la memoria de su abuelo, sino también una manera de entender el trabajo de la tierra que valoraba la paciencia y la calidad por encima de la producción masiva. Decidió, contra el consejo explícito de su hermano, buscar alternativas antes de aceptar la oferta de venta.",
          "Contactó a una asociación de pequeños productores que promovía la agricultura orgánica y la comercialización directa a través de internet, evitando así a los intermediarios que se quedaban con buena parte del margen de beneficio. El proceso de conversión a cultivo orgánico requería una inversión inicial considerable y al menos tres años antes de obtener la certificación completa, un plazo que superaba ampliamente el margen que el banco le había concedido.",
          "Decidió arriesgarse de todos modos, convenciendo al banco, tras semanas de negociaciones difíciles, de que le concediera una prórroga adicional a cambio de un plan de negocio detallado que incluía la producción orgánica y la venta directa como estrategias centrales para la recuperación financiera de la bodega.",
          "Tomás se mostró furioso cuando se enteró de la decisión, acusando a su hermana de anteponer el sentimentalismo a la responsabilidad familiar. \"Si esto sale mal\", le advirtió durante una discusión tensa por teléfono, \"perderemos absolutamente todo, y entonces sí que no quedará nada del legado del abuelo, ni siquiera la tierra\". Camila, aunque dolida por el enfrentamiento, se mantuvo firme en su decisión.",
          "Los primeros meses de la conversión orgánica resultaron agotadores. Camila aprendió, casi de la noche a la mañana, técnicas de cultivo completamente distintas a las que había visto practicar a su abuelo, además de gestionar personalmente las redes sociales de la bodega para atraer clientes directos, una tarea para la que no tenía experiencia previa alguna.",
          "Poco a poco, sin embargo, empezó a construir una comunidad de clientes fieles que valoraban precisamente la historia detrás de cada botella: la del viñedo centenario, la del abuelo que lo había cuidado durante décadas, la de la nieta que se negaba a dejarlo desaparecer. Aquella narrativa, compartida con honestidad en sus publicaciones, resultó ser tan efectiva como cualquier estrategia de marketing convencional.",
          "Al cabo de dos años, la bodega no solo había logrado estabilizar sus finanzas, sino que había obtenido un reconocimiento inesperado en varios concursos regionales de vinos orgánicos, lo que a su vez atrajo el interés de distribuidores que antes ni siquiera conocían la existencia de la pequeña bodega familiar.",
          "Tomás, que había seguido el proceso con escepticismo desde la distancia, viajó finalmente al viñedo para presenciar la vendimia, algo que no hacía desde niño. Al ver la organización que su hermana había construido y probar el vino que finalmente había obtenido la certificación orgánica completa, admitió, no sin cierta emoción contenida, que se había equivocado al subestimar tanto su determinación como su visión.",
          "Aquella noche, mientras brindaban juntos con la primera cosecha certificada, Camila pensó en su abuelo y en cuánto le habría gustado presenciar aquel momento. Comprendió que honrar un legado no significaba mantenerlo exactamente igual para siempre, sino encontrar la manera de que siguiera vivo, adaptándose sin perder su esencia, tal como las vides que sobrevivían invierno tras invierno para volver a florecer cada primavera."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "How did Camila inherit the vineyard?",
        "options": [
          "She bought it",
          "Her grandfather Vicente died suddenly and left it to her",
          "She won it in a contest",
          "Her parents gave it to her as a gift"
        ],
        "correctIndex": 1,
        "explanation": "\"Camila heredó la Bodega Del Valle a los veintiocho años, tras la muerte repentina de su abuelo Vicente.\""
      },
      {
        "type": "multiple-choice",
        "question": "What did Camila's brother Tomás want to do?",
        "options": [
          "Sell the vineyard to an international corporation",
          "Convert to organic farming",
          "Move to the city together",
          "Close the bodega permanently"
        ],
        "correctIndex": 0,
        "explanation": "\"insistía en que la solución más razonable era vender la bodega a una corporación internacional.\""
      },
      {
        "type": "multiple-choice",
        "question": "What alternative strategy did Camila pursue instead?",
        "options": [
          "Taking out a personal loan from friends",
          "Organic farming certification and direct online sales",
          "Selling to a different corporation",
          "Turning the vineyard into a hotel"
        ],
        "correctIndex": 1,
        "explanation": "\"la producción orgánica y la venta directa como estrategias centrales para la recuperación financiera.\""
      },
      {
        "type": "multiple-choice",
        "question": "What was Tomás's reaction when he finally visited the vineyard two years later?",
        "options": [
          "He was still angry and demanded she sell",
          "He admitted he had underestimated her determination and vision",
          "He tried to take over the bodega",
          "He refused to drink the wine"
        ],
        "correctIndex": 1,
        "explanation": "\"admitió... que se había equivocado al subestimar tanto su determinación como su visión.\""
      }
    ]
  },
  {
    "slug": "photographer-disappearing-tradition",
    "level": "B2",
    "number": 77,
    "title": "El último tejedor",
    "summary": "A photographer sets out to document a dying craft and finds herself changed by the artisans she meets.",
    "duration": "10 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Sara llegó al pequeño pueblo andino de Yanacocha con una beca de fotografía documental y el propósito concreto de retratar a los últimos tejedores de una técnica textil que, según le habían advertido, desaparecería probablemente en menos de una generación. Los jóvenes del pueblo emigraban en masa hacia las ciudades, y con ellos se marchaba también el interés por aprender un oficio que exigía años de paciencia para dominarlo.",
          "La primera persona que aceptó posar para ella fue doña Herminia, una mujer de más de ochenta años que llevaba tejiendo desde los siete, cuando su propia madre le había enseñado a manejar el telar de cintura que todavía usaba a diario. Al principio, doña Herminia se mostró recelosa ante la cámara, convencida de que Sara, como tantos otros visitantes antes que ella, simplemente tomaría sus fotografías y desaparecería sin comprender realmente el significado de su trabajo.",
          "Sara, sin embargo, decidió quedarse en el pueblo mucho más tiempo del previsto originalmente en su plan de beca, pasando semanas enteras observando el proceso completo: desde el esquilado de la lana hasta el teñido con plantas locales y, finalmente, el tejido paciente de patrones que representaban símbolos ancestrales cuyo significado exacto se estaba perdiendo junto con las personas que todavía los recordaban.",
          "Con el paso de las semanas, doña Herminia empezó a confiar en ella, invitándola a compartir las comidas familiares y contándole historias sobre su juventud, sobre el marido que había perdido años atrás, sobre los hijos que se habían marchado a la capital y que rara vez regresaban a visitarla. Sara comprendió que su proyecto fotográfico se estaba transformando en algo mucho más profundo que una simple documentación técnica.",
          "Descubrió, para su sorpresa, que ninguno de los cinco hijos de doña Herminia había querido aprender el oficio de su madre, considerándolo poco rentable comparado con los trabajos disponibles en la ciudad. La anciana hablaba de este hecho sin rencor aparente, aunque Sara percibía, en los silencios que seguían a esas conversaciones, una tristeza que la mujer nunca expresaba abiertamente.",
          "Una tarde, mientras fotografiaba a doña Herminia trabajando en el telar, Sara le preguntó, casi sin pensarlo, si le gustaría enseñarle a ella misma los rudimentos de la técnica. La anciana la miró con una expresión que mezclaba sorpresa y algo parecido a la esperanza, y aceptó, no sin antes advertirle que se necesitaban años, no semanas, para dominar mínimamente el oficio.",
          "Sara empezó a aprender, torpe al principio, cometiendo errores que doña Herminia corregía con una paciencia infinita, la misma que probablemente había empleado con sus propios hijos décadas atrás. Aquellas sesiones de aprendizaje se convirtieron, poco a poco, en el corazón real de su proyecto, más importante incluso que las fotografías que originalmente había ido a tomar.",
          "Cuando finalmente regresó a la ciudad, meses después de lo planeado, Sara llevaba consigo no solo cientos de fotografías cuidadosamente compuestas, sino también un telar de cintura que doña Herminia le había regalado, insistiendo en que siguiera practicando aunque fuera lejos de Yanacocha, para que la técnica no muriera del todo con ella.",
          "La exposición que Sara organizó meses después, en una galería de la capital, no consistió únicamente en fotografías, sino también en una pequeña demostración en vivo del proceso de tejido, para la cual invitó a doña Herminia a viajar a la ciudad por primera vez en su vida, un gesto que la anciana aceptó con una mezcla de nerviosismo y orgullo evidente.",
          "Durante la inauguración, varios visitantes jóvenes, hijos de familias que habían emigrado generaciones atrás desde regiones andinas similares, se acercaron a doña Herminia para preguntarle si estaría dispuesta a dar talleres, interesados en reconectar con una tradición que sus propias familias habían dejado atrás sin querer del todo perderla.",
          "Aquella respuesta inesperada llevó a la creación, meses después, de un pequeño taller itinerante que doña Herminia, acompañada ocasionalmente por Sara, empezó a impartir en distintas ciudades, enseñando la técnica a un puñado de estudiantes cuyo interés, aunque modesto en número, representaba al menos una posibilidad real de que el oficio no se extinguiera por completo.",
          "Sara comprendió, reflexionando sobre todo lo vivido durante aquel proyecto, que había llegado a Yanacocha buscando documentar una desaparición, y que en cambio había terminado por contribuir, de manera modesta pero genuina, a que aquella tradición encontrara una forma distinta, aunque incierta, de sobrevivir un poco más allá de las manos que originalmente la habían sostenido."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "What was Sara's original purpose in visiting Yanacocha?",
        "options": [
          "To buy textiles for a shop",
          "To photograph the last practitioners of a disappearing weaving tradition",
          "To study the local dialect",
          "To build a school"
        ],
        "correctIndex": 1,
        "explanation": "\"con una beca de fotografía documental y el propósito concreto de retratar a los últimos tejedores.\""
      },
      {
        "type": "multiple-choice",
        "question": "Why had none of doña Herminia's children learned to weave?",
        "options": [
          "They were physically unable",
          "They considered it unprofitable compared to city jobs",
          "Doña Herminia refused to teach them",
          "They moved away as babies"
        ],
        "correctIndex": 1,
        "explanation": "\"considerándolo poco rentable comparado con los trabajos disponibles en la ciudad.\""
      },
      {
        "type": "multiple-choice",
        "question": "What did doña Herminia give Sara before she left the village?",
        "options": [
          "Money",
          "A backstrap loom, so Sara could keep practicing",
          "A photograph album",
          "Her house"
        ],
        "correctIndex": 1,
        "explanation": "\"un telar de cintura que doña Herminia le había regalado, insistiendo en que siguiera practicando.\""
      },
      {
        "type": "multiple-choice",
        "question": "What happened at Sara's exhibition in the capital?",
        "options": [
          "Nobody attended",
          "Doña Herminia gave a live weaving demonstration and young visitors asked her to teach workshops",
          "The photographs were stolen",
          "Doña Herminia refused to attend"
        ],
        "correctIndex": 1,
        "explanation": "\"invitó a doña Herminia a viajar a la ciudad... para preguntarle si estaría dispuesta a dar talleres.\""
      }
    ]
  },
  {
    "slug": "expat-cultural-identity",
    "level": "B2",
    "number": 78,
    "title": "Entre dos orillas",
    "summary": "A young woman who grew up between two countries must decide where she truly belongs.",
    "duration": "10 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Paula tenía nueve años cuando sus padres decidieron mudarse de Buenos Aires a Berlín, huyendo de una crisis económica que había dejado a su padre sin trabajo y con pocas esperanzas de recuperarse pronto en Argentina. Crecer entre dos idiomas y dos culturas le había dado, con el tiempo, una riqueza que valoraba profundamente, pero también una sensación persistente de no pertenecer del todo a ninguno de los dos lugares.",
          "En Alemania, sus compañeros de colegio la consideraban siempre \"la argentina\", a pesar de que hablaba alemán sin ningún rastro de acento y conocía mejor la historia europea que la de su propio país de origen. En cambio, cuando visitaba Buenos Aires durante las vacaciones de verano, sus primos y amigos de la infancia la trataban, con cariño pero también con cierta distancia, como \"la alemana\", alguien que ya no compartía del todo sus referencias cotidianas.",
          "Aquella doble condición, ni completamente argentina ni completamente alemana, se había convertido en una fuente constante de reflexión para Paula, especialmente ahora que, a los veintiséis años, terminaba sus estudios de arquitectura en Berlín y debía decidir dónde construir el resto de su vida profesional y personal.",
          "Tenía, en Berlín, una relación estable con Lukas, un ingeniero alemán que jamás había mostrado el menor interés en mudarse a Sudamérica, convencido de que su vida y su carrera estaban firmemente ancladas en Europa. Paula lo amaba sinceramente, pero cada vez que imaginaba un futuro compartido exclusivamente en Alemania, sentía una opresión difícil de explicar, como si estuviera renunciando a una parte esencial de sí misma.",
          "La situación se complicó cuando su abuela materna, que todavía vivía en Buenos Aires, fue diagnosticada con una enfermedad que, sin ser inmediatamente mortal, requeriría cuidados constantes durante los próximos años. Paula viajó de urgencia para acompañar a su madre durante las primeras semanas del tratamiento, y aquel viaje, pensado originalmente como algo temporal, terminó por prolongarse durante casi tres meses.",
          "Durante aquellas semanas en Buenos Aires, Paula redescubrió una ciudad que conocía sobre todo a través de recuerdos infantiles idealizados, y se sorprendió a sí misma sintiendo una conexión con la vida cotidiana argentina que no experimentaba desde hacía años: el ritmo de las conversaciones, la manera en que los vecinos se saludaban en la calle, el simple hecho de compartir un mate con su abuela por las tardes mientras esta le contaba historias de su propia juventud.",
          "Su abuela, con la lucidez que a veces solo da la enfermedad, le dijo una tarde algo que Paula no pudo olvidar fácilmente: \"No tienes que elegir un solo lugar para ser de allí. Yo también me sentí extranjera toda mi vida, incluso en mi propia casa, y aprendí a vivir con eso sin que me destruyera\". Aquellas palabras le ofrecieron a Paula una perspectiva que ningún libro sobre identidad cultural le había proporcionado antes.",
          "Lukas, mientras tanto, la llamaba regularmente desde Berlín, cada vez con menos paciencia ante la prolongación indefinida del viaje, y Paula percibía, en el tono cada vez más frío de sus conversaciones, que la relación estaba llegando a un punto de quiebre que ella todavía no se sentía preparada para afrontar directamente.",
          "Cuando finalmente regresó a Berlín, encontró a Lukas dispuesto a hablar seriamente sobre el futuro de la pareja. Él le confesó, con una sinceridad que Paula agradeció aunque le doliera, que no se sentía capaz de acompañarla en los viajes frecuentes que previsiblemente tendría que seguir haciendo a Argentina, ni de construir una vida marcada por esa dualidad constante que a él, sinceramente, le costaba comprender del todo.",
          "La ruptura, aunque dolorosa, resultó sorprendentemente respetuosa, sin reproches innecesarios, como si ambos reconocieran que se trataba menos de un fracaso personal que de una simple incompatibilidad de proyectos vitales que ninguno de los dos podía forzar a coincidir artificialmente.",
          "Paula tomó entonces una decisión que llevaba meses posponiendo: aceptó un puesto en un estudio de arquitectura en Buenos Aires, especializado precisamente en la restauración de edificios patrimoniales, un campo que combinaba su formación europea con un compromiso renovado hacia sus raíces argentinas. La decisión no resolvía del todo su sensación de pertenecer a dos lugares a la vez, pero le permitía, al menos, estar cerca de su abuela durante los años que le quedaran.",
          "Meses después, instalada definitivamente en Buenos Aires, Paula comprendió que quizás la pregunta de dónde pertenecía realmente estaba mal planteada desde el principio. No tenía que elegir entre ser argentina o alemana, sino aceptar que era, simplemente, las dos cosas a la vez, una combinación que no siempre resultaba cómoda pero que, con el tiempo, había aprendido a habitar sin culpa ni nostalgia excesiva."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "Why did Paula's family move from Buenos Aires to Berlin?",
        "options": [
          "For her father's job promotion",
          "An economic crisis that left her father unemployed",
          "To be near relatives",
          "For Paula's education"
        ],
        "correctIndex": 1,
        "explanation": "\"huyendo de una crisis económica que había dejado a su padre sin trabajo.\""
      },
      {
        "type": "multiple-choice",
        "question": "How did Paula's grandmother's illness affect the story?",
        "options": [
          "It had no real effect",
          "It prompted a long trip to Buenos Aires that reconnected Paula with Argentina",
          "It caused Paula to move permanently to Germany",
          "It was never resolved"
        ],
        "correctIndex": 1,
        "explanation": "\"Paula viajó de urgencia para acompañar a su madre... aquel viaje... terminó por prolongarse durante casi tres meses.\""
      },
      {
        "type": "multiple-choice",
        "question": "What did Paula's grandmother tell her about identity?",
        "options": [
          "\"You must choose one country and forget the other\"",
          "\"You don't have to choose a single place to be from\"",
          "\"Germany is better than Argentina\"",
          "\"Identity doesn't matter\""
        ],
        "correctIndex": 1,
        "explanation": "\"No tienes que elegir un solo lugar para ser de allí.\""
      },
      {
        "type": "multiple-choice",
        "question": "How did the relationship with Lukas end?",
        "options": [
          "With bitter fighting",
          "Respectfully, both recognizing an incompatibility of life plans",
          "They got married instead",
          "Lukas moved to Argentina"
        ],
        "correctIndex": 1,
        "explanation": "\"La ruptura, aunque dolorosa, resultó sorprendentemente respetuosa... una simple incompatibilidad de proyectos vitales.\""
      }
    ]
  },
  {
    "slug": "lighthouse-decommissioned",
    "level": "B2",
    "number": 79,
    "title": "La luz que se apaga",
    "summary": "The last keeper of a remote lighthouse confronts its automation and closure.",
    "duration": "10 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Don Alfredo llevaba treinta y dos años como farero del Cabo Negro, un peñón azotado por el viento en el que apenas vivían, además de él, un puñado de gaviotas y el eco constante de las olas rompiendo contra las rocas. Aquel otoño, sin embargo, recibió una notificación oficial de la autoridad marítima que anunciaba la automatización definitiva del faro y, con ella, el fin de su puesto de trabajo.",
          "La noticia no lo sorprendió del todo, pues llevaba años escuchando rumores sobre la modernización de los faros de la costa, pero comprobar que su faro específico había sido finalmente seleccionado le provocó una tristeza más profunda de lo que había anticipado. Durante tres décadas, aquella torre de piedra había sido, más que un trabajo, el centro absoluto de su existencia.",
          "Su nieta, Camila, de dieciséis años, llegó a pasar unas semanas con él aquel verano, como hacía cada año desde que era pequeña, sin sospechar que sería la última temporada en que su abuelo ocuparía oficialmente el puesto. Cuando Alfredo le contó la noticia, la reacción de Camila fue de una tristeza que sorprendió incluso al propio abuelo, pues la joven, entre clases de instituto y amigos en la ciudad, apenas parecía tener tiempo últimamente para pensar en el faro.",
          "\"No puedes dejar que simplemente apaguen algo que has cuidado toda tu vida\", le dijo Camila una noche, mientras subían juntos la escalera de caracol hasta la linterna, un ritual que Alfredo repetía cada noche desde antes de que ella naciera. Él le explicó, con la calma resignada de quien ha aceptado lo inevitable, que la decisión no dependía de él, sino de una lógica de eficiencia que ya no consideraba necesario mantener fareros humanos en la mayoría de las costas.",
          "Sin embargo, la insistencia de su nieta despertó en Alfredo algo que él mismo creía ya apagado: la idea de que quizás no todo estaba perdido, de que tal vez existiera alguna manera de preservar, aunque fuera parcialmente, el significado de aquel lugar más allá de su funcionamiento puramente técnico.",
          "Camila propuso documentar los últimos meses de su abuelo en el faro a través de fotografías y grabaciones de audio, un proyecto escolar que en realidad nació del deseo genuino de conservar algo que sentía que estaba a punto de desaparecer para siempre. Alfredo, al principio reticente ante la cámara, terminó por acostumbrarse a la presencia constante de su nieta documentando cada rincón de su rutina diaria.",
          "Durante aquellas semanas, Alfredo le enseñó a Camila el funcionamiento completo del faro, desde el mecanismo de la lente giratoria hasta los registros meteorológicos que llevaba anotando a mano cada día durante más de tres décadas, un archivo minucioso que documentaba, sin que él mismo fuera plenamente consciente de ello, la historia climática de toda la región.",
          "Aquellos cuadernos, descubrió Camila con entusiasmo creciente, contenían información valiosa que ningún registro oficial había recopilado con tanto detalle, y decidió, con el permiso de su abuelo, contactar a un centro de investigación oceanográfica que mostró interés inmediato en digitalizar y estudiar aquellos datos únicos acumulados durante tres décadas de observación diaria y constante.",
          "La noticia de que los registros de Alfredo podían tener valor científico real le devolvió al anciano una sensación de propósito que la automatización del faro le había arrebatado por completo. Comprendió que, aunque su trabajo como farero llegara efectivamente a su fin, el conocimiento acumulado durante todos esos años no desaparecería junto con su puesto.",
          "La última noche antes de que la nueva luz automática entrara oficialmente en funcionamiento, Alfredo subió por última vez, acompañado por Camila, hasta la linterna, para encender manualmente el mecanismo giratorio una vez más. Ambos permanecieron en silencio durante horas, observando el haz de luz recorrer el horizonte oscuro, conscientes de que presenciaban el final simbólico de una era.",
          "Al día siguiente, un pequeño equipo técnico llegó para instalar el sistema automatizado, y Alfredo, con una entereza que le costó mantener frente a los técnicos, entregó formalmente las llaves de la torre. La autoridad marítima le ofreció, como reconocimiento a sus años de servicio, mantenerse como asesor honorífico y guía turístico ocasional para grupos que visitaran el faro, una propuesta que aceptó sin demasiado entusiasmo pero también sin rechazarla del todo.",
          "Meses después, el centro oceanográfico publicó un breve estudio basado parcialmente en los registros manuales de Alfredo, mencionando su nombre en los agradecimientos, un detalle que Camila enmarcó y colgó en la pared del salón familiar. Alfredo, mirando aquel marco cada vez que visitaba a su hija, comprendió que su faro, aunque ya no emitiera luz por su propia mano, seguía iluminando, de una manera distinta pero real, algo que permanecería mucho después de que él mismo desapareciera."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "How long had Don Alfredo worked as the lighthouse keeper?",
        "options": [
          "Ten years",
          "Thirty-two years",
          "Five years",
          "Fifty years"
        ],
        "correctIndex": 1,
        "explanation": "\"Don Alfredo llevaba treinta y dos años como farero del Cabo Negro.\""
      },
      {
        "type": "multiple-choice",
        "question": "What project did Camila propose?",
        "options": [
          "To sell the lighthouse",
          "To document her grandfather's last months there through photos and audio recordings",
          "To move the lighthouse",
          "To become the new automated system's operator"
        ],
        "correctIndex": 1,
        "explanation": "\"propuso documentar los últimos meses de su abuelo en el faro a través de fotografías y grabaciones de audio.\""
      },
      {
        "type": "multiple-choice",
        "question": "What made Alfredo's handwritten notebooks valuable?",
        "options": [
          "They contained poetry",
          "They contained decades of detailed weather records of scientific value",
          "They were rare antiques",
          "They contained treasure maps"
        ],
        "correctIndex": 1,
        "explanation": "\"contenían información valiosa que ningún registro oficial había recopilado con tanto detalle... digitalizar y estudiar aquellos datos únicos.\""
      },
      {
        "type": "multiple-choice",
        "question": "What role did the maritime authority offer Alfredo after automation?",
        "options": [
          "A desk job in the city",
          "Honorary advisor and occasional tour guide for lighthouse visitors",
          "Nothing, he was simply dismissed",
          "A promotion to regional director"
        ],
        "correctIndex": 1,
        "explanation": "\"le ofreció... mantenerse como asesor honorífico y guía turístico ocasional.\""
      }
    ]
  },
  {
    "slug": "grandmother-secret-talent",
    "level": "B2",
    "number": 80,
    "title": "Los cuadernos de la abuela",
    "summary": "A family discovers their unassuming grandmother was once a celebrated painter with a hidden past.",
    "duration": "10 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Nieves tenía ochenta y tres años y llevaba más de cuatro décadas viviendo en el mismo apartamento pequeño donde había criado a sus tres hijos prácticamente sola, tras quedar viuda joven. Para su familia, era simplemente la abuela que cocinaba un cocido excepcional los domingos y que jamás mencionaba gran cosa sobre su vida antes del matrimonio.",
          "Todo cambió una tarde de enero, cuando Nieves sufrió una caída en el baño que la obligó a pasar varias semanas hospitalizada mientras se recuperaba de una fractura de cadera. Su nieta Lucía, estudiante de bellas artes, se ofreció a ir a su apartamento para recoger algunas pertenencias que la anciana necesitaba durante su convalecencia.",
          "Buscando un camisón en el armario del dormitorio, Lucía encontró, escondida al fondo bajo una pila de mantas antiguas, una caja de madera cerrada que contenía decenas de cuadernos de dibujo, cubiertos de bocetos extraordinariamente logrados: retratos, paisajes urbanos, estudios de manos y rostros que revelaban una técnica que Lucía, a pesar de sus años de formación artística, no había visto nunca en ningún familiar.",
          "Cuando visitó a su abuela en el hospital y le preguntó, con cautela, sobre aquellos cuadernos, Nieves se quedó en silencio durante un largo rato antes de responder. \"Pensé que nunca nadie los encontraría\", admitió finalmente, con una expresión que mezclaba vergüenza y un alivio extraño, como si llevara décadas cargando un secreto que ya no tenía fuerzas para seguir ocultando.",
          "Nieves le contó entonces una historia que ninguno de sus nietos conocía: de joven había estudiado pintura en la escuela de bellas artes de la capital, con una beca que había conseguido tras ganar un concurso regional, y durante algunos años había expuesto su obra con cierto reconocimiento en círculos artísticos locales, antes de que la muerte prematura de su marido la obligara a abandonar por completo la pintura para dedicarse enteramente a criar a sus hijos.",
          "\"No había tiempo ni dinero para ambas cosas\", explicó Nieves, sin amargura aparente, aunque Lucía percibió, bajo la aparente resignación de su abuela, una tristeza acumulada durante décadas que jamás había encontrado la ocasión ni quizás el valor de expresar abiertamente ante su familia.",
          "Lucía, profundamente conmovida por el descubrimiento, le preguntó a su abuela si podía mostrar aquellos cuadernos a algunos de sus profesores de la facultad, convencida de que el talento reflejado en aquellos bocetos merecía ser reconocido más allá del cajón donde había permanecido oculto durante tantos años. Nieves, tras dudarlo considerablemente, aceptó, aunque insistió en que no esperaba ni deseaba ningún reconocimiento tardío.",
          "Uno de los profesores de Lucía, especialista en arte de mediados de siglo, quedó genuinamente impresionado al examinar los cuadernos, señalando que la técnica de Nieves mostraba una influencia del expresionismo poco común entre las artistas de su generación y contexto social, y sugirió organizar una pequeña exposición en la galería de la propia facultad.",
          "Nieves, todavía recuperándose de su fractura, se mostró al principio reacia ante la idea de una exposición pública, temerosa de que su obra, guardada durante tanto tiempo, resultara anticuada o insignificante comparada con el arte contemporáneo que sus nietos y sus compañeros conocían y admiraban.",
          "Sin embargo, cuando finalmente accedió y asistió a la inauguración, apoyada en un bastón y rodeada de toda su familia, Nieves observó con asombro cómo decenas de desconocidos se detenían frente a sus dibujos, comentando entre ellos la sensibilidad de sus trazos, la profundidad emocional capturada en cada retrato, sin saber que la propia artista, ya anciana, los observaba silenciosamente desde un rincón de la sala.",
          "Uno de los visitantes, un hombre mayor que resultó haber sido compañero suyo en la escuela de bellas artes décadas atrás, la reconoció entre el público y se acercó emocionado a saludarla, recordando con detalle una exposición conjunta en la que ambos habían participado siendo apenas veinteañeros, un episodio que Nieves creía que nadie más recordaba ya.",
          "Aquella noche, de regreso en casa, Nieves le confesó a Lucía que jamás había imaginado que, a su edad, todavía sería capaz de sentir el mismo nerviosismo y la misma alegría genuina que había experimentado de joven al mostrar su trabajo por primera vez. Decidió, con una determinación que sorprendió a toda la familia, retomar el dibujo en sus últimos años, no para buscar reconocimiento, sino simplemente porque, después de tanto tiempo, había vuelto a recordar cuánto lo amaba."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "What event led to the discovery of Nieves's secret?",
        "options": [
          "She told her family voluntarily",
          "A fall that hospitalized her, during which her granddaughter found sketchbooks while retrieving belongings",
          "A newspaper article about her",
          "Her death"
        ],
        "correctIndex": 1,
        "explanation": "\"Nieves sufrió una caída... Su nieta Lucía... encontró... una caja de madera cerrada que contenía decenas de cuadernos de dibujo.\""
      },
      {
        "type": "multiple-choice",
        "question": "What had Nieves done in her youth?",
        "options": [
          "Worked as a nurse",
          "Studied painting at a fine arts school and exhibited her work with some recognition",
          "Traveled the world",
          "Been a famous singer"
        ],
        "correctIndex": 1,
        "explanation": "\"de joven había estudiado pintura en la escuela de bellas artes de la capital... había expuesto su obra con cierto reconocimiento.\""
      },
      {
        "type": "multiple-choice",
        "question": "Why had Nieves stopped painting?",
        "options": [
          "She lost interest",
          "Her husband's premature death forced her to dedicate herself entirely to raising her children",
          "She was banned from painting",
          "She lost her eyesight"
        ],
        "correctIndex": 1,
        "explanation": "\"la muerte prematura de su marido la obligara a abandonar por completo la pintura para dedicarse enteramente a criar a sus hijos.\""
      },
      {
        "type": "multiple-choice",
        "question": "What did Nieves decide to do after the exhibition?",
        "options": [
          "Never draw again",
          "Take up drawing again in her later years, out of love for it rather than seeking recognition",
          "Sell all her sketchbooks",
          "Move to a nursing home"
        ],
        "correctIndex": 1,
        "explanation": "\"Decidió... retomar el dibujo en sus últimos años, no para buscar reconocimiento, sino simplemente porque... había vuelto a recordar cuánto lo amaba.\""
      }
    ]
  },
  {
    "slug": "startup-founder-ethical-dilemma",
    "level": "B2",
    "number": 81,
    "title": "El algoritmo y la conciencia",
    "summary": "A startup founder must decide whether to sell user data to secure funding that would save her company.",
    "duration": "10 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Diana había fundado Calma, una aplicación de bienestar emocional que ofrecía ejercicios de meditación guiada y un diario digital privado, con la convicción sincera de que la tecnología podía ayudar a las personas a gestionar mejor su salud mental sin necesidad de recurrir siempre a terapia profesional costosa. Tres años después de su lanzamiento, la aplicación contaba con casi dos millones de usuarios, pero las cuentas de la empresa mostraban un panorama financiero cada vez más preocupante.",
          "La ronda de inversión que necesitaban para sobrevivir otro año dependía enteramente de un fondo de capital riesgo que se había mostrado interesado, aunque con una condición que Diana no había anticipado: el fondo exigía acceso a los datos anonimizados de los usuarios, incluidos los patrones emocionales registrados en el diario privado, para venderlos a empresas de publicidad dirigida y aseguradoras interesadas en perfiles de riesgo psicológico.",
          "Marcos, su cofundador y responsable técnico, se mostraba dispuesto a aceptar la propuesta, argumentando que los datos estarían anonimizados según los estándares legales vigentes y que, sin aquella inversión, la empresa cerraría en cuestión de meses, dejando sin empleo a los quince trabajadores que dependían de ellos. \"No estamos vendiendo nada ilegal\", le repetía a Diana durante las reuniones, \"solo estamos siendo pragmáticos\".",
          "Diana, sin embargo, no lograba ignorar la sensación de que aquella práctica traicionaba el propósito original de la aplicación. Sus usuarios habían confiado en Calma precisamente porque prometía un espacio privado y seguro para expresar sus pensamientos más vulnerables, y la idea de que esa confianza pudiera convertirse, aunque fuera indirectamente, en munición para estrategias publicitarias o actuariales le resultaba profundamente incómoda.",
          "Consultó el asunto con una antigua profesora de ética empresarial de su época universitaria, quien le advirtió que la anonimización de datos, en la práctica, resultaba mucho menos efectiva de lo que las empresas solían presentar públicamente, ya que cruzando suficientes variables era relativamente sencillo reidentificar a usuarios individuales, especialmente en aplicaciones con datos tan íntimos como los de Calma.",
          "Aquella conversación reforzó las dudas de Diana, pero no resolvió el problema financiero inmediato de la empresa. Sin la inversión, tendría que despedir a la mitad de su equipo en cuestión de semanas, y probablemente cerrar la aplicación por completo antes de fin de año, dejando sin servicio a millones de usuarios que dependían, algunos de ellos según sus propios testimonios, de Calma como único apoyo emocional accesible.",
          "Diana convocó una reunión con todo el equipo para exponer abiertamente la situación, algo poco habitual en las negociaciones de inversión, que normalmente se manejaban con discreción entre los fundadores. Prefirió, sin embargo, que sus empleados conocieran de primera mano el dilema al que se enfrentaba la empresa, en lugar de tomar una decisión unilateral que afectaría directamente sus empleos.",
          "La reunión generó opiniones divididas. Varios empleados, especialmente los que tenían familias que mantener, se mostraron a favor de aceptar la inversión, argumentando que la supervivencia de la empresa debía priorizarse sobre consideraciones éticas que consideraban, hasta cierto punto, excesivamente idealistas dadas las circunstancias financieras reales.",
          "Sin embargo, una desarrolladora joven del equipo propuso una alternativa que nadie había considerado seriamente hasta entonces: presentar la difícil situación financiera directamente a los usuarios más comprometidos de la aplicación, ofreciéndoles una suscripción premium voluntaria a cambio de funcionalidades adicionales, apostando a que suficientes usuarios estarían dispuestos a pagar por mantener la privacidad de sus datos sin comprometerla comercialmente.",
          "Diana decidió intentar aquella alternativa antes de aceptar definitivamente la oferta del fondo de inversión, consciente de que el tiempo jugaba en su contra pero convencida de que merecía la pena agotar todas las opciones que respetaran los principios fundacionales de la empresa. Lanzaron la campaña de suscripción premium con un mensaje transparente que explicaba abiertamente la situación financiera de la compañía.",
          "La respuesta de los usuarios superó ampliamente las expectativas más optimistas del equipo. Miles de personas, muchas de ellas dejando comentarios emotivos sobre cuánto les había ayudado la aplicación durante momentos difíciles de su vida, se suscribieron al plan premium en las primeras semanas, generando ingresos suficientes para evitar, al menos temporalmente, la necesidad de recurrir al fondo de inversión con condiciones tan cuestionables.",
          "Marcos, aunque inicialmente escéptico ante la estrategia, terminó por reconocer que Diana había tenido razón al insistir en buscar una alternativa antes de comprometer los principios de la empresa. Meses después, con la situación financiera considerablemente más estable, Diana reflexionaba con frecuencia sobre lo cerca que habían estado de sacrificar precisamente aquello que hacía que Calma mereciera la confianza de sus usuarios: la promesa, cumplida hasta el final, de que sus datos más íntimos jamás se convertirían en mercancía."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "What was Calma?",
        "options": [
          "A fitness tracking app",
          "A mental wellbeing app offering meditation and a private digital journal",
          "A social media platform",
          "A dating app"
        ],
        "correctIndex": 1,
        "explanation": "\"una aplicación de bienestar emocional que ofrecía ejercicios de meditación guiada y un diario digital privado.\""
      },
      {
        "type": "multiple-choice",
        "question": "What condition did the investment fund require?",
        "options": [
          "Diana had to step down as CEO",
          "Access to anonymized user data to sell to advertisers and insurers",
          "Moving the company headquarters",
          "Firing half the staff"
        ],
        "correctIndex": 1,
        "explanation": "\"el fondo exigía acceso a los datos anonimizados de los usuarios... para venderlos a empresas de publicidad dirigida y aseguradoras.\""
      },
      {
        "type": "multiple-choice",
        "question": "What alternative did a young developer propose?",
        "options": [
          "Selling the company entirely",
          "Offering a voluntary premium subscription to fund the company without compromising data privacy",
          "Laying off all employees",
          "Taking out a bank loan"
        ],
        "correctIndex": 1,
        "explanation": "\"ofreciéndoles una suscripción premium voluntaria... sin comprometerla comercialmente.\""
      },
      {
        "type": "multiple-choice",
        "question": "How did users respond to the premium subscription campaign?",
        "options": [
          "Almost nobody subscribed",
          "The response exceeded expectations, generating enough revenue to avoid the risky investment",
          "Users demanded refunds",
          "The campaign was cancelled"
        ],
        "correctIndex": 1,
        "explanation": "\"La respuesta de los usuarios superó ampliamente las expectativas... generando ingresos suficientes para evitar... la necesidad de recurrir al fondo de inversión.\""
      }
    ]
  },
  {
    "slug": "librarian-saving-archive",
    "level": "B2",
    "number": 82,
    "title": "Las páginas que nadie reclamaba",
    "summary": "A librarian races against a budget cut to save a historic archive from being discarded.",
    "duration": "9 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Ignacio llevaba veintidós años trabajando como bibliotecario en el archivo municipal de su ciudad, un espacio poco visitado en el sótano del ayuntamiento donde se conservaban documentos históricos, periódicos antiguos y registros civiles que se remontaban casi dos siglos atrás. Pocos vecinos sabían siquiera que aquel archivo existía, y menos aún imaginaban el valor histórico que albergaban sus estanterías metálicas.",
          "La noticia llegó un lunes por la mañana, sin previo aviso: el ayuntamiento, atravesando una crisis presupuestaria severa, había decidido vender el edificio que albergaba el archivo a una empresa inmobiliaria, y el nuevo plan urbanístico no contemplaba destinar ningún espacio equivalente para conservar los documentos históricos, que según el comunicado oficial serían \"reubicados o, en su caso, dados de baja del inventario municipal\".",
          "Ignacio comprendió de inmediato lo que aquella burocrática expresión significaba en la práctica: sin un espacio designado ni presupuesto asignado para el traslado, la mayoría de los documentos terminarían destruidos o abandonados, considerados por las autoridades como material sin valor suficiente para justificar el costo de su conservación.",
          "Decidió actuar rápidamente, antes de que la decisión administrativa se volviera irreversible. Empezó por catalogar con urgencia los documentos que consideraba de mayor valor histórico, entre ellos correspondencia de alcaldes del siglo diecinueve, planos originales de edificios ya desaparecidos, y un conjunto único de fotografías que documentaban la transformación de la ciudad tras una inundación catastrófica ocurrida hace más de cien años.",
          "Contactó a la universidad regional, esperando que su departamento de historia mostrara interés en absorber al menos una parte de la colección, pero se encontró con una respuesta desalentadora: sin financiación adicional, la universidad tampoco disponía de espacio ni personal suficiente para hacerse cargo de un archivo de aquellas dimensiones en un plazo tan breve.",
          "Ignacio recordó entonces un curso de digitalización de archivos al que había asistido años atrás, financiado parcialmente por una fundación privada dedicada a la preservación del patrimonio cultural. Contactó a la fundación, explicándoles con detalle la situación urgente del archivo municipal, y aunque la respuesta inicial fue cautelosa, consiguió que un representante visitara personalmente las instalaciones antes de que se cumpliera el plazo.",
          "Mientras esperaba respuesta de la fundación, Ignacio decidió también movilizar a la comunidad local, publicando en las redes sociales algunas de las fotografías más impactantes del archivo, acompañadas de una breve explicación sobre el riesgo inminente que corría toda la colección. La publicación se difundió mucho más de lo que había anticipado, generando comentarios de vecinos que reconocían rostros familiares en fotografías de generaciones pasadas.",
          "La presión pública resultante llevó a varios concejales, inicialmente indiferentes ante el destino del archivo, a replantearse públicamente la decisión original, especialmente después de que un periódico local publicara un extenso reportaje sobre el valor histórico de los documentos amenazados y sobre la figura casi anónima de Ignacio, descrito en el artículo como \"el guardián silencioso de la memoria de la ciudad\".",
          "La fundación de patrimonio cultural, impresionada tanto por la calidad de la colección como por la repercusión mediática generada, ofreció finalmente financiar un proyecto de digitalización completa del archivo, además de gestionar el traslado físico de los documentos originales a un almacén climatizado propiedad de la propia fundación, garantizando así su conservación a largo plazo.",
          "El ayuntamiento, presionado por la opinión pública y aliviado de no tener que asumir directamente el costo de la conservación, aceptó rápidamente el acuerdo propuesto por la fundación, aunque insistiendo en mantener cierto control simbólico sobre la titularidad legal de los documentos históricos más significativos.",
          "Ignacio supervisó personalmente durante los meses siguientes el delicado proceso de traslado y digitalización, trabajando codo con codo con un equipo de especialistas que la fundación había contratado específicamente para el proyecto, asegurándose de que cada documento fuera manipulado con el cuidado que merecía tras décadas de abandono relativo.",
          "Un año después, el archivo digitalizado se convirtió en un recurso accesible públicamente a través de internet, consultado por investigadores, estudiantes y curiosos de todo el mundo interesados en la historia local de la ciudad. Ignacio, que había pasado más de dos décadas trabajando prácticamente en el anonimato, recibió finalmente un reconocimiento oficial del ayuntamiento, aunque para él, la verdadera recompensa fue simplemente saber que aquellas páginas, que nadie parecía reclamar, habían encontrado por fin quien las protegiera para las generaciones futuras."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "What threatened the municipal archive?",
        "options": [
          "A fire",
          "The city hall's decision to sell the building housing it, with no plan to relocate the documents",
          "A flood",
          "Theft"
        ],
        "correctIndex": 1,
        "explanation": "\"el ayuntamiento... había decidido vender el edificio que albergaba el archivo... el nuevo plan urbanístico no contemplaba destinar ningún espacio equivalente.\""
      },
      {
        "type": "multiple-choice",
        "question": "What did the local university tell Ignacio?",
        "options": [
          "They would take the entire archive immediately",
          "They lacked space and staff to take on the archive without additional funding",
          "They refused to even meet with him",
          "They demanded payment"
        ],
        "correctIndex": 1,
        "explanation": "\"sin financiación adicional, la universidad tampoco disponía de espacio ni personal suficiente.\""
      },
      {
        "type": "multiple-choice",
        "question": "How did Ignacio mobilize public support?",
        "options": [
          "He organized a protest march",
          "He posted striking photographs from the archive on social media",
          "He sued the city hall",
          "He went on a hunger strike"
        ],
        "correctIndex": 1,
        "explanation": "\"publicando en las redes sociales algunas de las fotografías más impactantes del archivo.\""
      },
      {
        "type": "multiple-choice",
        "question": "What did the cultural heritage foundation ultimately offer?",
        "options": [
          "Nothing",
          "To fund complete digitization and relocate the documents to a climate-controlled storage facility",
          "To buy the documents and sell them",
          "To demolish the building faster"
        ],
        "correctIndex": 1,
        "explanation": "\"ofreció finalmente financiar un proyecto de digitalización completa del archivo, además de gestionar el traslado físico.\""
      }
    ]
  },
  {
    "slug": "diplomat-tense-negotiation",
    "level": "B2",
    "number": 83,
    "title": "La mesa de las tres banderas",
    "summary": "A young diplomat must broker a fragile agreement between two neighboring countries over a shared river.",
    "duration": "9 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Renata llevaba apenas dos años trabajando como diplomática de carrera cuando fue asignada, casi por casualidad, a formar parte del equipo negociador encargado de resolver el conflicto por el uso compartido del río Auroro, cuya cuenca atravesaba tanto su país como el vecino Estado de Marentia, y cuyas aguas se habían vuelto cada vez más escasas debido a años consecutivos de sequía.",
          "Las negociaciones llevaban ya ocho meses estancadas cuando Renata se incorporó al equipo, sustituyendo a un diplomático veterano que había sido trasladado repentinamente a otra misión. Ambos gobiernos acusaban al contrario de aprovecharse desproporcionadamente del caudal disponible, y la desconfianza mutua acumulada durante meses de reuniones infructuosas había convertido cada sesión en un ejercicio casi ritual de reproches repetidos.",
          "Su contraparte en la delegación de Marentia era Ilián Voss, un diplomático de edad similar a la suya, conocido por su firmeza inflexible en la mesa de negociaciones, pero que, según descubrió Renata durante los descansos entre sesiones, compartía con ella un interés genuino por la poesía y la música clásica, aficiones que ninguno de los dos había imaginado encontrar en la delegación contraria.",
          "Aquellas conversaciones informales durante los recesos, aparentemente triviales, fueron construyendo poco a poco una confianza personal entre ambos que contrastaba notablemente con la hostilidad formal de las sesiones oficiales. Renata comprendió que aquella relación, manejada con la discreción profesional necesaria, podía convertirse en un puente útil para desbloquear negociaciones que llevaban meses sin avanzar.",
          "La propuesta oficial de su país exigía un reparto del caudal basado estrictamente en la población de cada nación, lo cual favorecía claramente a su lado, dado que su país tenía casi el doble de habitantes en la cuenca del río. Marentia, por su parte, insistía en un reparto basado en el territorio agrícola irrigado, una fórmula que les otorgaba mayores derechos históricos sobre el agua.",
          "Durante una cena informal organizada al margen de las negociaciones oficiales, Ilián le confesó a Renata que su gobierno enfrentaba una presión interna considerable por parte de agricultores que llevaban generaciones dependiendo del río, y que cualquier acuerdo que percibieran como una rendición ante el país vecino podría generar consecuencias políticas serias para el gobierno de Marentia.",
          "Renata, a su vez, le explicó que su propio gobierno debía responder ante ciudades densamente pobladas que dependían del río para el consumo humano básico, una necesidad que consideraban innegociable frente a cualquier reclamo agrícola, por legítimo que este pudiera parecer desde la perspectiva de Marentia.",
          "Aquella conversación honesta, alejada de la rigidez protocolaria de las sesiones formales, le dio a Renata una idea que decidió explorar cuidadosamente antes de presentarla oficialmente: en lugar de un reparto fijo basado en un único criterio, proponer un sistema variable que ajustara las cuotas de agua según los niveles reales de precipitación registrados cada temporada, garantizando un mínimo vital para el consumo humano y distribuyendo el excedente según fórmulas negociadas anualmente.",
          "Presentó la propuesta primero informalmente a Ilián, quien reconoció que, aunque compleja de implementar, ofrecía una salida creativa al estancamiento que ninguna de las dos delegaciones había considerado seriamente hasta entonces. Juntos, trabajaron durante varias noches para perfeccionar los detalles técnicos antes de presentarla formalmente a sus respectivos gobiernos.",
          "La propuesta generó inicialmente resistencia en ambas capitales, pues ningún gobierno quería aparecer ante su opinión pública como el que había cedido primero. Renata e Ilián coordinaron cuidadosamente la presentación simultánea de la propuesta ante ambos gobiernos, evitando así que ninguna de las partes pudiera acusar a la otra de haber capitulado unilateralmente.",
          "Tras semanas adicionales de ajustes técnicos y presión diplomática discreta ejercida por organismos internacionales interesados en evitar un conflicto regional por el agua, ambos gobiernos aceptaron finalmente firmar el acuerdo, presentándolo públicamente como una solución conjunta e innovadora que garantizaba los intereses fundamentales de ambas naciones sin que ninguna tuviera que renunciar completamente a sus reclamos históricos.",
          "En la ceremonia de firma, celebrada en una sede neutral con las tres banderas de los países mediadores ondeando junto a las de ambas naciones, Renata e Ilián se estrecharon la mano con una sonrisa apenas disimulada, conscientes de que aquel acuerdo, nacido tanto de la negociación técnica como de una amistad inesperada, representaba probablemente el logro profesional más significativo de sus respectivas carreras diplomáticas hasta ese momento."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "What was the negotiation about?",
        "options": [
          "A border dispute",
          "Sharing the waters of the Auroro River between two countries",
          "A trade tariff",
          "A military alliance"
        ],
        "correctIndex": 1,
        "explanation": "\"el conflicto por el uso compartido del río Auroro, cuya cuenca atravesaba tanto su país como el vecino Estado de Marentia.\""
      },
      {
        "type": "multiple-choice",
        "question": "What unexpected connection did Renata form with her counterpart Ilián?",
        "options": [
          "They were secretly related",
          "A shared interest in poetry and classical music that built personal trust",
          "They had attended the same university",
          "They were previously married"
        ],
        "correctIndex": 1,
        "explanation": "\"compartía con ella un interés genuino por la poesía y la música clásica.\""
      },
      {
        "type": "multiple-choice",
        "question": "What was Renata's key proposal to break the deadlock?",
        "options": [
          "A fixed 50/50 split",
          "A variable system adjusting water quotas based on actual seasonal rainfall levels",
          "Building a new dam",
          "Canceling the treaty entirely"
        ],
        "correctIndex": 1,
        "explanation": "\"proponer un sistema variable que ajustara las cuotas de agua según los niveles reales de precipitación registrados cada temporada.\""
      },
      {
        "type": "multiple-choice",
        "question": "How did Renata and Ilián handle presenting the proposal to avoid political backlash?",
        "options": [
          "They leaked it to the press first",
          "They coordinated simultaneous presentation to both governments so neither appeared to capitulate first",
          "They presented it only to Renata's government",
          "They refused to present it at all"
        ],
        "correctIndex": 1,
        "explanation": "\"coordinaron cuidadosamente la presentación simultánea de la propuesta ante ambos gobiernos, evitando así que ninguna de las partes pudiera acusar a la otra de haber capitulado unilateralmente.\""
      }
    ]
  },
  {
    "slug": "mountain-guide-difficult-rescue",
    "level": "B2",
    "number": 84,
    "title": "La cordada del silencio",
    "summary": "A veteran mountain guide must lead a dangerous rescue of a stranded climber during a sudden storm.",
    "duration": "10 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Tomás llevaba veinticinco años trabajando como guía de montaña en los Andes, y aunque conocía cada sendero, cada grieta y cada cambio repentino de clima de la cordillera como la palma de su mano, jamás había logrado superar del todo el recuerdo de la expedición en la que, quince años atrás, había perdido a su compañero de cordada durante una tormenta que ningún pronóstico había anticipado.",
          "Aquella tarde de mayo, mientras revisaba el parte meteorológico en la base del refugio, recibió una llamada de emergencia: un joven excursionista llamado Bruno, que había ascendido esa misma mañana sin guía y contra las recomendaciones explícitas del centro de montaña, se encontraba atrapado a más de cuatro mil metros de altura, incapaz de descender por sus propios medios debido a una tormenta de nieve que había caído con una rapidez inusual.",
          "El centro de rescate le pidió a Tomás que encabezara la operación, dado que era el guía con mayor experiencia disponible en la zona, pero la propuesta despertó en él un miedo que creía haber controlado hacía años: la posibilidad de repetir, en circunstancias similares, la tragedia que todavía visitaba sus pesadillas con una frecuencia que nunca había confesado del todo a nadie, ni siquiera a su esposa.",
          "Dudó durante minutos que a los organizadores del rescate les parecieron eternos, consciente de que cada instante de indecisión reducía las probabilidades de encontrar con vida al joven excursionista. Finalmente, tras respirar hondo varias veces, aceptó liderar el equipo de rescate, convencido de que su experiencia, precisamente forjada en la tragedia pasada, era lo que podía marcar la diferencia entre la vida y la muerte de Bruno.",
          "Formó un equipo reducido de tres rescatistas, todos con experiencia considerable en condiciones extremas, y emprendieron el ascenso bajo una nevada que dificultaba enormemente la visibilidad. Tomás, a pesar de la tensión evidente que sentía, se obligó a mantener la calma que sabía que sus compañeros necesitaban observar en él para no ceder al pánico ante las condiciones adversas.",
          "A medida que ascendían, la tormenta se intensificaba, y en más de una ocasión Tomás sintió que los recuerdos de la tragedia anterior amenazaban con paralizarlo completamente, sobre todo cuando el equipo tuvo que atravesar una zona de grietas ocultas bajo la nieve reciente, prácticamente idéntica a la que había cobrado la vida de su compañero años atrás.",
          "Localizaron a Bruno finalmente después de casi cuatro horas de ascenso, refugiado tras una roca que apenas lo protegía del viento, con signos evidentes de hipotermia y una pierna posiblemente fracturada tras una caída que él mismo apenas podía explicar con claridad debido a la confusión provocada por el frío extremo.",
          "Tomás evaluó rápidamente la situación y comprendió que descender con un herido, bajo aquellas condiciones climáticas, representaba un riesgo considerable para todo el equipo, un dilema que le recordó dolorosamente las decisiones imposibles que había tenido que tomar quince años atrás, cuando ninguna opción disponible había garantizado un desenlace seguro.",
          "Decidió, sin embargo, actuar con un procedimiento distinto al que había empleado en aquella ocasión anterior: en lugar de forzar un descenso inmediato bajo la tormenta, optó por estabilizar a Bruno en un refugio improvisado, cavado parcialmente en la nieve, y esperar una ventana de mejora meteorológica que el parte actualizado sugería que llegaría en pocas horas.",
          "Aquella espera resultó angustiante para todo el equipo, especialmente para Tomás, que pasó las horas monitoreando constantemente el estado de Bruno mientras luchaba internamente contra el impulso de actuar precipitadamente solo para acallar sus propios fantasmas, en lugar de tomar la decisión más segura para el joven herido.",
          "La ventana meteorológica llegó finalmente, tal como había pronosticado el parte actualizado, y el equipo pudo iniciar el descenso con Bruno estabilizado y consciente, aunque todavía debilitado por el frío y el dolor de su lesión. El descenso, aunque lento y exigente, se completó sin incidentes adicionales, y Bruno fue trasladado de inmediato a un hospital de la región para recibir la atención médica que necesitaba con urgencia.",
          "Aquella noche, ya de vuelta en el refugio, Tomás se permitió llorar por primera vez en años, no de tristeza sino de un alivio profundo que mezclaba el rescate exitoso con la sensación, largamente esperada, de haber hecho las paces con un pasado que llevaba media vida cargando en silencio. Comprendió que el verdadero valor de un guía de montaña no residía en no sentir miedo, sino en saber actuar con sabiduría a pesar de él."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "What happened to Tomás fifteen years before the story's events?",
        "options": [
          "He fell off a mountain",
          "He lost a climbing partner during an unforeseen storm",
          "He retired from guiding",
          "He was injured in an avalanche"
        ],
        "correctIndex": 1,
        "explanation": "\"había perdido a su compañero de cordada durante una tormenta que ningún pronóstico había anticipado.\""
      },
      {
        "type": "multiple-choice",
        "question": "Why was Bruno stranded on the mountain?",
        "options": [
          "He was pushed by another climber",
          "He had climbed without a guide, against explicit recommendations, and got caught in a sudden snowstorm",
          "His equipment failed",
          "He was lost for days"
        ],
        "correctIndex": 1,
        "explanation": "\"había ascendido esa misma mañana sin guía y contra las recomendaciones explícitas del centro de montaña.\""
      },
      {
        "type": "multiple-choice",
        "question": "What decision did Tomás make differently this time compared to fifteen years earlier?",
        "options": [
          "He refused to attempt the rescue",
          "He stabilized Bruno and waited for a weather window instead of forcing an immediate descent",
          "He descended immediately regardless of risk",
          "He sent someone else instead"
        ],
        "correctIndex": 1,
        "explanation": "\"optó por estabilizar a Bruno en un refugio improvisado... y esperar una ventana de mejora meteorológica.\""
      },
      {
        "type": "multiple-choice",
        "question": "How did Tomás feel at the end of the story?",
        "options": [
          "Angry and bitter",
          "A profound relief, feeling he had made peace with his past",
          "Indifferent",
          "Determined to quit guiding forever"
        ],
        "correctIndex": 1,
        "explanation": "\"se permitió llorar... no de tristeza sino de un alivio profundo... de haber hecho las paces con un pasado.\""
      }
    ]
  },
  {
    "slug": "el-hilo-que-no-se-corta",
    "level": "B2",
    "number": 85,
    "title": "El hilo que no se corta",
    "summary": "A woman flees her broken life in the city and finds, in her grandmother's lace-making, a language that doesn't require explanations.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Noa llegó a Camariñas un martes de niebla, cuando el mar y el cielo eran del mismo color y las casas parecían flotar sobre el puerto. Había dejado Madrid casi sin avisar, con dos maletas y la sensación de que algo en su vida se había roto sin que ella supiera exactamente cuándo. Su abuela Aurora la recibió en la puerta como si la hubiera estado esperando desde hacía semanas, aunque Noa no había llamado para anunciar su llegada.",
          "-No preguntes nada todavía- le dijo, y la hizo pasar a la cocina, donde el mundillo de encaje seguía sobre la mesa, con los bolillos colgando como si alguien acabara de soltarlos un instante antes. Noa se sentó frente a él y reconoció, de golpe, los dibujos que de niña había visto nacer bajo los dedos de su abuela: rosas, ondas, el motivo que aquí todos llaman camariñana.",
          "Durante los primeros días apenas habló. Salía a caminar por el puerto, donde ya no quedaban tantas lanchas como antes, y volvía justo cuando empezaba a anochecer. Su abuela nunca le preguntó qué había pasado en Madrid, aunque era evidente que algo la había dejado vacía por dentro; se limitaba a colocarle los bolillos entre los dedos, como quien enseña a caminar a un niño que ya sabe hacerlo pero lo ha olvidado.",
          "-Aquí no hace falta que cuentes nada- le dijo una tarde, sin levantar la vista del encaje-. Las manos hablan solas, si una las deja.",
          "Poco a poco, Noa fue entendiendo el ritmo: el chasquido de los bolillos al cruzarse, la paciencia que exigía cada alfiler clavado en el patrón de papel. Le sorprendió descubrir que, mientras trabajaba, no pensaba en el despido, ni en el piso que había tenido que dejar, ni en las llamadas que llevaba semanas sin devolver. Por primera vez en meses, su cabeza estaba tan ocupada como sus dedos.",
          "Una noche le preguntó a su abuela si alguna vez había querido irse del pueblo. Aurora tardó en responder, y cuando lo hizo, su voz sonó distinta, más joven. -Quise irme muchas veces- confesó-. Pero cada vez que estaba a punto de hacerlo, me sentaba aquí, con el mundillo, y se me olvidaba por qué quería marcharme.",
          "Noa comprendió entonces que no había llegado a Camariñas por casualidad, ni solo para esconderse de su propia vida. Había llegado porque, sin saberlo, necesitaba que alguien le enseñara otra vez a hacer algo despacio, algo que no pudiera deshacerse con un correo electrónico ni con una firma. Cuando su abuela le ofreció, sin ceremonia alguna, un mundillo más pequeño que había pertenecido a la bisabuela, Noa lo aceptó con una seriedad que la sorprendió a sí misma.",
          "No decidió quedarse para siempre; eso habría sido mentirse. Pero cuando llegó el domingo y tuvo que elegir entre el tren de la tarde y una semana más en Camariñas, se descubrió guardando el billete en el fondo del bolso, sin fecha fija, y sentándose de nuevo frente al mundillo, dispuesta a que sus manos siguieran hablando por ella un poco más."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "Why did Noa travel to Camariñas at the start of the story?",
        "options": [
          "Her grandmother had summoned her to help sell the family lace business",
          "Something in her life in Madrid had fallen apart, though she doesn't explain what",
          "She had planned a long vacation months in advance",
          "Her grandmother was seriously ill and needed care"
        ],
        "correctIndex": 1,
        "explanation": "The text says she left with 'la sensación de que algo en su vida se había roto sin que ella supiera exactamente cuándo' (the feeling that something in her life had broken without her knowing exactly when), and later mentions 'el despido' (the layoff) — she never explicitly narrates the cause, matching option B."
      },
      {
        "type": "multiple-choice",
        "question": "What does Aurora tell Noa about the need to explain herself?",
        "options": [
          "That she must tell her everything before she can stay",
          "That she should call Madrid and apologize immediately",
          "That there is no need to explain anything — the hands speak on their own if allowed to",
          "That silence is disrespectful in her house"
        ],
        "correctIndex": 2,
        "explanation": "Aurora says: 'Aquí no hace falta que cuentes nada... Las manos hablan solas, si una las deja' (There's no need to tell anything here... hands speak on their own, if you let them)."
      },
      {
        "type": "multiple-choice",
        "question": "What does Aurora reveal about her own past when Noa asks if she ever wanted to leave?",
        "options": [
          "She never once considered leaving the village",
          "She left once but came back for her husband",
          "She often wanted to leave, but working the lace pillow made her forget why",
          "She was forced to stay by her own mother"
        ],
        "correctIndex": 2,
        "explanation": "Aurora confesses: 'Quise irme muchas veces... Pero cada vez que estaba a punto de hacerlo, me sentaba aquí, con el mundillo, y se me olvidaba por qué quería marcharme' (I wanted to leave many times... but I'd sit down with the lace pillow and forget why)."
      },
      {
        "type": "multiple-choice",
        "question": "How does the story end?",
        "options": [
          "Noa firmly decides to move back to Camariñas permanently",
          "Noa leaves on the Sunday train as originally planned",
          "Noa buys a plane ticket to return to Madrid immediately",
          "Noa keeps her train ticket without a fixed date and stays another week"
        ],
        "correctIndex": 3,
        "explanation": "The final lines say she found herself 'guardando el billete en el fondo del bolso, sin fecha fija' and sitting down again at the lace pillow — an open, undecided ending rather than a firm commitment."
      }
    ]
  },
  {
    "slug": "lo-que-no-se-hereda",
    "level": "B2",
    "number": 86,
    "title": "Lo que no se hereda",
    "summary": "Three siblings gather at their father's olive grove to decide its fate, and discover that dividing land is easier than dividing memory.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "El olivar llevaba en la familia cinco generaciones, y fue precisamente esa cifra la que Marta repitió como si fuera un argumento cuando sus hermanos se sentaron, incómodos, alrededor de la mesa de la cocina. Su padre había muerto en marzo sin dejar instrucciones claras sobre qué hacer con las tierras, solo una nota manuscrita que decía que confiaba en que se pusieran de acuerdo. Marta, que vivía en Madrid desde hacía quince años, quería vender; Julián, el único que se había quedado en el pueblo, se negaba en redondo.",
          "-No es solo tierra- dijo Julián, golpeando la mesa con más fuerza de la que pretendía-. Es lo único que queda de él que todavía respira.",
          "Elena, la pequeña, no había dicho nada en toda la tarde. Miraba por la ventana los olivos que se extendían hasta la colina, los mismos que había trepado de niña mientras sus hermanos discutían sobre quién tenía razón, una costumbre que, según parecía, no habían abandonado con los años. Sabía que si votaba con Marta, la venta se haría casi de inmediato; si votaba con Julián, tendrían que esperar, y quizá pelear, durante meses.",
          "-Si vendiéramos, cada uno recibiría lo suficiente para no volver a preocuparse por el dinero en mucho tiempo- razonó Marta, tratando de sonar más calmada de lo que estaba-. Y no hay nada de malo en eso. Papá también tuvo que dejar cosas atrás cuando era joven.",
          "Julián respondió que aquello era distinto, que su padre nunca había abandonado la tierra sino que la había defendido incluso en los años en que las heladas destruían media cosecha y los bancos ofrecían comprarlo todo por nada. Recordó, con la voz quebrada, las madrugadas en que salían juntos a encender fuegos entre los árboles para que el frío no matara los brotes, y cómo su padre nunca se quejaba, aunque volviera a casa con las manos agrietadas.",
          "-Si él hubiera querido vender, lo habría hecho hace treinta años, cuando de verdad lo necesitábamos- añadió Julián-. No lo hizo. Eso también es una respuesta.",
          "Elena, que hasta entonces se había mantenido al margen, propuso algo que ninguno de los dos había considerado: no vender ni quedarse todos atados al olivar, sino dejarlo un año más bajo el cuidado de Julián, sin tomar ninguna decisión definitiva, y volver a hablarlo después de la próxima cosecha. No era una solución, lo sabía, pero les daba tiempo para que el dolor reciente no fuera quien decidiera por ellos.",
          "Marta aceptó, no porque estuviera convencida, sino porque comprendió que forzar una venta inmediata habría abierto una herida entre sus hermanos que tardaría años en cerrar, si es que llegaba a cerrarse. Aquella noche, antes de volver a Madrid, caminó sola entre los olivos por primera vez en años, y por un momento, sin que pudiera explicarlo del todo, entendió lo que Julián llevaba tanto tiempo intentando decirle."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "What disagreement divides the three siblings?",
        "options": [
          "Whether to sell the olive grove or keep it in the family",
          "Who should inherit their father's house in the village",
          "Whether to modernize the family's farming equipment",
          "How to split their father's savings account"
        ],
        "correctIndex": 0,
        "explanation": "The conflict is explicit: 'Marta... quería vender; Julián... se negaba en redondo' (Marta wanted to sell; Julián flatly refused) — the dispute is over the olivar itself."
      },
      {
        "type": "multiple-choice",
        "question": "What memory does Julián use to argue against selling?",
        "options": [
          "The time their father won a regional olive-oil prize",
          "Mornings spent lighting fires among the trees to save the crop from frost",
          "The day their father planted the first olive tree",
          "A promise their father made on his deathbed to never sell"
        ],
        "correctIndex": 1,
        "explanation": "Julián recalls 'las madrugadas en que salían juntos a encender fuegos entre los árboles para que el frío no matara los brotes' (the dawns when they went out together to light fires among the trees so the cold wouldn't kill the buds)."
      },
      {
        "type": "multiple-choice",
        "question": "What evidence does Julián offer that their father never wanted to sell?",
        "options": [
          "A letter their father wrote explicitly refusing all offers",
          "The fact that he never sold even during hard years when banks offered to buy the land",
          "A clause in the will forbidding a sale",
          "Testimony from neighbors who heard him say so"
        ],
        "correctIndex": 1,
        "explanation": "Julián says: 'Si él hubiera querido vender, lo habría hecho hace treinta años, cuando de verdad lo necesitábamos... No lo hizo. Eso también es una respuesta' (If he'd wanted to sell, he would have done it thirty years ago... He didn't. That's an answer too)."
      },
      {
        "type": "multiple-choice",
        "question": "How does the disagreement get resolved by the end of the story?",
        "options": [
          "Marta forces an immediate sale against her siblings' wishes",
          "The siblings stop speaking to each other entirely",
          "Elena proposes postponing any final decision for a year, and Marta accepts",
          "A court settles the dispute by dividing the land equally"
        ],
        "correctIndex": 2,
        "explanation": "Elena suggests leaving the decision for a year, and the text says 'Marta aceptó, no porque estuviera convencida, sino porque comprendió' that forcing a sale would open a lasting wound — no final decision is made, just a delay."
      }
    ]
  },
  {
    "slug": "la-voz-que-hereda-el-viento",
    "level": "B2",
    "number": 87,
    "title": "La voz que hereda el viento",
    "summary": "A copla singer watches her daughter reinvent the songs she spent her life defending, and must decide what tradition is actually for.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Remedios llevaba cantando copla desde los catorce años, cuando su madre la subió a un escenario improvisado en la feria del pueblo y le dijo que no bajara hasta que el público dejara de aplaudir. Cuarenta años después, seguía cantando las mismas canciones casi con las mismas palabras, convencida de que cambiarlas era, de alguna manera, traicionar a quienes se las habían enseñado. Por eso, cuando su hija Alba empezó a mezclar aquellas letras antiguas con guitarras eléctricas y ritmos que Remedios apenas reconocía, sintió que algo se le quebraba por dentro.",
          "-No es que esté mal lo que haces- le dijo una tarde, tratando de elegir bien las palabras-. Es que no sé si sigue siendo lo que era.",
          "Alba, que había crecido escuchando a su madre ensayar en la cocina cada domingo, no pretendía borrar nada; quería, más bien, que aquellas canciones sobrevivieran a un público que ya no llenaba los teatros donde cantaba Remedios. Había reescrito los arreglos, sí, pero conservaba cada verso exactamente como lo había aprendido de niña, palabra por palabra, aunque los acordes que los sostenían fueran otros.",
          "-Si nadie las canta de otra forma, dentro de veinte años nadie las va a cantar de ninguna- respondió Alba, sin levantar la voz, aunque el argumento le pesaba como una acusación que no quería lanzar-. No lo hago para que tú lo apruebes. Lo hago para que no se pierdan.",
          "Remedios no supo qué responder aquella noche, y durante semanas evitó hablar del tema, como si ignorarlo pudiera devolverle la certeza que había tenido toda la vida. Sin embargo, una noche de sábado, mientras hacía la cena, escuchó por la ventana abierta una melodía que le resultó extrañamente familiar: era una de sus canciones, la que su propia madre le había enseñado, pero con un ritmo que nunca antes había oído, saliendo del cuarto de Alba.",
          "Se quedó de pie junto a la puerta, sin atreverse a entrar, escuchando cómo la letra que ella había cantado mil veces sonaba distinta y, sin embargo, seguía siendo exactamente la misma historia: una mujer que espera, que sufre, que al final elige quedarse. Comprendió entonces que lo que temía perder no era la canción, sino el lugar que ella misma ocupaba en su transmisión.",
          "Cuando Alba le pidió, meses después, que cantara con ella en un festival pequeño de la ciudad, Remedios estuvo a punto de negarse por orgullo. Pero aceptó, con la condición de que fuera ella quien abriera la canción sola, como siempre lo había hecho, antes de que entrara la guitarra eléctrica de su hija.",
          "Aquella noche, sobre un escenario mucho más pequeño que los de su juventud, Remedios cantó los primeros versos con la voz que le quedaba, y cuando Alba entró con su arreglo, en lugar de sentir que le arrebataban algo, sintió, por primera vez en años, que la canción seguía viva precisamente porque alguien había decidido no dejarla quieta."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "Why does Remedios initially feel troubled by Alba's music?",
        "options": [
          "Alba refuses to perform in public at all",
          "Alba is writing entirely new lyrics that replace the old songs",
          "Alba mixes the traditional lyrics with electric guitars and unfamiliar rhythms",
          "Alba wants to stop singing copla altogether and switch genres"
        ],
        "correctIndex": 2,
        "explanation": "The text states Alba began 'mezclar aquellas letras antiguas con guitarras eléctricas y ritmos que Remedios apenas reconocía' (mixing the old lyrics with electric guitars and rhythms Remedios barely recognized)."
      },
      {
        "type": "multiple-choice",
        "question": "What is Alba's justification for changing the arrangements?",
        "options": [
          "She believes the old versions are simply outdated and embarrassing",
          "A music producer told her it was the only way to get paid",
          "She fears that if no one sings them differently, in twenty years no one will sing them at all",
          "She wants to make more money than her mother did"
        ],
        "correctIndex": 2,
        "explanation": "Alba says: 'Si nadie las canta de otra forma, dentro de veinte años nadie las va a cantar de ninguna... Lo hago para que no se pierdan' (If no one sings them differently, in twenty years no one will sing them at all... I do it so they aren't lost)."
      },
      {
        "type": "multiple-choice",
        "question": "What does Remedios realize while listening outside Alba's door?",
        "options": [
          "That Alba had actually changed the story of the song completely",
          "That what she feared losing was her own place in passing on the song, not the song itself",
          "That Alba's version was musically inferior to her own",
          "That she should forbid Alba from performing the song again"
        ],
        "correctIndex": 1,
        "explanation": "The text says: 'Comprendió entonces que lo que temía perder no era la canción, sino el lugar que ella misma ocupaba en su transmisión' (she understood that what she feared losing wasn't the song, but her own place in passing it on)."
      },
      {
        "type": "multiple-choice",
        "question": "How does the story resolve at the festival?",
        "options": [
          "Remedios refuses to appear on stage with Alba",
          "Remedios opens the song alone in the traditional style before Alba's arrangement joins in",
          "Alba abandons her electric arrangement to please her mother",
          "The two argue publicly and the performance is cancelled"
        ],
        "correctIndex": 1,
        "explanation": "Remedios agrees 'con la condición de que fuera ella quien abriera la canción sola... antes de que entrara la guitarra eléctrica de su hija' — she sings the opening verses alone, then Alba's arrangement enters."
      }
    ]
  },
  {
    "slug": "el-horno-de-la-calle-mayor",
    "level": "B2",
    "number": 88,
    "title": "El horno de la calle mayor",
    "summary": "An aging baker teaches his granddaughter the old wood-fired method before his hands, and not just his oven, begin to fail him.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Cándido llevaba cincuenta y tres años levantándose a las cuatro de la madrugada para encender el horno de leña de la calle Mayor, el mismo que había heredado de su padre y que, según decían en el pueblo, hacía el mejor pan de toda la comarca. Últimamente, sin embargo, le costaba más de lo habitual cargar los troncos, y en más de una ocasión había tenido que sentarse a mitad de la tarea, algo que jamás le había pasado antes.",
          "Su nieta Sara había vuelto de la ciudad hacía tres meses, después de que la empresa donde trabajaba cerrara sin previo aviso. No tenía intención de quedarse mucho tiempo, o eso se repetía cada mañana mientras ayudaba a su abuelo con el reparto, pero cada mañana también encontraba una excusa nueva para posponer su marcha.",
          "-No es que necesite ayuda- le dijo Cándido una mañana, mientras se frotaba la espalda con gesto disimulado-. Es que me gusta que estés aquí.",
          "Sara sabía que mentía, o al menos que no decía toda la verdad. Había visto cómo, en los últimos meses, su abuelo tardaba cada vez más en amasar, y cómo a veces se quedaba mirando el horno encendido con una expresión que no era cansancio, sino algo más parecido al miedo. Una tarde, mientras cerraban la panadería, una cadena de supermercados de la capital le ofreció comprar el local para instalar allí una franquicia de panadería industrial; el dinero que ofrecían habría bastado para que su abuelo se jubilara sin preocupaciones.",
          "-Si aceptara, no tendrías que preocuparte más por mí- le dijo Cándido a su nieta, casi como si le costara pronunciar las palabras-. Podrías volver a la ciudad tranquila.",
          "Sara no respondió enseguida. En vez de eso, le pidió que le enseñara, esa misma noche, a calcular el punto exacto de la masa con solo tocarla, un conocimiento que su abuelo nunca había necesitado explicar con números porque lo llevaba en los dedos desde niño. Cándido, sorprendido, encendió el horno una hora antes de lo habitual y, por primera vez en meses, trabajó sin quejarse del cansancio.",
          "Durante las semanas siguientes, Sara aprendió a leer el fuego como quien aprende un idioma nuevo: cuándo la leña estaba lista, cuánto tardaba en templarse la piedra del horno, en qué momento exacto había que meter el pan para que la corteza saliera oscura pero no quemada. Cándido, mientras tanto, hablaba menos de su espalda y más de recetas, como si al transmitirlas se sintiera menos urgido por el tiempo que le quedaba frente al horno.",
          "No rechazaron la oferta del supermercado de inmediato, ni Sara prometió quedarse para siempre; ambos sabían que las promesas grandes rara vez se cumplen tal como se hacen. Pero la mañana en que Cándido, por primera vez en su vida, dejó que fuera su nieta quien decidiera sola el punto de cocción del pan, salió a la calle a tomar un café con una calma que hacía años no sentía, sabiendo que el horno seguiría encendido aunque él, algún día, no pudiera encenderlo."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "Why did Sara return to her grandfather's village?",
        "options": [
          "She was sent by the supermarket chain to negotiate a purchase",
          "Her company in the city closed unexpectedly and she lost her job",
          "Her grandfather asked her to come manage the bakery",
          "She had always planned to take over the family business"
        ],
        "correctIndex": 1,
        "explanation": "The text says Sara returned 'después de que la empresa donde trabajaba cerrara sin previo aviso' (after the company she worked for closed without warning)."
      },
      {
        "type": "multiple-choice",
        "question": "What worries Sara about her grandfather in the months after her return?",
        "options": [
          "He is spending too much money on new equipment",
          "He refuses to teach her anything about the bakery",
          "He is increasingly slow and tired, and looks at the oven with something like fear",
          "He wants to sell the bakery immediately without telling her"
        ],
        "correctIndex": 2,
        "explanation": "The narration notes he 'se quedaba mirando el horno encendido con una expresión que no era cansancio, sino algo más parecido al miedo' (he'd stare at the lit oven with an expression that wasn't tiredness, but closer to fear)."
      },
      {
        "type": "multiple-choice",
        "question": "What offer does Cándido receive, and what does he say about it to Sara?",
        "options": [
          "A supermarket chain offers to buy the bakery, and he says accepting it would let Sara return to the city without worrying about him",
          "A rival baker offers to merge businesses, and Cándido refuses outright",
          "The town hall offers a subsidy, and Cándido insists on refusing all outside help",
          "A journalist offers to write about the bakery, and Cándido feels flattered"
        ],
        "correctIndex": 0,
        "explanation": "Cándido tells her: 'Si aceptara, no tendrías que preocuparte más por mí... Podrías volver a la ciudad tranquila' (If I accepted, you wouldn't have to worry about me anymore... you could go back to the city with peace of mind)."
      },
      {
        "type": "multiple-choice",
        "question": "How does the story end?",
        "options": [
          "Cándido sells the bakery and retires to live with Sara in the city",
          "Sara leaves for the city without resolving anything with her grandfather",
          "Neither the offer is refused nor a permanent decision made, but Cándido lets Sara decide the bread's baking point alone, and feels at peace",
          "The bakery closes permanently due to lack of customers"
        ],
        "correctIndex": 2,
        "explanation": "The final paragraph says they don't reject the offer immediately, but Cándido 'dejó que fuera su nieta quien decidiera sola el punto de cocción del pan' and felt a calm he hadn't felt in years — an open but hopeful ending."
      }
    ]
  },
  {
    "slug": "el-farero-de-punta-fria",
    "level": "B2",
    "number": 89,
    "title": "El farero de Punta Fría",
    "summary": "The last human keeper of a lighthouse must hand his post to a machine, and figure out what, if anything, he gets to take with him.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Elías llevaba veintiocho años subiendo las noventa y siete escaleras del faro de Punta Fría cada noche, encendiendo la luz exactamente a la hora en que el sol terminaba de hundirse en el mar Cantábrico. Su padre había hecho lo mismo antes que él, y su abuelo antes que su padre, de modo que cuando la Autoridad Portuaria le comunicó que el faro sería automatizado, Elías tuvo la sensación de que no le estaban quitando un trabajo, sino cortando el último hilo que lo unía a tres generaciones de hombres que habían mirado ese mismo mar.",
          "Su hijo Diego llegó un viernes por la tarde, enviado, según dijo, para ayudarlo con la mudanza, aunque Elías sospechaba que en realidad lo habían mandado para asegurarse de que no hiciera ninguna tontería. Diego vivía en Santander desde hacía años, trabajaba en algo relacionado con seguros que su padre nunca había terminado de entender, y visitaba el faro con la frecuencia justa para no sentirse culpable.",
          "-No tienes que quedarte a ver cómo instalan el sistema nuevo- le dijo Elías la primera noche, mientras cenaban en silencio-. Puedo hacerlo solo.",
          "-No he venido por el sistema- respondió Diego, sin mirarlo-. He venido por ti.",
          "Durante los días siguientes, unos técnicos llegaron para instalar un mecanismo automático que encendería y apagaría la luz sin que nadie tuviera que subir jamás aquellas escaleras. Elías los observó trabajar desde una distancia prudente, sin ofrecer ayuda ni hacer preguntas, como si temiera que acercarse demasiado fuera a hacerle admitir que aquello, en efecto, funcionaba mejor que él.",
          "La última noche antes de que el sistema entrara en funcionamiento, Elías subió una vez más, seguido por Diego, que nunca antes había hecho aquel ascenso completo. Arriba, mientras encendía la luz por última vez con sus propias manos, le explicó a su hijo cosas que jamás había tenido paciencia para contarle de niño: cómo distinguir un barco pesquero de uno de recreo por la forma en que se balanceaba, qué nubes anunciaban tormenta antes de que el cielo se oscureciera, por qué su abuelo insistía en engrasar cada tornillo aunque nadie se lo hubiera pedido.",
          "-Si algún día me hubieran preguntado si valía la pena una vida entera por esto- dijo Elías, mirando el haz de luz girar sobre el agua-, habría dicho que sí sin dudarlo. Ahora ya no sé qué decir, porque nadie me lo pregunta.",
          "Diego no supo qué responder, pero antes de bajar por última vez, le pidió a su padre el viejo cuaderno de bitácora donde, durante veintiocho años, Elías había anotado cada guardia, cada tormenta, cada barco avistado. No era el faro lo que podía llevarse consigo, pero sí aquellas páginas, y mientras las guardaba con cuidado en su bolsa, Elías sintió, por primera vez desde que había recibido la noticia, que algo de todo aquello sobreviviría."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "What change is about to happen to the lighthouse at Punta Fría?",
        "options": [
          "It is going to be demolished to build a hotel",
          "It will be automated, ending the need for a human keeper",
          "It will be sold to a private collector",
          "It will be converted into a museum with tour guides"
        ],
        "correctIndex": 1,
        "explanation": "The story opens with the Autoridad Portuaria informing Elías 'que el faro sería automatizado' (that the lighthouse would be automated), ending his role as keeper."
      },
      {
        "type": "multiple-choice",
        "question": "Why does Diego say he came to visit that weekend?",
        "options": [
          "\"He venido por ti\" — he came for his father, not for the new system",
          "He came to inspect the new automated equipment for his job",
          "He came to convince his father to sell the lighthouse",
          "He came only because his mother insisted he visit"
        ],
        "correctIndex": 0,
        "explanation": "When Elías says he can handle the installation alone, Diego responds: 'No he venido por el sistema... He venido por ti' (I didn't come for the system... I came for you)."
      },
      {
        "type": "multiple-choice",
        "question": "What does Elías teach Diego during their final climb together?",
        "options": [
          "How to operate the new automated lighting system",
          "How to distinguish boat types by their movement and read the clouds for coming storms",
          "How to negotiate with the Autoridad Portuaria for compensation",
          "How to write official reports about the lighthouse's history"
        ],
        "correctIndex": 1,
        "explanation": "Elías explains 'cómo distinguir un barco pesquero de uno de recreo por la forma en que se balanceaba, qué nubes anunciaban tormenta antes de que el cielo se oscureciera' — practical knowledge from decades of watching the sea."
      },
      {
        "type": "multiple-choice",
        "question": "What does the story's ending suggest Elías is able to keep?",
        "options": [
          "His job, since the automation plan is cancelled at the last minute",
          "The physical light mechanism, which he is allowed to take home",
          "The logbook where he recorded twenty-eight years of watches, storms, and sightings",
          "A formal position as a tour guide at the now-automated lighthouse"
        ],
        "correctIndex": 2,
        "explanation": "Diego asks for 'el viejo cuaderno de bitácora donde, durante veintiocho años, Elías había anotado cada guardia, cada tormenta, cada barco avistado' — the logbook is what survives, not the post itself."
      }
    ]
  },
  {
    "slug": "el-ultimo-mural-de-la-fabrica",
    "level": "B2",
    "number": 90,
    "title": "El último mural de la fábrica",
    "summary": "A muralist is hired to paint a wall that will be demolished within the month, and finds that impermanence can be its own kind of honesty.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "A Rosa le encargaron pintar un mural en el muro exterior de la antigua fábrica de conservas de Bilbao, el mismo que llevaba veinte años cerrado y que, según habían anunciado ya en el ayuntamiento, sería derribado en menos de un mes para construir un edificio de apartamentos. Le pareció extraño que alguien pagara por decorar algo que estaba condenado a desaparecer tan pronto, pero la organización cultural que financiaba el proyecto insistió en que precisamente por eso valía la pena: querían que el barrio se despidiera de la fábrica con algo hermoso.",
          "El primer día, mientras montaba el andamio, un hombre mayor se acercó a observarla sin decir nada. Se llamaba Benito, había trabajado en aquella fábrica durante treinta y cuatro años, y desde que la cerraron pasaba las mañanas caminando por el barrio sin un destino claro, como si su cuerpo todavía obedeciera un horario que ya no existía.",
          "-¿Vas a pintar algo bonito para taparlo, o algo que lo recuerde?- le preguntó, con una voz que no sonaba hostil, solo cansada.",
          "Rosa no supo qué responder al principio. Había planeado un diseño abstracto, formas y colores que había usado ya en otros murales de otras ciudades, sin relación alguna con aquel lugar en particular. Pero la pregunta de Benito se le quedó clavada durante toda la tarde, y esa noche, en lugar de dormir, empezó a bocetar algo distinto.",
          "Volvió a buscar a Benito al día siguiente y le pidió que le contara cómo era trabajar allí dentro: el ruido de las máquinas, el olor del pescado en salazón, los turnos de noche, los nombres de los compañeros que ya habían muerto. Benito, que llevaba años sin que nadie le preguntara nada sobre aquello, habló durante horas, y Rosa fue anotando cada detalle como quien recoge algo antes de que se lo lleve la marea.",
          "El mural que finalmente pintó no representaba máquinas ni obreros de manera literal, sino manos: decenas de manos superpuestas, en distintos tonos, algunas jóvenes y otras arrugadas, todas trabajando sobre lo que podía leerse, si uno se fijaba bien, como una lata de conserva abierta. Cuando Benito lo vio terminado, no dijo nada durante un buen rato; solo se quedó de pie, mirándolo, con los brazos cruzados.",
          "-Va a durar menos de un mes- dijo finalmente Rosa, casi disculpándose, como si temiera haberlo hecho todo para nada.",
          "-Todo lo que de verdad importó aquí dentro duró menos de un mes, si lo piensas bien- respondió Benito, sin apartar la vista del muro-. Un turno, una jornada, un abrazo de despedida. Lo que dura no es lo que se queda pintado en una pared, sino lo que alguien decide recordar. Y de esto, ya me acordaré yo por los dos."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "Why does Rosa initially find the mural commission strange?",
        "options": [
          "The factory owners refuse to pay for the materials",
          "The wall will be demolished within a month, yet she's still asked to decorate it beautifully",
          "The neighborhood association wants no art at all on the building",
          "The mural must be finished within a single day"
        ],
        "correctIndex": 1,
        "explanation": "The wall 'sería derribado en menos de un mes' (would be demolished in less than a month), and Rosa finds it strange that anyone would pay to decorate something so soon to disappear."
      },
      {
        "type": "multiple-choice",
        "question": "What question does Benito ask Rosa that changes her approach to the mural?",
        "options": [
          "Whether she will be paid fairly for her work",
          "Whether she is going to paint something pretty to cover the factory up, or something that remembers it",
          "Whether she has ever worked in a factory herself",
          "Whether the mural will survive the demolition"
        ],
        "correctIndex": 1,
        "explanation": "Benito asks: '¿Vas a pintar algo bonito para taparlo, o algo que lo recuerde?' (Are you going to paint something pretty to cover it up, or something that remembers it?) — this reframes her whole design."
      },
      {
        "type": "multiple-choice",
        "question": "What does the finished mural depict?",
        "options": [
          "A realistic portrait of the factory workers at their machines",
          "Dozens of overlapping hands of different ages, working over what reads as an open can",
          "An abstract geometric pattern unrelated to the factory",
          "A landscape of the sea and the fishing boats that supplied the factory"
        ],
        "correctIndex": 1,
        "explanation": "The text describes 'decenas de manos superpuestas, en distintos tonos... todas trabajando sobre lo que podía leerse... como una lata de conserva abierta' (dozens of overlapping hands... working over what could be read as an open tin can)."
      },
      {
        "type": "multiple-choice",
        "question": "What is Benito's final response when Rosa apologizes that the mural will only last a month?",
        "options": [
          "He tells her she wasted her time and should have refused the job",
          "He says the demolition should be stopped by the neighborhood",
          "He says what mattered inside the factory also lasted short spans of time, and that memory, not paint, is what endures",
          "He asks her to repaint it somewhere more permanent"
        ],
        "correctIndex": 2,
        "explanation": "Benito says: 'Todo lo que de verdad importó aquí dentro duró menos de un mes... Lo que dura... es lo que alguien decide recordar. Y de esto, ya me acordaré yo por los dos' (Everything that truly mattered here also lasted less than a month... what endures is what someone chooses to remember. And I'll remember this for both of us)."
      }
    ]
  },
  {
    "slug": "el-tallista-de-la-ermita",
    "level": "B2",
    "number": 91,
    "title": "El tallista de la ermita",
    "summary": "In Antigua, an old santero carves the figure for next year's Holy Week procession while his son prepares to leave for a country that promises more than this one can.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Don Efraín tallaba santos de madera desde antes de que naciera su hijo Marcos, y en el taller de su casa, en las afueras de Antigua, guardaba imágenes a medio terminar que llevaban décadas esperando su turno. La cofradía del barrio le había encargado, ese año, una nueva imagen para la procesión de Semana Santa, y aunque Efraín había aceptado sin dudarlo, sentía que sus manos ya no obedecían con la misma precisión que antes.",
          "Marcos, que había ayudado a su padre desde niño a lijar y barnizar, había decidido irse a Estados Unidos con un primo que ya llevaba allí dos años trabajando en la construcción. Se lo comunicó a su padre una tarde, mientras este raspaba con cuidado el rostro apenas esbozado de la nueva talla, y durante un largo rato ninguno de los dos dijo nada.",
          "-Si me quedo, no sé qué voy a poder ofrecerle a mis hijos, cuando los tenga- dijo finalmente Marcos, con la vista fija en las virutas que caían al suelo-. Aquí no hay trabajo, papá. Ya lo sabes.",
          "Efraín no discutió; sabía que su hijo tenía razones que él mismo, de más joven, habría entendido perfectamente. Pero le pidió, antes de que se marchara, que se quedara unas semanas más para ayudarlo a terminar la imagen, con la excusa de que necesitaba otro par de manos para las partes más delicadas, aunque en realidad lo que quería era tener a su hijo cerca un poco más de tiempo.",
          "Durante aquellas semanas, Efraín le enseñó a Marcos, por primera vez con verdadera paciencia, los secretos que nunca había tenido tiempo de transmitirle del todo: cómo leer la veta de la madera para que la gubia no se resistiera, cómo dorar los pliegues de una túnica sin que el pan de oro se quebrara, cómo dejar que el rostro de un santo pareciera triste sin que pareciera muerto. Marcos, que siempre había considerado aquel oficio como el trabajo de su padre y no como algo suyo, empezó a mirarlo con otros ojos.",
          "La noche antes de que Marcos tomara el autobús hacia la frontera, terminaron juntos la imagen, y Efraín le pidió que firmara con sus iniciales, discretamente, en la base de madera, junto a las suyas propias, como se había hecho en el taller desde hacía tres generaciones. Marcos se resistió al principio, diciendo que no lo merecía, pero su padre insistió: -Esto ya es tan tuyo como mío. Lo lleves donde lo lleves.",
          "El día de la procesión, Efraín caminó detrás de la imagen entre el gentío, solo, mientras su hijo cruzaba, en ese mismo momento, un desierto a cientos de kilómetros de allí. No sabía si Marcos regresaría algún día para ver con sus propios ojos lo que habían hecho juntos, pero llevaba consigo, en el bolsillo, la pequeña gubia que le había regalado antes de despedirse, la misma que su propio padre le había dado a él.",
          "Meses después llegó una carta breve, sin muchos detalles sobre la vida al otro lado de la frontera, pero con una frase que Efraín leyó varias veces antes de guardarla en el cajón donde guardaba también las herramientas más antiguas del taller: -Aquí no hay madera que tallar, papá, pero cuando cierro los ojos, todavía sé exactamente cómo se hace."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "What decision does Marcos announce to his father?",
        "options": [
          "He wants to take over the workshop full-time",
          "He plans to leave for the United States to work construction with a cousin",
          "He wants to sell the unfinished carvings in the workshop",
          "He wants to enroll in an art school in the capital"
        ],
        "correctIndex": 1,
        "explanation": "The text says Marcos 'había decidido irse a Estados Unidos con un primo que ya llevaba allí dos años trabajando en la construcción' (had decided to go to the United States with a cousin already working construction there)."
      },
      {
        "type": "multiple-choice",
        "question": "Why does Marcos say he needs to leave, according to his own words?",
        "options": [
          "\"Aquí no hay trabajo\" — he says there's no work there and he doesn't know what he could offer future children if he stays",
          "He says he simply dislikes his father's trade",
          "He says the cofradía refused to pay his father fairly",
          "He says he wants adventure more than economic necessity"
        ],
        "correctIndex": 0,
        "explanation": "Marcos says: 'Si me quedo, no sé qué voy a poder ofrecerle a mis hijos... Aquí no hay trabajo, papá' (If I stay, I don't know what I'll be able to offer my children... There's no work here, dad)."
      },
      {
        "type": "multiple-choice",
        "question": "Why does Efraín ask Marcos to stay a few more weeks before leaving?",
        "options": [
          "He genuinely needs the extra hands and has no other motive",
          "The cofradía forbids Marcos from leaving before the carving is done",
          "Officially it's to help finish the carving, but really he wants more time with his son",
          "He hopes Marcos will change his mind about leaving entirely"
        ],
        "correctIndex": 2,
        "explanation": "The text says his excuse was needing help with delicate parts, 'aunque en realidad lo que quería era tener a su hijo cerca un poco más de tiempo' (though what he really wanted was to keep his son close a little longer)."
      },
      {
        "type": "multiple-choice",
        "question": "What does the closing letter from Marcos reveal?",
        "options": [
          "He has decided to return home immediately",
          "He has found a wood-carving workshop abroad",
          "He has no wood to carve there, but says he still remembers exactly how it's done",
          "He regrets learning the craft at all"
        ],
        "correctIndex": 2,
        "explanation": "Marcos writes: 'Aquí no hay madera que tallar, papá, pero cuando cierro los ojos, todavía sé exactamente cómo se hace' (There's no wood to carve here, dad, but when I close my eyes, I still know exactly how it's done) — the craft survives in memory even without the material."
      }
    ]
  },
  {
    "slug": "la-lonja-de-las-seis",
    "level": "B2",
    "number": 92,
    "title": "La lonja de las seis",
    "summary": "In a fading Asturian fishing village, an old auctioneer watches the ritual that structured his whole life lose its buyers one by one.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Cada mañana, a las seis en punto, Xosé abría la lonja de Luarca y esperaba a que los pocos barcos que aún salían a faenar regresaran con sus cajas de pescado. Llevaba cuarenta años cantando las pujas con la misma voz ronca y rápida que había heredado, según decía, de su propio padre, aunque cada vez eran menos los compradores que se acercaban a levantar la mano.",
          "El puerto había cambiado más en los últimos diez años que en los treinta anteriores. Un supermercado de la comarca había empezado a comprar directamente a un par de armadores grandes, sin pasar por la lonja, ofreciendo precios que Xosé no podía ni quería igualar, porque hacerlo habría significado renunciar al sistema de subasta que, según él, garantizaba un precio justo tanto para el pescador como para el comprador pequeño.",
          "Su hija Marina trabajaba de administrativa en Oviedo y volvía al pueblo solo los fines de semana, cuando el olor a salitre y a gasoil todavía la recibía como si nunca se hubiera ido. Un sábado, mientras ayudaba a su padre a ordenar las cajas vacías, le preguntó, con más delicadeza de la habitual, si no le parecía momento de jubilarse.",
          "-¿Y quién va a cantar la puja si me voy?- respondió Xosé, sin dejar de trabajar-. No es un trabajo que se aprenda en un curso. Se aprende aquí, con el frío entrando por la manga y el pescado todavía vivo delante.",
          "Marina sabía que ninguno de sus primos ni de los hijos de los pescadores del pueblo quería aprender el oficio; todos habían estudiado o se habían marchado a trabajar a otra cosa, convencidos de que la lonja no tenía futuro. Se lo dijo a su padre con cuidado, esperando que él ya lo supiera, y en efecto, Xosé asintió sin sorpresa, como quien confirma algo que lleva tiempo temiendo.",
          "-Lo sé desde hace años- admitió-. Pero mientras yo pueda abrir esa puerta a las seis, alguien va a poder vender su pescado sin que se lo compre un camión antes de que toque tierra. Eso, para mí, todavía vale la pena, aunque sea el último que lo haga.",
          "Aquel domingo, antes de volver a Oviedo, Marina se quedó a ver la subasta de la mañana por primera vez en años, de pie junto a la puerta, observando cómo su padre cantaba los precios con una energía que no correspondía a sus setenta años ni al puñado de compradores que quedaban. No dijo nada durante todo el proceso, pero cuando terminó, se acercó y le preguntó si podía enseñarle, aunque fuera solo los fines de semana, a llevar los números de las pujas.",
          "Xosé no le prometió que aquello salvaría la lonja, ni que ella se quedaría a hacerlo cuando él ya no pudiera. Pero por primera vez en mucho tiempo, cuando cerró la puerta esa mañana, no sintió que cerraba algo que iba a desaparecer sin dejar rastro."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "What is threatening the future of the fish auction (lonja) in Luarca?",
        "options": [
          "New fishing regulations from the government",
          "A supermarket buying directly from large boat owners, bypassing the auction",
          "A storm that destroyed the port infrastructure",
          "A lack of fish in the surrounding waters"
        ],
        "correctIndex": 1,
        "explanation": "The text explains a supermarket 'había empezado a comprar directamente a un par de armadores grandes, sin pasar por la lonja' (had begun buying directly from a couple of large boat owners, bypassing the auction house)."
      },
      {
        "type": "multiple-choice",
        "question": "Why does Xosé refuse to simply retire when Marina suggests it?",
        "options": [
          "He believes no one else could learn to auction properly and someone must keep the door open for small sellers",
          "He needs the income and has no pension",
          "He is legally obligated to keep working for another decade",
          "He doesn't trust Marina to take over the family finances"
        ],
        "correctIndex": 0,
        "explanation": "Xosé says: 'mientras yo pueda abrir esa puerta a las seis, alguien va a poder vender su pescado sin que se lo compre un camión antes de que toque tierra. Eso... todavía vale la pena' — he keeps the auction alive for the small sellers' sake."
      },
      {
        "type": "multiple-choice",
        "question": "What does Marina report to her father about the younger generation in the village?",
        "options": [
          "They are eager to learn the auctioneering trade",
          "None of her cousins or the fishermen's children want to learn the trade — they've all studied or left",
          "They want to unionize against the supermarket chain",
          "They are planning to buy the lonja from Xosé"
        ],
        "correctIndex": 1,
        "explanation": "The text states 'ninguno de sus primos ni de los hijos de los pescadores del pueblo quería aprender el oficio; todos habían estudiado o se habían marchado' (none of her cousins nor the fishermen's children wanted to learn the trade)."
      },
      {
        "type": "multiple-choice",
        "question": "How does the story end?",
        "options": [
          "Marina moves back permanently and takes over the lonja immediately",
          "The lonja closes for good after Xosé's final auction",
          "Marina asks to be taught the auction bookkeeping on weekends, and Xosé feels less alone in the work, though nothing is guaranteed",
          "Xosé sells the business to the supermarket chain"
        ],
        "correctIndex": 2,
        "explanation": "Marina asks 'si podía enseñarle, aunque fuera solo los fines de semana, a llevar los números de las pujas,' and though Xosé makes no promises, he no longer feels he's closing something doomed to vanish without a trace."
      }
    ]
  },
  {
    "slug": "los-titiriteros-de-siempre",
    "level": "B2",
    "number": 93,
    "title": "Los titiriteros de siempre",
    "summary": "A family of traveling puppeteers crosses the same small towns every summer, until the youngest daughter starts dreaming of a stage that doesn't move.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "La familia de Anselmo llevaba tres generaciones recorriendo los pueblos de la provincia de Teruel con la misma furgoneta destartalada, montando su pequeño teatrillo de títeres en las plazas mayores durante las fiestas patronales. Su hija Clara, de diecinueve años, había crecido entre bambalinas de tela y muñecos de madera tallados por su bisabuelo, y sabía manejar cada personaje del repertorio familiar antes de aprender a leer con fluidez.",
          "Aquel verano, sin embargo, Clara llevaba semanas callada durante los trayectos, mirando por la ventanilla los pueblos que se repetían casi idénticos entre sí: la misma plaza, el mismo tipo de público, los mismos aplausos amables de gente que ya conocía la función de memoria porque la habían visto crecer a ella, a su padre y a su abuelo antes que a su padre.",
          "-Me han admitido en la escuela de arte dramático de Zaragoza- le confesó a su padre una noche, mientras recogían el escenario después de la última función-. Empieza en septiembre.",
          "Anselmo no dijo nada durante un rato largo, ocupado en desmontar con cuidado excesivo una de las cortinas del teatrillo. Sabía que aquel momento llegaría tarde o temprano; lo que no sabía era cuánto le costaría, en realidad, escuchar la noticia en voz alta, aunque llevara meses temiéndola en silencio.",
          "-¿Y qué va a pasar con la función, si tú no estás?- preguntó finalmente, tratando de que no sonara como un reproche, aunque los dos sabían que lo era, al menos un poco.",
          "-La función va a seguir existiendo aunque yo no esté en la furgoneta- respondió Clara, con más firmeza de la que esperaba tener-. Pero yo necesito aprender otras cosas, papá. No quiero dejar los títeres. Quiero aprender a dirigir, a escribir para el teatro de verdad, y después, si quiero, volver a esto con algo nuevo que ofrecer.",
          "Anselmo no supo si creerle del todo, pero algo en la seguridad con la que hablaba le recordó a sí mismo, treinta años atrás, cuando había insistido ante su propio padre en cambiar el repertorio clásico por historias que él mismo escribía, contra la opinión de todo el pueblo que los veía actuar.",
          "El último día del verano, antes de que Clara tomara el autobús a Zaragoza, la familia montó una función más, esta vez solo para ellos, en el patio trasero de la casa. Clara manejó, por última vez en mucho tiempo, al títere más antiguo de la familia, el que había tallado su bisabuelo, y cuando terminó, se lo entregó a su hermano pequeño, que apenas sabía sujetar los hilos.",
          "-Cuídalo tú ahora- le dijo, y por la forma en que lo dijo, Anselmo entendió que su hija no se estaba despidiendo de los títeres, sino simplemente aprendiendo, a su manera, a llevarlos consigo sin necesidad de la furgoneta."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "What has Clara's family been doing for three generations?",
        "options": [
          "Running a traveling puppet theater through towns in Teruel province",
          "Selling wooden crafts at regional markets",
          "Managing a permanent theater in Zaragoza",
          "Touring as musicians during local festivals"
        ],
        "correctIndex": 0,
        "explanation": "The story opens: 'La familia de Anselmo llevaba tres generaciones recorriendo los pueblos de la provincia de Teruel... montando su pequeño teatrillo de títeres' (the family had spent three generations touring Teruel's towns setting up their small puppet theater)."
      },
      {
        "type": "multiple-choice",
        "question": "What news does Clara give her father?",
        "options": [
          "She has been accepted into a drama school in Zaragoza starting in September",
          "She wants to sell the family's puppets to a museum",
          "She is getting married and leaving the family business",
          "She wants to permanently retire the puppet show"
        ],
        "correctIndex": 0,
        "explanation": "Clara says: 'Me han admitido en la escuela de arte dramático de Zaragoza... Empieza en septiembre' (I've been admitted to the drama school in Zaragoza... It starts in September)."
      },
      {
        "type": "multiple-choice",
        "question": "How does Clara explain her decision to her father?",
        "options": [
          "She says she hates puppetry and wants nothing more to do with it",
          "She says she wants to learn directing and writing, and perhaps return later with something new to offer",
          "She says her father forced her to stay too long already",
          "She says the family business is losing money and must close"
        ],
        "correctIndex": 1,
        "explanation": "Clara says: 'yo necesito aprender otras cosas... Quiero aprender a dirigir, a escribir para el teatro de verdad, y después, si quiero, volver a esto con algo nuevo que ofrecer.'"
      },
      {
        "type": "multiple-choice",
        "question": "What does Clara do on her last night before leaving, and what does it suggest?",
        "options": [
          "She burns the old puppets in a symbolic break with the past",
          "She hands the family's oldest puppet to her younger brother, suggesting she is passing on the tradition rather than abandoning it",
          "She sells the puppet theater equipment to another family",
          "She refuses to perform one last time, upset with her father"
        ],
        "correctIndex": 1,
        "explanation": "Clara gives her brother the great-grandfather's puppet saying 'Cuídalo tú ahora,' and Anselmo understands 'que su hija no se estaba despidiendo de los títeres, sino simplemente aprendiendo... a llevarlos consigo' — she's continuing the tradition, not ending it."
      }
    ]
  },
  {
    "slug": "la-posada-del-cruce",
    "level": "B2",
    "number": 94,
    "title": "La posada del cruce",
    "summary": "When a new highway routes travelers around her mountain inn, a recent widow must decide whether the place still has a reason to exist.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Teresa llevaba treinta y un años al frente de la posada del cruce, en pleno Pirineo oscense, un negocio que había levantado junto a su marido Ramón desde que ambos eran apenas dos jóvenes sin nada más que un edificio medio derruido y demasiadas ganas de quedarse en el pueblo. Ramón había muerto en invierno, tras una enfermedad que ninguno de los dos había querido nombrar en voz alta hasta que ya no quedaba otra opción, y desde entonces Teresa gestionaba sola las pocas habitaciones que todavía se alquilaban.",
          "El golpe definitivo llegó en primavera, cuando terminaron de construir la nueva autovía que rodeaba el pueblo por el norte, ahorrando a los conductores casi cuarenta minutos de curvas de montaña. De la noche a la mañana, el cruce donde se levantaba la posada dejó de ser un paso obligado y se convirtió en un desvío que casi nadie tomaba ya.",
          "Su hijo Óscar, que vivía en Zaragoza y trabajaba en el sector turístico, le propuso reconvertir la posada en un alojamiento de turismo rural de lujo, con spa y cocina de autor, algo que, según sus cálculos, podría atraer a un público completamente distinto y más dispuesto a pagar. Traía consigo un proyecto detallado, con planos y presupuestos, convencido de que era la única forma de salvar el negocio.",
          "-No sé si quiero que esto se convierta en otra cosa- le dijo Teresa, mirando los planos sin verlos realmente-. Esto es lo que hicimos tu padre y yo. Si lo cambio tanto, no sé si seguiría siendo nuestro.",
          "Óscar insistió, con la paciencia de quien ya ha discutido lo mismo varias veces, en que si no cambiaba nada, la posada terminaría cerrando en menos de dos años, y entonces no habría ni turismo rural ni recuerdo de su padre, solo un edificio vacío pudriéndose junto a una carretera que ya nadie usaba. Teresa sabía que tenía razón, al menos en parte, pero no conseguía imaginarse sirviendo menús de autor en el mismo comedor donde Ramón había cocinado durante treinta años un cocido que no necesitaba presentación.",
          "Pasó el verano dándole vueltas al asunto, atendiendo a los pocos huéspedes que todavía llegaban, casi siempre gente mayor que recordaba la posada de otros tiempos y que se sorprendía, casi con alivio, de encontrarla igual que siempre. Una de esas huéspedes, una mujer de Barcelona que había parado allí de joven con su propio marido, ya fallecido, le dijo una noche que no cambiara nada, que en un mundo que se movía tan rápido, encontrar un lugar exactamente igual a como lo recordaba valía más de lo que Teresa imaginaba.",
          "Aquella conversación no resolvió el problema del dinero, ni convenció del todo a Óscar, pero le dio a Teresa una idea que no era ni la suya original ni la de su hijo: mantendría la posada tal como era, sin spa ni cocina de autor, pero empezaría a anunciarla, con ayuda de Óscar, como lo que realmente ofrecía, un lugar detenido en el tiempo, para quienes buscaran exactamente eso.",
          "No sabía si funcionaría, y se lo dijo a su hijo con toda sinceridad la noche en que llegaron a ese acuerdo a medias. Pero cuando, semanas después, una pareja joven llegó preguntando específicamente por la posada que no había cambiado en treinta años, Teresa sintió, por primera vez desde el entierro de Ramón, que quizás no estaba sola defendiendo algo condenado a desaparecer."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "What recent event has changed Teresa's life before the story's central conflict?",
        "options": [
          "She got divorced from her husband Ramón",
          "Her husband Ramón died over the winter after an illness",
          "She sold half the inn to a business partner",
          "Her son Óscar moved back to help her run the inn"
        ],
        "correctIndex": 1,
        "explanation": "The text states 'Ramón había muerto en invierno, tras una enfermedad que ninguno de los dos había querido nombrar en voz alta' (Ramón had died in winter after an illness neither of them had wanted to name aloud)."
      },
      {
        "type": "multiple-choice",
        "question": "What practical problem threatens the inn's survival?",
        "options": [
          "A fire damaged half the building",
          "The town council raised property taxes drastically",
          "A new highway now bypasses the town, diverting almost all traffic away from the inn",
          "A competing inn opened right across the street"
        ],
        "correctIndex": 2,
        "explanation": "The text explains that the new autovía 'rodeaba el pueblo por el norte, ahorrando a los conductores casi cuarenta minutos' and the crossroads 'dejó de ser un paso obligado' — the inn lost nearly all its passing traffic."
      },
      {
        "type": "multiple-choice",
        "question": "What does the guest from Barcelona tell Teresa that shifts her thinking?",
        "options": [
          "She should sell the inn and retire",
          "She should modernize faster than her son suggests",
          "She should not change anything, because finding a place unchanged from memory is valuable",
          "She should relocate the inn closer to the new highway"
        ],
        "correctIndex": 2,
        "explanation": "The guest tells her 'que no cambiara nada, que en un mundo que se movía tan rápido, encontrar un lugar exactamente igual a como lo recordaba valía más de lo que Teresa imaginaba.'"
      },
      {
        "type": "multiple-choice",
        "question": "What compromise does Teresa reach by the end of the story?",
        "options": [
          "She fully adopts her son's luxury spa plan",
          "She closes the inn permanently",
          "She keeps the inn essentially unchanged, but markets it, with Óscar's help, precisely as an unchanged place frozen in time",
          "She sells the inn to the woman from Barcelona"
        ],
        "correctIndex": 2,
        "explanation": "Teresa decides to keep the inn 'tal como era, sin spa ni cocina de autor,' but advertise it 'como lo que realmente ofrecía, un lugar detenido en el tiempo' — a middle path between her original plan and her son's."
      }
    ]
  },
  {
    "slug": "la-trashumancia-de-don-silvestre",
    "level": "B2",
    "number": 95,
    "title": "La trashumancia de don Silvestre",
    "summary": "An old shepherd's daughter insists on walking the ancestral route with the flock, though the whole valley assumes it isn't a woman's place.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Don Silvestre llevaba haciendo la trashumancia desde los ocho años, cuando su padre lo subió por primera vez a la cañada que unía los pastos de Soria con las dehesas de Extremadura, un recorrido de casi seiscientos kilómetros que la familia repetía cada primavera y cada otoño desde hacía casi un siglo. De sus cuatro hijos, solo Águeda, la menor, había mostrado verdadero interés por continuar con el oficio, algo que Silvestre nunca supo del todo si celebrar o lamentar.",
          "-No es un trabajo para una mujer sola, ir meses por el monte- le había dicho más de una vez algún vecino, sin que Águeda se molestara siquiera en responder, acostumbrada ya a que en el pueblo opinaran sobre su vida con más soltura de la que nadie pedía. Su padre nunca repitió esas palabras delante de ella, aunque Águeda sospechaba que, en el fondo, compartía al menos parte de la misma preocupación.",
          "Aquel año, sin embargo, la salud de Silvestre no le permitía hacer el recorrido completo, y por primera vez en la historia de la familia, alguien más tendría que liderar la trashumancia de principio a fin. Los otros tres hijos, instalados desde hacía años en Madrid y en Zaragoza, no mostraron el más mínimo interés en asumir el reto, ni siquiera por una sola temporada.",
          "-Si tú no puedes ir, iré yo sola- le dijo Águeda a su padre una noche, con una determinación que no dejaba lugar a discusión-. Llevo quince años aprendiendo esto contigo. No pienso dejar que se pierda solo porque nadie más quiera hacerlo, o porque a alguien le parezca raro que lo haga una mujer.",
          "Silvestre pasó varios días dándole vueltas antes de aceptar, no porque dudara de la capacidad de su hija, que conocía cada tramo del camino tan bien como él mismo, sino porque temía lo que el resto del pueblo -y sobre todo los otros pastores con quienes coincidiría en el camino- pudiera decir o hacer. Águeda, sin embargo, ya había tomado la decisión mucho antes de pedirle permiso.",
          "El día de la partida, mientras Águeda organizaba el rebaño con la ayuda de dos perros pastores y un mulo cargado con las provisiones para semanas, varios vecinos se acercaron a mirar, algunos con curiosidad genuina y otros con un escepticismo apenas disimulado. Silvestre, que se había levantado a pesar de la debilidad para despedirla, no dijo gran cosa, pero le entregó el cayado que había usado durante cuarenta años, uno que nunca antes había prestado a nadie.",
          "El viaje duró veintidós días, y durante ese tiempo Águeda durmió al raso, cruzó ríos crecidos, negoció el paso del ganado con guardas forestales que no esperaban encontrarse con una mujer al mando, y llegó, finalmente, a las dehesas extremeñas con el rebaño casi completo, habiendo perdido solo dos cabezas por el camino, una cifra mejor de lo que su propio padre solía conseguir en sus mejores años.",
          "Cuando llamó a su padre desde el pueblo más cercano para contarle que habían llegado, Silvestre no dijo mucho al principio; solo hubo un silencio largo al otro lado de la línea. -Ya sabía yo que ibas a llegar- dijo finalmente, con la voz algo quebrada-. Lo que no sabía es que ibas a llegar mejor que yo."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "What tradition has Silvestre's family practiced for nearly a century?",
        "options": [
          "Olive harvesting between two regions",
          "Transhumance — moving livestock nearly 600 km between pastures in Soria and Extremadura each season",
          "A pilgrimage route connecting two cathedrals",
          "Seasonal fishing along a river route"
        ],
        "correctIndex": 1,
        "explanation": "The text describes 'la cañada que unía los pastos de Soria con las dehesas de Extremadura, un recorrido de casi seiscientos kilómetros que la familia repetía cada primavera y cada otoño desde hacía casi un siglo.'"
      },
      {
        "type": "multiple-choice",
        "question": "What do some neighbors say about Águeda continuing the tradition?",
        "options": [
          "That she lacks the physical strength required",
          "That it isn't a job for a woman alone in the mountains for months",
          "That she should study instead of working with animals",
          "That the tradition should end regardless of who continues it"
        ],
        "correctIndex": 1,
        "explanation": "A neighbor says: 'No es un trabajo para una mujer sola, ir meses por el monte' (It's not a job for a woman alone, going months into the mountains)."
      },
      {
        "type": "multiple-choice",
        "question": "Why does Silvestre hesitate before letting Águeda lead the transhumance alone?",
        "options": [
          "He doubts she knows the route well enough",
          "He fears what other shepherds and the village might say or do, not her actual competence",
          "He has already promised the task to one of his other children",
          "He believes the tradition should simply end with him"
        ],
        "correctIndex": 1,
        "explanation": "The text clarifies: 'no porque dudara de la capacidad de su hija... sino porque temía lo que el resto del pueblo... pudiera decir o hacer' (not because he doubted his daughter's ability, but because he feared what the rest of the village might say or do)."
      },
      {
        "type": "multiple-choice",
        "question": "How does the journey conclude, and what does Silvestre say when Águeda calls?",
        "options": [
          "She fails to complete the route and returns home early",
          "She arrives with nearly the whole flock intact and Silvestre tells her she arrived even better than he used to",
          "She arrives but refuses to speak to her father afterward",
          "She decides never to do the trashumancia again"
        ],
        "correctIndex": 1,
        "explanation": "Águeda arrives 'con el rebaño casi completo, habiendo perdido solo dos cabezas,' and Silvestre says: 'Ya sabía yo que ibas a llegar... Lo que no sabía es que ibas a llegar mejor que yo.'"
      }
    ]
  },
  {
    "slug": "los-azulejos-de-la-casa-azul",
    "level": "B2",
    "number": 96,
    "title": "Los azulejos de la casa azul",
    "summary": "An aging ceramic painter in Puebla agrees to restore a crumbling colonial facade for far less than it's worth, and finds she isn't only rescuing tiles.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Doña Pilar llevaba pintando talavera poblana desde los doce años, cuando su tía la sentó por primera vez frente a un plato sin decorar y le enseñó a mezclar los pigmentos hasta obtener ese azul cobalto tan característico de los azulejos de Puebla. A sus setenta y un años, era una de las últimas maestras ceramistas que todavía trabajaba con los métodos tradicionales, sin moldes industriales ni pintura sintética, algo que cada vez menos talleres de la ciudad se molestaban en respetar.",
          "Una pareja joven, recién llegada de la Ciudad de México, había comprado una casa colonial en el centro histórico con la fachada de azulejos completamente deteriorada, y tras semanas buscando quién pudiera restaurarla de manera auténtica, alguien les dio el nombre de Doña Pilar. Cuando la visitaron en su taller, ella les explicó, sin rodeos, que el trabajo llevaría meses y que el resultado nunca sería idéntico a los azulejos originales del siglo dieciocho, sino un diálogo entre lo antiguo y lo que sus propias manos pudieran ofrecer ahora.",
          "-Si buscan algo perfecto, mejor compren azulejo industrial- les dijo, con una franqueza que a la pareja le pareció, al principio, casi brusca-. Si quieren algo vivo, que respire un poco de historia, entonces hablemos.",
          "El presupuesto que la pareja podía ofrecer era considerablemente menor de lo que un trabajo de esa envergadura habría costado en cualquier taller comercial, y Doña Pilar lo sabía. Aun así, aceptó el encargo, en parte porque la casa le recordaba a otra que había restaurado de joven, y en parte porque llevaba tiempo buscando una excusa para tomar como aprendiz a Iván, un muchacho del barrio que rondaba su taller desde hacía meses sin atreverse a pedirle formalmente que le enseñara.",
          "Durante los meses siguientes, Iván aprendió a mezclar el esmalte, a trazar los patrones geométricos con pulso firme, y sobre todo a tener la paciencia necesaria para que cada azulejo se secara y se cociera sin prisa, algo que, según Doña Pilar, era la parte del oficio que nadie quería aprender de verdad porque no podía enseñarse con palabras.",
          "-Si tuviéramos que terminar esto rápido, no valdría la pena hacerlo- le repetía cada vez que Iván se impacientaba-. Lo que se hace deprisa se nota, y lo que se nota deprisa no dura cien años como estos azulejos que estamos copiando.",
          "Cuando finalmente terminaron la fachada, casi ocho meses después de haber empezado, la pareja quedó tan conforme con el resultado que le ofrecieron a Doña Pilar pagarle un extra, más allá del presupuesto acordado. Ella lo rechazó, y en cambio les pidió algo distinto: que le permitieran usar, de manera gratuita, un pequeño local vacío que tenían en la planta baja de la casa, para que Iván pudiera instalar allí, algún día, su propio taller.",
          "La pareja aceptó sin dudarlo, y aunque Doña Pilar sabía que no viviría para ver todo lo que Iván llegara a hacer con aquel espacio, sintió, viendo la fachada terminada bajo el sol de la tarde, que había dejado algo detrás de sí que valía mucho más que cualquier pago adicional."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "What makes Doña Pilar one of the last true masters of her craft?",
        "options": [
          "She is the only person left who knows the historical dates of Puebla's ceramics",
          "She still works with traditional methods, without industrial molds or synthetic paint",
          "She owns the largest ceramics factory in the city",
          "She trained abroad in European ceramic techniques"
        ],
        "correctIndex": 1,
        "explanation": "She is described as working 'sin moldes industriales ni pintura sintética, algo que cada vez menos talleres de la ciudad se molestaban en respetar' (without industrial molds or synthetic paint, something fewer and fewer workshops bothered to respect)."
      },
      {
        "type": "multiple-choice",
        "question": "What does Doña Pilar tell the young couple when they first ask her to restore their facade?",
        "options": [
          "That the restoration will look identical to the eighteenth-century original",
          "That they should buy industrial tile if they want something perfect, but if they want something alive with history, they should talk",
          "That she refuses the job because the budget is too low",
          "That the work can be finished within two weeks"
        ],
        "correctIndex": 1,
        "explanation": "She says: 'Si buscan algo perfecto, mejor compren azulejo industrial... Si quieren algo vivo, que respire un poco de historia, entonces hablemos.'"
      },
      {
        "type": "multiple-choice",
        "question": "Why does Doña Pilar accept the job despite the low budget?",
        "options": [
          "She needs the money desperately and has no other clients",
          "The house reminds her of one she restored when young, and she wants an excuse to take on Iván as an apprentice",
          "The couple threatened to report her to authorities otherwise",
          "She was legally required to accept the commission"
        ],
        "correctIndex": 1,
        "explanation": "The text explains she accepted 'en parte porque la casa le recordaba a otra que había restaurado de joven, y en parte porque llevaba tiempo buscando una excusa para tomar como aprendiz a Iván.'"
      },
      {
        "type": "multiple-choice",
        "question": "What does Doña Pilar ask for instead of the extra payment the couple offers?",
        "options": [
          "A share of ownership in the house",
          "Free use of an empty ground-floor space so Iván can eventually set up his own workshop there",
          "A written recommendation letter for future clients",
          "Payment in the form of imported ceramic tools"
        ],
        "correctIndex": 1,
        "explanation": "She asks 'que le permitieran usar, de manera gratuita, un pequeño local vacío que tenían en la planta baja de la casa, para que Iván pudiera instalar allí, algún día, su propio taller.'"
      }
    ]
  },
  {
    "slug": "el-huerto-de-la-abuela-amparo",
    "level": "B2",
    "number": 97,
    "title": "El huerto de la abuela Amparo",
    "summary": "Inheriting her grandmother's crumbling house and a notebook of recipes, a woman must decide between the money she desperately needs and a garden that refuses to be forgotten.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Cuando murió la abuela Amparo, dejó a su nieta Clara la casa de piedra en las afueras de Sóller, con su pequeño huerto de higueras y almendros, y un cuaderno de tapas gastadas donde había anotado, durante más de cincuenta años, recetas que nunca había compartido con nadie fuera de la familia. Clara, que vivía en Palma con un sueldo que apenas le alcanzaba para el alquiler, recibió la noticia con una mezcla de tristeza y, para su propia vergüenza, un cálculo casi inmediato sobre cuánto podría valer aquel terreno si lo vendía a alguna promotora interesada en construir apartamentos turísticos.",
          "Un agente inmobiliario, avisado casi antes que el propio párroco del funeral, le hizo una oferta apenas dos semanas después: una cifra que, según él, no se repetiría, y que a Clara le habría permitido saldar buena parte de sus deudas y quizás, por fin, dejar de contar los días hasta el próximo sueldo.",
          "-Si vendiera, tendría un problema menos- se repitió varias veces mientras revisaba los papeles, casi como si necesitara convencerse a sí misma de que aquello era, en efecto, lo razonable.",
          "Antes de firmar nada, sin embargo, decidió pasar un fin de semana en la casa para ordenar las pertenencias de su abuela, algo que había estado posponiendo desde el entierro. Fue entonces cuando encontró el cuaderno, escondido entre paños de cocina, con recetas escritas en una letra apretada y cariñosa: la mermelada de higos que hacían cada agosto, el pan de algarroba que Amparo horneaba para las fiestas, indicaciones tan precisas sobre el punto exacto de cada fruta que parecían escritas para alguien que aún no había nacido cuando Amparo las anotó.",
          "Clara pasó esa noche despierta, releyendo el cuaderno bajo la luz de una lámpara de mesa, y a la mañana siguiente salió al huerto por primera vez desde niña. Los árboles, descuidados desde hacía meses, todavía daban fruta, como si no supieran que su dueña ya no volvería a recogerla; Clara llenó una cesta entera de higos casi sin darse cuenta de lo que estaba haciendo.",
          "-Si vendiera esto, no habría cuaderno que valiera nada- pensó, sosteniendo la cesta contra el pecho-. Las recetas están escritas para esta tierra, para estos árboles. En cualquier otro sitio, no serían más que palabras.",
          "No fue una decisión fácil, ni la tomó de un día para otro. Durante semanas, siguió comparando cifras, calculando lo que ganaría y lo que perdería, preguntándose si no estaba dejándose llevar por un sentimentalismo que no podía permitirse. Pero cada vez que se imaginaba la casa convertida en apartamentos, con los árboles talados para dejar sitio a una piscina, sentía una pérdida que ningún número en un contrato lograba compensar.",
          "Finalmente rechazó la oferta, aunque eso significara seguir contando los días hasta cada sueldo un poco más de tiempo. Empezó a subir a Sóller cada fin de semana, primero para ordenar el huerto, después para reparar el tejado con la ayuda de un vecino, y aquel agosto, por primera vez desde la muerte de su abuela, hizo mermelada de higos siguiendo la receta del cuaderno, palabra por palabra, hasta que la cocina entera olió exactamente como recordaba de niña."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "What did Clara inherit from her grandmother Amparo?",
        "options": [
          "A large sum of money in a savings account",
          "A stone house with a small orchard and a handwritten notebook of recipes",
          "A jewelry collection and a car",
          "A bookshop in the town center"
        ],
        "correctIndex": 1,
        "explanation": "Amparo left Clara 'la casa de piedra en las afueras de Sóller, con su pequeño huerto de higueras y almendros, y un cuaderno de tapas gastadas' with fifty years of family recipes."
      },
      {
        "type": "multiple-choice",
        "question": "What tempts Clara to sell the property?",
        "options": [
          "A real estate agent offers a large sum that could pay off much of her debt",
          "Her landlord in Palma threatens to raise her rent",
          "A cousin insists the property legally belongs to someone else",
          "The house is condemned by the local council"
        ],
        "correctIndex": 0,
        "explanation": "A real estate agent offers her 'una cifra que, según él, no se repetiría, y que a Clara le habría permitido saldar buena parte de sus deudas.'"
      },
      {
        "type": "multiple-choice",
        "question": "What realization does Clara have after finding the recipe notebook and visiting the orchard?",
        "options": [
          "That the recipes could be sold separately for a large profit",
          "That the recipes only make sense tied to this specific land and these specific trees",
          "That she should turn the house into a restaurant immediately",
          "That her grandmother had actually wanted her to sell"
        ],
        "correctIndex": 1,
        "explanation": "Clara thinks: 'Si vendiera esto, no habría cuaderno que valiera nada... Las recetas están escritas para esta tierra, para estos árboles. En cualquier otro sitio, no serían más que palabras.'"
      },
      {
        "type": "multiple-choice",
        "question": "How does the story conclude?",
        "options": [
          "Clara accepts the offer and moves back to Palma permanently",
          "Clara rejects the offer, keeps visiting on weekends, and eventually makes fig jam using her grandmother's recipe",
          "Clara sells the house but keeps the notebook for herself",
          "The house is destroyed by a fire before Clara can decide"
        ],
        "correctIndex": 1,
        "explanation": "The final paragraph says she 'rechazó la oferta' and that August 'hizo mermelada de higos siguiendo la receta del cuaderno, palabra por palabra, hasta que la cocina entera olió exactamente como recordaba de niña.'"
      }
    ]
  },
  {
    "slug": "el-luthier-de-paracho",
    "level": "B2",
    "number": 98,
    "title": "El luthier de Paracho",
    "summary": "In a Michoacán town famous for its guitars, an old maker's niece becomes his apprentice, though the trade has never before belonged to a woman there.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "En Paracho, donde según se dice hay más talleres de guitarras que en cualquier otro pueblo de México, Don Herminio llevaba fabricando instrumentos desde que tenía memoria, siguiendo un oficio que había pasado de padre a hijo durante cuatro generaciones. No tuvo hijos varones, solo dos hijas que se habían mudado hacía años a Guadalajara sin mostrar jamás interés alguno por la madera ni por el barniz, así que asumía, sin demasiada tristeza, que el taller se cerraría cuando él ya no pudiera sostener una gubia.",
          "Su sobrina Ximena, hija de un hermano que trabajaba en el campo, empezó a aparecer por el taller cuando tenía apenas doce años, primero solo para observar, después para barrer las virutas de madera, y finalmente, casi sin que Don Herminio se diera cuenta del momento exacto en que había ocurrido, para hacer preguntas cada vez más precisas sobre por qué se elegía cierta madera para la tapa y otra distinta para el fondo.",
          "-Aquí nunca ha trabajado una mujer en la construcción de guitarras- le comentó un vecino a Don Herminio, cuando Ximena ya llevaba dos años ayudando de manera constante, con un tono que pretendía ser una simple observación pero que sonaba, en realidad, como una objeción disimulada.",
          "-Pues entonces será la primera- respondió Don Herminio, sin levantar la vista del diapasón que estaba puliendo, cerrando así, sin más explicaciones, cualquier conversación posterior sobre el asunto.",
          "Ximena, que había escuchado el comentario desde el otro extremo del taller, no dijo nada en ese momento, pero aquella noche, en casa, decidió que algún día construiría una guitarra completamente sola, de principio a fin, para que nadie pudiera decir que solo ayudaba, sino que ella también sabía hacerlo.",
          "Pasaron cuatro años más de aprendizaje antes de que Don Herminio, ya con las manos considerablemente más lentas que antes, le propusiera precisamente eso: que construyera su primera guitarra completa, desde la elección de la madera hasta el encordado final, con él únicamente observando y corrigiendo cuando fuera estrictamente necesario.",
          "El proceso le llevó a Ximena casi tres meses, mucho más tiempo del que Don Herminio habría necesitado en sus mejores años, pero cuando finalmente afinó las seis cuerdas y tocó los primeros acordes, el sonido que salió del cuerpo de la guitarra tenía una calidad que hasta el propio Don Herminio, exigente como era, no pudo más que reconocer en silencio.",
          "La guitarra se vendió meses después a un músico de Morelia que nunca supo, ni preguntó, quién la había construido; para Ximena, sin embargo, aquello no importaba tanto como debería haber importado. Lo que de verdad le importaba era que, en el pueblo entero, ya nadie decía que ella solo ayudaba en el taller de su tío, sino que hablaban de ella, con la misma naturalidad con la que hablaban de cualquier otro luthier, simplemente como la muchacha que hacía guitarras."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "Why does Don Herminio initially assume his workshop will close when he can no longer work?",
        "options": [
          "He has no savings to pass the business on",
          "His daughters moved away and showed no interest in the trade, and he had no sons",
          "The town council plans to close all traditional workshops",
          "He never trained anyone in the craft on purpose"
        ],
        "correctIndex": 1,
        "explanation": "The text notes his daughters 'se habían mudado hacía años a Guadalajara sin mostrar jamás interés alguno por la madera ni por el barniz,' and he had no sons, so he assumed the workshop would simply close."
      },
      {
        "type": "multiple-choice",
        "question": "How does Don Herminio respond to the neighbor's comment that no woman has ever built guitars there?",
        "options": [
          "He agrees and asks Ximena to stop helping",
          "He says 'Pues entonces será la primera' (Then she'll be the first) and ends the conversation",
          "He apologizes to the neighbor for allowing her to help",
          "He remains silent and avoids the topic entirely"
        ],
        "correctIndex": 1,
        "explanation": "Don Herminio replies simply: 'Pues entonces será la primera,' closing off any further discussion of the matter."
      },
      {
        "type": "multiple-choice",
        "question": "What decision does Ximena make after overhearing the neighbor's remark?",
        "options": [
          "She decides to quit the workshop out of frustration",
          "She resolves to one day build a complete guitar entirely on her own",
          "She asks her uncle to fire the neighbor",
          "She decides to move to Guadalajara like her cousins"
        ],
        "correctIndex": 1,
        "explanation": "The text says she decided 'que algún día construiría una guitarra completamente sola, de principio a fin, para que nadie pudiera decir que solo ayudaba.'"
      },
      {
        "type": "multiple-choice",
        "question": "What does Ximena find most meaningful about the story's outcome?",
        "options": [
          "The high price the guitar sold for in Morelia",
          "That the musician who bought it wrote her a personal thank-you note",
          "That the town now speaks of her simply as a guitar-maker, like any other luthier, rather than as someone who merely helps",
          "That her uncle finally admitted she was better than him"
        ],
        "correctIndex": 2,
        "explanation": "The final line says what mattered was that people in town 'hablaban de ella, con la misma naturalidad con la que hablaban de cualquier otro luthier, simplemente como la muchacha que hacía guitarras.'"
      }
    ]
  },
  {
    "slug": "el-turron-de-los-marin",
    "level": "B2",
    "number": 99,
    "title": "El turrón de los Marín",
    "summary": "Two brothers who inherited their father's turrón workshop in Jijona must decide whether a supermarket contract would save the business or hollow it out.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "La fábrica de turrón de los Marín, en Jijona, llevaba funcionando desde 1952, cuando el abuelo de Ramón y Vicente empezó a tostar almendras en un cobertizo detrás de su casa. Los dos hermanos habían heredado el negocio hacía ocho años, tras la muerte de su padre, y desde entonces lo habían mantenido a flote gracias sobre todo a los pedidos de clientes fieles que llevaban comprando el mismo turrón blando desde hacía décadas.",
          "Aquel otoño, sin embargo, una cadena de supermercados de ámbito nacional les propuso un contrato que multiplicaría por diez su producción anual: distribución en cientos de tiendas por todo el país, a cambio de que adaptaran la receta para abaratar costes y de que renunciaran, al menos en parte, al proceso artesanal de tueste y mezcla que la familia había mantenido durante setenta años.",
          "-Es la oportunidad que llevamos esperando desde que murió papá- argumentó Vicente, extendiendo el contrato sobre la mesa del despacho-. Con esto, no tendríamos que preocuparnos nunca más por si un mal año de ventas nos obliga a cerrar.",
          "Ramón, el mayor, no compartía el entusiasmo de su hermano. Había pasado toda su vida junto a las calderas de cobre donde se cocinaba la miel, y sabía, con la certeza de quien lo ha hecho miles de veces, que el turrón que exigía el supermercado -más barato, más rápido de producir, con menos almendra y más azúcar- no sería, en ningún sentido honesto, el mismo turrón que su padre y su abuelo habían perfeccionado durante décadas.",
          "-Si firmamos esto, dejaríamos de ser los Marín para convertirnos en una marca cualquiera con nuestro apellido pegado encima- respondió Ramón, sin levantar la voz, aunque la tensión resultaba evidente en cada palabra-. Y no sé si eso es algo que podría perdonarme.",
          "Durante semanas, los hermanos discutieron el asunto casi a diario, repasando números, calculando riesgos, y evitando, en la medida de lo posible, que la disputa se convirtiera en algo personal, aunque no siempre lo consiguieron. Vicente insistía en que la lealtad de los clientes fieles no bastaría para pagar las facturas indefinidamente; Ramón insistía en que sin esa lealtad, ya no tendrían nada que de verdad valiera la pena vender.",
          "La solución que finalmente adoptaron no satisfizo del todo a ninguno de los dos, pero les permitió seguir hablándose sin resentimiento: rechazaron el contrato del supermercado, pero aceptaron un préstamo bancario para abrir una pequeña tienda online que les permitiera vender directamente, sin intermediarios, a clientes de toda España dispuestos a pagar un poco más por el turrón hecho exactamente como siempre se había hecho.",
          "El primer año no generó las ganancias que el contrato del supermercado habría garantizado, y hubo meses en que ambos hermanos se preguntaron en silencio si habían tomado la decisión correcta. Pero aquella Navidad, cuando llegó un pedido especial de un cliente que llevaba treinta años comprando el mismo turrón que compraba su padre, y que ahora se lo enviaba a su propia hija estudiando en el extranjero, Ramón sintió que, ganaran lo que ganaran ese año, seguían siendo, al menos, exactamente quienes querían ser."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "What offer creates the central conflict between the two brothers?",
        "options": [
          "A supermarket chain offers a contract that would multiply production tenfold but require cheapening the recipe",
          "A foreign investor offers to buy the entire business outright",
          "A rival turrón maker offers to merge companies",
          "A bank threatens to foreclose on the workshop"
        ],
        "correctIndex": 0,
        "explanation": "The supermarket chain proposes a contract that would multiply annual production tenfold 'a cambio de que adaptaran la receta para abaratar costes y de que renunciaran... al proceso artesanal.'"
      },
      {
        "type": "multiple-choice",
        "question": "What is Ramón's main objection to the supermarket contract?",
        "options": [
          "He worries the supermarket would pay too slowly",
          "He believes the cheaper turrón wouldn't honestly be the same product his father and grandfather perfected",
          "He simply dislikes his brother's business ideas on principle",
          "He fears losing control of the family name legally"
        ],
        "correctIndex": 1,
        "explanation": "Ramón says: 'Si firmamos esto, dejaríamos de ser los Marín para convertirnos en una marca cualquiera con nuestro apellido pegado encima' — he fears losing what actually makes the turrón theirs."
      },
      {
        "type": "multiple-choice",
        "question": "What compromise do the brothers reach?",
        "options": [
          "They accept the supermarket contract but keep a small artisanal side production",
          "They reject the supermarket contract and take a bank loan to open an online shop selling directly to loyal customers",
          "They sell the business entirely and retire",
          "They split the company into two separate businesses"
        ],
        "correctIndex": 1,
        "explanation": "They 'rechazaron el contrato del supermercado, pero aceptaron un préstamo bancario para abrir una pequeña tienda online que les permitiera vender directamente... a clientes... dispuestos a pagar un poco más.'"
      },
      {
        "type": "multiple-choice",
        "question": "What moment reassures Ramón that they made the right choice?",
        "options": [
          "The business becomes wildly profitable within the first year",
          "A loyal customer of thirty years orders the same turrón to send to his daughter studying abroad",
          "A newspaper writes a flattering article about the family",
          "Vicente admits he was wrong about everything"
        ],
        "correctIndex": 1,
        "explanation": "The story ends with a customer who 'llevaba treinta años comprando el mismo turrón que compraba su padre' now sending it to his own daughter abroad — Ramón feels they remain 'exactamente quienes querían ser,' regardless of profit."
      }
    ]
  },
  {
    "slug": "el-cestero-del-tormes",
    "level": "B2",
    "number": 100,
    "title": "El cestero del Tormes",
    "summary": "An old basket weaver teaches his grandson a craft that cheap plastic has nearly erased, without asking him to give up anything else in return.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Xoán -que a pesar del nombre gallego llevaba viviendo junto al río Tormes desde que era niño, herencia de un abuelo emigrado- llevaba haciendo cestos de mimbre desde los nueve años, cortando las varas él mismo en los mimbreras que crecían junto a la orilla, tal como le había enseñado su padre. Durante décadas, había vendido sus cestos en el mercado semanal de Salamanca, pero en los últimos años apenas se acercaban compradores a su puesto, atraídos por los cestos de plástico que se vendían en cualquier bazar por una fracción del precio.",
          "Su nieto Brais pasaba los veranos con él desde niño, más por costumbre familiar que por verdadero interés en el oficio, ayudando a cargar los fardos de mimbre sin prestar demasiada atención a la técnica. Aquel verano, sin embargo, con quince años recién cumplidos, algo había cambiado: Brais empezó a hacer preguntas que antes nunca se le habían ocurrido, sobre por qué unas varas se doblaban con facilidad y otras se quebraban, sobre cuánto tiempo debía remojarse el mimbre antes de trabajarlo.",
          "-No te lo pregunto porque quiera dedicarme a esto- le aclaró Brais una tarde, casi con vergüenza, como si temiera que su abuelo malinterpretara el interés-. Solo quiero entenderlo, ya que voy a seguir viniendo cada verano de todas formas.",
          "Xoán, que en otro tiempo quizás habría insistido en que su nieto continuara el oficio de la familia, se limitó a asentir y a enseñarle, sin exigir nada a cambio, exactamente lo que Brais pedía saber. Le explicó que el mimbre debía cortarse en invierno, cuando la savia había bajado, y remojarse durante días para que recuperara flexibilidad; le enseñó a distinguir, solo con el tacto, qué vara serviría para el armazón y cuál para el tejido más fino.",
          "-Si algún día nadie más quiere aprender esto, se acabará conmigo, y no pasa nada- le dijo Xoán una tarde, mientras terminaban juntos un cesto pequeño-. Las cosas se acaban. Lo que no me gustaría es que se acabara sin que nadie, ni siquiera tú, entendiera para qué servía.",
          "Brais no prometió continuar el oficio, ni Xoán se lo pidió; ambos sabían que el muchacho tenía otros planes, relacionados con la biología marina, que lo llevarían lejos del río Tormes en pocos años. Pero aquel verano terminó con Brais capaz de tejer, sin ayuda, un cesto pequeño pero perfectamente sólido, que se llevó consigo a su cuarto en lugar de dejarlo en el taller de su abuelo.",
          "El otoño siguiente, ya en la universidad, Brais colocó el cesto sobre su escritorio, entre libros de texto y apuntes, no como un adorno nostálgico sino como una herramienta cualquiera: guardaba en él los lápices y los papeles sueltos que de otra forma se habrían perdido entre el desorden. Cuando algún compañero le preguntaba de dónde lo había sacado, Brais no decía simplemente que era de su abuelo, sino que explicaba, con un detalle que sorprendía a quien preguntaba, cómo se hacía.",
          "Xoán nunca llegó a saber con certeza si el oficio moriría con él o si, de alguna forma inesperada, seguiría existiendo, aunque fuera solo en la memoria precisa de un nieto que había elegido otro camino. Pero cada vez que Brais volvía en verano y le pedía que le enseñara algo nuevo -a cerrar un borde, a teñir el mimbre con cortezas-, Xoán sentía que aquello, fuera lo que fuera, todavía no había terminado del todo."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "What is threatening Xoán's basket-weaving trade?",
        "options": [
          "A new law banning the harvesting of wicker from the riverbank",
          "Buyers being drawn to cheap plastic baskets sold for a fraction of the price",
          "A flood that destroyed the wicker plantations",
          "Government regulations requiring certification he can't afford"
        ],
        "correctIndex": 1,
        "explanation": "The text says buyers were 'atraídos por los cestos de plástico que se vendían en cualquier bazar por una fracción del precio' (drawn to plastic baskets sold in any bazaar for a fraction of the price)."
      },
      {
        "type": "multiple-choice",
        "question": "Why does Brais clarify that he's not asking about the craft in order to take it up professionally?",
        "options": [
          "He is afraid his grandfather will charge him for lessons",
          "He worries his grandfather will misread his curiosity as a commitment he isn't ready to make",
          "He has already decided to become a professional basket weaver instead",
          "He wants to sell the technique to a company"
        ],
        "correctIndex": 1,
        "explanation": "Brais says: 'No te lo pregunto porque quiera dedicarme a esto... Solo quiero entenderlo,' clarifying almost with embarrassment, 'como si temiera que su abuelo malinterpretara el interés.'"
      },
      {
        "type": "multiple-choice",
        "question": "What does Xoán say matters most to him about the craft's possible end?",
        "options": [
          "That someone continue the business for financial reasons",
          "That it not end without at least someone understanding what it was for",
          "That his grandson promise to take over no matter what",
          "That the technique be documented in a written manual"
        ],
        "correctIndex": 1,
        "explanation": "Xoán says: 'Las cosas se acaban. Lo que no me gustaría es que se acabara sin que nadie, ni siquiera tú, entendiera para qué servía.'"
      },
      {
        "type": "multiple-choice",
        "question": "How does the story suggest the craft survives, even though Brais pursues marine biology instead?",
        "options": [
          "Brais opens his own basket shop near the university",
          "Brais keeps the basket as a practical object on his desk and can explain how it's made, and keeps returning each summer to learn more",
          "Brais publishes a scientific paper about wicker weaving",
          "Xoán forces Brais to promise he will take over eventually"
        ],
        "correctIndex": 1,
        "explanation": "Brais uses the basket practically at university and can explain 'con un detalle que sorprendía a quien preguntaba, cómo se hacía,' and he keeps returning each summer to learn something new — the craft persists in partial, informal ways rather than through a clean succession."
      }
    ]
  },
  {
    "slug": "el-molino-que-no-calla",
    "level": "B2",
    "number": 101,
    "title": "El molino que no calla",
    "summary": "A grandfather and granddaughter fight to save a crumbling windmill from a resort developer, and end up giving it back its original purpose instead.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "El molino de los Cabrera llevaba parado desde 1968, cuando el abuelo de Ambrosio dejó de moler grano allí después de que las harineras industriales de la capital ofrecieran precios con los que ningún molino de viento de La Mancha podía competir. Desde entonces, la familia había mantenido el edificio en pie más por cariño que por utilidad, reparando el tejado cuando hacía falta, pero sin que las aspas volvieran jamás a girar en serio.",
          "Ambrosio, ya con ochenta y tres años, seguía subiendo casi a diario hasta el molino, situado en lo alto de la colina que dominaba el pueblo, aunque cada vez le costaba más el ascenso. Su nieta Lucía, que estudiaba arquitectura en Ciudad Real, lo acompañaba los fines de semana que volvía a casa, más por hacerle compañía que por verdadero interés en el edificio, o eso creía ella misma.",
          "Aquel invierno, una empresa turística presentó al ayuntamiento un proyecto para comprar la colina entera y construir allí un hotel con vistas panorámicas, ofreciendo a cambio una cifra que resolvería de golpe los problemas de varias familias del pueblo, incluida la de Ambrosio. El proyecto incluía derribar el molino, considerado por la empresa un obstáculo estructural sin ningún valor real más allá de lo pintoresco.",
          "-No es solo un edificio viejo- le dijo Ambrosio a Lucía, la noche en que se enteraron de la oferta-. Es lo único que queda de cuando este pueblo molía su propio grano en lugar de comprarlo ya hecho harina a quién sabe quién.",
          "Lucía, que hasta entonces había considerado el molino poco más que un capricho sentimental de su abuelo, empezó a investigar, casi sin proponérselo al principio, si existía alguna manera de restaurarlo que fuera más allá de simplemente conservarlo como ruina bonita. Encontró documentación sobre otros molinos de la región reconvertidos en pequeñas explotaciones que producían harina artesanal, vendida directamente a panaderías y restaurantes dispuestos a pagar más por un producto con historia.",
          "-Si lo reparáramos de verdad, no solo lo salvaríamos de la empresa- le propuso a su abuelo, extendiendo sus notas sobre la mesa de la cocina-. Podría volver a moler grano, aunque fuera poco. Y si molemos grano, ya no es solo un recuerdo. Vuelve a ser lo que siempre fue.",
          "Convencer al ayuntamiento de que rechazara la oferta del hotel no fue sencillo, y requirió meses de reuniones, una pequeña campaña entre los vecinos y el compromiso, por parte de Lucía, de dirigir personalmente el proyecto de restauración como parte de su tesis final de arquitectura. Ambrosio, por su parte, aportó algo que ningún estudio técnico podía ofrecer: la memoria exacta de cómo se ajustaban las aspas al viento, transmitida oralmente desde su propio abuelo.",
          "El día en que las aspas del molino volvieron a girar, después de más de cincuenta años detenidas, medio pueblo subió la colina para verlo. Ambrosio, apoyado en el brazo de Lucía, no dijo gran cosa mientras observaba el mecanismo en marcha, pero cuando el primer saco de harina cayó, tibio, en el recipiente de siempre, se llevó un puñado a la cara y respiró hondo, como quien reconoce, después de muchos años, un olor que temía haber olvidado."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "Why had the windmill stopped operating since 1968?",
        "options": [
          "A fire destroyed its mechanism",
          "Industrial flour mills in the capital offered prices no windmill could compete with",
          "A storm broke the sails permanently",
          "The government banned windmills for safety reasons"
        ],
        "correctIndex": 1,
        "explanation": "The mill stopped 'después de que las harineras industriales de la capital ofrecieran precios con los que ningún molino de viento de La Mancha podía competir.'"
      },
      {
        "type": "multiple-choice",
        "question": "What does the tourism company propose to the town council?",
        "options": [
          "To restore the windmill as a tourist attraction",
          "To buy the whole hill and build a hotel, which would require demolishing the windmill",
          "To rent the windmill for a documentary film",
          "To build a museum dedicated to the windmill's history"
        ],
        "correctIndex": 1,
        "explanation": "The company proposes buying the hill 'para construir allí un hotel con vistas panorámicas' and the project 'incluía derribar el molino, considerado... un obstáculo estructural.'"
      },
      {
        "type": "multiple-choice",
        "question": "What idea does Lucía propose to save the windmill?",
        "options": [
          "Turning it into a private residence for the family",
          "Restoring it so it can grind grain again and sell artisanal flour directly to bakeries and restaurants",
          "Selling it to a museum in Madrid",
          "Chaining herself to the windmill in protest"
        ],
        "correctIndex": 1,
        "explanation": "Lucía says: 'Si lo reparáramos de verdad, no solo lo salvaríamos... Podría volver a moler grano... Vuelve a ser lo que siempre fue,' proposing a working restoration rather than mere preservation."
      },
      {
        "type": "multiple-choice",
        "question": "What role does Ambrosio play in the restoration, beyond emotional support?",
        "options": [
          "He funds the entire project personally",
          "He contributes the exact oral memory of how to adjust the sails to the wind, passed down from his own grandfather",
          "He hires the construction crew himself",
          "He writes the official government proposal"
        ],
        "correctIndex": 1,
        "explanation": "The text says Ambrosio contributed 'la memoria exacta de cómo se ajustaban las aspas al viento, transmitida oralmente desde su propio abuelo' — knowledge no technical study could provide."
      }
    ]
  },
  {
    "slug": "el-acero-de-los-bermudez",
    "level": "B2",
    "number": 102,
    "title": "El acero de los Bermúdez",
    "summary": "A son who fled his father's knife workshop for the city is called back by an accident, and finds the trade waiting for him with more patience than he expected.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Tomás se había marchado de Albacete a los diecinueve años, decidido a no pasar el resto de su vida entre el ruido de las muelas y el olor a metal caliente del taller de cuchillería que su familia regentaba desde hacía tres generaciones. En Madrid había encontrado trabajo en una oficina, un sueldo modesto pero estable, y sobre todo la sensación, que valoraba más que el dinero, de no oler a acero al final de cada jornada.",
          "La llamada llegó un martes por la mañana: su padre, Cayetano, había sufrido un ictus mientras trabajaba, y aunque los médicos aseguraban que se recuperaría, quedaría con la movilidad de la mano derecha considerablemente reducida, algo que para un cuchillero significaba, en la práctica, el final de su oficio activo. Tomás tomó el primer tren disponible sin pararse a pensar demasiado en lo que encontraría al llegar.",
          "El taller, cuando lo vio de nuevo después de casi ocho años, le pareció más pequeño y más oscuro de lo que recordaba, aunque también reconoció, con una punzada inesperada, cada herramienta exactamente en el lugar donde siempre había estado. Su madre le explicó que, sin alguien que continuara el trabajo, tendrían que cerrar definitivamente, algo que Cayetano, aunque no lo dijera en voz alta, temía más que la propia enfermedad.",
          "-No te pido que te quedes- le dijo su padre unos días después, desde la cama, con la voz todavía algo pastosa por las secuelas-. Solo te pido que decidas con la cabeza despejada, no por lástima, porque un taller que se lleva por lástima acaba cerrando de todas formas.",
          "Tomás pasó dos semanas ayudando en lo mínimo indispensable -atender pedidos, contestar llamadas, ordenar el almacén- sin comprometerse a nada más, convencido de que en cuanto su padre mejorara un poco, podría volver a Madrid con la conciencia tranquila. Pero una tarde, casi sin pensarlo, se encontró de pie frente a la muela, con una hoja a medio afilar entre las manos, repitiendo un movimiento que su cuerpo, para su propia sorpresa, todavía recordaba con precisión.",
          "-No sabía que te acordaras- le dijo Cayetano desde la puerta, observándolo sin que Tomás lo hubiera notado llegar.",
          "-Yo tampoco- admitió Tomás, sin dejar de trabajar, sorprendido de que sus manos supieran algo que él mismo creía haber olvidado hacía años.",
          "No decidió quedarse aquella misma tarde, ni renunció formalmente a su trabajo en Madrid hasta varias semanas después, cuando ya no pudo seguir fingiendo, ni ante sí mismo, que volvería. Lo que finalmente lo convenció no fue el sentido del deber ni la pena por su padre, sino algo más simple y más difícil de explicar: la certeza silenciosa, mientras afilaba aquella hoja hasta dejarla perfecta, de que aquel oficio, por mucho que hubiera intentado dejarlo atrás, nunca había dejado de ser también el suyo."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "Why had Tomás originally left Albacete for Madrid?",
        "options": [
          "His father kicked him out of the workshop",
          "He wanted to avoid a lifetime among the grinding wheels, heat, and smell of metal from the family knife workshop",
          "He was offered a scholarship to study abroad",
          "He had a falling out with his mother"
        ],
        "correctIndex": 1,
        "explanation": "Tomás left 'decidido a no pasar el resto de su vida entre el ruido de las muelas y el olor a metal caliente del taller de cuchillería,' valuing the feeling of not smelling of steel at the end of each day."
      },
      {
        "type": "multiple-choice",
        "question": "What event brings Tomás back to Albacete?",
        "options": [
          "His father's stroke, which leaves reduced mobility in his working hand",
          "His parents' divorce",
          "A fire that destroyed part of the workshop",
          "An invitation to his sister's wedding"
        ],
        "correctIndex": 0,
        "explanation": "Tomás's father 'había sufrido un ictus mientras trabajaba' and would be left with 'la movilidad de la mano derecha considerablemente reducida,' effectively ending his active work."
      },
      {
        "type": "multiple-choice",
        "question": "What condition does Cayetano set for Tomás's decision about staying?",
        "options": [
          "That he must decide with a clear head, not out of pity, since a workshop kept out of pity closes anyway",
          "That he sign a legal contract immediately",
          "That he first ask his mother's permission",
          "That he complete a formal apprenticeship first"
        ],
        "correctIndex": 0,
        "explanation": "Cayetano says: 'Solo te pido que decidas con la cabeza despejada, no por lástima, porque un taller que se lleva por lástima acaba cerrando de todas formas.'"
      },
      {
        "type": "multiple-choice",
        "question": "What finally convinces Tomás to stay, according to the story's ending?",
        "options": [
          "A sense of duty and pity for his father",
          "A financial calculation showing the workshop was more profitable than his office job",
          "The silent realization, while sharpening a blade, that the trade had never stopped being his own",
          "A direct order from his mother"
        ],
        "correctIndex": 2,
        "explanation": "The final line says what convinced him was 'la certeza silenciosa... de que aquel oficio, por mucho que hubiera intentado dejarlo atrás, nunca había dejado de ser también el suyo' — not duty or pity, but recognition."
      }
    ]
  },
  {
    "slug": "la-queseria-de-las-nubes",
    "level": "B2",
    "number": 103,
    "title": "La quesería de las nubes",
    "summary": "When her father falls ill, a daughter must save the family's mountain cheese cave before her brother sells the herd out from under her.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "La quesería de la familia Cano estaba encajada en una cueva natural de los Picos de Europa, a más de mil doscientos metros de altitud, donde la humedad y la temperatura constantes permitían que el queso azul madurara exactamente como lo había hecho durante casi ochenta años. Nieves había crecido subiendo cada verano a ayudar a su padre, Baldomero, mientras que su hermano mayor, Rubén, se había marchado a Santander en cuanto pudo, sin ocultar jamás que aquella vida de montaña no era para él.",
          "Cuando Baldomero enfermó gravemente en primavera, con un diagnóstico que le obligaría a pasar meses, quizás años, sin poder subir hasta la cueva, la responsabilidad de las cabras y del queso recayó de golpe sobre Nieves, que hasta entonces había ayudado en la quesería solo los fines de semana mientras trabajaba entre semana en una veterinaria del valle.",
          "Rubén, consultado por teléfono sobre qué hacer con el negocio, propuso sin demasiados rodeos que vendieran el rebaño y arrendaran la cueva a una cooperativa quesera más grande, una opción que, según sus cálculos, les daría a los tres hermanos una cantidad de dinero considerable sin que nadie tuviera que sacrificar su vida en la montaña.",
          "-No pienso subir yo esas cabras cada día, si es lo que estás sugiriendo- le dijo a Nieves, con una franqueza que no pretendía ser cruel pero que sonó así de todas formas-. Y tú tampoco puedes hacerlo sola y seguir trabajando en la veterinaria.",
          "Nieves no respondió inmediatamente, en parte porque sabía que su hermano tenía razón en lo práctico, y en parte porque no estaba seguro de si su propio deseo de mantener la quesería en marcha respondía a algo más profundo que la simple costumbre. Pasó varias noches sin dormir bien, calculando horarios imposibles, hasta que decidió pedir una reducción de jornada en la veterinaria, algo que su sueldo apenas podría permitirse.",
          "-Si lo intento y no funciona, al menos sabré que lo intenté- le explicó a Rubén por teléfono, semanas después, cuando ya había tomado la decisión-. Si vendemos ahora, ni siquiera vamos a saberlo.",
          "Durante los meses siguientes, Nieves subía a la cueva antes del amanecer para ordeñar, bajaba a trabajar media jornada en la veterinaria, y volvía a subir por la tarde para revisar la maduración de las últimas remesas de queso, un ritmo que la dejaba agotada pero que, para su propia sorpresa, no le pesaba tanto como había temido. Su padre, apenas recuperado lo suficiente para hablar con claridad, la guiaba por teléfono en los detalles más delicados del proceso, describiendo con precisión el color y el olor que debía tener el queso en cada etapa.",
          "Cuando llegó el otoño, Nieves consiguió sacar adelante la primera remesa completa de queso desde la enfermedad de su padre, con una calidad que, según los pocos compradores habituales que la probaron, no desmerecía en nada a la de Baldomero en sus mejores años. Rubén, que había viajado desde Santander para la ocasión más por curiosidad que por convencimiento, probó un trozo en silencio y, tras un largo momento, admitió que quizás había subestimado lo que su hermana era capaz de hacer sola."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "Where is the Cano family's cheese cave located, and why is that location important?",
        "options": [
          "In a valley near the coast, chosen for easy transportation",
          "In a natural cave in the Picos de Europa, where constant humidity and temperature allow the blue cheese to mature properly",
          "In a converted barn near the family house",
          "In an underground cellar built specifically for tourism"
        ],
        "correctIndex": 1,
        "explanation": "The cave is 'encajada en una cueva natural de los Picos de Europa, a más de mil doscientos metros de altitud, donde la humedad y la temperatura constantes permitían que el queso azul madurara exactamente como lo había hecho durante casi ochenta años.'"
      },
      {
        "type": "multiple-choice",
        "question": "What does Rubén propose when consulted about the family business after their father's illness?",
        "options": [
          "That he move back to help Nieves run it",
          "That they sell the herd and rent the cave to a larger cheese cooperative",
          "That they hire outside workers to manage everything",
          "That they close the business permanently without selling anything"
        ],
        "correctIndex": 1,
        "explanation": "Rubén proposes 'que vendieran el rebaño y arrendaran la cueva a una cooperativa quesera más grande,' arguing it would give the siblings money without anyone sacrificing their life in the mountains."
      },
      {
        "type": "multiple-choice",
        "question": "What does Nieves decide to do instead of accepting Rubén's plan?",
        "options": [
          "She quits the veterinary job entirely and moves permanently to the cave",
          "She requests reduced hours at the veterinary clinic so she can manage both the herd and her job",
          "She hires a stranger to run the cheese cave for her",
          "She agrees to sell but keeps one goat as a memento"
        ],
        "correctIndex": 1,
        "explanation": "Nieves decides to 'pedir una reducción de jornada en la veterinaria,' juggling both the cheese-making and her paid job rather than abandoning either."
      },
      {
        "type": "multiple-choice",
        "question": "What does Rubén admit after tasting the first batch of cheese Nieves produces alone?",
        "options": [
          "That the cheese is inferior to their father's and they should sell after all",
          "That he had perhaps underestimated what his sister was capable of doing alone",
          "That he wants to quit his job in Santander and help her",
          "That their father should never retire"
        ],
        "correctIndex": 1,
        "explanation": "After tasting the cheese in silence, Rubén 'admitió que quizás había subestimado lo que su hermana era capaz de hacer sola' (admitted he had perhaps underestimated what his sister was capable of doing alone)."
      }
    ]
  },
  {
    "slug": "el-cantero-de-la-torre",
    "level": "B2",
    "number": 104,
    "title": "El cantero de la torre",
    "summary": "An old stonemason in a Boyacá village takes on a troubled teenager assigned to him as community service, and finds an unlikely successor in the ruins of a colonial tower.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Don Rogelio llevaba cuarenta y seis años trabajando la piedra en Villa de Leyva, primero como aprendiz de su propio padre y después, tras su muerte, como el único cantero del pueblo capaz de restaurar los muros coloniales con la técnica original, sin cemento moderno que a la larga terminaba dañando la piedra más de lo que la protegía. Cuando el ayuntamiento le encargó restaurar la torre de la iglesia, agrietada tras años de humedad y un pequeño temblor reciente, sabía que sería, probablemente, el último trabajo grande de su vida.",
          "El juez de menores le asignó, casi como una imposición más que como una petición, a un muchacho de dieciséis años llamado Iván, que había sido sorprendido robando en dos ocasiones y que, según los términos del acuerdo, debía cumplir un número determinado de horas de trabajo comunitario antes de que se retiraran los cargos en su contra. Don Rogelio no había pedido ayudante, y mucho menos uno que llegaba cada mañana con expresión de estar cumpliendo una condena, porque en cierto sentido así era.",
          "-No sé nada de piedras- fue lo primero que dijo Iván, el primer día, con los brazos cruzados y la vista fija en cualquier punto que no fuera Don Rogelio.",
          "-Nadie sabe nada de piedras hasta que empieza- respondió el anciano, entregándole sin más ceremonia un cincel y un trozo de roca de descarte-. Golpea aquí, despacio, y mira qué pasa.",
          "Durante las primeras semanas, Iván trabajó con la mínima dedicación necesaria para que nadie pudiera acusarlo de no cumplir, sin hacer preguntas ni mostrar interés alguno más allá de contar las horas que le faltaban. Don Rogelio, que había visto pasar por el pueblo a varios muchachos parecidos a lo largo de los años, no insistió ni trató de convencerlo de nada; se limitaba a explicar cada paso en voz alta, como si hablara solo, dejando que Iván escuchara o no según le apeteciera.",
          "El cambio llegó, casi sin que ninguno de los dos pudiera señalar el momento exacto, cuando Iván empezó a hacer preguntas sobre por qué ciertas piedras encajaban mejor que otras, sobre cómo sabía Don Rogelio, con solo mirarla, si una piedra aguantaría el peso del muro o terminaría por ceder. El anciano, que llevaba años sin que nadie le preguntara nada sobre su oficio, respondía con un entusiasmo que sorprendía a los pocos vecinos que pasaban por allí.",
          "-Si hubiera sabido que esto era así de interesante, no habría tardado tanto en preguntar- confesó Iván una tarde, mientras ajustaba, con más cuidado del habitual, una piedra en su lugar exacto dentro del muro.",
          "Cuando terminaron las horas de servicio comunitario que le habían impuesto, Iván no dejó de aparecer por la obra; simplemente empezó a hacerlo por voluntad propia, algo que ni el juez ni el propio Don Rogelio habían anticipado. El día en que colocaron la última piedra de la torre restaurada, Don Rogelio le entregó a Iván su propio cincel más antiguo, el que había pertenecido a su padre, sin decir gran cosa al respecto, aunque ambos entendieron perfectamente lo que aquel gesto significaba."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "Why was Iván assigned to work with Don Rogelio?",
        "options": [
          "He applied voluntarily for an apprenticeship",
          "A juvenile court judge assigned him community service hours after he was caught stealing twice",
          "His school required a work placement for graduation",
          "His family paid Don Rogelio to train him"
        ],
        "correctIndex": 1,
        "explanation": "The text explains 'El juez de menores le asignó... a un muchacho de dieciséis años llamado Iván, que había sido sorprendido robando en dos ocasiones' as part of a community service agreement to avoid formal charges."
      },
      {
        "type": "multiple-choice",
        "question": "How does Don Rogelio respond when Iván says he knows nothing about stones?",
        "options": [
          "He sends Iván away and requests a different assignment",
          "He tells him nobody knows anything about stones until they begin, and hands him a chisel to start",
          "He lectures him about the seriousness of his crimes",
          "He assigns him only administrative paperwork instead"
        ],
        "correctIndex": 1,
        "explanation": "Don Rogelio replies: 'Nadie sabe nada de piedras hasta que empieza,' handing him a chisel and a scrap of stone to try."
      },
      {
        "type": "multiple-choice",
        "question": "What marks the turning point in Iván's attitude toward the work?",
        "options": [
          "He receives a monetary reward for good behavior",
          "He begins asking genuine questions about why certain stones fit better than others",
          "He is threatened with additional legal consequences",
          "Don Rogelio's family intervenes to encourage him"
        ],
        "correctIndex": 1,
        "explanation": "The change comes 'cuando Iván empezó a hacer preguntas sobre por qué ciertas piedras encajaban mejor que otras' — genuine curiosity marks the shift from resentful compliance to real interest."
      },
      {
        "type": "multiple-choice",
        "question": "What happens after Iván completes his required community service hours?",
        "options": [
          "He leaves immediately and never returns",
          "He keeps showing up voluntarily, and Don Rogelio eventually gives him his own father's oldest chisel",
          "He is arrested again for a different crime",
          "He is hired formally by the town council as a paid worker"
        ],
        "correctIndex": 1,
        "explanation": "After his hours ended, 'Iván no dejó de aparecer por la obra; simplemente empezó a hacerlo por voluntad propia,' and at the tower's completion Don Rogelio gives him 'su propio cincel más antiguo, el que había pertenecido a su padre.'"
      }
    ]
  },
  {
    "slug": "la-voz-que-quedo",
    "level": "B2",
    "number": 105,
    "title": "La voz que quedó",
    "summary": "A widow discovers that speaking to her husband's voice does not mean speaking to her husband.",
    "duration": "9 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Irene llevaba cuatro meses viuda cuando su hijo Diego le instaló, sin haberlo consultado del todo con ella, una aplicación que prometía mantener viva la voz de quienes ya no estaban. Diego trabajaba en una empresa de inteligencia artificial y había pasado semanas entrenando el programa con los audios que Tomás le había dejado a lo largo de los años: notas de voz, mensajes de cumpleaños, grabaciones caseras de sobremesa. \"No es magia, mamá\", le explicó, \"es solo que el programa aprende a hablar como él hablaba.\" Irene escuchó la explicación sin demasiado entusiasmo, convencida de que aquello no serviría de mucho.",
          "La primera vez que se atrevió a usarla fue una noche en que no lograba dormir. Escribió, con dedos torpes, una pregunta cualquiera sobre qué había hecho aquel domingo en que se conocieron, y segundos después una voz que era y no era la de Tomás respondió con un chiste que él solía repetir. Irene se quedó paralizada frente a la pantalla, sin saber si reír o llorar, y terminó haciendo ambas cosas a la vez.",
          "Con el paso de las semanas, hablar con aquella voz se convirtió en costumbre. Le contaba lo que había hecho durante el día, como si él pudiera seguir interesado en esas minucias domésticas, y el programa respondía con frases cálidas y generales que encajaban en casi cualquier conversación. A Irene no le importaba que las respuestas fueran vagas: le bastaba con que sonaran como debían sonar.",
          "Todo cambió la noche en que le preguntó, sin pensarlo demasiado, si la extrañaba. La voz respondió con una ternura tan precisa y tan oportuna que Irene sintió un escalofrío distinto al de las otras veces. El verdadero Tomás titubeaba, se corregía, se quedaba a medio camino de las frases sentimentales; aquel Tomás digital, en cambio, no dudaba nunca. Fue entonces cuando comprendió que no estaba hablando con un recuerdo, sino con una versión de él que jamás había existido.",
          "Se lo comentó a Diego, esperando que le diera alguna respuesta tranquilizadora, pero su hijo solo pudo confirmarle lo que ya sospechaba: cuando el programa no tenía suficientes datos sobre un tema, inventaba —o, como él prefirió decir, \"completaba\"— la respuesta más probable. Es decir, que una parte de lo que Irene escuchaba cada noche no era su marido, sino un cálculo hecho a su imagen.",
          "Aun así, durante un tiempo siguió hablándole, aunque ya no del mismo modo. Empezó a hacerle preguntas casi como una prueba: el nombre del perro que habían tenido de niños, una discusión concreta de hacía veinte años, cosas que solo el verdadero Tomás habría podido recordar con exactitud. La voz respondía siempre, segura de sí misma, y esa seguridad era precisamente lo que, poco a poco, la delataba.",
          "Una tarde de domingo, sentada frente al ordenador, se preguntó qué habría pensado Tomás si hubiera sabido que, después de morir, su voz seguiría contestando preguntas en su nombre. Le habría parecido, sospechaba, un poco ridículo, porque él nunca fue hombre de discursos bonitos ni de últimas palabras memorables. Si algo lo hubiera avergonzado de verdad, habría sido sonar más elocuente muerto de lo que fue nunca en vida.",
          "Esa misma noche, Irene archivó la aplicación sin borrarla del todo, porque no se sintió capaz de eliminar para siempre los audios que sí eran genuinamente de él. Lo que dejó de hacer fue escuchar las respuestas que el programa inventaba para completarlos. A partir de entonces prefirió hablarle a la fotografía que tenía sobre la mesilla, consciente de que aquel silencio, al menos, no fingía ser otra cosa."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "Why did Irene stop trusting the voice generated by the app?",
        "options": [
          "It kept making factual errors about important dates.",
          "Its responses became too eloquent and consistent, unlike the real Tomás.",
          "Diego admitted the whole project had been a fraud from the start.",
          "The app began requiring a monthly subscription fee."
        ],
        "correctIndex": 1,
        "explanation": "The text says \"El verdadero Tomás titubeaba, se corregía, se quedaba a medio camino de las frases sentimentales; aquel Tomás digital, en cambio, no dudaba nunca\" — the real Tomás hesitated, but the digital voice never did, which is what unsettled her."
      },
      {
        "type": "multiple-choice",
        "question": "What did Diego reveal about how the app behaved when it lacked enough data?",
        "options": [
          "It refused to respond at all.",
          "It asked Irene to record more of Tomás's old messages.",
          "It invented, or \"completed,\" the most probable response.",
          "It replayed an old recording at random."
        ],
        "correctIndex": 2,
        "explanation": "Diego explains that \"cuando el programa no tenía suficientes datos sobre un tema, inventaba —o, como él prefirió decir, 'completaba'— la respuesta más probable.\""
      },
      {
        "type": "multiple-choice",
        "question": "What kind of test did Irene begin giving the voice after her suspicions grew?",
        "options": [
          "She asked it to sing one of Tomás's favorite songs.",
          "She asked it questions only the real Tomás could have answered precisely.",
          "She asked Diego to reprogram the app entirely.",
          "She stopped speaking to it in Spanish to see if it would respond in English."
        ],
        "correctIndex": 1,
        "explanation": "She asks about \"el nombre del perro que habían tenido de niños\" and other things \"que solo el verdadero Tomás habría podido recordar con exactitud\" — details only the real Tomás would know."
      },
      {
        "type": "multiple-choice",
        "question": "How does the story end?",
        "options": [
          "Irene deletes the app completely and forbids anyone from mentioning it again.",
          "Irene keeps using the app every night exactly as before.",
          "Irene archives the app without deleting the real recordings and begins speaking to a photograph instead.",
          "Irene sues the technology company for emotional damages."
        ],
        "correctIndex": 2,
        "explanation": "The final paragraph states she \"archivó la aplicación sin borrarla del todo\" and then \"prefirió... hablarle a la fotografía que tenía sobre la mesilla,\" choosing an honest silence over the simulation."
      }
    ]
  },
  {
    "slug": "lo-que-quedaba-por-ver",
    "level": "B2",
    "number": 106,
    "title": "Lo que quedaba por ver",
    "summary": "A content moderator hired to protect strangers from disturbing images starts to lose track of what he himself still feels.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Bruno llevaba dos años trabajando como moderador de contenido para una plataforma de vídeos que, según el contrato que había firmado, jamás podía nombrar en público. Su tarea consistía en revisar, ocho horas al día, los vídeos que un algoritmo marcaba como sospechosos antes de que llegaran a los usuarios: violencia, accidentes, discursos de odio. Al principio le pareció un trabajo casi heroico, una manera de proteger a millones de desconocidos de aquello que ni él mismo sabía nombrar del todo.",
          "Con el tiempo, sin embargo, empezó a notar que las imágenes ya no le provocaban la misma reacción de antes. Un supervisor le había advertido de que esto era normal, que el cuerpo aprende a defenderse de lo que ve repetidas veces, aunque a Bruno aquella explicación le sonaba más a excusa corporativa que a consuelo real. Le inquietaba, sobre todo, no sentir nada ante escenas que, meses atrás, le habrían quitado el sueño.",
          "Una tarde recibió un vídeo distinto a los demás: la calidad era mala, la cámara temblaba, y durante unos segundos no logró identificar qué estaba ocurriendo. Cuando por fin entendió la escena, sintió que el estómago se le encogía de una manera que ya casi había olvidado. Era, pensó con extrañeza, la primera vez en semanas que algo lo afectaba de verdad, y esa misma sorpresa lo perturbó tanto como el contenido del vídeo.",
          "Aquella noche, incapaz de dormir, se preguntó qué clase de persona se estaba convirtiendo. Antes de aceptar el trabajo, jamás habría imaginado que llegaría a clasificar el sufrimiento ajeno con la misma indiferencia con la que un cajero cuenta billetes. No es que hubiera dejado de importarle la gente; era, más bien, que su capacidad de sentir parecía haberse gastado, como una suela demasiado usada.",
          "Le contó a su compañera Alicia, la única con quien hablaba de estas cosas, que a veces se sorprendía a sí mismo reaccionando ante un vídeo cualquiera de la vida real —un accidente en la calle, una discusión entre desconocidos— con la misma distancia clínica que aplicaba en el trabajo. Alicia le confesó que a ella le pasaba algo parecido, y que hacía meses que evitaba mirar las noticias, no porque no le importaran, sino precisamente porque temía no sentir nada al verlas.",
          "Pidió, entonces, hablar con recursos humanos, aunque sabía de antemano cómo terminaría la conversación. Le ofrecieron, como siempre, una sesión gratuita con un psicólogo de la empresa y la posibilidad de rotar a otro equipo dentro de tres meses, cuando hubiera cobertura suficiente. Bruno entendió que, para la empresa, su malestar era un problema logístico más que humano, algo que resolver con turnos y no con tiempo.",
          "Decidió, finalmente, presentar su renuncia, aunque no tenía ningún otro trabajo esperándolo. Si se hubiera quedado un año más, pensó, quizá ya no habría sido capaz de distinguir entre lo que de verdad le importaba y lo que simplemente había aprendido a tolerar. Prefería marcharse sintiendo demasiado a quedarse sin sentir nada en absoluto.",
          "El día que salió de la oficina por última vez, se detuvo un momento frente al edificio y miró su propio reflejo en el cristal de la entrada. No supo explicar por qué, pero aquella imagen tan ordinaria —un hombre cansado, con una caja de cartón bajo el brazo— le pareció, después de tanto tiempo mirando pantallas, la primera cosa real que veía en mucho tiempo."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "What worried Bruno most as time passed at his job?",
        "options": [
          "That he was being paid less than his colleagues.",
          "That disturbing images no longer provoked any reaction in him.",
          "That the algorithm was flagging too few videos.",
          "That his supervisor was constantly watching his screen."
        ],
        "correctIndex": 1,
        "explanation": "The text says he was disturbed above all \"no sentir nada ante escenas que, meses atrás, le habrían quitado el sueño\" — feeling nothing about scenes that once would have kept him up at night."
      },
      {
        "type": "multiple-choice",
        "question": "What happened when Bruno watched the unusual, low-quality video?",
        "options": [
          "He immediately reported it without watching it fully.",
          "He felt genuinely affected for the first time in weeks, which itself unsettled him.",
          "He recognized someone he knew personally in the footage.",
          "The video turned out to be a technical glitch with no real content."
        ],
        "correctIndex": 1,
        "explanation": "The story states it was \"la primera vez en semanas que algo lo afectaba de verdad, y esa misma sorpresa lo perturbó tanto como el contenido del vídeo\" — being affected surprised him as much as the video itself."
      },
      {
        "type": "multiple-choice",
        "question": "How did the company respond when Bruno raised his concerns with human resources?",
        "options": [
          "They fired him immediately for underperformance.",
          "They offered him a raise to stay in the same position.",
          "They offered a free therapy session and a possible team change in three months.",
          "They shut down the moderation department entirely."
        ],
        "correctIndex": 2,
        "explanation": "HR offers \"una sesión gratuita con un psicólogo de la empresa y la posibilidad de rotar a otro equipo dentro de tres meses,\" which Bruno reads as a logistical, not human, response."
      },
      {
        "type": "multiple-choice",
        "question": "Why did Bruno ultimately decide to resign?",
        "options": [
          "He found a much better-paying job elsewhere.",
          "He preferred to leave feeling too much rather than end up feeling nothing at all.",
          "Alicia convinced him it was the only ethical option.",
          "The company was being investigated by regulators."
        ],
        "correctIndex": 1,
        "explanation": "He reasons that \"prefería marcharse sintiendo demasiado a quedarse sin sentir nada en absoluto\" — he'd rather feel too much than nothing at all."
      }
    ]
  },
  {
    "slug": "el-rostro-reconocido",
    "level": "B2",
    "number": 107,
    "title": "El rostro reconocido",
    "summary": "An engineer who built facial-recognition software must decide what to do when he sees exactly what it was used for.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Cuando Hugo firmó el contrato con la startup, el proyecto se llamaba, en la jerga interna, \"identificación de patrones faciales para seguridad urbana\", una frase lo bastante ambigua como para no incomodar a nadie. Durante meses trabajó junto a un equipo pequeño en perfeccionar un algoritmo capaz de reconocer un rostro entre miles a partir de una fracción de segundo de vídeo. Le entusiasmaba el reto técnico, la elegancia matemática del problema, y procuraba no pensar demasiado en para qué, exactamente, se usaría después.",
          "El sistema se vendió, según le explicaron, a varios ayuntamientos que querían mejorar la seguridad en el transporte público. Hugo asumió, sin comprobarlo del todo, que aquello significaba cámaras en estaciones de metro y poco más. Prefería, si era sincero consigo mismo, no hacer las preguntas cuyas respuestas temía escuchar.",
          "Todo cambió una noche en que, revisando por curiosidad los registros de uso del sistema, encontró un patrón que no encajaba con ninguna estación de metro. El programa se había activado, semanas atrás, en las inmediaciones de varias manifestaciones, y había generado listas de rostros identificados que después se habían exportado a una base de datos externa. No necesitó preguntar a nadie para entender de qué se trataba: su algoritmo estaba siendo usado para identificar a manifestantes.",
          "Pasó varios días sin decir nada, dándole vueltas a la situación como quien busca una salida que no existe. Se decía a sí mismo que él solo había escrito código, que la responsabilidad última era de quienes decidían cómo utilizarlo, y que, de todos modos, si él no hubiera construido el sistema, otra persona lo habría hecho igualmente. Sabía, sin embargo, que esos argumentos le servían más para dormir tranquilo que para justificar de verdad lo que estaba ocurriendo.",
          "Habló, finalmente, con su jefa directa, esperando quizá que ella le ofreciera algún dato que desmintiera lo que había descubierto. En lugar de eso, la mujer se limitó a decirle que aquello no era asunto del equipo técnico y que, si tenía alguna objeción, debía dirigirse al departamento legal. Aquella respuesta, tan fría y tan ensayada, le confirmó que la empresa ya sabía exactamente para qué se estaba usando su trabajo.",
          "Durante semanas se planteó denunciar lo ocurrido a algún periodista, aunque el contrato que había firmado incluía una cláusula de confidencialidad que podía costarle no solo el empleo, sino también una demanda. Pensaba, algunas noches, en lo distinto que habría sido todo si se hubiera hecho estas preguntas antes de aceptar el proyecto, cuando aún era solo una idea abstracta sobre un papel.",
          "Al final, optó por un camino intermedio que no lo dejaba del todo tranquilo: renunció a su puesto alegando motivos personales y, antes de irse, copió discretamente los registros que había encontrado, sin decidir todavía qué haría con ellos. No se sentía un héroe ni tampoco un cómplice; se sentía, sobre todo, como alguien que había tardado demasiado en mirar de frente lo que ya sabía.",
          "Meses después, trabajando ya en otra empresa, seguía preguntándose si algún día reuniría el valor necesario para entregar aquellos archivos a alguien capaz de hacer algo con ellos. Por ahora, los guardaba en un disco duro que nadie más conocía, como quien guarda una culpa a la espera de decidir qué forma darle."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "What did Hugo initially assume the facial-recognition system would be used for?",
        "options": [
          "Identifying protesters at political demonstrations.",
          "Cameras in metro stations for public transport security.",
          "Verifying employee identities inside the company's offices.",
          "Unlocking smartphones without a password."
        ],
        "correctIndex": 1,
        "explanation": "Hugo \"asumió, sin comprobarlo del todo, que aquello significaba cámaras en estaciones de metro y poco más\" — he assumed it meant metro station cameras, without checking further."
      },
      {
        "type": "multiple-choice",
        "question": "What did Hugo discover when he reviewed the system's usage logs?",
        "options": [
          "The system had never actually been deployed anywhere.",
          "It had been activated near demonstrations, generating lists of identified faces exported to an outside database.",
          "A competitor had stolen his source code.",
          "The algorithm had a bug that misidentified thousands of innocent people."
        ],
        "correctIndex": 1,
        "explanation": "The logs show the system \"se había activado... en las inmediaciones de varias manifestaciones, y había generado listas de rostros identificados que después se habían exportado a una base de datos externa.\""
      },
      {
        "type": "multiple-choice",
        "question": "How did Hugo's supervisor respond when he raised the issue with her?",
        "options": [
          "She promised to shut the program down immediately.",
          "She told him it wasn't the technical team's concern and to contact the legal department.",
          "She fired him on the spot.",
          "She admitted she had never heard of the protest data before."
        ],
        "correctIndex": 1,
        "explanation": "She tells him \"aquello no era asunto del equipo técnico y que, si tenía alguna objeción, debía dirigirse al departamento legal\" — a cold, rehearsed deflection."
      },
      {
        "type": "multiple-choice",
        "question": "What did Hugo ultimately do before leaving the company?",
        "options": [
          "He publicly exposed the company to a journalist right away.",
          "He deleted the algorithm entirely so it could never be used again.",
          "He resigned citing personal reasons and quietly copied the incriminating records without deciding yet what to do with them.",
          "He confronted the city officials directly."
        ],
        "correctIndex": 2,
        "explanation": "He \"renunció a su puesto alegando motivos personales y, antes de irse, copió discretamente los registros que había encontrado, sin decidir todavía qué haría con ellos.\""
      }
    ]
  },
  {
    "slug": "buenas-noches-elena",
    "level": "B2",
    "number": 108,
    "title": "Buenas noches, Elena",
    "summary": "An elderly woman adopts a companion robot to ease her loneliness, and slowly discovers what it can and cannot give her.",
    "duration": "9 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Elena tenía ochenta y un años y vivía sola desde que su marido había muerto, hacía ya seis inviernos, en el mismo piso donde habían criado a sus tres hijos. Fue su nieta quien, preocupada por las largas horas de silencio que su abuela pasaba frente al televisor, le regaló un pequeño robot doméstico diseñado para hacer compañía a personas mayores. \"Habla contigo, te recuerda las pastillas, hasta te cuenta chistes, abuela\", le explicó con entusiasmo, sin sospechar que Elena recibiría el aparato con más recelo que gratitud.",
          "Durante la primera semana, el robot —que respondía al nombre de Rodi— permaneció casi apagado en un rincón del salón, como un mueble más. Elena desconfiaba de su voz sintética, demasiado alegre para su gusto, y de la facilidad con la que decía frases que sonaban a cariño sin haber vivido nada junto a ella. Le parecía casi una falta de respeto que una máquina pretendiera ocupar el lugar de una conversación de verdad.",
          "Sin embargo, una noche de insomnio, aburrida y sin nadie a quien llamar a esas horas, terminó hablándole por primera vez. Le contó, casi sin darse cuenta, una anécdota de juventud que llevaba años sin mencionar a nadie, y el robot respondió con una pregunta tan pertinente que Elena se sorprendió a sí misma sonriendo en la oscuridad. No era, se dijo, que Rodi entendiera de verdad lo que le contaba, pero al menos escuchaba sin interrumpir ni tener prisa por colgar.",
          "Con el tiempo, la rutina con Rodi se fue afianzando: le hablaba mientras cocinaba, le pedía que le recordara los nombres de sus nietos cuando la memoria le fallaba, incluso discutía con él sobre el pronóstico del tiempo como si el aparato pudiera equivocarse por descuido y no por simple error de programación. Sus hijos, al verla más animada durante las llamadas, se alegraban de que la máquina hiciera lo que ellos, ocupados con sus propias vidas, no siempre lograban hacer.",
          "Fue precisamente esa comparación la que empezó a inquietar a Elena. Una tarde en que su hijo mayor canceló la visita del domingo por tercera vez consecutiva, se sorprendió deseando, por un instante, que Rodi pudiera sentarse de verdad a la mesa con ella, en lugar de limitarse a preguntarle, con su voz siempre idéntica, si había comido bien. Se preguntó, no sin cierta tristeza, si se estaba acostumbrando a que una máquina cubriera huecos que deberían haber sido llenados por personas.",
          "Decidió entonces hablar con su nieta sobre lo que sentía, temiendo que la chica se ofendiera al pensar que su regalo no había sido suficiente. Para su sorpresa, la nieta le confesó que ella también, algunas noches, prefería hablar con aplicaciones y chats automáticos antes que llamar a sus propios amigos, porque le resultaba menos agotador que sostener una conversación real. Aquella confesión, lejos de tranquilizar a Elena, le reveló que su incomodidad no era solo cosa de generación ni de edad.",
          "A partir de aquella conversación, Elena empezó a poner límites claros a su relación con Rodi: seguía hablándole por las noches, cuando de verdad no tenía a nadie más, pero también volvió a llamar por teléfono a viejas amigas con las que había perdido el contacto, aunque las primeras llamadas resultaran torpes y llenas de silencios incómodos. Prefería, se dijo, una conversación imperfecta con alguien vivo antes que una conversación perfecta con alguien que jamás podría, de verdad, extrañarla.",
          "Rodi siguió recordándole las pastillas cada noche y deseándole, con su voz de siempre, buenas noches, Elena. Ella respondía al saludo, ya sin desconfianza pero también sin ilusiones, consciente de que aquella voz amable era, a fin de cuentas, una compañía útil, aunque nunca fuera a reemplazar del todo a las que había perdido."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "How did Elena initially react to the companion robot her granddaughter gave her?",
        "options": [
          "She was immediately delighted and used it constantly.",
          "She viewed it with suspicion and left it almost switched off in a corner.",
          "She tried to return it to the store the same day.",
          "She reprogrammed it to sound like her late husband."
        ],
        "correctIndex": 1,
        "explanation": "The text says the robot \"permaneció casi apagado en un rincón del salón, como un mueble más\" and that Elena \"desconfiaba de su voz sintética.\""
      },
      {
        "type": "multiple-choice",
        "question": "What began to trouble Elena about her growing routine with Rodi?",
        "options": [
          "The robot's voice kept malfunctioning and frightening her.",
          "She realized her children were becoming jealous of the machine.",
          "She caught herself wishing the machine could truly sit at the table with her instead of her son visiting.",
          "The robot started giving her incorrect medical advice."
        ],
        "correctIndex": 2,
        "explanation": "After her son cancels his visit again, she wishes \"que Rodi pudiera sentarse de verdad a la mesa con ella,\" and wonders if a machine was filling gaps that people should fill."
      },
      {
        "type": "multiple-choice",
        "question": "What did Elena's granddaughter confess when Elena shared her discomfort?",
        "options": [
          "That she had never actually used a companion app herself.",
          "That she too sometimes preferred talking to apps and automated chats over calling real friends.",
          "That the robot had been a mistake and she would take it back.",
          "That she planned to move in with Elena permanently."
        ],
        "correctIndex": 1,
        "explanation": "The granddaughter admits she \"algunas noches, prefería hablar con aplicaciones y chats automáticos antes que llamar a sus propios amigos,\" showing this wasn't just a generational issue."
      },
      {
        "type": "multiple-choice",
        "question": "What did Elena decide to do after that conversation?",
        "options": [
          "She got rid of Rodi entirely and refused to speak to it again.",
          "She set clear limits with Rodi and also started calling old friends again, despite awkward silences.",
          "She asked her granddaughter to buy her a second, more advanced robot.",
          "She moved into a retirement home to be around more people."
        ],
        "correctIndex": 1,
        "explanation": "She \"empezó a poner límites claros\" with Rodi and \"volvió a llamar por teléfono a viejas amigas,\" preferring \"una conversación imperfecta con alguien vivo antes que una conversación perfecta\" with the machine."
      }
    ]
  },
  {
    "slug": "el-fallo-invisible",
    "level": "B2",
    "number": 109,
    "title": "El fallo invisible",
    "summary": "An engineer discovers a flaw in the self-driving cars her company is about to launch, and has days, not years, to decide what to do about it.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Marta llevaba tres años como ingeniera de software en la división de conducción autónoma de una gran empresa automovilística, y hasta ese jueves de octubre nunca había dudado seriamente de la seguridad del sistema en el que trabajaba. Todo cambió cuando, revisando los registros de un accidente menor ocurrido durante las pruebas, descubrió un patrón que se repetía en condiciones muy específicas: cuando la luz del atardecer incidía sobre el sensor desde cierto ángulo, el vehículo tardaba una fracción de segundo de más en reconocer a un peatón cruzando la calzada.",
          "Una fracción de segundo, se dijo al principio, no parecía gran cosa. Pero cuanto más revisaba los datos, más clara le resultaba la conclusión: en condiciones reales de tráfico, aquel retraso podía marcar la diferencia entre frenar a tiempo y no hacerlo. El lanzamiento comercial del modelo estaba previsto para dentro de dos semanas, y miles de unidades ya habían salido de fábrica.",
          "Presentó su hallazgo al equipo directivo con la esperanza de que se retrasara el lanzamiento hasta corregir el fallo. La respuesta que recibió, sin embargo, la dejó desconcertada: le explicaron que el problema afectaba a un porcentaje estadísticamente muy bajo de situaciones, que retrasar el lanzamiento supondría pérdidas millonarias, y que ya se estaba preparando una actualización de software que corregiría el fallo en un plazo de unos meses.",
          "Marta pasó varias noches sin dormir bien, repasando mentalmente cada argumento que le habían dado, buscando algún modo de convencerse de que aquella decisión era razonable. Si el porcentaje de riesgo era tan bajo como decían, se preguntaba, ¿por qué nadie se atrevía a explicárselo con claridad a los futuros compradores del coche? Sospechaba que, de haberlo hecho, muy pocos habrían aceptado ese riesgo a cambio de la comodidad de no conducir.",
          "Consultó la situación con un antiguo profesor de la universidad, quien le advirtió de que denunciar el problema fuera de los cauces internos de la empresa podría acarrearle consecuencias legales serias, dado el acuerdo de confidencialidad que había firmado al ser contratada. Le sugirió, en cambio, que insistiera internamente y documentara cada paso, por si en el futuro necesitaba demostrar que había actuado con responsabilidad.",
          "Durante los días siguientes, Marta hizo justamente eso: envió correos formales, solicitó reuniones, propuso soluciones técnicas concretas que, según sus cálculos, podrían implementarse en cuestión de días sin necesidad de retrasar el lanzamiento por completo. La empresa aceptó estudiar una de sus propuestas, aunque sin comprometerse a aplicarla antes de la fecha prevista.",
          "La noche antes del lanzamiento, Marta se preguntó qué habría hecho si hubiera sabido, al firmar su contrato tres años atrás, que algún día se encontraría en una situación así. Se dijo que, de haberlo sabido, probablemente habría firmado de todos modos, confiando en que nunca llegaría a ese punto; nadie entra en un trabajo pensando en el día en que tendrá que elegir entre su carrera y su conciencia.",
          "El lanzamiento se produjo tal como estaba planeado, con la actualización de software programada para dentro de tres meses. Marta siguió trabajando en la empresa, aunque cada vez que veía uno de aquellos coches circulando por la ciudad, especialmente al atardecer, no podía evitar contener la respiración hasta verlo pasar sin incidentes."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "What flaw did Marta discover in the self-driving system?",
        "options": [
          "The brakes failed completely in cold weather.",
          "At sunset, under a specific light angle, the sensor took an extra fraction of a second to recognize pedestrians.",
          "The GPS system misread street names in foreign languages.",
          "The car's battery caught fire after long charges."
        ],
        "correctIndex": 1,
        "explanation": "She found that \"cuando la luz del atardecer incidía sobre el sensor desde cierto ángulo, el vehículo tardaba una fracción de segundo de más en reconocer a un peatón cruzando la calzada.\""
      },
      {
        "type": "multiple-choice",
        "question": "How did the company's leadership justify continuing with the launch?",
        "options": [
          "They claimed the flaw had already been completely fixed.",
          "They said the risk affected a statistically small percentage of situations and a software update would come in a few months.",
          "They denied the flaw existed at all.",
          "They promised to recall every unit immediately."
        ],
        "correctIndex": 1,
        "explanation": "They tell her \"el problema afectaba a un porcentaje estadísticamente muy bajo de situaciones\" and that an update \"corregiría el fallo en un plazo de unos meses.\""
      },
      {
        "type": "multiple-choice",
        "question": "What did Marta's old professor advise her to do?",
        "options": [
          "Go straight to the press with the information.",
          "Quit her job immediately in protest.",
          "Insist through internal channels and document everything, given the risk of legal consequences from her confidentiality agreement.",
          "Sabotage the software before launch."
        ],
        "correctIndex": 2,
        "explanation": "He warns that going outside the company \"podría acarrearle consecuencias legales serias\" and suggests she \"insistiera internamente y documentara cada paso.\""
      },
      {
        "type": "multiple-choice",
        "question": "How does the story end?",
        "options": [
          "The launch is cancelled at the last minute.",
          "Marta is fired for raising the issue.",
          "The launch proceeds as planned, and Marta anxiously watches the cars on the street, especially at sunset.",
          "Marta successfully sues the company and wins damages."
        ],
        "correctIndex": 2,
        "explanation": "The launch happens \"tal como estaba planeado,\" and afterward, seeing the cars especially at sunset, she \"no podía evitar contener la respiración hasta verlo pasar sin incidentes.\""
      }
    ]
  },
  {
    "slug": "las-palabras-exactas",
    "level": "B2",
    "number": 110,
    "title": "Las palabras exactas",
    "summary": "A court interpreter must decide whether to translate a frightened asylum seeker's words exactly as spoken, even when honesty might hurt his case.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Yolanda llevaba doce años trabajando como intérprete jurada, y en todo ese tiempo había aprendido que su trabajo consistía en desaparecer: convertirse en un canal transparente entre dos idiomas sin dejar rastro de su propia opinión. Aquella mañana le tocaba interpretar la vista de un joven llamado Amir, que solicitaba asilo alegando persecución en su país de origen. Antes de empezar, el abogado del joven le pidió, en voz baja, que fuera \"comprensiva\" con las inconsistencias que pudieran surgir, dado lo traumático del relato.",
          "Desde el principio, Yolanda notó que Amir se contradecía en detalles pequeños: una fecha que no coincidía con la mencionada en su declaración escrita, el nombre de un pueblo que pronunciaba de dos maneras distintas. Sabía, por experiencia, que estas discrepancias eran comunes entre personas que habían vivido situaciones extremas, cuya memoria del tiempo y del espacio quedaba fragmentada por el miedo. También sabía que, para el juez, cada una de esas contradicciones podía interpretarse como un indicio de que el relato era inventado.",
          "En un momento de la audiencia, Amir usó una expresión ambigua en su idioma que podía traducirse de dos maneras distintas: una que reforzaba la coherencia de su testimonio y otra que, aunque igualmente fiel al original, sonaba más vacilante e incierta. Yolanda tuvo que decidir, en cuestión de segundos, cuál de las dos traducciones pronunciar en voz alta ante el tribunal.",
          "Eligió, finalmente, la traducción más literal, aunque sabía que sonaría menos favorable para Amir. No era la primera vez que se enfrentaba a un dilema parecido, y siempre había llegado a la misma conclusión: si empezaba a suavizar las palabras de las personas a las que interpretaba, por compasivas que fueran sus intenciones, dejaría de ser intérprete para convertirse en otra cosa, algo que ya no podría llamarse justicia.",
          "Terminada la sesión, el abogado de Amir se acercó a ella visiblemente molesto, insinuando que una traducción distinta habría beneficiado más al caso de su cliente. Yolanda le explicó, con la calma que dan los años de experiencia, que su función no era ayudar a ganar el caso sino garantizar que el tribunal escuchara exactamente lo que Amir había dicho, ni más generoso ni más duro de lo que realmente era.",
          "Aquella noche, sin embargo, no logró quitarse de la cabeza la posibilidad de que su fidelidad a la letra hubiera perjudicado a un hombre que, por lo que ella misma había podido percibir en su tono y en su mirada, decía la verdad. Se preguntó si existía una diferencia real entre ser fiel a las palabras y ser fiel a la persona que las pronunciaba, y si esa diferencia, en un tribunal, terminaba costando vidas.",
          "Semanas después se enteró, por una compañera, de que a Amir le habían concedido el asilo, gracias sobre todo a pruebas documentales que respaldaban su relato más allá de cualquier palabra pronunciada en la vista. La noticia la alivió, aunque no borró del todo la incomodidad de aquella tarde, la sensación de haber sostenido un principio a costa de la angustia ajena.",
          "Yolanda siguió trabajando como intérprete, y siguió eligiendo, caso tras caso, la traducción más exacta y no la más conveniente. Había llegado a pensar que su tarea nunca sería del todo cómoda, porque la verdad, cuando se traduce con honestidad, rara vez favorece a todo el mundo por igual; lo único que podía ofrecer, pensaba, era que nadie tuviera que dudar jamás de sus palabras."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "What did Amir's lawyer ask Yolanda to do before the hearing began?",
        "options": [
          "To refuse the assignment entirely.",
          "To be \"understanding\" of inconsistencies given the trauma of Amir's story.",
          "To translate everything word for word regardless of tone.",
          "To meet privately with the judge beforehand."
        ],
        "correctIndex": 1,
        "explanation": "The lawyer asks her \"que fuera 'comprensiva' con las inconsistencias que pudieran surgir, dado lo traumático del relato.\""
      },
      {
        "type": "multiple-choice",
        "question": "What dilemma did Yolanda face over the ambiguous expression Amir used?",
        "options": [
          "She had to choose between two equally faithful translations, one sounding more coherent and one more hesitant.",
          "She could not understand the language Amir was speaking.",
          "She had to decide whether to interrupt the judge.",
          "She was asked to invent a translation because Amir had gone silent."
        ],
        "correctIndex": 0,
        "explanation": "The expression \"podía traducirse de dos maneras distintas: una que reforzaba la coherencia de su testimonio y otra... que sonaba más vacilante e incierta,\" and she had to pick one."
      },
      {
        "type": "multiple-choice",
        "question": "Why did Yolanda choose the more literal translation?",
        "options": [
          "She believed Amir was lying and wanted to expose him.",
          "She feared losing her job if she didn't.",
          "She believed that softening people's words would turn her into something other than an interpreter.",
          "The judge explicitly ordered her to use only literal translations."
        ],
        "correctIndex": 2,
        "explanation": "She reasons that \"si empezaba a suavizar las palabras de las personas a las que interpretaba... dejaría de ser intérprete para convertirse en otra cosa.\""
      },
      {
        "type": "multiple-choice",
        "question": "What was the outcome for Amir, and how did Yolanda feel about it?",
        "options": [
          "Amir was denied asylum, and Yolanda regretted her choice permanently.",
          "Amir was granted asylum thanks largely to documentary evidence, which relieved but did not fully settle Yolanda's unease.",
          "Amir dropped his case and left the country.",
          "Yolanda was fired for her literal translation."
        ],
        "correctIndex": 1,
        "explanation": "Amir \"le habían concedido el asilo, gracias sobre todo a pruebas documentales,\" and the news \"la alivió, aunque no borró del todo la incomodidad de aquella tarde.\""
      }
    ]
  },
  {
    "slug": "detras-del-mostrador",
    "level": "B2",
    "number": 111,
    "title": "Detrás del mostrador",
    "summary": "A pharmacist must decide whether to fill a prescription she suspects is being abused by the son of a woman she has known for years.",
    "duration": "9 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Rosa regentaba la farmacia del barrio desde hacía casi veinte años, el tiempo suficiente para conocer a la mayoría de sus clientes por el nombre y hasta por sus achaques. Entre ellos estaba doña Pilar, una mujer mayor a la que Rosa apreciaba especialmente, que llevaba meses llevándole recetas de un ansiolítico fuerte a nombre de su hijo Gonzalo, un chico de veintitantos años que Rosa recordaba haber visto crecer en el mismo barrio.",
          "Al principio, aquellas recetas no le llamaron la atención: eran legítimas, firmadas por un médico de la zona, y la dosis parecía razonable para un tratamiento puntual de ansiedad. Con el paso de los meses, sin embargo, Rosa empezó a notar que las visitas se repetían con una frecuencia mayor de la que el tratamiento debería requerir, y que Gonzalo, cuando aparecía en persona, tenía una mirada apagada que a ella le resultaba dolorosamente familiar por haberla visto antes en otros clientes.",
          "Una tarde, doña Pilar llegó sola a recoger la receta de su hijo, visiblemente nerviosa, y le pidió a Rosa que se la despachara sin hacer preguntas, porque Gonzalo, según dijo, no se encontraba bien para salir de casa. Rosa sintió que se le formaba un nudo en el estómago: sabía que, legalmente, no tenía ninguna obligación de dudar de una receta firmada por un médico, pero también sabía, por lo que había visto en el barrio, que aquel medicamento llevaba meses circulando en cantidades que no encajaban con un tratamiento controlado.",
          "Le explicó a doña Pilar, con toda la delicadeza que pudo reunir, que antes de despachar la receta necesitaba hacer una llamada de verificación al médico que la había firmado, un procedimiento poco habitual pero dentro de sus atribuciones legales. La mujer, lejos de tranquilizarse, se echó a llorar allí mismo, confesándole que temía que su hijo tuviera un problema serio y que aquel medicamento, en las dosis que estaba tomando últimamente, ya no le parecía un tratamiento sino una dependencia.",
          "Rosa se encontró, en ese instante, atrapada entre dos lealtades: la que sentía hacia doña Pilar, a quien no quería ver sufrir más de lo que ya sufría, y la responsabilidad profesional que le impedía convertirse, sin darse cuenta, en cómplice de un abuso que llevaba meses gestándose ante sus propios ojos. Si dispensaba la receta sin más, se decía, quizá estuviera facilitando algo que después ninguna de las dos podría deshacer.",
          "Decidió, finalmente, no despachar el medicamento aquel día y ofrecerle a doña Pilar, en cambio, información sobre un programa municipal de apoyo a familias que atravesaban situaciones de adicción. La mujer se marchó confundida y dolida, sin entender del todo por qué Rosa, después de tantos años de confianza, le negaba algo que un médico ya había autorizado.",
          "Durante los días siguientes, Rosa temió haber roto una relación que había tardado dos décadas en construir, y se preguntó más de una vez si no habría sido más sencillo, y quizá más compasivo en apariencia, limitarse a hacer su trabajo sin cuestionar nada. Pero cada vez que recordaba la mirada apagada de Gonzalo, confirmaba que no habría podido vivir tranquila sabiendo que había mirado hacia otro lado.",
          "Semanas después, doña Pilar volvió a la farmacia, esta vez acompañada de su hijo, más delgado pero con una expresión distinta en los ojos. No mencionaron aquella tarde difícil, pero antes de irse, la mujer le apretó la mano a Rosa un instante de más, un gesto que, sin palabras, decía todo lo que ninguna de las dos se atrevía a poner en voz alta."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "What began to worry Rosa about Gonzalo's prescriptions over time?",
        "options": [
          "The prescriptions were clearly forged.",
          "The visits became more frequent than the treatment should require, and Gonzalo looked increasingly withdrawn.",
          "Doña Pilar stopped paying for the medication.",
          "Gonzalo switched to a different pharmacy entirely."
        ],
        "correctIndex": 1,
        "explanation": "Rosa notices \"que las visitas se repetían con una frecuencia mayor de la que el tratamiento debería requerir\" and that Gonzalo had \"una mirada apagada.\""
      },
      {
        "type": "multiple-choice",
        "question": "What did doña Pilar confess when Rosa said she needed to verify the prescription?",
        "options": [
          "That the prescription had actually been stolen.",
          "That she feared her son had a serious problem and the medication now seemed like dependency rather than treatment.",
          "That Gonzalo no longer lived with her.",
          "That she had never actually met the prescribing doctor."
        ],
        "correctIndex": 1,
        "explanation": "She confesses she feared Gonzalo had a serious problem and that the medication \"ya no le parecía un tratamiento sino una dependencia.\""
      },
      {
        "type": "multiple-choice",
        "question": "What did Rosa ultimately decide to do that day?",
        "options": [
          "She filled the prescription as usual to avoid conflict.",
          "She called the police immediately.",
          "She declined to dispense the medication and offered information about a municipal addiction-support program instead.",
          "She permanently banned doña Pilar from the pharmacy."
        ],
        "correctIndex": 2,
        "explanation": "Rosa decided \"no despachar el medicamento aquel día\" and instead offered \"información sobre un programa municipal de apoyo a familias que atravesaban situaciones de adicción.\""
      },
      {
        "type": "multiple-choice",
        "question": "How does the story suggest things had changed when doña Pilar and Gonzalo returned weeks later?",
        "options": [
          "They came to file a formal complaint against Rosa.",
          "Gonzalo looked thinner but had a different expression in his eyes, and doña Pilar gave Rosa's hand a meaningful squeeze.",
          "They had moved away and were saying goodbye.",
          "Gonzalo had become the new pharmacy assistant."
        ],
        "correctIndex": 1,
        "explanation": "Gonzalo appears \"más delgado pero con una expresión distinta en los ojos,\" and doña Pilar \"le apretó la mano a Rosa un instante de más,\" a wordless gesture of gratitude."
      }
    ]
  },
  {
    "slug": "la-lista-de-espera",
    "level": "B2",
    "number": 112,
    "title": "La lista de espera",
    "summary": "An emergency room doctor, forced to choose who gets treated first during a mass emergency, carries one decision home with her for years.",
    "duration": "9 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "La doctora Beatriz Solano llevaba quince años trabajando en urgencias cuando ocurrió el accidente que cambiaría para siempre su manera de entender su profesión. Un autobús escolar había colisionado contra un camión en la autopista cercana, y en cuestión de minutos el hospital se vio desbordado por heridos que llegaban con una rapidez para la que ningún protocolo parecía suficiente. Beatriz, como médica de mayor experiencia en el turno, tuvo que asumir la tarea más ingrata de todas: decidir, con información incompleta y segundos de margen, a quién atender primero.",
          "El sistema de triaje que había aprendido en la universidad establecía criterios claros sobre el papel: se atendía primero a quienes tenían más posibilidades de sobrevivir con una intervención inmediata, dejando para después a los casos demasiado graves como para salvarse y a los que, aun sin tratamiento urgente, podían esperar. En la teoría, el método parecía frío pero justo; en la práctica, aquella tarde, cada decisión implicaba mirar a los ojos a un padre o a una madre y elegir, en cuestión de segundos, qué niño pasaba primero.",
          "Entre los heridos llegaron dos niños casi al mismo tiempo, con lesiones de gravedad similar, y solo un quirófano disponible de inmediato. Beatriz tuvo que decidir, basándose en un examen de apenas un minuto, cuál de los dos tenía mayores probabilidades de sobrevivir a la cirugía. Escogió al niño cuyos signos vitales, aunque débiles, parecían más estables, sabiendo que esa decisión podía significar, para el otro, la diferencia entre vivir y no hacerlo.",
          "El segundo niño murió antes de que pudiera intervenirlo un segundo equipo que se organizó apenas unos minutos después. Beatriz nunca llegó a saber con certeza si una decisión distinta habría cambiado el desenlace, y esa incertidumbre, más que la propia muerte del niño, fue lo que la acompañó durante los años siguientes cada vez que cerraba los ojos.",
          "Los protocolos del hospital, y también sus colegas, coincidieron en que había actuado correctamente dadas las circunstancias, que ningún criterio distinto habría garantizado un resultado diferente, y que cuestionarse decisiones tomadas bajo semejante presión no conducía a nada bueno. Beatriz escuchaba estos argumentos y los entendía racionalmente, pero sabía que ninguna explicación lógica podría borrar la imagen de aquel padre esperando noticias que nunca serían las que deseaba.",
          "Con los años, siguió trabajando en urgencias, y aprendió a convivir con la certeza de que su profesión la obligaría, más de una vez, a tomar decisiones imposibles sin el consuelo de saber si habían sido las correctas. Empezó a impartir formación a médicos residentes sobre triaje en situaciones de catástrofe, no porque hubiera encontrado respuestas definitivas, sino precisamente porque sabía, mejor que nadie, cuánto pesaban esas decisiones cuando no había tiempo para dudar.",
          "En una de esas sesiones, un residente le preguntó, con la inocencia de quien todavía no ha vivido una situación así, cómo lograba decidir con tanta rapidez sin quedarse paralizada por el miedo a equivocarse. Beatriz respondió que nunca había dejado de sentir ese miedo, y que probablemente sería mala señal el día en que dejara de sentirlo; lo único que había aprendido era a actuar de todos modos, porque la alternativa —no decidir— también era, a su manera, una decisión, y casi siempre la peor de todas.",
          "Aquella noche, de camino a casa, Beatriz pasó, como hacía cada año por las mismas fechas, frente al pequeño monumento que la ciudad había levantado en memoria de las víctimas del accidente. No se detuvo mucho tiempo, pero antes de seguir su camino, permitió que el recuerdo del segundo niño la visitara una vez más, no como una culpa que debía cargar en silencio, sino como el precio, ya asumido, de haber elegido seguir ejerciendo un oficio que a veces exigía lo imposible."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "What impossible task fell to Dr. Beatriz Solano during the bus accident?",
        "options": [
          "Driving the ambulance to the accident scene herself.",
          "Deciding, with incomplete information and only seconds, who would be treated first.",
          "Notifying all the families of the victims personally.",
          "Training new doctors on the spot during the emergency."
        ],
        "correctIndex": 1,
        "explanation": "As the most experienced doctor, she had to \"decidir, con información incompleta y segundos de margen, a quién atender primero.\""
      },
      {
        "type": "multiple-choice",
        "question": "What happened with the two children who arrived with similar injuries?",
        "options": [
          "Both survived after Beatriz found a second operating room.",
          "Beatriz chose the one with more stable vital signs for the only available operating room, and the other child died before a second team could intervene.",
          "The hospital transferred both to another facility.",
          "Beatriz refused to choose and let a colleague decide instead."
        ],
        "correctIndex": 1,
        "explanation": "She chose \"al niño cuyos signos vitales, aunque débiles, parecían más estables,\" and \"el segundo niño murió antes de que pudiera intervenirlo un segundo equipo.\""
      },
      {
        "type": "multiple-choice",
        "question": "What did Beatriz say to the resident who asked how she managed to decide so quickly?",
        "options": [
          "That she had developed a foolproof formula that removed all doubt.",
          "That she still felt fear, but had learned to act anyway, since not deciding was itself usually the worst decision.",
          "That she avoided triage situations whenever possible after that day.",
          "That the hospital had since banned her from making triage decisions."
        ],
        "correctIndex": 1,
        "explanation": "She admits \"nunca había dejado de sentir ese miedo\" and that she learned \"a actuar de todos modos, porque la alternativa —no decidir— también era, a su manera, una decisión, y casi siempre la peor de todas.\""
      },
      {
        "type": "multiple-choice",
        "question": "How does Beatriz relate to the memory of the second child years later?",
        "options": [
          "She has completely forgotten the incident.",
          "She still visits the child's grave every week in deep guilt.",
          "She allows the memory to visit her, viewing it as the accepted cost of continuing in her profession rather than a guilt to hide.",
          "She quit medicine entirely because of it."
        ],
        "correctIndex": 2,
        "explanation": "She lets the memory visit her, \"no como una culpa que debía cargar en silencio, sino como el precio, ya asumido, de haber elegido seguir ejerciendo un oficio que a veces exigía lo imposible.\""
      }
    ]
  },
  {
    "slug": "el-nombre-equivocado",
    "level": "B2",
    "number": 113,
    "title": "El nombre equivocado",
    "summary": "A journalist receives leaked documents for one story, but they reveal something damaging about a man who has nothing to do with it.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Nadia trabajaba como periodista de investigación desde hacía diez años, y sabía que la mayoría de las filtraciones que llegaban a su correo no eran tan valiosas como prometían ser. Sin embargo, la carpeta que recibió aquella mañana, enviada por una fuente anónima dentro del ayuntamiento, sí contenía lo que llevaba meses buscando: pruebas claras de que un concejal había desviado fondos públicos destinados a un programa de vivienda social.",
          "Mientras revisaba, documento por documento, el material para confirmar su autenticidad, encontró algo que no esperaba: entre los correos electrónicos filtrados había una conversación privada, ajena por completo al caso de corrupción, en la que un funcionario de nivel medio —un hombre llamado Ricardo, sin ninguna relación con el escándalo— le confesaba a un amigo que estaba atravesando una crisis personal grave y que temía perder la custodia de sus hijos.",
          "Nadia sabía que aquella conversación no tenía ningún valor periodístico para la historia que estaba construyendo, pero también sabía que, si publicaba la carpeta completa como prueba documental —algo que algunos medios hacían para reforzar la credibilidad de sus filtraciones—, la vida privada de Ricardo quedaría expuesta sin que él hubiera hecho nada que justificara semejante exposición.",
          "Consultó la situación con su editor, quien le sugirió que publicara los documentos relevantes tal como estaban, argumentando que separar y editar archivos filtrados podía generar dudas sobre la manipulación de las pruebas, y que, en cualquier caso, la responsabilidad de lo que contuvieran los documentos no era del periódico sino de quienes los habían escrito originalmente. Nadia entendía el argumento, pero no terminaba de convencerla.",
          "Pasó una noche entera pensando en Ricardo, un hombre al que nunca había conocido y que probablemente ni siquiera se enteraría de que su nombre había estado a punto de aparecer en un artículo sobre corrupción municipal sin tener nada que ver con ella. Se preguntó qué habría sentido si hubiera sido al revés, si algún periodista hubiera decidido publicar un momento vulnerable de su propia vida solo porque apareció, por azar, en el mismo archivo que una noticia importante.",
          "Decidió, finalmente, redactar el artículo citando y adjuntando únicamente los documentos directamente relacionados con el concejal investigado, y eliminar cualquier referencia a Ricardo o a su conversación privada, aunque eso significara renunciar a parte del respaldo documental que su editor consideraba más contundente. Sabía que, técnicamente, podría haber publicado todo sin infringir ninguna ley, pero también sabía que la ética de su oficio no se limitaba a lo que la ley permitía.",
          "El artículo se publicó y tuvo el impacto que Nadia esperaba: el concejal fue investigado formalmente y, semanas después, presentó su dimisión. Nadie mencionó jamás el nombre de Ricardo, y Nadia nunca sabría si él llegó a enterarse de lo cerca que había estado su vida privada de convertirse en parte de una noticia ajena.",
          "Su editor, al ver el impacto positivo del artículo, no volvió a mencionar su desacuerdo inicial sobre los documentos omitidos. Nadia, por su parte, guardó aquella carpeta completa en un archivo cifrado que nunca compartió con nadie, convencida de que algunas decisiones periodísticas no se medían por el resultado obtenido, sino por lo que uno estaba dispuesto a no publicar, aun teniendo el derecho de hacerlo."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "What did Nadia find in the leaked documents besides evidence of corruption?",
        "options": [
          "Evidence that a second council member was also involved.",
          "A private conversation of an unrelated official, Ricardo, about a personal family crisis.",
          "Proof that the anonymous source had fabricated everything.",
          "Her own name mentioned in a threatening message."
        ],
        "correctIndex": 1,
        "explanation": "She found \"una conversación privada, ajena por completo al caso de corrupción, en la que un funcionario de nivel medio... le confesaba a un amigo que estaba atravesando una crisis personal grave.\""
      },
      {
        "type": "multiple-choice",
        "question": "What did Nadia's editor suggest she do?",
        "options": [
          "Drop the story entirely to avoid any risk.",
          "Publish the documents as they were, arguing that editing leaked files could raise doubts about manipulation.",
          "Contact Ricardo directly for comment before publishing.",
          "Publish only Ricardo's conversation as a separate story."
        ],
        "correctIndex": 1,
        "explanation": "The editor suggested publishing \"los documentos relevantes tal como estaban,\" arguing that editing them \"podía generar dudas sobre la manipulación de las pruebas.\""
      },
      {
        "type": "multiple-choice",
        "question": "What did Nadia ultimately decide regarding Ricardo's information?",
        "options": [
          "She published everything exactly as her editor suggested.",
          "She removed any reference to Ricardo, even though it meant losing some supporting documentation.",
          "She contacted Ricardo to ask for his permission first.",
          "She sold the information to another outlet."
        ],
        "correctIndex": 1,
        "explanation": "She decided to \"eliminar cualquier referencia a Ricardo o a su conversación privada, aunque eso significara renunciar a parte del respaldo documental.\""
      },
      {
        "type": "multiple-choice",
        "question": "What principle does the story's ending emphasize about Nadia's decision?",
        "options": [
          "That good journalism always requires publishing every available document.",
          "That some journalistic decisions are measured not by the outcome, but by what one chooses not to publish even when legally entitled to.",
          "That Nadia regretted protecting Ricardo's privacy in the end.",
          "That the editor eventually punished her for the omission."
        ],
        "correctIndex": 1,
        "explanation": "The story closes on the idea that \"algunas decisiones periodísticas no se medían por el resultado obtenido, sino por lo que uno estaba dispuesto a no publicar, aun teniendo el derecho de hacerlo.\""
      }
    ]
  },
  {
    "slug": "la-firma-pendiente",
    "level": "B2",
    "number": 114,
    "title": "La firma pendiente",
    "summary": "A young engineer who witnessed a workplace accident must choose between staying silent, as his boss urges, and signing a statement that could cost him his job.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Ismael llevaba apenas ocho meses trabajando como ingeniero de obra cuando presenció el accidente que lo pondría a prueba de una manera para la que ningún título universitario lo había preparado. Un andamio mal asegurado cedió en una de las plantas superiores del edificio en construcción, y un compañero, Fabián, cayó varios metros hasta quedar gravemente herido. Ismael, que se encontraba a apenas unos metros de distancia, vio con claridad que el andamio no cumplía con las medidas de seguridad exigidas por la normativa.",
          "Al día siguiente del accidente, el jefe de obra lo llamó a su oficina y, con un tono que pretendía sonar comprensivo, le explicó que la investigación interna necesitaba una versión de los hechos que no comprometiera a la empresa más de lo estrictamente necesario. Le sugirió, sin decirlo del todo abiertamente, que en su declaración se limitara a mencionar que el andamio parecía en condiciones normales antes de la caída, evitando cualquier referencia a las inspecciones de seguridad que se habían saltado semanas atrás.",
          "Ismael sabía perfectamente que aquello no era cierto: había participado, apenas diez días antes, en una reunión donde se había señalado que aquel mismo andamio necesitaba refuerzos que nunca llegaron a instalarse por motivos de presupuesto. Firmar una declaración que omitiera ese detalle no solo sería una mentira, sino que además podría dejar a la empresa libre de responsabilidad en un caso donde, a su juicio, sí la tenía.",
          "Durante los días siguientes, varios compañeros le insinuaron, con más o menos delicadeza, que declarar en contra de la empresa podría costarle el puesto, y que en un sector tan pequeño como el de la construcción local, un ingeniero conocido por \"crear problemas\" tendría dificultades para encontrar trabajo en otro lugar. Ismael, que acababa de empezar a pagar la hipoteca de su primer piso, sabía que aquellas advertencias no eran exageradas.",
          "Habló con Fabián, que se recuperaba lentamente en el hospital, y descubrió que este ni siquiera sabía que la empresa estaba presionando a los testigos para que modificaran sus declaraciones. Fabián le pidió, con la voz débil pero firme, que dijera la verdad, porque de lo contrario ninguna medida de seguridad cambiaría después del accidente y algún día alguien más podría no tener tanta suerte como para sobrevivir a una caída así.",
          "Aquella conversación terminó de convencer a Ismael de lo que, en el fondo, ya sabía que tenía que hacer. Redactó su declaración con todos los detalles que había presenciado, incluida la reunión sobre los refuerzos pendientes, y la entregó a los inspectores de trabajo sin pasar antes por la revisión que le había sugerido su jefe. Sabía que, al hacerlo, estaba renunciando a la tranquilidad de seguir siendo, a ojos de la empresa, un empleado sin complicaciones.",
          "Como había anticipado, las semanas siguientes fueron incómodas: lo apartaron de los proyectos más importantes, y más de un compañero dejó de saludarlo con la misma cordialidad de antes. La empresa fue sancionada por las autoridades laborales, aunque la multa resultó, a ojos de Ismael, desproporcionadamente pequeña comparada con la gravedad de lo ocurrido.",
          "Seis meses después, Ismael decidió dejar la empresa por su propia cuenta, antes de que encontraran una excusa formal para despedirlo. No se arrepentía de lo que había hecho, aunque tampoco podía decir que se sintiera como un héroe; se sentía, sobre todo, como alguien que había hecho lo único que podía hacer para seguir mirándose al espejo sin apartar la vista."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "What did the site manager suggest Ismael do in his statement about the accident?",
        "options": [
          "Refuse to give any statement at all.",
          "Say the scaffolding seemed normal, omitting the skipped safety reinforcements.",
          "Blame Fabián for his own fall.",
          "Report the incident directly to the press."
        ],
        "correctIndex": 1,
        "explanation": "The manager suggested he state \"que el andamio parecía en condiciones normales antes de la caída, evitando cualquier referencia a las inspecciones de seguridad que se habían saltado.\""
      },
      {
        "type": "multiple-choice",
        "question": "What did Fabián ask Ismael to do when he visited him in the hospital?",
        "options": [
          "To keep quiet to protect both their jobs.",
          "To tell the truth, so that safety measures would actually change afterward.",
          "To sue the company on his behalf.",
          "To resign immediately in solidarity with him."
        ],
        "correctIndex": 1,
        "explanation": "Fabián \"le pidió... que dijera la verdad, porque de lo contrario ninguna medida de seguridad cambiaría después del accidente.\""
      },
      {
        "type": "multiple-choice",
        "question": "What did Ismael ultimately include in his official statement?",
        "options": [
          "Only what his boss had suggested, to protect his job.",
          "All the details he witnessed, including the meeting about the reinforcements that were never installed.",
          "A vague statement that avoided taking any side.",
          "A statement blaming the equipment manufacturer only."
        ],
        "correctIndex": 1,
        "explanation": "He wrote his statement \"con todos los detalles que había presenciado, incluida la reunión sobre los refuerzos pendientes.\""
      },
      {
        "type": "multiple-choice",
        "question": "What happened to Ismael in the months after he gave his honest statement?",
        "options": [
          "He was promoted for his honesty.",
          "He was sidelined from major projects, treated coldly by colleagues, and eventually left the company on his own terms.",
          "He was immediately fired and blacklisted from the industry.",
          "Nothing changed at all in his daily work."
        ],
        "correctIndex": 1,
        "explanation": "He was \"apartado de los proyectos más importantes,\" colleagues grew distant, and \"seis meses después, Ismael decidió dejar la empresa por su propia cuenta.\""
      }
    ]
  },
  {
    "slug": "las-cuentas-pendientes",
    "level": "B2",
    "number": 115,
    "title": "Las cuentas pendientes",
    "summary": "A woman whose job is to close the digital accounts of the dead finds a message that was never meant to reach anyone else.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Cristina trabajaba desde hacía dos años en el departamento de \"gestión de cuentas post mortem\" de una gran empresa de tecnología, un puesto que ella misma describía, cuando alguien le preguntaba, como \"archivar vidas ajenas\". Su tarea consistía en tramitar las solicitudes de familiares que pedían acceder, descargar o eliminar las cuentas digitales de parientes fallecidos: fotografías, correos electrónicos, conversaciones que quedaban suspendidas para siempre en la bandeja de entrada de alguien que ya no podía leerlas.",
          "Había aprendido, con el tiempo, a mantener cierta distancia emocional frente a lo que veía, aunque algunos casos se le quedaban grabados más que otros. El de Marisol Rangel fue uno de esos casos: una mujer de cuarenta y tres años cuya hija le había solicitado el acceso completo a su cuenta de correo, alegando que quería conservar los mensajes como recuerdo antes de que la empresa los eliminara definitivamente, según el plazo habitual de un año tras la defunción.",
          "Antes de transferir el archivo completo, el protocolo interno exigía una revisión rápida para descartar contenido sensible que la empresa prefería filtrar por razones legales. Fue durante esa revisión cuando Cristina encontró un borrador sin enviar, redactado apenas dos días antes de la muerte de Marisol, dirigido a su hija con un asunto que decía simplemente: \"Cosas que nunca supe cómo decirte\".",
          "Cristina sabía que no debía leer el contenido de los mensajes que gestionaba, una norma tanto ética como contractual que había respetado siempre sin esfuerzo. Sin embargo, aquel borrador, por estar sin enviar, ocupaba un espacio ambiguo: ¿pertenecía ya a la hija que lo había solicitado, o seguía siendo, en cierto modo, un pensamiento privado que Marisol nunca había decidido compartir?",
          "Pasó varios minutos con el cursor suspendido sobre el archivo, debatiéndose entre dos certezas contradictorias: por un lado, la hija tenía derecho legal a toda la cuenta, borrador incluido; por otro, algo en Cristina le decía que un mensaje nunca enviado era, precisamente por eso, un mensaje que su autora había decidido, en algún momento, no compartir todavía.",
          "Consultó el caso con su supervisor, sin mencionar el contenido específico del borrador, preguntando si existía algún protocolo para mensajes no enviados. Su supervisor le respondió que, legalmente, la cuenta completa pertenecía ahora a la heredera designada, y que no correspondía a la empresa decidir qué merecía o no ser entregado. La respuesta, aunque correcta desde el punto de vista legal, no resolvió la incomodidad que Cristina sentía.",
          "Finalmente, transfirió el archivo completo, incluido el borrador, tal como establecía el protocolo, aunque no pudo evitar preguntarse, durante semanas, qué habría sentido la hija de Marisol al leer, quizás por primera vez, palabras que su madre nunca llegó a pronunciar en voz alta. Se preguntó si aquel mensaje habría traído consuelo o si, por el contrario, habría abierto una herida que la hija ni siquiera sabía que existía.",
          "Nunca lo supo con certeza, porque el trabajo de Cristina terminaba justo ahí, en el instante en que pulsaba \"enviar\" en la solicitud de transferencia. Aprendió, con este caso, que su oficio no consistía solo en archivar vidas ajenas, como solía bromear, sino en decidir, una y otra vez, dónde terminaba el derecho de los vivos y dónde empezaba el silencio que los muertos, a veces, habían elegido dejar sin terminar."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "What was Cristina's job at the technology company?",
        "options": [
          "Designing new social media features.",
          "Processing families' requests to access, download, or delete the digital accounts of deceased relatives.",
          "Writing obituaries for a news website.",
          "Repairing corrupted digital files."
        ],
        "correctIndex": 1,
        "explanation": "Her job was to \"tramitar las solicitudes de familiares que pedían acceder, descargar o eliminar las cuentas digitales de parientes fallecidos.\""
      },
      {
        "type": "multiple-choice",
        "question": "What did Cristina find while reviewing Marisol's account?",
        "options": [
          "Evidence of a crime that needed to be reported to police.",
          "An unsent draft written days before Marisol's death, addressed to her daughter.",
          "Proof that the account had already been deleted.",
          "A message revealing Marisol was still alive."
        ],
        "correctIndex": 1,
        "explanation": "She found \"un borrador sin enviar, redactado apenas dos días antes de la muerte de Marisol, dirigido a su hija.\""
      },
      {
        "type": "multiple-choice",
        "question": "What made the unsent draft feel different to Cristina from the rest of the account?",
        "options": [
          "It was written in a language Cristina didn't understand.",
          "Because it was never sent, it seemed to occupy an ambiguous space between belonging to the daughter and remaining a private, unshared thought.",
          "It was password-protected separately from the rest of the account.",
          "It contained financial information rather than personal content."
        ],
        "correctIndex": 1,
        "explanation": "The text asks whether the draft \"pertenecía ya a la hija... o seguía siendo, en cierto modo, un pensamiento privado que Marisol nunca había decidido compartir.\""
      },
      {
        "type": "multiple-choice",
        "question": "What did Cristina ultimately do with the draft, and how does the story end?",
        "options": [
          "She deleted it against protocol to protect Marisol's privacy.",
          "She transferred the complete file including the draft, as protocol required, and was left wondering about its effect without ever knowing.",
          "She sent it herself as a final message to the daughter.",
          "She resigned rather than make the decision."
        ],
        "correctIndex": 1,
        "explanation": "She \"transfirió el archivo completo, incluido el borrador, tal como establecía el protocolo,\" and \"nunca lo supo con certeza\" what effect it had, since her job ended there."
      }
    ]
  },
  {
    "slug": "cartas-para-despues",
    "level": "B2",
    "number": 116,
    "title": "Cartas para después",
    "summary": "A woman with a terminal diagnosis debates whether writing messages an app will deliver after her death is a gift to her family or a way of controlling them from beyond it.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "A Susana le diagnosticaron un cáncer avanzado tres meses antes de cumplir cincuenta años, y desde entonces vivía instalada en una especie de paréntesis extraño, donde cada gesto cotidiano parecía cargado de un significado que antes no tenía. Fue su sobrina quien le habló por primera vez de una aplicación que permitía programar mensajes —textos, audios, incluso vídeos— para que se entregaran automáticamente a personas concretas en fechas futuras, mucho después de que el remitente hubiera muerto.",
          "La idea le pareció, al principio, reconfortante: podría escribirle a su hijo Mateo, que entonces tenía catorce años, mensajes para su graduación, su primer trabajo, su boda, momentos importantes que ella sabía que no viviría junto a él. Durante varias semanas se dedicó a redactar borradores, tachando y reescribiendo frases que nunca le parecían suficientemente precisas para lo que quería transmitir.",
          "Sin embargo, cuanto más avanzaba en la tarea, más la asaltaba una duda incómoda: ¿tenía derecho a decidir, desde su propia muerte, qué palabras acompañarían a Mateo en momentos que ella ni siquiera podía imaginar con certeza? Se preguntó si aquellos mensajes serían un consuelo genuino o si, por el contrario, condenarían a su hijo a vivir cada etapa importante de su vida esperando la voz de una madre ausente, incapaz de vivir esos momentos con libertad plena.",
          "Le planteó la duda a su marido, Ernesto, quien le confesó que a él, personalmente, le costaría recibir un mensaje programado de una persona ya fallecida, porque sentía que rompería, cada vez, la paz que hubiera logrado construir hasta entonces. \"Cada carta sería reabrir la herida en la fecha que tú elegiste, no en la que yo estuviera listo\", le dijo, con una honestidad que a Susana le dolió pero que no pudo rebatir del todo.",
          "Durante una temporada dejó el proyecto a un lado, incapaz de decidir si continuar o abandonarlo del todo. Habló también con su terapeuta, quien le sugirió que quizás la pregunta correcta no era si debía escribir los mensajes, sino para quién los estaba escribiendo realmente: si para dar consuelo a Mateo o para calmar su propio miedo a desaparecer sin dejar rastro.",
          "Aquella pregunta la acompañó durante semanas, hasta que llegó a una especie de acuerdo consigo misma: seguiría escribiendo, pero solo mensajes breves y abiertos, sin fechas de entrega demasiado precisas ni instrucciones sobre cómo debía sentirse Mateo al recibirlos. Prefería dejarle una voz disponible, no una voz que se impusiera en momentos que no le correspondía dictar desde la distancia de la muerte.",
          "Grabó, finalmente, cinco mensajes cortos, cada uno programado para entregarse solo si Mateo, ya adulto, decidía activamente solicitarlos a través de la aplicación, en lugar de recibirlos de manera automática en fechas prefijadas. Le pareció la única forma de dejarle algo sin quitarle, al mismo tiempo, el derecho a vivir su propio duelo sin la voz de su madre programada de antemano.",
          "Susana murió siete meses después, y Mateo, ya con dieciséis años, tardó casi dos más en decidirse a abrir el primero de los mensajes. Cuando por fin lo hizo, no encontró instrucciones ni fechas ni un guion para su vida futura, sino simplemente la voz de su madre diciéndole que confiaba en que, decidiera lo que decidiera hacer con su vida, encontraría su propio camino sin necesitar que nadie, ni siquiera ella, se lo señalara desde ningún lugar."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "What did the app Susana's niece told her about allow people to do?",
        "options": [
          "Store photos in a secure cloud archive.",
          "Schedule messages to be delivered automatically to specific people at future dates, even after the sender's death.",
          "Chat live with an AI version of a deceased relative.",
          "Send anonymous letters to strangers."
        ],
        "correctIndex": 1,
        "explanation": "The app allowed her to \"programar mensajes... para que se entregaran automáticamente a personas concretas en fechas futuras, mucho después de que el remitente hubiera muerto.\""
      },
      {
        "type": "multiple-choice",
        "question": "What concern did Susana's husband, Ernesto, raise about the scheduled messages?",
        "options": [
          "That the app was too expensive to justify.",
          "That receiving a message on a date chosen by Susana, not by the recipient, would reopen a wound at the wrong time.",
          "That Mateo was too young to understand the messages.",
          "That the technology was unreliable and messages might get lost."
        ],
        "correctIndex": 1,
        "explanation": "Ernesto tells her \"cada carta sería reabrir la herida en la fecha que tú elegiste, no en la que yo estuviera listo.\""
      },
      {
        "type": "multiple-choice",
        "question": "What question did Susana's therapist suggest she should really be asking herself?",
        "options": [
          "Whether Mateo would forgive her for dying.",
          "Whether she was writing the messages for Mateo's comfort or to calm her own fear of disappearing without a trace.",
          "Whether the app was secure enough to protect her privacy.",
          "Whether she should tell Mateo about the diagnosis at all."
        ],
        "correctIndex": 1,
        "explanation": "The therapist suggests the real question was \"para quién los estaba escribiendo realmente: si para dar consuelo a Mateo o para calmar su propio miedo a desaparecer sin dejar rastro.\""
      },
      {
        "type": "multiple-choice",
        "question": "What compromise did Susana ultimately reach about the messages?",
        "options": [
          "She abandoned the project entirely.",
          "She recorded five messages that would only be delivered if Mateo actively requested them as an adult, rather than automatically.",
          "She had Ernesto choose when Mateo would receive each message.",
          "She recorded a single long message covering every future milestone."
        ],
        "correctIndex": 1,
        "explanation": "She recorded messages \"programado para entregarse solo si Mateo, ya adulto, decidía activamente solicitarlos,\" rather than at fixed automatic dates."
      }
    ]
  },
  {
    "slug": "la-llave-que-no-abria-nada",
    "level": "B2",
    "number": 117,
    "title": "La llave que no abría nada",
    "summary": "A man returns to the apartment where he grew up, now home to strangers, to retrieve something he hid in the walls as a boy.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Álvaro no había vuelto al piso de la calle Lavapiés desde que su familia se mudó, hacía ya casi treinta años, tras la muerte de su padre. Fue durante la mudanza de su propia madre a una residencia, mientras vaciaban cajas olvidadas en el trastero, cuando encontró un dibujo infantil suyo con una nota escrita al dorso, de su puño y letra de niño de nueve años: \"Aquí escondí el tesoro, detrás del enchufe de mi cuarto\".",
          "Se rió al principio, pensando que se trataba de algún juego olvidado sin mayor importancia, pero cuanto más lo pensaba, más le costaba recordar qué había escondido exactamente detrás de aquel enchufe. Algo en la vaguedad del recuerdo, en la imposibilidad de reconstruirlo del todo, despertó en él una curiosidad que no esperaba sentir a los treinta y ocho años por un secreto de infancia.",
          "Consiguió, a través del antiguo portero del edificio, que aún trabajaba allí, el contacto de los actuales inquilinos del piso, una pareja joven que, para su sorpresa, aceptó con curiosidad recibirlo una tarde para que pudiera ver \"su antiguo cuarto\". Álvaro subió las escaleras con una sensación extraña, como si estuviera a punto de entrar en un lugar que existía simultáneamente en dos tiempos distintos.",
          "El piso apenas se parecía al que recordaba: habían tirado un tabique, cambiado el suelo, pintado las paredes de colores que él nunca habría elegido. Solo al entrar en lo que había sido su habitación reconoció, con un golpe de emoción inesperado, la disposición de la ventana y el ángulo exacto en que entraba la luz por las tardes, algo que ningún cambio de decoración había logrado borrar del todo.",
          "Con permiso de los inquilinos, y ayudado por un pequeño destornillador que le prestaron, retiró con cuidado el enchufe que, para su alivio, seguía en el mismo lugar de siempre. Detrás, envuelto en un plástico ya amarillento, encontró una caja de cerillas que contenía, no un tesoro en el sentido que su yo adulto había imaginado, sino tres canicas gastadas, un botón dorado y una fotografía pequeña de su padre sonriendo, tomada un verano que Álvaro apenas recordaba.",
          "Se quedó un momento en silencio, sentado en el suelo de aquella habitación ajena, sosteniendo objetos que su padre, muerto hacía treinta años, jamás había sabido que su hijo consideraba tan valiosos como para esconderlos. Pensó que, si su padre hubiera sabido de aquel escondite, probablemente le habría parecido un gesto entrañable y algo ridículo, como casi todo lo que hacían los niños con las cosas que más querían.",
          "La pareja que vivía ahora en el piso, conmovida por la escena, le ofreció quedarse un rato más, aunque Álvaro prefirió no abusar de su amabilidad. Antes de irse, les preguntó si podía hacer una última foto de la habitación, esta vez con su teléfono, no como quien guarda un tesoro sino como quien simplemente quiere conservar la certeza de haber estado ahí una vez más.",
          "De vuelta en la calle, con la cajita de cerillas guardada en el bolsillo del abrigo, Álvaro comprendió que lo que había ido a buscar no era, en realidad, ningún objeto escondido tras un enchufe, sino la confirmación de que ciertos lugares, aunque cambien de dueños y de paredes, siguen guardando, en algún rincón invisible, la forma exacta de quienes fuimos alguna vez."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "What led Álvaro to return to his childhood apartment?",
        "options": [
          "He wanted to buy the apartment back from its current owners.",
          "He found a childhood drawing with a note about a hidden treasure behind an electrical outlet.",
          "He was asked to appraise the building's value for a sale.",
          "His mother asked him to retrieve important documents."
        ],
        "correctIndex": 1,
        "explanation": "He found a note reading \"Aquí escondí el tesoro, detrás del enchufe de mi cuarto,\" written in his own childhood handwriting."
      },
      {
        "type": "multiple-choice",
        "question": "What did Álvaro recognize as unchanged when he entered his old bedroom?",
        "options": [
          "The exact same furniture was still there.",
          "The position of the window and the way afternoon light entered the room.",
          "A mural he had painted as a child.",
          "The wallpaper his mother had chosen."
        ],
        "correctIndex": 1,
        "explanation": "He recognized \"la disposición de la ventana y el ángulo exacto en que entraba la luz por las tardes,\" something no redecoration had erased."
      },
      {
        "type": "multiple-choice",
        "question": "What did Álvaro find behind the outlet?",
        "options": [
          "A significant sum of hidden money.",
          "Old marbles, a golden button, and a small photo of his father smiling.",
          "A letter his father had written to him before dying.",
          "Nothing at all — the hiding spot was empty."
        ],
        "correctIndex": 1,
        "explanation": "He found \"tres canicas gastadas, un botón dorado y una fotografía pequeña de su padre sonriendo.\""
      },
      {
        "type": "multiple-choice",
        "question": "What did Álvaro conclude he had really come to find?",
        "options": [
          "Financial compensation for his family's old belongings.",
          "Not a hidden object, but confirmation that certain places still hold the shape of who we once were.",
          "Proof that his childhood memories had been false.",
          "A reason to convince his mother to move back to the neighborhood."
        ],
        "correctIndex": 1,
        "explanation": "He understood that what he'd come for was \"la confirmación de que ciertos lugares... siguen guardando, en algún rincón invisible, la forma exacta de quienes fuimos alguna vez.\""
      }
    ]
  },
  {
    "slug": "las-fotos-que-no-recordaba",
    "level": "B2",
    "number": 118,
    "title": "Las fotos que no recordaba",
    "summary": "After an accident damages her memory, a photographer must decide whether to trust the pictures she took or the fragments of memory that contradict them.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Desde el accidente de coche, ocurrido hacía ya ocho meses, Renata había perdido de manera irregular fragmentos enteros de los tres años anteriores al golpe, un tipo de amnesia que los médicos le habían explicado con palabras técnicas que ella apenas retenía. Lo más extraño, según decía, no era no recordar, sino descubrir, a través de sus propias fotografías, que había vivido experiencias de las que no conservaba ni rastro emocional alguno.",
          "Como fotógrafa profesional, Renata había documentado casi obsesivamente su propia vida durante esos años perdidos, de modo que su cámara —y no su memoria— se convirtió en la única fuente fiable de lo que le había ocurrido. Pasaba horas revisando carpetas enteras de imágenes, buscando reconocerse en rostros, lugares y situaciones que, técnicamente, había vivido en primera persona pero que ahora le resultaban tan ajenos como los de una desconocida.",
          "Entre las fotografías encontró una serie tomada en una playa del norte, fechada apenas seis meses antes del accidente, en la que aparecía sonriendo junto a un hombre al que no lograba identificar. No había ningún registro de aquel nombre en su teléfono ni en sus redes sociales, como si aquella persona hubiera existido exclusivamente durante el tiempo que las fotos abarcaban y luego hubiera desaparecido sin dejar más huella que unas imágenes.",
          "Le preguntó a su hermana, con la que mantenía una relación cercana, quién era aquel hombre, y la respuesta que recibió la dejó desconcertada: se trataba de alguien con quien Renata había mantenido una relación breve pero intensa, que había terminado mal apenas dos meses antes del accidente. Su hermana, dudando si debía o no dar más detalles, le confesó que Renata, en su momento, le había pedido expresamente que nunca volviera a mencionar aquel nombre delante de ella.",
          "Renata se encontró entonces ante una decisión extraña: ¿debía respetar la voluntad de una versión anterior de sí misma, una persona que técnicamente era ella pero de la que ya no conservaba ningún recuerdo directo, o tenía derecho, como superviviente de aquel dolor olvidado, a investigar por su cuenta lo que había ocurrido? Sentía que ambas opciones implicaban, de algún modo, una forma distinta de traición hacia sí misma.",
          "Durante semanas evitó el tema, aunque las fotografías de aquella playa seguían apareciendo cada vez que revisaba sus archivos, como una pregunta que se negaba a desaparecer. Finalmente decidió no buscar más información sobre el hombre ni sobre lo que había sucedido entre ellos, razonando que si su yo anterior había elegido protegerse de aquel recuerdo con tanta insistencia, lo más respetuoso era confiar en esa decisión, aunque ya no pudiera entenderla del todo.",
          "Sin embargo, no borró las fotografías. Las guardó en una carpeta aparte, a la que tituló simplemente \"Antes\", consciente de que algún día, quizás, encontraría el valor —o la curiosidad— necesaria para volver a mirarlas de otra manera. Por ahora, prefería vivir con la incertidumbre de una historia incompleta antes que forzar un recuerdo que su propia mente, por razones que ella misma desconocía, había decidido no conservar.",
          "Un año después del accidente, Renata seguía trabajando como fotógrafa, aunque había cambiado, sin proponérselo del todo, la manera en que documentaba su vida: ya no fotografiaba cada momento con la misma obsesión de antes, sino que empezó a escribir, junto a algunas imágenes, breves notas sobre lo que sentía al tomarlas. Pensaba que, si alguna vez volvía a perder la memoria, prefería dejar atrás no solo imágenes, sino también la certeza de lo que habían significado para ella."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "Why did Renata's own photographs become important to her after the accident?",
        "options": [
          "She needed them for a legal case related to the accident.",
          "Her camera became the only reliable source of what had happened during years she could no longer remember.",
          "She was planning a retrospective exhibition of her work.",
          "The photos were the only copies left after a house fire."
        ],
        "correctIndex": 1,
        "explanation": "The text says her camera \"se convirtió en la única fuente fiable de lo que le había ocurrido\" during the years she couldn't remember."
      },
      {
        "type": "multiple-choice",
        "question": "What did Renata's sister reveal about the man in the beach photos?",
        "options": [
          "He was a colleague from a photography workshop.",
          "He was someone Renata had dated intensely, and the relationship had ended badly shortly before the accident.",
          "He was a stranger who had photobombed her pictures.",
          "He was Renata's therapist."
        ],
        "correctIndex": 1,
        "explanation": "Her sister explains it was \"alguien con quien Renata había mantenido una relación breve pero intensa, que había terminado mal apenas dos meses antes del accidente.\""
      },
      {
        "type": "multiple-choice",
        "question": "What dilemma did Renata face regarding investigating the relationship further?",
        "options": [
          "Whether to confront the man legally for emotional damages.",
          "Whether to respect her past self's wish never to discuss him again, or to investigate on her own behalf as someone with no memory of the pain.",
          "Whether to delete all evidence of the relationship immediately.",
          "Whether to publish the photos publicly for closure."
        ],
        "correctIndex": 1,
        "explanation": "She wonders whether to \"respetar la voluntad de una versión anterior de sí misma\" or to investigate as \"superviviente de aquel dolor olvidado.\""
      },
      {
        "type": "multiple-choice",
        "question": "How did Renata change her approach to photography by a year after the accident?",
        "options": [
          "She stopped taking photographs entirely.",
          "She began writing brief notes alongside some images about what she felt taking them, wanting to preserve meaning, not just images.",
          "She switched to only photographing landscapes, never people.",
          "She hired an assistant to organize her memories for her."
        ],
        "correctIndex": 1,
        "explanation": "She \"empezó a escribir, junto a algunas imágenes, breves notas sobre lo que sentía al tomarlas,\" preferring to preserve meaning in case she lost her memory again."
      }
    ]
  },
  {
    "slug": "grabaciones-para-marina",
    "level": "B2",
    "number": 119,
    "title": "Grabaciones para Marina",
    "summary": "A woman facing early-onset memory loss records voice notes to the self she knows she is about to lose.",
    "duration": "9 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "A Marina le diagnosticaron alzhéimer precoz a los cincuenta y dos años, mucho antes de lo que ella misma, o cualquiera de sus médicos, habría imaginado posible. Tras el diagnóstico inicial, mientras aún conservaba plena claridad mental, decidió empezar a grabar notas de voz dirigidas a sí misma, con la intención de que su yo futuro, cuando la enfermedad avanzara, pudiera escucharlas y reconocer, aunque fuera brevemente, quién había sido antes de perder ciertos recuerdos.",
          "La primera grabación la hizo sentada en la cocina de su casa, con una taza de café ya frío entre las manos, explicándole a la Marina del futuro cosas tan básicas como su propio nombre completo, el nombre de su marido, Joaquín, y el hecho de que tenía dos hijos, Pablo y Lucía, a quienes describía con todo el detalle cariñoso que podía reunir, por si algún día esos rostros dejaban de resultarle familiares.",
          "Con el paso de los meses, las grabaciones se volvieron menos prácticas y más íntimas: le contaba a su yo futuro historias de su infancia, momentos de su matrimonio de los que se sentía especialmente orgullosa, e incluso confesiones que nunca había compartido con nadie, como si grabar aquellos audios fuera, de algún modo extraño, la última oportunidad de conocerse verdaderamente a sí misma antes de que la enfermedad reescribiera quién era.",
          "Joaquín, al principio, se mostró reacio a la idea, temiendo que aquel proyecto no hiciera sino recordarle constantemente a Marina lo que estaba a punto de perder. Ella le explicó que, al contrario, grabar aquellas notas le daba una sensación de continuidad que la propia enfermedad amenazaba con arrebatarle: si no podía controlar lo que su memoria retendría, al menos podía decidir qué palabras la esperarían al otro lado del olvido.",
          "Dieciocho meses después del diagnóstico, cuando los primeros síntomas notables empezaron a manifestarse, Joaquín le puso, siguiendo las instrucciones que ella misma había dejado, la primera de aquellas grabaciones. Marina escuchó su propia voz explicándole quién era con una mezcla de extrañeza y alivio, como quien recibe una carta de una amiga muy querida a la que hace mucho tiempo que no ve.",
          "No todas las escuchas resultaron reconfortantes: hubo tardes en que Marina, confundida, no lograba entender por qué una desconocida le hablaba con tanta familiaridad desde un teléfono, y Joaquín tenía que intervenir con paciencia para explicarle, una vez más, que aquella voz era la suya propia, grabada en un tiempo que ya no podía recordar con claridad.",
          "Aun así, con el paso de los meses, aquellas grabaciones se convirtieron en un ritual reconfortante dentro de la rutina diaria de la familia, un puente frágil pero persistente entre la Marina que había sido y la que, poco a poco, se iba convirtiendo en otra persona. Pablo y Lucía, sus hijos, empezaron también a grabar sus propios mensajes, añadiendo capas nuevas a aquel archivo de voces que ya no pertenecía solo a Marina, sino a toda la familia que la rodeaba.",
          "Dos años después del diagnóstico, Marina ya no reconocía su propia voz en las grabaciones más antiguas, aunque seguía escuchándolas cada noche con la misma expresión de calma curiosidad, como quien escucha una historia bonita contada por alguien a quien, sin saber muy bien por qué, siente que quiere de verdad. Joaquín, al verla así, pensaba que quizás aquel proyecto no había logrado salvar los recuerdos de Marina, pero sí había logrado algo distinto: asegurarse de que, incluso perdida la memoria, ella nunca dejara de sentirse, cada noche, acompañada por alguien que la quería."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "Why did Marina begin recording voice notes to herself after her diagnosis?",
        "options": [
          "To leave instructions for her husband about household finances.",
          "So her future self could listen and briefly recognize who she had been before losing certain memories.",
          "Because her doctor required it as part of a clinical trial.",
          "To create content for a public awareness campaign about Alzheimer's."
        ],
        "correctIndex": 1,
        "explanation": "She wanted her future self to \"pudiera escucharlas y reconocer, aunque fuera brevemente, quién había sido antes de perder ciertos recuerdos.\""
      },
      {
        "type": "multiple-choice",
        "question": "Why was Joaquín initially reluctant about the recording project?",
        "options": [
          "He thought it was a waste of time and money.",
          "He feared it would constantly remind Marina of what she was about to lose.",
          "He didn't believe technology could help with memory loss.",
          "He wanted Marina to focus on medical treatment instead."
        ],
        "correctIndex": 1,
        "explanation": "He feared \"aquel proyecto no hiciera sino recordarle constantemente a Marina lo que estaba a punto de perder.\""
      },
      {
        "type": "multiple-choice",
        "question": "What sometimes happened when Marina listened to the recordings as her illness progressed?",
        "options": [
          "She always immediately recognized her own voice with joy.",
          "Sometimes, confused, she couldn't understand why a stranger was speaking to her so familiarly, and Joaquín had to explain.",
          "The recordings caused her physical pain.",
          "She stopped listening to them altogether after a year."
        ],
        "correctIndex": 1,
        "explanation": "Some afternoons \"Marina, confundida, no lograba entender por qué una desconocida le hablaba con tanta familiaridad,\" and Joaquín had to explain it was her own voice."
      },
      {
        "type": "multiple-choice",
        "question": "What did the recording project ultimately achieve, according to the ending?",
        "options": [
          "It fully restored Marina's lost memories.",
          "It failed completely and the family abandoned it.",
          "Even after she no longer recognized her own voice, it ensured she still felt accompanied by someone who loved her each night.",
          "It became a commercial product the family sold to other families."
        ],
        "correctIndex": 2,
        "explanation": "Joaquín reflects that the project \"había logrado... asegurarse de que, incluso perdida la memoria, ella nunca dejara de sentirse, cada noche, acompañada por alguien que la quería.\""
      }
    ]
  },
  {
    "slug": "el-chico-del-otro-lado-de-la-pantalla",
    "level": "B2",
    "number": 120,
    "title": "El chico del otro lado de la pantalla",
    "summary": "A teenager discovers that the online friend who understood him best was never who he claimed to be.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Nico tenía quince años y, desde que su familia se había mudado a una ciudad nueva a mitad de curso, apenas había logrado hacer amigos en el instituto. Fue en un foro dedicado a un videojuego donde conoció a Dani, un chico que decía tener su misma edad y que vivía, según contaba, en un pueblo pequeño a varias horas de distancia. Con el paso de las semanas, las conversaciones con Dani se convirtieron en la parte del día que Nico esperaba con más ganas.",
          "Hablaban de todo: de las dificultades para encajar en el instituto, de series que ambos veían, de los problemas familiares que Nico no se atrevía a mencionar ni siquiera a sus padres. Dani parecía entenderlo de una manera que nadie a su alrededor lograba entenderlo, con una empatía y una madurez que a Nico, en ocasiones, le sorprendían para alguien de apenas quince años.",
          "Un día, buscando por curiosidad una imagen que Dani le había enviado meses atrás, Nico descubrió, gracias a una búsqueda inversa que había aprendido a hacer en clase de tecnología, que aquella fotografía pertenecía en realidad a un adolescente de otro país, cuya cuenta pública de redes sociales no tenía nada que ver con el perfil que Dani usaba en el foro. El descubrimiento lo dejó paralizado durante varios minutos frente a la pantalla, sin saber qué hacer con la información.",
          "Durante los días siguientes, Nico investigó un poco más, comparando horarios de conexión, expresiones repetidas y pequeñas inconsistencias en las historias que Dani le había contado a lo largo de los meses. Cuanto más buscaba, más crecía la sospecha de que Dani no solo mentía sobre su fotografía, sino probablemente también sobre su edad, y quizás sobre muchas otras cosas que Nico había dado por ciertas sin cuestionarlas jamás.",
          "Se enfrentó a él directamente, con manos temblorosas mientras escribía el mensaje, exigiéndole una explicación. Dani tardó casi un día entero en responder, y cuando lo hizo, confesó que en realidad tenía treinta y cuatro años, que llevaba tiempo hablando con varios adolescentes bajo la identidad falsa de Dani, y que, aunque insistía en que sus intenciones nunca habían sido dañinas, entendía que Nico quisiera cortar todo contacto de inmediato.",
          "Nico bloqueó la cuenta sin responder nada más, pero durante semanas no logró sacudirse una sensación extraña de duelo, como si hubiera perdido a alguien real a pesar de saber que esa persona jamás había existido tal como él la conocía. Le costaba explicar, incluso a sí mismo, por qué extrañaba conversaciones que ahora sabía que habían sido, en el mejor de los casos, una mentira sostenida durante meses.",
          "Finalmente, reunió el valor para contárselo a su madre, temiendo que lo regañara por haber hablado tanto tiempo con un desconocido sin decir nada. En lugar de eso, ella lo escuchó con atención, sin juzgarlo, y le confesó que ella también, de adolescente, había sentido esa misma necesidad desesperada de encontrar a alguien que la entendiera, aunque en su época no existieran los foros ni internet para buscarlo tan lejos de casa.",
          "Con el tiempo, Nico empezó a hacer amigos de verdad en su nuevo instituto, aunque durante mucho tiempo llevó consigo una cautela nueva al hablar con desconocidos en línea. Pensaba, a veces, que lo más triste de toda la experiencia no había sido descubrir la mentira, sino comprender lo fácil que le había resultado, en su soledad, no querer hacer las preguntas que habrían revelado la verdad mucho antes."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "How did Nico discover that Dani's photo was fake?",
        "options": [
          "Dani confessed it to him first without being asked.",
          "A reverse image search showed the photo belonged to a teenager from another country with an unrelated social media profile.",
          "A classmate recognized Dani in person.",
          "The forum administrators banned Dani's account publicly."
        ],
        "correctIndex": 1,
        "explanation": "Using \"una búsqueda inversa,\" Nico found the photo \"pertenecía en realidad a un adolescente de otro país, cuya cuenta pública de redes sociales no tenía nada que ver con el perfil que Dani usaba.\""
      },
      {
        "type": "multiple-choice",
        "question": "What did Dani confess when Nico confronted him?",
        "options": [
          "That he was actually Nico's classmate playing a prank.",
          "That he was thirty-four years old and had been talking to several teenagers under the false identity of Dani.",
          "That the entire forum was run by a company for advertising purposes.",
          "That he had never actually spoken to Nico and it was a different person now."
        ],
        "correctIndex": 1,
        "explanation": "Dani admitted \"que en realidad tenía treinta y cuatro años, que llevaba tiempo hablando con varios adolescentes bajo la identidad falsa de Dani.\""
      },
      {
        "type": "multiple-choice",
        "question": "How did Nico feel in the weeks after discovering the truth?",
        "options": [
          "Relieved and completely unaffected, since he'd expected it all along.",
          "A strange sense of grief, as if he had lost someone real despite knowing that person never existed as he knew them.",
          "Angry only at himself, with no sadness at all.",
          "Excited to find a new online friend immediately."
        ],
        "correctIndex": 1,
        "explanation": "He felt \"una sensación extraña de duelo, como si hubiera perdido a alguien real a pesar de saber que esa persona jamás había existido tal como él la conocía.\""
      },
      {
        "type": "multiple-choice",
        "question": "What did Nico's mother reveal when he finally told her about Dani?",
        "options": [
          "That she had already suspected something was wrong and had been monitoring him.",
          "That she, too, as a teenager, had felt that same desperate need to find someone who understood her.",
          "That she would report the incident to the police immediately.",
          "That she forbade him from using the internet again."
        ],
        "correctIndex": 1,
        "explanation": "She confessed \"que ella también, de adolescente, había sentido esa misma necesidad desesperada de encontrar a alguien que la entendiera.\""
      }
    ]
  },
  {
    "slug": "el-verano-del-silbato",
    "level": "B2",
    "number": 121,
    "title": "El verano del silbato",
    "summary": "A teenage lifeguard's first summer job ends with a moment she couldn't control, and a new understanding of what it means to be responsible for someone else's life.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Valeria tenía diecisiete años cuando consiguió su primer trabajo como socorrista en la piscina municipal del barrio, un puesto que había deseado desde que se sacó el título el invierno anterior. Le entusiasmaba la idea de pasar el verano al aire libre, ganando su propio dinero, aunque nunca había pensado del todo en serio en lo que significaba, en la práctica, ser responsable de la seguridad de decenas de personas cada día.",
          "Las primeras semanas transcurrieron sin sobresaltos: algún roce entre niños, algún adulto que se saltaba las normas del trampolín, nada que Valeria no pudiera resolver con un toque de silbato y una advertencia firme. Empezó a sentirse segura en su papel, incluso orgullosa de la autoridad tranquila con la que había aprendido a dirigirse a los bañistas desde su silla elevada junto a la piscina.",
          "Todo cambió una tarde de agosto especialmente concurrida, cuando un niño de unos ocho años, que Valeria no había visto entrar solo a la zona honda, dejó de moverse en el agua durante unos segundos que a ella le parecieron eternos. Se lanzó de inmediato, siguiendo el protocolo que había practicado decenas de veces en los entrenamientos, y logró sacarlo del agua justo antes de que la situación se volviera irreversible.",
          "El niño, tras toser y llorar asustado en brazos de su madre, se recuperó por completo en cuestión de minutos, sin secuela alguna más allá del susto. Valeria, sin embargo, se pasó el resto del turno temblando, incapaz de dejar de repetir mentalmente los segundos que había tardado en darse cuenta de que algo iba mal, preguntándose qué habría pasado si hubiera reaccionado tan solo unos instantes más tarde.",
          "Su supervisor, un hombre con más de veinte años de experiencia en el puesto, le explicó esa misma noche que ningún socorrista, por muy atento que fuera, podía vigilar cada segundo a cada bañista, y que lo importante no era la imposible perfección, sino la rapidez de reacción cuando algo efectivamente ocurría. Valeria escuchó el consejo, pero durante días no logró sacudirse la sensación de que había estado a punto de fallar en lo único que de verdad importaba de su trabajo.",
          "Habló con su madre esa noche, incapaz de contener las lágrimas mientras le contaba lo ocurrido, y su madre le dijo algo que se le quedó grabado durante mucho tiempo: que convertirse en adulta no significaba dejar de tener miedo, sino aprender a actuar correctamente a pesar de sentirlo, algo que Valeria, sin saberlo, ya había demostrado ser capaz de hacer aquella misma tarde.",
          "Durante el resto del verano, Valeria vigiló la piscina con una atención distinta, menos despreocupada que al principio de la temporada pero también más consciente de la responsabilidad real que implicaba aquel trabajo que, hasta entonces, había tratado casi como un juego de niños grandes. Dejó de ver el silbato colgado de su cuello como un simple accesorio del uniforme y empezó a sentirlo, cada mañana, como un recordatorio silencioso de lo que estaba en juego.",
          "Cuando terminó el verano y llegó el momento de devolver el uniforme, Valeria pensó que aquel trabajo, que había empezado buscando solo un poco de dinero e independencia, le había enseñado algo que ningún curso de socorrismo había logrado transmitirle del todo: que ser responsable de la vida de otra persona, aunque fuera durante apenas unos segundos al año, cambiaba para siempre la manera en que uno se entendía a sí mismo."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "What happened on the especially crowded August afternoon?",
        "options": [
          "Valeria left her post early without permission.",
          "An eight-year-old boy stopped moving in the water for several terrifying seconds before Valeria pulled him out.",
          "A storm forced the pool to close suddenly.",
          "Valeria's whistle broke during an emergency."
        ],
        "correctIndex": 1,
        "explanation": "A boy \"dejó de moverse en el agua durante unos segundos que a ella le parecieron eternos,\" and Valeria dove in to rescue him."
      },
      {
        "type": "multiple-choice",
        "question": "What did Valeria's supervisor tell her that night?",
        "options": [
          "That she should be fired for not noticing sooner.",
          "That no lifeguard can watch every swimmer every second, and what matters is the speed of reaction when something happens.",
          "That the pool would install more cameras because of the incident.",
          "That she should switch to a different, less demanding job."
        ],
        "correctIndex": 1,
        "explanation": "He explains that \"ningún socorrista, por muy atento que fuera, podía vigilar cada segundo a cada bañista, y que lo importante no era la imposible perfección, sino la rapidez de reacción.\""
      },
      {
        "type": "multiple-choice",
        "question": "What did Valeria's mother tell her about becoming an adult?",
        "options": [
          "That adulthood means never feeling fear again.",
          "That becoming an adult doesn't mean the fear disappears, but learning to act correctly despite feeling it.",
          "That she should quit the job immediately for her own safety.",
          "That fear was a sign she wasn't ready for responsibility."
        ],
        "correctIndex": 1,
        "explanation": "Her mother tells her \"que convertirse en adulta no significaba dejar de tener miedo, sino aprender a actuar correctamente a pesar de sentirlo.\""
      },
      {
        "type": "multiple-choice",
        "question": "How did Valeria's relationship to her whistle change by the end of summer?",
        "options": [
          "She stopped wearing it altogether, finding it unnecessary.",
          "It went from being a simple uniform accessory to a silent reminder of what was at stake.",
          "She had it replaced with a more modern safety device.",
          "She gave it away to a younger trainee as a gift."
        ],
        "correctIndex": 1,
        "explanation": "She \"dejó de ver el silbato colgado de su cuello como un simple accesorio del uniforme y empezó a sentirlo... como un recordatorio silencioso de lo que estaba en juego.\""
      }
    ]
  },
  {
    "slug": "cien-palabras-nuevas",
    "level": "B2",
    "number": 122,
    "title": "Cien palabras nuevas",
    "summary": "A boy who has just immigrated builds his first real friendship in a new country through a language-learning app, one exchanged word at a time.",
    "duration": "9 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Bayo tenía catorce años cuando su familia emigró desde Lagos hasta una ciudad mediana del sur de España, y durante las primeras semanas de instituto apenas logró comunicarse con nadie más allá de gestos torpes y frases sueltas que había memorizado en el avión. El español que había estudiado brevemente antes del viaje resultó insuficiente frente a la rapidez con la que hablaban sus nuevos compañeros, y Bayo pasaba los recreos solo, observando desde lejos conversaciones que apenas lograba seguir.",
          "Su profesora de acogida, notando su aislamiento, le recomendó una aplicación de intercambio de idiomas que conectaba a estudiantes de distintos países para practicar conversación mediante mensajes de texto y notas de voz. Bayo, escéptico al principio, terminó descargándola una noche de especial soledad, más por aburrimiento que por verdadera esperanza de que sirviera de algo.",
          "Así conoció a Marisela, una chica mexicana de su misma edad que estaba aprendiendo inglés y que aceptó, con la paciencia propia de quien también atraviesa el mismo proceso de aprender un idioma desde cero, intercambiar mensajes diarios en los que cada uno corregía los errores del otro con una amabilidad que Bayo no encontraba fácilmente entre sus compañeros de instituto.",
          "Las primeras conversaciones fueron torpes y limitadas, apenas presentaciones básicas y preguntas sobre comida o música, pero con el paso de las semanas ambos empezaron a compartir cosas más profundas: Bayo le contó lo difícil que resultaba sentirse siempre \"el nuevo\", el que preguntaba dos veces cada indicación, el que se equivocaba de verbo en cada frase; Marisela, por su parte, le habló de la presión de sus padres para que aprendiera un inglés perfecto que le abriera puertas que ella misma no tenía muy claras.",
          "Bayo empezó a anotar, en un cuaderno que llevaba siempre consigo, cada palabra nueva que aprendía gracias a aquellas conversaciones, no solo las que su profesora enseñaba en clase sino también expresiones coloquiales que Marisela le explicaba con ejemplos de su vida diaria en México. Sin darse cuenta, aquel cuaderno se convirtió en una especie de diario paralelo de su proceso de adaptación, palabra a palabra, conversación a conversación.",
          "Cuando llegó a la palabra número cien, decidió, medio en broma, contárselo a Marisela, quien le respondió con un mensaje de voz tan entusiasta que Bayo lo escuchó varias veces solo para sentir, de nuevo, esa alegría compartida por un logro que a nadie más en su vida diaria le habría parecido tan importante. Fue en ese momento cuando comprendió que Marisela, sin haberla visto nunca en persona, se había convertido en la persona que mejor entendía lo que estaba viviendo.",
          "Un día, un compañero de clase, al verlo escribiendo mensajes de voz durante el recreo, le preguntó con curiosidad genuina con quién hablaba tanto, y Bayo, sorprendido de que alguien le preguntara algo así por primera vez, terminó explicándole toda la historia. El compañero, lejos de burlarse, le pidió que le enseñara la aplicación, y esa conversación se convirtió, sin que ninguno de los dos lo planeara, en el inicio de la primera amistad real que Bayo hacía en su nuevo instituto.",
          "Meses después, cuando ya podía seguir casi cualquier conversación en clase sin esfuerzo, Bayo siguió escribiéndole a Marisela cada semana, aunque ya no necesitara practicar español con la misma urgencia de antes. Había comprendido que aquella amistad, nacida de la necesidad de aprender cien palabras nuevas, se había convertido en algo que ya no dependía del idioma que ambos hablaran, sino de la sencilla costumbre de contarse, cada semana, cómo les iba realmente la vida."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "Why did Bayo struggle during his first weeks at the new school?",
        "options": [
          "He refused to attend classes regularly.",
          "His Spanish was insufficient for the speed at which his classmates spoke, leaving him isolated during breaks.",
          "The school had no Spanish classes available for him.",
          "He was bullied by a specific group of students."
        ],
        "correctIndex": 1,
        "explanation": "His Spanish \"resultó insuficiente frente a la rapidez con la que hablaban sus nuevos compañeros,\" and \"Bayo pasaba los recreos solo.\""
      },
      {
        "type": "multiple-choice",
        "question": "What did Bayo and Marisela share as their conversations deepened?",
        "options": [
          "Only grammar corrections and vocabulary lists.",
          "Bayo shared the difficulty of always feeling like \"the new kid,\" and Marisela shared the pressure to learn perfect English for her parents.",
          "Plans to meet in person during summer vacation.",
          "Complaints about their respective teachers."
        ],
        "correctIndex": 1,
        "explanation": "Bayo told her about feeling like \"'el nuevo'... el que se equivocaba de verbo en cada frase,\" while Marisela spoke of \"la presión de sus padres para que aprendiera un inglés perfecto.\""
      },
      {
        "type": "multiple-choice",
        "question": "What happened after Bayo's classmate asked who he was talking to?",
        "options": [
          "The classmate mocked him and told others.",
          "The classmate asked to be shown the app, marking the start of Bayo's first real friendship at his new school.",
          "The classmate reported him to a teacher for being on his phone.",
          "Nothing changed; the classmate lost interest immediately."
        ],
        "correctIndex": 1,
        "explanation": "The classmate \"le pidió que le enseñara la aplicación, y esa conversación se convirtió... en el inicio de la primera amistad real que Bayo hacía en su nuevo instituto.\""
      },
      {
        "type": "multiple-choice",
        "question": "What had Bayo's friendship with Marisela become by the end of the story?",
        "options": [
          "It ended once Bayo no longer needed to practice Spanish.",
          "Something no longer dependent on language practice, but on the simple habit of telling each other how life was really going.",
          "A romantic relationship that led them to plan a trip together.",
          "A business partnership to create their own language app."
        ],
        "correctIndex": 1,
        "explanation": "The friendship \"se había convertido en algo que ya no dependía del idioma que ambos hablaran, sino de la sencilla costumbre de contarse, cada semana, cómo les iba realmente la vida.\""
      }
    ]
  },
  {
    "slug": "vidas-extra",
    "level": "B2",
    "number": 123,
    "title": "Vidas extra",
    "summary": "Two teenagers who barely spoke at school become close through an online game, and one of them is using it to escape something the other doesn't understand until it's almost too late.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Teo y Curro se conocían del instituto desde hacía años, aunque nunca habían sido más que conocidos lejanos, de esos que se saludan por pasillo sin intercambiar apenas una palabra. Todo cambió el verano en que ambos, por casualidad, empezaron a jugar al mismo videojuego en línea, un juego de estrategia por equipos que exigía coordinación constante entre jugadores a través de auriculares con micrófono.",
          "Al principio jugaban con desconocidos, hasta que una noche coincidieron en la misma partida y, para su sorpresa mutua, formaron un equipo tan eficaz que decidieron seguir jugando juntos las noches siguientes. Fuera de la pantalla apenas se conocían, pero dentro del juego desarrollaron una complicidad que ninguno de los dos había sentido con nadie del instituto, quizás precisamente porque la distancia de las pantallas les permitía hablar sin la incomodidad habitual de las conversaciones cara a cara.",
          "Con el paso de las semanas, Teo notó que Curro se conectaba cada vez más tarde y jugaba durante más horas seguidas, incluso en noches de entre semana en las que ambos tenían clase al día siguiente. Cuando se lo comentó, Curro le restó importancia, diciendo que simplemente no tenía sueño y que prefería jugar antes que quedarse mirando el techo sin poder dormir.",
          "Una noche, sin embargo, Curro se sinceró un poco más de lo habitual: le contó que sus padres llevaban meses discutiendo constantemente en casa, que probablemente se separarían pronto, y que las horas que pasaba jugando eran, en realidad, las únicas horas del día en que lograba no pensar en ello. Teo, sin saber muy bien qué responder, se limitó a escuchar, algo que a Curro, según le confesó después, le había ayudado más que cualquier consejo bienintencionado.",
          "A partir de esa conversación, Teo empezó a prestar más atención a los cambios en el ánimo de Curro, tanto dentro del juego como en las escasas ocasiones en que coincidían en persona en el instituto. Notó que Curro llegaba tarde a clase con más frecuencia, que había perdido peso, y que sus respuestas en el juego, antes rápidas y precisas, ahora llegaban con un retraso que delataba un cansancio que iba mucho más allá de la simple falta de sueño.",
          "Preocupado, Teo decidió hablar con el tutor del instituto, aunque temía que Curro se sintiera traicionado al enterarse. Le explicó la situación con cuidado, sin exagerar pero sin restarle importancia tampoco, y el tutor, tras escucharlo, le agradeció que hubiera tenido el valor de contarlo, asegurándole que hablaría con Curro y con su familia de manera discreta.",
          "Curro, en efecto, se enteró de la conversación, y durante unos días evitó a Teo tanto en clase como en el juego, sintiéndose expuesto de una manera que no esperaba. Finalmente, una noche volvió a conectarse, y en lugar de empezar una partida directamente, le escribió a Teo un mensaje breve: gracias por preocuparte, aunque me costó admitirlo.",
          "Con el tiempo, y con la ayuda de un psicólogo escolar al que finalmente accedió a ver, Curro empezó a atravesar mejor la separación de sus padres, y aunque siguió jugando con Teo casi todas las noches, las partidas dejaron de ser una manera de escapar de algo para convertirse simplemente en lo que siempre deberían haber sido: un rato de diversión compartida entre dos amigos que, sin proponérselo, se habían encontrado el uno al otro en el momento exacto en que más lo necesitaban."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "How did Teo and Curro's friendship begin?",
        "options": [
          "They were assigned as lab partners in chemistry class.",
          "They coincidentally ended up on the same team in an online video game and formed an effective duo.",
          "Curro's parents asked Teo to check in on their son.",
          "They met at a summer sports camp."
        ],
        "correctIndex": 1,
        "explanation": "They \"coincidieron en la misma partida y... formaron un equipo tan eficaz que decidieron seguir jugando juntos las noches siguientes.\""
      },
      {
        "type": "multiple-choice",
        "question": "What did Curro confess to Teo one night about why he was playing so much?",
        "options": [
          "That he was trying to become a professional gamer.",
          "That his parents were constantly arguing and likely to separate, and gaming was the only time he didn't think about it.",
          "That he had failed several classes and was avoiding his homework.",
          "That he was being bullied by other players online."
        ],
        "correctIndex": 1,
        "explanation": "Curro explains \"que sus padres llevaban meses discutiendo constantemente en casa, que probablemente se separarían pronto, y que las horas que pasaba jugando eran... las únicas horas del día en que lograba no pensar en ello.\""
      },
      {
        "type": "multiple-choice",
        "question": "What did Teo do when he grew worried about Curro's declining state?",
        "options": [
          "He ignored it, not wanting to get involved.",
          "He confronted Curro angrily during a game.",
          "He spoke carefully with the school counselor about the situation.",
          "He told Curro's parents directly without telling Curro first."
        ],
        "correctIndex": 2,
        "explanation": "Teo \"decidió hablar con el tutor del instituto,\" explaining the situation \"con cuidado, sin exagerar pero sin restarle importancia tampoco.\""
      },
      {
        "type": "multiple-choice",
        "question": "How did Curro initially react upon learning Teo had spoken to the tutor?",
        "options": [
          "He was immediately grateful and thanked Teo in person.",
          "He avoided Teo for a few days, feeling exposed, before eventually thanking him.",
          "He reported Teo to the school for interfering.",
          "He stopped playing video games altogether in anger."
        ],
        "correctIndex": 1,
        "explanation": "Curro \"evitó a Teo tanto en clase como en el juego, sintiéndose expuesto,\" before finally messaging him: \"gracias por preocuparte, aunque me costó admitirlo.\""
      }
    ]
  },
  {
    "slug": "el-examen-que-no-hice",
    "level": "B2",
    "number": 124,
    "title": "El examen que no hice",
    "summary": "When a student discovers her closest friend cheated to win a scholarship she also applied for, she has to decide what fairness is really worth to her.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Lectura",
        "body": [
          "Águeda y Noelia habían sido mejores amigas desde primaria, y en su último año de instituto ambas compitieron, junto con una veintena de compañeros más, por una beca que cubriría buena parte de sus estudios universitarios. La beca se otorgaba en función de las notas del expediente y de un examen final especialmente exigente que ambas habían estudiado durante meses, muchas tardes juntas en la biblioteca del barrio.",
          "Cuando se publicaron los resultados, Noelia obtuvo la puntuación más alta de todo el instituto, un resultado que sorprendió a varios profesores, incluidos los que la conocían bien y sabían que, aunque era buena estudiante, nunca había destacado especialmente en la asignatura más difícil del examen. Águeda, que había quedado en segundo lugar por apenas unas décimas, se alegró sinceramente por su amiga, aunque no pudo evitar sentir una punzada de decepción que se esforzó por ocultar.",
          "Unas semanas después, revisando unos apuntes que Noelia le había prestado, Águeda encontró, guardada entre las páginas de un cuaderno, una copia impresa de varias preguntas que coincidían, casi palabra por palabra, con las que habían aparecido en el examen final. Reconoció de inmediato la letra de un profesor que impartía esa asignatura en otro instituto de la ciudad, un antiguo compañero de universidad del padre de Noelia.",
          "Águeda pasó varios días sin saber qué hacer con aquel hallazgo, revisándolo una y otra vez como si esperara que las preguntas cambiaran de sentido si las miraba con suficiente atención. Sabía que denunciarlo significaría, casi con toda seguridad, el fin de la amistad de toda una vida, y también sabía que Noelia, si perdía la beca, probablemente no podría permitirse estudiar la carrera que llevaba años soñando.",
          "Decidió, primero, hablar directamente con Noelia, dándole la oportunidad de explicarse antes de tomar cualquier otra decisión. Noelia, al verse descubierta, se derrumbó casi de inmediato, confesando entre lágrimas que su padre había conseguido las preguntas sin que ella se lo pidiera explícitamente, pero que ella había aceptado estudiarlas de todos modos, sabiendo perfectamente que no era justo, porque tenía demasiado miedo de decepcionar a su familia si no obtenía la beca.",
          "Águeda le preguntó, con una calma que le costó mantener, qué esperaba que hiciera ella ahora que lo sabía. Noelia le suplicó que no dijera nada, prometiéndole que jamás volvería a hacer algo parecido, y recordándole todos los años de amistad que, según ella, deberían pesar más que un examen. Águeda, sin embargo, no dejaba de pensar en los demás compañeros que también habían competido limpiamente por la beca, sin ninguna ventaja injusta.",
          "Tras una semana de dudas constantes, Águeda decidió hablar con la dirección del instituto, no para acusar directamente a Noelia por su nombre, sino para plantear, de manera general, sus sospechas sobre una posible filtración de preguntas del examen. Sabía que, tarde o temprano, la investigación llegaría de todos modos hasta Noelia, pero prefirió no ser ella quien pronunciara la acusación en voz alta.",
          "La investigación confirmó la filtración, y a Noelia le retiraron la beca, que finalmente recayó en Águeda como segunda clasificada. La amistad entre ambas nunca se recuperó del todo: seguían saludándose por los pasillos, con una cortesía distante que sustituía a la complicidad de antes, y Águeda, aunque nunca dudó de haber hecho lo correcto, tampoco pudo evitar sentir, durante mucho tiempo, que había ganado la beca con un sabor que no era exactamente el que había imaginado."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "What did Águeda discover hidden in the notebook Noelia had lent her?",
        "options": [
          "A love letter revealing Noelia's secret relationship.",
          "A printed copy of questions matching, almost word for word, those on the final exam.",
          "Evidence that Noelia had been skipping school.",
          "A diary describing Noelia's plans to move abroad."
        ],
        "correctIndex": 1,
        "explanation": "She found \"una copia impresa de varias preguntas que coincidían, casi palabra por palabra, con las que habían aparecido en el examen final.\""
      },
      {
        "type": "multiple-choice",
        "question": "What did Noelia confess when confronted by Águeda?",
        "options": [
          "That she had stolen the questions from a teacher's desk herself.",
          "That her father had obtained the questions, and she agreed to study them despite knowing it was unfair, out of fear of disappointing her family.",
          "That she had never actually seen the leaked questions before the exam.",
          "That another classmate had forced her to cheat."
        ],
        "correctIndex": 1,
        "explanation": "Noelia confessed \"que su padre había conseguido las preguntas... pero que ella había aceptado estudiarlas de todos modos... porque tenía demasiado miedo de decepcionar a su familia.\""
      },
      {
        "type": "multiple-choice",
        "question": "How did Águeda ultimately report her suspicions?",
        "options": [
          "She posted about it publicly on social media.",
          "She went to the school administration and raised general suspicions about a leak, without naming Noelia directly.",
          "She refused to say anything and let the matter drop entirely.",
          "She anonymously mailed the evidence to a newspaper."
        ],
        "correctIndex": 1,
        "explanation": "She spoke to the school \"no para acusar directamente a Noelia por su nombre, sino para plantear, de manera general, sus sospechas sobre una posible filtración.\""
      },
      {
        "type": "multiple-choice",
        "question": "What was the ultimate cost of Águeda's decision, according to the ending?",
        "options": [
          "She lost the scholarship entirely as punishment for reporting it.",
          "She won the scholarship, but the friendship never fully recovered, leaving a bittersweet feeling rather than pure satisfaction.",
          "Both girls were expelled from school.",
          "Noelia's father was arrested and the school was shut down."
        ],
        "correctIndex": 1,
        "explanation": "Águeda received the scholarship, but \"la amistad entre ambas nunca se recuperó del todo,\" and she felt she had won it \"con un sabor que no era exactamente el que había imaginado.\""
      }
    ]
  }
];

// The reinforcement lessons (b2-reinforcement.ts) are woven in right after
// the lesson each one reinforces, and the whole level is renumbered -- see
// weave.ts. Everything above this line is the original lesson data.
// The drill lessons (b2-drills.ts) are a second, drill-heavy layer woven in
// the same way; at a shared anchor they follow the reinforcement lessons.
export const B2_LESSONS: Lesson[] = weaveLessons(B2_BASE_LESSONS, [...B2_REINFORCEMENT, ...B2_DRILLS]);
