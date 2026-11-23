// Synced from cheneygross-afk/lengo:src/lib/lessons/es-redesign/b2-unit7-latam.ts by scripts/sync-content.mjs -- edit it there, not here.
// Generated: Latin American wording for B2 Unit 7. B2_UNIT7_LATAM adds
// accepted answers (papás, carro, auto, celular, departamento, en la noche)
// next to the Spain wording; B2_UNIT7_SWAP makes the Latin American word the
// main one where the lesson showed the Spain word (departamento, carro,
// celular, computadora, mesero, refrigerador, dólares), keeping the Spain
// answer accepted. It also gives the vosotros items an ustedes answer
// (vosotros still accepted) and replaces items that used later grammar: the
// imperfect and perfect subjunctive, quienquiera que, the passive with ser and
// reported speech. Content only.
import type { LessonPatch } from "./patch";
export const B2_UNIT7_LATAM: Record<string, { alts?: Record<number, string[]>; checkAlts?: Record<number, Record<number, string[]>> }> = {
 "subjunctive-adjective-clauses-1": {
  "alts": {
   "19": [
    "¿Hay algún bus que vaya directo al aeropuerto?",
    "¿Hay un bus que vaya directo al aeropuerto?",
    "¿Hay algún bus que vaya directamente al aeropuerto?",
    "¿Hay un bus que vaya directamente al aeropuerto?"
   ]
  }
 },
 "b2d-pares-tengo-busco": {
  "alts": {
   "18": [
    "¿Hay algún bus que vaya directamente al aeropuerto?",
    "¿Hay un bus que vaya directamente al aeropuerto?",
    "¿Hay algún bus que vaya directo al aeropuerto?",
    "¿Hay un bus que vaya directo al aeropuerto?"
   ]
  }
 },
 "subjunctive-adjective-clauses-drill-2": {
  "alts": {
   "11": [
    "¿Hay algún autobús que vaya al aeropuerto en la noche?",
    "¿Hay algún bus que vaya al aeropuerto en la noche?",
    "¿Hay algún bus que vaya al aeropuerto de noche?"
   ]
  }
 },
 "subjunctive-adjective-clauses-drill-3": {
  "alts": {
   "2": [
    "Mis papás compraron una casa que tiene cuatro dormitorios."
   ]
  }
 },
 "b2r-transform-infinitive-que": {
  "alts": {
   "18": [
    "Mis papás trabajan mucho para que no nos falte nada."
   ]
  }
 },
 "b2d-rep-adverbiales-finalidad": {
  "alts": {
   "2": [
    "Entré sin que mis papás me oyeran."
   ]
  }
 },
 "b2d-habla-de-ti-pareja-ideal": {
  "alts": {
   "14": [
    "Quiero unos vecinos que no hagan ruido en la noche.",
    "Quiero vecinos que no hagan ruido en la noche."
   ]
  }
 }
};
export const B2_UNIT7_SWAP: Record<string, LessonPatch> = {
 "subjunctive-adjective-clauses-1": {
  "exercises": {
   "replace": {
    "1": {
     "type": "multiple-choice",
     "question": "¿Cuál es correcta?",
     "options": [
      "Tengo un carro que consume poco.",
      "Tengo un carro que consuma poco.",
      "Busco un carro que consume poco.",
      "Busco un carro que consumo poco."
     ],
     "correctIndex": 0,
     "explanation": "«Tengo un carro» se refiere a algo concreto y conocido: indicativo, consume. «Tengo un carro que consuma» usa subjuntivo sin motivo, y con «busco» (algo aún no encontrado) haría falta subjuntivo, no «consume» ni «consumo»."
    },
    "13": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "Quien ___ a vivir en este departamento, tendrá unos vecinos encantadores.",
     "answer": "venga",
     "en": "Whoever [comes] to live in this apartment will have lovely neighbors.",
     "explanation": "Quien (sin antecedente) presenta una posibilidad abierta, no una persona concreta: subjuntivo (venga)."
    }
   }
  },
  "sections": {
   "0": {
    "examples": [
     {
      "es": "Tengo un amigo que habla ruso.",
      "en": "I have a friend who speaks Russian. (existe: indicativo)"
     },
     {
      "es": "Busco un amigo que hable ruso.",
      "en": "I'm looking for a friend who speaks Russian. (todavía no sé quién será: subjuntivo)"
     },
     {
      "es": "El departamento que alquilamos tiene terraza.",
      "en": "The apartment we're renting has a terrace. (un departamento concreto: indicativo)"
     },
     {
      "es": "Queremos un departamento que esté cerca del metro.",
      "en": "We want an apartment that's close to the metro. (cualquier departamento que cumpla eso: subjuntivo)"
     }
    ]
   },
   "2": {
    "body": [
     "Quien + subjuntivo (sin antecedente) y cualquier + sustantivo + que expresan \"whoever\" o \"whichever\" y normalmente llevan subjuntivo, porque se refieren a una posibilidad abierta, no a una persona específica. Con indicativo hablan de cualquier persona en general, como un hecho: \"Quien lo conoce sabe que es honesto\"."
    ],
    "examples": [
     {
      "es": "Quien gane se lleva el premio.",
      "en": "Whoever wins gets the prize."
     },
     {
      "es": "Cualquier decisión que tomes, te apoyaré.",
      "en": "Whatever decision you make, I'll support you."
     }
    ]
   }
  }
 },
 "b2d-patron-busco-alguien-que": {
  "exercises": {
   "replace": {
    "0": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "Busco un carro que no ___ mucha gasolina.",
     "answer": "gaste",
     "altAnswers": [
      "consuma",
      "use"
     ],
     "en": "I'm looking for a car that [doesn't use] much gas.",
     "explanation": "gastar → gaste: present subjunctive (unknown antecedent). Carro aún sin elegir → subjuntivo. En los verbos en -ar, el subjuntivo cambia la a por e: gasta → gaste."
    },
    "12": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "We're looking for a flatmate who doesn't mind that we have two cats.",
     "answer": "Buscamos un compañero de departamento al que no le importe que tengamos dos gatos.",
     "altAnswers": [
      "Buscamos un compañero de departamento a quien no le importe que tengamos dos gatos.",
      "Buscamos una compañera de departamento a la que no le importe que tengamos dos gatos.",
      "Buscamos una compañera de departamento a quien no le importe que tengamos dos gatos.",
      "Buscamos un compañero de piso al que no le importe que tengamos dos gatos.",
      "Buscamos un compañero de piso a quien no le importe que tengamos dos gatos.",
      "Buscamos una compañera de piso a la que no le importe que tengamos dos gatos.",
      "Buscamos una compañera de piso a quien no le importe que tengamos dos gatos."
     ],
     "explanation": "Dos subjuntivos: importe (antecedente desconocido) y tengamos (después de «no le importe que»)."
    },
    "13": {
     "type": "speak",
     "text": "Busco un compañero de departamento que no fume.",
     "prompt": "Dilo en español: \"I'm looking for a flatmate who doesn't smoke\"",
     "explanation": "Una forma de decirlo: «Busco un compañero de departamento que no fume». cualquier persona que cumpla eso",
     "altAnswers": [
      "Busco un compañero de piso que no fume."
     ]
    }
   }
  },
  "sections": {
   "0": {
    "body": [
     "Recuerda la regla: si buscas, necesitas o quieres algo o a alguien que todavía no conoces, la descripción (que…, donde…) va en subjuntivo. Si ya existe y lo conoces, va en indicativo: Busco un departamento que tenga terraza / Tengo un departamento que tiene terraza.",
     "¿Por qué? Lo que buscas solo existe como idea: describes las condiciones que debe cumplir, no una cosa real."
    ],
    "examples": [
     {
      "es": "Busco un compañero de departamento que no fume.",
      "en": "I'm looking for a flatmate who doesn't smoke. (cualquier persona que cumpla eso)"
     },
     {
      "es": "Quiero un barrio donde los niños puedan jugar en la calle.",
      "en": "I want a neighbourhood where kids can play in the street. (donde + subjuntivo: lugar aún desconocido)"
     }
    ]
   }
  }
 },
 "b2d-patron-busco-alguien-que-part-2": {
  "exercises": {
   "replace": {
    "5": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "We need a mechanic who knows German cars.",
     "answer": "Necesitamos un mecánico que conozca los carros alemanes.",
     "altAnswers": [
      "Necesitamos un mecánico que conozca los autos alemanes.",
      "Necesitamos un mecánico que entienda de carros alemanes.",
      "Necesitamos a un mecánico que conozca los carros alemanes.",
      "Necesitamos un mecánico que conozca los coches alemanes.",
      "Necesitamos un mecánico que entienda de coches alemanes.",
      "Necesitamos a un mecánico que conozca los coches alemanes."
     ],
     "explanation": "Necesitar + antecedente desconocido → subjuntivo (conozca)."
    },
    "8": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "Busco un plan de celular que ___ datos ilimitados.",
     "answer": "incluya",
     "en": "I'm looking for a phone plan that [includes] unlimited data.",
     "explanation": "Aún no has elegido el plan: subjuntivo (incluya). Error típico: «incluye»."
    },
    "15": {
     "type": "speak",
     "text": "Busco un compañero de departamento que no fume.",
     "prompt": "Dilo en español: \"I'm looking for a flatmate who doesn't smoke\"",
     "explanation": "Una forma de decirlo: «Busco un compañero de departamento que no fume». cualquier persona que cumpla eso",
     "altAnswers": [
      "Busco un compañero de piso que no fume."
     ]
    },
    "17": {
     "type": "speak",
     "text": "Busco un departamento que esté cerca del metro.",
     "prompt": "Dilo en español: \"I'm looking for an apartment that's near the subway\"",
     "explanation": "Una forma de decirlo: «Busco un departamento que esté cerca del metro». estar → esté: present subjunctive (unknown antecedent). Todavía no tienes ese departamento: antecedente desconocido → subjuntivo (esté). La ubicación va con estar, no con ser.",
     "altAnswers": [
      "Busco un piso que esté cerca del metro."
     ]
    }
   }
  },
  "sections": {
   "0": {
    "examples": [
     {
      "es": "Busco un compañero de departamento que no fume.",
      "en": "I'm looking for a flatmate who doesn't smoke. (cualquier persona que cumpla eso)"
     },
     {
      "es": "Necesitamos a alguien que hable chino.",
      "en": "We need someone who speaks Chinese. (a personal delante de alguien)"
     }
    ],
    "check": [
     {
      "type": "fill-blank",
      "prompt": "¿Cómo se dicen en español las palabras en negrita?",
      "sentence": "Busco un departamento que ___ cerca del metro.",
      "answer": "esté",
      "en": "I'm looking for an apartment that['s] near the subway.",
      "explanation": "estar → esté: present subjunctive (unknown antecedent). Todavía no tienes ese departamento: antecedente desconocido → subjuntivo (esté). La ubicación va con estar, no con ser."
     }
    ]
   }
  }
 },
 "b2d-pares-tengo-busco": {
  "exercises": {
   "replace": {
    "21": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "My parents want an apartment that has a lift.",
     "answer": "Mis padres quieren un departamento que tenga ascensor.",
     "altAnswers": [
      "Mis padres quieren un apartamento que tenga ascensor.",
      "Mis padres quieren un departamento que tenga elevador.",
      "Mis padres quieren un apartamento que tenga elevador.",
      "Mis padres quieren un piso que tenga ascensor.",
      "Mis padres quieren un piso que tenga elevador.",
      "Mis papás quieren un departamento que tenga ascensor.",
      "Mis papás quieren un departamento que tenga elevador."
     ],
     "explanation": "Querer + departamento aún desconocido → subjuntivo (tenga)."
    },
    "22": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Cambia «quieren» por «viven en».",
     "source": "Mis padres quieren un departamento que tenga ascensor.",
     "answer": "Mis padres viven en un departamento que tiene ascensor.",
     "explanation": "Si viven en él, el departamento es real → indicativo (tiene). Con «quieren» era un departamento imaginado → subjuntivo (tenga).",
     "altAnswers": [
      "Mis padres viven en un piso que tiene ascensor.",
      "Mis papás viven en un departamento que tiene ascensor.",
      "Mis papás viven en un departamento que tiene elevador."
     ]
    },
    "25": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "I have a friend who knows how to fix any computer, but I need someone who knows how to design websites.",
     "answer": "Tengo un amigo que sabe arreglar cualquier computadora, pero necesito a alguien que sepa diseñar páginas web.",
     "altAnswers": [
      "Tengo una amiga que sabe arreglar cualquier computadora, pero necesito a alguien que sepa diseñar páginas web.",
      "Tengo un amigo que sabe arreglar cualquier computadora, pero necesito a alguien que sepa diseñar sitios web.",
      "Tengo un amigo que sabe arreglar cualquier ordenador, pero necesito a alguien que sepa diseñar páginas web.",
      "Tengo una amiga que sabe arreglar cualquier ordenador, pero necesito a alguien que sepa diseñar páginas web.",
      "Tengo un amigo que sabe arreglar cualquier ordenador, pero necesito a alguien que sepa diseñar sitios web."
     ],
     "explanation": "El amigo existe (sabe); la otra persona aún no (sepa)."
    }
   }
  },
  "sections": {
   "0": {
    "examples": [
     {
      "es": "Conozco un bar que abre hasta las tres.",
      "en": "I know a bar that's open until three. (lo conozco: indicativo)"
     },
     {
      "es": "¿Conoces un bar que abra hasta las tres?",
      "en": "Do you know a bar that's open until three? (no sé si existe: subjuntivo)"
     },
     {
      "es": "No encuentro las lentes que compré ayer.",
      "en": "I can't find the glasses I bought yesterday. (negación, pero lentes concretas: indicativo)"
     }
    ]
   }
  }
 },
 "subjunctive-adjective-clauses-drill-1": {
  "exercises": {
   "replace": {
    "1": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce la oración al español.",
     "source": "She's looking for a roommate who doesn't smoke.",
     "answer": "Ella busca una compañera de cuarto que no fume.",
     "altAnswers": [
      "Ella busca un compañero de cuarto que no fume.",
      "Ella está buscando una compañera de cuarto que no fume.",
      "Ella busca una compañera de departamento que no fume.",
      "Ella busca un compañero de departamento que no fume.",
      "Ella busca una compañera de piso que no fume.",
      "Ella busca un compañero de piso que no fume."
     ],
     "explanation": "Como todavía no se sabe si existe tal compañero/a de cuarto, se usa el subjuntivo: fume."
    }
   }
  },
  "sections": {
   "0": {
    "body": [
     "Recuerda la regla: en una relativa, el modo depende del antecedente. Si el antecedente es indefinido o desconocido (algo que buscas, quieres o necesitas y todavía no has identificado), el verbo va en subjuntivo: busco un departamento que tenga terraza.",
     "Por qué: con el subjuntivo el hablante no afirma que ese departamento exista; solo describe cómo debería ser. Con «que tiene», hablaría de un departamento concreto que ya conoce."
    ]
   }
  }
 },
 "subjunctive-adjective-clauses-drill-1-part-2": {
  "exercises": {
   "replace": {
    "2": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Cambia «Tengo» por «Busco» y adapta el verbo.",
     "source": "Tengo un departamento que tiene terraza.",
     "answer": "Busco un departamento que tenga terraza.",
     "altAnswers": [
      "Busco un apartamento que tenga terraza.",
      "Busco un piso que tenga terraza."
     ],
     "explanation": "Con tengo el departamento existe y es concreto (indicativo: tiene); con busco aún no lo has encontrado, así que la relativa pasa a subjuntivo: tenga."
    },
    "8": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "The woman who sold me the ticket was very kind.",
     "answer": "La mujer que me vendió el boleto fue muy amable.",
     "altAnswers": [
      "La mujer que me vendió el boleto era muy amable.",
      "La señora que me vendió el boleto fue muy amable.",
      "La mujer que me vendió la entrada fue muy amable.",
      "La mujer que me vendió el billete fue muy amable.",
      "La mujer que me vendió el billete era muy amable.",
      "La señora que me vendió el billete fue muy amable."
     ],
     "explanation": "Antecedente específico y ya identificado: indicativo (vendió)."
    }
   }
  }
 },
 "subjunctive-adjective-clauses-drill-2": {
  "exercises": {
   "replace": {
    "5": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Transforma en una pregunta con «¿Conoces a alguien que…?».",
     "source": "Mi primo arregla computadoras.",
     "answer": "¿Conoces a alguien que arregle computadoras?",
     "altAnswers": [
      "¿Conoces a alguien que repare computadoras?",
      "¿Conoces a alguien que arregle ordenadores?",
      "¿Conoces a alguien que repare ordenadores?"
     ],
     "explanation": "En una pregunta sobre si alguien existe, la relativa va en subjuntivo: arregle."
    },
    "7": {
     "type": "speak",
     "text": "No hay nada en el refrigerador que pueda comer.",
     "prompt": "Dilo en español: \"There's nothing in the fridge that I can eat\"",
     "altAnswers": [
      "No hay nada en la heladera que pueda comer.",
      "No hay nada en el refrigerador que yo pueda comer.",
      "No hay nada que pueda comer en el refrigerador.",
      "No hay nada en la nevera que pueda comer.",
      "No hay nada en el frigorífico que pueda comer.",
      "No hay nada en la nevera que yo pueda comer.",
      "No hay nada que pueda comer en la nevera."
     ],
     "explanation": "Una forma de decirlo: «No hay nada en el refrigerador que pueda comer». Antecedente negativo (nada): la relativa va en subjuntivo (pueda)."
    },
    "13": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "I'd like a phone that doesn't break easily.",
     "answer": "Quisiera un teléfono que no se rompa fácilmente.",
     "altAnswers": [
      "Quisiera un celular que no se rompa fácilmente.",
      "Quisiera un teléfono que no se rompa con facilidad.",
      "Me gustaría un celular que no se rompa fácilmente.",
      "Quiero un celular que no se rompa fácilmente.",
      "Quisiera un móvil que no se rompa fácilmente.",
      "Me gustaría un móvil que no se rompa fácilmente.",
      "Quiero un móvil que no se rompa fácilmente."
     ],
     "explanation": "Un teléfono ideal y aún no elegido: subjuntivo (rompa)."
    },
    "14": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "Does anyone here have a charger that fits this phone?",
     "answer": "¿Alguien aquí tiene un cargador que sirva para este celular?",
     "altAnswers": [
      "¿Alguien aquí tiene un cargador que sirva para este teléfono?",
      "¿Alguien aquí tiene un cargador que funcione con este celular?",
      "¿Alguien tiene aquí un cargador que sirva para este celular?",
      "¿Alguien aquí tiene un cargador que sirva para este móvil?",
      "¿Alguien aquí tiene un cargador que funcione con este móvil?",
      "¿Alguien tiene aquí un cargador que sirva para este móvil?"
     ],
     "explanation": "En una pregunta sobre un objeto no identificado, subjuntivo (sirva)."
    },
    "21": {
     "type": "word-order",
     "prompt": "Ordena las palabras.",
     "words": [
      "No",
      "hay",
      "nadie",
      "aquí",
      "que",
      "sepa",
      "manejar",
      "un",
      "tractor"
     ],
     "translation": "There's no one here who knows how to drive a tractor",
     "explanation": "Nadie es antecedente negativo y pide sepa (subjuntivo)."
    }
   }
  },
  "sections": {
   "1": {
    "examples": [
     {
      "es": "Necesito algo que me ayude a dormir.",
      "en": "I need something that will help me sleep."
     },
     {
      "es": "Quiero un carro que no consuma mucha gasolina.",
      "en": "I want a car that doesn't use much gas."
     }
    ]
   }
  }
 },
 "subjunctive-adjective-clauses-drill-3": {
  "exercises": {
   "replace": {
    "16": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Corrige la frase.",
     "source": "Encontré un departamento que sea perfecto para nosotros.",
     "answer": "Encontré un departamento que es perfecto para nosotros.",
     "altAnswers": [
      "Encontré un apartamento que es perfecto para nosotros.",
      "Encontré un piso que es perfecto para nosotros."
     ],
     "explanation": "Si ya lo encontraste, el departamento existe y es concreto: la relativa va en indicativo (es). Sea solo iría si todavía lo buscaras."
    },
    "1": {
     "type": "word-order",
     "prompt": "Ordena las palabras para formar una oración correcta.",
     "words": [
      "No",
      "conozco",
      "a",
      "nadie",
      "que",
      "viva",
      "en",
      "Japón"
     ],
     "translation": "I don't know anyone who lives in Japan.",
     "explanation": "«Nadie» es un antecedente negativo, así que el verbo va en subjuntivo: viva."
    },
    "15": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "He doesn't know anyone who works in Antarctica.",
     "answer": "No conoce a nadie que trabaje en la Antártida.",
     "altAnswers": [
      "No conoce a nadie que trabaje en la Antártica.",
      "Él no conoce a nadie que trabaje en la Antártida."
     ],
     "explanation": "Antecedente negativo (nadie): subjuntivo, trabaje."
    }
   }
  }
 },
 "b2r-contrast-antecedent": {
  "exercises": {
   "replace": {
    "0": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "Voy a comprar el carro que ___ en el escaparate ayer.",
     "answer": "vimos",
     "en": "I'm going to buy the car we [saw] in the shop window yesterday.",
     "explanation": "ver → vimos: preterite, nosotros (specific, known car). Un carro concreto que ya hemos visto → indicativo (vimos, indefinido)."
    },
    "1": {
     "type": "speak",
     "text": "Voy a comprar un carro que gaste poco.",
     "prompt": "Dilo en español: \"I'm going to buy a car that uses little fuel\"",
     "altAnswers": [
      "Voy a comprar un carro que consuma poco.",
      "Voy a comprar un coche que gaste poco.",
      "Voy a comprar un coche que consuma poco."
     ],
     "explanation": "Una forma de decirlo: «Voy a comprar un carro que gaste poco». gastar → gaste: present subjunctive (unspecified car). Cualquier carro con esa característica, aún sin elegir → subjuntivo (gaste)."
    },
    "21": {
     "type": "multiple-choice",
     "question": "¿Qué significa «Usaremos el método que funcione»?",
     "options": [
      "Uno que funcione; aún no sabemos cuál.",
      "Un método concreto que ya sabemos que funciona."
     ],
     "correctIndex": 0,
     "explanation": "El subjuntivo presenta el antecedente como desconocido: el que resulte funcionar. Para hablar de un método concreto que ya sabemos que funciona, diríamos «el método que funciona»."
    },
    "23": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "Order (tú) the dish the waiter recommended to us.",
     "answer": "Pide el plato que nos recomendó el mesero.",
     "altAnswers": [
      "Pide el plato que nos recomendó el camarero."
     ],
     "explanation": "Recomendación ya hecha, plato concreto → indicativo (recomendó)."
    },
    "24": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Cambia la frase: el mesero todavía no te ha dicho nada.",
     "source": "Pide el plato que te dice el mesero.",
     "answer": "Pide el plato que te diga el mesero.",
     "altAnswers": [
      "Pide el plato que te diga el camarero."
     ],
     "explanation": "Cambiando al subjuntivo, la recomendación pasa a ser futura y el plato, desconocido: el que te diga, sea cual sea. Con «dice» ya sabes qué plato es."
    },
    "27": {
     "type": "speak",
     "text": "Quiero un vestido que sea rojo.",
     "prompt": "Dilo en español: \"I want a dress that's red\"",
     "explanation": "Una forma de decirlo: «Quiero un vestido que sea rojo». any red dress will do"
    }
   }
  },
  "sections": {
   "0": {
    "examples": [
     {
      "es": "Quiero el vestido que es rojo.",
      "en": "I want the dress that is red. (uno concreto que ya he visto)"
     },
     {
      "es": "Quiero un vestido que sea rojo.",
      "en": "I want a dress that's red. (any red dress will do)"
     },
     {
      "es": "Haz lo que te dice tu madre.",
      "en": "Do what your mother tells you. (ya lo ha dicho)"
     },
     {
      "es": "Haz lo que te diga tu madre.",
      "en": "Do whatever your mother tells you. (lo dirá)"
     }
    ],
    "check": [
     {
      "type": "multiple-choice",
      "question": "«Pide lo que ___.» (cualquier cosa: el menú todavía no está decidido)",
      "options": [
       "quieras",
       "quieres",
       "querías",
       "querrás"
      ],
      "correctIndex": 0,
      "explanation": "«Lo que» + subjuntivo significa «cualquier cosa que»: «quieras». «Quieres» hablaría de algo concreto que ya sabemos; «querías» y «querrás» son indicativo en otros tiempos."
     },
     {
      "type": "fill-blank",
      "prompt": "¿Indicativo o subjuntivo?",
      "sentence": "Siéntense en la mesa que ___ libre; da igual cuál. (estar)",
      "answer": "esté",
      "explanation": "«Da igual cuál»: cualquier mesa que cumpla la condición → subjuntivo (esté). Con «la mesa que está libre» señalarías una mesa concreta."
     }
    ]
   }
  }
 },
 "b2r-transform-infinitive-que": {
  "exercises": {
   "replace": {
    "8": {
     "type": "speak",
     "text": "Ahorro dinero para comprarme un carro.",
     "prompt": "Dilo en español: \"I save money to buy a car\"",
     "altAnswers": [
      "Ahorro dinero para comprar un carro.",
      "Ahorro dinero para comprarme un auto.",
      "Ahorro dinero para comprar un auto.",
      "Ahorro dinero para comprarme un coche.",
      "Ahorro dinero para comprar un coche."
     ],
     "explanation": "Una forma de decirlo: «Ahorro dinero para comprarme un carro». Mismo sujeto (yo ahorro, yo compro) → para + infinitivo; «para que compre» sería un error."
    },
    "11": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "I always clean the kitchen before my flatmates get up.",
     "answer": "Siempre limpio la cocina antes de que se levanten mis compañeros de departamento.",
     "altAnswers": [
      "Siempre limpio la cocina antes de que mis compañeros de departamento se levanten.",
      "Limpio siempre la cocina antes de que se levanten mis compañeros de departamento.",
      "Siempre limpio la cocina antes de que se levanten mis compañeros de piso.",
      "Siempre limpio la cocina antes de que mis compañeros de piso se levanten.",
      "Limpio siempre la cocina antes de que se levanten mis compañeros de piso."
     ],
     "explanation": "Otro sujeto (mis compañeros) → antes de que + subjuntivo: se levanten."
    },
    "23": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "Apaga el horno antes de que se ___ la torta.",
     "answer": "queme",
     "en": "Turn off the oven before the cake [burns] (tú).",
     "explanation": "La torta es otro sujeto → antes de que + subjuntivo: queme."
    },
    "7": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Corrige la frase.",
     "source": "Les explico esto para que no repetir los mismos errores.",
     "answer": "Les explico esto para que no repitan los mismos errores.",
     "altAnswers": [
      "Se lo explico para que no repitan los mismos errores.",
      "Os lo explico para que no repitáis los mismos fallos.",
      "Les explico esto para que no repitan los mismos fallos."
     ],
     "explanation": "«Para que» nunca va con infinitivo: con otro sujeto (ustedes) necesita subjuntivo, repitan (e → i). Si fuera el mismo sujeto, sería «para no repetir»."
    }
   }
  },
  "sections": {
   "0": {
    "body": [
     "Recuerda la regla: mismo sujeto → preposición + infinitivo (para salir, antes de comer, sin decir). Distinto sujeto → conjunción + subjuntivo (para que salgas, antes de que comas, sin que digas).",
     "¿Por qué? El infinitivo no dice quién hace la acción, así que se entiende que es el sujeto de la oración principal. Si la hace otra persona, necesitas un verbo conjugado que lo diga, y como para que, antes de que y sin que hablan de algo no realizado, ese verbo va en subjuntivo. Con otro sujeto, lo mismo: sin que nadie me vea."
    ],
    "examples": [
     {
      "es": "Estudio para aprobar. → Estudio para que mis padres estén orgullosos.",
      "en": "I study to pass. → I study so my parents are proud."
     },
     {
      "es": "Me voy sin despedirme. → Me voy sin que nadie me vea.",
      "en": "I'm leaving without saying goodbye. → I'm leaving without anyone seeing me."
     }
    ]
   }
  }
 },
 "b2d-rep-adverbiales-finalidad": {
  "exercises": {
   "replace": {
    "7": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "Ahorro para ___ un carro.",
     "answer": "comprar",
     "en": "I'm saving to [buy] a car.",
     "explanation": "Mismo sujeto (yo ahorro, yo compro): para + infinitivo."
    },
    "6": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "I'm buying it so that you can use it. (tú)",
     "answer": "Lo compro para que puedas usarlo.",
     "altAnswers": [
      "Lo compro para que lo puedas usar.",
      "Lo compro para que lo uses.",
      "Lo compro para que tú puedas usarlo."
     ],
     "explanation": "Otro sujeto (tú): para que + subjuntivo, puedas."
    },
    "14": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "I get up early so that the children can have breakfast calmly.",
     "answer": "Me levanto temprano para que los niños puedan desayunar con calma.",
     "altAnswers": [
      "Me levanto temprano para que los niños desayunen con calma.",
      "Me levanto temprano para que los niños puedan desayunar tranquilos.",
      "Me levanto pronto para que los niños puedan desayunar con calma."
     ],
     "explanation": "Otro sujeto (los niños): para que + subjuntivo, puedan."
    },
    "15": {
     "type": "word-order",
     "prompt": "Ordena las palabras.",
     "words": [
      "Entra",
      "en",
      "casa",
      "sin",
      "que",
      "el",
      "perro",
      "ladre"
     ],
     "translation": "She comes into the house without the dog barking",
     "explanation": "Sujetos distintos (ella / el perro): sin que + subjuntivo, ladre."
    },
    "18": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "We always finish the project without the boss finding out.",
     "answer": "Siempre terminamos el proyecto sin que el jefe se entere.",
     "altAnswers": [
      "Siempre terminamos el proyecto sin que se entere el jefe.",
      "Siempre acabamos el proyecto sin que el jefe se entere.",
      "Terminamos siempre el proyecto sin que el jefe se entere."
     ],
     "explanation": "Sujetos distintos (nosotros / el jefe): sin que + subjuntivo, se entere."
    },
    "23": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "She's going to Japan to learn the language without her parents knowing anything.",
     "answer": "Se va a Japón para aprender el idioma sin que sus papás sepan nada.",
     "altAnswers": [
      "Se va a Japón para aprender el idioma sin que sus padres sepan nada.",
      "Se va a Japón para aprender la lengua sin que sus papás sepan nada.",
      "Se va a Japón para aprender la lengua sin que sus padres sepan nada.",
      "Se va para Japón para aprender el idioma sin que sus papás sepan nada."
     ],
     "explanation": "Mismo sujeto (ella va, ella aprende): para + infinitivo. Sujeto distinto (sus papás): sin que + subjuntivo, sepan."
    },
    "25": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "Se va de la reunión sin que nadie le ___ la palabra.",
     "answer": "dé",
     "altAnswers": [
      "de"
     ],
     "en": "He leaves the meeting without anyone [giving] him the floor.",
     "explanation": "Sujeto distinto (nadie): sin que + subjuntivo, dé (con tilde)."
    },
    "28": {
     "type": "speak",
     "text": "Salgo sin que nadie me vea.",
     "prompt": "Dilo en español: \"I'm leaving without anyone seeing me\"",
     "altAnswers": [
      "Me voy sin que nadie me vea."
     ],
     "explanation": "Una forma de decirlo: «Salgo sin que nadie me vea». Sujeto distinto (nadie): sin que + subjuntivo."
    }
   }
  },
  "sections": {
   "0": {
    "body": [
     "Para / sin / antes de + infinitivo si el sujeto es el mismo. Para que / sin que / antes de que + subjuntivo si cambia. Salgo sin despedirme (yo, yo). Salgo sin que nadie me vea (yo, nadie)."
    ],
    "examples": [
     {
      "es": "Salgo sin despedirme.",
      "en": "I'm leaving without saying goodbye."
     },
     {
      "es": "Salgo sin que nadie me vea.",
      "en": "I'm leaving without anyone seeing me."
     }
    ],
    "check": [
     {
      "type": "multiple-choice",
      "question": "«Lo dejo en la mesa para que lo ___.» (tú lo ves)",
      "options": [
       "veas",
       "ver",
       "viste",
       "ves"
      ],
      "correctIndex": 0,
      "explanation": "Con sujeto distinto (yo lo dejo, tú lo ves): para que + subjuntivo, veas. «Ver» sería para el mismo sujeto, y «viste» y «ves» son indicativo."
     }
    ]
   }
  }
 },
 "b2d-habla-de-ti-pareja-ideal": {
  "exercises": {
   "replace": {
    "4": {
     "type": "speak",
     "text": "Ahora tengo un departamento que es muy oscuro.",
     "prompt": "Dilo en español: \"Now I have an apartment that is very dark\"",
     "explanation": "Una forma de decirlo: «Ahora tengo un departamento que es muy oscuro». ser → es: present indicative, él (known antecedent). «Ahora tengo»: es tu departamento real → indicativo (es).",
     "altAnswers": [
      "Ahora tengo un piso que es muy oscuro."
     ]
    },
    "19": {
     "type": "speak",
     "text": "Busco un departamento que tenga terraza y que no esté lejos del centro.",
     "tip": "La voz se mantiene arriba en «terraza» (la frase sigue) y baja al final en «centro».",
     "explanation": "Dos relativas en subjuntivo coordinadas: que tenga, que no esté.",
     "altAnswers": [
      "Busco un piso que tenga terraza y que no esté lejos del centro."
     ]
    }
   }
  },
  "sections": {
   "0": {
    "body": [
     "Recuerda la regla: lo ideal es, por definición, algo que aún no tienes, así que sus relativas van en subjuntivo (una casa que tenga jardín, una ciudad donde haya playa). Lo que ya tienes es real y va en indicativo (ahora vivo en un departamento que no tiene ascensor).",
     "Fíjate en los nexos: que, donde y en el que / en la que siguen la misma regla. Para describir tu ideal puedes empezar con Quiero…, Busco…, Me gustaría… o Mi … ideal es uno/una que…"
    ],
    "examples": [
     {
      "es": "Mi casa ideal es una casa que tenga jardín.",
      "en": "My ideal house is one that has a garden. (ideal: subjuntivo)"
     },
     {
      "es": "Ahora vivo en un departamento que no tiene ascensor.",
      "en": "Right now I live in an apartment that has no lift. (real: indicativo)"
     },
     {
      "es": "Me gustaría un trabajo en el que no haya reuniones inútiles.",
      "en": "I'd like a job with no pointless meetings. (en el que + subjuntivo)"
     }
    ]
   }
  }
 },
 "b2d-corrige-anuncios-busco": {
  "exercises": {
   "replace": {
    "2": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Corrige la frase.",
     "source": "Corrige: «Pareja busca departamento que acepta mascotas.»",
     "answer": "Pareja busca departamento que acepte mascotas.",
     "explanation": "El departamento buscado aún no es concreto, así que va en subjuntivo: «acepte», no «acepta».",
     "altAnswers": [
      "Pareja busca piso que acepte mascotas."
     ]
    },
    "5": {
     "type": "multi-select",
     "question": "¿Qué anuncios están bien?",
     "options": [
      "Busco guitarra que no sea muy cara.",
      "Vendo sofá que tiene tres años.",
      "Busco gato que es tranquilo.",
      "Vendo carro que tenga poco uso."
     ],
     "correctIndexes": [
      0,
      1
     ],
     "explanation": "Buscar algo desconocido → subjuntivo (que no sea); vender algo real → indicativo (que tiene). «Busco gato que es» y «Vendo carro que tenga» invierten los modos."
    },
    "8": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Corrige el anuncio.",
     "source": "Corrige: «Vendo refrigerador que tenga dos años de garantía.»",
     "answer": "Vendo refrigerador que tiene dos años de garantía.",
     "explanation": "El refrigerador que vendes existe → indicativo: tiene.",
     "altAnswers": [
      "Vendo frigorífico que tiene dos años de garantía."
     ]
    },
    "17": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Cambia «Alquilo» por «Busco».",
     "source": "Alquilo habitación que cuesta menos de cuatrocientos dólares.",
     "answer": "Busco habitación que cueste menos de cuatrocientos dólares.",
     "altAnswers": [
      "Busco una habitación que cueste menos de cuatrocientos dólares.",
      "Busco habitación que cueste menos de cuatrocientos euros.",
      "Busco una habitación que cueste menos de cuatrocientos euros."
     ],
     "explanation": "Quien alquila ofrece algo real (cuesta, indicativo); quien busca describe una condición → subjuntivo (cueste, de costar, o → ue)."
    },
    "21": {
     "type": "speak",
     "text": "Vendo departamento que remodelé el año pasado.",
     "prompt": "Dilo en español: \"Apartment for sale that I renovated last year\"",
     "altAnswers": [
      "Vendo departamento que renové el año pasado.",
      "Vendo piso que reformé el año pasado.",
      "Vendo un departamento que remodelé el año pasado."
     ],
     "explanation": "Una forma de decirlo: «Vendo departamento que remodelé el año pasado». El departamento existe y la remodelación ya ocurrió → indicativo (remodelé)."
    }
   }
  },
  "sections": {
   "0": {
    "body": [
     "Recuerda la regla: el tipo de anuncio decide el modo. Se busca, busco, se necesita → el antecedente aún es desconocido → subjuntivo. Vendo, alquilo, ofrezco, regalo → lo que anuncias existe → indicativo.",
     "Estos anuncios tienen cuatro errores; corrígelos en los ejercicios: «Se busca profesor que tiene experiencia con niños. Vendo bicicleta que esté en perfecto estado. Pareja busca departamento que acepta mascotas. Empresa necesita persona que habla portugués.»"
    ]
   }
  }
 },
 "b2r-mission-wanted-ads": {
  "exercises": {
   "replace": {
    "3": {
     "type": "matching",
     "instructions": "Relaciona cada principio con su final lógico.",
     "pairs": [
      {
       "left": "Busco un compañero de departamento que",
       "right": "no fume."
      },
      {
       "left": "Mi compañero de departamento es alguien que",
       "right": "no fuma."
      },
      {
       "left": "No hay ningún candidato que",
       "right": "cumpla los requisitos."
      },
      {
       "left": "Contratamos al candidato que",
       "right": "cumplía los requisitos."
      }
     ],
     "explanation": "Desconocido o inexistente → subjuntivo (fume, cumpla); conocido → indicativo (fuma, cumplía)."
    },
    "6": {
     "type": "multiple-choice",
     "question": "Has perdido a tu gata Luna. ¿Qué anuncio pones en la entrada del edificio?",
     "options": [
      "Se busca gata blanca que responde al nombre de Luna.",
      "Se busca gata blanca que responda al nombre de Luna.",
      "Se busca gata blanca que respondiera al nombre de Luna.",
      "Se busca gata blanca que responderá al nombre de Luna."
     ],
     "correctIndex": 0,
     "explanation": "Luna existe y es tu gata: antecedente concreto → indicativo (responde), aunque el anuncio diga «se busca». «Responda» sería para cualquier gata que cumpliera la condición, no para la tuya."
    },
    "7": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "Waiter wanted who speaks English.",
     "answer": "Se busca mesero que hable inglés.",
     "altAnswers": [
      "Se busca mesera que hable inglés.",
      "Se busca camarero que hable inglés.",
      "Se busca camarera que hable inglés."
     ],
     "explanation": "Se busca + persona desconocida → subjuntivo (hable)."
    },
    "11": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Cambia «Vendemos» por «Buscamos».",
     "source": "Vendemos casa que tiene sitio para tres niños.",
     "answer": "Buscamos casa que tenga sitio para tres niños.",
     "altAnswers": [
      "Buscamos una casa que tenga sitio para tres niños."
     ],
     "explanation": "El anuncio pasa de ofrecer algo real (tiene, indicativo) a buscar algo que todavía no tienen (tenga, subjuntivo)."
    },
    "22": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Corrige el anuncio.",
     "source": "Pareja joven busca departamento que sale por menos de 800 dólares al mes.",
     "answer": "Pareja joven busca departamento que salga por menos de 800 dólares al mes.",
     "altAnswers": [
      "Pareja joven busca un departamento que salga por menos de 800 dólares al mes.",
      "Pareja joven busca piso que salga por menos de 800 euros al mes.",
      "Pareja joven busca un piso que salga por menos de 800 euros al mes."
     ],
     "explanation": "Departamento aún desconocido → subjuntivo (salir: salgo → salga). «Sale» es el error típico de quien traduce del inglés: describiría un departamento concreto."
    },
    "24": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "Language school looking for native teachers who are available in the mornings and have their own car.",
     "answer": "Academia de idiomas busca profesores nativos que estén disponibles por las mañanas y tengan carro propio.",
     "altAnswers": [
      "Academia de idiomas busca profesores nativos que estén disponibles por las mañanas y que tengan carro propio.",
      "Academia de idiomas busca profesores nativos que estén disponibles por las mañanas y tengan auto propio.",
      "Academia de idiomas busca profesores nativos que estén disponibles por las mañanas y tengan coche propio.",
      "Academia de idiomas busca profesores nativos que estén disponibles por las mañanas y que tengan coche propio."
     ],
     "explanation": "Personas aún desconocidas → subjuntivo en las dos relativas (estén, tengan)."
    }
   }
  },
  "sections": {
   "0": {
    "body": [
     "Recuerda la regla: cuando buscas algo sin saber si existe, la relativa va en subjuntivo (Se busca departamento que tenga terraza). Cuando ya lo tienes o sabes que existe, en indicativo (Vendo departamento que tiene terraza).",
     "En un tablón de anuncios esto decide el tipo de anuncio: «se busca», «se necesita», «busco» describen condiciones (subjuntivo); «vendo», «regalo», «se ofrece» presentan algo real (indicativo). Ojo: un gato perdido o una cartera perdida también se «buscan», pero existen y son concretos, así que van en indicativo: Se busca perro que responde al nombre de Toby. Los anuncios suelen omitir el artículo: Se busca mesero…"
    ],
    "check": [
     {
      "type": "fill-blank",
      "prompt": "¿Cómo se dicen en español las palabras en negrita?",
      "sentence": "Se busca departamento que ___ cerca del metro.",
      "answer": "esté",
      "en": "Apartment wanted that [is] near the metro.",
      "explanation": "estar → esté: present subjunctive (unknown antecedent). «Se busca» + departamento aún desconocido → subjuntivo (esté). La ubicación va con estar."
     },
     {
      "type": "fill-blank",
      "prompt": "¿Cómo se dicen en español las palabras en negrita?",
      "sentence": "Vendo una bici que solo ___ un año.",
      "answer": "tiene",
      "en": "I'm selling a bike that [is] only one year old (tener).",
      "explanation": "tener → tiene: present indicative (known antecedent; tener X años). Lo que vendes existe: antecedente conocido → indicativo (tiene)."
     }
    ]
   }
  }
 },
 "b2d-circuito-no-hay-nadie-que": {
  "exercises": {
   "replace": {
    "19": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Cambia a negativa.",
     "source": "He encontrado un vuelo que cuesta menos de trescientos dólares.",
     "answer": "No he encontrado ningún vuelo que cueste menos de trescientos dólares.",
     "explanation": "Al negar (no… ningún), el vuelo no existe para ti → subjuntivo (cueste, de costar, o → ue). «Un» pasa a «ningún».",
     "altAnswers": [
      "No he encontrado ningún vuelo que cueste menos de trescientos euros."
     ]
    },
    "22": {
     "type": "write",
     "prompt": "Llevas una semana viviendo en una ciudad nueva donde todavía no conoces a nadie. Escribe una entrada de diario sobre lo que echas de menos y lo que aún no has encontrado, con oraciones de relativo negativas.",
     "minWords": 50,
     "maxWords": 100,
     "rubric": [
      "No hay nadie que / no conozco a nadie que + subjuntivo",
      "No hay nada / ningún sitio que + subjuntivo",
      "Al menos un relativo en indicativo para algo que sí existe",
      "Un deseo o plan final (espero encontrar algo que…)"
     ],
     "modelAnswer": "Domingo, 12 de octubre. Llevo siete días en Bilbao y todavía no conozco a nadie que me invite a un café. En el trabajo no hay nadie que hable de algo que no sea el fútbol. Tampoco he encontrado ningún sitio que abra los domingos por la mañana, ni una panadería que haga el pan como en mi pueblo. Por suerte, el departamento tiene una terraza que me encanta. Espero encontrar pronto un grupo de senderismo que salga los fines de semana. Mañana será otro día.",
     "explanation": "Con un antecedente negado (no hay nadie que, ningún sitio que), el relativo va en subjuntivo: no hay nadie que hable. Lo que sí existe va en indicativo: una terraza que me encanta."
    }
   }
  },
  "sections": {
   "0": {
    "check": [
     {
      "type": "fill-blank",
      "prompt": "¿Cómo se dicen en español las palabras en negrita?",
      "sentence": "No hay nadie en mi familia que ___ nadar.",
      "answer": "sepa",
      "en": "There's nobody in my family who [can] swim (knows how to).",
      "explanation": "saber → sepa: present subjunctive, él (negated antecedent). «No hay nadie que» niega que exista esa persona → subjuntivo irregular de saber: sepa. «Sabe» afirmaría que alguien sabe."
     },
     {
      "type": "multiple-choice",
      "question": "¿Qué frase es correcta?",
      "options": [
       "No existe ninguna app que te ayude a dormir mejor.",
       "No existe ninguna app que te ayuda a dormir mejor.",
       "Mi hermana tiene una app que le ayude a dormir.",
       "Nadie duerma bien con el celular en la cama."
      ],
      "correctIndex": 0,
      "explanation": "«No existe ninguna app que…» niega la existencia → subjuntivo (ayude); por eso la segunda falla. En la tercera la app existe (ayuda, indicativo), y en la cuarta nadie es el sujeto, sin relativa: duerme."
     }
    ]
   }
  }
 },
 "subjunctive-adjective-clauses-2": {
  "exercises": {
   "replace": {
    "1": {
     "type": "word-order",
     "prompt": "Ordena las palabras.",
     "words": [
      "Quien",
      "gane",
      "el",
      "concurso",
      "merece",
      "respeto"
     ],
     "translation": "Whoever wins the contest deserves respect.",
     "explanation": "«Quien» sin antecedente habla de una persona aún desconocida, así que lleva subjuntivo: gane."
    },
    "17": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "Whoever reads this manuscript will understand that the author was inspired by his own childhood.",
     "answer": "Quien lea este manuscrito entenderá que el autor se inspiró en su propia infancia.",
     "altAnswers": [
      "Cualquiera que lea este manuscrito entenderá que el autor se inspiró en su propia infancia.",
      "Quienquiera que lea este manuscrito entenderá que el autor se inspiró en su propia infancia.",
      "El que lea este manuscrito entenderá que el autor se inspiró en su propia infancia."
     ],
     "explanation": "Quien (sin antecedente) habla de un lector aún desconocido: subjuntivo, lea."
    }
   }
  }
 },
 "b2d-cuento-galeria": {
  "exercises": {
   "replace": {
    "17": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "Whoever visits the exhibition should leave with a question in their head.",
     "answer": "Quien visite la exposición debería salir con una pregunta en la cabeza.",
     "altAnswers": [
      "Cualquiera que visite la exposición debería salir con una pregunta en la cabeza.",
      "Quienquiera que visite la exposición debería salir con una pregunta en la cabeza.",
      "El que visite la exposición debería salir con una pregunta en la cabeza."
     ],
     "explanation": "Quien (sin antecedente) habla de un visitante aún desconocido: subjuntivo, visite."
    }
   }
  }
 },
 "b2r-word-web-art-literature": {
  "exercises": {
   "replace": {
    "17": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Corrige la frase.",
     "source": "El escultor busca un mecenas que le paga la obra.",
     "answer": "El escultor busca un mecenas que le pague la obra.",
     "altAnswers": [
      "El escultor busca a un mecenas que le pague la obra."
     ],
     "explanation": "El mecenas todavía no existe para él (lo busca): subjuntivo, pague."
    },
    "10": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Cambia la frase al se pasivo, sin decir quién lo publicó.",
     "source": "Una editorial pequeña publicó el ensayo en 1998.",
     "answer": "Se publicó el ensayo en 1998.",
     "altAnswers": [
      "El ensayo se publicó en 1998."
     ],
     "explanation": "Con se no decimos quién lo hizo: se publicó, en singular por «el ensayo»."
    },
    "3": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "La obra se ___ en el Museo del Prado.",
     "answer": "expuso",
     "altAnswers": [
      "exhibió"
     ],
     "en": "The work [was exhibited] at the Prado Museum.",
     "explanation": "exponer → se expuso: se + verbo en pretérito, singular por «la obra»."
    },
    "15": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Transforma las dos frases en una sola con cuyo.",
     "source": "El poeta murió en la pobreza. Sus versos nunca se publicaron.",
     "answer": "El poeta, cuyos versos nunca se publicaron, murió en la pobreza.",
     "altAnswers": [
      "El poeta, cuyos versos nunca fueron publicados, murió en la pobreza."
     ],
     "explanation": "Sus versos → cuyos versos: cuyo sustituye al posesivo y concuerda con versos (masculino plural); la relativa explicativa va entre comas detrás de poeta."
    },
    "18": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "The critic (a man) says that it's the best novel of the decade.",
     "answer": "El crítico dice que es la mejor novela de la década.",
     "altAnswers": [
      "El crítico dice que esta es la mejor novela de la década.",
      "El crítico opina que es la mejor novela de la década."
     ],
     "explanation": "Decir que + indicativo: el crítico afirma algo, es."
    }
   }
  }
 },
 "b2r-dialogue-ideal-partner-part-2": {
  "exercises": {
   "replace": {
    "3": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Cambia «Mi ex era alguien que» por «Busco a alguien que» y adapta el verbo.",
     "source": "Mi ex era alguien que nunca mentía.",
     "answer": "Busco a alguien que nunca mienta.",
     "altAnswers": [
      "Busco a alguien que no mienta nunca.",
      "Busco alguien que nunca mienta."
     ],
     "explanation": "Tu ex es real (indicativo: mentía); la persona que buscas todavía no existe para ti: subjuntivo, mienta (e → ie)."
    },
    "8": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "I'm looking for someone who wants the same things as me.",
     "answer": "Busco a alguien que quiera lo mismo que yo.",
     "altAnswers": [
      "Busco a alguien que quiera las mismas cosas que yo.",
      "Busco alguien que quiera lo mismo que yo.",
      "Quiero a alguien que quiera lo mismo que yo."
     ],
     "explanation": "La persona que buscas todavía no existe para ti: subjuntivo, quiera."
    }
   }
  }
 }
};
