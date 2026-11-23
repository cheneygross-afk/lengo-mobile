// Synced from cheneygross-afk/lengo:src/lib/lessons/es-redesign/b1-unit6-latam.ts by scripts/sync-content.mjs -- edit it there, not here.
// Generated: Latin American wording for B1 Unit 6. B1_UNIT6_LATAM adds
// accepted answers (papás, carro, celular, recién) next to the Spain wording;
// B1_UNIT6_SWAP makes the Latin American word the main one where the lesson
// showed the Spain word (carro, celular, departamento, la tarea, manejar,
// caminando, sándwich), keeping the Spain answer accepted, and replaces items
// built on later grammar (no dejes de…, se me olvidó, perdone). Content only.
import type { LessonPatch } from "./patch";
export const B1_UNIT6_LATAM: Record<string, { alts?: Record<number, string[]>; checkAlts?: Record<number, Record<number, string[]>> }> = {
 "b1g-periphrases-infinitive": {
  "alts": {
   "18": [
    "Acabo de hablar con tu mamá."
   ],
   "20": [
    "Mi papá dejó de fumar hace diez años."
   ]
  }
 },
 "possessive-pronouns-1": {
  "alts": {
   "21": [
    "Mi auto es rojo y el tuyo es blanco."
   ]
  }
 },
 "b1d-pares-mi-el-mio": {
  "alts": {
   "16": [
    "El mío es el auto rojo.",
    "Mi auto es el rojo."
   ]
  }
 },
 "possessive-pronouns-2": {
  "alts": {
   "9": [
    "Mis papás y los de ella viven en la misma calle.",
    "Mis papás y los suyos viven en la misma calle."
   ]
  }
 },
 "a2-common-words-people": {
  "alts": {
   "11": [
    "Un amigo mío trabaja en una compañía de autos.",
    "Una amiga mía trabaja en una compañía de autos.",
    "Un amigo mío trabaja para una compañía de autos.",
    "Una amiga mía trabaja para una compañía de autos."
   ],
   "22": [
    "Tengo una buena relación con mis papás."
   ]
  }
 },
 "b1d-elige-explica-el-de-el": {
  "alts": {
   "13": [
    "Nuestro jardín es lindo, pero el de ellos es mejor.",
    "Nuestro jardín es lindo, pero el de ellos está mejor."
   ],
   "16": [
    "El auto de los García se estropeó, así que se llevaron el nuestro.",
    "El auto de los García se averió, así que se llevaron el nuestro.",
    "El auto de los García se estropeó, así que usaron el nuestro."
   ],
   "19": [
    "Conozco a los papás de Marcos, pero no a los de ella."
   ],
   "25": [
    "El auto de Ana es rojo y el de él es gris."
   ]
  }
 },
 "a2-common-words-happen": {
  "alts": {
   "5": [
    "Mis papás acaban de llegar."
   ]
  }
 }
};
export const B1_UNIT6_SWAP: Record<string, LessonPatch> = {
 "b1g-periphrases-infinitive": {
  "exercises": {
   "replace": {
    "3": {
     "type": "speak",
     "text": "¿Dónde está Ana? — Acaba de salir, llámala al celular.",
     "prompt": "Dilo en español: \"Where's Ana? — She's just gone out, call her mobile\"",
     "explanation": "Una forma de decirlo: «¿Dónde está Ana? — Acaba de salir, llámala al celular». Acabar de + infinitivo = hace un momento. En presente: acaba de salir.",
     "altAnswers": [
      "¿Dónde está Ana? — Acaba de salir, llámala al móvil."
     ]
    },
    "13": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "My grandfather never stops talking about his town.",
     "answer": "Mi abuelo nunca deja de hablar de su pueblo.",
     "altAnswers": [
      "Mi abuelo no deja nunca de hablar de su pueblo."
     ],
     "explanation": "Nunca deja de + infinitivo = no para de hacerlo: sigue haciéndolo siempre."
    }
   }
  },
  "sections": {
   "1": {
    "body": [
     "Ya conoces ir a + infinitivo para planes e intenciones: Voy a llamar a mi madre. En el pasado, iba a + infinitivo expresa un plan o una intención, muchas veces uno que al final no se cumplió: Iba a llamarte, pero no tuve tiempo."
    ],
    "examples": [
     {
      "es": "Iba a llamarte, pero no tuve tiempo.",
      "en": "I was going to call you, but I didn't have time."
     },
     {
      "es": "Íbamos a ir a la playa, pero llovió.",
      "en": "We were going to go to the beach, but it rained."
     }
    ],
    "check": [
     {
      "type": "multiple-choice",
      "question": "«I was going to tell you, but I didn't have time.»",
      "options": [
       "Iba a decírtelo, pero no tuve tiempo.",
       "Fui a decírtelo, pero no tuve tiempo.",
       "Voy a decírtelo, pero no tuve tiempo.",
       "Acababa de decírtelo, pero no tuve tiempo."
      ],
      "correctIndex": 0,
      "explanation": "Un plan del pasado que no se cumplió → iba a + infinitivo. «Fui a decírtelo» cuenta que fuiste (movimiento), «voy a» es un plan presente y «acababa de» diría que ya lo habías dicho."
     }
    ]
   },
   "3": {
    "body": [
     "Volver a + infinitivo = hacer algo otra vez: Volvió a llamar (he called again). Es muy frecuente y natural; «llamó otra vez» también es correcto.",
     "Dejar de + infinitivo = parar, abandonar una costumbre: Dejé de fumar hace dos años. En negativo, no dejar de = seguir: Nunca deja de sonreír (she never stops smiling).",
     "Volver a también aparece en promesas: No volverá a pasar = It won't happen again."
    ],
    "examples": [
     {
      "es": "¿Puedes volver a explicarlo?",
      "en": "Can you explain it again?"
     },
     {
      "es": "Perdón, no volverá a pasar.",
      "en": "Sorry, it won't happen again."
     },
     {
      "es": "Mi padre dejó de fumar el año pasado.",
      "en": "My father stopped smoking last year."
     },
     {
      "es": "Ha dejado de llover.",
      "en": "It's stopped raining."
     },
     {
      "es": "Mi abuelo nunca deja de hablar.",
      "en": "My grandfather never stops talking."
     }
    ]
   }
  }
 },
 "possessive-pronouns-1": {
  "exercises": {
   "replace": {
    "3": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "Mi carro es viejo; ___ es nuevo.",
     "answer": "el tuyo",
     "en": "My car is old; [yours] is new (tú).",
     "explanation": "Como sujeto, el pronombre posesivo necesita artículo: «el tuyo», no «tuyo»."
    },
    "8": {
     "type": "speak",
     "text": "Si tu computadora no funciona, usa la mía.",
     "prompt": "Dilo en español: \"If your computer doesn't work, use mine\"",
     "explanation": "Una forma de decirlo: «Si tu computadora no funciona, usa la mía». Como complemento directo, el artículo es obligatorio: «usa la mía», nunca «usa mía»."
    },
    "18": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Sustituye «nuestro departamento» por un pronombre posesivo.",
     "source": "Su departamento tiene dos habitaciones y nuestro departamento tiene tres.",
     "answer": "Su departamento tiene dos habitaciones y el nuestro tiene tres.",
     "altAnswers": [
      "Su departamento tiene dos habitaciones y el nuestro, tres.",
      "Su piso tiene dos habitaciones y el nuestro tiene tres.",
      "Su piso tiene dos habitaciones y el nuestro, tres."
     ],
     "explanation": "Para no repetir «departamento», nuestro + departamento pasa a artículo + posesivo largo: el nuestro."
    },
    "21": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Corrige la frase.",
     "source": "Corrige: «Mi carro es rojo y tuyo es blanco.»",
     "answer": "Mi carro es rojo y el tuyo es blanco.",
     "explanation": "Como sujeto, el pronombre posesivo necesita el artículo: el tuyo. Sin artículo solo va detrás de ser (es tuyo).",
     "altAnswers": [
      "Mi coche es rojo y el tuyo es blanco."
     ]
    }
   }
  },
  "sections": {
   "0": {
    "check": [
     {
      "type": "multiple-choice",
      "question": "Mi carro es rojo. ¿De qué color es ___? (tu carro)",
      "options": [
       "el tuyo",
       "tu",
       "el tu",
       "tuyo"
      ],
      "correctIndex": 0,
      "explanation": "El pronombre sustituye al sustantivo, así que lleva artículo + forma larga: el tuyo. «Tu» es el adjetivo y necesita un sustantivo detrás (tu carro); «el tu» no existe y «tuyo» sin artículo no sustituye aquí al sustantivo."
     }
    ]
   },
   "2": {
    "examples": [
     {
      "es": "Este abrigo es mío.",
      "en": "This coat is mine."
     },
     {
      "es": "De todos los carros del garaje, el mío es el rojo.",
      "en": "Of all the cars in the garage, mine is the red one."
     },
     {
      "es": "Esas llaves no son tuyas; son nuestras.",
      "en": "Those keys aren't yours; they're ours."
     }
    ]
   }
  }
 },
 "b1d-patron-el-mio-la-mia": {
  "exercises": {
   "replace": {
    "1": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "Mis lentes son negras; ___ son marrones.",
     "answer": "las tuyas",
     "en": "My glasses are black; [yours] are brown (tú).",
     "explanation": "las tuyas: possessive pronoun, fem. plural (lentes). Lentes es femenino plural: las tuyas."
    },
    "2": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "Nuestro departamento es pequeño; ___ es enorme.",
     "answer": "el suyo",
     "altAnswers": [
      "el de ellos"
     ],
     "en": "Our apartment is small; [theirs] is huge.",
     "explanation": "el suyo: possessive pronoun, masculine (departamento). El dueño es «ellos», pero la terminación la decide departamento (masculino singular): el suyo."
    },
    "19": {
     "type": "multiple-choice",
     "question": "Javier habla de sus lentes: «¿Has visto ___?»",
     "options": [
      "los míos",
      "las mías",
      "el mío",
      "mis"
     ],
     "correctIndex": 1,
     "explanation": "Lentes es femenino plural, aunque hable un chico."
    }
   }
  },
  "sections": {
   "0": {
    "examples": [
     {
      "es": "Tu celular es nuevo; el mío es viejo.",
      "en": "Your phone is new; mine is old. (celular: masculino singular)"
     },
     {
      "es": "Mis padres viven lejos; los tuyos viven cerca.",
      "en": "My parents live far away; yours live nearby. (padres: masculino plural)"
     },
     {
      "es": "Andrés no encuentra su cartera. ¿Has visto la suya?",
      "en": "Andrés can't find his wallet. Have you seen his? (cartera: femenino, aunque el dueño es un chico)"
     }
    ]
   }
  }
 },
 "b1d-pares-mi-el-mio": {
  "exercises": {
   "replace": {
    "8": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "___ computadora va muy lenta; ¿puedo usar la tuya?",
     "answer": "Mi",
     "en": "[My] computer is very slow; can I use yours?",
     "explanation": "Delante del sustantivo va el adjetivo «mi», sin artículo."
    },
    "16": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Corrige la frase.",
     "source": "Corrige: «Mi es el carro rojo.»",
     "answer": "El mío es el carro rojo.",
     "altAnswers": [
      "Mi carro es el rojo.",
      "El mío es el coche rojo.",
      "Mi coche es el rojo."
     ],
     "explanation": "«Mi» siempre necesita un sustantivo detrás. Sin él, como sujeto, se usa el pronombre con artículo: el mío."
    },
    "17": {
     "type": "write",
     "prompt": "Tienes un nuevo amigo por correspondencia en otro país. Escríbele un correo comparando tu vida con la suya: vuestras familias, vuestras casas y vuestros colegios.",
     "minWords": 50,
     "maxWords": 90,
     "rubric": [
      "Al menos cinco pronombres posesivos (la mía, el tuyo, los míos…)",
      "Contraste entre adjetivo y pronombre (tu casa / la nuestra)",
      "Concordancia con la cosa, no con el dueño",
      "Saludo y despedida informales"
     ],
     "modelAnswer": "¡Hola, Marco! Gracias por tu correo y por las fotos. Tu familia es muy grande; la mía es pequeña: solo somos mis padres, mi hermano y yo. Tu casa tiene jardín, pero la nuestra es un departamento en el centro de Bilbao. Mi colegio está muy cerca, a cinco minutos andando. ¿El tuyo está lejos? Tus profesores parecen muy simpáticos; los míos son un poco estrictos. Mis aficiones son el fútbol y la música. ¿Cuáles son las tuyas? ¡Escríbeme pronto! Iker",
     "explanation": "Mi, tu y nuestra van delante del sustantivo; la mía, el tuyo y los míos lo sustituyen y concuerdan con la cosa: tu casa → la nuestra, tus profesores → los míos."
    }
   }
  }
 },
 "possessive-pronouns-2": {
  "exercises": {
   "replace": {
    "0": {
     "type": "word-order",
     "prompt": "Ordena las palabras.",
     "words": [
      "El",
      "carro",
      "rojo",
      "es",
      "nuestro"
     ],
     "translation": "The red car is ours.",
     "explanation": "Después de ser, para decir de quién es algo, el posesivo va sin artículo y concuerda con 'carro': es nuestro («es el nuestro» = cuál de varios)."
    },
    "4": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "Luis and Carmen have phones. His is new; hers is old.",
     "answer": "Luis y Carmen tienen celulares. El de él es nuevo; el de ella es viejo.",
     "altAnswers": [
      "Luis y Carmen tienen teléfonos. El de él es nuevo; el de ella es viejo.",
      "Luis y Carmen tienen celulares. El de él es nuevo y el de ella es viejo.",
      "Luis y Carmen tienen móviles. El de él es nuevo; el de ella es viejo.",
      "Luis y Carmen tienen móviles. El de él es nuevo y el de ella es viejo."
     ],
     "explanation": "Con dos dueños posibles, «el de él / el de ella» evita la ambigüedad de «el suyo»."
    },
    "5": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "Excuse me, is this coat yours? (ustedes)",
     "answer": "Perdón, ¿este abrigo es de ustedes?",
     "altAnswers": [
      "Perdonen, ¿es de ustedes este abrigo?",
      "Perdonen, ¿este abrigo es suyo?",
      "Perdonen, ¿es suyo este abrigo?",
      "Disculpen, ¿este abrigo es de ustedes?",
      "Disculpen, ¿es de ustedes este abrigo?"
     ],
     "explanation": "«De ustedes» aclara a quién te refieres; «suyo» también es correcto."
    },
    "10": {
     "type": "word-order",
     "prompt": "Ordena las palabras.",
     "words": [
      "El",
      "carro",
      "de",
      "Sara",
      "es",
      "eléctrico",
      "y",
      "el",
      "de",
      "él",
      "también"
     ],
     "translation": "Sara's car is electric and his is too",
     "explanation": "«El de él» deja claro que hablamos del carro de él, no del de Sara; «el suyo» sería ambiguo."
    },
    "23": {
     "type": "speak",
     "text": "Perdón, ¿este abrigo es de ustedes?",
     "prompt": "Dilo en español: \"Excuse me, is this coat yours?\"",
     "altAnswers": [
      "Perdonen, ¿es de ustedes este abrigo?",
      "Perdonen, ¿este abrigo es suyo?",
      "Perdonen, ¿es suyo este abrigo?",
      "Disculpen, ¿este abrigo es de ustedes?",
      "Disculpen, ¿es de ustedes este abrigo?"
     ],
     "explanation": "Una forma de decirlo: «Perdón, ¿este abrigo es de ustedes?». «De ustedes» aclara a quién te refieres; «suyo» también es correcto."
    }
   }
  },
  "sections": {
   "0": {
    "examples": [
     {
      "es": "Ana y Luis tienen carros nuevos. El de ella es azul; el de él es negro.",
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
    ]
   }
  }
 },
 "b1r-contrast-mi-mio": {
  "exercises": {
   "replace": {
    "1": {
     "type": "fill-blank",
     "prompt": "Completa con el posesivo correcto.",
     "sentence": "Este no es ___ carro; es el de mi hermano.",
     "answer": "mi",
     "explanation": "Delante del sustantivo se usa la forma átona: mi carro."
    },
    "4": {
     "type": "matching",
     "instructions": "Relaciona cada adjetivo con su pronombre.",
     "pairs": [
      {
       "left": "mis lentes",
       "right": "las mías"
      },
      {
       "left": "tu hermano",
       "right": "el tuyo"
      },
      {
       "left": "su idea",
       "right": "la suya"
      },
      {
       "left": "nuestros hijos",
       "right": "los nuestros"
      }
     ],
     "explanation": "El pronombre toma el género y número del objeto."
    },
    "16": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "Estas no son ___ lentes; las tuyas están en el carro.",
     "answer": "tus",
     "en": "These aren't [your] glasses; yours are in the car (tú).",
     "explanation": "Delante del sustantivo va la forma corta «tus», sin artículo; «las tuyas» sustituye al sustantivo."
    },
    "19": {
     "type": "multiple-choice",
     "question": "«___ carro está en el taller.»",
     "options": [
      "Mi",
      "Mío",
      "El mi",
      "Mía"
     ],
     "correctIndex": 0,
     "explanation": "Delante del sustantivo, solo la forma corta «mi»."
    }
   }
  },
  "sections": {
   "0": {
    "body": [
     "Recuerda la regla: cada persona tiene una forma corta (mi, tu, su) y una larga (mío, tuyo, suyo); nuestro y vuestro son iguales en las dos. La corta va siempre delante del sustantivo y nunca sola. La larga va en todos los demás sitios: detrás del sustantivo (un amigo mío), después de ser (es mío) o en lugar del sustantivo con artículo (el mío).",
     "¿Por qué? La forma corta no tiene acento propio y se apoya en el sustantivo que la sigue; la larga es tónica y puede ir sola. Por eso «es mi» o «mío carro» son imposibles."
    ]
   }
  }
 },
 "a2-common-words-people": {
  "exercises": {
   "replace": {
    "9": {
     "type": "translate",
     "direction": "es-en",
     "prompt": "Translate to English.",
     "source": "Perdón, señorita, ¿es este su bolso?",
     "answer": "Excuse me, miss, is this your bag?",
     "altAnswers": [
      "Excuse me, miss, is this your purse?",
      "Excuse me, miss, is this your handbag?"
     ],
     "explanation": "Señorita = miss; su = your (usted)."
    },
    "11": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Translate to Spanish.",
     "source": "A friend of mine works for a car company.",
     "answer": "Un amigo mío trabaja en una compañía de carros.",
     "altAnswers": [
      "Una amiga mía trabaja en una compañía de carros.",
      "Un amigo mío trabaja para una compañía de carros.",
      "Una amiga mía trabaja para una compañía de carros.",
      "Un amigo mío trabaja en una compañía de coches.",
      "Una amiga mía trabaja en una compañía de coches.",
      "Un amigo mío trabaja para una compañía de coches.",
      "Una amiga mía trabaja para una compañía de coches."
     ],
     "explanation": "The long possessive goes after the noun (un amigo mío = a friend of mine); compañía = company (business)."
    }
   }
  },
  "sections": {
   "1": {
    "examples": [
     {
      "es": "Un muchacho me ayudó con las maletas.",
      "en": "A young man helped me with the suitcases."
     },
     {
      "es": "Los muchachos juegan al fútbol en el parque.",
      "en": "The boys are playing soccer in the park."
     },
     {
      "es": "Perdón, señorita, ¿dónde está la estación?",
      "en": "Excuse me, miss, where is the station?"
     },
     {
      "es": "Damas y caballeros, bienvenidos.",
      "en": "Ladies and gentlemen, welcome."
     },
     {
      "es": "El baño de caballeros está a la izquierda.",
      "en": "The men's restroom is on the left."
     }
    ]
   }
  }
 },
 "a2-common-words-feelings": {
  "sections": {
   "5": {
    "examples": [
     {
      "es": "Te quiero con toda mi alma.",
      "en": "I love you with all my heart."
     },
     {
      "es": "Es un honor conocerlo, señor.",
      "en": "It's an honor to meet you, sir."
     },
     {
      "es": "Hicieron una cena en honor de su abuelo.",
      "en": "They had a dinner in honor of their grandfather."
     }
    ]
   }
  }
 },
 "b1d-elige-explica-el-de-el": {
  "exercises": {
   "replace": {
    "10": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "Excuse me, is this table yours or theirs? (ustedes)",
     "answer": "Perdón, ¿esta mesa es de ustedes o de ellos?",
     "altAnswers": [
      "Disculpen, ¿esta mesa es de ustedes o de ellos?",
      "Perdonen, ¿es esta mesa de ustedes o de ellos?",
      "Disculpen, ¿es esta mesa de ustedes o de ellos?"
     ],
     "explanation": "«De ustedes» señala a las personas con quienes hablas; «de ellos», a otras personas de las que hablas."
    },
    "14": {
     "type": "word-order",
     "prompt": "Ordena las palabras.",
     "words": [
      "Me",
      "gusta",
      "más",
      "el",
      "departamento",
      "de",
      "ella",
      "que",
      "el",
      "de",
      "él"
     ],
     "translation": "I like her apartment more than his",
     "explanation": "«El de él» evita repetir «departamento» y aclara el dueño."
    },
    "16": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "The Garcías' car broke down, so they took ours.",
     "answer": "El carro de los García se estropeó, así que se llevaron el nuestro.",
     "altAnswers": [
      "El carro de los García se averió, así que se llevaron el nuestro.",
      "El carro de los García se estropeó, así que usaron el nuestro.",
      "El carro de los García se descompuso, así que se llevaron el nuestro.",
      "El coche de los García se estropeó, así que se llevaron el nuestro.",
      "El coche de los García se averió, así que se llevaron el nuestro.",
      "El coche de los García se estropeó, así que usaron el nuestro."
     ],
     "explanation": "«El nuestro» no es ambiguo: no necesita aclaración."
    },
    "18": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "Your rooms are on the second floor; theirs are on the third. (ustedes)",
     "answer": "Las habitaciones de ustedes están en el segundo piso; las de ellos están en el tercero.",
     "altAnswers": [
      "Sus habitaciones están en el segundo piso; las de ellos están en el tercero.",
      "Las habitaciones de ustedes están en la segunda planta; las de ellos están en la tercera.",
      "Sus habitaciones están en la segunda planta; las de ellos están en la tercera.",
      "Las habitaciones de ustedes están en el segundo piso; las de ellos están en el tercero.",
      "Sus habitaciones están en el segundo piso; las de ellos están en el tercero."
     ],
     "explanation": "«De ustedes / de ellos» separa a los dos grupos."
    },
    "25": {
     "type": "speak",
     "text": "El carro de Ana es rojo y el de él es gris.",
     "prompt": "Dilo en español: \"Ana's car is red and his is grey\"",
     "explanation": "Una forma de decirlo: «El carro de Ana es rojo y el de él es gris». dos dueños: el de él",
     "altAnswers": [
      "El coche de Ana es rojo y el de él es gris."
     ]
    }
   }
  },
  "sections": {
   "0": {
    "examples": [
     {
      "es": "El carro de Ana es rojo y el de él es gris.",
      "en": "Ana's car is red and his is grey. (dos dueños: el de él)"
     },
     {
      "es": "Ana ha traído su guitarra y yo la mía. La suya es mejor.",
      "en": "Ana brought her guitar and I brought mine. Hers is better. (un solo dueño posible: la suya basta)"
     }
    ]
   }
  }
 },
 "b1d-rep-perfecto-hoy-ayer": {
  "sections": {
   "0": {
    "body": [
     "Recuerda la regla: con un periodo cerrado (ayer, el lunes, en 2019, hace dos días) se usa el indefinido: trabajé. Para experiencias y para lo que sigue abierto (nunca, ya, todavía no, este año) se usa también el pretérito perfecto: ¿has estado en México?, todavía no he terminado.",
     "Con hoy o esta mañana, en Latinoamérica lo más común es el indefinido (hoy tomé tres cafés) y en España el perfecto (hoy he tomado tres cafés). Las dos formas son correctas y aquí se aceptan las dos."
    ]
   }
  }
 },
 "a2g-diminutives": {
  "exercises": {
   "replace": {
    "1": {
     "type": "fill-blank",
     "prompt": "How do you say the bold words in Spanish?",
     "sentence": "Vamos caminando, el parque está ___.",
     "answer": "cerquita",
     "en": "Let's walk, the park is [really close].",
     "explanation": "Cerca + -ita = cerquita (c → qu before i). The diminutive makes it sound even closer."
    },
    "8": {
     "type": "multiple-choice",
     "question": "At a train station in Spain, a sign says \"Venta de boletos: ventanilla 3\". What is it?",
     "options": [
      "Ticket window 3",
      "Small window 3",
      "Car window 3",
      "Shop 3"
     ],
     "correctIndex": 0,
     "explanation": "Ventanilla is a diminutive that became its own word: a ticket window or counter (and also a car or train window)."
    },
    "11": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Translate to Spanish.",
     "source": "My little brother wants a cheese sandwich.",
     "answer": "Mi hermanito quiere un sándwich de queso.",
     "altAnswers": [
      "Mi hermano pequeño quiere un bocadillo de queso.",
      "Mi hermano menor quiere un bocadillo de queso."
     ],
     "explanation": "Hermano → hermanito sounds affectionate; in Spain you would also hear un bocadillo de queso."
    },
    "12": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Translate to Spanish.",
     "source": "Drive really slowly, please. (to a friend)",
     "answer": "Maneja despacito, por favor.",
     "altAnswers": [
      "Conduce despacito, por favor."
     ],
     "explanation": "Despacio → despacito makes the adverb stronger: really slowly. Maneja is the tú command."
    },
    "17": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Correct the sentence.",
     "source": "El bebé duerme en su cochito.",
     "answer": "El bebé duerme en su cochecito.",
     "explanation": "Words ending in -e take -cito: carro → cochecito (which also means a baby's pram)."
    },
    "22": {
     "type": "write",
     "prompt": "Write a short letter to your grandmother about your new apartment and a visit from your little sister. Use at least four diminutives.",
     "minWords": 25,
     "maxWords": 60,
     "rubric": [
      "At least four diminutives (-ito, -ita, -cito)",
      "Abuelita or another affectionate form",
      "The preterite for what happened",
      "A warm closing (un besito…)"
     ],
     "modelAnswer": "Querida abuelita: ¿Cómo estás? Te escribo desde mi pisito nuevo. Es pequeñito, pero tiene una terracita llena de plantas. Ayer vino mi hermanita y tomamos un cafecito al sol. Hablamos mucho de ti. ¡Te echo de menos! Un besito muy grande. Tu nieta, Sofía",
     "explanation": "-Ito and -ita make things small or affectionate (abuelita, pisito, hermanita); words ending in -e or -n often take -cito (cafecito). Pequeño becomes pequeñito."
    }
   }
  },
  "sections": {
   "2": {
    "examples": [
     {
      "es": "Compra los boletos en la ventanilla.",
      "en": "Buy the tickets at the ticket window."
     },
     {
      "es": "Me comí un bocadillo de queso.",
      "en": "I had a cheese sandwich. (Spain)"
     }
    ]
   }
  }
 },
 "a2-common-words-happen": {
  "sections": {
   "1": {
    "examples": [
     {
      "es": "La película acaba a las once.",
      "en": "The movie ends at eleven."
     },
     {
      "es": "El partido acabó dos a uno.",
      "en": "The match ended two to one."
     },
     {
      "es": "Acabo de llegar a casa.",
      "en": "I've just got home."
     },
     {
      "es": "Ana acaba de salir.",
      "en": "Ana has just left."
     },
     {
      "es": "Acabo la tarea y luego salimos.",
      "en": "I'll finish my homework and then we'll go out."
     }
    ]
   },
   "3": {
    "examples": [
     {
      "es": "¡Basta! No quiero discutir más.",
      "en": "Enough! I don't want to argue anymore."
     },
     {
      "es": "¡Cállate un momento! Quiero escuchar la noticia.",
      "en": "Be quiet a moment! I want to hear the news."
     },
     {
      "es": "Entra, la puerta está abierta.",
      "en": "Come in, the door is open."
     },
     {
      "es": "¡Anda! ¡Qué carro tan bonito!",
      "en": "Wow! What a nice car!"
     },
     {
      "es": "Te lo juro, no fui yo.",
      "en": "I swear, it wasn't me."
     },
     {
      "es": "Creí que era tu hermano.",
      "en": "I thought it was your brother."
     }
    ]
   }
  }
 },
 "a2-common-words-happen-part-2": {
  "exercises": {
   "replace": {
    "3": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Translate to Spanish.",
     "source": "I have just finished my homework.",
     "answer": "Acabo de terminar mi tarea.",
     "altAnswers": [
      "Acabo de terminar la tarea.",
      "Acabo de hacer mi tarea.",
      "Acabo de terminar mis deberes.",
      "Acabo de hacer mis deberes.",
      "Acabo de terminar los deberes."
     ],
     "explanation": "Acabar de + infinitive, in the present tense."
    }
   }
  }
 }
};
