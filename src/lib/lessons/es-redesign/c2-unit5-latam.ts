// Synced from cheneygross-afk/lengo:src/lib/lessons/es-redesign/c2-unit5-latam.ts by scripts/sync-content.mjs -- edit it there, not here.
// Generated: Latin American wording for C2 Unit 5. C2_UNIT5_LATAM adds
// accepted answers next to the Spain wording; C2_UNIT5_SWAP makes the Latin
// American word the main one (carro, departamento, computadoras, suéteres,
// lentes, estacionar, costo, baterista, renunciar, dólares), keeping the Spain
// answer accepted. Content only.
import type { LessonPatch } from "./patch";
export const C2_UNIT5_LATAM: Record<string, { alts?: Record<number, string[]>; checkAlts?: Record<number, Record<number, string[]>> }> = {
 "b1d-rep-mezcla-consultorio": {
  "alts": {
   "9": [
    "Mis papás nunca han aceptado a mi novia.",
    "Mis papás no han aceptado nunca a mi novia.",
    "Mis papás nunca aceptaron a mi novia."
   ],
   "13": [
    "No se lo pregunte delante de sus papás."
   ]
  }
 },
 "b1d-rep-combinados-habla-de-ti": {
  "alts": {
   "5": [
    "¿Mi guitarra? Me la regalaron mis papás cuando tenía diez años.",
    "¿Mi guitarra? Mis papás me la regalaron cuando tenía diez años."
   ]
  }
 },
 "passive-voice-impersonal-se-drill-1": {
  "alts": {
   "14": [
    "Se venden departamentos en esta calle.",
    "En esta calle se venden departamentos."
   ]
  }
 },
 "prepositional-verbs-part-1-3": {
  "alts": {
   "4": [
    "Quedamos en un precio de mil dólares.",
    "Quedamos en un precio de 1000 dólares.",
    "Quedamos en mil dólares."
   ]
  }
 },
 "c1r-sort-prepositional-verbs": {
  "alts": {
   "14": [
    "Mi hermano no se atreve a pedirle el carro a mi padre."
   ]
  }
 },
 "c1r-contrast-meaning-by-preposition-part-2": {
  "alts": {
   "7": [
    "La policía todavía no ha dado con el carro utilizado en el robo.",
    "La policía aún no ha dado con el carro utilizado en el robo.",
    "La policía todavía no ha dado con el carro que se utilizó en el robo.",
    "La policía todavía no ha dado con el carro usado en el robo."
   ]
  }
 }
};
export const C2_UNIT5_SWAP: Record<string, LessonPatch> = {
 "b1d-rep-combinados-habla-de-ti": {
  "exercises": {
   "replace": {
    "1": {
     "type": "fill-blank",
     "prompt": "Completa con dos pronombres.",
     "sentence": "Mi carro no ___ presto a nadie.",
     "answer": "se lo",
     "explanation": "A nadie → le, que delante de lo (mi carro) se convierte en se: no se lo presto."
    },
    "8": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "Mis lentes de sol ___ presto a mi prima a veces.",
     "answer": "se los",
     "en": "My sunglasses — I sometimes lend [them to] my cousin.",
     "explanation": "«Le» se convierte en «se» delante de «los» (los lentes): se los presto."
    },
    "10": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "My sweaters? My mother knitted them for me.",
     "answer": "¿Mis suéteres? Me los tejió mi madre.",
     "altAnswers": [
      "¿Mis suéteres? Mi madre me los tejió.",
      "¿Mis suéteres? Me los hizo mi madre.",
      "¿Mis jerséis? Me los tejió mi madre.",
      "¿Mis jerséis? Mi madre me los tejió.",
      "¿Mis jerséis? Me los hizo mi madre."
     ],
     "explanation": "«Me los»: primero la persona, luego la cosa en masculino plural."
    }
   }
  }
 },
 "passive-impersonal-mastery-3": {
  "exercises": {
   "replace": {
    "9": {
     "type": "multiple-choice",
     "question": "¿Qué oración tiene sujeto paciente y no complemento de persona?",
     "options": [
      "Se compraron tres computadoras.",
      "Se atendió a los clientes.",
      "Se avisó a los vecinos.",
      "Se despidió a dos empleados."
     ],
     "correctIndex": 0,
     "explanation": "«Tres computadoras» es una cosa sin «a», así que es sujeto paciente y el verbo concuerda."
    }
   }
  }
 },
 "passive-voice-impersonal-se-drill-1": {
  "exercises": {
   "replace": {
    "3": {
     "type": "multiple-choice",
     "question": "¿Cuál oración es un ejemplo de se impersonal?",
     "options": [
      "Se venden carros usados.",
      "Se alquila una habitación.",
      "Se estudia mucho para este examen.",
      "Se necesitan más voluntarios."
     ],
     "correctIndex": 2,
     "explanation": "'Se estudia' no tiene un sujeto paciente plural que reciba la acción; es una construcción impersonal, siempre en singular. Las demás sí tienen un sujeto paciente ('carros', 'una habitación', 'voluntarios') con el que el verbo concuerda."
    },
    "14": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Transforma la frase en pasiva refleja.",
     "source": "Venden departamentos en esta calle.",
     "answer": "Se venden departamentos en esta calle.",
     "altAnswers": [
      "En esta calle se venden departamentos.",
      "Se venden pisos en esta calle.",
      "En esta calle se venden pisos."
     ],
     "explanation": "Con un agente indeterminado y una cosa como objeto, la pasiva refleja es lo natural: «se» + verbo concordado con el sujeto paciente (departamentos → venden)."
    }
   }
  }
 },
 "c1r-extra-impersonal-alternatives": {
  "exercises": {
   "replace": {
    "3": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "They say the mayor will resign before the end of the month.",
     "answer": "Dicen que el alcalde renunciará antes de que acabe el mes.",
     "altAnswers": [
      "Dicen que el alcalde va a dimitir antes de que acabe el mes.",
      "Dicen que el alcalde renunciará antes de que termine el mes.",
      "Dicen que el alcalde renunciará antes de fin de mes.",
      "Se dice que el alcalde renunciará antes de que acabe el mes.",
      "Dicen que el alcalde dimitirá antes de que acabe el mes.",
      "Dicen que el alcalde dimitirá antes de que termine el mes.",
      "Dicen que el alcalde dimitirá antes de fin de mes.",
      "Se dice que el alcalde dimitirá antes de que acabe el mes."
     ],
     "explanation": "La tercera persona del plural sin sujeto expresa un agente indeterminado y coloquial; no hace falta (ni conviene) añadir «ellos», porque no se refiere a nadie concreto."
    },
    "7": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "At this hour they no longer serve lunch, but they do serve tapas.",
     "answer": "A estas horas ya no sirven comidas, pero sí sirven tapas.",
     "altAnswers": [
      "A estas horas ya no se sirven comidas, pero sí se sirven tapas.",
      "A estas horas ya no sirven almuerzos, pero sí sirven tapas.",
      "A estas horas ya no sirven el almuerzo, pero sí sirven tapas.",
      "A estas horas ya no se sirve el almuerzo, pero sí se sirven tapas."
     ],
     "explanation": "El «they» indeterminado del mesero o la cocina se dice con la tercera persona del plural sin sujeto."
    },
    "20": {
     "type": "speak",
     "text": "Dicen que el alcalde renunciará antes de que acabe el mes.",
     "prompt": "Dilo en español: \"They say the mayor will resign before the end of the month\"",
     "altAnswers": [
      "Dicen que el alcalde va a dimitir antes de que acabe el mes.",
      "Dicen que el alcalde renunciará antes de que termine el mes.",
      "Dicen que el alcalde renunciará antes de fin de mes.",
      "Se dice que el alcalde renunciará antes de que acabe el mes.",
      "Dicen que el alcalde dimitirá antes de que acabe el mes.",
      "Dicen que el alcalde dimitirá antes de que termine el mes.",
      "Dicen que el alcalde dimitirá antes de fin de mes.",
      "Se dice que el alcalde dimitirá antes de que acabe el mes."
     ],
     "explanation": "Una forma de decirlo: «Dicen que el alcalde renunciará antes de que acabe el mes». La tercera persona del plural sin sujeto expresa un agente indeterminado y coloquial; no hace falta (ni conviene) añadir «ellos», porque no se refiere a nadie concreto."
    }
   }
  }
 },
 "prepositional-verbs-part-1-3": {
  "exercises": {
   "replace": {
    "4": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español (usa «quedar en»).",
     "source": "We agreed on a price of a thousand dollars.",
     "answer": "Quedamos en un precio de mil dólares.",
     "altAnswers": [
      "Quedamos en un precio de 1000 dólares.",
      "Quedamos en mil dólares.",
      "Quedamos en un precio de mil euros.",
      "Quedamos en un precio de 1000 euros.",
      "Quedamos en mil euros."
     ],
     "explanation": "«Quedar en» también introduce lo acordado cuando va seguido de un sustantivo. Error típico: «quedamos un precio» o «quedamos a un precio»."
    },
    "19": {
     "type": "write",
     "prompt": "Escribe un correo a tus amigos para contarles cómo encontraste por fin departamento después de meses de búsqueda. Usa verbos con preposición fija, sobre todo con «en» y «con».",
     "minWords": 60,
     "maxWords": 130,
     "rubric": [
      "Al menos tres verbos con en (insistir en, empeñarse en, quedar en, fijarse en, consistir en)",
      "Al menos dos verbos con con (dar con, contar con, encontrarse con)",
      "La preposición se mantiene ante que (insistió en que…), sin queísmo",
      "Tono informal de correo entre amigos"
     ],
     "modelAnswer": "¡Hola a todos! Por fin tengo departamento. Después de cuatro meses buscando, la semana pasada di con un ático precioso en Lavapiés. La verdad es que me fijé en el anuncio por casualidad. La dueña insistió en que la visita fuera ese mismo día, y allí me encontré con otros diez interesados. Su condición consistía en pagar seis meses por adelantado, pero mi madre se empeñó en ayudarme. Quedamos en firmar el contrato el lunes. Para la mudanza cuento con ustedes, ¿sí? ¡Los invito a cenar! Besos, Laura",
     "explanation": "El régimen es fijo: fijarse en, insistir en que, consistir en, empeñarse en, quedar en; dar con (encontrar), encontrarse con y contar con. Ante una oración con que, la preposición se mantiene (insistió en que la visita fuera…)."
    }
   }
  }
 },
 "prepositional-verbs-part-1-mastery-check": {
  "exercises": {
   "replace": {
    "11": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español (usa «quedar en»).",
     "source": "We agreed to split the cost of the gift.",
     "answer": "Quedamos en repartir el costo del regalo.",
     "altAnswers": [
      "Quedamos en dividir el costo del regalo.",
      "Quedamos en dividir el gasto del regalo.",
      "Quedamos en compartir el costo del regalo.",
      "Quedamos en repartir el gasto del regalo.",
      "Quedamos en repartir el coste del regalo.",
      "Quedamos en dividir el coste del regalo.",
      "Quedamos en compartir el coste del regalo."
     ],
     "explanation": "«Quedar en» introduce el contenido de un acuerdo e irá seguido de infinitivo. Error típico: «quedamos a repartir»."
    }
   }
  }
 },
 "c1r-sort-prepositional-verbs": {
  "exercises": {
   "replace": {
    "5": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Cambia «acordarse de» por «recordar».",
     "source": "¿Te acuerdas de dónde estacionamos el carro?",
     "answer": "¿Recuerdas dónde estacionamos el carro?",
     "altAnswers": [
      "¿Recuerdas dónde aparcamos el coche?",
      "¿Recuerdas dónde estacionamos el coche?",
      "¿Recuerdas dónde aparcamos el carro?"
     ],
     "explanation": "«Recordar» es transitivo y no lleva preposición ni pronombre: «¿recuerdas dónde…?». Solo el pronominal «acordarse» exige «de». Mezclarlos («*recuerdo de», «*me acuerdo dónde») es un error frecuente."
    },
    "14": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Corrige la frase.",
     "source": "Mi hermano no se atreve de pedirle el carro a mi padre.",
     "answer": "Mi hermano no se atreve a pedirle el carro a mi padre.",
     "explanation": "«Atreverse» rige «a» ante infinitivo, como los demás verbos que apuntan hacia una acción (negarse a, decidirse a). «De» es un cruce con «tratar de».",
     "altAnswers": [
      "Mi hermano no se atreve a pedirle el coche a mi padre."
     ]
    }
   }
  }
 },
 "c1r-contrast-meaning-by-preposition-part-2": {
  "exercises": {
   "replace": {
    "7": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español (usa «dar con»).",
     "source": "The police still haven't found the car used in the robbery.",
     "answer": "La policía todavía no ha dado con el carro utilizado en el robo.",
     "altAnswers": [
      "La policía aún no ha dado con el carro utilizado en el robo.",
      "La policía todavía no ha dado con el carro que se utilizó en el robo.",
      "La policía todavía no ha dado con el auto utilizado en el robo.",
      "La policía todavía no ha dado con el carro usado en el robo.",
      "La policía todavía no ha dado con el coche utilizado en el robo.",
      "La policía aún no ha dado con el coche utilizado en el robo.",
      "La policía todavía no ha dado con el coche que se utilizó en el robo.",
      "La policía todavía no ha dado con el coche usado en el robo."
     ],
     "explanation": "«Dar con» significa encontrar tras buscar; aquí la búsqueda sigue sin éxito. Error típico: «ha dado al carro», que cambiaría el sentido."
    },
    "5": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "I've arranged to have lunch with my boss (a man) on Thursday.",
     "answer": "He quedado con mi jefe para comer el jueves.",
     "altAnswers": [
      "He quedado con mi jefe el jueves para comer.",
      "He quedado con mi jefe para almorzar el jueves.",
      "He quedado a comer con mi jefe el jueves.",
      "Quedé con mi jefe para comer el jueves.",
      "Quedé de comer con mi jefe el jueves.",
      "Voy a comer con mi jefe el jueves."
     ],
     "explanation": "«Quedar con» + persona significa citarse con ella. Error típico: «he quedado en mi jefe»."
    },
    "8": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "I'm going to meet up with Lucía at the station at eight.",
     "answer": "Voy a quedar con Lucía en la estación a las ocho.",
     "altAnswers": [
      "Quedo con Lucía en la estación a las ocho.",
      "Voy a encontrarme con Lucía en la estación a las ocho.",
      "Me voy a encontrar con Lucía en la estación a las ocho.",
      "He quedado con Lucía en la estación a las ocho.",
      "Quedaré con Lucía en la estación a las ocho.",
      "Voy a verme con Lucía en la estación a las ocho.",
      "Quedé de verme con Lucía en la estación a las ocho."
     ],
     "explanation": "«Quedar con» + persona: citarse. Error típico: «quedar en Lucía»."
    }
   }
  }
 },
 "b2r-mission-passionate-review": {
  "exercises": {
   "replace": {
    "3": {
     "type": "matching",
     "instructions": "Relaciona cada frase neutra con su versión enfática.",
     "pairs": [
      {
       "left": "Toca muy bien.",
       "right": "¡Lo bien que toca!"
      },
      {
       "left": "No había visto nunca nada igual.",
       "right": "Jamás había visto nada igual."
      },
      {
       "left": "Compré las entradas ayer.",
       "right": "Las entradas las compré ayer."
      },
      {
       "left": "El baterista me impresionó.",
       "right": "Fue el baterista quien me impresionó."
      }
     ],
     "explanation": "Exclamación, adverbio negativo al principio (sin «no»), anteposición y frase hendida."
    },
    "15": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "It surprised me how young the drummer was, and the solo, he played it without a single mistake.",
     "answer": "Me sorprendió lo joven que era el baterista, y el solo lo tocó sin un solo error.",
     "altAnswers": [
      "Me sorprendió lo joven que era el baterista, y el solo lo tocó sin cometer ni un error.",
      "Me sorprendió lo joven que era el batería, y el solo lo tocó sin un solo error.",
      "Me sorprendió lo joven que era el batería, y el solo lo tocó sin cometer ni un error."
     ],
     "explanation": "Combina lo + adjetivo + que con un objeto antepuesto (el solo lo tocó)."
    },
    "16": {
     "type": "write",
     "prompt": "Escribe una crítica para un blog cultural sobre un concierto, una película o una obra de teatro que te haya impresionado (para bien o para mal). Usa recursos de énfasis.",
     "minWords": 150,
     "maxWords": 180,
     "rubric": [
      "Datos básicos: qué, quién, dónde y cuándo",
      "Una valoración con al menos dos estructuras de énfasis (lo + adjetivo + que, fue… quien, jamás había…)",
      "Un aspecto positivo y uno negativo, o una comparación",
      "Una recomendación final al lector"
     ],
     "modelAnswer": "El sábado pasado, la joven cantante chilena Rosa Aguirre llenó por completo el Palacio de los Deportes de Madrid, y lo que vivimos allí fue mucho más que un concierto. Desde la primera canción quedó claro lo bien que se entiende con su banda: cada tema sonaba distinto al disco, más crudo y más íntimo. Jamás había oído un silencio así en un recinto con quince mil personas. Fue en «Agua de mar» cuando el público entero se puso de pie; ella la cantó casi a capela, con una voz que parecía romperse y que, sin embargo, nunca falló. No todo fue perfecto: el sonido de las primeras filas era demasiado fuerte y algunas letras se perdían. Aun así, lo que más recuerdo no es el volumen, sino la emoción. Si tienen la oportunidad de verla en vivo, no lo duden ni un segundo. Es de esas noches que no se olvidan.",
     "explanation": "La crítica combina información (quién, dónde, cuándo) con valoración. El énfasis se consigue con lo + adverbio + que (lo bien que se entiende), las hendidas (fue en… cuando), jamás había + participio y la estructura lo que más… no es…, sino…"
    }
   }
  },
  "sections": {
   "0": {
    "body": [
     "Lo + adjetivo/adverbio + que (lo bien que canta), anteposición con pronombre (La canción, la cantó como nadie), frases hendidas (Fue el baterista quien me impresionó), ¡Qué + sustantivo + tan/más + adjetivo! (¡Qué voz tan potente!) y adverbios enfáticos al inicio (Jamás había visto…)."
    ]
   }
  }
 },
 "c2r-conflict-story-detective": {
  "exercises": {
   "replace": {
    "0": {
     "type": "multiple-choice",
     "question": "«Los dos quieren un reparto justo» busca…",
     "options": [
      "un interés común",
      "culpar a Pablo",
      "cerrar el debate",
      "cambiar de tema"
     ],
     "correctIndex": 0,
     "explanation": "«Los dos quieren un reparto justo» busca un interés común, un terreno compartido. No culpa a Pablo, no cierra el debate ni cambia de tema."
    },
    "8": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "Entonces los dos ___ trabajar juntos de nuevo, ¿verdad?",
     "answer": "quieren",
     "altAnswers": [],
     "en": "So you both [want] to work together again, right? (ustedes)",
     "explanation": "Señalar lo que ambos quieren es una forma de establecer el interés común: «los dos quieren» (ustedes)."
    },
    "20": {
     "type": "speak",
     "text": "Los dos quieren un reparto justo.",
     "prompt": "Dilo en español: \"You both want a fair distribution\"",
     "altAnswers": [
      "Ustedes dos quieren un reparto justo.",
      "Los dos quieren un reparto justo del reconocimiento."
     ],
     "explanation": "Una forma de decirlo: «Los dos quieren un reparto justo.». «Los dos quieren» habla a dos personas (ustedes)."
    }
   }
  },
  "sections": {
   "1": {
    "body": [
     "Mediadora: Gracias a los dos por venir. Primero, cada uno contará cómo lo vive, sin interrupciones. — Ana: Siento que mi trabajo no se reconoce. — Mediadora: Si te entiendo bien, lo que te duele es no ver tu nombre en el informe. — Pablo: Yo no lo hice con mala intención; simplemente no pensé en ello. — Mediadora: Entonces, los dos quieren un reparto justo del reconocimiento. ¿Qué proponen?"
    ],
    "examples": [
     {
      "es": "Cada uno contará cómo lo vive, sin interrupciones.",
      "en": "Each of you will say how you see it, without interruptions."
     },
     {
      "es": "Los dos quieren un reparto justo.",
      "en": "You both want a fair distribution."
     }
    ]
   }
  }
 },
 "c1r-contrast-meaning-by-preposition": {
  "sections": {
   "0": {
    "body": [
     "Recuerda la regla: en estos verbos la preposición no es un adorno, sino la pieza que decide el significado. Si eliges la equivocada, la frase suele ser gramatical, pero dice otra cosa.",
     "Pensar en (tener en la mente) / pensar de (opinar: «¿qué piensas de…?»). Dar con (encontrar) / dar a (tener vistas a). Acabar con (eliminar) / acabar de + infinitivo (hace muy poco). Quedar en (acordar) / quedar con (citarse; en América también «verse con» o «quedar de verse»)."
    ]
   }
  },
  "exercises": {
   "replace": {
    "3": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "I've arranged to meet my sister at eight.",
     "answer": "He quedado con mi hermana a las ocho.",
     "altAnswers": [
      "Quedé con mi hermana a las ocho.",
      "He quedado con mi hermana a las 8.",
      "Quedé con mi hermana a las ocho.",
      "Voy a verme con mi hermana a las ocho.",
      "Quedé de verme con mi hermana a las ocho.",
      "Me voy a ver con mi hermana a las ocho."
     ],
     "explanation": "«Quedar con» alguien significa citarse con esa persona."
    }
   }
  }
 }
};
