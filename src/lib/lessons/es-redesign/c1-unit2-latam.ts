// Synced from cheneygross-afk/lengo:src/lib/lessons/es-redesign/c1-unit2-latam.ts by scripts/sync-content.mjs -- edit it there, not here.
// Generated: Latin American wording for C1 Unit 2. C1_UNIT2_LATAM adds
// accepted answers (papás, carro, celular, departamento, en la noche) next to the
// Spain wording; C1_UNIT2_SWAP makes the Latin American word the main one where
// the lesson showed the Spain word (departamento, carro, celular, mesero,
// refrigerador, manejar, ciclovías), keeping the Spain answer accepted. Content
// only.
import type { LessonPatch } from "./patch";
export const C1_UNIT2_LATAM: Record<string, { alts?: Record<number, string[]>; checkAlts?: Record<number, Record<number, string[]>> }> = {
 "imperfect-subjunctive-sequence-1": {
  "alts": {
   "3": [
    "El médico me recomendó que durmiera más y que no tomara café en la tarde.",
    "El médico me recomendó que durmiera más y que no tomase café en la tarde."
   ],
   "11": [
    "Mis papás me dijeron que condujera con cuidado.",
    "Mis papás me dijeron que manejara con cuidado.",
    "Mis papás me dijeron que condujera con cautela.",
    "Mis papás me dijeron que manejara con cautela."
   ]
  }
 },
 "b2d-pares-quiero-queria": {
  "alts": {
   "0": [
    "Mis papás quieren que estudie Derecho."
   ]
  }
 },
 "b2d-circuito-irregulares-imperfecto": {
  "alts": {
   "9": [
    "No quería que les dijéramos nada a sus papás.",
    "No quería que dijéramos nada a sus papás."
   ]
  }
 },
 "b2d-rep-relativas-pasado-part-2": {
  "alts": {
   "8": [
    "No había nada en el refrigerador que pudiéramos comer.",
    "En el refrigerador no había nada que pudiéramos comer."
   ]
  }
 },
 "b2r-transform-sequence-of-tenses": {
  "alts": {
   "4": [
    "Mis papás querían que yo estudiara Derecho.",
    "Mis papás querían que estudiara Derecho.",
    "Mis papás querían que yo estudiase Derecho."
   ]
  }
 },
 "b2d-corrige-secuencia": {
  "alts": {
   "26": [
    "Mis papás me aconsejaron que aceptara la oferta."
   ]
  }
 },
 "b2d-habla-de-ti-normas-infancia": {
  "alts": {
   "4": [
    "Mis papás me pedían que ordenara mi cuarto.",
    "Mis papás me pedían que ordenase mi cuarto."
   ],
   "7": [
    "Mis papás no me dejaban que saliera por la noche.",
    "Mis padres no me dejaban que saliera en la noche.",
    "Mis papás no me dejaban que saliera en la noche.",
    "Mis papás no me permitían que saliera de noche.",
    "Mis papás no me dejaban salir por la noche.",
    "Mis padres no me dejaban salir en la noche.",
    "Mis papás no me dejaban salir en la noche.",
    "Mis papás no me dejaban salir de noche."
   ],
   "14": [
    "Mis papás me pedían que hiciera la cama todas las mañanas.",
    "Mis papás me pedían que hiciera la cama cada mañana.",
    "Mis papás me pedían que tendiera la cama todas las mañanas.",
    "Mis papás me pedían que tendiera la cama cada mañana."
   ],
   "19": [
    "A mis papás les parecía importante que aprendiera a nadar.",
    "Mis papás pensaban que era importante que aprendiera a nadar.",
    "Para mis papás era importante que aprendiera a nadar."
   ],
   "23": [
    "Cuando era pequeño, mis papás querían que fuera médico.",
    "Cuando era pequeña, mis papás querían que fuera médica.",
    "Cuando era niño, mis papás querían que fuera médico.",
    "Cuando era niña, mis papás querían que fuera médica.",
    "Cuando era pequeña, mis papás querían que fuera médico.",
    "Cuando era niña, mis papás querían que fuera médico."
   ],
   "27": [
    "Mis papás me pedían que ordenara mi cuarto todos los sábados."
   ]
  }
 },
 "hypothetical-si-clauses-1": {
  "alts": {
   "5": [
    "Si la ciudad tuviera más carriles bici, menos gente usaría el carro."
   ]
  }
 },
 "b2d-cuento-sueno-infancia": {
  "alts": {
   "3": [
    "Mis papás querían que fuera médica como mi abuelo.",
    "Mis papás querían que fuera doctora como mi abuelo."
   ],
   "6": [
    "Quería que mis papás me vieran bailar una sola vez.",
    "Quería que mis papás me vieran bailar solo una vez."
   ],
   "7": [
    "Era normal que mis papás se preocuparan por mi futuro."
   ],
   "14": [
    "Mis papás preferían que estudiara Medicina."
   ],
   "15": [
    "Hoy mis papás quieren que siga bailando."
   ]
  }
 }
};
export const C1_UNIT2_SWAP: Record<string, LessonPatch> = {
 "imperfect-subjunctive-sequence-1": {
  "exercises": {
   "replace": {
    "14": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "Le pedí a mi hermano que me ___ el carro.",
     "answer": "dejara",
     "en": "I asked my brother to [lend] me the car.",
     "altAnswers": [
      "prestara"
     ],
     "explanation": "Pedir en pasado → imperfecto de subjuntivo."
    }
   }
  }
 },
 "b2d-pares-quiero-queria": {
  "exercises": {
   "replace": {
    "21": {
     "type": "multiple-choice",
     "question": "«Les prohibiré que ___ el celular en clase.»",
     "options": [
      "usen",
      "usaran",
      "usan",
      "usarán"
     ],
     "correctIndex": 0,
     "explanation": "Prohibir que pide subjuntivo; con el principal en futuro (prohibiré) → presente: usen. «Usaran» iría con un pasado (les prohibí), y «usan» y «usarán» son indicativo."
    },
    "22": {
     "type": "write",
     "prompt": "Organizaste una cena sorpresa para el cumpleaños de tu hermano, pero nada salió como esperabas. Escribe un correo a una amiga que no pudo venir contándole qué querías que pasara y qué ocurrió en realidad.",
     "minWords": 60,
     "maxWords": 120,
     "rubric": [
      "Quería / esperaba que + imperfecto de subjuntivo",
      "Les pedí que + imperfecto de subjuntivo",
      "Contraste con lo que pasó (indefinido e imperfecto)",
      "Al menos dos irregulares (fuera, supiera, hiciera…)"
     ],
     "modelAnswer": "¡Hola, Nuria! Te cuento lo de la cena de Álex. Yo quería que fuera una sorpresa total, así que les pedí a todos que llegaran a las nueve y que no le dijeran nada. Esperaba que mi hermano no supiera nada hasta el último momento. Pues bien: mi madre se lo contó por la mañana sin querer. Además, le pedí al restaurante que hiciera una torta de chocolate y trajeron una de fresa. Aun así, Álex se rio muchísimo y lo pasamos genial. ¡La próxima vez tienes que venir!",
     "explanation": "Con el verbo principal en pasado (quería, pedí, esperaba), la subordinada pasa al imperfecto de subjuntivo: quería que fuera, les pedí que llegaran. Lo que pasó de verdad va en indicativo: mi madre se lo contó."
    }
   }
  }
 },
 "b2d-circuito-irregulares-imperfecto": {
  "sections": {
   "0": {
    "check": [
     {
      "type": "fill-blank",
      "prompt": "¿Cómo se dicen en español las palabras en negrita?",
      "sentence": "Me sorprendió que ___ la respuesta.",
      "answer": "supiera",
      "en": "I was surprised that he [knew] the answer.",
      "explanation": "saber → supiera: imperfect subjunctive, él (me sorprendió que). Supieron → supie- + ra: supiera. Nunca «sabiera»: la raíz sup- viene del pretérito."
     },
     {
      "type": "multiple-choice",
      "question": "«Les pedí que ___ despacio.» (manejar, ellos)",
      "options": [
       "condujeran",
       "condujieran",
       "conducieran",
       "conduzcan"
      ],
      "correctIndex": 0,
      "explanation": "Manejar → condujeron (sin i tras la j) → condujeran. «Condujieran» añade una i que no existe, «conducieran» parte del infinitivo y «conduzcan» es presente de subjuntivo, que no concuerda con «pedí»."
     }
    ]
   }
  }
 },
 "b2d-circuito-irregulares-imperfecto-part-2": {
  "exercises": {
   "replace": {
    "11": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "Necesitábamos a alguien que ___ carro.",
     "answer": "tuviera",
     "en": "We needed someone who [had] a car.",
     "explanation": "Tener → tuvieron → tuviera; no «teniera»."
    },
    "13": {
     "type": "word-order",
     "prompt": "Ordena las palabras.",
     "words": [
      "Mis",
      "padres",
      "no",
      "querían",
      "que",
      "condujera",
      "de",
      "noche"
     ],
     "translation": "My parents didn't want me to drive at night",
     "explanation": "Manejar → condujeron → condujera."
    }
   }
  }
 },
 "b2d-cadena-presente-pasado": {
  "sections": {
   "1": {
    "examples": [
     {
      "es": "No creo que mientan. → No creía que mintieran.",
      "en": "I don't think they're lying. → I didn't think they were lying. (duda; mintieron → mintieran)"
     },
     {
      "es": "Busco un departamento que tenga terraza. → Buscaba un departamento que tuviera terraza.",
      "en": "I'm looking for an apartment with a terrace. → I was looking for... (antecedente desconocido)"
     }
    ]
   }
  }
 },
 "b2d-rep-relativas-pasado": {
  "exercises": {
   "replace": {
    "2": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "I'm looking for an apartment that has a terrace.",
     "answer": "Busco un departamento que tenga terraza.",
     "altAnswers": [
      "Busco un departamento que tenga una terraza.",
      "Busco un apartamento que tenga terraza.",
      "Busco un piso que tenga terraza.",
      "Busco un piso que tenga una terraza."
     ],
     "explanation": "Presente + antecedente desconocido → presente de subjuntivo."
    },
    "9": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "Necesitamos un carro en el que ___ siete personas.",
     "answer": "quepan",
     "en": "We need a car that seven people [fit] in.",
     "explanation": "Principal en presente + carro aún desconocido → presente de subjuntivo (quepan, de caber), no «cupieran»."
    },
    "13": {
     "type": "speak",
     "text": "Buscaba un departamento que estuviera cerca del trabajo.",
     "prompt": "Dilo en español: \"I was looking for an apartment near work\"",
     "explanation": "Una forma de decirlo: «Buscaba un departamento que estuviera cerca del trabajo». pasado → estuvieron → estuviera",
     "altAnswers": [
      "Buscaba un piso que estuviera cerca del trabajo."
     ]
    },
    "14": {
     "type": "speak",
     "text": "Busco un departamento que esté cerca del trabajo.",
     "prompt": "Dilo en español: \"I'm looking for an apartment that's near work\"",
     "explanation": "Una forma de decirlo: «Busco un departamento que esté cerca del trabajo». presente → presente de subjuntivo",
     "altAnswers": [
      "Busco un piso que esté cerca del trabajo."
     ]
    }
   }
  },
  "sections": {
   "0": {
    "examples": [
     {
      "es": "Me gustaría un trabajo que me permitiera viajar.",
      "en": "I'd like a job that would let me travel. (condicional → imperfecto de subjuntivo)"
     },
     {
      "es": "Busco un departamento que esté cerca del trabajo.",
      "en": "I'm looking for an apartment that's near work. (presente → presente de subjuntivo)"
     }
    ]
   },
   "1": {
    "examples": [
     {
      "es": "Buscaba un departamento que estuviera cerca del trabajo.",
      "en": "I was looking for an apartment near work. (pasado → estuvieron → estuviera)"
     },
     {
      "es": "Quería un jefe que hiciera menos reuniones.",
      "en": "I wanted a boss who held fewer meetings. (hicieron → hiciera)"
     }
    ]
   }
  }
 },
 "b2d-rep-relativas-pasado-part-2": {
  "exercises": {
   "replace": {
    "1": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "Me encantaría un carro que no ___ gasolina.",
     "answer": "gastara",
     "altAnswers": [
      "consumiera",
      "usara"
     ],
     "en": "I'd love a car that [didn't use] petrol.",
     "explanation": "gastar → gastara: imperfect subjunctive (after conditional). Me encantaría (condicional) se trata como un pasado → imperfecto de subjuntivo: gastaron → gastara."
    },
    "5": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "I was looking for an apartment that had a terrace.",
     "answer": "Buscaba un departamento que tuviera terraza.",
     "altAnswers": [
      "Buscaba un departamento que tuviera una terraza.",
      "Buscaba un apartamento que tuviera terraza.",
      "Buscaba un piso que tuviera terraza.",
      "Buscaba un piso que tuviera una terraza."
     ],
     "explanation": "Principal en pasado → imperfecto de subjuntivo: tuviera, no «tenga»."
    },
    "8": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "There was nothing in the fridge that we could eat.",
     "answer": "No había nada en el refrigerador que pudiéramos comer.",
     "altAnswers": [
      "En el refrigerador no había nada que pudiéramos comer.",
      "No había nada en la nevera que pudiéramos comer.",
      "En la nevera no había nada que pudiéramos comer."
     ],
     "explanation": "Antecedente negado (nada) en pasado → pudiéramos, con tilde."
    },
    "16": {
     "type": "speak",
     "text": "Buscaba un departamento que estuviera cerca del trabajo.",
     "prompt": "Dilo en español: \"I was looking for an apartment near work\"",
     "explanation": "Una forma de decirlo: «Buscaba un departamento que estuviera cerca del trabajo». pasado → estuvieron → estuviera",
     "altAnswers": [
      "Buscaba un piso que estuviera cerca del trabajo."
     ]
    }
   }
  },
  "sections": {
   "0": {
    "examples": [
     {
      "es": "Me gustaría un trabajo que me permitiera viajar.",
      "en": "I'd like a job that would let me travel. (condicional → imperfecto de subjuntivo)"
     },
     {
      "es": "Buscaba un departamento que estuviera cerca del trabajo.",
      "en": "I was looking for an apartment near work. (pasado → estuvieron → estuviera)"
     }
    ]
   }
  }
 },
 "b2r-transform-sequence-of-tenses": {
  "exercises": {
   "replace": {
    "6": {
     "type": "matching",
     "instructions": "Relaciona cada infinitivo con su imperfecto de subjuntivo (él).",
     "pairs": [
      {
       "left": "ir",
       "right": "fuera"
      },
      {
       "left": "poder",
       "right": "pudiera"
      },
      {
       "left": "leer",
       "right": "leyera"
      },
      {
       "left": "manejar",
       "right": "condujera"
      }
     ],
     "explanation": "Todos derivan de la tercera persona plural del indefinido: fueron, pudieron, leyeron, condujeron → quita -ron y añade -ra."
    },
    "17": {
     "type": "write",
     "prompt": "Eres el secretario o la secretaria de tu comunidad de vecinos. Escribe el resumen de la última reunión: qué propuso cada vecino, qué se decidió y qué se le pidió al administrador.",
     "minWords": 60,
     "maxWords": 120,
     "rubric": [
      "Propuso / pidió / decidió que + imperfecto de subjuntivo",
      "Era necesario / importante que + imperfecto de subjuntivo",
      "Al menos cinco formas de imperfecto de subjuntivo",
      "Registro neutro de informe"
     ],
     "modelAnswer": "Resumen de la reunión del 3 de marzo. Asistieron doce vecinos. La señora Gómez propuso que se pintara la fachada antes del verano. El vecino del segundo pidió que se instalara un ascensor, pero la mayoría consideró que era demasiado caro. Se decidió que cada familia pagara cincuenta dólares más al mes durante un año. También se acordó que era necesario que alguien revisara las luces del garaje. Por último, se le pidió al administrador que enviara los presupuestos antes de que terminara el mes.",
     "explanation": "En un resumen en pasado, propuso que, pidió que y era necesario que llevan imperfecto de subjuntivo: propuso que se pintara, era necesario que alguien revisara. Es la secuencia de tiempos."
    }
   }
  }
 },
 "b2d-corrige-secuencia": {
  "exercises": {
   "replace": {
    "10": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Corrige la frase.",
     "source": "Le pedí al mesero que me traiga la cuenta.",
     "answer": "Le pedí al mesero que me trajera la cuenta.",
     "altAnswers": [
      "Le pedí al mesero que me trajese la cuenta.",
      "Le pedí al camarero que me trajera la cuenta.",
      "Le pedí al camarero que me trajese la cuenta."
     ],
     "explanation": "Pedí está en pasado, así que el subjuntivo debe ir en imperfecto: trajera."
    }
   }
  }
 },
 "b2d-habla-de-ti-normas-infancia": {
  "exercises": {
   "replace": {
    "12": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "Mis padres preferían que ___ la tarea antes de merendar.",
     "answer": "hiciera",
     "en": "My parents preferred me [to do] my homework before my afternoon snack.",
     "explanation": "Preferían (pasado) pide imperfecto de subjuntivo de hacer: hiciera, no «haga»."
    }
   }
  }
 },
 "si-clauses-simple-1": {
  "exercises": {
   "replace": {
    "5": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Corrige la frase.",
     "source": "Si tendré dinero, compraré un celular nuevo.",
     "answer": "Si tengo dinero, compraré un celular nuevo.",
     "altAnswers": [
      "Si tengo dinero, me compraré un celular nuevo.",
      "Si tengo dinero, compraré un móvil nuevo.",
      "Si tengo dinero, me compraré un móvil nuevo."
     ],
     "explanation": "El futuro va en el resultado (compraré), nunca detrás de «si»: si tengo, no «si tendré»."
    }
   }
  }
 },
 "hypothetical-si-clauses-1": {
  "exercises": {
   "replace": {
    "1": {
     "type": "multiple-choice",
     "question": "Tu amiga no tiene perro y vive en un departamento pequeño. ¿Qué dice?",
     "options": [
      "Si tuviera un jardín, tendría un perro.",
      "Si tengo un jardín, tengo un perro.",
      "Si tendría un jardín, tuviera un perro.",
      "Si tuve un jardín, tendría un perro."
     ],
     "correctIndex": 0,
     "explanation": "No tiene jardín: es contrario a la realidad presente → si + imperfecto de subjuntivo (tuviera) + condicional (tendría). La tercera invierte los tiempos y la segunda presenta la condición como real."
    },
    "3": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "If we had a car, we'd go to the mountains at weekends.",
     "answer": "Si tuviéramos carro, iríamos a la montaña los fines de semana.",
     "altAnswers": [
      "Si tuviéramos un carro, iríamos a la montaña los fines de semana.",
      "Si tuviéramos auto, iríamos a la montaña los fines de semana.",
      "Si tuviéramos carro, iríamos a la montaña los findes.",
      "Si tuviéramos coche, iríamos a la montaña los fines de semana.",
      "Si tuviéramos un coche, iríamos a la montaña los fines de semana.",
      "Si tuviéramos coche, iríamos a la montaña los findes."
     ],
     "explanation": "Hipótesis presente: tuviéramos (subjuntivo) + iríamos (condicional)."
    },
    "5": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "If the city had more bike lanes, fewer people would drive.",
     "answer": "Si la ciudad tuviera más ciclovías, menos gente manejaría.",
     "altAnswers": [
      "Si la ciudad tuviera más ciclovías, menos gente usaría el carro.",
      "Si la ciudad tuviera más carriles para bicicletas, menos gente manejaría.",
      "Si la ciudad tuviera más carriles bici, menos gente conduciría.",
      "Si la ciudad tuviera más carriles bici, menos gente usaría el coche.",
      "Si la ciudad tuviera más carriles para bicicletas, menos gente conduciría."
     ],
     "explanation": "Si + tuviera, + condicional (manejaría)."
    }
   }
  },
  "sections": {
   "3": {
    "body": [
     "El condicional es casi siempre el tiempo correcto para la consecuencia hipotética, aunque en el habla coloquial a veces se oye el imperfecto de indicativo en la principal (Si tuviera dinero, me compraba un carro); el imperfecto de subjuntivo ahí (comprara) es regional o literario."
    ]
   },
   "5": {
    "examples": [
     {
      "es": "Si las máquinas pudieran razonar como nosotros, ¿qué cambiaría?",
      "en": "If machines could reason like us, what would change?"
     },
     {
      "es": "Cambiaría casi todo: el trabajo, la educación, hasta el arte.",
      "en": "Almost everything would change: work, education, even art."
     },
     {
      "es": "Algunos dicen que eso ya es inevitable.",
      "en": "Some people say that's already inevitable."
     },
     {
      "es": "Tal vez lo sea. Pero si actuáramos con más cuidado, evitaríamos ciertos riesgos.",
      "en": "Maybe it is. But if we acted more carefully, we'd avoid certain risks."
     }
    ]
   }
  }
 },
 "b2d-cadena-real-a-hipotetico": {
  "exercises": {
   "replace": {
    "4": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Corrige la frase.",
     "source": "Si tuviera más dinero, me compro un carro.",
     "answer": "Si tuviera más dinero, me compraría un carro.",
     "altAnswers": [
      "Si tuviese más dinero, me compraría un carro.",
      "Si tuviera más dinero, me compraría un coche.",
      "Si tuviese más dinero, me compraría un coche."
     ],
     "explanation": "Si cambias la condición a imperfecto de subjuntivo, la consecuencia también tiene que cambiar: condicional, me compraría."
    }
   }
  }
 },
 "b2d-cadena-real-a-hipotetico-part-2": {
  "exercises": {
   "replace": {
    "10": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Transforma en hipótesis (si + imperfecto de subjuntivo, condicional).",
     "source": "Si manejan con cuidado, no tendrán problemas.",
     "answer": "Si condujeran con cuidado, no tendrían problemas.",
     "altAnswers": [
      "Si condujesen con cuidado, no tendrían problemas."
     ],
     "explanation": "Manejan → condujeran; tendrán → tendrían."
    }
   }
  }
 },
 "b2d-dictado-imperfecto-subjuntivo": {
  "exercises": {
   "replace": {
    "16": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "The waiter asked us to wait outside.",
     "answer": "El mesero nos pidió que esperáramos fuera.",
     "altAnswers": [
      "El mesero nos pidió que esperáramos afuera.",
      "El camarero nos pidió que esperáramos fuera.",
      "El camarero nos pidió que esperáramos afuera."
     ],
     "explanation": "Pidió que + esperáramos, con tilde en la a de -áramos."
    },
    "17": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "It would be better if you didn't drive tonight (tú).",
     "answer": "Sería mejor que no condujeras esta noche.",
     "altAnswers": [
      "Sería mejor que no manejaras esta noche."
     ],
     "explanation": "Sería mejor que + imperfecto de subjuntivo; manejar es irregular: condujeras, con j."
    },
    "18": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "I was surprised that the tickets were so cheap.",
     "answer": "Me sorprendió que las entradas fueran tan baratas.",
     "altAnswers": [
      "Me sorprendió que los boletos fueran tan baratos.",
      "Me sorprendió que las entradas estuvieran tan baratas.",
      "Me sorprendió que los billetes fueran tan baratos."
     ],
     "explanation": "Me sorprendió que + imperfecto de subjuntivo: fueran."
    },
    "20": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "They asked us to turn off our phones before the concert.",
     "answer": "Nos pidieron que apagáramos los celulares antes del concierto.",
     "altAnswers": [
      "Nos pidieron que apagáramos los teléfonos antes del concierto.",
      "Nos pidieron que apagáramos los móviles antes del concierto."
     ],
     "explanation": "Pidieron que + apagáramos (imperfecto de subjuntivo, con tilde)."
    }
   }
  }
 },
 "b2d-rep-imperfecto-dictado": {
  "exercises": {
   "replace": {
    "11": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "I was looking for an apartment that had a terrace.",
     "answer": "Buscaba un departamento que tuviera terraza.",
     "altAnswers": [
      "Buscaba un apartamento que tuviera terraza.",
      "Buscaba un departamento que tuviera una terraza.",
      "Buscaba un piso que tuviera terraza.",
      "Buscaba un piso que tuviera una terraza."
     ],
     "explanation": "El antecedente es desconocido, por eso se usa subjuntivo; y en pasado, imperfecto."
    }
   }
  }
 },
 "b2r-mission-study-trip-diary": {
  "exercises": {
   "replace": {
    "2": {
     "type": "multi-select",
     "question": "¿Qué frases del diario son correctas?",
     "options": [
      "Era necesario que todos firmaran.",
      "No permitían que usáramos el celular en las visitas.",
      "Nos pidieron que llegamos puntuales.",
      "Me encantó que hubiera tanta gente simpática."
     ],
     "correctIndexes": [
      0,
      1,
      3
     ],
     "explanation": "«Pedir que» exige subjuntivo, y en pasado imperfecto: «que llegáramos puntuales». «Que llegamos» usa indicativo y es incorrecta."
    }
   }
  },
  "sections": {
   "0": {
    "check": [
     {
      "type": "fill-blank",
      "prompt": "¿Cómo se dicen en español las palabras en negrita?",
      "sentence": "No dejaban que ___ solos por la ciudad.",
      "answer": "saliéramos",
      "en": "They didn't let us [go out] alone around the city.",
      "explanation": "salir → saliéramos: imperfect subjunctive, nosotros (no dejaban que). No dejar que + otro sujeto → subjuntivo; en pasado, imperfecto con tilde: saliéramos."
     },
     {
      "type": "multiple-choice",
      "question": "Tu amiga no fue al viaje y te pregunta: «¿Os dejaban usar el celular?» ¿Qué le contestas?",
      "options": [
       "No, no permitían que lo usáramos durante las visitas.",
       "No, no permitían que lo usemos durante las visitas.",
       "No, no permitían que lo usábamos durante las visitas.",
       "No, no permitían que lo usaríamos durante las visitas."
      ],
      "correctIndex": 0,
      "explanation": "Permitían (pasado) + que → imperfecto de subjuntivo: usáramos. «Usemos» iría con un presente, «usábamos» es indicativo y el condicional no sigue a permitir que."
     }
    ]
   }
  }
 }
};
