// Synced from cheneygross-afk/lengo:src/lib/lessons/es-redesign/c1-unit7.ts by scripts/sync-content.mjs -- edit it there, not here.
// New course, C1 Unit 7 (ser and estar with a change of meaning; hay or está):
// content fixes from Claude's audit in Ricardo's format (Claude Feedback/Spanish
// (new course)/C1 Advanced/Unit 07). Only content changes here: what is taught,
// asked and accepted. The answer checker and the rubric are untouched.
// 
// Each lesson gets its own goal and the right table; estar negro and no estar muy
// católico (Spain colloquialisms, and ser negro read as skin colour) give way to
// ser vivo / estar vivo and orgulloso; vosotros items and notes use ustedes.
import type { LessonPatch } from "./patch";
import { CONDITIONAL, ESTAR_SER_PARTICIPLE, HABER_ESTAR, PLUPERFECT, PRESENT_PERFECT, REPORTED_SPEECH, SER_ESTAR_ADVANCED, SER_OR_ESTAR, SI_UNREAL } from "./concept-tables";
import { C1_UNIT7_LATAM, C1_UNIT7_SWAP } from "./c1-unit7-latam";

const manual: Record<string, LessonPatch> = {
 "ser-estar-haber-nuanced-1": {
  "goal": "use ser, estar and hay with their finer meanings: es listo / está listo, hay un parque / el parque está, la fiesta es en…",
  "sections": {
   "2": {
    "addTables": [
     HABER_ESTAR
    ]
   }
  }
 },
 "b2d-pares-ser-estar-adjetivos": {
  "goal": "tell apart pairs that change meaning: es aburrido / está aburrido, es rico / está rico, es verde / está verde."
 },
 "b2r-tema-secretos-familia": {
  "goal": "tell a family secret you found out: lo que había pasado, me contó que…, me sorprendió que…",
  "sections": {
   "0": {
    "tables": [
     PLUPERFECT,
     REPORTED_SPEECH
    ]
   }
  }
 },
 "b2d-elige-ser-eventos": {
  "goal": "say where an event takes place with ser and where a thing or person is with estar: la fiesta es en mi casa, la torta está en el refrigerador.",
  "sections": {
   "0": {
    "tables": [
     SER_OR_ESTAR
    ]
   }
  }
 },
 "ser-estar-haber-nuanced-2": {
  "goal": "use 50 words about the mind and personality with ser, estar and hay: es tímido, está ansioso, hay un patrón."
 },
 "b2r-contrast-meaning-adjectives": {
  "goal": "use pairs whose meaning changes completely: es listo / está listo, es vivo / está vivo, está verde."
 },
 "b2d-rep-ser-estar-elige": {
  "goal": "review: choose ser + participle for the action and estar + participle for the result.",
  "sections": {
   "0": {
    "tables": [
     ESTAR_SER_PARTICIPLE
    ]
   }
  }
 },
 "b2d-rep-si-habla-de-ti": {
  "goal": "review: imagine your life if things were different: si no hubiera celulares, hablaríamos más.",
  "sections": {
   "0": {
    "tables": [
     SI_UNREAL
    ]
   }
  }
 },
 "b2r-error-hunt-ser-estar-haber": {
  "goal": "find and fix advanced mistakes: la reunión está en…, hay el banco, habían muchos, estoy aburrido or soy aburrido.",
  "sections": {
   "0": {
    "addTables": [
     HABER_ESTAR
    ]
   }
  }
 },
 "b2d-corrige-ser-estar-haber": {
  "goal": "fix a hotel review: situate with estar, present with hay, describe and judge with ser.",
  "sections": {
   "0": {
    "addTables": [
     HABER_ESTAR
    ]
   }
  }
 },
 "b2r-tema-diplomacia": {
  "goal": "negotiate politely: estaríamos dispuestos, siempre que…, a menos que…, and report what the other side said.",
  "sections": {
   "0": {
    "tables": [
     CONDITIONAL,
     REPORTED_SPEECH
    ]
   }
  }
 },
 "b2d-habla-de-ti-caracter-estado": {
  "goal": "describe your character with ser, how you are today with estar, and what there is around you with hay.",
  "sections": {
   "0": {
    "addTables": [
     HABER_ESTAR
    ]
   }
  }
 },
 "ser-estar-haber-limits-part-1-1": {
  "goal": "place events with ser and objects and places with estar, even when the event lasts or the place feels permanent.",
  "sections": {
   "0": {
    "addTables": [
     SER_OR_ESTAR
    ]
   }
  }
 },
 "ser-estar-haber-limits-part-1-1-part-2": {
  "goal": "practise ser for events and estar for places in new sentences: la manifestación será frente al ayuntamiento.",
  "sections": {
   "0": {
    "addTables": [
     SER_OR_ESTAR
    ]
   }
  }
 },
 "b1d-patron-he-has-ha": {
  "goal": "build the present perfect with every person: he, has, ha, hemos, han + the same -ado / -ido.",
  "sections": {
   "0": {
    "tables": [
     PRESENT_PERFECT
    ]
   }
  }
 },
 "present-perfect-2": {
  "goal": "use 50 words for life experiences and firsts with the present perfect: me he atrevido a…, todavía no he…",
  "sections": {
   "0": {
    "tables": [
     PRESENT_PERFECT
    ]
   }
  }
 },
 "b2-vocabulary-practice-6": {
  "goal": "use 50 words about journalism and the media, and their word families."
 },
 "b2-vocabulary-practice-6-part-2": {
  "goal": "practise the journalism and media words in new sentences."
 },
 "b2r-mission-character-sketch": {
  "goal": "write a character profile for a novel: who she is (ser), how and where she is (estar), and what there is in her life (hay).",
  "sections": {
   "0": {
    "addTables": [
     SER_ESTAR_ADVANCED,
     HABER_ESTAR
    ]
   }
  }
 },
 "c1r-mission-real-estate-listing": {
  "goal": "write a precise property listing: what it is, how it is, where it is, what it has and what there is nearby.",
  "sections": {
   "0": {
    "addTables": [
     HABER_ESTAR
    ]
   }
  }
 },
 "c1r-mission-real-estate-listing-part-2": {
  "goal": "answer and ask about a listing: está amueblado, es luminoso, ¿hay lugar de estacionamiento?",
  "sections": {
   "0": {
    "addTables": [
     HABER_ESTAR
    ]
   }
  }
 },
 "b2d-cuento-psicologo": {
  "goal": "complete a story at the psychologist's with ser, estar and hay for feelings, places and times.",
  "sections": {
   "0": {
    "addTables": [
     SER_ESTAR_ADVANCED
    ]
   }
  }
 },
 "b2d-circuito-hay-esta": {
  "goal": "introduce something new with hay and place something you both know with estar: hay un banco / el banco está.",
  "sections": {
   "0": {
    "addTables": [
     HABER_ESTAR
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
  for (const [slug, g] of Object.entries(C1_UNIT7_LATAM)) {
    const m = out[slug] ?? {};
    const alts: Record<number, string[]> = { ...(g.alts ?? {}) };
    for (const [i, a] of Object.entries(m.alts ?? {})) alts[+i] = [...(alts[+i] ?? []), ...a];
    const sections = { ...(m.sections ?? {}) };
    for (const [si, ca] of Object.entries(g.checkAlts ?? {})) sections[+si] = { ...sections[+si], checkAlts: { ...ca, ...(sections[+si]?.checkAlts ?? {}) } };
    out[slug] = { ...m, alts, ...(Object.keys(sections).length ? { sections } : {}) };
  }
  return out;
}

export const C1_UNIT7_PATCHES: Record<string, LessonPatch> = withLatam(merge(C1_UNIT7_SWAP, manual));
