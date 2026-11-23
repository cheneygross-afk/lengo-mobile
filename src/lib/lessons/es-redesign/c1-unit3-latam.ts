// Synced from cheneygross-afk/lengo:src/lib/lessons/es-redesign/c1-unit3-latam.ts by scripts/sync-content.mjs -- edit it there, not here.
// Generated: Latin American wording for C1 Unit 3. C1_UNIT3_LATAM adds
// accepted answers (papás, carro, celular, departamento, en la noche, chisme)
// next to the Spain wording; C1_UNIT3_SWAP makes the Latin American word the main
// one where the lesson showed the Spain word, keeping the Spain answer accepted.
// Content only.
import type { LessonPatch } from "./patch";
export const C1_UNIT3_LATAM: Record<string, { alts?: Record<number, string[]>; checkAlts?: Record<number, Record<number, string[]>> }> = {
 "b2r-tema-volver-a-la-rutina": {
  "alts": {
   "15": [
    "Las primeras semanas me ponía muy nervioso en el subte lleno de gente.",
    "Las primeras semanas me ponía muy nerviosa en el subte lleno de gente.",
    "Durante las primeras semanas me ponía muy nervioso en el subte lleno de gente."
   ]
  }
 },
 "b2d-patron-dijo-que": {
  "alts": {
   "18": [
    "Dijeron que no podían pagar la renta."
   ]
  }
 },
 "b2d-rep-estilo-indirecto-ronda": {
  "alts": {
   "12": [
    "El cliente preguntó cuánto costaba la chamarra.",
    "El cliente preguntó cuánto valía la chamarra."
   ]
  }
 },
 "b1d-circuito-cambios-raiz": {
  "alts": {
   "23": [
    "Mis papás quieren que durmamos en su casa y volvamos el domingo.",
    "Mis papás quieren que durmamos en su casa y que volvamos el domingo."
   ]
  }
 },
 "c1r-mission-business-email-por-para": {
  "alts": {
   "9": [
    "El informe debe llegarle al cliente para el martes, así que necesito sus correcciones para el lunes en la tarde."
   ]
  }
 },
 "b1r-tema-memoria-familiar": {
  "alts": {
   "11": [
    "Mi padre me contaba que sus papás habían llegado a Argentina en barco.",
    "Mi padre me decía que sus papás habían llegado a Argentina en barco.",
    "Mi padre me contaba que sus papás habían llegado a la Argentina en barco."
   ]
  }
 }
};
export const C1_UNIT3_SWAP: Record<string, LessonPatch> = {
 "b2d-pares-como-si-como": {
  "exercises": {
   "replace": {
    "10": {
     "type": "multiple-choice",
     "question": "«Haz la torta ___ dice la receta.»",
     "options": [
      "como",
      "como si",
      "como si dijera",
      "como dijera"
     ],
     "correctIndex": 0,
     "explanation": "La receta sí dice algo real, así que basta «como» + indicativo; «como si» introduciría algo irreal, y «dijera» (subjuntivo) presentaría la receta como imaginaria."
    }
   }
  }
 },
 "b2d-rep-si-como-si-ronda": {
  "exercises": {
   "replace": {
    "11": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "Maneja como si la carretera ___ suya.",
     "answer": "fuera",
     "en": "He drives as if the road [were] his.",
     "explanation": "Simultáneo: imperfecto de subjuntivo. «Como si es suya» es el error típico."
    }
   }
  }
 },
 "reported-speech-1": {
  "exercises": {
   "replace": {
    "3": {
     "type": "speak",
     "text": "El plomero dijo que estaba atascado en el tráfico.",
     "prompt": "Dilo en español: \"The plumber said he was stuck in traffic\"",
     "altAnswers": [
      "El plomero dijo que estaba en un atasco.",
      "El fontanero dijo que estaba atascado en el tráfico.",
      "El fontanero dijo que estaba en un atasco."
     ],
     "explanation": "Una forma de decirlo: «El plomero dijo que estaba atascado en el tráfico». Presente → imperfecto: «Estoy atascado» pasa a «estaba»; no dejes «está» si ya no es vigente."
    },
    "16": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "«Apaga la luz.» → Mi compañero de departamento me pidió que ___ la luz.",
     "answer": "apagara",
     "en": "My flatmate asked me to [turn off] the light.",
     "explanation": "Mandato → que + imperfecto de subjuntivo después de «pidió»."
    },
    "17": {
     "type": "word-order",
     "prompt": "Ordena las palabras.",
     "words": [
      "El",
      "mesero",
      "dijo",
      "que",
      "la",
      "cocina",
      "ya",
      "estaba",
      "cerrada"
     ],
     "translation": "The waiter said the kitchen was already closed",
     "explanation": "«Está cerrada» retrocede a «estaba cerrada»; «ya» va delante del verbo."
    },
    "20": {
     "type": "multiple-choice",
     "question": "Un amigo te dijo hace un mes: «Estoy buscando departamento». Ya lo ha encontrado. ¿Cómo lo cuentas?",
     "options": [
      "Me dijo que está buscando departamento.",
      "Me dijo que estaba buscando departamento.",
      "Me dijo que esté buscando departamento.",
      "Me dijo que estaría buscando departamento."
     ],
     "correctIndex": 1,
     "explanation": "La situación ya no es vigente, así que el presente retrocede al imperfecto; «está» solo valdría si siguiera buscando."
    }
   }
  }
 },
 "b2d-patron-dijo-que": {
  "exercises": {
   "replace": {
    "8": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "Julia said she needed a new laptop.",
     "answer": "Julia dijo que necesitaba un portátil nuevo.",
     "altAnswers": [
      "Julia dijo que necesitaba un nuevo portátil.",
      "Julia dijo que necesitaba una computadora portátil nueva.",
      "Julia dijo que necesitaba una laptop nueva.",
      "Julia dijo que necesitaba un ordenador portátil nuevo."
     ],
     "explanation": "«Necesito» → necesitaba: presente → imperfecto."
    },
    "23": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "«Sé manejar.» → Dijo que ___ manejar.",
     "answer": "sabía",
     "en": "She said she [knew how to] drive.",
     "explanation": "Sé → sabía: presente → imperfecto, no «supo»."
    },
    "27": {
     "type": "speak",
     "text": "Julia dijo que necesitaba un portátil nuevo.",
     "prompt": "Dilo en español: \"Julia said she needed a new laptop\"",
     "altAnswers": [
      "Julia dijo que necesitaba un nuevo portátil.",
      "Julia dijo que necesitaba una computadora portátil nueva.",
      "Julia dijo que necesitaba una laptop nueva.",
      "Julia dijo que necesitaba un ordenador portátil nuevo."
     ],
     "explanation": "Una forma de decirlo: «Julia dijo que necesitaba un portátil nuevo». «Necesito» → necesitaba: presente → imperfecto."
    }
   }
  }
 },
 "b2d-elige-informar-o-pedir": {
  "exercises": {
   "replace": {
    "13": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "He told the waiter he was paying by card.",
     "answer": "Le dijo al mesero que pagaba con tarjeta.",
     "altAnswers": [
      "Le dijo al mesero que pagaría con tarjeta.",
      "Le dijo al camarero que pagaba con tarjeta.",
      "Le dijo al camarero que pagaría con tarjeta."
     ],
     "explanation": "Informa de lo que va a hacer él → indicativo."
    },
    "14": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "He told the waiter to bring the bill.",
     "answer": "Le dijo al mesero que trajera la cuenta.",
     "altAnswers": [
      "Le dijo al camarero que trajera la cuenta."
     ],
     "explanation": "Le pide algo al mesero → subjuntivo: trajera."
    }
   }
  }
 },
 "b2d-rep-estilo-indirecto-ronda": {
  "exercises": {
   "replace": {
    "15": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Corrige la frase: lo cuentas una semana después.",
     "source": "Me dijo que mañana viene a verme.",
     "answer": "Me dijo que al día siguiente vendría a verme.",
     "altAnswers": [
      "Me dijo que mañana vendría a verme.",
      "Me dijo que vendría a verme al día siguiente.",
      "Me dijo que vendría a verme mañana."
     ],
     "explanation": "«Mañana vengo» contado en pasado: el presente con valor de futuro pasa a condicional (vendría), y mañana suele pasar a al día siguiente."
    },
    "11": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "The child told me that he liked dinosaurs.",
     "answer": "El niño me dijo que le gustaban los dinosaurios.",
     "altAnswers": [
      "La niña me dijo que le gustaban los dinosaurios.",
      "El niño me contó que le gustaban los dinosaurios."
     ],
     "explanation": "Decir que + imperfecto: «me gustan» → le gustaban."
    },
    "6": {
     "type": "multiple-choice",
     "question": "«No toquen nada.» → Nos dijo que no ___ nada.",
     "options": [
      "tocáramos",
      "tocamos",
      "tocábamos",
      "tocaríamos"
     ],
     "correctIndex": 0,
     "explanation": "Una orden negativa reportada en pasado va en imperfecto de subjuntivo: que no tocáramos. «Tocamos» y «tocábamos» son indicativo, y «tocaríamos» es condicional."
    },
    "20": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "«No me esperen.» → Nos dijo que no la ___.",
     "answer": "esperáramos",
     "altAnswers": [
      "esperaramos"
     ],
     "en": "She told us not to [wait for] her.",
     "explanation": "Mandato negativo → imperfecto de subjuntivo."
    }
   }
  }
 },
 "b1d-rep-formacion-cambio-raiz": {
  "exercises": {
   "replace": {
    "12": {
     "type": "speak",
     "text": "Quiero que el mesero nos sirva primero.",
     "prompt": "Dilo en español: \"I want the waiter to serve us first\"",
     "explanation": "Una forma de decirlo: «Quiero que el mesero nos sirva primero». Servir es -ir con cambio e → i, que aparece en todas las personas: sirva.",
     "altAnswers": [
      "Quiero que el camarero nos sirva primero."
     ]
    },
    "6": {
     "type": "multiple-choice",
     "question": "«Me alegra que nos ___ mejor.» (sentir, nosotros)",
     "options": [
      "sintamos",
      "sentamos",
      "sientamos",
      "sintemos"
     ],
     "correctIndex": 0,
     "explanation": "Los verbos -ir con cambio e → ie cambian e → i en nosotros: sintamos. «Sentamos» olvida ese cambio, «sientamos» usa el diptongo que no va en nosotros y «sintemos» usa la terminación de -ar."
    }
   }
  },
  "reword": [
   [
    "Nosotros y vosotros no cambian, porque",
    "Nosotros no cambia, porque"
   ],
   [
    "en nosotros y vosotros también cambian",
    "en nosotros también cambian"
   ],
   [
    "solo nosotros y vosotros conservan la o",
    "solo nosotros conserva la o"
   ],
   [
    "«Repetan» olvida el cambio, «repiten» es indicativo y «repitáis» es vosotros.",
    "«Repetan» olvida el cambio y «repiten» es indicativo."
   ]
  ],
  "sections": {
   "0": {
    "body": [
     "Recuerda la regla: los verbos con cambio de raíz cambian en el subjuntivo en las mismas personas que en el presente: yo, tú, él, ellos (piense, vuelva). Nosotros no cambia, porque el acento cae en la terminación y no en la raíz (pensemos, volvamos).",
     "Los verbos en -ir son la excepción: en nosotros también cambian, con una vocal más corta: e → i, o → u (sintamos, pidamos, durmamos)."
    ]
   }
  }
 },
 "b1d-ronda-ortografia-subjuntivo": {
  "exercises": {
   "replace": {
    "4": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "Prefiero que ___ tú el carro.",
     "answer": "conduzcas",
     "altAnswers": [
      "manejes"
     ],
     "en": "I'd rather you [drive] the car (tú).",
     "explanation": "manejar → conduzcas: present subjunctive, tú. Desde la forma yo manejo: conduzc- + -as = conduzcas."
    },
    "19": {
     "type": "speak",
     "prompt": "Responde en voz alta: tu compañero maneja de noche. Dile que esperas que llegue bien y que te busque mañana.",
     "text": "Espero que llegues bien y que me busques mañana.",
     "explanation": "Llegar → llegues (gu) y buscar → busques (qu): la letra cambia para conservar el sonido."
    }
   }
  }
 },
 "b2r-word-web-media": {
  "exercises": {
   "replace": {
    "25": {
     "type": "write",
     "prompt": "Un periódico ha publicado un artículo sobre tu asociación con datos falsos. Escribe una carta formal a la directora para quejarte y pedir una rectificación.",
     "minWords": 60,
     "maxWords": 120,
     "rubric": [
      "Vocabulario de los medios (titular, fuente, rectificación, contrastar…)",
      "Estilo indirecto para citar el artículo (afirmaba que…)",
      "Pedir / lamentar que + subjuntivo",
      "Registro formal"
     ],
     "modelAnswer": "Estimada señora directora: Le escribo en nombre de la Asociación Huerto Vivo en relación con el artículo publicado el pasado lunes. El titular afirmaba que nuestra asociación había recibido cien mil dólares de dinero público, y el texto aseguraba que no rendíamos cuentas. Ambas informaciones son falsas: la subvención fue de diez mil dólares y nuestras cuentas son públicas. Lamentamos que el periodista no contrastara los datos ni citara ninguna fuente. Por todo ello, le pedimos que publique una rectificación con la misma visibilidad que el artículo original. Atentamente, Carmen Vidal, presidenta.",
     "explanation": "Para citar el artículo se usa el estilo indirecto (afirmaba que había recibido). Lamentamos que + imperfecto de subjuntivo valora un hecho pasado, y le pedimos que + presente de subjuntivo hace la petición formal."
    }
   }
  }
 },
 "b2d-cuento-declaracion-oficial": {
  "exercises": {
   "replace": {
    "19": {
     "type": "write",
     "prompt": "La alcaldesa de tu ciudad dio ayer una rueda de prensa sobre el nuevo plan de transporte. Escribe una breve noticia para un periódico local resumiendo lo que anunció, lo que le preguntaron y lo que pidió a los ciudadanos.",
     "minWords": 60,
     "maxWords": 120,
     "rubric": [
      "Verbos de comunicación variados (anunció, aseguró, explicó, respondió)",
      "Retroceso de tiempos (habría, sería, había firmado…)",
      "Una pregunta indirecta de un periodista",
      "Una petición con pidió que + imperfecto de subjuntivo"
     ],
     "modelAnswer": "La alcaldesa presentó ayer el nuevo plan de transporte de la ciudad. Anunció que a partir de enero habría diez líneas de autobús nuevas y aseguró que el boleto sería gratuito para los menores de dieciocho años. También explicó que el Ayuntamiento había firmado un acuerdo con la región para ampliar el metro. Un periodista le preguntó cuánto costaría el proyecto, pero ella respondió que todavía no podía dar cifras. Al final, pidió a los vecinos que dejaran el carro en casa y que probaran el transporte público.",
     "explanation": "Una noticia resume con verbos de comunicación variados y retroceso de tiempos (habrá → habría, ha firmado → había firmado). La pregunta conserva el interrogativo (cuánto costaría) y la petición va en imperfecto de subjuntivo."
    },
    "17": {
     "type": "word-order",
     "prompt": "Ordena las palabras.",
     "words": [
      "Reconoció",
      "que",
      "algunos",
      "vecinos",
      "estaban",
      "enojados"
     ],
     "translation": "She admitted that some residents were angry",
     "explanation": "«Algunos vecinos están enojados» → estaban: el presente pasa a imperfecto."
    }
   }
  }
 },
 "b2d-rep-relativas-preguntas": {
  "exercises": {
   "replace": {
    "14": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "I'm looking for a flatmate who doesn't smoke.",
     "answer": "Busco un compañero de departamento que no fume.",
     "altAnswers": [
      "Estoy buscando un compañero de departamento que no fume.",
      "Busco una compañera de departamento que no fume.",
      "Estoy buscando una compañera de departamento que no fume.",
      "Busco un compañero de cuarto que no fume.",
      "Busco un compañero de piso que no fume.",
      "Estoy buscando un compañero de piso que no fume.",
      "Busco una compañera de piso que no fume.",
      "Estoy buscando una compañera de piso que no fume."
     ],
     "explanation": "Persona buscada, todavía sin identificar → subjuntivo: fume."
    },
    "21": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "¿Había alguien en el tren que ___ lo que pasó?",
     "answer": "viera",
     "altAnswers": [
      "viese"
     ],
     "en": "Was there anyone on the train who [saw] what happened?",
     "explanation": "Pasado + alguien que no sabes si existe → imperfecto de subjuntivo: viera."
    }
   }
  }
 },
 "b1r-tema-memoria-familiar": {
  "sections": {
   "1": {
    "check": [
     {
      "type": "multiple-choice",
      "question": "«Mi carro es nuevo», dijo Juan. → Juan dijo que ___ carro era nuevo.",
      "options": [
       "su",
       "mi",
       "tu",
       "nuestro"
      ],
      "correctIndex": 0,
      "explanation": "Al contarlo tú, «mi» en boca de Juan pasa a «su» (el carro de él). «Mi» sería tu carro, «tu» el de la persona con quien hablas y «nuestro» el de varios."
     },
     {
      "type": "translate",
      "direction": "en-es",
      "prompt": "Pasa la frase al estilo indirecto empezando con «Me prometió que…».",
      "source": "«Te llevaré al mar.»",
      "answer": "Me prometió que me llevaría al mar.",
      "explanation": "El futuro (llevaré) visto desde el pasado pasa a condicional: «llevaría». «Te» (a mí, desde su boca) pasa a «me»."
     }
    ]
   }
  }
 },
 "b1d-circuito-cambios-raiz": {
  "exercises": {
   "replace": {
    "0": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "No quiero que ___ nada.",
     "answer": "pierdan",
     "altAnswers": [
      "perdáis"
     ],
     "en": "I don't want you [to lose] anything (ustedes).",
     "explanation": "perder → pierdan: presente de subjuntivo, ustedes. Perder es -er: ustedes está dentro de la bota, con e → ie."
    },
    "5": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "Prefiero que ___ la película ustedes.",
     "answer": "elijan",
     "altAnswers": [
      "escojan",
      "elijáis",
      "escojáis"
     ],
     "en": "I'd rather you [choose] the movie (ustedes).",
     "explanation": "elegir → elijan: presente de subjuntivo, ustedes. e → i y g → j delante de a."
    }
   }
  }
 },
 "b2r-tema-tradiciones-rurales": {
  "exercises": {
   "replace": {
    "0": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "Si no insistiera tanto, su padre no la ___ al festival.",
     "answer": "llevaría",
     "altAnswers": [
      "llevaría con él"
     ],
     "en": "If she didn't insist so much, her father [wouldn't take] her to the festival.",
     "explanation": "Condición irreal en el presente: si + imperfecto de subjuntivo (insistiera), y en la otra parte, condicional: llevaría."
    },
    "2": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "Aunque ___ muchos kilómetros cada día, no se quejaba.",
     "answer": "caminaba",
     "altAnswers": [
      "caminó",
      "andaba"
     ],
     "en": "Although she [walked] many kilometres every day, she never complained.",
     "explanation": "caminar → caminaba: imperfecto, ella. Aunque + indicativo para un hecho real que se repetía: caminaba cada día."
    },
    "17": {
     "type": "write",
     "prompt": "Escribe un texto corto para una guía turística sobre una fiesta tradicional de un pueblo. Cuenta qué te dijo una persona del pueblo y cómo cambia el pueblo ese día.",
     "minWords": 60,
     "maxWords": 120,
     "rubric": [
      "Lo que te dijo alguien, con los tiempos hacia atrás (me contó que era…, me dijo que vendrían…)",
      "Como si + imperfecto de subjuntivo",
      "Un verbo de cambio (ponerse, volverse, convertirse en)",
      "Registro descriptivo e informativo"
     ],
     "modelAnswer": "La Fiesta de la Trashumancia se celebra cada octubre en Valdelagua. Ese día las calles se llenan de ovejas y el pueblo se convierte en un gran mercado. Una pastora me contó que su familia hacía el camino desde hacía tres siglos y que ese año vendrían más de mil ovejas. Me dijo que los niños se ponían nerviosos semanas antes. Cuando pasa el rebaño por la plaza, todos aplauden como si fuera un desfile. Después hay una comida popular con platos tradicionales y música hasta la noche.",
     "explanation": "Me contó que + imperfecto (hacía) y condicional (vendrían) al contar lo que dijo alguien; convertirse en y ponerse para los cambios; como si + imperfecto de subjuntivo (fuera) para una comparación imaginada."
    }
   }
  }
 },
 "reported-speech-2": {
  "exercises": {
   "replace": {
    "17": {
     "type": "speak",
     "text": "El diputado negó haber filtrado la información.",
     "prompt": "Dilo en español: \"The MP denied having leaked the information\"",
     "altAnswers": [
      "El diputado negó que filtrara la información.",
      "El diputado negó que él filtrara la información."
     ],
     "explanation": "Una forma de decirlo: «El diputado negó haber filtrado la información.». Negar + infinitivo cuando el sujeto es el mismo; con que, subjuntivo."
    }
   }
  },
  "sections": {
   "2": {
    "body": [
     "Verbos que piden o mandan (pedir, rogar, exigir, recomendar) → subjuntivo, en imperfecto tras un pasado: pidió que respetaran su anonimato. Desmentir y negar suelen llevar subjuntivo, porque presentan lo dicho como falso: negó que fuera cierto; con el mismo sujeto, infinitivo: negó haber filtrado nada."
    ],
    "examples": [
     {
      "es": "El juez exigió que los medios respetaran el embargo informativo.",
      "en": "The judge demanded that the media respect the news embargo. (exige → subjuntivo)"
     },
     {
      "es": "El diputado negó haber filtrado la información.",
      "en": "The MP denied having leaked the information. (niega + infinitivo, mismo sujeto)"
     }
    ]
   }
  }
 },
 "b2r-tema-volver-a-la-rutina": {
  "exercises": {
   "replace": {
    "18": {
     "type": "write",
     "prompt": "Acabas de volver de seis meses de voluntariado en otro país y la vida normal te parece extraña. Escribe un correo a una persona que conociste allí contándole cómo te sientes y cómo has cambiado.",
     "minWords": 60,
     "maxWords": 120,
     "rubric": [
      "Al menos tres verbos de cambio distintos (ponerse, volverse, hacerse, quedarse…)",
      "Como si + imperfecto de subjuntivo",
      "Un contraste entre antes y ahora (antes…; en cambio, ahora…)",
      "Registro de correo informal"
     ],
     "modelAnswer": "¡Hola, Amaru! Llevo dos semanas en Valencia y todo me parece extraño. Voy a la oficina como si fuera un turista en mi propia vida. Antes me ponía nervioso por cualquier tontería; en cambio, ahora me he vuelto mucho más paciente. Hasta me he hecho socio de una cooperativa de consumo; mis amigos dicen que me he vuelto más serio, y quizá tienen razón. Ayer, en el supermercado, me quedé mirando las estanterías durante diez minutos: hay demasiadas cosas. Extraño las mañanas en la escuela y las risas de todos ustedes. ¿Cómo están los niños? Escríbeme pronto.",
     "explanation": "Ponerse para reacciones pasajeras (me ponía nervioso), volverse para cambios de carácter más duraderos (me he vuelto más paciente) y hacerse para cambios elegidos (me he hecho socio). Como si + imperfecto de subjuntivo compara con algo irreal."
    }
   }
  }
 },
 "b2d-patron-ponerse": {
  "exercises": {
   "replace": {
    "11": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Corrige la frase (es una orden a ustedes).",
     "source": "No se ponen tristes; nos veremos pronto.",
     "answer": "No se pongan tristes; nos veremos pronto.",
     "altAnswers": [
      "No os pongáis tristes; nos veremos pronto.",
      "No se pongan tristes; nos vemos pronto."
     ],
     "explanation": "Una orden negativa a ustedes usa el presente de subjuntivo: no se pongan. «No se ponen» es indicativo y solo describe lo que pasa."
    }
   }
  }
 },
 "b2r-word-web-art-literature": {
  "exercises": {
   "replace": {
    "6": {
     "type": "word-order",
     "prompt": "Ordena las palabras.",
     "words": [
      "Los",
      "críticos",
      "elogiaron",
      "una",
      "novela",
      "que",
      "sorprendió",
      "a",
      "todos."
     ],
     "translation": "The critics praised a novel that surprised everyone.",
     "explanation": "La novela existe y la conocemos: que + indicativo (sorprendió)."
    },
    "9": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Corrige la frase (todavía no la has encontrado).",
     "source": "Busco una escultura que es de un autor anónimo.",
     "answer": "Busco una escultura que sea de un autor anónimo.",
     "altAnswers": [
      "Busco una escultura que sea de autor anónimo.",
      "Busco una escultura de un autor anónimo."
     ],
     "explanation": "No sabes si esa escultura existe: que + subjuntivo (sea), no indicativo."
    },
    "15": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Une las dos frases en una sola con que.",
     "source": "Leí una novela. La novela tiene un final sorprendente.",
     "answer": "Leí una novela que tiene un final sorprendente.",
     "altAnswers": [
      "Leí una novela que tenía un final sorprendente."
     ],
     "explanation": "La novela existe y la has leído: que + indicativo (tiene)."
    },
    "22": {
     "type": "speak",
     "text": "Busco un cuadro que muestre el mar.",
     "prompt": "Dilo en español: \"I'm looking for a painting that shows the sea\"",
     "altAnswers": [
      "Busco un cuadro que enseñe el mar.",
      "Busco una pintura que muestre el mar."
     ],
     "explanation": "Una forma de decirlo: «Busco un cuadro que muestre el mar.». No sabes si existe: que + subjuntivo (muestre)."
    }
   }
  },
  "sections": {
   "1": {
    "body": [
     "Segunda, cuando hablas de una obra que buscas pero no conoces, o que no existe («no hay ninguna…»), la relativa va en subjuntivo: busco una novela que no sea larga. ¿Por qué? Porque el subjuntivo marca que ese antecedente no está identificado. Si la obra ya existe y la conoces, va indicativo: leí una novela que es muy larga."
    ],
    "examples": [
     {
      "es": "Busco una novela que no sea demasiado larga.",
      "en": "I'm looking for a novel that isn't too long."
     },
     {
      "es": "Leí una novela que tiene un final sorprendente.",
      "en": "I read a novel that has a surprising ending. (la conoces → indicativo)"
     },
     {
      "es": "No hay ningún pintor que capte la luz como él.",
      "en": "There is no painter who captures light like him."
     }
    ]
   }
  },
  "summary": "Obras, géneros, técnicas y críticas: el vocabulario del arte, con relativas en subjuntivo e indicativo."
 },
 "b2r-dialogue-ideal-partner": {
  "exercises": {
   "replace": {
    "8": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "I'm looking for someone who has values similar to mine.",
     "answer": "Busco a alguien que tenga valores parecidos a los míos.",
     "altAnswers": [
      "Busco a alguien que tenga valores similares a los míos.",
      "Busco a alguien que tenga valores semejantes a los míos.",
      "Busco a alguien con valores parecidos a los míos."
     ],
     "explanation": "Todavía no conoces a esa persona: que + subjuntivo (tenga)."
    }
   }
  }
 },
 "b2r-dialogue-ideal-partner-part-2": {
  "exercises": {
   "replace": {
    "12": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "Tenemos un candidato que ___ justo el perfil que usted quiere.",
     "answer": "tiene",
     "altAnswers": [],
     "en": "We have a candidate who [has] exactly the profile you want.",
     "explanation": "El candidato existe y lo conocemos: que + indicativo (tiene)."
    }
   }
  }
 }
};
