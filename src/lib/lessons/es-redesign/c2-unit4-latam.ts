// Synced from cheneygross-afk/lengo:src/lib/lessons/es-redesign/c2-unit4-latam.ts by scripts/sync-content.mjs -- edit it there, not here.
// Generated: Latin American wording for C2 Unit 4. C2_UNIT4_LATAM adds
// accepted answers next to the Spain wording; C2_UNIT4_SWAP makes the Latin
// American word the main one (enojado, carro, boletos, licencia de manejar,
// estacionar, costo, renunciar, la Corte Suprema, dólares), keeping the Spain
// answer accepted. Content only.
import type { LessonPatch } from "./patch";
export const C2_UNIT4_LATAM: Record<string, { alts?: Record<number, string[]>; checkAlts?: Record<number, Record<number, string[]>> }> = {
 "subjunctive-mastery-review-4": {
  "alts": {
   "5": [
    "No es que esté enojado contigo; es que estoy preocupado.",
    "No es que esté enojada contigo; es que estoy preocupada."
   ]
  }
 },
 "nominalization-part-1-mastery-check-part-2": {
  "alts": {
   "17": [
    "El nombramiento del nuevo director se hizo oficial ayer en la tarde."
   ]
  }
 },
 "b2d-circuito-marcadores-tiempo": {
  "alts": {
   "12": [
    "Lucas dijo que entonces vivía con sus papás.",
    "Lucas dijo que en ese momento vivía con sus papás.",
    "Lucas dijo que vivía con sus papás en ese momento.",
    "Lucas dijo que vivía con sus papás entonces.",
    "Lucas dijo que en aquel momento vivía con sus papás."
   ]
  }
 }
};
export const C2_UNIT4_SWAP: Record<string, LessonPatch> = {
 "c1r-error-hunt-tense-concordance-part-2": {
  "exercises": {
   "replace": {
    "13": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "Espero que mañana no ___ los boletos.",
     "answer": "olvides",
     "en": "I hope you [don't forget] the tickets tomorrow (informal).",
     "explanation": "Acción futura y abierta: presente de subjuntivo."
    },
    "14": {
     "type": "word-order",
     "prompt": "Ordena las palabras.",
     "words": [
      "No",
      "sabía",
      "que",
      "habías",
      "vendido",
      "el",
      "carro"
     ],
     "translation": "I didn't know you had sold the car",
     "explanation": "Tras «no sabía» va indicativo (habías vendido), no subjuntivo."
    }
   }
  }
 },
 "subjunctive-mastery-review-4": {
  "exercises": {
   "replace": {
    "5": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "It's not that I'm angry with you; I'm just worried.",
     "answer": "No es que esté enojado contigo; solo estoy preocupado.",
     "altAnswers": [
      "No es que esté enojada contigo; solo estoy preocupada.",
      "No es que esté enojado contigo; es que estoy preocupado.",
      "No es que esté enojada contigo; es que estoy preocupada.",
      "No es que esté enfadado contigo; solo estoy preocupado.",
      "No es que esté enfadada contigo; solo estoy preocupada.",
      "No es que esté enfadado contigo; es que estoy preocupado.",
      "No es que esté enfadada contigo; es que estoy preocupada."
     ],
     "explanation": "Atenuación con «no es que» + subjuntivo; el hecho real se afirma luego en indicativo."
    }
   }
  }
 },
 "nominalization-part-1-1": {
  "exercises": {
   "replace": {
    "13": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "El hecho de que no ___ no significa que esté enojada.",
     "answer": "haya contestado",
     "en": "The fact that she hasn't [answered] doesn't mean she's angry.",
     "altAnswers": [
      "ha contestado",
      "haya respondido",
      "ha respondido"
     ],
     "explanation": "Dentro de «el hecho de que» se prefiere el subjuntivo; el indicativo («ha contestado») subraya la certeza del hecho."
    }
   }
  }
 },
 "nominalization-part-1-mastery-check-part-2": {
  "exercises": {
   "replace": {
    "12": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "___ no es el costo, sino el retraso.",
     "answer": "Lo más preocupante",
     "en": "[The most worrying thing] is not the cost but the delay.",
     "altAnswers": [
      "Lo preocupante"
     ],
     "explanation": "«Lo más preocupante» aísla un aspecto con «lo + adjetivo»; el artículo «el» no serviría sin sustantivo."
    }
   }
  }
 },
 "b1d-rep-perfecto-ronda-final": {
  "exercises": {
   "replace": {
    "14": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "Hace dos años ___ la licencia de manejar.",
     "answer": "me saqué",
     "en": "Two years ago [I got] my driving licence.",
     "altAnswers": [
      "saqué"
     ],
     "explanation": "«Hace dos años» marca un momento cerrado: indefinido «me saqué»."
    },
    "5": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "¿Todavía no ___ la cena?",
     "answer": "han preparado",
     "altAnswers": [
      "han hecho",
      "prepararon",
      "hicieron"
     ],
     "en": "[Haven't you all made] dinner yet? (ustedes)",
     "explanation": "preparar → han preparado: perfecto, ustedes. Con «todavía no» va bien el perfecto; en América también «¿Todavía no prepararon la cena?»."
    },
    "2": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "Este año ___ mucho.",
     "answer": "han crecido",
     "en": "This year the children [have grown] a lot.",
     "explanation": "crecer → han crecido: perfecto («este año»). En casi toda América también se dice «este año crecieron mucho».",
     "altAnswers": [
      "crecieron"
     ]
    },
    "13": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "This week it has rained every day.",
     "answer": "Esta semana ha llovido todos los días.",
     "altAnswers": [
      "Esta semana ha llovido cada día.",
      "Ha llovido todos los días esta semana.",
      "Esta semana llovió todos los días.",
      "Esta semana llovió cada día.",
      "Llovió todos los días esta semana."
     ],
     "explanation": "«Esta semana» todavía no ha terminado: pretérito perfecto «ha llovido»."
    }
   }
  }
 },
 "b2d-circuito-marcadores-tiempo": {
  "exercises": {
   "replace": {
    "11": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Corrige la frase: lo cuentas en casa, lejos del restaurante.",
     "source": "El dueño dijo que aquí el estacionamiento era gratis.",
     "answer": "El dueño dijo que allí el estacionamiento era gratis.",
     "altAnswers": [
      "El dueño dijo que el estacionamiento era gratis allí.",
      "El dueño dijo que ahí el estacionamiento era gratis.",
      "El dueño dijo que allí el estacionamiento era gratuito.",
      "El dueño dijo que allí el aparcamiento era gratis.",
      "El dueño dijo que el aparcamiento era gratis allí.",
      "El dueño dijo que ahí el aparcamiento era gratis.",
      "El dueño dijo que allí el aparcamiento era gratuito."
     ],
     "explanation": "Aquí → allí: lo cuentas desde otro sitio, así que «aquí» ya no señala el lugar del que habló el dueño."
    }
   }
  }
 },
 "c1r-contrast-conclusion-markers": {
  "exercises": {
   "replace": {
    "8": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "It will be the supreme court, ultimately, that decides who is right.",
     "answer": "Será, en última instancia, la Corte Suprema quien decida quién tiene razón.",
     "altAnswers": [
      "En última instancia, será la Corte Suprema quien decida quién tiene razón.",
      "En última instancia, será el Tribunal Supremo el que decida quién tiene razón.",
      "Será, en última instancia, el Tribunal Supremo el que decida quién tiene razón.",
      "En última instancia, será la Corte Suprema quien decidirá quién tiene razón.",
      "Será, en última instancia, el Tribunal Supremo quien decida quién tiene razón.",
      "En última instancia, será el Tribunal Supremo quien decida quién tiene razón.",
      "En última instancia, será el Tribunal Supremo quien decidirá quién tiene razón."
     ],
     "explanation": "El conector se intercala para identificar la instancia final de decisión."
    }
   }
  }
 },
 "c1r-error-hunt-risk-markers": {
  "exercises": {
   "replace": {
    "1": {
     "type": "multi-select",
     "question": "¿Qué frases son correctas?",
     "options": [
      "A riesgo de parecer maleducado, me marcho.",
      "Debe presentarse antes del lunes, so pena de perder la plaza.",
      "Bajo pena de multa, se prohíbe estacionar.",
      "A riesgo que me equivoco, lo diré."
     ],
     "correctIndexes": [
      0,
      1,
      2
     ],
     "explanation": "«A riesgo de» va con infinitivo (o con «de que» + subjuntivo si cambia el sujeto), así que «A riesgo que me equivoco» es incorrecta: «a riesgo de equivocarme». Las demás usan bien «a riesgo de» + infinitivo, «so pena de» + infinitivo y «bajo pena de» + sustantivo."
    },
    "8": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "The mayor refused to resign, at the risk of losing the support of his own party.",
     "answer": "El alcalde se negó a renunciar, a riesgo de perder el apoyo de su propio partido.",
     "altAnswers": [
      "El alcalde se negó a renunciar, a riesgo de quedarse sin el apoyo de su propio partido.",
      "El alcalde se negó a dimitir, a riesgo de perder el apoyo de su propio partido.",
      "El alcalde se negó a dimitir, a riesgo de quedarse sin el apoyo de su propio partido."
     ],
     "explanation": "Riesgo asumido por el propio sujeto: «a riesgo de» + infinitivo."
    }
   }
  }
 },
 "nominalization-part-2-1": {
  "exercises": {
   "replace": {
    "4": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Transforma la frase con dos sustantivos y el verbo «desencadenar».",
     "source": "Publicaron el informe y dos directores renunciaron.",
     "answer": "La publicación del informe desencadenó la dimisión de dos directores.",
     "explanation": "Publicar → la publicación; dimitir → la dimisión. Las dos oraciones se convierten en sujeto y objeto de un solo verbo (desencadenar), que expresa la relación causa-efecto que antes quedaba implícita en «y»."
    }
   }
  }
 },
 "nominalization-part-2-3": {
  "exercises": {
   "replace": {
    "11": {
     "type": "multiple-choice",
     "question": "¿Cuál de estos ejemplos es un circunloquio?",
     "options": [
      "Decir «la persona que maneja el vehículo» en lugar de «el conductor»",
      "Escribir una frase de tres palabras",
      "Citar una fuente exacta",
      "Repetir la misma palabra tres veces"
     ],
     "correctIndex": 0,
     "explanation": "El circunloquio es un rodeo de palabras para decir algo que podría expresarse de forma más breve; las demás opciones no cumplen esa condición."
    }
   }
  }
 },
 "presentations-negotiation-1": {
  "sections": {
   "1": {
    "check": [
     {
      "type": "multiple-choice",
      "question": "¿Qué final remata bien la exposición?",
      "options": [
       "Si se quedan con una sola idea, que sea esta: sin datos fiables no hay buenas decisiones.",
       "Bueno, pues eso es todo.",
       "No sé si me he explicado, pero ya está.",
       "Y con esto se acaba la última diapositiva."
      ],
      "correctIndex": 0,
      "explanation": "El cierre remata con un argumento memorable. Las otras tres dejan morir la exposición: un «eso es todo», una disculpa o un aviso técnico no dejan ninguna idea en el público."
     },
     {
      "type": "multiple-choice",
      "question": "«Pasemos ahora al segundo bloque: los costos.» ¿Qué función cumple esta frase?",
      "options": [
       "Señala el paso entre bloques del cuerpo",
       "Capta la atención en el preámbulo",
       "Remata la exposición",
       "Abre la ronda de preguntas"
      ],
      "correctIndex": 0,
      "explanation": "Anuncia que termina un bloque y empieza otro: es una señal de estructura dentro del cuerpo. No capta la atención (no es una pregunta ni una cifra), no cierra nada y no invita al público a preguntar."
     }
    ]
   },
   "2": {
    "body": [
     "En una conferencia formal se habla de ustedes («Fíjense en este gráfico», «Les propongo…»): es la opción neutra en todo el mundo hispano. Con «tú» (fíjate) le hablas a una sola persona, y suena demasiado cercano ante un auditorio."
    ],
    "check": [
     {
      "type": "multiple-choice",
      "question": "Ante el auditorio de un congreso, ¿qué frase usa el tratamiento adecuado?",
      "options": [
       "Fíjense en la segunda columna de la tabla.",
       "Fíjate en la segunda columna de la tabla.",
       "Fíjese en la segunda columna de la tabla."
      ],
      "correctIndex": 0,
      "explanation": "Ante un auditorio se habla de ustedes (fíjense). «Fíjate» se dirige a una sola persona con confianza, y «fíjese» a una sola persona con respeto."
     }
    ]
   }
  }
 },
 "c2r-negotiation-deadlock-part-2": {
  "exercises": {
   "replace": {
    "14": {
     "type": "write",
     "prompt": "Escribe el diálogo entre dos responsables de compras de empresas distintas cuya negociación se ha atascado en el precio. Uno de ellos consigue desbloquearla reformulando, buscando intereses comunes y proponiendo una nueva opción.",
     "minWords": 90,
     "maxWords": 150,
     "rubric": [
      "Una reformulación de la postura del otro (si no le he entendido mal…)",
      "La identificación de un interés común",
      "Una propuesta nueva que desbloquee la negociación",
      "Registro profesional y fórmulas de atenuación"
     ],
     "modelAnswer": "—Lo siento, pero no podemos bajar de doce dólares por unidad. Es nuestro último precio. —Entiendo. Si no le he entendido mal, lo que a ustedes les preocupa no es tanto el precio unitario como asegurar el volumen de producción durante todo el año, ¿no es así? —Exacto. Nuestras máquinas no pueden estar paradas en verano. —Pues ahí tenemos un interés común, porque a nosotros nos conviene tener suministro estable. ¿Y si cambiamos el planteamiento? Nos comprometemos a un pedido mínimo mensual durante dos años y, a cambio, ustedes nos aplican diez dólares por unidad. —Mmm… Con un compromiso de volumen, quizá podríamos llegar a diez cincuenta. —Si incluyen el transporte, lo aceptamos. —De acuerdo. Lo pondremos por escrito esta misma semana.",
     "explanation": "El punto muerto se supera con tres técnicas: la reformulación (si no le he entendido mal…), la búsqueda del interés común (un suministro estable para ambos) y una nueva opción (pedido mínimo a cambio de precio). La pregunta «¿y si cambiamos el planteamiento?» abre el margen de maniobra."
    }
   }
  }
 },
 "c1r-text-detective-subjunctive": {
  "exercises": {
   "replace": {
    "7": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "It is not enough for the minister to apologise; he must resign.",
     "answer": "No basta con que el ministro pida disculpas; debe renunciar.",
     "altAnswers": [
      "No basta con que el ministro pida perdón; debe renunciar.",
      "No basta con que el ministro se disculpe; debe renunciar.",
      "No basta con que el ministro pida disculpas; tiene que dimitir.",
      "No es suficiente que el ministro pida disculpas; debe renunciar.",
      "No basta con que el ministro se disculpe; tiene que dimitir.",
      "No basta con que el ministro pida disculpas; debe dimitir.",
      "No basta con que el ministro pida perdón; debe dimitir.",
      "No basta con que el ministro se disculpe; debe dimitir.",
      "No es suficiente que el ministro pida disculpas; debe dimitir."
     ],
     "explanation": "«No basta con que» pide subjuntivo. Error típico: «pide»."
    },
    "11": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "Sea cual sea el costo, la escuela ___.",
     "answer": "se reconstruirá",
     "en": "Whatever the cost, the school [will be rebuilt].",
     "altAnswers": [
      "será reconstruida",
      "se va a reconstruir",
      "va a ser reconstruida"
     ],
     "explanation": "Pasiva refleja en futuro: se + 3.ª persona."
    }
   }
  }
 },
 "subjunctive-advanced-nuances-drill-2": {
  "exercises": {
   "replace": {
    "16": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Corrige la frase.",
     "source": "¡Que se divierten en el concierto!",
     "answer": "¡Que se diviertan en el concierto!",
     "altAnswers": [
      "¡Que se diviertan mucho en el concierto!",
      "¡Que lo pasen bien en el concierto!"
     ],
     "explanation": "La exclamación de deseo lleva subjuntivo: «¡Que se diviertan!». Con indicativo («se divierten») la frase sería una afirmación, no un deseo."
    }
   }
  }
 },
 "c2r-negotiation-deadlock": {
  "sections": {
   "0": {
    "check": [
     {
      "type": "multiple-choice",
      "question": "¿Qué pregunta busca los intereses de fondo?",
      "options": [
       "¿Qué es lo que realmente les preocupa?",
       "¿Firman o no firman?",
       "¿Por qué son tan tozudos?",
       "¿Lo dejamos?"
      ],
      "correctIndex": 0,
      "explanation": "«¿Qué es lo que realmente les preocupa?» busca los intereses de fondo, no las posiciones. «¿Firman o no firman?» presiona, «¿Por qué son tan tozudos?» ataca y «¿Lo dejamos?» abandona la negociación."
     },
     {
      "type": "multiple-choice",
      "question": "Están negociando el precio de un software y nadie se mueve. ¿Qué propuesta «amplía el pastel»?",
      "options": [
       "«¿Y si incluyéramos la formación del personal y un año de soporte?»",
       "«O bajan el precio o nos vamos.»",
       "«Repitamos nuestras cifras.»",
       "«Dividamos la diferencia y en paz.»"
      ],
      "correctIndex": 0,
      "explanation": "Ampliar el pastel es añadir variables nuevas (formación, soporte) con las que ambas partes pueden ganar algo. El ultimátum bloquea, repetir cifras no cambia el terreno y partir la diferencia reparte el mismo pastel sin ampliarlo."
     }
    ]
   }
  }
 }
};
