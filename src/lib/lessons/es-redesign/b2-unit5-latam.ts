// Synced from cheneygross-afk/lengo:src/lib/lessons/es-redesign/b2-unit5-latam.ts by scripts/sync-content.mjs -- edit it there, not here.
// Generated: Latin American wording for B2 Unit 5. B2_UNIT5_LATAM adds
// accepted answers (papás, carro, auto, celular, en la mañana) next to the
// Spain wording; B2_UNIT5_SWAP makes the Latin American word the main one
// where the lesson showed the Spain word (carro, celular, la tarea, enojarse,
// estacionar, agarra, manejar, lavar los platos, rompecabezas), keeping the
// Spain answer accepted. It also gives the vosotros items an ustedes answer
// (vosotros still accepted) and replaces items that used later grammar: the
// perfect subjunctive, the passive and antes de que / cuando + subjunctive.
// Content only.
import type { LessonPatch } from "./patch";
export const B2_UNIT5_LATAM: Record<string, { alts?: Record<number, string[]>; checkAlts?: Record<number, Record<number, string[]>> }> = {
 "b1d-elige-explica-si": {
  "alts": {
   "20": [
    "Si mi abuela toma café en la noche, no duerme.",
    "Si mi abuela bebe café en la noche, no duerme."
   ]
  }
 },
 "past-perfect-1": {
  "alts": {
   "3": [
    "Mis papás nunca habían volado antes.",
    "Mis papás no habían volado nunca antes.",
    "Mis papás nunca antes habían volado."
   ]
  }
 },
 "b1d-linea-tiempo-antes-despues": {
  "alts": {
   "10": [
    "Cuando mi mamá me llamó, había comprado el pan.",
    "Ya había comprado el pan cuando mi mamá me llamó."
   ]
  }
 },
 "b1d-circuito-tres-pasados": {
  "alts": {
   "16": [
    "Mientras mi papá estaba leyendo, el perro rompió un jarrón."
   ]
  }
 },
 "b1g-future-perfect": {
  "alts": {
   "23": [
    "Se habrá dormido o habrá perdido el bus."
   ]
  }
 },
 "b1-vocabulary-practice-5": {
  "alts": {
   "12": [
    "Mi abuela heredó una casa de sus papás."
   ]
  }
 },
 "b1-common-words-work-ideas": {
  "alts": {
   "8": [
    "Tu papá tiene buen aspecto."
   ]
  }
 },
 "b1r-dialogue-family-debate": {
  "alts": {
   "19": [
    "Le molesta a mi papá que gastemos tanto dinero."
   ]
  }
 },
 "b1d-rep-pluscuamperfecto-dictado": {
  "alts": {
   "22": [
    "Mis papás nunca habían ido a un concierto.",
    "Mis papás nunca habían estado en un concierto."
   ]
  }
 },
 "b1d-preguntas-opiniones": {
  "alts": {
   "17": [
    "—¿Crees que a tus papás les gustará el regalo? —No, no creo que les guste.",
    "—¿Crees que a tus papás les va a gustar el regalo? —No, no creo que les guste.",
    "—¿Crees que a tus papás les gustará el regalo? —No creo que les guste.",
    "—¿Crees que a tus papás les va a gustar el regalo? —No creo que les guste."
   ]
  }
 }
};
export const B2_UNIT5_SWAP: Record<string, LessonPatch> = {
 "b1r-chain-of-conditions": {
  "exercises": {
   "replace": {
    "7": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "Si no cargo el celular, se ___ la batería.",
     "answer": "acabará",
     "en": "If I don't charge my phone, the battery [will run out].",
     "altAnswers": [
      "agotará",
      "va a acabar"
     ],
     "explanation": "Primer eslabón: si + presente y la consecuencia en futuro. «Si no cargaré» sería el error."
    },
    "11": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Transforma las dos frases en una condición con si: la primera es la condición.",
     "source": "Ahorramos cada mes. Tendremos dinero para un carro.",
     "answer": "Si ahorramos cada mes, tendremos dinero para un carro.",
     "altAnswers": [
      "Si ahorramos cada mes, tendremos dinero para un auto.",
      "Tendremos dinero para un carro si ahorramos cada mes.",
      "Si ahorramos cada mes, tendremos dinero para un coche.",
      "Tendremos dinero para un coche si ahorramos cada mes."
     ],
     "explanation": "La primera frase es la condición: va tras si en presente (ahorramos), con coma; la segunda es el resultado en futuro (tendremos)."
    },
    "12": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "If we buy a car, we'll be able to visit my grandparents more often.",
     "answer": "Si compramos un carro, podremos visitar a mis abuelos más a menudo.",
     "altAnswers": [
      "Si compramos un carro, podremos visitar a mis abuelos con más frecuencia.",
      "Si compramos un auto, podremos visitar a mis abuelos más a menudo.",
      "Si compramos un carro, podremos visitar a mis abuelos más seguido.",
      "Si compramos un auto, podremos visitar a mis abuelos más seguido.",
      "Si compramos un coche, podremos visitar a mis abuelos más a menudo.",
      "Si compramos un coche, podremos visitar a mis abuelos con más frecuencia."
     ],
     "explanation": "El resultado anterior (tener carro) se convierte en la nueva condición; «podremos» es futuro irregular."
    }
   }
  },
  "sections": {
   "0": {
    "check": [
     {
      "type": "fill-blank",
      "prompt": "¿Cómo se dicen en español las palabras en negrita?",
      "sentence": "Si mi jefe se enoja, no me ___ el aumento.",
      "answer": "dará",
      "en": "If my boss gets angry, he [won't give] me the raise.",
      "explanation": "dar → dará: future, él. Condición en presente (se enoja) y resultado en futuro: dar → dará. Ese resultado podrá ser la próxima condición: «si no me da el aumento…»."
     },
     {
      "type": "multiple-choice",
      "question": "«Si ahorro, compraré una moto. Si ___ una moto, iré al trabajo en ella.»",
      "options": [
       "compro",
       "compraré",
       "compre",
       "compraría"
      ],
      "correctIndex": 0,
      "explanation": "El resultado «compraré» vuelve como condición, y tras si va presente: si compro. «Compraré» es futuro y «compre» subjuntivo, que no van tras este si; «compraría» es condicional."
     }
    ]
   }
  }
 },
 "b1d-elige-explica-si": {
  "exercises": {
   "replace": {
    "23": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "If the meeting ends early, I'll pick you up at work, and if not, take a taxi. (tú)",
     "answer": "Si la reunión termina pronto, te recogeré en el trabajo, y si no, toma un taxi.",
     "altAnswers": [
      "Si la reunión termina temprano, te recogeré en el trabajo, y si no, toma un taxi.",
      "Si la reunión acaba pronto, te recogeré en el trabajo, y si no, toma un taxi.",
      "Si la reunión termina temprano, te buscaré en el trabajo, y si no, toma un taxi.",
      "Si la reunión termina pronto, te recogeré en el trabajo, y si no, coge un taxi."
     ],
     "explanation": "Combina consecuencia futura (te recogeré) e instrucción (toma)."
    }
   }
  }
 },
 "b1d-habla-de-ti-planes-condiciones": {
  "exercises": {
   "replace": {
    "2": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "If I save enough, I'll buy a car.",
     "answer": "Si ahorro lo suficiente, me compraré un carro.",
     "altAnswers": [
      "Si ahorro bastante, compraré un carro.",
      "Si ahorro lo suficiente, compraré un carro.",
      "Si ahorro lo suficiente, me compraré un coche.",
      "Si ahorro bastante, compraré un coche.",
      "Si ahorro lo suficiente, compraré un coche."
     ],
     "explanation": "Si + presente (ahorro) + futuro (me compraré)."
    },
    "5": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "Si no ___ nada que hacer, los llamo.",
     "answer": "tengo",
     "en": "If I don't [have] anything to do, I'll call you guys.",
     "explanation": "tener → tengo: present indicative, yo. Si + presente: tengo. El resultado también puede ir en presente (los llamo) cuando el plan es inmediato."
    },
    "17": {
     "type": "write",
     "prompt": "Es 31 de diciembre. Escribe una entrada de tu diario con tus planes para el año que viene; cada plan depende de una condición.",
     "minWords": 50,
     "maxWords": 90,
     "rubric": [
      "Al menos cuatro frases con si + presente",
      "Futuro o ir a + infinitivo en el resultado",
      "Una cadena de consecuencias (si ahorro…, viajaré…; si viajo…)",
      "Marcadores de tiempo (en primavera, este verano…)"
     ],
     "modelAnswer": "Querido diario: Mañana empieza un año nuevo y tengo muchos planes. Si consigo un trabajo a tiempo completo, ahorraré un poco cada mes. Si ahorro lo suficiente, este verano viajaré a México con mi hermana. En primavera voy a apuntarme a un gimnasio, si encuentro uno barato cerca de casa. Si aprendo a cocinar mejor, invitaré a mis amigos más a menudo. Y si todo sale bien, a final de año me mudaré a un departamento más grande.",
     "explanation": "Cada plan depende de una condición real: si + presente (si consigo, si ahorro) y el resultado en futuro (ahorraré, viajaré). Una consecuencia puede ser la condición de la siguiente: ahorraré → si ahorro…"
    }
   }
  }
 },
 "b1d-cadena-condicion-resultado": {
  "exercises": {
   "replace": {
    "21": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "Si ___ el carro en casa, ahorraremos dinero en gasolina.",
     "answer": "dejamos",
     "en": "If we [leave] the car at home, we'll save money on gas.",
     "explanation": "Condición con si en presente de nosotros: dejamos, no «dejaremos»."
    }
   }
  }
 },
 "b1d-rep-perfecto-participios-ronda": {
  "exercises": {
   "replace": {
    "3": {
     "type": "speak",
     "text": "Me han robado el celular en el metro.",
     "prompt": "Dilo en español: \"They've stolen my phone on the metro\"",
     "explanation": "Una forma de decirlo: «Me han robado el celular en el metro». robar → robado: regular past participle. Robar es regular: -ar → -ado. No todos los verbos frecuentes son irregulares.",
     "altAnswers": [
      "Me han robado el móvil en el metro."
     ]
    },
    "10": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Cambia la pregunta al pretérito perfecto.",
     "source": "¿Pones la leche en el refrigerador?",
     "answer": "¿Has puesto la leche en el refrigerador?",
     "altAnswers": [
      "¿Has puesto la leche en la nevera?",
      "¿Has puesto la leche en el frigorífico?"
     ],
     "explanation": "Pretérito perfecto = haber (has) + participio; poner tiene participio irregular: puesto, no «ponido»."
    },
    "15": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Corrige la frase.",
     "source": "Los niños han deshacido el rompecabezas en cinco minutos.",
     "answer": "Los niños han deshecho el rompecabezas en cinco minutos.",
     "altAnswers": [
      "Los niños han deshecho el puzle en cinco minutos."
     ],
     "explanation": "Un verbo con prefijo hace el participio como su base: hacer → hecho, así que deshacer → deshecho. «Deshacido» no existe."
    }
   }
  },
  "sections": {
   "1": {
    "examples": [
     {
      "es": "Todavía no he visto esa serie.",
      "en": "I still haven't seen that series. (ver → visto)"
     },
     {
      "es": "¿Qué han hecho este fin de semana?",
      "en": "What have you all done this weekend? (hacer → hecho)"
     }
    ]
   },
   "2": {
    "examples": [
     {
      "es": "¿Quién ha descubierto el error?",
      "en": "Who has discovered the mistake? (cubrir → cubierto, descubrir → descubierto)"
     },
     {
      "es": "Ya hemos devuelto las llaves del departamento.",
      "en": "We have already returned the keys to the apartment. (volver → vuelto, devolver → devuelto)"
     }
    ]
   }
  }
 },
 "b1d-rep-formacion-conjugacion-completa": {
  "exercises": {
   "replace": {
    "16": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Corrige la frase.",
     "source": "Dudo que las cajas caben en el carro.",
     "answer": "Dudo que las cajas quepan en el carro.",
     "altAnswers": [
      "Dudo que las cajas quepan en el auto.",
      "Dudo que las cajas quepan en el coche."
     ],
     "explanation": "Dudar que pide subjuntivo, y caber lo forma desde quepo: quepan. «Caben» es indicativo y no expresa duda."
    },
    "3": {
     "type": "fill-blank",
     "prompt": "Completa la tabla.",
     "sentence": "conocer → que ustedes ___",
     "answer": "conozcan",
     "altAnswers": [
      "conozcáis"
     ],
     "explanation": "Desde la forma yo (conozco): conozc- + an → conozcan."
    },
    "6": {
     "type": "matching",
     "instructions": "Relaciona el sujeto con la forma de «vivir».",
     "pairs": [
      {
       "left": "yo",
       "right": "viva"
      },
      {
       "left": "tú",
       "right": "vivas"
      },
      {
       "left": "nosotros",
       "right": "vivamos"
      },
      {
       "left": "ustedes",
       "right": "vivan"
      }
     ],
     "explanation": "Subjuntivo de vivir: viv- + a, as, amos, an."
    },
    "17": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "Quiero que ustedes ___ conmigo. (comer)",
     "answer": "coman",
     "altAnswers": [
      "comáis"
     ],
     "en": "I want you all [to eat] with me.",
     "explanation": "Subjuntivo de ustedes en -er: com- + an, coman."
    },
    "22": {
     "type": "word-order",
     "prompt": "Ordena las palabras.",
     "words": [
      "Espero",
      "que",
      "hablen",
      "más",
      "despacio",
      "en",
      "la",
      "reunión"
     ],
     "translation": "I hope you all speak more slowly in the meeting",
     "explanation": "Hablar en subjuntivo de ustedes: hablen."
    },
    "24": {
     "type": "speak",
     "text": "Espero que hablen con ella.",
     "prompt": "Dilo en español: \"I hope you all talk to her\"",
     "altAnswers": [
      "Espero que habléis con ella."
     ],
     "explanation": "Una forma de decirlo: «Espero que hablen con ella». Esperar que + subjuntivo: hablen."
    }
   }
  },
  "sections": {
   "0": {
    "body": [
     "Recuerda la regla: el presente de subjuntivo se forma desde la forma yo del presente. Quitas la -o y pones la vocal «contraria»: los verbos en -ar toman -e (hablo → hable) y los verbos en -er/-ir toman -a (como → coma, vivo → viva).",
     "Modelos: hablar → hable, hables, hable, hablemos, hablen. comer → coma, comas, coma, comamos, coman. salir → salga, salgas, salga, salgamos, salgan."
    ],
    "examples": [
     {
      "es": "Espero que hablen con ella.",
      "en": "I hope you all talk to her."
     },
     {
      "es": "No creo que vivan aquí. (vivo → viva)",
      "en": "I don't think they live here."
     }
    ],
    "check": [
     {
      "type": "multiple-choice",
      "question": "«Espero que no ___ tanto café.» (beber, tú)",
      "options": [
       "bebas",
       "bebes",
       "beba",
       "beban"
      ],
      "correctIndex": 0,
      "explanation": "Bebo → beb- + la vocal contraria de -er (a) + -s de tú: bebas. «Bebes» es indicativo, «beba» es yo/él y «beban» es ustedes."
     }
    ]
   },
   "1": {
    "check": [
     {
      "type": "fill-blank",
      "prompt": "Completa la tabla.",
      "sentence": "salir → que ustedes ___",
      "answer": "salgan",
      "explanation": "El subjuntivo sale de la forma yo: salgo → salg- + an → salgan."
     }
    ]
   }
  }
 },
 "past-perfect-1": {
  "exercises": {
   "replace": {
    "10": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "I had never driven on the left before.",
     "answer": "Nunca había manejado por la izquierda antes.",
     "altAnswers": [
      "Nunca antes había manejado por la izquierda.",
      "Nunca había conducido por la izquierda antes.",
      "Nunca antes había conducido por la izquierda."
     ],
     "explanation": "Nunca + pluscuamperfecto: experiencia que no había tenido hasta ese momento pasado."
    }
   }
  },
  "sections": {
   "0": {
    "body": [
     "Regla: cuando cuentas algo en pasado y quieres decir que otra acción ya había terminado antes de ese momento, usas el pluscuamperfecto: imperfecto de haber (había, habías, había, habíamos, habían) + participio. Cuando llegué a la estación, el tren ya había salido."
    ]
   },
   "1": {
    "body": [
     "¿Por qué no basta el indefinido? Porque dos indefinidos seguidos se entienden en orden: «Cuando llegué, el tren salió» significa que el tren salió después de tu llegada (lo viste salir). El pluscuamperfecto mueve la acción hacia atrás: ya había salido = salió antes y no lo viste."
    ]
   },
   "3": {
    "body": [
     "El pluscuamperfecto combina el imperfecto de haber (había, habías, había, habíamos, habían) con el participio pasado."
    ]
   }
  }
 },
 "b1d-patron-habia-participio": {
  "exercises": {
   "replace": {
    "18": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "Nosotros ya ___ el departamento cuando nos ofrecieron otro.",
     "answer": "habíamos alquilado",
     "en": "We [had rented] the apartment already when they offered us another one.",
     "altAnswers": [
      "habíamos rentado"
     ],
     "explanation": "Nosotros → habíamos + alquilado."
    },
    "22": {
     "type": "word-order",
     "prompt": "Ordena las palabras.",
     "words": [
      "Mi",
      "abuela",
      "nunca",
      "había",
      "usado",
      "un",
      "celular"
     ],
     "translation": "My grandmother had never used a cell phone",
     "explanation": "Ella → había + usado."
    },
    "3": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "Cuando llegué, ustedes ya ___ todo.",
     "answer": "habían hecho",
     "altAnswers": [
      "habíais hecho"
     ],
     "en": "When I arrived, you all [had done] everything already.",
     "explanation": "hacer → habían hecho: pluperfect, ustedes. Habían + hecho (participio irregular)."
    },
    "23": {
     "type": "multiple-choice",
     "question": "«Ustedes ya ___ cuando empezó a llover.» (salir)",
     "options": [
      "habían salido",
      "habíamos salido",
      "han salido",
      "había salido"
     ],
     "correctIndex": 0,
     "explanation": "Ustedes: habían + salido. «Habíamos» es nosotros, «han salido» es el perfecto (mira desde hoy) y «había» es yo o él."
    }
   }
  },
  "sections": {
   "0": {
    "body": [
     "Recuerda la regla: el pluscuamperfecto se forma con el imperfecto de haber (había, habías, había, habíamos, habían) + participio: había comido, habías salido, habían visto. Solo haber cambia con la persona; el participio se queda siempre igual.",
     "Se usa para algo que ya había pasado antes de otro momento pasado: Cuando llegué, la película ya había empezado. Si dijeras «empezó», entenderíamos que empezó después de tu llegada."
    ]
   }
  }
 },
 "b1d-linea-tiempo-antes-despues": {
  "exercises": {
   "replace": {
    "7": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Cambia la frase: el tren salió antes de tu llegada.",
     "source": "Cuando llegué a la estación, el tren salió.",
     "answer": "Cuando llegué a la estación, el tren ya había salido.",
     "altAnswers": [
      "Cuando llegué a la estación, el tren había salido.",
      "El tren ya había salido cuando llegué a la estación."
     ],
     "explanation": "Para decir que el tren salió ANTES de que llegaras, la acción anterior pasa al pluscuamperfecto (había salido). Con dos indefinidos parece que el tren esperó a verte llegar."
    },
    "18": {
     "type": "write",
     "prompt": "Ayer fue tu cumpleaños y tus amigos te prepararon una fiesta sorpresa. Escribe una entrada de diario: cuenta qué encontraste al llegar a casa y qué habían hecho tus amigos antes.",
     "minWords": 50,
     "maxWords": 90,
     "rubric": [
      "Al menos tres verbos en pluscuamperfecto (habían decorado…)",
      "Indefinido para lo que pasó cuando llegaste",
      "Ya con el pluscuamperfecto",
      "Al menos un participio irregular (puesto, hecho, escrito…)"
     ],
     "modelAnswer": "Querido diario: Ayer fue mi cumpleaños y fue increíble. Cuando abrí la puerta de casa, todos gritaron: «¡Sorpresa!». Mis amigos ya habían decorado el salón con globos y habían puesto música de los noventa. Marta había hecho una torta de chocolate y Luis había escrito una canción para mí. Mi hermano les había dado la llave por la mañana. Yo no había sospechado nada en todo el día. ¡Fue el mejor cumpleaños de mi vida!",
     "explanation": "El pluscuamperfecto cuenta lo que pasó antes de llegar (habían decorado, había hecho); el indefinido, lo que pasó en ese momento (abrí, gritaron). Puesto, hecho y escrito son participios irregulares."
    }
   }
  },
  "sections": {
   "0": {
    "body": [
     "Recuerda la regla: cuando cuentas dos acciones pasadas, la que ocurrió PRIMERO va en pluscuamperfecto (había, habías, había, habíamos, habían + participio) y la que ocurrió DESPUÉS va en indefinido.",
     "¿Por qué? El indefinido marca el momento de la historia («llegué»); el pluscuamperfecto mira hacia atrás desde ese momento, igual que el pretérito perfecto mira hacia atrás desde hoy. Ya subraya que la primera acción estaba terminada. El orden de las palabras no decide nada: decide la cronología real."
    ],
    "check": [
     {
      "type": "multiple-choice",
      "question": "1) Terminé la tarea. 2) Mi madre volvió. →",
      "options": [
       "Cuando mi madre volvió, yo ya había terminado la tarea.",
       "Cuando mi madre había vuelto, yo terminé.",
       "Cuando mi madre volvía, terminé.",
       "Mi madre volvió cuando terminaba."
      ],
      "correctIndex": 0,
      "explanation": "La acción que pasó primero (terminar) va en pluscuamperfecto; la segunda, que sirve de referencia, en indefinido. La segunda opción pone el pluscuamperfecto en la acción posterior, y las otras usan el imperfecto, que describe un fondo, no un orden."
     },
     {
      "type": "fill-blank",
      "prompt": "Completa con el pasado correcto.",
      "sentence": "Cuando encendí la tele, el partido ya ___. (terminar)",
      "answer": "había terminado",
      "explanation": "El partido terminó antes de encender la tele: la acción anterior va en pluscuamperfecto. «Terminó» diría que acabó justo después de encenderla."
     }
    ]
   },
   "1": {
    "check": [
     {
      "type": "multiple-choice",
      "question": "«Cuando entré en la cocina, mi hermano ya había lavado los platos.» ¿Qué pasó?",
      "options": [
       "Mi hermano lavó los platos y después entré yo.",
       "Mi hermano empezó a lavar cuando me vio.",
       "Lavamos los platos juntos.",
       "Mi hermano iba a lavar los platos más tarde."
      ],
      "correctIndex": 0,
      "explanation": "Había lavado es pluscuamperfecto: la acción estaba terminada antes del momento de referencia (entré). Para decir que empezó después haría falta un indefinido: «lavó los platos»."
     }
    ]
   }
  }
 },
 "b1d-circuito-tres-pasados": {
  "exercises": {
   "replace": {
    "15": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "I was nervous because I had never driven in the snow.",
     "answer": "Estaba nervioso porque nunca había manejado con nieve.",
     "altAnswers": [
      "Estaba nerviosa porque nunca había manejado con nieve.",
      "Estaba nervioso porque nunca había manejado en la nieve.",
      "Estaba nerviosa porque nunca había manejado en la nieve.",
      "Estaba nervioso porque nunca había conducido con nieve.",
      "Estaba nerviosa porque nunca había conducido con nieve.",
      "Estaba nervioso porque nunca había conducido en la nieve.",
      "Estaba nerviosa porque nunca había conducido en la nieve."
     ],
     "explanation": "Estado (estaba) en imperfecto; la causa anterior en pluscuamperfecto (había manejado)."
    }
   }
  }
 },
 "b1g-future-perfect": {
  "exercises": {
   "replace": {
    "4": {
     "type": "speak",
     "text": "¿Dónde habré puesto mis lentes? No las veo por ningún lado.",
     "prompt": "Dilo en español: \"Where could I have put my glasses? I can't see them anywhere\"",
     "altAnswers": [
      "¿Dónde habré dejado mis lentes? No las veo por ningún lado.",
      "¿Dónde habré puesto mis gafas? No las veo por ningún lado.",
      "¿Dónde habré dejado mis gafas? No las veo por ningún lado."
     ],
     "explanation": "Una forma de decirlo: «¿Dónde habré puesto mis lentes? No las veo por ningún lado». Pregunta que expresa duda sobre el pasado reciente: futuro perfecto. Poner → puesto (irregular)."
    }
   }
  },
  "sections": {
   "0": {
    "body": [
     "La idea: el futuro perfecto mira hacia atrás desde un punto del futuro. Igual que «he terminado» mira hacia atrás desde hoy, «habré terminado» mira hacia atrás desde el viernes, desde las ocho, desde junio: en ese momento la acción ya estará acabada. Por eso se forma con el futuro de haber + participio: habré, habrás, habrá, habremos, habrán + hablado / comido / vivido.",
     "Los participios irregulares son los mismos que en el pretérito perfecto: hecho, dicho, visto, escrito, puesto, vuelto, abierto, roto.",
     "Los pronombres van delante de haber: Ya lo habré hecho. Nunca entre haber y el participio."
    ],
    "check": [
     {
      "type": "fill-blank",
      "prompt": "¿Cómo se dicen en español las palabras en negrita?",
      "sentence": "Mañana a esta hora ya ___ en Roma.",
      "answer": "habremos aterrizado",
      "en": "Tomorrow at this time we [will have landed] in Rome.",
      "altAnswers": [
       "habremos llegado"
      ],
      "explanation": "Una acción terminada antes de un momento futuro (mañana a esta hora): futuro de haber + participio. «Aterrizaremos» no marca que la acción ya esté acabada."
     },
     {
      "type": "multiple-choice",
      "question": "«Antes de las ocho ___ la tarea.» (yo, hacer)",
      "options": [
       "habré hecho",
       "habré hacido",
       "he hecho",
       "haré hecho"
      ],
      "correctIndex": 0,
      "explanation": "Hacer tiene participio irregular (hecho), y el auxiliar va en futuro: habré. «Haré hecho» pone en futuro el verbo equivocado; «he hecho» es presente perfecto."
     }
    ]
   },
   "1": {
    "body": [
     "Usamos el futuro perfecto para una acción que estará acabada antes de otro momento del futuro. Suele ir con para + fecha, antes de, dentro de, cuando + subjuntivo o ya.",
     "Compara: El lunes termino el proyecto (el lunes es el día en que termino) / Para el lunes habré terminado el proyecto (el lunes ya estará acabado).",
     "Con para + un momento: Para las ocho, ya habré limpiado la casa."
    ],
    "examples": [
     {
      "es": "Dentro de un año habré aprendido a manejar.",
      "en": "In a year's time I'll have learned to drive."
     },
     {
      "es": "Para Navidad ya se habrán mudado.",
      "en": "By Christmas they'll have moved."
     },
     {
      "es": "Cuando te despiertes, ya habré salido.",
      "en": "When you wake up, I'll have already left."
     }
    ]
   },
   "2": {
    "examples": [
     {
      "es": "No encuentro las llaves. — Las habrás dejado en el carro.",
      "en": "I can't find my keys. — You've probably left them in the car."
     },
     {
      "es": "Juan no contesta. — Habrá salido.",
      "en": "Juan isn't answering. — He must have gone out."
     },
     {
      "es": "¿Quién habrá llamado a estas horas?",
      "en": "Who could have called at this hour?"
     }
    ]
   }
  }
 },
 "b1d-rep-perfecto-corrige": {
  "exercises": {
   "replace": {
    "10": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Corrige la frase.",
     "source": "Hace tres días he perdido el celular.",
     "answer": "Hace tres días perdí el celular.",
     "altAnswers": [
      "Perdí el celular hace tres días.",
      "Hace tres días perdí el móvil.",
      "Perdí el móvil hace tres días."
     ],
     "explanation": "«Hace tres días» señala un momento terminado → indefinido."
    },
    "20": {
     "type": "word-order",
     "prompt": "Ordena las palabras.",
     "words": [
      "El",
      "mes",
      "pasado",
      "vendimos",
      "el",
      "carro",
      "viejo"
     ],
     "translation": "Last month we sold the old car",
     "explanation": "«El mes pasado» → indefinido."
    }
   }
  }
 },
 "b1-vocabulary-practice-5": {
  "exercises": {
   "replace": {
    "10": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "It isn't worth buying such an expensive car.",
     "answer": "No vale la pena comprar un carro tan caro.",
     "altAnswers": [
      "No merece la pena comprar un carro tan caro.",
      "No vale la pena comprar un auto tan caro.",
      "No vale la pena comprar un coche tan caro.",
      "No merece la pena comprar un coche tan caro."
     ],
     "explanation": "Valer la pena + infinitivo = to be worth (doing)."
    }
   }
  },
  "sections": {
   "2": {
    "examples": [
     {
      "es": "Le debo mil euros al banco. → Tengo una deuda con el banco.",
      "en": "I owe the bank a thousand euros. → I have a debt with the bank."
     },
     {
      "es": "Mi prima me prestó su carro; yo se lo pedí prestado.",
      "en": "My cousin lent me her car; I borrowed it from her."
     }
    ],
    "check": [
     {
      "type": "multiple-choice",
      "question": "Tu hermano necesita un carro y tú le dejas el tuyo. ¿Qué dices?",
      "options": [
       "Le presto mi carro.",
       "Le pido prestado mi carro.",
       "Le debo mi carro.",
       "Le cobro mi carro."
      ],
      "correctIndex": 0,
      "explanation": "Dar algo que te van a devolver es prestar (to lend): le presto mi carro. «Pedir prestado» es pedirlo para ti (to borrow), «deber» es tener una deuda y «cobrar» es recibir dinero."
     }
    ]
   }
  }
 },
 "b1r-mission-if-then-plans": {
  "exercises": {
   "replace": {
    "16": {
     "type": "multiple-choice",
     "question": "Sales antes que tu compañero de departamento y le dejas una nota: «Si viene el técnico, ___ que vuelva el lunes.» (mandato de tú)",
     "options": [
      "dile",
      "le dirás",
      "le dices",
      "decirle"
     ],
     "correctIndex": 0,
     "explanation": "Una instrucción condicionada lleva mandato: dile (decir → di + le). «Le dirás» y «le dices» también pueden usarse como instrucción suave, pero aquí se pide el mandato de tú; «decirle» es infinitivo."
    }
   }
  },
  "sections": {
   "1": {
    "check": [
     {
      "type": "fill-blank",
      "prompt": "¿Cómo se dicen en español las palabras en negrita?",
      "sentence": "Si tienes hambre, ___ algo de el refrigerador.",
      "answer": "agarra",
      "altAnswers": [
       "toma",
       "saca",
       "coge"
      ],
      "en": "If you're hungry, [take] something from the fridge. (tú)",
      "explanation": "agarrar → agarra: affirmative command, tú. Mandato de tú: agarra (también toma). Ojo: coger es neutro en España, pero en México, Argentina y buena parte de Latinoamérica es vulgar; allí se dice tomar o agarrar."
     }
    ]
   }
  }
 },
 "b1r-dialogue-family-debate": {
  "exercises": {
   "replace": {
    "20": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "Mis padres están seguros de que el viaje en carro ___ más barato.",
     "answer": "es",
     "en": "My parents are sure that the car trip [is] cheaper.",
     "altAnswers": [
      "será",
      "va a ser"
     ],
     "explanation": "«Estar seguro de que» → indicativo, nunca «sea»."
    },
    "4": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "I'm sorry that you (ustedes) always argue.",
     "answer": "Siento que siempre discutan.",
     "altAnswers": [
      "Siento que discutan siempre.",
      "Lamento que siempre discutan.",
      "Siento que siempre discutáis."
     ],
     "explanation": "Sentir que + subjuntivo: discutan."
    },
    "8": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Transforma la frase en una queja con «Me molesta que...».",
     "source": "Siempre eligen ustedes.",
     "answer": "Me molesta que siempre elijan ustedes.",
     "altAnswers": [
      "Me molesta que ustedes siempre elijan.",
      "Me molesta que siempre elijáis vosotros."
     ],
     "explanation": "Una queja (me molesta que) pide subjuntivo: eligen → elijan (g → j delante de a)."
    }
   }
  },
  "sections": {
   "0": {
    "examples": [
     {
      "es": "Papá: Creo que la playa es mejor para los niños.",
      "en": "I think the beach is better for the kids."
     },
     {
      "es": "Mamá: No creo que haya sitio en ningún hotel.",
      "en": "I don't think there's room in any hotel."
     },
     {
      "es": "Hija: Quiero que vayamos a la montaña. Me molesta que siempre elijan ustedes.",
      "en": "I want us to go to the mountains. It bothers me that you always choose."
     },
     {
      "es": "Hijo: A mí me da igual, pero ojalá que tenga wifi.",
      "en": "I don't care, but I hope it has wifi."
     }
    ]
   }
  }
 },
 "b1r-story-past-before-past": {
  "exercises": {
   "replace": {
    "7": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Cambia la frase: el mayordomo se escondió antes de la llegada del detective.",
     "source": "Cuando llegó el detective, el mayordomo se escondió en el jardín.",
     "answer": "Cuando llegó el detective, el mayordomo ya se había escondido en el jardín.",
     "altAnswers": [
      "Cuando llegó el detective, el mayordomo se había escondido en el jardín.",
      "El mayordomo ya se había escondido en el jardín cuando llegó el detective.",
      "Cuando el detective llegó, el mayordomo ya se había escondido en el jardín."
     ],
     "explanation": "Si el mayordomo se escondió antes de la llegada, esa acción pasa al pluscuamperfecto, con el pronombre delante de había: se había escondido."
    },
    "11": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "Later we found out that my brother had taken the car.",
     "answer": "Luego descubrimos que mi hermano se había llevado el carro.",
     "altAnswers": [
      "Después descubrimos que mi hermano se había llevado el carro.",
      "Luego descubrimos que mi hermano había cogido el carro.",
      "Luego descubrimos que mi hermano había tomado el carro.",
      "Después descubrimos que mi hermano había cogido el carro.",
      "Luego descubrimos que mi hermano se había llevado el coche.",
      "Después descubrimos que mi hermano se había llevado el coche.",
      "Luego descubrimos que mi hermano había cogido el coche.",
      "Después descubrimos que mi hermano había cogido el coche."
     ],
     "explanation": "Descubrimos (indefinido) y lo anterior (se había llevado) en pluscuamperfecto."
    },
    "13": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "The teacher was angry because nobody had done the homework.",
     "answer": "El profesor estaba enojado porque nadie había hecho la tarea.",
     "altAnswers": [
      "La profesora estaba enojada porque nadie había hecho la tarea.",
      "El profesor estaba enfadado porque nadie había hecho los deberes.",
      "El profesor estaba enfadado porque nadie había hecho la tarea.",
      "La profesora estaba enfadada porque nadie había hecho los deberes."
     ],
     "explanation": "La causa es anterior al enfado: había hecho."
    }
   }
  }
 },
 "b1d-rep-pluscuamperfecto-dictado": {
  "exercises": {
   "replace": {
    "15": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Corrige la frase.",
     "source": "Ella nunca había manejada por la izquierda.",
     "answer": "Ella nunca había manejado por la izquierda.",
     "altAnswers": [
      "Ella nunca había conducido por la izquierda."
     ],
     "explanation": "Con «haber» el participio no cambia: siempre «manejado», aunque el sujeto sea femenino."
    }
   }
  },
  "sections": {
   "1": {
    "body": [
     "Recuerda la regla: el pluscuamperfecto (había, habías, había, habíamos, habían + participio) sitúa una experiencia antes de un momento del pasado. Por eso «nunca había…» cuenta que algo pasó por primera vez entonces: hasta ese día (el momento pasado), nunca había visto el mar (todo lo anterior).",
     "Solo cambia «haber»; el participio es invariable (-ado, -ido) y los irregulares son los de siempre: visto, hecho, dicho, escrito, puesto, vuelto, roto, abierto. Los pronombres van delante de «había»: nunca me había reído tanto."
    ]
   }
  }
 },
 "b1d-rep-mezcla-dictado": {
  "exercises": {
   "replace": {
    "17": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "They sell second-hand cars here; ask the owner. (usted)",
     "answer": "Aquí venden carros de segunda mano; pregunte al dueño.",
     "altAnswers": [
      "Aquí venden carros de segunda mano; pregúntele al dueño.",
      "Venden carros de segunda mano aquí; pregunte al dueño.",
      "Aquí venden autos de segunda mano; pregunte al dueño.",
      "Aquí venden coches de segunda mano; pregunte al dueño.",
      "Aquí venden coches de segunda mano; pregúntele al dueño."
     ],
     "explanation": "Venden (sin decir quién) + mandato de usted: pregunte."
    },
    "20": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "The friend I lent my car to hasn't returned it to me.",
     "answer": "El amigo al que le presté el carro no me lo ha devuelto.",
     "altAnswers": [
      "El amigo a quien le presté el carro no me lo ha devuelto.",
      "El amigo al que presté el carro no me lo ha devuelto.",
      "El amigo a quien presté el carro no me lo ha devuelto.",
      "El amigo al que le presté el coche no me lo ha devuelto.",
      "El amigo a quien le presté el coche no me lo ha devuelto.",
      "El amigo al que presté el coche no me lo ha devuelto.",
      "El amigo a quien presté el coche no me lo ha devuelto."
     ],
     "explanation": "Relativo «al que» + «me lo» con perfecto."
    },
    "1": {
     "type": "dictation",
     "audio": "Aquí venden los mejores churros de la ciudad.",
     "explanation": "Venden (ellos, sin decir quién): así se habla de lo que ofrece una tienda."
    }
   }
  }
 },
 "b1r-tema-reunion-familiar": {
  "exercises": {
   "replace": {
    "20": {
     "type": "write",
     "prompt": "Organizas una gran reunión familiar en el pueblo. Escribe un correo a tu primo, que hace años que no viene, para convencerlo. Usa mandatos irregulares de tú y «hace… que» para hablar del tiempo sin verse.",
     "minWords": 50,
     "maxWords": 90,
     "rubric": [
      "Al menos cuatro mandatos irregulares de tú (ven, ten, haz, di, pon…)",
      "Al menos un mandato negativo (no te preocupes, no digas…)",
      "Hace + tiempo + que para hablar del pasado",
      "Saludo y despedida cariñosos"
     ],
     "modelAnswer": "¡Hola, Rubén! ¿Cómo estás? El 15 de agosto hacemos una comida en el pueblo con toda la familia. Hace cinco años que no vienes, así que esta vez ven, por favor. Ten en cuenta que la abuela cumple noventa años. Haz un hueco en tu agenda y diles a tus hijos que traigan el bañador, porque hay piscina. No te preocupes por el tío Paco: ya no está enojado contigo. Pon la fecha en el calendario. ¡Un abrazo enorme! Lucía",
     "explanation": "Ocho mandatos de tú son irregulares: ven, ten, haz, di, pon, sal, sé, ve. Con pronombre se pegan (diles), y el negativo usa el subjuntivo: no te preocupes."
    },
    "4": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "I hope you (ustedes) stay a few more days.",
     "answer": "Espero que se queden unos días más.",
     "altAnswers": [
      "Ojalá que se queden unos días más.",
      "Ojalá se queden unos días más.",
      "Espero que os quedéis unos días más.",
      "Ojalá que os quedéis unos días más."
     ],
     "explanation": "Esperar que + subjuntivo: se queden."
    },
    "19": {
     "type": "speak",
     "prompt": "Respond aloud: greet a cousin you haven't seen in years. Say what a joy it is to see her and that she hasn't changed at all.",
     "text": "¡Qué alegría verte! No has cambiado nada.",
     "altAnswers": [
      "¡Qué alegría verte! No cambiaste nada.",
      "Qué alegría verte, no has cambiado nada."
     ],
     "explanation": "«¡Qué alegría verte!» saluda con emoción; «no has cambiado» es un cambio medido hasta hoy → pretérito perfecto."
    }
   }
  }
 },
 "b1d-preguntas-opiniones": {
  "exercises": {
   "replace": {
    "5": {
     "type": "multiple-choice",
     "question": "«—¿Crees que Marta está enojada? —Sí, creo que ___.»",
     "options": [
      "está enojada",
      "esté enojada",
      "estar enojada",
      "estaría enojada"
     ],
     "correctIndex": 0,
     "explanation": "«Creo que» en afirmativo expresa certeza y lleva indicativo: creo que está enojada. «Esté» sería para «no creo que», «estar» es infinitivo y «estaría» es condicional."
    },
    "11": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Corrige la respuesta.",
     "source": "—No, no creo que podemos estacionar aquí.",
     "answer": "—No, no creo que podamos estacionar aquí.",
     "altAnswers": [
      "—No creo que podamos estacionar aquí.",
      "—No, no creo que podamos aparcar aquí.",
      "—No creo que podamos aparcar aquí."
     ],
     "explanation": "«No creo que» + subjuntivo: podamos, no «podemos»."
    }
   }
  }
 },
 "b1r-tema-decisiones-dificiles": {
  "sections": {
   "0": {
    "check": [
     {
      "type": "fill-blank",
      "prompt": "Completa.",
      "sentence": "Yo que tú, ___ la mochila más ligera. (llevar)",
      "answer": "llevaría",
      "explanation": "«Yo que tú» introduce un consejo imaginado: condicional, «llevaría»."
     },
     {
      "type": "translate",
      "direction": "en-es",
      "prompt": "Cambia la frase para hablar a ustedes (es mejor que…).",
      "source": "Es mejor descansar un rato.",
      "answer": "Es mejor que descansen un rato.",
      "explanation": "Cuando la valoración se refiere a otras personas (ustedes), el infinitivo pasa a que + subjuntivo: «descansen»."
     }
    ]
   }
  },
  "exercises": {
   "replace": {
    "1": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "Me alegro de que ___ la decisión correcta.",
     "answer": "tomes",
     "en": "I'm glad you['re making] the right decision. (tú)",
     "explanation": "tomar → tomes: present subjunctive, tú (after 'me alegro de que'). Alegrarse de que + subjuntivo."
    },
    "4": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Corrige la frase.",
     "source": "Es mejor que bajamos antes de la noche.",
     "answer": "Es mejor que bajemos antes de la noche.",
     "explanation": "«Es mejor que» es una valoración: subjuntivo, «bajemos»."
    }
   }
  }
 },
 "b1r-tema-conducir": {
  "exercises": {
   "replace": {
    "0": {
     "type": "speak",
     "text": "Si apruebas el examen, te regalaré el carro viejo.",
     "prompt": "Dilo en español: \"If you pass the exam, I'll give you the old car\"",
     "explanation": "Una forma de decirlo: «Si apruebas el examen, te regalaré el carro viejo». aprobar → apruebas: present indicative, tú (after 'si'). En una condición real, si va con presente de indicativo (apruebas, con o → ue); el futuro va en la otra parte (regalaré).",
     "altAnswers": [
      "Si apruebas el examen, te regalaré el coche viejo."
     ]
    },
    "3": {
     "type": "matching",
     "instructions": "Relaciona cada señal con su significado.",
     "pairs": [
      {
       "left": "Ceda el paso",
       "right": "Yield"
      },
      {
       "left": "Prohibido estacionar",
       "right": "No parking"
      },
      {
       "left": "Dirección prohibida",
       "right": "Do not enter"
      },
      {
       "left": "Obras",
       "right": "Road work"
      }
     ],
     "explanation": "Las señales usan formas fijas: ceda el paso es un mandato de usted, y prohibido + infinitivo indica lo que no se puede hacer."
    },
    "4": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "I'd drive more slowly if I were you.",
     "answer": "Yo que tú, conduciría más despacio.",
     "altAnswers": [
      "Yo en tu lugar, conduciría más despacio.",
      "Yo que tú, manejaría más despacio."
     ],
     "explanation": "«If I were you» = yo que tú + condicional; manejar es irregular en presente (manejo) y en indefinido (conduje), pero regular en el condicional: conduciría."
    },
    "5": {
     "type": "word-order",
     "prompt": "Ordena las palabras.",
     "words": [
      "Nunca",
      "había",
      "manejado",
      "de",
      "noche",
      "hasta",
      "aquel",
      "día."
     ],
     "translation": "I had never driven at night until that day.",
     "explanation": "Hasta aquel día es un límite pasado: nunca + pluscuamperfecto (había manejado)."
    },
    "7": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Corrige la frase.",
     "source": "Si lloverá, maneja despacio.",
     "answer": "Si llueve, maneja despacio.",
     "altAnswers": [
      "Si llueve, conduce despacio."
     ],
     "explanation": "Tras si, en una condición real, va presente de indicativo: llueve. El futuro (lloverá) nunca va después de este si."
    },
    "11": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "Si ___ cansado, para el carro.",
     "answer": "estás",
     "en": "If you['re] tired, stop the car. (tú)",
     "explanation": "Con «si» real, presente de indicativo (estás), nunca subjuntivo (estés) ni futuro."
    },
    "15": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Corrige la frase.",
     "source": "No aparcas aquí; está prohibido.",
     "answer": "No aparques aquí; está prohibido.",
     "altAnswers": [
      "No aparques aquí, está prohibido."
     ],
     "explanation": "El negativo de tú es el subjuntivo; «estacionar» cambia c → qu delante de e: «no aparques»."
    },
    "19": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "It worries me that you drive at night. (tú)",
     "answer": "Me preocupa que conduzcas de noche.",
     "altAnswers": [
      "Me preocupa que manejes de noche.",
      "Me preocupa que conduzcas por la noche.",
      "Me preocupa que manejes por la noche."
     ],
     "explanation": "Preocupación + que → subjuntivo, que sale de manejo: «conduzcas»."
    },
    "20": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "Me pone nervioso que los otros carros ___ tan cerca.",
     "answer": "vayan",
     "en": "It makes me nervous that the other cars [go] so close.",
     "explanation": "Emoción + que → subjuntivo de «ir», irregular: «vayan»."
    },
    "22": {
     "type": "word-order",
     "prompt": "Ordena las palabras.",
     "words": [
      "Si",
      "hay",
      "niebla,",
      "maneja",
      "más",
      "despacio"
     ],
     "translation": "If there's fog, drive more slowly (tú)",
     "explanation": "Si + presente (hay) y luego un imperativo de tú (maneja, forma él del presente)."
    }
   }
  },
  "sections": {
   "0": {
    "check": [
     {
      "type": "fill-blank",
      "prompt": "¿Cómo se dicen en español las palabras en negrita?",
      "sentence": "___ el cinturón antes de arrancar.",
      "answer": "Ponte",
      "en": "[Put on] your seat belt before starting the car. (tú)",
      "explanation": "ponerse → ponte: affirmative command, tú. Poner tiene mandato irregular de tú (pon) y el pronombre se pega detrás en el afirmativo: ponte."
     },
     {
      "type": "fill-blank",
      "prompt": "¿Cómo se dicen en español las palabras en negrita?",
      "sentence": "No ___ el celular mientras manejas.",
      "answer": "uses",
      "en": "[Don't use] your phone while you drive. (tú)",
      "explanation": "usar → no uses: negative command, tú. El negativo de tú es el subjuntivo: no uses (-ar → -e), no «no usas»."
     }
    ]
   }
  }
 },
 "si-clauses-drill-2": {
  "exercises": {
   "replace": {
    "13": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "If it's okay with you, we'll meet at seven.",
     "answer": "Si te parece bien, nos vemos a las siete.",
     "altAnswers": [
      "Si te parece bien, quedaremos a las siete.",
      "Si te parece bien, quedamos a las siete."
     ],
     "explanation": "Expresión fija «si te parece bien»."
    }
   }
  }
 },
 "b1r-tema-rechazo": {
  "exercises": {
   "replace": {
    "2": {
     "type": "multiple-choice",
     "question": "«It's a shame they don't publish your story.»",
     "options": [
      "Es una pena que no publiquen tu cuento.",
      "Es una pena que no publican tu cuento.",
      "Es una pena que no publicarán tu cuento.",
      "Es una pena de que no publiquen tu cuento."
     ],
     "correctIndex": 0,
     "explanation": "«Es una pena que» pide subjuntivo: publiquen. «Publican» y «publicarán» son indicativo, y en «es una pena de que» sobra la «de»."
    },
    "4": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "Many famous writers received rejections before they succeeded.",
     "answer": "Muchos escritores famosos recibieron rechazos antes de tener éxito.",
     "altAnswers": [
      "Muchos escritores famosos recibieron rechazos antes de triunfar.",
      "Muchos escritores famosos recibieron muchos rechazos antes de tener éxito."
     ],
     "explanation": "Mismo sujeto (los escritores): antes de + infinitivo, tener éxito."
    }
   }
  }
 }
};
