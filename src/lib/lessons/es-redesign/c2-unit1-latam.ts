// Synced from cheneygross-afk/lengo:src/lib/lessons/es-redesign/c2-unit1-latam.ts by scripts/sync-content.mjs -- edit it there, not here.
// Generated: Latin American wording for C2 Unit 1. C2_UNIT1_LATAM adds
// accepted answers next to the Spain wording; C2_UNIT1_SWAP makes the Latin
// American word the main one where the lesson showed the Spain word (carro,
// departamento, mesero, celular, torta, plomero, manejar, dólares), keeping the
// Spain answer accepted. Content only.
import type { LessonPatch } from "./patch";
export const C2_UNIT1_LATAM: Record<string, { alts?: Record<number, string[]>; checkAlts?: Record<number, Record<number, string[]>> }> = {
 "b2d-patron-lo-anteposicion": {
  "alts": {
   "21": [
    "La noticia se la di a mis papás."
   ]
  }
 },
 "b2r-transform-cleft-sentences": {
  "alts": {
   "26": [
    "Fue en Granada, no en Sevilla, donde mis papás se enamoraron.",
    "Fue en Granada, y no en Sevilla, donde mis papás se enamoraron."
   ]
  }
 },
 "b1r-error-hunt-se-possessives": {
  "alts": {
   "16": []
  }
 },
 "c1r-mission-persuasive-speech": {
  "alts": {
   "3": [
    "Lo que me preocupa es el ruido en la noche."
   ],
   "7": [
    "Esa esquina sí que es peligrosa en la noche."
   ]
  }
 }
};
export const C2_UNIT1_SWAP: Record<string, LessonPatch> = {
 "cuyo-el-cual-1": {
  "exercises": {
   "replace": {
    "4": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "Las amigas con ___ comparto departamento son enfermeras.",
     "answer": "las cuales",
     "en": "The friends (f.) [whom] I share an apartment with are nurses.",
     "altAnswers": [
      "las que",
      "quienes"
     ],
     "explanation": "Con personas tras preposición: las cuales (o las que, quienes) concuerda con amigas; «con que» no sirve para personas."
    }
   }
  }
 },
 "b2d-patron-cuyo": {
  "exercises": {
   "replace": {
    "3": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Sustituye «carro» por «moto» y adapta la frase.",
     "source": "Es la mujer cuyo carro robaron.",
     "answer": "Es la mujer cuya moto robaron.",
     "explanation": "Al cambiar lo poseído, cambia cuyo: moto es femenino → cuya. La mujer sigue igual porque no decide nada."
    },
    "11": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "Ayudé a un anciano ___ llaves se habían caído al suelo.",
     "answer": "cuyas",
     "en": "I helped an old man [whose] keys had fallen on the floor.",
     "explanation": "Llaves es femenino plural: cuyas, aunque el anciano sea hombre."
    }
   }
  },
  "sections": {
   "0": {
    "body": [
     "Recuerda la regla: cuyo sustituye al posesivo «su» dentro de una relativa, y como «su», «nuestra» o «nuestros», concuerda con lo poseído, la palabra que viene justo DESPUÉS: El escritor cuya novela leí (novela → cuya). La casa cuyos balcones son azules (balcones → cuyos).",
     "Truco para no fallar: tapa el poseedor y mira solo el sustantivo que sigue a cuyo. El género del poseedor (el escritor, la casa) no cuenta nunca, aunque sea lo primero que oyes."
    ]
   }
  }
 },
 "b2d-patron-cuyo-part-2": {
  "exercises": {
   "replace": {
    "2": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "She's the woman whose car was stolen.",
     "answer": "Es la mujer cuyo carro robaron.",
     "altAnswers": [
      "Es la mujer a la que le robaron el carro.",
      "Es la mujer cuyo carro fue robado.",
      "Es la mujer cuyo auto robaron.",
      "Es la mujer cuyo coche robaron.",
      "Es la mujer a la que le robaron el coche.",
      "Es la mujer cuyo coche fue robado."
     ],
     "explanation": "Cuyo concuerda con lo poseído (carro), no con la mujer."
    },
    "17": {
     "type": "speak",
     "text": "Es la mujer cuyo carro robaron.",
     "prompt": "Dilo en español: \"She's the woman whose car was stolen\"",
     "altAnswers": [
      "Es la mujer a la que le robaron el carro.",
      "Es la mujer cuyo carro fue robado.",
      "Es la mujer cuyo auto robaron.",
      "Es la mujer cuyo coche robaron.",
      "Es la mujer a la que le robaron el coche.",
      "Es la mujer cuyo coche fue robado."
     ],
     "explanation": "Una forma de decirlo: «Es la mujer cuyo carro robaron». Cuyo concuerda con lo poseído (carro), no con la mujer."
    }
   }
  }
 },
 "b2d-cadena-unir-con-cuyo": {
  "exercises": {
   "replace": {
    "3": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Transforma las dos frases en una sola con cuyo.",
     "source": "Alquilamos un departamento. Su cocina era enorme.",
     "answer": "Alquilamos un departamento cuya cocina era enorme.",
     "altAnswers": [
      "Alquilamos un apartamento cuya cocina era enorme.",
      "Alquilamos un piso cuya cocina era enorme."
     ],
     "explanation": "Su cocina → cuya cocina; que departamento sea masculino no importa."
    },
    "6": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "I bought a car whose engine makes a strange noise.",
     "answer": "Compré un carro cuyo motor hace un ruido raro.",
     "altAnswers": [
      "Compré un carro cuyo motor hace un ruido extraño.",
      "Compré un auto cuyo motor hace un ruido raro.",
      "Compré un auto cuyo motor hace un ruido extraño.",
      "Compré un coche cuyo motor hace un ruido raro.",
      "Compré un coche cuyo motor hace un ruido extraño."
     ],
     "explanation": "Su motor → cuyo motor."
    },
    "13": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Corrige la frase.",
     "source": "Tengo un vecino que su carro siempre bloquea el garaje.",
     "answer": "Tengo un vecino cuyo carro siempre bloquea el garaje.",
     "altAnswers": [
      "Tengo un vecino cuyo coche siempre bloquea el garaje."
     ],
     "explanation": "«Que su» es la forma coloquial que hay que evitar en un registro cuidado: su carro → cuyo carro."
    },
    "16": {
     "type": "speak",
     "text": "Compré un carro cuyo motor hace un ruido raro.",
     "prompt": "Dilo en español: \"I bought a car whose engine makes a strange noise\"",
     "altAnswers": [
      "Compré un carro cuyo motor hace un ruido extraño.",
      "Compré un auto cuyo motor hace un ruido raro.",
      "Compré un auto cuyo motor hace un ruido extraño.",
      "Compré un coche cuyo motor hace un ruido raro.",
      "Compré un coche cuyo motor hace un ruido extraño."
     ],
     "explanation": "Una forma de decirlo: «Compré un carro cuyo motor hace un ruido raro». Su motor → cuyo motor."
    }
   }
  }
 },
 "emphasis-word-order-1": {
  "exercises": {
   "replace": {
    "10": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "I had barely sat down when the waiter came.",
     "answer": "Apenas me había sentado cuando llegó el mesero.",
     "altAnswers": [
      "Apenas me había sentado cuando vino el mesero.",
      "Apenas me había sentado cuando llegó el camarero.",
      "Apenas me había sentado cuando vino el camarero."
     ],
     "explanation": "Apenas al principio con pluscuamperfecto."
    },
    "14": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "No sabes ___ difícil que fue encontrar departamento.",
     "answer": "lo",
     "en": "You don't know [how] difficult it was to find an apartment.",
     "explanation": "Lo + adjetivo + que para enfatizar el grado."
    }
   }
  }
 },
 "b2d-patron-lo-anteposicion": {
  "exercises": {
   "replace": {
    "5": {
     "type": "multiple-choice",
     "question": "«Los ejercicios ya ___ he hecho.»",
     "options": [
      "los",
      "les",
      "lo",
      "—"
     ],
     "correctIndex": 0,
     "explanation": "Si el complemento directo va delante del verbo, se repite con un pronombre obligatorio que concuerda: los ejercicios → los. «Les» sería leísmo de plural (se prefiere «los»), «lo» es singular y sin pronombre falta la huella del complemento antepuesto."
    },
    "9": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Reescribe la frase empezando por «el carro».",
     "source": "Vendimos el carro el año pasado.",
     "answer": "El carro lo vendimos el año pasado.",
     "altAnswers": [
      "El auto lo vendimos el año pasado.",
      "El coche lo vendimos el año pasado."
     ],
     "explanation": "Al poner el carro delante, se retoma con lo (masculino singular) justo antes del verbo."
    },
    "16": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "They will lend the apartment to their friends (start with «el departamento»).",
     "answer": "El departamento se lo prestarán a sus amigos.",
     "altAnswers": [
      "El departamento se lo dejarán a sus amigos.",
      "El departamento se lo van a prestar a sus amigos.",
      "El piso se lo prestarán a sus amigos.",
      "El piso se lo dejarán a sus amigos.",
      "El piso se lo van a prestar a sus amigos."
     ],
     "explanation": "Directo + indirecto: se lo."
    },
    "23": {
     "type": "word-order",
     "prompt": "Ordena las palabras.",
     "words": [
      "La",
      "torta",
      "la",
      "ha",
      "hecho",
      "mi",
      "abuela"
     ],
     "translation": "My grandmother has made the cake",
     "explanation": "La torta antepuesta se retoma con la."
    }
   }
  }
 },
 "b2d-cadena-hendidas": {
  "exercises": {
   "replace": {
    "16": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Corrige la frase.",
     "source": "Fue los niños quien se comieron la torta, no el perro.",
     "answer": "Fueron los niños quienes se comieron la torta, no el perro.",
     "altAnswers": [
      "Fueron los niños los que se comieron la torta, no el perro.",
      "Fueron los niños quienes se comieron el pastel, no el perro.",
      "Fueron los niños quienes se comieron la tarta, no el perro.",
      "Fueron los niños los que se comieron la tarta, no el perro."
     ],
     "explanation": "Lo destacado es plural (los niños): ser y el relativo concuerdan en plural, fueron… quienes (o los que)."
    }
   }
  }
 },
 "b2r-transform-cleft-sentences": {
  "exercises": {
   "replace": {
    "11": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "Fue así ___ aprendí a manejar: sin profesor.",
     "answer": "como",
     "en": "That was [how] I learned to drive: without a teacher.",
     "explanation": "Para destacar el modo se usa como."
    }
   }
  }
 },
 "b1r-error-hunt-se-possessives": {
  "exercises": {
   "replace": {
    "16": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "These glasses aren't hers; hers are red.",
     "answer": "Estos lentes no son suyos; los suyos son rojos.",
     "altAnswers": [
      "Estos lentes no son de ella; los suyos son rojos.",
      "Estos anteojos no son suyos; los suyos son rojos.",
      "Estas gafas no son suyas; las suyas son rojas.",
      "Estas gafas no son de ella; las suyas son rojas."
     ],
     "explanation": "Tras «ser» sin artículo (no son suyos); como sujeto, «los suyos» con artículo."
    },
    "19": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "I forgot my phone. Can you (tú) lend me yours?",
     "answer": "Olvidé mi celular. ¿Me prestas el tuyo?",
     "altAnswers": [
      "Me olvidé el celular. ¿Me prestas el tuyo?",
      "He olvidado mi celular. ¿Me prestas el tuyo?",
      "Se me olvidó el celular. ¿Me prestas el tuyo?",
      "Olvidé mi móvil. ¿Me prestas el tuyo?",
      "Me olvidé el móvil. ¿Me prestas el tuyo?",
      "He olvidado mi móvil. ¿Me prestas el tuyo?",
      "Se me olvidó el móvil. ¿Me prestas el tuyo?"
     ],
     "explanation": "«Mi» delante; «el tuyo» sin sustantivo y con artículo."
    },
    "23": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Cambia «un plomero» por «dos plomeros».",
     "source": "Se necesita un plomero.",
     "answer": "Se necesitan dos plomeros.",
     "altAnswers": [
      "Se necesitan dos fontaneros."
     ],
     "explanation": "Lo que se necesita es el sujeto de la pasiva refleja: al pasar a plural, el verbo también pasa a plural."
    },
    "24": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Sustituye «de nosotros» por un posesivo tónico.",
     "source": "Este carro es de nosotros.",
     "answer": "Este carro es nuestro.",
     "explanation": "«De nosotros» tras «ser» se dice con el tónico que concuerda con «carro»: nuestro.",
     "altAnswers": [
      "Este coche es nuestro."
     ]
    }
   }
  },
  "sections": {
   "0": {
    "body": [
     "En «Se venden departamentos», los departamentos son el sujeto gramatical (son lo que se vende), así que el verbo concuerda con ellos: plural. El error típico es dejar el verbo siempre en singular. Excepción: si lo que sigue es una persona con «a» (se busca a los testigos), el se es impersonal y el verbo se queda en singular.",
     "En la pasiva con ser, la misma lógica: el participio concuerda con el sujeto (la reunión fue cancelada)."
    ],
    "examples": [
     {
      "es": "✗ Se necesita meseros. → ✓ Se necesitan meseros.",
      "en": "Waiters needed."
     }
    ],
    "check": [
     {
      "type": "fill-blank",
      "prompt": "Corrige.",
      "sentence": "Se ___ computadoras. (reparar; el alumno escribió: repara)",
      "answer": "reparan",
      "explanation": "Con se pasivo el verbo concuerda con «computadoras» (plural): se reparan."
     }
    ]
   },
   "1": {
    "examples": [
     {
      "es": "✗ Es mío libro. → ✓ Es mi libro. / Es mío.",
      "en": "It's my book. / It's mine."
     },
     {
      "es": "✗ Tu carro es rojo y mi es azul. → ✓ … y el mío es azul.",
      "en": "…and mine is blue."
     }
    ]
   }
  }
 },
 "b2r-tema-traducir-fielmente": {
  "exercises": {
   "replace": {
    "3": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "The witness said she had seen the car at midnight.",
     "answer": "La testigo dijo que había visto el carro a medianoche.",
     "altAnswers": [
      "La testigo dijo que vio el carro a medianoche.",
      "La testigo dijo que había visto el auto a medianoche.",
      "La testigo dijo que había visto el coche a medianoche.",
      "La testigo dijo que vio el coche a medianoche."
     ],
     "explanation": "«Vi el carro» → «había visto»; el pretérito también es aceptable."
    }
   }
  }
 },
 "legal-administrative-spanish-part-1-2": {
  "sections": {
   "1": {
    "check": [
     {
      "type": "multiple-choice",
      "question": "Dos hermanos venden un departamento ante notario. ¿Quién NO es parte del negocio jurídico?",
      "options": [
       "la notaria",
       "los hermanos que venden",
       "la compradora",
       "los otorgantes de la escritura"
      ],
      "correctIndex": 0,
      "explanation": "La notaria es la fedataria: da fe del acto y certifica su validez formal, pero es un tercero, no se obliga a nada. Vendedores, compradora y otorgantes sí son partes, porque el contrato los obliga."
     }
    ]
   }
  }
 },
 "legal-administrative-spanish-part-1-2-part-2": {
  "exercises": {
   "replace": {
    "0": {
     "type": "multiple-choice",
     "question": "Una abuela regala un departamento a su nieta ante notario. ¿Qué pareja de términos describe, por ese orden, a la abuela y a su nieta?",
     "options": [
      "La donante y la donataria",
      "La donataria y la donante",
      "La otorgada y la donante",
      "La fedataria y la compareciente"
     ],
     "correctIndex": 0,
     "explanation": "La abuela da: -nte, la donante. La nieta recibe: -ario, la donataria. La segunda opción invierte los papeles; «otorgada» no designa a una persona y la fedataria es el notario, que no es parte del negocio."
    }
   }
  }
 },
 "c1r-mission-persuasive-speech": {
  "exercises": {
   "replace": {
    "6": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Reescribe la frase anteponiendo «parques» para crear contraste.",
     "source": "En este barrio hay pocos parques y demasiados carros.",
     "answer": "Parques hay pocos en este barrio; carros, demasiados.",
     "altAnswers": [
      "Parques hay pocos en el barrio; carros, demasiados.",
      "Parques hay pocos en este barrio; carros, de sobra.",
      "Parques hay pocos en este barrio, y carros, demasiados.",
      "Parques hay pocos en este barrio; coches, demasiados.",
      "Parques hay pocos en el barrio; coches, demasiados.",
      "Parques hay pocos en este barrio; coches, de sobra.",
      "Parques hay pocos en este barrio, y coches, demasiados."
     ],
     "explanation": "Al anteponer «parques» (sin artículo, complemento de «haber») se crea un contraste con «carros»; en la segunda parte se omite el verbo. Con «haber» no hay pronombre de reduplicación porque el sustantivo va sin determinante."
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
     "source": "The prizes, which will be awarded by the minister (a woman), are worth ten thousand dollars each.",
     "answer": "Los premios, los cuales serán entregados por la ministra, están dotados con diez mil dólares cada uno.",
     "altAnswers": [
      "Los premios, que serán entregados por la ministra, están dotados con diez mil dólares cada uno.",
      "Los premios, que entregará la ministra, están dotados con diez mil dólares cada uno.",
      "Los premios, los cuales entregará la ministra, están dotados con diez mil dólares cada uno.",
      "Los premios, los cuales serán entregados por la ministra, valen diez mil dólares cada uno.",
      "Los premios, que serán entregados por la ministra, valen diez mil dólares cada uno.",
      "Los premios, los cuales serán entregados por la ministra, están dotados con diez mil euros cada uno.",
      "Los premios, que serán entregados por la ministra, están dotados con diez mil euros cada uno.",
      "Los premios, que entregará la ministra, están dotados con diez mil euros cada uno.",
      "Los premios, los cuales entregará la ministra, están dotados con diez mil euros cada uno.",
      "Los premios, los cuales serán entregados por la ministra, valen diez mil euros cada uno.",
      "Los premios, que serán entregados por la ministra, valen diez mil euros cada uno."
     ],
     "explanation": "Los cuales retoma a los premios en un texto formal; serán entregados es pasiva con ser."
    }
   }
  }
 },
 "b2r-tema-musica-generaciones-part-2": {
  "exercises": {
   "replace": {
    "0": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "Por mucho que ___ la canción, mi abuela la reconoce enseguida.",
     "answer": "cambien",
     "altAnswers": [],
     "en": "However much they [change] the song, my grandmother recognizes it right away.",
     "explanation": "Por mucho que + subjuntivo: cambiar → cambien (ellos). Aunque la cambien, el resultado no varía."
    }
   }
  }
 }
};
