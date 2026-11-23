// Synced from cheneygross-afk/lengo:src/lib/lessons/es-redesign/b1-unit5-latam.ts by scripts/sync-content.mjs -- edit it there, not here.
// Generated: Latin American wording for B1 Unit 5. B1_UNIT5_LATAM adds
// accepted answers (papás, mamá, bus, mesero, manejar, en la mañana) next to
// the Spain wording; B1_UNIT5_SWAP makes the Latin American word the main one
// where the lesson showed the Spain word (carro, celular, departamento,
// mesero, boleto, torta, refrigerador, la tarea, manejar), keeping the Spain
// answer accepted, and replaces items built on later grammar (commands with
// two pronouns, el tuyo / la tuya). Content only.
import type { LessonPatch } from "./patch";
export const B1_UNIT5_LATAM: Record<string, { alts?: Record<number, string[]>; checkAlts?: Record<number, Record<number, string[]>> }> = {
 "a2d-mente-build": {
  "alts": {
   "14": [
    "Afortunadamente, llegó el bus.",
    "Afortunadamente, el bus llegó."
   ],
   "16": [
    "Tu mamá se viste elegantemente."
   ]
  }
 },
 "personal-a-negation-mente-drill-1": {
  "alts": {
   "14": [
    "No conozco a tus papás."
   ]
  }
 },
 "personal-a-negation-mente-drill-2": {
  "alts": {
   "8": [
    "No voy nunca al trabajo en bus."
   ],
   "23": [
    "No hablo con nadie los lunes en la mañana."
   ]
  }
 },
 "a2r-spiral-a-negation-adverbs": {
  "alts": {
   "19": [
    "Mis papás nunca me dejaban salir solo.",
    "Mis papás nunca me dejaban salir sola.",
    "Mis papás no me dejaban nunca salir solo.",
    "Mis papás nunca me dejaron salir solo.",
    "Mis papás nunca me dejan salir solo.",
    "Mis papás nunca me dejan salir sola."
   ]
  }
 },
 "a2d-mixed-a-negation-mente": {
  "alts": {
   "22": [
    "Nadie ayudó a mi mamá, así que la ayudé rápida y alegremente.",
    "Nadie ayudó a mi mamá, por eso yo la ayudé rápida y alegremente."
   ]
  }
 },
 "a2g-tu-commands-irregular": {
  "alts": {
   "12": [
    "¿La tarta? Hazla esta noche y ponla en el refrigerador.",
    "¿La torta? Hazla esta noche y ponla en la nevera."
   ]
  }
 },
 "a2g-hace-que-desde-hace": {
  "alts": {
   "20": [
    "Hace dos horas que espero el bus.",
    "Espero el bus desde hace dos horas."
   ]
  }
 },
 "a2d-cumulative-circuit-5": {
  "alts": {
   "10": [
    "Antes mi papá manejaba muy cuidadosamente.",
    "Antes mi papá conducía muy cuidadosamente."
   ],
   "11": [
    "De joven mi mamá tenía el cabello largo."
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
    "Mis amigos vendrán en auto, pero yo iré a pie porque está más cerca."
   ],
   "25": [
    "Mi auto es mejor que el de Ana."
   ]
  }
 },
 "a2r-challenge-comparisons-por-para": {
  "alts": {
   "21": [
    "Caminaremos por la playa en la noche.",
    "Pasearemos por la playa en la noche."
   ],
   "24": [
    "El tren será más rápido que el bus."
   ]
  }
 }
};
export const B1_UNIT5_SWAP: Record<string, LessonPatch> = {
 "mente-adverbs-1": {
  "exercises": {
   "replace": {
    "1": {
     "type": "multiple-choice",
     "question": "Which sentence forms the adverb correctly?",
     "options": [
      "Ella maneja cuidadosomente.",
      "Ella maneja cuidadosamente.",
      "Ella maneja cuidadomente.",
      "Ella maneja cuidadosoamente."
     ],
     "correctIndex": 1,
     "explanation": "To make an adverb, take the feminine adjective and add -mente: cuidadosa → cuidadosamente. \"Cuidadosomente\" uses the masculine, \"cuidadomente\" drops -osa, and \"cuidadosoamente\" adds an extra o."
    },
    "10": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Translate to Spanish.",
     "source": "The waiter speaks courteously.",
     "answer": "El mesero habla cortésmente.",
     "altAnswers": [
      "El camarero habla cortésmente."
     ],
     "explanation": "Cortés → cortésmente: no feminine change (it has one form), and the accent stays on the e."
    },
    "15": {
     "type": "word-order",
     "prompt": "Put the words in order.",
     "words": [
      "Mi",
      "madre",
      "maneja",
      "el",
      "carro",
      "cuidadosamente"
     ],
     "translation": "My mother drives the car carefully",
     "explanation": "The adverb follows the verb and object; cuidadoso → cuidadosa + -mente."
    }
   }
  }
 },
 "mente-adverbs-2": {
  "exercises": {
   "replace": {
    "21": {
     "type": "write",
     "prompt": "Describe your new flatmate: how they speak, cook, clean and get up. Use at least four -mente adverbs, and join two of them in one phrase once.",
     "minWords": 25,
     "maxWords": 60,
     "rubric": [
      "At least four -mente adverbs (normalmente, perfectamente…)",
      "Two adverbs joined (lenta y tranquilamente)",
      "Feminine form + -mente (lentamente, perfectamente)",
      "One sentence with your opinion (sinceramente…)"
     ],
     "modelAnswer": "Mi nuevo compañero de departamento, Leo, es un poco especial. Habla lenta y tranquilamente, pero cocina rapidísimo. Normalmente se levanta a las seis. Limpia la cocina perfectamente todos los días y, sinceramente, eso me encanta. Solo tiene un problema: canta constantemente en la ducha.",
     "explanation": "-Mente is added to the feminine form of the adjective (lenta → lentamente). When two adverbs go together, only the last one takes -mente: lenta y tranquilamente."
    }
   }
  }
 },
 "a2r-contrast-adjective-adverb": {
  "exercises": {
   "replace": {
    "8": {
     "type": "fill-blank",
     "prompt": "How do you say the bold words in Spanish?",
     "sentence": "Mi hermana maneja muy ___.",
     "answer": "bien",
     "en": "My sister drives very [well].",
     "explanation": "Bien is the adverb for how she drives; bueno/buena would describe a noun."
    },
    "16": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Rewrite it with the verb manejar.",
     "source": "Mi abuela es una conductora cuidadosa.",
     "answer": "Mi abuela maneja cuidadosamente.",
     "altAnswers": [
      "Mi abuela maneja con cuidado.",
      "Mi abuela conduce cuidadosamente.",
      "Mi abuela conduce con cuidado."
     ],
     "explanation": "From noun + adjective to verb + adverb: cuidadosa conductora → maneja cuidadosamente."
    }
   }
  },
  "sections": {
   "0": {
    "examples": [
     {
      "es": "Es una conductora cuidadosa. / Maneja cuidadosamente.",
      "en": "She's a careful driver. / She drives carefully."
     },
     {
      "es": "La explicación fue clara. / Lo explicó claramente.",
      "en": "The explanation was clear. / She explained it clearly."
     }
    ]
   }
  }
 },
 "personal-a-negation-mente-drill-1": {
  "exercises": {
   "replace": {
    "4": {
     "type": "matching",
     "instructions": "Match each item with its pair.",
     "pairs": [
      {
       "left": "veo a mi hermana",
       "right": "I see my sister"
      },
      {
       "left": "busco a Carlos",
       "right": "I'm looking for Carlos"
      },
      {
       "left": "busco mi celular",
       "right": "I'm looking for my phone"
      },
      {
       "left": "tengo dos hermanos",
       "right": "I have two brothers"
      },
      {
       "left": "llamo a mi médico",
       "right": "I call my doctor"
      },
      {
       "left": "conozco a tu vecino",
       "right": "I know your neighbor"
      }
     ],
     "explanation": "People take the personal a (veo a mi hermana); things do not (busco mi celular); and tener usually drops it (tengo dos hermanos)."
    },
    "10": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Correct the sentence.",
     "source": "Busco a el mesero.",
     "answer": "Busco al mesero.",
     "altAnswers": [
      "Estoy buscando al mesero.",
      "Busco al camarero.",
      "Estoy buscando al camarero."
     ],
     "explanation": "The personal a is right (a specific waiter), but a + el always contracts to al."
    },
    "12": {
     "type": "multiple-choice",
     "question": "Which sentence needs the personal a?",
     "options": [
      "Veo ___ la televisión.",
      "Veo ___ mi profesor.",
      "Tengo ___ un hermano.",
      "Busco ___ un departamento."
     ],
     "correctIndex": 1,
     "explanation": "Only mi profesor is a specific person as direct object. TV and apartments are things, and tener drops the a."
    }
   }
  },
  "sections": {
   "0": {
    "body": [
     "Remember the rule: when the direct object (the one who receives the action) is a specific, known person, Spanish puts a in front of it: veo a mi hermana. Things never take it: veo la película.",
     "Why? Spanish word order is flexible, so the a flags the person on the receiving end of the verb and keeps them from being read as the subject. English has no equivalent, so this a is never translated. Watch the contraction: a + el = al (busco al mesero)."
    ],
    "examples": [
     {
      "es": "Veo a mi hermana en el parque los domingos.",
      "en": "I see my sister in the park on Sundays. (a specific person)"
     },
     {
      "es": "Busco a Carlos, pero no lo encuentro.",
      "en": "I'm looking for Carlos, but I can't find him. (a named person)"
     },
     {
      "es": "Busco mi celular, pero no lo encuentro.",
      "en": "I'm looking for my phone, but I can't find it. (a thing: no a)"
     }
    ]
   },
   "1": {
    "body": [
     "The a marks a particular person. When the person is just \"any one\" of a type (busco un compañero de cuarto: whoever fits), there's no particular person yet, so the a is left out. Tener also drops it, because the people you have are treated like possessions: tengo tres hermanos.",
     "Quick test: can you point at the person? Busco al mesero (that one) takes a; necesito un fontanero (any plumber) doesn't. Nadie and alguien always take a as objects, because they stand for people: no veo a nadie."
    ]
   }
  }
 },
 "personal-a-negation-mente-drill-2": {
  "exercises": {
   "replace": {
    "6": {
     "type": "fill-blank",
     "prompt": "How do you say the bold words in Spanish?",
     "sentence": "¿Hay ___ en el refrigerador? Tengo hambre.",
     "answer": "algo",
     "en": "Is there [anything] in the fridge? I'm hungry.",
     "explanation": "In a question, English 'anything' is the positive algo; nada is only for negative sentences."
    }
   }
  }
 },
 "personal-a-negation-mente-drill-3": {
  "exercises": {
   "replace": {
    "9": {
     "type": "speak",
     "text": "Mi abuelo maneja muy lentamente.",
     "prompt": "Say it in Spanish: \"My grandfather drives very slowly\"",
     "altAnswers": [
      "Mi abuelo maneja muy despacio.",
      "Mi abuelo conduce muy lentamente.",
      "Mi abuelo conduce muy despacio."
     ],
     "explanation": "One way to say it: \"Mi abuelo maneja muy lentamente\". Lento → lenta → lentamente: -mente goes on the feminine form."
    },
    "10": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Correct the sentence.",
     "source": "Nada no funciona en este departamento.",
     "answer": "Nada funciona en este departamento.",
     "altAnswers": [
      "No funciona nada en este departamento.",
      "Nada funciona en este apartamento.",
      "Nada funciona en este piso.",
      "No funciona nada en este piso."
     ],
     "explanation": "Nada before the verb already makes the sentence negative: no extra no. Or move nada after the verb: no funciona nada."
    }
   }
  }
 },
 "a2d-mixed-a-negation-mente": {
  "exercises": {
   "replace": {
    "9": {
     "type": "fill-blank",
     "prompt": "How do you say the bold words in Spanish?",
     "sentence": "No hay ___ en el refrigerador.",
     "answer": "nada",
     "en": "There's [nothing] in the fridge.",
     "explanation": "No hay nada: after no + verb, 'nothing / anything' is nada."
    }
   }
  }
 },
 "a2g-tu-commands-regular": {
  "exercises": {
   "replace": {
    "7": {
     "type": "multiple-choice",
     "question": "\"Explain it.\" (el problema)",
     "options": [
      "Explícalo.",
      "Explicalo.",
      "Lo explica.",
      "Explica lo."
     ],
     "correctIndex": 0,
     "explanation": "The pronoun attaches to the end: explica + lo = explícalo, with an accent to keep the stress on PLI. \"Explicalo\" misses the accent, \"lo explica\" is a statement (\"he explains it\") and \"explica lo\" splits the word."
    },
    "10": {
     "type": "multi-select",
     "question": "Which commands are written correctly?",
     "options": [
      "Dame",
      "Escuchame",
      "Siéntate",
      "Llama me"
     ],
     "correctIndexes": [
      0,
      2
     ],
     "explanation": "Pronouns attach to form one word: dame, siéntate, escúchame, llámame. When the stress ends up third from last, it needs an accent (siéntate, escúchame); dame keeps it second to last, so no accent. \"Escuchame\" misses the accent and \"Llama me\" splits the word."
    },
    "16": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Translate to Spanish.",
     "source": "The keys? Look for them in the kitchen and bring them. (to a friend)",
     "answer": "¿Las llaves? Búscalas en la cocina y tráelas.",
     "explanation": "Las attaches to each command: búscalas (with an accent) and tráelas (trae + las)."
    },
    "22": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Correct the sentence.",
     "source": "Ayuda me con la tarea.",
     "answer": "Ayúdame con la tarea.",
     "altAnswers": [
      "Ayúdame con los deberes."
     ],
     "explanation": "The pronoun joins the command as one word, and the stress (YU) now needs an accent: ayúdame."
    }
   }
  },
  "sections": {
   "0": {
    "body": [
     "To tell a friend, a child or anyone you call tú to do something, take the present-tense él/ella form: él habla → ¡Habla!, él come → ¡Come!, él escribe → ¡Escribe!",
     "Stem changes stay: él cierra → cierra, él vuelve → vuelve, él pide → pide, él duerme → duerme.",
     "This is only for affirmative commands (\"do it!\"). \"Don't do it!\" uses a different form (no hables, no comas) that comes later in the course."
    ]
   },
   "1": {
    "body": [
     "With an affirmative command, object pronouns attach to the end of the verb, making one word: cómpralo (buy it), llámame (call me), dale (give him).",
     "Reflexive verbs work the same way with te: levantarse → levántate, sentarse → siéntate, ducharse → dúchate.",
     "Adding a syllable leaves the stress where it was, now third from last, so the stressed vowel needs a written accent: compra → cómpralo, llama → llámame, escucha → escúchame.",
     "A one-syllable command with one pronoun needs no accent: dale (give him), dame (give me)."
    ],
    "examples": [
     {
      "es": "Llámame esta noche.",
      "en": "Call me tonight."
     },
     {
      "es": "¿El pan? Cómpralo en la esquina.",
      "en": "The bread? Buy it on the corner."
     },
     {
      "es": "Siéntate aquí.",
      "en": "Sit here."
     },
     {
      "es": "Levántate, ya son las ocho.",
      "en": "Get up, it's already eight."
     },
     {
      "es": "Escúchame un momento.",
      "en": "Listen to me for a moment."
     },
     {
      "es": "¿Las fotos? Mándalas hoy.",
      "en": "The photos? Send them today."
     }
    ]
   },
   "2": {
    "body": [
     "A bare command is normal between friends in Spanish and not rude, especially with por favor or a friendly tone.",
     "To sound gentler, add por favor, or use a question: ¿Me pasas la sal? (Will you pass me the salt?) is often friendlier than Pásame la sal.",
     "With people you address as usted (a stranger, an older person, a customer) the command form is different (hable, coma), so a polite question is often the gentlest choice: ¿Puede hablar más despacio?"
    ]
   }
  }
 },
 "a2g-tu-commands-irregular": {
  "exercises": {
   "replace": {
    "9": {
     "type": "multiple-choice",
     "question": "Which sentence is correct?",
     "options": [
      "Dime la verdad.",
      "Díme la verdad.",
      "Di me la verdad.",
      "Me di la verdad."
     ],
     "correctIndex": 0,
     "explanation": "Di + me = dime: the stress stays on DI, second to last, so no accent. \"Di me\" splits the word, and \"me di\" is a past statement (\"I gave myself\"), not a command."
    },
    "12": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Translate to Spanish.",
     "source": "The cake? Make it tonight and put it in the fridge. (to a friend)",
     "answer": "¿El pastel? Hazlo esta noche y ponlo en el refrigerador.",
     "altAnswers": [
      "¿El pastel? Hazlo esta noche y ponlo en el frigorífico.",
      "¿La torta? Hazla esta noche y ponla en el refrigerador.",
      "¿La torta? Hazla esta noche y ponla en el frigorífico.",
      "¿El pastel? Hazlo esta noche y ponlo en la nevera.",
      "¿La tarta? Hazla esta noche y ponla en la nevera.",
      "¿La tarta? Hazla esta noche y ponla en el frigorífico."
     ],
     "explanation": "Haz + lo = hazlo, pon + lo = ponlo; one pronoun on a one-syllable command needs no accent."
    },
    "13": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Translate to Spanish.",
     "source": "Do your homework and then go to the park. (to a child)",
     "answer": "Haz la tarea y luego ve al parque.",
     "altAnswers": [
      "Haz la tarea y después ve al parque.",
      "Haz los deberes y luego ve al parque.",
      "Haz los deberes y después ve al parque."
     ],
     "explanation": "Hacer → haz, ir → ve."
    },
    "14": {
     "type": "word-order",
     "prompt": "Put the words in order.",
     "words": [
      "Sé",
      "paciente",
      "y",
      "dime",
      "mañana"
     ],
     "translation": "Be patient and tell me tomorrow",
     "explanation": "Sé (be) has an accent; dime needs none: di + me keeps the stress on DI."
    },
    "19": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Correct the spelling.",
     "source": "Pónlo en la bolsa.",
     "answer": "Ponlo en la bolsa.",
     "explanation": "Pon + lo keeps the stress on PON, second to last, so no accent: ponlo."
    }
   }
  },
  "sections": {
   "0": {
    "examples": [
     {
      "es": "Di la verdad.",
      "en": "Tell the truth."
     },
     {
      "es": "Haz la tarea.",
      "en": "Do your homework."
     },
     {
      "es": "Ve a la tienda.",
      "en": "Go to the shop."
     },
     {
      "es": "Pon la mesa.",
      "en": "Set the table."
     },
     {
      "es": "Sal de ahí.",
      "en": "Get out of there."
     },
     {
      "es": "Sé bueno.",
      "en": "Be good."
     },
     {
      "es": "Ten cuidado.",
      "en": "Be careful."
     },
     {
      "es": "Ven aquí.",
      "en": "Come here."
     }
    ]
   },
   "1": {
    "body": [
     "Pronouns attach just as with regular commands: dime (tell me), hazlo (do it), ponlo (put it), tenlo (have it).",
     "One pronoun on a one-syllable command needs no accent: dime, hazlo, ponte, vente.",
     "Ir + te gives vete, \"go away, leave\". ¡Vete! can sound harsh; vete a casa is simply \"go home\".",
     "Ve (go, from ir) and ve (he sees, from ver) look alike; context makes it clear."
    ],
    "examples": [
     {
      "es": "Dime la verdad.",
      "en": "Tell me the truth."
     },
     {
      "es": "Hazlo ya.",
      "en": "Do it right now."
     },
     {
      "es": "Hazlo tú, por favor.",
      "en": "You do it, please."
     },
     {
      "es": "Ponte el abrigo.",
      "en": "Put your coat on."
     },
     {
      "es": "Vete a dormir, es tarde.",
      "en": "Go to bed, it's late."
     },
     {
      "es": "Ven a verme mañana.",
      "en": "Come and see me tomorrow."
     }
    ]
   }
  }
 },
 "a2g-hace-que-desde-hace": {
  "exercises": {
   "replace": {
    "6": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Translate to Spanish.",
     "source": "I bought this phone a week ago.",
     "answer": "Compré este teléfono hace una semana.",
     "altAnswers": [
      "Hace una semana compré este teléfono.",
      "Compré este celular hace una semana.",
      "Hace una semana que compré este teléfono.",
      "Compré este móvil hace una semana."
     ],
     "explanation": "Compré is a finished past action, and hace una semana means \"a week ago\"."
    },
    "8": {
     "type": "word-order",
     "prompt": "Put the words in order.",
     "words": [
      "Hace",
      "dos",
      "semanas",
      "que",
      "busco",
      "departamento."
     ],
     "translation": "I've been looking for an apartment for two weeks.",
     "explanation": "Hace + time + que + present: the search is still going on."
    }
   }
  }
 },
 "a2-common-words-goals-rules": {
  "sections": {
   "1": {
    "examples": [
     {
      "es": "Utilizo esta aplicación para aprender idiomas.",
      "en": "I use this app to learn languages."
     },
     {
      "es": "Estamos considerando la posibilidad de mudarnos.",
      "en": "We're considering the possibility of moving."
     },
     {
      "es": "Necesito averiguar el horario del tren.",
      "en": "I need to find out the train timetable."
     },
     {
      "es": "Mi madre dirige una escuela.",
      "en": "My mother runs a school."
     },
     {
      "es": "Guarda el documento antes de salir.",
      "en": "Save the document before you leave."
     },
     {
      "es": "Este carro pertenece a la empresa.",
      "en": "This car belongs to the company."
     },
     {
      "es": "El sistema ha fallado otra vez.",
      "en": "The system has failed again."
     }
    ]
   }
  }
 },
 "a2g-pedir-vs-preguntar": {
  "exercises": {
   "replace": {
    "9": {
     "type": "word-order",
     "prompt": "Put the words in order.",
     "words": [
      "Pregúntale",
      "cuánto",
      "cuesta",
      "el",
      "boleto."
     ],
     "translation": "Ask him how much the ticket costs.",
     "explanation": "Pregunta + le: you want information (the price), so preguntar."
    },
    "18": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Translate to Spanish.",
     "source": "I asked the waiter if they had fish and ordered a salad.",
     "answer": "Le pregunté al mesero si tenían pescado y pedí una ensalada.",
     "altAnswers": [
      "Pregunté al mesero si tenían pescado y pedí una ensalada.",
      "Le pregunté al camarero si tenían pescado y pedí una ensalada.",
      "Pregunté al camarero si tenían pescado y pedí una ensalada."
     ],
     "explanation": "Information (si tenían) → preguntar; ordering a thing → pedir."
    },
    "21": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Rewrite it starting with 'Le pregunto al mesero...'.",
     "source": "¿Dónde está el baño?",
     "answer": "Le pregunto al mesero dónde está el baño.",
     "altAnswers": [
      "Pregunto al mesero dónde está el baño.",
      "Le pregunto al camarero dónde está el baño.",
      "Pregunto al camarero dónde está el baño."
     ],
     "explanation": "You want information, so the reporting verb is preguntar, followed by the question word (dónde keeps its accent)."
    }
   }
  },
  "sections": {
   "2": {
    "examples": [
     {
      "es": "Le pregunté el precio y le pedí un descuento.",
      "en": "I asked him the price and asked him for a discount."
     },
     {
      "es": "Tienes que pedir perdón.",
      "en": "You have to apologise."
     },
     {
      "es": "¿Puedo pedirte prestado el carro?",
      "en": "Can I borrow your car?"
     },
     {
      "es": "Pregunta al mesero si tienen mesa.",
      "en": "Ask the waiter if they have a table."
     }
    ]
   }
  }
 },
 "a2r-challenge-story-chain": {
  "sections": {
   "1": {
    "check": [
     {
      "type": "fill-blank",
      "prompt": "How do you say the bold words in Spanish?",
      "sentence": "El hombre le ___ que su carro se quedó atascado en la nieve.",
      "answer": "explicó",
      "en": "The man [explained] to her that his car got stuck in the snow.",
      "explanation": "explicar → explicó: preterite, él. Explaining is the next step of the story, one completed act: preterite explicó."
     },
     {
      "type": "fill-blank",
      "prompt": "How do you say the bold words in Spanish?",
      "sentence": "Clara le ___ un té caliente.",
      "answer": "preparó",
      "altAnswers": [
       "hizo"
      ],
      "en": "Clara [made] him a hot tea.",
      "explanation": "preparar → preparó: preterite, ella. Making the tea is another event in the sequence: preterite preparó."
     }
    ]
   }
  }
 },
 "a2d-cumulative-circuit-5": {
  "exercises": {
   "replace": {
    "10": {
     "type": "speak",
     "text": "Antes mi padre manejaba muy cuidadosamente.",
     "prompt": "Say it in Spanish: \"My father used to drive very carefully before\"",
     "explanation": "One way to say it: \"Antes mi padre manejaba muy cuidadosamente\". Adverbs in -mente are built on the feminine adjective: cuidadosa + mente.",
     "altAnswers": [
      "Antes mi padre conducía muy cuidadosamente."
     ]
    }
   }
  }
 },
 "a2r-spiral-pronouns-comparisons-future": {
  "exercises": {
   "replace": {
    "5": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Translate to Spanish.",
     "source": "I'll bring the chairs; my brother will bring them in his car.",
     "answer": "Yo traeré las sillas; mi hermano las traerá en su carro.",
     "altAnswers": [
      "Traeré las sillas; mi hermano las traerá en su carro.",
      "Yo traeré las sillas, mi hermano las traerá en su carro.",
      "Yo traeré las sillas; mi hermano las traerá en su coche.",
      "Traeré las sillas; mi hermano las traerá en su coche."
     ],
     "explanation": "Future of traer; las replaces las sillas."
    },
    "21": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Translate to Spanish.",
     "source": "My friends will come by car, but I'll walk because it's closer.",
     "answer": "Mis amigos vendrán en carro, pero yo iré caminando porque está más cerca.",
     "altAnswers": [
      "Mis amigos vendrán en carro, pero yo iré a pie porque está más cerca.",
      "Mis amigos vendrán en coche, pero yo iré andando porque está más cerca.",
      "Mis amigos vendrán en coche, pero yo iré a pie porque está más cerca."
     ],
     "explanation": "Irregular futures vendrán and iré; estar for location; más cerca."
    },
    "24": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Change it to the simple future.",
     "source": "Voy a hacer la torta el sábado.",
     "answer": "Haré la torta el sábado.",
     "explanation": "The simple future of hacer is irregular: haré, not haceré.",
     "altAnswers": [
      "Haré la tarta el sábado."
     ]
    },
    "25": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Correct the sentence.",
     "source": "Mi carro es más mejor que el de Ana.",
     "answer": "Mi carro es mejor que el de Ana.",
     "explanation": "Mejor already means 'better', so it never takes más.",
     "altAnswers": [
      "Mi coche es mejor que el de Ana."
     ]
    }
   }
  }
 },
 "a2r-challenge-comparisons-por-para": {
  "exercises": {
   "replace": {
    "5": {
     "type": "multi-select",
     "question": "Which sentences are correct?",
     "options": [
      "Tendremos tanto trabajo como el año pasado.",
      "Lo hice por ti.",
      "Saldremos para la playa temprano.",
      "Mi casa es tan grande que la de Ana."
     ],
     "correctIndexes": [
      0,
      1,
      2
     ],
     "explanation": "Equality with an adjective is tan...como: tan grande como la de Ana, so \"tan grande que\" is wrong. The other three are correct."
    },
    "14": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Translate to Spanish.",
     "source": "This cake is for my grandmother.",
     "answer": "Este pastel es para mi abuela.",
     "altAnswers": [
      "Esta torta es para mi abuela.",
      "Esta tarta es para mi abuela."
     ],
     "explanation": "The recipient takes para."
    },
    "22": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Translate to Spanish.",
     "source": "My new apartment isn't as big as Ana's, but it's quieter.",
     "answer": "Mi departamento nuevo no es tan grande como el de Ana, pero es más tranquilo.",
     "altAnswers": [
      "Mi nuevo departamento no es tan grande como el de Ana, pero es más tranquilo.",
      "Mi apartamento nuevo no es tan grande como el de Ana, pero es más tranquilo.",
      "Mi nuevo apartamento no es tan grande como el de Ana, pero es más tranquilo.",
      "Mi piso nuevo no es tan grande como el de Ana, pero es más tranquilo.",
      "Mi nuevo piso no es tan grande como el de Ana, pero es más tranquilo."
     ],
     "explanation": "Tan + adjective + como for equality; más tranquilo for the difference."
    }
   }
  }
 }
};
