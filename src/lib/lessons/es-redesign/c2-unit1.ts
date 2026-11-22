// Synced from cheneygross-afk/lengo:src/lib/lessons/es-redesign/c2-unit1.ts by scripts/sync-content.mjs -- edit it there, not here.
// New course, C2 Unit 1 (cuyo and el cual; stress with ser ... quien; lo + word +
// que): content fixes from Claude's audit in Ricardo's format (Claude
// Feedback/Spanish (new course)/C2 Mastery/Unit 01). Only content changes here:
// what is taught, asked and accepted. The answer checker and the rubric are
// untouched.
// 
// Each lesson gets its own goal and the right table; the music review's second
// part goes back to C1 Unit 5 next to its first part (its one cleft item now
// practises por mucho que); a rule card drops vosotros.
import type { LessonPatch } from "./patch";
import { CLEFT, CUYO, DOUBLE_OBJECT, LO_QUE_ADJ, POR_MUCHO_QUE, POSSESSIVE_PRONOUNS, RELATIVES_PREP, REPORTED_SPEECH, SEQUENCE, SE_PASSIVE, SUBJ_WISHES, WORD_ORDER } from "./concept-tables";
import { C2_UNIT1_LATAM, C2_UNIT1_SWAP } from "./c2-unit1-latam";

const manual: Record<string, LessonPatch> = {
 "cuyo-el-cual-1": {
  "goal": "say \"whose\" with cuyo, matching the thing owned, and \"which\" after a small word with el cual: la razón por la cual vine."
 },
 "b2d-patron-cuyo": {
  "goal": "choose cuyo, cuya, cuyos or cuyas by looking at the word right after it: el autor cuyas novelas leí."
 },
 "b2d-patron-cuyo-part-2": {
  "goal": "practise cuyo with new nouns and owners: es la mujer cuyo carro robaron.",
  "sections": {
   "0": {
    "addTables": [
     CUYO
    ]
   }
  }
 },
 "b2d-cadena-unir-con-cuyo": {
  "goal": "join two sentences with cuyo: Visitamos una ciudad. Sus museos son famosos. → una ciudad cuyos museos…"
 },
 "b2d-cadena-unir-con-cuyo-part-2": {
  "goal": "join sentences with cuyo, including with a small word first: la casa en cuyo jardín jugábamos.",
  "sections": {
   "0": {
    "addTables": [
     CUYO
    ]
   }
  }
 },
 "b2d-patron-lo-anteposicion": {
  "goal": "put the object first and repeat it with lo, la, los, las: el carro lo vendimos, la torta la hizo mi abuela.",
  "sections": {
   "0": {
    "tables": [
     WORD_ORDER
    ]
   }
  }
 },
 "b2r-tema-denunciar": {
  "goal": "talk about speaking up or staying silent with pedir que, temer que and me sorprendió que + the wish form.",
  "sections": {
   "0": {
    "tables": [
     SUBJ_WISHES,
     SEQUENCE
    ]
   }
  }
 },
 "b2d-cadena-hendidas": {
  "goal": "stress who, what, where or when with ser … quien / donde / cuando, with ser matching: fueron los niños quienes…"
 },
 "emphasis-word-order-2": {
  "goal": "use 50 words about music and the stage, and stress them with ser … quien and lo que … es."
 },
 "b2r-transform-cleft-sentences": {
  "goal": "turn a plain sentence into one that stresses a part: María lo encontró → fue María quien lo encontró."
 },
 "b1r-error-hunt-se-possessives": {
  "goal": "review: fix se with the wrong verb form and misplaced mine and yours: se necesitan meseros, el mío es azul.",
  "sections": {
   "0": {
    "tables": [
     SE_PASSIVE
    ]
   },
   "1": {
    "addTables": [
     POSSESSIVE_PRONOUNS
    ]
   }
  }
 },
 "b2r-tema-traducir-fielmente": {
  "goal": "pass on someone's exact words faithfully, with the right tense and with the wish form after verbs that ask.",
  "sections": {
   "0": {
    "tables": [
     REPORTED_SPEECH
    ]
   }
  }
 },
 "c2r-present-qa-session": {
  "goal": "handle questions after a talk with five polite formulas, using usted and se lo: se lo haré llegar.",
  "sections": {
   "0": {
    "tables": [
     DOUBLE_OBJECT
    ]
   }
  }
 },
 "historical-narrative-5": {
  "goal": "recognise free indirect style in a historical novel and turn direct speech into it: Mañana atacaría al amanecer.",
  "sections": {
   "0": {
    "tables": [
     REPORTED_SPEECH
    ]
   }
  }
 },
 "legal-administrative-spanish-part-1-1": {
  "goal": "use the fixed formulas of legal Spanish as they are: por la presente, en virtud de, vinculante."
 },
 "legal-administrative-spanish-part-1-1-part-2": {
  "goal": "practise the fixed legal formulas in new documents, without paraphrasing them."
 },
 "legal-administrative-spanish-part-1-2": {
  "goal": "name the people in a legal document: el suscrito, el compareciente, el otorgante, el fedatario."
 },
 "legal-administrative-spanish-part-1-2-part-2": {
  "goal": "practise the names of the parties in new documents, with the right gender: la suscrita, la otorgante."
 },
 "c1r-dialogue-lab-correcting-with-emphasis": {
  "goal": "correct someone in a conversation with ser … quien: No, fue Luis quien lo dijo.",
  "sections": {
   "0": {
    "addTables": [
     CLEFT
    ]
   }
  }
 },
 "c1r-dialogue-lab-correcting-with-emphasis-part-2": {
  "goal": "correct places, times and ways in conversation: fue en Lima donde…, fue así como…",
  "sections": {
   "0": {
    "addTables": [
     CLEFT
    ]
   }
  }
 },
 "c1r-mission-persuasive-speech": {
  "goal": "give a two-minute neighborhood speech that convinces, with lo que necesitamos es…, lo peligroso que es and sí que.",
  "sections": {
   "0": {
    "addTables": [
     CLEFT
    ]
   },
   "1": {
    "addTables": [
     LO_QUE_ADJ
    ]
   }
  }
 },
 "c2r-story-detective-notification": {
  "goal": "read an official notice and find its five parts: what, deadline, what to do, what happens if not, and how to appeal.",
  "sections": {
   "0": {
    "addTables": [
     SE_PASSIVE
    ]
   }
  }
 },
 "b2d-rep-cuyo-elige": {
  "goal": "review: choose cuyo for \"whose\" and a small word + el cual for \"which\": el autor cuya novela leí / la razón por la cual vine.",
  "sections": {
   "0": {
    "tables": [
     CUYO,
     RELATIVES_PREP
    ]
   }
  }
 },
 "b2d-cuento-texto-formal": {
  "goal": "complete a museum press release with cuyo and a small word + el cual, the way formal texts are written."
 },
 "b2d-rep-cuyo-dictado-final": {
  "goal": "define words with cuyo: un huérfano es un niño cuyos padres han muerto.",
  "sections": {
   "0": {
    "addTables": [
     CUYO
    ]
   }
  }
 },
 "b2r-tema-musica-generaciones-part-2": {
  "goal": "practise no es que…, sino que… and por mucho que in new sentences about music and family.",
  "sections": {
   "0": {
    "addTables": [
     POR_MUCHO_QUE
    ]
   }
  }
 },
 "emphasis-word-order-1": {
  "parts": [
   {
    "goal": "stress one part of a sentence by putting it first (ese libro ya lo leí) or with ser … quien: fue Ana quien lo dijo."
   },
   {
    "goal": "say how hard or big something is with lo + word + que, and stress jamás or apenas by putting it first."
   }
  ],
  "sections": {
   "0": {
    "tables": [
     WORD_ORDER,
     CLEFT
    ]
   },
   "2": {
    "addTables": [
     LO_QUE_ADJ
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
  for (const [slug, g] of Object.entries(C2_UNIT1_LATAM)) {
    const m = out[slug] ?? {};
    const alts: Record<number, string[]> = { ...(g.alts ?? {}) };
    for (const [i, a] of Object.entries(m.alts ?? {})) alts[+i] = [...(alts[+i] ?? []), ...a];
    const sections = { ...(m.sections ?? {}) };
    for (const [si, ca] of Object.entries(g.checkAlts ?? {})) sections[+si] = { ...sections[+si], checkAlts: { ...ca, ...(sections[+si]?.checkAlts ?? {}) } };
    out[slug] = { ...m, alts, ...(Object.keys(sections).length ? { sections } : {}) };
  }
  return out;
}

export const C2_UNIT1_PATCHES: Record<string, LessonPatch> = withLatam(merge(C2_UNIT1_SWAP, manual));
