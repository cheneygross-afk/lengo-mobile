// Synced from cheneygross-afk/lengo:src/lib/lessons/es-redesign/b2-unit2-latam.ts by scripts/sync-content.mjs -- edit it there, not here.
// Generated: Latin American wording for B2 Unit 2. B2_UNIT2_LATAM adds
// accepted answers (papás, mamá, carro, bus, lindo, en la noche) next to the
// Spain wording; B2_UNIT2_SWAP makes the Latin American word the main one
// where the lesson showed the Spain word (carro, departamento, celular,
// refrigerador, estacionamiento, enojarse, extrañar, tomar, manejar), keeping
// the Spain answer accepted. It also gives the vosotros drills an ustedes
// answer (vosotros still accepted), so Latin American learners get them too,
// and replaces items that used later grammar: a negative command (no te
// desanimes, no te asustes) and the perfect subjunctive (te la hayan
// robado). Content only.
import type { LessonPatch } from "./patch";
export const B2_UNIT2_LATAM: Record<string, { alts?: Record<number, string[]>; checkAlts?: Record<number, Record<number, string[]>> }> = {
 "b1d-circuito-emociones": {
  "alts": {
   "15": [
    "A mi mamá le preocupa que yo viaje sola.",
    "A mi mamá le preocupa que viaje solo."
   ]
  }
 },
 "present-subjunctive-formation-2": {
  "alts": {
   "7": [
    "A mis papás les preocupa que trabaje tanto.",
    "Les preocupa a mis papás que trabaje tanto.",
    "A mis papás les preocupa que yo trabaje tanto."
   ]
  }
 },
 "b1d-patron-creo-no-creo": {
  "alts": {
   "18": [
    "Mis papás creen que trabajo demasiado, pero dudo que sea un problema.",
    "Mis papás piensan que trabajo demasiado, pero dudo que sea un problema."
   ]
  }
 },
 "b1d-pares-hecho-reaccion": {
  "alts": {
   "9": [
    "Me sorprende que tu papá trabaje los domingos."
   ],
   "12": [
    "Me molesta que el bus no venga los domingos."
   ]
  }
 },
 "b1d-habla-de-ti-reacciones": {
  "alts": {
   "10": [
    "Me extraña que mis papás no contesten el teléfono.",
    "Me extraña que mis papás no contesten al teléfono.",
    "Me extraña que mis papás no respondan al teléfono."
   ]
  }
 },
 "subjunctive-wishes-doubt-emotion-mastery-check": {
  "alts": {
   "3": [
    "Mis papás quieren que yo estudie medicina."
   ],
   "10": [
    "Es una pena que tu hermano no conozca a mis papás todavía."
   ]
  }
 },
 "b1r-error-hunt-creer-dudar": {
  "alts": {
   "13": [
    "Dudamos que el bus pase hoy."
   ]
  }
 },
 "b1d-rep-duda-corrige": {
  "alts": {
   "0": [
    "Creo que el nuevo parque es lindo."
   ],
   "13": [
    "Mi mamá duda que terminemos hoy.",
    "Mi mamá duda de que terminemos hoy.",
    "Mi mamá duda que acabemos hoy.",
    "Mi mamá duda de que acabemos hoy."
   ],
   "17": [
    "Dudo que el bus pase por aquí."
   ]
  }
 },
 "subjunctive-impersonal-ojala-1": {
  "alts": {
   "11": [
    "¡Ojalá que a mis papás les guste mi nuevo novio!",
    "¡Ojalá a mis papás les guste mi nuevo novio!",
    "¡Ojalá que a mis papás les guste mi novio nuevo!",
    "¡Ojalá a mis papás les guste mi novio nuevo!"
   ]
  }
 },
 "b1d-ronda-ojala": {
  "alts": {
   "15": [
    "Ojalá mis papás entiendan mi decisión.",
    "Ojalá que mis papás entiendan mi decisión.",
    "Ojalá mis papás comprendan mi decisión.",
    "Ojalá que mis papás comprendan mi decisión."
   ]
  }
 },
 "b1d-ronda-disparadores": {
  "alts": {
   "26": [
    "Sé que estás cansado, pero quiero que vengas a cenar con mis papás.",
    "Sé que estás cansada, pero quiero que vengas a cenar con mis papás."
   ]
  }
 },
 "b1-vocabulary-practice-2": {
  "alts": {
   "3": [
    "Mi hermano está en desacuerdo con mis papás.",
    "Mi hermano no está de acuerdo con mis papás.",
    "Mi hermano discrepa de mis papás.",
    "Mi hermano discrepa con mis papás."
   ]
  }
 },
 "b1r-mission-reacting-to-news": {
  "alts": {
   "16": [
    "Me sorprende que tus papás vendan la casa.",
    "Me sorprende que tus papás vendan su casa."
   ],
   "22": [
    "—Mis papás se mudan a la costa. —Me alegro de que se muden, pero es una pena que estén tan lejos.",
    "—Mis papás se mudan a la costa. —Me alegra que se muden, pero es una pena que estén tan lejos.",
    "—Mis papás se mudan a la costa. —Me alegro de que se muden, pero qué pena que estén tan lejos.",
    "—Mis papás se mudan a la costa. —Me alegro de que se muden, pero es una lástima que estén tan lejos."
   ]
  }
 },
 "b1d-dictado-reacciones": {
  "alts": {
   "12": [
    "Le preocupa a mi mamá que mi hermana no le diga la verdad."
   ],
   "17": [
    "Me extraña que sus papás no lo visiten.",
    "Me extraña que sus papás no la visiten.",
    "Me extraña que sus papás no le visiten."
   ],
   "23": [
    "A mi papá le encanta que lo llamemos."
   ]
  }
 },
 "b1r-dialogue-advice-column": {
  "alts": {
   "20": [
    "Dudo que tus papás quieran controlar tu vida; creo que están preocupados por ti.",
    "Dudo que tus papás quieran controlar tu vida. Creo que están preocupados por ti."
   ]
  }
 },
 "b1r-word-web-emotions": {
  "alts": {
   "20": [
    "Los niños están aburridos y sus papás se están poniendo nerviosos.",
    "Los niños están aburridos y sus papás se ponen nerviosos.",
    "Los niños están aburridos y sus papás están poniéndose nerviosos."
   ]
  }
 }
};
export const B2_UNIT2_SWAP: Record<string, LessonPatch> = {
 "subjunctive-wishes-doubt-emotion-1": {
  "exercises": {
   "replace": {
    "3": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Corrige la frase.",
     "source": "Mi hermano niega que el carro es suyo.",
     "answer": "Mi hermano niega que el carro sea suyo.",
     "altAnswers": [
      "Mi hermano niega que el auto sea suyo.",
      "Mi hermano niega que el coche sea suyo."
     ],
     "explanation": "Negar lleva subjuntivo: sea. Con «es» afirmarías el hecho que él niega."
    }
   }
  }
 },
 "subjunctive-wishes-doubt-emotion-1-part-2": {
  "exercises": {
   "replace": {
    "8": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "Les molesta que sus hijos ___ tanto tiempo con el celular.",
     "answer": "pasen",
     "en": "It bothers them that their children [spend] so much time on their phones.",
     "explanation": "Molestar es un verbo de emoción: la acción de otros va en subjuntivo (pasen), aunque sea un hecho real."
    }
   }
  }
 },
 "b1d-circuito-emociones": {
  "exercises": {
   "replace": {
    "6": {
     "type": "matching",
     "instructions": "Relaciona el comienzo con el final.",
     "pairs": [
      {
       "left": "Me encanta que…",
       "right": "…me escribas cartas."
      },
      {
       "left": "Me da pena que…",
       "right": "…te vayas tan pronto."
      },
      {
       "left": "Me pone nervioso que…",
       "right": "…lleguen tarde."
      },
      {
       "left": "Me alegro de…",
       "right": "…verte otra vez."
      }
     ],
     "explanation": "Me encanta que, me da pena que y me pone nervioso que reaccionan a lo que hace otra persona: subjuntivo (escribas, te vayas, lleguen). «Me alegro de verte» tiene un solo sujeto: infinitivo."
    }
   }
  }
 },
 "present-subjunctive-formation-2": {
  "exercises": {
   "replace": {
    "14": {
     "type": "speak",
     "prompt": "Responde en voz alta: ¿qué te molesta de tus vecinos o compañeros de departamento?",
     "text": "Me molesta que mis vecinos pongan la música muy alta por la noche.",
     "explanation": "Me molesta que + subjuntivo: pongo → pongan. Molestar concuerda con lo que molesta, no contigo."
    }
   }
  }
 },
 "b1d-patron-creo-no-creo": {
  "exercises": {
   "replace": {
    "20": {
     "type": "write",
     "prompt": "Acabas de ver una película con un amigo y no piensan lo mismo. Escribe el diálogo: cada uno da su opinión sobre la historia, los actores y el final.",
     "minWords": 50,
     "maxWords": 90,
     "rubric": [
      "Creo que / pienso que + indicativo",
      "No creo que + subjuntivo",
      "Dudo que + subjuntivo",
      "Formato de diálogo"
     ],
     "modelAnswer": "—¿Qué te ha parecido? —Creo que es la mejor película del año. La historia es muy original. —Pues yo no creo que sea tan original. Es igual que otra que vimos el mes pasado. —Bueno, pero los actores son buenísimos. —Pienso que la protagonista actúa bien, pero no creo que el chico tenga mucho talento. —¿Y el final? Yo creo que tiene sentido. —Dudo que alguien lo entienda a la primera. —Entonces tendremos que verla otra vez.",
     "explanation": "Creo que y pienso que afirman y llevan indicativo (es, actúa, tiene); no creo que y dudo que expresan duda y llevan subjuntivo (sea, tenga, entienda)."
    }
   }
  }
 },
 "b1d-pares-hecho-reaccion": {
  "exercises": {
   "replace": {
    "5": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "Me han dicho que ___ un bebé.",
     "answer": "tienen",
     "en": "I've been told that you [have] a baby (you all).",
     "explanation": "tener → tienen: present indicative, ustedes (reporting fact). «Decir que» transmite información: indicativo, tienen.",
     "altAnswers": [
      "tenéis"
     ]
    },
    "6": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "¡Qué bien que ___ un bebé!",
     "answer": "tengan",
     "en": "How great that you [have] a baby! (you all)",
     "explanation": "tener → tengan: present subjunctive, ustedes (after 'qué bien que'). «Qué bien que» es una reacción: subjuntivo, tengan (de tengo).",
     "altAnswers": [
      "tengáis"
     ]
    },
    "10": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Cambia «Veo que» por «¡Qué bien que…!».",
     "source": "Veo que tienes un carro nuevo.",
     "answer": "¡Qué bien que tengas un carro nuevo!",
     "altAnswers": [
      "¡Qué bueno que tengas un carro nuevo!",
      "¡Qué bien que tengas un auto nuevo!",
      "¡Qué bueno que tengas un auto nuevo!",
      "¡Qué bien que tengas un coche nuevo!",
      "¡Qué bueno que tengas un coche nuevo!"
     ],
     "explanation": "Pasas de informar a reaccionar: tienes (indicativo) → tengas (subjuntivo)."
    }
   }
  }
 },
 "b1d-habla-de-ti-reacciones": {
  "exercises": {
   "replace": {
    "6": {
     "type": "word-order",
     "prompt": "Ordena las palabras.",
     "words": [
      "Me",
      "hace",
      "mucha",
      "ilusión",
      "que",
      "vengan",
      "a",
      "mi",
      "boda."
     ],
     "translation": "I'm really excited that you all are coming to my wedding.",
     "explanation": "«Me hace ilusión que» es una emoción: subjuntivo, vengan (de vengo)."
    },
    "18": {
     "type": "write",
     "prompt": "Tu amiga Elena te ha escrito con muchas noticias: se casa en verano, su hermano se ha quedado sin trabajo y ella se muda a Valencia. Contéstale con tus reacciones a cada noticia.",
     "minWords": 50,
     "maxWords": 90,
     "rubric": [
      "Me alegro de que / me encanta que + subjuntivo",
      "Siento que / me da pena que + subjuntivo",
      "Un deseo con espero que + subjuntivo",
      "Saludo y despedida de un correo informal"
     ],
     "modelAnswer": "¡Hola, Elena! ¡Qué de noticias! Me alegro muchísimo de que te cases en verano. ¡Me encanta que por fin tengan fecha! Siento mucho que tu hermano esté sin trabajo; espero que encuentre algo pronto, porque es un chico muy trabajador. Y me da un poco de pena que te vayas a Valencia, porque vamos a estar más lejos, pero me alegra que vivas cerca del mar. Espero que me invites pronto. Un abrazo muy fuerte, Pablo",
     "explanation": "Las reacciones a lo que hacen otros llevan que + subjuntivo: me alegro de que te cases, siento que esté sin trabajo. Ojo: me alegro de que, pero me alegra que, sin de."
    }
   }
  },
  "sections": {
   "0": {
    "check": [
     {
      "type": "fill-blank",
      "prompt": "¿Cómo se dicen en español las palabras en negrita?",
      "sentence": "¡Qué pena que no ___ venir!",
      "answer": "puedan",
      "en": "What a shame you [can't] come! (you all)",
      "explanation": "poder → puedan: present subjunctive, ustedes. «Qué pena que» reacciona: subjuntivo, puedan (o → ue). «Pueden» solo informaría.",
      "altAnswers": [
       "podáis"
      ]
     },
     {
      "type": "multiple-choice",
      "question": "Aplica la regla: «Me alegro de que te ___ las flores.»",
      "options": [
       "gusten",
       "gusta",
       "gustan",
       "guste"
      ],
      "correctIndex": 0,
      "explanation": "La reacción (me alegro de que) pide subjuntivo, y gustar concuerda con «las flores» (plural): gusten. «Gusta» y «gustan» son indicativo, y «guste» no concuerda con un plural."
     }
    ]
   }
  }
 },
 "b1-vocabulary-practice-1": {
  "exercises": {
   "replace": {
    "4": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "I hope you don't get discouraged. (tú)",
     "answer": "Espero que no te desanimes.",
     "explanation": "Espero que + otra persona pide subjuntivo: no te desanimes.",
     "altAnswers": [
      "Ojalá que no te desanimes.",
      "Ojalá no te desanimes.",
      "Espero que tú no te desanimes."
     ]
    },
    "16": {
     "type": "word-order",
     "prompt": "Ordena las palabras.",
     "words": [
      "No",
      "quiero",
      "que",
      "te",
      "asustes,",
      "es",
      "solo",
      "el",
      "viento"
     ],
     "translation": "I don't want you to get scared, it's only the wind",
     "explanation": "No quiero que + otra persona pide subjuntivo: te asustes."
    }
   }
  }
 },
 "subjunctive-wishes-doubt-emotion-mastery-check": {
  "exercises": {
   "replace": {
    "21": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Corrige la frase.",
     "source": "Dudamos que el hotel tiene estacionamiento gratis.",
     "answer": "Dudamos que el hotel tenga estacionamiento gratis.",
     "altAnswers": [
      "Dudamos que el hotel tenga estacionamiento gratuito.",
      "Dudamos que el hotel tenga aparcamiento gratis.",
      "Dudamos que el hotel tenga aparcamiento gratuito."
     ],
     "explanation": "Dudar que + subjuntivo: tenga. «Tiene» afirmaría lo que dudamos."
    }
   }
  }
 },
 "b1d-practica-mezclada-deseo-duda": {
  "exercises": {
   "replace": {
    "14": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "The boss prefers that we arrive at the meeting early and turn off our phones.",
     "answer": "El jefe prefiere que lleguemos temprano a la reunión y que apaguemos los celulares.",
     "altAnswers": [
      "El jefe prefiere que lleguemos temprano a la reunión y apaguemos los celulares.",
      "La jefa prefiere que lleguemos temprano a la reunión y que apaguemos los celulares.",
      "El jefe prefiere que lleguemos pronto a la reunión y que apaguemos los móviles.",
      "El jefe prefiere que lleguemos temprano a la reunión y que apaguemos los móviles.",
      "El jefe prefiere que lleguemos pronto a la reunión y apaguemos los móviles.",
      "La jefa prefiere que lleguemos pronto a la reunión y que apaguemos los móviles."
     ],
     "explanation": "Preferir que + subjuntivo en las dos acciones. Llegar y apagar añaden u delante de e: lleguemos, apaguemos."
    },
    "17": {
     "type": "write",
     "prompt": "Eres jefe de un equipo y la empresa va a cambiar el horario de trabajo. Escribe un correo a tu equipo: explica el cambio, cómo te sientes, qué dudas tienes y qué quieres que hagan.",
     "minWords": 50,
     "maxWords": 90,
     "rubric": [
      "Una información con indicativo (sé que, como saben…)",
      "Emoción o duda + subjuntivo (me preocupa que, no creo que…)",
      "Una petición con quiero que / les pido que + subjuntivo",
      "Registro de trabajo, cordial"
     ],
     "modelAnswer": "Hola a todos: Como saben, a partir de octubre la oficina abrirá a las ocho. Sé que es un cambio grande para muchos de ustedes. Me alegra que podamos salir antes por la tarde, pero me preocupa que algunos tengan problemas con el transporte. No creo que el horario nuevo sea perfecto, así que quiero que me digan su opinión. Les pido que llenen la encuesta antes del viernes. Gracias por su paciencia. Un saludo, Andrés",
     "explanation": "Sé que da información y lleva indicativo (es); me alegra que, me preocupa que y no creo que llevan subjuntivo. Quiero que y les pido que también, porque el jefe pide algo a otras personas."
    }
   }
  }
 },
 "b1d-cadena-afirmar-negar": {
  "exercises": {
   "replace": {
    "18": {
     "type": "multiple-choice",
     "question": "«Creo que hay leche en el refrigerador.» → negación:",
     "options": [
      "No creo que haya leche en el refrigerador.",
      "No creo que hay leche en el refrigerador.",
      "No creo haber leche en el refrigerador.",
      "No creo que habrá leche en el refrigerador."
     ],
     "correctIndex": 0,
     "explanation": "Al negar creer, hay pasa a subjuntivo: haya. «Hay» y «habrá» mantienen el indicativo, y «no creo haber» solo sirve con el mismo sujeto."
    },
    "23": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "My father thinks I drive well, but my mother doesn't think I'm ready. (I = a woman)",
     "answer": "Mi padre cree que manejo bien, pero mi madre no cree que esté preparada.",
     "altAnswers": [
      "Mi padre piensa que manejo bien, pero mi madre no cree que esté preparada.",
      "Mi padre cree que manejo bien, pero mi madre no cree que esté lista.",
      "Mi papá cree que manejo bien, pero mi mamá no cree que esté lista.",
      "Mi padre cree que conduzco bien, pero mi madre no cree que esté preparada.",
      "Mi padre piensa que conduzco bien, pero mi madre no cree que esté preparada.",
      "Mi padre cree que conduzco bien, pero mi madre no cree que esté lista."
     ],
     "explanation": "Cree que → indicativo (manejo); no cree que → subjuntivo (esté)."
    }
   }
  }
 },
 "b1d-rep-duda-creo-no-creo": {
  "exercises": {
   "replace": {
    "14": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "It's not true that I spend all day on my phone.",
     "answer": "No es verdad que pase todo el día con el celular.",
     "altAnswers": [
      "No es cierto que pase todo el día con el celular.",
      "No es verdad que pase todo el día con el teléfono.",
      "No es verdad que esté todo el día con el celular.",
      "No es verdad que pase todo el día con el móvil.",
      "No es cierto que pase todo el día con el móvil.",
      "No es verdad que esté todo el día con el móvil."
     ],
     "explanation": "No es verdad que → subjuntivo: pase."
    }
   }
  }
 },
 "subjunctive-impersonal-ojala-1": {
  "sections": {
   "4": {
    "check": [
     {
      "type": "multiple-choice",
      "question": "¿Qué es necesario confirmar esta noche?",
      "options": [
       "El vuelo",
       "El hotel",
       "El carro",
       "El restaurante"
      ],
      "correctIndex": 1,
      "explanation": "El texto dice: «Es necesario que confirmemos el hotel esta noche». El vuelo, el carro y el restaurante no son lo que hay que confirmar."
     }
    ]
   }
  }
 },
 "b1d-ronda-ojala": {
  "exercises": {
   "replace": {
    "3": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "Ojalá que no ___ el tren.",
     "answer": "pierdan",
     "en": "I hope you [don't miss] the train (you all).",
     "explanation": "perder → pierdan: present subjunctive, ustedes. Perder cambia e → ie: pierda, pierdan.",
     "altAnswers": [
      "perdáis"
     ]
    },
    "9": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "Ojalá que mi hijo ___ el examen de manejar.",
     "answer": "apruebe",
     "en": "I hope my son [passes] his driving test.",
     "explanation": "Ojalá que + subjuntivo: apruebe (o → ue)."
    },
    "17": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Convierte la frase en un deseo con «ojalá».",
     "source": "Encontramos un departamento barato.",
     "answer": "Ojalá encontremos un departamento barato.",
     "altAnswers": [
      "Ojalá que encontremos un departamento barato.",
      "Ojalá encontremos un apartamento barato.",
      "Ojalá encontremos un piso barato.",
      "Ojalá que encontremos un piso barato."
     ],
     "explanation": "Al convertir el hecho en deseo, el verbo pasa a subjuntivo: encontramos → encontremos. En nosotros no hay diptongo."
    },
    "24": {
     "type": "word-order",
     "prompt": "Ordena las palabras.",
     "words": [
      "Ojalá",
      "no",
      "se",
      "rompa",
      "el",
      "carro",
      "durante",
      "el",
      "viaje"
     ],
     "translation": "I hope the car doesn't break down during the trip",
     "explanation": "Ojalá + subjuntivo (se rompa)."
    }
   }
  }
 },
 "b1d-corrige-disparadores": {
  "exercises": {
   "replace": {
    "21": {
     "type": "word-order",
     "prompt": "Ordena las palabras.",
     "words": [
      "No",
      "creo",
      "que",
      "sea",
      "fácil",
      "encontrar",
      "departamento",
      "en",
      "Madrid"
     ],
     "translation": "I don't think it's easy to find an apartment in Madrid",
     "explanation": "No creo que + subjuntivo (sea)."
    },
    "23": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "I'm glad you have a new apartment, but I don't think it's cheap. (tú)",
     "answer": "Me alegro de que tengas un departamento nuevo, pero no creo que sea barato.",
     "altAnswers": [
      "Me alegra que tengas un departamento nuevo, pero no creo que sea barato.",
      "Me alegro de que tengas un apartamento nuevo, pero no creo que sea barato.",
      "Me alegra que tengas un apartamento nuevo, pero no creo que sea barato.",
      "Me alegro de que tengas un nuevo departamento, pero no creo que sea barato.",
      "Me alegro de que tengas un nuevo apartamento, pero no creo que sea barato.",
      "Me alegro de que tengas un piso nuevo, pero no creo que sea barato.",
      "Me alegra que tengas un piso nuevo, pero no creo que sea barato.",
      "Me alegro de que tengas un nuevo piso, pero no creo que sea barato."
     ],
     "explanation": "Me alegro de que → subjuntivo (tengas); no creo que → subjuntivo (sea)."
    }
   }
  }
 },
 "b1-common-words-justice": {
  "sections": {
   "4": {
    "examples": [
     {
      "es": "La policía tiene un sospechoso, pero no tiene pruebas.",
      "en": "The police have a suspect, but they don't have any evidence."
     },
     {
      "es": "Es muy sospechoso que nadie sepa nada.",
      "en": "It's very suspicious that nobody knows anything."
     },
     {
      "es": "El detective encontró una pista importante en el carro.",
      "en": "The detective found an important clue in the car."
     },
     {
      "es": "El mensaje estaba escrito en un código secreto.",
      "en": "The message was written in a secret code."
     },
     {
      "es": "La búsqueda del niño desaparecido duró dos días.",
      "en": "The search for the missing boy lasted two days."
     },
     {
      "es": "Quiero averiguar quién rompió la ventana.",
      "en": "I want to find out who broke the window."
     },
     {
      "es": "La agente tenía una misión muy clara: encontrar al testigo.",
      "en": "The agent had a very clear mission: to find the witness."
     }
    ]
   }
  }
 },
 "b1r-mission-reacting-to-news": {
  "exercises": {
   "replace": {
    "0": {
     "type": "speak",
     "text": "¡Qué pena que no lo encuentres!",
     "prompt": "Responde en voz alta: Perdí el celular. (Di: \"What a shame you can't find it!\")",
     "explanation": "Una forma de decirlo: «¡Qué pena que no lo encuentres!». encontrar → encuentres: present subjunctive, tú (after 'qué pena que'). Qué pena que expresa tristeza ante la noticia → subjuntivo. Encontrar diptonga (o → ue) también en subjuntivo: encuentres."
    },
    "13": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Cambia el deseo para un grupo de amigos (ustedes).",
     "source": "¡Que pases un buen fin de semana!",
     "answer": "¡Que pasen un buen fin de semana!",
     "altAnswers": [
      "¡Que paséis un buen fin de semana!",
      "¡Que paséis buen fin de semana!",
      "¡Que pasen buen fin de semana!"
     ],
     "explanation": "El deseo sigue siendo que + subjuntivo; solo cambia la persona: pasar → pasen (ustedes; en España, paséis)."
    },
    "20": {
     "type": "multiple-choice",
     "question": "Tu vecino dice: «Me han robado la bici». ¿Qué respuesta NO encaja?",
     "options": [
      "¡Qué bien que te la roben!",
      "¡Qué rabia que te pase esto!",
      "Siento mucho que estés sin bici.",
      "Espero que la encuentres pronto."
     ],
     "correctIndex": 0,
     "explanation": "«¡Qué bien que…!» expresa alegría: no encaja con una mala noticia. Las otras usan pena, rabia o un deseo, siempre con subjuntivo (pase, estés, encuentres)."
    }
   }
  }
 },
 "b1d-dictado-reacciones": {
  "exercises": {
   "replace": {
    "20": {
     "type": "dictation",
     "audio": "No creo que mis padres me presten el carro",
     "explanation": "Se escribe: No creo que mis padres me presten el carro (I don't think my parents will lend me the car) No creo que + pronombre + subjuntivo: me presten."
    }
   }
  }
 },
 "b1r-mission-ojala-wishes": {
  "exercises": {
   "replace": {
    "13": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Cambia el mensaje a ustedes (son dos amigos enfermos).",
     "source": "¡Que duermas bien, y ojalá te sientas mejor mañana!",
     "answer": "¡Que duerman bien, y ojalá se sientan mejor mañana!",
     "altAnswers": [
      "¡Que durmáis bien, y ojalá os sintáis mejor mañana!",
      "¡Que durmáis bien y ojalá os sintáis mejor mañana!",
      "¡Que duerman bien y ojalá se sientan mejor mañana!"
     ],
     "explanation": "Con ustedes: duerman (o → ue), se sientan (e → ie). En España, con vosotros: durmáis, os sintáis."
    },
    "15": {
     "type": "write",
     "prompt": "Una compañera de trabajo se jubila después de treinta años en la empresa. Escribe un mensaje para su tarjeta de despedida con tus deseos y recuerdos.",
     "minWords": 40,
     "maxWords": 80,
     "rubric": [
      "Al menos tres deseos con ojalá + subjuntivo",
      "Que + subjuntivo para un deseo (que disfrutes…)",
      "Una expresión impersonal (es una pena que, es normal que…)",
      "Tono cariñoso"
     ],
     "modelAnswer": "Querida Pilar: Es una pena que te vayas, porque la oficina no va a ser igual sin ti. Gracias por tu ayuda y por tus cafés de los lunes. Ojalá tengas mucho tiempo para viajar y ojalá puedas por fin aprender a pintar. Que disfrutes de tus nietos y de tu jardín. Ojalá vengas a visitarnos de vez en cuando. ¡Te vamos a extrañar! Un abrazo, Rosa",
     "explanation": "Ojalá siempre lleva subjuntivo (ojalá tengas, ojalá vengas). Las valoraciones como es una pena que también lo piden, y que + subjuntivo solo es un deseo corto: que disfrutes."
    }
   }
  },
  "sections": {
   "0": {
    "check": [
     {
      "type": "fill-blank",
      "prompt": "¿Cómo se dicen en español las palabras en negrita?",
      "sentence": "¡Ojalá que ___ todos tus deseos!",
      "answer": "se cumplan",
      "en": "I hope all your wishes [come true]!",
      "explanation": "cumplirse → se cumplan: present subjunctive, ellos (after 'ojalá que'). Ojalá + subjuntivo; el sujeto es «todos tus deseos» (plural) → se cumplan."
     },
     {
      "type": "multiple-choice",
      "question": "Tu compañera de departamento empieza mañana un trabajo nuevo. ¿Qué mensaje le escribes?",
      "options": [
       "¡Ojalá te traten muy bien!",
       "¡Ojalá te tratan muy bien!",
       "¡Ojalá te tratarán muy bien!",
       "¡Ojalá tratarte muy bien!"
      ],
      "correctIndex": 0,
      "explanation": "Ojalá → subjuntivo: te traten. «Tratan» y «tratarán» son indicativo (hechos o predicciones) y «tratarte» es infinitivo, imposible tras ojalá."
     }
    ]
   }
  }
 },
 "b1d-cuento-carta-madre": {
  "exercises": {
   "replace": {
    "2": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "Espero que ___ un departamento bonito.",
     "answer": "encuentres",
     "en": "I hope you [find] a nice apartment (tú).",
     "explanation": "encontrar → encuentres: presente de subjuntivo, tú (o → ue). Esperar que → subjuntivo. Encontrar diptonga en las formas tónicas: encuentro → encuentres."
    },
    "11": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Cambia a ustedes (Lucía se va con su hermano).",
     "source": "Espero que comas bien y que duermas lo suficiente.",
     "answer": "Espero que coman bien y que duerman lo suficiente.",
     "altAnswers": [
      "Espero que comáis bien y que durmáis lo suficiente.",
      "Espero que comáis bien y durmáis lo suficiente.",
      "Espero que coman bien y duerman lo suficiente."
     ],
     "explanation": "Esperar que sigue pidiendo subjuntivo; solo cambia la persona. Con ustedes: coman, duerman (o → ue). En España, con vosotros: comáis, durmáis."
    },
    "14": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "I want you to send me photos of your new apartment. (tú)",
     "answer": "Quiero que me mandes fotos de tu departamento nuevo.",
     "altAnswers": [
      "Quiero que me envíes fotos de tu departamento nuevo.",
      "Quiero que me mandes fotos de tu nuevo departamento.",
      "Quiero que me mandes fotos de tu apartamento nuevo.",
      "Quiero que me envíes fotos de tu apartamento nuevo.",
      "Quiero que me mandes fotos de tu piso nuevo.",
      "Quiero que me envíes fotos de tu piso nuevo.",
      "Quiero que me mandes fotos de tu nuevo piso."
     ],
     "explanation": "Quiero que + otro sujeto → subjuntivo: mandes. El pronombre «me» va delante del verbo conjugado."
    },
    "15": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Cambia a negativo: «No creo que…».",
     "source": "Creo que tu departamento es pequeño.",
     "answer": "No creo que tu departamento sea pequeño.",
     "altAnswers": [
      "No creo que tu apartamento sea pequeño.",
      "No creo que tu piso sea pequeño."
     ],
     "explanation": "Al negar «creer», la opinión pierde certeza y el verbo pasa a subjuntivo: es → sea."
    },
    "17": {
     "type": "multiple-choice",
     "question": "La madre añade: «Estoy orgullosa de que ___ tan valiente.» (ser, tú)",
     "options": [
      "seas",
      "eres",
      "ser",
      "serás"
     ],
     "correctIndex": 0,
     "explanation": "Estar orgullosa de que expresa una emoción ante lo que es otra persona: subjuntivo (seas). «Eres» y «serás» son indicativo, y «ser» solo sirve si la madre habla de sí misma."
    }
   }
  },
  "sections": {
   "1": {
    "body": [
     "Lee la carta. Los verbos entre paréntesis están en infinitivo: piensa en qué forma necesita cada uno antes de hacer los ejercicios.",
     "«Querida Lucía: me alegro mucho de que te ___ (ir) a Berlín, aunque me da pena que ___ (estar) tan lejos. Espero que ___ (encontrar) un departamento bonito y que ___ (conocer) a gente buena. No creo que ___ (tener) problemas con el idioma. Quiero que me ___ (llamar) cada domingo. Estoy segura de que ___ (ser) una experiencia increíble. Te quiero, mamá.»"
    ]
   }
  }
 },
 "b1r-dialogue-advice-column": {
  "exercises": {
   "replace": {
    "3": {
     "type": "matching",
     "instructions": "Relaciona cada problema con un buen consejo.",
     "pairs": [
      {
       "left": "Duermo muy poco.",
       "right": "Te recomiendo que te acuestes antes."
      },
      {
       "left": "Mi jefe me grita.",
       "right": "Es importante que hables con Recursos Humanos."
      },
      {
       "left": "Extraño a mi familia.",
       "right": "Te sugiero que los llames más a menudo."
      },
      {
       "left": "Estoy aburrido del trabajo.",
       "right": "Quizás es hora de que busques algo nuevo."
      }
     ],
     "explanation": "Todos los consejos usan una expresión de consejo o valoración (te recomiendo que, es importante que, es hora de que…) + subjuntivo."
    },
    "9": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "Dudo que tu amiga ___ enojada contigo.",
     "answer": "esté",
     "en": "I doubt your friend [is] angry with you.",
     "explanation": "Dudar → subjuntivo (esté)."
    },
    "11": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Cambia la frase a usted.",
     "source": "Te recomiendo que busques otro departamento.",
     "answer": "Le recomiendo que busque otro departamento.",
     "altAnswers": [
      "Le recomiendo que busque otro apartamento.",
      "Le recomiendo que busque otro piso."
     ],
     "explanation": "Con usted, el pronombre pasa a le y el verbo a la forma de él: busque (c → qu delante de e)."
    },
    "16": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "It bothers me that your roommate uses your things without asking.",
     "answer": "Me molesta que tu compañero de departamento use tus cosas sin preguntar.",
     "altAnswers": [
      "Me molesta que tu compañera de departamento use tus cosas sin preguntar.",
      "Me molesta que tu compañero de departamento use tus cosas sin pedir permiso.",
      "Me molesta que tu compañero de departamento utilice tus cosas sin preguntar.",
      "Me molesta que tu compañero de cuarto use tus cosas sin preguntar.",
      "Me molesta que tu compañero de piso use tus cosas sin preguntar.",
      "Me molesta que tu compañera de piso use tus cosas sin preguntar.",
      "Me molesta que tu compañero de piso use tus cosas sin pedir permiso.",
      "Me molesta que tu compañero de piso utilice tus cosas sin preguntar."
     ],
     "explanation": "Me molesta que + subjuntivo: use."
    },
    "21": {
     "type": "speak",
     "prompt": "Responde en voz alta como la consejera: una lectora no duerme por el estrés del trabajo.",
     "text": "Siento que estés tan estresada. Te aconsejo que apagues el celular por la noche.",
     "explanation": "Siento que y te aconsejo que piden subjuntivo: estés, apagues (g → gu delante de e).",
     "altAnswers": [
      "Siento que estés tan estresada. Te aconsejo que apagues el móvil por la noche."
     ]
    },
    "22": {
     "type": "listen-choose",
     "audio": "Te recomiendo que hables con él con calma y que hagan una lista de tareas para la casa.",
     "question": "Escucha. ¿Qué aconseja la consejera?",
     "options": [
      "Hablar tranquilamente y repartir las tareas",
      "Cambiar de departamento cuanto antes",
      "Limpiar ella sola para evitar problemas",
      "Escribirle una carta a su compañero"
     ],
     "correctIndex": 0,
     "explanation": "Recomienda «que hables con él con calma» y «que hagan una lista de tareas»: hablar tranquilamente y repartir el trabajo. No propone mudarse, ni limpiar sola, ni escribir una carta."
    }
   }
  },
  "sections": {
   "0": {
    "body": [
     "Recomendar, sugerir, aconsejar y es mejor que funcionan como querer: expresan lo que quieres que haga otra persona, algo que todavía no es real. Por eso, con otro sujeto, piden que + subjuntivo: Te recomiendo que descanses.",
     "Con el pronombre (te, le, les) ya sabemos a quién va el consejo, y también se puede usar el infinitivo: Te recomiendo descansar. Y las reacciones de la consejera siguen la regla de siempre: emoción y duda → subjuntivo; certeza → indicativo.",
     "Carta 1: «Mi compañero de departamento nunca lava los platos y me molesta mucho.»"
    ],
    "examples": [
     {
      "es": "«Te sugiero que le dejes una nota amable.»",
      "en": "I suggest you leave him a friendly note. (suggest + que + subjunctive)"
     },
     {
      "es": "«Es mejor que hablen pronto del problema.»",
      "en": "It's better that you (both) talk about the problem soon."
     }
    ],
    "check": [
     {
      "type": "fill-blank",
      "prompt": "¿Cómo se dicen en español las palabras en negrita?",
      "sentence": "Me molesta que tu compañero no ___ nada en casa.",
      "answer": "haga",
      "en": "It bothers me that your roommate does not [do] anything at home.",
      "explanation": "hacer → haga: present subjunctive, él (after 'me molesta que'). Emoción (me molesta que) → subjuntivo, formado desde hago: haga. «Hace» informaría sin reaccionar."
     },
     {
      "type": "multiple-choice",
      "question": "Aplica la regla: «Les propongo que ___ las tareas por semanas.» (repartir, ustedes)",
      "options": [
       "repartan",
       "reparten",
       "repartir",
       "repartirán"
      ],
      "correctIndex": 0,
      "explanation": "Proponer, como sugerir, expresa lo que quieres que hagan otros: que + subjuntivo, repartan (-ir → a). «Reparten» y «repartirán» son indicativo, y «repartir» no encaja después de «que»."
     }
    ]
   }
  }
 },
 "b1d-rep-impersonales-cuento": {
  "exercises": {
   "replace": {
    "19": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "It's necessary that you turn off your phone during the interview. (tú)",
     "answer": "Es necesario que apagues el celular durante la entrevista.",
     "altAnswers": [
      "Es necesario que apagues el teléfono durante la entrevista.",
      "Es necesario que apagues tu celular durante la entrevista.",
      "Es necesario que apagues el móvil durante la entrevista.",
      "Es necesario que apagues tu móvil durante la entrevista."
     ],
     "explanation": "«Es necesario que» + subjuntivo: apagues (con -gu-)."
    }
   }
  }
 },
 "b1r-word-web-emotions": {
  "exercises": {
   "replace": {
    "5": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "It scares me that you (tú) drive so fast.",
     "answer": "Me da miedo que manejes tan rápido.",
     "altAnswers": [
      "Me asusta que manejes tan rápido.",
      "Me da miedo que conduzcas tan rápido.",
      "Me asusta que conduzcas tan rápido."
     ],
     "explanation": "La acción es tuya y el miedo, mío: que + subjuntivo. Desde «manejo» sale «manejes»."
    },
    "6": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Transforma la frase con «Me molesta que…».",
     "source": "Mi hermano usa mi computadora sin preguntar.",
     "answer": "Me molesta que mi hermano use mi computadora sin preguntar.",
     "altAnswers": [
      "Me molesta que mi hermano use mi computador sin preguntar.",
      "Me molesta que mi hermano use mi computadora sin pedir permiso.",
      "Me molesta que mi hermano use mi ordenador sin preguntar.",
      "Me molesta que mi hermano use mi ordenador sin pedir permiso."
     ],
     "explanation": "Con «me molesta que», la acción del otro va en subjuntivo: usa → «use»."
    },
    "7": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Cambia la frase para contar el momento en que empezó la emoción: usa «enojarse» en indefinido.",
     "source": "Ana estaba muy enojada.",
     "answer": "Ana se enojó mucho.",
     "altAnswers": [
      "Ana se enfadó mucho."
     ],
     "explanation": "«Estaba enojada» describe el estado; para el momento en que empieza la emoción se usa el verbo pronominal en indefinido: «se enojó»."
    },
    "15": {
     "type": "speak",
     "text": "Mi hermano se enojó porque tomé su carro.",
     "prompt": "Dilo en español: \"My brother got angry because I took his car\"",
     "altAnswers": [
      "Mi hermano se enojó porque tomé su auto.",
      "Mi hermano se enojó porque le tomé el carro.",
      "Mi hermano se enfadó porque cogí su coche.",
      "Mi hermano se enfadó porque tomé su coche.",
      "Mi hermano se enfadó porque le cogí el coche.",
      "Mi hermano se enojó porque tomé su coche."
     ],
     "explanation": "Una forma de decirlo: «Mi hermano se enojó porque tomé su carro». «Enojarse» («enfadarse» en España) en indefinido para la reacción puntual."
    },
    "16": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "Me da mucha ___ que mi amigo tenga un departamento tan grande.",
     "answer": "envidia",
     "en": "I'm very [envious] that my friend has such a big apartment.",
     "explanation": "«Dar envidia» + que + subjuntivo («tenga»)."
    },
    "22": {
     "type": "write",
     "prompt": "Escribe una entrada de diario sobre un día con muchas emociones: algo que te alegró, algo que te enojó y algo que te dio miedo. Usa vocabulario variado de emociones.",
     "minWords": 50,
     "maxWords": 90,
     "rubric": [
      "Al menos cinco palabras de emociones (agobiada, orgullosa, me puse nerviosa…)",
      "Una reacción con subjuntivo (me da rabia que…)",
      "Indefinido e imperfecto para contar el día",
      "Un contraste (al principio…, pero luego…)"
     ],
     "modelAnswer": "Querido diario: ¡Qué día! Por la mañana estaba agobiada porque tenía una presentación muy importante. Al principio me puse nerviosa, pero luego hablé con seguridad y mi jefe me felicitó. Me sentí muy orgullosa. Por la tarde me enojé con mi hermano, porque otra vez llegó tarde a recogerme. Me da mucha rabia que nunca sea puntual. Y por la noche pasé miedo: oí un ruido en la cocina, ¡pero era el gato! Ahora estoy tranquila y contenta.",
     "explanation": "Para hablar de emociones hay adjetivos (agobiada, orgullosa, tranquila) y verbos (me puse nerviosa, me enojé, pasé miedo). Me da rabia que + subjuntivo reacciona a lo que hace otra persona: nunca sea puntual."
    }
   }
  },
  "sections": {
   "0": {
    "body": [
     "Recuerda la regla: una emoción se puede decir de tres maneras. Para el estado, estar + adjetivo (estoy preocupada, está enojado). Para el momento en que empieza la emoción, un verbo pronominal o ponerse + adjetivo (se enojó, me puse nerviosa). Y para la causa, me da miedo / me molesta / me pone nervioso + lo que la provoca."
    ]
   }
  }
 },
 "b1r-dialogue-advice-column-unit-review": {
  "sections": {
   "2": {
    "check": [
     {
      "type": "write",
      "prompt": "Eres el autor de un consultorio sentimental. Un lector dice que su mejor amigo no le habla desde hace un mes. Escribe tu respuesta con consejos y reacciones.",
      "minWords": 50,
      "maxWords": 100,
      "rubric": [
       "Una reacción con subjuntivo (siento que, es normal que)",
       "Consejos (te aconsejo que, es mejor que)",
       "Un caso con infinitivo (es importante hablar…)",
       "Una frase con indicativo (es verdad que, está claro que)"
      ],
      "modelAnswer": "Querido lector: Siento mucho que estés pasando por esto. Es normal que te sientas triste, porque un amigo es muy importante. Te aconsejo que le escribas un mensaje corto y sincero. Es mejor que no le reproches nada al principio. Es verdad que a veces la gente necesita tiempo, pero es importante hablar. Ojalá que pronto vuelvan a ser amigos.",
      "explanation": "Valorar o aconsejar a otra persona: subjuntivo (es normal que te sientas). Sin persona concreta: infinitivo (es importante hablar). Verdad o certeza: indicativo (es verdad que necesita)."
     }
    ]
   }
  }
 }
};
