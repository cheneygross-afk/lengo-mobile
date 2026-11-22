// Synced from cheneygross-afk/lengo:src/lib/lessons/es-redesign/b2-unit4.ts by scripts/sync-content.mjs -- edit it there, not here.
// New course, B2 Unit 4 (let's, commands with pronouns, the conditional):
// content fixes from Claude's audit in Ricardo's format (Claude
// Feedback/Spanish (new course)/B2 Upper Intermediate/Unit 04). Only content
// changes here: what is taught, asked and accepted. The answer checker and
// the rubric are untouched.
//
// Lessons built on later grammar moved (es-redesign-units.json): the hobbies
// review (pluperfect) to B2 Unit 5, the dialogue marathon (perfect
// subjunctive, cuando + subjunctive) to C1 Unit 1, the neighborhood campaign
// (the passive with ser) to C1 Unit 6 and the Madrid house rules (vosotros)
// to C2 Unit 7. Lessons that showed another concept's table now show their
// own, and each lesson says what it practises in its goal.
import type { LessonPatch } from "./patch";
import { CONDITIONAL, NOSOTROS_COMMANDS, PRONOUN_PLACE, SUBJ_IMPERSONAL } from "./concept-tables";
import { B2_UNIT4_LATAM, B2_UNIT4_SWAP } from "./b2-unit4-latam";

const manual: Record<string, LessonPatch> = {
  "b1d-ronda-nosotros-vamos": {
    "goal": "suggest plans with let's: hablemos, comamos, vamos, vámonos, and say let's not with no + subjunctive: no salgamos, no lo olvidemos."
  },
  "b1d-rep-imperativo-nosotros": {
    "goal": "review let's commands with pronouns, where the -s drops: sentémonos, digámoselo, hagámoslo, and their negatives: no nos sentemos."
  },
  "commands-drill-2": {
    "goal": "practice usted, ustedes and nosotros commands, all from the subjunctive, with the pronoun joined in yes and before the verb in no."
  },
  "b1d-cadena-tu-usted": {
    "goal": "turn advice for a friend into advice for a client: pasa y ponte cómodo becomes pase y póngase cómodo."
  },
  "b1d-habla-de-ti-consejos": {
    "goal": "give a friend tips about your city with tú commands and pronouns: pruébalo, cómprate, no te pierdas, no tomes taxis."
  },
  "b1d-patron-pegados-infinitivo": {
    "goal": "join two pronouns to an infinitive, with an accent: dárselo, contártela, pedírsela, quiero explicártelo."
  },
  "b1r-tema-teletrabajo": {
    "sections": { "0": { "tables": [CONDITIONAL] } },
    "goal": "compare working from home and at the office, and say what you would prefer: preferiría, sería mejor, me gustaría."
  },
  "b1d-corrige-pronombres-combinados": {
    "goal": "fix the usual double-pronoun slips: le lo becomes se lo, lo te becomes te lo, and darsela needs an accent."
  },
  "b1r-transform-commands": {
    "goal": "turn yes commands into no commands and back, moving the pronouns: dímelo / no me lo digas, siéntese / no se siente."
  },
  "b1r-tema-arboles-ciudad": {
    "sections": { "0": { "tables": [SUBJ_IMPERSONAL] } },
    "goal": "argue for trees and parks: a fact takes the indicative (está claro que limpian), a demand the subjunctive (es urgente que planten)."
  },
  "conditional-tense-1": {
    "goal": "say what you would do with the conditional (hablaría, comería, tendría) and ask politely: ¿podría ayudarme?"
  },
  "b1d-patron-condicional": {
    "goal": "use the conditional in every person in fixed frames: con más tiempo leería, sin tráfico llegaríamos, en tu lugar hablaría.",
    "summary": "Infinitivo + -ía, -ías, -ía, -íamos, -ían: un marco fijo para automatizar las terminaciones."
  },
  "b1d-ronda-cortesia": {
    "goal": "soften requests and advice with the conditional: ¿podría…?, ¿le importaría…?, me gustaría, deberías."
  },
  "conditional-tense-2": {
    "goal": "use 50 money words and say what you would do with money: ahorraría, gastaría, invertiría, pediría un préstamo."
  },
  "b1r-tema-sin-tecnologia": {
    "goal": "say what life without your phone would be like (sin celular, leería más) and complain with me molesta que + subjunctive.",
    "summary": "Acampar sin celular, sin wifi y sin enchufes: hipótesis con el condicional, quejas con el subjuntivo y descubrimientos."
  },
  "b1d-habla-de-ti-millon": {
    "goal": "say what you would do with a million, with no si needed: compraría una casa, viajaría, ayudaría a mi familia."
  },
  "b1-vocabulary-practice-4": {
    "goal": "use 50 kitchen words and give recipe steps: picar, la cebolla picada, una cucharada, pela las papas, córtalas."
  },
  "b1-vocabulary-practice-4-part-2": {
    "goal": "practice the kitchen words again in new sentences: el horno, hornear, tostar el pan, fríe las papas."
  },
  "b1-common-words-heroes": {
    "goal": "use the words of stories and adventures: el príncipe, la princesa, el caballero, la espada, luchar, Érase una vez."
  },
  "b1r-mission-recipe": {
    "goal": "turn a grandmother's notes into a recipe with usted commands (pele, córtelas), then tell a friend with tú (pela, córtalas)."
  },
  "b1d-rep-formacion-dictado": {
    "goal": "listen and write everyday sentences with the present subjunctive, regular and irregular: que vengas, que tengan, que sepa."
  },
  "b1d-rep-perfecto-noticias-dia": {
    "goal": "listen and write today's news in the present perfect: ha llegado, han abierto, ha habido tres incendios."
  },
  "b1d-rep-relativos-cuento": {
    "goal": "use que, quien, lo que and en la que to fill in a story about a neighborhood shop."
  },
  "b1d-rep-combinados-posicion": {
    "goal": "choose where two pronouns go: before a conjugated verb (te lo doy), or joined to an infinitive, a gerund or a yes command (dámelo)."
  },
  "b1d-rep-combinados-posicion-part-2": {
    "goal": "practice where two pronouns go in new sentences: me lo prepara, voy a dártelo, dámelas, no se las des."
  },
  "b1r-challenge-pronoun-gauntlet-part-2": {
    "goal": "show you can handle every kind of pronoun in mixed questions: se lo, se los, el que, el mío."
  },
  "a2-double-pronouns-infinitive-command": {
    "sections": { "0": { "tables": [PRONOUN_PLACE] } },
    "goal": "join two pronouns to an infinitive, a gerund or a command: dármelo, explicándoselo, dímelo."
  },
  "a2-double-pronouns-infinitive-command-part-2": {
    "sections": { "0": { "tables": [PRONOUN_PLACE] } },
    "goal": "practice two pronouns joined to the end in new sentences: pónselo, léeselo, estoy escribiéndotela."
  },
  "a2d-cumulative-circuit-6": {
    "goal": "handle a restaurant, directions, a shop and a phone call politely: ¿me trae…?, siga recto, ¿me lo puedo probar?"
  },
  "a2r-challenge-buenos-aires-1": {
    "goal": "follow a week in Buenos Aires through messages, directions and a tango class, and show what you can do without help."
  },
  "a2r-challenge-buenos-aires-2": {
    "goal": "follow the rest of the week in Buenos Aires: report a lost wallet, meet a new friend and plan to come back."
  },
  "b1s-polite-requests": {
    "goal": "ask politely and apologize: quería, me gustaría, ¿podría…?, ¿le importaría…?, perdone que lo moleste, siento la espera.",
    "summary": "Cómo suavizar peticiones y disculparse: quería, me gustaría, ¿podría...?, ¿le importaría...?, perdone que lo moleste. Las fórmulas que abren puertas en tiendas, oficinas y con desconocidos."
  },
  "b1r-tema-trabajo-en-grupo": {
    "sections": { "0": { "tables": [NOSOTROS_COMMANDS] } },
    "goal": "organize group work: propose with let's (hagamos, repartamos), complain with tact (me molesta que) and offer with haría."
  },
  "combined-object-pronouns-2": {
    "sections": { "0": { "tables": [PRONOUN_PLACE] } },
    "goal": "put two pronouns before a conjugated verb, or join them with an accent to an infinitive, a gerund or a yes command."
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
  for (const [slug, g] of Object.entries(B2_UNIT4_LATAM)) {
    const m = out[slug] ?? {};
    const alts: Record<number, string[]> = { ...(g.alts ?? {}) };
    for (const [i, a] of Object.entries(m.alts ?? {})) alts[+i] = [...(alts[+i] ?? []), ...a];
    const sections = { ...(m.sections ?? {}) };
    for (const [si, ca] of Object.entries(g.checkAlts ?? {})) sections[+si] = { ...sections[+si], checkAlts: { ...ca, ...(sections[+si]?.checkAlts ?? {}) } };
    out[slug] = { ...m, alts, ...(Object.keys(sections).length ? { sections } : {}) };
  }
  return out;
}

export const B2_UNIT4_PATCHES: Record<string, LessonPatch> = withLatam(merge(B2_UNIT4_SWAP, manual));
