// Synced from cheneygross-afk/lengo:src/lib/lessons/es-redesign/b2-unit1-latam.ts by scripts/sync-content.mjs -- edit it there, not here.
// Generated: Latin American wording for B2 Unit 1. B2_UNIT1_LATAM adds
// accepted answers (papás, mamá, carro, auto, lindo) next to the Spain
// wording; B2_UNIT1_SWAP makes the Latin American word the main one where the
// lesson showed the Spain word (carro, departamento, refrigerador, celular,
// la tarea), keeping the Spain answer accepted, writes the letter to the
// Three Kings with ustedes (vosotros still accepted), and replaces items that
// need the triggers of B2 Unit 2 (es importante que, es posible que, no creo
// que, dudo que, me encanta que) with wishes. Content only.
import type { LessonPatch } from "./patch";
export const B2_UNIT1_LATAM: Record<string, { alts?: Record<number, string[]>; checkAlts?: Record<number, Record<number, string[]>> }> = {
 "b1d-patron-subjuntivo-ar": {
  "alts": {
   "1": [
    "Mi mamá quiere que tú cantes en la boda."
   ],
   "11": [
    "El médico quiere que mi papá deje de fumar.",
    "La médica quiere que mi papá deje de fumar."
   ],
   "22": [
    "Mis papás quieren que estudiemos más."
   ]
  }
 },
 "b1d-circuito-irregulares-seis": {
  "alts": {
   "11": [
    "Mis papás quieren que vaya con ellos."
   ]
  }
 },
 "b1d-cadena-persona-subjuntivo": {
  "alts": {
   "7": [
    "Mis papás quieren que estemos en casa temprano.",
    "Mis papás quieren que estemos en casa pronto."
   ],
   "26": [
    "Mis papás quieren que estemos en casa temprano.",
    "Mis papás quieren que estemos en casa pronto."
   ]
  }
 },
 "b1d-rep-formacion-yo-raiz": {
  "alts": {
   "15": [
    "Mi mamá quiere que digamos gracias."
   ],
   "18": [
    "Mi hermana quiere que conduzca su auto.",
    "Mi hermana quiere que yo conduzca su auto."
   ]
  }
 },
 "b1d-rep-formacion-irregulares-seis": {
  "alts": {
   "15": [
    "Ojalá que mis papás estén bien.",
    "Ojalá mis papás estén bien."
   ],
   "17": [
    "Ojalá que haya comida rica en tu viaje y que el hotel sea lindo."
   ]
  }
 },
 "b1-common-words-crime": {
  "alts": {
   "9": [
    "Me di un golpe en la cabeza con la puerta del auto."
   ]
  }
 },
 "b1r-mission-childs-wish-list": {
  "alts": {
   "7": [
    "Quiero que mis papás me dejen tener un perro."
   ],
   "16": [
    "Quiero que mi hermana menor deje de llorar en la noche."
   ],
   "20": [
    "Ojalá que mis papás no discutan más.",
    "Ojalá mis papás no discutan más.",
    "Espero que mis papás no discutan más.",
    "Ojalá que mis papás ya no discutan.",
    "Ojalá mis papás ya no discutan.",
    "Espero que mis papás ya no discutan."
   ]
  }
 },
 "b1d-dictado-deseos-familia": {
  "alts": {
   "6": [
    "Mi mamá quiere que la llamemos."
   ],
   "7": [
    "Mi papá quiere que no le contemos la verdad."
   ],
   "18": [
    "Mis papás prefieren que no les compre nada."
   ],
   "21": [
    "Mis papás quieren que cenemos juntos todos los viernes.",
    "Mis papás quieren que cenemos juntos cada viernes."
   ],
   "27": [
    "Mis papás prefieren que no les regale nada."
   ]
  }
 },
 "b1d-patron-subjuntivo-er-ir": {
  "alts": {
   "18": [
    "Mis papás quieren que conozca a sus nuevos vecinos.",
    "Mis papás quieren que conozca a sus vecinos nuevos."
   ]
  }
 },
 "b1d-rep-deseo-consejos-amiga": {
  "alts": {
   "10": [
    "Mis padres me prohíben que salga solo en la noche.",
    "Mis papás me prohíben que salga solo por la noche.",
    "Mis papás me prohíben que salga solo en la noche.",
    "Mis padres me prohíben que salga sola en la noche.",
    "Mis papás me prohíben que salga sola por la noche.",
    "Mis papás me prohíben que salga sola en la noche.",
    "Mis padres me prohíben salir solo en la noche.",
    "Mis papás me prohíben salir solo por la noche.",
    "Mis papás me prohíben salir solo en la noche."
   ]
  }
 }
};

export const B2_UNIT1_SWAP: Record<string, LessonPatch> = {
 "present-subjunctive-formation-1": {
  "exercises": {
   "replace": {
    "2": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Corrige la frase.",
     "source": "Quiero que estudiamos todos los días.",
     "answer": "Quiero que estudiemos todos los días.",
     "altAnswers": [
      "Quiero que estudiemos cada día."
     ],
     "explanation": "«Quiero que» + otra persona pide subjuntivo: estudiar → estudiemos (-ar toma -e). «Estudiamos» es indicativo."
    },
    "3": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "Espero que ella no ___ tarde esta noche.",
     "answer": "vuelva",
     "en": "I hope she doesn't [come back] late tonight.",
     "explanation": "Volver cambia o → ue también en el subjuntivo: vuelva."
    }
   }
  },
  "sections": {
   "1": {
    "check": [
     {
      "type": "fill-blank",
      "prompt": "¿Cómo se dicen en español las palabras en negrita?",
      "sentence": "Espero que tú ___ la carta pronto.",
      "answer": "escribas",
      "en": "I hope you [write] the letter soon. (tú)",
      "explanation": "escribir → escribas: present subjunctive, tú. Escribir sigue el patrón regular: escribo → escrib- → escriba, escribas, escriba…"
     },
     {
      "type": "fill-blank",
      "prompt": "Conjuga el verbo en subjuntivo.",
      "sentence": "Espero que ella ___ (traer) el postre.",
      "answer": "traiga",
      "explanation": "La forma yo es traigo, así que el subjuntivo conserva -ig-: traig- + -a = traiga. «Traya» no existe."
     }
    ]
   }
  }
 },
 "present-subjunctive-formation-1-part-2": {
  "exercises": {
   "replace": {
    "7": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Cambia «Sé que» por «Espero que».",
     "source": "Sé que el jefe sabe la verdad.",
     "answer": "Espero que el jefe sepa la verdad.",
     "altAnswers": [
      "Espero que la jefa sepa la verdad."
     ],
     "explanation": "«Sé que» afirma un hecho (indicativo); «espero que» presenta un deseo (subjuntivo). Saber → sepa, uno de los seis irregulares."
    }
   }
  }
 },
 "b1d-patron-subjuntivo-ar": {
  "exercises": {
   "replace": {
    "19": {
     "type": "speak",
     "prompt": "Tu compañero de departamento pone la música muy alta. Dile en voz alta que quieres que la baje.",
     "text": "Quiero que bajes la música, por favor.",
     "explanation": "Quiero que + otro sujeto (tú) → subjuntivo: bajar → bajes."
    }
   }
  }
 },
 "b1r-transform-indicative-subjunctive": {
  "exercises": {
   "replace": {
    "13": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Corrige la frase.",
     "source": "Quiero que el niño escoga un libro.",
     "answer": "Quiero que el niño escoja un libro.",
     "altAnswers": [
      "Quiero que el niño elija un libro."
     ],
     "explanation": "Escoger: delante de a, la g se escribe j para conservar el sonido: escoja."
    }
   }
  }
 },
 "b1d-circuito-irregulares-seis": {
  "exercises": {
   "replace": {
    "1": {
     "type": "speak",
     "text": "Quiero que todos sepan la respuesta.",
     "prompt": "Dilo en español: \"I want everyone to know the answer\"",
     "explanation": "Una forma de decirlo: «Quiero que todos sepan la respuesta». saber → sepan: present subjunctive, ellos. Saber → sepa + -n: sepan."
    },
    "9": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Corrige la frase.",
     "source": "Espero que hay leche en el refrigerador.",
     "answer": "Espero que haya leche en el refrigerador.",
     "altAnswers": [
      "Espero que haya leche en la heladera.",
      "Espero que haya leche en el frigorífico.",
      "Espero que haya leche en la nevera."
     ],
     "explanation": "«Espero que» pide subjuntivo: hay → haya."
    },
    "10": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Corrige la frase.",
     "source": "Espero que sabamos la dirección.",
     "answer": "Espero que sepamos la dirección.",
     "explanation": "Saber es irregular: sep- + -amos = sepamos. «Sabamos» aplica la receta a un verbo que no la sigue."
    },
    "15": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Corrige la frase.",
     "source": "Prefiero que vamos en tren.",
     "answer": "Prefiero que vayamos en tren.",
     "explanation": "«Prefiero que» + otra persona pide subjuntivo: ir → vayamos. «Vamos» es indicativo."
    }
   }
  },
  "sections": {
   "0": {
    "check": [
     {
      "type": "fill-blank",
      "prompt": "¿Cómo se dicen en español las palabras en negrita?",
      "sentence": "Espero que no ___ nada grave.",
      "answer": "sea",
      "en": "I hope it [isn't] anything serious.",
      "explanation": "ser → sea: present subjunctive, él (after 'espero que'). Ser es irregular porque soy no acaba en -o: sea."
     },
     {
      "type": "multiple-choice",
      "question": "«Prefiero que nosotros ___ en metro.» (ir)",
      "options": [
       "vayamos",
       "vamos",
       "vaymos",
       "vayámos"
      ],
      "correctIndex": 0,
      "explanation": "Ir → vaya, y nosotros añade la terminación normal: vayamos. «Vamos» es indicativo, «vaymos» pierde la a y «vayámos» lleva una tilde que no existe."
     }
    ]
   }
  }
 },
 "b1d-rep-formacion-yo-raiz": {
  "exercises": {
   "replace": {
    "15": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Corrige la frase.",
     "source": "Mi madre quiere que decimos gracias.",
     "answer": "Mi madre quiere que digamos gracias.",
     "explanation": "«Quiere que» pide subjuntivo, y decir parte de digo: digamos."
    },
    "18": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Corrige la frase.",
     "source": "Mi hermana quiere que conduzco su carro.",
     "answer": "Mi hermana quiere que conduzca su carro.",
     "altAnswers": [
      "Mi hermana quiere que yo conduzca su carro.",
      "Mi hermana quiere que maneje su carro.",
      "Mi hermana quiere que conduzca su coche.",
      "Mi hermana quiere que yo conduzca su coche."
     ],
     "explanation": "Lo que quiere otra persona va en subjuntivo: desde conduzco, conduzca. «Conduzco» es indicativo."
    },
    "26": {
     "type": "speak",
     "text": "Quiero que conozcas a mi familia.",
     "prompt": "Dilo en español: \"I want you to meet my family\"",
     "explanation": "Una forma de decirlo: «Quiero que conozcas a mi familia». conozco → conozcas"
    }
   }
  },
  "sections": {
   "0": {
    "examples": [
     {
      "es": "Quiero que salgas conmigo.",
      "en": "I want you to go out with me. (salgo → salgas)"
     },
     {
      "es": "Quiero que conozcas a mi familia.",
      "en": "I want you to meet my family. (conozco → conozcas)"
     },
     {
      "es": "Ojalá que no destruyan el parque.",
      "en": "Hopefully they don't destroy the park. (destruyo → destruyan)"
     }
    ]
   }
  }
 },
 "b1d-rep-formacion-irregulares-seis": {
  "exercises": {
   "replace": {
    "0": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "Quiero que ___ a la reunión.",
     "answer": "vayamos",
     "en": "I want us [to go] to the meeting.",
     "explanation": "ir → vayamos: present subjunctive, nosotros (after 'quiero que'). Ir → vaya + -mos: vayamos."
    },
    "1": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "Espero que no ___ tan difícil.",
     "answer": "sea",
     "en": "I hope it [isn't] that difficult.",
     "explanation": "ser → sea: present subjunctive (after 'espero que'). «Espero que» pide subjuntivo; ser → sea."
    },
    "4": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "Espero que ellos ___ nadar.",
     "answer": "sepan",
     "en": "I hope they [know how to] swim.",
     "explanation": "saber → sepan: present subjunctive, ellos (after 'espero que'). «Espero que» pide subjuntivo; saber → sepan."
    },
    "5": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "Espero que ustedes ___ todos juntos en casa.",
     "answer": "estén",
     "en": "I hope you all [are] together at home.",
     "explanation": "estar → estén: present subjunctive, ustedes (after 'espero que'). Un deseo pide subjuntivo; estar → estén, con tilde.",
     "altAnswers": [
      "estéis"
     ]
    },
    "9": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Corrige la frase.",
     "source": "Espero que no hay tráfico.",
     "answer": "Espero que no haya tráfico.",
     "explanation": "«Espero que» pide subjuntivo: hay → haya."
    },
    "20": {
     "type": "speak",
     "text": "Espero que sepa la respuesta.",
     "prompt": "Dilo en español: \"I hope he knows the answer\"",
     "explanation": "Una forma de decirlo: «Espero que sepa la respuesta». saber → sepa"
    }
   }
  },
  "sections": {
   "0": {
    "examples": [
     {
      "es": "Ojalá haya sitio en el tren.",
      "en": "I hope there's room on the train. (haber → haya)"
     },
     {
      "es": "Espero que sepa la respuesta.",
      "en": "I hope he knows the answer. (saber → sepa)"
     },
     {
      "es": "Quieren que les demos una respuesta.",
      "en": "They want us to give them an answer. (demos: no accent)"
     }
    ]
   }
  }
 },
 "b1-common-words-crime": {
  "exercises": {
   "replace": {
    "4": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Cambia al plural.",
     "source": "El arma estaba en el carro.",
     "answer": "Las armas estaban en el carro.",
     "altAnswers": [
      "Las armas estaban en el auto.",
      "Las armas estaban en el coche."
     ],
     "explanation": "En plural, «arma» recupera el artículo femenino: el arma → las armas. El verbo también pasa a plural."
    },
    "5": {
     "type": "fill-blank",
     "prompt": "Completa con la expresión que significa «suddenly».",
     "sentence": "De ___, el carro se paró en medio de la calle.",
     "answer": "golpe",
     "explanation": "De golpe = suddenly, como un golpe que llega sin avisar."
    },
    "9": {
     "type": "speak",
     "text": "Me di un golpe en la cabeza con la puerta del carro.",
     "prompt": "Dilo en español: \"I banged my head on the car door\"",
     "explanation": "Una forma de decirlo: «Me di un golpe en la cabeza con la puerta del carro». Otra forma correcta también vale: comprueba primero el significado y después la pronunciación.",
     "altAnswers": [
      "Me di un golpe en la cabeza con la puerta del coche."
     ]
    }
   }
  },
  "sections": {
   "2": {
    "examples": [
     {
      "es": "Me di un golpe en la cabeza con la puerta del carro.",
      "en": "I banged my head on the car door."
     },
     {
      "es": "De golpe, se apagaron todas las luces.",
      "en": "Suddenly, all the lights went out."
     },
     {
      "es": "Hubo una pelea en la puerta del bar y llegó la policía.",
      "en": "There was a fight outside the bar and the police came."
     },
     {
      "es": "Mi hermano siempre hace trampa cuando jugamos a las cartas.",
      "en": "My brother always cheats when we play cards."
     },
     {
      "es": "El testigo desapareció la noche del crimen.",
      "en": "The witness disappeared on the night of the crime."
     },
     {
      "es": "Mi bicicleta desapareció de la puerta de casa.",
      "en": "My bike disappeared from outside my house."
     },
     {
      "es": "Sé que estás mintiendo: tu historia no tiene sentido.",
      "en": "I know you're lying: your story doesn't make sense."
     }
    ]
   }
  }
 },
 "b1-common-words-crime-part-2": {
  "sections": {
   "0": {
    "examples": [
     {
      "es": "La policía investiga el crimen desde el lunes.",
      "en": "The police have been investigating the crime since Monday."
     },
     {
      "es": "El ataque ocurrió de noche, cuando la calle estaba vacía.",
      "en": "The attack happened at night, when the street was empty."
     },
     {
      "es": "Me di un golpe en la cabeza con la puerta del carro.",
      "en": "I banged my head on the car door."
     }
    ]
   }
  }
 },
 "b1r-mission-childs-wish-list": {
  "exercises": {
   "replace": {
    "0": {
     "type": "speak",
     "text": "Les pido que den un regalo a los niños que no tienen nada.",
     "prompt": "Dilo en español: \"I ask you to give a present to the children who have nothing\"",
     "explanation": "Una forma de decirlo: «Les pido que den un regalo a los niños que no tienen nada». dar → den: present subjunctive, ustedes (after 'les pido que'). Pedir que + subjuntivo; dar → den.",
     "altAnswers": [
      "Os pido que deis un regalo a los niños que no tienen nada."
     ]
    },
    "2": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "Prefiero que no me ___ ropa.",
     "answer": "traigan",
     "en": "I'd rather you [didn't bring] me clothes. (ustedes)",
     "explanation": "traer → traigan: present subjunctive, ustedes (after 'prefiero que'). Traer → traigan.",
     "altAnswers": [
      "traigáis"
     ]
    },
    "4": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "I want you (ustedes) to bring me a book.",
     "answer": "Quiero que me traigan un libro.",
     "altAnswers": [
      "Quiero que me traigan un libro, por favor.",
      "Quiero que me traigáis un libro.",
      "Quiero que me traigáis un libro, por favor."
     ],
     "explanation": "Querer que + subjuntivo de ustedes."
    },
    "5": {
     "type": "word-order",
     "prompt": "Ordena las palabras.",
     "words": [
      "Espero",
      "que",
      "este",
      "año",
      "me",
      "traigan",
      "muchos",
      "juegos."
     ],
     "translation": "I hope you bring me lots of games this year.",
     "explanation": "Esperar que + subjuntivo."
    },
    "6": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Pide el regalo a los Reyes con «Quiero que me traigan...».",
     "source": "Quiero un patinete.",
     "answer": "Quiero que me traigan un patinete.",
     "altAnswers": [
      "Les pido que me traigan un patinete.",
      "Quiero que me traigáis un patinete.",
      "Os pido que me traigáis un patinete."
     ],
     "explanation": "Querer que + otra persona: subjuntivo. Traer toma la raíz de traigo: traigan."
    },
    "8": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Corrige la carta de Pablo.",
     "source": "«Queridos Reyes: quiero que me traen un tren y que mi hermano no recibe carbón.»",
     "answer": "Queridos Reyes: quiero que me traigan un tren y que mi hermano no reciba carbón.",
     "explanation": "Querer que pide subjuntivo en las dos partes: traigan (de traigo) y reciba.",
     "altAnswers": [
      "Queridos Reyes: quiero que me traigáis un tren y que mi hermano no reciba carbón."
     ]
    },
    "9": {
     "type": "multiple-choice",
     "question": "Lucía quiere que nieve, pero los Reyes no pueden hacer nevar. ¿Qué escribe?",
     "options": [
      "Ojalá que nieve en Navidad.",
      "Quiero que nieven en Navidad.",
      "Ojalá que nieva en Navidad.",
      "Les pido que nieve en Navidad."
     ],
     "correctIndex": 0,
     "explanation": "Para un deseo que no depende de nadie se usa ojalá + subjuntivo (nieve). «Nieva» es indicativo; pedírselo a los Reyes no tiene sentido porque ellos no controlan el tiempo."
    },
    "13": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "I want you to bring my brother a ball too. (ustedes)",
     "answer": "Quiero que a mi hermano también le traigan un balón.",
     "altAnswers": [
      "Quiero que también le traigan un balón a mi hermano.",
      "Quiero que le traigan también un balón a mi hermano.",
      "Quiero que también le traigan una pelota a mi hermano.",
      "Quiero que a mi hermano también le traigan una pelota.",
      "Quiero que le traigan un balón a mi hermano también.",
      "Quiero que a mi hermano también le traigáis un balón.",
      "Quiero que también le traigáis un balón a mi hermano.",
      "Quiero que le traigáis también un balón a mi hermano.",
      "Quiero que también le traigáis una pelota a mi hermano.",
      "Quiero que a mi hermano también le traigáis una pelota.",
      "Quiero que le traigáis un balón a mi hermano también."
     ],
     "explanation": "Querer que + subjuntivo de ustedes: «traigan»."
    },
    "17": {
     "type": "word-order",
     "prompt": "Ordena las palabras.",
     "words": [
      "Espero",
      "que",
      "no",
      "se",
      "pierdan",
      "de",
      "camino",
      "a",
      "mi",
      "casa"
     ],
     "translation": "I hope you don't get lost on the way to my house (ustedes)",
     "explanation": "«Perderse» cambia e → ie también en el subjuntivo: se pierdan."
    },
    "18": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "Les pido que no le ___ carbón a mi primo.",
     "answer": "dejen",
     "en": "I ask you not [to leave] coal for my cousin. (ustedes)",
     "altAnswers": [
      "traigan",
      "dejéis",
      "traigáis"
     ],
     "explanation": "Pedir que + subjuntivo de ustedes: «dejen»."
    },
    "19": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "I hope you like the cookies I've left for you. (ustedes)",
     "answer": "Espero que les gusten las galletas que les dejé.",
     "explanation": "«Gusten» en plural porque concuerda con «las galletas».",
     "altAnswers": [
      "Espero que os gusten las galletas que os he dejado."
     ]
    },
    "22": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "I want you to give my mum a new bike. (ustedes)",
     "answer": "Quiero que le den a mi madre una bici nueva.",
     "altAnswers": [
      "Quiero que le den una bici nueva a mi madre.",
      "Quiero que le den a mi mamá una bici nueva.",
      "Quiero que le den una bici nueva a mi mamá.",
      "Quiero que le den a mi madre una bicicleta nueva.",
      "Quiero que le den una bicicleta nueva a mi madre.",
      "Quiero que le den a mi mamá una bicicleta nueva.",
      "Quiero que le den una bicicleta nueva a mi mamá.",
      "Quiero que le deis a mi madre una bici nueva.",
      "Quiero que le deis una bici nueva a mi madre.",
      "Quiero que le deis a mi mamá una bici nueva.",
      "Quiero que le deis una bici nueva a mi mamá.",
      "Quiero que le deis a mi madre una bicicleta nueva.",
      "Quiero que le deis una bicicleta nueva a mi madre.",
      "Quiero que le deis a mi mamá una bicicleta nueva.",
      "Quiero que le deis una bicicleta nueva a mi mamá."
     ],
     "explanation": "«Dar» en subjuntivo con ustedes: «den», sin tilde."
    },
    "24": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "Espero que este año no se ___ de mi casa.",
     "answer": "olviden",
     "en": "I hope you don't [forget] my house this year. (ustedes)",
     "explanation": "Olvidarse de: subjuntivo de ustedes «olviden».",
     "altAnswers": [
      "olvidéis"
     ]
    },
    "26": {
     "type": "speak",
     "text": "Quiero que me traigan una bici roja.",
     "prompt": "Dilo en español: \"I want you to bring me a red bike\"",
     "explanation": "Una forma de decirlo: «Quiero que me traigan una bici roja». Otra forma correcta también vale: comprueba primero el significado y después la pronunciación.",
     "altAnswers": [
      "Quiero que me traigáis una bici roja."
     ]
    }
   }
  },
  "sections": {
   "0": {
    "body": [
     "En España y otros países, los niños escriben una carta a los Reyes Magos, que traen los regalos la noche del 5 de enero. Las cartas están llenas de subjuntivo.",
     "Recuerda: cuando quieres que OTRA persona haga algo (quiero que, les pido que, espero que), el segundo verbo va en subjuntivo, porque es un deseo, no un hecho. A los tres Reyes se les habla de ustedes: traigan, den. En España se usa vosotros: traigáis, deis."
    ],
    "examples": [
     {
      "es": "Queridos Reyes Magos: este año he sido muy bueno.",
      "en": "Dear Three Kings: this year I've been very good."
     },
     {
      "es": "Quiero que me traigan una bici roja.",
      "en": "I want you to bring me a red bike."
     },
     {
      "es": "Espero que mi hermana no reciba carbón.",
      "en": "I hope my sister doesn't get coal."
     }
    ]
   }
  }
 },
 "b1d-dictado-deseos-familia": {
  "exercises": {
   "replace": {
    "2": {
     "type": "dictation",
     "audio": "Espero que todos estén bien y que nos veamos pronto.",
     "explanation": "Se escribe: Espero que todos estén bien y que nos veamos pronto. (I hope you're all well and that we see each other soon.) Dos subjuntivos unidos por y que: estéis (con tilde) y veamos."
    },
    "5": {
     "type": "translate",
     "direction": "es-en",
     "prompt": "Traduce al inglés.",
     "source": "Esperamos que les guste la sorpresa.",
     "answer": "We hope you like the surprise.",
     "altAnswers": [
      "We hope you'll like the surprise."
     ],
     "explanation": "Esperar que + subjuntivo; gustar concuerda con «la sorpresa»: les guste."
    },
    "8": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Corrige la ortografía.",
     "source": "«Espero que esten bien y que les guste el regalo.»",
     "answer": "Espero que estén bien y que les guste el regalo.",
     "explanation": "Estén (subjuntivo de estar) lleva tilde, como esté y estés.",
     "altAnswers": [
      "Espero que estéis bien y que os guste el regalo."
     ]
    },
    "14": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "Mi tío necesita que le ___ el carro este fin de semana.",
     "answer": "dejemos",
     "en": "My uncle needs us [to lend] him the car this weekend.",
     "altAnswers": [
      "prestemos"
     ],
     "explanation": "Necesitar que + subjuntivo «dejemos»."
    },
    "20": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "My brother needs me to explain the homework to him.",
     "answer": "Mi hermano necesita que le explique la tarea.",
     "altAnswers": [
      "Mi hermano necesita que le explique los deberes."
     ],
     "explanation": "«Le» delante de «explique»; c → qu."
    }
   }
  },
  "sections": {
   "0": {
    "check": [
     {
      "type": "dictation",
      "audio": "Mis padres esperan que encuentre un departamento cerca de ellos.",
      "explanation": "Se escribe: Mis padres esperan que encuentre un departamento cerca de ellos. (My parents hope I find an apartment near them.) Esperar que + subjuntivo: encontrar → encuentre (o → ue)."
     }
    ]
   }
  }
 },
 "b1d-patron-subjuntivo-er-ir": {
  "exercises": {
   "replace": {
    "11": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "Quiero que ustedes ___ las instrucciones.",
     "answer": "lean",
     "en": "I want you all [to read] the instructions.",
     "explanation": "Leer → lean (-er toma -a)."
    },
    "13": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Corrige la frase.",
     "source": "Quiero que usted dice la verdad.",
     "answer": "Quiero que usted diga la verdad.",
     "explanation": "«Quiero que» + otra persona pide subjuntivo, y decir parte de digo: diga."
    },
    "20": {
     "type": "fill-blank",
     "prompt": "Completa (aprender).",
     "sentence": "Quiero que los niños ___ a compartir.",
     "answer": "aprendan",
     "explanation": "Aprender: aprendo → aprend- → aprendan."
    },
    "24": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Corrige la frase.",
     "source": "Espero que mis primos traen el pastel.",
     "answer": "Espero que mis primos traigan el pastel.",
     "explanation": "«Espero que» pide subjuntivo, y traer parte de traigo: traigan."
    }
   }
  },
  "sections": {
   "0": {
    "check": [
     {
      "type": "fill-blank",
      "prompt": "¿Cómo se dicen en español las palabras en negrita?",
      "sentence": "Quiero que ___ la ventana.",
      "answer": "abras",
      "en": "I want you [to open] the window (tú).",
      "explanation": "abrir → abras: present subjunctive, tú. Abrir: abro → abr- → abras. Los verbos en -ir toman -a."
     },
     {
      "type": "fill-blank",
      "prompt": "Completa.",
      "sentence": "Espero que ___ la respuesta. (deducir, tú)",
      "answer": "deduzcas",
      "explanation": "La forma yo es deduzco, así que el subjuntivo conserva -zc-: deduzcas, como conozco → conozcas."
     }
    ]
   }
  }
 },
 "b1d-rep-deseo-consejos-amiga": {
  "exercises": {
   "replace": {
    "17": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "Our teacher forbids us to use our phones in class.",
     "answer": "Nuestra profesora nos prohíbe que usemos el celular en clase.",
     "altAnswers": [
      "Nuestro profesor nos prohíbe que usemos el celular en clase.",
      "Nuestra profesora nos prohíbe que usemos los celulares en clase.",
      "Nuestro profesor nos prohíbe que usemos los celulares en clase.",
      "Nuestra profesora nos prohíbe usar el celular en clase.",
      "Nuestro profesor nos prohíbe usar el celular en clase.",
      "Nuestra profesora nos prohíbe que usemos el móvil en clase.",
      "Nuestro profesor nos prohíbe que usemos el móvil en clase.",
      "Nuestra profesora nos prohíbe que usemos los móviles en clase.",
      "Nuestro profesor nos prohíbe que usemos los móviles en clase.",
      "Nuestra profesora nos prohíbe usar el móvil en clase.",
      "Nuestro profesor nos prohíbe usar el móvil en clase."
     ],
     "explanation": "Prohibir que + subjuntivo: usemos. Con el pronombre nos, también vale el infinitivo."
    }
   }
  },
  "sections": {
   "0": {
    "body": [
     "Recuerda la regla: aconsejar, recomendar, sugerir, pedir y prohibir expresan lo que quieres que haga otra persona, algo que todavía no ha pasado. Por eso, con otro sujeto, van con que + subjuntivo, igual que querer: te aconsejo que comas bien, no quiero que trabajes tanto.",
     "Con un pronombre de persona (me, te, le, nos, os, les), aconsejar, recomendar, sugerir y prohibir también admiten el infinitivo, porque ya se sabe quién hará la acción: te aconsejo comer bien, nos prohíbe usar el celular."
    ]
   }
  }
 }
};
