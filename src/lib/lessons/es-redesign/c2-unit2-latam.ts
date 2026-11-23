// Synced from cheneygross-afk/lengo:src/lib/lessons/es-redesign/c2-unit2-latam.ts by scripts/sync-content.mjs -- edit it there, not here.
// Generated: Latin American wording for C2 Unit 2. C2_UNIT2_LATAM adds
// accepted answers next to the Spain wording; C2_UNIT2_SWAP makes the Latin
// American word the main one (manejar, carro, estacionar, suéter, plomería,
// dólares, captar, morirse de risa), keeping the Spain answer accepted. Content
// only.
import type { LessonPatch } from "./patch";
export const C2_UNIT2_LATAM: Record<string, { alts?: Record<number, string[]>; checkAlts?: Record<number, Record<number, string[]>> }> = {
 "c2r-proverbs-mission-advice": {
  "alts": {
   "4": [
    "Luis, no dejes para mañana lo que puedas hacer hoy: paga la renta ya.",
    "Luis, no dejes para mañana lo que puedas hacer hoy, paga la renta ya."
   ]
  }
 }
};
export const C2_UNIT2_SWAP: Record<string, LessonPatch> = {
 "nominalization-drill-1-part-2": {
  "exercises": {
   "replace": {
    "16": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Convierte el infinitivo en sustantivo con artículo.",
     "source": "Manejar de noche me cansa.",
     "answer": "El manejar de noche me cansa.",
     "explanation": "El artículo «el» delante del infinitivo subraya que se habla de la acción como concepto; el infinitivo es masculino singular y el verbo concuerda en singular.",
     "altAnswers": [
      "El conducir de noche me cansa."
     ]
    }
   }
  }
 },
 "c1r-transform-verb-to-noun-part-2": {
  "exercises": {
   "replace": {
    "6": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Corrige la frase.",
     "source": "El embellecición de la plaza costó al ayuntamiento casi dos millones de dólares.",
     "answer": "El embellecimiento de la plaza costó al ayuntamiento casi dos millones de dólares.",
     "explanation": "Los verbos en -ecer forman el sustantivo con -miento (embellecer → el embellecimiento, empobrecer → el empobrecimiento), que además es masculino, como indica «el».",
     "altAnswers": [
      "El embellecimiento de la plaza costó al ayuntamiento casi dos millones de euros."
     ]
    }
   }
  }
 },
 "c1r-extra-infinitive-subject-object": {
  "exercises": {
   "replace": {
    "16": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Reescribe la frase con un infinitivo como sujeto, sin «que».",
     "source": "Es peligroso que manejes sin dormir.",
     "answer": "Manejar sin dormir es peligroso.",
     "altAnswers": [
      "Es peligroso manejar sin dormir.",
      "Conducir sin dormir es peligroso.",
      "Es peligroso conducir sin dormir."
     ],
     "explanation": "Cuando no importa quién lo hace, la actividad se expresa con infinitivo, que funciona como sujeto de «es peligroso» (el inglés usaría «Driving…»)."
    },
    "8": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "Salió corriendo sin ___ el abrigo.",
     "answer": "tomar",
     "en": "He ran out without [taking] his coat.",
     "altAnswers": [
      "llevar",
      "agarrar",
      "coger",
      "ponerse"
     ],
     "explanation": "Tras «sin» va infinitivo: sin tomar el abrigo."
    }
   }
  }
 },
 "c1r-extra-infinitive-subject-object-part-2": {
  "exercises": {
   "replace": {
    "3": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "Thank you for lending me the car.",
     "answer": "Gracias por prestarme el carro.",
     "altAnswers": [
      "Gracias por prestarme el auto.",
      "Gracias por dejarme el carro.",
      "Gracias por prestarme el coche.",
      "Gracias por dejarme el coche."
     ],
     "explanation": "Tras la preposición «por» va infinitivo, con el pronombre enclítico."
    },
    "7": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "Driving after drinking is dangerous.",
     "answer": "Manejar después de beber es peligroso.",
     "altAnswers": [
      "Manejar tras beber es peligroso.",
      "Conducir después de beber es peligroso.",
      "Conducir tras beber es peligroso."
     ],
     "explanation": "Dos infinitivos: sujeto y tras la preposición «después de»."
    },
    "10": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "He was fined for parking in front of the hospital.",
     "answer": "Lo multaron por estacionar delante del hospital.",
     "altAnswers": [
      "Le multaron por estacionar delante del hospital.",
      "Fue multado por estacionar delante del hospital.",
      "Lo multaron por estacionar frente al hospital.",
      "Lo multaron por aparcar delante del hospital.",
      "Le multaron por aparcar delante del hospital.",
      "Fue multado por aparcar delante del hospital."
     ],
     "explanation": "Tras «por» va infinitivo; en América se diría «estacionar»."
    },
    "22": {
     "type": "speak",
     "text": "Gracias por prestarme el carro.",
     "prompt": "Dilo en español: \"Thank you for lending me the car\"",
     "altAnswers": [
      "Gracias por prestarme el auto.",
      "Gracias por dejarme el carro.",
      "Gracias por prestarme el coche.",
      "Gracias por dejarme el coche."
     ],
     "explanation": "Una forma de decirlo: «Gracias por prestarme el carro». Tras la preposición «por» va infinitivo, con el pronombre enclítico."
    }
   }
  }
 },
 "c2r-proverbs-complete": {
  "exercises": {
   "replace": {
    "10": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "The mechanic's car never works: the cobbler's children go barefoot.",
     "answer": "El carro del mecánico nunca funciona: en casa de herrero, cuchillo de palo.",
     "altAnswers": [
      "El carro del mecánico nunca funciona, en casa de herrero, cuchillo de palo.",
      "El coche del mecánico nunca funciona: en casa de herrero, cuchillo de palo.",
      "El coche del mecánico nunca funciona, en casa de herrero, cuchillo de palo."
     ],
     "explanation": "El refrán español habla del herrero y de un cuchillo de palo, no de zapatos: es el equivalente del inglés, no una traducción literal."
    }
   }
  }
 },
 "c2r-proverbs-mission-advice": {
  "exercises": {
   "replace": {
    "0": {
     "type": "fill-blank",
     "prompt": "Completa el consejo a Marta.",
     "sentence": "Marta, tú pinta tus cuadros y deja la plomería a los plomeros: zapatero, a tus ___.",
     "answer": "zapatos",
     "explanation": "«Zapatero, a tus zapatos» aconseja que cada uno se ocupe de lo suyo; el posesivo «tus» concuerda con «zapatos» y se dirige al zapatero imaginario, no a Marta."
    },
    "12": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "Inés, didn't you like the sweater your aunt knitted? Never look a gift horse in the mouth.",
     "answer": "Inés, ¿no te gustó el suéter que te tejió tu tía? A caballo regalado no le mires el diente.",
     "altAnswers": [
      "Inés, ¿no te ha gustado el suéter que te tejió tu tía? A caballo regalado no le mires el diente.",
      "Inés, ¿no te gustó el jersey que te tejió tu tía? A caballo regalado no le mires el diente.",
      "Inés, ¿no te ha gustado el jersey que te tejió tu tía? A caballo regalado no le mires el diente."
     ],
     "explanation": "Que te tejió: objeto indirecto te; refrán fijo."
    },
    "22": {
     "type": "multiple-choice",
     "question": "Una lectora duda entre dos departamentos y no ha mirado las cuentas. ¿Qué refrán le aconsejas?",
     "options": [
      "Más vale prevenir que curar.",
      "Zapatero, a tus zapatos.",
      "A caballo regalado no le mires el diente.",
      "El que la sigue la consigue."
     ],
     "correctIndex": 0,
     "explanation": "«Más vale prevenir que curar» invita a estudiar antes de decidir. «Zapatero…» habla de no meterse en lo ajeno, «A caballo regalado…» de regalos y «El que la sigue…» de insistir, que no es su problema."
    },
    "11": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Cambia el consejo para dirigirlo a un grupo de amigos (ustedes).",
     "source": "Tomás, reprobaste una vez, pero no te rindas: el que la sigue la consigue.",
     "answer": "Chicos, reprobaron una vez, pero no se rindan: el que la sigue la consigue.",
     "altAnswers": [
      "Chicos, suspendieron una vez, pero no se rindan: el que la sigue la consigue.",
      "Chicos, han reprobado una vez, pero no se rindan: el que la sigue la consigue.",
      "Chicos, reprobaron una vez, pero no se den por vencidos: el que la sigue la consigue.",
      "Chicos, suspendisteis una vez, pero no os rindáis: el que la sigue la consigue."
     ],
     "explanation": "La parte libre pasa a ustedes: reprobaron, no se rindan (mandato negativo = subjuntivo). El refrán sigue en singular genérico («el que la sigue»), porque no se refiere a nadie concreto."
    },
    "6": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "Ana, you're always broke because you spend before you earn: better safe than sorry.",
     "answer": "Ana, siempre estás sin dinero porque gastas antes de ganar: más vale prevenir que curar.",
     "altAnswers": [
      "Ana, siempre estás sin un peso porque gastas antes de ganar: más vale prevenir que curar.",
      "Ana, siempre estás sin dinero porque gastas antes de ganar, más vale prevenir que curar.",
      "Ana, siempre estás sin blanca porque gastas antes de ganar: más vale prevenir que curar.",
      "Ana, siempre estás sin blanca porque gastas antes de ganar, más vale prevenir que curar."
     ],
     "explanation": "Estar sin dinero (o sin un peso; en España, «sin blanca»); el vocativo va seguido de coma."
    }
   }
  }
 },
 "c2r-humor-dialogue-lab": {
  "exercises": {
   "replace": {
    "0": {
     "type": "multiple-choice",
     "question": "Alguien se ofende por una broma tuya. Respondes:",
     "options": [
      "Perdona, era broma, no quería molestarte.",
      "Me muero de risa.",
      "Sí, y yo soy la reina.",
      "Mira quién habla."
     ],
     "correctIndex": 0,
     "explanation": "Si alguien se ofende, hay que reparar la relación: «Perdona, era broma, no quería molestarte». Reírse más, seguir con ironía («Sí, y yo soy la reina») o contraatacar («Mira quién habla») empeora las cosas."
    },
    "2": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "I'm cracking up!",
     "answer": "¡Me muero de risa!",
     "altAnswers": [
      "¡Me estoy muriendo de risa!",
      "¡Me parto!",
      "¡Me parto de risa!",
      "¡Me troncho!"
     ],
     "explanation": "«¡Me muero de risa!» es la forma general de decir que te ríes muchísimo; en España también «¡Me parto!»."
    },
    "8": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "At first I didn't get it, but now I'm cracking up.",
     "answer": "Al principio no la capté, pero ahora me muero de risa.",
     "altAnswers": [
      "Al principio no lo capté, pero ahora me muero de risa.",
      "Al principio no la pillé, pero ahora me parto de risa.",
      "Al principio no lo pillé, pero ahora me parto de risa.",
      "Al principio no la pillé, pero ahora me parto."
     ],
     "explanation": "Me muero de risa = estoy riéndome mucho."
    },
    "15": {
     "type": "word-order",
     "prompt": "Ordena las palabras.",
     "words": [
      "Me",
      "muero",
      "de",
      "risa",
      "con",
      "tus",
      "ocurrencias"
     ],
     "translation": "I crack up at your witty remarks",
     "explanation": "Me muero de risa con + sustantivo."
    },
    "16": {
     "type": "multiple-choice",
     "question": "Un amigo te toma el pelo diciendo que ha ganado la lotería. Para seguirle la broma:",
     "options": [
      "Sí, y yo soy la reina de Inglaterra.",
      "Perdona, no la capté.",
      "Era broma, hombre.",
      "Ya, pero hablemos en serio."
     ],
     "correctIndex": 0,
     "explanation": "Seguir la broma con un absurdo equivalente. «Ya, pero hablemos en serio» la cortaría y «era broma, hombre» la dice quien ha bromeado, no quien la recibe."
    },
    "17": {
     "type": "speak",
     "text": "Perdona, no la capté.",
     "prompt": "Dilo en español: \"Sorry, I didn't get it\"",
     "explanation": "Una forma de decirlo: «Perdona, no la capté». Otra forma correcta también vale: comprueba primero el significado y después la pronunciación.",
     "altAnswers": [
      "Perdona, no la he pillado."
     ]
    },
    "18": {
     "type": "speak",
     "text": "¡Qué bueno! Me muero de risa.",
     "prompt": "Dilo en español: \"That's great! I'm dying laughing\"",
     "altAnswers": [
      "¡Qué bueno! Me parto de risa.",
      "¡Qué buena! Me muero de risa."
     ],
     "explanation": "Una forma de decirlo: «¡Qué bueno! Me muero de risa.». Morirse de risa = reírse muchísimo."
    },
    "20": {
     "type": "speak",
     "text": "Al principio no la capté, pero ahora me muero de risa.",
     "prompt": "Dilo en español: \"At first I didn't get it, but now I'm cracking up\"",
     "altAnswers": [
      "Al principio no lo capté, pero ahora me muero de risa.",
      "Al principio no la pillé, pero ahora me parto de risa.",
      "Al principio no lo pillé, pero ahora me parto de risa.",
      "Al principio no la pillé, pero ahora me parto."
     ],
     "explanation": "Una forma de decirlo: «Al principio no la capté, pero ahora me muero de risa». Me muero de risa = estoy riéndome mucho."
    },
    "1": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "¡Qué bueno! Me ___ de risa.",
     "answer": "muero",
     "altAnswers": [
      "parto",
      "troncho"
     ],
     "en": "That's great! I'm [dying] laughing.",
     "explanation": "morirse → me muero: presente, yo. «Morirse de risa» es reírse muchísimo (en España también «partirse de risa»)."
    }
   }
  },
  "sections": {
   "0": {
    "body": [
     "Recuerda la regla: ante una broma, primero decides qué quieres hacer (seguirla, devolverla, reconocer que no la entiendes, reírte, cortarla o suavizarla) y luego eliges la fórmula. Cada fórmula sirve para una sola intención: si usas «mira quién habla» cuando querías reírte, el otro entenderá que lo atacas.",
     "Seguir la broma: «Sí, y yo soy la reina de Inglaterra» (un absurdo equivalente). Devolverla: «Mira quién habla». Confesar que no la captas: «Perdona, no la capté» (la = la broma). Reírse: «¡Qué bueno!», «Me muero de risa». Cortar: «Ya, muy gracioso, pero hablemos en serio». Suavizar tras una broma pesada: «Era broma, hombre», «No te lo tomes a mal»."
    ],
    "examples": [
     {
      "es": "Mira quién habla.",
      "en": "Look who's talking."
     },
     {
      "es": "Perdona, no la capté.",
      "en": "Sorry, I didn't get it."
     }
    ],
    "check": [
     {
      "type": "multiple-choice",
      "question": "«—Tú cocinas fatal. —___» (devolver la broma a quien también cocina mal)",
      "options": [
       "Mira quién habla.",
       "Me muero de risa.",
       "No la capté.",
       "Era broma, hombre."
      ],
      "correctIndex": 0,
      "explanation": "«Mira quién habla» devuelve la crítica a quien comete el mismo fallo. «Me muero de risa» expresa risa, «No la capté» dice que no entiendes la broma y «Era broma, hombre» reconoce que era una broma."
     }
    ]
   }
  },
  "summary": "Seguir la broma, devolverla, ponerse serio o confesar que no la captaste: practica las respuestas pragmáticas al humor."
 },
 "c2r-humor-dialogue-lab-part-2": {
  "exercises": {
   "replace": {
    "2": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "Sorry, I didn't get the joke.",
     "answer": "Perdona, no entendí el chiste.",
     "altAnswers": [
      "Perdona, no capté el chiste.",
      "Perdona, no la capté.",
      "Perdona, no entendí la broma.",
      "Perdona, no he entendido el chiste.",
      "Perdona, no he pillado el chiste.",
      "Perdona, no pillé el chiste.",
      "Perdona, no la he pillado.",
      "Perdona, no he pillado la broma."
     ],
     "explanation": "Captar el chiste = entender la broma; el perfecto indica algo reciente."
    },
    "7": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Corrige la frase.",
     "source": "¡Me muero de risa, me duele mi barriga!",
     "answer": "¡Me muero de risa, me duele la barriga!",
     "altAnswers": [
      "¡Me parto, me duele la barriga!",
      "¡Me muero de risa, me duele el estómago!",
      "¡Me parto de risa, me duele la barriga!",
      "¡Me parto de risa, me duele el estómago!"
     ],
     "explanation": "Con las partes del cuerpo el español usa el artículo, no el posesivo: el «me» ya dice de quién es la barriga. «Me duele mi barriga» es un calco de «my stomach hurts»."
    },
    "15": {
     "type": "multiple-choice",
     "question": "Tu amigo cuenta un chiste y tú no lo has entendido. ¿Qué dices?",
     "options": [
      "Perdona, no la capté.",
      "Mira quién habla.",
      "Me muero de risa.",
      "Era broma, hombre."
     ],
     "correctIndex": 0,
     "explanation": "«Perdona, no la capté» es la forma natural de confesar que no entiendes la broma; «me muero de risa» expresa risa y «era broma, hombre» suaviza una broma pesada."
    },
    "17": {
     "type": "speak",
     "text": "Perdona, no la capté.",
     "prompt": "Dilo en español: \"Sorry, I didn't get it\"",
     "altAnswers": [
      "Perdona, no la he entendido.",
      "Perdona, no la he cogido.",
      "Perdona, no la he captado.",
      "Perdona, no la he pillado."
     ],
     "explanation": "Una forma de decirlo: «Perdona, no la capté». Captar una broma es entenderla; en España se dice también «no la he pillado»."
    },
    "18": {
     "type": "speak",
     "text": "Perdona, no entendí el chiste.",
     "prompt": "Dilo en español: \"Sorry, I didn't get the joke\"",
     "altAnswers": [
      "Perdona, no capté el chiste.",
      "Perdona, no la capté.",
      "Perdona, no entendí la broma.",
      "Perdona, no he entendido el chiste.",
      "Perdona, no he pillado el chiste.",
      "Perdona, no pillé el chiste.",
      "Perdona, no la he pillado.",
      "Perdona, no he pillado la broma."
     ],
     "explanation": "Una forma de decirlo: «Perdona, no entendí el chiste». Captar el chiste = entender la broma; el perfecto indica algo reciente."
    },
    "4": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Cambia la frase para hablar a un grupo (ustedes).",
     "source": "No te ofendas; no quería herirte.",
     "answer": "No se ofendan; no quería herirlos.",
     "altAnswers": [
      "No se ofendan; no quería lastimarlos.",
      "No se ofendan; no quería herirlas.",
      "No se ofendan; no quería hacerles daño.",
      "No os ofendáis; no quería heriros."
     ],
     "explanation": "Con ustedes cambian el mandato negativo (no se ofendan) y el pronombre de objeto (herirlos)."
    },
    "0": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "Perdona, no la ___.",
     "answer": "capté",
     "altAnswers": [
      "entendí",
      "agarré",
      "pillé"
     ],
     "en": "Sorry, I didn't [get] it.",
     "explanation": "captar → capté: pretérito, yo. «Captar» una broma es entenderla (en España, coloquial: «no la he pillado»)."
    }
   }
  },
  "summary": "Seguir la broma, devolverla, ponerse serio o confesar que no la captaste: practica las respuestas pragmáticas al humor."
 }
};
