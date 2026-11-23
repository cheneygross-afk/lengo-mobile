// Synced from cheneygross-afk/lengo:src/lib/lessons/es-redesign/b2-unit3-latam.ts by scripts/sync-content.mjs -- edit it there, not here.
// Generated: Latin American wording for B2 Unit 3. B2_UNIT3_LATAM adds
// accepted answers (papás, carro, celular, en la noche) next to the Spain
// wording; B2_UNIT3_SWAP makes the Latin American word the main one where the
// lesson showed the Spain word (carro, celular, computadora, refrigerador, la
// tarea, manejes, estacione, llene, tomes, caminando, cobija, clóset),
// keeping the Spain answer accepted. It also gives the vosotros drills an
// ustedes answer (vosotros still accepted) and replaces items that used later
// grammar: double pronouns (dámelo, dígamelo, explícamelo), a nosotros
// command, the perfect subjunctive and si / cuando + subjunctive. Content
// only.
import type { LessonPatch } from "./patch";
export const B2_UNIT3_LATAM: Record<string, { alts?: Record<number, string[]>; checkAlts?: Record<number, Record<number, string[]>> }> = {
 "b1r-transform-infinitive-subjunctive": {
  "alts": {
   "20": [
    "Siento que tus papás no puedan quedarse más tiempo.",
    "Siento que tus papás no puedan quedarse más.",
    "Siento que tus papás no se puedan quedar más tiempo.",
    "Siento que tus papás no se puedan quedar más."
   ],
   "22": [
    "Mi abuela tiene miedo de que conduzca en la noche.",
    "Mi abuela tiene miedo de que maneje en la noche."
   ]
  }
 },
 "b1d-corrige-mandatos": {
  "alts": {
   "15": [
    "Apaga la calefacción en la noche.",
    "En la noche apaga la calefacción."
   ]
  }
 },
 "a2d-directions-qa": {
  "alts": {
   "23": [
    "Perdone, ¿dónde está la parada de bus? ¿Está lejos?",
    "Disculpe, ¿dónde está la parada de bus? ¿Está lejos?",
    "Perdone, ¿dónde está la parada del bus? ¿Está lejos?",
    "Disculpe, ¿dónde está la parada del bus? ¿Está lejos?"
   ]
  }
 }
};
export const B2_UNIT3_SWAP: Record<string, LessonPatch> = {
 "b1d-pares-infinitivo-que": {
  "exercises": {
   "replace": {
    "0": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "Queremos que ___ pronto.",
     "answer": "salgan",
     "altAnswers": [
      "se vayan",
      "salgáis",
      "os vayáis"
     ],
     "en": "We want you [to leave] soon (you all).",
     "explanation": "salir → salgan: present subjunctive, ustedes (different subject). Dos sujetos → que + subjuntivo; salgo → salg- + an: salgan."
    },
    "9": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "I'd rather drive.",
     "answer": "Prefiero manejar.",
     "altAnswers": [
      "Prefiero conducir."
     ],
     "explanation": "Un solo sujeto: infinitivo."
    }
   }
  }
 },
 "b1d-pares-infinitivo-que-part-2": {
  "exercises": {
   "replace": {
    "3": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Transforma la frase para que conduzca la misma Ana.",
     "source": "Ana prefiere que yo conduzca.",
     "answer": "Ana prefiere manejar.",
     "altAnswers": [
      "Ana prefiere manejar ella.",
      "Ana prefiere conducir.",
      "Ana prefiere conducir ella."
     ],
     "explanation": "Si quien prefiere y quien maneja es Ana, sobra que y va el infinitivo."
    },
    "10": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "I'd rather you drove. (usted)",
     "answer": "Prefiero que conduzca usted.",
     "altAnswers": [
      "Prefiero que usted conduzca.",
      "Prefiero que conduzca.",
      "Prefiero que maneje usted.",
      "Prefiero que usted maneje.",
      "Prefiero que maneje."
     ],
     "explanation": "Dos sujetos: que + subjuntivo; manejo → «conduzca»."
    }
   }
  }
 },
 "subjunctive-wishes-doubt-emotion-drill-2": {
  "exercises": {
   "replace": {
    "10": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "My sister prefers that I drive.",
     "answer": "Mi hermana prefiere que yo conduzca.",
     "altAnswers": [
      "Mi hermana prefiere que yo maneje."
     ],
     "explanation": "Sujeto distinto → que + subjuntivo; manejar tiene yo irregular: conduzca."
    },
    "13": {
     "type": "speak",
     "text": "Es sorprendente que ellos terminen tan rápido.",
     "prompt": "Dilo en español: \"It's surprising that they finish so fast\"",
     "explanation": "Una forma de decirlo: «Es sorprendente que ellos terminen tan rápido». Otra forma correcta también vale: comprueba primero el significado y después la pronunciación."
    }
   }
  },
  "sections": {
   "0": {
    "examples": [
     {
      "es": "Es una lástima que no puedas venir a la boda.",
      "en": "It's a shame you can't come to the wedding."
     },
     {
      "es": "Es sorprendente que ellos terminen tan rápido.",
      "en": "It's surprising that they finish so fast."
     },
     {
      "es": "Es posible que llegue tarde.",
      "en": "It's possible that I'll arrive late."
     }
    ]
   }
  }
 },
 "b1r-transform-infinitive-subjunctive": {
  "exercises": {
   "replace": {
    "9": {
     "type": "fill-blank",
     "prompt": "Aplica la regla a un verbo nuevo (ustedes).",
     "sentence": "Odio madrugar. → Odio que ___. (madrugar)",
     "answer": "madruguen",
     "explanation": "Otro sujeto → que + subjuntivo; madrugar es -gar: g → gu delante de e, madruguen.",
     "altAnswers": [
      "madruguéis"
     ]
    },
    "12": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "Prefiero que tú manejes. → Prefiero ___ yo.",
     "answer": "manejar",
     "en": "I prefer [to drive] myself.",
     "altAnswers": [
      "conducir"
     ],
     "explanation": "Si el sujeto vuelve a ser el mismo (yo… yo), desaparece «que» y queda el infinitivo."
    },
    "16": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "She hopes to find a cheap apartment.",
     "answer": "Espera encontrar un apartamento barato.",
     "altAnswers": [
      "Espera encontrar un departamento barato.",
      "Espera encontrar un piso barato."
     ],
     "explanation": "Ella espera y ella encuentra: mismo sujeto → infinitivo."
    },
    "17": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "She hopes her son finds a cheap apartment.",
     "answer": "Espera que su hijo encuentre un apartamento barato.",
     "altAnswers": [
      "Espera que su hijo encuentre un departamento barato.",
      "Espera que su hijo encuentre un piso barato."
     ],
     "explanation": "Sujeto distinto → que + subjuntivo: encuentre (o→ue)."
    },
    "21": {
     "type": "multiple-choice",
     "question": "«My grandfather is afraid of driving at night.»",
     "options": [
      "Mi abuelo tiene miedo de que conduzca de noche.",
      "Mi abuelo tiene miedo manejar de noche.",
      "Mi abuelo tiene miedo de que maneja de noche.",
      "Mi abuelo tiene miedo de manejar de noche."
     ],
     "correctIndex": 3,
     "explanation": "El abuelo tiene miedo y el abuelo maneja: mismo sujeto → de + infinitivo."
    },
    "24": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "The waiter prefers that we pay in cash.",
     "answer": "El mesero prefiere que paguemos en efectivo.",
     "altAnswers": [
      "El mozo prefiere que paguemos en efectivo.",
      "La mesera prefiere que paguemos en efectivo.",
      "El camarero prefiere que paguemos en efectivo.",
      "La camarera prefiere que paguemos en efectivo."
     ],
     "explanation": "Sujeto distinto → que + subjuntivo; pagar cambia g → gu: paguemos."
    }
   }
  }
 },
 "commands-imperative-1": {
  "exercises": {
   "replace": {
    "8": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "Eat something before the film. (tú)",
     "answer": "Come algo antes de la película.",
     "altAnswers": [
      "Come algo antes de ver la película."
     ],
     "explanation": "Tú afirmativo regular = forma él del presente: come."
    },
    "10": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "Please don't park here, sir; use the car park.",
     "answer": "Por favor, no estacione aquí, señor; use el estacionamiento.",
     "altAnswers": [
      "No estacione aquí, por favor, señor; use el estacionamiento.",
      "Por favor, señor, no estacione aquí; use el estacionamiento.",
      "Por favor, no estacione aquí, señor; use el parking.",
      "Por favor, no aparque aquí, señor; use el aparcamiento.",
      "No aparque aquí, por favor, señor; use el aparcamiento.",
      "Por favor, señor, no aparque aquí; use el aparcamiento.",
      "Por favor, no aparque aquí, señor; use el parking."
     ],
     "explanation": "Con usted, afirmativo y negativo en subjuntivo: no estacione (c→qu), use."
    },
    "13": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "___ el formulario y espere aquí.",
     "answer": "Llene",
     "en": "[Fill in] the form and wait here (usted).",
     "altAnswers": [
      "Complete",
      "Rellene"
     ],
     "explanation": "Usted → subjuntivo: rellene, como espere."
    }
   }
  }
 },
 "b1d-patron-tu-afirmativo": {
  "exercises": {
   "replace": {
    "1": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "___ la tarea ahora.",
     "answer": "Haz",
     "en": "[Do] your homework now (tú).",
     "explanation": "hacer → haz: affirmative imperative, tú (irregular). Uno de los ocho irregulares: hacer → haz (no «hace»)."
    },
    "15": {
     "type": "write",
     "prompt": "Un amigo va a cuidar tu casa y tu gato este fin de semana. Escríbele una nota con instrucciones. Usa mandatos de tú, entre ellos al menos tres irregulares (ven, pon, haz, sal, ten…).",
     "minWords": 50,
     "maxWords": 90,
     "rubric": [
      "Al menos cinco mandatos de tú afirmativos",
      "Al menos tres irregulares (ven, pon, ten, haz…)",
      "Al menos un mandato negativo (no abras, no dejes…)",
      "Un saludo y un agradecimiento"
     ],
     "modelAnswer": "¡Hola, Marcos! Gracias por cuidar a Simba. Ven por la mañana y por la noche. Pon comida en su plato y cambia el agua todos los días. Riega también las plantas del balcón. Cuando salgas, cierra bien la puerta, y no abras la ventana del salón, porque el gato se escapa. Ten paciencia: al principio se esconde. Haz lo que quieras en casa y come lo que hay en el refrigerador. ¡Mil gracias!",
     "explanation": "El mandato de tú afirmativo es igual que el presente de él (cambia, riega, cierra), pero hay irregulares: ven, pon, ten, haz. El negativo usa el subjuntivo: no abras."
    }
   }
  }
 },
 "b1d-circuito-usted-ustedes": {
  "exercises": {
   "replace": {
    "2": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "___ los celulares, por favor.",
     "answer": "Apaguen",
     "en": "[Turn off] your phones, please (ustedes).",
     "explanation": "apagar → apaguen: imperative, ustedes (g → gu). Ustedes → subjuntivo; -gar → -gue delante de e: apaguen."
    },
    "5": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "___ con cuidado.",
     "answer": "Conduzcan",
     "altAnswers": [
      "Manejen"
     ],
     "en": "[Drive] carefully (ustedes).",
     "explanation": "manejar → conduzcan: imperative, ustedes. Desde «manejo»: conduzcan."
    }
   }
  },
  "sections": {
   "0": {
    "check": [
     {
      "type": "fill-blank",
      "prompt": "¿Cómo se dicen en español las palabras en negrita?",
      "sentence": "___ aquí, por favor.",
      "answer": "Firme",
      "en": "[Sign] here, please (usted).",
      "explanation": "firmar → firme: imperative, usted. Usted → subjuntivo: firmo → firme."
     },
     {
      "type": "multiple-choice",
      "question": "Aplica la regla a un verbo nuevo: la recepcionista a un cliente: «___ en el ascensor hasta el tercer departamento.» (subir)",
      "options": [
       "Suba",
       "Sube",
       "Subas",
       "Suben"
      ],
      "correctIndex": 0,
      "explanation": "Usted → subjuntivo, desde «subo»: suba. «Sube» es para tú, «subas» es el negativo de tú y «suben» es indicativo de ellos."
     }
    ]
   }
  }
 },
 "b1r-error-hunt-commands": {
  "exercises": {
   "replace": {
    "1": {
     "type": "fill-blank",
     "prompt": "Corrige el mandato.",
     "sentence": "¡No ___ tan rápido! (manejar, tú; el alumno escribió: conduces)",
     "answer": "manejes",
     "explanation": "Negativo de tú = subjuntivo, desde manejo: no manejes.",
     "altAnswers": [
      "conduzcas"
     ]
    },
    "3": {
     "type": "multi-select",
     "question": "¿Qué mandatos tienen un error?",
     "options": [
      "No me mires así.",
      "Tráigame la cuenta, por favor.",
      "No lo toca.",
      "Ve a dormir."
     ],
     "correctIndexes": [
      2
     ],
     "explanation": "«No lo toca» está mal: el negativo usa subjuntivo, no lo toques (tú) o no lo toque (usted). «No me mires», «Tráigame la cuenta» y «Ve a dormir» son correctos."
    },
    "7": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Corrige la frase (tú).",
     "source": "¡No tocas mi celular!",
     "answer": "¡No toques mi celular!",
     "altAnswers": [
      "¡No toques mi teléfono!",
      "¡No toques mi móvil!"
     ],
     "explanation": "Negativo de tú = subjuntivo: toques (c → qu), no «tocas» (indicativo)."
    },
    "16": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "Don't drive so fast and don't use your phone in the car. (tú)",
     "answer": "No manejes tan rápido y no uses el celular en el carro.",
     "altAnswers": [
      "No manejes tan rápido y no uses el teléfono en el carro.",
      "No manejes tan rápido y no uses el celular en el auto.",
      "No conduzcas tan rápido y no uses el móvil en el coche.",
      "No conduzcas tan rápido y no uses el teléfono en el coche."
     ],
     "explanation": "Negativo de tú: no manejes, no uses."
    },
    "24": {
     "type": "multiple-choice",
     "question": "Corrige: «No dígame eso ahora.» (usted)",
     "options": [
      "No me diga eso ahora.",
      "No dígame eso ahora.",
      "No me dice eso ahora.",
      "Me no diga eso ahora."
     ],
     "correctIndex": 0,
     "explanation": "En negativo el pronombre va delante del verbo: no me diga. «No me dice» es indicativo y «me no» pone el pronombre antes del no."
    }
   }
  }
 },
 "b1d-corrige-mandatos": {
  "exercises": {
   "replace": {
    "1": {
     "type": "fill-blank",
     "prompt": "Corrige.",
     "sentence": "No lo ___, es mi computadora. (la nota dice: toca)",
     "answer": "toques",
     "explanation": "Negativo = subjuntivo; tocar cambia c → qu delante de e: no lo toques."
    },
    "2": {
     "type": "fill-blank",
     "prompt": "Corrige.",
     "sentence": "___ ya. (la nota dice: Ve te)",
     "answer": "Vete",
     "explanation": "Irse: ve + te, todo junto: vete."
    },
    "16": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "Make your bed and don't leave your clothes on the floor. (tú)",
     "answer": "Haz la cama y no dejes la ropa en el suelo.",
     "altAnswers": [
      "Haz tu cama y no dejes tu ropa en el suelo.",
      "Haz la cama y no dejes tu ropa en el suelo.",
      "Haz la cama y no dejes la ropa en el departamento.",
      "Haz la cama y no dejes la ropa en el piso."
     ],
     "explanation": "Hacer → haz; no dejes."
    },
    "19": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "No ___ mi cargador, por favor.",
     "answer": "tomes",
     "en": "Don't [take] my charger, please (tú).",
     "altAnswers": [
      "agarres",
      "cojas"
     ],
     "explanation": "Negativo de tú = subjuntivo desde «tomo»: no tomes."
    },
    "20": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "La leche, ___ en el refrigerador.",
     "answer": "ponla",
     "en": "The milk, [put it] in the fridge (tú).",
     "altAnswers": [
      "guárdala",
      "métela"
     ],
     "explanation": "Pronombre pegado al afirmativo: ponla, no «pon la»."
    }
   }
  },
  "sections": {
   "1": {
    "body": [
     "Estos errores salen de olvidar una de esas reglas. Lee la nota corregida:",
     "«Por favor, ✗ no pones (→ no pongas) la música alta. ✗ Hace (→ Haz) la compra el sábado. ✗ No lo toca (→ No lo toques), es mi computadora. ✗ Ve te (→ Vete) ya, pero la puerta, ✗ cierra la (→ ciérrala) con llave. Y no ✗ vuelves (→ vuelvas) tarde.»"
    ]
   }
  }
 },
 "b1d-pares-afirmativo-negativo-tu": {
  "exercises": {
   "replace": {
    "20": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "No ___ el carro, puedes ir caminando.",
     "answer": "tomes",
     "en": "Don't [take] the car, you can walk (tú).",
     "altAnswers": [
      "agarres",
      "cojas"
     ],
     "explanation": "Tomar: toma / no tomes."
    }
   }
  }
 },
 "commands-drill-1": {
  "exercises": {
   "replace": {
    "9": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "Do your homework now. (tú)",
     "answer": "Haz la tarea ahora.",
     "altAnswers": [
      "Haz tus deberes ahora.",
      "Haz tu tarea ahora.",
      "Haz ahora la tarea.",
      "Haz los deberes ahora.",
      "Haz ahora los deberes."
     ],
     "explanation": "Hacer → haz (irregular corto)."
    },
    "10": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Cambia el mandato a negativo.",
     "source": "Come en el carro.",
     "answer": "No comas en el carro.",
     "altAnswers": [
      "No comas en el auto.",
      "No comas en el coche."
     ],
     "explanation": "Negativo = subjuntivo: como → no comas. La vocal cambia (e → a en los verbos en -er)."
    },
    "4": {
     "type": "word-order",
     "prompt": "Ordena las palabras para formar un mandato de ustedes.",
     "words": [
      "Empiecen",
      "la",
      "reunión,",
      "por",
      "favor"
     ],
     "translation": "Start the meeting, please. (ustedes)",
     "explanation": "El mandato de ustedes sale del subjuntivo: empiecen (empezar: e → ie, z → c)."
    }
   }
  },
  "sections": {
   "0": {
    "body": [
     "Recuerda la regla: el mandato afirmativo de tú es la misma forma que él / ella en presente de indicativo: (él) habla → ¡habla!, (él) come → ¡come! No hace falta aprender una forma nueva: solo usas la que ya conoces con otra intención.",
     "Por eso los cambios de raíz del presente se mantienen: cierra (e → ie), vuelve (o → ue), pide (e → i). Y los pronombres se pegan al final: siéntate, dime."
    ]
   }
  }
 },
 "b1d-rep-imperativo-afirmativo-negativo-tu": {
  "exercises": {
   "replace": {
    "6": {
     "type": "multiple-choice",
     "question": "«___ la tele y no ___ el celular en la mesa.» (apagar, usar)",
     "options": [
      "Apaga, uses",
      "Apague, usas",
      "Apagas, uses",
      "Apaga, usa"
     ],
     "correctIndex": 0,
     "explanation": "Primero una orden afirmativa (apaga: forma de él del presente) y luego una negativa (no uses: subjuntivo). «Apague» es de usted, «Apagas» es indicativo y «no usa» usa la forma afirmativa en una negación."
    },
    "12": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Corrige la frase.",
     "source": "Hace la tarea y no veas la tele.",
     "answer": "Haz la tarea y no veas la tele.",
     "altAnswers": [
      "Haz la tarea y no veas la televisión.",
      "Haz los deberes y no veas la tele.",
      "Haz los deberes y no veas la televisión."
     ],
     "explanation": "Hacer tiene un afirmativo de tú irregular y corto: haz. «Hace» es la forma de él y aquí no sirve."
    },
    "16": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "Go to bed now and don't turn on the computer (tú).",
     "answer": "Acuéstate ya y no enciendas la computadora.",
     "altAnswers": [
      "Vete a la cama ya y no enciendas la computadora.",
      "Acuéstate ya y no prendas la computadora.",
      "Vete a la cama ya y no prendas la computadora.",
      "Acuéstate ahora y no enciendas la computadora.",
      "Vete a la cama ahora y no enciendas la computadora.",
      "Acuéstate ya y no enciendas el ordenador.",
      "Vete a la cama ya y no enciendas el ordenador.",
      "Acuéstate ahora y no enciendas el ordenador.",
      "Vete a la cama ahora y no enciendas el ordenador."
     ],
     "explanation": "Afirmativo con pronombre pegado (acuéstate) y negativo en subjuntivo (no enciendas)."
    },
    "20": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "No ___ las fotos todavía; espera un poco.",
     "answer": "subas",
     "en": "Don't [upload] the photos yet; wait a bit (tú).",
     "explanation": "Negativo de subir: no subas (subjuntivo)."
    },
    "15": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "Take the book; don't leave it on the table (tú).",
     "answer": "Toma el libro; no lo dejes en la mesa.",
     "altAnswers": [
      "Toma el libro, no lo dejes en la mesa.",
      "Agarra el libro; no lo dejes en la mesa.",
      "Agarra el libro, no lo dejes en la mesa.",
      "Coge el libro; no lo dejes en la mesa.",
      "Coge el libro, no lo dejes en la mesa."
     ],
     "explanation": "Afirmativo: toma (forma él). Negativo: no + subjuntivo, con el pronombre delante: no lo dejes."
    },
    "23": {
     "type": "word-order",
     "prompt": "Ordena las palabras.",
     "words": [
      "No",
      "lo",
      "expliques",
      "ahora;",
      "explícalo",
      "mañana"
     ],
     "translation": "Don't explain it now; explain it tomorrow",
     "explanation": "Negativo: pronombre delante (no lo expliques); afirmativo: pegado detrás, con tilde (explícalo)."
    }
   }
  },
  "sections": {
   "0": {
    "body": [
     "Recuerda la regla: el mandato afirmativo de tú es igual a la forma de él en presente (habla, come, escribe), pero el negativo usa el presente de subjuntivo (no hables, no comas, no escribas).",
     "¿Por qué cambia? El negativo español se construye siempre con el subjuntivo, igual que el mandato de usted; por eso «no habla» o «no comes» no funcionan como orden: son descripciones.",
     "Los pronombres cambian de sitio: van pegados al afirmativo (dime) y delante del negativo (no me digas)."
    ]
   }
  }
 },
 "b1d-rep-imperativo-tu-irregulares": {
  "exercises": {
   "replace": {
    "12": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "Tell me your phone number. (tú)",
     "answer": "Dime tu número de teléfono.",
     "altAnswers": [
      "Dime tu número de celular.",
      "Dime tu número de móvil."
     ],
     "explanation": "«Decir» → «di», y el pronombre se pega detrás: «dime»."
    },
    "27": {
     "type": "speak",
     "text": "Haz la tarea y no salgas hasta las seis.",
     "prompt": "Dilo en español: \"Do your homework and don't go out until six\"",
     "explanation": "Una forma de decirlo: «Haz la tarea y no salgas hasta las seis». haz en afirmativo, no salgas en negativo",
     "altAnswers": [
      "Haz los deberes y no salgas hasta las seis."
     ]
    }
   }
  },
  "sections": {
   "0": {
    "examples": [
     {
      "es": "Ven aquí y di la verdad.",
      "en": "Come here and tell the truth. (ven, di: formas cortas)"
     },
     {
      "es": "Haz la tarea y no salgas hasta las seis.",
      "en": "Do your homework and don't go out until six. (haz en afirmativo, no salgas en negativo)"
     },
     {
      "es": "Sé puntual y ten el pasaporte a mano.",
      "en": "Be on time and have your passport handy. (sé con tilde, ten)"
     }
    ]
   }
  }
 },
 "b1-common-words-body-night-out": {
  "exercises": {
   "replace": {
    "3": {
     "type": "fill-blank",
     "prompt": "Completa la frase.",
     "sentence": "¡Están ___! No pueden nadar en el mar con este frío.",
     "answer": "locos",
     "explanation": "Están → ustedes, así que plural: locos."
    },
    "10": {
     "type": "speak",
     "text": "Me duele el cuello de tanto mirar la computadora.",
     "prompt": "Dilo en español: \"My neck hurts from staring at the computer so much\"",
     "explanation": "Una forma de decirlo: «Me duele el cuello de tanto mirar la computadora». Otra forma correcta también vale: comprueba primero el significado y después la pronunciación.",
     "altAnswers": [
      "Me duele el cuello de tanto mirar el ordenador."
     ]
    }
   }
  },
  "sections": {
   "0": {
    "examples": [
     {
      "es": "Me duele el cuello de tanto mirar la computadora.",
      "en": "My neck hurts from staring at the computer so much."
     },
     {
      "es": "Usa crema, tienes la piel muy seca.",
      "en": "Use some cream, your skin is very dry."
     },
     {
      "es": "Sentí un dolor fuerte en el pecho y fui al médico.",
      "en": "I felt a sharp pain in my chest and went to the doctor."
     },
     {
      "es": "Este champú es para cabello rizado.",
      "en": "This shampoo is for curly hair."
     },
     {
      "es": "Tiene el cabello largo y la piel muy blanca.",
      "en": "She has long hair and very pale skin."
     },
     {
      "es": "El cuello de esta camisa me aprieta.",
      "en": "The collar of this shirt is too tight."
     }
    ]
   },
   "2": {
    "check": [
     {
      "type": "multiple-choice",
      "question": "¿Qué expresión NO significa «beber algo con amigos»?",
      "options": [
       "tomar el pelo",
       "tomar una copa",
       "tomar un trago",
       "tomar una cerveza"
      ],
      "correctIndex": 0,
      "explanation": "«Tomar el pelo» = to pull someone's leg, engañar en broma. Tomar una copa, un trago o una cerveza sí significan beber algo."
     },
     {
      "type": "fill-blank",
      "prompt": "Completa la frase.",
      "sentence": "No manejes, estás ___.",
      "answer": "borracho",
      "explanation": "Estar borracho/borracha = to be drunk. Con estar, porque es un estado.",
      "altAnswers": [
       "borracha"
      ]
     }
    ]
   },
   "3": {
    "body": [
     "«Los sentimientos» son lo que sientes: amor, miedo, tristeza. «Una conversación» es una charla entre dos o más personas.",
     "«Loco/locos», «tonto/tonta» y «estúpido/estúpida» describen a alguien que actúa sin pensar. Ojo: pueden ser groseras y ofensivas si se las dices a otra persona. Entre amigos, «¿Están locos?» o «No seas tonta» pueden sonar cariñosos, pero con desconocidos es mejor evitarlas. Hablar de ti mismo es más seguro: «Me sentí estúpida»."
    ]
   }
  }
 },
 "b1-common-words-body-night-out-part-2": {
  "exercises": {
   "replace": {
    "15": {
     "type": "speak",
     "text": "Me duele el cuello de tanto mirar la computadora.",
     "prompt": "Dilo en español: \"My neck hurts from staring at the computer so much\"",
     "explanation": "Una forma de decirlo: «Me duele el cuello de tanto mirar la computadora». Otra forma correcta también vale: comprueba primero el significado y después la pronunciación.",
     "altAnswers": [
      "Me duele el cuello de tanto mirar el ordenador."
     ]
    }
   }
  },
  "sections": {
   "0": {
    "examples": [
     {
      "es": "Me duele el cuello de tanto mirar la computadora.",
      "en": "My neck hurts from staring at the computer so much."
     },
     {
      "es": "La gripe es una enfermedad muy común en invierno.",
      "en": "Flu is a very common illness in winter."
     },
     {
      "es": "Te invito a una copa.",
      "en": "Let me buy you a drink."
     }
    ]
   }
  }
 },
 "a2r-mission-lost-in-seville": {
  "exercises": {
   "replace": {
    "6": {
     "type": "fill-blank",
     "prompt": "How do you say the bold words in Spanish?",
     "sentence": "___ la escalera hasta el segundo departamento.",
     "answer": "Suba",
     "en": "[Go up] the stairs to the second floor. (usted)",
     "explanation": "Subir → subo → suba: -ir verbs take the opposite vowel -a. Sube would be the tú form."
    }
   }
  }
 },
 "b1d-habla-de-ti-normas-casa": {
  "exercises": {
   "replace": {
    "14": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "Help yourself to coffee. (usted)",
     "answer": "Sírvase café.",
     "altAnswers": [
      "Sírvase un café."
     ],
     "explanation": "Usted afirmativo con pronombre pegado: «sírvase»."
    },
    "16": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Corrige la ortografía.",
     "source": "Al salir, llevate la llave de repuesto.",
     "answer": "Al salir, llévate la llave de repuesto.",
     "explanation": "Lleva + te = llévate: el acento cae en la antepenúltima sílaba (LLÉ-va-te), así que lleva tilde, como todas las esdrújulas."
    },
    "18": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "¿El wifi? La contraseña está en el refrigerador: ___ sin problema.",
     "answer": "úsalo",
     "en": "The wifi? The password is on the fridge: [use it] no problem. (tú)",
     "explanation": "Pronombre pegado al afirmativo con tilde: «úsalo»."
    },
    "6": {
     "type": "word-order",
     "prompt": "Ordena las palabras.",
     "words": [
      "¿Tienes",
      "hambre?",
      "Prepárate",
      "algo",
      "en",
      "la",
      "cocina."
     ],
     "translation": "Hungry? Make yourself something in the kitchen. (tú)",
     "explanation": "Prepara + te pegado, con tilde: prepárate."
    },
    "20": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "Take a blanket from the closet, please. (usted)",
     "answer": "Tome una cobija del clóset, por favor.",
     "altAnswers": [
      "Por favor, tome una cobija del clóset.",
      "Agarre una cobija del clóset, por favor.",
      "Tome una manta del clóset, por favor.",
      "Tome una cobija del armario, por favor.",
      "Tome una manta del armario, por favor.",
      "Coja una manta del armario, por favor.",
      "Por favor, coja una manta del armario."
     ],
     "explanation": "Usted afirmativo: tome (también agarre; en España, coja)."
    },
    "22": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "Close the bathroom door before you shower, and don't leave the light on. (tú)",
     "answer": "Cierra la puerta del baño antes de bañarte y no dejes la luz prendida.",
     "altAnswers": [
      "Cierra la puerta del baño antes de ducharte y no dejes la luz prendida.",
      "Cierra la puerta del baño antes de bañarte y no dejes la luz encendida.",
      "Cierra la puerta del baño antes de ducharte y no dejes la luz encendida.",
      "Cierra la puerta del baño antes de bañarte, y no dejes la luz prendida.",
      "Cierra la puerta del baño antes de ducharte, y no dejes la luz encendida."
     ],
     "explanation": "«Cierra» (tú afirmativo) y «no dejes» (tú negativo); después de «antes de», infinitivo."
    }
   }
  },
  "sections": {
   "0": {
    "examples": [
     {
      "es": "Quítate los zapatos en la entrada.",
      "en": "Take your shoes off at the entrance. (tú + te pegado)"
     },
     {
      "es": "No uses la ducha después de las once.",
      "en": "Don't use the shower after eleven. (tú negativo: subjuntivo)"
     },
     {
      "es": "¿Tiene frío? Encienda la calefacción.",
      "en": "Cold? Turn on the heating. (usted: subjuntivo)"
     },
     {
      "es": "No se preocupe por la cama; ya está hecha.",
      "en": "Don't worry about the bed; it's already made. (usted negativo: se delante)"
     }
    ],
    "check": [
     {
      "type": "multiple-choice",
      "question": "«___ lo que quieras de el refrigerador.» (servirse, tú)",
      "options": [
       "Sírvete",
       "Sírvese",
       "Te sirves",
       "No te sirvas"
      ],
      "correctIndex": 0,
      "explanation": "Afirmativo de tú: el pronombre te va pegado y se añade tilde: sírvete. «Sírvese» no es un mandato (el de usted es «sírvase»), «Te sirves» es una descripción y «No te sirvas» dice lo contrario."
     },
     {
      "type": "translate",
      "direction": "en-es",
      "prompt": "Cambia la norma a usted: el invitado es tu suegro.",
      "source": "Deja las llaves en la mesa.",
      "answer": "Deje las llaves en la mesa.",
      "explanation": "Con usted el mandato es subjuntivo: dejo → deje. «Deja» es la forma de tú."
     }
    ]
   }
  }
 },
 "b1d-rep-imperativo-receta": {
  "exercises": {
   "replace": {
    "6": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "Don't add water; put it in the fridge. (tú)",
     "answer": "No le añadas agua; mételo en el refrigerador.",
     "altAnswers": [
      "No le pongas agua; mételo en el refrigerador.",
      "No añadas agua; mételo en el refrigerador.",
      "No le añadas agua; mételo en la nevera.",
      "No le pongas agua; mételo en la nevera.",
      "No añadas agua; mételo en la nevera."
     ],
     "explanation": "Negativo con subjuntivo (no le añadas) y afirmativo con pronombre pegado (mételo)."
    },
    "17": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "Peel the potatoes and cut them into small pieces. (tú)",
     "answer": "Pela las papas y córtalas en trozos pequeños.",
     "altAnswers": [
      "Pela las papas y córtalas en pedazos pequeños.",
      "Pela las patatas y córtalas en trozos pequeños.",
      "Pela las patatas y córtalas en pedazos pequeños."
     ],
     "explanation": "Pronombre pegado al imperativo afirmativo y tilde para mantener el acento: «córtalas»."
    },
    "21": {
     "type": "speak",
     "text": "Saca el pastel del horno y déjalo enfriar.",
     "prompt": "Dilo en español: \"Take the cake out of the oven and let it cool\"",
     "altAnswers": [
      "Saca la torta del horno y déjala enfriar.",
      "Saca el pastel del horno y déjalo enfriarse.",
      "Saca la torta del horno y déjala enfriarse.",
      "Saca la tarta del horno y déjala enfriar.",
      "Saca la tarta del horno y déjala enfriarse."
     ],
     "explanation": "Una forma de decirlo: «Saca el pastel del horno y déjalo enfriar». Dos imperativos afirmativos; el pronombre se pega a «deja»: «déjalo»."
    }
   }
  },
  "sections": {
   "0": {
    "body": [
     "Recuerda la regla: el mandato afirmativo de tú es igual que la forma él del presente (lava, pela, corta), salvo unos cuantos irregulares (pon, haz, sal, ven, ten, di, ve, sé). El negativo usa el subjuntivo (no pongas). Los pronombres van pegados detrás del afirmativo, con tilde si hace falta para mantener el acento (córtalos), y delante del negativo (no lo cortes).",
     "«Lava los tomates y córtalos. Pela el pepino. Pon todo en la batidora con aceite y sal. No le pongas mucho ajo. Bátelo bien y mételo en el refrigerador. Sírvelo muy frío.»"
    ]
   }
  }
 }
};
