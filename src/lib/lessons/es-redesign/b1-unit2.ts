// Synced from cheneygross-afk/lengo:src/lib/lessons/es-redesign/b1-unit2.ts by scripts/sync-content.mjs -- edit it there, not here.
// New course, B1 Unit 2 (where pronouns go · self verbs and routines · verbs
// that change meaning with se): content fixes from Claude's audit in
// Ricardo's format (Claude Feedback/Spanish (new course)/B1 Intermediate/
// Unit 02). Section and question numbers are the lessons' own. Only content
// changes here: what is taught, asked and accepted. The answer checker and
// the rubric are untouched.
//
// Lessons built on later grammar moved (es-redesign-units.json): the two
// cumulative circuits on pronoun position, the B1 pronoun challenge and the
// dialogue marathon (commands with pronouns, relatives, the conditional and
// the subjunctive) to B2 Unit 4; the reflexive commands drill (lávate / no te
// laves) to B2 Unit 3; the spiral review with the future, comparisons and
// por / para to B1 Unit 4. The lessons that stay stop asking for commands
// (llámame, dime, devuélvemela, no le diga), use Latin American words as
// their main answers (carro, computadora, camioneta, departamento, lentes,
// boleto, celular), and say what each one practices in its goal.
import type { Exercise } from "../types";
import type { LessonPatch } from "./patch";
import { order } from "./a2-unit5";
import { B1_UNIT2_LATAM } from "./b1-unit2-latam";

const speak = (prompt: string, text: string, altAnswers: string[], explanation: string): Exercise => ({
  type: "speak",
  prompt,
  text,
  ...(altAnswers.length ? { altAnswers } : {}),
  explanation,
});
const tr = (prompt: string, source: string, answer: string, altAnswers: string[], explanation: string): Exercise => ({
  type: "translate",
  prompt,
  direction: "en-es",
  source,
  answer,
  ...(altAnswers.length ? { altAnswers } : {}),
  explanation,
});
const fill = (prompt: string, sentence: string, answer: string, en: string | undefined, explanation: string, altAnswers: string[] = []): Exercise => ({
  type: "fill-blank",
  prompt,
  sentence,
  answer,
  ...(en ? { en } : {}),
  ...(altAnswers.length ? { altAnswers } : {}),
  explanation,
});
const mc = (question: string, options: string[], correctIndex: number, explanation: string): Exercise => ({
  type: "multiple-choice",
  question,
  options,
  correctIndex,
  explanation,
});
const SAY = "Say it in Spanish:";
const BOLD = "How do you say the bold words in Spanish?";
const BOLD_ES = "¿Cómo se dicen en español las palabras en negrita?";
const CORRECT = "Correct the sentence.";
const TR = "Translate to Spanish.";

const manual: Record<string, LessonPatch> = {
  "object-pronouns-drill-2": {
    goal: "put a pronoun before the conjugated verb or on the end of an infinitive or gerund: te voy a llamar, voy a llamarte, estoy leyéndolo.",
    summary: "Practise putting object pronouns on infinitives and gerunds (llamarte, estoy leyéndolo), or before the conjugated verb.",
    sections: {
      0: {
        body: [
          "Remember the rule: a pronoun goes before a conjugated verb, or is attached to an infinitive or a gerund. It never sits between two verbs.",
          "With an infinitive or a gerund, the pronoun can go before the conjugated verb or be attached to the end of the infinitive or gerund.",
        ],
      },
    },
    dropSections: [1],
    exercises: {
      replace: {
        0: tr(TR, "I'm going to call you (tú) tonight.", "Te voy a llamar esta noche.", ["Voy a llamarte esta noche.", "Esta noche te voy a llamar.", "Esta noche voy a llamarte.", "Te voy a llamar hoy en la noche.", "Voy a llamarte hoy en la noche."], "Te before voy, or attached to the infinitive: voy a llamarte."),
        9: tr("Rewrite it with the pronoun attached.", "La estoy comiendo.", "Estoy comiéndola.", [], "Attached to the gerund, the word grows, so comiendo needs an accent: comiéndola."),
        10: tr(TR, "We want to help you (tú).", "Queremos ayudarte.", ["Te queremos ayudar.", "Nosotros queremos ayudarte.", "Nosotros te queremos ayudar."], "Te attached to ayudar, or before queremos."),
        11: tr("Make it negative.", "Voy a abrirlas.", "No voy a abrirlas.", ["No las voy a abrir."], "No goes first, before everything: no voy a abrirlas, or no las voy a abrir."),
        13: speak(`${SAY} "The photos are here. I'm looking at them now."`, "Las fotos están aquí. Las estoy mirando ahora.", ["Las fotos están aquí. Estoy mirándolas ahora.", "Las fotos están aquí. Las estoy viendo ahora.", "Las fotos están aquí. Estoy viéndolas ahora."], "Las before estoy, or attached to the gerund with an accent: mirándolas."),
        15: fill(BOLD, "Quiero ___ la verdad.", "decirte", "I want to [tell you] the truth. (tú)", "Te attached to the infinitive: decirte. Decir keeps its stress, so no accent."),
        20: tr(TR, "My mom is calling me.", "Mi mamá me está llamando.", ["Mi mamá está llamándome.", "Mi madre me está llamando.", "Mi madre está llamándome."], "Me before está, or attached to the gerund with an accent: llamándome."),
        25: speak(`${SAY} "I want to tell you the truth"`, "Quiero decirte la verdad.", ["Te quiero decir la verdad."], "Te attached to decir, or before quiero."),
      },
    },
  },
  "a2d-double-pronoun-infinitive": {
    goal: "keep two pronouns together, before the conjugated verb or on the end of the infinitive: te lo voy a explicar, voy a explicártelo.",
    exercises: {
      replace: {
        9: tr(TR, "The tickets? We want to buy them for you all.", "¿Las entradas? Queremos comprárselas.", ["¿Las entradas? Se las queremos comprar.", "¿Los boletos? Queremos comprárselos.", "¿Los boletos? Se los queremos comprar.", "¿Las entradas? Queremos comprárselas a ustedes.", "¿Los boletos? Queremos comprárselos a ustedes."], "For you all (ustedes) the pronoun is les, and les turns into se before las: comprárselas, or se las queremos comprar."),
        10: order(["¿La", "cena?", "Vamos", "a", "preparársela", "esta", "noche"], "Dinner? We're going to make it for them tonight", "Les + la → se la, attached to the infinitive with an accent."),
      },
    },
  },
  "a2d-double-pronoun-infinitive-part-2": {
    goal: "put two pronouns on the end of an infinitive with the right accent, or put them before the verb: dárselo, se lo voy a dar.",
    exercises: {
      replace: {
        7: tr(TR, "The car? Can you lend it to me (informal)?", "¿El carro? ¿Me lo puedes prestar?", ["¿El carro? ¿Puedes prestármelo?", "¿El carro? ¿Me lo prestas?", "¿El auto? ¿Me lo puedes prestar?", "¿El auto? ¿Puedes prestármelo?", "¿El auto? ¿Me lo prestas?", "¿El coche? ¿Me lo puedes prestar?", "¿El coche? ¿Puedes prestármelo?", "¿El coche? ¿Me lo prestas?"], "Both positions: me lo puedes prestar / puedes prestármelo."),
      },
    },
  },
  "b1d-rep-perfecto-experiencias": {
    goal: "talk about what you have and haven't done in your life with the present perfect: he estado, nunca he visto, ¿alguna vez has…?",
    exercises: {
      replace: {
        5: tr("Traduce al español.", "Have you (tú) ever won a prize?", "¿Alguna vez has ganado un premio?", ["¿Has ganado un premio alguna vez?", "¿Has ganado alguna vez un premio?", "¿Alguna vez ganaste un premio?", "¿Ganaste un premio alguna vez?", "¿Ganaste alguna vez un premio?"], "«Ever» → alguna vez + perfecto: has ganado. En Latinoamérica también se dice «¿Alguna vez ganaste…?»."),
        15: tr("Traduce al español.", "Have you all (ustedes) ever slept in a tent?", "¿Alguna vez han dormido en una carpa?", ["¿Han dormido alguna vez en una carpa?", "¿Alguna vez durmieron en una carpa?", "¿Durmieron alguna vez en una carpa?", "¿Alguna vez han dormido en una tienda de campaña?", "¿Han dormido alguna vez en una tienda de campaña?", "¿Alguna vez durmieron en una tienda de campaña?", "¿Durmieron alguna vez en una tienda de campaña?", "¿Alguna vez han acampado?", "¿Alguna vez acamparon?"], "Alguna vez + perfecto; con ustedes el auxiliar es han: han dormido. En Latinoamérica también es normal «¿alguna vez durmieron…?»."),
        19: fill(BOLD_ES, "Los niños ya ___ la tarea.", "han hecho", "The children [have already done] their homework.", "Ya + perfecto; hecho es el participio irregular de hacer (no «hacido»). En Latinoamérica también se dice «ya hicieron».", ["hicieron"]),
      },
    },
  },
  "b1d-frase-a-frase-gerundio": {
    goal: "put two pronouns on a gerund with an accent, or before estar: estoy diciéndotelo, te lo estoy diciendo.",
    exercises: {
      replace: {
        0: fill("Paso 1.", "Estoy arreglando la computadora. → Estoy ___.", "arreglándola", undefined, "La computadora → la, pegado al gerundio con tilde: arreglándola."),
        1: fill("Paso 2.", "Estoy arreglando la computadora a mi papá. → Estoy ___.", "arreglándosela", undefined, "Dos pronombres pegados al gerundio: se (a mi papá) + la (la computadora): arreglándosela."),
        2: fill("Paso 3.", "Estoy arreglando la computadora a mi papá. → ___ estoy arreglando.", "Se la", undefined, "Los pronombres también pueden ir delante del verbo conjugado (estar): se la estoy arreglando."),
        18: fill(BOLD_ES, "Te estoy guardando el lugar. → Estoy ___.", "guardándotelo", "I'm saving the seat for you. → I'm [saving it for you].", "Te + lo pegados al gerundio con tilde."),
      },
    },
  },
  "a2r-error-hunt-pronoun-placement": {
    goal: "find and fix misplaced pronouns: before the conjugated verb or on the end of an infinitive or gerund, never in between.",
    exercises: {
      replace: {
        4: mc("Which sentence is correct?", ["Te lo quiero explicar.", "Te quiero lo explicar.", "Quiero te lo explicar.", "Te lo quiero explicarlo."], 0, "The pair goes before quiero or on the end of explicar (quiero explicártelo), never between the verbs and never twice."),
        12: tr(CORRECT, "¿Los lentes? No veo los.", "¿Los lentes? No los veo.", ["No los veo."], "With a single conjugated verb the pronoun goes in front of it, after no: no los veo."),
        22: tr("Rewrite it with the pronoun before the verbs.", "Voy a comprarlo.", "Lo voy a comprar.", [], "The pronoun moves from the end of comprar to before voy: lo voy a comprar."),
      },
    },
  },
  "a2d-pattern-reflexive-present": {
    goal: "match the reflexive pronoun and the verb ending for every person: me levanto, te levantas, se levanta, nos levantamos.",
  },
  "a2d-minimal-pairs-with-without-se": {
    goal: "choose with or without se: lavo el carro or me lavo, despierto a mi hijo or me despierto.",
    sections: {
      0: {
        body: [
          "Remember the rule: se (me, te, nos...) means the action comes back to the subject. No pronoun means it goes out to something or someone else, who then appears after the verb (with personal a for people).",
          "Lavo el carro (the car) / Me lavo (myself). Despierto a mi hijo (someone else) / Me despierto (myself). Acuesto al bebé / Me acuesto. Pongo la mesa (put) / Me pongo el abrigo (put on). Ask: who receives the action?",
        ],
      },
    },
    exercises: {
      replace: {
        8: tr(TR, "I wash the car on Saturdays.", "Lavo el carro los sábados.", ["Lavo el auto los sábados.", "Lavo el coche los sábados.", "Los sábados lavo el carro.", "Los sábados lavo el auto.", "Los sábados lavo el coche."], "You wash something else, so no se."),
        9: tr("Change it so you wash yourself.", "Lavo el carro con agua fría.", "Me lavo con agua fría.", ["Yo me lavo con agua fría.", "Me lavo yo con agua fría."], "Now you wash yourself, so the object disappears and the reflexive me appears: me lavo."),
      },
    },
  },
  "a2d-reflexive-infinitive-placement": {
    goal: "put a reflexive pronoun before the conjugated verb or on the infinitive or gerund, matching the person: me voy a duchar, voy a ducharme.",
  },
  "reflexive-verbs-daily-routine-2": {
    exercises: {
      replace: {
        8: tr(TR, "My sister puts on makeup in the car.", "Mi hermana se maquilla en el carro.", ["Mi hermana se maquilla en el auto.", "Mi hermana se maquilla en el coche."], "Maquillarse = to put on makeup, a single reflexive verb (from el maquillaje)."),
      },
    },
  },
  "a2r-contrast-reflexive-meaning": {
    goal: "choose with or without se: lavar or lavarse, ir or irse, dormir or dormirse, llamar or llamarse.",
    sections: {
      0: {
        body: [
          "Remember the rule: without se, you act on someone or something else, which follows the verb. With se, the action falls back on the subject, and there's no one else to name.",
          "Quick check: if you can ask \"whom / what?\" and get an answer other than the subject (lavo... el carro), no se. If the answer is \"myself\", add the pronoun.",
        ],
        examples: [
          { es: "Lavo el carro. / Me lavo.", en: "I wash the car. / I wash (myself)." },
          { es: "Acuesto al bebé. / Me acuesto.", en: "I put the baby to bed. / I go to bed." },
        ],
      },
    },
  },
  "a2d-reflexive-past-mixed": {
    goal: "use the same reflexive verb in the present, the imperfect, the preterite and with ir a: me acuesto, me acostaba, me acosté, me voy a acostar.",
    exercises: {
      replace: {
        10: speak(`${SAY} "As a child, I used to fall asleep in the car"`, "De niño me dormía en el carro.", ["De niña me dormía en el carro.", "Cuando era niño me dormía en el carro.", "Cuando era niña me dormía en el carro.", "De niño me dormía en el auto.", "De niña me dormía en el auto.", "De niño me dormía en el coche.", "De niña me dormía en el coche."], "'Used to' → imperfect: me dormía."),
      },
    },
  },
  "a2r-mission-yesterday-routine": {
    goal: "tell a friend about a morning that went wrong, with reflexive verbs in the preterite: me desperté tarde, no me peiné.",
    reword: [
      ["compañero de piso", "compañero de cuarto"],
      ["del móvil", "del celular"],
    ],
  },
  "a2-double-pronouns-mission": {
    goal: "plan a move with friends, answering who lends or gives what to whom with two pronouns: te la presto, se las doy.",
    sections: {
      0: {
        body: [
          "Remember the rule: once a thing has been mentioned, don't repeat it. Person pronoun first, thing pronoun second, both before the conjugated verb, and le / les turn into se next to lo / la / los / las.",
          "Lucía is moving to a new apartment. Notice how every second mention of a thing becomes a pronoun pair. Then help her organize the move with things the dialogue doesn't mention.",
        ],
        examples: [
          { es: "—¿Me prestas la camioneta el sábado? —Claro, te la presto.", en: "Will you lend me the van on Saturday? — Of course, I'll lend it to you." },
          { es: "—¿Y las cajas? —Mi primo nos las trae el viernes.", en: "And the boxes? — My cousin's bringing them to us on Friday." },
          { es: "—¿Le has dado las llaves al dueño? —Todavía no. Se las doy mañana.", en: "Have you given the keys to the landlord? — Not yet. I'm giving them to him tomorrow." },
        ],
      },
    },
    reword: [["furgoneta", "camioneta"]],
    exercises: {
      replace: {
        11: speak(`${SAY} "The chairs? My friends are taking them to the new apartment for me"`, "¿Las sillas? Mis amigos me las llevan al departamento nuevo.", ["¿Las sillas? Mis amigos me las llevan al nuevo departamento.", "¿Las sillas? Mis amigos me las llevan al piso nuevo."], "Me + las, before the verb."),
        14: tr(TR, "The keys of the old apartment? I have to give them back to the landlord.", "¿Las llaves del departamento viejo? Tengo que devolvérselas al dueño.", ["¿Las llaves del departamento viejo? Se las tengo que devolver al dueño.", "¿Las llaves del departamento? Tengo que devolvérselas al dueño.", "¿Las llaves del departamento? Se las tengo que devolver al dueño.", "¿Las llaves del departamento viejo? Tengo que devolvérselas al casero.", "¿Las llaves del departamento viejo? Se las tengo que devolver al casero.", "¿Las llaves del piso viejo? Tengo que devolvérselas al dueño.", "¿Las llaves del piso viejo? Se las tengo que devolver al dueño.", "¿Las llaves del piso viejo? Tengo que devolvérselas al casero.", "¿Las llaves del piso viejo? Se las tengo que devolver al casero."], "Se las attached to the infinitive with an accent, or before tengo."),
        18: tr(TR, "The van? Can you (informal) give it back to me on Sunday?", "¿La camioneta? ¿Me la puedes devolver el domingo?", ["¿La camioneta? ¿Puedes devolvérmela el domingo?", "¿La camioneta? ¿Me la devuelves el domingo?", "¿La furgoneta? ¿Me la puedes devolver el domingo?", "¿La furgoneta? ¿Puedes devolvérmela el domingo?", "¿La furgoneta? ¿Me la devuelves el domingo?"], "Me la before puedes, or attached with an accent: devolvérmela."),
        19: tr(TR, "The fridge? I'm going to sell it to my neighbors.", "¿El refrigerador? Se lo voy a vender a mis vecinos.", ["¿El refrigerador? Voy a vendérselo a mis vecinos.", "¿El refri? Se lo voy a vender a mis vecinos.", "¿El refri? Voy a vendérselo a mis vecinos.", "¿La heladera? Se la voy a vender a mis vecinos.", "¿La heladera? Voy a vendérsela a mis vecinos.", "¿La nevera? Se la voy a vender a mis vecinos.", "¿La nevera? Voy a vendérsela a mis vecinos.", "¿El frigorífico? Se lo voy a vender a mis vecinos.", "¿El frigorífico? Voy a vendérselo a mis vecinos."], "Les → se; lo for el refrigerador, before voy or attached: vendérselo."),
      },
    },
  },
  "a2r-timeline-builder": {
    reword: [
      ["los billetes", "los boletos"],
      ["el ordenador", "la computadora"],
    ],
  },
  "a2-common-words-praise-complaints": {
    goal: "give praise, complain and talk about feelings with words like estupendo, ridículo, aguantar, merecer and orgulloso de.",
  },
  "a2-vocabulary-practice-1": {
    exercises: {
      replace: {
        7: tr(TR, "We rented a car to explore the mountains.", "Rentamos un carro para explorar las montañas.", ["Alquilamos un carro para explorar las montañas.", "Rentamos un auto para explorar las montañas.", "Alquilamos un auto para explorar las montañas.", "Alquilamos un coche para explorar las montañas.", "Rentamos un coche para explorar las montañas."], "Alquilar or rentar (common in Mexico and Central America) = to rent; para + infinitive gives the purpose."),
      },
    },
  },
  "a2-vocabulary-practice-2": {
    sections: {
      1: { body: ["The 30 childhood and memories words, grouped for review."] },
      2: { body: ["The 30 weather and seasons words, grouped for review."] },
    },
    alts: { 4: ["Extraño mi viejo barrio.", "Echo de menos mi viejo barrio.", "Extraño mi barrio de antes.", "Extraño el barrio donde vivía."] },
  },
  "a2-vocabulary-practice-5": {
    sections: {
      1: {
        body: [
          "The person who does the verb takes -dor / -dora: trabajar → el trabajador, la trabajadora.",
          "The 30 work and future plans words, grouped for review. As you match them, look for the pairs: entrevista / entrevistar, contratar / contrato, jubilarse / jubilación.",
        ],
      },
      2: {
        body: [
          "The pattern: health words follow the same family logic. An adjective gives a noun in -dad, always feminine (enfermo → la enfermedad, like English -ity). Changing state is a reflexive verb: enfermo → enfermarse (to get sick), cansado → cansarse (to get tired). And mejor / peor turn into verbs that mean \"to become better / worse\": mejorar, empeorar.",
          "The 30 health and doctor words, grouped for review.",
        ],
      },
    },
  },
  "a2d-cumulative-circuit-1": {
    goal: "choose the past tense first, then the pronoun and its place, in mixed sentences: lo leí, me acostaba, se lo di.",
    reword: [["«¿El coche? ___ a mi hijo", "«¿El carro? ___ a mi hijo"]],
    exercises: {
      replace: {
        10: tr("Change it to the preterite.", "¿Las llaves? Las dejo en el carro.", "¿Las llaves? Las dejé en el carro.", ["¿Las llaves? Las dejé en el auto.", "¿Las llaves? Las dejé en el coche."], "Dejar in the preterite yo form: dejé. The pronoun las stays before the verb: the tense never moves it."),
      },
    },
  },
  "a2d-placement-two-positions": {
    goal: "put a pronoun in either correct place with two verbs, and spot the wrong one: lo quiero ver, quiero verlo, never quiero lo ver.",
  },
  "a2-vocabulary-practice-5-part-2": {
    goal: "use the work and health words on your own: translate, complete and say new sentences with words like jubilarse, el sueldo and renunciar.",
  },
};

/** The manual fixes with the generated Latin American answers folded in. */
function withLatam(p: Record<string, LessonPatch>): Record<string, LessonPatch> {
  const out: Record<string, LessonPatch> = { ...p };
  for (const [slug, g] of Object.entries(B1_UNIT2_LATAM)) {
    const m = out[slug] ?? {};
    const alts: Record<number, string[]> = { ...(g.alts ?? {}) };
    for (const [i, a] of Object.entries(m.alts ?? {})) alts[+i] = [...(alts[+i] ?? []), ...a];
    const sections = { ...(m.sections ?? {}) };
    for (const [si, ca] of Object.entries(g.checkAlts ?? {})) sections[+si] = { ...sections[+si], checkAlts: { ...ca, ...(sections[+si]?.checkAlts ?? {}) } };
    out[slug] = { ...m, alts, ...(Object.keys(sections).length ? { sections } : {}) };
  }
  return out;
}

export const B1_UNIT2_PATCHES: Record<string, LessonPatch> = withLatam(manual);
