// Synced from cheneygross-afk/lengo:src/lib/lessons/es-redesign/c1-unit1-latam.ts by scripts/sync-content.mjs -- edit it there, not here.
// Generated: Latin American wording for C1 Unit 1. C1_UNIT1_LATAM adds
// accepted answers (papás, carro, celular, departamento, en la noche) next to the
// Spain wording; C1_UNIT1_SWAP makes the Latin American word the main one where
// the lesson showed the Spain word (carro, computadora, celular, refrigerador,
// suéter, mesero, plomero, licencia de manejar, tomar, dólares), keeping the
// Spain answer accepted. It also replaces items that used later grammar (aunque
// + subjunctive, the passive with ser, the conditional perfect) and gives the
// vosotros item an ustedes answer. Content only.
import type { LessonPatch } from "./patch";
export const C1_UNIT1_LATAM: Record<string, { alts?: Record<number, string[]>; checkAlts?: Record<number, Record<number, string[]>> }> = {
 "b1d-pares-si-cuando": {
  "alts": {
   "25": [
    "Cuando hace calor, vamos a la alberca."
   ]
  }
 },
 "b2d-pares-cuando-llego-llegue": {
  "alts": {
   "23": [
    "Cuando tengas hijos, entenderás a tus papás.",
    "Cuando tengas hijos, comprenderás a tus papás.",
    "Cuando tengas hijos, vas a entender a tus papás."
   ]
  }
 },
 "b2d-cadena-unir-oraciones": {
  "alts": {
   "16": [
    "Limpio la casa antes de que vuelvan mis papás.",
    "Limpio la casa antes de que mis papás vuelvan.",
    "Antes de que vuelvan mis papás, limpio la casa.",
    "Antes de que mis papás vuelvan, limpio la casa."
   ]
  }
 },
 "b2d-ronda-antes-de-que": {
  "alts": {
   "18": [
    "Mete la leche en el refrigerador antes de que se estropee.",
    "Pon la leche en el refrigerador antes de que se estropee.",
    "Mete la leche en el refrigerador antes de que se ponga mala.",
    "Pon la leche en el refrigerador antes de que se ponga mala."
   ]
  }
 },
 "b2d-patron-cuando-llegue": {
  "alts": {
   "10": [
    "Cuando apruebe el examen de manejar, te llevo a la playa.",
    "Cuando saque el carné de manejar, te llevaré a la playa.",
    "Cuando apruebe el examen de manejar, te voy a llevar a la playa."
   ]
  }
 },
 "b2d-habla-de-ti-planes": {
  "alts": {
   "9": [
    "Cuando saque el carné de conducir, me compraré un carro de segunda mano.",
    "Cuando saque el carné de manejar, me compraré un coche de segunda mano.",
    "Cuando saque el carné de manejar, me compraré un carro de segunda mano.",
    "Cuando saque el carnet de conducir, me compraré un carro de segunda mano.",
    "Cuando saque el carnet de manejar, me compraré un coche de segunda mano.",
    "Cuando saque el carnet de manejar, me compraré un carro de segunda mano.",
    "Cuando saque el carné de conducir, compraré un carro de segunda mano.",
    "Cuando saque el carné de manejar, compraré un coche de segunda mano.",
    "Cuando saque el carné de manejar, compraré un carro de segunda mano.",
    "Cuando saque el carnet de conducir, compraré un carro de segunda mano.",
    "Cuando saque el carnet de manejar, compraré un coche de segunda mano.",
    "Cuando saque el carnet de manejar, compraré un carro de segunda mano.",
    "Cuando saque la licencia de manejar, me compraré un coche de segunda mano."
   ],
   "10": [
    "En cuanto encuentre departamento, me iré de casa de mis papás.",
    "En cuanto encuentre un departamento, me iré de casa de mis papás.",
    "En cuanto encuentre departamento, me iré de la casa de mis papás.",
    "En cuanto encuentre un apartamento, me iré de casa de mis papás.",
    "En cuanto encuentre un departamento, me iré de la casa de mis papás.",
    "En cuanto encuentre piso, me iré de casa de mis papás.",
    "En cuanto encuentre un piso, me iré de casa de mis papás.",
    "En cuanto encuentre piso, me iré de la casa de mis papás."
   ]
  }
 }
};
export const C1_UNIT1_SWAP: Record<string, LessonPatch> = {
 "b1d-pares-si-cuando": {
  "exercises": {
   "replace": {
    "7": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Cambia la posibilidad a una costumbre: empieza por «Cuando tengo frío,».",
     "source": "Si tengo frío esta noche, me pondré un suéter.",
     "answer": "Cuando tengo frío, me pongo un suéter.",
     "altAnswers": [
      "Cuando tengo frío, me pongo un jersey."
     ],
     "explanation": "Una costumbre se dice con «cuando» y el resultado en presente: me pongo, no «me pondré»."
    },
    "8": {
     "type": "speak",
     "text": "Si tengo frío esta noche, me pondré un suéter.",
     "prompt": "Dilo en español: \"If I'm cold tonight, I'll put on a sweater\"",
     "altAnswers": [
      "Si esta noche tengo frío, me pondré un suéter.",
      "Si tengo frío esta noche, me pondré un jersey.",
      "Si esta noche tengo frío, me pondré un jersey."
     ],
     "explanation": "Una forma de decirlo: «Si tengo frío esta noche, me pondré un suéter». Condición incierta (esta noche) → si."
    },
    "20": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "___ me suben el sueldo este año, me compraré un carro.",
     "answer": "Si",
     "en": "[If] they raise my salary this year, I'll buy a car.",
     "explanation": "No es seguro → si."
    }
   }
  }
 },
 "b2d-pares-cuando-llego-llegue": {
  "exercises": {
   "replace": {
    "20": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Corrige la frase.",
     "source": "Cuando me llame ayer, estaba manejando.",
     "answer": "Cuando me llamó ayer, estaba manejando.",
     "altAnswers": [
      "Cuando me llamó ayer, iba manejando.",
      "Cuando me llamó ayer, estaba conduciendo.",
      "Cuando me llamó ayer, iba conduciendo."
     ],
     "explanation": "«Ayer» es pasado: un hecho ya ocurrido va en indicativo (llamó). El subjuntivo «llame» solo vale para el futuro."
    }
   }
  }
 },
 "b2d-cadena-unir-oraciones": {
  "exercises": {
   "replace": {
    "21": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "Desenchufa la computadora antes de que ___ la tormenta.",
     "answer": "empiece",
     "en": "Unplug the computer before the storm [starts] (tú).",
     "altAnswers": [
      "comience"
     ],
     "explanation": "Antes de que + subjuntivo: empiece, no «empieza»."
    }
   }
  }
 },
 "b2d-ronda-antes-de-que": {
  "exercises": {
   "replace": {
    "0": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "Apaga el horno antes de que se ___ la torta.",
     "answer": "queme",
     "en": "Turn off the oven before the cake [burns].",
     "explanation": "quemar(se) → se queme: present subjunctive (antes de que). Antes de que lleva siempre subjuntivo: queme, no «quema»."
    },
    "13": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "Guarda el documento antes de que se ___ la computadora.",
     "answer": "apague",
     "en": "Save the document before the computer [shuts down].",
     "explanation": "Antes de que + subjuntivo (apague)."
    },
    "18": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "Put (tú) the milk in the fridge before it goes off.",
     "answer": "Mete la leche en el refrigerador antes de que se estropee.",
     "altAnswers": [
      "Pon la leche en el refrigerador antes de que se estropee.",
      "Mete la leche en el frigorífico antes de que se estropee.",
      "Pon la leche en el frigorífico antes de que se estropee.",
      "Pon la leche en el refrigerador antes de que se eche a perder.",
      "Pon la leche en la heladera antes de que se eche a perder.",
      "Mete la leche en el refrigerador antes de que se ponga mala.",
      "Pon la leche en el refrigerador antes de que se ponga mala.",
      "Mete la leche en la nevera antes de que se estropee.",
      "Pon la leche en la nevera antes de que se estropee.",
      "Mete la leche en la nevera antes de que se ponga mala.",
      "Pon la leche en la nevera antes de que se ponga mala."
     ],
     "explanation": "Antes de que + subjuntivo (se estropee)."
    },
    "25": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Transforma en una sola frase con «antes de».",
     "source": "Siempre apaga el celular. Después se duerme.",
     "answer": "Siempre apaga el celular antes de dormirse.",
     "altAnswers": [
      "Antes de dormirse, siempre apaga el celular.",
      "Siempre apaga el celular antes de dormir.",
      "Antes de dormir, siempre apaga el celular.",
      "Siempre apaga el móvil antes de dormirse.",
      "Antes de dormirse, siempre apaga el móvil.",
      "Siempre apaga el móvil antes de dormir.",
      "Antes de dormir, siempre apaga el móvil."
     ],
     "explanation": "Ella apaga y ella se duerme: mismo sujeto → antes de + infinitivo, sin «que» y sin subjuntivo."
    }
   }
  }
 },
 "b2d-elige-para-que-para": {
  "exercises": {
   "replace": {
    "0": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "Me levanto temprano para ___ el tren.",
     "answer": "tomar",
     "altAnswers": [
      "pillar",
      "coger"
     ],
     "en": "I get up early to [catch] the train.",
     "explanation": "tomar → tomar: infinitive (same subject after para). Yo me levanto y yo cojo el tren: mismo sujeto → para + infinitivo."
    },
    "1": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "Te despierto temprano para que ___ el tren.",
     "answer": "cojas",
     "altAnswers": [
      "tomes",
      "pilles"
     ],
     "en": "I wake you up early so that you [catch] the train.",
     "explanation": "tomar → cojas: present subjunctive, tú (para que). Yo despierto, tú coges: sujeto distinto → para que + subjuntivo. Tomar cambia g → j delante de a: cojas."
    },
    "26": {
     "type": "speak",
     "text": "Ahorro para comprarme un carro.",
     "prompt": "Dilo en español: \"I save to buy myself a car\"",
     "explanation": "Una forma de decirlo: «Ahorro para comprarme un carro». yo ahorro, yo compro",
     "altAnswers": [
      "Ahorro para comprarme un coche."
     ]
    }
   }
  },
  "sections": {
   "0": {
    "examples": [
     {
      "es": "Ahorro para comprarme un carro.",
      "en": "I save to buy myself a car. (yo ahorro, yo compro)"
     },
     {
      "es": "Ahorro para que mis hijos estudien.",
      "en": "I save so that my children can study. (yo ahorro, ellos estudian)"
     },
     {
      "es": "Riego las plantas para que no se sequen.",
      "en": "I water the plants so they don't dry out. (el sujeto de secarse son las plantas)"
     }
    ]
   }
  }
 },
 "subjunctive-mastery-review-1": {
  "exercises": {
   "replace": {
    "5": {
     "type": "speak",
     "text": "Dudo que el plomero venga hoy.",
     "prompt": "Dilo en español: \"I doubt the plumber will come today\"",
     "altAnswers": [
      "Dudo que venga hoy el plomero.",
      "Dudo que hoy venga el plomero.",
      "Dudo que el fontanero venga hoy.",
      "Dudo que venga hoy el fontanero.",
      "Dudo que hoy venga el fontanero."
     ],
     "explanation": "Una forma de decirlo: «Dudo que el plomero venga hoy». La visita es un hecho todavía por venir: presente de subjuntivo tras un verbo de duda."
    },
    "6": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "I doubt the plumber has come already.",
     "answer": "Dudo que el plomero haya venido ya.",
     "altAnswers": [
      "Dudo que el plomero ya haya venido.",
      "Dudo que el fontanero haya venido ya.",
      "Dudo que el fontanero ya haya venido."
     ],
     "explanation": "Ahora se duda de un hecho que, de ocurrir, estaría ya cerrado: perfecto de subjuntivo."
    }
   }
  }
 },
 "b2d-rep-ser-estar-dictado-final": {
  "exercises": {
   "replace": {
    "15": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "That waiter is very rude, but tonight he is unusually polite.",
     "answer": "Ese mesero es muy grosero, pero esta noche está inusualmente amable.",
     "altAnswers": [
      "Ese mesero es muy grosero, pero esta noche está inusualmente educado.",
      "Ese mesero es muy grosero, pero esta noche está inusualmente cortés.",
      "Ese mesero es muy maleducado, pero esta noche está inusualmente educado.",
      "Ese mesero es muy maleducado, pero esta noche está inusualmente cortés.",
      "Ese mesero es muy maleducado, pero esta noche está inusualmente amable.",
      "Ese mesero es muy grosero, pero esta noche está inusualmente simpático.",
      "Ese camarero es muy grosero, pero esta noche está inusualmente amable.",
      "Ese camarero es muy grosero, pero esta noche está inusualmente educado.",
      "Ese camarero es muy grosero, pero esta noche está inusualmente cortés.",
      "Ese camarero es muy maleducado, pero esta noche está inusualmente educado.",
      "Ese camarero es muy maleducado, pero esta noche está inusualmente cortés.",
      "Ese camarero es muy maleducado, pero esta noche está inusualmente amable.",
      "Ese camarero es muy grosero, pero esta noche está inusualmente simpático."
     ],
     "explanation": "Ser describe su carácter habitual; estar describe cómo se comporta ahora."
    },
    "22": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "Is the cake for Luis's birthday? No, it's for my mother. (tú)",
     "answer": "¿La torta es para el cumpleaños de Luis? No, es para mi madre.",
     "altAnswers": [
      "¿El pastel es para el cumpleaños de Luis? No, es para mi madre.",
      "¿La torta es para el cumpleaños de Luis? No, es para mi mamá.",
      "¿La tarta es para el cumpleaños de Luis? No, es para mi madre.",
      "¿La tarta es para el cumpleaños de Luis? No, es para mi mamá."
     ],
     "explanation": "Ser expresa destino o finalidad (es para)."
    },
    "24": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "The meeting room is on the second floor; the meeting is at ten.",
     "answer": "La sala de reuniones está en el segundo piso; la reunión es a las diez.",
     "altAnswers": [
      "La sala de reuniones está en la segunda planta; la reunión es a las diez.",
      "La sala de juntas está en el segundo piso; la reunión es a las diez.",
      "La sala de reuniones está en el segundo piso; la reunión es a las diez.",
      "La sala de juntas está en el segundo piso; la reunión es a las diez."
     ],
     "explanation": "Ubicación del lugar con estar; hora del evento con ser."
    }
   }
  }
 },
 "b2d-cuento-texto-formal": {
  "exercises": {
   "replace": {
    "20": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "The prizes, which the minister (a woman) will hand out, are worth ten thousand dollars each.",
     "answer": "Los premios, que entregará la ministra, valen diez mil dólares cada uno.",
     "altAnswers": [
      "Los premios, los cuales entregará la ministra, valen diez mil dólares cada uno.",
      "Los premios, que entregará la ministra, están dotados con diez mil dólares cada uno.",
      "Los premios, los cuales entregará la ministra, están dotados con diez mil dólares cada uno.",
      "Los premios, que va a entregar la ministra, valen diez mil dólares cada uno.",
      "Los premios, que entregará la ministra, valen diez mil euros cada uno.",
      "Los premios, los cuales entregará la ministra, valen diez mil euros cada uno."
     ],
     "explanation": "Relativa explicativa entre comas: que o los cuales (concuerda con premios)."
    },
    "10": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Transforma las dos frases en una sola con cuyo, para la nota de prensa.",
     "source": "El jurado anunciará al ganador el viernes. El público eligió a sus miembros.",
     "answer": "El jurado, cuyos miembros eligió el público, anunciará al ganador el viernes.",
     "altAnswers": [
      "El jurado, a cuyos miembros eligió el público, anunciará al ganador el viernes.",
      "El jurado, cuyos miembros los eligió el público, anunciará al ganador el viernes."
     ],
     "explanation": "Sus miembros → cuyos miembros: cuyo concuerda con lo poseído (miembros, masculino plural) y la relativa va entre comas detrás de jurado."
    },
    "12": {
     "type": "multiple-choice",
     "question": "¿Qué completa «El teatro, ___ fachada se restauró en 2020, abre hoy»?",
     "options": [
      "cuya",
      "cuyo",
      "la cual",
      "el cual"
     ],
     "correctIndex": 0,
     "explanation": "Cuyo concuerda con lo poseído: fachada (femenino singular) → cuya.",
     "optionNotes": [
      "",
      "Cuyo concordaría con un sustantivo masculino.",
      "La cual no expresa posesión.",
      "El cual no expresa posesión."
     ]
    },
    "19": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "Los patrocinadores, sin ___ el evento no sería posible, recibirán un homenaje.",
     "answer": "los cuales",
     "altAnswers": [
      "los que",
      "quienes"
     ],
     "en": "The sponsors, [without whom] the event wouldn't be possible, will be honored.",
     "explanation": "Tras una preposición (sin), el cual concuerda con el antecedente: los patrocinadores → los cuales."
    },
    "21": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "The statue, whose origin remains unknown, was found in the river.",
     "answer": "La estatua, cuyo origen sigue siendo desconocido, se encontró en el río.",
     "altAnswers": [
      "La estatua, cuyo origen se desconoce, se encontró en el río.",
      "La estatua, cuyo origen sigue siendo desconocido, apareció en el río.",
      "La estatua, cuyo origen se desconoce, apareció en el río.",
      "La estatua, cuyo origen sigue siendo un misterio, se encontró en el río.",
      "La estatua, cuyo origen sigue siendo desconocido, fue hallada en el río.",
      "La estatua, cuyo origen se desconoce, fue hallada en el río.",
      "La estatua, cuyo origen sigue siendo desconocido, fue encontrada en el río."
     ],
     "explanation": "Cuyo concuerda con origen (masculino singular): cuyo origen."
    }
   }
  }
 },
 "b2d-patron-cuando-llegue": {
  "exercises": {
   "replace": {
    "10": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "When I pass my driving test, I'll take you (tú) to the beach.",
     "answer": "Cuando apruebe el examen de manejo, te llevaré a la playa.",
     "altAnswers": [
      "Cuando apruebe el examen de manejo, te llevo a la playa.",
      "Cuando apruebe el examen de manejar, te llevaré a la playa.",
      "Cuando saque la licencia de manejar, te llevaré a la playa.",
      "Cuando saque el carné, te llevaré a la playa.",
      "Cuando apruebe el examen de manejo, te voy a llevar a la playa.",
      "Cuando apruebe el examen de conducir, te llevaré a la playa.",
      "Cuando apruebe el examen de conducir, te llevo a la playa.",
      "Cuando saque el carné de conducir, te llevaré a la playa.",
      "Cuando apruebe el examen de conducir, te voy a llevar a la playa."
     ],
     "explanation": "Futuro → cuando + subjuntivo (apruebe), nunca «cuando aprobaré»."
    },
    "2": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "Cuando ___ a Madrid, visiten el Retiro.",
     "answer": "vayan",
     "altAnswers": [
      "vayáis"
     ],
     "en": "When you [go] to Madrid, visit the Retiro (ustedes).",
     "explanation": "ir → vayan: presente de subjuntivo, ustedes. Un viaje futuro con cuando → subjuntivo."
    }
   }
  }
 },
 "b2d-habla-de-ti-planes": {
  "exercises": {
   "replace": {
    "9": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "When I get my driving licence, I'll buy a second-hand car.",
     "answer": "Cuando saque la licencia de manejar, me compraré un carro de segunda mano.",
     "altAnswers": [
      "Cuando saque la licencia de manejar, compraré un carro de segunda mano.",
      "Cuando saque la licencia de manejar, me compraré un carro de segunda mano.",
      "Cuando saque el carné de conducir, me compraré un coche de segunda mano.",
      "Cuando saque el carnet de conducir, me compraré un coche de segunda mano.",
      "Cuando saque el carné de conducir, compraré un coche de segunda mano.",
      "Cuando saque el carnet de conducir, compraré un coche de segunda mano.",
      "Cuando saque la licencia de conducir, me compraré un coche de segunda mano.",
      "Cuando saque la licencia de conducir, me compraré un carro de segunda mano."
     ],
     "explanation": "Cuando + futuro → subjuntivo: saque (c → qu); no «cuando sacaré»."
    },
    "10": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "As soon as I find an apartment, I'll move out of my parents' house.",
     "answer": "En cuanto encuentre departamento, me iré de casa de mis padres.",
     "altAnswers": [
      "En cuanto encuentre un departamento, me iré de casa de mis padres.",
      "En cuanto encuentre departamento, me iré de la casa de mis padres.",
      "En cuanto encuentre un apartamento, me iré de casa de mis padres.",
      "En cuanto encuentre un departamento, me iré de la casa de mis padres.",
      "En cuanto encuentre piso, me iré de casa de mis padres.",
      "En cuanto encuentre un piso, me iré de casa de mis padres.",
      "En cuanto encuentre piso, me iré de la casa de mis padres."
     ],
     "explanation": "En cuanto + futuro → subjuntivo: encuentre."
    },
    "17": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "After my sister gets married, I'll have the apartment to myself (man speaking).",
     "answer": "Después de que mi hermana se case, tendré el departamento para mí solo.",
     "altAnswers": [
      "Después de que se case mi hermana, tendré el departamento para mí solo.",
      "Después de que mi hermana se case, tendré el piso para mí solo.",
      "Después de que se case mi hermana, tendré el piso para mí solo."
     ],
     "explanation": "Después de que + futuro → subjuntivo: se case."
    },
    "22": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "Voy a ahorrar hasta que ___ suficiente para la entrada de un departamento.",
     "answer": "tenga",
     "en": "I'm going to save until I [have] enough for the deposit on an apartment.",
     "explanation": "Hasta que + futuro → subjuntivo: tenga."
    }
   }
  }
 },
 "b1r-challenge-dialogue-marathon": {
  "exercises": {
   "replace": {
    "1": {
     "type": "matching",
     "instructions": "Relaciona cada frase con su respuesta.",
     "pairs": [
      {
       "left": "¿Has visto mis lentes?",
       "right": "Sí, los he dejado en la mesa."
      },
      {
       "left": "¿Me prestas tu carro?",
       "right": "Sí, te lo presto."
      },
      {
       "left": "¿Podrías ayudarme?",
       "right": "Claro, ¿qué necesitas?"
      },
      {
       "left": "Me han despedido.",
       "right": "¡Cuánto siento que te hayan despedido!"
      }
     ],
     "explanation": "Cada respuesta retoma la frase: los lentes → los he dejado; tu carro → te lo presto; ¿podrías ayudarme? → ¿qué necesitas?; y para una mala noticia, sentir que + perfecto de subjuntivo (te hayan despedido)."
    }
   }
  }
 },
 "subjunctive-adverbial-clauses-1": {
  "exercises": {
   "replace": {
    "2": {
     "type": "speak",
     "text": "Esperaré hasta que me llames.",
     "prompt": "Dilo en español: \"I'll wait until you call me\"",
     "altAnswers": [
      "Voy a esperar hasta que me llames.",
      "Te esperaré hasta que me llames."
     ],
     "explanation": "Una forma de decirlo: «Esperaré hasta que me llames.». Hasta que + subjuntivo para algo que todavía no ha pasado: llames."
    },
    "11": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "I won't change jobs until they offer me more money.",
     "answer": "No cambiaré de trabajo hasta que me ofrezcan más dinero.",
     "altAnswers": [
      "No voy a cambiar de trabajo hasta que me ofrezcan más dinero.",
      "No cambiaré de empleo hasta que me ofrezcan más dinero.",
      "No voy a cambiar de empleo hasta que me ofrezcan más dinero."
     ],
     "explanation": "Hasta que + subjuntivo: la oferta todavía no ha llegado (ofrezcan)."
    }
   }
  }
 }
};
