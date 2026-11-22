// Synced from cheneygross-afk/lengo:src/lib/lessons/es-redesign/c2-unit5.ts by scripts/sync-content.mjs -- edit it there, not here.
// New course, C2 Unit 5 (word order for focus; saying it without a person;
// tricky verb pairs): content fixes from Claude's audit in Ricardo's format
// (Claude Feedback/Spanish (new course)/C2 Mastery/Unit 05). Only content changes
// here: what is taught, asked and accepted. The answer checker and the rubric are
// untouched.
// 
// The legal-Spanish lesson built on the future subjunctive (abonare, causare)
// moves to C2 Unit 7, which teaches literary forms; the "¿quién te lo regaló?"
// lesson on putting the object first moves in from C2 Unit 7 so the unit
// practises word order, and the second part of the preposition-pairs contrast
// becomes required. Each lesson gets its own goal and table, the vosotros table
// and vosotros items leave, and Latin American words go first.
import type { LessonPatch } from "./patch";
import { DOUBLE_OBJECT, PREP_VERBS, SUBJ_DOUBT, USTED_COMMANDS, WORD_ORDER } from "./concept-tables";
import { C2_UNIT5_LATAM, C2_UNIT5_SWAP } from "./c2-unit5-latam";

const manual: Record<string, LessonPatch> = {
 "b1d-rep-mezcla-consultorio": {
  "goal": "answer an advice letter: give your view with creo que / no creo que, advise with yo en su lugar, and give usted commands.",
  "sections": {
   "0": {
    "tables": [
     SUBJ_DOUBT
    ]
   },
   "2": {
    "tables": [
     USTED_COMMANDS
    ]
   }
  }
 },
 "b1d-rep-combinados-habla-de-ti": {
  "goal": "talk about your things putting the object first and repeating it: ¿Mi guitarra? Me la regalaron mis papás.",
  "sections": {
   "0": {
    "tables": [
     WORD_ORDER,
     DOUBLE_OBJECT
    ]
   }
  }
 },
 "passive-impersonal-mastery-3": {
  "goal": "use se with a + person, always singular: se busca a los candidatos, se informó a los vecinos."
 },
 "c1r-spiral-passive-nominal-subj": {
  "goal": "write formal, impersonal sentences that mix se, ser passives, formal nouns and the wish form."
 },
 "passive-voice-impersonal-se-drill-1": {
  "goal": "tell apart ser + participle, se with a thing and se for people in general: fue construida, se venden, se come bien."
 },
 "c1r-extra-impersonal-alternatives": {
  "goal": "pick the right way to leave out who: se, they, uno, generic tú or la gente, by register."
 },
 "prepositional-verbs-part-1-3": {
  "goal": "use verbs that take en, also before que: consistir en, empeñarse en, quedar en, fijarse en.",
  "sections": {
   "0": {
    "tables": [
     PREP_VERBS
    ]
   }
  }
 },
 "c2r-rhetorical-vocab-spiral": {
  "goal": "spot the rhetorical figure in a short passage: metáfora, hipérbole, anáfora, antítesis…"
 },
 "c2r-rhetorical-vocab-spiral-part-2": {
  "goal": "name and use rhetorical figures in new passages and say what each one does."
 },
 "c1c2-vocabulary-practice-18-part-2": {
  "goal": "use the economic words in new news sentences: el repunte de la inflación, la prima de riesgo."
 },
 "c1r-mission-cover-letter-verbs": {
  "goal": "write a cover letter with the right small words: aspiro a, cuento con, destaco por, me especialicé en.",
  "sections": {
   "0": {
    "addTables": [
     PREP_VERBS
    ]
   }
  }
 },
 "c2r-rhetorical-dialogue-reply": {
  "goal": "answer a loaded rhetorical question: take it literally, show what it assumes, or turn it around."
 },
 "c2r-rhetorical-dialogue-reply-part-2": {
  "goal": "defuse new rhetorical questions with usted da por hecho que… and no se trata de… sino de…"
 },
 "c2r-conflict-story-detective": {
  "goal": "read a work mediation and name its techniques: setting rules, rephrasing, finding a shared interest."
 },
 "prepositional-verbs-part-1-mastery-check": {
  "goal": "show you can use verbs with con and en in new sentences: contar con, dar con, insistir en.",
  "sections": {
   "0": {
    "addTables": [
     PREP_VERBS
    ]
   }
  }
 },
 "prepositional-verbs-part-1-mastery-check-part-2": {
  "goal": "prove it again: verbs with con and en before a noun, a whole verb and que.",
  "sections": {
   "0": {
    "addTables": [
     PREP_VERBS
    ]
   }
  }
 },
 "c1r-sort-prepositional-verbs": {
  "goal": "sort verbs by their small word and use them: atreverse a, darse cuenta de, confiar en, casarse con.",
  "sections": {
   "0": {
    "addTables": [
     PREP_VERBS
    ]
   }
  }
 },
 "c1r-sort-prepositional-verbs-part-2": {
  "goal": "practise verbs with a, de, en and con in new sentences and fix the wrong small word.",
  "sections": {
   "0": {
    "addTables": [
     PREP_VERBS
    ]
   }
  }
 },
 "c1r-contrast-meaning-by-preposition": {
  "goal": "change the meaning with the small word: pensar en / de, dar con / a, acabar con / de, quedar en / con.",
  "sections": {
   "0": {
    "tables": [
     {
      "caption": "The small word changes the verb",
      "head": [
       "Pair",
       "Meaning",
       "Example"
      ],
      "rows": [
       [
        "pensar en / pensar de",
        "think about / have an opinion of",
        "Pienso en ti. ¿Qué piensas de él?"
       ],
       [
        "dar con / dar a",
        "find / face onto",
        "Di con la llave. La ventana da al mar."
       ],
       [
        "acabar con / acabar de",
        "put an end to / have just",
        "Acabar con el ruido. Acabo de llegar."
       ],
       [
        "quedar en / quedar con",
        "agree to / meet up with",
        "Quedamos en vernos. Quedé con Ana."
       ]
      ],
      "note": "Quedar con (meet up) is mostly heard in Spain; in Latin America people also say verse con or quedar de verse."
     }
    ]
   }
  }
 },
 "c1r-contrast-meaning-by-preposition-part-2": {
  "goal": "choose the pair that says what you mean in new sentences: dimos con el problema, la ventana da al norte.",
  "sections": {
   "0": {
    "tables": [
     {
      "caption": "The small word changes the verb",
      "head": [
       "Pair",
       "Meaning",
       "Example"
      ],
      "rows": [
       [
        "pensar en / pensar de",
        "think about / have an opinion of",
        "Pienso en ti. ¿Qué piensas de él?"
       ],
       [
        "dar con / dar a",
        "find / face onto",
        "Di con la llave. La ventana da al mar."
       ],
       [
        "acabar con / acabar de",
        "put an end to / have just",
        "Acabar con el ruido. Acabo de llegar."
       ],
       [
        "quedar en / quedar con",
        "agree to / meet up with",
        "Quedamos en vernos. Quedé con Ana."
       ]
      ],
      "note": "Quedar con (meet up) is mostly heard in Spain; in Latin America people also say verse con or quedar de verse."
     }
    ]
   }
  }
 },
 "b2r-mission-passionate-review": {
  "goal": "write a passionate concert review with emphasis: lo bien que canta, la balada la cantó…, jamás había…",
  "sections": {
   "0": {
    "addTables": [
     WORD_ORDER
    ]
   }
  }
 },
 "c1c2-vocabulary-practice-18": {
  "parts": [
   {
    "goal": "learn the words of economic news: deflación, estanflación, repunte, burbuja, rescate."
   },
   {
    "goal": "tell liquidez from solvencia and use the words for companies and trade: morosidad, arancel, quita."
   }
  ]
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
  for (const [slug, g] of Object.entries(C2_UNIT5_LATAM)) {
    const m = out[slug] ?? {};
    const alts: Record<number, string[]> = { ...(g.alts ?? {}) };
    for (const [i, a] of Object.entries(m.alts ?? {})) alts[+i] = [...(alts[+i] ?? []), ...a];
    const sections = { ...(m.sections ?? {}) };
    for (const [si, ca] of Object.entries(g.checkAlts ?? {})) sections[+si] = { ...sections[+si], checkAlts: { ...ca, ...(sections[+si]?.checkAlts ?? {}) } };
    out[slug] = { ...m, alts, ...(Object.keys(sections).length ? { sections } : {}) };
  }
  return out;
}

export const C2_UNIT5_PATCHES: Record<string, LessonPatch> = withLatam(merge(C2_UNIT5_SWAP, manual));
