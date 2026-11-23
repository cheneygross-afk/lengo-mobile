// Synced from cheneygross-afk/lengo:src/lib/lessons/es-redesign/c2-unit3-latam.ts by scripts/sync-content.mjs -- edit it there, not here.
// Generated: Latin American wording for C2 Unit 3. C2_UNIT3_LATAM adds
// accepted answers next to the Spain wording; C2_UNIT3_SWAP makes the Latin
// American word the main one (departamento, carro, celular, manejar, lentes,
// feriado, caminando, enojado, dólares), keeping the Spain answer accepted.
// Content only.
import type { LessonPatch } from "./patch";
export const C2_UNIT3_LATAM: Record<string, { alts?: Record<number, string[]>; checkAlts?: Record<number, Record<number, string[]>> }> = {
 "gerund-infinitive-advanced-part-1-3-part-2": {
  "alts": {
   "4": [
    "Mi vecino acaba de llegar de Chile y continúa buscando un departamento."
   ]
  }
 },
 "gerund-infinitive-advanced-part-2-mastery-check": {
  "alts": {
   "7": [
    "Llevo seis meses buscando un departamento y estoy agotado.",
    "Llevo seis meses buscando un departamento y estoy agotada."
   ]
  }
 },
 "c1r-extra-periphrasis-aspect-part-2": {
  "alts": {
   "11": [
    "Mi madre lleva toda la mañana buscando sus lentes.",
    "Mi madre anda buscando sus lentes desde esta mañana.",
    "Mi madre anda buscando sus lentes toda la mañana."
   ]
  }
 },
 "c1r-contrast-seguir-dejar": {
  "alts": {
   "3": [
    "Mi vecino sigue tocando la batería en la noche.",
    "Mi vecino continúa tocando la batería en la noche."
   ],
   "15": [
    "Sigue viviendo con sus papás."
   ]
  }
 },
 "c1r-contrast-seguir-dejar-part-2": {
  "alts": {
   "15": [
    "Sigue viviendo con sus papás."
   ]
  }
 },
 "c1r-spiral-verbs-subjunctive": {
  "alts": {
   "4": [
    "Insistió en que el carro ya estaba averiado cuando lo compró.",
    "Insistía en que el carro ya estaba averiado cuando lo compró.",
    "Insistió en que el carro ya estaba roto cuando lo compró.",
    "Insistió en que el carro ya estaba estropeado cuando lo compró."
   ]
  }
 },
 "c1r-extra-prep-verbs-cloze": {
  "alts": {
   "8": [
    "Sus papás están pensando en vender la casa, pero ella no quiere depender de su dinero.",
    "Sus papás piensan en vender la casa, pero ella no quiere depender de su dinero."
   ]
  }
 },
 "c1c2-vocabulary-practice-11": {
  "alts": {
   "8": [
    "Los ladrones siguen siempre el mismo modus operandi: entran en la noche por el tejado.",
    "Los ladrones siempre siguen el mismo modus operandi: entran en la noche por el tejado."
   ]
  }
 },
 "c2r-strategy-infer-unknown-word": {
  "alts": {
   "11": [
    "Esta chamarra es lavable a máquina.",
    "Esta chamarra es lavable en lavadora."
   ]
  }
 },
 "gerund-infinitive-advanced-part-1-mastery-check": {
  "alts": {
   "8": [
    "Mantener el celular apagado durante la película."
   ]
  }
 }
};
export const C2_UNIT3_SWAP: Record<string, LessonPatch> = {
 "gerund-infinitive-advanced-part-1-3-part-2": {
  "exercises": {
   "replace": {
    "4": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "My neighbor (a man) has just arrived from Chile and is still looking for an apartment.",
     "answer": "Mi vecino acaba de llegar de Chile y sigue buscando un departamento.",
     "altAnswers": [
      "Mi vecino acaba de llegar de Chile y sigue buscando apartamento.",
      "Mi vecino acaba de llegar de Chile y sigue buscando departamento.",
      "Mi vecino acaba de llegar de Chile y continúa buscando un departamento.",
      "Mi vecino acaba de llegar de Chile y sigue buscando un apartamento.",
      "Mi vecino acaba de llegar de Chile y sigue buscando piso.",
      "Mi vecino acaba de llegar de Chile y sigue buscando un piso.",
      "Mi vecino acaba de llegar de Chile y continúa buscando piso.",
      "Mi vecino acaba de llegar de Chile y continúa buscando un piso."
     ],
     "explanation": "Se combinan «acabar de + infinitivo» (pasado inmediato) y «seguir + gerundio» (continuidad). En América se dice «buscar (un) departamento» o «apartamento»; en España, «buscar piso», sin artículo."
    }
   }
  }
 },
 "c1r-contrast-progressive-periphrases": {
  "exercises": {
   "replace": {
    "9": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Reescribe la frase con «llevar» + gerundio.",
     "source": "Alquilan ese departamento desde 2018.",
     "answer": "Llevan alquilando ese departamento desde 2018.",
     "altAnswers": [
      "Llevan desde 2018 alquilando ese departamento.",
      "Llevan alquilando ese piso desde 2018.",
      "Llevan desde 2018 alquilando ese piso."
     ],
     "explanation": "«Llevar + gerundio» con «desde» subraya la duración acumulada desde un punto del pasado hasta ahora."
    }
   }
  }
 },
 "gerund-infinitive-advanced-part-2-mastery-check": {
  "exercises": {
   "replace": {
    "7": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Reescribe la frase con «llevar» + tiempo + gerundio.",
     "source": "Busco departamento desde hace seis meses y estoy agotado.",
     "answer": "Llevo seis meses buscando un departamento y estoy agotado.",
     "altAnswers": [
      "Llevo seis meses buscando un departamento y estoy agotada.",
      "Llevo seis meses buscando un departamento y estoy cansado.",
      "Llevo seis meses buscando piso y estoy agotado.",
      "Llevo seis meses buscando piso y estoy agotada.",
      "Llevo seis meses buscando un piso y estoy agotado.",
      "Llevo seis meses buscando un piso y estoy agotada.",
      "Llevo seis meses buscando piso y estoy cansado."
     ],
     "explanation": "«Llevar + duración + gerundio» mide el tiempo acumulado de una acción que sigue abierta y sustituye a «desde hace» + presente. «Estar» no sirve: no admite la duración como complemento directo (✗ estoy seis meses buscando)."
    }
   }
  }
 },
 "c1r-extra-periphrasis-aspect": {
  "exercises": {
   "replace": {
    "9": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "Estoy cansado: ___ tres horas manejando.",
     "answer": "llevo",
     "en": "I'm tired: I've been [driving for three hours].",
     "explanation": "Llevar + tiempo + gerundio expresa duración hasta ahora."
    }
   }
  }
 },
 "c1r-extra-periphrasis-aspect-part-2": {
  "exercises": {
   "replace": {
    "11": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "My mother has been looking for her glasses all morning.",
     "answer": "Mi madre lleva toda la mañana buscando sus lentes.",
     "altAnswers": [
      "Mi madre anda buscando sus lentes desde esta mañana.",
      "Mi madre lleva toda la mañana buscando sus anteojos.",
      "Mi madre anda buscando sus lentes toda la mañana.",
      "Mi madre lleva toda la mañana buscando sus gafas.",
      "Mi madre anda buscando sus gafas desde esta mañana.",
      "Mi madre anda buscando sus gafas toda la mañana."
     ],
     "explanation": "Llevar + toda la mañana + gerundio expresa duración hasta ahora."
    }
   }
  }
 },
 "c1r-transform-queismo-dequeismo": {
  "exercises": {
   "replace": {
    "7": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "Remember that tomorrow is a holiday (informal).",
     "answer": "Acuérdate de que mañana es feriado.",
     "altAnswers": [
      "Recuerda que mañana es feriado.",
      "Acuérdate de que mañana es fiesta.",
      "Recuerda que mañana es fiesta.",
      "Acuérdate de que mañana es festivo.",
      "Recuerda que mañana es festivo."
     ],
     "explanation": "«Acordarse» pide «de»; «recordar» no la pide, y por eso «recuerda que» es correcto. Mezclarlos es el error típico."
    }
   }
  }
 },
 "c1r-spiral-verbs-subjunctive": {
  "exercises": {
   "replace": {
    "4": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Corrige la frase.",
     "source": "Insistió en que el carro ya estuviera averiado cuando lo compró.",
     "answer": "Insistió en que el carro ya estaba averiado cuando lo compró.",
     "altAnswers": [
      "Insistía en que el carro ya estaba averiado cuando lo compró.",
      "Insistió en que el carro ya estaba roto cuando lo compró.",
      "Insistió en que el carro ya estaba estropeado cuando lo compró.",
      "Insistió en que el coche ya estaba averiado cuando lo compró.",
      "Insistía en que el coche ya estaba averiado cuando lo compró.",
      "Insistió en que el coche ya estaba roto cuando lo compró.",
      "Insistió en que el coche ya estaba estropeado cuando lo compró."
     ],
     "explanation": "Aquí «insistir en que» afirma un hecho del pasado (el carro ya estaba averiado): indicativo. Con subjuntivo se entendería que pedía que el carro estuviera averiado, algo absurdo."
    }
   }
  }
 },
 "c1r-extra-prep-verbs-cloze": {
  "exercises": {
   "replace": {
    "14": {
     "type": "multiple-choice",
     "question": "Según la carta de Irene, ¿con qué sueña?",
     "options": [
      "con que Ana vaya a verla",
      "con manejar",
      "con volver al parque",
      "con cambiar de jefe"
     ],
     "correctIndex": 0,
     "explanation": "En la carta Irene dice «Sueño con que vengas a verme»: el deseo va con «soñar con que» + subjuntivo. Manejar es lo que todavía no se atreve a hacer, el parque es un recuerdo («me acuerdo de nuestras tardes») y de su jefe dice que confía en ella."
    },
    "2": {
     "type": "word-order",
     "prompt": "Ordena las palabras.",
     "words": [
      "Cuento",
      "con",
      "ustedes",
      "para",
      "la",
      "mudanza",
      "del",
      "sábado."
     ],
     "translation": "I'm counting on all of you for the move on Saturday.",
     "explanation": "«Contar con» alguien es confiar en su ayuda; la preposición «con» es obligatoria. «Con ustedes» habla a varias personas (a una sola: «cuento contigo»)."
    }
   }
  },
  "sections": {
   "0": {
    "body": [
     "Recuerda la regla: la preposición la decide el verbo, no la palabra que viene detrás, y se mantiene también delante de «que»: «sueño con que vengas», «me enteré de que te mudabas». Lee la carta y fíjate en cada verbo con su preposición.",
     "«Querida Ana: Por fin me he decidido a escribirte. Desde que me mudé, pienso mucho en ti y me acuerdo de nuestras tardes en el parque. Aquí me he acostumbrado a casi todo, aunque todavía no me atrevo a manejar. Mi jefe confía en mí y cuento con un buen equipo. Sueño con que vengas a verme. Un abrazo, Irene.»"
    ],
    "check": [
     {
      "type": "multiple-choice",
      "question": "Según la carta, ¿qué no hace todavía Irene?",
      "options": [
       "manejar",
       "trabajar",
       "escribir",
       "pensar en Ana"
      ],
      "correctIndex": 0,
      "explanation": "La carta dice «Todavía no me atrevo a manejar». Irene sí trabaja (tiene jefe y equipo), escribe y piensa en Ana."
     }
    ]
   }
  }
 },
 "c1r-extra-prep-verbs-cloze-part-2": {
  "exercises": {
   "replace": {
    "11": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "Sueño ___ un departamento con terraza y vistas al mar.",
     "answer": "con",
     "en": "I dream [of] an apartment with a terrace and sea views.",
     "explanation": "Soñar con + sustantivo."
    }
   }
  }
 },
 "listening-reading-strategies-1": {
  "exercises": {
   "replace": {
    "2": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "Despite the rain, we walked home.",
     "answer": "A pesar de la lluvia, volvimos a casa caminando.",
     "altAnswers": [
      "Pese a la lluvia, volvimos a casa caminando.",
      "A pesar de la lluvia, volvimos a casa a pie.",
      "Pese a la lluvia, volvimos a casa a pie.",
      "A pesar de la lluvia, regresamos a casa caminando.",
      "Pese a la lluvia, regresamos a casa caminando.",
      "A pesar de la lluvia, volvimos a casa andando.",
      "Pese a la lluvia, volvimos a casa andando.",
      "A pesar de la lluvia, regresamos a casa andando.",
      "Pese a la lluvia, regresamos a casa andando."
     ],
     "explanation": "«A pesar de» + sustantivo introduce un obstáculo que no impidió el hecho; «volver andando» es volver a pie."
    },
    "16": {
     "type": "speak",
     "text": "A pesar de la lluvia, volvimos a casa caminando.",
     "prompt": "Dilo en español: \"Despite the rain, we walked home\"",
     "altAnswers": [
      "Pese a la lluvia, volvimos a casa caminando.",
      "A pesar de la lluvia, volvimos a casa a pie.",
      "Pese a la lluvia, volvimos a casa a pie.",
      "A pesar de la lluvia, regresamos a casa caminando.",
      "Pese a la lluvia, regresamos a casa caminando.",
      "A pesar de la lluvia, volvimos a casa andando.",
      "Pese a la lluvia, volvimos a casa andando.",
      "A pesar de la lluvia, regresamos a casa andando.",
      "Pese a la lluvia, regresamos a casa andando."
     ],
     "explanation": "Una forma de decirlo: «A pesar de la lluvia, volvimos a casa caminando». «A pesar de» + sustantivo introduce un obstáculo que no impidió el hecho; «volver andando» es volver a pie."
    }
   }
  },
  "sections": {
   "0": {
    "check": [
     {
      "type": "multiple-choice",
      "question": "«El ministro, siempre tan circunspecto, evitó cualquier comentario que pudiera comprometerlo.» ¿Qué significa «circunspecto»?",
      "options": [
       "prudente y reservado",
       "hablador y espontáneo",
       "enojado y agresivo",
       "cansado y distraído"
      ],
      "correctIndex": 0,
      "explanation": "La pista está en lo que hace el ministro: evita todo comentario comprometido, es decir, actúa con prudencia y reserva. «Hablador y espontáneo» es justo lo contrario, y nada en la frase apunta a enfado o cansancio."
     }
    ]
   },
   "2": {
    "examples": [
     {
      "es": "un término del ámbito jurídico",
      "en": "un tecnicismo cuyo sentido se aclara por el campo semántico del párrafo"
     },
     {
      "es": "Le costó un ojo de la cara: más de mil dólares.",
      "en": "un coloquialismo cuyo sentido aclara lo que sigue a los dos puntos"
     }
    ]
   }
  }
 },
 "gerund-infinitive-advanced-part-1-mastery-check": {
  "exercises": {
   "replace": {
    "8": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Transforma la orden en un cartel impersonal con infinitivo.",
     "source": "Mantén el celular apagado durante la película.",
     "answer": "Mantener el celular apagado durante la película.",
     "explanation": "En un cartel el mandato no se dirige a un tú concreto: el imperativo (mantén) se sustituye por el infinitivo impersonal (mantener).",
     "altAnswers": [
      "Mantener el móvil apagado durante la película."
     ]
    }
   }
  }
 },
 "listening-reading-strategies-1-part-2": {
  "exercises": {
   "replace": {
    "0": {
     "type": "multiple-choice",
     "question": "«La empresa presentó concurso de acreedores porque ya no podía pagar sus deudas.» ¿Qué pista te dice qué es un «concurso de acreedores»?",
     "options": [
      "el conector «porque», que da la causa: no poder pagar las deudas",
      "la palabra «concurso», que indica una competición",
      "el verbo «presentar», que indica una presentación pública",
      "que sea una expresión larga"
     ],
     "correctIndex": 0,
     "explanation": "«Porque» introduce la causa, y la causa (no poder pagar) revela que es un procedimiento por insolvencia. Fiarse de «concurso» como 'competición' lleva a un error: en derecho mercantil tiene otro sentido, y es precisamente el contexto el que lo aclara."
    }
   }
  }
 },
 "c1r-contrast-seguir-dejar": {
  "exercises": {
   "replace": {
    "11": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "Ya ___ de escribir la carta; solo falta echarla al buzón.",
     "answer": "he terminado",
     "en": "I [have finished] writing the letter; I only have to post it.",
     "altAnswers": [
      "he acabado",
      "terminé",
      "acabé"
     ],
     "explanation": "«Terminar de + infinitivo» expresa que se ha completado la tarea: «ya he terminado» o, muy común en América, «ya terminé»."
    },
    "12": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "Esta semana el precio de la gasolina ___ a subir.",
     "answer": "ha vuelto",
     "en": "This week the price of gas [has risen] again (volver a).",
     "explanation": "«Volver a + infinitivo» expresa repetición; el auxiliar toma el tiempo verbal: «ha vuelto a subir».",
     "altAnswers": [
      "volvió"
     ]
    },
    "4": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "We have just got back from vacation.",
     "answer": "Acabamos de volver de vacaciones.",
     "altAnswers": [
      "Acabamos de regresar de vacaciones.",
      "Acabamos de volver de las vacaciones.",
      "Acabamos de regresar de las vacaciones."
     ],
     "explanation": "«Acabar de + infinitivo» indica pasado inmediato. Error típico: usar el perfecto («hemos vuelto»), que pierde el matiz de «justo ahora»."
    }
   }
  }
 }
};
