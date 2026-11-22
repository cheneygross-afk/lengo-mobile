// Synced from cheneygross-afk/lengo:src/lib/lessons/es-redesign/c1-unit4-latam.ts by scripts/sync-content.mjs -- edit it there, not here.
// Generated: Latin American wording for C1 Unit 4. C1_UNIT4_LATAM adds
// accepted answers (papás, carro, celular, departamento, alberca, en la tarde)
// next to the Spain wording; C1_UNIT4_SWAP makes the Latin American word the main
// one where the lesson showed the Spain word (carro, celular, departamento,
// refrigerador, manejar, plomero, licencia), keeping the Spain answer accepted.
// Content only.
import type { LessonPatch } from "./patch";
export const C1_UNIT4_LATAM: Record<string, { alts?: Record<number, string[]>; checkAlts?: Record<number, Record<number, string[]>> }> = {
 "b2r-tema-lesion-y-vuelta": {
  "alts": {
   "9": [
    "El fisioterapeuta quiere que vaya a la alberca todos los días.",
    "El fisioterapeuta quiere que vaya a la alberca cada día.",
    "La fisioterapeuta quiere que vaya a la alberca todos los días."
   ]
  }
 },
 "b2r-build-argumentative-paragraph": {
  "alts": {
   "4": [
    "Dado que los alquileres están subiendo, muchos jóvenes viven con sus papás.",
    "Puesto que los alquileres están subiendo, muchos jóvenes viven con sus papás.",
    "Dado que los alquileres suben, muchos jóvenes viven con sus papás."
   ]
  }
 },
 "b2d-patron-si-hubiera-habria": {
  "alts": {
   "14": [
    "Si mis papás no nos hubieran prestado el dinero, nunca habríamos abierto la panadería.",
    "Si mis papás no nos hubieran prestado el dinero, no habríamos abierto nunca la panadería.",
    "Si mis papás no nos hubieran prestado el dinero, nunca hubiéramos abierto la panadería."
   ]
  }
 },
 "b2d-pares-si-tuviera-hubiera-tenido": {
  "alts": {
   "14": [
    "Si el bus fuera más rápido, dejaría el auto en casa."
   ],
   "15": [
    "Si el bus hubiera sido más rápido, no hubiera llegado tarde a la entrevista."
   ]
  }
 },
 "b2d-circuito-participios-habria": {
  "alts": {
   "17": []
  }
 },
 "b2r-tema-dos-caminos": {
  "alts": {
   "0": [
    "Mis papás prefieren que tenga algo seguro."
   ],
   "8": [
    "Yo que tú, hablaría primero con tus papás.",
    "Yo en tu lugar, hablaría primero con tus papás.",
    "Si yo fuera tú, hablaría primero con tus papás.",
    "Yo que tú, hablaría con tus papás primero.",
    "Yo en tu lugar, hablaría con tus papás primero.",
    "Si fuera tú, hablaría primero con tus papás."
   ],
   "14": [
    "Mis papás estarían más tranquilos si yo tuviera un sueldo fijo.",
    "Si yo tuviera un sueldo fijo, mis papás estarían más tranquilos."
   ]
  }
 },
 "b2d-dictado-irreal-pasado": {
  "alts": {
   "10": [
    "Tendrías que haber traído una chamarra."
   ],
   "16": [
    "Me habrías podido esperar en la parada del bus.",
    "Podrías haberme esperado en la parada del bus."
   ]
  }
 }
};
export const C1_UNIT4_SWAP: Record<string, LessonPatch> = {
 "advanced-connectors-1-part-2": {
  "exercises": {
   "replace": {
    "6": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "Since you know the area, you can drive (tú).",
     "answer": "Ya que conoces la zona, puedes manejar tú.",
     "altAnswers": [
      "Puesto que conoces la zona, puedes manejar tú.",
      "Dado que conoces la zona, puedes manejar tú.",
      "Ya que conoces la zona, puedes conducir tú.",
      "Puesto que conoces la zona, puedes conducir tú.",
      "Dado que conoces la zona, puedes conducir tú."
     ],
     "explanation": "Ya que (o puesto que, dado que) presenta una causa que el oyente ya conoce y suele ir al principio."
    }
   }
  }
 },
 "b2d-circuito-causa-consecuencia": {
  "exercises": {
   "replace": {
    "18": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "___ ya conoces el camino, maneja tú.",
     "answer": "Ya que",
     "en": "[Since] you already know the way, you drive (tú).",
     "altAnswers": [
      "Puesto que",
      "Dado que",
      "Como"
     ],
     "explanation": "La razón conocida va al principio con un conector de causa: ya que; así que solo puede ir detrás de la causa."
    }
   }
  }
 },
 "b2r-build-argumentative-paragraph": {
  "exercises": {
   "replace": {
    "5": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "Therefore, the city council should regulate tourist apartments.",
     "answer": "Por lo tanto, el ayuntamiento debería regular los departamentos turísticos.",
     "altAnswers": [
      "Por consiguiente, el ayuntamiento debería regular los departamentos turísticos.",
      "Por lo tanto, el ayuntamiento debería regular los pisos turísticos.",
      "Por consiguiente, el ayuntamiento debería regular los pisos turísticos."
     ],
     "explanation": "Por lo tanto cierra con la conclusión; el condicional suaviza la propuesta."
    },
    "11": {
     "type": "word-order",
     "prompt": "Ordena las palabras.",
     "words": [
      "Dado",
      "que",
      "el",
      "barrio",
      "está",
      "mal",
      "comunicado,",
      "muchos",
      "vecinos",
      "dependen",
      "del",
      "carro"
     ],
     "translation": "Given that the neighbourhood is poorly connected, many residents depend on the car",
     "explanation": "Dado que encabeza la causa."
    },
    "13": {
     "type": "multiple-choice",
     "question": "Párrafo: «(1) Dado que el centro tiene mucho tráfico, el ayuntamiento quiere cerrarlo a los carros. (2) Sin embargo, los comerciantes temen perder clientes. (3) ___». ¿Qué frase sigue mejor?",
     "options": [
      "Además, la medida reduciría el ruido y la contaminación.",
      "Por lo tanto, los comerciantes temen perder clientes.",
      "Sin embargo, el centro tiene mucho tráfico.",
      "Dado que, la medida es buena."
     ],
     "correctIndex": 0,
     "explanation": "Tras la objeción, el párrafo recupera la línea principal con otro argumento a favor: además. La segunda repite la objeción como si fuera consecuencia, la tercera vuelve al principio y en la cuarta dado que no puede ir solo seguido de coma."
    }
   }
  }
 },
 "b2r-build-argumentative-paragraph-part-2": {
  "exercises": {
   "replace": {
    "5": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "Some residents even want to ban cars in the centre.",
     "answer": "Algunos vecinos incluso quieren prohibir los carros en el centro.",
     "altAnswers": [
      "Incluso algunos vecinos quieren prohibir los carros en el centro.",
      "Algunos vecinos quieren incluso prohibir los carros en el centro.",
      "Algunos vecinos incluso quieren prohibir los coches en el centro.",
      "Incluso algunos vecinos quieren prohibir los coches en el centro.",
      "Algunos vecinos quieren incluso prohibir los coches en el centro."
     ],
     "explanation": "Incluso añade algo que sorprende por ser extremo."
    },
    "13": {
     "type": "multiple-choice",
     "question": "¿Con qué frase cerrarías un párrafo que dice que el centro tiene mucho tráfico, que el ayuntamiento quiere cerrarlo a los carros y que los comerciantes temen perder clientes?",
     "options": [
      "Por consiguiente, convendría cerrarlo de forma gradual.",
      "Asimismo, el centro tiene mucho tráfico.",
      "A pesar de que convendría cerrarlo.",
      "Ya que convendría cerrarlo de forma gradual."
     ],
     "correctIndex": 0,
     "explanation": "El último paso es la conclusión: un conector de consecuencia (por consiguiente). Asimismo añadiría otro dato, y a pesar de que y ya que dejan la frase incompleta, sin oración principal."
    }
   }
  }
 },
 "b2d-patron-si-hubiera-habria": {
  "exercises": {
   "replace": {
    "8": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "If I had charged my phone, I would have called you from the station.",
     "answer": "Si hubiera cargado el celular, te habría llamado desde la estación.",
     "altAnswers": [
      "Si hubiera cargado el teléfono, te habría llamado desde la estación.",
      "Si hubiera cargado el celular, te hubiera llamado desde la estación.",
      "Si hubiera cargado el móvil, te habría llamado desde la estación.",
      "Si hubiera cargado el móvil, te hubiera llamado desde la estación."
     ],
     "explanation": "Hubiera cargado en la condición, habría llamado en la consecuencia."
    },
    "0": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "Si ___ el paraguas, no te habrías mojado.",
     "answer": "hubieras llevado",
     "altAnswers": [
      "hubieras tomado",
      "hubieras traído",
      "hubieras cogido",
      "hubieses llevado"
     ],
     "en": "If you [had taken] the umbrella, you wouldn't have got wet (tú).",
     "explanation": "llevar → hubieras llevado: pluscuamperfecto de subjuntivo, tú. Condición pasada tras si: hubieras + participio."
    }
   }
  }
 },
 "b2d-patron-si-hubiera-habria-part-2": {
  "exercises": {
   "replace": {
    "7": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "If she had saved part of her salary, she would have bought herself a car.",
     "answer": "Si hubiera ahorrado parte de su sueldo, se habría comprado un carro.",
     "altAnswers": [
      "Si hubiera ahorrado parte de su salario, se habría comprado un carro.",
      "Si hubiera ahorrado parte de su sueldo, se habría comprado un auto.",
      "Si hubiera ahorrado parte de su sueldo, se hubiera comprado un carro.",
      "Si hubiera ahorrado parte de su sueldo, se habría comprado un coche.",
      "Si hubiera ahorrado parte de su salario, se habría comprado un coche.",
      "Si hubiera ahorrado parte de su sueldo, se hubiera comprado un coche."
     ],
     "explanation": "Hubiera ahorrado + se habría comprado; el pronombre se va delante del auxiliar."
    }
   }
  }
 },
 "b2d-rep-si-mixtas": {
  "exercises": {
   "replace": {
    "12": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "Si mi hermano ___ la licencia, nos llevaría él en carro, pero no la tiene.",
     "answer": "tuviera",
     "en": "If my brother [had] a licence, he'd drive us, but he doesn't have one.",
     "explanation": "Hecho falso en el presente: imperfecto de subjuntivo, tuviera."
    }
   }
  }
 },
 "b2d-rep-si-mixtas-part-2": {
  "exercises": {
   "replace": {
    "3": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "Si ___ hambre, hay pizza en el refrigerador.",
     "answer": "tienes",
     "en": "If you [are] hungry, there's pizza in the fridge (tú).",
     "explanation": "Condición real y posible: si + presente de indicativo. Nunca presente de subjuntivo tras si."
    }
   }
  }
 },
 "b2d-pares-si-tuviera-hubiera-tenido": {
  "exercises": {
   "replace": {
    "6": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Cambia la frase: el viaje fue la semana pasada.",
     "source": "Si tuviera carro, te llevaría al aeropuerto.",
     "answer": "Si hubiera tenido carro, te habría llevado al aeropuerto.",
     "altAnswers": [
      "Si hubiese tenido carro, te habría llevado al aeropuerto.",
      "Si hubiera tenido carro, te hubiera llevado al aeropuerto.",
      "Si hubiera tenido coche, te habría llevado al aeropuerto.",
      "Si hubiese tenido coche, te habría llevado al aeropuerto.",
      "Si hubiera tenido coche, te hubiera llevado al aeropuerto."
     ],
     "explanation": "La ocasión ya pasó: las dos mitades pasan a forma compuesta, hubiera tenido y habría llevado."
    },
    "13": {
     "type": "multiple-choice",
     "question": "Hoy no tienes carro: «Si ___ carro, te llevaría.»",
     "options": [
      "tuviera",
      "hubiera tenido",
      "tengo",
      "tendría"
     ],
     "correctIndex": 0,
     "explanation": "Situación actual irreal: tuviera + llevaría."
    },
    "14": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "If the bus were faster, I would leave the car at home.",
     "answer": "Si el autobús fuera más rápido, dejaría el carro en casa.",
     "altAnswers": [
      "Si el autobús fuera más rápido, dejaría el auto en casa.",
      "Si el bus fuera más rápido, dejaría el carro en casa.",
      "Si el autobús fuera más rápido, dejaría el coche en casa.",
      "Si el bus fuera más rápido, dejaría el coche en casa."
     ],
     "explanation": "Hablamos de ahora, en general: fuera + dejaría."
    },
    "18": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "If my phone worked, I would call a taxi.",
     "answer": "Si mi celular funcionara, llamaría a un taxi.",
     "altAnswers": [
      "Si mi teléfono funcionara, llamaría a un taxi.",
      "Si mi celular funcionara, pediría un taxi.",
      "Si mi móvil funcionara, llamaría a un taxi.",
      "Si mi móvil funcionara, pediría un taxi."
     ],
     "explanation": "Ahora no funciona: funcionara + llamaría."
    },
    "19": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "If my phone had worked last night, I would have called a taxi.",
     "answer": "Si mi celular hubiera funcionado anoche, habría llamado a un taxi.",
     "altAnswers": [
      "Si mi teléfono hubiera funcionado anoche, habría llamado a un taxi.",
      "Si anoche mi celular hubiera funcionado, habría llamado a un taxi.",
      "Si mi celular hubiera funcionado anoche, hubiera llamado a un taxi.",
      "Si mi móvil hubiera funcionado anoche, habría llamado a un taxi.",
      "Si anoche mi móvil hubiera funcionado, habría llamado a un taxi.",
      "Si mi móvil hubiera funcionado anoche, hubiera llamado a un taxi."
     ],
     "explanation": "«Anoche» marca el pasado: hubiera funcionado + habría llamado."
    }
   }
  }
 },
 "b2d-circuito-participios-habria": {
  "exercises": {
   "replace": {
    "17": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "If you (informal) had put the milk in the fridge, it wouldn't have gone off.",
     "answer": "Si hubieras puesto la leche en el refrigerador, no se habría estropeado.",
     "altAnswers": [
      "Si hubieras puesto la leche en el refrigerador, no se habría echado a perder.",
      "Si hubieras puesto la leche en la heladera, no se habría echado a perder.",
      "Si hubieras puesto la leche en la nevera, no se habría estropeado.",
      "Si hubieras puesto la leche en la nevera, no se habría echado a perder."
     ],
     "explanation": "Participio irregular de poner: puesto (no «ponido»)."
    }
   }
  }
 },
 "b2d-pares-mixtas": {
  "exercises": {
   "replace": {
    "14": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Corrige la frase.",
     "source": "Si hubiéramos comprado el departamento en 2010, ahora habría valido el doble.",
     "answer": "Si hubiéramos comprado el departamento en 2010, ahora valdría el doble.",
     "altAnswers": [
      "Si hubiéramos comprado el departamento en 2010, valdría el doble ahora.",
      "Si hubiéramos comprado el apartamento en 2010, ahora valdría el doble.",
      "Si hubiéramos comprado el piso en 2010, ahora valdría el doble.",
      "Si hubiéramos comprado el piso en 2010, valdría el doble ahora."
     ],
     "explanation": "La compra es pasada, pero el valor es de «ahora»: condicional simple de valer, valdría (irregular). «Habría valido» choca con «ahora»."
    }
   }
  }
 },
 "b2-vocabulary-practice-4-part-2": {
  "exercises": {
   "replace": {
    "9": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "Con unas lentes de ___, el museo superpone información sobre los cuadros.",
     "answer": "realidad aumentada",
     "en": "With [augmented reality] glasses, the museum overlays information on the paintings.",
     "explanation": "La realidad aumentada superpone elementos digitales al mundo real; la realidad virtual sustituye el entorno entero."
    }
   }
  }
 },
 "b2r-word-web-technology-ai": {
  "exercises": {
   "replace": {
    "1": {
     "type": "multi-select",
     "question": "¿Qué frases son correctas?",
     "options": [
      "Es importante que actualices el software.",
      "Si no tuviera celular, estaría más tranquilo.",
      "Cambia tu contraseña antes de que sea tarde.",
      "La app que descargué no funcionara."
     ],
     "correctIndexes": [
      0,
      1,
      2
     ],
     "explanation": "Si la app es concreta y ya la descargué, la relativa va en indicativo: «no funcionaba». «No funcionara» es subjuntivo sin motivo."
    }
   }
  }
 },
 "b2r-dialogue-regrets": {
  "exercises": {
   "replace": {
    "8": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "—Si hubiera revisado el carro, no se me ___ en la autopista. —Ya te lo dije.",
     "answer": "habría averiado",
     "en": "—If I had checked the car, it [wouldn't have broken down] on me on the motorway. —I told you so.",
     "altAnswers": [
      "hubiera averiado",
      "habría estropeado",
      "habría descompuesto"
     ],
     "explanation": "Consecuencia pasada: se me habría averiado."
    },
    "17": {
     "type": "speak",
     "text": "Si hubiera comprado el departamento, ahora estaría pagando una hipoteca enorme.",
     "prompt": "Dilo en español: \"If I had bought the apartment, I would be paying a huge mortgage now\"",
     "altAnswers": [
      "Si hubiera comprado el apartamento, ahora estaría pagando una hipoteca enorme.",
      "Si hubiera comprado el departamento, estaría pagando una hipoteca enorme ahora.",
      "Si hubiera comprado el piso, ahora estaría pagando una hipoteca enorme.",
      "Si hubiera comprado el piso, estaría pagando una hipoteca enorme ahora."
     ],
     "explanation": "Una forma de decirlo: «Si hubiera comprado el departamento, ahora estaría pagando una hipoteca enorme». Compra pasada, efecto actual: estaría pagando."
    },
    "10": {
     "type": "multiple-choice",
     "question": "—Perdí el vuelo. —«Si ___ un taxi, habrías llegado.»",
     "options": [
      "hubieras tomado",
      "tomaras",
      "habrías tomado",
      "tomabas"
     ],
     "correctIndex": 0,
     "explanation": "Ya pasó: si + pluscuamperfecto de subjuntivo."
    }
   }
  }
 },
 "b2r-word-web-life-decisions": {},
 "b2d-dictado-irreal-pasado": {
  "exercises": {
   "replace": {
    "15": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "They should have called the plumber yesterday.",
     "answer": "Deberían haber llamado al plomero ayer.",
     "altAnswers": [
      "Tendrían que haber llamado al plomero ayer.",
      "Ayer deberían haber llamado al plomero.",
      "Deberían haber llamado al fontanero ayer.",
      "Tendrían que haber llamado al fontanero ayer.",
      "Ayer deberían haber llamado al fontanero."
     ],
     "explanation": "Deberían haber llamado: reproche sobre el pasado."
    },
    "26": {
     "type": "speak",
     "text": "Deberían haber llamado al plomero ayer.",
     "prompt": "Dilo en español: \"They should have called the plumber yesterday\"",
     "altAnswers": [
      "Tendrían que haber llamado al plomero ayer.",
      "Ayer deberían haber llamado al plomero.",
      "Deberían haber llamado al fontanero ayer.",
      "Tendrían que haber llamado al fontanero ayer.",
      "Ayer deberían haber llamado al fontanero."
     ],
     "explanation": "Una forma de decirlo: «Deberían haber llamado al plomero ayer». Deberían haber llamado: reproche sobre el pasado."
    }
   }
  }
 },
 "b2d-rep-mezcla-traduccion": {
  "exercises": {
   "replace": {
    "14": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Corrige la frase.",
     "source": "Necesitamos un departamento que tiene balcón.",
     "answer": "Necesitamos un departamento que tenga balcón.",
     "altAnswers": [
      "Necesitamos un apartamento que tenga balcón.",
      "Necesitamos un departamento que tenga un balcón.",
      "Necesitamos un piso que tenga balcón.",
      "Necesitamos un piso que tenga un balcón."
     ],
     "explanation": "Todavía no tenemos ese departamento: antecedente desconocido, relativa en subjuntivo (tenga)."
    },
    "2": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Corrige la frase.",
     "source": "Es la chica que salgo con ella.",
     "answer": "Es la chica con la que salgo.",
     "altAnswers": [
      "Es la chica con quien salgo.",
      "Ella es la chica con la que salgo."
     ],
     "explanation": "La preposición va delante del relativo: con la que (o con quien). «Que… con ella» calca la estructura inglesa."
    },
    "11": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "That's the woman I work with.",
     "answer": "Esa es la mujer con la que trabajo.",
     "altAnswers": [
      "Es la mujer con la que trabajo.",
      "Esa es la mujer con quien trabajo.",
      "Es la mujer con quien trabajo.",
      "Esa es la señora con la que trabajo."
     ],
     "explanation": "En español la preposición nunca queda al final: con la que trabajo."
    },
    "21": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "Esa es la empresa para la ___ trabajo.",
     "answer": "cual",
     "altAnswers": [
      "que"
     ],
     "en": "That's the company [which] I work for.",
     "explanation": "Para la cual (o para la que): la preposición va delante y el artículo concuerda con empresa."
    },
    "24": {
     "type": "word-order",
     "prompt": "Ordena las palabras.",
     "words": [
      "Me",
      "dijo",
      "que",
      "quería",
      "ir",
      "con",
      "ellos"
     ],
     "translation": "He told me he wanted to go with them",
     "explanation": "«Quiero ir» contado en pasado → quería."
    },
    "26": {
     "type": "multiple-choice",
     "question": "«Is that the girl you talked to?» (tú)",
     "options": [
      "¿Es la chica con la que hablaste?",
      "¿Es la chica que hablaste con ella?",
      "¿Es la chica la que hablaste con?",
      "¿Es la chica que hablaste?"
     ],
     "correctIndex": 0,
     "explanation": "La preposición va delante del relativo: con la que hablaste. Nunca queda al final ni se repite con «ella»."
    }
   }
  },
  "sections": {
   "0": {
    "body": [
     "Recuerda la regla: no traduzcas palabra por palabra; busca la estructura española. The woman I work with → la mujer con la que trabajo (la preposición va delante). As if → como si + imperfecto de subjuntivo. I wish → ojalá + subjuntivo. When / as soon as + futuro → cuando / en cuanto + presente de subjuntivo. If + had → si + pluscuamperfecto de subjuntivo, nunca condicional detrás de si.",
     "Por qué fallan los calcos: el inglés marca el futuro o la hipótesis en el verbo (will, would); el español lo marca con el modo subjuntivo en la subordinada."
    ]
   }
  }
 },
 "b2d-rep-imperfecto-cuento": {
  "exercises": {
   "replace": {
    "12": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "My boss (a woman) asked me to turn off my phone during meetings.",
     "answer": "Mi jefa me pidió que apagara el celular durante las reuniones.",
     "altAnswers": [
      "Mi jefa me pidió que apagara el teléfono durante las reuniones.",
      "Mi jefa me pidió que apagara el móvil durante las reuniones."
     ],
     "explanation": "Pedir que + imperfecto de subjuntivo (apagara) tras un pasado."
    }
   }
  }
 },
 "b2r-word-web-technology-ai-part-2": {
  "exercises": {
   "replace": {
    "1": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "Los hackers ___ los datos de miles de usuarios.",
     "answer": "robaron",
     "altAnswers": [],
     "en": "The hackers [stole] the data of thousands of users.",
     "explanation": "robar → robaron: pretérito, ellos."
    },
    "7": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "A team of engineers designed the algorithm.",
     "answer": "Un equipo de ingenieros diseñó el algoritmo.",
     "altAnswers": [
      "Un equipo de ingenieras diseñó el algoritmo.",
      "Un equipo de ingenieros creó el algoritmo.",
      "Un equipo de ingenieros desarrolló el algoritmo.",
      "El algoritmo lo diseñó un equipo de ingenieros."
     ],
     "explanation": "Diseñar en pretérito concuerda con equipo (singular): diseñó."
    }
   }
  }
 },
 "b2r-tema-volver-a-la-rutina": {
  "exercises": {
   "replace": {
    "1": {
     "type": "speak",
     "text": "Antes del viaje, nunca había pensado que la Tierra era tan frágil.",
     "prompt": "Dilo en español: \"Before the trip, I had never thought that the Earth was so fragile\"",
     "altAnswers": [
      "Antes del viaje, nunca había pensado que la Tierra fuera tan frágil.",
      "Antes del viaje nunca había pensado que la Tierra era tan frágil."
     ],
     "explanation": "Una forma de decirlo: «Antes del viaje, nunca había pensado que la Tierra era tan frágil.». pensar → había pensado: pluscuamperfecto, yo, para una acción anterior a otro momento pasado (antes del viaje)."
    }
   }
  }
 },
 "b2r-tema-tradiciones-rurales": {
  "exercises": {
   "replace": {
    "4": {
     "type": "multi-select",
     "question": "¿Qué frases son correctas?",
     "options": [
      "Su hija decidió continuar la tradición.",
      "No hay nadie en el pueblo que siga haciéndolo.",
      "Ojalá los jóvenes valoraran más estas costumbres.",
      "Ojalá que no se pierde esta tradición."
     ],
     "correctIndexes": [
      0,
      1,
      2
     ],
     "explanation": "«Ojalá que no se pierde» es incorrecta: ojalá exige subjuntivo (ojalá que no se pierda)."
    }
   }
  }
 },
 "a2d-pattern-future-endings": {
  "exercises": {
   "replace": {
    "3": {
     "type": "speak",
     "text": "Ellos tomarán el tren de las ocho.",
     "prompt": "Say it in Spanish: \"They will catch the eight o'clock train\"",
     "altAnswers": [
      "Ellos agarrarán el tren de las ocho.",
      "Ellos cogerán el tren de las ocho."
     ],
     "explanation": "One way to say it: \"Ellos tomarán el tren de las ocho\". tomar → tomarán: future, ellos. Infinitive + -án. In Spain people also say cogerán el tren."
    }
   }
  }
 },
 "b1d-pares-infinitivo-que": {
  "exercises": {
   "replace": {
    "7": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "Esperamos ___ el tren de las ocho.",
     "answer": "tomar",
     "en": "We hope [to catch] the eight o'clock train.",
     "altAnswers": [
      "agarrar",
      "coger"
     ],
     "explanation": "Mismo sujeto (nosotros): infinitivo."
    }
   }
  }
 },
 "b2d-elige-para-que-para": {
  "exercises": {
   "replace": {
    "1": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "Te despierto temprano para que ___ el tren.",
     "answer": "tomes",
     "altAnswers": [
      "pilles",
      "cojas"
     ],
     "en": "I wake you up early so that you [catch] the train.",
     "explanation": "tomar → tomes: present subjunctive, tú (para que). Yo despierto, tú tomas: sujeto distinto → para que + subjuntivo."
    }
   }
  }
 },
 "b2d-pares-quiero-queria": {
  "exercises": {
   "replace": {
    "19": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "Sería mejor que ___ un taxi.",
     "answer": "tomáramos",
     "en": "It would be better if we [took] a taxi.",
     "altAnswers": [
      "cogiéramos"
     ],
     "explanation": "Condicional → imperfecto de subjuntivo."
    }
   }
  }
 },
 "si-clauses-simple-1": {
  "exercises": {
   "replace": {
    "11": {
     "type": "speak",
     "text": "Si salimos ahora, tomaremos el tren.",
     "prompt": "Dilo en español: \"If we leave now, we'll catch the train\"",
     "altAnswers": [
      "Si salimos ahora, alcanzaremos el tren.",
      "Si salimos ahora, cogeremos el tren."
     ],
     "explanation": "Una forma de decirlo: «Si salimos ahora, tomaremos el tren». Si + presente (salimos), nunca «si saldremos»."
    },
    "15": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "Si pierdes el autobús, ___ un taxi.",
     "answer": "toma",
     "en": "If you miss the bus, [take] a taxi. (tú)",
     "altAnswers": [
      "coge"
     ],
     "explanation": "Si + presente (pierdes), + mandato de tú: toma."
    }
   }
  },
  "sections": {
   "0": {
    "check": [
     {
      "type": "multiple-choice",
      "question": "«Si ___ el autobús de las ocho, llegaremos a tiempo.» (tomar, nosotros)",
      "options": [
       "tomamos",
       "tomaremos",
       "tomemos",
       "tomábamos"
      ],
      "correctIndex": 0,
      "explanation": "Condición real → si + presente de indicativo: tomamos. «Tomaremos» es futuro (va en el resultado, no tras si), «tomemos» es subjuntivo y «tomábamos» es imperfecto."
     },
     {
      "type": "fill-blank",
      "prompt": "¿Cómo se dicen en español las palabras en negrita?",
      "sentence": "Si ___ tiempo, llámame.",
      "answer": "tienes",
      "en": "If you [have] time, call me. (tú)",
      "explanation": "tener → tienes: present indicative after si, tú. La cláusula con \"si\" para condiciones reales usa el presente indicativo: tienes."
     }
    ]
   }
  }
 },
 "b1d-rep-si-presente": {
  "exercises": {
   "replace": {
    "0": {
     "type": "speak",
     "text": "Si tomamos el tren, llegamos a las nueve.",
     "prompt": "Dilo en español: \"If we catch the train, we arrive at nine\"",
     "altAnswers": [
      "Si agarramos el tren, llegamos a las nueve.",
      "Si cogemos el tren, llegamos a las nueve."
     ],
     "explanation": "Una forma de decirlo: «Si tomamos el tren, llegamos a las nueve». tomar → tomamos: present indicative after 'si'. Si + presente. En España también se dice coger el tren."
    },
    "1": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "Si tomamos el tren, ___ a las nueve.",
     "answer": "llegaremos",
     "en": "If we catch the train, we['ll arrive] at nine.",
     "explanation": "llegar → llegaremos: future, nosotros (real condition). El futuro va en el resultado, nunca en la parte de «si»: llegaremos."
    }
   }
  },
  "sections": {
   "0": {
    "body": [
     "Recuerda la regla: si + presente de indicativo, y luego uno de tres finales. Presente para lo que suele pasar (Si llueve, me quedo en casa), futuro para una ocasión concreta (Si llueve mañana, me quedaré en casa) o mandato para una instrucción (Si llueve, lleva el paraguas). Nunca futuro ni subjuntivo después del si de condición.",
     "Construye cada frase en dos pasos: primero la condición en presente, después elige el final según lo que quieras hacer: describir, anunciar o mandar."
    ]
   }
  }
 },
 "b1d-rep-si-cadena": {
  "exercises": {
   "replace": {
    "8": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "If the train is late, we'll take a taxi.",
     "answer": "Si el tren llega tarde, tomaremos un taxi.",
     "altAnswers": [
      "Si el tren se retrasa, tomaremos un taxi.",
      "Si el tren llega tarde, cogeremos un taxi.",
      "Si el tren se retrasa, cogeremos un taxi."
     ],
     "explanation": "Si + presente + futuro; nunca «si llegará»."
    }
   }
  }
 },
 "b2d-dictado-imperfecto-subjuntivo": {
  "exercises": {
   "replace": {
    "12": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "Sería mejor que ___ un taxi; ya es tarde.",
     "answer": "tomáramos",
     "en": "It would be better for us [to take] a taxi; it's already late.",
     "altAnswers": [
      "cogiéramos"
     ],
     "explanation": "Tras un condicional (sería mejor) va imperfecto de subjuntivo, con tilde: tomáramos."
    }
   }
  }
 },
 "b2d-pares-mixtas-part-2": {
  "exercises": {
   "replace": {
    "1": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "Si ___ el tren, ya estaríamos en casa.",
     "answer": "hubiéramos tomado",
     "altAnswers": [
      "hubiéramos cogido",
      "hubiésemos tomado",
      "hubiéramos alcanzado"
     ],
     "en": "If we [had caught] the train, we'd already be home.",
     "explanation": "tomar → hubiéramos tomado: pluscuamperfecto de subjuntivo, nosotros. Perder el tren ocurrió antes, así que la condición va en pluscuamperfecto de subjuntivo. «Ya estaríamos» describe ahora."
    },
    "17": {
     "type": "speak",
     "text": "Si hubiéramos tomado el tren, ya estaríamos en casa.",
     "prompt": "Dilo en español: \"If we had caught the train, we'd already be home\"",
     "altAnswers": [
      "Si hubiéramos cogido el tren, ya estaríamos en casa.",
      "Si hubiésemos tomado el tren, ya estaríamos en casa."
     ],
     "explanation": "Una forma de decirlo: «Si hubiéramos tomado el tren, ya estaríamos en casa.». La condición es pasada (hubiéramos tomado) y el resultado es de ahora (ya estaríamos)."
    }
   }
  }
 }
};
