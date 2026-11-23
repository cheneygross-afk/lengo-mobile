// Synced from cheneygross-afk/lengo:src/lib/lessons/es-redesign/b2-unit5.ts by scripts/sync-content.mjs -- edit it there, not here.
// New course, B2 Unit 5 (real if sentences, the pluperfect, the future
// perfect): content fixes from Claude's audit in Ricardo's format (Claude
// Feedback/Spanish (new course)/B2 Upper Intermediate/Unit 05). Only content
// changes here: what is taught, asked and accepted. The answer checker and
// the rubric are untouched.
//
// Lessons built on later grammar moved (es-redesign-units.json): the animal
// shelter and the theatre reviews (the passive, se and relatives with the
// subjunctive) to C1 Unit 6, and a father's memory (reported speech) to C1
// Unit 3. Lessons that showed another concept's table now show their own,
// and each lesson says what it practises in its goal.
import type { LessonPatch } from "./patch";
import { PARTICIPLES, PRESENT_PERFECT, SI_REAL, SUBJ_REGULAR } from "./concept-tables";
import { B2_UNIT5_LATAM, B2_UNIT5_SWAP } from "./b2-unit5-latam";

const manual: Record<string, LessonPatch> = {
  "b1d-patron-habia-participio": {
    "summary": "Había, habías, había, habíamos, habían + participio: el pasado del pasado en un marco fijo.",
    "goal": "form the pluperfect in every person in a fixed frame: había comido, habías salido, habíamos terminado, habían ido."
  },
  "b1r-tema-decisiones-dificiles": {
    "sections": {
      "0": {
        "checkAlts": {
          "1": [
            "Es mejor que descanséis un rato."
          ]
        }
      }
    },
    "goal": "talk through a hard choice in the mountains: si seguimos, llegaremos de noche; yo que tú, volvería; es mejor que bajemos."
  },
  "b1d-rep-formacion-conjugacion-completa": {
    "sections": {
      "1": {
        "checkAlts": {
          "0": [
            "salgáis"
          ]
        }
      },
      "0": {
        "tables": [
          SUBJ_REGULAR
        ]
      }
    },
    "goal": "review the present subjunctive in every person from the yo form: hable, coma, salga, conozca, quepa."
  },
  "b1r-tema-rechazo": {
    "goal": "give encouragement after a rejection: es una pena que + subjunctive, yo que tú + conditional, and si + present for the next try."
  },
  "b1r-chain-of-conditions": {
    "goal": "build chains of real conditions: si llueve, nos quedamos en casa; si nos quedamos en casa, veremos una película."
  },
  "b1d-elige-explica-si": {
    "goal": "choose the tenses after si and in the result, and say why: si + present with the future, the present or a command."
  },
  "b1d-habla-de-ti-planes-condiciones": {
    "goal": "tell your plans for the weekend and the year, each with a condition: si ahorro lo suficiente, me compraré un carro."
  },
  "b1d-cadena-condicion-resultado": {
    "goal": "turn each result into the next condition: si estudio, apruebo; si apruebo, me gradúo; si me gradúo, buscaré trabajo."
  },
  "b1d-rep-perfecto-participios-ronda": {
    "goal": "use regular and irregular participles in the present perfect and pluperfect: abierto, dicho, hecho, puesto, roto, vuelto.",
    "sections": {
      "0": {
        "tables": [
          PARTICIPLES
        ]
      }
    }
  },
  "b1d-rep-perfecto-pluscuam-mezcla": {
    "goal": "choose between he hecho, hice and había hecho from the time word and the order of the actions."
  },
  "past-perfect-1": {
    "goal": "say what had already happened before another past moment: cuando llegué, el tren ya había salido."
  },
  "b1d-linea-tiempo-antes-despues": {
    "goal": "put two past actions in order: the first in the pluperfect, the second in the preterite."
  },
  "b1d-circuito-tres-pasados": {
    "goal": "choose between llegué, llegaba and había llegado in sentences that force the choice."
  },
  "b1g-future-perfect": {
    "goal": "say what will have happened by a future moment (para las ocho habré terminado) and guess what has happened (se habrá dormido)."
  },
  "b1d-rep-perfecto-corrige": {
    "goal": "fix mixes of the present perfect and the preterite from the time word: hoy he comprado, ayer vi, en 2019 viví.",
    "sections": {
      "0": {
        "tables": [
          PRESENT_PERFECT
        ]
      }
    }
  },
  "b1-vocabulary-practice-5": {
    "goal": "use 50 money and finance words: el ahorro, el préstamo, la deuda, ahorrar, gastar, invertir."
  },
  "b1-common-words-society": {
    "goal": "use the words of political and social news: el ministro, el líder, el movimiento, la presión, el gobierno."
  },
  "b1-vocabulary-practice-6": {
    "goal": "use 50 education words: la beca, matricularse, el plagio, el título, aprobar, la maestría."
  },
  "b1-common-words-work-ideas": {
    "goal": "use common words for work, ideas and shows: el nivel, el proceso, la teoría, la imagen, la obra, el aprendizaje."
  },
  "b1r-mission-if-then-plans": {
    "goal": "plan a weekend that depends on the weather, money and friends: si + present, then the future or a command."
  },
  "b1d-rep-ojala-deseos": {
    "goal": "listen and write wishes with ojalá + subjunctive: ojalá no haya mucho tráfico, ojalá que te guste."
  },
  "b1r-dialogue-family-debate": {
    "goal": "take part in a family debate about the holidays: creo que + indicative, no creo que, quiero que and me molesta que + subjunctive."
  },
  "b1r-story-past-before-past": {
    "goal": "read a story told out of order and work out what had happened before what, with ya and todavía no."
  },
  "b1d-rep-pluscuamperfecto-dictado": {
    "goal": "listen and write first experiences with the pluperfect: nunca había visto el mar, nunca habían tocado un caballo."
  },
  "b1d-rep-mezcla-dictado": {
    "goal": "listen and write sentences that mix the intermediate topics: si + present, the past tenses, relatives and commands."
  },
  "b1r-tema-reunion-familiar": {
    "goal": "tell the story of a family reunion with the three pasts and the pluperfect, and wish things with espero que + subjunctive."
  },
  "b1r-tema-aficiones": {
    "goal": "talk about a hobby: how it started (empecé), what has changed (he hecho), what you had never done (nunca había pintado)."
  },
  "b1d-preguntas-opiniones": {
    "goal": "answer opinion questions: yes with the indicative (creo que es), no with the subjunctive (no creo que sea)."
  },
  "b1r-tema-conducir": {
    "goal": "talk about learning to drive: instructions with commands, si + present for what will happen, and me pone nervioso que.",
    "sections": {
      "0": {
        "tables": [
          SI_REAL
        ]
      }
    }
  },
  "b1r-tema-camino": {
    "goal": "give advice for a long walk and tell your experiences on it with the present perfect: he caminado, he conocido.",
    "sections": {
      "0": {
        "tables": [
          PRESENT_PERFECT
        ]
      }
    }
  },
  "si-clauses-drill-2": {
    "goal": "practice si + present with ir a, tell si from sí and si for whether, and use fixed phrases like si quieres.",
    "sections": {
      "0": {
        "tables": [
          SI_REAL
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
  for (const [slug, g] of Object.entries(B2_UNIT5_LATAM)) {
    const m = out[slug] ?? {};
    const alts: Record<number, string[]> = { ...(g.alts ?? {}) };
    for (const [i, a] of Object.entries(m.alts ?? {})) alts[+i] = [...(alts[+i] ?? []), ...a];
    const sections = { ...(m.sections ?? {}) };
    for (const [si, ca] of Object.entries(g.checkAlts ?? {})) sections[+si] = { ...sections[+si], checkAlts: { ...ca, ...(sections[+si]?.checkAlts ?? {}) } };
    out[slug] = { ...m, alts, ...(Object.keys(sections).length ? { sections } : {}) };
  }
  return out;
}

export const B2_UNIT5_PATCHES: Record<string, LessonPatch> = withLatam(merge(B2_UNIT5_SWAP, manual));
