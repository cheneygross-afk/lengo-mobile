// Synced from cheneygross-afk/lengo:src/lib/lessons/es-redesign/c1-unit7-latam.ts by scripts/sync-content.mjs -- edit it there, not here.
// Generated: Latin American wording for C1 Unit 7. C1_UNIT7_LATAM adds
// accepted answers next to the Spain wording; C1_UNIT7_SWAP makes the Latin
// American word the main one where the lesson showed the Spain word (carro,
// celular, departamento for a flat but piso for a floor, mesero, refrigerador,
// computadora, examen de manejo), keeping the Spain answer accepted. Content only.
import type { LessonPatch } from "./patch";
export const C1_UNIT7_LATAM: Record<string, { alts?: Record<number, string[]>; checkAlts?: Record<number, Record<number, string[]>> }> = {
 "b2d-corrige-ser-estar-haber": {
  "alts": {
   "0": [
    "La alberca está en la azotea.",
    "Hay una alberca en la azotea."
   ],
   "10": [
    "Había mucho ruido en la noche a causa de los bares.",
    "Había mucho ruido en la noche por los bares.",
    "En la noche había mucho ruido a causa de los bares."
   ],
   "25": [
    "Hay una alberca en la azotea."
   ]
  }
 },
 "ser-estar-haber-limits-part-1-1-part-2": {
  "alts": {
   "2": [
    "La fiesta de despedida de Javier es el sábado, en el jardín de la casa de sus papás.",
    "La fiesta de despedida de Javier es en el jardín de la casa de sus papás el sábado.",
    "El sábado es la fiesta de despedida de Javier, en el jardín de la casa de sus papás."
   ],
   "16": [
    "La fiesta de despedida de Javier es el sábado, en el jardín de la casa de sus papás.",
    "La fiesta de despedida de Javier es en el jardín de la casa de sus papás el sábado.",
    "El sábado es la fiesta de despedida de Javier, en el jardín de la casa de sus papás."
   ]
  }
 },
 "b1d-patron-he-has-ha": {
  "alts": {
   "20": [
    "Mis papás han vendido su casa vieja.",
    "Mis papás han vendido su vieja casa.",
    "Mis papás han vendido su casa antigua."
   ]
  }
 },
 "c1r-mission-real-estate-listing-part-2": {
  "alts": {
   "5": [
    "El edificio tiene un gimnasio, una alberca y un conserje.",
    "El edificio tiene gimnasio, alberca y conserje."
   ],
   "6": [
    "El departamento está en la cuarta planta y no tiene ascensor.",
    "El departamento está en la cuarta planta y no tiene elevador."
   ],
   "9": [
    "Me gustaría saber si el departamento está amueblado y si hay plaza de aparcamiento."
   ]
  }
 },
 "b2d-circuito-hay-esta": {
  "alts": {
   "10": [
    "¿Hay alguna parada de bus cerca del hotel?"
   ],
   "11": [
    "¿Dónde está la parada del bus? No la encuentro."
   ]
  }
 }
};
export const C1_UNIT7_SWAP: Record<string, LessonPatch> = {
 "ser-estar-haber-nuanced-1": {
  "exercises": {
   "replace": {
    "9": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Reescribe la frase empezando por «Tus llaves».",
     "source": "Hay unas llaves en el carro.",
     "answer": "Tus llaves están en el carro.",
     "altAnswers": [
      "Tus llaves están en el auto.",
      "Tus llaves están en el coche."
     ],
     "explanation": "Con unas llaves presentas algo nuevo (hay). Con tus llaves el objeto ya es conocido, así que solo lo sitúas: estar, en plural porque concuerda con llaves."
    }
   }
  },
  "sections": {
   "2": {
    "body": [
     "Hay (de haber) introduce la existencia de algo, generalmente por primera vez en la conversación. Estar ubica algo específico que ya se ha mencionado o que es conocido.",
     "El truco está en la palabra de delante: hay va con un, una, algún, números o sin artículo (hay un parque, hay tres bares, hay tensión); estar va con el, la, mi, tu o un nombre propio (el parque está, tus llaves están). Y haber impersonal es siempre singular: había muchos carros, nunca «habían»."
    ]
   }
  }
 },
 "b2d-elige-ser-eventos": {
  "exercises": {
   "replace": {
    "5": {
     "type": "speak",
     "text": "¿Dónde están mis lentes?",
     "prompt": "Dilo en español: \"Where are my glasses?\"",
     "explanation": "Una forma de decirlo: «¿Dónde están mis lentes?». estar → están: estar for location of objects. Unos lentes son un objeto: se encuentran en un sitio → estar, en plural.",
     "altAnswers": [
      "¿Dónde están mis gafas?"
     ]
    },
    "7": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "The job interview is on the third floor.",
     "answer": "La entrevista de trabajo es en el tercer piso.",
     "altAnswers": [
      "La entrevista de trabajo es en la tercera planta.",
      "La entrevista de trabajo es en el tercer piso."
     ],
     "explanation": "La entrevista es un evento (tiene lugar) → ser, no estar."
    },
    "8": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Cambia el sujeto: ahora habla de los candidatos, que ya han llegado.",
     "source": "La entrevista es en el tercer piso.",
     "answer": "Los candidatos ya están en el tercer piso.",
     "altAnswers": [
      "Los candidatos ya están en la tercera planta.",
      "Los candidatos ya están en el tercer piso."
     ],
     "explanation": "Al cambiar el sujeto a personas (los candidatos), ya no hablamos de algo que tiene lugar, sino de dónde se encuentran → estar, en plural."
    },
    "15": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Corrige la frase.",
     "source": "La torta es en el refrigerador, pero la fiesta está en casa de Marta.",
     "answer": "La torta está en el refrigerador, pero la fiesta es en casa de Marta.",
     "altAnswers": [
      "El pastel está en el refrigerador, pero la fiesta es en casa de Marta.",
      "La torta está en el frigorífico, pero la fiesta es en casa de Marta.",
      "La tarta está en la nevera, pero la fiesta es en casa de Marta.",
      "El pastel está en la nevera, pero la fiesta es en casa de Marta.",
      "La tarta está en el frigorífico, pero la fiesta es en casa de Marta."
     ],
     "explanation": "Dos errores cruzados: la torta es un objeto → está en el refrigerador; la fiesta es un evento → es en casa de Marta."
    },
    "20": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "¿Dónde ___ el examen de manejo la semana pasada?",
     "answer": "fue",
     "en": "Where [was] the driving test last week?",
     "explanation": "El examen es un evento → ser; en pasado, «fue»."
    }
   }
  }
 },
 "b2r-contrast-meaning-adjectives": {
  "exercises": {
   "replace": {
    "4": {
     "type": "multi-select",
     "question": "¿Qué frases son correctas?",
     "options": [
      "La reunión es en la sala 3.",
      "El jefe está en la sala 3.",
      "La fiesta está en mi casa.",
      "Hay un problema con la computadora."
     ],
     "correctIndexes": [
      0,
      1,
      3
     ],
     "explanation": "Para dónde tiene lugar un evento se usa «ser»: «la fiesta es en mi casa». Por eso «La fiesta está en mi casa» es incorrecta; «el jefe está» es correcto porque es una persona."
    },
    "5": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "The cake is ready; it's delicious.",
     "answer": "El pastel está listo; está riquísimo.",
     "altAnswers": [
      "La torta está lista; está riquísima.",
      "El pastel está listo, está buenísimo.",
      "El pastel está listo; está delicioso.",
      "La tarta está lista; está riquísima."
     ],
     "explanation": "Dos estados del momento, los dos con estar: estar listo (preparado) y estar rico (sabe bien). Con ser, «es listo» y «es rico» hablarían de inteligencia y de dinero."
    },
    "12": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Corrige la frase.",
     "source": "Mi abuelo es vivo gracias a los médicos.",
     "answer": "Mi abuelo está vivo gracias a los médicos.",
     "altAnswers": [
      "Mi abuelo sigue vivo gracias a los médicos."
     ],
     "explanation": "Tener vida es un estado → estar vivo. «Es vivo» diría que es listo y rápido para aprovechar las ocasiones."
    },
    "15": {
     "type": "multiple-choice",
     "question": "«Mi sobrino es muy vivo» significa…",
     "options": [
      "Es muy listo y rápido para aprovechar las ocasiones.",
      "Tiene mucha energía hoy.",
      "Todavía no ha muerto.",
      "Está muy contento."
     ],
     "correctIndex": 0,
     "explanation": "Con ser, vivo es un rasgo: listo, despierto. «Está vivo» diría que tiene vida."
    },
    "16": {
     "type": "write",
     "prompt": "Escribe una reseña de un restaurante en el que cenaste hace poco. Juega con adjetivos que cambian de significado con ser y estar (rico, listo, verde, aburrido…).",
     "minWords": 60,
     "maxWords": 120,
     "rubric": [
      "Al menos tres adjetivos que cambian de significado con ser y estar",
      "Estar + adjetivo para la comida y el estado del momento",
      "Ser + adjetivo para el carácter o las cualidades",
      "Una valoración final con recomendación"
     ],
     "modelAnswer": "Cenamos el viernes en La Encina y la experiencia fue desigual. La carne estaba riquísima, pero las papas estaban frías. El mesero era muy listo: en dos minutos supo qué vino nos iba a gustar. Sin embargo, la cocina no estaba lista a tiempo y esperamos casi una hora el segundo plato. Los tomates de la ensalada estaban verdes, y eso en verano no tiene excusa. A los postres, mi amigo estaba tan aburrido que casi se duerme, ¡y eso que él no es nada aburrido! Volvería, pero entre semana.",
     "explanation": "Algunos adjetivos cambian de significado: estar rico (sabroso), ser listo (inteligente) / estar listo (preparado), estar verde (sin madurar), estar aburrido (sentir aburrimiento) / ser aburrido (no ser divertido)."
    },
    "18": {
     "type": "speak",
     "text": "Mi abuelo está vivo y es muy vivo.",
     "prompt": "Dilo en español: \"My grandfather is alive and very sharp\"",
     "altAnswers": [
      "Mi abuelo está vivo y es muy listo."
     ],
     "explanation": "Una forma de decirlo: «Mi abuelo está vivo y es muy vivo.». Estar vivo = tener vida; ser vivo = listo."
    },
    "7": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "My nephew is very sharp: he always finds a way to get what he wants.",
     "answer": "Mi sobrino es muy vivo: siempre encuentra la manera de conseguir lo que quiere.",
     "altAnswers": [
      "Mi sobrino es muy vivo: siempre encuentra la forma de conseguir lo que quiere.",
      "Mi sobrino es muy vivo; siempre encuentra la manera de conseguir lo que quiere.",
      "Mi sobrino es muy listo: siempre encuentra la manera de conseguir lo que quiere."
     ],
     "explanation": "«Ser vivo» = listo, rápido para aprovechar las ocasiones; «estar vivo» = tener vida."
    },
    "9": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Cambia el verbo para decir que hoy siente orgullo por algo concreto.",
     "source": "Mi padre es muy orgulloso.",
     "answer": "Mi padre está muy orgulloso.",
     "altAnswers": [
      "Hoy mi padre está muy orgulloso.",
      "Mi papá está muy orgulloso.",
      "Hoy mi papá está muy orgulloso."
     ],
     "explanation": "Con estar, «orgulloso» es un sentimiento por algo concreto (está orgulloso de su hija). Con ser, es un rasgo de carácter: no reconoce sus errores. Mismo adjetivo, otro verbo, otro significado."
    }
   }
  },
  "sections": {
   "0": {
    "check": [
     {
      "type": "multiple-choice",
      "question": "«Pruébala: hoy la sopa ___ riquísima.»",
      "options": [
       "está",
       "es",
       "hay",
       "son"
      ],
      "correctIndex": 0,
      "explanation": "Para el sabor de una comida en un momento concreto («hoy») se usa «estar»: «está riquísima». «Es rica» describiría una característica permanente, y «hay» solo expresa existencia."
     },
     {
      "type": "fill-blank",
      "prompt": "Completa.",
      "sentence": "Nuestro mesero ___ muy atento: nos trae agua sin que se la pidamos.",
      "answer": "es",
      "explanation": "Traer agua sin que se la pidan describe su forma de ser con los clientes: ser atento = considerado. «Está atento» diría solo que presta atención en este momento."
     }
    ]
   },
   "1": {
    "examples": [
     {
      "es": "Está muy verde en este trabajo.",
      "en": "He's very green (inexperienced) in this job."
     },
     {
      "es": "Los plátanos están verdes.",
      "en": "The bananas are unripe."
     },
     {
      "es": "Mi abuelo está vivo y es muy vivo.",
      "en": "My grandfather is alive and very sharp."
     }
    ],
    "body": [
     "Con estar aparecen también sentidos que no existen con ser: estar verde (sin madurar; también inexperto: «estar verde en algo»), estar vivo (con vida) y estar orgulloso de algo (contento por algo concreto).",
     "Con ser, los mismos adjetivos cambian de sentido: ser verde = el color; ser vivo = listo, rápido para aprovechar una ocasión; ser orgulloso = no querer reconocer un error o pedir ayuda. Por eso «mi abuelo está vivo» y «mi abuelo es muy vivo» no se parecen en nada."
    ]
   }
  }
 },
 "b2d-rep-si-habla-de-ti": {
  "exercises": {
   "replace": {
    "5": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "If there were no phones, we would talk more.",
     "answer": "Si no hubiera celulares, hablaríamos más.",
     "altAnswers": [
      "Si no existieran los celulares, hablaríamos más.",
      "Si no hubiera teléfonos, hablaríamos más.",
      "Si no hubiera móviles, hablaríamos más.",
      "Si no existieran los móviles, hablaríamos más."
     ],
     "explanation": "Condición irreal presente: «si no hubiera» (singular impersonal) + condicional «hablaríamos»."
    },
    "11": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Transforma en una hipótesis irreal: tu departamento es pequeño.",
     "source": "Si mi departamento es más grande, tendré un perro.",
     "answer": "Si mi departamento fuera más grande, tendría un perro.",
     "altAnswers": [
      "Si mi apartamento fuera más grande, tendría un perro.",
      "Si mi departamento fuera más grande, tendría perro.",
      "Tendría un perro si mi departamento fuera más grande.",
      "Si mi piso fuera más grande, tendría un perro.",
      "Si mi piso fuera más grande, tendría perro.",
      "Tendría un perro si mi piso fuera más grande."
     ],
     "explanation": "La hipótesis irreal (el departamento no es grande) pide si + imperfecto de subjuntivo de ser: fuera; y la consecuencia pasa de futuro a condicional: tendría."
    },
    "22": {
     "type": "word-order",
     "prompt": "Ordena las palabras.",
     "words": [
      "Si",
      "no",
      "existieran",
      "los",
      "mapas",
      "del",
      "celular",
      "me",
      "perdería",
      "todo",
      "el",
      "tiempo"
     ],
     "translation": "If phone maps didn't exist I'd get lost all the time",
     "explanation": "Si + imperfecto de subjuntivo, condicional pronominal «me perdería»."
    },
    "25": {
     "type": "multiple-choice",
     "question": "«Si no existieran los carros, las ciudades ___ más tranquilas.»",
     "options": [
      "serían",
      "fueran",
      "son",
      "serán"
     ],
     "correctIndex": 0,
     "explanation": "En la consecuencia va el condicional, no el subjuntivo: serían. «Fueran» es la forma de la parte con si; «son» y «serán» no casan con una hipótesis irreal."
    },
    "27": {
     "type": "speak",
     "text": "Si no hubiera carros, iría en bici a todas partes.",
     "prompt": "Dilo en español: \"If there were no cars, I'd cycle everywhere\"",
     "explanation": "Una forma de decirlo: «Si no hubiera carros, iría en bici a todas partes». hubiera, singular",
     "altAnswers": [
      "Si no hubiera coches, iría en bici a todas partes."
     ]
    },
    "16": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "If you all came with us, it would be much more fun.",
     "answer": "Si vinieran con nosotros, sería mucho más divertido.",
     "altAnswers": [
      "Si vinierais con nosotros, sería mucho más divertido."
     ],
     "explanation": "«Venir» → «vinieran» (ustedes); nunca «vendrían» tras si."
    }
   }
  },
  "sections": {
   "0": {
    "body": [
     "Recuerda la regla: para imaginar un presente distinto del real se usa si + imperfecto de subjuntivo (existiera, hubiera, tuviera) y, en la consecuencia, condicional (escribiría, iría). El imperfecto de subjuntivo marca que la condición no es real ahora.",
     "Dos trampas: en una condición con si no va el condicional (✗ si tendría) ni el presente de subjuntivo (✗ si tenga); y haber impersonal sigue en singular: si no hubiera carros. El orden de las dos partes puede cambiar: Dormiría más si los días tuvieran treinta horas."
    ],
    "examples": [
     {
      "es": "Si no existiera internet, escribiría cartas.",
      "en": "If the internet didn't exist, I'd write letters."
     },
     {
      "es": "Si no hubiera carros, iría en bici a todas partes.",
      "en": "If there were no cars, I'd cycle everywhere. (hubiera, singular)"
     },
     {
      "es": "Viajaría más si no tuviera hijos pequeños.",
      "en": "I'd travel more if I didn't have small children. (la consecuencia puede ir delante)"
     }
    ]
   }
  }
 },
 "b2r-error-hunt-ser-estar-haber": {
  "exercises": {
   "replace": {
    "20": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "Si ___ más trenes, no iría en carro. (el alumno escribió: hubieran)",
     "answer": "hubiera",
     "en": "If [there were] more trains, I wouldn't drive.",
     "explanation": "Haber impersonal en imperfecto de subjuntivo: «hubiera», singular."
    },
    "24": {
     "type": "multiple-choice",
     "question": "¿Qué frase tiene un error?",
     "options": [
      "La conferencia está en el salón de actos.",
      "El salón de actos está en el segundo piso.",
      "Había muchas preguntas.",
      "La comida está rica."
     ],
     "correctIndex": 0,
     "explanation": "Una conferencia es un evento: «es en el salón de actos». El salón de actos, en cambio, es un lugar físico y sí va con estar; «había muchas preguntas» respeta el singular de haber."
    }
   }
  }
 },
 "b2d-corrige-ser-estar-haber": {
  "exercises": {
   "replace": {
    "4": {
     "type": "speak",
     "text": "El apartamento está a dos minutos de la playa.",
     "prompt": "Dilo en español: \"The apartment is two minutes from the beach\"",
     "altAnswers": [
      "El departamento está a dos minutos de la playa.",
      "El piso está a dos minutos de la playa."
     ],
     "explanation": "Una forma de decirlo: «El apartamento está a dos minutos de la playa». Ubicación de un edificio → estar, no ser."
    },
    "5": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "The waiters were very friendly to us.",
     "answer": "Los meseros fueron muy simpáticos con nosotros.",
     "altAnswers": [
      "Los meseros estuvieron muy simpáticos con nosotros.",
      "Los meseros eran muy simpáticos con nosotros.",
      "Los meseros estaban muy simpáticos con nosotros.",
      "Los camareros fueron muy simpáticos con nosotros.",
      "Los camareros estuvieron muy simpáticos con nosotros.",
      "Los camareros eran muy simpáticos con nosotros.",
      "Los camareros estaban muy simpáticos con nosotros."
     ],
     "explanation": "Comportamiento en una ocasión: ser o estar son posibles («estuvieron» resalta la actitud de ese día)."
    },
    "11": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Corrige la frase.",
     "source": "El apartamento es muy cerca del metro.",
     "answer": "El apartamento está muy cerca del metro.",
     "altAnswers": [
      "El departamento está muy cerca del metro.",
      "El piso está muy cerca del metro."
     ],
     "explanation": "La ubicación de un lugar (el apartamento) se expresa con estar, también con «cerca de» o «lejos de»."
    }
   }
  }
 },
 "b2d-habla-de-ti-caracter-estado": {
  "exercises": {
   "replace": {
    "8": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Corrige la frase.",
     "source": "Mi departamento es en el quinto piso y está muy luminoso.",
     "answer": "Mi departamento está en el quinto piso y es muy luminoso.",
     "altAnswers": [
      "Mi departamento está en la quinta planta y es muy luminoso.",
      "Mi departamento está en el quinto piso y está muy luminoso.",
      "Mi apartamento está en el quinto piso y es muy luminoso.",
      "Mi piso está en el quinto piso y es muy luminoso.",
      "Mi piso está en la quinta planta y es muy luminoso.",
      "Mi piso está en el quinto piso y está muy luminoso.",
      "Mi apartamento está en el quinto piso y es muy luminoso."
     ],
     "explanation": "Dos verbos cruzados: la ubicación de un lugar va con estar (está en el quinto piso) y una característica fija del departamento, con ser (es luminoso)."
    }
   }
  }
 },
 "ser-estar-haber-limits-part-1-1": {
  "sections": {
   "1": {
    "examples": [
     {
      "es": "El examen es en el aula doscientos tres.",
      "en": "Localización de un evento académico mediante «ser»."
     },
     {
      "es": "El aula doscientos tres está en el segundo piso.",
      "en": "Localización de un espacio físico mediante «estar»."
     }
    ]
   }
  }
 },
 "ser-estar-haber-limits-part-1-1-part-2": {
  "exercises": {
   "replace": {
    "6": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "The demonstration will be in front of the town hall at six, so don't leave your car in the square (informal).",
     "answer": "La manifestación será frente al ayuntamiento a las seis, así que no dejes el carro en la plaza.",
     "altAnswers": [
      "La manifestación va a ser frente al ayuntamiento a las seis, así que no dejes el carro en la plaza.",
      "La manifestación será delante del ayuntamiento a las seis, así que no dejes el carro en la plaza.",
      "La manifestación será enfrente del ayuntamiento a las seis, así que no dejes el carro en la plaza.",
      "La manifestación será frente al ayuntamiento a las seis, así que no dejes tu carro en la plaza.",
      "La manifestación será frente al ayuntamiento a las seis, así que no dejes el auto en la plaza.",
      "La manifestación será frente al ayuntamiento a las seis, así que no dejes el coche en la plaza.",
      "La manifestación va a ser frente al ayuntamiento a las seis, así que no dejes el coche en la plaza.",
      "La manifestación será delante del ayuntamiento a las seis, así que no dejes el coche en la plaza.",
      "La manifestación será enfrente del ayuntamiento a las seis, así que no dejes el coche en la plaza.",
      "La manifestación será frente al ayuntamiento a las seis, así que no dejes tu coche en la plaza."
     ],
     "explanation": "La manifestación es un evento: «será». El imperativo negativo exige subjuntivo («dejes»)."
    },
    "7": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "El salón de baile ___ en el primer piso del hotel.",
     "answer": "está",
     "en": "The ballroom [is] on the first floor of the hotel.",
     "altAnswers": [
      "se encuentra"
     ],
     "explanation": "El salón es un espacio físico: «estar»."
    },
    "17": {
     "type": "speak",
     "text": "El salón de baile está en el primer piso del hotel.",
     "prompt": "Dilo en español: \"The ballroom is on the first floor of the hotel\"",
     "altAnswers": [
      "El salón de baile se encuentra en el primer piso del hotel.",
      "El salón de baile está en el primer piso del hotel.",
      "El salón de baile se encuentra en el primer piso del hotel."
     ],
     "explanation": "Una forma de decirlo: «El salón de baile está en el primer piso del hotel». El salón es un espacio físico: «estar»."
    }
   }
  }
 },
 "b2r-mission-character-sketch": {
  "sections": {
   "1": {
    "check": [
     {
      "type": "multi-select",
      "question": "Describiendo su casa: ¿qué rasgos se expresan con estar?",
      "options": [
       "de madera",
       "en el tercer piso",
       "tres ventanas",
       "recién pintada"
      ],
      "correctIndexes": [
       1,
       3
      ],
      "explanation": "Material → ser (es de madera); existencia → haber (hay tres ventanas); ubicación y resultado → estar."
     },
     {
      "type": "fill-blank",
      "prompt": "Completa el perfil.",
      "sentence": "En su escritorio ___ planos por todas partes.",
      "answer": "hay",
      "explanation": "«Hay» presenta la existencia de algo sin artículo determinado: «hay planos». «Están planos» no es posible; con artículo diríamos «los planos están por todas partes»."
     }
    ]
   }
  }
 },
 "c1r-mission-real-estate-listing": {
  "exercises": {
   "replace": {
    "2": {
     "type": "matching",
     "instructions": "Relaciona cada rasgo con su verbo.",
     "pairs": [
      {
       "left": "de estilo colonial",
       "right": "ser"
      },
      {
       "left": "a cinco minutos de la playa",
       "right": "estar"
      },
      {
       "left": "una piscina comunitaria (existe en el edificio)",
       "right": "haber"
      },
      {
       "left": "garaje propio (rasgo del departamento)",
       "right": "tener"
      }
     ],
     "explanation": "Cuatro verbos para describir una vivienda."
    },
    "4": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "The apartment has a terrace of twenty square meters.",
     "answer": "El departamento tiene una terraza de veinte metros cuadrados.",
     "altAnswers": [
      "El apartamento tiene una terraza de veinte metros cuadrados.",
      "El departamento tiene una terraza de 20 metros cuadrados.",
      "El apartamento tiene una terraza de 20 metros cuadrados.",
      "El departamento cuenta con una terraza de veinte metros cuadrados.",
      "El piso tiene una terraza de veinte metros cuadrados.",
      "El piso tiene una terraza de 20 metros cuadrados.",
      "El piso cuenta con una terraza de veinte metros cuadrados."
     ],
     "explanation": "Para los rasgos que posee el inmueble se usa «tener» (o «contar con»); «hay una terraza» también es posible, pero presenta la terraza como algo que existe en el departamento y no como rasgo suyo."
    }
   }
  }
 },
 "c1r-mission-real-estate-listing-part-2": {
  "exercises": {
   "replace": {
    "0": {
     "type": "fill-blank",
     "prompt": "Completa el anuncio.",
     "sentence": "El departamento ___ amueblado y listo para entrar a vivir.",
     "answer": "está",
     "explanation": "«Estar amueblado» describe el estado actual del departamento, resultado de amueblarlo."
    },
    "1": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "It's a bright apartment that is in perfect condition.",
     "answer": "Es un departamento luminoso que está en perfecto estado.",
     "altAnswers": [
      "Es un apartamento luminoso que está en perfecto estado.",
      "Se trata de un departamento luminoso que está en perfecto estado.",
      "Es un piso luminoso que está en perfecto estado.",
      "Se trata de un piso luminoso que está en perfecto estado."
     ],
     "explanation": "«Ser» para la característica («es un departamento luminoso») y «estar» para el estado («está en perfecto estado»)."
    },
    "6": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Corrige la frase.",
     "source": "El departamento es en el cuarto piso y no tiene ascensor.",
     "answer": "El departamento está en el cuarto piso y no tiene ascensor.",
     "altAnswers": [
      "El departamento está en el cuarto piso y no tiene elevador.",
      "El piso está en la cuarta planta y no tiene ascensor.",
      "El piso está en el cuarto piso y no tiene ascensor.",
      "El piso está en la cuarta planta y no tiene elevador."
     ],
     "explanation": "Un departamento es un lugar físico, no un evento: su ubicación se expresa con estar («está en el cuarto piso»). «Es en» solo sirve para localizar eventos."
    },
    "9": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "I'd like to know whether the apartment is furnished and whether there is a parking space (formal).",
     "answer": "Quisiera saber si el departamento está amueblado y si hay lugar de estacionamiento.",
     "altAnswers": [
      "Quisiera saber si el apartamento está amueblado y si hay lugar de estacionamiento.",
      "Quisiera saber si el departamento está amueblado y si hay plaza de garaje.",
      "Quisiera saber si el apartamento está amueblado y si hay plaza de garaje.",
      "Me gustaría saber si el departamento está amueblado y si hay lugar de estacionamiento.",
      "Me gustaría saber si el apartamento está amueblado y si hay plaza de garaje.",
      "Quisiera saber si el departamento está amueblado y si hay estacionamiento.",
      "Quisiera saber si el piso está amueblado y si hay plaza de aparcamiento.",
      "Quisiera saber si el apartamento está amueblado y si hay plaza de aparcamiento.",
      "Quisiera saber si el piso está amueblado y si hay plaza de garaje.",
      "Me gustaría saber si el piso está amueblado y si hay plaza de aparcamiento.",
      "Quisiera saber si el piso está amueblado y si hay estacionamiento."
     ],
     "explanation": "El estado del mobiliario lleva «estar» y la existencia de una plaza se presenta con «haber». Error típico: «si es amueblado»."
    },
    "16": {
     "type": "speak",
     "text": "Es un departamento luminoso que está en perfecto estado.",
     "prompt": "Dilo en español: \"It's a bright apartment that is in perfect condition\"",
     "altAnswers": [
      "Es un apartamento luminoso que está en perfecto estado.",
      "Se trata de un departamento luminoso que está en perfecto estado.",
      "Es un piso luminoso que está en perfecto estado.",
      "Se trata de un piso luminoso que está en perfecto estado."
     ],
     "explanation": "Una forma de decirlo: «Es un departamento luminoso que está en perfecto estado». «Ser» para la característica («es un departamento luminoso») y «estar» para el estado («está en perfecto estado»)."
    }
   }
  }
 },
 "b2d-cuento-psicologo": {
  "exercises": {
   "replace": {
    "8": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Corrige la frase.",
     "source": "La consulta de la psicóloga es en el segundo piso, enfrente del ascensor.",
     "answer": "La consulta de la psicóloga está en el segundo piso, enfrente del ascensor.",
     "altAnswers": [
      "La consulta de la psicóloga está en la segunda planta, enfrente del ascensor.",
      "La consulta de la psicóloga está en el segundo piso, frente al ascensor.",
      "La consulta de la psicóloga está en el segundo piso, enfrente del ascensor.",
      "La consulta de la psicóloga está en el segundo piso, frente al ascensor."
     ],
     "explanation": "La consulta es un lugar físico que se encuentra en un sitio → estar. Ser solo sitúa eventos: la sesión es en la consulta."
    },
    "9": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Cambia el sujeto por «la próxima sesión».",
     "source": "La consulta está en el segundo piso.",
     "answer": "La próxima sesión es en el segundo piso.",
     "altAnswers": [
      "La próxima sesión es en la segunda planta.",
      "La próxima sesión es en el segundo piso."
     ],
     "explanation": "Al cambiar el sujeto de un lugar (la consulta) a un evento (la sesión), el verbo cambia: un evento tiene lugar → ser. El lugar sigue igual, pero lo decide el tipo de sujeto."
    }
   }
  }
 },
 "b2d-circuito-hay-esta": {
  "exercises": {
   "replace": {
    "3": {
     "type": "fill-blank",
     "prompt": "Estación 3: completa con haber o estar.",
     "sentence": "No ___ leche en el refrigerador.",
     "answer": "hay",
     "explanation": "Para expresar existencia o ausencia sin artículo definido se usa hay: no hay leche."
    },
    "4": {
     "type": "fill-blank",
     "prompt": "Estación 3: completa con haber o estar.",
     "sentence": "La leche ___ en el refrigerador, en la puerta.",
     "answer": "está",
     "explanation": "Para ubicar algo conocido (la leche) se usa estar."
    },
    "13": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "Lucía's office is on the fourth floor, next to the lift.",
     "answer": "La oficina de Lucía está en el cuarto piso, al lado del ascensor.",
     "altAnswers": [
      "El despacho de Lucía está en el cuarto piso, al lado del ascensor.",
      "La oficina de Lucía está en el cuarto piso, junto al ascensor.",
      "El despacho de Lucía está en el cuarto piso, junto al ascensor.",
      "La oficina de Lucía está en el cuarto piso, al lado del ascensor.",
      "El despacho de Lucía está en el cuarto piso, al lado del ascensor.",
      "La oficina de Lucía está en la cuarta planta, al lado del ascensor.",
      "La oficina de Lucía está en el cuarto piso, junto al ascensor.",
      "El despacho de Lucía está en la cuarta planta, junto al ascensor."
     ],
     "explanation": "Algo determinado («la oficina de Lucía») se sitúa con estar."
    },
    "20": {
     "type": "write",
     "prompt": "Una amiga va a pasar un fin de semana en tu departamento mientras tú estás de viaje. Escríbele un correo explicando qué hay en el barrio y dónde está cada cosa.",
     "minWords": 50,
     "maxWords": 100,
     "rubric": [
      "Hay + artículo indeterminado para presentar lugares nuevos",
      "Estar para situar lugares concretos (el mercado está…)",
      "Ser para eventos (el concierto es en…)",
      "Al menos un adjetivo con ser y otro con estar"
     ],
     "modelAnswer": "¡Hola, Clara! Te explico un poco el barrio. Al lado de mi portal hay una panadería muy buena y, enfrente, hay una farmacia que abre los domingos. El mercado está en la calle de atrás; es pequeño, pero siempre está lleno. Si quieres correr, el parque está a cinco minutos. Por cierto, el sábado hay fiesta en el barrio: el concierto es en la plaza a las diez. Los vecinos son muy simpáticos, así que no dudes en preguntarles. Las llaves están en el buzón. ¡Disfruta!",
     "explanation": "Hay presenta algo nuevo (hay una panadería); estar sitúa algo conocido (el mercado está en la calle de atrás). Para el lugar de un evento se usa ser: el concierto es en la plaza."
    },
    "23": {
     "type": "speak",
     "text": "¿Dónde están mis lentes?",
     "prompt": "Dilo en español: \"Where are my glasses?\"",
     "explanation": "Una forma de decirlo: «¿Dónde están mis lentes?». algo concreto, en plural → están",
     "altAnswers": [
      "¿Dónde están mis gafas?"
     ]
    }
   }
  },
  "sections": {
   "0": {
    "examples": [
     {
      "es": "Hay una farmacia cerca.",
      "en": "There's a pharmacy nearby. (algo nuevo → hay)"
     },
     {
      "es": "La farmacia está al lado del banco.",
      "en": "The pharmacy is next to the bank. (ya sabemos cuál → está)"
     },
     {
      "es": "En el pueblo no había ningún cajero.",
      "en": "There was no cash machine in the village. (ausencia → haber, en singular)"
     },
     {
      "es": "¿Dónde están mis lentes?",
      "en": "Where are my glasses? (algo concreto, en plural → están)"
     }
    ]
   }
  }
 },
 "b2r-tema-secretos-familia": {
  "exercises": {
   "replace": {
    "11": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Pasa a estilo indirecto.",
     "source": "«No les cuenten nada a los primos», nos rogó mi tío.",
     "answer": "Mi tío nos rogó que no les contáramos nada a los primos.",
     "altAnswers": [
      "Mi tío nos rogó que no les dijéramos nada a los primos.",
      "Mi tío nos pidió que no les contáramos nada a los primos.",
      "Mi tío nos rogó que no les contásemos nada a los primos."
     ],
     "explanation": "Una orden o petición en estilo indirecto va con «que» + subjuntivo; con «rogó» en pasado, imperfecto: contáramos (cuenten → contáramos)."
    }
   }
  }
 },
 "b1d-patron-he-has-ha": {
  "sections": {
   "0": {
    "body": [
     "Recuerda la regla: en el pretérito perfecto solo cambia haber (he, has, ha, hemos, han); el participio (-ado / -ido) se queda igual con cualquier sujeto. Nada se mete entre haber y el participio.",
     "Dos trampas frecuentes: usted y ustedes usan las formas de tercera persona (ha, han), y un sujeto doble con «yo» (mi padre y yo) equivale a nosotros → hemos."
    ]
   }
  },
  "exercises": {
   "replace": {
    "3": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "Esta semana ustedes ___ mucho.",
     "answer": "han salido",
     "altAnswers": [],
     "en": "This week you [have gone out] a lot (ustedes).",
     "explanation": "salir → han salido: pretérito perfecto, ustedes. Ustedes → han; salir → salido."
    },
    "5": {
     "type": "matching",
     "instructions": "Relaciona el sujeto con la forma de haber.",
     "pairs": [
      {
       "left": "yo",
       "right": "he"
      },
      {
       "left": "usted",
       "right": "ha"
      },
      {
       "left": "nosotras",
       "right": "hemos"
      },
      {
       "left": "ustedes",
       "right": "han"
      }
     ],
     "explanation": "Presente de haber: he, has, ha, hemos, han. Usted y ustedes usan las formas de tercera persona: ha, han."
    },
    "25": {
     "type": "speak",
     "prompt": "Responde en voz alta: pregunta a dos compañeros (ustedes) si ya han terminado el informe de hoy.",
     "text": "¿Ustedes ya han terminado el informe de hoy?",
     "explanation": "Ustedes → han (tercera persona plural), no «has». Terminar → terminado."
    }
   }
  }
 }
};
