// Synced from cheneygross-afk/lengo:src/lib/lessons/es-redesign/c2-unit7.ts by scripts/sync-content.mjs -- edit it there, not here.
// New course, C2 Unit 7 (Spain's vosotros, to recognise; old and legal forms):
// content fixes from Claude's audit in Ricardo's format (Claude Feedback/Spanish
// (new course)/C2 Mastery/Unit 07). Only content changes here: what is taught,
// asked and accepted. The answer checker and the rubric are untouched.
// 
// The lessons are re-ordered so the vosotros commands come before the lessons
// that score them (the mixed round, the morning story and the house rules asked
// for no os olvidéis before the card that teaches it), and the legal lesson no
// longer expects the future subjunctive before its card, which now shows how it
// is formed. Each lesson gets its own goal and table. Spain words stay in the
// lessons about Spain's vosotros (a Latin America learner skips those); the
// lessons a Latin America learner sees put the Latin American word first.
import type { LessonPatch } from "./patch";
import { LITERARY_FORMS, NARRATIVE_TENSES, NOSOTROS_COMMANDS, PASSIVE_SER, SI_REAL, SUBJ_IMPERSONAL, TU_COMMANDS, USTED_COMMANDS, VOSOTROS } from "./concept-tables";
import { C2_UNIT7_LATAM, C2_UNIT7_SWAP } from "./c2-unit7-latam";

const manual: Record<string, LessonPatch> = {
 "a2g-vos-vosotros": {
  "goal": "tell the two \"you\" forms apart when you hear them: vos for one friend (vos tenés) and Spain's vosotros for a group (vosotros tenéis)."
 },
 "vosotros-commands-1": {
  "goal": "tell a group of friends in Spain what to do: drop the -r, add -d: hablad, comed, venid, haced.",
  "sections": {
   "0": {
    "tables": [
     VOSOTROS,
     {
      "caption": "Group commands in Spain",
      "head": [
       "Verb",
       "Do it",
       "Don't"
      ],
      "rows": [
       [
        "hablar",
        "hablad",
        "no habléis"
       ],
       [
        "comer",
        "comed",
        "no comáis"
       ],
       [
        "venir",
        "venid",
        "no vengáis"
       ],
       [
        "sentarse",
        "sentaos",
        "no os sentéis"
       ],
       [
        "irse",
        "idos",
        "no os vayáis"
       ]
      ],
      "note": "Do it: drop the -r, add -d. With os the -d drops (sentaos), except idos. Don't: the wish form. Latin America says ustedes: hablen, no se sienten."
     }
    ]
   }
  }
 },
 "b1d-patron-hablad-comed": {
  "goal": "turn any verb into a group command in one step, even irregular ones: decir → decid, ir → id.",
  "sections": {
   "0": {
    "tables": [
     {
      "caption": "Group commands in Spain",
      "head": [
       "Verb",
       "Do it",
       "Don't"
      ],
      "rows": [
       [
        "hablar",
        "hablad",
        "no habléis"
       ],
       [
        "comer",
        "comed",
        "no comáis"
       ],
       [
        "venir",
        "venid",
        "no vengáis"
       ],
       [
        "sentarse",
        "sentaos",
        "no os sentéis"
       ],
       [
        "irse",
        "idos",
        "no os vayáis"
       ]
      ],
      "note": "Do it: drop the -r, add -d. With os the -d drops (sentaos), except idos. Don't: the wish form. Latin America says ustedes: hablen, no se sienten."
     }
    ]
   }
  }
 },
 "b1d-cadena-tu-a-vosotros": {
  "goal": "change sentences from one friend to a group in Spain: comes → coméis, tu → vuestro, ven → venid."
 },
 "b1d-habla-de-ti-instrucciones-grupo": {
  "goal": "give your friends the plan for a day out: venid a las siete, traed agua, cargad los móviles.",
  "sections": {
   "0": {
    "tables": [
     {
      "caption": "Group commands in Spain",
      "head": [
       "Verb",
       "Do it",
       "Don't"
      ],
      "rows": [
       [
        "hablar",
        "hablad",
        "no habléis"
       ],
       [
        "comer",
        "comed",
        "no comáis"
       ],
       [
        "venir",
        "venid",
        "no vengáis"
       ],
       [
        "sentarse",
        "sentaos",
        "no os sentéis"
       ],
       [
        "irse",
        "idos",
        "no os vayáis"
       ]
      ],
      "note": "Do it: drop the -r, add -d. With os the -d drops (sentaos), except idos. Don't: the wish form. Latin America says ustedes: hablen, no se sienten."
     }
    ]
   }
  }
 },
 "vosotros-commands-2": {
  "goal": "use group commands with os and in the negative: levantaos, sentaos, idos; no habléis, no os vayáis.",
  "sections": {
   "0": {
    "tables": [
     {
      "caption": "Group commands in Spain",
      "head": [
       "Verb",
       "Do it",
       "Don't"
      ],
      "rows": [
       [
        "hablar",
        "hablad",
        "no habléis"
       ],
       [
        "comer",
        "comed",
        "no comáis"
       ],
       [
        "venir",
        "venid",
        "no vengáis"
       ],
       [
        "sentarse",
        "sentaos",
        "no os sentéis"
       ],
       [
        "irse",
        "idos",
        "no os vayáis"
       ]
      ],
      "note": "Do it: drop the -r, add -d. With os the -d drops (sentaos), except idos. Don't: the wish form. Latin America says ustedes: hablen, no se sienten."
     }
    ]
   }
  }
 },
 "b1r-tema-estres": {
  "goal": "give advice about stress and rest: te recomiendo que desconectes, estar quemado, tomarse un respiro.",
  "sections": {
   "0": {
    "tables": [
     SUBJ_IMPERSONAL
    ]
   }
  }
 },
 "b1r-tema-derechos-inquilinos": {
  "goal": "talk about tenants' rights with the passive, es necesario que and si: el contrato fue firmado, si suben la renta…",
  "sections": {
   "0": {
    "tables": [
     PASSIVE_SER,
     SI_REAL
    ]
   }
  }
 },
 "b1d-rep-imperativo-ronda-mixta": {
  "goal": "give the same command to four people: come, coma, comamos, comed, and their negatives.",
  "sections": {
   "0": {
    "tables": [
     TU_COMMANDS,
     USTED_COMMANDS,
     NOSOTROS_COMMANDS,
     {
      "caption": "Group commands in Spain",
      "head": [
       "Verb",
       "Do it",
       "Don't"
      ],
      "rows": [
       [
        "hablar",
        "hablad",
        "no habléis"
       ],
       [
        "comer",
        "comed",
        "no comáis"
       ],
       [
        "venir",
        "venid",
        "no vengáis"
       ],
       [
        "sentarse",
        "sentaos",
        "no os sentéis"
       ],
       [
        "irse",
        "idos",
        "no os vayáis"
       ]
      ],
      "note": "Do it: drop the -r, add -d. With os the -d drops (sentaos), except idos. Don't: the wish form. Latin America says ustedes: hablen, no se sienten."
     }
    ]
   }
  }
 },
 "b1d-cuento-antes-del-cole": {
  "goal": "fill in a father's morning orders to his kids: despertaos, vestíos, no os olvidéis la mochila.",
  "sections": {
   "0": {
    "tables": [
     {
      "caption": "Group commands in Spain",
      "head": [
       "Verb",
       "Do it",
       "Don't"
      ],
      "rows": [
       [
        "hablar",
        "hablad",
        "no habléis"
       ],
       [
        "comer",
        "comed",
        "no comáis"
       ],
       [
        "venir",
        "venid",
        "no vengáis"
       ],
       [
        "sentarse",
        "sentaos",
        "no os sentéis"
       ],
       [
        "irse",
        "idos",
        "no os vayáis"
       ]
      ],
      "note": "Do it: drop the -r, add -d. With os the -d drops (sentaos), except idos. Don't: the wish form. Latin America says ustedes: hablen, no se sienten."
     }
    ]
   }
  }
 },
 "b1r-mission-spain-house-rules": {
  "goal": "write the house rules for a shared flat in Madrid: limpiad la cocina, no fuméis dentro.",
  "sections": {
   "0": {
    "tables": [
     {
      "caption": "Group commands in Spain",
      "head": [
       "Verb",
       "Do it",
       "Don't"
      ],
      "rows": [
       [
        "hablar",
        "hablad",
        "no habléis"
       ],
       [
        "comer",
        "comed",
        "no comáis"
       ],
       [
        "venir",
        "venid",
        "no vengáis"
       ],
       [
        "sentarse",
        "sentaos",
        "no os sentéis"
       ],
       [
        "irse",
        "idos",
        "no os vayáis"
       ]
      ],
      "note": "Do it: drop the -r, add -d. With os the -d drops (sentaos), except idos. Don't: the wish form. Latin America says ustedes: hablen, no se sienten."
     }
    ]
   }
  }
 },
 "b1d-rep-vosotros-mezcla": {
  "goal": "give a camp group instructions that mix tenses: ¿habéis traído…?, poneos, no os separéis.",
  "sections": {
   "0": {
    "tables": [
     VOSOTROS,
     {
      "caption": "Group commands in Spain",
      "head": [
       "Verb",
       "Do it",
       "Don't"
      ],
      "rows": [
       [
        "hablar",
        "hablad",
        "no habléis"
       ],
       [
        "comer",
        "comed",
        "no comáis"
       ],
       [
        "venir",
        "venid",
        "no vengáis"
       ],
       [
        "sentarse",
        "sentaos",
        "no os sentéis"
       ],
       [
        "irse",
        "idos",
        "no os vayáis"
       ]
      ],
      "note": "Do it: drop the -r, add -d. With os the -d drops (sentaos), except idos. Don't: the wish form. Latin America says ustedes: hablen, no se sienten."
     }
    ]
   }
  }
 },
 "b1d-rep-vosotros-mezcla-part-2": {
  "goal": "run the camp day with new instructions and questions to the group, all in vosotros.",
  "sections": {
   "0": {
    "tables": [
     {
      "caption": "Group commands in Spain",
      "head": [
       "Verb",
       "Do it",
       "Don't"
      ],
      "rows": [
       [
        "hablar",
        "hablad",
        "no habléis"
       ],
       [
        "comer",
        "comed",
        "no comáis"
       ],
       [
        "venir",
        "venid",
        "no vengáis"
       ],
       [
        "sentarse",
        "sentaos",
        "no os sentéis"
       ],
       [
        "irse",
        "idos",
        "no os vayáis"
       ]
      ],
      "note": "Do it: drop the -r, add -d. With os the -d drops (sentaos), except idos. Don't: the wish form. Latin America says ustedes: hablen, no se sienten."
     }
    ]
   }
  }
 },
 "b1r-transform-tu-vosotros": {
  "goal": "turn instructions for one person into instructions for a group in Spain: come → comed, no comas → no comáis.",
  "sections": {
   "0": {
    "tables": [
     {
      "caption": "Group commands in Spain",
      "head": [
       "Verb",
       "Do it",
       "Don't"
      ],
      "rows": [
       [
        "hablar",
        "hablad",
        "no habléis"
       ],
       [
        "comer",
        "comed",
        "no comáis"
       ],
       [
        "venir",
        "venid",
        "no vengáis"
       ],
       [
        "sentarse",
        "sentaos",
        "no os sentéis"
       ],
       [
        "irse",
        "idos",
        "no os vayáis"
       ]
      ],
      "note": "Do it: drop the -r, add -d. With os the -d drops (sentaos), except idos. Don't: the wish form. Latin America says ustedes: hablen, no se sienten."
     }
    ]
   }
  }
 },
 "b1r-transform-tu-vosotros-part-2": {
  "goal": "transform new instructions, with os and in the negative: siéntate → sentaos, no te vayas → no os vayáis.",
  "sections": {
   "0": {
    "tables": [
     {
      "caption": "Group commands in Spain",
      "head": [
       "Verb",
       "Do it",
       "Don't"
      ],
      "rows": [
       [
        "hablar",
        "hablad",
        "no habléis"
       ],
       [
        "comer",
        "comed",
        "no comáis"
       ],
       [
        "venir",
        "venid",
        "no vengáis"
       ],
       [
        "sentarse",
        "sentaos",
        "no os sentéis"
       ],
       [
        "irse",
        "idos",
        "no os vayáis"
       ]
      ],
      "note": "Do it: drop the -r, add -d. With os the -d drops (sentaos), except idos. Don't: the wish form. Latin America says ustedes: hablen, no se sienten."
     }
    ]
   }
  }
 },
 "historical-narrative-2": {
  "goal": "tell había firmado (before) from hubo firmado (right after, in old texts): apenas hubo firmado, partió."
 },
 "historical-narrative-2-part-2": {
  "goal": "recognise hubo + -ado in new historical texts and say it today with apenas firmó or en cuanto firmó.",
  "sections": {
   "0": {
    "tables": [
     LITERARY_FORMS
    ]
   }
  }
 },
 "historical-narrative-3": {
  "goal": "look ahead from the past (sería, habría de, estaba llamado a) and read el que fuera presidente as \"who had been\"."
 },
 "c2r-history-error-hunt-tenses": {
  "goal": "find and fix tense mistakes in a history essay: hubo vuelto without apenas, a broken historical present.",
  "sections": {
   "0": {
    "tables": [
     NARRATIVE_TENSES
    ]
   }
  }
 },
 "art-film-literature-criticism-1-part-2": {
  "goal": "use the critic's words in new sentences: la trama, la verosimilitud, el desenlace, la intertextualidad.",
  "sections": {
   "0": {
    "tables": [
     {
      "caption": "A critic's words",
      "head": [
       "Word",
       "Means",
       "Opposite or partner"
      ],
      "rows": [
       [
        "la trama",
        "the plot",
        "el desenlace (the ending)"
       ],
       [
        "la peripecia",
        "a twist",
        "el giro"
       ],
       [
        "un personaje plano",
        "a flat character",
        "redondo (round, changes)"
       ],
       [
        "verosímil",
        "believable by its own rules",
        "inverosímil"
       ],
       [
        "la intertextualidad",
        "a dialogue with other works",
        "la alusión, el homenaje"
       ]
      ],
      "note": "To judge: resultar + adjective (resulta forzado). To grant first: por muy sorprendente que sea…"
     }
    ]
   }
  }
 },
 "c2r-critic-plot-character": {
  "goal": "build a critic's word web by opposites: personaje plano / redondo, narrador omnisciente / testigo, verosímil.",
  "sections": {
   "0": {
    "tables": [
     {
      "caption": "A critic's words",
      "head": [
       "Word",
       "Means",
       "Opposite or partner"
      ],
      "rows": [
       [
        "la trama",
        "the plot",
        "el desenlace (the ending)"
       ],
       [
        "la peripecia",
        "a twist",
        "el giro"
       ],
       [
        "un personaje plano",
        "a flat character",
        "redondo (round, changes)"
       ],
       [
        "verosímil",
        "believable by its own rules",
        "inverosímil"
       ],
       [
        "la intertextualidad",
        "a dialogue with other works",
        "la alusión, el homenaje"
       ]
      ],
      "note": "To judge: resultar + adjective (resulta forzado). To grant first: por muy sorprendente que sea…"
     }
    ]
   }
  }
 },
 "c2r-critic-plot-character-part-2": {
  "goal": "judge new plots and characters with resultar + adjective: el final resulta forzado.",
  "sections": {
   "0": {
    "tables": [
     {
      "caption": "A critic's words",
      "head": [
       "Word",
       "Means",
       "Opposite or partner"
      ],
      "rows": [
       [
        "la trama",
        "the plot",
        "el desenlace (the ending)"
       ],
       [
        "la peripecia",
        "a twist",
        "el giro"
       ],
       [
        "un personaje plano",
        "a flat character",
        "redondo (round, changes)"
       ],
       [
        "verosímil",
        "believable by its own rules",
        "inverosímil"
       ],
       [
        "la intertextualidad",
        "a dialogue with other works",
        "la alusión, el homenaje"
       ]
      ],
      "note": "To judge: resultar + adjective (resulta forzado). To grant first: por muy sorprendente que sea…"
     }
    ]
   }
  }
 },
 "c2r-critic-mission-review": {
  "goal": "write a 150-word review: details, a summary without spoilers, one technical point and a fair verdict.",
  "sections": {
   "0": {
    "tables": [
     {
      "caption": "How a review is built",
      "head": [
       "Part",
       "What goes in",
       "Sounds like"
      ],
      "rows": [
       [
        "ficha",
        "title, author, year",
        "Cien años de soledad (1967), de García Márquez"
       ],
       [
        "síntesis",
        "the start, no spoilers",
        "La novela sigue a…"
       ],
       [
        "análisis",
        "one technical point",
        "El narrador omnisciente…"
       ],
       [
        "valoración",
        "a fair verdict",
        "Por muy lenta que resulte, merece la pena."
       ]
      ]
     }
    ]
   }
  }
 },
 "c2r-critic-mission-review-part-2": {
  "goal": "write a second review of something you saw or read, with por muy… que and a final recommendation.",
  "sections": {
   "0": {
    "tables": [
     {
      "caption": "How a review is built",
      "head": [
       "Part",
       "What goes in",
       "Sounds like"
      ],
      "rows": [
       [
        "ficha",
        "title, author, year",
        "Cien años de soledad (1967), de García Márquez"
       ],
       [
        "síntesis",
        "the start, no spoilers",
        "La novela sigue a…"
       ],
       [
        "análisis",
        "one technical point",
        "El narrador omnisciente…"
       ],
       [
        "valoración",
        "a fair verdict",
        "Por muy lenta que resulte, merece la pena."
       ]
      ]
     }
    ]
   }
  }
 },
 "c2r-econ-merger-dialogue": {
  "goal": "discuss a company merger in the news: la opa, las sinergias, la cuota de mercado, la posición dominante.",
  "sections": {
   "0": {
    "tables": [
     {
      "caption": "Words for a merger",
      "head": [
       "Word",
       "Means"
      ],
      "rows": [
       [
        "la opa",
        "an offer to buy a company's shares"
       ],
       [
        "las sinergias",
        "savings from joining two companies"
       ],
       [
        "la cuota de mercado",
        "share of the market"
       ],
       [
        "la posición dominante",
        "so big it can set prices"
       ],
       [
        "la cotización",
        "the share price"
       ]
      ]
     }
    ]
   }
  }
 },
 "art-film-literature-criticism-1": {
  "parts": [
   {
    "goal": "judge a plot and a character like a critic, and grant a point first with por muy… que + wish form."
   },
   {
    "goal": "talk about symbols, a sustained metaphor and intertextuality in a book or film."
   }
  ],
  "sections": {
   "0": {
    "tables": [
     {
      "caption": "A critic's words",
      "head": [
       "Word",
       "Means",
       "Opposite or partner"
      ],
      "rows": [
       [
        "la trama",
        "the plot",
        "el desenlace (the ending)"
       ],
       [
        "la peripecia",
        "a twist",
        "el giro"
       ],
       [
        "un personaje plano",
        "a flat character",
        "redondo (round, changes)"
       ],
       [
        "verosímil",
        "believable by its own rules",
        "inverosímil"
       ],
       [
        "la intertextualidad",
        "a dialogue with other works",
        "la alusión, el homenaje"
       ]
      ],
      "note": "To judge: resultar + adjective (resulta forzado). To grant first: por muy sorprendente que sea…"
     }
    ]
   },
   "5": {
    "tables": [
     {
      "caption": "Reading deeper",
      "head": [
       "Tool",
       "What it does",
       "Example"
      ],
      "rows": [
       [
        "el símbolo",
        "an object carries an idea",
        "la casa que se cae = la familia"
       ],
       [
        "la metáfora sostenida",
        "one image runs through the whole work",
        "cada grieta, un conflicto"
       ],
       [
        "la intertextualidad",
        "the work talks to other works",
        "una alusión al Quijote"
       ]
      ]
     }
    ]
   }
  }
 },
 "espanol-juridico-administrativo-drill-2": {
  "parts": [
   {
    "goal": "read legal Spanish that points back and shares out: dicho contrato, el citado artículo, sendos recursos, a la sazón."
   },
   {
    "goal": "read and write contract-style conditions (si no abonare, el que causare) and tell cabe, procede and no ha lugar apart."
   }
  ],
  "sections": {
   "0": {
    "tables": [
     {
      "caption": "Legal words that point back",
      "head": [
       "Word",
       "Means",
       "Example"
      ],
      "rows": [
       [
        "dicho / el citado / el referido",
        "the one already mentioned",
        "Dicho contrato quedará resuelto."
       ],
       [
        "sendos, sendas",
        "one each",
        "Los dos firmaron sendos avales."
       ],
       [
        "a la sazón",
        "at that time",
        "García, a la sazón director."
       ],
       [
        "cabe / procede / no ha lugar",
        "is possible / is right / is denied",
        "Contra esta resolución cabe recurso."
       ]
      ],
      "note": "Avoid «el mismo» as a pronoun: se recibió la solicitud y se tramitó."
     }
    ]
   },
   "3": {
    "tables": [
     {
      "caption": "The future wish form, in contracts",
      "head": [
       "They form (past)",
       "Future wish form",
       "Today"
      ],
      "rows": [
       [
        "abonaron",
        "si no abonare",
        "si no abona"
       ],
       [
        "causaron",
        "el que causare",
        "el que cause"
       ],
       [
        "incumplieron",
        "si incumpliere",
        "si incumple"
       ],
       [
        "fueron",
        "sea cual fuere",
        "sea cual sea"
       ]
      ],
      "note": "Take the ellos past form, drop -ron, add -re. You'll write it only in old-style contracts."
     }
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
  for (const [slug, g] of Object.entries(C2_UNIT7_LATAM)) {
    const m = out[slug] ?? {};
    const alts: Record<number, string[]> = { ...(g.alts ?? {}) };
    for (const [i, a] of Object.entries(m.alts ?? {})) alts[+i] = [...(alts[+i] ?? []), ...a];
    const sections = { ...(m.sections ?? {}) };
    for (const [si, ca] of Object.entries(g.checkAlts ?? {})) sections[+si] = { ...sections[+si], checkAlts: { ...ca, ...(sections[+si]?.checkAlts ?? {}) } };
    out[slug] = { ...m, alts, ...(Object.keys(sections).length ? { sections } : {}) };
  }
  return out;
}

export const C2_UNIT7_PATCHES: Record<string, LessonPatch> = withLatam(merge(C2_UNIT7_SWAP, manual));
