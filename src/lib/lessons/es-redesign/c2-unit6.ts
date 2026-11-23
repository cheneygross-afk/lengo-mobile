// Synced from cheneygross-afk/lengo:src/lib/lessons/es-redesign/c2-unit6.ts by scripts/sync-content.mjs -- edit it there, not here.
// New course, C2 Unit 6 (big and rough endings; tenses in storytelling;
// tú, usted and vos): content fixes from Claude's audit in Ricardo's format
// (Claude Feedback/Spanish (new course)/C2 Mastery/Unit 06). Only content changes
// here: what is taught, asked and accepted. The answer checker and the rubric are
// untouched.
// 
// No required lesson taught tú, usted and vos, so the first register lesson and
// the first voseo lesson (with a table of vos forms) become required. Each lesson
// gets its own goal and a table that matches what it teaches (the exclamation,
// passive, conjecture and word-building lessons had the wrong shared table),
// vosotros leaves the model answer, and Latin American words go first (carro,
// celular, carrazo, ¡Madre mía! before ¡Hala!, ni muerto before ni de coña,
// grosería before taco, pueblito).
import type { LessonPatch } from "./patch";
import { ADDRESS, AUGMENTATIVES, CONNECTORS, DIMINUTIVES, GERUND_INFINITIVE, NARRATIVE_TENSES, PASSIVE_SER, SE_PASSIVE } from "./concept-tables";
import { C2_UNIT6_LATAM, C2_UNIT6_SWAP } from "./c2-unit6-latam";

const manual: Record<string, LessonPatch> = {
 "c2r-exclamations-sort-function": {
  "goal": "sort exclamations by their job: deny (¡Ni hablar!), surprise (¡No me digas!), agree (¡Y tanto!), accept (¡Qué le vamos a hacer!), protest (¡Lo que faltaba!).",
  "sections": {
   "0": {
    "tables": [
     {
      "caption": "Exclamations by their job",
      "head": [
       "Job",
       "Say",
       "When"
      ],
      "rows": [
       [
        "deny strongly",
        "¡Ni hablar! ¡Ni loco! ¡Ni en sueños!",
        "a firm no to a plan"
       ],
       [
        "surprise",
        "¡No me digas! ¡Madre mía! ¡Anda!",
        "news you didn't expect"
       ],
       [
        "agree strongly",
        "¡Y tanto! ¡Ya lo creo! ¡Claro que sí!",
        "a big yes"
       ],
       [
        "accept",
        "¡Qué le vamos a hacer! ¡Paciencia!",
        "a problem you can't change"
       ],
       [
        "protest",
        "¡Lo que faltaba!",
        "one more problem"
       ]
      ],
      "note": "¡Hala! (surprise) and ¡Vaya por Dios! (accept) are heard mostly in Spain."
     }
    ]
   }
  }
 },
 "c2r-exclamations-sort-function-part-2": {
  "goal": "react to new news with the right exclamation: ¡Madre mía!, ¡Ya lo creo!, ¡Paciencia!",
  "sections": {
   "0": {
    "tables": [
     {
      "caption": "Exclamations by their job",
      "head": [
       "Job",
       "Say",
       "When"
      ],
      "rows": [
       [
        "deny strongly",
        "¡Ni hablar! ¡Ni loco! ¡Ni en sueños!",
        "a firm no to a plan"
       ],
       [
        "surprise",
        "¡No me digas! ¡Madre mía! ¡Anda!",
        "news you didn't expect"
       ],
       [
        "agree strongly",
        "¡Y tanto! ¡Ya lo creo! ¡Claro que sí!",
        "a big yes"
       ],
       [
        "accept",
        "¡Qué le vamos a hacer! ¡Paciencia!",
        "a problem you can't change"
       ],
       [
        "protest",
        "¡Lo que faltaba!",
        "one more problem"
       ]
      ],
      "note": "¡Hala! (surprise) and ¡Vaya por Dios! (accept) are heard mostly in Spain."
     }
    ]
   }
  }
 },
 "c2r-exclamations-intensity-scale": {
  "goal": "say no at the right strength: no, gracias / qué va / ni hablar / ni loco, and en absoluto with usted.",
  "sections": {
   "0": {
    "tables": [
     {
      "caption": "How strong is your no?",
      "head": [
       "Strength",
       "Say",
       "Use it"
      ],
      "rows": [
       [
        "neutral",
        "No, gracias.",
        "anywhere"
       ],
       [
        "light",
        "Qué va. Para nada.",
        "to deny a guess: —¿Estás enojado? —Qué va."
       ],
       [
        "strong",
        "Ni hablar. De ninguna manera. En absoluto.",
        "a firm no; the last two also at work and with usted"
       ],
       [
        "very strong, casual",
        "¡Ni loco! ¡Ni muerta! ¡Ni de broma!",
        "only with friends"
       ]
      ],
      "note": "Ni de coña means the same but is rude and only heard in Spain: know it, don't use it."
     }
    ]
   }
  }
 },
 "c2r-exclamations-intensity-scale-part-2": {
  "goal": "pick the right no for new people and places, and fix a no that is too strong or too rude.",
  "sections": {
   "0": {
    "tables": [
     {
      "caption": "How strong is your no?",
      "head": [
       "Strength",
       "Say",
       "Use it"
      ],
      "rows": [
       [
        "neutral",
        "No, gracias.",
        "anywhere"
       ],
       [
        "light",
        "Qué va. Para nada.",
        "to deny a guess: —¿Estás enojado? —Qué va."
       ],
       [
        "strong",
        "Ni hablar. De ninguna manera. En absoluto.",
        "a firm no; the last two also at work and with usted"
       ],
       [
        "very strong, casual",
        "¡Ni loco! ¡Ni muerta! ¡Ni de broma!",
        "only with friends"
       ]
      ],
      "note": "Ni de coña means the same but is rude and only heard in Spain: know it, don't use it."
     }
    ]
   }
  }
 },
 "c2r-augmentatives-azo-on": {
  "goal": "use -azo, -ón, -ote and -ísimo: a blow (portazo), admiration (golazo), a person (llorón), the top degree (riquísimo)."
 },
 "c1r-transform-three-styles": {
  "goal": "retell a thought in direct, indirect and free indirect style, shifting person, tense and aquí / mañana.",
  "sections": {
   "0": {
    "tables": [
     {
      "caption": "Three ways to tell a thought",
      "head": [
       "Style",
       "Example",
       "What changes"
      ],
      "rows": [
       [
        "direct",
        "Pensó: «Mañana me voy de aquí.»",
        "her own words, in quotes"
       ],
       [
        "indirect",
        "Pensó que al día siguiente se iba de allí.",
        "que; he / she; imperfect; al día siguiente, allí"
       ],
       [
        "free indirect",
        "Mañana se iba de aquí. ¡Por fin!",
        "no «pensó que», she keeps her aquí, mañana and ¡!"
       ]
      ],
      "note": "Present → imperfect, he hecho → había hecho, iré → iría."
     }
    ]
   }
  }
 },
 "c1r-transform-three-styles-part-2": {
  "goal": "turn new thoughts into the three styles: «Me voy mañana» → dijo que se iba al día siguiente → Se iba mañana.",
  "sections": {
   "0": {
    "tables": [
     {
      "caption": "Three ways to tell a thought",
      "head": [
       "Style",
       "Example",
       "What changes"
      ],
      "rows": [
       [
        "direct",
        "Pensó: «Mañana me voy de aquí.»",
        "her own words, in quotes"
       ],
       [
        "indirect",
        "Pensó que al día siguiente se iba de allí.",
        "que; he / she; imperfect; al día siguiente, allí"
       ],
       [
        "free indirect",
        "Mañana se iba de aquí. ¡Por fin!",
        "no «pensó que», she keeps her aquí, mañana and ¡!"
       ]
      ],
      "note": "Present → imperfect, he hecho → había hecho, iré → iría."
     }
    ]
   }
  }
 },
 "c1r-contrast-narrative-tenses": {
  "goal": "tell a story with each past tense in its job: llegó (events), llovía (scene), había salido (before), volvería (later)."
 },
 "historical-narrative-4": {
  "goal": "tell history in the present (En 1492 Colón llega) and keep every other tense in line with it."
 },
 "historical-narrative-4-part-2": {
  "goal": "retell new historical events in the present without mixing in the wrong past.",
  "sections": {
   "0": {
    "addTables": [
     NARRATIVE_TENSES
    ]
   }
  }
 },
 "b2r-transform-pero-sin-embargo": {
  "goal": "raise a text to formal register: pero → sin embargo, porque → ya que, así que → por lo tanto, with the right punctuation.",
  "sections": {
   "0": {
    "tables": [
     CONNECTORS
    ]
   }
  }
 },
 "gerund-infinitive-advanced-part-2-3": {
  "goal": "learn words for time and rules (a la larga, reanudar, preceptivo) and build new ones: nítido → la nitidez.",
  "sections": {
   "0": {
    "tables": [
     {
      "caption": "Building new words",
      "head": [
       "Pattern",
       "Does",
       "Example"
      ],
      "rows": [
       [
        "-ez, -eza",
        "describing word → the quality",
        "nítido → la nitidez, rígido → la rigidez"
       ],
       [
        "-azgo",
        "state or result",
        "harto → el hartazgo, hallar → el hallazgo"
       ],
       [
        "re-",
        "again, back",
        "anudar → reanudar"
       ],
       [
        "-ificar",
        "make it so",
        "cuanto → cuantificar"
       ]
      ],
      "note": "Fixed phrases don't change: a la larga (in the end), de antemano (beforehand)."
     }
    ]
   }
  }
 },
 "passive-impersonal-mastery-1": {
  "goal": "use ser + -ado with por when the doer matters: fue aprobada por el Congreso.",
  "sections": {
   "0": {
    "tables": [
     PASSIVE_SER
    ]
   }
  }
 },
 "c1r-transform-three-passives": {
  "goal": "hide who did it three ways: fue cerrada, se cerró, cerraron, and choose by register.",
  "sections": {
   "0": {
    "tables": [
     PASSIVE_SER,
     SE_PASSIVE
    ]
   }
  }
 },
 "future-conditional-conjecture-4": {
  "goal": "show how sure you are: a lo mejor viene, quizás viene (fairly sure), quizás venga (unsure).",
  "sections": {
   "0": {
    "tables": [
     {
      "caption": "How sure are you?",
      "head": [
       "Say",
       "Form",
       "Meaning"
      ],
      "rows": [
       [
        "A lo mejor viene.",
        "normal form, always",
        "maybe (casual)"
       ],
       [
        "Quizás viene. Tal vez viene.",
        "normal form",
        "maybe, and I think so"
       ],
       [
        "Quizás venga. Tal vez venga.",
        "wish form",
        "maybe, but I doubt it"
       ]
      ],
      "note": "Never «a lo mejor venga». Quizás and tal vez sound a little more formal."
     }
    ]
   }
  }
 },
 "formal-informal-register-1": {
  "goal": "choose tú or usted by the situation and keep usted all the way through: ¿Quiere que le traiga la cuenta?"
 },
 "formal-informal-register-1-part-2": {
  "goal": "switch new sentences between tú and usted (verb, pronoun, su) and talk about tutear and guardar las distancias.",
  "sections": {
   "0": {
    "addTables": [
     ADDRESS
    ]
   }
  }
 },
 "voseo-part-1-1": {
  "goal": "know where people say vos and use its present forms: vos sos, vos tenés, ¿vos venís?",
  "sections": {
   "0": {
    "tables": [
     ADDRESS,
     {
      "caption": "Vos in the present",
      "head": [
       "Verb",
       "Tú",
       "Vos"
      ],
      "rows": [
       [
        "hablar",
        "tú hablas",
        "vos hablás"
       ],
       [
        "tener",
        "tú tienes",
        "vos tenés"
       ],
       [
        "querer",
        "tú quieres",
        "vos querés"
       ],
       [
        "venir",
        "tú vienes",
        "vos venís"
       ],
       [
        "ser",
        "tú eres",
        "vos sos"
       ]
      ],
      "note": "The stress goes on the end and the stem doesn't change: tenés, not tienés. Vos means tú, never ustedes."
     }
    ]
   }
  }
 },
 "voseo-part-1-1-part-2": {
  "goal": "talk about voseo in each country and change tú to vos: Tú eres de Montevideo → Vos sos de Montevideo.",
  "sections": {
   "0": {
    "tables": [
     {
      "caption": "Vos in the present",
      "head": [
       "Verb",
       "Tú",
       "Vos"
      ],
      "rows": [
       [
        "hablar",
        "tú hablas",
        "vos hablás"
       ],
       [
        "tener",
        "tú tienes",
        "vos tenés"
       ],
       [
        "querer",
        "tú quieres",
        "vos querés"
       ],
       [
        "venir",
        "tú vienes",
        "vos venís"
       ],
       [
        "ser",
        "tú eres",
        "vos sos"
       ]
      ],
      "note": "The stress goes on the end and the stem doesn't change: tenés, not tienés. Vos means tú, never ustedes."
     }
    ]
   }
  }
 },
 "neutral-vs-colloquial-5": {
  "goal": "tell neutral from colloquial Spanish and judge the mix: la situación se agravó / la cosa se puso fea.",
  "sections": {
   "0": {
    "tables": [
     {
      "caption": "Neutral or colloquial?",
      "head": [
       "Neutral (news, notices)",
       "Colloquial (friends)"
      ],
      "rows": [
       [
        "La situación se agravó.",
        "La cosa se puso fea."
       ],
       [
        "Hubo un incidente en la estación.",
        "Hubo un lío tremendo en la estación."
       ],
       [
        "Cometió un error.",
        "Metió la pata."
       ],
       [
        "La reunión fue muy aburrida.",
        "La reunión fue un embole. (Río de la Plata)"
       ]
      ],
      "note": "Neither is wrong: each one has its place."
     }
    ]
   }
  }
 },
 "neutral-vs-colloquial-5-part-2": {
  "goal": "use the words for register in new sentences: acartonado, llano, el argot, la muletilla.",
  "sections": {
   "0": {
    "tables": [
     {
      "caption": "Neutral or colloquial?",
      "head": [
       "Neutral (news, notices)",
       "Colloquial (friends)"
      ],
      "rows": [
       [
        "La situación se agravó.",
        "La cosa se puso fea."
       ],
       [
        "Hubo un incidente en la estación.",
        "Hubo un lío tremendo en la estación."
       ],
       [
        "Cometió un error.",
        "Metió la pata."
       ],
       [
        "La reunión fue muy aburrida.",
        "La reunión fue un embole. (Río de la Plata)"
       ]
      ],
      "note": "Neither is wrong: each one has its place."
     }
    ]
   }
  }
 },
 "neutral-vs-colloquial-6": {
  "goal": "name the tools of colloquial speech: a loving diminutive (casita), a rough ending (cuartucho), a filler, a proverb.",
  "sections": {
   "0": {
    "tables": [
     DIMINUTIVES,
     AUGMENTATIVES
    ]
   }
  }
 },
 "neutral-vs-colloquial-6-part-2": {
  "goal": "spot hyperbole, fillers and set phrases in new sentences and fix common slips: hubo, not hubieron.",
  "sections": {
   "0": {
    "addTables": [
     AUGMENTATIVES
    ]
   }
  }
 },
 "c1r-mission-instructions-manual": {
  "goal": "write a manual step by step: pulsar el botón, manteniéndolo pulsado, hasta que deje de parpadear.",
  "sections": {
   "0": {
    "tables": [
     GERUND_INFINITIVE
    ]
   }
  }
 },
 "c1r-mission-instructions-manual-part-2": {
  "goal": "write new manual steps with the instruction infinitive, the gerund of manner and hasta que + wish form.",
  "sections": {
   "0": {
    "tables": [
     GERUND_INFINITIVE
    ]
   }
  }
 },
 "c1r-mission-press-release": {
  "goal": "write a press release without naming who: se han registrado, fue aprobado por, se ruega que.",
  "sections": {
   "0": {
    "tables": [
     PASSIVE_SER,
     SE_PASSIVE
    ]
   }
  }
 },
 "c1r-text-detective-free-indirect": {
  "goal": "read a story and tell the narrator from the character: aquí, ahora, ¡maldito!, questions with no «she asked».",
  "sections": {
   "0": {
    "tables": [
     {
      "caption": "Three ways to tell a thought",
      "head": [
       "Style",
       "Example",
       "What changes"
      ],
      "rows": [
       [
        "direct",
        "Pensó: «Mañana me voy de aquí.»",
        "her own words, in quotes"
       ],
       [
        "indirect",
        "Pensó que al día siguiente se iba de allí.",
        "que; he / she; imperfect; al día siguiente, allí"
       ],
       [
        "free indirect",
        "Mañana se iba de aquí. ¡Por fin!",
        "no «pensó que», she keeps her aquí, mañana and ¡!"
       ]
      ],
      "note": "Present → imperfect, he hecho → había hecho, iré → iría."
     },
     NARRATIVE_TENSES
    ]
   }
  }
 },
 "gerund-infinitive-advanced-part-2-3-part-2": {
  "goal": "use the words for time and rules in new sentences and build words with -ez, -azgo, re- and -ificar.",
  "sections": {
   "0": {
    "tables": [
     {
      "caption": "Building new words",
      "head": [
       "Pattern",
       "Does",
       "Example"
      ],
      "rows": [
       [
        "-ez, -eza",
        "describing word → the quality",
        "nítido → la nitidez, rígido → la rigidez"
       ],
       [
        "-azgo",
        "state or result",
        "harto → el hartazgo, hallar → el hallazgo"
       ],
       [
        "re-",
        "again, back",
        "anudar → reanudar"
       ],
       [
        "-ificar",
        "make it so",
        "cuanto → cuantificar"
       ]
      ],
      "note": "Fixed phrases don't change: a la larga (in the end), de antemano (beforehand)."
     }
    ]
   }
  }
 },
 "diminutives-augmentatives-1": {
  "parts": [
   {
    "goal": "use diminutives for more than size: affection (mi abuelita), politeness (un momentito) and irony (¿una multita?)."
   },
   {
    "goal": "tell a mocking diminutive (un politiquillo) from a rough ending (manazas, golazo) and use -ísimo."
   }
  ],
  "sections": {
   "0": {
    "tables": [
     DIMINUTIVES
    ]
   }
  }
 }
};

function merge(a: Record<string, LessonPatch>, b: Record<string, LessonPatch>): Record<string, LessonPatch> {
  const out: Record<string, LessonPatch> = { ...a };
  for (const [slug, p] of Object.entries(b)) {
    const m = out[slug] ?? {};
    out[slug] = {
      ...m,
      ...p,
      sections: Object.fromEntries([...new Set([...Object.keys(m.sections ?? {}), ...Object.keys(p.sections ?? {})])].map((k) => [k, { ...(m.sections?.[+k] ?? {}), ...(p.sections?.[+k] ?? {}) }])),
      exercises: { ...(m.exercises ?? {}), ...(p.exercises ?? {}), replace: { ...(m.exercises?.replace ?? {}), ...(p.exercises?.replace ?? {}) } },
    };
  }
  return out;
}

function withLatam(p: Record<string, LessonPatch>): Record<string, LessonPatch> {
  const out: Record<string, LessonPatch> = { ...p };
  for (const [slug, g] of Object.entries(C2_UNIT6_LATAM)) {
    const m = out[slug] ?? {};
    const alts: Record<number, string[]> = { ...(g.alts ?? {}) };
    for (const [i, a] of Object.entries(m.alts ?? {})) alts[+i] = [...(alts[+i] ?? []), ...a];
    const sections = { ...(m.sections ?? {}) };
    for (const [si, ca] of Object.entries(g.checkAlts ?? {})) sections[+si] = { ...sections[+si], checkAlts: { ...ca, ...(sections[+si]?.checkAlts ?? {}) } };
    out[slug] = { ...m, alts, ...(Object.keys(sections).length ? { sections } : {}) };
  }
  return out;
}

export const C2_UNIT6_PATCHES: Record<string, LessonPatch> = withLatam(merge(C2_UNIT6_SWAP, manual));
