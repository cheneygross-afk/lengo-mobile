// Synced from cheneygross-afk/lengo:src/lib/lessons/es-redesign/c2-unit7-latam.ts by scripts/sync-content.mjs -- edit it there, not here.
// Generated: Latin American wording for C2 Unit 7, only in the lessons a
// Latin America learner sees (C2_UNIT7_LATAM adds accepted answers;
// C2_UNIT7_SWAP makes computadora, la tarea and manejar the main answer, keeping
// the Spain answer accepted). The vosotros lessons keep Spain's words on purpose.
// Content only.
import type { LessonPatch } from "./patch";
export const C2_UNIT7_LATAM: Record<string, { alts?: Record<number, string[]>; checkAlts?: Record<number, Record<number, string[]>> }> = {
 "b1r-tema-estres": {
  "alts": {
   "18": [
    "Te recomiendo que hagas deporte en la tarde."
   ],
   "19": [
    "Te recomiendo que apagues la computadora a las siete."
   ]
  }
 },
 "b1r-tema-derechos-inquilinos": {
  "alts": {
   "2": [
    "Es injusto que quieran subir la renta tanto."
   ],
   "17": [
    "Si suben la renta, muchos inquilinos tendrán que irse.",
    "Si suben la renta, muchos inquilinos tendrán que marcharse."
   ]
  }
 },
 "b1d-rep-imperativo-ronda-mixta": {
  "alts": {
   "18": [
    "Haced la tarea antes de cenar.",
    "Haced la tarea antes de la cena."
   ]
  }
 }
};
export const C2_UNIT7_SWAP: Record<string, LessonPatch> = {
 "b1r-tema-estres": {
  "exercises": {
   "replace": {
    "19": {
     "type": "speak",
     "text": "Te recomiendo que apagues la computadora a las siete.",
     "prompt": "Dilo en español: \"I recommend that you turn off the computer at seven\"",
     "explanation": "Una forma de decirlo: «Te recomiendo que apagues la computadora a las siete». apagar → apagues: present subjunctive, tú (after 'te recomiendo que'). «Te recomiendo que» aconseja a otra persona: subjuntivo. La g pasa a gu para mantener el sonido: apagues.",
     "altAnswers": [
      "Te recomiendo que apagues el ordenador a las siete."
     ]
    }
   }
  },
  "sections": {
   "0": {
    "check": [
     {
      "type": "fill-blank",
      "prompt": "¿Cómo se dicen en español las palabras en negrita?",
      "sentence": "Te recomiendo que ___ la computadora a las siete.",
      "answer": "apagues",
      "en": "I recommend that you [turn off] the computer at seven. (tú)",
      "explanation": "apagar → apagues: present subjunctive, tú (after 'te recomiendo que'). «Te recomiendo que» aconseja a otra persona: subjuntivo. La g pasa a gu para mantener el sonido: apagues."
     },
     {
      "type": "fill-blank",
      "prompt": "¿Cómo se dicen en español las palabras en negrita?",
      "sentence": "No ___ correos el fin de semana.",
      "answer": "contestes",
      "en": "[Don't answer] emails on the weekend. (tú)",
      "explanation": "contestar → no contestes: negative command, tú. El mandato negativo de tú usa el subjuntivo: no contestes."
     }
    ]
   }
  }
 },
 "b1d-rep-imperativo-ronda-mixta": {
  "exercises": {
   "replace": {
    "18": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Corrige la frase (vosotros).",
     "source": "Corrige: «Hacer los ejercicios antes de cenar.»",
     "answer": "Haced los ejercicios antes de cenar.",
     "altAnswers": [
      "Haced los ejercicios antes de la cena.",
      "Haced los deberes antes de cenar.",
      "Haced los deberes antes de la cena."
     ],
     "explanation": "En el habla se oye el infinitivo como orden, pero la forma correcta de vosotros afirmativo es con -d: haced."
    },
    "20": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "No ___ tan rápido.",
     "answer": "manejes",
     "en": "Don't [drive] so fast. (tú)",
     "altAnswers": [
      "conduzcas"
     ],
     "explanation": "Tú negativo: subjuntivo «no manejes». En España se dice «no conduzcas» (c → zc)."
    }
   }
  }
 },
 "c2r-critic-plot-character": {
  "exercises": {
   "replace": {
    "8": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "Es un personaje ___: no cambia, no sorprende y siempre actúa igual.",
     "answer": "plano",
     "en": "He is a [apartment] character: he doesn't change, doesn't surprise and always acts the same.",
     "explanation": "Plano = sin evolución ni complejidad; no confundir con «redondo»."
    },
    "21": {
     "type": "speak",
     "text": "Un personaje plano no cambia a lo largo de la obra.",
     "prompt": "Dilo en español: \"An apartment character does not change throughout the work\"",
     "altAnswers": [
      "Un personaje plano no evoluciona durante la obra."
     ],
     "explanation": "Una forma de decirlo: «Un personaje plano no cambia a lo largo de la obra». Un personaje plano no evoluciona; el redondo es complejo y puede sorprender."
    }
   }
  }
 },
 "c2r-econ-merger-dialogue": {
  "sections": {
   "0": {
    "check": [
     {
      "type": "multiple-choice",
      "question": "Cuando una empresa compra otra lanzando una oferta a sus accionistas, se habla de…",
      "options": [
       "una opa",
       "una fusión amistosa necesariamente",
       "un ERE",
       "una quiebra"
      ],
      "correctIndex": 0,
      "explanation": "Comprar una empresa con una oferta a sus accionistas es una opa (oferta pública de adquisición). Una fusión amistosa es un acuerdo entre empresas, un ERE es un despido colectivo y una quiebra es la insolvencia."
     },
     {
      "type": "multiple-choice",
      "question": "En la tertulia te preguntan: «¿Bajarán los boletos tras la fusión?». ¿Qué respuesta es la de un analista prudente?",
      "options": [
       "Podrían bajar por las sinergias, aunque se teme que la nueva empresa ocupe una posición dominante.",
       "Bajarán seguro, a la mitad.",
       "Subirán, no hay ninguna duda.",
       "Los boletos no tienen nada que ver con la fusión."
      ],
      "correctIndex": 0,
      "explanation": "El condicional (podrían) presenta la bajada como posibilidad y «se teme que + subjuntivo» introduce el riesgo. Las otras respuestas afirman certezas o niegan la relación."
     }
    ]
   }
  }
 },
 "espanol-juridico-administrativo-drill-2": {
  "exercises": {
   "replace": {
    "3": {
     "type": "translate",
     "direction": "en-es",
     "prompt": "Traduce al español.",
     "source": "If the tenant fails to pay the rent, the landlord may terminate the contract. (formal contract)",
     "answer": "Si el arrendatario no abona la renta, el arrendador podrá resolver el contrato.",
     "altAnswers": [
      "Si el arrendatario no paga la renta, el arrendador podrá resolver el contrato.",
      "Si el arrendatario no abonare la renta, el arrendador podrá resolver el contrato.",
      "Si el arrendatario no pagare la renta, el arrendador podrá resolver el contrato.",
      "Si el inquilino no paga la renta, el arrendador podrá resolver el contrato.",
      "Si el arrendatario no abona la renta, el arrendador puede resolver el contrato."
     ],
     "explanation": "Si + presente, futuro en la consecuencia: «podrá resolver». «Resolver» un contrato = extinguirlo. En contratos antiguos verás «si no abonare» (futuro de subjuntivo): lo ves en la parte 2."
    },
    "13": {
     "type": "fill-blank",
     "prompt": "¿Cómo se dicen en español las palabras en negrita?",
     "sentence": "Si cualquiera de las partes ___ sus obligaciones, la otra podrá resolver el contrato.",
     "answer": "incumpliere",
     "en": "If either party [fails to comply with] its obligations, the other may terminate the contract. (traditional style)",
     "explanation": "El futuro de subjuntivo sale de la forma de ellos del pretérito: incumplieron → incumpliere. Es propio de contratos; el verbo principal va en futuro («podrá»)."
    }
   }
  },
  "sections": {
   "0": {
    "body": [
     "Recuerda la regla: el texto jurídico busca no dejar dudas. Por eso remite con anafóricos («dicho», «el citado»), reparte con «sendos» (uno para cada uno) y distingue verbos que no son sinónimos: «cabe» (es posible), «procede» (corresponde) y «ha lugar» (se accede a lo pedido).",
     "El texto jurídico evita la ambigüedad repitiendo referentes con anafóricos: «dicho contrato», «el citado artículo», «el referido inmueble», «el meritado informe» (muy formal), «el susodicho» (hoy suena arcaico o irónico fuera del foro). Todos remiten a algo mencionado antes."
    ]
   },
   "3": {
    "body": [
     "Las normas tradicionales usan el futuro de subjuntivo en la prótasis: «El que causare daño a otro…», «Si el arrendatario no abonare la renta…». En textos modernos se sustituye por el presente de subjuntivo o de indicativo («el que cause», «si no abona»), pero el futuro sigue en contratos y estatutos.",
     "Se forma con la forma de ellos del pretérito: quita -ron y pon -re. abonaron → abonare, causaron → causare, incumplieron → incumpliere, fueron → fuere. Se escribe así en el estilo de contrato tradicional; en todo lo demás, basta con reconocerlo."
    ]
   }
  }
 }
};
