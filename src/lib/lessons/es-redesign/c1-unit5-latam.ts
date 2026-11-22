// Synced from cheneygross-afk/lengo:src/lib/lessons/es-redesign/c1-unit5-latam.ts by scripts/sync-content.mjs -- edit it there, not here.
// Generated: Latin American wording for C1 Unit 5. C1_UNIT5_LATAM adds
// accepted answers (papás, carro, celular, departamento, en la noche) next to the
// Spain wording; C1_UNIT5_SWAP makes the Latin American word the main one where
// the lesson showed the Spain word (carro, celular, departamento, las tareas),
// keeping the Spain answer accepted. Content only.
import type { LessonPatch } from "./patch";
export const C1_UNIT5_LATAM: Record<string, { alts?: Record<number, string[]>; checkAlts?: Record<number, Record<number, string[]>> }> = {
 "b2d-pares-aunque": {
  "alts": {
   "17": [
    "Aunque mis papás no estén de acuerdo, voy a estudiar música.",
    "Aunque mis papás no estén de acuerdo, estudiaré música."
   ]
  }
 },
 "subjunctive-mastery-review-3": {
  "alts": {
   "1": [
    "Digan lo que digan mis papás, voy a estudiar música.",
    "Digan lo que digan mis papás, estudiaré música.",
    "Digan mis papás lo que digan, voy a estudiar música.",
    "Digan mis papás lo que digan, estudiaré música."
   ],
   "20": [
    "Digan lo que digan mis papás, voy a estudiar música.",
    "Digan lo que digan mis papás, estudiaré música.",
    "Digan mis papás lo que digan, voy a estudiar música.",
    "Digan mis papás lo que digan, estudiaré música."
   ]
  }
 }
};
export const C1_UNIT5_SWAP: Record<string, LessonPatch> = {
 "b2d-pares-aunque": {
  "exercises": {
   "replace": {
    "11": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "Aunque ___ mucho dinero, vive en un departamento pequeño.",
     "answer": "gana",
     "en": "Although she [earns] a lot of money, she lives in a small apartment.",
     "explanation": "Hecho real → aunque + indicativo (gana)."
    },
    "18": {
     "type": "write",
     "prompt": "Eres el capitán o la capitana de tu equipo y mañana juegan la final. Escribe un breve discurso para animar a tus compañeros, usando aunque con indicativo y con subjuntivo, y también para que y cuando + subjuntivo.",
     "minWords": 60,
     "maxWords": 120,
     "rubric": [
      "Aunque + indicativo para un hecho que todos conocen",
      "Aunque + subjuntivo para una posibilidad",
      "Para que + subjuntivo",
      "Cuando + subjuntivo para el futuro"
     ],
     "modelAnswer": "Compañeros, mañana es el día. Aunque el otro equipo es favorito, nosotros hemos entrenado más que nadie esta temporada. Aunque llueva, aunque el campo esté lleno de barro, vamos a jugar como siempre. Aunque perdamos, quiero que salgamos del campo con la cabeza alta. Les pido una cosa: hablen mucho entre ustedes para que nadie se sienta solo. Y cuando suene el pitido final, lo celebraremos juntos. ¡Vamos!",
     "explanation": "Aunque + indicativo presenta un hecho que admitimos (aunque el otro equipo es favorito); aunque + subjuntivo, una posibilidad que no cambia nada (aunque llueva, aunque perdamos)."
    }
   }
  }
 },
 "concessive-aunque-2-part-2": {
  "exercises": {
   "replace": {
    "0": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "Even if you ask me nicely, I won't lend you the car (informal).",
     "answer": "Aunque me lo pidas amablemente, no te prestaré el carro.",
     "altAnswers": [
      "Aunque me lo pidas con amabilidad, no te prestaré el carro.",
      "Aunque me lo pidas de buenas maneras, no te prestaré el carro.",
      "Aunque me lo pidas amablemente, no te voy a prestar el carro.",
      "Aunque me lo pidas bien, no te prestaré el carro.",
      "Aunque me lo pidas amablemente, no te prestaré el coche.",
      "Aunque me lo pidas con amabilidad, no te prestaré el coche.",
      "Aunque me lo pidas de buenas maneras, no te prestaré el coche.",
      "Aunque me lo pidas amablemente, no te voy a prestar el coche.",
      "Aunque me lo pidas bien, no te prestaré el coche."
     ],
     "explanation": "Objeción hipotética que se neutraliza de antemano: subjuntivo."
    }
   }
  }
 },
 "subjunctive-advanced-nuances-drill-1": {
  "exercises": {
   "replace": {
    "15": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Transforma la concesión con «por mucho que».",
     "source": "Aunque ahorre mucho, no podrá comprar el departamento.",
     "answer": "Por mucho que ahorre, no podrá comprar el departamento.",
     "altAnswers": [
      "Por más que ahorre, no podrá comprar el departamento.",
      "Por mucho que ahorre, no podrá comprar el piso.",
      "Por más que ahorre, no podrá comprar el piso."
     ],
     "explanation": "Con un verbo (no un adjetivo) se usa «por mucho/más que», sin «muy». El subjuntivo se mantiene: la cantidad, sea cual sea, no cambia la conclusión."
    },
    "2": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "Aunque ___ tanta gente, el evento no es necesariamente un éxito.",
     "answer": "haya",
     "altAnswers": [
      "hay"
     ],
     "en": "Even though there [are] so many people, the event isn't necessarily a success.",
     "explanation": "Aunque + haya resta importancia a un hecho que los dos ven; con «hay» lo das como información. Las dos formas valen."
    }
   }
  },
  "summary": "Practica usos avanzados y sutiles del subjuntivo: quizás y tal vez, «por muy… que» y «por más / mucho que», y exclamaciones como ¡Que te mejores!"
 },
 "subjunctive-advanced-nuances-drill-1-part-2": {
  "exercises": {
   "replace": {
    "0": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "Por muy caro que ___ el carro, lo voy a comprar.",
     "answer": "sea",
     "en": "However expensive the car [may be], I'm going to buy it.",
     "explanation": "ser → sea: present subjunctive, 3rd sing. (por muy... que). Por muy + adjetivo + que exige aquí subjuntivo (hecho hipotético); la forma correcta es 'sea'."
    },
    "16": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Corrige la frase.",
     "source": "Por muy rápido que manejas, no llegarás a tiempo.",
     "answer": "Por muy rápido que manejes, no llegarás a tiempo.",
     "explanation": "La concesiva se refiere a algo hipotético (cómo manejarás), así que va en subjuntivo: «manejes». El indicativo solo es posible con hechos pasados o habituales comprobados.",
     "altAnswers": [
      "Por muy rápido que conduzcas, no llegarás a tiempo."
     ]
    },
    "21": {
     "type": "speak",
     "text": "Por muy caro que sea el carro, lo voy a comprar.",
     "prompt": "Dilo en español: \"However expensive the car may be, I'm going to buy it\"",
     "explanation": "Una forma de decirlo: «Por muy caro que sea el carro, lo voy a comprar». ser → sea: present subjunctive, 3rd sing. (por muy... que). Por muy + adjetivo + que exige aquí subjuntivo (hecho hipotético); la forma correcta es 'sea'.",
     "altAnswers": [
      "Por muy caro que sea el coche, lo voy a comprar."
     ]
    },
    "5": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "Aunque el informe ___ incompleto, sus conclusiones son válidas.",
     "answer": "esté",
     "altAnswers": [
      "está"
     ],
     "en": "Even though the report [is] incomplete, its conclusions are valid.",
     "explanation": "Aunque + subjuntivo resta importancia a un hecho cierto (esté); con indicativo lo afirmas (está)."
    }
   }
  },
  "summary": "Practica usos avanzados y sutiles del subjuntivo: quizás y tal vez, «por muy… que» y «por más / mucho que», y exclamaciones como ¡Que te mejores!"
 },
 "c1r-error-hunt-concessives": {
  "exercises": {
   "replace": {
    "0": {
     "type": "fill-blank",
     "prompt": "Corrige.",
     "sentence": "Aunque ___ más dinero, no se compraría ese carro. (tener, él; el alumno escribió: tendría)",
     "answer": "tuviera",
     "explanation": "En una concesiva hipotética, «aunque» va con imperfecto de subjuntivo, no con condicional: «tuviera»."
    },
    "1": {
     "type": "fill-blank",
     "prompt": "Corrige.",
     "sentence": "El carro es caro y, por muy ___ que sea, no me convence. (bonito; el alumno escribió: bonita)",
     "answer": "bonito",
     "explanation": "El adjetivo concuerda con «carro» (masculino singular): «por muy bonito que sea»."
    },
    "2": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "Even if I had a car, I wouldn't drive to work.",
     "answer": "Aunque tuviera carro, no iría en carro al trabajo.",
     "altAnswers": [
      "Aunque tuviese carro, no iría en carro al trabajo.",
      "Aunque tuviera carro, no conduciría al trabajo.",
      "Aunque tuviera carro, no iría al trabajo en carro.",
      "Aunque tuviera carro, no iría al trabajo en él.",
      "Aunque tuviera coche, no iría en coche al trabajo.",
      "Aunque tuviese coche, no iría en coche al trabajo.",
      "Aunque tuviera coche, no conduciría al trabajo.",
      "Aunque tuviera coche, no iría al trabajo en coche.",
      "Aunque tuviera coche, no iría al trabajo en él."
     ],
     "explanation": "Tras «aunque» hipotético va imperfecto de subjuntivo, no condicional. Error típico: «aunque tendría»."
    },
    "16": {
     "type": "speak",
     "text": "Aunque tuviera carro, no iría en carro al trabajo.",
     "prompt": "Dilo en español: \"Even if I had a car, I wouldn't drive to work\"",
     "altAnswers": [
      "Aunque tuviese carro, no iría en carro al trabajo.",
      "Aunque tuviera carro, no conduciría al trabajo.",
      "Aunque tuviera carro, no iría al trabajo en carro.",
      "Aunque tuviera carro, no iría al trabajo en él.",
      "Aunque tuviera coche, no iría en coche al trabajo.",
      "Aunque tuviese coche, no iría en coche al trabajo.",
      "Aunque tuviera coche, no conduciría al trabajo.",
      "Aunque tuviera coche, no iría al trabajo en coche.",
      "Aunque tuviera coche, no iría al trabajo en él."
     ],
     "explanation": "Una forma de decirlo: «Aunque tuviera carro, no iría en carro al trabajo». Tras «aunque» hipotético va imperfecto de subjuntivo, no condicional. Error típico: «aunque tendría»."
    }
   }
  }
 },
 "b2d-circuito-como-si": {
  "exercises": {
   "replace": {
    "7": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Corrige la frase.",
     "source": "Grita como si está enojado.",
     "answer": "Grita como si estuviera enojado.",
     "altAnswers": [
      "Grita como si estuviese enojado.",
      "Grita como si estuviera enfadado.",
      "Grita como si estuviese enfadado."
     ],
     "explanation": "Como si nunca va con indicativo: compara con algo irreal, así que pide imperfecto de subjuntivo, estuviera."
    },
    "10": {
     "type": "multiple-choice",
     "question": "«Ayer me habló como si ___ enojado conmigo.»",
     "options": [
      "estuviera",
      "está",
      "esté",
      "estaría"
     ],
     "correctIndex": 0,
     "explanation": "Como si siempre va con imperfecto (o pluscuamperfecto) de subjuntivo, sea cual sea el tiempo principal."
    },
    "13": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "Maneja como si la carretera ___ suya.",
     "answer": "fuera",
     "en": "He drives as if the road [were] his.",
     "altAnswers": [
      "fuese"
     ],
     "explanation": "Como si + imperfecto de subjuntivo de ser: fuera."
    }
   }
  }
 },
 "b2r-mission-plan-event": {
  "exercises": {
   "replace": {
    "2": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "En cuanto ___ el carro, griten «¡sorpresa!».",
     "answer": "oigan",
     "altAnswers": [
      "oigáis"
     ],
     "en": "As soon as you [hear] the car, shout \"Surprise!\" (ustedes).",
     "explanation": "oír → oigan: presente de subjuntivo, ustedes. En cuanto + algo que todavía no ha pasado → subjuntivo."
    },
    "4": {
     "type": "multiple-choice",
     "question": "«I'll lend you my car so you can go to the party.»",
     "options": [
      "Te presto el carro para que puedas ir a la fiesta.",
      "Te presto el carro para que puedes ir a la fiesta.",
      "Te presto el carro para poder ir a la fiesta tú.",
      "Te presto el carro para que podrás ir a la fiesta."
     ],
     "correctIndex": 0,
     "explanation": "Con sujetos distintos (yo presto, tú puedes) se usa «para que» + subjuntivo: «puedas». «Para que puedes» y «para que podrás» usan indicativo, y «para poder» exige el mismo sujeto."
    },
    "18": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "Avisa a los meseros en cuanto ___ los invitados.",
     "answer": "lleguen",
     "en": "Let the waiters know as soon as the guests [arrive] (tú).",
     "explanation": "En cuanto + acción todavía no ocurrida → subjuntivo; «llegan» solo valdría para una costumbre."
    },
    "6": {
     "type": "word-order",
     "prompt": "Ordena las palabras.",
     "words": [
      "Hablen",
      "bajo",
      "para",
      "que",
      "el",
      "bebé",
      "no",
      "se",
      "despierte."
     ],
     "translation": "Talk quietly so the baby doesn't wake up (ustedes).",
     "explanation": "Ustedes hablan, el bebé se despierta: sujetos distintos → para que + subjuntivo (se despierte)."
    },
    "24": {
     "type": "speak",
     "text": "Apaguen las luces para que no sospeche.",
     "prompt": "Dilo en español: \"Turn off the lights so she doesn't suspect (ustedes)\"",
     "altAnswers": [
      "Apagad las luces para que no sospeche.",
      "Apaguen la luz para que no sospeche."
     ],
     "explanation": "Una forma de decirlo: «Apaguen las luces para que no sospeche.». Para que + subjuntivo: sujetos distintos."
    }
   }
  },
  "sections": {
   "0": {
    "examples": [
     {
      "es": "Escóndanse antes de que llegue Ana.",
      "en": "Hide before Ana arrives."
     },
     {
      "es": "Apaguen las luces para que no sospeche.",
      "en": "Turn off the lights so she doesn't suspect."
     }
    ]
   }
  }
 },
 "b2d-cuento-debate-educacion": {
  "exercises": {
   "replace": {
    "0": {
     "type": "fill-blank",
     "prompt": "Hueco 2.",
     "sentence": "___, no todos los alumnos tienen ayuda en casa.",
     "answer": "Además",
     "explanation": "Es un argumento nuevo que va en la misma dirección (más problemas de las tareas): además o asimismo, no un conector de contraste."
    },
    "4": {
     "type": "fill-blank",
     "prompt": "Completa.",
     "sentence": "Las tareas no mejoran los resultados; ___, perjudican el descanso.",
     "answer": "es más",
     "explanation": "Se añade un argumento todavía más fuerte que el anterior (no solo no ayudan, sino que perjudican): es más.",
     "altAnswers": [
      "además",
      "asimismo"
     ]
    },
    "7": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "Mobile phones can be useful; however, they distract students.",
     "answer": "Los celulares pueden ser útiles; sin embargo, distraen a los alumnos.",
     "altAnswers": [
      "Los celulares pueden ser útiles; no obstante, distraen a los alumnos.",
      "Los teléfonos celulares pueden ser útiles; sin embargo, distraen a los alumnos.",
      "Los celulares pueden ser útiles; sin embargo, distraen a los estudiantes.",
      "Los móviles pueden ser útiles; sin embargo, distraen a los alumnos.",
      "Los móviles pueden ser útiles; no obstante, distraen a los alumnos.",
      "Los teléfonos móviles pueden ser útiles; sin embargo, distraen a los alumnos.",
      "Los móviles pueden ser útiles; sin embargo, distraen a los estudiantes."
     ],
     "explanation": "Giro en contra entre dos oraciones: sin embargo, tras punto y coma y seguido de coma."
    },
    "26": {
     "type": "multiple-choice",
     "question": "Un padre dice: «Las tareas no sirven para nada». Quieres darle parte de razón y después oponerte. ¿Qué respondes?",
     "options": [
      "Es cierto que a veces son excesivos; sin embargo, bien dosificados ayudan a repasar.",
      "Es cierto que a veces son excesivos; además, bien dosificados ayudan a repasar.",
      "Es cierto que a veces son excesivos; por consiguiente, bien dosificados ayudan a repasar.",
      "Es cierto que a veces son excesivos, dado que bien dosificados ayudan a repasar."
     ],
     "correctIndex": 0,
     "explanation": "Primero concedes (es cierto que…) y luego giras en contra: sin embargo. Además sumaría en la misma dirección, por consiguiente presentaría tu objeción como consecuencia de la concesión y dado que como su causa."
    }
   }
  },
  "sections": {
   "1": {
    "body": [
     "Lee la intervención de una madre en el consejo escolar y decide qué conector va en cada hueco: «Las tareas son útiles; (1) ___, en exceso pueden ser perjudiciales. (2) ___, no todos los alumnos tienen ayuda en casa. (3) ___ esto genera desigualdad, proponemos limitarlas. (4) ___, pedimos un máximo de una hora diaria.»"
    ],
    "check": [
     {
      "type": "fill-blank",
      "prompt": "Hueco 1.",
      "sentence": "Las tareas son útiles; ___, en exceso pueden ser perjudiciales.",
      "answer": "sin embargo",
      "explanation": "La frase gira en contra de lo anterior (útiles → perjudiciales): conector de contraste entre pausas, sin embargo o no obstante.",
      "altAnswers": [
       "no obstante",
       "aun así"
      ]
     }
    ]
   }
  }
 },
 "subjunctive-mastery-review-3": {
  "exercises": {
   "replace": {
    "19": {
     "type": "write",
     "prompt": "Escribe el brindis que pronunciarás en la boda de tu mejor amiga. Usa varias fórmulas concesivo-universales para expresar un apoyo incondicional.",
     "minWords": 60,
     "maxWords": 130,
     "rubric": [
      "Al menos tres fórmulas concesivo-universales (pase lo que pase, cueste lo que cueste…)",
      "Una fórmula con adverbio o pronombre relativo (vivan donde vivan, sea quien sea…)",
      "El mismo verbo en subjuntivo en las dos partes de cada fórmula",
      "Tono emotivo y apelación directa a los novios"
     ],
     "modelAnswer": "Queridos Lucía y Andrés: Conozco a Lucía desde que teníamos seis años y, diga lo que diga ella, siempre fue la más valiente de las dos. Cuando conoció a Andrés, supe enseguida que había encontrado a alguien a su altura. Hoy solo quiero desearles una cosa: pase lo que pase, sigan riéndose juntos como lo hacen ahora. Vivan donde vivan, tendrán siempre las puertas abiertas en mi casa. Y cueste lo que cueste, no dejen nunca de viajar. Levantemos las copas por los novios. ¡Vivan los novios!",
     "explanation": "Las fórmulas concesivo-universales repiten el verbo en subjuntivo (diga lo que diga, pase lo que pase, vivan donde vivan, cueste lo que cueste) y presentan cualquier circunstancia posible como irrelevante para lo que se afirma."
    }
   }
  }
 },
 "concessive-aunque-2": {
  "sections": {
   "1": {
    "check": [
     {
      "type": "multiple-choice",
      "question": "Ana y Luis saben que el restaurante es caro. ¿Qué frase le resta importancia a ese hecho?",
      "options": [
       "Aunque sea caro, vamos a cenar allí.",
       "Aunque es caro, vamos a cenar allí.",
       "Aunque fuera caro, vamos a cenar allí.",
       "Aunque será caro, vamos a cenar allí."
      ],
      "correctIndex": 0,
      "explanation": "Con un hecho que los dos conocen, el subjuntivo no lo pone en duda: lo presenta como irrelevante para la conclusión (aunque sea caro). «Es» lo daría como información nueva, «fuera» lo convertiría en una hipótesis improbable y el futuro presentaría el hecho como previsto, no como irrelevante."
     }
    ]
   }
  }
 },
 "subjunctive-adverbial-clauses-1": {
  "sections": {
   "1": {
    "body": [
     "En cuanto, tan pronto como, hasta que y después de que siguen el mismo patrón que \"cuando\": subjuntivo para el futuro, indicativo para hábitos o el pasado.",
     "La pregunta clave es siempre la misma: ¿la acción de la oración temporal ya es un hecho (pasado o costumbre) o todavía está por llegar? Mira el verbo principal: un futuro o un imperativo (te escribiré, espera) casi siempre pide subjuntivo detrás."
    ]
   }
  }
 },
 "b2d-circuito-conjunciones-temporales": {
  "sections": {
   "0": {
    "body": [
     "Recuerda la regla: en cuanto, tan pronto como (= as soon as), hasta que (= until) y después de que (= after) funcionan igual que cuando: subjuntivo para una acción futura, indicativo para hábitos y para el pasado. En cuanto llegues, llámame. Esperé hasta que llegó.",
     "La razón es la misma: lo que todavía no ha pasado va en subjuntivo. Un detalle de hasta que: en negativa (No me voy hasta que termines) también es futuro, así que también lleva subjuntivo. Con en cuanto y hasta que, en pasado, usa indicativo."
    ]
   }
  }
 },
 "b1r-challenge-dialogue-marathon": {
  "exercises": {
   "replace": {
    "15": {
     "type": "speak",
     "text": "Lo escucharía con calma.",
     "prompt": "Responde en voz alta: ¿Qué haría con un cliente enojado? (Di: \"I'd listen to him calmly\")",
     "explanation": "Una forma de decirlo: «Lo escucharía con calma». Otra forma correcta también vale: comprueba primero el significado y después la pronunciación."
    }
   }
  },
  "sections": {
   "0": {
    "examples": [
     {
      "es": "—¿Ha trabajado alguna vez en atención al cliente? —Sí, he trabajado tres años en una tienda.",
      "en": "Have you ever worked in customer service? — Yes, I've worked three years in a store."
     },
     {
      "es": "—¿Qué haría con un cliente enojado? —Lo escucharía con calma.",
      "en": "What would you do with an angry customer? — I'd listen to him calmly."
     }
    ]
   }
  }
 },
 "b2d-patron-ellos-ron-ra": {
  "exercises": {
   "replace": {
    "4": {
     "type": "fill-blank",
     "prompt": "Forma.",
     "sentence": "durmieron → que ustedes ___",
     "answer": "durmieran",
     "altAnswers": [
      "durmiesen"
     ],
     "explanation": "Durmieron (con o → u) → durmie- + ran: durmieran. La u del pretérito se conserva."
    },
    "9": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Pasa la frase al pasado (quería).",
     "source": "Quiero que vengan y que traigan algo de beber.",
     "answer": "Quería que vinieran y que trajeran algo de beber.",
     "altAnswers": [
      "Quería que viniesen y que trajesen algo de beber."
     ],
     "explanation": "Con el verbo principal en pasado, los dos subjuntivos pasan al imperfecto, desde el pretérito: vinieron → vinieran, trajeron → trajeran."
    }
   }
  }
 },
 "b2d-pares-quiero-queria": {
  "exercises": {
   "replace": {
    "9": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Pasa la frase al pasado (les prohibí).",
     "source": "Les prohíbo que salgan de noche.",
     "answer": "Les prohibí que salieran de noche.",
     "altAnswers": [
      "Les prohibí que saliesen de noche.",
      "Les prohibí que salieran en la noche."
     ],
     "explanation": "Al pasar el principal al pasado (prohibí), el subjuntivo pasa al imperfecto: salieron → salieran."
    }
   }
  }
 },
 "b2d-corrige-secuencia": {
  "exercises": {
   "replace": {
    "13": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Corrige la frase.",
     "source": "Les aconsejo que reservaran con antelación.",
     "answer": "Les aconsejo que reserven con antelación.",
     "altAnswers": [
      "Les aconsejé que reservaran con antelación."
     ],
     "explanation": "Aconsejo está en presente: presente de subjuntivo, reserven."
    }
   }
  }
 },
 "b1d-rep-si-presente": {
  "exercises": {
   "replace": {
    "3": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "Si no ___ prisa, damos un paseo.",
     "answer": "tienen",
     "altAnswers": [
      "tenéis"
     ],
     "en": "If you [are] not in a hurry, we'll go for a walk (ustedes).",
     "explanation": "tener → tienen: presente de indicativo, ustedes. Si + presente."
    }
   }
  }
 },
 "b1d-rep-si-cadena": {
  "exercises": {
   "replace": {
    "1": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "Si hace sol, ___ a la playa.",
     "answer": "vayan",
     "altAnswers": [
      "id"
     ],
     "en": "If it's sunny, [go] to the beach (ustedes).",
     "explanation": "ir → vayan: mandato de ustedes. Una instrucción a un grupo."
    },
    "3": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Cambia el resultado a una instrucción: «wait for us at the door» (ustedes).",
     "source": "Si llegan tarde, los esperaremos.",
     "answer": "Si llegan tarde, espérennos en la puerta.",
     "altAnswers": [
      "Si llegan tarde, espérenos en la puerta."
     ],
     "explanation": "Ahora el resultado es una instrucción para ustedes: esperen + nos → espérennos."
    },
    "7": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "Si tienen tiempo, ___ al gimnasio conmigo.",
     "answer": "vengan",
     "altAnswers": [],
     "en": "If you have time, [come] to the gym with me. (ustedes)",
     "explanation": "Instrucción: si + presente, mandato de ustedes (vengan)."
    },
    "10": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "If the shop is closed, buy the bread tomorrow. (ustedes)",
     "answer": "Si la tienda está cerrada, compren el pan mañana.",
     "altAnswers": [
      "Si la tienda está cerrada, comprad el pan mañana."
     ],
     "explanation": "Instrucción: mandato de ustedes, compren."
    }
   }
  },
  "sections": {
   "0": {
    "body": [
     "Recuerda la regla: en una condición real, la parte del «si» va siempre en presente de indicativo, nunca en futuro ni en subjuntivo (si llueve, no «si lloverá» ni «si llueva»). Lo que cambia es el resultado, según lo que quieras decir:",
     "presente para una costumbre o un plan seguro (si llueve, nos quedamos en casa); futuro para una predicción (si llueve, nos quedaremos en casa); mandato para una instrucción (si llueve, quédense en casa)."
    ]
   }
  }
 },
 "b2d-cadena-presente-pasado": {
  "sections": {
   "2": {
    "check": [
     {
      "type": "multiple-choice",
      "question": "«Me encantaría que ___ a la cena.» (venir, ustedes)",
      "options": [
       "vinieran",
       "vengan",
       "vienen",
       "vendrían"
      ],
      "correctIndex": 0,
      "explanation": "Encantaría es condicional: pide imperfecto de subjuntivo, vinieron → vinieran. «Vengan» iría con «me encanta»; «vienen» es indicativo y «vendrían» es condicional."
     }
    ]
   }
  }
 },
 "b1d-circuito-cambios-raiz": {
  "sections": {
   "0": {
    "body": [
     "Recuerda la regla: si dibujas la tabla de un verbo con cambio de raíz, las formas que cambian (yo, tú, él, ellos) forman una «bota»; nosotros queda fuera porque el acento cae en la terminación: pensar → piense, pensemos.",
     "Los verbos en -ir rompen la bota: en nosotros también cambian, pero con la vocal corta (e → i, o → u): sentir → sienta, sintamos; dormir → duerma, durmamos; pedir → pida, pidamos."
    ]
   }
  }
 },
 "b2r-tema-tradiciones-rurales": {
  "sections": {
   "0": {
    "body": [
     "Recuerda la regla: cuando alguien quiere, pide o considera importante que otra persona haga algo (querer que, pedir que, es importante que), el segundo verbo va en subjuntivo: es importante que se mantengan. ¿Por qué? Porque no describes un hecho, sino un deseo o una influencia sobre otro. Si el verbo principal está en pasado, el subjuntivo pasa a imperfecto: no quería que lo hiciera. Antes de que lleva siempre subjuntivo, porque la acción aún no ha pasado. Y con un hecho comprobado, aunque va en indicativo: aunque cuesta, lo hacemos cada año."
    ]
   }
  }
 },
 "b2d-patron-si-hubiera-habria": {
  "exercises": {
   "replace": {
    "1": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "Si ___ la verdad, no se habría enojado.",
     "answer": "hubieras dicho",
     "en": "If you [had told] the truth, he wouldn't have got angry (tú).",
     "explanation": "decir → hubieras dicho: pluperfect subjunctive, tú. Condición pasada: hubieras + participio irregular de decir, dicho."
    }
   }
  }
 },
 "b1d-rep-si-cadena-part-2": {
  "exercises": {
   "replace": {
    "3": {
     "type": "speak",
     "prompt": "Di la misma condición en voz alta con tres resultados: «If it's sunny, we go to the beach / we'll go to the beach / go to the beach (ustedes).»",
     "text": "Si hace sol, vamos a la playa. Si hace sol, iremos a la playa. Si hace sol, vayan a la playa.",
     "altAnswers": [
      "Si hace sol, vamos a la playa. Si hace sol, iremos a la playa. Si hace sol, id a la playa."
     ],
     "explanation": "La parte del si no cambia (presente). El resultado cambia: presente (plan), futuro (predicción), mandato (instrucción)."
    },
    "7": {
     "type": "word-order",
     "prompt": "Ordena las palabras.",
     "words": [
      "Si",
      "llegan",
      "antes,",
      "espérenme",
      "en",
      "el",
      "bar"
     ],
     "translation": "If you arrive first, wait for me in the bar (ustedes)",
     "explanation": "Si + presente + mandato de ustedes."
    }
   }
  }
 },
 "b2r-mission-study-trip-diary": {
  "exercises": {
   "replace": {
    "3": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Transforma la norma en una frase del diario: «Era obligatorio que todos…».",
     "source": "Normas del viaje: es obligatorio que todos lleven la credencial de la escuela.",
     "answer": "Era obligatorio que todos lleváramos la credencial de la escuela.",
     "altAnswers": [
      "Era obligatorio que todos llevásemos la credencial de la escuela.",
      "Era obligatorio que todos llevaran la credencial de la escuela.",
      "Era obligatorio que todos lleváramos el carné del instituto."
     ],
     "explanation": "En el diario la norma ya es pasado: era obligatorio + imperfecto de subjuntivo (lleváramos). La persona pasa de ustedes a nosotros porque escribes tú."
    },
    "4": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Cambia la frase a la hoja de normas, en presente: «Está prohibido que se…».",
     "source": "Estaba prohibido que nos bañáramos en el río.",
     "answer": "Está prohibido que se bañen en el río.",
     "altAnswers": [
      "Está prohibido bañarse en el río.",
      "Está prohibido que os bañéis en el río."
     ],
     "explanation": "La norma escrita para los alumnos va en presente: está prohibido + presente de subjuntivo (se bañen)."
    }
   }
  }
 },
 "concessive-aunque-1": {
  "exercises": {
   "replace": {
    "7": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "Aunque el tren ___ lleno, conseguimos subir.",
     "answer": "estaba",
     "altAnswers": [
      "iba"
     ],
     "en": "Although the train [was] full, we managed to get on.",
     "explanation": "Hecho pasado conocido: imperfecto de indicativo."
    }
   }
  }
 }
};
