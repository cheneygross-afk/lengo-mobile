// Synced from cheneygross-afk/lengo:src/lib/lessons/es-redesign/b1-unit6.ts by scripts/sync-content.mjs -- edit it there, not here.
// New course, B1 Unit 6 (acabar de, volver a, soler · possessive pronouns ·
// diminutives): content fixes from Claude's audit in Ricardo's format (Claude
// Feedback/Spanish (new course)/B1 Intermediate/Unit 06). Only content changes
// here: what is taught, asked and accepted. The answer checker and the rubric
// are untouched.
//
// Lessons built on later grammar moved (es-redesign-units.json): the five
// passive-voice drills to C1 Unit 6; Problemas de convivencia (subjunctive,
// conditional, se) to B2 Unit 6; Admitir un error (pluperfect, perfect
// subjunctive) to C1 Unit 1; the vosotros house rules and Pedir con cortesía
// (conditional) to B2 Unit 4; Seguir o volver (si, conditional) to B2 Unit 5;
// Consejos para la entrevista (es importante que) to B2 Unit 2. The unit now
// teaches soler, which its check and Read and write ask for. Every lesson
// says what it practices in its goal.
import type { LessonPatch } from "./patch";
import { B1_UNIT6_LATAM, B1_UNIT6_SWAP } from "./b1-unit6-latam";

const manual: Record<string, LessonPatch> = {
  "mente-adverbs-1-unit-review": {
    exercises: {
      replace: {
        // Was "Perdone, ¿me podría decir…?" (usted command, conditional: B2 Units 3-4); it reached the warm-ups.
        4: {
          type: "multiple-choice",
          question: "You ask a stranger the way. Which is the most polite?",
          options: ["Perdón, ¿me puede decir dónde está la estación?", "¡Oye! ¿La estación?", "Dime dónde está la estación.", "Estación, ¿dónde?"],
          correctIndex: 0,
          explanation: "Perdón + a question with usted (¿me puede decir…?) is the most polite. \"¡Oye!\", \"Dime\" and \"Estación, ¿dónde?\" are informal or abrupt with a stranger.",
        },
        // Was "Change to usted: Gire…" (usted commands, B2 Unit 3).
        5: {
          type: "translate",
          direction: "en-es",
          prompt: "Turn it into a command (to a friend).",
          source: "Giras a la derecha en el segundo semáforo.",
          answer: "Gira a la derecha en el segundo semáforo.",
          altAnswers: ["Dobla a la derecha en el segundo semáforo.", "¡Gira a la derecha en el segundo semáforo!"],
          explanation: "The tú command is the él form of the present: giras (you turn) → gira (turn).",
        },
      },
    },
  },
  "b1g-periphrases-infinitive": {
    "parts": [
      { "goal": "say what you just did, what you were going to do and what you did again or stopped doing: acabo de llegar, iba a llamarte, volvió a llamar, dejé de fumar." },
      { "goal": "say that something started (empezó a llover, se puso a cocinar, se echó a reír) and what you usually do: suelo desayunar a las ocho." }
    ],
    "goal": "say you just did something, did it again, stopped or usually do it: acabo de llegar, volvió a llamar, dejé de fumar, suelo desayunar a las ocho.",
    "summary": "Verbo + preposición + infinitivo para decir que algo acaba de pasar, se repite, se interrumpe, empieza de golpe o pasa normalmente: acabo de llegar, volvió a llamar, dejé de fumar, se echó a reír, suelo cenar a las nueve.",
    "insert": [
      {
        "section": {
          "heading": "Soler: lo que haces normalmente",
          "body": [
            "Soler + infinitivo = hacer algo normalmente, como costumbre: Suelo desayunar a las ocho (I usually have breakfast at eight). Soler cambia o → ue, como poder: suelo, sueles, suele, solemos, suelen.",
            "Para costumbres del pasado, usa el imperfecto: De niña solía pasar el verano en la playa (I used to spend the summer at the beach)."
          ],
          "examples": [
            {
              "es": "Suelo ir al trabajo en bus.",
              "en": "I usually go to work by bus."
            },
            {
              "es": "¿A qué hora sueles cenar?",
              "en": "What time do you usually have dinner?"
            },
            {
              "es": "Mis abuelos suelen visitarnos los domingos.",
              "en": "My grandparents usually visit us on Sundays."
            },
            {
              "es": "De niña solía pasar el verano en la playa.",
              "en": "As a girl I used to spend the summer at the beach."
            }
          ],
          "checkpoint": [
            {
              "type": "fill-blank",
              "prompt": "¿Cómo se dicen en español las palabras en negrita?",
              "sentence": "Los domingos ___ comer con mi familia.",
              "answer": "suelo",
              "en": "On Sundays I [usually] eat with my family.",
              "explanation": "Soler → suelo (o → ue) + infinitivo: lo que haces normalmente."
            },
            {
              "type": "multiple-choice",
              "question": "«What time do you usually get up?» (tú)",
              "options": [
                "¿A qué hora sueles levantarte?",
                "¿A qué hora soles levantarte?",
                "¿A qué hora sueles te levantar?",
                "¿A qué hora suelas levantarte?"
              ],
              "correctIndex": 0,
              "explanation": "Soler cambia o → ue (sueles), y el pronombre va al final del infinitivo (levantarte) o delante de sueles (¿a qué hora te sueles levantar?).",
              "optionNotes": [
                "",
                "Soler cambia o → ue: sueles.",
                "El pronombre no va entre los dos verbos separado: levantarte.",
                "Suelas no es una forma del presente: sueles."
              ]
            }
          ]
        }
      }
    ],
    "exercises": {
      "add": [
        {
          "type": "translate",
          "direction": "en-es",
          "prompt": "Traduce al español.",
          "source": "We usually go to the market on Saturdays.",
          "answer": "Solemos ir al mercado los sábados.",
          "altAnswers": [
            "Los sábados solemos ir al mercado.",
            "Nosotros solemos ir al mercado los sábados."
          ],
          "explanation": "Soler → solemos + infinitivo para una costumbre.",
          "meta": {
            "section": 5
          }
        },
        {
          "type": "fill-blank",
          "prompt": "¿Cómo se dicen en español las palabras en negrita?",
          "sentence": "Mi hermano ___ llegar tarde.",
          "answer": "suele",
          "en": "My brother [usually] arrives late.",
          "explanation": "Soler → suele (él), con o → ue.",
          "meta": {
            "section": 5
          }
        },
        {
          "type": "speak",
          "prompt": "Dilo en español: \"I usually have breakfast at eight\"",
          "text": "Suelo desayunar a las ocho.",
          "altAnswers": [
            "A las ocho suelo desayunar.",
            "Yo suelo desayunar a las ocho."
          ],
          "explanation": "Una forma de decirlo: «Suelo desayunar a las ocho». Soler + infinitivo para lo que haces normalmente.",
          "meta": {
            "section": 5
          }
        }
      ]
    }
  },
  "possessive-pronouns-1": {
    "alts": {
      "8": ["Si tu ordenador no funciona, usa el mío."]
    },
    "goal": "say mine, yours and ours without repeating the noun: el mío, la tuya, los nuestros, agreeing with the thing owned."
  },
  "b1d-patron-el-mio-la-mia": {
    "goal": "choose el mío, la mía, los míos or las mías by looking at the thing, not the owner."
  },
  "b1d-pares-mi-el-mio": {
    "goal": "choose between mi and el mío, and between es mío and es el mío."
  },
  "possessive-pronouns-2": {
    "alts": {
      "5": ["Perdonen, ¿este abrigo es de ustedes?"],
      "23": ["Perdonen, ¿este abrigo es de ustedes?"]
    },
    "goal": "make el suyo clear with el de él, la de ella or los de ustedes, as when sorting luggage."
  },
  "b1r-contrast-mi-mio": {
    "goal": "tell the short forms (mi, tu, su) from the long ones (mío, tuyo, suyo) and use both: mi amiga, una amiga mía."
  },
  "a2-common-words-people": {
    "goal": "use words for the people around you (el amor, el matrimonio, el muchacho, la relación) and say a friend of mine: una amiga mía."
  },
  "a2-common-words-feelings-part-2": {
    "goal": "review the words for feelings and character in new sentences: loca, agradable, la culpa, el alma, la paz."
  },
  "b1d-elige-explica-el-de-el": {
    "goal": "choose between el suyo and el de él / el de ella when more than one owner is possible.",
    "alts": {
      "10": [
        "Perdonen, ¿esta mesa es de ustedes o de ellos?",
        "¿Esta mesa es de ustedes o de ellos?",
        "Disculpa, ¿esta mesa es de ustedes o de ellos?",
        "Perdón, ¿esta mesa es suya o de ellos?"
      ],
      "18": [
        "Sus cuartos están en el segundo piso; los de ellos están en el tercero.",
        "Los cuartos de ustedes están en el segundo piso; los de ellos están en el tercero."
      ]
    }
  },
  "b1d-rep-perfecto-hoy-ayer": {
    "goal": "choose between hoy tomé or hoy he tomado and ayer tomé: the preterite for finished time, the present perfect for experiences and open time.",
    "alts": {
      "27": [
        "Esta mañana desayuné afuera.",
        "Esta mañana desayuné fuera.",
        "Hoy en la mañana desayuné afuera."
      ],
      "22": [
        "Esta tarde llamé al médico, pero ayer no contestó nadie.",
        "Esta tarde llamé al médico, pero ayer nadie contestó.",
        "Esta tarde llamé a la médica, pero ayer no contestó nadie."
      ]
    }
  },
  "a2g-diminutives": {
    "goal": "use -ito, -ita and -cito for small, cute or friendly: un momentito, un cafecito, mi abuelita, cerquita.",
    "alts": {
      "11": [
        "Mi hermanito quiere un bocadillo de queso.",
        "Mi hermanito quiere un sándwich de queso.",
        "Mi hermano pequeño quiere un sándwich de queso.",
        "Mi hermano menor quiere un sándwich de queso.",
        "Mi hermanito quiere un sandwich de queso.",
        "Mi hermanito quiere una torta de queso."
      ]
    }
  },
  "a2-common-words-happen-part-2": {
    "goal": "review suceder, acabar de, usar and mantener, and short phrases like ¡Basta! and Te lo juro, in new sentences."
  },
  "a2-common-words-feelings": {
    "parts": [
      {
        "goal": "describe people and feelings with loco, tonto, agradable and la culpa, and use the -ura pattern: la locura."
      },
      {
        "goal": "use words for strong feelings and big ideas: la sorpresa, la broma, la paz, el peligro, el alma, el honor."
      }
    ]
  },
  "a2-common-words-happen": {
    "parts": [
      {
        "goal": "say what happens and what just happened: suceder, ocurrir, acabar and acabar de + infinitive."
      },
      {
        "goal": "use usar and mantener, and short phrases for strong moments: ¡Basta!, ¡Cállate!, Te lo juro, Creí que…"
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
      sections: { ...(m.sections ?? {}), ...(p.sections ?? {}) },
      exercises: { ...(m.exercises ?? {}), ...(p.exercises ?? {}), replace: { ...(m.exercises?.replace ?? {}), ...(p.exercises?.replace ?? {}) } },
    };
  }
  return out;
}

function withLatam(p: Record<string, LessonPatch>): Record<string, LessonPatch> {
  const out: Record<string, LessonPatch> = { ...p };
  for (const [slug, g] of Object.entries(B1_UNIT6_LATAM)) {
    const m = out[slug] ?? {};
    const alts: Record<number, string[]> = { ...(g.alts ?? {}) };
    for (const [i, a] of Object.entries(m.alts ?? {})) alts[+i] = [...(alts[+i] ?? []), ...a];
    const sections = { ...(m.sections ?? {}) };
    for (const [si, ca] of Object.entries(g.checkAlts ?? {})) sections[+si] = { ...sections[+si], checkAlts: { ...ca, ...(sections[+si]?.checkAlts ?? {}) } };
    out[slug] = { ...m, alts, ...(Object.keys(sections).length ? { sections } : {}) };
  }
  return out;
}

export const B1_UNIT6_PATCHES: Record<string, LessonPatch> = withLatam(merge(B1_UNIT6_SWAP, manual));
