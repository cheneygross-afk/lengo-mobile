import type { Lesson } from "./types";

export const C1_LESSONS: Lesson[] = [
  {
    "slug": "subjunctive-mastery-review-1",
    "level": "C1",
    "number": 1,
    "title": "Subjuntivo: Repaso y Matices Avanzados, Part 1 of 6",
    "summary": "Una síntesis de nivel avanzado sobre el uso del subjuntivo en todos sus tiempos, centrada en los matices de certeza, duda y cortesía que distinguen al hablante nativo.",
    "duration": "10 min",
    "sections": [
      {
        "heading": "Presente vs. perfecto de subjuntivo: la cuestión aspectual",
        "body": [
          "En el registro culto, la elección entre el presente y el pretérito perfecto de subjuntivo no depende de una regla mecánica de concordancia temporal, sino de la relación aspectual que el hablante establece entre el momento de la enunciación y el evento subordinado. El presente de subjuntivo proyecta la acción como abierta o no concluida respecto al ahora del que habla, mientras que el perfecto de subjuntivo la presenta como ya consumada o cerrada, aunque el efecto emocional o valorativo persista.",
          "Este matiz se vuelve crucial en oraciones de valoración retrospectiva: un hablante que dice «me alegra que hayas venido» está anclando la llegada en un pasado ya resuelto, mientras que «me alegra que vengas» sitúa esa llegada como simultánea o inminente respecto al momento del habla. Confundir ambos tiempos no genera agramaticalidad, pero sí un desajuste temporal que un oyente nativo percibe de inmediato como ajeno a su forma habitual de hablar."
        ],
        "examples": [
          {
            "es": "Espero que apruebe el examen mañana.",
            "en": "La acción todavía no ha ocurrido; se proyecta hacia el futuro."
          },
          {
            "es": "Espero que haya aprobado el examen.",
            "en": "La acción ya se da por concluida antes del momento en que se habla."
          },
          {
            "es": "Me alegra que vengas a la reunión.",
            "en": "La llegada es inminente o simultánea al momento del habla."
          }
        ]
      },
      {
        "heading": "Presente vs. perfecto de subjuntivo: la cuestión aspectual (cont'd)",
        "body": [],
        "examples": [
          {
            "es": "Me alegra que hayas venido a la reunión.",
            "en": "La llegada ya se produjo y se valora en retrospectiva."
          },
          {
            "es": "No creo que lo sepa todavía.",
            "en": "Duda sobre un estado presente o futuro cercano."
          },
          {
            "es": "No creo que lo haya sabido a tiempo.",
            "en": "Duda sobre un hecho ya cerrado en el pasado."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Qué oración sitúa la acción como ya concluida antes del momento en que se habla?",
            "options": [
              "Espero que apruebe el examen la próxima semana.",
              "Espero que haya aprobado el examen de ayer.",
              "Espero que apruebe el examen que tiene pendiente.",
              "Espero que esté aprobando el examen ahora mismo."
            ],
            "correctIndex": 1,
            "explanation": "El perfecto de subjuntivo «haya aprobado» presenta la acción como cerrada y anterior al momento de la enunciación, algo coherente con la referencia a «ayer»."
          },
          {
            "type": "fill-blank",
            "prompt": "Completa con el tiempo de subjuntivo que exprese una acción ya concluida y valorada en retrospectiva.",
            "sentence": "Me sorprende que tú ___ (llegar) tan pronto ayer.",
            "answer": "hayas llegado",
            "explanation": "El adverbio «ayer» exige el perfecto de subjuntivo, que marca la acción como cerrada antes del momento del habla.",
            "hint": "Se trata de un hecho ya sucedido, no de algo que está por ocurrir."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "¿Qué diferencia principal existe entre «esperaba que llegaras» y «esperaba que hubieras llegado»?",
        "options": [
          "Ninguna; ambas expresan exactamente lo mismo.",
          "La primera sitúa la llegada como simultánea o posterior al momento de la espera; la segunda, como anterior a ese momento.",
          "La primera es incorrecta gramaticalmente.",
          "La segunda solo se usa en contextos formales escritos."
        ],
        "correctIndex": 1,
        "explanation": "El imperfecto de subjuntivo marca simultaneidad o posterioridad respecto al verbo principal, mientras que el pluscuamperfecto marca anterioridad respecto a ese mismo punto."
      }
    ]
  },
  {
    "slug": "subjunctive-mastery-review-2",
    "level": "C1",
    "number": 2,
    "title": "Subjuntivo: Repaso y Matices Avanzados, Part 2 of 6",
    "summary": "Una síntesis de nivel avanzado sobre el uso del subjuntivo en todos sus tiempos, centrada en los matices de certeza, duda y cortesía que distinguen al hablante nativo.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "Imperfecto vs. pluscuamperfecto de subjuntivo: el eje temporal desplazado",
        "body": [
          "Cuando la oración principal se sitúa en el pasado, el subjuntivo se traslada a su propia pareja retrospectiva: el imperfecto de subjuntivo cubre la simultaneidad o la posterioridad respecto al verbo principal, mientras que el pluscuamperfecto marca una anterioridad ya cumplida respecto a ese mismo punto de referencia.",
          "La dificultad para quien está dominando este nivel no reside tanto en la morfología —ambas formas se aprenden con facilidad— sino en calcular correctamente el eje desde el que se mide la anterioridad: no desde el momento del habla, sino desde el verbo principal. Así, «dudaba que hubiera terminado» sitúa la terminación antes de la duda misma, no antes del momento presente en que se relata la anécdota. Este desplazamiento del punto de referencia es, precisamente, lo que distingue el uso maduro del subjuntivo del uso mecánico propio de niveles iniciales."
        ],
        "examples": [
          {
            "es": "Quería que me ayudaras con la mudanza.",
            "en": "La ayuda es simultánea o posterior al deseo, no anterior a él."
          },
          {
            "es": "Quería que me hubieras ayudado antes de la mudanza.",
            "en": "La ayuda debía haberse dado antes del momento del deseo."
          },
          {
            "es": "Dudaba que hubiera terminado el informe a tiempo.",
            "en": "La terminación se sitúa antes del momento de la duda."
          },
          {
            "es": "Dudaba que terminara el informe a tiempo.",
            "en": "La terminación es simultánea o posterior al momento de la duda."
          },
          {
            "es": "Le pedí que se quedara un rato más.",
            "en": "La permanencia es posterior o simultánea al pedido."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "En la oración «Sentía que ya se hubieran ido cuando llegué», ¿respecto a qué punto se mide la anterioridad de la partida?",
            "options": [
              "Respecto al momento en que se habla ahora.",
              "Respecto al momento del sentimiento, no respecto al presente.",
              "Respecto a la llegada del hablante, ignorando el verbo principal.",
              "No existe ningún punto de referencia temporal."
            ],
            "correctIndex": 1,
            "explanation": "El pluscuamperfecto de subjuntivo ancla la anterioridad en el verbo principal «sentía», no en el momento actual de la enunciación."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "fill-blank",
        "prompt": "Completa la fórmula concesiva de valor universal.",
        "sentence": "___ lo que pase, no cambiaré de opinión.",
        "answer": "Pase",
        "explanation": "«Pase lo que pase» es una fórmula fija de valor concesivo-universal que siempre lleva subjuntivo.",
        "hint": "Piensa en la fórmula fija formada con el verbo «pasar» duplicado."
      }
    ]
  },
  {
    "slug": "subjunctive-mastery-review-3",
    "level": "C1",
    "number": 3,
    "title": "Subjuntivo: Repaso y Matices Avanzados, Part 3 of 6",
    "summary": "Una síntesis de nivel avanzado sobre el uso del subjuntivo en todos sus tiempos, centrada en los matices de certeza, duda y cortesía que distinguen al hablante nativo.",
    "duration": "10 min",
    "sections": [
      {
        "heading": "Fórmulas fijas de valor concesivo-universal",
        "body": [
          "Existe en español un conjunto de estructuras fijas —formadas siempre con subjuntivo— que expresan un valor concesivo-universal: la afirmación se sostiene con independencia de cualquier circunstancia que pudiera contradecirla. «Sea como sea», «cueste lo que cueste», «diga lo que diga», «venga de donde venga» y «pase lo que pase» comparten una estructura duplicada del mismo verbo, uno proyectando todas las posibilidades imaginables hacia el subjuntivo.",
          "Estas construcciones no admiten el indicativo bajo ninguna circunstancia, ni siquiera cuando el hablante está seguro del resultado, porque su función no es expresar duda sobre un hecho concreto, sino declarar la irrelevancia de cualquier variable. Por ello «cueste lo que cueste lo terminaré» no significa que el hablante ignore el precio, sino que declara que ningún precio alterará su decisión. Se trata, en el fondo, de un subjuntivo de valor universal-cuantificador, emparentado con «quienquiera que», «dondequiera que» y «comoquiera que»."
        ],
        "examples": [
          {
            "es": "Cueste lo que cueste, terminaré este proyecto.",
            "en": "Ningún costo hará que el hablante abandone el proyecto."
          },
          {
            "es": "Sea como sea, hablaremos mañana.",
            "en": "Independientemente de las circunstancias, la conversación tendrá lugar."
          },
          {
            "es": "Diga lo que diga la prensa, seguiré con mi plan.",
            "en": "Ninguna opinión ajena cambiará la decisión del hablante."
          },
          {
            "es": "Venga de donde venga esa idea, me parece acertada.",
            "en": "El origen de la idea resulta irrelevante para su valoración."
          },
          {
            "es": "Pase lo que pase, no perderemos la calma.",
            "en": "Cualquier eventualidad futura queda contemplada de antemano."
          }
        ],
        "checkpoint": [
          {
            "type": "multi-select",
            "question": "¿Cuáles de las siguientes estructuras exigen siempre el subjuntivo por su valor concesivo-universal?",
            "options": [
              "cueste lo que cueste",
              "porque cuesta mucho",
              "diga lo que diga",
              "ya que dice la verdad",
              "venga de donde venga"
            ],
            "correctIndexes": [
              0,
              2,
              4
            ],
            "explanation": "Las estructuras duplicadas de valor universal exigen subjuntivo porque anulan cualquier variable posible; las oraciones causales con «porque» y «ya que» llevan indicativo por presentar un hecho, no una concesión universal."
          },
          {
            "type": "word-order",
            "prompt": "Ordena las palabras para formar una fórmula concesiva fija seguida de la afirmación principal.",
            "words": [
              "cueste",
              "lo",
              "que",
              "cueste",
              "lo",
              "lograremos"
            ],
            "explanation": "La fórmula fija «cueste lo que cueste» antecede a la afirmación principal «lo lograremos», sin que ningún costo altere la decisión."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multi-select",
        "question": "¿Cuáles de las siguientes oraciones emplean el subjuntivo con un valor pragmático de atenuación, más allá de la exigencia sintáctica estricta?",
        "options": [
          "No digo que tengas razón, solo que lo entiendo.",
          "Quiero que vengas mañana.",
          "Eso no significa que sea la única opción.",
          "Dudo que llueva esta tarde.",
          "No es que no te crea."
        ],
        "correctIndexes": [
          0,
          2,
          4
        ],
        "explanation": "Las oraciones marcadas emplean el subjuntivo para suavizar una afirmación o distanciarse de un juicio, no solo porque el verbo lo exija mecánicamente; «querer que» y «dudar que» son exigencias de régimen verbal estándar."
      }
    ]
  },
  {
    "slug": "subjunctive-mastery-review-4",
    "level": "C1",
    "number": 4,
    "title": "Subjuntivo: Repaso y Matices Avanzados, Part 4 of 6",
    "summary": "Una síntesis de nivel avanzado sobre el uso del subjuntivo en todos sus tiempos, centrada en los matices de certeza, duda y cortesía que distinguen al hablante nativo.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "El subjuntivo como recurso pragmático de atenuación",
        "body": [
          "Más allá de las reglas de régimen verbal que fuerzan mecánicamente el subjuntivo, existe un uso pragmático en el que el hablante opta por él aun cuando el indicativo sería gramaticalmente aceptable, con el fin de suavizar una afirmación, distanciarse de su propia certeza o proyectar cortesía. Así, «no digo que tengas razón» resulta menos confrontativo que su equivalente con indicativo, aunque ambas formas circulan en el habla; el subjuntivo introduce una capa de provisionalidad que atenúa el choque de opiniones.",
          "De modo semejante, ciertos verbos de comunicación negados —«no significa que», «no implica que», «eso no quiere decir que»— prefieren casi categóricamente el subjuntivo en el registro culto, precisamente porque niegan una implicación lógica y no un hecho verificable: el hablante no está juzgando si algo es verdad, sino si una cosa se sigue necesariamente de otra. Reconocer esta capa pragmática —y no solo la sintáctica— es lo que distingue a un hablante de nivel avanzado, capaz de manipular el subjuntivo como herramienta retórica de matización."
        ],
        "examples": [
          {
            "es": "No digo que tengas razón, solo que entiendo tu punto.",
            "en": "El subjuntivo suaviza la afirmación y evita la confrontación directa."
          },
          {
            "es": "Eso no significa que sea la única solución.",
            "en": "Se niega una implicación lógica, no un hecho comprobable."
          },
          {
            "es": "No implica que estés equivocado.",
            "en": "El hablante distancia su juicio del de la otra persona."
          },
          {
            "es": "No es que no quiera ayudarte.",
            "en": "Se atenúa una posible acusación mediante el subjuntivo."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Por qué se prefiere «eso no significa que sea la única solución» sobre una alternativa con indicativo?",
            "options": [
              "Porque la gramática lo exige de forma obligatoria sin excepción.",
              "Porque se niega una implicación lógica y no un hecho verificable, y el subjuntivo marca esa distancia.",
              "Porque el indicativo sería incorrecto en cualquier contexto posible.",
              "Porque el verbo «significar» siempre rige subjuntivo en todos sus usos."
            ],
            "correctIndex": 1,
            "explanation": "La preferencia responde a un matiz pragmático: se cuestiona la relación lógica entre dos ideas, no la veracidad de un hecho, y el subjuntivo expresa esa distancia argumentativa."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "word-order",
        "prompt": "Ordena las palabras para formar una oración con subjuntivo de valoración retrospectiva.",
        "words": [
          "me",
          "alegra",
          "que",
          "hayas",
          "venido"
        ],
        "explanation": "El perfecto de subjuntivo «hayas venido» presenta la llegada como un hecho ya concluido que se valora después de ocurrido."
      }
    ]
  },
  {
    "slug": "subjunctive-mastery-review-5",
    "level": "C1",
    "number": 5,
    "title": "Subjuntivo: Repaso y Matices Avanzados, Part 5 of 6",
    "summary": "Una síntesis de nivel avanzado sobre el uso del subjuntivo en todos sus tiempos, centrada en los matices de certeza, duda y cortesía que distinguen al hablante nativo.",
    "duration": "5 min",
    "sections": [
      {
        "heading": "En la práctica",
        "body": [
          "Marta: No creo que hayamos evaluado todas las opciones antes de decidir.",
          "Diego: Puede ser, pero dudo que exista una alternativa mejor a estas alturas.",
          "Marta: Sea como sea, me habría gustado que lo discutiéramos con más calma.",
          "Diego: Entiendo tu molestia, aunque no creo que el resultado hubiera cambiado mucho.",
          "Marta: Eso no significa que debamos repetir el mismo error la próxima vez.",
          "Diego: Estoy de acuerdo. Cueste lo que cueste, la próxima decisión se tomará con más tiempo.",
          "Marta: Me alegra que lo veas así. Temía que siguiéramos improvisando indefinidamente.",
          "Diego: No digo que improvisar sea siempre malo, pero en este caso nos faltó rigor."
        ]
      }
    ],
    "exercises": [
      {
        "type": "matching",
        "instructions": "Relaciona cada tiempo de subjuntivo con el matiz temporal que expresa respecto al verbo principal.",
        "pairs": [
          {
            "left": "presente de subjuntivo",
            "right": "simultaneidad o posterioridad respecto al momento del habla"
          },
          {
            "left": "perfecto de subjuntivo",
            "right": "anterioridad ya concluida respecto al momento del habla"
          },
          {
            "left": "imperfecto de subjuntivo",
            "right": "simultaneidad o posterioridad respecto a un verbo principal en pasado"
          },
          {
            "left": "pluscuamperfecto de subjuntivo",
            "right": "anterioridad respecto a un verbo principal en pasado"
          }
        ],
        "explanation": "Cada tiempo de subjuntivo se define por su relación temporal con un punto de referencia: el presente y el perfecto se miden desde el momento del habla; el imperfecto y el pluscuamperfecto, desde el verbo principal en pasado."
      }
    ]
  },
  {
    "slug": "subjunctive-mastery-review-6",
    "level": "C1",
    "number": 6,
    "title": "Subjuntivo: Repaso y Matices Avanzados, Part 6 of 6",
    "summary": "Una síntesis de nivel avanzado sobre el uso del subjuntivo en todos sus tiempos, centrada en los matices de certeza, duda y cortesía que distinguen al hablante nativo.",
    "duration": "10 min",
    "sections": [
      {
        "heading": "Vocabulario: el subjuntivo en todos sus tiempos",
        "body": [
          "35 palabras relacionadas con el subjuntivo en todos sus tiempos."
        ],
        "examples": [
          {
            "es": "el grado de certeza",
            "en": "nivel de seguridad con que se afirma algo"
          },
          {
            "es": "la probabilidad remota",
            "en": "posibilidad muy baja de que algo ocurra"
          },
          {
            "es": "la subordinada",
            "en": "la oración que depende sintácticamente de otra y no tiene sentido pleno por sí sola"
          },
          {
            "es": "la concordancia temporal",
            "en": "la correspondencia entre los tiempos verbales de dos oraciones relacionadas"
          },
          {
            "es": "la anterioridad",
            "en": "la cualidad de un hecho de haber ocurrido antes de otro punto de referencia"
          },
          {
            "es": "la posterioridad",
            "en": "la cualidad de un hecho de ocurrir después de otro punto de referencia"
          },
          {
            "es": "la simultaneidad",
            "en": "la coincidencia temporal entre dos acciones o hechos"
          },
          {
            "es": "el desfase",
            "en": "la falta de coincidencia o ajuste entre dos elementos que deberían corresponder"
          },
          {
            "es": "la provisionalidad",
            "en": "el carácter de algo que se presenta como no definitivo ni concluyente"
          },
          {
            "es": "la atenuación",
            "en": "la suavización deliberada del tono o la fuerza de una afirmación"
          },
          {
            "es": "la certidumbre",
            "en": "el estado de plena seguridad sobre la verdad de algo"
          },
          {
            "es": "la aprensión",
            "en": "inquietud vaga ante algo que podría ocurrir"
          },
          {
            "es": "la conjetura",
            "en": "la suposición basada en indicios y no en pruebas concluyentes"
          },
          {
            "es": "la implicación",
            "en": "la consecuencia lógica que se deriva necesariamente de una afirmación"
          },
          {
            "es": "la valoración",
            "en": "el juicio subjetivo que se emite sobre algo, más allá de su verdad objetiva"
          },
          {
            "es": "retrospectivo",
            "en": "que mira o se refiere hacia un momento anterior ya transcurrido"
          },
          {
            "es": "la irrelevancia",
            "en": "la falta de importancia o de pertinencia de algo para el asunto tratado"
          },
          {
            "es": "la reticencia",
            "en": "la actitud de quien evita afirmar algo de manera directa o completa"
          },
          {
            "es": "el régimen verbal",
            "en": "el conjunto de exigencias sintácticas que un verbo impone a sus complementos"
          },
          {
            "es": "la subordinación",
            "en": "la relación de dependencia sintáctica entre dos oraciones"
          },
          {
            "es": "la locución verbal",
            "en": "expresión fija formada por varias palabras que funciona como una sola unidad de significado"
          },
          {
            "es": "la enunciación",
            "en": "el acto mismo de producir un enunciado, con su momento y circunstancias"
          },
          {
            "es": "la duplicación",
            "en": "la repetición de un mismo elemento con función gramatical o expresiva"
          },
          {
            "es": "universalizar",
            "en": "extender el alcance de una afirmación a todos los casos posibles sin excepción"
          },
          {
            "es": "el énfasis modal",
            "en": "refuerzo que un hablante da a su grado de certeza mediante recursos verbales"
          },
          {
            "es": "la confrontación",
            "en": "el enfrentamiento directo de posturas o afirmaciones opuestas"
          },
          {
            "es": "el distanciamiento",
            "en": "la actitud de quien se aparta deliberadamente de una afirmación o postura"
          },
          {
            "es": "lo consumado",
            "en": "aquello que ya se ha completado o realizado por entero"
          },
          {
            "es": "lo inminente",
            "en": "aquello que está a punto de suceder en un futuro muy cercano"
          },
          {
            "es": "la anécdota",
            "en": "el relato breve de un suceso particular, a menudo con valor ilustrativo"
          },
          {
            "es": "la certeza relativa",
            "en": "grado de seguridad que varía según el contexto o la fuente de información"
          },
          {
            "es": "la formulación",
            "en": "el modo particular en que se expresa una idea o una regla"
          },
          {
            "es": "la exhaustividad",
            "en": "la cualidad de abarcar por completo todos los aspectos de un asunto"
          },
          {
            "es": "lo hipotético",
            "en": "aquello que se plantea como supuesto y no como hecho comprobado"
          },
          {
            "es": "la escala de probabilidad",
            "en": "conjunto de grados que expresan desde la certeza hasta la duda"
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "Un hablante dice: «Dudaba que hubiera terminado el informe cuando llegó su jefe». ¿Respecto a qué momento se mide la anterioridad de «terminado»?",
        "options": [
          "Respecto al momento presente de quien narra la anécdota.",
          "Respecto a la llegada del jefe, sin relación con la duda.",
          "Respecto al momento de la duda, expresado por «dudaba».",
          "No hay ningún punto de referencia temporal en la oración."
        ],
        "correctIndex": 2,
        "explanation": "El pluscuamperfecto de subjuntivo ancla la anterioridad en el verbo principal «dudaba», que es el punto de referencia temporal desde el cual se mide si el informe ya estaba terminado."
      }
    ]
  },
  {
    "slug": "concessive-aunque-1",
    "level": "C1",
    "number": 7,
    "title": "El Subjuntivo con Aunque y Otras Concesivas, Part 1 of 5",
    "summary": "Un análisis de precisión sobre cómo el modo verbal tras «aunque» y otros conectores concesivos codifica la certeza, la duda o la irrelevancia argumentativa de un hecho.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "Aunque + indicativo: la concesión de un hecho asumido como cierto",
        "body": [
          "«Aunque» es, con diferencia, el conector concesivo más versátil del español, precisamente porque un mismo enunciado puede llevar indicativo o subjuntivo según la actitud del hablante hacia la información, no según la verdad objetiva del hecho. Cuando el hablante presenta el contenido de la cláusula introducida por «aunque» como un dato ya conocido, compartido o directamente comprobado, recurre al indicativo: «aunque llueve, saldré a caminar» presupone que, en efecto, está lloviendo en ese momento.",
          "El indicativo tras «aunque» no exige que el hecho sea agradable ni que el hablante lo acepte de buen grado; exige únicamente que se presente como información ya asentada en el discurso. De ahí que en la narración de hechos pasados —donde por definición ya se conoce el desenlace— «aunque» se combine casi siempre con indicativo: «aunque estudió toda la noche, no aprobó el examen»."
        ],
        "examples": [
          {
            "es": "Aunque llueve, saldré a caminar.",
            "en": "El hablante da por hecho que en ese momento está lloviendo."
          },
          {
            "es": "Aunque estudió toda la noche, no aprobó el examen.",
            "en": "El hecho de haber estudiado ya se conoce como cierto."
          },
          {
            "es": "Aunque es tarde, todavía podemos llegar.",
            "en": "Se asume como dato compartido que ya es tarde."
          },
          {
            "es": "Aunque no lo parece, es una persona muy tímida.",
            "en": "Se presenta como un hecho constatado, no como una suposición."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Qué presupone el hablante al decir «aunque llovía, salimos igual»?",
            "options": [
              "Que no sabe si llovía o no.",
              "Que da por cierto que efectivamente llovía.",
              "Que está imaginando una posible lluvia futura.",
              "Que la lluvia es solo una hipótesis descartada."
            ],
            "correctIndex": 1,
            "explanation": "El indicativo tras «aunque» presenta el hecho concesivo como ya conocido o comprobado, no como una suposición."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "¿Qué indica el uso del indicativo en «aunque perdimos el partido, el equipo jugó muy bien»?",
        "options": [
          "Que el hablante no está seguro de haber perdido.",
          "Que el hecho de haber perdido ya se conoce y se presenta como cierto.",
          "Que el partido todavía no ha terminado.",
          "Que se trata de una suposición sobre el futuro."
        ],
        "correctIndex": 1,
        "explanation": "El indicativo tras «aunque» presenta el hecho concesivo como ya conocido y comprobado, en este caso el resultado del partido."
      }
    ]
  },
  {
    "slug": "concessive-aunque-2",
    "level": "C1",
    "number": 8,
    "title": "El Subjuntivo con Aunque y Otras Concesivas, Part 2 of 5",
    "summary": "Un análisis de precisión sobre cómo el modo verbal tras «aunque» y otros conectores concesivos codifica la certeza, la duda o la irrelevancia argumentativa de un hecho.",
    "duration": "9 min",
    "sections": [
      {
        "heading": "Aunque + subjuntivo: la concesión hipotética o minimizada",
        "body": [
          "Cuando «aunque» va seguido de subjuntivo, el hablante deja de afirmar la veracidad del contenido concesivo y lo presenta como hipotético, desconocido o, en un uso especialmente sofisticado, como irrelevante para su argumento con independencia de que sea cierto o no. «Aunque llueva, saldré a caminar» no informa sobre el estado del tiempo; simplemente anticipa una posible objeción y la neutraliza de antemano.",
          "Existe además un matiz retórico más fino: un hablante puede usar el subjuntivo con un hecho que en realidad sabe cierto, precisamente para restarle importancia argumentativa. Decir «aunque sea mi jefe, no voy a tolerar ese trato» no pone en duda que la persona sea, efectivamente, el jefe; lo que hace el subjuntivo es señalar que ese hecho, por más real que sea, no altera la conclusión. Este uso —llamado a veces concesivo de rechazo argumentativo— es una de las señales más claras de dominio nativo del idioma."
        ],
        "examples": [
          {
            "es": "Aunque llueva mañana, iremos a la excursión.",
            "en": "El hablante no sabe si lloverá; anticipa una objeción hipotética."
          },
          {
            "es": "Aunque sea mi jefe, no voy a tolerar ese trato.",
            "en": "El hecho de ser el jefe es cierto, pero se presenta como irrelevante para la conclusión."
          }
        ]
      },
      {
        "heading": "Aunque + subjuntivo: la concesión hipotética o minimizada (cont'd)",
        "body": [],
        "examples": [
          {
            "es": "Aunque tengas razón, deberías haberlo dicho de otra forma.",
            "en": "Se concede la posible razón del otro sin que ello anule la crítica."
          },
          {
            "es": "Aunque cueste caro, lo compraré.",
            "en": "El precio, sea cual sea, no altera la decisión de comprar."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Qué matiz añade el subjuntivo en «aunque sea mi jefe, no voy a tolerar ese trato», si el hablante sabe con certeza que esa persona es su jefe?",
            "options": [
              "Indica que el hablante duda de que sea su jefe.",
              "Señala que ese hecho, aunque cierto, no cambia la conclusión del hablante.",
              "Es un error gramatical que debería corregirse con indicativo.",
              "Indica que la persona dejará de ser su jefe pronto."
            ],
            "correctIndex": 1,
            "explanation": "El subjuntivo aquí no expresa duda sobre el hecho, sino que lo presenta como irrelevante para la conclusión: es el llamado concesivo de rechazo argumentativo."
          },
          {
            "type": "fill-blank",
            "prompt": "Completa la oración concesiva con el matiz de anticipar una objeción hipotética.",
            "sentence": "Aunque ___ (llover) mañana, la excursión se mantiene.",
            "answer": "llueva",
            "explanation": "El subjuntivo se usa porque el hablante no sabe si lloverá; se trata de una objeción hipotética anticipada.",
            "hint": "El hablante desconoce si va a llover."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "fill-blank",
        "prompt": "Completa la oración concesiva con el modo adecuado.",
        "sentence": "A pesar de que ___ (ser) tarde, decidieron continuar la reunión.",
        "answer": "era",
        "explanation": "«A pesar de que» tiende al indicativo cuando describe un obstáculo ya real, como la hora avanzada de la reunión.",
        "hint": "El hecho ya ocurrió y se describe como cierto."
      }
    ]
  },
  {
    "slug": "concessive-aunque-3",
    "level": "C1",
    "number": 9,
    "title": "El Subjuntivo con Aunque y Otras Concesivas, Part 3 of 5",
    "summary": "Un análisis de precisión sobre cómo el modo verbal tras «aunque» y otros conectores concesivos codifica la certeza, la duda o la irrelevancia argumentativa de un hecho.",
    "duration": "9 min",
    "sections": [
      {
        "heading": "A pesar de que: cercanía y distancia respecto a aunque",
        "body": [
          "«A pesar de que» comparte con «aunque» la función concesiva, pero tiende con mayor fuerza hacia el indicativo, incluso en contextos donde «aunque» admitiría fácilmente el subjuntivo. Esto se debe a que «a pesar de que» suele introducir información que el hablante presenta como un obstáculo ya real y con frecuencia superado, más que como una condición hipotética: «a pesar de que llovía, llegamos a tiempo» describe un obstáculo efectivamente enfrentado.",
          "El subjuntivo con «a pesar de que» aparece sobre todo cuando el obstáculo se proyecta hacia el futuro o se plantea como mera posibilidad: «a pesar de que llueva mañana, mantendremos el evento al aire libre». En el registro formal, «a pesar de que» resulta frecuente porque aporta un matiz ligeramente más objetivo que «aunque», sin que exista entre ambos una diferencia de significado sustancial cuando comparten el mismo modo verbal."
        ],
        "examples": [
          {
            "es": "A pesar de que llovía, llegamos a tiempo.",
            "en": "El obstáculo ya se enfrentó y quedó superado; se narra como hecho."
          },
          {
            "es": "A pesar de que llueva mañana, mantendremos el evento.",
            "en": "El obstáculo se proyecta como una posibilidad futura, no como un hecho."
          },
          {
            "es": "A pesar de que el informe era extenso, lo terminó en un día.",
            "en": "Se describe un obstáculo real ya superado."
          },
          {
            "es": "A pesar de que tenga razón, no cambiaré mi decisión.",
            "en": "Se concede una posible razón futura sin comprometerse con su certeza."
          }
        ],
        "checkpoint": [
          {
            "type": "matching",
            "instructions": "Relaciona cada oración con el modo verbal que emplea y la razón de esa elección.",
            "pairs": [
              {
                "left": "A pesar de que llovía, llegamos a tiempo.",
                "right": "indicativo, porque describe un obstáculo real ya enfrentado"
              },
              {
                "left": "A pesar de que llueva mañana, mantendremos el evento.",
                "right": "subjuntivo, porque el obstáculo se proyecta como posibilidad futura"
              }
            ],
            "explanation": "«A pesar de que» sigue el mismo principio que «aunque»: el indicativo describe hechos asumidos como reales, y el subjuntivo, posibilidades no confirmadas."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multi-select",
        "question": "¿En cuáles de las siguientes oraciones el subjuntivo señala que un hecho, aunque cierto, se considera irrelevante para la conclusión?",
        "options": [
          "Aunque sea tarde, terminaré el informe esta noche.",
          "Aunque llueve, saldré a caminar.",
          "Aunque tengas razón, no cambiaré de decisión.",
          "Aunque estudió mucho, no aprobó."
        ],
        "correctIndexes": [
          0,
          2
        ],
        "explanation": "En las oraciones marcadas, el subjuntivo no expresa duda sobre el hecho, sino que lo presenta como irrelevante para la conclusión final, un uso conocido como concesivo de rechazo argumentativo."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras para formar una oración concesiva de esfuerzo reiterado.",
        "words": [
          "por",
          "más",
          "que",
          "insistas",
          "no",
          "cambiaré",
          "de",
          "opinión"
        ],
        "explanation": "«Por más que insistas» antepone la fórmula concesiva de esfuerzo reiterado a la conclusión inalterable."
      }
    ]
  },
  {
    "slug": "concessive-aunque-4",
    "level": "C1",
    "number": 10,
    "title": "El Subjuntivo con Aunque y Otras Concesivas, Part 4 of 5",
    "summary": "Un análisis de precisión sobre cómo el modo verbal tras «aunque» y otros conectores concesivos codifica la certeza, la duda o la irrelevancia argumentativa de un hecho.",
    "duration": "10 min",
    "sections": [
      {
        "heading": "Por más que y por mucho que: la concesión intensificada y exhaustiva",
        "body": [
          "«Por más que» y «por mucho que» añaden a la concesión un matiz de esfuerzo reiterado o de intensidad graduable: no se limitan a admitir un obstáculo, sino que subrayan que, por elevado que sea el grado de ese esfuerzo o esa cualidad, el resultado no cambia. A diferencia de «aunque», estas estructuras exigen subjuntivo de manera casi categórica cuando se refieren a acciones repetidas o a intentos reiterados, incluso si esos intentos ya tuvieron lugar en el pasado.",
          "La diferencia entre «por más que» y «por mucho que» es mínima: el primero se combina con más naturalidad con verbos, y el segundo, con sustantivos o con una función más adverbial general. Ambas estructuras comparten con las fórmulas fijas de valor universal la misma lógica cuantificadora: cualquiera que sea el grado del esfuerzo o la cualidad, la conclusión se mantiene inalterada."
        ],
        "examples": [
          {
            "es": "Por más que insistas, no cambiaré de opinión.",
            "en": "Ningún grado de insistencia alterará la decisión del hablante."
          },
          {
            "es": "Por mucho dinero que tengas, no podrás comprar su confianza.",
            "en": "La cantidad de dinero, por elevada que sea, resulta irrelevante para el resultado."
          },
          {
            "es": "Por más que lo intentara, no lograba entenderlo.",
            "en": "Se enfatiza la futilidad del esfuerzo repetido como concepto general."
          },
          {
            "es": "Por muchas vueltas que le des, la respuesta seguirá siendo la misma.",
            "en": "Cualquier cantidad de reflexión no cambiará la conclusión."
          }
        ],
        "checkpoint": [
          {
            "type": "multi-select",
            "question": "¿Qué característica comparten «por más que» y «por mucho que» frente a «aunque»?",
            "options": [
              "Ambas exigen siempre indicativo.",
              "Ambas añaden un matiz de intensidad o esfuerzo graduable.",
              "Ambas siguen una lógica cuantificadora universal similar a «cueste lo que cueste».",
              "Ambas solo se usan en el pasado."
            ],
            "correctIndexes": [
              1,
              2
            ],
            "explanation": "«Por más que» y «por mucho que» comparten con las fórmulas concesivo-universales una lógica de cuantificación: cualquiera que sea el grado del esfuerzo o la cualidad, el resultado no cambia."
          }
        ]
      },
      {
        "heading": "En la práctica",
        "body": [
          "Elena: Aunque el proyecto tenga riesgos, creo que debemos seguir adelante.",
          "Roberto: A pesar de que los números son buenos, me preocupa el plazo.",
          "Elena: Por más que insistas en el plazo, la calidad no se puede improvisar.",
          "Roberto: Aunque tienes razón en eso, el cliente no va a esperar indefinidamente.",
          "Elena: Aunque el cliente presione, no vamos a sacrificar la calidad del trabajo.",
          "Roberto: Por mucho que me convenzas, sigo pensando que necesitamos más recursos.",
          "Elena: A pesar de que faltan recursos, hemos logrado avances importantes.",
          "Roberto: Aunque sea difícil admitirlo, quizás tengas razón después de todo."
        ]
      }
    ],
    "exercises": [
      {
        "type": "matching",
        "instructions": "Relaciona cada conector concesivo con el matiz que aporta.",
        "pairs": [
          {
            "left": "aunque + indicativo",
            "right": "presenta el hecho concesivo como ya conocido o comprobado"
          },
          {
            "left": "aunque + subjuntivo",
            "right": "presenta el hecho como hipotético o como irrelevante para la conclusión"
          },
          {
            "left": "por más que",
            "right": "subraya la futilidad de un esfuerzo reiterado, sin importar su grado"
          },
          {
            "left": "a pesar de que",
            "right": "suele describir un obstáculo real ya enfrentado o superado"
          }
        ],
        "explanation": "Cada conector concesivo aporta un matiz distinto según el modo verbal y el grado de certeza que el hablante quiere transmitir."
      }
    ]
  },
  {
    "slug": "concessive-aunque-5",
    "level": "C1",
    "number": 11,
    "title": "El Subjuntivo con Aunque y Otras Concesivas, Part 5 of 5",
    "summary": "Un análisis de precisión sobre cómo el modo verbal tras «aunque» y otros conectores concesivos codifica la certeza, la duda o la irrelevancia argumentativa de un hecho.",
    "duration": "9 min",
    "sections": [
      {
        "heading": "Vocabulario: la concesión y el contraste",
        "body": [
          "35 palabras relacionadas con la concesión y el contraste."
        ],
        "examples": [
          {
            "es": "la aquiescencia",
            "en": "aceptación tácita de un punto sin oponerse abiertamente a él"
          },
          {
            "es": "el impedimento",
            "en": "circunstancia que dificulta o impide el desarrollo de algo"
          },
          {
            "es": "el reparo",
            "en": "duda o inconveniente que se plantea frente a una idea"
          },
          {
            "es": "templar",
            "en": "moderar el tono o la intensidad de una afirmación"
          },
          {
            "es": "la futilidad",
            "en": "la cualidad de ser inútil o de no producir el efecto esperado"
          },
          {
            "es": "reiterado",
            "en": "que se repite varias veces de forma insistente"
          },
          {
            "es": "el titubeo",
            "en": "muestra de duda o inseguridad al hablar o actuar"
          },
          {
            "es": "neutralizar",
            "en": "anular el efecto o la fuerza de algo mediante una acción contraria"
          },
          {
            "es": "el matiz argumentativo",
            "en": "la sutileza que modifica el peso o el sentido de un argumento"
          },
          {
            "es": "la pertinencia",
            "en": "la cualidad de resultar adecuado o relevante para el asunto tratado"
          },
          {
            "es": "el viraje argumental",
            "en": "giro inesperado en el desarrollo de un razonamiento o relato"
          },
          {
            "es": "sobrentender",
            "en": "comprender algo no dicho explícitamente a partir del contexto"
          },
          {
            "es": "la salvedad",
            "en": "excepción o condición que matiza una afirmación general"
          },
          {
            "es": "la puntualización",
            "en": "la aclaración breve que matiza o precisa una afirmación"
          },
          {
            "es": "lo presunto",
            "en": "aquello que se supone cierto sin haberse comprobado plenamente"
          },
          {
            "es": "la contraposición",
            "en": "la acción de poner dos ideas o hechos uno frente al otro para resaltar su diferencia"
          },
          {
            "es": "el recelo",
            "en": "desconfianza o inquietud ante algo o alguien"
          },
          {
            "es": "la persistencia",
            "en": "la constancia con que alguien mantiene un esfuerzo o una postura"
          },
          {
            "es": "el desacuerdo",
            "en": "la falta de coincidencia entre dos opiniones o posturas"
          },
          {
            "es": "lo inamovible",
            "en": "aquello que no puede cambiarse ni desplazarse de su posición"
          },
          {
            "es": "la tenacidad",
            "en": "la firmeza con que alguien persiste en un propósito a pesar de las dificultades"
          },
          {
            "es": "el traspié",
            "en": "error o tropiezo que interrumpe momentáneamente el avance de algo"
          },
          {
            "es": "ponderar",
            "en": "evaluar con cuidado los aspectos de una situación antes de decidir"
          },
          {
            "es": "la tesitura",
            "en": "circunstancia concreta en la que alguien debe actuar o decidir"
          },
          {
            "es": "la controversia",
            "en": "el desacuerdo público y sostenido en torno a un asunto"
          },
          {
            "es": "lo insalvable",
            "en": "aquello que no puede superarse ni resolverse por ningún medio"
          },
          {
            "es": "la contrariedad",
            "en": "el contratiempo que causa disgusto o dificultad"
          },
          {
            "es": "minimizar",
            "en": "restar importancia o magnitud a algo de manera deliberada"
          },
          {
            "es": "el trasfondo",
            "en": "el conjunto de circunstancias o motivos que subyacen a una situación"
          },
          {
            "es": "la argumentación",
            "en": "el conjunto de razonamientos empleados para sostener una postura"
          },
          {
            "es": "lo circunstancial",
            "en": "aquello que depende de las circunstancias y no es esencial ni permanente"
          },
          {
            "es": "la firmeza",
            "en": "la seguridad y constancia con que se sostiene una postura"
          },
          {
            "es": "el resquicio",
            "en": "pequeña posibilidad u oportunidad que se abre dentro de una situación difícil"
          },
          {
            "es": "la resignación",
            "en": "la actitud de aceptar una situación adversa sin oponer más resistencia"
          },
          {
            "es": "la insistencia",
            "en": "la acción de repetir con firmeza una petición o una idea"
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "Un hablante dice: «Aunque sea el director, tendrá que seguir el mismo procedimiento que los demás». ¿Qué indica el subjuntivo en este caso?",
        "options": [
          "Que el hablante duda de que esa persona sea realmente el director.",
          "Que el cargo de director, aunque real, no exime a la persona del procedimiento.",
          "Que la persona dejará de ser director próximamente.",
          "Que se trata de un error gramatical."
        ],
        "correctIndex": 1,
        "explanation": "El subjuntivo aquí no cuestiona el hecho de que la persona sea directora, sino que resta relevancia a ese hecho frente a la conclusión: el procedimiento se aplica igual."
      }
    ]
  },
  {
    "slug": "nominalization-part-1-1",
    "level": "C1",
    "number": 12,
    "title": "Nominalización y Sustantivación (Parte 1 de 2), Part 1 of 3",
    "summary": "Un estudio de los recursos con los que el español convierte verbos y adjetivos en sustantivos abstractos para lograr un registro más formal, compacto y académico.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "El hecho de que: nominalizar una proposición entera",
        "body": [
          "«El hecho de que» permite convertir una oración completa en el sujeto o el complemento de otra, otorgándole el estatus sintáctico de un sustantivo. Esta construcción resulta indispensable en el registro académico y periodístico porque permite tratar un suceso o una afirmación como una entidad sobre la que se puede opinar, valorar o argumentar, sin necesidad de repetir la proposición como oración subordinada tradicional.",
          "El modo verbal dentro de «el hecho de que» genera cierta controversia entre gramáticos: la norma más extendida prefiere el subjuntivo por tratarse de una proposición presentada como tema ya conocido pero no afirmado directamente por el hablante, aunque el uso del indicativo no es infrecuente cuando el hablante quiere subrayar la certeza objetiva del hecho. En el español peninsular culto, el subjuntivo domina claramente en «el hecho de que»; en ciertas variedades americanas, el indicativo gana terreno cuando el hecho se percibe como plenamente comprobado."
        ],
        "examples": [
          {
            "es": "El hecho de que los precios hayan subido preocupa a los economistas.",
            "en": "Toda la subida de precios se convierte en un bloque nominal que funciona como sujeto."
          },
          {
            "es": "El hecho de que no haya llamado no significa que se haya olvidado.",
            "en": "La ausencia de la llamada se trata como una entidad sobre la que se argumenta."
          },
          {
            "es": "Nos sorprende el hecho de que la propuesta haya sido aprobada tan rápido.",
            "en": "La aprobación se nominaliza para funcionar como complemento del verbo «sorprender»."
          },
          {
            "es": "El hecho de que insista tanto revela cierta inseguridad.",
            "en": "La insistencia, nominalizada, se convierte en el sujeto de la oración."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Qué función cumple «el hecho de que» en la oración «el hecho de que hayan cerrado la fábrica afectó a toda la región»?",
            "options": [
              "Introduce una pregunta indirecta.",
              "Convierte toda la proposición en un bloque nominal que funciona como sujeto.",
              "Expresa una orden directa.",
              "Sustituye a un adjetivo calificativo."
            ],
            "correctIndex": 1,
            "explanation": "«El hecho de que» nominaliza la proposición completa, permitiendo que funcione sintácticamente como sujeto de «afectó»."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "¿Qué función sintáctica cumple la nominalización en «la implementación de la medida se retrasó»?",
        "options": [
          "Convierte la oración en una pregunta retórica.",
          "Condensa un proceso verbal en un sujeto nominal compacto.",
          "Introduce una cláusula concesiva.",
          "Elimina toda referencia temporal de la oración."
        ],
        "correctIndex": 1,
        "explanation": "La nominalización transforma el verbo «implementar» en un sustantivo que funciona como sujeto compacto de la oración."
      }
    ]
  },
  {
    "slug": "nominalization-part-1-2",
    "level": "C1",
    "number": 13,
    "title": "Nominalización y Sustantivación (Parte 1 de 2), Part 2 of 3",
    "summary": "Un estudio de los recursos con los que el español convierte verbos y adjetivos en sustantivos abstractos para lograr un registro más formal, compacto y académico.",
    "duration": "9 min",
    "sections": [
      {
        "heading": "Lo + adjetivo: sustantivación de cualidades abstractas",
        "body": [
          "La estructura «lo» más adjetivo masculino singular convierte una cualidad en una entidad abstracta susceptible de ser sujeto, objeto o término de comparación: «lo interesante del caso es que nadie lo denunció» extrae la cualidad de «interesante» y la convierte en el núcleo nominal de toda la oración. Este recurso, característico del registro culto y ensayístico, permite condensar juicios de valor sin necesidad de un sustantivo abstracto ya existente en la lengua.",
          "Un matiz importante distingue «lo bueno» de «la bondad»: mientras que el segundo designa la cualidad en abstracto y de forma permanente, «lo bueno» suele referirse a un aspecto concreto y contextual de una situación particular. Esta flexibilidad convierte a «lo + adjetivo» en una herramienta especialmente productiva para la argumentación matizada, donde el hablante necesita señalar un aspecto específico sin comprometerse con una generalización."
        ],
        "examples": [
          {
            "es": "Lo interesante del caso es que nadie lo denunció.",
            "en": "Se extrae un aspecto concreto y se convierte en el sujeto de la oración."
          },
          {
            "es": "Lo difícil no es empezar, sino mantener la constancia.",
            "en": "Se contrasta un aspecto abstracto con otro dentro de la misma oración."
          }
        ]
      },
      {
        "heading": "Lo + adjetivo: sustantivación de cualidades abstractas (cont'd)",
        "body": [],
        "examples": [
          {
            "es": "No entiendo lo complicado de este trámite.",
            "en": "Se nominaliza la complejidad como un aspecto específico del trámite."
          },
          {
            "es": "Lo curioso es que nadie se había dado cuenta antes.",
            "en": "Se señala un rasgo llamativo de la situación sin generalizar."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa con la estructura de sustantivación adecuada.",
            "sentence": "___ (interesante) de su propuesta es que nadie la había pensado antes.",
            "answer": "Lo interesante",
            "explanation": "«Lo + adjetivo» convierte la cualidad «interesante» en el núcleo nominal que funciona como sujeto de la oración.",
            "hint": "Se necesita el artículo neutro seguido del adjetivo."
          },
          {
            "type": "multiple-choice",
            "question": "¿Qué diferencia principal existe entre «lo bueno de este plan» y «la bondad del plan»?",
            "options": [
              "No hay ninguna diferencia; son intercambiables en todo contexto.",
              "«Lo bueno» señala un aspecto concreto y contextual; «la bondad» designa la cualidad en abstracto.",
              "«La bondad» solo se usa en textos legales.",
              "«Lo bueno» es gramaticalmente incorrecto."
            ],
            "correctIndex": 1,
            "explanation": "«Lo + adjetivo» suele referirse a un aspecto concreto de una situación particular, mientras que el sustantivo abstracto tradicional designa la cualidad de forma general y permanente."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "fill-blank",
        "prompt": "Completa con la estructura de sustantivación adecuada.",
        "sentence": "___ (curioso) del asunto es que nadie preguntó antes.",
        "answer": "Lo curioso",
        "explanation": "«Lo + adjetivo» convierte la cualidad en un núcleo nominal que funciona como sujeto de la oración.",
        "hint": "Se necesita el artículo neutro seguido del adjetivo."
      }
    ]
  },
  {
    "slug": "nominalization-part-1-3",
    "level": "C1",
    "number": 14,
    "title": "Nominalización y Sustantivación (Parte 1 de 2), Part 3 of 3",
    "summary": "Un estudio de los recursos con los que el español convierte verbos y adjetivos en sustantivos abstractos para lograr un registro más formal, compacto y académico.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Sufijos derivativos: matices de productividad y registro",
        "body": [
          "Los sufijos nominalizadores -ción, -miento, -dad, -eza y -ura no son intercambiables ni completamente predecibles: cada uno impone restricciones morfológicas y connotaciones de registro que un hablante avanzado debe reconocer más que memorizar como reglas fijas. El sufijo -ción, de origen latino, resulta el más productivo con verbos en -ar y aporta un matiz de proceso formal o técnico; -miento, en cambio, se combina preferentemente con verbos en -er/-ir y a menudo describe procesos más concretos o físicos, aunque ambos compiten en ciertos casos.",
          "Los sufijos -dad y -eza nominalizan adjetivos, pero con distinta procedencia y matiz: -dad, de raíz culta, tiende a formar sustantivos más abstractos y de registro elevado, mientras que -eza, de raíz más patrimonial, produce sustantivos con un matiz ligeramente más cotidiano o perceptible. Reconocer qué sufijo corresponde a cada base léxica —y detectar los casos en que la lengua ha fijado una sola opción por convención histórica, no por regla productiva— es una marca distintiva del dominio nativo del vocabulario culto."
        ],
        "examples": [
          {
            "es": "la transformación",
            "en": "el proceso de cambiar radicalmente de forma o de naturaleza"
          },
          {
            "es": "el establecimiento",
            "en": "la acción de fundar o instituir algo de manera formal"
          },
          {
            "es": "la complejidad",
            "en": "la cualidad de estar compuesto por muchos elementos interrelacionados"
          },
          {
            "es": "la belleza",
            "en": "la cualidad de resultar estéticamente agradable a los sentidos"
          },
          {
            "es": "el sufrimiento",
            "en": "el proceso de padecer dolor físico o emocional de manera prolongada"
          }
        ],
        "checkpoint": [
          {
            "type": "matching",
            "instructions": "Relaciona cada sufijo nominalizador con el matiz o la restricción que lo caracteriza.",
            "pairs": [
              {
                "left": "-ción",
                "right": "productivo con verbos en -ar; aporta un matiz de proceso formal o técnico"
              },
              {
                "left": "-miento",
                "right": "se combina preferentemente con verbos en -er/-ir; describe procesos más concretos"
              },
              {
                "left": "-dad",
                "right": "de raíz culta; forma sustantivos abstractos de registro elevado"
              },
              {
                "left": "-eza",
                "right": "de raíz patrimonial; produce sustantivos con un matiz más cotidiano"
              }
            ],
            "explanation": "Cada sufijo nominalizador impone restricciones morfológicas y connotaciones de registro propias, no intercambiables entre sí."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multi-select",
        "question": "¿Qué efectos suele producir la nominalización en un texto formal?",
        "options": [
          "Mayor compactación sintáctica.",
          "Un tono más coloquial y cercano.",
          "Un efecto de objetividad o distancia.",
          "Mayor densidad informativa.",
          "Una simplificación total del vocabulario."
        ],
        "correctIndexes": [
          0,
          2,
          3
        ],
        "explanation": "La nominalización compacta la sintaxis, proyecta objetividad y aumenta la densidad informativa; no produce un tono coloquial ni simplifica el vocabulario."
      }
    ]
  },
  {
    "slug": "nominalization-part-1-mastery-check",
    "level": "C1",
    "number": 15,
    "title": "Prueba de Dominio: Nominalización y Sustantivación (Parte 1)",
    "summary": "Una prueba exigente sobre los recursos de nominalización del español —«el hecho de que», «lo + adjetivo» y los sufijos derivativos— aplicados a oraciones y vocabulario completamente inéditos.",
    "duration": "10 min",
    "sections": [],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "¿Qué función cumple «el hecho de que» en la oración «el hecho de que el gobierno haya retrasado la reforma genera incertidumbre en los mercados»?",
        "options": [
          "Introduce una pregunta indirecta sobre las intenciones del gobierno.",
          "Convierte toda la proposición en un bloque nominal que funciona como sujeto de «genera».",
          "Expresa una orden dirigida al gobierno.",
          "Sustituye a un adjetivo calificativo dentro de la oración."
        ],
        "correctIndex": 1,
        "explanation": "«El hecho de que» nominaliza la proposición completa —el retraso de la reforma—, permitiendo que funcione sintácticamente como sujeto compacto del verbo «genera»."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa con el modo verbal adecuado dentro de «el hecho de que», según la norma culta peninsular.",
        "sentence": "El hecho de que ___ (haber) tantos candidatos no garantiza que el proceso de selección sea justo.",
        "answer": "haya",
        "hint": "Se trata de una proposición presentada como tema conocido pero no afirmado directamente por el hablante.",
        "explanation": "La norma más extendida prefiere el subjuntivo dentro de «el hecho de que», por tratarse de una proposición presentada como tema ya conocido pero no afirmado directamente por el hablante en ese momento del discurso."
      },
      {
        "type": "multiple-choice",
        "question": "Según lo estudiado, ¿qué modo verbal gana terreno dentro de «el hecho de que» en ciertas variedades americanas, cuando el hecho se percibe como plenamente comprobado?",
        "options": [
          "El subjuntivo, de forma exclusiva y sin ninguna excepción.",
          "El indicativo, que subraya la certeza objetiva del hecho.",
          "El condicional, para suavizar la afirmación.",
          "El imperativo, para dar mayor énfasis a la proposición."
        ],
        "correctIndex": 1,
        "explanation": "Aunque el subjuntivo domina en el español peninsular culto, en ciertas variedades americanas el indicativo gana terreno dentro de «el hecho de que» cuando el hablante quiere subrayar la certeza objetiva del hecho enunciado."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa con la estructura de sustantivación adecuada.",
        "sentence": "___ (sorprendente) de la noticia es que nadie la había filtrado antes de la rueda de prensa.",
        "answer": "Lo sorprendente",
        "hint": "Se necesita el artículo neutro seguido del adjetivo.",
        "explanation": "«Lo + adjetivo» convierte la cualidad «sorprendente» en el núcleo nominal que funciona como sujeto de la oración, extrayendo un aspecto concreto de la noticia."
      },
      {
        "type": "multiple-choice",
        "question": "¿Qué diferencia principal existe entre «lo justo de la decisión» y «la justicia de la decisión»?",
        "options": [
          "No hay ninguna diferencia; ambas expresiones son intercambiables en cualquier contexto.",
          "«Lo justo» señala un aspecto concreto y contextual de esa decisión particular; «la justicia» designa la cualidad en abstracto y de forma permanente.",
          "«La justicia» solo puede usarse en contextos judiciales, nunca en el habla cotidiana.",
          "«Lo justo» es gramaticalmente incorrecto en el registro culto."
        ],
        "correctIndex": 1,
        "explanation": "«Lo + adjetivo» suele referirse a un aspecto concreto de una situación particular, mientras que el sustantivo abstracto tradicional («la justicia») designa la cualidad de forma general y permanente, sin atarse a un caso concreto."
      },
      {
        "type": "matching",
        "instructions": "Relaciona cada sustantivo nominalizado con el sufijo y el matiz que corresponde a su formación.",
        "pairs": [
          {
            "left": "la fundación (de fundar)",
            "right": "-ción: proceso formal, productivo con verbos en -ar"
          },
          {
            "left": "el nombramiento (de nombrar)",
            "right": "-miento: proceso más concreto, común con verbos en -ar/-er/-ir"
          },
          {
            "left": "la sensibilidad (de sensible)",
            "right": "-dad: raíz culta, registro elevado y abstracto"
          },
          {
            "left": "la limpieza (de limpio)",
            "right": "-eza: raíz patrimonial, matiz más cotidiano"
          }
        ],
        "explanation": "Cada sufijo nominalizador impone restricciones morfológicas y connotaciones de registro propias que un hablante avanzado reconoce caso por caso, más que a partir de una regla completamente predecible."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa con el sustantivo nominalizado a partir del verbo entre paréntesis.",
        "sentence": "La ___ (contratar) de nuevo personal se aprobó en la última junta directiva.",
        "answer": "contratación",
        "hint": "Piensa en el sufijo más productivo con verbos terminados en -ar.",
        "explanation": "El sufijo -ción, el más productivo con verbos en -ar, aporta aquí un matiz de proceso formal y técnico, propio del registro administrativo de una junta directiva."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa con el sustantivo nominalizado a partir del verbo entre paréntesis.",
        "sentence": "El ___ (nombrar) del nuevo director se hizo oficial ayer por la tarde.",
        "answer": "nombramiento",
        "hint": "Piensa en el sufijo que suele describir procesos más concretos.",
        "explanation": "El sufijo -miento describe aquí un proceso concreto y puntual —la designación oficial del nuevo director— dentro del registro administrativo."
      },
      {
        "type": "multiple-choice",
        "question": "¿Qué distingue, en términos de registro, al sufijo -dad del sufijo -eza al nominalizar un adjetivo?",
        "options": [
          "No existe ninguna diferencia de registro entre ambos sufijos.",
          "-dad, de raíz culta, tiende a formar sustantivos más abstractos y de registro elevado; -eza, de raíz patrimonial, produce sustantivos con un matiz más cotidiano.",
          "-eza solo puede combinarse con verbos, nunca con adjetivos.",
          "-dad es exclusivo del español medieval y ya no se emplea en la actualidad."
        ],
        "correctIndex": 1,
        "explanation": "-dad, de origen culto, tiende a producir sustantivos abstractos de registro elevado, mientras que -eza, de raíz más patrimonial, aporta un matiz ligeramente más cotidiano o perceptible al sustantivo resultante."
      },
      {
        "type": "multi-select",
        "question": "¿Cuáles de las siguientes oraciones emplean correctamente la estructura de nominalización que pretenden expresar?",
        "options": [
          "El hecho de que hayan cancelado el vuelo complicó todos nuestros planes de viaje.",
          "El hecho de insistan tanto en el mismo punto ya resulta agotador.",
          "Lo absurdo de la situación es que todos lo sabían y nadie dijo nada.",
          "Lo absurdo de que la situación es que todos lo sabían."
        ],
        "correctIndexes": [
          0,
          2
        ],
        "explanation": "La primera y la tercera oración emplean correctamente «el hecho de que» y «lo + adjetivo»; la segunda omite indebidamente el «que» tras «de», y la cuarta combina de forma agramatical «lo + adjetivo» con «de que», mezclando dos estructuras distintas."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras para formar una oración con «el hecho de que» como sujeto nominalizado.",
        "words": [
          "el",
          "hecho",
          "de",
          "que",
          "hayan",
          "cancelado",
          "el",
          "vuelo",
          "nos",
          "complica",
          "los",
          "planes"
        ],
        "translation": "The fact that they cancelled the flight complicates our plans.",
        "explanation": "«El hecho de que» nominaliza toda la proposición sobre la cancelación del vuelo, convirtiéndola en el sujeto compacto del verbo «complica»."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras para formar una oración con «lo + adjetivo» como sujeto nominalizado.",
        "words": [
          "lo",
          "absurdo",
          "de",
          "la",
          "situación",
          "es",
          "que",
          "todos",
          "lo",
          "sabían"
        ],
        "translation": "The absurd thing about the situation is that everyone knew it.",
        "explanation": "«Lo absurdo» extrae la cualidad de «absurdo» y la convierte en el núcleo nominal que funciona como sujeto de toda la oración."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Traduce empleando la estructura de nominalización adecuada.",
        "source": "The fact that the committee rejected the proposal doesn't mean the project is over.",
        "answer": "El hecho de que el comité haya rechazado la propuesta no significa que el proyecto haya terminado.",
        "altAnswers": [
          "El hecho de que el comité rechazara la propuesta no significa que el proyecto se haya terminado."
        ],
        "explanation": "«El hecho de que» nominaliza toda la proposición sobre el rechazo de la propuesta, tratándola como una entidad sobre la que se predica algo, con el subjuntivo exigido por la norma culta."
      },
      {
        "type": "translate",
        "direction": "es-en",
        "prompt": "Traduce al inglés reconociendo la estructura de sustantivación empleada.",
        "source": "Lo preocupante de este informe es que nadie lo había revisado antes de publicarlo.",
        "answer": "The worrying thing about this report is that nobody had reviewed it before publishing it.",
        "altAnswers": [
          "What's worrying about this report is that no one had reviewed it before it was published."
        ],
        "explanation": "«Lo preocupante» nominaliza la cualidad de «preocupante», aplicada aquí específicamente a este informe; el inglés recurre a una perífrasis equivalente («the worrying thing about») para lograr el mismo efecto de sustantivación."
      },
      {
        "type": "multiple-choice",
        "question": "¿Qué función cumple «lo» en la oración «lo absurdo de la situación es que todos lo sabían»?",
        "options": [
          "Funciona como complemento directo de un verbo transitivo.",
          "Convierte la cualidad «absurdo» en una entidad abstracta que funciona como sujeto de la oración.",
          "Introduce una cláusula concesiva dentro de la oración.",
          "Sustituye a un sustantivo masculino singular ya mencionado."
        ],
        "correctIndex": 1,
        "explanation": "«Lo + adjetivo» convierte la cualidad abstracta en el núcleo nominal de la oración, permitiendo que funcione como sujeto, de forma similar a como «el hecho de que» nominaliza una proposición completa."
      },
      {
        "type": "multi-select",
        "question": "¿Cuáles de los siguientes sustantivos nominalizados están correctamente formados a partir del verbo indicado entre paréntesis?",
        "options": [
          "la organización (de organizar)",
          "el crecimiento (de crecer)",
          "la sufrición (de sufrir)",
          "la protección (de proteger)"
        ],
        "correctIndexes": [
          0,
          1,
          3
        ],
        "explanation": "«Organización», «crecimiento» y «protección» son formaciones correctas y consolidadas; el sustantivo correcto derivado de «sufrir» es «sufrimiento», no «sufrición», lo cual demuestra que la elección del sufijo no siempre es predecible y debe fijarse mediante el uso, no deducirse por analogía."
      }
    ]
  },
  {
    "slug": "nominalization-part-2-1",
    "level": "C1",
    "number": 16,
    "title": "Nominalización y Sustantivación (Parte 2 de 2), Part 1 of 3",
    "summary": "Un estudio de los recursos con los que el español convierte verbos y adjetivos en sustantivos abstractos para lograr un registro más formal, compacto y académico.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Efectos estilísticos de la nominalización en el registro formal",
        "body": [
          "La nominalización no es un mero recurso gramatical, sino una estrategia estilística que transforma profundamente el tono de un texto. Al convertir verbos y adjetivos en sustantivos abstractos, el discurso académico y burocrático logra una mayor compactación sintáctica: una sola oración nominal puede condensar información que, expresada mediante verbos personales, requeriría varias cláusulas subordinadas.",
          "Este proceso conlleva también un efecto de despersonalización: al eliminar el sujeto agente explícito y sustituirlo por un sustantivo abstracto, el texto proyecta mayor objetividad o distancia, un recurso habitual en la escritura científica y en los informes institucionales. Sin embargo, un exceso de nominalización puede volver un texto opaco o artificialmente solemne, por lo que el hablante culto dosifica este recurso según el género textual y el efecto retórico que busca."
        ],
        "examples": [
          {
            "es": "La decisión gubernamental de aumentar los impuestos generó protestas.",
            "en": "La nominalización condensa una oración causal completa en un sujeto compacto."
          },
          {
            "es": "La implementación de la medida se retrasó varios meses.",
            "en": "Se elimina el sujeto agente explícito para proyectar mayor objetividad."
          },
          {
            "es": "El incumplimiento de los plazos afectó a todo el proyecto.",
            "en": "Un verbo personal se convierte en sustantivo para condensar la información."
          },
          {
            "es": "La revisión del contrato quedó pendiente hasta nuevo aviso.",
            "en": "El proceso de revisar se nominaliza para un tono más formal e impersonal."
          }
        ],
        "checkpoint": [
          {
            "type": "multi-select",
            "question": "¿Qué efectos produce la nominalización excesiva en un texto formal?",
            "options": [
              "Mayor compactación sintáctica.",
              "Mayor claridad para un lector principiante.",
              "Un efecto de despersonalización u objetividad.",
              "Un tono más coloquial y cercano.",
              "Riesgo de volver el texto opaco si se abusa de ella."
            ],
            "correctIndexes": [
              0,
              2,
              4
            ],
            "explanation": "La nominalización compacta la sintaxis y despersonaliza el discurso, pero un uso excesivo puede volver el texto opaco; no produce claridad para principiantes ni un tono coloquial."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "word-order",
        "prompt": "Ordena las palabras para formar una oración con nominalización mediante «el hecho de que».",
        "words": [
          "el",
          "hecho",
          "de",
          "que",
          "hayan",
          "cerrado",
          "la",
          "fábrica",
          "afectó",
          "a",
          "la",
          "región"
        ],
        "explanation": "«El hecho de que hayan cerrado la fábrica» nominaliza toda la proposición, que funciona como sujeto de «afectó»."
      }
    ]
  },
  {
    "slug": "nominalization-part-2-2",
    "level": "C1",
    "number": 17,
    "title": "Nominalización y Sustantivación (Parte 2 de 2), Part 2 of 3",
    "summary": "Un estudio de los recursos con los que el español convierte verbos y adjetivos en sustantivos abstractos para lograr un registro más formal, compacto y académico.",
    "duration": "10 min",
    "sections": [
      {
        "heading": "En la práctica",
        "body": [
          "La reciente reducción de la inversión extranjera ha generado un debate sobre la sostenibilidad del modelo económico vigente.",
          "El hecho de que varias empresas hayan trasladado su producción a otros países plantea interrogantes sobre la competitividad del sector.",
          "Lo preocupante de esta tendencia no es su magnitud actual, sino su posible aceleración en los próximos años.",
          "La implementación de nuevas políticas fiscales podría revertir parcialmente esta situación, según los especialistas consultados.",
          "Sin embargo, el hecho de que dichas políticas tarden en aprobarse complica cualquier previsión a corto plazo.",
          "La transformación estructural que exige el sector requiere, ante todo, un consenso político que hoy parece lejano.",
          "Lo cierto es que ningún sector puede sostenerse indefinidamente sin una reformulación de sus prioridades.",
          "El retraso en la toma de decisiones tendrá, sin duda, un costo que la próxima generación habrá de asumir."
        ]
      },
      {
        "heading": "Vocabulario: la nominalización",
        "body": [
          "35 palabras relacionadas con la nominalización."
        ],
        "examples": [
          {
            "es": "la nominalización",
            "en": "el proceso de convertir un verbo o un adjetivo en un sustantivo"
          },
          {
            "es": "la sustantivación",
            "en": "la conversión de una palabra de otra categoría gramatical en sustantivo"
          },
          {
            "es": "el sufijo",
            "en": "el morfema que se añade al final de una palabra para formar una nueva"
          },
          {
            "es": "el morfema",
            "en": "la unidad mínima de significado dentro de una palabra"
          },
          {
            "es": "la derivación",
            "en": "el proceso de formar palabras nuevas a partir de una raíz mediante afijos"
          },
          {
            "es": "la raíz léxica",
            "en": "la parte invariable de una palabra que porta su significado esencial"
          },
          {
            "es": "la compactación",
            "en": "la reducción de una expresión extensa a una forma más breve y densa"
          },
          {
            "es": "la despersonalización",
            "en": "la eliminación del sujeto agente explícito en un discurso"
          },
          {
            "es": "lo abstracto",
            "en": "aquello que no se percibe directamente por los sentidos, sino por el pensamiento"
          },
          {
            "es": "lo concreto",
            "en": "aquello que puede percibirse directamente por los sentidos"
          },
          {
            "es": "la densidad informativa",
            "en": "la cantidad de contenido significativo condensado en un espacio breve"
          },
          {
            "es": "el registro académico",
            "en": "el nivel de formalidad propio de los textos científicos o universitarios"
          },
          {
            "es": "el registro burocrático",
            "en": "el estilo formal y a menudo impersonal propio de la administración"
          },
          {
            "es": "la abstracción conceptual",
            "en": "proceso de convertir una idea concreta en un concepto general"
          },
          {
            "es": "la productividad morfológica",
            "en": "la capacidad de un sufijo o patrón de generar nuevas palabras con facilidad"
          },
          {
            "es": "la restricción morfológica",
            "en": "la limitación que impide combinar libremente ciertos morfemas"
          },
          {
            "es": "la convención histórica",
            "en": "el uso fijado por la costumbre a lo largo del tiempo, más que por una regla lógica"
          },
          {
            "es": "el matiz estilístico",
            "en": "la sutil diferencia de efecto o tono que aporta una elección lingüística"
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "matching",
        "instructions": "Relaciona cada sufijo con un ejemplo representativo de su uso.",
        "pairs": [
          {
            "left": "-ción",
            "right": "la organización"
          },
          {
            "left": "-miento",
            "right": "el crecimiento"
          },
          {
            "left": "-dad",
            "right": "la veracidad"
          },
          {
            "left": "-eza",
            "right": "la tristeza"
          }
        ],
        "explanation": "Cada sufijo nominalizador se asocia con patrones morfológicos y matices de registro propios."
      }
    ]
  },
  {
    "slug": "nominalization-part-2-3",
    "level": "C1",
    "number": 18,
    "title": "Nominalización y Sustantivación (Parte 2 de 2), Part 3 of 3",
    "summary": "Un estudio de los recursos con los que el español convierte verbos y adjetivos en sustantivos abstractos para lograr un registro más formal, compacto y académico.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "Vocabulario: la nominalización (cont'd)",
        "body": [],
        "examples": [
          {
            "es": "la formalidad discursiva",
            "en": "grado de rigor y protocolo que exige un tipo de texto o situación"
          },
          {
            "es": "lo opaco",
            "en": "aquello difícil de comprender por su falta de claridad"
          },
          {
            "es": "la imparcialidad",
            "en": "cualidad de quien actúa o juzga sin dejarse influir por preferencias personales"
          },
          {
            "es": "el agente",
            "en": "la persona o entidad que realiza la acción expresada por el verbo"
          },
          {
            "es": "la cláusula subordinada",
            "en": "la oración que depende sintácticamente de otra dentro de una misma frase"
          },
          {
            "es": "condensar",
            "en": "reducir una idea extensa a una expresión más breve sin perder su contenido esencial"
          },
          {
            "es": "la tentativa",
            "en": "intento de llevar a cabo una acción, sin garantía de éxito"
          },
          {
            "es": "la transformación gramatical",
            "en": "cambio de una estructura lingüística en otra que expresa un contenido semejante"
          },
          {
            "es": "dosificar",
            "en": "administrar algo con mesura y en la proporción adecuada"
          },
          {
            "es": "el informe institucional",
            "en": "el documento formal que expone datos o conclusiones en nombre de una entidad"
          },
          {
            "es": "la proposición",
            "en": "el contenido semántico de una oración considerado como unidad de sentido"
          },
          {
            "es": "el núcleo nominal",
            "en": "el elemento central de un sintagma nominal, en torno al cual se organizan los demás"
          },
          {
            "es": "el sintagma",
            "en": "el grupo de palabras que funciona como una unidad dentro de la oración"
          },
          {
            "es": "la abstracción",
            "en": "el proceso mental de extraer una cualidad general a partir de casos particulares"
          },
          {
            "es": "lo permanente",
            "en": "aquello que se mantiene invariable a lo largo del tiempo"
          },
          {
            "es": "lo contextual",
            "en": "aquello que depende de las circunstancias particulares de una situación dada"
          },
          {
            "es": "la fijación léxica",
            "en": "el proceso por el cual una expresión se estabiliza en la lengua con un uso convencional"
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "¿Por qué un informe institucional preferiría «el incumplimiento de los plazos afectó al proyecto» sobre una versión con verbo personal y oración coordinada?",
        "options": [
          "Porque la segunda opción es gramaticalmente incorrecta.",
          "Porque la nominalización condensa la información y proyecta mayor objetividad, propia del registro institucional.",
          "Porque la primera opción es más breve en número de letras.",
          "Porque los informes institucionales evitan cualquier sustantivo abstracto."
        ],
        "correctIndex": 1,
        "explanation": "El registro institucional favorece la nominalización porque condensa la sintaxis y elimina al agente explícito, generando un efecto de objetividad y formalidad."
      }
    ]
  },
  {
    "slug": "gerund-infinitive-advanced-part-1-1",
    "level": "C1",
    "number": 19,
    "title": "Gerundio vs. Infinitivo: Usos Avanzados (Parte 1 de 2), Part 1 of 3",
    "summary": "Un examen detallado de los usos avanzados del gerundio y el infinitivo, desde el temido gerundio de posterioridad hasta las perífrasis verbales que codifican matices aspectuales precisos.",
    "duration": "10 min",
    "sections": [
      {
        "heading": "Gerundio de simultaneidad frente al gerundio de posterioridad",
        "body": [
          "El gerundio expresa, por definición, una acción simultánea o inmediatamente anterior a la del verbo principal, nunca una acción posterior en el tiempo. Por eso, oraciones como «el ladrón entró por la ventana, cayendo después sobre una mesa» se consideran un error de estilo —el llamado gerundio de posterioridad— porque presentan como simultáneas dos acciones que en realidad ocurrieron en secuencia. Este uso, frecuentísimo en la prensa por su economía sintáctica, sigue siendo censurado por la norma culta, que recomienda sustituirlo por una oración coordinada.",
          "El gerundio correcto de simultaneidad, en cambio, describe dos acciones que ocurren al mismo tiempo o con una superposición temporal real: «salió de la habitación cerrando la puerta con cuidado» es aceptable porque cerrar la puerta y salir son, en la práctica, un mismo movimiento continuo. La prueba práctica para distinguir ambos usos consiste en preguntarse si las dos acciones podrían representarse en un único fotograma: si la respuesta es negativa, el gerundio resulta impropio."
        ],
        "examples": [
          {
            "es": "Salió de la habitación cerrando la puerta con cuidado.",
            "en": "Cerrar la puerta y salir ocurren de forma simultánea; gerundio correcto."
          },
          {
            "es": "El ladrón entró por la ventana, cayendo después sobre una mesa.",
            "en": "Las dos acciones son sucesivas, no simultáneas; se considera un gerundio de posterioridad incorrecto."
          }
        ]
      },
      {
        "heading": "Gerundio de simultaneidad frente al gerundio de posterioridad (cont'd)",
        "body": [],
        "examples": [
          {
            "es": "El equipo ganó el partido, clasificándose así para la final.",
            "en": "La clasificación es consecuencia posterior del triunfo, no simultánea a él; uso censurado por la norma culta."
          },
          {
            "es": "Cruzó la calle mirando a ambos lados.",
            "en": "Mirar a ambos lados y cruzar ocurren al mismo tiempo; gerundio correcto."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Cuál de las siguientes oraciones contiene un gerundio de posterioridad considerado incorrecto por la norma culta?",
            "options": [
              "Salió corriendo sin mirar atrás.",
              "Aprobó el examen, obteniendo así una beca para el próximo curso.",
              "Llegó temblando de frío.",
              "Habló sonriendo durante toda la entrevista."
            ],
            "correctIndex": 1,
            "explanation": "En esta oración, obtener la beca es una consecuencia posterior a aprobar el examen, no una acción simultánea; se trata del gerundio de posterioridad que la norma culta desaconseja."
          },
          {
            "type": "fill-blank",
            "prompt": "Completa identificando el matiz temporal del gerundio.",
            "sentence": "En «se cayó de la bicicleta, rompiéndose el brazo», el gerundio expresa ___.",
            "answer": "posterioridad",
            "explanation": "Romperse el brazo es la consecuencia posterior de la caída, no un hecho simultáneo a ella; por eso se trata de un gerundio de posterioridad.",
            "hint": "Piensa en el orden real de los sucesos: primero la caída, después la fractura."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "¿Cuál de las siguientes oraciones ejemplifica el gerundio de posterioridad, censurado por la norma culta?",
        "options": [
          "Salió corriendo sin decir nada.",
          "Ganó el campeonato, convirtiéndose así en el mejor jugador del año.",
          "Habló llorando durante todo el discurso.",
          "Cruzó la calle mirando a ambos lados."
        ],
        "correctIndex": 1,
        "explanation": "Convertirse en el mejor jugador es una consecuencia posterior al triunfo, no un hecho simultáneo; se trata del gerundio de posterioridad que la norma desaconseja."
      }
    ]
  },
  {
    "slug": "gerund-infinitive-advanced-part-1-2",
    "level": "C1",
    "number": 20,
    "title": "Gerundio vs. Infinitivo: Usos Avanzados (Parte 1 de 2), Part 2 of 3",
    "summary": "Un examen detallado de los usos avanzados del gerundio y el infinitivo, desde el temido gerundio de posterioridad hasta las perífrasis verbales que codifican matices aspectuales precisos.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "El infinitivo como sujeto oracional y como mandato impersonal",
        "body": [
          "El infinitivo, además de ser la forma no personal por excelencia, puede funcionar como sustantivo pleno y ocupar la posición de sujeto oracional: «fumar perjudica la salud» trata la acción de fumar como una entidad abstracta sobre la que se predica algo, de forma equivalente —aunque más compacta— a «el hecho de fumar». Este uso resulta preferible cuando no hay necesidad de especificar un sujeto concreto para la acción.",
          "En el registro de instrucciones, carteles y avisos oficiales, el infinitivo asume además una función de mandato impersonal, sustituyendo al imperativo para lograr un tono más distante y aplicable a cualquier destinatario: «no fumar», «empujar», «mantener la distancia de seguridad» no se dirigen a una persona concreta, sino que formulan una norma general. Este infinitivo de mandato es característico del español escrito normativo y contrasta con el imperativo, que sí implica una relación directa entre hablante y oyente."
        ],
        "examples": [
          {
            "es": "Fumar perjudica la salud.",
            "en": "El infinitivo funciona como sujeto abstracto de la oración."
          },
          {
            "es": "Viajar solo enseña más que cualquier libro.",
            "en": "La acción de viajar se trata como una entidad sobre la que se predica algo."
          },
          {
            "es": "No fumar en las instalaciones.",
            "en": "El infinitivo formula una norma general sin destinatario concreto."
          },
          {
            "es": "Empujar para abrir la puerta.",
            "en": "Instrucción impersonal característica de carteles y avisos."
          },
          {
            "es": "Mantener la distancia de seguridad.",
            "en": "Mandato formal dirigido a cualquier persona, no a un individuo específico."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Qué función cumple el infinitivo en el cartel «no pisar el césped»?",
            "options": [
              "Funciona como sujeto abstracto de una reflexión filosófica.",
              "Formula un mandato impersonal dirigido a cualquier persona.",
              "Expresa una acción simultánea a otra.",
              "Sustituye a un sustantivo concreto y específico."
            ],
            "correctIndex": 1,
            "explanation": "En carteles y avisos, el infinitivo asume una función de mandato impersonal, más distante y general que el imperativo directo."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "fill-blank",
        "prompt": "Completa con la perífrasis de infinitivo que exprese interrupción de un hábito.",
        "sentence": "Mi abuelo ___ (dejar) de fumar hace veinte años.",
        "answer": "dejó",
        "explanation": "«Dejar de» + infinitivo expresa la interrupción de un hábito, con matiz de abandono.",
        "hint": "Se trata de un hábito que se interrumpió por completo."
      }
    ]
  },
  {
    "slug": "gerund-infinitive-advanced-part-1-3",
    "level": "C1",
    "number": 21,
    "title": "Gerundio vs. Infinitivo: Usos Avanzados (Parte 1 de 2), Part 3 of 3",
    "summary": "Un examen detallado de los usos avanzados del gerundio y el infinitivo, desde el temido gerundio de posterioridad hasta las perífrasis verbales que codifican matices aspectuales precisos.",
    "duration": "10 min",
    "sections": [
      {
        "heading": "Seguir/continuar + gerundio frente a terminar de/dejar de + infinitivo",
        "body": [
          "Las perífrasis verbales con gerundio y con infinitivo codifican matices aspectuales que a menudo se traducen erróneamente de forma literal. «Seguir» y «continuar» + gerundio expresan la prolongación ininterrumpida de una acción ya iniciada: «sigue trabajando en el mismo proyecto» indica que la acción no se ha detenido desde un punto anterior hasta el presente. Estas perífrasis presuponen siempre que la acción ya estaba en curso; no pueden usarse para iniciar una acción nueva.",
          "En el extremo opuesto, «terminar de», «dejar de» y «acabar de» + infinitivo marcan distintos tipos de cese aspectual: «terminar de» señala la conclusión de una acción con un final natural previsto; «dejar de» indica la interrupción de un hábito, con o sin intención de reanudarlo; y «acabar de», cuando no se usa en su valor de pasado reciente, comparte con «terminar de» el matiz de cierre de una tarea concreta. Confundir «dejar de» con «terminar de» produce oraciones semánticamente incoherentes: «dejó de leer el libro» sugiere abandono, mientras que «terminó de leer el libro» implica finalización exitosa."
        ],
        "examples": [
          {
            "es": "Sigue trabajando en el mismo proyecto desde hace meses.",
            "en": "La acción se prolonga de forma ininterrumpida desde un punto anterior."
          },
          {
            "es": "Terminó de leer el libro antes de dormir.",
            "en": "La acción llega a su conclusión natural y prevista."
          },
          {
            "es": "Dejó de fumar hace dos años.",
            "en": "Se interrumpe un hábito, con matiz de abandono definitivo."
          }
        ]
      },
      {
        "heading": "Seguir/continuar + gerundio frente a terminar de/dejar de + infinitivo (cont'd)",
        "body": [],
        "examples": [
          {
            "es": "Acabo de terminar el informe.",
            "en": "Uso de pasado reciente, distinto del valor de cierre de tarea."
          },
          {
            "es": "Continúa insistiendo en la misma propuesta.",
            "en": "La insistencia se mantiene sin interrupción desde antes."
          }
        ],
        "checkpoint": [
          {
            "type": "multi-select",
            "question": "¿Cuáles de las siguientes perífrasis presuponen que la acción ya estaba en curso antes del momento del habla?",
            "options": [
              "seguir + gerundio",
              "dejar de + infinitivo",
              "continuar + gerundio",
              "empezar a + infinitivo"
            ],
            "correctIndexes": [
              0,
              2
            ],
            "explanation": "«Seguir» y «continuar» + gerundio presuponen una acción ya iniciada que se prolonga; «dejar de» marca interrupción y «empezar a» marca inicio, no continuidad previa."
          },
          {
            "type": "word-order",
            "prompt": "Ordena las palabras para formar una oración que exprese interrupción de un hábito.",
            "words": [
              "dejó",
              "de",
              "fumar",
              "hace",
              "dos",
              "años"
            ],
            "explanation": "«Dejar de fumar» expresa la interrupción de un hábito, con matiz de abandono definitivo."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multi-select",
        "question": "¿Cuáles de las siguientes perífrasis presuponen que la acción ya estaba en curso antes del momento del habla?",
        "options": [
          "seguir + gerundio",
          "empezar a + infinitivo",
          "continuar + gerundio",
          "terminar de + infinitivo"
        ],
        "correctIndexes": [
          0,
          2
        ],
        "explanation": "«Seguir» y «continuar» + gerundio presuponen una acción o tendencia ya iniciada; «empezar a» marca, por el contrario, el inicio de una acción nueva, y «terminar de» marca su cierre, no su continuidad previa."
      }
    ]
  },
  {
    "slug": "gerund-infinitive-advanced-part-1-mastery-check",
    "level": "C1",
    "number": 22,
    "title": "Prueba de Dominio: Gerundio vs. Infinitivo (Parte 1)",
    "summary": "Una prueba exigente sobre el gerundio de posterioridad, el infinitivo como sujeto y mandato impersonal, y las perífrasis de continuidad y cese, aplicada a escenarios inéditos.",
    "duration": "10 min",
    "sections": [],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "¿Cuál de las siguientes oraciones ejemplifica un gerundio de posterioridad, censurado por la norma culta?",
        "options": [
          "Terminó la carrera, mudándose después a otra ciudad para empezar a trabajar.",
          "Salió del edificio dando un portazo.",
          "Cruzó el río nadando con dificultad.",
          "Contestó riendo a la broma de su hermano."
        ],
        "correctIndex": 0,
        "explanation": "Mudarse de ciudad es una consecuencia posterior a terminar la carrera, no un hecho simultáneo a ese logro; se trata, por tanto, de un gerundio de posterioridad que la norma culta desaconseja."
      },
      {
        "type": "multiple-choice",
        "question": "¿Cuál de las siguientes oraciones ejemplifica un gerundio de simultaneidad correctamente empleado?",
        "options": [
          "Aprobó la oposición, mudándose poco después a la capital.",
          "Firmó el contrato, arrepintiéndose días más tarde de las condiciones.",
          "Abrió la puerta empujándola con el hombro, porque llevaba las manos ocupadas.",
          "Ganó el premio, publicando meses después su segunda novela."
        ],
        "correctIndex": 2,
        "explanation": "Empujar la puerta y abrirla son, en la práctica, un mismo movimiento continuo que podría representarse en un único fotograma; las demás oraciones presentan sucesos claramente posteriores y no simultáneos."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa con el gerundio correspondiente al verbo entre paréntesis. Ten en cuenta que, aunque la forma sea correcta morfológicamente, esta oración sigue siendo un ejemplo de gerundio de posterioridad.",
        "sentence": "Publicó su primera novela, ___ (convertirse) poco después en una autora reconocida.",
        "answer": "convirtiéndose",
        "hint": "Se trata del gerundio del verbo pronominal «convertirse».",
        "explanation": "Convertirse en autora reconocida es una consecuencia posterior a la publicación de la novela, no un hecho simultáneo; la norma culta preferiría una oración coordinada como «y se convirtió poco después»."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa con el infinitivo que funcione como sujeto oracional.",
        "sentence": "___ (aprender) un idioma nuevo exige constancia diaria y mucha paciencia.",
        "answer": "Aprender",
        "hint": "El infinitivo trata aquí la acción como una entidad abstracta sobre la que se predica algo.",
        "explanation": "El infinitivo ocupa la posición de sujeto oracional, tratando la acción de aprender como una entidad abstracta, de forma equivalente pero más compacta que «el hecho de aprender»."
      },
      {
        "type": "multiple-choice",
        "question": "¿Qué función cumple el infinitivo en el cartel «guardar silencio durante la representación»?",
        "options": [
          "Funciona como sujeto abstracto de una reflexión filosófica.",
          "Formula un mandato impersonal dirigido a cualquier espectador, sin destinatario concreto.",
          "Expresa una acción simultánea a otra dentro de una narración.",
          "Sustituye a un sustantivo concreto y específico."
        ],
        "correctIndex": 1,
        "explanation": "En carteles y avisos, el infinitivo asume una función de mandato impersonal, más distante y general que el imperativo directo, aplicable a cualquier persona que lea el cartel."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras para formar un mandato impersonal propio de un cartel de advertencia.",
        "words": [
          "no",
          "tocar",
          "la",
          "instalación",
          "eléctrica"
        ],
        "translation": "Do not touch the electrical installation.",
        "explanation": "El infinitivo formula aquí un mandato impersonal, sin destinatario concreto, característico del registro de avisos y advertencias."
      },
      {
        "type": "multi-select",
        "question": "¿Cuáles de las siguientes perífrasis presuponen que la acción ya estaba en curso antes del momento del habla?",
        "options": [
          "seguir + gerundio",
          "acabar de + infinitivo",
          "continuar + gerundio",
          "empezar a + infinitivo"
        ],
        "correctIndexes": [
          0,
          2
        ],
        "explanation": "«Seguir» y «continuar» + gerundio presuponen una acción ya iniciada que se prolonga; «acabar de» marca un pasado reciente y «empezar a» marca el inicio de una acción nueva, no su continuidad previa."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa con la perífrasis de infinitivo que exprese la interrupción de un hábito.",
        "sentence": "Mi hermana ___ (dejar) de practicar tenis después de la lesión en la rodilla.",
        "answer": "dejó",
        "hint": "Se trata de un hábito que se interrumpió, con matiz de abandono.",
        "explanation": "«Dejar de» + infinitivo expresa la interrupción de un hábito, en este caso motivada por una lesión, sin que ello implique necesariamente la intención de reanudarlo."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa con la perífrasis de infinitivo que exprese la conclusión natural de una tarea.",
        "sentence": "Ana ___ (terminar) de redactar el informe justo antes de que cerraran la oficina.",
        "answer": "terminó",
        "hint": "Se trata de una tarea que llega a su final previsto, no de un hábito que se abandona.",
        "explanation": "«Terminar de» + infinitivo señala la conclusión de una acción con un final natural y previsto, a diferencia de «dejar de», que implica abandono de un hábito."
      },
      {
        "type": "multiple-choice",
        "question": "¿Qué diferencia de significado existe entre «dejó de tocar el piano» y «terminó de tocar el piano»?",
        "options": [
          "Ninguna; ambas expresiones son intercambiables sin cambio de sentido.",
          "«Dejó de tocar» sugiere abandono del hábito; «terminó de tocar» implica la finalización natural de una interpretación concreta.",
          "«Terminó de tocar» sugiere abandono definitivo del instrumento.",
          "«Dejó de tocar» solo puede usarse con instrumentos de cuerda."
        ],
        "correctIndex": 1,
        "explanation": "«Dejar de» + infinitivo marca la interrupción de un hábito, con matiz de abandono; «terminar de» + infinitivo marca el cierre natural y previsto de una acción concreta ya en marcha."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Traduce empleando la perífrasis de continuidad adecuada.",
        "source": "He kept studying medicine despite all the setbacks.",
        "answer": "Siguió estudiando medicina a pesar de todos los contratiempos.",
        "altAnswers": [
          "Continuó estudiando medicina a pesar de todos los contratiempos."
        ],
        "explanation": "«Seguir» o «continuar» + gerundio expresan la prolongación ininterrumpida de una acción ya iniciada, el matiz exacto que transmite aquí «kept studying»."
      },
      {
        "type": "translate",
        "direction": "es-en",
        "prompt": "Traduce al inglés distinguiendo el matiz de pasado reciente.",
        "source": "Acabo de firmar el acuerdo con el proveedor; todavía tengo el bolígrafo en la mano.",
        "answer": "I just signed the agreement with the supplier; I still have the pen in my hand.",
        "altAnswers": [
          "I've just signed the agreement with the supplier; I'm still holding the pen."
        ],
        "explanation": "«Acabar de» + infinitivo, en su valor de pasado reciente, no debe confundirse con el matiz de cierre de tarea que comparte con «terminar de» en otros contextos."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras para formar una oración con el infinitivo como sujeto oracional.",
        "words": [
          "reciclar",
          "es",
          "responsabilidad",
          "de",
          "todos"
        ],
        "translation": "Recycling is everyone's responsibility.",
        "explanation": "El infinitivo «reciclar» funciona como sujeto de la oración, tratando la acción como una entidad abstracta sobre la que se predica algo."
      },
      {
        "type": "matching",
        "instructions": "Relaciona cada perífrasis con el matiz aspectual que le corresponde.",
        "pairs": [
          {
            "left": "seguir / continuar + gerundio",
            "right": "prolongación ininterrumpida de una acción ya iniciada"
          },
          {
            "left": "terminar de + infinitivo",
            "right": "conclusión de una acción con un final natural y previsto"
          },
          {
            "left": "dejar de + infinitivo",
            "right": "interrupción de un hábito, con matiz de abandono"
          },
          {
            "left": "acabar de + infinitivo",
            "right": "pasado reciente, cuando no equivale al cierre de una tarea"
          }
        ],
        "explanation": "Cada perífrasis codifica un matiz aspectual distinto sobre el inicio, la continuidad o el cese de una acción, y no admite sustitución libre por otra sin alterar el sentido."
      },
      {
        "type": "multiple-choice",
        "question": "«Ganó las elecciones, prometiendo días después bajar los impuestos». ¿Por qué se considera esta oración un ejemplo de gerundio de posterioridad?",
        "options": [
          "Porque prometer y ganar ocurren exactamente en el mismo instante.",
          "Porque la promesa es una acción posterior y separada en el tiempo del triunfo electoral, presentada de forma incorrecta como simultánea.",
          "Porque el verbo «prometer» nunca admite la forma de gerundio.",
          "Porque la oración carece por completo de sujeto gramatical."
        ],
        "correctIndex": 1,
        "explanation": "La expresión «días después» confirma que la promesa ocurrió en un momento posterior y distinto al triunfo electoral, lo cual convierte esta construcción en un gerundio de posterioridad censurado por la norma culta."
      },
      {
        "type": "multi-select",
        "question": "¿Cuáles de las siguientes oraciones emplean correctamente un gerundio de simultaneidad, y no de posterioridad?",
        "options": [
          "Respondió temblando a las preguntas del comité.",
          "Se licenció con honores, consiguiendo poco después su primer empleo.",
          "Atravesó el pasillo cojeando visiblemente.",
          "Presentó su renuncia, provocando días más tarde un escándalo mediático."
        ],
        "correctIndexes": [
          0,
          2
        ],
        "explanation": "«Respondió temblando» y «atravesó cojeando» describen acciones verdaderamente simultáneas al verbo principal; las otras dos oraciones presentan consecuencias claramente posteriores, marcadas incluso por expresiones temporales como «poco después» o «días más tarde»."
      }
    ]
  },
  {
    "slug": "gerund-infinitive-advanced-part-2-1",
    "level": "C1",
    "number": 23,
    "title": "Gerundio vs. Infinitivo: Usos Avanzados (Parte 2 de 2), Part 1 of 3",
    "summary": "Un examen detallado de los usos avanzados del gerundio y el infinitivo, desde el temido gerundio de posterioridad hasta las perífrasis verbales que codifican matices aspectuales precisos.",
    "duration": "10 min",
    "sections": [
      {
        "heading": "Perífrasis progresivas con gerundio: estar, ir, venir y llevar",
        "body": [
          "Además de «estar + gerundio», que describe una acción en curso sin más matiz añadido, el español dispone de otras perífrasis de gerundio que aportan una capa de significado sobre cómo se desarrolla el proceso en el tiempo. «Ir + gerundio» añade un matiz de progresión gradual hacia un resultado: «va mejorando poco a poco» sugiere una evolución paulatina que «está mejorando» no comunica con la misma nitidez. «Venir + gerundio», por su parte, enfatiza la persistencia de una tendencia acumulada desde el pasado hasta el presente, con frecuencia con un matiz de queja.",
          "«Llevar + gerundio», finalmente, mide explícitamente la duración de una acción en curso desde un punto de referencia hasta el presente, y siempre requiere una expresión temporal que cuantifique ese lapso: «llevo dos horas esperando» no podría formularse sin especificar el tiempo transcurrido. Dominar estas cuatro variantes y sus matices respectivos de neutralidad, progresión, acumulación y duración medida es lo que separa una descripción funcional de una expresión verdaderamente precisa."
        ],
        "examples": [
          {
            "es": "Va mejorando poco a poco desde la operación.",
            "en": "Se enfatiza una progresión gradual e incremental."
          },
          {
            "es": "Viene insistiendo en lo mismo desde hace semanas.",
            "en": "Se enfatiza la acumulación y persistencia de una actitud a lo largo del tiempo."
          },
          {
            "es": "Llevo dos horas esperando el autobús.",
            "en": "Se mide explícitamente la duración de la acción hasta el presente."
          }
        ]
      },
      {
        "heading": "Perífrasis progresivas con gerundio: estar, ir, venir y llevar (cont'd)",
        "body": [],
        "examples": [
          {
            "es": "Está lloviendo desde esta mañana.",
            "en": "Descripción neutra de una acción en curso, sin matiz de progresión o acumulación."
          },
          {
            "es": "El proyecto va tomando forma poco a poco.",
            "en": "Progresión incremental hacia un resultado final."
          }
        ],
        "checkpoint": [
          {
            "type": "matching",
            "instructions": "Relaciona cada perífrasis de gerundio con el matiz aspectual que aporta.",
            "pairs": [
              {
                "left": "estar + gerundio",
                "right": "descripción neutra de una acción en curso"
              },
              {
                "left": "ir + gerundio",
                "right": "progresión gradual e incremental hacia un resultado"
              },
              {
                "left": "venir + gerundio",
                "right": "acumulación o persistencia de una acción desde el pasado, a menudo con matiz de queja"
              },
              {
                "left": "llevar + gerundio",
                "right": "duración medida de una acción en curso desde un punto de referencia"
              }
            ],
            "explanation": "Cada perífrasis con gerundio codifica un matiz distinto sobre cómo se desarrolla la acción en el tiempo, más allá de la simple noción de proceso en curso."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "word-order",
        "prompt": "Ordena las palabras para formar un mandato impersonal propio de un cartel.",
        "words": [
          "mantener",
          "la",
          "distancia",
          "de",
          "seguridad"
        ],
        "explanation": "El infinitivo formula aquí un mandato impersonal, sin destinatario concreto, característico de carteles y avisos."
      }
    ]
  },
  {
    "slug": "gerund-infinitive-advanced-part-2-2",
    "level": "C1",
    "number": 24,
    "title": "Gerundio vs. Infinitivo: Usos Avanzados (Parte 2 de 2), Part 2 of 3",
    "summary": "Un examen detallado de los usos avanzados del gerundio y el infinitivo, desde el temido gerundio de posterioridad hasta las perífrasis verbales que codifican matices aspectuales precisos.",
    "duration": "10 min",
    "sections": [
      {
        "heading": "En la práctica",
        "body": [
          "Sofía: Llevo tres meses reformando la cocina y todavía no he terminado.",
          "Pablo: ¿Sigues trabajando tú sola en todo esto?",
          "Sofía: Sí, aunque contraté a alguien para instalar los armarios.",
          "Pablo: Entiendo. Renovar una casa entera lleva su tiempo, sin duda.",
          "Sofía: Va avanzando poco a poco, pero mi vecino viene quejándose del ruido desde la primera semana.",
          "Pablo: No dejes de avisarle cuando termines de instalar el suelo; hace más ruido todavía.",
          "Sofía: Buena idea. Al menos el cartel de la entrada ya dice «no molestar antes de las nueve».",
          "Pablo: Cuando acabes de pintar, avísame y te ayudo a mover los muebles."
        ]
      },
      {
        "heading": "Vocabulario: el gerundio y el infinitivo",
        "body": [
          "35 palabras relacionadas con el gerundio y el infinitivo."
        ],
        "examples": [
          {
            "es": "la perífrasis verbal",
            "en": "la combinación de un verbo auxiliar y una forma no personal que expresa un matiz aspectual o modal"
          },
          {
            "es": "el aspecto verbal",
            "en": "la categoría gramatical que indica cómo se desarrolla una acción en el tiempo, más allá de cuándo ocurre"
          },
          {
            "es": "la progresión gradual",
            "en": "el avance paulatino y continuo de un proceso hacia un resultado"
          },
          {
            "es": "la insistencia verbal",
            "en": "repetición deliberada de una acción o una idea para darle énfasis"
          },
          {
            "es": "el cese",
            "en": "la interrupción o el final de una acción o un proceso"
          },
          {
            "es": "la prolongación",
            "en": "la extensión de una acción más allá de su duración habitual"
          },
          {
            "es": "la censura normativa",
            "en": "el rechazo que la norma culta expresa hacia un uso considerado incorrecto"
          },
          {
            "es": "la economía sintáctica",
            "en": "la tendencia a expresar el máximo contenido con el mínimo de recursos gramaticales"
          },
          {
            "es": "impropio",
            "en": "que resulta inadecuado o incorrecto para el contexto en que se emplea"
          },
          {
            "es": "el punto de referencia",
            "en": "elemento que sirve de base para comparar o situar otra cosa"
          },
          {
            "es": "la superposición",
            "en": "la coincidencia parcial de dos elementos o procesos en el tiempo o el espacio"
          },
          {
            "es": "incremental",
            "en": "que aumenta o se desarrolla por grados sucesivos y acumulativos"
          },
          {
            "es": "la acumulación",
            "en": "el proceso de reunir gradualmente elementos o efectos a lo largo del tiempo"
          },
          {
            "es": "la usanza",
            "en": "manera habitual y tradicional de hacer algo"
          },
          {
            "es": "el abandono",
            "en": "el acto de dejar o interrumpir definitivamente algo que se venía haciendo"
          },
          {
            "es": "la conclusión natural",
            "en": "el final que un proceso alcanza de forma esperada y coherente con su desarrollo"
          },
          {
            "es": "la instrucción impersonal",
            "en": "la indicación formulada sin dirigirse a una persona concreta"
          },
          {
            "es": "el receptor",
            "en": "persona que recibe un mensaje o una comunicación"
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "matching",
        "instructions": "Relaciona cada perífrasis de gerundio con el matiz aspectual que le corresponde.",
        "pairs": [
          {
            "left": "ir + gerundio",
            "right": "progresión gradual hacia un resultado"
          },
          {
            "left": "venir + gerundio",
            "right": "acumulación de una acción o tendencia desde el pasado"
          },
          {
            "left": "llevar + gerundio",
            "right": "duración medida de una acción hasta el presente"
          },
          {
            "left": "estar + gerundio",
            "right": "descripción neutra de una acción en curso"
          }
        ],
        "explanation": "Cada perífrasis con gerundio añade una capa de significado distinta sobre el desarrollo temporal de la acción."
      }
    ]
  },
  {
    "slug": "gerund-infinitive-advanced-part-2-3",
    "level": "C1",
    "number": 25,
    "title": "Gerundio vs. Infinitivo: Usos Avanzados (Parte 2 de 2), Part 3 of 3",
    "summary": "Un examen detallado de los usos avanzados del gerundio y el infinitivo, desde el temido gerundio de posterioridad hasta las perífrasis verbales que codifican matices aspectuales precisos.",
    "duration": "6 min",
    "sections": [
      {
        "heading": "Vocabulario: el gerundio y el infinitivo (cont'd)",
        "body": [],
        "examples": [
          {
            "es": "el imperativo",
            "en": "el modo verbal que expresa órdenes, ruegos o instrucciones directas"
          },
          {
            "es": "la variante estándar",
            "en": "forma de una lengua considerada de referencia en el uso formal"
          },
          {
            "es": "la coherencia semántica",
            "en": "la relación lógica y consistente entre los significados dentro de un texto"
          },
          {
            "es": "el matiz aspectual",
            "en": "la sutil diferencia de significado relacionada con el desarrollo temporal de una acción"
          },
          {
            "es": "el lapso",
            "en": "el intervalo de tiempo transcurrido entre dos momentos"
          },
          {
            "es": "cuantificar",
            "en": "expresar o determinar la cantidad exacta de algo"
          },
          {
            "es": "la evolución paulatina",
            "en": "el cambio que ocurre de manera lenta y progresiva"
          },
          {
            "es": "la queja",
            "en": "la expresión de disgusto o malestar frente a una situación"
          },
          {
            "es": "la tendencia",
            "en": "la inclinación o dirección general que sigue un proceso o un comportamiento"
          },
          {
            "es": "el desarrollo temporal",
            "en": "la manera en que una acción se despliega a lo largo del tiempo"
          },
          {
            "es": "la nitidez",
            "en": "la claridad y precisión con que algo se percibe o se expresa"
          },
          {
            "es": "el registro escrito normativo",
            "en": "el estilo formal propio de los textos que fijan reglas o instrucciones"
          },
          {
            "es": "la fórmula fija",
            "en": "la expresión cuya estructura permanece invariable por convención lingüística"
          },
          {
            "es": "la interrupción",
            "en": "el corte o la detención de un proceso que estaba en curso"
          },
          {
            "es": "previsto",
            "en": "que se espera o se planea de antemano"
          },
          {
            "es": "el desenlace narrativo",
            "en": "el punto final de una secuencia de acciones dentro de un relato"
          },
          {
            "es": "la secuencia cronológica",
            "en": "el orden en que ocurren los sucesos según el paso del tiempo"
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "¿Qué función cumple el infinitivo en «fumar perjudica la salud»?",
        "options": [
          "Funciona como complemento directo de un verbo transitivo.",
          "Funciona como sujeto oracional, tratando la acción como una entidad abstracta.",
          "Expresa un mandato dirigido a una persona concreta.",
          "Sustituye a una cláusula concesiva."
        ],
        "correctIndex": 1,
        "explanation": "El infinitivo ocupa aquí la posición de sujeto, funcionando como un sustantivo abstracto equivalente a «el hecho de fumar»."
      }
    ]
  },
  {
    "slug": "gerund-infinitive-advanced-part-2-mastery-check",
    "level": "C1",
    "number": 26,
    "title": "Prueba de Dominio: Gerundio vs. Infinitivo (Parte 2)",
    "summary": "Una evaluación centrada en las perífrasis progresivas con gerundio —estar, ir, venir y llevar— y en la precisión de sus matices aspectuales respectivos, aplicada a contextos nuevos.",
    "duration": "10 min",
    "sections": [],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "«La comunidad de vecinos viene quejándose del ruido de la obra desde hace meses». ¿Qué matiz aporta «venir + gerundio» en esta oración?",
        "options": [
          "Una descripción neutra de una acción en curso, sin matiz añadido.",
          "Una progresión gradual e incremental hacia un resultado concreto.",
          "La acumulación y persistencia de una actitud desde el pasado, con un matiz de queja.",
          "La duración exacta y medida de la acción hasta el presente."
        ],
        "correctIndex": 2,
        "explanation": "«Venir + gerundio» enfatiza la persistencia de una tendencia acumulada desde el pasado hasta el presente, con frecuencia con un matiz de queja, tal como ocurre aquí con las protestas repetidas de la comunidad."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa con la perífrasis de progresión gradual.",
        "sentence": "El enfermo ___ (ir) mejorando poco a poco desde que empezó el nuevo tratamiento.",
        "answer": "va",
        "hint": "Se enfatiza una evolución paulatina hacia un resultado.",
        "explanation": "«Ir + gerundio» añade un matiz de progresión gradual hacia un resultado, un matiz que la simple forma «está mejorando» no comunicaría con la misma nitidez."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa con la perífrasis que mide explícitamente la duración de una acción en curso.",
        "sentence": "___ (llevar) tres horas esperando una respuesta del servicio técnico, y todavía nada.",
        "answer": "Llevo",
        "hint": "Se trata de la primera persona del singular, con una expresión temporal cuantificada.",
        "explanation": "«Llevar + gerundio» mide explícitamente la duración de una acción en curso desde un punto de referencia hasta el presente, y por eso exige siempre una expresión temporal cuantificada como «tres horas»."
      },
      {
        "type": "multiple-choice",
        "question": "¿Qué diferencia de matiz existe entre «está lloviendo desde el mediodía» y «viene lloviendo desde el mediodía»?",
        "options": [
          "No existe ninguna diferencia real entre ambas formas.",
          "La primera es una descripción neutra de la lluvia en curso; la segunda añade un matiz de persistencia acumulada, casi de hartazgo.",
          "La segunda forma es agramatical y debe evitarse siempre.",
          "La primera solo puede usarse en el pasado, nunca en el presente."
        ],
        "correctIndex": 1,
        "explanation": "«Estar + gerundio» describe el proceso en curso sin matiz añadido; «venir + gerundio» aplicado a un fenómeno como la lluvia añade un matiz de persistencia acumulada, casi de fastidio ante su continuidad."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras para expresar una progresión gradual hacia un resultado negativo.",
        "words": [
          "la",
          "situación",
          "va",
          "empeorando",
          "semana",
          "tras",
          "semana"
        ],
        "translation": "The situation keeps getting worse week after week.",
        "explanation": "«Ir + gerundio» expresa aquí una progresión gradual e incremental, reforzada por la expresión «semana tras semana»."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras para medir explícitamente la duración de una acción en curso.",
        "words": [
          "llevamos",
          "cuarenta",
          "minutos",
          "discutiendo",
          "el",
          "mismo",
          "punto"
        ],
        "translation": "We've been arguing about the same point for forty minutes.",
        "explanation": "«Llevar + gerundio» mide la duración exacta de la discusión hasta el presente, y por eso requiere la expresión temporal cuantificada «cuarenta minutos»."
      },
      {
        "type": "multi-select",
        "question": "¿Cuál de las siguientes perífrasis de gerundio exige siempre una expresión temporal que cuantifique la duración de la acción?",
        "options": [
          "llevar + gerundio",
          "ir + gerundio",
          "estar + gerundio",
          "venir + gerundio"
        ],
        "correctIndexes": [
          0
        ],
        "explanation": "Solo «llevar + gerundio» requiere de forma obligatoria una expresión temporal cuantificada; las demás perífrasis pueden emplearse sin especificar una duración exacta."
      },
      {
        "type": "matching",
        "instructions": "Relaciona cada perífrasis progresiva con el matiz aspectual que aporta.",
        "pairs": [
          {
            "left": "estar + gerundio",
            "right": "descripción neutra de una acción en curso, sin matiz añadido"
          },
          {
            "left": "ir + gerundio",
            "right": "progresión gradual e incremental hacia un resultado"
          },
          {
            "left": "venir + gerundio",
            "right": "acumulación de una actitud desde el pasado, a menudo con matiz de queja"
          },
          {
            "left": "llevar + gerundio",
            "right": "duración medida de una acción, con expresión temporal obligatoria"
          }
        ],
        "explanation": "Cada perífrasis progresiva añade una capa de significado distinta sobre cómo se desarrolla la acción en el tiempo, más allá de la simple noción de proceso en curso."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Traduce empleando la perífrasis que exprese acumulación persistente con matiz de reclamo.",
        "source": "The company has been claiming for years that the merger will create more jobs.",
        "answer": "La empresa viene afirmando desde hace años que la fusión creará más empleo.",
        "altAnswers": [
          "La empresa lleva años afirmando que la fusión creará más empleo."
        ],
        "explanation": "«Venir + gerundio» capta el matiz de una afirmación repetida y sostenida en el tiempo, con cierto escepticismo implícito por parte del hablante hacia esa insistencia."
      },
      {
        "type": "translate",
        "direction": "es-en",
        "prompt": "Traduce al inglés captando el matiz de progresión gradual.",
        "source": "El tráfico va empeorando cada año en esta ciudad.",
        "answer": "Traffic keeps getting worse every year in this city.",
        "altAnswers": [
          "Traffic is gradually getting worse every year in this city."
        ],
        "explanation": "«Ir + gerundio» expresa una progresión gradual e incremental, matiz que el inglés capta mejor con «keeps getting» o «gradually» que con un simple presente progresivo."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa con la perífrasis de acumulación persistente.",
        "sentence": "___ (venir) insistiendo en la misma queja desde el mes pasado, sin que nadie le haga caso.",
        "answer": "Viene",
        "hint": "Se trata de una tercera persona del singular, con matiz de persistencia y hartazgo.",
        "explanation": "«Venir + gerundio» enfatiza aquí la persistencia acumulada de una queja repetida, con el matiz de que nadie ha atendido esa insistencia."
      },
      {
        "type": "multiple-choice",
        "question": "¿Qué distingue a «va mejorando» de «está mejorando» aplicado al estado de un paciente?",
        "options": [
          "No hay ninguna diferencia real de significado entre ambas formas.",
          "«Va mejorando» añade un matiz de progresión gradual hacia la recuperación; «está mejorando» describe el proceso de forma neutra, sin ese matiz incremental.",
          "«Está mejorando» solo puede usarse en el pasado.",
          "«Va mejorando» implica que el paciente ya se ha recuperado por completo."
        ],
        "correctIndex": 1,
        "explanation": "«Ir + gerundio» aporta un matiz de progresión gradual e incremental que «estar + gerundio», en su valor puramente neutro, no comunica con la misma nitidez."
      },
      {
        "type": "multi-select",
        "question": "¿Cuáles de las siguientes oraciones emplean correctamente una perífrasis de gerundio según el matiz que se pretende expresar?",
        "options": [
          "Vengo insistiendo en este punto desde la primera reunión.",
          "Llevo esperando aquí.",
          "Va aprendiendo a tocar el violín con mucho esfuerzo.",
          "Viene lloviendo mañana por la tarde."
        ],
        "correctIndexes": [
          0,
          2
        ],
        "explanation": "Las oraciones correctas emplean «venir + gerundio» para una insistencia acumulada y «ir + gerundio» para una progresión gradual; «llevar + gerundio» exige una expresión temporal cuantificada que aquí falta, y «venir + gerundio» no puede referirse a un evento futuro puntual como «mañana por la tarde»."
      },
      {
        "type": "multiple-choice",
        "question": "¿Qué función cumple el infinitivo en el cartel «no pisar el césped recién sembrado»?",
        "options": [
          "Funciona como sujeto abstracto de una reflexión general.",
          "Formula un mandato impersonal dirigido a cualquier persona, sin destinatario concreto.",
          "Expresa una acción simultánea a otra dentro de una narración.",
          "Sustituye a un sustantivo concreto dentro de la oración."
        ],
        "correctIndex": 1,
        "explanation": "El infinitivo en carteles y avisos formula un mandato impersonal, más distante y general que el imperativo directo, característico del registro escrito normativo estudiado en la primera parte de esta lección."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa con la perífrasis neutra que describe una acción en curso, sin matiz añadido.",
        "sentence": "___ (estar) trabajando en la propuesta desde esta mañana, sin ningún contratiempo especial.",
        "answer": "Estoy",
        "hint": "Se trata de una descripción neutra, sin matiz de progresión, acumulación o duración medida.",
        "explanation": "«Estar + gerundio» describe aquí la acción en curso de forma neutra, sin el matiz de progresión de «ir», de acumulación de «venir» ni de duración medida de «llevar»."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras para expresar una progresión gradual en la recuperación de un paciente.",
        "words": [
          "el",
          "paciente",
          "va",
          "recuperando",
          "la",
          "movilidad",
          "poco",
          "a",
          "poco"
        ],
        "translation": "The patient is gradually regaining mobility.",
        "explanation": "«Ir + gerundio» expresa aquí la progresión gradual e incremental de la recuperación, reforzada por la expresión «poco a poco»."
      }
    ]
  },
  {
    "slug": "passive-impersonal-mastery-1",
    "level": "C1",
    "number": 27,
    "title": "Voz Pasiva, Se Pasivo y Se Impersonal: Dominio Completo, Part 1 of 6",
    "summary": "Una síntesis completa de las cuatro estructuras que el español emplea para expresar pasividad o estado resultante, y de los criterios reales que guían la elección entre ellas.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Ser + participio: la pasiva perifrástica formal",
        "body": [
          "La pasiva perifrástica con «ser» + participio traslada el objeto directo de una oración activa a la posición de sujeto paciente, mientras el agente original —si se menciona— pasa a un complemento introducido por «por». Esta construcción resulta plenamente gramatical en español pero se percibe como marcadamente formal y escrita; en el habla espontánea suena forzada y rara vez se emplea fuera del periodismo, los textos legales o los informes técnicos.",
          "Una restricción importante limita su uso: la pasiva con «ser» exige un verbo transitivo cuyo agente sea relevante o recuperable en el contexto, y funciona mejor cuando ese agente se expresa explícitamente o cuando el énfasis retórico recae precisamente en el paciente. Usar «ser + participio» sin necesidad comunicativa clara —por ejemplo, en una conversación cotidiana donde bastaría un verbo activo— resulta un calco estilístico que delata una traducción poco natural."
        ],
        "examples": [
          {
            "es": "El puente fue inaugurado por el ayuntamiento el mes pasado.",
            "en": "El agente se expresa explícitamente y el énfasis recae en el puente como paciente."
          },
          {
            "es": "La ley fue aprobada por unanimidad en el parlamento.",
            "en": "Registro formal y escrito, típico del periodismo y los textos legales."
          },
          {
            "es": "El cuadro fue restaurado por un equipo de especialistas.",
            "en": "El agente aporta información relevante sobre quién realizó la acción."
          },
          {
            "es": "La decisión fue tomada tras meses de negociación.",
            "en": "El agente se omite porque no resulta relevante para el mensaje."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿En qué contexto resulta más natural el uso de «ser + participio»?",
            "options": [
              "En una conversación informal entre amigos sobre el fin de semana.",
              "En una noticia periodística sobre la aprobación de una ley.",
              "En un mensaje de texto breve entre familiares.",
              "En una expresión coloquial de sorpresa."
            ],
            "correctIndex": 1,
            "explanation": "La pasiva con «ser» pertenece al registro formal y escrito, típico del periodismo, los textos legales y los informes técnicos."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "¿Qué estructura sería más natural para narrar en un periódico la aprobación de una nueva ley, mencionando al parlamento como agente?",
        "options": [
          "Estar + participio",
          "Ser + participio",
          "Se impersonal",
          "Ninguna de las anteriores"
        ],
        "correctIndex": 1,
        "explanation": "La pasiva con «ser» resulta natural en el registro periodístico cuando el agente —en este caso el parlamento— es relevante y se menciona explícitamente."
      }
    ]
  },
  {
    "slug": "passive-impersonal-mastery-2",
    "level": "C1",
    "number": 28,
    "title": "Voz Pasiva, Se Pasivo y Se Impersonal: Dominio Completo, Part 2 of 6",
    "summary": "Una síntesis completa de las cuatro estructuras que el español emplea para expresar pasividad o estado resultante, y de los criterios reales que guían la elección entre ellas.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "Se pasivo: concordancia numérica con el sujeto paciente",
        "body": [
          "El «se» pasivo constituye, con mucho, el recurso más natural y frecuente del español para formar oraciones pasivas sin necesidad de recurrir a «ser + participio»: «se inauguró el puente» o, en plural, «se inauguraron los puentes» concuerdan en número con el sustantivo que funciona como sujeto paciente, exactamente igual que ocurriría con un verbo activo y su sujeto. Esta concordancia numérica es precisamente lo que distingue al «se» pasivo del «se» impersonal.",
          "El «se» pasivo se combina exclusivamente con sustantivos de cosa, nunca con complementos de persona marcados por la preposición «a»: un complemento de persona con «a» activa automáticamente la lectura impersonal. En el habla cotidiana y en la escritura de registro medio, el «se» pasivo desplaza casi por completo a la construcción con «ser», por resultar más ágil y menos marcada estilísticamente."
        ],
        "examples": [
          {
            "es": "Se vende esta casa.",
            "en": "Concordancia singular: «casa» es el sujeto paciente singular."
          },
          {
            "es": "Se venden estas casas.",
            "en": "Concordancia plural: el verbo concuerda con el sujeto paciente plural."
          },
          {
            "es": "Se inauguró el nuevo hospital ayer.",
            "en": "El «se» pasivo sustituye de forma natural a «fue inaugurado»."
          },
          {
            "es": "Se firmaron los contratos esta mañana.",
            "en": "El verbo concuerda en plural con «los contratos», sujeto paciente."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa con la forma verbal correctamente concordada del «se» pasivo.",
            "sentence": "Se ___ (alquilar) varios apartamentos en ese edificio.",
            "answer": "alquilan",
            "explanation": "El «se» pasivo exige concordancia en número con el sujeto paciente; «varios apartamentos» es plural, por lo que el verbo debe ir en plural.",
            "hint": "Fíjate en si el sujeto paciente es singular o plural."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "fill-blank",
        "prompt": "Completa con la forma verbal correctamente concordada.",
        "sentence": "Se ___ (necesitar) nuevas medidas urgentes en la región.",
        "answer": "necesitan",
        "explanation": "El «se» pasivo concuerda en número con el sujeto paciente; «nuevas medidas» es plural, por lo que el verbo va en plural.",
        "hint": "El sujeto paciente «medidas» está en plural."
      }
    ]
  },
  {
    "slug": "passive-impersonal-mastery-3",
    "level": "C1",
    "number": 29,
    "title": "Voz Pasiva, Se Pasivo y Se Impersonal: Dominio Completo, Part 3 of 6",
    "summary": "Una síntesis completa de las cuatro estructuras que el español emplea para expresar pasividad o estado resultante, y de los criterios reales que guían la elección entre ellas.",
    "duration": "10 min",
    "sections": [
      {
        "heading": "Se impersonal: invariablemente singular y sin sujeto",
        "body": [
          "El «se» impersonal, a diferencia del pasivo, permanece siempre en tercera persona del singular, sin importar cuántos elementos aparezcan después del verbo, porque no existe sujeto paciente con el que concordar. Esta construcción se emplea sobre todo cuando el complemento del verbo es una persona o un colectivo de personas, marcado obligatoriamente con la preposición «a»: lo correcto es «se busca a los candidatos», con el verbo invariablemente en singular pese al plural de «candidatos».",
          "La distinción entre «se» pasivo y «se» impersonal resulta, por tanto, sistemática: si el elemento que sigue al verbo es una cosa, sin preposición «a», se trata de un «se» pasivo con concordancia; si es una persona marcada con «a», se trata de un «se» impersonal, invariablemente singular. Confundir ambas estructuras produce errores muy visibles para un oyente nativo, como mezclar la concordancia plural del pasivo con la marca de persona del impersonal."
        ],
        "examples": [
          {
            "es": "Se busca a los candidatos idóneos para el puesto.",
            "en": "El complemento de persona con «a» activa la lectura impersonal; el verbo permanece singular."
          },
          {
            "es": "Se necesita a un especialista en la materia.",
            "en": "Verbo invariablemente singular pese a que podría haber varios especialistas en otro contexto."
          }
        ]
      },
      {
        "heading": "Se impersonal: invariablemente singular y sin sujeto (cont'd)",
        "body": [],
        "examples": [
          {
            "es": "Se informó a los vecinos sobre las obras.",
            "en": "Construcción impersonal singular, con complemento de persona marcado por «a»."
          },
          {
            "es": "Se ayuda a quienes lo solicitan.",
            "en": "El «se» impersonal no concuerda con el número de personas ayudadas."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Por qué «se buscan a los candidatos» se considera un error frente a «se busca a los candidatos»?",
            "options": [
              "Porque mezcla la concordancia plural propia del «se» pasivo con la marca de persona «a», propia del «se» impersonal, que exige singular.",
              "Porque el verbo «buscar» nunca admite el pronombre «se».",
              "Porque «candidatos» debería ir en singular en cualquier caso.",
              "Porque la preposición «a» es incorrecta en este contexto."
            ],
            "correctIndex": 0,
            "explanation": "Cuando el complemento lleva la marca de persona «a», la construcción es impersonal y el verbo debe permanecer siempre en singular, sin concordar con el número del complemento."
          },
          {
            "type": "multi-select",
            "question": "¿Cuáles de las siguientes oraciones ejemplifican correctamente el «se» impersonal?",
            "options": [
              "Se vende esta casa.",
              "Se busca a un traductor experimentado.",
              "Se necesitan tres traductores.",
              "Se ayuda a los estudiantes con dificultades."
            ],
            "correctIndexes": [
              1,
              3
            ],
            "explanation": "Las oraciones con complemento de persona marcado por «a» son impersonales y llevan el verbo en singular; las otras dos son «se» pasivo, con concordancia numérica."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multi-select",
        "question": "¿Cuáles de las siguientes oraciones ejemplifican el «se» impersonal, siempre en singular?",
        "options": [
          "Se venden pisos en esta zona.",
          "Se entrevistó a varios testigos del accidente.",
          "Se alquilan habitaciones amuebladas.",
          "Se convocó a los empleados a una reunión urgente."
        ],
        "correctIndexes": [
          1,
          3
        ],
        "explanation": "Las oraciones con complemento de persona marcado por «a» son impersonales y el verbo permanece en singular; las otras dos son «se» pasivo, con concordancia numérica."
      }
    ]
  },
  {
    "slug": "passive-impersonal-mastery-4",
    "level": "C1",
    "number": 30,
    "title": "Voz Pasiva, Se Pasivo y Se Impersonal: Dominio Completo, Part 4 of 6",
    "summary": "Una síntesis completa de las cuatro estructuras que el español emplea para expresar pasividad o estado resultante, y de los criterios reales que guían la elección entre ellas.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Estar + participio: el estado resultante frente al proceso",
        "body": [
          "«Estar + participio» no forma parte del sistema de la voz pasiva propiamente dicho, sino que describe un estado resultante, la consecuencia visible de una acción ya concluida, sin interés alguno por el proceso ni por el agente que lo produjo. La diferencia con «ser + participio» resulta crucial: una oración con «ser» narra un evento, un proceso con agente, mientras que «la puerta está cerrada» simplemente describe la situación actual de la puerta, sin referencia alguna al momento ni al responsable del cierre.",
          "En el uso real de la lengua, el hablante nativo elige entre estas cuatro estructuras no por capricho estilístico, sino según lo que realmente quiere comunicar: un evento con agente relevante favorece «ser»; un evento sin necesidad de mencionar al agente favorece el «se» pasivo; una acción sobre personas favorece el «se» impersonal; y la descripción de un estado, sin interés en el proceso, favorece «estar». Dominar esta red de opciones es lo que permite comunicar con precisión nativa."
        ],
        "examples": [
          {
            "es": "La puerta fue cerrada por el vigilante a las diez.",
            "en": "Se narra un proceso con agente explícito."
          },
          {
            "es": "La puerta está cerrada.",
            "en": "Se describe el estado resultante, sin referencia al proceso ni al agente."
          },
          {
            "es": "El informe ya está terminado.",
            "en": "Estado resultante actual, sin interés en cuándo ni quién lo terminó."
          },
          {
            "es": "El informe fue terminado ayer por el equipo técnico.",
            "en": "Se narra el proceso de terminar el informe, con agente y momento especificados."
          },
          {
            "es": "Las tiendas están cerradas los domingos.",
            "en": "Descripción de un estado habitual, no de un evento puntual con agente."
          }
        ],
        "checkpoint": [
          {
            "type": "matching",
            "instructions": "Relaciona cada estructura con la función comunicativa que cumple.",
            "pairs": [
              {
                "left": "ser + participio",
                "right": "narra un evento o proceso con un agente relevante"
              },
              {
                "left": "se pasivo",
                "right": "describe un evento sin necesidad de mencionar al agente, con concordancia numérica"
              },
              {
                "left": "se impersonal",
                "right": "describe una acción sobre personas, siempre en singular"
              },
              {
                "left": "estar + participio",
                "right": "describe el estado resultante de una acción ya concluida"
              }
            ],
            "explanation": "Cada estructura ocupa un lugar distinto en la red de opciones que el español ofrece para expresar pasividad o estado resultante, según lo que el hablante quiere comunicar."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "word-order",
        "prompt": "Ordena las palabras para formar una oración que describa un estado resultante.",
        "words": [
          "el",
          "informe",
          "ya",
          "está",
          "terminado"
        ],
        "explanation": "«Estar + participio» describe aquí el estado resultante actual del informe, sin interés en el proceso ni en el agente que lo terminó."
      }
    ]
  },
  {
    "slug": "passive-impersonal-mastery-5",
    "level": "C1",
    "number": 31,
    "title": "Voz Pasiva, Se Pasivo y Se Impersonal: Dominio Completo, Part 5 of 6",
    "summary": "Una síntesis completa de las cuatro estructuras que el español emplea para expresar pasividad o estado resultante, y de los criterios reales que guían la elección entre ellas.",
    "duration": "9 min",
    "sections": [
      {
        "heading": "En la práctica",
        "body": [
          "El nuevo puente sobre el río fue inaugurado ayer por las autoridades municipales.",
          "Se espera que la obra reduzca considerablemente el tráfico en el centro de la ciudad.",
          "Durante la ceremonia, se invitó a varios vecinos a cruzar el puente por primera vez.",
          "El proyecto, que estuvo paralizado durante meses, fue retomado el año pasado.",
          "Actualmente, el puente está abierto al tráfico las veinticuatro horas del día.",
          "Se instalaron además cámaras de seguridad a lo largo de todo el recorrido.",
          "Los responsables afirmaron que se evaluará el impacto de la obra en los próximos meses.",
          "Por ahora, se considera que el puente ya está cumpliendo su función principal."
        ]
      },
      {
        "heading": "Vocabulario: la voz pasiva y el se impersonal",
        "body": [
          "35 palabras relacionadas con la voz pasiva y el se impersonal."
        ],
        "examples": [
          {
            "es": "la voz pasiva",
            "en": "la construcción gramatical en la que el sujeto recibe la acción del verbo en lugar de realizarla"
          },
          {
            "es": "el sujeto paciente",
            "en": "el elemento gramatical que recibe la acción expresada por el verbo"
          },
          {
            "es": "el ejecutor",
            "en": "la persona o entidad que lleva a cabo materialmente una acción"
          },
          {
            "es": "la concordancia numérica",
            "en": "la correspondencia obligatoria entre el número gramatical de dos elementos relacionados"
          },
          {
            "es": "el complemento de persona",
            "en": "el elemento que designa a una persona y que suele marcarse con la preposición «a»"
          },
          {
            "es": "el estado resultante",
            "en": "la situación final que queda tras la conclusión de un proceso"
          },
          {
            "es": "la construcción perifrástica",
            "en": "la estructura formada por un verbo auxiliar y una forma no personal"
          },
          {
            "es": "el calco estilístico",
            "en": "la reproducción poco natural de una estructura propia de otra lengua"
          },
          {
            "es": "el registro periodístico",
            "en": "el estilo propio de la prensa escrita, formal pero accesible"
          },
          {
            "es": "el texto legal",
            "en": "el documento cuyo lenguaje sigue las convenciones formales del ámbito jurídico"
          },
          {
            "es": "el verbo transitivo",
            "en": "el verbo que exige un complemento directo para completar su significado"
          },
          {
            "es": "la lectura gramatical",
            "en": "la interpretación sintáctica que se da a una construcción ambigua"
          },
          {
            "es": "el pronombre reflexivo",
            "en": "la forma pronominal que remite al mismo sujeto que realiza la acción"
          },
          {
            "es": "agramatical",
            "en": "que no se ajusta a las reglas de la gramática de una lengua"
          },
          {
            "es": "invariable",
            "en": "que no cambia de forma ni de número bajo ninguna circunstancia"
          },
          {
            "es": "el proceso narrado",
            "en": "la secuencia de acciones que se relata como un evento con desarrollo"
          },
          {
            "es": "la mención explícita",
            "en": "la referencia directa y clara a un elemento dentro del discurso"
          },
          {
            "es": "la omisión",
            "en": "la supresión deliberada de un elemento que podría haberse expresado"
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "matching",
        "instructions": "Relaciona cada estructura pasiva o de estado con su función comunicativa principal.",
        "pairs": [
          {
            "left": "ser + participio",
            "right": "narrar un evento con un agente relevante y explícito"
          },
          {
            "left": "se pasivo",
            "right": "expresar un evento sobre cosas, con concordancia numérica"
          },
          {
            "left": "se impersonal",
            "right": "expresar una acción sobre personas, siempre en singular"
          },
          {
            "left": "estar + participio",
            "right": "describir el estado resultante de un proceso ya concluido"
          }
        ],
        "explanation": "Cada estructura ocupa un lugar distinto según el hablante quiera narrar un proceso, omitir al agente, referirse a personas o simplemente describir un estado."
      }
    ]
  },
  {
    "slug": "passive-impersonal-mastery-6",
    "level": "C1",
    "number": 32,
    "title": "Voz Pasiva, Se Pasivo y Se Impersonal: Dominio Completo, Part 6 of 6",
    "summary": "Una síntesis completa de las cuatro estructuras que el español emplea para expresar pasividad o estado resultante, y de los criterios reales que guían la elección entre ellas.",
    "duration": "6 min",
    "sections": [
      {
        "heading": "Vocabulario: la voz pasiva y el se impersonal (cont'd)",
        "body": [],
        "examples": [
          {
            "es": "el énfasis retórico",
            "en": "la importancia especial que se otorga a un elemento del discurso con fines expresivos"
          },
          {
            "es": "el colectivo",
            "en": "el conjunto de personas o entidades consideradas como una unidad"
          },
          {
            "es": "idóneo",
            "en": "que resulta perfectamente adecuado para un propósito determinado"
          },
          {
            "es": "la ambigüedad sintáctica",
            "en": "la posibilidad de interpretar una estructura gramatical de más de una manera"
          },
          {
            "es": "la marca gramatical",
            "en": "el elemento formal que señala una función o categoría dentro de la oración"
          },
          {
            "es": "el desenlace del proceso",
            "en": "el punto en que un proceso llega a su fin y produce un resultado"
          },
          {
            "es": "sistemático",
            "en": "que sigue un método o un patrón regular y coherente"
          },
          {
            "es": "el análisis contrastivo",
            "en": "la comparación entre dos o más estructuras para identificar sus diferencias"
          },
          {
            "es": "el restablecimiento",
            "en": "acción de devolver algo a su estado anterior"
          },
          {
            "es": "la unanimidad",
            "en": "el acuerdo total de todos los miembros de un grupo sobre una decisión"
          },
          {
            "es": "el procedimiento reglamentario",
            "en": "conjunto de pasos establecidos formalmente para resolver un asunto oficial"
          },
          {
            "es": "el informe técnico",
            "en": "el documento que expone datos y conclusiones especializadas sobre un tema concreto"
          },
          {
            "es": "la red de opciones",
            "en": "el conjunto de alternativas disponibles para expresar un mismo contenido"
          },
          {
            "es": "la precisión comunicativa",
            "en": "la exactitud con la que un mensaje transmite lo que el hablante pretende"
          },
          {
            "es": "el vigilante",
            "en": "la persona encargada de custodiar y proteger un lugar"
          },
          {
            "es": "paralizado",
            "en": "detenido por completo en su desarrollo o funcionamiento"
          },
          {
            "es": "retomar",
            "en": "volver a emprender una actividad que había quedado interrumpida"
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "¿Cuál de las siguientes oraciones contiene un error por mezclar la concordancia del «se» pasivo con la marca de persona del «se» impersonal?",
        "options": [
          "Se buscan candidatos con experiencia.",
          "Se buscan a los candidatos con experiencia.",
          "Se busca a los candidatos con experiencia.",
          "Se necesita experiencia previa."
        ],
        "correctIndex": 1,
        "explanation": "«Se buscan a los candidatos» mezcla incorrectamente la concordancia plural propia del «se» pasivo con la marca de persona «a», que exige la construcción impersonal invariablemente en singular."
      }
    ]
  },
  {
    "slug": "free-indirect-style-part-1-1",
    "level": "C1",
    "number": 33,
    "title": "Estilo Indirecto Libre y Narración Literaria (Parte 1 de 2), Part 1 of 3",
    "summary": "Una exploración del estilo indirecto libre como recurso narrativo que funde la voz del narrador con la conciencia de un personaje, sin verbos introductores ni marcas tipográficas.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Definición y mecánica del estilo indirecto libre",
        "body": [
          "El estilo indirecto libre constituye uno de los recursos narrativos más sofisticados de la prosa literaria moderna: permite que los pensamientos, las palabras o las percepciones de un personaje se filtren dentro de la voz del narrador en tercera persona, sin que medie un verbo introductor como «pensó que» o «dijo que», y sin las marcas tipográficas del estilo directo. El resultado es una fusión ambigua y deliberada entre dos voces que el lector debe reconstruir a partir de indicios sutiles, no de señales explícitas.",
          "Esta técnica, popularizada en la narrativa europea y perfeccionada en la narrativa hispánica por sucesivas generaciones de novelistas, permite al narrador adentrarse en la conciencia de un personaje sin renunciar a la tercera persona ni a la distancia formal que esta implica. A diferencia del monólogo interior puro, el estilo indirecto libre conserva ciertos rasgos de la narración externa —los tiempos verbales del pasado narrativo, por ejemplo— mientras incorpora el léxico, el tono y la perspectiva subjetiva del personaje."
        ],
        "examples": [
          {
            "es": "María miró el reloj. Ya era tarde, ¿por qué tardaba tanto el autobús?",
            "en": "La pregunta refleja el pensamiento de María sin verbo introductor ni comillas."
          },
          {
            "es": "Pensó que ya era tarde y se preguntó por qué tardaba tanto el autobús.",
            "en": "Versión con estilo indirecto tradicional, con verbo introductor explícito."
          },
          {
            "es": "«¿Por qué tarda tanto el autobús?», pensó María.",
            "en": "Versión con estilo directo, marcada por comillas y verbo introductor."
          },
          {
            "es": "El narrador se funde con la conciencia del personaje sin marcas explícitas.",
            "en": "Descripción general del efecto que produce el estilo indirecto libre."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Qué característica distingue principalmente al estilo indirecto libre del estilo indirecto tradicional?",
            "options": [
              "El uso obligatorio de comillas.",
              "La ausencia de un verbo introductor como «pensó que» o «dijo que».",
              "El uso exclusivo del presente de indicativo.",
              "La presencia de un narrador en primera persona."
            ],
            "correctIndex": 1,
            "explanation": "El estilo indirecto libre incorpora el pensamiento o la voz del personaje directamente en la narración, sin verbo introductor ni marcas tipográficas explícitas."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "¿Cuál de las siguientes oraciones ejemplifica el estilo indirecto libre?",
        "options": [
          "Pensó que ya era demasiado tarde para arrepentirse.",
          "«Ya es demasiado tarde para arrepentirme», pensó.",
          "Ya era demasiado tarde para arrepentirse; ¿de qué habría servido, además?",
          "El personaje pensó en voz alta sobre el arrepentimiento."
        ],
        "correctIndex": 2,
        "explanation": "La tercera oración funde la voz narrativa con el pensamiento del personaje, sin verbo introductor ni comillas, e incluye una interrogación retórica propia de su subjetividad."
      }
    ]
  },
  {
    "slug": "free-indirect-style-part-1-2",
    "level": "C1",
    "number": 34,
    "title": "Estilo Indirecto Libre y Narración Literaria (Parte 1 de 2), Part 2 of 3",
    "summary": "Una exploración del estilo indirecto libre como recurso narrativo que funde la voz del narrador con la conciencia de un personaje, sin verbos introductores ni marcas tipográficas.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Los desplazamientos temporales convencionales",
        "body": [
          "Cuando el estilo indirecto libre traslada al pasado narrativo los pensamientos que el personaje formularía originalmente en presente, se produce un desplazamiento temporal sistemático: el presente de la conciencia del personaje se convierte en pretérito imperfecto en la voz del narrador, y el futuro que el personaje anticiparía se transforma en condicional. Así, un pensamiento como «no vendrá» se convierte, dentro del relato en pasado, en «no vendría», sin que ello implique ningún matiz de irrealidad, como sí ocurriría en otros usos del condicional.",
          "Este desplazamiento no es arbitrario, sino que reproduce fielmente la lógica de la correlación temporal que rige el estilo indirecto en cualquiera de sus formas: puesto que el marco narrativo global está en pasado, todo lo que el personaje piense o diga en su propio presente se desplaza retrospectivamente. Reconocer estos corrimientos temporales es indispensable para leer con fluidez la prosa narrativa, ya que el lector debe reconstruir mentalmente el tiempo verbal original del pensamiento del personaje a partir de la forma desplazada que encuentra en el texto."
        ],
        "examples": [
          {
            "es": "No vendría, estaba segura de ello.",
            "en": "El futuro «no vendrá» del pensamiento original se transforma en condicional dentro de la narración pasada."
          },
          {
            "es": "Todo estaba perdido; nada tenía ya sentido.",
            "en": "El presente de la conciencia del personaje se convierte en pretérito imperfecto narrativo."
          },
          {
            "es": "Mañana sería un día distinto, pensó sin demasiada convicción.",
            "en": "El futuro del personaje se transpone al condicional del relato en pasado."
          },
          {
            "es": "Ya no importaba lo que dijeran los demás.",
            "en": "El imperfecto narrativo sustituye al presente original del pensamiento del personaje."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa transformando el pensamiento original del personaje al tiempo verbal correspondiente en estilo indirecto libre dentro de una narración en pasado.",
            "sentence": "Pensamiento original: «Mañana llegaré temprano». En el relato: Mañana ___ (llegar) temprano, se prometió a sí misma.",
            "answer": "llegaría",
            "explanation": "El futuro del pensamiento original del personaje se transforma en condicional dentro del marco narrativo en pasado.",
            "hint": "Se trata de un desplazamiento del futuro hacia el condicional."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "fill-blank",
        "prompt": "Transforma el pensamiento original del personaje al tiempo verbal correspondiente dentro de una narración en pasado.",
        "sentence": "Pensamiento original: «Nunca lo perdonaré». En el relato: Nunca lo ___ (perdonar), se dijo con firmeza.",
        "answer": "perdonaría",
        "explanation": "El futuro del pensamiento original se transforma en condicional dentro del marco narrativo en pasado, sin implicar ningún matiz de irrealidad.",
        "hint": "Se trata del mismo desplazamiento que convierte «llegaré» en «llegaría»."
      }
    ]
  },
  {
    "slug": "free-indirect-style-part-1-3",
    "level": "C1",
    "number": 35,
    "title": "Estilo Indirecto Libre y Narración Literaria (Parte 1 de 2), Part 3 of 3",
    "summary": "Una exploración del estilo indirecto libre como recurso narrativo que funde la voz del narrador con la conciencia de un personaje, sin verbos introductores ni marcas tipográficas.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Marcas deícticas y expresivas de la subjetividad del personaje",
        "body": [
          "Aunque el estilo indirecto libre elimina las marcas tipográficas explícitas del discurso directo, conserva sistemáticamente ciertos rasgos léxicos y sintácticos que delatan la presencia de la subjetividad del personaje dentro de la narración en tercera persona. Las exclamaciones, las interrogaciones retóricas, las interjecciones y los adverbios de proximidad espacial o temporal resultarían extraños en boca de un narrador puramente objetivo, pero encajan naturalmente cuando se entienden como filtraciones de la perspectiva del personaje.",
          "De igual manera, ciertos adjetivos valorativos o expresiones coloquiales que romperían el tono habitual del narrador señalan, casi siempre, que el texto se ha deslizado hacia la conciencia de un personaje concreto. Un buen lector de narrativa aprende a detectar estos indicios acumulativos —nunca uno solo resulta decisivo por sí mismo— para reconstruir, a partir de la superficie textual, los límites difusos entre la voz que narra y la voz que piensa."
        ],
        "examples": [
          {
            "es": "¡Qué ridículo parecía todo ahora!",
            "en": "La exclamación y el adverbio de proximidad delatan la voz subjetiva del personaje."
          },
          {
            "es": "¿Cómo había podido ser tan ingenua?",
            "en": "La interrogación retórica revela el reproche interno del personaje."
          },
          {
            "es": "Aquí, en este mismo lugar, todo había comenzado.",
            "en": "El adverbio de proximidad espacial sitúa la perspectiva desde el punto de vista del personaje."
          },
          {
            "es": "Total, para lo que servía discutir con él.",
            "en": "La expresión coloquial delata el tono subjetivo, ajeno a un narrador estrictamente objetivo."
          }
        ],
        "checkpoint": [
          {
            "type": "multi-select",
            "question": "¿Qué rasgos suelen delatar la presencia de la subjetividad del personaje dentro del estilo indirecto libre?",
            "options": [
              "Las exclamaciones y las interrogaciones retóricas.",
              "El uso exclusivo de comillas.",
              "Los adverbios de proximidad como «aquí» o «ahora».",
              "Las expresiones coloquiales ajenas al tono habitual del narrador.",
              "La presencia obligatoria de un verbo introductor."
            ],
            "correctIndexes": [
              0,
              2,
              3
            ],
            "explanation": "El estilo indirecto libre no usa comillas ni verbo introductor; su subjetividad se detecta mediante exclamaciones, adverbios de proximidad y expresiones coloquiales que rompen el tono neutro del narrador."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multi-select",
        "question": "¿Qué elementos suelen delatar la presencia del pensamiento de un personaje dentro de una narración en estilo indirecto libre?",
        "options": [
          "Las interrogaciones retóricas.",
          "El uso constante de comillas.",
          "Los adverbios de proximidad como «ahora» o «aquí».",
          "Las exclamaciones.",
          "La primera persona gramatical obligatoria."
        ],
        "correctIndexes": [
          0,
          2,
          3
        ],
        "explanation": "El estilo indirecto libre no emplea comillas ni cambia necesariamente a primera persona; su subjetividad se detecta mediante interrogaciones retóricas, adverbios de proximidad y exclamaciones."
      }
    ]
  },
  {
    "slug": "free-indirect-style-part-1-mastery-check",
    "level": "C1",
    "number": 36,
    "title": "Prueba de Dominio: Estilo Indirecto Libre y Narración Literaria (Parte 1)",
    "summary": "Una prueba que exige reconocer y producir el estilo indirecto libre en fragmentos narrativos inéditos, aplicando con precisión el desplazamiento temporal y los indicios de subjetividad del personaje.",
    "duration": "10 min",
    "sections": [],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "¿Cuál de los siguientes fragmentos ejemplifica el estilo indirecto libre?",
        "options": [
          "Pensó que había sido un error confiar en ellos.",
          "«He sido un error al confiar en ellos», pensó con amargura.",
          "Había sido un error confiar en ellos; ¿de qué le había servido tanta lealtad?",
          "El personaje reflexionó largamente sobre el error que había cometido."
        ],
        "correctIndex": 2,
        "explanation": "El tercer fragmento funde la voz narrativa con el pensamiento del personaje, sin verbo introductor ni comillas, e incluye una interrogación retórica propia de su subjetividad; los demás corresponden al estilo indirecto tradicional, al estilo directo y a la narración puramente objetiva."
      },
      {
        "type": "fill-blank",
        "prompt": "Transforma el pensamiento original del personaje al tiempo verbal correspondiente dentro de una narración en pasado.",
        "sentence": "Pensamiento original: «Mañana renunciaré a mi puesto». En el relato: Mañana ___ (renunciar) a su puesto; ya no había vuelta atrás.",
        "answer": "renunciaría",
        "hint": "El futuro del pensamiento original se desplaza hacia el condicional dentro del marco narrativo en pasado.",
        "explanation": "Como el marco narrativo global está en pasado, el futuro que el personaje formularía en su propio presente («renunciaré») se convierte en condicional («renunciaría»), sin ningún matiz de irrealidad."
      },
      {
        "type": "fill-blank",
        "prompt": "Transforma el pensamiento original del personaje al tiempo verbal correspondiente dentro de una narración en pasado.",
        "sentence": "Pensamiento original: «Ya no me importa lo que digan». En el relato: Ya no le ___ (importar) lo que dijeran los demás.",
        "answer": "importaba",
        "hint": "El presente de la conciencia del personaje se desplaza hacia el pretérito imperfecto narrativo.",
        "explanation": "El presente que el personaje formularía originalmente («ya no me importa») se convierte en pretérito imperfecto dentro de la voz del narrador en pasado, siguiendo la correlación temporal sistemática del estilo indirecto libre."
      },
      {
        "type": "multiple-choice",
        "question": "En el fragmento «¿Acaso alguien se había preocupado alguna vez por él?», ¿qué función cumple la interrogación retórica dentro del estilo indirecto libre?",
        "options": [
          "Marca una pregunta que el narrador dirige directamente al lector.",
          "Revela el reproche o la amargura interna del personaje, filtrados en la voz narrativa.",
          "Indica que el fragmento pertenece al estilo directo, no al indirecto libre.",
          "Señala un error gramatical que debería corregirse en una revisión editorial."
        ],
        "correctIndex": 1,
        "explanation": "Las interrogaciones retóricas, al no exigir una respuesta real, delatan la subjetividad del personaje —aquí, su resentimiento o su autocompasión— filtrada dentro de la narración en tercera persona sin marcas tipográficas."
      },
      {
        "type": "multi-select",
        "question": "¿Cuáles de los siguientes fragmentos contienen indicios de la subjetividad de un personaje propios del estilo indirecto libre?",
        "options": [
          "¡Qué torpe había sido al confiar en esa gente!",
          "El tren llegó a la estación a las nueve en punto.",
          "Vaya manera de arruinarlo todo, la verdad.",
          "La ciudad tenía entonces cerca de dos millones de habitantes."
        ],
        "correctIndexes": [
          0,
          2
        ],
        "explanation": "La exclamación y la expresión coloquial «vaya manera de» delatan una voz subjetiva filtrada en la narración; las otras dos oraciones son descripciones objetivas propias de un narrador neutro, sin ningún indicio de subjetividad."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras para formar una exclamación que revele el pensamiento del personaje en estilo indirecto libre.",
        "words": [
          "qué",
          "torpe",
          "había",
          "sido",
          "al",
          "confiar",
          "en",
          "esa",
          "gente"
        ],
        "translation": "How foolish he had been to trust those people!",
        "explanation": "La exclamación se integra directamente en la narración, sin verbo introductor ni comillas, como pensamiento filtrado del personaje sobre su propio error."
      },
      {
        "type": "matching",
        "instructions": "Relaciona cada tipo de discurso narrativo con el fragmento que mejor lo ejemplifica.",
        "pairs": [
          {
            "left": "estilo directo",
            "right": "«No pienso volver a hablarle», se juró a sí misma."
          },
          {
            "left": "estilo indirecto tradicional",
            "right": "Se juró a sí misma que no pensaba volver a hablarle."
          },
          {
            "left": "estilo indirecto libre",
            "right": "No, no pensaba volver a hablarle, nunca más."
          },
          {
            "left": "narración objetiva",
            "right": "Dejó de hablarle esa misma tarde."
          }
        ],
        "explanation": "Cada forma de discurso narrativo combina de manera distinta la fidelidad a la voz del personaje y la mediación del narrador; solo el estilo indirecto libre funde ambas voces sin verbo introductor ni comillas, conservando la tercera persona y el tiempo del relato."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Traduce el fragmento narrativo aplicando el desplazamiento temporal correspondiente al estilo indirecto libre.",
        "source": "She would never forgive them; she was sure of that now.",
        "answer": "No los perdonaría jamás; estaba segura de eso ahora.",
        "altAnswers": [
          "Nunca los perdonaría; de eso estaba segura ahora."
        ],
        "explanation": "El futuro del pensamiento original de la protagonista se transpone al condicional dentro del marco narrativo en pasado, mientras que el adverbio de proximidad temporal «ahora» conserva la perspectiva subjetiva del personaje."
      },
      {
        "type": "translate",
        "direction": "es-en",
        "prompt": "Traduce al inglés captando el matiz coloquial y resignado del fragmento.",
        "source": "Total, para qué esforzarse tanto si total nadie lo iba a agradecer.",
        "answer": "What was the point of trying so hard when, after all, nobody was going to be grateful for it anyway.",
        "altAnswers": [
          "Anyway, what was the use of trying so hard when nobody was going to appreciate it in the end."
        ],
        "explanation": "La expresión coloquial «total», repetida aquí con matiz resignado, delata la voz subjetiva del personaje filtrada en la narración, un rasgo típico del estilo indirecto libre que el traductor debe reproducir con un matiz equivalente en inglés."
      },
      {
        "type": "multiple-choice",
        "question": "¿En qué se diferencia principalmente el estilo indirecto libre del monólogo interior puro?",
        "options": [
          "El estilo indirecto libre nunca puede representar los pensamientos de un personaje.",
          "El monólogo interior conserva siempre los tiempos verbales del pasado narrativo, mientras que el estilo indirecto libre no lo hace.",
          "El estilo indirecto libre conserva ciertos rasgos de la narración externa, como los tiempos del pasado narrativo, mientras que el monólogo interior representa el flujo de pensamiento de forma más directa e ininterrumpida.",
          "No existe ninguna diferencia real entre ambas técnicas narrativas."
        ],
        "correctIndex": 2,
        "explanation": "A diferencia del monólogo interior puro, que representa el pensamiento de forma directa y sin mediación, el estilo indirecto libre conserva rasgos de la narración externa —como el pasado narrativo y la tercera persona— mientras incorpora el léxico y la perspectiva del personaje."
      },
      {
        "type": "fill-blank",
        "prompt": "Transforma el pensamiento original del personaje al tiempo verbal correspondiente dentro de una narración en pasado.",
        "sentence": "Pensamiento original: «Todo saldrá bien». En el relato: Todo ___ (salir) bien, se repetía sin mucha convicción.",
        "answer": "saldría",
        "hint": "Se trata del mismo desplazamiento que convierte «renunciaré» en «renunciaría».",
        "explanation": "El futuro del pensamiento original del personaje se transforma en condicional dentro del marco narrativo en pasado, reflejando fielmente la correlación temporal del estilo indirecto libre."
      },
      {
        "type": "multiple-choice",
        "question": "¿Cuál de las siguientes oraciones funde correctamente la voz del narrador con la perspectiva subjetiva del personaje mediante un adverbio de proximidad?",
        "options": [
          "El personaje llegó finalmente a la conclusión correcta tras mucho pensarlo.",
          "Ahora, por fin, todo cobraba sentido.",
          "La reunión se celebró en la sede central de la empresa.",
          "El informe fue entregado dos semanas después de lo previsto."
        ],
        "correctIndex": 1,
        "explanation": "El adverbio de proximidad temporal «ahora» sitúa la perspectiva desde el punto de vista del personaje en el momento mismo de su revelación, un indicio característico del estilo indirecto libre ausente en las demás oraciones, puramente objetivas."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras para formar una oración con un adverbio de proximidad que revele la perspectiva del personaje.",
        "words": [
          "ahora",
          "por",
          "fin",
          "todo",
          "cobraba",
          "sentido"
        ],
        "translation": "Now, at last, everything made sense.",
        "explanation": "El adverbio «ahora» sitúa el relato desde la perspectiva temporal inmediata del personaje, fusionando su punto de vista con la voz narrativa sin necesidad de un verbo introductor."
      },
      {
        "type": "multi-select",
        "question": "¿Cuáles de los siguientes fragmentos corresponden a una narración puramente objetiva, sin filtración de la subjetividad de ningún personaje?",
        "options": [
          "El avión aterrizó con veinte minutos de retraso sobre lo previsto.",
          "¡Qué alivio sentir por fin que todo había terminado!",
          "La fábrica empleaba entonces a unos trescientos trabajadores.",
          "¿Cómo iba a explicarles ahora semejante disparate?"
        ],
        "correctIndexes": [
          0,
          2
        ],
        "explanation": "Las dos primeras oraciones seleccionadas son descripciones neutras y objetivas, sin exclamaciones, interrogaciones retóricas ni adverbios de proximidad que delaten la conciencia de un personaje; las otras dos sí incorporan indicios claros de subjetividad."
      },
      {
        "type": "matching",
        "instructions": "Relaciona cada rasgo textual con la función que cumple dentro del estilo indirecto libre.",
        "pairs": [
          {
            "left": "la interrogación retórica",
            "right": "revela el reproche o la duda interna del personaje sin exigir respuesta real"
          },
          {
            "left": "el adverbio de proximidad",
            "right": "sitúa la perspectiva narrativa desde el punto de vista inmediato del personaje"
          },
          {
            "left": "la expresión coloquial",
            "right": "rompe el tono neutro del narrador y delata la voz subjetiva del personaje"
          },
          {
            "left": "la exclamación",
            "right": "transmite la intensidad emocional del pensamiento del personaje"
          }
        ],
        "explanation": "Cada uno de estos rasgos, ausente en un narrador puramente objetivo, funciona como un indicio acumulativo que el lector debe reconocer para reconstruir la fusión entre la voz que narra y la voz que piensa."
      },
      {
        "type": "multiple-choice",
        "question": "¿Por qué un novelista podría preferir el estilo indirecto libre a la simple fórmula «pensó que» para narrar la crisis interna de un personaje?",
        "options": [
          "Porque el estilo indirecto libre es gramaticalmente más sencillo de construir.",
          "Porque permite dar acceso a la interioridad del personaje sin las interrupciones constantes de un verbo introductor, logrando mayor inmediatez psicológica.",
          "Porque evita por completo el uso de la tercera persona gramatical.",
          "Porque suprime la necesidad de mantener una correlación temporal coherente."
        ],
        "correctIndex": 1,
        "explanation": "Al eliminar el verbo introductor mientras conserva la tercera persona y la correlación temporal del relato, el estilo indirecto libre logra un efecto de inmediatez psicológica que la fórmula «pensó que», repetida constantemente, interrumpiría."
      }
    ]
  },
  {
    "slug": "free-indirect-style-part-2-1",
    "level": "C1",
    "number": 37,
    "title": "Estilo Indirecto Libre y Narración Literaria (Parte 2 de 2), Part 1 of 3",
    "summary": "Una exploración del estilo indirecto libre como recurso narrativo que funde la voz del narrador con la conciencia de un personaje, sin verbos introductores ni marcas tipográficas.",
    "duration": "10 min",
    "sections": [
      {
        "heading": "Diferencias con el estilo directo y el estilo indirecto tradicional",
        "body": [
          "El estilo directo reproduce literalmente las palabras de un personaje, marcadas por comillas o guiones, y preserva su tiempo verbal y su persona gramatical originales; el estilo indirecto tradicional, en cambio, subordina esas palabras a un verbo introductor y las adapta a la tercera persona y a la correlación temporal propia del relato. El estilo indirecto libre ocupa un espacio intermedio: adopta la tercera persona y la correlación temporal del estilo indirecto, pero prescinde del verbo introductor y conserva buena parte del tono y la energía expresiva del estilo directo.",
          "Precisamente por esta hibridez, el estilo indirecto libre logra un efecto de inmediatez psicológica que ninguno de los otros dos consigue por separado: el lector accede a la interioridad del personaje con la viveza del discurso directo, pero sin la interrupción constante de los verbos introductores, y sin la frialdad distanciadora del estilo indirecto puro. Este equilibrio explica por qué se ha convertido en el recurso predilecto de la narrativa psicológica y de la llamada novela de conciencia."
        ],
        "examples": [
          {
            "es": "Dijo: «No pienso volver a este lugar».",
            "en": "Estilo directo: reproduce literalmente las palabras, con comillas y persona gramatical original."
          },
          {
            "es": "Dijo que no pensaba volver a ese lugar.",
            "en": "Estilo indirecto tradicional: verbo introductor y adaptación a la tercera persona."
          }
        ]
      },
      {
        "heading": "Diferencias con el estilo directo y el estilo indirecto tradicional (cont'd)",
        "body": [],
        "examples": [
          {
            "es": "No, no pensaba volver a ese lugar, nunca más.",
            "en": "Estilo indirecto libre: sin verbo introductor, con la energía expresiva del discurso directo."
          },
          {
            "es": "La interioridad del personaje se filtra sin interrupciones tipográficas.",
            "en": "Descripción del efecto de inmediatez psicológica propio del estilo indirecto libre."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Por qué el estilo indirecto libre logra un efecto de inmediatez psicológica que el estilo indirecto tradicional no consigue?",
            "options": [
              "Porque usa siempre la primera persona gramatical.",
              "Porque prescinde del verbo introductor y conserva el tono y la energía expresiva del personaje, sin perder la correlación temporal del relato.",
              "Porque emplea exclusivamente el presente de indicativo.",
              "Porque reproduce las palabras del personaje entre comillas."
            ],
            "correctIndex": 1,
            "explanation": "Al eliminar el verbo introductor mientras conserva la tercera persona y la correlación temporal, el estilo indirecto libre combina la viveza del discurso directo con la fluidez narrativa del indirecto."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "word-order",
        "prompt": "Ordena las palabras para formar una oración en estilo indirecto libre sobre un pensamiento del personaje.",
        "words": [
          "qué",
          "absurdo",
          "había",
          "sido",
          "todo",
          "aquello"
        ],
        "explanation": "La exclamación se integra directamente en la narración, sin verbo introductor ni comillas, como pensamiento filtrado del personaje."
      }
    ]
  },
  {
    "slug": "free-indirect-style-part-2-2",
    "level": "C1",
    "number": 38,
    "title": "Estilo Indirecto Libre y Narración Literaria (Parte 2 de 2), Part 2 of 3",
    "summary": "Una exploración del estilo indirecto libre como recurso narrativo que funde la voz del narrador con la conciencia de un personaje, sin verbos introductores ni marcas tipográficas.",
    "duration": "10 min",
    "sections": [
      {
        "heading": "En la práctica",
        "body": [
          "Carmen cerró la puerta detrás de ella y se quedó un momento inmóvil en el pasillo.",
          "Qué absurdo había sido todo aquello, pensándolo bien.",
          "Había llegado con tanta ilusión, y ahora ni siquiera sabía por qué se había molestado en venir.",
          "Nadie la había escuchado de verdad, ni una sola vez en toda la tarde.",
          "Tal vez mañana las cosas se verían de otra manera, aunque lo dudaba.",
          "Caminó hacia la ventana y miró la calle vacía; ¿acaso alguien se acordaría de ella al día siguiente?",
          "Total, para lo que importaba ya.",
          "Se sentó despacio, cerró los ojos y decidió que, por esa noche, no pensaría en nada más."
        ]
      },
      {
        "heading": "Vocabulario: la narración y el estilo indirecto libre",
        "body": [
          "35 palabras relacionadas con la narración y el estilo indirecto libre."
        ],
        "examples": [
          {
            "es": "la instancia narrativa",
            "en": "entidad abstracta desde la cual se organiza el relato"
          },
          {
            "es": "el punto de vista narrativo",
            "en": "perspectiva desde la cual se cuenta una historia"
          },
          {
            "es": "la interioridad del personaje",
            "en": "mundo interno de pensamientos y emociones de un personaje literario"
          },
          {
            "es": "la introspección del narrador",
            "en": "exploración de los pensamientos internos que hace quien narra la historia"
          },
          {
            "es": "la interioridad",
            "en": "el conjunto de pensamientos, emociones y percepciones internas de una persona"
          },
          {
            "es": "la fusión de voces",
            "en": "la mezcla deliberada entre la voz narrativa y la voz de un personaje"
          },
          {
            "es": "el verbo introductor",
            "en": "el verbo que anuncia o encabeza una cita o un pensamiento reportado"
          },
          {
            "es": "la correlación temporal",
            "en": "el ajuste sistemático de los tiempos verbales según el marco narrativo"
          },
          {
            "es": "el desplazamiento temporal",
            "en": "el cambio de un tiempo verbal a otro por efecto del contexto narrativo"
          },
          {
            "es": "el monólogo interior",
            "en": "la representación directa e ininterrumpida del flujo de pensamiento de un personaje"
          },
          {
            "es": "la marca tipográfica",
            "en": "el signo gráfico, como las comillas, que señala una cita textual"
          },
          {
            "es": "el indicio textual",
            "en": "la señal presente en un texto que permite inferir un significado implícito"
          },
          {
            "es": "la ambigüedad deliberada",
            "en": "la falta de claridad buscada intencionalmente con un fin expresivo"
          },
          {
            "es": "la deixis",
            "en": "el conjunto de elementos lingüísticos que señalan personas, lugares o momentos respecto al hablante"
          },
          {
            "es": "el adverbio de proximidad",
            "en": "la palabra que indica cercanía espacial o temporal respecto a un punto de referencia"
          },
          {
            "es": "la interjección",
            "en": "la palabra o expresión breve que manifiesta una emoción o un estado de ánimo"
          },
          {
            "es": "la ambigüedad enunciativa",
            "en": "falta de claridad sobre quién es la voz que habla en un texto"
          },
          {
            "es": "el reproche interno",
            "en": "el juicio negativo que un personaje se dirige a sí mismo en su pensamiento"
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "matching",
        "instructions": "Relaciona cada tipo de discurso reportado con su característica principal.",
        "pairs": [
          {
            "left": "estilo directo",
            "right": "reproduce literalmente las palabras del personaje, con comillas y persona gramatical original"
          },
          {
            "left": "estilo indirecto tradicional",
            "right": "subordina las palabras a un verbo introductor y las adapta a la tercera persona"
          },
          {
            "left": "estilo indirecto libre",
            "right": "prescinde del verbo introductor pero conserva la correlación temporal del relato"
          },
          {
            "left": "monólogo interior",
            "right": "representa el flujo de pensamiento de forma directa e ininterrumpida"
          }
        ],
        "explanation": "Cada forma de discurso reportado combina de manera distinta la fidelidad a la voz del personaje y la mediación del narrador."
      }
    ]
  },
  {
    "slug": "free-indirect-style-part-2-3",
    "level": "C1",
    "number": 39,
    "title": "Estilo Indirecto Libre y Narración Literaria (Parte 2 de 2), Part 3 of 3",
    "summary": "Una exploración del estilo indirecto libre como recurso narrativo que funde la voz del narrador con la conciencia de un personaje, sin verbos introductores ni marcas tipográficas.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "Vocabulario: la narración y el estilo indirecto libre (cont'd)",
        "body": [],
        "examples": [
          {
            "es": "la hibridez",
            "en": "la combinación de elementos de distinta naturaleza dentro de una misma estructura"
          },
          {
            "es": "la distancia narrativa",
            "en": "el grado de cercanía o lejanía entre el narrador y los hechos que relata"
          },
          {
            "es": "la viveza expresiva",
            "en": "la fuerza y el dinamismo con que se transmite una idea o una emoción"
          },
          {
            "es": "la frialdad distanciadora",
            "en": "el efecto de objetividad y desapego que produce cierto tipo de narración"
          },
          {
            "es": "la novela de conciencia",
            "en": "el género narrativo centrado en representar el flujo mental de sus personajes"
          },
          {
            "es": "la prosa",
            "en": "la forma de expresión escrita que no sigue las reglas métricas del verso"
          },
          {
            "es": "el marco narrativo",
            "en": "el conjunto de circunstancias temporales y espaciales que enmarcan un relato"
          },
          {
            "es": "la retrospección",
            "en": "la mirada hacia hechos ya ocurridos desde un punto posterior en el tiempo"
          },
          {
            "es": "filtrarse",
            "en": "introducirse de manera sutil o gradual en un espacio o discurso ajeno"
          },
          {
            "es": "el ángulo narrativo",
            "en": "perspectiva desde la cual se presentan los hechos de una historia"
          },
          {
            "es": "el punto de inflexión narrativo",
            "en": "el momento en que la trama de un relato cambia de dirección de forma decisiva"
          },
          {
            "es": "la voz narrativa",
            "en": "el tono y la actitud particular con que un narrador cuenta los hechos"
          },
          {
            "es": "el pacto narrativo",
            "en": "acuerdo implícito entre autor y lector sobre las reglas de una historia"
          },
          {
            "es": "la técnica literaria",
            "en": "el procedimiento formal empleado deliberadamente para lograr un efecto artístico"
          },
          {
            "es": "el lector implícito",
            "en": "la figura hipotética a quien el texto parece dirigirse"
          },
          {
            "es": "la inmediatez psicológica",
            "en": "la sensación de acceso directo y sin mediación a la mente de un personaje"
          },
          {
            "es": "la reconstrucción interpretativa",
            "en": "el proceso mental mediante el cual el lector infiere un sentido no explícito"
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "¿Por qué se dice que el estilo indirecto libre logra un efecto de inmediatez psicológica particular?",
        "options": [
          "Porque siempre se narra en primera persona.",
          "Porque combina la viveza expresiva del discurso directo con la fluidez de la narración en tercera persona, sin interrupciones tipográficas.",
          "Porque elimina por completo los tiempos verbales del pasado.",
          "Porque exige el uso constante de verbos introductores."
        ],
        "correctIndex": 1,
        "explanation": "Al fundir la voz del narrador con la del personaje sin marcas explícitas, el estilo indirecto libre da acceso directo a la interioridad del personaje sin las interrupciones propias de otras formas de discurso reportado."
      }
    ]
  },
  {
    "slug": "free-indirect-style-part-2-mastery-check",
    "level": "C1",
    "number": 40,
    "title": "Prueba de Dominio: Estilo Indirecto Libre y Narración Literaria (Parte 2)",
    "summary": "Una prueba centrada en la hibridez del estilo indirecto libre frente al estilo directo y al indirecto tradicional, y en el vocabulario técnico necesario para analizar con precisión un fragmento narrativo.",
    "duration": "10 min",
    "sections": [],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "Pensamiento original de Mateo: «No voy a soportar esto ni un día más». ¿Cuál de las siguientes versiones corresponde al estilo indirecto libre?",
        "options": [
          "Mateo pensó que no iba a soportar esa situación ni un día más.",
          "«No voy a soportar esto ni un día más», pensó Mateo.",
          "No iba a soportar esa situación ni un día más; se acabó, hasta aquí había llegado.",
          "Mateo llevaba semanas soportando una situación muy difícil."
        ],
        "correctIndex": 2,
        "explanation": "La tercera versión funde la voz narrativa con el pensamiento de Mateo, sin verbo introductor ni comillas, y conserva la energía expresiva de la exclamación interna «se acabó, hasta aquí había llegado»; las demás corresponden al indirecto tradicional, al directo y a una narración meramente resumida."
      },
      {
        "type": "fill-blank",
        "prompt": "Convierte la cita original en estilo indirecto libre, aplicando el desplazamiento temporal correspondiente.",
        "sentence": "Cita original: «Ya no aguanto esta situación». En el relato: Ya no ___ (aguantar) esa situación, se dijo con los puños apretados.",
        "answer": "aguantaba",
        "hint": "El presente de la conciencia del personaje se convierte en pretérito imperfecto narrativo.",
        "explanation": "El presente original del pensamiento («ya no aguanto») se desplaza al pretérito imperfecto dentro del marco narrativo en pasado, conservando además el gesto físico —los puños apretados— que refuerza la intensidad emocional del momento."
      },
      {
        "type": "multiple-choice",
        "question": "¿Qué combina exactamente la hibridez del estilo indirecto libre, según lo estudiado?",
        "options": [
          "La primera persona gramatical del estilo directo con los signos de puntuación del estilo indirecto.",
          "La tercera persona y la correlación temporal propias del estilo indirecto con el tono y la energía expresiva propios del estilo directo.",
          "El vocabulario técnico del ensayo académico con la sintaxis de la conversación cotidiana.",
          "Los tiempos verbales del futuro con los del pretérito perfecto simple."
        ],
        "correctIndex": 1,
        "explanation": "El estilo indirecto libre adopta la tercera persona y la correlación temporal del estilo indirecto, pero prescinde del verbo introductor y conserva buena parte del tono y la energía expresiva del estilo directo; de esta hibridez surge su efecto característico de inmediatez psicológica."
      },
      {
        "type": "multi-select",
        "question": "¿Cuáles de los siguientes fragmentos conservan la viveza expresiva característica del estilo directo, a pesar de estar narrados en tercera persona?",
        "options": [
          "Basta ya de mentiras, no pensaba escuchar ni una excusa más.",
          "El comité se reunió durante tres horas para discutir el presupuesto anual.",
          "¿Es que nadie iba a decir la verdad de una vez por todas?",
          "La empresa registró un crecimiento del cinco por ciento el año pasado."
        ],
        "correctIndexes": [
          0,
          2
        ],
        "explanation": "El primer fragmento conserva la energía coloquial de un reproche directo («basta ya de mentiras») y el tercero incluye una interrogación retórica de fuerte carga emocional; ambos son propios de la viveza expresiva del estilo indirecto libre, ausente en las dos oraciones puramente informativas."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras para transformar en estilo indirecto libre el pensamiento de un personaje que espera noticias.",
        "words": [
          "por",
          "qué",
          "tardaba",
          "tanto",
          "esa",
          "llamada"
        ],
        "translation": "Why was that call taking so long?",
        "explanation": "La interrogación retórica se integra directamente en la narración, sin verbo introductor ni comillas, como pensamiento filtrado del personaje mientras espera."
      },
      {
        "type": "matching",
        "instructions": "Relaciona cada término técnico con su definición precisa.",
        "pairs": [
          {
            "left": "la hibridez",
            "right": "la combinación de elementos de distinta naturaleza dentro de una misma estructura"
          },
          {
            "left": "la inmediatez psicológica",
            "right": "la sensación de acceso directo y sin mediación a la mente de un personaje"
          },
          {
            "left": "el verbo introductor",
            "right": "el verbo que anuncia o encabeza una cita o un pensamiento reportado"
          },
          {
            "left": "la correlación temporal",
            "right": "el ajuste sistemático de los tiempos verbales según el marco narrativo"
          },
          {
            "left": "la marca tipográfica",
            "right": "el signo gráfico, como las comillas, que señala una cita textual"
          }
        ],
        "explanation": "Dominar este vocabulario técnico permite analizar con precisión cómo un fragmento narrativo funde o distingue la voz del narrador y la del personaje."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Traduce el fragmento aplicando el desplazamiento temporal propio del estilo indirecto libre.",
        "source": "Elena stared at the phone. Why hadn't he called yet? Maybe he never would.",
        "answer": "Elena se quedó mirando el teléfono. ¿Por qué no había llamado todavía? Tal vez nunca lo haría.",
        "altAnswers": [
          "Elena miró fijamente el teléfono. ¿Por qué todavía no había llamado? Quizá jamás lo haría."
        ],
        "explanation": "El futuro de la conciencia del personaje («maybe he never will») se desplaza al condicional narrativo («tal vez nunca lo haría»), mientras que la interrogación retórica se integra sin verbo introductor, fundiendo la voz narrativa con la angustia de Elena."
      },
      {
        "type": "translate",
        "direction": "es-en",
        "prompt": "Traduce al inglés reconociendo la fusión de voces propia del estilo indirecto libre.",
        "source": "Vaya tontería haber confiado en sus promesas; ahora ya era demasiado tarde para reclamar nada.",
        "answer": "What a foolish thing it had been to trust his promises; now it was too late to demand anything.",
        "altAnswers": [
          "How foolish it had been to believe his promises; it was too late now to ask for anything."
        ],
        "explanation": "La expresión coloquial «vaya tontería» y el adverbio de proximidad «ahora» delatan la voz subjetiva del personaje filtrada en la narración, un matiz que la traducción debe preservar con un tono igualmente coloquial en inglés."
      },
      {
        "type": "multiple-choice",
        "question": "¿Qué se entiende por «distancia narrativa» en el análisis del estilo indirecto libre?",
        "options": [
          "El número de páginas que separan dos escenas dentro de una novela.",
          "El grado de cercanía o lejanía entre el narrador y los hechos o la conciencia que relata.",
          "La extensión cronológica total que abarca la trama de un relato.",
          "El espacio físico que recorre un personaje a lo largo de la historia."
        ],
        "correctIndex": 1,
        "explanation": "La distancia narrativa mide la cercanía o la lejanía entre el narrador y lo que relata; el estilo indirecto libre reduce deliberadamente esa distancia respecto de la conciencia del personaje, sin eliminarla del todo como haría el monólogo interior puro."
      },
      {
        "type": "fill-blank",
        "prompt": "Convierte la cita original en estilo indirecto libre, aplicando el desplazamiento temporal correspondiente.",
        "sentence": "Cita original: «Ya no lo quiero como antes». En el relato: Ya no lo ___ (querer) como antes, se decía sin demasiada tristeza.",
        "answer": "quería",
        "hint": "El presente original se convierte en pretérito imperfecto dentro del marco narrativo en pasado.",
        "explanation": "El presente de la conciencia del personaje se transforma en pretérito imperfecto narrativo, siguiendo la misma lógica de correlación temporal que rige cualquier forma de discurso reportado en un relato en pasado."
      },
      {
        "type": "multiple-choice",
        "question": "¿Cuál de las siguientes oraciones incorpora una expresión coloquial que rompe el tono neutro de un narrador objetivo, delatando así la subjetividad de un personaje?",
        "options": [
          "El tren partió de la estación central a las ocho de la mañana.",
          "Para colmo, ahora también se había quedado sin batería el teléfono.",
          "La reunión del consejo directivo se prolongó durante dos horas.",
          "El edificio fue construido a finales del siglo diecinueve."
        ],
        "correctIndex": 1,
        "explanation": "La expresión coloquial «para colmo» introduce un matiz de exasperación propio de la voz interna de un personaje, ajeno por completo al tono neutro y objetivo que caracteriza a las demás oraciones."
      },
      {
        "type": "multi-select",
        "question": "¿Cuáles de las siguientes afirmaciones describen correctamente una diferencia entre el estilo indirecto libre y el estilo indirecto tradicional?",
        "options": [
          "El estilo indirecto libre prescinde del verbo introductor; el tradicional lo requiere siempre.",
          "El estilo indirecto libre nunca respeta la correlación temporal del relato, a diferencia del tradicional.",
          "El estilo indirecto libre conserva el tono y la energía expresiva del personaje con mayor fidelidad que el tradicional.",
          "El estilo indirecto tradicional jamás puede narrarse en tercera persona."
        ],
        "correctIndexes": [
          0,
          2
        ],
        "explanation": "La ausencia del verbo introductor y la mayor fidelidad al tono expresivo del personaje son las diferencias clave; el estilo indirecto libre sí respeta la correlación temporal del relato, y el indirecto tradicional se narra habitualmente en tercera persona, igual que el libre."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras para transformar en estilo indirecto libre una queja coloquial del personaje.",
        "words": [
          "para",
          "colmo",
          "ahora",
          "también",
          "se",
          "había",
          "quedado",
          "sin",
          "batería"
        ],
        "translation": "To top it all off, now the phone had also run out of battery.",
        "explanation": "La expresión coloquial «para colmo» se integra sin verbo introductor ni comillas dentro de la narración, delatando la exasperación del personaje ante una nueva contrariedad."
      },
      {
        "type": "fill-blank",
        "prompt": "Convierte la cita original en estilo indirecto libre, aplicando el desplazamiento temporal correspondiente.",
        "sentence": "Cita original: «Nunca lo lograré sin ayuda». En el relato: Nunca lo ___ (lograr) sin ayuda, por más que se esforzara.",
        "answer": "lograría",
        "hint": "El futuro del pensamiento original se desplaza hacia el condicional narrativo.",
        "explanation": "El futuro de la conciencia del personaje se transforma en condicional dentro del marco narrativo en pasado, el mismo desplazamiento sistemático que rige todo el estilo indirecto libre."
      },
      {
        "type": "multiple-choice",
        "question": "¿Por qué la llamada novela de conciencia recurre con tanta frecuencia al estilo indirecto libre?",
        "options": [
          "Porque este estilo simplifica la gramática del relato y acorta las oraciones.",
          "Porque permite representar el flujo mental de los personajes con inmediatez psicológica, sin renunciar a la organización que aporta la tercera persona narrativa.",
          "Porque elimina por completo la necesidad de una trama argumental coherente.",
          "Porque solo puede emplearse en textos escritos en primera persona."
        ],
        "correctIndex": 1,
        "explanation": "La novela de conciencia busca representar con fidelidad el mundo interno de sus personajes; el estilo indirecto libre le permite lograr esa inmediatez psicológica sin renunciar a la distancia y el orden que aporta la voz narrativa en tercera persona."
      },
      {
        "type": "multi-select",
        "question": "¿Cuáles de los siguientes fragmentos contienen un adverbio de proximidad que sitúa la perspectiva desde el punto de vista del personaje?",
        "options": [
          "Aquí, precisamente en ese banco del parque, se lo había dicho todo.",
          "El puente fue inaugurado hace más de cien años.",
          "Ahora comprendía por fin el verdadero motivo de su silencio.",
          "El informe anual se publica cada mes de enero."
        ],
        "correctIndexes": [
          0,
          2
        ],
        "explanation": "«Aquí» y «ahora» sitúan la perspectiva espacial y temporal desde el punto de vista inmediato del personaje, fusionando su conciencia con la voz narrativa; las otras dos oraciones son datos objetivos sin ningún indicio de subjetividad."
      }
    ]
  },
  {
    "slug": "por-para-precision-1",
    "level": "C1",
    "number": 41,
    "title": "Por y Para: Precisión Profesional, Part 1 of 6",
    "summary": "Un análisis de los usos más ambiguos de por y para en contextos laborales, contractuales y legales, donde la elección de una u otra preposición cambia el sentido real del mensaje.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Trabajar por alguien frente a trabajar para alguien",
        "body": [
          "La oposición entre «trabajar por alguien» y «trabajar para alguien» condensa, en un solo par mínimo, toda la lógica que distingue «por» de «para»: «trabajar por alguien» significa sustituir a esa persona, ocupar su lugar temporalmente, o bien actuar motivado por ella, en su beneficio o en su nombre. «Trabajar para alguien», en cambio, describe una relación laboral estable, de dependencia o de destinatario: la empresa, el jefe o el cliente para quien uno presta sus servicios de forma habitual.",
          "Esta distinción se extiende a otros pares similares dentro del ámbito profesional: «firmar por alguien» implica sustituir su firma, mientras que «firmar para alguien» resultaría extraño salvo que se especifique un destinatario concreto del documento firmado. Un hablante que domina este matiz evita ambigüedades frecuentes en contratos, correos corporativos e informes, donde confundir «por» y «para» puede alterar sustancialmente el sentido de una cláusula."
        ],
        "examples": [
          {
            "es": "Hoy trabajo por mi compañera, que está de baja.",
            "en": "Sustitución temporal: se ocupa el puesto de otra persona."
          },
          {
            "es": "Llevo cinco años trabajando para esta empresa.",
            "en": "Relación laboral estable de dependencia."
          },
          {
            "es": "Firmó el contrato por su jefe, que estaba de viaje.",
            "en": "Actuación en representación de otra persona ausente."
          },
          {
            "es": "Preparó el informe para el director general.",
            "en": "El director general es el destinatario del informe."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Qué diferencia existe entre «trabajo por mi hermana» y «trabajo para mi hermana»?",
            "options": [
              "Ninguna; ambas expresiones significan exactamente lo mismo.",
              "La primera indica sustitución temporal; la segunda, una relación laboral en la que la hermana es la empleadora.",
              "La primera es gramaticalmente incorrecta.",
              "La segunda solo se usa en contextos familiares informales."
            ],
            "correctIndex": 1,
            "explanation": "«Trabajar por» implica sustituir a alguien o actuar en su beneficio; «trabajar para» describe una relación de dependencia laboral con esa persona como empleadora."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "¿Qué significa «firmó el documento por su jefe»?",
        "options": [
          "Que firmó el documento a favor de su jefe como destinatario.",
          "Que firmó el documento en representación de su jefe, quien no pudo hacerlo.",
          "Que firmó el documento después de su jefe.",
          "Que su jefe le pidió que no firmara el documento."
        ],
        "correctIndex": 1,
        "explanation": "«Firmar por alguien» indica sustitución o representación: la persona firma en lugar de otra que no puede hacerlo."
      }
    ]
  },
  {
    "slug": "por-para-precision-2",
    "level": "C1",
    "number": 42,
    "title": "Por y Para: Precisión Profesional, Part 2 of 6",
    "summary": "Un análisis de los usos más ambiguos de por y para en contextos laborales, contractuales y legales, donde la elección de una u otra preposición cambia el sentido real del mensaje.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Por y para en contextos legales y empresariales: causa y finalidad",
        "body": [
          "En el ámbito legal y empresarial, la distinción entre «por» de causa y «para» de finalidad adquiere una precisión casi técnica: «por» introduce siempre la razón, el motivo o el antecedente que explica un hecho ya ocurrido o una obligación ya contraída, mientras que «para» introduce el propósito, el objetivo o el destino hacia el cual se orienta una acción futura o en curso.",
          "Esta oposición retrospectiva/prospectiva resulta especialmente relevante en la redacción de contratos y documentos legales, donde una cláusula introducida por «por» describe una condición o un motivo ya dado, mientras que una introducida por «para» describe la función o el objetivo que dicha cláusula persigue. Confundir ambas preposiciones en este contexto puede alterar si una disposición se interpreta como justificación de algo pasado o como propósito de algo futuro, una diferencia con consecuencias jurídicas reales."
        ],
        "examples": [
          {
            "es": "Se le sancionó por incumplir el contrato.",
            "en": "«Por» introduce el motivo o la causa de la sanción, ya ocurrida."
          },
          {
            "es": "Se redactó una cláusula para evitar futuros incumplimientos.",
            "en": "«Para» introduce el propósito u objetivo de la cláusula."
          },
          {
            "es": "La empresa fue multada por no respetar la normativa vigente.",
            "en": "Causa retrospectiva de una sanción ya impuesta."
          },
          {
            "es": "Se estableció un comité para supervisar el cumplimiento de la normativa.",
            "en": "Finalidad prospectiva del comité creado."
          }
        ],
        "checkpoint": [
          {
            "type": "multi-select",
            "question": "¿Cuáles de las siguientes oraciones emplean «por» o «para» con valor de causa retrospectiva, no de finalidad?",
            "options": [
              "Se le despidió por negligencia grave.",
              "Se contrató a un auditor para revisar las cuentas.",
              "El proyecto se canceló por falta de presupuesto.",
              "Se firmó el acuerdo para garantizar la confidencialidad."
            ],
            "correctIndexes": [
              0,
              2
            ],
            "explanation": "Las oraciones marcadas emplean «por» para introducir la causa o el motivo de un hecho ya ocurrido; las otras dos emplean «para» con valor de finalidad prospectiva."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "fill-blank",
        "prompt": "Completa con la preposición que exprese un plazo límite.",
        "sentence": "Necesitamos la propuesta final ___ el próximo lunes.",
        "answer": "para",
        "explanation": "«Para» marca un plazo límite, una fecha tope hacia la cual se orienta la entrega de la propuesta.",
        "hint": "Se trata de una fecha tope, no de una duración aproximada."
      }
    ]
  },
  {
    "slug": "por-para-precision-3",
    "level": "C1",
    "number": 43,
    "title": "Por y Para: Precisión Profesional, Part 3 of 6",
    "summary": "Un análisis de los usos más ambiguos de por y para en contextos laborales, contractuales y legales, donde la elección de una u otra preposición cambia el sentido real del mensaje.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "Por y para en expresiones de plazo y duración",
        "body": [
          "En expresiones temporales, «para» señala un plazo límite, una fecha tope hacia la cual se orienta una acción o un compromiso: «el informe debe estar listo para el viernes» establece el viernes como el límite máximo, sin que ello implique que el informe deba entregarse precisamente ese día. «Por», en cambio, indica una duración aproximada o un periodo dentro del cual transcurre una acción, sin marcar un límite preciso: «estaré fuera por unos días» comunica una estimación de tiempo, no una fecha exacta de regreso.",
          "Esta distinción resulta crítica en la comunicación profesional, donde confundir un plazo límite con una duración aproximada puede generar malentendidos sobre compromisos y entregas. Usar «por» en lugar de «para» ante una fecha concreta tiende a percibirse como menos comprometido que fijar de manera inequívoca una fecha límite mediante «para»."
        ],
        "examples": [
          {
            "es": "El informe debe estar listo para el viernes.",
            "en": "«Para» marca un plazo límite, una fecha tope concreta."
          },
          {
            "es": "Estaré fuera de la oficina por unos días.",
            "en": "«Por» indica una duración aproximada, sin fecha exacta de regreso."
          },
          {
            "es": "Necesitamos la propuesta para el lunes por la mañana.",
            "en": "Plazo límite preciso hacia el cual se orienta la entrega."
          },
          {
            "es": "El proyecto estuvo detenido por varias semanas.",
            "en": "Duración aproximada de un periodo, sin límite temporal marcado."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa con la preposición que exprese un plazo límite preciso.",
            "sentence": "El contrato debe firmarse ___ el próximo miércoles a más tardar.",
            "answer": "para",
            "explanation": "«Para» marca aquí un plazo límite concreto, una fecha tope hacia la cual se orienta la firma del contrato.",
            "hint": "Se trata de una fecha tope, no de una duración aproximada."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multi-select",
        "question": "¿Cuáles de las siguientes oraciones emplean «por» con valor de causa retrospectiva?",
        "options": [
          "Se le multó por conducir sin licencia.",
          "Se aprobó el presupuesto para financiar el proyecto.",
          "El vuelo se canceló por las condiciones climáticas.",
          "Se contrató a un experto para asesorar al equipo."
        ],
        "correctIndexes": [
          0,
          2
        ],
        "explanation": "Las oraciones marcadas emplean «por» para introducir la causa de un hecho ya ocurrido; las otras dos emplean «para» con valor de finalidad."
      }
    ]
  },
  {
    "slug": "por-para-precision-4",
    "level": "C1",
    "number": 44,
    "title": "Por y Para: Precisión Profesional, Part 4 of 6",
    "summary": "Un análisis de los usos más ambiguos de por y para en contextos laborales, contractuales y legales, donde la elección de una u otra preposición cambia el sentido real del mensaje.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "Excepciones idiomáticas fijas con por y para",
        "body": [
          "Existen expresiones fijas con «por» y «para» cuyo significado no se deriva de forma transparente de las reglas generales de causa y finalidad, sino que se ha fijado por convención y debe aprenderse como bloque. «Estar por» + infinitivo indica que una acción está a punto de suceder o que todavía no se ha realizado, con un matiz de inminencia o de pendiente. «Estar para» + infinitivo, en cambio, se acerca más a la idea de estar en disposición o en el momento adecuado para algo, aunque en algunas variedades regionales ambas expresiones se solapan considerablemente.",
          "Otras fórmulas fijas, como «por si acaso», «para colmo» o «por lo pronto», forman parte del repertorio idiomático que un hablante avanzado debe dominar sin analizarlas composicionalmente, puesto que su sentido excede la suma de sus partes."
        ],
        "examples": [
          {
            "es": "La decisión todavía está por tomarse.",
            "en": "Indica que la acción aún no se ha realizado, con matiz de inminencia o pendencia."
          },
          {
            "es": "El tren está para salir en cualquier momento.",
            "en": "Indica disposición inmediata para que ocurra la acción."
          },
          {
            "es": "Llevo un paraguas por si acaso llueve más tarde.",
            "en": "Fórmula fija para prevenir una eventualidad."
          },
          {
            "es": "Perdimos el vuelo y, para colmo, empezó a llover.",
            "en": "Fórmula fija que introduce un agravante final e irónico."
          },
          {
            "es": "Por lo pronto, seguiremos con el plan original.",
            "en": "Fórmula fija que señala una acción provisional mientras se aclara la situación."
          }
        ],
        "checkpoint": [
          {
            "type": "matching",
            "instructions": "Relaciona cada fórmula fija con su significado idiomático.",
            "pairs": [
              {
                "left": "estar por + infinitivo",
                "right": "la acción todavía no se ha realizado, con matiz de inminencia"
              },
              {
                "left": "por si acaso",
                "right": "para prevenir una eventualidad posible"
              },
              {
                "left": "para colmo",
                "right": "para introducir un agravante final e irónico"
              },
              {
                "left": "por lo pronto",
                "right": "para señalar una acción provisional mientras se aclara algo mayor"
              }
            ],
            "explanation": "Estas fórmulas fijas con «por» y «para» tienen un significado convencionalizado que no se deduce composicionalmente de sus partes."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "word-order",
        "prompt": "Ordena las palabras para formar una oración con «para» de finalidad en un contexto profesional.",
        "words": [
          "se",
          "creó",
          "un",
          "comité",
          "para",
          "supervisar",
          "el",
          "cumplimiento"
        ],
        "explanation": "«Para supervisar el cumplimiento» expresa el propósito por el cual se creó el comité."
      }
    ]
  },
  {
    "slug": "por-para-precision-5",
    "level": "C1",
    "number": 45,
    "title": "Por y Para: Precisión Profesional, Part 5 of 6",
    "summary": "Un análisis de los usos más ambiguos de por y para en contextos laborales, contractuales y legales, donde la elección de una u otra preposición cambia el sentido real del mensaje.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "En la práctica",
        "body": [
          "Directora: ¿Para cuándo tendremos lista la propuesta final?",
          "Analista: Para el jueves, si no surge ningún imprevisto por el camino.",
          "Directora: Perfecto. Y el informe de gastos, ¿ya está por terminarse?",
          "Analista: Está casi listo; lo firmé yo por Marta, que sigue de baja.",
          "Directora: Entendido. Envíaselo al cliente para que lo revise antes del viernes.",
          "Analista: Por si acaso, incluiré también un resumen ejecutivo con los datos principales.",
          "Directora: Buena idea. Y, para colmo de males, mañana tenemos auditoría externa.",
          "Analista: Entonces trabajaré por la tarde en eso también, para tenerlo todo listo a tiempo."
        ]
      },
      {
        "heading": "Vocabulario: por y para en contextos profesionales",
        "body": [
          "35 palabras relacionadas con por y para en contextos profesionales."
        ],
        "examples": [
          {
            "es": "la sustitución",
            "en": "el reemplazo temporal de una persona en sus funciones o tareas"
          },
          {
            "es": "la representación",
            "en": "la actuación en nombre de otra persona o entidad"
          },
          {
            "es": "la dependencia laboral",
            "en": "la relación de subordinación de un empleado respecto a su empleador"
          },
          {
            "es": "el receptor del documento",
            "en": "la persona o entidad a quien se dirige formalmente un documento"
          },
          {
            "es": "la cláusula",
            "en": "la disposición particular dentro de un contrato o un documento legal"
          },
          {
            "es": "el incumplimiento",
            "en": "la falta de cumplimiento de una obligación pactada"
          },
          {
            "es": "la sanción",
            "en": "la penalización impuesta como consecuencia de una falta o infracción"
          },
          {
            "es": "el marco regulatorio",
            "en": "conjunto de normas que rigen un ámbito determinado"
          },
          {
            "es": "la finalidad prospectiva",
            "en": "el propósito orientado hacia el futuro que persigue una acción"
          },
          {
            "es": "la causa retrospectiva",
            "en": "el motivo que explica un hecho ya ocurrido"
          },
          {
            "es": "el plazo límite",
            "en": "la fecha tope hasta la cual debe completarse una acción"
          },
          {
            "es": "la duración aproximada",
            "en": "el periodo estimado, sin precisión exacta, en que transcurre algo"
          },
          {
            "es": "el vínculo contractual",
            "en": "relación de compromiso que se establece mediante un contrato"
          },
          {
            "es": "la inminencia",
            "en": "la cualidad de estar a punto de ocurrir"
          },
          {
            "es": "la eventualidad",
            "en": "el suceso posible pero incierto que podría llegar a ocurrir"
          },
          {
            "es": "el agravante",
            "en": "la circunstancia que empeora o intensifica una situación ya negativa"
          },
          {
            "es": "provisional",
            "en": "que tiene carácter temporal, en espera de una solución definitiva"
          },
          {
            "es": "el auditor",
            "en": "la persona encargada de revisar y verificar la exactitud de unas cuentas"
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "matching",
        "instructions": "Relaciona cada fórmula fija con su significado idiomático.",
        "pairs": [
          {
            "left": "estar por + infinitivo",
            "right": "la acción todavía no se ha realizado, con matiz de inminencia"
          },
          {
            "left": "por si acaso",
            "right": "para prevenir una eventualidad posible"
          },
          {
            "left": "para colmo",
            "right": "para introducir un agravante final e irónico"
          },
          {
            "left": "por lo pronto",
            "right": "para señalar una acción provisional mientras se aclara algo mayor"
          }
        ],
        "explanation": "Estas fórmulas fijas con «por» y «para» tienen un significado convencionalizado que no se deduce composicionalmente de sus partes."
      }
    ]
  },
  {
    "slug": "por-para-precision-6",
    "level": "C1",
    "number": 46,
    "title": "Por y Para: Precisión Profesional, Part 6 of 6",
    "summary": "Un análisis de los usos más ambiguos de por y para en contextos laborales, contractuales y legales, donde la elección de una u otra preposición cambia el sentido real del mensaje.",
    "duration": "6 min",
    "sections": [
      {
        "heading": "Vocabulario: por y para en contextos profesionales (cont'd)",
        "body": [],
        "examples": [
          {
            "es": "la confidencialidad",
            "en": "la obligación de mantener en secreto cierta información"
          },
          {
            "es": "el resumen ejecutivo",
            "en": "el documento breve que sintetiza los puntos clave de un informe extenso"
          },
          {
            "es": "el imprevisto",
            "en": "el suceso inesperado que altera un plan establecido"
          },
          {
            "es": "la disposición contractual",
            "en": "la condición o regla específica establecida dentro de un contrato"
          },
          {
            "es": "la ambigüedad preposicional",
            "en": "la falta de claridad que surge al elegir mal entre dos preposiciones similares"
          },
          {
            "es": "el matiz jurídico",
            "en": "la sutileza de significado con consecuencias legales relevantes"
          },
          {
            "es": "la redacción contractual",
            "en": "el proceso de escribir con precisión las cláusulas de un contrato"
          },
          {
            "es": "la interpretación legal",
            "en": "el proceso de determinar el significado y el alcance de una norma o cláusula"
          },
          {
            "es": "la cláusula resolutoria",
            "en": "disposición que permite anular un contrato bajo ciertas condiciones"
          },
          {
            "es": "la baja laboral",
            "en": "el periodo en que un empleado se ausenta de su puesto por motivos de salud"
          },
          {
            "es": "el turno",
            "en": "el periodo de tiempo asignado a una persona para realizar una tarea determinada"
          },
          {
            "es": "la entrega",
            "en": "el acto de proporcionar o hacer llegar algo a su destinatario"
          },
          {
            "es": "la fecha tope",
            "en": "el último día posible para completar una acción o cumplir un compromiso"
          },
          {
            "es": "la ambigüedad",
            "en": "cualidad de lo que admite más de una interpretación"
          },
          {
            "es": "la convencionalización",
            "en": "el proceso por el cual una expresión fija su significado por uso repetido"
          },
          {
            "es": "composicional",
            "en": "que se puede deducir a partir de la suma del significado de sus partes"
          },
          {
            "es": "la jerarquía laboral",
            "en": "el orden de niveles de autoridad dentro de una organización"
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "En un contrato, ¿qué diferencia hay entre una cláusula introducida por «por incumplimiento» y otra introducida por «para evitar el incumplimiento»?",
        "options": [
          "Ninguna; ambas expresiones son intercambiables en un contrato.",
          "La primera describe la causa de una sanción ya contraída; la segunda, el propósito de una medida preventiva.",
          "La primera solo se usa en contratos verbales.",
          "La segunda es gramaticalmente incorrecta en textos legales."
        ],
        "correctIndex": 1,
        "explanation": "«Por incumplimiento» introduce la causa retrospectiva de una sanción ya aplicada; «para evitar el incumplimiento» introduce la finalidad prospectiva de una cláusula preventiva."
      }
    ]
  },
  {
    "slug": "ser-estar-haber-limits-part-1-1",
    "level": "C1",
    "number": 47,
    "title": "Ser, Estar y Haber: Casos Límite (Parte 1 de 2), Part 1 of 3",
    "summary": "Un recorrido por los casos genuinamente ambiguos de ser, estar y haber, donde la elección no depende de la permanencia o la transitoriedad, sino de matices ontológicos, evaluativos y discursivos más finos.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Ser y estar con la ubicación de eventos frente a objetos",
        "body": [
          "Uno de los contrastes más finos entre «ser» y «estar» surge con los sustantivos que designan eventos: cuando se habla de la ubicación de un suceso —una reunión, una boda, un concierto, un examen— el español exige «ser», no «estar»: «la reunión es en la sala de juntas» localiza el evento en el espacio y el tiempo en que tiene lugar. En cambio, cuando el sustantivo designa un objeto físico o un lugar concreto, la ubicación se expresa con «estar».",
          "Este contraste no depende del carácter permanente o transitorio de la ubicación, sino de una distinción ontológica más profunda: los eventos no «están» en un lugar, sino que «suceden» en él, y el español codifica esa diferencia conceptual mediante «ser». Un hablante que dice «la fiesta está en mi casa» en lugar de «la fiesta es en mi casa» comete uno de los errores más reveladores de un dominio incompleto de esta distinción, porque confunde la naturaleza eventiva del sustantivo con la naturaleza física de un objeto o un lugar."
        ],
        "examples": [
          {
            "es": "La reunión es en la sala de juntas.",
            "en": "Se localiza un evento, no un objeto físico; se usa «ser»."
          },
          {
            "es": "La sala de juntas está al fondo del pasillo.",
            "en": "Se localiza un objeto físico concreto; se usa «estar»."
          },
          {
            "es": "El examen es en el aula doscientos tres.",
            "en": "Localización de un evento académico mediante «ser»."
          },
          {
            "es": "El aula doscientos tres está en el segundo piso.",
            "en": "Localización de un espacio físico mediante «estar»."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Por qué se dice «la boda es en el jardín» y no «la boda está en el jardín»?",
            "options": [
              "Porque «boda» es un sustantivo femenino y exige «ser».",
              "Porque «boda» designa un evento, y los eventos se localizan siempre con «ser», no con «estar».",
              "Porque «jardín» es un lugar exterior y exige siempre «ser».",
              "Ambas formas son igualmente correctas sin ninguna diferencia."
            ],
            "correctIndex": 1,
            "explanation": "Los sustantivos que designan eventos —como «boda», «reunión» o «concierto»— se localizan siempre con «ser», independientemente de si la ubicación es permanente o transitoria."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "¿Cuál es la forma correcta para localizar un concierto que tendrá lugar en el parque central?",
        "options": [
          "El concierto está en el parque central.",
          "El concierto es en el parque central.",
          "El concierto hay en el parque central.",
          "El concierto tiene en el parque central."
        ],
        "correctIndex": 1,
        "explanation": "Los sustantivos que designan eventos, como «concierto», se localizan con «ser», no con «estar» ni con «hay»."
      }
    ]
  },
  {
    "slug": "ser-estar-haber-limits-part-1-2",
    "level": "C1",
    "number": 48,
    "title": "Ser, Estar y Haber: Casos Límite (Parte 1 de 2), Part 2 of 3",
    "summary": "Un recorrido por los casos genuinamente ambiguos de ser, estar y haber, donde la elección no depende de la permanencia o la transitoriedad, sino de matices ontológicos, evaluativos y discursivos más finos.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "Estar más adjetivo: lecturas evaluativas más allá de listo",
        "body": [
          "Más allá del contraste clásico entre «ser listo» y «estar listo», existe una familia amplia de adjetivos cuyo significado con «estar» no describe simplemente un estado transitorio, sino que introduce una lectura evaluativa o circunstancial radicalmente distinta de la que aporta «ser». «Estar violento» no significa poseer un carácter agresivo, sino sentirse incómodo o avergonzado en una situación social concreta; «ser violento», en cambio, atribuye una disposición estable hacia la agresividad como rasgo de carácter.",
          "De modo semejante, «estar interesado» describe una atracción o curiosidad puntual hacia algo en un momento dado, mientras que «ser interesado» —con un matiz claramente peyorativo— atribuye a una persona el rasgo estable de actuar movida por el propio beneficio. Estos pares no son variaciones libres de un mismo significado modulado por la permanencia o la transitoriedad, sino verdaderas polisemias léxicas que un hablante avanzado debe memorizar caso por caso, porque no siguen un patrón predecible."
        ],
        "examples": [
          {
            "es": "Se puso muy violento cuando le hicieron esa pregunta.",
            "en": "Estado circunstancial de incomodidad, no rasgo de carácter."
          },
          {
            "es": "Es un hombre violento que resuelve todo a golpes.",
            "en": "Rasgo estable de carácter agresivo."
          },
          {
            "es": "Está muy interesado en el proyecto que le propusiste.",
            "en": "Atracción o curiosidad puntual hacia algo concreto."
          },
          {
            "es": "Es una persona interesada que solo busca su propio beneficio.",
            "en": "Rasgo estable de carácter, con matiz peyorativo."
          }
        ],
        "checkpoint": [
          {
            "type": "multi-select",
            "question": "¿Cuáles de las siguientes oraciones describen un rasgo estable de carácter, y no un estado circunstancial?",
            "options": [
              "Está violento desde que perdió el trabajo.",
              "Es un jefe violento con todos sus empleados.",
              "Es una persona interesada que solo piensa en el dinero.",
              "Está interesada en aprender un nuevo idioma."
            ],
            "correctIndexes": [
              1,
              2
            ],
            "explanation": "«Ser violento» y «ser interesado» atribuyen rasgos estables de carácter; «estar violento» y «estar interesada» describen estados o actitudes circunstanciales y puntuales."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "fill-blank",
        "prompt": "Completa con «hay» o la forma de «estar» que corresponda.",
        "sentence": "___ varios documentos importantes en esa carpeta.",
        "answer": "Hay",
        "explanation": "«Hay» introduce entidades nuevas y no identificadas, en este caso «varios documentos», sin artículo definido.",
        "hint": "La entidad todavía no se ha mencionado ni identificado en el discurso."
      }
    ]
  },
  {
    "slug": "ser-estar-haber-limits-part-1-3",
    "level": "C1",
    "number": 49,
    "title": "Ser, Estar y Haber: Casos Límite (Parte 1 de 2), Part 3 of 3",
    "summary": "Un recorrido por los casos genuinamente ambiguos de ser, estar y haber, donde la elección no depende de la permanencia o la transitoriedad, sino de matices ontológicos, evaluativos y discursivos más finos.",
    "duration": "9 min",
    "sections": [
      {
        "heading": "Haber frente a estar: existencia y localización",
        "body": [
          "«Haber» y «estar» compiten por expresar existencia y localización, pero se reparten el terreno según un criterio gramatical preciso relacionado con la determinación del sustantivo: «hay» introduce entidades nuevas o no identificadas en el discurso, típicamente acompañadas de artículo indefinido o numeral, mientras que «estar» localiza entidades ya identificadas o conocidas por el interlocutor, típicamente acompañadas de artículo definido o de un determinante posesivo o demostrativo.",
          "Esta distinción explica por qué «hay el problema» resulta agramatical: el artículo definido señala que el sustantivo ya está identificado en el discurso, lo cual entra en conflicto directo con la función introductoria de «hay». De igual manera, «está un problema» suena forzado, porque el artículo indefinido presenta la entidad como nueva, incompatible con la función localizadora de «estar», que presupone una entidad ya conocida cuya posición se especifica."
        ],
        "examples": [
          {
            "es": "Hay un problema con el pedido de esta semana.",
            "en": "«Hay» introduce una entidad nueva, con artículo indefinido."
          },
          {
            "es": "El problema está en el envío, no en la fábrica.",
            "en": "«Estar» localiza una entidad ya identificada, con artículo definido."
          },
          {
            "es": "Hay tres sillas libres en la sala de espera.",
            "en": "Introducción de entidades nuevas mediante numeral, sin artículo definido."
          },
          {
            "es": "Las sillas están junto a la ventana.",
            "en": "Localización de entidades ya conocidas, con artículo definido."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa con «hay» o la forma correcta de «estar» según corresponda.",
            "sentence": "___ un mensaje nuevo en tu bandeja de entrada.",
            "answer": "Hay",
            "explanation": "«Hay» introduce una entidad nueva y no identificada, marcada con artículo indefinido.",
            "hint": "La entidad todavía no ha sido mencionada ni identificada en el discurso."
          },
          {
            "type": "multiple-choice",
            "question": "¿Por qué «hay el problema» resulta agramatical en español?",
            "options": [
              "Porque «hay» nunca puede combinarse con sustantivos masculinos.",
              "Porque el artículo definido presupone una entidad ya identificada, incompatible con la función introductoria de «hay».",
              "Porque «problema» exige siempre el verbo «estar».",
              "Porque «hay» solo se usa con sustantivos en plural."
            ],
            "correctIndex": 1,
            "explanation": "«Hay» introduce entidades nuevas o no identificadas; el artículo definido, en cambio, señala que la entidad ya se conoce, lo cual entra en conflicto con esa función introductoria."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multi-select",
        "question": "¿Cuáles de las siguientes oraciones describen un estado circunstancial y no un rasgo estable de carácter?",
        "options": [
          "Está interesada en el nuevo proyecto.",
          "Es una persona muy interesada, siempre calcula su beneficio.",
          "Se puso violento durante la discusión de ayer.",
          "Es un hombre violento, siempre ha sido así."
        ],
        "correctIndexes": [
          0,
          2
        ],
        "explanation": "«Estar interesada» y «estar violento» describen estados puntuales y circunstanciales; las otras dos oraciones, con «ser», atribuyen rasgos estables de carácter."
      }
    ]
  },
  {
    "slug": "ser-estar-haber-limits-part-1-mastery-check",
    "level": "C1",
    "number": 50,
    "title": "Prueba de Dominio: Ser, Estar y Haber (Parte 1)",
    "summary": "Una prueba exigente que evalúa la capacidad de aplicar a casos nuevos y genuinamente ambiguos los contrastes ontológicos y evaluativos entre ser, estar y haber estudiados en la primera parte.",
    "duration": "10 min",
    "sections": [],
    "exercises": [
      {
        "type": "fill-blank",
        "prompt": "Completa localizando correctamente el evento dentro del recinto universitario.",
        "sentence": "La ceremonia de graduación ___ en el paraninfo, aunque la recepción posterior tendrá lugar en los jardines.",
        "answer": "es",
        "hint": "Piensa en la naturaleza eventiva del sustantivo que se está localizando.",
        "explanation": "«Ceremonia» designa un suceso, no un objeto físico; los sustantivos eventivos se localizan siempre con «ser», con independencia de si el lugar es habitual u ocasional."
      },
      {
        "type": "multiple-choice",
        "question": "¿Cuál de las siguientes oraciones localiza correctamente un espacio físico, no un evento?",
        "options": [
          "La vista judicial es en la sala tres del tribunal superior.",
          "La sala tres está al final del pasillo, junto a los ascensores.",
          "El estreno de la obra es en el teatro municipal.",
          "La asamblea de vecinos es en el salón comunal."
        ],
        "correctIndex": 1,
        "explanation": "«Sala tres» es un objeto físico concreto, no un suceso, por lo que su ubicación se expresa con «estar»; las otras tres oraciones localizan eventos («vista judicial», «estreno», «asamblea») y por eso exigen «ser»."
      },
      {
        "type": "multi-select",
        "question": "¿Cuáles de las siguientes oraciones emplean correctamente «ser» o «estar» para localizar lo que describen?",
        "options": [
          "El juicio es en el juzgado de lo penal.",
          "El juzgado de lo penal es en la avenida central.",
          "La manifestación es frente al ayuntamiento.",
          "El ayuntamiento está frente a la plaza mayor."
        ],
        "correctIndexes": [
          0,
          2,
          3
        ],
        "explanation": "«Juicio» y «manifestación» son eventos y exigen «ser»; «ayuntamiento» es un edificio y exige «estar». La segunda oración es incorrecta porque localiza un edificio («juzgado») con «ser» en vez de «estar»."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa con «hay» o la forma correcta de «estar».",
        "sentence": "___ una carta certificada para usted en la recepción del edificio.",
        "answer": "Hay",
        "hint": "La carta todavía no ha sido mencionada ni identificada en el discurso; lleva artículo indefinido.",
        "explanation": "«Hay» introduce una entidad nueva y no identificada («una carta certificada»); si la carta ya hubiera sido mencionada antes, correspondería «está»."
      },
      {
        "type": "multiple-choice",
        "question": "¿Por qué resulta agramatical la oración «está una solución para este problema»?",
        "options": [
          "Porque «solución» es un sustantivo abstracto que nunca admite «estar».",
          "Porque el artículo indefinido presenta la entidad como nueva, función que corresponde a «hay», no a la localizadora de «estar».",
          "Porque «problema» exige siempre el verbo «ser».",
          "Porque esa oración es en realidad perfectamente correcta en el registro culto."
        ],
        "correctIndex": 1,
        "explanation": "«Estar» presupone una entidad ya identificada cuya posición se especifica; el artículo indefinido «una» presenta la entidad como nueva, lo cual es propio de la función introductoria de «hay»."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa con «hay» o la forma correcta de «estar».",
        "sentence": "La solución que buscábamos ___ en el segundo párrafo del informe, no en el primero.",
        "answer": "está",
        "hint": "La entidad ya ha sido identificada mediante la cláusula relativa «que buscábamos».",
        "explanation": "El artículo definido implícito en «la solución que buscábamos» señala una entidad ya conocida por el interlocutor, por lo que corresponde «estar», función localizadora, y no «hay»."
      },
      {
        "type": "multiple-choice",
        "question": "«Ana es muy lista para los negocios; siempre encuentra la manera de salir ganando». ¿Qué matiz aporta «ser lista» en esta oración?",
        "options": [
          "Un estado de preparación inmediata para actuar.",
          "Un rasgo estable de inteligencia o astucia como parte de su carácter.",
          "Una emoción pasajera provocada por una situación concreta.",
          "Una localización física dentro de un espacio determinado."
        ],
        "correctIndex": 1,
        "explanation": "«Ser listo» atribuye un rasgo estable de inteligencia o astucia, del mismo modo que «ser violento» o «ser interesado» atribuyen rasgos de carácter; no describe, como sí haría «estar listo», un estado circunstancial de preparación."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa con la forma correcta de «estar» para expresar un estado de preparación.",
        "sentence": "Todavía no ___ (estar) listos para la presentación; nos faltan diez minutos de ensayo.",
        "answer": "estamos",
        "hint": "Se describe un estado circunstancial, no un rasgo de inteligencia.",
        "explanation": "«Estar listo» describe un estado circunstancial de preparación para una acción inminente, en clara oposición a «ser listo», que atribuye un rasgo estable de inteligencia."
      },
      {
        "type": "multi-select",
        "question": "¿Cuáles de las siguientes oraciones describen un estado circunstancial y puntual, y no un rasgo estable de carácter?",
        "options": [
          "Está rarísimo desde que le dieron la noticia.",
          "Es una persona rarísima, siempre lo ha sido.",
          "Estuvo muy grosero con el camarero anoche.",
          "Es grosero por naturaleza; no respeta a nadie."
        ],
        "correctIndexes": [
          0,
          2
        ],
        "explanation": "«Estar raro» y «estar grosero» (aquí en pretérito, «estuvo grosero») describen comportamientos o estados puntuales provocados por una circunstancia concreta; las oraciones con «ser» atribuyen, en cambio, un rasgo permanente de carácter."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Traduce al español distinguiendo con precisión el rasgo de carácter del estado circunstancial.",
        "source": "He's normally a very calm person, but he got really aggressive during the shareholders' meeting.",
        "answer": "Normalmente es una persona muy tranquila, pero se puso muy violento durante la junta de accionistas.",
        "altAnswers": [
          "Por lo general es una persona muy tranquila, pero se puso muy violento durante la reunión de accionistas."
        ],
        "explanation": "El rasgo estable de carácter («es una persona tranquila») se expresa con «ser»; el comportamiento puntual provocado por la reunión («se puso violento») se expresa mediante un cambio de estado transitorio, la misma familia semántica que «estar violento»."
      },
      {
        "type": "translate",
        "direction": "es-en",
        "prompt": "Traduce al inglés captando el matiz exacto de la localización empleada.",
        "source": "La firma del contrato es en la notaría de la calle Mayor a las once de la mañana.",
        "answer": "The signing of the contract is at the notary's office on Calle Mayor at eleven in the morning.",
        "altAnswers": [
          "The contract signing takes place at the notary's office on Calle Mayor at eleven a.m."
        ],
        "explanation": "«La firma» designa aquí el acto de firmar, un evento, y por eso se localiza con «ser»; en inglés esa distinción gramatical desaparece, pero el traductor avanzado debe reconocerla para no confundirla con la ubicación de un objeto físico."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras para localizar correctamente un evento judicial.",
        "words": [
          "la",
          "vista",
          "judicial",
          "es",
          "en",
          "el",
          "tribunal",
          "superior"
        ],
        "translation": "The judicial hearing is at the high court.",
        "explanation": "«Vista judicial» designa un suceso, no un lugar físico, por lo que se localiza con «ser», nunca con «estar»."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras para introducir correctamente una entidad nueva en el discurso.",
        "words": [
          "hay",
          "dos",
          "asientos",
          "libres",
          "en",
          "la",
          "última",
          "fila"
        ],
        "translation": "There are two free seats in the last row.",
        "explanation": "«Hay» introduce entidades nuevas y no identificadas —aquí, «dos asientos libres»—, marcadas por un numeral en lugar de un artículo definido."
      },
      {
        "type": "matching",
        "instructions": "Relaciona cada expresión con el matiz que aporta, distinguiendo el rasgo estable del estado circunstancial.",
        "pairs": [
          {
            "left": "ser listo",
            "right": "poseer un rasgo estable de inteligencia o astucia"
          },
          {
            "left": "estar listo",
            "right": "encontrarse en un estado circunstancial de preparación"
          },
          {
            "left": "ser rico",
            "right": "poseer una fortuna considerable como condición estable"
          },
          {
            "left": "estar rico",
            "right": "resultar sabroso al paladar en una experiencia puntual"
          },
          {
            "left": "ser aburrido",
            "right": "poseer la cualidad estable de no resultar entretenido"
          }
        ],
        "explanation": "Cada par «ser/estar» con el mismo adjetivo constituye una verdadera polisemia léxica: no se trata de una variación libre modulada por la permanencia o la transitoriedad, sino de significados distintos que deben memorizarse caso por caso."
      },
      {
        "type": "multiple-choice",
        "question": "«El niño estuvo muy aburrido durante toda la ceremonia, aunque normalmente es un chico muy entretenido». ¿Qué distingue a «estuvo aburrido» de «es entretenido» en esta oración?",
        "options": [
          "No hay ninguna diferencia real de significado entre ambas construcciones.",
          "«Estuvo aburrido» describe una experiencia puntual de tedio; «es entretenido» atribuye un rasgo estable de carácter.",
          "«Estuvo aburrido» es gramaticalmente incorrecto en el registro culto.",
          "Ambas expresiones localizan un evento dentro de un espacio determinado."
        ],
        "correctIndex": 1,
        "explanation": "«Estar aburrido» describe el estado transitorio de sentir tedio en una situación concreta, mientras que «ser entretenido» atribuye una cualidad estable de la personalidad del niño, contraria a la de «ser aburrido»."
      },
      {
        "type": "multi-select",
        "question": "¿Cuáles de las siguientes oraciones ilustran correctamente la distinción entre «hay» y «estar» según la determinación del sustantivo?",
        "options": [
          "Hay varios documentos pendientes de firma sobre tu escritorio.",
          "Los documentos que firmaste ayer están en la carpeta azul.",
          "Hay el documento que necesitas en la carpeta azul.",
          "Está un documento urgente sobre tu escritorio."
        ],
        "correctIndexes": [
          0,
          1
        ],
        "explanation": "Las dos primeras oraciones respetan la regla: «hay» con sustantivo indeterminado («varios documentos») y «estar» con sustantivo ya identificado («los documentos que firmaste»); las otras dos combinan indebidamente un determinante definido con «hay» y uno indefinido con «estar»."
      }
    ]
  },
  {
    "slug": "ser-estar-haber-limits-part-2-1",
    "level": "C1",
    "number": 51,
    "title": "Ser, Estar y Haber: Casos Límite (Parte 2 de 2), Part 1 of 3",
    "summary": "Un recorrido por los casos genuinamente ambiguos de ser, estar y haber, donde la elección no depende de la permanencia o la transitoriedad, sino de matices ontológicos, evaluativos y discursivos más finos.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Casos híbridos: es/está claro, es/está bueno",
        "body": [
          "Ciertas construcciones evaluativas admiten tanto «ser» como «estar» con matices que oscilan entre la objetividad y la subjetividad del juicio emitido. «Es claro que llegaremos tarde» presenta la conclusión como una deducción lógica, objetiva y compartible por cualquiera que disponga de los mismos datos; «está claro que llegaremos tarde», en cambio, añade un matiz de evidencia inmediata y perceptible, como si la situación se hubiera vuelto obvia a partir de una observación reciente.",
          "Un contraste semejante distingue «es bueno» de «está bueno»: el primero valora una cualidad inherente y estable, mientras que el segundo valora una experiencia puntual y contextual, sin que ello implique nada sobre la calidad general del objeto o la persona. Estos casos límite demuestran que la oposición ser/estar no se reduce a permanencia frente a transitoriedad, sino que abarca también matices de objetividad, evidencia y alcance del juicio evaluativo."
        ],
        "examples": [
          {
            "es": "Es claro que necesitamos más tiempo para terminar.",
            "en": "Deducción lógica y objetiva, compartible por cualquiera con los mismos datos."
          },
          {
            "es": "Está claro que necesitamos más tiempo para terminar.",
            "en": "Evidencia inmediata y perceptible a partir de la situación actual."
          },
          {
            "es": "Es bueno este restaurante en general.",
            "en": "Valoración de una cualidad estable e inherente."
          },
          {
            "es": "Está buena esta sopa que acabamos de probar.",
            "en": "Valoración de una experiencia puntual y contextual."
          }
        ],
        "checkpoint": [
          {
            "type": "matching",
            "instructions": "Relaciona cada construcción evaluativa con el matiz que aporta.",
            "pairs": [
              {
                "left": "es claro que",
                "right": "presenta una deducción lógica y objetiva"
              },
              {
                "left": "está claro que",
                "right": "añade un matiz de evidencia inmediata y perceptible"
              },
              {
                "left": "es bueno",
                "right": "valora una cualidad inherente y estable"
              },
              {
                "left": "está bueno",
                "right": "valora una experiencia puntual y contextual"
              }
            ],
            "explanation": "La oposición ser/estar en construcciones evaluativas abarca matices de objetividad, evidencia y alcance del juicio, más allá de la simple permanencia o transitoriedad."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "word-order",
        "prompt": "Ordena las palabras para localizar correctamente un evento académico.",
        "words": [
          "el",
          "examen",
          "es",
          "en",
          "el",
          "aula",
          "principal"
        ],
        "explanation": "Los eventos, como «examen», se localizan con «ser», no con «estar»."
      }
    ]
  },
  {
    "slug": "ser-estar-haber-limits-part-2-2",
    "level": "C1",
    "number": 52,
    "title": "Ser, Estar y Haber: Casos Límite (Parte 2 de 2), Part 2 of 3",
    "summary": "Un recorrido por los casos genuinamente ambiguos de ser, estar y haber, donde la elección no depende de la permanencia o la transitoriedad, sino de matices ontológicos, evaluativos y discursivos más finos.",
    "duration": "10 min",
    "sections": [
      {
        "heading": "En la práctica",
        "body": [
          "Lucía: ¿Sabes dónde es la conferencia de mañana?",
          "Marcos: Es en el auditorio principal, el que está al lado de la biblioteca.",
          "Lucía: Perfecto. Por cierto, hay un problema con las invitaciones que enviamos.",
          "Marcos: ¿Qué problema? El listado de invitados está actualizado, ¿no?",
          "Lucía: Sí, pero está claro que varias personas no recibieron el correo todavía.",
          "Marcos: Es raro, porque el sistema de envíos es bastante fiable normalmente.",
          "Lucía: Estuvo un poco violenta la reunión de esta mañana por ese motivo, la verdad.",
          "Marcos: No te preocupes, es un problema fácil de resolver antes de mañana."
        ]
      },
      {
        "heading": "Vocabulario: los casos límite de ser, estar y haber",
        "body": [
          "35 palabras relacionadas con los casos límite de ser, estar y haber."
        ],
        "examples": [
          {
            "es": "la ubicación",
            "en": "el lugar en el que algo o alguien se encuentra situado"
          },
          {
            "es": "la distinción ontológica",
            "en": "la diferencia relacionada con la naturaleza misma de las cosas, más allá de sus propiedades accesorias"
          },
          {
            "es": "el evento",
            "en": "el suceso que ocurre en un momento y un lugar determinados"
          },
          {
            "es": "transitorio",
            "en": "que dura poco tiempo y está destinado a cambiar"
          },
          {
            "es": "permanente",
            "en": "que se mantiene sin cambios a lo largo del tiempo"
          },
          {
            "es": "la polisemia",
            "en": "la propiedad de una palabra de tener varios significados distintos"
          },
          {
            "es": "peyorativo",
            "en": "que expresa una connotación negativa o despectiva"
          },
          {
            "es": "la disposición estable",
            "en": "la tendencia de carácter que se mantiene constante en una persona"
          },
          {
            "es": "la atracción puntual",
            "en": "el interés momentáneo hacia algo o alguien en una circunstancia concreta"
          },
          {
            "es": "la determinación del sustantivo",
            "en": "el grado en que un sustantivo se presenta como conocido o desconocido en el discurso"
          },
          {
            "es": "el artículo indefinido",
            "en": "la palabra que presenta un sustantivo como nuevo o no identificado"
          },
          {
            "es": "el artículo definido",
            "en": "la palabra que presenta un sustantivo como ya conocido o identificado"
          },
          {
            "es": "la entidad",
            "en": "el elemento o la cosa que se considera existente dentro de un discurso"
          },
          {
            "es": "la función introductoria",
            "en": "el papel de presentar por primera vez algo dentro de un texto o una conversación"
          },
          {
            "es": "la función localizadora",
            "en": "el papel de indicar la posición de algo ya conocido"
          },
          {
            "es": "la deducción lógica",
            "en": "la conclusión que se obtiene necesariamente a partir de unas premisas dadas"
          },
          {
            "es": "la evidencia perceptible",
            "en": "el hecho que resulta observable de manera directa e inmediata"
          },
          {
            "es": "el juicio evaluativo",
            "en": "la valoración subjetiva u objetiva que se emite sobre algo"
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "matching",
        "instructions": "Relaciona cada construcción evaluativa con el matiz que aporta.",
        "pairs": [
          {
            "left": "es bueno",
            "right": "valora una cualidad inherente y estable"
          },
          {
            "left": "está bueno",
            "right": "valora una experiencia puntual y contextual"
          },
          {
            "left": "es claro que",
            "right": "presenta una deducción lógica y objetiva"
          },
          {
            "left": "está claro que",
            "right": "añade un matiz de evidencia inmediata y perceptible"
          }
        ],
        "explanation": "La oposición ser/estar en construcciones evaluativas abarca matices de objetividad, evidencia y alcance del juicio."
      }
    ]
  },
  {
    "slug": "ser-estar-haber-limits-part-2-3",
    "level": "C1",
    "number": 53,
    "title": "Ser, Estar y Haber: Casos Límite (Parte 2 de 2), Part 3 of 3",
    "summary": "Un recorrido por los casos genuinamente ambiguos de ser, estar y haber, donde la elección no depende de la permanencia o la transitoriedad, sino de matices ontológicos, evaluativos y discursivos más finos.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "Vocabulario: los casos límite de ser, estar y haber (cont'd)",
        "body": [],
        "examples": [
          {
            "es": "inherente",
            "en": "que forma parte esencial de algo y no puede separarse de ello"
          },
          {
            "es": "contextual",
            "en": "que depende de las circunstancias particulares de una situación concreta"
          },
          {
            "es": "el alcance del juicio",
            "en": "el grado de generalidad o de aplicabilidad de una valoración"
          },
          {
            "es": "la calidad constante",
            "en": "la cualidad que se mantiene estable a lo largo del tiempo"
          },
          {
            "es": "la experiencia puntual",
            "en": "la vivencia concreta y limitada a un momento específico"
          },
          {
            "es": "el determinante posesivo",
            "en": "la palabra que indica pertenencia y precede a un sustantivo"
          },
          {
            "es": "el determinante demostrativo",
            "en": "la palabra que señala la cercanía o lejanía de un sustantivo respecto al hablante"
          },
          {
            "es": "la agramaticalidad",
            "en": "la cualidad de una construcción que no respeta las reglas gramaticales de una lengua"
          },
          {
            "es": "el rasgo de carácter",
            "en": "la cualidad estable que define la personalidad de alguien"
          },
          {
            "es": "circunstancial",
            "en": "que depende de una situación particular y no es constante"
          },
          {
            "es": "el enunciado",
            "en": "unidad de habla o escritura que expresa un contenido completo"
          },
          {
            "es": "el referente",
            "en": "persona o cosa a la que remite una palabra o expresión"
          },
          {
            "es": "la observación reciente",
            "en": "la percepción de un hecho ocurrido poco tiempo antes del momento del habla"
          },
          {
            "es": "la incomodidad",
            "en": "la sensación de malestar o falta de soltura en una situación"
          },
          {
            "es": "fiable",
            "en": "que merece confianza por su constancia y su buen funcionamiento"
          },
          {
            "es": "la connotación negativa",
            "en": "el matiz desfavorable que una palabra transmite además de su significado literal"
          },
          {
            "es": "la naturaleza eventiva",
            "en": "la cualidad de un sustantivo que designa un suceso, no un objeto o una persona"
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "¿Por qué «está un problema con el pedido» suena forzado en español?",
        "options": [
          "Porque «problema» siempre exige el verbo «hay».",
          "Porque el artículo indefinido presenta la entidad como nueva, lo cual entra en conflicto con la función localizadora de «estar».",
          "Porque «pedido» no puede combinarse con «estar» bajo ninguna circunstancia.",
          "Porque esa oración es en realidad gramaticalmente correcta y natural."
        ],
        "correctIndex": 1,
        "explanation": "«Estar» presupone una entidad ya conocida cuya posición se especifica; el artículo indefinido, en cambio, presenta la entidad como nueva, función propia de «hay»."
      }
    ]
  },
  {
    "slug": "ser-estar-haber-limits-part-2-mastery-check",
    "level": "C1",
    "number": 54,
    "title": "Prueba de Dominio: Ser, Estar y Haber (Parte 2)",
    "summary": "Una evaluación centrada en los casos híbridos de ser y estar en construcciones evaluativas, donde el matiz de objetividad, evidencia y alcance del juicio decide la forma correcta.",
    "duration": "10 min",
    "sections": [],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "«Está clarísimo que el avión saldrá con retraso, a juzgar por el tablero de salidas». ¿Qué matiz aporta «está clarísimo» frente a «es clarísimo» en este contexto?",
        "options": [
          "Presenta la conclusión como una deducción lógica compartible por cualquiera, sin relación con el momento presente.",
          "Añade un matiz de evidencia inmediata y perceptible, derivada de una observación reciente del tablero.",
          "Indica que la afirmación es en realidad falsa, aunque se acepte por cortesía.",
          "No existe ninguna diferencia real entre ambas formas en este contexto."
        ],
        "correctIndex": 1,
        "explanation": "«Estar claro» añade un matiz de evidencia inmediata y perceptible que surge de una observación reciente y concreta —en este caso, el tablero de salidas—, distinto de la deducción puramente lógica y atemporal que expresaría «ser claro»."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa con «es» o «está» según el matiz de deducción lógica u observación inmediata.",
        "sentence": "___ claro que dos más dos son cuatro; no hace falta ninguna prueba adicional.",
        "answer": "Es",
        "hint": "Se trata de una verdad lógica y atemporal, no de algo deducido de una observación reciente.",
        "explanation": "«Ser claro» presenta aquí una verdad lógica y objetiva, compartible por cualquiera con independencia del momento o del contexto, por lo que corresponde «es», no «está»."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa con «es» o «está» según el matiz de deducción lógica u observación inmediata.",
        "sentence": "___ claro que algo pasa entre ellos dos; basta con ver cómo se miraron durante la cena.",
        "answer": "Está",
        "hint": "La conclusión se basa en una observación concreta y reciente, no en una verdad general.",
        "explanation": "«Estar claro» señala aquí que la conclusión surge de una evidencia inmediata y perceptible —la mirada durante la cena—, un matiz que «ser claro» no aportaría en este contexto."
      },
      {
        "type": "multiple-choice",
        "question": "«Este restaurante es muy bueno, aunque la sopa que nos sirvieron hoy no estaba muy buena». ¿Qué distingue ambos usos de «bueno» en esta oración?",
        "options": [
          "Ambos expresan exactamente la misma valoración, sin ningún matiz distinto.",
          "«Es muy bueno» valora una cualidad estable e inherente del restaurante; «no estaba muy buena» valora una experiencia puntual y contextual de ese plato concreto.",
          "«Estaba buena» indica simplemente que la sopa ya no existe.",
          "«Es muy bueno» solo puede aplicarse a personas, nunca a establecimientos."
        ],
        "correctIndex": 1,
        "explanation": "«Ser bueno» valora la calidad general y estable del restaurante como institución; «estar bueno/a», aplicado a un plato concreto en un momento dado, valora la experiencia sensorial puntual de esa comida específica, sin comprometer la valoración general."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa con la forma de «ser» que exprese una cualidad estable e inherente.",
        "sentence": "Ese médico ___ excelente; lleva veinte años de trayectoria intachable.",
        "answer": "es",
        "hint": "Se valora una cualidad profesional estable, no una experiencia puntual.",
        "explanation": "«Ser excelente» atribuye aquí una cualidad profesional estable y general al médico, respaldada por toda una trayectoria, y no una impresión puntual limitada a una sola consulta."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa con la forma de «estar» que exprese una experiencia puntual y contextual.",
        "sentence": "El café que nos sirvieron esta mañana ___ buenísimo, aunque normalmente aquí lo preparan bastante flojo.",
        "answer": "estaba",
        "hint": "Se valora una experiencia sensorial concreta y puntual, en contraste explícito con lo habitual.",
        "explanation": "«Estar buenísimo» valora la experiencia puntual de ese café concreto en esa mañana, en contraste deliberado con la calidad habitual del local, que el hablante describe como «bastante flojo»."
      },
      {
        "type": "multi-select",
        "question": "¿Cuáles de las siguientes oraciones emplean «es» o «está» de forma coherente con el matiz de objetividad o evidencia inmediata que corresponde a cada una?",
        "options": [
          "Es evidente que la Tierra gira alrededor del Sol.",
          "Está clarísimo que ha llorado, tiene los ojos hinchados.",
          "Está evidente que dos y dos son cuatro.",
          "Es clarísimo que acaba de llegar, todavía trae la maleta en la mano."
        ],
        "correctIndexes": [
          0,
          1
        ],
        "explanation": "«Es evidente» funciona correctamente con una verdad objetiva y atemporal; «está clarísimo» funciona correctamente con una evidencia perceptible e inmediata (los ojos hinchados). Las otras dos oraciones invierten el matiz: una verdad lógica atemporal no admite «estar», y una evidencia observada en el momento no encaja con «es»."
      },
      {
        "type": "multiple-choice",
        "question": "¿Qué oración resulta más natural para valorar la calidad general y permanente de una universidad, según lo estudiado?",
        "options": [
          "Esta universidad está muy buena en investigación científica.",
          "Esta universidad es muy buena en investigación científica.",
          "Esta universidad hay muy buena en investigación científica.",
          "Esta universidad estuvo muy buena en investigación científica esta semana."
        ],
        "correctIndex": 1,
        "explanation": "La calidad de una institución como rasgo estable y general se valora con «ser», reservando «estar» para experiencias puntuales y contextuales; las opciones con «hay» y con el matiz temporal («esta semana») resultan incoherentes con una valoración general."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Traduce distinguiendo la deducción lógica de la evidencia inmediata.",
        "source": "It's obvious that we'll need more staff for the summer season — just look at how many reservations have already come in.",
        "answer": "Está clarísimo que necesitaremos más personal para la temporada de verano; basta con ver cuántas reservas han llegado ya.",
        "altAnswers": [
          "Está claro que vamos a necesitar más personal para la temporada de verano; basta con ver cuántas reservas han llegado ya."
        ],
        "explanation": "La conclusión se apoya en una evidencia inmediata y observable —el volumen de reservas—, por lo que corresponde «estar claro» y no la deducción puramente lógica que expresaría «ser claro»."
      },
      {
        "type": "translate",
        "direction": "es-en",
        "prompt": "Traduce al inglés distinguiendo la cualidad estable de la experiencia puntual.",
        "source": "El postre está buenísimo hoy, aunque normalmente aquí los postres no son nada del otro mundo.",
        "answer": "The dessert is really delicious today, although the desserts here aren't usually anything special.",
        "altAnswers": [
          "Today's dessert tastes amazing, though the desserts here usually aren't anything special."
        ],
        "explanation": "«Está buenísimo» valora la experiencia puntual de ese postre concreto en ese día, mientras que «no son nada del otro mundo» valora la calidad estable y habitual de los postres del local."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras para expresar una deducción lógica y objetiva.",
        "words": [
          "es",
          "evidente",
          "que",
          "el",
          "plan",
          "necesita",
          "más",
          "financiación"
        ],
        "translation": "It's evident that the plan needs more funding.",
        "explanation": "«Es evidente que» presenta aquí una conclusión lógica y objetiva, derivada del razonamiento y no de una observación inmediata concreta."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras para expresar una valoración basada en una experiencia puntual.",
        "words": [
          "esta",
          "paella",
          "está",
          "buenísima",
          "hoy"
        ],
        "translation": "This paella is really delicious today.",
        "explanation": "«Está buenísima» valora la experiencia sensorial puntual de este plato concreto en este momento, sin implicar nada sobre la calidad habitual del establecimiento."
      },
      {
        "type": "matching",
        "instructions": "Relaciona cada construcción con el matiz preciso que aporta.",
        "pairs": [
          {
            "left": "es evidente que",
            "right": "presenta una deducción lógica, objetiva y atemporal"
          },
          {
            "left": "está clarísimo que",
            "right": "añade un matiz de evidencia inmediata derivada de una observación reciente"
          },
          {
            "left": "es bueno (un establecimiento)",
            "right": "valora una cualidad estable e inherente"
          },
          {
            "left": "está bueno (un plato concreto)",
            "right": "valora una experiencia sensorial puntual y contextual"
          }
        ],
        "explanation": "Estos casos límite demuestran que la oposición ser/estar, en construcciones evaluativas, no se reduce a permanencia frente a transitoriedad, sino que abarca matices de objetividad, evidencia y alcance del juicio."
      },
      {
        "type": "multiple-choice",
        "question": "Un hablante dice: «Es cierto que el proyecto tiene problemas de financiación». Más tarde, tras revisar las cuentas, añade: «Está clarísimo que no vamos a llegar a fin de mes». ¿Qué explica el cambio de «es» a «está» entre ambas oraciones?",
        "options": [
          "Un simple error gramatical del hablante, sin ninguna motivación.",
          "El paso de una afirmación general y ya sabida a una conclusión basada en una evidencia concreta y recién observada.",
          "Que «cierto» y «claro» son sinónimos perfectos e intercambiables en cualquier contexto.",
          "Que la segunda oración se refiere a un evento, no a una deducción."
        ],
        "correctIndex": 1,
        "explanation": "La primera oración plantea una afirmación general y ya conocida sobre el proyecto; la segunda surge de revisar las cuentas —una evidencia inmediata y reciente—, lo cual motiva el cambio hacia «estar»."
      },
      {
        "type": "multi-select",
        "question": "¿Cuáles de las siguientes oraciones ilustran correctamente el matiz de «estar + adjetivo evaluativo» como experiencia puntual y contextual?",
        "options": [
          "El vino que abrimos anoche estaba espectacular.",
          "Ese actor es espectacular en todas sus películas.",
          "La sopa de hoy está sosísima, le falta sal.",
          "Mi tía es una cocinera espectacular desde hace décadas."
        ],
        "correctIndexes": [
          0,
          2
        ],
        "explanation": "«Estaba espectacular» y «está sosísima» valoran experiencias puntuales y concretas —un vino en una noche determinada, una sopa en un día concreto—; las otras dos oraciones, con «ser», atribuyen cualidades estables y generales."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa con «es» o «está» según el matiz evaluativo que corresponde.",
        "sentence": "Este hotel ___ excelente en general, aunque la habitación que nos tocó esta vez resultó bastante ruidosa.",
        "answer": "es",
        "hint": "Se valora la calidad general y estable del hotel como establecimiento.",
        "explanation": "La valoración general y estable de un establecimiento se expresa con «ser»; el matiz puntual de la habitación ruidosa queda relegado a una cláusula aparte, sin necesidad de recurrir aquí a «estar»."
      }
    ]
  },
  {
    "slug": "prepositional-verbs-part-1-1",
    "level": "C1",
    "number": 55,
    "title": "Verbos Preposicionales y Régimen Verbal (Parte 1 de 2), Part 1 of 3",
    "summary": "Un estudio de los verbos cuya preposición fija forma parte inseparable de su significado, y de los errores más frecuentes que surgen al confundir verbos semánticamente próximos con régimen distinto.",
    "duration": "9 min",
    "sections": [
      {
        "heading": "El concepto de régimen verbal",
        "body": [
          "El régimen verbal designa el conjunto de preposiciones que un verbo exige de manera fija para introducir sus complementos, una exigencia que en la mayoría de los casos no se deriva de ninguna lógica semántica transparente, sino que responde a una convención arbitraria fijada en la lengua. «Contar con alguien», «soñar con algo» o «empeñarse en algo» no admiten sustituir su preposición por otra aparentemente similar sin alterar gravemente la gramaticalidad o el significado de la oración.",
          "Dominar el régimen verbal exige, por tanto, memorizar cada verbo preposicional como una unidad léxica indivisible —verbo más preposición— en lugar de tratarlos como combinaciones libres de piezas intercambiables. Esta arbitrariedad convierte a los verbos preposicionales en una de las áreas donde persisten errores incluso en hablantes de nivel muy avanzado, precisamente porque la intuición gramatical general no basta para predecir la preposición correcta: solo la exposición extensa a la lengua permite fijarla con seguridad."
        ],
        "examples": [
          {
            "es": "Cuento contigo para el proyecto de mañana.",
            "en": "El verbo «contar» exige la preposición «con», no otra."
          },
          {
            "es": "El plan consiste en reducir los gastos innecesarios.",
            "en": "El verbo «consistir» exige la preposición «en» de forma inherente."
          },
          {
            "es": "Se empeñó en terminar el trabajo esa misma noche.",
            "en": "El verbo «empeñarse» exige la preposición «en», sin excepción."
          },
          {
            "es": "Sueño con vivir en otro país algún día.",
            "en": "El verbo «soñar» en este sentido exige la preposición «con»."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Qué caracteriza principalmente al régimen verbal en español?",
            "options": [
              "Que la preposición se puede deducir siempre a partir del significado del verbo.",
              "Que la preposición exigida por cada verbo es en gran medida arbitraria y debe memorizarse como parte de la unidad léxica.",
              "Que todos los verbos preposicionales admiten cualquier preposición sin cambio de significado.",
              "Que solo los verbos de movimiento tienen régimen preposicional."
            ],
            "correctIndex": 1,
            "explanation": "El régimen verbal responde a una convención fijada históricamente, no a una lógica semántica predecible, por lo que cada combinación verbo más preposición debe memorizarse como unidad indivisible."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "¿Qué caracteriza al régimen verbal de los verbos preposicionales en español?",
        "options": [
          "La preposición se puede deducir siempre lógicamente del significado del verbo.",
          "La preposición está fijada de manera en gran medida arbitraria y debe memorizarse junto al verbo.",
          "Todos los verbos aceptan cualquier preposición sin cambio de sentido.",
          "Solo afecta a los verbos de movimiento."
        ],
        "correctIndex": 1,
        "explanation": "El régimen verbal responde a una convención fijada históricamente, no a una lógica semántica predecible, por lo que debe memorizarse como parte de la unidad léxica del verbo."
      }
    ]
  },
  {
    "slug": "prepositional-verbs-part-1-2",
    "level": "C1",
    "number": 56,
    "title": "Verbos Preposicionales y Régimen Verbal (Parte 1 de 2), Part 2 of 3",
    "summary": "Un estudio de los verbos cuya preposición fija forma parte inseparable de su significado, y de los errores más frecuentes que surgen al confundir verbos semánticamente próximos con régimen distinto.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Verbos preposicionales con con",
        "body": [
          "Un grupo especialmente productivo de verbos preposicionales se construye con «con», aunque con matices semánticos que conviene distinguir con precisión. «Contar con alguien» significa confiar en la disponibilidad o el apoyo de esa persona; «dar con algo» significa encontrar, a menudo tras una búsqueda, algo que se buscaba; «encontrarse con alguien» describe un encuentro, casual o planeado; y «enfrentarse con alguien» describe una confrontación directa, física o dialéctica.",
          "La proximidad semántica entre estos verbos —todos ellos implican, en cierto sentido, una relación de coincidencia o encuentro— explica por qué resultan especialmente propensos a la confusión entre hablantes no nativos, que tienden a extender la preposición «con» a otros verbos donde no corresponde, o a sustituirla por «en» o «a» por analogía con estructuras de su propia lengua. Distinguir estos matices exige atender no solo a la preposición, sino al significado específico que cada verbo adquiere en combinación con ella."
        ],
        "examples": [
          {
            "es": "Puedes contar conmigo para lo que necesites.",
            "en": "Confianza en la disponibilidad o el apoyo de alguien."
          },
          {
            "es": "Por fin dimos con la solución al problema.",
            "en": "Se encuentra algo tras una búsqueda activa."
          },
          {
            "es": "Me encontré con un viejo amigo en el supermercado.",
            "en": "Encuentro casual entre dos personas."
          },
          {
            "es": "Tuvo que enfrentarse con las críticas de todo el equipo.",
            "en": "Confrontación directa, en este caso dialéctica."
          }
        ],
        "checkpoint": [
          {
            "type": "matching",
            "instructions": "Relaciona cada verbo preposicional con «con» con su significado específico.",
            "pairs": [
              {
                "left": "contar con",
                "right": "confiar en la disponibilidad o el apoyo de alguien"
              },
              {
                "left": "dar con",
                "right": "encontrar algo tras una búsqueda activa"
              },
              {
                "left": "encontrarse con",
                "right": "tener un encuentro casual o planeado con alguien"
              },
              {
                "left": "enfrentarse con",
                "right": "sostener una confrontación directa, física o dialéctica"
              }
            ],
            "explanation": "Aunque comparten la preposición «con», cada verbo preposicional aporta un matiz de significado distinto y no intercambiable."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "fill-blank",
        "prompt": "Completa con la preposición fija que exige el verbo.",
        "sentence": "Este curso consiste ___ aprender los matices más avanzados de la lengua.",
        "answer": "en",
        "explanation": "El verbo «consistir» exige de manera fija la preposición «en».",
        "hint": "Piensa en el régimen fijo del verbo «consistir»."
      }
    ]
  },
  {
    "slug": "prepositional-verbs-part-1-3",
    "level": "C1",
    "number": 57,
    "title": "Verbos Preposicionales y Régimen Verbal (Parte 1 de 2), Part 3 of 3",
    "summary": "Un estudio de los verbos cuya preposición fija forma parte inseparable de su significado, y de los errores más frecuentes que surgen al confundir verbos semánticamente próximos con régimen distinto.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Verbos preposicionales con en",
        "body": [
          "Otro grupo numeroso de verbos preposicionales fija su régimen en la preposición «en», con significados que van desde la definición hasta la insistencia. «Consistir en» introduce la esencia o el contenido definitorio de algo; «empeñarse en» expresa una determinación obstinada de llevar a cabo una acción; «quedar en» introduce el contenido de un acuerdo o una cita concertada; «insistir en» expresa la repetición terca de una petición; y «fijarse en» describe la acción de prestar atención deliberada a un detalle concreto.",
          "Un error frecuente entre hablantes no nativos consiste en sustituir «en» por «sobre» o «acerca de» en estos verbos, por analogía con estructuras donde estas últimas preposiciones sí resultan naturales. Sin embargo, cada uno de estos verbos con «en» tiene fijada su preposición de manera inequívoca, y ninguna alternativa —por semánticamente cercana que parezca— resulta aceptable en el registro culto."
        ],
        "examples": [
          {
            "es": "El plan consiste en reorganizar todo el departamento.",
            "en": "Se introduce la esencia definitoria del plan."
          },
          {
            "es": "Se empeñó en hacerlo todo sin ayuda de nadie.",
            "en": "Determinación obstinada, contra la opinión de los demás."
          },
          {
            "es": "Quedamos en vernos a las siete en la plaza.",
            "en": "Contenido de un acuerdo o una cita concertada."
          },
          {
            "es": "Insistió en que revisáramos el contrato de nuevo.",
            "en": "Repetición terca de una petición."
          },
          {
            "es": "Fíjate en los detalles antes de firmar cualquier documento.",
            "en": "Atención deliberada a un detalle concreto."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa con la preposición fija que exige el verbo.",
            "sentence": "El éxito del proyecto consiste ___ mantener a todo el equipo motivado.",
            "answer": "en",
            "explanation": "El verbo «consistir» exige de manera fija la preposición «en» para introducir su contenido definitorio.",
            "hint": "Piensa en el régimen fijo del verbo «consistir»."
          },
          {
            "type": "multi-select",
            "question": "¿Cuáles de los siguientes verbos exigen la preposición «en» de forma fija en su régimen verbal?",
            "options": [
              "empeñarse",
              "contar",
              "insistir",
              "soñar",
              "fijarse"
            ],
            "correctIndexes": [
              0,
              2,
              4
            ],
            "explanation": "«Empeñarse», «insistir» y «fijarse» exigen «en» de forma fija; «contar» y «soñar», en los sentidos vistos, exigen «con»."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multi-select",
        "question": "¿Cuáles de los siguientes verbos exigen la preposición «en» de forma fija en su régimen verbal?",
        "options": [
          "quedar",
          "dar",
          "insistir",
          "fijarse",
          "enfrentarse"
        ],
        "correctIndexes": [
          0,
          2,
          3
        ],
        "explanation": "«Quedar», «insistir» y «fijarse», en los sentidos estudiados, exigen «en»; «dar» y «enfrentarse» exigen «con»."
      }
    ]
  },
  {
    "slug": "prepositional-verbs-part-1-mastery-check",
    "level": "C1",
    "number": 58,
    "title": "Prueba de Dominio: Verbos Preposicionales y Régimen Verbal (Parte 1)",
    "summary": "Una prueba que exige aplicar con precisión el régimen fijo de los verbos preposicionales con «con» y con «en» a contextos inéditos, sin apoyarse en las oraciones ya practicadas en la lección.",
    "duration": "10 min",
    "sections": [],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "¿Qué caracteriza principalmente la arbitrariedad del régimen verbal en español?",
        "options": [
          "Que cada hablante puede elegir libremente la preposición que le resulte más natural.",
          "Que la preposición exigida por un verbo preposicional no se deriva de una lógica semántica transparente y debe fijarse mediante exposición extensa a la lengua.",
          "Que solo los verbos irregulares presentan régimen preposicional fijo.",
          "Que el régimen verbal desaparece por completo en el registro culto."
        ],
        "correctIndex": 1,
        "explanation": "El régimen verbal responde a una convención histórica, no a una lógica predecible; ni siquiera un hablante avanzado puede deducir con seguridad la preposición correcta sin haberla fijado mediante un contacto prolongado con la lengua."
      },
      {
        "type": "matching",
        "instructions": "Relaciona cada verbo preposicional con «con» con el matiz que aporta en un contexto nuevo.",
        "pairs": [
          {
            "left": "contar con",
            "right": "confiar en el respaldo o la disponibilidad de alguien o algo"
          },
          {
            "left": "dar con",
            "right": "hallar algo, a menudo tras una búsqueda prolongada"
          },
          {
            "left": "encontrarse con",
            "right": "coincidir con alguien de forma casual o previamente acordada"
          },
          {
            "left": "enfrentarse con",
            "right": "sostener una confrontación directa, física o dialéctica, frente a alguien"
          }
        ],
        "explanation": "Aunque comparten la preposición «con», cada uno de estos verbos aporta un matiz de significado propio y no intercambiable con los demás."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa con la preposición fija que exige el verbo.",
        "sentence": "La estrategia consiste ___ anticiparse siempre a los movimientos de la competencia.",
        "answer": "en",
        "hint": "Piensa en el régimen fijo del verbo «consistir».",
        "explanation": "El verbo «consistir» exige de manera fija la preposición «en» para introducir la esencia o el contenido definitorio de aquello que describe."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa con la preposición fija que exige el verbo.",
        "sentence": "Se empeñó ___ corregir personalmente cada error del manuscrito, por mínimo que fuera.",
        "answer": "en",
        "hint": "Piensa en el régimen fijo del verbo «empeñarse».",
        "explanation": "«Empeñarse» exige siempre la preposición «en» para expresar una determinación obstinada de llevar a cabo una acción, sin excepción posible."
      },
      {
        "type": "multi-select",
        "question": "¿Cuáles de los siguientes verbos exigen la preposición «en» de forma fija en su régimen verbal?",
        "options": [
          "consistir",
          "dar",
          "empeñarse",
          "encontrarse",
          "fijarse"
        ],
        "correctIndexes": [
          0,
          2,
          4
        ],
        "explanation": "«Consistir», «empeñarse» y «fijarse» exigen «en» de forma fija; «dar» y «encontrarse», en los sentidos estudiados de hallazgo y coincidencia, exigen en cambio «con»."
      },
      {
        "type": "multiple-choice",
        "question": "¿Qué diferencia de significado existe entre «puedes contar conmigo» y «puedes contarme lo que pasó»?",
        "options": [
          "Ninguna; ambas expresiones significan exactamente lo mismo.",
          "«Contar con alguien» expresa confianza en su disponibilidad o apoyo; «contar algo a alguien» significa narrar o relatar un suceso, un verbo transitivo sin ese régimen fijo.",
          "«Contar con alguien» solo puede usarse en el pasado.",
          "«Contarme lo que pasó» es gramaticalmente incorrecto en el registro culto."
        ],
        "correctIndex": 1,
        "explanation": "El mismo verbo «contar» cambia radicalmente de significado según se construya con la preposición «con» —confianza en el apoyo de alguien— o como transitivo con un complemento directo —narrar un suceso—, lo cual demuestra hasta qué punto la preposición forma parte inseparable del significado del verbo."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras para expresar un hallazgo logrado tras una búsqueda prolongada.",
        "words": [
          "los",
          "investigadores",
          "dieron",
          "por",
          "fin",
          "con",
          "el",
          "manuscrito",
          "perdido"
        ],
        "translation": "The researchers finally found the lost manuscript.",
        "explanation": "«Dar con algo» significa encontrar, a menudo tras una búsqueda activa y prolongada, tal como ocurre aquí con el manuscrito perdido."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras para expresar la repetición terca de una petición.",
        "words": [
          "el",
          "comité",
          "insistió",
          "en",
          "revisar",
          "todas",
          "las",
          "cifras"
        ],
        "translation": "The committee insisted on reviewing all the figures.",
        "explanation": "«Insistir en» expresa la repetición terca de una petición, en este caso la exigencia del comité de revisar las cifras antes de continuar."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Traduce combinando dos verbos preposicionales distintos en una sola oración.",
        "source": "She agreed to meet him at the station before the train left.",
        "answer": "Quedó en encontrarse con él en la estación antes de que saliera el tren.",
        "altAnswers": [
          "Quedaron en encontrarse en la estación antes de que el tren saliera."
        ],
        "explanation": "«Quedar en» introduce el contenido de un acuerdo concertado, mientras que «encontrarse con» describe el encuentro mismo; ambos verbos preposicionales, con regímenes distintos, se combinan aquí con naturalidad."
      },
      {
        "type": "translate",
        "direction": "es-en",
        "prompt": "Traduce al inglés reconociendo el régimen preposicional del verbo empleado.",
        "source": "El comité insistió en que se revisaran las cifras antes de aprobar el presupuesto.",
        "answer": "The committee insisted that the figures be reviewed before approving the budget.",
        "altAnswers": [
          "The committee insisted on having the figures reviewed before approving the budget."
        ],
        "explanation": "«Insistir en» exige de forma fija la preposición «en» en español, aunque en inglés la construcción equivalente («insist that» o «insist on») siga una lógica sintáctica distinta."
      },
      {
        "type": "multiple-choice",
        "question": "«Se empeñó en terminar el proyecto solo, sin ayuda de nadie, a pesar de las advertencias de todo el equipo». ¿Qué matiz aporta «empeñarse en» en esta oración?",
        "options": [
          "Un estado circunstancial de cansancio ante la tarea.",
          "Una determinación obstinada de llevar a cabo la acción, incluso en contra de la opinión de los demás.",
          "Una duda persistente sobre si debía o no continuar con el proyecto.",
          "Una confrontación directa con los miembros del equipo."
        ],
        "correctIndex": 1,
        "explanation": "«Empeñarse en» expresa precisamente una determinación obstinada de llevar a cabo una acción, reforzada aquí por el contraste explícito con las advertencias del resto del equipo."
      },
      {
        "type": "multi-select",
        "question": "¿Cuáles de las siguientes oraciones emplean correctamente la preposición fija del verbo, sin sustituirla indebidamente por otra semánticamente próxima?",
        "options": [
          "La propuesta consiste sobre reducir los costos operativos del departamento.",
          "El profesor insistió en que revisáramos la bibliografía completa.",
          "Se fijó acerca de un detalle que a todos se les había escapado.",
          "Quedamos en repasar juntos la presentación antes de la reunión."
        ],
        "correctIndexes": [
          1,
          3
        ],
        "explanation": "«Insistir en» y «quedar en» conservan correctamente su preposición fija; las otras dos oraciones sustituyen indebidamente «en» por «sobre» y «acerca de», un error frecuente por analogía con estructuras donde esas preposiciones sí resultan naturales."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa con la preposición fija que exige el verbo.",
        "sentence": "Fíjate bien ___ los plazos de entrega antes de aceptar el encargo.",
        "answer": "en",
        "hint": "Piensa en el régimen fijo del verbo «fijarse».",
        "explanation": "«Fijarse en» exige de forma fija la preposición «en» para describir la acción de prestar atención deliberada a un detalle concreto."
      },
      {
        "type": "multiple-choice",
        "question": "¿Qué diferencia de matiz existe entre «dio con la respuesta tras horas de cálculo» y «se encontró con su antiguo profesor en el aeropuerto»?",
        "options": [
          "Ninguna; ambos verbos significan exactamente lo mismo en cualquier contexto.",
          "«Dar con» implica un hallazgo logrado tras una búsqueda activa y deliberada; «encontrarse con» describe un encuentro casual o no buscado.",
          "«Encontrarse con» solo puede usarse con objetos, nunca con personas.",
          "«Dar con» exige siempre un sujeto plural."
        ],
        "correctIndex": 1,
        "explanation": "«Dar con algo» presupone un esfuerzo o una búsqueda previa que culmina en un hallazgo; «encontrarse con alguien», en cambio, describe un encuentro que puede ser fortuito, sin ninguna búsqueda deliberada de por medio."
      },
      {
        "type": "matching",
        "instructions": "Relaciona cada verbo preposicional con «en» con el matiz que aporta en un contexto nuevo.",
        "pairs": [
          {
            "left": "consistir en",
            "right": "introducir la esencia o el contenido definitorio de algo"
          },
          {
            "left": "empeñarse en",
            "right": "expresar una determinación obstinada de llevar a cabo una acción"
          },
          {
            "left": "quedar en",
            "right": "introducir el contenido de un acuerdo o una cita concertada"
          },
          {
            "left": "insistir en",
            "right": "expresar la repetición terca de una petición"
          },
          {
            "left": "fijarse en",
            "right": "prestar atención deliberada a un detalle concreto"
          }
        ],
        "explanation": "Aunque comparten la preposición «en», cada uno de estos verbos aporta un matiz de significado específico y no intercambiable con los demás."
      },
      {
        "type": "multiple-choice",
        "question": "¿Qué preposición exige el verbo «enfrentarse» en el sentido de sostener una confrontación directa, según lo estudiado en esta lección?",
        "options": [
          "a",
          "con",
          "en",
          "de"
        ],
        "correctIndex": 1,
        "explanation": "En el sentido de sostener una confrontación directa, física o dialéctica, «enfrentarse» se ha estudiado en esta lección con la preposición «con», formando parte de la familia de verbos preposicionales que comparten esa preposición fija."
      }
    ]
  },
  {
    "slug": "prepositional-verbs-part-2-1",
    "level": "C1",
    "number": 59,
    "title": "Verbos Preposicionales y Régimen Verbal (Parte 2 de 2), Part 1 of 3",
    "summary": "Un estudio de los verbos cuya preposición fija forma parte inseparable de su significado, y de los errores más frecuentes que surgen al confundir verbos semánticamente próximos con régimen distinto.",
    "duration": "9 min",
    "sections": [
      {
        "heading": "Errores comunes: interferencia y analogía interna",
        "body": [
          "Los errores más persistentes en el régimen verbal, incluso en hablantes de nivel avanzado, suelen originarse en dos fuentes distintas pero relacionadas: la interferencia de otra lengua, cuando el hablante calca la preposición que su idioma materno emplea con un verbo semánticamente equivalente, y la analogía interna dentro del propio español, cuando el hablante extiende la preposición de un verbo a otro verbo próximo en significado pero distinto en régimen. «Pensar en algo» contrasta con «pensar de algo», y confundir ambos regímenes altera sutilmente el sentido de la pregunta.",
          "Otro foco frecuente de error surge entre verbos con un significado próximo pero un régimen distinto, como «depender de» frente a «basarse en»: ambos verbos relacionan una cosa con su fundamento, pero exigen preposiciones distintas e inintercambiables. Reconocer estos pares de riesgo —verbos semánticamente vecinos con régimen divergente— y practicarlos de forma sistemática es la única estrategia realmente eficaz para erradicar estos errores en el habla espontánea de un nivel avanzado."
        ],
        "examples": [
          {
            "es": "Pienso mucho en el futuro de este proyecto.",
            "en": "Reflexión mental sobre un tema, con «en»."
          },
          {
            "es": "¿Qué piensas de la propuesta que presentamos?",
            "en": "Se pide una opinión sobre algo, con «de»."
          }
        ]
      },
      {
        "heading": "Errores comunes: interferencia y analogía interna (cont'd)",
        "body": [],
        "examples": [
          {
            "es": "El resultado depende de varios factores externos.",
            "en": "El verbo «depender» exige la preposición «de»."
          },
          {
            "es": "La teoría se basa en datos recogidos durante años.",
            "en": "El verbo «basarse» exige la preposición «en»."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Qué diferencia de significado existe entre «pensar en algo» y «pensar de algo»?",
            "options": [
              "No hay ninguna diferencia; ambas expresiones son intercambiables.",
              "«Pensar en» expresa reflexión mental sobre un tema; «pensar de» pide o expresa una opinión sobre algo.",
              "«Pensar de» solo se usa en preguntas negativas.",
              "«Pensar en» es incorrecto en el registro culto."
            ],
            "correctIndex": 1,
            "explanation": "«Pensar en algo» implica reflexionar mentalmente sobre ese tema, mientras que «pensar de algo» implica formular una opinión o un juicio sobre ello."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "word-order",
        "prompt": "Ordena las palabras para formar una oración con el verbo «contar con».",
        "words": [
          "puedes",
          "contar",
          "conmigo",
          "para",
          "lo",
          "que",
          "necesites"
        ],
        "explanation": "«Contar con alguien» expresa confianza en la disponibilidad o el apoyo de esa persona."
      }
    ]
  },
  {
    "slug": "prepositional-verbs-part-2-2",
    "level": "C1",
    "number": 60,
    "title": "Verbos Preposicionales y Régimen Verbal (Parte 2 de 2), Part 2 of 3",
    "summary": "Un estudio de los verbos cuya preposición fija forma parte inseparable de su significado, y de los errores más frecuentes que surgen al confundir verbos semánticamente próximos con régimen distinto.",
    "duration": "9 min",
    "sections": [
      {
        "heading": "En la práctica",
        "body": [
          "Iván: ¿En qué consiste exactamente tu propuesta para el equipo?",
          "Noelia: Consiste en reorganizar los turnos para reducir el estrés general.",
          "Iván: Interesante. ¿Y cuentas con el apoyo de la dirección para eso?",
          "Noelia: Todavía no, pero me he empeñado en presentarlo esta semana.",
          "Iván: Bien hecho. ¿Quedamos en repasarlo juntos mañana por la mañana?",
          "Noelia: Perfecto. Fíjate bien en los horarios, porque ahí puede haber algún conflicto.",
          "Iván: Lo revisaré con calma. Por cierto, ¿diste con algún dato sobre el ausentismo?",
          "Noelia: Sí, y la conclusión depende mucho de los datos del último trimestre."
        ]
      },
      {
        "heading": "Vocabulario: los verbos preposicionales",
        "body": [
          "35 palabras relacionadas con los verbos preposicionales."
        ],
        "examples": [
          {
            "es": "el régimen preposicional",
            "en": "el conjunto de preposiciones que un verbo exige de manera fija e inherente"
          },
          {
            "es": "la unidad léxica",
            "en": "el conjunto de palabras que funciona como un solo bloque de significado"
          },
          {
            "es": "la arbitrariedad",
            "en": "la falta de una razón lógica o predecible que explique una elección"
          },
          {
            "es": "el uso consolidado",
            "en": "la forma lingüística que se ha estabilizado firmemente mediante la repetición a lo largo del tiempo"
          },
          {
            "es": "la interferencia lingüística",
            "en": "la influencia involuntaria que una lengua ejerce sobre otra en la mente de un hablante"
          },
          {
            "es": "el calco",
            "en": "la reproducción literal de una estructura propia de otra lengua"
          },
          {
            "es": "la lengua materna",
            "en": "el idioma que una persona aprende de forma natural desde la infancia"
          },
          {
            "es": "la analogía interna",
            "en": "la extensión de un patrón de una estructura a otra dentro de la misma lengua"
          },
          {
            "es": "el par de riesgo",
            "en": "el conjunto de dos elementos semánticamente próximos que se confunden con frecuencia"
          },
          {
            "es": "divergente",
            "en": "que se aparta o se diferencia de algo con lo que guarda cierta semejanza"
          },
          {
            "es": "inintercambiable",
            "en": "que no puede sustituirse por otro elemento sin alterar el sentido"
          },
          {
            "es": "la exposición extensa",
            "en": "el contacto prolongado y repetido con una lengua o un fenómeno"
          },
          {
            "es": "la memorización",
            "en": "el proceso de fijar información en la memoria mediante la repetición"
          },
          {
            "es": "la disponibilidad",
            "en": "la cualidad de estar preparado o accesible para ayudar cuando se necesita"
          },
          {
            "es": "la determinación obstinada",
            "en": "la firmeza inquebrantable con que alguien persigue un propósito"
          },
          {
            "es": "concertar",
            "en": "acordar de mutuo acuerdo el lugar, la hora o los términos de algo"
          },
          {
            "es": "la búsqueda activa",
            "en": "el esfuerzo deliberado por encontrar algo concreto"
          },
          {
            "es": "el encuentro casual",
            "en": "la coincidencia no planeada entre dos o más personas"
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "matching",
        "instructions": "Relaciona cada verbo preposicional con «con» con su significado específico.",
        "pairs": [
          {
            "left": "dar con",
            "right": "encontrar algo tras una búsqueda activa"
          },
          {
            "left": "encontrarse con",
            "right": "tener un encuentro casual con alguien"
          },
          {
            "left": "enfrentarse con",
            "right": "sostener una confrontación directa"
          },
          {
            "left": "contar con",
            "right": "confiar en la disponibilidad de alguien"
          }
        ],
        "explanation": "Aunque comparten la preposición «con», cada verbo preposicional aporta un matiz de significado distinto y no intercambiable."
      }
    ]
  },
  {
    "slug": "prepositional-verbs-part-2-3",
    "level": "C1",
    "number": 61,
    "title": "Verbos Preposicionales y Régimen Verbal (Parte 2 de 2), Part 3 of 3",
    "summary": "Un estudio de los verbos cuya preposición fija forma parte inseparable de su significado, y de los errores más frecuentes que surgen al confundir verbos semánticamente próximos con régimen distinto.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "Vocabulario: los verbos preposicionales (cont'd)",
        "body": [],
        "examples": [
          {
            "es": "la confrontación dialéctica",
            "en": "el enfrentamiento de argumentos opuestos mediante el diálogo"
          },
          {
            "es": "la esencia definitoria",
            "en": "el elemento fundamental que determina la naturaleza de algo"
          },
          {
            "es": "el pacto",
            "en": "acuerdo formal entre dos o más partes"
          },
          {
            "es": "la petición",
            "en": "la solicitud formal o insistente de algo"
          },
          {
            "es": "la atención deliberada",
            "en": "la concentración voluntaria en un detalle o un aspecto concreto"
          },
          {
            "es": "el detalle",
            "en": "el elemento pequeño y específico dentro de un conjunto más amplio"
          },
          {
            "es": "el fundamento",
            "en": "la base o el sustento sobre el cual se apoya una afirmación o una teoría"
          },
          {
            "es": "la condición",
            "en": "el requisito necesario para que algo ocurra o sea válido"
          },
          {
            "es": "la reflexión mental",
            "en": "el proceso de pensar detenidamente sobre un asunto"
          },
          {
            "es": "el juicio de valor",
            "en": "la opinión que implica una valoración subjetiva sobre algo"
          },
          {
            "es": "el parecer",
            "en": "juicio u opinión que alguien expresa sobre algo"
          },
          {
            "es": "el ausentismo",
            "en": "la falta reiterada de asistencia al lugar de trabajo o de estudio"
          },
          {
            "es": "el trimestre",
            "en": "el periodo de tres meses en que se divide un año"
          },
          {
            "es": "la estrategia sistemática",
            "en": "el método organizado y coherente para lograr un objetivo"
          },
          {
            "es": "erradicar",
            "en": "eliminar por completo algo indeseado desde su origen"
          },
          {
            "es": "espontáneo",
            "en": "que ocurre de manera natural, sin preparación previa"
          },
          {
            "es": "la seguridad idiomática",
            "en": "la confianza y precisión con que un hablante domina los usos de una lengua"
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "¿Qué diferencia existe entre «pienso en mi futuro» y «¿qué piensas de mi propuesta?»?",
        "options": [
          "Ninguna; ambas expresiones son intercambiables sin cambio de sentido.",
          "La primera expresa reflexión mental sobre un tema; la segunda pide una opinión o un juicio de valor.",
          "La segunda es gramaticalmente incorrecta en el registro culto.",
          "La primera solo se usa en preguntas."
        ],
        "correctIndex": 1,
        "explanation": "«Pensar en algo» implica reflexionar mentalmente sobre ese tema, mientras que «pensar de algo» implica formular una opinión o un juicio sobre ello."
      }
    ]
  },
  {
    "slug": "prepositional-verbs-part-2-mastery-check",
    "level": "C1",
    "number": 62,
    "title": "Prueba de Dominio: Verbos Preposicionales y Régimen Verbal (Parte 2)",
    "summary": "Una prueba centrada en los pares de riesgo del régimen verbal —pensar en frente a pensar de, depender de frente a basarse en— y en la detección de errores por interferencia y analogía interna.",
    "duration": "10 min",
    "sections": [],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "¿Qué es la interferencia lingüística, según lo estudiado en esta lección?",
        "options": [
          "Un recurso estilístico deliberado propio de la escritura literaria.",
          "La influencia involuntaria que la lengua materna del hablante ejerce sobre el régimen preposicional que emplea en español.",
          "Un fenómeno exclusivo de los hablantes nativos del español.",
          "La sustitución sistemática de todos los verbos por sus sinónimos más frecuentes."
        ],
        "correctIndex": 1,
        "explanation": "La interferencia lingüística ocurre cuando el hablante calca la preposición que su idioma materno emplea con un verbo semánticamente equivalente, aplicándola indebidamente al verbo español correspondiente."
      },
      {
        "type": "multiple-choice",
        "question": "¿En qué consiste la analogía interna como fuente de error en el régimen verbal?",
        "options": [
          "En la influencia de una lengua extranjera sobre el español del hablante.",
          "En la extensión de la preposición de un verbo a otro verbo próximo en significado pero distinto en régimen, dentro del propio español.",
          "En la eliminación completa de las preposiciones en el habla informal.",
          "En el uso exclusivo de verbos reflexivos en lugar de verbos preposicionales."
        ],
        "correctIndex": 1,
        "explanation": "La analogía interna surge quando el hablante extiende la preposición de un verbo a otro verbo semánticamente vecino pero con un régimen distinto, como ocurre entre «depender de» y «basarse en»."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa con la preposición fija que exige el verbo.",
        "sentence": "Llevo días pensando ___ la mejor manera de abordar este problema con el equipo.",
        "answer": "en",
        "hint": "Se trata de una reflexión mental sobre un tema, no de una opinión solicitada.",
        "explanation": "«Pensar en algo» implica reflexionar mentalmente sobre ese tema; el régimen con «en» es el que corresponde a esta lectura de reflexión sostenida."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa con la preposición fija que exige el verbo.",
        "sentence": "¿Qué piensas ___ la nueva política de teletrabajo que acaban de anunciar?",
        "answer": "de",
        "hint": "Se está pidiendo una opinión, no una reflexión sostenida.",
        "explanation": "«Pensar de algo» implica formular o pedir una opinión o un juicio sobre ello, un matiz distinto del que aporta «pensar en algo»."
      },
      {
        "type": "multiple-choice",
        "question": "«Después del viaje, no dejaba de pensar en las montañas que había visto». ¿Qué matiz aporta «pensar en» en esta oración?",
        "options": [
          "Una opinión o un juicio de valor sobre las montañas.",
          "Una reflexión mental sostenida, casi obsesiva, sobre un recuerdo concreto.",
          "Una localización física de un objeto en el espacio.",
          "Una determinación obstinada de volver a ese lugar."
        ],
        "correctIndex": 1,
        "explanation": "«Pensar en algo» expresa aquí una reflexión mental que se prolonga en el tiempo, en este caso sobre el recuerdo de las montañas, sin que se esté formulando ninguna opinión o juicio de valor sobre ellas."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa con la preposición fija que exige el verbo.",
        "sentence": "El éxito de la cosecha depende ___ las lluvias que caigan este mes.",
        "answer": "de",
        "hint": "Piensa en el régimen fijo del verbo «depender».",
        "explanation": "El verbo «depender» exige de manera fija la preposición «de» para introducir el factor del que algo resulta condicionado."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa con la preposición fija que exige el verbo.",
        "sentence": "Su hipótesis se basa ___ un estudio de campo realizado durante más de una década.",
        "answer": "en",
        "hint": "Piensa en el régimen fijo del verbo «basarse».",
        "explanation": "El verbo «basarse» exige de manera fija la preposición «en» para introducir el fundamento sobre el cual se apoya una afirmación o una teoría."
      },
      {
        "type": "multi-select",
        "question": "¿Cuáles de las siguientes oraciones contienen un error de régimen verbal provocado por interferencia con el inglés?",
        "options": [
          "Estoy pensando de ti todo el día, no dejo de acordarme de nuestro viaje.",
          "Estoy pensando en ti todo el día, no dejo de acordarme de nuestro viaje.",
          "El resultado final depende en varios factores que todavía no controlamos.",
          "El resultado final depende de varios factores que todavía no controlamos."
        ],
        "correctIndexes": [
          0,
          2
        ],
        "explanation": "«Pensando de ti» calca la estructura inglesa «thinking of you», cuando el régimen correcto de reflexión mental en español es «pensar en»; «depende en» calca de forma semejante la preposición del inglés «depends on», cuando el régimen correcto en español es «depender de»."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Traduce distinguiendo con precisión los dos regímenes del verbo pensar.",
        "source": "What do you think of the new manager? Honestly, I think about her decisions a lot.",
        "answer": "¿Qué piensas de la nueva gerente? La verdad es que pienso mucho en sus decisiones.",
        "altAnswers": [
          "¿Qué te parece la nueva gerente? Sinceramente, pienso bastante en sus decisiones."
        ],
        "explanation": "«¿Qué piensas de...?» pide una opinión, mientras que «pienso en sus decisiones» expresa una reflexión mental sostenida; ambos regímenes conviven en la misma traducción sin ser intercambiables."
      },
      {
        "type": "translate",
        "direction": "es-en",
        "prompt": "Traduce al inglés reconociendo el régimen preposicional de cada verbo.",
        "source": "La calidad final depende de muchos factores, pero sobre todo se basa en la experiencia del equipo.",
        "answer": "The final quality depends on many factors, but above all it is based on the team's experience.",
        "altAnswers": [
          "Final quality depends on many factors, but it's mostly based on the team's experience."
        ],
        "explanation": "«Depender de» y «basarse en» exigen preposiciones distintas e inintercambiables en español, aunque en inglés ambos verbos coincidan en emplear la preposición «on»."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras para expresar una relación de dependencia con su preposición fija.",
        "words": [
          "el",
          "crecimiento",
          "depende",
          "de",
          "la",
          "inversión",
          "inicial",
          "disponible"
        ],
        "translation": "Growth depends on the initial investment available.",
        "explanation": "El verbo «depender» exige de manera fija la preposición «de» para introducir el factor condicionante, en este caso la inversión inicial."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras para expresar el fundamento de una afirmación con su preposición fija.",
        "words": [
          "su",
          "hipótesis",
          "se",
          "basa",
          "en",
          "datos",
          "recientes",
          "y",
          "fiables"
        ],
        "translation": "Their hypothesis is based on recent, reliable data.",
        "explanation": "El verbo «basarse» exige de manera fija la preposición «en» para introducir el fundamento o la evidencia sobre la que se apoya una hipótesis."
      },
      {
        "type": "matching",
        "instructions": "Relaciona cada verbo con el matiz preciso que aporta su régimen preposicional.",
        "pairs": [
          {
            "left": "pensar en",
            "right": "reflexionar mentalmente sobre un tema de forma sostenida"
          },
          {
            "left": "pensar de",
            "right": "formular o pedir una opinión o un juicio de valor"
          },
          {
            "left": "depender de",
            "right": "relacionar un efecto o un resultado con el factor que lo condiciona"
          },
          {
            "left": "basarse en",
            "right": "fundamentar una afirmación o una teoría en una evidencia concreta"
          }
        ],
        "explanation": "Estos cuatro verbos forman dos pares de riesgo clásicos: semánticamente próximos, pero con regímenes preposicionales distintos e inintercambiables entre sí."
      },
      {
        "type": "multi-select",
        "question": "¿Cuáles de las siguientes oraciones combinan correctamente distintos verbos preposicionales, respetando el régimen fijo de cada uno?",
        "options": [
          "Contamos con tu ayuda, ya que el proyecto consiste en digitalizar todo el archivo histórico.",
          "Contamos en tu ayuda, ya que el proyecto consiste con digitalizar todo el archivo histórico.",
          "Insistió en que revisáramos las cifras, pero el resultado depende de factores externos.",
          "Insistió de que revisáramos las cifras, pero el resultado depende en factores externos."
        ],
        "correctIndexes": [
          0,
          2
        ],
        "explanation": "La primera y la tercera oración respetan el régimen fijo de cada verbo («contar con», «consistir en», «insistir en», «depender de»); la segunda y la cuarta invierten indebidamente las preposiciones por analogía interna."
      },
      {
        "type": "multiple-choice",
        "question": "Según el texto, ¿cuál es la estrategia más eficaz para erradicar los errores de régimen verbal en el habla espontánea de un hablante avanzado?",
        "options": [
          "Evitar por completo el uso de verbos preposicionales en la conversación cotidiana.",
          "Reconocer los pares de riesgo —verbos semánticamente vecinos con régimen divergente— y practicarlos de forma sistemática.",
          "Traducir mentalmente cada oración desde la lengua materna antes de hablar.",
          "Memorizar una lista cerrada de excepciones sin relacionarlas entre sí."
        ],
        "correctIndex": 1,
        "explanation": "El texto señala que reconocer los pares de riesgo y practicarlos sistemáticamente es la única estrategia realmente eficaz para erradicar estos errores persistentes, incluso en hablantes de nivel muy avanzado."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa con la preposición fija que exige el verbo, evitando el error de interferencia.",
        "sentence": "No puedo dejar de pensar ___ lo que me dijiste ayer; me tiene preocupado.",
        "answer": "en",
        "hint": "Se trata de una reflexión mental sostenida, no de una opinión.",
        "explanation": "«Pensar en algo» es el régimen correcto para expresar una reflexión mental sostenida; un hablante que calcara del inglés «thinking about» podría cometer aquí el error de sustituir «en» por «de» o «sobre»."
      }
    ]
  },
  {
    "slug": "advanced-discourse-markers-1",
    "level": "C1",
    "number": 63,
    "title": "Conectores Discursivos Avanzados, Part 1 of 6",
    "summary": "Un repertorio de conectores propios de la argumentación formal escrita y oral, capaces de matizar, jerarquizar y cerrar un razonamiento con la precisión propia del registro culto.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Ahora bien y dicho esto: la matización tras la concesión",
        "body": [
          "«Ahora bien» y «dicho esto» comparten una función matizadora muy precisa: introducen un contraste o una salvedad después de haber aceptado, aunque sea parcialmente, la validez de lo dicho anteriormente. A diferencia de «pero», que puede introducir una oposición frontal y a veces abrupta, «ahora bien» señala que el hablante concede el punto anterior antes de añadir una consideración que lo matiza, sin negarlo del todo.",
          "«Dicho esto» cumple una función semejante, pero añade un matiz metadiscursivo explícito: el hablante señala que acaba de cerrar un bloque argumentativo y que va a introducir una idea que reencuadra o relativiza lo anterior. Ambos conectores resultan característicos del discurso argumentativo formal y transmiten una actitud de equilibrio: el hablante no rechaza lo dicho, pero tampoco se conforma con dejarlo sin matizar."
        ],
        "examples": [
          {
            "es": "El plan es ambicioso y bien diseñado. Ahora bien, su coste sigue siendo un obstáculo.",
            "en": "Se acepta el mérito del plan antes de introducir una limitación relevante."
          },
          {
            "es": "Reconozco que el argumento tiene fuerza. Dicho esto, no comparto la conclusión final.",
            "en": "Se cierra un bloque argumentativo antes de relativizar lo dicho."
          },
          {
            "es": "Es cierto que mejoraron los resultados. Ahora bien, todavía están lejos del objetivo.",
            "en": "Concesión parcial seguida de una matización relevante."
          },
          {
            "es": "El informe es exhaustivo. Dicho esto, algunos datos parecen desactualizados.",
            "en": "Reconocimiento inicial seguido de una objeción puntual."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Qué función cumple «ahora bien» en un texto argumentativo?",
            "options": [
              "Introduce una oposición frontal y abrupta a lo dicho anteriormente.",
              "Introduce una salvedad o un matiz tras aceptar parcialmente lo dicho previamente.",
              "Cierra definitivamente el argumento sin posibilidad de matización.",
              "Se usa exclusivamente para resumir todo el texto."
            ],
            "correctIndex": 1,
            "explanation": "«Ahora bien» señala que el hablante concede el punto anterior antes de introducir una consideración que lo matiza, sin negarlo por completo."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "¿Qué función cumple «dicho esto» en un texto argumentativo?",
        "options": [
          "Introduce una enumeración de datos sin relación entre sí.",
          "Señala que se cierra un bloque argumentativo y se va a introducir una idea que lo matiza.",
          "Cierra el texto de forma definitiva sin posibilidad de continuar.",
          "Se usa exclusivamente en el lenguaje jurídico."
        ],
        "correctIndex": 1,
        "explanation": "«Dicho esto» marca metadiscursivamente el cierre de un bloque argumentativo antes de introducir una idea que reencuadra o relativiza lo dicho."
      }
    ]
  },
  {
    "slug": "advanced-discourse-markers-2",
    "level": "C1",
    "number": 64,
    "title": "Conectores Discursivos Avanzados, Part 2 of 6",
    "summary": "Un repertorio de conectores propios de la argumentación formal escrita y oral, capaces de matizar, jerarquizar y cerrar un razonamiento con la precisión propia del registro culto.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "Cabe destacar, cabe señalar y conviene precisar",
        "body": [
          "«Cabe destacar», «cabe señalar» y «conviene precisar» son fórmulas metadiscursivas propias del registro académico y periodístico que el hablante emplea para marcar explícitamente que va a introducir un dato o una idea que considera especialmente relevante. A diferencia de una simple enumeración de datos, estas fórmulas dirigen la atención del lector hacia un punto concreto, señalándolo como digno de una consideración especial.",
          "La diferencia entre estas tres fórmulas es sutil: «cabe destacar» suele introducir un dato positivo o llamativo dentro de una serie; «cabe señalar» tiene un uso más neutro, apto tanto para datos positivos como negativos; y «conviene precisar» se reserva casi siempre para introducir una aclaración que evita una posible ambigüedad. El uso de estas fórmulas cumple una función real de organización textual: guía al lector a través de la jerarquía de importancia que el autor atribuye a cada idea."
        ],
        "examples": [
          {
            "es": "Cabe destacar que las ventas crecieron un veinte por ciento este trimestre.",
            "en": "Se introduce un dato positivo y llamativo dentro de la argumentación."
          },
          {
            "es": "Cabe señalar que persisten algunas dudas sobre la viabilidad del proyecto.",
            "en": "Uso neutro para introducir un dato relevante, en este caso negativo."
          },
          {
            "es": "Conviene precisar que esta cifra no incluye los gastos de mantenimiento.",
            "en": "Se aclara un punto para evitar una posible ambigüedad."
          },
          {
            "es": "Cabe destacar el esfuerzo del equipo durante todo el proceso.",
            "en": "Se resalta un aspecto positivo dentro del desarrollo argumentativo."
          }
        ],
        "checkpoint": [
          {
            "type": "matching",
            "instructions": "Relaciona cada fórmula metadiscursiva con el matiz que aporta.",
            "pairs": [
              {
                "left": "cabe destacar",
                "right": "introduce un dato positivo o llamativo dentro de una serie"
              },
              {
                "left": "cabe señalar",
                "right": "introduce un dato relevante de forma neutra, positivo o negativo"
              },
              {
                "left": "conviene precisar",
                "right": "introduce una aclaración que evita una posible ambigüedad"
              }
            ],
            "explanation": "Aunque las tres fórmulas dirigen la atención hacia un punto relevante, cada una aporta un matiz distinto según el tipo de información que introduce."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "fill-blank",
        "prompt": "Completa con la fórmula que introduce una aclaración para evitar una ambigüedad.",
        "sentence": "___ precisar que esta cifra no incluye los impuestos.",
        "answer": "Conviene",
        "explanation": "«Conviene precisar» se reserva casi siempre para introducir una aclaración que evita una posible ambigüedad.",
        "hint": "Piensa en la fórmula metadiscursiva que introduce aclaraciones."
      }
    ]
  },
  {
    "slug": "advanced-discourse-markers-3",
    "level": "C1",
    "number": 65,
    "title": "Conectores Discursivos Avanzados, Part 3 of 6",
    "summary": "Un repertorio de conectores propios de la argumentación formal escrita y oral, capaces de matizar, jerarquizar y cerrar un razonamiento con la precisión propia del registro culto.",
    "duration": "9 min",
    "sections": [
      {
        "heading": "En última instancia, en definitiva y al fin y al cabo",
        "body": [
          "Los conectores «en última instancia», «en definitiva» y «al fin y al cabo» cierran una secuencia argumentativa señalando la idea que el hablante considera decisiva o resumen del razonamiento expuesto, pero con matices distintos entre sí. «En última instancia» sugiere que, tras agotar todas las consideraciones intermedias, queda un criterio final e irreductible que determina la conclusión.",
          "«En definitiva» funciona como un resumen más neutro, una síntesis del argumento sin necesariamente implicar que se haya llegado al fondo último de la cuestión, mientras que «al fin y al cabo» introduce un matiz más coloquial y a menudo justificativo, como si el hablante recordara al oyente una consideración de sentido común que relativiza la importancia de lo discutido anteriormente. Distinguir estos tres conectores permite calibrar con precisión el grado de contundencia con que se cierra una argumentación."
        ],
        "examples": [
          {
            "es": "En última instancia, la decisión depende del presupuesto disponible.",
            "en": "Se señala el criterio final e irreductible tras considerar otros factores."
          },
          {
            "es": "En definitiva, el proyecto cumplió con los objetivos previstos.",
            "en": "Síntesis neutra del argumento expuesto."
          },
          {
            "es": "Al fin y al cabo, todos cometemos errores alguna vez.",
            "en": "Matiz coloquial y justificativo que relativiza lo discutido."
          },
          {
            "es": "En última instancia, lo que importa es la seguridad de los empleados.",
            "en": "Se identifica el factor decisivo tras sopesar otras consideraciones."
          }
        ],
        "checkpoint": [
          {
            "type": "multi-select",
            "question": "¿Cuáles de las siguientes afirmaciones sobre estos conectores son correctas?",
            "options": [
              "«En última instancia» señala un criterio final tras agotar otras consideraciones.",
              "«Al fin y al cabo» tiene un matiz más coloquial y justificativo.",
              "«En definitiva» siempre implica el nivel más profundo de análisis posible.",
              "Los tres conectores son completamente intercambiables en cualquier contexto."
            ],
            "correctIndexes": [
              0,
              1
            ],
            "explanation": "«En última instancia» señala el criterio decisivo final y «al fin y al cabo» aporta un matiz coloquial justificativo; «en definitiva» es más bien una síntesis neutra, y los tres conectores no son intercambiables sin matices."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multi-select",
        "question": "¿Qué afirmaciones son correctas sobre los conectores de cierre argumentativo?",
        "options": [
          "«En última instancia» señala el criterio decisivo tras agotar otras consideraciones.",
          "«Al fin y al cabo» tiene un matiz coloquial y justificativo.",
          "«En definitiva» es un conector exclusivo del lenguaje jurídico.",
          "Los tres conectores son intercambiables sin ningún matiz."
        ],
        "correctIndexes": [
          0,
          1
        ],
        "explanation": "«En última instancia» y «al fin y al cabo» tienen los matices descritos; «en definitiva» no es exclusivo del lenguaje jurídico, y los tres conectores no son plenamente intercambiables."
      }
    ]
  },
  {
    "slug": "advanced-discourse-markers-4",
    "level": "C1",
    "number": 66,
    "title": "Conectores Discursivos Avanzados, Part 4 of 6",
    "summary": "Un repertorio de conectores propios de la argumentación formal escrita y oral, capaces de matizar, jerarquizar y cerrar un razonamiento con la precisión propia del registro culto.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "So pena de, bajo pena de y a riesgo de",
        "body": [
          "«So pena de», «bajo pena de» y «a riesgo de» son conectores condicional-consecutivos de registro sumamente formal —el primero, prácticamente arcaico fuera de textos jurídicos y solemnes— que introducen una consecuencia negativa como advertencia si no se cumple una determinada condición. «So pena de» y «bajo pena de» proceden del lenguaje jurídico y conservan ese matiz de amenaza institucional o normativa.",
          "«A riesgo de», en cambio, pertenece a un registro formal pero no exclusivamente jurídico, y suele introducir una consecuencia negativa que el propio hablante asume como posible al llevar a cabo una acción, más que una sanción impuesta externamente. La diferencia fundamental entre ambos grupos radica en el origen de la consecuencia negativa: una sanción institucional impuesta por otros, frente a un riesgo asumido voluntariamente por el propio hablante."
        ],
        "examples": [
          {
            "es": "Deberá abandonar el edificio, so pena de ser sancionado.",
            "en": "Advertencia formal de origen institucional o normativo."
          },
          {
            "es": "Queda prohibido fumar en estas instalaciones, bajo pena de multa.",
            "en": "Registro jurídico y solemne, con amenaza de sanción externa."
          },
          {
            "es": "Lo diré con claridad, a riesgo de que algunos se sientan incómodos.",
            "en": "Riesgo asumido voluntariamente por el propio hablante."
          },
          {
            "es": "Se comprometió a terminarlo a tiempo, a riesgo de trabajar todo el fin de semana.",
            "en": "Consecuencia negativa asumida como posible por el hablante."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Qué diferencia principal existe entre «so pena de» y «a riesgo de»?",
            "options": [
              "No hay ninguna diferencia; son completamente intercambiables.",
              "«So pena de» introduce una sanción institucional impuesta por otros; «a riesgo de» introduce un riesgo asumido voluntariamente por el hablante.",
              "«A riesgo de» solo se usa en textos jurídicos.",
              "«So pena de» es un conector moderno de uso coloquial frecuente."
            ],
            "correctIndex": 1,
            "explanation": "«So pena de» procede del lenguaje jurídico y señala una sanción impuesta institucionalmente; «a riesgo de» introduce una consecuencia negativa que el propio hablante asume voluntariamente."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "word-order",
        "prompt": "Ordena las palabras para formar una oración con un conector condicional-consecutivo formal.",
        "words": [
          "deberá",
          "entregar",
          "el",
          "informe",
          "a",
          "tiempo",
          "so",
          "pena",
          "de",
          "perder",
          "la",
          "subvención"
        ],
        "explanation": "«So pena de» introduce, en registro formal y jurídico, la consecuencia negativa si no se cumple la condición establecida."
      }
    ]
  },
  {
    "slug": "advanced-discourse-markers-5",
    "level": "C1",
    "number": 67,
    "title": "Conectores Discursivos Avanzados, Part 5 of 6",
    "summary": "Un repertorio de conectores propios de la argumentación formal escrita y oral, capaces de matizar, jerarquizar y cerrar un razonamiento con la precisión propia del registro culto.",
    "duration": "9 min",
    "sections": [
      {
        "heading": "En la práctica",
        "body": [
          "Moderador: El estudio presentado muestra resultados prometedores. Ahora bien, ¿qué opina el panel sobre su viabilidad económica?",
          "Experta: Cabe destacar que los costos iniciales son elevados, aunque se recuperan a medio plazo.",
          "Moderador: Interesante. ¿Y los riesgos ambientales que se mencionan en el informe?",
          "Experto: Conviene precisar que esos riesgos son mínimos si se siguen los protocolos establecidos.",
          "Experta: Al fin y al cabo, ningún proyecto está exento de riesgos por completo.",
          "Moderador: Entonces, ¿cuál sería, en definitiva, la recomendación final del panel?",
          "Experto: En última instancia, recomendamos aprobar el proyecto con supervisión estricta.",
          "Experta: Estoy de acuerdo, aunque insisto en que debe cumplirse, so pena de suspender la financiación."
        ]
      },
      {
        "heading": "Vocabulario: los conectores discursivos",
        "body": [
          "35 palabras relacionadas con los conectores discursivos."
        ],
        "examples": [
          {
            "es": "el conector discursivo",
            "en": "la palabra o expresión que organiza las relaciones lógicas entre las partes de un discurso"
          },
          {
            "es": "la fórmula metadiscursiva",
            "en": "la expresión que el hablante usa para señalar cómo debe interpretarse lo que está diciendo"
          },
          {
            "es": "el bloque argumentativo",
            "en": "el segmento de un discurso que desarrolla una idea completa dentro de una argumentación"
          },
          {
            "es": "reencuadrar",
            "en": "presentar de nuevo una idea desde una perspectiva distinta que matiza su alcance"
          },
          {
            "es": "relativizar",
            "en": "restar carácter absoluto a una afirmación, situándola dentro de un contexto más amplio"
          },
          {
            "es": "la jerarquía de importancia",
            "en": "el orden que establece qué ideas resultan más relevantes dentro de un texto"
          },
          {
            "es": "la organización textual",
            "en": "la manera en que se estructuran y se relacionan las partes de un texto"
          },
          {
            "es": "la síntesis",
            "en": "el resumen que reúne los elementos esenciales de un razonamiento más extenso"
          },
          {
            "es": "la contundencia",
            "en": "la fuerza y la claridad con que se expresa una afirmación"
          },
          {
            "es": "irreductible",
            "en": "que no puede reducirse ni simplificarse a algo más básico"
          },
          {
            "es": "el criterio decisivo",
            "en": "el factor que determina finalmente una conclusión o una elección"
          },
          {
            "es": "el sentido común",
            "en": "el juicio práctico y compartido que la mayoría de las personas considera razonable"
          },
          {
            "es": "justificativo",
            "en": "que sirve para justificar o dar razón de algo"
          },
          {
            "es": "la advertencia",
            "en": "el aviso que señala un peligro o una consecuencia negativa posible"
          },
          {
            "es": "la sanción institucional",
            "en": "la penalización impuesta formalmente por una autoridad o una entidad"
          },
          {
            "es": "el riesgo asumido",
            "en": "la posibilidad de una consecuencia negativa que alguien acepta voluntariamente"
          },
          {
            "es": "arcaico",
            "en": "que pertenece a una época pasada y ya no se usa habitualmente"
          },
          {
            "es": "la asignación presupuestaria",
            "en": "monto de dinero destinado oficialmente a un fin específico"
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "matching",
        "instructions": "Relaciona cada conector con el matiz que aporta al cerrar una argumentación.",
        "pairs": [
          {
            "left": "en última instancia",
            "right": "señala el criterio final e irreductible tras considerar otros factores"
          },
          {
            "left": "en definitiva",
            "right": "ofrece una síntesis neutra del argumento expuesto"
          },
          {
            "left": "al fin y al cabo",
            "right": "introduce un matiz coloquial y justificativo"
          },
          {
            "left": "cabe destacar",
            "right": "introduce un dato positivo o llamativo dentro de la argumentación"
          }
        ],
        "explanation": "Cada conector cierra o resalta una idea con un matiz de contundencia y registro distinto."
      }
    ]
  },
  {
    "slug": "advanced-discourse-markers-6",
    "level": "C1",
    "number": 68,
    "title": "Conectores Discursivos Avanzados, Part 6 of 6",
    "summary": "Un repertorio de conectores propios de la argumentación formal escrita y oral, capaces de matizar, jerarquizar y cerrar un razonamiento con la precisión propia del registro culto.",
    "duration": "6 min",
    "sections": [
      {
        "heading": "Vocabulario: los conectores discursivos (cont'd)",
        "body": [],
        "examples": [
          {
            "es": "el enfrentamiento dialéctico",
            "en": "confrontación de ideas que se expresa mediante argumentos opuestos"
          },
          {
            "es": "el ensayo argumentativo",
            "en": "el texto que desarrolla y defiende una tesis mediante razonamientos"
          },
          {
            "es": "el panel",
            "en": "el grupo de personas expertas que discute públicamente sobre un tema"
          },
          {
            "es": "la viabilidad",
            "en": "la posibilidad real de que algo pueda llevarse a cabo con éxito"
          },
          {
            "es": "la convención discursiva",
            "en": "norma implícita que rige cómo se organiza un tipo de texto"
          },
          {
            "es": "exento",
            "en": "libre de una obligación, un riesgo o una carga determinada"
          },
          {
            "es": "la recomendación",
            "en": "la sugerencia que se ofrece como la opción más aconsejable"
          },
          {
            "es": "la supervisión estricta",
            "en": "el control riguroso y constante sobre el desarrollo de un proceso"
          },
          {
            "es": "el desarrollo argumentativo",
            "en": "la progresión mediante la cual se exponen y se encadenan los argumentos"
          },
          {
            "es": "la aclaración",
            "en": "la explicación que despeja una duda o evita una interpretación errónea"
          },
          {
            "es": "el equilibrio discursivo",
            "en": "la ponderación entre distintos puntos de vista dentro de un mismo texto"
          },
          {
            "es": "la enumeración",
            "en": "la presentación ordenada de varios elementos, uno tras otro"
          },
          {
            "es": "el desenlace argumentativo",
            "en": "el punto en que una argumentación llega a su conclusión final"
          },
          {
            "es": "la complejidad",
            "en": "la cualidad de un asunto que involucra numerosos factores interrelacionados"
          },
          {
            "es": "el factor determinante",
            "en": "el elemento que resulta decisivo para el resultado de algo"
          },
          {
            "es": "institucional",
            "en": "que pertenece o se refiere a una institución u organismo oficial"
          },
          {
            "es": "la ponderación",
            "en": "la evaluación cuidadosa y equilibrada de los distintos aspectos de una cuestión"
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "¿Cuál es la diferencia principal entre «so pena de» y «a riesgo de»?",
        "options": [
          "No existe ninguna diferencia entre ambos conectores.",
          "«So pena de» introduce una sanción institucional impuesta por otros; «a riesgo de» introduce un riesgo asumido voluntariamente por el hablante.",
          "«A riesgo de» pertenece exclusivamente al lenguaje jurídico.",
          "«So pena de» es un conector de uso coloquial y frecuente hoy en día."
        ],
        "correctIndex": 1,
        "explanation": "«So pena de» procede del lenguaje jurídico y señala una sanción impuesta institucionalmente; «a riesgo de» introduce una consecuencia negativa que el propio hablante asume voluntariamente."
      }
    ]
  },
  {
    "slug": "emphatic-structures-1",
    "level": "C1",
    "number": 69,
    "title": "Estructuras Enfáticas y Focalización, Part 1 of 6",
    "summary": "Un recorrido por los recursos sintácticos que el español emplea para destacar un elemento concreto del discurso: oraciones escindidas, pseudoescindidas, anteposición y otras fórmulas de énfasis.",
    "duration": "9 min",
    "sections": [
      {
        "heading": "Oraciones escindidas con ser",
        "body": [
          "Las oraciones escindidas, también llamadas hendidas, dividen una oración simple en dos segmentos unidos por «ser», con el fin de aislar y destacar uno solo de sus elementos como el más relevante desde el punto de vista informativo. «Fue entonces cuando comprendí todo» separa el momento temporal del resto de la oración, colocándolo tras «fue» para señalarlo como el foco exclusivo de la afirmación, en contraste implícito con cualquier otro momento posible.",
          "Esta estructura, extraordinariamente productiva en español, admite focalizar prácticamente cualquier constituyente de la oración: el sujeto, el complemento directo, o un complemento circunstancial de lugar, tiempo o modo. El verbo «ser» concuerda en tiempo con el verbo de la oración subordinada cuando ambos comparten el mismo marco temporal, y el elemento focalizado suele ir seguido de un relativo que retoma la función sintáctica que ese elemento tenía en la oración original."
        ],
        "examples": [
          {
            "es": "Fue entonces cuando comprendí todo.",
            "en": "Se focaliza el momento temporal, en contraste implícito con otros momentos posibles."
          },
          {
            "es": "Fue él quien tomó la decisión final.",
            "en": "Se focaliza el sujeto de la acción, excluyendo a cualquier otra persona."
          },
          {
            "es": "Fue esa decisión la que cambió el rumbo de la empresa.",
            "en": "Se focaliza el complemento directo como el elemento más relevante."
          },
          {
            "es": "Fue en esa reunión donde se acordaron los nuevos plazos.",
            "en": "Se focaliza el complemento de lugar mediante la estructura escindida."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Qué función cumple la estructura escindida en «fue esa decisión la que cambió todo»?",
            "options": [
              "Introduce una oración condicional.",
              "Aísla y destaca «esa decisión» como el elemento más relevante de la afirmación.",
              "Expresa una duda sobre quién tomó la decisión.",
              "Sustituye a una oración pasiva sin ningún matiz adicional."
            ],
            "correctIndex": 1,
            "explanation": "Las oraciones escindidas dividen la oración en dos segmentos unidos por «ser» para aislar y destacar un solo elemento como foco informativo, en este caso «esa decisión»."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "¿Qué elemento se focaliza en la oración «fue en esa reunión donde se tomó la decisión»?",
        "options": [
          "El sujeto de la oración.",
          "El complemento de lugar.",
          "El complemento directo.",
          "El verbo principal."
        ],
        "correctIndex": 1,
        "explanation": "La estructura escindida focaliza aquí el complemento de lugar, «esa reunión», mediante «ser» seguido del relativo «donde»."
      }
    ]
  },
  {
    "slug": "emphatic-structures-2",
    "level": "C1",
    "number": 70,
    "title": "Estructuras Enfáticas y Focalización, Part 2 of 6",
    "summary": "Un recorrido por los recursos sintácticos que el español emplea para destacar un elemento concreto del discurso: oraciones escindidas, pseudoescindidas, anteposición y otras fórmulas de énfasis.",
    "duration": "9 min",
    "sections": [
      {
        "heading": "Oraciones pseudoescindidas: lo que hizo fue",
        "body": [
          "Las oraciones pseudoescindidas, formadas con «lo que» seguido de un verbo y de «ser», focalizan típicamente una acción o un proceso completo en lugar de un solo constituyente nominal: «lo que hizo fue renunciar sin previo aviso» aísla toda la acción de renunciar como el núcleo informativo de la oración, presentándola con un efecto de sorpresa o de contraste implícito respecto a lo que se esperaba. Esta estructura resulta particularmente eficaz cuando el hablante quiere subrayar la naturaleza inesperada, decisiva o contraria a lo previsto de una acción concreta.",
          "A diferencia de la escindida simple con «ser», la pseudoescindida antepone un pronombre relativo neutro que funciona como sujeto de la oración, seguido del verbo «ser» y, finalmente, del elemento focalizado, que suele ser un infinitivo o una oración completa. Esta construcción es especialmente frecuente en el registro oral formal y en la prosa argumentativa, donde aporta un efecto rítmico de suspenso: el oyente conoce primero que «hizo algo», pero debe esperar hasta el final de la oración para saber exactamente qué acción se está focalizando."
        ],
        "examples": [
          {
            "es": "Lo que hizo fue renunciar sin previo aviso.",
            "en": "Se focaliza toda la acción de renunciar, con efecto de sorpresa."
          },
          {
            "es": "Lo que necesitamos es más tiempo, no más dinero.",
            "en": "Se focaliza la necesidad real, en contraste implícito con otra posibilidad."
          },
          {
            "es": "Lo que consiguió fue empeorar la situación todavía más.",
            "en": "Se focaliza el resultado de la acción, con matiz irónico o crítico."
          },
          {
            "es": "Lo que deberíamos hacer es replantear todo el proyecto desde cero.",
            "en": "Se focaliza la acción recomendada como la más adecuada."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa la oración pseudoescindida focalizando la acción principal.",
            "sentence": "___ (lo que, hacer) fue disculparse ante todo el equipo.",
            "answer": "Lo que hizo",
            "explanation": "La pseudoescindida antepone «lo que» seguido del verbo, para focalizar posteriormente la acción principal tras «fue».",
            "hint": "Se necesita el pronombre relativo neutro seguido del verbo en pasado."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "fill-blank",
        "prompt": "Completa la oración pseudoescindida.",
        "sentence": "___ (lo que, conseguir) fue posponer el problema, no resolverlo.",
        "answer": "Lo que consiguió",
        "explanation": "La pseudoescindida antepone «lo que» seguido del verbo, focalizando después la acción principal tras «fue».",
        "hint": "Se necesita el pronombre relativo neutro seguido del verbo en pasado."
      }
    ]
  },
  {
    "slug": "emphatic-structures-3",
    "level": "C1",
    "number": 71,
    "title": "Estructuras Enfáticas y Focalización, Part 3 of 6",
    "summary": "Un recorrido por los recursos sintácticos que el español emplea para destacar un elemento concreto del discurso: oraciones escindidas, pseudoescindidas, anteposición y otras fórmulas de énfasis.",
    "duration": "10 min",
    "sections": [
      {
        "heading": "Anteposición y focalización sin ser",
        "body": [
          "La anteposición del complemento directo o de otros constituyentes al inicio de la oración constituye otro mecanismo de focalización, esta vez sin recurrir a «ser» ni a un relativo, sino mediante el simple desplazamiento del elemento hacia una posición inicial marcada, generalmente acompañado de un pronombre átono que retoma o reduplica ese complemento. En estructuras más simples, «eso sí que no lo esperaba» antepone el objeto directo, reforzado por el intensificador «sí que», que añade un matiz de contraste enfático respecto a una expectativa previa.",
          "Esta anteposición marcada se distingue claramente del orden neutro sujeto-verbo-objeto del español, y su función pragmática consiste en presentar el elemento anticipado como el tema sobre el que va a versar la oración, o como el elemento sometido a un contraste implícito con otras posibilidades descartadas. El pronombre átono de reduplicación no es opcional en la mayoría de estos casos: su ausencia produce oraciones marcadamente extrañas para un hablante nativo."
        ],
        "examples": [
          {
            "es": "A él fue a quien más le afectó la noticia.",
            "en": "Anteposición del complemento indirecto, reforzada con estructura escindida."
          },
          {
            "es": "Eso sí que no lo esperaba.",
            "en": "Anteposición del objeto directo, reforzada por el intensificador «sí que»."
          },
          {
            "es": "Ese proyecto, lo terminamos entre todos.",
            "en": "El complemento directo se antepone y se retoma mediante el pronombre átono «lo»."
          },
          {
            "es": "A mi hermana la llamé primero que a nadie.",
            "en": "Anteposición del complemento directo de persona, reduplicado con «la»."
          }
        ],
        "checkpoint": [
          {
            "type": "multi-select",
            "question": "¿Qué características tiene la anteposición marcada de un complemento en español?",
            "options": [
              "Requiere generalmente un pronombre átono que retome el elemento anticipado.",
              "Sigue siempre el orden neutro sujeto-verbo-objeto.",
              "Presenta el elemento anticipado como tema o como foco de contraste.",
              "Es completamente opcional y no cambia el significado de la oración."
            ],
            "correctIndexes": [
              0,
              2
            ],
            "explanation": "La anteposición marcada casi siempre exige un pronombre átono de reduplicación y cumple la función pragmática de presentar el elemento como tema o como foco de contraste, alejándose del orden neutro."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multi-select",
        "question": "¿Qué características tiene la anteposición marcada de un complemento en español?",
        "options": [
          "Suele requerir un pronombre átono que retome el elemento anticipado.",
          "Coincide siempre con el orden neutro sujeto-verbo-objeto.",
          "Presenta el elemento anticipado como tema o como foco de contraste.",
          "Nunca aparece en el habla oral, solo en textos escritos."
        ],
        "correctIndexes": [
          0,
          2
        ],
        "explanation": "La anteposición marcada exige casi siempre un pronombre átono de reduplicación y presenta el elemento anticipado como tema o foco de contraste, apartándose del orden neutro."
      }
    ]
  },
  {
    "slug": "emphatic-structures-4",
    "level": "C1",
    "number": 72,
    "title": "Estructuras Enfáticas y Focalización, Part 4 of 6",
    "summary": "Un recorrido por los recursos sintácticos que el español emplea para destacar un elemento concreto del discurso: oraciones escindidas, pseudoescindidas, anteposición y otras fórmulas de énfasis.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Otras estructuras enfáticas: no... sino que, si algo..., eso es... y sí enfático",
        "body": [
          "Además de las estructuras escindidas y la anteposición, el español cuenta con recursos enfáticos más puntuales que refuerzan un elemento concreto del discurso. La construcción «no... sino que» rechaza explícitamente una posibilidad antes de afirmar la correcta, con un efecto de corrección enfática. La fórmula «si algo... eso es...» funciona de manera semejante a la escindida, pero introduce primero una concesión hipotética mínima antes de afirmar con fuerza el elemento focalizado.",
          "Por último, el «sí» enfático antepuesto al verbo —no confundir con el «sí» afirmativo aislado— refuerza la veracidad de una afirmación frente a una duda o una negación previa, explícita o implícita: «yo sí que se lo advertí» contradice enfáticamente una suposición contraria, subrayando mediante la partícula «sí que» que la acción efectivamente tuvo lugar."
        ],
        "examples": [
          {
            "es": "No se trata de que no quiera ayudar, sino que no puede hacerlo ahora.",
            "en": "Se rechaza una posibilidad antes de afirmar la correcta, con efecto de corrección enfática."
          },
          {
            "es": "Si algo le sobra a este equipo, eso es talento.",
            "en": "Concesión hipotética mínima seguida de una afirmación enfática del elemento focalizado."
          },
          {
            "es": "Yo sí que se lo advertí, aunque no me hiciera caso.",
            "en": "El «sí que» enfático refuerza la veracidad frente a una duda implícita."
          },
          {
            "es": "Si hay algo que valoro de verdad, eso es la sinceridad.",
            "en": "Estructura enfática que aísla el valor focalizado tras una concesión mínima."
          }
        ],
        "checkpoint": [
          {
            "type": "matching",
            "instructions": "Relaciona cada estructura enfática con su función específica.",
            "pairs": [
              {
                "left": "no... sino que",
                "right": "rechaza una posibilidad antes de afirmar la correcta"
              },
              {
                "left": "si algo..., eso es...",
                "right": "introduce una concesión mínima antes de afirmar con fuerza el elemento focalizado"
              },
              {
                "left": "sí que + verbo",
                "right": "refuerza la veracidad de una afirmación frente a una duda o negación previa"
              }
            ],
            "explanation": "Cada estructura enfática cumple una función distinta dentro del repertorio de recursos que el español ofrece para focalizar un elemento del discurso."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "word-order",
        "prompt": "Ordena las palabras para formar una oración escindida que focalice al sujeto.",
        "words": [
          "fue",
          "ella",
          "quien",
          "propuso",
          "la",
          "solución"
        ],
        "explanation": "La estructura escindida «fue ella quien» focaliza al sujeto «ella», excluyendo implícitamente a cualquier otra persona."
      }
    ]
  },
  {
    "slug": "emphatic-structures-5",
    "level": "C1",
    "number": 73,
    "title": "Estructuras Enfáticas y Focalización, Part 5 of 6",
    "summary": "Un recorrido por los recursos sintácticos que el español emplea para destacar un elemento concreto del discurso: oraciones escindidas, pseudoescindidas, anteposición y otras fórmulas de énfasis.",
    "duration": "10 min",
    "sections": [
      {
        "heading": "En la práctica",
        "body": [
          "Diego: ¿De verdad decidiste dejar el trabajo así, de repente?",
          "Elena: Fue en esa reunión donde entendí que no podía seguir así.",
          "Diego: ¿Y qué fue lo que más te hizo decidirte?",
          "Elena: Lo que más me pesó fue sentir que nadie valoraba mi esfuerzo.",
          "Diego: Eso sí que lo entiendo perfectamente, la verdad.",
          "Elena: No es que no me gustara el trabajo, sino que ya no me sentía respetada.",
          "Diego: Si algo admiro de ti, eso es el valor para tomar decisiones así.",
          "Elena: Gracias. Yo sí que necesitaba escuchar eso hoy."
        ]
      },
      {
        "heading": "Vocabulario: las estructuras enfáticas",
        "body": [
          "35 palabras relacionadas con las estructuras enfáticas."
        ],
        "examples": [
          {
            "es": "la oración escindida",
            "en": "la estructura que divide una oración en dos segmentos unidos por «ser» para focalizar un elemento"
          },
          {
            "es": "la inversión sintáctica",
            "en": "cambio en el orden habitual de las palabras dentro de una oración"
          },
          {
            "es": "el foco informativo",
            "en": "el elemento de una oración que se presenta como la información más relevante o nueva"
          },
          {
            "es": "el constituyente",
            "en": "el elemento sintáctico que forma parte de la estructura de una oración"
          },
          {
            "es": "la oración pseudoescindida",
            "en": "la estructura formada con «lo que» y «ser» que focaliza una acción o un proceso completo"
          },
          {
            "es": "el pronombre relativo neutro",
            "en": "la palabra «lo que», que no concuerda en género ni número con ningún sustantivo concreto"
          },
          {
            "es": "el efecto de suspenso",
            "en": "la sensación de expectativa que se genera al retrasar la información clave de un enunciado"
          },
          {
            "es": "la anteposición",
            "en": "el desplazamiento de un elemento hacia el inicio de la oración con fines de énfasis"
          },
          {
            "es": "el pronombre átono",
            "en": "la forma pronominal breve y sin acento propio que acompaña al verbo"
          },
          {
            "es": "la reduplicación pronominal",
            "en": "la repetición de un complemento mediante un pronombre átono que lo retoma"
          },
          {
            "es": "el orden neutro",
            "en": "la disposición habitual de los elementos de una oración sin marcación enfática"
          },
          {
            "es": "la función pragmática",
            "en": "el efecto comunicativo que cumple una estructura más allá de su significado literal"
          },
          {
            "es": "el tema discursivo",
            "en": "el elemento sobre el cual versa principalmente una oración o un fragmento de discurso"
          },
          {
            "es": "el contraste implícito",
            "en": "la oposición sugerida, aunque no expresada abiertamente, entre dos posibilidades"
          },
          {
            "es": "la corrección enfática",
            "en": "la rectificación explícita de una afirmación mediante una estructura de énfasis"
          },
          {
            "es": "la concesión hipotética",
            "en": "la admisión provisional de una posibilidad, planteada como punto de partida de un razonamiento"
          },
          {
            "es": "la veracidad",
            "en": "la cualidad de ser verdadero o conforme a los hechos"
          },
          {
            "es": "la partícula enfática",
            "en": "la palabra breve cuya función principal es reforzar el significado de otro elemento"
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "matching",
        "instructions": "Relaciona cada estructura enfática con su función específica.",
        "pairs": [
          {
            "left": "no... sino que",
            "right": "rechaza una posibilidad antes de afirmar la correcta"
          },
          {
            "left": "si algo..., eso es...",
            "right": "introduce una concesión mínima antes de afirmar con fuerza el elemento focalizado"
          },
          {
            "left": "sí que + verbo",
            "right": "refuerza la veracidad de una afirmación frente a una duda o negación previa"
          },
          {
            "left": "lo que... fue...",
            "right": "focaliza una acción o un proceso completo con efecto de suspenso"
          }
        ],
        "explanation": "Cada estructura enfática cumple una función distinta dentro del repertorio de recursos que el español ofrece para focalizar un elemento del discurso."
      }
    ]
  },
  {
    "slug": "emphatic-structures-6",
    "level": "C1",
    "number": 74,
    "title": "Estructuras Enfáticas y Focalización, Part 6 of 6",
    "summary": "Un recorrido por los recursos sintácticos que el español emplea para destacar un elemento concreto del discurso: oraciones escindidas, pseudoescindidas, anteposición y otras fórmulas de énfasis.",
    "duration": "6 min",
    "sections": [
      {
        "heading": "Vocabulario: las estructuras enfáticas (cont'd)",
        "body": [],
        "examples": [
          {
            "es": "la intensificación",
            "en": "el refuerzo del significado o la fuerza expresiva de una palabra o una estructura"
          },
          {
            "es": "la expectativa previa",
            "en": "la suposición o la creencia que alguien tenía antes de conocer un hecho"
          },
          {
            "es": "el realce expresivo",
            "en": "efecto de destacar un elemento del discurso para darle mayor fuerza"
          },
          {
            "es": "la rectificación",
            "en": "la corrección de una afirmación o una idea previamente expresada"
          },
          {
            "es": "el énfasis",
            "en": "la fuerza especial con que se destaca un elemento dentro de un enunciado"
          },
          {
            "es": "la marcación sintáctica",
            "en": "el conjunto de recursos formales que señalan una estructura como distinta del orden neutro"
          },
          {
            "es": "el suspenso rítmico",
            "en": "el efecto de expectativa generado por la disposición particular de los elementos en una oración"
          },
          {
            "es": "el elemento sometido a contraste",
            "en": "la parte de la oración que se opone implícitamente a otras posibilidades descartadas"
          },
          {
            "es": "la prosa argumentativa",
            "en": "el tipo de escritura que desarrolla y defiende ideas mediante razonamientos"
          },
          {
            "es": "la posición inicial marcada",
            "en": "el lugar al comienzo de la oración que señala un uso enfático y no neutro"
          },
          {
            "es": "inesperado",
            "en": "que ocurre sin que se anticipara previamente"
          },
          {
            "es": "decisivo",
            "en": "que resulta determinante para el resultado final de algo"
          },
          {
            "es": "el complemento indirecto",
            "en": "el elemento de la oración que designa al destinatario o al beneficiario de la acción"
          },
          {
            "es": "el complemento circunstancial",
            "en": "el elemento que añade información sobre el lugar, el tiempo, el modo u otras circunstancias"
          },
          {
            "es": "la reduplicación",
            "en": "la repetición de un elemento con una función gramatical determinada"
          },
          {
            "es": "el repertorio de recursos",
            "en": "el conjunto de herramientas disponibles dentro de una lengua para lograr un efecto determinado"
          },
          {
            "es": "la marca enfática",
            "en": "el rasgo formal que señala que una estructura tiene valor de énfasis"
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "¿Qué función cumple el «sí que» enfático en «yo sí que se lo advertí»?",
        "options": [
          "Expresa una duda sobre si la advertencia ocurrió.",
          "Refuerza la veracidad de la afirmación frente a una suposición contraria.",
          "Introduce una oración condicional.",
          "Sustituye a un pronombre relativo."
        ],
        "correctIndex": 1,
        "explanation": "El «sí que» enfático antepuesto al verbo refuerza la veracidad de la afirmación, contradiciendo una duda o suposición contraria, explícita o implícita."
      }
    ]
  },
  {
    "slug": "future-conditional-conjecture-1",
    "level": "C1",
    "number": 75,
    "title": "Futuro y Condicional para Conjetura, Part 1 of 6",
    "summary": "Un estudio de los usos epistémicos del futuro y el condicional para expresar conjetura sobre el presente y el pasado, junto con otras fórmulas de probabilidad como deber de, a lo mejor y quizás.",
    "duration": "9 min",
    "sections": [
      {
        "heading": "El futuro de probabilidad para el presente",
        "body": [
          "El futuro simple, además de su valor prototípico de posterioridad temporal, cumple en español una función epistémica bien consolidada: expresar una conjetura o una suposición sobre el presente, sin que ello implique referencia alguna a un momento futuro. «Serán las tres» no es una predicción sobre la hora que será en algún momento venidero, sino una estimación aproximada de la hora actual, formulada por alguien que calcula la hora a partir de indicios indirectos, como la luz del día.",
          "Este uso, denominado futuro de probabilidad o futuro epistémico, convive sin conflicto con el futuro temporal propiamente dicho, y el contexto discursivo —nunca la morfología verbal, idéntica en ambos casos— es lo que permite al oyente distinguir entre una predicción sobre el porvenir y una conjetura sobre el presente. «Estará en casa a estas horas» no predice que alguien llegará a casa en el futuro, sino que conjetura, en el momento mismo del habla, dónde se encuentra esa persona ahora."
        ],
        "examples": [
          {
            "es": "Serán las tres de la tarde, más o menos.",
            "en": "Conjetura sobre la hora actual, no predicción sobre el futuro."
          },
          {
            "es": "Estará en casa a estas horas, imagino.",
            "en": "Suposición sobre la ubicación actual de alguien, formulada en presente."
          },
          {
            "es": "Tendrá unos cuarenta años, calculo.",
            "en": "Estimación aproximada de la edad actual de una persona."
          },
          {
            "es": "Hará mucho frío ahí fuera, por cómo va abrigada la gente.",
            "en": "Conjetura sobre el clima actual a partir de un indicio observado."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Qué expresa el futuro en la oración «serán las cinco, más o menos»?",
            "options": [
              "Una predicción sobre la hora que será en un momento futuro concreto.",
              "Una conjetura aproximada sobre la hora actual, en el momento mismo del habla.",
              "Una orden indirecta para que alguien revise la hora.",
              "Una obligación de llegar a las cinco en punto."
            ],
            "correctIndex": 1,
            "explanation": "El futuro de probabilidad expresa una conjetura sobre el presente, no una predicción sobre el futuro; el contexto, no la morfología, permite distinguir ambos usos."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "¿Qué expresa el futuro en «tendrá unos cuarenta años»?",
        "options": [
          "Una predicción sobre la edad que alguien tendrá en el futuro.",
          "Una conjetura aproximada sobre la edad actual de esa persona.",
          "Una orden para que alguien revele su edad.",
          "Una obligación relacionada con cumplir años."
        ],
        "correctIndex": 1,
        "explanation": "El futuro de probabilidad expresa aquí una estimación aproximada sobre el presente, no una predicción sobre el futuro."
      }
    ]
  },
  {
    "slug": "future-conditional-conjecture-2",
    "level": "C1",
    "number": 76,
    "title": "Futuro y Condicional para Conjetura, Part 2 of 6",
    "summary": "Un estudio de los usos epistémicos del futuro y el condicional para expresar conjetura sobre el presente y el pasado, junto con otras fórmulas de probabilidad como deber de, a lo mejor y quizás.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "El condicional de probabilidad para el pasado",
        "body": [
          "El condicional simple traslada al pasado exactamente el mismo mecanismo epistémico que el futuro aplica al presente: expresa una conjetura o una estimación aproximada sobre un momento ya transcurrido, sin implicar ningún matiz de irrealidad, como sí ocurre en otros usos del condicional. «Tendría unos treinta años cuando lo conocí» no plantea una hipótesis contraria a los hechos, sino que estima, de manera aproximada, la edad que esa persona tenía en aquel momento pasado.",
          "Este condicional de probabilidad resulta especialmente frecuente en la narración de recuerdos y anécdotas personales, donde el hablante reconstruye datos que no memorizó con exactitud en su momento, pero que puede estimar razonablemente a partir del contexto que sí recuerda con claridad. Distinguir este uso del condicional hipotético habitual exige atender al contexto: la ausencia de cualquier prótasis condicional explícita o implícita es la señal más fiable de que se trata de una conjetura sobre el pasado, no de una hipótesis contrafactual."
        ],
        "examples": [
          {
            "es": "Tendría unos treinta años cuando lo conocí.",
            "en": "Estimación aproximada de la edad de alguien en un momento pasado."
          },
          {
            "es": "Serían las diez de la noche cuando por fin llegamos.",
            "en": "Conjetura sobre la hora aproximada de un evento pasado."
          },
          {
            "es": "Habría unas cien personas en aquella sala, calculo.",
            "en": "Estimación aproximada de una cantidad en un momento pasado."
          },
          {
            "es": "Estaría muy cansado, porque se durmió enseguida.",
            "en": "Conjetura sobre el estado de alguien en un momento pasado, inferida de un indicio."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa con el condicional de probabilidad para expresar una conjetura sobre el pasado.",
            "sentence": "___ (ser) las ocho cuando sonó el teléfono, aunque no estoy del todo seguro.",
            "answer": "Serían",
            "explanation": "El condicional de probabilidad estima de manera aproximada la hora de un evento pasado, sin implicar ninguna condición hipotética.",
            "hint": "Se trata de una conjetura sobre el pasado, no de una condición con «si»."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "fill-blank",
        "prompt": "Completa con el condicional de probabilidad.",
        "sentence": "___ (haber) unas cincuenta personas en la sala, calculo.",
        "answer": "Habría",
        "explanation": "El condicional de probabilidad estima de manera aproximada una cantidad en un momento pasado, sin implicar ninguna condición hipotética.",
        "hint": "Se trata de una conjetura sobre el pasado, no de una condición con «si»."
      }
    ]
  },
  {
    "slug": "future-conditional-conjecture-3",
    "level": "C1",
    "number": 77,
    "title": "Futuro y Condicional para Conjetura, Part 3 of 6",
    "summary": "Un estudio de los usos epistémicos del futuro y el condicional para expresar conjetura sobre el presente y el pasado, junto con otras fórmulas de probabilidad como deber de, a lo mejor y quizás.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Deber de más infinitivo frente a deber más infinitivo",
        "body": [
          "La norma académica tradicional distingue con nitidez «deber» + infinitivo, que expresa obligación, de «deber de» + infinitivo, que expresa conjetura o probabilidad. Esta distinción, aunque clara en la teoría gramatical, se ha erosionado considerablemente en el uso real de la lengua: en el habla espontánea, incluso entre hablantes cultos, «deber» sin «de» se emplea con frecuencia para expresar conjetura, generando una superposición que los propios gramáticos reconocen como generalizada.",
          "A pesar de esta erosión en el uso oral, el registro escrito formal sigue recomendando mantener la distinción original: reservar «deber» sin preposición para la obligación, y «deber de» para la conjetura. Un hablante que domina este nivel debe conocer ambos matices para poder aplicar la forma correcta según el registro y el contexto comunicativo, sin caer en la hipercorrección de rechazar por completo un uso que, aunque no ideal desde la norma, resulta plenamente comprensible y frecuente en el habla cotidiana."
        ],
        "examples": [
          {
            "es": "Debes entregar el informe antes del viernes.",
            "en": "Obligación clara, sin preposición «de»."
          },
          {
            "es": "Debe de ser muy tarde ya, mira cómo está la calle.",
            "en": "Conjetura sobre la hora, con «deber de»."
          },
          {
            "es": "Debe de haber unas cien personas en la sala.",
            "en": "Estimación conjetural de una cantidad, con «deber de»."
          },
          {
            "es": "Deben terminar el proyecto esta semana sin falta.",
            "en": "Obligación explícita dirigida a un grupo de personas."
          }
        ],
        "checkpoint": [
          {
            "type": "multi-select",
            "question": "¿Cuáles de las siguientes oraciones expresan conjetura, según la distinción normativa tradicional?",
            "options": [
              "Debes llamar a tu madre esta noche.",
              "Debe de haber un problema con la conexión.",
              "Deben presentar el proyecto antes del lunes.",
              "Debe de tener unos cincuenta años."
            ],
            "correctIndexes": [
              1,
              3
            ],
            "explanation": "«Deber de» + infinitivo expresa conjetura según la norma tradicional; «deber» sin preposición expresa obligación."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multi-select",
        "question": "¿Cuáles de las siguientes oraciones expresan conjetura, según la distinción normativa tradicional entre «deber» y «deber de»?",
        "options": [
          "Debe de tener unos treinta años.",
          "Debes terminar el informe hoy mismo.",
          "Debe de haber un error en los datos.",
          "Deben firmar el contrato antes del viernes."
        ],
        "correctIndexes": [
          0,
          2
        ],
        "explanation": "«Deber de» + infinitivo expresa conjetura según la norma tradicional; «deber» sin preposición expresa obligación."
      }
    ]
  },
  {
    "slug": "future-conditional-conjecture-4",
    "level": "C1",
    "number": 78,
    "title": "Futuro y Condicional para Conjetura, Part 4 of 6",
    "summary": "Un estudio de los usos epistémicos del futuro y el condicional para expresar conjetura sobre el presente y el pasado, junto con otras fórmulas de probabilidad como deber de, a lo mejor y quizás.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "A lo mejor frente a quizás, quizá y tal vez",
        "body": [
          "«A lo mejor» se distingue de «quizás», «quizá» y «tal vez» en un rasgo gramatical decisivo: mientras que estos últimos admiten tanto el indicativo como el subjuntivo, con una diferencia de grado de probabilidad según la posición respecto al verbo, «a lo mejor» exige siempre el indicativo, sin excepción alguna. «Quizás venga mañana» y «quizás viene mañana» son ambas gramaticales, aunque con un matiz de mayor incertidumbre en la variante con subjuntivo.",
          "Esta diferencia refleja distintos orígenes históricos de cada expresión: «a lo mejor» se ha fijado como locución adverbial que no altera el modo del verbo que sigue, mientras que «quizás» y sus variantes conservan una capacidad selectora de modo verbal que le permite matizar sutilmente el grado de probabilidad percibida. En el registro coloquial, «a lo mejor» resulta considerablemente más frecuente que «quizás», que se percibe como ligeramente más formal o literario."
        ],
        "examples": [
          {
            "es": "A lo mejor viene mañana a la reunión.",
            "en": "Siempre con indicativo; «a lo mejor» no admite subjuntivo bajo ninguna circunstancia."
          },
          {
            "es": "Quizás venga mañana a la reunión.",
            "en": "El subjuntivo añade un matiz de mayor incertidumbre respecto al indicativo."
          },
          {
            "es": "Quizás viene mañana a la reunión.",
            "en": "El indicativo transmite una probabilidad ligeramente mayor que el subjuntivo."
          },
          {
            "es": "Tal vez tengamos que replantear todo el plan.",
            "en": "Uso de subjuntivo con «tal vez», con matiz de incertidumbre."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Qué diferencia gramatical distingue a «a lo mejor» de «quizás»?",
            "options": [
              "«A lo mejor» exige siempre indicativo; «quizás» admite tanto indicativo como subjuntivo.",
              "«A lo mejor» solo se usa en preguntas; «quizás» solo en afirmaciones.",
              "«Quizás» es gramaticalmente incorrecto en el español actual.",
              "No existe ninguna diferencia gramatical entre ambas expresiones."
            ],
            "correctIndex": 0,
            "explanation": "«A lo mejor» funciona como una locución adverbial que exige siempre indicativo, mientras que «quizás» conserva la capacidad de seleccionar indicativo o subjuntivo según el grado de incertidumbre que el hablante quiera expresar."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "word-order",
        "prompt": "Ordena las palabras para formar una oración con «a lo mejor» y modo indicativo.",
        "words": [
          "a",
          "lo",
          "mejor",
          "viene",
          "mañana",
          "a",
          "la",
          "reunión"
        ],
        "explanation": "«A lo mejor» exige siempre indicativo, sin excepción alguna, a diferencia de «quizás»."
      }
    ]
  },
  {
    "slug": "future-conditional-conjecture-5",
    "level": "C1",
    "number": 79,
    "title": "Futuro y Condicional para Conjetura, Part 5 of 6",
    "summary": "Un estudio de los usos epistémicos del futuro y el condicional para expresar conjetura sobre el presente y el pasado, junto con otras fórmulas de probabilidad como deber de, a lo mejor y quizás.",
    "duration": "9 min",
    "sections": [
      {
        "heading": "En la práctica",
        "body": [
          "Pablo: ¿Qué hora será? No encuentro el reloj por ninguna parte.",
          "Marisa: Serán las nueve, más o menos, por la luz que entra por la ventana.",
          "Pablo: ¿Y dónde estará Carlos? Ya debería haber llegado.",
          "Marisa: Estará todavía en el metro; a lo mejor hay algún retraso en la línea.",
          "Pablo: Tendría unos veinte minutos de camino la última vez que vino, ¿no?",
          "Marisa: Sí, aunque quizás haya tomado un camino distinto esta vez.",
          "Pablo: Debe de estar al llegar, entonces. Vamos preparando algo mientras tanto.",
          "Marisa: Buena idea. Tal vez le apetezca comer algo nada más entrar."
        ]
      },
      {
        "heading": "Vocabulario: la conjetura y la probabilidad",
        "body": [
          "34 palabras relacionadas con la conjetura y la probabilidad."
        ],
        "examples": [
          {
            "es": "la suposición fundamentada",
            "en": "la suposición apoyada en indicios razonables, aunque no en pruebas concluyentes"
          },
          {
            "es": "el valor epistémico",
            "en": "el matiz de una forma verbal relacionado con el grado de conocimiento o certeza del hablante"
          },
          {
            "es": "la estimación aproximada",
            "en": "el cálculo que se acerca a un valor real sin pretender exactitud"
          },
          {
            "es": "el indicio indirecto",
            "en": "la señal que permite inferir algo sin observarlo directamente"
          },
          {
            "es": "el devenir",
            "en": "curso de los acontecimientos a medida que transcurre el tiempo"
          },
          {
            "es": "la morfología verbal",
            "en": "la forma que adopta un verbo según su conjugación"
          },
          {
            "es": "el contexto discursivo",
            "en": "el conjunto de circunstancias lingüísticas que rodean un enunciado y permiten interpretarlo"
          },
          {
            "es": "la prótasis condicional",
            "en": "la cláusula que introduce la condición dentro de una oración condicional"
          },
          {
            "es": "contrafactual",
            "en": "que plantea una situación contraria a los hechos realmente ocurridos"
          },
          {
            "es": "la erosión lingüística",
            "en": "el debilitamiento progresivo de una distinción o una regla dentro del uso de una lengua"
          },
          {
            "es": "la hipercorrección",
            "en": "el error que se comete al aplicar una regla de forma excesiva o en contextos donde no corresponde"
          },
          {
            "es": "la locución adverbial",
            "en": "el grupo de palabras que funciona en conjunto como un adverbio"
          },
          {
            "es": "la capacidad selectora de modo",
            "en": "la propiedad de ciertas expresiones de determinar si el verbo va en indicativo o en subjuntivo"
          },
          {
            "es": "el grado de incertidumbre",
            "en": "el nivel de duda que el hablante expresa sobre la veracidad de algo"
          },
          {
            "es": "el cálculo mental",
            "en": "la operación aproximada que se realiza mentalmente sin instrumentos precisos"
          },
          {
            "es": "impreciso",
            "en": "que carece de exactitud o de precisión"
          },
          {
            "es": "verosímil",
            "en": "que resulta creíble dentro de lo esperado"
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "matching",
        "instructions": "Relaciona cada expresión de conjetura con el matiz que aporta.",
        "pairs": [
          {
            "left": "a lo mejor",
            "right": "exige siempre indicativo, sin variación de modo"
          },
          {
            "left": "quizás + subjuntivo",
            "right": "expresa un mayor grado de incertidumbre"
          },
          {
            "left": "quizás + indicativo",
            "right": "expresa una probabilidad ligeramente mayor"
          },
          {
            "left": "deber de + infinitivo",
            "right": "expresa conjetura según la norma tradicional"
          }
        ],
        "explanation": "Cada expresión de probabilidad o conjetura codifica un matiz distinto de certeza según el modo verbal que selecciona o exige."
      }
    ]
  },
  {
    "slug": "future-conditional-conjecture-6",
    "level": "C1",
    "number": 80,
    "title": "Futuro y Condicional para Conjetura, Part 6 of 6",
    "summary": "Un estudio de los usos epistémicos del futuro y el condicional para expresar conjetura sobre el presente y el pasado, junto con otras fórmulas de probabilidad como deber de, a lo mejor y quizás.",
    "duration": "6 min",
    "sections": [
      {
        "heading": "Vocabulario: la conjetura y la probabilidad (cont'd)",
        "body": [],
        "examples": [
          {
            "es": "la reconstrucción de un recuerdo",
            "en": "el proceso de recuperar mentalmente los detalles de un hecho pasado"
          },
          {
            "es": "la anécdota personal",
            "en": "el relato breve de un suceso vivido por quien lo cuenta"
          },
          {
            "es": "el registro oral espontáneo",
            "en": "la forma de hablar natural y sin preparación previa"
          },
          {
            "es": "el registro escrito formal",
            "en": "el estilo cuidado y normativo propio de los textos escritos serios"
          },
          {
            "es": "la norma académica",
            "en": "el conjunto de reglas establecidas por las instituciones que regulan una lengua"
          },
          {
            "es": "la superposición de usos",
            "en": "la coincidencia de dos formas o construcciones dentro de una misma función"
          },
          {
            "es": "generalizado",
            "en": "que se ha extendido ampliamente entre los hablantes de una lengua"
          },
          {
            "es": "la obligación",
            "en": "el deber o la exigencia de realizar algo determinado"
          },
          {
            "es": "la probabilidad",
            "en": "la posibilidad, calculada o estimada, de que algo sea cierto o suceda"
          },
          {
            "es": "el origen histórico",
            "en": "el punto de partida temporal a partir del cual se desarrolló algo"
          },
          {
            "es": "coloquial",
            "en": "propio del habla cotidiana e informal"
          },
          {
            "es": "literario",
            "en": "propio de la lengua escrita con intención estética o artística"
          },
          {
            "es": "el matiz de certeza",
            "en": "la sutil diferencia en el grado de seguridad que transmite una afirmación"
          },
          {
            "es": "presuponer",
            "en": "dar por sentado algo antes de que se confirme"
          },
          {
            "es": "la fiabilidad del indicio",
            "en": "el grado de confianza que puede depositarse en una señal para extraer una conclusión"
          },
          {
            "es": "la aproximación numérica",
            "en": "el cálculo que se acerca a una cantidad exacta sin pretender precisión total"
          },
          {
            "es": "el hábito lingüístico",
            "en": "la costumbre asentada en el uso repetido de una lengua por parte de sus hablantes"
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "¿Qué diferencia de matiz existe entre «quizás venga mañana» y «quizás viene mañana»?",
        "options": [
          "No existe ninguna diferencia real entre ambas oraciones.",
          "La primera, con subjuntivo, transmite mayor incertidumbre que la segunda, con indicativo.",
          "La segunda es gramaticalmente incorrecta en cualquier registro.",
          "La primera solo se usa en preguntas, nunca en afirmaciones."
        ],
        "correctIndex": 1,
        "explanation": "«Quizás» conserva la capacidad de seleccionar modo verbal: el subjuntivo transmite un grado de incertidumbre mayor que el indicativo."
      }
    ]
  },
  {
    "slug": "formal-informal-register-1",
    "level": "C1",
    "number": 81,
    "title": "Registro Formal vs. Informal: Tú, Usted y Vos, Part 1 of 6",
    "summary": "Domina los matices pragmáticos del tuteo, el ustedeo y el voseo, y aprende a leer el contexto social para elegir el tratamiento adecuado en cualquier país hispanohablante.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "La pragmática del tratamiento: más allá de la gramática",
        "body": [
          "Elegir entre tú, usted o vos no es una cuestión puramente gramatical, sino un acto pragmático que comunica información social: distancia, jerarquía, afecto o respeto. Un mismo hablante puede tutear a su hermano menor, ustedear a su suegra y vosear a un amigo de la infancia, todo en la misma tarde, sin que ninguna de esas elecciones sea incorrecta. Lo que cambia no es la corrección gramatical, sino el mensaje social que cada forma transmite en ese contexto preciso.",
          "Por eso, dominar el registro exige algo más que memorizar conjugaciones: exige leer la situación. Factores como la edad relativa de los interlocutores, el ámbito de la conversación, el grado de familiaridad previa y, sobre todo, la norma vigente en cada país determinan qué forma resulta natural y cuál suena forzada, distante o, peor aún, irrespetuosa."
        ],
        "examples": [
          {
            "es": "tutear a alguien",
            "en": "dirigirse a una persona empleando la forma tú"
          },
          {
            "es": "ustedear",
            "en": "tratar a alguien de usted, incluso en un contexto cercano, como ocurre en ciertas regiones"
          },
          {
            "es": "guardar las distancias",
            "en": "mantener un trato formal para no invadir el espacio social del otro"
          },
          {
            "es": "romper el hielo",
            "en": "reducir la formalidad inicial entre dos personas para generar confianza"
          },
          {
            "es": "un trato desigual",
            "en": "una relación en la que una persona usa tú y la otra usted, reflejando una jerarquía"
          },
          {
            "es": "sonar impostado",
            "en": "resultar artificial o poco natural en el habla"
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "Según el texto, ¿qué determina realmente la elección entre tú y usted en una conversación?",
            "options": [
              "Únicamente la edad exacta de los interlocutores",
              "El mensaje social que cada forma transmite en ese contexto",
              "Una regla gramatical fija e invariable en todo el mundo hispanohablante",
              "El nivel de estudios de quien habla"
            ],
            "correctIndex": 1,
            "explanation": "El texto subraya que la elección de tratamiento es un acto pragmático: comunica distancia, jerarquía o afecto según el contexto, no una simple regla gramatical."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "¿En cuál de los siguientes países resulta más habitual tutear incluso a un desconocido en una tienda?",
        "options": [
          "España",
          "Colombia",
          "Perú",
          "Bolivia"
        ],
        "correctIndex": 0,
        "explanation": "En España el tuteo se ha extendido de tal manera que es la opción habitual incluso entre desconocidos en contextos comerciales o de servicio."
      }
    ]
  },
  {
    "slug": "formal-informal-register-2",
    "level": "C1",
    "number": 82,
    "title": "Registro Formal vs. Informal: Tú, Usted y Vos, Part 2 of 6",
    "summary": "Domina los matices pragmáticos del tuteo, el ustedeo y el voseo, y aprende a leer el contexto social para elegir el tratamiento adecuado en cualquier país hispanohablante.",
    "duration": "9 min",
    "sections": [
      {
        "heading": "Los factores que condicionan la elección del tratamiento",
        "body": [
          "La edad relativa suele ser el factor más determinante: en casi todo el mundo hispanohablante, dirigirse a una persona considerablemente mayor con tú, sin que medie una invitación explícita, puede percibirse como una falta de respeto. Del mismo modo, el ámbito profesional impone sus propias reglas: quien se dirige a una autoridad, o un empleado que se dirige a la dirección general, recurrirá casi siempre al usted, independientemente de la edad de ambos.",
          "La jerarquía institucional actúa de forma parecida a la edad: en un hospital, en un cuartel o en una notaría, el tratamiento suele reflejar la posición de cada persona dentro de esa estructura, más que su relación personal. Sin embargo, el factor más difícil de calibrar para quien aprende español es la norma regional, precisamente porque varía tanto de un país a otro que una fórmula perfectamente natural en un lugar puede sonar fría, e incluso ofensiva, en otro."
        ],
        "examples": [
          {
            "es": "la jerarquía institucional",
            "en": "el orden de autoridad dentro de una organización, que suele condicionar el tratamiento"
          },
          {
            "es": "por invitación explícita",
            "en": "cuando alguien autoriza abiertamente a otra persona a tutearlo"
          },
          {
            "es": "un gesto de deferencia",
            "en": "una muestra de respeto hacia alguien de mayor edad o rango"
          },
          {
            "es": "la norma regional",
            "en": "el uso predominante y aceptado en un país o zona determinada"
          },
          {
            "es": "sonar frío",
            "en": "transmitir una distancia excesiva o falta de calidez en el trato"
          },
          {
            "es": "calibrar una situación",
            "en": "evaluar con cuidado las circunstancias antes de actuar"
          }
        ],
        "checkpoint": [
          {
            "type": "multi-select",
            "question": "¿Cuáles de los siguientes factores condicionan, según el texto, la elección del tratamiento?",
            "options": [
              "La edad relativa de los interlocutores",
              "El ámbito profesional o institucional",
              "El color de la ropa que lleva el interlocutor",
              "La norma vigente en el país"
            ],
            "correctIndexes": [
              0,
              1,
              3
            ],
            "explanation": "El texto menciona la edad, el ámbito profesional o institucional y la norma regional como factores determinantes; el vestuario no tiene ninguna relevancia pragmática en este terreno."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multi-select",
        "question": "¿Cuáles de las siguientes situaciones suelen exigir el uso de usted, según lo estudiado?",
        "options": [
          "Dirigirse a un juez en un tribunal",
          "Hablar con un hermano menor en casa",
          "Dirigirse a una persona considerablemente mayor sin invitación previa",
          "Escribir una nota a un compañero de infancia"
        ],
        "correctIndexes": [
          0,
          2
        ],
        "explanation": "El ámbito judicial y el trato con una persona mucho mayor sin invitación previa suelen exigir usted; el trato familiar o entre amigos de infancia favorece el tuteo."
      }
    ]
  },
  {
    "slug": "formal-informal-register-3",
    "level": "C1",
    "number": 83,
    "title": "Registro Formal vs. Informal: Tú, Usted y Vos, Part 3 of 6",
    "summary": "Domina los matices pragmáticos del tuteo, el ustedeo y el voseo, y aprende a leer el contexto social para elegir el tratamiento adecuado en cualquier país hispanohablante.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Cuando tutear es un error y cuando es un gesto de cercanía",
        "body": [
          "La variación regional en este terreno es enorme. En España, el tuteo se ha extendido de tal manera que resulta habitual incluso entre desconocidos, en tiendas, restaurantes o consultas médicas; usar usted allí con alguien de edad semejante puede sonar excesivamente distante o incluso cómico. En buena parte de Hispanoamérica, en cambio, el usted sigue siendo la opción por defecto ante un desconocido, y tutear sin más a un dependiente puede interpretarse como una falta de educación.",
          "Colombia ofrece un matiz particular: en ciertas regiones del país, el ustedeo se emplea incluso entre parejas y amigos íntimos, como fórmula de cariño y no de distancia, lo que contradice la intuición de quien asocia el usted únicamente con la formalidad. Esta paradoja ilustra por qué ninguna regla universal sirve: lo que en un país señala cercanía, en otro señala justamente lo contrario, y quien aprende debe calibrar su oído a cada contexto nacional en lugar de aplicar una fórmula fija."
        ],
        "examples": [
          {
            "es": "el ustedeo afectivo",
            "en": "el uso de usted entre personas cercanas como muestra de cariño, no de distancia"
          },
          {
            "es": "por defecto",
            "en": "como opción habitual cuando no hay ninguna indicación en contra"
          },
          {
            "es": "resultar excesivo",
            "en": "sobrepasar lo que la situación exige, ya sea por exceso de formalidad o de confianza"
          },
          {
            "es": "una falta de educación",
            "en": "un comportamiento que se considera descortés según las normas sociales"
          },
          {
            "es": "contradecir la intuición",
            "en": "ir en contra de lo que uno esperaría de forma natural"
          },
          {
            "es": "calibrar el oído",
            "en": "afinar la percepción para captar los matices de una lengua o un contexto"
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa la afirmación sobre el fenómeno colombiano descrito en el texto.",
            "sentence": "En algunas regiones de Colombia, el ustedeo funciona como una fórmula ___, no de distancia.",
            "answer": "afectiva",
            "explanation": "El texto explica que en ciertas zonas de Colombia el usted se usa entre personas cercanas precisamente como muestra de cariño.",
            "hint": "Piensa en el sentimiento que transmite ese trato entre parejas y amigos íntimos."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "fill-blank",
        "prompt": "Completa la oración según lo estudiado sobre el ustedeo colombiano.",
        "sentence": "En ciertas zonas de Colombia, dos personas que se quieren mucho pueden hablarse de ___ sin que eso implique distancia.",
        "answer": "usted",
        "explanation": "El ustedeo afectivo demuestra que el usted no siempre indica formalidad; en algunas regiones colombianas expresa cercanía."
      }
    ]
  },
  {
    "slug": "formal-informal-register-4",
    "level": "C1",
    "number": 84,
    "title": "Registro Formal vs. Informal: Tú, Usted y Vos, Part 4 of 6",
    "summary": "Domina los matices pragmáticos del tuteo, el ustedeo y el voseo, y aprende a leer el contexto social para elegir el tratamiento adecuado en cualquier país hispanohablante.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "El cambio de registro dentro de una misma conversación",
        "body": [
          "El tratamiento no siempre permanece fijo a lo largo de un intercambio. Es habitual que una negociación, una entrevista o una primera reunión de trabajo comiencen en usted y evolucionen hacia el tú a medida que ambas partes perciben una afinidad o deciden relajar la formalidad inicial. Ese tránsito suele señalizarse con una frase explícita, como una invitación directa a tutearse, más que producirse de forma espontánea y silenciosa.",
          "También ocurre el proceso inverso, aunque con menor frecuencia: un desacuerdo serio o un conflicto pueden llevar a que alguien pase súbitamente del tú al usted, empleando la formalidad como una herramienta para marcar distancia o disgusto. En ambos casos, el cambio de registro funciona como una señal social tan elocuente como cualquier palabra, y saber interpretarla forma parte de una competencia comunicativa avanzada."
        ],
        "examples": [
          {
            "es": "tutearse mutuamente",
            "en": "acordar entre dos personas dejar de lado el usted y pasar a tratarse de tú"
          },
          {
            "es": "relajar la formalidad",
            "en": "reducir gradualmente la distancia protocolaria en una conversación"
          },
          {
            "es": "marcar distancia",
            "en": "usar el lenguaje, entre otros recursos, para señalar un alejamiento emocional o social"
          },
          {
            "es": "una señal elocuente",
            "en": "un indicio que comunica un significado claro sin necesidad de explicarlo"
          },
          {
            "es": "un tránsito silencioso",
            "en": "un cambio que ocurre sin que nadie lo anuncie de forma explícita"
          }
        ],
        "checkpoint": [
          {
            "type": "word-order",
            "prompt": "Ordena las palabras para formar una oración coherente sobre el cambio de registro.",
            "words": [
              "la",
              "negociación",
              "comenzó",
              "en",
              "usted",
              "y",
              "terminó",
              "en",
              "tú"
            ],
            "explanation": "La oración describe el tránsito típico de una conversación formal hacia una más cercana: 'La negociación comenzó en usted y terminó en tú'."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "word-order",
        "prompt": "Ordena las palabras para formar una oración sobre el cambio de registro en una negociación.",
        "words": [
          "ambas",
          "partes",
          "decidieron",
          "tutearse",
          "tras",
          "ganar",
          "confianza"
        ],
        "explanation": "La oración resultante describe cómo dos personas pasan del usted al tú una vez que se genera confianza mutua: 'Ambas partes decidieron tutearse tras ganar confianza'."
      }
    ]
  },
  {
    "slug": "formal-informal-register-5",
    "level": "C1",
    "number": 85,
    "title": "Registro Formal vs. Informal: Tú, Usted y Vos, Part 5 of 6",
    "summary": "Domina los matices pragmáticos del tuteo, el ustedeo y el voseo, y aprende a leer el contexto social para elegir el tratamiento adecuado en cualquier país hispanohablante.",
    "duration": "6 min",
    "sections": [
      {
        "heading": "En la práctica",
        "body": [
          "— Buenas tardes, licenciada. Le agradezco que haya podido recibirme con tan poca antelación.",
          "— Al contrario, es un placer. Tome asiento, por favor. ¿Le ofrezco un café?",
          "— Se lo agradezco, pero no se moleste.",
          "— Bueno, entremos en materia. Según entiendo, su propuesta busca ampliar la colaboración entre ambas empresas.",
          "— Así es. Creemos que existe un margen considerable para crecer juntos si logramos alinear los plazos.",
          "— Me parece razonable. Oiga, llevamos ya un rato hablando de usted a usted... ¿le molesta si nos tuteamos? Se respira mejor así.",
          "— Para nada, al contrario, se lo iba a proponer yo. Entonces, decías que el margen de crecimiento es considerable...",
          "— Exacto. Si revisas la última cifra que te envié, verás que el potencial es incluso mayor de lo que proyectamos al inicio.",
          "— Déjame revisarla con calma y te confirmo mañana. ¿Te parece si seguimos por correo electrónico?",
          "— Perfecto, así lo hacemos. Gracias por tu tiempo."
        ]
      }
    ],
    "exercises": [
      {
        "type": "matching",
        "instructions": "Relaciona cada país o región con el rasgo de tratamiento que mejor lo describe.",
        "pairs": [
          {
            "left": "España",
            "right": "el tuteo generalizado incluso con desconocidos"
          },
          {
            "left": "ciertas regiones de Colombia",
            "right": "el ustedeo afectivo entre parejas y amigos íntimos"
          },
          {
            "left": "gran parte de Hispanoamérica",
            "right": "el usted como opción por defecto ante un desconocido"
          },
          {
            "left": "un entorno judicial o notarial",
            "right": "un tratamiento condicionado por la jerarquía institucional"
          }
        ],
        "explanation": "Cada región o contexto favorece un patrón distinto de tratamiento, y ninguno de ellos es universal dentro del mundo hispanohablante."
      }
    ]
  },
  {
    "slug": "formal-informal-register-6",
    "level": "C1",
    "number": 86,
    "title": "Registro Formal vs. Informal: Tú, Usted y Vos, Part 6 of 6",
    "summary": "Domina los matices pragmáticos del tuteo, el ustedeo y el voseo, y aprende a leer el contexto social para elegir el tratamiento adecuado en cualquier país hispanohablante.",
    "duration": "9 min",
    "sections": [
      {
        "heading": "Vocabulario: el registro y el tratamiento",
        "body": [
          "35 palabras relacionadas con el registro y el tratamiento."
        ],
        "examples": [
          {
            "es": "el tuteo",
            "en": "el uso de la forma tú al dirigirse a alguien"
          },
          {
            "es": "el ustedeo",
            "en": "el uso de la forma usted al dirigirse a alguien"
          },
          {
            "es": "la cortesía verbal",
            "en": "el conjunto de fórmulas y actitudes lingüísticas que expresan respeto hacia el interlocutor"
          },
          {
            "es": "la distancia interpersonal",
            "en": "el grado de cercanía o alejamiento social entre dos personas"
          },
          {
            "es": "la confianza social",
            "en": "el grado de familiaridad que permite un trato más cercano"
          },
          {
            "es": "el tratamiento",
            "en": "la forma gramatical y social que se usa para dirigirse a alguien"
          },
          {
            "es": "la deferencia",
            "en": "una muestra de respeto hacia otra persona, generalmente por su edad o su posición"
          },
          {
            "es": "la jerarquía social",
            "en": "el orden de posiciones dentro de una estructura social"
          },
          {
            "es": "el interlocutor",
            "en": "la persona con quien se sostiene una conversación"
          },
          {
            "es": "la formalidad",
            "en": "el grado de solemnidad y respeto protocolario en una interacción"
          },
          {
            "es": "la familiaridad",
            "en": "el grado de confianza y cercanía entre dos personas"
          },
          {
            "es": "el desconocido",
            "en": "una persona con la que no existe trato previo"
          },
          {
            "es": "la solemnidad",
            "en": "el carácter grave y ceremonioso de una situación o un acto"
          },
          {
            "es": "la llaneza",
            "en": "la sencillez y falta de afectación en el trato con los demás"
          },
          {
            "es": "el respeto reverencial",
            "en": "una muestra de respeto marcada, dirigida a alguien de autoridad o edad considerable"
          },
          {
            "es": "la asimetría social",
            "en": "la desigualdad de posición entre dos personas dentro de una relación"
          },
          {
            "es": "el protocolo",
            "en": "el conjunto de normas que rigen el comportamiento en actos formales"
          },
          {
            "es": "la etiqueta social",
            "en": "el conjunto de normas de comportamiento aceptadas socialmente"
          },
          {
            "es": "la condescendencia",
            "en": "una actitud de superioridad disfrazada de amabilidad hacia otra persona"
          },
          {
            "es": "el registro elevado",
            "en": "un nivel de habla especialmente formal y cuidado"
          },
          {
            "es": "la sobriedad expresiva",
            "en": "la contención y mesura en el modo de expresarse"
          },
          {
            "es": "la cercanía",
            "en": "el grado de proximidad afectiva o social entre dos personas"
          },
          {
            "es": "la brecha generacional",
            "en": "la diferencia de costumbres y percepciones entre generaciones distintas"
          },
          {
            "es": "el trato de cortesía",
            "en": "la manera respetuosa de dirigirse a alguien"
          },
          {
            "es": "la reverencia social",
            "en": "una actitud de gran respeto y sumisión hacia otra persona"
          },
          {
            "es": "el pronombre de tratamiento",
            "en": "la palabra gramatical, como tú, usted o vos, que indica el tipo de trato"
          },
          {
            "es": "la fórmula de cortesía",
            "en": "una expresión fija que se usa para mostrar respeto o amabilidad"
          },
          {
            "es": "el vínculo jerárquico",
            "en": "la relación que existe entre personas de distinto rango o posición"
          },
          {
            "es": "la afabilidad",
            "en": "la cualidad de ser amable y agradable en el trato"
          },
          {
            "es": "la rigidez protocolar",
            "en": "la falta de flexibilidad en el cumplimiento de las normas formales"
          },
          {
            "es": "el atrevimiento social",
            "en": "la osadía de romper una norma de trato esperada"
          },
          {
            "es": "la irreverencia",
            "en": "la falta de respeto hacia algo o alguien que merecería consideración"
          },
          {
            "es": "la campechanía",
            "en": "la sencillez y el trato afable, sin formalismos, propio de alguien cercano"
          },
          {
            "es": "el desparpajo",
            "en": "la soltura y desenvoltura al hablar, a veces rozando la informalidad excesiva"
          },
          {
            "es": "la fórmula de tratamiento",
            "en": "la palabra o expresión convencional que indica el grado de respeto o cercanía hacia el interlocutor"
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "¿Qué señala, según el texto, el paso súbito del tú al usted durante un desacuerdo?",
        "options": [
          "Un aumento de la confianza entre los interlocutores",
          "Un intento de marcar distancia o disgusto",
          "Un simple error gramatical sin intención",
          "Una costumbre exclusiva del ámbito académico"
        ],
        "correctIndex": 1,
        "explanation": "El texto explica que, en un conflicto, pasar del tú al usted puede emplearse deliberadamente como una herramienta para marcar distancia o disgusto."
      }
    ]
  },
  {
    "slug": "voseo-part-1-1",
    "level": "C1",
    "number": 87,
    "title": "El Voseo: Gramática y Uso (Parte 1 de 2), Part 1 of 3",
    "summary": "Estudia la conjugación, la extensión geográfica y los usos sociales del voseo, desde el vos rioplatense hasta las variantes centroamericanas, y aprende a reconocerlo y emplearlo con corrección dentro de su propia norma.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "Origen y extensión geográfica del voseo",
        "body": [
          "El voseo no es una deformación del español ni una curiosidad marginal, sino la continuación de una forma de tratamiento medieval —el vos— que en la península terminó por desaparecer, mientras que en amplias zonas de América se consolidó como norma culta. Argentina, Uruguay y Paraguay lo emplean de manera generalizada y sin ningún estigma social, hasta el punto de que el tuteo puede sonar allí artificioso en el habla cotidiana.",
          "Fuera del Río de la Plata, el voseo también predomina en buena parte de Centroamérica —Costa Rica, Nicaragua, Guatemala, Honduras y El Salvador— aunque con variantes en su prestigio social: en algunos de esos países convive con el tuteo según el contexto, mientras que en otros el vos es la forma no marcada, es decir, la que se usa por defecto sin ninguna connotación especial."
        ],
        "examples": [
          {
            "es": "la forma no marcada",
            "en": "la opción que se usa por defecto, sin que comunique ningún matiz especial"
          },
          {
            "es": "gozar de prestigio",
            "en": "estar socialmente bien considerado dentro de una comunidad de habla"
          },
          {
            "es": "convivir con el tuteo",
            "en": "usarse alternadamente junto con la forma tú según el contexto"
          },
          {
            "es": "una norma culta",
            "en": "un uso considerado correcto y aceptado por los hablantes instruidos de una región"
          },
          {
            "es": "sonar artificioso",
            "en": "resultar poco natural o forzado en el habla espontánea"
          },
          {
            "es": "consolidarse como norma",
            "en": "llegar a establecerse de forma estable y generalizada"
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Qué representa históricamente el voseo, según el texto?",
            "options": [
              "Una deformación reciente del habla juvenil",
              "La continuación de una forma medieval que se perdió en la península",
              "Una invención exclusiva del siglo veinte",
              "Una traducción literal de otra lengua"
            ],
            "correctIndex": 1,
            "explanation": "El texto explica que el vos proviene de una forma de tratamiento medieval que desapareció en España pero se consolidó como norma en amplias zonas de América."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "¿En cuál de los siguientes países el voseo es la forma generalizada y sin estigma social?",
        "options": [
          "España",
          "Argentina",
          "México",
          "Cuba"
        ],
        "correctIndex": 1,
        "explanation": "En Argentina, junto con Uruguay y Paraguay, el voseo se usa de manera generalizada y goza de pleno prestigio social."
      }
    ]
  },
  {
    "slug": "voseo-part-1-2",
    "level": "C1",
    "number": 88,
    "title": "El Voseo: Gramática y Uso (Parte 1 de 2), Part 2 of 3",
    "summary": "Estudia la conjugación, la extensión geográfica y los usos sociales del voseo, desde el vos rioplatense hasta las variantes centroamericanas, y aprende a reconocerlo y emplearlo con corrección dentro de su propia norma.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "La conjugación voseante en el presente y el imperativo",
        "body": [
          "La marca más reconocible del voseo aparece en el presente de indicativo, donde la forma verbal se acentúa en la última sílaba y pierde el diptongo característico de la conjugación tuteante: vos tenés, vos podés, vos querés, frente a tú tienes, tú puedes, tú quieres. Esta desinencia aguda —terminada en -ás, -és o -ís según la conjugación— es la que delata de inmediato a un hablante voseante ante cualquier oído entrenado.",
          "El imperativo sigue una lógica parecida y resulta, de hecho, más regular que el tuteante: vení, tené, decí, conservan el acento en la misma sílaba que el infinitivo, sin las irregularidades que complican el imperativo de tú, como ven o ten. En cambio, otros tiempos verbales —el pretérito, el futuro, el subjuntivo— no presentan diferencias con la conjugación tuteante, por lo que el voseo, lejos de ser un sistema paralelo completo, se concentra sobre todo en el presente y el imperativo."
        ],
        "examples": [
          {
            "es": "la desinencia aguda",
            "en": "la terminación verbal que lleva el acento en la última sílaba"
          },
          {
            "es": "perder el diptongo",
            "en": "simplificar una vocal doble de la raíz verbal, como ocurre en tenés frente a tienes"
          },
          {
            "es": "el imperativo voseante",
            "en": "la forma de mandato propia del voseo, como vení o tené"
          },
          {
            "es": "un sistema paralelo",
            "en": "un conjunto de formas que funciona junto a otro sin sustituirlo por completo"
          },
          {
            "es": "delatar al hablante",
            "en": "revelar de inmediato el origen o la variedad dialectal de una persona"
          },
          {
            "es": "un oído entrenado",
            "en": "la capacidad de distinguir matices dialectales gracias a la práctica y la exposición"
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa la conjugación voseante del verbo poder en presente.",
            "sentence": "Vos ___ venir cuando quieras, no hay ningún problema.",
            "answer": "podés",
            "explanation": "La conjugación voseante del presente de poder es podés, con acento agudo en la última sílaba.",
            "hint": "Piensa en la desinencia aguda terminada en -és."
          },
          {
            "type": "multiple-choice",
            "question": "¿Cuál de las siguientes formas corresponde al imperativo voseante del verbo venir?",
            "options": [
              "ven",
              "vení",
              "vienes",
              "vinieras"
            ],
            "correctIndex": 1,
            "explanation": "El imperativo voseante conserva el acento en la misma sílaba que el infinitivo, por lo que la forma correcta es vení."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "fill-blank",
        "prompt": "Completa la conjugación voseante del verbo querer en presente.",
        "sentence": "¿Qué ___ tomar, un café o un mate?",
        "answer": "querés",
        "explanation": "La forma voseante del presente de querer lleva el acento en la última sílaba: querés."
      }
    ]
  },
  {
    "slug": "voseo-part-1-3",
    "level": "C1",
    "number": 89,
    "title": "El Voseo: Gramática y Uso (Parte 1 de 2), Part 3 of 3",
    "summary": "Estudia la conjugación, la extensión geográfica y los usos sociales del voseo, desde el vos rioplatense hasta las variantes centroamericanas, y aprende a reconocerlo y emplearlo con corrección dentro de su propia norma.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "El voseo y el registro: un pronombre sin ustedeo excluyente",
        "body": [
          "Una confusión frecuente entre quienes aprenden español es suponer que el voseo elimina la distinción de registro, cuando en realidad convive perfectamente con ella. En el Río de la Plata, por ejemplo, el vos ocupa el lugar del tú como forma de confianza, pero el usted sigue existiendo y cumpliendo la misma función formal que en cualquier otra variedad: se emplea con desconocidos de cierta edad, en trámites oficiales o ante una autoridad.",
          "Lo que cambia, entonces, no es la existencia del contraste formal-informal, sino cuál de las dos formas informales —tú o vos— ocupa ese espacio. Un hablante rioplatense que aprende que en España se dice tú no está aprendiendo una forma más formal que la suya, sino simplemente la variante geográfica equivalente a su propio vos."
        ],
        "examples": [
          {
            "es": "ocupar el lugar de",
            "en": "sustituir funcionalmente a otra forma dentro de un mismo sistema"
          },
          {
            "es": "la variante geográfica equivalente",
            "en": "la forma que cumple la misma función en otra región del mundo hispanohablante"
          },
          {
            "es": "el contraste formal-informal",
            "en": "la oposición entre un trato cercano y uno respetuoso dentro de una lengua"
          },
          {
            "es": "cumplir una función formal",
            "en": "servir para expresar respeto o distancia en una interacción"
          },
          {
            "es": "una confusión frecuente",
            "en": "un malentendido que se repite habitualmente entre ciertos hablantes o aprendientes"
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "Según el texto, ¿qué relación existe entre el voseo rioplatense y el usted?",
            "options": [
              "El voseo elimina por completo la existencia del usted",
              "El usted sigue existiendo y cumple la misma función formal que en otras variedades",
              "El usted solo se usa en textos escritos, nunca en el habla",
              "El voseo y el usted nunca coexisten en un mismo país"
            ],
            "correctIndex": 1,
            "explanation": "El texto aclara que el vos sustituye al tú en su función de confianza, pero el usted conserva plenamente su función formal."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multi-select",
        "question": "¿Cuáles de las siguientes regiones emplean el voseo de forma extendida?",
        "options": [
          "Río de la Plata",
          "Costa Rica",
          "España peninsular",
          "Guatemala"
        ],
        "correctIndexes": [
          0,
          1,
          3
        ],
        "explanation": "El Río de la Plata, Costa Rica y Guatemala son zonas donde el voseo predomina; en la España peninsular el voseo desapareció hace siglos."
      }
    ]
  },
  {
    "slug": "voseo-part-1-mastery-check",
    "level": "C1",
    "number": 90,
    "title": "Prueba de Dominio: El Voseo (Parte 1)",
    "summary": "Una prueba que exige reconocer el origen, la extensión geográfica y la conjugación del voseo, y aplicar con soltura sus formas verbales a diálogos y contextos regionales inéditos.",
    "duration": "10 min",
    "sections": [],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "¿Cómo describirías con mayor precisión el estatus histórico del voseo dentro de la lengua española?",
        "options": [
          "Es un fenómeno reciente surgido del habla juvenil de internet.",
          "Es la continuación de una forma de tratamiento medieval que desapareció en la península pero se consolidó como norma culta en amplias zonas de América.",
          "Es una traducción directa de una forma de tratamiento propia del portugués.",
          "Es un uso exclusivo de la lengua escrita, ausente por completo del habla oral."
        ],
        "correctIndex": 1,
        "explanation": "El vos proviene de una forma de tratamiento medieval que se perdió en España, mientras que en amplias zonas de América se consolidó como norma culta, generalizada y sin estigma social en varios países."
      },
      {
        "type": "multi-select",
        "question": "¿Cuáles de las siguientes regiones emplean el voseo de manera generalizada y sin ningún estigma social, según lo estudiado?",
        "options": [
          "Argentina",
          "Uruguay",
          "Paraguay",
          "España peninsular"
        ],
        "correctIndexes": [
          0,
          1,
          2
        ],
        "explanation": "Argentina, Uruguay y Paraguay emplean el voseo de manera generalizada y sin ningún estigma social; en la España peninsular, en cambio, el voseo desapareció hace siglos."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la conjugación voseante del verbo hablar en presente.",
        "sentence": "Vos ___ (hablar) demasiado rápido para que te entienda bien.",
        "answer": "hablás",
        "hint": "Piensa en la desinencia aguda terminada en -ás.",
        "explanation": "La conjugación voseante del presente de «hablar» es «hablás», con el acento desplazado a la última sílaba, frente a la forma tuteante «hablas»."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la conjugación voseante del verbo pensar en presente.",
        "sentence": "¿Qué ___ (pensar) vos de esta propuesta que acabamos de recibir?",
        "answer": "pensás",
        "hint": "Piensa en la desinencia aguda terminada en -ás; además, el voseo elimina el diptongo de la raíz.",
        "explanation": "La forma voseante «pensás» pierde el diptongo característico de la conjugación tuteante «piensas», además de desplazar el acento a la última sílaba."
      },
      {
        "type": "multiple-choice",
        "question": "¿Cuál de las siguientes formas corresponde al imperativo voseante del verbo poner?",
        "options": [
          "pon",
          "poné",
          "pones",
          "pusieras"
        ],
        "correctIndex": 1,
        "explanation": "El imperativo voseante conserva el acento en la misma sílaba que el infinitivo y resulta más regular que el tuteante; por eso la forma correcta es «poné», sin la irregularidad que presenta «pon»."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa con el imperativo voseante del verbo volver.",
        "sentence": "___ (volver) temprano, que mañana salimos de viaje muy de mañana.",
        "answer": "Volvé",
        "hint": "El imperativo voseante conserva el acento en la misma sílaba que el infinitivo.",
        "explanation": "El imperativo voseante «volvé» conserva el acento en la misma sílaba que el infinitivo «volver», a diferencia del imperativo tuteante «vuelve», que presenta diptongación irregular."
      },
      {
        "type": "multiple-choice",
        "question": "¿En qué tiempos verbales la conjugación voseante y la tuteante no presentan, por lo general, ninguna diferencia?",
        "options": [
          "El presente de indicativo y el imperativo",
          "El pretérito, el futuro y el subjuntivo",
          "Todos los tiempos verbales sin excepción",
          "Únicamente el presente de subjuntivo"
        ],
        "correctIndex": 1,
        "explanation": "El voseo se concentra sobre todo en el presente de indicativo y el imperativo; el pretérito, el futuro y el subjuntivo no presentan, por lo general, diferencias respecto de la conjugación tuteante."
      },
      {
        "type": "multi-select",
        "question": "¿Cuáles de las siguientes formas verbales corresponden a una conjugación voseante correcta?",
        "options": [
          "tenés",
          "hablás",
          "vienes",
          "podés",
          "haces"
        ],
        "correctIndexes": [
          0,
          1,
          3
        ],
        "explanation": "«Tenés», «hablás» y «podés» son formas voseantes correctas, con la desinencia aguda característica; «vienes» y «haces» corresponden, en cambio, a la conjugación tuteante."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras para formar una oración con conjugación voseante.",
        "words": [
          "vos",
          "hablás",
          "demasiado",
          "rápido",
          "para",
          "mí"
        ],
        "translation": "You talk too fast for me.",
        "explanation": "«Hablás» es la forma voseante del presente de «hablar», con la desinencia aguda desplazada a la última sílaba."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras para formar una pregunta característica del habla voseante.",
        "words": [
          "de",
          "dónde",
          "sos",
          "vos"
        ],
        "translation": "Where are you from?",
        "explanation": "«Sos» es la forma voseante del presente del verbo «ser», empleada en lugar de la forma tuteante «eres»."
      },
      {
        "type": "multiple-choice",
        "question": "¿Cuál es la forma voseante del verbo «ser» en presente de indicativo?",
        "options": [
          "eres",
          "sos",
          "es",
          "fuiste"
        ],
        "correctIndex": 1,
        "explanation": "La forma voseante del presente de «ser» es «sos», con la misma desinencia aguda que caracteriza al resto de la conjugación voseante regular."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Traduce empleando la conjugación voseante correspondiente a ambos verbos.",
        "source": "Where are you from? Do you speak Portuguese too?",
        "answer": "¿De dónde sos vos? ¿Hablás portugués también?",
        "altAnswers": [
          "¿Vos de dónde sos? ¿También hablás portugués?"
        ],
        "explanation": "«Sos» y «hablás» son las formas voseantes de «ser» y «hablar» en presente, ambas con la desinencia aguda característica y, en el caso de «hablás», sin el diptongo que presentaría la forma tuteante."
      },
      {
        "type": "translate",
        "direction": "es-en",
        "prompt": "Traduce al inglés reconociendo la distinción de registro que conserva el voseo.",
        "source": "Vos podés confiar en mí, pero con el jefe siempre hay que hablar de usted.",
        "answer": "You can trust me, but you always have to address the boss formally, using 'usted'.",
        "altAnswers": [
          "You can trust me, but with the boss you always have to use the formal 'usted'."
        ],
        "explanation": "El inglés no distingue gramaticalmente entre trato formal e informal, por lo que el traductor debe explicitar que «usted» marca aquí la distancia formal que el vos, en su función de confianza, no expresaría."
      },
      {
        "type": "multiple-choice",
        "question": "Un hablante rioplatense afirma: «El voseo no elimina la distinción entre confianza y formalidad; solo cambia cuál de las dos formas informales se usa». ¿Qué demuestra mejor esta afirmación?",
        "options": [
          "Que el usted ha desaparecido por completo en las zonas voseantes.",
          "Que el vos ocupa el lugar del tú como forma de confianza, mientras que el usted conserva su función formal exactamente igual que en cualquier otra variedad del español.",
          "Que el voseo solo se usa en contextos formales, nunca en la conversación cotidiana.",
          "Que el tú y el vos son completamente intercambiables en el Río de la Plata."
        ],
        "correctIndex": 1,
        "explanation": "El voseo sustituye al tú en su función de confianza, pero el contraste formal-informal se mantiene intacto: el usted sigue existiendo y cumpliendo la misma función de respeto o distancia que en cualquier otra variedad del español."
      },
      {
        "type": "matching",
        "instructions": "Relaciona cada región con la situación del voseo que le corresponde, según lo estudiado.",
        "pairs": [
          {
            "left": "Río de la Plata (Argentina, Uruguay)",
            "right": "voseo generalizado, norma culta sin estigma social"
          },
          {
            "left": "España peninsular",
            "right": "el voseo medieval desapareció por completo hace siglos"
          },
          {
            "left": "Costa Rica y Nicaragua",
            "right": "el voseo predomina como forma no marcada, usada por defecto"
          },
          {
            "left": "Paraguay",
            "right": "voseo generalizado, junto con una fuerte influencia del guaraní"
          }
        ],
        "explanation": "La extensión geográfica y el prestigio social del voseo varían considerablemente de una región a otra, aunque en todas ellas responde a la misma continuidad histórica de la forma medieval vos."
      },
      {
        "type": "multi-select",
        "question": "¿Cuáles de las siguientes afirmaciones sobre el voseo son correctas, según lo estudiado en esta lección?",
        "options": [
          "El voseo es la continuación de una forma de tratamiento medieval, no una deformación reciente.",
          "El voseo elimina por completo la posibilidad de expresar formalidad en el trato.",
          "La conjugación voseante se concentra principalmente en el presente de indicativo y el imperativo.",
          "El voseo carece de cualquier prestigio social en las zonas donde se emplea."
        ],
        "correctIndexes": [
          0,
          2
        ],
        "explanation": "El voseo desciende de una forma medieval y se concentra sobre todo en el presente y el imperativo; no elimina la formalidad, ya que el usted sigue existiendo, y goza de pleno prestigio social en el Río de la Plata y en buena parte de Centroamérica."
      }
    ]
  },
  {
    "slug": "voseo-part-2-1",
    "level": "C1",
    "number": 91,
    "title": "El Voseo: Gramática y Uso (Parte 2 de 2), Part 1 of 3",
    "summary": "Estudia la conjugación, la extensión geográfica y los usos sociales del voseo, desde el vos rioplatense hasta las variantes centroamericanas, y aprende a reconocerlo y emplearlo con corrección dentro de su propia norma.",
    "duration": "9 min",
    "sections": [
      {
        "heading": "Voseo y estigma: entre la norma culta y el prejuicio lingüístico",
        "body": [
          "Aunque el voseo rioplatense goza hoy de pleno prestigio —se enseña en las escuelas, aparece en la literatura y se usa en los medios de comunicación sin ninguna reserva—, no todas las variantes del voseo han corrido la misma suerte. En algunos países centroamericanos y andinos, el vos coexiste con una percepción de informalidad excesiva o incluso de menor prestigio frente al tuteo, que históricamente se asoció con la educación formal y los medios escritos.",
          "Este tipo de prejuicio lingüístico —juzgar una forma gramaticalmente legítima como inferior por razones puramente sociales— no tiene ningún fundamento objetivo: el voseo es tan sistemático y tan antiguo como el tuteo, y su distribución geográfica actual responde a la historia colonial y a las rutas de contacto lingüístico, no a ningún defecto intrínseco de la forma. Reconocer esta realidad forma parte de una competencia sociolingüística madura."
        ],
        "examples": [
          {
            "es": "gozar de pleno prestigio",
            "en": "estar completamente aceptado y valorado dentro de una comunidad lingüística"
          },
          {
            "es": "el prejuicio lingüístico",
            "en": "la idea infundada de que una variedad de una lengua es inferior a otra"
          },
          {
            "es": "un fundamento objetivo",
            "en": "una base real y verificable para sostener una afirmación"
          },
          {
            "es": "las rutas de contacto lingüístico",
            "en": "los caminos históricos por los que una lengua influyó en otra o en sus variantes"
          },
          {
            "es": "una competencia sociolingüística madura",
            "en": "la capacidad de entender y respetar la variación de una lengua sin prejuicios"
          }
        ],
        "checkpoint": [
          {
            "type": "multi-select",
            "question": "¿Cuáles de las siguientes afirmaciones sobre el voseo son correctas según el texto?",
            "options": [
              "El voseo rioplatense goza de pleno prestigio social",
              "En algunos países centroamericanos y andinos, el vos se percibe con menor prestigio que el tuteo",
              "El voseo carece de sistematicidad gramatical",
              "La distribución geográfica del voseo responde a la historia colonial"
            ],
            "correctIndexes": [
              0,
              1,
              3
            ],
            "explanation": "El texto afirma el prestigio del voseo rioplatense, la percepción desigual en otras regiones y el origen histórico de su distribución; en ningún momento se dice que carezca de sistematicidad."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "matching",
        "instructions": "Relaciona cada forma tuteante con su equivalente voseante.",
        "pairs": [
          {
            "left": "tú tienes",
            "right": "vos tenés"
          },
          {
            "left": "tú puedes",
            "right": "vos podés"
          },
          {
            "left": "tú vienes",
            "right": "vos venís"
          },
          {
            "left": "ven (imperativo)",
            "right": "vení (imperativo)"
          }
        ],
        "explanation": "Cada par muestra la correspondencia entre la conjugación tuteante y la voseante, con el acento desplazado a la última sílaba en el voseo."
      }
    ]
  },
  {
    "slug": "voseo-part-2-2",
    "level": "C1",
    "number": 92,
    "title": "El Voseo: Gramática y Uso (Parte 2 de 2), Part 2 of 3",
    "summary": "Estudia la conjugación, la extensión geográfica y los usos sociales del voseo, desde el vos rioplatense hasta las variantes centroamericanas, y aprende a reconocerlo y emplearlo con corrección dentro de su propia norma.",
    "duration": "10 min",
    "sections": [
      {
        "heading": "En la práctica",
        "body": [
          "— Che, ¿vos sos de acá o estás de paso?",
          "— Estoy de paso, en realidad. Soy de Costa Rica, aunque allá también voseamos, ¿sabés?",
          "— ¡No lo puedo creer! Pensé que el vos era una cosa nuestra nomás.",
          "— Para nada. Nosotros decimos vos tenés, vos podés, igual que ustedes, aunque el tonito cambia bastante.",
          "— Ah, mirá vos. ¿Y usan usted también, o el vos les alcanza para todo?",
          "— Usamos usted igual, sobre todo con la gente mayor o con alguien que no conocemos.",
          "— Acá pasa lo mismo. El usted no desapareció, nomás cambió de compañero: antes era tú y usted, ahora es vos y usted.",
          "— Tal cual. Lo que sí, cuando escucho hablar a alguien de España, me choca un poco el tú, se me hace medio raro.",
          "— A mí también, che, aunque una vez que te acostumbrás, no cuesta nada entenderlo."
        ]
      },
      {
        "heading": "Vocabulario: el voseo",
        "body": [
          "35 palabras relacionadas con el voseo."
        ],
        "examples": [
          {
            "es": "el voseo",
            "en": "el uso de la forma vos como pronombre de confianza"
          },
          {
            "es": "el voseo verbal",
            "en": "el fenómeno por el cual el verbo cambia su conjugación al usarse con vos"
          },
          {
            "es": "el voseo pronominal",
            "en": "el uso del pronombre vos sin que necesariamente cambie la conjugación verbal"
          },
          {
            "es": "la forma vos",
            "en": "el pronombre de segunda persona propio del voseo"
          },
          {
            "es": "el rioplatense",
            "en": "el habla propia de la región del Río de la Plata, entre Argentina y Uruguay"
          },
          {
            "es": "el diptongo",
            "en": "la unión de dos vocales en una misma sílaba, como la de tienes"
          },
          {
            "es": "la desinencia verbal",
            "en": "la terminación que se añade a la raíz de un verbo para indicar persona y tiempo"
          },
          {
            "es": "el presente de indicativo voseante",
            "en": "la conjugación del presente propia del voseo, como tenés o podés"
          },
          {
            "es": "el imperativo voseante",
            "en": "la forma de mandato propia del voseo, como vení o tené"
          },
          {
            "es": "la conjugación voseante",
            "en": "el conjunto de formas verbales asociadas al uso de vos"
          },
          {
            "es": "el che",
            "en": "una interjección característica del habla rioplatense usada para llamar la atención del interlocutor"
          },
          {
            "es": "el porteño",
            "en": "el habla y las costumbres propias de la ciudad de Buenos Aires"
          },
          {
            "es": "el uruguayismo",
            "en": "un rasgo lingüístico característico del español hablado en Uruguay"
          },
          {
            "es": "el centroamericanismo",
            "en": "un rasgo lingüístico característico del español hablado en Centroamérica"
          },
          {
            "es": "la variante dialectal",
            "en": "una forma de una lengua propia de una región determinada"
          },
          {
            "es": "el paradigma verbal",
            "en": "el conjunto ordenado de todas las formas de conjugación de un verbo"
          },
          {
            "es": "la forma átona",
            "en": "una forma que no lleva acento prosódico propio dentro de la frase"
          },
          {
            "es": "la forma tónica",
            "en": "una forma que lleva el acento prosódico principal"
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "word-order",
        "prompt": "Ordena las palabras para formar una oración sobre el prestigio del voseo rioplatense.",
        "words": [
          "el",
          "voseo",
          "rioplatense",
          "goza",
          "de",
          "pleno",
          "prestigio",
          "social"
        ],
        "explanation": "La oración resultante resume la idea central de la sección: 'El voseo rioplatense goza de pleno prestigio social'."
      }
    ]
  },
  {
    "slug": "voseo-part-2-3",
    "level": "C1",
    "number": 93,
    "title": "El Voseo: Gramática y Uso (Parte 2 de 2), Part 3 of 3",
    "summary": "Estudia la conjugación, la extensión geográfica y los usos sociales del voseo, desde el vos rioplatense hasta las variantes centroamericanas, y aprende a reconocerlo y emplearlo con corrección dentro de su propia norma.",
    "duration": "6 min",
    "sections": [
      {
        "heading": "Vocabulario: el voseo (cont'd)",
        "body": [],
        "examples": [
          {
            "es": "la sílaba tónica",
            "en": "la sílaba de una palabra que recibe el acento principal"
          },
          {
            "es": "el arcaísmo lingüístico",
            "en": "una forma antigua de una lengua que se conserva en el uso actual"
          },
          {
            "es": "la vigencia de una forma",
            "en": "el hecho de que una expresión siga usándose activamente en la actualidad"
          },
          {
            "es": "el estigma lingüístico",
            "en": "la valoración negativa injustificada que recae sobre una variedad de una lengua"
          },
          {
            "es": "el prestigio dialectal",
            "en": "la valoración positiva que una comunidad otorga a una variedad lingüística"
          },
          {
            "es": "la coexistencia de formas",
            "en": "el hecho de que dos formas de tratamiento se usen dentro de una misma comunidad"
          },
          {
            "es": "la mezcla dialectal",
            "en": "la combinación de rasgos propios de distintas variedades de una lengua"
          },
          {
            "es": "la influencia guaraní",
            "en": "el aporte léxico y fonético de la lengua guaraní al español rioplatense y paraguayo"
          },
          {
            "es": "el lunfardo",
            "en": "una jerga popular originada en Buenos Aires con aportes de varias lenguas de inmigración"
          },
          {
            "es": "la prosodia rioplatense",
            "en": "la entonación y el ritmo característicos del habla del Río de la Plata"
          },
          {
            "es": "el yeísmo rehilado",
            "en": "la pronunciación de la ll y la y con un sonido similar al de la sh, típica del Río de la Plata"
          },
          {
            "es": "el uso vernáculo",
            "en": "el uso propio y natural de una comunidad de habla, sin influencia externa"
          },
          {
            "es": "la norma culta",
            "en": "el uso considerado ejemplar por los hablantes instruidos de una región"
          },
          {
            "es": "el habla popular",
            "en": "la forma de expresarse propia de la mayoría de los hablantes en su vida cotidiana"
          },
          {
            "es": "la variedad diatópica",
            "en": "una variedad de una lengua definida por su extensión geográfica"
          },
          {
            "es": "el continuo dialectal",
            "en": "la sucesión gradual de variedades lingüísticas entre zonas geográficas vecinas"
          },
          {
            "es": "la extensión geográfica del voseo",
            "en": "el territorio en el que se emplea de manera habitual la forma vos"
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "¿Qué tiempos verbales presentan diferencias notables entre la conjugación tuteante y la voseante?",
        "options": [
          "El pretérito y el futuro",
          "El presente de indicativo y el imperativo",
          "El subjuntivo únicamente",
          "Todos los tiempos verbales por igual"
        ],
        "correctIndex": 1,
        "explanation": "El texto señala que la diferencia se concentra sobre todo en el presente de indicativo y el imperativo, mientras que otros tiempos no presentan cambios."
      }
    ]
  },
  {
    "slug": "voseo-part-2-mastery-check",
    "level": "C1",
    "number": 94,
    "title": "Prueba de Dominio: El Voseo (Parte 2)",
    "summary": "Una prueba centrada en el prestigio desigual del voseo según la región, el prejuicio lingüístico que aún pesa sobre algunas de sus variantes, y el vocabulario técnico necesario para analizarlo con rigor.",
    "duration": "10 min",
    "sections": [],
    "exercises": [
      {
        "type": "multi-select",
        "question": "¿Cuáles de las siguientes afirmaciones sobre el prestigio del voseo son correctas, según lo estudiado?",
        "options": [
          "El voseo rioplatense se enseña en las escuelas y aparece en la literatura sin ninguna reserva.",
          "En algunos países centroamericanos y andinos, el vos se percibe como más informal o de menor prestigio que el tuteo.",
          "El voseo carece de sistematicidad gramatical en comparación con el tuteo.",
          "La distribución geográfica del voseo responde a la historia colonial y a las rutas de contacto lingüístico."
        ],
        "correctIndexes": [
          0,
          1,
          3
        ],
        "explanation": "El voseo rioplatense goza de pleno prestigio, mientras que en otras regiones convive con una percepción de menor prestigio frente al tuteo; en ningún caso carece de sistematicidad, y su distribución actual responde a factores históricos, no a ningún defecto intrínseco de la forma."
      },
      {
        "type": "multiple-choice",
        "question": "¿Qué se entiende por «prejuicio lingüístico» en relación con ciertas variantes del voseo centroamericano y andino?",
        "options": [
          "La idea, infundada, de que una forma gramaticalmente legítima es inferior a otra por razones puramente sociales.",
          "Un error real de conjugación que efectivamente comete el hablante voseante.",
          "La preferencia estética de un escritor por una variante sobre otra.",
          "Una norma oficial establecida por una academia de la lengua."
        ],
        "correctIndex": 0,
        "explanation": "El prejuicio lingüístico consiste en juzgar como inferior, por razones sociales y no gramaticales, una forma tan sistemática y legítima como cualquier otra; el voseo es tan antiguo y coherente como el tuteo."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la conjugación voseante del verbo decir en presente.",
        "sentence": "Tú dices que no vendrás, pero vos ___ (decir) que sí vendrás. ¿En qué quedamos?",
        "answer": "decís",
        "hint": "Piensa en la desinencia aguda terminada en -ís.",
        "explanation": "La forma voseante del presente de «decir» es «decís», con la desinencia aguda característica, frente a la forma tuteante «dices»."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la conjugación voseante del verbo dormir en presente.",
        "sentence": "Vos ___ (dormir) muy poco últimamente; deberías cuidarte más.",
        "answer": "dormís",
        "hint": "El voseo elimina la diptongación irregular de la raíz verbal.",
        "explanation": "La forma voseante «dormís» pierde la diptongación irregular que presenta la forma tuteante «duermes», además de llevar el acento en la última sílaba."
      },
      {
        "type": "multiple-choice",
        "question": "¿A qué atribuye el texto la distribución geográfica actual del voseo?",
        "options": [
          "A una decisión reciente de las academias de la lengua en cada país.",
          "A la historia colonial y a las rutas de contacto lingüístico, no a ningún defecto intrínseco de la forma.",
          "Al azar puro, sin ninguna explicación histórica identificable.",
          "A la influencia exclusiva de la televisión y los medios de comunicación del siglo veinte."
        ],
        "correctIndex": 1,
        "explanation": "El texto explica que la distribución geográfica actual del voseo responde a la historia colonial y a las rutas de contacto lingüístico, un origen histórico que no guarda ninguna relación con un supuesto defecto de la forma."
      },
      {
        "type": "matching",
        "instructions": "Relaciona cada término técnico con su definición correspondiente.",
        "pairs": [
          {
            "left": "el estigma lingüístico",
            "right": "la valoración social negativa e injustificada que recae sobre una variedad de una lengua"
          },
          {
            "left": "el prestigio dialectal",
            "right": "la valoración social positiva que una comunidad otorga a una variedad lingüística"
          },
          {
            "left": "la variedad diatópica",
            "right": "una forma de una lengua definida por la región geográfica en la que se habla"
          },
          {
            "left": "el yeísmo rehilado",
            "right": "la pronunciación de la ll y la y con un sonido similar al de la sh, típica del habla rioplatense"
          }
        ],
        "explanation": "Este vocabulario técnico permite describir con precisión tanto la variación geográfica del español como los juicios sociales, a menudo infundados, que recaen sobre algunas de sus variedades."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Traduce el diálogo empleando el registro voseante rioplatense adecuado.",
        "source": "Hey, are you from Uruguay or Argentina? I can't tell the accents apart.",
        "answer": "Che, ¿sos de Uruguay o de Argentina? No distingo bien los acentos.",
        "altAnswers": [
          "Che, ¿vos sos de Uruguay o de Argentina? No logro distinguir bien los acentos."
        ],
        "explanation": "«Che» es la interjección característica del habla rioplatense para llamar la atención del interlocutor, y «sos» es la forma voseante del verbo «ser», ambos rasgos propios del registro coloquial estudiado en esta lección."
      },
      {
        "type": "translate",
        "direction": "es-en",
        "prompt": "Traduce al inglés la idea central sobre el prejuicio lingüístico asociado al voseo.",
        "source": "El estigma que pesa sobre el voseo centroamericano no tiene ningún fundamento objetivo; es tan sistemático como el tuteo.",
        "answer": "The stigma attached to Central American voseo has no objective basis; it is just as systematic as tuteo.",
        "altAnswers": [
          "The stigma surrounding Central American voseo has no objective grounds; it's just as systematic as the tú form."
        ],
        "explanation": "El texto insiste en que ningún prejuicio social sobre una variedad gramaticalmente legítima tiene fundamento objetivo, un matiz que la traducción debe conservar con precisión."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras para formar una pregunta coloquial propia del habla rioplatense.",
        "words": [
          "y",
          "vos",
          "de",
          "dónde",
          "sos",
          "che"
        ],
        "translation": "And where are you from, man?",
        "explanation": "«Che» funciona aquí como interjección para llamar la atención del interlocutor, y «sos» es la forma voseante del presente de «ser»."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras para formular una afirmación sobre el prejuicio lingüístico.",
        "words": [
          "el",
          "prejuicio",
          "lingüístico",
          "carece",
          "de",
          "fundamento",
          "objetivo"
        ],
        "translation": "Linguistic prejudice lacks any objective basis.",
        "explanation": "El texto sostiene precisamente esta idea: juzgar una variedad lingüística como inferior por razones sociales carece de todo fundamento objetivo, dado que el voseo es tan sistemático y antiguo como el tuteo."
      },
      {
        "type": "multiple-choice",
        "question": "¿Qué implica poseer una «competencia sociolingüística madura» respecto al voseo, según el texto?",
        "options": [
          "Rechazar el uso del voseo por considerarlo menos correcto que el tuteo.",
          "Reconocer y respetar la variación de la lengua sin caer en prejuicios sociales infundados sobre ninguna de sus variedades.",
          "Usar exclusivamente el voseo rioplatense en cualquier contexto hispanohablante.",
          "Evitar por completo el estudio de las variedades dialectales del español."
        ],
        "correctIndex": 1,
        "explanation": "Una competencia sociolingüística madura implica entender y respetar la variación de la lengua, reconociendo que ninguna variedad gramaticalmente legítima es intrínsecamente inferior a otra."
      },
      {
        "type": "multi-select",
        "question": "¿Cuáles de las siguientes afirmaciones describen con precisión el contraste entre el voseo rioplatense y algunas variantes centroamericanas o andinas?",
        "options": [
          "El voseo rioplatense goza de pleno prestigio social y se usa sin reserva en los medios de comunicación.",
          "En algunas zonas centroamericanas y andinas, el vos convive con una percepción de menor prestigio frente al tuteo.",
          "El voseo centroamericano es gramaticalmente menos sistemático que el rioplatense.",
          "Ambas variantes comparten el mismo origen histórico en la forma medieval vos."
        ],
        "correctIndexes": [
          0,
          1,
          3
        ],
        "explanation": "El contraste de prestigio entre regiones es social, no gramatical: ambas variantes comparten el mismo origen histórico y son igualmente sistemáticas, aunque su valoración social difiera considerablemente según el país."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la conjugación voseante del verbo pedir en presente.",
        "sentence": "Cuando vos le ___ (pedir) las cosas con respeto, todo resulta más fácil.",
        "answer": "pedís",
        "hint": "Piensa en la desinencia aguda terminada en -ís.",
        "explanation": "La forma voseante del presente de «pedir» es «pedís», con la desinencia aguda característica, frente a la forma tuteante «pides»."
      },
      {
        "type": "matching",
        "instructions": "Relaciona cada forma tuteante con su equivalente voseante correspondiente.",
        "pairs": [
          {
            "left": "tú dices",
            "right": "vos decís"
          },
          {
            "left": "tú duermes",
            "right": "vos dormís"
          },
          {
            "left": "tú pides",
            "right": "vos pedís"
          },
          {
            "left": "tú vuelves",
            "right": "vos volvés"
          }
        ],
        "explanation": "En todos los casos, la forma voseante desplaza el acento a la última sílaba y elimina la diptongación irregular propia de la conjugación tuteante."
      },
      {
        "type": "multiple-choice",
        "question": "¿Por qué resulta infundado considerar que el voseo centroamericano es «menos correcto» que el tuteo?",
        "options": [
          "Porque el tuteo es en realidad una forma más reciente que el voseo.",
          "Porque el voseo es tan sistemático y tan antiguo como el tuteo, y su menor prestigio en algunas regiones responde a factores sociales e históricos, no a un defecto gramatical real.",
          "Porque, en realidad, no existe ninguna forma de voseo fuera del Río de la Plata.",
          "Porque la Real Academia Española prohíbe expresamente su uso en cualquier contexto."
        ],
        "correctIndex": 1,
        "explanation": "El voseo comparte con el tuteo el mismo grado de sistematicidad gramatical y una antigüedad comparable; la diferencia de prestigio entre regiones responde únicamente a la historia social y colonial, no a ninguna deficiencia lingüística real."
      }
    ]
  },
  {
    "slug": "regional-lexical-variation-1",
    "level": "C1",
    "number": 95,
    "title": "Variación Léxica Regional, Part 1 of 7",
    "summary": "Descubre cómo el vocabulario cotidiano cambia radicalmente de un país hispanohablante a otro, identifica los falsos amigos dialectales más comunes y desarrolla estrategias para comunicarte con soltura en cualquier región.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "La riqueza y el riesgo de la variación léxica",
        "body": [
          "El español es, ante todo, una lengua policéntrica: no existe un único centro de autoridad léxica, sino más de veinte países que aportan su propio vocabulario cotidiano sin que ninguno tenga mayor validez que otro. Un mismo objeto puede recibir nombres completamente distintos según la región: el vehículo particular es carro en buena parte de Centroamérica y el Caribe, coche en España y auto en el Cono Sur, y ninguna de las tres opciones es más correcta que las demás.",
          "Para quien domina la gramática pero no esta variación, el riesgo no es la incomprensión total, sino el malentendido parcial: una palabra perfectamente normal en un país puede sonar anticuada, graciosa o incluso vulgar en otro. Reconocer esta riqueza como un rasgo natural de la lengua, y no como una fuente de confusión que hay que evitar, es el primer paso hacia una competencia léxica verdaderamente avanzada."
        ],
        "examples": [
          {
            "es": "una lengua policéntrica",
            "en": "una lengua sin un único centro de autoridad, con varias normas igualmente válidas"
          },
          {
            "es": "el vehículo particular",
            "en": "el automóvil de uso personal, llamado carro, coche o auto según la región"
          },
          {
            "es": "el malentendido parcial",
            "en": "una confusión menor que surge cuando una palabra se interpreta de forma distinta a la esperada"
          },
          {
            "es": "sonar anticuada",
            "en": "dar la impresión de pertenecer a una época pasada"
          },
          {
            "es": "una competencia léxica avanzada",
            "en": "la capacidad de manejar con soltura el vocabulario propio de distintas variedades de una lengua"
          },
          {
            "es": "carecer de mayor validez",
            "en": "no tener más autoridad o corrección que otra opción equivalente"
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "Según el texto, ¿qué significa que el español sea una lengua policéntrica?",
            "options": [
              "Que tiene un único país que dicta las normas correctas",
              "Que carece de gramática unificada",
              "Que no existe un único centro de autoridad léxica y varias normas conviven con igual validez",
              "Que solo se habla en más de veinte países sin ninguna otra implicación"
            ],
            "correctIndex": 2,
            "explanation": "El texto define el policentrismo del español precisamente como la ausencia de un único centro de autoridad léxica, con múltiples normas igualmente válidas."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "¿Cuál de las siguientes palabras designa el autobús urbano en Chile?",
        "options": [
          "guagua",
          "camión",
          "micro",
          "colectivo"
        ],
        "correctIndex": 2,
        "explanation": "En Chile, el autobús urbano se llama micro, mientras que guagua significa bebé en ese mismo país."
      }
    ]
  },
  {
    "slug": "regional-lexical-variation-2",
    "level": "C1",
    "number": 96,
    "title": "Variación Léxica Regional, Part 2 of 7",
    "summary": "Descubre cómo el vocabulario cotidiano cambia radicalmente de un país hispanohablante a otro, identifica los falsos amigos dialectales más comunes y desarrolla estrategias para comunicarte con soltura en cualquier región.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "El vocabulario cotidiano: entre la anécdota y la trampa",
        "body": [
          "Algunos ejemplos se han vuelto casi proverbiales por lo llamativo del contraste: las palomitas de maíz que se comen en el cine reciben el nombre de palomitas en España, pochoclo en Argentina, cabritas en Chile y canchita en Perú. El autobús urbano es guagua en Cuba y Canarias, camión en buena parte de México, colectivo en Argentina y micro en Chile. Estos casos, lejos de ser una curiosidad menor, ilustran un patrón que se repite en decenas de campos semánticos cotidianos: la alimentación, el transporte, la ropa, los objetos domésticos.",
          "La verdadera trampa no está en estas variaciones evidentes, que cualquier hablante nota de inmediato, sino en las palabras que parecen idénticas pero cambian de significado de forma sutil de un país a otro. Por ejemplo, guagua no solo designa el autobús en algunas zonas del Caribe, sino que en Chile y otros países andinos significa bebé, un significado sin ninguna relación con el anterior. Ese tipo de coincidencia formal entre palabras de significados distintos exige una atención mucho más fina que la simple memorización de sinónimos."
        ],
        "examples": [
          {
            "es": "un campo semántico",
            "en": "un conjunto de palabras relacionadas por compartir un mismo ámbito de significado"
          },
          {
            "es": "una coincidencia formal",
            "en": "el hecho de que dos palabras suenen o se escriban igual sin compartir significado"
          },
          {
            "es": "una curiosidad menor",
            "en": "un dato llamativo pero de poca importancia práctica"
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multi-select",
        "question": "¿Cuáles de las siguientes afirmaciones son correctas sobre la variación léxica regional?",
        "options": [
          "El español es una lengua policéntrica sin un único centro de autoridad léxica",
          "Todas las palabras regionales tienen exactamente el mismo significado en todo el mundo hispanohablante",
          "Una palabra neutra en un país puede resultar malsonante en otro",
          "La variación léxica solo afecta al vocabulario académico"
        ],
        "correctIndexes": [
          0,
          2
        ],
        "explanation": "El texto defiende el carácter policéntrico del español y advierte sobre palabras que cambian de connotación según el país; niega que todas las palabras compartan significado universal y aclara que la variación abarca el vocabulario cotidiano, no solo el académico."
      }
    ]
  },
  {
    "slug": "regional-lexical-variation-3",
    "level": "C1",
    "number": 97,
    "title": "Variación Léxica Regional, Part 3 of 7",
    "summary": "Descubre cómo el vocabulario cotidiano cambia radicalmente de un país hispanohablante a otro, identifica los falsos amigos dialectales más comunes y desarrolla estrategias para comunicarte con soltura en cualquier región.",
    "duration": "5 min",
    "sections": [
      {
        "heading": "El vocabulario cotidiano: entre la anécdota y la trampa (cont'd)",
        "body": [],
        "examples": [
          {
            "es": "resultar proverbial",
            "en": "haberse vuelto tan conocido que se cita como ejemplo habitual"
          },
          {
            "es": "una atención fina",
            "en": "un grado de cuidado y precisión superior al habitual"
          },
          {
            "es": "designar un objeto",
            "en": "nombrar o referirse a una cosa mediante una palabra determinada"
          }
        ],
        "checkpoint": [
          {
            "type": "multi-select",
            "question": "¿Cuáles de las siguientes afirmaciones sobre la variación léxica regional son correctas según el texto?",
            "options": [
              "La palabra guagua puede significar tanto autobús como bebé según el país",
              "Todas las palabras que varían por región tienen un significado idéntico en todas partes",
              "Las palomitas de maíz reciben distintos nombres según el país",
              "La variación léxica se limita únicamente al vocabulario del transporte"
            ],
            "correctIndexes": [
              0,
              2
            ],
            "explanation": "El texto confirma la doble acepción de guagua y la variación en el nombre de las palomitas de maíz; en cambio, aclara que hay palabras con significados distintos según la región y que la variación abarca muchos campos, no solo el transporte."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con el nombre que reciben las palomitas de maíz en Argentina.",
        "sentence": "En el cine, en Argentina no se pide palomitas, sino ___.",
        "answer": "pochoclo",
        "explanation": "El texto menciona pochoclo como el nombre argentino de las palomitas de maíz, frente a cabritas en Chile o canchita en Perú."
      }
    ]
  },
  {
    "slug": "regional-lexical-variation-4",
    "level": "C1",
    "number": 98,
    "title": "Variación Léxica Regional, Part 4 of 7",
    "summary": "Descubre cómo el vocabulario cotidiano cambia radicalmente de un país hispanohablante a otro, identifica los falsos amigos dialectales más comunes y desarrolla estrategias para comunicarte con soltura en cualquier región.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "Falsos amigos dialectales y palabras con carga sensible",
        "body": [
          "Un fenómeno particularmente delicado es el de las palabras que resultan neutras en un país y malsonantes o incluso vulgares en otro, sin que exista ninguna relación etimológica que lo explique de forma evidente. El verbo coger, por ejemplo, significa simplemente tomar o agarrar en España, pero en varios países de América Latina posee una connotación sexual explícita que lo vuelve inapropiado en el habla cotidiana, donde se prefiere agarrar o tomar.",
          "Este tipo de contraste no es anecdótico: puede generar situaciones incómodas para quien viaja o se comunica con hablantes de otra región sin conocer el matiz. La estrategia más prudente para quien domina el español a un nivel avanzado no consiste en memorizar una lista exhaustiva de palabras prohibidas, sino en desarrollar una actitud de escucha atenta y, ante la duda, optar por la variante más neutra y menos marcada regionalmente."
        ],
        "examples": [
          {
            "es": "una palabra malsonante",
            "en": "una palabra que resulta chocante o inapropiada por su connotación"
          },
          {
            "es": "una connotación sexual explícita",
            "en": "un significado erótico evidente que una palabra adquiere en cierto contexto"
          },
          {
            "es": "carecer de relación etimológica",
            "en": "no compartir un mismo origen histórico que explique una coincidencia"
          },
          {
            "es": "una situación incómoda",
            "en": "un momento embarazoso derivado de un malentendido social o lingüístico"
          },
          {
            "es": "la variante más neutra",
            "en": "la opción léxica menos marcada por connotaciones regionales o sociales"
          },
          {
            "es": "una escucha atenta",
            "en": "la capacidad de prestar mucha atención a cómo hablan los demás para adaptarse"
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa la oración con el verbo más neutro para evitar el matiz sensible que adquiere coger en varios países.",
            "sentence": "¿Me ayudas a ___ esa maleta del estante?",
            "answer": "agarrar",
            "explanation": "En muchos países de América Latina se prefiere agarrar o tomar en lugar de coger, que allí posee una connotación sexual explícita.",
            "hint": "Piensa en un verbo neutro y ampliamente aceptado en toda Hispanoamérica."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "word-order",
        "prompt": "Ordena las palabras para formar una oración sobre la estrategia frente a la variación léxica.",
        "words": [
          "ante",
          "la",
          "duda",
          "conviene",
          "elegir",
          "la",
          "variante",
          "más",
          "neutra"
        ],
        "explanation": "La oración resultante resume la estrategia recomendada en el texto: 'Ante la duda, conviene elegir la variante más neutra'."
      }
    ]
  },
  {
    "slug": "regional-lexical-variation-5",
    "level": "C1",
    "number": 99,
    "title": "Variación Léxica Regional, Part 5 of 7",
    "summary": "Descubre cómo el vocabulario cotidiano cambia radicalmente de un país hispanohablante a otro, identifica los falsos amigos dialectales más comunes y desarrolla estrategias para comunicarte con soltura en cualquier región.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Estrategias para navegar la variación como hablante avanzado",
        "body": [
          "Frente a esta diversidad, existen varias estrategias útiles para quien busca comunicarse con soltura en cualquier país hispanohablante. La primera consiste en priorizar, siempre que exista, el término de mayor alcance geográfico o el que se emplea en el llamado español neutro de los medios de comunicación internacionales, que suele resultar comprensible en todas partes aunque no sea el más idiomático en ningún lugar concreto.",
          "La segunda estrategia consiste en adoptar rápidamente el vocabulario local una vez que se llega a un país determinado, mostrando así una sensibilidad hacia la cultura de acogida que suele valorarse positivamente. Finalmente, conviene aceptar que ningún hablante, ni siquiera nativo, domina todas las variantes léxicas del español; lo que distingue a un hablante avanzado no es conocerlas todas, sino saber reconocer cuándo una palabra puede generar un malentendido y preguntar sin reparos por su significado local."
        ],
        "examples": [
          {
            "es": "el alcance geográfico",
            "en": "la extensión territorial en la que una palabra o expresión se entiende o se usa"
          },
          {
            "es": "la cultura de acogida",
            "en": "el entorno social y cultural del país en el que alguien se encuentra o se instala"
          },
          {
            "es": "preguntar sin reparos",
            "en": "hacer una pregunta sin vergüenza ni temor a parecer ignorante"
          },
          {
            "es": "mostrar sensibilidad",
            "en": "demostrar consideración y respeto hacia las costumbres de otra comunidad"
          },
          {
            "es": "priorizar un término",
            "en": "dar preferencia a una palabra frente a otras posibles opciones"
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "Según el texto, ¿qué caracteriza realmente a un hablante avanzado frente a la variación léxica regional?",
            "options": [
              "Conocer absolutamente todas las variantes léxicas del español",
              "Evitar por completo el vocabulario regional",
              "Saber reconocer cuándo una palabra puede generar un malentendido y preguntar por su significado local",
              "Usar siempre el término más formal posible sin excepción"
            ],
            "correctIndex": 2,
            "explanation": "El texto concluye que ni siquiera los hablantes nativos dominan todas las variantes; lo distintivo de un nivel avanzado es la capacidad de detectar riesgos de malentendido y preguntar con naturalidad."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "matching",
        "instructions": "Relaciona cada palabra con su significado según el país indicado entre las opciones.",
        "pairs": [
          {
            "left": "guagua (en el Caribe)",
            "right": "el autobús urbano"
          },
          {
            "left": "guagua (en Chile)",
            "right": "el bebé"
          },
          {
            "left": "coger (en España)",
            "right": "tomar o agarrar algo"
          },
          {
            "left": "coger (en varios países de América)",
            "right": "una palabra con connotación sexual explícita"
          }
        ],
        "explanation": "Estos pares ilustran cómo una misma palabra puede tener significados completamente distintos, e incluso opuestos en sensibilidad, según el país."
      }
    ]
  },
  {
    "slug": "regional-lexical-variation-6",
    "level": "C1",
    "number": 100,
    "title": "Variación Léxica Regional, Part 6 of 7",
    "summary": "Descubre cómo el vocabulario cotidiano cambia radicalmente de un país hispanohablante a otro, identifica los falsos amigos dialectales más comunes y desarrolla estrategias para comunicarte con soltura en cualquier región.",
    "duration": "5 min",
    "sections": [
      {
        "heading": "En la práctica",
        "body": [
          "— Che, cuando lleguemos, ¿pedimos un colectivo o vamos caminando?",
          "— Perdón, ¿un colectivo? Yo pensé que acá se decía camión...",
          "— Ah, cierto, vos sos de México. Acá le decimos colectivo, aunque también se entiende bus.",
          "— Qué interesante. En mi país, si digo camión, todo el mundo entiende que es el transporte público, no un vehículo de carga.",
          "— Y en Chile le dicen micro, y en España, autobús a secas. Cada país con lo suyo.",
          "— Lo que más me costó al llegar fue lo de las palomitas. Pedí palomitas en el cine y la señora no entendió nada.",
          "— Claro, acá es pochoclo. Con el tiempo vas agarrando el oído para estas cosas.",
          "— Sí, ya me di cuenta de que lo mejor es preguntar sin pena cuando algo no me cierra.",
          "— Esa es la actitud correcta. Nadie espera que sepas todas las palabras de cada país."
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "¿Qué recomienda el texto hacer cuando una palabra local genera dudas sobre su significado?",
        "options": [
          "Evitar hablar por completo hasta memorizar el diccionario regional",
          "Preguntar sin reparos por su significado local",
          "Sustituirla siempre por un anglicismo",
          "Ignorar la duda y continuar sin verificar nada"
        ],
        "correctIndex": 1,
        "explanation": "El texto sostiene que la actitud propia de un hablante avanzado es preguntar sin reparos ante cualquier duda, en lugar de asumir un significado incorrecto."
      }
    ]
  },
  {
    "slug": "regional-lexical-variation-7",
    "level": "C1",
    "number": 101,
    "title": "Variación Léxica Regional, Part 7 of 7",
    "summary": "Descubre cómo el vocabulario cotidiano cambia radicalmente de un país hispanohablante a otro, identifica los falsos amigos dialectales más comunes y desarrolla estrategias para comunicarte con soltura en cualquier región.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "Vocabulario: la variación léxica regional",
        "body": [
          "35 palabras relacionadas con la variación léxica regional."
        ],
        "examples": [
          {
            "es": "el regionalismo léxico",
            "en": "una palabra o expresión propia del vocabulario de una región determinada"
          },
          {
            "es": "el dialectalismo",
            "en": "un rasgo lingüístico característico de un dialecto concreto"
          },
          {
            "es": "el mexicanismo",
            "en": "una palabra o expresión propia del español hablado en México"
          },
          {
            "es": "el argentinismo",
            "en": "una palabra o expresión propia del español hablado en Argentina"
          },
          {
            "es": "el chilenismo",
            "en": "una palabra o expresión propia del español hablado en Chile"
          },
          {
            "es": "el colombianismo",
            "en": "una palabra o expresión propia del español hablado en Colombia"
          },
          {
            "es": "el caribeñismo",
            "en": "una palabra o expresión propia del español hablado en la región del Caribe"
          },
          {
            "es": "el peninsularismo",
            "en": "una palabra o expresión propia del español hablado en la península ibérica"
          },
          {
            "es": "la sinonimia regional",
            "en": "la existencia de varias palabras equivalentes usadas en distintas regiones"
          },
          {
            "es": "el matiz semántico",
            "en": "una diferencia sutil de significado entre dos palabras o expresiones"
          },
          {
            "es": "la ambigüedad léxica",
            "en": "la posibilidad de que una palabra se interprete de más de una manera"
          },
          {
            "es": "el falso amigo dialectal",
            "en": "una palabra que coincide en forma con otra de distinta región pero cambia de significado"
          },
          {
            "es": "el eufemismo regional",
            "en": "una expresión suavizada usada en cierta región para evitar un término considerado tosco"
          },
          {
            "es": "la connotación vulgar",
            "en": "un matiz de significado grosero o inapropiado que adquiere una palabra en cierto contexto"
          },
          {
            "es": "la palabra malsonante",
            "en": "una palabra que resulta chocante o de mal gusto en determinado contexto social"
          },
          {
            "es": "el vocablo autóctono",
            "en": "una palabra originaria de una región concreta, sin origen extranjero conocido"
          },
          {
            "es": "la variante léxica",
            "en": "una de las varias formas posibles que puede tomar una palabra según la región"
          },
          {
            "es": "el uso extendido",
            "en": "el empleo de una palabra o expresión en un territorio amplio"
          },
          {
            "es": "la jerga local",
            "en": "el vocabulario particular de un grupo social dentro de una región determinada"
          },
          {
            "es": "el modismo regional",
            "en": "una expresión fija propia de una región, cuyo sentido no se deduce de sus palabras por separado"
          },
          {
            "es": "la expresión idiomática",
            "en": "una expresión cuyo significado conjunto difiere del significado literal de sus palabras"
          },
          {
            "es": "el americanismo",
            "en": "una palabra o expresión propia del español hablado en América"
          },
          {
            "es": "el anglicismo adaptado",
            "en": "una palabra proveniente del inglés que se ha incorporado y adaptado al español"
          },
          {
            "es": "el indigenismo léxico",
            "en": "una palabra del español proveniente de una lengua indígena americana"
          },
          {
            "es": "la palabra polisémica",
            "en": "una palabra que posee varios significados relacionados entre sí"
          },
          {
            "es": "el sentido figurado",
            "en": "un significado distinto del literal, basado en una asociación simbólica"
          },
          {
            "es": "el malentendido lingüístico",
            "en": "una confusión que surge por una diferencia de significado entre hablantes"
          },
          {
            "es": "la neutralización léxica",
            "en": "el proceso de elegir un término comprensible en varias regiones a la vez"
          },
          {
            "es": "el glosario regional",
            "en": "una lista de palabras propias de una región junto con su significado"
          },
          {
            "es": "la variación diatópica",
            "en": "la diferencia de una lengua según el lugar geográfico donde se habla"
          },
          {
            "es": "el uso coloquial regional",
            "en": "el vocabulario informal propio de una zona geográfica concreta"
          },
          {
            "es": "la palabra tabú",
            "en": "una palabra que se evita por razones sociales o culturales"
          },
          {
            "es": "el registro popular",
            "en": "el nivel de habla propio del uso cotidiano y espontáneo de la mayoría de los hablantes"
          },
          {
            "es": "la voz autóctona",
            "en": "una palabra propia y original de una región, sin equivalente exacto en otras"
          },
          {
            "es": "el contexto sociolingüístico",
            "en": "el conjunto de circunstancias sociales que rodean el uso de una lengua"
          }
        ]
      }
    ],
    "exercises": []
  },
  {
    "slug": "neutral-vs-colloquial-1",
    "level": "C1",
    "number": 102,
    "title": "Español Neutro vs. Coloquial, Part 1 of 6",
    "summary": "Distingue el español neutro de los medios y la documentación técnica del habla coloquial de la vida cotidiana, y aprende a elegir el registro adecuado según la intención y el contexto comunicativo.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "El español neutro: una construcción artificial y útil",
        "body": [
          "El llamado español neutro no es la lengua materna de nadie, sino una construcción deliberada, pensada para que un mensaje resulte comprensible en el mayor número posible de países hispanohablantes a la vez. Surge principalmente en el ámbito de los medios de comunicación, el doblaje audiovisual y la documentación técnica, donde interesa evitar regionalismos marcados que puedan confundir o distraer a una parte de la audiencia.",
          "Esta variedad se caracteriza por evitar el voseo, prescindir de modismos muy localizados y preferir siempre la palabra de mayor difusión frente a la más idiomática de un solo país. El resultado es una lengua correcta, clara y eficaz, pero que ningún hablante emplea de manera espontánea en su vida cotidiana: nadie piensa ni sueña en español neutro, precisamente porque carece del color y la textura propios del habla natural de una comunidad concreta."
        ],
        "examples": [
          {
            "es": "una construcción deliberada",
            "en": "algo creado de forma consciente y con un propósito específico, no de manera espontánea"
          },
          {
            "es": "el ámbito del doblaje",
            "en": "el terreno de la traducción oral de películas y series para su difusión en otros países"
          },
          {
            "es": "prescindir de un modismo",
            "en": "evitar el uso de una expresión propia de una sola región"
          },
          {
            "es": "carecer de color",
            "en": "faltarle a un habla la expresividad y el matiz propios de una comunidad concreta"
          },
          {
            "es": "la palabra de mayor difusión",
            "en": "el término más ampliamente entendido en distintos países"
          },
          {
            "es": "resultar eficaz",
            "en": "cumplir bien su función comunicativa"
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Qué es, según el texto, el español neutro?",
            "options": [
              "La lengua materna de una región específica de América",
              "Una construcción deliberada pensada para resultar comprensible en muchos países a la vez",
              "Un dialecto exclusivo de los medios de comunicación españoles",
              "Una forma de hablar exclusivamente escrita"
            ],
            "correctIndex": 1,
            "explanation": "El texto define el español neutro como una construcción artificial, sin hablantes nativos, orientada a la comprensión amplia entre países."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "¿Cuál es la función principal del español neutro según el texto?",
        "options": [
          "Reflejar con fidelidad el habla cotidiana de un solo país",
          "Resultar comprensible en el mayor número posible de países hispanohablantes",
          "Sustituir por completo al habla coloquial en la vida diaria",
          "Servir exclusivamente para la poesía"
        ],
        "correctIndex": 1,
        "explanation": "El español neutro busca ante todo la comprensión amplia entre países, evitando regionalismos marcados."
      }
    ]
  },
  {
    "slug": "neutral-vs-colloquial-2",
    "level": "C1",
    "number": 103,
    "title": "Español Neutro vs. Coloquial, Part 2 of 6",
    "summary": "Distingue el español neutro de los medios y la documentación técnica del habla coloquial de la vida cotidiana, y aprende a elegir el registro adecuado según la intención y el contexto comunicativo.",
    "duration": "9 min",
    "sections": [
      {
        "heading": "El habla coloquial: espontaneidad, cercanía y economía expresiva",
        "body": [
          "Frente a la neutralidad calculada, el habla coloquial se caracteriza por su espontaneidad: surge en la conversación cotidiana, entre personas que comparten un contexto y una confianza mutua, y recurre a muletillas, diminutivos, interjecciones y expresiones fijas que rara vez aparecen en un texto formal. Esta variedad privilegia la economía expresiva por encima de la precisión: se dicen frases incompletas, se sobreentienden ideas y se confía en el contexto compartido para completar el sentido.",
          "Lejos de ser una versión descuidada o empobrecida de la lengua, el habla coloquial posee una riqueza expresiva propia, con recursos como la ironía, la hipérbole o el doble sentido que a menudo resultan imposibles de trasladar a un registro más formal sin perder buena parte de su efecto. Dominarla exige tanto conocimiento cultural como dominio gramatical, porque su lógica no es la de la corrección normativa, sino la de la eficacia social dentro de un grupo concreto."
        ],
        "examples": [
          {
            "es": "la economía expresiva",
            "en": "la tendencia a comunicar con el menor número de palabras posible, apoyándose en el contexto"
          },
          {
            "es": "una muletilla",
            "en": "una palabra o frase que se repite de forma habitual sin aportar demasiado significado"
          },
          {
            "es": "sobreentender una idea",
            "en": "dar por comprendido algo sin necesidad de expresarlo de forma explícita"
          },
          {
            "es": "la riqueza expresiva",
            "en": "la capacidad de una forma de hablar para transmitir matices variados y creativos"
          },
          {
            "es": "el contexto compartido",
            "en": "el conjunto de información conocida por ambos interlocutores que permite entenderse sin explicarlo todo"
          },
          {
            "es": "una versión empobrecida",
            "en": "una forma de hablar considerada, erróneamente, como inferior o menos completa"
          }
        ],
        "checkpoint": [
          {
            "type": "multi-select",
            "question": "¿Cuáles de los siguientes rasgos caracterizan al habla coloquial según el texto?",
            "options": [
              "La espontaneidad propia de la conversación cotidiana",
              "El uso frecuente de muletillas e interjecciones",
              "La ausencia total de recursos expresivos como la ironía",
              "La confianza en el contexto compartido para completar el sentido"
            ],
            "correctIndexes": [
              0,
              1,
              3
            ],
            "explanation": "El texto describe el habla coloquial como espontánea, rica en muletillas e interjecciones y apoyada en el contexto compartido; en ningún momento afirma que carezca de recursos como la ironía, sino todo lo contrario."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multi-select",
        "question": "¿Cuáles de los siguientes recursos son propios del habla coloquial según el texto?",
        "options": [
          "Las muletillas",
          "Los diminutivos afectivos",
          "La ausencia total de contexto compartido",
          "La ironía y el doble sentido"
        ],
        "correctIndexes": [
          0,
          1,
          3
        ],
        "explanation": "El texto atribuye al habla coloquial el uso de muletillas, diminutivos afectivos e ironía; en cambio, señala que este registro se apoya precisamente en el contexto compartido, no en su ausencia."
      }
    ]
  },
  {
    "slug": "neutral-vs-colloquial-3",
    "level": "C1",
    "number": 104,
    "title": "Español Neutro vs. Coloquial, Part 3 of 6",
    "summary": "Distingue el español neutro de los medios y la documentación técnica del habla coloquial de la vida cotidiana, y aprende a elegir el registro adecuado según la intención y el contexto comunicativo.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Cuándo elegir cada registro: la pertinencia como criterio",
        "body": [
          "La pregunta relevante nunca es cuál de los dos registros resulta superior, sino cuál resulta pertinente en cada situación comunicativa. Un informe institucional, una noticia internacional o un manual de instrucciones exigen un español neutro y formal, porque su función es transmitir información con la máxima claridad y el mínimo riesgo de ambigüedad regional. Una conversación entre amigos, un mensaje de voz o una publicación en redes sociales, en cambio, sonarían artificiales y distantes si se redactaran con ese mismo grado de neutralidad.",
          "El verdadero dominio del español a nivel avanzado no consiste en preferir un registro sobre otro, sino en moverse con soltura entre ambos según lo exija cada contexto, e incluso combinarlos conscientemente dentro de un mismo texto cuando la intención comunicativa lo requiere, como ocurre en la publicidad o en cierto periodismo de opinión que busca cercanía sin renunciar a la claridad."
        ],
        "examples": [
          {
            "es": "resultar pertinente",
            "en": "ser adecuado o apropiado para una situación concreta"
          },
          {
            "es": "el riesgo de ambigüedad regional",
            "en": "la posibilidad de que una palabra se malinterprete por variar su significado según el país"
          },
          {
            "es": "moverse con soltura",
            "en": "actuar con naturalidad y facilidad entre distintas opciones o registros"
          },
          {
            "es": "combinar registros conscientemente",
            "en": "mezclar de forma deliberada dos niveles de habla para lograr un efecto determinado"
          },
          {
            "es": "el periodismo de opinión",
            "en": "el género periodístico centrado en la interpretación y el punto de vista personal del autor"
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa la idea central de esta sección.",
            "sentence": "El criterio decisivo para elegir un registro no es la superioridad de uno sobre otro, sino su ___ en cada situación.",
            "answer": "pertinencia",
            "explanation": "El texto insiste en que lo relevante es la pertinencia del registro para cada contexto comunicativo, no una jerarquía entre formal y coloquial.",
            "hint": "Piensa en la palabra que expresa lo adecuado que resulta algo para una situación concreta."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con el criterio que, según el texto, debe guiar la elección de registro.",
        "sentence": "Lo decisivo al elegir un registro no es su formalidad, sino su ___ para la situación concreta.",
        "answer": "pertinencia",
        "explanation": "El texto insiste en que la pertinencia, y no una supuesta superioridad, es el criterio correcto para elegir entre el español neutro y el coloquial."
      }
    ]
  },
  {
    "slug": "neutral-vs-colloquial-4",
    "level": "C1",
    "number": 105,
    "title": "Español Neutro vs. Coloquial, Part 4 of 6",
    "summary": "Distingue el español neutro de los medios y la documentación técnica del habla coloquial de la vida cotidiana, y aprende a elegir el registro adecuado según la intención y el contexto comunicativo.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Cómo cambia el significado según el registro elegido",
        "body": [
          "Un mismo mensaje puede transmitir intenciones muy distintas según el registro en que se formule, incluso cuando el contenido informativo es idéntico. Decir que una decisión fue desacertada suena a evaluación técnica y distante; decir que fue una metida de pata añade cercanía, complicidad e incluso cierta indulgencia hacia quien la cometió. La elección del registro, entonces, no solo adapta la forma del mensaje, sino que modifica su carga emocional y su efecto sobre quien escucha.",
          "Este fenómeno se vuelve especialmente delicado en la comunicación escrita, donde faltan la entonación y el gesto que en el habla oral matizan una expresión coloquial. Un chiste o una ironía que resultarían evidentes al escucharse pueden malinterpretarse por escrito si el destinatario no comparte el mismo registro o el mismo código cultural, lo que explica por qué ciertos mensajes informales generan malentendidos cuando se sacan de su contexto original."
        ],
        "examples": [
          {
            "es": "una metida de pata",
            "en": "un error cometido de forma torpe o inoportuna"
          },
          {
            "es": "la carga emocional",
            "en": "el componente afectivo que transmite un mensaje además de su contenido informativo"
          },
          {
            "es": "matizar una expresión",
            "en": "suavizar o precisar el sentido de algo dicho, aportándole un tono particular"
          },
          {
            "es": "sacar algo de contexto",
            "en": "interpretar una expresión sin tener en cuenta la situación en la que fue dicha"
          },
          {
            "es": "el código cultural",
            "en": "el conjunto de referencias y convenciones compartidas por una comunidad"
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "Según el texto, ¿qué añade la expresión coloquial 'una metida de pata' frente a la formulación técnica 'una decisión desacertada'?",
            "options": [
              "Mayor precisión estadística",
              "Cercanía, complicidad e indulgencia hacia quien cometió el error",
              "Una connotación exclusivamente negativa y severa",
              "Ninguna diferencia real de significado"
            ],
            "correctIndex": 1,
            "explanation": "El texto explica que la formulación coloquial aporta cercanía y cierta indulgencia, mientras que la técnica suena distante y evaluativa."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "word-order",
        "prompt": "Ordena las palabras para formar una oración sobre el habla coloquial.",
        "words": [
          "el",
          "habla",
          "coloquial",
          "posee",
          "una",
          "riqueza",
          "expresiva",
          "propia"
        ],
        "explanation": "La oración resultante resume la idea de que el registro coloquial no es una versión pobre de la lengua sino una variedad con sus propios recursos: 'El habla coloquial posee una riqueza expresiva propia'."
      }
    ]
  },
  {
    "slug": "neutral-vs-colloquial-5",
    "level": "C1",
    "number": 106,
    "title": "Español Neutro vs. Coloquial, Part 5 of 6",
    "summary": "Distingue el español neutro de los medios y la documentación técnica del habla coloquial de la vida cotidiana, y aprende a elegir el registro adecuado según la intención y el contexto comunicativo.",
    "duration": "9 min",
    "sections": [
      {
        "heading": "En la práctica",
        "body": [
          "— Che, viste la nota que salió hoy sobre la reunión, ¿no? Un embole total, todo en un tono re formal.",
          "— Sí, la leí. Tiene sentido, es un comunicado oficial, tiene que sonar neutro para que se entienda en todos lados.",
          "— Ya sé, pero después me metí a leer los comentarios y ahí sí que la gente se mandó cada comentario...",
          "— Jaja, eso siempre pasa. Ahí la gente escribe como habla, sin filtro ninguno.",
          "— Es que un comunicado institucional no puede sonar así, quedaría fatal, ¿no te parece?",
          "— Totalmente. Imaginate un aviso oficial que dijera 'la cosa se puso fea' en vez de 'la situación se agravó'.",
          "— Sonaría rarísimo, aunque en el fondo signifique lo mismo.",
          "— Exacto, por eso cada registro tiene su lugar: uno para informar sin ambigüedades, otro para charlar entre nosotros."
        ]
      },
      {
        "heading": "Vocabulario: el español neutro y el coloquial",
        "body": [
          "35 palabras relacionadas con el español neutro y el coloquial."
        ],
        "examples": [
          {
            "es": "el español neutro",
            "en": "una variedad construida para resultar comprensible en distintos países hispanohablantes"
          },
          {
            "es": "el habla coloquial",
            "en": "la forma de expresarse propia de la conversación cotidiana y espontánea"
          },
          {
            "es": "el registro estándar",
            "en": "el nivel de habla considerado correcto y ampliamente aceptado"
          },
          {
            "es": "la locución informal",
            "en": "una expresión fija propia del habla cotidiana"
          },
          {
            "es": "el argot",
            "en": "el vocabulario propio de un grupo social o profesional determinado"
          },
          {
            "es": "la muletilla",
            "en": "una palabra o frase repetida habitualmente sin aportar demasiado significado"
          },
          {
            "es": "el coloquialismo",
            "en": "una expresión propia del habla informal y cotidiana"
          },
          {
            "es": "la jerga juvenil",
            "en": "el vocabulario característico del habla de los jóvenes"
          },
          {
            "es": "el habla espontánea",
            "en": "la forma de hablar que surge sin planificación previa"
          },
          {
            "es": "la expresión llana",
            "en": "una forma de decir algo sencilla y sin adornos"
          },
          {
            "es": "el desenfado verbal",
            "en": "la naturalidad y falta de solemnidad al hablar"
          },
          {
            "es": "la naturalidad expresiva",
            "en": "la cualidad de expresarse sin artificio ni forzamiento"
          },
          {
            "es": "la artificiosidad del habla",
            "en": "la falta de naturalidad en la manera de expresarse"
          },
          {
            "es": "el doblaje neutro",
            "en": "la traducción oral de un contenido audiovisual realizada en español neutro"
          },
          {
            "es": "la variedad estándar",
            "en": "la forma de una lengua considerada de referencia general"
          },
          {
            "es": "el nivel de habla",
            "en": "el grado de formalidad o informalidad con que alguien se expresa"
          },
          {
            "es": "la oralidad",
            "en": "el conjunto de rasgos propios de la lengua hablada frente a la escrita"
          },
          {
            "es": "la escritura formal",
            "en": "la modalidad de redacción que sigue las normas más cuidadas de una lengua"
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "matching",
        "instructions": "Relaciona cada situación comunicativa con el registro más adecuado.",
        "pairs": [
          {
            "left": "un manual de instrucciones internacional",
            "right": "el español neutro"
          },
          {
            "left": "una conversación entre amigos de toda la vida",
            "right": "el habla coloquial"
          },
          {
            "left": "un noticiero de alcance internacional",
            "right": "el español neutro"
          },
          {
            "left": "un mensaje de voz enviado a un familiar cercano",
            "right": "el habla coloquial"
          }
        ],
        "explanation": "Cada contexto exige un registro distinto según su función comunicativa: informar con claridad universal o transmitir cercanía dentro de un grupo."
      }
    ]
  },
  {
    "slug": "neutral-vs-colloquial-6",
    "level": "C1",
    "number": 107,
    "title": "Español Neutro vs. Coloquial, Part 6 of 6",
    "summary": "Distingue el español neutro de los medios y la documentación técnica del habla coloquial de la vida cotidiana, y aprende a elegir el registro adecuado según la intención y el contexto comunicativo.",
    "duration": "6 min",
    "sections": [
      {
        "heading": "Vocabulario: el español neutro y el coloquial (cont'd)",
        "body": [],
        "examples": [
          {
            "es": "la espontaneidad discursiva",
            "en": "la falta de planificación previa en el modo de construir un discurso"
          },
          {
            "es": "el matiz irónico",
            "en": "un tono que da a entender lo contrario de lo que literalmente se dice"
          },
          {
            "es": "el registro vulgar",
            "en": "nivel de habla marcado por expresiones groseras o muy informales"
          },
          {
            "es": "la carga connotativa",
            "en": "el conjunto de significados asociados que una palabra transmite además de su significado literal"
          },
          {
            "es": "el sarcasmo velado",
            "en": "una burla disimulada que no se expresa de forma abierta"
          },
          {
            "es": "la hipérbole coloquial",
            "en": "una exageración propia del habla informal usada con fines expresivos"
          },
          {
            "es": "el diminutivo afectivo",
            "en": "una forma diminutiva usada para transmitir cariño o cercanía"
          },
          {
            "es": "el aumentativo despectivo",
            "en": "una forma aumentativa usada para transmitir desprecio o burla"
          },
          {
            "es": "la interjección coloquial",
            "en": "una palabra breve y espontánea usada para expresar una emoción en el habla informal"
          },
          {
            "es": "el vulgarismo",
            "en": "una forma considerada incorrecta o poco cuidada dentro del uso general de una lengua"
          },
          {
            "es": "la vacilación discursiva",
            "en": "la duda o titubeo que aparece al construir un discurso de forma espontánea"
          },
          {
            "es": "el relleno conversacional",
            "en": "una palabra o sonido que ocupa espacio en una conversación sin aportar contenido"
          },
          {
            "es": "la redundancia expresiva",
            "en": "la repetición innecesaria de una idea, a veces usada con fines de énfasis"
          },
          {
            "es": "el calco coloquial",
            "en": "una expresión informal formada por imitación de otra estructura o lengua"
          },
          {
            "es": "la fórmula hecha",
            "en": "una expresión fija cuyo uso está fuertemente convencionalizado"
          },
          {
            "es": "el refrán popular",
            "en": "una frase breve y tradicional que transmite una enseñanza o una observación general"
          },
          {
            "es": "la frase hecha",
            "en": "una combinación fija de palabras cuyo significado no se deduce de sus componentes por separado"
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "¿Por qué, según el texto, un chiste coloquial escrito puede malinterpretarse más fácilmente que uno dicho en voz alta?",
        "options": [
          "Porque el español neutro prohíbe el humor",
          "Porque en la escritura faltan la entonación y el gesto que matizan la expresión oral",
          "Porque los chistes escritos siempre son más largos",
          "Porque el destinatario nunca comparte el mismo idioma"
        ],
        "correctIndex": 1,
        "explanation": "El texto explica que la falta de entonación y gesto en la escritura dificulta captar los matices que sí resultan evidentes al hablar."
      }
    ]
  },
  {
    "slug": "formal-correspondence-1",
    "level": "C1",
    "number": 108,
    "title": "Cartas y Correos Formales, Part 1 of 6",
    "summary": "Aprende la estructura, las fórmulas fijas y el equilibrio entre precisión y cortesía que distinguen una carta o un correo formal bien redactado en español.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "La arquitectura de una carta o un correo formal",
        "body": [
          "La correspondencia formal en español sigue una estructura reconocible que rara vez se improvisa: un encabezamiento con la fórmula de saludo, un cuerpo dividido en párrafos claros con el motivo del escrito, y un cierre con la fórmula de despedida y la firma. Esta arquitectura no es un capricho estilístico, sino una convención que permite al destinatario ubicar rápidamente la información esencial sin tener que leer todo el texto para entender su propósito.",
          "A diferencia de un mensaje informal, donde el orden de las ideas puede ser flexible, en un escrito formal se espera que el asunto quede planteado desde el primer párrafo, que el desarrollo aporte los detalles necesarios sin digresiones y que el cierre reitere, si corresponde, la petición o expectativa concreta del remitente. Esta previsibilidad estructural es, precisamente, lo que da seriedad y profesionalismo a un documento."
        ],
        "examples": [
          {
            "es": "el encabezamiento",
            "en": "la parte inicial de un escrito donde se sitúa la fórmula de saludo"
          },
          {
            "es": "el cuerpo del mensaje",
            "en": "la parte central de un escrito donde se desarrolla el contenido principal"
          },
          {
            "es": "una convención",
            "en": "una norma aceptada por costumbre dentro de una comunidad"
          },
          {
            "es": "plantear el asunto",
            "en": "exponer con claridad el motivo de un escrito"
          },
          {
            "es": "una digresión",
            "en": "un desvío del tema principal hacia asuntos secundarios"
          },
          {
            "es": "la previsibilidad estructural",
            "en": "la cualidad de un texto de seguir un orden esperado y reconocible"
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Qué se espera, según el texto, que ocurra desde el primer párrafo de un escrito formal?",
            "options": [
              "Que se incluyan varias digresiones para dar contexto",
              "Que el asunto del escrito quede planteado con claridad",
              "Que se repita la fórmula de despedida",
              "Que se omita cualquier referencia al motivo del escrito"
            ],
            "correctIndex": 1,
            "explanation": "El texto indica que, a diferencia de un mensaje informal, en la correspondencia formal el asunto debe quedar planteado desde el primer párrafo."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "¿Cuál de las siguientes fórmulas resulta apropiada para abrir un correo formal dirigido a una autoridad?",
        "options": [
          "Qué tal, ¿cómo va todo?",
          "Estimada señora, por medio de la presente...",
          "Hola, te escribo para...",
          "Buenas, cuéntame"
        ],
        "correctIndex": 1,
        "explanation": "Estimada señora, por medio de la presente constituye una fórmula de apertura solemne, adecuada para un escrito dirigido a una autoridad."
      }
    ]
  },
  {
    "slug": "formal-correspondence-2",
    "level": "C1",
    "number": 109,
    "title": "Cartas y Correos Formales, Part 2 of 6",
    "summary": "Aprende la estructura, las fórmulas fijas y el equilibrio entre precisión y cortesía que distinguen una carta o un correo formal bien redactado en español.",
    "duration": "10 min",
    "sections": [
      {
        "heading": "Las fórmulas fijas de saludo y despedida",
        "body": [
          "El español formal dispone de un repertorio bastante estable de fórmulas de apertura y cierre, y elegir la adecuada según el grado de formalidad y la relación previa con el destinatario resulta tan importante como el contenido mismo del mensaje. Estimado señor o estimada señora, seguido del apellido, constituye una apertura segura cuando existe cierta distancia jerárquica; muy señor mío o distinguida señora resultan aún más solemnes y se reservan para instituciones o autoridades.",
          "El cierre sigue una lógica paralela: atentamente funciona en casi cualquier contexto profesional, mientras que quedo a la espera de su respuesta o quedo a su disposición para cualquier consulta añaden una nota de cortesía adicional antes de la despedida final. Combinar un saludo excesivamente solemne con un cierre demasiado informal, o viceversa, produce un efecto de descuido que un lector atento percibe de inmediato."
        ],
        "examples": [
          {
            "es": "un repertorio estable",
            "en": "un conjunto de expresiones fijas y reconocidas dentro de un uso determinado"
          },
          {
            "es": "una apertura segura",
            "en": "una fórmula de saludo que resulta apropiada en la mayoría de los contextos formales"
          },
          {
            "es": "la distancia jerárquica",
            "en": "la diferencia de posición o autoridad entre el remitente y el destinatario"
          }
        ]
      },
      {
        "heading": "Las fórmulas fijas de saludo y despedida (cont'd)",
        "body": [],
        "examples": [
          {
            "es": "una nota de cortesía adicional",
            "en": "un matiz de amabilidad que se suma a una fórmula ya de por sí formal"
          },
          {
            "es": "un efecto de descuido",
            "en": "una impresión de falta de cuidado que percibe quien lee un escrito mal equilibrado"
          },
          {
            "es": "quedar a la espera de algo",
            "en": "permanecer en actitud de esperar una respuesta o una acción del destinatario"
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa la fórmula de cierre habitual en un correo formal en el que se espera una respuesta.",
            "sentence": "Quedo a la ___ de su respuesta a la mayor brevedad posible.",
            "answer": "espera",
            "explanation": "La fórmula fija quedo a la espera de su respuesta es una de las despedidas más habituales en la correspondencia formal.",
            "hint": "Piensa en la fórmula que indica que el remitente aguarda una contestación."
          },
          {
            "type": "multiple-choice",
            "question": "¿Qué ocurre, según el texto, si se combina un saludo muy solemne con un cierre demasiado informal?",
            "options": [
              "El escrito resulta más persuasivo",
              "Se produce un efecto de descuido que un lector atento percibe de inmediato",
              "El destinatario percibe mayor cercanía",
              "No existe ningún efecto perceptible"
            ],
            "correctIndex": 1,
            "explanation": "El texto advierte que combinar registros dispares entre el saludo y el cierre genera una impresión de descuido en el lector."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "fill-blank",
        "prompt": "Completa la fórmula fija que se emplea para retomar un intercambio previo sin resumirlo por completo.",
        "sentence": "En relación con el ___ de la referencia, le escribo para confirmar los detalles acordados.",
        "answer": "asunto",
        "explanation": "La expresión fija asunto de la referencia permite retomar un tema previamente tratado sin necesidad de resumirlo íntegramente."
      }
    ]
  },
  {
    "slug": "formal-correspondence-3",
    "level": "C1",
    "number": 110,
    "title": "Cartas y Correos Formales, Part 3 of 6",
    "summary": "Aprende la estructura, las fórmulas fijas y el equilibrio entre precisión y cortesía que distinguen una carta o un correo formal bien redactado en español.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Fórmulas de transición y expresiones fijas del cuerpo del texto",
        "body": [
          "Además del saludo y la despedida, el español formal recurre a expresiones fijas que estructuran internamente el cuerpo del mensaje y le otorgan un tono institucional reconocible. Por medio de la presente introduce el motivo del escrito de forma solemne; en relación con el asunto de la referencia retoma un intercambio previo sin necesidad de resumirlo por completo; y agradezco de antemano su atención cierra una petición dejando constancia de cortesía anticipada.",
          "Estas fórmulas cumplen una función que va más allá de lo decorativo: permiten que el lector reconozca de inmediato la naturaleza institucional del escrito y facilitan la lectura rápida de documentos similares, algo especialmente valioso en contextos donde se manejan grandes volúmenes de correspondencia. Sin embargo, un uso excesivo de estas fórmulas, sin aportar contenido concreto entre una y otra, puede producir un texto hueco, cargado de solemnidad pero vacío de sustancia."
        ],
        "examples": [
          {
            "es": "por medio de la presente",
            "en": "una fórmula fija que introduce el motivo de un escrito formal"
          },
          {
            "es": "el asunto de la referencia",
            "en": "el tema previamente tratado al que un escrito formal vuelve a hacer alusión"
          },
          {
            "es": "dejar constancia de algo",
            "en": "hacer explícito por escrito un hecho o una intención para que quede registrado"
          },
          {
            "es": "una cortesía anticipada",
            "en": "una muestra de agradecimiento expresada antes de recibir la respuesta esperada"
          },
          {
            "es": "un texto hueco",
            "en": "un escrito cargado de fórmulas pero con poco contenido real"
          },
          {
            "es": "un tono institucional",
            "en": "un estilo de escritura propio de organismos, empresas o entidades formales"
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Qué función cumplen las fórmulas fijas del cuerpo de un escrito formal según el texto?",
            "options": [
              "Sustituir por completo la necesidad de explicar el motivo del escrito",
              "Otorgar un tono institucional reconocible y facilitar la lectura rápida",
              "Impedir que el lector identifique el propósito del documento",
              "Servir únicamente como adorno sin ninguna función práctica"
            ],
            "correctIndex": 1,
            "explanation": "El texto explica que estas fórmulas otorgan reconocibilidad institucional y agilizan la lectura, aunque advierte contra su abuso vacío de contenido."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multi-select",
        "question": "¿Cuáles de las siguientes exigencias debe equilibrar un buen escrito formal, según lo estudiado?",
        "options": [
          "La precisión",
          "La cortesía",
          "La extensión ilimitada",
          "La concisión"
        ],
        "correctIndexes": [
          0,
          1,
          3
        ],
        "explanation": "Un buen escrito formal equilibra precisión, cortesía y concisión; la extensión ilimitada no es un objetivo deseable en la correspondencia formal."
      }
    ]
  },
  {
    "slug": "formal-correspondence-4",
    "level": "C1",
    "number": 111,
    "title": "Cartas y Correos Formales, Part 4 of 6",
    "summary": "Aprende la estructura, las fórmulas fijas y el equilibrio entre precisión y cortesía que distinguen una carta o un correo formal bien redactado en español.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "Precisión, cortesía y concisión: el equilibrio del escrito formal",
        "body": [
          "Un buen escrito formal equilibra tres exigencias que a veces parecen tirar en direcciones opuestas: la precisión, que exige nombrar con exactitud fechas, referencias y solicitudes; la cortesía, que exige suavizar cualquier petición o reclamo mediante fórmulas atenuadoras; y la concisión, que exige eliminar cualquier información irrelevante para el propósito del mensaje. Un escrito extenso no es necesariamente más completo, y a menudo resulta menos eficaz que uno breve y bien organizado.",
          "Lograr este equilibrio exige revisar el texto una vez redactado, preguntándose si cada frase aporta algo indispensable o si simplemente ocupa espacio. Una petición formulada con exceso de rodeos puede resultar tan ineficaz como una petición demasiado directa que prescinda de cualquier fórmula de cortesía; el punto medio entre ambos extremos es precisamente lo que distingue una correspondencia profesional bien redactada de una improvisada."
        ],
        "examples": [
          {
            "es": "una fórmula atenuadora",
            "en": "una expresión que suaviza el tono de una petición o un reclamo"
          },
          {
            "es": "un exceso de rodeos",
            "en": "una forma de expresarse que da demasiadas vueltas antes de llegar al punto central"
          },
          {
            "es": "resultar ineficaz",
            "en": "no lograr el efecto o el objetivo comunicativo esperado"
          },
          {
            "es": "el punto medio",
            "en": "el equilibrio adecuado entre dos extremos opuestos"
          },
          {
            "es": "una información irrelevante",
            "en": "un dato que no aporta nada esencial al propósito de un escrito"
          }
        ],
        "checkpoint": [
          {
            "type": "multi-select",
            "question": "¿Cuáles de las siguientes exigencias debe equilibrar, según el texto, un buen escrito formal?",
            "options": [
              "La precisión",
              "La extensión máxima posible",
              "La cortesía",
              "La concisión"
            ],
            "correctIndexes": [
              0,
              2,
              3
            ],
            "explanation": "El texto identifica la precisión, la cortesía y la concisión como las tres exigencias que un buen escrito formal debe equilibrar; la extensión máxima no aparece como un valor deseable en sí mismo."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "word-order",
        "prompt": "Ordena las palabras para formar el cierre habitual de un correo formal.",
        "words": [
          "quedo",
          "a",
          "la",
          "espera",
          "de",
          "su",
          "respuesta"
        ],
        "explanation": "La oración resultante es una de las fórmulas de cierre más comunes en la correspondencia formal: 'Quedo a la espera de su respuesta'."
      }
    ]
  },
  {
    "slug": "formal-correspondence-5",
    "level": "C1",
    "number": 112,
    "title": "Cartas y Correos Formales, Part 5 of 6",
    "summary": "Aprende la estructura, las fórmulas fijas y el equilibrio entre precisión y cortesía que distinguen una carta o un correo formal bien redactado en español.",
    "duration": "9 min",
    "sections": [
      {
        "heading": "En la práctica",
        "body": [
          "Estimada señora Reyes:",
          "Por medio de la presente, me dirijo a usted en relación con el asunto de la referencia, tratado en nuestra reunión del pasado lunes.",
          "Le escribo para confirmar que la documentación solicitada ha sido remitida como adjunto al presente correo, junto con la constancia correspondiente.",
          "Asimismo, quisiera solicitarle amablemente que, de ser posible, se sirva confirmar la recepción de dichos documentos a la mayor brevedad, dado que el plazo indicado vence a final de mes.",
          "Le agradezco de antemano su atención y quedo a la espera de su respuesta.",
          "Sin otro particular, aprovecho la ocasión para saludarla atentamente.",
          "Atentamente,",
          "Marcos Fuentes"
        ]
      },
      {
        "heading": "Vocabulario: la correspondencia formal",
        "body": [
          "35 palabras relacionadas con la correspondencia formal."
        ],
        "examples": [
          {
            "es": "el encabezamiento",
            "en": "la parte inicial de un escrito donde se coloca la fórmula de saludo"
          },
          {
            "es": "el destinatario",
            "en": "la persona o entidad a quien va dirigido un escrito"
          },
          {
            "es": "el remitente",
            "en": "la persona o entidad que envía un escrito"
          },
          {
            "es": "la fórmula de saludo",
            "en": "la expresión fija con la que se abre un escrito formal"
          },
          {
            "es": "la fórmula de despedida",
            "en": "la expresión fija con la que se cierra un escrito formal"
          },
          {
            "es": "el membrete",
            "en": "el encabezado impreso de una institución que identifica al remitente de un documento"
          },
          {
            "es": "el asunto de un correo",
            "en": "la línea que resume brevemente el motivo de un mensaje"
          },
          {
            "es": "el cuerpo del mensaje",
            "en": "la parte central de un escrito donde se desarrolla el contenido principal"
          },
          {
            "es": "la posdata",
            "en": "un añadido breve que se incluye después de la firma de un escrito"
          },
          {
            "es": "el adjunto",
            "en": "un documento que se envía junto con un correo o una carta"
          },
          {
            "es": "la solicitud formal",
            "en": "una petición redactada siguiendo las convenciones del registro formal"
          },
          {
            "es": "el comprobante",
            "en": "documento que certifica la realización de un trámite o un pago"
          },
          {
            "es": "el trámite administrativo",
            "en": "una gestión que se realiza siguiendo un procedimiento oficial"
          },
          {
            "es": "la notificación oficial",
            "en": "un aviso formal emitido por una entidad con carácter vinculante"
          },
          {
            "es": "el acuse de recibo",
            "en": "una confirmación por escrito de que un documento ha sido recibido"
          },
          {
            "es": "la referencia de un escrito",
            "en": "el dato que identifica un documento previo al que se hace alusión"
          },
          {
            "es": "la redacción formal",
            "en": "el modo de escribir siguiendo las convenciones de un registro cuidado y protocolario"
          },
          {
            "es": "el tono protocolar",
            "en": "un estilo de expresión propio de los actos y documentos oficiales"
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "matching",
        "instructions": "Relaciona cada parte de un escrito formal con su función.",
        "pairs": [
          {
            "left": "el encabezamiento",
            "right": "situar la fórmula de saludo al inicio del escrito"
          },
          {
            "left": "el cuerpo del mensaje",
            "right": "desarrollar el contenido principal del escrito"
          },
          {
            "left": "la fórmula de despedida",
            "right": "cerrar el escrito con cortesía antes de la firma"
          },
          {
            "left": "la posdata",
            "right": "añadir información breve después de la firma"
          }
        ],
        "explanation": "Cada parte de un escrito formal cumple una función específica dentro de su arquitectura general."
      }
    ]
  },
  {
    "slug": "formal-correspondence-6",
    "level": "C1",
    "number": 113,
    "title": "Cartas y Correos Formales, Part 6 of 6",
    "summary": "Aprende la estructura, las fórmulas fijas y el equilibrio entre precisión y cortesía que distinguen una carta o un correo formal bien redactado en español.",
    "duration": "6 min",
    "sections": [
      {
        "heading": "Vocabulario: la correspondencia formal (cont'd)",
        "body": [],
        "examples": [
          {
            "es": "la cortesía epistolar",
            "en": "el conjunto de fórmulas de amabilidad propias de la correspondencia"
          },
          {
            "es": "el cierre cordial",
            "en": "la despedida de un escrito formulada con amabilidad"
          },
          {
            "es": "la fórmula reverencial",
            "en": "una expresión de gran respeto dirigida a una autoridad o institución"
          },
          {
            "es": "el oficio",
            "en": "un documento formal empleado en la comunicación entre instituciones"
          },
          {
            "es": "la circular",
            "en": "un comunicado dirigido a varios destinatarios con un mismo contenido"
          },
          {
            "es": "el memorando",
            "en": "un escrito breve empleado para comunicar información interna en una institución"
          },
          {
            "es": "la instancia",
            "en": "un escrito formal mediante el cual se presenta una solicitud ante una autoridad"
          },
          {
            "es": "el escrito formal",
            "en": "cualquier documento redactado siguiendo las convenciones del registro protocolario"
          },
          {
            "es": "la firma",
            "en": "la rúbrica que autentica un documento al final del escrito"
          },
          {
            "es": "el sello institucional",
            "en": "una marca oficial que certifica la procedencia de un documento"
          },
          {
            "es": "la copia de cortesía",
            "en": "un duplicado de un escrito enviado a alguien por deferencia, sin ser el destinatario principal"
          },
          {
            "es": "el destinatario colectivo",
            "en": "un conjunto de personas a las que se dirige un mismo escrito"
          },
          {
            "es": "la claridad expositiva",
            "en": "la cualidad de un escrito de exponer sus ideas con orden y precisión"
          },
          {
            "es": "la concisión redaccional",
            "en": "la capacidad de expresar una idea con el menor número de palabras necesarias"
          },
          {
            "es": "el formulismo epistolar",
            "en": "el uso reiterado de fórmulas fijas propias de la correspondencia formal"
          },
          {
            "es": "la despedida atenta",
            "en": "una fórmula de cierre que expresa respeto y cordialidad"
          },
          {
            "es": "el protocolo de cortesía",
            "en": "el conjunto de normas de trato respetuoso que rige un escrito formal"
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "Según el texto, ¿qué ocurre cuando un escrito formal abusa de fórmulas fijas sin aportar contenido concreto?",
        "options": [
          "El escrito se vuelve más persuasivo automáticamente",
          "El texto resulta hueco, cargado de solemnidad pero vacío de sustancia",
          "El destinatario percibe mayor cercanía personal",
          "No existe ninguna consecuencia perceptible para el lector"
        ],
        "correctIndex": 1,
        "explanation": "El texto advierte que el uso excesivo de fórmulas fijas sin contenido real produce un escrito hueco."
      }
    ]
  },
  {
    "slug": "academic-essay-writing-part-1-1",
    "level": "C1",
    "number": 114,
    "title": "Lenguaje Académico y Ensayos Argumentativos (Parte 1 de 2), Part 1 of 3",
    "summary": "Aprende a estructurar un argumento académico en español, dominar los conectores lógicos, evitar la primera persona y emplear la atenuación propia del discurso académico maduro.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "La tesis y la hipótesis como columna vertebral del ensayo",
        "body": [
          "Todo ensayo argumentativo académico gira alrededor de una tesis: una afirmación clara y defendible que el resto del texto se propone sostener mediante evidencia y razonamiento. A diferencia de una opinión suelta, la tesis debe formularse de manera que admita, al menos en principio, una postura contraria razonable, porque un ensayo que defiende algo evidente para cualquiera carece de verdadero interés argumentativo.",
          "La hipótesis, por su parte, cumple una función distinta: no es la conclusión que el ensayo defiende, sino la suposición de partida que la investigación o el razonamiento intentan confirmar o refutar a lo largo del desarrollo. Confundir ambos conceptos —tratar la hipótesis como si ya fuera la tesis demostrada— es uno de los errores más frecuentes entre quienes se inician en la escritura académica, y debilita considerablemente la solidez del argumento final."
        ],
        "examples": [
          {
            "es": "una tesis defendible",
            "en": "una afirmación que puede sostenerse con argumentos, aunque admita objeciones razonables"
          },
          {
            "es": "una postura contraria razonable",
            "en": "una posición opuesta que también podría defenderse con argumentos válidos"
          },
          {
            "es": "la suposición de partida",
            "en": "la idea inicial que un razonamiento o una investigación intenta comprobar"
          },
          {
            "es": "confirmar una hipótesis",
            "en": "demostrar mediante evidencia que una suposición inicial resultó cierta"
          },
          {
            "es": "refutar una hipótesis",
            "en": "demostrar mediante evidencia que una suposición inicial resultó falsa"
          },
          {
            "es": "la solidez de un argumento",
            "en": "la fuerza y coherencia con que un razonamiento sostiene una conclusión"
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "Según el texto, ¿qué característica debe tener una buena tesis académica?",
            "options": [
              "Debe ser evidente para cualquier lector sin necesidad de argumentarla",
              "Debe admitir, al menos en principio, una postura contraria razonable",
              "Debe formularse siempre como una pregunta sin respuesta",
              "Debe coincidir exactamente con la hipótesis inicial"
            ],
            "correctIndex": 1,
            "explanation": "El texto explica que una tesis interesante debe poder ser cuestionada por una postura contraria razonable; de lo contrario, carece de valor argumentativo."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "¿Qué distingue a una hipótesis de una tesis, según lo estudiado?",
        "options": [
          "Son exactamente lo mismo y pueden usarse indistintamente",
          "La hipótesis es la suposición de partida; la tesis es la afirmación que el ensayo defiende",
          "La tesis siempre antecede a la hipótesis en cualquier investigación",
          "La hipótesis nunca puede refutarse"
        ],
        "correctIndex": 1,
        "explanation": "El texto distingue con claridad ambos conceptos: la hipótesis es el punto de partida que se somete a prueba, mientras que la tesis es la afirmación central que el ensayo sostiene."
      }
    ]
  },
  {
    "slug": "academic-essay-writing-part-1-2",
    "level": "C1",
    "number": 115,
    "title": "Lenguaje Académico y Ensayos Argumentativos (Parte 1 de 2), Part 2 of 3",
    "summary": "Aprende a estructurar un argumento académico en español, dominar los conectores lógicos, evitar la primera persona y emplear la atenuación propia del discurso académico maduro.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "La impersonalidad y la evitación de la primera persona",
        "body": [
          "Una de las convenciones más marcadas del lenguaje académico en español es la tendencia a evitar la primera persona del singular, sustituyéndola por construcciones impersonales o por la primera persona del plural. En lugar de escribir creo que los datos confirman la hipótesis, el registro académico prefiere formulaciones como los datos permiten sostener que, cabe afirmar que o se observa que, que desplazan el énfasis desde el autor individual hacia el razonamiento mismo.",
          "Esta preferencia no responde a un simple capricho estilístico, sino a una convención que busca presentar el argumento como algo sostenido por la evidencia y la lógica, y no como una simple opinión personal del autor. El uso del se impersonal y de la voz pasiva refleja cumple precisamente esta función: diluir la presencia explícita del autor sin renunciar a la responsabilidad intelectual sobre lo afirmado."
        ],
        "examples": [
          {
            "es": "una construcción impersonal",
            "en": "una forma gramatical que evita señalar explícitamente a un sujeto concreto"
          },
          {
            "es": "el se impersonal",
            "en": "la partícula se usada para formular una afirmación sin atribuirla a un sujeto explícito"
          },
          {
            "es": "la voz pasiva refleja",
            "en": "una construcción con se que expresa una acción sin mencionar directamente a quien la realiza"
          },
          {
            "es": "diluir la presencia del autor",
            "en": "reducir la visibilidad explícita de quien escribe dentro del texto"
          },
          {
            "es": "la responsabilidad intelectual",
            "en": "el compromiso del autor con la validez de lo que afirma en su escrito"
          },
          {
            "es": "desplazar el énfasis",
            "en": "trasladar la atención principal de un elemento del discurso hacia otro"
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Reescribe la idea evitando la primera persona, según la convención académica estudiada.",
            "sentence": "En vez de decir 'creo que los resultados son concluyentes', el registro académico prefiere decir que los resultados ___ concluyentes.",
            "answer": "resultan",
            "explanation": "El registro académico prefiere formulaciones impersonales como los resultados resultan concluyentes, que desplazan el énfasis del autor hacia la evidencia misma.",
            "hint": "Piensa en un verbo que describa la evidencia sin mencionar al autor."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "fill-blank",
        "prompt": "Completa la oración evitando la primera persona, según la convención académica.",
        "sentence": "En vez de decir 'pienso que la evidencia es suficiente', el registro académico prefiere decir que la evidencia ___ suficiente.",
        "answer": "resulta",
        "explanation": "El registro académico evita la primera persona y prefiere formulaciones impersonales como la evidencia resulta suficiente."
      }
    ]
  },
  {
    "slug": "academic-essay-writing-part-1-3",
    "level": "C1",
    "number": 116,
    "title": "Lenguaje Académico y Ensayos Argumentativos (Parte 1 de 2), Part 3 of 3",
    "summary": "Aprende a estructurar un argumento académico en español, dominar los conectores lógicos, evitar la primera persona y emplear la atenuación propia del discurso académico maduro.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Conectores argumentativos y el andamiaje lógico del ensayo",
        "body": [
          "El ensayo académico avanza mediante una red de conectores que hacen explícita la relación lógica entre una idea y la siguiente: por consiguiente y en consecuencia señalan una conclusión que se desprende de lo anterior; sin embargo y no obstante introducen una objeción o un matiz; asimismo y por otra parte añaden un argumento adicional sin contradecir el anterior. Sin este andamiaje, un texto puede contener ideas correctas por separado y, aun así, resultar difícil de seguir como argumento unificado.",
          "El uso de estos conectores exige, sin embargo, precisión semántica: emplear por consiguiente donde en realidad corresponde sin embargo invierte la lógica del razonamiento y confunde al lector, por más correcta que sea la gramática de la oración. Cabe señalar, además, que un ensayo maduro no abusa de los conectores más vistosos, sino que los dosifica allí donde realmente aclaran una transición que de otro modo resultaría ambigua."
        ],
        "examples": [
          {
            "es": "un conector argumentativo",
            "en": "una palabra o expresión que señala la relación lógica entre dos ideas de un texto"
          },
          {
            "es": "el andamiaje lógico",
            "en": "la estructura de relaciones que sostiene la coherencia de un argumento"
          },
          {
            "es": "desprenderse de algo",
            "en": "derivarse lógicamente de una idea o un dato anterior"
          },
          {
            "es": "invertir la lógica",
            "en": "alterar el sentido correcto de una relación de causa o consecuencia"
          },
          {
            "es": "dosificar un recurso",
            "en": "usar un recurso con mesura, evitando tanto su ausencia como su exceso"
          },
          {
            "es": "un argumento unificado",
            "en": "un razonamiento cuyas partes se conectan de forma coherente entre sí"
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Qué conector resulta más adecuado para introducir una conclusión que se desprende de lo anterior?",
            "options": [
              "Sin embargo",
              "Por consiguiente",
              "No obstante",
              "A pesar de ello"
            ],
            "correctIndex": 1,
            "explanation": "Por consiguiente señala precisamente una conclusión derivada del razonamiento anterior, a diferencia de sin embargo o no obstante, que introducen objeciones."
          },
          {
            "type": "multi-select",
            "question": "¿Cuáles de los siguientes conectores introducen una objeción o un matiz según el texto?",
            "options": [
              "Sin embargo",
              "Por consiguiente",
              "No obstante",
              "Asimismo"
            ],
            "correctIndexes": [
              0,
              2
            ],
            "explanation": "Sin embargo y no obstante introducen una objeción o un matiz, mientras que por consiguiente marca una conclusión y asimismo añade un argumento sin contradicción."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multi-select",
        "question": "¿Cuáles de las siguientes expresiones cumplen una función de atenuación en el discurso académico?",
        "options": [
          "Los datos sugieren",
          "Es evidente que, sin excepción",
          "Parecería razonable pensar que",
          "Todo indica que"
        ],
        "correctIndexes": [
          0,
          2,
          3
        ],
        "explanation": "Las expresiones sugieren, parecería razonable pensar que y todo indica que atenúan la certeza de una afirmación; es evidente que, sin excepción constituye, en cambio, una afirmación categórica."
      }
    ]
  },
  {
    "slug": "academic-essay-writing-part-1-mastery-check",
    "level": "C1",
    "number": 117,
    "title": "Prueba de Dominio: Lenguaje Académico y Ensayos Argumentativos (Parte 1)",
    "summary": "Una prueba exigente sobre la distinción entre tesis e hipótesis, la impersonalidad del registro académico y la precisión de los conectores argumentativos, aplicada a fragmentos de ensayo inéditos.",
    "duration": "10 min",
    "sections": [],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "Un estudiante escribe: «Partimos de la hipótesis de que el uso constante de redes sociales reduce la capacidad de concentración; el objetivo de este ensayo es determinar si los datos disponibles confirman o refutan esa suposición». ¿Qué es, exactamente, la hipótesis en este fragmento?",
        "options": [
          "La afirmación final que el ensayo defenderá una vez concluido el análisis.",
          "La suposición de partida que la investigación se propone confirmar o refutar mediante el desarrollo del ensayo.",
          "Una opinión personal del autor sin ninguna relación con el resto del texto.",
          "El título completo del ensayo académico."
        ],
        "correctIndex": 1,
        "explanation": "La hipótesis es la suposición inicial que un razonamiento o una investigación intenta confirmar o refutar; no debe confundirse con la tesis, que sería la conclusión que el ensayo termina defendiendo una vez analizados los datos."
      },
      {
        "type": "fill-blank",
        "prompt": "Reescribe la idea evitando la primera persona, según la convención académica estudiada.",
        "sentence": "En vez de decir 'pienso que el modelo económico ha fracasado', el registro académico prefiere decir que el modelo económico ___ haber fracasado.",
        "answer": "parece",
        "hint": "Piensa en un verbo que atenúe la certeza de la afirmación sin recurrir a la primera persona.",
        "explanation": "«Parece haber fracasado» desplaza el énfasis desde el autor individual hacia el razonamiento mismo, y añade además un matiz de atenuación propio del discurso académico maduro."
      },
      {
        "type": "multiple-choice",
        "question": "¿Qué función cumple el «se» impersonal en la oración «se observa una correlación clara entre ambas variables»?",
        "options": [
          "Convierte la oración en una pregunta retórica dirigida al lector.",
          "Formula la afirmación sin atribuirla explícitamente a un sujeto concreto, presentándola como sostenida por la evidencia y no como una opinión personal.",
          "Indica que la correlación observada es, en realidad, falsa.",
          "Sustituye obligatoriamente a cualquier verbo en primera persona del plural."
        ],
        "correctIndex": 1,
        "explanation": "El «se» impersonal diluye la presencia explícita del autor sin renunciar a la responsabilidad intelectual sobre lo afirmado, presentando el argumento como sostenido por el razonamiento y la evidencia, no como una simple opinión personal."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa con el conector que introduzca una objeción frente a lo afirmado anteriormente.",
        "sentence": "El primer estudio no halló resultados significativos; ___, un análisis posterior con una muestra mayor sí confirmó la hipótesis inicial.",
        "answer": "sin embargo",
        "hint": "Se necesita un conector que introduzca un matiz u objeción, no una conclusión.",
        "explanation": "«Sin embargo» introduce aquí una objeción o un matiz frente a la afirmación anterior, señalando que un estudio posterior contradijo el resultado del primero."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa con el conector que introduzca una conclusión derivada de lo anterior.",
        "sentence": "El estudio empleó una muestra representativa y un diseño metodológico riguroso; ___, sus conclusiones merecen una consideración seria.",
        "answer": "por consiguiente",
        "hint": "Se necesita un conector que señale una conclusión que se desprende de lo anterior.",
        "explanation": "«Por consiguiente» señala precisamente una conclusión que se desprende lógicamente del razonamiento anterior, a diferencia de conectores como «sin embargo», que introducirían una objeción."
      },
      {
        "type": "multiple-choice",
        "question": "«El primer factor explica una parte considerable del fenómeno estudiado. ___, conviene no descartar la influencia de variables externas no contempladas en el modelo». ¿Qué conector completa mejor esta oración, sin contradecir la idea anterior?",
        "options": [
          "Sin embargo",
          "Asimismo",
          "No obstante",
          "A pesar de ello"
        ],
        "correctIndex": 1,
        "explanation": "«Asimismo» añade un argumento adicional sin contradecir el anterior, a diferencia de «sin embargo», «no obstante» o «a pesar de ello», que introducirían una objeción o un matiz contrario."
      },
      {
        "type": "multi-select",
        "question": "¿Cuáles de las siguientes expresiones cumplen una función de atenuación propia del discurso académico maduro?",
        "options": [
          "Cabría pensar que el factor económico explica buena parte del fenómeno.",
          "Resulta indiscutible que, sin lugar a ninguna duda, esta es la única interpretación posible.",
          "Los indicios apuntan a que existe una relación entre ambas variables.",
          "Es un hecho incontrovertible que no admite ninguna objeción razonable."
        ],
        "correctIndexes": [
          0,
          2
        ],
        "explanation": "«Cabría pensar que» y «los indicios apuntan a que» atenúan la certeza de la afirmación, dejando espacio a otras interpretaciones; las otras dos expresiones formulan, en cambio, afirmaciones categóricas que cierran por completo la discusión."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras para formular una afirmación impersonal propia del registro académico.",
        "words": [
          "los",
          "datos",
          "permiten",
          "sostener",
          "que",
          "el",
          "modelo",
          "requiere",
          "una",
          "revisión"
        ],
        "translation": "The data allow us to argue that the model requires a revision.",
        "explanation": "La construcción «los datos permiten sostener que» desplaza el énfasis del autor individual hacia la evidencia misma, evitando la primera persona sin renunciar a la responsabilidad intelectual sobre la afirmación."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras para añadir un argumento adicional sin contradecir lo anterior.",
        "words": [
          "asimismo",
          "conviene",
          "señalar",
          "las",
          "limitaciones",
          "metodológicas",
          "del",
          "estudio"
        ],
        "translation": "Likewise, the methodological limitations of the study should be noted.",
        "explanation": "«Asimismo» introduce aquí un argumento adicional sin contradecir lo anterior, cumpliendo la misma función aditiva que «por otra parte»."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Traduce evitando la primera persona, según la convención del registro académico.",
        "source": "I believe the sample size was too small to draw reliable conclusions.",
        "answer": "Cabe señalar que el tamaño de la muestra resultó insuficiente para extraer conclusiones fiables.",
        "altAnswers": [
          "Cabe apuntar que el tamaño muestral fue insuficiente para extraer conclusiones fiables."
        ],
        "explanation": "«Cabe señalar que» desplaza el énfasis del autor hacia el razonamiento mismo, sustituyendo con una construcción impersonal el «I believe» de la fuente en inglés."
      },
      {
        "type": "translate",
        "direction": "es-en",
        "prompt": "Traduce al inglés distinguiendo con precisión los dos conceptos mencionados.",
        "source": "Conviene distinguir la hipótesis de partida de la tesis que el ensayo pretende sostener a lo largo de su desarrollo.",
        "answer": "It is worth distinguishing the initial hypothesis from the thesis the essay aims to support throughout its development.",
        "altAnswers": [
          "One should distinguish the starting hypothesis from the thesis that the essay seeks to defend throughout."
        ],
        "explanation": "La hipótesis es la suposición de partida sometida a prueba, mientras que la tesis es la afirmación central que el ensayo defiende; confundir ambos términos es uno de los errores más frecuentes en la escritura académica."
      },
      {
        "type": "multiple-choice",
        "question": "«Los resultados del experimento coinciden plenamente con las predicciones del modelo teórico. ___, el modelo parece resistir esta primera prueba empírica». ¿Qué conector encaja mejor en el espacio?",
        "options": [
          "No obstante",
          "Por consiguiente",
          "A pesar de ello",
          "Sin embargo"
        ],
        "correctIndex": 1,
        "explanation": "«Por consiguiente» introduce aquí una conclusión que se desprende directamente de la coincidencia entre los resultados y las predicciones; los demás conectores propuestos introducirían, de forma incoherente, una objeción inexistente en este contexto."
      },
      {
        "type": "multi-select",
        "question": "¿Cuáles de las siguientes afirmaciones sobre la tesis y la hipótesis son correctas, según lo estudiado?",
        "options": [
          "Una buena tesis debe admitir, al menos en principio, una postura contraria razonable.",
          "La hipótesis es la conclusión final que el ensayo defiende una vez terminado el análisis.",
          "Confundir la hipótesis con la tesis debilita la solidez del argumento final del ensayo.",
          "La tesis y la hipótesis son términos completamente sinónimos e intercambiables."
        ],
        "correctIndexes": [
          0,
          2
        ],
        "explanation": "Una tesis interesante debe poder ser cuestionada por una postura contraria razonable, y confundirla con la hipótesis debilita el argumento; la hipótesis, en cambio, es el punto de partida sometido a prueba, no la conclusión final."
      },
      {
        "type": "matching",
        "instructions": "Relaciona cada conector argumentativo con la función lógica que cumple dentro de un ensayo.",
        "pairs": [
          {
            "left": "en consecuencia",
            "right": "señala una conclusión que se desprende de lo anterior"
          },
          {
            "left": "no obstante",
            "right": "introduce una objeción o un matiz frente a lo afirmado antes"
          },
          {
            "left": "asimismo",
            "right": "añade un argumento adicional sin contradecir el anterior"
          },
          {
            "left": "por otra parte",
            "right": "introduce un aspecto distinto dentro del mismo tema en discusión"
          }
        ],
        "explanation": "El uso preciso de estos conectores hace explícita la relación lógica entre una idea y la siguiente; confundirlos invierte la lógica del razonamiento, por más correcta que sea la gramática de cada oración por separado."
      },
      {
        "type": "fill-blank",
        "prompt": "Reescribe la idea evitando la primera persona, según la convención académica estudiada.",
        "sentence": "En vez de decir 'pienso que deberíamos reconsiderar el enfoque metodológico', el registro académico prefiere decir que ___ reconsiderar el enfoque metodológico.",
        "answer": "cabría",
        "hint": "Piensa en una construcción modal impersonal equivalente a «sería conveniente».",
        "explanation": "«Cabría reconsiderar» desplaza el énfasis del autor individual hacia una recomendación formulada de manera impersonal y atenuada, evitando tanto la primera persona como una afirmación excesivamente categórica."
      },
      {
        "type": "multiple-choice",
        "question": "¿Por qué el registro académico en español prefiere evitar sistemáticamente la primera persona del singular?",
        "options": [
          "Porque la primera persona del singular es gramaticalmente incorrecta en cualquier contexto formal.",
          "Porque busca presentar el argumento como sostenido por la evidencia y la lógica, y no como una simple opinión personal del autor, sin renunciar por ello a la responsabilidad intelectual sobre lo afirmado.",
          "Porque el español académico carece de formas verbales en primera persona.",
          "Porque el uso de la primera persona está reservado exclusivamente a la poesía."
        ],
        "correctIndex": 1,
        "explanation": "La preferencia por construcciones impersonales o por la primera persona del plural busca diluir la presencia explícita del autor individual, presentando el argumento como sostenido por el razonamiento y la evidencia, sin que ello suponga renunciar a la responsabilidad intelectual sobre lo afirmado."
      }
    ]
  },
  {
    "slug": "academic-essay-writing-part-2-1",
    "level": "C1",
    "number": 118,
    "title": "Lenguaje Académico y Ensayos Argumentativos (Parte 2 de 2), Part 1 of 4",
    "summary": "Aprende a estructurar un argumento académico en español, dominar los conectores lógicos, evitar la primera persona y emplear la atenuación propia del discurso académico maduro.",
    "duration": "9 min",
    "sections": [
      {
        "heading": "La atenuación y la reserva epistémica en el discurso académico",
        "body": [
          "El lenguaje académico maduro rara vez afirma sus conclusiones de manera absoluta; en su lugar, recurre a expresiones de atenuación que reconocen los límites del conocimiento disponible: los datos sugieren, parecería razonable pensar que o todo indica que comunican una conclusión sostenida por la evidencia sin presentarla como una verdad incuestionable. Esta reserva epistémica no es una muestra de debilidad argumentativa, sino de honestidad intelectual frente a la complejidad del objeto de estudio.",
          "Un ensayo que abusa de afirmaciones categóricas —siempre, nunca, es evidente que— sin matizarlas suele generar desconfianza en un lector experimentado, porque ignora la posibilidad legítima de excepciones o de interpretaciones alternativas. Encontrar el punto medio entre la atenuación excesiva, que diluye cualquier postura clara, y la afirmación categórica, que cierra el debate de forma artificial, constituye una de las destrezas más difíciles de dominar en la escritura argumentativa."
        ],
        "examples": [
          {
            "es": "una expresión de atenuación",
            "en": "una fórmula que suaviza el grado de certeza con que se afirma algo"
          },
          {
            "es": "la reserva epistémica",
            "en": "la cautela con que se presenta un conocimiento, reconociendo sus límites"
          },
          {
            "es": "una afirmación categórica",
            "en": "una afirmación presentada como absolutamente cierta, sin matices"
          },
          {
            "es": "la honestidad intelectual",
            "en": "la actitud de reconocer los límites y las incertidumbres del propio conocimiento"
          },
          {
            "es": "generar desconfianza",
            "en": "provocar en el lector dudas sobre la fiabilidad de un argumento"
          },
          {
            "es": "cerrar el debate artificialmente",
            "en": "dar por concluida una discusión sin haber considerado posturas alternativas legítimas"
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa la oración con una expresión de atenuación adecuada al registro académico.",
            "sentence": "Los resultados obtenidos ___ que la hipótesis inicial era, al menos parcialmente, acertada.",
            "answer": "sugieren",
            "explanation": "La expresión los resultados sugieren atenúa la afirmación y refleja la reserva epistémica propia del discurso académico maduro.",
            "hint": "Piensa en un verbo que comunique una conclusión probable sin presentarla como certeza absoluta."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "word-order",
        "prompt": "Ordena las palabras para formar una oración que emplea un conector argumentativo.",
        "words": [
          "por",
          "consiguiente",
          "conviene",
          "revisar",
          "la",
          "metodología",
          "empleada"
        ],
        "explanation": "La oración resultante emplea el conector por consiguiente para introducir una conclusión derivada del razonamiento anterior: 'Por consiguiente, conviene revisar la metodología empleada'."
      }
    ]
  },
  {
    "slug": "academic-essay-writing-part-2-2",
    "level": "C1",
    "number": 119,
    "title": "Lenguaje Académico y Ensayos Argumentativos (Parte 2 de 2), Part 2 of 4",
    "summary": "Aprende a estructurar un argumento académico en español, dominar los conectores lógicos, evitar la primera persona y emplear la atenuación propia del discurso académico maduro.",
    "duration": "6 min",
    "sections": [
      {
        "heading": "En la práctica",
        "body": [
          "Introducción: el presente ensayo sostiene que la expansión del comercio digital ha modificado sustancialmente los hábitos de consumo en la región durante la última década.",
          "En primer lugar, cabe señalar que los datos disponibles sugieren un crecimiento sostenido de las transacciones realizadas por medios electrónicos.",
          "Asimismo, se observa que este fenómeno no ha afectado por igual a todos los sectores de la población, lo cual introduce una limitación importante al alcance de esta conclusión.",
          "Por otra parte, conviene reconocer que existen interpretaciones alternativas: algunos autores atribuyen este cambio principalmente a factores demográficos, y no exclusivamente tecnológicos.",
          "No obstante, la evidencia recopilada permite sostener que ambos factores actúan de manera complementaria, más que excluyente.",
          "En consecuencia, resulta razonable afirmar que cualquier análisis futuro debería considerar la interacción entre ambas variables, y no privilegiar una sobre la otra.",
          "A modo de cierre, este ensayo no pretende agotar la discusión, sino ofrecer un marco inicial que futuras investigaciones puedan matizar o ampliar."
        ]
      }
    ],
    "exercises": [
      {
        "type": "matching",
        "instructions": "Relaciona cada conector con la relación lógica que expresa.",
        "pairs": [
          {
            "left": "por consiguiente",
            "right": "una conclusión derivada de lo anterior"
          },
          {
            "left": "sin embargo",
            "right": "una objeción o un matiz"
          },
          {
            "left": "asimismo",
            "right": "un argumento adicional sin contradicción"
          },
          {
            "left": "no obstante",
            "right": "una objeción o un matiz"
          }
        ],
        "explanation": "Cada conector cumple una función lógica específica dentro del andamiaje argumentativo de un ensayo."
      }
    ]
  },
  {
    "slug": "academic-essay-writing-part-2-3",
    "level": "C1",
    "number": 120,
    "title": "Lenguaje Académico y Ensayos Argumentativos (Parte 2 de 2), Part 3 of 4",
    "summary": "Aprende a estructurar un argumento académico en español, dominar los conectores lógicos, evitar la primera persona y emplear la atenuación propia del discurso académico maduro.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "Vocabulario: el lenguaje académico",
        "body": [
          "35 palabras relacionadas con el lenguaje académico."
        ],
        "examples": [
          {
            "es": "la tesis académica",
            "en": "la afirmación central que un ensayo se propone defender mediante argumentos"
          },
          {
            "es": "la variable de estudio",
            "en": "elemento que se mide o se analiza dentro de una investigación"
          },
          {
            "es": "el argumento central",
            "en": "la idea principal sobre la que se sostiene todo un razonamiento"
          },
          {
            "es": "la afirmación de partida",
            "en": "idea inicial sobre la que se construye un argumento"
          },
          {
            "es": "la conclusión académica",
            "en": "el resultado final al que llega un razonamiento tras considerar la evidencia"
          },
          {
            "es": "el corpus de análisis",
            "en": "el conjunto de textos o datos sobre los que se basa una investigación"
          },
          {
            "es": "la evidencia empírica",
            "en": "la información obtenida mediante la observación o la experimentación"
          },
          {
            "es": "el marco teórico",
            "en": "el conjunto de conceptos y autores que sustentan una investigación"
          },
          {
            "es": "la objetividad discursiva",
            "en": "la cualidad de un texto de presentar sus ideas sin sesgo personal evidente"
          },
          {
            "es": "la impersonalidad redaccional",
            "en": "la tendencia a evitar la mención explícita del autor dentro de un escrito"
          },
          {
            "es": "el conector argumentativo",
            "en": "una palabra o expresión que señala la relación lógica entre dos ideas"
          },
          {
            "es": "el nexo causal",
            "en": "una relación en la que un hecho o una idea provoca otro"
          },
          {
            "es": "la unidad temática",
            "en": "relación que mantienen las ideas de un texto en torno a un mismo asunto"
          },
          {
            "es": "la coherencia argumentativa",
            "en": "la relación lógica y consistente entre las ideas de un razonamiento"
          },
          {
            "es": "el matiz académico",
            "en": "una precisión que suaviza o especifica el alcance de una afirmación"
          },
          {
            "es": "la reserva epistémica",
            "en": "la cautela con que se presenta una afirmación, reconociendo sus límites"
          },
          {
            "es": "la atenuación discursiva",
            "en": "el recurso de suavizar el grado de certeza de una afirmación"
          },
          {
            "es": "la modalización",
            "en": "el conjunto de recursos lingüísticos que expresan la actitud del hablante ante lo que dice"
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "Según el texto, ¿qué efecto produce en un lector experimentado un ensayo que abusa de afirmaciones categóricas sin matizarlas?",
        "options": [
          "Aumenta automáticamente la credibilidad del autor",
          "Genera desconfianza, porque ignora la posibilidad de excepciones legítimas",
          "Resulta irrelevante para la evaluación del argumento",
          "Mejora la cohesión textual del ensayo"
        ],
        "correctIndex": 1,
        "explanation": "El texto advierte que el abuso de afirmaciones categóricas suele generar desconfianza en un lector experimentado."
      }
    ]
  },
  {
    "slug": "academic-essay-writing-part-2-4",
    "level": "C1",
    "number": 121,
    "title": "Lenguaje Académico y Ensayos Argumentativos (Parte 2 de 2), Part 4 of 4",
    "summary": "Aprende a estructurar un argumento académico en español, dominar los conectores lógicos, evitar la primera persona y emplear la atenuación propia del discurso académico maduro.",
    "duration": "4 min",
    "sections": [
      {
        "heading": "Vocabulario: el lenguaje académico (cont'd)",
        "body": [],
        "examples": [
          {
            "es": "el verbo atenuador",
            "en": "un verbo que suaviza el grado de certeza de una afirmación, como sugerir o parecer"
          },
          {
            "es": "la voz pasiva refleja",
            "en": "una construcción con se que expresa una acción sin mencionar directamente a quien la realiza"
          },
          {
            "es": "el se impersonal",
            "en": "la partícula se usada para formular una afirmación sin atribuirla a un sujeto explícito"
          },
          {
            "es": "la tercera persona académica",
            "en": "el uso de formas impersonales o de plural para evitar la primera persona en un escrito académico"
          },
          {
            "es": "el análisis documental",
            "en": "examen detallado de los materiales escritos que sirven de base a una investigación"
          },
          {
            "es": "la paráfrasis",
            "en": "la reformulación con palabras propias de una idea tomada de otro autor"
          },
          {
            "es": "el corpus documental",
            "en": "conjunto de textos y fuentes que se analizan en una investigación"
          },
          {
            "es": "la apropiación indebida",
            "en": "uso no autorizado de las ideas o palabras de otra persona como si fueran propias"
          },
          {
            "es": "la estructura expositiva",
            "en": "forma en que se organizan las partes de un texto para presentar información de manera clara"
          },
          {
            "es": "el párrafo introductorio",
            "en": "el párrafo inicial de un ensayo, donde se presenta el tema y la tesis"
          },
          {
            "es": "el párrafo de cierre",
            "en": "el párrafo final de un ensayo, donde se recapitula y se concluye el argumento"
          },
          {
            "es": "la desestimación",
            "en": "acción de rechazar un argumento por considerarlo inválido"
          },
          {
            "es": "la contraargumentación",
            "en": "el desarrollo de argumentos que se oponen a una tesis previamente planteada"
          },
          {
            "es": "el razonamiento deductivo",
            "en": "proceso lógico que parte de premisas generales para llegar a una conclusión particular"
          },
          {
            "es": "la falacia lógica",
            "en": "un error de razonamiento que parece válido pero no lo es"
          },
          {
            "es": "la digresión",
            "en": "un desvío del tema principal hacia asuntos secundarios"
          },
          {
            "es": "la exhaustividad analítica",
            "en": "la cualidad de un análisis de considerar todos los aspectos relevantes de un tema"
          }
        ]
      }
    ],
    "exercises": []
  },
  {
    "slug": "subjunctive-advanced-nuances-drill-1",
    "level": "C1",
    "number": 122,
    "title": "Matices Avanzados del Subjuntivo: Práctica Extra, Part 1 of 3",
    "summary": "Practica usos avanzados y sutiles del subjuntivo: quizás/tal vez, por muy...que, exclamaciones independientes, el hecho de que, no porque, y expresiones fijas como sea como sea o cueste lo que cueste.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Quizás, tal vez y posiblemente: subjuntivo opcional",
        "body": [
          "Con estos adverbios de duda, el subjuntivo es más frecuente pero el indicativo también es correcto si el hablante siente más certeza."
        ],
        "examples": [
          {
            "es": "Quizás no sea tan difícil como piensas.",
            "en": "Maybe it isn't as difficult as you think."
          },
          {
            "es": "Tal vez lleguen tarde por el tráfico.",
            "en": "Perhaps they'll arrive late because of traffic."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Cuál de estas oraciones expresa MÁS duda sobre el resultado?",
            "options": [
              "Tal vez apruebo el examen.",
              "Tal vez apruebe el examen.",
              "Tal vez aprobaré el examen.",
              "Tal vez he aprobado el examen."
            ],
            "correctIndex": 1,
            "explanation": "El subjuntivo (apruebe) tras 'tal vez' expresa mayor incertidumbre que el indicativo, que suena más afirmativo."
          }
        ]
      },
      {
        "heading": "Por muy + adjetivo/adverbio + que + subjuntivo",
        "body": [
          "Esta estructura concesiva exige siempre subjuntivo, sin importar cuán seguro esté el hablante del hecho."
        ],
        "examples": [
          {
            "es": "Por muy cansado que estés, tienes que terminar el informe.",
            "en": "No matter how tired you are, you have to finish the report."
          },
          {
            "es": "Por muy tarde que sea, te voy a llamar.",
            "en": "No matter how late it is, I'm going to call you."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa la oración con la forma correcta del subjuntivo.",
            "sentence": "Por muy inteligente que ___ (ser), nadie lo sabe todo.",
            "answer": "sea",
            "hint": "Presente de subjuntivo de 'ser'.",
            "explanation": "Por muy + adjetivo + que siempre requiere subjuntivo; aquí 'sea' es la forma correcta de 'ser'."
          }
        ]
      },
      {
        "heading": "Por más/mucho que + subjuntivo",
        "body": [
          "Por más/mucho que funciona igual que por muy...que, pero se combina con verbos o sustantivos en lugar de adjetivos."
        ],
        "examples": [
          {
            "es": "Por más que estudies, no aprobarás si no practicas.",
            "en": "No matter how much you study, you won't pass if you don't practice."
          },
          {
            "es": "Por mucho dinero que tenga, nunca está satisfecho.",
            "en": "No matter how much money he has, he's never satisfied."
          }
        ],
        "checkpoint": [
          {
            "type": "translate",
            "direction": "en-es",
            "prompt": "Traduce la oración al español.",
            "source": "No matter how much they insist, I won't change my mind.",
            "answer": "Por mucho que insistan, no voy a cambiar de opinión.",
            "altAnswers": [
              "Por más que insistan, no cambiaré de opinión."
            ],
            "explanation": "Por mucho/más que + subjuntivo (insistan) expresa una concesión enfática, sin importar el grado."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "¿Qué oración es gramaticalmente correcta Y expresa más incertidumbre?",
        "options": [
          "Quizás viene mañana.",
          "Quizás venga mañana.",
          "Quizás vendrá mañana.",
          "Quizás ha venido mañana."
        ],
        "correctIndex": 1,
        "explanation": "El subjuntivo 'venga' tras 'quizás' comunica más duda que las formas de indicativo."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa con la forma correcta del subjuntivo.",
        "sentence": "Por muy caro que ___ (ser) el coche, lo voy a comprar.",
        "answer": "sea",
        "hint": "Presente de subjuntivo de 'ser'.",
        "explanation": "Por muy + adjetivo + que siempre exige subjuntivo; la forma correcta es 'sea'."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Traduce la oración al español.",
        "source": "No matter how much they complain, we won't change the plan.",
        "answer": "Por mucho que se quejen, no vamos a cambiar el plan.",
        "altAnswers": [
          "Por más que se quejen, no cambiaremos el plan."
        ],
        "explanation": "Por mucho/más que + subjuntivo (se quejen) expresa una concesión, sin importar el grado de la acción."
      },
      {
        "type": "multiple-choice",
        "question": "¿Cuál es la exclamación correcta para celebrar la independencia de un país?",
        "options": [
          "¡Vive la independencia!",
          "¡Viva la independencia!",
          "¡Vivirá la independencia!",
          "¡Ha vivido la independencia!"
        ],
        "correctIndex": 1,
        "explanation": "Las exclamaciones de deseo o celebración usan subjuntivo: 'viva' (vivir)."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa con la forma correcta del subjuntivo.",
        "sentence": "El hecho de que ___ (haber) tanta gente no significa que el evento sea un éxito.",
        "answer": "haya",
        "hint": "Presente de subjuntivo de 'haber'.",
        "explanation": "'El hecho de que' siempre lleva subjuntivo; aquí corresponde 'haya' (haber)."
      },
      {
        "type": "multiple-choice",
        "question": "Elige la opción correcta: 'No te lo digo porque ___ celoso, sino porque me preocupo por ti.'",
        "options": [
          "estoy",
          "esté",
          "estaré",
          "he estado"
        ],
        "correctIndex": 1,
        "explanation": "'No porque' rechaza una razón y exige subjuntivo ('esté'); la razón real llega después con 'sino porque' + indicativo."
      }
    ]
  },
  {
    "slug": "subjunctive-advanced-nuances-drill-2",
    "level": "C1",
    "number": 123,
    "title": "Matices Avanzados del Subjuntivo: Práctica Extra, Part 2 of 3",
    "summary": "Practica usos avanzados y sutiles del subjuntivo: quizás/tal vez, por muy...que, exclamaciones independientes, el hecho de que, no porque, y expresiones fijas como sea como sea o cueste lo que cueste.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Subjuntivo en exclamaciones independientes",
        "body": [
          "En estas expresiones el subjuntivo aparece solo, sin verbo principal, para expresar deseos, mandatos o buenos augurios."
        ],
        "examples": [
          {
            "es": "¡Que tengas buen viaje!",
            "en": "Have a good trip!"
          },
          {
            "es": "¡Viva México!",
            "en": "Long live Mexico!"
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Cuál es la forma correcta para desear buena suerte a un amigo antes de un examen?",
            "options": [
              "¡Que tienes suerte!",
              "¡Que tengas suerte!",
              "¡Que tendrás suerte!",
              "¡Que has tenido suerte!"
            ],
            "correctIndex": 1,
            "explanation": "Las exclamaciones de deseo con 'que' siempre usan subjuntivo: 'que tengas' (tener, presente de subjuntivo)."
          }
        ]
      },
      {
        "heading": "El hecho de que + subjuntivo (siempre)",
        "body": [
          "A diferencia de 'el hecho de' seguido de infinitivo, 'el hecho de que' exige subjuntivo incluso cuando el hecho es real y comprobado."
        ],
        "examples": [
          {
            "es": "El hecho de que no llamara no significa que se haya olvidado de ti.",
            "en": "The fact that he didn't call doesn't mean he forgot about you."
          },
          {
            "es": "El hecho de que ganemos el partido no cambia la situación del equipo.",
            "en": "The fact that we win the game doesn't change the team's situation."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa la oración con la forma correcta del subjuntivo.",
            "sentence": "El hecho de que ___ (vivir) lejos no impide que nos veamos cada semana.",
            "answer": "viva",
            "hint": "Presente de subjuntivo de 'vivir'.",
            "explanation": "'El hecho de que' siempre requiere subjuntivo, aunque el hecho sea cierto; aquí la forma correcta es 'viva'."
          }
        ]
      },
      {
        "heading": "No porque... (sino porque) + subjuntivo",
        "body": [
          "Cuando 'no porque' rechaza una razón para dar paso a la verdadera, el verbo va siempre en subjuntivo."
        ],
        "examples": [
          {
            "es": "No lo hago porque me guste, sino porque es mi deber.",
            "en": "I don't do it because I like it, but because it's my duty."
          },
          {
            "es": "No porque sea difícil vamos a rendirnos.",
            "en": "Just because it's difficult doesn't mean we're going to give up."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "Elige la opción correcta: 'No te ayudo porque ___ obligación, sino porque quiero.'",
            "options": [
              "tengo",
              "tenga",
              "tendré",
              "he tenido"
            ],
            "correctIndex": 1,
            "explanation": "'No porque' + subjuntivo rechaza esa razón; la razón verdadera va después con 'sino porque' + indicativo."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "word-order",
        "prompt": "Ordena las palabras para formar una oración correcta.",
        "words": [
          "Cueste",
          "lo",
          "que",
          "cueste,",
          "terminaremos",
          "el",
          "proyecto"
        ],
        "translation": "Whatever it costs, we'll finish the project.",
        "explanation": "'Cueste lo que cueste' es una expresión fija con subjuntivo repetido que significa 'no importa el costo'."
      },
      {
        "type": "translate",
        "direction": "es-en",
        "prompt": "Traduce la oración al inglés.",
        "source": "Quienquiera que gane las elecciones, tendrá que enfrentar la crisis económica.",
        "answer": "Whoever wins the elections will have to face the economic crisis.",
        "altAnswers": [
          "Whoever wins the election will have to deal with the economic crisis."
        ],
        "explanation": "'Quienquiera que' + subjuntivo (gane) introduce una cláusula concesiva culta equivalente a 'whoever'."
      },
      {
        "type": "multi-select",
        "question": "¿Cuáles de las siguientes expresiones SIEMPRE requieren subjuntivo en la cláusula que introducen?",
        "options": [
          "El hecho de que",
          "Porque (razón afirmada)",
          "Por muy... que",
          "Quizás",
          "Sea como sea"
        ],
        "correctIndexes": [
          0,
          2,
          4
        ],
        "explanation": "'El hecho de que', 'por muy...que' y 'sea como sea' siempre exigen subjuntivo. 'Porque' con razón afirmada lleva indicativo, y 'quizás' admite ambos modos según el grado de certeza."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa con la forma correcta del subjuntivo.",
        "sentence": "Dondequiera que ___ (estar), siempre pensaré en ti.",
        "answer": "estés",
        "hint": "Presente de subjuntivo de 'estar', segunda persona singular.",
        "explanation": "'Dondequiera que' + subjuntivo expresa 'no importa dónde'; la forma correcta es 'estés'."
      },
      {
        "type": "multiple-choice",
        "question": "¿Qué estructura es correcta con un sustantivo como 'dinero'?",
        "options": [
          "Por muy dinero que tenga...",
          "Por mucho dinero que tenga...",
          "Por muy mucho dinero que tenga...",
          "Por dinero muy que tenga..."
        ],
        "correctIndex": 1,
        "explanation": "Con sustantivos se usa 'por mucho/a + sustantivo + que', no 'por muy'; 'por muy' se reserva para adjetivos y adverbios."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Traduce la oración al español.",
        "source": "God bless you!",
        "answer": "¡Que Dios te bendiga!",
        "altAnswers": [
          "¡Dios te bendiga!"
        ],
        "explanation": "Los deseos y bendiciones expresados de forma independiente usan subjuntivo: 'bendiga' (bendecir)."
      }
    ]
  },
  {
    "slug": "subjunctive-advanced-nuances-drill-3",
    "level": "C1",
    "number": 124,
    "title": "Matices Avanzados del Subjuntivo: Práctica Extra, Part 3 of 3",
    "summary": "Practica usos avanzados y sutiles del subjuntivo: quizás/tal vez, por muy...que, exclamaciones independientes, el hecho de que, no porque, y expresiones fijas como sea como sea o cueste lo que cueste.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Expresiones fijas con subjuntivo residual",
        "body": [
          "Estas fórmulas concesivas conservan el subjuntivo de manera fija y no cambian aunque cambie el sujeto o el tiempo."
        ],
        "examples": [
          {
            "es": "Sea como sea, terminaremos el proyecto a tiempo.",
            "en": "Whatever the case, we'll finish the project on time."
          },
          {
            "es": "Cueste lo que cueste, voy a conseguir ese trabajo.",
            "en": "Whatever it costs, I'm going to get that job."
          }
        ],
        "checkpoint": [
          {
            "type": "word-order",
            "prompt": "Ordena las palabras para formar una oración correcta.",
            "words": [
              "Pase",
              "lo",
              "que",
              "pase,",
              "seguiré",
              "adelante"
            ],
            "translation": "Whatever happens, I'll keep going.",
            "explanation": "'Pase lo que pase' es una expresión fija con subjuntivo que significa 'whatever happens', siempre en este orden."
          },
          {
            "type": "matching",
            "instructions": "Une cada expresión fija con su significado en inglés.",
            "pairs": [
              {
                "left": "Sea como sea",
                "right": "Whatever the case may be"
              },
              {
                "left": "Cueste lo que cueste",
                "right": "Whatever it costs / No matter the cost"
              },
              {
                "left": "Pase lo que pase",
                "right": "Whatever happens / Come what may"
              },
              {
                "left": "Digan lo que digan",
                "right": "Whatever people say / No matter what they say"
              }
            ],
            "explanation": "Estas expresiones usan subjuntivo repetido con el mismo verbo para expresar 'no importa qué...'."
          }
        ]
      },
      {
        "heading": "Quienquiera, dondequiera, comoquiera que + subjuntivo",
        "body": [
          "Estas formas compuestas con -quiera son concesivas cultas y siempre requieren subjuntivo en la cláusula que introducen."
        ],
        "examples": [
          {
            "es": "Quienquiera que sea el responsable, tendrá que dar explicaciones.",
            "en": "Whoever is responsible will have to explain."
          },
          {
            "es": "Dondequiera que vayas, te seguiré.",
            "en": "Wherever you go, I'll follow you."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa la oración con la forma correcta del subjuntivo.",
            "sentence": "Comoquiera que lo ___ (mirar), la decisión fue un error.",
            "answer": "mires",
            "hint": "Presente de subjuntivo de 'mirar', segunda persona.",
            "explanation": "'Comoquiera que' + subjuntivo expresa 'sin importar cómo'; aquí la forma correcta es 'mires'."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "fill-blank",
        "prompt": "Completa la expresión fija con la forma correcta.",
        "sentence": "___ como sea, vamos a encontrar una solución.",
        "answer": "Sea",
        "hint": "Presente de subjuntivo de 'ser', tercera persona.",
        "explanation": "'Sea como sea' es una expresión fija que significa 'whatever the case'; siempre usa 'sea' (ser)."
      },
      {
        "type": "multiple-choice",
        "question": "Elige la opción correcta: 'No apoyamos esa ley porque nos ___ conveniente, sino porque es justa.'",
        "options": [
          "resulta",
          "resulte",
          "resultará",
          "ha resultado"
        ],
        "correctIndex": 1,
        "explanation": "'No porque' + subjuntivo rechaza esa razón antes de dar la verdadera con 'sino porque' + indicativo."
      },
      {
        "type": "matching",
        "instructions": "Une cada oración con la estructura de subjuntivo avanzado que contiene.",
        "pairs": [
          {
            "left": "Posiblemente tengamos que cambiar de planes.",
            "right": "Duda con posiblemente"
          },
          {
            "left": "Por muy difícil que parezca, lo lograremos.",
            "right": "Concesión con por muy...que"
          },
          {
            "left": "El hecho de que llueva no cancela el partido.",
            "right": "El hecho de que"
          },
          {
            "left": "Pase lo que pase, estaré a tu lado.",
            "right": "Expresión fija residual"
          }
        ],
        "explanation": "Cada oración ilustra un uso avanzado distinto del subjuntivo estudiado en esta lección."
      },
      {
        "type": "translate",
        "direction": "es-en",
        "prompt": "Traduce la oración al inglés.",
        "source": "Por muy tarde que llegues, te esperaré despierto.",
        "answer": "No matter how late you arrive, I'll wait up for you.",
        "altAnswers": [
          "However late you get here, I'll stay awake waiting for you."
        ],
        "explanation": "'Por muy tarde que' + subjuntivo (llegues) expresa una concesión: 'no importa cuán tarde'."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la expresión fija con la forma correcta del subjuntivo.",
        "sentence": "___ lo que digan, yo voy a seguir mi propio camino.",
        "answer": "Digan",
        "hint": "Presente de subjuntivo de 'decir', tercera persona plural.",
        "explanation": "'Digan lo que digan' es una expresión fija que significa 'no matter what people say'; repite el subjuntivo de 'decir'."
      }
    ]
  },
  {
    "slug": "nominalization-drill-1",
    "level": "C1",
    "number": 125,
    "title": "La Nominalización: Práctica Extra, Part 1 of 3",
    "summary": "Practica cómo convertir adjetivos y verbos en sustantivos abstractos usando 'lo + adjetivo', 'el/la + infinitivo' y sufijos como -dad, -ción, -miento y -eza, para lograr una escritura más sofisticada y compacta.",
    "duration": "9 min",
    "sections": [
      {
        "heading": "Lo + adjetivo",
        "body": [
          "Recuerda que 'lo' seguido de un adjetivo en masculino singular convierte una cualidad en un concepto abstracto."
        ],
        "examples": [
          {
            "es": "Lo bueno es que todavía tenemos tiempo.",
            "en": "The good thing is that we still have time."
          },
          {
            "es": "No comprendo lo extraño de su comportamiento.",
            "en": "I don't understand the strange part of his behavior."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Cuál oración usa correctamente la estructura 'lo + adjetivo'?",
            "options": [
              "Lo importante es terminar el proyecto a tiempo.",
              "La importante es terminar el proyecto a tiempo.",
              "El importante es terminar el proyecto a tiempo.",
              "Importante lo es terminar el proyecto a tiempo."
            ],
            "correctIndex": 0,
            "explanation": "Con 'lo + adjetivo' el adjetivo siempre va en forma masculina singular, sin importar a qué se refiera; por eso es 'lo importante', no 'la importante'."
          }
        ]
      },
      {
        "heading": "Lo + adjetivo + de",
        "body": [
          "La estructura 'lo + adjetivo + de + sustantivo/infinitivo' señala un aspecto concreto de algo."
        ],
        "examples": [
          {
            "es": "Lo difícil de aprender un idioma es mantener la motivación.",
            "en": "The hard part about learning a language is keeping your motivation."
          },
          {
            "es": "Lo curioso del caso es que nadie lo denunció.",
            "en": "The curious thing about the case is that nobody reported it."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa la oración con 'lo + adjetivo + de'.",
            "sentence": "___ este trabajo es la falta de tiempo libre.",
            "answer": "Lo malo de",
            "hint": "adjetivo: malo",
            "explanation": "'Lo malo de' + sustantivo introduce el aspecto negativo de algo; el adjetivo 'malo' queda fijo en masculino singular."
          }
        ]
      },
      {
        "heading": "El/la + infinitivo",
        "body": [
          "El infinitivo precedido de artículo funciona como sustantivo abstracto que nombra la acción misma."
        ],
        "examples": [
          {
            "es": "El saber no ocupa lugar.",
            "en": "Knowledge takes up no space."
          },
          {
            "es": "El comer bien mejora la salud.",
            "en": "Eating well improves health."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Cuál de estas frases nominaliza correctamente un verbo con el artículo?",
            "options": [
              "El vivir solo tiene sus ventajas.",
              "El vive solo tiene sus ventajas.",
              "El viviendo solo tiene sus ventajas.",
              "El vivido solo tiene sus ventajas."
            ],
            "correctIndex": 0,
            "explanation": "El artículo 'el' se combina con el infinitivo ('el vivir') para formar un sustantivo abstracto; no se usa con formas conjugadas, gerundios ni participios."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "¿Cuál es el sustantivo abstracto correcto para 'feliz'?",
        "options": [
          "la felicidad",
          "el felizmiento",
          "la felizura",
          "el felicismo"
        ],
        "correctIndex": 0,
        "explanation": "'Feliz' forma el sustantivo abstracto 'la felicidad' con el sufijo -idad."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con la forma nominalizada correcta.",
        "sentence": "___ (organizar) del viaje nos llevó tres semanas.",
        "answer": "La organización",
        "hint": "organizar → organización",
        "explanation": "El verbo 'organizar' se nominaliza como 'la organización' mediante el sufijo -ción."
      },
      {
        "type": "translate",
        "direction": "es-en",
        "prompt": "Traduce la oración al inglés.",
        "source": "Lo peor de este trabajo es el horario.",
        "answer": "The worst thing about this job is the schedule.",
        "altAnswers": [
          "The worst part of this job is the schedule."
        ],
        "explanation": "'Lo peor de' + sustantivo se traduce como 'the worst thing/part about'."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Traduce la oración al español.",
        "source": "Eating well and sleeping enough improve concentration.",
        "answer": "El comer bien y el dormir lo suficiente mejoran la concentración.",
        "altAnswers": [
          "Comer bien y dormir lo suficiente mejoran la concentración."
        ],
        "explanation": "Los infinitivos 'comer' y 'dormir', con o sin artículo, funcionan aquí como sujetos nominalizados de la oración."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras para formar una oración correcta.",
        "words": [
          "El",
          "crecimiento",
          "de",
          "la",
          "empresa",
          "sorprendió",
          "a",
          "los",
          "inversores"
        ],
        "translation": "The company's growth surprised the investors.",
        "explanation": "'El crecimiento' nominaliza el verbo 'crecer' mediante el sufijo -miento y funciona como sujeto de la oración."
      },
      {
        "type": "multiple-choice",
        "question": "¿Qué opción nominaliza correctamente el verbo 'decidir'?",
        "options": [
          "la decisión",
          "el decidimiento",
          "la decidura",
          "el decisor"
        ],
        "correctIndex": 0,
        "explanation": "'Decidir' forma el sustantivo 'la decisión' con el sufijo -sión."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con 'lo + adjetivo'.",
        "sentence": "___ es que todavía podemos cambiar de opinión.",
        "answer": "Lo bueno",
        "hint": "adjetivo: bueno",
        "explanation": "'Lo bueno' nominaliza el adjetivo 'bueno' para introducir un comentario general sobre la situación."
      }
    ]
  },
  {
    "slug": "nominalization-drill-2",
    "level": "C1",
    "number": 126,
    "title": "La Nominalización: Práctica Extra, Part 2 of 3",
    "summary": "Practica cómo convertir adjetivos y verbos en sustantivos abstractos usando 'lo + adjetivo', 'el/la + infinitivo' y sufijos como -dad, -ción, -miento y -eza, para lograr una escritura más sofisticada y compacta.",
    "duration": "9 min",
    "sections": [
      {
        "heading": "Sufijo -dad / -tad",
        "body": [
          "El sufijo -dad (o -tad) transforma muchos adjetivos en sustantivos abstractos de cualidad."
        ],
        "examples": [
          {
            "es": "Su honestidad sorprendió a todos.",
            "en": "His honesty surprised everyone."
          },
          {
            "es": "Valoramos mucho la libertad de expresión.",
            "en": "We greatly value freedom of expression."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Transforma el adjetivo entre paréntesis en un sustantivo con -dad.",
            "sentence": "La ___ (curioso) de los niños no tiene límites.",
            "answer": "curiosidad",
            "hint": "curioso → curiosidad",
            "explanation": "El adjetivo 'curioso' pierde la vocal final y añade '-idad' para formar el sustantivo 'curiosidad'."
          },
          {
            "type": "multiple-choice",
            "question": "¿Qué sustantivo corresponde al adjetivo 'posible'?",
            "options": [
              "la posibilidad",
              "el posiblemiento",
              "la posibleza",
              "el posibilismo"
            ],
            "correctIndex": 0,
            "explanation": "'Posible' forma su sustantivo abstracto con el sufijo -idad: 'la posibilidad'."
          }
        ]
      },
      {
        "heading": "Sufijo -ción / -sión",
        "body": [
          "El sufijo -ción (o -sión) convierte muchos verbos en sustantivos que nombran la acción o su resultado."
        ],
        "examples": [
          {
            "es": "La organización del evento tomó semanas.",
            "en": "The organization of the event took weeks."
          },
          {
            "es": "Su decisión cambió el rumbo de la empresa.",
            "en": "His decision changed the company's direction."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Convierte el verbo entre paréntesis en un sustantivo con -ción.",
            "sentence": "La ___ (crear) de nuevas empresas impulsa la economía.",
            "answer": "creación",
            "hint": "crear → creación",
            "explanation": "El verbo 'crear' forma el sustantivo 'creación' añadiendo el sufijo -ción a la raíz."
          }
        ]
      },
      {
        "heading": "Sufijo -miento",
        "body": [
          "El sufijo -miento crea sustantivos abstractos, sobre todo a partir de verbos."
        ],
        "examples": [
          {
            "es": "El crecimiento económico fue notable este año.",
            "en": "Economic growth was notable this year."
          },
          {
            "es": "Su sufrimiento duró varios meses.",
            "en": "His suffering lasted several months."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Qué sustantivo con -miento corresponde al verbo 'pensar'?",
            "options": [
              "el pensamiento",
              "la pensación",
              "el pensadad",
              "la pensancia"
            ],
            "correctIndex": 0,
            "explanation": "'Pensar' forma el sustantivo abstracto 'el pensamiento' con el sufijo -miento."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "matching",
        "instructions": "Empareja cada adjetivo con su sustantivo abstracto correspondiente.",
        "pairs": [
          {
            "left": "feliz",
            "right": "la felicidad"
          },
          {
            "left": "libre",
            "right": "la libertad"
          },
          {
            "left": "curioso",
            "right": "la curiosidad"
          },
          {
            "left": "triste",
            "right": "la tristeza"
          },
          {
            "left": "bello",
            "right": "la belleza"
          },
          {
            "left": "pobre",
            "right": "la pobreza"
          }
        ],
        "explanation": "Los adjetivos forman sus sustantivos abstractos con distintos sufijos: -dad/-tad (felicidad, libertad, curiosidad) y -eza (tristeza, belleza, pobreza)."
      },
      {
        "type": "matching",
        "instructions": "Empareja cada verbo con el sustantivo que forma.",
        "pairs": [
          {
            "left": "organizar",
            "right": "la organización"
          },
          {
            "left": "crecer",
            "right": "el crecimiento"
          },
          {
            "left": "pensar",
            "right": "el pensamiento"
          },
          {
            "left": "sufrir",
            "right": "el sufrimiento"
          },
          {
            "left": "crear",
            "right": "la creación"
          }
        ],
        "explanation": "Los verbos se nominalizan principalmente con los sufijos -ción/-sión (organización, creación) y -miento (crecimiento, pensamiento, sufrimiento)."
      },
      {
        "type": "multi-select",
        "question": "¿Cuáles de las siguientes son formas correctas de nominalización?",
        "options": [
          "lo interesante",
          "el saber",
          "la amabilidad",
          "el amablemiento",
          "la decisión"
        ],
        "correctIndexes": [
          0,
          1,
          2,
          4
        ],
        "explanation": "'Lo interesante', 'el saber', 'la amabilidad' y 'la decisión' son nominalizaciones correctas; 'el amablemiento' no existe, ya que 'amable' forma su sustantivo con -idad: 'amabilidad'."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con la forma correcta.",
        "sentence": "___ (limpio) de la casa impresionó a los invitados.",
        "answer": "La limpieza",
        "hint": "limpio → limpieza",
        "explanation": "El adjetivo 'limpio' forma el sustantivo abstracto 'la limpieza' con el sufijo -eza."
      },
      {
        "type": "translate",
        "direction": "es-en",
        "prompt": "Traduce la oración al inglés.",
        "source": "Lo difícil de este examen fue la última pregunta.",
        "answer": "The hard part about this exam was the last question.",
        "altAnswers": [
          "The difficult thing about this exam was the last question."
        ],
        "explanation": "'Lo difícil de' introduce el aspecto complicado de algo, equivalente a 'the hard/difficult part about'."
      },
      {
        "type": "multiple-choice",
        "question": "¿Cuál oración nominaliza correctamente una idea completa?",
        "options": [
          "La falta de comunicación es lo que más me preocupa.",
          "La faltando de comunicación es lo que más me preocupa.",
          "El faltar de comunicación es lo que más me preocupa.",
          "La faltura de comunicación es lo que más me preocupa."
        ],
        "correctIndex": 0,
        "explanation": "'La falta' es ya un sustantivo (de 'faltar') y se usa directamente; las demás opciones inventan formas que no existen en español."
      }
    ]
  },
  {
    "slug": "nominalization-drill-3",
    "level": "C1",
    "number": 127,
    "title": "La Nominalización: Práctica Extra, Part 3 of 3",
    "summary": "Practica cómo convertir adjetivos y verbos en sustantivos abstractos usando 'lo + adjetivo', 'el/la + infinitivo' y sufijos como -dad, -ción, -miento y -eza, para lograr una escritura más sofisticada y compacta.",
    "duration": "6 min",
    "sections": [
      {
        "heading": "Sufijo -eza / -ura",
        "body": [
          "Los sufijos -eza y -ura también forman sustantivos abstractos a partir de adjetivos."
        ],
        "examples": [
          {
            "es": "La belleza del paisaje me dejó sin palabras.",
            "en": "The beauty of the landscape left me speechless."
          },
          {
            "es": "Noté cierta tristeza en su mirada.",
            "en": "I noticed a certain sadness in his gaze."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa con el sustantivo abstracto derivado de 'pobre'.",
            "sentence": "La ___ afecta a millones de personas.",
            "answer": "pobreza",
            "hint": "pobre → pobreza",
            "explanation": "El adjetivo 'pobre' forma el sustantivo abstracto 'pobreza' con el sufijo -eza."
          }
        ]
      },
      {
        "heading": "Nominalización en la escritura formal",
        "body": [
          "En la escritura formal, la nominalización permite comprimir una cláusula entera en un sustantivo para lograr un estilo más elegante."
        ],
        "examples": [
          {
            "es": "El hecho de que el gobierno decidiera actuar rápido sorprendió a todos. → La rápida decisión del gobierno sorprendió a todos.",
            "en": "That the government decided to act quickly surprised everyone. → The government's quick decision surprised everyone."
          },
          {
            "es": "Lo que más me preocupa es la falta de comunicación.",
            "en": "What worries me most is the lack of communication."
          }
        ],
        "checkpoint": [
          {
            "type": "word-order",
            "prompt": "Ordena las palabras para formar una oración con nominalización.",
            "words": [
              "Lo",
              "esencial",
              "de",
              "este",
              "proyecto",
              "es",
              "la",
              "planificación"
            ],
            "translation": "The essential thing about this project is the planning.",
            "explanation": "La estructura 'lo + adjetivo + de + sustantivo' introduce el aspecto clave, y 'planificación' nominaliza el verbo 'planificar'."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "word-order",
        "prompt": "Ordena las palabras para formar una oración correcta.",
        "words": [
          "Lo",
          "más",
          "curioso",
          "del",
          "caso",
          "es",
          "el",
          "silencio",
          "de",
          "los",
          "testigos"
        ],
        "translation": "The most curious thing about the case is the witnesses' silence.",
        "explanation": "'Lo más curioso de' introduce el aspecto más llamativo de algo, seguido del sustantivo que lo explica."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con la forma correcta.",
        "sentence": "___ (rico) del país aumentó gracias al turismo.",
        "answer": "La riqueza",
        "hint": "rico → riqueza",
        "explanation": "El adjetivo 'rico' forma el sustantivo abstracto 'la riqueza' con el sufijo -eza."
      },
      {
        "type": "multi-select",
        "question": "¿Cuáles oraciones usan el infinitivo como sustantivo correctamente?",
        "options": [
          "El estar solo no siempre es negativo.",
          "El estando solo no siempre es negativo.",
          "El viajar te abre la mente.",
          "El viajado te abre la mente."
        ],
        "correctIndexes": [
          0,
          2
        ],
        "explanation": "Solo el infinitivo precedido de artículo ('el estar', 'el viajar') funciona como sustantivo abstracto; el gerundio y el participio no cumplen esta función."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Traduce la oración al español.",
        "source": "The government's decision to raise taxes caused a strong reaction.",
        "answer": "La decisión del gobierno de subir los impuestos causó una fuerte reacción.",
        "altAnswers": [
          "La decisión del gobierno de aumentar los impuestos causó una fuerte reacción."
        ],
        "explanation": "En vez de una cláusula ('the government decided to...'), el español formal prefiere el sustantivo 'la decisión' seguido de 'de + infinitivo'."
      },
      {
        "type": "multiple-choice",
        "question": "¿Qué sustantivo corresponde correctamente al adjetivo 'amable'?",
        "options": [
          "la amabilidad",
          "el amableza",
          "la amablura",
          "el amablemiento"
        ],
        "correctIndex": 0,
        "explanation": "'Amable' forma su sustantivo abstracto con el sufijo -idad: 'la amabilidad'."
      }
    ]
  },
  {
    "slug": "gerundio-vs-infinitivo-drill-1",
    "level": "C1",
    "number": 128,
    "title": "Gerundio vs. Infinitivo: Práctica Extra, Part 1 of 3",
    "summary": "Practica las distinciones avanzadas entre el gerundio y el infinitivo: acciones simultáneas, el error del gerundio de posterioridad, el infinitivo tras preposición, el infinitivo como sujeto y las construcciones verbales que exigen una u otra forma.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "Gerundio para acciones simultáneas",
        "body": [
          "El gerundio expresa una acción que ocurre al mismo tiempo que la acción principal."
        ],
        "examples": [
          {
            "es": "Salió corriendo de la habitación.",
            "en": "He ran out of the room."
          },
          {
            "es": "Entró sonriendo y saludó a todos.",
            "en": "She came in smiling and greeted everyone."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa la oración con la forma correcta del verbo entre paréntesis.",
            "sentence": "El niño entró en la casa ___ (llorar) porque se había caído.",
            "answer": "llorando",
            "hint": "Acción simultánea a 'entró'.",
            "explanation": "El gerundio 'llorando' indica que la acción de llorar ocurre al mismo tiempo que la de entrar."
          }
        ]
      },
      {
        "heading": "El gerundio de posterioridad (error que se debe evitar)",
        "body": [
          "No se debe usar el gerundio para expresar una acción posterior a otra; en su lugar se usa 'y' más el verbo conjugado."
        ],
        "examples": [
          {
            "es": "Se cayó y se rompió la pierna. (correcto)",
            "en": "He fell and broke his leg."
          },
          {
            "es": "*Se cayó rompiéndose la pierna. (incorrecto)"
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Cuál de las siguientes oraciones es gramaticalmente correcta?",
            "options": [
              "Se cayó rompiéndose la pierna.",
              "Se cayó y se rompió la pierna.",
              "Se cayó rompiendo la pierna.",
              "Cayéndose se rompió la pierna."
            ],
            "correctIndex": 1,
            "explanation": "No se puede usar el gerundio para expresar una acción posterior (gerundio de posterioridad); lo correcto es unir las dos acciones con 'y' más el verbo conjugado."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "¿Cuál es la traducción correcta de 'He left crying'?",
        "options": [
          "Salió llorando.",
          "Salió llorar.",
          "Saliendo lloró.",
          "Salió y lloró."
        ],
        "correctIndex": 0,
        "explanation": "El gerundio 'llorando' expresa la acción simultánea a 'salió', igual que el gerundio inglés en 'left crying'."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con la forma correcta del verbo entre paréntesis.",
        "sentence": "Los estudiantes escucharon la noticia ___ (aplaudir) con entusiasmo.",
        "answer": "aplaudiendo",
        "hint": "Acción simultánea a 'escucharon'.",
        "explanation": "El gerundio 'aplaudiendo' indica que la acción de aplaudir ocurre al mismo tiempo que escuchar la noticia."
      },
      {
        "type": "translate",
        "direction": "es-en",
        "prompt": "Traduce la oración al inglés.",
        "source": "Bajó las escaleras corriendo porque llegaba tarde.",
        "answer": "He/She ran down the stairs because he/she was running late.",
        "altAnswers": [
          "He/She went down the stairs running because he/she was late.",
          "She ran down the stairs because she was running late."
        ],
        "explanation": "El gerundio 'corriendo' describe cómo bajó las escaleras; en inglés se traduce con 'ran down' o con '-ing' según el contexto."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras para formar una oración correcta.",
        "words": [
          "Antes",
          "de",
          "firmar",
          "el",
          "contrato",
          "léelo",
          "con",
          "atención"
        ],
        "translation": "Before signing the contract, read it carefully.",
        "explanation": "Después de la preposición 'antes de' siempre se usa el infinitivo ('firmar'), nunca el gerundio."
      },
      {
        "type": "multiple-choice",
        "question": "¿Cuál de las siguientes oraciones es incorrecta por usar el gerundio de posterioridad?",
        "options": [
          "Estudió toda la noche y aprobó el examen.",
          "Llegó tarde y se perdió la reunión.",
          "Abrió la puerta encontrándose con una sorpresa.",
          "Trabajó duro y consiguió el ascenso."
        ],
        "correctIndex": 2,
        "explanation": "La oración 'Abrió la puerta encontrándose con una sorpresa' usa mal el gerundio para expresar una acción posterior; lo correcto sería 'Abrió la puerta y se encontró con una sorpresa'."
      }
    ]
  },
  {
    "slug": "gerundio-vs-infinitivo-drill-2",
    "level": "C1",
    "number": 129,
    "title": "Gerundio vs. Infinitivo: Práctica Extra, Part 2 of 3",
    "summary": "Practica las distinciones avanzadas entre el gerundio y el infinitivo: acciones simultáneas, el error del gerundio de posterioridad, el infinitivo tras preposición, el infinitivo como sujeto y las construcciones verbales que exigen una u otra forma.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Infinitivo después de preposición",
        "body": [
          "En español, después de una preposición siempre se usa el infinitivo, nunca el gerundio."
        ],
        "examples": [
          {
            "es": "Al llegar a casa, encendió la televisión.",
            "en": "Upon arriving home, he turned on the TV."
          },
          {
            "es": "Antes de salir, cierra la puerta con llave.",
            "en": "Before leaving, lock the door."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa la oración con la forma correcta del verbo entre paréntesis.",
            "sentence": "Antes de ___ (salir) de casa, revisa que hayas apagado las luces.",
            "answer": "salir",
            "hint": "Después de una preposición siempre va el infinitivo.",
            "explanation": "Toda preposición ('antes de', 'al', 'para', 'sin', etc.) va seguida de infinitivo, nunca de gerundio."
          }
        ]
      },
      {
        "heading": "Infinitivo como sujeto de la oración",
        "body": [
          "El infinitivo puede funcionar como sujeto de una oración, equivalente al gerundio inglés '-ing'."
        ],
        "examples": [
          {
            "es": "Fumar es malo para la salud.",
            "en": "Smoking is bad for your health."
          },
          {
            "es": "Viajar solo te enseña mucho sobre ti mismo.",
            "en": "Traveling alone teaches you a lot about yourself."
          }
        ],
        "checkpoint": [
          {
            "type": "translate",
            "direction": "en-es",
            "prompt": "Traduce la oración al español.",
            "source": "Reading every day improves your vocabulary.",
            "answer": "Leer todos los días mejora tu vocabulario.",
            "altAnswers": [
              "Leer cada día mejora tu vocabulario."
            ],
            "explanation": "Cuando el gerundio inglés funciona como sujeto de la oración, en español se traduce con el infinitivo."
          }
        ]
      },
      {
        "heading": "Seguir / continuar + gerundio",
        "body": [
          "Los verbos 'seguir' y 'continuar' se combinan con el gerundio para expresar una acción que continúa."
        ],
        "examples": [
          {
            "es": "Sigue lloviendo desde esta mañana.",
            "en": "It's still raining since this morning."
          },
          {
            "es": "Continuó trabajando después de la medianoche.",
            "en": "He kept working after midnight."
          }
        ],
        "checkpoint": [
          {
            "type": "word-order",
            "prompt": "Ordena las palabras para formar una oración correcta.",
            "words": [
              "Sigue",
              "estudiando",
              "español",
              "todos",
              "los",
              "días"
            ],
            "translation": "He keeps studying Spanish every day.",
            "explanation": "'Seguir' se combina con gerundio para expresar una acción que continúa en el tiempo."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con el infinitivo que funciona como sujeto.",
        "sentence": "___ (Mentir) no sirve de nada a largo plazo.",
        "answer": "Mentir",
        "hint": "El infinitivo puede ser el sujeto de la oración.",
        "explanation": "Cuando un verbo actúa como sujeto de la oración, en español se usa el infinitivo, no el gerundio."
      },
      {
        "type": "matching",
        "instructions": "Relaciona cada verbo con la construcción que le corresponde.",
        "pairs": [
          {
            "left": "seguir",
            "right": "+ gerundio (seguir trabajando)"
          },
          {
            "left": "empezar",
            "right": "+ a + infinitivo (empezar a trabajar)"
          },
          {
            "left": "dejar",
            "right": "+ de + infinitivo (dejar de trabajar)"
          },
          {
            "left": "llevar",
            "right": "+ tiempo + gerundio (llevar dos años trabajando)"
          }
        ],
        "explanation": "Algunos verbos se combinan con gerundio ('seguir', 'llevar') y otros exigen infinitivo con preposición ('empezar a', 'dejar de')."
      },
      {
        "type": "multi-select",
        "question": "¿Qué verbos o construcciones se combinan normalmente con el gerundio y no con el infinitivo?",
        "options": [
          "seguir",
          "empezar a",
          "llevar (+ tiempo)",
          "dejar de",
          "continuar",
          "acabar de"
        ],
        "correctIndexes": [
          0,
          2,
          4
        ],
        "explanation": "'Seguir', 'llevar' + tiempo y 'continuar' se combinan con gerundio; 'empezar a', 'dejar de' y 'acabar de' exigen infinitivo."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Traduce la oración al español.",
        "source": "Upon finishing the project, they celebrated with the whole team.",
        "answer": "Al terminar el proyecto, celebraron con todo el equipo.",
        "altAnswers": [
          "Al acabar el proyecto, celebraron con todo el equipo."
        ],
        "explanation": "'Al' + infinitivo expresa una acción inmediatamente anterior a otra, equivalente a 'upon + gerundio' en inglés."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con la forma correcta del verbo entre paréntesis.",
        "sentence": "Para ___ (aprobar) el examen, tienes que estudiar todos los días.",
        "answer": "aprobar",
        "hint": "Después de 'para' siempre va el infinitivo.",
        "explanation": "La preposición 'para' siempre va seguida de infinitivo cuando expresa finalidad."
      },
      {
        "type": "multiple-choice",
        "question": "Completa la oración: 'Mi hermano lleva cinco años ___.'",
        "options": [
          "viviendo en Madrid",
          "vivir en Madrid",
          "vivido en Madrid",
          "a vivir en Madrid"
        ],
        "correctIndex": 0,
        "explanation": "La construcción 'llevar' + cantidad de tiempo + gerundio expresa cuánto tiempo lleva ocurriendo una acción."
      }
    ]
  },
  {
    "slug": "gerundio-vs-infinitivo-drill-3",
    "level": "C1",
    "number": 130,
    "title": "Gerundio vs. Infinitivo: Práctica Extra, Part 3 of 3",
    "summary": "Practica las distinciones avanzadas entre el gerundio y el infinitivo: acciones simultáneas, el error del gerundio de posterioridad, el infinitivo tras preposición, el infinitivo como sujeto y las construcciones verbales que exigen una u otra forma.",
    "duration": "9 min",
    "sections": [
      {
        "heading": "Empezar a / dejar de + infinitivo",
        "body": [
          "Los verbos 'empezar a', 'dejar de', 'terminar de' y 'acabar de' se combinan con el infinitivo, no con el gerundio."
        ],
        "examples": [
          {
            "es": "Empezó a llover de repente.",
            "en": "It suddenly started to rain."
          },
          {
            "es": "Dejó de fumar hace dos años.",
            "en": "He quit smoking two years ago."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "Elige la opción correcta: 'Mi abuelo ___ de fumar hace diez años.'",
            "options": [
              "dejó fumando",
              "dejó de fumar",
              "dejó fumar",
              "dejando de fumar"
            ],
            "correctIndex": 1,
            "explanation": "'Dejar de' se construye con infinitivo: 'dejar de + infinitivo' significa abandonar un hábito."
          }
        ]
      },
      {
        "heading": "Ir / venir / llevar + gerundio",
        "body": [
          "Los verbos 'ir', 'venir' y 'llevar' también se combinan con el gerundio para expresar progresión o duración."
        ],
        "examples": [
          {
            "es": "Llevo dos horas esperando el autobús.",
            "en": "I've been waiting for the bus for two hours."
          },
          {
            "es": "Poco a poco va entendiendo mejor el idioma.",
            "en": "Little by little he's understanding the language better."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa la oración con la forma correcta del verbo entre paréntesis.",
            "sentence": "Llevo tres años ___ (vivir) en esta ciudad.",
            "answer": "viviendo",
            "hint": "'Llevar' + tiempo + gerundio expresa duración.",
            "explanation": "La construcción 'llevar' + cantidad de tiempo + gerundio expresa cuánto tiempo lleva ocurriendo una acción."
          }
        ]
      },
      {
        "heading": "Repaso combinado: gerundio vs. infinitivo",
        "body": [
          "Repasa todas las estructuras: elige el gerundio o el infinitivo según la función que cumple en la oración."
        ],
        "examples": [
          {
            "es": "Terminar la tarea antes de acostarte es buena idea.",
            "en": "Finishing the homework before you go to bed is a good idea."
          }
        ],
        "checkpoint": [
          {
            "type": "multi-select",
            "question": "¿Cuáles de las siguientes oraciones usan correctamente el gerundio o el infinitivo?",
            "options": [
              "Nadar es un ejercicio excelente.",
              "Se rompió el brazo cayéndose de la bicicleta.",
              "Al terminar el examen, entregó la hoja.",
              "Sigue viviendo con sus padres."
            ],
            "correctIndexes": [
              0,
              2,
              3
            ],
            "explanation": "La oración 2 es incorrecta porque usa el gerundio de posterioridad; debería decir 'Se cayó de la bicicleta y se rompió el brazo'. Las demás son correctas: infinitivo como sujeto, infinitivo tras preposición y 'seguir' + gerundio."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "word-order",
        "prompt": "Ordena las palabras para formar una oración correcta.",
        "words": [
          "Empezó",
          "a",
          "llover",
          "justo",
          "cuando",
          "salimos",
          "de",
          "casa"
        ],
        "translation": "It started to rain right when we left the house.",
        "explanation": "'Empezar a' se combina siempre con infinitivo, nunca con gerundio."
      },
      {
        "type": "translate",
        "direction": "es-en",
        "prompt": "Traduce la oración al inglés.",
        "source": "Viajar por el mundo es su mayor sueño.",
        "answer": "Traveling around the world is his/her greatest dream.",
        "altAnswers": [
          "To travel around the world is his/her greatest dream."
        ],
        "explanation": "El infinitivo español como sujeto de la oración equivale al gerundio inglés ('-ing') o al infinitivo con 'to'."
      },
      {
        "type": "multiple-choice",
        "question": "Completa: 'No he terminado; sigo ___ el informe.'",
        "options": [
          "escribir",
          "escribiendo",
          "a escribir",
          "escrito"
        ],
        "correctIndex": 1,
        "explanation": "'Seguir' se combina con gerundio para expresar que una acción continúa."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con la forma correcta del verbo entre paréntesis.",
        "sentence": "Sin ___ (decir) una sola palabra, se levantó y se fue.",
        "answer": "decir",
        "hint": "Después de una preposición como 'sin' va el infinitivo.",
        "explanation": "La preposición 'sin' siempre va seguida de infinitivo, nunca de gerundio."
      },
      {
        "type": "multiple-choice",
        "question": "¿Cuál de las siguientes oraciones usa el gerundio correctamente para expresar una acción simultánea?",
        "options": [
          "Salió de la reunión gritando de furia.",
          "Salió de la reunión gritó de furia.",
          "Saliendo de la reunión, gritando de furia.",
          "Salió de la reunión para gritando de furia."
        ],
        "correctIndex": 0,
        "explanation": "El gerundio 'gritando' expresa una acción que ocurre al mismo tiempo que 'salió'; las demás opciones son agramaticales."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con el infinitivo que funciona como sujeto.",
        "sentence": "___ (Hacer) ejercicio regularmente ayuda a mantener la salud mental.",
        "answer": "Hacer",
        "hint": "El infinitivo puede funcionar como sujeto de la oración.",
        "explanation": "Cuando la acción es el sujeto de la oración, el español usa el infinitivo, no el gerundio ('-ing')."
      }
    ]
  },
  {
    "slug": "passive-voice-impersonal-se-drill-1",
    "level": "C1",
    "number": 131,
    "title": "Voz Pasiva y Se Impersonal: Práctica Extra, Part 1 of 3",
    "summary": "Practica a fondo la voz pasiva con ser, la pasiva refleja con se y el se impersonal, con especial atención a los contrastes que suelen confundir incluso a hablantes avanzados.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Repaso: la voz pasiva con ser + participio",
        "body": [
          "Recuerda que el participio concuerda en género y número con el sujeto paciente, y que el agente, si aparece, se introduce con 'por'."
        ],
        "examples": [
          {
            "es": "La casa fue construida en 1990 por un arquitecto famoso.",
            "en": "The house was built in 1990 by a famous architect."
          },
          {
            "es": "Los documentos fueron firmados ayer.",
            "en": "The documents were signed yesterday."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa la oración con la forma correcta del participio.",
            "sentence": "Las cartas fueron ___ (escribir) por la secretaria.",
            "answer": "escritas",
            "hint": "Concuerda con 'las cartas': femenino plural.",
            "explanation": "El participio 'escrito' es irregular y debe concordar en género y número con el sujeto 'las cartas', por eso se usa 'escritas'."
          },
          {
            "type": "multiple-choice",
            "question": "¿Cuál oración usa correctamente la voz pasiva con ser?",
            "options": [
              "El puente fue construido por los ingenieros.",
              "El puente fue construidos por los ingenieros.",
              "El puente fue construir por los ingenieros.",
              "El puente es construido para los ingenieros."
            ],
            "correctIndex": 0,
            "explanation": "El participio 'construido' debe concordar en singular con 'el puente', y el agente se introduce con 'por'."
          }
        ]
      },
      {
        "heading": "Repaso: la pasiva refleja (se + verbo)",
        "body": [
          "En la pasiva refleja, el verbo concuerda en número con el sujeto paciente, que suele colocarse después del verbo."
        ],
        "examples": [
          {
            "es": "Se venden libros usados en esta tienda.",
            "en": "Used books are sold in this store."
          },
          {
            "es": "Se construyeron muchas casas nuevas el año pasado.",
            "en": "Many new houses were built last year."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa con la forma correcta del verbo en pasiva refleja.",
            "sentence": "Se ___ (alquilar) dos apartamentos en este edificio.",
            "answer": "alquilan",
            "hint": "El sujeto 'dos apartamentos' es plural.",
            "explanation": "En la pasiva refleja el verbo concuerda en número con el sujeto paciente; como 'dos apartamentos' es plural, el verbo debe ser 'alquilan'."
          }
        ]
      },
      {
        "heading": "Repaso: el se impersonal",
        "body": [
          "El se impersonal usa el verbo siempre en singular porque no hay un sujeto gramatical claro, sino personas no especificadas."
        ],
        "examples": [
          {
            "es": "Se vive bien en esta ciudad.",
            "en": "One lives well in this city. / People live well in this city."
          },
          {
            "es": "Se dice que el examen será difícil.",
            "en": "They say that the exam will be difficult."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Cuál oración es un ejemplo correcto de se impersonal?",
            "options": [
              "Se trabaja mucho en esa empresa.",
              "Se trabajan mucho en esa empresa.",
              "Se trabajaron mucho en esa empresa.",
              "Se han trabajado mucho en esa empresa."
            ],
            "correctIndex": 0,
            "explanation": "Con se impersonal, verbos intransitivos como 'trabajar' siempre van en tercera persona del singular, sin importar a cuántas personas se refiera."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "¿Cuál es la traducción correcta de 'The bridge was built in 1950'?",
        "options": [
          "El puente fue construido en 1950.",
          "El puente fue construida en 1950.",
          "El puente fueron construidos en 1950.",
          "El puente ha sido construyendo en 1950."
        ],
        "correctIndex": 0,
        "explanation": "El participio 'construido' debe concordar en masculino singular con 'el puente', y el auxiliar 'fue' va en tercera persona singular."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa con la forma correcta del verbo (pasiva refleja).",
        "sentence": "Se ___ (necesitar) camareros con experiencia.",
        "answer": "necesitan",
        "hint": "El sujeto 'camareros' es plural.",
        "explanation": "Como 'camareros' es el sujeto paciente plural, el verbo debe concordar en plural: 'se necesitan camareros'."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa con la forma correcta del verbo (se impersonal).",
        "sentence": "En este barrio se ___ (comer) muy bien.",
        "answer": "come",
        "hint": "No hay sujeto paciente; el verbo va siempre en singular.",
        "explanation": "'Comer' es intransitivo aquí y no tiene sujeto paciente, así que con se impersonal el verbo siempre va en singular: 'se come'."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Traduce la oración al español usando la pasiva refleja.",
        "source": "Two new hospitals were opened last year.",
        "answer": "Se abrieron dos hospitales nuevos el año pasado.",
        "altAnswers": [
          "El año pasado se abrieron dos hospitales nuevos."
        ],
        "explanation": "El sujeto paciente 'dos hospitales nuevos' es plural, por lo que el verbo debe concordar: 'se abrieron'."
      },
      {
        "type": "translate",
        "direction": "es-en",
        "prompt": "Traduce la oración al inglés.",
        "source": "Se prohíbe fumar dentro del edificio.",
        "answer": "Smoking is prohibited inside the building.",
        "altAnswers": [
          "It is prohibited to smoke inside the building."
        ],
        "explanation": "'Se prohíbe' es una construcción impersonal/pasiva refleja singular que equivale a 'is prohibited' en inglés."
      },
      {
        "type": "multiple-choice",
        "question": "¿Cuál oración es un ejemplo de se impersonal?",
        "options": [
          "Se venden coches usados.",
          "Se alquila una habitación.",
          "Se estudia mucho para este examen.",
          "Se necesitan más voluntarios."
        ],
        "correctIndex": 2,
        "explanation": "'Se estudia' no tiene un sujeto paciente plural que reciba la acción; es una construcción impersonal, siempre en singular. Las demás sí tienen un sujeto paciente ('coches', 'una habitación', 'voluntarios') con el que el verbo concuerda."
      }
    ]
  },
  {
    "slug": "passive-voice-impersonal-se-drill-2",
    "level": "C1",
    "number": 132,
    "title": "Voz Pasiva y Se Impersonal: Práctica Extra, Part 2 of 3",
    "summary": "Practica a fondo la voz pasiva con ser, la pasiva refleja con se y el se impersonal, con especial atención a los contrastes que suelen confundir incluso a hablantes avanzados.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "La clave: pasiva refleja vs. se impersonal",
        "body": [
          "Si hay un sustantivo que funciona como sujeto paciente y puede recibir la acción, el verbo concuerda con él (pasiva refleja); si no existe tal sujeto, el verbo queda siempre en singular (impersonal)."
        ],
        "examples": [
          {
            "es": "Se venden casas. (pasiva refleja: 'casas' es el sujeto, plural)",
            "en": "Houses are sold."
          },
          {
            "es": "Se vive bien aquí. (impersonal: no hay sujeto paciente)",
            "en": "People live well here."
          }
        ],
        "checkpoint": [
          {
            "type": "multi-select",
            "question": "¿Cuáles de las siguientes oraciones son ejemplos de se impersonal (y no de pasiva refleja)?",
            "options": [
              "Se venden flores en el mercado.",
              "Se habla mucho de política estos días.",
              "Se necesitan voluntarios para el evento.",
              "Se duerme bien en esta habitación."
            ],
            "correctIndexes": [
              1,
              3
            ],
            "explanation": "'Se habla' y 'se duerme' no tienen un sujeto paciente que reciba la acción, por eso el verbo queda en singular (impersonal). 'Se venden flores' y 'se necesitan voluntarios' son pasiva refleja porque 'flores' y 'voluntarios' son sujetos plurales."
          }
        ]
      },
      {
        "heading": "Se + a + persona: siempre singular",
        "body": [
          "Cuando el sustantivo afectado es una persona introducida con la 'a' personal, el verbo se mantiene en singular para evitar confundirlo con un sujeto paciente."
        ],
        "examples": [
          {
            "es": "Se contrató a los nuevos empleados la semana pasada.",
            "en": "The new employees were hired last week."
          },
          {
            "es": "Se busca a los responsables del accidente.",
            "en": "Those responsible for the accident are being sought."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa la oración con la forma correcta del verbo.",
            "sentence": "Se ___ (entrevistar) a los candidatos finalistas ayer.",
            "answer": "entrevistó",
            "hint": "Cuando la persona lleva 'a' personal, el verbo va en singular.",
            "explanation": "Aunque 'los candidatos finalistas' es plural, al llevar la 'a' personal el verbo permanece en singular: 'se entrevistó a los candidatos'."
          }
        ]
      },
      {
        "heading": "Se con verbos de opinión y comunicación",
        "body": [
          "Expresiones como 'se dice que', 'se cree que' y 'se sabe que' son impersonales y siempre usan el verbo en singular seguido de una oración con 'que'."
        ],
        "examples": [
          {
            "es": "Se cree que el proyecto terminará pronto.",
            "en": "It is believed that the project will finish soon."
          },
          {
            "es": "Se sabe que muchos estudiantes no aprobaron el examen.",
            "en": "It is known that many students did not pass the exam."
          }
        ],
        "checkpoint": [
          {
            "type": "translate",
            "direction": "es-en",
            "prompt": "Traduce la oración al inglés.",
            "source": "Se dice que el nuevo restaurante es excelente.",
            "answer": "It is said that the new restaurant is excellent.",
            "altAnswers": [
              "They say the new restaurant is excellent.",
              "People say the new restaurant is excellent."
            ],
            "explanation": "'Se dice que' es una construcción impersonal fija que equivale a 'it is said that' o 'they say that' en inglés."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "word-order",
        "prompt": "Ordena las palabras para formar una oración pasiva con ser.",
        "words": [
          "La",
          "novela",
          "fue",
          "escrita",
          "por",
          "una",
          "autora",
          "chilena"
        ],
        "translation": "The novel was written by a Chilean author.",
        "explanation": "En la pasiva con ser, el participio 'escrita' concuerda con 'la novela' (femenino singular) y el agente se introduce con 'por'."
      },
      {
        "type": "matching",
        "instructions": "Empareja cada oración con el tipo de construcción que representa.",
        "pairs": [
          {
            "left": "La catedral fue construida en el siglo XII.",
            "right": "Voz pasiva con ser"
          },
          {
            "left": "Se venden pisos en esta zona.",
            "right": "Pasiva refleja"
          },
          {
            "left": "Se vive tranquilo en el campo.",
            "right": "Se impersonal"
          },
          {
            "left": "Se dice que lloverá mañana.",
            "right": "Se impersonal"
          }
        ],
        "explanation": "La voz pasiva con ser usa 'ser + participio' y suele mencionar el agente; la pasiva refleja usa 'se' con un sujeto paciente que concuerda en número; el se impersonal usa 'se' con el verbo siempre en singular y sin sujeto paciente claro."
      },
      {
        "type": "multi-select",
        "question": "¿Cuáles oraciones tienen el verbo en la forma correcta?",
        "options": [
          "Se vendieron todas las entradas en una hora.",
          "Se necesita más información sobre el caso.",
          "Se buscan tres asistentes bilingües.",
          "Se hablan de ese tema en las noticias."
        ],
        "correctIndexes": [
          0,
          1,
          2
        ],
        "explanation": "Las tres primeras concuerdan correctamente: 'entradas' y 'asistentes' son plurales (pasiva refleja) e 'información' es singular. La cuarta es incorrecta porque 'se habla de ese tema' es impersonal y debe ir en singular, no 'se hablan'."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con la forma correcta del participio.",
        "sentence": "Las nuevas leyes fueron ___ (aprobar) por el parlamento la semana pasada.",
        "answer": "aprobadas",
        "hint": "Concuerda con 'las nuevas leyes': femenino plural.",
        "explanation": "El participio 'aprobadas' debe concordar en género y número con el sujeto paciente 'las nuevas leyes'."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Traduce la oración al español.",
        "source": "It is said that this restaurant has the best paella in the city.",
        "answer": "Se dice que este restaurante tiene la mejor paella de la ciudad.",
        "explanation": "'Se dice que' es la construcción impersonal fija para 'it is said that', seguida de una oración subordinada."
      }
    ]
  },
  {
    "slug": "passive-voice-impersonal-se-drill-3",
    "level": "C1",
    "number": 133,
    "title": "Voz Pasiva y Se Impersonal: Práctica Extra, Part 3 of 3",
    "summary": "Practica a fondo la voz pasiva con ser, la pasiva refleja con se y el se impersonal, con especial atención a los contrastes que suelen confundir incluso a hablantes avanzados.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Ser + participio vs. pasiva refleja: elección de registro",
        "body": [
          "La pasiva con ser suele usarse en registros formales o cuando se destaca el agente, mientras que la pasiva refleja es más común en el habla cotidiana y en anuncios."
        ],
        "examples": [
          {
            "es": "La ley fue aprobada por el Congreso en 2020.",
            "en": "The law was passed by Congress in 2020."
          },
          {
            "es": "Se aprobó la ley en 2020.",
            "en": "The law was passed in 2020."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Qué oración es más natural para un cartel de tienda?",
            "options": [
              "Se venden zapatos.",
              "Los zapatos son vendidos.",
              "Los zapatos fueron vendidos por la tienda.",
              "Se vende a los zapatos."
            ],
            "correctIndex": 0,
            "explanation": "En anuncios y carteles cotidianos, la pasiva refleja ('se venden zapatos') es mucho más natural que la pasiva con ser, que suena forzada en este contexto."
          }
        ]
      },
      {
        "heading": "Práctica de contraste final",
        "body": [
          "Antes de pasar a los ejercicios finales, recuerda que la concordancia del verbo es la pista más fiable para distinguir la pasiva refleja del se impersonal."
        ],
        "examples": [
          {
            "es": "Se buscan camareros con experiencia.",
            "en": "Waiters with experience are being sought."
          },
          {
            "es": "Se trabaja duro en este restaurante.",
            "en": "People work hard in this restaurant."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "En la oración 'Se necesitan tres voluntarios para el proyecto', ¿qué tipo de construcción es?",
            "options": [
              "Pasiva refleja, porque 'tres voluntarios' es el sujeto plural.",
              "Se impersonal, porque no hay sujeto claro.",
              "Voz pasiva con ser.",
              "Se reflexivo."
            ],
            "correctIndex": 0,
            "explanation": "'Tres voluntarios' funciona como sujeto paciente y concuerda en plural con el verbo 'necesitan', por lo que es pasiva refleja."
          },
          {
            "type": "word-order",
            "prompt": "Ordena las palabras para formar una oración correcta en pasiva refleja.",
            "words": [
              "Se",
              "alquilan",
              "habitaciones",
              "amuebladas",
              "en",
              "el",
              "centro"
            ],
            "translation": "Furnished rooms are rented downtown.",
            "explanation": "El sujeto paciente 'habitaciones amuebladas' es plural, así que el verbo 'alquilan' concuerda con él: pasiva refleja."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "¿Cuál es la forma correcta?",
        "options": [
          "Se buscan a los culpables del robo.",
          "Se busca a los culpables del robo.",
          "Se buscaron a los culpables del robo.",
          "Se han buscado a los culpables del robo."
        ],
        "correctIndex": 1,
        "explanation": "Cuando el sustantivo afectado es una persona introducida con la 'a' personal, el verbo permanece en singular, aunque el sustantivo sea plural: 'se busca a los culpables'."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa con la forma correcta del verbo.",
        "sentence": "Se ___ (contratar) a la nueva directora de marketing ayer.",
        "answer": "contrató",
        "hint": "Persona + 'a' personal: el verbo va en singular.",
        "explanation": "Con la 'a' personal el verbo siempre queda en singular, sin importar el número de personas involucradas: 'se contrató a la nueva directora'."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras para formar una oración con se impersonal.",
        "words": [
          "En",
          "esta",
          "oficina",
          "se",
          "trabaja",
          "de",
          "lunes",
          "a",
          "viernes"
        ],
        "translation": "In this office, people work Monday to Friday.",
        "explanation": "No hay un sujeto paciente que reciba la acción de 'trabajar', así que se trata de se impersonal y el verbo va en singular."
      },
      {
        "type": "multiple-choice",
        "question": "¿Qué oración corrige el error de concordancia en 'Se vende tres apartamentos en el centro'?",
        "options": [
          "Se venden tres apartamentos en el centro.",
          "Se vendieron tres apartamentos en el centro, siendo esta la única opción correcta.",
          "Se vende a tres apartamentos en el centro.",
          "Se ha vendido tres apartamentos en el centro."
        ],
        "correctIndex": 0,
        "explanation": "El sujeto paciente 'tres apartamentos' es plural, así que el verbo debe concordar en plural: 'se venden tres apartamentos'."
      },
      {
        "type": "translate",
        "direction": "es-en",
        "prompt": "Traduce la oración al inglés.",
        "source": "Se construyeron cientos de viviendas sociales durante esa década.",
        "answer": "Hundreds of public housing units were built during that decade.",
        "altAnswers": [
          "Hundreds of social housing units were built during that decade."
        ],
        "explanation": "'Se construyeron' es pasiva refleja en plural porque concuerda con el sujeto paciente 'cientos de viviendas sociales'."
      },
      {
        "type": "multi-select",
        "question": "¿Cuáles de estas oraciones usan correctamente el se impersonal?",
        "options": [
          "Se duerme mal cuando hace mucho calor.",
          "Se opinan diferentes cosas sobre este tema.",
          "Se respira mejor en las montañas.",
          "Se comentan que los precios subirán."
        ],
        "correctIndexes": [
          0,
          2
        ],
        "explanation": "'Se duerme' y 'se respira' son verbos intransitivos sin sujeto paciente y van correctamente en singular. 'Se opinan' y 'se comentan' son incorrectos porque estas construcciones impersonales deben mantenerse siempre en singular: 'se opina' y 'se comenta'."
      }
    ]
  },
  {
    "slug": "estilo-indirecto-libre-drill-1",
    "level": "C1",
    "number": 134,
    "title": "El Estilo Indirecto Libre: Práctica Extra, Part 1 of 3",
    "summary": "Una batería de ejercicios para reconocer y producir el estilo indirecto libre, la técnica narrativa que funde la voz del personaje con la del narrador sin verbos introductorios ni comillas.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Reconocer los tres estilos",
        "body": [
          "Recuerda que el estilo indirecto libre combina el cambio de tiempos del estilo indirecto con la ausencia de comillas y de verbos como \"dijo que\" del estilo directo."
        ],
        "examples": [
          {
            "es": "Estilo directo: —No volveré —dijo Ana.",
            "en": "Direct: \"I won't come back,\" said Ana."
          },
          {
            "es": "Estilo indirecto libre: Ana cerró la puerta. No volvería jamás.",
            "en": "Free indirect: Ana closed the door. She would never come back."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Cuál de las siguientes oraciones está escrita en estilo indirecto libre?",
            "options": [
              "Pedro dijo que no iría a la fiesta.",
              "—No iré a la fiesta —afirmó Pedro.",
              "Pedro miró la invitación. No iría a esa fiesta.",
              "Pedro no fue a la fiesta."
            ],
            "correctIndex": 2,
            "explanation": "La tercera opción funde el pensamiento de Pedro con la narración: no hay \"dijo que\" ni comillas, pero el verbo cambia a condicional (\"iría\"), señal típica del estilo indirecto libre."
          }
        ]
      },
      {
        "heading": "El cambio de tiempos verbales (backshift)",
        "body": [
          "En el estilo indirecto libre, igual que en el indirecto, el futuro pasa a condicional y el presente pasa a imperfecto."
        ],
        "examples": [
          {
            "es": "Pensamiento original: \"Mañana empezaré de nuevo.\" → Mañana empezaría de nuevo.",
            "en": "Original thought: \"Tomorrow I'll start over.\" → Tomorrow she would start over."
          },
          {
            "es": "Pensamiento original: \"Todo es culpa mía.\" → Todo era culpa suya.",
            "en": "Original thought: \"It's all my fault.\" → It was all her fault."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa la oración transformando el verbo al estilo indirecto libre.",
            "sentence": "Marta suspiró frente al espejo. Mañana ___ (empezar) un nuevo capítulo de su vida.",
            "answer": "empezaría",
            "hint": "Futuro → condicional",
            "explanation": "El futuro del pensamiento original (\"empezaré\") se convierte en condicional (\"empezaría\") al integrarse en la narración en pasado, sin necesidad de un verbo introductorio."
          }
        ]
      },
      {
        "heading": "Pronombres y persona gramatical",
        "body": [
          "Los pronombres de primera persona del pensamiento original cambian a tercera persona, igual que en el estilo indirecto."
        ],
        "examples": [
          {
            "es": "Pensamiento: \"Yo no merezco esto.\" → Él no merecía esto.",
            "en": "Thought: \"I don't deserve this.\" → He didn't deserve this."
          },
          {
            "es": "Sofía cerró los ojos. Su vida entera se le escapaba de las manos.",
            "en": "Sofía closed her eyes. Her whole life was slipping through her hands."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "Transforma el pensamiento de Luis (\"Mi vida no tiene sentido\") en estilo indirecto libre dentro de la narración.",
            "options": [
              "Luis dijo que su vida no tenía sentido.",
              "Luis se sentó en el banco. Su vida no tenía sentido.",
              "—Mi vida no tiene sentido —pensó Luis.",
              "Luis pensó que mi vida no tenía sentido."
            ],
            "correctIndex": 1,
            "explanation": "El pronombre posesivo cambia de \"mi\" a \"su\" y el verbo se mantiene en el mismo tiempo (presente→imperfecto no aplica aquí porque ya es una afirmación general), pero sin \"dijo que\" ni comillas: eso es estilo indirecto libre."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "¿Cuál de estas oraciones NO es un ejemplo de estilo indirecto libre?",
        "options": [
          "Sara cerró el libro. Ya no tenía sentido seguir leyendo.",
          "Sara pensó que ya no tenía sentido seguir leyendo.",
          "El sol se ponía. Nunca volvería a ver esa casa.",
          "Se quedó callado. Todo había terminado."
        ],
        "correctIndex": 1,
        "explanation": "La opción 2 usa el verbo introductorio \"pensó que\", propio del estilo indirecto estándar; las demás fusionan narración y pensamiento sin marcas explícitas."
      },
      {
        "type": "multiple-choice",
        "question": "¿Qué efecto busca principalmente un autor al usar el estilo indirecto libre?",
        "options": [
          "Distanciar al lector de los personajes",
          "Dar mayor formalidad al texto narrativo",
          "Sumergir al lector en la conciencia del personaje sin interrumpir la narración",
          "Evitar el uso de tiempos verbales en pasado"
        ],
        "correctIndex": 2,
        "explanation": "Al eliminar los verbos introductorios y las comillas, el estilo indirecto libre borra la frontera entre narrador y personaje, dando la sensación de acceso directo a su pensamiento."
      },
      {
        "type": "multi-select",
        "question": "¿Qué características definen al estilo indirecto libre? (Selecciona todas las correctas)",
        "options": [
          "Se usa un verbo introductorio como \"dijo que\"",
          "Los tiempos verbales retroceden (presente→imperfecto, futuro→condicional)",
          "No hay comillas ni rayas de diálogo",
          "Los pronombres cambian a tercera persona",
          "Se conserva la entonación exclamativa o interrogativa del personaje"
        ],
        "correctIndexes": [
          1,
          2,
          3,
          4
        ],
        "explanation": "El estilo indirecto libre carece de verbo introductorio, pero comparte con el indirecto estándar el retroceso temporal y el cambio de persona, y conserva marcas expresivas como exclamaciones y preguntas."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con la forma correcta del verbo en estilo indirecto libre.",
        "sentence": "Andrés apagó la luz. Ya no ___ (haber) remedio para lo que había hecho.",
        "answer": "había",
        "hint": "Presente → imperfecto",
        "explanation": "\"Hay\" en presente retrocede a \"había\" en imperfecto al integrarse en la narración pasada, sin verbo introductorio ni comillas."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con la forma correcta del verbo en estilo indirecto libre.",
        "sentence": "Inés dobló la carta. Nunca ___ (poder) perdonarlo por completo.",
        "answer": "podría",
        "hint": "Futuro → condicional",
        "explanation": "El futuro \"podré\" del pensamiento original se transforma en condicional \"podría\" al fundirse con la voz narrativa."
      },
      {
        "type": "fill-blank",
        "prompt": "Reescribe el pronombre posesivo para adaptarlo al estilo indirecto libre.",
        "sentence": "Tomás salió del despacho. \"Mi\" carrera pensamiento original → ___ carrera estaba arruinada.",
        "answer": "Su",
        "hint": "Primera persona → tercera persona",
        "explanation": "El posesivo de primera persona (\"mi\") pasa a tercera persona (\"su\") cuando el pensamiento del personaje se integra en la narración."
      }
    ]
  },
  {
    "slug": "estilo-indirecto-libre-drill-2",
    "level": "C1",
    "number": 135,
    "title": "El Estilo Indirecto Libre: Práctica Extra, Part 2 of 3",
    "summary": "Una batería de ejercicios para reconocer y producir el estilo indirecto libre, la técnica narrativa que funde la voz del personaje con la del narrador sin verbos introductorios ni comillas.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Sin verbos introductorios ni comillas",
        "body": [
          "La marca más visible del estilo indirecto libre es precisamente la ausencia de \"dijo que\", \"pensó que\" o signos de puntuación de diálogo."
        ],
        "examples": [
          {
            "es": "Indirecto estándar: Elena pensó que ya era demasiado tarde.",
            "en": "Standard indirect: Elena thought it was already too late."
          },
          {
            "es": "Indirecto libre: Elena miró el reloj. Ya era demasiado tarde.",
            "en": "Free indirect: Elena looked at the clock. It was already too late."
          }
        ],
        "checkpoint": [
          {
            "type": "multi-select",
            "question": "¿Cuáles de las siguientes oraciones están en estilo indirecto libre? (Selecciona todas las que correspondan)",
            "options": [
              "El profesor explicó que el examen sería difícil.",
              "Carla releyó la carta. Nada volvería a ser igual.",
              "—El examen será difícil —advirtió el profesor.",
              "Miguel se quedó mirando la puerta. Ella no iba a volver.",
              "Ana sabía que llegaba tarde."
            ],
            "correctIndexes": [
              1,
              3
            ],
            "explanation": "Las opciones 2 y 4 fusionan narración y pensamiento sin verbo introductorio ni comillas, con verbos en condicional/imperfecto. La 1 usa \"explicó que\" (indirecto estándar), la 3 usa comillas/raya (directo) y la 5 usa \"sabía que\" (indirecto estándar)."
          }
        ]
      },
      {
        "heading": "Preguntas en estilo indirecto libre",
        "body": [
          "Las preguntas del personaje se conservan con su entonación interrogativa, sin el \"si\" que exige el estilo indirecto estándar."
        ],
        "examples": [
          {
            "es": "Indirecto estándar: Se preguntó si llegaría a tiempo.",
            "en": "Standard indirect: She wondered if she would arrive on time."
          },
          {
            "es": "Indirecto libre: María miró el reloj. ¿Llegaría a tiempo?",
            "en": "Free indirect: María looked at the clock. Would she arrive on time?"
          }
        ],
        "checkpoint": [
          {
            "type": "translate",
            "direction": "en-es",
            "prompt": "Traduce la oración al español usando estilo indirecto libre.",
            "source": "He stared at the letter. Why had she never told him?",
            "answer": "Se quedó mirando la carta. ¿Por qué nunca se lo había dicho?",
            "altAnswers": [
              "Miró fijamente la carta. ¿Por qué nunca se lo había dicho ella?"
            ],
            "explanation": "La pregunta original (\"Why has she never told me?\") se conserva como pregunta, con el pronombre cambiado a tercera persona y el verbo retrocedido a pluscuamperfecto (\"había dicho\"), sin ningún verbo introductorio."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "translate",
        "direction": "es-en",
        "prompt": "Traduce el fragmento narrativo al inglés conservando el efecto del estilo indirecto libre.",
        "source": "Elena guardó la fotografía en el cajón. Nunca más volvería a mirarla.",
        "answer": "Elena put the photograph away in the drawer. She would never look at it again.",
        "altAnswers": [
          "Elena put the photo in the drawer. She would never look at it again."
        ],
        "explanation": "El condicional \"volvería\" corresponde al inglés \"would\", que en narrativa en pasado también sirve para expresar el futuro relativo de un pensamiento sin verbo introductorio."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Traduce la oración al español usando estilo indirecto libre.",
        "source": "Marcos sat down at the table. He would never eat there again.",
        "answer": "Marcos se sentó a la mesa. Nunca más comería allí.",
        "altAnswers": [
          "Marcos se sentó en la mesa. Jamás volvería a comer allí."
        ],
        "explanation": "\"Would never eat\" se traduce con condicional (\"comería\"), y la oración se integra en la narración sin comillas ni \"pensó que\", tal como exige el estilo indirecto libre."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Traduce la oración al español usando estilo indirecto libre.",
        "source": "She looked out the window. Was he ever coming back?",
        "answer": "Miró por la ventana. ¿Volvería él alguna vez?",
        "altAnswers": [
          "Se asomó a la ventana. ¿Alguna vez volvería él?"
        ],
        "explanation": "La pregunta se conserva con su entonación interrogativa y el verbo pasa a condicional (\"volvería\"), sin el \"si\" que usaría el estilo indirecto estándar (\"se preguntó si volvería\")."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras para formar una oración en estilo indirecto libre.",
        "words": [
          "Claudia",
          "leyó",
          "la",
          "nota",
          "otra",
          "vez.",
          "Nada",
          "tenía",
          "ya",
          "sentido."
        ],
        "translation": "Claudia read the note again. Nothing made sense anymore.",
        "explanation": "La segunda oración fusiona el pensamiento de Claudia con la narración: no hay verbo introductorio y el tiempo verbal (imperfecto \"tenía\") refleja el retroceso propio del estilo indirecto libre."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras para formar una oración en estilo indirecto libre.",
        "words": [
          "Héctor",
          "guardó",
          "silencio.",
          "¿Cómo",
          "iba",
          "a",
          "explicarles",
          "todo",
          "aquello?"
        ],
        "translation": "Héctor stayed silent. How was he going to explain all that to them?",
        "explanation": "La pregunta retórica del personaje se incorpora sin marcas de diálogo, y el verbo \"ir a\" se mantiene en imperfecto (\"iba\"), propio del retroceso temporal del estilo indirecto libre."
      },
      {
        "type": "matching",
        "instructions": "Relaciona cada oración con el estilo narrativo que emplea.",
        "pairs": [
          {
            "left": "—Nunca lo lograré —susurró Nora.",
            "right": "Estilo directo"
          },
          {
            "left": "Nora susurró que nunca lo lograría.",
            "right": "Estilo indirecto"
          },
          {
            "left": "Nora cerró los ojos. Nunca lo lograría.",
            "right": "Estilo indirecto libre"
          },
          {
            "left": "Fusiona la voz del narrador y la del personaje sin marcas explícitas.",
            "right": "Definición del estilo indirecto libre"
          }
        ],
        "explanation": "Las tres primeras parejas muestran la misma idea en los tres registros narrativos; la cuarta resume la característica esencial del estilo indirecto libre: la ausencia de fronteras marcadas entre narrador y personaje."
      }
    ]
  },
  {
    "slug": "estilo-indirecto-libre-drill-3",
    "level": "C1",
    "number": 136,
    "title": "El Estilo Indirecto Libre: Práctica Extra, Part 3 of 3",
    "summary": "Una batería de ejercicios para reconocer y producir el estilo indirecto libre, la técnica narrativa que funde la voz del personaje con la del narrador sin verbos introductorios ni comillas.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Exclamaciones y matices emocionales",
        "body": [
          "El estilo indirecto libre también conserva exclamaciones y expresiones coloquiales del personaje, transmitiendo su emoción directamente al lector."
        ],
        "examples": [
          {
            "es": "¡Qué injusticia! Nunca le habían dado una oportunidad.",
            "en": "How unfair! They had never given him a chance."
          },
          {
            "es": "Rosa cerró el cajón de golpe. ¡Basta ya de mentiras!",
            "en": "Rosa slammed the drawer shut. Enough lies already!"
          }
        ],
        "checkpoint": [
          {
            "type": "word-order",
            "prompt": "Ordena las palabras para formar una oración en estilo indirecto libre.",
            "words": [
              "Diego",
              "colgó",
              "el",
              "teléfono.",
              "¡Qué",
              "injusto",
              "era",
              "todo!"
            ],
            "translation": "Diego hung up the phone. How unfair it all was!",
            "explanation": "La exclamación se mantiene intacta y el verbo \"ser\" aparece en imperfecto (\"era\"), fundiendo la emoción del personaje con la voz narrativa, sin comillas ni verbo introductorio."
          }
        ]
      },
      {
        "heading": "El efecto narrativo: la perspectiva del personaje",
        "body": [
          "El estilo indirecto libre acerca al lector a la mente del personaje sin romper el hilo de la narración en tercera persona."
        ],
        "examples": [
          {
            "es": "Directo: —Estoy perdida —pensó Clara. / Indirecto: Clara pensó que estaba perdida. / Indirecto libre: Clara se detuvo. Estaba perdida.",
            "en": "Direct / Indirect / Free indirect versions of the same thought."
          }
        ],
        "checkpoint": [
          {
            "type": "matching",
            "instructions": "Relaciona cada oración con el estilo narrativo que emplea.",
            "pairs": [
              {
                "left": "—Ya no aguanto más —murmuró Pablo.",
                "right": "Estilo directo"
              },
              {
                "left": "Pablo murmuró que ya no aguantaba más.",
                "right": "Estilo indirecto"
              },
              {
                "left": "Pablo apretó los puños. Ya no aguantaba más.",
                "right": "Estilo indirecto libre"
              },
              {
                "left": "El lector siente los pensamientos del personaje como si fueran narración.",
                "right": "Efecto del estilo indirecto libre"
              }
            ],
            "explanation": "Cada oración ilustra un grado distinto de distancia entre narrador y personaje: comillas y verbo de habla (directo), verbo introductorio con \"que\" (indirecto), y fusión sin marcas (indirecto libre), cuyo efecto es meternos en la perspectiva del personaje."
          }
        ]
      },
      {
        "heading": "Transformar entre estilos",
        "body": [
          "Convertir una cita directa en estilo indirecto libre exige eliminar el verbo introductorio, retroceder el tiempo verbal y cambiar la persona."
        ],
        "examples": [
          {
            "es": "Directo: —No podré terminarlo a tiempo —pensó Javier. → Libre: Javier releyó el informe. No podría terminarlo a tiempo.",
            "en": "Direct: \"I won't be able to finish it on time,\" Javier thought. → Free indirect: Javier reread the report. He wouldn't be able to finish it on time."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Transforma la cita directa entre paréntesis al estilo indirecto libre dentro de la oración.",
            "sentence": "Lucía guardó las llaves en el bolso. (\"No volveré a confiar en él\") → No ___ a confiar en él.",
            "answer": "volvería",
            "hint": "Futuro → condicional",
            "explanation": "El futuro \"volveré\" del pensamiento original se convierte en condicional \"volvería\" al integrarse en la narración pasada, sin comillas ni verbo introductorio."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "matching",
        "instructions": "Relaciona cada recurso gramatical con su función en el estilo indirecto libre.",
        "pairs": [
          {
            "left": "Retroceso verbal (futuro → condicional)",
            "right": "Marca el pensamiento como anterior al momento de narración"
          },
          {
            "left": "Cambio de primera a tercera persona",
            "right": "Integra el pensamiento en la voz del narrador"
          },
          {
            "left": "Ausencia de comillas y verbos como \"dijo que\"",
            "right": "Elimina la distancia entre narrador y personaje"
          },
          {
            "left": "Conservación de exclamaciones y preguntas",
            "right": "Transmite la emoción original del personaje"
          }
        ],
        "explanation": "Cada recurso gramatical cumple una función específica que, combinada, produce el efecto característico del estilo indirecto libre: acercar al lector a la conciencia del personaje sin romper la narración en tercera persona."
      },
      {
        "type": "multiple-choice",
        "question": "¿Cuál de las siguientes oraciones está en estilo indirecto estándar, no en estilo indirecto libre?",
        "options": [
          "Raúl miró la pantalla. Ya era tarde para arrepentirse.",
          "Raúl reconoció que ya era tarde para arrepentirse.",
          "Ya era tarde para arrepentirse.",
          "¡Qué tarde era ya para arrepentirse!"
        ],
        "correctIndex": 1,
        "explanation": "La opción 2 conserva el verbo introductorio \"reconoció que\", marca distintiva del estilo indirecto estándar; las demás fusionan narración y pensamiento sin ese verbo."
      },
      {
        "type": "multiple-choice",
        "question": "En la oración \"Valeria dejó la maleta en el suelo. Mañana empezaría de cero\", ¿qué tiempo verbal tenía el pensamiento original de Valeria antes de la transformación?",
        "options": [
          "Pretérito perfecto",
          "Futuro simple",
          "Presente de subjuntivo",
          "Condicional"
        ],
        "correctIndex": 1,
        "explanation": "El condicional \"empezaría\" es el resultado del retroceso del futuro simple (\"Mañana empezaré de cero\") al integrarse en la narración en pasado, técnica característica del estilo indirecto libre."
      },
      {
        "type": "translate",
        "direction": "es-en",
        "prompt": "Traduce el fragmento narrativo al inglés conservando el efecto del estilo indirecto libre.",
        "source": "El taxista aceleró. ¿Por qué todos lo miraban así?",
        "answer": "The taxi driver sped up. Why was everyone looking at him like that?",
        "altAnswers": [
          "The cab driver accelerated. Why did everyone look at him that way?"
        ],
        "explanation": "La pregunta se traduce manteniendo su fuerza interrogativa dentro de la narración, sin ningún verbo introductorio como \"he wondered\", igual que en el original en español."
      },
      {
        "type": "multi-select",
        "question": "En el fragmento \"Beatriz apretó el volante. ¡Otra vez llegaría tarde! Nunca aprendería a organizarse\", ¿qué marcas indican que se trata de estilo indirecto libre? (Selecciona todas las que correspondan)",
        "options": [
          "El uso de la exclamación sin verbo introductorio",
          "El verbo \"llegaría\" en condicional en vez de futuro",
          "La presencia de comillas alrededor del pensamiento",
          "El uso de \"aprendería\" para expresar un pensamiento sobre el futuro",
          "La conjunción \"que\" antes del pensamiento"
        ],
        "correctIndexes": [
          0,
          1,
          3
        ],
        "explanation": "El estilo indirecto libre se reconoce por conservar la exclamación sin marcador, por el retroceso de futuro a condicional (\"llegaría\", \"aprendería\") y por la ausencia de comillas y de la conjunción \"que\", que sí aparecerían en el estilo indirecto estándar o directo."
      }
    ]
  },
  {
    "slug": "ser-estar-haber-casos-limite-drill-1",
    "level": "C1",
    "number": 137,
    "title": "Ser, Estar y Haber: Casos Límite: Práctica Extra, Part 1 of 3",
    "summary": "Práctica intensiva de los usos más avanzados y ambiguos de ser, estar y haber: participios con matiz de acción o estado, la pasiva progresiva 'estar siendo', el precio fijo frente al precio variable, los adjetivos de percepción subjetiva y las fórmulas idiomáticas del registro formal.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "Ser + participio (acción) frente a estar + participio (estado resultante)",
        "body": [
          "Con 'ser' el participio narra la acción pasiva en sí misma; con 'estar' describe el estado que queda después de esa acción."
        ],
        "examples": [
          {
            "es": "La tienda fue cerrada a las nueve por el encargado.",
            "en": "The store was closed at nine by the manager."
          },
          {
            "es": "La tienda está cerrada desde las nueve.",
            "en": "The store has been closed since nine."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa la oración con 'ser' o 'estar' en la forma correcta.",
            "sentence": "El contrato ___ firmado ayer por ambas partes ante notario.",
            "answer": "fue",
            "hint": "Es una acción puntual con un agente claro.",
            "explanation": "Se usa 'ser' porque se narra la acción pasiva concreta de firmar, realizada por un agente ('ambas partes') en un momento determinado."
          },
          {
            "type": "fill-blank",
            "prompt": "Completa la oración con 'ser' o 'estar' en la forma correcta.",
            "sentence": "El contrato ___ firmado desde ayer, así que ya pueden empezar las obras.",
            "answer": "está",
            "hint": "No se narra la acción, sino la situación actual.",
            "explanation": "Se usa 'estar' porque la oración describe el estado resultante y vigente del contrato, no el evento de la firma."
          }
        ]
      },
      {
        "heading": "'Estar siendo' + participio: la pasiva progresiva",
        "body": [
          "'Estar siendo' señala que una acción pasiva ocurre en este mismo momento y es habitual en el registro periodístico o formal."
        ],
        "examples": [
          {
            "es": "El sospechoso está siendo interrogado por la policía.",
            "en": "The suspect is being questioned by the police."
          },
          {
            "es": "Las nuevas leyes están siendo debatidas en el parlamento.",
            "en": "The new laws are being debated in parliament."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Cuál de estas oraciones usa correctamente la pasiva progresiva para indicar que la acción ocurre ahora mismo?",
            "options": [
              "El puente es construido por la misma empresa desde 2020.",
              "El puente está siendo construido por la misma empresa desde 2020.",
              "El puente fue siendo construido por la misma empresa desde 2020.",
              "El puente está construido por la misma empresa desde 2020."
            ],
            "correctIndex": 1,
            "explanation": "'Estar siendo + participio' es la forma correcta para una acción pasiva en desarrollo; las demás opciones usan tiempos incompatibles con ese matiz o describen solo un estado."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "Elige la opción correcta: 'El museo ___ cerrado los lunes por decisión del ayuntamiento.'",
        "options": [
          "fue",
          "fue siendo",
          "está",
          "ha sido siendo"
        ],
        "correctIndex": 2,
        "explanation": "Se describe una situación habitual y vigente (el horario), no el evento puntual de cerrar, por lo que corresponde 'estar'."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con 'ser' o 'estar' en la forma correcta.",
        "sentence": "La ventana ___ rota desde la tormenta de ayer; todavía no ha venido nadie a arreglarla.",
        "answer": "está",
        "hint": "Describe el estado actual, no la acción de romperse.",
        "explanation": "'Estar rota' describe el estado resultante que persiste, sin enfocar la acción que lo causó."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con 'ser' o 'estar' en la forma correcta.",
        "sentence": "La ventana ___ rota por el granizo durante la tormenta de ayer.",
        "answer": "fue",
        "hint": "Aquí se narra la acción con su causa.",
        "explanation": "'Ser rota' aquí narra el evento pasivo con agente causante ('por el granizo'), no solo el estado final."
      },
      {
        "type": "translate",
        "direction": "es-en",
        "prompt": "Traduce la oración al inglés.",
        "source": "El edificio está siendo restaurado por el ayuntamiento.",
        "answer": "The building is being restored by the city council.",
        "altAnswers": [
          "The building is being restored by the town hall."
        ],
        "explanation": "'Está siendo restaurado' es la pasiva progresiva española, equivalente a 'is being restored' en inglés."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Traduce la oración al español.",
        "source": "The contract is being reviewed by the lawyers.",
        "answer": "El contrato está siendo revisado por los abogados.",
        "altAnswers": [
          "El contrato está siendo revisado por los letrados."
        ],
        "explanation": "Para una acción pasiva en curso se usa 'estar siendo' + participio, no simplemente 'ser' o 'estar'."
      },
      {
        "type": "multiple-choice",
        "question": "Elige la opción correcta: 'Los tomates ___ a tres euros el kilo esta semana.'",
        "options": [
          "son",
          "están",
          "fueron",
          "han sido"
        ],
        "correctIndex": 1,
        "explanation": "El precio de productos frescos que fluctúa por temporada o mercado se expresa con 'estar a', no con 'ser'."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con la forma correcta.",
        "sentence": "La cena para dos personas ___ sesenta euros, con el servicio incluido.",
        "answer": "es",
        "hint": "Es un precio total y cerrado, no por unidad.",
        "explanation": "Se usa 'ser' porque se indica un precio fijo y total, no un valor variable por unidad como en 'estar a'."
      }
    ]
  },
  {
    "slug": "ser-estar-haber-casos-limite-drill-2",
    "level": "C1",
    "number": 138,
    "title": "Ser, Estar y Haber: Casos Límite: Práctica Extra, Part 2 of 3",
    "summary": "Práctica intensiva de los usos más avanzados y ambiguos de ser, estar y haber: participios con matiz de acción o estado, la pasiva progresiva 'estar siendo', el precio fijo frente al precio variable, los adjetivos de percepción subjetiva y las fórmulas idiomáticas del registro formal.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Ser y estar con precios: el coste fijo frente al precio variable",
        "body": [
          "'Ser' expresa un precio fijo o total, mientras que 'estar a' señala un precio variable de mercado, normalmente por unidad."
        ],
        "examples": [
          {
            "es": "Las entradas son veinte euros.",
            "en": "The tickets are twenty euros."
          },
          {
            "es": "El pescado está a doce euros el kilo hoy.",
            "en": "Fish is at twelve euros a kilo today."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa la oración con la forma correcta.",
            "sentence": "El alquiler ___ setecientos euros al mes, sin contar los gastos de comunidad.",
            "answer": "es",
            "hint": "Es un precio fijo y estable.",
            "explanation": "Se usa 'ser' porque el alquiler es una cifra fija acordada, no un precio que fluctúa día a día."
          },
          {
            "type": "fill-blank",
            "prompt": "Completa la oración con la forma correcta.",
            "sentence": "El aceite de oliva ___ a seis euros el litro esta semana en el mercado.",
            "answer": "está",
            "hint": "Es un precio de mercado que puede cambiar.",
            "explanation": "Se usa 'estar a' porque se trata de un precio sujeto a fluctuación, típico de productos frescos o de mercado."
          }
        ]
      },
      {
        "heading": "Ser y estar con adjetivos de percepción subjetiva",
        "body": [
          "Algunos adjetivos cambian de matiz según el enfoque del hablante: 'ser' presenta un rasgo inherente y 'estar' una impresión puntual o cambiada."
        ],
        "examples": [
          {
            "es": "Marta es guapa.",
            "en": "Marta is pretty (as a general trait)."
          },
          {
            "es": "Marta está guapísima hoy con ese vestido.",
            "en": "Marta looks really pretty today in that dress."
          }
        ],
        "checkpoint": [
          {
            "type": "multi-select",
            "question": "¿En cuáles de estas oraciones 'estar' expresa una impresión momentánea del hablante y no un rasgo permanente?",
            "options": [
              "Estás muy callado hoy, ¿te pasa algo?",
              "Es muy trabajador desde que era joven.",
              "El café está buenísimo esta mañana.",
              "Es alto, mide casi dos metros."
            ],
            "correctIndexes": [
              0,
              2
            ],
            "explanation": "'Estás muy callado hoy' y 'El café está buenísimo' señalan una impresión puntual y cambiante; las otras dos describen rasgos estables con 'ser'."
          }
        ]
      },
      {
        "heading": "Haber, tener y estar en fórmulas idiomáticas del registro formal",
        "body": [
          "El registro formal y administrativo fija expresiones concretas con haber, tener o estar que no siempre coinciden con el uso cotidiano."
        ],
        "examples": [
          {
            "es": "Ha lugar a recurso ante el tribunal superior.",
            "en": "There are grounds for appeal before the higher court."
          },
          {
            "es": "Los asistentes tienen a bien confirmar su presencia antes del viernes.",
            "en": "Attendees are kindly requested to confirm their presence before Friday."
          }
        ],
        "checkpoint": [
          {
            "type": "translate",
            "direction": "es-en",
            "prompt": "Traduce la oración al inglés.",
            "source": "Los interesados tienen a bien enviar su currículum antes del día quince.",
            "answer": "Interested parties are kindly requested to send their résumé before the fifteenth.",
            "altAnswers": [
              "Interested parties should kindly send their résumé before the fifteenth."
            ],
            "explanation": "'Tener a bien' es una fórmula fija de cortesía formal equivalente a 'be so kind as to' o 'kindly', muy distinta del uso habitual de 'tener'."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multi-select",
        "question": "¿En cuáles de estas oraciones el precio expresado es fijo o total (uso de 'ser')?",
        "options": [
          "El billete de tren es cuarenta euros ida y vuelta.",
          "La gasolina está a uno con ochenta el litro.",
          "El curso completo es trescientos euros.",
          "Las naranjas están a dos euros el kilo hoy."
        ],
        "correctIndexes": [
          0,
          2
        ],
        "explanation": "'Es cuarenta euros' y 'es trescientos euros' expresan precios fijos y totales; las otras dos usan 'estar a' para precios variables por unidad."
      },
      {
        "type": "matching",
        "instructions": "Empareja cada oración con el matiz que expresa: acción pasiva o estado resultante.",
        "pairs": [
          {
            "left": "La puerta fue abierta por el conserje.",
            "right": "Acción pasiva completada por un agente concreto."
          },
          {
            "left": "La puerta está abierta.",
            "right": "Estado resultante, sin foco en quién la abrió."
          },
          {
            "left": "El caso está siendo investigado.",
            "right": "Acción pasiva en curso en este momento."
          },
          {
            "left": "El caso fue investigado durante meses.",
            "right": "Acción pasiva ya concluida en el pasado."
          }
        ],
        "explanation": "El participio con 'ser' narra la acción (completada o en curso con 'estar siendo'), mientras que 'estar' + participio simple describe solo el estado resultante."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras para formar una oración correcta.",
        "words": [
          "El",
          "sospechoso",
          "está",
          "siendo",
          "interrogado",
          "ahora",
          "mismo"
        ],
        "translation": "The suspect is being questioned right now.",
        "explanation": "El orden correcto sigue el patrón sujeto + estar siendo + participio + complemento temporal, propio de la pasiva progresiva."
      },
      {
        "type": "multiple-choice",
        "question": "¿Qué frase es correcta para expresar que alguien tiene hoy un aspecto especialmente atractivo, y no en general?",
        "options": [
          "Es guapísima.",
          "Está guapísima hoy.",
          "Fue guapísima.",
          "Ha sido guapísima."
        ],
        "correctIndex": 1,
        "explanation": "'Estar guapísima hoy' marca una impresión puntual y cambiante ligada a ese día, propia de 'estar' con adjetivos de percepción."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con la forma correcta del verbo 'tener'.",
        "sentence": "Los socios ___ a bien remitir la documentación antes del plazo indicado.",
        "answer": "tienen",
        "hint": "Es una fórmula fija de cortesía en textos formales.",
        "explanation": "'Tener a bien' es una expresión idiomática formal equivalente a pedir cortésmente que alguien haga algo."
      }
    ]
  },
  {
    "slug": "ser-estar-haber-casos-limite-drill-3",
    "level": "C1",
    "number": 139,
    "title": "Ser, Estar y Haber: Casos Límite: Práctica Extra, Part 3 of 3",
    "summary": "Práctica intensiva de los usos más avanzados y ambiguos de ser, estar y haber: participios con matiz de acción o estado, la pasiva progresiva 'estar siendo', el precio fijo frente al precio variable, los adjetivos de percepción subjetiva y las fórmulas idiomáticas del registro formal.",
    "duration": "9 min",
    "sections": [
      {
        "heading": "Ser y estar con la ubicación de eventos frente a objetos",
        "body": [
          "Para localizar un evento se usa 'ser', pero para localizar un objeto, un lugar o una persona se usa siempre 'estar'."
        ],
        "examples": [
          {
            "es": "La conferencia es en el auditorio principal.",
            "en": "The conference is in the main auditorium."
          },
          {
            "es": "El auditorio está al final del pasillo.",
            "en": "The auditorium is at the end of the hallway."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "Elige la opción correcta: 'La boda ___ en la finca de los abuelos.'",
            "options": [
              "está",
              "es",
              "ha estado",
              "fue siendo"
            ],
            "correctIndex": 1,
            "explanation": "La boda es un evento, y los eventos se localizan con 'ser', aunque el lugar físico ('la finca') se localice con 'estar'."
          },
          {
            "type": "fill-blank",
            "prompt": "Completa la oración con la forma correcta.",
            "sentence": "La finca de los abuelos ___ a las afueras del pueblo.",
            "answer": "está",
            "hint": "Aquí se localiza un lugar físico, no un evento.",
            "explanation": "Se usa 'estar' porque 'la finca' es un objeto/lugar físico, y los lugares físicos siempre se localizan con 'estar'."
          }
        ]
      },
      {
        "heading": "Estar + gerundio frente a ser + adjetivo: matices aspectuales límite",
        "body": [
          "'Estar siendo' + adjetivo enfatiza una cualidad percibida como temporal o en desarrollo, mientras que 'ser' + adjetivo la presenta como rasgo permanente."
        ],
        "examples": [
          {
            "es": "Últimamente está siendo muy generoso con el equipo.",
            "en": "Lately he's being very generous with the team."
          },
          {
            "es": "Siempre ha sido generoso con el equipo.",
            "en": "He has always been generous with the team."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa la oración con la forma correcta.",
            "sentence": "Últimamente Pedro ___ siendo bastante distante con sus amigos, algo raro en él.",
            "answer": "está",
            "hint": "Se percibe un cambio temporal de comportamiento.",
            "explanation": "'Estar siendo' + adjetivo marca que la cualidad se percibe como temporal o reciente, no como un rasgo fijo de Pedro."
          }
        ]
      },
      {
        "heading": "Repaso integrador de todos los casos límite",
        "body": [
          "Combina en un mismo contexto los matices de acción/estado, pasiva progresiva, precio, percepción y registro formal."
        ],
        "examples": [
          {
            "es": "El informe fue redactado por el comité, pero todavía está siendo revisado.",
            "en": "The report was drafted by the committee, but it is still being reviewed."
          },
          {
            "es": "El menú del día está a quince euros; el menú degustación es cuarenta y cinco.",
            "en": "The set menu is at fifteen euros; the tasting menu is forty-five."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Qué oración combina correctamente una acción pasiva concluida y un estado resultante vigente?",
            "options": [
              "El edificio está construido en 1990 y todavía es en obras.",
              "El edificio fue construido en 1990 y todavía está en obras.",
              "El edificio es construido en 1990 y todavía fue en obras.",
              "El edificio ha estado construido en 1990 y todavía ha sido en obras."
            ],
            "correctIndex": 1,
            "explanation": "'Fue construido' narra la acción pasiva concluida en 1990, y 'está en obras' describe el estado actual y vigente del edificio."
          },
          {
            "type": "translate",
            "direction": "en-es",
            "prompt": "Traduce la oración al español.",
            "source": "The claim is being reviewed, but the ruling was already announced yesterday.",
            "answer": "La reclamación está siendo revisada, pero el fallo ya fue anunciado ayer.",
            "altAnswers": [
              "La reclamación está siendo revisada, pero el fallo ya se anunció ayer."
            ],
            "explanation": "'Está siendo revisada' expresa la pasiva en curso, mientras que 'fue anunciado' expresa la acción pasiva ya concluida."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "translate",
        "direction": "es-en",
        "prompt": "Traduce la oración al inglés.",
        "source": "Ha lugar a la reclamación presentada por el demandante.",
        "answer": "There are grounds for the claim filed by the plaintiff.",
        "altAnswers": [
          "The claim filed by the plaintiff is admissible."
        ],
        "explanation": "'Haber lugar a' es una fórmula jurídica formal que significa que algo procede o tiene fundamento legal."
      },
      {
        "type": "multiple-choice",
        "question": "Elige la opción correcta: 'La reunión ___ en la sala de juntas del tercer piso.'",
        "options": [
          "es",
          "está",
          "fue estando",
          "ha estado"
        ],
        "correctIndex": 0,
        "explanation": "Los eventos, como 'la reunión', se localizan siempre con 'ser', a diferencia de los objetos o lugares físicos."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con la forma correcta.",
        "sentence": "La sala de juntas ___ en el tercer piso, al lado del ascensor.",
        "answer": "está",
        "hint": "Aquí se localiza un lugar físico.",
        "explanation": "'Estar' localiza objetos y lugares físicos como 'la sala de juntas', en contraste con 'ser' para eventos."
      },
      {
        "type": "multi-select",
        "question": "¿En cuáles de estas oraciones se usa correctamente 'estar siendo' para expresar una cualidad percibida como temporal?",
        "options": [
          "Últimamente está siendo muy paciente con los nuevos empleados.",
          "Siempre es muy paciente con todo el mundo.",
          "Esta semana está siendo especialmente difícil en la oficina.",
          "Es difícil por naturaleza, desde niño."
        ],
        "correctIndexes": [
          0,
          2
        ],
        "explanation": "'Está siendo' + adjetivo marca un rasgo percibido como reciente o temporal; las otras oraciones usan 'ser' para rasgos permanentes."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras para formar una oración correcta.",
        "words": [
          "El",
          "alquiler",
          "es",
          "de",
          "quinientos",
          "euros",
          "al",
          "mes"
        ],
        "translation": "The rent is five hundred euros a month.",
        "explanation": "El orden sujeto + ser + precio fijo + unidad temporal es el habitual para expresar un coste total y estable."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Traduce la oración al español.",
        "source": "Lately, she's been being unusually patient with the interns.",
        "answer": "Últimamente, está siendo inusualmente paciente con los becarios.",
        "altAnswers": [
          "Últimamente, está siendo inusualmente paciente con los becarios en prácticas."
        ],
        "explanation": "'Está siendo' + adjetivo traduce el matiz temporal de 'being' en inglés, distinto del rasgo permanente que expresaría 'es'."
      }
    ]
  },
  {
    "slug": "verbos-preposicionales-drill-1",
    "level": "C1",
    "number": 140,
    "title": "Verbos con Preposición Fija: Práctica Extra, Part 1 of 3",
    "summary": "Practica de forma intensiva los verbos preposicionales avanzados del español —soñar con, consistir en, fijarse en, depender de, negarse a, entre otros— con énfasis en los pares que cambian de sentido según la preposición.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Verbos con A",
        "body": [
          "Estos verbos exigen la preposición A delante de un infinitivo o un sustantivo."
        ],
        "examples": [
          {
            "es": "Me niego a mentir por ti.",
            "en": "I refuse to lie for you."
          },
          {
            "es": "Se dedica a la enseñanza desde hace diez años.",
            "en": "She has devoted herself to teaching for ten years."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa la oración con la preposición correcta.",
            "sentence": "Todavía no me acostumbro ___ vivir sin ti.",
            "answer": "a",
            "hint": "acostumbrarse + preposición",
            "explanation": "El verbo 'acostumbrarse' siempre se construye con la preposición A seguida de infinitivo o sustantivo."
          },
          {
            "type": "multiple-choice",
            "question": "¿Qué preposición completa correctamente 'Nunca se atreve ___ decir la verdad'?",
            "options": [
              "de",
              "en",
              "a",
              "con"
            ],
            "correctIndex": 2,
            "explanation": "'Atreverse' rige la preposición A, no DE, EN ni CON."
          }
        ]
      },
      {
        "heading": "Verbos con DE",
        "body": [
          "Estos verbos siempre llevan DE, aunque en inglés no aparezca ninguna preposición equivalente."
        ],
        "examples": [
          {
            "es": "No me acuerdo de su nombre.",
            "en": "I don't remember his name."
          },
          {
            "es": "Todo depende de tu actitud.",
            "en": "It all depends on your attitude."
          }
        ],
        "checkpoint": [
          {
            "type": "multi-select",
            "question": "¿Qué verbos se construyen con la preposición DE?",
            "options": [
              "tratarse",
              "depender",
              "insistir",
              "quejarse",
              "soñar"
            ],
            "correctIndexes": [
              0,
              1,
              3
            ],
            "explanation": "'Tratarse', 'depender' y 'quejarse' exigen DE. 'Insistir' exige EN y 'soñar' exige CON."
          },
          {
            "type": "translate",
            "direction": "en-es",
            "prompt": "Traduce la oración al español.",
            "source": "I found out about the news too late.",
            "answer": "Me enteré de la noticia demasiado tarde.",
            "altAnswers": [
              "Me enteré de la noticia demasiado tarde"
            ],
            "explanation": "'Enterarse' se construye siempre con DE: 'enterarse de algo'."
          }
        ]
      },
      {
        "heading": "Verbos con EN",
        "body": [
          "EN introduce el elemento central o el punto de atención de estos verbos."
        ],
        "examples": [
          {
            "es": "El examen consiste en tres partes.",
            "en": "The exam consists of three parts."
          },
          {
            "es": "Fíjate en los detalles antes de firmar.",
            "en": "Pay attention to the details before signing."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa la oración con la preposición correcta.",
            "sentence": "Mi jefe se empeña ___ terminar el proyecto hoy mismo.",
            "answer": "en",
            "hint": "empeñarse + preposición",
            "explanation": "'Empeñarse' rige la preposición EN cuando significa insistir tercamente en algo."
          },
          {
            "type": "multiple-choice",
            "question": "¿Cuál es la preposición correcta en 'Insisto ___ que me escuches'?",
            "options": [
              "de",
              "a",
              "con",
              "en"
            ],
            "correctIndex": 3,
            "explanation": "'Insistir' se combina con EN, no con DE, A ni CON."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "Completa: 'De joven, siempre soñaba ___ ser piloto.'",
        "options": [
          "en",
          "de",
          "con",
          "a"
        ],
        "correctIndex": 2,
        "explanation": "'Soñar' se construye con CON cuando se refiere a un deseo o aspiración."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con la forma correcta.",
        "sentence": "El curso consiste ___ diez módulos de gramática.",
        "answer": "en",
        "hint": "consistir + preposición",
        "explanation": "'Consistir' siempre lleva la preposición EN."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Traduce la oración al español.",
        "source": "It all depends on you.",
        "answer": "Todo depende de ti.",
        "altAnswers": [
          "Todo depende de vosotros",
          "Todo depende de usted"
        ],
        "explanation": "'Depender' se construye con DE: 'depender de algo/alguien'."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras para formar una oración correcta.",
        "words": [
          "Siempre",
          "puedo",
          "contar",
          "con",
          "mis",
          "amigos"
        ],
        "translation": "I can always count on my friends.",
        "explanation": "'Contar con alguien' expresa que se puede confiar en esa persona."
      },
      {
        "type": "multi-select",
        "question": "¿Qué verbos exigen la preposición DE?",
        "options": [
          "tratarse",
          "depender",
          "quejarse",
          "acordarse",
          "insistir"
        ],
        "correctIndexes": [
          0,
          1,
          2,
          3
        ],
        "explanation": "'Tratarse', 'depender', 'quejarse' y 'acordarse' exigen DE. 'Insistir' exige EN."
      },
      {
        "type": "matching",
        "instructions": "Empareja cada verbo con su preposición fija correcta.",
        "pairs": [
          {
            "left": "fijarse",
            "right": "en"
          },
          {
            "left": "empeñarse",
            "right": "en"
          },
          {
            "left": "negarse",
            "right": "a"
          },
          {
            "left": "atreverse",
            "right": "a"
          }
        ],
        "explanation": "'Fijarse' y 'empeñarse' se combinan con EN; 'negarse' y 'atreverse' se combinan con A."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con la preposición correcta.",
        "sentence": "Fíjate bien ___ la ortografía antes de enviar el correo.",
        "answer": "en",
        "hint": "fijarse + preposición",
        "explanation": "'Fijarse' se construye con EN cuando significa prestar atención a algo."
      }
    ]
  },
  {
    "slug": "verbos-preposicionales-drill-2",
    "level": "C1",
    "number": 141,
    "title": "Verbos con Preposición Fija: Práctica Extra, Part 2 of 3",
    "summary": "Practica de forma intensiva los verbos preposicionales avanzados del español —soñar con, consistir en, fijarse en, depender de, negarse a, entre otros— con énfasis en los pares que cambian de sentido según la preposición.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "Verbos con CON",
        "body": [
          "CON expresa compañía, apoyo o el objeto con el que uno se encuentra o sueña."
        ],
        "examples": [
          {
            "es": "Sueño con vivir en España algún día.",
            "en": "I dream of living in Spain someday."
          },
          {
            "es": "Puedes contar conmigo siempre.",
            "en": "You can always count on me."
          }
        ],
        "checkpoint": [
          {
            "type": "translate",
            "direction": "es-en",
            "prompt": "Traduce la oración al inglés.",
            "source": "Después de años de búsqueda, dimos con el documento perdido.",
            "answer": "After years of searching, we found the lost document.",
            "altAnswers": [
              "After years of searching, we came across the lost document.",
              "We finally found the lost document after years of searching."
            ],
            "explanation": "'Dar con algo' significa encontrar algo, a menudo tras buscarlo con esfuerzo."
          },
          {
            "type": "word-order",
            "prompt": "Ordena las palabras para formar una oración correcta.",
            "words": [
              "Siempre",
              "puedo",
              "contar",
              "con",
              "mis",
              "amigos"
            ],
            "translation": "I can always count on my friends.",
            "explanation": "'Contar con alguien' significa poder confiar en esa persona o depender de su ayuda."
          }
        ]
      },
      {
        "heading": "Contraste: pensar EN vs. pensar DE",
        "body": [
          "Pensar EN significa tener algo en la mente; pensar DE pide una opinión concreta."
        ],
        "examples": [
          {
            "es": "Pienso en ti todo el día.",
            "en": "I think about you all day."
          },
          {
            "es": "¿Qué piensas de la nueva ley?",
            "en": "What do you think of the new law?"
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "Si alguien te pregunta tu opinión sobre una película, te pregunta:",
            "options": [
              "¿Qué piensas en la película?",
              "¿Qué piensas de la película?",
              "¿Qué piensas con la película?",
              "¿Qué piensas a la película?"
            ],
            "correctIndex": 1,
            "explanation": "Para pedir una opinión se usa 'pensar DE'. 'Pensar EN' se usa cuando algo está en la mente de alguien, no para opiniones."
          },
          {
            "type": "fill-blank",
            "prompt": "Completa la oración con la preposición correcta.",
            "sentence": "Llevo toda la tarde pensando ___ el examen de mañana.",
            "answer": "en",
            "hint": "el examen está en su mente, no es una opinión",
            "explanation": "Cuando algo simplemente ocupa la mente de alguien, se usa 'pensar EN', no 'pensar DE'."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "¿Qué oración expresa correctamente una opinión?",
        "options": [
          "¿Qué piensas en el nuevo profesor?",
          "¿Qué piensas de el nuevo profesor?",
          "¿Qué piensas del nuevo profesor?",
          "¿Qué piensas con el nuevo profesor?"
        ],
        "correctIndex": 2,
        "explanation": "Para pedir opiniones se usa 'pensar DE', que se contrae en 'del' ante 'el'."
      },
      {
        "type": "translate",
        "direction": "es-en",
        "prompt": "Traduce la oración al inglés.",
        "source": "Nos negamos a pagar la multa injusta.",
        "answer": "We refuse to pay the unfair fine.",
        "altAnswers": [
          "We refused to pay the unfair fine."
        ],
        "explanation": "'Negarse a' significa rehusarse a hacer algo y siempre lleva la preposición A."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con la preposición correcta.",
        "sentence": "Todavía no me acostumbro ___ el clima de esta ciudad.",
        "answer": "a",
        "hint": "acostumbrarse + preposición",
        "explanation": "'Acostumbrarse' se construye con A: 'acostumbrarse a algo'."
      },
      {
        "type": "multiple-choice",
        "question": "¿Cuál oración usa correctamente el sentido de orientación espacial?",
        "options": [
          "La cocina da con el jardín.",
          "La cocina da al jardín.",
          "La cocina da en el jardín.",
          "La cocina da de el jardín."
        ],
        "correctIndex": 1,
        "explanation": "'Dar A' indica hacia dónde está orientado un lugar; se contrae en 'al' ante 'el'."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras para formar una oración correcta.",
        "words": [
          "Me",
          "enteré",
          "de",
          "la",
          "noticia",
          "ayer"
        ],
        "translation": "I found out about the news yesterday.",
        "explanation": "'Enterarse' se construye siempre con la preposición DE."
      }
    ]
  },
  {
    "slug": "verbos-preposicionales-drill-3",
    "level": "C1",
    "number": 142,
    "title": "Verbos con Preposición Fija: Práctica Extra, Part 3 of 3",
    "summary": "Practica de forma intensiva los verbos preposicionales avanzados del español —soñar con, consistir en, fijarse en, depender de, negarse a, entre otros— con énfasis en los pares que cambian de sentido según la preposición.",
    "duration": "9 min",
    "sections": [
      {
        "heading": "Contraste: dar CON vs. dar A",
        "body": [
          "Dar CON significa encontrar algo tras buscarlo; dar A significa tener vista u orientación hacia un lugar."
        ],
        "examples": [
          {
            "es": "Por fin dimos con la solución.",
            "en": "We finally found the solution."
          },
          {
            "es": "Mi balcón da al mar.",
            "en": "My balcony faces the sea."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Qué oración usa correctamente 'dar A' con el sentido de orientación?",
            "options": [
              "Esta ventana da con el patio.",
              "Esta ventana da al patio.",
              "Esta ventana da en el patio.",
              "Esta ventana da de el patio."
            ],
            "correctIndex": 1,
            "explanation": "Cuando 'dar' indica hacia dónde está orientado un lugar, se usa 'dar A' (contraído a 'al' ante 'el')."
          },
          {
            "type": "translate",
            "direction": "en-es",
            "prompt": "Traduce la oración al español.",
            "source": "After searching for hours, they found the exit.",
            "answer": "Después de buscar durante horas, dieron con la salida.",
            "altAnswers": [
              "Tras buscar durante horas, dieron con la salida."
            ],
            "explanation": "'Dar con algo' expresa el hallazgo de algo buscado, distinto de 'dar a', que indica orientación espacial."
          }
        ]
      },
      {
        "heading": "Repaso: verbos con DE vs. EN",
        "body": [
          "Repasa la diferencia entre los verbos que exigen DE y los que exigen EN."
        ],
        "examples": [
          {
            "es": "No te quejes de todo constantemente.",
            "en": "Don't complain about everything constantly."
          },
          {
            "es": "Insisto en que vengas a la fiesta.",
            "en": "I insist that you come to the party."
          }
        ],
        "checkpoint": [
          {
            "type": "multi-select",
            "question": "¿Qué verbos se construyen con la preposición EN?",
            "options": [
              "consistir",
              "quejarse",
              "fijarse",
              "acordarse",
              "insistir"
            ],
            "correctIndexes": [
              0,
              2,
              4
            ],
            "explanation": "'Consistir', 'fijarse' e 'insistir' exigen EN. 'Quejarse' y 'acordarse' exigen DE."
          },
          {
            "type": "fill-blank",
            "prompt": "Completa la oración con la preposición correcta.",
            "sentence": "Este curso se trata ___ aprender gramática avanzada.",
            "answer": "de",
            "hint": "tratarse + preposición",
            "explanation": "'Tratarse' se construye siempre con DE: 'tratarse de algo'."
          }
        ]
      },
      {
        "heading": "Repaso: verbos con A vs. CON",
        "body": [
          "Repasa la diferencia entre los verbos que exigen A y los que exigen CON."
        ],
        "examples": [
          {
            "es": "Nunca me atrevo a hablar en público.",
            "en": "I never dare to speak in public."
          },
          {
            "es": "Sueña con ser actriz.",
            "en": "She dreams of being an actress."
          }
        ],
        "checkpoint": [
          {
            "type": "matching",
            "instructions": "Empareja cada verbo con su preposición fija correcta.",
            "pairs": [
              {
                "left": "negarse",
                "right": "a"
              },
              {
                "left": "dedicarse",
                "right": "a"
              },
              {
                "left": "soñar",
                "right": "con"
              },
              {
                "left": "contar",
                "right": "con"
              }
            ],
            "explanation": "'Negarse' y 'dedicarse' se combinan con A; 'soñar' y 'contar' se combinan con CON."
          },
          {
            "type": "multiple-choice",
            "question": "¿Cuál oración es correcta?",
            "options": [
              "Me dedico con la música clásica.",
              "Me dedico a la música clásica.",
              "Me dedico en la música clásica.",
              "Me dedico de la música clásica."
            ],
            "correctIndex": 1,
            "explanation": "'Dedicarse' rige la preposición A, no CON, EN ni DE."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multi-select",
        "question": "¿Qué verbos exigen la preposición A?",
        "options": [
          "dedicarse",
          "atreverse",
          "consistir",
          "negarse",
          "soñar"
        ],
        "correctIndexes": [
          0,
          1,
          3
        ],
        "explanation": "'Dedicarse', 'atreverse' y 'negarse' exigen A. 'Consistir' exige EN y 'soñar' exige CON."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Traduce la oración al español.",
        "source": "She insists on leaving right now.",
        "answer": "Ella insiste en irse ahora mismo.",
        "altAnswers": [
          "Ella insiste en salir ahora mismo."
        ],
        "explanation": "'Insistir' se construye con la preposición EN."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con la preposición correcta.",
        "sentence": "Mi hermano se empeña ___ arreglar el coche él solo.",
        "answer": "en",
        "hint": "empeñarse + preposición",
        "explanation": "'Empeñarse' rige EN cuando significa insistir tercamente en hacer algo."
      },
      {
        "type": "multiple-choice",
        "question": "Completa: 'Nunca me atrevo ___ contradecir a mi jefe.'",
        "options": [
          "de",
          "en",
          "a",
          "con"
        ],
        "correctIndex": 2,
        "explanation": "'Atreverse' se construye con la preposición A seguida de infinitivo."
      },
      {
        "type": "translate",
        "direction": "es-en",
        "prompt": "Traduce la oración al inglés.",
        "source": "Mi habitación da al jardín trasero.",
        "answer": "My room faces the backyard.",
        "altAnswers": [
          "My room overlooks the backyard.",
          "My bedroom faces the backyard."
        ],
        "explanation": "'Dar a' expresa que un lugar tiene vista u orientación hacia otro sitio."
      },
      {
        "type": "matching",
        "instructions": "Empareja cada expresión con su significado correcto.",
        "pairs": [
          {
            "left": "pensar en algo",
            "right": "tener algo en la mente"
          },
          {
            "left": "pensar de algo",
            "right": "dar una opinión sobre algo"
          },
          {
            "left": "dar con algo",
            "right": "encontrar algo buscado"
          },
          {
            "left": "dar a un lugar",
            "right": "estar orientado hacia ese lugar"
          }
        ],
        "explanation": "Estos cuatro pares muestran cómo la preposición cambia por completo el significado del verbo."
      }
    ]
  },
  {
    "slug": "el-voseo-drill-1",
    "level": "C1",
    "number": 143,
    "title": "El Voseo Rioplatense: Práctica Extra, Part 1 of 3",
    "summary": "Ejercicios de repaso y repetición sobre el voseo: presente indicativo, imperativo y subjuntivo con vos, además de los pronombres y posesivos que no cambian respecto a tú.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Presente indicativo: verbos regulares con vos",
        "body": [
          "Recordá: vos usa la forma acentuada en la última sílaba, sin el cambio vocálico de tú (hablás, comés, vivís)."
        ],
        "examples": [
          {
            "es": "Vos hablás español muy bien.",
            "en": "You speak Spanish very well."
          },
          {
            "es": "¿Vos comés carne?",
            "en": "Do you eat meat?"
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa la oración con la forma correcta del verbo entre paréntesis.",
            "sentence": "Vos ___ (vivir) en Buenos Aires.",
            "answer": "vivís",
            "explanation": "Los verbos en -ir con vos terminan en -ís, acentuados en la última sílaba: vivís."
          }
        ]
      },
      {
        "heading": "Presente indicativo: verbos con cambio de raíz (sin diptongación)",
        "body": [
          "Con vos, los verbos que diptongan con tú (o→ue, e→ie) mantienen la vocal simple: podés, querés, dormís, pedís."
        ],
        "examples": [
          {
            "es": "Vos podés venir mañana.",
            "en": "You can come tomorrow."
          },
          {
            "es": "¿Vos querés un café?",
            "en": "Do you want a coffee?"
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Cuál es la forma correcta de 'dormir' con vos en presente indicativo?",
            "options": [
              "dormís",
              "duermes",
              "dormes",
              "duermés"
            ],
            "correctIndex": 0,
            "explanation": "Con vos no hay diptongación o→ue: la forma correcta es dormís, no 'duermes'."
          }
        ]
      },
      {
        "heading": "Verbos irregulares frecuentes con vos",
        "body": [
          "Algunos verbos irregulares tienen formas propias con vos: sos, tenés, venís, decís."
        ],
        "examples": [
          {
            "es": "Vos sos mi mejor amigo.",
            "en": "You are my best friend."
          },
          {
            "es": "¿Vos tenés hambre?",
            "en": "Are you hungry?"
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa la oración con la forma correcta del verbo entre paréntesis.",
            "sentence": "Vos ___ (decir) la verdad siempre.",
            "answer": "decís",
            "explanation": "'Decir' es irregular; la forma de vos es decís."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "¿Cuál es la forma correcta de 'trabajar' con vos en presente indicativo?",
        "options": [
          "trabajás",
          "trabajas",
          "trabajés",
          "trabaje"
        ],
        "correctIndex": 0,
        "explanation": "Con vos, los verbos en -ar terminan en -ás con el acento en la última sílaba: vos trabajás."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con la forma correcta del verbo entre paréntesis.",
        "sentence": "Vos ___ (pensar) demasiado las cosas.",
        "answer": "pensás",
        "hint": "Presente indicativo, sin diptongar.",
        "explanation": "Aunque 'pensar' diptonga con tú (piensas), con vos se mantiene la vocal simple: pensás."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con el imperativo correcto.",
        "sentence": "¡Dale, ___ (jugar) con nosotros!",
        "answer": "jugá",
        "hint": "Imperativo afirmativo de vos: quitá la -r del infinitivo.",
        "explanation": "El imperativo afirmativo de vos se forma quitando la -r final y acentuando la última vocal: jugar → jugá."
      },
      {
        "type": "translate",
        "direction": "es-en",
        "prompt": "Traduce la oración al inglés.",
        "source": "Vos podés hacerlo sin problema.",
        "answer": "You can do it without a problem.",
        "altAnswers": [
          "You can do it without any problem.",
          "You're able to do it without a problem."
        ],
        "explanation": "'Podés' es la forma de vos para 'poder' en presente, equivalente a 'puedes' con tú."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Traduce la oración al español usando la forma de vos.",
        "source": "Do you want to eat now?",
        "answer": "¿Vos querés comer ahora?",
        "altAnswers": [
          "¿Querés comer ahora?"
        ],
        "explanation": "'Querés' es la forma de vos de 'querer', sin diptongar la e en ie."
      },
      {
        "type": "word-order",
        "prompt": "Ordená las palabras para formar una oración correcta.",
        "words": [
          "Vos",
          "hablás",
          "español",
          "muy",
          "bien"
        ],
        "translation": "You speak Spanish very well.",
        "explanation": "El orden habitual es sujeto + verbo + complemento: Vos hablás español muy bien."
      }
    ]
  },
  {
    "slug": "el-voseo-drill-2",
    "level": "C1",
    "number": 144,
    "title": "El Voseo Rioplatense: Práctica Extra, Part 2 of 3",
    "summary": "Ejercicios de repaso y repetición sobre el voseo: presente indicativo, imperativo y subjuntivo con vos, además de los pronombres y posesivos que no cambian respecto a tú.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Imperativo afirmativo con vos",
        "body": [
          "El imperativo afirmativo de vos se forma quitando la -r del infinitivo y acentuando la última vocal, sin diptongar."
        ],
        "examples": [
          {
            "es": "¡Hablá más despacio!",
            "en": "Speak more slowly!"
          },
          {
            "es": "Comé la verdura.",
            "en": "Eat the vegetables."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Cuál es el imperativo afirmativo correcto de 'volver' con vos?",
            "options": [
              "volvé",
              "vuelve",
              "vuelvé",
              "volvés"
            ],
            "correctIndex": 0,
            "explanation": "El imperativo de vos quita la -r del infinitivo y acentúa la última vocal, sin diptongar: volvé."
          }
        ]
      },
      {
        "heading": "Imperativo negativo con vos",
        "body": [
          "El imperativo negativo de vos usa el subjuntivo, que en el uso estándar coincide con el de tú, aunque coloquialmente también se oye la forma acentuada (no hablés)."
        ],
        "examples": [
          {
            "es": "No hables tan fuerte.",
            "en": "Don't speak so loud."
          },
          {
            "es": "No comas eso.",
            "en": "Don't eat that."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa la oración con el imperativo negativo correcto.",
            "sentence": "No ___ (abrir) la puerta.",
            "answer": "abras",
            "explanation": "El imperativo negativo de vos usa el subjuntivo, que en el uso estándar coincide con el de tú: no abras."
          }
        ]
      },
      {
        "heading": "Presente de subjuntivo con vos",
        "body": [
          "En el uso estándar y gran parte de la región rioplatense, el subjuntivo con vos coincide con el de tú (que hables), aunque coloquialmente también aparece la forma acentuada (que hablés)."
        ],
        "examples": [
          {
            "es": "Quiero que vos hables con ella.",
            "en": "I want you to talk to her."
          },
          {
            "es": "Espero que vos vengas a la fiesta.",
            "en": "I hope you come to the party."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Cuál es la forma estándar del subjuntivo con vos en 'Quiero que vos ___ (hablar) con ella'?",
            "options": [
              "hables",
              "hablés",
              "hablas",
              "hablarás"
            ],
            "correctIndex": 0,
            "explanation": "En el uso estándar, el subjuntivo con vos coincide con el de tú: que hables. La forma acentuada 'hablés' es una variante coloquial rioplatense."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multi-select",
        "question": "¿Cuáles de las siguientes formas son formas correctas del presente indicativo con vos?",
        "options": [
          "dormís",
          "duermes",
          "podés",
          "puedes",
          "tenés"
        ],
        "correctIndexes": [
          0,
          2,
          4
        ],
        "explanation": "Las formas correctas de vos son dormís, podés y tenés; 'duermes' y 'puedes' corresponden a tú."
      },
      {
        "type": "matching",
        "instructions": "Relacioná cada infinitivo con su forma de imperativo afirmativo con vos.",
        "pairs": [
          {
            "left": "hablar",
            "right": "hablá"
          },
          {
            "left": "comer",
            "right": "comé"
          },
          {
            "left": "decir",
            "right": "decí"
          },
          {
            "left": "poner",
            "right": "poné"
          }
        ],
        "explanation": "El imperativo de vos siempre se acentúa en la última sílaba y no diptonga: hablá, comé, decí, poné."
      },
      {
        "type": "multiple-choice",
        "question": "¿Cuál es la forma correcta del imperativo negativo de 'hablar' con vos?",
        "options": [
          "no hables",
          "no hablá",
          "no hablas",
          "hablés no"
        ],
        "correctIndex": 0,
        "explanation": "El imperativo negativo de vos usa el subjuntivo, que en el uso estándar coincide con el de tú: no hables. Coloquialmente en la región rioplatense también se oye 'no hablés'."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con la forma correcta del verbo entre paréntesis.",
        "sentence": "Vos ___ (tener) toda la razón.",
        "answer": "tenés",
        "explanation": "'Tener' es irregular; con vos la forma es tenés, sin diptongar (no 'tienes')."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con la forma correcta del verbo entre paréntesis.",
        "sentence": "Vos ___ (venir) a la fiesta esta noche, ¿no?",
        "answer": "venís",
        "explanation": "La forma de vos para 'venir' es venís, acentuada en la última sílaba."
      },
      {
        "type": "translate",
        "direction": "es-en",
        "prompt": "Traduce la oración al inglés.",
        "source": "¿Vos sos de Uruguay?",
        "answer": "Are you from Uruguay?",
        "altAnswers": [
          "Are you from Uruguay, right?"
        ],
        "explanation": "'Sos' es la forma de vos del verbo ser, equivalente a 'eres' con tú."
      }
    ]
  },
  {
    "slug": "el-voseo-drill-3",
    "level": "C1",
    "number": 145,
    "title": "El Voseo Rioplatense: Práctica Extra, Part 3 of 3",
    "summary": "Ejercicios de repaso y repetición sobre el voseo: presente indicativo, imperativo y subjuntivo con vos, además de los pronombres y posesivos que no cambian respecto a tú.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Pronombres y posesivos: lo que no cambia",
        "body": [
          "Los pronombres de objeto y posesivos con vos son los mismos que con tú: te, tu, tus, tuyo, tuya."
        ],
        "examples": [
          {
            "es": "Te quiero mucho.",
            "en": "I love you a lot."
          },
          {
            "es": "Este libro es tuyo.",
            "en": "This book is yours."
          }
        ],
        "checkpoint": [
          {
            "type": "multi-select",
            "question": "¿Cuáles de las siguientes formas se usan igual con vos y con tú?",
            "options": [
              "te (pronombre de objeto)",
              "tu (posesivo)",
              "tuyo (posesivo)",
              "contigo",
              "ti"
            ],
            "correctIndexes": [
              0,
              1,
              2
            ],
            "explanation": "Los pronombres de objeto y posesivos (te, tu, tuyo) no cambian con vos; en cambio, 'contigo' y 'ti' no se usan con vos, que emplea 'con vos' y 'vos' como pronombre preposicional."
          }
        ]
      },
      {
        "heading": "Vos y tú: reconocimiento regional",
        "body": [
          "El voseo es una variante regional que conviene reconocer al leer o escuchar, aunque elijas usar tú en tu propio habla."
        ],
        "examples": [
          {
            "es": "¿De dónde sos vos?",
            "en": "Where are you from?"
          },
          {
            "es": "¿Tú de dónde eres?",
            "en": "Where are you from?"
          }
        ],
        "checkpoint": [
          {
            "type": "matching",
            "instructions": "Relacioná cada forma de tú con su equivalente en voseo.",
            "pairs": [
              {
                "left": "tú hablas",
                "right": "vos hablás"
              },
              {
                "left": "tú comes",
                "right": "vos comés"
              },
              {
                "left": "tú eres",
                "right": "vos sos"
              },
              {
                "left": "tú tienes",
                "right": "vos tenés"
              }
            ],
            "explanation": "El voseo reemplaza tú por vos y cambia la conjugación del verbo, acentuando la última sílaba."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "word-order",
        "prompt": "Ordená las palabras para formar el imperativo negativo correcto.",
        "words": [
          "No",
          "le",
          "digas",
          "eso"
        ],
        "translation": "Don't tell him/her that.",
        "explanation": "El imperativo negativo de vos usa la forma de subjuntivo: no le digas eso (coloquialmente también 'no le digás')."
      },
      {
        "type": "multiple-choice",
        "question": "Elegí la opción más apropiada: 'Espero que vos ___ (venir) temprano.'",
        "options": [
          "vengas",
          "venís",
          "vienes",
          "vendrás"
        ],
        "correctIndex": 0,
        "explanation": "En el subjuntivo con vos, la forma estándar coincide con la de tú: que vengas. La variante acentuada 'que vengás' aparece en el habla coloquial rioplatense."
      },
      {
        "type": "matching",
        "instructions": "Relacioná cada oración en español con su traducción al inglés. Fijate que los pronombres y posesivos con vos son iguales que con tú.",
        "pairs": [
          {
            "left": "Te quiero mucho.",
            "right": "I love you a lot."
          },
          {
            "left": "Este libro es tuyo.",
            "right": "This book is yours."
          },
          {
            "left": "¿Tu hermano viene con vos?",
            "right": "Is your brother coming with you?"
          }
        ],
        "explanation": "Los pronombres de objeto (te) y posesivos (tu, tuyo) no cambian entre tú y vos."
      },
      {
        "type": "multi-select",
        "question": "¿Cuáles de las siguientes oraciones usan correctamente el voseo?",
        "options": [
          "Vos podés venir cuando quieras.",
          "Vos puedes venir cuando quieras.",
          "Vos tenés razón.",
          "Vos tienes razón."
        ],
        "correctIndexes": [
          0,
          2
        ],
        "explanation": "Las formas correctas con vos son podés y tenés; 'puedes' y 'tienes' corresponden a la conjugación de tú."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la oración con el imperativo afirmativo correcto.",
        "sentence": "___ (decir) la verdad, por favor.",
        "answer": "Decí",
        "explanation": "El imperativo afirmativo de vos para 'decir' es decí, acentuado en la última sílaba."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Traduce la oración al español usando el imperativo de vos.",
        "source": "Speak with her, please.",
        "answer": "Hablá con ella, por favor.",
        "altAnswers": [
          "Hablá con ella, porfa."
        ],
        "explanation": "El imperativo afirmativo de vos para 'hablar' es hablá."
      }
    ]
  }
];
