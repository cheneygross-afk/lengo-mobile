import type { Lesson } from "./types";

// Cosas Coloquiales: a standalone module of lessons on colloquial phrases,
// customs, and everyday culture across the Hispanic world -- festivals,
// food culture, sports, music, folk beliefs, and social etiquette. It's its
// own module (own route at /lessons/cosas-coloquiales, own lesson list, own
// numbering) rather than part of the core C1/C2 sequence in c1c2.ts.
export const COSAS_COLOQUIALES_LESSONS: Lesson[] = [
  {
    "slug": "festivals-traditions-hispanic-world",
    "level": "C1/C2",
    "number": 1,
    "title": "Fiestas y Tradiciones del Mundo Hispano",
    "summary": "Un recorrido por las celebraciones que marcan el calendario cultural hispano -- su origen, sus rituales y el lenguaje coloquial que las acompaña -- para entender no solo qué se festeja, sino por qué importa tanto.",
    "duration": "21 min",
    "sections": [
      {
        "heading": "El calendario festivo como mapa cultural",
        "body": [
          "En el mundo hispano, el calendario no organiza solo el trabajo y el descanso: marca un ciclo de celebraciones que cada comunidad hereda, adapta y defiende como parte de su identidad. Entender una fiesta no es solo saber su fecha, sino entender qué necesidad colectiva satisface -- honrar a los muertos, cerrar un ciclo agrícola, celebrar la fe o simplemente reunir a la familia.",
          "Lo que sorprende a quien aprende español desde fuera es la cantidad de vocabulario cotidiano que nace directamente de estas celebraciones. Expresiones que hoy se usan sin pensar en su origen festivo -- para describir un ambiente animado, una reunión numerosa o una época de abundancia -- vienen casi siempre de una fiesta concreta."
        ],
        "examples": [
          {
            "es": "estar de fiesta",
            "en": "estar de celebración, con un ánimo festivo generalizado"
          },
          {
            "es": "armar la fiesta",
            "en": "organizar o animar una celebración, a veces también un alboroto"
          },
          {
            "es": "las fiestas patronales",
            "en": "las celebraciones anuales en honor al santo o figura protectora de un pueblo"
          },
          {
            "es": "ponerse las botas",
            "en": "comer o disfrutar de algo en abundancia, típico de las grandes celebraciones"
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "Durante la boda, hubo tanta comida que los invitados repitieron plato tres veces. ¿Qué expresión describe mejor lo que hicieron?",
            "options": [
              "ponerse las botas",
              "armar la fiesta",
              "estar de fiesta",
              "las fiestas patronales"
            ],
            "correctIndex": 0,
            "explanation": "Ponerse las botas describe comer o disfrutar de algo en abundancia, exactamente lo que ocurre cuando los invitados repiten varias veces durante un banquete."
          }
        ]
      },
      {
        "heading": "El Día de los Muertos: honrar sin llorar",
        "body": [
          "En México y parte de Centroamérica, el Día de los Muertos (1 y 2 de noviembre) invierte la lógica del duelo: en lugar de guardar silencio ante la muerte, se le habla, se le ofrece comida favorita y se le recibe con música. El altar u ofrenda -- con fotos, flores de cempasúchil, pan de muerto y los platillos preferidos del difunto -- no es un monumento triste, sino una invitación a que el alma regrese por una noche.",
          "Las calaveras literarias, versos satíricos que se dedican en broma a personas vivas imaginando su muerte, muestran algo esencial de esta tradición: el humor no es una falta de respeto hacia la muerte, sino una manera culturalmente aceptada de quitarle el miedo. Quien no entiende esta lógica puede confundir la fiesta con un Halloween mexicano, cuando en realidad responde a una cosmovisión completamente distinta."
        ],
        "examples": [
          {
            "es": "la ofrenda",
            "en": "el altar con objetos y comida que se dedica a un difunto en su honor"
          },
          {
            "es": "el pan de muerto",
            "en": "un pan dulce tradicional que se prepara específicamente para esta fecha"
          },
          {
            "es": "una calavera literaria",
            "en": "un poema satírico que imagina, en broma, la muerte de una persona viva"
          },
          {
            "es": "velar a alguien",
            "en": "acompañar el cuerpo o la memoria de un difunto durante la noche"
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa la palabra que designa el altar dedicado a un familiar fallecido durante esta celebración.",
            "sentence": "Cada año, la familia prepara ___ con fotos, flores y la comida favorita de la abuela.",
            "answer": "la ofrenda",
            "hint": "Es lo que se le entrega u ofrece a alguien como muestra de cariño.",
            "explanation": "La ofrenda es el altar tradicional del Día de los Muertos, montado con fotos, flores de cempasúchil y los platillos preferidos del difunto."
          }
        ]
      },
      {
        "heading": "Semana Santa: fe, procesión y comunidad",
        "body": [
          "En España, gran parte de Latinoamérica y Filipinas, la Semana Santa transforma las calles en escenario: los pasos (imágenes religiosas sobre plataformas) salen en procesión cargados a hombros por costaleros o cucuruchos, seguidos por bandas, nazarenos y una multitud que puede guardar un silencio absoluto o romper en aplausos, según la ciudad y la tradición local.",
          "Lo que unifica estas celebraciones, más allá de la religión formal, es el peso social del acto comunitario: participar en una procesión, aunque sea como espectador, conecta a quien lo vive con generaciones anteriores que hicieron exactamente lo mismo en la misma calle. Por eso, cuando algo se hace con extremo cuidado y solemnidad, se compara coloquialmente con una procesión."
        ],
        "examples": [
          {
            "es": "el paso",
            "en": "la plataforma con la imagen religiosa que se procesiona durante la Semana Santa"
          },
          {
            "es": "ir en procesión",
            "en": "desplazarse en fila, generalmente con solemnidad, como parte de un acto religioso o cívico"
          },
          {
            "es": "la procesión va por dentro",
            "en": "expresión que describe a alguien que sufre o se preocupa sin mostrarlo exteriormente"
          },
          {
            "es": "guardar la compostura",
            "en": "mantener un comportamiento serio y controlado en una situación formal"
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "Durante la entrevista de trabajo, Laura sonreía con calma, pero por dentro estaba aterrorizada. ¿Qué expresión describe mejor su estado?",
            "options": [
              "la procesión va por dentro",
              "el paso",
              "ir en procesión",
              "las fiestas patronales"
            ],
            "correctIndex": 0,
            "explanation": "La procesión va por dentro describe a alguien que sufre o se preocupa internamente sin dejarlo notar, justo la situación de Laura durante la entrevista."
          }
        ]
      },
      {
        "heading": "Nochevieja, carnaval y fiestas patronales: ciclos que se repiten",
        "body": [
          "Cada celebración cumple una función distinta en el calendario emocional de una comunidad. La Nochevieja española, con sus doce uvas -- una por cada campanada del reloj, para atraer suerte en los doce meses siguientes --, marca un cierre y una promesa. El carnaval, con sus disfraces y su permiso temporal para invertir las jerarquías sociales, ofrece una válvula de escape antes de la disciplina de la Cuaresma. Las fiestas patronales de cada pueblo, en cambio, refuerzan la identidad local frente al resto del país.",
          "Estas tres lógicas -- cierre de ciclo, inversión temporal del orden y afirmación de identidad local -- se repiten, con variaciones, en casi cualquier fiesta del calendario hispano. Reconocerlas ayuda a entender celebraciones nuevas incluso sin conocer su historia particular."
        ],
        "examples": [
          {
            "es": "las doce uvas",
            "en": "la tradición española de comer una uva por cada campanada de fin de año"
          },
          {
            "es": "disfrazarse",
            "en": "vestirse con un traje que oculta o transforma la identidad, típico del carnaval"
          },
          {
            "es": "el santo patrón",
            "en": "la figura religiosa que protege simbólicamente a un pueblo o ciudad"
          },
          {
            "es": "echar la casa por la ventana",
            "en": "gastar sin límite para celebrar algo por todo lo alto"
          }
        ],
        "checkpoint": [
          {
            "type": "multi-select",
            "question": "¿Cuáles de las siguientes expresiones están directamente relacionadas con celebrar algo con gran generosidad o exceso?",
            "options": [
              "echar la casa por la ventana",
              "ponerse las botas",
              "la procesión va por dentro",
              "guardar la compostura"
            ],
            "correctIndexes": [
              0,
              1
            ],
            "explanation": "Echar la casa por la ventana y ponerse las botas describen ambas un exceso festivo -- gastar sin límite y comer o disfrutar en abundancia. Las otras dos expresiones no tienen relación con la generosidad festiva."
          }
        ]
      },
      {
        "heading": "En la práctica",
        "body": [
          "Renata: ¿Ya tienes planes para el 31?",
          "Iker: Sí, vamos a casa de mis suegros. Mi suegra siempre echa la casa por la ventana esa noche.",
          "Renata: Qué envidia. Nosotros vamos a quedarnos tranquilos, aunque no me voy a perder las doce uvas por nada del mundo.",
          "Iker: Jaja, entiendo. Por cierto, ¿al final fuiste a la procesión del Jueves Santo?",
          "Renata: Fui, pero como espectadora nada más. Mi tía sí participó, y te juro que a ella la procesión le va por dentro: parece tranquila pero se emociona muchísimo cada año.",
          "Iker: Se nota que para tu familia es algo muy serio.",
          "Renata: Totalmente. Y ya en marzo nos vamos de fiestas patronales al pueblo de mi abuelo -- esa sí que es una semana entera de ponerse las botas."
        ]
      },
      {
        "heading": "Vocabulario: fiestas y tradiciones",
        "body": [
          "Un banco de palabras y expresiones frecuentes al hablar de celebraciones y tradiciones en el mundo hispano, útil para describir tanto el ritual en sí como el ambiente que genera."
        ],
        "examples": [
          {
            "es": "la ofrenda",
            "en": "altar dedicado a un difunto con objetos y comida en su honor"
          },
          {
            "es": "el pan de muerto",
            "en": "pan dulce tradicional del Día de los Muertos"
          },
          {
            "es": "una calavera literaria",
            "en": "poema satírico sobre la muerte imaginaria de alguien vivo"
          },
          {
            "es": "el paso",
            "en": "plataforma con imagen religiosa que se procesiona en Semana Santa"
          },
          {
            "es": "la procesión va por dentro",
            "en": "sufrir o preocuparse sin mostrarlo exteriormente"
          },
          {
            "es": "las doce uvas",
            "en": "tradición de fin de año, una uva por campanada"
          },
          {
            "es": "disfrazarse",
            "en": "vestirse con un traje que oculta o transforma la identidad"
          },
          {
            "es": "el santo patrón",
            "en": "figura religiosa protectora de un pueblo"
          },
          {
            "es": "echar la casa por la ventana",
            "en": "gastar sin límite para celebrar algo por todo lo alto"
          },
          {
            "es": "ponerse las botas",
            "en": "comer o disfrutar de algo en abundancia"
          },
          {
            "es": "estar de fiesta",
            "en": "estar de celebración, con ánimo festivo"
          },
          {
            "es": "armar la fiesta",
            "en": "animar una celebración o, a veces, un alboroto"
          },
          {
            "es": "las fiestas patronales",
            "en": "celebraciones anuales en honor al santo protector de un pueblo"
          },
          {
            "es": "velar a alguien",
            "en": "acompañar el cuerpo o la memoria de un difunto durante la noche"
          },
          {
            "es": "guardar la compostura",
            "en": "mantener un comportamiento serio y controlado"
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "¿Qué elemento del Día de los Muertos refleja mejor la idea de que la muerte se recibe con humor en lugar de miedo?",
        "options": [
          "la calavera literaria",
          "el paso",
          "las doce uvas",
          "el santo patrón"
        ],
        "correctIndex": 0,
        "explanation": "La calavera literaria es un poema satírico que imagina en broma la muerte de alguien vivo, y encarna la actitud de humor frente a la muerte típica de esta celebración."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la expresión que describe gastar sin límite para celebrar algo por todo lo alto.",
        "sentence": "Para la graduación de su hija, decidieron ___ y alquilaron un salón enorme.",
        "answer": "echar la casa por la ventana",
        "explanation": "Echar la casa por la ventana significa gastar sin límite para celebrar algo con generosidad, tal como describe la situación de alquilar un salón enorme."
      },
      {
        "type": "multi-select",
        "question": "¿Cuáles de las siguientes celebraciones están asociadas principalmente con honrar a los difuntos o con la fe religiosa, más que con el cierre de un ciclo anual?",
        "options": [
          "el Día de los Muertos",
          "la Semana Santa",
          "la Nochevieja",
          "el carnaval"
        ],
        "correctIndexes": [
          0,
          1
        ],
        "explanation": "El Día de los Muertos honra a los difuntos y la Semana Santa conmemora un ciclo religioso; la Nochevieja y el carnaval están más asociados al cierre de año y a la inversión temporal del orden social."
      },
      {
        "type": "matching",
        "instructions": "Relaciona cada expresión con su significado.",
        "pairs": [
          {
            "left": "ponerse las botas",
            "right": "comer o disfrutar de algo en abundancia"
          },
          {
            "left": "la procesión va por dentro",
            "right": "sufrir o preocuparse sin mostrarlo"
          },
          {
            "left": "el santo patrón",
            "right": "figura religiosa protectora de un pueblo"
          },
          {
            "left": "disfrazarse",
            "right": "vestirse con un traje que oculta la identidad"
          }
        ],
        "explanation": "Cada expresión conserva un significado fijo ligado a su origen festivo, aunque hoy se use también fuera del contexto de la celebración original."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras para formar la frase correcta.",
        "words": [
          "mi",
          "abuela",
          "siempre",
          "echa",
          "la",
          "casa",
          "por",
          "la",
          "ventana"
        ],
        "translation": "My grandmother always spares no expense.",
        "explanation": "El orden correcto es «mi abuela siempre echa la casa por la ventana», que expresa gastar sin límite para celebrar algo con generosidad."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Traduce la frase al español usando una expresión coloquial de la lección.",
        "source": "He seemed calm, but he was suffering inside.",
        "answer": "Parecía tranquilo, pero la procesión le iba por dentro.",
        "altAnswers": [
          "Se le veía tranquilo, pero por dentro la procesión le iba",
          "Estaba tranquilo por fuera, pero la procesión le iba por dentro"
        ],
        "explanation": "La procesión va por dentro describe exactamente la idea de sufrir o preocuparse sin mostrarlo exteriormente."
      }
    ]
  },
  {
    "slug": "food-culture-sobremesa",
    "level": "C1/C2",
    "number": 2,
    "title": "La Sobremesa y la Cultura de la Comida",
    "summary": "La comida en el mundo hispano es tanto un ritual social como un idioma propio: explora la sobremesa, los horarios, las normas tácitas de la mesa y las expresiones coloquiales que nacen de comer en compañía.",
    "duration": "20 min",
    "sections": [
      {
        "heading": "La sobremesa: cuando la comida termina pero la mesa no se levanta",
        "body": [
          "En gran parte del mundo hispano, comer no termina cuando se acaba el plato: empieza entonces la sobremesa, el tiempo que se queda la gente charlando en la mesa, a veces durante más tiempo del que duró la comida misma. No tiene equivalente exacto en otros idiomas porque no describe solo un momento, sino una prioridad cultural: la conversación importa más que la eficiencia.",
          "Quien viene de una cultura donde se abandona la mesa apenas se termina de comer puede interpretar la sobremesa como pereza o falta de organización. En realidad, es una institución social con sus propias normas: se habla de todo, se sirve café o una copa, y levantarse demasiado pronto puede leerse como descortesía, no como eficiencia."
        ],
        "examples": [
          {
            "es": "hacer sobremesa",
            "en": "quedarse conversando en la mesa después de terminar de comer"
          },
          {
            "es": "alargar la sobremesa",
            "en": "extender ese tiempo de conversación más de lo habitual"
          },
          {
            "es": "levantarse de la mesa",
            "en": "terminar la comida y abandonar el lugar donde se comió"
          },
          {
            "es": "quedarse de sobremesa",
            "en": "permanecer sentado charlando después de comer"
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "Después de comer, la familia se quedó dos horas más charlando y tomando café sin moverse de la mesa. ¿Qué palabra describe ese momento?",
            "options": [
              "la sobremesa",
              "levantarse de la mesa",
              "el santo patrón",
              "el paso"
            ],
            "correctIndex": 0,
            "explanation": "La sobremesa describe precisamente ese tiempo de conversación que sigue a la comida, sin prisa por abandonar la mesa."
          }
        ]
      },
      {
        "heading": "Horarios que rompen las expectativas",
        "body": [
          "En España, comer a las dos de la tarde y cenar a las nueve o diez de la noche no es excepcional, sino la norma. Ese desfase horario, tan distinto al de buena parte de Europa o de Estados Unidos, organiza también el ocio: el aperitivo antes de comer, la siesta después y una vida nocturna que empieza cuando en otros países ya se apagan las luces.",
          "En Latinoamérica los horarios varían más según el país, pero la comida principal del mediodía -- el almuerzo -- suele conservar un peso simbólico que la cena no tiene: es la comida que reúne a la familia entre semana, mientras que la cena, más ligera, muchas veces se resuelve rápido o incluso se omite."
        ],
        "examples": [
          {
            "es": "el aperitivo",
            "en": "una bebida o tapa ligera que se toma antes de la comida principal"
          },
          {
            "es": "picar algo",
            "en": "comer una pequeña cantidad de algo, generalmente entre comidas"
          },
          {
            "es": "la hora del almuerzo",
            "en": "el momento del día dedicado a la comida principal del mediodía"
          },
          {
            "es": "irse de tapas",
            "en": "salir a comer pequeñas raciones de comida en distintos bares, típico de España"
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa la expresión que describe salir a comer pequeñas raciones en varios bares.",
            "sentence": "El sábado por la noche nos fuimos ___ por el centro con unos amigos.",
            "answer": "de tapas",
            "hint": "Es una costumbre muy española de recorrer bares comiendo porciones pequeñas.",
            "explanation": "Irse de tapas describe la costumbre de recorrer distintos bares comiendo pequeñas raciones, muy propia de la vida social española."
          }
        ]
      },
      {
        "heading": "Normas tácitas de la mesa",
        "body": [
          "La mesa hispana tiene reglas que rara vez se enuncian en voz alta, pero que todo el mundo conoce: no empezar a comer antes que el anfitrión lo indique, servir generosamente a los invitados aunque ellos protesten educadamente, y ofrecer repetir plato como muestra de hospitalidad, incluso si el invitado ya está satisfecho.",
          "Rechazar comida puede interpretarse, en muchos contextos, como un desaire hacia quien cocinó, así que existe todo un repertorio de fórmulas para declinar con cortesía sin ofender: elogiar la comida antes de decir que no se puede más, o prometer llevarse las sobras para después."
        ],
        "examples": [
          {
            "es": "estar que revienta",
            "en": "haber comido tanto que ya no cabe nada más"
          },
          {
            "es": "no caber ni un alfiler",
            "en": "estar completamente lleno, sin espacio para nada más"
          },
          {
            "es": "repetir",
            "en": "servirse una segunda vez de un plato"
          },
          {
            "es": "llevarse las sobras",
            "en": "guardar la comida que sobró para comerla después"
          }
        ],
        "checkpoint": [
          {
            "type": "multi-select",
            "question": "¿Cuáles de las siguientes expresiones significan estar completamente lleno después de comer?",
            "options": [
              "estar que revienta",
              "no caber ni un alfiler",
              "hacer sobremesa",
              "llevarse las sobras"
            ],
            "correctIndexes": [
              0,
              1
            ],
            "explanation": "Estar que revienta y no caber ni un alfiler describen ambas el estar completamente lleno; las otras dos expresiones se refieren a la conversación tras la comida y a guardar lo sobrante."
          }
        ]
      },
      {
        "heading": "La comida como metáfora de la vida diaria",
        "body": [
          "El vocabulario de la cocina y la mesa se filtra constantemente al lenguaje cotidiano para describir situaciones que no tienen nada que ver con comer. Una persona puede ser \"pan comido\" (fácil) o estar \"como agua para chocolate\" (a punto de estallar de rabia o pasión); un problema puede \"cocerse a fuego lento\" (desarrollarse gradualmente) antes de estallar.",
          "Reconocer estas metáforas culinarias no solo enriquece el vocabulario: revela cuánto peso cultural tiene la comida como referencia compartida, capaz de explicar emociones, ritmos y situaciones sociales que de otro modo requerirían explicaciones mucho más largas."
        ],
        "examples": [
          {
            "es": "ser pan comido",
            "en": "ser algo muy fácil de hacer o conseguir"
          },
          {
            "es": "estar como agua para chocolate",
            "en": "estar a punto de estallar de rabia, pasión o emoción intensa"
          },
          {
            "es": "cocerse a fuego lento",
            "en": "desarrollarse un problema o situación de forma gradual antes de estallar"
          },
          {
            "es": "no tener ni media naranja",
            "en": "no tener pareja sentimental"
          }
        ],
        "checkpoint": [
          {
            "type": "word-order",
            "prompt": "Ordena las palabras para formar la frase correcta.",
            "words": [
              "este",
              "examen",
              "va",
              "a",
              "ser",
              "pan",
              "comido"
            ],
            "explanation": "El orden correcto es «este examen va a ser pan comido», usando la expresión que significa que algo será muy fácil."
          }
        ]
      },
      {
        "heading": "En la práctica",
        "body": [
          "Camila: ¿Ya te vas? Pero si acabamos de terminar de comer.",
          "Bruno: Es que mañana madrugo, pero la verdad es que me da pena, con lo bien que se está de sobremesa aquí.",
          "Camila: Quédate un rato más, aunque sea a tomar un café. No te vamos a dejar levantarte de la mesa tan rápido.",
          "Bruno: Está bien, me convenciste. Además, todavía no he repetido postre.",
          "Camila: Jaja, sírvete lo que quieras, hay de sobra. Y llévate lo que no comas, no vamos a tirarlo.",
          "Bruno: Gracias, la verdad es que estoy que reviento, pero por probar el postre no se pierde nada.",
          "Camila: Así me gusta. El domingo que viene nos vamos de tapas todos juntos, ¿te apuntas?",
          "Bruno: Cuenta conmigo, eso siempre es pan comido de aceptar."
        ]
      },
      {
        "heading": "Vocabulario: comida y sobremesa",
        "body": [
          "Un banco de palabras y expresiones frecuentes relacionadas con la comida, la mesa y sus rituales sociales en el mundo hispano."
        ],
        "examples": [
          {
            "es": "hacer sobremesa",
            "en": "quedarse conversando en la mesa después de comer"
          },
          {
            "es": "alargar la sobremesa",
            "en": "extender ese tiempo de conversación"
          },
          {
            "es": "levantarse de la mesa",
            "en": "terminar la comida y abandonar el lugar"
          },
          {
            "es": "el aperitivo",
            "en": "bebida o tapa ligera antes de la comida principal"
          },
          {
            "es": "picar algo",
            "en": "comer una pequeña cantidad entre comidas"
          },
          {
            "es": "irse de tapas",
            "en": "salir a comer raciones pequeñas en varios bares"
          },
          {
            "es": "estar que revienta",
            "en": "haber comido tanto que ya no cabe nada más"
          },
          {
            "es": "no caber ni un alfiler",
            "en": "estar completamente lleno"
          },
          {
            "es": "repetir",
            "en": "servirse una segunda vez de un plato"
          },
          {
            "es": "llevarse las sobras",
            "en": "guardar la comida sobrante para después"
          },
          {
            "es": "ser pan comido",
            "en": "ser algo muy fácil"
          },
          {
            "es": "estar como agua para chocolate",
            "en": "estar a punto de estallar de rabia o pasión"
          },
          {
            "es": "cocerse a fuego lento",
            "en": "desarrollarse algo gradualmente antes de estallar"
          },
          {
            "es": "no tener ni media naranja",
            "en": "no tener pareja sentimental"
          },
          {
            "es": "quedarse de sobremesa",
            "en": "permanecer sentado charlando después de comer"
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "Un amigo lleva semanas callado sobre un problema que, de repente, explota en una discusión enorme. ¿Qué expresión describe mejor ese proceso?",
        "options": [
          "cocerse a fuego lento",
          "ser pan comido",
          "hacer sobremesa",
          "no caber ni un alfiler"
        ],
        "correctIndex": 0,
        "explanation": "Cocerse a fuego lento describe un problema que se desarrolla gradualmente antes de estallar, justo como el conflicto que llevaba semanas gestándose."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la expresión que describe estar completamente lleno después de comer.",
        "sentence": "No puedo comer ni un bocado más, estoy que ___.",
        "answer": "revienta",
        "explanation": "Estar que revienta describe haber comido tanto que ya no cabe nada más, encajando con la situación de no poder comer un bocado más."
      },
      {
        "type": "multi-select",
        "question": "¿Cuáles de las siguientes expresiones están relacionadas con el tiempo que se pasa en la mesa después de comer?",
        "options": [
          "hacer sobremesa",
          "alargar la sobremesa",
          "irse de tapas",
          "picar algo"
        ],
        "correctIndexes": [
          0,
          1
        ],
        "explanation": "Hacer sobremesa y alargar la sobremesa se refieren ambas al tiempo de conversación después de comer; irse de tapas y picar algo describen otras formas distintas de comer."
      },
      {
        "type": "matching",
        "instructions": "Relaciona cada expresión con su significado.",
        "pairs": [
          {
            "left": "ser pan comido",
            "right": "ser algo muy fácil de hacer"
          },
          {
            "left": "no tener ni media naranja",
            "right": "no tener pareja sentimental"
          },
          {
            "left": "el aperitivo",
            "right": "bebida o tapa ligera antes de comer"
          },
          {
            "left": "llevarse las sobras",
            "right": "guardar la comida que sobró"
          }
        ],
        "explanation": "Cada expresión conserva un significado propio, muchas veces alejado del sentido literal de sus palabras relacionadas con la comida."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Traduce la frase al español usando una expresión coloquial de la lección.",
        "source": "We stayed at the table talking for another two hours.",
        "answer": "Nos quedamos de sobremesa charlando dos horas más.",
        "altAnswers": [
          "Hicimos sobremesa charlando dos horas más",
          "Alargamos la sobremesa charlando dos horas más"
        ],
        "explanation": "Quedarse de sobremesa o hacer sobremesa describe exactamente permanecer en la mesa conversando después de comer."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras para formar la frase correcta.",
        "words": [
          "el",
          "domingo",
          "nos",
          "fuimos",
          "de",
          "tapas",
          "por",
          "el",
          "centro"
        ],
        "translation": "On Sunday we went out for tapas around downtown.",
        "explanation": "El orden correcto es «el domingo nos fuimos de tapas por el centro», usando la expresión que describe salir a comer raciones pequeñas en varios bares."
      }
    ]
  },
  {
    "slug": "soccer-popular-passion",
    "level": "C1/C2",
    "number": 3,
    "title": "Fútbol y Pasión Popular: El Lenguaje del Deporte",
    "summary": "El fútbol desborda el estadio y se instala en el lenguaje cotidiano del mundo hispano: descubre cómo sus metáforas explican política, trabajo y vida social, mucho más allá del marcador.",
    "duration": "19 min",
    "sections": [
      {
        "heading": "Un idioma que se juega en el campo y se habla en la calle",
        "body": [
          "En el mundo hispano, el fútbol no es solo el deporte más visto: es una fuente inagotable de metáforas que estructuran conversaciones sobre política, trabajo, relaciones y casi cualquier situación con ganadores y perdedores. Un comentarista político puede describir una negociación como \"un partido a punto de irse a penales\", y todo el mundo entiende la tensión que implica sin necesidad de más explicación.",
          "Esta fusión entre deporte y lenguaje cotidiano no es casual: el fútbol ofrece un vocabulario compartido por generaciones y clases sociales distintas, algo poco frecuente en otros ámbitos culturales. Dominar sus expresiones abre la puerta a entender chistes, titulares de prensa y conversaciones informales que, de otro modo, resultarían opacas."
        ],
        "examples": [
          {
            "es": "meter un gol",
            "en": "conseguir algo con gran éxito, a veces de forma inesperada"
          },
          {
            "es": "quedarse en el banquillo",
            "en": "quedar relegado o sin participación en algo importante"
          },
          {
            "es": "jugar en otra liga",
            "en": "tener un nivel muy superior al de los demás en algún ámbito"
          },
          {
            "es": "pasar la pelota",
            "en": "transferir a otro una responsabilidad o decisión difícil"
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "El jefe le pidió a su asistente que tomara la decisión difícil en su lugar. ¿Qué expresión futbolística describe mejor esa acción?",
            "options": [
              "pasar la pelota",
              "meter un gol",
              "jugar en otra liga",
              "quedarse en el banquillo"
            ],
            "correctIndex": 0,
            "explanation": "Pasar la pelota describe transferir a otro una responsabilidad o decisión difícil, exactamente lo que hizo el jefe al delegar la decisión en su asistente."
          }
        ]
      },
      {
        "heading": "El barrio, la hinchada y la identidad",
        "body": [
          "Un equipo de fútbol rara vez es solo un club deportivo: suele condensar identidad de barrio, clase social o incluso postura política, como en los clásicos que enfrentan a equipos históricamente asociados con distintos sectores de una misma ciudad. Ser hincha no es una preferencia neutral, sino una pertenencia que se hereda casi como el apellido.",
          "La hinchada -- el conjunto de aficionados que sigue a un equipo con devoción -- desarrolla sus propios rituales: cánticos, banderas, una jerga particular para insultar amistosamente al rival. Entender este vocabulario ayuda a leer no solo un partido, sino una parte importante del tejido social de cada país."
        ],
        "examples": [
          {
            "es": "la hinchada",
            "en": "el conjunto de aficionados que sigue con devoción a un equipo"
          },
          {
            "es": "el clásico",
            "en": "el partido entre los dos equipos más importantes o rivales de una liga"
          },
          {
            "es": "ser hincha de",
            "en": "apoyar con devoción a un equipo determinado"
          },
          {
            "es": "picarse con alguien",
            "en": "entrar en una rivalidad o competencia amistosa con alguien"
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa la palabra que designa el partido entre los dos equipos más importantes de una liga.",
            "sentence": "Este domingo se juega ___ entre los dos equipos más grandes de la ciudad.",
            "answer": "el clásico",
            "hint": "Es el enfrentamiento más esperado del calendario, entre los rivales históricos.",
            "explanation": "El clásico designa el partido entre los dos equipos más importantes o rivales de una liga, el enfrentamiento más esperado del calendario."
          }
        ]
      },
      {
        "heading": "Del comentarista al político: metáforas prestadas",
        "body": [
          "Los periodistas deportivos han desarrollado un registro propio, lleno de imágenes dramáticas -- \"un partido de infarto\", \"jugarse todo a una carta\", \"remontar el marcador\" -- que después migra hacia otros ámbitos. Un político puede \"remontar\" en las encuestas, un estudiante puede \"jugarse todo\" en un examen final, y una empresa puede vivir \"un cierre de año de infarto\".",
          "Esta circulación constante entre el lenguaje deportivo y el resto de la vida pública demuestra que el fútbol no compite con otros ámbitos culturales: los alimenta. Reconocer el origen deportivo de una expresión, aunque se use fuera del campo, ayuda a captar toda la intensidad emocional que conlleva."
        ],
        "examples": [
          {
            "es": "remontar",
            "en": "revertir una situación desfavorable hasta lograr el resultado contrario"
          },
          {
            "es": "jugarse todo a una carta",
            "en": "arriesgarlo todo en una sola decisión o intento"
          },
          {
            "es": "un partido de infarto",
            "en": "una situación de tensión extrema, con final incierto hasta el último momento"
          },
          {
            "es": "estar en fuera de juego",
            "en": "actuar sin darse cuenta de que la situación ya cambió, quedando desubicado"
          }
        ],
        "checkpoint": [
          {
            "type": "multi-select",
            "question": "¿Cuáles de las siguientes expresiones describen una situación de tensión o riesgo extremo?",
            "options": [
              "un partido de infarto",
              "jugarse todo a una carta",
              "la hinchada",
              "ser hincha de"
            ],
            "correctIndexes": [
              0,
              1
            ],
            "explanation": "Un partido de infarto y jugarse todo a una carta describen ambas situaciones de tensión o riesgo extremo; la hinchada y ser hincha de se refieren a la identidad y el apoyo a un equipo, no al riesgo."
          }
        ]
      },
      {
        "heading": "En la práctica",
        "body": [
          "Gonzalo: ¿Viste el partido de anoche? Estuvieron perdiendo dos a cero y remontaron en el segundo tiempo.",
          "Valentina: No lo vi, pero me contaron que fue un partido de infarto hasta el último minuto.",
          "Gonzalo: Totalmente. El entrenador se jugó todo a una carta metiendo a los delanteros suplentes, y le salió perfecto.",
          "Valentina: Qué envidia, yo hubiera dado cualquier cosa por estar en el estadio con la hinchada.",
          "Gonzalo: Se armó una fiesta impresionante. Por cierto, ¿sigues siendo hincha del mismo equipo de siempre?",
          "Valentina: Claro, eso no se cambia. Aunque este año, con lo mal que empezaron, pensé que se iban a quedar todo el torneo en el banquillo.",
          "Gonzalo: Bueno, parece que ahora están jugando en otra liga comparados con hace dos meses.",
          "Valentina: Ojalá dure. El próximo fin de semana es el clásico y no me lo quiero perder por nada del mundo."
        ]
      },
      {
        "heading": "Vocabulario: fútbol y lenguaje cotidiano",
        "body": [
          "Un banco de expresiones frecuentes nacidas del fútbol que hoy se usan también fuera del campo de juego."
        ],
        "examples": [
          {
            "es": "meter un gol",
            "en": "conseguir algo con gran éxito"
          },
          {
            "es": "quedarse en el banquillo",
            "en": "quedar relegado o sin participación"
          },
          {
            "es": "jugar en otra liga",
            "en": "tener un nivel muy superior a los demás"
          },
          {
            "es": "pasar la pelota",
            "en": "transferir a otro una responsabilidad"
          },
          {
            "es": "la hinchada",
            "en": "conjunto de aficionados devotos de un equipo"
          },
          {
            "es": "el clásico",
            "en": "partido entre los dos equipos más importantes de una liga"
          },
          {
            "es": "ser hincha de",
            "en": "apoyar con devoción a un equipo"
          },
          {
            "es": "picarse con alguien",
            "en": "entrar en rivalidad amistosa con alguien"
          },
          {
            "es": "remontar",
            "en": "revertir una situación desfavorable"
          },
          {
            "es": "jugarse todo a una carta",
            "en": "arriesgarlo todo en una sola decisión"
          },
          {
            "es": "un partido de infarto",
            "en": "situación de tensión extrema con final incierto"
          },
          {
            "es": "estar en fuera de juego",
            "en": "actuar sin darse cuenta de que la situación cambió"
          },
          {
            "es": "armarse una fiesta",
            "en": "generarse un ambiente de celebración intensa"
          },
          {
            "es": "el delantero suplente",
            "en": "jugador ofensivo que entra al partido desde el banco"
          },
          {
            "es": "el marcador",
            "en": "el resultado numérico de un partido en curso"
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "Una empresa estaba a punto de quebrar, pero cambió de estrategia y terminó el año con ganancias récord. ¿Qué expresión futbolística describe mejor ese cambio?",
        "options": [
          "remontar",
          "quedarse en el banquillo",
          "pasar la pelota",
          "picarse con alguien"
        ],
        "correctIndex": 0,
        "explanation": "Remontar describe revertir una situación desfavorable hasta lograr el resultado contrario, exactamente lo que hizo la empresa al pasar de estar en quiebra a ganancias récord."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la expresión que describe tener un nivel muy superior al de los demás.",
        "sentence": "Después de tanto entrenar, ahora juega ___ comparado con sus compañeros de equipo.",
        "answer": "en otra liga",
        "explanation": "Jugar en otra liga significa tener un nivel muy superior a los demás en algún ámbito, encajando con la mejora notable del jugador."
      },
      {
        "type": "multi-select",
        "question": "¿Cuáles de las siguientes expresiones están relacionadas con la identidad y el apoyo hacia un equipo, más que con el desarrollo del juego en sí?",
        "options": [
          "la hinchada",
          "ser hincha de",
          "remontar",
          "un partido de infarto"
        ],
        "correctIndexes": [
          0,
          1
        ],
        "explanation": "La hinchada y ser hincha de se refieren a la identidad y devoción hacia un equipo; remontar y un partido de infarto describen el desarrollo o la tensión del juego mismo."
      },
      {
        "type": "matching",
        "instructions": "Relaciona cada expresión con su significado.",
        "pairs": [
          {
            "left": "pasar la pelota",
            "right": "transferir a otro una responsabilidad difícil"
          },
          {
            "left": "jugarse todo a una carta",
            "right": "arriesgarlo todo en una sola decisión"
          },
          {
            "left": "el clásico",
            "right": "partido entre los dos equipos más importantes"
          },
          {
            "left": "estar en fuera de juego",
            "right": "actuar sin notar que la situación cambió"
          }
        ],
        "explanation": "Cada expresión conserva su origen futbolístico aunque hoy se use ampliamente fuera del campo de juego."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras para formar la frase correcta.",
        "words": [
          "el",
          "entrenador",
          "se",
          "jugó",
          "todo",
          "a",
          "una",
          "carta"
        ],
        "translation": "The coach risked everything on one decision.",
        "explanation": "El orden correcto es «el entrenador se jugó todo a una carta», usando la expresión que significa arriesgarlo todo en una sola decisión."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Traduce la frase al español usando una expresión coloquial de la lección.",
        "source": "He always passes the tough decisions on to someone else.",
        "answer": "Siempre le pasa la pelota a otro con las decisiones difíciles.",
        "altAnswers": [
          "Siempre pasa la pelota a otro en las decisiones difíciles"
        ],
        "explanation": "Pasar la pelota describe transferir a otro una responsabilidad o decisión difícil, tal como expresa la frase original."
      }
    ]
  },
  {
    "slug": "music-dance-regional-identity",
    "level": "C1/C2",
    "number": 4,
    "title": "Música, Baile e Identidad Regional",
    "summary": "Del tango al reguetón, cada ritmo del mundo hispano cuenta la historia de la región que lo creó. Explora esos géneros, su vocabulario y las expresiones coloquiales que han pasado del baile al habla cotidiana.",
    "duration": "20 min",
    "sections": [
      {
        "heading": "Ritmos que son mapas y también son historia",
        "body": [
          "Cada región del mundo hispano tiene un género musical que funciona casi como un documento de identidad: el tango en el Río de la Plata, la salsa en el Caribe, el flamenco en Andalucía, la cumbia en Colombia, el reguetón como fenómeno panhispano más reciente. Estos géneros no son solo entretenimiento: condensan historias de migración, mestizaje y resistencia cultural.",
          "Entender esta relación entre música y territorio ayuda a leer mejor conversaciones cotidianas, porque los hispanohablantes suelen dar por hecho ciertas asociaciones -- que el tango es melancólico, que la cumbia es festiva, que el flamenco exige cierta solemnidad -- sin necesidad de explicarlas."
        ],
        "examples": [
          {
            "es": "el compás",
            "en": "el ritmo o patrón rítmico que estructura una pieza musical"
          },
          {
            "es": "tener sabor",
            "en": "tener una gracia o estilo particular al bailar o interpretar música"
          },
          {
            "es": "bailar pegado",
            "en": "bailar muy cerca de la pareja, típico de géneros como la salsa o el bolero"
          },
          {
            "es": "no tener oído",
            "en": "carecer de habilidad para percibir o reproducir el ritmo o la melodía"
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "Un bailarín se mueve con una gracia natural que hace que todos lo miren en la pista. ¿Qué expresión describe mejor esa cualidad?",
            "options": [
              "tener sabor",
              "no tener oído",
              "bailar pegado",
              "el compás"
            ],
            "correctIndex": 0,
            "explanation": "Tener sabor describe tener una gracia o estilo particular al bailar o interpretar música, exactamente la cualidad que hace destacar al bailarín."
          }
        ]
      },
      {
        "heading": "El tango: melancolía, orgullo y lunfardo",
        "body": [
          "Nacido en los arrabales de Buenos Aires y Montevideo a finales del siglo XIX, el tango mezcla nostalgia, orgullo herido y una filosofía casi trágica sobre el amor y el destino. Su letra tradicional emplea el lunfardo, un argot rioplatense nacido de la inmigración, que ha dejado palabras que hoy forman parte del habla cotidiana argentina y uruguaya mucho más allá del tango.",
          "Frases como \"cortar por lo sano\" o el propio verbo \"tanguear\" (comportarse con la teatralidad melodramática típica del género) muestran cómo un estilo musical puede colonizar el lenguaje ordinario. Escuchar tango sin conocer algo de lunfardo es perderse buena parte de su significado real."
        ],
        "examples": [
          {
            "es": "el lunfardo",
            "en": "argot popular rioplatense, históricamente asociado al tango"
          },
          {
            "es": "el arrabal",
            "en": "barrio periférico y humilde, cuna histórica del tango"
          },
          {
            "es": "tanguear",
            "en": "comportarse con la teatralidad melodramática típica del tango"
          },
          {
            "es": "el bandoneón",
            "en": "instrumento de fuelle característico de la orquesta de tango"
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa la palabra que designa el argot popular rioplatense asociado históricamente al tango.",
            "sentence": "Muchas de las palabras que usan hoy los porteños vienen de ___, el argot que nació con el tango.",
            "answer": "el lunfardo",
            "hint": "Es un argot popular nacido de la inmigración en Buenos Aires y Montevideo.",
            "explanation": "El lunfardo es el argot popular rioplatense nacido de la inmigración, históricamente asociado al tango y muy presente en sus letras."
          }
        ]
      },
      {
        "heading": "Salsa, cumbia y reguetón: del Caribe al mundo",
        "body": [
          "La salsa, nacida de la fusión de ritmos afrocaribeños en Nueva York y Cuba, se convirtió en lenguaje común de fiesta en toda Latinoamérica. La cumbia, originaria de Colombia, se adaptó tanto en México como en Argentina hasta generar variantes regionales casi irreconocibles entre sí. Más recientemente, el reguetón, surgido en Puerto Rico, rompió fronteras nacionales para convertirse en la banda sonora panhispana de una generación entera.",
          "Estos géneros comparten algo más que el ritmo: cada uno ha generado su propio vocabulario de baile y fiesta que circula libremente entre países, prueba de que la música sigue siendo uno de los puentes culturales más fuertes del mundo hispano."
        ],
        "examples": [
          {
            "es": "el perreo",
            "en": "estilo de baile asociado al reguetón, de movimiento cercano y sensual"
          },
          {
            "es": "prender la fiesta",
            "en": "animar o intensificar el ambiente festivo de una celebración"
          },
          {
            "es": "soltarse el pelo",
            "en": "perder la timidez y disfrutar plenamente, especialmente al bailar"
          },
          {
            "es": "estar pegado",
            "en": "estar de moda o sonar constantemente, hablando de una canción"
          }
        ],
        "checkpoint": [
          {
            "type": "multi-select",
            "question": "¿Cuáles de las siguientes expresiones se usan típicamente para describir el ambiente de una fiesta animada?",
            "options": [
              "prender la fiesta",
              "soltarse el pelo",
              "el lunfardo",
              "el arrabal"
            ],
            "correctIndexes": [
              0,
              1
            ],
            "explanation": "Prender la fiesta y soltarse el pelo describen ambas animar o disfrutar plenamente de una fiesta; el lunfardo y el arrabal están relacionados con el origen histórico del tango, no con el ambiente festivo."
          }
        ]
      },
      {
        "heading": "En la práctica",
        "body": [
          "Esteban: ¿Vas a ir a la fiesta de cumpleaños de Marisol el sábado?",
          "Yolanda: Claro, dicen que va a contratar un DJ buenísimo, seguro que prende la fiesta desde la primera canción.",
          "Esteban: Espero que ponga algo de salsa, aunque tú siempre terminas bailando reguetón toda la noche.",
          "Yolanda: Jaja, es verdad, en cuanto suena algo que está pegado no me puedo quedar quieta.",
          "Esteban: A mí me cuesta más, la verdad es que no tengo mucho oído para eso, pero con unas copas me suelto el pelo igual.",
          "Yolanda: Eso siempre funciona. ¿Y tu hermano? Él sí que tiene sabor para bailar de todo.",
          "Esteban: Sí, desde chico le encantó el tango, seguramente por mi abuelo, que hablaba puro lunfardo.",
          "Yolanda: Qué lindo, ojalá herede algo de eso el sábado en la pista."
        ]
      },
      {
        "heading": "Vocabulario: música, baile y fiesta",
        "body": [
          "Un banco de palabras y expresiones frecuentes al hablar de música, baile y ambiente festivo en el mundo hispano."
        ],
        "examples": [
          {
            "es": "el compás",
            "en": "ritmo o patrón rítmico de una pieza musical"
          },
          {
            "es": "tener sabor",
            "en": "tener gracia o estilo particular al bailar o interpretar música"
          },
          {
            "es": "bailar pegado",
            "en": "bailar muy cerca de la pareja"
          },
          {
            "es": "no tener oído",
            "en": "carecer de habilidad para percibir el ritmo o la melodía"
          },
          {
            "es": "el lunfardo",
            "en": "argot popular rioplatense asociado al tango"
          },
          {
            "es": "el arrabal",
            "en": "barrio periférico, cuna histórica del tango"
          },
          {
            "es": "tanguear",
            "en": "comportarse con teatralidad melodramática"
          },
          {
            "es": "el bandoneón",
            "en": "instrumento de fuelle de la orquesta de tango"
          },
          {
            "es": "el perreo",
            "en": "estilo de baile asociado al reguetón"
          },
          {
            "es": "prender la fiesta",
            "en": "animar el ambiente festivo de una celebración"
          },
          {
            "es": "soltarse el pelo",
            "en": "perder la timidez y disfrutar plenamente"
          },
          {
            "es": "estar pegado",
            "en": "estar de moda o sonar constantemente, hablando de una canción"
          },
          {
            "es": "la pista de baile",
            "en": "el espacio destinado a bailar en una fiesta"
          },
          {
            "es": "el DJ",
            "en": "la persona encargada de seleccionar y mezclar la música en una fiesta"
          },
          {
            "es": "sonar en todos lados",
            "en": "escucharse una canción con mucha frecuencia en el ambiente actual"
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "En la boda, la banda tocó una canción y todo el mundo se levantó de golpe a bailar con entusiasmo. ¿Qué expresión describe mejor lo que hizo la banda?",
        "options": [
          "prender la fiesta",
          "no tener oído",
          "tanguear",
          "el arrabal"
        ],
        "correctIndex": 0,
        "explanation": "Prender la fiesta significa animar o intensificar el ambiente festivo, exactamente lo que logró la banda al hacer que todos se levantaran a bailar."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la expresión que describe perder la timidez y disfrutar plenamente al bailar.",
        "sentence": "Al principio no quería bailar, pero después de un rato se ___ y no paró en toda la noche.",
        "answer": "soltó el pelo",
        "explanation": "Soltarse el pelo significa perder la timidez y disfrutar plenamente, especialmente al bailar, tal como describe la situación."
      },
      {
        "type": "multi-select",
        "question": "¿Cuáles de las siguientes palabras o expresiones están directamente relacionadas con el origen histórico del tango?",
        "options": [
          "el lunfardo",
          "el arrabal",
          "el perreo",
          "prender la fiesta"
        ],
        "correctIndexes": [
          0,
          1
        ],
        "explanation": "El lunfardo y el arrabal están asociados históricamente al origen del tango en Buenos Aires y Montevideo; el perreo y prender la fiesta están relacionados con otros géneros y con el ambiente festivo en general."
      },
      {
        "type": "matching",
        "instructions": "Relaciona cada expresión con su significado.",
        "pairs": [
          {
            "left": "tener sabor",
            "right": "tener gracia o estilo particular al bailar"
          },
          {
            "left": "estar pegado",
            "right": "estar de moda o sonar constantemente"
          },
          {
            "left": "el bandoneón",
            "right": "instrumento de fuelle de la orquesta de tango"
          },
          {
            "left": "no tener oído",
            "right": "carecer de habilidad para percibir el ritmo"
          }
        ],
        "explanation": "Cada expresión describe una faceta distinta de la relación entre una persona y la música o el baile."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras para formar la frase correcta.",
        "words": [
          "esa",
          "canción",
          "está",
          "pegada",
          "en",
          "todas",
          "las",
          "fiestas"
        ],
        "translation": "That song is all the rage at every party.",
        "explanation": "El orden correcto es «esa canción está pegada en todas las fiestas», usando la expresión que significa estar de moda o sonar constantemente."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Traduce la frase al español usando una expresión coloquial de la lección.",
        "source": "My brother has a real gift for dancing anything.",
        "answer": "Mi hermano tiene sabor para bailar de todo.",
        "altAnswers": [
          "Mi hermano tiene mucho sabor para bailar de todo"
        ],
        "explanation": "Tener sabor describe tener gracia o estilo particular al bailar, exactamente lo que expresa la frase original."
      }
    ]
  },
  {
    "slug": "superstitions-folk-beliefs",
    "level": "C1/C2",
    "number": 5,
    "title": "Supersticiones y Creencias Populares",
    "summary": "Desde tocar madera hasta la mala sombra del martes trece, recorre las supersticiones más extendidas del mundo hispano y las expresiones coloquiales que revelan cuánto siguen vivas en el habla diaria.",
    "duration": "19 min",
    "sections": [
      {
        "heading": "Creer sin creer del todo",
        "body": [
          "La mayoría de los hispanohablantes dirá que no cree en supersticiones y, sin embargo, tocará madera después de decir que algo va bien, evitará pasar bajo una escalera o dudará antes de regalar un cuchillo sin recibir una moneda a cambio. Esta contradicción no es hipocresía: es la manera en que una cultura conserva rituales heredados incluso después de que la creencia original se ha debilitado.",
          "Entender estas costumbres no requiere creer en ellas, pero sí reconocerlas, porque aparecen constantemente en conversaciones informales, chistes y hasta decisiones cotidianas -- como evitar programar una boda o una mudanza en una fecha considerada de mala suerte."
        ],
        "examples": [
          {
            "es": "tocar madera",
            "en": "gesto supersticioso para evitar que algo bueno se malogre"
          },
          {
            "es": "traer mala suerte",
            "en": "provocar, según la creencia popular, una racha de infortunio"
          },
          {
            "es": "tener mano de santo",
            "en": "tener buena suerte o efecto positivo casi milagroso en lo que se hace"
          },
          {
            "es": "ser gafe",
            "en": "atraer mala suerte de forma habitual, según la creencia popular"
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "Después de decir que el proyecto iba muy bien, tu compañero golpea la mesa de madera dos veces sin pensarlo. ¿Qué expresión describe ese gesto?",
            "options": [
              "tocar madera",
              "ser gafe",
              "tener mano de santo",
              "traer mala suerte"
            ],
            "correctIndex": 0,
            "explanation": "Tocar madera es el gesto supersticioso que se hace precisamente para evitar que algo bueno se malogre después de mencionarlo en voz alta."
          }
        ]
      },
      {
        "heading": "Fechas y números que pesan más de lo que deberían",
        "body": [
          "El martes trece concentra en el mundo hispano la mala fama que en otras culturas recae sobre el viernes trece, con el refrán \"martes trece, ni te cases ni te embarques\" advirtiendo contra decisiones importantes ese día. El número trece en general arrastra una reputación ambigua, mientras que otros números, como el siete, se asocian con la buena fortuna en juegos y apuestas.",
          "Estas asociaciones numéricas y de calendario no son uniformes en todo el mundo hispano -- varían entre países y regiones --, pero comparten una lógica común: ciertas fechas concentran un peso simbólico que influye en decisiones tan prácticas como fijar el día de una boda o firmar un contrato importante."
        ],
        "examples": [
          {
            "es": "martes trece",
            "en": "fecha considerada de mala suerte en gran parte del mundo hispano"
          },
          {
            "es": "ni te cases ni te embarques",
            "en": "refrán que advierte contra tomar decisiones importantes un martes trece"
          },
          {
            "es": "estar de racha",
            "en": "atravesar un período sostenido de buena o mala suerte"
          },
          {
            "es": "cambiar la suerte",
            "en": "modificar, mediante un gesto o ritual, el curso de una racha de fortuna"
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa el refrán que advierte contra tomar decisiones importantes un martes trece.",
            "sentence": "Mi abuela siempre dice: martes trece, ___.",
            "answer": "ni te cases ni te embarques",
            "hint": "Es un refrán tradicional que menciona dos decisiones importantes de la vida.",
            "explanation": "Ni te cases ni te embarques es el refrán tradicional que advierte contra tomar decisiones importantes en martes trece, considerado de mala suerte."
          }
        ]
      },
      {
        "heading": "Rituales de protección y buena fortuna",
        "body": [
          "Frente a la mala suerte, existen también rituales concretos para atraer la buena fortuna: llevar la ropa interior de un color específico en año nuevo, guardar una figura religiosa boca abajo hasta que se cumpla un deseo, o colgar un amuleto contra el mal de ojo -- la creencia de que una mirada envidiosa puede causar daño, especialmente a los niños pequeños.",
          "El mal de ojo merece mención especial porque, a diferencia de otras supersticiones más folclóricas, sigue teniendo peso real en la vida cotidiana de muchas familias: no es raro escuchar a alguien explicar el llanto inconsolable de un bebé, o una racha de mala suerte, atribuyéndolo a esta causa."
        ],
        "examples": [
          {
            "es": "el mal de ojo",
            "en": "creencia de que una mirada envidiosa puede causar daño, especialmente a niños"
          },
          {
            "es": "el amuleto",
            "en": "objeto al que se le atribuye poder protector o de buena suerte"
          },
          {
            "es": "pedir un deseo",
            "en": "formular en silencio una petición que se espera se cumpla por un ritual o coincidencia"
          },
          {
            "es": "de buen agüero",
            "en": "que anuncia o promete buena suerte"
          }
        ],
        "checkpoint": [
          {
            "type": "multi-select",
            "question": "¿Cuáles de las siguientes palabras o expresiones están relacionadas con protegerse de la mala suerte o atraer la buena fortuna?",
            "options": [
              "el amuleto",
              "el mal de ojo",
              "martes trece",
              "estar de racha"
            ],
            "correctIndexes": [
              0,
              1
            ],
            "explanation": "El amuleto y el mal de ojo están directamente relacionados con la protección frente a la mala suerte; martes trece y estar de racha describen fechas o períodos de fortuna, pero no objetos o creencias protectoras en sí."
          }
        ]
      },
      {
        "heading": "En la práctica",
        "body": [
          "Nora: Oye, no dejes ese paraguas abierto adentro de la casa, dicen que trae mala suerte.",
          "Pablo: Jaja, no sabía esa. Yo lo único que sé es que no hay que pasar por debajo de una escalera.",
          "Nora: Esa también. Mi abuela cree en todas, hasta tiene un amuleto contra el mal de ojo colgado en la puerta.",
          "Pablo: La mía también, siempre dice que soy medio gafe porque cada vez que planeo algo, algo sale mal.",
          "Nora: Bueno, pues hoy es martes trece, así que mejor no firmes ningún contrato importante.",
          "Pablo: Uy, es verdad, mejor lo dejo para mañana, no vaya a ser que tengas razón.",
          "Nora: Más vale prevenir. Y de paso toca madera, por si las moscas.",
          "Pablo: Ya lo hice dos veces desde que empezamos a hablar de esto."
        ]
      },
      {
        "heading": "Vocabulario: supersticiones y creencias",
        "body": [
          "Un banco de palabras y expresiones frecuentes al hablar de supersticiones y creencias populares en el mundo hispano."
        ],
        "examples": [
          {
            "es": "tocar madera",
            "en": "gesto para evitar que algo bueno se malogre"
          },
          {
            "es": "traer mala suerte",
            "en": "provocar una racha de infortunio"
          },
          {
            "es": "tener mano de santo",
            "en": "tener buena suerte o efecto positivo casi milagroso"
          },
          {
            "es": "ser gafe",
            "en": "atraer mala suerte de forma habitual"
          },
          {
            "es": "martes trece",
            "en": "fecha considerada de mala suerte"
          },
          {
            "es": "ni te cases ni te embarques",
            "en": "refrán contra decisiones importantes en martes trece"
          },
          {
            "es": "estar de racha",
            "en": "atravesar un período sostenido de buena o mala suerte"
          },
          {
            "es": "cambiar la suerte",
            "en": "modificar el curso de una racha de fortuna"
          },
          {
            "es": "el mal de ojo",
            "en": "creencia de que una mirada envidiosa puede causar daño"
          },
          {
            "es": "el amuleto",
            "en": "objeto con poder protector o de buena suerte"
          },
          {
            "es": "pedir un deseo",
            "en": "formular en silencio una petición que se espera se cumpla"
          },
          {
            "es": "de buen agüero",
            "en": "que anuncia o promete buena suerte"
          },
          {
            "es": "por si las moscas",
            "en": "por precaución, ante la posibilidad remota de algo"
          },
          {
            "es": "de mal agüero",
            "en": "que anuncia o presagia mala suerte"
          },
          {
            "es": "cruzar los dedos",
            "en": "gesto que se hace para desear buena suerte en algo incierto"
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "Cada vez que tu primo organiza un viaje, algo sale mal: se cancela el vuelo, pierde el equipaje o se enferma. ¿Qué palabra describe esa reputación?",
        "options": [
          "ser gafe",
          "de buen agüero",
          "tener mano de santo",
          "cruzar los dedos"
        ],
        "correctIndex": 0,
        "explanation": "Ser gafe describe atraer mala suerte de forma habitual, exactamente la reputación que tiene tu primo con sus viajes."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la expresión que se usa como precaución ante una posibilidad remota de mala suerte.",
        "sentence": "No creo que llueva, pero llevo el paraguas ___.",
        "answer": "por si las moscas",
        "explanation": "Por si las moscas significa por precaución, ante la posibilidad remota de algo, encajando con llevar el paraguas sin estar seguro de que va a llover."
      },
      {
        "type": "multi-select",
        "question": "¿Cuáles de las siguientes expresiones están relacionadas con desear o esperar buena suerte?",
        "options": [
          "cruzar los dedos",
          "de buen agüero",
          "ser gafe",
          "de mal agüero"
        ],
        "correctIndexes": [
          0,
          1
        ],
        "explanation": "Cruzar los dedos y de buen agüero están asociadas a desear o esperar buena suerte; ser gafe y de mal agüero se refieren, en cambio, a la mala suerte."
      },
      {
        "type": "matching",
        "instructions": "Relaciona cada expresión con su significado.",
        "pairs": [
          {
            "left": "el mal de ojo",
            "right": "creencia de que una mirada envidiosa puede causar daño"
          },
          {
            "left": "tener mano de santo",
            "right": "tener buena suerte o efecto casi milagroso"
          },
          {
            "left": "estar de racha",
            "right": "atravesar un período sostenido de suerte"
          },
          {
            "left": "el amuleto",
            "right": "objeto con poder protector o de buena suerte"
          }
        ],
        "explanation": "Cada expresión describe una faceta distinta de las creencias populares sobre la suerte y la protección."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras para formar la frase correcta.",
        "words": [
          "hoy",
          "es",
          "martes",
          "trece",
          "así",
          "que",
          "ten",
          "cuidado"
        ],
        "translation": "Today is Friday the 13th, so be careful.",
        "explanation": "El orden correcto es «hoy es martes trece, así que ten cuidado», refiriéndose a la fecha considerada de mala suerte en el mundo hispano."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Traduce la frase al español usando una expresión coloquial de la lección.",
        "source": "Don't say that out loud, you're going to jinx it -- knock on wood.",
        "answer": "No lo digas en voz alta, vas a traer mala suerte -- toca madera.",
        "altAnswers": [
          "No lo digas en voz alta, vas a traer mala suerte, toca madera"
        ],
        "explanation": "Traer mala suerte y tocar madera son las expresiones que corresponden a la idea de gafar algo en voz alta y al gesto tradicional para contrarrestarlo."
      }
    ]
  },
  {
    "slug": "piropos-cortesia-trato-social",
    "level": "C1/C2",
    "number": 6,
    "title": "Piropos, Cortesía y Trato Social",
    "summary": "Explora las normas de cortesía, los piropos y las formas de trato en el mundo hispanohablante: cómo saludar, halagar, pedir favores y comportarse como invitado.",
    "duration": "19 min",
    "sections": [
      {
        "heading": "El arte del piropo",
        "body": [
          "Un piropo es un comentario halagador, tradicionalmente dirigido a alguien por la calle, aunque hoy en día se usa también entre amigos, familiares y parejas de forma mucho más cotidiana y respetuosa.",
          "Los piropos callejeros de antaño (\"¡Qué guapa!\") han caído en desuso o son vistos como una forma de acoso en muchos países; el piropo moderno suele reservarse para el ámbito cercano: cumplidos sinceros entre conocidos.",
          "Frases como \"Estás hecho un pincel\" (te ves muy elegante) o \"Eres un sol\" (eres una persona encantadora) muestran cómo el piropo se apoya en metáforas cotidianas más que en fórmulas fijas.",
          "Saber recibir un piropo también tiene su ritual: un simple \"Qué amable, gracias\" evita la sobreactuación y mantiene la cortesía sin restarle valor al gesto."
        ],
        "examples": [
          {
            "es": "Eres un sol, siempre me ayudas sin que te lo pida.",
            "en": "You're a sweetheart, you always help me without my asking."
          },
          {
            "es": "Qué amable, gracias por el cumplido.",
            "en": "How kind, thanks for the compliment."
          },
          {
            "es": "Está hecha un pincel con ese traje.",
            "en": "She looks sharp/elegant in that suit."
          }
        ]
      },
      {
        "heading": "Formas de trato: tú, usted y algo más",
        "body": [
          "Más allá del conocido contraste tú/usted, cada región matiza el trato con sus propios usos: en España el \"tú\" se extiende hoy incluso a desconocidos jóvenes, mientras que en gran parte de Latinoamérica el \"usted\" se mantiene como señal de respeto hacia mayores, jefes o personas recién conocidas.",
          "En Colombia y Costa Rica es común usar \"usted\" incluso entre amigos cercanos y en pareja, sin que eso implique distancia -- es simplemente el trato por defecto.",
          "Los títulos de cortesía (don, doña, señor, señora) todavía se emplean con personas mayores o de mayor jerarquía, seguidos a veces del nombre de pila: \"don Carlos\", \"doña Marta\".",
          "Pasar de usted a tú --tutear a alguien-- suele ser una decisión explícita: \"¿Nos tuteamos?\" es una pregunta perfectamente normal para proponer mayor confianza."
        ],
        "examples": [
          {
            "es": "¿Nos tuteamos o prefiere que le hable de usted?",
            "en": "Should we use 'tú' or would you prefer I address you formally?"
          },
          {
            "es": "Don Carlos siempre saluda a todo el vecindario.",
            "en": "Don Carlos always greets the whole neighborhood."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "¿Qué expresión se usa para proponer pasar del trato de usted al de tú?",
            "options": [
              "¿Nos tuteamos?",
              "¿Qué guapa?",
              "Está hecho un pincel",
              "Qué amable"
            ],
            "correctIndex": 0,
            "explanation": "\"¿Nos tuteamos?\" es la fórmula típica para proponer un trato más cercano y dejar el usted."
          }
        ]
      },
      {
        "heading": "Ser buen invitado (y buen anfitrión)",
        "body": [
          "La hospitalidad hispana tiene sus propios códigos no escritos. Llegar \"a la hora\" a una cena informal en muchos países de Latinoamérica puede significar llegar 15 o 20 minutos tarde -- llegar puntual a veces se interpreta como demasiado ansioso.",
          "Es habitual llevar algo al ser invitado a una casa: una botella de vino, un postre o simplemente flores. Preguntar \"¿Puedo traer algo?\" es cortesía básica, aunque la respuesta típica sea \"No, no hace falta, solo tú\".",
          "Como anfitrión, insistir varias veces al ofrecer comida o bebida es parte del ritual: un primer \"no, gracias\" del invitado no siempre es definitivo, y un buen anfitrión vuelve a ofrecer.",
          "Rechazar la primera oferta de comida por cortesía y aceptar en la segunda o tercera es un patrón cultural extendido, aunque varía según la confianza entre las personas."
        ],
        "examples": [
          {
            "es": "¿Puedo traer algo para la cena?",
            "en": "Can I bring something for dinner?"
          },
          {
            "es": "No, no hace falta, solo tú.",
            "en": "No, no need, just yourself."
          },
          {
            "es": "Anda, sírvete un poco más, que sobra comida.",
            "en": "Come on, help yourself to a bit more, there's plenty of food."
          }
        ]
      },
      {
        "heading": "Cumplidos y respuestas: el ping-pong de la cortesía",
        "body": [
          "En la cultura hispana, restar importancia a un cumplido propio es más común que aceptarlo sin más: ante \"¡Qué bien cocinas!\", una respuesta típica es \"Ay, no, qué va, cualquiera lo hace\" antes de aceptar el halago.",
          "Sin embargo, insistir demasiado en la modestia puede sonar falso; la fórmula equilibrada suele ser un agradecimiento breve seguido de un comentario que resta protagonismo: \"Gracias, la receta es de mi abuela\".",
          "Los cumplidos sobre el aspecto físico entre conocidos (\"Qué bien te queda ese color\") son comunes y generalmente bien recibidos, pero el contexto y la confianza determinan qué tan directo puede ser el comentario.",
          "Cumplidos hacia terceros ausentes también cumplen una función social: hablar bien de alguien que no está presente refuerza los lazos del grupo y es vista como una virtud de buena educación."
        ],
        "examples": [
          {
            "es": "¡Qué bien cocinas! -- Ay, no, qué va, cualquiera lo hace.",
            "en": "You cook so well! -- Oh, come on, anyone could do it."
          },
          {
            "es": "Gracias, la receta es de mi abuela.",
            "en": "Thanks, the recipe is my grandmother's."
          }
        ]
      },
      {
        "heading": "Pedir favores sin sonar brusco",
        "body": [
          "El condicional y el imperfecto de cortesía suavizan cualquier petición: \"¿Podrías ayudarme?\" o \"Quería pedirte un favor\" suenan mucho más amables que un imperativo directo.",
          "Diminutivos como \"un segundito\", \"un momentico\" o \"una ayudita\" restan peso a la petición y son extremadamente comunes en el habla cotidiana, especialmente en Latinoamérica.",
          "Frases colchón (\"buffer phrases\") como \"no sé si podrías\", \"si no es mucha molestia\" o \"cuando tengas un segundo\" preceden la petición real y dan al oyente espacio para decir que no sin quedar mal.",
          "Agradecer de antemano (\"te lo agradecería mucho\") antes incluso de recibir el favor es una estrategia retórica común para inclinar la respuesta hacia el sí."
        ],
        "examples": [
          {
            "es": "No sé si podrías echarme una manita con esto.",
            "en": "I don't know if you could give me a hand with this."
          },
          {
            "es": "Si no es mucha molestia, ¿me pasas la sal?",
            "en": "If it's not too much trouble, could you pass the salt?"
          },
          {
            "es": "Te lo agradecería muchísimo.",
            "en": "I'd really appreciate it."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Completa la frase colchón que suaviza una petición.",
            "sentence": "___ no es mucha molestia, ¿me ayudas con esto?",
            "answer": "Si",
            "hint": "Es una conjunción condicional de dos letras.",
            "explanation": "\"Si no es mucha molestia\" es una frase colchón típica para suavizar una petición."
          }
        ]
      },
      {
        "heading": "Despedidas que nunca terminan",
        "body": [
          "La despedida hispana es famosa por alargarse: es común anunciar la salida (\"Bueno, ya me voy yendo\") y seguir conversando de pie durante varios minutos más antes de irse de verdad.",
          "Frases como \"Nos vemos\", \"Cualquier cosa me avisas\" o \"La próxima vez que vengas, avísame\" cierran la conversación dejando la puerta abierta a un próximo encuentro, aun cuando no haya planes concretos.",
          "Repetir la despedida varias veces (\"Bueno, chao, chao, nos vemos, chao\") no es redundancia sino parte del ritual social, sobre todo por teléfono.",
          "Acompañar la despedida física con dos besos (España, gran parte de Latinoamérica) o un beso y un abrazo varía según el país y el grado de confianza -- observar lo que hace el grupo es la mejor guía."
        ],
        "examples": [
          {
            "es": "Bueno, ya me voy yendo, que se hace tarde.",
            "en": "Well, I'm heading out, it's getting late."
          },
          {
            "es": "Cualquier cosa me avisas.",
            "en": "Let me know if anything comes up."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "¿Qué significa el piropo 'Está hecho un pincel'?",
        "options": [
          "Que se ve muy elegante",
          "Que pinta cuadros",
          "Que está cansado",
          "Que es artista"
        ],
        "correctIndex": 0,
        "explanation": "\"Estar hecho un pincel\" es una forma coloquial de decir que alguien se ve muy arreglado o elegante."
      },
      {
        "type": "multi-select",
        "question": "¿Cuáles de estas son formas de suavizar una petición?",
        "options": [
          "Si no es mucha molestia",
          "Quería pedirte un favor",
          "Hazlo ahora mismo",
          "Cuando tengas un segundo"
        ],
        "correctIndexes": [
          0,
          1,
          3
        ],
        "explanation": "Las frases colchón y el imperfecto de cortesía suavizan la petición; el imperativo directo no."
      },
      {
        "type": "translate",
        "direction": "en-es",
        "prompt": "Traduce la frase al español usando una expresión coloquial de la lección.",
        "source": "I don't know if you could give me a hand with this.",
        "answer": "No sé si podrías echarme una manita con esto.",
        "altAnswers": [
          "No sé si podrías echarme una mano con esto."
        ],
        "explanation": "\"Echar una manita\" es una forma coloquial de decir 'ayudar'."
      },
      {
        "type": "fill-blank",
        "prompt": "Completa la expresión de modestia ante un cumplido.",
        "sentence": "Ay, no, ___ va, cualquiera lo hace.",
        "answer": "qué",
        "explanation": "\"Qué va\" es una expresión de modestia o negación suave ante un halago."
      },
      {
        "type": "matching",
        "instructions": "Relaciona cada frase con su función social.",
        "pairs": [
          {
            "left": "¿Nos tuteamos?",
            "right": "Proponer un trato más cercano"
          },
          {
            "left": "Cualquier cosa me avisas",
            "right": "Cerrar una despedida dejando la puerta abierta"
          },
          {
            "left": "No, no hace falta, solo tú",
            "right": "Restar importancia a una oferta de invitado"
          },
          {
            "left": "Te lo agradecería muchísimo",
            "right": "Reforzar una petición de antemano"
          }
        ],
        "explanation": "Cada frase cumple una función social fija dentro del ritual de cortesía en el que se usa."
      },
      {
        "type": "word-order",
        "prompt": "Ordena las palabras para formar una despedida típica.",
        "words": [
          "Bueno,",
          "ya",
          "me",
          "voy",
          "yendo"
        ],
        "translation": "Well, I'm heading out.",
        "explanation": "\"Bueno, ya me voy yendo\" es la forma típica de anunciar que uno se va, antes de seguir conversando unos minutos más."
      }
    ]
  },
];
