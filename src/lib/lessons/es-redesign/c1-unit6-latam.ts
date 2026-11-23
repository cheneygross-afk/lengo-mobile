// Synced from cheneygross-afk/lengo:src/lib/lessons/es-redesign/c1-unit6-latam.ts by scripts/sync-content.mjs -- edit it there, not here.
// Generated: Latin American wording for C1 Unit 6. C1_UNIT6_LATAM adds
// accepted answers (papás, carro, celular, departamento, en la noche) next to the
// Spain wording; C1_UNIT6_SWAP makes the Latin American word the main one where
// the lesson showed the Spain word (carro, celular, departamento, mesero,
// estacionar), keeping the Spain answer accepted. The regional-words and market
// lessons keep their Spain words on purpose. Content only.
import type { LessonPatch } from "./patch";
export const C1_UNIT6_LATAM: Record<string, { alts?: Record<number, string[]>; checkAlts?: Record<number, Record<number, string[]>> }> = {
 "b2d-rep-estilo-indirecto-preguntas": {
  "alts": {
   "6": [
    "Me preguntó dónde había aparcado el carro."
   ]
  }
 },
 "c1r-error-hunt-se-agreement-part-2": {
  "alts": {
   "2": [
    "Se avisó a los inquilinos del nuevo precio de la renta.",
    "Se informó a los inquilinos del nuevo precio de la renta."
   ]
  }
 },
 "c1r-contrast-ser-estar-participle-c1": {
  "alts": {
   "4": [
    "La alberca estaba cerrada por mantenimiento."
   ]
  }
 },
 "b2d-rep-imperfecto-corrige": {
  "alts": {
   "0": [
    "Mis papás querían que trabajara en su tienda.",
    "Mis papás querían que trabajase en su tienda."
   ]
  }
 },
 "b2d-rep-imperfecto-secuencia": {
  "alts": {
   "10": [
    "Mis papás querían que encontrara un trabajo estable.",
    "Mis papás querían que encontrase un trabajo estable."
   ]
  }
 },
 "passive-voice-possessive-pronouns-drill-1": {
  "alts": {
   "4": [
    "Las entradas fueron compradas por mis papás.",
    "Los boletos fueron comprados por mis papás.",
    "Los billetes fueron comprados por mis papás."
   ]
  }
 },
 "passive-voice-possessive-pronouns-drill-1-part-2": {
  "alts": {
   "11": [
    "Los cuadros fueron robados en la noche y fueron encontrados por la policía una semana después.",
    "Los cuadros fueron robados en la noche y fueron encontrados por la policía una semana más tarde."
   ]
  }
 },
 "b1r-tema-voluntariado-animales": {
  "alts": {
   "23": [
    "Pasea a los perros en la mañana y no los sueltes."
   ]
  }
 }
};
export const C1_UNIT6_SWAP: Record<string, LessonPatch> = {
 "b2d-corrige-indirecto-mandatos-part-2": {
  "exercises": {
   "replace": {
    "8": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "The policeman asked us not to move the car.",
     "answer": "El policía nos pidió que no moviéramos el carro.",
     "altAnswers": [
      "El policía nos pidió que no moviéramos el auto.",
      "El policía nos pidió que no moviésemos el carro.",
      "El policía nos pidió que no moviéramos el coche.",
      "El policía nos pidió que no moviésemos el coche."
     ],
     "explanation": "Pedir que + imperfecto de subjuntivo; *que no movimos* sería un error de modo."
    }
   }
  }
 },
 "b2d-preguntas-indirectas": {
  "exercises": {
   "replace": {
    "26": {
     "type": "multiple-choice",
     "question": "«¿Dónde dejaste el carro?» → Me preguntó ___.",
     "options": [
      "donde dejaste el carro",
      "dónde había dejado el carro",
      "si dónde había dejado el carro",
      "que había dejado el carro"
     ],
     "correctIndex": 1,
     "explanation": "Interrogativo con tilde, sin «si», y pluscuamperfecto."
    },
    "10": {
     "type": "speak",
     "text": "Nos preguntaron cuánto tiempo llevábamos viviendo en España.",
     "prompt": "Dilo en español: \"They asked us how long we had been living in Spain\"",
     "altAnswers": [
      "Nos preguntaron cuánto tiempo hacía que vivíamos en España.",
      "Nos preguntaron cuánto tiempo habíamos vivido en España.",
      "Nos preguntaron desde cuándo vivíamos en España."
     ],
     "explanation": "Una forma de decirlo: «Nos preguntaron cuánto tiempo llevábamos viviendo en España». «¿Cuánto tiempo llevan…?» → cuánto tiempo llevábamos."
    }
   }
  }
 },
 "b2d-corrige-estilo-indirecto": {
  "exercises": {
   "replace": {
    "11": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "Valeria told me she had sold her apartment the month before.",
     "answer": "Valeria me dijo que había vendido su departamento el mes anterior.",
     "altAnswers": [
      "Valeria me dijo que había vendido su apartamento el mes anterior.",
      "Valeria me dijo que el mes anterior había vendido su departamento.",
      "Valeria me dijo que había vendido su piso el mes anterior.",
      "Valeria me dijo que el mes anterior había vendido su piso."
     ],
     "explanation": "«El mes pasado vendí» → había vendido el mes anterior."
    },
    "16": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "Martín asked me if I could lend him my car.",
     "answer": "Martín me preguntó si podía prestarle mi carro.",
     "altAnswers": [
      "Martín me preguntó si le podía prestar mi carro.",
      "Martín me preguntó si podía prestarle el carro.",
      "Martín me preguntó si podía prestarle mi coche.",
      "Martín me preguntó si le podía prestar mi coche.",
      "Martín me preguntó si podía prestarle el coche."
     ],
     "explanation": "Pregunta sí/no → si; puedes → podía."
    },
    "19": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "Me preguntó ___ había estacionado.",
     "answer": "dónde",
     "en": "She asked me [where] I had parked.",
     "explanation": "El interrogativo mantiene la tilde; «estacionar» no es un verbo de movimiento hacia un destino, así que no lleva «adónde»."
    }
   }
  }
 },
 "b2d-rep-estilo-indirecto-preguntas": {
  "exercises": {
   "replace": {
    "6": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Corrige la frase.",
     "source": "Me preguntó dónde haya aparcado el carro.",
     "answer": "Me preguntó dónde había estacionado el carro.",
     "altAnswers": [
      "Me preguntó dónde había dejado el carro.",
      "Me preguntó dónde había aparcado el coche.",
      "Me preguntó dónde había dejado el coche."
     ],
     "explanation": "La pregunta indirecta va en indicativo, nunca en subjuntivo: dónde había estacionado (pluscuamperfecto, porque estacionar es anterior a la pregunta)."
    },
    "19": {
     "type": "speak",
     "text": "Le pregunté al mesero cuánto costaba el menú.",
     "prompt": "Dilo en español: \"I asked the waiter how much the set menu cost\"",
     "altAnswers": [
      "Pregunté al mesero cuánto costaba el menú.",
      "Le pregunté a la mesera cuánto costaba el menú.",
      "Le pregunté al camarero cuánto costaba el menú.",
      "Pregunté al camarero cuánto costaba el menú.",
      "Le pregunté a la camarera cuánto costaba el menú."
     ],
     "explanation": "Una forma de decirlo: «Le pregunté al mesero cuánto costaba el menú». Cuánto con tilde + imperfecto (costaba)."
    }
   }
  },
  "sections": {
   "0": {
    "body": [
     "Recuerda la regla: una pregunta de sí o no se cuenta con si (¿Tienes carro? → Me preguntó si tenía carro). Una pregunta con interrogativo lo conserva, con su tilde (¿Dónde vives? → Me preguntó dónde vivía). Con preguntó en pasado, los tiempos retroceden: presente → imperfecto, futuro → condicional, perfecto e indefinido → pluscuamperfecto.",
     "¿Por qué? Porque cuentas la pregunta desde un momento posterior: lo que era presente para quien preguntaba ya es pasado para ti. El modo no cambia: la pregunta indirecta sigue en indicativo, nunca en subjuntivo."
    ]
   }
  }
 },
 "b2r-mission-gossip": {
  "sections": {
   "0": {
    "body": [
     "Recuerda la regla: al contar lo que te dijeron, los tiempos retroceden: presente → imperfecto, pretérito → pluscuamperfecto, futuro → condicional. Las órdenes y ruegos pasan a que + imperfecto de subjuntivo (me pidió que la llamara). Las preguntas de sí o no se cuentan con «si» (Me preguntó si tenía tiempo) y las demás con el interrogativo con tilde (Me preguntó dónde vivía).",
     "Tu misión: contar chismes a tus amigos sin mezclar quién dijo qué. Por eso cambian también los pronombres y posesivos: «mi hermana» de Marta es «su hermana» cuando lo cuentas tú."
    ]
   }
  }
 },
 "c1r-error-hunt-se-agreement": {
  "sections": {
   "0": {
    "body": [
     "Recuerda la regla: mira lo que va detrás del verbo. Si es una cosa (o personas indeterminadas) sin «a», es el sujeto de una pasiva refleja y el verbo concuerda con ella: Se venden departamentos, Se necesitan voluntarios. Si es una persona con «a», ya no es sujeto sino complemento: el se es impersonal y el verbo se queda en singular, porque no tiene con quién concordar: Se busca a los culpables. El error típico mezcla las dos construcciones."
    ],
    "examples": [
     {
      "es": "✗ Se vende departamentos. → ✓ Se venden departamentos.",
      "en": "Apartments for sale."
     },
     {
      "es": "✗ Se buscan a los testigos. → ✓ Se busca a los testigos.",
      "en": "The witnesses are being sought."
     }
    ]
   }
  }
 },
 "c1r-error-hunt-se-agreement-part-2": {
  "exercises": {
   "replace": {
    "1": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "Used cars are sold on this street.",
     "answer": "En esta calle se venden carros de segunda mano.",
     "altAnswers": [
      "En esta calle se venden carros usados.",
      "En esta calle se venden autos usados.",
      "Se venden carros de segunda mano en esta calle.",
      "En esta calle se venden coches de segunda mano.",
      "En esta calle se venden coches usados.",
      "Se venden coches de segunda mano en esta calle."
     ],
     "explanation": "El sujeto paciente «carros» es plural, así que el verbo también. Error típico: «se vende carros»."
    },
    "15": {
     "type": "speak",
     "text": "En esta calle se venden carros de segunda mano.",
     "prompt": "Dilo en español: \"Used cars are sold on this street\"",
     "altAnswers": [
      "En esta calle se venden carros usados.",
      "En esta calle se venden autos usados.",
      "Se venden carros de segunda mano en esta calle.",
      "En esta calle se venden coches de segunda mano.",
      "En esta calle se venden coches usados.",
      "Se venden coches de segunda mano en esta calle."
     ],
     "explanation": "Una forma de decirlo: «En esta calle se venden carros de segunda mano». El sujeto paciente «carros» es plural, así que el verbo también. Error típico: «se vende carros»."
    }
   }
  },
  "sections": {
   "0": {
    "examples": [
     {
      "es": "✗ Se vende departamentos. → ✓ Se venden departamentos.",
      "en": "Apartments for sale."
     }
    ]
   }
  }
 },
 "c1r-contrast-ser-estar-participle-c1": {
  "exercises": {
   "replace": {
    "7": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Corrige la frase.",
     "source": "¡La cena es servida!",
     "answer": "¡La cena está servida!",
     "altAnswers": [
      "¡Está servida la cena!"
     ],
     "explanation": "Lo que se anuncia es el resultado (la cena ya está en la mesa): estar + participio. «Es servida» sería una acción habitual con agente («es servida por los meseros»)."
    }
   }
  }
 },
 "c1r-contrast-se-functions": {
  "exercises": {
   "replace": {
    "0": {
     "type": "matching",
     "instructions": "Relaciona cada frase con el tipo de se.",
     "pairs": [
      {
       "left": "Se venden carros usados.",
       "right": "pasivo"
      },
      {
       "left": "Se abrazaron al despedirse.",
       "right": "recíproco"
      },
      {
       "left": "Se me olvidaron las llaves.",
       "right": "accidental"
      },
      {
       "left": "Se duchó con agua fría.",
       "right": "reflexivo"
      }
     ],
     "explanation": "Pasivo: la cosa es sujeto (se venden carros); recíproco: unos a otros (se abrazaron); accidental: se + me/le + cosa-sujeto (se me olvidaron); reflexivo: sobre uno mismo (se duchó)."
    },
    "1": {
     "type": "fill-blank",
     "prompt": "Completa.",
     "sentence": "A mis padres ___ les estropeó el carro en el viaje.",
     "answer": "se",
     "explanation": "Se + le(s) + verbo: accidente involuntario."
    },
    "11": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Corrige la frase.",
     "source": "Mi abuelo niega a usar el celular porque no confía en la tecnología.",
     "answer": "Mi abuelo se niega a usar el celular porque no confía en la tecnología.",
     "explanation": "Con el sentido de «rechazar hacer algo», el verbo es pronominal: «negarse a + infinitivo». Sin «se», «negar» significa «decir que algo no es cierto» y no rige «a».",
     "altAnswers": [
      "Mi abuelo se niega a usar el móvil porque no confía en la tecnología."
     ]
    },
    "14": {
     "type": "multiple-choice",
     "question": "¿Qué frase es impersonal, sin sujeto concreto y con el verbo siempre en singular?",
     "options": [
      "Se vive mejor en el campo.",
      "Se venden departamentos baratos.",
      "Se lavó las manos.",
      "Se me perdió el pasaporte."
     ],
     "correctIndex": 0,
     "explanation": "«Se vive mejor» no tiene sujeto y el verbo es invariable; «se venden» es pasiva refleja, «se lavó» reflexivo y «se me perdió» accidental."
    }
   }
  },
  "sections": {
   "0": {
    "body": [
     "Recuerda la regla: el mismo pronombre hace siete trabajos, y lo que los distingue es quién hace qué. Reflexivo: el sujeto actúa sobre sí mismo (se lava). Recíproco: unos sobre otros (se abrazan). Pronominal: el se es parte del verbo (se arrepiente, se atreve). Pasivo: la cosa es sujeto y el verbo concuerda con ella (se venden departamentos). Impersonal: no hay sujeto y el verbo queda en singular (se vive bien, se busca a los testigos). Variante de le: le/les ante lo/la se convierte en se (se lo di). Accidental: la cosa es sujeto y la persona solo la sufre (se me rompió)."
    ]
   }
  }
 },
 "c1r-contrast-se-functions-part-2": {
  "exercises": {
   "replace": {
    "7": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Cambia «el arroz» por «las papas».",
     "source": "Se le quemó el arroz porque estaba hablando por teléfono.",
     "answer": "Se le quemaron las papas porque estaba hablando por teléfono.",
     "explanation": "En el se accidental el verbo concuerda con la cosa, que es el sujeto: con «las papas» pasa a plural, «se le quemaron». «Le» (la persona afectada) no cambia.",
     "altAnswers": [
      "Se le quemaron las patatas porque estaba hablando por teléfono."
     ]
    },
    "14": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "Con las prisas ___ las llaves dentro del carro.",
     "answer": "se me olvidaron",
     "en": "In the rush [I left] the keys in the car (by accident).",
     "altAnswers": [
      "se me quedaron"
     ],
     "explanation": "Se accidental: la cosa («las llaves», plural) es el sujeto y el verbo concuerda con ella; «me» marca a la persona afectada y presenta el olvido como involuntario."
    }
   }
  }
 },
 "c1r-extra-ser-estar-passive-result": {
  "exercises": {
   "replace": {
    "18": {
     "type": "speak",
     "text": "Cuando volví, el carro ya estaba arreglado.",
     "prompt": "Dilo en español: \"When I came back, the car was already fixed\"",
     "explanation": "Una forma de decirlo: «Cuando volví, el carro ya estaba arreglado». estado al volver → estar",
     "altAnswers": [
      "Cuando volví, el coche ya estaba arreglado."
     ]
    }
   }
  },
  "sections": {
   "0": {
    "examples": [
     {
      "es": "La carta fue escrita por el propio rey.",
      "en": "The letter was written by the king himself. (acción con agente → ser)"
     },
     {
      "es": "La carta está escrita a mano.",
      "en": "The letter is handwritten. (cómo ha quedado → estar)"
     },
     {
      "es": "Cuando volví, el carro ya estaba arreglado.",
      "en": "When I came back, the car was already fixed. (estado al volver → estar)"
     },
     {
      "es": "El carro fue arreglado en un taller del barrio.",
      "en": "The car was repaired at a local garage. (el suceso → ser)"
     }
    ]
   }
  }
 },
 "passive-voice-se-1": {
  "exercises": {
   "replace": {
    "12": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "You can't use your phone in the library. (impersonal)",
     "answer": "No se puede usar el celular en la biblioteca.",
     "altAnswers": [
      "En la biblioteca no se puede usar el celular.",
      "No se puede usar el teléfono en la biblioteca.",
      "En la biblioteca no se puede usar el teléfono.",
      "No se puede usar el móvil en la biblioteca.",
      "En la biblioteca no se puede usar el móvil."
     ],
     "explanation": "Se impersonal con «poder» + infinitivo: «no se puede». El verbo va en singular porque lo que sigue es una acción (usar), no un sujeto plural."
    },
    "18": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Corrige la frase.",
     "source": "Se busca meseros con experiencia.",
     "answer": "Se buscan meseros con experiencia.",
     "altAnswers": [
      "Se buscan camareros con experiencia."
     ],
     "explanation": "En el se pasivo el sustantivo manda: «meseros» es plural, así que se buscan. Fíjate en lo que se busca, no en quien busca."
    }
   }
  }
 },
 "b2d-rep-si-dictado": {
  "exercises": {
   "replace": {
    "8": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Cambia a irreal de presente: el departamento es pequeño y no vamos a mudarnos.",
     "source": "Si tenemos más espacio, adoptaremos otro perro.",
     "answer": "Si tuviéramos más espacio, adoptaríamos otro perro.",
     "altAnswers": [
      "Si tuviésemos más espacio, adoptaríamos otro perro."
     ],
     "explanation": "De real a irreal de presente: tenemos → tuviéramos (con tilde) y adoptaremos → adoptaríamos."
    },
    "11": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "If the train were faster, I wouldn't need a car.",
     "answer": "Si el tren fuera más rápido, no necesitaría carro.",
     "altAnswers": [
      "Si el tren fuera más rápido, no necesitaría un carro.",
      "Si el tren fuera más rápido, no necesitaría auto.",
      "Si el tren fuera más rápido, no necesitaría coche.",
      "Si el tren fuera más rápido, no necesitaría un coche."
     ],
     "explanation": "Irreal de presente con ser: fuera."
    },
    "19": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "Si ___ el autobús, habríamos llegado a tiempo.",
     "answer": "hubiéramos tomado",
     "en": "If we [had caught] the bus, we would have arrived on time.",
     "altAnswers": [
      "hubiésemos tomado",
      "hubiéramos agarrado",
      "hubiéramos cogido",
      "hubiésemos cogido"
     ],
     "explanation": "Irreal de pasado → pluscuamperfecto de subjuntivo."
    }
   }
  }
 },
 "b2d-rep-imperfecto-secuencia": {
  "exercises": {
   "replace": {
    "11": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "The teacher told us to turn off our phones.",
     "answer": "El profesor nos dijo que apagáramos los celulares.",
     "altAnswers": [
      "La profesora nos dijo que apagáramos los celulares.",
      "El profesor nos dijo que apagáramos los teléfonos.",
      "El profesor nos dijo que apagáramos los móviles.",
      "La profesora nos dijo que apagáramos los móviles."
     ],
     "explanation": "«Decir que» como orden lleva subjuntivo; en pasado, «apagáramos». Con indicativo («apagábamos») sería solo información."
    },
    "12": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "I was looking for an apartment that had a terrace.",
     "answer": "Buscaba un departamento que tuviera terraza.",
     "altAnswers": [
      "Buscaba un apartamento que tuviera terraza.",
      "Estaba buscando un departamento que tuviera terraza.",
      "Buscaba un departamento que tuviera una terraza.",
      "Buscaba un piso que tuviera terraza.",
      "Estaba buscando un piso que tuviera terraza.",
      "Buscaba un piso que tuviera una terraza."
     ],
     "explanation": "Antecedente desconocido → subjuntivo; con el verbo en pasado, «tuviera», no «tenga»."
    },
    "28": {
     "type": "speak",
     "text": "El profesor nos dijo que apagáramos los celulares.",
     "prompt": "Dilo en español: \"The teacher told us to turn off our phones\"",
     "altAnswers": [
      "La profesora nos dijo que apagáramos los celulares.",
      "El profesor nos dijo que apagáramos los teléfonos.",
      "El profesor nos dijo que apagáramos los móviles.",
      "La profesora nos dijo que apagáramos los móviles."
     ],
     "explanation": "Una forma de decirlo: «El profesor nos dijo que apagáramos los celulares». «Decir que» como orden lleva subjuntivo; en pasado, «apagáramos». Con indicativo («apagábamos») sería solo información."
    }
   }
  }
 },
 "passive-voice-possessive-pronouns-drill-1-part-2": {
  "exercises": {
   "replace": {
    "13": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Corrige la frase.",
     "source": "Se vende departamentos en el centro.",
     "answer": "Se venden departamentos en el centro.",
     "altAnswers": [
      "En el centro se venden departamentos.",
      "Se venden pisos en el centro.",
      "En el centro se venden pisos."
     ],
     "explanation": "En la pasiva refleja, «departamentos» es el sujeto gramatical: verbo en plural, se venden."
    }
   }
  }
 },
 "passive-voice-possessive-pronouns-drill-2": {
  "exercises": {
   "replace": {
    "12": {
     "type": "speak",
     "text": "Se necesitan meseros.",
     "prompt": "Dilo en español: \"Waiters are needed\"",
     "explanation": "Una forma de decirlo: «Se necesitan meseros». Otra forma correcta también vale: comprueba primero el significado y después la pronunciación.",
     "altAnswers": [
      "Se necesitan camareros."
     ]
    }
   }
  },
  "sections": {
   "0": {
    "body": [
     "Recuerda la regla: con 'se' + verbo, mira si hay un sustantivo que recibe la acción. Si lo hay, ese sustantivo es el sujeto gramatical y el verbo concuerda con él (pasiva refleja: 'se necesita un mesero', 'se necesitan meseros'). Si no hay ningún sustantivo, o lo que sigue es una persona con 'a' o un adverbio, el 'se' es impersonal y el verbo va siempre en singular ('Se trabaja mucho aquí', 'Se vive bien').",
     "Distingue la pasiva refleja, donde el sustantivo es el sujeto gramatical, del 'se' impersonal, donde no hay sujeto expreso y el verbo va siempre en singular: 'Se trabaja mucho aquí'."
    ],
    "examples": [
     {
      "es": "Se necesitan meseros.",
      "en": "Waiters are needed."
     },
     {
      "es": "Se vive bien en este barrio.",
      "en": "One lives well in this neighborhood."
     }
    ],
    "check": [
     {
      "type": "multiple-choice",
      "question": "¿Qué tipo de 'se' aparece en 'Se buscan meseros'?",
      "options": [
       "Se impersonal",
       "Se pasivo (pasiva refleja)",
       "Se reflexivo",
       "Se recíproco"
      ],
      "correctIndex": 1,
      "explanation": "Es pasiva refleja: «meseros» es el sujeto gramatical y el verbo concuerda en plural, se buscan. El se impersonal va siempre en singular, y no es reflexivo ni recíproco porque nadie se busca a sí mismo."
     },
     {
      "type": "multi-select",
      "question": "Selecciona las oraciones que usan el 'se' impersonal (sin sujeto expreso, verbo siempre en singular).",
      "options": [
       "Se vive bien en este pueblo.",
       "Se venden departamentos nuevos.",
       "Se come temprano en España.",
       "Se necesitan voluntarios."
      ],
      "correctIndexes": [
       0,
       2
      ],
      "explanation": "'Se vive' y 'se come' son impersonales: no hay sujeto y el verbo queda en singular. 'Se venden departamentos' y 'se necesitan voluntarios' son pasivas reflejas porque el sustantivo plural concuerda con el verbo."
     }
    ]
   },
   "1": {
    "examples": [
     {
      "es": "Estas llaves son tuyas.",
      "en": "These keys are yours."
     },
     {
      "es": "El carro rojo es nuestro.",
      "en": "The red car is ours."
     }
    ]
   }
  }
 },
 "passive-voice-possessive-pronouns-drill-2-part-2": {
  "exercises": {
   "replace": {
    "5": {
     "type": "multiple-choice",
     "question": "¿Cuál usa el se impersonal?",
     "options": [
      "Se venden carros usados.",
      "Se vive muy tranquilo en el campo.",
      "Se buscan profesores.",
      "Se reparan celulares."
     ],
     "correctIndex": 1,
     "explanation": "«Se vive» no tiene sujeto y siempre va en singular; las demás son pasivas reflejas."
    },
    "11": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Cambia «un mesero» por «tres meseros».",
     "source": "Se necesita un mesero.",
     "answer": "Se necesitan tres meseros.",
     "explanation": "Es pasiva refleja: «meseros» es el sujeto, así que el verbo pasa a plural.",
     "altAnswers": [
      "Se necesitan tres camareros."
     ]
    },
    "13": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Corrige la frase.",
     "source": "Estas llaves no son mías, son tuyos.",
     "answer": "Estas llaves no son mías, son tuyas.",
     "altAnswers": [
      "Estas llaves no son mías; son tuyas."
     ],
     "explanation": "El tónico concuerda con lo poseído: «llaves» es femenino plural → tuyas, como mías."
    },
    "1": {
     "type": "fill-blank",
     "prompt": "Elige la forma átona o tónica según corresponda.",
     "sentence": "Tenemos que llevar ___ documentos; los tuyos ya están listos. (nosotros)",
     "answer": "nuestros",
     "hint": "posesivo átono, va antes del sustantivo",
     "explanation": "Delante del sustantivo el posesivo va sin artículo: 'nuestros documentos'. Nuestro tiene la misma forma en las dos posiciones; 'los nuestros' solo sustituye al sustantivo (como 'los tuyos')."
    }
   }
  }
 },
 "passive-voice-possessive-pronouns-drill-3": {
  "exercises": {
   "replace": {
    "0": {
     "type": "matching",
     "instructions": "Relaciona cada oración con su estructura gramatical.",
     "pairs": [
      {
       "left": "Se vive tranquilo en este pueblo.",
       "right": "Se impersonal"
      },
      {
       "left": "Se construyeron dos puentes nuevos.",
       "right": "Pasiva refleja"
      },
      {
       "left": "El carro azul es el mío.",
       "right": "Pronombre posesivo tónico"
      },
      {
       "left": "Una prima suya nos visitó.",
       "right": "Posesivo tónico como adjetivo"
      }
     ],
     "explanation": "El 'se' impersonal no concuerda con ningún sustantivo; la pasiva refleja concuerda con el sustantivo plural; el pronombre tónico sustituye al sustantivo; y el posesivo tónico pospuesto funciona como adjetivo."
    },
    "12": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "La torta ___ por una tía nuestra.",
     "answer": "fue hecha",
     "en": "The cake [was made] by an aunt of ours.",
     "explanation": "Participio irregular «hecho», en femenino como «la torta»."
    },
    "20": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Sustituye el segundo «carro» por un pronombre posesivo.",
     "source": "Mi carro es más rápido que tu carro.",
     "answer": "Mi carro es más rápido que el tuyo.",
     "explanation": "Para no repetir el sustantivo: artículo + tónico que concuerda con «carro» (el tuyo).",
     "altAnswers": [
      "Mi coche es más rápido que el tuyo."
     ]
    }
   }
  },
  "sections": {
   "1": {
    "check": [
     {
      "type": "fill-blank",
      "prompt": "Elige entre el posesivo átono y el tónico según la posición.",
      "sentence": "___ carro es nuevo; el tuyo es más viejo. (yo)",
      "answer": "Mi",
      "hint": "posesivo átono, va antes del sustantivo",
      "explanation": "Antes del sustantivo se usa el posesivo átono ('mi carro'); después o en sustitución se usa el tónico ('el tuyo')."
     },
     {
      "type": "multi-select",
      "question": "Selecciona los pronombres posesivos tónicos (forma larga).",
      "options": [
       "su",
       "suyo",
       "tu",
       "tuya",
       "mis",
       "míos"
      ],
      "correctIndexes": [
       1,
       3,
       5
      ],
      "explanation": "Las formas tónicas o largas son 'suyo', 'tuya' y 'míos'. 'Su', 'tu' y 'mis' son formas átonas cortas que siempre van antes del sustantivo. (Nuestro y vuestro tienen la misma forma en las dos posiciones.)"
     }
    ]
   }
  }
 },
 "reported-speech-drill-2": {
  "sections": {
   "0": {
    "examples": [
     {
      "es": "Rosa dijo: 'Espero que vengas.' → Rosa dijo que esperaba que vinieras.",
      "en": "Rosa said: 'I hope you come.' → Rosa said she hoped I would come."
     },
     {
      "es": "'Quiero que me ayuden.' → Dijo que quería que lo ayudáramos.",
      "en": "'I want you all to help me.' → He said he wanted us to help him. (ayuden → ayudáramos)"
     }
    ]
   }
  },
  "exercises": {
   "replace": {
    "9": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "El guía preguntó qué ___ ver primero.",
     "answer": "queríamos",
     "en": "The guide asked what we [wanted] to see first.",
     "explanation": "Pregunta abierta: «qué» se conserva y «¿Qué quieren ver?» pasa a imperfecto: queríamos."
    },
    "14": {
     "type": "speak",
     "text": "El guía preguntó qué queríamos ver primero.",
     "prompt": "Dilo en español: \"The guide asked what we wanted to see first\"",
     "explanation": "Una forma de decirlo: «El guía preguntó qué queríamos ver primero». Pregunta abierta: «qué» se conserva y «¿Qué quieren ver?» pasa a imperfecto: queríamos."
    }
   }
  }
 },
 "b1r-tema-voluntariado-animales": {
  "exercises": {
   "replace": {
    "3": {
     "type": "multiple-choice",
     "question": "«Adopt, don't buy.» (ustedes)",
     "options": [
      "Adopten, no compren.",
      "Adoptan, no compran.",
      "Adopte, no compren.",
      "Adopten, no compran."
     ],
     "correctIndex": 0,
     "explanation": "Los mandatos de ustedes, afirmativos y negativos, usan el subjuntivo: adopten, no compren. «Adoptan / compran» son indicativo y «Adopte» es de usted, no de ustedes."
    },
    "17": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "Put on gloves before you pick up the cat. (tú)",
     "answer": "Ponte guantes antes de agarrar al gato.",
     "altAnswers": [
      "Ponte guantes antes de coger al gato.",
      "Ponte los guantes antes de coger al gato.",
      "Ponte los guantes antes de agarrar al gato.",
      "Ponte guantes antes de levantar al gato.",
      "Ponte los guantes antes de levantar al gato."
     ],
     "explanation": "Mandato afirmativo irregular de poner + pronombre pegado: «ponte»."
    }
   }
  }
 },
 "reported-speech-drill-3-part-2": {
  "exercises": {
   "replace": {
    "9": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "El médico me dijo que no ___ café después de las seis.",
     "answer": "tomara",
     "en": "The doctor told me not to [drink] coffee after six.",
     "altAnswers": [
      "bebiera"
     ],
     "explanation": "Mandato negativo: «no tomes» pasa a «que no tomara»."
    }
   }
  }
 }
};
