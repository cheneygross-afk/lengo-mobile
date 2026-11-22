// Synced from cheneygross-afk/lengo:src/lib/lessons/es-redesign/b2-unit4-latam.ts by scripts/sync-content.mjs -- edit it there, not here.
// Generated: Latin American wording for B2 Unit 4. B2_UNIT4_LATAM adds
// accepted answers (papás, carro, celular) next to the Spain wording;
// B2_UNIT4_SWAP makes the Latin American word the main one where the lesson
// showed the Spain word (carro, celular, departamento, refrigerador, papas,
// enojemos, estacionamiento, municipio, extrañar, tomes, llene, lo moleste),
// keeping the Spain answer accepted. It also gives the vosotros items an
// ustedes answer (vosotros still accepted) and replaces items that used later
// grammar: the pluperfect, the passive with se, si + present, si tuviera and
// cuando + subjunctive. Content only.
import type { LessonPatch } from "./patch";
export const B2_UNIT4_LATAM: Record<string, { alts?: Record<number, string[]>; checkAlts?: Record<number, Record<number, string[]>> }> = {
 "commands-drill-2": {
  "checkAlts": {
   "2": {
    "1": [
     "Díselo a tu papá."
    ]
   }
  }
 },
 "b1d-habla-de-ti-consejos": {
  "alts": {
   "8": [
    "No salgas solo en la noche por esa zona."
   ]
  }
 },
 "b1d-corrige-pronombres-combinados": {
  "alts": {
   "2": [
    "Necesito pedírsela a tu papá hoy.",
    "Se la necesito pedir a tu papá hoy."
   ],
   "27": [
    "La receta quiero dársela a tu mamá mañana."
   ]
  }
 },
 "b1d-patron-condicional": {
  "alts": {
   "8": [
    "Con un jardín, mi mamá plantaría tomates."
   ],
   "23": [
    "Con más tiempo, mi papá descansaría más."
   ]
  }
 },
 "b1d-habla-de-ti-millon": {
  "alts": {
   "11": [
    "Mis papás pasarían un año en México."
   ]
  }
 },
 "a2r-challenge-buenos-aires-1": {
  "alts": {
   "18": [
    "Buenos Aires es tan lindo como París, pero es más barato."
   ]
  }
 },
 "a2r-challenge-buenos-aires-2": {
  "alts": {
   "7": [
    "El bus iba lleno y había mucha gente.",
    "El bus estaba lleno y había mucha gente."
   ],
   "16": [
    "Era café y tenía mi documento adentro."
   ]
  }
 },
 "combined-object-pronouns-2": {
  "alts": {
   "22": [
    "¿El vestido? Mi mamá está arreglándomelo ahora."
   ]
  }
 }
};
export const B2_UNIT4_SWAP: Record<string, LessonPatch> = {
 "b1d-ronda-nosotros-vamos": {
  "exercises": {
   "replace": {
    "13": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "No ___ en el carro, hace mucho calor.",
     "answer": "nos quedemos",
     "en": "Let's not [stay] in the car, it's very hot.",
     "explanation": "Negativo: el pronombre va delante y se mantiene la -s: no nos quedemos."
    }
   }
  }
 },
 "b1d-rep-imperativo-nosotros": {
  "exercises": {
   "replace": {
    "12": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español con el mandato de nosotros (subjuntivo), sin «vamos a».",
     "source": "Let's not get angry over this.",
     "answer": "No nos enojemos por esto.",
     "altAnswers": [
      "No nos enojemos por eso.",
      "No nos enfademos por esto.",
      "No nos enfademos por eso."
     ],
     "explanation": "Negativo: pronombre delante: no nos enojemos."
    },
    "16": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español con el mandato de nosotros (subjuntivo), sin «vamos a».",
     "source": "Let's stay at home, let's make dinner and let's not look at our phones.",
     "answer": "Quedémonos en casa, hagamos la cena y no miremos el celular.",
     "altAnswers": [
      "Quedémonos en casa, hagamos la cena y no miremos los celulares.",
      "Quedémonos en casa, preparemos la cena y no miremos el celular.",
      "Quedémonos en casa, preparemos la cena y no miremos los celulares.",
      "Quedémonos en casa, hagamos la cena y no miremos el móvil.",
      "Quedémonos en casa, hagamos la cena y no miremos los móviles.",
      "Quedémonos en casa, preparemos la cena y no miremos el móvil.",
      "Quedémonos en casa, preparemos la cena y no miremos los móviles."
     ],
     "explanation": "Quedémonos (sin -s ante nos), hagamos y no miremos."
    },
    "17": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "___ el tren de las ocho.",
     "answer": "Tomemos",
     "en": "[Let's catch] the eight o'clock train.",
     "altAnswers": [
      "Cojamos"
     ],
     "explanation": "Tomar → tomemos: subjuntivo de nosotros."
    }
   }
  }
 },
 "commands-drill-2": {
  "exercises": {
   "replace": {
    "8": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "___ el formulario y fírmelo abajo.",
     "answer": "Llene",
     "en": "[Fill out] the form and sign it at the bottom. (usted)",
     "altAnswers": [
      "Complete",
      "Rellene"
     ],
     "explanation": "Mandato de usted: subjuntivo «rellene»; «rellena» es la forma de tú."
    },
    "21": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "Bring us the bill, please. (usted)",
     "answer": "Tráiganos la cuenta, por favor.",
     "altAnswers": [
      "Por favor, tráiganos la cuenta."
     ],
     "explanation": "Usted afirmativo con pronombre pegado: «traiga + nos» = «tráiganos», con tilde."
    }
   }
  }
 },
 "b1d-cadena-tu-usted": {
  "exercises": {
   "replace": {
    "11": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "Fill in your details and wait for your turn. (usted)",
     "answer": "Llene sus datos y espere su turno.",
     "altAnswers": [
      "Complete sus datos y espere su turno.",
      "Rellene sus datos y espere su turno."
     ],
     "explanation": "Usted: rellene, espere; posesivo sus/su."
    },
    "17": {
     "type": "write",
     "prompt": "Alquilas tu apartamento a turistas. Escribe las instrucciones para los huéspedes, tratándolos de usted: dónde están las llaves, cómo funcionan las cosas y qué no deben hacer. Usa mandatos con pronombres.",
     "minWords": 50,
     "maxWords": 90,
     "rubric": [
      "Al menos cuatro mandatos de usted afirmativos con pronombre (ábrala, enciéndalo…)",
      "Al menos dos mandatos negativos con pronombre (no la deje…)",
      "Tildes correctas en los mandatos con pronombre",
      "Usted en todo el texto (su, le)"
     ],
     "modelAnswer": "Bienvenido a su apartamento. Las llaves están en una caja junto a la puerta: ábrala con el código 1234. Para el agua caliente, busque el botón rojo de la cocina y enciéndalo diez minutos antes de ducharse. La contraseña del wifi está en el refrigerador; apúntela, por favor. Después de usar la lavadora, no la deje cerrada. El día de la salida, deje las llaves en la mesa y no las meta en el buzón. Para cualquier problema, llámeme.",
     "explanation": "Con usted, los pronombres se pegan al mandato afirmativo y aparece una tilde (ábrala, enciéndalo, llámeme); en el negativo van delante: no la deje, no las meta."
    },
    "18": {
     "type": "speak",
     "text": "Llene sus datos y espere su turno.",
     "prompt": "Dilo en español: \"Fill in your details and wait for your turn\"",
     "altAnswers": [
      "Complete sus datos y espere su turno.",
      "Rellene sus datos y espere su turno."
     ],
     "explanation": "Una forma de decirlo: «Llene sus datos y espere su turno». Usted: rellene, espere; posesivo sus/su."
    }
   }
  }
 },
 "b1d-habla-de-ti-consejos": {
  "exercises": {
   "replace": {
    "1": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "Don't take taxis; they're very expensive. (tú)",
     "answer": "No tomes taxis, son carísimos.",
     "altAnswers": [
      "No tomes taxis; son muy caros.",
      "No tomes taxis, son muy caros.",
      "No cojas taxis, son carísimos.",
      "No cojas taxis; son muy caros."
     ],
     "explanation": "Negativo tú. Ojo: coger es neutro en España, pero en México, Argentina y buena parte de Latinoamérica es vulgar; allí se dice tomar o agarrar."
    },
    "7": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Cambia a afirmativo.",
     "source": "No alquiles un departamento en el centro.",
     "answer": "Alquila un departamento en el centro.",
     "altAnswers": [
      "Alquila un apartamento en el centro.",
      "Alquila un piso en el centro."
     ],
     "explanation": "Del negativo al afirmativo de tú: el subjuntivo vuelve a la forma él del presente: alquila."
    },
    "12": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "Esta torta es buenísima: ___.",
     "answer": "pruébala",
     "en": "This cake is delicious: [try it] (tú).",
     "explanation": "Pronombre pegado al afirmativo y tilde: pruébala."
    },
    "16": {
     "type": "write",
     "prompt": "Un amigo va a vivir unos meses en tu ciudad. Escríbele un correo informal: salúdalo, dale consejos sobre dónde vivir, qué visitar y qué evitar, y despídete.",
     "minWords": 100,
     "maxWords": 130,
     "rubric": [
      "Saludo y despedida informales (¡Hola, Juan!, Un abrazo…)",
      "Al menos tres mandatos de tú, afirmativos y negativos",
      "Al menos un mandato con pronombre (visítalo, no lo olvides…)",
      "Un consejo con te recomiendo que / es mejor que + subjuntivo",
      "Registro de tú en todo el correo"
     ],
     "modelAnswer": "¡Hola, Juan! ¡Qué alegría que vengas a Valencia! Te doy algunos consejos. Para vivir, busca un departamento en Ruzafa o en el Carmen: son barrios bonitos y con mucha vida. No alquiles nada sin verlo antes, porque hay muchos anuncios falsos. Te recomiendo que compres una bici, porque la ciudad es plana y hay carriles por todas partes. El primer domingo, ve al Mercado Central y prueba la horchata. Y no te pierdas la playa de la Malvarrosa al atardecer: es preciosa. Ah, y no comas paella por la noche, ¡aquí eso solo lo hacen los turistas! ¿Necesitas algo? Llámame. Un abrazo muy fuerte, Carlos",
     "explanation": "Los consejos directos usan el imperativo de tú: afirmativo (busca, ve, prueba) y negativo con subjuntivo (no alquiles, no comas). Los pronombres se pegan al afirmativo (llámame) y van delante en el negativo (no te pierdas). Te recomiendo que va con subjuntivo: compres."
    }
   }
  },
  "sections": {
   "0": {
    "body": [
     "La regla: entre amigos el consejo directo es el imperativo de tú, y no suena brusco. Afirmativo = forma él del presente (compra, prueba), con pronombre pegado (pruébalo); negativo = no + subjuntivo, con pronombre delante (no tomes, no te pierdas).",
     "Por qué funciona: el imperativo es la forma más corta y cercana; con un amigo, «Deberías comprar…» suena más distante. Combina un afirmativo y un negativo para dar un consejo completo: Compra el abono y no tomes taxis."
    ]
   }
  }
 },
 "b1d-patron-pegados-infinitivo": {
  "exercises": {
   "replace": {
    "18": {
     "type": "write",
     "prompt": "Has comprado con tu hermano un regalo sorpresa para el cumpleaños de su mamá. Escríbele un mensaje para organizar cuándo y cómo dárselo. Usa pronombres pegados al infinitivo.",
     "minWords": 40,
     "maxWords": 80,
     "rubric": [
      "Al menos tres infinitivos con dos pronombres pegados (dárselo, enseñártelo…)",
      "Tilde correcta en los infinitivos con dos pronombres",
      "Una frase negativa con el pronombre pegado al infinitivo (no vayas a contárselo…)",
      "Un plan con día u hora"
     ],
     "modelAnswer": "¡Hola, Pablo! Ya tengo el collar para mamá. Quiero enseñártelo antes del domingo: ¿puedo llevártelo esta noche? Voy a envolverlo con un papel muy bonito. Creo que deberíamos dárselo a la hora del postre, con toda la familia en la mesa. Y, por favor, no vayas a contárselo a la tía Marisa: ¡siempre se lo cuenta todo a mamá! ¿Te parece bien?",
     "explanation": "Con infinitivo, los dos pronombres se pegan al final y el verbo lleva tilde: enseñártelo, llevártelo, dárselo, contárselo."
    },
    "16": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Sustituye «el jardín» por un pronombre y pon los dos delante de «vamos».",
     "source": "Vamos a enseñarles el jardín.",
     "answer": "Se lo vamos a enseñar.",
     "altAnswers": [
      "Vamos a enseñárselo.",
      "Os lo vamos a enseñar.",
      "Vamos a enseñároslo."
     ],
     "explanation": "El jardín → lo, y les → se delante de lo (persona antes que cosa). Delante del verbo conjugado no hace falta tilde: se lo vamos a enseñar. También vale pegado: vamos a enseñárselo."
    }
   }
  }
 },
 "b1r-tema-teletrabajo": {
  "exercises": {
   "replace": {
    "5": {
     "type": "word-order",
     "prompt": "Ordena las palabras.",
     "words": [
      "Lo",
      "que",
      "más",
      "extraño",
      "son",
      "los",
      "cafés",
      "con",
      "mis",
      "compañeros."
     ],
     "translation": "What I miss most are the coffees with my coworkers.",
     "explanation": "Lo que + extrañar (en España, echar de menos)."
    },
    "10": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "Extraño que mis compañeros me ___ los buenos días.",
     "answer": "den",
     "en": "I miss my coworkers [saying] good morning to me.",
     "explanation": "Extrañar que + subjuntivo: «den» (dar los buenos días)."
    },
    "2": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "Antes de la pandemia, nunca ___ desde casa.",
     "answer": "trabajaba",
     "altAnswers": [
      "trabajé"
     ],
     "en": "Before the pandemic, I [never worked] from home.",
     "explanation": "trabajar → trabajaba: imperfecto, yo. Una costumbre del pasado (antes de la pandemia) va en imperfecto."
    }
   }
  }
 },
 "b1d-corrige-pronombres-combinados": {
  "exercises": {
   "replace": {
    "14": {
     "type": "word-order",
     "prompt": "Ordena las palabras.",
     "words": [
      "¿El",
      "carro?",
      "Se",
      "lo",
      "vendimos",
      "a",
      "un",
      "vecino"
     ],
     "translation": "The car? We sold it to a neighbor",
     "explanation": "«Se lo» va delante del verbo conjugado; «le lo vendimos» es incorrecto."
    },
    "23": {
     "type": "word-order",
     "prompt": "Ordena las palabras.",
     "words": [
      "¿Quieres",
      "la",
      "receta?",
      "Te",
      "la",
      "mando",
      "esta",
      "noche"
     ],
     "translation": "Do you want the recipe? I'll send it to you tonight",
     "explanation": "«Te la»: primero la persona, luego la cosa, delante del verbo conjugado."
    }
   }
  }
 },
 "b1r-tema-arboles-ciudad": {
  "exercises": {
   "replace": {
    "2": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "Pedimos al municipio que ___ otra solución para el estacionamiento.",
     "answer": "busque",
     "en": "We ask the city council [to look for] another solution for parking.",
     "explanation": "buscar → busque: present subjunctive, él (after 'pedimos que'). Pedir que + subjuntivo; c → qu."
    },
    "8": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "Es necesario que el municipio ___ más árboles.",
     "answer": "plante",
     "en": "It's necessary for the city council [to plant] more trees.",
     "explanation": "«Es necesario que» expresa una exigencia: subjuntivo, no «planta»."
    },
    "19": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "Pedimos que el municipio no ___ el jardín en un estacionamiento.",
     "answer": "convierta",
     "en": "We ask that the council not [turn] the garden into a car park.",
     "explanation": "Una petición («pedimos que») exige subjuntivo."
    },
    "24": {
     "type": "speak",
     "text": "Es fundamental que protejamos los parques.",
     "prompt": "Dilo en español: \"It's essential that we protect the parks\"",
     "explanation": "Una forma de decirlo: «Es fundamental que protejamos los parques». exigencia: subjuntivo"
    },
    "0": {
     "type": "speak",
     "text": "Sin árboles, la plaza sería un horno en verano.",
     "prompt": "Dilo en español: \"Without trees, the square would be an oven in summer\"",
     "altAnswers": [
      "Sin árboles, en verano la plaza sería un horno."
     ],
     "explanation": "Una forma de decirlo: «Sin árboles, la plaza sería un horno en verano». ser → sería: condicional. «Sin árboles» funciona como una condición imaginada."
    },
    "1": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "Estos árboles los ___ hace cien años.",
     "answer": "plantaron",
     "en": "These trees, they [planted] them a hundred years ago.",
     "explanation": "plantar → plantaron: pretérito, ellos. Un hecho terminado (hace cien años) va en pretérito."
    },
    "16": {
     "type": "word-order",
     "prompt": "Ordena las palabras.",
     "words": [
      "Es",
      "mejor",
      "que",
      "nadie",
      "corte",
      "los",
      "árboles",
      "viejos"
     ],
     "translation": "It's better that nobody cuts down the old trees",
     "explanation": "Recomendación (es mejor que) → subjuntivo: corte, en singular con nadie."
    },
    "17": {
     "type": "speak",
     "text": "Con un parque aquí, el barrio sería más tranquilo.",
     "prompt": "Dilo en español: \"With a park here, the neighborhood would be quieter\"",
     "altAnswers": [
      "Con un parque aquí, el barrio estaría más tranquilo.",
      "Con un parque aquí, el barrio sería más tranquilo"
     ],
     "explanation": "Una forma de decirlo: «Con un parque aquí, el barrio sería más tranquilo». «Con un parque» imagina la situación: condicional, sería."
    }
   }
  },
  "sections": {
   "0": {
    "examples": [
     {
      "es": "Está demostrado que los árboles reducen la temperatura.",
      "en": "It's proven that trees reduce temperatures. (hecho: indicativo)"
     },
     {
      "es": "Es fundamental que protejamos los parques.",
      "en": "It's essential that we protect the parks. (exigencia: subjuntivo)"
     },
     {
      "es": "No es cierto que las raíces rompan todas las aceras.",
      "en": "It isn't true that the roots break all the pavements. (certeza negada: subjuntivo)"
     }
    ],
    "check": [
     {
      "type": "fill-blank",
      "prompt": "¿Cómo se dicen en español las palabras en negrita?",
      "sentence": "Está claro que los árboles ___ el aire.",
      "answer": "limpian",
      "en": "It's clear that trees [clean] the air.",
      "explanation": "limpiar → limpian: present indicative (certainty: 'está claro que'). «Está claro que» afirma un hecho: indicativo, limpian."
     },
     {
      "type": "fill-blank",
      "prompt": "¿Cómo se dicen en español las palabras en negrita?",
      "sentence": "Es fundamental que nadie ___ ningún árbol.",
      "answer": "corte",
      "en": "It's essential that nobody [cuts down] any tree.",
      "explanation": "cortar → corte: present subjunctive, él (nadie). «Es fundamental que» exige: subjuntivo. Con nadie, el verbo va en singular: nadie corte."
     },
     {
      "type": "multiple-choice",
      "question": "No creo que el nuevo parque ___ listo antes del verano.",
      "options": [
       "esté",
       "está",
       "estará",
       "estar"
      ],
      "correctIndex": 0,
      "explanation": "«No creo que» niega la certeza, así que el verbo va en subjuntivo: esté. Con «creo que» (sin no) sí diríamos «está» o «estará»."
     }
    ]
   }
  }
 },
 "conditional-tense-1": {
  "exercises": {
   "replace": {
    "4": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "Would you (tú) help me with my homework?",
     "answer": "¿Me ayudarías con la tarea?",
     "altAnswers": [
      "¿Me ayudarías con mi tarea?",
      "¿Me ayudarías con los deberes?",
      "¿Me ayudarías con mis deberes?"
     ],
     "explanation": "Petición cortés con condicional: ayudar + -ías = ayudarías."
    },
    "19": {
     "type": "word-order",
     "prompt": "Ordena las palabras.",
     "words": [
      "Sin",
      "carro,",
      "tardaríamos",
      "dos",
      "horas",
      "en",
      "llegar"
     ],
     "translation": "Without a car, it would take us two hours to get there",
     "explanation": "Hipótesis («sin carro») + condicional: tardaríamos."
    },
    "21": {
     "type": "speak",
     "text": "Con más dinero, yo viajaría a Japón.",
     "prompt": "Dilo en español: \"With more money, I would travel to Japan\"",
     "altAnswers": [
      "Con más dinero, viajaría a Japón.",
      "Yo viajaría a Japón con más dinero.",
      "Viajaría a Japón con más dinero."
     ],
     "explanation": "Una forma de decirlo: «Con más dinero, yo viajaría a Japón». viajar + -ía: viajaría."
    }
   }
  },
  "sections": {
   "0": {
    "examples": [
     {
      "es": "hablaría, hablarías, hablaría, hablaríamos, hablaríais, hablarían",
      "en": "I/you/he/we/you all/they would speak"
     },
     {
      "es": "Con más dinero, yo viajaría a Japón.",
      "en": "With more money, I would travel to Japan. (viajar + -ía)"
     },
     {
      "es": "Mis abuelos vivirían en el campo.",
      "en": "My grandparents would live in the country. (vivir + -ían)"
     }
    ],
    "check": [
     {
      "type": "multiple-choice",
      "question": "«Ellas ___ en un barco.» (dormir, condicional)",
      "options": [
       "dormirían",
       "dormían",
       "dormirán",
       "durmieron"
      ],
      "correctIndex": 0,
      "explanation": "Condicional = infinitivo completo + -ían: dormirían. «Dormían» es imperfecto (sin la -r-), «dormirán» es futuro (-án) y «durmieron» es pretérito."
     },
     {
      "type": "fill-blank",
      "prompt": "¿Cómo se dicen en español las palabras en negrita?",
      "sentence": "Con más tiempo, nosotros ___ fuera todos los días.",
      "answer": "comeríamos",
      "en": "With more time, we [would eat] out every day.",
      "explanation": "comer → comeríamos: conditional, nosotros. El condicional regular añade -íamos al infinitivo completo: comeríamos."
     }
    ]
   },
   "1": {
    "body": [
     "¿Por qué se parecen al imperfecto (comía)? Porque nacieron de «infinitivo + había»: hablar había → hablaría. La pista para no confundirlos: el condicional conserva la -r- del infinitivo (comería), el imperfecto no (comía).",
     "Para imaginar, une el condicional a con, sin o en tu lugar: con más tiempo, viajaría; sin carro, caminaría más; en tu lugar, lo aceptaría."
    ]
   }
  }
 },
 "b1d-patron-condicional": {
  "exercises": {
   "replace": {
    "17": {
     "type": "multiple-choice",
     "question": "«Con un carro, ustedes ___ antes.» (llegar)",
     "options": [
      "llegarían",
      "llegaríamos",
      "llegarán",
      "llegaban"
     ],
     "correctIndex": 0,
     "explanation": "Ustedes: llegar + -ían = llegarían. «Llegaríamos» es nosotros, «llegarán» es futuro (un hecho, no una hipótesis) y «llegaban», imperfecto."
    },
    "19": {
     "type": "write",
     "prompt": "Describe tu día perfecto: dónde te despertarías, qué harías por la mañana y por la tarde, con quién estarías y qué comerías. Usa el condicional.",
     "minWords": 50,
     "maxWords": 90,
     "rubric": [
      "Al menos seis verbos en condicional",
      "Al menos dos condicionales irregulares (haría, saldría, vendría, podría…)",
      "Marcadores de tiempo (por la mañana, después, por la noche)",
      "Varias personas (yo, nosotros, mis amigos…)"
     ],
     "modelAnswer": "Mi día perfecto empezaría en una casa al lado del mar. Me despertaría sin despertador y desayunaría en la terraza con mi pareja. Por la mañana saldríamos a nadar y después daríamos un paseo por el puerto. Mis amigos vendrían a comer y haríamos una paella enorme. Por la tarde dormiría la siesta y leería un buen libro. Por la noche iríamos a un concierto al aire libre. Sería un día sin prisas y sin celular.",
     "explanation": "El condicional imagina situaciones: infinitivo + -ía (despertaría, leería). Algunos verbos cambian la raíz, como en el futuro: saldríamos, vendrían, haríamos."
    },
    "3": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "Con más tiempo, ustedes ___ más deporte.",
     "answer": "harían",
     "altAnswers": [
      "haríais"
     ],
     "en": "With more time, you all [would do] more sports.",
     "explanation": "hacer → harían: conditional, ustedes (stem har-). Hacer se acorta a har- (haré → haría) + -ían. «Hacerían» no existe."
    },
    "15": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "Con un perro, ustedes ___ más paseos.",
     "answer": "darían",
     "altAnswers": [
      "daríais"
     ],
     "en": "With a dog, you all [would take] more walks.",
     "explanation": "Ustedes: infinitivo + -ían (darían), con tilde en la í."
    }
   }
  },
  "sections": {
   "0": {
    "body": [
     "Recuerda la regla: condicional = infinitivo completo + -ía, -ías, -ía, -íamos, -ían. Hablar → hablaría, hablarías, hablaría, hablaríamos, hablarían. Todas llevan tilde en la í, porque esa í se pronuncia aparte (ha-bla-rí-a).",
     "Las raíces irregulares son las del futuro, porque los dos tiempos se construyen sobre la misma base: tendr-, pondr-, saldr-, vendr-, dir-, har-, podr-, querr-, sabr-, habr-. En este marco («Con más tiempo…», «Sin…», «En tu lugar…») la condición está imaginada, por eso el resultado va en condicional."
    ]
   }
  }
 },
 "b1r-tema-sin-tecnologia": {
  "exercises": {
   "replace": {
    "6": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "Without a phone, I would write more letters.",
     "answer": "Sin celular, escribiría más cartas.",
     "altAnswers": [
      "Sin teléfono, escribiría más cartas.",
      "Sin el celular, escribiría más cartas.",
      "Sin móvil, escribiría más cartas.",
      "Sin el móvil, escribiría más cartas."
     ],
     "explanation": "Situación imaginada → condicional: escribiría."
    },
    "7": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "I miss my music.",
     "answer": "Extraño mi música.",
     "altAnswers": [
      "Echo de menos mi música."
     ],
     "explanation": "Extrañar = to miss; el verbo es echar (echo)."
    },
    "11": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Corrige la frase.",
     "source": "¿Qué hacerías sin tu computadora?",
     "answer": "¿Qué harías sin tu computadora?",
     "altAnswers": [
      "¿Qué harías sin tu computador?",
      "¿Qué harías sin tu ordenador?"
     ],
     "explanation": "Hacer usa la raíz corta har- (como en haré): harías, no «hacerías»."
    },
    "15": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Cambia el sujeto a «mi hermana».",
     "source": "Extraño los mensajes de mis amigos.",
     "answer": "Mi hermana extraña los mensajes de sus amigos.",
     "altAnswers": [
      "Mi hermana extraña los mensajes de sus amigas.",
      "Mi hermana echa de menos los mensajes de sus amigos.",
      "Mi hermana echa de menos los mensajes de sus amigas."
     ],
     "explanation": "Extrañar se conjuga en echar (ella echa); el posesivo cambia con la persona: mis → sus."
    },
    "16": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "No soporto que mi hermano ___ el celular durante la cena.",
     "answer": "mire",
     "en": "I can't stand my brother [looking at] his phone during dinner.",
     "explanation": "No soporto que + subjuntivo: mire, no «mira»."
    },
    "21": {
     "type": "word-order",
     "prompt": "Ordena las palabras.",
     "words": [
      "Sin",
      "enchufes,",
      "no",
      "podríamos",
      "cargar",
      "los",
      "celulares"
     ],
     "translation": "Without outlets, we couldn't charge our phones",
     "explanation": "Hipótesis («sin enchufes») + condicional: podríamos (raíz podr-)."
    },
    "23": {
     "type": "multiple-choice",
     "question": "«Sin celular, yo ___ más tranquilo.» (hipótesis)",
     "options": [
      "estaré",
      "estaría",
      "estaba"
     ],
     "correctIndex": 1,
     "explanation": "Situación imaginada → condicional: estaría. «Estaré» es futuro real y «estaba», pasado."
    },
    "26": {
     "type": "speak",
     "text": "Sin celular, leería más y hablaría más con mi familia.",
     "prompt": "Dilo en español: \"Without a phone, I'd read more and talk more with my family\"",
     "explanation": "Una forma de decirlo: «Sin celular, leería más y hablaría más con mi familia». sin = condición → condicional",
     "altAnswers": [
      "Sin móvil, leería más y hablaría más con mi familia."
     ]
    },
    "2": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "Nunca ___ tantas estrellas como esa noche.",
     "answer": "vi",
     "en": "I [never saw] so many stars as that night.",
     "explanation": "ver → vi: pretérito, yo (sin tilde). Una noche concreta y terminada va en pretérito."
    },
    "5": {
     "type": "word-order",
     "prompt": "Ordena las palabras.",
     "words": [
      "Fue",
      "el",
      "fin",
      "de",
      "semana",
      "más",
      "tranquilo",
      "del",
      "año."
     ],
     "translation": "It was the most peaceful weekend of the year.",
     "explanation": "Superlativo: el + sustantivo + más + adjetivo, y después «del año» (de, no en)."
    }
   }
  },
  "sections": {
   "0": {
    "body": [
     "Recuerda las dos reglas del tema. 1) Quejarse y reaccionar: me molesta que, no soporto que, me preocupa que + subjuntivo, porque no informas de un hecho, reaccionas ante él (no soporto que no haya cobertura). Con el mismo sujeto va el infinitivo (no soporto esperar). Extrañar (to miss) se conjuga en echar: echo, echas, extraña.",
     "2) Imaginar: «sin + algo» funciona como una condición escondida (sin celular = imagina que no tienes celular), así que el resultado va en condicional: leería, haríamos, nos perderíamos. Y para contar lo que pasó en el campamento: imperfecto para describir, indefinido para los hechos, pluscuamperfecto para lo anterior."
    ],
    "examples": [
     {
      "es": "No soporto que no haya cobertura.",
      "en": "I can't stand that there's no signal. (reacción → haya)"
     },
     {
      "es": "Sin celular, leería más y hablaría más con mi familia.",
      "en": "Without a phone, I'd read more and talk more with my family. (sin = condición → condicional)"
     },
     {
      "es": "Extrañamos la ducha caliente.",
      "en": "We miss the hot shower. (echar se conjuga: echamos)"
     }
    ]
   }
  }
 },
 "b1d-habla-de-ti-millon": {
  "exercises": {
   "replace": {
    "8": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "I would buy my parents a new car.",
     "answer": "Les compraría un carro nuevo a mis padres.",
     "altAnswers": [
      "Les compraría a mis padres un carro nuevo.",
      "Les compraría un auto nuevo a mis padres.",
      "Les compraría un coche nuevo a mis padres.",
      "Les compraría a mis padres un coche nuevo."
     ],
     "explanation": "Condicional regular: compraría. «Les» anticipa «a mis padres»."
    }
   }
  }
 },
 "b1-vocabulary-practice-4": {
  "exercises": {
   "replace": {
    "0": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "Peel the potatoes and cut them. (tú)",
     "answer": "Pela las papas y córtalas.",
     "altAnswers": [
      "Pela las patatas y córtalas."
     ],
     "explanation": "Pelar = to peel; cortar = to cut. Con el imperativo afirmativo, el pronombre va pegado: córtalas."
    },
    "5": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "Bake the cake for forty minutes. (tú)",
     "answer": "Hornea el pastel cuarenta minutos.",
     "altAnswers": [
      "Hornea el pastel durante cuarenta minutos.",
      "Hornea la torta cuarenta minutos.",
      "Hornea la torta durante cuarenta minutos.",
      "Hornea el bizcocho cuarenta minutos.",
      "Hornea la tarta cuarenta minutos.",
      "Hornea la tarta durante cuarenta minutos."
     ],
     "explanation": "Hornear = to bake (de horno)."
    },
    "7": {
     "type": "speak",
     "text": "Fríe las papas y sírvelas calientes.",
     "prompt": "Dilo en español: \"Fry the potatoes and serve them hot\"",
     "explanation": "Una forma de decirlo: «Fríe las papas y sírvelas calientes». recipe → tú imperative, pronoun attached",
     "altAnswers": [
      "Fríe las patatas y sírvelas calientes."
     ]
    },
    "9": {
     "type": "speak",
     "text": "Pela las papas y córtalas.",
     "prompt": "Dilo en español: \"Peel the potatoes and cut them\"",
     "altAnswers": [
      "Pela las patatas y córtalas."
     ],
     "explanation": "Una forma de decirlo: «Pela las papas y córtalas». Pelar = to peel; cortar = to cut. Con el imperativo afirmativo, el pronombre va pegado: córtalas."
    }
   }
  },
  "sections": {
   "0": {
    "body": [
     "No memorices cincuenta palabras sueltas: casi todas salen de unas pocas raíces. Patrón 1: el participio describe cómo está la comida, y concuerda con ella como un adjetivo: picar → la cebolla picada, freír → los huevos fritos, cocer → las papas cocidas, rallar → el queso rallado."
    ]
   },
   "2": {
    "examples": [
     {
      "es": "Fríe las papas y sírvelas calientes.",
      "en": "Fry the potatoes and serve them hot. (recipe → tú imperative, pronoun attached)"
     },
     {
      "es": "Pele la cebolla y píquela.",
      "en": "Peel the onion and chop it. (usted: pele, píquela)"
     }
    ]
   }
  }
 },
 "b1-vocabulary-practice-4-part-2": {
  "exercises": {
   "replace": {
    "4": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Corrige la frase.",
     "source": "Sirve las papas cocido con un poco de sal.",
     "answer": "Sirve las papas cocidas con un poco de sal.",
     "altAnswers": [
      "Sirve las patatas cocidas con un poco de sal."
     ],
     "explanation": "El participio usado como adjetivo concuerda con el sustantivo: las papas → cocidas, no «cocido»."
    },
    "14": {
     "type": "speak",
     "text": "Fríe las papas y sírvelas calientes.",
     "prompt": "Dilo en español: \"Fry the potatoes and serve them hot\"",
     "explanation": "Una forma de decirlo: «Fríe las papas y sírvelas calientes». recipe → tú imperative, pronoun attached",
     "altAnswers": [
      "Fríe las patatas y sírvelas calientes."
     ]
    }
   }
  },
  "sections": {
   "0": {
    "examples": [
     {
      "es": "picar → la cebolla picada",
      "en": "to chop → the chopped onion (participle = adjective: picada agrees with cebolla)"
     },
     {
      "es": "la cuchara → una cucharada de aceite",
      "en": "the spoon → a spoonful of oil (-ada = what fits in it)"
     },
     {
      "es": "Fríe las papas y sírvelas calientes.",
      "en": "Fry the potatoes and serve them hot. (recipe → tú imperative, pronoun attached)"
     }
    ]
   }
  }
 },
 "b1-common-words-heroes": {
  "sections": {
   "2": {
    "check": [
     {
      "type": "multiple-choice",
      "question": "¿Cómo se dice «spaceship»?",
      "options": [
       "nave espacial",
       "barco espacial",
       "carro espacial",
       "avión espacial"
      ],
      "correctIndex": 0,
      "explanation": "Spaceship = nave espacial. «Nave» se usa para barcos y vehículos del espacio; barco, carro o avión espacial no son las palabras que se usan."
     },
     {
      "type": "multiple-choice",
      "question": "Aplica el patrón: «leal» = loyal. ¿Cómo se dice «loyalty»?",
      "options": [
       "la lealtad",
       "el lealtad",
       "la lealeza",
       "la lealidad"
      ],
      "correctIndex": 0,
      "explanation": "Adjetivo + -tad → sustantivo femenino, como libre → la libertad: leal → la lealtad. Por ser -tad es femenino (no «el lealtad»), y las otras terminaciones no existen con esta palabra."
     }
    ]
   }
  }
 },
 "b1r-mission-recipe": {
  "exercises": {
   "replace": {
    "14": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "Take the cake out of the oven and let it cool. (tú)",
     "answer": "Saca la torta del horno y déjala enfriar.",
     "altAnswers": [
      "Saca el pastel del horno y déjalo enfriar.",
      "Saca la torta del horno y deja que se enfríe.",
      "Saca la tarta del horno y déjala enfriar.",
      "Saca la tarta del horno y deja que se enfríe."
     ],
     "explanation": "Pronombre pegado al afirmativo: déjala."
    },
    "23": {
     "type": "speak",
     "text": "Pela las papas y córtalas.",
     "prompt": "Dilo en español: \"Peel the potatoes and cut them\"",
     "explanation": "Una forma de decirlo: «Pela las papas y córtalas». Otra forma correcta también vale: comprueba primero el significado y después la pronunciación.",
     "altAnswers": [
      "Pela las patatas y córtalas."
     ]
    },
    "24": {
     "type": "speak",
     "text": "Mezcla los huevos con las papas.",
     "prompt": "Dilo en español: \"Mix the eggs with the potatoes\"",
     "explanation": "Una forma de decirlo: «Mezcla los huevos con las papas». mezclar → mezcla: affirmative command, tú. Tú afirmativo = forma él del presente: mezcla.",
     "altAnswers": [
      "Mezcla los huevos con las patatas."
     ]
    }
   }
  },
  "sections": {
   "0": {
    "examples": [
     {
      "es": "Pelar las papas y cortarlas en rodajas. → Pele las papas y córtelas en rodajas.",
      "en": "Peel the potatoes and slice them. (usted + pronombre pegado)"
     },
     {
      "es": "Batir los huevos con sal. → Bata los huevos con sal.",
      "en": "Beat the eggs with salt. (batir → bata)"
     }
    ],
    "check": [
     {
      "type": "fill-blank",
      "prompt": "Convierte la nota en mandato de usted.",
      "sentence": "Freír las papas. → ___ las papas.",
      "answer": "Fría",
      "explanation": "El mandato de usted usa el subjuntivo; freír cambia e→i: fría."
     }
    ]
   },
   "1": {
    "examples": [
     {
      "es": "Pela las papas y córtalas.",
      "en": "Peel the potatoes and cut them."
     },
     {
      "es": "No las cortes muy finas.",
      "en": "Don't cut them too thin."
     }
    ],
    "check": [
     {
      "type": "fill-blank",
      "prompt": "¿Cómo se dicen en español las palabras en negrita?",
      "sentence": "___ los huevos con las papas.",
      "answer": "Mezcla",
      "en": "[Mix] the eggs with the potatoes. (tú)",
      "explanation": "mezclar → mezcla: affirmative command, tú. Tú afirmativo = forma él del presente: mezcla."
     }
    ]
   }
  }
 },
 "b1d-rep-formacion-dictado": {
  "exercises": {
   "replace": {
    "3": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "Es necesario que ___ el formulario hoy.",
     "answer": "rellene",
     "altAnswers": [
      "llene"
     ],
     "en": "It's necessary that you [fill in] the form today (usted).",
     "explanation": "llenar → rellene: present subjunctive, usted. Llenar es -ar → toma e: rellene."
    },
    "17": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "No creo que mi hermano ___ manejar.",
     "answer": "sepa",
     "en": "I don't think my brother [knows how] to drive.",
     "explanation": "Saber es de memoria: sepa."
    }
   }
  }
 },
 "b1d-rep-perfecto-noticias-dia": {
  "exercises": {
   "replace": {
    "8": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Corrige la frase.",
     "source": "La policía han encontrado el carro robado.",
     "answer": "La policía ha encontrado el carro robado.",
     "altAnswers": [
      "La policía ha encontrado el auto robado.",
      "La policía ha encontrado el coche robado."
     ],
     "explanation": "«La policía» es un sustantivo singular: haber va en singular (ha encontrado), aunque en inglés se diga «the police have»."
    }
   }
  }
 },
 "b1d-rep-combinados-posicion": {
  "exercises": {
   "replace": {
    "0": {
     "type": "fill-blank",
     "prompt": "Coloca.",
     "sentence": "(dar, yo, a ti, el celular, ahora) → Ahora ___ doy.",
     "answer": "te lo",
     "explanation": "Con un verbo conjugado, los pronombres van delante: te lo doy."
    }
   }
  },
  "sections": {
   "0": {
    "check": [
     {
      "type": "fill-blank",
      "prompt": "Coloca.",
      "sentence": "(dar, tú, a mí, el celular) → ___, por favor.",
      "answer": "Dámelo",
      "explanation": "Afirmativo: me + lo pegados al verbo, con tilde: dámelo."
     },
     {
      "type": "multiple-choice",
      "question": "«Quiero enseñar las fotos a mis primos.» ¿Cuál es correcta?",
      "options": [
       "Quiero enseñárselas.",
       "Quiero les las enseñar.",
       "Se las quiero enseñarlas.",
       "Quiero enseñarlesla."
      ],
      "correctIndex": 0,
      "explanation": "Con infinitivo, los pronombres se pegan al final (o van delante de «quiero»), con les + las → se las y tilde: enseñárselas. Nunca van en medio, no se repiten y «les» no se mantiene delante de «la»."
     }
    ]
   }
  }
 },
 "b1d-rep-combinados-posicion-part-2": {
  "sections": {
   "0": {
    "check": [
     {
      "type": "fill-blank",
      "prompt": "Coloca.",
      "sentence": "(no dar, tú, a mí, el celular) → No ___.",
      "answer": "me lo des",
      "explanation": "Negativo: pronombres delante + subjuntivo: no me lo des."
     }
    ]
   }
  },
  "exercises": {
   "replace": {
    "11": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "Find the keys and give them to me, but don't give them to my brother. (tú)",
     "answer": "Busca las llaves y dámelas, pero no se las des a mi hermano.",
     "altAnswers": [
      "Encuentra las llaves y dámelas, pero no se las des a mi hermano.",
      "Busca las llaves y dámelas pero no se las des a mi hermano.",
      "Encuentra las llaves y dámelas pero no se las des a mi hermano."
     ],
     "explanation": "Afirmativo: pegados («dámelas»); negativo: delante («no se las des»)."
    }
   }
  }
 },
 "b1r-challenge-pronoun-gauntlet-part-2": {
  "exercises": {
   "replace": {
    "7": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "The car? Don't lend it to them. (tú)",
     "answer": "¿El carro? No se lo prestes.",
     "altAnswers": [
      "¿El auto? No se lo prestes.",
      "¿El coche? No se lo prestes."
     ],
     "explanation": "Mandato negativo: «se lo» delante del subjuntivo «prestes»; «les lo» es incorrecto."
    },
    "13": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Corrige la frase.",
     "source": "Tu celular es más nuevo que mío.",
     "answer": "Tu celular es más nuevo que el mío.",
     "explanation": "Cuando el posesivo sustituye al sustantivo (mi celular), lleva artículo: el mío. Sin artículo solo va detrás de ser (es mío).",
     "altAnswers": [
      "Tu móvil es más nuevo que el mío."
     ]
    },
    "15": {
     "type": "speak",
     "text": "¿Tu celular? Se lo di a Marta, la que vive arriba.",
     "prompt": "Dilo en español: \"Your phone? I gave it to Marta, the one who lives upstairs\"",
     "explanation": "Una forma de decirlo: «¿Tu celular? Se lo di a Marta, la que vive arriba». Otra forma correcta también vale: comprueba primero el significado y después la pronunciación.",
     "altAnswers": [
      "¿Tu móvil? Se lo di a Marta, la que vive arriba."
     ]
    },
    "14": {
     "type": "multiple-choice",
     "question": "«¿Los pasteles? ___ he hecho para ustedes.»",
     "options": [
      "Se los",
      "Les los",
      "Los se",
      "Los les"
     ],
     "correctIndex": 0,
     "explanation": "Con ustedes, les + los → se los, y la persona va primero: se los he hecho. «Les los» no cambia les a se, y las otras dos invierten el orden."
    }
   }
  },
  "sections": {
   "0": {
    "examples": [
     {
      "es": "¿Tu celular? Se lo di a Marta, la que vive arriba.",
      "en": "Your phone? I gave it to Marta, the one who lives upstairs."
     }
    ]
   }
  }
 },
 "a2-double-pronouns-infinitive-command-part-2": {
  "exercises": {
   "replace": {
    "13": {
     "type": "write",
     "prompt": "You're going out and a babysitter is looking after your two children. Write a note with instructions about dinner, pyjamas and a story. Use commands with two pronouns.",
     "minWords": 25,
     "maxWords": 60,
     "rubric": [
      "At least three commands with two pronouns (pónselo, léeselo…)",
      "Accents on the stressed syllable when pronouns are added",
      "Clear instructions for each child",
      "A friendly opening and closing"
     ],
     "modelAnswer": "Hola, Marta: Gracias por quedarte con los niños. La cena está en el refrigerador: caliéntasela a las siete. Lucas quiere su pijama azul; pónselo después del baño. Ana tiene un libro nuevo; léeselo antes de dormir, por favor. ¿Chocolate? Diles que no. ¡Y llámame para cualquier cosa! Carmen",
     "explanation": "With an affirmative command both pronouns attach in order (person, then thing) and the stressed vowel takes an accent: caliéntasela, pónselo, léeselo. Le/les become se."
    }
   }
  }
 },
 "a2r-challenge-buenos-aires-2": {
  "sections": {
   "0": {
    "examples": [
     {
      "es": "—Perdí la billetera en el colectivo.",
      "en": "I lost my wallet on the bus."
     },
     {
      "es": "—¿Cómo era? —Era marrón y tenía mi documento adentro.",
      "en": "What did it look like? — It was brown and had my ID inside."
     },
     {
      "es": "—Vamos a buscarla. Después se la mandaremos al hotel.",
      "en": "We'll look for it. Then we'll send it to you at the hotel."
     }
    ]
   }
  }
 },
 "b1s-polite-requests": {
  "exercises": {
   "replace": {
    "0": {
     "type": "matching",
     "instructions": "Relaciona cada fórmula con su uso.",
     "pairs": [
      {
       "left": "Quería...",
       "right": "hacer una petición suave"
      },
      {
       "left": "¿Le importaría...?",
       "right": "pedir algo con mucha cortesía"
      },
      {
       "left": "Perdone que lo moleste.",
       "right": "interrumpir a alguien"
      },
      {
       "left": "Siento llegar tarde.",
       "right": "disculparse por algo"
      },
      {
       "left": "No hay de qué.",
       "right": "responder a un gracias"
      }
     ],
     "explanation": "Fórmulas de cortesía para tiendas, oficinas y desconocidos."
    },
    "4": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "___ molestarlo, pero su carro está bloqueando mi garaje.",
     "answer": "Siento",
     "en": "[I'm sorry to] bother you, but your car is blocking my garage.",
     "altAnswers": [
      "Perdone por",
      "Disculpe por"
     ],
     "explanation": "Siento + infinitivo = I'm sorry to... También: perdone que lo moleste."
    },
    "8": {
     "type": "multiple-choice",
     "question": "¿Qué petición suena más educada a un desconocido?",
     "options": [
      "¿Le importaría tomarnos una foto?",
      "Tómanos una foto.",
      "Quiero una foto.",
      "Tienes que tomarnos una foto."
     ],
     "correctIndex": 0,
     "explanation": "¿Le importaría...? con usted es la opción más suave. Las otras son directas u obligan."
    },
    "16": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Corrige la frase.",
     "source": "Perdone que le molesto, ¿tiene un bolígrafo?",
     "answer": "Perdone que lo moleste, ¿tiene un bolígrafo?",
     "altAnswers": [
      "Perdone que le moleste, ¿tiene un bolígrafo?"
     ],
     "explanation": "«Perdone que» + subjuntivo: «moleste». (También: siento molestarlo.)"
    },
    "23": {
     "type": "word-order",
     "prompt": "Ordena las palabras.",
     "words": [
      "Siento",
      "molestarlo,",
      "pero",
      "tengo",
      "una",
      "duda"
     ],
     "translation": "Sorry to bother you, but I have a question (usted)",
     "explanation": "«Siento molestarlo» para interrumpir con cortesía."
    },
    "25": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "Excuse me, could you speak a bit louder? It's just that I can't hear you well. (usted)",
     "answer": "Perdone, ¿podría hablar un poco más alto? Es que no lo oigo bien.",
     "altAnswers": [
      "Disculpe, ¿podría hablar un poco más alto? Es que no lo oigo bien.",
      "Perdone, ¿podría hablar un poco más alto? Es que no le oigo bien.",
      "Disculpe, ¿podría hablar un poco más alto? Es que no le oigo bien."
     ],
     "explanation": "«¿Podría…?» + «es que» para justificar la petición."
    },
    "26": {
     "type": "speak",
     "text": "¿Me trae una limonada, por favor?",
     "prompt": "Dilo en español: \"Can I have a lemonade, please? (usted)\"",
     "altAnswers": [
      "¿Me trae una limonada?",
      "¿Me da una limonada, por favor?",
      "¿Me puede traer una limonada, por favor?"
     ],
     "explanation": "Una forma de decirlo: «¿Me trae una limonada, por favor?». Con un mesero, el presente con por favor ya es cortés."
    }
   }
  },
  "sections": {
   "0": {
    "body": [
     "Lee el diálogo. Emma necesita un documento y habla con un funcionario.",
     "Fíjate en cómo suaviza cada petición: perdone que lo moleste, quería..., ¿podría...?, ¿le importaría...?"
    ],
    "examples": [
     {
      "es": "— Perdone que lo moleste. Quería preguntarle una cosa.",
      "en": "Sorry to bother you. I wanted to ask you something."
     },
     {
      "es": "— Sí, dígame.",
      "en": "Yes, go ahead."
     },
     {
      "es": "— Necesitaría un certificado. ¿Podría decirme qué tengo que hacer?",
      "en": "I'd need a certificate. Could you tell me what I have to do?"
     },
     {
      "es": "— Tiene que llenar este formulario y traer una fotocopia del pasaporte.",
      "en": "You need to fill in this form and bring a photocopy of your passport."
     },
     {
      "es": "— ¿Le importaría explicarme esta parte? No la entiendo bien.",
      "en": "Would you mind explaining this part to me? I don't quite understand it."
     },
     {
      "es": "— Claro, no se preocupe.",
      "en": "Of course, don't worry."
     }
    ]
   },
   "1": {
    "body": [
     "Directo (entre amigos, o con por favor en una tienda): ¿Me das un café? / ¿Me da un café, por favor? No es de mala educación en español; con desconocidos, añade por favor.",
     "Suave: imperfecto o condicional. Quería / Quisiera un café. ¿Podría / Podrías ayudarme? Me gustaría hablar con el encargado. Necesitaría una factura.",
     "Muy suave: ¿Le importaría + infinitivo? ¿Sería tan amable de + infinitivo? ¿Le importa que + subjuntivo? (¿Le importa que abra la ventana?).",
     "En América Latina el usted y las fórmulas suaves se usan más con desconocidos que en España, donde el tú está muy extendido."
    ],
    "examples": [
     {
      "es": "¿Me trae una limonada?",
      "en": "Can I have a lemonade? (usted)"
     },
     {
      "es": "Quisiera hablar con el encargado.",
      "en": "I'd like to speak to the manager."
     },
     {
      "es": "¿Podrías bajar un poco la música?",
      "en": "Could you turn the music down a bit?"
     },
     {
      "es": "¿Le importaría cerrar la ventana?",
      "en": "Would you mind closing the window?"
     },
     {
      "es": "¿Le importa que me siente aquí?",
      "en": "Do you mind if I sit here?"
     }
    ]
   },
   "2": {
    "body": [
     "Disculparse: Perdón / Perdone / Disculpe (para llamar la atención o por algo pequeño). Lo siento (mucho) (para algo más serio). Siento llegar tarde. Siento la espera.",
     "Perdone que lo moleste / Siento molestarlo: para interrumpir a alguien.",
     "Agradecer: Muchas gracias. Gracias por todo. Es usted muy amable. Te lo agradezco mucho. Respuesta: De nada / No hay de qué / A ti (a usted).",
     "Un buen truco: pedir + dar una razón. Perdone, ¿podría hablar un poco más despacio? Es que todavía estoy aprendiendo. Es que... es la forma más natural de justificar."
    ],
    "check": [
     {
      "type": "multiple-choice",
      "question": "Llegas diez minutos tarde a una reunión. ¿Qué dices?",
      "options": [
       "Siento llegar tarde.",
       "Perdone que lo moleste.",
       "No hay de qué.",
       "¿Le importaría llegar tarde?"
      ],
      "correctIndex": 0,
      "explanation": "Sentir + infinitivo = to be sorry for doing something. «Perdone que lo moleste» es para interrumpir; «no hay de qué» responde a un gracias."
     }
    ]
   }
  }
 },
 "b1r-tema-trabajo-en-grupo": {
  "exercises": {
   "replace": {
    "3": {
     "type": "multiple-choice",
     "question": "«Let's not argue.»",
     "options": [
      "No discutamos.",
      "No discutimos.",
      "No discutan.",
      "No discutir nosotros."
     ],
     "correctIndex": 0,
     "explanation": "El mandato negativo de nosotros usa el subjuntivo: no discutamos. «No discutimos» es indicativo, «no discutan» es de ustedes y «No discutir nosotros» no es una estructura posible."
    },
    "5": {
     "type": "word-order",
     "prompt": "Ordena las palabras.",
     "words": [
      "Al",
      "final",
      "entregamos",
      "el",
      "proyecto",
      "que",
      "preparamos",
      "juntos."
     ],
     "translation": "In the end we handed in the project we prepared together.",
     "explanation": "Entregamos y preparamos: pretérito, dos hechos terminados. «Que preparamos juntos» describe el proyecto."
    },
    "23": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "I'd do the slides. Is that okay with you all?",
     "answer": "Yo haría las diapositivas. ¿Les parece bien?",
     "altAnswers": [
      "Haría las diapositivas. ¿Les parece bien?",
      "Yo haría las diapositivas, ¿les parece bien?",
      "Haría las diapositivas, ¿les parece bien?",
      "Yo haría las diapositivas. ¿Os parece bien?",
      "Haría las diapositivas, ¿os parece bien?"
     ],
     "explanation": "El condicional «haría» ofrece ayuda con tacto; «¿les parece bien?» pregunta al grupo (ustedes)."
    }
   }
  }
 },
 "combined-object-pronouns-2": {
  "exercises": {
   "replace": {
    "14": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Sustituye «las lentes» por un pronombre.",
     "source": "Tráeme las lentes, por favor.",
     "answer": "Tráemelas, por favor.",
     "explanation": "«Las lentes» → las; mandato afirmativo: pegados al verbo y con tilde (TRÁ-e-me-las)."
    }
   }
  },
  "sections": {
   "2": {
    "body": [
     "Lee este diálogo entre Marta y su compañero de departamento, Diego. Fíjate en cómo los pronombres combinados sustituyen a los sustantivos ya mencionados para evitar repeticiones, y dónde se colocan: delante del verbo conjugado (te las presté) o pegados al infinitivo (devolvérselo).",
     "Nota también que, cuando alguien pide algo con «nos», quien responde le habla al grupo con «se» (a ustedes): les + las → se las."
    ],
    "examples": [
     {
      "es": "MARTA: ¿Me prestaste las llaves del carro ayer?",
      "en": "Marta: Did you lend me the car keys yesterday?"
     },
     {
      "es": "DIEGO: Sí, te las presté por la tarde. ¿No te acuerdas?",
      "en": "Diego: Yes, I lent them to you in the afternoon. Don't you remember?"
     },
     {
      "es": "MARTA: Ah, es verdad. Oye, ¿le devolviste el libro a Ana?",
      "en": "Marta: Oh, that's right. Hey, did you return the book to Ana?"
     },
     {
      "es": "DIEGO: Todavía no. Voy a devolvérselo este fin de semana.",
      "en": "Diego: Not yet. I'm going to return it to her this weekend."
     },
     {
      "es": "MARTA: Perfecto. Y las fotos del viaje, ¿nos las vas a enviar pronto?",
      "en": "Marta: Perfect. And the trip photos, are you going to send them to us soon?"
     },
     {
      "es": "DIEGO: Claro, se las envío esta noche.",
      "en": "Diego: Of course, I'll send them to you all tonight."
     }
    ]
   }
  }
 },
 "commands-imperative-1-unit-review": {
  "sections": {
   "2": {
    "check": [
     {
      "type": "write",
      "prompt": "Escribe las normas de una biblioteca para los usuarios. Usa mandatos de usted (afirmativos y negativos) y al menos uno de nosotros para invitar a todos.",
      "minWords": 50,
      "maxWords": 100,
      "rubric": [
       "Al menos tres mandatos de usted afirmativos (hable, apague…)",
       "Al menos tres mandatos negativos (no coma, no use…)",
       "Un mandato de nosotros (respetemos, cuidemos…)",
       "Un título o introducción"
      ],
      "modelAnswer": "Normas de la biblioteca. Por favor, hable en voz baja y apague el celular antes de entrar. No coma ni beba en las salas de lectura. Devuelva los libros antes de la fecha indicada. No use los ordenadores para juegos. Si necesita ayuda, pregunte en el mostrador. Cuidemos juntos este espacio para que todos puedan estudiar.",
      "explanation": "Los mandatos de usted y los negativos usan el subjuntivo: hable, apague, no coma. Nosotros también: cuidemos, respetemos."
     }
    ]
   }
  }
 }
};
