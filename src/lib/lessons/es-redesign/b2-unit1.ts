// Synced from cheneygross-afk/lengo:src/lib/lessons/es-redesign/b2-unit1.ts by scripts/sync-content.mjs -- edit it there, not here.
// New course, B2 Unit 1 (the present subjunctive: regular, irregular, after
// wanting and asking): content fixes from Claude's audit in Ricardo's format
// (Claude Feedback/Spanish (new course)/B2 Upper Intermediate/Unit 01). Only
// content changes here: what is taught, asked and accepted. The answer
// checker and the rubric are untouched.
//
// Lessons built on B2 Unit 2's triggers (emotion, doubt, es posible que)
// moved there (es-redesign-units.json): the emotion words, creo que / no creo
// que, sé que / me alegro de que, your reactions, the trigger round and
// correction, hecho o deseo, and the emotion vocabulary review. The lessons
// that stay practise the forms with wishes (quiero que, espero que, ojalá),
// the letter to the Three Kings uses ustedes, and each lesson says what it
// practises in its goal.
import type { LessonPatch } from "./patch";
import { B2_UNIT1_LATAM, B2_UNIT1_SWAP } from "./b2-unit1-latam";

const manual: Record<string, LessonPatch> = {
  "present-subjunctive-formation-1": {
    "goal": "form the present subjunctive of regular, stem-changing and irregular verbs, and use it after quiero que, espero que and ojalá.",
    "parts": [
      {
        "goal": "form the present subjunctive of regular verbs from the yo form: hablo → hable, como → coma, tengo → tenga, and use it after quiero que."
      },
      {
        "goal": "form the subjunctive of stem-changing verbs (quiera, vuelva, pida) and the six irregulars: sea, esté, vaya, sepa, dé, haya."
      }
    ]
  },
  "present-subjunctive-formation-1-part-2": {
    "goal": "practice regular, stem-changing and irregular subjunctive forms in new sentences: espero que vuelva, ojalá haya tiempo."
  },
  "b1d-patron-subjuntivo-ar": {
    "goal": "form the subjunctive of -ar verbs (trabaje, llames, cantemos) after quiero que and espero que."
  },
  "b1d-pares-indicativo-subjuntivo": {
    "goal": "tell habla from hable and come from coma, and choose the indicative for facts and the subjunctive after quiero que."
  },
  "b1r-transform-indicative-subjunctive": {
    "goal": "turn indicative forms into the subjunctive in three steps, with the spelling changes: busque, llegue, empiece, escoja."
  },
  "b1d-circuito-irregulares-seis": {
    "goal": "use the six irregular subjunctives in wishes: sea, esté, vaya, sepa, dé, haya."
  },
  "b1d-cadena-persona-subjuntivo": {
    "goal": "change the person in a wish and keep the subjunctive: espero que tú vengas, que ella venga, que ustedes vengan."
  },
  "b1d-rep-formacion-yo-raiz": {
    "goal": "build the subjunctive from the yo form, also for salgo, conozco, digo and traigo: salgas, conozcas, digamos, traigas."
  },
  "b1d-rep-formacion-irregulares-seis": {
    "goal": "choose dé, esté, haya, vaya, sepa or sea fast, after quiero que, espero que and ojalá."
  },
  "b1-common-words-crime": {
    "goal": "use words for crime and danger: el arma, el ataque, la amenaza, la víctima, el golpe, la trampa.",
    "parts": [
      {
        "goal": "use words for crime and weapons, attacks and threats: el arma, la bala, el ataque, la amenaza, la víctima."
      },
      {
        "goal": "use golpe, pelea, trampa and mentira, and turn verbs into nouns: robar → el robo, amenazar → la amenaza."
      }
    ]
  },
  "b1-common-words-crime-part-2": {
    "goal": "use the crime and danger words again in new sentences: el arma, la víctima, el robo, de golpe."
  },
  "b1r-mission-childs-wish-list": {
    "goal": "write a letter to the Three Kings with quiero que, les pido que, espero que and ojalá: quiero que me traigan una bici.",
    "summary": "Ayuda a un niño a escribir su carta: quiero que me traigan…, espero que…, ojalá…"
  },
  "b1d-dictado-deseos-familia": {
    "goal": "write family wishes exactly as you hear them, with the pronoun before the subjunctive: Mi tío quiere que lo llamemos."
  },
  "b1d-patron-subjuntivo-er-ir": {
    "goal": "form the subjunctive of -er and -ir verbs from the yo form: coma, vivas, pongas, conozcan."
  },
  "b1d-rep-deseo-consejos-amiga": {
    "goal": "give advice with recomendar, aconsejar, sugerir, pedir and prohibir + que + subjunctive: te aconsejo que descanses."
  }
};

function merge(a: Record<string, LessonPatch>, b: Record<string, LessonPatch>): Record<string, LessonPatch> {
  const out: Record<string, LessonPatch> = { ...a };
  for (const [slug, p] of Object.entries(b)) {
    const m = out[slug] ?? {};
    out[slug] = {
      ...m,
      ...p,
      sections: { ...(m.sections ?? {}), ...(p.sections ?? {}) },
      exercises: { ...(m.exercises ?? {}), ...(p.exercises ?? {}), replace: { ...(m.exercises?.replace ?? {}), ...(p.exercises?.replace ?? {}) } },
    };
  }
  return out;
}

function withLatam(p: Record<string, LessonPatch>): Record<string, LessonPatch> {
  const out: Record<string, LessonPatch> = { ...p };
  for (const [slug, g] of Object.entries(B2_UNIT1_LATAM)) {
    const m = out[slug] ?? {};
    const alts: Record<number, string[]> = { ...(g.alts ?? {}) };
    for (const [i, a] of Object.entries(m.alts ?? {})) alts[+i] = [...(alts[+i] ?? []), ...a];
    const sections = { ...(m.sections ?? {}) };
    for (const [si, ca] of Object.entries(g.checkAlts ?? {})) sections[+si] = { ...sections[+si], checkAlts: { ...ca, ...(sections[+si]?.checkAlts ?? {}) } };
    out[slug] = { ...m, alts, ...(Object.keys(sections).length ? { sections } : {}) };
  }
  return out;
}

export const B2_UNIT1_PATCHES: Record<string, LessonPatch> = withLatam(merge(B2_UNIT1_SWAP, manual));
