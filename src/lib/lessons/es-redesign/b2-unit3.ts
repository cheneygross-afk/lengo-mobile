// Synced from cheneygross-afk/lengo:src/lib/lessons/es-redesign/b2-unit3.ts by scripts/sync-content.mjs -- edit it there, not here.
// New course, B2 Unit 3 (one verb or que + subjunctive, polite commands,
// negative commands): content fixes from Claude's audit in Ricardo's format
// (Claude Feedback/Spanish (new course)/B2 Upper Intermediate/Unit 03). Only
// content changes here: what is taught, asked and accepted. The answer
// checker and the rubric are untouched.
//
// Lessons built on later grammar moved (es-redesign-units.json): para que /
// antes de que to B2 Unit 7, double-pronoun commands (del sí al no) to B2
// Unit 4, the pluperfect dictations and the family reunion to B2 Unit 5, and
// the vosotros story (antes del cole) to C2 Unit 7. The lesson that teaches
// the commands now comes first, and its nosotros card teaches where the
// pronoun goes instead. Each lesson says what it practises in its goal.
import type { LessonPatch } from "./patch";
import { B2_UNIT3_LATAM, B2_UNIT3_SWAP } from "./b2-unit3-latam";

const manual: Record<string, LessonPatch> = {
  "b1d-pares-infinitivo-que": {
    "goal": "choose between the infinitive for one person and que + subjunctive for two: quiero salir, quiero que salgas; necesito dormir, necesito que duerman."
  },
  "b1d-pares-infinitivo-que-part-2": {
    "goal": "practice the same choice in new pairs: Ana prefiere manejar, Ana prefiere que yo maneje; espero llegar, espero que llegues."
  },
  "subjunctive-wishes-doubt-emotion-drill-2": {
    "goal": "use the infinitive or que + subjunctive after es una lástima, es posible, es sorprendente and es importante."
  },
  "b1r-transform-infinitive-subjunctive": {
    "goal": "change the subject of the second half and rebuild the sentence: odio madrugar, odio que madruguen; siento irme, siento que te vayas."
  },
  "commands-imperative-1": {
    "goal": "give commands with tú (habla, haz), usted and ustedes (espere, firmen), and say don't with no + subjunctive: no hables, no llegue tarde.",
    "summary": "Aprende el imperativo: mandatos de tú y de usted y ustedes, afirmativos y negativos, para dar instrucciones y hacer peticiones.",
    "sections": {
      "3": {
        "heading": "Mandatos con pronombres",
        "body": [
          "Con un pronombre, el sitio cambia según el mandato. En el afirmativo se pega al final, a veces con tilde: tócalo, siéntese, llámenme. En el negativo va delante del verbo: no lo toques, no se siente, no me llamen."
        ],
        "examples": [
          {
            "es": "Siéntese aquí, por favor.",
            "en": "Sit here, please. (usted)"
          },
          {
            "es": "No se preocupen.",
            "en": "Don't worry. (ustedes)"
          },
          {
            "es": "Llámame mañana, pero no me llames tarde.",
            "en": "Call me tomorrow, but don't call me late. (tú)"
          }
        ],
        "check": [
          {
            "type": "multi-select",
            "question": "¿Qué mandatos están bien? (Elige todas las correctas)",
            "options": [
              "Siéntese.",
              "No se siente.",
              "No siéntese.",
              "Se siente."
            ],
            "correctIndexes": [
              0,
              1
            ],
            "explanation": "Afirmativo: el pronombre va pegado (siéntese). Negativo: va delante (no se siente). «No siéntese» deja el pronombre pegado en un negativo y «Se siente» describe, no ordena."
          }
        ]
      }
    }
  },
  "b1d-patron-tu-afirmativo": {
    "goal": "give tú commands: the él form for most verbs (habla, come, escribe) and the eight short ones: di, haz, ve, pon, sal, sé, ten, ven."
  },
  "b1d-circuito-usted-ustedes": {
    "goal": "give polite commands with usted and ustedes from the yo form: pase, siéntese, no se preocupe, tengan, pongan."
  },
  "b1r-error-hunt-commands": {
    "goal": "find and fix command slips: an affirmative form in a negative, a pronoun in the wrong place, and tú mixed with usted."
  },
  "b1d-corrige-mandatos": {
    "goal": "fix a note full of command mistakes: no pongas, haz, no lo toques, vete, ciérrala, no vuelvas."
  },
  "b1d-pares-afirmativo-negativo-tu": {
    "goal": "match tú commands with their negatives: habla / no hables, come / no comas, pon / no pongas, toma / no tomes."
  },
  "commands-drill-1": {
    "goal": "practice tú commands, regular and irregular, with their negatives, and polite commands with usted and ustedes.",
    "summary": "Practica los mandatos con tú: afirmativos regulares e irregulares (ven, ten, sal, pon, haz, di, ve, sé) y negativos con subjuntivo, con un breve repaso de usted y ustedes."
  },
  "b1d-rep-imperativo-afirmativo-negativo-tu": {
    "goal": "switch between do and don't with tú, with the pronoun after or before: llámalo / no lo llames, explícalo / no lo expliques."
  },
  "b1d-rep-imperativo-tu-irregulares": {
    "goal": "use the eight irregular tú commands fast and their negatives: haz / no hagas, ven / no vengas, sal / no salgas."
  },
  "b1-common-words-body-night-out": {
    "goal": "use words for the body, health and a night out: la piel, el cuello, la enfermedad, embarazada, una copa, una conversación."
  },
  "b1-common-words-body-night-out-part-2": {
    "goal": "use the body, health and night-out words again in new sentences: me duele el cuello, tiene la piel suave, vamos a tomar algo."
  },
  "b2-vocabulary-practice-3": {
    "goal": "use 50 words for dreams and imagination: soñar despierto, la fantasía, vislumbrar, idear, perseguir un sueño."
  },
  "b2-vocabulary-practice-3-part-2": {
    "goal": "practice the dreams and imagination words in new sentences: aspirar a, plasmar un sueño, la vocación, la epifanía."
  },
  "b1d-rep-imperativo-pronombres-reflexivos": {
    "goal": "give commands with reflexive verbs: lávate / no te laves, siéntese / no se siente, cállate, vete."
  },
  "b1d-patron-es-importante-que": {
    "goal": "give rules with es importante, es necesario, es mejor and es obligatorio que + subjunctive, and with the infinitive for everyone."
  },
  "asking-giving-directions-1": {
    "goal": "ask for directions politely and give them with usted commands: siga, gire, cruce, tome."
  },
  "asking-giving-directions-2": {
    "goal": "say where places are with al lado de, enfrente de, detrás de, entre and a dos cuadras de, and use la esquina and el semáforo."
  },
  "a2d-directions-qa": {
    "goal": "ask and answer the practical questions around directions: ¿está lejos?, ¿cuánto se tarda?, ¿hay un banco por aquí?"
  },
  "a2r-mission-lost-in-seville": {
    "goal": "handle a real conversation as a lost tourist: ask for directions politely and follow usted commands."
  },
  "b1d-habla-de-ti-normas-casa": {
    "goal": "write house rules for a guest with tú and usted commands: siéntete como en casa, no uses la ducha tarde, sírvase café."
  },
  "b1d-rep-imperativo-receta": {
    "goal": "read and fill in a recipe given with tú commands: lava, pela, córtalos, pon, no le pongas mucho ajo."
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
  for (const [slug, g] of Object.entries(B2_UNIT3_LATAM)) {
    const m = out[slug] ?? {};
    const alts: Record<number, string[]> = { ...(g.alts ?? {}) };
    for (const [i, a] of Object.entries(m.alts ?? {})) alts[+i] = [...(alts[+i] ?? []), ...a];
    const sections = { ...(m.sections ?? {}) };
    for (const [si, ca] of Object.entries(g.checkAlts ?? {})) sections[+si] = { ...sections[+si], checkAlts: { ...ca, ...(sections[+si]?.checkAlts ?? {}) } };
    out[slug] = { ...m, alts, ...(Object.keys(sections).length ? { sections } : {}) };
  }
  return out;
}

export const B2_UNIT3_PATCHES: Record<string, LessonPatch> = withLatam(merge(B2_UNIT3_SWAP, manual));
