// Synced from cheneygross-afk/lengo:src/lib/lessons/es-redesign/cross-unit.ts by scripts/sync-content.mjs -- edit it there, not here.
// New course, whole-course sweep (taught before tested): every question,
// unit check, read-and-write task and speaking item was checked, in the
// order learners meet them, against the unit that first teaches each grammar
// point and word. The fixes below are the items that still needed something
// a later unit teaches (or a word nothing had shown yet). Only content
// changes here: what is asked, accepted and glossed. The answer checker and
// the rubric are untouched. Applied after every unit file, so it wins.
import type { Exercise } from "../types";
import type { LessonPatch } from "./patch";

const tr = (prompt: string, source: string, answer: string, altAnswers: string[], explanation: string): Exercise => ({
  type: "translate",
  prompt,
  direction: "en-es",
  source,
  answer,
  ...(altAnswers.length ? { altAnswers } : {}),
  explanation,
});
const speak = (prompt: string, text: string, altAnswers: string[], explanation: string): Exercise => ({
  type: "speak",
  prompt,
  text,
  ...(altAnswers.length ? { altAnswers } : {}),
  explanation,
});
const mc = (question: string, options: string[], explanation: string): Exercise => ({ type: "multiple-choice", question, options, correctIndex: 0, explanation });
const order = (prompt: string, words: string[], translation: string, explanation: string): Exercise => ({
  type: "word-order",
  prompt,
  words,
  translation,
  explanation,
});

export const CROSS_UNIT_PATCHES: Record<string, LessonPatch> = {
  // ---- Beginner
  // Unit 2: "fácil" had not been shown yet.
  "a1r-contrast-articles": { reword: [["The topic (tema) of the class is easy.", "The topic (tema) of the class is easy (fácil)."]] },
  // Unit 3: "sanos" (a recut lesson, so the fix is in a1-unit3.ts).
  // Unit 4: nadie is taught in Intermediate Unit 4; "estación" and "gente" were new.
  "a1r-contrast-hay-esta": {
    exercises: {
      replace: {
        5: order("Put the words in order.", ["No", "hay", "clase", "en", "la", "escuela", "hoy."], "There's no class at the school today.", "No hay clase = there's no class: it doesn't exist today, so hay."),
      },
    },
    reword: [["Ana is at the station. There are many people.", "Ana is at the station (estación). There are many people (gente)."]],
  },
  // Unit 4: -mente words come in Intermediate Unit 5.
  "numbers-0-100-1": {
    exercises: {
      replace: {
        0: speak("Say it in Spanish: \"The book costs one hundred pesos\"", "El libro cuesta cien pesos.", [], "One way to say it: \"El libro cuesta cien pesos\". Exactly 100 is cien. Ciento is only used when a smaller number comes right after (ciento uno, ciento veinte)."),
      },
    },
  },

  // ---- Elementary
  // Unit 2: nadie is taught in Intermediate Unit 4.
  "a1-irregulars-conocer": {
    exercises: {
      replace: {
        9: order("Put the words in order.", ["No", "conozco", "a", "tus", "amigos", "de", "la", "escuela."], "I don't know your friends from school.", "Conozco + a + person: conozco a tus amigos."),
      },
    },
  },
  "saber-vs-conocer": {
    exercises: {
      replace: {
        0: speak("Say it in Spanish: \"I don't know the people at the party\"", "No conozco a la gente de la fiesta.", ["No conozco a las personas de la fiesta."], "One way to say it: \"No conozco a la gente de la fiesta\". People → conocer, yo form conozco, with a before them."),
      },
    },
  },
  // Unit 5: ningún and alguna are taught in Intermediate Unit 4.
  "a2d-question-answer-irregulars": {
    exercises: {
      replace: {
        11: tr("Answer no, for your group.", "¿Tuvieron ustedes problemas?", "No, no tuvimos problemas.", ["No, no tuvimos ningún problema.", "No tuvimos problemas."], "Ustedes → nosotros: tuvimos."),
      },
    },
  },
  "preterite-irregular-verbs-2": { reword: [["¿Hubo alguna decisión importante?", "¿Hubo una decisión importante?"]] },
  // Unit 6: alguna is taught in Intermediate Unit 4; "tenedor" was new.
  "a2r-word-web-travel": { reword: [["«¿Va a facturar alguna maleta?»", "«¿Va a facturar una maleta?»"]] },
  "at-the-restaurant-2": { reword: [["Could you (formal) bring me a fork, please?", "Could you (formal) bring me a fork (tenedor), please?"]] },

  // ---- Intermediate
  // Unit 3: el mío, la tuya... get their own lesson in Unit 6, but the
  // comparisons use them from the first lesson, so the first card shows them.
  "comparisons-superlatives-1": {
    sections: {
      0: {
        examples: [
          { es: "Este vestido es más caro que ese.", en: "This dress is more expensive than that one." },
          { es: "Tengo menos dinero que tú.", en: "I have less money than you." },
          { es: "Mis primas son más altas que mis tías.", en: "My cousins are taller than my aunts. (altas agrees with primas)" },
          { es: "Tu casa es más grande que la mía.", en: "Your house is bigger than mine. Mine and yours match the thing they stand for: el mío, la mía, los míos, las mías; el tuyo, la tuya, los tuyos, las tuyas. They get their own lesson later." },
        ],
      },
    },
  },
  // Unit 4: cuando + the wish form is taught in Advanced Unit 1; "campesinos" was new.
  "a2r-mission-predictions": {
    reword: [
      ["«¿Qué harás cuando termines la universidad?»", "«¿Qué harás después de la universidad?»"],
      ["This year you'll find love. (informal)", "This year you'll find love (amor). (informal)"],
    ],
  },
  "a2d-story-cloze-grandfather": { reword: [["His parents were farmers.", "His parents were farmers (campesinos)."]] },
  // Unit 5: the passive with ser is taught in Advanced Unit 6; -ito words in Unit 6.
  "b1-vocabulary-practice-8": {
    exercises: {
      replace: {
        9: tr("Traduce al español.", "The jury announced the verdict.", "El jurado anunció el veredicto.", ["El jurado dio a conocer el veredicto."], "El veredicto es la decisión del jurado; anunciar en pretérito, él / ella: anunció."),
      },
    },
  },
  "a2r-challenge-story-chain": {
    exercises: {
      replace: {
        5: tr("Translate to Spanish.", "The cabin was small but it was warm.", "La cabaña era pequeña pero estaba caliente.", ["La cabaña era pequeña, pero estaba caliente.", "La cabaña era pequeña pero hacía calor dentro.", "La cabaña era pequeña pero estaba calentita.", "La cabaña era pequeña, pero estaba calentita."], "Description of size → ser; how warm it felt at that moment → estar (caliente = warm)."),
      },
    },
  },
  "a2d-cumulative-circuit-5": { reword: [["De niño mi primo ___ muy gordito.", "De niño mi primo ___ muy tímido."], ["As a child my cousin [was] very chubby.", "As a child my cousin [was] very shy."]] },
  // Unit 6: "cajón" was new.
  "b1d-pares-mi-el-mio": { reword: [["ours are in the drawer.", "ours are in the drawer (cajón)."]] },
  // Unit 7: cuyo is taught in Mastery Unit 1.
  "b1d-pares-que-lo-que": {
    exercises: {
      replace: {
        0: mc("«La canción ___ canta es preciosa.»", ["que", "lo que", "quien", "donde"], "El antecedente es «la canción», un sustantivo sin preposición: que. «Lo que» es para ideas sin antecedente, «quien» es para personas y «donde» es para lugares."),
      },
    },
  },

  // ---- Upper Intermediate
  // Unit 1 to 3: new words.
  "b1r-mission-childs-wish-list": { reword: [["I want you to bring my brother a ball too. (ustedes)", "I want you to bring my brother a ball (balón) too. (ustedes)"]] },
  "b1d-pares-es-verdad-es-posible": { reword: [["the government will raise taxes.", "the government will raise taxes (impuestos)."]] },
  "b1d-corrige-mandatos": { reword: [["Turn off the heating at night. (tú)", "Turn off the heating (calefacción) at night. (tú)"]] },
  "b1d-habla-de-ti-normas-casa": { reword: [["Don't touch the cat; he's grumpy. (tú)", "Don't touch the cat; he's grumpy (gruñón). (tú)"]] },
  // Unit 3: the past wish form (quería que siguiera) is taught in Advanced Unit 2.
  "b2-vocabulary-practice-3": {
    exercises: {
      replace: {
        6: tr("Traduce al español.", "I don't want my children to get their hopes up about a trip we can't afford.", "No quiero que mis hijos se ilusionen con un viaje que no podemos pagar.", ["No quiero que mis hijos se ilusionen con un viaje que no podemos permitirnos.", "No quiero que mis hijos se hagan ilusiones con un viaje que no podemos pagar."], "Ilusionarse con algo = hacerse esperanzas; quiero que + presente de subjuntivo (se ilusionen), porque cambia el sujeto."),
      },
    },
    alts: { 6: [] },
  },
  "b2-vocabulary-practice-3-part-2": {
    exercises: {
      replace: {
        7: tr("Traduce al español.", "My grandmother wants me to follow my vocation, not money.", "Mi abuela quiere que siga mi vocación, no el dinero.", ["Mi abuela quiere que yo siga mi vocación, no el dinero."], "Vocación = inclinación natural hacia una profesión o forma de vida. Quiere que + presente de subjuntivo (siga) porque cambia el sujeto."),
        13: tr("Corrige la frase.", "Ojalá que su sueño de la infancia se materializa pronto.", "Ojalá que su sueño de la infancia se materialice pronto.", ["Ojalá su sueño de la infancia se materialice pronto.", "Ojalá que su sueño de infancia se materialice pronto."], "Materializarse = volverse real. Ojalá (que) siempre lleva subjuntivo: se materialice."),
        14: tr("Traduce al español.", "The teacher (a woman) asks us to meditate for five minutes before the exam.", "La profesora nos pide que meditemos cinco minutos antes del examen.", ["La profesora nos pide que meditemos durante cinco minutos antes del examen."], "Meditar = reflexionar profundamente; pide que + presente de subjuntivo (meditemos)."),
      },
    },
    alts: { 7: [], 13: [], 14: [] },
  },
  // Unit 6: "maíz" was new.
  "b1r-contrast-se-pasivo-impersonal": { reword: [["In Mexico people eat a lot of corn.", "In Mexico people eat a lot of corn (maíz)."]] },
  // Unit 7: the past wish form (antes de que empezara) is taught in Advanced Unit 2.
  "b2d-rep-adverbiales-finalidad": {
    exercises: {
      replace: {
        0: mc("«Lo dejé en la mesa para ___ al salir.» (yo lo veo)", ["verlo", "que lo vea", "que lo veo", "verlo yo mismo ayer"], "Con el mismo sujeto (yo lo dejé, yo lo veo) se usa para + infinitivo: para verlo. «Que lo vea» sugiere otro sujeto, «que lo veo» usa indicativo y la última añade palabras que sobran."),
        19: mc("«Vine a verte para ___ cómo estabas.»", ["saber", "que sé", "que sepa", "sabiendo"], "Yo vine y yo quiero saber: mismo sujeto, para + infinitivo. «Que sepa» sería para otra persona, y para que nunca lleva indicativo («que sé»)."),
        5: speak("Dilo en español: \"I'm leaving before it starts to rain\"", "Me voy antes de que empiece a llover.", ["Me voy antes de que comience a llover."], "Una forma de decirlo: «Me voy antes de que empiece a llover». empezar → empiece: presente de subjuntivo tras antes de que."),
        20: tr("Traduce al español.", "We speak quietly so that the baby doesn't wake up.", "Hablamos en voz baja para que el bebé no se despierte.", ["Susurramos para que el bebé no se despierte.", "Hablamos bajito para que el bebé no se despierte."], "Sujetos distintos (nosotros / el bebé): para que + subjuntivo, se despierte."),
        21: order("Ordena las palabras.", ["Se", "va", "antes", "de", "que", "terminemos", "de", "cenar"], "He leaves before we finish having dinner", "Sujetos distintos (él / nosotros): antes de que + subjuntivo, terminemos."),
        26: tr("Traduce al español.", "The thieves get into the museum without the alarm going off and leave before the guards arrive.", "Los ladrones entran en el museo sin que suene la alarma y se van antes de que lleguen los guardias.", ["Los ladrones entran al museo sin que suene la alarma y se van antes de que lleguen los guardias.", "Los ladrones entran en el museo sin que suene la alarma y se marchan antes de que lleguen los guardias.", "Los ladrones entran en el museo sin que suene la alarma y se van antes de que lleguen los vigilantes."], "Dos cambios de sujeto: sin que suene y antes de que lleguen."),
      },
    },
    alts: { 5: [], 20: [], 26: [] },
  },

  // ---- Advanced
  // Unit 1: cuyo is taught in Mastery Unit 1.
  "b2d-circuito-el-cual-preposiciones-part-2": {
    exercises: {
      replace: {
        13: mc("«Un contrato según ___ cobraré el doble»", ["el cual", "la cual", "lo cual", "los cuales"], "Contrato es masculino singular: según el cual (la cual es femenino y los cuales, plural); lo cual se refiere a ideas, no a sustantivos."),
      },
    },
  },
  // Unit 3 and 7: new words.
  "verbs-of-change-1": { reword: [["Their friendship turned into a love story.", "Their friendship (amistad) turned into a love story."]] },
  "c1r-contrast-ser-estar-participle-c1-part-2": { reword: [["The winners were chosen at random.", "The winners were chosen at random (al azar)."]] },
  "ser-estar-haber-limits-part-1-1": { reword: [["was in a sports hall that is now", "was in a sports hall (pabellón) that is now"]] },

  // ---- Mastery: new words in translations.
  "b2d-cuento-texto-formal": { reword: [["are worth ten thousand dollars each.", "are worth (estar dotados con) ten thousand dollars each."]] },
  "b2d-patron-cuyo": { reword: [["I don't trust a company whose prices", "I don't trust (fiarse de) a company whose prices"]] },
  "nominalization-part-1-3-part-2": { reword: [["with the ugliness of the surrounding", "with the ugliness (fealdad) of the surrounding"]] },
  "nominalization-part-2-2": { reword: [["by adding affixes.", "by adding affixes (afijos)."]] },
  "c1r-text-detective-subjunctive": { reword: [["haven't received any compensation.", "haven't received any compensation (indemnización)."]] },
  "c2r-rhetorical-vocab-spiral-part-2": { reword: [["and her anger a spark.", "and her anger (ira) a spark (chispa)."]] },
  "historical-narrative-4": { reword: [["take over the railway station.", "take over the railway station (estación de ferrocarril)."]] },
  "formal-informal-register-1-part-2": { reword: [["asking him about his hometown.", "asking him about his hometown (ciudad natal)."]] },
  "c1r-mission-instructions-manual": { reword: [["taking care not to lose the screws.", "taking care not to lose the screws (tornillos)."]] },
  "historical-narrative-2-part-2": { reword: [["The mutiny had been planned", "The mutiny (motín) had been planned"]] },
  "c2r-critic-mission-review": { reword: [["in washed-out colours,", "in washed-out (desvaídos) colours,"]] },
};
