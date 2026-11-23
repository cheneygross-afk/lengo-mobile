// Synced from cheneygross-afk/lengo:src/lib/lessons/es-redesign/b2-unit2.ts by scripts/sync-content.mjs -- edit it there, not here.
// New course, B2 Unit 2 (the subjunctive after feelings, after doubt, and
// after es importante que and ojalá): content fixes from Claude's audit in
// Ricardo's format (Claude Feedback/Spanish (new course)/B2 Upper
// Intermediate/Unit 02). Only content changes here: what is taught, asked and
// accepted. The answer checker and the rubric are untouched.
//
// The vosotros drills get an ustedes answer (vosotros still accepted), so
// Latin American learners get those questions too; the writing tasks and the
// advice column no longer use vosotros. Items with a negative command (no te
// desanimes) or the perfect subjunctive (te la hayan robado) are replaced.
// Latin American words are the main answers, and each lesson says what it
// practises in its goal.
import type { LessonPatch } from "./patch";
import { B2_UNIT2_LATAM, B2_UNIT2_SWAP } from "./b2-unit2-latam";

const manual: Record<string, LessonPatch> = {
  "subjunctive-wishes-doubt-emotion-1": {
    "goal": "tell a fact from an attitude: use the subjunctive after doubt (dudo que, no creo que) and feelings (me alegro de que), and the indicative after creo que."
  },
  "subjunctive-wishes-doubt-emotion-1-part-2": {
    "goal": "practice doubt and emotion triggers in new sentences: temo que te pierdas, dudo que esté, no creo que venga."
  },
  "b1d-circuito-emociones": {
    "goal": "react to what others do with me alegro de que, siento que, me molesta que and tengo miedo de que + subjunctive, and use the infinitive for yourself."
  },
  "subjunctive-wishes-doubt-emotion-2": {
    "goal": "choose the indicative after certainty (es evidente que, está claro que) and the subjunctive after possibility (es posible que, es probable que), with 50 opinion words."
  },
  "present-subjunctive-formation-2": {
    "goal": "use 50 words for emotions and reactions (alegrarse, molestar, emocionarse, la alegría) with que + subjunctive.",
    "summary": "Aprende 50 palabras de emociones y reacciones, las que más llevan subjuntivo: me alegra que, me molesta que.",
    "alts": {
      "14": [
        "Me molesta que mis vecinos pongan la música muy alta en la noche."
      ]
    }
  },
  "b1d-patron-creo-no-creo": {
    "goal": "say the same opinion two ways: creo que es (indicative) and no creo que sea (subjunctive), also with pensar and dudar."
  },
  "b1d-pares-hecho-reaccion": {
    "goal": "tell reporting from reacting: sé que viene, veo que leen (indicative) against me alegro de que venga, qué bien que tengan (subjunctive)."
  },
  "b1d-habla-de-ti-reacciones": {
    "goal": "react to news from friends, family and work: qué pena que no puedan venir, me extraña que no contesten, me hace ilusión que vengan."
  },
  "b1-vocabulary-practice-1": {
    "goal": "review 50 emotion and reaction words: word families (la alegría, alegrarse), verbs with se and verbs like gustar (me preocupa, me molesta)."
  },
  "subjunctive-wishes-doubt-emotion-mastery-check": {
    "goal": "show you can choose subjunctive, indicative or infinitive after wishes, doubt and feelings, in new sentences."
  },
  "b1d-practica-mezclada-deseo-duda": {
    "goal": "mix wishes, doubt and feelings at work: el jefe quiere que entreguemos, dudo que nos dé, me preocupa que no sepan."
  },
  "b1d-cadena-afirmar-negar": {
    "goal": "turn one sentence through four attitudes: creo que sabe, no creo que sepa, dudo que sepa, me extraña que sepa.",
    "alts": {
      "23": [
        "Mi papá cree que manejo bien, pero mi mamá no cree que esté preparada.",
        "Mi papá piensa que manejo bien, pero mi mamá no cree que esté preparada."
      ]
    }
  },
  "b1r-error-hunt-creer-dudar": {
    "goal": "find and fix mood errors after creer, pensar, dudar and no es verdad que: creo que está, no creo que esté, dudo que llegue."
  },
  "b1d-rep-duda-quizas-tal-vez": {
    "goal": "say how sure you are: puede que, es probable que and dudo que + subjunctive; seguro que and a lo mejor + indicative; quizás with both."
  },
  "b1d-rep-duda-creo-no-creo": {
    "goal": "choose fast between creo que es and no creo que sea, pienso que tiene and no pienso que tenga."
  },
  "b1d-rep-duda-corrige": {
    "goal": "fix the mood in a paragraph of opinions: creo que es, no creo que sea, dudo que pase, ¿crees que está?"
  },
  "subjunctive-impersonal-ojala-1": {
    "goal": "use es importante que, es mejor que, es necesario que and ojalá + subjunctive, and the infinitive when it applies to everyone: es importante dormir."
  },
  "b1d-pares-es-verdad-es-posible": {
    "goal": "tell certainty from possibility: es verdad que es (indicative), es posible que sea (subjunctive), and no es verdad que sea."
  },
  "b1d-pares-es-verdad-es-posible-part-2": {
    "goal": "practice es evidente que, está claro que and es posible que in new pairs: es evidente que hay, es posible que haya."
  },
  "b1d-ronda-ojala": {
    "goal": "make quick wishes with ojalá (que) + subjunctive: ojalá que no pierdan el tren, ojalá apruebe, ojalá no llueva."
  },
  "subjunctive-impersonal-ojala-2": {
    "goal": "use 50 nature and environment words in hopes and needs: ojalá que los ríos no estén contaminados, es necesario que reciclemos."
  },
  "b1r-contrast-indicative-subjunctive": {
    "goal": "tell fact from wish or doubt, by ear and in writing: sé que están, creo que tienes against quiero que estén, dudo que tengas."
  },
  "b1d-ronda-disparadores": {
    "goal": "choose in a second whether a sentence start takes indicative, subjunctive or infinitive: sé que, dudo que, me molesta que, espero volver."
  },
  "b1d-corrige-disparadores": {
    "goal": "fix the classic slips in an email: espero que estás, no creo que es, me alegro de que tienes."
  },
  "b1-vocabulary-practice-2": {
    "goal": "review 50 opinion and uncertainty words: en mi opinión, desde mi punto de vista, estar de acuerdo, a lo mejor, quizás."
  },
  "b1-common-words-justice": {
    "goal": "use words for courts and investigations: el juez, el juicio, el testigo, la prueba, el sospechoso, la cárcel."
  },
  "b1r-mission-reacting-to-news": {
    "goal": "react to friends' good and bad news: ¡qué bien que…!, me alegro de que, siento que, and close with a wish: ¡que te mejores!"
  },
  "b1d-dictado-reacciones": {
    "goal": "write long reactions exactly as you hear them, with the pronoun before the subjunctive: me extraña que no lo visiten."
  },
  "b1r-mission-ojala-wishes": {
    "goal": "write goodbye, birthday and get-well messages with ojalá and que + subjunctive: ¡que duermas bien!, ojalá te sientas mejor."
  },
  "b1d-cuento-carta-madre": {
    "goal": "read a mother's goodbye letter and fill in wishes, doubts and feelings: espero que encuentres, no creo que tengas, estoy orgullosa de que seas."
  },
  "b1r-dialogue-advice-column": {
    "goal": "answer letters to an advice column with te recomiendo que, te sugiero que, es mejor que and siento que + subjunctive.",
    "alts": {
      "21": [
        "Siento que estés tan estresada. Te aconsejo que apagues el celular en la noche."
      ]
    }
  },
  "b1d-rep-impersonales-cuento": {
    "goal": "read interview advice and fill it in: es importante que llegues, es mejor que no hables, conviene que apagues el celular."
  },
  "b1r-word-web-emotions": {
    "goal": "say emotions three ways: the state (estoy preocupada), the moment it starts (se enojó, me puse nerviosa) and the cause (me da miedo que)."
  },
  "b1r-dialogue-advice-column-unit-review": {
    "alts": {
      "1": [
        "Mis papás quieren que organice mi habitación.",
        "Mis papás quieren que organice mi cuarto."
      ],
      "3": [
        "Mi hermano está en desacuerdo con mis papás.",
        "Mi hermano no está de acuerdo con mis papás."
      ]
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
      sections: { ...(m.sections ?? {}), ...(p.sections ?? {}) },
      exercises: { ...(m.exercises ?? {}), ...(p.exercises ?? {}), replace: { ...(m.exercises?.replace ?? {}), ...(p.exercises?.replace ?? {}) } },
    };
  }
  return out;
}

function withLatam(p: Record<string, LessonPatch>): Record<string, LessonPatch> {
  const out: Record<string, LessonPatch> = { ...p };
  for (const [slug, g] of Object.entries(B2_UNIT2_LATAM)) {
    const m = out[slug] ?? {};
    const alts: Record<number, string[]> = { ...(g.alts ?? {}) };
    for (const [i, a] of Object.entries(m.alts ?? {})) alts[+i] = [...(alts[+i] ?? []), ...a];
    const sections = { ...(m.sections ?? {}) };
    for (const [si, ca] of Object.entries(g.checkAlts ?? {})) sections[+si] = { ...sections[+si], checkAlts: { ...ca, ...(sections[+si]?.checkAlts ?? {}) } };
    out[slug] = { ...m, alts, ...(Object.keys(sections).length ? { sections } : {}) };
  }
  return out;
}

export const B2_UNIT2_PATCHES: Record<string, LessonPatch> = withLatam(merge(B2_UNIT2_SWAP, manual));
