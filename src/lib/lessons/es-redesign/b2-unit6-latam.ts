// Synced from cheneygross-afk/lengo:src/lib/lessons/es-redesign/b2-unit6-latam.ts by scripts/sync-content.mjs -- edit it there, not here.
// Generated: Latin American wording for B2 Unit 6. B2_UNIT6_LATAM adds
// accepted answers (papás, carro, auto, celular, departamento, en la noche)
// next to the Spain wording; B2_UNIT6_SWAP makes the Latin American word the
// main one where the lesson showed the Spain word (carro, celular, computadora,
// departamento, boleto, mesero, estacionar, costo, enojarse, licencia de
// manejar), keeping the Spain answer accepted. It also gives the vosotros items
// an ustedes answer (vosotros still accepted) and replaces items that used later
// grammar: the passive with ser, the perfect subjunctive and aunque +
// subjunctive. Content only.
import type { LessonPatch } from "./patch";
export const B2_UNIT6_LATAM: Record<string, { alts?: Record<number, string[]>; checkAlts?: Record<number, Record<number, string[]>> }> = {
 "a2d-future-probability": {
  "alts": {
   "21": [
    "Tus papás estarán muy orgullosos."
   ]
  }
 },
 "b1r-tema-inmigracion": {
  "alts": {
   "2": [
    "Espero que mis papás vengan a visitarme pronto."
   ]
  }
 },
 "b1g-accidental-se": {
  "alts": {
   "23": [
    "A mis papás se les perdió el perro."
   ]
  }
 },
 "b1r-tema-convivencia-vecinos": {
  "alts": {
   "8": [
    "¿Podrías cerrar la puerta de la calle en la noche?",
    "¿Podrías cerrar el portal en la noche?"
   ],
   "24": [
    "Perdona que te moleste, pero se oye mucho ruido en la noche."
   ]
  }
 }
};
export const B2_UNIT6_SWAP: Record<string, LessonPatch> = {
 "a2d-future-probability": {
  "exercises": {
   "replace": {
    "19": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Translate to Spanish.",
     "source": "I wonder how much this car costs.",
     "answer": "¿Cuánto costará este carro?",
     "altAnswers": [
      "¿Cuánto costará este auto?",
      "¿Cuánto costará este coche?"
     ],
     "explanation": "Costará = I wonder how much it costs (probability, not future)."
    }
   }
  },
  "sections": {
   "0": {
    "check": [
     {
      "type": "multiple-choice",
      "question": "«¿Dónde estará mi celular?» means…",
      "options": [
       "I wonder where my phone is.",
       "Where will my phone be tomorrow?",
       "Where was my phone?",
       "My phone will be here."
      ],
      "correctIndex": 0,
      "explanation": "The future of probability expresses wondering: I wonder where my phone is. It's not about tomorrow, the past or a statement."
     },
     {
      "type": "multiple-choice",
      "question": "Your friend's eyes are red and she's yawning. Guess: \"She must be sleepy.\"",
      "options": [
       "Tendrá sueño.",
       "Tiene sueño.",
       "Tendría sueño mañana.",
       "Tuvo sueño."
      ],
      "correctIndex": 0,
      "explanation": "You're guessing about now, so use the future: tendrá sueño. Tiene sueño states it as a known fact, and tuvo is past."
     }
    ]
   }
  }
 },
 "b1d-preguntas-es-posible": {
  "exercises": {
   "replace": {
    "4": {
     "type": "fill-blank",
     "prompt": "Responde.",
     "sentence": "—¿Se mudan este año? —Es probable que nos ___ en verano.",
     "answer": "mudemos",
     "explanation": "«Es probable que» → subjuntivo, con el reflexivo delante: nos mudemos."
    },
    "5": {
     "type": "multiple-choice",
     "question": "«—¿Van a salir esta noche? —Puede que ___.»",
     "options": [
      "salgamos",
      "salimos",
      "saldremos",
      "salir"
     ],
     "correctIndex": 0,
     "explanation": "«Puede que» expresa posibilidad y pide subjuntivo: puede que salgamos. «Salimos» y «saldremos» son indicativo, y «salir» es infinitivo."
    },
    "15": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "(—¿Se van de vacaciones en agosto?) We'll probably go to the mountains.",
     "answer": "Es probable que vayamos a la montaña.",
     "altAnswers": [
      "Es probable que vayamos a las montañas."
     ],
     "explanation": "Es probable que + subjuntivo de ir: vayamos."
    },
    "16": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "(—¿Por qué no contesta Marta?) She may be asleep, or she might have her phone switched off.",
     "answer": "Es posible que esté dormida, o puede que tenga el celular apagado.",
     "altAnswers": [
      "Puede que esté dormida, o puede que tenga el celular apagado.",
      "Es posible que esté dormida, o es posible que tenga el celular apagado.",
      "Es posible que esté dormida, o puede que tenga el teléfono apagado.",
      "Es posible que esté dormida, o puede que tenga el móvil apagado.",
      "Puede que esté dormida, o puede que tenga el móvil apagado.",
      "Es posible que esté dormida, o es posible que tenga el móvil apagado."
     ],
     "explanation": "Es posible que y puede que llevan subjuntivo: esté, tenga."
    },
    "17": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "—¿Te gusta el departamento? —Sí, es posible que lo ___.",
     "answer": "alquile",
     "en": "—Do you like the apartment? —Yes, I may [rent] it.",
     "explanation": "Es posible que (no estás seguro) → subjuntivo: alquile."
    },
    "18": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "—¿Sabe Pedro manejar? —Es probable que ___; tiene carro.",
     "answer": "sepa",
     "en": "—Can Pedro drive? —He probably [can]; he has a car.",
     "explanation": "Es probable que → subjuntivo; saber es irregular: sepa."
    },
    "21": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "—¿Está enojada tu jefa? —Es posible que ___ cansada, nada más.",
     "answer": "esté",
     "en": "—Is your boss angry? —She [may be] tired, that's all.",
     "explanation": "Es posible que + subjuntivo: esté."
    }
   }
  }
 },
 "b1g-probability-future-conditional": {
  "exercises": {
   "replace": {
    "2": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "No sé cuánto cuesta ese carro; ___ unos treinta mil euros.",
     "answer": "costará",
     "en": "I don't know how much that car costs; it [must cost] about thirty thousand euros.",
     "explanation": "Suposición sobre el presente con un número aproximado: futuro."
    },
    "13": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "Whose car can that be?",
     "answer": "¿De quién será ese carro?",
     "altAnswers": [
      "¿De quién será ese auto?",
      "¿De quién será ese coche?"
     ],
     "explanation": "Pregunta de duda sobre el presente → futuro: «será»."
    }
   }
  },
  "sections": {
   "1": {
    "body": [
     "En preguntas expresa duda o curiosidad: ¿Dónde estará mi celular? (= me pregunto dónde está). ¿Quién será a estas horas?",
     "¿Por qué el futuro? Porque una suposición es algo que todavía no puedes confirmar: lo presentas como algo que se comprobará más tarde. Así, lo que probablemente es ahora va en futuro, y lo que probablemente era antes, en condicional."
    ],
    "examples": [
     {
      "es": "¿Dónde estará mi celular?",
      "en": "Where can my phone be?"
     },
     {
      "es": "Llaman a la puerta. ¿Quién será?",
      "en": "Someone's at the door. Who can it be?"
     }
    ],
    "check": [
     {
      "type": "multiple-choice",
      "question": "Buscas tus lentes por toda la casa y no las encuentras. ¿Qué te preguntas?",
      "options": [
       "¿Dónde estarán mis lentes?",
       "¿Dónde estuvieron mis lentes?",
       "¿Dónde estaban mis lentes ayer?",
       "¿Dónde estarían mis lentes mañana?"
      ],
      "correctIndex": 0,
      "explanation": "Duda sobre el presente → futuro de probabilidad: ¿Dónde estarán? (= me pregunto dónde están ahora). «Estuvieron» y «estaban» hablan del pasado, y el condicional serviría para suponer sobre el pasado, no sobre mañana."
     }
    ]
   }
  }
 },
 "b1d-patron-se-vende-se-venden": {
  "exercises": {
   "replace": {
    "1": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "Se ___ mesero con experiencia.",
     "answer": "busca",
     "en": "Experienced waiter [wanted].",
     "explanation": "buscar → se busca: impersonal/passive se, singular. «Mesero» es singular (en los anuncios se omite el artículo) → se busca."
    },
    "4": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "Se ___ tortas por encargo.",
     "answer": "hacen",
     "en": "Cakes [made] to order.",
     "explanation": "«Tortas» es plural: se hacen. Quien las hace no aparece y no influye en el verbo."
    },
    "16": {
     "type": "speak",
     "text": "Se arreglan relojes y celulares.",
     "prompt": "Dilo en español: \"Watches and phones repaired\"",
     "explanation": "Una forma de decirlo: «Se arreglan relojes y celulares». dos sustantivos → plural",
     "altAnswers": [
      "Se arreglan relojes y móviles."
     ]
    }
   }
  },
  "sections": {
   "0": {
    "body": [
     "Recuerda la regla: en el se pasivo el verbo va en tercera persona y concuerda con el sustantivo: se vende una casa, se venden dos casas. ¿Por qué? Porque ese sustantivo es el sujeto gramatical (dos casas se venden); quien vende no aparece, así que no cuenta.",
     "Dos casos que engañan: con dos sustantivos unidos por «y», normalmente plural (se arreglan relojes y celulares; en carteles de idiomas también se ve el singular: se habla francés y alemán); con un infinitivo detrás, singular, porque una acción no tiene número (se prohíbe estacionar)."
    ],
    "examples": [
     {
      "es": "Se alquila un apartamento en el centro.",
      "en": "An apartment in the center for rent. (un apartamento → singular)"
     },
     {
      "es": "Se alquilan habitaciones para estudiantes.",
      "en": "Rooms for students for rent. (habitaciones → plural)"
     },
     {
      "es": "Se arreglan relojes y celulares.",
      "en": "Watches and phones repaired. (dos sustantivos → plural)"
     },
     {
      "es": "Se prohíbe estacionar en la puerta.",
      "en": "No parking at the door. (estacionar es una acción → singular)"
     },
     {
      "es": "Ayer se vendieron todas las entradas.",
      "en": "All the tickets were sold yesterday. (también en pasado concuerda)"
     }
    ],
    "check": [
     {
      "type": "fill-blank",
      "prompt": "¿Cómo se dicen en español las palabras en negrita?",
      "sentence": "Se ___ scooters eléctricos.",
      "answer": "reparan",
      "en": "Electric scooters [are repaired] (here).",
      "explanation": "reparar → se reparan: passive se, plural (scooters). «Scooters» es el sujeto y es plural → se reparan."
     },
     {
      "type": "fill-blank",
      "prompt": "Completa.",
      "sentence": "Para este trabajo se ___ tener licencia de manejar. (requerir)",
      "answer": "requiere",
      "explanation": "Detrás va un infinitivo (tener), que es una acción y no tiene plural: el verbo queda en singular, se requiere."
     }
    ]
   }
  }
 },
 "b1d-patron-se-vende-se-venden-part-2": {
  "exercises": {
   "replace": {
    "1": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "Se ___ computadoras y celulares.",
     "answer": "reparan",
     "en": "Computers and mobile phones [repaired].",
     "explanation": "reparar → se reparan: passive se, plural (computadoras y celulares). Dos sustantivos unidos por «y» suman un sujeto plural → se reparan."
    },
    "3": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "Se ___ un departamento con terraza.",
     "answer": "vende",
     "en": "Apartment with terrace [for sale].",
     "explanation": "«Un departamento» es el sujeto y es singular: se vende."
    },
    "15": {
     "type": "speak",
     "text": "Se vende un carro en buen estado.",
     "prompt": "Dilo en español: \"Car in good condition for sale\"",
     "explanation": "Una forma de decirlo: «Se vende un carro en buen estado». vender → se vende: passive se, singular (un carro). «Un carro» es singular, así que el verbo también: se vende.",
     "altAnswers": [
      "Se vende un coche en buen estado."
     ]
    }
   }
  },
  "sections": {
   "0": {
    "check": [
     {
      "type": "fill-blank",
      "prompt": "¿Cómo se dicen en español las palabras en negrita?",
      "sentence": "Se ___ un carro en buen estado.",
      "answer": "vende",
      "en": "Car in good condition [for sale].",
      "explanation": "vender → se vende: passive se, singular (un carro). «Un carro» es singular, así que el verbo también: se vende."
     }
    ]
   }
  }
 },
 "b1d-pares-pasivo-impersonal": {
  "exercises": {
   "replace": {
    "16": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "In this restaurant the waiters are paid well.",
     "answer": "En este restaurante se paga bien a los meseros.",
     "altAnswers": [
      "En este restaurante se les paga bien a los meseros.",
      "En este restaurante se paga bien a los camareros.",
      "En este restaurante se les paga bien a los camareros."
     ],
     "explanation": "«A los meseros» son personas con «a»: «se paga», singular."
    }
   }
  },
  "sections": {
   "0": {
    "body": [
     "Recuerda la regla: mira lo que va con el verbo. Si es una cosa sin preposición, esa cosa es el sujeto y el verbo concuerda con ella: se venden flores (se pasivo). Si no hay ninguna cosa (se vive bien aquí) o lo que hay lleva preposición (se habla de política), no hay sujeto y el verbo queda en singular (se impersonal).",
     "El caso que engaña: las personas con «a». «A los vecinos» lleva preposición, así que no puede ser sujeto: se ayuda a los vecinos, siempre en singular, también con muchas personas."
    ]
   }
  }
 },
 "b1r-tema-competicion": {
  "exercises": {
   "replace": {
    "13": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Cambia a la pasiva con se.",
     "source": "Entregaron los premios al final de la noche.",
     "answer": "Se entregaron los premios al final de la noche.",
     "altAnswers": [
      "Los premios se entregaron al final de la noche."
     ],
     "explanation": "Con se no decimos quién los entregó: se entregaron, en plural por «los premios»."
    },
    "0": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "Los ganadores se ___ al final del programa.",
     "answer": "anunciarán",
     "en": "The winners [will be announced] at the end of the show.",
     "explanation": "anunciar → se anunciarán: passive se, future. Se + verbo en plural porque concuerda con «los ganadores»; no decimos quién los anuncia."
    },
    "4": {
     "type": "multi-select",
     "question": "¿Qué frases son correctas?",
     "options": [
      "Me sorprende que no quieras participar.",
      "Se eligió el mejor plato.",
      "Ojalá gano el año que viene.",
      "Estoy seguro de que ganarás."
     ],
     "correctIndexes": [
      0,
      1,
      3
     ],
     "explanation": "«Ojalá gano el año que viene» es incorrecta: ojalá pide subjuntivo, gane. Me sorprende que + subjuntivo (quieras) y estoy seguro de que + indicativo (ganarás) están bien usados."
    },
    "9": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Cambia la frase al se pasivo.",
     "source": "El jurado probó todos los platos.",
     "answer": "Se probaron todos los platos.",
     "altAnswers": [
      "Todos los platos se probaron."
     ],
     "explanation": "Con se no decimos quién lo hizo: el verbo concuerda con «todos los platos» (plural), se probaron."
    },
    "20": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Corrige la frase.",
     "source": "Me alegro de que te dan el premio.",
     "answer": "Me alegro de que te den el premio.",
     "altAnswers": [
      "Me alegra que te den el premio."
     ],
     "explanation": "«Me alegro de que» expresa emoción → subjuntivo: den, no «dan»."
    },
    "21": {
     "type": "word-order",
     "prompt": "Ordena las palabras.",
     "words": [
      "Se",
      "entregó",
      "el",
      "premio",
      "a",
      "un",
      "cocinero",
      "de",
      "Oaxaca"
     ],
     "translation": "The prize was given to a cook from Oaxaca",
     "explanation": "Se + verbo en singular porque concuerda con «el premio»; no decimos quién lo entregó."
    },
    "22": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "I don't believe you can make this in only an hour. (tú)",
     "answer": "No creo que puedas hacer esto en solo una hora.",
     "altAnswers": [
      "No creo que puedas hacerlo en solo una hora.",
      "No creo que puedas hacer esto en una sola hora."
     ],
     "explanation": "«No creo que» niega una opinión → subjuntivo: puedas."
    }
   }
  },
  "sections": {
   "0": {
    "body": [
     "Recuerda las reglas que usa un jurado. Para opinar: creo que + indicativo (lo afirmas), no creo que / no me parece que + subjuntivo (lo niegas). Para aconsejar con suavidad: yo en tu lugar + condicional (pondría, haría). Para anunciar resultados sin decir quién decide: se + verbo (se entregaron los premios, se eligió al ganador).",
     "¿Por qué el condicional en los consejos? Porque habla de lo que harías en una situación imaginada (yo en tu lugar), y eso suena menos directo que un mandato."
    ],
    "examples": [
     {
      "es": "Creo que tu plato tiene mucha personalidad.",
      "en": "I think your dish has a lot of personality. (creo que → indicativo)"
     },
     {
      "es": "No creo que el postre esté terminado.",
      "en": "I don't think the dessert is finished. (no creo que → subjuntivo)"
     },
     {
      "es": "Yo en tu lugar añadiría un poco de limón.",
      "en": "If I were you, I'd add a bit of lemon. (consejo → condicional)"
     },
     {
      "es": "Se le dio el premio a la concursante más joven.",
      "en": "The prize was given to the youngest contestant. (se + verbo: no decimos quién lo dio)"
     }
    ]
   }
  }
 },
 "b1r-tema-inmigracion": {
  "exercises": {
   "replace": {
    "1": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "Cuando llegué, nunca ___ comido tortilla de papas.",
     "answer": "había",
     "en": "When I arrived, I [had] never eaten Spanish omelette.",
     "explanation": "haber → había: pluperfect auxiliary, yo. La experiencia es anterior a «llegué» → pluscuamperfecto: había comido."
    },
    "12": {
     "type": "speak",
     "text": "Una compañera me ayudó a encontrar un departamento.",
     "prompt": "Dilo en español: \"A colleague helped me find an apartment\"",
     "altAnswers": [
      "Una compañera me ayudó a encontrar un apartamento.",
      "Una compañera de trabajo me ayudó a encontrar un departamento.",
      "Una compañera de trabajo me ayudó a encontrar un apartamento.",
      "Una compañera me ayudó a encontrar un piso.",
      "Una compañera de trabajo me ayudó a encontrar un piso."
     ],
     "explanation": "Una forma de decirlo: «Una compañera me ayudó a encontrar un departamento». Hecho concreto del pasado → indefinido; «ayudar a» + infinitivo."
    },
    "15": {
     "type": "word-order",
     "prompt": "Ordena las palabras.",
     "words": [
      "La",
      "mujer",
      "que",
      "me",
      "alquiló",
      "el",
      "departamento",
      "es",
      "muy",
      "amable"
     ],
     "translation": "The woman who rented me the apartment is very kind",
     "explanation": "Relativo «que» justo detrás de «la mujer»."
    }
   }
  }
 },
 "b1r-contrast-se-pasivo-impersonal": {
  "exercises": {
   "replace": {
    "3": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "Se ___ tres departamentos en el centro.",
     "answer": "alquilan",
     "en": "Three apartments downtown [for rent].",
     "explanation": "alquilar → alquilan: present, plural (passive 'se': 'se alquilan'). «Tres departamentos» es el sujeto y es plural → se alquilan."
    },
    "24": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Cambia a la construcción con se.",
     "source": "Invitaron a los estudiantes a la ceremonia.",
     "answer": "Se invitó a los estudiantes a la ceremonia.",
     "altAnswers": [
      "Se invitó a los alumnos a la ceremonia."
     ],
     "explanation": "Con se, las personas llevan «a» y dejan de ser sujeto: el verbo queda en singular (se invitó), también con muchas personas."
    }
   }
  },
  "sections": {
   "0": {
    "examples": [
     {
      "es": "Se venden casas.",
      "en": "Houses are sold. (pasivo: concuerda con casas)"
     },
     {
      "es": "Se vive bien aquí.",
      "en": "One lives well here. (impersonal: sin sustantivo)"
     },
     {
      "es": "Se busca a los testigos.",
      "en": "The witnesses are being sought. (impersonal: a + personas)"
     },
     {
      "es": "Se buscan departamentos baratos.",
      "en": "Cheap apartments wanted. (pasivo: departamentos, sin «a»)"
     }
    ]
   }
  }
 },
 "b1g-accidental-se": {
  "exercises": {
   "replace": {
    "10": {
     "type": "multi-select",
     "question": "¿Qué frases presentan el hecho como un accidente?",
     "options": [
      "Se me quemó la tostada.",
      "Quemé la carta en la chimenea.",
      "Se nos estropeó el carro.",
      "Se le escapó el gato."
     ],
     "correctIndexes": [
      0,
      2,
      3
     ],
     "explanation": "Las tres con se + pronombre presentan el hecho como algo que pasó sin querer. «Quemé la carta» es una acción voluntaria."
    },
    "11": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "A Marta se le ___ las lentes de sol en la playa.",
     "answer": "perdieron",
     "en": "Marta [lost] her sunglasses on the beach.",
     "explanation": "El verbo concuerda con la cosa («las lentes», plural), no con Marta: «perdieron», no «perdió»."
    },
    "15": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "My grandparents always forget their glasses at our house.",
     "answer": "A mis abuelos siempre se les olvidan las lentes en nuestra casa.",
     "altAnswers": [
      "A mis abuelos siempre se les olvidan los lentes en nuestra casa.",
      "Siempre se les olvidan las lentes a mis abuelos en nuestra casa.",
      "Siempre se les olvidan los lentes a mis abuelos en nuestra casa.",
      "A mis abuelos siempre se les olvidan las gafas en nuestra casa.",
      "Siempre se les olvidan las gafas a mis abuelos en nuestra casa."
     ],
     "explanation": "Se les + verbo en plural porque concuerda con «las lentes»; «se les olvida las lentes» es un error."
    },
    "17": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "How did your phone break? — It fell out of my pocket. (tú)",
     "answer": "¿Cómo se te rompió el celular? —Se me cayó del bolsillo.",
     "altAnswers": [
      "¿Cómo se te rompió el teléfono? —Se me cayó del bolsillo.",
      "¿Cómo se te rompió el móvil? —Se me cayó del bolsillo."
     ],
     "explanation": "Dos accidentes: se te rompió / se me cayó. El pronombre cambia según a quién le pasa."
    }
   }
  },
  "sections": {
   "0": {
    "body": [
     "Para hablar de cosas que pasan sin querer, el español usa se + pronombre de objeto indirecto + verbo: Se me olvidaron las llaves. Se le cayó el vaso.",
     "La cosa es el sujeto gramatical, así que el verbo concuerda con ella: se me rompió el plato (singular), se me rompieron los platos (plural).",
     "El pronombre indica a quién le pasó: se me (a mí), se te (a ti), se le (a él / ella / usted), se nos (a nosotros), se les (a ellos / ustedes).",
     "Los verbos más comunes: olvidar, caer, romper, perder, acabar, quemar, escapar, ocurrir, estropear."
    ],
    "examples": [
     {
      "es": "Se me olvidó tu cumpleaños. ¡Lo siento!",
      "en": "I forgot your birthday. Sorry!"
     },
     {
      "es": "A Pedro se le cayó el celular al agua.",
      "en": "Pedro dropped his phone in the water."
     },
     {
      "es": "Se nos acabó la leche.",
      "en": "We've run out of milk."
     },
     {
      "es": "Se me rompieron las lentes.",
      "en": "My glasses broke."
     },
     {
      "es": "Se les perdió el perro en el parque.",
      "en": "They lost their dog in the park."
     }
    ]
   }
  }
 },
 "b1-vocabulary-practice-3": {
  "sections": {
   "0": {
    "check": [
     {
      "type": "multiple-choice",
      "question": "Aplica la regla a una palabra nueva: ¿cómo se dice «the humidity is high»?",
      "options": [
       "La humedad es alta.",
       "El humedad es alto.",
       "La humedad es alto.",
       "El humedad es alta."
      ],
      "correctIndex": 0,
      "explanation": "Las palabras en -dad son femeninas: la humedad, y el adjetivo concuerda: alta. Las otras opciones mezclan el artículo o el adjetivo masculino."
     },
     {
      "type": "multiple-choice",
      "question": "¿Qué palabra es masculina pero termina en -a?",
      "options": [
       "el sistema",
       "la erosión",
       "la tormenta",
       "la playa"
      ],
      "correctIndex": 0,
      "explanation": "Sistema es una palabra griega en -ma, como ecosistema o problema: el sistema. Erosión (-sión), tormenta y playa son femeninas."
     }
    ]
   }
  }
 },
 "b1-common-words-supernatural": {
  "sections": {
   "1": {
    "body": [
     "Estas palabras aparecen mucho en expresiones: «eres un ángel» (you're an angel = muy amable), «este tráfico es un infierno» (it's hell). Un niño travieso puede ser «un pequeño diablo» o «un demonio».",
     "Cuidado: «¿Qué demonios…?», «¿Qué diablos…?» o «¡Vete al infierno!» suenan enojados y pueden ser maleducados. Úsalos solo con confianza."
    ]
   }
  }
 },
 "b2-vocabulary-practice-10": {
  "sections": {
   "0": {
    "body": [
     "El vocabulario de la música y del teatro se aprende mejor por familias, porque el español forma la persona, la acción y el contrario con unas pocas terminaciones fijas. Si conoces una palabra, puedes deducir las demás incluso si nunca las has visto.",
     "¿Por qué importa? Porque así pasas de un verbo que conoces («el público aplaudió») a un sustantivo formal («el aplauso del público»), que es lo que se espera en una crítica o una reseña del nivel Advanced. Cuidado: componer da compositor, no «componedor»."
    ],
    "check": [
     {
      "type": "multiple-choice",
      "question": "En una reseña, ¿qué versión usa el sustantivo formal?",
      "options": [
       "La dirección de la obra fue impecable.",
       "Dirigieron la obra de una manera impecable.",
       "Cómo dirigieron la obra fue impecable.",
       "Lo que dirigieron fue impecable."
      ],
      "correctIndex": 0,
      "explanation": "En una crítica se espera el sustantivo formal de la familia: dirigir → la dirección. Las otras versiones repiten el verbo, como en la conversación."
     }
    ]
   }
  }
 },
 "b1r-mission-signs-ads": {
  "exercises": {
   "replace": {
    "2": {
     "type": "matching",
     "instructions": "Relaciona cada cartel con su lugar.",
     "pairs": [
      {
       "left": "Se reparan celulares.",
       "right": "una tienda de tecnología"
      },
      {
       "left": "Se aceptan tarjetas.",
       "right": "una caja"
      },
      {
       "left": "No se admiten mascotas.",
       "right": "un hotel"
      },
      {
       "left": "Se hacen fotocopias.",
       "right": "una papelería"
      }
     ],
     "explanation": "Cada cartel usa se + tercera persona que concuerda con la cosa: celulares, tarjetas, mascotas, fotocopias → plural."
    },
    "12": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Corrige el cartel.",
     "source": "Se vende departamentos en el centro.",
     "answer": "Se venden departamentos en el centro.",
     "explanation": "Los departamentos son el sujeto y son varios: se venden.",
     "altAnswers": [
      "Se venden pisos en el centro."
     ]
    },
    "13": {
     "type": "speak",
     "text": "Se vende departamento.",
     "prompt": "Dilo en español: \"Apartment for sale\"",
     "explanation": "Una forma de decirlo: «Se vende departamento». departamento → singular",
     "altAnswers": [
      "Se vende piso."
     ]
    }
   }
  },
  "sections": {
   "0": {
    "body": [
     "Recuerda la regla: los carteles usan el se pasivo, se + verbo en tercera persona que concuerda con lo que se vende, alquila o busca: se vende departamento, se alquilan habitaciones.",
     "¿Por qué tanto se en los carteles? Porque a quien lee no le importa quién vende o busca: lo importante es la cosa. Por eso esa cosa es el sujeto y decide el singular o el plural. Los carteles suelen quitar el artículo: se vende departamento (= un departamento)."
    ],
    "examples": [
     {
      "es": "Se vende departamento.",
      "en": "Apartment for sale. (departamento → singular)"
     },
     {
      "es": "Se alquilan habitaciones.",
      "en": "Rooms for rent. (habitaciones → plural)"
     },
     {
      "es": "Se necesitan meseros.",
      "en": "Waiters needed."
     },
     {
      "es": "Se habla inglés.",
      "en": "English spoken."
     }
    ]
   },
   "1": {
    "examples": [
     {
      "es": "No se puede estacionar aquí.",
      "en": "No parking here. (estacionar es una acción → singular)"
     },
     {
      "es": "Se ruega silencio.",
      "en": "Silence, please."
     },
     {
      "es": "Está prohibido bañarse en el lago.",
      "en": "Swimming in the lake is forbidden."
     }
    ]
   }
  }
 },
 "b1r-mission-signs-ads-part-2": {
  "exercises": {
   "replace": {
    "0": {
     "type": "multi-select",
     "question": "¿Qué carteles son correctos?",
     "options": [
      "Se venden carros.",
      "Se alquila apartamentos.",
      "Se busca profesora.",
      "Se habla francés y alemán."
     ],
     "correctIndexes": [
      0,
      2,
      3
     ],
     "explanation": "«Se alquila apartamentos» es incorrecta: el verbo concuerda con el plural, se alquilan. Los otros concuerdan bien; con nombres de idiomas coordinados lo habitual es el singular: se habla francés y alemán."
    },
    "8": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "Waitress who speaks English wanted.",
     "answer": "Se busca mesera que hable inglés.",
     "altAnswers": [
      "Se busca mesera con inglés.",
      "Se busca camarera que hable inglés.",
      "Se busca camarera con inglés."
     ],
     "explanation": "«Se busca» en singular por «mesera»; «que hable» va en subjuntivo porque aún no sabes quién será."
    },
    "9": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "Please turn off your phones during the show. (sign, «se ruega»)",
     "answer": "Se ruega apagar los celulares durante la función.",
     "altAnswers": [
      "Se ruega apagar los celulares durante el espectáculo.",
      "Se ruega apagar los teléfonos durante la función.",
      "Se ruega apagar los teléfonos durante el espectáculo.",
      "Se ruega apagar los móviles durante la función.",
      "Se ruega apagar los móviles durante el espectáculo."
     ],
     "explanation": "«Se ruega» no cambia: va seguido de infinitivo, aunque después haya un plural (los celulares)."
    },
    "11": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Convierte la frase en un cartel con se.",
     "source": "Arreglamos computadoras y tabletas.",
     "answer": "Se arreglan computadoras y tabletas.",
     "altAnswers": [
      "Se reparan computadoras y tabletas.",
      "Se arreglan ordenadores y tabletas.",
      "Se reparan ordenadores y tabletas."
     ],
     "explanation": "Para el cartel quitas a quien arregla: «computadoras y tabletas» pasan a sujeto plural → se arreglan."
    },
    "12": {
     "type": "multiple-choice",
     "question": "Tu amiga quiere vender su carro y pegar un cartel en la ventanilla. ¿Qué escribe?",
     "options": [
      "Se vende.",
      "Se venden.",
      "Se vendo.",
      "Vende se."
     ],
     "correctIndex": 0,
     "explanation": "El cartel habla de un carro (singular) → se vende. «Se venden» sería para varios; «se vendo» mezcla el se con la persona yo, y el orden «vende se» no existe."
    },
    "15": {
     "type": "speak",
     "text": "Se vende departamento.",
     "prompt": "Dilo en español: \"Apartment for sale\"",
     "explanation": "Una forma de decirlo: «Se vende departamento». departamento → singular",
     "altAnswers": [
      "Se vende piso."
     ]
    }
   }
  },
  "sections": {
   "0": {
    "examples": [
     {
      "es": "Se vende departamento.",
      "en": "Apartment for sale. (departamento → singular)"
     },
     {
      "es": "Se ruega silencio.",
      "en": "Silence, please."
     }
    ]
   }
  }
 },
 "b1d-rep-ojala-dialogo": {
  "exercises": {
   "replace": {
    "14": {
     "type": "word-order",
     "prompt": "Ordena las palabras.",
     "words": [
      "Ojalá",
      "te",
      "den",
      "el",
      "préstamo",
      "para",
      "el",
      "departamento"
     ],
     "translation": "I hope they give you the loan for the apartment (tú)",
     "explanation": "«Ojalá» + subjuntivo de «dar»: «den»."
    },
    "27": {
     "type": "speak",
     "text": "¡Ojalá encuentres departamento pronto!",
     "prompt": "Dilo en español: \"I hope you find an apartment soon!\"",
     "explanation": "Una forma de decirlo: «¡Ojalá encuentres departamento pronto!». ojalá + subjuntivo",
     "altAnswers": [
      "¡Ojalá encuentres piso pronto!"
     ]
    },
    "2": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "Unos amigos se casan: ¡Que ___ muy felices!",
     "answer": "sean",
     "altAnswers": [
      "seáis"
     ],
     "en": "Some friends are getting married: [Be] very happy! (ustedes)",
     "explanation": "ser → sean: que + present subjunctive, ustedes (wish). Deseo para ustedes → subjuntivo de ser: sean."
    }
   }
  },
  "sections": {
   "0": {
    "body": [
     "Recuerda la regla: para desear algo a otra persona tienes tres fórmulas y las tres llevan presente de subjuntivo: ¡Ojalá apruebes!, Espero que te mejores pronto, y la más corta, ¡Que tengas buen viaje! (que + subjuntivo, sin verbo delante).",
     "¿Por qué subjuntivo? Porque un deseo habla de algo que todavía no ha pasado y que no depende de ti: no es un hecho, es lo que quieres que pase. Elige la persona según a quién hablas: que te vaya bien (tú), que le vaya bien (usted), que les vaya bien (ustedes)."
    ],
    "examples": [
     {
      "es": "¡Que te mejores!",
      "en": "Get well soon! (que + subjuntivo, tú)"
     },
     {
      "es": "¡Que lo pases bien!",
      "en": "Have a good time!"
     },
     {
      "es": "¡Ojalá encuentres departamento pronto!",
      "en": "I hope you find an apartment soon! (ojalá + subjuntivo)"
     },
     {
      "es": "Espero que les guste el regalo.",
      "en": "I hope they like the present. (esperar que + subjuntivo)"
     }
    ]
   }
  }
 },
 "b1d-cuento-informe-anual": {
  "exercises": {
   "replace": {
    "20": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Corrige la frase.",
     "source": "Este año se ha reducido los costos de transporte.",
     "answer": "Este año se han reducido los costos de transporte.",
     "altAnswers": [
      "Este año se han reducido los costes de transporte."
     ],
     "explanation": "«Los costos» es el sujeto y es plural: el auxiliar también va en plural, se han reducido."
    }
   }
  }
 },
 "b1r-tema-convivencia-vecinos": {
  "exercises": {
   "replace": {
    "3": {
     "type": "matching",
     "instructions": "Relaciona cada problema con una petición adecuada.",
     "pairs": [
      {
       "left": "El perro ladra todo el día.",
       "right": "¿Podrías sacarlo más a menudo?"
      },
      {
       "left": "Los tacones suenan mucho.",
       "right": "¿Te importaría usar zapatillas en casa?"
      },
      {
       "left": "Tiran basura al patio.",
       "right": "Les ruego que usen los contenedores."
      },
      {
       "left": "Estacionan en mi lugar.",
       "right": "Por favor, no estacionen aquí."
      }
     ],
     "explanation": "Peticiones con condicional, subjuntivo o mandato."
    },
    "9": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Corrige la frase.",
     "source": "Corrige: «¿Qué te parece si compartamos el costo de la reparación?»",
     "answer": "¿Qué te parece si compartimos el costo de la reparación?",
     "altAnswers": [
      "¿Qué te parece si compartimos el coste de la reparación?"
     ],
     "explanation": "Tras «si» va presente de indicativo, también en «¿qué te parece si…?»: compartimos. El subjuntivo no va detrás de si."
    },
    "12": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Cambia la petición a usted.",
     "source": "¿Podrías no estacionar delante del garaje?",
     "answer": "¿Podría no estacionar delante del garaje?",
     "altAnswers": [
      "¿Podría usted no estacionar delante del garaje?",
      "¿Podría no aparcar delante del garaje?",
      "¿Podría usted no aparcar delante del garaje?"
     ],
     "explanation": "Con usted el condicional va en tercera persona: podrías → podría. La petición sigue igual de suave."
    }
   }
  },
  "sections": {
   "0": {
    "examples": [
     {
      "es": "Perdona que te moleste, pero se oye mucho ruido por la noche.",
      "en": "Sorry to bother you, but a lot of noise can be heard at night. (perdona que + subjuntivo)"
     },
     {
      "es": "¿Podrías poner la música más baja después de las once?",
      "en": "Could you turn the music down after eleven? (condicional: petición suave)"
     },
     {
      "es": "¿Qué te parece si hablamos con el administrador del edificio?",
      "en": "How about we talk to the residents' association chair? (si + presente)"
     }
    ]
   }
  }
 },
 "b1r-exit-ticket": {
  "exercises": {
   "replace": {
    "0": {
     "type": "write",
     "prompt": "Parte 4 · Expresión escrita. Escribe un correo a un amigo: cuéntale algo que has hecho últimamente, dale un consejo sobre un problema que te contó y proponle un plan para el fin de semana.",
     "minWords": 80,
     "maxWords": 120,
     "rubric": [
      "Cuenta una experiencia reciente con el pretérito perfecto o el indefinido",
      "Da un consejo con te aconsejo que / te recomiendo que + subjuntivo, o con yo que tú + condicional",
      "Propón un plan con si + presente (si quieres, si hace buen tiempo...)",
      "Saluda y despídete como en un correo informal"
     ],
     "modelAnswer": "¡Hola, Javi! ¿Cómo estás? Yo estoy muy bien. Este mes he empezado un curso de fotografía y me encanta: el sábado pasado fuimos al puerto y saqué fotos preciosas. Sobre lo que me contaste de tu compañero de departamento, te recomiendo que hables con él tranquilamente. Yo que tú, le propondría un horario para limpiar la cocina. Seguro que lo entiende. Por cierto, si hace buen tiempo el domingo, podríamos ir en bici al lago. ¿Qué te parece? Si quieres, te llamo el viernes y lo organizamos. ¡Un abrazo fuerte! Laura",
     "explanation": "Recomendar que pide subjuntivo (que hables); «yo que tú» va con condicional (propondría); y después del si condicional se usa el presente, no el futuro (si hace buen tiempo)."
    }
   }
  },
  "sections": {
   "0": {
    "body": [
     "Lee el texto y contesta las cinco preguntas.",
     "Hace un año que trabajo desde casa y me han preguntado muchas veces si lo recomiendo. La respuesta corta es que sí, pero con condiciones.",
     "Al principio no tenía horario: empezaba tarde, comía delante de la computadora y terminaba a las diez de la noche. Ahora me levanto a la misma hora todos los días y no enciendo la computadora hasta que he desayunado. Lo que más echo de menos es charlar con mis compañeros, así que una vez a la semana voy a una oficina compartida.",
     "Si estás pensando en trabajar desde casa, te aconsejo que crees una rutina y que salgas de casa al menos una vez al día. Y, sobre todo, no trabajes en pijama: parece una tontería, pero cambia mucho cómo te sientes."
    ],
    "check": [
     {
      "type": "multiple-choice",
      "question": "¿Qué opina el autor de trabajar desde casa?",
      "options": [
       "Lo recomienda, pero con condiciones",
       "No lo recomienda",
       "Le parece perfecto sin condiciones",
       "Quiere volver a la oficina"
      ],
      "correctIndex": 0,
      "explanation": "«La respuesta corta es que sí, pero con condiciones.»"
     },
     {
      "type": "multiple-choice",
      "question": "¿Qué problema tenía al principio?",
      "options": [
       "No tenía horario",
       "Su ordenador no funcionaba",
       "No tenía trabajo",
       "Trabajaba demasiado poco"
      ],
      "correctIndex": 0,
      "explanation": "«Al principio no tenía horario: empezaba tarde… y terminaba a las diez de la noche.»"
     },
     {
      "type": "multiple-choice",
      "question": "¿Por qué va una vez a la semana a una oficina compartida?",
      "options": [
       "Porque echa de menos hablar con otras personas",
       "Porque su casa es pequeña",
       "Porque se lo pide su jefe",
       "Porque allí tiene mejor internet"
      ],
      "correctIndex": 0,
      "explanation": "«Lo que más echo de menos es charlar con mis compañeros, así que…»"
     },
     {
      "type": "multiple-choice",
      "question": "¿Qué consejo da?",
      "options": [
       "Crear una rutina y salir de casa cada día",
       "Trabajar por la noche",
       "Comer delante de la computadora",
       "Trabajar en pijama para estar cómodo"
      ],
      "correctIndex": 0,
      "explanation": "«Te aconsejo que crees una rutina y que salgas de casa al menos una vez al día.»"
     },
     {
      "type": "multiple-choice",
      "question": "Según el autor, trabajar en pijama…",
      "options": [
       "cambia cómo te sientes",
       "es más cómodo y productivo",
       "es una buena idea los viernes",
       "no tiene ninguna importancia"
      ],
      "correctIndex": 0,
      "explanation": "«Parece una tontería, pero cambia mucho cómo te sientes.»"
     }
    ]
   },
   "1": {
    "check": [
     {
      "type": "multiple-choice",
      "question": "¿Por qué se cortará el agua?",
      "options": [
       "Por obras en la calle",
       "Por una avería en el edificio",
       "Porque los vecinos no han pagado",
       "Para limpiar el garaje"
      ],
      "correctIndex": 0,
      "explanation": "«Se cortará el agua de nueve a dos por obras en la calle.»"
     },
     {
      "type": "multiple-choice",
      "question": "¿Qué se pide a los vecinos?",
      "options": [
       "Que llenen botellas de agua antes",
       "Que no usen el ascensor",
       "Que hablen con los obreros",
       "Que dejen el garaje libre"
      ],
      "correctIndex": 0,
      "explanation": "«Se ruega que llenen algunas botellas antes.»"
     },
     {
      "type": "multiple-choice",
      "question": "¿Qué pasará con la bicicleta si nadie la reclama?",
      "options": [
       "Se donará a una asociación del barrio",
       "Se venderá",
       "Se quedará en el garaje",
       "Se la quedará el portero"
      ],
      "correctIndex": 0,
      "explanation": "«Después de esa fecha, se donará a una asociación del barrio.»"
     },
     {
      "type": "multiple-choice",
      "question": "¿Antes de qué fecha hay que reclamar la bicicleta?",
      "options": [
       "Antes del día 15",
       "Antes del lunes",
       "Antes de las dos",
       "Antes de final de mes"
      ],
      "correctIndex": 0,
      "explanation": "«Hable con el portero antes del día 15.»"
     },
     {
      "type": "multiple-choice",
      "question": "¿Qué está prohibido?",
      "options": [
       "Dejar basura en la escalera",
       "Estacionar bicicletas en el garaje",
       "Hablar con el portero",
       "Usar el agua por la mañana"
      ],
      "correctIndex": 0,
      "explanation": "«No se puede dejar basura en la escalera.»"
     }
    ]
   },
   "2": {
    "check": [
     {
      "type": "listen-choose",
      "audio": "Atención, señores pasajeros. El tren con destino a Zaragoza, que tenía prevista su salida a las once y cuarto, saldrá con cuarenta minutos de retraso debido a un problema técnico.",
      "question": "Escucha. ¿A qué hora saldrá el tren a Zaragoza?",
      "options": [
       "A las doce menos cinco",
       "A las once y cuarto",
       "A las doce",
       "A las once menos cuarto"
      ],
      "correctIndex": 0,
      "explanation": "Salía a las once y cuarto y tiene cuarenta minutos de retraso: a las doce menos cinco."
     },
     {
      "type": "listen-choose",
      "audio": "Atención, señores pasajeros. El tren con destino a Zaragoza, que tenía prevista su salida a las once y cuarto, saldrá con cuarenta minutos de retraso debido a un problema técnico.",
      "question": "¿Por qué sale tarde?",
      "options": [
       "Por un problema técnico",
       "Por el mal tiempo",
       "Porque falta el conductor",
       "Por una huelga"
      ],
      "correctIndex": 0,
      "explanation": "«Debido a un problema técnico.»"
     },
     {
      "type": "listen-choose",
      "audio": "Les rogamos que permanezcan en la sala de espera. Los pasajeros con boleto para el tren de las doce también podrán viajar en este tren. Disculpen las molestias.",
      "question": "¿Qué se pide a los pasajeros?",
      "options": [
       "Que esperen en la sala de espera",
       "Que cambien de andén",
       "Que compren otro boleto",
       "Que vuelvan mañana"
      ],
      "correctIndex": 0,
      "explanation": "«Les rogamos que permanezcan en la sala de espera.»"
     },
     {
      "type": "listen-choose",
      "audio": "Les rogamos que permanezcan en la sala de espera. Los pasajeros con boleto para el tren de las doce también podrán viajar en este tren. Disculpen las molestias.",
      "question": "¿Quién más puede viajar en este tren?",
      "options": [
       "Los pasajeros con boleto para el tren de las doce",
       "Solo los pasajeros de primera clase",
       "Nadie más",
       "Los pasajeros que van a Madrid"
      ],
      "correctIndex": 0,
      "explanation": "«Los pasajeros con boleto para el tren de las doce también podrán viajar en este tren.»"
     },
     {
      "type": "listen-choose",
      "audio": "Mira, te recomiendo que hables con tu jefe antes de decidir nada. Yo en tu lugar no dejaría el trabajo ahora: primero buscaría otro.",
      "question": "Escucha. ¿Qué le recomienda primero a su amiga?",
      "options": [
       "Hablar con su jefe",
       "Dejar el trabajo ya",
       "Irse de vacaciones",
       "Cambiar de ciudad"
      ],
      "correctIndex": 0,
      "explanation": "«Te recomiendo que hables con tu jefe antes de decidir nada.»"
     },
     {
      "type": "listen-choose",
      "audio": "Mira, te recomiendo que hables con tu jefe antes de decidir nada. Yo en tu lugar no dejaría el trabajo ahora: primero buscaría otro.",
      "question": "¿Qué haría la hablante en su lugar?",
      "options": [
       "Buscar otro trabajo antes de dejar el suyo",
       "Dejar el trabajo inmediatamente",
       "Pedir un aumento de sueldo",
       "No hacer nada"
      ],
      "correctIndex": 0,
      "explanation": "«Yo en tu lugar no dejaría el trabajo ahora: primero buscaría otro.»"
     },
     {
      "type": "listen-choose",
      "audio": "Ya sé que estás harta, pero ojalá encuentres algo mejor pronto. Si quieres, esta noche te ayudo a preparar el currículum.",
      "question": "¿Cómo se siente la amiga en su trabajo?",
      "options": [
       "Está harta",
       "Está contenta",
       "Le da igual",
       "Está nerviosa porque empieza"
      ],
      "correctIndex": 0,
      "explanation": "«Ya sé que estás harta.»"
     },
     {
      "type": "listen-choose",
      "audio": "Ya sé que estás harta, pero ojalá encuentres algo mejor pronto. Si quieres, esta noche te ayudo a preparar el currículum.",
      "question": "¿Qué le ofrece para esta noche?",
      "options": [
       "Ayudarla con el currículum",
       "Invitarla a cenar",
       "Llamar a su jefe",
       "Buscar ofertas en el periódico"
      ],
      "correctIndex": 0,
      "explanation": "«Esta noche te ayudo a preparar el currículum.»"
     },
     {
      "type": "dictation",
      "audio": "Todavía no he visto esa película.",
      "explanation": "Todavía no he visto esa película. Visto es el participio irregular de ver."
     },
     {
      "type": "dictation",
      "audio": "Es importante que llegues a tiempo.",
      "explanation": "Es importante que llegues a tiempo. Llegar → llegues: la g lleva u delante de e."
     }
    ]
   }
  }
 },
 "b1d-corrige-impersonales-unit-review": {
  "sections": {
   "0": {
    "check": [
     {
      "type": "listen-choose",
      "audio": "Es evidente que el estrés nos cansa.",
      "question": "¿Qué significa?",
      "options": [
       "It's evident that stress tires us.",
       "It's likely that it'll be cold tonight.",
       "This week has been hell.",
       "I think you're right."
      ],
      "correctIndex": 0,
      "explanation": "«Es evidente que el estrés nos cansa» significa \"It's evident that stress tires us\". Clave: certeza → indicativo."
     },
     {
      "type": "listen-choose",
      "audio": "Dicen que en el castillo vive un fantasma.",
      "question": "¿Qué significa?",
      "options": [
       "They say a ghost lives in the castle.",
       "I hope there are no more fires this summer.",
       "It's clear that the flight has a delay.",
       "It's true that the train is delayed."
      ],
      "correctIndex": 0,
      "explanation": "«Dicen que en el castillo vive un fantasma» significa \"They say a ghost lives in the castle\"."
     },
     {
      "type": "listen-choose",
      "audio": "Me parece que tienes razón.",
      "question": "¿Qué significa?",
      "options": [
       "I think you're right.",
       "He's sure to arrive late.",
       "It's important that the patient follows the full treatment.",
       "I think it'll rain tomorrow."
      ],
      "correctIndex": 0,
      "explanation": "«Me parece que tienes razón» significa \"I think you're right\". Clave: me parece que = creo que → indicativo."
     },
     {
      "type": "dictation",
      "audio": "Ojalá encuentre un departamento cerca del trabajo.",
      "explanation": "Has oído: «Ojalá encuentre un departamento cerca del trabajo» (\"I hope I find an apartment near work\")."
     },
     {
      "type": "dictation",
      "audio": "Es fundamental que estudiéis.",
      "explanation": "Has oído: «Es fundamental que estudiéis» (\"It's essential that you all study\")."
     }
    ]
   }
  }
 }
};
