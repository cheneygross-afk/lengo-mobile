// Synced from cheneygross-afk/lengo:src/lib/lessons/es-redesign/b1-unit3-latam.ts by scripts/sync-content.mjs -- edit it there, not here.
// Generated: Latin American wording for B1 Unit 3. B1_UNIT3_LATAM adds
// accepted answers (carro, celular, papá / mamá, bus, lindo, café, angosto,
// departamento) next to the Spain wording; B1_UNIT3_SWAP makes the Latin
// American word the main one where the lesson showed the Spain word
// (departamento, carro, celular, papas, mesero), keeping the Spain answer
// accepted. Content only.
import type { LessonPatch } from "./patch";
export const B1_UNIT3_LATAM: Record<string, { alts?: Record<number, string[]>; checkAlts?: Record<number, Record<number, string[]>> }> = {
 "a2d-tan-tanto-drill": {
  "alts": {
   "23": [
    "Mi hermano es tan alto como mi papá."
   ]
  }
 },
 "a2d-isimo-and-compare": {
  "alts": {
   "10": [
    "angostísimas"
   ],
   "13": [
    "La playa era lindísima.",
    "La playa estaba lindísima.",
    "La playa fue lindísima."
   ]
  }
 },
 "a2r-spiral-pronouns-comparisons-future": {
  "alts": {
   "5": [
    "Yo traeré las sillas; mi hermano las traerá en su auto.",
    "Traeré las sillas; mi hermano las traerá en su auto."
   ],
   "21": [
    "Mis amigos vendrán en carro, pero yo iré andando porque está más cerca.",
    "Mis amigos vendrán en auto, pero yo iré andando porque está más cerca.",
    "Mis amigos vendrán en carro, pero yo iré a pie porque está más cerca.",
    "Mis amigos vendrán en auto, pero yo iré a pie porque está más cerca."
   ],
   "24": [
    "Haré la torta el sábado."
   ],
   "25": [
    "Mi carro es mejor que el tuyo.",
    "Mi auto es mejor que el tuyo."
   ]
  }
 },
 "a2d-cumulative-circuit-2": {
  "alts": {
   "15": [
    "El verano que viene iremos en tren porque es más rápido que el bus, y nos quedaremos allí una semana.",
    "El próximo verano iremos en tren porque es más rápido que el bus, y nos quedaremos allí una semana.",
    "El verano que viene iremos en tren porque es más rápido que el bus, y nos quedaremos allí por una semana.",
    "El próximo verano iremos en tren porque es más rápido que el bus, y nos quedaremos allí por una semana.",
    "El verano que viene iremos en tren porque es más rápido que el bus y nos quedaremos allí una semana."
   ]
  }
 },
 "a2r-challenge-comparisons-por-para": {
  "alts": {
   "22": [
    "Mi nuevo departamento no es tan grande como el tuyo, pero es más tranquilo."
   ],
   "24": [
    "El tren será más rápido que el bus."
   ]
  }
 },
 "comparisons-superlatives-1": {
  "alts": {
   "19": [
    "Esta camisa es tan linda como esa."
   ]
  }
 },
 "comparisons-superlatives-2": {
  "alts": {
   "5": [
    "La chaqueta es más angosta que el suéter."
   ],
   "7": [
    "La bufanda azul es más linda que la roja."
   ],
   "18": [
    "Los zapatos cafés me quedan mejor que los blancos."
   ]
  }
 },
 "comparisons-superlatives-drill-1": {
  "alts": {
   "8": [
    "El tren es más cómodo que el bus."
   ]
  }
 },
 "comparisons-superlatives-drill-2": {
  "alts": {
   "22": [
    "Mi abuela cocina tan bien como mi mamá."
   ]
  }
 },
 "a2d-irregular-comparatives": {
  "alts": {
   "2": [
    "Mis abuelos son mayores que mis papás."
   ]
  }
 }
};
export const B1_UNIT3_SWAP: Record<string, LessonPatch> = {
 "a2d-pattern-mas-menos-que": {
  "exercises": {
   "replace": {
    "9": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Change más to menos.",
     "source": "Mi carro es más moderno que el tuyo.",
     "answer": "Mi carro es menos moderno que el tuyo.",
     "altAnswers": [
      "Mi auto es menos moderno que el tuyo.",
      "Mi coche es menos moderno que el tuyo."
     ],
     "explanation": "Más → menos; the rest of the frame (adjective + que) stays."
    },
    "24": {
     "type": "speak",
     "text": "Este celular es menos caro que ese.",
     "prompt": "Say it in Spanish: \"This phone is less expensive than that one\"",
     "explanation": "One way to say it: \"Este celular es menos caro que ese\". Said it another correct way? Tap \"I said it right\".",
     "altAnswers": [
      "Este móvil es menos caro que ese."
     ]
    }
   }
  },
  "sections": {
   "0": {
    "examples": [
     {
      "es": "Madrid es más grande que Toledo.",
      "en": "Madrid is bigger than Toledo."
     },
     {
      "es": "Este celular es menos caro que ese.",
      "en": "This phone is less expensive than that one."
     }
    ]
   }
  }
 },
 "a2d-tan-tanto-drill": {
  "exercises": {
   "replace": {
    "5": {
     "type": "multiple-choice",
     "question": "«No hay ___ carros como en la capital.»",
     "options": [
      "tantos",
      "tan",
      "tantas",
      "tanto"
     ],
     "correctIndex": 0,
     "explanation": "Carros is masculine plural, so tantos. \"Tan\" is for adjectives, \"tantas\" is feminine, and \"tanto\" is singular."
    }
   }
  }
 },
 "a2d-isimo-and-compare": {
  "exercises": {
   "replace": {
    "4": {
     "type": "speak",
     "text": "Este departamento es tan grande como el tuyo.",
     "prompt": "Say it in Spanish: \"This apartment is as big as yours\"",
     "explanation": "One way to say it: \"Este departamento es tan grande como el tuyo\". tan … como: as … as. Equality with an adjective: tan grande como.",
     "altAnswers": [
      "Este piso es tan grande como el tuyo."
     ]
    }
   }
  }
 },
 "comparisons-superlatives-drill-1": {
  "exercises": {
   "replace": {
    "6": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Correct the sentence.",
     "source": "Mi carro es más rápido como el tuyo.",
     "answer": "Mi carro es más rápido que el tuyo.",
     "explanation": "An unequal comparison closes with que: más rápido que. Como only goes with tan or tanto.",
     "altAnswers": [
      "Mi coche es más rápido que el tuyo."
     ]
    }
   }
  }
 },
 "a2r-error-hunt-comparisons": {
  "exercises": {
   "replace": {
    "2": {
     "type": "fill-blank",
     "prompt": "Fix the comparison.",
     "sentence": "Mi carro es ___ que el tuyo. (learner wrote: más bueno)",
     "answer": "mejor",
     "explanation": "For quality, bueno has the irregular comparative mejor, not más bueno."
    }
   }
  }
 },
 "a2d-irregular-comparatives": {
  "exercises": {
   "replace": {
    "9": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Translate to Spanish.",
     "source": "This phone is better than mine.",
     "answer": "Este celular es mejor que el mío.",
     "altAnswers": [
      "Este teléfono es mejor que el mío.",
      "Este móvil es mejor que el mío."
     ],
     "explanation": "Bueno → mejor for quality; avoid más bueno here."
    },
    "23": {
     "type": "multiple-choice",
     "question": "'My apartment is bigger than yours.' (size)",
     "options": [
      "Mi departamento es más grande que el tuyo.",
      "Mi departamento es tan grande que el tuyo.",
      "Mi departamento es más mayor que el tuyo.",
      "Mi departamento es mejor que el tuyo."
     ],
     "correctIndex": 0,
     "explanation": "For physical size, más grande is the normal choice. Tan grande pairs with como, not que, and mayor is mainly for age."
    }
   }
  }
 },
 "a2r-mission-comparing-apartments": {
  "exercises": {
   "replace": {
    "0": {
     "type": "fill-blank",
     "prompt": "How do you say the bold words in Spanish?",
     "sentence": "El departamento B es ___ grande que el departamento A.",
     "answer": "más",
     "en": "Apartment B is [bigger] than apartment A.",
     "explanation": "más: más + adjective + que. B (90 m²) is bigger than A (70 m²), so más grande que."
    },
    "1": {
     "type": "speak",
     "text": "El departamento A es menos grande que el departamento B.",
     "prompt": "Say it in Spanish: \"Apartment A is less big than apartment B\"",
     "explanation": "One way to say it: \"El departamento A es menos grande que el departamento B\". menos: menos + adjective + que. A (70 m²) is smaller than B (90 m²), so menos grande que.",
     "altAnswers": [
      "El piso A es menos grande que el piso B."
     ]
    },
    "2": {
     "type": "multiple-choice",
     "question": "\"Apartment B isn't as central as apartment A.\"",
     "options": [
      "El departamento B no es tan céntrico como el departamento A.",
      "El departamento B no es tanto céntrico como el departamento A.",
      "El departamento B no es tan céntrico que el departamento A.",
      "El departamento B no es más céntrico como el departamento A."
     ],
     "correctIndex": 0,
     "explanation": "Equality with an adjective is tan + adjective + como. \"Tanto\" goes with nouns, \"que\" belongs with más/menos, and \"más... como\" mixes the two patterns."
    },
    "3": {
     "type": "multi-select",
     "question": "Which comparisons are grammatically correct?",
     "options": [
      "El departamento A cuesta más que el B.",
      "El departamento B es más mejor.",
      "El departamento A tiene tanta luz como una casa.",
      "Este es el departamento más bonito del barrio."
     ],
     "correctIndexes": [
      0,
      2,
      3
     ],
     "explanation": "Mejor is already a comparative, so \"más mejor\" is never correct. The other three are correct comparisons and a superlative."
    },
    "4": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Translate to Spanish.",
     "source": "This apartment is the biggest in the building.",
     "answer": "Este departamento es el más grande del edificio.",
     "altAnswers": [
      "Este apartamento es el más grande del edificio.",
      "Este piso es el más grande del edificio."
     ],
     "explanation": "Superlative: el más + adjective + de (not en)."
    },
    "5": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Change it to describe apartment A.",
     "source": "El departamento B tiene menos luz pero cuesta menos.",
     "answer": "El departamento A tiene más luz pero cuesta más.",
     "altAnswers": [
      "El departamento A tiene más luz, pero cuesta más.",
      "El piso A tiene más luz pero cuesta más.",
      "El piso A tiene más luz, pero cuesta más."
     ],
     "explanation": "Flip both comparisons for the other apartment: más luz (noun), cuesta más (verb)."
    },
    "6": {
     "type": "word-order",
     "prompt": "Put the words in order.",
     "words": [
      "Al",
      "final",
      "elegimos",
      "el",
      "departamento",
      "más",
      "barato",
      "de",
      "los",
      "dos."
     ],
     "translation": "In the end we chose the cheaper of the two apartments.",
     "explanation": "Superlative with de: el más barato de los dos."
    },
    "7": {
     "type": "speak",
     "text": "El departamento A tiene más luz que el departamento B.",
     "prompt": "Say it in Spanish: \"Apartment A has more light than apartment B\"",
     "altAnswers": [
      "El apartamento A tiene más luz que el apartamento B.",
      "El departamento A tiene más luz que el B.",
      "El piso A tiene más luz que el piso B.",
      "El piso A tiene más luz que el B."
     ],
     "explanation": "One way to say it: \"El departamento A tiene más luz que el departamento B\". Más + noun + que."
    },
    "8": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Rewrite it starting with El departamento A.",
     "source": "El departamento B es más tranquilo que el departamento A.",
     "answer": "El departamento A es menos tranquilo que el departamento B.",
     "altAnswers": [
      "El apartamento A es menos tranquilo que el apartamento B.",
      "El departamento A es menos tranquilo que el B.",
      "El piso A es menos tranquilo que el piso B.",
      "El piso A es menos tranquilo que el B."
     ],
     "explanation": "Same fact from the other side: swap the apartments and más → menos."
    },
    "10": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Translate to Spanish.",
     "source": "Apartment B is farther from downtown than apartment A.",
     "answer": "El departamento B está más lejos del centro que el departamento A.",
     "altAnswers": [
      "El apartamento B está más lejos del centro que el apartamento A.",
      "El departamento B está más lejos del centro que el A.",
      "El piso B está más lejos del centro que el piso A.",
      "El piso B está más lejos del centro que el A."
     ],
     "explanation": "Location takes estar: está más lejos … que."
    },
    "11": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Translate to Spanish.",
     "source": "Apartment B's kitchen is better than apartment A's.",
     "answer": "La cocina del departamento B es mejor que la del departamento A.",
     "altAnswers": [
      "La cocina del apartamento B es mejor que la del apartamento A.",
      "La cocina del piso B es mejor que la del piso A."
     ],
     "explanation": "Bueno → mejor; la del departamento A = apartment A's (one)."
    },
    "12": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Correct the note.",
     "source": "Es el peor departamento en la calle.",
     "answer": "Es el peor departamento de la calle.",
     "altAnswers": [
      "Es el peor apartamento de la calle.",
      "Es el peor piso de la calle."
     ],
     "explanation": "Malo → peor; a superlative names its group with de: de la calle."
    },
    "13": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Translate to Spanish.",
     "source": "The bathroom in apartment B is smaller than in apartment A.",
     "answer": "El baño del departamento B es más pequeño que el del departamento A.",
     "altAnswers": [
      "El baño del apartamento B es más pequeño que el del apartamento A.",
      "El baño del piso B es más pequeño que el del piso A."
     ],
     "explanation": "El del departamento A = the one in apartment A."
    },
    "15": {
     "type": "fill-blank",
     "prompt": "How do you say the bold words in Spanish?",
     "sentence": "El departamento B es ___ céntrico que el departamento A.",
     "answer": "menos",
     "en": "Apartment B is [less] central than apartment A.",
     "explanation": "Menos … que = less … than."
    },
    "16": {
     "type": "fill-blank",
     "prompt": "How do you say the bold words in Spanish?",
     "sentence": "El departamento B no tiene ___ luz como el departamento A.",
     "answer": "tanta",
     "en": "Apartment B doesn't have [as much] light as apartment A.",
     "explanation": "Luz is feminine: tanta luz."
    },
    "18": {
     "type": "fill-blank",
     "prompt": "How do you say the bold words in Spanish?",
     "sentence": "El alquiler cuesta ___ 800 dólares.",
     "answer": "más de",
     "en": "The rent costs [more than] 800 dollars.",
     "explanation": "With numbers: más de."
    },
    "19": {
     "type": "word-order",
     "prompt": "Put the words in order.",
     "words": [
      "El",
      "departamento",
      "B",
      "es",
      "peor",
      "pero",
      "más",
      "barato"
     ],
     "translation": "Apartment B is worse but cheaper",
     "explanation": "Peor (irregular) and más barato in one sentence."
    },
    "20": {
     "type": "multiple-choice",
     "question": "Which sentence is true? (A: downtown, B: far from downtown)",
     "options": [
      "El departamento A está más cerca del centro que el departamento B.",
      "El departamento A está más lejos del centro que el departamento B.",
      "El departamento B está más cerca del centro que el departamento A.",
      "El departamento A está tan lejos del centro como el departamento B."
     ],
     "correctIndex": 0,
     "explanation": "A is downtown, so it's closer (más cerca) to the center than B."
    },
    "21": {
     "type": "multiple-choice",
     "question": "'Apartment A is the better of the two.'",
     "options": [
      "El departamento A es el mejor de los dos.",
      "El departamento A es el más mejor de los dos.",
      "El departamento A es el mejor en los dos.",
      "El departamento A es mejor de los dos."
     ],
     "correctIndex": 0,
     "explanation": "El mejor de los dos: article + mejor + de."
    },
    "22": {
     "type": "write",
     "prompt": "You and your partner are choosing between two apartments. Write them an email comparing size, price, location and light, and say which one you prefer.",
     "minWords": 25,
     "maxWords": 60,
     "rubric": [
      "Más / menos… que",
      "Tan… como or tanto… como",
      "A superlative (el más luminoso, el mejor…)",
      "Your choice with a reason"
     ],
     "modelAnswer": "Hola, Javi: He visto los dos departamentos. El de la calle Sol es más grande que el del centro y tiene más luz, pero es menos céntrico. El del centro es tan caro como el otro y no tiene tantas habitaciones. Para mí, el de la calle Sol es el mejor y el más luminoso. ¿Lo alquilamos? Un beso, Elena",
     "explanation": "Más/menos… que compare two things; tan + adjective and tanto/a/os/as + noun make equal comparisons (tan caro como, tantas habitaciones). El mejor and el más luminoso single one out."
    },
    "23": {
     "type": "speak",
     "text": "Para mí, el departamento A es mejor porque está en el centro.",
     "prompt": "Say it in Spanish: \"For me, apartment A is better because it's downtown\"",
     "explanation": "One way to say it: \"Para mí, el departamento A es mejor porque está en el centro\". Said it another correct way? Tap \"I said it right\".",
     "altAnswers": [
      "Para mí, el piso A es mejor porque está en el centro."
     ]
    },
    "24": {
     "type": "speak",
     "text": "Pero el departamento B es el más barato de los dos.",
     "prompt": "Say it in Spanish: \"But apartment B is the cheaper of the two\"",
     "explanation": "One way to say it: \"Pero el departamento B es el más barato de los dos\". Said it another correct way? Tap \"I said it right\".",
     "altAnswers": [
      "Pero el piso B es el más barato de los dos."
     ]
    }
   }
  },
  "sections": {
   "0": {
    "examples": [
     {
      "es": "Departamento A: 70 m², $900 al mes, 2 dormitorios, en el centro, mucha luz.",
      "en": "Apartment A: 70 m², $900/month, 2 bedrooms, downtown, lots of light."
     },
     {
      "es": "Departamento B: 90 m², $750 al mes, 2 dormitorios, lejos del centro, poca luz.",
      "en": "Apartment B: 90 m², $750/month, 2 bedrooms, far from downtown, little light."
     }
    ],
    "check": [
     {
      "type": "multiple-choice",
      "question": "Which sentence is true?",
      "options": [
       "El departamento A es más caro que el departamento B.",
       "El departamento A es más grande que el departamento B.",
       "El departamento B es más céntrico que el departamento A.",
       "El departamento B tiene más luz que el departamento A."
      ],
      "correctIndex": 0,
      "explanation": "A costs $900 and B $750, so A is more expensive. The other statements contradict the listing's size, location and light."
     },
     {
      "type": "fill-blank",
      "prompt": "How do you say the bold words in Spanish?",
      "sentence": "El departamento A tiene ___ dormitorios como el departamento B.",
      "answer": "tantos",
      "en": "Apartment A has [as many] bedrooms as apartment B.",
      "explanation": "tantos: tanto agrees with dormitorios. Tanto agrees with dormitorios (masculine plural) → tantos … como."
     }
    ]
   },
   "1": {
    "examples": [
     {
      "es": "Para mí, el departamento A es mejor porque está en el centro.",
      "en": "For me, apartment A is better because it's downtown."
     },
     {
      "es": "Pero el departamento B es el más barato de los dos.",
      "en": "But apartment B is the cheaper of the two."
     }
    ],
    "check": [
     {
      "type": "fill-blank",
      "prompt": "How do you say the bold words in Spanish?",
      "sentence": "La luz del departamento B es ___ que la del departamento A.",
      "answer": "peor",
      "en": "The light in apartment B is [worse] than in apartment A.",
      "explanation": "malo → peor: irregular comparative. Malo → peor."
     },
     {
      "type": "multiple-choice",
      "question": "Your partner asks: «¿Cuál es más barato?» You answer with the facts:",
      "options": [
       "El departamento B es más barato que el A.",
       "El departamento A es más barato que el B.",
       "El departamento B es tan barato como el A.",
       "El departamento B es más barato como el A."
      ],
      "correctIndex": 0,
      "explanation": "B costs $750 and A $900, so B is cheaper: más barato que. Tan ... como would say they cost the same, and más pairs with que, not como."
     }
    ]
   }
  }
 },
 "a2d-restaurant-ordering-pattern": {
  "exercises": {
   "replace": {
    "16": {
     "type": "speak",
     "text": "Para mí, el pollo con papas.",
     "prompt": "Say it in Spanish: \"For me, the chicken with fries\"",
     "explanation": "One way to say it: \"Para mí, el pollo con papas\". para: ordering (para mí). Para mí means for me when ordering.",
     "altAnswers": [
      "Para mí, el pollo con patatas."
     ]
    }
   }
  },
  "sections": {
   "0": {
    "check": [
     {
      "type": "fill-blank",
      "prompt": "How do you say the bold words in Spanish?",
      "sentence": "___ mí, el pollo con papas.",
      "answer": "Para",
      "en": "[For] me, the chicken with fries.",
      "explanation": "para: ordering (para mí). Para mí means for me when ordering."
     },
     {
      "type": "multiple-choice",
      "question": "You want the dessert menu (la carta de postres) for the whole table. Which is best?",
      "options": [
       "¿Nos trae la carta de postres?",
       "Tráenos la carta de postres.",
       "¿Nos traes la carta de postres?",
       "Queremos la carta de postres ya."
      ],
      "correctIndex": 0,
      "explanation": "A present-tense usted question with nos (to us) is polite and covers the whole table. Tráenos is a blunt tú command, traes is the tú form, and queremos... ya sounds like a demand."
     }
    ]
   }
  }
 },
 "a2d-restaurant-ordering-pattern-part-2": {
  "exercises": {
   "replace": {
    "1": {
     "type": "fill-blank",
     "prompt": "How do you say the bold words in Spanish?",
     "sentence": "De ___, quería la carne con papas.",
     "answer": "segundo",
     "en": "For the [main course], I'd like the meat with potatoes.",
     "explanation": "De primero / de segundo name the courses; segundo = main course."
    }
   }
  }
 },
 "a2d-restaurant-problem-past": {
  "exercises": {
   "replace": {
    "3": {
     "type": "fill-blank",
     "prompt": "How do you say the bold words in Spanish?",
     "sentence": "El mesero no nos ___ el café.",
     "answer": "cobró",
     "en": "The waiter didn't [charge] us for the coffee.",
     "explanation": "Cobrar = to charge; preterite cobró."
    },
    "7": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Translate to Spanish.",
     "source": "I asked the waiter for another fork.",
     "answer": "Le pedí otro tenedor al mesero.",
     "altAnswers": [
      "Le pedí al mesero otro tenedor.",
      "Pedí otro tenedor al mesero.",
      "Le pedí otro tenedor al camarero.",
      "Le pedí al camarero otro tenedor.",
      "Pedí otro tenedor al camarero."
     ],
     "explanation": "Pedir for a thing; le doubles al mesero."
    },
    "11": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Change it to the past.",
     "source": "El mesero está muy ocupado y no viene.",
     "answer": "El mesero estaba muy ocupado y no vino.",
     "explanation": "Estaba describes his state (imperfect); no vino is what happened, a completed event (preterite).",
     "altAnswers": [
      "El camarero estaba muy ocupado y no vino."
     ]
    },
    "12": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Correct the sentence.",
     "source": "El mesero nos traió la cuenta.",
     "answer": "El mesero nos trajo la cuenta.",
     "altAnswers": [
      "El camarero nos trajo la cuenta."
     ],
     "explanation": "Traer has an irregular preterite: trajo (and trajeron, with no i)."
    },
    "15": {
     "type": "speak",
     "text": "La mesera nos trajo otra pizza.",
     "prompt": "Say it in Spanish: \"The waitress brought us another pizza\"",
     "explanation": "One way to say it: \"La mesera nos trajo otra pizza\". an event → preterite",
     "altAnswers": [
      "La camarera nos trajo otra pizza."
     ]
    }
   }
  },
  "sections": {
   "0": {
    "body": [
     "In a past story, the imperfect describes the scene and the state of things (había mucha gente, la sopa estaba fría, el mesero estaba ocupado), and the preterite tells what happened, one event after another (fuimos, pedimos, llegó, nos trajo).",
     "Why: the listener needs to know which verbs are scenery and which move the story on. Before each gap ask: is this how things were, or the next thing that happened?"
    ],
    "examples": [
     {
      "es": "La pizza estaba quemada.",
      "en": "The pizza was burnt. (its state → imperfect)"
     },
     {
      "es": "La mesera nos trajo otra pizza.",
      "en": "The waitress brought us another pizza. (an event → preterite)"
     }
    ]
   },
   "1": {
    "body": [
     "«El sábado ___ (1, ir) a un restaurante nuevo. ___ (2, haber) mucha gente y el mesero estaba muy ocupado. ___ (3, pedir) la paella, pero tardó una hora. Cuando llegó, ___ (4, estar) fría. Le dijimos al mesero que la paella estaba fría y nos ___ (5, traer) otra. Al final no nos cobró el postre.» Fill the gaps in the exercises."
    ]
   }
  }
 }
};
