// Synced from cheneygross-afk/lengo:src/lib/lessons/es-redesign/b1-unit7-latam.ts by scripts/sync-content.mjs -- edit it there, not here.
// Generated: Latin American wording for B1 Unit 7. B1_UNIT7_LATAM adds
// accepted answers (carro, auto, mamá, angosta) next to the Spain wording;
// B1_UNIT7_SWAP makes the Latin American word the main one where the lesson
// showed the Spain word (carro, departamento, suéter, audífonos, torta),
// keeping the Spain answer accepted, and replaces items built on later
// grammar (había vivido, se reparan, haz lo que quieras, no me las pidas,
// devuélvemelos, vosotros). Content only.
import type { LessonPatch } from "./patch";
export const B1_UNIT7_LATAM: Record<string, { alts?: Record<number, string[]>; checkAlts?: Record<number, Record<number, string[]>> }> = {
 "relative-pronouns-1": {
  "alts": {
   "10": [
    "Mi tía, quien es enfermera, trabaja en la noche.",
    "Mi tía, que es enfermera, trabaja en la noche."
   ]
  }
 },
 "b1d-patron-une-con-que": {
  "alts": {
   "24": [
    "Las flores que plantó mi mamá ya crecen.",
    "Las flores que mi mamá plantó ya crecen."
   ]
  }
 },
 "b1d-frase-a-frase-descripciones": {
  "alts": {
   "23": [
    "La carretera por la que vinimos era muy angosta."
   ]
  }
 },
 "b1r-build-combine-sentences": {
  "alts": {
   "19": [
    "El hombre al que le vendí mi auto vive en Valencia.",
    "El hombre a quien le vendí mi auto vive en Valencia.",
    "El hombre al que vendí mi auto vive en Valencia.",
    "El hombre a quien vendí mi auto vive en Valencia."
   ]
  }
 },
 "b1-vocabulary-practice-10-part-2": {
  "alts": {
   "15": [
    "La demanda de autos eléctricos crece mucho."
   ]
  }
 },
 "b1r-mission-describe-without-word": {
  "alts": {
   "7": [
    "Es un lugar en el que reparan autos.",
    "Es un lugar donde se reparan carros.",
    "Es un lugar donde se reparan autos.",
    "Es un lugar en el que se reparan autos."
   ]
  }
 },
 "b1r-dialogue-combined-pronouns": {
  "alts": {
   "9": [
    "¿Quién te dio ese jersey? —Me lo dio mi compañera de departamento.",
    "¿Quién te dio ese suéter? —Me lo dio mi compañera de departamento.",
    "¿Quién te dio ese jersey? —Mi compañera de departamento me lo dio.",
    "¿Quién te dio ese suéter? —Mi compañera de departamento me lo dio."
   ]
  }
 }
};

export const B1_UNIT7_SWAP: Record<string, LessonPatch> = {
 "b1d-patron-une-con-que": {
  "exercises": {
   "replace": {
    "1": {
     "type": "fill-blank",
     "prompt": "Une.",
     "sentence": "Compré un carro. El carro es eléctrico. → El carro ___ compré es eléctrico.",
     "answer": "que",
     "explanation": "«Que» sustituye a «el carro», que es el objeto de compré."
    },
    "18": {
     "type": "speak",
     "text": "Tengo un celular que hace muy buenas fotos.",
     "prompt": "Dilo en español: \"I have a phone that takes very good photos\"",
     "altAnswers": [
      "Tengo un teléfono que hace muy buenas fotos.",
      "Tengo un celular que saca muy buenas fotos.",
      "Tengo un teléfono que saca muy buenas fotos.",
      "Tengo un móvil que hace muy buenas fotos.",
      "Tengo un móvil que saca muy buenas fotos."
     ],
     "explanation": "Una forma de decirlo: «Tengo un celular que hace muy buenas fotos». «Que» une «tengo un celular» y «el celular hace fotos»."
    },
    "25": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "I met a man who lived in China for ten years.",
     "answer": "Conocí a un hombre que vivió en China diez años.",
     "altAnswers": [
      "Conocí a un hombre que vivió en China durante diez años.",
      "Conocí a un señor que vivió en China diez años.",
      "Conocí a un señor que vivió en China durante diez años."
     ],
     "explanation": "«Que» funciona con cualquier tiempo verbal, también con el pretérito: que vivió."
    }
   }
  }
 },
 "b1d-pares-que-lo-que": {
  "exercises": {
   "replace": {
    "14": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "What we're looking for is a quiet apartment.",
     "answer": "Lo que buscamos es un departamento tranquilo.",
     "altAnswers": [
      "Lo que estamos buscando es un departamento tranquilo.",
      "Lo que buscamos es un apartamento tranquilo.",
      "Lo que estamos buscando es un apartamento tranquilo.",
      "Lo que buscamos es un piso tranquilo.",
      "Lo que estamos buscando es un piso tranquilo."
     ],
     "explanation": "«Lo que» abre la frase porque no hay sustantivo antes: significa «la cosa que»."
    },
    "18": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "I didn't hear what the waiter said.",
     "answer": "No oí lo que dijo el mesero.",
     "altAnswers": [
      "No oí lo que el mesero dijo.",
      "No escuché lo que dijo el mesero.",
      "No escuché lo que el mesero dijo.",
      "No oí lo que dijo el camarero.",
      "No oí lo que el camarero dijo.",
      "No escuché lo que dijo el camarero.",
      "No escuché lo que el camarero dijo."
     ],
     "explanation": "«What» sin sustantivo = «lo que»."
    },
    "25": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "It rained all week, which ruined our holiday.",
     "answer": "Llovió toda la semana, lo que arruinó nuestras vacaciones.",
     "altAnswers": [
      "Llovió toda la semana, lo cual arruinó nuestras vacaciones.",
      "Llovió toda la semana, lo que nos arruinó las vacaciones.",
      "Llovió toda la semana, lo que estropeó nuestras vacaciones.",
      "Llovió toda la semana, lo cual estropeó nuestras vacaciones."
     ],
     "explanation": "«Lo que» recoge toda la idea anterior (llovió toda la semana), no un sustantivo concreto."
    }
   }
  }
 },
 "b1d-frase-a-frase-descripciones": {
  "exercises": {
   "replace": {
    "3": {
     "type": "fill-blank",
     "prompt": "Reescribe en una sola frase.",
     "sentence": "Llegó tarde. Eso enfadó al jefe. → Llegó tarde, lo ___ enfadó al jefe.",
     "answer": "que",
     "explanation": "«Lo que» retoma toda la idea anterior (llegó tarde).",
     "altAnswers": [
      "cual"
     ]
    },
    "14": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "Perdí el celular. Eso me puso de mal humor. → Perdí el celular, ___ me puso de mal humor.",
     "answer": "lo que",
     "en": "I lost my phone, [which] put me in a bad mood.",
     "altAnswers": [
      "lo cual"
     ],
     "explanation": "«Eso» se refiere a toda la frase: «lo que»."
    }
   }
  }
 },
 "b1d-ronda-relativos": {
  "exercises": {
   "replace": {
    "11": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "Haz ___ te digo.",
     "answer": "lo que",
     "en": "Do [what] I tell you. (tú)",
     "explanation": "Sin sustantivo delante: «lo que» = what, the thing that."
    },
    "25": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "Of all the cakes, the one I like best is the chocolate one.",
     "answer": "De todos los pasteles, el que más me gusta es el de chocolate.",
     "altAnswers": [
      "De todas las tortas, la que más me gusta es la de chocolate.",
      "De todas las tartas, la que más me gusta es la de chocolate."
     ],
     "explanation": "«The one» = «el que», concordando con «pastel» aunque no se repita."
    },
    "26": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "She arrived late again, which doesn't surprise me.",
     "answer": "Llegó tarde otra vez, lo que no me sorprende.",
     "altAnswers": [
      "Llegó tarde otra vez, lo cual no me sorprende.",
      "Llegó tarde de nuevo, lo que no me sorprende.",
      "Llegó tarde de nuevo, lo cual no me sorprende."
     ],
     "explanation": "Lo que no me sorprende es que llegó tarde: «lo que» recoge toda la frase (o «lo cual»)."
    }
   }
  },
  "sections": {
   "0": {
    "body": [
     "Recuerda la regla con un árbol de decisión. 1) ¿No hay sustantivo delante (una idea, «la cosa que»)? → lo que. 2) ¿Hay preposición? → el/la/los/las que, concordando con el sustantivo (o quien/quienes para personas). 3) ¿Sin preposición? → que. 4) ¿Persona entre comas? → que o quien.",
     "El orden importa: mira primero si hay sustantivo, luego si hay preposición. Así no te equivocas con «la chica con la que» ni con «haz lo que te digo»."
    ]
   }
  }
 },
 "relative-pronouns-mastery-check": {
  "exercises": {
   "replace": {
    "4": {
     "type": "multiple-choice",
     "question": "¿Cuál oración distingue correctamente entre dos objetos con \"el que\"?",
     "options": [
      "De los dos carros, me quedo con el que es rojo.",
      "De los dos carros, me quedo con que es rojo.",
      "De los dos carros, me quedo con quien es rojo.",
      "De los dos carros, me quedo con lo que es rojo."
     ],
     "correctIndex": 0,
     "explanation": "«El que» (y sus formas) distingue entre varias opciones: me quedo con el que es rojo. «Que» solo no puede empezar así la cláusula, «quien» es solo para personas y «lo que» es para ideas, no para carros."
    },
    "5": {
     "type": "multi-select",
     "question": "¿En qué oraciones se usa \"quien/quienes\" correctamente? (Elige todas las correctas)",
     "options": [
      "Los estudiantes, quienes llegaron tarde, se disculparon.",
      "El carro quien compré es nuevo.",
      "La profesora con quien estudié el año pasado ahora vive en España.",
      "La ciudad quien visitamos es hermosa."
     ],
     "correctIndexes": [
      0,
      2
     ],
     "explanation": "«Quien/quienes» solo se refiere a personas: los estudiantes, la profesora. En «El carro quien compré» y «La ciudad quien visitamos» el antecedente es una cosa, así que se necesita «que»."
    },
    "24": {
     "type": "speak",
     "text": "Me mintió, lo que me dolió mucho.",
     "prompt": "Dilo en español: \"He lied to me, which hurt me a lot\"",
     "altAnswers": [
      "Me mintió, lo cual me dolió mucho."
     ],
     "explanation": "Una forma de decirlo: «Me mintió, lo que me dolió mucho». Lo que dolió fue la mentira, toda la frase anterior → «lo que»."
    },
    "27": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Cambia «departamentos» por «casas» y adapta la frase.",
     "source": "De los dos departamentos, el que vimos primero era más barato.",
     "answer": "De las dos casas, la que vimos primero era más barata.",
     "altAnswers": [
      "De las dos casas, la que vimos primero era la más barata."
     ],
     "explanation": "«El que» = the one, y concuerda con el sustantivo aunque no se repita: casas → la que; el adjetivo también pasa a femenino (barata)."
    }
   }
  }
 },
 "b1r-build-combine-sentences": {
  "exercises": {
   "replace": {
    "19": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "The man I sold my car to lives in Valencia.",
     "answer": "El hombre al que le vendí mi carro vive en Valencia.",
     "altAnswers": [
      "El hombre a quien le vendí mi carro vive en Valencia.",
      "El hombre al que vendí mi carro vive en Valencia.",
      "El hombre a quien vendí mi carro vive en Valencia.",
      "El hombre al que le vendí mi coche vive en Valencia.",
      "El hombre a quien le vendí mi coche vive en Valencia.",
      "El hombre al que vendí mi coche vive en Valencia.",
      "El hombre a quien vendí mi coche vive en Valencia."
     ],
     "explanation": "«Vender algo a» alguien: «al que» (a + el que) o «a quien»; la preposición va delante."
    }
   }
  }
 },
 "b1-vocabulary-practice-10-part-2": {
  "exercises": {
   "replace": {
    "15": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "The demand for electric cars is growing a lot.",
     "answer": "La demanda de carros eléctricos está creciendo mucho.",
     "altAnswers": [
      "La demanda de carros eléctricos crece mucho.",
      "La demanda de autos eléctricos está creciendo mucho.",
      "La demanda de coches eléctricos está creciendo mucho.",
      "La demanda de coches eléctricos crece mucho."
     ],
     "explanation": "«Demand» = «la demanda de»; «crecer» para el aumento."
    }
   }
  }
 },
 "b1r-mission-describe-without-word": {
  "exercises": {
   "replace": {
    "5": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "It's the person who teaches you to drive.",
     "answer": "Es la persona que te enseña a manejar.",
     "altAnswers": [
      "Es la persona que te enseña a conducir."
     ],
     "explanation": "«Who» sin preposición = que: la persona que te enseña."
    },
    "7": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Transforma la definición de «mecánico» en la de «taller»: empieza con «Es un lugar...».",
     "source": "Es una persona que repara carros.",
     "answer": "Es un lugar donde reparan carros.",
     "altAnswers": [
      "Es un lugar donde reparan autos.",
      "Es un lugar en el que reparan carros.",
      "Es un lugar donde reparan coches.",
      "Es un lugar en el que reparan coches.",
      "Es un lugar en el que se reparan carros.",
      "Es un lugar donde se reparan coches.",
      "Es un lugar en el que se reparan coches."
     ],
     "explanation": "Para definir el lugar en vez de la persona, cambia el sustantivo (un lugar) y el relativo (donde o en el que); el verbo en plural (reparan) habla de la gente que trabaja allí."
    },
    "21": {
     "type": "word-order",
     "prompt": "Ordena las palabras.",
     "words": [
      "Es",
      "la",
      "persona",
      "que",
      "te",
      "trae",
      "la",
      "comida",
      "en",
      "un",
      "restaurante"
     ],
     "translation": "It's the person who brings you the food in a restaurant",
     "explanation": "Persona sin preposición: «que» (el mesero)."
    }
   }
  },
  "sections": {
   "0": {
    "examples": [
     {
      "es": "Es una persona que trabaja en un hospital y cuida a los enfermos. → un enfermero",
      "en": "It's a person who works in a hospital and looks after the sick."
     },
     {
      "es": "Es un lugar donde compras medicinas. → una farmacia",
      "en": "It's a place where you buy medicine."
     }
    ],
    "check": [
     {
      "type": "multiple-choice",
      "question": "«Es una cosa que usas para abrir una puerta.»",
      "options": [
       "una llave",
       "una ventana",
       "un carro",
       "una silla"
      ],
      "correctIndex": 0,
      "explanation": "Lo que usas para abrir una puerta es una llave (key). Una ventana, un carro y una silla no sirven para eso."
     },
     {
      "type": "multiple-choice",
      "question": "Te toca definir «reloj». ¿Qué definición es correcta?",
      "options": [
       "Es una cosa que te dice la hora.",
       "Es una cosa quien te dice la hora.",
       "Es una cosa lo que te dice la hora.",
       "Es una cosa te dice la hora."
      ],
      "correctIndex": 0,
      "explanation": "Cosa sin preposición: que. Quien es solo para personas, lo que no va detrás de un sustantivo y en español el relativo no se puede omitir."
     }
    ]
   }
  }
 },
 "b1d-dictado-relativos": {
  "exercises": {
   "replace": {
    "2": {
     "type": "dictation",
     "audio": "El profesor, quien vivió en Japón, nos enseñó a usar palillos.",
     "explanation": "Se escribe: El profesor, quien vivió en Japón, nos enseñó a usar palillos. (The teacher, who lived in Japan, taught us to use chopsticks.) Persona entre comas: quien (o que); el inciso va entre el sujeto y el verbo «nos enseñó»."
    }
   }
  },
  "sections": {
   "0": {
    "check": [
     {
      "type": "dictation",
      "audio": "La chica con la que comparto departamento es enfermera.",
      "explanation": "Se escribe: La chica con la que comparto departamento es enfermera. (The girl I share an apartment with is a nurse.) Compartir departamento con alguien: con + la que, justo después de «la chica»; el verbo principal (es) va después de toda la relativa."
     }
    ]
   }
  }
 },
 "b1r-dialogue-combined-pronouns": {
  "exercises": {
   "replace": {
    "0": {
     "type": "fill-blank",
     "prompt": "Responde.",
     "sentence": "—¿Me traes las bebidas? —Sí, ahora ___ las traigo.",
     "answer": "te",
     "explanation": "Si te preguntan con «me», respondes con te: te las traigo."
    },
    "3": {
     "type": "matching",
     "instructions": "Relaciona cada pregunta con su respuesta.",
     "pairs": [
      {
       "left": "¿Me explicas el problema?",
       "right": "Sí, te lo explico."
      },
      {
       "left": "¿Le regalaste la bufanda?",
       "right": "Sí, se la regalé."
      },
      {
       "left": "¿A ustedes les dieron las llaves?",
       "right": "Sí, nos las dieron."
      },
      {
       "left": "¿Les contaste los planes?",
       "right": "Sí, se los conté."
      }
     ],
     "explanation": "Indirecto + directo, y le/les → se. La persona cambia de punto de vista (me → te, a ustedes → nos) y el segundo pronombre copia la cosa (el problema → lo, la bufanda → la)."
    },
    "6": {
     "type": "word-order",
     "prompt": "Ordena las palabras.",
     "words": [
      "Si",
      "necesitas",
      "el",
      "carro,",
      "te",
      "lo",
      "presto",
      "el",
      "sábado."
     ],
     "translation": "If you need the car, I'll lend it to you on Saturday.",
     "explanation": "Te lo delante del verbo conjugado."
    },
    "9": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "Who gave you that sweater? — My roommate (a woman) gave it to me. (tú)",
     "answer": "¿Quién te dio ese suéter? —Me lo dio mi compañera de cuarto.",
     "altAnswers": [
      "¿Quién te dio ese suéter? —Mi compañera de cuarto me lo dio.",
      "¿Quién te dio ese jersey? —Me lo dio mi compañera de piso.",
      "¿Quién te dio ese jersey? —Mi compañera de piso me lo dio.",
      "¿Quién te dio ese suéter? —Me lo dio mi compañera de piso.",
      "¿Quién te dio ese suéter? —Mi compañera de piso me lo dio."
     ],
     "explanation": "Te → me en la respuesta; «lo» por el suéter."
    },
    "10": {
     "type": "word-order",
     "prompt": "Ordena las palabras.",
     "words": [
      "¿El",
      "carro?",
      "Te",
      "lo",
      "dejo",
      "si",
      "me",
      "lo",
      "devuelves",
      "limpio"
     ],
     "translation": "The car? I'll lend it to you if you give it back to me clean",
     "explanation": "Dos veces indirecto + directo: te lo / me lo."
    },
    "12": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Corrige la frase.",
     "source": "¿La torta? Se la voy a regalarle a Lucía.",
     "answer": "¿La torta? Se la voy a regalar a Lucía.",
     "altAnswers": [
      "¿La torta? Voy a regalársela a Lucía.",
      "¿La tarta? Se la voy a regalar a Lucía.",
      "¿La tarta? Voy a regalársela a Lucía."
     ],
     "explanation": "Sobra «le»: el pronombre de persona ya está en «se» (delante de «voy»). Pones los pronombres en un solo sitio, delante o pegados (voy a regalársela), nunca en los dos."
    },
    "13": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Corrige la frase.",
     "source": "¿Tus zapatillas? Ya las te devolví.",
     "answer": "¿Tus zapatillas? Ya te las devolví.",
     "explanation": "Delante del verbo conjugado el orden no cambia: persona primero (te) y cosa después (las)."
    },
    "15": {
     "type": "speak",
     "prompt": "Respond aloud: your roommate (tú) asks «¿Me prestas tus audífonos?». Say yes, you'll lend them, but you need them tomorrow.",
     "text": "Sí, te los presto, pero los necesito mañana.",
     "explanation": "Te los presto: persona + cosa delante del verbo conjugado. Los necesito: un solo pronombre (los audífonos) delante del verbo. En América se dice más «audífonos»."
    },
    "19": {
     "type": "write",
     "prompt": "Escribe un diálogo entre dos compañeros de cuarto que se piden cosas prestadas antes de salir: ropa, dinero, el carro… No repitas los sustantivos: usa dos pronombres juntos.",
     "minWords": 50,
     "maxWords": 90,
     "rubric": [
      "Formato de diálogo",
      "Al menos cinco frases con dos pronombres",
      "Pronombres pegados al infinitivo al menos una vez (voy a prestártela…)",
      "Concordancia con la cosa (la chaqueta → la, los zapatos → los)"
     ],
     "modelAnswer": "—Oye, Clara, ¿me prestas tu chaqueta negra? —Sí, te la presto, pero la necesito mañana. —Claro. ¿Y los zapatos rojos? —No, esos no te los dejo: son nuevos. —Vale. Otra cosa: ¿tienes diez euros? —Ya te los di la semana pasada. —Lo sé, te los devuelvo todos el viernes. ¿Y el carro? —El carro se lo he prestado a mi hermano. —Bueno, pues iré en metro. —¡Que lo pases bien!",
     "explanation": "Los pronombres concuerdan con la cosa (la chaqueta → te la presto; los zapatos → te los dejo). En el mandato afirmativo se pegan con tilde (devuélvemela), y le se convierte en se: se lo he prestado."
    }
   }
  },
  "sections": {
   "0": {
    "body": [
     "Recuerda la regla: en una conversación no repites lo que ya se ha dicho. La persona va primero (me, te, le, nos, les) y la cosa después (lo, la, los, las); si la persona es le / les, pasa a «se»: se lo, se la, se los, se las.",
     "¿Por qué funciona sin sustantivos? Porque el segundo pronombre copia el género y el número de la cosa (el cargador → lo, las llaves → las), y el contexto del diálogo dice el resto. Al responder, cambia el punto de vista: «¿me…?» → «te…»."
    ]
   }
  }
 }
};
