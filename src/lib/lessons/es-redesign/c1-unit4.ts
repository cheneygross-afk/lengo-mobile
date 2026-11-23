// Synced from cheneygross-afk/lengo:src/lib/lessons/es-redesign/c1-unit4.ts by scripts/sync-content.mjs -- edit it there, not here.
// New course, C1 Unit 4 (linking ideas, would have / if I had, mixed "if"
// sentences): content fixes from Claude's audit in Ricardo's format (Claude
// Feedback/Spanish (new course)/C1 Advanced/Unit 04). Only content changes here:
// what is taught, asked and accepted. The answer checker and the rubric are
// untouched.
// 
// The concert-review mission (emphasis: lo bien que, fronting, cleft sentences)
// moved to C2 Unit 5 and the lesson on a child learning a language (verb pairs
// like ir + -ndo, llegar a + verb, a cleft sentence) to C2 Unit 3
// (es-redesign-units.json). The translation relay asks for a small word + el que
// instead of cuyo, and the AI word web uses the active voice instead of the ser
// passive (C1 Unit 6). Two C1 Unit 3 items with C2 grammar are fixed here too.
import type { LessonPatch } from "./patch";
import { CONNECTORS, SEQUENCE, SI_MIXED, SI_PAST_UNREAL, SUBJ_TIME } from "./concept-tables";
import { C1_UNIT4_LATAM, C1_UNIT4_SWAP } from "./c1-unit4-latam";

const manual: Record<string, LessonPatch> = {
 "advanced-connectors-1-part-2": {
  "goal": "practise sin embargo, aunque, a pesar de, por lo tanto and ya que in quick rounds.",
  "sections": {
   "0": {
    "addTables": [
     CONNECTORS
    ]
   }
  }
 },
 "b2r-tema-lesion-y-vuelta": {
  "goal": "tell an athlete's comeback after an injury with hasta que, en cuanto, antes de que and the verbs of change."
 },
 "b2d-circuito-causa-consecuencia": {
  "goal": "put the reason first with ya que, puesto que, dado que, and the result after with por lo tanto, así que, de modo que."
 },
 "advanced-connectors-2": {
  "goal": "learn 50 words for debating (tesis, refutar, matizar) and link your arguments with the connectors."
 },
 "b2r-build-argumentative-paragraph": {
  "goal": "build an opinion paragraph in four steps: a reason (dado que), a contrast (sin embargo), more (además) and a result (por lo tanto)."
 },
 "b2r-build-argumentative-paragraph-part-2": {
  "goal": "put the four steps of an opinion paragraph in order and choose the connector for each.",
  "sections": {
   "0": {
    "addTables": [
     CONNECTORS
    ]
   }
  }
 },
 "conditional-perfect-pluperfect-subjunctive-1": {
  "goal": "say what would have happened if things had been different: si hubiera estudiado, habría aprobado; and ojalá hubiera…"
 },
 "b2d-patron-si-hubiera-habria": {
  "goal": "drill one pattern with many verbs: si hubiera sabido, habría venido."
 },
 "b2d-patron-si-hubiera-habria-part-2": {
  "goal": "use si hubiera… habría… in new sentences about missed chances.",
  "sections": {
   "0": {
    "addTables": [
     SI_PAST_UNREAL
    ]
   }
  }
 },
 "b2d-rep-si-mixtas": {
  "goal": "tell the three kinds of \"if\": real (si llueve, me quedo), unreal now (si lloviera) and past (si hubiera llovido)."
 },
 "b2d-rep-si-mixtas-part-2": {
  "goal": "choose and explain the right kind of \"if\" sentence in new situations.",
  "sections": {
   "0": {
    "addTables": [
     SI_PAST_UNREAL
    ]
   }
  }
 },
 "b2d-pares-si-tuviera-hubiera-tenido": {
  "goal": "tell si tuviera (now) from si hubiera tenido (before) in pairs."
 },
 "b2d-circuito-participios-habria": {
  "goal": "use the irregular participles in habría hecho, habría dicho, habría puesto, habría vuelto."
 },
 "b2d-pares-mixtas": {
  "goal": "mix past and present in \"if\" sentences: si hubiera estudiado, ahora tendría trabajo."
 },
 "b2d-pares-mixtas-part-2": {
  "goal": "build mixed \"if\" sentences both ways: si fuera más paciente, no habría discutido.",
  "sections": {
   "0": {
    "addTables": [
     SI_MIXED
    ]
   }
  }
 },
 "c1r-contrast-aspect-subjunctive": {
  "goal": "choose que venga or que haya venido, and que viniera or que hubiera venido, by when it happens."
 },
 "c1r-contrast-aspect-subjunctive-part-2": {
  "goal": "practise the four wish-form tenses after hope, doubt and joy in new sentences.",
  "sections": {
   "0": {
    "addTables": [
     SEQUENCE
    ]
   }
  }
 },
 "b2-vocabulary-practice-4": {
  "goal": "learn 50 words about technology and AI, and the word parts -izar, -ización, -ble that build them."
 },
 "b2-vocabulary-practice-4-part-2": {
  "goal": "use the technology and AI words in sentences."
 },
 "b2-vocabulary-practice-8": {
  "goal": "learn 50 words about personal growth and change, and how they are built."
 },
 "b2-vocabulary-practice-8-part-2": {
  "goal": "use the personal growth words in sentences."
 },
 "b2r-word-web-technology-ai": {
  "goal": "talk about algorithms, data and automation, and guess about the future: si las máquinas pensaran…"
 },
 "b2r-word-web-technology-ai-part-2": {
  "goal": "use the technology words in new sentences about what AI does and could do."
 },
 "b2r-dialogue-regrets": {
  "goal": "talk with a friend about past decisions: si hubiera aceptado aquel trabajo…, ojalá hubiera…",
  "sections": {
   "0": {
    "addTables": [
     SI_PAST_UNREAL
    ]
   }
  }
 },
 "b2r-word-web-life-decisions": {
  "goal": "learn the words of big decisions (arriesgarse, arrepentirse de, dar el paso) and say what you regret.",
  "sections": {
   "1": {
    "addTables": [
     SI_PAST_UNREAL
    ]
   }
  }
 },
 "b2r-word-web-life-decisions-part-2": {
  "goal": "use the decision words with si hubiera… and ojalá hubiera… in new sentences.",
  "sections": {
   "0": {
    "addTables": [
     SI_MIXED
    ]
   }
  }
 },
 "b2r-tema-dos-caminos": {
  "goal": "weigh a safe job against a risky dream with advice (yo que tú) and what would have happened."
 },
 "b2d-dictado-irreal-pasado": {
  "goal": "hear and write regrets and reproaches: deberías haber llamado, si me lo hubieras dicho…",
  "sections": {
   "1": {
    "addTables": [
     SI_PAST_UNREAL
    ]
   }
  }
 },
 "b2d-rep-mezcla-traduccion": {
  "goal": "translate mixed sentences without copying English: con la que trabajo, cuando llegues, como si fuera.",
  "sections": {
   "0": {
    "addTables": [
     SUBJ_TIME
    ]
   }
  }
 },
 "b2d-rep-imperfecto-cuento": {
  "goal": "complete a story about a first day at work, matching the tenses: me pidieron que firmara, no había nadie que supiera.",
  "sections": {
   "0": {
    "addTables": [
     SEQUENCE
    ]
   }
  }
 },
 "advanced-connectors-1": {
  "parts": [
   {
    "goal": "tell sin embargo from aunque and a pesar de: Llueve; sin embargo, salgo / Aunque llueve, salgo."
   },
   {
    "goal": "link a reason and a result: ya que, puesto que, por lo tanto, así que, además."
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
  for (const [slug, g] of Object.entries(C1_UNIT4_LATAM)) {
    const m = out[slug] ?? {};
    const alts: Record<number, string[]> = { ...(g.alts ?? {}) };
    for (const [i, a] of Object.entries(m.alts ?? {})) alts[+i] = [...(alts[+i] ?? []), ...a];
    const sections = { ...(m.sections ?? {}) };
    for (const [si, ca] of Object.entries(g.checkAlts ?? {})) sections[+si] = { ...sections[+si], checkAlts: { ...ca, ...(sections[+si]?.checkAlts ?? {}) } };
    out[slug] = { ...m, alts, ...(Object.keys(sections).length ? { sections } : {}) };
  }
  return out;
}

export const C1_UNIT4_PATCHES: Record<string, LessonPatch> = withLatam(merge(C1_UNIT4_SWAP, manual));
