// Synced from cheneygross-afk/lengo:src/lib/lessons/es-redesign/c1-unit6.ts by scripts/sync-content.mjs -- edit it there, not here.
// New course, C1 Unit 6 (reported questions, orders and time words; was built;
// is closed vs. was closed): content fixes from Claude's audit in Ricardo's
// format (Claude Feedback/Spanish (new course)/C1 Advanced/Unit 06). Only content
// changes here: what is taught, asked and accepted. The answer checker and the
// rubric are untouched.
// 
// Each lesson gets its own goal and the right table (several showed the "was
// built" table on se lessons, or a table from another unit); vosotros notes and
// coger answers are reworded.
import type { LessonPatch } from "./patch";
import { CONDITIONAL, ESTAR_SER_PARTICIPLE, PASSIVE_SER, POSSESSIVE_PRONOUNS, REPORTED_ORDERS, SEQUENCE, SE_ACCIDENTAL, SE_PASSIVE, SI_PAST_UNREAL, SI_UNREAL, SUBJ_IMPERSONAL, USTED_COMMANDS } from "./concept-tables";
import { C1_UNIT6_LATAM, C1_UNIT6_SWAP } from "./c1-unit6-latam";

const manual: Record<string, LessonPatch> = {
 "reported-speech-drill-2": {
  "goal": "pass on a question with si or with its question word, and move a wish form back: dijo que esperaba que vinieras."
 },
 "reported-speech-drill-3-part-2": {
  "goal": "report what people said, asked and ordered, changing the tense, the pronouns and the time and place words.",
  "sections": {
   "0": {
    "addTables": [
     REPORTED_ORDERS
    ]
   }
  }
 },
 "b2d-corrige-indirecto-mandatos": {
  "goal": "pass on an order with que + the past wish form: me pidió que la llamara."
 },
 "b2d-corrige-indirecto-mandatos-part-2": {
  "goal": "fix reported orders and questions: me pidió que no moviéramos el carro, me preguntó dónde vivía.",
  "sections": {
   "0": {
    "addTables": [
     REPORTED_ORDERS
    ]
   }
  }
 },
 "b2d-preguntas-indirectas": {
  "goal": "answer \"what did they ask you?\" with me preguntó si… and me preguntó dónde / cuándo / cuánto…"
 },
 "b2d-corrige-estilo-indirecto": {
  "goal": "fix a summary of a conversation: tenses that don't move back, wrong time words and que si."
 },
 "b2d-rep-estilo-indirecto-corrige": {
  "goal": "review: correct the summary of a phone call, with tenses, time words and orders."
 },
 "b2d-rep-estilo-indirecto-preguntas": {
  "goal": "review: report yes-no questions with si and other questions with their question word and accent."
 },
 "b2r-mission-gossip": {
  "goal": "pass on gossip to friends without mixing up who said what: su hermana, que la llamara, al día siguiente.",
  "sections": {
   "0": {
    "addTables": [
     REPORTED_ORDERS
    ]
   }
  }
 },
 "c1r-error-hunt-se-agreement": {
  "goal": "find and fix se agreement mistakes: se venden departamentos, but se busca a los testigos.",
  "sections": {
   "0": {
    "tables": [
     SE_PASSIVE
    ]
   }
  }
 },
 "c1r-error-hunt-se-agreement-part-2": {
  "goal": "practise se + the verb that matches the thing: se venden carros, se necesita un mesero.",
  "sections": {
   "0": {
    "addTables": [
     SE_PASSIVE
    ]
   }
  }
 },
 "c1r-contrast-ser-estar-participle-c1": {
  "goal": "tell the action from the result: fue reformado (someone did it) vs. está reformado (how it is now).",
  "sections": {
   "0": {
    "tables": [
     ESTAR_SER_PARTICIPLE,
     PASSIVE_SER
    ]
   }
  }
 },
 "c1r-contrast-ser-estar-participle-c1-part-2": {
  "goal": "choose ser or estar + participle in news and reports: fue inaugurado, está cerrado.",
  "sections": {
   "0": {
    "addTables": [
     ESTAR_SER_PARTICIPLE
    ]
   }
  }
 },
 "c1r-contrast-se-functions": {
  "goal": "tell the seven jobs of se apart: se lava, se abrazan, se venden, se vive bien, se lo di, se me olvidó.",
  "sections": {
   "0": {
    "tables": [
     SE_PASSIVE,
     SE_ACCIDENTAL
    ]
   }
  }
 },
 "c1r-contrast-se-functions-part-2": {
  "goal": "practise each use of se in new sentences, with the verb matching the right word.",
  "sections": {
   "0": {
    "addTables": [
     SE_PASSIVE
    ]
   }
  }
 },
 "c1r-extra-ser-estar-passive-result": {
  "goal": "say \"the door was closed\" both ways: fue cerrada (an action) or estaba cerrada (what you found)."
 },
 "passive-voice-se-1": {
  "goal": "say what was done without saying who: fue construido, se construyó, se vive bien aquí.",
  "sections": {
   "0": {
    "tables": [
     PASSIVE_SER
    ]
   },
   "1": {
    "addTables": [
     SE_PASSIVE
    ]
   }
  }
 },
 "passive-voice-se-2": {
  "goal": "use 50 business words in notices and reports with se and ser + participle: se buscan vendedores."
 },
 "b1d-cadena-ser-a-se": {
  "goal": "turn newspaper Spanish into everyday Spanish: fue aprobada la ley → se aprobó la ley.",
  "sections": {
   "0": {
    "tables": [
     PASSIVE_SER,
     SE_PASSIVE
    ]
   }
  }
 },
 "b1r-transform-active-passive-se": {
  "goal": "tell one piece of news three ways: la policía detuvo…, fueron detenidos…, se detuvo a…",
  "sections": {
   "1": {
    "addTables": [
     PASSIVE_SER
    ]
   }
  }
 },
 "b2-vocabulary-practice-5": {
  "goal": "use 50 words about regrets and life choices, like arrepentirse de and atreverse a."
 },
 "b2-vocabulary-practice-5-part-2": {
  "goal": "practise the regrets and life-choices words in new sentences."
 },
 "regional-lexical-variation-1": {
  "goal": "understand why carro, coche and auto are all correct, and swap words between countries without changing the grammar."
 },
 "regional-lexical-variation-1-part-2": {
  "goal": "swap everyday words from one country to another: el móvil → el celular, aparcar → estacionar."
 },
 "b2d-rep-si-dictado": {
  "goal": "review: write down three kinds of \"if\" sentences you hear: si llueve, si lloviera, si hubiera llovido.",
  "sections": {
   "1": {
    "addTables": [
     SI_UNREAL,
     SI_PAST_UNREAL
    ]
   }
  }
 },
 "c1r-mission-market-shopping": {
  "goal": "shop for fruit and vegetables in Madrid, Mexico City and Santiago, with each country's words."
 },
 "c1r-mission-market-shopping-part-2": {
  "goal": "ask for prices and amounts at a market stall in three countries: ¿a cómo está el kilo?"
 },
 "b2d-rep-imperfecto-corrige": {
  "goal": "review: fix a letter where the wish form doesn't move to the past: querían que trabajara.",
  "sections": {
   "0": {
    "addTables": [
     SEQUENCE
    ]
   }
  }
 },
 "b2d-rep-imperfecto-secuencia": {
  "goal": "review: move sentences to the past, changing the wish form too: nos dijo que apagáramos los celulares.",
  "sections": {
   "0": {
    "addTables": [
     SEQUENCE
    ]
   }
  }
 },
 "passive-voice-possessive-pronouns-drill-1": {
  "goal": "use ser + participle + por, and se, with the participle matching: las entradas fueron compradas.",
  "sections": {
   "0": {
    "tables": [
     PASSIVE_SER
    ]
   },
   "1": {
    "addTables": [
     SE_PASSIVE
    ]
   }
  }
 },
 "passive-voice-possessive-pronouns-drill-1-part-2": {
  "goal": "practise both passives in new sentences: los cuadros fueron robados, se venden departamentos.",
  "sections": {
   "0": {
    "addTables": [
     PASSIVE_SER
    ]
   }
  }
 },
 "passive-voice-possessive-pronouns-drill-2": {
  "goal": "tell se venden (things) from se vive (people in general), and replace a noun with el mío, la tuya.",
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
 "passive-voice-possessive-pronouns-drill-2-part-2": {
  "goal": "practise se with the right verb form and mío, tuyo, nuestro in new sentences.",
  "sections": {
   "0": {
    "addTables": [
     POSSESSIVE_PRONOUNS
    ]
   }
  }
 },
 "passive-voice-possessive-pronouns-drill-3": {
  "goal": "use un amigo mío vs. mi amigo, and mix passives with mine and yours: fue hecha por una tía nuestra.",
  "sections": {
   "2": {
    "addTables": [
     PASSIVE_SER
    ]
   }
  }
 },
 "b1r-tema-activismo-vecinal": {
  "goal": "save the neighborhood: demand with es urgente que, call people to act with firmen, and report with se han recogido.",
  "sections": {
   "0": {
    "tables": [
     SUBJ_IMPERSONAL
    ]
   },
   "1": {
    "addTables": [
     USTED_COMMANDS
    ]
   },
   "2": {
    "addTables": [
     PASSIVE_SER
    ]
   }
  }
 },
 "b1r-tema-voluntariado-animales": {
  "goal": "help at an animal shelter: buscamos a alguien que pueda…, instructions, and fue construido por los vecinos.",
  "sections": {
   "0": {
    "tables": [
     USTED_COMMANDS,
     PASSIVE_SER
    ]
   }
  }
 },
 "b1r-tema-teatro": {
  "goal": "save the play: suggest fixes with sería mejor and ¿podrías…?, and say what's needed with se necesitan.",
  "sections": {
   "0": {
    "tables": [
     CONDITIONAL,
     SE_PASSIVE
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
  for (const [slug, g] of Object.entries(C1_UNIT6_LATAM)) {
    const m = out[slug] ?? {};
    const alts: Record<number, string[]> = { ...(g.alts ?? {}) };
    for (const [i, a] of Object.entries(m.alts ?? {})) alts[+i] = [...(alts[+i] ?? []), ...a];
    const sections = { ...(m.sections ?? {}) };
    for (const [si, ca] of Object.entries(g.checkAlts ?? {})) sections[+si] = { ...sections[+si], checkAlts: { ...ca, ...(sections[+si]?.checkAlts ?? {}) } };
    out[slug] = { ...m, alts, ...(Object.keys(sections).length ? { sections } : {}) };
  }
  return out;
}

export const C1_UNIT6_PATCHES: Record<string, LessonPatch> = withLatam(merge(C1_UNIT6_SWAP, manual));
